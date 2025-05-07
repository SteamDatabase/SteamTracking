/**
 * Webpack JavaScript Normalizer
 *
 * Normalizes minified webpack JavaScript files to reduce noise in git diffs.
 * This makes it easier to track actual code changes rather than just
 * minification differences between builds.
 *
 * DESIGN NOTES:
 * -------------
 * 1. AST-Based Processing:
 *    - Uses estraverse for AST traversal with proper scope tracking
 *    - Maintains variable shadowing through scope stack
 *    - Leverages estraverse's enter/leave callbacks for clean processing
 *
 * 2. Normalization Strategies:
 *    - CLSTAMP/Build ID: Replaces build timestamps with "steamdb"
 *    - Module IDs: Replaces numeric chunk IDs with "chunkid"
 *    - Short Variables: Replaces identifiers < 3 chars with "_"
 *    - Webpack Parameters: Standardizes to module/module_exports/__webpack_require__
 *    - Require Patterns: Handles direct calls, method calls, and bind patterns
 *
 * 3. Special Handling:
 *    - Class safety: Avoids modifying constructor method structure
 *    - Scope-aware replacement: Respects variable shadowing
 *    - Sequence expressions: Preserves structure in comma expressions
 *
 */

import fs from "node:fs";
import { parse, latestEcmaVersion } from "espree";
import { traverse, Syntax } from "estraverse";
import { generate } from "astring";

// Process command line arguments
const inputFile = process.argv[2];
if (!inputFile) {
	console.error("Error: Input file path required");
	process.exit(1);
}

const outputFile = process.argv[3]; // Optional

// Read input file
let sourceCode;
try {
	sourceCode = fs.readFileSync(inputFile, "utf8");
} catch (err) {
	console.error(`Error reading file: ${err.message}`);
	process.exit(1);
}

// Parse the JavaScript code into an AST
let ast;
try {
	ast = parse(sourceCode, {
		ecmaVersion: latestEcmaVersion,
		sourceType: "module",
		ecmaFeatures: { jsx: true },
	});
} catch (err) {
	try {
		// Try again with 'script' source type if 'module' fails
		ast = parse(sourceCode, {
			ecmaVersion: latestEcmaVersion,
			sourceType: "script",
			ecmaFeatures: { jsx: true },
		});
	} catch (innerErr) {
		console.error(`Failed to parse JavaScript: ${innerErr.message}`);
		process.exit(1);
	}
}

// Normalize the AST
function normalizeAst(ast) {
	// STEP 1: Normalize CLSTAMP if present
	if (ast.type === Syntax.Program && ast.body.length > 0) {
		const firstStmt = ast.body[0];
		if (firstStmt.type === Syntax.VariableDeclaration && firstStmt.declarations.length > 0) {
			const decl = firstStmt.declarations[0];
			if (
				decl.id &&
				decl.id.name === "CLSTAMP" &&
				decl.init &&
				decl.init.type === Syntax.Literal &&
				typeof decl.init.value === "string"
			) {
				decl.init.value = "steamdb";
				decl.init.raw = '"steamdb"';
			}
		}
	}

	// STEP 2: First pass to find webpack modules and require functions
	const webpackModules = new Map();
	const webpackRequires = new Set();

	// Find webpack modules and parameters
	traverse(ast, {
		enter: (node, parent) => {
			if (
				node.type === Syntax.Property &&
				node.key &&
				node.key.type === Syntax.Literal &&
				typeof node.key.value === "number"
			) {
				if (node.value.type === Syntax.FunctionExpression || node.value.type === Syntax.ArrowFunctionExpression) {
					// Replace chunk IDs with "chunkid"
					node.key.value = "chunkid";
					node.key.raw = '"chunkid"';

					// Track webpack modules
					if (node.value.params.length === 3) {
						const moduleParam = node.value.params[0].name;
						const exportsParam = node.value.params[1].name;
						const requireParam = node.value.params[2].name;

						webpackModules.set(node.value, {
							moduleParam,
							exportsParam,
							requireParam,
						});

						webpackRequires.add(requireParam);

						// Standardize params
						node.value.params[0].name = "module";
						node.value.params[1].name = "module_exports";
						node.value.params[2].name = "__webpack_require__";
					} else if (node.value.params.length === 1) {
						const moduleParam = node.value.params[0].name;

						webpackModules.set(node.value, {
							moduleParam,
						});

						// Standardize param
						node.value.params[0].name = "module";
					}
				}
			}
			return node;
		},
	});

	// Add standardized require name to the set
	webpackRequires.add("__webpack_require__");

	// STEP 3: Second pass to update identifiers, respecting scope
	// Create scopes array to track variables in scope
	const scopes = [];

	// Find containing function for a node
	function findContainingFunction(node) {
		let current = node;
		while (
			current &&
			current.type !== Syntax.FunctionExpression &&
			current.type !== Syntax.ArrowFunctionExpression &&
			current.type !== Syntax.FunctionDeclaration
		) {
			current = current._parentNode;
		}
		return current;
	}

	// Create a normalized chunk ID literal
	function createChunkIdLiteral() {
		return {
			type: Syntax.Literal,
			value: "chunkid",
			raw: '"chunkid"',
		};
	}

	// Track parent nodes during traversal
	const parentMap = new WeakMap();

	// First traversal to set up parent references
	traverse(ast, {
		enter: (node, parent) => {
			if (parent) {
				parentMap.set(node, parent);
				node._parentNode = parent;
			}
		},
	});

	// Main traversal for normalization
	traverse(ast, {
		enter: (node, parent) => {
			// Handle new scope for functions
			if (
				node.type === Syntax.FunctionExpression ||
				node.type === Syntax.ArrowFunctionExpression ||
				node.type === Syntax.FunctionDeclaration
			) {
				const newScope = new Set();

				// Add parameters to the new scope
				if (node.params) {
					for (const param of node.params) {
						if (param.type === Syntax.Identifier) {
							newScope.add(param.name);

							// Normalize short parameter names in non-webpack modules
							if (param.name.length < 3 && !webpackModules.has(node)) {
								param.name = "_";
							}
						}
					}
				}

				// For function declarations, add the function name to the parent scope
				if (node.type === Syntax.FunctionDeclaration && node.id && node.id.type === Syntax.Identifier) {
					if (scopes.length > 0) {
						scopes[scopes.length - 1].add(node.id.name);
					}
				}

				// Push the new scope
				scopes.push(newScope);
			}

			// Handle variable declarations - add to current scope
			if (node.type === Syntax.VariableDeclaration) {
				for (const decl of node.declarations) {
					if (decl.id && decl.id.type === Syntax.Identifier) {
						// Add to current scope
						if (scopes.length > 0) {
							scopes[scopes.length - 1].add(decl.id.name);
						}

						// Normalize short names
						if (decl.id.name.length < 3) {
							decl.id.name = "_";
						}
					}
				}
			}

			// Handle catch clause parameters
			if (node.type === Syntax.CatchClause && node.param && node.param.type === Syntax.Identifier) {
				// Add to current scope
				if (scopes.length > 0) {
					scopes[scopes.length - 1].add(node.param.name);
				}

				// Normalize if short
				if (node.param.name.length < 3) {
					node.param.name = "_";
				}
			}

			// Handle identifiers (variable references)
			if (node.type === Syntax.Identifier) {
				// Skip if property key
				if (
					parent &&
					((parent.type === Syntax.Property && parent.key === node) ||
						(parent.type === Syntax.MethodDefinition && parent.key === node))
				) {
					return;
				}

				// Check for shadowing
				let isShadowed = false;
				for (let i = scopes.length - 1; i >= 0; i--) {
					if (scopes[i].has(node.name)) {
						isShadowed = true;
						break;
					}
				}

				// Handle based on shadowing status
				if (!isShadowed) {
					// Check if inside webpack module
					const containingFunc = findContainingFunction(node);

					if (containingFunc && webpackModules.has(containingFunc)) {
						// Inside webpack module - replace webpack parameters
						const moduleInfo = webpackModules.get(containingFunc);

						if (node.name === moduleInfo.moduleParam) {
							node.name = "module";
						} else if (moduleInfo.exportsParam && node.name === moduleInfo.exportsParam) {
							node.name = "module_exports";
						} else if (moduleInfo.requireParam && node.name === moduleInfo.requireParam) {
							node.name = "__webpack_require__";
						} else if (node.name.length < 3) {
							node.name = "_";
						}
					} else {
						// Outside webpack module
						if (webpackRequires.has(node.name)) {
							node.name = "__webpack_require__";
						} else if (node.name.length < 3) {
							node.name = "_";
						}
					}
				} else if (node.name.length < 3) {
					// Shadowed but short - normalize
					node.name = "_";
				}
			}

			// Handle object property keys
			if (node.type === Syntax.Property && node.key.type === Syntax.Identifier && node.key.name.length < 3) {
				node.key.name = "_";
			}

			// Handle member expression properties
			if (
				node.type === Syntax.MemberExpression &&
				!node.computed &&
				node.property.type === Syntax.Identifier &&
				node.property.name.length < 3
			) {
				node.property.name = "_";
			}

			// Handle webpack require calls
			if (node.type === Syntax.CallExpression) {
				// Direct require calls
				if (node.callee.type === Syntax.Identifier && webpackRequires.has(node.callee.name)) {
					// Normalize function name
					node.callee.name = "__webpack_require__";

					// Normalize chunk ID argument
					if (
						node.arguments.length === 1 &&
						node.arguments[0].type === Syntax.Literal &&
						typeof node.arguments[0].value === "number"
					) {
						node.arguments[0] = createChunkIdLiteral();
					}
				}
				// Method calls
				else if (
					node.callee.type === Syntax.MemberExpression &&
					node.callee.object.type === Syntax.Identifier &&
					webpackRequires.has(node.callee.object.name)
				) {
					// Normalize object name
					node.callee.object.name = "__webpack_require__";

					// Normalize chunk ID argument
					if (
						node.arguments.length === 1 &&
						node.arguments[0].type === Syntax.Literal &&
						typeof node.arguments[0].value === "number"
					) {
						node.arguments[0] = createChunkIdLiteral();
					}
				}
				// Bind calls
				else if (
					node.callee.type === Syntax.MemberExpression &&
					node.callee.property.type === Syntax.Identifier &&
					node.callee.property.name === "bind" &&
					node.callee.object.type === Syntax.Identifier &&
					webpackRequires.has(node.callee.object.name)
				) {
					// Normalize object name
					node.callee.object.name = "__webpack_require__";

					// Normalize require function in first argument
					if (
						node.arguments.length >= 1 &&
						node.arguments[0].type === Syntax.Identifier &&
						webpackRequires.has(node.arguments[0].name)
					) {
						node.arguments[0].name = "__webpack_require__";
					}

					// Normalize chunk ID in second argument
					if (
						node.arguments.length >= 2 &&
						node.arguments[1].type === Syntax.Literal &&
						typeof node.arguments[1].value === "number"
					) {
						node.arguments[1] = createChunkIdLiteral();
					}
				}
			}
		},

		leave: (node, parent) => {
			// Remove scopes when leaving function nodes
			if (
				node.type === Syntax.FunctionExpression ||
				node.type === Syntax.ArrowFunctionExpression ||
				node.type === Syntax.FunctionDeclaration
			) {
				scopes.pop();
			}
		},
	});

	return ast;
}

// Normalize the AST and generate the output code
const normalizedAst = normalizeAst(ast);
const normalizedCode = generate(normalizedAst, {
	indent: "\t",
});

if (outputFile) {
	fs.writeFileSync(outputFile, normalizedCode);
} else {
	// Print to stdout
	process.stdout.write(normalizedCode);
}

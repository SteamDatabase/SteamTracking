import { readFile, writeFile } from "node:fs/promises";
import { resolve as pathResolve } from "node:path";
import { latestEcmaVersion, parse } from "espree";
import { Syntax, traverse } from "estraverse";
import { GetRecursiveFilesToParse } from "./dump_javascript_paths.mjs";

const __dirname = import.meta.dirname;

const allStrings = new Set();

for await (const file of GetRecursiveFilesToParse()) {
	try {
		const code = await readFile(file);
		const ast = parse(code, {
			ecmaVersion: latestEcmaVersion,
			sourceType: "module",
			loc: true,
		});

		traverse(ast, {
			enter: function (node) {
				if (node.type === Syntax.TemplateLiteral && node.expressions.some(IsBaseUrlExpression)) {
					allStrings.add(ConstructLiteral(node));
					this.skip();
				} else if (
					node.type === Syntax.Literal &&
					IsBaseUrlExpression(node) &&
					!file.endsWith("steammobile_chat.js") &&
					!file.endsWith("steammobile_app.js")
				) {
					allStrings.add(FormatNode(node, true).join(""));
					this.skip();
				} else if (node.type === Syntax.BinaryExpression && IsLeftSideBaseUrlExpression(node)) {
					allStrings.add(FormatNode(node, true).join(""));
					this.skip();
				}
			},
		});
	} catch (e) {
		console.error(`Unable to parse "${file}": ${e}`);
	}
}

console.log("Found", allStrings.size, "strings");

const filteredStrings = [...allStrings.values()].filter((url) => !url.startsWith("https://swarm.valve.org/changes/"));
const strings = filteredStrings.sort().join("\n") + "\n";

await writeFile(pathResolve(__dirname, "API/JavascriptUrls.txt"), strings);

function IsLeftSideBaseUrlExpression(node) {
	return node.left.type === Syntax.BinaryExpression
		? IsLeftSideBaseUrlExpression(node.left)
		: IsBaseUrlExpression(node.left);
}

function IsBaseUrlExpression(node) {
	if (
		node.type === Syntax.Literal &&
		typeof node.value === "string" &&
		(node.value.startsWith("http://") || node.value.startsWith("https://") || node.value.startsWith("steam://"))
	) {
		return true;
	}

	if (node.type === Syntax.Identifier && IsUrlVariable(node.name)) {
		return true;
	}

	return (
		node.type === Syntax.MemberExpression &&
		node.property.type === Syntax.Identifier &&
		IsUrlVariable(node.property.name)
	);
}

/**
 * @param {string} name
 */
function IsUrlVariable(name) {
	const n = name.toUpperCase();
	return n.endsWith("URL") || n.startsWith("BASE_URL_");
}

/**
 * @param {string} name
 */
function IsSafeName(name) {
	return name.length > 2 || name.toUpperCase() === "ID";
}

function ConstructLiteral(parent) {
	const nodes = [...(parent.expressions || []), ...(parent.quasis || [])].sort((a, b) => a.start - b.start);
	const str = [];

	for (const node of nodes) {
		str.push(...FormatNode(node));
	}

	return str.join("");
}

function FormatNode(node, noWrap = false) {
	const str = [];

	if (node.type === Syntax.TemplateElement) {
		str.push(node.value.raw);
	} else if (
		node.type === Syntax.MemberExpression &&
		node.property.type === Syntax.Identifier &&
		IsSafeName(node.property.name)
	) {
		str.push(`\${${node.property.name}}`);
	} else if (node.type === Syntax.Identifier && IsSafeName(node.name)) {
		str.push(`\${${node.name}}`);
	} else if (node.type === Syntax.ConditionalExpression) {
		str.push("${");

		if (
			node.test.type === Syntax.MemberExpression &&
			node.test.property.type === Syntax.Identifier &&
			IsSafeName(node.test.property.name)
		) {
			str.push(node.test.property.name);
		} else if (node.test.type === Syntax.Identifier && IsSafeName(node.test.name)) {
			str.push(node.test.name);
		} else {
			str.push("_");
		}

		str.push(" ? ");

		if (node.consequent.type === Syntax.Literal) {
			str.push(node.consequent.raw);
		} else if (node.consequent.type === Syntax.TemplateLiteral) {
			str.push(`\`${ConstructLiteral(node.consequent)}\``);
		} else {
			str.push("_");
		}

		str.push(" : ");

		if (node.alternate.type === Syntax.Literal) {
			str.push(node.alternate.raw);
		} else if (node.alternate.type === Syntax.TemplateLiteral) {
			str.push(`\`${ConstructLiteral(node.alternate)}\``);
		} else {
			str.push("_");
		}

		str.push("}");
	} else if (node.type === Syntax.TemplateLiteral) {
		if (noWrap) {
			str.push(ConstructLiteral(node));
		} else {
			str.push(`\`${ConstructLiteral(node)}\``);
		}
	} else if (node.type === Syntax.Literal) {
		str.push(node.value);
	} else if (node.type === Syntax.BinaryExpression) {
		str.push(...FormatNode(node.left, true));
		str.push(...FormatNode(node.right, true));
	} else {
		str.push("${}");
	}

	return str;
}

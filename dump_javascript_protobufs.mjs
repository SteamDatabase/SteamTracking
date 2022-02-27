import path from "path";
import fs from "fs";
import { parse, latestEcmaVersion } from "espree";
import { traverse, Syntax } from "estraverse";

//const files = await GetListOfFilesToParse("./.support/original_js/");
const files = ["steamcommunity.com\\public\\javascript\\applications\\community\\broadcasts.js"];

for (const file of files) {
	try {
		const code = fs.readFileSync(file);
		const ast = parse(code, { ecmaVersion: latestEcmaVersion, loc: true });

		traverse(ast, {
			enter: function (node) {
				if (node.type == Syntax.Property) {
					TraverseModule(node.value);
					this.skip();
				}
			},
		});
	} catch (e) {
		console.error(`Unable to parse "${path.basename(file)}": ${e}`);
		continue;
	}
}

function TraverseModule(ast) {
	let messageIdentifier = null;

	traverse(ast, {
		enter: function (node) {
			if (
				node.type === Syntax.VariableDeclarator &&
				node.id.type === Syntax.Identifier &&
				node.init?.type === Syntax.MemberExpression &&
				node.init.property.type === Syntax.Identifier &&
				node.init.property.name === "Message"
			) {
				messageIdentifier = node.id.name;
			}

			if (
				messageIdentifier !== null &&
				node.type === Syntax.ClassDeclaration &&
				node.superClass?.type === Syntax.Identifier &&
				node.superClass.name === messageIdentifier
			) {
				TraverseClass(node.body);
				this.skip();
			}
		},
	});
}

function TraverseClass(ast) {
	let className = null;

	traverse(ast, {
		enter: function (node) {
			if (node.type === Syntax.MethodDefinition && node.key.type === Syntax.Identifier && node.key.name === "M") {
				TraverseFields(node.value);
				this.skip();
			}

			if (
				node.type === Syntax.MethodDefinition &&
				node.key.type === Syntax.Identifier &&
				node.key.name === "getClassName"
			) {
				className = GetClassNameLiteral(node.value);
				this.skip();
			}
		},
	});

	if (className === null) {
		throw new Error("Failed to find classname");
	}
}

function TraverseFields(ast) {
	traverse(ast, {
		enter: function (node) {
			if (node.type === Syntax.Property && node.key.type === Syntax.Identifier && node.key.name === "fields") {
				for (const prop of node.value.properties) {
					console.log(prop.key.name);
				}

				this.skip();
			}
		},
	});
}

function GetClassNameLiteral(ast) {
	let value = null;

	traverse(ast, {
		enter: function (node, parent) {
			if (node.type === Syntax.Literal && parent.type === Syntax.ReturnStatement) {
				value = node.value;
			}
		},
	});

	return value;
}

function GetListOfFilesToParse(dirName) {
	return fs.promises
		.readdir(dirName)
		.then((files) =>
			files.filter((fileName) => fileName.endsWith("js")).map((fileName) => path.join(dirName, fileName))
		);
}

import path from "path";
import fs from "fs";
import { parse, latestEcmaVersion } from "espree";
import { traverse } from "estraverse";

const allStrings = new Set();
const files = await GetListOfFilesToParse("./.support/original_js/");

for (const file of files) {
	try {
		const code = fs.readFileSync(file);
		const ast = parse(code, { ecmaVersion: latestEcmaVersion });

		traverse(ast, {
			enter: function (node) {
				if (
					node.type === "TemplateLiteral" &&
					node.expressions.some(
						(expr) =>
							expr.type === "MemberExpression" &&
							expr.property.type === "Identifier" &&
							expr.property.name.endsWith("BASE_URL")
					)
				) {
					allStrings.add(ConstructLiteral(node));
					this.skip();
				}
			},
		});
	} catch (e) {
		console.error(`Unable to parse "${path.basename(file)}": ${e}`);
		continue;
	}
}

const strings = [...allStrings.values()].sort().join("\n") + "\n";

fs.writeFileSync("API/JavascriptUrls.txt", strings);

function GetListOfFilesToParse(dirName) {
	return fs.promises
		.readdir(dirName)
		.then((files) =>
			files.filter((fileName) => fileName.endsWith("js")).map((fileName) => path.join(dirName, fileName))
		);
}

function IsSafeName(name) {
	return name.length > 2 || name.toUpperCase() === "ID";
}

function ConstructLiteral(parent) {
	const nodes = [...(parent.expressions || []), ...parent.quasis].sort((a, b) => a.start - b.start);
	const str = [];

	for (const node of nodes) {
		if (node.type === "TemplateElement") {
			str.push(node.value.raw);
		} else if (
			node.type === "MemberExpression" &&
			node.property.type === "Identifier" &&
			IsSafeName(node.property.name)
		) {
			str.push(`\${${node.property.name}}`);
		} else if (node.type === "Identifier" && IsSafeName(node.name)) {
			str.push(`\${${node.name}}`);
		} else if (node.type === "ConditionalExpression") {
			str.push("${_ ? ");

			if (node.consequent.type === "Literal") {
				str.push(node.consequent.raw);
			} else if (node.consequent.type === "TemplateLiteral") {
				str.push(`\`${ConstructLiteral(node.consequent)}\``);
			} else {
				str.push("_");
			}

			str.push(" : ");

			if (node.alternate.type === "Literal") {
				str.push(node.alternate.raw);
			} else if (node.alternate.type === "TemplateLiteral") {
				str.push(`\`${ConstructLiteral(node.alternate)}\``);
			} else {
				str.push("_");
			}

			str.push("}");
		} else if (node.type === "TemplateLiteral") {
			str.push(`\`${ConstructLiteral(node)}\``);
		} else {
			str.push("${}");
		}
	}

	return str.join("");
}

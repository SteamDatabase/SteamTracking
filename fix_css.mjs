import { readFile, writeFile, readdir as readDir, rm } from "node:fs/promises";
import { parse, latestEcmaVersion } from "espree";
import { traverse, Syntax } from "estraverse";
import { resolve as pathResolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const classRegex = /(\.[a-zA-Z0-9_-]+)/g;

const paths = [
	"./Scripts/WebUI/",
	"./ClientExtracted/",
	"./help.steampowered.com/",
	"./partner.steamgames.com/",
	"./steamcommunity.com/",
	"./store.steampowered.com/",
	"./www.dota2.com/",
	"./www.underlords.com/",
	"./www.counter-strike.net/",
];

async function ParseJsFile(file, classNames) {
	if (file.endsWith("licenses.js")) {
		return;
	}

	try {
		const code = await readFile(file);
		const ast = parse(code, {
			ecmaVersion: latestEcmaVersion,
			sourceType: "module",
			loc: true,
		});

		traverse(ast, {
			enter: (node) => {
				// console.log(node);
				if (
					node.type === Syntax.AssignmentExpression &&
					node.left.type === Syntax.MemberExpression &&
					node.left.property.type === Syntax.Identifier &&
					node.left.property.name === "exports" &&
					node.right.type === Syntax.ObjectExpression &&
					node.right.properties.constructor === Array
				) {
					for (const array_node of node.right.properties) {
						if (array_node.value.type !== Syntax.Literal || isNumber(String(array_node.value.value), 2)) {
							continue;
						}
						if (!Object.hasOwn(classNames, array_node.value.value)) {
							classNames[array_node.value.value] = [array_node.key.name];
						} else {
							if (!classNames[array_node.value.value].includes(array_node.key.name)) {
								classNames[array_node.value.value].push(array_node.key.name);
							}
						}
					}
				}
			},
		});
	} catch (e) {
		console.error(`Unable to parse "${file}":`, e);
	}
}

async function FixCssFile(path, classNames) {
	try {
		const css = (await readFile(path)).toString();
		let output = css;
		const matches = [...new Set(css.match(classRegex))];
		if (matches) {
			for (const match of matches) {
				if (Object.hasOwn(classNames, match.slice(1))) {
					// replacing by multiple classes creates non valid css but it makes it easy to detect issues
					output = output.replaceAll(match, `.${classNames[match.slice(1)].join("|")}`);
				}
			}
		}
		const outputPath = path.replace(".css", ".fixed.css");
		if (output !== css) {
			await writeFile(outputPath, output);
		} else {
			// best effort to clean our mess if we did some,
			// although it might have some problematic effect if the Js parse part need a fix at some point in time
			await rm(outputPath, { force: true });
		}
	} catch (e) {
		console.error(`Unable to fix "${path}":`, e);
	}
}

async function* GetRecursiveFiles(dir, ext) {
	const dirents = await readDir(dir, { withFileTypes: true });
	for (const dirent of dirents) {
		const res = pathResolve(dir, dirent.name);
		if (dirent.isDirectory()) {
			yield* GetRecursiveFiles(res, ext);
		} else if (dirent.isFile() && dirent.name.endsWith(ext)) {
			yield res;
		}
	}
}

// Why is this not working?
// function isNumber(string, nbrRecursiceSlice = 0) {
//     return !Number.isNaN(Number(string)) || (string.length > 0 && nbrRecursiceSlice > 0 ) ? isNumber(string.slice(0,-1), nbrRecursiceSlice - 1) :  false;
// }

// best effort to guess if a string is a number (tries to remove the unit at the end)
function isNumber(string, nbrRecursiceSlice) {
	while (string.length > 0 && nbrRecursiceSlice > 0) {
		if (Number.isNaN(Number(string))) {
			string = string.slice(0, -1);
		} else {
			return true;
		}
	}
	return false;
}

if (process.argv.length > 2) {
	const classNames = {};
	const __dirname = dirname(fileURLToPath(import.meta.url));
	const jsPath = process.argv[2].replace(__dirname, "").split("/")[1];

	for await (const file of GetRecursiveFiles(jsPath, ".js")) {
		await ParseJsFile(file, classNames);
	}
	await FixCssFile(process.argv[2], classNames);
} else {
	for (const path of paths) {
		const classNames = {};

		for await (const file of GetRecursiveFiles(path, ".js")) {
			await ParseJsFile(file, classNames);
		}

		for await (const file of GetRecursiveFiles(path, ".css")) {
			await FixCssFile(file, classNames);
		}
	}
}

import { createHash } from "node:crypto";
import { existsSync, mkdirSync, readdirSync, rmSync } from "node:fs";
import { readFile, writeFile } from "node:fs/promises";
import { resolve as pathResolve } from "node:path";
import { latestEcmaVersion, parse } from "espree";
import { Syntax, traverse } from "estraverse";
import { create as createXml } from "xmlbuilder2";
import { GetRecursiveFilesToParse } from "../dump_javascript_paths.mjs";

const __dirname = import.meta.dirname;
const rootDir = pathResolve(__dirname, "..");
const outputPath = pathResolve(rootDir, "Random/Images");

const writtenFiles = new Set();

const svgKeyMap = {
	ariaLabel: "aria-label",
	clipPath: "clip-path",
	clipRule: "clip-rule",
	colorInterpolationFilters: "color-interpolation-filters",
	dataName: "data-name",
	enableBackground: "enable-background",
	fillOpacity: "fill-opacity",
	fillRule: "fill-rule",
	filterUnits: "filter-units",
	floodColor: "flood-color",
	floodOpacity: "flood-opacity",
	fontFamily: "font-family",
	fontSize: "font-size",
	fontWeight: "font-weight",
	gradientUnits: "gradient-units",
	markerEnd: "marker-end",
	markerHeight: "marker-height",
	markerWidth: "marker-width",
	maskType: "mask-type",
	maskUnits: "mask-units",
	patternContentUnits: "pattern-content-units",
	stopColor: "stop-color",
	stopOpacity: "stop-opacity",
	strokeDasharray: "stroke-dasharray",
	strokeDashoffset: "stroke-dashoffset",
	strokeLinecap: "stroke-linecap",
	strokeLinejoin: "stroke-linejoin",
	strokeMiterlimit: "stroke-miterlimit",
	strokeOpacity: "stroke-opacity",
	strokeWidth: "stroke-width",
	textAnchor: "text-anchor",
	xlinkHref: "xlink:href",
};

mkdirSync(outputPath, { recursive: true });

for await (const file of GetRecursiveFilesToParse()) {
	try {
		const code = await readFile(file, "utf8");

		if (!file.endsWith(".js")) {
			continue;
		}

		const sourceType = file.includes("/ssr/") || file.includes("\\ssr\\") ? "module" : "script";

		const ast = parse(code, {
			ecmaVersion: latestEcmaVersion,
			sourceType: sourceType,
			loc: true,
		});

		traverse(ast, {
			enter: function (node) {
				if (node.type === Syntax.CallExpression) {
					let calleeName = null;

					if (node.callee?.type === Syntax.SequenceExpression) {
						const last = node.callee.expressions[node.callee.expressions.length - 1];
						if (last?.type === Syntax.MemberExpression) {
							calleeName = last.property.name;
						}
					} else if (node.callee?.type === Syntax.MemberExpression) {
						calleeName = node.callee.property.name;
					}

					if (calleeName === "createElement" && node.arguments?.[0]?.value === "svg") {
						const svg = createSvgBody(node).end({ prettyPrint: true });
						if (svg.length > 0) {
							const content = Buffer.from(
								`${svg}\n<!-- ${file.substring(rootDir.length + 1).replace(/\\/g, "/")} -->\n`,
								"utf8",
							);

							OutputToFile("svg", content);
						}

						this.skip();
						return;
					}

					if ((calleeName === "jsx" || calleeName === "jsxs") && node.arguments?.[0]?.value === "svg") {
						const svg = createSvgBody(node).end({ prettyPrint: true });
						if (svg.length > 0) {
							const content = Buffer.from(`${svg}\n`, "utf8"); // no path comment

							OutputToFile("svg", content);
						}

						this.skip();
						return;
					}
				}

				if (node.type === Syntax.Literal && typeof node.value === "string" && node.value.startsWith("data:image/")) {
					const dataUri = node.value;
					const marker = ";base64,";
					const commaIndex = dataUri.indexOf(marker);
					if (commaIndex === -1) {
						return;
					}

					const header = dataUri.substring(0, commaIndex);
					const base64Data = dataUri.substring(commaIndex + marker.length);

					let extension;
					if (header === "data:image/png") {
						extension = "png";
					} else if (header === "data:image/jpeg") {
						extension = "jpg";
					} else if (header === "data:image/gif") {
						extension = "gif";
					} else if (header === "data:image/webp") {
						extension = "webp";
					} else if (header === "data:image/svg+xml") {
						extension = "svg";
					} else {
						console.warn(`Unknown data URI header: ${header}`);
						return;
					}

					const data = Buffer.from(base64Data, "base64");
					OutputToFile(extension, data);
				}
			},
		});
	} catch (e) {
		console.error(`Unable to parse "${file}": ${e}`);
	}
}

const allFiles = readdirSync(outputPath).map((f) => `${outputPath}/${f}`);
for (const file of allFiles) {
	if (!writtenFiles.has(file)) {
		console.log("Removing unused file:", file);
		rmSync(file);
	}
}

console.log("Extracted", writtenFiles.size, "files.");

function createSvgBody(node, xml = createXml()) {
	if (!node) {
		return xml;
	}

	try {
		const elem = xml.ele(node.arguments[0].value);

		let childrenProp = null;
		if (node.arguments[1]?.properties) {
			for (const prop of node.arguments[1].properties) {
				if (prop.type === Syntax.SpreadElement || prop.key.name === "className") {
					continue;
				}

				if (prop.key.name === "children") {
					childrenProp = prop.value;
					continue;
				}

				let val = prop.value.value;
				if (prop.value?.type !== Syntax.Literal) {
					val = "";
				}

				elem.att(FixSVGKeyName(prop.key), val);
			}
		}

		let children = [];
		if (node.arguments.length > 2) {
			children = node.arguments.slice(2);
		} else if (childrenProp) {
			if (childrenProp.type === Syntax.ArrayExpression) {
				children = childrenProp.elements;
			} else {
				children = [childrenProp];
			}
		}

		if (children) {
			for (const child of children) {
				if (child?.type === Syntax.CallExpression && child.arguments?.[0]?.type === Syntax.Literal) {
					createSvgBody(child, elem);
				}
			}
		}
	} catch (e) {
		console.error(e, node);
	}

	return xml;
}

function FixSVGKeyName(key) {
	// if a key has a dash in it, it's under value not name
	const keyName = key.name || key.value;
	return svgKeyMap[keyName] || keyName;
}

/**
 * @param {string} extension
 * @param {Buffer<ArrayBuffer>} content
 */
async function OutputToFile(extension, content) {
	if (content.length === 0) {
		return;
	}

	const hash = createHash("sha3-384").update(content).digest("hex").substring(0, 20);
	const fileName = `${outputPath}/${hash}.${extension}`;
	writtenFiles.add(fileName);

	if (existsSync(fileName)) {
		return;
	}

	console.log("Writing file:", fileName);

	await writeFile(fileName, content);
}

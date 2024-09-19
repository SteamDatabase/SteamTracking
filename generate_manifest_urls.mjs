import { readFile, writeFile } from "node:fs/promises";
import { parse, latestEcmaVersion } from "espree";
import { traverse, Syntax } from "estraverse";

const files = [
	{
		file: "store.steampowered.com/public/javascript/applications/store/manifest.js",
		cdn: "https://store.steampowered.com/public/",
	},
	{
		file: "steamcommunity.com/public/javascript/applications/community/manifest.js",
		cdn: "https://steamcommunity.com/public/",
	},
	{
		file: "help.steampowered.com/public/javascript/applications/help/manifest.js",
		cdn: "https://help.steampowered.com/public/",
	},
	{
		file: "partner.steamgames.com/public/javascript/applications/appmgmt/manifest.js",
		cdn: "https://partner.steamgames.com/public/",
	},
	/* different AST
	{
		file: "partner.steamgames.com/public/javascript/webui/storeadmin/storeadmin.js",
		cdn: "https://partner.steamgames.com/public/",
	},
	*/
];

const urls = new Set();
const oldUrls = (await readFile(".support/urls_from_manifests.txt", { encoding: "utf8" })).trim().split("\n");

for (const url of oldUrls) {
	const fileName = url.substring(url.lastIndexOf("/") + 1);

	if (!/^(chunk~|libraries~|[0-9]+\.)/.test(fileName)) {
		urls.add(url);
	}
}

console.log("Remembered", urls.size, "urls");

for (const { file, cdn } of files) {
	let found = false;

	try {
		const code = await readFile(file);
		const ast = parse(code, { ecmaVersion: latestEcmaVersion, loc: true });

		const seenIds = new Set();

		traverse(ast, {
			enter: function (node) {
				if (
					node.type === Syntax.BinaryExpression &&
					node.left.type === Syntax.BinaryExpression &&
					node.left.right.type === Syntax.Literal &&
					/\.(css|js)\?contenthash=/.test(node.left.right.value) &&
					node.right.type === Syntax.MemberExpression &&
					node.right.object.type === Syntax.ObjectExpression
				) {
					for (const property of node.right.object.properties) {
						if (property.value.type === Syntax.Literal) {
							seenIds.add(property.key.raw);
						}
					}
				}

				// Useful: https://astexplorer.net/
				if (
					node.type === Syntax.BinaryExpression &&
					node.left.type === Syntax.Literal &&
					((node.right.type === Syntax.MemberExpression && node.right.object.type === Syntax.ObjectExpression) ||
						(node.right.type === Syntax.LogicalExpression &&
							node.right.left.type === Syntax.MemberExpression &&
							node.right.left.object.type === Syntax.ObjectExpression))
				) {
					const folder = node.left.value;
					let suffix;

					if (folder.startsWith("javascript/")) {
						suffix = ".js?__TIME__&l=english&_cdn=cloudflare";
					} else if (folder.startsWith("css/")) {
						suffix = ".css?__TIME__&_cdn=cloudflare";
					} else {
						console.error("Wrong match:", folder);
						return;
					}

					const partialFileNames = node.right.type === Syntax.LogicalExpression;
					const obj = partialFileNames ? node.right.left.object : node.right.object;

					for (const property of obj.properties) {
						if (property.value.type === Syntax.Literal) {
							const name = property.value.value;

							seenIds.delete(property.key.raw);

							if (name.endsWith("-json") && !name.endsWith("_english-json")) {
								continue;
							}

							const fullUrl = cdn + folder + name + suffix;

							urls.add(fullUrl);

							found = true;
						}
					}

					for (const id of seenIds) {
						const fullUrl = cdn + folder + id + suffix;

						urls.add(fullUrl);
					}

					seenIds.clear();
					this.skip();
				}
			},
		});
	} catch (e) {
		console.error(`Unable to parse "${file}": ${e}`);
		continue;
	}

	if (!found) {
		console.error(`Did not find any files in "${file}"`);
	}
}

console.log("Found", urls.size, "urls");

const strings = [...urls.values()].sort().join("\n") + "\n";

await writeFile(".support/urls_from_manifests.txt", strings);

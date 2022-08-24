import { readFile, writeFile } from "fs/promises";
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

for (const { file, cdn } of files) {
	try {
		const code = await readFile(file);
		const ast = parse(code, { ecmaVersion: latestEcmaVersion, loc: true });

		traverse(ast, {
			enter: function (node) {
				if (
					node.type === Syntax.BinaryExpression &&
					node.left.type === Syntax.Literal &&
					node.right.type === Syntax.MemberExpression &&
					node.right.object.type === Syntax.ObjectExpression
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

					for (const property of node.right.object.properties) {
						if (property.value.type === Syntax.Literal) {
							const name = property.value.value;

							if (name.endsWith("-json") && !name.endsWith("_english-json")) {
								continue;
							}

							if (name.startsWith("libraries~")) {
								continue;
							}

							const fullUrl = cdn + folder + name + suffix;

							urls.add(fullUrl);
						}
					}

					this.skip();
				}
			},
		});
	} catch (e) {
		console.error(`Unable to parse "${file}": ${e}`);
		continue;
	}
}

console.log("Found", urls.size, "urls");

const strings = [...urls.values()].sort().join("\n") + "\n";

await writeFile(".support/urls_from_manifests.txt", strings);

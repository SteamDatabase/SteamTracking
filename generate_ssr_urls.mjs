import { readdir, readFile, writeFile } from "node:fs/promises";
import { parse, latestEcmaVersion } from "espree";
import { traverse, Syntax } from "estraverse";
import { extname, join } from "path";

const folders = [
	{
		folder: "store.steampowered.com/ssr",
		cdn: "https://cdn.fastly.steamstatic.com/store/ssr/",
	},
];

const languages = [
	"_arabic-",
	"_brazilian-",
	"_bulgarian-",
	"_czech-",
	"_danish-",
	"_dutch-",
	"_finnish-",
	"_french-",
	"_german-",
	"_greek-",
	"_hungarian-",
	"_indonesian-",
	"_italian-",
	"_japanese-",
	"_korean-",
	"_koreana-",
	"_latam-",
	"_norwegian-",
	"_polish-",
	"_portuguese-",
	"_romanian-",
	"_russian-",
	"_sc_schinese-",
	"_schinese-",
	"_spanish-",
	"_swedish-",
	"_tchinese-",
	"_thai-",
	"_turkish-",
	"_ukrainian-",
	"_vietnamese-",
];
const languagePattern = new RegExp(languages.join("|"));

const urls = new Set();

for (const { folder, cdn } of folders) {
	const files = (await readdir(folder)).filter((file) => extname(file).toLowerCase() === ".js");

	for (const file of files) {
		try {
			const code = await readFile(join(folder, file));
			const ast = parse(code, {
				ecmaVersion: latestEcmaVersion,
				sourceType: "module",
			});

			traverse(ast, {
				enter: function (node) {
					if (
						(node.type === Syntax.ImportDeclaration || node.type === Syntax.ImportExpression) &&
						node.source.type === Syntax.Literal
					) {
						const file = node.source.value;

						if (!languagePattern.test(file)) {
							const url = new URL(cdn);
							url.pathname += file;
							urls.add(url.toString());
						}
					}
				},
			});
		} catch (e) {
			console.error(`Unable to parse "${file}": ${e}`);
			continue;
		}
	}
}

console.log("Found", urls.size, "SSR urls");

const strings = [...urls.values()].sort().join("\n") + "\n";

await writeFile(".support/urls_from_ssr.txt", strings);

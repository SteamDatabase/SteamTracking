'use strict';

const fs = require('fs');
let fileData = fs.readFileSync(process.argv[2], 'utf8');

let rgNamedEnums = {};
let reNumericEnums = /\(function\(\w+\){(\w+\[\w+\.\w+=-?[\de]+\]="\w+"[,;]?)+}\)\(\w+\|\|\((\w+\.(\w+)=)?\w+={}\)\)/g;
let matches = fileData.match(reNumericEnums);

matches.forEach((matchedEnum) => {
	let matchedName = matchedEnum.match(/(\w+\.(\w+)=)?\w+={}/);
	let data = {};

	matchedEnum.match(/\w+=(-?[\de]+|"\w+")/g).forEach(matched => {
		let [enumKey, enumValue] = matched.split('=');
		data[enumKey] = JSON.parse(enumValue);
	});

	if (matchedName[2]) {
		// named enum
		rgNamedEnums[matchedName[2]] = tryRenameKeys(data, matchedName[2]);
	} else {
		let allEnumKeys = Object.keys(data);
		if (allEnumKeys.every(keyName => keyName.startsWith('k_'))) {
			let commonName = allEnumKeys.reduce(commonSubstring).replace(/^k_|_$/g, '');

			if (commonName.length >= 3) {
				rgNamedEnums[commonName] = tryRenameKeys(data, commonName);
				return;
			}
		}
	}
});

// longest common starting substring
function commonSubstring(str1, str2) {
	let i = 0;
	while (i < str1.length && str1.charAt(i) === str2.charAt(i)) ++i;
	return str1.substring(0, i);
}

function tryRenameKeys(data, enumName) {
	let reSubstrToReplace = null,
		allEnumKeys = Object.keys(data);

	if (allEnumKeys.every(keyName => keyName.startsWith('k_'))) {
		let commonName = allEnumKeys.reduce(commonSubstring);
		reSubstrToReplace = new RegExp(`^k_${enumName}_?|^${commonName}`);
	} else if (allEnumKeys.every(keyName => keyName.startsWith(enumName))) {
		reSubstrToReplace = new RegExp(`^${enumName}_?`);
	}

	if (reSubstrToReplace) {
		allEnumKeys.forEach(keyName => {
			let newKeyName = keyName.replace(reSubstrToReplace, '');
			if ('0123456789'.includes(newKeyName.charAt(0))) {
				newKeyName = '_' + newKeyName;
			}
			data[newKeyName] = data[keyName];
			delete data[keyName];
		});
	}

	return data;
}

let output = '';

for (const enumName in rgNamedEnums)
{
	output += `enum ${enumName} {\n`;
	
	for (const enumKey in rgNamedEnums[enumName])
	{
		output += `\t${enumKey} = ${rgNamedEnums[enumName][enumKey]};\n`;
	}

	output += `}\n\n`;
}

console.log(output);

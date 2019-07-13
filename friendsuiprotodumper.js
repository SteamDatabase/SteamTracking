'use strict';

if (process.argv.length <= 2) {
	console.log('Usage: \n  dumper.js <input_file.js> [options]');
	console.log('  node [flags] dumper.js <input_file.js> [options]');
	console.log('Options:');
	console.log('  --Oall=<output_file>           - dump enums and protos to file <output_file> (same as --Oenum + --Oproto)');
	console.log('  --Oenum=<output_file_enums>    - dump only enums to file <output_file_enums> (default: <stdout>)');
	console.log('  --Oproto=<output_file_protos>  - dump only protos to file <output_file_protos> (default: <stdout>)');
	console.log('  --filter-known-protos          - do not dump known proto messages and services (default: false');
	console.log('  --known-protos-dir=<path>      - path to *.proto files (default: "Protobufs")');
	return;
}

const fs = require('fs');
const path = require('path');

let g_inputFile,
    g_outputEnumsFile = null, g_outputProtosFile = null,
    g_bFilterKnownProtos = false, g_strKnownProtosDir = 'Protobufs';

for (let i = 2; i < process.argv.length; ++i) {
	if (process.argv[i].startsWith('--Oall=')) {
		g_outputEnumsFile = g_outputProtosFile = process.argv[i].substring(7);
	} else if (process.argv[i].startsWith('--Oenum=')) {
		g_outputEnumsFile = process.argv[i].substring(8);
	} else if (process.argv[i].startsWith('--Oproto=')) {
		g_outputProtosFile = process.argv[i].substring(9);
	} else if (process.argv[i] === '--filter-known-protos') {
		g_bFilterKnownProtos = true;
	} else if (process.argv[i].startsWith('--known-protos-dir=')) {
		g_strKnownProtosDir = process.argv[i].substring(19);
	} else {
		g_inputFile = process.argv[i];
	}
}

if (!g_inputFile) {
	console.error('Input file is not defined');
	return;
}

if (g_outputEnumsFile !== null && g_outputEnumsFile === g_outputProtosFile) {
	g_outputEnumsFile = g_outputProtosFile = fs.createWriteStream(g_outputEnumsFile, { flags: 'w', encoding: 'utf8' });
	if (g_bFilterKnownProtos) {
		console.warn('DO NOT DUMP ENUMS AND FILTERED PROTOS TO THE SAME FILE!');
	}
} else {
	g_outputEnumsFile = g_outputEnumsFile ? fs.createWriteStream(g_outputEnumsFile, { flags: 'w', encoding: 'utf8' }) : process.stdout;
	g_outputProtosFile = g_outputProtosFile ? fs.createWriteStream(g_outputProtosFile, { flags: 'w', encoding: 'utf8' }) : process.stdout;
}

let g_rgEnums = [], g_rgProtos = [];
const g_mapServices = new Map();

let fileData = fs.readFileSync(g_inputFile, 'utf8');

const rgResults = handleFile(fileData);
if (!rgResults) {
	return;
}

if (g_bFilterKnownProtos) {
	getKnownProtobufMessages(g_strKnownProtosDir, function(mapKnownMessages, mapKnownServices) {
		const imports = new Set();
		imports.add(mapKnownMessages.get("NoResponse"));

		const filteredProtos = g_rgProtos.filter((proto) => !mapKnownMessages.has(proto.name));
		const filteredServices = Array.from(g_mapServices).filter(([svcName]) => !mapKnownServices.has(svcName));
		filteredServices.some(([svcName, methods]) => methods.some(({unknown}) => unknown) && filteredProtos.push({ "name": "UnknownProto", "fields": [] }));

		filteredProtos.forEach((proto) => {
			proto.fields.forEach((field) => {
				if (field.type.charAt(0) === '.') {
					const file = mapKnownMessages.get(field.type.substr(1));

					if (file) {
						imports.add(file);
					}
				}
			});
		});

		outputImports(imports, g_outputProtosFile);
		outputEnums(g_rgEnums, g_outputEnumsFile);
		outputProtos(filteredProtos, g_outputProtosFile);
		outputServices(filteredServices, g_outputProtosFile);

		// stats
		console.log('// enums:', rgResults.actual.enums, 'of', rgResults.expected.enums1.length, '+', rgResults.expected.enums2.length);
		console.log('// messages:', rgResults.actual.messages, 'of', rgResults.expected.messages.length);
		console.log('// svc methods:', rgResults.actual.methods, 'of', rgResults.expected.methods.length);

		g_outputEnumsFile.end();
		g_outputProtosFile.end();
	});
} else {
	g_rgProtos.push({ "name": "NoResponse", "fields": [] });
	Array.from(g_mapServices).some(([svcName, methods]) => methods.some(({unknown}) => unknown) && g_rgProtos.push({ "name": "UnknownProto", "fields": [] }));

	outputEnums(g_rgEnums, g_outputEnumsFile);
	outputProtos(g_rgProtos, g_outputProtosFile);
	outputServices(g_mapServices, g_outputProtosFile);

	console.log('// enums:', rgResults.actual.enums, 'of', rgResults.expected.enums1.length, '+', rgResults.expected.enums2.length);
	console.log('// messages:', rgResults.actual.messages, 'of', rgResults.expected.messages.length);
	console.log('// svc methods:', rgResults.actual.methods, 'of', rgResults.expected.methods.length);

	g_outputEnumsFile.end();
	g_outputProtosFile.end();
}

function getKnownProtobufMessages(dirName, callback) {
	const msgRegex = /([ \t]*)message (\w+) \{/g,
	      svcRegex = /service (\w+) \{/g,
	      mapKnownMessages = new Map(),
	      mapKnownServices = new Map();
	let MsgAndLevel = [];

	fs.readdir(dirName, function(err, files) {
		files.filter((file) => file.endsWith(".proto")).forEach((fileName) => {
			const file = fs.readFileSync(path.join(dirName, fileName)).toString();

			let matches;
			while (matches = msgRegex.exec(file)) {
				let currLevel = matches[1].length;
				let msgName = matches[2];

				if (MsgAndLevel[0] && MsgAndLevel[0].level >= currLevel) {
					let prevMsg;
					do {
						prevMsg = MsgAndLevel.shift();
					} while (prevMsg && prevMsg.level > currLevel);
				}
				if (MsgAndLevel[0]) {
					msgName = MsgAndLevel[0].name + '_' + msgName;
				}

				MsgAndLevel.unshift({ "name": msgName, "level": currLevel });
				mapKnownMessages.set(msgName, fileName);
			}

			while (matches = svcRegex.exec(file)) {
				mapKnownServices.set(matches[1], fileName);
			}
		});

		callback(mapKnownMessages, mapKnownServices);
	});
}

function handleFile(fileData) {
	let reModule = /__d\(function\(\w,\w,\w,\w,\w,\w,\w\).+?(?=__d\(|__r\()/gs,
	    reNumericEnums = /(?<enumKVs>(?:[\w\$]+\[[\w\$]+\.\w+=-?[\de]+\]="\w+"[,;]?)+)}\)\([\w\$]+\|\|\((?:[\w\$]+\.(?<enumName>\w+)=)?(?<enumShortName>\w+)={}\)/g,
	    reProtoClass = /(?<msgShortName>[\w\$]+)=\(function\([\w\$]+\).*?value:function\(\){return["'](?<msgClassName>\w+)["']}.*?[\w\$]\.\2=\1/g,
	    reSvcMethod = /(?:SendNotification\()?["'](?<svcName>\w+)\.(?<methodName>\w+)#1["'],(?:request:(?<msgNotifyShortName>[\w\$]+)|\w[\),](?<msgResponseShortName>[\w\$]+)?)/g;

	let rgModules = fileData.match(reModule);
	if (!rgModules) {
		console.error('Cannot find modules');
		return;
	}

	let nEnumCount = 0, nMsgCount = 0, nSvcMethodsCount = 0;

	rgModules.forEach((esModule) => {
		let rgMatches,
		    rgModuleEnums = [],
		    rgModuleProtos = [],
		    rgProtoShortNamesToLongNames = {};

		// 1-st pass: enum
		while (rgMatches = reNumericEnums.exec(esModule)) {
			
			let rgDecodedEnum = decodeEnum(rgMatches);
			if (rgDecodedEnum) {
				nEnumCount += 1;

				rgProtoShortNamesToLongNames[rgMatches.groups.enumShortName] = rgDecodedEnum.name;

				rgModuleEnums.push(rgDecodedEnum);
			}
		}

		// 2-st pass: proto
		while (rgMatches = reProtoClass.exec(esModule)) {
			nMsgCount += 1;

			rgProtoShortNamesToLongNames[rgMatches.groups.msgShortName] = rgMatches.groups.msgClassName;

			rgModuleProtos.push(decodeProtobuf(rgMatches, rgModuleEnums));
		}

		// 3-rd pass: service
		while (rgMatches = reSvcMethod.exec(esModule)) {
			nSvcMethodsCount += 1;

			let service = decodeServiceMethod(rgMatches, rgModuleProtos, rgProtoShortNamesToLongNames);

			if (g_mapServices.has(service.name)) {
				g_mapServices.get(service.name).push(service.method);
			} else {
				g_mapServices.set(service.name, [service.method]);
			}
		}

		// fix field types
		rgModuleProtos.forEach((proto) => {
			proto.fields.forEach((field) => {
				if (field.typeLong) {
					field.type = '.' + field.typeLong;
				} else if (field.typeShort && rgProtoShortNamesToLongNames[field.typeShort]) {
					field.type = '.' + rgProtoShortNamesToLongNames[field.typeShort];
				}
			});
		});

		g_rgEnums = g_rgEnums.concat(rgModuleEnums);
		g_rgProtos = g_rgProtos.concat(rgModuleProtos);
	});

	return {
		"actual": {
			"modules": rgModules.length,
			"enums": nEnumCount,
			"messages": nMsgCount,
			"methods": nSvcMethodsCount
		},
		"expected": {
			"enums0": fileData.match(/(?:[\w\$]+\[[\w\$]+\.\w+=-?[\de]+\]="\w+"[,;]?)+}\)\([\w\$]+\|\|\((?:[\w\$]+\.\w+=)?\w+={}\)/g),
			"enums1": fileData.match(/(?:[\w\$]+\[[\w\$]+\.(\w+)=-?[\de]+\]="\1"[,;]?)+}\)\(([\w\$]+)\|\|\([\w\$]+\.\w+=\2={}\)/g),
			"enums2": fileData.match(/(?:[\w\$]+\[[\w\$]+\.(\w+)=-?[\de]+\]="\1"[,;]?)+}\)\(([\w\$]+)\|\|\(\2={}\)/g),
			"messages": fileData.match(/"deserializeBinaryFromReader"/g),
			"methods": fileData.match(/["']\w+\.\w+#1["']/g)
		}
	};
}

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
		reSubstrToReplace = new RegExp(`^k_${enumName}_?|^${commonName}`, 'i');
	} else if (allEnumKeys.every(keyName => keyName.startsWith(enumName))) {
		reSubstrToReplace = new RegExp(`^${enumName}_?`, 'i');
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

function decodeEnum(matchedEnum) {
	let data = {};

	matchedEnum.groups.enumKVs.match(/\w+=-?[\de]+/g).forEach(matched => {
		let [enumKey, enumValue] = matched.split('=');
		data[enumKey] = JSON.parse(enumValue);
	});

	let result;

	if (matchedEnum.groups.enumName) {
		// named enum
		result = {
			"name": matchedEnum.groups.enumName,
			"keys": tryRenameKeys(data, matchedEnum.groups.enumName)
		};
	} else {
		// unnamed enum, try to figure it out
		let allEnumKeys = Object.keys(data);
		if (allEnumKeys.every(keyName => keyName.startsWith('k_'))) {
			let commonName = allEnumKeys.reduce(commonSubstring).replace(/^k_|_$/g, '');

			if (commonName.length >= 3) {
				result = {
					"name": commonName,
					"keys": tryRenameKeys(data, commonName)
				};
			}
		}
	}
	
	return result;
}

function decodeProtobuf(matchedClass, rgEnums) {
	let rgMatchedField,
	    reClassField = /case (?<id>\d+):(?<nestedMessage>[^:]*)[\w\$]\.(?<flag>set_|add_)(?<name>\w+)\((?:[\w\$]\.read(?<type>\w+)\(\)|[\w\$])\);break;/g,
	    rgFields = [];

	while (rgMatchedField = reClassField.exec(matchedClass[0])) {
		let fieldDesc = {
			id: parseInt(rgMatchedField.groups.id, 10),
			flag: rgMatchedField.groups.flag == 'set_' ? 'optional' : 'repeated',
			name: rgMatchedField.groups.name
		};

		if (rgMatchedField.groups.type) {
			fieldDesc.type = rgMatchedField.groups.type.toLowerCase().replace('64string', '64');

			// default?
			let defaultMatch = matchedClass[0].match('\\b' + fieldDesc.name + ':[\\w\\$]\\.Message\\.getFieldWithDefault\\(\\w+,\\d+,(?:(?<typeShortName>[\\w\\$]+)\\.)?(?<value>[^\\)]+)\\)');
			if (defaultMatch) {
				if (fieldDesc.type === 'string') {
					fieldDesc.default = defaultMatch.groups.value.replace(/^'|'$/g, '"');
				} else if (fieldDesc.type === 'enum') {
					fieldDesc.typeShort = defaultMatch.groups.typeShortName;
					fieldDesc.default = defaultMatch.groups.value;
				} else {
					try {
						fieldDesc.default = eval(defaultMatch.groups.value); // number, bool
					} catch(e) {
						fieldDesc.default = 'fixme';
					}
				}
			}

			if (fieldDesc.type === 'enum' && !fieldDesc.typeShort) {
				fieldDesc.type = 'int32';
				fieldDesc.description = 'enum';
				let rgEnumNames = rgEnums.map(({name}) => name), fieldName = fieldDesc.name.toLowerCase(),
					fieldNameParts = fieldName.split('_'), classNameParts = matchedClass.groups.msgClassName.toLowerCase().split('_');
				let rgSuggestedTypes = rgEnumNames.filter((enumName) => {
					enumName = enumName.toLowerCase();
					return (fieldNameParts.length > 1 && enumName.includes(fieldName.replace(/_/g, '')))
						|| classNameParts.some((part) => enumName.includes(part) && enumName.includes(fieldName.replace(/_/g, '')));
				});
				if (!rgSuggestedTypes.length) {
					rgSuggestedTypes = rgEnumNames.filter((enumName) => {
						enumName = enumName.toLowerCase();
						return fieldNameParts.every((part) => enumName.includes(part));
					});
				}
				if (!rgSuggestedTypes.length) {
					rgSuggestedTypes = rgEnumNames.filter((enumName) => {
						let nMatchedPartsCount = 0;
						enumName = enumName.toLowerCase();
						return (fieldNameParts.length == 2 && fieldNameParts.some((part) => enumName.includes(part)))
							|| (fieldNameParts.length >= 3 && fieldNameParts.some((part) => enumName.includes(part) && ++nMatchedPartsCount >= 2));
					});
				}
				if (rgSuggestedTypes.length == 1) {
					fieldDesc.description += '; suggested type: ' + rgSuggestedTypes[0];
				} else if (rgSuggestedTypes.length > 1) {
					fieldDesc.description += '; suggested types: ' + rgSuggestedTypes.toString();
				}
			}
		} else {
			// nested message
			let nestMatch = rgMatchedField.groups.nestedMessage.match(/new (?<shortName>[\w\$]+)(?:\.(?<longName>[\w\$]+))?/);
			if (nestMatch) {
				if (nestMatch.groups.longName) {
					fieldDesc.typeLong = nestMatch.groups.longName;
				} else {
					let matchedCtor = matchedClass[0].match(/=\(function\([\w\$]+\){function\s(\w)/);
					if (matchedCtor && (nestMatch.groups.shortName === matchedCtor[1])) { // constructor name, special case for recursive messages
						fieldDesc.typeLong = matchedClass.groups.msgClassName;
					} else {
						fieldDesc.typeShort = nestMatch.groups.shortName;
					}
				}
			} else {
				fieldDesc.type = 'UNKNOWN';
				fieldDesc.description = 'fixme';
			}
		}

		rgFields.push(fieldDesc);
	}

	return { "name": matchedClass.groups.msgClassName, "fields": rgFields };
}

function decodeServiceMethod(matches, protos, rgShortToLong) {
	let svcName = matches.groups.svcName,
	    methodName = matches.groups.methodName,
	    msgRequestName = null, msgResponseName = 'NoResponse';

	if (matches.groups.msgNotifyShortName) { // S->C notification
		msgRequestName = rgShortToLong[matches.groups.msgNotifyShortName];
	} else if (matches.groups.msgResponseShortName) { // response
		msgResponseName = rgShortToLong[matches.groups.msgResponseShortName];
		msgRequestName = msgResponseName.replace(/_Response$/, '_Request');

		if (!Object.values(rgShortToLong).includes(msgRequestName)) {
			msgRequestName = null;
		}
	} else {
		// C->S notification
		// try to fix it below
	}

	let bUnknownProto = false;

	if (!msgRequestName) {
		protos.some((proto) => {
			if ((proto.name === 'C' + svcName + '_' + methodName + (matches.groups.msgResponseShortName ? '_Request' : '_Notification'))
				|| !matches.groups.msgResponseShortName && (proto.name === 'C' + svcName + '_' + methodName.replace(/^Notify/, '') + '_Notification')) {
				msgRequestName = proto.name;
				return true;
			}
			return false;
		});

		if (!msgRequestName) {
			msgRequestName = 'UnknownProto';
			bUnknownProto = true;
		}
	}

	return {
		"name": svcName,
		"method": {
			"name": methodName,
			"request": msgRequestName,
			"response": msgResponseName,
			"unknown": bUnknownProto
		}
	};
}

function outputImports(imports, stream) {
	for (const importName of imports) {
		stream.write(`import "${importName}";\n`);
	}

	stream.write('\n');
}

function outputEnums(enums, stream) {
	enums.sort((a, b) => {
		if (a.name < b.name) return -1;
		if (a.name > b.name) return 1;
		return 0;
	});

	for (const {name, keys} of enums)
	{
		stream.write(`enum ${name}\n{\n`);

		for (const enumKey in keys)
		{
			stream.write(`\t${enumKey} = ${keys[enumKey]};\n`);
		}

		stream.write(`}\n\n`);
	}
}

function outputProtos(protos, stream) {
	protos.forEach((proto) => {
		stream.write(`message ${proto.name} {\n`);
		proto.fields.forEach((field) => {
			stream.write(`\t${field.flag} ${field.type} ${field.name} = ${field.id}`);

			let options = [];
			if (field.hasOwnProperty('default')) {
				options.push(`default = ${field.default}`);
			}
			if (field.hasOwnProperty('description')) {
				options.push(`(description) = "${field.description}"`);
			}
			if (options.length) {
				stream.write(` [${options.join(', ')}]`);
			}
			stream.write(';\n');
		});
		stream.write('}\n\n');
	});
}

function outputServices(services, stream) {
	for (const [name, methods] of services) {
		stream.write(`service ${name} {\n`);

		for (const method of methods) {
			stream.write(`\trpc ${method.name} (.${method.request}) returns (.${method.response});\n`);
		}

		stream.write('}\n\n');
	}
}

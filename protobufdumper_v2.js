const path = require('path');
const fs = require('fs');

getKnownProtobufMessages("Protobufs", function(knownMessages, knownServices) {
	global.window = {};
	require('./' + process.argv[2]);

	const protos = handleFile(window.webpackJsonp[0][1]);
	const imports = new Set();
	imports.add(knownMessages.get("NoResponse"));

	const filteredProtos = protos.messages.filter((proto) => !knownMessages.has(proto.name));
	const filteredServices = [];

	protos.services.forEach((methods, service) => {
		if (knownServices.has(service)) {
			methods = methods.filter((method) => {
				return !knownServices.get(service).includes(method.name);
			});
		}

		if (methods.length > 0) {
			filteredServices.push({
				service,
				methods
			});
		}
	});

	filteredProtos.forEach((proto) => {
		proto.fields.forEach((field) => {
			if (field.type[0] === ".") {
				const file = knownMessages.get(field.type.substr(1));

				if (file) {
					imports.add(file);
				}
			}
		});
	});

	outputImports(imports);
	outputProtos(filteredProtos);
	outputServices(filteredServices);
});

function getKnownProtobufMessages(dirName, callback) {
	const msgRegex = /([ \t]*)message (\w+) \{/g;
	const svcRegex = /service (\w+) \{|rpc (\w+) \(/g;
	const knownMessages = new Map();
	const knownServices = new Map();
	let MsgAndLevel = [];

	fs.readdir(dirName, function(err, files) {
		files.filter((file) => file.endsWith(".proto")).forEach((fileName) => {
			file = fs.readFileSync(path.join(dirName, fileName)).toString();

			let matches;
			while (matches = msgRegex.exec(file)) {
				let currLevel = matches[1].length;
				let msgName = matches[2];

				if (MsgAndLevel[0] && MsgAndLevel[0].level >= currLevel) {
					let prevMsg;
					do {
						prevMsg = MsgAndLevel.shift();
					} while (prevMsg && prevMsg.level > currLevel)
				}
				if (MsgAndLevel[0]) {
					msgName = MsgAndLevel[0].name + '_' + msgName;
				}

				MsgAndLevel.unshift({ "name": msgName, "level": currLevel });
				knownMessages.set(msgName, fileName);
			}

			let methods;
			while (matches = svcRegex.exec(file)) {
				if (matches[1]) {
					// service name
					knownServices.set(matches[1], methods = []);
				} else {
					// method name
					methods.push(matches[2]);
				}
			}
		});

		callback(knownMessages, knownServices);
	});
}

function handleFile(file) {
	const moduleProtosMap = new Map();
	let protoShortNamesToLongNames = {};
	let protoShortNamesAliases = {};
	let messages = [];

	let svcRex = /(?:SendNotification\()?"(\w+)\.(\w+)#1",(?:request:([_a-zA-Z\$]{1,2})|\w[\),]([_a-zA-Z\$]{1,2})?)/g;
	let bHasUnknownRequest = false;
	const services = new Map();

	let modules = new Map();
	for (let moduleName in file) {
		modules.set(moduleName, file[moduleName].toString());
	}

	// 1-st pass
	modules.forEach((module, currentModuleName) => {
		let protoConstructorMatch = module.match(/([_a-zA-Z\$]{1,2})(?==\(?(?:[_a-zA-Z\$]{1,2}\.Message,?)+\)?)/g);
		if (!protoConstructorMatch)
			return;

		let currentModuleProtos = [];
		protoShortNamesToLongNames[currentModuleName] = {};
		protoShortNamesAliases[currentModuleName] = {};

		(module.match(/[a-z]\.[a-z]\([a-z],"([a-zA-Z]+)",\(?function\(\){return ([_a-zA-Z]+)}\)/g) || []).forEach((alias) => {
			let [/*skip*/, aliasName, protoShortName] = alias.match(/[a-z]\.[a-z]\([a-z],"([a-zA-Z]+)",\(?function\(\){return ([_a-zA-Z]+)}\)/);
			protoShortNamesAliases[currentModuleName][aliasName] = protoShortName;
		});

		protoConstructorMatch = protoConstructorMatch.map(x => '\\(' + x + '\\)').join('|');

		// Each message is immediately followed by (x) or (xx) so split on that
		module.split(new RegExp('(' + protoConstructorMatch + ')[,;\\}]')).forEach((part) => {
			let match = part.match(/([_a-zA-Z\$]{1,2})=function\([a-zA-Z\$]{1,2}\){function [a-zA-Z\$]\([a-zA-Z\$]\){.{1,120}\.initialize.*}$/);
			if (!match) {
				return;
			}

			// Extract the minified variable name
			let minVarName = match[1];

			let func = match[0]
				.replace(/^[_a-zA-Z\$]{1,2}=/, '') // var name
				.replace(/(Object\()?[_a-zA-Z\$]{1,2}\.[a-zA-Z\$]\)?\([a-zA-Z\$],[a-zA-Z\$]\),/g, '') // junk
				.replace(/(?<=c:)([_a-zA-Z\$]{1,2}(\.[_a-zA-Z\$]{1,2})?)(?=,)?/g, '"$1"') // constructor
				.replace(/(?<=br:|bw:)[^,\}]+?(?:read|write)(\w+)(?=,)?/g, '"$1"'); // reader/writer

			eval('func=(' + func + ')');
			let proto = decodeProtobuf(func(), minVarName);
			currentModuleProtos.push(proto);
			messages.push(proto);
			protoShortNamesToLongNames[currentModuleName][minVarName] = proto.name;
		});

		moduleProtosMap.set(currentModuleName, currentModuleProtos);

		let matches;

		while (matches = svcRex.exec(module)) {
			let svcName = matches[1],
				methodName = matches[2],
				msgRequestName = null, msgResponseName = null;
			if (matches[3]) { // S->C notification
				msgRequestName = protoShortNamesToLongNames[currentModuleName][matches[3]];
			} else if (matches[4]) { // response
				msgResponseName = protoShortNamesToLongNames[currentModuleName][matches[4]];
			} else { // C->S notification
				// try to fix it below
			}

			if (!msgRequestName) {
				currentModuleProtos.some((proto) => {
					if ((proto.name === "C" + svcName + "_" + methodName + (matches[4] ? "_Request" : "_Notification"))
						|| !matches[4] && (proto.name === "C" + svcName + "_" + methodName.replace(/^Notify/, "") + "_Notification")) {
						msgRequestName = proto.name;
						return true;
					}
					return false;
				});

				if (!msgRequestName && msgResponseName) {
					// because reasons!
					currentModuleProtos.some((proto) => {
						if (proto.name === msgResponseName.replace(/_Response$/, "_Request")) {
							msgRequestName = proto.name;
							return true;
						}
						return false;
					});
				}

				if (!msgRequestName) {
					msgRequestName = "NotImplemented";
					bHasUnknownRequest = true;
				}
			}

			if (!msgResponseName) {
				msgResponseName = "NoResponse";
			}

			if (!services.has(svcName)) {
				services.set(svcName, []);
			}

			services.get(svcName).push({
				"name": methodName,
				"request": msgRequestName,
				"response": msgResponseName
			});
		}
	});

	// 2-nd pass
	modules.forEach((module, currentModuleName) => {
		if (!moduleProtosMap.has(currentModuleName))
			return;

		moduleProtosMap.get(currentModuleName).forEach((proto) => {
			proto.fields.forEach((field) => {
				if (protoShortNamesToLongNames[currentModuleName][field.type]) {
					field.type = '.' + protoShortNamesToLongNames[currentModuleName][field.type];
				} else if (field.type.includes('.')) {
					let [moduleVarName, typeShortNameAlias] = field.type.split('.');
					let match = module.match(new RegExp(moduleVarName + '=[a-z]\\("([\\w\\+\\/]{4})"\\)'));
					if (match && protoShortNamesToLongNames[match[1]] && protoShortNamesAliases[match[1]]) {
						field.type = '.' + protoShortNamesToLongNames[match[1]][
							protoShortNamesAliases[match[1]][typeShortNameAlias]
						];
					} else {
						// external dependency?
						field.type = 'UNKNOWN2';
					}
				}
			});
		});
	});

	if (bHasUnknownRequest) {
		messages.push({ "name": "NotImplemented", "fields": [] });
	}

	return {messages, services};
}

function decodeProtobuf(proto, minVarName) {
	let name = proto.prototype.getClassName();
	let fields = [];

	let protoFields = proto.M ? proto.M().fields : {};

	for (let fieldName in protoFields) {
		field = protoFields[fieldName];
		let fieldDesc = {
			id: field.n,
			flag: field.r ? 'repeated' : 'optional',
			name: fieldName,
			type: '?'
		};

		if (field.c) {
			// It's a nested message of some sort
			if (field.c === proto.name) { // constructor name, special case for recursive messages
				fieldDesc.type = minVarName;
			} else {
				fieldDesc.type = field.c;
			}
		} else {
			fieldDesc.type = field.br.toLowerCase().replace('64string', '64');
			if (fieldDesc.type === 'enum') {
				// ToDo: RE enums
				fieldDesc.type = 'int32';
				fieldDesc.description = 'enum';
			}
		}

		// default?
		if (field.hasOwnProperty('d')) {
			if (fieldDesc.type === 'string') {
				fieldDesc.default = JSON.stringify(field.d);
			} else {
				fieldDesc.default = field.d;
			}
		}

		fields.push(fieldDesc);
	};

	return {name, fields};
}

function outputImports(imports) {
	for (const importName of imports) {
		console.log(`import "${importName}";`);
	}

	console.log();
}

function outputServices(services) {
	for (const service of services) {
		console.log(`service ${service.service} {`);

		for (const method of service.methods) {
			console.log(`\trpc ${method.name} (.${method.request}) returns (.${method.response});`);
		}

		console.log("}\n");
	}
}

function outputProtos(protos) {
	protos.forEach((proto) => {
		console.log(`message ${proto.name} {`);
		proto.fields.forEach((field) => {
			process.stdout.write(`\t${field.flag} ${field.type} ${field.name} = ${field.id}`);

			let options = [];
			if (field.hasOwnProperty("default")) {
				options.push(`default = ${field.default}`);
			}
			if (field.hasOwnProperty("description")) {
				options.push(`(description) = "${field.description}"`);
			}
			if (options.length) {
				process.stdout.write(` [${options.join(', ')}]`);
			}
			console.log(';');
		});
		console.log("}\n");
	});
}

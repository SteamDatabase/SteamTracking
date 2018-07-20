const path = require('path');
const fs = require('fs');

getKnownProtobufMessages("Protobufs", function(knownMessages, knownServices) {
	const protos = handleFile(fs.readFileSync(process.argv[2]).toString());
	const imports = new Set();
	imports.add(knownMessages.get("NoResponse"));

	const filteredProtos = protos.messages.filter((proto) => !knownMessages.has(proto.name));

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
	outputServices(Array.from(protos.services).filter((service) => !knownServices.has(service[0])));
});

function getKnownProtobufMessages(dirName, callback) {
	const msgRegex = /([ \t]*)message (\w+) \{/g;
	const svcRegex = /service (\w+) \{/g;
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

			while (matches = svcRegex.exec(file)) {
				knownServices.set(matches[1], fileName);
			}
		});

		callback(knownMessages, knownServices);
	});
}

function handleFile(file) {
	// Each message is immediately followed by (xx.Message) so split on that
	let protos = [];
	let protoShortNamesToLongNames = {};

	file.split(/\([a-z]{2}\.Message\)/).forEach((part) => {
		let match = part.match(/(?![{,])[_a-zA-Z\$]{1,3}=\(?([_a-zA-Z\$]{1,3}\.Message,)*function\([a-zA-Z\$]{1,2}\){function [a-zA-Z\$]\([a-zA-Z\$]\){.{1,50}return [_a-zA-Z\$]{2,3}\.Message\.initialize.*}\)?$/);
		if (!match) {
			return;
		}

		if (match[1]) {
			match[0] = match[0].replace(new RegExp('\\((' + match[1] + ')+'), '');
		}

		// Extract the minified variable name
		let minVarName = match[0].match(/^[_a-zA-Z\$]{1,3}/);
		match[0] = match[0].replace(/^[_a-zA-Z\$]{1,3}=/, '');

		let func = match[0].replace(/[_a-zA-Z\$]{1,3}\.[a-zA-Z\$]\([a-zA-Z\$],[a-zA-Z\$]\),/g, '');
		eval('func=(' + func + ')');
		let proto = decodeProtobuf(func(), minVarName);
		protos.push(proto);
		protoShortNamesToLongNames[minVarName] = proto.name;
	});

	protos.forEach((proto) => {
		proto.fields.forEach((field) => {
			if (protoShortNamesToLongNames[field.type]) {
				field.type = '.' + protoShortNamesToLongNames[field.type];
			}
		});
	});

	let svcRex = /(?:SendNotification\()?"(\w+)\.(\w+)#1",(?:request:([_a-zA-Z\$]{1,3})|\w[\),]([_a-zA-Z\$]{1,3})?)/g;
	let matches, bHasUnknownRequest = false;
	const services = new Map();

	while (matches = svcRex.exec(file)) {
		let svcName = matches[1],
			methodName = matches[2],
			msgRequestName = null, msgResponseName = null;
		if (matches[3]) { // S->C notification
			msgRequestName = protoShortNamesToLongNames[matches[3]];
		} else if (matches[4]) { // response
			msgResponseName = protoShortNamesToLongNames[matches[4]];
			msgRequestName = msgResponseName.replace(/_Response$/, "_Request");

			if (!Object.values(protoShortNamesToLongNames).includes(msgRequestName)) {
				msgRequestName = null;
			}
		} else { // C->S notification
			// try to fix it below
		}

		if (!msgRequestName) {
			let bFixFound = protos.some((proto) => {
				if ((proto.name === "C" + svcName + "_" + methodName + (matches[4] ? "_Request" : "_Notification"))
					|| !matches[4] && (proto.name === "C" + svcName + "_" + methodName.replace(/^Notify/, "") + "_Notification")) {
					msgRequestName = proto.name;
					return true;
				}
				return false;
			});

			if (!bFixFound) {
				msgRequestName = "NotImplemented";
				if (!bHasUnknownRequest) {
					protos.push({ "name": "NotImplemented", "fields": [] });
					bHasUnknownRequest = true;
				}
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

	return {"messages": protos, "services": services};
}

function decodeProtobuf(proto, minVarName) {
	let name = proto.prototype.getClassName();
	let fields = [];

	(proto.deserializeBinaryFromReader.toString().match(/case (\d+):[^:]*[a-zA-Z\$]\.(set_|add_)([^\(]+)\(([a-zA-Z\$]\.read([^\(]+)\(\)|[a-zA-Z\$])\);break;/g) || []).forEach((field) => {
		let match = field.match(/case (\d+):[^:]*[a-zA-Z\$]\.(set_|add_)([^\(]+)\(([a-zA-Z\$]\.read([^\(]+)\(\)|[a-zA-Z\$])\);break;/);
		let fieldDesc = {};
		fieldDesc.id = parseInt(match[1], 10);
		fieldDesc.flag = match[2] == 'set_' ? 'optional' : 'repeated';
		fieldDesc.name = match[3];
		fieldDesc.type = match[4].toLowerCase();

		if (fieldDesc.type.includes('()')) {
			fieldDesc.type = fieldDesc.type.replace(/(^[a-z]\.read|\(\))/g, '').replace('64string', '64');
			if (fieldDesc.type === 'enum') {
				// ToDo: RE enums
				fieldDesc.type = 'int32';
			}
		} else {
			// It's a nested message of some sort
			let nestMatch = field.match(/case \d+:var[^;]+new ([_a-zA-Z\$]{1,3})(\(\))?;/);
			if (nestMatch) {
				if (nestMatch[1] === proto.name) { // constructor name, special case for recursive messages
					fieldDesc.type = minVarName;
				} else {
					fieldDesc.type = nestMatch[1];
				}
			} else {
				fieldDesc.type = 'UNKNOWN';
			}
		}

		// default?
		let defaultMatch = proto.prototype[fieldDesc.name].toString().match(/getFieldWithDefault\(this,\d+,([^\)]+)\)/);
		if (defaultMatch) {
			fieldDesc.default = eval(defaultMatch[1]);
		}

		fields.push(fieldDesc);
	});

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
		console.log(`service ${service[0]} {`);

		for (const method of service[1]) {
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
			if (field.default) {
				process.stdout.write(` [default = ${field.default}]`);
			}
			console.log(';');
		});
		console.log("}\n");
	});
}

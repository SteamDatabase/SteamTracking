const path = require('path');
const fs = require('fs');

getKnownProtobufMessages("Protobufs", function(knownMessages) {
	const protos = handleFile(fs.readFileSync(process.argv[2]).toString())
		.filter((proto) => !knownMessages.has(proto.name));

	outputProtos(protos);
	outputServices(generateServices(protos));
});

function getKnownProtobufMessages(dirName, callback) {
	const msgRegex = /([ \t]*)message (\w+) \{/g;
	const knownMessages = new Map();
	let MsgAndLevel = [];

	fs.readdir(dirName, function(err, files) {
		files.filter((file) => file.endsWith(".proto")).forEach((file) => {
			file = fs.readFileSync(path.join(dirName, file)).toString();

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
				knownMessages.set(msgName, true);
			}
		});

		callback(knownMessages);
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
		let proto = func();
		proto = decodeProtobuf(proto, minVarName);
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

	return protos;
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

function generateServices(protos) {
	const requests = protos
		.map((proto) => proto.name.match(/^C([A-Z][a-zA-Z0-9]+)_([a-zA-Z0-9_]+)_(Request|Notification)$/))
		.filter((match) => match);

	const services = new Map();

	for (const match of requests) {
		if (!services.has(match[1])) {
			services.set(match[1], []);
		}
		
		services.get(match[1]).push({
			name: match[2],
			request: match[0],
			returns: match[3] === "Request" ? match[0].replace("_Request", "_Response") : "NoResponse"
		});
	}
	
	return services;
}

function outputServices(services) {
	for (const service of services) {
		console.log(`service ${service[0]} {`);

		for (const method of service[1]) {
			console.log(`\trpc ${method.name} (.${method.request}) returns (.${method.returns});`);
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


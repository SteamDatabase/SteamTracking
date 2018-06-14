const fs = require('fs');

handleFile(fs.readFileSync(process.argv[2]).toString());

function handleFile(file) {
	// Each message is immediately followed by (xx.Message) so split on that
	let protos = [];
	let protoShortNamesToLongNames = {};

	file.split(/\([a-z]{2}\.Message\)/).forEach((part) => {
		let match = part.match(/(?![{,])[a-zA-Z\$]{1,3}=(\([a-zA-Z\$]{1,3}\.Message,)?function\([a-zA-Z\$]{1,2}\){function [a-zA-Z\$]\([a-zA-Z\$]\){.{1,50}return [a-zA-Z\$]{2,3}\.Message\.initialize.*}\)?$/);
		if (!match) {
			return;
		}

		if (match[1]) {
			match[0] = match[0].replace(match[1], '');
		}

		// Extract the minified variable name
		let minVarName = match[0].match(/^[a-zA-Z\$]{1,3}/);
		match[0] = match[0].replace(/^[a-zA-Z\$]{1,3}=/, '');

		let func = match[0].replace(/(\)$|[a-zA-Z\$]{1,3}\.[a-zA-Z\$]\([a-zA-Z\$],[a-zA-Z\$]\),)/g, '');
		eval('func=(' + func + ')');
		let proto = decodeProtobuf(func());
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

	outputProtos(protos);
}

function decodeProtobuf(proto) {
	let name = proto.prototype.getClassName();
	let fields = [];

	(proto.deserializeBinaryFromReader.toString().match(/case (\d+):[^:]*[a-zA-Z\$]\.(set_|add_)([^\(]+)\(([a-zA-Z\$]\.read([^\(]+)\(\)|[a-zA-Z\$])\);break;/g) || []).forEach((field) => {
		let match = field.match(/case (\d+):[^:]*[a-zA-Z\$]\.(set_|add_)([^\(]+)\(([a-zA-Z\$]\.read([^\(]+)\(\)|[a-zA-Z\$])\);break;/);
		let fieldDesc = {};
		fieldDesc.id = parseInt(field.match(/case (\d+):/)[1], 10);
		fieldDesc.flag = match[2] == 'set_' ? 'optional' : 'repeated';
		fieldDesc.name = match[3];
		fieldDesc.type = match[4].toLowerCase();

		if (fieldDesc.type.includes('()')) {
			fieldDesc.type = fieldDesc.type.replace(/(^[a-z]\.read|\(\))/g, '').replace('64string', '64');
		} else {
			// It's a nested message of some sort
			let nestMatch = field.match(/case \d+:var[^;]+new ([a-zA-Z\$]{1,3})(\(\))?;/);
			if (nestMatch) {
				fieldDesc.type = nestMatch[1];
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

function outputProtos(protos) {
	// Output to stdout. We can redirect if we want it in a file.
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

import { join as pathJoin } from "path";
import { readFile } from "fs/promises";
import { createWriteStream } from "fs";
import { parse, latestEcmaVersion } from "espree";
import { traverse, Syntax } from "estraverse";
import { GetFilesToParse } from "./dump_javascript_paths.mjs";

const outputPath = "./../ValveProtobufs/webui/";
const files = await GetFilesToParse();

const allServices = [];
const allMessages = [];

for (const file of files) {
	try {
		const code = await readFile(file);
		const ast = parse(code, { ecmaVersion: latestEcmaVersion, loc: true });
		const crossModuleExportedMessages = new Map();
		const services = [];
		const messages = [];

		traverse(ast, {
			enter: function (node) {
				if (node.type === Syntax.Property) {
					this.skip();

					if (node.value.type !== Syntax.FunctionExpression || node.value.params.length !== 3) {
						// (module, module.exports, __webpack_require__)
						return;
					}

					const result = TraverseModule(node.value);
					let currentModule;

					if (node.key.type === Syntax.Identifier) {
						currentModule = node.key.name;
					} else if (node.key.type === Syntax.Literal) {
						currentModule = node.key.value;
					} else {
						throw new Error("Failed to find key name");
					}

					crossModuleExportedMessages.set(currentModule, result.exportedIds);

					// Look up field types from other messages in same module
					FixTypesSameModule(result.messages);

					services.push(...result.services);
					messages.push(...result.messages);
				}
			},
		});

		FixTypesCrossModule(messages, crossModuleExportedMessages);

		allServices.push(...services);
		allMessages.push(...messages);
	} catch (e) {
		console.error(`Unable to parse "${file}":`, e);
		continue;
	}
}

OutputMessages(allMessages);

const splitServices = SplitServices(allServices);
const groupedServices = GroupServices(splitServices);

console.log("Found", splitServices.size, "services");

// TODO: PartnerStoreBrowse disappeared
// TODO: Wrong request - rpc RedeemPointsForBadgeLevel (.CLoyaltyRewards_RedeemPoints_Request)
for (const [name, services] of groupedServices) {
	const fileName = pathJoin(outputPath, `service_${name.toLowerCase()}.proto`);

	await OutputToFile(fileName, services);
}

function FixTypesCrossModule(messages, crossModuleExportedMessages) {
	for (const message of messages) {
		for (const field of message.fields) {
			if (field.typeToLookup === null) {
				continue;
			}

			if (field.typeToLookup.module !== null) {
				const moduleExported = crossModuleExportedMessages.get(field.typeToLookup.module);

				if (!moduleExported) {
					// TODO: Cross-file modules
					//throw new Error("Failed to find module");
					continue;
				}

				const className = moduleExported.get(field.typeToLookup.name);

				if (!className) {
					throw new Error("Failed to exported name");
				}

				field.type = `.${className}`;
				field.typeToLookup = null;
			}

			if (field.typeToLookup !== null) {
				throw new Error("Failed to find type");
			}
		}
	}
}

function OutputToFile(fileName, services) {
	return new Promise((resolve) => {
		let stream = createWriteStream(fileName, { flags: "w", encoding: "utf8" });
		stream.once("close", resolve);

		//outputImports(imports, stream);
		//outputProtos(protos, stream);
		OutputServices(services, stream);

		stream.end();
	});
}

function OutputMessages(messages, stream = process.stdout) {
	for (const message of messages) {
		stream.write(`message ${message.className} {\n`);

		for (const field of message.fields) {
			stream.write(`\t${field.flag} ${field.type} ${field.name} = ${field.id}`);

			const options = [];

			if (Object.hasOwn(field, "default")) {
				options.push(`default = ${field.default}`);
			}

			if (Object.hasOwn(field, "description")) {
				options.push(`(description) = "${field.description}"`);
			}

			if (options.length > 0) {
				stream.write(" [");
				stream.write(options.join(", "));
				stream.write("]");
			}

			stream.write(";\n");
		}

		stream.write("}\n\n");
	}
}

function OutputServices(services, stream = process.stdout) {
	for (const { name, methods } of services) {
		stream.write(`service ${name} {\n`);

		for (const [, method] of methods) {
			stream.write(`\trpc ${method.name} (.${method.request}) returns (.${method.response});\n`);
		}

		stream.write("}\n\n");
	}
}

// Split rpc strings like "Service.Method#1" into their components and group all the methods
function SplitServices(services) {
	const cleanServices = new Map();

	for (const rawMethod of services) {
		if (!rawMethod.name.endsWith("#1")) {
			throw new Error("Unexpected service name");
		}

		const [serviceName, methodName] = rawMethod.name.substring(0, rawMethod.name.length - 2).split(".", 2);

		let service = cleanServices.get(serviceName);

		if (!service) {
			service = {
				name: serviceName,
				methods: new Map(),
			};
			cleanServices.set(serviceName, service);
		}

		rawMethod.name = methodName;

		// TODO: Some methods may end up with not implemented request/response
		service.methods.set(methodName, rawMethod);
	}

	return cleanServices;
}

// Group "Client" and "Notifications" services into same dump
function GroupServices(services) {
	services = new Map([...services].sort((a, b) => String(a[0]).localeCompare(b[0])));
	const groupedServices = new Map();

	for (const [name, service] of services) {
		let cleanName = name;

		if (cleanName.endsWith("Notifications")) {
			cleanName = cleanName.substring(0, cleanName.length - "Notifications".length);
		}

		if (cleanName.endsWith("Client")) {
			cleanName = cleanName.substring(0, cleanName.length - "Client".length);
		}

		const groupedService = groupedServices.get(cleanName);

		// TODO: Sort methods - old dumper didn't sort
		//service.methods = new Map([...service.methods].sort((a, b) => String(a[0]).localeCompare(b[0])));

		if (groupedService) {
			groupedService.push(service);
		} else {
			groupedServices.set(cleanName, [service]);
		}
	}

	return groupedServices;
}

function FixTypesSameModule(messages) {
	for (const message of messages) {
		for (const field of message.fields) {
			if (field.typeToLookup !== null && field.typeToLookup.module === null) {
				if (field.typeToLookup.recursive) {
					field.type = `.${message.className}`;
					field.typeToLookup = null;
					continue;
				}

				for (const otherMessage of messages) {
					if (otherMessage.id === field.typeToLookup.name) {
						field.type = `.${otherMessage.className}`;
						field.typeToLookup = null;
						break;
					}
				}

				if (field.typeToLookup !== null) {
					throw new Error("Failed to find type in current module");
				}
			}
		}
	}
}

function TraverseModule(ast) {
	const services = [];
	const messages = [];
	const importedIds = new Map();
	const exportedIds = new Map();
	const exportedIdsFlipped = new Map();
	const webpackRequireName = ast.params[2].name;
	let messageIdentifier = null;

	traverse(ast, {
		enter: function (node, parent) {
			/*
				r.d(t, "a", function () {
					return m;
				}),
			*/
			if (
				node.type === Syntax.CallExpression &&
				node.callee.type === Syntax.MemberExpression &&
				node.callee.object.name === webpackRequireName &&
				node.callee.property.name === "d"
			) {
				if (
					node.arguments[2].type !== Syntax.FunctionExpression ||
					node.arguments[2].body.type !== Syntax.BlockStatement ||
					node.arguments[2].body.body[0].type !== Syntax.ReturnStatement
				) {
					throw new Error("Unexpected webpack function");
				}

				const exportedId = node.arguments[1].value;
				const localId = node.arguments[2].body.body[0].argument.name;

				exportedIds.set(exportedId, localId);
				exportedIdsFlipped.set(localId, exportedId);

				this.skip();
				return;
			}

			if (node.type === Syntax.FunctionDeclaration || node.type === Syntax.MethodDefinition) {
				this.skip();
				return;
			}

			/*
				var a = r("q1tI")
			*/
			if (
				node.type === Syntax.VariableDeclarator &&
				node.init?.type === Syntax.CallExpression &&
				node.init.callee.name === webpackRequireName
			) {
				if (node.init.arguments.length !== 1) {
					throw new Error("Unexpected webpack require");
				}

				const localId = node.id.name;
				const importedId = node.init.arguments[0].value;

				importedIds.set(localId, importedId);

				return;
			}

			/*
				var a = (r("poSC"), r("fzER"));
				var s = (n("SvTV"), i.Message);
			*/
			if (node.type === Syntax.VariableDeclarator && node.init?.type === Syntax.SequenceExpression) {
				const call = node.init.expressions[node.init.expressions.length - 1];

				if (call.type === Syntax.CallExpression && call.callee.name === webpackRequireName) {
					if (call.arguments.length !== 1) {
						throw new Error("Unexpected webpack require");
					}

					const localId = node.id.name;
					const importedId = call.arguments[0].value;

					importedIds.set(localId, importedId);

					return;
				}

				if (
					call.type === Syntax.MemberExpression &&
					call.property.type === Syntax.Identifier &&
					call.property.name === "Message"
				) {
					messageIdentifier = node.id.name;
					return;
				}
			}

			/*
				const s = a.Message;
			*/
			if (
				node.type === Syntax.VariableDeclarator &&
				node.id.type === Syntax.Identifier &&
				node.init?.type === Syntax.MemberExpression &&
				node.init.property.type === Syntax.Identifier &&
				node.init.property.name === "Message"
			) {
				messageIdentifier = node.id.name;
				return;
			}

			/*
				class o extends s {
			*/
			if (
				messageIdentifier !== null &&
				node.type === Syntax.ClassDeclaration &&
				node.superClass?.type === Syntax.Identifier &&
				node.superClass.name === messageIdentifier
			) {
				const message = TraverseClass(node.body, importedIds);
				message.id = node.id.name;
				messages.push(message);

				const exportedId = exportedIdsFlipped.get(message.id);

				if (exportedId) {
					exportedIds.set(exportedId, message.className);
				}

				this.skip();
				return;
			}

			/*
				c = (function (n) {

				})(s);
			*/
			if (
				messageIdentifier !== null &&
				node.type === Syntax.CallExpression &&
				parent?.id?.type === Syntax.Identifier &&
				node.callee.type === Syntax.FunctionExpression &&
				node.arguments.length === 1 &&
				node.arguments[0].type === Syntax.Identifier &&
				node.arguments[0].name === messageIdentifier
			) {
				const message = TraverseTranspiledClass(node.callee.body, importedIds);
				message.id = parent.id.name;
				messages.push(message);

				const exportedId = exportedIdsFlipped.get(message.id);

				if (exportedId) {
					exportedIds.set(exportedId, message.className);
				}

				this.skip();
				return;
			}

			/*
				e.NotifyUnlockedH264Handler = {
					name: "VideoClient.NotifyUnlockedH264#1",
					request: o,
				};
			*/
			if (
				node.type === Syntax.AssignmentExpression &&
				node.left.type === Syntax.MemberExpression &&
				node.right.type === Syntax.ObjectExpression &&
				node.right.properties.length === 2 &&
				node.right.properties[0].key.name === "name" &&
				node.right.properties[1].key.name === "request"
			) {
				services.push(GetMsgResponse(node, messages));
				this.skip();
				return;
			}

			/*
				return e.SendMsg("Video.ClientGetVideoURL#1", t, s, { ePrivilege: 1 });
				return e.SendNotification("ClientMetrics.ClientBootstrapReport#1", t, { ePrivilege: 1 });
			*/
			if (node.type === Syntax.MemberExpression && node.property.type === Syntax.Identifier) {
				let msg = null;
				if (node.property.name === "SendMsg") {
					msg = GetSendMsg(parent, messages);
				} else if (node.property.name === "SendNotification") {
					msg = GetSendNotification(parent);
				}

				if (msg !== null) {
					services.push(msg);
				}

				this.skip();
			}
		},
	});

	return { services, messages, exportedIds };
}

function TraverseTranspiledClass(ast, importedIds) {
	const message = {
		className: null,
		fields: [],
	};

	traverse(ast, {
		enter: function (node) {
			if (
				node.type !== Syntax.AssignmentExpression ||
				node.left.type !== Syntax.MemberExpression ||
				node.left.property.type !== Syntax.Identifier ||
				node.right.type !== Syntax.FunctionExpression
			) {
				return;
			}

			this.skip();

			if (node.left.property.name === "M") {
				message.fields = TraverseFields(node.right.body, importedIds);
			} else if (node.left.property.name === "getClassName") {
				message.className = GetClassNameLiteral(node.right.body);
			}
		},
	});

	if (message.className === null) {
		throw new Error("Failed to find classname");
	}

	return message;
}

function TraverseClass(ast, importedIds) {
	const message = {
		className: null,
		fields: [],
	};

	traverse(ast, {
		enter: function (node) {
			if (node.type === Syntax.MethodDefinition && node.key.type === Syntax.Identifier && node.key.name === "M") {
				message.fields = TraverseFields(node.value, importedIds);
				this.skip();
				return;
			}

			if (
				node.type === Syntax.MethodDefinition &&
				node.key.type === Syntax.Identifier &&
				node.key.name === "getClassName"
			) {
				message.className = GetClassNameLiteral(node.value);
				this.skip();
			}
		},
	});

	if (message.className === null) {
		throw new Error("Failed to find classname");
	}

	return message;
}

function TraverseFields(ast, importedIds) {
	const fields = [];
	let selfProtoIdentifier = null;

	traverse(ast, {
		enter: function (node) {
			if (node.type === Syntax.Property && node.key.type === Syntax.Identifier && node.key.name === "proto") {
				if (node.value.type !== Syntax.Identifier) {
					throw new Error("Unexpected property");
				}

				selfProtoIdentifier = node.value.name;
			}

			if (node.type === Syntax.Property && node.key.type === Syntax.Identifier && node.key.name === "fields") {
				for (const prop of node.value.properties) {
					if (prop.type !== Syntax.Property || prop.value.type !== Syntax.ObjectExpression) {
						throw new Error("Unexpected property");
					}

					const field = {
						id: null,
						name: prop.key.name,
						type: null,
						typeToLookup: null,
						flag: "optional",
					};

					for (const fieldProp of prop.value.properties) {
						if (fieldProp.key.name === "n") {
							if (fieldProp.value.type === Syntax.Literal) {
								field.id = fieldProp.value.value;
							} else {
								throw new Error("Unexpected field.n");
							}
						} else if (fieldProp.key.name === "r") {
							if (EvaluateConstant(fieldProp)) {
								field.flag = "repeated";
							}
						} else if (fieldProp.key.name === "d") {
							field.default = EvaluateConstant(fieldProp);
						} else if (fieldProp.key.name === "c") {
							if (fieldProp.value.type === Syntax.Identifier) {
								// Recursive messages
								if (selfProtoIdentifier === fieldProp.value.name) {
									field.typeToLookup = {
										module: null,
										recursive: true,
									};
								} else {
									field.typeToLookup = {
										module: null,
										name: fieldProp.value.name,
									};
								}
							} else if (fieldProp.value.type === Syntax.MemberExpression) {
								const importedModule = importedIds.get(fieldProp.value.object.name);

								if (!importedModule) {
									throw new Error("Failed to find imported module");
								}

								field.typeToLookup = {
									module: importedModule,
									name: fieldProp.value.property.name,
								};
							} else {
								throw new Error("Unexpected field.c");
							}
						} else if (fieldProp.key.name === "q") {
							// What is "q"?
						} else if (fieldProp.key.name === "br") {
							if (
								fieldProp.value.type === Syntax.MemberExpression &&
								fieldProp.value.property.type === Syntax.Identifier
							) {
								field.type = fieldProp.value.property.name;

								if (!field.type.startsWith("read")) {
									throw new Error("Unexpected field.br");
								}

								field.type = field.type.substring(4).toLowerCase();

								if (field.type.endsWith("64string")) {
									field.type = field.type.substring(0, field.type.length - 6);
								}

								if (field.type === "enum") {
									// TODO: RE enums
									field.type = "int32";
									field.description = "enum";
								}
							} else {
								throw new Error("Unexpected field.br");
							}
						} else if (fieldProp.key.name === "bw") {
							//
						} else {
							throw new Error("Unexpected field");
						}
					}

					fields.push(field);
				}

				this.skip();
			}
		},
	});

	return fields;
}

function GetClassNameLiteral(ast) {
	let value = null;

	traverse(ast, {
		enter: function (node, parent) {
			if (node.type === Syntax.Literal && parent.type === Syntax.ReturnStatement) {
				value = node.value;
			}
		},
	});

	return value;
}

function GetMsgResponse(node, messages) {
	if (node.right.properties[0].value.type !== Syntax.Literal) {
		throw new Error("Unexpected request name");
	}

	if (node.right.properties[1].value.type !== Syntax.Identifier) {
		throw new Error("Unexpected request message");
	}

	const requestToLookup = node.right.properties[1].value.name;
	const message = messages.find((m) => m.id === requestToLookup);

	if (!message) {
		throw new Error("Failed to find request message");
	}

	return {
		name: node.right.properties[0].value.value,
		request: message.className,
		response: "NoResponse",
	};
}

function GetSendMsg(node, messages) {
	if (
		node.type !== Syntax.CallExpression ||
		node.arguments.length !== 4 ||
		node.arguments[0].type !== Syntax.Literal ||
		node.arguments[2].type !== Syntax.Identifier ||
		node.arguments[3].type !== Syntax.ObjectExpression
	) {
		return null;
	}

	const name = node.arguments[0].value;
	const responseToLookup = node.arguments[2].name;
	const response = messages.find((m) => m.id === responseToLookup);

	if (!response) {
		throw new Error("Failed to find response message");
	}

	if (!response.className.endsWith("_Response")) {
		throw new Error("Unexpected message response");
	}

	const requestToLookup = response.className.substring(0, response.className.length - "_Response".length) + "_Request";

	// TODO: This needs to be looked up across modules
	const request = messages.find((m) => m.className === requestToLookup) || { className: "NotImplemented" };

	return {
		name: name,
		request: request.className,
		response: response.className,
	};
}

function GetSendNotification(node) {
	if (
		node.type !== Syntax.CallExpression ||
		node.arguments.length !== 3 ||
		node.arguments[0].type !== Syntax.Literal ||
		node.arguments[1].type !== Syntax.Identifier ||
		node.arguments[2].type !== Syntax.ObjectExpression
	) {
		return null;
	}

	const name = node.arguments[0].value;

	return {
		name: name,
		request: "NotImplemented", // TODO
		response: "NoResponse",
	};
}

function EvaluateConstant(node) {
	if (node.value.type === Syntax.UnaryExpression && ["!", "-"].includes(node.value.operator)) {
		return node.value.argument.value === 0 ? true : false;
	} else if (node.value.type === Syntax.Literal) {
		return node.value.value;
	}

	throw new Error("Unexpected constant");
}

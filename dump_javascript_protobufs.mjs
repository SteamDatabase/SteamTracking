import { join as pathJoin } from "path";
import { readFile, writeFile } from "fs/promises";
import { createWriteStream } from "fs";
import { parse, latestEcmaVersion } from "espree";
import { traverse, Syntax } from "estraverse";
import { GetFilesToParse } from "./dump_javascript_paths.mjs";

const outputPath = "./../ValveProtobufs/webui/";
const files = await GetFilesToParse();

const NotImplemented = "NotImplemented";
const NoResponse = "NoResponse";

const allEnums = [];
const allServices = [];
const allMessages = [
	{
		className: NotImplemented,
		dependants: new Set(),
		fields: [],
	},
	{
		className: NoResponse,
		dependants: new Set(),
		fields: [],
	},
];

const globalModuleExportedMessages = new Map();

console.log("Found", files.length, "files to parse");

for (const file of files) {
	try {
		const code = await readFile(file);
		const ast = parse(code, { ecmaVersion: latestEcmaVersion, loc: true });
		const crossModuleExportedMessages = new Map();
		const services = [];
		const messages = [];
		const enums = [];

		// React native code is minified differently, so we need to handle it separately
		if (file.includes("steammobile_")) {
			traverse(ast, {
				enter: function (node) {
					if (
						node.type === Syntax.ExpressionStatement &&
						node.expression.type === Syntax.CallExpression &&
						node.expression.callee.type === Syntax.Identifier &&
						node.expression.callee.name === "__d" &&
						node.expression.arguments[0].type === Syntax.FunctionExpression &&
						node.expression.arguments[0].body.type === Syntax.BlockStatement &&
						node.expression.arguments[0].params.length === 7
					) {
						this.skip();

						const func = node.expression.arguments[0].body;
						const requireVar = node.expression.arguments[0].params[1].name;
						const exportVar = node.expression.arguments[0].params[5].name;
						const dependencyMapVar = node.expression.arguments[0].params[6].name;
						const currentModule = node.expression.arguments[1].value;
						const dependencyMap = [];

						for (const dep of node.expression.arguments[2].elements) {
							dependencyMap.push(dep.value);
						}

						const result = TraverseReactNativeModule(func, requireVar, exportVar, dependencyMapVar, dependencyMap);

						if (crossModuleExportedMessages.has(currentModule)) {
							throw new Error("Module already exported");
						}

						crossModuleExportedMessages.set(currentModule, result.exportedIds);

						// Look up field types from other messages in same module
						FixTypesSameModule(result.services, result.messages);

						services.push(...result.services);
						messages.push(...result.messages);
					}
				},
			});
		} else {
			traverse(ast, {
				enter: function (node) {
					if (node.type === Syntax.Property) {
						this.skip();

						/*
							oFam: function (e, r, t) {

							or

							24262: (e, t, r) => {
						*/
						if (
							(node.value.type !== Syntax.ArrowFunctionExpression && node.value.type !== Syntax.FunctionExpression) ||
							node.value.params.length !== 3
						) {
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

						if (currentModule === "get" || currentModule === "set" || currentModule === "object") {
							return;
						}

						if (crossModuleExportedMessages.has(currentModule)) {
							throw new Error(`Module already exported: ${currentModule}`);
						}

						crossModuleExportedMessages.set(currentModule, result.exportedIds);

						if (globalModuleExportedMessages.has(currentModule)) {
							globalModuleExportedMessages.set(
								currentModule,
								new Map([...globalModuleExportedMessages.get(currentModule), ...result.exportedIds]),
							);
						} else {
							globalModuleExportedMessages.set(currentModule, result.exportedIds);
						}

						// Look up field types from other messages in same module
						FixTypesSameModule(result.services, result.messages);

						services.push(...result.services);
						messages.push(...result.messages);
						enums.push(...result.enums);
					}
				},
			});
		}

		FixTypesCrossModule(services, messages, crossModuleExportedMessages);

		allServices.push(...services);
		allMessages.push(...messages);
		allEnums.push(...enums);
	} catch (e) {
		console.error(`Unable to parse "${file}":`, e);
		continue;
	}
}

FixTypesCrossModule(allServices, allMessages, globalModuleExportedMessages);

const mergedMessages = MergeMessages(allMessages);

console.log("Found", mergedMessages.size, "messages");

await OutputSplitServices(allServices, mergedMessages);
await OutputCommon(mergedMessages);
await OutputCommonBase();

// Output split protos
async function OutputSplitServices(allServices, mergedMessages) {
	const splitServices = SplitServices(allServices);
	MarkMethodDependants(splitServices, mergedMessages);
	const groupedServices = GroupServices(splitServices);

	console.log("Found", splitServices.size, "services");

	for (const [name, services] of groupedServices) {
		const fileName = pathJoin(outputPath, `service_${name.toLowerCase()}.proto`);

		const imports = new Set();
		const consumedMessages = new Map();

		for (const [, message] of mergedMessages) {
			const dependencyCount = GetMatchingDependencyCount(services, message.dependants);

			if (dependencyCount < 1) {
				continue;
			}

			if (dependencyCount === message.dependants.size) {
				if (message.consumed) {
					throw new Error("Message was already consumed");
				}

				message.consumed = true;
				consumedMessages.set(message.className, message);

				// If we write a description, it needs base include
				for (const field of message.fields) {
					if (Object.hasOwn(field, "description")) {
						imports.add("common_base.proto");
						break;
					}
				}
			} else if (message.className === NoResponse || message.className === NotImplemented) {
				imports.add("common_base.proto");
			} else {
				imports.add("common.proto");
			}
		}

		await OutputToFile(fileName, imports, services, consumedMessages);
	}
}

// Output common protos which were not split into services or are used by multiple services
async function OutputCommon(mergedMessages) {
	const imports = new Set(["common_base.proto"]);

	const commonMessages = new Map();

	for (const [, message] of mergedMessages) {
		if (message.className === NoResponse || message.className === NotImplemented) {
			continue;
		}

		if (!message.consumed) {
			commonMessages.set(message.className, message);
		}
	}

	console.log("Found", commonMessages.size, "common messages");

	await OutputToFile(pathJoin(outputPath, "common.proto"), imports, [], commonMessages);
}

// Output common_base
async function OutputCommonBase() {
	const base = `import "google/protobuf/descriptor.proto";

extend .google.protobuf.FieldOptions {
	optional string description = 50000;
}

extend .google.protobuf.ServiceOptions {
	optional string service_description = 50000;
}

extend .google.protobuf.MethodOptions {
	optional string method_description = 50000;
}

extend .google.protobuf.EnumOptions {
	optional string enum_description = 50000;
}

extend .google.protobuf.EnumValueOptions {
	optional string enum_value_description = 50000;
}

message NoResponse {
}

message NotImplemented {
}
`;

	await writeFile(pathJoin(outputPath, "common_base.proto"), base);
}

{
	const mergedEnums = MergeEnums(allEnums);

	console.log("Found", mergedEnums.size, "enums");

	const stream = createWriteStream("Structs/webui_enums.steamd", { flags: "w", encoding: "utf8" });
	OutputEnums(mergedEnums, stream);
	stream.end();
}

function GetMatchingDependencyCount(services, dependants) {
	let dependencyCount = 0;

	for (const { name } of services) {
		if (dependants.has(name)) {
			dependencyCount++;
		}
	}

	return dependencyCount;
}

function OutputToFile(fileName, imports, services, messages) {
	return new Promise((resolve) => {
		const stream = createWriteStream(fileName, {
			flags: "w",
			encoding: "utf8",
		});
		stream.once("close", resolve);

		OutputImports(imports, stream);
		OutputMessages(messages, stream);
		OutputServices(services, stream);

		stream.end();
	});
}

function OutputImports(imports, stream = process.stdout) {
	for (const importName of imports) {
		stream.write(`import "${importName}";\n`);
	}

	stream.write("\n");
}

function OutputMessages(messages, stream = process.stdout) {
	for (const [, message] of messages) {
		if (!message.consumed && message.dependants.size > 0) {
			const dependants = [...message.dependants.values()];
			dependants.sort();

			stream.write(`// Used by: ${dependants.join(", ")}\n`);
		}

		stream.write(`message ${message.className} {\n`);

		const seenFields = new Set();
		const seenFieldsNames = new Set();

		for (const field of message.fields) {
			if (seenFields.has(field.id) && field.type === "UNKNOWN") {
				// Skip this field if already printed and this one is only here because it has unknown type
				continue;
			}

			stream.write("\t");

			if (seenFields.has(field.id) || field.type === "UNKNOWN") {
				stream.write("//");
			} else if (seenFieldsNames.has(field.name)) {
				field.name += `__field_${field.id}`;
			}

			seenFields.add(field.id);
			seenFieldsNames.add(field.name);

			stream.write(`${field.flag} ${field.type} ${field.name} = ${field.id}`);

			const options = [];

			if (Object.hasOwn(field, "default")) {
				options.push(`default = ${field.default}`);
			}

			if (Object.hasOwn(field, "description")) {
				options.push(`(.description) = "${field.description}"`);
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

function OutputEnums(enums, stream = process.stdout) {
	for (const [name, values] of enums) {
		stream.write(`enum ${name}\n{\n`);

		for (const [key, value] of values) {
			stream.write(`\t${key} = ${value};\n`);
		}

		stream.write(`}\n\n`);
	}
}

function SplitRpcString(rpc) {
	if (rpc == "Test_TransportError.InvalidService") {
		rpc += "#1";
	}

	if (!rpc.endsWith("#1")) {
		throw new Error(`Unexpected service name: ${rpc}`);
	}

	const [serviceName, methodName] = rpc.substring(0, rpc.length - 2).split(".", 2);

	return { serviceName, methodName };
}

// Split rpc strings like "Service.Method#1" into their components and group all the methods
function SplitServices(services) {
	const cleanServices = new Map();

	for (const rawMethod of services) {
		const { serviceName, methodName } = SplitRpcString(rawMethod.name);

		let service = cleanServices.get(serviceName);

		if (!service) {
			service = {
				name: serviceName,
				methods: new Map(),
			};
			cleanServices.set(serviceName, service);
		}

		rawMethod.name = methodName;

		const existingMethod = service.methods.get(methodName);

		if (existingMethod) {
			if (existingMethod.request === NotImplemented && rawMethod.request !== existingMethod.request) {
				existingMethod.request = rawMethod.request;
			}

			if (existingMethod.response === NoResponse && rawMethod.response !== existingMethod.response) {
				existingMethod.response = rawMethod.response;
			}

			continue;
		}

		service.methods.set(methodName, rawMethod);
	}

	return cleanServices;
}

// Mark which services RPCs use a particular message
function MarkMethodDependants(services, messages) {
	const MarkDependants = (serviceName, messageName, parentMessageName = null) => {
		const message = messages.get(messageName);

		if (!message) {
			throw new Error("Failed to find method");
		}

		message.dependants.add(serviceName);

		MarkDependantsForMessage(message, serviceName, messageName, parentMessageName);
	};

	const MarkDependantsForMessage = (message, serviceName, messageName, parentMessageName) => {
		for (const field of message.fields) {
			if (field.type[0] !== ".") {
				continue;
			}

			const typeName = field.type.substring(1);
			const typeMessage = messages.get(typeName);

			if (!typeMessage) {
				throw new Error("Failed to find field type method");
			}

			typeMessage.dependants.add(serviceName);

			if (parentMessageName !== typeName) {
				MarkDependants(serviceName, typeName, messageName);
			}
		}
	};

	for (const [serviceName, service] of services) {
		for (const [, method] of service.methods) {
			MarkDependants(serviceName, method.request);
			MarkDependants(serviceName, method.response);
		}
	}

	// Unused messages that go into common.proto may have field types that should also stay in common.proto
	for (const [, message] of messages) {
		if (message.dependants.size > 0) {
			continue;
		}

		MarkDependantsForMessage(message, "common.proto", message.className, null);
	}
}

// Group "Client" and "Notifications" services into same dump
function GroupServices(services) {
	services = SortMapByKey(services);
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

		service.methods = SortMapByKey(service.methods);

		if (groupedService) {
			groupedService.push(service);
		} else {
			groupedServices.set(cleanName, [service]);
		}
	}

	return groupedServices;
}

// Multiple .js files can produce same messages, so de-duplicate them
function MergeMessages(allMessages) {
	const keyedMessages = new Map();

	for (const message of allMessages) {
		const existingMessage = keyedMessages.get(message.className);

		if (existingMessage) {
			existingMessage.push(message);
		} else {
			keyedMessages.set(message.className, [message]);
		}
	}

	const cleanMessages = new Map();

	for (const [className, messages] of keyedMessages) {
		const message = messages[0];

		for (let i = 1; i < messages.length; i++) {
			for (const field of messages[i].fields) {
				const existingFields = message.fields.filter((f) => f.id === field.id);

				// If field with this id doesn't exist, just push it
				if (existingFields.length < 1) {
					message.fields.push(field);
				}
				// If there's a conflicting field with different type or name, push it but comment it out during output
				else if (
					field.type !== "UNKNOWN" &&
					!existingFields.some((f) => f.type === field.type && f.name === field.name)
				) {
					message.fields.push(field);
				}
			}
		}

		message.fields.sort((a, b) => {
			if (a.id === b.id) {
				const typeCompare = a.type.localeCompare(b.type);

				if (typeCompare === 0) {
					return a.name.localeCompare(b.name);
				}

				return typeCompare;
			}

			return a.id - b.id;
		});

		cleanMessages.set(className, message);
	}

	return SortMapByKey(cleanMessages);
}

function MergeEnums(allEnums) {
	const keyedEnums = new Map();

	for (const { name, values } of allEnums) {
		const existingEnum = keyedEnums.get(name);

		if (existingEnum) {
			existingEnum.push(values);
		} else {
			keyedEnums.set(name, [values]);
		}
	}

	const cleanEnums = new Map();

	for (const [name, values] of keyedEnums) {
		cleanEnums.set(name, values[0]); // TODO: Merge
	}

	return SortMapByKey(cleanEnums);
}

function FixTypesSameModule(services, messages) {
	for (const message of messages) {
		for (const field of message.fields) {
			if (field.typeToLookup && field.typeToLookup.module === null) {
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

	for (const service of services) {
		if (service.requestToLookup) {
			outerLoop: for (const requestToLookup of service.requestToLookup.names) {
				for (const message of messages) {
					if (requestToLookup === message.className) {
						service.request = message.className;
						service.requestToLookup = null;
						break outerLoop;
					}
				}
			}
		}
	}
}

function FixTypesCrossModule(services, messages, crossModuleExportedMessages) {
	const GetType = ({ module, name }) => {
		const moduleExported = crossModuleExportedMessages.get(module);

		if (!moduleExported) {
			// TODO: Cross-file modules
			//throw new Error("Failed to find module");
			return null;
		}

		const className = moduleExported.get(name);

		if (!className) {
			throw new Error("Failed to exported name");
		}

		return className;
	};

	for (const message of messages) {
		for (const field of message.fields) {
			if (!field.typeToLookup) {
				continue;
			}

			if (field.typeToLookup.module !== null) {
				const className = GetType(field.typeToLookup);

				if (className === null) {
					continue;
				}

				field.type = `.${className}`;
				field.typeToLookup = null;
			}

			if (field.typeToLookup !== null) {
				throw new Error("Failed to find type");
			}
		}
	}

	for (const service of services) {
		if (service.responseToLookup) {
			const className = GetType(service.responseToLookup);

			if (className === null) {
				continue;
			}

			service.response = className;
			service.responseToLookup = null;

			if (service.request === NotImplemented) {
				if (service.requestToLookup) {
					throw new Error("There is already request to lookup");
				}

				service.requestToLookup = {
					//module: null, // all modules
					names: GenerateRequestNames(service.name, className),
				};
			}
		}

		// This is only needed because of setting requestToLookup above
		// Otherwise it doesn't find anything new
		if (service.requestToLookup) {
			outerLoop: for (const requestToLookup of service.requestToLookup.names) {
				for (const [, map] of crossModuleExportedMessages) {
					for (const [, className] of map) {
						if (requestToLookup === className) {
							service.request = className;
							service.requestToLookup = null;
							break outerLoop;
						}
					}
				}
			}
		}
	}
}

function TraverseModule(ast) {
	const services = [];
	const messages = [];
	const enums = [];
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
				/*
					r.d(t, { YearInReviewRoutes: () => W, default: () => j })
				*/
				if (node.arguments[1].type === Syntax.ObjectExpression) {
					for (const property of node.arguments[1].properties) {
						if (
							property.key.type !== Syntax.Identifier ||
							property.value.type !== Syntax.ArrowFunctionExpression ||
							property.value.body.type !== Syntax.Identifier
						) {
							/*
								ZT: () => A.Z,
							*/
							if (property.value.body.type === Syntax.MemberExpression) {
								continue;
							}
							throw new Error("Unexpected webpack function");
						}

						const exportedId = property.key.name;
						const localId = property.value.body.name;

						exportedIds.set(exportedId, localId);
						exportedIdsFlipped.set(localId, exportedId);
					}

					this.skip();
					return;
				} else if (
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

			/*
				var a = r("q1tI")
			*/
			if (
				node.type === Syntax.VariableDeclarator &&
				node.init?.type === Syntax.CallExpression &&
				node.init.callee.type === Syntax.Identifier &&
				node.init.callee.name === webpackRequireName &&
				node.init.arguments.length === 1
			) {
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
			if (messageIdentifier !== null && node.type === Syntax.ClassDeclaration) {
				let parseClass = false;

				/*
					class s extends (1856 != t.j ? n : null) {
				*/
				if (
					node.superClass?.type === Syntax.ConditionalExpression &&
					node.superClass?.consequent.type === Syntax.Identifier &&
					node.superClass.consequent.name === messageIdentifier
				) {
					parseClass = true;
				} else if (node.superClass?.type === Syntax.Identifier && node.superClass.name === messageIdentifier) {
					parseClass = true;
				}

				if (parseClass) {
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
			}

			/*
				c = (function (n) {

				})(s);
			*/
			if (
				messageIdentifier !== null &&
				parent?.type === Syntax.VariableDeclarator &&
				parent?.id?.type === Syntax.Identifier
			) {
				/*
					c = ((function (n) {

					})(s), (function (n) {

					})(s));
				*/
				if (node.type === Syntax.SequenceExpression) {
					for (let i = 0; i < node.expressions.length; i++) {
						const expr = node.expressions[i];

						if (
							messageIdentifier !== null &&
							expr.type === Syntax.CallExpression &&
							expr.callee.type === Syntax.FunctionExpression &&
							expr.arguments.length === 1 &&
							expr.arguments[0].type === Syntax.Identifier &&
							expr.arguments[0].name === messageIdentifier
						) {
							const message = TraverseTranspiledClass(expr.callee.body, importedIds);

							if (i === node.expressions.length - 1) {
								message.id = parent.id.name;
							}

							messages.push(message);

							const exportedId = exportedIdsFlipped.get(message.id);

							if (exportedId) {
								exportedIds.set(exportedId, message.className);
							}
						}
					}

					this.skip();
					return;
				}

				if (
					node.type === Syntax.CallExpression &&
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
					msg = GetSendMsg(parent, messages, importedIds);
				} else if (node.property.name === "SendNotification") {
					msg = GetSendNotification(parent);
				}

				if (msg !== null) {
					services.push(msg);
					this.skip();
					return;
				}
			}

			/*
				(e[(e.k_EEventStateUnpublished = 0)] = "k_EEventStateUnpublished"),
			*/
			if (
				node.type === Syntax.SequenceExpression &&
				node.expressions.every(
					(e) =>
						e.type === Syntax.AssignmentExpression &&
						e.left.type === Syntax.MemberExpression &&
						e.right.type === Syntax.Literal &&
						e.left.property.type === Syntax.AssignmentExpression &&
						e.left.property.left.property.name === e.right.value,
				)
			) {
				const enumObj = ParseEnum(node);

				if (enumObj !== null) {
					enums.push(enumObj);
					this.skip();
					return;
				}
			}
		},
	});

	return { services, messages, enums, exportedIds };
}

function TraverseTranspiledClass(ast, importedIds) {
	const message = {
		className: null,
		dependants: new Set(),
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
		dependants: new Set(),
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

function TraverseReactNativeModule(ast, requireVar, exportVar, dependencyMapVar, dependencyMap) {
	const services = [];
	const messages = [];
	const enums = [];
	const importedIds = new Map();
	const exportedIds = new Map();
	let messageIdentifier = null;

	traverse(ast, {
		enter: function (node, parent) {
			/*
				var P = c.Message;
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
				h = r(o[10])
			*/
			if (node.type === Syntax.VariableDeclarator && node.init) {
				const importedId = CheckReactNativeRequireExpression(node.init, requireVar, dependencyMapVar, dependencyMap);

				if (importedId !== null) {
					const localId = node.id.name;
					importedIds.set(localId, importedId);
					return;
				}
			}

			/*
				S = (r(d[15]), r(d[16]));
			*/
			if (node.type === Syntax.VariableDeclarator && node.init?.type === Syntax.SequenceExpression) {
				const call = node.init.expressions[node.init.expressions.length - 1];

				const importedId = CheckReactNativeRequireExpression(call, requireVar, dependencyMapVar, dependencyMap);

				if (importedId !== null) {
					const localId = node.id.name;
					importedIds.set(localId, importedId);
					return;
				}

				/* TODO: Not needed so far?
				if (
					call.type === Syntax.MemberExpression &&
					call.property.type === Syntax.Identifier &&
					call.property.name === "Message"
				) {
					messageIdentifier = node.id.name;
					return;
				}
				*/
			}

			/*
				a.CAuthentication_GetPasswordRSAPublicKey_Request = p;
			*/
			if (
				node.type === Syntax.AssignmentExpression &&
				node.left.type === Syntax.MemberExpression &&
				node.left.object.type === Syntax.Identifier &&
				node.left.object.name === exportVar &&
				node.right.type === Syntax.Identifier
			) {
				const exportedId = node.left.property.name;
				const localId = node.right.name;
				const message = messages.find((m) => m.id === localId);

				if (message) {
					exportedIds.set(exportedId, message.className);
				}

				return;
			}

			/*
				var _ = (function (t) {

				})(P);
			*/
			if (
				node.type === Syntax.VariableDeclarator &&
				node.id.type === Syntax.Identifier &&
				node.init?.type === Syntax.CallExpression &&
				node.init.arguments.length === 1 &&
				node.init.arguments[0].type === Syntax.Identifier &&
				node.init.arguments[0].name === messageIdentifier &&
				node.init.callee?.type === Syntax.FunctionExpression &&
				node.init.callee?.body.type === Syntax.BlockStatement
			) {
				var message = ParseReactNativeMessage(node.init.callee.body, importedIds);

				if (message !== null) {
					message.id = node.id.name;
					messages.push(message);
				}

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
					msg = GetSendMsg(parent, messages, importedIds);
				} else if (node.property.name === "SendNotification") {
					msg = GetSendNotification(parent);
				}

				if (msg !== null) {
					services.push(msg);
					this.skip();
					return;
				}
			}
		},
	});

	return { services, messages, enums, exportedIds };
}

function CheckReactNativeRequireExpression(node, requireVar, dependencyMapVar, dependencyMap) {
	if (
		node.type === Syntax.CallExpression &&
		node.callee.type === Syntax.Identifier &&
		node.callee.name === requireVar &&
		node.arguments.length === 1 &&
		node.arguments[0].type === Syntax.MemberExpression &&
		node.arguments[0].object.type === Syntax.Identifier &&
		node.arguments[0].object.name === dependencyMapVar
	) {
		return dependencyMap[node.arguments[0].property.value];
	}

	return null;
}

function ParseReactNativeMessage(node, importedIds) {
	const ret = node.body[node.body.length - 1];

	if (ret.type !== Syntax.ReturnStatement) {
		return null;
	}

	const keys = [
		...ret.argument.expressions[0].arguments[1].elements,
		...ret.argument.expressions[0].arguments[2].elements,
	];

	const message = {
		className: null,
		dependants: new Set(),
		fields: [],
	};

	for (const key of keys) {
		if (key.type !== Syntax.ObjectExpression) {
			continue;
		}

		const name = key.properties[0].value.value;

		if (name === "getClassName") {
			message.className = GetClassNameLiteral(key.properties[1]);
		} else if (name === "M") {
			message.fields = TraverseFields(key.properties[1], importedIds);
		}
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
						type: "UNKNOWN",
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
							if (fieldProp.value.type === Syntax.MemberExpression) {
								// TODO: Support default fields expressions
							} else {
								field.default = EvaluateConstant(fieldProp);
							}
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
									field.type = "int32";
									field.description = "enum";
								}
							} else {
								throw new Error("Unexpected field.br");
							}
						} else if (fieldProp.key.name === "bw") {
							// writeRepeated type
						} else if (fieldProp.key.name === "pbr") {
							// readPacked type
						} else {
							console.warn(`Unexpected field: ${fieldProp.key.name}`);
						}
					}

					// Strings need to be quoted
					if (field.type === "string" && Object.hasOwn(field, "default")) {
						field.default = JSON.stringify(field.default);
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
	if (!node.left.property.name.endsWith("Handler")) {
		throw new Error("Unexpected handler name");
	}

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
		response: NoResponse,
	};
}

function GetSendMsg(node, messages, importedIds) {
	if (
		node.type !== Syntax.CallExpression ||
		node.arguments.length !== 4 ||
		node.arguments[0].type !== Syntax.Literal ||
		node.arguments[3].type !== Syntax.ObjectExpression
	) {
		return null;
	}

	const name = node.arguments[0].value;

	if (node.arguments[2].type === Syntax.Identifier) {
		const responseToLookup = node.arguments[2].name;
		const response = messages.find((m) => m.id === responseToLookup);

		if (!response) {
			throw new Error("Failed to find response message");
		}

		if (!response.className.endsWith("_Response")) {
			throw new Error("Unexpected message response");
		}

		return {
			name: name,
			request: NotImplemented,
			response: response.className,
			requestToLookup: {
				//module: null, // all modules
				names: GenerateRequestNames(name, response.className),
			},
		};
	} else if (node.arguments[2].type === Syntax.MemberExpression) {
		const importedModule = importedIds.get(node.arguments[2].object.name);

		if (!importedModule) {
			throw new Error("Failed to find imported module");
		}

		return {
			name: name,
			request: NotImplemented,
			response: NoResponse,
			responseToLookup: {
				module: importedModule,
				name: node.arguments[2].property.name,
			},
		};
	}

	return null;
}

function GenerateRequestNames(rpc, className) {
	const { serviceName, methodName } = SplitRpcString(rpc);

	return [
		...new Set([
			`C${serviceName}_${methodName}_Request`,
			className.substring(0, className.length - "_Response".length) + "_Request",
		]),
	];
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

	let { serviceName, methodName } = SplitRpcString(name);

	if (methodName.startsWith("Notify")) {
		methodName = methodName.substring("Notify".length);
	}

	return {
		name: name,
		request: NotImplemented,
		response: NoResponse,
		requestToLookup: {
			//module: null, // all modules
			names: [`C${serviceName}_${methodName}_Notification`],
		},
	};
}

function ParseEnum(node) {
	const enumValues = new Map();

	for (const expr of node.expressions) {
		const name = expr.right.value;
		const value = expr.left.property.right.value;

		enumValues.set(name, value);
	}

	let allEnumKeys = [...enumValues.keys()];
	const commonName = allEnumKeys.reduce((str1, str2) => {
		let i = 0;
		while (i < str1.length && str1.charAt(i) === str2.charAt(i)) {
			i++;
		}
		return str1.substring(0, i);
	});
	let enumName = commonName;

	if (enumName.startsWith("k_")) {
		enumName = enumName.substring(2);
	}

	if (enumName.endsWith("_")) {
		enumName = enumName.substring(0, enumName.length - 1);
	}

	if (enumName.length < 2) {
		return null;
	}

	/*
	const reSubstrToReplace = new RegExp(`^${commonName}`);
	allEnumKeys.forEach((keyName) => {
		let newKeyName = keyName.replace(reSubstrToReplace, "");
		if ("0123456789".includes(newKeyName.charAt(0))) {
			newKeyName = "_" + newKeyName;
		}
		enumValues.set(newKeyName, enumValues.get(keyName));
		enumValues.delete(keyName);
	});
	*/

	return {
		name: enumName,
		values: enumValues,
	};
}

function EvaluateConstant(node) {
	if (node.value.type === Syntax.UnaryExpression && node.value.operator === "!") {
		return node.value.argument.value === 0 ? true : false;
	} else if (node.value.type === Syntax.UnaryExpression && node.value.operator === "-") {
		return -node.value.argument.value;
	} else if (node.value.type === Syntax.Literal) {
		return node.value.value;
	}

	throw new Error("Unexpected constant");
}

function SortMapByKey(map) {
	return new Map([...map].sort(([a], [b]) => a.localeCompare(b, "en-US")));
}

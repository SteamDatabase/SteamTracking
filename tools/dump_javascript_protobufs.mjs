import { createHash } from "node:crypto";
import { createWriteStream } from "node:fs";
import { readFile, writeFile } from "node:fs/promises";
import { basename as pathBasename, join as pathJoin, resolve as pathResolve } from "node:path";
import { latestEcmaVersion, parse } from "espree";
import { Syntax, traverse } from "estraverse";
import { GetFilesToParse } from "./dump_javascript_paths.mjs";

const __dirname = import.meta.dirname;
const rootDir = pathResolve(__dirname, "..");

/**
 * @typedef {Object} Field
 * @property {number} id
 * @property {string} name
 * @property {string} type
 * @property {string} flag
 * @property {*} [default]
 * @property {string} [description]
 * @property {TypeToLookup|null} [typeToLookup]
 */

/**
 * @typedef {Object} TypeToLookup
 * @property {string|null} module
 * @property {string} [name]
 * @property {boolean} [recursive]
 */

/**
 * @typedef {Object} Message
 * @property {string} className
 * @property {Set<string>} dependants
 * @property {Field[]} fields
 * @property {string} [id]
 * @property {boolean} [consumed]
 */

/**
 * @typedef {Object} Method
 * @property {string} name
 * @property {string} request
 * @property {string} response
 * @property {string[]} [serviceMethodParams]
 */

/**
 * @typedef {Object} Service
 * @property {string} name
 * @property {string} request
 * @property {string} response
 * @property {Object} [requestToLookup]
 * @property {string[]} [requestToLookup.names]
 * @property {Object} [responseToLookup]
 * @property {string} [responseToLookup.module]
 * @property {string} [responseToLookup.name]
 * @property {string[]} [serviceMethodParams]
 */

/**
 * @typedef {Object} ServiceWithMethods
 * @property {string} name
 * @property {Map<string, Method>} methods
 */

/**
 * @typedef {Object} Enum
 * @property {string} name
 * @property {Map<string, number|string>} values
 */

/**
 * @typedef {Object} TraverseResult
 * @property {Service[]} services
 * @property {Message[]} messages
 * @property {Enum[]} enums
 * @property {Map<string, string>} exportedIds
 */

const outputPath = pathResolve(rootDir, "ProtobufsWebui/");
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
		let ast;

		try {
			ast = parse(code, {
				ecmaVersion: latestEcmaVersion,
				sourceType: "module",
				loc: true,
			});
		} catch (e) {
			// Legacy non-module scripts can contain things that are only valid in
			// sloppy mode (e.g. duplicate top-level function declarations).
			if (!(e instanceof SyntaxError)) {
				throw e;
			}

			ast = parse(code, {
				ecmaVersion: latestEcmaVersion,
				sourceType: "script",
				loc: true,
			});
		}
		const crossModuleExportedMessages = new Map();
		const services = [];
		const messages = [];
		const enums = [];

		// ESM chunks (top-level `import`/`export` statements) go through a
		// separate traversal. Webpack chunks contain their modules as Property
		// nodes inside an object literal and still use the original path.
		const isEsm = ast.body.some(
			(node) =>
				node.type === Syntax.ImportDeclaration ||
				node.type === Syntax.ExportNamedDeclaration ||
				node.type === Syntax.ExportDefaultDeclaration,
		);

		if (isEsm) {
			const result = TraverseEsmModule(ast);
			const currentModule = pathBasename(file);

			crossModuleExportedMessages.set(currentModule, result.exportedIds);

			if (globalModuleExportedMessages.has(currentModule)) {
				globalModuleExportedMessages.set(
					currentModule,
					new Map([...globalModuleExportedMessages.get(currentModule), ...result.exportedIds]),
				);
			} else {
				globalModuleExportedMessages.set(currentModule, result.exportedIds);
			}

			FixTypesSameModule(result.services, result.messages);

			services.push(...result.services);
			messages.push(...result.messages);
			enums.push(...result.enums);
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

						const result = TraverseModule(node.value, file);
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
							// Plain (non-webpack) scripts can have object literals that reuse the same
							// key with a 3-parameter function (e.g. `success: function (a, b, c)`).
							// Only complain if this repeat actually looks like a webpack module.
							if (
								result.exportedIds.size > 0 ||
								result.services.length > 0 ||
								result.messages.length > 0 ||
								result.enums.length > 0
							) {
								throw new Error(`Module already exported: ${currentModule}`);
							}

							return;
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
	}
}

FixTypesCrossModule(allServices, allMessages, globalModuleExportedMessages);

const mergedMessages = MergeMessages(allMessages);

console.log("Found", mergedMessages.size, "messages");

await OutputSplitServices(allServices, mergedMessages);
await OutputCommon(mergedMessages);
await OutputCommonBase();

/**
 * @param {Service[]} allServices
 * @param {Map<string, Message>} mergedMessages
 */
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

/**
 * Output common protos which were not split into services or are used by multiple services
 *
 * @param {Map<string, Message>} mergedMessages
 */
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

	const stream = createWriteStream(pathResolve(rootDir, "Structs/webui_enums.steamd"), {
		flags: "w",
		encoding: "utf8",
	});
	OutputEnums(mergedEnums, stream);
	stream.end();
}

/**
 * @param {ServiceWithMethods[]} services
 * @param {Set<string>} dependants
 */
function GetMatchingDependencyCount(services, dependants) {
	let dependencyCount = 0;

	for (const { name } of services) {
		if (dependants.has(name)) {
			dependencyCount++;
		}
	}

	return dependencyCount;
}

/**
 * @param {string} fileName
 * @param {Set<string>} imports
 * @param {ServiceWithMethods[]} services
 * @param {Map<string, Message>} messages
 */
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

/**
 * @param {Set<string>} imports
 * @param {import('fs').WriteStream} stream
 */
function OutputImports(imports, stream = process.stdout) {
	for (const importName of imports) {
		stream.write(`import "${importName}";\n`);
	}

	stream.write("\n");
}

/**
 * @param {Map<string, Message>} messages
 * @param {import('fs').WriteStream} stream
 */
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

/**
 * @param {ServiceWithMethods[]} services
 * @param {import('fs').WriteStream} stream
 */
function OutputServices(services, stream = process.stdout) {
	for (const { name, methods } of services) {
		stream.write(`service ${name} {\n`);

		for (const [, method] of methods) {
			if (method.serviceMethodParams) {
				stream.write(`\t// ${method.serviceMethodParams.join(", ")}\n`);
			}

			stream.write(`\trpc ${method.name} (.${method.request}) returns (.${method.response});\n`);
		}

		stream.write("}\n\n");
	}
}

/**
 * @param {Map<string, Map<string, number|string>>} enums
 * @param {import('fs').WriteStream} stream
 */
function OutputEnums(enums, stream = process.stdout) {
	for (const [name, values] of enums) {
		stream.write(`enum ${name}\n{\n`);

		for (const [key, value] of values) {
			stream.write(`\t${key} = ${value};\n`);
		}

		stream.write("}\n\n");
	}
}

/**
 * @param {string} rpc
 */
function SplitRpcString(rpc) {
	if (rpc === "Test_TransportError.InvalidService") {
		rpc += "#1";
	}

	if (!rpc.endsWith("#1")) {
		throw new Error(`Unexpected service name: ${rpc}`);
	}

	const [serviceName, methodName] = rpc.substring(0, rpc.length - 2).split(".", 2);

	return { serviceName, methodName };
}

/**
 * Split rpc strings like "Service.Method#1" into their components and group all the methods
 *
 * @param {Service[]} allServices
 */
function SplitServices(services) {
	/** @type {Map<string, ServiceWithMethods>} */
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

			if (!existingMethod.serviceMethodParams && rawMethod.serviceMethodParams) {
				existingMethod.serviceMethodParams = rawMethod.serviceMethodParams;
			}

			continue;
		}

		service.methods.set(methodName, rawMethod);
	}

	return cleanServices;
}

/**
 * Mark which services RPCs use a particular message
 *
 * @param {Map<string, ServiceWithMethods>} splitServices
 * @param {Map<string, Message>} mergedMessages
 */
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

/**
 * Group "Client" and "Notifications" services into same dump
 *
 * @param {Map<string, ServiceWithMethods>} services
 */
function GroupServices(services) {
	services = SortMapByKey(services);

	/** @type {Map<string, ServiceWithMethods[]>} */
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

/**
 * Multiple .js files can produce same messages, so de-duplicate them
 *
 * @param {Message[]} allMessages
 */
function MergeMessages(allMessages) {
	/** @type {Map<string, Message[]>} */
	const keyedMessages = new Map();

	for (const message of allMessages) {
		const existingMessage = keyedMessages.get(message.className);

		if (existingMessage) {
			existingMessage.push(message);
		} else {
			keyedMessages.set(message.className, [message]);
		}
	}

	/** @type {Map<string, Message>} */
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

/**
 * @param {Enum[]} allEnums
 * @returns {Map<string, Map<string, number|string>>}
 */
function MergeEnums(allEnums) {
	/** @type {Map<string, Map<string, number|string>[]>} */
	const keyedEnums = new Map();

	for (const { name, values } of allEnums) {
		const existingEnum = keyedEnums.get(name);

		if (existingEnum) {
			existingEnum.push(values);
		} else {
			keyedEnums.set(name, [values]);
		}
	}

	/** @type {Map<string, Map<string, number|string>>} */
	const cleanEnums = new Map();

	for (const [name, variants] of keyedEnums) {
		const merged = new Map(variants[0]);

		for (let i = 1; i < variants.length; i++) {
			for (const [key, value] of variants[i]) {
				const existing = merged.get(key);

				if (existing === undefined) {
					merged.set(key, value);
				} else if (existing !== value) {
					console.warn(`Enum ${name} has conflicting value for ${key}: ${existing} vs ${value} (keeping ${existing})`);
				}
			}
		}

		cleanEnums.set(name, merged);
	}

	return SortMapByKey(cleanEnums);
}

/**
 * @param {Service[]} services
 * @param {Message[]} messages
 */
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
		if (service.requestToLookup?.names) {
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

/**
 * @param {Service[]} services
 * @param {Message[]} messages
 * @param {Map<string, Map<string, string>>} crossModuleExportedMessages
 */
function FixTypesCrossModule(services, messages, crossModuleExportedMessages) {
	const GetType = ({ module, name }) => {
		const moduleExported = crossModuleExportedMessages.get(module);

		if (!moduleExported || moduleExported.size === 0) {
			// TODO: Cross-file modules
			//throw new Error("Failed to find module");
			return null;
		}

		const className = moduleExported.get(name);

		if (!className) {
			throw new Error("Failed to find exported name");
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
			// ESM: targeted cross-module lookup by {module, name}
			if (service.requestToLookup.module) {
				const className = GetType(service.requestToLookup);

				if (className !== null) {
					service.request = className;
					service.requestToLookup = null;
				}

				continue;
			}

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

/**
 * @param {Node} ast
 * @param {string} fileName
 * @returns {TraverseResult}
 */
function TraverseModule(ast, fileName) {
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

							console.error("Unexpected webpack function", fileName);
							return;
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
					if (node.arguments[2].type === Syntax.CallExpression || node.arguments[2].type === Syntax.Identifier) {
						return; // dynamic import?
					}

					console.error("Unexpected webpack function ", node.arguments[2].type, fileName);
					return;
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
			if (node.type === Syntax.ClassDeclaration) {
				let parseClass = false;

				if (messageIdentifier !== null) {
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
				} else if (
					node.type === Syntax.ClassDeclaration &&
					node.superClass?.type === Syntax.MemberExpression &&
					node.superClass.property.type === Syntax.Identifier &&
					node.superClass.property.name === "Message"
				) {
					/*
						class p extends d.Message {
					*/

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
				node.right.properties[0].type === Syntax.Property &&
				node.right.properties[1].type === Syntax.Property &&
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
				const enumObj = ParseEnum(node, ResolveEnumName(this.parents(), exportedIdsFlipped));

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

/**
 * Parse an ES module file (top-level `import`/`export` statements, classes as
 * `var X = class extends o.Message { ... }` expressions) rather than a webpack
 * runtime chunk.
 *
 * @param {Node} ast
 * @returns {TraverseResult}
 */
function TraverseEsmModule(ast) {
	const services = [];
	const messages = [];
	const enums = [];
	// importedIds stays empty here — ESM has no webpack `r("id")` calls, so the
	// shared helpers' MemberExpression path never fires. Cross-file resolution
	// in ESM goes through esmImports instead.
	const importedIds = new Map();
	/** @type {Map<string, {module: string, name: string}>} */
	const esmImports = new Map();
	const exportedIds = new Map();
	const exportLocalToExported = new Map();

	// Pass 1: collect ESM import specifiers so we know which identifiers are
	// cross-file references and their exported name in the source chunk.
	for (const node of ast.body) {
		if (node.type === Syntax.ImportDeclaration) {
			const moduleKey = pathBasename(node.source.value);

			for (const spec of node.specifiers) {
				if (spec.type === Syntax.ImportSpecifier) {
					esmImports.set(spec.local.name, {
						module: moduleKey,
						name: spec.imported.name,
					});
				} else if (spec.type === Syntax.ImportDefaultSpecifier) {
					esmImports.set(spec.local.name, {
						module: moduleKey,
						name: "default",
					});
				}
			}
		} else if (node.type === Syntax.ExportNamedDeclaration && !node.source) {
			for (const spec of node.specifiers) {
				if (spec.type === Syntax.ExportSpecifier) {
					exportLocalToExported.set(spec.local.name, spec.exported.name);
				}
			}
		}
	}

	// Pass 2: walk the whole program for classes, services, enums.
	traverse(ast, {
		enter: function (node, parent) {
			// var Ae = class t extends o.Message { ... }
			if (
				node.type === Syntax.VariableDeclarator &&
				node.id.type === Syntax.Identifier &&
				node.init?.type === Syntax.ClassExpression &&
				node.init.superClass?.type === Syntax.MemberExpression &&
				node.init.superClass.property.type === Syntax.Identifier &&
				node.init.superClass.property.name === "Message"
			) {
				const message = TraverseClass(node.init.body, importedIds);
				message.id = node.id.name;
				messages.push(message);
				this.skip();
				return;
			}

			/*
				s.NotifyFileSubscribedHandler = {
					name: "PublishedFileClient.NotifyFileSubscribed#1",
					request: Ti,
				}
			*/
			if (
				node.type === Syntax.AssignmentExpression &&
				node.left.type === Syntax.MemberExpression &&
				node.right.type === Syntax.ObjectExpression &&
				node.right.properties.length === 2 &&
				node.right.properties[0].type === Syntax.Property &&
				node.right.properties[1].type === Syntax.Property &&
				node.right.properties[0].key.name === "name" &&
				node.right.properties[1].key.name === "request"
			) {
				services.push(GetMsgResponse(node, messages, esmImports));
				this.skip();
				return;
			}

			/*
				return n.SendMsg("PublishedFile.GetOwner#1", m(Ae, l), Me, { ... });
				return n.SendNotification("ClientMetrics.ClientBootstrapReport#1", t, { ... });
			*/
			if (node.type === Syntax.MemberExpression && node.property.type === Syntax.Identifier) {
				let msg = null;
				if (node.property.name === "SendMsg") {
					msg = GetSendMsg(parent, messages, importedIds, esmImports);
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
				const enumObj = ParseEnum(node, ResolveEnumName(this.parents(), exportLocalToExported));

				if (enumObj !== null) {
					enums.push(enumObj);
					this.skip();
					return;
				}
			}
		},
	});

	// Pass 3: rewrite field typeToLookup entries that reference imported symbols
	// (FixTypesSameModule would otherwise throw because `name` isn't a local id).
	for (const message of messages) {
		for (const field of message.fields) {
			if (!field.typeToLookup || field.typeToLookup.module !== null) {
				continue;
			}

			if (field.typeToLookup.recursive) {
				continue;
			}

			const name = field.typeToLookup.name;

			if (messages.some((m) => m.id === name)) {
				continue;
			}

			const imp = esmImports.get(name);

			if (imp) {
				field.typeToLookup = { module: imp.module, name: imp.name };
			}
		}
	}

	// Pass 4: map ESM `export { local as exported }` specifiers to the class
	// names we discovered, mirroring what `r.d(...)` does in the webpack path.
	for (const [local, exported] of exportLocalToExported) {
		const message = messages.find((m) => m.id === local);

		if (message) {
			exportedIds.set(exported, message.className);
		}
	}

	return { services, messages, enums, exportedIds };
}

/**
 * @param {Node} ast
 * @param {Map<string, string>} importedIds
 * @returns {Message}
 */
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

/**
 * @param {Node} body
 * @param {Map<string, string>} importedIds
 * @returns {Message}
 */
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

/**
 * @param {Object} ast
 * @param {Map<string, string>} importedIds
 */
function TraverseFields(ast, importedIds) {
	/** @type {Field[]} */
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

					/** @type {Field} */
					const field = {
						id: null,
						name: prop.key.name,
						type: "UNKNOWN",
						flag: "optional",
					};

					for (const fieldProp of prop.value.properties) {
						if (fieldProp.key.name === "n") {
							// n: number //field [n]umber
							if (fieldProp.value.type === Syntax.Literal) {
								field.id = fieldProp.value.value;
							} else {
								throw new Error("Unexpected field.n");
							}
						} else if (fieldProp.key.name === "r") {
							// r?: boolean //[r]epeated
							if (EvaluateConstant(fieldProp.value)) {
								field.flag = "repeated";
							}
						} else if (fieldProp.key.name === "d") {
							// d?: any //[d]efault value
							if (fieldProp.value.type === Syntax.MemberExpression) {
								// TODO: Support default fields expressions
							} else {
								field.default = EvaluateConstant(fieldProp.value);
							}
						} else if (fieldProp.key.name === "c") {
							// c?: msgClass_t //message [c]lass
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
							// q?: boolean //re[q]uired
						} else if (fieldProp.key.name === "br") {
							// br?: ( this: jspb.BinaryReader ) => any //[b]inary [r]eader
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
							// bw?: ( this: jspb.BinaryWriter, field: number, value: any ) => void //[b]inary [w]riter
							// writeRepeated type
						} else if (fieldProp.key.name === "pbr") {
							// pbr?: ( this: jspb.BinaryReader ) => any //[p]acked [b]inary [r]eader
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

/**
 * @param {Object} ast
 * @returns {?string}
 */
function GetClassNameLiteral(ast) {
	let value = null;

	traverse(ast, {
		enter: (node, parent) => {
			if (node.type === Syntax.Literal && parent.type === Syntax.ReturnStatement) {
				value = node.value;
			}
		},
	});

	return value;
}

/**
 * @param {Object} node
 * @param {Message[]} messages
 * @param {Map<string, {module: string, name: string}>|null} [esmImports]
 * @returns {Service}
 */
function GetMsgResponse(node, messages, esmImports = null) {
	if (!node.left.property.name.endsWith("Handler")) {
		throw new Error("Unexpected handler name");
	}

	if (node.right.properties[0].value.type !== Syntax.Literal) {
		throw new Error("Unexpected request name");
	}

	if (node.right.properties[1].value.type !== Syntax.Identifier) {
		throw new Error("Unexpected request message");
	}

	const name = node.right.properties[0].value.value;
	const requestToLookup = node.right.properties[1].value.name;
	const message = messages.find((m) => m.id === requestToLookup);

	if (message) {
		return {
			name: name,
			request: message.className,
			response: NoResponse,
		};
	}

	// ESM: request may reference a symbol imported from another chunk
	if (esmImports?.has(requestToLookup)) {
		const imp = esmImports.get(requestToLookup);

		return {
			name: name,
			request: NotImplemented,
			response: NoResponse,
			requestToLookup: {
				module: imp.module,
				name: imp.name,
			},
		};
	}

	throw new Error("Failed to find request message");
}

/**
 * @param {Object[]} properties
 * @returns {string[]}
 */
function GetServiceMethodParams(properties) {
	const serviceMethodParams = [];

	for (const property of properties) {
		if (property.type !== Syntax.Property) {
			continue;
		}

		serviceMethodParams.push(property.key.name + "=" + EvaluateConstant(property.value));
	}

	return serviceMethodParams;
}

/*
export interface ServiceMethodParams_t
{
	bConstMethod?: boolean;
	ePrivilege?: EProtoPrivilege;
	eWebAPIKeyRequirement?: EProtoWebAPIKeyRequirement;
}

SendMsg: <Req extends jspb.Message, Res extends jspb.Message>(
	serviceName: string,
	msg: CProtoBufMsg<Req>,
	responseClass: msgClass_t<Res>,
	methodParams: ServiceMethodParams_t,
) => Promise<CProtoBufMsg<Res>>;
*/
/**
 * @param {Object} node
 * @param {Message[]} messages
 * @param {Map<string, string>} importedIds
 * @param {Map<string, {module: string, name: string}>|null} [esmImports]
 * @returns {Service|null}
 */
function GetSendMsg(node, messages, importedIds, esmImports = null) {
	if (node.type !== Syntax.CallExpression || node.arguments.length !== 4 || node.arguments[0].type !== Syntax.Literal) {
		return null;
	}

	if (node.arguments[3].type !== Syntax.ObjectExpression) {
		console.error("Rejected SendMsg", node.arguments[0].value);
		return null;
	}

	const name = node.arguments[0].value;

	if (node.arguments[2].type === Syntax.Identifier) {
		const responseToLookup = node.arguments[2].name;
		const response = messages.find((m) => m.id === responseToLookup);

		if (response) {
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
				serviceMethodParams: GetServiceMethodParams(node.arguments[3].properties),
			};
		}

		// ESM: response may reference a symbol imported from another chunk
		if (esmImports?.has(responseToLookup)) {
			const imp = esmImports.get(responseToLookup);

			return {
				name: name,
				request: NotImplemented,
				response: NoResponse,
				responseToLookup: {
					module: imp.module,
					name: imp.name,
				},
				serviceMethodParams: GetServiceMethodParams(node.arguments[3].properties),
			};
		}

		throw new Error("Failed to find response message");
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
			serviceMethodParams: GetServiceMethodParams(node.arguments[3].properties),
		};
	}

	return null;
}

/**
 * @param {string} rpc
 * @param {string} className
 * @returns {string[]}
 */
function GenerateRequestNames(rpc, className) {
	const { serviceName, methodName } = SplitRpcString(rpc);

	return [
		...new Set([
			`C${serviceName}_${methodName}_Request`,
			className.substring(0, className.length - "_Response".length) + "_Request",
		]),
	];
}

/*
SendNotification: ( serviceName: string, msg: CProtoBufMsg<any>, methodParams: ServiceMethodParams_t ) => boolean;
*/
/**
 * @param {Object} node
 * @returns {Service|null}
 */
function GetSendNotification(node) {
	if (node.type !== Syntax.CallExpression || node.arguments.length !== 3 || node.arguments[0].type !== Syntax.Literal) {
		return null;
	}

	if (node.arguments[2].type !== Syntax.ObjectExpression) {
		console.error("Rejected SendNotification", node.arguments[0].value);
		return null;
	}

	const name = node.arguments[0].value;

	const { serviceName, methodName } = SplitRpcString(name);

	const names = [`C${serviceName}_${methodName}_Notification`];

	if (methodName.startsWith("Notify")) {
		const methodNameWithoutNotify = methodName.substring("Notify".length);
		names.push(`C${serviceName}_${methodNameWithoutNotify}_Notification`);
	}

	return {
		name: name,
		request: NotImplemented,
		response: NoResponse,
		requestToLookup: {
			//module: null, // all modules
			names: names,
		},
		serviceMethodParams: GetServiceMethodParams(node.arguments[2].properties),
	};
}

/**
 * Resolve an enum's best-known identifier by finding the enclosing IIFE and
 * looking its local variable name up in the caller's export map. Returns the
 * exported name when available, otherwise the raw local name, otherwise null.
 *
 * The enum wrapper shapes we handle:
 *   (function(e){...})(Foo)
 *   (function(e){...})(Foo || (Foo = {}))
 *   (function(e){...})(Foo ||= {})
 *
 * @param {Array<Object>} parents — `this.parents()` from estraverse, root-first
 * @param {Map<string, string>} exportMap — local-name → exported-name
 * @returns {string|null}
 */
function ResolveEnumName(parents, exportMap) {
	// Walk parents innermost-first to find the IIFE wrapping this enum.
	for (let i = parents.length - 1; i >= 0; i--) {
		const parent = parents[i];

		if (parent.type !== Syntax.CallExpression || parent.callee.type !== Syntax.FunctionExpression) {
			continue;
		}

		const arg = parent.arguments[0];
		let localName = null;

		if (arg?.type === Syntax.Identifier) {
			localName = arg.name;
		} else if (
			(arg?.type === Syntax.LogicalExpression || arg?.type === Syntax.AssignmentExpression) &&
			arg.left.type === Syntax.Identifier
		) {
			localName = arg.left.name;
		}

		if (!localName) {
			return null;
		}

		return exportMap.get(localName) ?? localName;
	}

	return null;
}

/**
 * @param {Object} node
 * @param {string|null} [identifierName] Resolved enum identifier from the
 *     enclosing IIFE (preferably an exported name; falls back to the local
 *     variable if not exported). Used as the enum name when it looks meaningful.
 * @returns {Enum|null}
 */
function ParseEnum(node, identifierName = null) {
	const enumValues = new Map();

	for (const expr of node.expressions) {
		const name = expr.right.value;
		const value = EvaluateConstant(expr.left.property.right);

		enumValues.set(name, value);
	}

	const allEnumKeys = [...enumValues.keys()];

	// Tier 1: prefer the enclosing identifier (an exported or local var name).
	// We require >=3 chars: 1- and 2-char identifiers like `s`, `EG`, `Ic` are
	// minified and would collide across chunks if used as enum names.
	let enumName = identifierName && identifierName.length >= 3 ? identifierName : null;

	// Tier 2: longest common prefix of the keys, but only when the prefix has a
	// "clean" structure (`k_` prefix or trailing `_`). Otherwise the result is
	// almost always a mid-word truncation like `Calibrati`.
	if (!enumName) {
		const commonName = allEnumKeys.reduce((str1, str2) => {
			let i = 0;
			while (i < str1.length && str1.charAt(i) === str2.charAt(i)) {
				i++;
			}
			return str1.substring(0, i);
		});

		const hasCleanPrefix = commonName.startsWith("k_") || commonName.endsWith("_");

		if (hasCleanPrefix) {
			let cleanName = commonName;

			if (cleanName.startsWith("k_")) {
				cleanName = cleanName.substring(2);
			}

			if (cleanName.endsWith("_")) {
				cleanName = cleanName.substring(0, cleanName.length - 1);
			}

			if (cleanName.length >= 2) {
				enumName = cleanName;
			}
		}
	}

	// Tier 3: hash fallback for everything else.
	if (!enumName) {
		const hash = createHash("sha256");
		hash.update(allEnumKeys.join(","));

		enumName = "UnnamedEnum" + hash.digest("hex").substring(0, 16);
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

/**
 * @param {Node} node
 * @returns {any}
 */
function EvaluateConstant(node) {
	if (node.type === Syntax.UnaryExpression && node.operator === "!") {
		return node.argument.value === 0;
	} else if (node.type === Syntax.UnaryExpression && node.operator === "-") {
		return -node.argument.value;
	} else if (node.type === Syntax.Literal) {
		return node.value;
	}

	return node.type;
}

/**
 * @template K, V
 * @param {Map<K, V>} map
 * @returns {Map<K, V>}
 */
function SortMapByKey(map) {
	return new Map([...map].sort(([a], [b]) => a.localeCompare(b, "en-US")));
}

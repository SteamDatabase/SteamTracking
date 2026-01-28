import { _, _ } from "./chunk-XXXXXXXX.js";
var _ = _((exports, module) => {
  "use strict";
  var $jscomp = $jscomp || {};
  $jscomp.scope = {};
  $jscomp.findInternal = function (_, _, _) {
    _ instanceof String && (_ = String(_));
    for (var _ = _.length, _ = 0; _ < _; _++) {
      var _ = _[_];
      if (_.call(_, _, _, _))
        return {
          _: _,
          _: _,
        };
    }
    return {
      _: -1,
      _: void 0,
    };
  };
  $jscomp.ASSUME_ES5 = !1;
  $jscomp.ASSUME_NO_NATIVE_MAP = !1;
  $jscomp.ASSUME_NO_NATIVE_SET = !1;
  $jscomp.SIMPLE_FROUND_POLYFILL = !1;
  $jscomp.defineProperty =
    $jscomp.ASSUME_ES5 || typeof Object.defineProperties == "function"
      ? Object.defineProperty
      : function (_, _, _) {
          _ != Array.prototype && _ != Object.prototype && (_[_] = _.value);
        };
  $jscomp.getGlobal = function (_) {
    return typeof window < "u" && window === _
      ? _
      : typeof global < "u" && global != null
        ? global
        : _;
  };
  $jscomp.global = $jscomp.getGlobal(exports);
  $jscomp.polyfill = function (_, _, _, _) {
    if (_) {
      for (_ = $jscomp.global, _ = _.split("."), _ = 0; _ < _.length - 1; _++) {
        var _ = _[_];
        _ in _ || (_[_] = {}), (_ = _[_]);
      }
      (_ = _[_.length - 1]),
        (_ = _[_]),
        (_ = _(_)),
        _ != _ &&
          _ != null &&
          $jscomp.defineProperty(_, _, {
            configurable: !0,
            writable: !0,
            value: _,
          });
    }
  };
  $jscomp.polyfill(
    "Array.prototype.findIndex",
    function (_) {
      return (
        _ ||
        function (_, _) {
          return $jscomp.findInternal(this, _, _)._;
        }
      );
    },
    "es6",
    "es3",
  );
  $jscomp.checkStringArgs = function (_, _, _) {
    if (_ == null)
      throw new TypeError(
        "The 'this' value for String.prototype." +
          _ +
          " must not be null or undefined",
      );
    if (_ instanceof RegExp)
      throw new TypeError(
        "First argument to String.prototype." +
          _ +
          " must not be a regular expression",
      );
    return _ + "";
  };
  $jscomp.polyfill(
    "String.prototype.endsWith",
    function (_) {
      return (
        _ ||
        function (_, _) {
          var _ = $jscomp.checkStringArgs(this, _, "endsWith");
          (_ += ""),
            _ === void 0 && (_ = _.length),
            (_ = Math.max(0, Math.min(_ | 0, _.length)));
          for (var _ = _.length; 0 < _ && 0 < _; )
            if (_[--_] != _[--_]) return !1;
          return 0 >= _;
        }
      );
    },
    "es6",
    "es3",
  );
  $jscomp.polyfill(
    "Array.prototype.find",
    function (_) {
      return (
        _ ||
        function (_, _) {
          return $jscomp.findInternal(this, _, _)._;
        }
      );
    },
    "es6",
    "es3",
  );
  $jscomp.polyfill(
    "String.prototype.startsWith",
    function (_) {
      return (
        _ ||
        function (_, _) {
          var _ = $jscomp.checkStringArgs(this, _, "startsWith");
          _ += "";
          var _ = _.length,
            _ = _.length;
          _ = Math.max(0, Math.min(_ | 0, _.length));
          for (var _ = 0; _ < _ && _ < _; ) if (_[_++] != _[_++]) return !1;
          return _ >= _;
        }
      );
    },
    "es6",
    "es3",
  );
  $jscomp.polyfill(
    "String.prototype.repeat",
    function (_) {
      return (
        _ ||
        function (_) {
          var _ = $jscomp.checkStringArgs(this, null, "repeat");
          if (0 > _ || 1342177279 < _)
            throw new RangeError("Invalid count value");
          _ |= 0;
          for (var _ = ""; _; ) _ & 1 && (_ += _), (_ >>>= 1) && (_ += _);
          return _;
        }
      );
    },
    "es6",
    "es3",
  );
  var COMPILED = !0,
    goog = goog || {};
  goog.global = exports || self;
  goog.exportPath_ = function (_, _, _) {
    (_ = _.split(".")),
      (_ = _ || goog.global),
      _[0] in _ || typeof _.execScript > "u" || _.execScript("var " + _[0]);
    for (var _; _.length && (_ = _.shift()); )
      _.length || _ === void 0
        ? (_ = _[_] && _[_] !== Object.prototype[_] ? _[_] : (_[_] = {}))
        : (_[_] = _);
  };
  goog.define = function (_, _) {
    if (!COMPILED) {
      var _ = goog.global.CLOSURE_UNCOMPILED_DEFINES,
        _ = goog.global.CLOSURE_DEFINES;
      _ && _.nodeType === void 0 && Object.prototype.hasOwnProperty.call(_, _)
        ? (_ = _[_])
        : _ &&
          _.nodeType === void 0 &&
          Object.prototype.hasOwnProperty.call(_, _) &&
          (_ = _[_]);
    }
    return _;
  };
  goog.FEATURESET_YEAR = 2012;
  goog.DEBUG = !0;
  goog.LOCALE = "en";
  goog.TRUSTED_SITE = !0;
  goog.STRICT_MODE_COMPATIBLE = !1;
  goog.DISALLOW_TEST_ONLY_CODE = COMPILED && !goog.DEBUG;
  goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING = !1;
  goog.provide = function (_) {
    if (goog.isInModuleLoader_())
      throw Error("goog.provide cannot be used within a module.");
    if (!COMPILED && goog.isProvided_(_))
      throw Error('Namespace "' + _ + '" already declared.');
    goog.constructNamespace_(_);
  };
  goog.constructNamespace_ = function (_, _) {
    if (!COMPILED) {
      delete goog.implicitNamespaces_[_];
      for (
        var _ = _;
        (_ = _.substring(0, _.lastIndexOf("."))) && !goog.getObjectByName(_);
      )
        goog.implicitNamespaces_[_] = !0;
    }
    goog.exportPath_(_, _);
  };
  goog.getScriptNonce = function (_) {
    return _ && _ != goog.global
      ? goog.getScriptNonce_(_.document)
      : (goog.cspNonce_ === null &&
          (goog.cspNonce_ = goog.getScriptNonce_(goog.global.document)),
        goog.cspNonce_);
  };
  goog.NONCE_PATTERN_ = /^[\w+/_-]+[=]{0,2}$/;
  goog.cspNonce_ = null;
  goog.getScriptNonce_ = function (_) {
    return (_ = _.querySelector && _.querySelector("script[nonce]")) &&
      (_ = _.nonce || _.getAttribute("nonce")) &&
      goog.NONCE_PATTERN_.test(_)
      ? _
      : "";
  };
  goog.VALID_MODULE_RE_ = /^[a-zA-Z_$][a-zA-Z0-9._$]*$/;
  goog.module = function (_) {
    if (typeof _ != "string" || !_ || _.search(goog.VALID_MODULE_RE_) == -1)
      throw Error("Invalid module identifier");
    if (!goog.isInGoogModuleLoader_())
      throw Error(
        "Module " +
          _ +
          " has been loaded incorrectly. Note, modules cannot be loaded as normal scripts. They require some kind of pre-processing step. You're likely trying to load a module via a script tag or as a part of a concatenated bundle without rewriting the module. For more info see: https://github.com/google/closure-library/wiki/goog.module:-an-ES6-module-like-alternative-to-goog.provide.",
      );
    if (goog.moduleLoaderState_.moduleName)
      throw Error("goog.module may only be called once per module.");
    if (((goog.moduleLoaderState_.moduleName = _), !COMPILED)) {
      if (goog.isProvided_(_))
        throw Error('Namespace "' + _ + '" already declared.');
      delete goog.implicitNamespaces_[_];
    }
  };
  goog.module.get = function (_) {
    return goog.module.getInternal_(_);
  };
  goog.module.getInternal_ = function (_) {
    if (!COMPILED) {
      if (_ in goog.loadedModules_) return goog.loadedModules_[_].exports;
      if (!goog.implicitNamespaces_[_])
        return (_ = goog.getObjectByName(_)), _ ?? null;
    }
    return null;
  };
  goog.ModuleType = {
    ES6: "es6",
    GOOG: "goog",
  };
  goog.moduleLoaderState_ = null;
  goog.isInModuleLoader_ = function () {
    return goog.isInGoogModuleLoader_() || goog.isInEs6ModuleLoader_();
  };
  goog.isInGoogModuleLoader_ = function () {
    return (
      !!goog.moduleLoaderState_ &&
      goog.moduleLoaderState_.type == goog.ModuleType.GOOG
    );
  };
  goog.isInEs6ModuleLoader_ = function () {
    if (
      goog.moduleLoaderState_ &&
      goog.moduleLoaderState_.type == goog.ModuleType.ES6
    )
      return !0;
    var _ = goog.global.$jscomp;
    return _
      ? typeof _.getCurrentModulePath != "function"
        ? !1
        : !!_.getCurrentModulePath()
      : !1;
  };
  goog.module.declareLegacyNamespace = function () {
    if (!COMPILED && !goog.isInGoogModuleLoader_())
      throw Error(
        "goog.module.declareLegacyNamespace must be called from within a goog.module",
      );
    if (!COMPILED && !goog.moduleLoaderState_.moduleName)
      throw Error(
        "goog.module must be called prior to goog.module.declareLegacyNamespace.",
      );
    goog.moduleLoaderState_.declareLegacyNamespace = !0;
  };
  goog.declareModuleId = function (_) {
    if (!COMPILED) {
      if (!goog.isInEs6ModuleLoader_())
        throw Error(
          "goog.declareModuleId may only be called from within an ES6 module",
        );
      if (goog.moduleLoaderState_ && goog.moduleLoaderState_.moduleName)
        throw Error("goog.declareModuleId may only be called once per module.");
      if (_ in goog.loadedModules_)
        throw Error('Module with namespace "' + _ + '" already exists.');
    }
    if (goog.moduleLoaderState_) goog.moduleLoaderState_.moduleName = _;
    else {
      var _ = goog.global.$jscomp;
      if (!_ || typeof _.getCurrentModulePath != "function")
        throw Error(
          'Module with namespace "' + _ + '" has been loaded incorrectly.',
        );
      (_ = _.require(_.getCurrentModulePath())),
        (goog.loadedModules_[_] = {
          exports: _,
          type: goog.ModuleType.ES6,
          moduleId: _,
        });
    }
  };
  goog.setTestOnly = function (_) {
    if (goog.DISALLOW_TEST_ONLY_CODE)
      throw (
        ((_ = _ || ""),
        Error(
          "Importing test-only code into non-debug environment" +
            (_ ? ": " + _ : "."),
        ))
      );
  };
  goog.forwardDeclare = function (_) {};
  COMPILED ||
    ((goog.isProvided_ = function (_) {
      return (
        _ in goog.loadedModules_ ||
        (!goog.implicitNamespaces_[_] && goog.getObjectByName(_) != null)
      );
    }),
    (goog.implicitNamespaces_ = {
      "goog.module": !0,
    }));
  goog.getObjectByName = function (_, _) {
    (_ = _.split(".")), (_ = _ || goog.global);
    for (var _ = 0; _ < _.length; _++)
      if (((_ = _[_[_]]), _ == null)) return null;
    return _;
  };
  goog.globalize = function (_, _) {
    _ = _ || goog.global;
    for (var _ in _) _[_] = _[_];
  };
  goog.addDependency = function (_, _, _, _) {
    !COMPILED &&
      goog.DEPENDENCIES_ENABLED &&
      goog.debugLoader_.addDependency(_, _, _, _);
  };
  goog.ENABLE_DEBUG_LOADER = !0;
  goog.logToConsole_ = function (_) {
    goog.global.console && goog.global.console.error(_);
  };
  goog.require = function (_) {
    if (!COMPILED) {
      if (
        (goog.ENABLE_DEBUG_LOADER && goog.debugLoader_.requested(_),
        goog.isProvided_(_))
      ) {
        if (goog.isInModuleLoader_()) return goog.module.getInternal_(_);
      } else if (goog.ENABLE_DEBUG_LOADER) {
        var _ = goog.moduleLoaderState_;
        goog.moduleLoaderState_ = null;
        try {
          goog.debugLoader_.load_(_);
        } finally {
          goog.moduleLoaderState_ = _;
        }
      }
      return null;
    }
  };
  goog.requireType = function (_) {
    return {};
  };
  goog.basePath = "";
  goog.nullFunction = function () {};
  goog.abstractMethod = function () {
    throw Error("unimplemented abstract method");
  };
  goog.addSingletonGetter = function (_) {
    (_.instance_ = void 0),
      (_.getInstance = function () {
        return _.instance_
          ? _.instance_
          : (goog.DEBUG &&
              (goog.instantiatedSingletons_[
                goog.instantiatedSingletons_.length
              ] = _),
            (_.instance_ = new _()));
      });
  };
  goog.instantiatedSingletons_ = [];
  goog.LOAD_MODULE_USING_EVAL = !0;
  goog.SEAL_MODULE_EXPORTS = goog.DEBUG;
  goog.loadedModules_ = {};
  goog.DEPENDENCIES_ENABLED = !COMPILED && goog.ENABLE_DEBUG_LOADER;
  goog.TRANSPILE = "detect";
  goog.ASSUME_ES_MODULES_TRANSPILED = !1;
  goog.TRANSPILE_TO_LANGUAGE = "";
  goog.TRANSPILER = "transpile.js";
  goog.hasBadLetScoping = null;
  goog.useSafari10Workaround = function () {
    if (goog.hasBadLetScoping == null) {
      try {
        var _ = !eval(
          '"use strict";let x = 1; function f() { return typeof x; };f() == "number";',
        );
      } catch (_) {
        _ = !1;
      }
      goog.hasBadLetScoping = _;
    }
    return goog.hasBadLetScoping;
  };
  goog.workaroundSafari10EvalBug = function (_) {
    return (
      "(function(){" +
      _ +
      `
;})();
`
    );
  };
  goog.loadModule = function (_) {
    var _ = goog.moduleLoaderState_;
    try {
      if (
        ((goog.moduleLoaderState_ = {
          moduleName: "",
          declareLegacyNamespace: !1,
          type: goog.ModuleType.GOOG,
        }),
        goog.isFunction(_))
      )
        var _ = _.call(void 0, {});
      else if (typeof _ == "string")
        goog.useSafari10Workaround() && (_ = goog.workaroundSafari10EvalBug(_)),
          (_ = goog.loadModuleFromSource_.call(void 0, _));
      else throw Error("Invalid module definition");
      var _ = goog.moduleLoaderState_.moduleName;
      if (typeof _ == "string" && _)
        goog.moduleLoaderState_.declareLegacyNamespace
          ? goog.constructNamespace_(_, _)
          : goog.SEAL_MODULE_EXPORTS &&
            Object.seal &&
            typeof _ == "object" &&
            _ != null &&
            Object.seal(_),
          (goog.loadedModules_[_] = {
            exports: _,
            type: goog.ModuleType.GOOG,
            moduleId: goog.moduleLoaderState_.moduleName,
          });
      else throw Error('Invalid module name "' + _ + '"');
    } finally {
      goog.moduleLoaderState_ = _;
    }
  };
  goog.loadModuleFromSource_ = function (_) {
    return eval(_), {};
  };
  goog.normalizePath_ = function (_) {
    _ = _.split("/");
    for (var _ = 0; _ < _.length; )
      _[_] == "."
        ? _.splice(_, 1)
        : _ && _[_] == ".." && _[_ - 1] && _[_ - 1] != ".."
          ? _.splice(--_, 2)
          : _++;
    return _.join("/");
  };
  goog.loadFileSync_ = function (_) {
    if (goog.global.CLOSURE_LOAD_FILE_SYNC)
      return goog.global.CLOSURE_LOAD_FILE_SYNC(_);
    try {
      var _ = new goog.global.XMLHttpRequest();
      return (
        _.open("get", _, !1),
        _.send(),
        _.status == 0 || _.status == 200 ? _.responseText : null
      );
    } catch {
      return null;
    }
  };
  goog.transpile_ = function (_, _, _) {
    var _ = goog.global.$jscomp;
    _ || (goog.global.$jscomp = _ = {});
    var _ = _.transpile;
    if (!_) {
      var _ = goog.basePath + goog.TRANSPILER,
        _ = goog.loadFileSync_(_);
      if (_) {
        if (
          (function () {
            (0, eval)(
              _ +
                `
//# sourceURL=` +
                _,
            );
          }.call(goog.global),
          goog.global.$gwtExport &&
            goog.global.$gwtExport.$jscomp &&
            !goog.global.$gwtExport.$jscomp.transpile)
        )
          throw Error(
            'The transpiler did not properly export the "transpile" method. $gwtExport: ' +
              JSON.stringify(goog.global.$gwtExport),
          );
        (goog.global.$jscomp.transpile =
          goog.global.$gwtExport.$jscomp.transpile),
          (_ = goog.global.$jscomp),
          (_ = _.transpile);
      }
    }
    return (
      _ ||
        (_ = _.transpile =
          function (_, _) {
            return (
              goog.logToConsole_(
                _ + " requires transpilation but no transpiler was found.",
              ),
              _
            );
          }),
      _(_, _, _)
    );
  };
  goog.typeOf = function (_) {
    var _ = typeof _;
    if (_ == "object")
      if (_) {
        if (_ instanceof Array) return "array";
        if (_ instanceof Object) return _;
        var _ = Object.prototype.toString.call(_);
        if (_ == "[object Window]") return "object";
        if (
          _ == "[object Array]" ||
          (typeof _.length == "number" &&
            typeof _.splice < "u" &&
            typeof _.propertyIsEnumerable < "u" &&
            !_.propertyIsEnumerable("splice"))
        )
          return "array";
        if (
          _ == "[object Function]" ||
          (typeof _.call < "u" &&
            typeof _.propertyIsEnumerable < "u" &&
            !_.propertyIsEnumerable("call"))
        )
          return "function";
      } else return "null";
    else if (_ == "function" && typeof _.call > "u") return "object";
    return _;
  };
  goog.isArray = function (_) {
    return goog.typeOf(_) == "array";
  };
  goog.isArrayLike = function (_) {
    var _ = goog.typeOf(_);
    return _ == "array" || (_ == "object" && typeof _.length == "number");
  };
  goog.isDateLike = function (_) {
    return goog.isObject(_) && typeof _.getFullYear == "function";
  };
  goog.isFunction = function (_) {
    return goog.typeOf(_) == "function";
  };
  goog.isObject = function (_) {
    var _ = typeof _;
    return (_ == "object" && _ != null) || _ == "function";
  };
  goog.getUid = function (_) {
    return (
      (Object.prototype.hasOwnProperty.call(_, goog.UID_PROPERTY_) &&
        _[goog.UID_PROPERTY_]) ||
      (_[goog.UID_PROPERTY_] = ++goog.uidCounter_)
    );
  };
  goog.hasUid = function (_) {
    return !!_[goog.UID_PROPERTY_];
  };
  goog.removeUid = function (_) {
    _ !== null &&
      "removeAttribute" in _ &&
      _.removeAttribute(goog.UID_PROPERTY_);
    try {
      delete _[goog.UID_PROPERTY_];
    } catch {}
  };
  goog.UID_PROPERTY_ = "closure_uid_" + ((1e9 * Math.random()) >>> 0);
  goog.uidCounter_ = 0;
  goog.getHashCode = goog.getUid;
  goog.removeHashCode = goog.removeUid;
  goog.cloneObject = function (_) {
    var _ = goog.typeOf(_);
    if (_ == "object" || _ == "array") {
      if (typeof _.clone == "function") return _.clone();
      _ = _ == "array" ? [] : {};
      for (var _ in _) _[_] = goog.cloneObject(_[_]);
      return _;
    }
    return _;
  };
  goog.bindNative_ = function (_, _, _) {
    return _.call.apply(_.bind, arguments);
  };
  goog.bindJs_ = function (_, _, _) {
    if (!_) throw Error();
    if (2 < arguments.length) {
      var _ = Array.prototype.slice.call(arguments, 2);
      return function () {
        var _ = Array.prototype.slice.call(arguments);
        return Array.prototype.unshift.apply(_, _), _.apply(_, _);
      };
    }
    return function () {
      return _.apply(_, arguments);
    };
  };
  goog.bind = function (_, _, _) {
    return (
      Function.prototype.bind &&
      Function.prototype.bind.toString().indexOf("native code") != -1
        ? (goog.bind = goog.bindNative_)
        : (goog.bind = goog.bindJs_),
      goog.bind.apply(null, arguments)
    );
  };
  goog.partial = function (_, _) {
    var _ = Array.prototype.slice.call(arguments, 1);
    return function () {
      var _ = _.slice();
      return _.push.apply(_, arguments), _.apply(this, _);
    };
  };
  goog.mixin = function (_, _) {
    for (var _ in _) _[_] = _[_];
  };
  goog.now =
    (goog.TRUSTED_SITE && Date.now) ||
    function () {
      return +new Date();
    };
  goog.globalEval = function (_) {
    if (goog.global.execScript) goog.global.execScript(_, "JavaScript");
    else if (goog.global.eval) {
      if (goog.evalWorksForGlobals_ == null) {
        try {
          goog.global.eval("var _evalTest_ = 1;");
        } catch {}
        if (typeof goog.global._evalTest_ < "u") {
          try {
            delete goog.global._evalTest_;
          } catch {}
          goog.evalWorksForGlobals_ = !0;
        } else goog.evalWorksForGlobals_ = !1;
      }
      if (goog.evalWorksForGlobals_) goog.global.eval(_);
      else {
        var _ = goog.global.document,
          _ = _.createElement("script");
        (_.type = "text/javascript"),
          (_.defer = !1),
          _.appendChild(_.createTextNode(_)),
          _.head.appendChild(_),
          _.head.removeChild(_);
      }
    } else throw Error("goog.globalEval not available");
  };
  goog.evalWorksForGlobals_ = null;
  goog.getCssName = function (_, _) {
    if (String(_).charAt(0) == ".")
      throw Error(
        'className passed in goog.getCssName must not start with ".". You passed: ' +
          _,
      );
    var _ = function (_) {
        return goog.cssNameMapping_[_] || _;
      },
      _ = function (_) {
        _ = _.split("-");
        for (var _ = [], _ = 0; _ < _.length; _++) _.push(_(_[_]));
        return _.join("-");
      };
    return (
      (_ = goog.cssNameMapping_
        ? goog.cssNameMappingStyle_ == "BY_WHOLE"
          ? _
          : _
        : function (_) {
            return _;
          }),
      (_ = _ ? _ + "-" + _(_) : _(_)),
      goog.global.CLOSURE_CSS_NAME_MAP_FN
        ? goog.global.CLOSURE_CSS_NAME_MAP_FN(_)
        : _
    );
  };
  goog.setCssNameMapping = function (_, _) {
    (goog.cssNameMapping_ = _), (goog.cssNameMappingStyle_ = _);
  };
  !COMPILED &&
    goog.global.CLOSURE_CSS_NAME_MAPPING &&
    (goog.cssNameMapping_ = goog.global.CLOSURE_CSS_NAME_MAPPING);
  goog.getMsg = function (_, _, _) {
    return (
      _ && _.html && (_ = _.replace(/</g, "&lt;")),
      _ &&
        (_ = _.replace(/\{\$([^}]+)}/g, function (_, _) {
          return _ != null && _ in _ ? _[_] : _;
        })),
      _
    );
  };
  goog.getMsgWithFallback = function (_, _) {
    return _;
  };
  goog.exportSymbol = function (_, _, _) {
    goog.exportPath_(_, _, _);
  };
  goog.exportProperty = function (_, _, _) {
    _[_] = _;
  };
  goog.inherits = function (_, _) {
    function _() {}
    (_.prototype = _.prototype),
      (_.superClass_ = _.prototype),
      (_.prototype = new _()),
      (_.prototype.constructor = _),
      (_.base = function (_, _, _) {
        for (
          var _ = Array(arguments.length - 2), _ = 2;
          _ < arguments.length;
          _++
        )
          _[_ - 2] = arguments[_];
        return _.prototype[_].apply(_, _);
      });
  };
  goog.scope = function (_) {
    if (goog.isInModuleLoader_())
      throw Error("goog.scope is not supported within a module.");
    _.call(goog.global);
  };
  COMPILED || (goog.global.COMPILED = COMPILED);
  goog.defineClass = function (_, _) {
    var _ = _.constructor,
      _ = _.statics;
    return (
      (_ && _ != Object.prototype.constructor) ||
        (_ = function () {
          throw Error(
            "cannot instantiate an interface (no constructor defined).",
          );
        }),
      (_ = goog.defineClass.createSealingConstructor_(_, _)),
      _ && goog.inherits(_, _),
      delete _.constructor,
      delete _.statics,
      goog.defineClass.applyProperties_(_.prototype, _),
      _ != null &&
        (_ instanceof Function
          ? _(_)
          : goog.defineClass.applyProperties_(_, _)),
      _
    );
  };
  goog.defineClass.SEAL_CLASS_INSTANCES = goog.DEBUG;
  goog.defineClass.createSealingConstructor_ = function (_, _) {
    if (!goog.defineClass.SEAL_CLASS_INSTANCES) return _;
    var _ = !goog.defineClass.isUnsealable_(_),
      _ = function () {
        var _ = _.apply(this, arguments) || this;
        return (
          (_[goog.UID_PROPERTY_] = _[goog.UID_PROPERTY_]),
          this.constructor === _ &&
            _ &&
            Object.seal instanceof Function &&
            Object.seal(_),
          _
        );
      };
    return _;
  };
  goog.defineClass.isUnsealable_ = function (_) {
    return (
      _ && _.prototype && _.prototype[goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_]
    );
  };
  goog.defineClass.OBJECT_PROTOTYPE_FIELDS_ =
    "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(
      " ",
    );
  goog.defineClass.applyProperties_ = function (_, _) {
    for (var _ in _)
      Object.prototype.hasOwnProperty.call(_, _) && (_[_] = _[_]);
    for (var _ = 0; _ < goog.defineClass.OBJECT_PROTOTYPE_FIELDS_.length; _++)
      (_ = goog.defineClass.OBJECT_PROTOTYPE_FIELDS_[_]),
        Object.prototype.hasOwnProperty.call(_, _) && (_[_] = _[_]);
  };
  goog.tagUnsealableClass = function (_) {
    !COMPILED &&
      goog.defineClass.SEAL_CLASS_INSTANCES &&
      (_.prototype[goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_] = !0);
  };
  goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_ = "goog_defineClass_legacy_unsealable";
  !COMPILED &&
    goog.DEPENDENCIES_ENABLED &&
    ((goog.inHtmlDocument_ = function () {
      var _ = goog.global.document;
      return _ != null && "write" in _;
    }),
    (goog.isDocumentLoading_ = function () {
      var _ = goog.global.document;
      return _.attachEvent
        ? _.readyState != "complete"
        : _.readyState == "loading";
    }),
    (goog.findBasePath_ = function () {
      if (
        goog.global.CLOSURE_BASE_PATH != null &&
        typeof goog.global.CLOSURE_BASE_PATH == "string"
      )
        goog.basePath = goog.global.CLOSURE_BASE_PATH;
      else if (goog.inHtmlDocument_()) {
        var _ = goog.global.document,
          _ = _.currentScript;
        for (
          _ = _ ? [_] : _.getElementsByTagName("SCRIPT"), _ = _.length - 1;
          0 <= _;
          --_
        ) {
          var _ = _[_].src,
            _ = _.lastIndexOf("?");
          if (((_ = _ == -1 ? _.length : _), _.substr(_ - 7, 7) == "base.js")) {
            goog.basePath = _.substr(0, _ - 7);
            break;
          }
        }
      }
    }),
    goog.findBasePath_(),
    (goog.Transpiler = function () {
      (this.requiresTranspilation_ = null),
        (this.transpilationTarget_ = goog.TRANSPILE_TO_LANGUAGE);
    }),
    (goog.Transpiler.prototype.createRequiresTranspilation_ = function () {
      function _(_, _) {
        _ ? (_[_] = !0) : _() ? ((_ = _), (_[_] = !1)) : (_ = _[_] = !0);
      }
      function _(_) {
        try {
          return !!eval(_);
        } catch (_) {
          return !1;
        }
      }
      var _ = "es3",
        _ = {
          es3: !1,
        },
        _ = !1,
        _ =
          goog.global.navigator && goog.global.navigator.userAgent
            ? goog.global.navigator.userAgent
            : "";
      return (
        _("es5", function () {
          return _("[1,].length==1");
        }),
        _("es6", function () {
          return _.match(/Edge\/(\d+)(\.\d)*/i)
            ? !1
            : _(
                '(()=>{"use strict";class X{constructor(){if(new.target!=String)throw 1;this.x=42}}let q=Reflect.construct(X,[],String);if(q.x!=42||!(q instanceof String))throw 1;for(const a of[2,3]){if(a==2)continue;function f(z={a}){let a=0;return z.a}{function f(){return 0;}}return f()==3}})()',
              );
        }),
        _("es7", function () {
          return _("2 ** 2 == 4");
        }),
        _("es8", function () {
          return _("async () => 1, true");
        }),
        _("es9", function () {
          return _("({...rest} = {}), true");
        }),
        _("es_next", function () {
          return !1;
        }),
        {
          target: _,
          map: _,
        }
      );
    }),
    (goog.Transpiler.prototype.needsTranspile = function (_, _) {
      if (goog.TRANSPILE == "always") return !0;
      if (goog.TRANSPILE == "never") return !1;
      if (!this.requiresTranspilation_) {
        var _ = this.createRequiresTranspilation_();
        (this.requiresTranspilation_ = _.map),
          (this.transpilationTarget_ = this.transpilationTarget_ || _.target);
      }
      if (_ in this.requiresTranspilation_)
        return this.requiresTranspilation_[_]
          ? !0
          : !(
              !goog.inHtmlDocument_() ||
              _ != "es6" ||
              "noModule" in goog.global.document.createElement("script")
            );
      throw Error("Unknown language mode: " + _);
    }),
    (goog.Transpiler.prototype.transpile = function (_, _) {
      return goog.transpile_(_, _, this.transpilationTarget_);
    }),
    (goog.transpiler_ = new goog.Transpiler()),
    (goog.protectScriptTag_ = function (_) {
      return _.replace(/<\/(SCRIPT)/gi, "\\x3c/$1");
    }),
    (goog.DebugLoader_ = function () {
      (this.dependencies_ = {}),
        (this.idToPath_ = {}),
        (this.written_ = {}),
        (this.loadingDeps_ = []),
        (this.depsToLoad_ = []),
        (this.paused_ = !1),
        (this.factory_ = new goog.DependencyFactory(goog.transpiler_)),
        (this.deferredCallbacks_ = {}),
        (this.deferredQueue_ = []);
    }),
    (goog.DebugLoader_.prototype.bootstrap = function (_, _) {
      function _() {
        _ && (goog.global.setTimeout(_, 0), (_ = null));
      }
      var _ = _;
      if (_.length) {
        _ = [];
        for (var _ = 0; _ < _.length; _++) {
          var _ = this.getPathFromDeps_(_[_]);
          if (!_) throw Error("Unregonized namespace: " + _[_]);
          _.push(this.dependencies_[_]);
        }
        _ = goog.require;
        var _ = 0;
        for (_ = 0; _ < _.length; _++)
          _(_[_]),
            _[_].onLoad(function () {
              ++_ == _.length && _();
            });
      } else _();
    }),
    (goog.DebugLoader_.prototype.loadClosureDeps = function () {
      this.depsToLoad_.push(
        this.factory_.createDependency(
          goog.normalizePath_(goog.basePath + "deps.js"),
          "deps.js",
          [],
          [],
          {},
          !1,
        ),
      ),
        this.loadDeps_();
    }),
    (goog.DebugLoader_.prototype.requested = function (_, _) {
      (_ = this.getPathFromDeps_(_)) &&
        (_ || this.areDepsLoaded_(this.dependencies_[_].requires)) &&
        (_ = this.deferredCallbacks_[_]) &&
        (delete this.deferredCallbacks_[_], _());
    }),
    (goog.DebugLoader_.prototype.setDependencyFactory = function (_) {
      this.factory_ = _;
    }),
    (goog.DebugLoader_.prototype.load_ = function (_) {
      if (this.getPathFromDeps_(_)) {
        var _ = this,
          _ = [],
          _ = function (_) {
            var _ = _.getPathFromDeps_(_);
            if (!_) throw Error("Bad dependency path or symbol: " + _);
            if (!_.written_[_]) {
              for (
                _.written_[_] = !0, _ = _.dependencies_[_], _ = 0;
                _ < _.requires.length;
                _++
              )
                goog.isProvided_(_.requires[_]) || _(_.requires[_]);
              _.push(_);
            }
          };
        _(_),
          (_ = !!this.depsToLoad_.length),
          (this.depsToLoad_ = this.depsToLoad_.concat(_)),
          this.paused_ || _ || this.loadDeps_();
      } else
        throw (
          ((_ = "goog.require could not find: " + _),
          goog.logToConsole_(_),
          Error(_))
        );
    }),
    (goog.DebugLoader_.prototype.loadDeps_ = function () {
      for (var _ = this, _ = this.paused_; this.depsToLoad_.length && !_; )
        (function () {
          var _ = !1,
            _ = _.depsToLoad_.shift(),
            _ = !1;
          _.loading_(_);
          var _ = {
            pause: function () {
              if (_) throw Error("Cannot call pause after the call to load.");
              _ = !0;
            },
            resume: function () {
              _ ? _.resume_() : (_ = !1);
            },
            loaded: function () {
              if (_) throw Error("Double call to loaded.");
              (_ = !0), _.loaded_(_);
            },
            pending: function () {
              for (var _ = [], _ = 0; _ < _.loadingDeps_.length; _++)
                _.push(_.loadingDeps_[_]);
              return _;
            },
            setModuleState: function (_) {
              goog.moduleLoaderState_ = {
                type: _,
                moduleName: "",
                declareLegacyNamespace: !1,
              };
            },
            registerEs6ModuleExports: function (_, _, _) {
              _ &&
                (goog.loadedModules_[_] = {
                  exports: _,
                  type: goog.ModuleType.ES6,
                  moduleId: _ || "",
                });
            },
            registerGoogModuleExports: function (_, _) {
              goog.loadedModules_[_] = {
                exports: _,
                type: goog.ModuleType.GOOG,
                moduleId: _,
              };
            },
            clearModuleState: function () {
              goog.moduleLoaderState_ = null;
            },
            defer: function (_) {
              if (_)
                throw Error(
                  "Cannot register with defer after the call to load.",
                );
              _.defer_(_, _);
            },
            areDepsLoaded: function () {
              return _.areDepsLoaded_(_.requires);
            },
          };
          try {
            _.load(_);
          } finally {
            _ = !0;
          }
        })();
      _ && this.pause_();
    }),
    (goog.DebugLoader_.prototype.pause_ = function () {
      this.paused_ = !0;
    }),
    (goog.DebugLoader_.prototype.resume_ = function () {
      this.paused_ && ((this.paused_ = !1), this.loadDeps_());
    }),
    (goog.DebugLoader_.prototype.loading_ = function (_) {
      this.loadingDeps_.push(_);
    }),
    (goog.DebugLoader_.prototype.loaded_ = function (_) {
      for (var _ = 0; _ < this.loadingDeps_.length; _++)
        if (this.loadingDeps_[_] == _) {
          this.loadingDeps_.splice(_, 1);
          break;
        }
      for (_ = 0; _ < this.deferredQueue_.length; _++)
        if (this.deferredQueue_[_] == _.path) {
          this.deferredQueue_.splice(_, 1);
          break;
        }
      if (
        this.loadingDeps_.length == this.deferredQueue_.length &&
        !this.depsToLoad_.length
      )
        for (; this.deferredQueue_.length; )
          this.requested(this.deferredQueue_.shift(), !0);
      _.loaded();
    }),
    (goog.DebugLoader_.prototype.areDepsLoaded_ = function (_) {
      for (var _ = 0; _ < _.length; _++) {
        var _ = this.getPathFromDeps_(_[_]);
        if (!_ || !(_ in this.deferredCallbacks_ || goog.isProvided_(_[_])))
          return !1;
      }
      return !0;
    }),
    (goog.DebugLoader_.prototype.getPathFromDeps_ = function (_) {
      return _ in this.idToPath_
        ? this.idToPath_[_]
        : _ in this.dependencies_
          ? _
          : null;
    }),
    (goog.DebugLoader_.prototype.defer_ = function (_, _) {
      (this.deferredCallbacks_[_.path] = _), this.deferredQueue_.push(_.path);
    }),
    (goog.LoadController = function () {}),
    (goog.LoadController.prototype.pause = function () {}),
    (goog.LoadController.prototype.resume = function () {}),
    (goog.LoadController.prototype.loaded = function () {}),
    (goog.LoadController.prototype.pending = function () {}),
    (goog.LoadController.prototype.registerEs6ModuleExports = function (
      _,
      _,
      _,
    ) {}),
    (goog.LoadController.prototype.setModuleState = function (_) {}),
    (goog.LoadController.prototype.clearModuleState = function () {}),
    (goog.LoadController.prototype.defer = function (_) {}),
    (goog.LoadController.prototype.areDepsLoaded = function () {}),
    (goog.Dependency = function (_, _, _, _, _) {
      (this.path = _),
        (this.relativePath = _),
        (this.provides = _),
        (this.requires = _),
        (this.loadFlags = _),
        (this.loaded_ = !1),
        (this.loadCallbacks_ = []);
    }),
    (goog.Dependency.prototype.getPathName = function () {
      var _ = this.path,
        _ = _.indexOf("://");
      return (
        0 <= _ &&
          ((_ = _.substring(_ + 3)),
          (_ = _.indexOf("/")),
          0 <= _ && (_ = _.substring(_ + 1))),
        _
      );
    }),
    (goog.Dependency.prototype.onLoad = function (_) {
      this.loaded_ ? _() : this.loadCallbacks_.push(_);
    }),
    (goog.Dependency.prototype.loaded = function () {
      this.loaded_ = !0;
      var _ = this.loadCallbacks_;
      this.loadCallbacks_ = [];
      for (var _ = 0; _ < _.length; _++) _[_]();
    }),
    (goog.Dependency.defer_ = !1),
    (goog.Dependency.callbackMap_ = {}),
    (goog.Dependency.registerCallback_ = function (_) {
      var _ = Math.random().toString(32);
      return (goog.Dependency.callbackMap_[_] = _), _;
    }),
    (goog.Dependency.unregisterCallback_ = function (_) {
      delete goog.Dependency.callbackMap_[_];
    }),
    (goog.Dependency.callback_ = function (_, _) {
      if (_ in goog.Dependency.callbackMap_) {
        for (
          var _ = goog.Dependency.callbackMap_[_], _ = [], _ = 1;
          _ < arguments.length;
          _++
        )
          _.push(arguments[_]);
        _.apply(void 0, _);
      } else
        throw Error(
          "Callback key " +
            _ +
            " does not exist (was base.js loaded more than once?).",
        );
    }),
    (goog.Dependency.prototype.load = function (_) {
      if (goog.global.CLOSURE_IMPORT_SCRIPT)
        goog.global.CLOSURE_IMPORT_SCRIPT(this.path) ? _.loaded() : _.pause();
      else if (goog.inHtmlDocument_()) {
        var _ = goog.global.document;
        if (
          _.readyState == "complete" &&
          !goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING
        ) {
          if (/\bdeps.js$/.test(this.path)) {
            _.loaded();
            return;
          }
          throw Error('Cannot write "' + this.path + '" after document load');
        }
        if (
          !goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING &&
          goog.isDocumentLoading_()
        ) {
          var _ = goog.Dependency.registerCallback_(function (_) {
              (goog.DebugLoader_.IS_OLD_IE_ && _.readyState != "complete") ||
                (goog.Dependency.unregisterCallback_(_), _.loaded());
            }),
            _ =
              !goog.DebugLoader_.IS_OLD_IE_ && goog.getScriptNonce()
                ? ' nonce="' + goog.getScriptNonce() + '"'
                : "";
          (_ =
            '<script src="' +
            this.path +
            '" ' +
            (goog.DebugLoader_.IS_OLD_IE_ ? "onreadystatechange" : "onload") +
            `="goog.Dependency.callback_('` +
            _ +
            `', this)" type="text/javascript" ` +
            (goog.Dependency.defer_ ? "defer" : "") +
            _ +
            "></script>"),
            _.write(
              goog.TRUSTED_TYPES_POLICY_
                ? goog.TRUSTED_TYPES_POLICY_.createHTML(_)
                : _,
            );
        } else {
          var _ = _.createElement("script");
          (_.defer = goog.Dependency.defer_),
            (_.async = !1),
            (_.type = "text/javascript"),
            (_ = goog.getScriptNonce()) && _.setAttribute("nonce", _),
            goog.DebugLoader_.IS_OLD_IE_
              ? (_.pause(),
                (_.onreadystatechange = function () {
                  (_.readyState == "loaded" || _.readyState == "complete") &&
                    (_.loaded(), _.resume());
                }))
              : (_.onload = function () {
                  (_.onload = null), _.loaded();
                }),
            (_.src = goog.TRUSTED_TYPES_POLICY_
              ? goog.TRUSTED_TYPES_POLICY_.createScriptURL(this.path)
              : this.path),
            _.head.appendChild(_);
        }
      } else
        goog.logToConsole_(
          "Cannot use default debug loader outside of HTML documents.",
        ),
          this.relativePath == "deps.js"
            ? (goog.logToConsole_(
                "Consider setting CLOSURE_IMPORT_SCRIPT before loading base.js, or setting CLOSURE_NO_DEPS to true.",
              ),
              _.loaded())
            : _.pause();
    }),
    (goog.Es6ModuleDependency = function (_, _, _, _, _) {
      goog.Dependency.call(this, _, _, _, _, _);
    }),
    goog.inherits(goog.Es6ModuleDependency, goog.Dependency),
    (goog.Es6ModuleDependency.prototype.load = function (_) {
      function _(_, _) {
        (_ = _
          ? '<script type="module" crossorigin>' + _ + "</script>"
          : '<script type="module" crossorigin src="' + _ + '"></script>'),
          _.write(
            goog.TRUSTED_TYPES_POLICY_
              ? goog.TRUSTED_TYPES_POLICY_.createHTML(_)
              : _,
          );
      }
      function _(_, _) {
        var _ = _.createElement("script");
        (_.defer = !0),
          (_.async = !1),
          (_.type = "module"),
          _.setAttribute("crossorigin", !0);
        var _ = goog.getScriptNonce();
        _ && _.setAttribute("nonce", _),
          _
            ? (_.textContent = goog.TRUSTED_TYPES_POLICY_
                ? goog.TRUSTED_TYPES_POLICY_.createScript(_)
                : _)
            : (_.src = goog.TRUSTED_TYPES_POLICY_
                ? goog.TRUSTED_TYPES_POLICY_.createScriptURL(_)
                : _),
          _.head.appendChild(_);
      }
      if (goog.global.CLOSURE_IMPORT_SCRIPT)
        goog.global.CLOSURE_IMPORT_SCRIPT(this.path) ? _.loaded() : _.pause();
      else if (goog.inHtmlDocument_()) {
        var _ = goog.global.document,
          _ = this;
        if (goog.isDocumentLoading_()) {
          var _ = _;
          goog.Dependency.defer_ = !0;
        } else _ = _;
        var _ = goog.Dependency.registerCallback_(function () {
          goog.Dependency.unregisterCallback_(_),
            _.setModuleState(goog.ModuleType.ES6);
        });
        _(void 0, 'goog.Dependency.callback_("' + _ + '")'),
          _(this.path, void 0);
        var _ = goog.Dependency.registerCallback_(function (_) {
          goog.Dependency.unregisterCallback_(_),
            _.registerEs6ModuleExports(
              _.path,
              _,
              goog.moduleLoaderState_.moduleName,
            );
        });
        _(
          void 0,
          'import * as m from "' +
            this.path +
            '"; goog.Dependency.callback_("' +
            _ +
            '", m)',
        );
        var _ = goog.Dependency.registerCallback_(function () {
          goog.Dependency.unregisterCallback_(_),
            _.clearModuleState(),
            _.loaded();
        });
        _(void 0, 'goog.Dependency.callback_("' + _ + '")');
      } else
        goog.logToConsole_(
          "Cannot use default debug loader outside of HTML documents.",
        ),
          _.pause();
    }),
    (goog.TransformedDependency = function (_, _, _, _, _) {
      goog.Dependency.call(this, _, _, _, _, _),
        (this.contents_ = null),
        (this.lazyFetch_ =
          !goog.inHtmlDocument_() ||
          !("noModule" in goog.global.document.createElement("script")));
    }),
    goog.inherits(goog.TransformedDependency, goog.Dependency),
    (goog.TransformedDependency.prototype.load = function (_) {
      function _() {
        (_.contents_ = goog.loadFileSync_(_.path)),
          _.contents_ &&
            ((_.contents_ = _.transform(_.contents_)),
            _.contents_ &&
              (_.contents_ +=
                `
//# sourceURL=` + _.path));
      }
      function _() {
        if ((_.lazyFetch_ && _(), _.contents_)) {
          _ && _.setModuleState(goog.ModuleType.ES6);
          try {
            var _ = _.contents_;
            if (((_.contents_ = null), goog.globalEval(_), _))
              var _ = goog.moduleLoaderState_.moduleName;
          } finally {
            _ && _.clearModuleState();
          }
          _ &&
            goog.global.$jscomp.require.ensure([_.getPathName()], function () {
              _.registerEs6ModuleExports(
                _.path,
                goog.global.$jscomp.require(_.getPathName()),
                _,
              );
            }),
            _.loaded();
        }
      }
      function _() {
        var _ = goog.global.document,
          _ = goog.Dependency.registerCallback_(function () {
            goog.Dependency.unregisterCallback_(_), _();
          }),
          _ =
            '<script type="text/javascript">' +
            goog.protectScriptTag_('goog.Dependency.callback_("' + _ + '");') +
            "</script>";
        _.write(
          goog.TRUSTED_TYPES_POLICY_
            ? goog.TRUSTED_TYPES_POLICY_.createHTML(_)
            : _,
        );
      }
      var _ = this;
      if (goog.global.CLOSURE_IMPORT_SCRIPT)
        _(),
          this.contents_ &&
          goog.global.CLOSURE_IMPORT_SCRIPT("", this.contents_)
            ? ((this.contents_ = null), _.loaded())
            : _.pause();
      else {
        var _ = this.loadFlags.module == goog.ModuleType.ES6;
        this.lazyFetch_ || _();
        var _ = 1 < _.pending().length,
          _ = _ && goog.DebugLoader_.IS_OLD_IE_;
        if (
          ((_ = goog.Dependency.defer_ && (_ || goog.isDocumentLoading_())),
          _ || _)
        )
          _.defer(function () {
            _();
          });
        else {
          var _ = goog.global.document;
          if (
            ((_ = goog.inHtmlDocument_() && "ActiveXObject" in goog.global),
            _ && goog.inHtmlDocument_() && goog.isDocumentLoading_() && !_)
          ) {
            (goog.Dependency.defer_ = !0), _.pause();
            var _ = _.onreadystatechange;
            _.onreadystatechange = function () {
              _.readyState == "interactive" &&
                ((_.onreadystatechange = _), _(), _.resume()),
                goog.isFunction(_) && _.apply(void 0, arguments);
            };
          } else
            !goog.DebugLoader_.IS_OLD_IE_ &&
            goog.inHtmlDocument_() &&
            goog.isDocumentLoading_()
              ? _()
              : _();
        }
      }
    }),
    (goog.TransformedDependency.prototype.transform = function (_) {}),
    (goog.TranspiledDependency = function (_, _, _, _, _, _) {
      goog.TransformedDependency.call(this, _, _, _, _, _),
        (this.transpiler = _);
    }),
    goog.inherits(goog.TranspiledDependency, goog.TransformedDependency),
    (goog.TranspiledDependency.prototype.transform = function (_) {
      return this.transpiler.transpile(_, this.getPathName());
    }),
    (goog.PreTranspiledEs6ModuleDependency = function (_, _, _, _, _) {
      goog.TransformedDependency.call(this, _, _, _, _, _);
    }),
    goog.inherits(
      goog.PreTranspiledEs6ModuleDependency,
      goog.TransformedDependency,
    ),
    (goog.PreTranspiledEs6ModuleDependency.prototype.transform = function (_) {
      return _;
    }),
    (goog.GoogModuleDependency = function (_, _, _, _, _, _, _) {
      goog.TransformedDependency.call(this, _, _, _, _, _),
        (this.needsTranspile_ = _),
        (this.transpiler_ = _);
    }),
    goog.inherits(goog.GoogModuleDependency, goog.TransformedDependency),
    (goog.GoogModuleDependency.prototype.transform = function (_) {
      return (
        this.needsTranspile_ &&
          (_ = this.transpiler_.transpile(_, this.getPathName())),
        goog.LOAD_MODULE_USING_EVAL && goog.global.JSON !== void 0
          ? "goog.loadModule(" +
            goog.global.JSON.stringify(
              _ +
                `
//# sourceURL=` +
                this.path +
                `
`,
            ) +
            ");"
          : 'goog.loadModule(function(exports) {"use strict";' +
            _ +
            `
;return exports});
//# sourceURL=` +
            this.path +
            `
`
      );
    }),
    (goog.DebugLoader_.IS_OLD_IE_ = !(
      goog.global.atob ||
      !goog.global.document ||
      !goog.global.document.all
    )),
    (goog.DebugLoader_.prototype.addDependency = function (_, _, _, _) {
      (_ = _ || []), (_ = _.replace(/\\/g, "/"));
      var _ = goog.normalizePath_(goog.basePath + _);
      for (
        (_ && typeof _ != "boolean") ||
          (_ = _
            ? {
                module: goog.ModuleType.GOOG,
              }
            : {}),
          _ = this.factory_.createDependency(
            _,
            _,
            _,
            _,
            _,
            goog.transpiler_.needsTranspile(_.lang || "es3", _.module),
          ),
          this.dependencies_[_] = _,
          _ = 0;
        _ < _.length;
        _++
      )
        this.idToPath_[_[_]] = _;
      this.idToPath_[_] = _;
    }),
    (goog.DependencyFactory = function (_) {
      this.transpiler = _;
    }),
    (goog.DependencyFactory.prototype.createDependency = function (
      _,
      _,
      _,
      _,
      _,
      _,
    ) {
      return _.module == goog.ModuleType.GOOG
        ? new goog.GoogModuleDependency(_, _, _, _, _, _, this.transpiler)
        : _
          ? new goog.TranspiledDependency(_, _, _, _, _, this.transpiler)
          : _.module == goog.ModuleType.ES6
            ? goog.TRANSPILE == "never" && goog.ASSUME_ES_MODULES_TRANSPILED
              ? new goog.PreTranspiledEs6ModuleDependency(_, _, _, _, _)
              : new goog.Es6ModuleDependency(_, _, _, _, _)
            : new goog.Dependency(_, _, _, _, _);
    }),
    (goog.debugLoader_ = new goog.DebugLoader_()),
    (goog.loadClosureDeps = function () {
      goog.debugLoader_.loadClosureDeps();
    }),
    (goog.setDependencyFactory = function (_) {
      goog.debugLoader_.setDependencyFactory(_);
    }),
    goog.global.CLOSURE_NO_DEPS || goog.debugLoader_.loadClosureDeps(),
    (goog.bootstrap = function (_, _) {
      goog.debugLoader_.bootstrap(_, _);
    }));
  goog.TRUSTED_TYPES_POLICY_NAME = "";
  goog.identity_ = function (_) {
    return _;
  };
  goog.createTrustedTypesPolicy = function (_) {
    var _ = null,
      _ = goog.global.trustedTypes || goog.global.TrustedTypes;
    if (!_ || !_.createPolicy) return _;
    try {
      _ = _.createPolicy(_, {
        createHTML: goog.identity_,
        createScript: goog.identity_,
        createScriptURL: goog.identity_,
        createURL: goog.identity_,
      });
    } catch (_) {
      goog.logToConsole_(_.message);
    }
    return _;
  };
  goog.TRUSTED_TYPES_POLICY_ = goog.TRUSTED_TYPES_POLICY_NAME
    ? goog.createTrustedTypesPolicy(goog.TRUSTED_TYPES_POLICY_NAME + "#base")
    : null;
  goog.object = {};
  goog.object._ = function (_, _) {
    return _ === _ ? _ !== 0 || 1 / _ === 1 / _ : _ !== _ && _ !== _;
  };
  goog.object.forEach = function (_, _, _) {
    for (var _ in _) _.call(_, _[_], _, _);
  };
  goog.object.filter = function (_, _, _) {
    var _ = {},
      _;
    for (_ in _) _.call(_, _[_], _, _) && (_[_] = _[_]);
    return _;
  };
  goog.object.map = function (_, _, _) {
    var _ = {},
      _;
    for (_ in _) _[_] = _.call(_, _[_], _, _);
    return _;
  };
  goog.object.some = function (_, _, _) {
    for (var _ in _) if (_.call(_, _[_], _, _)) return !0;
    return !1;
  };
  goog.object.every = function (_, _, _) {
    for (var _ in _) if (!_.call(_, _[_], _, _)) return !1;
    return !0;
  };
  goog.object.getCount = function (_) {
    var _ = 0,
      _;
    for (_ in _) _++;
    return _;
  };
  goog.object.getAnyKey = function (_) {
    for (var _ in _) return _;
  };
  goog.object.getAnyValue = function (_) {
    for (var _ in _) return _[_];
  };
  goog.object.contains = function (_, _) {
    return goog.object.containsValue(_, _);
  };
  goog.object.getValues = function (_) {
    var _ = [],
      _ = 0,
      _;
    for (_ in _) _[_++] = _[_];
    return _;
  };
  goog.object.getKeys = function (_) {
    var _ = [],
      _ = 0,
      _;
    for (_ in _) _[_++] = _;
    return _;
  };
  goog.object.getValueByKeys = function (_, _) {
    var _ = goog.isArrayLike(_),
      _ = _ ? _ : arguments;
    for (_ = _ ? 0 : 1; _ < _.length; _++) {
      if (_ == null) return;
      _ = _[_[_]];
    }
    return _;
  };
  goog.object.containsKey = function (_, _) {
    return _ !== null && _ in _;
  };
  goog.object.containsValue = function (_, _) {
    for (var _ in _) if (_[_] == _) return !0;
    return !1;
  };
  goog.object.findKey = function (_, _, _) {
    for (var _ in _) if (_.call(_, _[_], _, _)) return _;
  };
  goog.object.findValue = function (_, _, _) {
    return (_ = goog.object.findKey(_, _, _)) && _[_];
  };
  goog.object.isEmpty = function (_) {
    for (var _ in _) return !1;
    return !0;
  };
  goog.object.clear = function (_) {
    for (var _ in _) delete _[_];
  };
  goog.object.remove = function (_, _) {
    var _;
    return (_ = _ in _) && delete _[_], _;
  };
  goog.object.add = function (_, _, _) {
    if (_ !== null && _ in _)
      throw Error('The object already contains the key "' + _ + '"');
    goog.object.set(_, _, _);
  };
  goog.object.get = function (_, _, _) {
    return _ !== null && _ in _ ? _[_] : _;
  };
  goog.object.set = function (_, _, _) {
    _[_] = _;
  };
  goog.object.setIfUndefined = function (_, _, _) {
    return _ in _ ? _[_] : (_[_] = _);
  };
  goog.object.setWithReturnValueIfNotSet = function (_, _, _) {
    return _ in _ ? _[_] : ((_ = _()), (_[_] = _));
  };
  goog.object.equals = function (_, _) {
    for (var _ in _) if (!(_ in _) || _[_] !== _[_]) return !1;
    for (var _ in _) if (!(_ in _)) return !1;
    return !0;
  };
  goog.object.clone = function (_) {
    var _ = {},
      _;
    for (_ in _) _[_] = _[_];
    return _;
  };
  goog.object.unsafeClone = function (_) {
    var _ = goog.typeOf(_);
    if (_ == "object" || _ == "array") {
      if (goog.isFunction(_.clone)) return _.clone();
      _ = _ == "array" ? [] : {};
      for (var _ in _) _[_] = goog.object.unsafeClone(_[_]);
      return _;
    }
    return _;
  };
  goog.object.transpose = function (_) {
    var _ = {},
      _;
    for (_ in _) _[_[_]] = _;
    return _;
  };
  goog.object.PROTOTYPE_FIELDS_ =
    "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(
      " ",
    );
  goog.object.extend = function (_, _) {
    for (var _, _, _ = 1; _ < arguments.length; _++) {
      _ = arguments[_];
      for (_ in _) _[_] = _[_];
      for (var _ = 0; _ < goog.object.PROTOTYPE_FIELDS_.length; _++)
        (_ = goog.object.PROTOTYPE_FIELDS_[_]),
          Object.prototype.hasOwnProperty.call(_, _) && (_[_] = _[_]);
    }
  };
  goog.object.create = function (_) {
    var _ = arguments.length;
    if (_ == 1 && Array.isArray(arguments[0]))
      return goog.object.create.apply(null, arguments[0]);
    if (_ % 2) throw Error("Uneven number of arguments");
    for (var _ = {}, _ = 0; _ < _; _ += 2) _[arguments[_]] = arguments[_ + 1];
    return _;
  };
  goog.object.createSet = function (_) {
    var _ = arguments.length;
    if (_ == 1 && Array.isArray(arguments[0]))
      return goog.object.createSet.apply(null, arguments[0]);
    for (var _ = {}, _ = 0; _ < _; _++) _[arguments[_]] = !0;
    return _;
  };
  goog.object.createImmutableView = function (_) {
    var _ = _;
    return (
      Object.isFrozen &&
        !Object.isFrozen(_) &&
        ((_ = Object.create(_)), Object.freeze(_)),
      _
    );
  };
  goog.object.isImmutableView = function (_) {
    return !!Object.isFrozen && Object.isFrozen(_);
  };
  goog.object.getAllPropertyNames = function (_, _, _) {
    if (!_) return [];
    if (!Object.getOwnPropertyNames || !Object.getPrototypeOf)
      return goog.object.getKeys(_);
    for (
      var _ = {};
      _ && (_ !== Object.prototype || _) && (_ !== Function.prototype || _);
    ) {
      for (var _ = Object.getOwnPropertyNames(_), _ = 0; _ < _.length; _++)
        _[_[_]] = !0;
      _ = Object.getPrototypeOf(_);
    }
    return goog.object.getKeys(_);
  };
  goog.object.getSuperClass = function (_) {
    return (_ = Object.getPrototypeOf(_.prototype)) && _.constructor;
  };
  var jspb = {
    asserts: {},
  };
  jspb.asserts.doAssertFailure = function (_, _, _, _) {
    var _ = "Assertion failed";
    if (_) {
      _ += ": " + _;
      var _ = _;
    } else _ && ((_ += ": " + _), (_ = _));
    throw Error("" + _, _ || []);
  };
  jspb.asserts.assert = function (_, _, _) {
    for (var _ = [], _ = 2; _ < arguments.length; ++_) _[_ - 2] = arguments[_];
    return _ || jspb.asserts.doAssertFailure("", null, _, _), _;
  };
  jspb.asserts.assertString = function (_, _, _) {
    for (var _ = [], _ = 2; _ < arguments.length; ++_) _[_ - 2] = arguments[_];
    return (
      typeof _ != "string" &&
        jspb.asserts.doAssertFailure(
          "Expected string but got %s: %s.",
          [goog.typeOf(_), _],
          _,
          _,
        ),
      _
    );
  };
  jspb.asserts.assertArray = function (_, _, _) {
    for (var _ = [], _ = 2; _ < arguments.length; ++_) _[_ - 2] = arguments[_];
    return (
      Array.isArray(_) ||
        jspb.asserts.doAssertFailure(
          "Expected array but got %s: %s.",
          [goog.typeOf(_), _],
          _,
          _,
        ),
      _
    );
  };
  jspb.asserts.fail = function (_, _) {
    for (var _ = [], _ = 1; _ < arguments.length; ++_) _[_ - 1] = arguments[_];
    throw Error("Failure" + (_ ? ": " + _ : ""), _);
  };
  jspb.asserts.assertInstanceof = function (_, _, _, _) {
    for (var _ = [], _ = 3; _ < arguments.length; ++_) _[_ - 3] = arguments[_];
    return (
      _ instanceof _ ||
        jspb.asserts.doAssertFailure(
          "Expected instanceof %s but got %s.",
          [jspb.asserts.getType(_), jspb.asserts.getType(_)],
          _,
          _,
        ),
      _
    );
  };
  jspb.asserts.getType = function (_) {
    return _ instanceof Function
      ? _.displayName || _.name || "unknown type name"
      : _ instanceof Object
        ? _.constructor.displayName ||
          _.constructor.name ||
          Object.prototype.toString.call(_)
        : _ === null
          ? "null"
          : typeof _;
  };
  jspb.BinaryConstants = {};
  jspb.ConstBinaryMessage = function () {};
  jspb.BinaryMessage = function () {};
  jspb.BinaryConstants.FieldType = {
    INVALID: -1,
    DOUBLE: 1,
    FLOAT: 2,
    INT64: 3,
    UINT64: 4,
    INT32: 5,
    FIXED64: 6,
    FIXED32: 7,
    BOOL: 8,
    STRING: 9,
    GROUP: 10,
    MESSAGE: 11,
    BYTES: 12,
    UINT32: 13,
    ENUM: 14,
    SFIXED32: 15,
    SFIXED64: 16,
    SINT32: 17,
    SINT64: 18,
    FHASH64: 30,
    VHASH64: 31,
  };
  jspb.BinaryConstants.WireType = {
    INVALID: -1,
    VARINT: 0,
    FIXED64: 1,
    DELIMITED: 2,
    START_GROUP: 3,
    END_GROUP: 4,
    FIXED32: 5,
  };
  jspb.BinaryConstants.FieldTypeToWireType = function (_) {
    var _ = jspb.BinaryConstants.FieldType,
      _ = jspb.BinaryConstants.WireType;
    switch (_) {
      case _.INT32:
      case _.INT64:
      case _.UINT32:
      case _.UINT64:
      case _.SINT32:
      case _.SINT64:
      case _.BOOL:
      case _.ENUM:
      case _.VHASH64:
        return _.VARINT;
      case _.DOUBLE:
      case _.FIXED64:
      case _.SFIXED64:
      case _.FHASH64:
        return _.FIXED64;
      case _.STRING:
      case _.MESSAGE:
      case _.BYTES:
        return _.DELIMITED;
      case _.FLOAT:
      case _.FIXED32:
      case _.SFIXED32:
        return _.FIXED32;
      default:
        return _.INVALID;
    }
  };
  jspb.BinaryConstants.INVALID_FIELD_NUMBER = -1;
  jspb.BinaryConstants.FLOAT32_EPS = 1401298464324817e-60;
  jspb.BinaryConstants.FLOAT32_MIN = 11754943508222875e-54;
  jspb.BinaryConstants.FLOAT32_MAX = 34028234663852886e22;
  jspb.BinaryConstants.FLOAT64_EPS = 5e-324;
  jspb.BinaryConstants.FLOAT64_MIN = 22250738585072014e-324;
  jspb.BinaryConstants.FLOAT64_MAX = 17976931348623157e292;
  jspb.BinaryConstants.TWO_TO_20 = 1048576;
  jspb.BinaryConstants.TWO_TO_23 = 8388608;
  jspb.BinaryConstants.TWO_TO_31 = 2147483648;
  jspb.BinaryConstants.TWO_TO_32 = 4294967296;
  jspb.BinaryConstants.TWO_TO_52 = 4503599627370496;
  jspb.BinaryConstants.TWO_TO_63 = 9223372036854776e3;
  jspb.BinaryConstants.TWO_TO_64 = 18446744073709552e3;
  jspb.BinaryConstants.ZERO_HASH = "\0\0\0\0\0\0\0\0";
  goog.debug = {};
  goog.debug.Error = function (_) {
    if (Error.captureStackTrace)
      Error.captureStackTrace(this, goog.debug.Error);
    else {
      var _ = Error().stack;
      _ && (this.stack = _);
    }
    _ && (this.message = String(_)), (this.reportErrorToServer = !0);
  };
  goog.inherits(goog.debug.Error, Error);
  goog.debug.Error.prototype.name = "CustomError";
  goog.dom = {};
  goog.dom.NodeType = {
    ELEMENT: 1,
    ATTRIBUTE: 2,
    TEXT: 3,
    CDATA_SECTION: 4,
    ENTITY_REFERENCE: 5,
    ENTITY: 6,
    PROCESSING_INSTRUCTION: 7,
    COMMENT: 8,
    DOCUMENT: 9,
    DOCUMENT_TYPE: 10,
    DOCUMENT_FRAGMENT: 11,
    NOTATION: 12,
  };
  goog.asserts = {};
  goog.asserts.ENABLE_ASSERTS = goog.DEBUG;
  goog.asserts.AssertionError = function (_, _) {
    goog.debug.Error.call(this, goog.asserts.subs_(_, _)),
      (this.messagePattern = _);
  };
  goog.inherits(goog.asserts.AssertionError, goog.debug.Error);
  goog.asserts.AssertionError.prototype.name = "AssertionError";
  goog.asserts.DEFAULT_ERROR_HANDLER = function (_) {
    throw _;
  };
  goog.asserts.errorHandler_ = goog.asserts.DEFAULT_ERROR_HANDLER;
  goog.asserts.subs_ = function (_, _) {
    _ = _.split("%s");
    for (var _ = "", _ = _.length - 1, _ = 0; _ < _; _++)
      _ += _[_] + (_ < _.length ? _[_] : "%s");
    return _ + _[_];
  };
  goog.asserts.doAssertFailure_ = function (_, _, _, _) {
    var _ = "Assertion failed";
    if (_) {
      _ += ": " + _;
      var _ = _;
    } else _ && ((_ += ": " + _), (_ = _));
    (_ = new goog.asserts.AssertionError("" + _, _ || [])),
      goog.asserts.errorHandler_(_);
  };
  goog.asserts.setErrorHandler = function (_) {
    goog.asserts.ENABLE_ASSERTS && (goog.asserts.errorHandler_ = _);
  };
  goog.asserts.assert = function (_, _, _) {
    return (
      goog.asserts.ENABLE_ASSERTS &&
        !_ &&
        goog.asserts.doAssertFailure_(
          "",
          null,
          _,
          Array.prototype.slice.call(arguments, 2),
        ),
      _
    );
  };
  goog.asserts.assertExists = function (_, _, _) {
    return (
      goog.asserts.ENABLE_ASSERTS &&
        _ == null &&
        goog.asserts.doAssertFailure_(
          "Expected to exist: %s.",
          [_],
          _,
          Array.prototype.slice.call(arguments, 2),
        ),
      _
    );
  };
  goog.asserts.fail = function (_, _) {
    goog.asserts.ENABLE_ASSERTS &&
      goog.asserts.errorHandler_(
        new goog.asserts.AssertionError(
          "Failure" + (_ ? ": " + _ : ""),
          Array.prototype.slice.call(arguments, 1),
        ),
      );
  };
  goog.asserts.assertNumber = function (_, _, _) {
    return (
      goog.asserts.ENABLE_ASSERTS &&
        typeof _ != "number" &&
        goog.asserts.doAssertFailure_(
          "Expected number but got %s: %s.",
          [goog.typeOf(_), _],
          _,
          Array.prototype.slice.call(arguments, 2),
        ),
      _
    );
  };
  goog.asserts.assertString = function (_, _, _) {
    return (
      goog.asserts.ENABLE_ASSERTS &&
        typeof _ != "string" &&
        goog.asserts.doAssertFailure_(
          "Expected string but got %s: %s.",
          [goog.typeOf(_), _],
          _,
          Array.prototype.slice.call(arguments, 2),
        ),
      _
    );
  };
  goog.asserts.assertFunction = function (_, _, _) {
    return (
      goog.asserts.ENABLE_ASSERTS &&
        !goog.isFunction(_) &&
        goog.asserts.doAssertFailure_(
          "Expected function but got %s: %s.",
          [goog.typeOf(_), _],
          _,
          Array.prototype.slice.call(arguments, 2),
        ),
      _
    );
  };
  goog.asserts.assertObject = function (_, _, _) {
    return (
      goog.asserts.ENABLE_ASSERTS &&
        !goog.isObject(_) &&
        goog.asserts.doAssertFailure_(
          "Expected object but got %s: %s.",
          [goog.typeOf(_), _],
          _,
          Array.prototype.slice.call(arguments, 2),
        ),
      _
    );
  };
  goog.asserts.assertArray = function (_, _, _) {
    return (
      goog.asserts.ENABLE_ASSERTS &&
        !Array.isArray(_) &&
        goog.asserts.doAssertFailure_(
          "Expected array but got %s: %s.",
          [goog.typeOf(_), _],
          _,
          Array.prototype.slice.call(arguments, 2),
        ),
      _
    );
  };
  goog.asserts.assertBoolean = function (_, _, _) {
    return (
      goog.asserts.ENABLE_ASSERTS &&
        typeof _ != "boolean" &&
        goog.asserts.doAssertFailure_(
          "Expected boolean but got %s: %s.",
          [goog.typeOf(_), _],
          _,
          Array.prototype.slice.call(arguments, 2),
        ),
      _
    );
  };
  goog.asserts.assertElement = function (_, _, _) {
    return (
      !goog.asserts.ENABLE_ASSERTS ||
        (goog.isObject(_) && _.nodeType == goog.dom.NodeType.ELEMENT) ||
        goog.asserts.doAssertFailure_(
          "Expected Element but got %s: %s.",
          [goog.typeOf(_), _],
          _,
          Array.prototype.slice.call(arguments, 2),
        ),
      _
    );
  };
  goog.asserts.assertInstanceof = function (_, _, _, _) {
    return (
      !goog.asserts.ENABLE_ASSERTS ||
        _ instanceof _ ||
        goog.asserts.doAssertFailure_(
          "Expected instanceof %s but got %s.",
          [goog.asserts.getType_(_), goog.asserts.getType_(_)],
          _,
          Array.prototype.slice.call(arguments, 3),
        ),
      _
    );
  };
  goog.asserts.assertFinite = function (_, _, _) {
    return (
      !goog.asserts.ENABLE_ASSERTS ||
        (typeof _ == "number" && isFinite(_)) ||
        goog.asserts.doAssertFailure_(
          "Expected %s to be a finite number but it is not.",
          [_],
          _,
          Array.prototype.slice.call(arguments, 2),
        ),
      _
    );
  };
  goog.asserts.assertObjectPrototypeIsIntact = function () {
    for (var _ in Object.prototype)
      goog.asserts.fail(_ + " should not be enumerable in Object.prototype.");
  };
  goog.asserts.getType_ = function (_) {
    return _ instanceof Function
      ? _.displayName || _.name || "unknown type name"
      : _ instanceof Object
        ? _.constructor.displayName ||
          _.constructor.name ||
          Object.prototype.toString.call(_)
        : _ === null
          ? "null"
          : typeof _;
  };
  goog.array = {};
  goog.NATIVE_ARRAY_PROTOTYPES = goog.TRUSTED_SITE;
  goog.array.ASSUME_NATIVE_FUNCTIONS = 2012 < goog.FEATURESET_YEAR;
  goog.array.peek = function (_) {
    return _[_.length - 1];
  };
  goog.array.last = goog.array.peek;
  goog.array.indexOf =
    goog.NATIVE_ARRAY_PROTOTYPES &&
    (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.indexOf)
      ? function (_, _, _) {
          return (
            goog.asserts.assert(_.length != null),
            Array.prototype.indexOf.call(_, _, _)
          );
        }
      : function (_, _, _) {
          if (
            ((_ = _ == null ? 0 : 0 > _ ? Math.max(0, _.length + _) : _),
            typeof _ == "string")
          )
            return typeof _ != "string" || _.length != 1 ? -1 : _.indexOf(_, _);
          for (; _ < _.length; _++) if (_ in _ && _[_] === _) return _;
          return -1;
        };
  goog.array.lastIndexOf =
    goog.NATIVE_ARRAY_PROTOTYPES &&
    (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.lastIndexOf)
      ? function (_, _, _) {
          return (
            goog.asserts.assert(_.length != null),
            Array.prototype.lastIndexOf.call(_, _, _ ?? _.length - 1)
          );
        }
      : function (_, _, _) {
          if (
            ((_ = _ ?? _.length - 1),
            0 > _ && (_ = Math.max(0, _.length + _)),
            typeof _ == "string")
          )
            return typeof _ != "string" || _.length != 1
              ? -1
              : _.lastIndexOf(_, _);
          for (; 0 <= _; _--) if (_ in _ && _[_] === _) return _;
          return -1;
        };
  goog.array.forEach =
    goog.NATIVE_ARRAY_PROTOTYPES &&
    (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.forEach)
      ? function (_, _, _) {
          goog.asserts.assert(_.length != null),
            Array.prototype.forEach.call(_, _, _);
        }
      : function (_, _, _) {
          for (
            var _ = _.length, _ = typeof _ == "string" ? _.split("") : _, _ = 0;
            _ < _;
            _++
          )
            _ in _ && _.call(_, _[_], _, _);
        };
  goog.array.forEachRight = function (_, _, _) {
    var _ = _.length,
      _ = typeof _ == "string" ? _.split("") : _;
    for (--_; 0 <= _; --_) _ in _ && _.call(_, _[_], _, _);
  };
  goog.array.filter =
    goog.NATIVE_ARRAY_PROTOTYPES &&
    (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.filter)
      ? function (_, _, _) {
          return (
            goog.asserts.assert(_.length != null),
            Array.prototype.filter.call(_, _, _)
          );
        }
      : function (_, _, _) {
          for (
            var _ = _.length,
              _ = [],
              _ = 0,
              _ = typeof _ == "string" ? _.split("") : _,
              _ = 0;
            _ < _;
            _++
          )
            if (_ in _) {
              var _ = _[_];
              _.call(_, _, _, _) && (_[_++] = _);
            }
          return _;
        };
  goog.array.map =
    goog.NATIVE_ARRAY_PROTOTYPES &&
    (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.map)
      ? function (_, _, _) {
          return (
            goog.asserts.assert(_.length != null),
            Array.prototype.map.call(_, _, _)
          );
        }
      : function (_, _, _) {
          for (
            var _ = _.length,
              _ = Array(_),
              _ = typeof _ == "string" ? _.split("") : _,
              _ = 0;
            _ < _;
            _++
          )
            _ in _ && (_[_] = _.call(_, _[_], _, _));
          return _;
        };
  goog.array.reduce =
    goog.NATIVE_ARRAY_PROTOTYPES &&
    (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.reduce)
      ? function (_, _, _, _) {
          return (
            goog.asserts.assert(_.length != null),
            _ && (_ = goog.bind(_, _)),
            Array.prototype.reduce.call(_, _, _)
          );
        }
      : function (_, _, _, _) {
          var _ = _;
          return (
            goog.array.forEach(_, function (_, _) {
              _ = _.call(_, _, _, _, _);
            }),
            _
          );
        };
  goog.array.reduceRight =
    goog.NATIVE_ARRAY_PROTOTYPES &&
    (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.reduceRight)
      ? function (_, _, _, _) {
          return (
            goog.asserts.assert(_.length != null),
            goog.asserts.assert(_ != null),
            _ && (_ = goog.bind(_, _)),
            Array.prototype.reduceRight.call(_, _, _)
          );
        }
      : function (_, _, _, _) {
          var _ = _;
          return (
            goog.array.forEachRight(_, function (_, _) {
              _ = _.call(_, _, _, _, _);
            }),
            _
          );
        };
  goog.array.some =
    goog.NATIVE_ARRAY_PROTOTYPES &&
    (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.some)
      ? function (_, _, _) {
          return (
            goog.asserts.assert(_.length != null),
            Array.prototype.some.call(_, _, _)
          );
        }
      : function (_, _, _) {
          for (
            var _ = _.length, _ = typeof _ == "string" ? _.split("") : _, _ = 0;
            _ < _;
            _++
          )
            if (_ in _ && _.call(_, _[_], _, _)) return !0;
          return !1;
        };
  goog.array.every =
    goog.NATIVE_ARRAY_PROTOTYPES &&
    (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.every)
      ? function (_, _, _) {
          return (
            goog.asserts.assert(_.length != null),
            Array.prototype.every.call(_, _, _)
          );
        }
      : function (_, _, _) {
          for (
            var _ = _.length, _ = typeof _ == "string" ? _.split("") : _, _ = 0;
            _ < _;
            _++
          )
            if (_ in _ && !_.call(_, _[_], _, _)) return !1;
          return !0;
        };
  goog.array.count = function (_, _, _) {
    var _ = 0;
    return (
      goog.array.forEach(
        _,
        function (_, _, _) {
          _.call(_, _, _, _) && ++_;
        },
        _,
      ),
      _
    );
  };
  goog.array.find = function (_, _, _) {
    return (
      (_ = goog.array.findIndex(_, _, _)),
      0 > _ ? null : typeof _ == "string" ? _.charAt(_) : _[_]
    );
  };
  goog.array.findIndex = function (_, _, _) {
    for (
      var _ = _.length, _ = typeof _ == "string" ? _.split("") : _, _ = 0;
      _ < _;
      _++
    )
      if (_ in _ && _.call(_, _[_], _, _)) return _;
    return -1;
  };
  goog.array.findRight = function (_, _, _) {
    return (
      (_ = goog.array.findIndexRight(_, _, _)),
      0 > _ ? null : typeof _ == "string" ? _.charAt(_) : _[_]
    );
  };
  goog.array.findIndexRight = function (_, _, _) {
    var _ = _.length,
      _ = typeof _ == "string" ? _.split("") : _;
    for (--_; 0 <= _; _--) if (_ in _ && _.call(_, _[_], _, _)) return _;
    return -1;
  };
  goog.array.contains = function (_, _) {
    return 0 <= goog.array.indexOf(_, _);
  };
  goog.array.isEmpty = function (_) {
    return _.length == 0;
  };
  goog.array.clear = function (_) {
    if (!Array.isArray(_)) for (var _ = _.length - 1; 0 <= _; _--) delete _[_];
    _.length = 0;
  };
  goog.array.insert = function (_, _) {
    goog.array.contains(_, _) || _.push(_);
  };
  goog.array.insertAt = function (_, _, _) {
    goog.array.splice(_, _, 0, _);
  };
  goog.array.insertArrayAt = function (_, _, _) {
    goog.partial(goog.array.splice, _, _, 0).apply(null, _);
  };
  goog.array.insertBefore = function (_, _, _) {
    var _;
    arguments.length == 2 || 0 > (_ = goog.array.indexOf(_, _))
      ? _.push(_)
      : goog.array.insertAt(_, _, _);
  };
  goog.array.remove = function (_, _) {
    _ = goog.array.indexOf(_, _);
    var _;
    return (_ = 0 <= _) && goog.array.removeAt(_, _), _;
  };
  goog.array.removeLast = function (_, _) {
    return (
      (_ = goog.array.lastIndexOf(_, _)),
      0 <= _ ? (goog.array.removeAt(_, _), !0) : !1
    );
  };
  goog.array.removeAt = function (_, _) {
    return (
      goog.asserts.assert(_.length != null),
      Array.prototype.splice.call(_, _, 1).length == 1
    );
  };
  goog.array.removeIf = function (_, _, _) {
    return (
      (_ = goog.array.findIndex(_, _, _)),
      0 <= _ ? (goog.array.removeAt(_, _), !0) : !1
    );
  };
  goog.array.removeAllIf = function (_, _, _) {
    var _ = 0;
    return (
      goog.array.forEachRight(_, function (_, _) {
        _.call(_, _, _, _) && goog.array.removeAt(_, _) && _++;
      }),
      _
    );
  };
  goog.array.concat = function (_) {
    return Array.prototype.concat.apply([], arguments);
  };
  goog.array.join = function (_) {
    return Array.prototype.concat.apply([], arguments);
  };
  goog.array.toArray = function (_) {
    var _ = _.length;
    if (0 < _) {
      for (var _ = Array(_), _ = 0; _ < _; _++) _[_] = _[_];
      return _;
    }
    return [];
  };
  goog.array.clone = goog.array.toArray;
  goog.array.extend = function (_, _) {
    for (var _ = 1; _ < arguments.length; _++) {
      var _ = arguments[_];
      if (goog.isArrayLike(_)) {
        var _ = _.length || 0,
          _ = _.length || 0;
        _.length = _ + _;
        for (var _ = 0; _ < _; _++) _[_ + _] = _[_];
      } else _.push(_);
    }
  };
  goog.array.splice = function (_, _, _, _) {
    return (
      goog.asserts.assert(_.length != null),
      Array.prototype.splice.apply(_, goog.array.slice(arguments, 1))
    );
  };
  goog.array.slice = function (_, _, _) {
    return (
      goog.asserts.assert(_.length != null),
      2 >= arguments.length
        ? Array.prototype.slice.call(_, _)
        : Array.prototype.slice.call(_, _, _)
    );
  };
  goog.array.removeDuplicates = function (_, _, _) {
    _ = _ || _;
    var _ = function (_) {
      return goog.isObject(_) ? "o" + goog.getUid(_) : (typeof _).charAt(0) + _;
    };
    (_ = _ || _), (_ = {});
    for (var _ = 0, _ = 0; _ < _.length; ) {
      var _ = _[_++],
        _ = _(_);
      Object.prototype.hasOwnProperty.call(_, _) || ((_[_] = !0), (_[_++] = _));
    }
    _.length = _;
  };
  goog.array.binarySearch = function (_, _, _) {
    return goog.array.binarySearch_(_, _ || goog.array.defaultCompare, !1, _);
  };
  goog.array.binarySelect = function (_, _, _) {
    return goog.array.binarySearch_(_, _, !0, void 0, _);
  };
  goog.array.binarySearch_ = function (_, _, _, _, _) {
    for (var _ = 0, _ = _.length, _; _ < _; ) {
      var _ = _ + ((_ - _) >>> 1),
        _ = _ ? _.call(_, _[_], _, _) : _(_, _[_]);
      0 < _ ? (_ = _ + 1) : ((_ = _), (_ = !_));
    }
    return _ ? _ : -_ - 1;
  };
  goog.array.sort = function (_, _) {
    _.sort(_ || goog.array.defaultCompare);
  };
  goog.array.stableSort = function (_, _) {
    for (var _ = Array(_.length), _ = 0; _ < _.length; _++)
      _[_] = {
        index: _,
        value: _[_],
      };
    var _ = _ || goog.array.defaultCompare;
    for (
      goog.array.sort(_, function (_, _) {
        return _(_.value, _.value) || _.index - _.index;
      }),
        _ = 0;
      _ < _.length;
      _++
    )
      _[_] = _[_].value;
  };
  goog.array.sortByKey = function (_, _, _) {
    var _ = _ || goog.array.defaultCompare;
    goog.array.sort(_, function (_, _) {
      return _(_(_), _(_));
    });
  };
  goog.array.sortObjectsByKey = function (_, _, _) {
    goog.array.sortByKey(
      _,
      function (_) {
        return _[_];
      },
      _,
    );
  };
  goog.array.isSorted = function (_, _, _) {
    _ = _ || goog.array.defaultCompare;
    for (var _ = 1; _ < _.length; _++) {
      var _ = _(_[_ - 1], _[_]);
      if (0 < _ || (_ == 0 && _)) return !1;
    }
    return !0;
  };
  goog.array.equals = function (_, _, _) {
    if (!goog.isArrayLike(_) || !goog.isArrayLike(_) || _.length != _.length)
      return !1;
    var _ = _.length;
    _ = _ || goog.array.defaultCompareEquality;
    for (var _ = 0; _ < _; _++) if (!_(_[_], _[_])) return !1;
    return !0;
  };
  goog.array.compare3 = function (_, _, _) {
    _ = _ || goog.array.defaultCompare;
    for (var _ = Math.min(_.length, _.length), _ = 0; _ < _; _++) {
      var _ = _(_[_], _[_]);
      if (_ != 0) return _;
    }
    return goog.array.defaultCompare(_.length, _.length);
  };
  goog.array.defaultCompare = function (_, _) {
    return _ > _ ? 1 : _ < _ ? -1 : 0;
  };
  goog.array.inverseDefaultCompare = function (_, _) {
    return -goog.array.defaultCompare(_, _);
  };
  goog.array.defaultCompareEquality = function (_, _) {
    return _ === _;
  };
  goog.array.binaryInsert = function (_, _, _) {
    return (
      (_ = goog.array.binarySearch(_, _, _)),
      0 > _ ? (goog.array.insertAt(_, _, -(_ + 1)), !0) : !1
    );
  };
  goog.array.binaryRemove = function (_, _, _) {
    return (
      (_ = goog.array.binarySearch(_, _, _)),
      0 <= _ ? goog.array.removeAt(_, _) : !1
    );
  };
  goog.array.bucket = function (_, _, _) {
    for (var _ = {}, _ = 0; _ < _.length; _++) {
      var _ = _[_],
        _ = _.call(_, _, _, _);
      _ !== void 0 && (_[_] || (_[_] = [])).push(_);
    }
    return _;
  };
  goog.array.toObject = function (_, _, _) {
    var _ = {};
    return (
      goog.array.forEach(_, function (_, _) {
        _[_.call(_, _, _, _)] = _;
      }),
      _
    );
  };
  goog.array.range = function (_, _, _) {
    var _ = [],
      _ = 0,
      _ = _;
    if (((_ = _ || 1), _ !== void 0 && ((_ = _), (_ = _)), 0 > _ * (_ - _)))
      return [];
    if (0 < _) for (_ = _; _ < _; _ += _) _.push(_);
    else for (_ = _; _ > _; _ += _) _.push(_);
    return _;
  };
  goog.array.repeat = function (_, _) {
    for (var _ = [], _ = 0; _ < _; _++) _[_] = _;
    return _;
  };
  goog.array.flatten = function (_) {
    for (var _ = [], _ = 0; _ < arguments.length; _++) {
      var _ = arguments[_];
      if (Array.isArray(_))
        for (var _ = 0; _ < _.length; _ += 8192) {
          var _ = goog.array.slice(_, _, _ + 8192);
          _ = goog.array.flatten.apply(null, _);
          for (var _ = 0; _ < _.length; _++) _.push(_[_]);
        }
      else _.push(_);
    }
    return _;
  };
  goog.array.rotate = function (_, _) {
    return (
      goog.asserts.assert(_.length != null),
      _.length &&
        ((_ %= _.length),
        0 < _
          ? Array.prototype.unshift.apply(_, _.splice(-_, _))
          : 0 > _ && Array.prototype.push.apply(_, _.splice(0, -_))),
      _
    );
  };
  goog.array.moveItem = function (_, _, _) {
    goog.asserts.assert(0 <= _ && _ < _.length),
      goog.asserts.assert(0 <= _ && _ < _.length),
      (_ = Array.prototype.splice.call(_, _, 1)),
      Array.prototype.splice.call(_, _, 0, _[0]);
  };
  goog.array.zip = function (_) {
    if (!arguments.length) return [];
    for (var _ = [], _ = arguments[0].length, _ = 1; _ < arguments.length; _++)
      arguments[_].length < _ && (_ = arguments[_].length);
    for (_ = 0; _ < _; _++) {
      for (var _ = [], _ = 0; _ < arguments.length; _++)
        _.push(arguments[_][_]);
      _.push(_);
    }
    return _;
  };
  goog.array.shuffle = function (_, _) {
    _ = _ || Math.random;
    for (var _ = _.length - 1; 0 < _; _--) {
      var _ = Math.floor(_() * (_ + 1)),
        _ = _[_];
      (_[_] = _[_]), (_[_] = _);
    }
  };
  goog.array.copyByIndex = function (_, _) {
    var _ = [];
    return (
      goog.array.forEach(_, function (_) {
        _.push(_[_]);
      }),
      _
    );
  };
  goog.array.concatMap = function (_, _, _) {
    return goog.array.concat.apply([], goog.array.map(_, _, _));
  };
  goog.crypt = {};
  goog.crypt.stringToByteArray = function (_) {
    for (var _ = [], _ = 0, _ = 0; _ < _.length; _++) {
      var _ = _.charCodeAt(_);
      255 < _ && ((_[_++] = _ & 255), (_ >>= 8)), (_[_++] = _);
    }
    return _;
  };
  goog.crypt.byteArrayToString = function (_) {
    if (8192 >= _.length) return String.fromCharCode.apply(null, _);
    for (var _ = "", _ = 0; _ < _.length; _ += 8192) {
      var _ = goog.array.slice(_, _, _ + 8192);
      _ += String.fromCharCode.apply(null, _);
    }
    return _;
  };
  goog.crypt.byteArrayToHex = function (_, _) {
    return goog.array
      .map(_, function (_) {
        return (_ = _.toString(16)), 1 < _.length ? _ : "0" + _;
      })
      .join(_ || "");
  };
  goog.crypt.hexToByteArray = function (_) {
    goog.asserts.assert(
      _.length % 2 == 0,
      "Key string length must be multiple of 2",
    );
    for (var _ = [], _ = 0; _ < _.length; _ += 2)
      _.push(parseInt(_.substring(_, _ + 2), 16));
    return _;
  };
  goog.crypt.stringToUtf8ByteArray = function (_) {
    for (var _ = [], _ = 0, _ = 0; _ < _.length; _++) {
      var _ = _.charCodeAt(_);
      128 > _
        ? (_[_++] = _)
        : (2048 > _
            ? (_[_++] = (_ >> 6) | 192)
            : ((_ & 64512) == 55296 &&
              _ + 1 < _.length &&
              (_.charCodeAt(_ + 1) & 64512) == 56320
                ? ((_ =
                    65536 + ((_ & 1023) << 10) + (_.charCodeAt(++_) & 1023)),
                  (_[_++] = (_ >> 18) | 240),
                  (_[_++] = ((_ >> 12) & 63) | 128))
                : (_[_++] = (_ >> 12) | 224),
              (_[_++] = ((_ >> 6) & 63) | 128)),
          (_[_++] = (_ & 63) | 128));
    }
    return _;
  };
  goog.crypt.utf8ByteArrayToString = function (_) {
    for (var _ = [], _ = 0, _ = 0; _ < _.length; ) {
      var _ = _[_++];
      if (128 > _) _[_++] = String.fromCharCode(_);
      else if (191 < _ && 224 > _) {
        var _ = _[_++];
        _[_++] = String.fromCharCode(((_ & 31) << 6) | (_ & 63));
      } else if (239 < _ && 365 > _) {
        _ = _[_++];
        var _ = _[_++],
          _ = _[_++];
        (_ =
          (((_ & 7) << 18) | ((_ & 63) << 12) | ((_ & 63) << 6) | (_ & 63)) -
          65536),
          (_[_++] = String.fromCharCode(55296 + (_ >> 10))),
          (_[_++] = String.fromCharCode(56320 + (_ & 1023)));
      } else
        (_ = _[_++]),
          (_ = _[_++]),
          (_[_++] = String.fromCharCode(
            ((_ & 15) << 12) | ((_ & 63) << 6) | (_ & 63),
          ));
    }
    return _.join("");
  };
  goog.crypt.xorByteArray = function (_, _) {
    goog.asserts.assert(_.length == _.length, "XOR array lengths must match");
    for (var _ = [], _ = 0; _ < _.length; _++) _.push(_[_] ^ _[_]);
    return _;
  };
  goog.dom.asserts = {};
  goog.dom.asserts.assertIsLocation = function (_) {
    if (goog.asserts.ENABLE_ASSERTS) {
      var _ = goog.dom.asserts.getWindow_(_);
      _ &&
        (!_ || (!(_ instanceof _.Location) && _ instanceof _.Element)) &&
        goog.asserts.fail(
          "Argument is not a Location (or a non-Element mock); got: %s",
          goog.dom.asserts.debugStringForType_(_),
        );
    }
    return _;
  };
  goog.dom.asserts.assertIsElementType_ = function (_, _) {
    if (goog.asserts.ENABLE_ASSERTS) {
      var _ = goog.dom.asserts.getWindow_(_);
      _ &&
        typeof _[_] < "u" &&
        ((_ &&
          (_ instanceof _[_] ||
            !(_ instanceof _.Location || _ instanceof _.Element))) ||
          goog.asserts.fail(
            "Argument is not a %s (or a non-Element, non-Location mock); got: %s",
            _,
            goog.dom.asserts.debugStringForType_(_),
          ));
    }
    return _;
  };
  goog.dom.asserts.assertIsHTMLAnchorElement = function (_) {
    return goog.dom.asserts.assertIsElementType_(_, "HTMLAnchorElement");
  };
  goog.dom.asserts.assertIsHTMLButtonElement = function (_) {
    return goog.dom.asserts.assertIsElementType_(_, "HTMLButtonElement");
  };
  goog.dom.asserts.assertIsHTMLLinkElement = function (_) {
    return goog.dom.asserts.assertIsElementType_(_, "HTMLLinkElement");
  };
  goog.dom.asserts.assertIsHTMLImageElement = function (_) {
    return goog.dom.asserts.assertIsElementType_(_, "HTMLImageElement");
  };
  goog.dom.asserts.assertIsHTMLAudioElement = function (_) {
    return goog.dom.asserts.assertIsElementType_(_, "HTMLAudioElement");
  };
  goog.dom.asserts.assertIsHTMLVideoElement = function (_) {
    return goog.dom.asserts.assertIsElementType_(_, "HTMLVideoElement");
  };
  goog.dom.asserts.assertIsHTMLInputElement = function (_) {
    return goog.dom.asserts.assertIsElementType_(_, "HTMLInputElement");
  };
  goog.dom.asserts.assertIsHTMLTextAreaElement = function (_) {
    return goog.dom.asserts.assertIsElementType_(_, "HTMLTextAreaElement");
  };
  goog.dom.asserts.assertIsHTMLCanvasElement = function (_) {
    return goog.dom.asserts.assertIsElementType_(_, "HTMLCanvasElement");
  };
  goog.dom.asserts.assertIsHTMLEmbedElement = function (_) {
    return goog.dom.asserts.assertIsElementType_(_, "HTMLEmbedElement");
  };
  goog.dom.asserts.assertIsHTMLFormElement = function (_) {
    return goog.dom.asserts.assertIsElementType_(_, "HTMLFormElement");
  };
  goog.dom.asserts.assertIsHTMLFrameElement = function (_) {
    return goog.dom.asserts.assertIsElementType_(_, "HTMLFrameElement");
  };
  goog.dom.asserts.assertIsHTMLIFrameElement = function (_) {
    return goog.dom.asserts.assertIsElementType_(_, "HTMLIFrameElement");
  };
  goog.dom.asserts.assertIsHTMLObjectElement = function (_) {
    return goog.dom.asserts.assertIsElementType_(_, "HTMLObjectElement");
  };
  goog.dom.asserts.assertIsHTMLScriptElement = function (_) {
    return goog.dom.asserts.assertIsElementType_(_, "HTMLScriptElement");
  };
  goog.dom.asserts.debugStringForType_ = function (_) {
    if (goog.isObject(_))
      try {
        return (
          _.constructor.displayName ||
          _.constructor.name ||
          Object.prototype.toString.call(_)
        );
      } catch {
        return "<object could not be stringified>";
      }
    else return _ === void 0 ? "undefined" : _ === null ? "null" : typeof _;
  };
  goog.dom.asserts.getWindow_ = function (_) {
    try {
      var _ = _ && _.ownerDocument,
        _ = _ && (_.defaultView || _.parentWindow);
      if (((_ = _ || goog.global), _.Element && _.Location)) return _;
    } catch {}
    return null;
  };
  goog.functions = {};
  goog.functions.constant = function (_) {
    return function () {
      return _;
    };
  };
  goog.functions.FALSE = function () {
    return !1;
  };
  goog.functions.TRUE = function () {
    return !0;
  };
  goog.functions.NULL = function () {
    return null;
  };
  goog.functions.identity = function (_, _) {
    return _;
  };
  goog.functions.error = function (_) {
    return function () {
      throw Error(_);
    };
  };
  goog.functions.fail = function (_) {
    return function () {
      throw _;
    };
  };
  goog.functions.lock = function (_, _) {
    return (
      (_ = _ || 0),
      function () {
        return _.apply(this, Array.prototype.slice.call(arguments, 0, _));
      }
    );
  };
  goog.functions.nth = function (_) {
    return function () {
      return arguments[_];
    };
  };
  goog.functions.partialRight = function (_, _) {
    var _ = Array.prototype.slice.call(arguments, 1);
    return function () {
      var _ = Array.prototype.slice.call(arguments);
      return _.push.apply(_, _), _.apply(this, _);
    };
  };
  goog.functions.withReturnValue = function (_, _) {
    return goog.functions.sequence(_, goog.functions.constant(_));
  };
  goog.functions.equalTo = function (_, _) {
    return function (_) {
      return _ ? _ == _ : _ === _;
    };
  };
  goog.functions.compose = function (_, _) {
    var _ = arguments,
      _ = _.length;
    return function () {
      var _;
      _ && (_ = _[_ - 1].apply(this, arguments));
      for (var _ = _ - 2; 0 <= _; _--) _ = _[_].call(this, _);
      return _;
    };
  };
  goog.functions.sequence = function (_) {
    var _ = arguments,
      _ = _.length;
    return function () {
      for (var _, _ = 0; _ < _; _++) _ = _[_].apply(this, arguments);
      return _;
    };
  };
  goog.functions.and = function (_) {
    var _ = arguments,
      _ = _.length;
    return function () {
      for (var _ = 0; _ < _; _++) if (!_[_].apply(this, arguments)) return !1;
      return !0;
    };
  };
  goog.functions._ = function (_) {
    var _ = arguments,
      _ = _.length;
    return function () {
      for (var _ = 0; _ < _; _++) if (_[_].apply(this, arguments)) return !0;
      return !1;
    };
  };
  goog.functions.not = function (_) {
    return function () {
      return !_.apply(this, arguments);
    };
  };
  goog.functions.create = function (_, _) {
    var _ = function () {};
    return (
      (_.prototype = _.prototype),
      (_ = new _()),
      _.apply(_, Array.prototype.slice.call(arguments, 1)),
      _
    );
  };
  goog.functions.CACHE_RETURN_VALUE = !0;
  goog.functions.cacheReturnValue = function (_) {
    var _ = !1,
      _;
    return function () {
      return goog.functions.CACHE_RETURN_VALUE
        ? (_ || ((_ = _()), (_ = !0)), _)
        : _();
    };
  };
  goog.functions.once = function (_) {
    var _ = _;
    return function () {
      if (_) {
        var _ = _;
        (_ = null), _();
      }
    };
  };
  goog.functions.debounce = function (_, _, _) {
    var _ = 0;
    return function (_) {
      goog.global.clearTimeout(_);
      var _ = arguments;
      _ = goog.global.setTimeout(function () {
        _.apply(_, _);
      }, _);
    };
  };
  goog.functions.throttle = function (_, _, _) {
    var _ = 0,
      _ = !1,
      _ = [],
      _ = function () {
        (_ = 0), _ && ((_ = !1), _());
      },
      _ = function () {
        (_ = goog.global.setTimeout(_, _)), _.apply(_, _);
      };
    return function (_) {
      (_ = arguments), _ ? (_ = !0) : _();
    };
  };
  goog.functions.rateLimit = function (_, _, _) {
    var _ = 0,
      _ = function () {
        _ = 0;
      };
    return function (_) {
      _ || ((_ = goog.global.setTimeout(_, _)), _.apply(_, arguments));
    };
  };
  goog.dom.HtmlElement = function () {};
  goog.dom.TagName = function (_) {
    this.tagName_ = _;
  };
  goog.dom.TagName.prototype.toString = function () {
    return this.tagName_;
  };
  goog.dom.TagName._ = new goog.dom.TagName("A");
  goog.dom.TagName.ABBR = new goog.dom.TagName("ABBR");
  goog.dom.TagName.ACRONYM = new goog.dom.TagName("ACRONYM");
  goog.dom.TagName.ADDRESS = new goog.dom.TagName("ADDRESS");
  goog.dom.TagName.APPLET = new goog.dom.TagName("APPLET");
  goog.dom.TagName.AREA = new goog.dom.TagName("AREA");
  goog.dom.TagName.ARTICLE = new goog.dom.TagName("ARTICLE");
  goog.dom.TagName.ASIDE = new goog.dom.TagName("ASIDE");
  goog.dom.TagName.AUDIO = new goog.dom.TagName("AUDIO");
  goog.dom.TagName._ = new goog.dom.TagName("B");
  goog.dom.TagName.BASE = new goog.dom.TagName("BASE");
  goog.dom.TagName.BASEFONT = new goog.dom.TagName("BASEFONT");
  goog.dom.TagName.BDI = new goog.dom.TagName("BDI");
  goog.dom.TagName.BDO = new goog.dom.TagName("BDO");
  goog.dom.TagName.BIG = new goog.dom.TagName("BIG");
  goog.dom.TagName.BLOCKQUOTE = new goog.dom.TagName("BLOCKQUOTE");
  goog.dom.TagName.BODY = new goog.dom.TagName("BODY");
  goog.dom.TagName._ = new goog.dom.TagName("BR");
  goog.dom.TagName.BUTTON = new goog.dom.TagName("BUTTON");
  goog.dom.TagName.CANVAS = new goog.dom.TagName("CANVAS");
  goog.dom.TagName.CAPTION = new goog.dom.TagName("CAPTION");
  goog.dom.TagName.CENTER = new goog.dom.TagName("CENTER");
  goog.dom.TagName.CITE = new goog.dom.TagName("CITE");
  goog.dom.TagName.CODE = new goog.dom.TagName("CODE");
  goog.dom.TagName.COL = new goog.dom.TagName("COL");
  goog.dom.TagName.COLGROUP = new goog.dom.TagName("COLGROUP");
  goog.dom.TagName.COMMAND = new goog.dom.TagName("COMMAND");
  goog.dom.TagName.DATA = new goog.dom.TagName("DATA");
  goog.dom.TagName.DATALIST = new goog.dom.TagName("DATALIST");
  goog.dom.TagName._ = new goog.dom.TagName("DD");
  goog.dom.TagName.DEL = new goog.dom.TagName("DEL");
  goog.dom.TagName.DETAILS = new goog.dom.TagName("DETAILS");
  goog.dom.TagName.DFN = new goog.dom.TagName("DFN");
  goog.dom.TagName.DIALOG = new goog.dom.TagName("DIALOG");
  goog.dom.TagName.DIR = new goog.dom.TagName("DIR");
  goog.dom.TagName.DIV = new goog.dom.TagName("DIV");
  goog.dom.TagName._ = new goog.dom.TagName("DL");
  goog.dom.TagName._ = new goog.dom.TagName("DT");
  goog.dom.TagName._ = new goog.dom.TagName("EM");
  goog.dom.TagName.EMBED = new goog.dom.TagName("EMBED");
  goog.dom.TagName.FIELDSET = new goog.dom.TagName("FIELDSET");
  goog.dom.TagName.FIGCAPTION = new goog.dom.TagName("FIGCAPTION");
  goog.dom.TagName.FIGURE = new goog.dom.TagName("FIGURE");
  goog.dom.TagName.FONT = new goog.dom.TagName("FONT");
  goog.dom.TagName.FOOTER = new goog.dom.TagName("FOOTER");
  goog.dom.TagName.FORM = new goog.dom.TagName("FORM");
  goog.dom.TagName.FRAME = new goog.dom.TagName("FRAME");
  goog.dom.TagName.FRAMESET = new goog.dom.TagName("FRAMESET");
  goog.dom.TagName._ = new goog.dom.TagName("H1");
  goog.dom.TagName._ = new goog.dom.TagName("H2");
  goog.dom.TagName._ = new goog.dom.TagName("H3");
  goog.dom.TagName._ = new goog.dom.TagName("H4");
  goog.dom.TagName._ = new goog.dom.TagName("H5");
  goog.dom.TagName._ = new goog.dom.TagName("H6");
  goog.dom.TagName.HEAD = new goog.dom.TagName("HEAD");
  goog.dom.TagName.HEADER = new goog.dom.TagName("HEADER");
  goog.dom.TagName.HGROUP = new goog.dom.TagName("HGROUP");
  goog.dom.TagName._ = new goog.dom.TagName("HR");
  goog.dom.TagName.HTML = new goog.dom.TagName("HTML");
  goog.dom.TagName._ = new goog.dom.TagName("I");
  goog.dom.TagName.IFRAME = new goog.dom.TagName("IFRAME");
  goog.dom.TagName.IMG = new goog.dom.TagName("IMG");
  goog.dom.TagName.INPUT = new goog.dom.TagName("INPUT");
  goog.dom.TagName.INS = new goog.dom.TagName("INS");
  goog.dom.TagName.ISINDEX = new goog.dom.TagName("ISINDEX");
  goog.dom.TagName.KBD = new goog.dom.TagName("KBD");
  goog.dom.TagName.KEYGEN = new goog.dom.TagName("KEYGEN");
  goog.dom.TagName.LABEL = new goog.dom.TagName("LABEL");
  goog.dom.TagName.LEGEND = new goog.dom.TagName("LEGEND");
  goog.dom.TagName._ = new goog.dom.TagName("LI");
  goog.dom.TagName.LINK = new goog.dom.TagName("LINK");
  goog.dom.TagName.MAIN = new goog.dom.TagName("MAIN");
  goog.dom.TagName.MAP = new goog.dom.TagName("MAP");
  goog.dom.TagName.MARK = new goog.dom.TagName("MARK");
  goog.dom.TagName.MATH = new goog.dom.TagName("MATH");
  goog.dom.TagName.MENU = new goog.dom.TagName("MENU");
  goog.dom.TagName.MENUITEM = new goog.dom.TagName("MENUITEM");
  goog.dom.TagName.META = new goog.dom.TagName("META");
  goog.dom.TagName.METER = new goog.dom.TagName("METER");
  goog.dom.TagName.NAV = new goog.dom.TagName("NAV");
  goog.dom.TagName.NOFRAMES = new goog.dom.TagName("NOFRAMES");
  goog.dom.TagName.NOSCRIPT = new goog.dom.TagName("NOSCRIPT");
  goog.dom.TagName.OBJECT = new goog.dom.TagName("OBJECT");
  goog.dom.TagName._ = new goog.dom.TagName("OL");
  goog.dom.TagName.OPTGROUP = new goog.dom.TagName("OPTGROUP");
  goog.dom.TagName.OPTION = new goog.dom.TagName("OPTION");
  goog.dom.TagName.OUTPUT = new goog.dom.TagName("OUTPUT");
  goog.dom.TagName._ = new goog.dom.TagName("P");
  goog.dom.TagName.PARAM = new goog.dom.TagName("PARAM");
  goog.dom.TagName.PICTURE = new goog.dom.TagName("PICTURE");
  goog.dom.TagName.PRE = new goog.dom.TagName("PRE");
  goog.dom.TagName.PROGRESS = new goog.dom.TagName("PROGRESS");
  goog.dom.TagName._ = new goog.dom.TagName("Q");
  goog.dom.TagName._ = new goog.dom.TagName("RP");
  goog.dom.TagName._ = new goog.dom.TagName("RT");
  goog.dom.TagName.RTC = new goog.dom.TagName("RTC");
  goog.dom.TagName.RUBY = new goog.dom.TagName("RUBY");
  goog.dom.TagName._ = new goog.dom.TagName("S");
  goog.dom.TagName.SAMP = new goog.dom.TagName("SAMP");
  goog.dom.TagName.SCRIPT = new goog.dom.TagName("SCRIPT");
  goog.dom.TagName.SECTION = new goog.dom.TagName("SECTION");
  goog.dom.TagName.SELECT = new goog.dom.TagName("SELECT");
  goog.dom.TagName.SMALL = new goog.dom.TagName("SMALL");
  goog.dom.TagName.SOURCE = new goog.dom.TagName("SOURCE");
  goog.dom.TagName.SPAN = new goog.dom.TagName("SPAN");
  goog.dom.TagName.STRIKE = new goog.dom.TagName("STRIKE");
  goog.dom.TagName.STRONG = new goog.dom.TagName("STRONG");
  goog.dom.TagName.STYLE = new goog.dom.TagName("STYLE");
  goog.dom.TagName.SUB = new goog.dom.TagName("SUB");
  goog.dom.TagName.SUMMARY = new goog.dom.TagName("SUMMARY");
  goog.dom.TagName.SUP = new goog.dom.TagName("SUP");
  goog.dom.TagName.SVG = new goog.dom.TagName("SVG");
  goog.dom.TagName.TABLE = new goog.dom.TagName("TABLE");
  goog.dom.TagName.TBODY = new goog.dom.TagName("TBODY");
  goog.dom.TagName._ = new goog.dom.TagName("TD");
  goog.dom.TagName.TEMPLATE = new goog.dom.TagName("TEMPLATE");
  goog.dom.TagName.TEXTAREA = new goog.dom.TagName("TEXTAREA");
  goog.dom.TagName.TFOOT = new goog.dom.TagName("TFOOT");
  goog.dom.TagName._ = new goog.dom.TagName("TH");
  goog.dom.TagName.THEAD = new goog.dom.TagName("THEAD");
  goog.dom.TagName.TIME = new goog.dom.TagName("TIME");
  goog.dom.TagName.TITLE = new goog.dom.TagName("TITLE");
  goog.dom.TagName._ = new goog.dom.TagName("TR");
  goog.dom.TagName.TRACK = new goog.dom.TagName("TRACK");
  goog.dom.TagName._ = new goog.dom.TagName("TT");
  goog.dom.TagName._ = new goog.dom.TagName("U");
  goog.dom.TagName._ = new goog.dom.TagName("UL");
  goog.dom.TagName.VAR = new goog.dom.TagName("VAR");
  goog.dom.TagName.VIDEO = new goog.dom.TagName("VIDEO");
  goog.dom.TagName.WBR = new goog.dom.TagName("WBR");
  goog.dom.tags = {};
  goog.dom.tags.VOID_TAGS_ = {
    area: !0,
    base: !0,
    _: !0,
    col: !0,
    command: !0,
    embed: !0,
    _: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  };
  goog.dom.tags.isVoidTag = function (_) {
    return goog.dom.tags.VOID_TAGS_[_] === !0;
  };
  goog.html = {};
  goog.html.trustedtypes = {};
  goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY =
    goog.TRUSTED_TYPES_POLICY_NAME
      ? goog.createTrustedTypesPolicy(goog.TRUSTED_TYPES_POLICY_NAME + "#html")
      : null;
  goog.string = {};
  goog.string.TypedString = function () {};
  goog.string.Const = function (_, _) {
    (this.stringConstValueWithSecurityContract__googStringSecurityPrivate_ =
      (_ === goog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_ && _) ||
      ""),
      (this.STRING_CONST_TYPE_MARKER__GOOG_STRING_SECURITY_PRIVATE_ =
        goog.string.Const.TYPE_MARKER_);
  };
  goog.string.Const.prototype.implementsGoogStringTypedString = !0;
  goog.string.Const.prototype.getTypedStringValue = function () {
    return this
      .stringConstValueWithSecurityContract__googStringSecurityPrivate_;
  };
  goog.DEBUG &&
    (goog.string.Const.prototype.toString = function () {
      return (
        "Const{" +
        this.stringConstValueWithSecurityContract__googStringSecurityPrivate_ +
        "}"
      );
    });
  goog.string.Const.unwrap = function (_) {
    return _ instanceof goog.string.Const &&
      _.constructor === goog.string.Const &&
      _.STRING_CONST_TYPE_MARKER__GOOG_STRING_SECURITY_PRIVATE_ ===
        goog.string.Const.TYPE_MARKER_
      ? _.stringConstValueWithSecurityContract__googStringSecurityPrivate_
      : (goog.asserts.fail("expected object of type Const, got '" + _ + "'"),
        "type_error:Const");
  };
  goog.string.Const.from = function (_) {
    return new goog.string.Const(
      goog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_,
      _,
    );
  };
  goog.string.Const.TYPE_MARKER_ = {};
  goog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_ = {};
  goog.string.Const.EMPTY = goog.string.Const.from("");
  goog.html.SafeScript = function () {
    (this.privateDoNotAccessOrElseSafeScriptWrappedValue_ = ""),
      (this.SAFE_SCRIPT_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ =
        goog.html.SafeScript.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_);
  };
  goog.html.SafeScript.prototype.implementsGoogStringTypedString = !0;
  goog.html.SafeScript.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {};
  goog.html.SafeScript.fromConstant = function (_) {
    return (
      (_ = goog.string.Const.unwrap(_)),
      _.length === 0
        ? goog.html.SafeScript.EMPTY
        : goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(
            _,
          )
    );
  };
  goog.html.SafeScript.fromConstantAndArgs = function (_, _) {
    for (var _ = [], _ = 1; _ < arguments.length; _++)
      _.push(goog.html.SafeScript.stringify_(arguments[_]));
    return goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(
      "(" + goog.string.Const.unwrap(_) + ")(" + _.join(", ") + ");",
    );
  };
  goog.html.SafeScript.fromJson = function (_) {
    return goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(
      goog.html.SafeScript.stringify_(_),
    );
  };
  goog.html.SafeScript.prototype.getTypedStringValue = function () {
    return this.privateDoNotAccessOrElseSafeScriptWrappedValue_.toString();
  };
  goog.DEBUG &&
    (goog.html.SafeScript.prototype.toString = function () {
      return (
        "SafeScript{" +
        this.privateDoNotAccessOrElseSafeScriptWrappedValue_ +
        "}"
      );
    });
  goog.html.SafeScript.unwrap = function (_) {
    return goog.html.SafeScript.unwrapTrustedScript(_).toString();
  };
  goog.html.SafeScript.unwrapTrustedScript = function (_) {
    return _ instanceof goog.html.SafeScript &&
      _.constructor === goog.html.SafeScript &&
      _.SAFE_SCRIPT_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ ===
        goog.html.SafeScript.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_
      ? _.privateDoNotAccessOrElseSafeScriptWrappedValue_
      : (goog.asserts.fail(
          "expected object of type SafeScript, got '" +
            _ +
            "' of type " +
            goog.typeOf(_),
        ),
        "type_error:SafeScript");
  };
  goog.html.SafeScript.stringify_ = function (_) {
    return JSON.stringify(_).replace(/</g, "\\x3c");
  };
  goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse =
    function (_) {
      return new goog.html.SafeScript().initSecurityPrivateDoNotAccessOrElse_(
        _,
      );
    };
  goog.html.SafeScript.prototype.initSecurityPrivateDoNotAccessOrElse_ =
    function (_) {
      return (
        (this.privateDoNotAccessOrElseSafeScriptWrappedValue_ = goog.html
          .trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY
          ? goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY.createScript(
              _,
            )
          : _),
        this
      );
    };
  goog.html.SafeScript.EMPTY =
    goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse("");
  goog._ = {};
  goog._.url = {};
  goog._.url.createObjectUrl = function (_) {
    return goog._.url.getUrlObject_().createObjectURL(_);
  };
  goog._.url.revokeObjectUrl = function (_) {
    goog._.url.getUrlObject_().revokeObjectURL(_);
  };
  goog._.url.UrlObject_ = function () {};
  goog._.url.UrlObject_.prototype.createObjectURL = function (_) {};
  goog._.url.UrlObject_.prototype.revokeObjectURL = function (_) {};
  goog._.url.getUrlObject_ = function () {
    var _ = goog._.url.findUrlObject_();
    if (_ != null) return _;
    throw Error("This browser doesn't seem to support blob URLs");
  };
  goog._.url.findUrlObject_ = function () {
    return goog.global.URL !== void 0 &&
      goog.global.URL.createObjectURL !== void 0
      ? goog.global.URL
      : goog.global.webkitURL !== void 0 &&
          goog.global.webkitURL.createObjectURL !== void 0
        ? goog.global.webkitURL
        : goog.global.createObjectURL !== void 0
          ? goog.global
          : null;
  };
  goog._.url.browserSupportsObjectUrls = function () {
    return goog._.url.findUrlObject_() != null;
  };
  goog._.blob = {};
  goog._.blob.getBlob = function (_) {
    var _ = goog.global.BlobBuilder || goog.global.WebKitBlobBuilder;
    if (_ !== void 0) {
      _ = new _();
      for (var _ = 0; _ < arguments.length; _++) _.append(arguments[_]);
      return _.getBlob();
    }
    return goog._.blob.getBlobWithProperties(goog.array.toArray(arguments));
  };
  goog._.blob.getBlobWithProperties = function (_, _, _) {
    var _ = goog.global.BlobBuilder || goog.global.WebKitBlobBuilder;
    if (_ !== void 0) {
      _ = new _();
      for (var _ = 0; _ < _.length; _++) _.append(_[_], _);
      return _.getBlob(_);
    }
    if (goog.global.Blob !== void 0)
      return (_ = {}), _ && (_.type = _), _ && (_.endings = _), new Blob(_, _);
    throw Error("This browser doesn't seem to support creating Blobs");
  };
  goog.i18n = {};
  goog.i18n.bidi = {};
  goog.i18n.bidi.FORCE_RTL = !1;
  goog.i18n.bidi.IS_RTL =
    goog.i18n.bidi.FORCE_RTL ||
    ((goog.LOCALE.substring(0, 2).toLowerCase() == "ar" ||
      goog.LOCALE.substring(0, 2).toLowerCase() == "fa" ||
      goog.LOCALE.substring(0, 2).toLowerCase() == "he" ||
      goog.LOCALE.substring(0, 2).toLowerCase() == "iw" ||
      goog.LOCALE.substring(0, 2).toLowerCase() == "ps" ||
      goog.LOCALE.substring(0, 2).toLowerCase() == "sd" ||
      goog.LOCALE.substring(0, 2).toLowerCase() == "ug" ||
      goog.LOCALE.substring(0, 2).toLowerCase() == "ur" ||
      goog.LOCALE.substring(0, 2).toLowerCase() == "yi") &&
      (goog.LOCALE.length == 2 ||
        goog.LOCALE.substring(2, 3) == "-" ||
        goog.LOCALE.substring(2, 3) == "_")) ||
    (3 <= goog.LOCALE.length &&
      goog.LOCALE.substring(0, 3).toLowerCase() == "ckb" &&
      (goog.LOCALE.length == 3 ||
        goog.LOCALE.substring(3, 4) == "-" ||
        goog.LOCALE.substring(3, 4) == "_")) ||
    (7 <= goog.LOCALE.length &&
      (goog.LOCALE.substring(2, 3) == "-" ||
        goog.LOCALE.substring(2, 3) == "_") &&
      (goog.LOCALE.substring(3, 7).toLowerCase() == "adlm" ||
        goog.LOCALE.substring(3, 7).toLowerCase() == "arab" ||
        goog.LOCALE.substring(3, 7).toLowerCase() == "hebr" ||
        goog.LOCALE.substring(3, 7).toLowerCase() == "nkoo" ||
        goog.LOCALE.substring(3, 7).toLowerCase() == "rohg" ||
        goog.LOCALE.substring(3, 7).toLowerCase() == "thaa")) ||
    (8 <= goog.LOCALE.length &&
      (goog.LOCALE.substring(3, 4) == "-" ||
        goog.LOCALE.substring(3, 4) == "_") &&
      (goog.LOCALE.substring(4, 8).toLowerCase() == "adlm" ||
        goog.LOCALE.substring(4, 8).toLowerCase() == "arab" ||
        goog.LOCALE.substring(4, 8).toLowerCase() == "hebr" ||
        goog.LOCALE.substring(4, 8).toLowerCase() == "nkoo" ||
        goog.LOCALE.substring(4, 8).toLowerCase() == "rohg" ||
        goog.LOCALE.substring(4, 8).toLowerCase() == "thaa"));
  goog.i18n.bidi.Format = {
    LRE: "‪",
    RLE: "‫",
    PDF: "‬",
    LRM: "‎",
    RLM: "‏",
  };
  goog.i18n.bidi.Dir = {
    LTR: 1,
    RTL: -1,
    NEUTRAL: 0,
  };
  goog.i18n.bidi.RIGHT = "right";
  goog.i18n.bidi.LEFT = "left";
  goog.i18n.bidi.I18N_RIGHT = goog.i18n.bidi.IS_RTL
    ? goog.i18n.bidi.LEFT
    : goog.i18n.bidi.RIGHT;
  goog.i18n.bidi.I18N_LEFT = goog.i18n.bidi.IS_RTL
    ? goog.i18n.bidi.RIGHT
    : goog.i18n.bidi.LEFT;
  goog.i18n.bidi.toDir = function (_, _) {
    return typeof _ == "number"
      ? 0 < _
        ? goog.i18n.bidi.Dir.LTR
        : 0 > _
          ? goog.i18n.bidi.Dir.RTL
          : _
            ? null
            : goog.i18n.bidi.Dir.NEUTRAL
      : _ == null
        ? null
        : _
          ? goog.i18n.bidi.Dir.RTL
          : goog.i18n.bidi.Dir.LTR;
  };
  goog.i18n.bidi.ltrChars_ =
    "A-Za-zÀ-ÖØ-öø-ʸ̀-֐ऀ-῿‎Ⰰ-\uD801\uD804-\uD839\uD83C-\uDBFF豈-﬜︀-﹯﻽-￿";
  goog.i18n.bidi.rtlChars_ = "֑-ۯۺ-ࣿ‏\uD802-\uD803\uD83A-\uD83Bיִ-﷿ﹰ-ﻼ";
  goog.i18n.bidi.htmlSkipReg_ = /<[^>]*>|&[^;]+;/g;
  goog.i18n.bidi.stripHtmlIfNeeded_ = function (_, _) {
    return _ ? _.replace(goog.i18n.bidi.htmlSkipReg_, "") : _;
  };
  goog.i18n.bidi.rtlCharReg_ = new RegExp("[" + goog.i18n.bidi.rtlChars_ + "]");
  goog.i18n.bidi.ltrCharReg_ = new RegExp("[" + goog.i18n.bidi.ltrChars_ + "]");
  goog.i18n.bidi.hasAnyRtl = function (_, _) {
    return goog.i18n.bidi.rtlCharReg_.test(
      goog.i18n.bidi.stripHtmlIfNeeded_(_, _),
    );
  };
  goog.i18n.bidi.hasRtlChar = goog.i18n.bidi.hasAnyRtl;
  goog.i18n.bidi.hasAnyLtr = function (_, _) {
    return goog.i18n.bidi.ltrCharReg_.test(
      goog.i18n.bidi.stripHtmlIfNeeded_(_, _),
    );
  };
  goog.i18n.bidi.ltrRe_ = new RegExp("^[" + goog.i18n.bidi.ltrChars_ + "]");
  goog.i18n.bidi.rtlRe_ = new RegExp("^[" + goog.i18n.bidi.rtlChars_ + "]");
  goog.i18n.bidi.isRtlChar = function (_) {
    return goog.i18n.bidi.rtlRe_.test(_);
  };
  goog.i18n.bidi.isLtrChar = function (_) {
    return goog.i18n.bidi.ltrRe_.test(_);
  };
  goog.i18n.bidi.isNeutralChar = function (_) {
    return !goog.i18n.bidi.isLtrChar(_) && !goog.i18n.bidi.isRtlChar(_);
  };
  goog.i18n.bidi.ltrDirCheckRe_ = new RegExp(
    "^[^" + goog.i18n.bidi.rtlChars_ + "]*[" + goog.i18n.bidi.ltrChars_ + "]",
  );
  goog.i18n.bidi.rtlDirCheckRe_ = new RegExp(
    "^[^" + goog.i18n.bidi.ltrChars_ + "]*[" + goog.i18n.bidi.rtlChars_ + "]",
  );
  goog.i18n.bidi.startsWithRtl = function (_, _) {
    return goog.i18n.bidi.rtlDirCheckRe_.test(
      goog.i18n.bidi.stripHtmlIfNeeded_(_, _),
    );
  };
  goog.i18n.bidi.isRtlText = goog.i18n.bidi.startsWithRtl;
  goog.i18n.bidi.startsWithLtr = function (_, _) {
    return goog.i18n.bidi.ltrDirCheckRe_.test(
      goog.i18n.bidi.stripHtmlIfNeeded_(_, _),
    );
  };
  goog.i18n.bidi.isLtrText = goog.i18n.bidi.startsWithLtr;
  goog.i18n.bidi.isRequiredLtrRe_ = /^http:\/\/.*/;
  goog.i18n.bidi.isNeutralText = function (_, _) {
    return (
      (_ = goog.i18n.bidi.stripHtmlIfNeeded_(_, _)),
      goog.i18n.bidi.isRequiredLtrRe_.test(_) ||
        (!goog.i18n.bidi.hasAnyLtr(_) && !goog.i18n.bidi.hasAnyRtl(_))
    );
  };
  goog.i18n.bidi.ltrExitDirCheckRe_ = new RegExp(
    "[" + goog.i18n.bidi.ltrChars_ + "][^" + goog.i18n.bidi.rtlChars_ + "]*$",
  );
  goog.i18n.bidi.rtlExitDirCheckRe_ = new RegExp(
    "[" + goog.i18n.bidi.rtlChars_ + "][^" + goog.i18n.bidi.ltrChars_ + "]*$",
  );
  goog.i18n.bidi.endsWithLtr = function (_, _) {
    return goog.i18n.bidi.ltrExitDirCheckRe_.test(
      goog.i18n.bidi.stripHtmlIfNeeded_(_, _),
    );
  };
  goog.i18n.bidi.isLtrExitText = goog.i18n.bidi.endsWithLtr;
  goog.i18n.bidi.endsWithRtl = function (_, _) {
    return goog.i18n.bidi.rtlExitDirCheckRe_.test(
      goog.i18n.bidi.stripHtmlIfNeeded_(_, _),
    );
  };
  goog.i18n.bidi.isRtlExitText = goog.i18n.bidi.endsWithRtl;
  goog.i18n.bidi.rtlLocalesRe_ =
    /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;
  goog.i18n.bidi.isRtlLanguage = function (_) {
    return goog.i18n.bidi.rtlLocalesRe_.test(_);
  };
  goog.i18n.bidi.bracketGuardTextRe_ =
    /(\(.*?\)+)|(\[.*?\]+)|(\{.*?\}+)|(<.*?>+)/g;
  goog.i18n.bidi.guardBracketInText = function (_, _) {
    return (
      (_ = (_ === void 0 ? goog.i18n.bidi.hasAnyRtl(_) : _)
        ? goog.i18n.bidi.Format.RLM
        : goog.i18n.bidi.Format.LRM),
      _.replace(goog.i18n.bidi.bracketGuardTextRe_, _ + "$&" + _)
    );
  };
  goog.i18n.bidi.enforceRtlInHtml = function (_) {
    return _.charAt(0) == "<"
      ? _.replace(/<\w+/, "$& dir=rtl")
      : `
<span dir=rtl>` +
          _ +
          "</span>";
  };
  goog.i18n.bidi.enforceRtlInText = function (_) {
    return goog.i18n.bidi.Format.RLE + _ + goog.i18n.bidi.Format.PDF;
  };
  goog.i18n.bidi.enforceLtrInHtml = function (_) {
    return _.charAt(0) == "<"
      ? _.replace(/<\w+/, "$& dir=ltr")
      : `
<span dir=ltr>` +
          _ +
          "</span>";
  };
  goog.i18n.bidi.enforceLtrInText = function (_) {
    return goog.i18n.bidi.Format.LRE + _ + goog.i18n.bidi.Format.PDF;
  };
  goog.i18n.bidi.dimensionsRe_ =
    /:\s*([.\d][.\w]*)\s+([.\d][.\w]*)\s+([.\d][.\w]*)\s+([.\d][.\w]*)/g;
  goog.i18n.bidi.leftRe_ = /left/gi;
  goog.i18n.bidi.rightRe_ = /right/gi;
  goog.i18n.bidi.tempRe_ = /%%%%/g;
  goog.i18n.bidi.mirrorCSS = function (_) {
    return _.replace(goog.i18n.bidi.dimensionsRe_, ":$1 $4 $3 $2")
      .replace(goog.i18n.bidi.leftRe_, "%%%%")
      .replace(goog.i18n.bidi.rightRe_, goog.i18n.bidi.LEFT)
      .replace(goog.i18n.bidi.tempRe_, goog.i18n.bidi.RIGHT);
  };
  goog.i18n.bidi.doubleQuoteSubstituteRe_ = /([\u0591-\u05f2])"/g;
  goog.i18n.bidi.singleQuoteSubstituteRe_ = /([\u0591-\u05f2])'/g;
  goog.i18n.bidi.normalizeHebrewQuote = function (_) {
    return _.replace(goog.i18n.bidi.doubleQuoteSubstituteRe_, "$1״").replace(
      goog.i18n.bidi.singleQuoteSubstituteRe_,
      "$1׳",
    );
  };
  goog.i18n.bidi.wordSeparatorRe_ = /\s+/;
  goog.i18n.bidi.hasNumeralsRe_ = /[\d\u06f0-\u06f9]/;
  goog.i18n.bidi.rtlDetectionThreshold_ = 0.4;
  goog.i18n.bidi.estimateDirection = function (_, _) {
    var _ = 0,
      _ = 0,
      _ = !1;
    for (
      _ = goog.i18n.bidi
        .stripHtmlIfNeeded_(_, _)
        .split(goog.i18n.bidi.wordSeparatorRe_),
        _ = 0;
      _ < _.length;
      _++
    ) {
      var _ = _[_];
      goog.i18n.bidi.startsWithRtl(_)
        ? (_++, _++)
        : goog.i18n.bidi.isRequiredLtrRe_.test(_)
          ? (_ = !0)
          : goog.i18n.bidi.hasAnyLtr(_)
            ? _++
            : goog.i18n.bidi.hasNumeralsRe_.test(_) && (_ = !0);
    }
    return _ == 0
      ? _
        ? goog.i18n.bidi.Dir.LTR
        : goog.i18n.bidi.Dir.NEUTRAL
      : _ / _ > goog.i18n.bidi.rtlDetectionThreshold_
        ? goog.i18n.bidi.Dir.RTL
        : goog.i18n.bidi.Dir.LTR;
  };
  goog.i18n.bidi.detectRtlDirectionality = function (_, _) {
    return goog.i18n.bidi.estimateDirection(_, _) == goog.i18n.bidi.Dir.RTL;
  };
  goog.i18n.bidi.setElementDirAndAlign = function (_, _) {
    _ &&
      (_ = goog.i18n.bidi.toDir(_)) &&
      ((_.style.textAlign =
        _ == goog.i18n.bidi.Dir.RTL
          ? goog.i18n.bidi.RIGHT
          : goog.i18n.bidi.LEFT),
      (_.dir = _ == goog.i18n.bidi.Dir.RTL ? "rtl" : "ltr"));
  };
  goog.i18n.bidi.setElementDirByTextDirectionality = function (_, _) {
    switch (goog.i18n.bidi.estimateDirection(_)) {
      case goog.i18n.bidi.Dir.LTR:
        _.dir = "ltr";
        break;
      case goog.i18n.bidi.Dir.RTL:
        _.dir = "rtl";
        break;
      default:
        _.removeAttribute("dir");
    }
  };
  goog.i18n.bidi.DirectionalString = function () {};
  goog.html.TrustedResourceUrl = function (_, _) {
    (this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_ =
      (_ === goog.html.TrustedResourceUrl.CONSTRUCTOR_TOKEN_PRIVATE_ && _) ||
      ""),
      (this.TRUSTED_RESOURCE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ =
        goog.html.TrustedResourceUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_);
  };
  goog.html.TrustedResourceUrl.prototype.implementsGoogStringTypedString = !0;
  goog.html.TrustedResourceUrl.prototype.getTypedStringValue = function () {
    return this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_.toString();
  };
  goog.html.TrustedResourceUrl.prototype.implementsGoogI18nBidiDirectionalString =
    !0;
  goog.html.TrustedResourceUrl.prototype.getDirection = function () {
    return goog.i18n.bidi.Dir.LTR;
  };
  goog.html.TrustedResourceUrl.prototype.cloneWithParams = function (_, _) {
    var _ = goog.html.TrustedResourceUrl.unwrap(this);
    _ = goog.html.TrustedResourceUrl.URL_PARAM_PARSER_.exec(_);
    var _ = _[3] || "";
    return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(
      _[1] +
        goog.html.TrustedResourceUrl.stringifyParams_("?", _[2] || "", _) +
        goog.html.TrustedResourceUrl.stringifyParams_("#", _, _),
    );
  };
  goog.DEBUG &&
    (goog.html.TrustedResourceUrl.prototype.toString = function () {
      return (
        "TrustedResourceUrl{" +
        this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_ +
        "}"
      );
    });
  goog.html.TrustedResourceUrl.unwrap = function (_) {
    return goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(_).toString();
  };
  goog.html.TrustedResourceUrl.unwrapTrustedScriptURL = function (_) {
    return _ instanceof goog.html.TrustedResourceUrl &&
      _.constructor === goog.html.TrustedResourceUrl &&
      _.TRUSTED_RESOURCE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ ===
        goog.html.TrustedResourceUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_
      ? _.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_
      : (goog.asserts.fail(
          "expected object of type TrustedResourceUrl, got '" +
            _ +
            "' of type " +
            goog.typeOf(_),
        ),
        "type_error:TrustedResourceUrl");
  };
  goog.html.TrustedResourceUrl.format = function (_, _) {
    var _ = goog.string.Const.unwrap(_);
    if (!goog.html.TrustedResourceUrl.BASE_URL_.test(_))
      throw Error("Invalid TrustedResourceUrl format: " + _);
    return (
      (_ = _.replace(
        goog.html.TrustedResourceUrl.FORMAT_MARKER_,
        function (_, _) {
          if (!Object.prototype.hasOwnProperty.call(_, _))
            throw Error(
              'Found marker, "' +
                _ +
                '", in format string, "' +
                _ +
                '", but no valid label mapping found in args: ' +
                JSON.stringify(_),
            );
          return (
            (_ = _[_]),
            _ instanceof goog.string.Const
              ? goog.string.Const.unwrap(_)
              : encodeURIComponent(String(_))
          );
        },
      )),
      goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(
        _,
      )
    );
  };
  goog.html.TrustedResourceUrl.FORMAT_MARKER_ = /%{(\w+)}/g;
  goog.html.TrustedResourceUrl.BASE_URL_ =
    /^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i;
  goog.html.TrustedResourceUrl.URL_PARAM_PARSER_ =
    /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/;
  goog.html.TrustedResourceUrl.formatWithParams = function (_, _, _, _) {
    return goog.html.TrustedResourceUrl.format(_, _).cloneWithParams(_, _);
  };
  goog.html.TrustedResourceUrl.fromConstant = function (_) {
    return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(
      goog.string.Const.unwrap(_),
    );
  };
  goog.html.TrustedResourceUrl.fromConstants = function (_) {
    for (var _ = "", _ = 0; _ < _.length; _++)
      _ += goog.string.Const.unwrap(_[_]);
    return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(
      _,
    );
  };
  goog.html.TrustedResourceUrl.fromSafeScript = function (_) {
    return (
      (_ = goog._.blob.getBlobWithProperties(
        [goog.html.SafeScript.unwrap(_)],
        "text/javascript",
      )),
      (_ = goog._.url.createObjectUrl(_)),
      goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(
        _,
      )
    );
  };
  goog.html.TrustedResourceUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {};
  goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse =
    function (_) {
      return (
        (_ = goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY
          ? goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY.createScriptURL(
              _,
            )
          : _),
        new goog.html.TrustedResourceUrl(
          goog.html.TrustedResourceUrl.CONSTRUCTOR_TOKEN_PRIVATE_,
          _,
        )
      );
    };
  goog.html.TrustedResourceUrl.stringifyParams_ = function (_, _, _) {
    if (_ == null) return _;
    if (typeof _ == "string") return _ ? _ + encodeURIComponent(_) : "";
    for (var _ in _) {
      var _ = _[_];
      _ = Array.isArray(_) ? _ : [_];
      for (var _ = 0; _ < _.length; _++) {
        var _ = _[_];
        _ != null &&
          (_ || (_ = _),
          (_ +=
            (_.length > _.length ? "&" : "") +
            encodeURIComponent(_) +
            "=" +
            encodeURIComponent(String(_))));
      }
    }
    return _;
  };
  goog.html.TrustedResourceUrl.CONSTRUCTOR_TOKEN_PRIVATE_ = {};
  goog.string.internal = {};
  goog.string.internal.startsWith = function (_, _) {
    return _.lastIndexOf(_, 0) == 0;
  };
  goog.string.internal.endsWith = function (_, _) {
    var _ = _.length - _.length;
    return 0 <= _ && _.indexOf(_, _) == _;
  };
  goog.string.internal.caseInsensitiveStartsWith = function (_, _) {
    return (
      goog.string.internal.caseInsensitiveCompare(_, _.substr(0, _.length)) == 0
    );
  };
  goog.string.internal.caseInsensitiveEndsWith = function (_, _) {
    return (
      goog.string.internal.caseInsensitiveCompare(
        _,
        _.substr(_.length - _.length, _.length),
      ) == 0
    );
  };
  goog.string.internal.caseInsensitiveEquals = function (_, _) {
    return _.toLowerCase() == _.toLowerCase();
  };
  goog.string.internal.isEmptyOrWhitespace = function (_) {
    return /^[\s\xa0]*$/.test(_);
  };
  goog.string.internal.trim =
    goog.TRUSTED_SITE && String.prototype.trim
      ? function (_) {
          return _.trim();
        }
      : function (_) {
          return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(_)[1];
        };
  goog.string.internal.caseInsensitiveCompare = function (_, _) {
    return (
      (_ = String(_).toLowerCase()),
      (_ = String(_).toLowerCase()),
      _ < _ ? -1 : _ == _ ? 0 : 1
    );
  };
  goog.string.internal.newLineToBr = function (_, _) {
    return _.replace(/(\r\n|\r|\n)/g, _ ? "<br />" : "<br>");
  };
  goog.string.internal.htmlEscape = function (_, _) {
    if (_)
      _ = _.replace(goog.string.internal.AMP_RE_, "&amp;")
        .replace(goog.string.internal.LT_RE_, "&lt;")
        .replace(goog.string.internal.GT_RE_, "&gt;")
        .replace(goog.string.internal.QUOT_RE_, "&quot;")
        .replace(goog.string.internal.SINGLE_QUOTE_RE_, "&#39;")
        .replace(goog.string.internal.NULL_RE_, "&#0;");
    else {
      if (!goog.string.internal.ALL_RE_.test(_)) return _;
      _.indexOf("&") != -1 &&
        (_ = _.replace(goog.string.internal.AMP_RE_, "&amp;")),
        _.indexOf("<") != -1 &&
          (_ = _.replace(goog.string.internal.LT_RE_, "&lt;")),
        _.indexOf(">") != -1 &&
          (_ = _.replace(goog.string.internal.GT_RE_, "&gt;")),
        _.indexOf('"') != -1 &&
          (_ = _.replace(goog.string.internal.QUOT_RE_, "&quot;")),
        _.indexOf("'") != -1 &&
          (_ = _.replace(goog.string.internal.SINGLE_QUOTE_RE_, "&#39;")),
        _.indexOf("\0") != -1 &&
          (_ = _.replace(goog.string.internal.NULL_RE_, "&#0;"));
    }
    return _;
  };
  goog.string.internal.AMP_RE_ = /&/g;
  goog.string.internal.LT_RE_ = /</g;
  goog.string.internal.GT_RE_ = />/g;
  goog.string.internal.QUOT_RE_ = /"/g;
  goog.string.internal.SINGLE_QUOTE_RE_ = /'/g;
  goog.string.internal.NULL_RE_ = /\x00/g;
  goog.string.internal.ALL_RE_ = /[\x00&<>"']/;
  goog.string.internal.whitespaceEscape = function (_, _) {
    return goog.string.internal.newLineToBr(_.replace(/  /g, " &#160;"), _);
  };
  goog.string.internal.contains = function (_, _) {
    return _.indexOf(_) != -1;
  };
  goog.string.internal.caseInsensitiveContains = function (_, _) {
    return goog.string.internal.contains(_.toLowerCase(), _.toLowerCase());
  };
  goog.string.internal.compareVersions = function (_, _) {
    var _ = 0;
    (_ = goog.string.internal.trim(String(_)).split(".")),
      (_ = goog.string.internal.trim(String(_)).split("."));
    for (var _ = Math.max(_.length, _.length), _ = 0; _ == 0 && _ < _; _++) {
      var _ = _[_] || "",
        _ = _[_] || "";
      do {
        if (
          ((_ = /(\d*)(\D*)(.*)/.exec(_) || ["", "", "", ""]),
          (_ = /(\d*)(\D*)(.*)/.exec(_) || ["", "", "", ""]),
          _[0].length == 0 && _[0].length == 0)
        )
          break;
        _ = _[1].length == 0 ? 0 : parseInt(_[1], 10);
        var _ = _[1].length == 0 ? 0 : parseInt(_[1], 10);
        (_ =
          goog.string.internal.compareElements_(_, _) ||
          goog.string.internal.compareElements_(
            _[2].length == 0,
            _[2].length == 0,
          ) ||
          goog.string.internal.compareElements_(_[2], _[2])),
          (_ = _[3]),
          (_ = _[3]);
      } while (_ == 0);
    }
    return _;
  };
  goog.string.internal.compareElements_ = function (_, _) {
    return _ < _ ? -1 : _ > _ ? 1 : 0;
  };
  goog.html.SafeUrl = function (_, _) {
    (this.privateDoNotAccessOrElseSafeUrlWrappedValue_ =
      (_ === goog.html.SafeUrl.CONSTRUCTOR_TOKEN_PRIVATE_ && _) || ""),
      (this.SAFE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ =
        goog.html.SafeUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_);
  };
  goog.html.SafeUrl.INNOCUOUS_STRING = "about:invalid#zClosurez";
  goog.html.SafeUrl.prototype.implementsGoogStringTypedString = !0;
  goog.html.SafeUrl.prototype.getTypedStringValue = function () {
    return this.privateDoNotAccessOrElseSafeUrlWrappedValue_.toString();
  };
  goog.html.SafeUrl.prototype.implementsGoogI18nBidiDirectionalString = !0;
  goog.html.SafeUrl.prototype.getDirection = function () {
    return goog.i18n.bidi.Dir.LTR;
  };
  goog.DEBUG &&
    (goog.html.SafeUrl.prototype.toString = function () {
      return (
        "SafeUrl{" + this.privateDoNotAccessOrElseSafeUrlWrappedValue_ + "}"
      );
    });
  goog.html.SafeUrl.unwrap = function (_) {
    return _ instanceof goog.html.SafeUrl &&
      _.constructor === goog.html.SafeUrl &&
      _.SAFE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ ===
        goog.html.SafeUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_
      ? _.privateDoNotAccessOrElseSafeUrlWrappedValue_
      : (goog.asserts.fail(
          "expected object of type SafeUrl, got '" +
            _ +
            "' of type " +
            goog.typeOf(_),
        ),
        "type_error:SafeUrl");
  };
  goog.html.SafeUrl.fromConstant = function (_) {
    return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(
      goog.string.Const.unwrap(_),
    );
  };
  goog.html.SAFE_MIME_TYPE_PATTERN_ =
    /^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|text\/csv|video\/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i;
  goog.html.SafeUrl.isSafeMimeType = function (_) {
    return goog.html.SAFE_MIME_TYPE_PATTERN_.test(_);
  };
  goog.html.SafeUrl.fromBlob = function (_) {
    return (
      (_ = goog.html.SafeUrl.isSafeMimeType(_.type)
        ? goog._.url.createObjectUrl(_)
        : goog.html.SafeUrl.INNOCUOUS_STRING),
      goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(_)
    );
  };
  goog.html.SafeUrl.fromMediaSource = function (_) {
    return (
      goog.asserts.assert(
        "MediaSource" in goog.global,
        "No support for MediaSource",
      ),
      (_ =
        _ instanceof MediaSource
          ? goog._.url.createObjectUrl(_)
          : goog.html.SafeUrl.INNOCUOUS_STRING),
      goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(_)
    );
  };
  goog.html.DATA_URL_PATTERN_ = /^data:(.*);base64,[a-z0-9+\/]+=*$/i;
  goog.html.SafeUrl.fromDataUrl = function (_) {
    _ = _.replace(/(%0A|%0D)/g, "");
    var _ = _.match(goog.html.DATA_URL_PATTERN_);
    return (
      (_ = _ && goog.html.SafeUrl.isSafeMimeType(_[1])),
      goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(
        _ ? _ : goog.html.SafeUrl.INNOCUOUS_STRING,
      )
    );
  };
  goog.html.SafeUrl.fromTelUrl = function (_) {
    return (
      goog.string.internal.caseInsensitiveStartsWith(_, "tel:") ||
        (_ = goog.html.SafeUrl.INNOCUOUS_STRING),
      goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(_)
    );
  };
  goog.html.SIP_URL_PATTERN_ =
    /^sip[s]?:[+a-z0-9_.!$%&'*\/=^`{|}~-]+@([a-z0-9-]+\.)+[a-z0-9]{2,63}$/i;
  goog.html.SafeUrl.fromSipUrl = function (_) {
    return (
      goog.html.SIP_URL_PATTERN_.test(decodeURIComponent(_)) ||
        (_ = goog.html.SafeUrl.INNOCUOUS_STRING),
      goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(_)
    );
  };
  goog.html.SafeUrl.fromFacebookMessengerUrl = function (_) {
    return (
      goog.string.internal.caseInsensitiveStartsWith(
        _,
        "fb-messenger://share",
      ) || (_ = goog.html.SafeUrl.INNOCUOUS_STRING),
      goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(_)
    );
  };
  goog.html.SafeUrl.fromWhatsAppUrl = function (_) {
    return (
      goog.string.internal.caseInsensitiveStartsWith(_, "whatsapp://send") ||
        (_ = goog.html.SafeUrl.INNOCUOUS_STRING),
      goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(_)
    );
  };
  goog.html.SafeUrl.fromSmsUrl = function (_) {
    return (
      (goog.string.internal.caseInsensitiveStartsWith(_, "sms:") &&
        goog.html.SafeUrl.isSmsUrlBodyValid_(_)) ||
        (_ = goog.html.SafeUrl.INNOCUOUS_STRING),
      goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(_)
    );
  };
  goog.html.SafeUrl.isSmsUrlBodyValid_ = function (_) {
    var _ = _.indexOf("#");
    if ((0 < _ && (_ = _.substring(0, _)), (_ = _.match(/[?&]body=/gi)), !_))
      return !0;
    if (1 < _.length) return !1;
    if (((_ = _.match(/[?&]body=([^&]*)/)[1]), !_)) return !0;
    try {
      decodeURIComponent(_);
    } catch {
      return !1;
    }
    return /^(?:[a-z0-9\-_.~]|%[0-9a-f]{2})+$/i.test(_);
  };
  goog.html.SafeUrl.fromSshUrl = function (_) {
    return (
      goog.string.internal.caseInsensitiveStartsWith(_, "ssh://") ||
        (_ = goog.html.SafeUrl.INNOCUOUS_STRING),
      goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(_)
    );
  };
  goog.html.SafeUrl.sanitizeChromeExtensionUrl = function (_, _) {
    return goog.html.SafeUrl.sanitizeExtensionUrl_(
      /^chrome-extension:\/\/([^\/]+)\//,
      _,
      _,
    );
  };
  goog.html.SafeUrl.sanitizeFirefoxExtensionUrl = function (_, _) {
    return goog.html.SafeUrl.sanitizeExtensionUrl_(
      /^moz-extension:\/\/([^\/]+)\//,
      _,
      _,
    );
  };
  goog.html.SafeUrl.sanitizeEdgeExtensionUrl = function (_, _) {
    return goog.html.SafeUrl.sanitizeExtensionUrl_(
      /^ms-browser-extension:\/\/([^\/]+)\//,
      _,
      _,
    );
  };
  goog.html.SafeUrl.sanitizeExtensionUrl_ = function (_, _, _) {
    return (
      (_ = _.exec(_))
        ? ((_ = _[1]),
          (_ instanceof goog.string.Const
            ? [goog.string.Const.unwrap(_)]
            : _.map(function (_) {
                return goog.string.Const.unwrap(_);
              })
          ).indexOf(_) == -1 && (_ = goog.html.SafeUrl.INNOCUOUS_STRING))
        : (_ = goog.html.SafeUrl.INNOCUOUS_STRING),
      goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(_)
    );
  };
  goog.html.SafeUrl.fromTrustedResourceUrl = function (_) {
    return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(
      goog.html.TrustedResourceUrl.unwrap(_),
    );
  };
  goog.html.SAFE_URL_PATTERN_ =
    /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
  goog.html.SafeUrl.SAFE_URL_PATTERN = goog.html.SAFE_URL_PATTERN_;
  goog.html.SafeUrl.sanitize = function (_) {
    return _ instanceof goog.html.SafeUrl
      ? _
      : ((_ =
          typeof _ == "object" && _.implementsGoogStringTypedString
            ? _.getTypedStringValue()
            : String(_)),
        goog.html.SAFE_URL_PATTERN_.test(_) ||
          (_ = goog.html.SafeUrl.INNOCUOUS_STRING),
        goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(_));
  };
  goog.html.SafeUrl.sanitizeAssertUnchanged = function (_, _) {
    return _ instanceof goog.html.SafeUrl
      ? _
      : ((_ =
          typeof _ == "object" && _.implementsGoogStringTypedString
            ? _.getTypedStringValue()
            : String(_)),
        _ &&
        /^data:/i.test(_) &&
        ((_ = goog.html.SafeUrl.fromDataUrl(_)), _.getTypedStringValue() == _)
          ? _
          : (goog.asserts.assert(
              goog.html.SAFE_URL_PATTERN_.test(_),
              "%s does not match the safe URL pattern",
              _,
            ) || (_ = goog.html.SafeUrl.INNOCUOUS_STRING),
            goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(
              _,
            )));
  };
  goog.html.SafeUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {};
  goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse = function (
    _,
  ) {
    return new goog.html.SafeUrl(
      goog.html.SafeUrl.CONSTRUCTOR_TOKEN_PRIVATE_,
      _,
    );
  };
  goog.html.SafeUrl.ABOUT_BLANK =
    goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(
      "about:blank",
    );
  goog.html.SafeUrl.CONSTRUCTOR_TOKEN_PRIVATE_ = {};
  goog.html.SafeStyle = function () {
    (this.privateDoNotAccessOrElseSafeStyleWrappedValue_ = ""),
      (this.SAFE_STYLE_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ =
        goog.html.SafeStyle.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_);
  };
  goog.html.SafeStyle.prototype.implementsGoogStringTypedString = !0;
  goog.html.SafeStyle.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {};
  goog.html.SafeStyle.fromConstant = function (_) {
    return (
      (_ = goog.string.Const.unwrap(_)),
      _.length === 0
        ? goog.html.SafeStyle.EMPTY
        : (goog.asserts.assert(
            goog.string.internal.endsWith(_, ";"),
            "Last character of style string is not ';': " + _,
          ),
          goog.asserts.assert(
            goog.string.internal.contains(_, ":"),
            `Style string must contain at least one ':', to specify a "name: value" pair: ` +
              _,
          ),
          goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(
            _,
          ))
    );
  };
  goog.html.SafeStyle.prototype.getTypedStringValue = function () {
    return this.privateDoNotAccessOrElseSafeStyleWrappedValue_;
  };
  goog.DEBUG &&
    (goog.html.SafeStyle.prototype.toString = function () {
      return (
        "SafeStyle{" + this.privateDoNotAccessOrElseSafeStyleWrappedValue_ + "}"
      );
    });
  goog.html.SafeStyle.unwrap = function (_) {
    return _ instanceof goog.html.SafeStyle &&
      _.constructor === goog.html.SafeStyle &&
      _.SAFE_STYLE_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ ===
        goog.html.SafeStyle.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_
      ? _.privateDoNotAccessOrElseSafeStyleWrappedValue_
      : (goog.asserts.fail(
          "expected object of type SafeStyle, got '" +
            _ +
            "' of type " +
            goog.typeOf(_),
        ),
        "type_error:SafeStyle");
  };
  goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse =
    function (_) {
      return new goog.html.SafeStyle().initSecurityPrivateDoNotAccessOrElse_(_);
    };
  goog.html.SafeStyle.prototype.initSecurityPrivateDoNotAccessOrElse_ =
    function (_) {
      return (this.privateDoNotAccessOrElseSafeStyleWrappedValue_ = _), this;
    };
  goog.html.SafeStyle.EMPTY =
    goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse("");
  goog.html.SafeStyle.INNOCUOUS_STRING = "zClosurez";
  goog.html.SafeStyle.create = function (_) {
    var _ = "",
      _;
    for (_ in _) {
      if (!/^[-_a-zA-Z0-9]+$/.test(_))
        throw Error("Name allows only [-_a-zA-Z0-9], got: " + _);
      var _ = _[_];
      _ != null &&
        ((_ = Array.isArray(_)
          ? goog.array
              .map(_, goog.html.SafeStyle.sanitizePropertyValue_)
              .join(" ")
          : goog.html.SafeStyle.sanitizePropertyValue_(_)),
        (_ += _ + ":" + _ + ";"));
    }
    return _
      ? goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(_)
      : goog.html.SafeStyle.EMPTY;
  };
  goog.html.SafeStyle.sanitizePropertyValue_ = function (_) {
    if (_ instanceof goog.html.SafeUrl)
      return (
        'url("' +
        goog.html.SafeUrl.unwrap(_)
          .replace(/</g, "%3c")
          .replace(/[\\"]/g, "\\$&") +
        '")'
      );
    if (
      ((_ =
        _ instanceof goog.string.Const
          ? goog.string.Const.unwrap(_)
          : goog.html.SafeStyle.sanitizePropertyValueString_(String(_))),
      /[{;}]/.test(_))
    )
      throw new goog.asserts.AssertionError(
        "Value does not allow [{;}], got: %s.",
        [_],
      );
    return _;
  };
  goog.html.SafeStyle.sanitizePropertyValueString_ = function (_) {
    var _ = _.replace(goog.html.SafeStyle.FUNCTIONS_RE_, "$1")
      .replace(goog.html.SafeStyle.FUNCTIONS_RE_, "$1")
      .replace(goog.html.SafeStyle.URL_RE_, "url");
    if (goog.html.SafeStyle.VALUE_RE_.test(_)) {
      if (goog.html.SafeStyle.COMMENT_RE_.test(_))
        return (
          goog.asserts.fail("String value disallows comments, got: " + _),
          goog.html.SafeStyle.INNOCUOUS_STRING
        );
      if (!goog.html.SafeStyle.hasBalancedQuotes_(_))
        return (
          goog.asserts.fail("String value requires balanced quotes, got: " + _),
          goog.html.SafeStyle.INNOCUOUS_STRING
        );
      if (!goog.html.SafeStyle.hasBalancedSquareBrackets_(_))
        return (
          goog.asserts.fail(
            "String value requires balanced square brackets and one identifier per pair of brackets, got: " +
              _,
          ),
          goog.html.SafeStyle.INNOCUOUS_STRING
        );
    } else
      return (
        goog.asserts.fail(
          "String value allows only " +
            goog.html.SafeStyle.VALUE_ALLOWED_CHARS_ +
            " and simple functions, got: " +
            _,
        ),
        goog.html.SafeStyle.INNOCUOUS_STRING
      );
    return goog.html.SafeStyle.sanitizeUrl_(_);
  };
  goog.html.SafeStyle.hasBalancedQuotes_ = function (_) {
    for (var _ = !0, _ = !0, _ = 0; _ < _.length; _++) {
      var _ = _.charAt(_);
      _ == "'" && _ ? (_ = !_) : _ == '"' && _ && (_ = !_);
    }
    return _ && _;
  };
  goog.html.SafeStyle.hasBalancedSquareBrackets_ = function (_) {
    for (var _ = !0, _ = /^[-_a-zA-Z0-9]$/, _ = 0; _ < _.length; _++) {
      var _ = _.charAt(_);
      if (_ == "]") {
        if (_) return !1;
        _ = !0;
      } else if (_ == "[") {
        if (!_) return !1;
        _ = !1;
      } else if (!_ && !_.test(_)) return !1;
    }
    return _;
  };
  goog.html.SafeStyle.VALUE_ALLOWED_CHARS_ = `[-,."'%_!# a-zA-Z0-9\\[\\]]`;
  goog.html.SafeStyle.VALUE_RE_ = new RegExp(
    "^" + goog.html.SafeStyle.VALUE_ALLOWED_CHARS_ + "+$",
  );
  goog.html.SafeStyle.URL_RE_ =
    /\b(url\([ \t\n]*)('[ -&(-\[\]-~]*'|"[ !#-\[\]-~]*"|[!#-&*-\[\]-~]*)([ \t\n]*\))/g;
  goog.html.SafeStyle.ALLOWED_FUNCTIONS_ =
    "calc cubic-bezier fit-content hsl hsla linear-gradient matrix minmax repeat rgb rgba (rotate|scale|translate)(X|Y|Z|3d)?".split(
      " ",
    );
  goog.html.SafeStyle.FUNCTIONS_RE_ = new RegExp(
    "\\b(" +
      goog.html.SafeStyle.ALLOWED_FUNCTIONS_.join("|") +
      ")\\([-+*/0-9a-z.%\\[\\], ]+\\)",
    "g",
  );
  goog.html.SafeStyle.COMMENT_RE_ = /\/\*/;
  goog.html.SafeStyle.sanitizeUrl_ = function (_) {
    return _.replace(goog.html.SafeStyle.URL_RE_, function (_, _, _, _) {
      var _ = "";
      return (
        (_ = _.replace(/^(['"])(.*)\1$/, function (_, _, _) {
          return (_ = _), _;
        })),
        (_ = goog.html.SafeUrl.sanitize(_).getTypedStringValue()),
        _ + _ + _ + _ + _
      );
    });
  };
  goog.html.SafeStyle.concat = function (_) {
    var _ = "",
      _ = function (_) {
        Array.isArray(_)
          ? goog.array.forEach(_, _)
          : (_ += goog.html.SafeStyle.unwrap(_));
      };
    return (
      goog.array.forEach(arguments, _),
      _
        ? goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(_)
        : goog.html.SafeStyle.EMPTY
    );
  };
  goog.html.SafeStyleSheet = function () {
    (this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_ = ""),
      (this.SAFE_STYLE_SHEET_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ =
        goog.html.SafeStyleSheet.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_);
  };
  goog.html.SafeStyleSheet.prototype.implementsGoogStringTypedString = !0;
  goog.html.SafeStyleSheet.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {};
  goog.html.SafeStyleSheet.createRule = function (_, _) {
    if (goog.string.internal.contains(_, "<"))
      throw Error("Selector does not allow '<', got: " + _);
    var _ = _.replace(/('|")((?!\1)[^\r\n\f\\]|\\[\s\S])*\1/g, "");
    if (!/^[-_a-zA-Z0-9#.:* ,>+~[\]()=^$|]+$/.test(_))
      throw Error(
        "Selector allows only [-_a-zA-Z0-9#.:* ,>+~[\\]()=^$|] and strings, got: " +
          _,
      );
    if (!goog.html.SafeStyleSheet.hasBalancedBrackets_(_))
      throw Error("() and [] in selector must be balanced, got: " + _);
    return (
      _ instanceof goog.html.SafeStyle || (_ = goog.html.SafeStyle.create(_)),
      (_ =
        _ + "{" + goog.html.SafeStyle.unwrap(_).replace(/</g, "\\3C ") + "}"),
      goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(
        _,
      )
    );
  };
  goog.html.SafeStyleSheet.hasBalancedBrackets_ = function (_) {
    for (
      var _ = {
          "(": ")",
          "[": "]",
        },
        _ = [],
        _ = 0;
      _ < _.length;
      _++
    ) {
      var _ = _[_];
      if (_[_]) _.push(_[_]);
      else if (goog.object.contains(_, _) && _.pop() != _) return !1;
    }
    return _.length == 0;
  };
  goog.html.SafeStyleSheet.concat = function (_) {
    var _ = "",
      _ = function (_) {
        Array.isArray(_)
          ? goog.array.forEach(_, _)
          : (_ += goog.html.SafeStyleSheet.unwrap(_));
      };
    return (
      goog.array.forEach(arguments, _),
      goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(
        _,
      )
    );
  };
  goog.html.SafeStyleSheet.fromConstant = function (_) {
    return (
      (_ = goog.string.Const.unwrap(_)),
      _.length === 0
        ? goog.html.SafeStyleSheet.EMPTY
        : (goog.asserts.assert(
            !goog.string.internal.contains(_, "<"),
            "Forbidden '<' character in style sheet string: " + _,
          ),
          goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(
            _,
          ))
    );
  };
  goog.html.SafeStyleSheet.prototype.getTypedStringValue = function () {
    return this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_;
  };
  goog.DEBUG &&
    (goog.html.SafeStyleSheet.prototype.toString = function () {
      return (
        "SafeStyleSheet{" +
        this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_ +
        "}"
      );
    });
  goog.html.SafeStyleSheet.unwrap = function (_) {
    return _ instanceof goog.html.SafeStyleSheet &&
      _.constructor === goog.html.SafeStyleSheet &&
      _.SAFE_STYLE_SHEET_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ ===
        goog.html.SafeStyleSheet.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_
      ? _.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_
      : (goog.asserts.fail(
          "expected object of type SafeStyleSheet, got '" +
            _ +
            "' of type " +
            goog.typeOf(_),
        ),
        "type_error:SafeStyleSheet");
  };
  goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse =
    function (_) {
      return new goog.html.SafeStyleSheet().initSecurityPrivateDoNotAccessOrElse_(
        _,
      );
    };
  goog.html.SafeStyleSheet.prototype.initSecurityPrivateDoNotAccessOrElse_ =
    function (_) {
      return (
        (this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_ = _), this
      );
    };
  goog.html.SafeStyleSheet.EMPTY =
    goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(
      "",
    );
  goog.labs = {};
  goog.labs.userAgent = {};
  goog.labs.userAgent.util = {};
  goog.labs.userAgent.util.getNativeUserAgentString_ = function () {
    var _ = goog.labs.userAgent.util.getNavigator_();
    return _ && (_ = _.userAgent) ? _ : "";
  };
  goog.labs.userAgent.util.getNavigator_ = function () {
    return goog.global.navigator;
  };
  goog.labs.userAgent.util.userAgent_ =
    goog.labs.userAgent.util.getNativeUserAgentString_();
  goog.labs.userAgent.util.setUserAgent = function (_) {
    goog.labs.userAgent.util.userAgent_ =
      _ || goog.labs.userAgent.util.getNativeUserAgentString_();
  };
  goog.labs.userAgent.util.getUserAgent = function () {
    return goog.labs.userAgent.util.userAgent_;
  };
  goog.labs.userAgent.util.matchUserAgent = function (_) {
    var _ = goog.labs.userAgent.util.getUserAgent();
    return goog.string.internal.contains(_, _);
  };
  goog.labs.userAgent.util.matchUserAgentIgnoreCase = function (_) {
    var _ = goog.labs.userAgent.util.getUserAgent();
    return goog.string.internal.caseInsensitiveContains(_, _);
  };
  goog.labs.userAgent.util.extractVersionTuples = function (_) {
    for (
      var _ = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g, _ = [], _;
      (_ = _.exec(_));
    )
      _.push([_[1], _[2], _[3] || void 0]);
    return _;
  };
  goog.labs.userAgent.browser = {};
  goog.labs.userAgent.browser.matchOpera_ = function () {
    return goog.labs.userAgent.util.matchUserAgent("Opera");
  };
  goog.labs.userAgent.browser.matchIE_ = function () {
    return (
      goog.labs.userAgent.util.matchUserAgent("Trident") ||
      goog.labs.userAgent.util.matchUserAgent("MSIE")
    );
  };
  goog.labs.userAgent.browser.matchEdgeHtml_ = function () {
    return goog.labs.userAgent.util.matchUserAgent("Edge");
  };
  goog.labs.userAgent.browser.matchEdgeChromium_ = function () {
    return goog.labs.userAgent.util.matchUserAgent("Edg/");
  };
  goog.labs.userAgent.browser.matchOperaChromium_ = function () {
    return goog.labs.userAgent.util.matchUserAgent("OPR");
  };
  goog.labs.userAgent.browser.matchFirefox_ = function () {
    return (
      goog.labs.userAgent.util.matchUserAgent("Firefox") ||
      goog.labs.userAgent.util.matchUserAgent("FxiOS")
    );
  };
  goog.labs.userAgent.browser.matchSafari_ = function () {
    return (
      goog.labs.userAgent.util.matchUserAgent("Safari") &&
      !(
        goog.labs.userAgent.browser.matchChrome_() ||
        goog.labs.userAgent.browser.matchCoast_() ||
        goog.labs.userAgent.browser.matchOpera_() ||
        goog.labs.userAgent.browser.matchEdgeHtml_() ||
        goog.labs.userAgent.browser.matchEdgeChromium_() ||
        goog.labs.userAgent.browser.matchOperaChromium_() ||
        goog.labs.userAgent.browser.matchFirefox_() ||
        goog.labs.userAgent.browser.isSilk() ||
        goog.labs.userAgent.util.matchUserAgent("Android")
      )
    );
  };
  goog.labs.userAgent.browser.matchCoast_ = function () {
    return goog.labs.userAgent.util.matchUserAgent("Coast");
  };
  goog.labs.userAgent.browser.matchIosWebview_ = function () {
    return (
      (goog.labs.userAgent.util.matchUserAgent("iPad") ||
        goog.labs.userAgent.util.matchUserAgent("iPhone")) &&
      !goog.labs.userAgent.browser.matchSafari_() &&
      !goog.labs.userAgent.browser.matchChrome_() &&
      !goog.labs.userAgent.browser.matchCoast_() &&
      !goog.labs.userAgent.browser.matchFirefox_() &&
      goog.labs.userAgent.util.matchUserAgent("AppleWebKit")
    );
  };
  goog.labs.userAgent.browser.matchChrome_ = function () {
    return (
      (goog.labs.userAgent.util.matchUserAgent("Chrome") ||
        goog.labs.userAgent.util.matchUserAgent("CriOS")) &&
      !goog.labs.userAgent.browser.matchEdgeHtml_()
    );
  };
  goog.labs.userAgent.browser.matchAndroidBrowser_ = function () {
    return (
      goog.labs.userAgent.util.matchUserAgent("Android") &&
      !(
        goog.labs.userAgent.browser.isChrome() ||
        goog.labs.userAgent.browser.isFirefox() ||
        goog.labs.userAgent.browser.isOpera() ||
        goog.labs.userAgent.browser.isSilk()
      )
    );
  };
  goog.labs.userAgent.browser.isOpera = goog.labs.userAgent.browser.matchOpera_;
  goog.labs.userAgent.browser.isIE = goog.labs.userAgent.browser.matchIE_;
  goog.labs.userAgent.browser.isEdge =
    goog.labs.userAgent.browser.matchEdgeHtml_;
  goog.labs.userAgent.browser.isEdgeChromium =
    goog.labs.userAgent.browser.matchEdgeChromium_;
  goog.labs.userAgent.browser.isOperaChromium =
    goog.labs.userAgent.browser.matchOperaChromium_;
  goog.labs.userAgent.browser.isFirefox =
    goog.labs.userAgent.browser.matchFirefox_;
  goog.labs.userAgent.browser.isSafari =
    goog.labs.userAgent.browser.matchSafari_;
  goog.labs.userAgent.browser.isCoast = goog.labs.userAgent.browser.matchCoast_;
  goog.labs.userAgent.browser.isIosWebview =
    goog.labs.userAgent.browser.matchIosWebview_;
  goog.labs.userAgent.browser.isChrome =
    goog.labs.userAgent.browser.matchChrome_;
  goog.labs.userAgent.browser.isAndroidBrowser =
    goog.labs.userAgent.browser.matchAndroidBrowser_;
  goog.labs.userAgent.browser.isSilk = function () {
    return goog.labs.userAgent.util.matchUserAgent("Silk");
  };
  goog.labs.userAgent.browser.getVersion = function () {
    function _(_) {
      return (_ = goog.array.find(_, _)), _[_] || "";
    }
    var _ = goog.labs.userAgent.util.getUserAgent();
    if (goog.labs.userAgent.browser.isIE())
      return goog.labs.userAgent.browser.getIEVersion_(_);
    _ = goog.labs.userAgent.util.extractVersionTuples(_);
    var _ = {};
    goog.array.forEach(_, function (_) {
      _[_[0]] = _[1];
    });
    var _ = goog.partial(goog.object.containsKey, _);
    return goog.labs.userAgent.browser.isOpera()
      ? _(["Version", "Opera"])
      : goog.labs.userAgent.browser.isEdge()
        ? _(["Edge"])
        : goog.labs.userAgent.browser.isEdgeChromium()
          ? _(["Edg"])
          : goog.labs.userAgent.browser.isChrome()
            ? _(["Chrome", "CriOS", "HeadlessChrome"])
            : ((_ = _[2]) && _[1]) || "";
  };
  goog.labs.userAgent.browser.isVersionOrHigher = function (_) {
    return (
      0 <=
      goog.string.internal.compareVersions(
        goog.labs.userAgent.browser.getVersion(),
        _,
      )
    );
  };
  goog.labs.userAgent.browser.getIEVersion_ = function (_) {
    var _ = /rv: *([\d\.]*)/.exec(_);
    if (_ && _[1]) return _[1];
    _ = "";
    var _ = /MSIE +([\d\.]+)/.exec(_);
    if (_ && _[1])
      if (((_ = /Trident\/(\d.\d)/.exec(_)), _[1] == "7.0"))
        if (_ && _[1])
          switch (_[1]) {
            case "4.0":
              _ = "8.0";
              break;
            case "5.0":
              _ = "9.0";
              break;
            case "6.0":
              _ = "10.0";
              break;
            case "7.0":
              _ = "11.0";
          }
        else _ = "7.0";
      else _ = _[1];
    return _;
  };
  goog.html.SafeHtml = function () {
    (this.privateDoNotAccessOrElseSafeHtmlWrappedValue_ = ""),
      (this.SAFE_HTML_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ =
        goog.html.SafeHtml.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_),
      (this.dir_ = null);
  };
  goog.html.SafeHtml.ENABLE_ERROR_MESSAGES = goog.DEBUG;
  goog.html.SafeHtml.SUPPORT_STYLE_ATTRIBUTE = !0;
  goog.html.SafeHtml.prototype.implementsGoogI18nBidiDirectionalString = !0;
  goog.html.SafeHtml.prototype.getDirection = function () {
    return this.dir_;
  };
  goog.html.SafeHtml.prototype.implementsGoogStringTypedString = !0;
  goog.html.SafeHtml.prototype.getTypedStringValue = function () {
    return this.privateDoNotAccessOrElseSafeHtmlWrappedValue_.toString();
  };
  goog.DEBUG &&
    (goog.html.SafeHtml.prototype.toString = function () {
      return (
        "SafeHtml{" + this.privateDoNotAccessOrElseSafeHtmlWrappedValue_ + "}"
      );
    });
  goog.html.SafeHtml.unwrap = function (_) {
    return goog.html.SafeHtml.unwrapTrustedHTML(_).toString();
  };
  goog.html.SafeHtml.unwrapTrustedHTML = function (_) {
    return _ instanceof goog.html.SafeHtml &&
      _.constructor === goog.html.SafeHtml &&
      _.SAFE_HTML_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ ===
        goog.html.SafeHtml.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_
      ? _.privateDoNotAccessOrElseSafeHtmlWrappedValue_
      : (goog.asserts.fail(
          "expected object of type SafeHtml, got '" +
            _ +
            "' of type " +
            goog.typeOf(_),
        ),
        "type_error:SafeHtml");
  };
  goog.html.SafeHtml.htmlEscape = function (_) {
    if (_ instanceof goog.html.SafeHtml) return _;
    var _ = typeof _ == "object",
      _ = null;
    return (
      _ && _.implementsGoogI18nBidiDirectionalString && (_ = _.getDirection()),
      (_ =
        _ && _.implementsGoogStringTypedString
          ? _.getTypedStringValue()
          : String(_)),
      goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(
        goog.string.internal.htmlEscape(_),
        _,
      )
    );
  };
  goog.html.SafeHtml.htmlEscapePreservingNewlines = function (_) {
    return _ instanceof goog.html.SafeHtml
      ? _
      : ((_ = goog.html.SafeHtml.htmlEscape(_)),
        goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(
          goog.string.internal.newLineToBr(goog.html.SafeHtml.unwrap(_)),
          _.getDirection(),
        ));
  };
  goog.html.SafeHtml.htmlEscapePreservingNewlinesAndSpaces = function (_) {
    return _ instanceof goog.html.SafeHtml
      ? _
      : ((_ = goog.html.SafeHtml.htmlEscape(_)),
        goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(
          goog.string.internal.whitespaceEscape(goog.html.SafeHtml.unwrap(_)),
          _.getDirection(),
        ));
  };
  goog.html.SafeHtml.from = goog.html.SafeHtml.htmlEscape;
  goog.html.SafeHtml.comment = function (_) {
    return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(
      "<!--" + goog.string.internal.htmlEscape(_) + "-->",
      null,
    );
  };
  goog.html.SafeHtml.VALID_NAMES_IN_TAG_ = /^[a-zA-Z0-9-]+$/;
  goog.html.SafeHtml.URL_ATTRIBUTES_ = {
    action: !0,
    cite: !0,
    data: !0,
    formaction: !0,
    href: !0,
    manifest: !0,
    poster: !0,
    src: !0,
  };
  goog.html.SafeHtml.NOT_ALLOWED_TAG_NAMES_ = {
    APPLET: !0,
    BASE: !0,
    EMBED: !0,
    IFRAME: !0,
    LINK: !0,
    MATH: !0,
    META: !0,
    OBJECT: !0,
    SCRIPT: !0,
    STYLE: !0,
    SVG: !0,
    TEMPLATE: !0,
  };
  goog.html.SafeHtml.create = function (_, _, _) {
    return (
      goog.html.SafeHtml.verifyTagName(String(_)),
      goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse(
        String(_),
        _,
        _,
      )
    );
  };
  goog.html.SafeHtml.verifyTagName = function (_) {
    if (!goog.html.SafeHtml.VALID_NAMES_IN_TAG_.test(_))
      throw Error(
        goog.html.SafeHtml.ENABLE_ERROR_MESSAGES
          ? "Invalid tag name <" + _ + ">."
          : "",
      );
    if (_.toUpperCase() in goog.html.SafeHtml.NOT_ALLOWED_TAG_NAMES_)
      throw Error(
        goog.html.SafeHtml.ENABLE_ERROR_MESSAGES
          ? "Tag name <" + _ + "> is not allowed for SafeHtml."
          : "",
      );
  };
  goog.html.SafeHtml.createIframe = function (_, _, _, _) {
    _ && goog.html.TrustedResourceUrl.unwrap(_);
    var _ = {};
    return (
      (_.src = _ || null),
      (_.srcdoc = _ && goog.html.SafeHtml.unwrap(_)),
      (_ = goog.html.SafeHtml.combineAttributes(
        _,
        {
          sandbox: "",
        },
        _,
      )),
      goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse(
        "iframe",
        _,
        _,
      )
    );
  };
  goog.html.SafeHtml.createSandboxIframe = function (_, _, _, _) {
    if (!goog.html.SafeHtml.canUseSandboxIframe())
      throw Error(
        goog.html.SafeHtml.ENABLE_ERROR_MESSAGES
          ? "The browser does not support sandboxed iframes."
          : "",
      );
    var _ = {};
    return (
      (_.src = _
        ? goog.html.SafeUrl.unwrap(goog.html.SafeUrl.sanitize(_))
        : null),
      (_.srcdoc = _ || null),
      (_.sandbox = ""),
      (_ = goog.html.SafeHtml.combineAttributes(_, {}, _)),
      goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse(
        "iframe",
        _,
        _,
      )
    );
  };
  goog.html.SafeHtml.canUseSandboxIframe = function () {
    return (
      goog.global.HTMLIFrameElement &&
      "sandbox" in goog.global.HTMLIFrameElement.prototype
    );
  };
  goog.html.SafeHtml.createScriptSrc = function (_, _) {
    return (
      goog.html.TrustedResourceUrl.unwrap(_),
      (_ = goog.html.SafeHtml.combineAttributes(
        {
          src: _,
        },
        {},
        _,
      )),
      goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse(
        "script",
        _,
      )
    );
  };
  goog.html.SafeHtml.createScript = function (_, _) {
    for (var _ in _) {
      var _ = _.toLowerCase();
      if (_ == "language" || _ == "src" || _ == "text" || _ == "type")
        throw Error(
          goog.html.SafeHtml.ENABLE_ERROR_MESSAGES
            ? 'Cannot set "' + _ + '" attribute'
            : "",
        );
    }
    for (_ = "", _ = goog.array.concat(_), _ = 0; _ < _.length; _++)
      _ += goog.html.SafeScript.unwrap(_[_]);
    return (
      (_ = goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(
        _,
        goog.i18n.bidi.Dir.NEUTRAL,
      )),
      goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse(
        "script",
        _,
        _,
      )
    );
  };
  goog.html.SafeHtml.createStyle = function (_, _) {
    _ = goog.html.SafeHtml.combineAttributes(
      {
        type: "text/css",
      },
      {},
      _,
    );
    var _ = "";
    _ = goog.array.concat(_);
    for (var _ = 0; _ < _.length; _++)
      _ += goog.html.SafeStyleSheet.unwrap(_[_]);
    return (
      (_ = goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(
        _,
        goog.i18n.bidi.Dir.NEUTRAL,
      )),
      goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse(
        "style",
        _,
        _,
      )
    );
  };
  goog.html.SafeHtml.createMetaRefresh = function (_, _) {
    return (
      (_ = goog.html.SafeUrl.unwrap(goog.html.SafeUrl.sanitize(_))),
      (goog.labs.userAgent.browser.isIE() ||
        goog.labs.userAgent.browser.isEdge()) &&
        goog.string.internal.contains(_, ";") &&
        (_ = "'" + _.replace(/'/g, "%27") + "'"),
      goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse(
        "meta",
        {
          "http-equiv": "refresh",
          content: (_ || 0) + "; url=" + _,
        },
      )
    );
  };
  goog.html.SafeHtml.getAttrNameAndValue_ = function (_, _, _) {
    if (_ instanceof goog.string.Const) _ = goog.string.Const.unwrap(_);
    else if (_.toLowerCase() == "style")
      if (goog.html.SafeHtml.SUPPORT_STYLE_ATTRIBUTE)
        _ = goog.html.SafeHtml.getStyleValue_(_);
      else
        throw Error(
          goog.html.SafeHtml.ENABLE_ERROR_MESSAGES
            ? 'Attribute "style" not supported.'
            : "",
        );
    else {
      if (/^on/i.test(_))
        throw Error(
          goog.html.SafeHtml.ENABLE_ERROR_MESSAGES
            ? 'Attribute "' +
                _ +
                '" requires goog.string.Const value, "' +
                _ +
                '" given.'
            : "",
        );
      if (_.toLowerCase() in goog.html.SafeHtml.URL_ATTRIBUTES_)
        if (_ instanceof goog.html.TrustedResourceUrl)
          _ = goog.html.TrustedResourceUrl.unwrap(_);
        else if (_ instanceof goog.html.SafeUrl)
          _ = goog.html.SafeUrl.unwrap(_);
        else if (typeof _ == "string")
          _ = goog.html.SafeUrl.sanitize(_).getTypedStringValue();
        else
          throw Error(
            goog.html.SafeHtml.ENABLE_ERROR_MESSAGES
              ? 'Attribute "' +
                  _ +
                  '" on tag "' +
                  _ +
                  '" requires goog.html.SafeUrl, goog.string.Const, or string, value "' +
                  _ +
                  '" given.'
              : "",
          );
    }
    return (
      _.implementsGoogStringTypedString && (_ = _.getTypedStringValue()),
      goog.asserts.assert(
        typeof _ == "string" || typeof _ == "number",
        "String or number value expected, got " +
          typeof _ +
          " with value: " +
          _,
      ),
      _ + '="' + goog.string.internal.htmlEscape(String(_)) + '"'
    );
  };
  goog.html.SafeHtml.getStyleValue_ = function (_) {
    if (!goog.isObject(_))
      throw Error(
        goog.html.SafeHtml.ENABLE_ERROR_MESSAGES
          ? 'The "style" attribute requires goog.html.SafeStyle or map of style properties, ' +
              typeof _ +
              " given: " +
              _
          : "",
      );
    return (
      _ instanceof goog.html.SafeStyle || (_ = goog.html.SafeStyle.create(_)),
      goog.html.SafeStyle.unwrap(_)
    );
  };
  goog.html.SafeHtml.createWithDir = function (_, _, _, _) {
    return (_ = goog.html.SafeHtml.create(_, _, _)), (_.dir_ = _), _;
  };
  goog.html.SafeHtml.join = function (_, _) {
    _ = goog.html.SafeHtml.htmlEscape(_);
    var _ = _.getDirection(),
      _ = [],
      _ = function (_) {
        Array.isArray(_)
          ? goog.array.forEach(_, _)
          : ((_ = goog.html.SafeHtml.htmlEscape(_)),
            _.push(goog.html.SafeHtml.unwrap(_)),
            (_ = _.getDirection()),
            _ == goog.i18n.bidi.Dir.NEUTRAL
              ? (_ = _)
              : _ != goog.i18n.bidi.Dir.NEUTRAL && _ != _ && (_ = null));
      };
    return (
      goog.array.forEach(_, _),
      goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(
        _.join(goog.html.SafeHtml.unwrap(_)),
        _,
      )
    );
  };
  goog.html.SafeHtml.concat = function (_) {
    return goog.html.SafeHtml.join(
      goog.html.SafeHtml.EMPTY,
      Array.prototype.slice.call(arguments),
    );
  };
  goog.html.SafeHtml.concatWithDir = function (_, _) {
    var _ = goog.html.SafeHtml.concat(goog.array.slice(arguments, 1));
    return (_.dir_ = _), _;
  };
  goog.html.SafeHtml.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {};
  goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse = function (
    _,
    _,
  ) {
    return new goog.html.SafeHtml().initSecurityPrivateDoNotAccessOrElse_(_, _);
  };
  goog.html.SafeHtml.prototype.initSecurityPrivateDoNotAccessOrElse_ =
    function (_, _) {
      return (
        (this.privateDoNotAccessOrElseSafeHtmlWrappedValue_ = goog.html
          .trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY
          ? goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY.createHTML(
              _,
            )
          : _),
        (this.dir_ = _),
        this
      );
    };
  goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse =
    function (_, _, _) {
      var _ = null,
        _ = "<" + _ + goog.html.SafeHtml.stringifyAttributes(_, _);
      return (
        _ == null ? (_ = []) : Array.isArray(_) || (_ = [_]),
        goog.dom.tags.isVoidTag(_.toLowerCase())
          ? (goog.asserts.assert(
              !_.length,
              "Void tag <" + _ + "> does not allow content.",
            ),
            (_ += ">"))
          : ((_ = goog.html.SafeHtml.concat(_)),
            (_ += ">" + goog.html.SafeHtml.unwrap(_) + "</" + _ + ">"),
            (_ = _.getDirection())),
        (_ = _ && _.dir) &&
          (_ = /^(ltr|rtl|auto)$/i.test(_) ? goog.i18n.bidi.Dir.NEUTRAL : null),
        goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(_, _)
      );
    };
  goog.html.SafeHtml.stringifyAttributes = function (_, _) {
    var _ = "";
    if (_)
      for (var _ in _) {
        if (!goog.html.SafeHtml.VALID_NAMES_IN_TAG_.test(_))
          throw Error(
            goog.html.SafeHtml.ENABLE_ERROR_MESSAGES
              ? 'Invalid attribute name "' + _ + '".'
              : "",
          );
        var _ = _[_];
        _ != null &&
          (_ += " " + goog.html.SafeHtml.getAttrNameAndValue_(_, _, _));
      }
    return _;
  };
  goog.html.SafeHtml.combineAttributes = function (_, _, _) {
    var _ = {},
      _;
    for (_ in _)
      goog.asserts.assert(_.toLowerCase() == _, "Must be lower case"),
        (_[_] = _[_]);
    for (_ in _)
      goog.asserts.assert(_.toLowerCase() == _, "Must be lower case"),
        (_[_] = _[_]);
    if (_)
      for (_ in _) {
        var _ = _.toLowerCase();
        if (_ in _)
          throw Error(
            goog.html.SafeHtml.ENABLE_ERROR_MESSAGES
              ? 'Cannot override "' +
                  _ +
                  '" attribute, got "' +
                  _ +
                  '" with value "' +
                  _[_] +
                  '"'
              : "",
          );
        _ in _ && delete _[_], (_[_] = _[_]);
      }
    return _;
  };
  goog.html.SafeHtml.DOCTYPE_HTML =
    goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(
      "<!DOCTYPE html>",
      goog.i18n.bidi.Dir.NEUTRAL,
    );
  goog.html.SafeHtml.EMPTY =
    goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(
      "",
      goog.i18n.bidi.Dir.NEUTRAL,
    );
  goog.html.SafeHtml._ =
    goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(
      "<br>",
      goog.i18n.bidi.Dir.NEUTRAL,
    );
  goog.html.uncheckedconversions = {};
  goog.html.uncheckedconversions.safeHtmlFromStringKnownToSatisfyTypeContract =
    function (_, _, _) {
      return (
        goog.asserts.assertString(
          goog.string.Const.unwrap(_),
          "must provide justification",
        ),
        goog.asserts.assert(
          !goog.string.internal.isEmptyOrWhitespace(
            goog.string.Const.unwrap(_),
          ),
          "must provide non-empty justification",
        ),
        goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(
          _,
          _ || null,
        )
      );
    };
  goog.html.uncheckedconversions.safeScriptFromStringKnownToSatisfyTypeContract =
    function (_, _) {
      return (
        goog.asserts.assertString(
          goog.string.Const.unwrap(_),
          "must provide justification",
        ),
        goog.asserts.assert(
          !goog.string.internal.isEmptyOrWhitespace(
            goog.string.Const.unwrap(_),
          ),
          "must provide non-empty justification",
        ),
        goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(_)
      );
    };
  goog.html.uncheckedconversions.safeStyleFromStringKnownToSatisfyTypeContract =
    function (_, _) {
      return (
        goog.asserts.assertString(
          goog.string.Const.unwrap(_),
          "must provide justification",
        ),
        goog.asserts.assert(
          !goog.string.internal.isEmptyOrWhitespace(
            goog.string.Const.unwrap(_),
          ),
          "must provide non-empty justification",
        ),
        goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(_)
      );
    };
  goog.html.uncheckedconversions.safeStyleSheetFromStringKnownToSatisfyTypeContract =
    function (_, _) {
      return (
        goog.asserts.assertString(
          goog.string.Const.unwrap(_),
          "must provide justification",
        ),
        goog.asserts.assert(
          !goog.string.internal.isEmptyOrWhitespace(
            goog.string.Const.unwrap(_),
          ),
          "must provide non-empty justification",
        ),
        goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(
          _,
        )
      );
    };
  goog.html.uncheckedconversions.safeUrlFromStringKnownToSatisfyTypeContract =
    function (_, _) {
      return (
        goog.asserts.assertString(
          goog.string.Const.unwrap(_),
          "must provide justification",
        ),
        goog.asserts.assert(
          !goog.string.internal.isEmptyOrWhitespace(
            goog.string.Const.unwrap(_),
          ),
          "must provide non-empty justification",
        ),
        goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(_)
      );
    };
  goog.html.uncheckedconversions.trustedResourceUrlFromStringKnownToSatisfyTypeContract =
    function (_, _) {
      return (
        goog.asserts.assertString(
          goog.string.Const.unwrap(_),
          "must provide justification",
        ),
        goog.asserts.assert(
          !goog.string.internal.isEmptyOrWhitespace(
            goog.string.Const.unwrap(_),
          ),
          "must provide non-empty justification",
        ),
        goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(
          _,
        )
      );
    };
  goog.dom.safe = {};
  goog.dom.safe.InsertAdjacentHtmlPosition = {
    AFTERBEGIN: "afterbegin",
    AFTEREND: "afterend",
    BEFOREBEGIN: "beforebegin",
    BEFOREEND: "beforeend",
  };
  goog.dom.safe.insertAdjacentHtml = function (_, _, _) {
    _.insertAdjacentHTML(_, goog.html.SafeHtml.unwrapTrustedHTML(_));
  };
  goog.dom.safe.SET_INNER_HTML_DISALLOWED_TAGS_ = {
    MATH: !0,
    SCRIPT: !0,
    STYLE: !0,
    SVG: !0,
    TEMPLATE: !0,
  };
  goog.dom.safe.isInnerHtmlCleanupRecursive_ = goog.functions.cacheReturnValue(
    function () {
      if (goog.DEBUG && typeof document > "u") return !1;
      var _ = document.createElement("div"),
        _ = document.createElement("div");
      return (
        _.appendChild(document.createElement("div")),
        _.appendChild(_),
        goog.DEBUG && !_.firstChild
          ? !1
          : ((_ = _.firstChild.firstChild),
            (_.innerHTML = goog.html.SafeHtml.unwrapTrustedHTML(
              goog.html.SafeHtml.EMPTY,
            )),
            !_.parentElement)
      );
    },
  );
  goog.dom.safe.unsafeSetInnerHtmlDoNotUseOrElse = function (_, _) {
    if (goog.dom.safe.isInnerHtmlCleanupRecursive_())
      for (; _.lastChild; ) _.removeChild(_.lastChild);
    _.innerHTML = goog.html.SafeHtml.unwrapTrustedHTML(_);
  };
  goog.dom.safe.setInnerHtml = function (_, _) {
    if (goog.asserts.ENABLE_ASSERTS) {
      var _ = _.tagName.toUpperCase();
      if (goog.dom.safe.SET_INNER_HTML_DISALLOWED_TAGS_[_])
        throw Error(
          "goog.dom.safe.setInnerHtml cannot be used to set content of " +
            _.tagName +
            ".",
        );
    }
    goog.dom.safe.unsafeSetInnerHtmlDoNotUseOrElse(_, _);
  };
  goog.dom.safe.setOuterHtml = function (_, _) {
    _.outerHTML = goog.html.SafeHtml.unwrapTrustedHTML(_);
  };
  goog.dom.safe.setFormElementAction = function (_, _) {
    (_ =
      _ instanceof goog.html.SafeUrl
        ? _
        : goog.html.SafeUrl.sanitizeAssertUnchanged(_)),
      (goog.dom.asserts.assertIsHTMLFormElement(_).action =
        goog.html.SafeUrl.unwrap(_));
  };
  goog.dom.safe.setButtonFormAction = function (_, _) {
    (_ =
      _ instanceof goog.html.SafeUrl
        ? _
        : goog.html.SafeUrl.sanitizeAssertUnchanged(_)),
      (goog.dom.asserts.assertIsHTMLButtonElement(_).formAction =
        goog.html.SafeUrl.unwrap(_));
  };
  goog.dom.safe.setInputFormAction = function (_, _) {
    (_ =
      _ instanceof goog.html.SafeUrl
        ? _
        : goog.html.SafeUrl.sanitizeAssertUnchanged(_)),
      (goog.dom.asserts.assertIsHTMLInputElement(_).formAction =
        goog.html.SafeUrl.unwrap(_));
  };
  goog.dom.safe.setStyle = function (_, _) {
    _.style.cssText = goog.html.SafeStyle.unwrap(_);
  };
  goog.dom.safe.documentWrite = function (_, _) {
    _.write(goog.html.SafeHtml.unwrapTrustedHTML(_));
  };
  goog.dom.safe.setAnchorHref = function (_, _) {
    goog.dom.asserts.assertIsHTMLAnchorElement(_),
      (_ =
        _ instanceof goog.html.SafeUrl
          ? _
          : goog.html.SafeUrl.sanitizeAssertUnchanged(_)),
      (_.href = goog.html.SafeUrl.unwrap(_));
  };
  goog.dom.safe.setImageSrc = function (_, _) {
    if (
      (goog.dom.asserts.assertIsHTMLImageElement(_),
      !(_ instanceof goog.html.SafeUrl))
    ) {
      var _ = /^data:image\//i.test(_);
      _ = goog.html.SafeUrl.sanitizeAssertUnchanged(_, _);
    }
    _.src = goog.html.SafeUrl.unwrap(_);
  };
  goog.dom.safe.setAudioSrc = function (_, _) {
    if (
      (goog.dom.asserts.assertIsHTMLAudioElement(_),
      !(_ instanceof goog.html.SafeUrl))
    ) {
      var _ = /^data:audio\//i.test(_);
      _ = goog.html.SafeUrl.sanitizeAssertUnchanged(_, _);
    }
    _.src = goog.html.SafeUrl.unwrap(_);
  };
  goog.dom.safe.setVideoSrc = function (_, _) {
    if (
      (goog.dom.asserts.assertIsHTMLVideoElement(_),
      !(_ instanceof goog.html.SafeUrl))
    ) {
      var _ = /^data:video\//i.test(_);
      _ = goog.html.SafeUrl.sanitizeAssertUnchanged(_, _);
    }
    _.src = goog.html.SafeUrl.unwrap(_);
  };
  goog.dom.safe.setEmbedSrc = function (_, _) {
    goog.dom.asserts.assertIsHTMLEmbedElement(_),
      (_.src = goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(_));
  };
  goog.dom.safe.setFrameSrc = function (_, _) {
    goog.dom.asserts.assertIsHTMLFrameElement(_),
      (_.src = goog.html.TrustedResourceUrl.unwrap(_));
  };
  goog.dom.safe.setIframeSrc = function (_, _) {
    goog.dom.asserts.assertIsHTMLIFrameElement(_),
      (_.src = goog.html.TrustedResourceUrl.unwrap(_));
  };
  goog.dom.safe.setIframeSrcdoc = function (_, _) {
    goog.dom.asserts.assertIsHTMLIFrameElement(_),
      (_.srcdoc = goog.html.SafeHtml.unwrapTrustedHTML(_));
  };
  goog.dom.safe.setLinkHrefAndRel = function (_, _, _) {
    goog.dom.asserts.assertIsHTMLLinkElement(_),
      (_.rel = _),
      goog.string.internal.caseInsensitiveContains(_, "stylesheet")
        ? (goog.asserts.assert(
            _ instanceof goog.html.TrustedResourceUrl,
            'URL must be TrustedResourceUrl because "rel" contains "stylesheet"',
          ),
          (_.href = goog.html.TrustedResourceUrl.unwrap(_)))
        : (_.href =
            _ instanceof goog.html.TrustedResourceUrl
              ? goog.html.TrustedResourceUrl.unwrap(_)
              : _ instanceof goog.html.SafeUrl
                ? goog.html.SafeUrl.unwrap(_)
                : goog.html.SafeUrl.unwrap(
                    goog.html.SafeUrl.sanitizeAssertUnchanged(_),
                  ));
  };
  goog.dom.safe.setObjectData = function (_, _) {
    goog.dom.asserts.assertIsHTMLObjectElement(_),
      (_.data = goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(_));
  };
  goog.dom.safe.setScriptSrc = function (_, _) {
    goog.dom.asserts.assertIsHTMLScriptElement(_),
      (_.src = goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(_)),
      (_ = goog.getScriptNonce()) && _.setAttribute("nonce", _);
  };
  goog.dom.safe.setScriptContent = function (_, _) {
    goog.dom.asserts.assertIsHTMLScriptElement(_),
      (_.text = goog.html.SafeScript.unwrapTrustedScript(_)),
      (_ = goog.getScriptNonce()) && _.setAttribute("nonce", _);
  };
  goog.dom.safe.setLocationHref = function (_, _) {
    goog.dom.asserts.assertIsLocation(_),
      (_ =
        _ instanceof goog.html.SafeUrl
          ? _
          : goog.html.SafeUrl.sanitizeAssertUnchanged(_)),
      (_.href = goog.html.SafeUrl.unwrap(_));
  };
  goog.dom.safe.assignLocation = function (_, _) {
    goog.dom.asserts.assertIsLocation(_),
      (_ =
        _ instanceof goog.html.SafeUrl
          ? _
          : goog.html.SafeUrl.sanitizeAssertUnchanged(_)),
      _.assign(goog.html.SafeUrl.unwrap(_));
  };
  goog.dom.safe.replaceLocation = function (_, _) {
    (_ =
      _ instanceof goog.html.SafeUrl
        ? _
        : goog.html.SafeUrl.sanitizeAssertUnchanged(_)),
      _.replace(goog.html.SafeUrl.unwrap(_));
  };
  goog.dom.safe.openInWindow = function (_, _, _, _, _) {
    return (
      (_ =
        _ instanceof goog.html.SafeUrl
          ? _
          : goog.html.SafeUrl.sanitizeAssertUnchanged(_)),
      (_ = _ || goog.global),
      (_ =
        _ instanceof goog.string.Const ? goog.string.Const.unwrap(_) : _ || ""),
      _.open(goog.html.SafeUrl.unwrap(_), _, _, _)
    );
  };
  goog.dom.safe.parseFromStringHtml = function (_, _) {
    return goog.dom.safe.parseFromString(_, _, "text/html");
  };
  goog.dom.safe.parseFromString = function (_, _, _) {
    return _.parseFromString(goog.html.SafeHtml.unwrapTrustedHTML(_), _);
  };
  goog.dom.safe.createImageFromBlob = function (_) {
    if (!/^image\/.*/g.test(_.type))
      throw Error(
        "goog.dom.safe.createImageFromBlob only accepts MIME type image/.*.",
      );
    var _ = goog.global.URL.createObjectURL(_);
    return (
      (_ = new goog.global.Image()),
      (_.onload = function () {
        goog.global.URL.revokeObjectURL(_);
      }),
      goog.dom.safe.setImageSrc(
        _,
        goog.html.uncheckedconversions.safeUrlFromStringKnownToSatisfyTypeContract(
          goog.string.Const.from("Image blob URL."),
          _,
        ),
      ),
      _
    );
  };
  goog.string.DETECT_DOUBLE_ESCAPING = !1;
  goog.string.FORCE_NON_DOM_HTML_UNESCAPING = !1;
  goog.string.Unicode = {
    NBSP: " ",
  };
  goog.string.startsWith = goog.string.internal.startsWith;
  goog.string.endsWith = goog.string.internal.endsWith;
  goog.string.caseInsensitiveStartsWith =
    goog.string.internal.caseInsensitiveStartsWith;
  goog.string.caseInsensitiveEndsWith =
    goog.string.internal.caseInsensitiveEndsWith;
  goog.string.caseInsensitiveEquals =
    goog.string.internal.caseInsensitiveEquals;
  goog.string.subs = function (_, _) {
    for (
      var _ = _.split("%s"),
        _ = "",
        _ = Array.prototype.slice.call(arguments, 1);
      _.length && 1 < _.length;
    )
      _ += _.shift() + _.shift();
    return _ + _.join("%s");
  };
  goog.string.collapseWhitespace = function (_) {
    return _.replace(/[\s\xa0]+/g, " ").replace(/^\s+|\s+$/g, "");
  };
  goog.string.isEmptyOrWhitespace = goog.string.internal.isEmptyOrWhitespace;
  goog.string.isEmptyString = function (_) {
    return _.length == 0;
  };
  goog.string.isEmpty = goog.string.isEmptyOrWhitespace;
  goog.string.isEmptyOrWhitespaceSafe = function (_) {
    return goog.string.isEmptyOrWhitespace(goog.string.makeSafe(_));
  };
  goog.string.isEmptySafe = goog.string.isEmptyOrWhitespaceSafe;
  goog.string.isBreakingWhitespace = function (_) {
    return !/[^\t\n\r ]/.test(_);
  };
  goog.string.isAlpha = function (_) {
    return !/[^a-zA-Z]/.test(_);
  };
  goog.string.isNumeric = function (_) {
    return !/[^0-9]/.test(_);
  };
  goog.string.isAlphaNumeric = function (_) {
    return !/[^a-zA-Z0-9]/.test(_);
  };
  goog.string.isSpace = function (_) {
    return _ == " ";
  };
  goog.string.isUnicodeChar = function (_) {
    return (_.length == 1 && " " <= _ && "~" >= _) || ("" <= _ && "�" >= _);
  };
  goog.string.stripNewlines = function (_) {
    return _.replace(/(\r\n|\r|\n)+/g, " ");
  };
  goog.string.canonicalizeNewlines = function (_) {
    return _.replace(
      /(\r\n|\r|\n)/g,
      `
`,
    );
  };
  goog.string.normalizeWhitespace = function (_) {
    return _.replace(/\xa0|\s/g, " ");
  };
  goog.string.normalizeSpaces = function (_) {
    return _.replace(/\xa0|[ \t]+/g, " ");
  };
  goog.string.collapseBreakingSpaces = function (_) {
    return _.replace(/[\t\r\n ]+/g, " ").replace(
      /^[\t\r\n ]+|[\t\r\n ]+$/g,
      "",
    );
  };
  goog.string.trim = goog.string.internal.trim;
  goog.string.trimLeft = function (_) {
    return _.replace(/^[\s\xa0]+/, "");
  };
  goog.string.trimRight = function (_) {
    return _.replace(/[\s\xa0]+$/, "");
  };
  goog.string.caseInsensitiveCompare =
    goog.string.internal.caseInsensitiveCompare;
  goog.string.numberAwareCompare_ = function (_, _, _) {
    if (_ == _) return 0;
    if (!_) return -1;
    if (!_) return 1;
    for (
      var _ = _.toLowerCase().match(_),
        _ = _.toLowerCase().match(_),
        _ = Math.min(_.length, _.length),
        _ = 0;
      _ < _;
      _++
    ) {
      _ = _[_];
      var _ = _[_];
      if (_ != _)
        return (
          (_ = parseInt(_, 10)),
          !isNaN(_) && ((_ = parseInt(_, 10)), !isNaN(_) && _ - _)
            ? _ - _
            : _ < _
              ? -1
              : 1
        );
    }
    return _.length != _.length ? _.length - _.length : _ < _ ? -1 : 1;
  };
  goog.string.intAwareCompare = function (_, _) {
    return goog.string.numberAwareCompare_(_, _, /\d+|\D+/g);
  };
  goog.string.floatAwareCompare = function (_, _) {
    return goog.string.numberAwareCompare_(_, _, /\d+|\.\d+|\D+/g);
  };
  goog.string.numerateCompare = goog.string.floatAwareCompare;
  goog.string.urlEncode = function (_) {
    return encodeURIComponent(String(_));
  };
  goog.string.urlDecode = function (_) {
    return decodeURIComponent(_.replace(/\+/g, " "));
  };
  goog.string.newLineToBr = goog.string.internal.newLineToBr;
  goog.string.htmlEscape = function (_, _) {
    return (
      (_ = goog.string.internal.htmlEscape(_, _)),
      goog.string.DETECT_DOUBLE_ESCAPING &&
        (_ = _.replace(goog.string.E_RE_, "&#101;")),
      _
    );
  };
  goog.string.E_RE_ = /e/g;
  goog.string.unescapeEntities = function (_) {
    return goog.string.contains(_, "&")
      ? !goog.string.FORCE_NON_DOM_HTML_UNESCAPING && "document" in goog.global
        ? goog.string.unescapeEntitiesUsingDom_(_)
        : goog.string.unescapePureXmlEntities_(_)
      : _;
  };
  goog.string.unescapeEntitiesWithDocument = function (_, _) {
    return goog.string.contains(_, "&")
      ? goog.string.unescapeEntitiesUsingDom_(_, _)
      : _;
  };
  goog.string.unescapeEntitiesUsingDom_ = function (_, _) {
    var _ = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
      },
      _ = _
        ? _.createElement("div")
        : goog.global.document.createElement("div");
    return _.replace(goog.string.HTML_ENTITY_PATTERN_, function (_, _) {
      var _ = _[_];
      return (
        _ ||
        (_.charAt(0) == "#" &&
          ((_ = +("0" + _.substr(1))),
          isNaN(_) || (_ = String.fromCharCode(_))),
        _ ||
          (goog.dom.safe.setInnerHtml(
            _,
            goog.html.uncheckedconversions.safeHtmlFromStringKnownToSatisfyTypeContract(
              goog.string.Const.from("Single HTML entity."),
              _ + " ",
            ),
          ),
          (_ = _.firstChild.nodeValue.slice(0, -1))),
        (_[_] = _))
      );
    });
  };
  goog.string.unescapePureXmlEntities_ = function (_) {
    return _.replace(/&([^;]+);/g, function (_, _) {
      switch (_) {
        case "amp":
          return "&";
        case "lt":
          return "<";
        case "gt":
          return ">";
        case "quot":
          return '"';
        default:
          return _.charAt(0) != "#" || ((_ = +("0" + _.substr(1))), isNaN(_))
            ? _
            : String.fromCharCode(_);
      }
    });
  };
  goog.string.HTML_ENTITY_PATTERN_ = /&([^;\s<&]+);?/g;
  goog.string.whitespaceEscape = function (_, _) {
    return goog.string.newLineToBr(_.replace(/  /g, " &#160;"), _);
  };
  goog.string.preserveSpaces = function (_) {
    return _.replace(/(^|[\n ]) /g, "$1" + goog.string.Unicode.NBSP);
  };
  goog.string.stripQuotes = function (_, _) {
    for (var _ = _.length, _ = 0; _ < _; _++) {
      var _ = _ == 1 ? _ : _.charAt(_);
      if (_.charAt(0) == _ && _.charAt(_.length - 1) == _)
        return _.substring(1, _.length - 1);
    }
    return _;
  };
  goog.string.truncate = function (_, _, _) {
    return (
      _ && (_ = goog.string.unescapeEntities(_)),
      _.length > _ && (_ = _.substring(0, _ - 3) + "..."),
      _ && (_ = goog.string.htmlEscape(_)),
      _
    );
  };
  goog.string.truncateMiddle = function (_, _, _, _) {
    if ((_ && (_ = goog.string.unescapeEntities(_)), _ && _.length > _)) {
      _ > _ && (_ = _);
      var _ = _.length - _;
      _ = _.substring(0, _ - _) + "..." + _.substring(_);
    } else
      _.length > _ &&
        ((_ = Math.floor(_ / 2)),
        (_ = _.length - _),
        (_ = _.substring(0, _ + (_ % 2)) + "..." + _.substring(_)));
    return _ && (_ = goog.string.htmlEscape(_)), _;
  };
  goog.string.specialEscapeChars_ = {
    "\0": "\\0",
    "\b": "\\b",
    "\f": "\\f",
    "\n": "\\n",
    "\r": "\\r",
    "	": "\\t",
    "\v": "\\x0B",
    '"': '\\"',
    "\\": "\\\\",
    "<": "\\u003C",
  };
  goog.string.jsEscapeCache_ = {
    "'": "\\'",
  };
  goog.string.quote = function (_) {
    _ = String(_);
    for (var _ = ['"'], _ = 0; _ < _.length; _++) {
      var _ = _.charAt(_),
        _ = _.charCodeAt(0);
      _[_ + 1] =
        goog.string.specialEscapeChars_[_] ||
        (31 < _ && 127 > _ ? _ : goog.string.escapeChar(_));
    }
    return _.push('"'), _.join("");
  };
  goog.string.escapeString = function (_) {
    for (var _ = [], _ = 0; _ < _.length; _++)
      _[_] = goog.string.escapeChar(_.charAt(_));
    return _.join("");
  };
  goog.string.escapeChar = function (_) {
    if (_ in goog.string.jsEscapeCache_) return goog.string.jsEscapeCache_[_];
    if (_ in goog.string.specialEscapeChars_)
      return (goog.string.jsEscapeCache_[_] =
        goog.string.specialEscapeChars_[_]);
    var _ = _.charCodeAt(0);
    if (31 < _ && 127 > _) var _ = _;
    else
      256 > _
        ? ((_ = "\\x"), (16 > _ || 256 < _) && (_ += "0"))
        : ((_ = "\\u"), 4096 > _ && (_ += "0")),
        (_ += _.toString(16).toUpperCase());
    return (goog.string.jsEscapeCache_[_] = _);
  };
  goog.string.contains = goog.string.internal.contains;
  goog.string.caseInsensitiveContains =
    goog.string.internal.caseInsensitiveContains;
  goog.string.countOf = function (_, _) {
    return _ && _ ? _.split(_).length - 1 : 0;
  };
  goog.string.removeAt = function (_, _, _) {
    var _ = _;
    return (
      0 <= _ &&
        _ < _.length &&
        0 < _ &&
        (_ = _.substr(0, _) + _.substr(_ + _, _.length - _ - _)),
      _
    );
  };
  goog.string.remove = function (_, _) {
    return _.replace(_, "");
  };
  goog.string.removeAll = function (_, _) {
    return (_ = new RegExp(goog.string.regExpEscape(_), "g")), _.replace(_, "");
  };
  goog.string.replaceAll = function (_, _, _) {
    return (
      (_ = new RegExp(goog.string.regExpEscape(_), "g")),
      _.replace(_, _.replace(/\$/g, "$$$$"))
    );
  };
  goog.string.regExpEscape = function (_) {
    return String(_)
      .replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1")
      .replace(/\x08/g, "\\x08");
  };
  goog.string.repeat = String.prototype.repeat
    ? function (_, _) {
        return _.repeat(_);
      }
    : function (_, _) {
        return Array(_ + 1).join(_);
      };
  goog.string.padNumber = function (_, _, _) {
    return (
      (_ = _ !== void 0 ? _.toFixed(_) : String(_)),
      (_ = _.indexOf(".")),
      _ == -1 && (_ = _.length),
      goog.string.repeat("0", Math.max(0, _ - _)) + _
    );
  };
  goog.string.makeSafe = function (_) {
    return _ == null ? "" : String(_);
  };
  goog.string.buildString = function (_) {
    return Array.prototype.join.call(arguments, "");
  };
  goog.string.getRandomString = function () {
    return (
      Math.floor(2147483648 * Math.random()).toString(36) +
      Math.abs(Math.floor(2147483648 * Math.random()) ^ goog.now()).toString(36)
    );
  };
  goog.string.compareVersions = goog.string.internal.compareVersions;
  goog.string.hashCode = function (_) {
    for (var _ = 0, _ = 0; _ < _.length; ++_)
      _ = (31 * _ + _.charCodeAt(_)) >>> 0;
    return _;
  };
  goog.string.uniqueStringCounter_ = (2147483648 * Math.random()) | 0;
  goog.string.createUniqueString = function () {
    return "goog_" + goog.string.uniqueStringCounter_++;
  };
  goog.string.toNumber = function (_) {
    var _ = Number(_);
    return _ == 0 && goog.string.isEmptyOrWhitespace(_) ? NaN : _;
  };
  goog.string.isLowerCamelCase = function (_) {
    return /^[a-z]+([A-Z][a-z]*)*$/.test(_);
  };
  goog.string.isUpperCamelCase = function (_) {
    return /^([A-Z][a-z]*)+$/.test(_);
  };
  goog.string.toCamelCase = function (_) {
    return String(_).replace(/\-([a-z])/g, function (_, _) {
      return _.toUpperCase();
    });
  };
  goog.string.toSelectorCase = function (_) {
    return String(_)
      .replace(/([A-Z])/g, "-$1")
      .toLowerCase();
  };
  goog.string.toTitleCase = function (_, _) {
    return (
      (_ = typeof _ == "string" ? goog.string.regExpEscape(_) : "\\s"),
      _.replace(
        new RegExp("(^" + (_ ? "|[" + _ + "]+" : "") + ")([a-z])", "g"),
        function (_, _, _) {
          return _ + _.toUpperCase();
        },
      )
    );
  };
  goog.string.capitalize = function (_) {
    return (
      String(_.charAt(0)).toUpperCase() + String(_.substr(1)).toLowerCase()
    );
  };
  goog.string.parseInt = function (_) {
    return (
      isFinite(_) && (_ = String(_)),
      typeof _ == "string"
        ? /^\s*-?0x/i.test(_)
          ? parseInt(_, 16)
          : parseInt(_, 10)
        : NaN
    );
  };
  goog.string.splitLimit = function (_, _, _) {
    _ = _.split(_);
    for (var _ = []; 0 < _ && _.length; ) _.push(_.shift()), _--;
    return _.length && _.push(_.join(_)), _;
  };
  goog.string.lastComponent = function (_, _) {
    if (_) typeof _ == "string" && (_ = [_]);
    else return _;
    for (var _ = -1, _ = 0; _ < _.length; _++)
      if (_[_] != "") {
        var _ = _.lastIndexOf(_[_]);
        _ > _ && (_ = _);
      }
    return _ == -1 ? _ : _.slice(_ + 1);
  };
  goog.string.editDistance = function (_, _) {
    var _ = [],
      _ = [];
    if (_ == _) return 0;
    if (!_.length || !_.length) return Math.max(_.length, _.length);
    for (var _ = 0; _ < _.length + 1; _++) _[_] = _;
    for (_ = 0; _ < _.length; _++) {
      _[0] = _ + 1;
      for (var _ = 0; _ < _.length; _++)
        _[_ + 1] = Math.min(_[_] + 1, _[_ + 1] + 1, _[_] + +(_[_] != _[_]));
      for (_ = 0; _ < _.length; _++) _[_] = _[_];
    }
    return _[_.length];
  };
  goog.labs.userAgent.engine = {};
  goog.labs.userAgent.engine.isPresto = function () {
    return goog.labs.userAgent.util.matchUserAgent("Presto");
  };
  goog.labs.userAgent.engine.isTrident = function () {
    return (
      goog.labs.userAgent.util.matchUserAgent("Trident") ||
      goog.labs.userAgent.util.matchUserAgent("MSIE")
    );
  };
  goog.labs.userAgent.engine.isEdge = function () {
    return goog.labs.userAgent.util.matchUserAgent("Edge");
  };
  goog.labs.userAgent.engine.isWebKit = function () {
    return (
      goog.labs.userAgent.util.matchUserAgentIgnoreCase("WebKit") &&
      !goog.labs.userAgent.engine.isEdge()
    );
  };
  goog.labs.userAgent.engine.isGecko = function () {
    return (
      goog.labs.userAgent.util.matchUserAgent("Gecko") &&
      !goog.labs.userAgent.engine.isWebKit() &&
      !goog.labs.userAgent.engine.isTrident() &&
      !goog.labs.userAgent.engine.isEdge()
    );
  };
  goog.labs.userAgent.engine.getVersion = function () {
    var _ = goog.labs.userAgent.util.getUserAgent();
    if (_) {
      _ = goog.labs.userAgent.util.extractVersionTuples(_);
      var _ = goog.labs.userAgent.engine.getEngineTuple_(_);
      if (_)
        return _[0] == "Gecko"
          ? goog.labs.userAgent.engine.getVersionForKey_(_, "Firefox")
          : _[1];
      _ = _[0];
      var _;
      if (_ && (_ = _[2]) && (_ = /Trident\/([^\s;]+)/.exec(_))) return _[1];
    }
    return "";
  };
  goog.labs.userAgent.engine.getEngineTuple_ = function (_) {
    if (!goog.labs.userAgent.engine.isEdge()) return _[1];
    for (var _ = 0; _ < _.length; _++) {
      var _ = _[_];
      if (_[0] == "Edge") return _;
    }
  };
  goog.labs.userAgent.engine.isVersionOrHigher = function (_) {
    return (
      0 <=
      goog.string.compareVersions(goog.labs.userAgent.engine.getVersion(), _)
    );
  };
  goog.labs.userAgent.engine.getVersionForKey_ = function (_, _) {
    return (
      ((_ = goog.array.find(_, function (_) {
        return _ == _[0];
      })) &&
        _[1]) ||
      ""
    );
  };
  goog.labs.userAgent.platform = {};
  goog.labs.userAgent.platform.isAndroid = function () {
    return goog.labs.userAgent.util.matchUserAgent("Android");
  };
  goog.labs.userAgent.platform.isIpod = function () {
    return goog.labs.userAgent.util.matchUserAgent("iPod");
  };
  goog.labs.userAgent.platform.isIphone = function () {
    return (
      goog.labs.userAgent.util.matchUserAgent("iPhone") &&
      !goog.labs.userAgent.util.matchUserAgent("iPod") &&
      !goog.labs.userAgent.util.matchUserAgent("iPad")
    );
  };
  goog.labs.userAgent.platform.isIpad = function () {
    return goog.labs.userAgent.util.matchUserAgent("iPad");
  };
  goog.labs.userAgent.platform.isIos = function () {
    return (
      goog.labs.userAgent.platform.isIphone() ||
      goog.labs.userAgent.platform.isIpad() ||
      goog.labs.userAgent.platform.isIpod()
    );
  };
  goog.labs.userAgent.platform.isMacintosh = function () {
    return goog.labs.userAgent.util.matchUserAgent("Macintosh");
  };
  goog.labs.userAgent.platform.isLinux = function () {
    return goog.labs.userAgent.util.matchUserAgent("Linux");
  };
  goog.labs.userAgent.platform.isWindows = function () {
    return goog.labs.userAgent.util.matchUserAgent("Windows");
  };
  goog.labs.userAgent.platform.isChromeOS = function () {
    return goog.labs.userAgent.util.matchUserAgent("CrOS");
  };
  goog.labs.userAgent.platform.isChromecast = function () {
    return goog.labs.userAgent.util.matchUserAgent("CrKey");
  };
  goog.labs.userAgent.platform.isKaiOS = function () {
    return goog.labs.userAgent.util.matchUserAgentIgnoreCase("KaiOS");
  };
  goog.labs.userAgent.platform.getVersion = function () {
    var _ = goog.labs.userAgent.util.getUserAgent(),
      _ = "";
    return (
      goog.labs.userAgent.platform.isWindows()
        ? ((_ = /Windows (?:NT|Phone) ([0-9.]+)/),
          (_ = (_ = _.exec(_)) ? _[1] : "0.0"))
        : goog.labs.userAgent.platform.isIos()
          ? ((_ = /(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/),
            (_ = (_ = _.exec(_)) && _[1].replace(/_/g, ".")))
          : goog.labs.userAgent.platform.isMacintosh()
            ? ((_ = /Mac OS X ([0-9_.]+)/),
              (_ = (_ = _.exec(_)) ? _[1].replace(/_/g, ".") : "10"))
            : goog.labs.userAgent.platform.isKaiOS()
              ? ((_ = /(?:KaiOS)\/(\S+)/i), (_ = (_ = _.exec(_)) && _[1]))
              : goog.labs.userAgent.platform.isAndroid()
                ? ((_ = /Android\s+([^\);]+)(\)|;)/),
                  (_ = (_ = _.exec(_)) && _[1]))
                : goog.labs.userAgent.platform.isChromeOS() &&
                  ((_ = /(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/),
                  (_ = (_ = _.exec(_)) && _[1])),
      _ || ""
    );
  };
  goog.labs.userAgent.platform.isVersionOrHigher = function (_) {
    return (
      0 <=
      goog.string.compareVersions(goog.labs.userAgent.platform.getVersion(), _)
    );
  };
  goog.reflect = {};
  goog.reflect.object = function (_, _) {
    return _;
  };
  goog.reflect.objectProperty = function (_, _) {
    return _;
  };
  goog.reflect.sinkValue = function (_) {
    return goog.reflect.sinkValue[" "](_), _;
  };
  goog.reflect.sinkValue[" "] = goog.nullFunction;
  goog.reflect.canAccessProperty = function (_, _) {
    try {
      return goog.reflect.sinkValue(_[_]), !0;
    } catch {}
    return !1;
  };
  goog.reflect.cache = function (_, _, _, _) {
    return (
      (_ = _ ? _(_) : _),
      Object.prototype.hasOwnProperty.call(_, _) ? _[_] : (_[_] = _(_))
    );
  };
  goog.userAgent = {};
  goog.userAgent.ASSUME_IE = !1;
  goog.userAgent.ASSUME_EDGE = !1;
  goog.userAgent.ASSUME_GECKO = !1;
  goog.userAgent.ASSUME_WEBKIT = !1;
  goog.userAgent.ASSUME_MOBILE_WEBKIT = !1;
  goog.userAgent.ASSUME_OPERA = !1;
  goog.userAgent.ASSUME_ANY_VERSION = !1;
  goog.userAgent.BROWSER_KNOWN_ =
    goog.userAgent.ASSUME_IE ||
    goog.userAgent.ASSUME_EDGE ||
    goog.userAgent.ASSUME_GECKO ||
    goog.userAgent.ASSUME_MOBILE_WEBKIT ||
    goog.userAgent.ASSUME_WEBKIT ||
    goog.userAgent.ASSUME_OPERA;
  goog.userAgent.getUserAgentString = function () {
    return goog.labs.userAgent.util.getUserAgent();
  };
  goog.userAgent.getNavigatorTyped = function () {
    return goog.global.navigator || null;
  };
  goog.userAgent.getNavigator = function () {
    return goog.userAgent.getNavigatorTyped();
  };
  goog.userAgent.OPERA = goog.userAgent.BROWSER_KNOWN_
    ? goog.userAgent.ASSUME_OPERA
    : goog.labs.userAgent.browser.isOpera();
  goog.userAgent._ = goog.userAgent.BROWSER_KNOWN_
    ? goog.userAgent.ASSUME_IE
    : goog.labs.userAgent.browser.isIE();
  goog.userAgent.EDGE = goog.userAgent.BROWSER_KNOWN_
    ? goog.userAgent.ASSUME_EDGE
    : goog.labs.userAgent.engine.isEdge();
  goog.userAgent.EDGE_OR_IE = goog.userAgent.EDGE || goog.userAgent._;
  goog.userAgent.GECKO = goog.userAgent.BROWSER_KNOWN_
    ? goog.userAgent.ASSUME_GECKO
    : goog.labs.userAgent.engine.isGecko();
  goog.userAgent.WEBKIT = goog.userAgent.BROWSER_KNOWN_
    ? goog.userAgent.ASSUME_WEBKIT || goog.userAgent.ASSUME_MOBILE_WEBKIT
    : goog.labs.userAgent.engine.isWebKit();
  goog.userAgent.isMobile_ = function () {
    return (
      goog.userAgent.WEBKIT && goog.labs.userAgent.util.matchUserAgent("Mobile")
    );
  };
  goog.userAgent.MOBILE =
    goog.userAgent.ASSUME_MOBILE_WEBKIT || goog.userAgent.isMobile_();
  goog.userAgent.SAFARI = goog.userAgent.WEBKIT;
  goog.userAgent.determinePlatform_ = function () {
    var _ = goog.userAgent.getNavigatorTyped();
    return (_ && _.platform) || "";
  };
  goog.userAgent.PLATFORM = goog.userAgent.determinePlatform_();
  goog.userAgent.ASSUME_MAC = !1;
  goog.userAgent.ASSUME_WINDOWS = !1;
  goog.userAgent.ASSUME_LINUX = !1;
  goog.userAgent.ASSUME_X11 = !1;
  goog.userAgent.ASSUME_ANDROID = !1;
  goog.userAgent.ASSUME_IPHONE = !1;
  goog.userAgent.ASSUME_IPAD = !1;
  goog.userAgent.ASSUME_IPOD = !1;
  goog.userAgent.ASSUME_KAIOS = !1;
  goog.userAgent.PLATFORM_KNOWN_ =
    goog.userAgent.ASSUME_MAC ||
    goog.userAgent.ASSUME_WINDOWS ||
    goog.userAgent.ASSUME_LINUX ||
    goog.userAgent.ASSUME_X11 ||
    goog.userAgent.ASSUME_ANDROID ||
    goog.userAgent.ASSUME_IPHONE ||
    goog.userAgent.ASSUME_IPAD ||
    goog.userAgent.ASSUME_IPOD;
  goog.userAgent.MAC = goog.userAgent.PLATFORM_KNOWN_
    ? goog.userAgent.ASSUME_MAC
    : goog.labs.userAgent.platform.isMacintosh();
  goog.userAgent.WINDOWS = goog.userAgent.PLATFORM_KNOWN_
    ? goog.userAgent.ASSUME_WINDOWS
    : goog.labs.userAgent.platform.isWindows();
  goog.userAgent.isLegacyLinux_ = function () {
    return (
      goog.labs.userAgent.platform.isLinux() ||
      goog.labs.userAgent.platform.isChromeOS()
    );
  };
  goog.userAgent.LINUX = goog.userAgent.PLATFORM_KNOWN_
    ? goog.userAgent.ASSUME_LINUX
    : goog.userAgent.isLegacyLinux_();
  goog.userAgent.isX11_ = function () {
    var _ = goog.userAgent.getNavigatorTyped();
    return !!_ && goog.string.contains(_.appVersion || "", "X11");
  };
  goog.userAgent.X11 = goog.userAgent.PLATFORM_KNOWN_
    ? goog.userAgent.ASSUME_X11
    : goog.userAgent.isX11_();
  goog.userAgent.ANDROID = goog.userAgent.PLATFORM_KNOWN_
    ? goog.userAgent.ASSUME_ANDROID
    : goog.labs.userAgent.platform.isAndroid();
  goog.userAgent.IPHONE = goog.userAgent.PLATFORM_KNOWN_
    ? goog.userAgent.ASSUME_IPHONE
    : goog.labs.userAgent.platform.isIphone();
  goog.userAgent.IPAD = goog.userAgent.PLATFORM_KNOWN_
    ? goog.userAgent.ASSUME_IPAD
    : goog.labs.userAgent.platform.isIpad();
  goog.userAgent.IPOD = goog.userAgent.PLATFORM_KNOWN_
    ? goog.userAgent.ASSUME_IPOD
    : goog.labs.userAgent.platform.isIpod();
  goog.userAgent.IOS = goog.userAgent.PLATFORM_KNOWN_
    ? goog.userAgent.ASSUME_IPHONE ||
      goog.userAgent.ASSUME_IPAD ||
      goog.userAgent.ASSUME_IPOD
    : goog.labs.userAgent.platform.isIos();
  goog.userAgent.KAIOS = goog.userAgent.PLATFORM_KNOWN_
    ? goog.userAgent.ASSUME_KAIOS
    : goog.labs.userAgent.platform.isKaiOS();
  goog.userAgent.determineVersion_ = function () {
    var _ = "",
      _ = goog.userAgent.getVersionRegexResult_();
    return (
      _ && (_ = _ ? _[1] : ""),
      goog.userAgent._ &&
      ((_ = goog.userAgent.getDocumentMode_()), _ != null && _ > parseFloat(_))
        ? String(_)
        : _
    );
  };
  goog.userAgent.getVersionRegexResult_ = function () {
    var _ = goog.userAgent.getUserAgentString();
    if (goog.userAgent.GECKO) return /rv:([^\);]+)(\)|;)/.exec(_);
    if (goog.userAgent.EDGE) return /Edge\/([\d\.]+)/.exec(_);
    if (goog.userAgent._) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(_);
    if (goog.userAgent.WEBKIT) return /WebKit\/(\S+)/.exec(_);
    if (goog.userAgent.OPERA) return /(?:Version)[ \/]?(\S+)/.exec(_);
  };
  goog.userAgent.getDocumentMode_ = function () {
    var _ = goog.global.document;
    return _ ? _.documentMode : void 0;
  };
  goog.userAgent.VERSION = goog.userAgent.determineVersion_();
  goog.userAgent.compare = function (_, _) {
    return goog.string.compareVersions(_, _);
  };
  goog.userAgent.isVersionOrHigherCache_ = {};
  goog.userAgent.isVersionOrHigher = function (_) {
    return (
      goog.userAgent.ASSUME_ANY_VERSION ||
      goog.reflect.cache(
        goog.userAgent.isVersionOrHigherCache_,
        _,
        function () {
          return 0 <= goog.string.compareVersions(goog.userAgent.VERSION, _);
        },
      )
    );
  };
  goog.userAgent.isVersion = goog.userAgent.isVersionOrHigher;
  goog.userAgent.isDocumentModeOrHigher = function (_) {
    return Number(goog.userAgent.DOCUMENT_MODE) >= _;
  };
  goog.userAgent.isDocumentMode = goog.userAgent.isDocumentModeOrHigher;
  goog.userAgent.DOCUMENT_MODE = (function () {
    if (goog.global.document && goog.userAgent._) {
      var _ = goog.userAgent.getDocumentMode_();
      return _ || parseInt(goog.userAgent.VERSION, 10) || void 0;
    }
  })();
  goog.userAgent.product = {};
  goog.userAgent.product.ASSUME_FIREFOX = !1;
  goog.userAgent.product.ASSUME_IPHONE = !1;
  goog.userAgent.product.ASSUME_IPAD = !1;
  goog.userAgent.product.ASSUME_ANDROID = !1;
  goog.userAgent.product.ASSUME_CHROME = !1;
  goog.userAgent.product.ASSUME_SAFARI = !1;
  goog.userAgent.product.PRODUCT_KNOWN_ =
    goog.userAgent.ASSUME_IE ||
    goog.userAgent.ASSUME_EDGE ||
    goog.userAgent.ASSUME_OPERA ||
    goog.userAgent.product.ASSUME_FIREFOX ||
    goog.userAgent.product.ASSUME_IPHONE ||
    goog.userAgent.product.ASSUME_IPAD ||
    goog.userAgent.product.ASSUME_ANDROID ||
    goog.userAgent.product.ASSUME_CHROME ||
    goog.userAgent.product.ASSUME_SAFARI;
  goog.userAgent.product.OPERA = goog.userAgent.OPERA;
  goog.userAgent.product._ = goog.userAgent._;
  goog.userAgent.product.EDGE = goog.userAgent.EDGE;
  goog.userAgent.product.FIREFOX = goog.userAgent.product.PRODUCT_KNOWN_
    ? goog.userAgent.product.ASSUME_FIREFOX
    : goog.labs.userAgent.browser.isFirefox();
  goog.userAgent.product.isIphoneOrIpod_ = function () {
    return (
      goog.labs.userAgent.platform.isIphone() ||
      goog.labs.userAgent.platform.isIpod()
    );
  };
  goog.userAgent.product.IPHONE = goog.userAgent.product.PRODUCT_KNOWN_
    ? goog.userAgent.product.ASSUME_IPHONE
    : goog.userAgent.product.isIphoneOrIpod_();
  goog.userAgent.product.IPAD = goog.userAgent.product.PRODUCT_KNOWN_
    ? goog.userAgent.product.ASSUME_IPAD
    : goog.labs.userAgent.platform.isIpad();
  goog.userAgent.product.ANDROID = goog.userAgent.product.PRODUCT_KNOWN_
    ? goog.userAgent.product.ASSUME_ANDROID
    : goog.labs.userAgent.browser.isAndroidBrowser();
  goog.userAgent.product.CHROME = goog.userAgent.product.PRODUCT_KNOWN_
    ? goog.userAgent.product.ASSUME_CHROME
    : goog.labs.userAgent.browser.isChrome();
  goog.userAgent.product.isSafariDesktop_ = function () {
    return (
      goog.labs.userAgent.browser.isSafari() &&
      !goog.labs.userAgent.platform.isIos()
    );
  };
  goog.userAgent.product.SAFARI = goog.userAgent.product.PRODUCT_KNOWN_
    ? goog.userAgent.product.ASSUME_SAFARI
    : goog.userAgent.product.isSafariDesktop_();
  goog.crypt.base64 = {};
  goog.crypt.base64.DEFAULT_ALPHABET_COMMON_ =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  goog.crypt.base64.ENCODED_VALS =
    goog.crypt.base64.DEFAULT_ALPHABET_COMMON_ + "+/=";
  goog.crypt.base64.ENCODED_VALS_WEBSAFE =
    goog.crypt.base64.DEFAULT_ALPHABET_COMMON_ + "-_.";
  goog.crypt.base64.Alphabet = {
    DEFAULT: 0,
    NO_PADDING: 1,
    WEBSAFE: 2,
    WEBSAFE_DOT_PADDING: 3,
    WEBSAFE_NO_PADDING: 4,
  };
  goog.crypt.base64.paddingChars_ = "=.";
  goog.crypt.base64.isPadding_ = function (_) {
    return goog.string.contains(goog.crypt.base64.paddingChars_, _);
  };
  goog.crypt.base64.byteToCharMaps_ = {};
  goog.crypt.base64.charToByteMap_ = null;
  goog.crypt.base64.ASSUME_NATIVE_SUPPORT_ =
    goog.userAgent.GECKO ||
    (goog.userAgent.WEBKIT && !goog.userAgent.product.SAFARI) ||
    goog.userAgent.OPERA;
  goog.crypt.base64.HAS_NATIVE_ENCODE_ =
    goog.crypt.base64.ASSUME_NATIVE_SUPPORT_ ||
    typeof goog.global.btoa == "function";
  goog.crypt.base64.HAS_NATIVE_DECODE_ =
    goog.crypt.base64.ASSUME_NATIVE_SUPPORT_ ||
    (!goog.userAgent.product.SAFARI &&
      !goog.userAgent._ &&
      typeof goog.global.atob == "function");
  goog.crypt.base64.encodeByteArray = function (_, _) {
    goog.asserts.assert(
      goog.isArrayLike(_),
      "encodeByteArray takes an array as a parameter",
    ),
      _ === void 0 && (_ = goog.crypt.base64.Alphabet.DEFAULT),
      goog.crypt.base64.init_(),
      (_ = goog.crypt.base64.byteToCharMaps_[_]);
    for (var _ = [], _ = 0; _ < _.length; _ += 3) {
      var _ = _[_],
        _ = _ + 1 < _.length,
        _ = _ ? _[_ + 1] : 0,
        _ = _ + 2 < _.length,
        _ = _ ? _[_ + 2] : 0,
        _ = _ >> 2;
      (_ = ((_ & 3) << 4) | (_ >> 4)),
        (_ = ((_ & 15) << 2) | (_ >> 6)),
        (_ &= 63),
        _ || ((_ = 64), _ || (_ = 64)),
        _.push(_[_], _[_], _[_] || "", _[_] || "");
    }
    return _.join("");
  };
  goog.crypt.base64.encodeString = function (_, _) {
    return goog.crypt.base64.HAS_NATIVE_ENCODE_ && !_
      ? goog.global.btoa(_)
      : goog.crypt.base64.encodeByteArray(goog.crypt.stringToByteArray(_), _);
  };
  goog.crypt.base64.decodeString = function (_, _) {
    if (goog.crypt.base64.HAS_NATIVE_DECODE_ && !_) return goog.global.atob(_);
    var _ = "";
    return (
      goog.crypt.base64.decodeStringInternal_(_, function (_) {
        _ += String.fromCharCode(_);
      }),
      _
    );
  };
  goog.crypt.base64.decodeStringToByteArray = function (_, _) {
    var _ = [];
    return (
      goog.crypt.base64.decodeStringInternal_(_, function (_) {
        _.push(_);
      }),
      _
    );
  };
  goog.crypt.base64.decodeStringToUint8Array = function (_) {
    goog.asserts.assert(
      !goog.userAgent._ || goog.userAgent.isVersionOrHigher("10"),
      "Browser does not support typed arrays",
    );
    var _ = _.length,
      _ = (3 * _) / 4;
    _ % 3
      ? (_ = Math.floor(_))
      : goog.crypt.base64.isPadding_(_[_ - 1]) &&
        (_ = goog.crypt.base64.isPadding_(_[_ - 2]) ? _ - 2 : _ - 1);
    var _ = new Uint8Array(_),
      _ = 0;
    return (
      goog.crypt.base64.decodeStringInternal_(_, function (_) {
        _[_++] = _;
      }),
      _.subarray(0, _)
    );
  };
  goog.crypt.base64.decodeStringInternal_ = function (_, _) {
    function _(_) {
      for (; _ < _.length; ) {
        var _ = _.charAt(_++),
          _ = goog.crypt.base64.charToByteMap_[_];
        if (_ != null) return _;
        if (!goog.string.isEmptyOrWhitespace(_))
          throw Error("Unknown base64 encoding at char: " + _);
      }
      return _;
    }
    goog.crypt.base64.init_();
    for (var _ = 0; ; ) {
      var _ = _(-1),
        _ = _(0),
        _ = _(64),
        _ = _(64);
      if (_ === 64 && _ === -1) break;
      _((_ << 2) | (_ >> 4)),
        _ != 64 &&
          (_(((_ << 4) & 240) | (_ >> 2)), _ != 64 && _(((_ << 6) & 192) | _));
    }
  };
  goog.crypt.base64.init_ = function () {
    if (!goog.crypt.base64.charToByteMap_) {
      goog.crypt.base64.charToByteMap_ = {};
      for (
        var _ = goog.crypt.base64.DEFAULT_ALPHABET_COMMON_.split(""),
          _ = ["+/=", "+/", "-_=", "-_.", "-_"],
          _ = 0;
        5 > _;
        _++
      ) {
        var _ = _.concat(_[_].split(""));
        goog.crypt.base64.byteToCharMaps_[_] = _;
        for (var _ = 0; _ < _.length; _++) {
          var _ = _[_],
            _ = goog.crypt.base64.charToByteMap_[_];
          _ === void 0
            ? (goog.crypt.base64.charToByteMap_[_] = _)
            : goog.asserts.assert(_ === _);
        }
      }
    }
  };
  jspb.utils = {};
  jspb.utils.split64Low = 0;
  jspb.utils.split64High = 0;
  jspb.utils.splitUint64 = function (_) {
    var _ = _ >>> 0;
    (_ = Math.floor((_ - _) / jspb.BinaryConstants.TWO_TO_32) >>> 0),
      (jspb.utils.split64Low = _),
      (jspb.utils.split64High = _);
  };
  jspb.utils.splitInt64 = function (_) {
    var _ = 0 > _;
    _ = Math.abs(_);
    var _ = _ >>> 0;
    (_ = Math.floor((_ - _) / jspb.BinaryConstants.TWO_TO_32)),
      (_ >>>= 0),
      _ &&
        ((_ = ~_ >>> 0),
        (_ = (~_ >>> 0) + 1),
        4294967295 < _ && ((_ = 0), _++, 4294967295 < _ && (_ = 0))),
      (jspb.utils.split64Low = _),
      (jspb.utils.split64High = _);
  };
  jspb.utils.splitZigzag64 = function (_) {
    var _ = 0 > _;
    (_ = 2 * Math.abs(_)),
      jspb.utils.splitUint64(_),
      (_ = jspb.utils.split64Low);
    var _ = jspb.utils.split64High;
    _ &&
      (_ == 0
        ? _ == 0
          ? (_ = _ = 4294967295)
          : (_--, (_ = 4294967295))
        : _--),
      (jspb.utils.split64Low = _),
      (jspb.utils.split64High = _);
  };
  jspb.utils.splitFloat32 = function (_) {
    var _ = 0 > _ ? 1 : 0;
    if (((_ = _ ? -_ : _), _ === 0))
      0 < 1 / _
        ? ((jspb.utils.split64High = 0), (jspb.utils.split64Low = 0))
        : ((jspb.utils.split64High = 0), (jspb.utils.split64Low = 2147483648));
    else if (isNaN(_))
      (jspb.utils.split64High = 0), (jspb.utils.split64Low = 2147483647);
    else if (_ > jspb.BinaryConstants.FLOAT32_MAX)
      (jspb.utils.split64High = 0),
        (jspb.utils.split64Low = ((_ << 31) | 2139095040) >>> 0);
    else if (_ < jspb.BinaryConstants.FLOAT32_MIN)
      (_ = Math.round(_ / Math.pow(2, -149))),
        (jspb.utils.split64High = 0),
        (jspb.utils.split64Low = ((_ << 31) | _) >>> 0);
    else {
      var _ = Math.floor(Math.log(_) / Math.LN2);
      (_ *= Math.pow(2, -_)),
        (_ = Math.round(_ * jspb.BinaryConstants.TWO_TO_23)),
        16777216 <= _ && ++_,
        (jspb.utils.split64High = 0),
        (jspb.utils.split64Low =
          ((_ << 31) | ((_ + 127) << 23) | (_ & 8388607)) >>> 0);
    }
  };
  jspb.utils.splitFloat64 = function (_) {
    var _ = 0 > _ ? 1 : 0;
    if (((_ = _ ? -_ : _), _ === 0))
      (jspb.utils.split64High = 0 < 1 / _ ? 0 : 2147483648),
        (jspb.utils.split64Low = 0);
    else if (isNaN(_))
      (jspb.utils.split64High = 2147483647),
        (jspb.utils.split64Low = 4294967295);
    else if (_ > jspb.BinaryConstants.FLOAT64_MAX)
      (jspb.utils.split64High = ((_ << 31) | 2146435072) >>> 0),
        (jspb.utils.split64Low = 0);
    else if (_ < jspb.BinaryConstants.FLOAT64_MIN) {
      var _ = _ / Math.pow(2, -1074);
      (_ = _ / jspb.BinaryConstants.TWO_TO_32),
        (jspb.utils.split64High = ((_ << 31) | _) >>> 0),
        (jspb.utils.split64Low = _ >>> 0);
    } else {
      _ = _;
      var _ = 0;
      if (2 <= _) for (; 2 <= _ && 1023 > _; ) _++, (_ /= 2);
      else for (; 1 > _ && -1022 < _; ) (_ *= 2), _--;
      (_ = _ * Math.pow(2, -_)),
        (_ = (_ * jspb.BinaryConstants.TWO_TO_20) & 1048575),
        (_ = (_ * jspb.BinaryConstants.TWO_TO_52) >>> 0),
        (jspb.utils.split64High = ((_ << 31) | ((_ + 1023) << 20) | _) >>> 0),
        (jspb.utils.split64Low = _);
    }
  };
  jspb.utils.splitHash64 = function (_) {
    var _ = _.charCodeAt(0),
      _ = _.charCodeAt(1),
      _ = _.charCodeAt(2),
      _ = _.charCodeAt(3),
      _ = _.charCodeAt(4),
      _ = _.charCodeAt(5),
      _ = _.charCodeAt(6);
    (_ = _.charCodeAt(7)),
      (jspb.utils.split64Low = (_ + (_ << 8) + (_ << 16) + (_ << 24)) >>> 0),
      (jspb.utils.split64High = (_ + (_ << 8) + (_ << 16) + (_ << 24)) >>> 0);
  };
  jspb.utils.joinUint64 = function (_, _) {
    return _ * jspb.BinaryConstants.TWO_TO_32 + (_ >>> 0);
  };
  jspb.utils.joinInt64 = function (_, _) {
    var _ = _ & 2147483648;
    return (
      _ &&
        ((_ = (~_ + 1) >>> 0), (_ = ~_ >>> 0), _ == 0 && (_ = (_ + 1) >>> 0)),
      (_ = jspb.utils.joinUint64(_, _)),
      _ ? -_ : _
    );
  };
  jspb.utils.toZigzag64 = function (_, _, _) {
    var _ = _ >> 31;
    return _((_ << 1) ^ _, ((_ << 1) | (_ >>> 31)) ^ _);
  };
  jspb.utils.joinZigzag64 = function (_, _) {
    return jspb.utils.fromZigzag64(_, _, jspb.utils.joinInt64);
  };
  jspb.utils.fromZigzag64 = function (_, _, _) {
    var _ = -(_ & 1);
    return _(((_ >>> 1) | (_ << 31)) ^ _, (_ >>> 1) ^ _);
  };
  jspb.utils.joinFloat32 = function (_, _) {
    _ = 2 * (_ >> 31) + 1;
    var _ = (_ >>> 23) & 255;
    return (
      (_ &= 8388607),
      _ == 255
        ? _
          ? NaN
          : (1 / 0) * _
        : _ == 0
          ? _ * Math.pow(2, -149) * _
          : _ * Math.pow(2, _ - 150) * (_ + Math.pow(2, 23))
    );
  };
  jspb.utils.joinFloat64 = function (_, _) {
    var _ = 2 * (_ >> 31) + 1,
      _ = (_ >>> 20) & 2047;
    return (
      (_ = jspb.BinaryConstants.TWO_TO_32 * (_ & 1048575) + _),
      _ == 2047
        ? _
          ? NaN
          : (1 / 0) * _
        : _ == 0
          ? _ * Math.pow(2, -1074) * _
          : _ * Math.pow(2, _ - 1075) * (_ + jspb.BinaryConstants.TWO_TO_52)
    );
  };
  jspb.utils.joinHash64 = function (_, _) {
    return String.fromCharCode(
      (_ >>> 0) & 255,
      (_ >>> 8) & 255,
      (_ >>> 16) & 255,
      (_ >>> 24) & 255,
      (_ >>> 0) & 255,
      (_ >>> 8) & 255,
      (_ >>> 16) & 255,
      (_ >>> 24) & 255,
    );
  };
  jspb.utils.DIGITS = "0123456789abcdef".split("");
  jspb.utils.ZERO_CHAR_CODE_ = 48;
  jspb.utils.A_CHAR_CODE_ = 97;
  jspb.utils.joinUnsignedDecimalString = function (_, _) {
    function _(_, _) {
      return (_ = _ ? String(_) : ""), _ ? "0000000".slice(_.length) + _ : _;
    }
    if (2097151 >= _) return "" + jspb.utils.joinUint64(_, _);
    var _ = (((_ >>> 24) | (_ << 8)) >>> 0) & 16777215;
    return (
      (_ = (_ >> 16) & 65535),
      (_ = (_ & 16777215) + 6777216 * _ + 6710656 * _),
      (_ += 8147497 * _),
      (_ *= 2),
      1e7 <= _ && ((_ += Math.floor(_ / 1e7)), (_ %= 1e7)),
      1e7 <= _ && ((_ += Math.floor(_ / 1e7)), (_ %= 1e7)),
      _(_, 0) + _(_, _) + _(_, 1)
    );
  };
  jspb.utils.joinSignedDecimalString = function (_, _) {
    var _ = _ & 2147483648;
    return (
      _ && ((_ = (~_ + 1) >>> 0), (_ = (~_ + (_ == 0 ? 1 : 0)) >>> 0)),
      (_ = jspb.utils.joinUnsignedDecimalString(_, _)),
      _ ? "-" + _ : _
    );
  };
  jspb.utils.hash64ToDecimalString = function (_, _) {
    jspb.utils.splitHash64(_), (_ = jspb.utils.split64Low);
    var _ = jspb.utils.split64High;
    return _
      ? jspb.utils.joinSignedDecimalString(_, _)
      : jspb.utils.joinUnsignedDecimalString(_, _);
  };
  jspb.utils.hash64ArrayToDecimalStrings = function (_, _) {
    for (var _ = Array(_.length), _ = 0; _ < _.length; _++)
      _[_] = jspb.utils.hash64ToDecimalString(_[_], _);
    return _;
  };
  jspb.utils.decimalStringToHash64 = function (_) {
    function _(_, _) {
      for (var _ = 0; 8 > _ && (_ !== 1 || 0 < _); _++)
        (_ = _ * _[_] + _), (_[_] = _ & 255), (_ >>>= 8);
    }
    function _() {
      for (var _ = 0; 8 > _; _++) _[_] = ~_[_] & 255;
    }
    jspb.asserts.assert(0 < _.length);
    var _ = !1;
    _[0] === "-" && ((_ = !0), (_ = _.slice(1)));
    for (var _ = [0, 0, 0, 0, 0, 0, 0, 0], _ = 0; _ < _.length; _++)
      _(10, _.charCodeAt(_) - jspb.utils.ZERO_CHAR_CODE_);
    return _ && (_(), _(1, 1)), goog.crypt.byteArrayToString(_);
  };
  jspb.utils.splitDecimalString = function (_) {
    jspb.utils.splitHash64(jspb.utils.decimalStringToHash64(_));
  };
  jspb.utils.toHexDigit_ = function (_) {
    return String.fromCharCode(
      10 > _
        ? jspb.utils.ZERO_CHAR_CODE_ + _
        : jspb.utils.A_CHAR_CODE_ - 10 + _,
    );
  };
  jspb.utils.fromHexCharCode_ = function (_) {
    return _ >= jspb.utils.A_CHAR_CODE_
      ? _ - jspb.utils.A_CHAR_CODE_ + 10
      : _ - jspb.utils.ZERO_CHAR_CODE_;
  };
  jspb.utils.hash64ToHexString = function (_) {
    var _ = Array(18);
    (_[0] = "0"), (_[1] = "x");
    for (var _ = 0; 8 > _; _++) {
      var _ = _.charCodeAt(7 - _);
      (_[2 * _ + 2] = jspb.utils.toHexDigit_(_ >> 4)),
        (_[2 * _ + 3] = jspb.utils.toHexDigit_(_ & 15));
    }
    return _.join("");
  };
  jspb.utils.hexStringToHash64 = function (_) {
    (_ = _.toLowerCase()),
      jspb.asserts.assert(_.length == 18),
      jspb.asserts.assert(_[0] == "0"),
      jspb.asserts.assert(_[1] == "x");
    for (var _ = "", _ = 0; 8 > _; _++) {
      var _ = jspb.utils.fromHexCharCode_(_.charCodeAt(2 * _ + 2)),
        _ = jspb.utils.fromHexCharCode_(_.charCodeAt(2 * _ + 3));
      _ = String.fromCharCode(16 * _ + _) + _;
    }
    return _;
  };
  jspb.utils.hash64ToNumber = function (_, _) {
    jspb.utils.splitHash64(_), (_ = jspb.utils.split64Low);
    var _ = jspb.utils.split64High;
    return _ ? jspb.utils.joinInt64(_, _) : jspb.utils.joinUint64(_, _);
  };
  jspb.utils.numberToHash64 = function (_) {
    return (
      jspb.utils.splitInt64(_),
      jspb.utils.joinHash64(jspb.utils.split64Low, jspb.utils.split64High)
    );
  };
  jspb.utils.countVarints = function (_, _, _) {
    for (var _ = 0, _ = _; _ < _; _++) _ += _[_] >> 7;
    return _ - _ - _;
  };
  jspb.utils.countVarintFields = function (_, _, _, _) {
    var _ = 0;
    if (((_ = 8 * _ + jspb.BinaryConstants.WireType.VARINT), 128 > _))
      for (; _ < _ && _[_++] == _; )
        for (_++; ; ) {
          var _ = _[_++];
          if ((_ & 128) == 0) break;
        }
    else
      for (; _ < _; ) {
        for (_ = _; 128 < _; ) {
          if (_[_] != ((_ & 127) | 128)) return _;
          _++, (_ >>= 7);
        }
        if (_[_++] != _) break;
        for (_++; (_ = _[_++]), (_ & 128) != 0; );
      }
    return _;
  };
  jspb.utils.countFixedFields_ = function (_, _, _, _, _) {
    var _ = 0;
    if (128 > _) for (; _ < _ && _[_++] == _; ) _++, (_ += _);
    else
      for (; _ < _; ) {
        for (var _ = _; 128 < _; ) {
          if (_[_++] != ((_ & 127) | 128)) return _;
          _ >>= 7;
        }
        if (_[_++] != _) break;
        _++, (_ += _);
      }
    return _;
  };
  jspb.utils.countFixed32Fields = function (_, _, _, _) {
    return jspb.utils.countFixedFields_(
      _,
      _,
      _,
      8 * _ + jspb.BinaryConstants.WireType.FIXED32,
      4,
    );
  };
  jspb.utils.countFixed64Fields = function (_, _, _, _) {
    return jspb.utils.countFixedFields_(
      _,
      _,
      _,
      8 * _ + jspb.BinaryConstants.WireType.FIXED64,
      8,
    );
  };
  jspb.utils.countDelimitedFields = function (_, _, _, _) {
    var _ = 0;
    for (_ = 8 * _ + jspb.BinaryConstants.WireType.DELIMITED; _ < _; ) {
      for (var _ = _; 128 < _; ) {
        if (_[_++] != ((_ & 127) | 128)) return _;
        _ >>= 7;
      }
      if (_[_++] != _) break;
      _++;
      for (
        var _ = 0, _ = 1;
        (_ = _[_++]), (_ += (_ & 127) * _), (_ *= 128), (_ & 128) != 0;
      );
      _ += _;
    }
    return _;
  };
  jspb.utils.debugBytesToTextFormat = function (_) {
    var _ = '"';
    if (_) {
      _ = jspb.utils.byteSourceToUint8Array(_);
      for (var _ = 0; _ < _.length; _++)
        (_ += "\\x"), 16 > _[_] && (_ += "0"), (_ += _[_].toString(16));
    }
    return _ + '"';
  };
  jspb.utils.debugScalarToTextFormat = function (_) {
    return typeof _ == "string" ? goog.string.quote(_) : _.toString();
  };
  jspb.utils.stringToByteArray = function (_) {
    for (var _ = new Uint8Array(_.length), _ = 0; _ < _.length; _++) {
      var _ = _.charCodeAt(_);
      if (255 < _)
        throw Error(
          "Conversion error: string contains codepoint outside of byte range",
        );
      _[_] = _;
    }
    return _;
  };
  jspb.utils.byteSourceToUint8Array = function (_) {
    return _.constructor === Uint8Array
      ? _
      : _.constructor === ArrayBuffer || _.constructor === Array
        ? new Uint8Array(_)
        : _.constructor === String
          ? goog.crypt.base64.decodeStringToUint8Array(_)
          : _ instanceof Uint8Array
            ? new Uint8Array(_.buffer, _.byteOffset, _.byteLength)
            : (jspb.asserts.fail("Type not convertible to Uint8Array."),
              new Uint8Array(0));
  };
  jspb.BinaryDecoder = function (_, _, _) {
    (this.bytes_ = null),
      (this.cursor_ = this.end_ = this.start_ = 0),
      (this.error_ = !1),
      _ && this.setBlock(_, _, _);
  };
  jspb.BinaryDecoder.instanceCache_ = [];
  jspb.BinaryDecoder.alloc = function (_, _, _) {
    if (jspb.BinaryDecoder.instanceCache_.length) {
      var _ = jspb.BinaryDecoder.instanceCache_.pop();
      return _ && _.setBlock(_, _, _), _;
    }
    return new jspb.BinaryDecoder(_, _, _);
  };
  jspb.BinaryDecoder.prototype.free = function () {
    this.clear(),
      100 > jspb.BinaryDecoder.instanceCache_.length &&
        jspb.BinaryDecoder.instanceCache_.push(this);
  };
  jspb.BinaryDecoder.prototype.clone = function () {
    return jspb.BinaryDecoder.alloc(
      this.bytes_,
      this.start_,
      this.end_ - this.start_,
    );
  };
  jspb.BinaryDecoder.prototype.clear = function () {
    (this.bytes_ = null),
      (this.cursor_ = this.end_ = this.start_ = 0),
      (this.error_ = !1);
  };
  jspb.BinaryDecoder.prototype.getBuffer = function () {
    return this.bytes_;
  };
  jspb.BinaryDecoder.prototype.setBlock = function (_, _, _) {
    (this.bytes_ = jspb.utils.byteSourceToUint8Array(_)),
      (this.start_ = _ !== void 0 ? _ : 0),
      (this.end_ = _ !== void 0 ? this.start_ + _ : this.bytes_.length),
      (this.cursor_ = this.start_);
  };
  jspb.BinaryDecoder.prototype.getEnd = function () {
    return this.end_;
  };
  jspb.BinaryDecoder.prototype.setEnd = function (_) {
    this.end_ = _;
  };
  jspb.BinaryDecoder.prototype.reset = function () {
    this.cursor_ = this.start_;
  };
  jspb.BinaryDecoder.prototype.getCursor = function () {
    return this.cursor_;
  };
  jspb.BinaryDecoder.prototype.setCursor = function (_) {
    this.cursor_ = _;
  };
  jspb.BinaryDecoder.prototype.advance = function (_) {
    (this.cursor_ += _), jspb.asserts.assert(this.cursor_ <= this.end_);
  };
  jspb.BinaryDecoder.prototype.atEnd = function () {
    return this.cursor_ == this.end_;
  };
  jspb.BinaryDecoder.prototype.pastEnd = function () {
    return this.cursor_ > this.end_;
  };
  jspb.BinaryDecoder.prototype.getError = function () {
    return this.error_ || 0 > this.cursor_ || this.cursor_ > this.end_;
  };
  jspb.BinaryDecoder.prototype.readSplitVarint64 = function (_) {
    for (var _ = 128, _ = 0, _ = 0, _ = 0; 4 > _ && 128 <= _; _++)
      (_ = this.bytes_[this.cursor_++]), (_ |= (_ & 127) << (7 * _));
    if (
      (128 <= _ &&
        ((_ = this.bytes_[this.cursor_++]),
        (_ |= (_ & 127) << 28),
        (_ |= (_ & 127) >> 4)),
      128 <= _)
    )
      for (_ = 0; 5 > _ && 128 <= _; _++)
        (_ = this.bytes_[this.cursor_++]), (_ |= (_ & 127) << (7 * _ + 3));
    if (128 > _) return _(_ >>> 0, _ >>> 0);
    jspb.asserts.fail("Failed to read varint, encoding is invalid."),
      (this.error_ = !0);
  };
  jspb.BinaryDecoder.prototype.readSplitZigzagVarint64 = function (_) {
    return this.readSplitVarint64(function (_, _) {
      return jspb.utils.fromZigzag64(_, _, _);
    });
  };
  jspb.BinaryDecoder.prototype.readSplitFixed64 = function (_) {
    var _ = this.bytes_,
      _ = this.cursor_;
    this.cursor_ += 8;
    for (var _ = 0, _ = 0, _ = _ + 7; _ >= _; _--)
      (_ = (_ << 8) | _[_]), (_ = (_ << 8) | _[_ + 4]);
    return _(_, _);
  };
  jspb.BinaryDecoder.prototype.skipVarint = function () {
    for (; this.bytes_[this.cursor_] & 128; ) this.cursor_++;
    this.cursor_++;
  };
  jspb.BinaryDecoder.prototype.unskipVarint = function (_) {
    for (; 128 < _; ) this.cursor_--, (_ >>>= 7);
    this.cursor_--;
  };
  jspb.BinaryDecoder.prototype.readUnsignedVarint32 = function () {
    var _ = this.bytes_,
      _ = _[this.cursor_ + 0],
      _ = _ & 127;
    return 128 > _
      ? ((this.cursor_ += 1), jspb.asserts.assert(this.cursor_ <= this.end_), _)
      : ((_ = _[this.cursor_ + 1]),
        (_ |= (_ & 127) << 7),
        128 > _
          ? ((this.cursor_ += 2),
            jspb.asserts.assert(this.cursor_ <= this.end_),
            _)
          : ((_ = _[this.cursor_ + 2]),
            (_ |= (_ & 127) << 14),
            128 > _
              ? ((this.cursor_ += 3),
                jspb.asserts.assert(this.cursor_ <= this.end_),
                _)
              : ((_ = _[this.cursor_ + 3]),
                (_ |= (_ & 127) << 21),
                128 > _
                  ? ((this.cursor_ += 4),
                    jspb.asserts.assert(this.cursor_ <= this.end_),
                    _)
                  : ((_ = _[this.cursor_ + 4]),
                    (_ |= (_ & 15) << 28),
                    128 > _
                      ? ((this.cursor_ += 5),
                        jspb.asserts.assert(this.cursor_ <= this.end_),
                        _ >>> 0)
                      : ((this.cursor_ += 5),
                        128 <= _[this.cursor_++] &&
                          128 <= _[this.cursor_++] &&
                          128 <= _[this.cursor_++] &&
                          128 <= _[this.cursor_++] &&
                          128 <= _[this.cursor_++] &&
                          jspb.asserts.assert(!1),
                        jspb.asserts.assert(this.cursor_ <= this.end_),
                        _)))));
  };
  jspb.BinaryDecoder.prototype.readSignedVarint32 = function () {
    return ~~this.readUnsignedVarint32();
  };
  jspb.BinaryDecoder.prototype.readUnsignedVarint32String = function () {
    return this.readUnsignedVarint32().toString();
  };
  jspb.BinaryDecoder.prototype.readSignedVarint32String = function () {
    return this.readSignedVarint32().toString();
  };
  jspb.BinaryDecoder.prototype.readZigzagVarint32 = function () {
    var _ = this.readUnsignedVarint32();
    return (_ >>> 1) ^ -(_ & 1);
  };
  jspb.BinaryDecoder.prototype.readUnsignedVarint64 = function () {
    return this.readSplitVarint64(jspb.utils.joinUint64);
  };
  jspb.BinaryDecoder.prototype.readUnsignedVarint64String = function () {
    return this.readSplitVarint64(jspb.utils.joinUnsignedDecimalString);
  };
  jspb.BinaryDecoder.prototype.readSignedVarint64 = function () {
    return this.readSplitVarint64(jspb.utils.joinInt64);
  };
  jspb.BinaryDecoder.prototype.readSignedVarint64String = function () {
    return this.readSplitVarint64(jspb.utils.joinSignedDecimalString);
  };
  jspb.BinaryDecoder.prototype.readZigzagVarint64 = function () {
    return this.readSplitVarint64(jspb.utils.joinZigzag64);
  };
  jspb.BinaryDecoder.prototype.readZigzagVarintHash64 = function () {
    return this.readSplitZigzagVarint64(jspb.utils.joinHash64);
  };
  jspb.BinaryDecoder.prototype.readZigzagVarint64String = function () {
    return this.readSplitZigzagVarint64(jspb.utils.joinSignedDecimalString);
  };
  jspb.BinaryDecoder.prototype.readUint8 = function () {
    var _ = this.bytes_[this.cursor_ + 0];
    return (
      (this.cursor_ += 1), jspb.asserts.assert(this.cursor_ <= this.end_), _
    );
  };
  jspb.BinaryDecoder.prototype.readUint16 = function () {
    var _ = this.bytes_[this.cursor_ + 0],
      _ = this.bytes_[this.cursor_ + 1];
    return (
      (this.cursor_ += 2),
      jspb.asserts.assert(this.cursor_ <= this.end_),
      (_ << 0) | (_ << 8)
    );
  };
  jspb.BinaryDecoder.prototype.readUint32 = function () {
    var _ = this.bytes_[this.cursor_ + 0],
      _ = this.bytes_[this.cursor_ + 1],
      _ = this.bytes_[this.cursor_ + 2],
      _ = this.bytes_[this.cursor_ + 3];
    return (
      (this.cursor_ += 4),
      jspb.asserts.assert(this.cursor_ <= this.end_),
      ((_ << 0) | (_ << 8) | (_ << 16) | (_ << 24)) >>> 0
    );
  };
  jspb.BinaryDecoder.prototype.readUint64 = function () {
    var _ = this.readUint32(),
      _ = this.readUint32();
    return jspb.utils.joinUint64(_, _);
  };
  jspb.BinaryDecoder.prototype.readUint64String = function () {
    var _ = this.readUint32(),
      _ = this.readUint32();
    return jspb.utils.joinUnsignedDecimalString(_, _);
  };
  jspb.BinaryDecoder.prototype.readInt8 = function () {
    var _ = this.bytes_[this.cursor_ + 0];
    return (
      (this.cursor_ += 1),
      jspb.asserts.assert(this.cursor_ <= this.end_),
      (_ << 24) >> 24
    );
  };
  jspb.BinaryDecoder.prototype.readInt16 = function () {
    var _ = this.bytes_[this.cursor_ + 0],
      _ = this.bytes_[this.cursor_ + 1];
    return (
      (this.cursor_ += 2),
      jspb.asserts.assert(this.cursor_ <= this.end_),
      (((_ << 0) | (_ << 8)) << 16) >> 16
    );
  };
  jspb.BinaryDecoder.prototype.readInt32 = function () {
    var _ = this.bytes_[this.cursor_ + 0],
      _ = this.bytes_[this.cursor_ + 1],
      _ = this.bytes_[this.cursor_ + 2],
      _ = this.bytes_[this.cursor_ + 3];
    return (
      (this.cursor_ += 4),
      jspb.asserts.assert(this.cursor_ <= this.end_),
      (_ << 0) | (_ << 8) | (_ << 16) | (_ << 24)
    );
  };
  jspb.BinaryDecoder.prototype.readInt64 = function () {
    var _ = this.readUint32(),
      _ = this.readUint32();
    return jspb.utils.joinInt64(_, _);
  };
  jspb.BinaryDecoder.prototype.readInt64String = function () {
    var _ = this.readUint32(),
      _ = this.readUint32();
    return jspb.utils.joinSignedDecimalString(_, _);
  };
  jspb.BinaryDecoder.prototype.readFloat = function () {
    var _ = this.readUint32();
    return jspb.utils.joinFloat32(_, 0);
  };
  jspb.BinaryDecoder.prototype.readDouble = function () {
    var _ = this.readUint32(),
      _ = this.readUint32();
    return jspb.utils.joinFloat64(_, _);
  };
  jspb.BinaryDecoder.prototype.readBool = function () {
    return !!this.bytes_[this.cursor_++];
  };
  jspb.BinaryDecoder.prototype.readEnum = function () {
    return this.readSignedVarint32();
  };
  jspb.BinaryDecoder.prototype.readString = function (_) {
    var _ = this.bytes_,
      _ = this.cursor_;
    _ = _ + _;
    for (var _ = [], _ = ""; _ < _; ) {
      var _ = _[_++];
      if (128 > _) _.push(_);
      else {
        if (192 > _) continue;
        if (224 > _) {
          var _ = _[_++];
          _.push(((_ & 31) << 6) | (_ & 63));
        } else if (240 > _) {
          _ = _[_++];
          var _ = _[_++];
          _.push(((_ & 15) << 12) | ((_ & 63) << 6) | (_ & 63));
        } else if (248 > _) {
          (_ = _[_++]), (_ = _[_++]);
          var _ = _[_++];
          (_ = ((_ & 7) << 18) | ((_ & 63) << 12) | ((_ & 63) << 6) | (_ & 63)),
            (_ -= 65536),
            _.push(((_ >> 10) & 1023) + 55296, (_ & 1023) + 56320);
        }
      }
      8192 <= _.length &&
        ((_ += String.fromCharCode.apply(null, _)), (_.length = 0));
    }
    return (_ += goog.crypt.byteArrayToString(_)), (this.cursor_ = _), _;
  };
  jspb.BinaryDecoder.prototype.readStringWithLength = function () {
    var _ = this.readUnsignedVarint32();
    return this.readString(_);
  };
  jspb.BinaryDecoder.prototype.readBytes = function (_) {
    if (0 > _ || this.cursor_ + _ > this.bytes_.length)
      return (
        (this.error_ = !0),
        jspb.asserts.fail("Invalid byte length!"),
        new Uint8Array(0)
      );
    var _ = this.bytes_.subarray(this.cursor_, this.cursor_ + _);
    return (
      (this.cursor_ += _), jspb.asserts.assert(this.cursor_ <= this.end_), _
    );
  };
  jspb.BinaryDecoder.prototype.readVarintHash64 = function () {
    return this.readSplitVarint64(jspb.utils.joinHash64);
  };
  jspb.BinaryDecoder.prototype.readFixedHash64 = function () {
    var _ = this.bytes_,
      _ = this.cursor_,
      _ = _[_ + 0],
      _ = _[_ + 1],
      _ = _[_ + 2],
      _ = _[_ + 3],
      _ = _[_ + 4],
      _ = _[_ + 5],
      _ = _[_ + 6];
    return (
      (_ = _[_ + 7]),
      (this.cursor_ += 8),
      String.fromCharCode(_, _, _, _, _, _, _, _)
    );
  };
  jspb.BinaryReader = function (_, _, _) {
    (this.decoder_ = jspb.BinaryDecoder.alloc(_, _, _)),
      (this.fieldCursor_ = this.decoder_.getCursor()),
      (this.nextField_ = jspb.BinaryConstants.INVALID_FIELD_NUMBER),
      (this.nextWireType_ = jspb.BinaryConstants.WireType.INVALID),
      (this.error_ = !1),
      (this.readCallbacks_ = null);
  };
  jspb.BinaryReader.instanceCache_ = [];
  jspb.BinaryReader.alloc = function (_, _, _) {
    if (jspb.BinaryReader.instanceCache_.length) {
      var _ = jspb.BinaryReader.instanceCache_.pop();
      return _ && _.decoder_.setBlock(_, _, _), _;
    }
    return new jspb.BinaryReader(_, _, _);
  };
  jspb.BinaryReader.prototype.alloc = jspb.BinaryReader.alloc;
  jspb.BinaryReader.prototype.free = function () {
    this.decoder_.clear(),
      (this.nextField_ = jspb.BinaryConstants.INVALID_FIELD_NUMBER),
      (this.nextWireType_ = jspb.BinaryConstants.WireType.INVALID),
      (this.error_ = !1),
      (this.readCallbacks_ = null),
      100 > jspb.BinaryReader.instanceCache_.length &&
        jspb.BinaryReader.instanceCache_.push(this);
  };
  jspb.BinaryReader.prototype.getFieldCursor = function () {
    return this.fieldCursor_;
  };
  jspb.BinaryReader.prototype.getCursor = function () {
    return this.decoder_.getCursor();
  };
  jspb.BinaryReader.prototype.getBuffer = function () {
    return this.decoder_.getBuffer();
  };
  jspb.BinaryReader.prototype.getFieldNumber = function () {
    return this.nextField_;
  };
  goog.exportProperty(
    jspb.BinaryReader.prototype,
    "getFieldNumber",
    jspb.BinaryReader.prototype.getFieldNumber,
  );
  jspb.BinaryReader.prototype.getWireType = function () {
    return this.nextWireType_;
  };
  jspb.BinaryReader.prototype.isDelimited = function () {
    return this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED;
  };
  goog.exportProperty(
    jspb.BinaryReader.prototype,
    "isDelimited",
    jspb.BinaryReader.prototype.isDelimited,
  );
  jspb.BinaryReader.prototype.isEndGroup = function () {
    return this.nextWireType_ == jspb.BinaryConstants.WireType.END_GROUP;
  };
  goog.exportProperty(
    jspb.BinaryReader.prototype,
    "isEndGroup",
    jspb.BinaryReader.prototype.isEndGroup,
  );
  jspb.BinaryReader.prototype.getError = function () {
    return this.error_ || this.decoder_.getError();
  };
  jspb.BinaryReader.prototype.setBlock = function (_, _, _) {
    this.decoder_.setBlock(_, _, _),
      (this.nextField_ = jspb.BinaryConstants.INVALID_FIELD_NUMBER),
      (this.nextWireType_ = jspb.BinaryConstants.WireType.INVALID);
  };
  jspb.BinaryReader.prototype.reset = function () {
    this.decoder_.reset(),
      (this.nextField_ = jspb.BinaryConstants.INVALID_FIELD_NUMBER),
      (this.nextWireType_ = jspb.BinaryConstants.WireType.INVALID);
  };
  jspb.BinaryReader.prototype.advance = function (_) {
    this.decoder_.advance(_);
  };
  jspb.BinaryReader.prototype.nextField = function () {
    if (this.decoder_.atEnd()) return !1;
    if (this.getError()) return jspb.asserts.fail("Decoder hit an error"), !1;
    this.fieldCursor_ = this.decoder_.getCursor();
    var _ = this.decoder_.readUnsignedVarint32(),
      _ = _ >>> 3;
    return (
      (_ &= 7),
      _ != jspb.BinaryConstants.WireType.VARINT &&
      _ != jspb.BinaryConstants.WireType.FIXED32 &&
      _ != jspb.BinaryConstants.WireType.FIXED64 &&
      _ != jspb.BinaryConstants.WireType.DELIMITED &&
      _ != jspb.BinaryConstants.WireType.START_GROUP &&
      _ != jspb.BinaryConstants.WireType.END_GROUP
        ? (jspb.asserts.fail(
            "Invalid wire type: %s (at position %s)",
            _,
            this.fieldCursor_,
          ),
          (this.error_ = !0),
          !1)
        : ((this.nextField_ = _), (this.nextWireType_ = _), !0)
    );
  };
  goog.exportProperty(
    jspb.BinaryReader.prototype,
    "nextField",
    jspb.BinaryReader.prototype.nextField,
  );
  jspb.BinaryReader.prototype.unskipHeader = function () {
    this.decoder_.unskipVarint((this.nextField_ << 3) | this.nextWireType_);
  };
  jspb.BinaryReader.prototype.skipMatchingFields = function () {
    var _ = this.nextField_;
    for (this.unskipHeader(); this.nextField() && this.getFieldNumber() == _; )
      this.skipField();
    this.decoder_.atEnd() || this.unskipHeader();
  };
  jspb.BinaryReader.prototype.skipVarintField = function () {
    this.nextWireType_ != jspb.BinaryConstants.WireType.VARINT
      ? (jspb.asserts.fail("Invalid wire type for skipVarintField"),
        this.skipField())
      : this.decoder_.skipVarint();
  };
  jspb.BinaryReader.prototype.skipDelimitedField = function () {
    if (this.nextWireType_ != jspb.BinaryConstants.WireType.DELIMITED)
      jspb.asserts.fail("Invalid wire type for skipDelimitedField"),
        this.skipField();
    else {
      var _ = this.decoder_.readUnsignedVarint32();
      this.decoder_.advance(_);
    }
  };
  jspb.BinaryReader.prototype.skipFixed32Field = function () {
    this.nextWireType_ != jspb.BinaryConstants.WireType.FIXED32
      ? (jspb.asserts.fail("Invalid wire type for skipFixed32Field"),
        this.skipField())
      : this.decoder_.advance(4);
  };
  jspb.BinaryReader.prototype.skipFixed64Field = function () {
    this.nextWireType_ != jspb.BinaryConstants.WireType.FIXED64
      ? (jspb.asserts.fail("Invalid wire type for skipFixed64Field"),
        this.skipField())
      : this.decoder_.advance(8);
  };
  jspb.BinaryReader.prototype.skipGroup = function () {
    var _ = this.nextField_;
    do {
      if (!this.nextField()) {
        jspb.asserts.fail("Unmatched start-group tag: stream EOF"),
          (this.error_ = !0);
        break;
      }
      if (this.nextWireType_ == jspb.BinaryConstants.WireType.END_GROUP) {
        this.nextField_ != _ &&
          (jspb.asserts.fail("Unmatched end-group tag"), (this.error_ = !0));
        break;
      }
      this.skipField();
    } while (!0);
  };
  jspb.BinaryReader.prototype.skipField = function () {
    switch (this.nextWireType_) {
      case jspb.BinaryConstants.WireType.VARINT:
        this.skipVarintField();
        break;
      case jspb.BinaryConstants.WireType.FIXED64:
        this.skipFixed64Field();
        break;
      case jspb.BinaryConstants.WireType.DELIMITED:
        this.skipDelimitedField();
        break;
      case jspb.BinaryConstants.WireType.FIXED32:
        this.skipFixed32Field();
        break;
      case jspb.BinaryConstants.WireType.START_GROUP:
        this.skipGroup();
        break;
      default:
        jspb.asserts.fail("Invalid wire encoding for field.");
    }
  };
  jspb.BinaryReader.prototype.registerReadCallback = function (_, _) {
    this.readCallbacks_ === null && (this.readCallbacks_ = {}),
      jspb.asserts.assert(!this.readCallbacks_[_]),
      (this.readCallbacks_[_] = _);
  };
  jspb.BinaryReader.prototype.runReadCallback = function (_) {
    return (
      jspb.asserts.assert(this.readCallbacks_ !== null),
      (_ = this.readCallbacks_[_]),
      jspb.asserts.assert(_),
      _(this)
    );
  };
  jspb.BinaryReader.prototype.readAny = function (_) {
    this.nextWireType_ = jspb.BinaryConstants.FieldTypeToWireType(_);
    var _ = jspb.BinaryConstants.FieldType;
    switch (_) {
      case _.DOUBLE:
        return this.readDouble();
      case _.FLOAT:
        return this.readFloat();
      case _.INT64:
        return this.readInt64();
      case _.UINT64:
        return this.readUint64();
      case _.INT32:
        return this.readInt32();
      case _.FIXED64:
        return this.readFixed64();
      case _.FIXED32:
        return this.readFixed32();
      case _.BOOL:
        return this.readBool();
      case _.STRING:
        return this.readString();
      case _.GROUP:
        jspb.asserts.fail("Group field type not supported in readAny()");
      case _.MESSAGE:
        jspb.asserts.fail("Message field type not supported in readAny()");
      case _.BYTES:
        return this.readBytes();
      case _.UINT32:
        return this.readUint32();
      case _.ENUM:
        return this.readEnum();
      case _.SFIXED32:
        return this.readSfixed32();
      case _.SFIXED64:
        return this.readSfixed64();
      case _.SINT32:
        return this.readSint32();
      case _.SINT64:
        return this.readSint64();
      case _.FHASH64:
        return this.readFixedHash64();
      case _.VHASH64:
        return this.readVarintHash64();
      default:
        jspb.asserts.fail("Invalid field type in readAny()");
    }
    return 0;
  };
  jspb.BinaryReader.prototype.readMessage = function (_, _) {
    jspb.asserts.assert(
      this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED,
    );
    var _ = this.decoder_.getEnd(),
      _ = this.decoder_.readUnsignedVarint32();
    (_ = this.decoder_.getCursor() + _),
      this.decoder_.setEnd(_),
      _(_, this),
      this.decoder_.setCursor(_),
      this.decoder_.setEnd(_);
  };
  goog.exportProperty(
    jspb.BinaryReader.prototype,
    "readMessage",
    jspb.BinaryReader.prototype.readMessage,
  );
  jspb.BinaryReader.prototype.readGroup = function (_, _, _) {
    jspb.asserts.assert(
      this.nextWireType_ == jspb.BinaryConstants.WireType.START_GROUP,
    ),
      jspb.asserts.assert(this.nextField_ == _),
      _(_, this),
      this.error_ ||
        this.nextWireType_ == jspb.BinaryConstants.WireType.END_GROUP ||
        (jspb.asserts.fail(
          "Group submessage did not end with an END_GROUP tag",
        ),
        (this.error_ = !0));
  };
  goog.exportProperty(
    jspb.BinaryReader.prototype,
    "readGroup",
    jspb.BinaryReader.prototype.readGroup,
  );
  jspb.BinaryReader.prototype.getFieldDecoder = function () {
    jspb.asserts.assert(
      this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED,
    );
    var _ = this.decoder_.readUnsignedVarint32(),
      _ = this.decoder_.getCursor(),
      _ = _ + _;
    return (
      (_ = jspb.BinaryDecoder.alloc(this.decoder_.getBuffer(), _, _)),
      this.decoder_.setCursor(_),
      _
    );
  };
  jspb.BinaryReader.prototype.readInt32 = function () {
    return (
      jspb.asserts.assert(
        this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT,
      ),
      this.decoder_.readSignedVarint32()
    );
  };
  goog.exportProperty(
    jspb.BinaryReader.prototype,
    "readInt32",
    jspb.BinaryReader.prototype.readInt32,
  );
  jspb.BinaryReader.prototype.readInt32String = function () {
    return (
      jspb.asserts.assert(
        this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT,
      ),
      this.decoder_.readSignedVarint32String()
    );
  };
  jspb.BinaryReader.prototype.readInt64 = function () {
    return (
      jspb.asserts.assert(
        this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT,
      ),
      this.decoder_.readSignedVarint64()
    );
  };
  goog.exportProperty(
    jspb.BinaryReader.prototype,
    "readInt64",
    jspb.BinaryReader.prototype.readInt64,
  );
  jspb.BinaryReader.prototype.readInt64String = function () {
    return (
      jspb.asserts.assert(
        this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT,
      ),
      this.decoder_.readSignedVarint64String()
    );
  };
  jspb.BinaryReader.prototype.readUint32 = function () {
    return (
      jspb.asserts.assert(
        this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT,
      ),
      this.decoder_.readUnsignedVarint32()
    );
  };
  goog.exportProperty(
    jspb.BinaryReader.prototype,
    "readUint32",
    jspb.BinaryReader.prototype.readUint32,
  );
  jspb.BinaryReader.prototype.readUint32String = function () {
    return (
      jspb.asserts.assert(
        this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT,
      ),
      this.decoder_.readUnsignedVarint32String()
    );
  };
  jspb.BinaryReader.prototype.readUint64 = function () {
    return (
      jspb.asserts.assert(
        this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT,
      ),
      this.decoder_.readUnsignedVarint64()
    );
  };
  goog.exportProperty(
    jspb.BinaryReader.prototype,
    "readUint64",
    jspb.BinaryReader.prototype.readUint64,
  );
  jspb.BinaryReader.prototype.readUint64String = function () {
    return (
      jspb.asserts.assert(
        this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT,
      ),
      this.decoder_.readUnsignedVarint64String()
    );
  };
  jspb.BinaryReader.prototype.readSint32 = function () {
    return (
      jspb.asserts.assert(
        this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT,
      ),
      this.decoder_.readZigzagVarint32()
    );
  };
  goog.exportProperty(
    jspb.BinaryReader.prototype,
    "readSint32",
    jspb.BinaryReader.prototype.readSint32,
  );
  jspb.BinaryReader.prototype.readSint64 = function () {
    return (
      jspb.asserts.assert(
        this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT,
      ),
      this.decoder_.readZigzagVarint64()
    );
  };
  goog.exportProperty(
    jspb.BinaryReader.prototype,
    "readSint64",
    jspb.BinaryReader.prototype.readSint64,
  );
  jspb.BinaryReader.prototype.readSint64String = function () {
    return (
      jspb.asserts.assert(
        this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT,
      ),
      this.decoder_.readZigzagVarint64String()
    );
  };
  jspb.BinaryReader.prototype.readFixed32 = function () {
    return (
      jspb.asserts.assert(
        this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED32,
      ),
      this.decoder_.readUint32()
    );
  };
  goog.exportProperty(
    jspb.BinaryReader.prototype,
    "readFixed32",
    jspb.BinaryReader.prototype.readFixed32,
  );
  jspb.BinaryReader.prototype.readFixed64 = function () {
    return (
      jspb.asserts.assert(
        this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64,
      ),
      this.decoder_.readUint64()
    );
  };
  goog.exportProperty(
    jspb.BinaryReader.prototype,
    "readFixed64",
    jspb.BinaryReader.prototype.readFixed64,
  );
  jspb.BinaryReader.prototype.readFixed64String = function () {
    return (
      jspb.asserts.assert(
        this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64,
      ),
      this.decoder_.readUint64String()
    );
  };
  jspb.BinaryReader.prototype.readSfixed32 = function () {
    return (
      jspb.asserts.assert(
        this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED32,
      ),
      this.decoder_.readInt32()
    );
  };
  goog.exportProperty(
    jspb.BinaryReader.prototype,
    "readSfixed32",
    jspb.BinaryReader.prototype.readSfixed32,
  );
  jspb.BinaryReader.prototype.readSfixed32String = function () {
    return (
      jspb.asserts.assert(
        this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED32,
      ),
      this.decoder_.readInt32().toString()
    );
  };
  jspb.BinaryReader.prototype.readSfixed64 = function () {
    return (
      jspb.asserts.assert(
        this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64,
      ),
      this.decoder_.readInt64()
    );
  };
  goog.exportProperty(
    jspb.BinaryReader.prototype,
    "readSfixed64",
    jspb.BinaryReader.prototype.readSfixed64,
  );
  jspb.BinaryReader.prototype.readSfixed64String = function () {
    return (
      jspb.asserts.assert(
        this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64,
      ),
      this.decoder_.readInt64String()
    );
  };
  jspb.BinaryReader.prototype.readFloat = function () {
    return (
      jspb.asserts.assert(
        this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED32,
      ),
      this.decoder_.readFloat()
    );
  };
  goog.exportProperty(
    jspb.BinaryReader.prototype,
    "readFloat",
    jspb.BinaryReader.prototype.readFloat,
  );
  jspb.BinaryReader.prototype.readDouble = function () {
    return (
      jspb.asserts.assert(
        this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64,
      ),
      this.decoder_.readDouble()
    );
  };
  goog.exportProperty(
    jspb.BinaryReader.prototype,
    "readDouble",
    jspb.BinaryReader.prototype.readDouble,
  );
  jspb.BinaryReader.prototype.readBool = function () {
    return (
      jspb.asserts.assert(
        this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT,
      ),
      !!this.decoder_.readUnsignedVarint32()
    );
  };
  goog.exportProperty(
    jspb.BinaryReader.prototype,
    "readBool",
    jspb.BinaryReader.prototype.readBool,
  );
  jspb.BinaryReader.prototype.readEnum = function () {
    return (
      jspb.asserts.assert(
        this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT,
      ),
      this.decoder_.readSignedVarint64()
    );
  };
  goog.exportProperty(
    jspb.BinaryReader.prototype,
    "readEnum",
    jspb.BinaryReader.prototype.readEnum,
  );
  jspb.BinaryReader.prototype.readString = function () {
    jspb.asserts.assert(
      this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED,
    );
    var _ = this.decoder_.readUnsignedVarint32();
    return this.decoder_.readString(_);
  };
  goog.exportProperty(
    jspb.BinaryReader.prototype,
    "readString",
    jspb.BinaryReader.prototype.readString,
  );
  jspb.BinaryReader.prototype.readBytes = function () {
    jspb.asserts.assert(
      this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED,
    );
    var _ = this.decoder_.readUnsignedVarint32();
    return this.decoder_.readBytes(_);
  };
  goog.exportProperty(
    jspb.BinaryReader.prototype,
    "readBytes",
    jspb.BinaryReader.prototype.readBytes,
  );
  jspb.BinaryReader.prototype.readVarintHash64 = function () {
    return (
      jspb.asserts.assert(
        this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT,
      ),
      this.decoder_.readVarintHash64()
    );
  };
  jspb.BinaryReader.prototype.readSintHash64 = function () {
    return (
      jspb.asserts.assert(
        this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT,
      ),
      this.decoder_.readZigzagVarintHash64()
    );
  };
  jspb.BinaryReader.prototype.readSplitVarint64 = function (_) {
    return (
      jspb.asserts.assert(
        this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT,
      ),
      this.decoder_.readSplitVarint64(_)
    );
  };
  jspb.BinaryReader.prototype.readSplitZigzagVarint64 = function (_) {
    return (
      jspb.asserts.assert(
        this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT,
      ),
      this.decoder_.readSplitVarint64(function (_, _) {
        return jspb.utils.fromZigzag64(_, _, _);
      })
    );
  };
  jspb.BinaryReader.prototype.readFixedHash64 = function () {
    return (
      jspb.asserts.assert(
        this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64,
      ),
      this.decoder_.readFixedHash64()
    );
  };
  jspb.BinaryReader.prototype.readSplitFixed64 = function (_) {
    return (
      jspb.asserts.assert(
        this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64,
      ),
      this.decoder_.readSplitFixed64(_)
    );
  };
  jspb.BinaryReader.prototype.readPackedField_ = function (_) {
    jspb.asserts.assert(
      this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED,
    );
    var _ = this.decoder_.readUnsignedVarint32();
    _ = this.decoder_.getCursor() + _;
    for (var _ = []; this.decoder_.getCursor() < _; )
      _.push(_.call(this.decoder_));
    return _;
  };
  jspb.BinaryReader.prototype.readPackedInt32 = function () {
    return this.readPackedField_(this.decoder_.readSignedVarint32);
  };
  goog.exportProperty(
    jspb.BinaryReader.prototype,
    "readPackedInt32",
    jspb.BinaryReader.prototype.readPackedInt32,
  );
  jspb.BinaryReader.prototype.readPackedInt32String = function () {
    return this.readPackedField_(this.decoder_.readSignedVarint32String);
  };
  jspb.BinaryReader.prototype.readPackedInt64 = function () {
    return this.readPackedField_(this.decoder_.readSignedVarint64);
  };
  goog.exportProperty(
    jspb.BinaryReader.prototype,
    "readPackedInt64",
    jspb.BinaryReader.prototype.readPackedInt64,
  );
  jspb.BinaryReader.prototype.readPackedInt64String = function () {
    return this.readPackedField_(this.decoder_.readSignedVarint64String);
  };
  jspb.BinaryReader.prototype.readPackedUint32 = function () {
    return this.readPackedField_(this.decoder_.readUnsignedVarint32);
  };
  goog.exportProperty(
    jspb.BinaryReader.prototype,
    "readPackedUint32",
    jspb.BinaryReader.prototype.readPackedUint32,
  );
  jspb.BinaryReader.prototype.readPackedUint32String = function () {
    return this.readPackedField_(this.decoder_.readUnsignedVarint32String);
  };
  jspb.BinaryReader.prototype.readPackedUint64 = function () {
    return this.readPackedField_(this.decoder_.readUnsignedVarint64);
  };
  goog.exportProperty(
    jspb.BinaryReader.prototype,
    "readPackedUint64",
    jspb.BinaryReader.prototype.readPackedUint64,
  );
  jspb.BinaryReader.prototype.readPackedUint64String = function () {
    return this.readPackedField_(this.decoder_.readUnsignedVarint64String);
  };
  jspb.BinaryReader.prototype.readPackedSint32 = function () {
    return this.readPackedField_(this.decoder_.readZigzagVarint32);
  };
  goog.exportProperty(
    jspb.BinaryReader.prototype,
    "readPackedSint32",
    jspb.BinaryReader.prototype.readPackedSint32,
  );
  jspb.BinaryReader.prototype.readPackedSint64 = function () {
    return this.readPackedField_(this.decoder_.readZigzagVarint64);
  };
  goog.exportProperty(
    jspb.BinaryReader.prototype,
    "readPackedSint64",
    jspb.BinaryReader.prototype.readPackedSint64,
  );
  jspb.BinaryReader.prototype.readPackedSint64String = function () {
    return this.readPackedField_(this.decoder_.readZigzagVarint64String);
  };
  jspb.BinaryReader.prototype.readPackedFixed32 = function () {
    return this.readPackedField_(this.decoder_.readUint32);
  };
  goog.exportProperty(
    jspb.BinaryReader.prototype,
    "readPackedFixed32",
    jspb.BinaryReader.prototype.readPackedFixed32,
  );
  jspb.BinaryReader.prototype.readPackedFixed64 = function () {
    return this.readPackedField_(this.decoder_.readUint64);
  };
  goog.exportProperty(
    jspb.BinaryReader.prototype,
    "readPackedFixed64",
    jspb.BinaryReader.prototype.readPackedFixed64,
  );
  jspb.BinaryReader.prototype.readPackedFixed64String = function () {
    return this.readPackedField_(this.decoder_.readUint64String);
  };
  jspb.BinaryReader.prototype.readPackedSfixed32 = function () {
    return this.readPackedField_(this.decoder_.readInt32);
  };
  goog.exportProperty(
    jspb.BinaryReader.prototype,
    "readPackedSfixed32",
    jspb.BinaryReader.prototype.readPackedSfixed32,
  );
  jspb.BinaryReader.prototype.readPackedSfixed64 = function () {
    return this.readPackedField_(this.decoder_.readInt64);
  };
  goog.exportProperty(
    jspb.BinaryReader.prototype,
    "readPackedSfixed64",
    jspb.BinaryReader.prototype.readPackedSfixed64,
  );
  jspb.BinaryReader.prototype.readPackedSfixed64String = function () {
    return this.readPackedField_(this.decoder_.readInt64String);
  };
  jspb.BinaryReader.prototype.readPackedFloat = function () {
    return this.readPackedField_(this.decoder_.readFloat);
  };
  goog.exportProperty(
    jspb.BinaryReader.prototype,
    "readPackedFloat",
    jspb.BinaryReader.prototype.readPackedFloat,
  );
  jspb.BinaryReader.prototype.readPackedDouble = function () {
    return this.readPackedField_(this.decoder_.readDouble);
  };
  goog.exportProperty(
    jspb.BinaryReader.prototype,
    "readPackedDouble",
    jspb.BinaryReader.prototype.readPackedDouble,
  );
  jspb.BinaryReader.prototype.readPackedBool = function () {
    return this.readPackedField_(this.decoder_.readBool);
  };
  goog.exportProperty(
    jspb.BinaryReader.prototype,
    "readPackedBool",
    jspb.BinaryReader.prototype.readPackedBool,
  );
  jspb.BinaryReader.prototype.readPackedEnum = function () {
    return this.readPackedField_(this.decoder_.readEnum);
  };
  goog.exportProperty(
    jspb.BinaryReader.prototype,
    "readPackedEnum",
    jspb.BinaryReader.prototype.readPackedEnum,
  );
  jspb.BinaryReader.prototype.readPackedVarintHash64 = function () {
    return this.readPackedField_(this.decoder_.readVarintHash64);
  };
  jspb.BinaryReader.prototype.readPackedFixedHash64 = function () {
    return this.readPackedField_(this.decoder_.readFixedHash64);
  };
  jspb.BinaryEncoder = function () {
    this.buffer_ = [];
  };
  jspb.BinaryEncoder.prototype.length = function () {
    return this.buffer_.length;
  };
  jspb.BinaryEncoder.prototype.end = function () {
    var _ = this.buffer_;
    return (this.buffer_ = []), _;
  };
  jspb.BinaryEncoder.prototype.writeSplitVarint64 = function (_, _) {
    for (
      jspb.asserts.assert(_ == Math.floor(_)),
        jspb.asserts.assert(_ == Math.floor(_)),
        jspb.asserts.assert(0 <= _ && _ < jspb.BinaryConstants.TWO_TO_32),
        jspb.asserts.assert(0 <= _ && _ < jspb.BinaryConstants.TWO_TO_32);
      0 < _ || 127 < _;
    )
      this.buffer_.push((_ & 127) | 128),
        (_ = ((_ >>> 7) | (_ << 25)) >>> 0),
        (_ >>>= 7);
    this.buffer_.push(_);
  };
  jspb.BinaryEncoder.prototype.writeSplitFixed64 = function (_, _) {
    jspb.asserts.assert(_ == Math.floor(_)),
      jspb.asserts.assert(_ == Math.floor(_)),
      jspb.asserts.assert(0 <= _ && _ < jspb.BinaryConstants.TWO_TO_32),
      jspb.asserts.assert(0 <= _ && _ < jspb.BinaryConstants.TWO_TO_32),
      this.writeUint32(_),
      this.writeUint32(_);
  };
  jspb.BinaryEncoder.prototype.writeUnsignedVarint32 = function (_) {
    for (
      jspb.asserts.assert(_ == Math.floor(_)),
        jspb.asserts.assert(0 <= _ && _ < jspb.BinaryConstants.TWO_TO_32);
      127 < _;
    )
      this.buffer_.push((_ & 127) | 128), (_ >>>= 7);
    this.buffer_.push(_);
  };
  jspb.BinaryEncoder.prototype.writeSignedVarint32 = function (_) {
    if (
      (jspb.asserts.assert(_ == Math.floor(_)),
      jspb.asserts.assert(
        _ >= -jspb.BinaryConstants.TWO_TO_31 &&
          _ < jspb.BinaryConstants.TWO_TO_31,
      ),
      0 <= _)
    )
      this.writeUnsignedVarint32(_);
    else {
      for (var _ = 0; 9 > _; _++) this.buffer_.push((_ & 127) | 128), (_ >>= 7);
      this.buffer_.push(1);
    }
  };
  jspb.BinaryEncoder.prototype.writeUnsignedVarint64 = function (_) {
    jspb.asserts.assert(_ == Math.floor(_)),
      jspb.asserts.assert(0 <= _ && _ < jspb.BinaryConstants.TWO_TO_64),
      jspb.utils.splitInt64(_),
      this.writeSplitVarint64(jspb.utils.split64Low, jspb.utils.split64High);
  };
  jspb.BinaryEncoder.prototype.writeSignedVarint64 = function (_) {
    jspb.asserts.assert(_ == Math.floor(_)),
      jspb.asserts.assert(
        _ >= -jspb.BinaryConstants.TWO_TO_63 &&
          _ < jspb.BinaryConstants.TWO_TO_63,
      ),
      jspb.utils.splitInt64(_),
      this.writeSplitVarint64(jspb.utils.split64Low, jspb.utils.split64High);
  };
  jspb.BinaryEncoder.prototype.writeZigzagVarint32 = function (_) {
    jspb.asserts.assert(_ == Math.floor(_)),
      jspb.asserts.assert(
        _ >= -jspb.BinaryConstants.TWO_TO_31 &&
          _ < jspb.BinaryConstants.TWO_TO_31,
      ),
      this.writeUnsignedVarint32(((_ << 1) ^ (_ >> 31)) >>> 0);
  };
  jspb.BinaryEncoder.prototype.writeZigzagVarint64 = function (_) {
    jspb.asserts.assert(_ == Math.floor(_)),
      jspb.asserts.assert(
        _ >= -jspb.BinaryConstants.TWO_TO_63 &&
          _ < jspb.BinaryConstants.TWO_TO_63,
      ),
      jspb.utils.splitZigzag64(_),
      this.writeSplitVarint64(jspb.utils.split64Low, jspb.utils.split64High);
  };
  jspb.BinaryEncoder.prototype.writeZigzagVarint64String = function (_) {
    this.writeZigzagVarintHash64(jspb.utils.decimalStringToHash64(_));
  };
  jspb.BinaryEncoder.prototype.writeZigzagVarintHash64 = function (_) {
    var _ = this;
    jspb.utils.splitHash64(_),
      jspb.utils.toZigzag64(
        jspb.utils.split64Low,
        jspb.utils.split64High,
        function (_, _) {
          _.writeSplitVarint64(_ >>> 0, _ >>> 0);
        },
      );
  };
  jspb.BinaryEncoder.prototype.writeUint8 = function (_) {
    jspb.asserts.assert(_ == Math.floor(_)),
      jspb.asserts.assert(0 <= _ && 256 > _),
      this.buffer_.push((_ >>> 0) & 255);
  };
  jspb.BinaryEncoder.prototype.writeUint16 = function (_) {
    jspb.asserts.assert(_ == Math.floor(_)),
      jspb.asserts.assert(0 <= _ && 65536 > _),
      this.buffer_.push((_ >>> 0) & 255),
      this.buffer_.push((_ >>> 8) & 255);
  };
  jspb.BinaryEncoder.prototype.writeUint32 = function (_) {
    jspb.asserts.assert(_ == Math.floor(_)),
      jspb.asserts.assert(0 <= _ && _ < jspb.BinaryConstants.TWO_TO_32),
      this.buffer_.push((_ >>> 0) & 255),
      this.buffer_.push((_ >>> 8) & 255),
      this.buffer_.push((_ >>> 16) & 255),
      this.buffer_.push((_ >>> 24) & 255);
  };
  jspb.BinaryEncoder.prototype.writeUint64 = function (_) {
    jspb.asserts.assert(_ == Math.floor(_)),
      jspb.asserts.assert(0 <= _ && _ < jspb.BinaryConstants.TWO_TO_64),
      jspb.utils.splitUint64(_),
      this.writeUint32(jspb.utils.split64Low),
      this.writeUint32(jspb.utils.split64High);
  };
  jspb.BinaryEncoder.prototype.writeInt8 = function (_) {
    jspb.asserts.assert(_ == Math.floor(_)),
      jspb.asserts.assert(-128 <= _ && 128 > _),
      this.buffer_.push((_ >>> 0) & 255);
  };
  jspb.BinaryEncoder.prototype.writeInt16 = function (_) {
    jspb.asserts.assert(_ == Math.floor(_)),
      jspb.asserts.assert(-32768 <= _ && 32768 > _),
      this.buffer_.push((_ >>> 0) & 255),
      this.buffer_.push((_ >>> 8) & 255);
  };
  jspb.BinaryEncoder.prototype.writeInt32 = function (_) {
    jspb.asserts.assert(_ == Math.floor(_)),
      jspb.asserts.assert(
        _ >= -jspb.BinaryConstants.TWO_TO_31 &&
          _ < jspb.BinaryConstants.TWO_TO_31,
      ),
      this.buffer_.push((_ >>> 0) & 255),
      this.buffer_.push((_ >>> 8) & 255),
      this.buffer_.push((_ >>> 16) & 255),
      this.buffer_.push((_ >>> 24) & 255);
  };
  jspb.BinaryEncoder.prototype.writeInt64 = function (_) {
    jspb.asserts.assert(_ == Math.floor(_)),
      jspb.asserts.assert(
        _ >= -jspb.BinaryConstants.TWO_TO_63 &&
          _ < jspb.BinaryConstants.TWO_TO_63,
      ),
      jspb.utils.splitInt64(_),
      this.writeSplitFixed64(jspb.utils.split64Low, jspb.utils.split64High);
  };
  jspb.BinaryEncoder.prototype.writeInt64String = function (_) {
    jspb.asserts.assert(_ == Math.floor(_)),
      jspb.asserts.assert(
        +_ >= -jspb.BinaryConstants.TWO_TO_63 &&
          +_ < jspb.BinaryConstants.TWO_TO_63,
      ),
      jspb.utils.splitHash64(jspb.utils.decimalStringToHash64(_)),
      this.writeSplitFixed64(jspb.utils.split64Low, jspb.utils.split64High);
  };
  jspb.BinaryEncoder.prototype.writeFloat = function (_) {
    jspb.asserts.assert(
      _ === 1 / 0 ||
        _ === -1 / 0 ||
        isNaN(_) ||
        (_ >= -jspb.BinaryConstants.FLOAT32_MAX &&
          _ <= jspb.BinaryConstants.FLOAT32_MAX),
    ),
      jspb.utils.splitFloat32(_),
      this.writeUint32(jspb.utils.split64Low);
  };
  jspb.BinaryEncoder.prototype.writeDouble = function (_) {
    jspb.asserts.assert(
      _ === 1 / 0 ||
        _ === -1 / 0 ||
        isNaN(_) ||
        (_ >= -jspb.BinaryConstants.FLOAT64_MAX &&
          _ <= jspb.BinaryConstants.FLOAT64_MAX),
    ),
      jspb.utils.splitFloat64(_),
      this.writeUint32(jspb.utils.split64Low),
      this.writeUint32(jspb.utils.split64High);
  };
  jspb.BinaryEncoder.prototype.writeBool = function (_) {
    jspb.asserts.assert(typeof _ == "boolean" || typeof _ == "number"),
      this.buffer_.push(_ ? 1 : 0);
  };
  jspb.BinaryEncoder.prototype.writeEnum = function (_) {
    jspb.asserts.assert(_ == Math.floor(_)),
      jspb.asserts.assert(
        _ >= -jspb.BinaryConstants.TWO_TO_31 &&
          _ < jspb.BinaryConstants.TWO_TO_31,
      ),
      this.writeSignedVarint32(_);
  };
  jspb.BinaryEncoder.prototype.writeBytes = function (_) {
    this.buffer_.push.apply(this.buffer_, _);
  };
  jspb.BinaryEncoder.prototype.writeVarintHash64 = function (_) {
    jspb.utils.splitHash64(_),
      this.writeSplitVarint64(jspb.utils.split64Low, jspb.utils.split64High);
  };
  jspb.BinaryEncoder.prototype.writeFixedHash64 = function (_) {
    jspb.utils.splitHash64(_),
      this.writeUint32(jspb.utils.split64Low),
      this.writeUint32(jspb.utils.split64High);
  };
  jspb.BinaryEncoder.prototype.writeString = function (_) {
    var _ = this.buffer_.length;
    jspb.asserts.assertString(_);
    for (var _ = 0; _ < _.length; _++) {
      var _ = _.charCodeAt(_);
      if (128 > _) this.buffer_.push(_);
      else if (2048 > _)
        this.buffer_.push((_ >> 6) | 192), this.buffer_.push((_ & 63) | 128);
      else if (65536 > _)
        if (55296 <= _ && 56319 >= _ && _ + 1 < _.length) {
          var _ = _.charCodeAt(_ + 1);
          56320 <= _ &&
            57343 >= _ &&
            ((_ = 1024 * (_ - 55296) + _ - 56320 + 65536),
            this.buffer_.push((_ >> 18) | 240),
            this.buffer_.push(((_ >> 12) & 63) | 128),
            this.buffer_.push(((_ >> 6) & 63) | 128),
            this.buffer_.push((_ & 63) | 128),
            _++);
        } else
          this.buffer_.push((_ >> 12) | 224),
            this.buffer_.push(((_ >> 6) & 63) | 128),
            this.buffer_.push((_ & 63) | 128);
    }
    return this.buffer_.length - _;
  };
  jspb.arith = {};
  jspb.arith.UInt64 = function (_, _) {
    (this._ = _), (this._ = _);
  };
  jspb.arith.UInt64.prototype.cmp = function (_) {
    return this._ < _._ || (this._ == _._ && this._ < _._)
      ? -1
      : this._ == _._ && this._ == _._
        ? 0
        : 1;
  };
  jspb.arith.UInt64.prototype.rightShift = function () {
    return new jspb.arith.UInt64(
      ((this._ >>> 1) | ((this._ & 1) << 31)) >>> 0,
      (this._ >>> 1) >>> 0,
    );
  };
  jspb.arith.UInt64.prototype.leftShift = function () {
    return new jspb.arith.UInt64(
      (this._ << 1) >>> 0,
      ((this._ << 1) | (this._ >>> 31)) >>> 0,
    );
  };
  jspb.arith.UInt64.prototype.msb = function () {
    return !!(this._ & 2147483648);
  };
  jspb.arith.UInt64.prototype.lsb = function () {
    return !!(this._ & 1);
  };
  jspb.arith.UInt64.prototype.zero = function () {
    return this._ == 0 && this._ == 0;
  };
  jspb.arith.UInt64.prototype.add = function (_) {
    return new jspb.arith.UInt64(
      (((this._ + _._) & 4294967295) >>> 0) >>> 0,
      ((((this._ + _._) & 4294967295) >>> 0) +
        (4294967296 <= this._ + _._ ? 1 : 0)) >>>
        0,
    );
  };
  jspb.arith.UInt64.prototype.sub = function (_) {
    return new jspb.arith.UInt64(
      (((this._ - _._) & 4294967295) >>> 0) >>> 0,
      ((((this._ - _._) & 4294967295) >>> 0) - (0 > this._ - _._ ? 1 : 0)) >>>
        0,
    );
  };
  jspb.arith.UInt64.mul32x32 = function (_, _) {
    var _ = _ & 65535;
    _ >>>= 16;
    var _ = _ & 65535,
      _ = _ >>> 16;
    for (
      _ = _ * _ + 65536 * ((_ * _) & 65535) + 65536 * ((_ * _) & 65535),
        _ = _ * _ + ((_ * _) >>> 16) + ((_ * _) >>> 16);
      4294967296 <= _;
    )
      (_ -= 4294967296), (_ += 1);
    return new jspb.arith.UInt64(_ >>> 0, _ >>> 0);
  };
  jspb.arith.UInt64.prototype.mul = function (_) {
    var _ = jspb.arith.UInt64.mul32x32(this._, _);
    return (
      (_ = jspb.arith.UInt64.mul32x32(this._, _)),
      (_._ = _._),
      (_._ = 0),
      _.add(_)
    );
  };
  jspb.arith.UInt64.prototype.div = function (_) {
    if (_ == 0) return [];
    var _ = new jspb.arith.UInt64(0, 0),
      _ = new jspb.arith.UInt64(this._, this._);
    _ = new jspb.arith.UInt64(_, 0);
    for (var _ = new jspb.arith.UInt64(1, 0); !_.msb(); )
      (_ = _.leftShift()), (_ = _.leftShift());
    for (; !_.zero(); )
      0 >= _.cmp(_) && ((_ = _.add(_)), (_ = _.sub(_))),
        (_ = _.rightShift()),
        (_ = _.rightShift());
    return [_, _];
  };
  jspb.arith.UInt64.prototype.toString = function () {
    for (var _ = "", _ = this; !_.zero(); ) {
      _ = _.div(10);
      var _ = _[0];
      (_ = _[1]._ + _), (_ = _);
    }
    return _ == "" && (_ = "0"), _;
  };
  jspb.arith.UInt64.fromString = function (_) {
    for (
      var _ = new jspb.arith.UInt64(0, 0),
        _ = new jspb.arith.UInt64(0, 0),
        _ = 0;
      _ < _.length;
      _++
    ) {
      if ("0" > _[_] || "9" < _[_]) return null;
      var _ = parseInt(_[_], 10);
      (_._ = _), (_ = _.mul(10).add(_));
    }
    return _;
  };
  jspb.arith.UInt64.prototype.clone = function () {
    return new jspb.arith.UInt64(this._, this._);
  };
  jspb.arith.Int64 = function (_, _) {
    (this._ = _), (this._ = _);
  };
  jspb.arith.Int64.prototype.add = function (_) {
    return new jspb.arith.Int64(
      (((this._ + _._) & 4294967295) >>> 0) >>> 0,
      ((((this._ + _._) & 4294967295) >>> 0) +
        (4294967296 <= this._ + _._ ? 1 : 0)) >>>
        0,
    );
  };
  jspb.arith.Int64.prototype.sub = function (_) {
    return new jspb.arith.Int64(
      (((this._ - _._) & 4294967295) >>> 0) >>> 0,
      ((((this._ - _._) & 4294967295) >>> 0) - (0 > this._ - _._ ? 1 : 0)) >>>
        0,
    );
  };
  jspb.arith.Int64.prototype.clone = function () {
    return new jspb.arith.Int64(this._, this._);
  };
  jspb.arith.Int64.prototype.toString = function () {
    var _ = (this._ & 2147483648) != 0,
      _ = new jspb.arith.UInt64(this._, this._);
    return (
      _ && (_ = new jspb.arith.UInt64(0, 0).sub(_)),
      (_ ? "-" : "") + _.toString()
    );
  };
  jspb.arith.Int64.fromString = function (_) {
    var _ = 0 < _.length && _[0] == "-";
    return (
      _ && (_ = _.substring(1)),
      (_ = jspb.arith.UInt64.fromString(_)),
      _ === null
        ? null
        : (_ && (_ = new jspb.arith.UInt64(0, 0).sub(_)),
          new jspb.arith.Int64(_._, _._))
    );
  };
  jspb.BinaryWriter = function () {
    (this.blocks_ = []),
      (this.totalLength_ = 0),
      (this.encoder_ = new jspb.BinaryEncoder()),
      (this.bookmarks_ = []);
  };
  jspb.BinaryWriter.prototype.appendUint8Array_ = function (_) {
    var _ = this.encoder_.end();
    this.blocks_.push(_),
      this.blocks_.push(_),
      (this.totalLength_ += _.length + _.length);
  };
  jspb.BinaryWriter.prototype.beginDelimited_ = function (_) {
    return (
      this.writeFieldHeader_(_, jspb.BinaryConstants.WireType.DELIMITED),
      (_ = this.encoder_.end()),
      this.blocks_.push(_),
      (this.totalLength_ += _.length),
      _.push(this.totalLength_),
      _
    );
  };
  jspb.BinaryWriter.prototype.endDelimited_ = function (_) {
    var _ = _.pop();
    for (
      _ = this.totalLength_ + this.encoder_.length() - _,
        jspb.asserts.assert(0 <= _);
      127 < _;
    )
      _.push((_ & 127) | 128), (_ >>>= 7), this.totalLength_++;
    _.push(_), this.totalLength_++;
  };
  jspb.BinaryWriter.prototype.writeSerializedMessage = function (_, _, _) {
    this.appendUint8Array_(_.subarray(_, _));
  };
  jspb.BinaryWriter.prototype.maybeWriteSerializedMessage = function (_, _, _) {
    _ != null && _ != null && _ != null && this.writeSerializedMessage(_, _, _);
  };
  jspb.BinaryWriter.prototype.reset = function () {
    (this.blocks_ = []),
      this.encoder_.end(),
      (this.totalLength_ = 0),
      (this.bookmarks_ = []);
  };
  jspb.BinaryWriter.prototype.getResultBuffer = function () {
    jspb.asserts.assert(this.bookmarks_.length == 0);
    for (
      var _ = new Uint8Array(this.totalLength_ + this.encoder_.length()),
        _ = this.blocks_,
        _ = _.length,
        _ = 0,
        _ = 0;
      _ < _;
      _++
    ) {
      var _ = _[_];
      _.set(_, _), (_ += _.length);
    }
    return (
      (_ = this.encoder_.end()),
      _.set(_, _),
      (_ += _.length),
      jspb.asserts.assert(_ == _.length),
      (this.blocks_ = [_]),
      _
    );
  };
  goog.exportProperty(
    jspb.BinaryWriter.prototype,
    "getResultBuffer",
    jspb.BinaryWriter.prototype.getResultBuffer,
  );
  jspb.BinaryWriter.prototype.getResultBase64String = function (_) {
    return goog.crypt.base64.encodeByteArray(this.getResultBuffer(), _);
  };
  jspb.BinaryWriter.prototype.beginSubMessage = function (_) {
    this.bookmarks_.push(this.beginDelimited_(_));
  };
  jspb.BinaryWriter.prototype.endSubMessage = function () {
    jspb.asserts.assert(0 <= this.bookmarks_.length),
      this.endDelimited_(this.bookmarks_.pop());
  };
  jspb.BinaryWriter.prototype.writeFieldHeader_ = function (_, _) {
    jspb.asserts.assert(1 <= _ && _ == Math.floor(_)),
      this.encoder_.writeUnsignedVarint32(8 * _ + _);
  };
  jspb.BinaryWriter.prototype.writeAny = function (_, _, _) {
    var _ = jspb.BinaryConstants.FieldType;
    switch (_) {
      case _.DOUBLE:
        this.writeDouble(_, _);
        break;
      case _.FLOAT:
        this.writeFloat(_, _);
        break;
      case _.INT64:
        this.writeInt64(_, _);
        break;
      case _.UINT64:
        this.writeUint64(_, _);
        break;
      case _.INT32:
        this.writeInt32(_, _);
        break;
      case _.FIXED64:
        this.writeFixed64(_, _);
        break;
      case _.FIXED32:
        this.writeFixed32(_, _);
        break;
      case _.BOOL:
        this.writeBool(_, _);
        break;
      case _.STRING:
        this.writeString(_, _);
        break;
      case _.GROUP:
        jspb.asserts.fail("Group field type not supported in writeAny()");
        break;
      case _.MESSAGE:
        jspb.asserts.fail("Message field type not supported in writeAny()");
        break;
      case _.BYTES:
        this.writeBytes(_, _);
        break;
      case _.UINT32:
        this.writeUint32(_, _);
        break;
      case _.ENUM:
        this.writeEnum(_, _);
        break;
      case _.SFIXED32:
        this.writeSfixed32(_, _);
        break;
      case _.SFIXED64:
        this.writeSfixed64(_, _);
        break;
      case _.SINT32:
        this.writeSint32(_, _);
        break;
      case _.SINT64:
        this.writeSint64(_, _);
        break;
      case _.FHASH64:
        this.writeFixedHash64(_, _);
        break;
      case _.VHASH64:
        this.writeVarintHash64(_, _);
        break;
      default:
        jspb.asserts.fail("Invalid field type in writeAny()");
    }
  };
  jspb.BinaryWriter.prototype.writeUnsignedVarint32_ = function (_, _) {
    _ != null &&
      (this.writeFieldHeader_(_, jspb.BinaryConstants.WireType.VARINT),
      this.encoder_.writeUnsignedVarint32(_));
  };
  jspb.BinaryWriter.prototype.writeSignedVarint32_ = function (_, _) {
    _ != null &&
      (this.writeFieldHeader_(_, jspb.BinaryConstants.WireType.VARINT),
      this.encoder_.writeSignedVarint32(_));
  };
  jspb.BinaryWriter.prototype.writeUnsignedVarint64_ = function (_, _) {
    _ != null &&
      (this.writeFieldHeader_(_, jspb.BinaryConstants.WireType.VARINT),
      this.encoder_.writeUnsignedVarint64(_));
  };
  jspb.BinaryWriter.prototype.writeSignedVarint64_ = function (_, _) {
    _ != null &&
      (this.writeFieldHeader_(_, jspb.BinaryConstants.WireType.VARINT),
      this.encoder_.writeSignedVarint64(_));
  };
  jspb.BinaryWriter.prototype.writeZigzagVarint32_ = function (_, _) {
    _ != null &&
      (this.writeFieldHeader_(_, jspb.BinaryConstants.WireType.VARINT),
      this.encoder_.writeZigzagVarint32(_));
  };
  jspb.BinaryWriter.prototype.writeZigzagVarint64_ = function (_, _) {
    _ != null &&
      (this.writeFieldHeader_(_, jspb.BinaryConstants.WireType.VARINT),
      this.encoder_.writeZigzagVarint64(_));
  };
  jspb.BinaryWriter.prototype.writeZigzagVarint64String_ = function (_, _) {
    _ != null &&
      (this.writeFieldHeader_(_, jspb.BinaryConstants.WireType.VARINT),
      this.encoder_.writeZigzagVarint64String(_));
  };
  jspb.BinaryWriter.prototype.writeZigzagVarintHash64_ = function (_, _) {
    _ != null &&
      (this.writeFieldHeader_(_, jspb.BinaryConstants.WireType.VARINT),
      this.encoder_.writeZigzagVarintHash64(_));
  };
  jspb.BinaryWriter.prototype.writeInt32 = function (_, _) {
    _ != null &&
      (jspb.asserts.assert(
        _ >= -jspb.BinaryConstants.TWO_TO_31 &&
          _ < jspb.BinaryConstants.TWO_TO_31,
      ),
      this.writeSignedVarint32_(_, _));
  };
  goog.exportProperty(
    jspb.BinaryWriter.prototype,
    "writeInt32",
    jspb.BinaryWriter.prototype.writeInt32,
  );
  jspb.BinaryWriter.prototype.writeInt32String = function (_, _) {
    _ != null &&
      ((_ = parseInt(_, 10)),
      jspb.asserts.assert(
        _ >= -jspb.BinaryConstants.TWO_TO_31 &&
          _ < jspb.BinaryConstants.TWO_TO_31,
      ),
      this.writeSignedVarint32_(_, _));
  };
  jspb.BinaryWriter.prototype.writeInt64 = function (_, _) {
    _ != null &&
      (jspb.asserts.assert(
        _ >= -jspb.BinaryConstants.TWO_TO_63 &&
          _ < jspb.BinaryConstants.TWO_TO_63,
      ),
      this.writeSignedVarint64_(_, _));
  };
  goog.exportProperty(
    jspb.BinaryWriter.prototype,
    "writeInt64",
    jspb.BinaryWriter.prototype.writeInt64,
  );
  jspb.BinaryWriter.prototype.writeInt64String = function (_, _) {
    _ != null &&
      ((_ = jspb.arith.Int64.fromString(_)),
      this.writeFieldHeader_(_, jspb.BinaryConstants.WireType.VARINT),
      this.encoder_.writeSplitVarint64(_._, _._));
  };
  jspb.BinaryWriter.prototype.writeUint32 = function (_, _) {
    _ != null &&
      (jspb.asserts.assert(0 <= _ && _ < jspb.BinaryConstants.TWO_TO_32),
      this.writeUnsignedVarint32_(_, _));
  };
  goog.exportProperty(
    jspb.BinaryWriter.prototype,
    "writeUint32",
    jspb.BinaryWriter.prototype.writeUint32,
  );
  jspb.BinaryWriter.prototype.writeUint32String = function (_, _) {
    _ != null &&
      ((_ = parseInt(_, 10)),
      jspb.asserts.assert(0 <= _ && _ < jspb.BinaryConstants.TWO_TO_32),
      this.writeUnsignedVarint32_(_, _));
  };
  jspb.BinaryWriter.prototype.writeUint64 = function (_, _) {
    _ != null &&
      (jspb.asserts.assert(0 <= _ && _ < jspb.BinaryConstants.TWO_TO_64),
      this.writeUnsignedVarint64_(_, _));
  };
  goog.exportProperty(
    jspb.BinaryWriter.prototype,
    "writeUint64",
    jspb.BinaryWriter.prototype.writeUint64,
  );
  jspb.BinaryWriter.prototype.writeUint64String = function (_, _) {
    _ != null &&
      ((_ = jspb.arith.UInt64.fromString(_)),
      this.writeFieldHeader_(_, jspb.BinaryConstants.WireType.VARINT),
      this.encoder_.writeSplitVarint64(_._, _._));
  };
  jspb.BinaryWriter.prototype.writeSint32 = function (_, _) {
    _ != null &&
      (jspb.asserts.assert(
        _ >= -jspb.BinaryConstants.TWO_TO_31 &&
          _ < jspb.BinaryConstants.TWO_TO_31,
      ),
      this.writeZigzagVarint32_(_, _));
  };
  goog.exportProperty(
    jspb.BinaryWriter.prototype,
    "writeSint32",
    jspb.BinaryWriter.prototype.writeSint32,
  );
  jspb.BinaryWriter.prototype.writeSint64 = function (_, _) {
    _ != null &&
      (jspb.asserts.assert(
        _ >= -jspb.BinaryConstants.TWO_TO_63 &&
          _ < jspb.BinaryConstants.TWO_TO_63,
      ),
      this.writeZigzagVarint64_(_, _));
  };
  goog.exportProperty(
    jspb.BinaryWriter.prototype,
    "writeSint64",
    jspb.BinaryWriter.prototype.writeSint64,
  );
  jspb.BinaryWriter.prototype.writeSintHash64 = function (_, _) {
    _ != null && this.writeZigzagVarintHash64_(_, _);
  };
  jspb.BinaryWriter.prototype.writeSint64String = function (_, _) {
    _ != null && this.writeZigzagVarint64String_(_, _);
  };
  jspb.BinaryWriter.prototype.writeFixed32 = function (_, _) {
    _ != null &&
      (jspb.asserts.assert(0 <= _ && _ < jspb.BinaryConstants.TWO_TO_32),
      this.writeFieldHeader_(_, jspb.BinaryConstants.WireType.FIXED32),
      this.encoder_.writeUint32(_));
  };
  goog.exportProperty(
    jspb.BinaryWriter.prototype,
    "writeFixed32",
    jspb.BinaryWriter.prototype.writeFixed32,
  );
  jspb.BinaryWriter.prototype.writeFixed64 = function (_, _) {
    _ != null &&
      (jspb.asserts.assert(0 <= _ && _ < jspb.BinaryConstants.TWO_TO_64),
      this.writeFieldHeader_(_, jspb.BinaryConstants.WireType.FIXED64),
      this.encoder_.writeUint64(_));
  };
  goog.exportProperty(
    jspb.BinaryWriter.prototype,
    "writeFixed64",
    jspb.BinaryWriter.prototype.writeFixed64,
  );
  jspb.BinaryWriter.prototype.writeFixed64String = function (_, _) {
    _ != null &&
      ((_ = jspb.arith.UInt64.fromString(_)),
      this.writeFieldHeader_(_, jspb.BinaryConstants.WireType.FIXED64),
      this.encoder_.writeSplitFixed64(_._, _._));
  };
  jspb.BinaryWriter.prototype.writeSfixed32 = function (_, _) {
    _ != null &&
      (jspb.asserts.assert(
        _ >= -jspb.BinaryConstants.TWO_TO_31 &&
          _ < jspb.BinaryConstants.TWO_TO_31,
      ),
      this.writeFieldHeader_(_, jspb.BinaryConstants.WireType.FIXED32),
      this.encoder_.writeInt32(_));
  };
  goog.exportProperty(
    jspb.BinaryWriter.prototype,
    "writeSfixed32",
    jspb.BinaryWriter.prototype.writeSfixed32,
  );
  jspb.BinaryWriter.prototype.writeSfixed64 = function (_, _) {
    _ != null &&
      (jspb.asserts.assert(
        _ >= -jspb.BinaryConstants.TWO_TO_63 &&
          _ < jspb.BinaryConstants.TWO_TO_63,
      ),
      this.writeFieldHeader_(_, jspb.BinaryConstants.WireType.FIXED64),
      this.encoder_.writeInt64(_));
  };
  goog.exportProperty(
    jspb.BinaryWriter.prototype,
    "writeSfixed64",
    jspb.BinaryWriter.prototype.writeSfixed64,
  );
  jspb.BinaryWriter.prototype.writeSfixed64String = function (_, _) {
    _ != null &&
      ((_ = jspb.arith.Int64.fromString(_)),
      this.writeFieldHeader_(_, jspb.BinaryConstants.WireType.FIXED64),
      this.encoder_.writeSplitFixed64(_._, _._));
  };
  jspb.BinaryWriter.prototype.writeFloat = function (_, _) {
    _ != null &&
      (this.writeFieldHeader_(_, jspb.BinaryConstants.WireType.FIXED32),
      this.encoder_.writeFloat(_));
  };
  goog.exportProperty(
    jspb.BinaryWriter.prototype,
    "writeFloat",
    jspb.BinaryWriter.prototype.writeFloat,
  );
  jspb.BinaryWriter.prototype.writeDouble = function (_, _) {
    _ != null &&
      (this.writeFieldHeader_(_, jspb.BinaryConstants.WireType.FIXED64),
      this.encoder_.writeDouble(_));
  };
  goog.exportProperty(
    jspb.BinaryWriter.prototype,
    "writeDouble",
    jspb.BinaryWriter.prototype.writeDouble,
  );
  jspb.BinaryWriter.prototype.writeBool = function (_, _) {
    _ != null &&
      (jspb.asserts.assert(typeof _ == "boolean" || typeof _ == "number"),
      this.writeFieldHeader_(_, jspb.BinaryConstants.WireType.VARINT),
      this.encoder_.writeBool(_));
  };
  goog.exportProperty(
    jspb.BinaryWriter.prototype,
    "writeBool",
    jspb.BinaryWriter.prototype.writeBool,
  );
  jspb.BinaryWriter.prototype.writeEnum = function (_, _) {
    _ != null &&
      (jspb.asserts.assert(
        _ >= -jspb.BinaryConstants.TWO_TO_31 &&
          _ < jspb.BinaryConstants.TWO_TO_31,
      ),
      this.writeFieldHeader_(_, jspb.BinaryConstants.WireType.VARINT),
      this.encoder_.writeSignedVarint32(_));
  };
  goog.exportProperty(
    jspb.BinaryWriter.prototype,
    "writeEnum",
    jspb.BinaryWriter.prototype.writeEnum,
  );
  jspb.BinaryWriter.prototype.writeString = function (_, _) {
    _ != null &&
      ((_ = this.beginDelimited_(_)),
      this.encoder_.writeString(_),
      this.endDelimited_(_));
  };
  goog.exportProperty(
    jspb.BinaryWriter.prototype,
    "writeString",
    jspb.BinaryWriter.prototype.writeString,
  );
  jspb.BinaryWriter.prototype.writeBytes = function (_, _) {
    _ != null &&
      ((_ = jspb.utils.byteSourceToUint8Array(_)),
      this.writeFieldHeader_(_, jspb.BinaryConstants.WireType.DELIMITED),
      this.encoder_.writeUnsignedVarint32(_.length),
      this.appendUint8Array_(_));
  };
  goog.exportProperty(
    jspb.BinaryWriter.prototype,
    "writeBytes",
    jspb.BinaryWriter.prototype.writeBytes,
  );
  jspb.BinaryWriter.prototype.writeMessage = function (_, _, _) {
    _ != null &&
      ((_ = this.beginDelimited_(_)), _(_, this), this.endDelimited_(_));
  };
  goog.exportProperty(
    jspb.BinaryWriter.prototype,
    "writeMessage",
    jspb.BinaryWriter.prototype.writeMessage,
  );
  jspb.BinaryWriter.prototype.writeMessageSet = function (_, _, _) {
    _ != null &&
      (this.writeFieldHeader_(1, jspb.BinaryConstants.WireType.START_GROUP),
      this.writeFieldHeader_(2, jspb.BinaryConstants.WireType.VARINT),
      this.encoder_.writeSignedVarint32(_),
      (_ = this.beginDelimited_(3)),
      _(_, this),
      this.endDelimited_(_),
      this.writeFieldHeader_(1, jspb.BinaryConstants.WireType.END_GROUP));
  };
  jspb.BinaryWriter.prototype.writeGroup = function (_, _, _) {
    _ != null &&
      (this.writeFieldHeader_(_, jspb.BinaryConstants.WireType.START_GROUP),
      _(_, this),
      this.writeFieldHeader_(_, jspb.BinaryConstants.WireType.END_GROUP));
  };
  goog.exportProperty(
    jspb.BinaryWriter.prototype,
    "writeGroup",
    jspb.BinaryWriter.prototype.writeGroup,
  );
  jspb.BinaryWriter.prototype.writeFixedHash64 = function (_, _) {
    _ != null &&
      (jspb.asserts.assert(_.length == 8),
      this.writeFieldHeader_(_, jspb.BinaryConstants.WireType.FIXED64),
      this.encoder_.writeFixedHash64(_));
  };
  jspb.BinaryWriter.prototype.writeVarintHash64 = function (_, _) {
    _ != null &&
      (jspb.asserts.assert(_.length == 8),
      this.writeFieldHeader_(_, jspb.BinaryConstants.WireType.VARINT),
      this.encoder_.writeVarintHash64(_));
  };
  jspb.BinaryWriter.prototype.writeSplitFixed64 = function (_, _, _) {
    this.writeFieldHeader_(_, jspb.BinaryConstants.WireType.FIXED64),
      this.encoder_.writeSplitFixed64(_, _);
  };
  jspb.BinaryWriter.prototype.writeSplitVarint64 = function (_, _, _) {
    this.writeFieldHeader_(_, jspb.BinaryConstants.WireType.VARINT),
      this.encoder_.writeSplitVarint64(_, _);
  };
  jspb.BinaryWriter.prototype.writeSplitZigzagVarint64 = function (_, _, _) {
    this.writeFieldHeader_(_, jspb.BinaryConstants.WireType.VARINT);
    var _ = this.encoder_;
    jspb.utils.toZigzag64(_, _, function (_, _) {
      _.writeSplitVarint64(_ >>> 0, _ >>> 0);
    });
  };
  jspb.BinaryWriter.prototype.writeRepeatedInt32 = function (_, _) {
    if (_ != null)
      for (var _ = 0; _ < _.length; _++) this.writeSignedVarint32_(_, _[_]);
  };
  goog.exportProperty(
    jspb.BinaryWriter.prototype,
    "writeRepeatedInt32",
    jspb.BinaryWriter.prototype.writeRepeatedInt32,
  );
  jspb.BinaryWriter.prototype.writeRepeatedInt32String = function (_, _) {
    if (_ != null)
      for (var _ = 0; _ < _.length; _++) this.writeInt32String(_, _[_]);
  };
  jspb.BinaryWriter.prototype.writeRepeatedInt64 = function (_, _) {
    if (_ != null)
      for (var _ = 0; _ < _.length; _++) this.writeSignedVarint64_(_, _[_]);
  };
  goog.exportProperty(
    jspb.BinaryWriter.prototype,
    "writeRepeatedInt64",
    jspb.BinaryWriter.prototype.writeRepeatedInt64,
  );
  jspb.BinaryWriter.prototype.writeRepeatedSplitFixed64 = function (
    _,
    _,
    _,
    _,
  ) {
    if (_ != null)
      for (var _ = 0; _ < _.length; _++)
        this.writeSplitFixed64(_, _(_[_]), _(_[_]));
  };
  jspb.BinaryWriter.prototype.writeRepeatedSplitVarint64 = function (
    _,
    _,
    _,
    _,
  ) {
    if (_ != null)
      for (var _ = 0; _ < _.length; _++)
        this.writeSplitVarint64(_, _(_[_]), _(_[_]));
  };
  jspb.BinaryWriter.prototype.writeRepeatedSplitZigzagVarint64 = function (
    _,
    _,
    _,
    _,
  ) {
    if (_ != null)
      for (var _ = 0; _ < _.length; _++)
        this.writeSplitZigzagVarint64(_, _(_[_]), _(_[_]));
  };
  jspb.BinaryWriter.prototype.writeRepeatedInt64String = function (_, _) {
    if (_ != null)
      for (var _ = 0; _ < _.length; _++) this.writeInt64String(_, _[_]);
  };
  jspb.BinaryWriter.prototype.writeRepeatedUint32 = function (_, _) {
    if (_ != null)
      for (var _ = 0; _ < _.length; _++) this.writeUnsignedVarint32_(_, _[_]);
  };
  goog.exportProperty(
    jspb.BinaryWriter.prototype,
    "writeRepeatedUint32",
    jspb.BinaryWriter.prototype.writeRepeatedUint32,
  );
  jspb.BinaryWriter.prototype.writeRepeatedUint32String = function (_, _) {
    if (_ != null)
      for (var _ = 0; _ < _.length; _++) this.writeUint32String(_, _[_]);
  };
  jspb.BinaryWriter.prototype.writeRepeatedUint64 = function (_, _) {
    if (_ != null)
      for (var _ = 0; _ < _.length; _++) this.writeUnsignedVarint64_(_, _[_]);
  };
  goog.exportProperty(
    jspb.BinaryWriter.prototype,
    "writeRepeatedUint64",
    jspb.BinaryWriter.prototype.writeRepeatedUint64,
  );
  jspb.BinaryWriter.prototype.writeRepeatedUint64String = function (_, _) {
    if (_ != null)
      for (var _ = 0; _ < _.length; _++) this.writeUint64String(_, _[_]);
  };
  jspb.BinaryWriter.prototype.writeRepeatedSint32 = function (_, _) {
    if (_ != null)
      for (var _ = 0; _ < _.length; _++) this.writeZigzagVarint32_(_, _[_]);
  };
  goog.exportProperty(
    jspb.BinaryWriter.prototype,
    "writeRepeatedSint32",
    jspb.BinaryWriter.prototype.writeRepeatedSint32,
  );
  jspb.BinaryWriter.prototype.writeRepeatedSint64 = function (_, _) {
    if (_ != null)
      for (var _ = 0; _ < _.length; _++) this.writeZigzagVarint64_(_, _[_]);
  };
  goog.exportProperty(
    jspb.BinaryWriter.prototype,
    "writeRepeatedSint64",
    jspb.BinaryWriter.prototype.writeRepeatedSint64,
  );
  jspb.BinaryWriter.prototype.writeRepeatedSint64String = function (_, _) {
    if (_ != null)
      for (var _ = 0; _ < _.length; _++)
        this.writeZigzagVarint64String_(_, _[_]);
  };
  jspb.BinaryWriter.prototype.writeRepeatedSintHash64 = function (_, _) {
    if (_ != null)
      for (var _ = 0; _ < _.length; _++) this.writeZigzagVarintHash64_(_, _[_]);
  };
  jspb.BinaryWriter.prototype.writeRepeatedFixed32 = function (_, _) {
    if (_ != null)
      for (var _ = 0; _ < _.length; _++) this.writeFixed32(_, _[_]);
  };
  goog.exportProperty(
    jspb.BinaryWriter.prototype,
    "writeRepeatedFixed32",
    jspb.BinaryWriter.prototype.writeRepeatedFixed32,
  );
  jspb.BinaryWriter.prototype.writeRepeatedFixed64 = function (_, _) {
    if (_ != null)
      for (var _ = 0; _ < _.length; _++) this.writeFixed64(_, _[_]);
  };
  goog.exportProperty(
    jspb.BinaryWriter.prototype,
    "writeRepeatedFixed64",
    jspb.BinaryWriter.prototype.writeRepeatedFixed64,
  );
  jspb.BinaryWriter.prototype.writeRepeatedFixed64String = function (_, _) {
    if (_ != null)
      for (var _ = 0; _ < _.length; _++) this.writeFixed64String(_, _[_]);
  };
  goog.exportProperty(
    jspb.BinaryWriter.prototype,
    "writeRepeatedFixed64String",
    jspb.BinaryWriter.prototype.writeRepeatedFixed64String,
  );
  jspb.BinaryWriter.prototype.writeRepeatedSfixed32 = function (_, _) {
    if (_ != null)
      for (var _ = 0; _ < _.length; _++) this.writeSfixed32(_, _[_]);
  };
  goog.exportProperty(
    jspb.BinaryWriter.prototype,
    "writeRepeatedSfixed32",
    jspb.BinaryWriter.prototype.writeRepeatedSfixed32,
  );
  jspb.BinaryWriter.prototype.writeRepeatedSfixed64 = function (_, _) {
    if (_ != null)
      for (var _ = 0; _ < _.length; _++) this.writeSfixed64(_, _[_]);
  };
  goog.exportProperty(
    jspb.BinaryWriter.prototype,
    "writeRepeatedSfixed64",
    jspb.BinaryWriter.prototype.writeRepeatedSfixed64,
  );
  jspb.BinaryWriter.prototype.writeRepeatedSfixed64String = function (_, _) {
    if (_ != null)
      for (var _ = 0; _ < _.length; _++) this.writeSfixed64String(_, _[_]);
  };
  jspb.BinaryWriter.prototype.writeRepeatedFloat = function (_, _) {
    if (_ != null) for (var _ = 0; _ < _.length; _++) this.writeFloat(_, _[_]);
  };
  goog.exportProperty(
    jspb.BinaryWriter.prototype,
    "writeRepeatedFloat",
    jspb.BinaryWriter.prototype.writeRepeatedFloat,
  );
  jspb.BinaryWriter.prototype.writeRepeatedDouble = function (_, _) {
    if (_ != null) for (var _ = 0; _ < _.length; _++) this.writeDouble(_, _[_]);
  };
  goog.exportProperty(
    jspb.BinaryWriter.prototype,
    "writeRepeatedDouble",
    jspb.BinaryWriter.prototype.writeRepeatedDouble,
  );
  jspb.BinaryWriter.prototype.writeRepeatedBool = function (_, _) {
    if (_ != null) for (var _ = 0; _ < _.length; _++) this.writeBool(_, _[_]);
  };
  goog.exportProperty(
    jspb.BinaryWriter.prototype,
    "writeRepeatedBool",
    jspb.BinaryWriter.prototype.writeRepeatedBool,
  );
  jspb.BinaryWriter.prototype.writeRepeatedEnum = function (_, _) {
    if (_ != null) for (var _ = 0; _ < _.length; _++) this.writeEnum(_, _[_]);
  };
  goog.exportProperty(
    jspb.BinaryWriter.prototype,
    "writeRepeatedEnum",
    jspb.BinaryWriter.prototype.writeRepeatedEnum,
  );
  jspb.BinaryWriter.prototype.writeRepeatedString = function (_, _) {
    if (_ != null) for (var _ = 0; _ < _.length; _++) this.writeString(_, _[_]);
  };
  goog.exportProperty(
    jspb.BinaryWriter.prototype,
    "writeRepeatedString",
    jspb.BinaryWriter.prototype.writeRepeatedString,
  );
  jspb.BinaryWriter.prototype.writeRepeatedBytes = function (_, _) {
    if (_ != null) for (var _ = 0; _ < _.length; _++) this.writeBytes(_, _[_]);
  };
  goog.exportProperty(
    jspb.BinaryWriter.prototype,
    "writeRepeatedBytes",
    jspb.BinaryWriter.prototype.writeRepeatedBytes,
  );
  jspb.BinaryWriter.prototype.writeRepeatedMessage = function (_, _, _) {
    if (_ != null)
      for (var _ = 0; _ < _.length; _++) {
        var _ = this.beginDelimited_(_);
        _(_[_], this), this.endDelimited_(_);
      }
  };
  goog.exportProperty(
    jspb.BinaryWriter.prototype,
    "writeRepeatedMessage",
    jspb.BinaryWriter.prototype.writeRepeatedMessage,
  );
  jspb.BinaryWriter.prototype.writeRepeatedGroup = function (_, _, _) {
    if (_ != null)
      for (var _ = 0; _ < _.length; _++)
        this.writeFieldHeader_(_, jspb.BinaryConstants.WireType.START_GROUP),
          _(_[_], this),
          this.writeFieldHeader_(_, jspb.BinaryConstants.WireType.END_GROUP);
  };
  goog.exportProperty(
    jspb.BinaryWriter.prototype,
    "writeRepeatedGroup",
    jspb.BinaryWriter.prototype.writeRepeatedGroup,
  );
  jspb.BinaryWriter.prototype.writeRepeatedFixedHash64 = function (_, _) {
    if (_ != null)
      for (var _ = 0; _ < _.length; _++) this.writeFixedHash64(_, _[_]);
  };
  jspb.BinaryWriter.prototype.writeRepeatedVarintHash64 = function (_, _) {
    if (_ != null)
      for (var _ = 0; _ < _.length; _++) this.writeVarintHash64(_, _[_]);
  };
  jspb.BinaryWriter.prototype.writePackedInt32 = function (_, _) {
    if (_ != null && _.length) {
      _ = this.beginDelimited_(_);
      for (var _ = 0; _ < _.length; _++)
        this.encoder_.writeSignedVarint32(_[_]);
      this.endDelimited_(_);
    }
  };
  goog.exportProperty(
    jspb.BinaryWriter.prototype,
    "writePackedInt32",
    jspb.BinaryWriter.prototype.writePackedInt32,
  );
  jspb.BinaryWriter.prototype.writePackedInt32String = function (_, _) {
    if (_ != null && _.length) {
      _ = this.beginDelimited_(_);
      for (var _ = 0; _ < _.length; _++)
        this.encoder_.writeSignedVarint32(parseInt(_[_], 10));
      this.endDelimited_(_);
    }
  };
  jspb.BinaryWriter.prototype.writePackedInt64 = function (_, _) {
    if (_ != null && _.length) {
      _ = this.beginDelimited_(_);
      for (var _ = 0; _ < _.length; _++)
        this.encoder_.writeSignedVarint64(_[_]);
      this.endDelimited_(_);
    }
  };
  goog.exportProperty(
    jspb.BinaryWriter.prototype,
    "writePackedInt64",
    jspb.BinaryWriter.prototype.writePackedInt64,
  );
  jspb.BinaryWriter.prototype.writePackedSplitFixed64 = function (_, _, _, _) {
    if (_ != null) {
      _ = this.beginDelimited_(_);
      for (var _ = 0; _ < _.length; _++)
        this.encoder_.writeSplitFixed64(_(_[_]), _(_[_]));
      this.endDelimited_(_);
    }
  };
  jspb.BinaryWriter.prototype.writePackedSplitVarint64 = function (_, _, _, _) {
    if (_ != null) {
      _ = this.beginDelimited_(_);
      for (var _ = 0; _ < _.length; _++)
        this.encoder_.writeSplitVarint64(_(_[_]), _(_[_]));
      this.endDelimited_(_);
    }
  };
  jspb.BinaryWriter.prototype.writePackedSplitZigzagVarint64 = function (
    _,
    _,
    _,
    _,
  ) {
    if (_ != null) {
      _ = this.beginDelimited_(_);
      for (var _ = this.encoder_, _ = 0; _ < _.length; _++)
        jspb.utils.toZigzag64(_(_[_]), _(_[_]), function (_, _) {
          _.writeSplitVarint64(_ >>> 0, _ >>> 0);
        });
      this.endDelimited_(_);
    }
  };
  jspb.BinaryWriter.prototype.writePackedInt64String = function (_, _) {
    if (_ != null && _.length) {
      _ = this.beginDelimited_(_);
      for (var _ = 0; _ < _.length; _++) {
        var _ = jspb.arith.Int64.fromString(_[_]);
        this.encoder_.writeSplitVarint64(_._, _._);
      }
      this.endDelimited_(_);
    }
  };
  jspb.BinaryWriter.prototype.writePackedUint32 = function (_, _) {
    if (_ != null && _.length) {
      _ = this.beginDelimited_(_);
      for (var _ = 0; _ < _.length; _++)
        this.encoder_.writeUnsignedVarint32(_[_]);
      this.endDelimited_(_);
    }
  };
  goog.exportProperty(
    jspb.BinaryWriter.prototype,
    "writePackedUint32",
    jspb.BinaryWriter.prototype.writePackedUint32,
  );
  jspb.BinaryWriter.prototype.writePackedUint32String = function (_, _) {
    if (_ != null && _.length) {
      _ = this.beginDelimited_(_);
      for (var _ = 0; _ < _.length; _++)
        this.encoder_.writeUnsignedVarint32(parseInt(_[_], 10));
      this.endDelimited_(_);
    }
  };
  jspb.BinaryWriter.prototype.writePackedUint64 = function (_, _) {
    if (_ != null && _.length) {
      _ = this.beginDelimited_(_);
      for (var _ = 0; _ < _.length; _++)
        this.encoder_.writeUnsignedVarint64(_[_]);
      this.endDelimited_(_);
    }
  };
  goog.exportProperty(
    jspb.BinaryWriter.prototype,
    "writePackedUint64",
    jspb.BinaryWriter.prototype.writePackedUint64,
  );
  jspb.BinaryWriter.prototype.writePackedUint64String = function (_, _) {
    if (_ != null && _.length) {
      _ = this.beginDelimited_(_);
      for (var _ = 0; _ < _.length; _++) {
        var _ = jspb.arith.UInt64.fromString(_[_]);
        this.encoder_.writeSplitVarint64(_._, _._);
      }
      this.endDelimited_(_);
    }
  };
  jspb.BinaryWriter.prototype.writePackedSint32 = function (_, _) {
    if (_ != null && _.length) {
      _ = this.beginDelimited_(_);
      for (var _ = 0; _ < _.length; _++)
        this.encoder_.writeZigzagVarint32(_[_]);
      this.endDelimited_(_);
    }
  };
  goog.exportProperty(
    jspb.BinaryWriter.prototype,
    "writePackedSint32",
    jspb.BinaryWriter.prototype.writePackedSint32,
  );
  jspb.BinaryWriter.prototype.writePackedSint64 = function (_, _) {
    if (_ != null && _.length) {
      _ = this.beginDelimited_(_);
      for (var _ = 0; _ < _.length; _++)
        this.encoder_.writeZigzagVarint64(_[_]);
      this.endDelimited_(_);
    }
  };
  goog.exportProperty(
    jspb.BinaryWriter.prototype,
    "writePackedSint64",
    jspb.BinaryWriter.prototype.writePackedSint64,
  );
  jspb.BinaryWriter.prototype.writePackedSint64String = function (_, _) {
    if (_ != null && _.length) {
      _ = this.beginDelimited_(_);
      for (var _ = 0; _ < _.length; _++)
        this.encoder_.writeZigzagVarintHash64(
          jspb.utils.decimalStringToHash64(_[_]),
        );
      this.endDelimited_(_);
    }
  };
  jspb.BinaryWriter.prototype.writePackedSintHash64 = function (_, _) {
    if (_ != null && _.length) {
      _ = this.beginDelimited_(_);
      for (var _ = 0; _ < _.length; _++)
        this.encoder_.writeZigzagVarintHash64(_[_]);
      this.endDelimited_(_);
    }
  };
  jspb.BinaryWriter.prototype.writePackedFixed32 = function (_, _) {
    if (_ != null && _.length)
      for (
        this.writeFieldHeader_(_, jspb.BinaryConstants.WireType.DELIMITED),
          this.encoder_.writeUnsignedVarint32(4 * _.length),
          _ = 0;
        _ < _.length;
        _++
      )
        this.encoder_.writeUint32(_[_]);
  };
  goog.exportProperty(
    jspb.BinaryWriter.prototype,
    "writePackedFixed32",
    jspb.BinaryWriter.prototype.writePackedFixed32,
  );
  jspb.BinaryWriter.prototype.writePackedFixed64 = function (_, _) {
    if (_ != null && _.length)
      for (
        this.writeFieldHeader_(_, jspb.BinaryConstants.WireType.DELIMITED),
          this.encoder_.writeUnsignedVarint32(8 * _.length),
          _ = 0;
        _ < _.length;
        _++
      )
        this.encoder_.writeUint64(_[_]);
  };
  goog.exportProperty(
    jspb.BinaryWriter.prototype,
    "writePackedFixed64",
    jspb.BinaryWriter.prototype.writePackedFixed64,
  );
  jspb.BinaryWriter.prototype.writePackedFixed64String = function (_, _) {
    if (_ != null && _.length)
      for (
        this.writeFieldHeader_(_, jspb.BinaryConstants.WireType.DELIMITED),
          this.encoder_.writeUnsignedVarint32(8 * _.length),
          _ = 0;
        _ < _.length;
        _++
      ) {
        var _ = jspb.arith.UInt64.fromString(_[_]);
        this.encoder_.writeSplitFixed64(_._, _._);
      }
  };
  jspb.BinaryWriter.prototype.writePackedSfixed32 = function (_, _) {
    if (_ != null && _.length)
      for (
        this.writeFieldHeader_(_, jspb.BinaryConstants.WireType.DELIMITED),
          this.encoder_.writeUnsignedVarint32(4 * _.length),
          _ = 0;
        _ < _.length;
        _++
      )
        this.encoder_.writeInt32(_[_]);
  };
  goog.exportProperty(
    jspb.BinaryWriter.prototype,
    "writePackedSfixed32",
    jspb.BinaryWriter.prototype.writePackedSfixed32,
  );
  jspb.BinaryWriter.prototype.writePackedSfixed64 = function (_, _) {
    if (_ != null && _.length)
      for (
        this.writeFieldHeader_(_, jspb.BinaryConstants.WireType.DELIMITED),
          this.encoder_.writeUnsignedVarint32(8 * _.length),
          _ = 0;
        _ < _.length;
        _++
      )
        this.encoder_.writeInt64(_[_]);
  };
  goog.exportProperty(
    jspb.BinaryWriter.prototype,
    "writePackedSfixed64",
    jspb.BinaryWriter.prototype.writePackedSfixed64,
  );
  jspb.BinaryWriter.prototype.writePackedSfixed64String = function (_, _) {
    if (_ != null && _.length)
      for (
        this.writeFieldHeader_(_, jspb.BinaryConstants.WireType.DELIMITED),
          this.encoder_.writeUnsignedVarint32(8 * _.length),
          _ = 0;
        _ < _.length;
        _++
      )
        this.encoder_.writeInt64String(_[_]);
  };
  jspb.BinaryWriter.prototype.writePackedFloat = function (_, _) {
    if (_ != null && _.length)
      for (
        this.writeFieldHeader_(_, jspb.BinaryConstants.WireType.DELIMITED),
          this.encoder_.writeUnsignedVarint32(4 * _.length),
          _ = 0;
        _ < _.length;
        _++
      )
        this.encoder_.writeFloat(_[_]);
  };
  goog.exportProperty(
    jspb.BinaryWriter.prototype,
    "writePackedFloat",
    jspb.BinaryWriter.prototype.writePackedFloat,
  );
  jspb.BinaryWriter.prototype.writePackedDouble = function (_, _) {
    if (_ != null && _.length)
      for (
        this.writeFieldHeader_(_, jspb.BinaryConstants.WireType.DELIMITED),
          this.encoder_.writeUnsignedVarint32(8 * _.length),
          _ = 0;
        _ < _.length;
        _++
      )
        this.encoder_.writeDouble(_[_]);
  };
  goog.exportProperty(
    jspb.BinaryWriter.prototype,
    "writePackedDouble",
    jspb.BinaryWriter.prototype.writePackedDouble,
  );
  jspb.BinaryWriter.prototype.writePackedBool = function (_, _) {
    if (_ != null && _.length)
      for (
        this.writeFieldHeader_(_, jspb.BinaryConstants.WireType.DELIMITED),
          this.encoder_.writeUnsignedVarint32(_.length),
          _ = 0;
        _ < _.length;
        _++
      )
        this.encoder_.writeBool(_[_]);
  };
  goog.exportProperty(
    jspb.BinaryWriter.prototype,
    "writePackedBool",
    jspb.BinaryWriter.prototype.writePackedBool,
  );
  jspb.BinaryWriter.prototype.writePackedEnum = function (_, _) {
    if (_ != null && _.length) {
      _ = this.beginDelimited_(_);
      for (var _ = 0; _ < _.length; _++) this.encoder_.writeEnum(_[_]);
      this.endDelimited_(_);
    }
  };
  goog.exportProperty(
    jspb.BinaryWriter.prototype,
    "writePackedEnum",
    jspb.BinaryWriter.prototype.writePackedEnum,
  );
  jspb.BinaryWriter.prototype.writePackedFixedHash64 = function (_, _) {
    if (_ != null && _.length)
      for (
        this.writeFieldHeader_(_, jspb.BinaryConstants.WireType.DELIMITED),
          this.encoder_.writeUnsignedVarint32(8 * _.length),
          _ = 0;
        _ < _.length;
        _++
      )
        this.encoder_.writeFixedHash64(_[_]);
  };
  jspb.BinaryWriter.prototype.writePackedVarintHash64 = function (_, _) {
    if (_ != null && _.length) {
      _ = this.beginDelimited_(_);
      for (var _ = 0; _ < _.length; _++) this.encoder_.writeVarintHash64(_[_]);
      this.endDelimited_(_);
    }
  };
  jspb.Map = function (_, _) {
    (this.arr_ = _),
      (this.valueCtor_ = _),
      (this.map_ = {}),
      (this.arrClean = !0),
      0 < this.arr_.length && this.loadFromArray_();
  };
  goog.exportSymbol("jspb.Map", jspb.Map);
  jspb.Map.prototype.loadFromArray_ = function () {
    for (var _ = 0; _ < this.arr_.length; _++) {
      var _ = this.arr_[_],
        _ = _[0];
      this.map_[_.toString()] = new jspb.Map.Entry_(_, _[1]);
    }
    this.arrClean = !0;
  };
  jspb.Map.prototype.toArray = function () {
    if (this.arrClean) {
      if (this.valueCtor_) {
        var _ = this.map_,
          _;
        for (_ in _)
          if (Object.prototype.hasOwnProperty.call(_, _)) {
            var _ = _[_].valueWrapper;
            _ && _.toArray();
          }
      }
    } else {
      for (
        this.arr_.length = 0, _ = this.stringKeys_(), _.sort(), _ = 0;
        _ < _.length;
        _++
      ) {
        var _ = this.map_[_[_]];
        (_ = _.valueWrapper) && _.toArray(), this.arr_.push([_.key, _.value]);
      }
      this.arrClean = !0;
    }
    return this.arr_;
  };
  goog.exportProperty(
    jspb.Map.prototype,
    "toArray",
    jspb.Map.prototype.toArray,
  );
  jspb.Map.prototype.toObject = function (_, _) {
    for (var _ = this.toArray(), _ = [], _ = 0; _ < _.length; _++) {
      var _ = this.map_[_[_][0].toString()];
      this.wrapEntry_(_);
      var _ = _.valueWrapper;
      _
        ? (jspb.asserts.assert(_), _.push([_.key, _(_, _)]))
        : _.push([_.key, _.value]);
    }
    return _;
  };
  goog.exportProperty(
    jspb.Map.prototype,
    "toObject",
    jspb.Map.prototype.toObject,
  );
  jspb.Map.fromObject = function (_, _, _) {
    _ = new jspb.Map([], _);
    for (var _ = 0; _ < _.length; _++) {
      var _ = _[_][0],
        _ = _(_[_][1]);
      _.set(_, _);
    }
    return _;
  };
  goog.exportProperty(jspb.Map, "fromObject", jspb.Map.fromObject);
  jspb.Map.ArrayIteratorIterable_ = function (_) {
    (this.idx_ = 0), (this.arr_ = _);
  };
  jspb.Map.ArrayIteratorIterable_.prototype.next = function () {
    return this.idx_ < this.arr_.length
      ? {
          done: !1,
          value: this.arr_[this.idx_++],
        }
      : {
          done: !0,
          value: void 0,
        };
  };
  typeof Symbol < "u" &&
    (jspb.Map.ArrayIteratorIterable_.prototype[Symbol.iterator] = function () {
      return this;
    });
  jspb.Map.prototype.getLength = function () {
    return this.stringKeys_().length;
  };
  goog.exportProperty(
    jspb.Map.prototype,
    "getLength",
    jspb.Map.prototype.getLength,
  );
  jspb.Map.prototype.clear = function () {
    (this.map_ = {}), (this.arrClean = !1);
  };
  goog.exportProperty(jspb.Map.prototype, "clear", jspb.Map.prototype.clear);
  jspb.Map.prototype.del = function (_) {
    _ = _.toString();
    var _ = this.map_.hasOwnProperty(_);
    return delete this.map_[_], (this.arrClean = !1), _;
  };
  goog.exportProperty(jspb.Map.prototype, "del", jspb.Map.prototype.del);
  jspb.Map.prototype.getEntryList = function () {
    var _ = [],
      _ = this.stringKeys_();
    _.sort();
    for (var _ = 0; _ < _.length; _++) {
      var _ = this.map_[_[_]];
      _.push([_.key, _.value]);
    }
    return _;
  };
  goog.exportProperty(
    jspb.Map.prototype,
    "getEntryList",
    jspb.Map.prototype.getEntryList,
  );
  jspb.Map.prototype.entries = function () {
    var _ = [],
      _ = this.stringKeys_();
    _.sort();
    for (var _ = 0; _ < _.length; _++) {
      var _ = this.map_[_[_]];
      _.push([_.key, this.wrapEntry_(_)]);
    }
    return new jspb.Map.ArrayIteratorIterable_(_);
  };
  goog.exportProperty(
    jspb.Map.prototype,
    "entries",
    jspb.Map.prototype.entries,
  );
  jspb.Map.prototype.keys = function () {
    var _ = [],
      _ = this.stringKeys_();
    _.sort();
    for (var _ = 0; _ < _.length; _++) _.push(this.map_[_[_]].key);
    return new jspb.Map.ArrayIteratorIterable_(_);
  };
  goog.exportProperty(jspb.Map.prototype, "keys", jspb.Map.prototype.keys);
  jspb.Map.prototype.values = function () {
    var _ = [],
      _ = this.stringKeys_();
    _.sort();
    for (var _ = 0; _ < _.length; _++) _.push(this.wrapEntry_(this.map_[_[_]]));
    return new jspb.Map.ArrayIteratorIterable_(_);
  };
  goog.exportProperty(jspb.Map.prototype, "values", jspb.Map.prototype.values);
  jspb.Map.prototype.forEach = function (_, _) {
    var _ = this.stringKeys_();
    _.sort();
    for (var _ = 0; _ < _.length; _++) {
      var _ = this.map_[_[_]];
      _.call(_, this.wrapEntry_(_), _.key, this);
    }
  };
  goog.exportProperty(
    jspb.Map.prototype,
    "forEach",
    jspb.Map.prototype.forEach,
  );
  jspb.Map.prototype.set = function (_, _) {
    var _ = new jspb.Map.Entry_(_);
    return (
      this.valueCtor_
        ? ((_.valueWrapper = _), (_.value = _.toArray()))
        : (_.value = _),
      (this.map_[_.toString()] = _),
      (this.arrClean = !1),
      this
    );
  };
  goog.exportProperty(jspb.Map.prototype, "set", jspb.Map.prototype.set);
  jspb.Map.prototype.wrapEntry_ = function (_) {
    return this.valueCtor_
      ? (_.valueWrapper || (_.valueWrapper = new this.valueCtor_(_.value)),
        _.valueWrapper)
      : _.value;
  };
  jspb.Map.prototype.get = function (_) {
    if ((_ = this.map_[_.toString()])) return this.wrapEntry_(_);
  };
  goog.exportProperty(jspb.Map.prototype, "get", jspb.Map.prototype.get);
  jspb.Map.prototype.has = function (_) {
    return _.toString() in this.map_;
  };
  goog.exportProperty(jspb.Map.prototype, "has", jspb.Map.prototype.has);
  jspb.Map.prototype.serializeBinary = function (_, _, _, _, _) {
    var _ = this.stringKeys_();
    _.sort();
    for (var _ = 0; _ < _.length; _++) {
      var _ = this.map_[_[_]];
      _.beginSubMessage(_),
        _.call(_, 1, _.key),
        this.valueCtor_
          ? _.call(_, 2, this.wrapEntry_(_), _)
          : _.call(_, 2, _.value),
        _.endSubMessage();
    }
  };
  goog.exportProperty(
    jspb.Map.prototype,
    "serializeBinary",
    jspb.Map.prototype.serializeBinary,
  );
  jspb.Map.deserializeBinary = function (_, _, _, _, _, _, _) {
    for (; _.nextField() && !_.isEndGroup(); ) {
      var _ = _.getFieldNumber();
      _ == 1
        ? (_ = _.call(_))
        : _ == 2 &&
          (_.valueCtor_
            ? (jspb.asserts.assert(_),
              _ || (_ = new _.valueCtor_()),
              _.call(_, _, _))
            : (_ = _.call(_)));
    }
    jspb.asserts.assert(_ != null), jspb.asserts.assert(_ != null), _.set(_, _);
  };
  goog.exportProperty(
    jspb.Map,
    "deserializeBinary",
    jspb.Map.deserializeBinary,
  );
  jspb.Map.prototype.stringKeys_ = function () {
    var _ = this.map_,
      _ = [],
      _;
    for (_ in _) Object.prototype.hasOwnProperty.call(_, _) && _.push(_);
    return _;
  };
  jspb.Map.Entry_ = function (_, _) {
    (this.key = _), (this.value = _), (this.valueWrapper = void 0);
  };
  jspb.ExtensionFieldInfo = function (_, _, _, _, _) {
    (this.fieldIndex = _),
      (this.fieldName = _),
      (this.ctor = _),
      (this.toObjectFn = _),
      (this.isRepeated = _);
  };
  goog.exportSymbol("jspb.ExtensionFieldInfo", jspb.ExtensionFieldInfo);
  jspb.ExtensionFieldBinaryInfo = function (_, _, _, _, _, _) {
    (this.fieldInfo = _),
      (this.binaryReaderFn = _),
      (this.binaryWriterFn = _),
      (this.binaryMessageSerializeFn = _),
      (this.binaryMessageDeserializeFn = _),
      (this.isPacked = _);
  };
  goog.exportSymbol(
    "jspb.ExtensionFieldBinaryInfo",
    jspb.ExtensionFieldBinaryInfo,
  );
  jspb.ExtensionFieldInfo.prototype.isMessageType = function () {
    return !!this.ctor;
  };
  goog.exportProperty(
    jspb.ExtensionFieldInfo.prototype,
    "isMessageType",
    jspb.ExtensionFieldInfo.prototype.isMessageType,
  );
  jspb.Message = function () {};
  goog.exportSymbol("jspb.Message", jspb.Message);
  jspb.Message.GENERATE_TO_OBJECT = !0;
  goog.exportProperty(
    jspb.Message,
    "GENERATE_TO_OBJECT",
    jspb.Message.GENERATE_TO_OBJECT,
  );
  jspb.Message.GENERATE_FROM_OBJECT = !goog.DISALLOW_TEST_ONLY_CODE;
  goog.exportProperty(
    jspb.Message,
    "GENERATE_FROM_OBJECT",
    jspb.Message.GENERATE_FROM_OBJECT,
  );
  jspb.Message.GENERATE_TO_STRING = !0;
  jspb.Message.ASSUME_LOCAL_ARRAYS = !1;
  jspb.Message.SERIALIZE_EMPTY_TRAILING_FIELDS = !0;
  jspb.Message.SUPPORTS_UINT8ARRAY_ = typeof Uint8Array == "function";
  jspb.Message.prototype.getJsPbMessageId = function () {
    return this.messageId_;
  };
  goog.exportProperty(
    jspb.Message.prototype,
    "getJsPbMessageId",
    jspb.Message.prototype.getJsPbMessageId,
  );
  jspb.Message.getIndex_ = function (_, _) {
    return _ + _.arrayIndexOffset_;
  };
  jspb.Message.hiddenES6Property_ = function () {};
  jspb.Message.getFieldNumber_ = function (_, _) {
    return _ - _.arrayIndexOffset_;
  };
  jspb.Message.initialize = function (_, _, _, _, _, _) {
    if (
      ((_.wrappers_ = null),
      _ || (_ = _ ? [_] : []),
      (_.messageId_ = _ ? String(_) : void 0),
      (_.arrayIndexOffset_ = _ === 0 ? -1 : 0),
      (_.array = _),
      jspb.Message.initPivotAndExtensionObject_(_, _),
      (_.convertedPrimitiveFields_ = {}),
      jspb.Message.SERIALIZE_EMPTY_TRAILING_FIELDS || (_.repeatedFields = _),
      _)
    )
      for (_ = 0; _ < _.length; _++)
        (_ = _[_]),
          _ < _.pivot_
            ? ((_ = jspb.Message.getIndex_(_, _)),
              (_.array[_] = _.array[_] || jspb.Message.EMPTY_LIST_SENTINEL_))
            : (jspb.Message.maybeInitEmptyExtensionObject_(_),
              (_.extensionObject_[_] =
                _.extensionObject_[_] || jspb.Message.EMPTY_LIST_SENTINEL_));
    if (_ && _.length)
      for (_ = 0; _ < _.length; _++) jspb.Message.computeOneofCase(_, _[_]);
  };
  goog.exportProperty(jspb.Message, "initialize", jspb.Message.initialize);
  jspb.Message.EMPTY_LIST_SENTINEL_ =
    goog.DEBUG && Object.freeze ? Object.freeze([]) : [];
  jspb.Message.isArray_ = function (_) {
    return jspb.Message.ASSUME_LOCAL_ARRAYS
      ? _ instanceof Array
      : Array.isArray(_);
  };
  jspb.Message.isExtensionObject_ = function (_) {
    return (
      _ !== null &&
      typeof _ == "object" &&
      !jspb.Message.isArray_(_) &&
      !(jspb.Message.SUPPORTS_UINT8ARRAY_ && _ instanceof Uint8Array)
    );
  };
  jspb.Message.initPivotAndExtensionObject_ = function (_, _) {
    var _ = _.array.length,
      _ = -1;
    if (
      _ &&
      ((_ = _ - 1), (_ = _.array[_]), jspb.Message.isExtensionObject_(_))
    ) {
      (_.pivot_ = jspb.Message.getFieldNumber_(_, _)), (_.extensionObject_ = _);
      return;
    }
    -1 < _
      ? ((_.pivot_ = Math.max(_, jspb.Message.getFieldNumber_(_, _ + 1))),
        (_.extensionObject_ = null))
      : (_.pivot_ = Number.MAX_VALUE);
  };
  jspb.Message.maybeInitEmptyExtensionObject_ = function (_) {
    var _ = jspb.Message.getIndex_(_, _.pivot_);
    _.array[_] || (_.extensionObject_ = _.array[_] = {});
  };
  jspb.Message.toObjectList = function (_, _, _) {
    for (var _ = [], _ = 0; _ < _.length; _++) _[_] = _.call(_[_], _, _[_]);
    return _;
  };
  goog.exportProperty(jspb.Message, "toObjectList", jspb.Message.toObjectList);
  jspb.Message.toObjectExtension = function (_, _, _, _, _) {
    for (var _ in _) {
      var _ = _[_],
        _ = _.call(_, _);
      if (_ != null) {
        for (var _ in _.fieldName) if (_.fieldName.hasOwnProperty(_)) break;
        _[_] = _.toObjectFn
          ? _.isRepeated
            ? jspb.Message.toObjectList(_, _.toObjectFn, _)
            : _.toObjectFn(_, _)
          : _;
      }
    }
  };
  goog.exportProperty(
    jspb.Message,
    "toObjectExtension",
    jspb.Message.toObjectExtension,
  );
  jspb.Message.serializeBinaryExtensions = function (_, _, _, _) {
    for (var _ in _) {
      var _ = _[_],
        _ = _.fieldInfo;
      if (!_.binaryWriterFn)
        throw Error(
          "Message extension present that was generated without binary serialization support",
        );
      var _ = _.call(_, _);
      if (_ != null)
        if (_.isMessageType())
          if (_.binaryMessageSerializeFn)
            _.binaryWriterFn.call(
              _,
              _.fieldIndex,
              _,
              _.binaryMessageSerializeFn,
            );
          else
            throw Error(
              "Message extension present holding submessage without binary support enabled, and message is being serialized to binary format",
            );
        else _.binaryWriterFn.call(_, _.fieldIndex, _);
    }
  };
  goog.exportProperty(
    jspb.Message,
    "serializeBinaryExtensions",
    jspb.Message.serializeBinaryExtensions,
  );
  jspb.Message.readBinaryExtension = function (_, _, _, _, _) {
    var _ = _[_.getFieldNumber()];
    if (_) {
      if (((_ = _.fieldInfo), !_.binaryReaderFn))
        throw Error(
          "Deserializing extension whose generated code does not support binary format",
        );
      if (_.isMessageType()) {
        var _ = new _.ctor();
        _.binaryReaderFn.call(_, _, _.binaryMessageDeserializeFn);
      } else _ = _.binaryReaderFn.call(_);
      _.isRepeated && !_.isPacked
        ? (_ = _.call(_, _))
          ? _.push(_)
          : _.call(_, _, [_])
        : _.call(_, _, _);
    } else _.skipField();
  };
  goog.exportProperty(
    jspb.Message,
    "readBinaryExtension",
    jspb.Message.readBinaryExtension,
  );
  jspb.Message.getField = function (_, _) {
    if (_ < _.pivot_) {
      _ = jspb.Message.getIndex_(_, _);
      var _ = _.array[_];
      return _ === jspb.Message.EMPTY_LIST_SENTINEL_ ? (_.array[_] = []) : _;
    }
    if (_.extensionObject_)
      return (
        (_ = _.extensionObject_[_]),
        _ === jspb.Message.EMPTY_LIST_SENTINEL_
          ? (_.extensionObject_[_] = [])
          : _
      );
  };
  goog.exportProperty(jspb.Message, "getField", jspb.Message.getField);
  jspb.Message.getRepeatedField = function (_, _) {
    return jspb.Message.getField(_, _);
  };
  goog.exportProperty(
    jspb.Message,
    "getRepeatedField",
    jspb.Message.getRepeatedField,
  );
  jspb.Message.getOptionalFloatingPointField = function (_, _) {
    return (_ = jspb.Message.getField(_, _)), _ == null ? _ : +_;
  };
  goog.exportProperty(
    jspb.Message,
    "getOptionalFloatingPointField",
    jspb.Message.getOptionalFloatingPointField,
  );
  jspb.Message.getBooleanField = function (_, _) {
    return (_ = jspb.Message.getField(_, _)), _ == null ? _ : !!_;
  };
  goog.exportProperty(
    jspb.Message,
    "getBooleanField",
    jspb.Message.getBooleanField,
  );
  jspb.Message.getRepeatedFloatingPointField = function (_, _) {
    var _ = jspb.Message.getRepeatedField(_, _);
    if (
      (_.convertedPrimitiveFields_ || (_.convertedPrimitiveFields_ = {}),
      !_.convertedPrimitiveFields_[_])
    ) {
      for (var _ = 0; _ < _.length; _++) _[_] = +_[_];
      _.convertedPrimitiveFields_[_] = !0;
    }
    return _;
  };
  goog.exportProperty(
    jspb.Message,
    "getRepeatedFloatingPointField",
    jspb.Message.getRepeatedFloatingPointField,
  );
  jspb.Message.getRepeatedBooleanField = function (_, _) {
    var _ = jspb.Message.getRepeatedField(_, _);
    if (
      (_.convertedPrimitiveFields_ || (_.convertedPrimitiveFields_ = {}),
      !_.convertedPrimitiveFields_[_])
    ) {
      for (var _ = 0; _ < _.length; _++) _[_] = !!_[_];
      _.convertedPrimitiveFields_[_] = !0;
    }
    return _;
  };
  goog.exportProperty(
    jspb.Message,
    "getRepeatedBooleanField",
    jspb.Message.getRepeatedBooleanField,
  );
  jspb.Message.bytesAsB64 = function (_) {
    return _ == null || typeof _ == "string"
      ? _
      : jspb.Message.SUPPORTS_UINT8ARRAY_ && _ instanceof Uint8Array
        ? goog.crypt.base64.encodeByteArray(_)
        : (jspb.asserts.fail("Cannot coerce to b64 string: " + goog.typeOf(_)),
          null);
  };
  goog.exportProperty(jspb.Message, "bytesAsB64", jspb.Message.bytesAsB64);
  jspb.Message.bytesAsU8 = function (_) {
    return _ == null || _ instanceof Uint8Array
      ? _
      : typeof _ == "string"
        ? goog.crypt.base64.decodeStringToUint8Array(_)
        : (jspb.asserts.fail("Cannot coerce to Uint8Array: " + goog.typeOf(_)),
          null);
  };
  goog.exportProperty(jspb.Message, "bytesAsU8", jspb.Message.bytesAsU8);
  jspb.Message.bytesListAsB64 = function (_) {
    return (
      jspb.Message.assertConsistentTypes_(_),
      _.length && typeof _[0] != "string"
        ? goog.array.map(_, jspb.Message.bytesAsB64)
        : _
    );
  };
  goog.exportProperty(
    jspb.Message,
    "bytesListAsB64",
    jspb.Message.bytesListAsB64,
  );
  jspb.Message.bytesListAsU8 = function (_) {
    return (
      jspb.Message.assertConsistentTypes_(_),
      !_.length || _[0] instanceof Uint8Array
        ? _
        : goog.array.map(_, jspb.Message.bytesAsU8)
    );
  };
  goog.exportProperty(
    jspb.Message,
    "bytesListAsU8",
    jspb.Message.bytesListAsU8,
  );
  jspb.Message.assertConsistentTypes_ = function (_) {
    if (goog.DEBUG && _ && 1 < _.length) {
      var _ = goog.typeOf(_[0]);
      goog.array.forEach(_, function (_) {
        goog.typeOf(_) != _ &&
          jspb.asserts.fail(
            "Inconsistent type in JSPB repeated field array. Got " +
              goog.typeOf(_) +
              " expected " +
              _,
          );
      });
    }
  };
  jspb.Message.getFieldWithDefault = function (_, _, _) {
    return (_ = jspb.Message.getField(_, _)), _ ?? _;
  };
  goog.exportProperty(
    jspb.Message,
    "getFieldWithDefault",
    jspb.Message.getFieldWithDefault,
  );
  jspb.Message.getBooleanFieldWithDefault = function (_, _, _) {
    return (_ = jspb.Message.getBooleanField(_, _)), _ ?? _;
  };
  goog.exportProperty(
    jspb.Message,
    "getBooleanFieldWithDefault",
    jspb.Message.getBooleanFieldWithDefault,
  );
  jspb.Message.getFloatingPointFieldWithDefault = function (_, _, _) {
    return (_ = jspb.Message.getOptionalFloatingPointField(_, _)), _ ?? _;
  };
  goog.exportProperty(
    jspb.Message,
    "getFloatingPointFieldWithDefault",
    jspb.Message.getFloatingPointFieldWithDefault,
  );
  jspb.Message.getFieldProto3 = jspb.Message.getFieldWithDefault;
  goog.exportProperty(
    jspb.Message,
    "getFieldProto3",
    jspb.Message.getFieldProto3,
  );
  jspb.Message.getMapField = function (_, _, _, _) {
    if ((_.wrappers_ || (_.wrappers_ = {}), _ in _.wrappers_))
      return _.wrappers_[_];
    var _ = jspb.Message.getField(_, _);
    if (!_) {
      if (_) return;
      (_ = []), jspb.Message.setField(_, _, _);
    }
    return (_.wrappers_[_] = new jspb.Map(_, _));
  };
  goog.exportProperty(jspb.Message, "getMapField", jspb.Message.getMapField);
  jspb.Message.setField = function (_, _, _) {
    return (
      jspb.asserts.assertInstanceof(_, jspb.Message),
      _ < _.pivot_
        ? (_.array[jspb.Message.getIndex_(_, _)] = _)
        : (jspb.Message.maybeInitEmptyExtensionObject_(_),
          (_.extensionObject_[_] = _)),
      _
    );
  };
  goog.exportProperty(jspb.Message, "setField", jspb.Message.setField);
  jspb.Message.setProto3IntField = function (_, _, _) {
    return jspb.Message.setFieldIgnoringDefault_(_, _, _, 0);
  };
  goog.exportProperty(
    jspb.Message,
    "setProto3IntField",
    jspb.Message.setProto3IntField,
  );
  jspb.Message.setProto3FloatField = function (_, _, _) {
    return jspb.Message.setFieldIgnoringDefault_(_, _, _, 0);
  };
  goog.exportProperty(
    jspb.Message,
    "setProto3FloatField",
    jspb.Message.setProto3FloatField,
  );
  jspb.Message.setProto3BooleanField = function (_, _, _) {
    return jspb.Message.setFieldIgnoringDefault_(_, _, _, !1);
  };
  goog.exportProperty(
    jspb.Message,
    "setProto3BooleanField",
    jspb.Message.setProto3BooleanField,
  );
  jspb.Message.setProto3StringField = function (_, _, _) {
    return jspb.Message.setFieldIgnoringDefault_(_, _, _, "");
  };
  goog.exportProperty(
    jspb.Message,
    "setProto3StringField",
    jspb.Message.setProto3StringField,
  );
  jspb.Message.setProto3BytesField = function (_, _, _) {
    return jspb.Message.setFieldIgnoringDefault_(_, _, _, "");
  };
  goog.exportProperty(
    jspb.Message,
    "setProto3BytesField",
    jspb.Message.setProto3BytesField,
  );
  jspb.Message.setProto3EnumField = function (_, _, _) {
    return jspb.Message.setFieldIgnoringDefault_(_, _, _, 0);
  };
  goog.exportProperty(
    jspb.Message,
    "setProto3EnumField",
    jspb.Message.setProto3EnumField,
  );
  jspb.Message.setProto3StringIntField = function (_, _, _) {
    return jspb.Message.setFieldIgnoringDefault_(_, _, _, "0");
  };
  goog.exportProperty(
    jspb.Message,
    "setProto3StringIntField",
    jspb.Message.setProto3StringIntField,
  );
  jspb.Message.setFieldIgnoringDefault_ = function (_, _, _, _) {
    return (
      jspb.asserts.assertInstanceof(_, jspb.Message),
      _ !== _
        ? jspb.Message.setField(_, _, _)
        : _ < _.pivot_
          ? (_.array[jspb.Message.getIndex_(_, _)] = null)
          : (jspb.Message.maybeInitEmptyExtensionObject_(_),
            delete _.extensionObject_[_]),
      _
    );
  };
  jspb.Message.addToRepeatedField = function (_, _, _, _) {
    return (
      jspb.asserts.assertInstanceof(_, jspb.Message),
      (_ = jspb.Message.getRepeatedField(_, _)),
      _ != null ? _.splice(_, 0, _) : _.push(_),
      _
    );
  };
  goog.exportProperty(
    jspb.Message,
    "addToRepeatedField",
    jspb.Message.addToRepeatedField,
  );
  jspb.Message.setOneofField = function (_, _, _, _) {
    return (
      jspb.asserts.assertInstanceof(_, jspb.Message),
      (_ = jspb.Message.computeOneofCase(_, _)) &&
        _ !== _ &&
        _ !== void 0 &&
        (_.wrappers_ && _ in _.wrappers_ && (_.wrappers_[_] = void 0),
        jspb.Message.setField(_, _, void 0)),
      jspb.Message.setField(_, _, _)
    );
  };
  goog.exportProperty(
    jspb.Message,
    "setOneofField",
    jspb.Message.setOneofField,
  );
  jspb.Message.computeOneofCase = function (_, _) {
    for (var _, _, _ = 0; _ < _.length; _++) {
      var _ = _[_],
        _ = jspb.Message.getField(_, _);
      _ != null && ((_ = _), (_ = _), jspb.Message.setField(_, _, void 0));
    }
    return _ ? (jspb.Message.setField(_, _, _), _) : 0;
  };
  goog.exportProperty(
    jspb.Message,
    "computeOneofCase",
    jspb.Message.computeOneofCase,
  );
  jspb.Message.getWrapperField = function (_, _, _, _) {
    if ((_.wrappers_ || (_.wrappers_ = {}), !_.wrappers_[_])) {
      var _ = jspb.Message.getField(_, _);
      (_ || _) && (_.wrappers_[_] = new _(_));
    }
    return _.wrappers_[_];
  };
  goog.exportProperty(
    jspb.Message,
    "getWrapperField",
    jspb.Message.getWrapperField,
  );
  jspb.Message.getRepeatedWrapperField = function (_, _, _) {
    return (
      jspb.Message.wrapRepeatedField_(_, _, _),
      (_ = _.wrappers_[_]),
      _ == jspb.Message.EMPTY_LIST_SENTINEL_ && (_ = _.wrappers_[_] = []),
      _
    );
  };
  goog.exportProperty(
    jspb.Message,
    "getRepeatedWrapperField",
    jspb.Message.getRepeatedWrapperField,
  );
  jspb.Message.wrapRepeatedField_ = function (_, _, _) {
    if ((_.wrappers_ || (_.wrappers_ = {}), !_.wrappers_[_])) {
      for (
        var _ = jspb.Message.getRepeatedField(_, _), _ = [], _ = 0;
        _ < _.length;
        _++
      )
        _[_] = new _(_[_]);
      _.wrappers_[_] = _;
    }
  };
  jspb.Message.setWrapperField = function (_, _, _) {
    jspb.asserts.assertInstanceof(_, jspb.Message),
      _.wrappers_ || (_.wrappers_ = {});
    var _ = _ && _.toArray();
    return (_.wrappers_[_] = _), jspb.Message.setField(_, _, _);
  };
  goog.exportProperty(
    jspb.Message,
    "setWrapperField",
    jspb.Message.setWrapperField,
  );
  jspb.Message.setOneofWrapperField = function (_, _, _, _) {
    jspb.asserts.assertInstanceof(_, jspb.Message),
      _.wrappers_ || (_.wrappers_ = {});
    var _ = _ && _.toArray();
    return (_.wrappers_[_] = _), jspb.Message.setOneofField(_, _, _, _);
  };
  goog.exportProperty(
    jspb.Message,
    "setOneofWrapperField",
    jspb.Message.setOneofWrapperField,
  );
  jspb.Message.setRepeatedWrapperField = function (_, _, _) {
    jspb.asserts.assertInstanceof(_, jspb.Message),
      _.wrappers_ || (_.wrappers_ = {}),
      (_ = _ || []);
    for (var _ = [], _ = 0; _ < _.length; _++) _[_] = _[_].toArray();
    return (_.wrappers_[_] = _), jspb.Message.setField(_, _, _);
  };
  goog.exportProperty(
    jspb.Message,
    "setRepeatedWrapperField",
    jspb.Message.setRepeatedWrapperField,
  );
  jspb.Message.addToRepeatedWrapperField = function (_, _, _, _, _) {
    jspb.Message.wrapRepeatedField_(_, _, _);
    var _ = _.wrappers_[_];
    return (
      _ || (_ = _.wrappers_[_] = []),
      (_ = _ || new _()),
      (_ = jspb.Message.getRepeatedField(_, _)),
      _ != null
        ? (_.splice(_, 0, _), _.splice(_, 0, _.toArray()))
        : (_.push(_), _.push(_.toArray())),
      _
    );
  };
  goog.exportProperty(
    jspb.Message,
    "addToRepeatedWrapperField",
    jspb.Message.addToRepeatedWrapperField,
  );
  jspb.Message.toMap = function (_, _, _, _) {
    for (var _ = {}, _ = 0; _ < _.length; _++)
      _[_.call(_[_])] = _ ? _.call(_[_], _, _[_]) : _[_];
    return _;
  };
  goog.exportProperty(jspb.Message, "toMap", jspb.Message.toMap);
  jspb.Message.prototype.syncMapFields_ = function () {
    if (this.wrappers_)
      for (var _ in this.wrappers_) {
        var _ = this.wrappers_[_];
        if (Array.isArray(_))
          for (var _ = 0; _ < _.length; _++) _[_] && _[_].toArray();
        else _ && _.toArray();
      }
  };
  jspb.Message.prototype.toArray = function () {
    return this.syncMapFields_(), this.array;
  };
  goog.exportProperty(
    jspb.Message.prototype,
    "toArray",
    jspb.Message.prototype.toArray,
  );
  jspb.Message.GENERATE_TO_STRING &&
    (jspb.Message.prototype.toString = function () {
      return this.syncMapFields_(), this.array.toString();
    });
  jspb.Message.prototype.getExtension = function (_) {
    if (this.extensionObject_) {
      this.wrappers_ || (this.wrappers_ = {});
      var _ = _.fieldIndex;
      if (_.isRepeated) {
        if (_.isMessageType())
          return (
            this.wrappers_[_] ||
              (this.wrappers_[_] = goog.array.map(
                this.extensionObject_[_] || [],
                function (_) {
                  return new _.ctor(_);
                },
              )),
            this.wrappers_[_]
          );
      } else if (_.isMessageType())
        return (
          !this.wrappers_[_] &&
            this.extensionObject_[_] &&
            (this.wrappers_[_] = new _.ctor(this.extensionObject_[_])),
          this.wrappers_[_]
        );
      return this.extensionObject_[_];
    }
  };
  goog.exportProperty(
    jspb.Message.prototype,
    "getExtension",
    jspb.Message.prototype.getExtension,
  );
  jspb.Message.prototype.setExtension = function (_, _) {
    this.wrappers_ || (this.wrappers_ = {}),
      jspb.Message.maybeInitEmptyExtensionObject_(this);
    var _ = _.fieldIndex;
    return (
      _.isRepeated
        ? ((_ = _ || []),
          _.isMessageType()
            ? ((this.wrappers_[_] = _),
              (this.extensionObject_[_] = goog.array.map(_, function (_) {
                return _.toArray();
              })))
            : (this.extensionObject_[_] = _))
        : _.isMessageType()
          ? ((this.wrappers_[_] = _),
            (this.extensionObject_[_] = _ && _.toArray()))
          : (this.extensionObject_[_] = _),
      this
    );
  };
  goog.exportProperty(
    jspb.Message.prototype,
    "setExtension",
    jspb.Message.prototype.setExtension,
  );
  jspb.Message.difference = function (_, _) {
    if (!(_ instanceof _.constructor))
      throw Error("Messages have different types.");
    var _ = _.toArray();
    _ = _.toArray();
    var _ = [],
      _ = 0,
      _ = _.length > _.length ? _.length : _.length;
    for (
      _.getJsPbMessageId() && ((_[0] = _.getJsPbMessageId()), (_ = 1));
      _ < _;
      _++
    )
      jspb.Message.compareFields(_[_], _[_]) || (_[_] = _[_]);
    return new _.constructor(_);
  };
  goog.exportProperty(jspb.Message, "difference", jspb.Message.difference);
  jspb.Message.equals = function (_, _) {
    return (
      _ == _ ||
      (!(!_ || !_) &&
        _ instanceof _.constructor &&
        jspb.Message.compareFields(_.toArray(), _.toArray()))
    );
  };
  goog.exportProperty(jspb.Message, "equals", jspb.Message.equals);
  jspb.Message.compareExtensions = function (_, _) {
    (_ = _ || {}), (_ = _ || {});
    var _ = {},
      _;
    for (_ in _) _[_] = 0;
    for (_ in _) _[_] = 0;
    for (_ in _) if (!jspb.Message.compareFields(_[_], _[_])) return !1;
    return !0;
  };
  goog.exportProperty(
    jspb.Message,
    "compareExtensions",
    jspb.Message.compareExtensions,
  );
  jspb.Message.compareFields = function (_, _) {
    if (_ == _) return !0;
    if (!goog.isObject(_) || !goog.isObject(_))
      return (typeof _ == "number" && isNaN(_)) ||
        (typeof _ == "number" && isNaN(_))
        ? String(_) == String(_)
        : !1;
    if (_.constructor != _.constructor) return !1;
    if (jspb.Message.SUPPORTS_UINT8ARRAY_ && _.constructor === Uint8Array) {
      if (_.length != _.length) return !1;
      for (var _ = 0; _ < _.length; _++) if (_[_] != _[_]) return !1;
      return !0;
    }
    if (_.constructor === Array) {
      var _ = void 0,
        _ = void 0,
        _ = Math.max(_.length, _.length);
      for (_ = 0; _ < _; _++) {
        var _ = _[_],
          _ = _[_];
        if (
          (_ &&
            _.constructor == Object &&
            (jspb.asserts.assert(_ === void 0),
            jspb.asserts.assert(_ === _.length - 1),
            (_ = _),
            (_ = void 0)),
          _ &&
            _.constructor == Object &&
            (jspb.asserts.assert(_ === void 0),
            jspb.asserts.assert(_ === _.length - 1),
            (_ = _),
            (_ = void 0)),
          !jspb.Message.compareFields(_, _))
        )
          return !1;
      }
      return _ || _
        ? ((_ = _ || {}), (_ = _ || {}), jspb.Message.compareExtensions(_, _))
        : !0;
    }
    if (_.constructor === Object) return jspb.Message.compareExtensions(_, _);
    throw Error("Invalid type in JSPB array");
  };
  goog.exportProperty(
    jspb.Message,
    "compareFields",
    jspb.Message.compareFields,
  );
  jspb.Message.prototype.cloneMessage = function () {
    return jspb.Message.cloneMessage(this);
  };
  goog.exportProperty(
    jspb.Message.prototype,
    "cloneMessage",
    jspb.Message.prototype.cloneMessage,
  );
  jspb.Message.prototype.clone = function () {
    return jspb.Message.cloneMessage(this);
  };
  goog.exportProperty(
    jspb.Message.prototype,
    "clone",
    jspb.Message.prototype.clone,
  );
  jspb.Message.clone = function (_) {
    return jspb.Message.cloneMessage(_);
  };
  goog.exportProperty(jspb.Message, "clone", jspb.Message.clone);
  jspb.Message.cloneMessage = function (_) {
    return new _.constructor(jspb.Message.clone_(_.toArray()));
  };
  jspb.Message.copyInto = function (_, _) {
    jspb.asserts.assertInstanceof(_, jspb.Message),
      jspb.asserts.assertInstanceof(_, jspb.Message),
      jspb.asserts.assert(
        _.constructor == _.constructor,
        "Copy source and target message should have the same type.",
      ),
      (_ = jspb.Message.clone(_));
    for (
      var _ = _.toArray(), _ = _.toArray(), _ = (_.length = 0);
      _ < _.length;
      _++
    )
      _[_] = _[_];
    (_.wrappers_ = _.wrappers_), (_.extensionObject_ = _.extensionObject_);
  };
  goog.exportProperty(jspb.Message, "copyInto", jspb.Message.copyInto);
  jspb.Message.clone_ = function (_) {
    if (Array.isArray(_)) {
      for (var _ = Array(_.length), _ = 0; _ < _.length; _++) {
        var _ = _[_];
        _ != null &&
          (_[_] =
            typeof _ == "object"
              ? jspb.Message.clone_(jspb.asserts.assert(_))
              : _);
      }
      return _;
    }
    if (jspb.Message.SUPPORTS_UINT8ARRAY_ && _ instanceof Uint8Array)
      return new Uint8Array(_);
    _ = {};
    for (_ in _)
      (_ = _[_]),
        _ != null &&
          (_[_] =
            typeof _ == "object"
              ? jspb.Message.clone_(jspb.asserts.assert(_))
              : _);
    return _;
  };
  jspb.Message.registerMessageType = function (_, _) {
    _.messageId = _;
  };
  goog.exportProperty(
    jspb.Message,
    "registerMessageType",
    jspb.Message.registerMessageType,
  );
  jspb.Message.messageSetExtensions = {};
  jspb.Message.messageSetExtensionsBinary = {};
  jspb.Export = {};
  typeof exports == "object" &&
    ((exports.Map = jspb.Map),
    (exports.Message = jspb.Message),
    (exports.BinaryReader = jspb.BinaryReader),
    (exports.BinaryWriter = jspb.BinaryWriter),
    (exports.ExtensionFieldInfo = jspb.ExtensionFieldInfo),
    (exports.ExtensionFieldBinaryInfo = jspb.ExtensionFieldBinaryInfo),
    (exports.exportSymbol = goog.exportSymbol),
    (exports.inherits = goog.inherits),
    (exports.object = {
      extend: goog.object.extend,
    }),
    (exports.typeOf = goog.typeOf));
});
var _ = _(_());
var _ = _(_(), 1);
var _ = _(_()),
  _ = _.BinaryReader.prototype,
  _ = _.BinaryWriter.prototype;
function _(_) {
  let _ = {},
    { fields: _ } = _;
  for (let _ in _) {
    let _ = _[_];
    _[_._] = _;
  }
  return _;
}
function _(_, _) {
  let { proto: _, fields: _ } = _,
    _ = new _();
  if (_ == null) return _;
  for (let _ in _) {
    let { _: _, _: _, _: _, _: _, _: _ } = _[_];
    if (!Object.prototype.hasOwnProperty.call(_, _)) continue;
    let _ = _[_];
    _
      ? _
        ? _.Message.setRepeatedWrapperField(
            _,
            _,
            Array.isArray(_) ? _.map((_) => _.fromObject(_)) : [],
          )
        : _.Message.setWrapperField(_, _, _.fromObject(_))
      : _.Message.setField(_, _, _);
  }
  return _;
}
function _(_, _, _) {
  let { proto: _, fields: _ } = _,
    _ = {};
  for (let _ in _) {
    let { _: _, _: _, _: _, _: _, _: _ } = _[_];
    if (_)
      if (_)
        _[_] = _.Message.toObjectList(
          _.Message.getRepeatedWrapperField(_, _, _),
          _.toObject,
          _,
        );
      else {
        let _ = _.Message.getWrapperField(_, _, _, _ ? 1 : 0);
        _ && (_[_] = _.toObject(_, _));
      }
    else {
      let _ = _.Message.getFieldWithDefault(_, _, _ !== void 0 ? _ : null);
      (_ !== null || _) && (_[_] = _);
    }
  }
  return _ && (_.$jspbMessageInstance = _), _;
}
function _(_, _, _) {
  for (; _.nextField() && !_.isEndGroup(); ) {
    let _ = _.getFieldNumber(),
      _ = _[_];
    if (_) {
      let { _: _, _: _, _: _, _: _, _: _, _: _ } = _;
      if (_) {
        let _ = new _();
        _.readMessage(_, _.deserializeBinaryFromReader),
          _
            ? _.Message.addToRepeatedWrapperField(_, _, _, _)
            : _.Message.setWrapperField(_, _, _);
      } else if (_) {
        let _ = _.call(_);
        _ ? _.Message.addToRepeatedField(_, _, _) : _.Message.setField(_, _, _);
      } else
        console.assert(
          !!_,
          `Reader func not set for field number ${_} in class ${_}`,
        ),
          _.skipField();
    } else _.skipField();
  }
  return _;
}
function _(_, _, _) {
  let { fields: _ } = _;
  for (let _ in _) {
    let { _: _, _: _, _: _, _: _, _: _, _: _ } = _[_];
    if (_)
      if (_) {
        let _ = _.Message.getRepeatedWrapperField(_, _, _);
        ((_ && _.length) || _) &&
          _.writeRepeatedMessage(_, _, _.serializeBinaryToWriter);
      } else {
        let _ = _.Message.getWrapperField(_, _, _, _ ? 1 : 0);
        _ && _.writeMessage(_, _, _.serializeBinaryToWriter);
      }
    else if (_) {
      let _ = _.Message.getField(_, _);
      typeof _ < "u" && _.call(_, _, _);
    } else
      console.assert(
        !!_,
        `Writer func not set for field number ${_} in class ${_}`,
      );
  }
}
function _(_) {
  let _ = _.proto;
  for (let _ in _.fields) {
    let _ = _.fields[_],
      { _: _, _: _, _: _, _: _, _: _ } = _;
    Object.prototype.hasOwnProperty.call(_, "d")
      ? (_.prototype[_] = _(_.Message.getFieldWithDefault, _, _))
      : _
        ? _
          ? (_.prototype[_] = _(_.Message.getRepeatedWrapperField, _, _))
          : (_.prototype[_] = _(_, _))
        : (_.prototype[_] = _(_.Message.getField, _)),
      _
        ? _
          ? (_.prototype[`set_${_}`] = _(_.Message.setRepeatedWrapperField, _))
          : (_.prototype[`set_${_}`] = _(_.Message.setWrapperField, _))
        : (_.prototype[`set_${_}`] = _(_.Message.setField, _)),
      _ && (_.prototype[`add_${_}`] = _(_, _));
  }
}
function _(_, ..._) {
  return function () {
    return _(this, ..._);
  };
}
function _(_, _) {
  return function (_ = !0) {
    return _.Message.getWrapperField(this, _, _, _ ? 1 : 0);
  };
}
function _(_, _) {
  return function (_) {
    return _(this, _, _);
  };
}
function _(_, _) {
  return _
    ? function (_, _) {
        return _.Message.addToRepeatedWrapperField(this, _, _, _, _);
      }
    : function (_, _) {
        _.Message.addToRepeatedField(this, _, _, _);
      };
}
var _ = class _ extends _.Message {
  static ImplementsStaticInterface() {}
  constructor(_ = null) {
    super(),
      _.prototype._ || _(_._()),
      _.Message.initialize(this, _, 0, -1, void 0, null);
  }
  static sm_m;
  static sm_mbf;
  static M() {
    return (
      _.sm_m ||
        (_.sm_m = {
          proto: _,
          fields: {
            _: {
              _: 1,
              _: _.readFixed32,
              _: _.writeFixed32,
            },
            _: {
              _: 2,
              _: _.readBytes,
              _: _.writeBytes,
            },
          },
        }),
      _.sm_m
    );
  }
  static MBF() {
    return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
  }
  toObject(_ = !1) {
    return _.toObject(_, this);
  }
  static toObject(_, _) {
    return _(_._(), _, _);
  }
  static fromObject(_) {
    return _(_._(), _);
  }
  static deserializeBinary(_) {
    let _ = new _.default.BinaryReader(_),
      _ = new _();
    return _.deserializeBinaryFromReader(_, _);
  }
  static deserializeBinaryFromReader(_, _) {
    return _(_.MBF(), _, _);
  }
  serializeBinary() {
    var _ = new _.default.BinaryWriter();
    return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
  }
  static serializeBinaryToWriter(_, _) {
    _(_._(), _, _);
  }
  serializeBase64String() {
    var _ = new _.default.BinaryWriter();
    return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
  }
  getClassName() {
    return "CMsgIPAddress";
  }
};
var _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.dst_gcid_queue || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              dst_gcid_queue: {
                _: 1,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              dst_gc_dir_index: {
                _: 2,
                _: _.readUint32,
                _: _.writeUint32,
              },
            },
          }),
        _.sm_m
      );
    }
    static MBF() {
      return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CMsgGCRoutingProtoBufHeader";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.steamid || _(_._()),
        _.Message.initialize(this, _, 0, -1, [27, 41], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              steamid: {
                _: 1,
                _: _.readFixed64String,
                _: _.writeFixed64String,
              },
              client_sessionid: {
                _: 2,
                _: _.readInt32,
                _: _.writeInt32,
              },
              routing_appid: {
                _: 3,
                _: _.readUint32,
                _: _.writeUint32,
              },
              jobid_source: {
                _: 10,
                _: "18446744073709551615",
                _: _.readFixed64String,
                _: _.writeFixed64String,
              },
              jobid_target: {
                _: 11,
                _: "18446744073709551615",
                _: _.readFixed64String,
                _: _.writeFixed64String,
              },
              target_job_name: {
                _: 12,
                _: _.readString,
                _: _.writeString,
              },
              seq_num: {
                _: 24,
                _: _.readInt32,
                _: _.writeInt32,
              },
              eresult: {
                _: 13,
                _: 2,
                _: _.readInt32,
                _: _.writeInt32,
              },
              error_message: {
                _: 14,
                _: _.readString,
                _: _.writeString,
              },
              _: {
                _: 15,
                _: _.readUint32,
                _: _.writeUint32,
              },
              ip_v6: {
                _: 29,
                _: _.readBytes,
                _: _.writeBytes,
              },
              auth_account_flags: {
                _: 16,
                _: _.readUint32,
                _: _.writeUint32,
              },
              token_source: {
                _: 22,
                _: _.readUint32,
                _: _.writeUint32,
              },
              admin_spoofing_user: {
                _: 23,
                _: _.readBool,
                _: _.writeBool,
              },
              transport_error: {
                _: 17,
                _: 1,
                _: _.readInt32,
                _: _.writeInt32,
              },
              messageid: {
                _: 18,
                _: "18446744073709551615",
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              publisher_group_id: {
                _: 19,
                _: _.readUint32,
                _: _.writeUint32,
              },
              sysid: {
                _: 20,
                _: _.readUint32,
                _: _.writeUint32,
              },
              webapi_key_id: {
                _: 25,
                _: _.readUint32,
                _: _.writeUint32,
              },
              is_from_external_source: {
                _: 26,
                _: _.readBool,
                _: _.writeBool,
              },
              forward_to_sysid: {
                _: 27,
                _: !0,
                _: !0,
                _: _.readUint32,
                pbr: _.readPackedUint32,
                _: _.writeRepeatedUint32,
              },
              cm_sysid: {
                _: 28,
                _: _.readUint32,
                _: _.writeUint32,
              },
              launcher_type: {
                _: 31,
                _: 0,
                _: _.readUint32,
                _: _.writeUint32,
              },
              realm: {
                _: 32,
                _: 0,
                _: _.readUint32,
                _: _.writeUint32,
              },
              timeout_ms: {
                _: 33,
                _: -1,
                _: _.readInt32,
                _: _.writeInt32,
              },
              debug_source: {
                _: 34,
                _: _.readString,
                _: _.writeString,
              },
              debug_source_string_index: {
                _: 35,
                _: _.readUint32,
                _: _.writeUint32,
              },
              token_id: {
                _: 36,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              routing_gc: {
                _: 37,
                _: _,
              },
              session_disposition: {
                _: 38,
                _: 0,
                _: _.readEnum,
                _: _.writeEnum,
              },
              wg_token: {
                _: 39,
                _: _.readString,
                _: _.writeString,
              },
              webui_auth_key: {
                _: 40,
                _: _.readString,
                _: _.writeString,
              },
              exclude_client_sessionids: {
                _: 41,
                _: !0,
                _: !0,
                _: _.readInt32,
                pbr: _.readPackedInt32,
                _: _.writeRepeatedInt32,
              },
              admin_request_spoofing_steamid: {
                _: 43,
                _: _.readFixed64String,
                _: _.writeFixed64String,
              },
              is_valveds: {
                _: 44,
                _: _.readBool,
                _: _.writeBool,
              },
              trace_tag: {
                _: 45,
                _: _.readFixed64String,
                _: _.writeFixed64String,
              },
            },
          }),
        _.sm_m
      );
    }
    static MBF() {
      return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CMsgProtoBufHeader";
    }
  };
var _ = class _ extends _.Message {
  static ImplementsStaticInterface() {}
  constructor(_ = null) {
    super(),
      _.prototype.appid || _(_._()),
      _.Message.initialize(this, _, 0, -1, [17, 18], null);
  }
  static sm_m;
  static sm_mbf;
  static M() {
    return (
      _.sm_m ||
        (_.sm_m = {
          proto: _,
          fields: {
            appid: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            name: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            icon: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            tool: {
              _: 6,
              _: _.readBool,
              _: _.writeBool,
            },
            demo: {
              _: 7,
              _: _.readBool,
              _: _.writeBool,
            },
            media: {
              _: 8,
              _: _.readBool,
              _: _.writeBool,
            },
            community_visible_stats: {
              _: 9,
              _: _.readBool,
              _: _.writeBool,
            },
            friendly_name: {
              _: 10,
              _: _.readString,
              _: _.writeString,
            },
            propagation: {
              _: 11,
              _: _.readString,
              _: _.writeString,
            },
            has_adult_content: {
              _: 12,
              _: _.readBool,
              _: _.writeBool,
            },
            is_visible_in_steam_china: {
              _: 13,
              _: _.readBool,
              _: _.writeBool,
            },
            app_type: {
              _: 14,
              _: _.readUint32,
              _: _.writeUint32,
            },
            has_adult_content_sex: {
              _: 15,
              _: _.readBool,
              _: _.writeBool,
            },
            has_adult_content_violence: {
              _: 16,
              _: _.readBool,
              _: _.writeBool,
            },
            content_descriptorids: {
              _: 17,
              _: !0,
              _: !0,
              _: _.readUint32,
              pbr: _.readPackedUint32,
              _: _.writeRepeatedUint32,
            },
            content_descriptorids_including_dlc: {
              _: 18,
              _: !0,
              _: !0,
              _: _.readUint32,
              pbr: _.readPackedUint32,
              _: _.writeRepeatedUint32,
            },
          },
        }),
      _.sm_m
    );
  }
  static MBF() {
    return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
  }
  toObject(_ = !1) {
    return _.toObject(_, this);
  }
  static toObject(_, _) {
    return _(_._(), _, _);
  }
  static fromObject(_) {
    return _(_._(), _);
  }
  static deserializeBinary(_) {
    let _ = new _.default.BinaryReader(_),
      _ = new _();
    return _.deserializeBinaryFromReader(_, _);
  }
  static deserializeBinaryFromReader(_, _) {
    return _(_.MBF(), _, _);
  }
  serializeBinary() {
    var _ = new _.default.BinaryWriter();
    return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
  }
  static serializeBinaryToWriter(_, _) {
    _(_._(), _, _);
  }
  serializeBase64String() {
    var _ = new _.default.BinaryWriter();
    return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
  }
  getClassName() {
    return "CCDDBAppDetailCommon";
  }
};
var _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.language || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              language: {
                _: 1,
                _: _.readUint32,
                _: _.writeUint32,
              },
              localized_string: {
                _: 2,
                _: _.readString,
                _: _.writeString,
              },
            },
          }),
        _.sm_m
      );
    }
    static MBF() {
      return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CLocalizationToken";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.clanid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              clanid: {
                _: 1,
                _: _.readUint32,
                _: _.writeUint32,
              },
              event_gid: {
                _: 2,
                _: _.readFixed64String,
                _: _.writeFixed64String,
              },
              announcement_gid: {
                _: 3,
                _: _.readFixed64String,
                _: _.writeFixed64String,
              },
              rtime_start: {
                _: 4,
                _: _.readUint32,
                _: _.writeUint32,
              },
              rtime_end: {
                _: 5,
                _: _.readUint32,
                _: _.writeUint32,
              },
              priority_score: {
                _: 6,
                _: _.readUint32,
                _: _.writeUint32,
              },
              type: {
                _: 7,
                _: _.readUint32,
                _: _.writeUint32,
              },
              clamp_range_slot: {
                _: 8,
                _: _.readUint32,
                _: _.writeUint32,
              },
              appid: {
                _: 9,
                _: _.readUint32,
                _: _.writeUint32,
              },
              rtime32_last_modified: {
                _: 10,
                _: _.readUint32,
                _: _.writeUint32,
              },
            },
          }),
        _.sm_m
      );
    }
    static MBF() {
      return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CClanEventUserNewsTuple";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.rtime_before || _(_._()),
        _.Message.initialize(this, _, 0, -1, [4], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              rtime_before: {
                _: 1,
                _: _.readUint32,
                _: _.writeUint32,
              },
              rtime_after: {
                _: 2,
                _: _.readUint32,
                _: _.writeUint32,
              },
              qualified: {
                _: 3,
                _: _.readUint32,
                _: _.writeUint32,
              },
              events: {
                _: 4,
                _: _,
                _: !0,
                _: !0,
              },
            },
          }),
        _.sm_m
      );
    }
    static MBF() {
      return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CClanMatchEventByRange";
    }
  };
var _ = class _ extends _.Message {
  static ImplementsStaticInterface() {}
  constructor(_ = null) {
    super(),
      _.prototype.packageid || _(_._()),
      _.Message.initialize(this, _, 0, -1, void 0, null);
  }
  static sm_m;
  static sm_mbf;
  static M() {
    return (
      _.sm_m ||
        (_.sm_m = {
          proto: _,
          fields: {
            packageid: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            reservation_state: {
              _: 2,
              _: _.readInt32,
              _: _.writeInt32,
            },
            queue_position: {
              _: 3,
              _: _.readInt32,
              _: _.writeInt32,
            },
            total_queue_size: {
              _: 4,
              _: _.readInt32,
              _: _.writeInt32,
            },
            reservation_country_code: {
              _: 5,
              _: _.readString,
              _: _.writeString,
            },
            expired: {
              _: 6,
              _: _.readBool,
              _: _.writeBool,
            },
            time_expires: {
              _: 7,
              _: _.readUint32,
              _: _.writeUint32,
            },
            time_reserved: {
              _: 8,
              _: _.readUint32,
              _: _.writeUint32,
            },
            rtime_estimated_notification: {
              _: 9,
              _: _.readUint32,
              _: _.writeUint32,
            },
            notificaton_token: {
              _: 10,
              _: _.readString,
              _: _.writeString,
            },
            queue_head_position_at_reservation: {
              _: 11,
              _: _.readInt32,
              _: _.writeInt32,
            },
            queue_head_position_now: {
              _: 12,
              _: _.readInt32,
              _: _.writeInt32,
            },
          },
        }),
      _.sm_m
    );
  }
  static MBF() {
    return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
  }
  toObject(_ = !1) {
    return _.toObject(_, this);
  }
  static toObject(_, _) {
    return _(_._(), _, _);
  }
  static fromObject(_) {
    return _(_._(), _);
  }
  static deserializeBinary(_) {
    let _ = new _.default.BinaryReader(_),
      _ = new _();
    return _.deserializeBinaryFromReader(_, _);
  }
  static deserializeBinaryFromReader(_, _) {
    return _(_.MBF(), _, _);
  }
  serializeBinary() {
    var _ = new _.default.BinaryWriter();
    return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
  }
  static serializeBinaryToWriter(_, _) {
    _(_._(), _, _);
  }
  serializeBase64String() {
    var _ = new _.default.BinaryWriter();
    return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
  }
  getClassName() {
    return "CPackageReservationStatus";
  }
};
var _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.content_descriptors_to_exclude || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              content_descriptors_to_exclude: {
                _: 1,
                _: _,
                _: !0,
                _: !0,
              },
            },
          }),
        _.sm_m
      );
    }
    static MBF() {
      return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "UserContentDescriptorPreferences";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.content_descriptorid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              content_descriptorid: {
                _: 1,
                _: _.readUint32,
                _: _.writeUint32,
              },
              timestamp_added: {
                _: 2,
                _: _.readUint32,
                _: _.writeUint32,
              },
            },
          }),
        _.sm_m
      );
    }
    static MBF() {
      return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "UserContentDescriptorPreferences_ContentDescriptor";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.manufacturer || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              manufacturer: {
                _: 1,
                _: _.readString,
                _: _.writeString,
              },
              model: {
                _: 2,
                _: _.readString,
                _: _.writeString,
              },
              dx_video_card: {
                _: 3,
                _: _.readString,
                _: _.writeString,
              },
              dx_vendorid: {
                _: 4,
                _: _.readInt32,
                _: _.writeInt32,
              },
              dx_deviceid: {
                _: 5,
                _: _.readInt32,
                _: _.writeInt32,
              },
              num_gpu: {
                _: 6,
                _: _.readUint32,
                _: _.writeUint32,
              },
              system_ram: {
                _: 7,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              _: {
                _: 8,
                _: _.readString,
                _: _.writeString,
              },
              cpu_vendor: {
                _: 9,
                _: _.readString,
                _: _.writeString,
              },
              cpu_name: {
                _: 10,
                _: _.readString,
                _: _.writeString,
              },
              gaming_device_type: {
                _: 11,
                _: _.readUint32,
                _: _.writeUint32,
              },
              dx_driver_version: {
                _: 12,
                _: _.readString,
                _: _.writeString,
              },
              dx_driver_name: {
                _: 13,
                _: _.readString,
                _: _.writeString,
              },
              adapter_description: {
                _: 14,
                _: _.readString,
                _: _.writeString,
              },
              driver_version: {
                _: 15,
                _: _.readString,
                _: _.writeString,
              },
              driver_date: {
                _: 16,
                _: _.readString,
                _: _.writeString,
              },
              vram_size: {
                _: 17,
                _: _.readUint32,
                _: _.writeUint32,
              },
            },
          }),
        _.sm_m
      );
    }
    static MBF() {
      return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "UserSystemInformation";
    }
  };
var _ = class {
    m_nOffset;
    m_nLength;
    m_viewPacket;
    m_rgubPacket;
    m_iGet;
    m_iPut;
    constructor(_, _ = 0, _) {
      (this.m_nOffset = _ || 0),
        _ instanceof Uint8Array || _ instanceof DataView
          ? ((this.m_nLength = _ || _.byteLength - this.m_nOffset),
            (this.m_nOffset += _.byteOffset),
            (this.m_viewPacket = new DataView(
              _.buffer,
              this.m_nOffset,
              this.m_nLength,
            )))
          : ((this.m_nLength = _ || _.byteLength - this.m_nOffset),
            (this.m_viewPacket = new DataView(
              _,
              this.m_nOffset,
              this.m_nLength,
            ))),
        (this.m_rgubPacket = new Uint8Array(
          this.m_viewPacket.buffer,
          this.m_viewPacket.byteOffset,
          this.m_viewPacket.byteLength,
        )),
        (this.m_iGet = 0),
        (this.m_iPut = 0);
    }
    TellGet() {
      return this.m_iGet + this.m_viewPacket.byteOffset;
    }
    GetPacket() {
      return this.m_viewPacket.buffer;
    }
    GetUint8() {
      return this.m_viewPacket.getUint8(this.m_iGet++);
    }
    GetUint32(_ = !0) {
      let _ = this.m_viewPacket.getUint32(this.m_iGet, _);
      return (this.m_iGet += 4), _;
    }
    SeekGetHead(_ = 0) {
      this.m_iGet = _ || 0;
    }
    SeekGetCurrent(_) {
      this.m_iGet += _;
    }
    TellPut() {
      return this.m_iPut + this.m_viewPacket.byteOffset;
    }
    TellMaxPut() {
      return this.m_viewPacket.byteLength;
    }
    PutUint8(_) {
      this.m_viewPacket.setUint8(this.m_iPut++, _);
    }
    PutUint32(_, _ = !0) {
      this.m_viewPacket.setUint32(this.m_iPut, _, _), (this.m_iPut += 4);
    }
    PutBytes(_) {
      this.m_rgubPacket.set(_, this.m_iPut), (this.m_iPut += _.length);
    }
    SeekPut(_) {
      this.m_iPut += _;
    }
    GetCountBytesRemaining() {
      return this.m_viewPacket.byteLength - this.m_iGet;
    }
  },
  _ = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];
function _(_) {
  let _ = "";
  for (let _ = 0; _ < _.length; _++) {
    let _ = _[_];
    _ += _[_ >>> 4] + _[_ & 15];
  }
  return _;
}
var _ = 8,
  _ = class _ {
    static sm_ErrorReportingStore;
    static InstallErrorReportingStore(_) {
      this.sm_ErrorReportingStore = _;
    }
    static InitHeaderFromPacket(_) {
      return new _(void 0, _);
    }
    m_eMsg;
    m_bValid;
    m_netPacket;
    m_cubHeader;
    m_header;
    m_body;
    constructor(_, _, _, _, _, _) {
      if (_)
        (this.m_eMsg = _.m_eMsg),
          (this.m_bValid = _.m_bValid),
          this.m_bValid &&
            ((this.m_netPacket = _.m_netPacket),
            (this.m_cubHeader = _.m_cubHeader),
            (this.m_header = _.m_header),
            this.InitForType(_));
      else {
        if (((this.m_header = new _(null)), (this.m_bValid = !0), _))
          if (
            ((this.m_netPacket = _),
            this.m_netPacket.SeekGetHead(),
            (this.m_eMsg = this.m_netPacket.GetUint32()),
            this.m_eMsg & 2147483648)
          ) {
            (this.m_eMsg = this.m_eMsg & 2147483647),
              (this.m_cubHeader = this.m_netPacket.GetUint32());
            try {
              _.deserializeBinaryFromReader(
                this.m_header,
                new _.BinaryReader(
                  this.m_netPacket.GetPacket(),
                  this.m_netPacket.TellGet(),
                  this.m_cubHeader,
                ),
              ),
                this.m_netPacket.SeekGetCurrent(this.m_cubHeader),
                _ && this.InitForType(_);
            } catch (_) {
              console.error("Exception deserializing protobuf", _),
                (this.m_bValid = !1);
            }
          } else this.m_bValid = !1;
        else
          _ && (this.m_eMsg = _),
            _ && _
              ? (this.m_body = _.fromObject(_))
              : _ && (this.m_body = new _());
        _ && this.m_header.set_jobid_target(_.Hdr().jobid_target());
      }
    }
    InitForType(_) {
      (this.m_body = new _()),
        this.m_netPacket &&
          (this.m_netPacket.SeekGetHead(8 + this.m_cubHeader),
          this.ReadBodyFromBuffer(_, this.m_netPacket));
    }
    ReadBodyFromBuffer(_, _) {
      try {
        _.deserializeBinaryFromReader(
          this.m_body,
          new _.BinaryReader(
            _.GetPacket(),
            _.TellGet(),
            _.GetCountBytesRemaining(),
          ),
        );
      } catch (_) {
        this.m_bValid = !1;
        let _ = _.sm_ErrorReportingStore,
          _ = `Exception parsing protobuf message body of type ${this.m_eMsg}.  Definitions may be out of sync with server version.`;
        _ &&
          _.ReportError(new Error(_), {
            bIncludeMessageInIdentifier: !0,
          }),
          console.warn(_),
          console.log(_.stack || _);
      }
    }
    BIsValid() {
      return this.m_bValid;
    }
    Body() {
      return this.m_body;
    }
    SetBodyJSON(_) {
      (_.toObject = () => _), (this.m_body = _);
    }
    Hdr() {
      return this.m_header;
    }
    GetEMsg() {
      return this.m_eMsg;
    }
    SetEMsg(_) {
      this.m_eMsg = _;
    }
    GetEResult() {
      return this.Hdr().eresult();
    }
    BSuccess() {
      return this.Hdr().eresult() == 1;
    }
    GetErrorMessage() {
      return this.Hdr().error_message()
        ? this.Hdr().error_message()
        : `eresult ${this.Hdr().eresult()}`;
    }
    Serialize() {
      let _ = this.m_header.serializeBinary(),
        _ = this.m_body.serializeBinary(),
        _ = this.m_eMsg | 2147483648,
        _ = new Uint8Array(_ + _.length + _.length),
        _ = new _(_);
      return (
        _.PutUint32(_), _.PutUint32(_.length), _.PutBytes(_), _.PutBytes(_), _
      );
    }
    SerializeBody() {
      let _ = this.m_body.serializeBinary(),
        _ = new Uint8Array(_.length);
      return new _(_).PutBytes(_), _;
    }
    DEBUG_ToObject() {
      return {};
    }
    DEBUG_LogToConsole() {}
  },
  _ = class _ extends _ {
    constructor(_, _ = 0, _, _, _) {
      super(_, _, _, _, void 0, _);
    }
    static InitFromPacket(_, _) {
      return new _(_, 0, _);
    }
    static InitFromMsg(_, _) {
      return new _(_, void 0, void 0, _);
    }
    static Init(_, _) {
      return new _(_, _);
    }
    static InitFromObject(_, _) {
      return new _(_, void 0, void 0, void 0, _);
    }
    Body() {
      return super.Body();
    }
    SetBodyFields(_) {
      for (let _ in _)
        Array.isArray(_[_])
          ? this.Body()[`add_${_}`] &&
            _[_].forEach((_) => {
              this.Body()[`add_${_}`](_);
            })
          : this.Body()[`set_${_}`] && this.Body()[`set_${_}`](_[_]);
    }
  };
function _(_, _) {
  return _ instanceof _ ? _ : _.InitFromObject(_, _);
}
export { _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _ };

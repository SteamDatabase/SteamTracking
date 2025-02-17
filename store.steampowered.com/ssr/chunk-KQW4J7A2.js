const CLSTAMP = 9541513;

import { b as _t, c as mt } from "./chunk-BHJ27OKY.js";
import { h as ct } from "./chunk-E3Q3BISX.js";
import { a as Ht } from "./chunk-AN2GMBNX.js";
import { b as Et, d as X } from "./chunk-NZ23YTAN.js";
var $ = Et((exports, module) => {
  "use strict";
  var $jscomp = $jscomp || {};
  $jscomp.scope = {};
  $jscomp.findInternal = function (t, r, o) {
    t instanceof String && (t = String(t));
    for (var s = t.length, n = 0; n < s; n++) {
      var i = t[n];
      if (r.call(o, i, n, t)) return { i: n, v: i };
    }
    return { i: -1, v: void 0 };
  };
  $jscomp.ASSUME_ES5 = !1;
  $jscomp.ASSUME_NO_NATIVE_MAP = !1;
  $jscomp.ASSUME_NO_NATIVE_SET = !1;
  $jscomp.SIMPLE_FROUND_POLYFILL = !1;
  $jscomp.defineProperty =
    $jscomp.ASSUME_ES5 || typeof Object.defineProperties == "function"
      ? Object.defineProperty
      : function (t, r, o) {
          t != Array.prototype && t != Object.prototype && (t[r] = o.value);
        };
  $jscomp.getGlobal = function (t) {
    return typeof window < "u" && window === t
      ? t
      : typeof global < "u" && global != null
        ? global
        : t;
  };
  $jscomp.global = $jscomp.getGlobal(exports);
  $jscomp.polyfill = function (t, r, o, s) {
    if (r) {
      for (o = $jscomp.global, t = t.split("."), s = 0; s < t.length - 1; s++) {
        var n = t[s];
        n in o || (o[n] = {}), (o = o[n]);
      }
      (t = t[t.length - 1]),
        (s = o[t]),
        (r = r(s)),
        r != s &&
          r != null &&
          $jscomp.defineProperty(o, t, {
            configurable: !0,
            writable: !0,
            value: r,
          });
    }
  };
  $jscomp.polyfill(
    "Array.prototype.findIndex",
    function (t) {
      return (
        t ||
        function (r, o) {
          return $jscomp.findInternal(this, r, o).i;
        }
      );
    },
    "es6",
    "es3",
  );
  $jscomp.checkStringArgs = function (t, r, o) {
    if (t == null)
      throw new TypeError(
        "The 'this' value for String.prototype." +
          o +
          " must not be null or undefined",
      );
    if (r instanceof RegExp)
      throw new TypeError(
        "First argument to String.prototype." +
          o +
          " must not be a regular expression",
      );
    return t + "";
  };
  $jscomp.polyfill(
    "String.prototype.endsWith",
    function (t) {
      return (
        t ||
        function (r, o) {
          var s = $jscomp.checkStringArgs(this, r, "endsWith");
          (r += ""),
            o === void 0 && (o = s.length),
            (o = Math.max(0, Math.min(o | 0, s.length)));
          for (var n = r.length; 0 < n && 0 < o; )
            if (s[--o] != r[--n]) return !1;
          return 0 >= n;
        }
      );
    },
    "es6",
    "es3",
  );
  $jscomp.polyfill(
    "Array.prototype.find",
    function (t) {
      return (
        t ||
        function (r, o) {
          return $jscomp.findInternal(this, r, o).v;
        }
      );
    },
    "es6",
    "es3",
  );
  $jscomp.polyfill(
    "String.prototype.startsWith",
    function (t) {
      return (
        t ||
        function (r, o) {
          var s = $jscomp.checkStringArgs(this, r, "startsWith");
          r += "";
          var n = s.length,
            i = r.length;
          o = Math.max(0, Math.min(o | 0, s.length));
          for (var p = 0; p < i && o < n; ) if (s[o++] != r[p++]) return !1;
          return p >= i;
        }
      );
    },
    "es6",
    "es3",
  );
  $jscomp.polyfill(
    "String.prototype.repeat",
    function (t) {
      return (
        t ||
        function (r) {
          var o = $jscomp.checkStringArgs(this, null, "repeat");
          if (0 > r || 1342177279 < r)
            throw new RangeError("Invalid count value");
          r |= 0;
          for (var s = ""; r; ) r & 1 && (s += o), (r >>>= 1) && (o += o);
          return s;
        }
      );
    },
    "es6",
    "es3",
  );
  var COMPILED = !0,
    goog = goog || {};
  goog.global = exports || self;
  goog.exportPath_ = function (t, r, o) {
    (t = t.split(".")),
      (o = o || goog.global),
      t[0] in o || typeof o.execScript > "u" || o.execScript("var " + t[0]);
    for (var s; t.length && (s = t.shift()); )
      t.length || r === void 0
        ? (o = o[s] && o[s] !== Object.prototype[s] ? o[s] : (o[s] = {}))
        : (o[s] = r);
  };
  goog.define = function (t, r) {
    if (!COMPILED) {
      var o = goog.global.CLOSURE_UNCOMPILED_DEFINES,
        s = goog.global.CLOSURE_DEFINES;
      o && o.nodeType === void 0 && Object.prototype.hasOwnProperty.call(o, t)
        ? (r = o[t])
        : s &&
          s.nodeType === void 0 &&
          Object.prototype.hasOwnProperty.call(s, t) &&
          (r = s[t]);
    }
    return r;
  };
  goog.FEATURESET_YEAR = 2012;
  goog.DEBUG = !0;
  goog.LOCALE = "en";
  goog.TRUSTED_SITE = !0;
  goog.STRICT_MODE_COMPATIBLE = !1;
  goog.DISALLOW_TEST_ONLY_CODE = COMPILED && !goog.DEBUG;
  goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING = !1;
  goog.provide = function (t) {
    if (goog.isInModuleLoader_())
      throw Error("goog.provide cannot be used within a module.");
    if (!COMPILED && goog.isProvided_(t))
      throw Error('Namespace "' + t + '" already declared.');
    goog.constructNamespace_(t);
  };
  goog.constructNamespace_ = function (t, r) {
    if (!COMPILED) {
      delete goog.implicitNamespaces_[t];
      for (
        var o = t;
        (o = o.substring(0, o.lastIndexOf("."))) && !goog.getObjectByName(o);
      )
        goog.implicitNamespaces_[o] = !0;
    }
    goog.exportPath_(t, r);
  };
  goog.getScriptNonce = function (t) {
    return t && t != goog.global
      ? goog.getScriptNonce_(t.document)
      : (goog.cspNonce_ === null &&
          (goog.cspNonce_ = goog.getScriptNonce_(goog.global.document)),
        goog.cspNonce_);
  };
  goog.NONCE_PATTERN_ = /^[\w+/_-]+[=]{0,2}$/;
  goog.cspNonce_ = null;
  goog.getScriptNonce_ = function (t) {
    return (t = t.querySelector && t.querySelector("script[nonce]")) &&
      (t = t.nonce || t.getAttribute("nonce")) &&
      goog.NONCE_PATTERN_.test(t)
      ? t
      : "";
  };
  goog.VALID_MODULE_RE_ = /^[a-zA-Z_$][a-zA-Z0-9._$]*$/;
  goog.module = function (t) {
    if (typeof t != "string" || !t || t.search(goog.VALID_MODULE_RE_) == -1)
      throw Error("Invalid module identifier");
    if (!goog.isInGoogModuleLoader_())
      throw Error(
        "Module " +
          t +
          " has been loaded incorrectly. Note, modules cannot be loaded as normal scripts. They require some kind of pre-processing step. You're likely trying to load a module via a script tag or as a part of a concatenated bundle without rewriting the module. For more info see: https://github.com/google/closure-library/wiki/goog.module:-an-ES6-module-like-alternative-to-goog.provide.",
      );
    if (goog.moduleLoaderState_.moduleName)
      throw Error("goog.module may only be called once per module.");
    if (((goog.moduleLoaderState_.moduleName = t), !COMPILED)) {
      if (goog.isProvided_(t))
        throw Error('Namespace "' + t + '" already declared.');
      delete goog.implicitNamespaces_[t];
    }
  };
  goog.module.get = function (t) {
    return goog.module.getInternal_(t);
  };
  goog.module.getInternal_ = function (t) {
    if (!COMPILED) {
      if (t in goog.loadedModules_) return goog.loadedModules_[t].exports;
      if (!goog.implicitNamespaces_[t])
        return (t = goog.getObjectByName(t)), t ?? null;
    }
    return null;
  };
  goog.ModuleType = { ES6: "es6", GOOG: "goog" };
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
    var t = goog.global.$jscomp;
    return t
      ? typeof t.getCurrentModulePath != "function"
        ? !1
        : !!t.getCurrentModulePath()
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
  goog.declareModuleId = function (t) {
    if (!COMPILED) {
      if (!goog.isInEs6ModuleLoader_())
        throw Error(
          "goog.declareModuleId may only be called from within an ES6 module",
        );
      if (goog.moduleLoaderState_ && goog.moduleLoaderState_.moduleName)
        throw Error("goog.declareModuleId may only be called once per module.");
      if (t in goog.loadedModules_)
        throw Error('Module with namespace "' + t + '" already exists.');
    }
    if (goog.moduleLoaderState_) goog.moduleLoaderState_.moduleName = t;
    else {
      var r = goog.global.$jscomp;
      if (!r || typeof r.getCurrentModulePath != "function")
        throw Error(
          'Module with namespace "' + t + '" has been loaded incorrectly.',
        );
      (r = r.require(r.getCurrentModulePath())),
        (goog.loadedModules_[t] = {
          exports: r,
          type: goog.ModuleType.ES6,
          moduleId: t,
        });
    }
  };
  goog.setTestOnly = function (t) {
    if (goog.DISALLOW_TEST_ONLY_CODE)
      throw (
        ((t = t || ""),
        Error(
          "Importing test-only code into non-debug environment" +
            (t ? ": " + t : "."),
        ))
      );
  };
  goog.forwardDeclare = function (t) {};
  COMPILED ||
    ((goog.isProvided_ = function (t) {
      return (
        t in goog.loadedModules_ ||
        (!goog.implicitNamespaces_[t] && goog.getObjectByName(t) != null)
      );
    }),
    (goog.implicitNamespaces_ = { "goog.module": !0 }));
  goog.getObjectByName = function (t, r) {
    (t = t.split(".")), (r = r || goog.global);
    for (var o = 0; o < t.length; o++)
      if (((r = r[t[o]]), r == null)) return null;
    return r;
  };
  goog.globalize = function (t, r) {
    r = r || goog.global;
    for (var o in t) r[o] = t[o];
  };
  goog.addDependency = function (t, r, o, s) {
    !COMPILED &&
      goog.DEPENDENCIES_ENABLED &&
      goog.debugLoader_.addDependency(t, r, o, s);
  };
  goog.ENABLE_DEBUG_LOADER = !0;
  goog.logToConsole_ = function (t) {
    goog.global.console && goog.global.console.error(t);
  };
  goog.require = function (t) {
    if (!COMPILED) {
      if (
        (goog.ENABLE_DEBUG_LOADER && goog.debugLoader_.requested(t),
        goog.isProvided_(t))
      ) {
        if (goog.isInModuleLoader_()) return goog.module.getInternal_(t);
      } else if (goog.ENABLE_DEBUG_LOADER) {
        var r = goog.moduleLoaderState_;
        goog.moduleLoaderState_ = null;
        try {
          goog.debugLoader_.load_(t);
        } finally {
          goog.moduleLoaderState_ = r;
        }
      }
      return null;
    }
  };
  goog.requireType = function (t) {
    return {};
  };
  goog.basePath = "";
  goog.nullFunction = function () {};
  goog.abstractMethod = function () {
    throw Error("unimplemented abstract method");
  };
  goog.addSingletonGetter = function (t) {
    (t.instance_ = void 0),
      (t.getInstance = function () {
        return t.instance_
          ? t.instance_
          : (goog.DEBUG &&
              (goog.instantiatedSingletons_[
                goog.instantiatedSingletons_.length
              ] = t),
            (t.instance_ = new t()));
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
        var a = !eval(
          '"use strict";let x = 1; function f() { return typeof x; };f() == "number";',
        );
      } catch (t) {
        a = !1;
      }
      goog.hasBadLetScoping = a;
    }
    return goog.hasBadLetScoping;
  };
  goog.workaroundSafari10EvalBug = function (t) {
    return (
      "(function(){" +
      t +
      `
;})();
`
    );
  };
  goog.loadModule = function (t) {
    var r = goog.moduleLoaderState_;
    try {
      if (
        ((goog.moduleLoaderState_ = {
          moduleName: "",
          declareLegacyNamespace: !1,
          type: goog.ModuleType.GOOG,
        }),
        goog.isFunction(t))
      )
        var o = t.call(void 0, {});
      else if (typeof t == "string")
        goog.useSafari10Workaround() && (t = goog.workaroundSafari10EvalBug(t)),
          (o = goog.loadModuleFromSource_.call(void 0, t));
      else throw Error("Invalid module definition");
      var s = goog.moduleLoaderState_.moduleName;
      if (typeof s == "string" && s)
        goog.moduleLoaderState_.declareLegacyNamespace
          ? goog.constructNamespace_(s, o)
          : goog.SEAL_MODULE_EXPORTS &&
            Object.seal &&
            typeof o == "object" &&
            o != null &&
            Object.seal(o),
          (goog.loadedModules_[s] = {
            exports: o,
            type: goog.ModuleType.GOOG,
            moduleId: goog.moduleLoaderState_.moduleName,
          });
      else throw Error('Invalid module name "' + s + '"');
    } finally {
      goog.moduleLoaderState_ = r;
    }
  };
  goog.loadModuleFromSource_ = function (a) {
    return eval(a), {};
  };
  goog.normalizePath_ = function (t) {
    t = t.split("/");
    for (var r = 0; r < t.length; )
      t[r] == "."
        ? t.splice(r, 1)
        : r && t[r] == ".." && t[r - 1] && t[r - 1] != ".."
          ? t.splice(--r, 2)
          : r++;
    return t.join("/");
  };
  goog.loadFileSync_ = function (t) {
    if (goog.global.CLOSURE_LOAD_FILE_SYNC)
      return goog.global.CLOSURE_LOAD_FILE_SYNC(t);
    try {
      var r = new goog.global.XMLHttpRequest();
      return (
        r.open("get", t, !1),
        r.send(),
        r.status == 0 || r.status == 200 ? r.responseText : null
      );
    } catch {
      return null;
    }
  };
  goog.transpile_ = function (t, r, o) {
    var s = goog.global.$jscomp;
    s || (goog.global.$jscomp = s = {});
    var n = s.transpile;
    if (!n) {
      var i = goog.basePath + goog.TRANSPILER,
        p = goog.loadFileSync_(i);
      if (p) {
        if (
          (function () {
            (0, eval)(
              p +
                `
//# sourceURL=` +
                i,
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
          (s = goog.global.$jscomp),
          (n = s.transpile);
      }
    }
    return (
      n ||
        (n = s.transpile =
          function (_, m) {
            return (
              goog.logToConsole_(
                m + " requires transpilation but no transpiler was found.",
              ),
              _
            );
          }),
      n(t, r, o)
    );
  };
  goog.typeOf = function (t) {
    var r = typeof t;
    if (r == "object")
      if (t) {
        if (t instanceof Array) return "array";
        if (t instanceof Object) return r;
        var o = Object.prototype.toString.call(t);
        if (o == "[object Window]") return "object";
        if (
          o == "[object Array]" ||
          (typeof t.length == "number" &&
            typeof t.splice < "u" &&
            typeof t.propertyIsEnumerable < "u" &&
            !t.propertyIsEnumerable("splice"))
        )
          return "array";
        if (
          o == "[object Function]" ||
          (typeof t.call < "u" &&
            typeof t.propertyIsEnumerable < "u" &&
            !t.propertyIsEnumerable("call"))
        )
          return "function";
      } else return "null";
    else if (r == "function" && typeof t.call > "u") return "object";
    return r;
  };
  goog.isArray = function (t) {
    return goog.typeOf(t) == "array";
  };
  goog.isArrayLike = function (t) {
    var r = goog.typeOf(t);
    return r == "array" || (r == "object" && typeof t.length == "number");
  };
  goog.isDateLike = function (t) {
    return goog.isObject(t) && typeof t.getFullYear == "function";
  };
  goog.isFunction = function (t) {
    return goog.typeOf(t) == "function";
  };
  goog.isObject = function (t) {
    var r = typeof t;
    return (r == "object" && t != null) || r == "function";
  };
  goog.getUid = function (t) {
    return (
      (Object.prototype.hasOwnProperty.call(t, goog.UID_PROPERTY_) &&
        t[goog.UID_PROPERTY_]) ||
      (t[goog.UID_PROPERTY_] = ++goog.uidCounter_)
    );
  };
  goog.hasUid = function (t) {
    return !!t[goog.UID_PROPERTY_];
  };
  goog.removeUid = function (t) {
    t !== null &&
      "removeAttribute" in t &&
      t.removeAttribute(goog.UID_PROPERTY_);
    try {
      delete t[goog.UID_PROPERTY_];
    } catch {}
  };
  goog.UID_PROPERTY_ = "closure_uid_" + ((1e9 * Math.random()) >>> 0);
  goog.uidCounter_ = 0;
  goog.getHashCode = goog.getUid;
  goog.removeHashCode = goog.removeUid;
  goog.cloneObject = function (t) {
    var r = goog.typeOf(t);
    if (r == "object" || r == "array") {
      if (typeof t.clone == "function") return t.clone();
      r = r == "array" ? [] : {};
      for (var o in t) r[o] = goog.cloneObject(t[o]);
      return r;
    }
    return t;
  };
  goog.bindNative_ = function (t, r, o) {
    return t.call.apply(t.bind, arguments);
  };
  goog.bindJs_ = function (t, r, o) {
    if (!t) throw Error();
    if (2 < arguments.length) {
      var s = Array.prototype.slice.call(arguments, 2);
      return function () {
        var n = Array.prototype.slice.call(arguments);
        return Array.prototype.unshift.apply(n, s), t.apply(r, n);
      };
    }
    return function () {
      return t.apply(r, arguments);
    };
  };
  goog.bind = function (t, r, o) {
    return (
      Function.prototype.bind &&
      Function.prototype.bind.toString().indexOf("native code") != -1
        ? (goog.bind = goog.bindNative_)
        : (goog.bind = goog.bindJs_),
      goog.bind.apply(null, arguments)
    );
  };
  goog.partial = function (t, r) {
    var o = Array.prototype.slice.call(arguments, 1);
    return function () {
      var s = o.slice();
      return s.push.apply(s, arguments), t.apply(this, s);
    };
  };
  goog.mixin = function (t, r) {
    for (var o in r) t[o] = r[o];
  };
  goog.now =
    (goog.TRUSTED_SITE && Date.now) ||
    function () {
      return +new Date();
    };
  goog.globalEval = function (t) {
    if (goog.global.execScript) goog.global.execScript(t, "JavaScript");
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
      if (goog.evalWorksForGlobals_) goog.global.eval(t);
      else {
        var r = goog.global.document,
          o = r.createElement("script");
        (o.type = "text/javascript"),
          (o.defer = !1),
          o.appendChild(r.createTextNode(t)),
          r.head.appendChild(o),
          r.head.removeChild(o);
      }
    } else throw Error("goog.globalEval not available");
  };
  goog.evalWorksForGlobals_ = null;
  goog.getCssName = function (t, r) {
    if (String(t).charAt(0) == ".")
      throw Error(
        'className passed in goog.getCssName must not start with ".". You passed: ' +
          t,
      );
    var o = function (n) {
        return goog.cssNameMapping_[n] || n;
      },
      s = function (n) {
        n = n.split("-");
        for (var i = [], p = 0; p < n.length; p++) i.push(o(n[p]));
        return i.join("-");
      };
    return (
      (s = goog.cssNameMapping_
        ? goog.cssNameMappingStyle_ == "BY_WHOLE"
          ? o
          : s
        : function (n) {
            return n;
          }),
      (t = r ? t + "-" + s(r) : s(t)),
      goog.global.CLOSURE_CSS_NAME_MAP_FN
        ? goog.global.CLOSURE_CSS_NAME_MAP_FN(t)
        : t
    );
  };
  goog.setCssNameMapping = function (t, r) {
    (goog.cssNameMapping_ = t), (goog.cssNameMappingStyle_ = r);
  };
  !COMPILED &&
    goog.global.CLOSURE_CSS_NAME_MAPPING &&
    (goog.cssNameMapping_ = goog.global.CLOSURE_CSS_NAME_MAPPING);
  goog.getMsg = function (t, r, o) {
    return (
      o && o.html && (t = t.replace(/</g, "&lt;")),
      r &&
        (t = t.replace(/\{\$([^}]+)}/g, function (s, n) {
          return r != null && n in r ? r[n] : s;
        })),
      t
    );
  };
  goog.getMsgWithFallback = function (t, r) {
    return t;
  };
  goog.exportSymbol = function (t, r, o) {
    goog.exportPath_(t, r, o);
  };
  goog.exportProperty = function (t, r, o) {
    t[r] = o;
  };
  goog.inherits = function (t, r) {
    function o() {}
    (o.prototype = r.prototype),
      (t.superClass_ = r.prototype),
      (t.prototype = new o()),
      (t.prototype.constructor = t),
      (t.base = function (s, n, i) {
        for (
          var p = Array(arguments.length - 2), _ = 2;
          _ < arguments.length;
          _++
        )
          p[_ - 2] = arguments[_];
        return r.prototype[n].apply(s, p);
      });
  };
  goog.scope = function (t) {
    if (goog.isInModuleLoader_())
      throw Error("goog.scope is not supported within a module.");
    t.call(goog.global);
  };
  COMPILED || (goog.global.COMPILED = COMPILED);
  goog.defineClass = function (t, r) {
    var o = r.constructor,
      s = r.statics;
    return (
      (o && o != Object.prototype.constructor) ||
        (o = function () {
          throw Error(
            "cannot instantiate an interface (no constructor defined).",
          );
        }),
      (o = goog.defineClass.createSealingConstructor_(o, t)),
      t && goog.inherits(o, t),
      delete r.constructor,
      delete r.statics,
      goog.defineClass.applyProperties_(o.prototype, r),
      s != null &&
        (s instanceof Function
          ? s(o)
          : goog.defineClass.applyProperties_(o, s)),
      o
    );
  };
  goog.defineClass.SEAL_CLASS_INSTANCES = goog.DEBUG;
  goog.defineClass.createSealingConstructor_ = function (t, r) {
    if (!goog.defineClass.SEAL_CLASS_INSTANCES) return t;
    var o = !goog.defineClass.isUnsealable_(r),
      s = function () {
        var n = t.apply(this, arguments) || this;
        return (
          (n[goog.UID_PROPERTY_] = n[goog.UID_PROPERTY_]),
          this.constructor === s &&
            o &&
            Object.seal instanceof Function &&
            Object.seal(n),
          n
        );
      };
    return s;
  };
  goog.defineClass.isUnsealable_ = function (t) {
    return (
      t && t.prototype && t.prototype[goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_]
    );
  };
  goog.defineClass.OBJECT_PROTOTYPE_FIELDS_ =
    "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(
      " ",
    );
  goog.defineClass.applyProperties_ = function (t, r) {
    for (var o in r)
      Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
    for (var s = 0; s < goog.defineClass.OBJECT_PROTOTYPE_FIELDS_.length; s++)
      (o = goog.defineClass.OBJECT_PROTOTYPE_FIELDS_[s]),
        Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
  };
  goog.tagUnsealableClass = function (t) {
    !COMPILED &&
      goog.defineClass.SEAL_CLASS_INSTANCES &&
      (t.prototype[goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_] = !0);
  };
  goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_ = "goog_defineClass_legacy_unsealable";
  !COMPILED &&
    goog.DEPENDENCIES_ENABLED &&
    ((goog.inHtmlDocument_ = function () {
      var t = goog.global.document;
      return t != null && "write" in t;
    }),
    (goog.isDocumentLoading_ = function () {
      var t = goog.global.document;
      return t.attachEvent
        ? t.readyState != "complete"
        : t.readyState == "loading";
    }),
    (goog.findBasePath_ = function () {
      if (
        goog.global.CLOSURE_BASE_PATH != null &&
        typeof goog.global.CLOSURE_BASE_PATH == "string"
      )
        goog.basePath = goog.global.CLOSURE_BASE_PATH;
      else if (goog.inHtmlDocument_()) {
        var t = goog.global.document,
          r = t.currentScript;
        for (
          t = r ? [r] : t.getElementsByTagName("SCRIPT"), r = t.length - 1;
          0 <= r;
          --r
        ) {
          var o = t[r].src,
            s = o.lastIndexOf("?");
          if (((s = s == -1 ? o.length : s), o.substr(s - 7, 7) == "base.js")) {
            goog.basePath = o.substr(0, s - 7);
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
      function a(t, r) {
        e ? (d[t] = !0) : r() ? ((c = t), (d[t] = !1)) : (e = d[t] = !0);
      }
      function b(a) {
        try {
          return !!eval(a);
        } catch (t) {
          return !1;
        }
      }
      var c = "es3",
        d = { es3: !1 },
        e = !1,
        f =
          goog.global.navigator && goog.global.navigator.userAgent
            ? goog.global.navigator.userAgent
            : "";
      return (
        a("es5", function () {
          return b("[1,].length==1");
        }),
        a("es6", function () {
          return f.match(/Edge\/(\d+)(\.\d)*/i)
            ? !1
            : b(
                '(()=>{"use strict";class X{constructor(){if(new.target!=String)throw 1;this.x=42}}let q=Reflect.construct(X,[],String);if(q.x!=42||!(q instanceof String))throw 1;for(const a of[2,3]){if(a==2)continue;function f(z={a}){let a=0;return z.a}{function f(){return 0;}}return f()==3}})()',
              );
        }),
        a("es7", function () {
          return b("2 ** 2 == 4");
        }),
        a("es8", function () {
          return b("async () => 1, true");
        }),
        a("es9", function () {
          return b("({...rest} = {}), true");
        }),
        a("es_next", function () {
          return !1;
        }),
        { target: c, map: d }
      );
    }),
    (goog.Transpiler.prototype.needsTranspile = function (t, r) {
      if (goog.TRANSPILE == "always") return !0;
      if (goog.TRANSPILE == "never") return !1;
      if (!this.requiresTranspilation_) {
        var o = this.createRequiresTranspilation_();
        (this.requiresTranspilation_ = o.map),
          (this.transpilationTarget_ = this.transpilationTarget_ || o.target);
      }
      if (t in this.requiresTranspilation_)
        return this.requiresTranspilation_[t]
          ? !0
          : !(
              !goog.inHtmlDocument_() ||
              r != "es6" ||
              "noModule" in goog.global.document.createElement("script")
            );
      throw Error("Unknown language mode: " + t);
    }),
    (goog.Transpiler.prototype.transpile = function (t, r) {
      return goog.transpile_(t, r, this.transpilationTarget_);
    }),
    (goog.transpiler_ = new goog.Transpiler()),
    (goog.protectScriptTag_ = function (t) {
      return t.replace(/<\/(SCRIPT)/gi, "\\x3c/$1");
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
    (goog.DebugLoader_.prototype.bootstrap = function (t, r) {
      function o() {
        s && (goog.global.setTimeout(s, 0), (s = null));
      }
      var s = r;
      if (t.length) {
        r = [];
        for (var n = 0; n < t.length; n++) {
          var i = this.getPathFromDeps_(t[n]);
          if (!i) throw Error("Unregonized namespace: " + t[n]);
          r.push(this.dependencies_[i]);
        }
        i = goog.require;
        var p = 0;
        for (n = 0; n < t.length; n++)
          i(t[n]),
            r[n].onLoad(function () {
              ++p == t.length && o();
            });
      } else o();
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
    (goog.DebugLoader_.prototype.requested = function (t, r) {
      (t = this.getPathFromDeps_(t)) &&
        (r || this.areDepsLoaded_(this.dependencies_[t].requires)) &&
        (r = this.deferredCallbacks_[t]) &&
        (delete this.deferredCallbacks_[t], r());
    }),
    (goog.DebugLoader_.prototype.setDependencyFactory = function (t) {
      this.factory_ = t;
    }),
    (goog.DebugLoader_.prototype.load_ = function (t) {
      if (this.getPathFromDeps_(t)) {
        var r = this,
          o = [],
          s = function (n) {
            var i = r.getPathFromDeps_(n);
            if (!i) throw Error("Bad dependency path or symbol: " + n);
            if (!r.written_[i]) {
              for (
                r.written_[i] = !0, n = r.dependencies_[i], i = 0;
                i < n.requires.length;
                i++
              )
                goog.isProvided_(n.requires[i]) || s(n.requires[i]);
              o.push(n);
            }
          };
        s(t),
          (t = !!this.depsToLoad_.length),
          (this.depsToLoad_ = this.depsToLoad_.concat(o)),
          this.paused_ || t || this.loadDeps_();
      } else
        throw (
          ((t = "goog.require could not find: " + t),
          goog.logToConsole_(t),
          Error(t))
        );
    }),
    (goog.DebugLoader_.prototype.loadDeps_ = function () {
      for (var t = this, r = this.paused_; this.depsToLoad_.length && !r; )
        (function () {
          var o = !1,
            s = t.depsToLoad_.shift(),
            n = !1;
          t.loading_(s);
          var i = {
            pause: function () {
              if (o) throw Error("Cannot call pause after the call to load.");
              r = !0;
            },
            resume: function () {
              o ? t.resume_() : (r = !1);
            },
            loaded: function () {
              if (n) throw Error("Double call to loaded.");
              (n = !0), t.loaded_(s);
            },
            pending: function () {
              for (var p = [], _ = 0; _ < t.loadingDeps_.length; _++)
                p.push(t.loadingDeps_[_]);
              return p;
            },
            setModuleState: function (p) {
              goog.moduleLoaderState_ = {
                type: p,
                moduleName: "",
                declareLegacyNamespace: !1,
              };
            },
            registerEs6ModuleExports: function (p, _, m) {
              m &&
                (goog.loadedModules_[m] = {
                  exports: _,
                  type: goog.ModuleType.ES6,
                  moduleId: m || "",
                });
            },
            registerGoogModuleExports: function (p, _) {
              goog.loadedModules_[p] = {
                exports: _,
                type: goog.ModuleType.GOOG,
                moduleId: p,
              };
            },
            clearModuleState: function () {
              goog.moduleLoaderState_ = null;
            },
            defer: function (p) {
              if (o)
                throw Error(
                  "Cannot register with defer after the call to load.",
                );
              t.defer_(s, p);
            },
            areDepsLoaded: function () {
              return t.areDepsLoaded_(s.requires);
            },
          };
          try {
            s.load(i);
          } finally {
            o = !0;
          }
        })();
      r && this.pause_();
    }),
    (goog.DebugLoader_.prototype.pause_ = function () {
      this.paused_ = !0;
    }),
    (goog.DebugLoader_.prototype.resume_ = function () {
      this.paused_ && ((this.paused_ = !1), this.loadDeps_());
    }),
    (goog.DebugLoader_.prototype.loading_ = function (t) {
      this.loadingDeps_.push(t);
    }),
    (goog.DebugLoader_.prototype.loaded_ = function (t) {
      for (var r = 0; r < this.loadingDeps_.length; r++)
        if (this.loadingDeps_[r] == t) {
          this.loadingDeps_.splice(r, 1);
          break;
        }
      for (r = 0; r < this.deferredQueue_.length; r++)
        if (this.deferredQueue_[r] == t.path) {
          this.deferredQueue_.splice(r, 1);
          break;
        }
      if (
        this.loadingDeps_.length == this.deferredQueue_.length &&
        !this.depsToLoad_.length
      )
        for (; this.deferredQueue_.length; )
          this.requested(this.deferredQueue_.shift(), !0);
      t.loaded();
    }),
    (goog.DebugLoader_.prototype.areDepsLoaded_ = function (t) {
      for (var r = 0; r < t.length; r++) {
        var o = this.getPathFromDeps_(t[r]);
        if (!o || !(o in this.deferredCallbacks_ || goog.isProvided_(t[r])))
          return !1;
      }
      return !0;
    }),
    (goog.DebugLoader_.prototype.getPathFromDeps_ = function (t) {
      return t in this.idToPath_
        ? this.idToPath_[t]
        : t in this.dependencies_
          ? t
          : null;
    }),
    (goog.DebugLoader_.prototype.defer_ = function (t, r) {
      (this.deferredCallbacks_[t.path] = r), this.deferredQueue_.push(t.path);
    }),
    (goog.LoadController = function () {}),
    (goog.LoadController.prototype.pause = function () {}),
    (goog.LoadController.prototype.resume = function () {}),
    (goog.LoadController.prototype.loaded = function () {}),
    (goog.LoadController.prototype.pending = function () {}),
    (goog.LoadController.prototype.registerEs6ModuleExports = function (
      t,
      r,
      o,
    ) {}),
    (goog.LoadController.prototype.setModuleState = function (t) {}),
    (goog.LoadController.prototype.clearModuleState = function () {}),
    (goog.LoadController.prototype.defer = function (t) {}),
    (goog.LoadController.prototype.areDepsLoaded = function () {}),
    (goog.Dependency = function (t, r, o, s, n) {
      (this.path = t),
        (this.relativePath = r),
        (this.provides = o),
        (this.requires = s),
        (this.loadFlags = n),
        (this.loaded_ = !1),
        (this.loadCallbacks_ = []);
    }),
    (goog.Dependency.prototype.getPathName = function () {
      var t = this.path,
        r = t.indexOf("://");
      return (
        0 <= r &&
          ((t = t.substring(r + 3)),
          (r = t.indexOf("/")),
          0 <= r && (t = t.substring(r + 1))),
        t
      );
    }),
    (goog.Dependency.prototype.onLoad = function (t) {
      this.loaded_ ? t() : this.loadCallbacks_.push(t);
    }),
    (goog.Dependency.prototype.loaded = function () {
      this.loaded_ = !0;
      var t = this.loadCallbacks_;
      this.loadCallbacks_ = [];
      for (var r = 0; r < t.length; r++) t[r]();
    }),
    (goog.Dependency.defer_ = !1),
    (goog.Dependency.callbackMap_ = {}),
    (goog.Dependency.registerCallback_ = function (t) {
      var r = Math.random().toString(32);
      return (goog.Dependency.callbackMap_[r] = t), r;
    }),
    (goog.Dependency.unregisterCallback_ = function (t) {
      delete goog.Dependency.callbackMap_[t];
    }),
    (goog.Dependency.callback_ = function (t, r) {
      if (t in goog.Dependency.callbackMap_) {
        for (
          var o = goog.Dependency.callbackMap_[t], s = [], n = 1;
          n < arguments.length;
          n++
        )
          s.push(arguments[n]);
        o.apply(void 0, s);
      } else
        throw Error(
          "Callback key " +
            t +
            " does not exist (was base.js loaded more than once?).",
        );
    }),
    (goog.Dependency.prototype.load = function (t) {
      if (goog.global.CLOSURE_IMPORT_SCRIPT)
        goog.global.CLOSURE_IMPORT_SCRIPT(this.path) ? t.loaded() : t.pause();
      else if (goog.inHtmlDocument_()) {
        var r = goog.global.document;
        if (
          r.readyState == "complete" &&
          !goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING
        ) {
          if (/\bdeps.js$/.test(this.path)) {
            t.loaded();
            return;
          }
          throw Error('Cannot write "' + this.path + '" after document load');
        }
        if (
          !goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING &&
          goog.isDocumentLoading_()
        ) {
          var o = goog.Dependency.registerCallback_(function (i) {
              (goog.DebugLoader_.IS_OLD_IE_ && i.readyState != "complete") ||
                (goog.Dependency.unregisterCallback_(o), t.loaded());
            }),
            s =
              !goog.DebugLoader_.IS_OLD_IE_ && goog.getScriptNonce()
                ? ' nonce="' + goog.getScriptNonce() + '"'
                : "";
          (s =
            '<script src="' +
            this.path +
            '" ' +
            (goog.DebugLoader_.IS_OLD_IE_ ? "onreadystatechange" : "onload") +
            `="goog.Dependency.callback_('` +
            o +
            `', this)" type="text/javascript" ` +
            (goog.Dependency.defer_ ? "defer" : "") +
            s +
            "></script>"),
            r.write(
              goog.TRUSTED_TYPES_POLICY_
                ? goog.TRUSTED_TYPES_POLICY_.createHTML(s)
                : s,
            );
        } else {
          var n = r.createElement("script");
          (n.defer = goog.Dependency.defer_),
            (n.async = !1),
            (n.type = "text/javascript"),
            (s = goog.getScriptNonce()) && n.setAttribute("nonce", s),
            goog.DebugLoader_.IS_OLD_IE_
              ? (t.pause(),
                (n.onreadystatechange = function () {
                  (n.readyState == "loaded" || n.readyState == "complete") &&
                    (t.loaded(), t.resume());
                }))
              : (n.onload = function () {
                  (n.onload = null), t.loaded();
                }),
            (n.src = goog.TRUSTED_TYPES_POLICY_
              ? goog.TRUSTED_TYPES_POLICY_.createScriptURL(this.path)
              : this.path),
            r.head.appendChild(n);
        }
      } else
        goog.logToConsole_(
          "Cannot use default debug loader outside of HTML documents.",
        ),
          this.relativePath == "deps.js"
            ? (goog.logToConsole_(
                "Consider setting CLOSURE_IMPORT_SCRIPT before loading base.js, or setting CLOSURE_NO_DEPS to true.",
              ),
              t.loaded())
            : t.pause();
    }),
    (goog.Es6ModuleDependency = function (t, r, o, s, n) {
      goog.Dependency.call(this, t, r, o, s, n);
    }),
    goog.inherits(goog.Es6ModuleDependency, goog.Dependency),
    (goog.Es6ModuleDependency.prototype.load = function (t) {
      function r(A, M) {
        (A = M
          ? '<script type="module" crossorigin>' + M + "</script>"
          : '<script type="module" crossorigin src="' + A + '"></script>'),
          s.write(
            goog.TRUSTED_TYPES_POLICY_
              ? goog.TRUSTED_TYPES_POLICY_.createHTML(A)
              : A,
          );
      }
      function o(A, M) {
        var v = s.createElement("script");
        (v.defer = !0),
          (v.async = !1),
          (v.type = "module"),
          v.setAttribute("crossorigin", !0);
        var w = goog.getScriptNonce();
        w && v.setAttribute("nonce", w),
          M
            ? (v.textContent = goog.TRUSTED_TYPES_POLICY_
                ? goog.TRUSTED_TYPES_POLICY_.createScript(M)
                : M)
            : (v.src = goog.TRUSTED_TYPES_POLICY_
                ? goog.TRUSTED_TYPES_POLICY_.createScriptURL(A)
                : A),
          s.head.appendChild(v);
      }
      if (goog.global.CLOSURE_IMPORT_SCRIPT)
        goog.global.CLOSURE_IMPORT_SCRIPT(this.path) ? t.loaded() : t.pause();
      else if (goog.inHtmlDocument_()) {
        var s = goog.global.document,
          n = this;
        if (goog.isDocumentLoading_()) {
          var i = r;
          goog.Dependency.defer_ = !0;
        } else i = o;
        var p = goog.Dependency.registerCallback_(function () {
          goog.Dependency.unregisterCallback_(p),
            t.setModuleState(goog.ModuleType.ES6);
        });
        i(void 0, 'goog.Dependency.callback_("' + p + '")'),
          i(this.path, void 0);
        var _ = goog.Dependency.registerCallback_(function (A) {
          goog.Dependency.unregisterCallback_(_),
            t.registerEs6ModuleExports(
              n.path,
              A,
              goog.moduleLoaderState_.moduleName,
            );
        });
        i(
          void 0,
          'import * as m from "' +
            this.path +
            '"; goog.Dependency.callback_("' +
            _ +
            '", m)',
        );
        var m = goog.Dependency.registerCallback_(function () {
          goog.Dependency.unregisterCallback_(m),
            t.clearModuleState(),
            t.loaded();
        });
        i(void 0, 'goog.Dependency.callback_("' + m + '")');
      } else
        goog.logToConsole_(
          "Cannot use default debug loader outside of HTML documents.",
        ),
          t.pause();
    }),
    (goog.TransformedDependency = function (t, r, o, s, n) {
      goog.Dependency.call(this, t, r, o, s, n),
        (this.contents_ = null),
        (this.lazyFetch_ =
          !goog.inHtmlDocument_() ||
          !("noModule" in goog.global.document.createElement("script")));
    }),
    goog.inherits(goog.TransformedDependency, goog.Dependency),
    (goog.TransformedDependency.prototype.load = function (t) {
      function r() {
        (n.contents_ = goog.loadFileSync_(n.path)),
          n.contents_ &&
            ((n.contents_ = n.transform(n.contents_)),
            n.contents_ &&
              (n.contents_ +=
                `
//# sourceURL=` + n.path));
      }
      function o() {
        if ((n.lazyFetch_ && r(), n.contents_)) {
          i && t.setModuleState(goog.ModuleType.ES6);
          try {
            var M = n.contents_;
            if (((n.contents_ = null), goog.globalEval(M), i))
              var v = goog.moduleLoaderState_.moduleName;
          } finally {
            i && t.clearModuleState();
          }
          i &&
            goog.global.$jscomp.require.ensure([n.getPathName()], function () {
              t.registerEs6ModuleExports(
                n.path,
                goog.global.$jscomp.require(n.getPathName()),
                v,
              );
            }),
            t.loaded();
        }
      }
      function s() {
        var M = goog.global.document,
          v = goog.Dependency.registerCallback_(function () {
            goog.Dependency.unregisterCallback_(v), o();
          }),
          w =
            '<script type="text/javascript">' +
            goog.protectScriptTag_('goog.Dependency.callback_("' + v + '");') +
            "</script>";
        M.write(
          goog.TRUSTED_TYPES_POLICY_
            ? goog.TRUSTED_TYPES_POLICY_.createHTML(w)
            : w,
        );
      }
      var n = this;
      if (goog.global.CLOSURE_IMPORT_SCRIPT)
        r(),
          this.contents_ &&
          goog.global.CLOSURE_IMPORT_SCRIPT("", this.contents_)
            ? ((this.contents_ = null), t.loaded())
            : t.pause();
      else {
        var i = this.loadFlags.module == goog.ModuleType.ES6;
        this.lazyFetch_ || r();
        var p = 1 < t.pending().length,
          _ = p && goog.DebugLoader_.IS_OLD_IE_;
        if (
          ((p = goog.Dependency.defer_ && (p || goog.isDocumentLoading_())),
          _ || p)
        )
          t.defer(function () {
            o();
          });
        else {
          var m = goog.global.document;
          if (
            ((_ = goog.inHtmlDocument_() && "ActiveXObject" in goog.global),
            i && goog.inHtmlDocument_() && goog.isDocumentLoading_() && !_)
          ) {
            (goog.Dependency.defer_ = !0), t.pause();
            var A = m.onreadystatechange;
            m.onreadystatechange = function () {
              m.readyState == "interactive" &&
                ((m.onreadystatechange = A), o(), t.resume()),
                goog.isFunction(A) && A.apply(void 0, arguments);
            };
          } else
            !goog.DebugLoader_.IS_OLD_IE_ &&
            goog.inHtmlDocument_() &&
            goog.isDocumentLoading_()
              ? s()
              : o();
        }
      }
    }),
    (goog.TransformedDependency.prototype.transform = function (t) {}),
    (goog.TranspiledDependency = function (t, r, o, s, n, i) {
      goog.TransformedDependency.call(this, t, r, o, s, n),
        (this.transpiler = i);
    }),
    goog.inherits(goog.TranspiledDependency, goog.TransformedDependency),
    (goog.TranspiledDependency.prototype.transform = function (t) {
      return this.transpiler.transpile(t, this.getPathName());
    }),
    (goog.PreTranspiledEs6ModuleDependency = function (t, r, o, s, n) {
      goog.TransformedDependency.call(this, t, r, o, s, n);
    }),
    goog.inherits(
      goog.PreTranspiledEs6ModuleDependency,
      goog.TransformedDependency,
    ),
    (goog.PreTranspiledEs6ModuleDependency.prototype.transform = function (t) {
      return t;
    }),
    (goog.GoogModuleDependency = function (t, r, o, s, n, i, p) {
      goog.TransformedDependency.call(this, t, r, o, s, n),
        (this.needsTranspile_ = i),
        (this.transpiler_ = p);
    }),
    goog.inherits(goog.GoogModuleDependency, goog.TransformedDependency),
    (goog.GoogModuleDependency.prototype.transform = function (t) {
      return (
        this.needsTranspile_ &&
          (t = this.transpiler_.transpile(t, this.getPathName())),
        goog.LOAD_MODULE_USING_EVAL && goog.global.JSON !== void 0
          ? "goog.loadModule(" +
            goog.global.JSON.stringify(
              t +
                `
//# sourceURL=` +
                this.path +
                `
`,
            ) +
            ");"
          : 'goog.loadModule(function(exports) {"use strict";' +
            t +
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
    (goog.DebugLoader_.prototype.addDependency = function (t, r, o, s) {
      (r = r || []), (t = t.replace(/\\/g, "/"));
      var n = goog.normalizePath_(goog.basePath + t);
      for (
        (s && typeof s != "boolean") ||
          (s = s ? { module: goog.ModuleType.GOOG } : {}),
          o = this.factory_.createDependency(
            n,
            t,
            r,
            o,
            s,
            goog.transpiler_.needsTranspile(s.lang || "es3", s.module),
          ),
          this.dependencies_[n] = o,
          o = 0;
        o < r.length;
        o++
      )
        this.idToPath_[r[o]] = n;
      this.idToPath_[t] = n;
    }),
    (goog.DependencyFactory = function (t) {
      this.transpiler = t;
    }),
    (goog.DependencyFactory.prototype.createDependency = function (
      t,
      r,
      o,
      s,
      n,
      i,
    ) {
      return n.module == goog.ModuleType.GOOG
        ? new goog.GoogModuleDependency(t, r, o, s, n, i, this.transpiler)
        : i
          ? new goog.TranspiledDependency(t, r, o, s, n, this.transpiler)
          : n.module == goog.ModuleType.ES6
            ? goog.TRANSPILE == "never" && goog.ASSUME_ES_MODULES_TRANSPILED
              ? new goog.PreTranspiledEs6ModuleDependency(t, r, o, s, n)
              : new goog.Es6ModuleDependency(t, r, o, s, n)
            : new goog.Dependency(t, r, o, s, n);
    }),
    (goog.debugLoader_ = new goog.DebugLoader_()),
    (goog.loadClosureDeps = function () {
      goog.debugLoader_.loadClosureDeps();
    }),
    (goog.setDependencyFactory = function (t) {
      goog.debugLoader_.setDependencyFactory(t);
    }),
    goog.global.CLOSURE_NO_DEPS || goog.debugLoader_.loadClosureDeps(),
    (goog.bootstrap = function (t, r) {
      goog.debugLoader_.bootstrap(t, r);
    }));
  goog.TRUSTED_TYPES_POLICY_NAME = "";
  goog.identity_ = function (t) {
    return t;
  };
  goog.createTrustedTypesPolicy = function (t) {
    var r = null,
      o = goog.global.trustedTypes || goog.global.TrustedTypes;
    if (!o || !o.createPolicy) return r;
    try {
      r = o.createPolicy(t, {
        createHTML: goog.identity_,
        createScript: goog.identity_,
        createScriptURL: goog.identity_,
        createURL: goog.identity_,
      });
    } catch (s) {
      goog.logToConsole_(s.message);
    }
    return r;
  };
  goog.TRUSTED_TYPES_POLICY_ = goog.TRUSTED_TYPES_POLICY_NAME
    ? goog.createTrustedTypesPolicy(goog.TRUSTED_TYPES_POLICY_NAME + "#base")
    : null;
  goog.object = {};
  goog.object.is = function (t, r) {
    return t === r ? t !== 0 || 1 / t === 1 / r : t !== t && r !== r;
  };
  goog.object.forEach = function (t, r, o) {
    for (var s in t) r.call(o, t[s], s, t);
  };
  goog.object.filter = function (t, r, o) {
    var s = {},
      n;
    for (n in t) r.call(o, t[n], n, t) && (s[n] = t[n]);
    return s;
  };
  goog.object.map = function (t, r, o) {
    var s = {},
      n;
    for (n in t) s[n] = r.call(o, t[n], n, t);
    return s;
  };
  goog.object.some = function (t, r, o) {
    for (var s in t) if (r.call(o, t[s], s, t)) return !0;
    return !1;
  };
  goog.object.every = function (t, r, o) {
    for (var s in t) if (!r.call(o, t[s], s, t)) return !1;
    return !0;
  };
  goog.object.getCount = function (t) {
    var r = 0,
      o;
    for (o in t) r++;
    return r;
  };
  goog.object.getAnyKey = function (t) {
    for (var r in t) return r;
  };
  goog.object.getAnyValue = function (t) {
    for (var r in t) return t[r];
  };
  goog.object.contains = function (t, r) {
    return goog.object.containsValue(t, r);
  };
  goog.object.getValues = function (t) {
    var r = [],
      o = 0,
      s;
    for (s in t) r[o++] = t[s];
    return r;
  };
  goog.object.getKeys = function (t) {
    var r = [],
      o = 0,
      s;
    for (s in t) r[o++] = s;
    return r;
  };
  goog.object.getValueByKeys = function (t, r) {
    var o = goog.isArrayLike(r),
      s = o ? r : arguments;
    for (o = o ? 0 : 1; o < s.length; o++) {
      if (t == null) return;
      t = t[s[o]];
    }
    return t;
  };
  goog.object.containsKey = function (t, r) {
    return t !== null && r in t;
  };
  goog.object.containsValue = function (t, r) {
    for (var o in t) if (t[o] == r) return !0;
    return !1;
  };
  goog.object.findKey = function (t, r, o) {
    for (var s in t) if (r.call(o, t[s], s, t)) return s;
  };
  goog.object.findValue = function (t, r, o) {
    return (r = goog.object.findKey(t, r, o)) && t[r];
  };
  goog.object.isEmpty = function (t) {
    for (var r in t) return !1;
    return !0;
  };
  goog.object.clear = function (t) {
    for (var r in t) delete t[r];
  };
  goog.object.remove = function (t, r) {
    var o;
    return (o = r in t) && delete t[r], o;
  };
  goog.object.add = function (t, r, o) {
    if (t !== null && r in t)
      throw Error('The object already contains the key "' + r + '"');
    goog.object.set(t, r, o);
  };
  goog.object.get = function (t, r, o) {
    return t !== null && r in t ? t[r] : o;
  };
  goog.object.set = function (t, r, o) {
    t[r] = o;
  };
  goog.object.setIfUndefined = function (t, r, o) {
    return r in t ? t[r] : (t[r] = o);
  };
  goog.object.setWithReturnValueIfNotSet = function (t, r, o) {
    return r in t ? t[r] : ((o = o()), (t[r] = o));
  };
  goog.object.equals = function (t, r) {
    for (var o in t) if (!(o in r) || t[o] !== r[o]) return !1;
    for (var s in r) if (!(s in t)) return !1;
    return !0;
  };
  goog.object.clone = function (t) {
    var r = {},
      o;
    for (o in t) r[o] = t[o];
    return r;
  };
  goog.object.unsafeClone = function (t) {
    var r = goog.typeOf(t);
    if (r == "object" || r == "array") {
      if (goog.isFunction(t.clone)) return t.clone();
      r = r == "array" ? [] : {};
      for (var o in t) r[o] = goog.object.unsafeClone(t[o]);
      return r;
    }
    return t;
  };
  goog.object.transpose = function (t) {
    var r = {},
      o;
    for (o in t) r[t[o]] = o;
    return r;
  };
  goog.object.PROTOTYPE_FIELDS_ =
    "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(
      " ",
    );
  goog.object.extend = function (t, r) {
    for (var o, s, n = 1; n < arguments.length; n++) {
      s = arguments[n];
      for (o in s) t[o] = s[o];
      for (var i = 0; i < goog.object.PROTOTYPE_FIELDS_.length; i++)
        (o = goog.object.PROTOTYPE_FIELDS_[i]),
          Object.prototype.hasOwnProperty.call(s, o) && (t[o] = s[o]);
    }
  };
  goog.object.create = function (t) {
    var r = arguments.length;
    if (r == 1 && Array.isArray(arguments[0]))
      return goog.object.create.apply(null, arguments[0]);
    if (r % 2) throw Error("Uneven number of arguments");
    for (var o = {}, s = 0; s < r; s += 2) o[arguments[s]] = arguments[s + 1];
    return o;
  };
  goog.object.createSet = function (t) {
    var r = arguments.length;
    if (r == 1 && Array.isArray(arguments[0]))
      return goog.object.createSet.apply(null, arguments[0]);
    for (var o = {}, s = 0; s < r; s++) o[arguments[s]] = !0;
    return o;
  };
  goog.object.createImmutableView = function (t) {
    var r = t;
    return (
      Object.isFrozen &&
        !Object.isFrozen(t) &&
        ((r = Object.create(t)), Object.freeze(r)),
      r
    );
  };
  goog.object.isImmutableView = function (t) {
    return !!Object.isFrozen && Object.isFrozen(t);
  };
  goog.object.getAllPropertyNames = function (t, r, o) {
    if (!t) return [];
    if (!Object.getOwnPropertyNames || !Object.getPrototypeOf)
      return goog.object.getKeys(t);
    for (
      var s = {};
      t && (t !== Object.prototype || r) && (t !== Function.prototype || o);
    ) {
      for (var n = Object.getOwnPropertyNames(t), i = 0; i < n.length; i++)
        s[n[i]] = !0;
      t = Object.getPrototypeOf(t);
    }
    return goog.object.getKeys(s);
  };
  goog.object.getSuperClass = function (t) {
    return (t = Object.getPrototypeOf(t.prototype)) && t.constructor;
  };
  var jspb = { asserts: {} };
  jspb.asserts.doAssertFailure = function (t, r, o, s) {
    var n = "Assertion failed";
    if (o) {
      n += ": " + o;
      var i = s;
    } else t && ((n += ": " + t), (i = r));
    throw Error("" + n, i || []);
  };
  jspb.asserts.assert = function (t, r, o) {
    for (var s = [], n = 2; n < arguments.length; ++n) s[n - 2] = arguments[n];
    return t || jspb.asserts.doAssertFailure("", null, r, s), t;
  };
  jspb.asserts.assertString = function (t, r, o) {
    for (var s = [], n = 2; n < arguments.length; ++n) s[n - 2] = arguments[n];
    return (
      typeof t != "string" &&
        jspb.asserts.doAssertFailure(
          "Expected string but got %s: %s.",
          [goog.typeOf(t), t],
          r,
          s,
        ),
      t
    );
  };
  jspb.asserts.assertArray = function (t, r, o) {
    for (var s = [], n = 2; n < arguments.length; ++n) s[n - 2] = arguments[n];
    return (
      Array.isArray(t) ||
        jspb.asserts.doAssertFailure(
          "Expected array but got %s: %s.",
          [goog.typeOf(t), t],
          r,
          s,
        ),
      t
    );
  };
  jspb.asserts.fail = function (t, r) {
    for (var o = [], s = 1; s < arguments.length; ++s) o[s - 1] = arguments[s];
    throw Error("Failure" + (t ? ": " + t : ""), o);
  };
  jspb.asserts.assertInstanceof = function (t, r, o, s) {
    for (var n = [], i = 3; i < arguments.length; ++i) n[i - 3] = arguments[i];
    return (
      t instanceof r ||
        jspb.asserts.doAssertFailure(
          "Expected instanceof %s but got %s.",
          [jspb.asserts.getType(r), jspb.asserts.getType(t)],
          o,
          n,
        ),
      t
    );
  };
  jspb.asserts.getType = function (t) {
    return t instanceof Function
      ? t.displayName || t.name || "unknown type name"
      : t instanceof Object
        ? t.constructor.displayName ||
          t.constructor.name ||
          Object.prototype.toString.call(t)
        : t === null
          ? "null"
          : typeof t;
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
  jspb.BinaryConstants.FieldTypeToWireType = function (t) {
    var r = jspb.BinaryConstants.FieldType,
      o = jspb.BinaryConstants.WireType;
    switch (t) {
      case r.INT32:
      case r.INT64:
      case r.UINT32:
      case r.UINT64:
      case r.SINT32:
      case r.SINT64:
      case r.BOOL:
      case r.ENUM:
      case r.VHASH64:
        return o.VARINT;
      case r.DOUBLE:
      case r.FIXED64:
      case r.SFIXED64:
      case r.FHASH64:
        return o.FIXED64;
      case r.STRING:
      case r.MESSAGE:
      case r.BYTES:
        return o.DELIMITED;
      case r.FLOAT:
      case r.FIXED32:
      case r.SFIXED32:
        return o.FIXED32;
      default:
        return o.INVALID;
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
  goog.debug.Error = function (t) {
    if (Error.captureStackTrace)
      Error.captureStackTrace(this, goog.debug.Error);
    else {
      var r = Error().stack;
      r && (this.stack = r);
    }
    t && (this.message = String(t)), (this.reportErrorToServer = !0);
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
  goog.asserts.AssertionError = function (t, r) {
    goog.debug.Error.call(this, goog.asserts.subs_(t, r)),
      (this.messagePattern = t);
  };
  goog.inherits(goog.asserts.AssertionError, goog.debug.Error);
  goog.asserts.AssertionError.prototype.name = "AssertionError";
  goog.asserts.DEFAULT_ERROR_HANDLER = function (t) {
    throw t;
  };
  goog.asserts.errorHandler_ = goog.asserts.DEFAULT_ERROR_HANDLER;
  goog.asserts.subs_ = function (t, r) {
    t = t.split("%s");
    for (var o = "", s = t.length - 1, n = 0; n < s; n++)
      o += t[n] + (n < r.length ? r[n] : "%s");
    return o + t[s];
  };
  goog.asserts.doAssertFailure_ = function (t, r, o, s) {
    var n = "Assertion failed";
    if (o) {
      n += ": " + o;
      var i = s;
    } else t && ((n += ": " + t), (i = r));
    (t = new goog.asserts.AssertionError("" + n, i || [])),
      goog.asserts.errorHandler_(t);
  };
  goog.asserts.setErrorHandler = function (t) {
    goog.asserts.ENABLE_ASSERTS && (goog.asserts.errorHandler_ = t);
  };
  goog.asserts.assert = function (t, r, o) {
    return (
      goog.asserts.ENABLE_ASSERTS &&
        !t &&
        goog.asserts.doAssertFailure_(
          "",
          null,
          r,
          Array.prototype.slice.call(arguments, 2),
        ),
      t
    );
  };
  goog.asserts.assertExists = function (t, r, o) {
    return (
      goog.asserts.ENABLE_ASSERTS &&
        t == null &&
        goog.asserts.doAssertFailure_(
          "Expected to exist: %s.",
          [t],
          r,
          Array.prototype.slice.call(arguments, 2),
        ),
      t
    );
  };
  goog.asserts.fail = function (t, r) {
    goog.asserts.ENABLE_ASSERTS &&
      goog.asserts.errorHandler_(
        new goog.asserts.AssertionError(
          "Failure" + (t ? ": " + t : ""),
          Array.prototype.slice.call(arguments, 1),
        ),
      );
  };
  goog.asserts.assertNumber = function (t, r, o) {
    return (
      goog.asserts.ENABLE_ASSERTS &&
        typeof t != "number" &&
        goog.asserts.doAssertFailure_(
          "Expected number but got %s: %s.",
          [goog.typeOf(t), t],
          r,
          Array.prototype.slice.call(arguments, 2),
        ),
      t
    );
  };
  goog.asserts.assertString = function (t, r, o) {
    return (
      goog.asserts.ENABLE_ASSERTS &&
        typeof t != "string" &&
        goog.asserts.doAssertFailure_(
          "Expected string but got %s: %s.",
          [goog.typeOf(t), t],
          r,
          Array.prototype.slice.call(arguments, 2),
        ),
      t
    );
  };
  goog.asserts.assertFunction = function (t, r, o) {
    return (
      goog.asserts.ENABLE_ASSERTS &&
        !goog.isFunction(t) &&
        goog.asserts.doAssertFailure_(
          "Expected function but got %s: %s.",
          [goog.typeOf(t), t],
          r,
          Array.prototype.slice.call(arguments, 2),
        ),
      t
    );
  };
  goog.asserts.assertObject = function (t, r, o) {
    return (
      goog.asserts.ENABLE_ASSERTS &&
        !goog.isObject(t) &&
        goog.asserts.doAssertFailure_(
          "Expected object but got %s: %s.",
          [goog.typeOf(t), t],
          r,
          Array.prototype.slice.call(arguments, 2),
        ),
      t
    );
  };
  goog.asserts.assertArray = function (t, r, o) {
    return (
      goog.asserts.ENABLE_ASSERTS &&
        !Array.isArray(t) &&
        goog.asserts.doAssertFailure_(
          "Expected array but got %s: %s.",
          [goog.typeOf(t), t],
          r,
          Array.prototype.slice.call(arguments, 2),
        ),
      t
    );
  };
  goog.asserts.assertBoolean = function (t, r, o) {
    return (
      goog.asserts.ENABLE_ASSERTS &&
        typeof t != "boolean" &&
        goog.asserts.doAssertFailure_(
          "Expected boolean but got %s: %s.",
          [goog.typeOf(t), t],
          r,
          Array.prototype.slice.call(arguments, 2),
        ),
      t
    );
  };
  goog.asserts.assertElement = function (t, r, o) {
    return (
      !goog.asserts.ENABLE_ASSERTS ||
        (goog.isObject(t) && t.nodeType == goog.dom.NodeType.ELEMENT) ||
        goog.asserts.doAssertFailure_(
          "Expected Element but got %s: %s.",
          [goog.typeOf(t), t],
          r,
          Array.prototype.slice.call(arguments, 2),
        ),
      t
    );
  };
  goog.asserts.assertInstanceof = function (t, r, o, s) {
    return (
      !goog.asserts.ENABLE_ASSERTS ||
        t instanceof r ||
        goog.asserts.doAssertFailure_(
          "Expected instanceof %s but got %s.",
          [goog.asserts.getType_(r), goog.asserts.getType_(t)],
          o,
          Array.prototype.slice.call(arguments, 3),
        ),
      t
    );
  };
  goog.asserts.assertFinite = function (t, r, o) {
    return (
      !goog.asserts.ENABLE_ASSERTS ||
        (typeof t == "number" && isFinite(t)) ||
        goog.asserts.doAssertFailure_(
          "Expected %s to be a finite number but it is not.",
          [t],
          r,
          Array.prototype.slice.call(arguments, 2),
        ),
      t
    );
  };
  goog.asserts.assertObjectPrototypeIsIntact = function () {
    for (var t in Object.prototype)
      goog.asserts.fail(t + " should not be enumerable in Object.prototype.");
  };
  goog.asserts.getType_ = function (t) {
    return t instanceof Function
      ? t.displayName || t.name || "unknown type name"
      : t instanceof Object
        ? t.constructor.displayName ||
          t.constructor.name ||
          Object.prototype.toString.call(t)
        : t === null
          ? "null"
          : typeof t;
  };
  goog.array = {};
  goog.NATIVE_ARRAY_PROTOTYPES = goog.TRUSTED_SITE;
  goog.array.ASSUME_NATIVE_FUNCTIONS = 2012 < goog.FEATURESET_YEAR;
  goog.array.peek = function (t) {
    return t[t.length - 1];
  };
  goog.array.last = goog.array.peek;
  goog.array.indexOf =
    goog.NATIVE_ARRAY_PROTOTYPES &&
    (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.indexOf)
      ? function (t, r, o) {
          return (
            goog.asserts.assert(t.length != null),
            Array.prototype.indexOf.call(t, r, o)
          );
        }
      : function (t, r, o) {
          if (
            ((o = o == null ? 0 : 0 > o ? Math.max(0, t.length + o) : o),
            typeof t == "string")
          )
            return typeof r != "string" || r.length != 1 ? -1 : t.indexOf(r, o);
          for (; o < t.length; o++) if (o in t && t[o] === r) return o;
          return -1;
        };
  goog.array.lastIndexOf =
    goog.NATIVE_ARRAY_PROTOTYPES &&
    (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.lastIndexOf)
      ? function (t, r, o) {
          return (
            goog.asserts.assert(t.length != null),
            Array.prototype.lastIndexOf.call(t, r, o ?? t.length - 1)
          );
        }
      : function (t, r, o) {
          if (
            ((o = o ?? t.length - 1),
            0 > o && (o = Math.max(0, t.length + o)),
            typeof t == "string")
          )
            return typeof r != "string" || r.length != 1
              ? -1
              : t.lastIndexOf(r, o);
          for (; 0 <= o; o--) if (o in t && t[o] === r) return o;
          return -1;
        };
  goog.array.forEach =
    goog.NATIVE_ARRAY_PROTOTYPES &&
    (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.forEach)
      ? function (t, r, o) {
          goog.asserts.assert(t.length != null),
            Array.prototype.forEach.call(t, r, o);
        }
      : function (t, r, o) {
          for (
            var s = t.length, n = typeof t == "string" ? t.split("") : t, i = 0;
            i < s;
            i++
          )
            i in n && r.call(o, n[i], i, t);
        };
  goog.array.forEachRight = function (t, r, o) {
    var s = t.length,
      n = typeof t == "string" ? t.split("") : t;
    for (--s; 0 <= s; --s) s in n && r.call(o, n[s], s, t);
  };
  goog.array.filter =
    goog.NATIVE_ARRAY_PROTOTYPES &&
    (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.filter)
      ? function (t, r, o) {
          return (
            goog.asserts.assert(t.length != null),
            Array.prototype.filter.call(t, r, o)
          );
        }
      : function (t, r, o) {
          for (
            var s = t.length,
              n = [],
              i = 0,
              p = typeof t == "string" ? t.split("") : t,
              _ = 0;
            _ < s;
            _++
          )
            if (_ in p) {
              var m = p[_];
              r.call(o, m, _, t) && (n[i++] = m);
            }
          return n;
        };
  goog.array.map =
    goog.NATIVE_ARRAY_PROTOTYPES &&
    (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.map)
      ? function (t, r, o) {
          return (
            goog.asserts.assert(t.length != null),
            Array.prototype.map.call(t, r, o)
          );
        }
      : function (t, r, o) {
          for (
            var s = t.length,
              n = Array(s),
              i = typeof t == "string" ? t.split("") : t,
              p = 0;
            p < s;
            p++
          )
            p in i && (n[p] = r.call(o, i[p], p, t));
          return n;
        };
  goog.array.reduce =
    goog.NATIVE_ARRAY_PROTOTYPES &&
    (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.reduce)
      ? function (t, r, o, s) {
          return (
            goog.asserts.assert(t.length != null),
            s && (r = goog.bind(r, s)),
            Array.prototype.reduce.call(t, r, o)
          );
        }
      : function (t, r, o, s) {
          var n = o;
          return (
            goog.array.forEach(t, function (i, p) {
              n = r.call(s, n, i, p, t);
            }),
            n
          );
        };
  goog.array.reduceRight =
    goog.NATIVE_ARRAY_PROTOTYPES &&
    (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.reduceRight)
      ? function (t, r, o, s) {
          return (
            goog.asserts.assert(t.length != null),
            goog.asserts.assert(r != null),
            s && (r = goog.bind(r, s)),
            Array.prototype.reduceRight.call(t, r, o)
          );
        }
      : function (t, r, o, s) {
          var n = o;
          return (
            goog.array.forEachRight(t, function (i, p) {
              n = r.call(s, n, i, p, t);
            }),
            n
          );
        };
  goog.array.some =
    goog.NATIVE_ARRAY_PROTOTYPES &&
    (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.some)
      ? function (t, r, o) {
          return (
            goog.asserts.assert(t.length != null),
            Array.prototype.some.call(t, r, o)
          );
        }
      : function (t, r, o) {
          for (
            var s = t.length, n = typeof t == "string" ? t.split("") : t, i = 0;
            i < s;
            i++
          )
            if (i in n && r.call(o, n[i], i, t)) return !0;
          return !1;
        };
  goog.array.every =
    goog.NATIVE_ARRAY_PROTOTYPES &&
    (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.every)
      ? function (t, r, o) {
          return (
            goog.asserts.assert(t.length != null),
            Array.prototype.every.call(t, r, o)
          );
        }
      : function (t, r, o) {
          for (
            var s = t.length, n = typeof t == "string" ? t.split("") : t, i = 0;
            i < s;
            i++
          )
            if (i in n && !r.call(o, n[i], i, t)) return !1;
          return !0;
        };
  goog.array.count = function (t, r, o) {
    var s = 0;
    return (
      goog.array.forEach(
        t,
        function (n, i, p) {
          r.call(o, n, i, p) && ++s;
        },
        o,
      ),
      s
    );
  };
  goog.array.find = function (t, r, o) {
    return (
      (r = goog.array.findIndex(t, r, o)),
      0 > r ? null : typeof t == "string" ? t.charAt(r) : t[r]
    );
  };
  goog.array.findIndex = function (t, r, o) {
    for (
      var s = t.length, n = typeof t == "string" ? t.split("") : t, i = 0;
      i < s;
      i++
    )
      if (i in n && r.call(o, n[i], i, t)) return i;
    return -1;
  };
  goog.array.findRight = function (t, r, o) {
    return (
      (r = goog.array.findIndexRight(t, r, o)),
      0 > r ? null : typeof t == "string" ? t.charAt(r) : t[r]
    );
  };
  goog.array.findIndexRight = function (t, r, o) {
    var s = t.length,
      n = typeof t == "string" ? t.split("") : t;
    for (--s; 0 <= s; s--) if (s in n && r.call(o, n[s], s, t)) return s;
    return -1;
  };
  goog.array.contains = function (t, r) {
    return 0 <= goog.array.indexOf(t, r);
  };
  goog.array.isEmpty = function (t) {
    return t.length == 0;
  };
  goog.array.clear = function (t) {
    if (!Array.isArray(t)) for (var r = t.length - 1; 0 <= r; r--) delete t[r];
    t.length = 0;
  };
  goog.array.insert = function (t, r) {
    goog.array.contains(t, r) || t.push(r);
  };
  goog.array.insertAt = function (t, r, o) {
    goog.array.splice(t, o, 0, r);
  };
  goog.array.insertArrayAt = function (t, r, o) {
    goog.partial(goog.array.splice, t, o, 0).apply(null, r);
  };
  goog.array.insertBefore = function (t, r, o) {
    var s;
    arguments.length == 2 || 0 > (s = goog.array.indexOf(t, o))
      ? t.push(r)
      : goog.array.insertAt(t, r, s);
  };
  goog.array.remove = function (t, r) {
    r = goog.array.indexOf(t, r);
    var o;
    return (o = 0 <= r) && goog.array.removeAt(t, r), o;
  };
  goog.array.removeLast = function (t, r) {
    return (
      (r = goog.array.lastIndexOf(t, r)),
      0 <= r ? (goog.array.removeAt(t, r), !0) : !1
    );
  };
  goog.array.removeAt = function (t, r) {
    return (
      goog.asserts.assert(t.length != null),
      Array.prototype.splice.call(t, r, 1).length == 1
    );
  };
  goog.array.removeIf = function (t, r, o) {
    return (
      (r = goog.array.findIndex(t, r, o)),
      0 <= r ? (goog.array.removeAt(t, r), !0) : !1
    );
  };
  goog.array.removeAllIf = function (t, r, o) {
    var s = 0;
    return (
      goog.array.forEachRight(t, function (n, i) {
        r.call(o, n, i, t) && goog.array.removeAt(t, i) && s++;
      }),
      s
    );
  };
  goog.array.concat = function (t) {
    return Array.prototype.concat.apply([], arguments);
  };
  goog.array.join = function (t) {
    return Array.prototype.concat.apply([], arguments);
  };
  goog.array.toArray = function (t) {
    var r = t.length;
    if (0 < r) {
      for (var o = Array(r), s = 0; s < r; s++) o[s] = t[s];
      return o;
    }
    return [];
  };
  goog.array.clone = goog.array.toArray;
  goog.array.extend = function (t, r) {
    for (var o = 1; o < arguments.length; o++) {
      var s = arguments[o];
      if (goog.isArrayLike(s)) {
        var n = t.length || 0,
          i = s.length || 0;
        t.length = n + i;
        for (var p = 0; p < i; p++) t[n + p] = s[p];
      } else t.push(s);
    }
  };
  goog.array.splice = function (t, r, o, s) {
    return (
      goog.asserts.assert(t.length != null),
      Array.prototype.splice.apply(t, goog.array.slice(arguments, 1))
    );
  };
  goog.array.slice = function (t, r, o) {
    return (
      goog.asserts.assert(t.length != null),
      2 >= arguments.length
        ? Array.prototype.slice.call(t, r)
        : Array.prototype.slice.call(t, r, o)
    );
  };
  goog.array.removeDuplicates = function (t, r, o) {
    r = r || t;
    var s = function (m) {
      return goog.isObject(m) ? "o" + goog.getUid(m) : (typeof m).charAt(0) + m;
    };
    (o = o || s), (s = {});
    for (var n = 0, i = 0; i < t.length; ) {
      var p = t[i++],
        _ = o(p);
      Object.prototype.hasOwnProperty.call(s, _) || ((s[_] = !0), (r[n++] = p));
    }
    r.length = n;
  };
  goog.array.binarySearch = function (t, r, o) {
    return goog.array.binarySearch_(t, o || goog.array.defaultCompare, !1, r);
  };
  goog.array.binarySelect = function (t, r, o) {
    return goog.array.binarySearch_(t, r, !0, void 0, o);
  };
  goog.array.binarySearch_ = function (t, r, o, s, n) {
    for (var i = 0, p = t.length, _; i < p; ) {
      var m = i + ((p - i) >>> 1),
        A = o ? r.call(n, t[m], m, t) : r(s, t[m]);
      0 < A ? (i = m + 1) : ((p = m), (_ = !A));
    }
    return _ ? i : -i - 1;
  };
  goog.array.sort = function (t, r) {
    t.sort(r || goog.array.defaultCompare);
  };
  goog.array.stableSort = function (t, r) {
    for (var o = Array(t.length), s = 0; s < t.length; s++)
      o[s] = { index: s, value: t[s] };
    var n = r || goog.array.defaultCompare;
    for (
      goog.array.sort(o, function (i, p) {
        return n(i.value, p.value) || i.index - p.index;
      }),
        s = 0;
      s < t.length;
      s++
    )
      t[s] = o[s].value;
  };
  goog.array.sortByKey = function (t, r, o) {
    var s = o || goog.array.defaultCompare;
    goog.array.sort(t, function (n, i) {
      return s(r(n), r(i));
    });
  };
  goog.array.sortObjectsByKey = function (t, r, o) {
    goog.array.sortByKey(
      t,
      function (s) {
        return s[r];
      },
      o,
    );
  };
  goog.array.isSorted = function (t, r, o) {
    r = r || goog.array.defaultCompare;
    for (var s = 1; s < t.length; s++) {
      var n = r(t[s - 1], t[s]);
      if (0 < n || (n == 0 && o)) return !1;
    }
    return !0;
  };
  goog.array.equals = function (t, r, o) {
    if (!goog.isArrayLike(t) || !goog.isArrayLike(r) || t.length != r.length)
      return !1;
    var s = t.length;
    o = o || goog.array.defaultCompareEquality;
    for (var n = 0; n < s; n++) if (!o(t[n], r[n])) return !1;
    return !0;
  };
  goog.array.compare3 = function (t, r, o) {
    o = o || goog.array.defaultCompare;
    for (var s = Math.min(t.length, r.length), n = 0; n < s; n++) {
      var i = o(t[n], r[n]);
      if (i != 0) return i;
    }
    return goog.array.defaultCompare(t.length, r.length);
  };
  goog.array.defaultCompare = function (t, r) {
    return t > r ? 1 : t < r ? -1 : 0;
  };
  goog.array.inverseDefaultCompare = function (t, r) {
    return -goog.array.defaultCompare(t, r);
  };
  goog.array.defaultCompareEquality = function (t, r) {
    return t === r;
  };
  goog.array.binaryInsert = function (t, r, o) {
    return (
      (o = goog.array.binarySearch(t, r, o)),
      0 > o ? (goog.array.insertAt(t, r, -(o + 1)), !0) : !1
    );
  };
  goog.array.binaryRemove = function (t, r, o) {
    return (
      (r = goog.array.binarySearch(t, r, o)),
      0 <= r ? goog.array.removeAt(t, r) : !1
    );
  };
  goog.array.bucket = function (t, r, o) {
    for (var s = {}, n = 0; n < t.length; n++) {
      var i = t[n],
        p = r.call(o, i, n, t);
      p !== void 0 && (s[p] || (s[p] = [])).push(i);
    }
    return s;
  };
  goog.array.toObject = function (t, r, o) {
    var s = {};
    return (
      goog.array.forEach(t, function (n, i) {
        s[r.call(o, n, i, t)] = n;
      }),
      s
    );
  };
  goog.array.range = function (t, r, o) {
    var s = [],
      n = 0,
      i = t;
    if (((o = o || 1), r !== void 0 && ((n = t), (i = r)), 0 > o * (i - n)))
      return [];
    if (0 < o) for (t = n; t < i; t += o) s.push(t);
    else for (t = n; t > i; t += o) s.push(t);
    return s;
  };
  goog.array.repeat = function (t, r) {
    for (var o = [], s = 0; s < r; s++) o[s] = t;
    return o;
  };
  goog.array.flatten = function (t) {
    for (var r = [], o = 0; o < arguments.length; o++) {
      var s = arguments[o];
      if (Array.isArray(s))
        for (var n = 0; n < s.length; n += 8192) {
          var i = goog.array.slice(s, n, n + 8192);
          i = goog.array.flatten.apply(null, i);
          for (var p = 0; p < i.length; p++) r.push(i[p]);
        }
      else r.push(s);
    }
    return r;
  };
  goog.array.rotate = function (t, r) {
    return (
      goog.asserts.assert(t.length != null),
      t.length &&
        ((r %= t.length),
        0 < r
          ? Array.prototype.unshift.apply(t, t.splice(-r, r))
          : 0 > r && Array.prototype.push.apply(t, t.splice(0, -r))),
      t
    );
  };
  goog.array.moveItem = function (t, r, o) {
    goog.asserts.assert(0 <= r && r < t.length),
      goog.asserts.assert(0 <= o && o < t.length),
      (r = Array.prototype.splice.call(t, r, 1)),
      Array.prototype.splice.call(t, o, 0, r[0]);
  };
  goog.array.zip = function (t) {
    if (!arguments.length) return [];
    for (var r = [], o = arguments[0].length, s = 1; s < arguments.length; s++)
      arguments[s].length < o && (o = arguments[s].length);
    for (s = 0; s < o; s++) {
      for (var n = [], i = 0; i < arguments.length; i++)
        n.push(arguments[i][s]);
      r.push(n);
    }
    return r;
  };
  goog.array.shuffle = function (t, r) {
    r = r || Math.random;
    for (var o = t.length - 1; 0 < o; o--) {
      var s = Math.floor(r() * (o + 1)),
        n = t[o];
      (t[o] = t[s]), (t[s] = n);
    }
  };
  goog.array.copyByIndex = function (t, r) {
    var o = [];
    return (
      goog.array.forEach(r, function (s) {
        o.push(t[s]);
      }),
      o
    );
  };
  goog.array.concatMap = function (t, r, o) {
    return goog.array.concat.apply([], goog.array.map(t, r, o));
  };
  goog.crypt = {};
  goog.crypt.stringToByteArray = function (t) {
    for (var r = [], o = 0, s = 0; s < t.length; s++) {
      var n = t.charCodeAt(s);
      255 < n && ((r[o++] = n & 255), (n >>= 8)), (r[o++] = n);
    }
    return r;
  };
  goog.crypt.byteArrayToString = function (t) {
    if (8192 >= t.length) return String.fromCharCode.apply(null, t);
    for (var r = "", o = 0; o < t.length; o += 8192) {
      var s = goog.array.slice(t, o, o + 8192);
      r += String.fromCharCode.apply(null, s);
    }
    return r;
  };
  goog.crypt.byteArrayToHex = function (t, r) {
    return goog.array
      .map(t, function (o) {
        return (o = o.toString(16)), 1 < o.length ? o : "0" + o;
      })
      .join(r || "");
  };
  goog.crypt.hexToByteArray = function (t) {
    goog.asserts.assert(
      t.length % 2 == 0,
      "Key string length must be multiple of 2",
    );
    for (var r = [], o = 0; o < t.length; o += 2)
      r.push(parseInt(t.substring(o, o + 2), 16));
    return r;
  };
  goog.crypt.stringToUtf8ByteArray = function (t) {
    for (var r = [], o = 0, s = 0; s < t.length; s++) {
      var n = t.charCodeAt(s);
      128 > n
        ? (r[o++] = n)
        : (2048 > n
            ? (r[o++] = (n >> 6) | 192)
            : ((n & 64512) == 55296 &&
              s + 1 < t.length &&
              (t.charCodeAt(s + 1) & 64512) == 56320
                ? ((n =
                    65536 + ((n & 1023) << 10) + (t.charCodeAt(++s) & 1023)),
                  (r[o++] = (n >> 18) | 240),
                  (r[o++] = ((n >> 12) & 63) | 128))
                : (r[o++] = (n >> 12) | 224),
              (r[o++] = ((n >> 6) & 63) | 128)),
          (r[o++] = (n & 63) | 128));
    }
    return r;
  };
  goog.crypt.utf8ByteArrayToString = function (t) {
    for (var r = [], o = 0, s = 0; o < t.length; ) {
      var n = t[o++];
      if (128 > n) r[s++] = String.fromCharCode(n);
      else if (191 < n && 224 > n) {
        var i = t[o++];
        r[s++] = String.fromCharCode(((n & 31) << 6) | (i & 63));
      } else if (239 < n && 365 > n) {
        i = t[o++];
        var p = t[o++],
          _ = t[o++];
        (n =
          (((n & 7) << 18) | ((i & 63) << 12) | ((p & 63) << 6) | (_ & 63)) -
          65536),
          (r[s++] = String.fromCharCode(55296 + (n >> 10))),
          (r[s++] = String.fromCharCode(56320 + (n & 1023)));
      } else
        (i = t[o++]),
          (p = t[o++]),
          (r[s++] = String.fromCharCode(
            ((n & 15) << 12) | ((i & 63) << 6) | (p & 63),
          ));
    }
    return r.join("");
  };
  goog.crypt.xorByteArray = function (t, r) {
    goog.asserts.assert(t.length == r.length, "XOR array lengths must match");
    for (var o = [], s = 0; s < t.length; s++) o.push(t[s] ^ r[s]);
    return o;
  };
  goog.dom.asserts = {};
  goog.dom.asserts.assertIsLocation = function (t) {
    if (goog.asserts.ENABLE_ASSERTS) {
      var r = goog.dom.asserts.getWindow_(t);
      r &&
        (!t || (!(t instanceof r.Location) && t instanceof r.Element)) &&
        goog.asserts.fail(
          "Argument is not a Location (or a non-Element mock); got: %s",
          goog.dom.asserts.debugStringForType_(t),
        );
    }
    return t;
  };
  goog.dom.asserts.assertIsElementType_ = function (t, r) {
    if (goog.asserts.ENABLE_ASSERTS) {
      var o = goog.dom.asserts.getWindow_(t);
      o &&
        typeof o[r] < "u" &&
        ((t &&
          (t instanceof o[r] ||
            !(t instanceof o.Location || t instanceof o.Element))) ||
          goog.asserts.fail(
            "Argument is not a %s (or a non-Element, non-Location mock); got: %s",
            r,
            goog.dom.asserts.debugStringForType_(t),
          ));
    }
    return t;
  };
  goog.dom.asserts.assertIsHTMLAnchorElement = function (t) {
    return goog.dom.asserts.assertIsElementType_(t, "HTMLAnchorElement");
  };
  goog.dom.asserts.assertIsHTMLButtonElement = function (t) {
    return goog.dom.asserts.assertIsElementType_(t, "HTMLButtonElement");
  };
  goog.dom.asserts.assertIsHTMLLinkElement = function (t) {
    return goog.dom.asserts.assertIsElementType_(t, "HTMLLinkElement");
  };
  goog.dom.asserts.assertIsHTMLImageElement = function (t) {
    return goog.dom.asserts.assertIsElementType_(t, "HTMLImageElement");
  };
  goog.dom.asserts.assertIsHTMLAudioElement = function (t) {
    return goog.dom.asserts.assertIsElementType_(t, "HTMLAudioElement");
  };
  goog.dom.asserts.assertIsHTMLVideoElement = function (t) {
    return goog.dom.asserts.assertIsElementType_(t, "HTMLVideoElement");
  };
  goog.dom.asserts.assertIsHTMLInputElement = function (t) {
    return goog.dom.asserts.assertIsElementType_(t, "HTMLInputElement");
  };
  goog.dom.asserts.assertIsHTMLTextAreaElement = function (t) {
    return goog.dom.asserts.assertIsElementType_(t, "HTMLTextAreaElement");
  };
  goog.dom.asserts.assertIsHTMLCanvasElement = function (t) {
    return goog.dom.asserts.assertIsElementType_(t, "HTMLCanvasElement");
  };
  goog.dom.asserts.assertIsHTMLEmbedElement = function (t) {
    return goog.dom.asserts.assertIsElementType_(t, "HTMLEmbedElement");
  };
  goog.dom.asserts.assertIsHTMLFormElement = function (t) {
    return goog.dom.asserts.assertIsElementType_(t, "HTMLFormElement");
  };
  goog.dom.asserts.assertIsHTMLFrameElement = function (t) {
    return goog.dom.asserts.assertIsElementType_(t, "HTMLFrameElement");
  };
  goog.dom.asserts.assertIsHTMLIFrameElement = function (t) {
    return goog.dom.asserts.assertIsElementType_(t, "HTMLIFrameElement");
  };
  goog.dom.asserts.assertIsHTMLObjectElement = function (t) {
    return goog.dom.asserts.assertIsElementType_(t, "HTMLObjectElement");
  };
  goog.dom.asserts.assertIsHTMLScriptElement = function (t) {
    return goog.dom.asserts.assertIsElementType_(t, "HTMLScriptElement");
  };
  goog.dom.asserts.debugStringForType_ = function (t) {
    if (goog.isObject(t))
      try {
        return (
          t.constructor.displayName ||
          t.constructor.name ||
          Object.prototype.toString.call(t)
        );
      } catch {
        return "<object could not be stringified>";
      }
    else return t === void 0 ? "undefined" : t === null ? "null" : typeof t;
  };
  goog.dom.asserts.getWindow_ = function (t) {
    try {
      var r = t && t.ownerDocument,
        o = r && (r.defaultView || r.parentWindow);
      if (((o = o || goog.global), o.Element && o.Location)) return o;
    } catch {}
    return null;
  };
  goog.functions = {};
  goog.functions.constant = function (t) {
    return function () {
      return t;
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
  goog.functions.identity = function (t, r) {
    return t;
  };
  goog.functions.error = function (t) {
    return function () {
      throw Error(t);
    };
  };
  goog.functions.fail = function (t) {
    return function () {
      throw t;
    };
  };
  goog.functions.lock = function (t, r) {
    return (
      (r = r || 0),
      function () {
        return t.apply(this, Array.prototype.slice.call(arguments, 0, r));
      }
    );
  };
  goog.functions.nth = function (t) {
    return function () {
      return arguments[t];
    };
  };
  goog.functions.partialRight = function (t, r) {
    var o = Array.prototype.slice.call(arguments, 1);
    return function () {
      var s = Array.prototype.slice.call(arguments);
      return s.push.apply(s, o), t.apply(this, s);
    };
  };
  goog.functions.withReturnValue = function (t, r) {
    return goog.functions.sequence(t, goog.functions.constant(r));
  };
  goog.functions.equalTo = function (t, r) {
    return function (o) {
      return r ? t == o : t === o;
    };
  };
  goog.functions.compose = function (t, r) {
    var o = arguments,
      s = o.length;
    return function () {
      var n;
      s && (n = o[s - 1].apply(this, arguments));
      for (var i = s - 2; 0 <= i; i--) n = o[i].call(this, n);
      return n;
    };
  };
  goog.functions.sequence = function (t) {
    var r = arguments,
      o = r.length;
    return function () {
      for (var s, n = 0; n < o; n++) s = r[n].apply(this, arguments);
      return s;
    };
  };
  goog.functions.and = function (t) {
    var r = arguments,
      o = r.length;
    return function () {
      for (var s = 0; s < o; s++) if (!r[s].apply(this, arguments)) return !1;
      return !0;
    };
  };
  goog.functions.or = function (t) {
    var r = arguments,
      o = r.length;
    return function () {
      for (var s = 0; s < o; s++) if (r[s].apply(this, arguments)) return !0;
      return !1;
    };
  };
  goog.functions.not = function (t) {
    return function () {
      return !t.apply(this, arguments);
    };
  };
  goog.functions.create = function (t, r) {
    var o = function () {};
    return (
      (o.prototype = t.prototype),
      (o = new o()),
      t.apply(o, Array.prototype.slice.call(arguments, 1)),
      o
    );
  };
  goog.functions.CACHE_RETURN_VALUE = !0;
  goog.functions.cacheReturnValue = function (t) {
    var r = !1,
      o;
    return function () {
      return goog.functions.CACHE_RETURN_VALUE
        ? (r || ((o = t()), (r = !0)), o)
        : t();
    };
  };
  goog.functions.once = function (t) {
    var r = t;
    return function () {
      if (r) {
        var o = r;
        (r = null), o();
      }
    };
  };
  goog.functions.debounce = function (t, r, o) {
    var s = 0;
    return function (n) {
      goog.global.clearTimeout(s);
      var i = arguments;
      s = goog.global.setTimeout(function () {
        t.apply(o, i);
      }, r);
    };
  };
  goog.functions.throttle = function (t, r, o) {
    var s = 0,
      n = !1,
      i = [],
      p = function () {
        (s = 0), n && ((n = !1), _());
      },
      _ = function () {
        (s = goog.global.setTimeout(p, r)), t.apply(o, i);
      };
    return function (m) {
      (i = arguments), s ? (n = !0) : _();
    };
  };
  goog.functions.rateLimit = function (t, r, o) {
    var s = 0,
      n = function () {
        s = 0;
      };
    return function (i) {
      s || ((s = goog.global.setTimeout(n, r)), t.apply(o, arguments));
    };
  };
  goog.dom.HtmlElement = function () {};
  goog.dom.TagName = function (t) {
    this.tagName_ = t;
  };
  goog.dom.TagName.prototype.toString = function () {
    return this.tagName_;
  };
  goog.dom.TagName.A = new goog.dom.TagName("A");
  goog.dom.TagName.ABBR = new goog.dom.TagName("ABBR");
  goog.dom.TagName.ACRONYM = new goog.dom.TagName("ACRONYM");
  goog.dom.TagName.ADDRESS = new goog.dom.TagName("ADDRESS");
  goog.dom.TagName.APPLET = new goog.dom.TagName("APPLET");
  goog.dom.TagName.AREA = new goog.dom.TagName("AREA");
  goog.dom.TagName.ARTICLE = new goog.dom.TagName("ARTICLE");
  goog.dom.TagName.ASIDE = new goog.dom.TagName("ASIDE");
  goog.dom.TagName.AUDIO = new goog.dom.TagName("AUDIO");
  goog.dom.TagName.B = new goog.dom.TagName("B");
  goog.dom.TagName.BASE = new goog.dom.TagName("BASE");
  goog.dom.TagName.BASEFONT = new goog.dom.TagName("BASEFONT");
  goog.dom.TagName.BDI = new goog.dom.TagName("BDI");
  goog.dom.TagName.BDO = new goog.dom.TagName("BDO");
  goog.dom.TagName.BIG = new goog.dom.TagName("BIG");
  goog.dom.TagName.BLOCKQUOTE = new goog.dom.TagName("BLOCKQUOTE");
  goog.dom.TagName.BODY = new goog.dom.TagName("BODY");
  goog.dom.TagName.BR = new goog.dom.TagName("BR");
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
  goog.dom.TagName.DD = new goog.dom.TagName("DD");
  goog.dom.TagName.DEL = new goog.dom.TagName("DEL");
  goog.dom.TagName.DETAILS = new goog.dom.TagName("DETAILS");
  goog.dom.TagName.DFN = new goog.dom.TagName("DFN");
  goog.dom.TagName.DIALOG = new goog.dom.TagName("DIALOG");
  goog.dom.TagName.DIR = new goog.dom.TagName("DIR");
  goog.dom.TagName.DIV = new goog.dom.TagName("DIV");
  goog.dom.TagName.DL = new goog.dom.TagName("DL");
  goog.dom.TagName.DT = new goog.dom.TagName("DT");
  goog.dom.TagName.EM = new goog.dom.TagName("EM");
  goog.dom.TagName.EMBED = new goog.dom.TagName("EMBED");
  goog.dom.TagName.FIELDSET = new goog.dom.TagName("FIELDSET");
  goog.dom.TagName.FIGCAPTION = new goog.dom.TagName("FIGCAPTION");
  goog.dom.TagName.FIGURE = new goog.dom.TagName("FIGURE");
  goog.dom.TagName.FONT = new goog.dom.TagName("FONT");
  goog.dom.TagName.FOOTER = new goog.dom.TagName("FOOTER");
  goog.dom.TagName.FORM = new goog.dom.TagName("FORM");
  goog.dom.TagName.FRAME = new goog.dom.TagName("FRAME");
  goog.dom.TagName.FRAMESET = new goog.dom.TagName("FRAMESET");
  goog.dom.TagName.H1 = new goog.dom.TagName("H1");
  goog.dom.TagName.H2 = new goog.dom.TagName("H2");
  goog.dom.TagName.H3 = new goog.dom.TagName("H3");
  goog.dom.TagName.H4 = new goog.dom.TagName("H4");
  goog.dom.TagName.H5 = new goog.dom.TagName("H5");
  goog.dom.TagName.H6 = new goog.dom.TagName("H6");
  goog.dom.TagName.HEAD = new goog.dom.TagName("HEAD");
  goog.dom.TagName.HEADER = new goog.dom.TagName("HEADER");
  goog.dom.TagName.HGROUP = new goog.dom.TagName("HGROUP");
  goog.dom.TagName.HR = new goog.dom.TagName("HR");
  goog.dom.TagName.HTML = new goog.dom.TagName("HTML");
  goog.dom.TagName.I = new goog.dom.TagName("I");
  goog.dom.TagName.IFRAME = new goog.dom.TagName("IFRAME");
  goog.dom.TagName.IMG = new goog.dom.TagName("IMG");
  goog.dom.TagName.INPUT = new goog.dom.TagName("INPUT");
  goog.dom.TagName.INS = new goog.dom.TagName("INS");
  goog.dom.TagName.ISINDEX = new goog.dom.TagName("ISINDEX");
  goog.dom.TagName.KBD = new goog.dom.TagName("KBD");
  goog.dom.TagName.KEYGEN = new goog.dom.TagName("KEYGEN");
  goog.dom.TagName.LABEL = new goog.dom.TagName("LABEL");
  goog.dom.TagName.LEGEND = new goog.dom.TagName("LEGEND");
  goog.dom.TagName.LI = new goog.dom.TagName("LI");
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
  goog.dom.TagName.OL = new goog.dom.TagName("OL");
  goog.dom.TagName.OPTGROUP = new goog.dom.TagName("OPTGROUP");
  goog.dom.TagName.OPTION = new goog.dom.TagName("OPTION");
  goog.dom.TagName.OUTPUT = new goog.dom.TagName("OUTPUT");
  goog.dom.TagName.P = new goog.dom.TagName("P");
  goog.dom.TagName.PARAM = new goog.dom.TagName("PARAM");
  goog.dom.TagName.PICTURE = new goog.dom.TagName("PICTURE");
  goog.dom.TagName.PRE = new goog.dom.TagName("PRE");
  goog.dom.TagName.PROGRESS = new goog.dom.TagName("PROGRESS");
  goog.dom.TagName.Q = new goog.dom.TagName("Q");
  goog.dom.TagName.RP = new goog.dom.TagName("RP");
  goog.dom.TagName.RT = new goog.dom.TagName("RT");
  goog.dom.TagName.RTC = new goog.dom.TagName("RTC");
  goog.dom.TagName.RUBY = new goog.dom.TagName("RUBY");
  goog.dom.TagName.S = new goog.dom.TagName("S");
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
  goog.dom.TagName.TD = new goog.dom.TagName("TD");
  goog.dom.TagName.TEMPLATE = new goog.dom.TagName("TEMPLATE");
  goog.dom.TagName.TEXTAREA = new goog.dom.TagName("TEXTAREA");
  goog.dom.TagName.TFOOT = new goog.dom.TagName("TFOOT");
  goog.dom.TagName.TH = new goog.dom.TagName("TH");
  goog.dom.TagName.THEAD = new goog.dom.TagName("THEAD");
  goog.dom.TagName.TIME = new goog.dom.TagName("TIME");
  goog.dom.TagName.TITLE = new goog.dom.TagName("TITLE");
  goog.dom.TagName.TR = new goog.dom.TagName("TR");
  goog.dom.TagName.TRACK = new goog.dom.TagName("TRACK");
  goog.dom.TagName.TT = new goog.dom.TagName("TT");
  goog.dom.TagName.U = new goog.dom.TagName("U");
  goog.dom.TagName.UL = new goog.dom.TagName("UL");
  goog.dom.TagName.VAR = new goog.dom.TagName("VAR");
  goog.dom.TagName.VIDEO = new goog.dom.TagName("VIDEO");
  goog.dom.TagName.WBR = new goog.dom.TagName("WBR");
  goog.dom.tags = {};
  goog.dom.tags.VOID_TAGS_ = {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    command: !0,
    embed: !0,
    hr: !0,
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
  goog.dom.tags.isVoidTag = function (t) {
    return goog.dom.tags.VOID_TAGS_[t] === !0;
  };
  goog.html = {};
  goog.html.trustedtypes = {};
  goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY =
    goog.TRUSTED_TYPES_POLICY_NAME
      ? goog.createTrustedTypesPolicy(goog.TRUSTED_TYPES_POLICY_NAME + "#html")
      : null;
  goog.string = {};
  goog.string.TypedString = function () {};
  goog.string.Const = function (t, r) {
    (this.stringConstValueWithSecurityContract__googStringSecurityPrivate_ =
      (t === goog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_ && r) ||
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
  goog.string.Const.unwrap = function (t) {
    return t instanceof goog.string.Const &&
      t.constructor === goog.string.Const &&
      t.STRING_CONST_TYPE_MARKER__GOOG_STRING_SECURITY_PRIVATE_ ===
        goog.string.Const.TYPE_MARKER_
      ? t.stringConstValueWithSecurityContract__googStringSecurityPrivate_
      : (goog.asserts.fail("expected object of type Const, got '" + t + "'"),
        "type_error:Const");
  };
  goog.string.Const.from = function (t) {
    return new goog.string.Const(
      goog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_,
      t,
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
  goog.html.SafeScript.fromConstant = function (t) {
    return (
      (t = goog.string.Const.unwrap(t)),
      t.length === 0
        ? goog.html.SafeScript.EMPTY
        : goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(
            t,
          )
    );
  };
  goog.html.SafeScript.fromConstantAndArgs = function (t, r) {
    for (var o = [], s = 1; s < arguments.length; s++)
      o.push(goog.html.SafeScript.stringify_(arguments[s]));
    return goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(
      "(" + goog.string.Const.unwrap(t) + ")(" + o.join(", ") + ");",
    );
  };
  goog.html.SafeScript.fromJson = function (t) {
    return goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(
      goog.html.SafeScript.stringify_(t),
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
  goog.html.SafeScript.unwrap = function (t) {
    return goog.html.SafeScript.unwrapTrustedScript(t).toString();
  };
  goog.html.SafeScript.unwrapTrustedScript = function (t) {
    return t instanceof goog.html.SafeScript &&
      t.constructor === goog.html.SafeScript &&
      t.SAFE_SCRIPT_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ ===
        goog.html.SafeScript.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_
      ? t.privateDoNotAccessOrElseSafeScriptWrappedValue_
      : (goog.asserts.fail(
          "expected object of type SafeScript, got '" +
            t +
            "' of type " +
            goog.typeOf(t),
        ),
        "type_error:SafeScript");
  };
  goog.html.SafeScript.stringify_ = function (t) {
    return JSON.stringify(t).replace(/</g, "\\x3c");
  };
  goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse =
    function (t) {
      return new goog.html.SafeScript().initSecurityPrivateDoNotAccessOrElse_(
        t,
      );
    };
  goog.html.SafeScript.prototype.initSecurityPrivateDoNotAccessOrElse_ =
    function (t) {
      return (
        (this.privateDoNotAccessOrElseSafeScriptWrappedValue_ = goog.html
          .trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY
          ? goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY.createScript(
              t,
            )
          : t),
        this
      );
    };
  goog.html.SafeScript.EMPTY =
    goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse("");
  goog.fs = {};
  goog.fs.url = {};
  goog.fs.url.createObjectUrl = function (t) {
    return goog.fs.url.getUrlObject_().createObjectURL(t);
  };
  goog.fs.url.revokeObjectUrl = function (t) {
    goog.fs.url.getUrlObject_().revokeObjectURL(t);
  };
  goog.fs.url.UrlObject_ = function () {};
  goog.fs.url.UrlObject_.prototype.createObjectURL = function (t) {};
  goog.fs.url.UrlObject_.prototype.revokeObjectURL = function (t) {};
  goog.fs.url.getUrlObject_ = function () {
    var t = goog.fs.url.findUrlObject_();
    if (t != null) return t;
    throw Error("This browser doesn't seem to support blob URLs");
  };
  goog.fs.url.findUrlObject_ = function () {
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
  goog.fs.url.browserSupportsObjectUrls = function () {
    return goog.fs.url.findUrlObject_() != null;
  };
  goog.fs.blob = {};
  goog.fs.blob.getBlob = function (t) {
    var r = goog.global.BlobBuilder || goog.global.WebKitBlobBuilder;
    if (r !== void 0) {
      r = new r();
      for (var o = 0; o < arguments.length; o++) r.append(arguments[o]);
      return r.getBlob();
    }
    return goog.fs.blob.getBlobWithProperties(goog.array.toArray(arguments));
  };
  goog.fs.blob.getBlobWithProperties = function (t, r, o) {
    var s = goog.global.BlobBuilder || goog.global.WebKitBlobBuilder;
    if (s !== void 0) {
      s = new s();
      for (var n = 0; n < t.length; n++) s.append(t[n], o);
      return s.getBlob(r);
    }
    if (goog.global.Blob !== void 0)
      return (s = {}), r && (s.type = r), o && (s.endings = o), new Blob(t, s);
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
  goog.i18n.bidi.Format = { LRE: "‪", RLE: "‫", PDF: "‬", LRM: "‎", RLM: "‏" };
  goog.i18n.bidi.Dir = { LTR: 1, RTL: -1, NEUTRAL: 0 };
  goog.i18n.bidi.RIGHT = "right";
  goog.i18n.bidi.LEFT = "left";
  goog.i18n.bidi.I18N_RIGHT = goog.i18n.bidi.IS_RTL
    ? goog.i18n.bidi.LEFT
    : goog.i18n.bidi.RIGHT;
  goog.i18n.bidi.I18N_LEFT = goog.i18n.bidi.IS_RTL
    ? goog.i18n.bidi.RIGHT
    : goog.i18n.bidi.LEFT;
  goog.i18n.bidi.toDir = function (t, r) {
    return typeof t == "number"
      ? 0 < t
        ? goog.i18n.bidi.Dir.LTR
        : 0 > t
          ? goog.i18n.bidi.Dir.RTL
          : r
            ? null
            : goog.i18n.bidi.Dir.NEUTRAL
      : t == null
        ? null
        : t
          ? goog.i18n.bidi.Dir.RTL
          : goog.i18n.bidi.Dir.LTR;
  };
  goog.i18n.bidi.ltrChars_ =
    "A-Za-zÀ-ÖØ-öø-ʸ̀-֐ऀ-῿‎Ⰰ-\uD801\uD804-\uD839\uD83C-\uDBFF豈-﬜︀-﹯﻽-￿";
  goog.i18n.bidi.rtlChars_ = "֑-ۯۺ-ࣿ‏\uD802-\uD803\uD83A-\uD83Bיִ-﷿ﹰ-ﻼ";
  goog.i18n.bidi.htmlSkipReg_ = /<[^>]*>|&[^;]+;/g;
  goog.i18n.bidi.stripHtmlIfNeeded_ = function (t, r) {
    return r ? t.replace(goog.i18n.bidi.htmlSkipReg_, "") : t;
  };
  goog.i18n.bidi.rtlCharReg_ = new RegExp("[" + goog.i18n.bidi.rtlChars_ + "]");
  goog.i18n.bidi.ltrCharReg_ = new RegExp("[" + goog.i18n.bidi.ltrChars_ + "]");
  goog.i18n.bidi.hasAnyRtl = function (t, r) {
    return goog.i18n.bidi.rtlCharReg_.test(
      goog.i18n.bidi.stripHtmlIfNeeded_(t, r),
    );
  };
  goog.i18n.bidi.hasRtlChar = goog.i18n.bidi.hasAnyRtl;
  goog.i18n.bidi.hasAnyLtr = function (t, r) {
    return goog.i18n.bidi.ltrCharReg_.test(
      goog.i18n.bidi.stripHtmlIfNeeded_(t, r),
    );
  };
  goog.i18n.bidi.ltrRe_ = new RegExp("^[" + goog.i18n.bidi.ltrChars_ + "]");
  goog.i18n.bidi.rtlRe_ = new RegExp("^[" + goog.i18n.bidi.rtlChars_ + "]");
  goog.i18n.bidi.isRtlChar = function (t) {
    return goog.i18n.bidi.rtlRe_.test(t);
  };
  goog.i18n.bidi.isLtrChar = function (t) {
    return goog.i18n.bidi.ltrRe_.test(t);
  };
  goog.i18n.bidi.isNeutralChar = function (t) {
    return !goog.i18n.bidi.isLtrChar(t) && !goog.i18n.bidi.isRtlChar(t);
  };
  goog.i18n.bidi.ltrDirCheckRe_ = new RegExp(
    "^[^" + goog.i18n.bidi.rtlChars_ + "]*[" + goog.i18n.bidi.ltrChars_ + "]",
  );
  goog.i18n.bidi.rtlDirCheckRe_ = new RegExp(
    "^[^" + goog.i18n.bidi.ltrChars_ + "]*[" + goog.i18n.bidi.rtlChars_ + "]",
  );
  goog.i18n.bidi.startsWithRtl = function (t, r) {
    return goog.i18n.bidi.rtlDirCheckRe_.test(
      goog.i18n.bidi.stripHtmlIfNeeded_(t, r),
    );
  };
  goog.i18n.bidi.isRtlText = goog.i18n.bidi.startsWithRtl;
  goog.i18n.bidi.startsWithLtr = function (t, r) {
    return goog.i18n.bidi.ltrDirCheckRe_.test(
      goog.i18n.bidi.stripHtmlIfNeeded_(t, r),
    );
  };
  goog.i18n.bidi.isLtrText = goog.i18n.bidi.startsWithLtr;
  goog.i18n.bidi.isRequiredLtrRe_ = /^http:\/\/.*/;
  goog.i18n.bidi.isNeutralText = function (t, r) {
    return (
      (t = goog.i18n.bidi.stripHtmlIfNeeded_(t, r)),
      goog.i18n.bidi.isRequiredLtrRe_.test(t) ||
        (!goog.i18n.bidi.hasAnyLtr(t) && !goog.i18n.bidi.hasAnyRtl(t))
    );
  };
  goog.i18n.bidi.ltrExitDirCheckRe_ = new RegExp(
    "[" + goog.i18n.bidi.ltrChars_ + "][^" + goog.i18n.bidi.rtlChars_ + "]*$",
  );
  goog.i18n.bidi.rtlExitDirCheckRe_ = new RegExp(
    "[" + goog.i18n.bidi.rtlChars_ + "][^" + goog.i18n.bidi.ltrChars_ + "]*$",
  );
  goog.i18n.bidi.endsWithLtr = function (t, r) {
    return goog.i18n.bidi.ltrExitDirCheckRe_.test(
      goog.i18n.bidi.stripHtmlIfNeeded_(t, r),
    );
  };
  goog.i18n.bidi.isLtrExitText = goog.i18n.bidi.endsWithLtr;
  goog.i18n.bidi.endsWithRtl = function (t, r) {
    return goog.i18n.bidi.rtlExitDirCheckRe_.test(
      goog.i18n.bidi.stripHtmlIfNeeded_(t, r),
    );
  };
  goog.i18n.bidi.isRtlExitText = goog.i18n.bidi.endsWithRtl;
  goog.i18n.bidi.rtlLocalesRe_ =
    /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;
  goog.i18n.bidi.isRtlLanguage = function (t) {
    return goog.i18n.bidi.rtlLocalesRe_.test(t);
  };
  goog.i18n.bidi.bracketGuardTextRe_ =
    /(\(.*?\)+)|(\[.*?\]+)|(\{.*?\}+)|(<.*?>+)/g;
  goog.i18n.bidi.guardBracketInText = function (t, r) {
    return (
      (r = (r === void 0 ? goog.i18n.bidi.hasAnyRtl(t) : r)
        ? goog.i18n.bidi.Format.RLM
        : goog.i18n.bidi.Format.LRM),
      t.replace(goog.i18n.bidi.bracketGuardTextRe_, r + "$&" + r)
    );
  };
  goog.i18n.bidi.enforceRtlInHtml = function (t) {
    return t.charAt(0) == "<"
      ? t.replace(/<\w+/, "$& dir=rtl")
      : `
<span dir=rtl>` +
          t +
          "</span>";
  };
  goog.i18n.bidi.enforceRtlInText = function (t) {
    return goog.i18n.bidi.Format.RLE + t + goog.i18n.bidi.Format.PDF;
  };
  goog.i18n.bidi.enforceLtrInHtml = function (t) {
    return t.charAt(0) == "<"
      ? t.replace(/<\w+/, "$& dir=ltr")
      : `
<span dir=ltr>` +
          t +
          "</span>";
  };
  goog.i18n.bidi.enforceLtrInText = function (t) {
    return goog.i18n.bidi.Format.LRE + t + goog.i18n.bidi.Format.PDF;
  };
  goog.i18n.bidi.dimensionsRe_ =
    /:\s*([.\d][.\w]*)\s+([.\d][.\w]*)\s+([.\d][.\w]*)\s+([.\d][.\w]*)/g;
  goog.i18n.bidi.leftRe_ = /left/gi;
  goog.i18n.bidi.rightRe_ = /right/gi;
  goog.i18n.bidi.tempRe_ = /%%%%/g;
  goog.i18n.bidi.mirrorCSS = function (t) {
    return t
      .replace(goog.i18n.bidi.dimensionsRe_, ":$1 $4 $3 $2")
      .replace(goog.i18n.bidi.leftRe_, "%%%%")
      .replace(goog.i18n.bidi.rightRe_, goog.i18n.bidi.LEFT)
      .replace(goog.i18n.bidi.tempRe_, goog.i18n.bidi.RIGHT);
  };
  goog.i18n.bidi.doubleQuoteSubstituteRe_ = /([\u0591-\u05f2])"/g;
  goog.i18n.bidi.singleQuoteSubstituteRe_ = /([\u0591-\u05f2])'/g;
  goog.i18n.bidi.normalizeHebrewQuote = function (t) {
    return t
      .replace(goog.i18n.bidi.doubleQuoteSubstituteRe_, "$1״")
      .replace(goog.i18n.bidi.singleQuoteSubstituteRe_, "$1׳");
  };
  goog.i18n.bidi.wordSeparatorRe_ = /\s+/;
  goog.i18n.bidi.hasNumeralsRe_ = /[\d\u06f0-\u06f9]/;
  goog.i18n.bidi.rtlDetectionThreshold_ = 0.4;
  goog.i18n.bidi.estimateDirection = function (t, r) {
    var o = 0,
      s = 0,
      n = !1;
    for (
      t = goog.i18n.bidi
        .stripHtmlIfNeeded_(t, r)
        .split(goog.i18n.bidi.wordSeparatorRe_),
        r = 0;
      r < t.length;
      r++
    ) {
      var i = t[r];
      goog.i18n.bidi.startsWithRtl(i)
        ? (o++, s++)
        : goog.i18n.bidi.isRequiredLtrRe_.test(i)
          ? (n = !0)
          : goog.i18n.bidi.hasAnyLtr(i)
            ? s++
            : goog.i18n.bidi.hasNumeralsRe_.test(i) && (n = !0);
    }
    return s == 0
      ? n
        ? goog.i18n.bidi.Dir.LTR
        : goog.i18n.bidi.Dir.NEUTRAL
      : o / s > goog.i18n.bidi.rtlDetectionThreshold_
        ? goog.i18n.bidi.Dir.RTL
        : goog.i18n.bidi.Dir.LTR;
  };
  goog.i18n.bidi.detectRtlDirectionality = function (t, r) {
    return goog.i18n.bidi.estimateDirection(t, r) == goog.i18n.bidi.Dir.RTL;
  };
  goog.i18n.bidi.setElementDirAndAlign = function (t, r) {
    t &&
      (r = goog.i18n.bidi.toDir(r)) &&
      ((t.style.textAlign =
        r == goog.i18n.bidi.Dir.RTL
          ? goog.i18n.bidi.RIGHT
          : goog.i18n.bidi.LEFT),
      (t.dir = r == goog.i18n.bidi.Dir.RTL ? "rtl" : "ltr"));
  };
  goog.i18n.bidi.setElementDirByTextDirectionality = function (t, r) {
    switch (goog.i18n.bidi.estimateDirection(r)) {
      case goog.i18n.bidi.Dir.LTR:
        t.dir = "ltr";
        break;
      case goog.i18n.bidi.Dir.RTL:
        t.dir = "rtl";
        break;
      default:
        t.removeAttribute("dir");
    }
  };
  goog.i18n.bidi.DirectionalString = function () {};
  goog.html.TrustedResourceUrl = function (t, r) {
    (this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_ =
      (t === goog.html.TrustedResourceUrl.CONSTRUCTOR_TOKEN_PRIVATE_ && r) ||
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
  goog.html.TrustedResourceUrl.prototype.cloneWithParams = function (t, r) {
    var o = goog.html.TrustedResourceUrl.unwrap(this);
    o = goog.html.TrustedResourceUrl.URL_PARAM_PARSER_.exec(o);
    var s = o[3] || "";
    return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(
      o[1] +
        goog.html.TrustedResourceUrl.stringifyParams_("?", o[2] || "", t) +
        goog.html.TrustedResourceUrl.stringifyParams_("#", s, r),
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
  goog.html.TrustedResourceUrl.unwrap = function (t) {
    return goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(t).toString();
  };
  goog.html.TrustedResourceUrl.unwrapTrustedScriptURL = function (t) {
    return t instanceof goog.html.TrustedResourceUrl &&
      t.constructor === goog.html.TrustedResourceUrl &&
      t.TRUSTED_RESOURCE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ ===
        goog.html.TrustedResourceUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_
      ? t.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_
      : (goog.asserts.fail(
          "expected object of type TrustedResourceUrl, got '" +
            t +
            "' of type " +
            goog.typeOf(t),
        ),
        "type_error:TrustedResourceUrl");
  };
  goog.html.TrustedResourceUrl.format = function (t, r) {
    var o = goog.string.Const.unwrap(t);
    if (!goog.html.TrustedResourceUrl.BASE_URL_.test(o))
      throw Error("Invalid TrustedResourceUrl format: " + o);
    return (
      (t = o.replace(
        goog.html.TrustedResourceUrl.FORMAT_MARKER_,
        function (s, n) {
          if (!Object.prototype.hasOwnProperty.call(r, n))
            throw Error(
              'Found marker, "' +
                n +
                '", in format string, "' +
                o +
                '", but no valid label mapping found in args: ' +
                JSON.stringify(r),
            );
          return (
            (s = r[n]),
            s instanceof goog.string.Const
              ? goog.string.Const.unwrap(s)
              : encodeURIComponent(String(s))
          );
        },
      )),
      goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(
        t,
      )
    );
  };
  goog.html.TrustedResourceUrl.FORMAT_MARKER_ = /%{(\w+)}/g;
  goog.html.TrustedResourceUrl.BASE_URL_ =
    /^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i;
  goog.html.TrustedResourceUrl.URL_PARAM_PARSER_ =
    /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/;
  goog.html.TrustedResourceUrl.formatWithParams = function (t, r, o, s) {
    return goog.html.TrustedResourceUrl.format(t, r).cloneWithParams(o, s);
  };
  goog.html.TrustedResourceUrl.fromConstant = function (t) {
    return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(
      goog.string.Const.unwrap(t),
    );
  };
  goog.html.TrustedResourceUrl.fromConstants = function (t) {
    for (var r = "", o = 0; o < t.length; o++)
      r += goog.string.Const.unwrap(t[o]);
    return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(
      r,
    );
  };
  goog.html.TrustedResourceUrl.fromSafeScript = function (t) {
    return (
      (t = goog.fs.blob.getBlobWithProperties(
        [goog.html.SafeScript.unwrap(t)],
        "text/javascript",
      )),
      (t = goog.fs.url.createObjectUrl(t)),
      goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(
        t,
      )
    );
  };
  goog.html.TrustedResourceUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {};
  goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse =
    function (t) {
      return (
        (t = goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY
          ? goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY.createScriptURL(
              t,
            )
          : t),
        new goog.html.TrustedResourceUrl(
          goog.html.TrustedResourceUrl.CONSTRUCTOR_TOKEN_PRIVATE_,
          t,
        )
      );
    };
  goog.html.TrustedResourceUrl.stringifyParams_ = function (t, r, o) {
    if (o == null) return r;
    if (typeof o == "string") return o ? t + encodeURIComponent(o) : "";
    for (var s in o) {
      var n = o[s];
      n = Array.isArray(n) ? n : [n];
      for (var i = 0; i < n.length; i++) {
        var p = n[i];
        p != null &&
          (r || (r = t),
          (r +=
            (r.length > t.length ? "&" : "") +
            encodeURIComponent(s) +
            "=" +
            encodeURIComponent(String(p))));
      }
    }
    return r;
  };
  goog.html.TrustedResourceUrl.CONSTRUCTOR_TOKEN_PRIVATE_ = {};
  goog.string.internal = {};
  goog.string.internal.startsWith = function (t, r) {
    return t.lastIndexOf(r, 0) == 0;
  };
  goog.string.internal.endsWith = function (t, r) {
    var o = t.length - r.length;
    return 0 <= o && t.indexOf(r, o) == o;
  };
  goog.string.internal.caseInsensitiveStartsWith = function (t, r) {
    return (
      goog.string.internal.caseInsensitiveCompare(r, t.substr(0, r.length)) == 0
    );
  };
  goog.string.internal.caseInsensitiveEndsWith = function (t, r) {
    return (
      goog.string.internal.caseInsensitiveCompare(
        r,
        t.substr(t.length - r.length, r.length),
      ) == 0
    );
  };
  goog.string.internal.caseInsensitiveEquals = function (t, r) {
    return t.toLowerCase() == r.toLowerCase();
  };
  goog.string.internal.isEmptyOrWhitespace = function (t) {
    return /^[\s\xa0]*$/.test(t);
  };
  goog.string.internal.trim =
    goog.TRUSTED_SITE && String.prototype.trim
      ? function (t) {
          return t.trim();
        }
      : function (t) {
          return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1];
        };
  goog.string.internal.caseInsensitiveCompare = function (t, r) {
    return (
      (t = String(t).toLowerCase()),
      (r = String(r).toLowerCase()),
      t < r ? -1 : t == r ? 0 : 1
    );
  };
  goog.string.internal.newLineToBr = function (t, r) {
    return t.replace(/(\r\n|\r|\n)/g, r ? "<br />" : "<br>");
  };
  goog.string.internal.htmlEscape = function (t, r) {
    if (r)
      t = t
        .replace(goog.string.internal.AMP_RE_, "&amp;")
        .replace(goog.string.internal.LT_RE_, "&lt;")
        .replace(goog.string.internal.GT_RE_, "&gt;")
        .replace(goog.string.internal.QUOT_RE_, "&quot;")
        .replace(goog.string.internal.SINGLE_QUOTE_RE_, "&#39;")
        .replace(goog.string.internal.NULL_RE_, "&#0;");
    else {
      if (!goog.string.internal.ALL_RE_.test(t)) return t;
      t.indexOf("&") != -1 &&
        (t = t.replace(goog.string.internal.AMP_RE_, "&amp;")),
        t.indexOf("<") != -1 &&
          (t = t.replace(goog.string.internal.LT_RE_, "&lt;")),
        t.indexOf(">") != -1 &&
          (t = t.replace(goog.string.internal.GT_RE_, "&gt;")),
        t.indexOf('"') != -1 &&
          (t = t.replace(goog.string.internal.QUOT_RE_, "&quot;")),
        t.indexOf("'") != -1 &&
          (t = t.replace(goog.string.internal.SINGLE_QUOTE_RE_, "&#39;")),
        t.indexOf("\0") != -1 &&
          (t = t.replace(goog.string.internal.NULL_RE_, "&#0;"));
    }
    return t;
  };
  goog.string.internal.AMP_RE_ = /&/g;
  goog.string.internal.LT_RE_ = /</g;
  goog.string.internal.GT_RE_ = />/g;
  goog.string.internal.QUOT_RE_ = /"/g;
  goog.string.internal.SINGLE_QUOTE_RE_ = /'/g;
  goog.string.internal.NULL_RE_ = /\x00/g;
  goog.string.internal.ALL_RE_ = /[\x00&<>"']/;
  goog.string.internal.whitespaceEscape = function (t, r) {
    return goog.string.internal.newLineToBr(t.replace(/  /g, " &#160;"), r);
  };
  goog.string.internal.contains = function (t, r) {
    return t.indexOf(r) != -1;
  };
  goog.string.internal.caseInsensitiveContains = function (t, r) {
    return goog.string.internal.contains(t.toLowerCase(), r.toLowerCase());
  };
  goog.string.internal.compareVersions = function (t, r) {
    var o = 0;
    (t = goog.string.internal.trim(String(t)).split(".")),
      (r = goog.string.internal.trim(String(r)).split("."));
    for (var s = Math.max(t.length, r.length), n = 0; o == 0 && n < s; n++) {
      var i = t[n] || "",
        p = r[n] || "";
      do {
        if (
          ((i = /(\d*)(\D*)(.*)/.exec(i) || ["", "", "", ""]),
          (p = /(\d*)(\D*)(.*)/.exec(p) || ["", "", "", ""]),
          i[0].length == 0 && p[0].length == 0)
        )
          break;
        o = i[1].length == 0 ? 0 : parseInt(i[1], 10);
        var _ = p[1].length == 0 ? 0 : parseInt(p[1], 10);
        (o =
          goog.string.internal.compareElements_(o, _) ||
          goog.string.internal.compareElements_(
            i[2].length == 0,
            p[2].length == 0,
          ) ||
          goog.string.internal.compareElements_(i[2], p[2])),
          (i = i[3]),
          (p = p[3]);
      } while (o == 0);
    }
    return o;
  };
  goog.string.internal.compareElements_ = function (t, r) {
    return t < r ? -1 : t > r ? 1 : 0;
  };
  goog.html.SafeUrl = function (t, r) {
    (this.privateDoNotAccessOrElseSafeUrlWrappedValue_ =
      (t === goog.html.SafeUrl.CONSTRUCTOR_TOKEN_PRIVATE_ && r) || ""),
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
  goog.html.SafeUrl.unwrap = function (t) {
    return t instanceof goog.html.SafeUrl &&
      t.constructor === goog.html.SafeUrl &&
      t.SAFE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ ===
        goog.html.SafeUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_
      ? t.privateDoNotAccessOrElseSafeUrlWrappedValue_
      : (goog.asserts.fail(
          "expected object of type SafeUrl, got '" +
            t +
            "' of type " +
            goog.typeOf(t),
        ),
        "type_error:SafeUrl");
  };
  goog.html.SafeUrl.fromConstant = function (t) {
    return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(
      goog.string.Const.unwrap(t),
    );
  };
  goog.html.SAFE_MIME_TYPE_PATTERN_ =
    /^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|text\/csv|video\/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i;
  goog.html.SafeUrl.isSafeMimeType = function (t) {
    return goog.html.SAFE_MIME_TYPE_PATTERN_.test(t);
  };
  goog.html.SafeUrl.fromBlob = function (t) {
    return (
      (t = goog.html.SafeUrl.isSafeMimeType(t.type)
        ? goog.fs.url.createObjectUrl(t)
        : goog.html.SafeUrl.INNOCUOUS_STRING),
      goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(t)
    );
  };
  goog.html.SafeUrl.fromMediaSource = function (t) {
    return (
      goog.asserts.assert(
        "MediaSource" in goog.global,
        "No support for MediaSource",
      ),
      (t =
        t instanceof MediaSource
          ? goog.fs.url.createObjectUrl(t)
          : goog.html.SafeUrl.INNOCUOUS_STRING),
      goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(t)
    );
  };
  goog.html.DATA_URL_PATTERN_ = /^data:(.*);base64,[a-z0-9+\/]+=*$/i;
  goog.html.SafeUrl.fromDataUrl = function (t) {
    t = t.replace(/(%0A|%0D)/g, "");
    var r = t.match(goog.html.DATA_URL_PATTERN_);
    return (
      (r = r && goog.html.SafeUrl.isSafeMimeType(r[1])),
      goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(
        r ? t : goog.html.SafeUrl.INNOCUOUS_STRING,
      )
    );
  };
  goog.html.SafeUrl.fromTelUrl = function (t) {
    return (
      goog.string.internal.caseInsensitiveStartsWith(t, "tel:") ||
        (t = goog.html.SafeUrl.INNOCUOUS_STRING),
      goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(t)
    );
  };
  goog.html.SIP_URL_PATTERN_ =
    /^sip[s]?:[+a-z0-9_.!$%&'*\/=^`{|}~-]+@([a-z0-9-]+\.)+[a-z0-9]{2,63}$/i;
  goog.html.SafeUrl.fromSipUrl = function (t) {
    return (
      goog.html.SIP_URL_PATTERN_.test(decodeURIComponent(t)) ||
        (t = goog.html.SafeUrl.INNOCUOUS_STRING),
      goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(t)
    );
  };
  goog.html.SafeUrl.fromFacebookMessengerUrl = function (t) {
    return (
      goog.string.internal.caseInsensitiveStartsWith(
        t,
        "fb-messenger://share",
      ) || (t = goog.html.SafeUrl.INNOCUOUS_STRING),
      goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(t)
    );
  };
  goog.html.SafeUrl.fromWhatsAppUrl = function (t) {
    return (
      goog.string.internal.caseInsensitiveStartsWith(t, "whatsapp://send") ||
        (t = goog.html.SafeUrl.INNOCUOUS_STRING),
      goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(t)
    );
  };
  goog.html.SafeUrl.fromSmsUrl = function (t) {
    return (
      (goog.string.internal.caseInsensitiveStartsWith(t, "sms:") &&
        goog.html.SafeUrl.isSmsUrlBodyValid_(t)) ||
        (t = goog.html.SafeUrl.INNOCUOUS_STRING),
      goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(t)
    );
  };
  goog.html.SafeUrl.isSmsUrlBodyValid_ = function (t) {
    var r = t.indexOf("#");
    if ((0 < r && (t = t.substring(0, r)), (r = t.match(/[?&]body=/gi)), !r))
      return !0;
    if (1 < r.length) return !1;
    if (((t = t.match(/[?&]body=([^&]*)/)[1]), !t)) return !0;
    try {
      decodeURIComponent(t);
    } catch {
      return !1;
    }
    return /^(?:[a-z0-9\-_.~]|%[0-9a-f]{2})+$/i.test(t);
  };
  goog.html.SafeUrl.fromSshUrl = function (t) {
    return (
      goog.string.internal.caseInsensitiveStartsWith(t, "ssh://") ||
        (t = goog.html.SafeUrl.INNOCUOUS_STRING),
      goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(t)
    );
  };
  goog.html.SafeUrl.sanitizeChromeExtensionUrl = function (t, r) {
    return goog.html.SafeUrl.sanitizeExtensionUrl_(
      /^chrome-extension:\/\/([^\/]+)\//,
      t,
      r,
    );
  };
  goog.html.SafeUrl.sanitizeFirefoxExtensionUrl = function (t, r) {
    return goog.html.SafeUrl.sanitizeExtensionUrl_(
      /^moz-extension:\/\/([^\/]+)\//,
      t,
      r,
    );
  };
  goog.html.SafeUrl.sanitizeEdgeExtensionUrl = function (t, r) {
    return goog.html.SafeUrl.sanitizeExtensionUrl_(
      /^ms-browser-extension:\/\/([^\/]+)\//,
      t,
      r,
    );
  };
  goog.html.SafeUrl.sanitizeExtensionUrl_ = function (t, r, o) {
    return (
      (t = t.exec(r))
        ? ((t = t[1]),
          (o instanceof goog.string.Const
            ? [goog.string.Const.unwrap(o)]
            : o.map(function (s) {
                return goog.string.Const.unwrap(s);
              })
          ).indexOf(t) == -1 && (r = goog.html.SafeUrl.INNOCUOUS_STRING))
        : (r = goog.html.SafeUrl.INNOCUOUS_STRING),
      goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(r)
    );
  };
  goog.html.SafeUrl.fromTrustedResourceUrl = function (t) {
    return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(
      goog.html.TrustedResourceUrl.unwrap(t),
    );
  };
  goog.html.SAFE_URL_PATTERN_ =
    /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
  goog.html.SafeUrl.SAFE_URL_PATTERN = goog.html.SAFE_URL_PATTERN_;
  goog.html.SafeUrl.sanitize = function (t) {
    return t instanceof goog.html.SafeUrl
      ? t
      : ((t =
          typeof t == "object" && t.implementsGoogStringTypedString
            ? t.getTypedStringValue()
            : String(t)),
        goog.html.SAFE_URL_PATTERN_.test(t) ||
          (t = goog.html.SafeUrl.INNOCUOUS_STRING),
        goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(t));
  };
  goog.html.SafeUrl.sanitizeAssertUnchanged = function (t, r) {
    return t instanceof goog.html.SafeUrl
      ? t
      : ((t =
          typeof t == "object" && t.implementsGoogStringTypedString
            ? t.getTypedStringValue()
            : String(t)),
        r &&
        /^data:/i.test(t) &&
        ((r = goog.html.SafeUrl.fromDataUrl(t)), r.getTypedStringValue() == t)
          ? r
          : (goog.asserts.assert(
              goog.html.SAFE_URL_PATTERN_.test(t),
              "%s does not match the safe URL pattern",
              t,
            ) || (t = goog.html.SafeUrl.INNOCUOUS_STRING),
            goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(
              t,
            )));
  };
  goog.html.SafeUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {};
  goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse = function (
    t,
  ) {
    return new goog.html.SafeUrl(
      goog.html.SafeUrl.CONSTRUCTOR_TOKEN_PRIVATE_,
      t,
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
  goog.html.SafeStyle.fromConstant = function (t) {
    return (
      (t = goog.string.Const.unwrap(t)),
      t.length === 0
        ? goog.html.SafeStyle.EMPTY
        : (goog.asserts.assert(
            goog.string.internal.endsWith(t, ";"),
            "Last character of style string is not ';': " + t,
          ),
          goog.asserts.assert(
            goog.string.internal.contains(t, ":"),
            `Style string must contain at least one ':', to specify a "name: value" pair: ` +
              t,
          ),
          goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(
            t,
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
  goog.html.SafeStyle.unwrap = function (t) {
    return t instanceof goog.html.SafeStyle &&
      t.constructor === goog.html.SafeStyle &&
      t.SAFE_STYLE_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ ===
        goog.html.SafeStyle.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_
      ? t.privateDoNotAccessOrElseSafeStyleWrappedValue_
      : (goog.asserts.fail(
          "expected object of type SafeStyle, got '" +
            t +
            "' of type " +
            goog.typeOf(t),
        ),
        "type_error:SafeStyle");
  };
  goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse =
    function (t) {
      return new goog.html.SafeStyle().initSecurityPrivateDoNotAccessOrElse_(t);
    };
  goog.html.SafeStyle.prototype.initSecurityPrivateDoNotAccessOrElse_ =
    function (t) {
      return (this.privateDoNotAccessOrElseSafeStyleWrappedValue_ = t), this;
    };
  goog.html.SafeStyle.EMPTY =
    goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse("");
  goog.html.SafeStyle.INNOCUOUS_STRING = "zClosurez";
  goog.html.SafeStyle.create = function (t) {
    var r = "",
      o;
    for (o in t) {
      if (!/^[-_a-zA-Z0-9]+$/.test(o))
        throw Error("Name allows only [-_a-zA-Z0-9], got: " + o);
      var s = t[o];
      s != null &&
        ((s = Array.isArray(s)
          ? goog.array
              .map(s, goog.html.SafeStyle.sanitizePropertyValue_)
              .join(" ")
          : goog.html.SafeStyle.sanitizePropertyValue_(s)),
        (r += o + ":" + s + ";"));
    }
    return r
      ? goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(r)
      : goog.html.SafeStyle.EMPTY;
  };
  goog.html.SafeStyle.sanitizePropertyValue_ = function (t) {
    if (t instanceof goog.html.SafeUrl)
      return (
        'url("' +
        goog.html.SafeUrl.unwrap(t)
          .replace(/</g, "%3c")
          .replace(/[\\"]/g, "\\$&") +
        '")'
      );
    if (
      ((t =
        t instanceof goog.string.Const
          ? goog.string.Const.unwrap(t)
          : goog.html.SafeStyle.sanitizePropertyValueString_(String(t))),
      /[{;}]/.test(t))
    )
      throw new goog.asserts.AssertionError(
        "Value does not allow [{;}], got: %s.",
        [t],
      );
    return t;
  };
  goog.html.SafeStyle.sanitizePropertyValueString_ = function (t) {
    var r = t
      .replace(goog.html.SafeStyle.FUNCTIONS_RE_, "$1")
      .replace(goog.html.SafeStyle.FUNCTIONS_RE_, "$1")
      .replace(goog.html.SafeStyle.URL_RE_, "url");
    if (goog.html.SafeStyle.VALUE_RE_.test(r)) {
      if (goog.html.SafeStyle.COMMENT_RE_.test(t))
        return (
          goog.asserts.fail("String value disallows comments, got: " + t),
          goog.html.SafeStyle.INNOCUOUS_STRING
        );
      if (!goog.html.SafeStyle.hasBalancedQuotes_(t))
        return (
          goog.asserts.fail("String value requires balanced quotes, got: " + t),
          goog.html.SafeStyle.INNOCUOUS_STRING
        );
      if (!goog.html.SafeStyle.hasBalancedSquareBrackets_(t))
        return (
          goog.asserts.fail(
            "String value requires balanced square brackets and one identifier per pair of brackets, got: " +
              t,
          ),
          goog.html.SafeStyle.INNOCUOUS_STRING
        );
    } else
      return (
        goog.asserts.fail(
          "String value allows only " +
            goog.html.SafeStyle.VALUE_ALLOWED_CHARS_ +
            " and simple functions, got: " +
            t,
        ),
        goog.html.SafeStyle.INNOCUOUS_STRING
      );
    return goog.html.SafeStyle.sanitizeUrl_(t);
  };
  goog.html.SafeStyle.hasBalancedQuotes_ = function (t) {
    for (var r = !0, o = !0, s = 0; s < t.length; s++) {
      var n = t.charAt(s);
      n == "'" && o ? (r = !r) : n == '"' && r && (o = !o);
    }
    return r && o;
  };
  goog.html.SafeStyle.hasBalancedSquareBrackets_ = function (t) {
    for (var r = !0, o = /^[-_a-zA-Z0-9]$/, s = 0; s < t.length; s++) {
      var n = t.charAt(s);
      if (n == "]") {
        if (r) return !1;
        r = !0;
      } else if (n == "[") {
        if (!r) return !1;
        r = !1;
      } else if (!r && !o.test(n)) return !1;
    }
    return r;
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
  goog.html.SafeStyle.sanitizeUrl_ = function (t) {
    return t.replace(goog.html.SafeStyle.URL_RE_, function (r, o, s, n) {
      var i = "";
      return (
        (s = s.replace(/^(['"])(.*)\1$/, function (p, _, m) {
          return (i = _), m;
        })),
        (r = goog.html.SafeUrl.sanitize(s).getTypedStringValue()),
        o + i + r + i + n
      );
    });
  };
  goog.html.SafeStyle.concat = function (t) {
    var r = "",
      o = function (s) {
        Array.isArray(s)
          ? goog.array.forEach(s, o)
          : (r += goog.html.SafeStyle.unwrap(s));
      };
    return (
      goog.array.forEach(arguments, o),
      r
        ? goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(r)
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
  goog.html.SafeStyleSheet.createRule = function (t, r) {
    if (goog.string.internal.contains(t, "<"))
      throw Error("Selector does not allow '<', got: " + t);
    var o = t.replace(/('|")((?!\1)[^\r\n\f\\]|\\[\s\S])*\1/g, "");
    if (!/^[-_a-zA-Z0-9#.:* ,>+~[\]()=^$|]+$/.test(o))
      throw Error(
        "Selector allows only [-_a-zA-Z0-9#.:* ,>+~[\\]()=^$|] and strings, got: " +
          t,
      );
    if (!goog.html.SafeStyleSheet.hasBalancedBrackets_(o))
      throw Error("() and [] in selector must be balanced, got: " + t);
    return (
      r instanceof goog.html.SafeStyle || (r = goog.html.SafeStyle.create(r)),
      (t =
        t + "{" + goog.html.SafeStyle.unwrap(r).replace(/</g, "\\3C ") + "}"),
      goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(
        t,
      )
    );
  };
  goog.html.SafeStyleSheet.hasBalancedBrackets_ = function (t) {
    for (var r = { "(": ")", "[": "]" }, o = [], s = 0; s < t.length; s++) {
      var n = t[s];
      if (r[n]) o.push(r[n]);
      else if (goog.object.contains(r, n) && o.pop() != n) return !1;
    }
    return o.length == 0;
  };
  goog.html.SafeStyleSheet.concat = function (t) {
    var r = "",
      o = function (s) {
        Array.isArray(s)
          ? goog.array.forEach(s, o)
          : (r += goog.html.SafeStyleSheet.unwrap(s));
      };
    return (
      goog.array.forEach(arguments, o),
      goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(
        r,
      )
    );
  };
  goog.html.SafeStyleSheet.fromConstant = function (t) {
    return (
      (t = goog.string.Const.unwrap(t)),
      t.length === 0
        ? goog.html.SafeStyleSheet.EMPTY
        : (goog.asserts.assert(
            !goog.string.internal.contains(t, "<"),
            "Forbidden '<' character in style sheet string: " + t,
          ),
          goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(
            t,
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
  goog.html.SafeStyleSheet.unwrap = function (t) {
    return t instanceof goog.html.SafeStyleSheet &&
      t.constructor === goog.html.SafeStyleSheet &&
      t.SAFE_STYLE_SHEET_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ ===
        goog.html.SafeStyleSheet.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_
      ? t.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_
      : (goog.asserts.fail(
          "expected object of type SafeStyleSheet, got '" +
            t +
            "' of type " +
            goog.typeOf(t),
        ),
        "type_error:SafeStyleSheet");
  };
  goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse =
    function (t) {
      return new goog.html.SafeStyleSheet().initSecurityPrivateDoNotAccessOrElse_(
        t,
      );
    };
  goog.html.SafeStyleSheet.prototype.initSecurityPrivateDoNotAccessOrElse_ =
    function (t) {
      return (
        (this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_ = t), this
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
    var t = goog.labs.userAgent.util.getNavigator_();
    return t && (t = t.userAgent) ? t : "";
  };
  goog.labs.userAgent.util.getNavigator_ = function () {
    return goog.global.navigator;
  };
  goog.labs.userAgent.util.userAgent_ =
    goog.labs.userAgent.util.getNativeUserAgentString_();
  goog.labs.userAgent.util.setUserAgent = function (t) {
    goog.labs.userAgent.util.userAgent_ =
      t || goog.labs.userAgent.util.getNativeUserAgentString_();
  };
  goog.labs.userAgent.util.getUserAgent = function () {
    return goog.labs.userAgent.util.userAgent_;
  };
  goog.labs.userAgent.util.matchUserAgent = function (t) {
    var r = goog.labs.userAgent.util.getUserAgent();
    return goog.string.internal.contains(r, t);
  };
  goog.labs.userAgent.util.matchUserAgentIgnoreCase = function (t) {
    var r = goog.labs.userAgent.util.getUserAgent();
    return goog.string.internal.caseInsensitiveContains(r, t);
  };
  goog.labs.userAgent.util.extractVersionTuples = function (t) {
    for (
      var r = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g, o = [], s;
      (s = r.exec(t));
    )
      o.push([s[1], s[2], s[3] || void 0]);
    return o;
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
    function t(n) {
      return (n = goog.array.find(n, s)), o[n] || "";
    }
    var r = goog.labs.userAgent.util.getUserAgent();
    if (goog.labs.userAgent.browser.isIE())
      return goog.labs.userAgent.browser.getIEVersion_(r);
    r = goog.labs.userAgent.util.extractVersionTuples(r);
    var o = {};
    goog.array.forEach(r, function (n) {
      o[n[0]] = n[1];
    });
    var s = goog.partial(goog.object.containsKey, o);
    return goog.labs.userAgent.browser.isOpera()
      ? t(["Version", "Opera"])
      : goog.labs.userAgent.browser.isEdge()
        ? t(["Edge"])
        : goog.labs.userAgent.browser.isEdgeChromium()
          ? t(["Edg"])
          : goog.labs.userAgent.browser.isChrome()
            ? t(["Chrome", "CriOS", "HeadlessChrome"])
            : ((r = r[2]) && r[1]) || "";
  };
  goog.labs.userAgent.browser.isVersionOrHigher = function (t) {
    return (
      0 <=
      goog.string.internal.compareVersions(
        goog.labs.userAgent.browser.getVersion(),
        t,
      )
    );
  };
  goog.labs.userAgent.browser.getIEVersion_ = function (t) {
    var r = /rv: *([\d\.]*)/.exec(t);
    if (r && r[1]) return r[1];
    r = "";
    var o = /MSIE +([\d\.]+)/.exec(t);
    if (o && o[1])
      if (((t = /Trident\/(\d.\d)/.exec(t)), o[1] == "7.0"))
        if (t && t[1])
          switch (t[1]) {
            case "4.0":
              r = "8.0";
              break;
            case "5.0":
              r = "9.0";
              break;
            case "6.0":
              r = "10.0";
              break;
            case "7.0":
              r = "11.0";
          }
        else r = "7.0";
      else r = o[1];
    return r;
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
  goog.html.SafeHtml.unwrap = function (t) {
    return goog.html.SafeHtml.unwrapTrustedHTML(t).toString();
  };
  goog.html.SafeHtml.unwrapTrustedHTML = function (t) {
    return t instanceof goog.html.SafeHtml &&
      t.constructor === goog.html.SafeHtml &&
      t.SAFE_HTML_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ ===
        goog.html.SafeHtml.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_
      ? t.privateDoNotAccessOrElseSafeHtmlWrappedValue_
      : (goog.asserts.fail(
          "expected object of type SafeHtml, got '" +
            t +
            "' of type " +
            goog.typeOf(t),
        ),
        "type_error:SafeHtml");
  };
  goog.html.SafeHtml.htmlEscape = function (t) {
    if (t instanceof goog.html.SafeHtml) return t;
    var r = typeof t == "object",
      o = null;
    return (
      r && t.implementsGoogI18nBidiDirectionalString && (o = t.getDirection()),
      (t =
        r && t.implementsGoogStringTypedString
          ? t.getTypedStringValue()
          : String(t)),
      goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(
        goog.string.internal.htmlEscape(t),
        o,
      )
    );
  };
  goog.html.SafeHtml.htmlEscapePreservingNewlines = function (t) {
    return t instanceof goog.html.SafeHtml
      ? t
      : ((t = goog.html.SafeHtml.htmlEscape(t)),
        goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(
          goog.string.internal.newLineToBr(goog.html.SafeHtml.unwrap(t)),
          t.getDirection(),
        ));
  };
  goog.html.SafeHtml.htmlEscapePreservingNewlinesAndSpaces = function (t) {
    return t instanceof goog.html.SafeHtml
      ? t
      : ((t = goog.html.SafeHtml.htmlEscape(t)),
        goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(
          goog.string.internal.whitespaceEscape(goog.html.SafeHtml.unwrap(t)),
          t.getDirection(),
        ));
  };
  goog.html.SafeHtml.from = goog.html.SafeHtml.htmlEscape;
  goog.html.SafeHtml.comment = function (t) {
    return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(
      "<!--" + goog.string.internal.htmlEscape(t) + "-->",
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
  goog.html.SafeHtml.create = function (t, r, o) {
    return (
      goog.html.SafeHtml.verifyTagName(String(t)),
      goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse(
        String(t),
        r,
        o,
      )
    );
  };
  goog.html.SafeHtml.verifyTagName = function (t) {
    if (!goog.html.SafeHtml.VALID_NAMES_IN_TAG_.test(t))
      throw Error(
        goog.html.SafeHtml.ENABLE_ERROR_MESSAGES
          ? "Invalid tag name <" + t + ">."
          : "",
      );
    if (t.toUpperCase() in goog.html.SafeHtml.NOT_ALLOWED_TAG_NAMES_)
      throw Error(
        goog.html.SafeHtml.ENABLE_ERROR_MESSAGES
          ? "Tag name <" + t + "> is not allowed for SafeHtml."
          : "",
      );
  };
  goog.html.SafeHtml.createIframe = function (t, r, o, s) {
    t && goog.html.TrustedResourceUrl.unwrap(t);
    var n = {};
    return (
      (n.src = t || null),
      (n.srcdoc = r && goog.html.SafeHtml.unwrap(r)),
      (t = goog.html.SafeHtml.combineAttributes(n, { sandbox: "" }, o)),
      goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse(
        "iframe",
        t,
        s,
      )
    );
  };
  goog.html.SafeHtml.createSandboxIframe = function (t, r, o, s) {
    if (!goog.html.SafeHtml.canUseSandboxIframe())
      throw Error(
        goog.html.SafeHtml.ENABLE_ERROR_MESSAGES
          ? "The browser does not support sandboxed iframes."
          : "",
      );
    var n = {};
    return (
      (n.src = t
        ? goog.html.SafeUrl.unwrap(goog.html.SafeUrl.sanitize(t))
        : null),
      (n.srcdoc = r || null),
      (n.sandbox = ""),
      (t = goog.html.SafeHtml.combineAttributes(n, {}, o)),
      goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse(
        "iframe",
        t,
        s,
      )
    );
  };
  goog.html.SafeHtml.canUseSandboxIframe = function () {
    return (
      goog.global.HTMLIFrameElement &&
      "sandbox" in goog.global.HTMLIFrameElement.prototype
    );
  };
  goog.html.SafeHtml.createScriptSrc = function (t, r) {
    return (
      goog.html.TrustedResourceUrl.unwrap(t),
      (t = goog.html.SafeHtml.combineAttributes({ src: t }, {}, r)),
      goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse(
        "script",
        t,
      )
    );
  };
  goog.html.SafeHtml.createScript = function (t, r) {
    for (var o in r) {
      var s = o.toLowerCase();
      if (s == "language" || s == "src" || s == "text" || s == "type")
        throw Error(
          goog.html.SafeHtml.ENABLE_ERROR_MESSAGES
            ? 'Cannot set "' + s + '" attribute'
            : "",
        );
    }
    for (o = "", t = goog.array.concat(t), s = 0; s < t.length; s++)
      o += goog.html.SafeScript.unwrap(t[s]);
    return (
      (t = goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(
        o,
        goog.i18n.bidi.Dir.NEUTRAL,
      )),
      goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse(
        "script",
        r,
        t,
      )
    );
  };
  goog.html.SafeHtml.createStyle = function (t, r) {
    r = goog.html.SafeHtml.combineAttributes({ type: "text/css" }, {}, r);
    var o = "";
    t = goog.array.concat(t);
    for (var s = 0; s < t.length; s++)
      o += goog.html.SafeStyleSheet.unwrap(t[s]);
    return (
      (t = goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(
        o,
        goog.i18n.bidi.Dir.NEUTRAL,
      )),
      goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse(
        "style",
        r,
        t,
      )
    );
  };
  goog.html.SafeHtml.createMetaRefresh = function (t, r) {
    return (
      (t = goog.html.SafeUrl.unwrap(goog.html.SafeUrl.sanitize(t))),
      (goog.labs.userAgent.browser.isIE() ||
        goog.labs.userAgent.browser.isEdge()) &&
        goog.string.internal.contains(t, ";") &&
        (t = "'" + t.replace(/'/g, "%27") + "'"),
      goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse(
        "meta",
        { "http-equiv": "refresh", content: (r || 0) + "; url=" + t },
      )
    );
  };
  goog.html.SafeHtml.getAttrNameAndValue_ = function (t, r, o) {
    if (o instanceof goog.string.Const) o = goog.string.Const.unwrap(o);
    else if (r.toLowerCase() == "style")
      if (goog.html.SafeHtml.SUPPORT_STYLE_ATTRIBUTE)
        o = goog.html.SafeHtml.getStyleValue_(o);
      else
        throw Error(
          goog.html.SafeHtml.ENABLE_ERROR_MESSAGES
            ? 'Attribute "style" not supported.'
            : "",
        );
    else {
      if (/^on/i.test(r))
        throw Error(
          goog.html.SafeHtml.ENABLE_ERROR_MESSAGES
            ? 'Attribute "' +
                r +
                '" requires goog.string.Const value, "' +
                o +
                '" given.'
            : "",
        );
      if (r.toLowerCase() in goog.html.SafeHtml.URL_ATTRIBUTES_)
        if (o instanceof goog.html.TrustedResourceUrl)
          o = goog.html.TrustedResourceUrl.unwrap(o);
        else if (o instanceof goog.html.SafeUrl)
          o = goog.html.SafeUrl.unwrap(o);
        else if (typeof o == "string")
          o = goog.html.SafeUrl.sanitize(o).getTypedStringValue();
        else
          throw Error(
            goog.html.SafeHtml.ENABLE_ERROR_MESSAGES
              ? 'Attribute "' +
                  r +
                  '" on tag "' +
                  t +
                  '" requires goog.html.SafeUrl, goog.string.Const, or string, value "' +
                  o +
                  '" given.'
              : "",
          );
    }
    return (
      o.implementsGoogStringTypedString && (o = o.getTypedStringValue()),
      goog.asserts.assert(
        typeof o == "string" || typeof o == "number",
        "String or number value expected, got " +
          typeof o +
          " with value: " +
          o,
      ),
      r + '="' + goog.string.internal.htmlEscape(String(o)) + '"'
    );
  };
  goog.html.SafeHtml.getStyleValue_ = function (t) {
    if (!goog.isObject(t))
      throw Error(
        goog.html.SafeHtml.ENABLE_ERROR_MESSAGES
          ? 'The "style" attribute requires goog.html.SafeStyle or map of style properties, ' +
              typeof t +
              " given: " +
              t
          : "",
      );
    return (
      t instanceof goog.html.SafeStyle || (t = goog.html.SafeStyle.create(t)),
      goog.html.SafeStyle.unwrap(t)
    );
  };
  goog.html.SafeHtml.createWithDir = function (t, r, o, s) {
    return (r = goog.html.SafeHtml.create(r, o, s)), (r.dir_ = t), r;
  };
  goog.html.SafeHtml.join = function (t, r) {
    t = goog.html.SafeHtml.htmlEscape(t);
    var o = t.getDirection(),
      s = [],
      n = function (i) {
        Array.isArray(i)
          ? goog.array.forEach(i, n)
          : ((i = goog.html.SafeHtml.htmlEscape(i)),
            s.push(goog.html.SafeHtml.unwrap(i)),
            (i = i.getDirection()),
            o == goog.i18n.bidi.Dir.NEUTRAL
              ? (o = i)
              : i != goog.i18n.bidi.Dir.NEUTRAL && o != i && (o = null));
      };
    return (
      goog.array.forEach(r, n),
      goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(
        s.join(goog.html.SafeHtml.unwrap(t)),
        o,
      )
    );
  };
  goog.html.SafeHtml.concat = function (t) {
    return goog.html.SafeHtml.join(
      goog.html.SafeHtml.EMPTY,
      Array.prototype.slice.call(arguments),
    );
  };
  goog.html.SafeHtml.concatWithDir = function (t, r) {
    var o = goog.html.SafeHtml.concat(goog.array.slice(arguments, 1));
    return (o.dir_ = t), o;
  };
  goog.html.SafeHtml.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {};
  goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse = function (
    t,
    r,
  ) {
    return new goog.html.SafeHtml().initSecurityPrivateDoNotAccessOrElse_(t, r);
  };
  goog.html.SafeHtml.prototype.initSecurityPrivateDoNotAccessOrElse_ =
    function (t, r) {
      return (
        (this.privateDoNotAccessOrElseSafeHtmlWrappedValue_ = goog.html
          .trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY
          ? goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY.createHTML(
              t,
            )
          : t),
        (this.dir_ = r),
        this
      );
    };
  goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse =
    function (t, r, o) {
      var s = null,
        n = "<" + t + goog.html.SafeHtml.stringifyAttributes(t, r);
      return (
        o == null ? (o = []) : Array.isArray(o) || (o = [o]),
        goog.dom.tags.isVoidTag(t.toLowerCase())
          ? (goog.asserts.assert(
              !o.length,
              "Void tag <" + t + "> does not allow content.",
            ),
            (n += ">"))
          : ((s = goog.html.SafeHtml.concat(o)),
            (n += ">" + goog.html.SafeHtml.unwrap(s) + "</" + t + ">"),
            (s = s.getDirection())),
        (t = r && r.dir) &&
          (s = /^(ltr|rtl|auto)$/i.test(t) ? goog.i18n.bidi.Dir.NEUTRAL : null),
        goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(n, s)
      );
    };
  goog.html.SafeHtml.stringifyAttributes = function (t, r) {
    var o = "";
    if (r)
      for (var s in r) {
        if (!goog.html.SafeHtml.VALID_NAMES_IN_TAG_.test(s))
          throw Error(
            goog.html.SafeHtml.ENABLE_ERROR_MESSAGES
              ? 'Invalid attribute name "' + s + '".'
              : "",
          );
        var n = r[s];
        n != null &&
          (o += " " + goog.html.SafeHtml.getAttrNameAndValue_(t, s, n));
      }
    return o;
  };
  goog.html.SafeHtml.combineAttributes = function (t, r, o) {
    var s = {},
      n;
    for (n in t)
      goog.asserts.assert(n.toLowerCase() == n, "Must be lower case"),
        (s[n] = t[n]);
    for (n in r)
      goog.asserts.assert(n.toLowerCase() == n, "Must be lower case"),
        (s[n] = r[n]);
    if (o)
      for (n in o) {
        var i = n.toLowerCase();
        if (i in t)
          throw Error(
            goog.html.SafeHtml.ENABLE_ERROR_MESSAGES
              ? 'Cannot override "' +
                  i +
                  '" attribute, got "' +
                  n +
                  '" with value "' +
                  o[n] +
                  '"'
              : "",
          );
        i in r && delete s[i], (s[n] = o[n]);
      }
    return s;
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
  goog.html.SafeHtml.BR =
    goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(
      "<br>",
      goog.i18n.bidi.Dir.NEUTRAL,
    );
  goog.html.uncheckedconversions = {};
  goog.html.uncheckedconversions.safeHtmlFromStringKnownToSatisfyTypeContract =
    function (t, r, o) {
      return (
        goog.asserts.assertString(
          goog.string.Const.unwrap(t),
          "must provide justification",
        ),
        goog.asserts.assert(
          !goog.string.internal.isEmptyOrWhitespace(
            goog.string.Const.unwrap(t),
          ),
          "must provide non-empty justification",
        ),
        goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(
          r,
          o || null,
        )
      );
    };
  goog.html.uncheckedconversions.safeScriptFromStringKnownToSatisfyTypeContract =
    function (t, r) {
      return (
        goog.asserts.assertString(
          goog.string.Const.unwrap(t),
          "must provide justification",
        ),
        goog.asserts.assert(
          !goog.string.internal.isEmptyOrWhitespace(
            goog.string.Const.unwrap(t),
          ),
          "must provide non-empty justification",
        ),
        goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(r)
      );
    };
  goog.html.uncheckedconversions.safeStyleFromStringKnownToSatisfyTypeContract =
    function (t, r) {
      return (
        goog.asserts.assertString(
          goog.string.Const.unwrap(t),
          "must provide justification",
        ),
        goog.asserts.assert(
          !goog.string.internal.isEmptyOrWhitespace(
            goog.string.Const.unwrap(t),
          ),
          "must provide non-empty justification",
        ),
        goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(r)
      );
    };
  goog.html.uncheckedconversions.safeStyleSheetFromStringKnownToSatisfyTypeContract =
    function (t, r) {
      return (
        goog.asserts.assertString(
          goog.string.Const.unwrap(t),
          "must provide justification",
        ),
        goog.asserts.assert(
          !goog.string.internal.isEmptyOrWhitespace(
            goog.string.Const.unwrap(t),
          ),
          "must provide non-empty justification",
        ),
        goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(
          r,
        )
      );
    };
  goog.html.uncheckedconversions.safeUrlFromStringKnownToSatisfyTypeContract =
    function (t, r) {
      return (
        goog.asserts.assertString(
          goog.string.Const.unwrap(t),
          "must provide justification",
        ),
        goog.asserts.assert(
          !goog.string.internal.isEmptyOrWhitespace(
            goog.string.Const.unwrap(t),
          ),
          "must provide non-empty justification",
        ),
        goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(r)
      );
    };
  goog.html.uncheckedconversions.trustedResourceUrlFromStringKnownToSatisfyTypeContract =
    function (t, r) {
      return (
        goog.asserts.assertString(
          goog.string.Const.unwrap(t),
          "must provide justification",
        ),
        goog.asserts.assert(
          !goog.string.internal.isEmptyOrWhitespace(
            goog.string.Const.unwrap(t),
          ),
          "must provide non-empty justification",
        ),
        goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(
          r,
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
  goog.dom.safe.insertAdjacentHtml = function (t, r, o) {
    t.insertAdjacentHTML(r, goog.html.SafeHtml.unwrapTrustedHTML(o));
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
      var t = document.createElement("div"),
        r = document.createElement("div");
      return (
        r.appendChild(document.createElement("div")),
        t.appendChild(r),
        goog.DEBUG && !t.firstChild
          ? !1
          : ((r = t.firstChild.firstChild),
            (t.innerHTML = goog.html.SafeHtml.unwrapTrustedHTML(
              goog.html.SafeHtml.EMPTY,
            )),
            !r.parentElement)
      );
    },
  );
  goog.dom.safe.unsafeSetInnerHtmlDoNotUseOrElse = function (t, r) {
    if (goog.dom.safe.isInnerHtmlCleanupRecursive_())
      for (; t.lastChild; ) t.removeChild(t.lastChild);
    t.innerHTML = goog.html.SafeHtml.unwrapTrustedHTML(r);
  };
  goog.dom.safe.setInnerHtml = function (t, r) {
    if (goog.asserts.ENABLE_ASSERTS) {
      var o = t.tagName.toUpperCase();
      if (goog.dom.safe.SET_INNER_HTML_DISALLOWED_TAGS_[o])
        throw Error(
          "goog.dom.safe.setInnerHtml cannot be used to set content of " +
            t.tagName +
            ".",
        );
    }
    goog.dom.safe.unsafeSetInnerHtmlDoNotUseOrElse(t, r);
  };
  goog.dom.safe.setOuterHtml = function (t, r) {
    t.outerHTML = goog.html.SafeHtml.unwrapTrustedHTML(r);
  };
  goog.dom.safe.setFormElementAction = function (t, r) {
    (r =
      r instanceof goog.html.SafeUrl
        ? r
        : goog.html.SafeUrl.sanitizeAssertUnchanged(r)),
      (goog.dom.asserts.assertIsHTMLFormElement(t).action =
        goog.html.SafeUrl.unwrap(r));
  };
  goog.dom.safe.setButtonFormAction = function (t, r) {
    (r =
      r instanceof goog.html.SafeUrl
        ? r
        : goog.html.SafeUrl.sanitizeAssertUnchanged(r)),
      (goog.dom.asserts.assertIsHTMLButtonElement(t).formAction =
        goog.html.SafeUrl.unwrap(r));
  };
  goog.dom.safe.setInputFormAction = function (t, r) {
    (r =
      r instanceof goog.html.SafeUrl
        ? r
        : goog.html.SafeUrl.sanitizeAssertUnchanged(r)),
      (goog.dom.asserts.assertIsHTMLInputElement(t).formAction =
        goog.html.SafeUrl.unwrap(r));
  };
  goog.dom.safe.setStyle = function (t, r) {
    t.style.cssText = goog.html.SafeStyle.unwrap(r);
  };
  goog.dom.safe.documentWrite = function (t, r) {
    t.write(goog.html.SafeHtml.unwrapTrustedHTML(r));
  };
  goog.dom.safe.setAnchorHref = function (t, r) {
    goog.dom.asserts.assertIsHTMLAnchorElement(t),
      (r =
        r instanceof goog.html.SafeUrl
          ? r
          : goog.html.SafeUrl.sanitizeAssertUnchanged(r)),
      (t.href = goog.html.SafeUrl.unwrap(r));
  };
  goog.dom.safe.setImageSrc = function (t, r) {
    if (
      (goog.dom.asserts.assertIsHTMLImageElement(t),
      !(r instanceof goog.html.SafeUrl))
    ) {
      var o = /^data:image\//i.test(r);
      r = goog.html.SafeUrl.sanitizeAssertUnchanged(r, o);
    }
    t.src = goog.html.SafeUrl.unwrap(r);
  };
  goog.dom.safe.setAudioSrc = function (t, r) {
    if (
      (goog.dom.asserts.assertIsHTMLAudioElement(t),
      !(r instanceof goog.html.SafeUrl))
    ) {
      var o = /^data:audio\//i.test(r);
      r = goog.html.SafeUrl.sanitizeAssertUnchanged(r, o);
    }
    t.src = goog.html.SafeUrl.unwrap(r);
  };
  goog.dom.safe.setVideoSrc = function (t, r) {
    if (
      (goog.dom.asserts.assertIsHTMLVideoElement(t),
      !(r instanceof goog.html.SafeUrl))
    ) {
      var o = /^data:video\//i.test(r);
      r = goog.html.SafeUrl.sanitizeAssertUnchanged(r, o);
    }
    t.src = goog.html.SafeUrl.unwrap(r);
  };
  goog.dom.safe.setEmbedSrc = function (t, r) {
    goog.dom.asserts.assertIsHTMLEmbedElement(t),
      (t.src = goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(r));
  };
  goog.dom.safe.setFrameSrc = function (t, r) {
    goog.dom.asserts.assertIsHTMLFrameElement(t),
      (t.src = goog.html.TrustedResourceUrl.unwrap(r));
  };
  goog.dom.safe.setIframeSrc = function (t, r) {
    goog.dom.asserts.assertIsHTMLIFrameElement(t),
      (t.src = goog.html.TrustedResourceUrl.unwrap(r));
  };
  goog.dom.safe.setIframeSrcdoc = function (t, r) {
    goog.dom.asserts.assertIsHTMLIFrameElement(t),
      (t.srcdoc = goog.html.SafeHtml.unwrapTrustedHTML(r));
  };
  goog.dom.safe.setLinkHrefAndRel = function (t, r, o) {
    goog.dom.asserts.assertIsHTMLLinkElement(t),
      (t.rel = o),
      goog.string.internal.caseInsensitiveContains(o, "stylesheet")
        ? (goog.asserts.assert(
            r instanceof goog.html.TrustedResourceUrl,
            'URL must be TrustedResourceUrl because "rel" contains "stylesheet"',
          ),
          (t.href = goog.html.TrustedResourceUrl.unwrap(r)))
        : (t.href =
            r instanceof goog.html.TrustedResourceUrl
              ? goog.html.TrustedResourceUrl.unwrap(r)
              : r instanceof goog.html.SafeUrl
                ? goog.html.SafeUrl.unwrap(r)
                : goog.html.SafeUrl.unwrap(
                    goog.html.SafeUrl.sanitizeAssertUnchanged(r),
                  ));
  };
  goog.dom.safe.setObjectData = function (t, r) {
    goog.dom.asserts.assertIsHTMLObjectElement(t),
      (t.data = goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(r));
  };
  goog.dom.safe.setScriptSrc = function (t, r) {
    goog.dom.asserts.assertIsHTMLScriptElement(t),
      (t.src = goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(r)),
      (r = goog.getScriptNonce()) && t.setAttribute("nonce", r);
  };
  goog.dom.safe.setScriptContent = function (t, r) {
    goog.dom.asserts.assertIsHTMLScriptElement(t),
      (t.text = goog.html.SafeScript.unwrapTrustedScript(r)),
      (r = goog.getScriptNonce()) && t.setAttribute("nonce", r);
  };
  goog.dom.safe.setLocationHref = function (t, r) {
    goog.dom.asserts.assertIsLocation(t),
      (r =
        r instanceof goog.html.SafeUrl
          ? r
          : goog.html.SafeUrl.sanitizeAssertUnchanged(r)),
      (t.href = goog.html.SafeUrl.unwrap(r));
  };
  goog.dom.safe.assignLocation = function (t, r) {
    goog.dom.asserts.assertIsLocation(t),
      (r =
        r instanceof goog.html.SafeUrl
          ? r
          : goog.html.SafeUrl.sanitizeAssertUnchanged(r)),
      t.assign(goog.html.SafeUrl.unwrap(r));
  };
  goog.dom.safe.replaceLocation = function (t, r) {
    (r =
      r instanceof goog.html.SafeUrl
        ? r
        : goog.html.SafeUrl.sanitizeAssertUnchanged(r)),
      t.replace(goog.html.SafeUrl.unwrap(r));
  };
  goog.dom.safe.openInWindow = function (t, r, o, s, n) {
    return (
      (t =
        t instanceof goog.html.SafeUrl
          ? t
          : goog.html.SafeUrl.sanitizeAssertUnchanged(t)),
      (r = r || goog.global),
      (o =
        o instanceof goog.string.Const ? goog.string.Const.unwrap(o) : o || ""),
      r.open(goog.html.SafeUrl.unwrap(t), o, s, n)
    );
  };
  goog.dom.safe.parseFromStringHtml = function (t, r) {
    return goog.dom.safe.parseFromString(t, r, "text/html");
  };
  goog.dom.safe.parseFromString = function (t, r, o) {
    return t.parseFromString(goog.html.SafeHtml.unwrapTrustedHTML(r), o);
  };
  goog.dom.safe.createImageFromBlob = function (t) {
    if (!/^image\/.*/g.test(t.type))
      throw Error(
        "goog.dom.safe.createImageFromBlob only accepts MIME type image/.*.",
      );
    var r = goog.global.URL.createObjectURL(t);
    return (
      (t = new goog.global.Image()),
      (t.onload = function () {
        goog.global.URL.revokeObjectURL(r);
      }),
      goog.dom.safe.setImageSrc(
        t,
        goog.html.uncheckedconversions.safeUrlFromStringKnownToSatisfyTypeContract(
          goog.string.Const.from("Image blob URL."),
          r,
        ),
      ),
      t
    );
  };
  goog.string.DETECT_DOUBLE_ESCAPING = !1;
  goog.string.FORCE_NON_DOM_HTML_UNESCAPING = !1;
  goog.string.Unicode = { NBSP: " " };
  goog.string.startsWith = goog.string.internal.startsWith;
  goog.string.endsWith = goog.string.internal.endsWith;
  goog.string.caseInsensitiveStartsWith =
    goog.string.internal.caseInsensitiveStartsWith;
  goog.string.caseInsensitiveEndsWith =
    goog.string.internal.caseInsensitiveEndsWith;
  goog.string.caseInsensitiveEquals =
    goog.string.internal.caseInsensitiveEquals;
  goog.string.subs = function (t, r) {
    for (
      var o = t.split("%s"),
        s = "",
        n = Array.prototype.slice.call(arguments, 1);
      n.length && 1 < o.length;
    )
      s += o.shift() + n.shift();
    return s + o.join("%s");
  };
  goog.string.collapseWhitespace = function (t) {
    return t.replace(/[\s\xa0]+/g, " ").replace(/^\s+|\s+$/g, "");
  };
  goog.string.isEmptyOrWhitespace = goog.string.internal.isEmptyOrWhitespace;
  goog.string.isEmptyString = function (t) {
    return t.length == 0;
  };
  goog.string.isEmpty = goog.string.isEmptyOrWhitespace;
  goog.string.isEmptyOrWhitespaceSafe = function (t) {
    return goog.string.isEmptyOrWhitespace(goog.string.makeSafe(t));
  };
  goog.string.isEmptySafe = goog.string.isEmptyOrWhitespaceSafe;
  goog.string.isBreakingWhitespace = function (t) {
    return !/[^\t\n\r ]/.test(t);
  };
  goog.string.isAlpha = function (t) {
    return !/[^a-zA-Z]/.test(t);
  };
  goog.string.isNumeric = function (t) {
    return !/[^0-9]/.test(t);
  };
  goog.string.isAlphaNumeric = function (t) {
    return !/[^a-zA-Z0-9]/.test(t);
  };
  goog.string.isSpace = function (t) {
    return t == " ";
  };
  goog.string.isUnicodeChar = function (t) {
    return (t.length == 1 && " " <= t && "~" >= t) || ("" <= t && "�" >= t);
  };
  goog.string.stripNewlines = function (t) {
    return t.replace(/(\r\n|\r|\n)+/g, " ");
  };
  goog.string.canonicalizeNewlines = function (t) {
    return t.replace(
      /(\r\n|\r|\n)/g,
      `
`,
    );
  };
  goog.string.normalizeWhitespace = function (t) {
    return t.replace(/\xa0|\s/g, " ");
  };
  goog.string.normalizeSpaces = function (t) {
    return t.replace(/\xa0|[ \t]+/g, " ");
  };
  goog.string.collapseBreakingSpaces = function (t) {
    return t
      .replace(/[\t\r\n ]+/g, " ")
      .replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "");
  };
  goog.string.trim = goog.string.internal.trim;
  goog.string.trimLeft = function (t) {
    return t.replace(/^[\s\xa0]+/, "");
  };
  goog.string.trimRight = function (t) {
    return t.replace(/[\s\xa0]+$/, "");
  };
  goog.string.caseInsensitiveCompare =
    goog.string.internal.caseInsensitiveCompare;
  goog.string.numberAwareCompare_ = function (t, r, o) {
    if (t == r) return 0;
    if (!t) return -1;
    if (!r) return 1;
    for (
      var s = t.toLowerCase().match(o),
        n = r.toLowerCase().match(o),
        i = Math.min(s.length, n.length),
        p = 0;
      p < i;
      p++
    ) {
      o = s[p];
      var _ = n[p];
      if (o != _)
        return (
          (t = parseInt(o, 10)),
          !isNaN(t) && ((r = parseInt(_, 10)), !isNaN(r) && t - r)
            ? t - r
            : o < _
              ? -1
              : 1
        );
    }
    return s.length != n.length ? s.length - n.length : t < r ? -1 : 1;
  };
  goog.string.intAwareCompare = function (t, r) {
    return goog.string.numberAwareCompare_(t, r, /\d+|\D+/g);
  };
  goog.string.floatAwareCompare = function (t, r) {
    return goog.string.numberAwareCompare_(t, r, /\d+|\.\d+|\D+/g);
  };
  goog.string.numerateCompare = goog.string.floatAwareCompare;
  goog.string.urlEncode = function (t) {
    return encodeURIComponent(String(t));
  };
  goog.string.urlDecode = function (t) {
    return decodeURIComponent(t.replace(/\+/g, " "));
  };
  goog.string.newLineToBr = goog.string.internal.newLineToBr;
  goog.string.htmlEscape = function (t, r) {
    return (
      (t = goog.string.internal.htmlEscape(t, r)),
      goog.string.DETECT_DOUBLE_ESCAPING &&
        (t = t.replace(goog.string.E_RE_, "&#101;")),
      t
    );
  };
  goog.string.E_RE_ = /e/g;
  goog.string.unescapeEntities = function (t) {
    return goog.string.contains(t, "&")
      ? !goog.string.FORCE_NON_DOM_HTML_UNESCAPING && "document" in goog.global
        ? goog.string.unescapeEntitiesUsingDom_(t)
        : goog.string.unescapePureXmlEntities_(t)
      : t;
  };
  goog.string.unescapeEntitiesWithDocument = function (t, r) {
    return goog.string.contains(t, "&")
      ? goog.string.unescapeEntitiesUsingDom_(t, r)
      : t;
  };
  goog.string.unescapeEntitiesUsingDom_ = function (t, r) {
    var o = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"' },
      s = r
        ? r.createElement("div")
        : goog.global.document.createElement("div");
    return t.replace(goog.string.HTML_ENTITY_PATTERN_, function (n, i) {
      var p = o[n];
      return (
        p ||
        (i.charAt(0) == "#" &&
          ((i = +("0" + i.substr(1))),
          isNaN(i) || (p = String.fromCharCode(i))),
        p ||
          (goog.dom.safe.setInnerHtml(
            s,
            goog.html.uncheckedconversions.safeHtmlFromStringKnownToSatisfyTypeContract(
              goog.string.Const.from("Single HTML entity."),
              n + " ",
            ),
          ),
          (p = s.firstChild.nodeValue.slice(0, -1))),
        (o[n] = p))
      );
    });
  };
  goog.string.unescapePureXmlEntities_ = function (t) {
    return t.replace(/&([^;]+);/g, function (r, o) {
      switch (o) {
        case "amp":
          return "&";
        case "lt":
          return "<";
        case "gt":
          return ">";
        case "quot":
          return '"';
        default:
          return o.charAt(0) != "#" || ((o = +("0" + o.substr(1))), isNaN(o))
            ? r
            : String.fromCharCode(o);
      }
    });
  };
  goog.string.HTML_ENTITY_PATTERN_ = /&([^;\s<&]+);?/g;
  goog.string.whitespaceEscape = function (t, r) {
    return goog.string.newLineToBr(t.replace(/  /g, " &#160;"), r);
  };
  goog.string.preserveSpaces = function (t) {
    return t.replace(/(^|[\n ]) /g, "$1" + goog.string.Unicode.NBSP);
  };
  goog.string.stripQuotes = function (t, r) {
    for (var o = r.length, s = 0; s < o; s++) {
      var n = o == 1 ? r : r.charAt(s);
      if (t.charAt(0) == n && t.charAt(t.length - 1) == n)
        return t.substring(1, t.length - 1);
    }
    return t;
  };
  goog.string.truncate = function (t, r, o) {
    return (
      o && (t = goog.string.unescapeEntities(t)),
      t.length > r && (t = t.substring(0, r - 3) + "..."),
      o && (t = goog.string.htmlEscape(t)),
      t
    );
  };
  goog.string.truncateMiddle = function (t, r, o, s) {
    if ((o && (t = goog.string.unescapeEntities(t)), s && t.length > r)) {
      s > r && (s = r);
      var n = t.length - s;
      t = t.substring(0, r - s) + "..." + t.substring(n);
    } else
      t.length > r &&
        ((s = Math.floor(r / 2)),
        (n = t.length - s),
        (t = t.substring(0, s + (r % 2)) + "..." + t.substring(n)));
    return o && (t = goog.string.htmlEscape(t)), t;
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
  goog.string.jsEscapeCache_ = { "'": "\\'" };
  goog.string.quote = function (t) {
    t = String(t);
    for (var r = ['"'], o = 0; o < t.length; o++) {
      var s = t.charAt(o),
        n = s.charCodeAt(0);
      r[o + 1] =
        goog.string.specialEscapeChars_[s] ||
        (31 < n && 127 > n ? s : goog.string.escapeChar(s));
    }
    return r.push('"'), r.join("");
  };
  goog.string.escapeString = function (t) {
    for (var r = [], o = 0; o < t.length; o++)
      r[o] = goog.string.escapeChar(t.charAt(o));
    return r.join("");
  };
  goog.string.escapeChar = function (t) {
    if (t in goog.string.jsEscapeCache_) return goog.string.jsEscapeCache_[t];
    if (t in goog.string.specialEscapeChars_)
      return (goog.string.jsEscapeCache_[t] =
        goog.string.specialEscapeChars_[t]);
    var r = t.charCodeAt(0);
    if (31 < r && 127 > r) var o = t;
    else
      256 > r
        ? ((o = "\\x"), (16 > r || 256 < r) && (o += "0"))
        : ((o = "\\u"), 4096 > r && (o += "0")),
        (o += r.toString(16).toUpperCase());
    return (goog.string.jsEscapeCache_[t] = o);
  };
  goog.string.contains = goog.string.internal.contains;
  goog.string.caseInsensitiveContains =
    goog.string.internal.caseInsensitiveContains;
  goog.string.countOf = function (t, r) {
    return t && r ? t.split(r).length - 1 : 0;
  };
  goog.string.removeAt = function (t, r, o) {
    var s = t;
    return (
      0 <= r &&
        r < t.length &&
        0 < o &&
        (s = t.substr(0, r) + t.substr(r + o, t.length - r - o)),
      s
    );
  };
  goog.string.remove = function (t, r) {
    return t.replace(r, "");
  };
  goog.string.removeAll = function (t, r) {
    return (r = new RegExp(goog.string.regExpEscape(r), "g")), t.replace(r, "");
  };
  goog.string.replaceAll = function (t, r, o) {
    return (
      (r = new RegExp(goog.string.regExpEscape(r), "g")),
      t.replace(r, o.replace(/\$/g, "$$$$"))
    );
  };
  goog.string.regExpEscape = function (t) {
    return String(t)
      .replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1")
      .replace(/\x08/g, "\\x08");
  };
  goog.string.repeat = String.prototype.repeat
    ? function (t, r) {
        return t.repeat(r);
      }
    : function (t, r) {
        return Array(r + 1).join(t);
      };
  goog.string.padNumber = function (t, r, o) {
    return (
      (t = o !== void 0 ? t.toFixed(o) : String(t)),
      (o = t.indexOf(".")),
      o == -1 && (o = t.length),
      goog.string.repeat("0", Math.max(0, r - o)) + t
    );
  };
  goog.string.makeSafe = function (t) {
    return t == null ? "" : String(t);
  };
  goog.string.buildString = function (t) {
    return Array.prototype.join.call(arguments, "");
  };
  goog.string.getRandomString = function () {
    return (
      Math.floor(2147483648 * Math.random()).toString(36) +
      Math.abs(Math.floor(2147483648 * Math.random()) ^ goog.now()).toString(36)
    );
  };
  goog.string.compareVersions = goog.string.internal.compareVersions;
  goog.string.hashCode = function (t) {
    for (var r = 0, o = 0; o < t.length; ++o)
      r = (31 * r + t.charCodeAt(o)) >>> 0;
    return r;
  };
  goog.string.uniqueStringCounter_ = (2147483648 * Math.random()) | 0;
  goog.string.createUniqueString = function () {
    return "goog_" + goog.string.uniqueStringCounter_++;
  };
  goog.string.toNumber = function (t) {
    var r = Number(t);
    return r == 0 && goog.string.isEmptyOrWhitespace(t) ? NaN : r;
  };
  goog.string.isLowerCamelCase = function (t) {
    return /^[a-z]+([A-Z][a-z]*)*$/.test(t);
  };
  goog.string.isUpperCamelCase = function (t) {
    return /^([A-Z][a-z]*)+$/.test(t);
  };
  goog.string.toCamelCase = function (t) {
    return String(t).replace(/\-([a-z])/g, function (r, o) {
      return o.toUpperCase();
    });
  };
  goog.string.toSelectorCase = function (t) {
    return String(t)
      .replace(/([A-Z])/g, "-$1")
      .toLowerCase();
  };
  goog.string.toTitleCase = function (t, r) {
    return (
      (r = typeof r == "string" ? goog.string.regExpEscape(r) : "\\s"),
      t.replace(
        new RegExp("(^" + (r ? "|[" + r + "]+" : "") + ")([a-z])", "g"),
        function (o, s, n) {
          return s + n.toUpperCase();
        },
      )
    );
  };
  goog.string.capitalize = function (t) {
    return (
      String(t.charAt(0)).toUpperCase() + String(t.substr(1)).toLowerCase()
    );
  };
  goog.string.parseInt = function (t) {
    return (
      isFinite(t) && (t = String(t)),
      typeof t == "string"
        ? /^\s*-?0x/i.test(t)
          ? parseInt(t, 16)
          : parseInt(t, 10)
        : NaN
    );
  };
  goog.string.splitLimit = function (t, r, o) {
    t = t.split(r);
    for (var s = []; 0 < o && t.length; ) s.push(t.shift()), o--;
    return t.length && s.push(t.join(r)), s;
  };
  goog.string.lastComponent = function (t, r) {
    if (r) typeof r == "string" && (r = [r]);
    else return t;
    for (var o = -1, s = 0; s < r.length; s++)
      if (r[s] != "") {
        var n = t.lastIndexOf(r[s]);
        n > o && (o = n);
      }
    return o == -1 ? t : t.slice(o + 1);
  };
  goog.string.editDistance = function (t, r) {
    var o = [],
      s = [];
    if (t == r) return 0;
    if (!t.length || !r.length) return Math.max(t.length, r.length);
    for (var n = 0; n < r.length + 1; n++) o[n] = n;
    for (n = 0; n < t.length; n++) {
      s[0] = n + 1;
      for (var i = 0; i < r.length; i++)
        s[i + 1] = Math.min(s[i] + 1, o[i + 1] + 1, o[i] + +(t[n] != r[i]));
      for (i = 0; i < o.length; i++) o[i] = s[i];
    }
    return s[r.length];
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
    var t = goog.labs.userAgent.util.getUserAgent();
    if (t) {
      t = goog.labs.userAgent.util.extractVersionTuples(t);
      var r = goog.labs.userAgent.engine.getEngineTuple_(t);
      if (r)
        return r[0] == "Gecko"
          ? goog.labs.userAgent.engine.getVersionForKey_(t, "Firefox")
          : r[1];
      t = t[0];
      var o;
      if (t && (o = t[2]) && (o = /Trident\/([^\s;]+)/.exec(o))) return o[1];
    }
    return "";
  };
  goog.labs.userAgent.engine.getEngineTuple_ = function (t) {
    if (!goog.labs.userAgent.engine.isEdge()) return t[1];
    for (var r = 0; r < t.length; r++) {
      var o = t[r];
      if (o[0] == "Edge") return o;
    }
  };
  goog.labs.userAgent.engine.isVersionOrHigher = function (t) {
    return (
      0 <=
      goog.string.compareVersions(goog.labs.userAgent.engine.getVersion(), t)
    );
  };
  goog.labs.userAgent.engine.getVersionForKey_ = function (t, r) {
    return (
      ((t = goog.array.find(t, function (o) {
        return r == o[0];
      })) &&
        t[1]) ||
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
    var t = goog.labs.userAgent.util.getUserAgent(),
      r = "";
    return (
      goog.labs.userAgent.platform.isWindows()
        ? ((r = /Windows (?:NT|Phone) ([0-9.]+)/),
          (r = (t = r.exec(t)) ? t[1] : "0.0"))
        : goog.labs.userAgent.platform.isIos()
          ? ((r = /(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/),
            (r = (t = r.exec(t)) && t[1].replace(/_/g, ".")))
          : goog.labs.userAgent.platform.isMacintosh()
            ? ((r = /Mac OS X ([0-9_.]+)/),
              (r = (t = r.exec(t)) ? t[1].replace(/_/g, ".") : "10"))
            : goog.labs.userAgent.platform.isKaiOS()
              ? ((r = /(?:KaiOS)\/(\S+)/i), (r = (t = r.exec(t)) && t[1]))
              : goog.labs.userAgent.platform.isAndroid()
                ? ((r = /Android\s+([^\);]+)(\)|;)/),
                  (r = (t = r.exec(t)) && t[1]))
                : goog.labs.userAgent.platform.isChromeOS() &&
                  ((r = /(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/),
                  (r = (t = r.exec(t)) && t[1])),
      r || ""
    );
  };
  goog.labs.userAgent.platform.isVersionOrHigher = function (t) {
    return (
      0 <=
      goog.string.compareVersions(goog.labs.userAgent.platform.getVersion(), t)
    );
  };
  goog.reflect = {};
  goog.reflect.object = function (t, r) {
    return r;
  };
  goog.reflect.objectProperty = function (t, r) {
    return t;
  };
  goog.reflect.sinkValue = function (t) {
    return goog.reflect.sinkValue[" "](t), t;
  };
  goog.reflect.sinkValue[" "] = goog.nullFunction;
  goog.reflect.canAccessProperty = function (t, r) {
    try {
      return goog.reflect.sinkValue(t[r]), !0;
    } catch {}
    return !1;
  };
  goog.reflect.cache = function (t, r, o, s) {
    return (
      (s = s ? s(r) : r),
      Object.prototype.hasOwnProperty.call(t, s) ? t[s] : (t[s] = o(r))
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
  goog.userAgent.IE = goog.userAgent.BROWSER_KNOWN_
    ? goog.userAgent.ASSUME_IE
    : goog.labs.userAgent.browser.isIE();
  goog.userAgent.EDGE = goog.userAgent.BROWSER_KNOWN_
    ? goog.userAgent.ASSUME_EDGE
    : goog.labs.userAgent.engine.isEdge();
  goog.userAgent.EDGE_OR_IE = goog.userAgent.EDGE || goog.userAgent.IE;
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
    var t = goog.userAgent.getNavigatorTyped();
    return (t && t.platform) || "";
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
    var t = goog.userAgent.getNavigatorTyped();
    return !!t && goog.string.contains(t.appVersion || "", "X11");
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
    var t = "",
      r = goog.userAgent.getVersionRegexResult_();
    return (
      r && (t = r ? r[1] : ""),
      goog.userAgent.IE &&
      ((r = goog.userAgent.getDocumentMode_()), r != null && r > parseFloat(t))
        ? String(r)
        : t
    );
  };
  goog.userAgent.getVersionRegexResult_ = function () {
    var t = goog.userAgent.getUserAgentString();
    if (goog.userAgent.GECKO) return /rv:([^\);]+)(\)|;)/.exec(t);
    if (goog.userAgent.EDGE) return /Edge\/([\d\.]+)/.exec(t);
    if (goog.userAgent.IE) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);
    if (goog.userAgent.WEBKIT) return /WebKit\/(\S+)/.exec(t);
    if (goog.userAgent.OPERA) return /(?:Version)[ \/]?(\S+)/.exec(t);
  };
  goog.userAgent.getDocumentMode_ = function () {
    var t = goog.global.document;
    return t ? t.documentMode : void 0;
  };
  goog.userAgent.VERSION = goog.userAgent.determineVersion_();
  goog.userAgent.compare = function (t, r) {
    return goog.string.compareVersions(t, r);
  };
  goog.userAgent.isVersionOrHigherCache_ = {};
  goog.userAgent.isVersionOrHigher = function (t) {
    return (
      goog.userAgent.ASSUME_ANY_VERSION ||
      goog.reflect.cache(
        goog.userAgent.isVersionOrHigherCache_,
        t,
        function () {
          return 0 <= goog.string.compareVersions(goog.userAgent.VERSION, t);
        },
      )
    );
  };
  goog.userAgent.isVersion = goog.userAgent.isVersionOrHigher;
  goog.userAgent.isDocumentModeOrHigher = function (t) {
    return Number(goog.userAgent.DOCUMENT_MODE) >= t;
  };
  goog.userAgent.isDocumentMode = goog.userAgent.isDocumentModeOrHigher;
  goog.userAgent.DOCUMENT_MODE = (function () {
    if (goog.global.document && goog.userAgent.IE) {
      var t = goog.userAgent.getDocumentMode_();
      return t || parseInt(goog.userAgent.VERSION, 10) || void 0;
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
  goog.userAgent.product.IE = goog.userAgent.IE;
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
  goog.crypt.base64.isPadding_ = function (t) {
    return goog.string.contains(goog.crypt.base64.paddingChars_, t);
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
      !goog.userAgent.IE &&
      typeof goog.global.atob == "function");
  goog.crypt.base64.encodeByteArray = function (t, r) {
    goog.asserts.assert(
      goog.isArrayLike(t),
      "encodeByteArray takes an array as a parameter",
    ),
      r === void 0 && (r = goog.crypt.base64.Alphabet.DEFAULT),
      goog.crypt.base64.init_(),
      (r = goog.crypt.base64.byteToCharMaps_[r]);
    for (var o = [], s = 0; s < t.length; s += 3) {
      var n = t[s],
        i = s + 1 < t.length,
        p = i ? t[s + 1] : 0,
        _ = s + 2 < t.length,
        m = _ ? t[s + 2] : 0,
        A = n >> 2;
      (n = ((n & 3) << 4) | (p >> 4)),
        (p = ((p & 15) << 2) | (m >> 6)),
        (m &= 63),
        _ || ((m = 64), i || (p = 64)),
        o.push(r[A], r[n], r[p] || "", r[m] || "");
    }
    return o.join("");
  };
  goog.crypt.base64.encodeString = function (t, r) {
    return goog.crypt.base64.HAS_NATIVE_ENCODE_ && !r
      ? goog.global.btoa(t)
      : goog.crypt.base64.encodeByteArray(goog.crypt.stringToByteArray(t), r);
  };
  goog.crypt.base64.decodeString = function (t, r) {
    if (goog.crypt.base64.HAS_NATIVE_DECODE_ && !r) return goog.global.atob(t);
    var o = "";
    return (
      goog.crypt.base64.decodeStringInternal_(t, function (s) {
        o += String.fromCharCode(s);
      }),
      o
    );
  };
  goog.crypt.base64.decodeStringToByteArray = function (t, r) {
    var o = [];
    return (
      goog.crypt.base64.decodeStringInternal_(t, function (s) {
        o.push(s);
      }),
      o
    );
  };
  goog.crypt.base64.decodeStringToUint8Array = function (t) {
    goog.asserts.assert(
      !goog.userAgent.IE || goog.userAgent.isVersionOrHigher("10"),
      "Browser does not support typed arrays",
    );
    var r = t.length,
      o = (3 * r) / 4;
    o % 3
      ? (o = Math.floor(o))
      : goog.crypt.base64.isPadding_(t[r - 1]) &&
        (o = goog.crypt.base64.isPadding_(t[r - 2]) ? o - 2 : o - 1);
    var s = new Uint8Array(o),
      n = 0;
    return (
      goog.crypt.base64.decodeStringInternal_(t, function (i) {
        s[n++] = i;
      }),
      s.subarray(0, n)
    );
  };
  goog.crypt.base64.decodeStringInternal_ = function (t, r) {
    function o(m) {
      for (; s < t.length; ) {
        var A = t.charAt(s++),
          M = goog.crypt.base64.charToByteMap_[A];
        if (M != null) return M;
        if (!goog.string.isEmptyOrWhitespace(A))
          throw Error("Unknown base64 encoding at char: " + A);
      }
      return m;
    }
    goog.crypt.base64.init_();
    for (var s = 0; ; ) {
      var n = o(-1),
        i = o(0),
        p = o(64),
        _ = o(64);
      if (_ === 64 && n === -1) break;
      r((n << 2) | (i >> 4)),
        p != 64 &&
          (r(((i << 4) & 240) | (p >> 2)), _ != 64 && r(((p << 6) & 192) | _));
    }
  };
  goog.crypt.base64.init_ = function () {
    if (!goog.crypt.base64.charToByteMap_) {
      goog.crypt.base64.charToByteMap_ = {};
      for (
        var t = goog.crypt.base64.DEFAULT_ALPHABET_COMMON_.split(""),
          r = ["+/=", "+/", "-_=", "-_.", "-_"],
          o = 0;
        5 > o;
        o++
      ) {
        var s = t.concat(r[o].split(""));
        goog.crypt.base64.byteToCharMaps_[o] = s;
        for (var n = 0; n < s.length; n++) {
          var i = s[n],
            p = goog.crypt.base64.charToByteMap_[i];
          p === void 0
            ? (goog.crypt.base64.charToByteMap_[i] = n)
            : goog.asserts.assert(p === n);
        }
      }
    }
  };
  jspb.utils = {};
  jspb.utils.split64Low = 0;
  jspb.utils.split64High = 0;
  jspb.utils.splitUint64 = function (t) {
    var r = t >>> 0;
    (t = Math.floor((t - r) / jspb.BinaryConstants.TWO_TO_32) >>> 0),
      (jspb.utils.split64Low = r),
      (jspb.utils.split64High = t);
  };
  jspb.utils.splitInt64 = function (t) {
    var r = 0 > t;
    t = Math.abs(t);
    var o = t >>> 0;
    (t = Math.floor((t - o) / jspb.BinaryConstants.TWO_TO_32)),
      (t >>>= 0),
      r &&
        ((t = ~t >>> 0),
        (o = (~o >>> 0) + 1),
        4294967295 < o && ((o = 0), t++, 4294967295 < t && (t = 0))),
      (jspb.utils.split64Low = o),
      (jspb.utils.split64High = t);
  };
  jspb.utils.splitZigzag64 = function (t) {
    var r = 0 > t;
    (t = 2 * Math.abs(t)),
      jspb.utils.splitUint64(t),
      (t = jspb.utils.split64Low);
    var o = jspb.utils.split64High;
    r &&
      (t == 0
        ? o == 0
          ? (o = t = 4294967295)
          : (o--, (t = 4294967295))
        : t--),
      (jspb.utils.split64Low = t),
      (jspb.utils.split64High = o);
  };
  jspb.utils.splitFloat32 = function (t) {
    var r = 0 > t ? 1 : 0;
    if (((t = r ? -t : t), t === 0))
      0 < 1 / t
        ? ((jspb.utils.split64High = 0), (jspb.utils.split64Low = 0))
        : ((jspb.utils.split64High = 0), (jspb.utils.split64Low = 2147483648));
    else if (isNaN(t))
      (jspb.utils.split64High = 0), (jspb.utils.split64Low = 2147483647);
    else if (t > jspb.BinaryConstants.FLOAT32_MAX)
      (jspb.utils.split64High = 0),
        (jspb.utils.split64Low = ((r << 31) | 2139095040) >>> 0);
    else if (t < jspb.BinaryConstants.FLOAT32_MIN)
      (t = Math.round(t / Math.pow(2, -149))),
        (jspb.utils.split64High = 0),
        (jspb.utils.split64Low = ((r << 31) | t) >>> 0);
    else {
      var o = Math.floor(Math.log(t) / Math.LN2);
      (t *= Math.pow(2, -o)),
        (t = Math.round(t * jspb.BinaryConstants.TWO_TO_23)),
        16777216 <= t && ++o,
        (jspb.utils.split64High = 0),
        (jspb.utils.split64Low =
          ((r << 31) | ((o + 127) << 23) | (t & 8388607)) >>> 0);
    }
  };
  jspb.utils.splitFloat64 = function (t) {
    var r = 0 > t ? 1 : 0;
    if (((t = r ? -t : t), t === 0))
      (jspb.utils.split64High = 0 < 1 / t ? 0 : 2147483648),
        (jspb.utils.split64Low = 0);
    else if (isNaN(t))
      (jspb.utils.split64High = 2147483647),
        (jspb.utils.split64Low = 4294967295);
    else if (t > jspb.BinaryConstants.FLOAT64_MAX)
      (jspb.utils.split64High = ((r << 31) | 2146435072) >>> 0),
        (jspb.utils.split64Low = 0);
    else if (t < jspb.BinaryConstants.FLOAT64_MIN) {
      var o = t / Math.pow(2, -1074);
      (t = o / jspb.BinaryConstants.TWO_TO_32),
        (jspb.utils.split64High = ((r << 31) | t) >>> 0),
        (jspb.utils.split64Low = o >>> 0);
    } else {
      o = t;
      var s = 0;
      if (2 <= o) for (; 2 <= o && 1023 > s; ) s++, (o /= 2);
      else for (; 1 > o && -1022 < s; ) (o *= 2), s--;
      (o = t * Math.pow(2, -s)),
        (t = (o * jspb.BinaryConstants.TWO_TO_20) & 1048575),
        (o = (o * jspb.BinaryConstants.TWO_TO_52) >>> 0),
        (jspb.utils.split64High = ((r << 31) | ((s + 1023) << 20) | t) >>> 0),
        (jspb.utils.split64Low = o);
    }
  };
  jspb.utils.splitHash64 = function (t) {
    var r = t.charCodeAt(0),
      o = t.charCodeAt(1),
      s = t.charCodeAt(2),
      n = t.charCodeAt(3),
      i = t.charCodeAt(4),
      p = t.charCodeAt(5),
      _ = t.charCodeAt(6);
    (t = t.charCodeAt(7)),
      (jspb.utils.split64Low = (r + (o << 8) + (s << 16) + (n << 24)) >>> 0),
      (jspb.utils.split64High = (i + (p << 8) + (_ << 16) + (t << 24)) >>> 0);
  };
  jspb.utils.joinUint64 = function (t, r) {
    return r * jspb.BinaryConstants.TWO_TO_32 + (t >>> 0);
  };
  jspb.utils.joinInt64 = function (t, r) {
    var o = r & 2147483648;
    return (
      o &&
        ((t = (~t + 1) >>> 0), (r = ~r >>> 0), t == 0 && (r = (r + 1) >>> 0)),
      (t = jspb.utils.joinUint64(t, r)),
      o ? -t : t
    );
  };
  jspb.utils.toZigzag64 = function (t, r, o) {
    var s = r >> 31;
    return o((t << 1) ^ s, ((r << 1) | (t >>> 31)) ^ s);
  };
  jspb.utils.joinZigzag64 = function (t, r) {
    return jspb.utils.fromZigzag64(t, r, jspb.utils.joinInt64);
  };
  jspb.utils.fromZigzag64 = function (t, r, o) {
    var s = -(t & 1);
    return o(((t >>> 1) | (r << 31)) ^ s, (r >>> 1) ^ s);
  };
  jspb.utils.joinFloat32 = function (t, r) {
    r = 2 * (t >> 31) + 1;
    var o = (t >>> 23) & 255;
    return (
      (t &= 8388607),
      o == 255
        ? t
          ? NaN
          : (1 / 0) * r
        : o == 0
          ? r * Math.pow(2, -149) * t
          : r * Math.pow(2, o - 150) * (t + Math.pow(2, 23))
    );
  };
  jspb.utils.joinFloat64 = function (t, r) {
    var o = 2 * (r >> 31) + 1,
      s = (r >>> 20) & 2047;
    return (
      (t = jspb.BinaryConstants.TWO_TO_32 * (r & 1048575) + t),
      s == 2047
        ? t
          ? NaN
          : (1 / 0) * o
        : s == 0
          ? o * Math.pow(2, -1074) * t
          : o * Math.pow(2, s - 1075) * (t + jspb.BinaryConstants.TWO_TO_52)
    );
  };
  jspb.utils.joinHash64 = function (t, r) {
    return String.fromCharCode(
      (t >>> 0) & 255,
      (t >>> 8) & 255,
      (t >>> 16) & 255,
      (t >>> 24) & 255,
      (r >>> 0) & 255,
      (r >>> 8) & 255,
      (r >>> 16) & 255,
      (r >>> 24) & 255,
    );
  };
  jspb.utils.DIGITS = "0123456789abcdef".split("");
  jspb.utils.ZERO_CHAR_CODE_ = 48;
  jspb.utils.A_CHAR_CODE_ = 97;
  jspb.utils.joinUnsignedDecimalString = function (t, r) {
    function o(n, i) {
      return (n = n ? String(n) : ""), i ? "0000000".slice(n.length) + n : n;
    }
    if (2097151 >= r) return "" + jspb.utils.joinUint64(t, r);
    var s = (((t >>> 24) | (r << 8)) >>> 0) & 16777215;
    return (
      (r = (r >> 16) & 65535),
      (t = (t & 16777215) + 6777216 * s + 6710656 * r),
      (s += 8147497 * r),
      (r *= 2),
      1e7 <= t && ((s += Math.floor(t / 1e7)), (t %= 1e7)),
      1e7 <= s && ((r += Math.floor(s / 1e7)), (s %= 1e7)),
      o(r, 0) + o(s, r) + o(t, 1)
    );
  };
  jspb.utils.joinSignedDecimalString = function (t, r) {
    var o = r & 2147483648;
    return (
      o && ((t = (~t + 1) >>> 0), (r = (~r + (t == 0 ? 1 : 0)) >>> 0)),
      (t = jspb.utils.joinUnsignedDecimalString(t, r)),
      o ? "-" + t : t
    );
  };
  jspb.utils.hash64ToDecimalString = function (t, r) {
    jspb.utils.splitHash64(t), (t = jspb.utils.split64Low);
    var o = jspb.utils.split64High;
    return r
      ? jspb.utils.joinSignedDecimalString(t, o)
      : jspb.utils.joinUnsignedDecimalString(t, o);
  };
  jspb.utils.hash64ArrayToDecimalStrings = function (t, r) {
    for (var o = Array(t.length), s = 0; s < t.length; s++)
      o[s] = jspb.utils.hash64ToDecimalString(t[s], r);
    return o;
  };
  jspb.utils.decimalStringToHash64 = function (t) {
    function r(p, _) {
      for (var m = 0; 8 > m && (p !== 1 || 0 < _); m++)
        (_ = p * n[m] + _), (n[m] = _ & 255), (_ >>>= 8);
    }
    function o() {
      for (var p = 0; 8 > p; p++) n[p] = ~n[p] & 255;
    }
    jspb.asserts.assert(0 < t.length);
    var s = !1;
    t[0] === "-" && ((s = !0), (t = t.slice(1)));
    for (var n = [0, 0, 0, 0, 0, 0, 0, 0], i = 0; i < t.length; i++)
      r(10, t.charCodeAt(i) - jspb.utils.ZERO_CHAR_CODE_);
    return s && (o(), r(1, 1)), goog.crypt.byteArrayToString(n);
  };
  jspb.utils.splitDecimalString = function (t) {
    jspb.utils.splitHash64(jspb.utils.decimalStringToHash64(t));
  };
  jspb.utils.toHexDigit_ = function (t) {
    return String.fromCharCode(
      10 > t
        ? jspb.utils.ZERO_CHAR_CODE_ + t
        : jspb.utils.A_CHAR_CODE_ - 10 + t,
    );
  };
  jspb.utils.fromHexCharCode_ = function (t) {
    return t >= jspb.utils.A_CHAR_CODE_
      ? t - jspb.utils.A_CHAR_CODE_ + 10
      : t - jspb.utils.ZERO_CHAR_CODE_;
  };
  jspb.utils.hash64ToHexString = function (t) {
    var r = Array(18);
    (r[0] = "0"), (r[1] = "x");
    for (var o = 0; 8 > o; o++) {
      var s = t.charCodeAt(7 - o);
      (r[2 * o + 2] = jspb.utils.toHexDigit_(s >> 4)),
        (r[2 * o + 3] = jspb.utils.toHexDigit_(s & 15));
    }
    return r.join("");
  };
  jspb.utils.hexStringToHash64 = function (t) {
    (t = t.toLowerCase()),
      jspb.asserts.assert(t.length == 18),
      jspb.asserts.assert(t[0] == "0"),
      jspb.asserts.assert(t[1] == "x");
    for (var r = "", o = 0; 8 > o; o++) {
      var s = jspb.utils.fromHexCharCode_(t.charCodeAt(2 * o + 2)),
        n = jspb.utils.fromHexCharCode_(t.charCodeAt(2 * o + 3));
      r = String.fromCharCode(16 * s + n) + r;
    }
    return r;
  };
  jspb.utils.hash64ToNumber = function (t, r) {
    jspb.utils.splitHash64(t), (t = jspb.utils.split64Low);
    var o = jspb.utils.split64High;
    return r ? jspb.utils.joinInt64(t, o) : jspb.utils.joinUint64(t, o);
  };
  jspb.utils.numberToHash64 = function (t) {
    return (
      jspb.utils.splitInt64(t),
      jspb.utils.joinHash64(jspb.utils.split64Low, jspb.utils.split64High)
    );
  };
  jspb.utils.countVarints = function (t, r, o) {
    for (var s = 0, n = r; n < o; n++) s += t[n] >> 7;
    return o - r - s;
  };
  jspb.utils.countVarintFields = function (t, r, o, s) {
    var n = 0;
    if (((s = 8 * s + jspb.BinaryConstants.WireType.VARINT), 128 > s))
      for (; r < o && t[r++] == s; )
        for (n++; ; ) {
          var i = t[r++];
          if (!(i & 128)) break;
        }
    else
      for (; r < o; ) {
        for (i = s; 128 < i; ) {
          if (t[r] != ((i & 127) | 128)) return n;
          r++, (i >>= 7);
        }
        if (t[r++] != i) break;
        for (n++; (i = t[r++]), (i & 128) != 0; );
      }
    return n;
  };
  jspb.utils.countFixedFields_ = function (t, r, o, s, n) {
    var i = 0;
    if (128 > s) for (; r < o && t[r++] == s; ) i++, (r += n);
    else
      for (; r < o; ) {
        for (var p = s; 128 < p; ) {
          if (t[r++] != ((p & 127) | 128)) return i;
          p >>= 7;
        }
        if (t[r++] != p) break;
        i++, (r += n);
      }
    return i;
  };
  jspb.utils.countFixed32Fields = function (t, r, o, s) {
    return jspb.utils.countFixedFields_(
      t,
      r,
      o,
      8 * s + jspb.BinaryConstants.WireType.FIXED32,
      4,
    );
  };
  jspb.utils.countFixed64Fields = function (t, r, o, s) {
    return jspb.utils.countFixedFields_(
      t,
      r,
      o,
      8 * s + jspb.BinaryConstants.WireType.FIXED64,
      8,
    );
  };
  jspb.utils.countDelimitedFields = function (t, r, o, s) {
    var n = 0;
    for (s = 8 * s + jspb.BinaryConstants.WireType.DELIMITED; r < o; ) {
      for (var i = s; 128 < i; ) {
        if (t[r++] != ((i & 127) | 128)) return n;
        i >>= 7;
      }
      if (t[r++] != i) break;
      n++;
      for (
        var p = 0, _ = 1;
        (i = t[r++]), (p += (i & 127) * _), (_ *= 128), (i & 128) != 0;
      );
      r += p;
    }
    return n;
  };
  jspb.utils.debugBytesToTextFormat = function (t) {
    var r = '"';
    if (t) {
      t = jspb.utils.byteSourceToUint8Array(t);
      for (var o = 0; o < t.length; o++)
        (r += "\\x"), 16 > t[o] && (r += "0"), (r += t[o].toString(16));
    }
    return r + '"';
  };
  jspb.utils.debugScalarToTextFormat = function (t) {
    return typeof t == "string" ? goog.string.quote(t) : t.toString();
  };
  jspb.utils.stringToByteArray = function (t) {
    for (var r = new Uint8Array(t.length), o = 0; o < t.length; o++) {
      var s = t.charCodeAt(o);
      if (255 < s)
        throw Error(
          "Conversion error: string contains codepoint outside of byte range",
        );
      r[o] = s;
    }
    return r;
  };
  jspb.utils.byteSourceToUint8Array = function (t) {
    return t.constructor === Uint8Array
      ? t
      : t.constructor === ArrayBuffer || t.constructor === Array
        ? new Uint8Array(t)
        : t.constructor === String
          ? goog.crypt.base64.decodeStringToUint8Array(t)
          : t instanceof Uint8Array
            ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength)
            : (jspb.asserts.fail("Type not convertible to Uint8Array."),
              new Uint8Array(0));
  };
  jspb.BinaryDecoder = function (t, r, o) {
    (this.bytes_ = null),
      (this.cursor_ = this.end_ = this.start_ = 0),
      (this.error_ = !1),
      t && this.setBlock(t, r, o);
  };
  jspb.BinaryDecoder.instanceCache_ = [];
  jspb.BinaryDecoder.alloc = function (t, r, o) {
    if (jspb.BinaryDecoder.instanceCache_.length) {
      var s = jspb.BinaryDecoder.instanceCache_.pop();
      return t && s.setBlock(t, r, o), s;
    }
    return new jspb.BinaryDecoder(t, r, o);
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
  jspb.BinaryDecoder.prototype.setBlock = function (t, r, o) {
    (this.bytes_ = jspb.utils.byteSourceToUint8Array(t)),
      (this.start_ = r !== void 0 ? r : 0),
      (this.end_ = o !== void 0 ? this.start_ + o : this.bytes_.length),
      (this.cursor_ = this.start_);
  };
  jspb.BinaryDecoder.prototype.getEnd = function () {
    return this.end_;
  };
  jspb.BinaryDecoder.prototype.setEnd = function (t) {
    this.end_ = t;
  };
  jspb.BinaryDecoder.prototype.reset = function () {
    this.cursor_ = this.start_;
  };
  jspb.BinaryDecoder.prototype.getCursor = function () {
    return this.cursor_;
  };
  jspb.BinaryDecoder.prototype.setCursor = function (t) {
    this.cursor_ = t;
  };
  jspb.BinaryDecoder.prototype.advance = function (t) {
    (this.cursor_ += t), jspb.asserts.assert(this.cursor_ <= this.end_);
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
  jspb.BinaryDecoder.prototype.readSplitVarint64 = function (t) {
    for (var r = 128, o = 0, s = 0, n = 0; 4 > n && 128 <= r; n++)
      (r = this.bytes_[this.cursor_++]), (o |= (r & 127) << (7 * n));
    if (
      (128 <= r &&
        ((r = this.bytes_[this.cursor_++]),
        (o |= (r & 127) << 28),
        (s |= (r & 127) >> 4)),
      128 <= r)
    )
      for (n = 0; 5 > n && 128 <= r; n++)
        (r = this.bytes_[this.cursor_++]), (s |= (r & 127) << (7 * n + 3));
    if (128 > r) return t(o >>> 0, s >>> 0);
    jspb.asserts.fail("Failed to read varint, encoding is invalid."),
      (this.error_ = !0);
  };
  jspb.BinaryDecoder.prototype.readSplitZigzagVarint64 = function (t) {
    return this.readSplitVarint64(function (r, o) {
      return jspb.utils.fromZigzag64(r, o, t);
    });
  };
  jspb.BinaryDecoder.prototype.readSplitFixed64 = function (t) {
    var r = this.bytes_,
      o = this.cursor_;
    this.cursor_ += 8;
    for (var s = 0, n = 0, i = o + 7; i >= o; i--)
      (s = (s << 8) | r[i]), (n = (n << 8) | r[i + 4]);
    return t(s, n);
  };
  jspb.BinaryDecoder.prototype.skipVarint = function () {
    for (; this.bytes_[this.cursor_] & 128; ) this.cursor_++;
    this.cursor_++;
  };
  jspb.BinaryDecoder.prototype.unskipVarint = function (t) {
    for (; 128 < t; ) this.cursor_--, (t >>>= 7);
    this.cursor_--;
  };
  jspb.BinaryDecoder.prototype.readUnsignedVarint32 = function () {
    var t = this.bytes_,
      r = t[this.cursor_ + 0],
      o = r & 127;
    return 128 > r
      ? ((this.cursor_ += 1), jspb.asserts.assert(this.cursor_ <= this.end_), o)
      : ((r = t[this.cursor_ + 1]),
        (o |= (r & 127) << 7),
        128 > r
          ? ((this.cursor_ += 2),
            jspb.asserts.assert(this.cursor_ <= this.end_),
            o)
          : ((r = t[this.cursor_ + 2]),
            (o |= (r & 127) << 14),
            128 > r
              ? ((this.cursor_ += 3),
                jspb.asserts.assert(this.cursor_ <= this.end_),
                o)
              : ((r = t[this.cursor_ + 3]),
                (o |= (r & 127) << 21),
                128 > r
                  ? ((this.cursor_ += 4),
                    jspb.asserts.assert(this.cursor_ <= this.end_),
                    o)
                  : ((r = t[this.cursor_ + 4]),
                    (o |= (r & 15) << 28),
                    128 > r
                      ? ((this.cursor_ += 5),
                        jspb.asserts.assert(this.cursor_ <= this.end_),
                        o >>> 0)
                      : ((this.cursor_ += 5),
                        128 <= t[this.cursor_++] &&
                          128 <= t[this.cursor_++] &&
                          128 <= t[this.cursor_++] &&
                          128 <= t[this.cursor_++] &&
                          128 <= t[this.cursor_++] &&
                          jspb.asserts.assert(!1),
                        jspb.asserts.assert(this.cursor_ <= this.end_),
                        o)))));
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
    var t = this.readUnsignedVarint32();
    return (t >>> 1) ^ -(t & 1);
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
    var t = this.bytes_[this.cursor_ + 0];
    return (
      (this.cursor_ += 1), jspb.asserts.assert(this.cursor_ <= this.end_), t
    );
  };
  jspb.BinaryDecoder.prototype.readUint16 = function () {
    var t = this.bytes_[this.cursor_ + 0],
      r = this.bytes_[this.cursor_ + 1];
    return (
      (this.cursor_ += 2),
      jspb.asserts.assert(this.cursor_ <= this.end_),
      (t << 0) | (r << 8)
    );
  };
  jspb.BinaryDecoder.prototype.readUint32 = function () {
    var t = this.bytes_[this.cursor_ + 0],
      r = this.bytes_[this.cursor_ + 1],
      o = this.bytes_[this.cursor_ + 2],
      s = this.bytes_[this.cursor_ + 3];
    return (
      (this.cursor_ += 4),
      jspb.asserts.assert(this.cursor_ <= this.end_),
      ((t << 0) | (r << 8) | (o << 16) | (s << 24)) >>> 0
    );
  };
  jspb.BinaryDecoder.prototype.readUint64 = function () {
    var t = this.readUint32(),
      r = this.readUint32();
    return jspb.utils.joinUint64(t, r);
  };
  jspb.BinaryDecoder.prototype.readUint64String = function () {
    var t = this.readUint32(),
      r = this.readUint32();
    return jspb.utils.joinUnsignedDecimalString(t, r);
  };
  jspb.BinaryDecoder.prototype.readInt8 = function () {
    var t = this.bytes_[this.cursor_ + 0];
    return (
      (this.cursor_ += 1),
      jspb.asserts.assert(this.cursor_ <= this.end_),
      (t << 24) >> 24
    );
  };
  jspb.BinaryDecoder.prototype.readInt16 = function () {
    var t = this.bytes_[this.cursor_ + 0],
      r = this.bytes_[this.cursor_ + 1];
    return (
      (this.cursor_ += 2),
      jspb.asserts.assert(this.cursor_ <= this.end_),
      (((t << 0) | (r << 8)) << 16) >> 16
    );
  };
  jspb.BinaryDecoder.prototype.readInt32 = function () {
    var t = this.bytes_[this.cursor_ + 0],
      r = this.bytes_[this.cursor_ + 1],
      o = this.bytes_[this.cursor_ + 2],
      s = this.bytes_[this.cursor_ + 3];
    return (
      (this.cursor_ += 4),
      jspb.asserts.assert(this.cursor_ <= this.end_),
      (t << 0) | (r << 8) | (o << 16) | (s << 24)
    );
  };
  jspb.BinaryDecoder.prototype.readInt64 = function () {
    var t = this.readUint32(),
      r = this.readUint32();
    return jspb.utils.joinInt64(t, r);
  };
  jspb.BinaryDecoder.prototype.readInt64String = function () {
    var t = this.readUint32(),
      r = this.readUint32();
    return jspb.utils.joinSignedDecimalString(t, r);
  };
  jspb.BinaryDecoder.prototype.readFloat = function () {
    var t = this.readUint32();
    return jspb.utils.joinFloat32(t, 0);
  };
  jspb.BinaryDecoder.prototype.readDouble = function () {
    var t = this.readUint32(),
      r = this.readUint32();
    return jspb.utils.joinFloat64(t, r);
  };
  jspb.BinaryDecoder.prototype.readBool = function () {
    return !!this.bytes_[this.cursor_++];
  };
  jspb.BinaryDecoder.prototype.readEnum = function () {
    return this.readSignedVarint32();
  };
  jspb.BinaryDecoder.prototype.readString = function (t) {
    var r = this.bytes_,
      o = this.cursor_;
    t = o + t;
    for (var s = [], n = ""; o < t; ) {
      var i = r[o++];
      if (128 > i) s.push(i);
      else {
        if (192 > i) continue;
        if (224 > i) {
          var p = r[o++];
          s.push(((i & 31) << 6) | (p & 63));
        } else if (240 > i) {
          p = r[o++];
          var _ = r[o++];
          s.push(((i & 15) << 12) | ((p & 63) << 6) | (_ & 63));
        } else if (248 > i) {
          (p = r[o++]), (_ = r[o++]);
          var m = r[o++];
          (i = ((i & 7) << 18) | ((p & 63) << 12) | ((_ & 63) << 6) | (m & 63)),
            (i -= 65536),
            s.push(((i >> 10) & 1023) + 55296, (i & 1023) + 56320);
        }
      }
      8192 <= s.length &&
        ((n += String.fromCharCode.apply(null, s)), (s.length = 0));
    }
    return (n += goog.crypt.byteArrayToString(s)), (this.cursor_ = o), n;
  };
  jspb.BinaryDecoder.prototype.readStringWithLength = function () {
    var t = this.readUnsignedVarint32();
    return this.readString(t);
  };
  jspb.BinaryDecoder.prototype.readBytes = function (t) {
    if (0 > t || this.cursor_ + t > this.bytes_.length)
      return (
        (this.error_ = !0),
        jspb.asserts.fail("Invalid byte length!"),
        new Uint8Array(0)
      );
    var r = this.bytes_.subarray(this.cursor_, this.cursor_ + t);
    return (
      (this.cursor_ += t), jspb.asserts.assert(this.cursor_ <= this.end_), r
    );
  };
  jspb.BinaryDecoder.prototype.readVarintHash64 = function () {
    return this.readSplitVarint64(jspb.utils.joinHash64);
  };
  jspb.BinaryDecoder.prototype.readFixedHash64 = function () {
    var t = this.bytes_,
      r = this.cursor_,
      o = t[r + 0],
      s = t[r + 1],
      n = t[r + 2],
      i = t[r + 3],
      p = t[r + 4],
      _ = t[r + 5],
      m = t[r + 6];
    return (
      (t = t[r + 7]),
      (this.cursor_ += 8),
      String.fromCharCode(o, s, n, i, p, _, m, t)
    );
  };
  jspb.BinaryReader = function (t, r, o) {
    (this.decoder_ = jspb.BinaryDecoder.alloc(t, r, o)),
      (this.fieldCursor_ = this.decoder_.getCursor()),
      (this.nextField_ = jspb.BinaryConstants.INVALID_FIELD_NUMBER),
      (this.nextWireType_ = jspb.BinaryConstants.WireType.INVALID),
      (this.error_ = !1),
      (this.readCallbacks_ = null);
  };
  jspb.BinaryReader.instanceCache_ = [];
  jspb.BinaryReader.alloc = function (t, r, o) {
    if (jspb.BinaryReader.instanceCache_.length) {
      var s = jspb.BinaryReader.instanceCache_.pop();
      return t && s.decoder_.setBlock(t, r, o), s;
    }
    return new jspb.BinaryReader(t, r, o);
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
  jspb.BinaryReader.prototype.setBlock = function (t, r, o) {
    this.decoder_.setBlock(t, r, o),
      (this.nextField_ = jspb.BinaryConstants.INVALID_FIELD_NUMBER),
      (this.nextWireType_ = jspb.BinaryConstants.WireType.INVALID);
  };
  jspb.BinaryReader.prototype.reset = function () {
    this.decoder_.reset(),
      (this.nextField_ = jspb.BinaryConstants.INVALID_FIELD_NUMBER),
      (this.nextWireType_ = jspb.BinaryConstants.WireType.INVALID);
  };
  jspb.BinaryReader.prototype.advance = function (t) {
    this.decoder_.advance(t);
  };
  jspb.BinaryReader.prototype.nextField = function () {
    if (this.decoder_.atEnd()) return !1;
    if (this.getError()) return jspb.asserts.fail("Decoder hit an error"), !1;
    this.fieldCursor_ = this.decoder_.getCursor();
    var t = this.decoder_.readUnsignedVarint32(),
      r = t >>> 3;
    return (
      (t &= 7),
      t != jspb.BinaryConstants.WireType.VARINT &&
      t != jspb.BinaryConstants.WireType.FIXED32 &&
      t != jspb.BinaryConstants.WireType.FIXED64 &&
      t != jspb.BinaryConstants.WireType.DELIMITED &&
      t != jspb.BinaryConstants.WireType.START_GROUP &&
      t != jspb.BinaryConstants.WireType.END_GROUP
        ? (jspb.asserts.fail(
            "Invalid wire type: %s (at position %s)",
            t,
            this.fieldCursor_,
          ),
          (this.error_ = !0),
          !1)
        : ((this.nextField_ = r), (this.nextWireType_ = t), !0)
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
    var t = this.nextField_;
    for (this.unskipHeader(); this.nextField() && this.getFieldNumber() == t; )
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
      var t = this.decoder_.readUnsignedVarint32();
      this.decoder_.advance(t);
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
    var t = this.nextField_;
    do {
      if (!this.nextField()) {
        jspb.asserts.fail("Unmatched start-group tag: stream EOF"),
          (this.error_ = !0);
        break;
      }
      if (this.nextWireType_ == jspb.BinaryConstants.WireType.END_GROUP) {
        this.nextField_ != t &&
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
  jspb.BinaryReader.prototype.registerReadCallback = function (t, r) {
    this.readCallbacks_ === null && (this.readCallbacks_ = {}),
      jspb.asserts.assert(!this.readCallbacks_[t]),
      (this.readCallbacks_[t] = r);
  };
  jspb.BinaryReader.prototype.runReadCallback = function (t) {
    return (
      jspb.asserts.assert(this.readCallbacks_ !== null),
      (t = this.readCallbacks_[t]),
      jspb.asserts.assert(t),
      t(this)
    );
  };
  jspb.BinaryReader.prototype.readAny = function (t) {
    this.nextWireType_ = jspb.BinaryConstants.FieldTypeToWireType(t);
    var r = jspb.BinaryConstants.FieldType;
    switch (t) {
      case r.DOUBLE:
        return this.readDouble();
      case r.FLOAT:
        return this.readFloat();
      case r.INT64:
        return this.readInt64();
      case r.UINT64:
        return this.readUint64();
      case r.INT32:
        return this.readInt32();
      case r.FIXED64:
        return this.readFixed64();
      case r.FIXED32:
        return this.readFixed32();
      case r.BOOL:
        return this.readBool();
      case r.STRING:
        return this.readString();
      case r.GROUP:
        jspb.asserts.fail("Group field type not supported in readAny()");
      case r.MESSAGE:
        jspb.asserts.fail("Message field type not supported in readAny()");
      case r.BYTES:
        return this.readBytes();
      case r.UINT32:
        return this.readUint32();
      case r.ENUM:
        return this.readEnum();
      case r.SFIXED32:
        return this.readSfixed32();
      case r.SFIXED64:
        return this.readSfixed64();
      case r.SINT32:
        return this.readSint32();
      case r.SINT64:
        return this.readSint64();
      case r.FHASH64:
        return this.readFixedHash64();
      case r.VHASH64:
        return this.readVarintHash64();
      default:
        jspb.asserts.fail("Invalid field type in readAny()");
    }
    return 0;
  };
  jspb.BinaryReader.prototype.readMessage = function (t, r) {
    jspb.asserts.assert(
      this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED,
    );
    var o = this.decoder_.getEnd(),
      s = this.decoder_.readUnsignedVarint32();
    (s = this.decoder_.getCursor() + s),
      this.decoder_.setEnd(s),
      r(t, this),
      this.decoder_.setCursor(s),
      this.decoder_.setEnd(o);
  };
  goog.exportProperty(
    jspb.BinaryReader.prototype,
    "readMessage",
    jspb.BinaryReader.prototype.readMessage,
  );
  jspb.BinaryReader.prototype.readGroup = function (t, r, o) {
    jspb.asserts.assert(
      this.nextWireType_ == jspb.BinaryConstants.WireType.START_GROUP,
    ),
      jspb.asserts.assert(this.nextField_ == t),
      o(r, this),
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
    var t = this.decoder_.readUnsignedVarint32(),
      r = this.decoder_.getCursor(),
      o = r + t;
    return (
      (t = jspb.BinaryDecoder.alloc(this.decoder_.getBuffer(), r, t)),
      this.decoder_.setCursor(o),
      t
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
    var t = this.decoder_.readUnsignedVarint32();
    return this.decoder_.readString(t);
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
    var t = this.decoder_.readUnsignedVarint32();
    return this.decoder_.readBytes(t);
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
  jspb.BinaryReader.prototype.readSplitVarint64 = function (t) {
    return (
      jspb.asserts.assert(
        this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT,
      ),
      this.decoder_.readSplitVarint64(t)
    );
  };
  jspb.BinaryReader.prototype.readSplitZigzagVarint64 = function (t) {
    return (
      jspb.asserts.assert(
        this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT,
      ),
      this.decoder_.readSplitVarint64(function (r, o) {
        return jspb.utils.fromZigzag64(r, o, t);
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
  jspb.BinaryReader.prototype.readSplitFixed64 = function (t) {
    return (
      jspb.asserts.assert(
        this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64,
      ),
      this.decoder_.readSplitFixed64(t)
    );
  };
  jspb.BinaryReader.prototype.readPackedField_ = function (t) {
    jspb.asserts.assert(
      this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED,
    );
    var r = this.decoder_.readUnsignedVarint32();
    r = this.decoder_.getCursor() + r;
    for (var o = []; this.decoder_.getCursor() < r; )
      o.push(t.call(this.decoder_));
    return o;
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
    var t = this.buffer_;
    return (this.buffer_ = []), t;
  };
  jspb.BinaryEncoder.prototype.writeSplitVarint64 = function (t, r) {
    for (
      jspb.asserts.assert(t == Math.floor(t)),
        jspb.asserts.assert(r == Math.floor(r)),
        jspb.asserts.assert(0 <= t && t < jspb.BinaryConstants.TWO_TO_32),
        jspb.asserts.assert(0 <= r && r < jspb.BinaryConstants.TWO_TO_32);
      0 < r || 127 < t;
    )
      this.buffer_.push((t & 127) | 128),
        (t = ((t >>> 7) | (r << 25)) >>> 0),
        (r >>>= 7);
    this.buffer_.push(t);
  };
  jspb.BinaryEncoder.prototype.writeSplitFixed64 = function (t, r) {
    jspb.asserts.assert(t == Math.floor(t)),
      jspb.asserts.assert(r == Math.floor(r)),
      jspb.asserts.assert(0 <= t && t < jspb.BinaryConstants.TWO_TO_32),
      jspb.asserts.assert(0 <= r && r < jspb.BinaryConstants.TWO_TO_32),
      this.writeUint32(t),
      this.writeUint32(r);
  };
  jspb.BinaryEncoder.prototype.writeUnsignedVarint32 = function (t) {
    for (
      jspb.asserts.assert(t == Math.floor(t)),
        jspb.asserts.assert(0 <= t && t < jspb.BinaryConstants.TWO_TO_32);
      127 < t;
    )
      this.buffer_.push((t & 127) | 128), (t >>>= 7);
    this.buffer_.push(t);
  };
  jspb.BinaryEncoder.prototype.writeSignedVarint32 = function (t) {
    if (
      (jspb.asserts.assert(t == Math.floor(t)),
      jspb.asserts.assert(
        t >= -jspb.BinaryConstants.TWO_TO_31 &&
          t < jspb.BinaryConstants.TWO_TO_31,
      ),
      0 <= t)
    )
      this.writeUnsignedVarint32(t);
    else {
      for (var r = 0; 9 > r; r++) this.buffer_.push((t & 127) | 128), (t >>= 7);
      this.buffer_.push(1);
    }
  };
  jspb.BinaryEncoder.prototype.writeUnsignedVarint64 = function (t) {
    jspb.asserts.assert(t == Math.floor(t)),
      jspb.asserts.assert(0 <= t && t < jspb.BinaryConstants.TWO_TO_64),
      jspb.utils.splitInt64(t),
      this.writeSplitVarint64(jspb.utils.split64Low, jspb.utils.split64High);
  };
  jspb.BinaryEncoder.prototype.writeSignedVarint64 = function (t) {
    jspb.asserts.assert(t == Math.floor(t)),
      jspb.asserts.assert(
        t >= -jspb.BinaryConstants.TWO_TO_63 &&
          t < jspb.BinaryConstants.TWO_TO_63,
      ),
      jspb.utils.splitInt64(t),
      this.writeSplitVarint64(jspb.utils.split64Low, jspb.utils.split64High);
  };
  jspb.BinaryEncoder.prototype.writeZigzagVarint32 = function (t) {
    jspb.asserts.assert(t == Math.floor(t)),
      jspb.asserts.assert(
        t >= -jspb.BinaryConstants.TWO_TO_31 &&
          t < jspb.BinaryConstants.TWO_TO_31,
      ),
      this.writeUnsignedVarint32(((t << 1) ^ (t >> 31)) >>> 0);
  };
  jspb.BinaryEncoder.prototype.writeZigzagVarint64 = function (t) {
    jspb.asserts.assert(t == Math.floor(t)),
      jspb.asserts.assert(
        t >= -jspb.BinaryConstants.TWO_TO_63 &&
          t < jspb.BinaryConstants.TWO_TO_63,
      ),
      jspb.utils.splitZigzag64(t),
      this.writeSplitVarint64(jspb.utils.split64Low, jspb.utils.split64High);
  };
  jspb.BinaryEncoder.prototype.writeZigzagVarint64String = function (t) {
    this.writeZigzagVarintHash64(jspb.utils.decimalStringToHash64(t));
  };
  jspb.BinaryEncoder.prototype.writeZigzagVarintHash64 = function (t) {
    var r = this;
    jspb.utils.splitHash64(t),
      jspb.utils.toZigzag64(
        jspb.utils.split64Low,
        jspb.utils.split64High,
        function (o, s) {
          r.writeSplitVarint64(o >>> 0, s >>> 0);
        },
      );
  };
  jspb.BinaryEncoder.prototype.writeUint8 = function (t) {
    jspb.asserts.assert(t == Math.floor(t)),
      jspb.asserts.assert(0 <= t && 256 > t),
      this.buffer_.push((t >>> 0) & 255);
  };
  jspb.BinaryEncoder.prototype.writeUint16 = function (t) {
    jspb.asserts.assert(t == Math.floor(t)),
      jspb.asserts.assert(0 <= t && 65536 > t),
      this.buffer_.push((t >>> 0) & 255),
      this.buffer_.push((t >>> 8) & 255);
  };
  jspb.BinaryEncoder.prototype.writeUint32 = function (t) {
    jspb.asserts.assert(t == Math.floor(t)),
      jspb.asserts.assert(0 <= t && t < jspb.BinaryConstants.TWO_TO_32),
      this.buffer_.push((t >>> 0) & 255),
      this.buffer_.push((t >>> 8) & 255),
      this.buffer_.push((t >>> 16) & 255),
      this.buffer_.push((t >>> 24) & 255);
  };
  jspb.BinaryEncoder.prototype.writeUint64 = function (t) {
    jspb.asserts.assert(t == Math.floor(t)),
      jspb.asserts.assert(0 <= t && t < jspb.BinaryConstants.TWO_TO_64),
      jspb.utils.splitUint64(t),
      this.writeUint32(jspb.utils.split64Low),
      this.writeUint32(jspb.utils.split64High);
  };
  jspb.BinaryEncoder.prototype.writeInt8 = function (t) {
    jspb.asserts.assert(t == Math.floor(t)),
      jspb.asserts.assert(-128 <= t && 128 > t),
      this.buffer_.push((t >>> 0) & 255);
  };
  jspb.BinaryEncoder.prototype.writeInt16 = function (t) {
    jspb.asserts.assert(t == Math.floor(t)),
      jspb.asserts.assert(-32768 <= t && 32768 > t),
      this.buffer_.push((t >>> 0) & 255),
      this.buffer_.push((t >>> 8) & 255);
  };
  jspb.BinaryEncoder.prototype.writeInt32 = function (t) {
    jspb.asserts.assert(t == Math.floor(t)),
      jspb.asserts.assert(
        t >= -jspb.BinaryConstants.TWO_TO_31 &&
          t < jspb.BinaryConstants.TWO_TO_31,
      ),
      this.buffer_.push((t >>> 0) & 255),
      this.buffer_.push((t >>> 8) & 255),
      this.buffer_.push((t >>> 16) & 255),
      this.buffer_.push((t >>> 24) & 255);
  };
  jspb.BinaryEncoder.prototype.writeInt64 = function (t) {
    jspb.asserts.assert(t == Math.floor(t)),
      jspb.asserts.assert(
        t >= -jspb.BinaryConstants.TWO_TO_63 &&
          t < jspb.BinaryConstants.TWO_TO_63,
      ),
      jspb.utils.splitInt64(t),
      this.writeSplitFixed64(jspb.utils.split64Low, jspb.utils.split64High);
  };
  jspb.BinaryEncoder.prototype.writeInt64String = function (t) {
    jspb.asserts.assert(t == Math.floor(t)),
      jspb.asserts.assert(
        +t >= -jspb.BinaryConstants.TWO_TO_63 &&
          +t < jspb.BinaryConstants.TWO_TO_63,
      ),
      jspb.utils.splitHash64(jspb.utils.decimalStringToHash64(t)),
      this.writeSplitFixed64(jspb.utils.split64Low, jspb.utils.split64High);
  };
  jspb.BinaryEncoder.prototype.writeFloat = function (t) {
    jspb.asserts.assert(
      t === 1 / 0 ||
        t === -1 / 0 ||
        isNaN(t) ||
        (t >= -jspb.BinaryConstants.FLOAT32_MAX &&
          t <= jspb.BinaryConstants.FLOAT32_MAX),
    ),
      jspb.utils.splitFloat32(t),
      this.writeUint32(jspb.utils.split64Low);
  };
  jspb.BinaryEncoder.prototype.writeDouble = function (t) {
    jspb.asserts.assert(
      t === 1 / 0 ||
        t === -1 / 0 ||
        isNaN(t) ||
        (t >= -jspb.BinaryConstants.FLOAT64_MAX &&
          t <= jspb.BinaryConstants.FLOAT64_MAX),
    ),
      jspb.utils.splitFloat64(t),
      this.writeUint32(jspb.utils.split64Low),
      this.writeUint32(jspb.utils.split64High);
  };
  jspb.BinaryEncoder.prototype.writeBool = function (t) {
    jspb.asserts.assert(typeof t == "boolean" || typeof t == "number"),
      this.buffer_.push(t ? 1 : 0);
  };
  jspb.BinaryEncoder.prototype.writeEnum = function (t) {
    jspb.asserts.assert(t == Math.floor(t)),
      jspb.asserts.assert(
        t >= -jspb.BinaryConstants.TWO_TO_31 &&
          t < jspb.BinaryConstants.TWO_TO_31,
      ),
      this.writeSignedVarint32(t);
  };
  jspb.BinaryEncoder.prototype.writeBytes = function (t) {
    this.buffer_.push.apply(this.buffer_, t);
  };
  jspb.BinaryEncoder.prototype.writeVarintHash64 = function (t) {
    jspb.utils.splitHash64(t),
      this.writeSplitVarint64(jspb.utils.split64Low, jspb.utils.split64High);
  };
  jspb.BinaryEncoder.prototype.writeFixedHash64 = function (t) {
    jspb.utils.splitHash64(t),
      this.writeUint32(jspb.utils.split64Low),
      this.writeUint32(jspb.utils.split64High);
  };
  jspb.BinaryEncoder.prototype.writeString = function (t) {
    var r = this.buffer_.length;
    jspb.asserts.assertString(t);
    for (var o = 0; o < t.length; o++) {
      var s = t.charCodeAt(o);
      if (128 > s) this.buffer_.push(s);
      else if (2048 > s)
        this.buffer_.push((s >> 6) | 192), this.buffer_.push((s & 63) | 128);
      else if (65536 > s)
        if (55296 <= s && 56319 >= s && o + 1 < t.length) {
          var n = t.charCodeAt(o + 1);
          56320 <= n &&
            57343 >= n &&
            ((s = 1024 * (s - 55296) + n - 56320 + 65536),
            this.buffer_.push((s >> 18) | 240),
            this.buffer_.push(((s >> 12) & 63) | 128),
            this.buffer_.push(((s >> 6) & 63) | 128),
            this.buffer_.push((s & 63) | 128),
            o++);
        } else
          this.buffer_.push((s >> 12) | 224),
            this.buffer_.push(((s >> 6) & 63) | 128),
            this.buffer_.push((s & 63) | 128);
    }
    return this.buffer_.length - r;
  };
  jspb.arith = {};
  jspb.arith.UInt64 = function (t, r) {
    (this.lo = t), (this.hi = r);
  };
  jspb.arith.UInt64.prototype.cmp = function (t) {
    return this.hi < t.hi || (this.hi == t.hi && this.lo < t.lo)
      ? -1
      : this.hi == t.hi && this.lo == t.lo
        ? 0
        : 1;
  };
  jspb.arith.UInt64.prototype.rightShift = function () {
    return new jspb.arith.UInt64(
      ((this.lo >>> 1) | ((this.hi & 1) << 31)) >>> 0,
      (this.hi >>> 1) >>> 0,
    );
  };
  jspb.arith.UInt64.prototype.leftShift = function () {
    return new jspb.arith.UInt64(
      (this.lo << 1) >>> 0,
      ((this.hi << 1) | (this.lo >>> 31)) >>> 0,
    );
  };
  jspb.arith.UInt64.prototype.msb = function () {
    return !!(this.hi & 2147483648);
  };
  jspb.arith.UInt64.prototype.lsb = function () {
    return !!(this.lo & 1);
  };
  jspb.arith.UInt64.prototype.zero = function () {
    return this.lo == 0 && this.hi == 0;
  };
  jspb.arith.UInt64.prototype.add = function (t) {
    return new jspb.arith.UInt64(
      (((this.lo + t.lo) & 4294967295) >>> 0) >>> 0,
      ((((this.hi + t.hi) & 4294967295) >>> 0) +
        (4294967296 <= this.lo + t.lo ? 1 : 0)) >>>
        0,
    );
  };
  jspb.arith.UInt64.prototype.sub = function (t) {
    return new jspb.arith.UInt64(
      (((this.lo - t.lo) & 4294967295) >>> 0) >>> 0,
      ((((this.hi - t.hi) & 4294967295) >>> 0) -
        (0 > this.lo - t.lo ? 1 : 0)) >>>
        0,
    );
  };
  jspb.arith.UInt64.mul32x32 = function (t, r) {
    var o = t & 65535;
    t >>>= 16;
    var s = r & 65535,
      n = r >>> 16;
    for (
      r = o * s + 65536 * ((o * n) & 65535) + 65536 * ((t * s) & 65535),
        o = t * n + ((o * n) >>> 16) + ((t * s) >>> 16);
      4294967296 <= r;
    )
      (r -= 4294967296), (o += 1);
    return new jspb.arith.UInt64(r >>> 0, o >>> 0);
  };
  jspb.arith.UInt64.prototype.mul = function (t) {
    var r = jspb.arith.UInt64.mul32x32(this.lo, t);
    return (
      (t = jspb.arith.UInt64.mul32x32(this.hi, t)),
      (t.hi = t.lo),
      (t.lo = 0),
      r.add(t)
    );
  };
  jspb.arith.UInt64.prototype.div = function (t) {
    if (t == 0) return [];
    var r = new jspb.arith.UInt64(0, 0),
      o = new jspb.arith.UInt64(this.lo, this.hi);
    t = new jspb.arith.UInt64(t, 0);
    for (var s = new jspb.arith.UInt64(1, 0); !t.msb(); )
      (t = t.leftShift()), (s = s.leftShift());
    for (; !s.zero(); )
      0 >= t.cmp(o) && ((r = r.add(s)), (o = o.sub(t))),
        (t = t.rightShift()),
        (s = s.rightShift());
    return [r, o];
  };
  jspb.arith.UInt64.prototype.toString = function () {
    for (var t = "", r = this; !r.zero(); ) {
      r = r.div(10);
      var o = r[0];
      (t = r[1].lo + t), (r = o);
    }
    return t == "" && (t = "0"), t;
  };
  jspb.arith.UInt64.fromString = function (t) {
    for (
      var r = new jspb.arith.UInt64(0, 0),
        o = new jspb.arith.UInt64(0, 0),
        s = 0;
      s < t.length;
      s++
    ) {
      if ("0" > t[s] || "9" < t[s]) return null;
      var n = parseInt(t[s], 10);
      (o.lo = n), (r = r.mul(10).add(o));
    }
    return r;
  };
  jspb.arith.UInt64.prototype.clone = function () {
    return new jspb.arith.UInt64(this.lo, this.hi);
  };
  jspb.arith.Int64 = function (t, r) {
    (this.lo = t), (this.hi = r);
  };
  jspb.arith.Int64.prototype.add = function (t) {
    return new jspb.arith.Int64(
      (((this.lo + t.lo) & 4294967295) >>> 0) >>> 0,
      ((((this.hi + t.hi) & 4294967295) >>> 0) +
        (4294967296 <= this.lo + t.lo ? 1 : 0)) >>>
        0,
    );
  };
  jspb.arith.Int64.prototype.sub = function (t) {
    return new jspb.arith.Int64(
      (((this.lo - t.lo) & 4294967295) >>> 0) >>> 0,
      ((((this.hi - t.hi) & 4294967295) >>> 0) -
        (0 > this.lo - t.lo ? 1 : 0)) >>>
        0,
    );
  };
  jspb.arith.Int64.prototype.clone = function () {
    return new jspb.arith.Int64(this.lo, this.hi);
  };
  jspb.arith.Int64.prototype.toString = function () {
    var t = (this.hi & 2147483648) != 0,
      r = new jspb.arith.UInt64(this.lo, this.hi);
    return (
      t && (r = new jspb.arith.UInt64(0, 0).sub(r)),
      (t ? "-" : "") + r.toString()
    );
  };
  jspb.arith.Int64.fromString = function (t) {
    var r = 0 < t.length && t[0] == "-";
    return (
      r && (t = t.substring(1)),
      (t = jspb.arith.UInt64.fromString(t)),
      t === null
        ? null
        : (r && (t = new jspb.arith.UInt64(0, 0).sub(t)),
          new jspb.arith.Int64(t.lo, t.hi))
    );
  };
  jspb.BinaryWriter = function () {
    (this.blocks_ = []),
      (this.totalLength_ = 0),
      (this.encoder_ = new jspb.BinaryEncoder()),
      (this.bookmarks_ = []);
  };
  jspb.BinaryWriter.prototype.appendUint8Array_ = function (t) {
    var r = this.encoder_.end();
    this.blocks_.push(r),
      this.blocks_.push(t),
      (this.totalLength_ += r.length + t.length);
  };
  jspb.BinaryWriter.prototype.beginDelimited_ = function (t) {
    return (
      this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.DELIMITED),
      (t = this.encoder_.end()),
      this.blocks_.push(t),
      (this.totalLength_ += t.length),
      t.push(this.totalLength_),
      t
    );
  };
  jspb.BinaryWriter.prototype.endDelimited_ = function (t) {
    var r = t.pop();
    for (
      r = this.totalLength_ + this.encoder_.length() - r,
        jspb.asserts.assert(0 <= r);
      127 < r;
    )
      t.push((r & 127) | 128), (r >>>= 7), this.totalLength_++;
    t.push(r), this.totalLength_++;
  };
  jspb.BinaryWriter.prototype.writeSerializedMessage = function (t, r, o) {
    this.appendUint8Array_(t.subarray(r, o));
  };
  jspb.BinaryWriter.prototype.maybeWriteSerializedMessage = function (t, r, o) {
    t != null && r != null && o != null && this.writeSerializedMessage(t, r, o);
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
      var t = new Uint8Array(this.totalLength_ + this.encoder_.length()),
        r = this.blocks_,
        o = r.length,
        s = 0,
        n = 0;
      n < o;
      n++
    ) {
      var i = r[n];
      t.set(i, s), (s += i.length);
    }
    return (
      (r = this.encoder_.end()),
      t.set(r, s),
      (s += r.length),
      jspb.asserts.assert(s == t.length),
      (this.blocks_ = [t]),
      t
    );
  };
  goog.exportProperty(
    jspb.BinaryWriter.prototype,
    "getResultBuffer",
    jspb.BinaryWriter.prototype.getResultBuffer,
  );
  jspb.BinaryWriter.prototype.getResultBase64String = function (t) {
    return goog.crypt.base64.encodeByteArray(this.getResultBuffer(), t);
  };
  jspb.BinaryWriter.prototype.beginSubMessage = function (t) {
    this.bookmarks_.push(this.beginDelimited_(t));
  };
  jspb.BinaryWriter.prototype.endSubMessage = function () {
    jspb.asserts.assert(0 <= this.bookmarks_.length),
      this.endDelimited_(this.bookmarks_.pop());
  };
  jspb.BinaryWriter.prototype.writeFieldHeader_ = function (t, r) {
    jspb.asserts.assert(1 <= t && t == Math.floor(t)),
      this.encoder_.writeUnsignedVarint32(8 * t + r);
  };
  jspb.BinaryWriter.prototype.writeAny = function (t, r, o) {
    var s = jspb.BinaryConstants.FieldType;
    switch (t) {
      case s.DOUBLE:
        this.writeDouble(r, o);
        break;
      case s.FLOAT:
        this.writeFloat(r, o);
        break;
      case s.INT64:
        this.writeInt64(r, o);
        break;
      case s.UINT64:
        this.writeUint64(r, o);
        break;
      case s.INT32:
        this.writeInt32(r, o);
        break;
      case s.FIXED64:
        this.writeFixed64(r, o);
        break;
      case s.FIXED32:
        this.writeFixed32(r, o);
        break;
      case s.BOOL:
        this.writeBool(r, o);
        break;
      case s.STRING:
        this.writeString(r, o);
        break;
      case s.GROUP:
        jspb.asserts.fail("Group field type not supported in writeAny()");
        break;
      case s.MESSAGE:
        jspb.asserts.fail("Message field type not supported in writeAny()");
        break;
      case s.BYTES:
        this.writeBytes(r, o);
        break;
      case s.UINT32:
        this.writeUint32(r, o);
        break;
      case s.ENUM:
        this.writeEnum(r, o);
        break;
      case s.SFIXED32:
        this.writeSfixed32(r, o);
        break;
      case s.SFIXED64:
        this.writeSfixed64(r, o);
        break;
      case s.SINT32:
        this.writeSint32(r, o);
        break;
      case s.SINT64:
        this.writeSint64(r, o);
        break;
      case s.FHASH64:
        this.writeFixedHash64(r, o);
        break;
      case s.VHASH64:
        this.writeVarintHash64(r, o);
        break;
      default:
        jspb.asserts.fail("Invalid field type in writeAny()");
    }
  };
  jspb.BinaryWriter.prototype.writeUnsignedVarint32_ = function (t, r) {
    r != null &&
      (this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.VARINT),
      this.encoder_.writeUnsignedVarint32(r));
  };
  jspb.BinaryWriter.prototype.writeSignedVarint32_ = function (t, r) {
    r != null &&
      (this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.VARINT),
      this.encoder_.writeSignedVarint32(r));
  };
  jspb.BinaryWriter.prototype.writeUnsignedVarint64_ = function (t, r) {
    r != null &&
      (this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.VARINT),
      this.encoder_.writeUnsignedVarint64(r));
  };
  jspb.BinaryWriter.prototype.writeSignedVarint64_ = function (t, r) {
    r != null &&
      (this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.VARINT),
      this.encoder_.writeSignedVarint64(r));
  };
  jspb.BinaryWriter.prototype.writeZigzagVarint32_ = function (t, r) {
    r != null &&
      (this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.VARINT),
      this.encoder_.writeZigzagVarint32(r));
  };
  jspb.BinaryWriter.prototype.writeZigzagVarint64_ = function (t, r) {
    r != null &&
      (this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.VARINT),
      this.encoder_.writeZigzagVarint64(r));
  };
  jspb.BinaryWriter.prototype.writeZigzagVarint64String_ = function (t, r) {
    r != null &&
      (this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.VARINT),
      this.encoder_.writeZigzagVarint64String(r));
  };
  jspb.BinaryWriter.prototype.writeZigzagVarintHash64_ = function (t, r) {
    r != null &&
      (this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.VARINT),
      this.encoder_.writeZigzagVarintHash64(r));
  };
  jspb.BinaryWriter.prototype.writeInt32 = function (t, r) {
    r != null &&
      (jspb.asserts.assert(
        r >= -jspb.BinaryConstants.TWO_TO_31 &&
          r < jspb.BinaryConstants.TWO_TO_31,
      ),
      this.writeSignedVarint32_(t, r));
  };
  goog.exportProperty(
    jspb.BinaryWriter.prototype,
    "writeInt32",
    jspb.BinaryWriter.prototype.writeInt32,
  );
  jspb.BinaryWriter.prototype.writeInt32String = function (t, r) {
    r != null &&
      ((r = parseInt(r, 10)),
      jspb.asserts.assert(
        r >= -jspb.BinaryConstants.TWO_TO_31 &&
          r < jspb.BinaryConstants.TWO_TO_31,
      ),
      this.writeSignedVarint32_(t, r));
  };
  jspb.BinaryWriter.prototype.writeInt64 = function (t, r) {
    r != null &&
      (jspb.asserts.assert(
        r >= -jspb.BinaryConstants.TWO_TO_63 &&
          r < jspb.BinaryConstants.TWO_TO_63,
      ),
      this.writeSignedVarint64_(t, r));
  };
  goog.exportProperty(
    jspb.BinaryWriter.prototype,
    "writeInt64",
    jspb.BinaryWriter.prototype.writeInt64,
  );
  jspb.BinaryWriter.prototype.writeInt64String = function (t, r) {
    r != null &&
      ((r = jspb.arith.Int64.fromString(r)),
      this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.VARINT),
      this.encoder_.writeSplitVarint64(r.lo, r.hi));
  };
  jspb.BinaryWriter.prototype.writeUint32 = function (t, r) {
    r != null &&
      (jspb.asserts.assert(0 <= r && r < jspb.BinaryConstants.TWO_TO_32),
      this.writeUnsignedVarint32_(t, r));
  };
  goog.exportProperty(
    jspb.BinaryWriter.prototype,
    "writeUint32",
    jspb.BinaryWriter.prototype.writeUint32,
  );
  jspb.BinaryWriter.prototype.writeUint32String = function (t, r) {
    r != null &&
      ((r = parseInt(r, 10)),
      jspb.asserts.assert(0 <= r && r < jspb.BinaryConstants.TWO_TO_32),
      this.writeUnsignedVarint32_(t, r));
  };
  jspb.BinaryWriter.prototype.writeUint64 = function (t, r) {
    r != null &&
      (jspb.asserts.assert(0 <= r && r < jspb.BinaryConstants.TWO_TO_64),
      this.writeUnsignedVarint64_(t, r));
  };
  goog.exportProperty(
    jspb.BinaryWriter.prototype,
    "writeUint64",
    jspb.BinaryWriter.prototype.writeUint64,
  );
  jspb.BinaryWriter.prototype.writeUint64String = function (t, r) {
    r != null &&
      ((r = jspb.arith.UInt64.fromString(r)),
      this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.VARINT),
      this.encoder_.writeSplitVarint64(r.lo, r.hi));
  };
  jspb.BinaryWriter.prototype.writeSint32 = function (t, r) {
    r != null &&
      (jspb.asserts.assert(
        r >= -jspb.BinaryConstants.TWO_TO_31 &&
          r < jspb.BinaryConstants.TWO_TO_31,
      ),
      this.writeZigzagVarint32_(t, r));
  };
  goog.exportProperty(
    jspb.BinaryWriter.prototype,
    "writeSint32",
    jspb.BinaryWriter.prototype.writeSint32,
  );
  jspb.BinaryWriter.prototype.writeSint64 = function (t, r) {
    r != null &&
      (jspb.asserts.assert(
        r >= -jspb.BinaryConstants.TWO_TO_63 &&
          r < jspb.BinaryConstants.TWO_TO_63,
      ),
      this.writeZigzagVarint64_(t, r));
  };
  goog.exportProperty(
    jspb.BinaryWriter.prototype,
    "writeSint64",
    jspb.BinaryWriter.prototype.writeSint64,
  );
  jspb.BinaryWriter.prototype.writeSintHash64 = function (t, r) {
    r != null && this.writeZigzagVarintHash64_(t, r);
  };
  jspb.BinaryWriter.prototype.writeSint64String = function (t, r) {
    r != null && this.writeZigzagVarint64String_(t, r);
  };
  jspb.BinaryWriter.prototype.writeFixed32 = function (t, r) {
    r != null &&
      (jspb.asserts.assert(0 <= r && r < jspb.BinaryConstants.TWO_TO_32),
      this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.FIXED32),
      this.encoder_.writeUint32(r));
  };
  goog.exportProperty(
    jspb.BinaryWriter.prototype,
    "writeFixed32",
    jspb.BinaryWriter.prototype.writeFixed32,
  );
  jspb.BinaryWriter.prototype.writeFixed64 = function (t, r) {
    r != null &&
      (jspb.asserts.assert(0 <= r && r < jspb.BinaryConstants.TWO_TO_64),
      this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.FIXED64),
      this.encoder_.writeUint64(r));
  };
  goog.exportProperty(
    jspb.BinaryWriter.prototype,
    "writeFixed64",
    jspb.BinaryWriter.prototype.writeFixed64,
  );
  jspb.BinaryWriter.prototype.writeFixed64String = function (t, r) {
    r != null &&
      ((r = jspb.arith.UInt64.fromString(r)),
      this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.FIXED64),
      this.encoder_.writeSplitFixed64(r.lo, r.hi));
  };
  jspb.BinaryWriter.prototype.writeSfixed32 = function (t, r) {
    r != null &&
      (jspb.asserts.assert(
        r >= -jspb.BinaryConstants.TWO_TO_31 &&
          r < jspb.BinaryConstants.TWO_TO_31,
      ),
      this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.FIXED32),
      this.encoder_.writeInt32(r));
  };
  goog.exportProperty(
    jspb.BinaryWriter.prototype,
    "writeSfixed32",
    jspb.BinaryWriter.prototype.writeSfixed32,
  );
  jspb.BinaryWriter.prototype.writeSfixed64 = function (t, r) {
    r != null &&
      (jspb.asserts.assert(
        r >= -jspb.BinaryConstants.TWO_TO_63 &&
          r < jspb.BinaryConstants.TWO_TO_63,
      ),
      this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.FIXED64),
      this.encoder_.writeInt64(r));
  };
  goog.exportProperty(
    jspb.BinaryWriter.prototype,
    "writeSfixed64",
    jspb.BinaryWriter.prototype.writeSfixed64,
  );
  jspb.BinaryWriter.prototype.writeSfixed64String = function (t, r) {
    r != null &&
      ((r = jspb.arith.Int64.fromString(r)),
      this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.FIXED64),
      this.encoder_.writeSplitFixed64(r.lo, r.hi));
  };
  jspb.BinaryWriter.prototype.writeFloat = function (t, r) {
    r != null &&
      (this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.FIXED32),
      this.encoder_.writeFloat(r));
  };
  goog.exportProperty(
    jspb.BinaryWriter.prototype,
    "writeFloat",
    jspb.BinaryWriter.prototype.writeFloat,
  );
  jspb.BinaryWriter.prototype.writeDouble = function (t, r) {
    r != null &&
      (this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.FIXED64),
      this.encoder_.writeDouble(r));
  };
  goog.exportProperty(
    jspb.BinaryWriter.prototype,
    "writeDouble",
    jspb.BinaryWriter.prototype.writeDouble,
  );
  jspb.BinaryWriter.prototype.writeBool = function (t, r) {
    r != null &&
      (jspb.asserts.assert(typeof r == "boolean" || typeof r == "number"),
      this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.VARINT),
      this.encoder_.writeBool(r));
  };
  goog.exportProperty(
    jspb.BinaryWriter.prototype,
    "writeBool",
    jspb.BinaryWriter.prototype.writeBool,
  );
  jspb.BinaryWriter.prototype.writeEnum = function (t, r) {
    r != null &&
      (jspb.asserts.assert(
        r >= -jspb.BinaryConstants.TWO_TO_31 &&
          r < jspb.BinaryConstants.TWO_TO_31,
      ),
      this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.VARINT),
      this.encoder_.writeSignedVarint32(r));
  };
  goog.exportProperty(
    jspb.BinaryWriter.prototype,
    "writeEnum",
    jspb.BinaryWriter.prototype.writeEnum,
  );
  jspb.BinaryWriter.prototype.writeString = function (t, r) {
    r != null &&
      ((t = this.beginDelimited_(t)),
      this.encoder_.writeString(r),
      this.endDelimited_(t));
  };
  goog.exportProperty(
    jspb.BinaryWriter.prototype,
    "writeString",
    jspb.BinaryWriter.prototype.writeString,
  );
  jspb.BinaryWriter.prototype.writeBytes = function (t, r) {
    r != null &&
      ((r = jspb.utils.byteSourceToUint8Array(r)),
      this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.DELIMITED),
      this.encoder_.writeUnsignedVarint32(r.length),
      this.appendUint8Array_(r));
  };
  goog.exportProperty(
    jspb.BinaryWriter.prototype,
    "writeBytes",
    jspb.BinaryWriter.prototype.writeBytes,
  );
  jspb.BinaryWriter.prototype.writeMessage = function (t, r, o) {
    r != null &&
      ((t = this.beginDelimited_(t)), o(r, this), this.endDelimited_(t));
  };
  goog.exportProperty(
    jspb.BinaryWriter.prototype,
    "writeMessage",
    jspb.BinaryWriter.prototype.writeMessage,
  );
  jspb.BinaryWriter.prototype.writeMessageSet = function (t, r, o) {
    r != null &&
      (this.writeFieldHeader_(1, jspb.BinaryConstants.WireType.START_GROUP),
      this.writeFieldHeader_(2, jspb.BinaryConstants.WireType.VARINT),
      this.encoder_.writeSignedVarint32(t),
      (t = this.beginDelimited_(3)),
      o(r, this),
      this.endDelimited_(t),
      this.writeFieldHeader_(1, jspb.BinaryConstants.WireType.END_GROUP));
  };
  jspb.BinaryWriter.prototype.writeGroup = function (t, r, o) {
    r != null &&
      (this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.START_GROUP),
      o(r, this),
      this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.END_GROUP));
  };
  goog.exportProperty(
    jspb.BinaryWriter.prototype,
    "writeGroup",
    jspb.BinaryWriter.prototype.writeGroup,
  );
  jspb.BinaryWriter.prototype.writeFixedHash64 = function (t, r) {
    r != null &&
      (jspb.asserts.assert(r.length == 8),
      this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.FIXED64),
      this.encoder_.writeFixedHash64(r));
  };
  jspb.BinaryWriter.prototype.writeVarintHash64 = function (t, r) {
    r != null &&
      (jspb.asserts.assert(r.length == 8),
      this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.VARINT),
      this.encoder_.writeVarintHash64(r));
  };
  jspb.BinaryWriter.prototype.writeSplitFixed64 = function (t, r, o) {
    this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.FIXED64),
      this.encoder_.writeSplitFixed64(r, o);
  };
  jspb.BinaryWriter.prototype.writeSplitVarint64 = function (t, r, o) {
    this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.VARINT),
      this.encoder_.writeSplitVarint64(r, o);
  };
  jspb.BinaryWriter.prototype.writeSplitZigzagVarint64 = function (t, r, o) {
    this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.VARINT);
    var s = this.encoder_;
    jspb.utils.toZigzag64(r, o, function (n, i) {
      s.writeSplitVarint64(n >>> 0, i >>> 0);
    });
  };
  jspb.BinaryWriter.prototype.writeRepeatedInt32 = function (t, r) {
    if (r != null)
      for (var o = 0; o < r.length; o++) this.writeSignedVarint32_(t, r[o]);
  };
  goog.exportProperty(
    jspb.BinaryWriter.prototype,
    "writeRepeatedInt32",
    jspb.BinaryWriter.prototype.writeRepeatedInt32,
  );
  jspb.BinaryWriter.prototype.writeRepeatedInt32String = function (t, r) {
    if (r != null)
      for (var o = 0; o < r.length; o++) this.writeInt32String(t, r[o]);
  };
  jspb.BinaryWriter.prototype.writeRepeatedInt64 = function (t, r) {
    if (r != null)
      for (var o = 0; o < r.length; o++) this.writeSignedVarint64_(t, r[o]);
  };
  goog.exportProperty(
    jspb.BinaryWriter.prototype,
    "writeRepeatedInt64",
    jspb.BinaryWriter.prototype.writeRepeatedInt64,
  );
  jspb.BinaryWriter.prototype.writeRepeatedSplitFixed64 = function (
    t,
    r,
    o,
    s,
  ) {
    if (r != null)
      for (var n = 0; n < r.length; n++)
        this.writeSplitFixed64(t, o(r[n]), s(r[n]));
  };
  jspb.BinaryWriter.prototype.writeRepeatedSplitVarint64 = function (
    t,
    r,
    o,
    s,
  ) {
    if (r != null)
      for (var n = 0; n < r.length; n++)
        this.writeSplitVarint64(t, o(r[n]), s(r[n]));
  };
  jspb.BinaryWriter.prototype.writeRepeatedSplitZigzagVarint64 = function (
    t,
    r,
    o,
    s,
  ) {
    if (r != null)
      for (var n = 0; n < r.length; n++)
        this.writeSplitZigzagVarint64(t, o(r[n]), s(r[n]));
  };
  jspb.BinaryWriter.prototype.writeRepeatedInt64String = function (t, r) {
    if (r != null)
      for (var o = 0; o < r.length; o++) this.writeInt64String(t, r[o]);
  };
  jspb.BinaryWriter.prototype.writeRepeatedUint32 = function (t, r) {
    if (r != null)
      for (var o = 0; o < r.length; o++) this.writeUnsignedVarint32_(t, r[o]);
  };
  goog.exportProperty(
    jspb.BinaryWriter.prototype,
    "writeRepeatedUint32",
    jspb.BinaryWriter.prototype.writeRepeatedUint32,
  );
  jspb.BinaryWriter.prototype.writeRepeatedUint32String = function (t, r) {
    if (r != null)
      for (var o = 0; o < r.length; o++) this.writeUint32String(t, r[o]);
  };
  jspb.BinaryWriter.prototype.writeRepeatedUint64 = function (t, r) {
    if (r != null)
      for (var o = 0; o < r.length; o++) this.writeUnsignedVarint64_(t, r[o]);
  };
  goog.exportProperty(
    jspb.BinaryWriter.prototype,
    "writeRepeatedUint64",
    jspb.BinaryWriter.prototype.writeRepeatedUint64,
  );
  jspb.BinaryWriter.prototype.writeRepeatedUint64String = function (t, r) {
    if (r != null)
      for (var o = 0; o < r.length; o++) this.writeUint64String(t, r[o]);
  };
  jspb.BinaryWriter.prototype.writeRepeatedSint32 = function (t, r) {
    if (r != null)
      for (var o = 0; o < r.length; o++) this.writeZigzagVarint32_(t, r[o]);
  };
  goog.exportProperty(
    jspb.BinaryWriter.prototype,
    "writeRepeatedSint32",
    jspb.BinaryWriter.prototype.writeRepeatedSint32,
  );
  jspb.BinaryWriter.prototype.writeRepeatedSint64 = function (t, r) {
    if (r != null)
      for (var o = 0; o < r.length; o++) this.writeZigzagVarint64_(t, r[o]);
  };
  goog.exportProperty(
    jspb.BinaryWriter.prototype,
    "writeRepeatedSint64",
    jspb.BinaryWriter.prototype.writeRepeatedSint64,
  );
  jspb.BinaryWriter.prototype.writeRepeatedSint64String = function (t, r) {
    if (r != null)
      for (var o = 0; o < r.length; o++)
        this.writeZigzagVarint64String_(t, r[o]);
  };
  jspb.BinaryWriter.prototype.writeRepeatedSintHash64 = function (t, r) {
    if (r != null)
      for (var o = 0; o < r.length; o++) this.writeZigzagVarintHash64_(t, r[o]);
  };
  jspb.BinaryWriter.prototype.writeRepeatedFixed32 = function (t, r) {
    if (r != null)
      for (var o = 0; o < r.length; o++) this.writeFixed32(t, r[o]);
  };
  goog.exportProperty(
    jspb.BinaryWriter.prototype,
    "writeRepeatedFixed32",
    jspb.BinaryWriter.prototype.writeRepeatedFixed32,
  );
  jspb.BinaryWriter.prototype.writeRepeatedFixed64 = function (t, r) {
    if (r != null)
      for (var o = 0; o < r.length; o++) this.writeFixed64(t, r[o]);
  };
  goog.exportProperty(
    jspb.BinaryWriter.prototype,
    "writeRepeatedFixed64",
    jspb.BinaryWriter.prototype.writeRepeatedFixed64,
  );
  jspb.BinaryWriter.prototype.writeRepeatedFixed64String = function (t, r) {
    if (r != null)
      for (var o = 0; o < r.length; o++) this.writeFixed64String(t, r[o]);
  };
  goog.exportProperty(
    jspb.BinaryWriter.prototype,
    "writeRepeatedFixed64String",
    jspb.BinaryWriter.prototype.writeRepeatedFixed64String,
  );
  jspb.BinaryWriter.prototype.writeRepeatedSfixed32 = function (t, r) {
    if (r != null)
      for (var o = 0; o < r.length; o++) this.writeSfixed32(t, r[o]);
  };
  goog.exportProperty(
    jspb.BinaryWriter.prototype,
    "writeRepeatedSfixed32",
    jspb.BinaryWriter.prototype.writeRepeatedSfixed32,
  );
  jspb.BinaryWriter.prototype.writeRepeatedSfixed64 = function (t, r) {
    if (r != null)
      for (var o = 0; o < r.length; o++) this.writeSfixed64(t, r[o]);
  };
  goog.exportProperty(
    jspb.BinaryWriter.prototype,
    "writeRepeatedSfixed64",
    jspb.BinaryWriter.prototype.writeRepeatedSfixed64,
  );
  jspb.BinaryWriter.prototype.writeRepeatedSfixed64String = function (t, r) {
    if (r != null)
      for (var o = 0; o < r.length; o++) this.writeSfixed64String(t, r[o]);
  };
  jspb.BinaryWriter.prototype.writeRepeatedFloat = function (t, r) {
    if (r != null) for (var o = 0; o < r.length; o++) this.writeFloat(t, r[o]);
  };
  goog.exportProperty(
    jspb.BinaryWriter.prototype,
    "writeRepeatedFloat",
    jspb.BinaryWriter.prototype.writeRepeatedFloat,
  );
  jspb.BinaryWriter.prototype.writeRepeatedDouble = function (t, r) {
    if (r != null) for (var o = 0; o < r.length; o++) this.writeDouble(t, r[o]);
  };
  goog.exportProperty(
    jspb.BinaryWriter.prototype,
    "writeRepeatedDouble",
    jspb.BinaryWriter.prototype.writeRepeatedDouble,
  );
  jspb.BinaryWriter.prototype.writeRepeatedBool = function (t, r) {
    if (r != null) for (var o = 0; o < r.length; o++) this.writeBool(t, r[o]);
  };
  goog.exportProperty(
    jspb.BinaryWriter.prototype,
    "writeRepeatedBool",
    jspb.BinaryWriter.prototype.writeRepeatedBool,
  );
  jspb.BinaryWriter.prototype.writeRepeatedEnum = function (t, r) {
    if (r != null) for (var o = 0; o < r.length; o++) this.writeEnum(t, r[o]);
  };
  goog.exportProperty(
    jspb.BinaryWriter.prototype,
    "writeRepeatedEnum",
    jspb.BinaryWriter.prototype.writeRepeatedEnum,
  );
  jspb.BinaryWriter.prototype.writeRepeatedString = function (t, r) {
    if (r != null) for (var o = 0; o < r.length; o++) this.writeString(t, r[o]);
  };
  goog.exportProperty(
    jspb.BinaryWriter.prototype,
    "writeRepeatedString",
    jspb.BinaryWriter.prototype.writeRepeatedString,
  );
  jspb.BinaryWriter.prototype.writeRepeatedBytes = function (t, r) {
    if (r != null) for (var o = 0; o < r.length; o++) this.writeBytes(t, r[o]);
  };
  goog.exportProperty(
    jspb.BinaryWriter.prototype,
    "writeRepeatedBytes",
    jspb.BinaryWriter.prototype.writeRepeatedBytes,
  );
  jspb.BinaryWriter.prototype.writeRepeatedMessage = function (t, r, o) {
    if (r != null)
      for (var s = 0; s < r.length; s++) {
        var n = this.beginDelimited_(t);
        o(r[s], this), this.endDelimited_(n);
      }
  };
  goog.exportProperty(
    jspb.BinaryWriter.prototype,
    "writeRepeatedMessage",
    jspb.BinaryWriter.prototype.writeRepeatedMessage,
  );
  jspb.BinaryWriter.prototype.writeRepeatedGroup = function (t, r, o) {
    if (r != null)
      for (var s = 0; s < r.length; s++)
        this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.START_GROUP),
          o(r[s], this),
          this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.END_GROUP);
  };
  goog.exportProperty(
    jspb.BinaryWriter.prototype,
    "writeRepeatedGroup",
    jspb.BinaryWriter.prototype.writeRepeatedGroup,
  );
  jspb.BinaryWriter.prototype.writeRepeatedFixedHash64 = function (t, r) {
    if (r != null)
      for (var o = 0; o < r.length; o++) this.writeFixedHash64(t, r[o]);
  };
  jspb.BinaryWriter.prototype.writeRepeatedVarintHash64 = function (t, r) {
    if (r != null)
      for (var o = 0; o < r.length; o++) this.writeVarintHash64(t, r[o]);
  };
  jspb.BinaryWriter.prototype.writePackedInt32 = function (t, r) {
    if (r != null && r.length) {
      t = this.beginDelimited_(t);
      for (var o = 0; o < r.length; o++)
        this.encoder_.writeSignedVarint32(r[o]);
      this.endDelimited_(t);
    }
  };
  goog.exportProperty(
    jspb.BinaryWriter.prototype,
    "writePackedInt32",
    jspb.BinaryWriter.prototype.writePackedInt32,
  );
  jspb.BinaryWriter.prototype.writePackedInt32String = function (t, r) {
    if (r != null && r.length) {
      t = this.beginDelimited_(t);
      for (var o = 0; o < r.length; o++)
        this.encoder_.writeSignedVarint32(parseInt(r[o], 10));
      this.endDelimited_(t);
    }
  };
  jspb.BinaryWriter.prototype.writePackedInt64 = function (t, r) {
    if (r != null && r.length) {
      t = this.beginDelimited_(t);
      for (var o = 0; o < r.length; o++)
        this.encoder_.writeSignedVarint64(r[o]);
      this.endDelimited_(t);
    }
  };
  goog.exportProperty(
    jspb.BinaryWriter.prototype,
    "writePackedInt64",
    jspb.BinaryWriter.prototype.writePackedInt64,
  );
  jspb.BinaryWriter.prototype.writePackedSplitFixed64 = function (t, r, o, s) {
    if (r != null) {
      t = this.beginDelimited_(t);
      for (var n = 0; n < r.length; n++)
        this.encoder_.writeSplitFixed64(o(r[n]), s(r[n]));
      this.endDelimited_(t);
    }
  };
  jspb.BinaryWriter.prototype.writePackedSplitVarint64 = function (t, r, o, s) {
    if (r != null) {
      t = this.beginDelimited_(t);
      for (var n = 0; n < r.length; n++)
        this.encoder_.writeSplitVarint64(o(r[n]), s(r[n]));
      this.endDelimited_(t);
    }
  };
  jspb.BinaryWriter.prototype.writePackedSplitZigzagVarint64 = function (
    t,
    r,
    o,
    s,
  ) {
    if (r != null) {
      t = this.beginDelimited_(t);
      for (var n = this.encoder_, i = 0; i < r.length; i++)
        jspb.utils.toZigzag64(o(r[i]), s(r[i]), function (p, _) {
          n.writeSplitVarint64(p >>> 0, _ >>> 0);
        });
      this.endDelimited_(t);
    }
  };
  jspb.BinaryWriter.prototype.writePackedInt64String = function (t, r) {
    if (r != null && r.length) {
      t = this.beginDelimited_(t);
      for (var o = 0; o < r.length; o++) {
        var s = jspb.arith.Int64.fromString(r[o]);
        this.encoder_.writeSplitVarint64(s.lo, s.hi);
      }
      this.endDelimited_(t);
    }
  };
  jspb.BinaryWriter.prototype.writePackedUint32 = function (t, r) {
    if (r != null && r.length) {
      t = this.beginDelimited_(t);
      for (var o = 0; o < r.length; o++)
        this.encoder_.writeUnsignedVarint32(r[o]);
      this.endDelimited_(t);
    }
  };
  goog.exportProperty(
    jspb.BinaryWriter.prototype,
    "writePackedUint32",
    jspb.BinaryWriter.prototype.writePackedUint32,
  );
  jspb.BinaryWriter.prototype.writePackedUint32String = function (t, r) {
    if (r != null && r.length) {
      t = this.beginDelimited_(t);
      for (var o = 0; o < r.length; o++)
        this.encoder_.writeUnsignedVarint32(parseInt(r[o], 10));
      this.endDelimited_(t);
    }
  };
  jspb.BinaryWriter.prototype.writePackedUint64 = function (t, r) {
    if (r != null && r.length) {
      t = this.beginDelimited_(t);
      for (var o = 0; o < r.length; o++)
        this.encoder_.writeUnsignedVarint64(r[o]);
      this.endDelimited_(t);
    }
  };
  goog.exportProperty(
    jspb.BinaryWriter.prototype,
    "writePackedUint64",
    jspb.BinaryWriter.prototype.writePackedUint64,
  );
  jspb.BinaryWriter.prototype.writePackedUint64String = function (t, r) {
    if (r != null && r.length) {
      t = this.beginDelimited_(t);
      for (var o = 0; o < r.length; o++) {
        var s = jspb.arith.UInt64.fromString(r[o]);
        this.encoder_.writeSplitVarint64(s.lo, s.hi);
      }
      this.endDelimited_(t);
    }
  };
  jspb.BinaryWriter.prototype.writePackedSint32 = function (t, r) {
    if (r != null && r.length) {
      t = this.beginDelimited_(t);
      for (var o = 0; o < r.length; o++)
        this.encoder_.writeZigzagVarint32(r[o]);
      this.endDelimited_(t);
    }
  };
  goog.exportProperty(
    jspb.BinaryWriter.prototype,
    "writePackedSint32",
    jspb.BinaryWriter.prototype.writePackedSint32,
  );
  jspb.BinaryWriter.prototype.writePackedSint64 = function (t, r) {
    if (r != null && r.length) {
      t = this.beginDelimited_(t);
      for (var o = 0; o < r.length; o++)
        this.encoder_.writeZigzagVarint64(r[o]);
      this.endDelimited_(t);
    }
  };
  goog.exportProperty(
    jspb.BinaryWriter.prototype,
    "writePackedSint64",
    jspb.BinaryWriter.prototype.writePackedSint64,
  );
  jspb.BinaryWriter.prototype.writePackedSint64String = function (t, r) {
    if (r != null && r.length) {
      t = this.beginDelimited_(t);
      for (var o = 0; o < r.length; o++)
        this.encoder_.writeZigzagVarintHash64(
          jspb.utils.decimalStringToHash64(r[o]),
        );
      this.endDelimited_(t);
    }
  };
  jspb.BinaryWriter.prototype.writePackedSintHash64 = function (t, r) {
    if (r != null && r.length) {
      t = this.beginDelimited_(t);
      for (var o = 0; o < r.length; o++)
        this.encoder_.writeZigzagVarintHash64(r[o]);
      this.endDelimited_(t);
    }
  };
  jspb.BinaryWriter.prototype.writePackedFixed32 = function (t, r) {
    if (r != null && r.length)
      for (
        this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.DELIMITED),
          this.encoder_.writeUnsignedVarint32(4 * r.length),
          t = 0;
        t < r.length;
        t++
      )
        this.encoder_.writeUint32(r[t]);
  };
  goog.exportProperty(
    jspb.BinaryWriter.prototype,
    "writePackedFixed32",
    jspb.BinaryWriter.prototype.writePackedFixed32,
  );
  jspb.BinaryWriter.prototype.writePackedFixed64 = function (t, r) {
    if (r != null && r.length)
      for (
        this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.DELIMITED),
          this.encoder_.writeUnsignedVarint32(8 * r.length),
          t = 0;
        t < r.length;
        t++
      )
        this.encoder_.writeUint64(r[t]);
  };
  goog.exportProperty(
    jspb.BinaryWriter.prototype,
    "writePackedFixed64",
    jspb.BinaryWriter.prototype.writePackedFixed64,
  );
  jspb.BinaryWriter.prototype.writePackedFixed64String = function (t, r) {
    if (r != null && r.length)
      for (
        this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.DELIMITED),
          this.encoder_.writeUnsignedVarint32(8 * r.length),
          t = 0;
        t < r.length;
        t++
      ) {
        var o = jspb.arith.UInt64.fromString(r[t]);
        this.encoder_.writeSplitFixed64(o.lo, o.hi);
      }
  };
  jspb.BinaryWriter.prototype.writePackedSfixed32 = function (t, r) {
    if (r != null && r.length)
      for (
        this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.DELIMITED),
          this.encoder_.writeUnsignedVarint32(4 * r.length),
          t = 0;
        t < r.length;
        t++
      )
        this.encoder_.writeInt32(r[t]);
  };
  goog.exportProperty(
    jspb.BinaryWriter.prototype,
    "writePackedSfixed32",
    jspb.BinaryWriter.prototype.writePackedSfixed32,
  );
  jspb.BinaryWriter.prototype.writePackedSfixed64 = function (t, r) {
    if (r != null && r.length)
      for (
        this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.DELIMITED),
          this.encoder_.writeUnsignedVarint32(8 * r.length),
          t = 0;
        t < r.length;
        t++
      )
        this.encoder_.writeInt64(r[t]);
  };
  goog.exportProperty(
    jspb.BinaryWriter.prototype,
    "writePackedSfixed64",
    jspb.BinaryWriter.prototype.writePackedSfixed64,
  );
  jspb.BinaryWriter.prototype.writePackedSfixed64String = function (t, r) {
    if (r != null && r.length)
      for (
        this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.DELIMITED),
          this.encoder_.writeUnsignedVarint32(8 * r.length),
          t = 0;
        t < r.length;
        t++
      )
        this.encoder_.writeInt64String(r[t]);
  };
  jspb.BinaryWriter.prototype.writePackedFloat = function (t, r) {
    if (r != null && r.length)
      for (
        this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.DELIMITED),
          this.encoder_.writeUnsignedVarint32(4 * r.length),
          t = 0;
        t < r.length;
        t++
      )
        this.encoder_.writeFloat(r[t]);
  };
  goog.exportProperty(
    jspb.BinaryWriter.prototype,
    "writePackedFloat",
    jspb.BinaryWriter.prototype.writePackedFloat,
  );
  jspb.BinaryWriter.prototype.writePackedDouble = function (t, r) {
    if (r != null && r.length)
      for (
        this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.DELIMITED),
          this.encoder_.writeUnsignedVarint32(8 * r.length),
          t = 0;
        t < r.length;
        t++
      )
        this.encoder_.writeDouble(r[t]);
  };
  goog.exportProperty(
    jspb.BinaryWriter.prototype,
    "writePackedDouble",
    jspb.BinaryWriter.prototype.writePackedDouble,
  );
  jspb.BinaryWriter.prototype.writePackedBool = function (t, r) {
    if (r != null && r.length)
      for (
        this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.DELIMITED),
          this.encoder_.writeUnsignedVarint32(r.length),
          t = 0;
        t < r.length;
        t++
      )
        this.encoder_.writeBool(r[t]);
  };
  goog.exportProperty(
    jspb.BinaryWriter.prototype,
    "writePackedBool",
    jspb.BinaryWriter.prototype.writePackedBool,
  );
  jspb.BinaryWriter.prototype.writePackedEnum = function (t, r) {
    if (r != null && r.length) {
      t = this.beginDelimited_(t);
      for (var o = 0; o < r.length; o++) this.encoder_.writeEnum(r[o]);
      this.endDelimited_(t);
    }
  };
  goog.exportProperty(
    jspb.BinaryWriter.prototype,
    "writePackedEnum",
    jspb.BinaryWriter.prototype.writePackedEnum,
  );
  jspb.BinaryWriter.prototype.writePackedFixedHash64 = function (t, r) {
    if (r != null && r.length)
      for (
        this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.DELIMITED),
          this.encoder_.writeUnsignedVarint32(8 * r.length),
          t = 0;
        t < r.length;
        t++
      )
        this.encoder_.writeFixedHash64(r[t]);
  };
  jspb.BinaryWriter.prototype.writePackedVarintHash64 = function (t, r) {
    if (r != null && r.length) {
      t = this.beginDelimited_(t);
      for (var o = 0; o < r.length; o++) this.encoder_.writeVarintHash64(r[o]);
      this.endDelimited_(t);
    }
  };
  jspb.Map = function (t, r) {
    (this.arr_ = t),
      (this.valueCtor_ = r),
      (this.map_ = {}),
      (this.arrClean = !0),
      0 < this.arr_.length && this.loadFromArray_();
  };
  goog.exportSymbol("jspb.Map", jspb.Map);
  jspb.Map.prototype.loadFromArray_ = function () {
    for (var t = 0; t < this.arr_.length; t++) {
      var r = this.arr_[t],
        o = r[0];
      this.map_[o.toString()] = new jspb.Map.Entry_(o, r[1]);
    }
    this.arrClean = !0;
  };
  jspb.Map.prototype.toArray = function () {
    if (this.arrClean) {
      if (this.valueCtor_) {
        var t = this.map_,
          r;
        for (r in t)
          if (Object.prototype.hasOwnProperty.call(t, r)) {
            var o = t[r].valueWrapper;
            o && o.toArray();
          }
      }
    } else {
      for (
        this.arr_.length = 0, t = this.stringKeys_(), t.sort(), r = 0;
        r < t.length;
        r++
      ) {
        var s = this.map_[t[r]];
        (o = s.valueWrapper) && o.toArray(), this.arr_.push([s.key, s.value]);
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
  jspb.Map.prototype.toObject = function (t, r) {
    for (var o = this.toArray(), s = [], n = 0; n < o.length; n++) {
      var i = this.map_[o[n][0].toString()];
      this.wrapEntry_(i);
      var p = i.valueWrapper;
      p
        ? (jspb.asserts.assert(r), s.push([i.key, r(t, p)]))
        : s.push([i.key, i.value]);
    }
    return s;
  };
  goog.exportProperty(
    jspb.Map.prototype,
    "toObject",
    jspb.Map.prototype.toObject,
  );
  jspb.Map.fromObject = function (t, r, o) {
    r = new jspb.Map([], r);
    for (var s = 0; s < t.length; s++) {
      var n = t[s][0],
        i = o(t[s][1]);
      r.set(n, i);
    }
    return r;
  };
  goog.exportProperty(jspb.Map, "fromObject", jspb.Map.fromObject);
  jspb.Map.ArrayIteratorIterable_ = function (t) {
    (this.idx_ = 0), (this.arr_ = t);
  };
  jspb.Map.ArrayIteratorIterable_.prototype.next = function () {
    return this.idx_ < this.arr_.length
      ? { done: !1, value: this.arr_[this.idx_++] }
      : { done: !0, value: void 0 };
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
  jspb.Map.prototype.del = function (t) {
    t = t.toString();
    var r = this.map_.hasOwnProperty(t);
    return delete this.map_[t], (this.arrClean = !1), r;
  };
  goog.exportProperty(jspb.Map.prototype, "del", jspb.Map.prototype.del);
  jspb.Map.prototype.getEntryList = function () {
    var t = [],
      r = this.stringKeys_();
    r.sort();
    for (var o = 0; o < r.length; o++) {
      var s = this.map_[r[o]];
      t.push([s.key, s.value]);
    }
    return t;
  };
  goog.exportProperty(
    jspb.Map.prototype,
    "getEntryList",
    jspb.Map.prototype.getEntryList,
  );
  jspb.Map.prototype.entries = function () {
    var t = [],
      r = this.stringKeys_();
    r.sort();
    for (var o = 0; o < r.length; o++) {
      var s = this.map_[r[o]];
      t.push([s.key, this.wrapEntry_(s)]);
    }
    return new jspb.Map.ArrayIteratorIterable_(t);
  };
  goog.exportProperty(
    jspb.Map.prototype,
    "entries",
    jspb.Map.prototype.entries,
  );
  jspb.Map.prototype.keys = function () {
    var t = [],
      r = this.stringKeys_();
    r.sort();
    for (var o = 0; o < r.length; o++) t.push(this.map_[r[o]].key);
    return new jspb.Map.ArrayIteratorIterable_(t);
  };
  goog.exportProperty(jspb.Map.prototype, "keys", jspb.Map.prototype.keys);
  jspb.Map.prototype.values = function () {
    var t = [],
      r = this.stringKeys_();
    r.sort();
    for (var o = 0; o < r.length; o++) t.push(this.wrapEntry_(this.map_[r[o]]));
    return new jspb.Map.ArrayIteratorIterable_(t);
  };
  goog.exportProperty(jspb.Map.prototype, "values", jspb.Map.prototype.values);
  jspb.Map.prototype.forEach = function (t, r) {
    var o = this.stringKeys_();
    o.sort();
    for (var s = 0; s < o.length; s++) {
      var n = this.map_[o[s]];
      t.call(r, this.wrapEntry_(n), n.key, this);
    }
  };
  goog.exportProperty(
    jspb.Map.prototype,
    "forEach",
    jspb.Map.prototype.forEach,
  );
  jspb.Map.prototype.set = function (t, r) {
    var o = new jspb.Map.Entry_(t);
    return (
      this.valueCtor_
        ? ((o.valueWrapper = r), (o.value = r.toArray()))
        : (o.value = r),
      (this.map_[t.toString()] = o),
      (this.arrClean = !1),
      this
    );
  };
  goog.exportProperty(jspb.Map.prototype, "set", jspb.Map.prototype.set);
  jspb.Map.prototype.wrapEntry_ = function (t) {
    return this.valueCtor_
      ? (t.valueWrapper || (t.valueWrapper = new this.valueCtor_(t.value)),
        t.valueWrapper)
      : t.value;
  };
  jspb.Map.prototype.get = function (t) {
    if ((t = this.map_[t.toString()])) return this.wrapEntry_(t);
  };
  goog.exportProperty(jspb.Map.prototype, "get", jspb.Map.prototype.get);
  jspb.Map.prototype.has = function (t) {
    return t.toString() in this.map_;
  };
  goog.exportProperty(jspb.Map.prototype, "has", jspb.Map.prototype.has);
  jspb.Map.prototype.serializeBinary = function (t, r, o, s, n) {
    var i = this.stringKeys_();
    i.sort();
    for (var p = 0; p < i.length; p++) {
      var _ = this.map_[i[p]];
      r.beginSubMessage(t),
        o.call(r, 1, _.key),
        this.valueCtor_
          ? s.call(r, 2, this.wrapEntry_(_), n)
          : s.call(r, 2, _.value),
        r.endSubMessage();
    }
  };
  goog.exportProperty(
    jspb.Map.prototype,
    "serializeBinary",
    jspb.Map.prototype.serializeBinary,
  );
  jspb.Map.deserializeBinary = function (t, r, o, s, n, i, p) {
    for (; r.nextField() && !r.isEndGroup(); ) {
      var _ = r.getFieldNumber();
      _ == 1
        ? (i = o.call(r))
        : _ == 2 &&
          (t.valueCtor_
            ? (jspb.asserts.assert(n),
              p || (p = new t.valueCtor_()),
              s.call(r, p, n))
            : (p = s.call(r)));
    }
    jspb.asserts.assert(i != null), jspb.asserts.assert(p != null), t.set(i, p);
  };
  goog.exportProperty(
    jspb.Map,
    "deserializeBinary",
    jspb.Map.deserializeBinary,
  );
  jspb.Map.prototype.stringKeys_ = function () {
    var t = this.map_,
      r = [],
      o;
    for (o in t) Object.prototype.hasOwnProperty.call(t, o) && r.push(o);
    return r;
  };
  jspb.Map.Entry_ = function (t, r) {
    (this.key = t), (this.value = r), (this.valueWrapper = void 0);
  };
  jspb.ExtensionFieldInfo = function (t, r, o, s, n) {
    (this.fieldIndex = t),
      (this.fieldName = r),
      (this.ctor = o),
      (this.toObjectFn = s),
      (this.isRepeated = n);
  };
  goog.exportSymbol("jspb.ExtensionFieldInfo", jspb.ExtensionFieldInfo);
  jspb.ExtensionFieldBinaryInfo = function (t, r, o, s, n, i) {
    (this.fieldInfo = t),
      (this.binaryReaderFn = r),
      (this.binaryWriterFn = o),
      (this.binaryMessageSerializeFn = s),
      (this.binaryMessageDeserializeFn = n),
      (this.isPacked = i);
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
  jspb.Message.getIndex_ = function (t, r) {
    return r + t.arrayIndexOffset_;
  };
  jspb.Message.hiddenES6Property_ = function () {};
  jspb.Message.getFieldNumber_ = function (t, r) {
    return r - t.arrayIndexOffset_;
  };
  jspb.Message.initialize = function (t, r, o, s, n, i) {
    if (
      ((t.wrappers_ = null),
      r || (r = o ? [o] : []),
      (t.messageId_ = o ? String(o) : void 0),
      (t.arrayIndexOffset_ = o === 0 ? -1 : 0),
      (t.array = r),
      jspb.Message.initPivotAndExtensionObject_(t, s),
      (t.convertedPrimitiveFields_ = {}),
      jspb.Message.SERIALIZE_EMPTY_TRAILING_FIELDS || (t.repeatedFields = n),
      n)
    )
      for (r = 0; r < n.length; r++)
        (o = n[r]),
          o < t.pivot_
            ? ((o = jspb.Message.getIndex_(t, o)),
              (t.array[o] = t.array[o] || jspb.Message.EMPTY_LIST_SENTINEL_))
            : (jspb.Message.maybeInitEmptyExtensionObject_(t),
              (t.extensionObject_[o] =
                t.extensionObject_[o] || jspb.Message.EMPTY_LIST_SENTINEL_));
    if (i && i.length)
      for (r = 0; r < i.length; r++) jspb.Message.computeOneofCase(t, i[r]);
  };
  goog.exportProperty(jspb.Message, "initialize", jspb.Message.initialize);
  jspb.Message.EMPTY_LIST_SENTINEL_ =
    goog.DEBUG && Object.freeze ? Object.freeze([]) : [];
  jspb.Message.isArray_ = function (t) {
    return jspb.Message.ASSUME_LOCAL_ARRAYS
      ? t instanceof Array
      : Array.isArray(t);
  };
  jspb.Message.isExtensionObject_ = function (t) {
    return (
      t !== null &&
      typeof t == "object" &&
      !jspb.Message.isArray_(t) &&
      !(jspb.Message.SUPPORTS_UINT8ARRAY_ && t instanceof Uint8Array)
    );
  };
  jspb.Message.initPivotAndExtensionObject_ = function (t, r) {
    var o = t.array.length,
      s = -1;
    if (
      o &&
      ((s = o - 1), (o = t.array[s]), jspb.Message.isExtensionObject_(o))
    ) {
      (t.pivot_ = jspb.Message.getFieldNumber_(t, s)), (t.extensionObject_ = o);
      return;
    }
    -1 < r
      ? ((t.pivot_ = Math.max(r, jspb.Message.getFieldNumber_(t, s + 1))),
        (t.extensionObject_ = null))
      : (t.pivot_ = Number.MAX_VALUE);
  };
  jspb.Message.maybeInitEmptyExtensionObject_ = function (t) {
    var r = jspb.Message.getIndex_(t, t.pivot_);
    t.array[r] || (t.extensionObject_ = t.array[r] = {});
  };
  jspb.Message.toObjectList = function (t, r, o) {
    for (var s = [], n = 0; n < t.length; n++) s[n] = r.call(t[n], o, t[n]);
    return s;
  };
  goog.exportProperty(jspb.Message, "toObjectList", jspb.Message.toObjectList);
  jspb.Message.toObjectExtension = function (t, r, o, s, n) {
    for (var i in o) {
      var p = o[i],
        _ = s.call(t, p);
      if (_ != null) {
        for (var m in p.fieldName) if (p.fieldName.hasOwnProperty(m)) break;
        r[m] = p.toObjectFn
          ? p.isRepeated
            ? jspb.Message.toObjectList(_, p.toObjectFn, n)
            : p.toObjectFn(n, _)
          : _;
      }
    }
  };
  goog.exportProperty(
    jspb.Message,
    "toObjectExtension",
    jspb.Message.toObjectExtension,
  );
  jspb.Message.serializeBinaryExtensions = function (t, r, o, s) {
    for (var n in o) {
      var i = o[n],
        p = i.fieldInfo;
      if (!i.binaryWriterFn)
        throw Error(
          "Message extension present that was generated without binary serialization support",
        );
      var _ = s.call(t, p);
      if (_ != null)
        if (p.isMessageType())
          if (i.binaryMessageSerializeFn)
            i.binaryWriterFn.call(
              r,
              p.fieldIndex,
              _,
              i.binaryMessageSerializeFn,
            );
          else
            throw Error(
              "Message extension present holding submessage without binary support enabled, and message is being serialized to binary format",
            );
        else i.binaryWriterFn.call(r, p.fieldIndex, _);
    }
  };
  goog.exportProperty(
    jspb.Message,
    "serializeBinaryExtensions",
    jspb.Message.serializeBinaryExtensions,
  );
  jspb.Message.readBinaryExtension = function (t, r, o, s, n) {
    var i = o[r.getFieldNumber()];
    if (i) {
      if (((o = i.fieldInfo), !i.binaryReaderFn))
        throw Error(
          "Deserializing extension whose generated code does not support binary format",
        );
      if (o.isMessageType()) {
        var p = new o.ctor();
        i.binaryReaderFn.call(r, p, i.binaryMessageDeserializeFn);
      } else p = i.binaryReaderFn.call(r);
      o.isRepeated && !i.isPacked
        ? (r = s.call(t, o))
          ? r.push(p)
          : n.call(t, o, [p])
        : n.call(t, o, p);
    } else r.skipField();
  };
  goog.exportProperty(
    jspb.Message,
    "readBinaryExtension",
    jspb.Message.readBinaryExtension,
  );
  jspb.Message.getField = function (t, r) {
    if (r < t.pivot_) {
      r = jspb.Message.getIndex_(t, r);
      var o = t.array[r];
      return o === jspb.Message.EMPTY_LIST_SENTINEL_ ? (t.array[r] = []) : o;
    }
    if (t.extensionObject_)
      return (
        (o = t.extensionObject_[r]),
        o === jspb.Message.EMPTY_LIST_SENTINEL_
          ? (t.extensionObject_[r] = [])
          : o
      );
  };
  goog.exportProperty(jspb.Message, "getField", jspb.Message.getField);
  jspb.Message.getRepeatedField = function (t, r) {
    return jspb.Message.getField(t, r);
  };
  goog.exportProperty(
    jspb.Message,
    "getRepeatedField",
    jspb.Message.getRepeatedField,
  );
  jspb.Message.getOptionalFloatingPointField = function (t, r) {
    return (t = jspb.Message.getField(t, r)), t == null ? t : +t;
  };
  goog.exportProperty(
    jspb.Message,
    "getOptionalFloatingPointField",
    jspb.Message.getOptionalFloatingPointField,
  );
  jspb.Message.getBooleanField = function (t, r) {
    return (t = jspb.Message.getField(t, r)), t == null ? t : !!t;
  };
  goog.exportProperty(
    jspb.Message,
    "getBooleanField",
    jspb.Message.getBooleanField,
  );
  jspb.Message.getRepeatedFloatingPointField = function (t, r) {
    var o = jspb.Message.getRepeatedField(t, r);
    if (
      (t.convertedPrimitiveFields_ || (t.convertedPrimitiveFields_ = {}),
      !t.convertedPrimitiveFields_[r])
    ) {
      for (var s = 0; s < o.length; s++) o[s] = +o[s];
      t.convertedPrimitiveFields_[r] = !0;
    }
    return o;
  };
  goog.exportProperty(
    jspb.Message,
    "getRepeatedFloatingPointField",
    jspb.Message.getRepeatedFloatingPointField,
  );
  jspb.Message.getRepeatedBooleanField = function (t, r) {
    var o = jspb.Message.getRepeatedField(t, r);
    if (
      (t.convertedPrimitiveFields_ || (t.convertedPrimitiveFields_ = {}),
      !t.convertedPrimitiveFields_[r])
    ) {
      for (var s = 0; s < o.length; s++) o[s] = !!o[s];
      t.convertedPrimitiveFields_[r] = !0;
    }
    return o;
  };
  goog.exportProperty(
    jspb.Message,
    "getRepeatedBooleanField",
    jspb.Message.getRepeatedBooleanField,
  );
  jspb.Message.bytesAsB64 = function (t) {
    return t == null || typeof t == "string"
      ? t
      : jspb.Message.SUPPORTS_UINT8ARRAY_ && t instanceof Uint8Array
        ? goog.crypt.base64.encodeByteArray(t)
        : (jspb.asserts.fail("Cannot coerce to b64 string: " + goog.typeOf(t)),
          null);
  };
  goog.exportProperty(jspb.Message, "bytesAsB64", jspb.Message.bytesAsB64);
  jspb.Message.bytesAsU8 = function (t) {
    return t == null || t instanceof Uint8Array
      ? t
      : typeof t == "string"
        ? goog.crypt.base64.decodeStringToUint8Array(t)
        : (jspb.asserts.fail("Cannot coerce to Uint8Array: " + goog.typeOf(t)),
          null);
  };
  goog.exportProperty(jspb.Message, "bytesAsU8", jspb.Message.bytesAsU8);
  jspb.Message.bytesListAsB64 = function (t) {
    return (
      jspb.Message.assertConsistentTypes_(t),
      t.length && typeof t[0] != "string"
        ? goog.array.map(t, jspb.Message.bytesAsB64)
        : t
    );
  };
  goog.exportProperty(
    jspb.Message,
    "bytesListAsB64",
    jspb.Message.bytesListAsB64,
  );
  jspb.Message.bytesListAsU8 = function (t) {
    return (
      jspb.Message.assertConsistentTypes_(t),
      !t.length || t[0] instanceof Uint8Array
        ? t
        : goog.array.map(t, jspb.Message.bytesAsU8)
    );
  };
  goog.exportProperty(
    jspb.Message,
    "bytesListAsU8",
    jspb.Message.bytesListAsU8,
  );
  jspb.Message.assertConsistentTypes_ = function (t) {
    if (goog.DEBUG && t && 1 < t.length) {
      var r = goog.typeOf(t[0]);
      goog.array.forEach(t, function (o) {
        goog.typeOf(o) != r &&
          jspb.asserts.fail(
            "Inconsistent type in JSPB repeated field array. Got " +
              goog.typeOf(o) +
              " expected " +
              r,
          );
      });
    }
  };
  jspb.Message.getFieldWithDefault = function (t, r, o) {
    return (t = jspb.Message.getField(t, r)), t ?? o;
  };
  goog.exportProperty(
    jspb.Message,
    "getFieldWithDefault",
    jspb.Message.getFieldWithDefault,
  );
  jspb.Message.getBooleanFieldWithDefault = function (t, r, o) {
    return (t = jspb.Message.getBooleanField(t, r)), t ?? o;
  };
  goog.exportProperty(
    jspb.Message,
    "getBooleanFieldWithDefault",
    jspb.Message.getBooleanFieldWithDefault,
  );
  jspb.Message.getFloatingPointFieldWithDefault = function (t, r, o) {
    return (t = jspb.Message.getOptionalFloatingPointField(t, r)), t ?? o;
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
  jspb.Message.getMapField = function (t, r, o, s) {
    if ((t.wrappers_ || (t.wrappers_ = {}), r in t.wrappers_))
      return t.wrappers_[r];
    var n = jspb.Message.getField(t, r);
    if (!n) {
      if (o) return;
      (n = []), jspb.Message.setField(t, r, n);
    }
    return (t.wrappers_[r] = new jspb.Map(n, s));
  };
  goog.exportProperty(jspb.Message, "getMapField", jspb.Message.getMapField);
  jspb.Message.setField = function (t, r, o) {
    return (
      jspb.asserts.assertInstanceof(t, jspb.Message),
      r < t.pivot_
        ? (t.array[jspb.Message.getIndex_(t, r)] = o)
        : (jspb.Message.maybeInitEmptyExtensionObject_(t),
          (t.extensionObject_[r] = o)),
      t
    );
  };
  goog.exportProperty(jspb.Message, "setField", jspb.Message.setField);
  jspb.Message.setProto3IntField = function (t, r, o) {
    return jspb.Message.setFieldIgnoringDefault_(t, r, o, 0);
  };
  goog.exportProperty(
    jspb.Message,
    "setProto3IntField",
    jspb.Message.setProto3IntField,
  );
  jspb.Message.setProto3FloatField = function (t, r, o) {
    return jspb.Message.setFieldIgnoringDefault_(t, r, o, 0);
  };
  goog.exportProperty(
    jspb.Message,
    "setProto3FloatField",
    jspb.Message.setProto3FloatField,
  );
  jspb.Message.setProto3BooleanField = function (t, r, o) {
    return jspb.Message.setFieldIgnoringDefault_(t, r, o, !1);
  };
  goog.exportProperty(
    jspb.Message,
    "setProto3BooleanField",
    jspb.Message.setProto3BooleanField,
  );
  jspb.Message.setProto3StringField = function (t, r, o) {
    return jspb.Message.setFieldIgnoringDefault_(t, r, o, "");
  };
  goog.exportProperty(
    jspb.Message,
    "setProto3StringField",
    jspb.Message.setProto3StringField,
  );
  jspb.Message.setProto3BytesField = function (t, r, o) {
    return jspb.Message.setFieldIgnoringDefault_(t, r, o, "");
  };
  goog.exportProperty(
    jspb.Message,
    "setProto3BytesField",
    jspb.Message.setProto3BytesField,
  );
  jspb.Message.setProto3EnumField = function (t, r, o) {
    return jspb.Message.setFieldIgnoringDefault_(t, r, o, 0);
  };
  goog.exportProperty(
    jspb.Message,
    "setProto3EnumField",
    jspb.Message.setProto3EnumField,
  );
  jspb.Message.setProto3StringIntField = function (t, r, o) {
    return jspb.Message.setFieldIgnoringDefault_(t, r, o, "0");
  };
  goog.exportProperty(
    jspb.Message,
    "setProto3StringIntField",
    jspb.Message.setProto3StringIntField,
  );
  jspb.Message.setFieldIgnoringDefault_ = function (t, r, o, s) {
    return (
      jspb.asserts.assertInstanceof(t, jspb.Message),
      o !== s
        ? jspb.Message.setField(t, r, o)
        : r < t.pivot_
          ? (t.array[jspb.Message.getIndex_(t, r)] = null)
          : (jspb.Message.maybeInitEmptyExtensionObject_(t),
            delete t.extensionObject_[r]),
      t
    );
  };
  jspb.Message.addToRepeatedField = function (t, r, o, s) {
    return (
      jspb.asserts.assertInstanceof(t, jspb.Message),
      (r = jspb.Message.getRepeatedField(t, r)),
      s != null ? r.splice(s, 0, o) : r.push(o),
      t
    );
  };
  goog.exportProperty(
    jspb.Message,
    "addToRepeatedField",
    jspb.Message.addToRepeatedField,
  );
  jspb.Message.setOneofField = function (t, r, o, s) {
    return (
      jspb.asserts.assertInstanceof(t, jspb.Message),
      (o = jspb.Message.computeOneofCase(t, o)) &&
        o !== r &&
        s !== void 0 &&
        (t.wrappers_ && o in t.wrappers_ && (t.wrappers_[o] = void 0),
        jspb.Message.setField(t, o, void 0)),
      jspb.Message.setField(t, r, s)
    );
  };
  goog.exportProperty(
    jspb.Message,
    "setOneofField",
    jspb.Message.setOneofField,
  );
  jspb.Message.computeOneofCase = function (t, r) {
    for (var o, s, n = 0; n < r.length; n++) {
      var i = r[n],
        p = jspb.Message.getField(t, i);
      p != null && ((o = i), (s = p), jspb.Message.setField(t, i, void 0));
    }
    return o ? (jspb.Message.setField(t, o, s), o) : 0;
  };
  goog.exportProperty(
    jspb.Message,
    "computeOneofCase",
    jspb.Message.computeOneofCase,
  );
  jspb.Message.getWrapperField = function (t, r, o, s) {
    if ((t.wrappers_ || (t.wrappers_ = {}), !t.wrappers_[o])) {
      var n = jspb.Message.getField(t, o);
      (s || n) && (t.wrappers_[o] = new r(n));
    }
    return t.wrappers_[o];
  };
  goog.exportProperty(
    jspb.Message,
    "getWrapperField",
    jspb.Message.getWrapperField,
  );
  jspb.Message.getRepeatedWrapperField = function (t, r, o) {
    return (
      jspb.Message.wrapRepeatedField_(t, r, o),
      (r = t.wrappers_[o]),
      r == jspb.Message.EMPTY_LIST_SENTINEL_ && (r = t.wrappers_[o] = []),
      r
    );
  };
  goog.exportProperty(
    jspb.Message,
    "getRepeatedWrapperField",
    jspb.Message.getRepeatedWrapperField,
  );
  jspb.Message.wrapRepeatedField_ = function (t, r, o) {
    if ((t.wrappers_ || (t.wrappers_ = {}), !t.wrappers_[o])) {
      for (
        var s = jspb.Message.getRepeatedField(t, o), n = [], i = 0;
        i < s.length;
        i++
      )
        n[i] = new r(s[i]);
      t.wrappers_[o] = n;
    }
  };
  jspb.Message.setWrapperField = function (t, r, o) {
    jspb.asserts.assertInstanceof(t, jspb.Message),
      t.wrappers_ || (t.wrappers_ = {});
    var s = o && o.toArray();
    return (t.wrappers_[r] = o), jspb.Message.setField(t, r, s);
  };
  goog.exportProperty(
    jspb.Message,
    "setWrapperField",
    jspb.Message.setWrapperField,
  );
  jspb.Message.setOneofWrapperField = function (t, r, o, s) {
    jspb.asserts.assertInstanceof(t, jspb.Message),
      t.wrappers_ || (t.wrappers_ = {});
    var n = s && s.toArray();
    return (t.wrappers_[r] = s), jspb.Message.setOneofField(t, r, o, n);
  };
  goog.exportProperty(
    jspb.Message,
    "setOneofWrapperField",
    jspb.Message.setOneofWrapperField,
  );
  jspb.Message.setRepeatedWrapperField = function (t, r, o) {
    jspb.asserts.assertInstanceof(t, jspb.Message),
      t.wrappers_ || (t.wrappers_ = {}),
      (o = o || []);
    for (var s = [], n = 0; n < o.length; n++) s[n] = o[n].toArray();
    return (t.wrappers_[r] = o), jspb.Message.setField(t, r, s);
  };
  goog.exportProperty(
    jspb.Message,
    "setRepeatedWrapperField",
    jspb.Message.setRepeatedWrapperField,
  );
  jspb.Message.addToRepeatedWrapperField = function (t, r, o, s, n) {
    jspb.Message.wrapRepeatedField_(t, s, r);
    var i = t.wrappers_[r];
    return (
      i || (i = t.wrappers_[r] = []),
      (o = o || new s()),
      (t = jspb.Message.getRepeatedField(t, r)),
      n != null
        ? (i.splice(n, 0, o), t.splice(n, 0, o.toArray()))
        : (i.push(o), t.push(o.toArray())),
      o
    );
  };
  goog.exportProperty(
    jspb.Message,
    "addToRepeatedWrapperField",
    jspb.Message.addToRepeatedWrapperField,
  );
  jspb.Message.toMap = function (t, r, o, s) {
    for (var n = {}, i = 0; i < t.length; i++)
      n[r.call(t[i])] = o ? o.call(t[i], s, t[i]) : t[i];
    return n;
  };
  goog.exportProperty(jspb.Message, "toMap", jspb.Message.toMap);
  jspb.Message.prototype.syncMapFields_ = function () {
    if (this.wrappers_)
      for (var t in this.wrappers_) {
        var r = this.wrappers_[t];
        if (Array.isArray(r))
          for (var o = 0; o < r.length; o++) r[o] && r[o].toArray();
        else r && r.toArray();
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
  jspb.Message.prototype.getExtension = function (t) {
    if (this.extensionObject_) {
      this.wrappers_ || (this.wrappers_ = {});
      var r = t.fieldIndex;
      if (t.isRepeated) {
        if (t.isMessageType())
          return (
            this.wrappers_[r] ||
              (this.wrappers_[r] = goog.array.map(
                this.extensionObject_[r] || [],
                function (o) {
                  return new t.ctor(o);
                },
              )),
            this.wrappers_[r]
          );
      } else if (t.isMessageType())
        return (
          !this.wrappers_[r] &&
            this.extensionObject_[r] &&
            (this.wrappers_[r] = new t.ctor(this.extensionObject_[r])),
          this.wrappers_[r]
        );
      return this.extensionObject_[r];
    }
  };
  goog.exportProperty(
    jspb.Message.prototype,
    "getExtension",
    jspb.Message.prototype.getExtension,
  );
  jspb.Message.prototype.setExtension = function (t, r) {
    this.wrappers_ || (this.wrappers_ = {}),
      jspb.Message.maybeInitEmptyExtensionObject_(this);
    var o = t.fieldIndex;
    return (
      t.isRepeated
        ? ((r = r || []),
          t.isMessageType()
            ? ((this.wrappers_[o] = r),
              (this.extensionObject_[o] = goog.array.map(r, function (s) {
                return s.toArray();
              })))
            : (this.extensionObject_[o] = r))
        : t.isMessageType()
          ? ((this.wrappers_[o] = r),
            (this.extensionObject_[o] = r && r.toArray()))
          : (this.extensionObject_[o] = r),
      this
    );
  };
  goog.exportProperty(
    jspb.Message.prototype,
    "setExtension",
    jspb.Message.prototype.setExtension,
  );
  jspb.Message.difference = function (t, r) {
    if (!(t instanceof r.constructor))
      throw Error("Messages have different types.");
    var o = t.toArray();
    r = r.toArray();
    var s = [],
      n = 0,
      i = o.length > r.length ? o.length : r.length;
    for (
      t.getJsPbMessageId() && ((s[0] = t.getJsPbMessageId()), (n = 1));
      n < i;
      n++
    )
      jspb.Message.compareFields(o[n], r[n]) || (s[n] = r[n]);
    return new t.constructor(s);
  };
  goog.exportProperty(jspb.Message, "difference", jspb.Message.difference);
  jspb.Message.equals = function (t, r) {
    return (
      t == r ||
      (!(!t || !r) &&
        t instanceof r.constructor &&
        jspb.Message.compareFields(t.toArray(), r.toArray()))
    );
  };
  goog.exportProperty(jspb.Message, "equals", jspb.Message.equals);
  jspb.Message.compareExtensions = function (t, r) {
    (t = t || {}), (r = r || {});
    var o = {},
      s;
    for (s in t) o[s] = 0;
    for (s in r) o[s] = 0;
    for (s in o) if (!jspb.Message.compareFields(t[s], r[s])) return !1;
    return !0;
  };
  goog.exportProperty(
    jspb.Message,
    "compareExtensions",
    jspb.Message.compareExtensions,
  );
  jspb.Message.compareFields = function (t, r) {
    if (t == r) return !0;
    if (!goog.isObject(t) || !goog.isObject(r))
      return (typeof t == "number" && isNaN(t)) ||
        (typeof r == "number" && isNaN(r))
        ? String(t) == String(r)
        : !1;
    if (t.constructor != r.constructor) return !1;
    if (jspb.Message.SUPPORTS_UINT8ARRAY_ && t.constructor === Uint8Array) {
      if (t.length != r.length) return !1;
      for (var o = 0; o < t.length; o++) if (t[o] != r[o]) return !1;
      return !0;
    }
    if (t.constructor === Array) {
      var s = void 0,
        n = void 0,
        i = Math.max(t.length, r.length);
      for (o = 0; o < i; o++) {
        var p = t[o],
          _ = r[o];
        if (
          (p &&
            p.constructor == Object &&
            (jspb.asserts.assert(s === void 0),
            jspb.asserts.assert(o === t.length - 1),
            (s = p),
            (p = void 0)),
          _ &&
            _.constructor == Object &&
            (jspb.asserts.assert(n === void 0),
            jspb.asserts.assert(o === r.length - 1),
            (n = _),
            (_ = void 0)),
          !jspb.Message.compareFields(p, _))
        )
          return !1;
      }
      return s || n
        ? ((s = s || {}), (n = n || {}), jspb.Message.compareExtensions(s, n))
        : !0;
    }
    if (t.constructor === Object) return jspb.Message.compareExtensions(t, r);
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
  jspb.Message.clone = function (t) {
    return jspb.Message.cloneMessage(t);
  };
  goog.exportProperty(jspb.Message, "clone", jspb.Message.clone);
  jspb.Message.cloneMessage = function (t) {
    return new t.constructor(jspb.Message.clone_(t.toArray()));
  };
  jspb.Message.copyInto = function (t, r) {
    jspb.asserts.assertInstanceof(t, jspb.Message),
      jspb.asserts.assertInstanceof(r, jspb.Message),
      jspb.asserts.assert(
        t.constructor == r.constructor,
        "Copy source and target message should have the same type.",
      ),
      (t = jspb.Message.clone(t));
    for (
      var o = r.toArray(), s = t.toArray(), n = (o.length = 0);
      n < s.length;
      n++
    )
      o[n] = s[n];
    (r.wrappers_ = t.wrappers_), (r.extensionObject_ = t.extensionObject_);
  };
  goog.exportProperty(jspb.Message, "copyInto", jspb.Message.copyInto);
  jspb.Message.clone_ = function (t) {
    if (Array.isArray(t)) {
      for (var r = Array(t.length), o = 0; o < t.length; o++) {
        var s = t[o];
        s != null &&
          (r[o] =
            typeof s == "object"
              ? jspb.Message.clone_(jspb.asserts.assert(s))
              : s);
      }
      return r;
    }
    if (jspb.Message.SUPPORTS_UINT8ARRAY_ && t instanceof Uint8Array)
      return new Uint8Array(t);
    r = {};
    for (o in t)
      (s = t[o]),
        s != null &&
          (r[o] =
            typeof s == "object"
              ? jspb.Message.clone_(jspb.asserts.assert(s))
              : s);
    return r;
  };
  jspb.Message.registerMessageType = function (t, r) {
    r.messageId = t;
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
    (exports.object = { extend: goog.object.extend }),
    (exports.typeOf = goog.typeOf));
});
var gt = X($());
var T = X($(), 1);
var j = X($()),
  l = j.BinaryReader.prototype,
  u = j.BinaryWriter.prototype;
function h(t) {
  let r = {},
    { fields: o } = t;
  for (let s in o) {
    let n = o[s];
    r[n.n] = n;
  }
  return r;
}
function P(t, r) {
  let { proto: o, fields: s } = t,
    n = new o();
  if (r == null) return n;
  for (let i in s) {
    let { n: p, c: _, r: m, d: A, q: M } = s[i];
    if (!Object.prototype.hasOwnProperty.call(r, i)) continue;
    let v = r[i];
    _
      ? m
        ? j.Message.setRepeatedWrapperField(
            n,
            p,
            Array.isArray(v) ? v.map((w) => _.fromObject(w)) : [],
          )
        : j.Message.setWrapperField(n, p, _.fromObject(v))
      : j.Message.setField(n, p, v);
  }
  return n;
}
function C(t, r, o) {
  let { proto: s, fields: n } = t,
    i = {};
  for (let p in n) {
    let { n: _, c: m, r: A, d: M, q: v } = n[p];
    if (m)
      if (A)
        i[p] = j.Message.toObjectList(
          j.Message.getRepeatedWrapperField(o, m, _),
          m.toObject,
          r,
        );
      else {
        let w = j.Message.getWrapperField(o, m, _, v ? 1 : 0);
        w && (i[p] = m.toObject(r, w));
      }
    else {
      let w = j.Message.getFieldWithDefault(o, _, M !== void 0 ? M : null);
      (w !== null || v) && (i[p] = w);
    }
  }
  return r && (i.$jspbMessageInstance = o), i;
}
function R(t, r, o) {
  for (; o.nextField() && !o.isEndGroup(); ) {
    let s = o.getFieldNumber(),
      n = t[s];
    if (n) {
      let { n: i, c: p, r: _, d: m, q: A, br: M } = n;
      if (p) {
        let v = new p();
        o.readMessage(v, p.deserializeBinaryFromReader),
          _
            ? j.Message.addToRepeatedWrapperField(r, i, v, p)
            : j.Message.setWrapperField(r, i, v);
      } else if (M) {
        let v = M.call(o);
        _ ? j.Message.addToRepeatedField(r, i, v) : j.Message.setField(r, i, v);
      } else
        console.assert(
          !!M,
          `Reader func not set for field number ${i} in class ${p}`,
        ),
          o.skipField();
    } else o.skipField();
  }
  return r;
}
function k(t, r, o) {
  let { fields: s } = t;
  for (let n in s) {
    let { n: i, c: p, r: _, d: m, q: A, bw: M } = s[n];
    if (p)
      if (_) {
        let v = j.Message.getRepeatedWrapperField(r, p, i);
        ((v && v.length) || A) &&
          o.writeRepeatedMessage(i, v, p.serializeBinaryToWriter);
      } else {
        let v = j.Message.getWrapperField(r, p, i, A ? 1 : 0);
        v && o.writeMessage(i, v, p.serializeBinaryToWriter);
      }
    else if (M) {
      let v = j.Message.getField(r, i);
      typeof v < "u" && M.call(o, i, v);
    } else
      console.assert(
        !!M,
        `Writer func not set for field number ${i} in class ${p}`,
      );
  }
}
function B(t) {
  let r = t.proto;
  for (let o in t.fields) {
    let s = t.fields[o],
      { n, c: i, r: p, d: _, q: m } = s;
    Object.prototype.hasOwnProperty.call(s, "d")
      ? (r.prototype[o] = fe(j.Message.getFieldWithDefault, n, _))
      : i
        ? p
          ? (r.prototype[o] = fe(j.Message.getRepeatedWrapperField, i, n))
          : (r.prototype[o] = Dt(i, n))
        : (r.prototype[o] = fe(j.Message.getField, n)),
      i
        ? p
          ? (r.prototype[`set_${o}`] = Se(j.Message.setRepeatedWrapperField, n))
          : (r.prototype[`set_${o}`] = Se(j.Message.setWrapperField, n))
        : (r.prototype[`set_${o}`] = Se(j.Message.setField, n)),
      p && (r.prototype[`add_${o}`] = Ut(n, i));
  }
}
function fe(t, ...r) {
  return function () {
    return t(this, ...r);
  };
}
function Dt(t, r) {
  return function (o = !0) {
    return j.Message.getWrapperField(this, t, r, o ? 1 : 0);
  };
}
function Se(t, r) {
  return function (o) {
    return t(this, r, o);
  };
}
function Ut(t, r) {
  return r
    ? function (o, s) {
        return j.Message.addToRepeatedWrapperField(this, t, o, r, s);
      }
    : function (o, s) {
        j.Message.addToRepeatedField(this, t, o, s);
      };
}
var H = T.Message;
var ft = class t extends H {
  static ImplementsStaticInterface() {}
  constructor(r = null) {
    super(),
      t.prototype.v4 || B(t.M()),
      H.initialize(this, r, 0, -1, void 0, null);
  }
  static sm_m;
  static sm_mbf;
  static M() {
    return (
      t.sm_m ||
        (t.sm_m = {
          proto: t,
          fields: {
            v4: { n: 1, br: l.readFixed32, bw: u.writeFixed32 },
            v6: { n: 2, br: l.readBytes, bw: u.writeBytes },
          },
        }),
      t.sm_m
    );
  }
  static MBF() {
    return t.sm_mbf || (t.sm_mbf = h(t.M())), t.sm_mbf;
  }
  toObject(r = !1) {
    return t.toObject(r, this);
  }
  static toObject(r, o) {
    return C(t.M(), r, o);
  }
  static fromObject(r) {
    return P(t.M(), r);
  }
  static deserializeBinary(r) {
    let o = new T.BinaryReader(r),
      s = new t();
    return t.deserializeBinaryFromReader(s, o);
  }
  static deserializeBinaryFromReader(r, o) {
    return R(t.MBF(), r, o);
  }
  serializeBinary() {
    var r = new T.BinaryWriter();
    return t.serializeBinaryToWriter(this, r), r.getResultBuffer();
  }
  static serializeBinaryToWriter(r, o) {
    k(t.M(), r, o);
  }
  serializeBase64String() {
    var r = new T.BinaryWriter();
    return t.serializeBinaryToWriter(this, r), r.getResultBase64String();
  }
  getClassName() {
    return "CMsgIPAddress";
  }
};
var ye = class t extends H {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        t.prototype.dst_gcid_queue || B(t.M()),
        H.initialize(this, r, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              dst_gcid_queue: {
                n: 1,
                br: l.readUint64String,
                bw: u.writeUint64String,
              },
              dst_gc_dir_index: { n: 2, br: l.readUint32, bw: u.writeUint32 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = h(t.M())), t.sm_mbf;
    }
    toObject(r = !1) {
      return t.toObject(r, this);
    }
    static toObject(r, o) {
      return C(t.M(), r, o);
    }
    static fromObject(r) {
      return P(t.M(), r);
    }
    static deserializeBinary(r) {
      let o = new T.BinaryReader(r),
        s = new t();
      return t.deserializeBinaryFromReader(s, o);
    }
    static deserializeBinaryFromReader(r, o) {
      return R(t.MBF(), r, o);
    }
    serializeBinary() {
      var r = new T.BinaryWriter();
      return t.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, o) {
      k(t.M(), r, o);
    }
    serializeBase64String() {
      var r = new T.BinaryWriter();
      return t.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CMsgGCRoutingProtoBufHeader";
    }
  },
  te = class t extends H {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        t.prototype.steamid || B(t.M()),
        H.initialize(this, r, 0, -1, [27, 41], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              steamid: {
                n: 1,
                br: l.readFixed64String,
                bw: u.writeFixed64String,
              },
              client_sessionid: { n: 2, br: l.readInt32, bw: u.writeInt32 },
              routing_appid: { n: 3, br: l.readUint32, bw: u.writeUint32 },
              jobid_source: {
                n: 10,
                d: "18446744073709551615",
                br: l.readFixed64String,
                bw: u.writeFixed64String,
              },
              jobid_target: {
                n: 11,
                d: "18446744073709551615",
                br: l.readFixed64String,
                bw: u.writeFixed64String,
              },
              target_job_name: { n: 12, br: l.readString, bw: u.writeString },
              seq_num: { n: 24, br: l.readInt32, bw: u.writeInt32 },
              eresult: { n: 13, d: 2, br: l.readInt32, bw: u.writeInt32 },
              error_message: { n: 14, br: l.readString, bw: u.writeString },
              ip: { n: 15, br: l.readUint32, bw: u.writeUint32 },
              ip_v6: { n: 29, br: l.readBytes, bw: u.writeBytes },
              auth_account_flags: {
                n: 16,
                br: l.readUint32,
                bw: u.writeUint32,
              },
              token_source: { n: 22, br: l.readUint32, bw: u.writeUint32 },
              admin_spoofing_user: { n: 23, br: l.readBool, bw: u.writeBool },
              transport_error: {
                n: 17,
                d: 1,
                br: l.readInt32,
                bw: u.writeInt32,
              },
              messageid: {
                n: 18,
                d: "18446744073709551615",
                br: l.readUint64String,
                bw: u.writeUint64String,
              },
              publisher_group_id: {
                n: 19,
                br: l.readUint32,
                bw: u.writeUint32,
              },
              sysid: { n: 20, br: l.readUint32, bw: u.writeUint32 },
              trace_tag: {
                n: 21,
                br: l.readUint64String,
                bw: u.writeUint64String,
              },
              webapi_key_id: { n: 25, br: l.readUint32, bw: u.writeUint32 },
              is_from_external_source: {
                n: 26,
                br: l.readBool,
                bw: u.writeBool,
              },
              forward_to_sysid: {
                n: 27,
                r: !0,
                q: !0,
                br: l.readUint32,
                pbr: l.readPackedUint32,
                bw: u.writeRepeatedUint32,
              },
              cm_sysid: { n: 28, br: l.readUint32, bw: u.writeUint32 },
              launcher_type: {
                n: 31,
                d: 0,
                br: l.readUint32,
                bw: u.writeUint32,
              },
              realm: { n: 32, d: 0, br: l.readUint32, bw: u.writeUint32 },
              timeout_ms: { n: 33, d: -1, br: l.readInt32, bw: u.writeInt32 },
              debug_source: { n: 34, br: l.readString, bw: u.writeString },
              debug_source_string_index: {
                n: 35,
                br: l.readUint32,
                bw: u.writeUint32,
              },
              token_id: {
                n: 36,
                br: l.readUint64String,
                bw: u.writeUint64String,
              },
              routing_gc: { n: 37, c: ye },
              session_disposition: {
                n: 38,
                d: 0,
                br: l.readEnum,
                bw: u.writeEnum,
              },
              wg_token: { n: 39, br: l.readString, bw: u.writeString },
              webui_auth_key: { n: 40, br: l.readString, bw: u.writeString },
              exclude_client_sessionids: {
                n: 41,
                r: !0,
                q: !0,
                br: l.readInt32,
                pbr: l.readPackedInt32,
                bw: u.writeRepeatedInt32,
              },
              admin_request_spoofing_steamid: {
                n: 43,
                br: l.readFixed64String,
                bw: u.writeFixed64String,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = h(t.M())), t.sm_mbf;
    }
    toObject(r = !1) {
      return t.toObject(r, this);
    }
    static toObject(r, o) {
      return C(t.M(), r, o);
    }
    static fromObject(r) {
      return P(t.M(), r);
    }
    static deserializeBinary(r) {
      let o = new T.BinaryReader(r),
        s = new t();
      return t.deserializeBinaryFromReader(s, o);
    }
    static deserializeBinaryFromReader(r, o) {
      return R(t.MBF(), r, o);
    }
    serializeBinary() {
      var r = new T.BinaryWriter();
      return t.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, o) {
      k(t.M(), r, o);
    }
    serializeBase64String() {
      var r = new T.BinaryWriter();
      return t.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CMsgProtoBufHeader";
    }
  };
var St = class t extends H {
  static ImplementsStaticInterface() {}
  constructor(r = null) {
    super(),
      t.prototype.appid || B(t.M()),
      H.initialize(this, r, 0, -1, [17], null);
  }
  static sm_m;
  static sm_mbf;
  static M() {
    return (
      t.sm_m ||
        (t.sm_m = {
          proto: t,
          fields: {
            appid: { n: 1, br: l.readUint32, bw: u.writeUint32 },
            name: { n: 2, br: l.readString, bw: u.writeString },
            icon: { n: 3, br: l.readString, bw: u.writeString },
            tool: { n: 6, br: l.readBool, bw: u.writeBool },
            demo: { n: 7, br: l.readBool, bw: u.writeBool },
            media: { n: 8, br: l.readBool, bw: u.writeBool },
            community_visible_stats: { n: 9, br: l.readBool, bw: u.writeBool },
            friendly_name: { n: 10, br: l.readString, bw: u.writeString },
            propagation: { n: 11, br: l.readString, bw: u.writeString },
            has_adult_content: { n: 12, br: l.readBool, bw: u.writeBool },
            is_visible_in_steam_china: {
              n: 13,
              br: l.readBool,
              bw: u.writeBool,
            },
            app_type: { n: 14, br: l.readUint32, bw: u.writeUint32 },
            has_adult_content_sex: { n: 15, br: l.readBool, bw: u.writeBool },
            has_adult_content_violence: {
              n: 16,
              br: l.readBool,
              bw: u.writeBool,
            },
            content_descriptorids: {
              n: 17,
              r: !0,
              q: !0,
              br: l.readUint32,
              pbr: l.readPackedUint32,
              bw: u.writeRepeatedUint32,
            },
          },
        }),
      t.sm_m
    );
  }
  static MBF() {
    return t.sm_mbf || (t.sm_mbf = h(t.M())), t.sm_mbf;
  }
  toObject(r = !1) {
    return t.toObject(r, this);
  }
  static toObject(r, o) {
    return C(t.M(), r, o);
  }
  static fromObject(r) {
    return P(t.M(), r);
  }
  static deserializeBinary(r) {
    let o = new T.BinaryReader(r),
      s = new t();
    return t.deserializeBinaryFromReader(s, o);
  }
  static deserializeBinaryFromReader(r, o) {
    return R(t.MBF(), r, o);
  }
  serializeBinary() {
    var r = new T.BinaryWriter();
    return t.serializeBinaryToWriter(this, r), r.getResultBuffer();
  }
  static serializeBinaryToWriter(r, o) {
    k(t.M(), r, o);
  }
  serializeBase64String() {
    var r = new T.BinaryWriter();
    return t.serializeBinaryToWriter(this, r), r.getResultBase64String();
  }
  getClassName() {
    return "CCDDBAppDetailCommon";
  }
};
var he = class t extends H {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        t.prototype.clanid || B(t.M()),
        H.initialize(this, r, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              clanid: { n: 1, br: l.readUint32, bw: u.writeUint32 },
              event_gid: {
                n: 2,
                br: l.readFixed64String,
                bw: u.writeFixed64String,
              },
              announcement_gid: {
                n: 3,
                br: l.readFixed64String,
                bw: u.writeFixed64String,
              },
              rtime_start: { n: 4, br: l.readUint32, bw: u.writeUint32 },
              rtime_end: { n: 5, br: l.readUint32, bw: u.writeUint32 },
              priority_score: { n: 6, br: l.readUint32, bw: u.writeUint32 },
              type: { n: 7, br: l.readUint32, bw: u.writeUint32 },
              clamp_range_slot: { n: 8, br: l.readUint32, bw: u.writeUint32 },
              appid: { n: 9, br: l.readUint32, bw: u.writeUint32 },
              rtime32_last_modified: {
                n: 10,
                br: l.readUint32,
                bw: u.writeUint32,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = h(t.M())), t.sm_mbf;
    }
    toObject(r = !1) {
      return t.toObject(r, this);
    }
    static toObject(r, o) {
      return C(t.M(), r, o);
    }
    static fromObject(r) {
      return P(t.M(), r);
    }
    static deserializeBinary(r) {
      let o = new T.BinaryReader(r),
        s = new t();
      return t.deserializeBinaryFromReader(s, o);
    }
    static deserializeBinaryFromReader(r, o) {
      return R(t.MBF(), r, o);
    }
    serializeBinary() {
      var r = new T.BinaryWriter();
      return t.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, o) {
      k(t.M(), r, o);
    }
    serializeBase64String() {
      var r = new T.BinaryWriter();
      return t.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CClanEventUserNewsTuple";
    }
  },
  bt = class t extends H {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        t.prototype.rtime_before || B(t.M()),
        H.initialize(this, r, 0, -1, [4], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              rtime_before: { n: 1, br: l.readUint32, bw: u.writeUint32 },
              rtime_after: { n: 2, br: l.readUint32, bw: u.writeUint32 },
              qualified: { n: 3, br: l.readUint32, bw: u.writeUint32 },
              events: { n: 4, c: he, r: !0, q: !0 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = h(t.M())), t.sm_mbf;
    }
    toObject(r = !1) {
      return t.toObject(r, this);
    }
    static toObject(r, o) {
      return C(t.M(), r, o);
    }
    static fromObject(r) {
      return P(t.M(), r);
    }
    static deserializeBinary(r) {
      let o = new T.BinaryReader(r),
        s = new t();
      return t.deserializeBinaryFromReader(s, o);
    }
    static deserializeBinaryFromReader(r, o) {
      return R(t.MBF(), r, o);
    }
    serializeBinary() {
      var r = new T.BinaryWriter();
      return t.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, o) {
      k(t.M(), r, o);
    }
    serializeBase64String() {
      var r = new T.BinaryWriter();
      return t.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CClanMatchEventByRange";
    }
  };
var yt = class t extends H {
  static ImplementsStaticInterface() {}
  constructor(r = null) {
    super(),
      t.prototype.packageid || B(t.M()),
      H.initialize(this, r, 0, -1, void 0, null);
  }
  static sm_m;
  static sm_mbf;
  static M() {
    return (
      t.sm_m ||
        (t.sm_m = {
          proto: t,
          fields: {
            packageid: { n: 1, br: l.readUint32, bw: u.writeUint32 },
            reservation_state: { n: 2, br: l.readInt32, bw: u.writeInt32 },
            queue_position: { n: 3, br: l.readInt32, bw: u.writeInt32 },
            total_queue_size: { n: 4, br: l.readInt32, bw: u.writeInt32 },
            reservation_country_code: {
              n: 5,
              br: l.readString,
              bw: u.writeString,
            },
            expired: { n: 6, br: l.readBool, bw: u.writeBool },
            time_expires: { n: 7, br: l.readUint32, bw: u.writeUint32 },
            time_reserved: { n: 8, br: l.readUint32, bw: u.writeUint32 },
            rtime_estimated_notification: {
              n: 9,
              br: l.readUint32,
              bw: u.writeUint32,
            },
            notificaton_token: { n: 10, br: l.readString, bw: u.writeString },
          },
        }),
      t.sm_m
    );
  }
  static MBF() {
    return t.sm_mbf || (t.sm_mbf = h(t.M())), t.sm_mbf;
  }
  toObject(r = !1) {
    return t.toObject(r, this);
  }
  static toObject(r, o) {
    return C(t.M(), r, o);
  }
  static fromObject(r) {
    return P(t.M(), r);
  }
  static deserializeBinary(r) {
    let o = new T.BinaryReader(r),
      s = new t();
    return t.deserializeBinaryFromReader(s, o);
  }
  static deserializeBinaryFromReader(r, o) {
    return R(t.MBF(), r, o);
  }
  serializeBinary() {
    var r = new T.BinaryWriter();
    return t.serializeBinaryToWriter(this, r), r.getResultBuffer();
  }
  static serializeBinaryToWriter(r, o) {
    k(t.M(), r, o);
  }
  serializeBase64String() {
    var r = new T.BinaryWriter();
    return t.serializeBinaryToWriter(this, r), r.getResultBase64String();
  }
  getClassName() {
    return "CPackageReservationStatus";
  }
};
var ht = class t extends H {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        t.prototype.content_descriptors_to_exclude || B(t.M()),
        H.initialize(this, r, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              content_descriptors_to_exclude: { n: 1, c: Pe, r: !0, q: !0 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = h(t.M())), t.sm_mbf;
    }
    toObject(r = !1) {
      return t.toObject(r, this);
    }
    static toObject(r, o) {
      return C(t.M(), r, o);
    }
    static fromObject(r) {
      return P(t.M(), r);
    }
    static deserializeBinary(r) {
      let o = new T.BinaryReader(r),
        s = new t();
      return t.deserializeBinaryFromReader(s, o);
    }
    static deserializeBinaryFromReader(r, o) {
      return R(t.MBF(), r, o);
    }
    serializeBinary() {
      var r = new T.BinaryWriter();
      return t.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, o) {
      k(t.M(), r, o);
    }
    serializeBase64String() {
      var r = new T.BinaryWriter();
      return t.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "UserContentDescriptorPreferences";
    }
  },
  Pe = class t extends H {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        t.prototype.content_descriptorid || B(t.M()),
        H.initialize(this, r, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              content_descriptorid: {
                n: 1,
                br: l.readUint32,
                bw: u.writeUint32,
              },
              timestamp_added: { n: 2, br: l.readUint32, bw: u.writeUint32 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = h(t.M())), t.sm_mbf;
    }
    toObject(r = !1) {
      return t.toObject(r, this);
    }
    static toObject(r, o) {
      return C(t.M(), r, o);
    }
    static fromObject(r) {
      return P(t.M(), r);
    }
    static deserializeBinary(r) {
      let o = new T.BinaryReader(r),
        s = new t();
      return t.deserializeBinaryFromReader(s, o);
    }
    static deserializeBinaryFromReader(r, o) {
      return R(t.MBF(), r, o);
    }
    serializeBinary() {
      var r = new T.BinaryWriter();
      return t.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, o) {
      k(t.M(), r, o);
    }
    serializeBase64String() {
      var r = new T.BinaryWriter();
      return t.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "UserContentDescriptorPreferences_ContentDescriptor";
    }
  };
var re = class {
    m_nOffset;
    m_nLength;
    m_viewPacket;
    m_rgubPacket;
    m_iGet;
    m_iPut;
    constructor(r, o = 0, s) {
      (this.m_nOffset = o || 0),
        r instanceof Uint8Array || r instanceof DataView
          ? ((this.m_nLength = s || r.byteLength - this.m_nOffset),
            (this.m_nOffset += r.byteOffset),
            (this.m_viewPacket = new DataView(
              r.buffer,
              this.m_nOffset,
              this.m_nLength,
            )))
          : ((this.m_nLength = s || r.byteLength - this.m_nOffset),
            (this.m_viewPacket = new DataView(
              r,
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
    GetUint32(r = !0) {
      let o = this.m_viewPacket.getUint32(this.m_iGet, r);
      return (this.m_iGet += 4), o;
    }
    SeekGetHead(r = 0) {
      this.m_iGet = r || 0;
    }
    SeekGetCurrent(r) {
      this.m_iGet += r;
    }
    TellPut() {
      return this.m_iPut + this.m_viewPacket.byteOffset;
    }
    TellMaxPut() {
      return this.m_viewPacket.byteLength;
    }
    PutUint8(r) {
      this.m_viewPacket.setUint8(this.m_iPut++, r);
    }
    PutUint32(r, o = !0) {
      this.m_viewPacket.setUint32(this.m_iPut, r, o), (this.m_iPut += 4);
    }
    PutBytes(r) {
      this.m_rgubPacket.set(r, this.m_iPut), (this.m_iPut += r.length);
    }
    SeekPut(r) {
      this.m_iPut += r;
    }
    GetCountBytesRemaining() {
      return this.m_viewPacket.byteLength - this.m_iGet;
    }
  },
  Pt = [
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
function zt(t) {
  let r = "";
  for (let o = 0; o < t.length; o++) {
    let s = t[o];
    r += Pt[s >>> 4] + Pt[s & 15];
  }
  return r;
}
var g = X($());
var E = X($(), 1);
var x = E.Message;
var oe = class t extends x {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        t.prototype.sale_filter || B(t.M()),
        x.initialize(this, r, 0, -1, [3], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              sale_filter: { n: 1, c: Ce },
              content_hub_filter: { n: 2, c: Re },
              store_filters: { n: 3, c: Be, r: !0, q: !0 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = h(t.M())), t.sm_mbf;
    }
    toObject(r = !1) {
      return t.toObject(r, this);
    }
    static toObject(r, o) {
      return C(t.M(), r, o);
    }
    static fromObject(r) {
      return P(t.M(), r);
    }
    static deserializeBinary(r) {
      let o = new E.BinaryReader(r),
        s = new t();
      return t.deserializeBinaryFromReader(s, o);
    }
    static deserializeBinaryFromReader(r, o) {
      return R(t.MBF(), r, o);
    }
    serializeBinary() {
      var r = new E.BinaryWriter();
      return t.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, o) {
      k(t.M(), r, o);
    }
    serializeBase64String() {
      var r = new E.BinaryWriter();
      return t.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CStorePageFilter";
    }
  },
  Ce = class t extends x {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        t.prototype.sale_tagid || B(t.M()),
        x.initialize(this, r, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              sale_tagid: { n: 1, br: l.readUint32, bw: u.writeUint32 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = h(t.M())), t.sm_mbf;
    }
    toObject(r = !1) {
      return t.toObject(r, this);
    }
    static toObject(r, o) {
      return C(t.M(), r, o);
    }
    static fromObject(r) {
      return P(t.M(), r);
    }
    static deserializeBinary(r) {
      let o = new E.BinaryReader(r),
        s = new t();
      return t.deserializeBinaryFromReader(s, o);
    }
    static deserializeBinaryFromReader(r, o) {
      return R(t.MBF(), r, o);
    }
    serializeBinary() {
      var r = new E.BinaryWriter();
      return t.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, o) {
      k(t.M(), r, o);
    }
    serializeBase64String() {
      var r = new E.BinaryWriter();
      return t.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CStorePageFilter_SalePageFilter";
    }
  },
  Re = class t extends x {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        t.prototype.hub_type || B(t.M()),
        x.initialize(this, r, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              hub_type: { n: 1, br: l.readString, bw: u.writeString },
              hub_category: { n: 2, br: l.readString, bw: u.writeString },
              hub_tagid: { n: 3, br: l.readUint32, bw: u.writeUint32 },
              discount_filter: { n: 4, br: l.readEnum, bw: u.writeEnum },
              optin: { n: 5, c: ke },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = h(t.M())), t.sm_mbf;
    }
    toObject(r = !1) {
      return t.toObject(r, this);
    }
    static toObject(r, o) {
      return C(t.M(), r, o);
    }
    static fromObject(r) {
      return P(t.M(), r);
    }
    static deserializeBinary(r) {
      let o = new E.BinaryReader(r),
        s = new t();
      return t.deserializeBinaryFromReader(s, o);
    }
    static deserializeBinaryFromReader(r, o) {
      return R(t.MBF(), r, o);
    }
    serializeBinary() {
      var r = new E.BinaryWriter();
      return t.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, o) {
      k(t.M(), r, o);
    }
    serializeBase64String() {
      var r = new E.BinaryWriter();
      return t.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CStorePageFilter_ContentHubFilter";
    }
  },
  ke = class t extends x {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        t.prototype.name || B(t.M()),
        x.initialize(this, r, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              name: { n: 1, br: l.readString, bw: u.writeString },
              optin_tagid: { n: 2, br: l.readUint32, bw: u.writeUint32 },
              prune_tagid: { n: 3, br: l.readUint32, bw: u.writeUint32 },
              optin_only: { n: 4, br: l.readBool, bw: u.writeBool },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = h(t.M())), t.sm_mbf;
    }
    toObject(r = !1) {
      return t.toObject(r, this);
    }
    static toObject(r, o) {
      return C(t.M(), r, o);
    }
    static fromObject(r) {
      return P(t.M(), r);
    }
    static deserializeBinary(r) {
      let o = new E.BinaryReader(r),
        s = new t();
      return t.deserializeBinaryFromReader(s, o);
    }
    static deserializeBinaryFromReader(r, o) {
      return R(t.MBF(), r, o);
    }
    serializeBinary() {
      var r = new E.BinaryWriter();
      return t.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, o) {
      k(t.M(), r, o);
    }
    serializeBase64String() {
      var r = new E.BinaryWriter();
      return t.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CStorePageFilter_ContentHubFilter_OptInInfo";
    }
  },
  Be = class t extends x {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        t.prototype.filter_json || B(t.M()),
        x.initialize(this, r, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              filter_json: { n: 1, br: l.readString, bw: u.writeString },
              cache_key: { n: 2, br: l.readString, bw: u.writeString },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = h(t.M())), t.sm_mbf;
    }
    toObject(r = !1) {
      return t.toObject(r, this);
    }
    static toObject(r, o) {
      return C(t.M(), r, o);
    }
    static fromObject(r) {
      return P(t.M(), r);
    }
    static deserializeBinary(r) {
      let o = new E.BinaryReader(r),
        s = new t();
      return t.deserializeBinaryFromReader(s, o);
    }
    static deserializeBinaryFromReader(r, o) {
      return R(t.MBF(), r, o);
    }
    serializeBinary() {
      var r = new E.BinaryWriter();
      return t.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, o) {
      k(t.M(), r, o);
    }
    serializeBase64String() {
      var r = new E.BinaryWriter();
      return t.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CStorePageFilter_StoreFilter";
    }
  };
var S = g.Message;
function Zt(t) {
  return "unknown EStoreItemType ( " + t + " )";
}
var Ae = class t extends S {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        t.prototype.type || B(t.M()),
        S.initialize(this, r, 0, -1, [3], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              type: { n: 1, br: l.readString, bw: u.writeString },
              rating: { n: 2, br: l.readString, bw: u.writeString },
              descriptors: {
                n: 3,
                r: !0,
                q: !0,
                br: l.readString,
                bw: u.writeRepeatedString,
              },
              interactive_elements: {
                n: 4,
                br: l.readString,
                bw: u.writeString,
              },
              required_age: { n: 10, br: l.readInt32, bw: u.writeInt32 },
              use_age_gate: { n: 11, br: l.readBool, bw: u.writeBool },
              image_url: { n: 20, br: l.readString, bw: u.writeString },
              image_target: { n: 21, br: l.readString, bw: u.writeString },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = h(t.M())), t.sm_mbf;
    }
    toObject(r = !1) {
      return t.toObject(r, this);
    }
    static toObject(r, o) {
      return C(t.M(), r, o);
    }
    static fromObject(r) {
      return P(t.M(), r);
    }
    static deserializeBinary(r) {
      let o = new g.BinaryReader(r),
        s = new t();
      return t.deserializeBinaryFromReader(s, o);
    }
    static deserializeBinaryFromReader(r, o) {
      return R(t.MBF(), r, o);
    }
    serializeBinary() {
      var r = new g.BinaryWriter();
      return t.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, o) {
      k(t.M(), r, o);
    }
    serializeBase64String() {
      var r = new g.BinaryWriter();
      return t.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "StoreGameRating";
    }
  },
  ie = class t extends S {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        t.prototype.item_type || B(t.M()),
        S.initialize(
          this,
          r,
          0,
          -1,
          [11, 12, 20, 21, 25, 41, 42, 52, 71],
          null,
        );
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              item_type: { n: 1, br: l.readEnum, bw: u.writeEnum },
              id: { n: 2, br: l.readUint32, bw: u.writeUint32 },
              success: { n: 3, br: l.readUint32, bw: u.writeUint32 },
              visible: { n: 4, br: l.readBool, bw: u.writeBool },
              unvailable_for_country_restriction: {
                n: 5,
                br: l.readBool,
                bw: u.writeBool,
              },
              name: { n: 6, br: l.readString, bw: u.writeString },
              store_url_path: { n: 7, br: l.readString, bw: u.writeString },
              appid: { n: 9, br: l.readUint32, bw: u.writeUint32 },
              type: { n: 10, br: l.readEnum, bw: u.writeEnum },
              included_types: {
                n: 11,
                r: !0,
                q: !0,
                br: l.readEnum,
                pbr: l.readPackedEnum,
                bw: u.writeRepeatedEnum,
              },
              included_appids: {
                n: 12,
                r: !0,
                q: !0,
                br: l.readUint32,
                pbr: l.readPackedUint32,
                bw: u.writeRepeatedUint32,
              },
              is_free: { n: 13, br: l.readBool, bw: u.writeBool },
              is_early_access: { n: 14, br: l.readBool, bw: u.writeBool },
              related_items: { n: 15, c: Me },
              included_items: { n: 16, c: ve },
              content_descriptorids: {
                n: 20,
                r: !0,
                q: !0,
                br: l.readEnum,
                pbr: l.readPackedEnum,
                bw: u.writeRepeatedEnum,
              },
              tagids: {
                n: 21,
                r: !0,
                q: !0,
                br: l.readUint32,
                pbr: l.readPackedUint32,
                bw: u.writeRepeatedUint32,
              },
              categories: { n: 22, c: we },
              reviews: { n: 23, c: Ie },
              basic_info: { n: 24, c: Te },
              tags: { n: 25, c: je, r: !0, q: !0 },
              assets: { n: 30, c: ue },
              release: { n: 31, c: Fe },
              platforms: { n: 32, c: Ee },
              game_rating: { n: 33, c: Ae },
              is_coming_soon: { n: 34, br: l.readBool, bw: u.writeBool },
              best_purchase_option: { n: 40, c: Z },
              purchase_options: { n: 41, c: Z, r: !0, q: !0 },
              accessories: { n: 42, c: Z, r: !0, q: !0 },
              self_purchase_option: { n: 43, c: Z },
              screenshots: { n: 50, c: Oe },
              trailers: { n: 51, c: Le },
              supported_languages: { n: 52, c: We, r: !0, q: !0 },
              store_url_path_override: {
                n: 53,
                br: l.readString,
                bw: u.writeString,
              },
              free_weekend: { n: 54, c: Ge },
              unlisted: { n: 55, br: l.readBool, bw: u.writeBool },
              game_count: { n: 56, br: l.readUint32, bw: u.writeUint32 },
              internal_name: { n: 57, br: l.readString, bw: u.writeString },
              full_description: { n: 58, br: l.readString, bw: u.writeString },
              is_free_temporarily: { n: 59, br: l.readBool, bw: u.writeBool },
              assets_without_overrides: { n: 60, c: ue },
              user_filter_failure: { n: 70, c: lt },
              links: { n: 71, c: Ne, r: !0, q: !0 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = h(t.M())), t.sm_mbf;
    }
    toObject(r = !1) {
      return t.toObject(r, this);
    }
    static toObject(r, o) {
      return C(t.M(), r, o);
    }
    static fromObject(r) {
      return P(t.M(), r);
    }
    static deserializeBinary(r) {
      let o = new g.BinaryReader(r),
        s = new t();
      return t.deserializeBinaryFromReader(s, o);
    }
    static deserializeBinaryFromReader(r, o) {
      return R(t.MBF(), r, o);
    }
    serializeBinary() {
      var r = new g.BinaryWriter();
      return t.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, o) {
      k(t.M(), r, o);
    }
    serializeBase64String() {
      var r = new g.BinaryWriter();
      return t.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "StoreItem";
    }
  },
  Me = class t extends S {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        t.prototype.parent_appid || B(t.M()),
        S.initialize(this, r, 0, -1, [2, 3], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              parent_appid: { n: 1, br: l.readUint32, bw: u.writeUint32 },
              demo_appid: {
                n: 2,
                r: !0,
                q: !0,
                br: l.readUint32,
                pbr: l.readPackedUint32,
                bw: u.writeRepeatedUint32,
              },
              standalone_demo_appid: {
                n: 3,
                r: !0,
                q: !0,
                br: l.readUint32,
                pbr: l.readPackedUint32,
                bw: u.writeRepeatedUint32,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = h(t.M())), t.sm_mbf;
    }
    toObject(r = !1) {
      return t.toObject(r, this);
    }
    static toObject(r, o) {
      return C(t.M(), r, o);
    }
    static fromObject(r) {
      return P(t.M(), r);
    }
    static deserializeBinary(r) {
      let o = new g.BinaryReader(r),
        s = new t();
      return t.deserializeBinaryFromReader(s, o);
    }
    static deserializeBinaryFromReader(r, o) {
      return R(t.MBF(), r, o);
    }
    serializeBinary() {
      var r = new g.BinaryWriter();
      return t.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, o) {
      k(t.M(), r, o);
    }
    serializeBase64String() {
      var r = new g.BinaryWriter();
      return t.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "StoreItem_RelatedItems";
    }
  },
  ve = class t extends S {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        t.prototype.included_apps || B(t.M()),
        S.initialize(this, r, 0, -1, [1, 2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              included_apps: { n: 1, c: ie, r: !0, q: !0 },
              included_packages: { n: 2, c: ie, r: !0, q: !0 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = h(t.M())), t.sm_mbf;
    }
    toObject(r = !1) {
      return t.toObject(r, this);
    }
    static toObject(r, o) {
      return C(t.M(), r, o);
    }
    static fromObject(r) {
      return P(t.M(), r);
    }
    static deserializeBinary(r) {
      let o = new g.BinaryReader(r),
        s = new t();
      return t.deserializeBinaryFromReader(s, o);
    }
    static deserializeBinaryFromReader(r, o) {
      return R(t.MBF(), r, o);
    }
    serializeBinary() {
      var r = new g.BinaryWriter();
      return t.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, o) {
      k(t.M(), r, o);
    }
    serializeBase64String() {
      var r = new g.BinaryWriter();
      return t.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "StoreItem_IncludedItems";
    }
  },
  we = class t extends S {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        t.prototype.supported_player_categoryids || B(t.M()),
        S.initialize(this, r, 0, -1, [2, 3, 4], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              supported_player_categoryids: {
                n: 2,
                r: !0,
                q: !0,
                br: l.readUint32,
                pbr: l.readPackedUint32,
                bw: u.writeRepeatedUint32,
              },
              feature_categoryids: {
                n: 3,
                r: !0,
                q: !0,
                br: l.readUint32,
                pbr: l.readPackedUint32,
                bw: u.writeRepeatedUint32,
              },
              controller_categoryids: {
                n: 4,
                r: !0,
                q: !0,
                br: l.readUint32,
                pbr: l.readPackedUint32,
                bw: u.writeRepeatedUint32,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = h(t.M())), t.sm_mbf;
    }
    toObject(r = !1) {
      return t.toObject(r, this);
    }
    static toObject(r, o) {
      return C(t.M(), r, o);
    }
    static fromObject(r) {
      return P(t.M(), r);
    }
    static deserializeBinary(r) {
      let o = new g.BinaryReader(r),
        s = new t();
      return t.deserializeBinaryFromReader(s, o);
    }
    static deserializeBinaryFromReader(r, o) {
      return R(t.MBF(), r, o);
    }
    serializeBinary() {
      var r = new g.BinaryWriter();
      return t.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, o) {
      k(t.M(), r, o);
    }
    serializeBase64String() {
      var r = new g.BinaryWriter();
      return t.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "StoreItem_Categories";
    }
  },
  Ie = class t extends S {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        t.prototype.summary_filtered || B(t.M()),
        S.initialize(this, r, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              summary_filtered: { n: 1, c: le },
              summary_unfiltered: { n: 2, c: le },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = h(t.M())), t.sm_mbf;
    }
    toObject(r = !1) {
      return t.toObject(r, this);
    }
    static toObject(r, o) {
      return C(t.M(), r, o);
    }
    static fromObject(r) {
      return P(t.M(), r);
    }
    static deserializeBinary(r) {
      let o = new g.BinaryReader(r),
        s = new t();
      return t.deserializeBinaryFromReader(s, o);
    }
    static deserializeBinaryFromReader(r, o) {
      return R(t.MBF(), r, o);
    }
    serializeBinary() {
      var r = new g.BinaryWriter();
      return t.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, o) {
      k(t.M(), r, o);
    }
    serializeBase64String() {
      var r = new g.BinaryWriter();
      return t.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "StoreItem_Reviews";
    }
  },
  le = class t extends S {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        t.prototype.review_count || B(t.M()),
        S.initialize(this, r, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              review_count: { n: 1, br: l.readUint32, bw: u.writeUint32 },
              percent_positive: { n: 2, br: l.readInt32, bw: u.writeInt32 },
              review_score: { n: 3, br: l.readEnum, bw: u.writeEnum },
              review_score_label: { n: 4, br: l.readString, bw: u.writeString },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = h(t.M())), t.sm_mbf;
    }
    toObject(r = !1) {
      return t.toObject(r, this);
    }
    static toObject(r, o) {
      return C(t.M(), r, o);
    }
    static fromObject(r) {
      return P(t.M(), r);
    }
    static deserializeBinary(r) {
      let o = new g.BinaryReader(r),
        s = new t();
      return t.deserializeBinaryFromReader(s, o);
    }
    static deserializeBinaryFromReader(r, o) {
      return R(t.MBF(), r, o);
    }
    serializeBinary() {
      var r = new g.BinaryWriter();
      return t.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, o) {
      k(t.M(), r, o);
    }
    serializeBase64String() {
      var r = new g.BinaryWriter();
      return t.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "StoreItem_Reviews_StoreReviewSummary";
    }
  },
  Te = class t extends S {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        t.prototype.short_description || B(t.M()),
        S.initialize(this, r, 0, -1, [2, 3, 4], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              short_description: { n: 1, br: l.readString, bw: u.writeString },
              publishers: { n: 2, c: se, r: !0, q: !0 },
              developers: { n: 3, c: se, r: !0, q: !0 },
              franchises: { n: 4, c: se, r: !0, q: !0 },
              capsule_headline: { n: 5, br: l.readString, bw: u.writeString },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = h(t.M())), t.sm_mbf;
    }
    toObject(r = !1) {
      return t.toObject(r, this);
    }
    static toObject(r, o) {
      return C(t.M(), r, o);
    }
    static fromObject(r) {
      return P(t.M(), r);
    }
    static deserializeBinary(r) {
      let o = new g.BinaryReader(r),
        s = new t();
      return t.deserializeBinaryFromReader(s, o);
    }
    static deserializeBinaryFromReader(r, o) {
      return R(t.MBF(), r, o);
    }
    serializeBinary() {
      var r = new g.BinaryWriter();
      return t.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, o) {
      k(t.M(), r, o);
    }
    serializeBase64String() {
      var r = new g.BinaryWriter();
      return t.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "StoreItem_BasicInfo";
    }
  },
  se = class t extends S {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        t.prototype.name || B(t.M()),
        S.initialize(this, r, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              name: { n: 1, br: l.readString, bw: u.writeString },
              creator_clan_account_id: {
                n: 2,
                br: l.readUint32,
                bw: u.writeUint32,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = h(t.M())), t.sm_mbf;
    }
    toObject(r = !1) {
      return t.toObject(r, this);
    }
    static toObject(r, o) {
      return C(t.M(), r, o);
    }
    static fromObject(r) {
      return P(t.M(), r);
    }
    static deserializeBinary(r) {
      let o = new g.BinaryReader(r),
        s = new t();
      return t.deserializeBinaryFromReader(s, o);
    }
    static deserializeBinaryFromReader(r, o) {
      return R(t.MBF(), r, o);
    }
    serializeBinary() {
      var r = new g.BinaryWriter();
      return t.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, o) {
      k(t.M(), r, o);
    }
    serializeBase64String() {
      var r = new g.BinaryWriter();
      return t.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "StoreItem_BasicInfo_CreatorHomeLink";
    }
  },
  je = class t extends S {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        t.prototype.tagid || B(t.M()),
        S.initialize(this, r, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              tagid: { n: 1, br: l.readUint32, bw: u.writeUint32 },
              weight: { n: 2, br: l.readUint32, bw: u.writeUint32 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = h(t.M())), t.sm_mbf;
    }
    toObject(r = !1) {
      return t.toObject(r, this);
    }
    static toObject(r, o) {
      return C(t.M(), r, o);
    }
    static fromObject(r) {
      return P(t.M(), r);
    }
    static deserializeBinary(r) {
      let o = new g.BinaryReader(r),
        s = new t();
      return t.deserializeBinaryFromReader(s, o);
    }
    static deserializeBinaryFromReader(r, o) {
      return R(t.MBF(), r, o);
    }
    serializeBinary() {
      var r = new g.BinaryWriter();
      return t.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, o) {
      k(t.M(), r, o);
    }
    serializeBase64String() {
      var r = new g.BinaryWriter();
      return t.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "StoreItem_Tag";
    }
  },
  ue = class t extends S {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        t.prototype.asset_url_format || B(t.M()),
        S.initialize(this, r, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              asset_url_format: { n: 1, br: l.readString, bw: u.writeString },
              main_capsule: { n: 2, br: l.readString, bw: u.writeString },
              small_capsule: { n: 3, br: l.readString, bw: u.writeString },
              header: { n: 4, br: l.readString, bw: u.writeString },
              package_header: { n: 5, br: l.readString, bw: u.writeString },
              page_background: { n: 6, br: l.readString, bw: u.writeString },
              hero_capsule: { n: 7, br: l.readString, bw: u.writeString },
              hero_capsule_2x: { n: 8, br: l.readString, bw: u.writeString },
              library_capsule: { n: 9, br: l.readString, bw: u.writeString },
              library_capsule_2x: {
                n: 10,
                br: l.readString,
                bw: u.writeString,
              },
              library_hero: { n: 11, br: l.readString, bw: u.writeString },
              library_hero_2x: { n: 12, br: l.readString, bw: u.writeString },
              community_icon: { n: 13, br: l.readString, bw: u.writeString },
              clan_avatar: { n: 14, br: l.readString, bw: u.writeString },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = h(t.M())), t.sm_mbf;
    }
    toObject(r = !1) {
      return t.toObject(r, this);
    }
    static toObject(r, o) {
      return C(t.M(), r, o);
    }
    static fromObject(r) {
      return P(t.M(), r);
    }
    static deserializeBinary(r) {
      let o = new g.BinaryReader(r),
        s = new t();
      return t.deserializeBinaryFromReader(s, o);
    }
    static deserializeBinaryFromReader(r, o) {
      return R(t.MBF(), r, o);
    }
    serializeBinary() {
      var r = new g.BinaryWriter();
      return t.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, o) {
      k(t.M(), r, o);
    }
    serializeBase64String() {
      var r = new g.BinaryWriter();
      return t.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "StoreItem_Assets";
    }
  },
  Fe = class t extends S {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        t.prototype.steam_release_date || B(t.M()),
        S.initialize(this, r, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              steam_release_date: { n: 1, br: l.readUint32, bw: u.writeUint32 },
              original_release_date: {
                n: 2,
                br: l.readUint32,
                bw: u.writeUint32,
              },
              original_steam_release_date: {
                n: 3,
                br: l.readUint32,
                bw: u.writeUint32,
              },
              is_coming_soon: { n: 4, br: l.readBool, bw: u.writeBool },
              is_preload: { n: 5, br: l.readBool, bw: u.writeBool },
              custom_release_date_message: {
                n: 6,
                br: l.readString,
                bw: u.writeString,
              },
              is_abridged_release_date: {
                n: 7,
                br: l.readBool,
                bw: u.writeBool,
              },
              coming_soon_display: {
                n: 8,
                br: l.readString,
                bw: u.writeString,
              },
              is_early_access: { n: 10, br: l.readBool, bw: u.writeBool },
              mac_release_date: { n: 20, br: l.readUint32, bw: u.writeUint32 },
              linux_release_date: {
                n: 21,
                br: l.readUint32,
                bw: u.writeUint32,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = h(t.M())), t.sm_mbf;
    }
    toObject(r = !1) {
      return t.toObject(r, this);
    }
    static toObject(r, o) {
      return C(t.M(), r, o);
    }
    static fromObject(r) {
      return P(t.M(), r);
    }
    static deserializeBinary(r) {
      let o = new g.BinaryReader(r),
        s = new t();
      return t.deserializeBinaryFromReader(s, o);
    }
    static deserializeBinaryFromReader(r, o) {
      return R(t.MBF(), r, o);
    }
    serializeBinary() {
      var r = new g.BinaryWriter();
      return t.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, o) {
      k(t.M(), r, o);
    }
    serializeBase64String() {
      var r = new g.BinaryWriter();
      return t.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "StoreItem_ReleaseInfo";
    }
  },
  Ee = class t extends S {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        t.prototype.windows || B(t.M()),
        S.initialize(this, r, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              windows: { n: 1, br: l.readBool, bw: u.writeBool },
              mac: { n: 2, br: l.readBool, bw: u.writeBool },
              steamos_linux: { n: 3, br: l.readBool, bw: u.writeBool },
              vr_support: { n: 10, c: He },
              steam_deck_compat_category: {
                n: 11,
                br: l.readEnum,
                bw: u.writeEnum,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = h(t.M())), t.sm_mbf;
    }
    toObject(r = !1) {
      return t.toObject(r, this);
    }
    static toObject(r, o) {
      return C(t.M(), r, o);
    }
    static fromObject(r) {
      return P(t.M(), r);
    }
    static deserializeBinary(r) {
      let o = new g.BinaryReader(r),
        s = new t();
      return t.deserializeBinaryFromReader(s, o);
    }
    static deserializeBinaryFromReader(r, o) {
      return R(t.MBF(), r, o);
    }
    serializeBinary() {
      var r = new g.BinaryWriter();
      return t.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, o) {
      k(t.M(), r, o);
    }
    serializeBase64String() {
      var r = new g.BinaryWriter();
      return t.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "StoreItem_Platforms";
    }
  },
  He = class t extends S {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        t.prototype.vrhmd || B(t.M()),
        S.initialize(this, r, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              vrhmd: { n: 1, br: l.readBool, bw: u.writeBool },
              vrhmd_only: { n: 2, br: l.readBool, bw: u.writeBool },
              htc_vive: { n: 40, br: l.readBool, bw: u.writeBool },
              oculus_rift: { n: 41, br: l.readBool, bw: u.writeBool },
              windows_mr: { n: 42, br: l.readBool, bw: u.writeBool },
              valve_index: { n: 43, br: l.readBool, bw: u.writeBool },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = h(t.M())), t.sm_mbf;
    }
    toObject(r = !1) {
      return t.toObject(r, this);
    }
    static toObject(r, o) {
      return C(t.M(), r, o);
    }
    static fromObject(r) {
      return P(t.M(), r);
    }
    static deserializeBinary(r) {
      let o = new g.BinaryReader(r),
        s = new t();
      return t.deserializeBinaryFromReader(s, o);
    }
    static deserializeBinaryFromReader(r, o) {
      return R(t.MBF(), r, o);
    }
    serializeBinary() {
      var r = new g.BinaryWriter();
      return t.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, o) {
      k(t.M(), r, o);
    }
    serializeBase64String() {
      var r = new g.BinaryWriter();
      return t.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "StoreItem_Platforms_VRSupport";
    }
  },
  Z = class t extends S {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        t.prototype.packageid || B(t.M()),
        S.initialize(this, r, 0, -1, [20], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              packageid: { n: 1, br: l.readInt32, bw: u.writeInt32 },
              bundleid: { n: 2, br: l.readInt32, bw: u.writeInt32 },
              purchase_option_name: {
                n: 3,
                br: l.readString,
                bw: u.writeString,
              },
              final_price_in_cents: {
                n: 5,
                br: l.readInt64String,
                bw: u.writeInt64String,
              },
              original_price_in_cents: {
                n: 6,
                br: l.readInt64String,
                bw: u.writeInt64String,
              },
              formatted_final_price: {
                n: 8,
                br: l.readString,
                bw: u.writeString,
              },
              formatted_original_price: {
                n: 9,
                br: l.readString,
                bw: u.writeString,
              },
              discount_pct: { n: 10, br: l.readInt32, bw: u.writeInt32 },
              bundle_discount_pct: { n: 12, br: l.readInt32, bw: u.writeInt32 },
              is_free_to_keep: { n: 13, br: l.readBool, bw: u.writeBool },
              price_before_bundle_discount: {
                n: 14,
                br: l.readInt64String,
                bw: u.writeInt64String,
              },
              formatted_price_before_bundle_discount: {
                n: 15,
                br: l.readString,
                bw: u.writeString,
              },
              active_discounts: { n: 20, c: De, r: !0, q: !0 },
              user_can_purchase_as_gift: {
                n: 31,
                br: l.readBool,
                bw: u.writeBool,
              },
              is_commercial_license: { n: 40, br: l.readBool, bw: u.writeBool },
              should_suppress_discount_pct: {
                n: 41,
                br: l.readBool,
                bw: u.writeBool,
              },
              hide_discount_pct_for_compliance: {
                n: 42,
                d: !1,
                br: l.readBool,
                bw: u.writeBool,
              },
              included_game_count: {
                n: 43,
                d: 1,
                br: l.readInt32,
                bw: u.writeInt32,
              },
              lowest_recent_price_in_cents: {
                n: 44,
                br: l.readInt64String,
                bw: u.writeInt64String,
              },
              requires_shipping: { n: 45, br: l.readBool, bw: u.writeBool },
              recurrence_info: { n: 46, c: Ue },
              free_to_keep_ends: { n: 47, br: l.readUint32, bw: u.writeUint32 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = h(t.M())), t.sm_mbf;
    }
    toObject(r = !1) {
      return t.toObject(r, this);
    }
    static toObject(r, o) {
      return C(t.M(), r, o);
    }
    static fromObject(r) {
      return P(t.M(), r);
    }
    static deserializeBinary(r) {
      let o = new g.BinaryReader(r),
        s = new t();
      return t.deserializeBinaryFromReader(s, o);
    }
    static deserializeBinaryFromReader(r, o) {
      return R(t.MBF(), r, o);
    }
    serializeBinary() {
      var r = new g.BinaryWriter();
      return t.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, o) {
      k(t.M(), r, o);
    }
    serializeBase64String() {
      var r = new g.BinaryWriter();
      return t.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "StoreItem_PurchaseOption";
    }
  },
  De = class t extends S {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        t.prototype.discount_amount || B(t.M()),
        S.initialize(this, r, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              discount_amount: {
                n: 1,
                br: l.readInt64String,
                bw: u.writeInt64String,
              },
              discount_description: {
                n: 2,
                br: l.readString,
                bw: u.writeString,
              },
              discount_end_date: { n: 3, br: l.readUint32, bw: u.writeUint32 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = h(t.M())), t.sm_mbf;
    }
    toObject(r = !1) {
      return t.toObject(r, this);
    }
    static toObject(r, o) {
      return C(t.M(), r, o);
    }
    static fromObject(r) {
      return P(t.M(), r);
    }
    static deserializeBinary(r) {
      let o = new g.BinaryReader(r),
        s = new t();
      return t.deserializeBinaryFromReader(s, o);
    }
    static deserializeBinaryFromReader(r, o) {
      return R(t.MBF(), r, o);
    }
    serializeBinary() {
      var r = new g.BinaryWriter();
      return t.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, o) {
      k(t.M(), r, o);
    }
    serializeBase64String() {
      var r = new g.BinaryWriter();
      return t.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "StoreItem_PurchaseOption_Discount";
    }
  },
  Ue = class t extends S {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        t.prototype.packageid || B(t.M()),
        S.initialize(this, r, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              packageid: { n: 1, br: l.readInt32, bw: u.writeInt32 },
              billing_agreement_type: {
                n: 2,
                br: l.readInt32,
                bw: u.writeInt32,
              },
              renewal_time_unit: { n: 3, br: l.readInt32, bw: u.writeInt32 },
              renewal_time_period: { n: 4, br: l.readInt32, bw: u.writeInt32 },
              renewal_price_in_cents: {
                n: 5,
                br: l.readInt64String,
                bw: u.writeInt64String,
              },
              formatted_renewal_price: {
                n: 6,
                br: l.readString,
                bw: u.writeString,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = h(t.M())), t.sm_mbf;
    }
    toObject(r = !1) {
      return t.toObject(r, this);
    }
    static toObject(r, o) {
      return C(t.M(), r, o);
    }
    static fromObject(r) {
      return P(t.M(), r);
    }
    static deserializeBinary(r) {
      let o = new g.BinaryReader(r),
        s = new t();
      return t.deserializeBinaryFromReader(s, o);
    }
    static deserializeBinaryFromReader(r, o) {
      return R(t.MBF(), r, o);
    }
    serializeBinary() {
      var r = new g.BinaryWriter();
      return t.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, o) {
      k(t.M(), r, o);
    }
    serializeBase64String() {
      var r = new g.BinaryWriter();
      return t.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "StoreItem_PurchaseOption_RecurrenceInfo";
    }
  },
  Oe = class t extends S {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        t.prototype.all_ages_screenshots || B(t.M()),
        S.initialize(this, r, 0, -1, [2, 3], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              all_ages_screenshots: { n: 2, c: pe, r: !0, q: !0 },
              mature_content_screenshots: { n: 3, c: pe, r: !0, q: !0 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = h(t.M())), t.sm_mbf;
    }
    toObject(r = !1) {
      return t.toObject(r, this);
    }
    static toObject(r, o) {
      return C(t.M(), r, o);
    }
    static fromObject(r) {
      return P(t.M(), r);
    }
    static deserializeBinary(r) {
      let o = new g.BinaryReader(r),
        s = new t();
      return t.deserializeBinaryFromReader(s, o);
    }
    static deserializeBinaryFromReader(r, o) {
      return R(t.MBF(), r, o);
    }
    serializeBinary() {
      var r = new g.BinaryWriter();
      return t.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, o) {
      k(t.M(), r, o);
    }
    serializeBase64String() {
      var r = new g.BinaryWriter();
      return t.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "StoreItem_Screenshots";
    }
  },
  pe = class t extends S {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        t.prototype.filename || B(t.M()),
        S.initialize(this, r, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              filename: { n: 1, br: l.readString, bw: u.writeString },
              ordinal: { n: 2, br: l.readInt32, bw: u.writeInt32 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = h(t.M())), t.sm_mbf;
    }
    toObject(r = !1) {
      return t.toObject(r, this);
    }
    static toObject(r, o) {
      return C(t.M(), r, o);
    }
    static fromObject(r) {
      return P(t.M(), r);
    }
    static deserializeBinary(r) {
      let o = new g.BinaryReader(r),
        s = new t();
      return t.deserializeBinaryFromReader(s, o);
    }
    static deserializeBinaryFromReader(r, o) {
      return R(t.MBF(), r, o);
    }
    serializeBinary() {
      var r = new g.BinaryWriter();
      return t.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, o) {
      k(t.M(), r, o);
    }
    serializeBase64String() {
      var r = new g.BinaryWriter();
      return t.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "StoreItem_Screenshots_Screenshot";
    }
  },
  Le = class t extends S {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        t.prototype.highlights || B(t.M()),
        S.initialize(this, r, 0, -1, [1, 2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              highlights: { n: 1, c: ge, r: !0, q: !0 },
              other_trailers: { n: 2, c: ge, r: !0, q: !0 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = h(t.M())), t.sm_mbf;
    }
    toObject(r = !1) {
      return t.toObject(r, this);
    }
    static toObject(r, o) {
      return C(t.M(), r, o);
    }
    static fromObject(r) {
      return P(t.M(), r);
    }
    static deserializeBinary(r) {
      let o = new g.BinaryReader(r),
        s = new t();
      return t.deserializeBinaryFromReader(s, o);
    }
    static deserializeBinaryFromReader(r, o) {
      return R(t.MBF(), r, o);
    }
    serializeBinary() {
      var r = new g.BinaryWriter();
      return t.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, o) {
      k(t.M(), r, o);
    }
    serializeBase64String() {
      var r = new g.BinaryWriter();
      return t.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "StoreItem_Trailers";
    }
  },
  ne = class t extends S {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        t.prototype.filename || B(t.M()),
        S.initialize(this, r, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              filename: { n: 1, br: l.readString, bw: u.writeString },
              type: { n: 2, br: l.readString, bw: u.writeString },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = h(t.M())), t.sm_mbf;
    }
    toObject(r = !1) {
      return t.toObject(r, this);
    }
    static toObject(r, o) {
      return C(t.M(), r, o);
    }
    static fromObject(r) {
      return P(t.M(), r);
    }
    static deserializeBinary(r) {
      let o = new g.BinaryReader(r),
        s = new t();
      return t.deserializeBinaryFromReader(s, o);
    }
    static deserializeBinaryFromReader(r, o) {
      return R(t.MBF(), r, o);
    }
    serializeBinary() {
      var r = new g.BinaryWriter();
      return t.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, o) {
      k(t.M(), r, o);
    }
    serializeBase64String() {
      var r = new g.BinaryWriter();
      return t.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "StoreItem_Trailers_VideoSource";
    }
  },
  ge = class t extends S {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        t.prototype.trailer_name || B(t.M()),
        S.initialize(this, r, 0, -1, [3, 4, 5], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              trailer_name: { n: 1, br: l.readString, bw: u.writeString },
              trailer_url_format: { n: 2, br: l.readString, bw: u.writeString },
              trailer_category: { n: 13, br: l.readEnum, bw: u.writeEnum },
              trailer_480p: { n: 3, c: ne, r: !0, q: !0 },
              trailer_max: { n: 4, c: ne, r: !0, q: !0 },
              microtrailer: { n: 5, c: ne, r: !0, q: !0 },
              screenshot_medium: { n: 10, br: l.readString, bw: u.writeString },
              screenshot_full: { n: 11, br: l.readString, bw: u.writeString },
              trailer_base_id: { n: 12, br: l.readInt32, bw: u.writeInt32 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = h(t.M())), t.sm_mbf;
    }
    toObject(r = !1) {
      return t.toObject(r, this);
    }
    static toObject(r, o) {
      return C(t.M(), r, o);
    }
    static fromObject(r) {
      return P(t.M(), r);
    }
    static deserializeBinary(r) {
      let o = new g.BinaryReader(r),
        s = new t();
      return t.deserializeBinaryFromReader(s, o);
    }
    static deserializeBinaryFromReader(r, o) {
      return R(t.MBF(), r, o);
    }
    serializeBinary() {
      var r = new g.BinaryWriter();
      return t.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, o) {
      k(t.M(), r, o);
    }
    serializeBase64String() {
      var r = new g.BinaryWriter();
      return t.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "StoreItem_Trailers_Trailer";
    }
  },
  We = class t extends S {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        t.prototype.elanguage || B(t.M()),
        S.initialize(this, r, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              elanguage: { n: 1, d: -1, br: l.readInt32, bw: u.writeInt32 },
              eadditionallanguage: {
                n: 5,
                d: -1,
                br: l.readInt32,
                bw: u.writeInt32,
              },
              supported: { n: 2, br: l.readBool, bw: u.writeBool },
              full_audio: { n: 3, br: l.readBool, bw: u.writeBool },
              subtitles: { n: 4, br: l.readBool, bw: u.writeBool },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = h(t.M())), t.sm_mbf;
    }
    toObject(r = !1) {
      return t.toObject(r, this);
    }
    static toObject(r, o) {
      return C(t.M(), r, o);
    }
    static fromObject(r) {
      return P(t.M(), r);
    }
    static deserializeBinary(r) {
      let o = new g.BinaryReader(r),
        s = new t();
      return t.deserializeBinaryFromReader(s, o);
    }
    static deserializeBinaryFromReader(r, o) {
      return R(t.MBF(), r, o);
    }
    serializeBinary() {
      var r = new g.BinaryWriter();
      return t.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, o) {
      k(t.M(), r, o);
    }
    serializeBase64String() {
      var r = new g.BinaryWriter();
      return t.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "StoreItem_SupportedLanguage";
    }
  },
  Ge = class t extends S {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        t.prototype.start_time || B(t.M()),
        S.initialize(this, r, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              start_time: { n: 1, br: l.readUint32, bw: u.writeUint32 },
              end_time: { n: 2, br: l.readUint32, bw: u.writeUint32 },
              text: { n: 3, br: l.readString, bw: u.writeString },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = h(t.M())), t.sm_mbf;
    }
    toObject(r = !1) {
      return t.toObject(r, this);
    }
    static toObject(r, o) {
      return C(t.M(), r, o);
    }
    static fromObject(r) {
      return P(t.M(), r);
    }
    static deserializeBinary(r) {
      let o = new g.BinaryReader(r),
        s = new t();
      return t.deserializeBinaryFromReader(s, o);
    }
    static deserializeBinaryFromReader(r, o) {
      return R(t.MBF(), r, o);
    }
    serializeBinary() {
      var r = new g.BinaryWriter();
      return t.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, o) {
      k(t.M(), r, o);
    }
    serializeBase64String() {
      var r = new g.BinaryWriter();
      return t.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "StoreItem_FreeWeekend";
    }
  },
  Ne = class t extends S {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        t.prototype.link_type || B(t.M()),
        S.initialize(this, r, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              link_type: { n: 1, br: l.readEnum, bw: u.writeEnum },
              url: { n: 2, br: l.readString, bw: u.writeString },
              text: { n: 3, br: l.readString, bw: u.writeString },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = h(t.M())), t.sm_mbf;
    }
    toObject(r = !1) {
      return t.toObject(r, this);
    }
    static toObject(r, o) {
      return C(t.M(), r, o);
    }
    static fromObject(r) {
      return P(t.M(), r);
    }
    static deserializeBinary(r) {
      let o = new g.BinaryReader(r),
        s = new t();
      return t.deserializeBinaryFromReader(s, o);
    }
    static deserializeBinaryFromReader(r, o) {
      return R(t.MBF(), r, o);
    }
    serializeBinary() {
      var r = new g.BinaryWriter();
      return t.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, o) {
      k(t.M(), r, o);
    }
    serializeBase64String() {
      var r = new g.BinaryWriter();
      return t.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "StoreItem_Link";
    }
  },
  xe = class t extends S {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        t.prototype.include_assets || B(t.M()),
        S.initialize(this, r, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              include_assets: { n: 1, br: l.readBool, bw: u.writeBool },
              include_release: { n: 2, br: l.readBool, bw: u.writeBool },
              include_platforms: { n: 3, br: l.readBool, bw: u.writeBool },
              include_all_purchase_options: {
                n: 4,
                br: l.readBool,
                bw: u.writeBool,
              },
              include_screenshots: { n: 5, br: l.readBool, bw: u.writeBool },
              include_trailers: { n: 6, br: l.readBool, bw: u.writeBool },
              include_ratings: { n: 7, br: l.readBool, bw: u.writeBool },
              include_tag_count: { n: 8, br: l.readInt32, bw: u.writeInt32 },
              include_reviews: { n: 9, br: l.readBool, bw: u.writeBool },
              include_basic_info: { n: 10, br: l.readBool, bw: u.writeBool },
              include_supported_languages: {
                n: 11,
                br: l.readBool,
                bw: u.writeBool,
              },
              include_full_description: {
                n: 12,
                br: l.readBool,
                bw: u.writeBool,
              },
              include_included_items: {
                n: 13,
                br: l.readBool,
                bw: u.writeBool,
              },
              included_item_data_request: { n: 14, c: t },
              include_assets_without_overrides: {
                n: 15,
                br: l.readBool,
                bw: u.writeBool,
              },
              apply_user_filters: { n: 16, br: l.readBool, bw: u.writeBool },
              include_links: { n: 17, br: l.readBool, bw: u.writeBool },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = h(t.M())), t.sm_mbf;
    }
    toObject(r = !1) {
      return t.toObject(r, this);
    }
    static toObject(r, o) {
      return C(t.M(), r, o);
    }
    static fromObject(r) {
      return P(t.M(), r);
    }
    static deserializeBinary(r) {
      let o = new g.BinaryReader(r),
        s = new t();
      return t.deserializeBinaryFromReader(s, o);
    }
    static deserializeBinaryFromReader(r, o) {
      return R(t.MBF(), r, o);
    }
    serializeBinary() {
      var r = new g.BinaryWriter();
      return t.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, o) {
      k(t.M(), r, o);
    }
    serializeBase64String() {
      var r = new g.BinaryWriter();
      return t.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "StoreBrowseItemDataRequest";
    }
  },
  Q = class t extends S {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        t.prototype.language || B(t.M()),
        S.initialize(this, r, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              language: { n: 1, br: l.readString, bw: u.writeString },
              elanguage: { n: 2, br: l.readInt32, bw: u.writeInt32 },
              country_code: { n: 3, br: l.readString, bw: u.writeString },
              steam_realm: { n: 4, br: l.readInt32, bw: u.writeInt32 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = h(t.M())), t.sm_mbf;
    }
    toObject(r = !1) {
      return t.toObject(r, this);
    }
    static toObject(r, o) {
      return C(t.M(), r, o);
    }
    static fromObject(r) {
      return P(t.M(), r);
    }
    static deserializeBinary(r) {
      let o = new g.BinaryReader(r),
        s = new t();
      return t.deserializeBinaryFromReader(s, o);
    }
    static deserializeBinaryFromReader(r, o) {
      return R(t.MBF(), r, o);
    }
    serializeBinary() {
      var r = new g.BinaryWriter();
      return t.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, o) {
      k(t.M(), r, o);
    }
    serializeBase64String() {
      var r = new g.BinaryWriter();
      return t.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "StoreBrowseContext";
    }
  },
  de = class t extends S {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        t.prototype.appid || B(t.M()),
        S.initialize(this, r, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              appid: { n: 1, br: l.readUint32, bw: u.writeUint32 },
              packageid: { n: 2, br: l.readUint32, bw: u.writeUint32 },
              bundleid: { n: 3, br: l.readUint32, bw: u.writeUint32 },
              tagid: { n: 4, br: l.readUint32, bw: u.writeUint32 },
              creatorid: { n: 5, br: l.readUint32, bw: u.writeUint32 },
              hubcategoryid: { n: 6, br: l.readUint32, bw: u.writeUint32 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = h(t.M())), t.sm_mbf;
    }
    toObject(r = !1) {
      return t.toObject(r, this);
    }
    static toObject(r, o) {
      return C(t.M(), r, o);
    }
    static fromObject(r) {
      return P(t.M(), r);
    }
    static deserializeBinary(r) {
      let o = new g.BinaryReader(r),
        s = new t();
      return t.deserializeBinaryFromReader(s, o);
    }
    static deserializeBinaryFromReader(r, o) {
      return R(t.MBF(), r, o);
    }
    serializeBinary() {
      var r = new g.BinaryWriter();
      return t.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, o) {
      k(t.M(), r, o);
    }
    serializeBase64String() {
      var r = new g.BinaryWriter();
      return t.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "StoreItemID";
    }
  },
  ze = class t extends S {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        t.prototype.ids || B(t.M()),
        S.initialize(this, r, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              ids: { n: 1, c: de, r: !0, q: !0 },
              context: { n: 2, c: Q },
              data_request: { n: 3, c: xe },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = h(t.M())), t.sm_mbf;
    }
    toObject(r = !1) {
      return t.toObject(r, this);
    }
    static toObject(r, o) {
      return C(t.M(), r, o);
    }
    static fromObject(r) {
      return P(t.M(), r);
    }
    static deserializeBinary(r) {
      let o = new g.BinaryReader(r),
        s = new t();
      return t.deserializeBinaryFromReader(s, o);
    }
    static deserializeBinaryFromReader(r, o) {
      return R(t.MBF(), r, o);
    }
    serializeBinary() {
      var r = new g.BinaryWriter();
      return t.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, o) {
      k(t.M(), r, o);
    }
    serializeBase64String() {
      var r = new g.BinaryWriter();
      return t.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CStoreBrowse_GetItems_Request";
    }
  },
  Ve = class t extends S {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        t.prototype.store_items || B(t.M()),
        S.initialize(this, r, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: { store_items: { n: 1, c: ie, r: !0, q: !0 } },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = h(t.M())), t.sm_mbf;
    }
    toObject(r = !1) {
      return t.toObject(r, this);
    }
    static toObject(r, o) {
      return C(t.M(), r, o);
    }
    static fromObject(r) {
      return P(t.M(), r);
    }
    static deserializeBinary(r) {
      let o = new g.BinaryReader(r),
        s = new t();
      return t.deserializeBinaryFromReader(s, o);
    }
    static deserializeBinaryFromReader(r, o) {
      return R(t.MBF(), r, o);
    }
    serializeBinary() {
      var r = new g.BinaryWriter();
      return t.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, o) {
      k(t.M(), r, o);
    }
    serializeBase64String() {
      var r = new g.BinaryWriter();
      return t.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CStoreBrowse_GetItems_Response";
    }
  },
  qe = class t extends S {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        t.prototype.language || B(t.M()),
        S.initialize(this, r, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              language: { n: 1, br: l.readString, bw: u.writeString },
              elanguage: { n: 2, d: -1, br: l.readInt32, bw: u.writeInt32 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = h(t.M())), t.sm_mbf;
    }
    toObject(r = !1) {
      return t.toObject(r, this);
    }
    static toObject(r, o) {
      return C(t.M(), r, o);
    }
    static fromObject(r) {
      return P(t.M(), r);
    }
    static deserializeBinary(r) {
      let o = new g.BinaryReader(r),
        s = new t();
      return t.deserializeBinaryFromReader(s, o);
    }
    static deserializeBinaryFromReader(r, o) {
      return R(t.MBF(), r, o);
    }
    serializeBinary() {
      var r = new g.BinaryWriter();
      return t.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, o) {
      k(t.M(), r, o);
    }
    serializeBase64String() {
      var r = new g.BinaryWriter();
      return t.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CStoreBrowse_GetStoreCategories_Request";
    }
  },
  Ke = class t extends S {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        t.prototype.categories || B(t.M()),
        S.initialize(this, r, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: { categories: { n: 1, c: Ye, r: !0, q: !0 } },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = h(t.M())), t.sm_mbf;
    }
    toObject(r = !1) {
      return t.toObject(r, this);
    }
    static toObject(r, o) {
      return C(t.M(), r, o);
    }
    static fromObject(r) {
      return P(t.M(), r);
    }
    static deserializeBinary(r) {
      let o = new g.BinaryReader(r),
        s = new t();
      return t.deserializeBinaryFromReader(s, o);
    }
    static deserializeBinaryFromReader(r, o) {
      return R(t.MBF(), r, o);
    }
    serializeBinary() {
      var r = new g.BinaryWriter();
      return t.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, o) {
      k(t.M(), r, o);
    }
    serializeBase64String() {
      var r = new g.BinaryWriter();
      return t.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CStoreBrowse_GetStoreCategories_Response";
    }
  },
  Ye = class t extends S {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        t.prototype.categoryid || B(t.M()),
        S.initialize(this, r, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              categoryid: { n: 1, br: l.readUint32, bw: u.writeUint32 },
              type: { n: 2, br: l.readEnum, bw: u.writeEnum },
              internal_name: { n: 3, br: l.readString, bw: u.writeString },
              display_name: { n: 4, br: l.readString, bw: u.writeString },
              image_url: { n: 5, br: l.readString, bw: u.writeString },
              show_in_search: { n: 6, br: l.readBool, bw: u.writeBool },
              computed: { n: 7, br: l.readBool, bw: u.writeBool },
              edit_url: { n: 8, br: l.readString, bw: u.writeString },
              edit_sort_order: { n: 9, br: l.readUint32, bw: u.writeUint32 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = h(t.M())), t.sm_mbf;
    }
    toObject(r = !1) {
      return t.toObject(r, this);
    }
    static toObject(r, o) {
      return C(t.M(), r, o);
    }
    static fromObject(r) {
      return P(t.M(), r);
    }
    static deserializeBinary(r) {
      let o = new g.BinaryReader(r),
        s = new t();
      return t.deserializeBinaryFromReader(s, o);
    }
    static deserializeBinaryFromReader(r, o) {
      return R(t.MBF(), r, o);
    }
    serializeBinary() {
      var r = new g.BinaryWriter();
      return t.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, o) {
      k(t.M(), r, o);
    }
    serializeBase64String() {
      var r = new g.BinaryWriter();
      return t.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CStoreBrowse_GetStoreCategories_Response_Category";
    }
  },
  Xe = class t extends S {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        t.prototype.country_code || B(t.M()),
        S.initialize(this, r, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              country_code: { n: 1, br: l.readString, bw: u.writeString },
              currency_code: { n: 2, br: l.readString, bw: u.writeString },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = h(t.M())), t.sm_mbf;
    }
    toObject(r = !1) {
      return t.toObject(r, this);
    }
    static toObject(r, o) {
      return C(t.M(), r, o);
    }
    static fromObject(r) {
      return P(t.M(), r);
    }
    static deserializeBinary(r) {
      let o = new g.BinaryReader(r),
        s = new t();
      return t.deserializeBinaryFromReader(s, o);
    }
    static deserializeBinaryFromReader(r, o) {
      return R(t.MBF(), r, o);
    }
    serializeBinary() {
      var r = new g.BinaryWriter();
      return t.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, o) {
      k(t.M(), r, o);
    }
    serializeBase64String() {
      var r = new g.BinaryWriter();
      return t.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CStoreBrowse_GetPriceStops_Request";
    }
  },
  $e = class t extends S {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        t.prototype.price_stops || B(t.M()),
        S.initialize(this, r, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              price_stops: { n: 1, c: Ze, r: !0, q: !0 },
              currency_code: { n: 2, br: l.readString, bw: u.writeString },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = h(t.M())), t.sm_mbf;
    }
    toObject(r = !1) {
      return t.toObject(r, this);
    }
    static toObject(r, o) {
      return C(t.M(), r, o);
    }
    static fromObject(r) {
      return P(t.M(), r);
    }
    static deserializeBinary(r) {
      let o = new g.BinaryReader(r),
        s = new t();
      return t.deserializeBinaryFromReader(s, o);
    }
    static deserializeBinaryFromReader(r, o) {
      return R(t.MBF(), r, o);
    }
    serializeBinary() {
      var r = new g.BinaryWriter();
      return t.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, o) {
      k(t.M(), r, o);
    }
    serializeBase64String() {
      var r = new g.BinaryWriter();
      return t.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CStoreBrowse_GetPriceStops_Response";
    }
  },
  Ze = class t extends S {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        t.prototype.formatted_amount || B(t.M()),
        S.initialize(this, r, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              formatted_amount: { n: 1, br: l.readString, bw: u.writeString },
              amount_in_cents: {
                n: 2,
                br: l.readInt64String,
                bw: u.writeInt64String,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = h(t.M())), t.sm_mbf;
    }
    toObject(r = !1) {
      return t.toObject(r, this);
    }
    static toObject(r, o) {
      return C(t.M(), r, o);
    }
    static fromObject(r) {
      return P(t.M(), r);
    }
    static deserializeBinary(r) {
      let o = new g.BinaryReader(r),
        s = new t();
      return t.deserializeBinaryFromReader(s, o);
    }
    static deserializeBinaryFromReader(r, o) {
      return R(t.MBF(), r, o);
    }
    serializeBinary() {
      var r = new g.BinaryWriter();
      return t.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, o) {
      k(t.M(), r, o);
    }
    serializeBase64String() {
      var r = new g.BinaryWriter();
      return t.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CStoreBrowse_GetPriceStops_Response_PriceStop";
    }
  },
  Qe = class t extends S {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        t.prototype.context || B(t.M()),
        S.initialize(this, r, 0, -1, [3], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              context: { n: 1, c: Q },
              store_page_filter: { n: 2, c: oe },
              appids: { n: 3, c: de, r: !0, q: !0 },
              steamid: {
                n: 4,
                br: l.readUint64String,
                bw: u.writeUint64String,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = h(t.M())), t.sm_mbf;
    }
    toObject(r = !1) {
      return t.toObject(r, this);
    }
    static toObject(r, o) {
      return C(t.M(), r, o);
    }
    static fromObject(r) {
      return P(t.M(), r);
    }
    static deserializeBinary(r) {
      let o = new g.BinaryReader(r),
        s = new t();
      return t.deserializeBinaryFromReader(s, o);
    }
    static deserializeBinaryFromReader(r, o) {
      return R(t.MBF(), r, o);
    }
    serializeBinary() {
      var r = new g.BinaryWriter();
      return t.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, o) {
      k(t.M(), r, o);
    }
    serializeBase64String() {
      var r = new g.BinaryWriter();
      return t.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CStoreBrowse_GetDLCForApps_Request";
    }
  },
  Je = class t extends S {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        t.prototype.dlc_data || B(t.M()),
        S.initialize(this, r, 0, -1, [1, 2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              dlc_data: { n: 1, c: et, r: !0, q: !0 },
              playtime: { n: 2, c: tt, r: !0, q: !0 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = h(t.M())), t.sm_mbf;
    }
    toObject(r = !1) {
      return t.toObject(r, this);
    }
    static toObject(r, o) {
      return C(t.M(), r, o);
    }
    static fromObject(r) {
      return P(t.M(), r);
    }
    static deserializeBinary(r) {
      let o = new g.BinaryReader(r),
        s = new t();
      return t.deserializeBinaryFromReader(s, o);
    }
    static deserializeBinaryFromReader(r, o) {
      return R(t.MBF(), r, o);
    }
    serializeBinary() {
      var r = new g.BinaryWriter();
      return t.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, o) {
      k(t.M(), r, o);
    }
    serializeBase64String() {
      var r = new g.BinaryWriter();
      return t.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CStoreBrowse_GetDLCForApps_Response";
    }
  },
  et = class t extends S {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        t.prototype.appid || B(t.M()),
        S.initialize(this, r, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              appid: { n: 1, br: l.readUint32, bw: u.writeUint32 },
              parentappid: { n: 2, br: l.readUint32, bw: u.writeUint32 },
              release_date: { n: 3, br: l.readUint32, bw: u.writeUint32 },
              coming_soon: { n: 4, br: l.readBool, bw: u.writeBool },
              price: { n: 5, br: l.readInt64String, bw: u.writeInt64String },
              discount: { n: 6, br: l.readUint32, bw: u.writeUint32 },
              free: { n: 7, br: l.readBool, bw: u.writeBool },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = h(t.M())), t.sm_mbf;
    }
    toObject(r = !1) {
      return t.toObject(r, this);
    }
    static toObject(r, o) {
      return C(t.M(), r, o);
    }
    static fromObject(r) {
      return P(t.M(), r);
    }
    static deserializeBinary(r) {
      let o = new g.BinaryReader(r),
        s = new t();
      return t.deserializeBinaryFromReader(s, o);
    }
    static deserializeBinaryFromReader(r, o) {
      return R(t.MBF(), r, o);
    }
    serializeBinary() {
      var r = new g.BinaryWriter();
      return t.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, o) {
      k(t.M(), r, o);
    }
    serializeBase64String() {
      var r = new g.BinaryWriter();
      return t.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CStoreBrowse_GetDLCForApps_Response_DLCData";
    }
  },
  tt = class t extends S {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        t.prototype.appid || B(t.M()),
        S.initialize(this, r, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              appid: { n: 1, br: l.readUint32, bw: u.writeUint32 },
              playtime: { n: 2, br: l.readUint32, bw: u.writeUint32 },
              last_played: { n: 3, br: l.readUint32, bw: u.writeUint32 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = h(t.M())), t.sm_mbf;
    }
    toObject(r = !1) {
      return t.toObject(r, this);
    }
    static toObject(r, o) {
      return C(t.M(), r, o);
    }
    static fromObject(r) {
      return P(t.M(), r);
    }
    static deserializeBinary(r) {
      let o = new g.BinaryReader(r),
        s = new t();
      return t.deserializeBinaryFromReader(s, o);
    }
    static deserializeBinaryFromReader(r, o) {
      return R(t.MBF(), r, o);
    }
    serializeBinary() {
      var r = new g.BinaryWriter();
      return t.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, o) {
      k(t.M(), r, o);
    }
    serializeBase64String() {
      var r = new g.BinaryWriter();
      return t.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CStoreBrowse_GetDLCForApps_Response_PlaytimeForApp";
    }
  },
  rt = class t extends S {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        t.prototype.context || B(t.M()),
        S.initialize(this, r, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              context: { n: 1, c: Q },
              appids: {
                n: 2,
                r: !0,
                q: !0,
                br: l.readUint32,
                pbr: l.readPackedUint32,
                bw: u.writeRepeatedUint32,
              },
              flavor: { n: 3, br: l.readString, bw: u.writeString },
              count: { n: 4, br: l.readUint32, bw: u.writeUint32 },
              store_page_filter: { n: 5, c: oe },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = h(t.M())), t.sm_mbf;
    }
    toObject(r = !1) {
      return t.toObject(r, this);
    }
    static toObject(r, o) {
      return C(t.M(), r, o);
    }
    static fromObject(r) {
      return P(t.M(), r);
    }
    static deserializeBinary(r) {
      let o = new g.BinaryReader(r),
        s = new t();
      return t.deserializeBinaryFromReader(s, o);
    }
    static deserializeBinaryFromReader(r, o) {
      return R(t.MBF(), r, o);
    }
    serializeBinary() {
      var r = new g.BinaryWriter();
      return t.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, o) {
      k(t.M(), r, o);
    }
    serializeBase64String() {
      var r = new g.BinaryWriter();
      return t.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CStoreBrowse_GetDLCForAppsSolr_Request";
    }
  },
  ot = class t extends S {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        t.prototype.dlc_lists || B(t.M()),
        S.initialize(this, r, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: { dlc_lists: { n: 1, c: st, r: !0, q: !0 } },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = h(t.M())), t.sm_mbf;
    }
    toObject(r = !1) {
      return t.toObject(r, this);
    }
    static toObject(r, o) {
      return C(t.M(), r, o);
    }
    static fromObject(r) {
      return P(t.M(), r);
    }
    static deserializeBinary(r) {
      let o = new g.BinaryReader(r),
        s = new t();
      return t.deserializeBinaryFromReader(s, o);
    }
    static deserializeBinaryFromReader(r, o) {
      return R(t.MBF(), r, o);
    }
    serializeBinary() {
      var r = new g.BinaryWriter();
      return t.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, o) {
      k(t.M(), r, o);
    }
    serializeBase64String() {
      var r = new g.BinaryWriter();
      return t.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CStoreBrowse_GetDLCForAppsSolr_Response";
    }
  },
  st = class t extends S {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        t.prototype.parent_appid || B(t.M()),
        S.initialize(this, r, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              parent_appid: { n: 1, br: l.readUint32, bw: u.writeUint32 },
              dlc_appids: {
                n: 2,
                r: !0,
                q: !0,
                br: l.readUint32,
                pbr: l.readPackedUint32,
                bw: u.writeRepeatedUint32,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = h(t.M())), t.sm_mbf;
    }
    toObject(r = !1) {
      return t.toObject(r, this);
    }
    static toObject(r, o) {
      return C(t.M(), r, o);
    }
    static fromObject(r) {
      return P(t.M(), r);
    }
    static deserializeBinary(r) {
      let o = new g.BinaryReader(r),
        s = new t();
      return t.deserializeBinaryFromReader(s, o);
    }
    static deserializeBinaryFromReader(r, o) {
      return R(t.MBF(), r, o);
    }
    serializeBinary() {
      var r = new g.BinaryWriter();
      return t.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, o) {
      k(t.M(), r, o);
    }
    serializeBase64String() {
      var r = new g.BinaryWriter();
      return t.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CStoreBrowse_GetDLCForAppsSolr_Response_DLCList";
    }
  },
  nt = class t extends S {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        t.prototype.packageid || B(t.M()),
        S.initialize(this, r, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              packageid: {
                n: 1,
                r: !0,
                q: !0,
                br: l.readUint32,
                pbr: l.readPackedUint32,
                bw: u.writeRepeatedUint32,
              },
              context: { n: 2, c: Q },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = h(t.M())), t.sm_mbf;
    }
    toObject(r = !1) {
      return t.toObject(r, this);
    }
    static toObject(r, o) {
      return C(t.M(), r, o);
    }
    static fromObject(r) {
      return P(t.M(), r);
    }
    static deserializeBinary(r) {
      let o = new g.BinaryReader(r),
        s = new t();
      return t.deserializeBinaryFromReader(s, o);
    }
    static deserializeBinaryFromReader(r, o) {
      return R(t.MBF(), r, o);
    }
    serializeBinary() {
      var r = new g.BinaryWriter();
      return t.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, o) {
      k(t.M(), r, o);
    }
    serializeBase64String() {
      var r = new g.BinaryWriter();
      return t.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CStoreBrowse_GetHardwareItems_Request";
    }
  },
  it = class t extends S {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        t.prototype.packageid || B(t.M()),
        S.initialize(this, r, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              packageid: { n: 1, br: l.readUint32, bw: u.writeUint32 },
              inventory_available: { n: 3, br: l.readBool, bw: u.writeBool },
              high_pending_orders: { n: 4, br: l.readBool, bw: u.writeBool },
              account_restricted_from_purchasing: {
                n: 5,
                br: l.readBool,
                bw: u.writeBool,
              },
              requires_reservation: { n: 6, br: l.readBool, bw: u.writeBool },
              rtime_estimated_notification: {
                n: 7,
                br: l.readUint32,
                bw: u.writeUint32,
              },
              notificaton_token: { n: 8, br: l.readString, bw: u.writeString },
              reservation_state: { n: 9, br: l.readInt32, bw: u.writeInt32 },
              expired: { n: 10, br: l.readBool, bw: u.writeBool },
              time_expires: { n: 11, br: l.readUint32, bw: u.writeUint32 },
              time_reserved: { n: 12, br: l.readUint32, bw: u.writeUint32 },
              allow_quantity_purchase: {
                n: 13,
                br: l.readBool,
                bw: u.writeBool,
              },
              max_quantity_per_purchase: {
                n: 14,
                br: l.readInt32,
                bw: u.writeInt32,
              },
              allow_purchase_in_country: {
                n: 15,
                br: l.readBool,
                bw: u.writeBool,
              },
              estimated_delivery_soonest_business_days: {
                n: 17,
                br: l.readUint32,
                bw: u.writeUint32,
              },
              estimated_delivery_latest_business_days: {
                n: 18,
                br: l.readUint32,
                bw: u.writeUint32,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = h(t.M())), t.sm_mbf;
    }
    toObject(r = !1) {
      return t.toObject(r, this);
    }
    static toObject(r, o) {
      return C(t.M(), r, o);
    }
    static fromObject(r) {
      return P(t.M(), r);
    }
    static deserializeBinary(r) {
      let o = new g.BinaryReader(r),
        s = new t();
      return t.deserializeBinaryFromReader(s, o);
    }
    static deserializeBinaryFromReader(r, o) {
      return R(t.MBF(), r, o);
    }
    serializeBinary() {
      var r = new g.BinaryWriter();
      return t.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, o) {
      k(t.M(), r, o);
    }
    serializeBase64String() {
      var r = new g.BinaryWriter();
      return t.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CHardwarePackageDetails";
    }
  },
  at = class t extends S {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        t.prototype.details || B(t.M()),
        S.initialize(this, r, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: { details: { n: 1, c: it, r: !0, q: !0 } },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = h(t.M())), t.sm_mbf;
    }
    toObject(r = !1) {
      return t.toObject(r, this);
    }
    static toObject(r, o) {
      return C(t.M(), r, o);
    }
    static fromObject(r) {
      return P(t.M(), r);
    }
    static deserializeBinary(r) {
      let o = new g.BinaryReader(r),
        s = new t();
      return t.deserializeBinaryFromReader(s, o);
    }
    static deserializeBinaryFromReader(r, o) {
      return R(t.MBF(), r, o);
    }
    serializeBinary() {
      var r = new g.BinaryWriter();
      return t.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, o) {
      k(t.M(), r, o);
    }
    serializeBase64String() {
      var r = new g.BinaryWriter();
      return t.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CStoreBrowse_GetHardwareItems_Response";
    }
  },
  lt = class t extends S {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        t.prototype.filter_failure || B(t.M()),
        S.initialize(this, r, 0, -1, [21, 30], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              filter_failure: { n: 1, d: 0, br: l.readEnum, bw: u.writeEnum },
              already_owned: { n: 5, br: l.readBool, bw: u.writeBool },
              on_wishlist: { n: 6, br: l.readBool, bw: u.writeBool },
              ignored: { n: 7, br: l.readBool, bw: u.writeBool },
              not_in_users_language: { n: 10, br: l.readBool, bw: u.writeBool },
              not_on_users_platform: { n: 11, br: l.readBool, bw: u.writeBool },
              demo_for_owned_game: { n: 12, br: l.readBool, bw: u.writeBool },
              dlc_for_unowned_game: { n: 13, br: l.readBool, bw: u.writeBool },
              nonpreferred_product_type: {
                n: 20,
                br: l.readBool,
                bw: u.writeBool,
              },
              excluded_tagids: {
                n: 21,
                r: !0,
                q: !0,
                br: l.readUint32,
                pbr: l.readPackedUint32,
                bw: u.writeRepeatedUint32,
              },
              excluded_content_descriptorids: {
                n: 30,
                r: !0,
                q: !0,
                br: l.readEnum,
                pbr: l.readPackedEnum,
                bw: u.writeRepeatedEnum,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = h(t.M())), t.sm_mbf;
    }
    toObject(r = !1) {
      return t.toObject(r, this);
    }
    static toObject(r, o) {
      return C(t.M(), r, o);
    }
    static fromObject(r) {
      return P(t.M(), r);
    }
    static deserializeBinary(r) {
      let o = new g.BinaryReader(r),
        s = new t();
      return t.deserializeBinaryFromReader(s, o);
    }
    static deserializeBinaryFromReader(r, o) {
      return R(t.MBF(), r, o);
    }
    serializeBinary() {
      var r = new g.BinaryWriter();
      return t.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, o) {
      k(t.M(), r, o);
    }
    serializeBase64String() {
      var r = new g.BinaryWriter();
      return t.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "StoreBrowseFilterFailure";
    }
  },
  Ot;
((p) => {
  function t(_, m) {
    return _.SendMsg("StoreBrowse.GetItems#1", q(ze, m), Ve, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  p.GetItems = t;
  function r(_, m) {
    return _.SendMsg("StoreBrowse.GetStoreCategories#1", q(qe, m), Ke, {
      bConstMethod: !0,
      ePrivilege: 0,
      eWebAPIKeyRequirement: 1,
    });
  }
  p.GetStoreCategories = r;
  function o(_, m) {
    return _.SendMsg("StoreBrowse.GetPriceStops#1", q(Xe, m), $e, {
      bConstMethod: !0,
      ePrivilege: 0,
      eWebAPIKeyRequirement: 1,
    });
  }
  p.GetPriceStops = o;
  function s(_, m) {
    return _.SendMsg("StoreBrowse.GetDLCForApps#1", q(Qe, m), Je, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  p.GetDLCForApps = s;
  function n(_, m) {
    return _.SendMsg("StoreBrowse.GetDLCForAppsSolr#1", q(rt, m), ot, {
      bConstMethod: !0,
      ePrivilege: 0,
      eWebAPIKeyRequirement: 1,
    });
  }
  p.GetDLCForAppsSolr = n;
  function i(_, m) {
    return _.SendMsg("StoreBrowse.GetHardwareItems#1", q(nt, m), at, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  p.GetHardwareItems = i;
})((Ot ||= {}));
var L = null;
try {
  L = new WebAssembly.Instance(
    new WebAssembly.Module(
      new Uint8Array([
        0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127, 127,
        127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6, 1, 127, 1, 65, 0, 11,
        7, 50, 6, 3, 109, 117, 108, 0, 1, 5, 100, 105, 118, 95, 115, 0, 2, 5,
        100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95, 115, 0, 4, 5, 114,
        101, 109, 95, 117, 0, 5, 8, 103, 101, 116, 95, 104, 105, 103, 104, 0, 0,
        10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173,
        66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 126, 34, 4,
        66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32,
        1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 127,
        34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0,
        173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134,
        132, 128, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126,
        32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66,
        32, 134, 132, 129, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36,
        1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3,
        173, 66, 32, 134, 132, 130, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167,
        11,
      ]),
    ),
    {},
  ).exports;
} catch {}
function F(t, r, o) {
  (this.low = t | 0), (this.high = r | 0), (this.unsigned = !!o);
}
F.prototype.__isLong__;
Object.defineProperty(F.prototype, "__isLong__", { value: !0 });
function D(t) {
  return (t && t.__isLong__) === !0;
}
function Ct(t) {
  var r = Math.clz32(t & -t);
  return t ? 31 - r : r;
}
F.isLong = D;
var Rt = {},
  kt = {};
function K(t, r) {
  var o, s, n;
  return r
    ? ((t >>>= 0),
      (n = 0 <= t && t < 256) && ((s = kt[t]), s)
        ? s
        : ((o = I(t, 0, !0)), n && (kt[t] = o), o))
    : ((t |= 0),
      (n = -128 <= t && t < 128) && ((s = Rt[t]), s)
        ? s
        : ((o = I(t, t < 0 ? -1 : 0, !1)), n && (Rt[t] = o), o));
}
F.fromInt = K;
function W(t, r) {
  if (isNaN(t)) return r ? z : G;
  if (r) {
    if (t < 0) return z;
    if (t >= vt) return Tt;
  } else {
    if (t <= -At) return U;
    if (t + 1 >= At) return It;
  }
  return t < 0 ? W(-t, r).neg() : I((t % ee) | 0, (t / ee) | 0, r);
}
F.fromNumber = W;
function I(t, r, o) {
  return new F(t, r, o);
}
F.fromBits = I;
var ce = Math.pow;
function pt(t, r, o) {
  if (t.length === 0) throw Error("empty string");
  if (
    (typeof r == "number" ? ((o = r), (r = !1)) : (r = !!r),
    t === "NaN" || t === "Infinity" || t === "+Infinity" || t === "-Infinity")
  )
    return r ? z : G;
  if (((o = o || 10), o < 2 || 36 < o)) throw RangeError("radix");
  var s;
  if ((s = t.indexOf("-")) > 0) throw Error("interior hyphen");
  if (s === 0) return pt(t.substring(1), r, o).neg();
  for (var n = W(ce(o, 8)), i = G, p = 0; p < t.length; p += 8) {
    var _ = Math.min(8, t.length - p),
      m = parseInt(t.substring(p, p + _), o);
    if (_ < 8) {
      var A = W(ce(o, _));
      i = i.mul(A).add(W(m));
    } else (i = i.mul(n)), (i = i.add(W(m)));
  }
  return (i.unsigned = r), i;
}
F.fromString = pt;
function N(t, r) {
  return typeof t == "number"
    ? W(t, r)
    : typeof t == "string"
      ? pt(t, r)
      : I(t.low, t.high, typeof r == "boolean" ? r : t.unsigned);
}
F.fromValue = N;
var Bt = 65536,
  Lt = 1 << 24,
  ee = Bt * Bt,
  vt = ee * ee,
  At = vt / 2,
  Mt = K(Lt),
  G = K(0);
F.ZERO = G;
var z = K(0, !0);
F.UZERO = z;
var J = K(1);
F.ONE = J;
var wt = K(1, !0);
F.UONE = wt;
var ut = K(-1);
F.NEG_ONE = ut;
var It = I(-1, 2147483647, !1);
F.MAX_VALUE = It;
var Tt = I(-1, -1, !0);
F.MAX_UNSIGNED_VALUE = Tt;
var U = I(0, -2147483648, !1);
F.MIN_VALUE = U;
var y = F.prototype;
y.toInt = function () {
  return this.unsigned ? this.low >>> 0 : this.low;
};
y.toNumber = function () {
  return this.unsigned
    ? (this.high >>> 0) * ee + (this.low >>> 0)
    : this.high * ee + (this.low >>> 0);
};
y.toString = function (r) {
  if (((r = r || 10), r < 2 || 36 < r)) throw RangeError("radix");
  if (this.isZero()) return "0";
  if (this.isNegative())
    if (this.eq(U)) {
      var o = W(r),
        s = this.div(o),
        n = s.mul(o).sub(this);
      return s.toString(r) + n.toInt().toString(r);
    } else return "-" + this.neg().toString(r);
  for (var i = W(ce(r, 6), this.unsigned), p = this, _ = ""; ; ) {
    var m = p.div(i),
      A = p.sub(m.mul(i)).toInt() >>> 0,
      M = A.toString(r);
    if (((p = m), p.isZero())) return M + _;
    for (; M.length < 6; ) M = "0" + M;
    _ = "" + M + _;
  }
};
y.getHighBits = function () {
  return this.high;
};
y.getHighBitsUnsigned = function () {
  return this.high >>> 0;
};
y.getLowBits = function () {
  return this.low;
};
y.getLowBitsUnsigned = function () {
  return this.low >>> 0;
};
y.getNumBitsAbs = function () {
  if (this.isNegative()) return this.eq(U) ? 64 : this.neg().getNumBitsAbs();
  for (
    var r = this.high != 0 ? this.high : this.low, o = 31;
    o > 0 && !(r & (1 << o));
    o--
  );
  return this.high != 0 ? o + 33 : o + 1;
};
y.isZero = function () {
  return this.high === 0 && this.low === 0;
};
y.eqz = y.isZero;
y.isNegative = function () {
  return !this.unsigned && this.high < 0;
};
y.isPositive = function () {
  return this.unsigned || this.high >= 0;
};
y.isOdd = function () {
  return (this.low & 1) === 1;
};
y.isEven = function () {
  return (this.low & 1) === 0;
};
y.equals = function (r) {
  return (
    D(r) || (r = N(r)),
    this.unsigned !== r.unsigned &&
    this.high >>> 31 === 1 &&
    r.high >>> 31 === 1
      ? !1
      : this.high === r.high && this.low === r.low
  );
};
y.eq = y.equals;
y.notEquals = function (r) {
  return !this.eq(r);
};
y.neq = y.notEquals;
y.ne = y.notEquals;
y.lessThan = function (r) {
  return this.comp(r) < 0;
};
y.lt = y.lessThan;
y.lessThanOrEqual = function (r) {
  return this.comp(r) <= 0;
};
y.lte = y.lessThanOrEqual;
y.le = y.lessThanOrEqual;
y.greaterThan = function (r) {
  return this.comp(r) > 0;
};
y.gt = y.greaterThan;
y.greaterThanOrEqual = function (r) {
  return this.comp(r) >= 0;
};
y.gte = y.greaterThanOrEqual;
y.ge = y.greaterThanOrEqual;
y.compare = function (r) {
  if ((D(r) || (r = N(r)), this.eq(r))) return 0;
  var o = this.isNegative(),
    s = r.isNegative();
  return o && !s
    ? -1
    : !o && s
      ? 1
      : this.unsigned
        ? r.high >>> 0 > this.high >>> 0 ||
          (r.high === this.high && r.low >>> 0 > this.low >>> 0)
          ? -1
          : 1
        : this.sub(r).isNegative()
          ? -1
          : 1;
};
y.comp = y.compare;
y.negate = function () {
  return !this.unsigned && this.eq(U) ? U : this.not().add(J);
};
y.neg = y.negate;
y.add = function (r) {
  D(r) || (r = N(r));
  var o = this.high >>> 16,
    s = this.high & 65535,
    n = this.low >>> 16,
    i = this.low & 65535,
    p = r.high >>> 16,
    _ = r.high & 65535,
    m = r.low >>> 16,
    A = r.low & 65535,
    M = 0,
    v = 0,
    w = 0,
    O = 0;
  return (
    (O += i + A),
    (w += O >>> 16),
    (O &= 65535),
    (w += n + m),
    (v += w >>> 16),
    (w &= 65535),
    (v += s + _),
    (M += v >>> 16),
    (v &= 65535),
    (M += o + p),
    (M &= 65535),
    I((w << 16) | O, (M << 16) | v, this.unsigned)
  );
};
y.subtract = function (r) {
  return D(r) || (r = N(r)), this.add(r.neg());
};
y.sub = y.subtract;
y.multiply = function (r) {
  if (this.isZero()) return this;
  if ((D(r) || (r = N(r)), L)) {
    var o = L.mul(this.low, this.high, r.low, r.high);
    return I(o, L.get_high(), this.unsigned);
  }
  if (r.isZero()) return this.unsigned ? z : G;
  if (this.eq(U)) return r.isOdd() ? U : G;
  if (r.eq(U)) return this.isOdd() ? U : G;
  if (this.isNegative())
    return r.isNegative() ? this.neg().mul(r.neg()) : this.neg().mul(r).neg();
  if (r.isNegative()) return this.mul(r.neg()).neg();
  if (this.lt(Mt) && r.lt(Mt))
    return W(this.toNumber() * r.toNumber(), this.unsigned);
  var s = this.high >>> 16,
    n = this.high & 65535,
    i = this.low >>> 16,
    p = this.low & 65535,
    _ = r.high >>> 16,
    m = r.high & 65535,
    A = r.low >>> 16,
    M = r.low & 65535,
    v = 0,
    w = 0,
    O = 0,
    ae = 0;
  return (
    (ae += p * M),
    (O += ae >>> 16),
    (ae &= 65535),
    (O += i * M),
    (w += O >>> 16),
    (O &= 65535),
    (O += p * A),
    (w += O >>> 16),
    (O &= 65535),
    (w += n * M),
    (v += w >>> 16),
    (w &= 65535),
    (w += i * A),
    (v += w >>> 16),
    (w &= 65535),
    (w += p * m),
    (v += w >>> 16),
    (w &= 65535),
    (v += s * M + n * A + i * m + p * _),
    (v &= 65535),
    I((O << 16) | ae, (v << 16) | w, this.unsigned)
  );
};
y.mul = y.multiply;
y.divide = function (r) {
  if ((D(r) || (r = N(r)), r.isZero())) throw Error("division by zero");
  if (L) {
    if (
      !this.unsigned &&
      this.high === -2147483648 &&
      r.low === -1 &&
      r.high === -1
    )
      return this;
    var o = (this.unsigned ? L.div_u : L.div_s)(
      this.low,
      this.high,
      r.low,
      r.high,
    );
    return I(o, L.get_high(), this.unsigned);
  }
  if (this.isZero()) return this.unsigned ? z : G;
  var s, n, i;
  if (this.unsigned) {
    if ((r.unsigned || (r = r.toUnsigned()), r.gt(this))) return z;
    if (r.gt(this.shru(1))) return wt;
    i = z;
  } else {
    if (this.eq(U)) {
      if (r.eq(J) || r.eq(ut)) return U;
      if (r.eq(U)) return J;
      var p = this.shr(1);
      return (
        (s = p.div(r).shl(1)),
        s.eq(G)
          ? r.isNegative()
            ? J
            : ut
          : ((n = this.sub(r.mul(s))), (i = s.add(n.div(r))), i)
      );
    } else if (r.eq(U)) return this.unsigned ? z : G;
    if (this.isNegative())
      return r.isNegative() ? this.neg().div(r.neg()) : this.neg().div(r).neg();
    if (r.isNegative()) return this.div(r.neg()).neg();
    i = G;
  }
  for (n = this; n.gte(r); ) {
    s = Math.max(1, Math.floor(n.toNumber() / r.toNumber()));
    for (
      var _ = Math.ceil(Math.log(s) / Math.LN2),
        m = _ <= 48 ? 1 : ce(2, _ - 48),
        A = W(s),
        M = A.mul(r);
      M.isNegative() || M.gt(n);
    )
      (s -= m), (A = W(s, this.unsigned)), (M = A.mul(r));
    A.isZero() && (A = J), (i = i.add(A)), (n = n.sub(M));
  }
  return i;
};
y.div = y.divide;
y.modulo = function (r) {
  if ((D(r) || (r = N(r)), L)) {
    var o = (this.unsigned ? L.rem_u : L.rem_s)(
      this.low,
      this.high,
      r.low,
      r.high,
    );
    return I(o, L.get_high(), this.unsigned);
  }
  return this.sub(this.div(r).mul(r));
};
y.mod = y.modulo;
y.rem = y.modulo;
y.not = function () {
  return I(~this.low, ~this.high, this.unsigned);
};
y.countLeadingZeros = function () {
  return this.high ? Math.clz32(this.high) : Math.clz32(this.low) + 32;
};
y.clz = y.countLeadingZeros;
y.countTrailingZeros = function () {
  return this.low ? Ct(this.low) : Ct(this.high) + 32;
};
y.ctz = y.countTrailingZeros;
y.and = function (r) {
  return (
    D(r) || (r = N(r)), I(this.low & r.low, this.high & r.high, this.unsigned)
  );
};
y.or = function (r) {
  return (
    D(r) || (r = N(r)), I(this.low | r.low, this.high | r.high, this.unsigned)
  );
};
y.xor = function (r) {
  return (
    D(r) || (r = N(r)), I(this.low ^ r.low, this.high ^ r.high, this.unsigned)
  );
};
y.shiftLeft = function (r) {
  return (
    D(r) && (r = r.toInt()),
    (r &= 63) === 0
      ? this
      : r < 32
        ? I(
            this.low << r,
            (this.high << r) | (this.low >>> (32 - r)),
            this.unsigned,
          )
        : I(0, this.low << (r - 32), this.unsigned)
  );
};
y.shl = y.shiftLeft;
y.shiftRight = function (r) {
  return (
    D(r) && (r = r.toInt()),
    (r &= 63) === 0
      ? this
      : r < 32
        ? I(
            (this.low >>> r) | (this.high << (32 - r)),
            this.high >> r,
            this.unsigned,
          )
        : I(this.high >> (r - 32), this.high >= 0 ? 0 : -1, this.unsigned)
  );
};
y.shr = y.shiftRight;
y.shiftRightUnsigned = function (r) {
  return (
    D(r) && (r = r.toInt()),
    (r &= 63) === 0
      ? this
      : r < 32
        ? I(
            (this.low >>> r) | (this.high << (32 - r)),
            this.high >>> r,
            this.unsigned,
          )
        : r === 32
          ? I(this.high, 0, this.unsigned)
          : I(this.high >>> (r - 32), 0, this.unsigned)
  );
};
y.shru = y.shiftRightUnsigned;
y.shr_u = y.shiftRightUnsigned;
y.rotateLeft = function (r) {
  var o;
  return (
    D(r) && (r = r.toInt()),
    (r &= 63) === 0
      ? this
      : r === 32
        ? I(this.high, this.low, this.unsigned)
        : r < 32
          ? ((o = 32 - r),
            I(
              (this.low << r) | (this.high >>> o),
              (this.high << r) | (this.low >>> o),
              this.unsigned,
            ))
          : ((r -= 32),
            (o = 32 - r),
            I(
              (this.high << r) | (this.low >>> o),
              (this.low << r) | (this.high >>> o),
              this.unsigned,
            ))
  );
};
y.rotl = y.rotateLeft;
y.rotateRight = function (r) {
  var o;
  return (
    D(r) && (r = r.toInt()),
    (r &= 63) === 0
      ? this
      : r === 32
        ? I(this.high, this.low, this.unsigned)
        : r < 32
          ? ((o = 32 - r),
            I(
              (this.high << o) | (this.low >>> r),
              (this.low << o) | (this.high >>> r),
              this.unsigned,
            ))
          : ((r -= 32),
            (o = 32 - r),
            I(
              (this.low << o) | (this.high >>> r),
              (this.high << o) | (this.low >>> r),
              this.unsigned,
            ))
  );
};
y.rotr = y.rotateRight;
y.toSigned = function () {
  return this.unsigned ? I(this.low, this.high, !1) : this;
};
y.toUnsigned = function () {
  return this.unsigned ? this : I(this.low, this.high, !0);
};
y.toBytes = function (r) {
  return r ? this.toBytesLE() : this.toBytesBE();
};
y.toBytesLE = function () {
  var r = this.high,
    o = this.low;
  return [
    o & 255,
    (o >>> 8) & 255,
    (o >>> 16) & 255,
    o >>> 24,
    r & 255,
    (r >>> 8) & 255,
    (r >>> 16) & 255,
    r >>> 24,
  ];
};
y.toBytesBE = function () {
  var r = this.high,
    o = this.low;
  return [
    r >>> 24,
    (r >>> 16) & 255,
    (r >>> 8) & 255,
    r & 255,
    o >>> 24,
    (o >>> 16) & 255,
    (o >>> 8) & 255,
    o & 255,
  ];
};
F.fromBytes = function (r, o, s) {
  return s ? F.fromBytesLE(r, o) : F.fromBytesBE(r, o);
};
F.fromBytesLE = function (r, o) {
  return new F(
    r[0] | (r[1] << 8) | (r[2] << 16) | (r[3] << 24),
    r[4] | (r[5] << 8) | (r[6] << 16) | (r[7] << 24),
    o,
  );
};
F.fromBytesBE = function (r, o) {
  return new F(
    (r[4] << 24) | (r[5] << 16) | (r[6] << 8) | r[7],
    (r[0] << 24) | (r[1] << 16) | (r[2] << 8) | r[3],
    o,
  );
};
var Y = F;
var jt = class t {
  m_ulSteamID = Y.UZERO;
  constructor(r = 0, o, s, n) {
    r instanceof t
      ? (this.m_ulSteamID = r.m_ulSteamID)
      : typeof r == "string"
        ? (this.m_ulSteamID = Y.fromString(r, !0))
        : o && s && n !== void 0
          ? this.SetFromComponents(r, n, s, o)
          : r
            ? (this.m_ulSteamID = Y.fromNumber(r, !0))
            : (this.m_ulSteamID = Y.UZERO);
  }
  static InitFromAccountID(r, o) {
    return new t(Number(r), o, 1, _t);
  }
  static InitFromClanID(r, o) {
    return new t(Number(r), o, 7, 0);
  }
  GetAccountID() {
    return this.m_ulSteamID.getLowBitsUnsigned();
  }
  GetInstance() {
    return this.m_ulSteamID.getHighBitsUnsigned() & 1048575;
  }
  GetAccountType() {
    return (this.m_ulSteamID.getHighBitsUnsigned() >> 20) & 15;
  }
  GetUniverse() {
    return (this.m_ulSteamID.getHighBitsUnsigned() >> 24) & 255;
  }
  ConvertTo64BitString() {
    return this.m_ulSteamID.toString();
  }
  Render() {
    switch (this.GetAccountType()) {
      case 0:
        return "[I:" + this.GetUniverse() + ":" + this.GetAccountID() + "]";
      case 7:
        return "[g:" + this.GetUniverse() + ":" + this.GetAccountID() + "]";
      case 4:
        return (
          "[A:" +
          this.GetUniverse() +
          ":" +
          this.GetAccountID() +
          ":" +
          this.GetInstance() +
          "]"
        );
      case 3:
        return "[G:" + this.GetUniverse() + ":" + this.GetAccountID() + "]";
      case 2:
        return (
          "[M:" +
          this.GetUniverse() +
          ":" +
          this.GetAccountID() +
          ":" +
          this.GetInstance() +
          "]"
        );
      case 5:
        return "[P:" + this.GetUniverse() + ":" + this.GetAccountID() + "]";
      case 6:
        return "[C:" + this.GetUniverse() + ":" + this.GetAccountID() + "]";
      default:
        return "[U:" + this.GetUniverse() + ":" + this.GetAccountID() + "]";
    }
  }
  static InitFromString(r) {
    let o = new t();
    try {
      let [s, n, i, p, _] =
          r.match(/\[([I|g|A|G|M|P|C|U]):(\d+):(\d+):?(\d+)?\]/) || [],
        m = Number(i),
        A = Number(p),
        M = _ ? Number(_) : 1;
      switch (n) {
        case "I":
          o.SetFromComponents(A, M, 0, m);
          break;
        case "g":
          o.SetFromComponents(A, 0, 7, m);
          break;
        case "A":
          o.SetFromComponents(A, M, 4, m);
          break;
        case "G":
          o.SetFromComponents(A, M, 3, m);
          break;
        case "M":
          o.SetFromComponents(A, M, 2, m);
          break;
        case "P":
          o.SetFromComponents(A, M, 5, m);
          break;
        case "C":
          o.SetFromComponents(A, M, 6, m);
          break;
        case "U":
          o.SetFromComponents(A, M, 1, m);
          break;
      }
    } catch {}
    return o;
  }
  BIsValid() {
    let r = this.GetAccountType();
    if (r <= 0 || r >= 11) return !1;
    let o = this.GetUniverse();
    if (o <= 0 || o >= 5) return !1;
    if (r == 1) {
      if (this.GetAccountID() == 0 || this.GetInstance() > mt) return !1;
    } else if (r == 7) {
      if (this.GetAccountID() == 0 || this.GetInstance() != 0) return !1;
    } else if (r == 3 && this.GetAccountID() == 0) return !1;
    return !0;
  }
  BIsIndividualAccount() {
    return this.GetAccountType() == 1;
  }
  BIsClanAccount() {
    return this.GetAccountType() == 7;
  }
  SetAccountID(r) {
    this.m_ulSteamID = new Y(r, this.m_ulSteamID.getHighBitsUnsigned(), !0);
  }
  SetInstance(r) {
    this.SetFromComponents(
      this.GetAccountID(),
      r,
      this.GetAccountType(),
      this.GetUniverse(),
    );
  }
  SetAccountType(r) {
    this.SetFromComponents(
      this.GetAccountID(),
      this.GetInstance(),
      r,
      this.GetUniverse(),
    );
  }
  SetUniverse(r) {
    this.SetFromComponents(
      this.GetAccountID(),
      this.GetInstance(),
      this.GetAccountType(),
      r,
    );
  }
  SetFromComponents(r, o, s, n) {
    let i = ((n & 255) << 24) + ((s & 15) << 20) + (o & 1048575),
      p = r & 4294967295;
    this.m_ulSteamID = new Y(p, i, !0);
  }
};
var Wt = 8,
  dt = class t {
    static sm_ErrorReportingStore;
    static InstallErrorReportingStore(r) {
      this.sm_ErrorReportingStore = r;
    }
    static InitHeaderFromPacket(r) {
      return new t(void 0, r);
    }
    m_eMsg;
    m_bValid;
    m_netPacket;
    m_cubHeader;
    m_header;
    m_body;
    constructor(r, o, s, n, i, p) {
      if (n)
        (this.m_eMsg = n.m_eMsg),
          (this.m_bValid = n.m_bValid),
          this.m_bValid &&
            ((this.m_netPacket = n.m_netPacket),
            (this.m_cubHeader = n.m_cubHeader),
            (this.m_header = n.m_header),
            this.InitForType(s));
      else {
        if (((this.m_header = new te(null)), (this.m_bValid = !0), o))
          if (
            ((this.m_netPacket = o),
            this.m_netPacket.SeekGetHead(),
            (this.m_eMsg = this.m_netPacket.GetUint32()),
            this.m_eMsg & 2147483648)
          ) {
            (this.m_eMsg = this.m_eMsg & 2147483647),
              (this.m_cubHeader = this.m_netPacket.GetUint32());
            try {
              te.deserializeBinaryFromReader(
                this.m_header,
                new gt.BinaryReader(
                  this.m_netPacket.GetPacket(),
                  this.m_netPacket.TellGet(),
                  this.m_cubHeader,
                ),
              ),
                this.m_netPacket.SeekGetCurrent(this.m_cubHeader),
                s && this.InitForType(s);
            } catch (_) {
              console.error("Exception deserializing protobuf", _),
                (this.m_bValid = !1);
            }
          } else this.m_bValid = !1;
        else
          r && (this.m_eMsg = r),
            p && s
              ? (this.m_body = s.fromObject(p))
              : s && (this.m_body = new s());
        i && this.m_header.set_jobid_target(i.Hdr().jobid_target());
      }
    }
    InitForType(r) {
      (this.m_body = new r()),
        this.m_netPacket &&
          (this.m_netPacket.SeekGetHead(8 + this.m_cubHeader),
          this.ReadBodyFromBuffer(r, this.m_netPacket));
    }
    ReadBodyFromBuffer(r, o) {
      try {
        r.deserializeBinaryFromReader(
          this.m_body,
          new gt.BinaryReader(
            o.GetPacket(),
            o.TellGet(),
            o.GetCountBytesRemaining(),
          ),
        );
      } catch (s) {
        this.m_bValid = !1;
        let n = t.sm_ErrorReportingStore,
          i = `Exception parsing protobuf message body of type ${this.m_eMsg}.  Definitions may be out of sync with server version.`;
        n && n.ReportError(new Error(i), { bIncludeMessageInIdentifier: !0 }),
          console.warn(i),
          console.log(s.stack || s);
      }
    }
    BIsValid() {
      return this.m_bValid;
    }
    Body() {
      return this.m_body;
    }
    SetBodyJSON(r) {
      (r.toObject = () => r), (this.m_body = r);
    }
    Hdr() {
      return this.m_header;
    }
    GetEMsg() {
      return this.m_eMsg;
    }
    SetEMsg(r) {
      this.m_eMsg = r;
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
      let r = this.m_header.serializeBinary(),
        o = this.m_body.serializeBinary(),
        s = this.m_eMsg | 2147483648,
        n = new Uint8Array(Wt + r.length + o.length),
        i = new re(n);
      return (
        i.PutUint32(s), i.PutUint32(r.length), i.PutBytes(r), i.PutBytes(o), n
      );
    }
    SerializeBody() {
      let r = this.m_body.serializeBinary(),
        o = new Uint8Array(r.length);
      return new re(o).PutBytes(r), o;
    }
    DEBUG_ToObject() {
      return {};
    }
    DEBUG_LogToConsole() {}
  },
  _e = class t extends dt {
    constructor(r, o = 0, s, n, i) {
      super(o, s, r, n, void 0, i);
    }
    static InitFromPacket(r, o) {
      return new t(r, 0, o);
    }
    static InitFromMsg(r, o) {
      return new t(r, void 0, void 0, o);
    }
    static Init(r, o) {
      return new t(r, o);
    }
    static InitFromObject(r, o) {
      return new t(r, void 0, void 0, void 0, o);
    }
    Body() {
      return super.Body();
    }
    SetBodyFields(r) {
      for (let o in r)
        Array.isArray(r[o])
          ? this.Body()[`add_${o}`] &&
            r[o].forEach((s) => {
              this.Body()[`add_${o}`](s);
            })
          : this.Body()[`set_${o}`] && this.Body()[`set_${o}`](r[o]);
    }
  };
function q(t, r) {
  return r instanceof _e ? r : _e.InitFromObject(t, r);
}
var V = X(Ht());
var Ft = V.createContext(void 0),
  Gt = Ft.Provider,
  me = () => {
    let t = V.useContext(Ft);
    if (!t)
      throw new Error(
        "called useActiveServiceTransportContext outside of ServiceTransportProvider",
      );
    return t;
  };
function Sr(t) {
  let { useStorage: r, children: o } = t,
    s,
    n;
  if ("useActiveCMInterface" in t) n = s = t.useActiveCMInterface;
  else if ("useActiveSteamInterface" in t) n = t.useActiveSteamInterface;
  else
    return (
      ct(
        t,
        "neither useActiveCMInterface nor useActiveSteamInterface were provided",
      ),
      o
    );
  let i = V.useMemo(
    () => ({
      useActiveSteamInterface: n,
      useActiveCMInterface: s,
      useStorage: r,
    }),
    [n, s, r],
  );
  return V.createElement(Gt, { value: i }, o);
}
var br = () => me().useActiveSteamInterface().GetServiceTransport(),
  yr = () => me().useActiveSteamInterface().GetAnonymousServiceTransport(),
  hr = () => me().useStorage(),
  Pr = () => me().useActiveSteamInterface();
export {
  $ as a,
  l as b,
  u as c,
  h as d,
  P as e,
  C as f,
  R as g,
  k as h,
  B as i,
  ft as j,
  St as k,
  bt as l,
  yt as m,
  ht as n,
  re as o,
  zt as p,
  Y as q,
  jt as r,
  dt as s,
  _e as t,
  q as u,
  oe as v,
  Zt as w,
  ie as x,
  xe as y,
  Q as z,
  de as A,
  ze as B,
  Ve as C,
  Xe as D,
  Ot as E,
  Sr as F,
  br as G,
  yr as H,
  hr as I,
  Pr as J,
};
/*! Bundled license information:

long/index.js:
  (**
   * @license
   * Copyright 2009 The Closure Library Authors
   * Copyright 2020 Daniel Wirtz / The long.js Authors.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *
   * SPDX-License-Identifier: Apache-2.0
   *)
*/

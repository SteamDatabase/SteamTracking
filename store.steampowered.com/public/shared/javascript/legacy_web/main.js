/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "8002491";
(() => {
  var __webpack_modules__ = {
      19: function (module, exports) {
        var $jscomp = $jscomp || {};
        ($jscomp.scope = {}),
          ($jscomp.findInternal = function (e, t, o) {
            e instanceof String && (e = String(e));
            for (var r = e.length, n = 0; n < r; n++) {
              var i = e[n];
              if (t.call(o, i, n, e)) return { i: n, v: i };
            }
            return { i: -1, v: void 0 };
          }),
          ($jscomp.ASSUME_ES5 = !1),
          ($jscomp.ASSUME_NO_NATIVE_MAP = !1),
          ($jscomp.ASSUME_NO_NATIVE_SET = !1),
          ($jscomp.SIMPLE_FROUND_POLYFILL = !1),
          ($jscomp.defineProperty =
            $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties
              ? Object.defineProperty
              : function (e, t, o) {
                  e != Array.prototype &&
                    e != Object.prototype &&
                    (e[t] = o.value);
                }),
          ($jscomp.getGlobal = function (e) {
            return "undefined" != typeof window && window === e
              ? e
              : "undefined" != typeof global && null != global
              ? global
              : e;
          }),
          ($jscomp.global = $jscomp.getGlobal(this)),
          ($jscomp.polyfill = function (e, t, o, r) {
            if (t) {
              for (
                o = $jscomp.global, e = e.split("."), r = 0;
                r < e.length - 1;
                r++
              ) {
                var n = e[r];
                n in o || (o[n] = {}), (o = o[n]);
              }
              (t = t((r = o[(e = e[e.length - 1])]))) != r &&
                null != t &&
                $jscomp.defineProperty(o, e, {
                  configurable: !0,
                  writable: !0,
                  value: t,
                });
            }
          }),
          $jscomp.polyfill(
            "Array.prototype.findIndex",
            function (e) {
              return (
                e ||
                function (e, t) {
                  return $jscomp.findInternal(this, e, t).i;
                }
              );
            },
            "es6",
            "es3"
          ),
          ($jscomp.checkStringArgs = function (e, t, o) {
            if (null == e)
              throw new TypeError(
                "The 'this' value for String.prototype." +
                  o +
                  " must not be null or undefined"
              );
            if (t instanceof RegExp)
              throw new TypeError(
                "First argument to String.prototype." +
                  o +
                  " must not be a regular expression"
              );
            return e + "";
          }),
          $jscomp.polyfill(
            "String.prototype.endsWith",
            function (e) {
              return (
                e ||
                function (e, t) {
                  var o = $jscomp.checkStringArgs(this, e, "endsWith");
                  (e += ""),
                    void 0 === t && (t = o.length),
                    (t = Math.max(0, Math.min(0 | t, o.length)));
                  for (var r = e.length; 0 < r && 0 < t; )
                    if (o[--t] != e[--r]) return !1;
                  return 0 >= r;
                }
              );
            },
            "es6",
            "es3"
          ),
          $jscomp.polyfill(
            "Array.prototype.find",
            function (e) {
              return (
                e ||
                function (e, t) {
                  return $jscomp.findInternal(this, e, t).v;
                }
              );
            },
            "es6",
            "es3"
          ),
          $jscomp.polyfill(
            "String.prototype.startsWith",
            function (e) {
              return (
                e ||
                function (e, t) {
                  var o = $jscomp.checkStringArgs(this, e, "startsWith");
                  e += "";
                  var r = o.length,
                    n = e.length;
                  t = Math.max(0, Math.min(0 | t, o.length));
                  for (var i = 0; i < n && t < r; )
                    if (o[t++] != e[i++]) return !1;
                  return i >= n;
                }
              );
            },
            "es6",
            "es3"
          ),
          $jscomp.polyfill(
            "String.prototype.repeat",
            function (e) {
              return (
                e ||
                function (e) {
                  var t = $jscomp.checkStringArgs(this, null, "repeat");
                  if (0 > e || 1342177279 < e)
                    throw new RangeError("Invalid count value");
                  e |= 0;
                  for (var o = ""; e; )
                    1 & e && (o += t), (e >>>= 1) && (t += t);
                  return o;
                }
              );
            },
            "es6",
            "es3"
          );
        var COMPILED = !0,
          goog = goog || {};
        (goog.global = this || self),
          (goog.exportPath_ = function (e, t, o) {
            (e = e.split(".")),
              (o = o || goog.global),
              e[0] in o ||
                void 0 === o.execScript ||
                o.execScript("var " + e[0]);
            for (var r; e.length && (r = e.shift()); )
              e.length || void 0 === t
                ? (o =
                    o[r] && o[r] !== Object.prototype[r] ? o[r] : (o[r] = {}))
                : (o[r] = t);
          }),
          (goog.define = function (e, t) {
            if (!COMPILED) {
              var o = goog.global.CLOSURE_UNCOMPILED_DEFINES,
                r = goog.global.CLOSURE_DEFINES;
              o &&
              void 0 === o.nodeType &&
              Object.prototype.hasOwnProperty.call(o, e)
                ? (t = o[e])
                : r &&
                  void 0 === r.nodeType &&
                  Object.prototype.hasOwnProperty.call(r, e) &&
                  (t = r[e]);
            }
            return t;
          }),
          (goog.FEATURESET_YEAR = 2012),
          (goog.DEBUG = !0),
          (goog.LOCALE = "en"),
          (goog.TRUSTED_SITE = !0),
          (goog.STRICT_MODE_COMPATIBLE = !1),
          (goog.DISALLOW_TEST_ONLY_CODE = COMPILED && !goog.DEBUG),
          (goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING = !1),
          (goog.provide = function (e) {
            if (goog.isInModuleLoader_())
              throw Error("goog.provide cannot be used within a module.");
            if (!COMPILED && goog.isProvided_(e))
              throw Error('Namespace "' + e + '" already declared.');
            goog.constructNamespace_(e);
          }),
          (goog.constructNamespace_ = function (e, t) {
            if (!COMPILED) {
              delete goog.implicitNamespaces_[e];
              for (
                var o = e;
                (o = o.substring(0, o.lastIndexOf("."))) &&
                !goog.getObjectByName(o);

              )
                goog.implicitNamespaces_[o] = !0;
            }
            goog.exportPath_(e, t);
          }),
          (goog.getScriptNonce = function (e) {
            return e && e != goog.global
              ? goog.getScriptNonce_(e.document)
              : (null === goog.cspNonce_ &&
                  (goog.cspNonce_ = goog.getScriptNonce_(goog.global.document)),
                goog.cspNonce_);
          }),
          (goog.NONCE_PATTERN_ = /^[\w+/_-]+[=]{0,2}$/),
          (goog.cspNonce_ = null),
          (goog.getScriptNonce_ = function (e) {
            return (e = e.querySelector && e.querySelector("script[nonce]")) &&
              (e = e.nonce || e.getAttribute("nonce")) &&
              goog.NONCE_PATTERN_.test(e)
              ? e
              : "";
          }),
          (goog.VALID_MODULE_RE_ = /^[a-zA-Z_$][a-zA-Z0-9._$]*$/),
          (goog.module = function (e) {
            if (
              "string" != typeof e ||
              !e ||
              -1 == e.search(goog.VALID_MODULE_RE_)
            )
              throw Error("Invalid module identifier");
            if (!goog.isInGoogModuleLoader_())
              throw Error(
                "Module " +
                  e +
                  " has been loaded incorrectly. Note, modules cannot be loaded as normal scripts. They require some kind of pre-processing step. You're likely trying to load a module via a script tag or as a part of a concatenated bundle without rewriting the module. For more info see: https://github.com/google/closure-library/wiki/goog.module:-an-ES6-module-like-alternative-to-goog.provide."
              );
            if (goog.moduleLoaderState_.moduleName)
              throw Error("goog.module may only be called once per module.");
            if (((goog.moduleLoaderState_.moduleName = e), !COMPILED)) {
              if (goog.isProvided_(e))
                throw Error('Namespace "' + e + '" already declared.');
              delete goog.implicitNamespaces_[e];
            }
          }),
          (goog.module.get = function (e) {
            return goog.module.getInternal_(e);
          }),
          (goog.module.getInternal_ = function (e) {
            if (!COMPILED) {
              if (e in goog.loadedModules_)
                return goog.loadedModules_[e].exports;
              if (!goog.implicitNamespaces_[e])
                return null != (e = goog.getObjectByName(e)) ? e : null;
            }
            return null;
          }),
          (goog.ModuleType = { ES6: "es6", GOOG: "goog" }),
          (goog.moduleLoaderState_ = null),
          (goog.isInModuleLoader_ = function () {
            return goog.isInGoogModuleLoader_() || goog.isInEs6ModuleLoader_();
          }),
          (goog.isInGoogModuleLoader_ = function () {
            return (
              !!goog.moduleLoaderState_ &&
              goog.moduleLoaderState_.type == goog.ModuleType.GOOG
            );
          }),
          (goog.isInEs6ModuleLoader_ = function () {
            if (
              goog.moduleLoaderState_ &&
              goog.moduleLoaderState_.type == goog.ModuleType.ES6
            )
              return !0;
            var e = goog.global.$jscomp;
            return (
              !!e &&
              "function" == typeof e.getCurrentModulePath &&
              !!e.getCurrentModulePath()
            );
          }),
          (goog.module.declareLegacyNamespace = function () {
            if (!COMPILED && !goog.isInGoogModuleLoader_())
              throw Error(
                "goog.module.declareLegacyNamespace must be called from within a goog.module"
              );
            if (!COMPILED && !goog.moduleLoaderState_.moduleName)
              throw Error(
                "goog.module must be called prior to goog.module.declareLegacyNamespace."
              );
            goog.moduleLoaderState_.declareLegacyNamespace = !0;
          }),
          (goog.declareModuleId = function (e) {
            if (!COMPILED) {
              if (!goog.isInEs6ModuleLoader_())
                throw Error(
                  "goog.declareModuleId may only be called from within an ES6 module"
                );
              if (goog.moduleLoaderState_ && goog.moduleLoaderState_.moduleName)
                throw Error(
                  "goog.declareModuleId may only be called once per module."
                );
              if (e in goog.loadedModules_)
                throw Error(
                  'Module with namespace "' + e + '" already exists.'
                );
            }
            if (goog.moduleLoaderState_) goog.moduleLoaderState_.moduleName = e;
            else {
              var t = goog.global.$jscomp;
              if (!t || "function" != typeof t.getCurrentModulePath)
                throw Error(
                  'Module with namespace "' +
                    e +
                    '" has been loaded incorrectly.'
                );
              (t = t.require(t.getCurrentModulePath())),
                (goog.loadedModules_[e] = {
                  exports: t,
                  type: goog.ModuleType.ES6,
                  moduleId: e,
                });
            }
          }),
          (goog.setTestOnly = function (e) {
            if (goog.DISALLOW_TEST_ONLY_CODE)
              throw (
                ((e = e || ""),
                Error(
                  "Importing test-only code into non-debug environment" +
                    (e ? ": " + e : ".")
                ))
              );
          }),
          (goog.forwardDeclare = function (e) {}),
          COMPILED ||
            ((goog.isProvided_ = function (e) {
              return (
                e in goog.loadedModules_ ||
                (!goog.implicitNamespaces_[e] &&
                  null != goog.getObjectByName(e))
              );
            }),
            (goog.implicitNamespaces_ = { "goog.module": !0 })),
          (goog.getObjectByName = function (e, t) {
            (e = e.split(".")), (t = t || goog.global);
            for (var o = 0; o < e.length; o++)
              if (null == (t = t[e[o]])) return null;
            return t;
          }),
          (goog.globalize = function (e, t) {
            for (var o in ((t = t || goog.global), e)) t[o] = e[o];
          }),
          (goog.addDependency = function (e, t, o, r) {
            !COMPILED &&
              goog.DEPENDENCIES_ENABLED &&
              goog.debugLoader_.addDependency(e, t, o, r);
          }),
          (goog.ENABLE_DEBUG_LOADER = !0),
          (goog.logToConsole_ = function (e) {
            goog.global.console && goog.global.console.error(e);
          }),
          (goog.require = function (e) {
            if (!COMPILED) {
              if (
                (goog.ENABLE_DEBUG_LOADER && goog.debugLoader_.requested(e),
                goog.isProvided_(e))
              ) {
                if (goog.isInModuleLoader_())
                  return goog.module.getInternal_(e);
              } else if (goog.ENABLE_DEBUG_LOADER) {
                var t = goog.moduleLoaderState_;
                goog.moduleLoaderState_ = null;
                try {
                  goog.debugLoader_.load_(e);
                } finally {
                  goog.moduleLoaderState_ = t;
                }
              }
              return null;
            }
          }),
          (goog.requireType = function (e) {
            return {};
          }),
          (goog.basePath = ""),
          (goog.nullFunction = function () {}),
          (goog.abstractMethod = function () {
            throw Error("unimplemented abstract method");
          }),
          (goog.addSingletonGetter = function (e) {
            (e.instance_ = void 0),
              (e.getInstance = function () {
                return e.instance_
                  ? e.instance_
                  : (goog.DEBUG &&
                      (goog.instantiatedSingletons_[
                        goog.instantiatedSingletons_.length
                      ] = e),
                    (e.instance_ = new e()));
              });
          }),
          (goog.instantiatedSingletons_ = []),
          (goog.LOAD_MODULE_USING_EVAL = !0),
          (goog.SEAL_MODULE_EXPORTS = goog.DEBUG),
          (goog.loadedModules_ = {}),
          (goog.DEPENDENCIES_ENABLED = !COMPILED && goog.ENABLE_DEBUG_LOADER),
          (goog.TRANSPILE = "detect"),
          (goog.ASSUME_ES_MODULES_TRANSPILED = !1),
          (goog.TRANSPILE_TO_LANGUAGE = ""),
          (goog.TRANSPILER = "transpile.js"),
          (goog.hasBadLetScoping = null),
          (goog.useSafari10Workaround = function () {
            if (null == goog.hasBadLetScoping) {
              try {
                var a = !eval(
                  '"use strict";let x = 1; function f() { return typeof x; };f() == "number";'
                );
              } catch (e) {
                a = !1;
              }
              goog.hasBadLetScoping = a;
            }
            return goog.hasBadLetScoping;
          }),
          (goog.workaroundSafari10EvalBug = function (e) {
            return "(function(){" + e + "\n;})();\n";
          }),
          (goog.loadModule = function (e) {
            var t = goog.moduleLoaderState_;
            try {
              if (
                ((goog.moduleLoaderState_ = {
                  moduleName: "",
                  declareLegacyNamespace: !1,
                  type: goog.ModuleType.GOOG,
                }),
                goog.isFunction(e))
              )
                var o = e.call(void 0, {});
              else {
                if ("string" != typeof e)
                  throw Error("Invalid module definition");
                goog.useSafari10Workaround() &&
                  (e = goog.workaroundSafari10EvalBug(e)),
                  (o = goog.loadModuleFromSource_.call(void 0, e));
              }
              var r = goog.moduleLoaderState_.moduleName;
              if ("string" != typeof r || !r)
                throw Error('Invalid module name "' + r + '"');
              goog.moduleLoaderState_.declareLegacyNamespace
                ? goog.constructNamespace_(r, o)
                : goog.SEAL_MODULE_EXPORTS &&
                  Object.seal &&
                  "object" == typeof o &&
                  null != o &&
                  Object.seal(o),
                (goog.loadedModules_[r] = {
                  exports: o,
                  type: goog.ModuleType.GOOG,
                  moduleId: goog.moduleLoaderState_.moduleName,
                });
            } finally {
              goog.moduleLoaderState_ = t;
            }
          }),
          (goog.loadModuleFromSource_ = function (a) {
            return eval(a), {};
          }),
          (goog.normalizePath_ = function (e) {
            e = e.split("/");
            for (var t = 0; t < e.length; )
              "." == e[t]
                ? e.splice(t, 1)
                : t && ".." == e[t] && e[t - 1] && ".." != e[t - 1]
                ? e.splice(--t, 2)
                : t++;
            return e.join("/");
          }),
          (goog.loadFileSync_ = function (e) {
            if (goog.global.CLOSURE_LOAD_FILE_SYNC)
              return goog.global.CLOSURE_LOAD_FILE_SYNC(e);
            try {
              var t = new goog.global.XMLHttpRequest();
              return (
                t.open("get", e, !1),
                t.send(),
                0 == t.status || 200 == t.status ? t.responseText : null
              );
            } catch (e) {
              return null;
            }
          }),
          (goog.transpile_ = function (e, t, o) {
            var r = goog.global.$jscomp;
            r || (goog.global.$jscomp = r = {});
            var n = r.transpile;
            if (!n) {
              var i = goog.basePath + goog.TRANSPILER,
                a = goog.loadFileSync_(i);
              if (a) {
                if (
                  (function () {
                    (0, eval)(a + "\n//# sourceURL=" + i);
                  }.call(goog.global),
                  goog.global.$gwtExport &&
                    goog.global.$gwtExport.$jscomp &&
                    !goog.global.$gwtExport.$jscomp.transpile)
                )
                  throw Error(
                    'The transpiler did not properly export the "transpile" method. $gwtExport: ' +
                      JSON.stringify(goog.global.$gwtExport)
                  );
                (goog.global.$jscomp.transpile =
                  goog.global.$gwtExport.$jscomp.transpile),
                  (n = (r = goog.global.$jscomp).transpile);
              }
            }
            return (
              n ||
                (n = r.transpile =
                  function (e, t) {
                    return (
                      goog.logToConsole_(
                        t +
                          " requires transpilation but no transpiler was found."
                      ),
                      e
                    );
                  }),
              n(e, t, o)
            );
          }),
          (goog.typeOf = function (e) {
            var t = typeof e;
            if ("object" == t) {
              if (!e) return "null";
              if (e instanceof Array) return "array";
              if (e instanceof Object) return t;
              var o = Object.prototype.toString.call(e);
              if ("[object Window]" == o) return "object";
              if (
                "[object Array]" == o ||
                ("number" == typeof e.length &&
                  void 0 !== e.splice &&
                  void 0 !== e.propertyIsEnumerable &&
                  !e.propertyIsEnumerable("splice"))
              )
                return "array";
              if (
                "[object Function]" == o ||
                (void 0 !== e.call &&
                  void 0 !== e.propertyIsEnumerable &&
                  !e.propertyIsEnumerable("call"))
              )
                return "function";
            } else if ("function" == t && void 0 === e.call) return "object";
            return t;
          }),
          (goog.isArray = function (e) {
            return "array" == goog.typeOf(e);
          }),
          (goog.isArrayLike = function (e) {
            var t = goog.typeOf(e);
            return (
              "array" == t || ("object" == t && "number" == typeof e.length)
            );
          }),
          (goog.isDateLike = function (e) {
            return goog.isObject(e) && "function" == typeof e.getFullYear;
          }),
          (goog.isFunction = function (e) {
            return "function" == goog.typeOf(e);
          }),
          (goog.isObject = function (e) {
            var t = typeof e;
            return ("object" == t && null != e) || "function" == t;
          }),
          (goog.getUid = function (e) {
            return (
              (Object.prototype.hasOwnProperty.call(e, goog.UID_PROPERTY_) &&
                e[goog.UID_PROPERTY_]) ||
              (e[goog.UID_PROPERTY_] = ++goog.uidCounter_)
            );
          }),
          (goog.hasUid = function (e) {
            return !!e[goog.UID_PROPERTY_];
          }),
          (goog.removeUid = function (e) {
            null !== e &&
              "removeAttribute" in e &&
              e.removeAttribute(goog.UID_PROPERTY_);
            try {
              delete e[goog.UID_PROPERTY_];
            } catch (e) {}
          }),
          (goog.UID_PROPERTY_ = "closure_uid_" + ((1e9 * Math.random()) >>> 0)),
          (goog.uidCounter_ = 0),
          (goog.getHashCode = goog.getUid),
          (goog.removeHashCode = goog.removeUid),
          (goog.cloneObject = function (e) {
            var t = goog.typeOf(e);
            if ("object" == t || "array" == t) {
              if ("function" == typeof e.clone) return e.clone();
              for (var o in ((t = "array" == t ? [] : {}), e))
                t[o] = goog.cloneObject(e[o]);
              return t;
            }
            return e;
          }),
          (goog.bindNative_ = function (e, t, o) {
            return e.call.apply(e.bind, arguments);
          }),
          (goog.bindJs_ = function (e, t, o) {
            if (!e) throw Error();
            if (2 < arguments.length) {
              var r = Array.prototype.slice.call(arguments, 2);
              return function () {
                var o = Array.prototype.slice.call(arguments);
                return Array.prototype.unshift.apply(o, r), e.apply(t, o);
              };
            }
            return function () {
              return e.apply(t, arguments);
            };
          }),
          (goog.bind = function (e, t, o) {
            return (
              Function.prototype.bind &&
              -1 != Function.prototype.bind.toString().indexOf("native code")
                ? (goog.bind = goog.bindNative_)
                : (goog.bind = goog.bindJs_),
              goog.bind.apply(null, arguments)
            );
          }),
          (goog.partial = function (e, t) {
            var o = Array.prototype.slice.call(arguments, 1);
            return function () {
              var t = o.slice();
              return t.push.apply(t, arguments), e.apply(this, t);
            };
          }),
          (goog.mixin = function (e, t) {
            for (var o in t) e[o] = t[o];
          }),
          (goog.now =
            (goog.TRUSTED_SITE && Date.now) ||
            function () {
              return +new Date();
            }),
          (goog.globalEval = function (e) {
            if (goog.global.execScript) goog.global.execScript(e, "JavaScript");
            else {
              if (!goog.global.eval)
                throw Error("goog.globalEval not available");
              if (null == goog.evalWorksForGlobals_) {
                try {
                  goog.global.eval("var _evalTest_ = 1;");
                } catch (e) {}
                if (void 0 !== goog.global._evalTest_) {
                  try {
                    delete goog.global._evalTest_;
                  } catch (e) {}
                  goog.evalWorksForGlobals_ = !0;
                } else goog.evalWorksForGlobals_ = !1;
              }
              if (goog.evalWorksForGlobals_) goog.global.eval(e);
              else {
                var t = goog.global.document,
                  o = t.createElement("script");
                (o.type = "text/javascript"),
                  (o.defer = !1),
                  o.appendChild(t.createTextNode(e)),
                  t.head.appendChild(o),
                  t.head.removeChild(o);
              }
            }
          }),
          (goog.evalWorksForGlobals_ = null),
          (goog.getCssName = function (e, t) {
            if ("." == String(e).charAt(0))
              throw Error(
                'className passed in goog.getCssName must not start with ".". You passed: ' +
                  e
              );
            var o = function (e) {
                return goog.cssNameMapping_[e] || e;
              },
              r = function (e) {
                e = e.split("-");
                for (var t = [], r = 0; r < e.length; r++) t.push(o(e[r]));
                return t.join("-");
              };
            return (
              (r = goog.cssNameMapping_
                ? "BY_WHOLE" == goog.cssNameMappingStyle_
                  ? o
                  : r
                : function (e) {
                    return e;
                  }),
              (e = t ? e + "-" + r(t) : r(e)),
              goog.global.CLOSURE_CSS_NAME_MAP_FN
                ? goog.global.CLOSURE_CSS_NAME_MAP_FN(e)
                : e
            );
          }),
          (goog.setCssNameMapping = function (e, t) {
            (goog.cssNameMapping_ = e), (goog.cssNameMappingStyle_ = t);
          }),
          !COMPILED &&
            goog.global.CLOSURE_CSS_NAME_MAPPING &&
            (goog.cssNameMapping_ = goog.global.CLOSURE_CSS_NAME_MAPPING),
          (goog.getMsg = function (e, t, o) {
            return (
              o && o.html && (e = e.replace(/</g, "&lt;")),
              t &&
                (e = e.replace(/\{\$([^}]+)}/g, function (e, o) {
                  return null != t && o in t ? t[o] : e;
                })),
              e
            );
          }),
          (goog.getMsgWithFallback = function (e, t) {
            return e;
          }),
          (goog.exportSymbol = function (e, t, o) {
            goog.exportPath_(e, t, o);
          }),
          (goog.exportProperty = function (e, t, o) {
            e[t] = o;
          }),
          (goog.inherits = function (e, t) {
            function o() {}
            (o.prototype = t.prototype),
              (e.superClass_ = t.prototype),
              (e.prototype = new o()),
              (e.prototype.constructor = e),
              (e.base = function (e, o, r) {
                for (
                  var n = Array(arguments.length - 2), i = 2;
                  i < arguments.length;
                  i++
                )
                  n[i - 2] = arguments[i];
                return t.prototype[o].apply(e, n);
              });
          }),
          (goog.scope = function (e) {
            if (goog.isInModuleLoader_())
              throw Error("goog.scope is not supported within a module.");
            e.call(goog.global);
          }),
          COMPILED || (goog.global.COMPILED = COMPILED),
          (goog.defineClass = function (e, t) {
            var o = t.constructor,
              r = t.statics;
            return (
              (o && o != Object.prototype.constructor) ||
                (o = function () {
                  throw Error(
                    "cannot instantiate an interface (no constructor defined)."
                  );
                }),
              (o = goog.defineClass.createSealingConstructor_(o, e)),
              e && goog.inherits(o, e),
              delete t.constructor,
              delete t.statics,
              goog.defineClass.applyProperties_(o.prototype, t),
              null != r &&
                (r instanceof Function
                  ? r(o)
                  : goog.defineClass.applyProperties_(o, r)),
              o
            );
          }),
          (goog.defineClass.SEAL_CLASS_INSTANCES = goog.DEBUG),
          (goog.defineClass.createSealingConstructor_ = function (e, t) {
            if (!goog.defineClass.SEAL_CLASS_INSTANCES) return e;
            var o = !goog.defineClass.isUnsealable_(t),
              r = function () {
                var t = e.apply(this, arguments) || this;
                return (
                  (t[goog.UID_PROPERTY_] = t[goog.UID_PROPERTY_]),
                  this.constructor === r &&
                    o &&
                    Object.seal instanceof Function &&
                    Object.seal(t),
                  t
                );
              };
            return r;
          }),
          (goog.defineClass.isUnsealable_ = function (e) {
            return (
              e &&
              e.prototype &&
              e.prototype[goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_]
            );
          }),
          (goog.defineClass.OBJECT_PROTOTYPE_FIELDS_ =
            "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(
              " "
            )),
          (goog.defineClass.applyProperties_ = function (e, t) {
            for (var o in t)
              Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            for (
              var r = 0;
              r < goog.defineClass.OBJECT_PROTOTYPE_FIELDS_.length;
              r++
            )
              (o = goog.defineClass.OBJECT_PROTOTYPE_FIELDS_[r]),
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
          }),
          (goog.tagUnsealableClass = function (e) {
            !COMPILED &&
              goog.defineClass.SEAL_CLASS_INSTANCES &&
              (e.prototype[goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_] = !0);
          }),
          (goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_ =
            "goog_defineClass_legacy_unsealable"),
          !COMPILED &&
            goog.DEPENDENCIES_ENABLED &&
            ((goog.inHtmlDocument_ = function () {
              var e = goog.global.document;
              return null != e && "write" in e;
            }),
            (goog.isDocumentLoading_ = function () {
              var e = goog.global.document;
              return e.attachEvent
                ? "complete" != e.readyState
                : "loading" == e.readyState;
            }),
            (goog.findBasePath_ = function () {
              if (
                null != goog.global.CLOSURE_BASE_PATH &&
                "string" == typeof goog.global.CLOSURE_BASE_PATH
              )
                goog.basePath = goog.global.CLOSURE_BASE_PATH;
              else if (goog.inHtmlDocument_()) {
                var e = goog.global.document,
                  t = e.currentScript;
                for (
                  t =
                    (e = t ? [t] : e.getElementsByTagName("SCRIPT")).length - 1;
                  0 <= t;
                  --t
                ) {
                  var o = e[t].src,
                    r = o.lastIndexOf("?");
                  if (
                    ((r = -1 == r ? o.length : r),
                    "base.js" == o.substr(r - 7, 7))
                  ) {
                    goog.basePath = o.substr(0, r - 7);
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
            (goog.Transpiler.prototype.createRequiresTranspilation_ =
              function () {
                function a(t, o) {
                  e
                    ? (d[t] = !0)
                    : o()
                    ? ((c = t), (d[t] = !1))
                    : (e = d[t] = !0);
                }
                function b(a) {
                  try {
                    return !!eval(a);
                  } catch (e) {
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
                    return (
                      !f.match(/Edge\/(\d+)(\.\d)*/i) &&
                      b(
                        '(()=>{"use strict";class X{constructor(){if(new.target!=String)throw 1;this.x=42}}let q=Reflect.construct(X,[],String);if(q.x!=42||!(q instanceof String))throw 1;for(const a of[2,3]){if(a==2)continue;function f(z={a}){let a=0;return z.a}{function f(){return 0;}}return f()==3}})()'
                      )
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
            (goog.Transpiler.prototype.needsTranspile = function (e, t) {
              if ("always" == goog.TRANSPILE) return !0;
              if ("never" == goog.TRANSPILE) return !1;
              if (!this.requiresTranspilation_) {
                var o = this.createRequiresTranspilation_();
                (this.requiresTranspilation_ = o.map),
                  (this.transpilationTarget_ =
                    this.transpilationTarget_ || o.target);
              }
              if (e in this.requiresTranspilation_)
                return (
                  !!this.requiresTranspilation_[e] ||
                  !(
                    !goog.inHtmlDocument_() ||
                    "es6" != t ||
                    "noModule" in goog.global.document.createElement("script")
                  )
                );
              throw Error("Unknown language mode: " + e);
            }),
            (goog.Transpiler.prototype.transpile = function (e, t) {
              return goog.transpile_(e, t, this.transpilationTarget_);
            }),
            (goog.transpiler_ = new goog.Transpiler()),
            (goog.protectScriptTag_ = function (e) {
              return e.replace(/<\/(SCRIPT)/gi, "\\x3c/$1");
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
            (goog.DebugLoader_.prototype.bootstrap = function (e, t) {
              function o() {
                r && (goog.global.setTimeout(r, 0), (r = null));
              }
              var r = t;
              if (e.length) {
                t = [];
                for (var n = 0; n < e.length; n++) {
                  var i = this.getPathFromDeps_(e[n]);
                  if (!i) throw Error("Unregonized namespace: " + e[n]);
                  t.push(this.dependencies_[i]);
                }
                i = goog.require;
                var a = 0;
                for (n = 0; n < e.length; n++)
                  i(e[n]),
                    t[n].onLoad(function () {
                      ++a == e.length && o();
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
                  !1
                )
              ),
                this.loadDeps_();
            }),
            (goog.DebugLoader_.prototype.requested = function (e, t) {
              (e = this.getPathFromDeps_(e)) &&
                (t || this.areDepsLoaded_(this.dependencies_[e].requires)) &&
                (t = this.deferredCallbacks_[e]) &&
                (delete this.deferredCallbacks_[e], t());
            }),
            (goog.DebugLoader_.prototype.setDependencyFactory = function (e) {
              this.factory_ = e;
            }),
            (goog.DebugLoader_.prototype.load_ = function (e) {
              if (!this.getPathFromDeps_(e))
                throw (
                  ((e = "goog.require could not find: " + e),
                  goog.logToConsole_(e),
                  Error(e))
                );
              var t = this,
                o = [],
                r = function (e) {
                  var n = t.getPathFromDeps_(e);
                  if (!n) throw Error("Bad dependency path or symbol: " + e);
                  if (!t.written_[n]) {
                    for (
                      t.written_[n] = !0, e = t.dependencies_[n], n = 0;
                      n < e.requires.length;
                      n++
                    )
                      goog.isProvided_(e.requires[n]) || r(e.requires[n]);
                    o.push(e);
                  }
                };
              r(e),
                (e = !!this.depsToLoad_.length),
                (this.depsToLoad_ = this.depsToLoad_.concat(o)),
                this.paused_ || e || this.loadDeps_();
            }),
            (goog.DebugLoader_.prototype.loadDeps_ = function () {
              for (
                var e = this, t = this.paused_;
                this.depsToLoad_.length && !t;

              )
                !(function () {
                  var o = !1,
                    r = e.depsToLoad_.shift(),
                    n = !1;
                  e.loading_(r);
                  var i = {
                    pause: function () {
                      if (o)
                        throw Error(
                          "Cannot call pause after the call to load."
                        );
                      t = !0;
                    },
                    resume: function () {
                      o ? e.resume_() : (t = !1);
                    },
                    loaded: function () {
                      if (n) throw Error("Double call to loaded.");
                      (n = !0), e.loaded_(r);
                    },
                    pending: function () {
                      for (var t = [], o = 0; o < e.loadingDeps_.length; o++)
                        t.push(e.loadingDeps_[o]);
                      return t;
                    },
                    setModuleState: function (e) {
                      goog.moduleLoaderState_ = {
                        type: e,
                        moduleName: "",
                        declareLegacyNamespace: !1,
                      };
                    },
                    registerEs6ModuleExports: function (e, t, o) {
                      o &&
                        (goog.loadedModules_[o] = {
                          exports: t,
                          type: goog.ModuleType.ES6,
                          moduleId: o || "",
                        });
                    },
                    registerGoogModuleExports: function (e, t) {
                      goog.loadedModules_[e] = {
                        exports: t,
                        type: goog.ModuleType.GOOG,
                        moduleId: e,
                      };
                    },
                    clearModuleState: function () {
                      goog.moduleLoaderState_ = null;
                    },
                    defer: function (t) {
                      if (o)
                        throw Error(
                          "Cannot register with defer after the call to load."
                        );
                      e.defer_(r, t);
                    },
                    areDepsLoaded: function () {
                      return e.areDepsLoaded_(r.requires);
                    },
                  };
                  try {
                    r.load(i);
                  } finally {
                    o = !0;
                  }
                })();
              t && this.pause_();
            }),
            (goog.DebugLoader_.prototype.pause_ = function () {
              this.paused_ = !0;
            }),
            (goog.DebugLoader_.prototype.resume_ = function () {
              this.paused_ && ((this.paused_ = !1), this.loadDeps_());
            }),
            (goog.DebugLoader_.prototype.loading_ = function (e) {
              this.loadingDeps_.push(e);
            }),
            (goog.DebugLoader_.prototype.loaded_ = function (e) {
              for (var t = 0; t < this.loadingDeps_.length; t++)
                if (this.loadingDeps_[t] == e) {
                  this.loadingDeps_.splice(t, 1);
                  break;
                }
              for (t = 0; t < this.deferredQueue_.length; t++)
                if (this.deferredQueue_[t] == e.path) {
                  this.deferredQueue_.splice(t, 1);
                  break;
                }
              if (
                this.loadingDeps_.length == this.deferredQueue_.length &&
                !this.depsToLoad_.length
              )
                for (; this.deferredQueue_.length; )
                  this.requested(this.deferredQueue_.shift(), !0);
              e.loaded();
            }),
            (goog.DebugLoader_.prototype.areDepsLoaded_ = function (e) {
              for (var t = 0; t < e.length; t++) {
                var o = this.getPathFromDeps_(e[t]);
                if (
                  !o ||
                  (!(o in this.deferredCallbacks_) && !goog.isProvided_(e[t]))
                )
                  return !1;
              }
              return !0;
            }),
            (goog.DebugLoader_.prototype.getPathFromDeps_ = function (e) {
              return e in this.idToPath_
                ? this.idToPath_[e]
                : e in this.dependencies_
                ? e
                : null;
            }),
            (goog.DebugLoader_.prototype.defer_ = function (e, t) {
              (this.deferredCallbacks_[e.path] = t),
                this.deferredQueue_.push(e.path);
            }),
            (goog.LoadController = function () {}),
            (goog.LoadController.prototype.pause = function () {}),
            (goog.LoadController.prototype.resume = function () {}),
            (goog.LoadController.prototype.loaded = function () {}),
            (goog.LoadController.prototype.pending = function () {}),
            (goog.LoadController.prototype.registerEs6ModuleExports = function (
              e,
              t,
              o
            ) {}),
            (goog.LoadController.prototype.setModuleState = function (e) {}),
            (goog.LoadController.prototype.clearModuleState = function () {}),
            (goog.LoadController.prototype.defer = function (e) {}),
            (goog.LoadController.prototype.areDepsLoaded = function () {}),
            (goog.Dependency = function (e, t, o, r, n) {
              (this.path = e),
                (this.relativePath = t),
                (this.provides = o),
                (this.requires = r),
                (this.loadFlags = n),
                (this.loaded_ = !1),
                (this.loadCallbacks_ = []);
            }),
            (goog.Dependency.prototype.getPathName = function () {
              var e = this.path,
                t = e.indexOf("://");
              return (
                0 <= t &&
                  0 <= (t = (e = e.substring(t + 3)).indexOf("/")) &&
                  (e = e.substring(t + 1)),
                e
              );
            }),
            (goog.Dependency.prototype.onLoad = function (e) {
              this.loaded_ ? e() : this.loadCallbacks_.push(e);
            }),
            (goog.Dependency.prototype.loaded = function () {
              this.loaded_ = !0;
              var e = this.loadCallbacks_;
              this.loadCallbacks_ = [];
              for (var t = 0; t < e.length; t++) e[t]();
            }),
            (goog.Dependency.defer_ = !1),
            (goog.Dependency.callbackMap_ = {}),
            (goog.Dependency.registerCallback_ = function (e) {
              var t = Math.random().toString(32);
              return (goog.Dependency.callbackMap_[t] = e), t;
            }),
            (goog.Dependency.unregisterCallback_ = function (e) {
              delete goog.Dependency.callbackMap_[e];
            }),
            (goog.Dependency.callback_ = function (e, t) {
              if (!(e in goog.Dependency.callbackMap_))
                throw Error(
                  "Callback key " +
                    e +
                    " does not exist (was base.js loaded more than once?)."
                );
              for (
                var o = goog.Dependency.callbackMap_[e], r = [], n = 1;
                n < arguments.length;
                n++
              )
                r.push(arguments[n]);
              o.apply(void 0, r);
            }),
            (goog.Dependency.prototype.load = function (e) {
              if (goog.global.CLOSURE_IMPORT_SCRIPT)
                goog.global.CLOSURE_IMPORT_SCRIPT(this.path)
                  ? e.loaded()
                  : e.pause();
              else if (goog.inHtmlDocument_()) {
                var t = goog.global.document;
                if (
                  "complete" == t.readyState &&
                  !goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING
                ) {
                  if (/\bdeps.js$/.test(this.path)) return void e.loaded();
                  throw Error(
                    'Cannot write "' + this.path + '" after document load'
                  );
                }
                if (
                  !goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING &&
                  goog.isDocumentLoading_()
                ) {
                  var o = goog.Dependency.registerCallback_(function (t) {
                      (goog.DebugLoader_.IS_OLD_IE_ &&
                        "complete" != t.readyState) ||
                        (goog.Dependency.unregisterCallback_(o), e.loaded());
                    }),
                    r =
                      !goog.DebugLoader_.IS_OLD_IE_ && goog.getScriptNonce()
                        ? ' nonce="' + goog.getScriptNonce() + '"'
                        : "";
                  (r =
                    '<script src="' +
                    this.path +
                    '" ' +
                    (goog.DebugLoader_.IS_OLD_IE_
                      ? "onreadystatechange"
                      : "onload") +
                    "=\"goog.Dependency.callback_('" +
                    o +
                    '\', this)" type="text/javascript" ' +
                    (goog.Dependency.defer_ ? "defer" : "") +
                    r +
                    "></script>"),
                    t.write(
                      goog.TRUSTED_TYPES_POLICY_
                        ? goog.TRUSTED_TYPES_POLICY_.createHTML(r)
                        : r
                    );
                } else {
                  var n = t.createElement("script");
                  (n.defer = goog.Dependency.defer_),
                    (n.async = !1),
                    (n.type = "text/javascript"),
                    (r = goog.getScriptNonce()) && n.setAttribute("nonce", r),
                    goog.DebugLoader_.IS_OLD_IE_
                      ? (e.pause(),
                        (n.onreadystatechange = function () {
                          ("loaded" != n.readyState &&
                            "complete" != n.readyState) ||
                            (e.loaded(), e.resume());
                        }))
                      : (n.onload = function () {
                          (n.onload = null), e.loaded();
                        }),
                    (n.src = goog.TRUSTED_TYPES_POLICY_
                      ? goog.TRUSTED_TYPES_POLICY_.createScriptURL(this.path)
                      : this.path),
                    t.head.appendChild(n);
                }
              } else
                goog.logToConsole_(
                  "Cannot use default debug loader outside of HTML documents."
                ),
                  "deps.js" == this.relativePath
                    ? (goog.logToConsole_(
                        "Consider setting CLOSURE_IMPORT_SCRIPT before loading base.js, or setting CLOSURE_NO_DEPS to true."
                      ),
                      e.loaded())
                    : e.pause();
            }),
            (goog.Es6ModuleDependency = function (e, t, o, r, n) {
              goog.Dependency.call(this, e, t, o, r, n);
            }),
            goog.inherits(goog.Es6ModuleDependency, goog.Dependency),
            (goog.Es6ModuleDependency.prototype.load = function (e) {
              if (goog.global.CLOSURE_IMPORT_SCRIPT)
                goog.global.CLOSURE_IMPORT_SCRIPT(this.path)
                  ? e.loaded()
                  : e.pause();
              else if (goog.inHtmlDocument_()) {
                var t = goog.global.document,
                  o = this;
                if (goog.isDocumentLoading_()) {
                  var r = function (e, o) {
                    (e = o
                      ? '<script type="module" crossorigin>' + o + "</script>"
                      : '<script type="module" crossorigin src="' +
                        e +
                        '"></script>'),
                      t.write(
                        goog.TRUSTED_TYPES_POLICY_
                          ? goog.TRUSTED_TYPES_POLICY_.createHTML(e)
                          : e
                      );
                  };
                  goog.Dependency.defer_ = !0;
                } else
                  r = function (e, o) {
                    var r = t.createElement("script");
                    (r.defer = !0),
                      (r.async = !1),
                      (r.type = "module"),
                      r.setAttribute("crossorigin", !0);
                    var n = goog.getScriptNonce();
                    n && r.setAttribute("nonce", n),
                      o
                        ? (r.textContent = goog.TRUSTED_TYPES_POLICY_
                            ? goog.TRUSTED_TYPES_POLICY_.createScript(o)
                            : o)
                        : (r.src = goog.TRUSTED_TYPES_POLICY_
                            ? goog.TRUSTED_TYPES_POLICY_.createScriptURL(e)
                            : e),
                      t.head.appendChild(r);
                  };
                var n = goog.Dependency.registerCallback_(function () {
                  goog.Dependency.unregisterCallback_(n),
                    e.setModuleState(goog.ModuleType.ES6);
                });
                r(void 0, 'goog.Dependency.callback_("' + n + '")'),
                  r(this.path, void 0);
                var i = goog.Dependency.registerCallback_(function (t) {
                  goog.Dependency.unregisterCallback_(i),
                    e.registerEs6ModuleExports(
                      o.path,
                      t,
                      goog.moduleLoaderState_.moduleName
                    );
                });
                r(
                  void 0,
                  'import * as m from "' +
                    this.path +
                    '"; goog.Dependency.callback_("' +
                    i +
                    '", m)'
                );
                var a = goog.Dependency.registerCallback_(function () {
                  goog.Dependency.unregisterCallback_(a),
                    e.clearModuleState(),
                    e.loaded();
                });
                r(void 0, 'goog.Dependency.callback_("' + a + '")');
              } else
                goog.logToConsole_(
                  "Cannot use default debug loader outside of HTML documents."
                ),
                  e.pause();
            }),
            (goog.TransformedDependency = function (e, t, o, r, n) {
              goog.Dependency.call(this, e, t, o, r, n),
                (this.contents_ = null),
                (this.lazyFetch_ =
                  !goog.inHtmlDocument_() ||
                  !(
                    "noModule" in goog.global.document.createElement("script")
                  ));
            }),
            goog.inherits(goog.TransformedDependency, goog.Dependency),
            (goog.TransformedDependency.prototype.load = function (e) {
              function t() {
                (r.contents_ = goog.loadFileSync_(r.path)),
                  r.contents_ &&
                    ((r.contents_ = r.transform(r.contents_)),
                    r.contents_ &&
                      (r.contents_ += "\n//# sourceURL=" + r.path));
              }
              function o() {
                if ((r.lazyFetch_ && t(), r.contents_)) {
                  n && e.setModuleState(goog.ModuleType.ES6);
                  try {
                    var o = r.contents_;
                    if (((r.contents_ = null), goog.globalEval(o), n))
                      var i = goog.moduleLoaderState_.moduleName;
                  } finally {
                    n && e.clearModuleState();
                  }
                  n &&
                    goog.global.$jscomp.require.ensure(
                      [r.getPathName()],
                      function () {
                        e.registerEs6ModuleExports(
                          r.path,
                          goog.global.$jscomp.require(r.getPathName()),
                          i
                        );
                      }
                    ),
                    e.loaded();
                }
              }
              var r = this;
              if (goog.global.CLOSURE_IMPORT_SCRIPT)
                t(),
                  this.contents_ &&
                  goog.global.CLOSURE_IMPORT_SCRIPT("", this.contents_)
                    ? ((this.contents_ = null), e.loaded())
                    : e.pause();
              else {
                var n = this.loadFlags.module == goog.ModuleType.ES6;
                this.lazyFetch_ || t();
                var i = 1 < e.pending().length,
                  a = i && goog.DebugLoader_.IS_OLD_IE_;
                if (
                  ((i =
                    goog.Dependency.defer_ && (i || goog.isDocumentLoading_())),
                  a || i)
                )
                  e.defer(function () {
                    o();
                  });
                else {
                  var s = goog.global.document;
                  if (
                    ((a =
                      goog.inHtmlDocument_() && "ActiveXObject" in goog.global),
                    n &&
                      goog.inHtmlDocument_() &&
                      goog.isDocumentLoading_() &&
                      !a)
                  ) {
                    (goog.Dependency.defer_ = !0), e.pause();
                    var g = s.onreadystatechange;
                    s.onreadystatechange = function () {
                      "interactive" == s.readyState &&
                        ((s.onreadystatechange = g), o(), e.resume()),
                        goog.isFunction(g) && g.apply(void 0, arguments);
                    };
                  } else
                    !goog.DebugLoader_.IS_OLD_IE_ &&
                    goog.inHtmlDocument_() &&
                    goog.isDocumentLoading_()
                      ? (function () {
                          var e = goog.global.document,
                            t = goog.Dependency.registerCallback_(function () {
                              goog.Dependency.unregisterCallback_(t), o();
                            }),
                            r =
                              '<script type="text/javascript">' +
                              goog.protectScriptTag_(
                                'goog.Dependency.callback_("' + t + '");'
                              ) +
                              "</script>";
                          e.write(
                            goog.TRUSTED_TYPES_POLICY_
                              ? goog.TRUSTED_TYPES_POLICY_.createHTML(r)
                              : r
                          );
                        })()
                      : o();
                }
              }
            }),
            (goog.TransformedDependency.prototype.transform = function (e) {}),
            (goog.TranspiledDependency = function (e, t, o, r, n, i) {
              goog.TransformedDependency.call(this, e, t, o, r, n),
                (this.transpiler = i);
            }),
            goog.inherits(
              goog.TranspiledDependency,
              goog.TransformedDependency
            ),
            (goog.TranspiledDependency.prototype.transform = function (e) {
              return this.transpiler.transpile(e, this.getPathName());
            }),
            (goog.PreTranspiledEs6ModuleDependency = function (e, t, o, r, n) {
              goog.TransformedDependency.call(this, e, t, o, r, n);
            }),
            goog.inherits(
              goog.PreTranspiledEs6ModuleDependency,
              goog.TransformedDependency
            ),
            (goog.PreTranspiledEs6ModuleDependency.prototype.transform =
              function (e) {
                return e;
              }),
            (goog.GoogModuleDependency = function (e, t, o, r, n, i, a) {
              goog.TransformedDependency.call(this, e, t, o, r, n),
                (this.needsTranspile_ = i),
                (this.transpiler_ = a);
            }),
            goog.inherits(
              goog.GoogModuleDependency,
              goog.TransformedDependency
            ),
            (goog.GoogModuleDependency.prototype.transform = function (e) {
              return (
                this.needsTranspile_ &&
                  (e = this.transpiler_.transpile(e, this.getPathName())),
                goog.LOAD_MODULE_USING_EVAL && void 0 !== goog.global.JSON
                  ? "goog.loadModule(" +
                    goog.global.JSON.stringify(
                      e + "\n//# sourceURL=" + this.path + "\n"
                    ) +
                    ");"
                  : 'goog.loadModule(function(exports) {"use strict";' +
                    e +
                    "\n;return exports});\n//# sourceURL=" +
                    this.path +
                    "\n"
              );
            }),
            (goog.DebugLoader_.IS_OLD_IE_ = !(
              goog.global.atob ||
              !goog.global.document ||
              !goog.global.document.all
            )),
            (goog.DebugLoader_.prototype.addDependency = function (e, t, o, r) {
              (t = t || []), (e = e.replace(/\\/g, "/"));
              var n = goog.normalizePath_(goog.basePath + e);
              for (
                (r && "boolean" != typeof r) ||
                  (r = r ? { module: goog.ModuleType.GOOG } : {}),
                  o = this.factory_.createDependency(
                    n,
                    e,
                    t,
                    o,
                    r,
                    goog.transpiler_.needsTranspile(r.lang || "es3", r.module)
                  ),
                  this.dependencies_[n] = o,
                  o = 0;
                o < t.length;
                o++
              )
                this.idToPath_[t[o]] = n;
              this.idToPath_[e] = n;
            }),
            (goog.DependencyFactory = function (e) {
              this.transpiler = e;
            }),
            (goog.DependencyFactory.prototype.createDependency = function (
              e,
              t,
              o,
              r,
              n,
              i
            ) {
              return n.module == goog.ModuleType.GOOG
                ? new goog.GoogModuleDependency(
                    e,
                    t,
                    o,
                    r,
                    n,
                    i,
                    this.transpiler
                  )
                : i
                ? new goog.TranspiledDependency(e, t, o, r, n, this.transpiler)
                : n.module == goog.ModuleType.ES6
                ? "never" == goog.TRANSPILE && goog.ASSUME_ES_MODULES_TRANSPILED
                  ? new goog.PreTranspiledEs6ModuleDependency(e, t, o, r, n)
                  : new goog.Es6ModuleDependency(e, t, o, r, n)
                : new goog.Dependency(e, t, o, r, n);
            }),
            (goog.debugLoader_ = new goog.DebugLoader_()),
            (goog.loadClosureDeps = function () {
              goog.debugLoader_.loadClosureDeps();
            }),
            (goog.setDependencyFactory = function (e) {
              goog.debugLoader_.setDependencyFactory(e);
            }),
            goog.global.CLOSURE_NO_DEPS || goog.debugLoader_.loadClosureDeps(),
            (goog.bootstrap = function (e, t) {
              goog.debugLoader_.bootstrap(e, t);
            })),
          (goog.TRUSTED_TYPES_POLICY_NAME = ""),
          (goog.identity_ = function (e) {
            return e;
          }),
          (goog.createTrustedTypesPolicy = function (e) {
            var t = null,
              o = goog.global.trustedTypes || goog.global.TrustedTypes;
            if (!o || !o.createPolicy) return t;
            try {
              t = o.createPolicy(e, {
                createHTML: goog.identity_,
                createScript: goog.identity_,
                createScriptURL: goog.identity_,
                createURL: goog.identity_,
              });
            } catch (e) {
              goog.logToConsole_(e.message);
            }
            return t;
          }),
          (goog.TRUSTED_TYPES_POLICY_ = goog.TRUSTED_TYPES_POLICY_NAME
            ? goog.createTrustedTypesPolicy(
                goog.TRUSTED_TYPES_POLICY_NAME + "#base"
              )
            : null),
          (goog.object = {}),
          (goog.object.is = function (e, t) {
            return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
          }),
          (goog.object.forEach = function (e, t, o) {
            for (var r in e) t.call(o, e[r], r, e);
          }),
          (goog.object.filter = function (e, t, o) {
            var r,
              n = {};
            for (r in e) t.call(o, e[r], r, e) && (n[r] = e[r]);
            return n;
          }),
          (goog.object.map = function (e, t, o) {
            var r,
              n = {};
            for (r in e) n[r] = t.call(o, e[r], r, e);
            return n;
          }),
          (goog.object.some = function (e, t, o) {
            for (var r in e) if (t.call(o, e[r], r, e)) return !0;
            return !1;
          }),
          (goog.object.every = function (e, t, o) {
            for (var r in e) if (!t.call(o, e[r], r, e)) return !1;
            return !0;
          }),
          (goog.object.getCount = function (e) {
            var t,
              o = 0;
            for (t in e) o++;
            return o;
          }),
          (goog.object.getAnyKey = function (e) {
            for (var t in e) return t;
          }),
          (goog.object.getAnyValue = function (e) {
            for (var t in e) return e[t];
          }),
          (goog.object.contains = function (e, t) {
            return goog.object.containsValue(e, t);
          }),
          (goog.object.getValues = function (e) {
            var t,
              o = [],
              r = 0;
            for (t in e) o[r++] = e[t];
            return o;
          }),
          (goog.object.getKeys = function (e) {
            var t,
              o = [],
              r = 0;
            for (t in e) o[r++] = t;
            return o;
          }),
          (goog.object.getValueByKeys = function (e, t) {
            var o = goog.isArrayLike(t),
              r = o ? t : arguments;
            for (o = o ? 0 : 1; o < r.length; o++) {
              if (null == e) return;
              e = e[r[o]];
            }
            return e;
          }),
          (goog.object.containsKey = function (e, t) {
            return null !== e && t in e;
          }),
          (goog.object.containsValue = function (e, t) {
            for (var o in e) if (e[o] == t) return !0;
            return !1;
          }),
          (goog.object.findKey = function (e, t, o) {
            for (var r in e) if (t.call(o, e[r], r, e)) return r;
          }),
          (goog.object.findValue = function (e, t, o) {
            return (t = goog.object.findKey(e, t, o)) && e[t];
          }),
          (goog.object.isEmpty = function (e) {
            for (var t in e) return !1;
            return !0;
          }),
          (goog.object.clear = function (e) {
            for (var t in e) delete e[t];
          }),
          (goog.object.remove = function (e, t) {
            var o;
            return (o = t in e) && delete e[t], o;
          }),
          (goog.object.add = function (e, t, o) {
            if (null !== e && t in e)
              throw Error('The object already contains the key "' + t + '"');
            goog.object.set(e, t, o);
          }),
          (goog.object.get = function (e, t, o) {
            return null !== e && t in e ? e[t] : o;
          }),
          (goog.object.set = function (e, t, o) {
            e[t] = o;
          }),
          (goog.object.setIfUndefined = function (e, t, o) {
            return t in e ? e[t] : (e[t] = o);
          }),
          (goog.object.setWithReturnValueIfNotSet = function (e, t, o) {
            return t in e ? e[t] : ((o = o()), (e[t] = o));
          }),
          (goog.object.equals = function (e, t) {
            for (var o in e) if (!(o in t) || e[o] !== t[o]) return !1;
            for (var r in t) if (!(r in e)) return !1;
            return !0;
          }),
          (goog.object.clone = function (e) {
            var t,
              o = {};
            for (t in e) o[t] = e[t];
            return o;
          }),
          (goog.object.unsafeClone = function (e) {
            var t = goog.typeOf(e);
            if ("object" == t || "array" == t) {
              if (goog.isFunction(e.clone)) return e.clone();
              for (var o in ((t = "array" == t ? [] : {}), e))
                t[o] = goog.object.unsafeClone(e[o]);
              return t;
            }
            return e;
          }),
          (goog.object.transpose = function (e) {
            var t,
              o = {};
            for (t in e) o[e[t]] = t;
            return o;
          }),
          (goog.object.PROTOTYPE_FIELDS_ =
            "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(
              " "
            )),
          (goog.object.extend = function (e, t) {
            for (var o, r, n = 1; n < arguments.length; n++) {
              for (o in (r = arguments[n])) e[o] = r[o];
              for (var i = 0; i < goog.object.PROTOTYPE_FIELDS_.length; i++)
                (o = goog.object.PROTOTYPE_FIELDS_[i]),
                  Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
            }
          }),
          (goog.object.create = function (e) {
            var t = arguments.length;
            if (1 == t && Array.isArray(arguments[0]))
              return goog.object.create.apply(null, arguments[0]);
            if (t % 2) throw Error("Uneven number of arguments");
            for (var o = {}, r = 0; r < t; r += 2)
              o[arguments[r]] = arguments[r + 1];
            return o;
          }),
          (goog.object.createSet = function (e) {
            var t = arguments.length;
            if (1 == t && Array.isArray(arguments[0]))
              return goog.object.createSet.apply(null, arguments[0]);
            for (var o = {}, r = 0; r < t; r++) o[arguments[r]] = !0;
            return o;
          }),
          (goog.object.createImmutableView = function (e) {
            var t = e;
            return (
              Object.isFrozen &&
                !Object.isFrozen(e) &&
                ((t = Object.create(e)), Object.freeze(t)),
              t
            );
          }),
          (goog.object.isImmutableView = function (e) {
            return !!Object.isFrozen && Object.isFrozen(e);
          }),
          (goog.object.getAllPropertyNames = function (e, t, o) {
            if (!e) return [];
            if (!Object.getOwnPropertyNames || !Object.getPrototypeOf)
              return goog.object.getKeys(e);
            for (
              var r = {};
              e &&
              (e !== Object.prototype || t) &&
              (e !== Function.prototype || o);

            ) {
              for (
                var n = Object.getOwnPropertyNames(e), i = 0;
                i < n.length;
                i++
              )
                r[n[i]] = !0;
              e = Object.getPrototypeOf(e);
            }
            return goog.object.getKeys(r);
          }),
          (goog.object.getSuperClass = function (e) {
            return (e = Object.getPrototypeOf(e.prototype)) && e.constructor;
          }),
          (goog.debug = {}),
          (goog.debug.Error = function (e) {
            if (Error.captureStackTrace)
              Error.captureStackTrace(this, goog.debug.Error);
            else {
              var t = Error().stack;
              t && (this.stack = t);
            }
            e && (this.message = String(e)), (this.reportErrorToServer = !0);
          }),
          goog.inherits(goog.debug.Error, Error),
          (goog.debug.Error.prototype.name = "CustomError"),
          (goog.dom = {}),
          (goog.dom.NodeType = {
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
          }),
          (goog.asserts = {}),
          (goog.asserts.ENABLE_ASSERTS = goog.DEBUG),
          (goog.asserts.AssertionError = function (e, t) {
            goog.debug.Error.call(this, goog.asserts.subs_(e, t)),
              (this.messagePattern = e);
          }),
          goog.inherits(goog.asserts.AssertionError, goog.debug.Error),
          (goog.asserts.AssertionError.prototype.name = "AssertionError"),
          (goog.asserts.DEFAULT_ERROR_HANDLER = function (e) {
            throw e;
          }),
          (goog.asserts.errorHandler_ = goog.asserts.DEFAULT_ERROR_HANDLER),
          (goog.asserts.subs_ = function (e, t) {
            for (
              var o = "", r = (e = e.split("%s")).length - 1, n = 0;
              n < r;
              n++
            )
              o += e[n] + (n < t.length ? t[n] : "%s");
            return o + e[r];
          }),
          (goog.asserts.doAssertFailure_ = function (e, t, o, r) {
            var n = "Assertion failed";
            if (o) {
              n += ": " + o;
              var i = r;
            } else e && ((n += ": " + e), (i = t));
            (e = new goog.asserts.AssertionError("" + n, i || [])),
              goog.asserts.errorHandler_(e);
          }),
          (goog.asserts.setErrorHandler = function (e) {
            goog.asserts.ENABLE_ASSERTS && (goog.asserts.errorHandler_ = e);
          }),
          (goog.asserts.assert = function (e, t, o) {
            return (
              goog.asserts.ENABLE_ASSERTS &&
                !e &&
                goog.asserts.doAssertFailure_(
                  "",
                  null,
                  t,
                  Array.prototype.slice.call(arguments, 2)
                ),
              e
            );
          }),
          (goog.asserts.assertExists = function (e, t, o) {
            return (
              goog.asserts.ENABLE_ASSERTS &&
                null == e &&
                goog.asserts.doAssertFailure_(
                  "Expected to exist: %s.",
                  [e],
                  t,
                  Array.prototype.slice.call(arguments, 2)
                ),
              e
            );
          }),
          (goog.asserts.fail = function (e, t) {
            goog.asserts.ENABLE_ASSERTS &&
              goog.asserts.errorHandler_(
                new goog.asserts.AssertionError(
                  "Failure" + (e ? ": " + e : ""),
                  Array.prototype.slice.call(arguments, 1)
                )
              );
          }),
          (goog.asserts.assertNumber = function (e, t, o) {
            return (
              goog.asserts.ENABLE_ASSERTS &&
                "number" != typeof e &&
                goog.asserts.doAssertFailure_(
                  "Expected number but got %s: %s.",
                  [goog.typeOf(e), e],
                  t,
                  Array.prototype.slice.call(arguments, 2)
                ),
              e
            );
          }),
          (goog.asserts.assertString = function (e, t, o) {
            return (
              goog.asserts.ENABLE_ASSERTS &&
                "string" != typeof e &&
                goog.asserts.doAssertFailure_(
                  "Expected string but got %s: %s.",
                  [goog.typeOf(e), e],
                  t,
                  Array.prototype.slice.call(arguments, 2)
                ),
              e
            );
          }),
          (goog.asserts.assertFunction = function (e, t, o) {
            return (
              goog.asserts.ENABLE_ASSERTS &&
                !goog.isFunction(e) &&
                goog.asserts.doAssertFailure_(
                  "Expected function but got %s: %s.",
                  [goog.typeOf(e), e],
                  t,
                  Array.prototype.slice.call(arguments, 2)
                ),
              e
            );
          }),
          (goog.asserts.assertObject = function (e, t, o) {
            return (
              goog.asserts.ENABLE_ASSERTS &&
                !goog.isObject(e) &&
                goog.asserts.doAssertFailure_(
                  "Expected object but got %s: %s.",
                  [goog.typeOf(e), e],
                  t,
                  Array.prototype.slice.call(arguments, 2)
                ),
              e
            );
          }),
          (goog.asserts.assertArray = function (e, t, o) {
            return (
              goog.asserts.ENABLE_ASSERTS &&
                !Array.isArray(e) &&
                goog.asserts.doAssertFailure_(
                  "Expected array but got %s: %s.",
                  [goog.typeOf(e), e],
                  t,
                  Array.prototype.slice.call(arguments, 2)
                ),
              e
            );
          }),
          (goog.asserts.assertBoolean = function (e, t, o) {
            return (
              goog.asserts.ENABLE_ASSERTS &&
                "boolean" != typeof e &&
                goog.asserts.doAssertFailure_(
                  "Expected boolean but got %s: %s.",
                  [goog.typeOf(e), e],
                  t,
                  Array.prototype.slice.call(arguments, 2)
                ),
              e
            );
          }),
          (goog.asserts.assertElement = function (e, t, o) {
            return (
              !goog.asserts.ENABLE_ASSERTS ||
                (goog.isObject(e) && e.nodeType == goog.dom.NodeType.ELEMENT) ||
                goog.asserts.doAssertFailure_(
                  "Expected Element but got %s: %s.",
                  [goog.typeOf(e), e],
                  t,
                  Array.prototype.slice.call(arguments, 2)
                ),
              e
            );
          }),
          (goog.asserts.assertInstanceof = function (e, t, o, r) {
            return (
              !goog.asserts.ENABLE_ASSERTS ||
                e instanceof t ||
                goog.asserts.doAssertFailure_(
                  "Expected instanceof %s but got %s.",
                  [goog.asserts.getType_(t), goog.asserts.getType_(e)],
                  o,
                  Array.prototype.slice.call(arguments, 3)
                ),
              e
            );
          }),
          (goog.asserts.assertFinite = function (e, t, o) {
            return (
              !goog.asserts.ENABLE_ASSERTS ||
                ("number" == typeof e && isFinite(e)) ||
                goog.asserts.doAssertFailure_(
                  "Expected %s to be a finite number but it is not.",
                  [e],
                  t,
                  Array.prototype.slice.call(arguments, 2)
                ),
              e
            );
          }),
          (goog.asserts.assertObjectPrototypeIsIntact = function () {
            for (var e in Object.prototype)
              goog.asserts.fail(
                e + " should not be enumerable in Object.prototype."
              );
          }),
          (goog.asserts.getType_ = function (e) {
            return e instanceof Function
              ? e.displayName || e.name || "unknown type name"
              : e instanceof Object
              ? e.constructor.displayName ||
                e.constructor.name ||
                Object.prototype.toString.call(e)
              : null === e
              ? "null"
              : typeof e;
          });
        var jspb = {
          BinaryConstants: {},
          ConstBinaryMessage: function () {},
          BinaryMessage: function () {},
        };
        (jspb.BinaryConstants.FieldType = {
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
        }),
          (jspb.BinaryConstants.WireType = {
            INVALID: -1,
            VARINT: 0,
            FIXED64: 1,
            DELIMITED: 2,
            START_GROUP: 3,
            END_GROUP: 4,
            FIXED32: 5,
          }),
          (jspb.BinaryConstants.FieldTypeToWireType = function (e) {
            var t = jspb.BinaryConstants.FieldType,
              o = jspb.BinaryConstants.WireType;
            switch (e) {
              case t.INT32:
              case t.INT64:
              case t.UINT32:
              case t.UINT64:
              case t.SINT32:
              case t.SINT64:
              case t.BOOL:
              case t.ENUM:
              case t.VHASH64:
                return o.VARINT;
              case t.DOUBLE:
              case t.FIXED64:
              case t.SFIXED64:
              case t.FHASH64:
                return o.FIXED64;
              case t.STRING:
              case t.MESSAGE:
              case t.BYTES:
                return o.DELIMITED;
              case t.FLOAT:
              case t.FIXED32:
              case t.SFIXED32:
                return o.FIXED32;
              default:
                return o.INVALID;
            }
          }),
          (jspb.BinaryConstants.INVALID_FIELD_NUMBER = -1),
          (jspb.BinaryConstants.FLOAT32_EPS = 1401298464324817e-60),
          (jspb.BinaryConstants.FLOAT32_MIN = 11754943508222875e-54),
          (jspb.BinaryConstants.FLOAT32_MAX = 34028234663852886e22),
          (jspb.BinaryConstants.FLOAT64_EPS = 5e-324),
          (jspb.BinaryConstants.FLOAT64_MIN = 22250738585072014e-324),
          (jspb.BinaryConstants.FLOAT64_MAX = 17976931348623157e292),
          (jspb.BinaryConstants.TWO_TO_20 = 1048576),
          (jspb.BinaryConstants.TWO_TO_23 = 8388608),
          (jspb.BinaryConstants.TWO_TO_31 = 2147483648),
          (jspb.BinaryConstants.TWO_TO_32 = 4294967296),
          (jspb.BinaryConstants.TWO_TO_52 = 4503599627370496),
          (jspb.BinaryConstants.TWO_TO_63 = 0x8000000000000000),
          (jspb.BinaryConstants.TWO_TO_64 = 0x10000000000000000),
          (jspb.BinaryConstants.ZERO_HASH = "\0\0\0\0\0\0\0\0"),
          (goog.array = {}),
          (goog.NATIVE_ARRAY_PROTOTYPES = goog.TRUSTED_SITE),
          (goog.array.ASSUME_NATIVE_FUNCTIONS = 2012 < goog.FEATURESET_YEAR),
          (goog.array.peek = function (e) {
            return e[e.length - 1];
          }),
          (goog.array.last = goog.array.peek),
          (goog.array.indexOf =
            goog.NATIVE_ARRAY_PROTOTYPES &&
            (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.indexOf)
              ? function (e, t, o) {
                  return (
                    goog.asserts.assert(null != e.length),
                    Array.prototype.indexOf.call(e, t, o)
                  );
                }
              : function (e, t, o) {
                  if (
                    ((o =
                      null == o ? 0 : 0 > o ? Math.max(0, e.length + o) : o),
                    "string" == typeof e)
                  )
                    return "string" != typeof t || 1 != t.length
                      ? -1
                      : e.indexOf(t, o);
                  for (; o < e.length; o++) if (o in e && e[o] === t) return o;
                  return -1;
                }),
          (goog.array.lastIndexOf =
            goog.NATIVE_ARRAY_PROTOTYPES &&
            (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.lastIndexOf)
              ? function (e, t, o) {
                  return (
                    goog.asserts.assert(null != e.length),
                    Array.prototype.lastIndexOf.call(
                      e,
                      t,
                      null == o ? e.length - 1 : o
                    )
                  );
                }
              : function (e, t, o) {
                  if (
                    (0 > (o = null == o ? e.length - 1 : o) &&
                      (o = Math.max(0, e.length + o)),
                    "string" == typeof e)
                  )
                    return "string" != typeof t || 1 != t.length
                      ? -1
                      : e.lastIndexOf(t, o);
                  for (; 0 <= o; o--) if (o in e && e[o] === t) return o;
                  return -1;
                }),
          (goog.array.forEach =
            goog.NATIVE_ARRAY_PROTOTYPES &&
            (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.forEach)
              ? function (e, t, o) {
                  goog.asserts.assert(null != e.length),
                    Array.prototype.forEach.call(e, t, o);
                }
              : function (e, t, o) {
                  for (
                    var r = e.length,
                      n = "string" == typeof e ? e.split("") : e,
                      i = 0;
                    i < r;
                    i++
                  )
                    i in n && t.call(o, n[i], i, e);
                }),
          (goog.array.forEachRight = function (e, t, o) {
            var r = e.length,
              n = "string" == typeof e ? e.split("") : e;
            for (--r; 0 <= r; --r) r in n && t.call(o, n[r], r, e);
          }),
          (goog.array.filter =
            goog.NATIVE_ARRAY_PROTOTYPES &&
            (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.filter)
              ? function (e, t, o) {
                  return (
                    goog.asserts.assert(null != e.length),
                    Array.prototype.filter.call(e, t, o)
                  );
                }
              : function (e, t, o) {
                  for (
                    var r = e.length,
                      n = [],
                      i = 0,
                      a = "string" == typeof e ? e.split("") : e,
                      s = 0;
                    s < r;
                    s++
                  )
                    if (s in a) {
                      var g = a[s];
                      t.call(o, g, s, e) && (n[i++] = g);
                    }
                  return n;
                }),
          (goog.array.map =
            goog.NATIVE_ARRAY_PROTOTYPES &&
            (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.map)
              ? function (e, t, o) {
                  return (
                    goog.asserts.assert(null != e.length),
                    Array.prototype.map.call(e, t, o)
                  );
                }
              : function (e, t, o) {
                  for (
                    var r = e.length,
                      n = Array(r),
                      i = "string" == typeof e ? e.split("") : e,
                      a = 0;
                    a < r;
                    a++
                  )
                    a in i && (n[a] = t.call(o, i[a], a, e));
                  return n;
                }),
          (goog.array.reduce =
            goog.NATIVE_ARRAY_PROTOTYPES &&
            (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.reduce)
              ? function (e, t, o, r) {
                  return (
                    goog.asserts.assert(null != e.length),
                    r && (t = goog.bind(t, r)),
                    Array.prototype.reduce.call(e, t, o)
                  );
                }
              : function (e, t, o, r) {
                  var n = o;
                  return (
                    goog.array.forEach(e, function (o, i) {
                      n = t.call(r, n, o, i, e);
                    }),
                    n
                  );
                }),
          (goog.array.reduceRight =
            goog.NATIVE_ARRAY_PROTOTYPES &&
            (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.reduceRight)
              ? function (e, t, o, r) {
                  return (
                    goog.asserts.assert(null != e.length),
                    goog.asserts.assert(null != t),
                    r && (t = goog.bind(t, r)),
                    Array.prototype.reduceRight.call(e, t, o)
                  );
                }
              : function (e, t, o, r) {
                  var n = o;
                  return (
                    goog.array.forEachRight(e, function (o, i) {
                      n = t.call(r, n, o, i, e);
                    }),
                    n
                  );
                }),
          (goog.array.some =
            goog.NATIVE_ARRAY_PROTOTYPES &&
            (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.some)
              ? function (e, t, o) {
                  return (
                    goog.asserts.assert(null != e.length),
                    Array.prototype.some.call(e, t, o)
                  );
                }
              : function (e, t, o) {
                  for (
                    var r = e.length,
                      n = "string" == typeof e ? e.split("") : e,
                      i = 0;
                    i < r;
                    i++
                  )
                    if (i in n && t.call(o, n[i], i, e)) return !0;
                  return !1;
                }),
          (goog.array.every =
            goog.NATIVE_ARRAY_PROTOTYPES &&
            (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.every)
              ? function (e, t, o) {
                  return (
                    goog.asserts.assert(null != e.length),
                    Array.prototype.every.call(e, t, o)
                  );
                }
              : function (e, t, o) {
                  for (
                    var r = e.length,
                      n = "string" == typeof e ? e.split("") : e,
                      i = 0;
                    i < r;
                    i++
                  )
                    if (i in n && !t.call(o, n[i], i, e)) return !1;
                  return !0;
                }),
          (goog.array.count = function (e, t, o) {
            var r = 0;
            return (
              goog.array.forEach(
                e,
                function (e, n, i) {
                  t.call(o, e, n, i) && ++r;
                },
                o
              ),
              r
            );
          }),
          (goog.array.find = function (e, t, o) {
            return 0 > (t = goog.array.findIndex(e, t, o))
              ? null
              : "string" == typeof e
              ? e.charAt(t)
              : e[t];
          }),
          (goog.array.findIndex = function (e, t, o) {
            for (
              var r = e.length,
                n = "string" == typeof e ? e.split("") : e,
                i = 0;
              i < r;
              i++
            )
              if (i in n && t.call(o, n[i], i, e)) return i;
            return -1;
          }),
          (goog.array.findRight = function (e, t, o) {
            return 0 > (t = goog.array.findIndexRight(e, t, o))
              ? null
              : "string" == typeof e
              ? e.charAt(t)
              : e[t];
          }),
          (goog.array.findIndexRight = function (e, t, o) {
            var r = e.length,
              n = "string" == typeof e ? e.split("") : e;
            for (--r; 0 <= r; r--)
              if (r in n && t.call(o, n[r], r, e)) return r;
            return -1;
          }),
          (goog.array.contains = function (e, t) {
            return 0 <= goog.array.indexOf(e, t);
          }),
          (goog.array.isEmpty = function (e) {
            return 0 == e.length;
          }),
          (goog.array.clear = function (e) {
            if (!Array.isArray(e))
              for (var t = e.length - 1; 0 <= t; t--) delete e[t];
            e.length = 0;
          }),
          (goog.array.insert = function (e, t) {
            goog.array.contains(e, t) || e.push(t);
          }),
          (goog.array.insertAt = function (e, t, o) {
            goog.array.splice(e, o, 0, t);
          }),
          (goog.array.insertArrayAt = function (e, t, o) {
            goog.partial(goog.array.splice, e, o, 0).apply(null, t);
          }),
          (goog.array.insertBefore = function (e, t, o) {
            var r;
            2 == arguments.length || 0 > (r = goog.array.indexOf(e, o))
              ? e.push(t)
              : goog.array.insertAt(e, t, r);
          }),
          (goog.array.remove = function (e, t) {
            var o;
            return (
              (o = 0 <= (t = goog.array.indexOf(e, t))) &&
                goog.array.removeAt(e, t),
              o
            );
          }),
          (goog.array.removeLast = function (e, t) {
            return (
              0 <= (t = goog.array.lastIndexOf(e, t)) &&
              (goog.array.removeAt(e, t), !0)
            );
          }),
          (goog.array.removeAt = function (e, t) {
            return (
              goog.asserts.assert(null != e.length),
              1 == Array.prototype.splice.call(e, t, 1).length
            );
          }),
          (goog.array.removeIf = function (e, t, o) {
            return (
              0 <= (t = goog.array.findIndex(e, t, o)) &&
              (goog.array.removeAt(e, t), !0)
            );
          }),
          (goog.array.removeAllIf = function (e, t, o) {
            var r = 0;
            return (
              goog.array.forEachRight(e, function (n, i) {
                t.call(o, n, i, e) && goog.array.removeAt(e, i) && r++;
              }),
              r
            );
          }),
          (goog.array.concat = function (e) {
            return Array.prototype.concat.apply([], arguments);
          }),
          (goog.array.join = function (e) {
            return Array.prototype.concat.apply([], arguments);
          }),
          (goog.array.toArray = function (e) {
            var t = e.length;
            if (0 < t) {
              for (var o = Array(t), r = 0; r < t; r++) o[r] = e[r];
              return o;
            }
            return [];
          }),
          (goog.array.clone = goog.array.toArray),
          (goog.array.extend = function (e, t) {
            for (var o = 1; o < arguments.length; o++) {
              var r = arguments[o];
              if (goog.isArrayLike(r)) {
                var n = e.length || 0,
                  i = r.length || 0;
                e.length = n + i;
                for (var a = 0; a < i; a++) e[n + a] = r[a];
              } else e.push(r);
            }
          }),
          (goog.array.splice = function (e, t, o, r) {
            return (
              goog.asserts.assert(null != e.length),
              Array.prototype.splice.apply(e, goog.array.slice(arguments, 1))
            );
          }),
          (goog.array.slice = function (e, t, o) {
            return (
              goog.asserts.assert(null != e.length),
              2 >= arguments.length
                ? Array.prototype.slice.call(e, t)
                : Array.prototype.slice.call(e, t, o)
            );
          }),
          (goog.array.removeDuplicates = function (e, t, o) {
            t = t || e;
            var r = function (e) {
              return goog.isObject(e)
                ? "o" + goog.getUid(e)
                : (typeof e).charAt(0) + e;
            };
            (o = o || r), (r = {});
            for (var n = 0, i = 0; i < e.length; ) {
              var a = e[i++],
                s = o(a);
              Object.prototype.hasOwnProperty.call(r, s) ||
                ((r[s] = !0), (t[n++] = a));
            }
            t.length = n;
          }),
          (goog.array.binarySearch = function (e, t, o) {
            return goog.array.binarySearch_(
              e,
              o || goog.array.defaultCompare,
              !1,
              t
            );
          }),
          (goog.array.binarySelect = function (e, t, o) {
            return goog.array.binarySearch_(e, t, !0, void 0, o);
          }),
          (goog.array.binarySearch_ = function (e, t, o, r, n) {
            for (var i, a = 0, s = e.length; a < s; ) {
              var g = a + ((s - a) >>> 1),
                l = o ? t.call(n, e[g], g, e) : t(r, e[g]);
              0 < l ? (a = g + 1) : ((s = g), (i = !l));
            }
            return i ? a : -a - 1;
          }),
          (goog.array.sort = function (e, t) {
            e.sort(t || goog.array.defaultCompare);
          }),
          (goog.array.stableSort = function (e, t) {
            for (var o = Array(e.length), r = 0; r < e.length; r++)
              o[r] = { index: r, value: e[r] };
            var n = t || goog.array.defaultCompare;
            for (
              goog.array.sort(o, function (e, t) {
                return n(e.value, t.value) || e.index - t.index;
              }),
                r = 0;
              r < e.length;
              r++
            )
              e[r] = o[r].value;
          }),
          (goog.array.sortByKey = function (e, t, o) {
            var r = o || goog.array.defaultCompare;
            goog.array.sort(e, function (e, o) {
              return r(t(e), t(o));
            });
          }),
          (goog.array.sortObjectsByKey = function (e, t, o) {
            goog.array.sortByKey(
              e,
              function (e) {
                return e[t];
              },
              o
            );
          }),
          (goog.array.isSorted = function (e, t, o) {
            t = t || goog.array.defaultCompare;
            for (var r = 1; r < e.length; r++) {
              var n = t(e[r - 1], e[r]);
              if (0 < n || (0 == n && o)) return !1;
            }
            return !0;
          }),
          (goog.array.equals = function (e, t, o) {
            if (
              !goog.isArrayLike(e) ||
              !goog.isArrayLike(t) ||
              e.length != t.length
            )
              return !1;
            var r = e.length;
            o = o || goog.array.defaultCompareEquality;
            for (var n = 0; n < r; n++) if (!o(e[n], t[n])) return !1;
            return !0;
          }),
          (goog.array.compare3 = function (e, t, o) {
            o = o || goog.array.defaultCompare;
            for (var r = Math.min(e.length, t.length), n = 0; n < r; n++) {
              var i = o(e[n], t[n]);
              if (0 != i) return i;
            }
            return goog.array.defaultCompare(e.length, t.length);
          }),
          (goog.array.defaultCompare = function (e, t) {
            return e > t ? 1 : e < t ? -1 : 0;
          }),
          (goog.array.inverseDefaultCompare = function (e, t) {
            return -goog.array.defaultCompare(e, t);
          }),
          (goog.array.defaultCompareEquality = function (e, t) {
            return e === t;
          }),
          (goog.array.binaryInsert = function (e, t, o) {
            return (
              0 > (o = goog.array.binarySearch(e, t, o)) &&
              (goog.array.insertAt(e, t, -(o + 1)), !0)
            );
          }),
          (goog.array.binaryRemove = function (e, t, o) {
            return (
              0 <= (t = goog.array.binarySearch(e, t, o)) &&
              goog.array.removeAt(e, t)
            );
          }),
          (goog.array.bucket = function (e, t, o) {
            for (var r = {}, n = 0; n < e.length; n++) {
              var i = e[n],
                a = t.call(o, i, n, e);
              void 0 !== a && (r[a] || (r[a] = [])).push(i);
            }
            return r;
          }),
          (goog.array.toObject = function (e, t, o) {
            var r = {};
            return (
              goog.array.forEach(e, function (n, i) {
                r[t.call(o, n, i, e)] = n;
              }),
              r
            );
          }),
          (goog.array.range = function (e, t, o) {
            var r = [],
              n = 0,
              i = e;
            if (
              (void 0 !== t && ((n = e), (i = t)), 0 > (o = o || 1) * (i - n))
            )
              return [];
            if (0 < o) for (e = n; e < i; e += o) r.push(e);
            else for (e = n; e > i; e += o) r.push(e);
            return r;
          }),
          (goog.array.repeat = function (e, t) {
            for (var o = [], r = 0; r < t; r++) o[r] = e;
            return o;
          }),
          (goog.array.flatten = function (e) {
            for (var t = [], o = 0; o < arguments.length; o++) {
              var r = arguments[o];
              if (Array.isArray(r))
                for (var n = 0; n < r.length; n += 8192) {
                  var i = goog.array.slice(r, n, n + 8192);
                  i = goog.array.flatten.apply(null, i);
                  for (var a = 0; a < i.length; a++) t.push(i[a]);
                }
              else t.push(r);
            }
            return t;
          }),
          (goog.array.rotate = function (e, t) {
            return (
              goog.asserts.assert(null != e.length),
              e.length &&
                (0 < (t %= e.length)
                  ? Array.prototype.unshift.apply(e, e.splice(-t, t))
                  : 0 > t && Array.prototype.push.apply(e, e.splice(0, -t))),
              e
            );
          }),
          (goog.array.moveItem = function (e, t, o) {
            goog.asserts.assert(0 <= t && t < e.length),
              goog.asserts.assert(0 <= o && o < e.length),
              (t = Array.prototype.splice.call(e, t, 1)),
              Array.prototype.splice.call(e, o, 0, t[0]);
          }),
          (goog.array.zip = function (e) {
            if (!arguments.length) return [];
            for (
              var t = [], o = arguments[0].length, r = 1;
              r < arguments.length;
              r++
            )
              arguments[r].length < o && (o = arguments[r].length);
            for (r = 0; r < o; r++) {
              for (var n = [], i = 0; i < arguments.length; i++)
                n.push(arguments[i][r]);
              t.push(n);
            }
            return t;
          }),
          (goog.array.shuffle = function (e, t) {
            t = t || Math.random;
            for (var o = e.length - 1; 0 < o; o--) {
              var r = Math.floor(t() * (o + 1)),
                n = e[o];
              (e[o] = e[r]), (e[r] = n);
            }
          }),
          (goog.array.copyByIndex = function (e, t) {
            var o = [];
            return (
              goog.array.forEach(t, function (t) {
                o.push(e[t]);
              }),
              o
            );
          }),
          (goog.array.concatMap = function (e, t, o) {
            return goog.array.concat.apply([], goog.array.map(e, t, o));
          }),
          (goog.crypt = {}),
          (goog.crypt.stringToByteArray = function (e) {
            for (var t = [], o = 0, r = 0; r < e.length; r++) {
              var n = e.charCodeAt(r);
              255 < n && ((t[o++] = 255 & n), (n >>= 8)), (t[o++] = n);
            }
            return t;
          }),
          (goog.crypt.byteArrayToString = function (e) {
            if (8192 >= e.length) return String.fromCharCode.apply(null, e);
            for (var t = "", o = 0; o < e.length; o += 8192) {
              var r = goog.array.slice(e, o, o + 8192);
              t += String.fromCharCode.apply(null, r);
            }
            return t;
          }),
          (goog.crypt.byteArrayToHex = function (e, t) {
            return goog.array
              .map(e, function (e) {
                return 1 < (e = e.toString(16)).length ? e : "0" + e;
              })
              .join(t || "");
          }),
          (goog.crypt.hexToByteArray = function (e) {
            goog.asserts.assert(
              0 == e.length % 2,
              "Key string length must be multiple of 2"
            );
            for (var t = [], o = 0; o < e.length; o += 2)
              t.push(parseInt(e.substring(o, o + 2), 16));
            return t;
          }),
          (goog.crypt.stringToUtf8ByteArray = function (e) {
            for (var t = [], o = 0, r = 0; r < e.length; r++) {
              var n = e.charCodeAt(r);
              128 > n
                ? (t[o++] = n)
                : (2048 > n
                    ? (t[o++] = (n >> 6) | 192)
                    : (55296 == (64512 & n) &&
                      r + 1 < e.length &&
                      56320 == (64512 & e.charCodeAt(r + 1))
                        ? ((n =
                            65536 +
                            ((1023 & n) << 10) +
                            (1023 & e.charCodeAt(++r))),
                          (t[o++] = (n >> 18) | 240),
                          (t[o++] = ((n >> 12) & 63) | 128))
                        : (t[o++] = (n >> 12) | 224),
                      (t[o++] = ((n >> 6) & 63) | 128)),
                  (t[o++] = (63 & n) | 128));
            }
            return t;
          }),
          (goog.crypt.utf8ByteArrayToString = function (e) {
            for (var t = [], o = 0, r = 0; o < e.length; ) {
              var n = e[o++];
              if (128 > n) t[r++] = String.fromCharCode(n);
              else if (191 < n && 224 > n) {
                var i = e[o++];
                t[r++] = String.fromCharCode(((31 & n) << 6) | (63 & i));
              } else if (239 < n && 365 > n) {
                i = e[o++];
                var a = e[o++];
                (n =
                  (((7 & n) << 18) |
                    ((63 & i) << 12) |
                    ((63 & a) << 6) |
                    (63 & e[o++])) -
                  65536),
                  (t[r++] = String.fromCharCode(55296 + (n >> 10))),
                  (t[r++] = String.fromCharCode(56320 + (1023 & n)));
              } else
                (i = e[o++]),
                  (a = e[o++]),
                  (t[r++] = String.fromCharCode(
                    ((15 & n) << 12) | ((63 & i) << 6) | (63 & a)
                  ));
            }
            return t.join("");
          }),
          (goog.crypt.xorByteArray = function (e, t) {
            goog.asserts.assert(
              e.length == t.length,
              "XOR array lengths must match"
            );
            for (var o = [], r = 0; r < e.length; r++) o.push(e[r] ^ t[r]);
            return o;
          }),
          (goog.dom.asserts = {}),
          (goog.dom.asserts.assertIsLocation = function (e) {
            if (goog.asserts.ENABLE_ASSERTS) {
              var t = goog.dom.asserts.getWindow_(e);
              t &&
                (!e ||
                  (!(e instanceof t.Location) && e instanceof t.Element)) &&
                goog.asserts.fail(
                  "Argument is not a Location (or a non-Element mock); got: %s",
                  goog.dom.asserts.debugStringForType_(e)
                );
            }
            return e;
          }),
          (goog.dom.asserts.assertIsElementType_ = function (e, t) {
            if (goog.asserts.ENABLE_ASSERTS) {
              var o = goog.dom.asserts.getWindow_(e);
              o &&
                void 0 !== o[t] &&
                ((e &&
                  (e instanceof o[t] ||
                    !(e instanceof o.Location || e instanceof o.Element))) ||
                  goog.asserts.fail(
                    "Argument is not a %s (or a non-Element, non-Location mock); got: %s",
                    t,
                    goog.dom.asserts.debugStringForType_(e)
                  ));
            }
            return e;
          }),
          (goog.dom.asserts.assertIsHTMLAnchorElement = function (e) {
            return goog.dom.asserts.assertIsElementType_(
              e,
              "HTMLAnchorElement"
            );
          }),
          (goog.dom.asserts.assertIsHTMLButtonElement = function (e) {
            return goog.dom.asserts.assertIsElementType_(
              e,
              "HTMLButtonElement"
            );
          }),
          (goog.dom.asserts.assertIsHTMLLinkElement = function (e) {
            return goog.dom.asserts.assertIsElementType_(e, "HTMLLinkElement");
          }),
          (goog.dom.asserts.assertIsHTMLImageElement = function (e) {
            return goog.dom.asserts.assertIsElementType_(e, "HTMLImageElement");
          }),
          (goog.dom.asserts.assertIsHTMLAudioElement = function (e) {
            return goog.dom.asserts.assertIsElementType_(e, "HTMLAudioElement");
          }),
          (goog.dom.asserts.assertIsHTMLVideoElement = function (e) {
            return goog.dom.asserts.assertIsElementType_(e, "HTMLVideoElement");
          }),
          (goog.dom.asserts.assertIsHTMLInputElement = function (e) {
            return goog.dom.asserts.assertIsElementType_(e, "HTMLInputElement");
          }),
          (goog.dom.asserts.assertIsHTMLTextAreaElement = function (e) {
            return goog.dom.asserts.assertIsElementType_(
              e,
              "HTMLTextAreaElement"
            );
          }),
          (goog.dom.asserts.assertIsHTMLCanvasElement = function (e) {
            return goog.dom.asserts.assertIsElementType_(
              e,
              "HTMLCanvasElement"
            );
          }),
          (goog.dom.asserts.assertIsHTMLEmbedElement = function (e) {
            return goog.dom.asserts.assertIsElementType_(e, "HTMLEmbedElement");
          }),
          (goog.dom.asserts.assertIsHTMLFormElement = function (e) {
            return goog.dom.asserts.assertIsElementType_(e, "HTMLFormElement");
          }),
          (goog.dom.asserts.assertIsHTMLFrameElement = function (e) {
            return goog.dom.asserts.assertIsElementType_(e, "HTMLFrameElement");
          }),
          (goog.dom.asserts.assertIsHTMLIFrameElement = function (e) {
            return goog.dom.asserts.assertIsElementType_(
              e,
              "HTMLIFrameElement"
            );
          }),
          (goog.dom.asserts.assertIsHTMLObjectElement = function (e) {
            return goog.dom.asserts.assertIsElementType_(
              e,
              "HTMLObjectElement"
            );
          }),
          (goog.dom.asserts.assertIsHTMLScriptElement = function (e) {
            return goog.dom.asserts.assertIsElementType_(
              e,
              "HTMLScriptElement"
            );
          }),
          (goog.dom.asserts.debugStringForType_ = function (e) {
            if (!goog.isObject(e))
              return void 0 === e
                ? "undefined"
                : null === e
                ? "null"
                : typeof e;
            try {
              return (
                e.constructor.displayName ||
                e.constructor.name ||
                Object.prototype.toString.call(e)
              );
            } catch (e) {
              return "<object could not be stringified>";
            }
          }),
          (goog.dom.asserts.getWindow_ = function (e) {
            try {
              var t = e && e.ownerDocument,
                o = t && (t.defaultView || t.parentWindow);
              if ((o = o || goog.global).Element && o.Location) return o;
            } catch (e) {}
            return null;
          }),
          (goog.functions = {}),
          (goog.functions.constant = function (e) {
            return function () {
              return e;
            };
          }),
          (goog.functions.FALSE = function () {
            return !1;
          }),
          (goog.functions.TRUE = function () {
            return !0;
          }),
          (goog.functions.NULL = function () {
            return null;
          }),
          (goog.functions.identity = function (e, t) {
            return e;
          }),
          (goog.functions.error = function (e) {
            return function () {
              throw Error(e);
            };
          }),
          (goog.functions.fail = function (e) {
            return function () {
              throw e;
            };
          }),
          (goog.functions.lock = function (e, t) {
            return (
              (t = t || 0),
              function () {
                return e.apply(
                  this,
                  Array.prototype.slice.call(arguments, 0, t)
                );
              }
            );
          }),
          (goog.functions.nth = function (e) {
            return function () {
              return arguments[e];
            };
          }),
          (goog.functions.partialRight = function (e, t) {
            var o = Array.prototype.slice.call(arguments, 1);
            return function () {
              var t = Array.prototype.slice.call(arguments);
              return t.push.apply(t, o), e.apply(this, t);
            };
          }),
          (goog.functions.withReturnValue = function (e, t) {
            return goog.functions.sequence(e, goog.functions.constant(t));
          }),
          (goog.functions.equalTo = function (e, t) {
            return function (o) {
              return t ? e == o : e === o;
            };
          }),
          (goog.functions.compose = function (e, t) {
            var o = arguments,
              r = o.length;
            return function () {
              var e;
              r && (e = o[r - 1].apply(this, arguments));
              for (var t = r - 2; 0 <= t; t--) e = o[t].call(this, e);
              return e;
            };
          }),
          (goog.functions.sequence = function (e) {
            var t = arguments,
              o = t.length;
            return function () {
              for (var e, r = 0; r < o; r++) e = t[r].apply(this, arguments);
              return e;
            };
          }),
          (goog.functions.and = function (e) {
            var t = arguments,
              o = t.length;
            return function () {
              for (var e = 0; e < o; e++)
                if (!t[e].apply(this, arguments)) return !1;
              return !0;
            };
          }),
          (goog.functions.or = function (e) {
            var t = arguments,
              o = t.length;
            return function () {
              for (var e = 0; e < o; e++)
                if (t[e].apply(this, arguments)) return !0;
              return !1;
            };
          }),
          (goog.functions.not = function (e) {
            return function () {
              return !e.apply(this, arguments);
            };
          }),
          (goog.functions.create = function (e, t) {
            var o = function () {};
            return (
              (o.prototype = e.prototype),
              (o = new o()),
              e.apply(o, Array.prototype.slice.call(arguments, 1)),
              o
            );
          }),
          (goog.functions.CACHE_RETURN_VALUE = !0),
          (goog.functions.cacheReturnValue = function (e) {
            var t,
              o = !1;
            return function () {
              return goog.functions.CACHE_RETURN_VALUE
                ? (o || ((t = e()), (o = !0)), t)
                : e();
            };
          }),
          (goog.functions.once = function (e) {
            var t = e;
            return function () {
              if (t) {
                var e = t;
                (t = null), e();
              }
            };
          }),
          (goog.functions.debounce = function (e, t, o) {
            var r = 0;
            return function (n) {
              goog.global.clearTimeout(r);
              var i = arguments;
              r = goog.global.setTimeout(function () {
                e.apply(o, i);
              }, t);
            };
          }),
          (goog.functions.throttle = function (e, t, o) {
            var r = 0,
              n = !1,
              i = [],
              a = function () {
                (r = 0), n && ((n = !1), s());
              },
              s = function () {
                (r = goog.global.setTimeout(a, t)), e.apply(o, i);
              };
            return function (e) {
              (i = arguments), r ? (n = !0) : s();
            };
          }),
          (goog.functions.rateLimit = function (e, t, o) {
            var r = 0,
              n = function () {
                r = 0;
              };
            return function (i) {
              r || ((r = goog.global.setTimeout(n, t)), e.apply(o, arguments));
            };
          }),
          (goog.dom.HtmlElement = function () {}),
          (goog.dom.TagName = function (e) {
            this.tagName_ = e;
          }),
          (goog.dom.TagName.prototype.toString = function () {
            return this.tagName_;
          }),
          (goog.dom.TagName.A = new goog.dom.TagName("A")),
          (goog.dom.TagName.ABBR = new goog.dom.TagName("ABBR")),
          (goog.dom.TagName.ACRONYM = new goog.dom.TagName("ACRONYM")),
          (goog.dom.TagName.ADDRESS = new goog.dom.TagName("ADDRESS")),
          (goog.dom.TagName.APPLET = new goog.dom.TagName("APPLET")),
          (goog.dom.TagName.AREA = new goog.dom.TagName("AREA")),
          (goog.dom.TagName.ARTICLE = new goog.dom.TagName("ARTICLE")),
          (goog.dom.TagName.ASIDE = new goog.dom.TagName("ASIDE")),
          (goog.dom.TagName.AUDIO = new goog.dom.TagName("AUDIO")),
          (goog.dom.TagName.B = new goog.dom.TagName("B")),
          (goog.dom.TagName.BASE = new goog.dom.TagName("BASE")),
          (goog.dom.TagName.BASEFONT = new goog.dom.TagName("BASEFONT")),
          (goog.dom.TagName.BDI = new goog.dom.TagName("BDI")),
          (goog.dom.TagName.BDO = new goog.dom.TagName("BDO")),
          (goog.dom.TagName.BIG = new goog.dom.TagName("BIG")),
          (goog.dom.TagName.BLOCKQUOTE = new goog.dom.TagName("BLOCKQUOTE")),
          (goog.dom.TagName.BODY = new goog.dom.TagName("BODY")),
          (goog.dom.TagName.BR = new goog.dom.TagName("BR")),
          (goog.dom.TagName.BUTTON = new goog.dom.TagName("BUTTON")),
          (goog.dom.TagName.CANVAS = new goog.dom.TagName("CANVAS")),
          (goog.dom.TagName.CAPTION = new goog.dom.TagName("CAPTION")),
          (goog.dom.TagName.CENTER = new goog.dom.TagName("CENTER")),
          (goog.dom.TagName.CITE = new goog.dom.TagName("CITE")),
          (goog.dom.TagName.CODE = new goog.dom.TagName("CODE")),
          (goog.dom.TagName.COL = new goog.dom.TagName("COL")),
          (goog.dom.TagName.COLGROUP = new goog.dom.TagName("COLGROUP")),
          (goog.dom.TagName.COMMAND = new goog.dom.TagName("COMMAND")),
          (goog.dom.TagName.DATA = new goog.dom.TagName("DATA")),
          (goog.dom.TagName.DATALIST = new goog.dom.TagName("DATALIST")),
          (goog.dom.TagName.DD = new goog.dom.TagName("DD")),
          (goog.dom.TagName.DEL = new goog.dom.TagName("DEL")),
          (goog.dom.TagName.DETAILS = new goog.dom.TagName("DETAILS")),
          (goog.dom.TagName.DFN = new goog.dom.TagName("DFN")),
          (goog.dom.TagName.DIALOG = new goog.dom.TagName("DIALOG")),
          (goog.dom.TagName.DIR = new goog.dom.TagName("DIR")),
          (goog.dom.TagName.DIV = new goog.dom.TagName("DIV")),
          (goog.dom.TagName.DL = new goog.dom.TagName("DL")),
          (goog.dom.TagName.DT = new goog.dom.TagName("DT")),
          (goog.dom.TagName.EM = new goog.dom.TagName("EM")),
          (goog.dom.TagName.EMBED = new goog.dom.TagName("EMBED")),
          (goog.dom.TagName.FIELDSET = new goog.dom.TagName("FIELDSET")),
          (goog.dom.TagName.FIGCAPTION = new goog.dom.TagName("FIGCAPTION")),
          (goog.dom.TagName.FIGURE = new goog.dom.TagName("FIGURE")),
          (goog.dom.TagName.FONT = new goog.dom.TagName("FONT")),
          (goog.dom.TagName.FOOTER = new goog.dom.TagName("FOOTER")),
          (goog.dom.TagName.FORM = new goog.dom.TagName("FORM")),
          (goog.dom.TagName.FRAME = new goog.dom.TagName("FRAME")),
          (goog.dom.TagName.FRAMESET = new goog.dom.TagName("FRAMESET")),
          (goog.dom.TagName.H1 = new goog.dom.TagName("H1")),
          (goog.dom.TagName.H2 = new goog.dom.TagName("H2")),
          (goog.dom.TagName.H3 = new goog.dom.TagName("H3")),
          (goog.dom.TagName.H4 = new goog.dom.TagName("H4")),
          (goog.dom.TagName.H5 = new goog.dom.TagName("H5")),
          (goog.dom.TagName.H6 = new goog.dom.TagName("H6")),
          (goog.dom.TagName.HEAD = new goog.dom.TagName("HEAD")),
          (goog.dom.TagName.HEADER = new goog.dom.TagName("HEADER")),
          (goog.dom.TagName.HGROUP = new goog.dom.TagName("HGROUP")),
          (goog.dom.TagName.HR = new goog.dom.TagName("HR")),
          (goog.dom.TagName.HTML = new goog.dom.TagName("HTML")),
          (goog.dom.TagName.I = new goog.dom.TagName("I")),
          (goog.dom.TagName.IFRAME = new goog.dom.TagName("IFRAME")),
          (goog.dom.TagName.IMG = new goog.dom.TagName("IMG")),
          (goog.dom.TagName.INPUT = new goog.dom.TagName("INPUT")),
          (goog.dom.TagName.INS = new goog.dom.TagName("INS")),
          (goog.dom.TagName.ISINDEX = new goog.dom.TagName("ISINDEX")),
          (goog.dom.TagName.KBD = new goog.dom.TagName("KBD")),
          (goog.dom.TagName.KEYGEN = new goog.dom.TagName("KEYGEN")),
          (goog.dom.TagName.LABEL = new goog.dom.TagName("LABEL")),
          (goog.dom.TagName.LEGEND = new goog.dom.TagName("LEGEND")),
          (goog.dom.TagName.LI = new goog.dom.TagName("LI")),
          (goog.dom.TagName.LINK = new goog.dom.TagName("LINK")),
          (goog.dom.TagName.MAIN = new goog.dom.TagName("MAIN")),
          (goog.dom.TagName.MAP = new goog.dom.TagName("MAP")),
          (goog.dom.TagName.MARK = new goog.dom.TagName("MARK")),
          (goog.dom.TagName.MATH = new goog.dom.TagName("MATH")),
          (goog.dom.TagName.MENU = new goog.dom.TagName("MENU")),
          (goog.dom.TagName.MENUITEM = new goog.dom.TagName("MENUITEM")),
          (goog.dom.TagName.META = new goog.dom.TagName("META")),
          (goog.dom.TagName.METER = new goog.dom.TagName("METER")),
          (goog.dom.TagName.NAV = new goog.dom.TagName("NAV")),
          (goog.dom.TagName.NOFRAMES = new goog.dom.TagName("NOFRAMES")),
          (goog.dom.TagName.NOSCRIPT = new goog.dom.TagName("NOSCRIPT")),
          (goog.dom.TagName.OBJECT = new goog.dom.TagName("OBJECT")),
          (goog.dom.TagName.OL = new goog.dom.TagName("OL")),
          (goog.dom.TagName.OPTGROUP = new goog.dom.TagName("OPTGROUP")),
          (goog.dom.TagName.OPTION = new goog.dom.TagName("OPTION")),
          (goog.dom.TagName.OUTPUT = new goog.dom.TagName("OUTPUT")),
          (goog.dom.TagName.P = new goog.dom.TagName("P")),
          (goog.dom.TagName.PARAM = new goog.dom.TagName("PARAM")),
          (goog.dom.TagName.PICTURE = new goog.dom.TagName("PICTURE")),
          (goog.dom.TagName.PRE = new goog.dom.TagName("PRE")),
          (goog.dom.TagName.PROGRESS = new goog.dom.TagName("PROGRESS")),
          (goog.dom.TagName.Q = new goog.dom.TagName("Q")),
          (goog.dom.TagName.RP = new goog.dom.TagName("RP")),
          (goog.dom.TagName.RT = new goog.dom.TagName("RT")),
          (goog.dom.TagName.RTC = new goog.dom.TagName("RTC")),
          (goog.dom.TagName.RUBY = new goog.dom.TagName("RUBY")),
          (goog.dom.TagName.S = new goog.dom.TagName("S")),
          (goog.dom.TagName.SAMP = new goog.dom.TagName("SAMP")),
          (goog.dom.TagName.SCRIPT = new goog.dom.TagName("SCRIPT")),
          (goog.dom.TagName.SECTION = new goog.dom.TagName("SECTION")),
          (goog.dom.TagName.SELECT = new goog.dom.TagName("SELECT")),
          (goog.dom.TagName.SMALL = new goog.dom.TagName("SMALL")),
          (goog.dom.TagName.SOURCE = new goog.dom.TagName("SOURCE")),
          (goog.dom.TagName.SPAN = new goog.dom.TagName("SPAN")),
          (goog.dom.TagName.STRIKE = new goog.dom.TagName("STRIKE")),
          (goog.dom.TagName.STRONG = new goog.dom.TagName("STRONG")),
          (goog.dom.TagName.STYLE = new goog.dom.TagName("STYLE")),
          (goog.dom.TagName.SUB = new goog.dom.TagName("SUB")),
          (goog.dom.TagName.SUMMARY = new goog.dom.TagName("SUMMARY")),
          (goog.dom.TagName.SUP = new goog.dom.TagName("SUP")),
          (goog.dom.TagName.SVG = new goog.dom.TagName("SVG")),
          (goog.dom.TagName.TABLE = new goog.dom.TagName("TABLE")),
          (goog.dom.TagName.TBODY = new goog.dom.TagName("TBODY")),
          (goog.dom.TagName.TD = new goog.dom.TagName("TD")),
          (goog.dom.TagName.TEMPLATE = new goog.dom.TagName("TEMPLATE")),
          (goog.dom.TagName.TEXTAREA = new goog.dom.TagName("TEXTAREA")),
          (goog.dom.TagName.TFOOT = new goog.dom.TagName("TFOOT")),
          (goog.dom.TagName.TH = new goog.dom.TagName("TH")),
          (goog.dom.TagName.THEAD = new goog.dom.TagName("THEAD")),
          (goog.dom.TagName.TIME = new goog.dom.TagName("TIME")),
          (goog.dom.TagName.TITLE = new goog.dom.TagName("TITLE")),
          (goog.dom.TagName.TR = new goog.dom.TagName("TR")),
          (goog.dom.TagName.TRACK = new goog.dom.TagName("TRACK")),
          (goog.dom.TagName.TT = new goog.dom.TagName("TT")),
          (goog.dom.TagName.U = new goog.dom.TagName("U")),
          (goog.dom.TagName.UL = new goog.dom.TagName("UL")),
          (goog.dom.TagName.VAR = new goog.dom.TagName("VAR")),
          (goog.dom.TagName.VIDEO = new goog.dom.TagName("VIDEO")),
          (goog.dom.TagName.WBR = new goog.dom.TagName("WBR")),
          (goog.dom.tags = {}),
          (goog.dom.tags.VOID_TAGS_ = {
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
          }),
          (goog.dom.tags.isVoidTag = function (e) {
            return !0 === goog.dom.tags.VOID_TAGS_[e];
          }),
          (goog.html = {}),
          (goog.html.trustedtypes = {}),
          (goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY =
            goog.TRUSTED_TYPES_POLICY_NAME
              ? goog.createTrustedTypesPolicy(
                  goog.TRUSTED_TYPES_POLICY_NAME + "#html"
                )
              : null),
          (goog.string = {}),
          (goog.string.TypedString = function () {}),
          (goog.string.Const = function (e, t) {
            (this.stringConstValueWithSecurityContract__googStringSecurityPrivate_ =
              (e === goog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_ &&
                t) ||
              ""),
              (this.STRING_CONST_TYPE_MARKER__GOOG_STRING_SECURITY_PRIVATE_ =
                goog.string.Const.TYPE_MARKER_);
          }),
          (goog.string.Const.prototype.implementsGoogStringTypedString = !0),
          (goog.string.Const.prototype.getTypedStringValue = function () {
            return this
              .stringConstValueWithSecurityContract__googStringSecurityPrivate_;
          }),
          goog.DEBUG &&
            (goog.string.Const.prototype.toString = function () {
              return (
                "Const{" +
                this
                  .stringConstValueWithSecurityContract__googStringSecurityPrivate_ +
                "}"
              );
            }),
          (goog.string.Const.unwrap = function (e) {
            return e instanceof goog.string.Const &&
              e.constructor === goog.string.Const &&
              e.STRING_CONST_TYPE_MARKER__GOOG_STRING_SECURITY_PRIVATE_ ===
                goog.string.Const.TYPE_MARKER_
              ? e.stringConstValueWithSecurityContract__googStringSecurityPrivate_
              : (goog.asserts.fail(
                  "expected object of type Const, got '" + e + "'"
                ),
                "type_error:Const");
          }),
          (goog.string.Const.from = function (e) {
            return new goog.string.Const(
              goog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_,
              e
            );
          }),
          (goog.string.Const.TYPE_MARKER_ = {}),
          (goog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_ = {}),
          (goog.string.Const.EMPTY = goog.string.Const.from("")),
          (goog.html.SafeScript = function () {
            (this.privateDoNotAccessOrElseSafeScriptWrappedValue_ = ""),
              (this.SAFE_SCRIPT_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ =
                goog.html.SafeScript.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_);
          }),
          (goog.html.SafeScript.prototype.implementsGoogStringTypedString = !0),
          (goog.html.SafeScript.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {}),
          (goog.html.SafeScript.fromConstant = function (e) {
            return 0 === (e = goog.string.Const.unwrap(e)).length
              ? goog.html.SafeScript.EMPTY
              : goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(
                  e
                );
          }),
          (goog.html.SafeScript.fromConstantAndArgs = function (e, t) {
            for (var o = [], r = 1; r < arguments.length; r++)
              o.push(goog.html.SafeScript.stringify_(arguments[r]));
            return goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(
              "(" + goog.string.Const.unwrap(e) + ")(" + o.join(", ") + ");"
            );
          }),
          (goog.html.SafeScript.fromJson = function (e) {
            return goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(
              goog.html.SafeScript.stringify_(e)
            );
          }),
          (goog.html.SafeScript.prototype.getTypedStringValue = function () {
            return this.privateDoNotAccessOrElseSafeScriptWrappedValue_.toString();
          }),
          goog.DEBUG &&
            (goog.html.SafeScript.prototype.toString = function () {
              return (
                "SafeScript{" +
                this.privateDoNotAccessOrElseSafeScriptWrappedValue_ +
                "}"
              );
            }),
          (goog.html.SafeScript.unwrap = function (e) {
            return goog.html.SafeScript.unwrapTrustedScript(e).toString();
          }),
          (goog.html.SafeScript.unwrapTrustedScript = function (e) {
            return e instanceof goog.html.SafeScript &&
              e.constructor === goog.html.SafeScript &&
              e.SAFE_SCRIPT_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ ===
                goog.html.SafeScript.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_
              ? e.privateDoNotAccessOrElseSafeScriptWrappedValue_
              : (goog.asserts.fail(
                  "expected object of type SafeScript, got '" +
                    e +
                    "' of type " +
                    goog.typeOf(e)
                ),
                "type_error:SafeScript");
          }),
          (goog.html.SafeScript.stringify_ = function (e) {
            return JSON.stringify(e).replace(/</g, "\\x3c");
          }),
          (goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse =
            function (e) {
              return new goog.html.SafeScript().initSecurityPrivateDoNotAccessOrElse_(
                e
              );
            }),
          (goog.html.SafeScript.prototype.initSecurityPrivateDoNotAccessOrElse_ =
            function (e) {
              return (
                (this.privateDoNotAccessOrElseSafeScriptWrappedValue_ = goog
                  .html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY
                  ? goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY.createScript(
                      e
                    )
                  : e),
                this
              );
            }),
          (goog.html.SafeScript.EMPTY =
            goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(
              ""
            )),
          (goog.fs = {}),
          (goog.fs.url = {}),
          (goog.fs.url.createObjectUrl = function (e) {
            return goog.fs.url.getUrlObject_().createObjectURL(e);
          }),
          (goog.fs.url.revokeObjectUrl = function (e) {
            goog.fs.url.getUrlObject_().revokeObjectURL(e);
          }),
          (goog.fs.url.UrlObject_ = function () {}),
          (goog.fs.url.UrlObject_.prototype.createObjectURL = function (e) {}),
          (goog.fs.url.UrlObject_.prototype.revokeObjectURL = function (e) {}),
          (goog.fs.url.getUrlObject_ = function () {
            var e = goog.fs.url.findUrlObject_();
            if (null != e) return e;
            throw Error("This browser doesn't seem to support blob URLs");
          }),
          (goog.fs.url.findUrlObject_ = function () {
            return void 0 !== goog.global.URL &&
              void 0 !== goog.global.URL.createObjectURL
              ? goog.global.URL
              : void 0 !== goog.global.webkitURL &&
                void 0 !== goog.global.webkitURL.createObjectURL
              ? goog.global.webkitURL
              : void 0 !== goog.global.createObjectURL
              ? goog.global
              : null;
          }),
          (goog.fs.url.browserSupportsObjectUrls = function () {
            return null != goog.fs.url.findUrlObject_();
          }),
          (goog.fs.blob = {}),
          (goog.fs.blob.getBlob = function (e) {
            var t = goog.global.BlobBuilder || goog.global.WebKitBlobBuilder;
            if (void 0 !== t) {
              t = new t();
              for (var o = 0; o < arguments.length; o++) t.append(arguments[o]);
              return t.getBlob();
            }
            return goog.fs.blob.getBlobWithProperties(
              goog.array.toArray(arguments)
            );
          }),
          (goog.fs.blob.getBlobWithProperties = function (e, t, o) {
            var r = goog.global.BlobBuilder || goog.global.WebKitBlobBuilder;
            if (void 0 !== r) {
              r = new r();
              for (var n = 0; n < e.length; n++) r.append(e[n], o);
              return r.getBlob(t);
            }
            if (void 0 !== goog.global.Blob)
              return (
                (r = {}),
                t && (r.type = t),
                o && (r.endings = o),
                new Blob(e, r)
              );
            throw Error("This browser doesn't seem to support creating Blobs");
          }),
          (goog.i18n = {}),
          (goog.i18n.bidi = {}),
          (goog.i18n.bidi.FORCE_RTL = !1),
          (goog.i18n.bidi.IS_RTL =
            goog.i18n.bidi.FORCE_RTL ||
            (("ar" == goog.LOCALE.substring(0, 2).toLowerCase() ||
              "fa" == goog.LOCALE.substring(0, 2).toLowerCase() ||
              "he" == goog.LOCALE.substring(0, 2).toLowerCase() ||
              "iw" == goog.LOCALE.substring(0, 2).toLowerCase() ||
              "ps" == goog.LOCALE.substring(0, 2).toLowerCase() ||
              "sd" == goog.LOCALE.substring(0, 2).toLowerCase() ||
              "ug" == goog.LOCALE.substring(0, 2).toLowerCase() ||
              "ur" == goog.LOCALE.substring(0, 2).toLowerCase() ||
              "yi" == goog.LOCALE.substring(0, 2).toLowerCase()) &&
              (2 == goog.LOCALE.length ||
                "-" == goog.LOCALE.substring(2, 3) ||
                "_" == goog.LOCALE.substring(2, 3))) ||
            (3 <= goog.LOCALE.length &&
              "ckb" == goog.LOCALE.substring(0, 3).toLowerCase() &&
              (3 == goog.LOCALE.length ||
                "-" == goog.LOCALE.substring(3, 4) ||
                "_" == goog.LOCALE.substring(3, 4))) ||
            (7 <= goog.LOCALE.length &&
              ("-" == goog.LOCALE.substring(2, 3) ||
                "_" == goog.LOCALE.substring(2, 3)) &&
              ("adlm" == goog.LOCALE.substring(3, 7).toLowerCase() ||
                "arab" == goog.LOCALE.substring(3, 7).toLowerCase() ||
                "hebr" == goog.LOCALE.substring(3, 7).toLowerCase() ||
                "nkoo" == goog.LOCALE.substring(3, 7).toLowerCase() ||
                "rohg" == goog.LOCALE.substring(3, 7).toLowerCase() ||
                "thaa" == goog.LOCALE.substring(3, 7).toLowerCase())) ||
            (8 <= goog.LOCALE.length &&
              ("-" == goog.LOCALE.substring(3, 4) ||
                "_" == goog.LOCALE.substring(3, 4)) &&
              ("adlm" == goog.LOCALE.substring(4, 8).toLowerCase() ||
                "arab" == goog.LOCALE.substring(4, 8).toLowerCase() ||
                "hebr" == goog.LOCALE.substring(4, 8).toLowerCase() ||
                "nkoo" == goog.LOCALE.substring(4, 8).toLowerCase() ||
                "rohg" == goog.LOCALE.substring(4, 8).toLowerCase() ||
                "thaa" == goog.LOCALE.substring(4, 8).toLowerCase()))),
          (goog.i18n.bidi.Format = {
            LRE: "‪",
            RLE: "‫",
            PDF: "‬",
            LRM: "‎",
            RLM: "‏",
          }),
          (goog.i18n.bidi.Dir = { LTR: 1, RTL: -1, NEUTRAL: 0 }),
          (goog.i18n.bidi.RIGHT = "right"),
          (goog.i18n.bidi.LEFT = "left"),
          (goog.i18n.bidi.I18N_RIGHT = goog.i18n.bidi.IS_RTL
            ? goog.i18n.bidi.LEFT
            : goog.i18n.bidi.RIGHT),
          (goog.i18n.bidi.I18N_LEFT = goog.i18n.bidi.IS_RTL
            ? goog.i18n.bidi.RIGHT
            : goog.i18n.bidi.LEFT),
          (goog.i18n.bidi.toDir = function (e, t) {
            return "number" == typeof e
              ? 0 < e
                ? goog.i18n.bidi.Dir.LTR
                : 0 > e
                ? goog.i18n.bidi.Dir.RTL
                : t
                ? null
                : goog.i18n.bidi.Dir.NEUTRAL
              : null == e
              ? null
              : e
              ? goog.i18n.bidi.Dir.RTL
              : goog.i18n.bidi.Dir.LTR;
          }),
          (goog.i18n.bidi.ltrChars_ =
            "A-Za-zÀ-ÖØ-öø-ʸ̀-֐ऀ-῿‎Ⰰ-\ud801\ud804-\ud839\ud83c-\udbff豈-﬜︀-﹯﻽-￿"),
          (goog.i18n.bidi.rtlChars_ =
            "֑-ۯۺ-ࣿ‏\ud802-\ud803\ud83a-\ud83bיִ-﷿ﹰ-ﻼ"),
          (goog.i18n.bidi.htmlSkipReg_ = /<[^>]*>|&[^;]+;/g),
          (goog.i18n.bidi.stripHtmlIfNeeded_ = function (e, t) {
            return t ? e.replace(goog.i18n.bidi.htmlSkipReg_, "") : e;
          }),
          (goog.i18n.bidi.rtlCharReg_ = new RegExp(
            "[" + goog.i18n.bidi.rtlChars_ + "]"
          )),
          (goog.i18n.bidi.ltrCharReg_ = new RegExp(
            "[" + goog.i18n.bidi.ltrChars_ + "]"
          )),
          (goog.i18n.bidi.hasAnyRtl = function (e, t) {
            return goog.i18n.bidi.rtlCharReg_.test(
              goog.i18n.bidi.stripHtmlIfNeeded_(e, t)
            );
          }),
          (goog.i18n.bidi.hasRtlChar = goog.i18n.bidi.hasAnyRtl),
          (goog.i18n.bidi.hasAnyLtr = function (e, t) {
            return goog.i18n.bidi.ltrCharReg_.test(
              goog.i18n.bidi.stripHtmlIfNeeded_(e, t)
            );
          }),
          (goog.i18n.bidi.ltrRe_ = new RegExp(
            "^[" + goog.i18n.bidi.ltrChars_ + "]"
          )),
          (goog.i18n.bidi.rtlRe_ = new RegExp(
            "^[" + goog.i18n.bidi.rtlChars_ + "]"
          )),
          (goog.i18n.bidi.isRtlChar = function (e) {
            return goog.i18n.bidi.rtlRe_.test(e);
          }),
          (goog.i18n.bidi.isLtrChar = function (e) {
            return goog.i18n.bidi.ltrRe_.test(e);
          }),
          (goog.i18n.bidi.isNeutralChar = function (e) {
            return !goog.i18n.bidi.isLtrChar(e) && !goog.i18n.bidi.isRtlChar(e);
          }),
          (goog.i18n.bidi.ltrDirCheckRe_ = new RegExp(
            "^[^" +
              goog.i18n.bidi.rtlChars_ +
              "]*[" +
              goog.i18n.bidi.ltrChars_ +
              "]"
          )),
          (goog.i18n.bidi.rtlDirCheckRe_ = new RegExp(
            "^[^" +
              goog.i18n.bidi.ltrChars_ +
              "]*[" +
              goog.i18n.bidi.rtlChars_ +
              "]"
          )),
          (goog.i18n.bidi.startsWithRtl = function (e, t) {
            return goog.i18n.bidi.rtlDirCheckRe_.test(
              goog.i18n.bidi.stripHtmlIfNeeded_(e, t)
            );
          }),
          (goog.i18n.bidi.isRtlText = goog.i18n.bidi.startsWithRtl),
          (goog.i18n.bidi.startsWithLtr = function (e, t) {
            return goog.i18n.bidi.ltrDirCheckRe_.test(
              goog.i18n.bidi.stripHtmlIfNeeded_(e, t)
            );
          }),
          (goog.i18n.bidi.isLtrText = goog.i18n.bidi.startsWithLtr),
          (goog.i18n.bidi.isRequiredLtrRe_ = /^http:\/\/.*/),
          (goog.i18n.bidi.isNeutralText = function (e, t) {
            return (
              (e = goog.i18n.bidi.stripHtmlIfNeeded_(e, t)),
              goog.i18n.bidi.isRequiredLtrRe_.test(e) ||
                (!goog.i18n.bidi.hasAnyLtr(e) && !goog.i18n.bidi.hasAnyRtl(e))
            );
          }),
          (goog.i18n.bidi.ltrExitDirCheckRe_ = new RegExp(
            "[" +
              goog.i18n.bidi.ltrChars_ +
              "][^" +
              goog.i18n.bidi.rtlChars_ +
              "]*$"
          )),
          (goog.i18n.bidi.rtlExitDirCheckRe_ = new RegExp(
            "[" +
              goog.i18n.bidi.rtlChars_ +
              "][^" +
              goog.i18n.bidi.ltrChars_ +
              "]*$"
          )),
          (goog.i18n.bidi.endsWithLtr = function (e, t) {
            return goog.i18n.bidi.ltrExitDirCheckRe_.test(
              goog.i18n.bidi.stripHtmlIfNeeded_(e, t)
            );
          }),
          (goog.i18n.bidi.isLtrExitText = goog.i18n.bidi.endsWithLtr),
          (goog.i18n.bidi.endsWithRtl = function (e, t) {
            return goog.i18n.bidi.rtlExitDirCheckRe_.test(
              goog.i18n.bidi.stripHtmlIfNeeded_(e, t)
            );
          }),
          (goog.i18n.bidi.isRtlExitText = goog.i18n.bidi.endsWithRtl),
          (goog.i18n.bidi.rtlLocalesRe_ =
            /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i),
          (goog.i18n.bidi.isRtlLanguage = function (e) {
            return goog.i18n.bidi.rtlLocalesRe_.test(e);
          }),
          (goog.i18n.bidi.bracketGuardTextRe_ =
            /(\(.*?\)+)|(\[.*?\]+)|(\{.*?\}+)|(<.*?>+)/g),
          (goog.i18n.bidi.guardBracketInText = function (e, t) {
            return (
              (t = (void 0 === t ? goog.i18n.bidi.hasAnyRtl(e) : t)
                ? goog.i18n.bidi.Format.RLM
                : goog.i18n.bidi.Format.LRM),
              e.replace(goog.i18n.bidi.bracketGuardTextRe_, t + "$&" + t)
            );
          }),
          (goog.i18n.bidi.enforceRtlInHtml = function (e) {
            return "<" == e.charAt(0)
              ? e.replace(/<\w+/, "$& dir=rtl")
              : "\n<span dir=rtl>" + e + "</span>";
          }),
          (goog.i18n.bidi.enforceRtlInText = function (e) {
            return goog.i18n.bidi.Format.RLE + e + goog.i18n.bidi.Format.PDF;
          }),
          (goog.i18n.bidi.enforceLtrInHtml = function (e) {
            return "<" == e.charAt(0)
              ? e.replace(/<\w+/, "$& dir=ltr")
              : "\n<span dir=ltr>" + e + "</span>";
          }),
          (goog.i18n.bidi.enforceLtrInText = function (e) {
            return goog.i18n.bidi.Format.LRE + e + goog.i18n.bidi.Format.PDF;
          }),
          (goog.i18n.bidi.dimensionsRe_ =
            /:\s*([.\d][.\w]*)\s+([.\d][.\w]*)\s+([.\d][.\w]*)\s+([.\d][.\w]*)/g),
          (goog.i18n.bidi.leftRe_ = /left/gi),
          (goog.i18n.bidi.rightRe_ = /right/gi),
          (goog.i18n.bidi.tempRe_ = /%%%%/g),
          (goog.i18n.bidi.mirrorCSS = function (e) {
            return e
              .replace(goog.i18n.bidi.dimensionsRe_, ":$1 $4 $3 $2")
              .replace(goog.i18n.bidi.leftRe_, "%%%%")
              .replace(goog.i18n.bidi.rightRe_, goog.i18n.bidi.LEFT)
              .replace(goog.i18n.bidi.tempRe_, goog.i18n.bidi.RIGHT);
          }),
          (goog.i18n.bidi.doubleQuoteSubstituteRe_ = /([\u0591-\u05f2])"/g),
          (goog.i18n.bidi.singleQuoteSubstituteRe_ = /([\u0591-\u05f2])'/g),
          (goog.i18n.bidi.normalizeHebrewQuote = function (e) {
            return e
              .replace(goog.i18n.bidi.doubleQuoteSubstituteRe_, "$1״")
              .replace(goog.i18n.bidi.singleQuoteSubstituteRe_, "$1׳");
          }),
          (goog.i18n.bidi.wordSeparatorRe_ = /\s+/),
          (goog.i18n.bidi.hasNumeralsRe_ = /[\d\u06f0-\u06f9]/),
          (goog.i18n.bidi.rtlDetectionThreshold_ = 0.4),
          (goog.i18n.bidi.estimateDirection = function (e, t) {
            var o = 0,
              r = 0,
              n = !1;
            for (
              e = goog.i18n.bidi
                .stripHtmlIfNeeded_(e, t)
                .split(goog.i18n.bidi.wordSeparatorRe_),
                t = 0;
              t < e.length;
              t++
            ) {
              var i = e[t];
              goog.i18n.bidi.startsWithRtl(i)
                ? (o++, r++)
                : goog.i18n.bidi.isRequiredLtrRe_.test(i)
                ? (n = !0)
                : goog.i18n.bidi.hasAnyLtr(i)
                ? r++
                : goog.i18n.bidi.hasNumeralsRe_.test(i) && (n = !0);
            }
            return 0 == r
              ? n
                ? goog.i18n.bidi.Dir.LTR
                : goog.i18n.bidi.Dir.NEUTRAL
              : o / r > goog.i18n.bidi.rtlDetectionThreshold_
              ? goog.i18n.bidi.Dir.RTL
              : goog.i18n.bidi.Dir.LTR;
          }),
          (goog.i18n.bidi.detectRtlDirectionality = function (e, t) {
            return (
              goog.i18n.bidi.estimateDirection(e, t) == goog.i18n.bidi.Dir.RTL
            );
          }),
          (goog.i18n.bidi.setElementDirAndAlign = function (e, t) {
            e &&
              (t = goog.i18n.bidi.toDir(t)) &&
              ((e.style.textAlign =
                t == goog.i18n.bidi.Dir.RTL
                  ? goog.i18n.bidi.RIGHT
                  : goog.i18n.bidi.LEFT),
              (e.dir = t == goog.i18n.bidi.Dir.RTL ? "rtl" : "ltr"));
          }),
          (goog.i18n.bidi.setElementDirByTextDirectionality = function (e, t) {
            switch (goog.i18n.bidi.estimateDirection(t)) {
              case goog.i18n.bidi.Dir.LTR:
                e.dir = "ltr";
                break;
              case goog.i18n.bidi.Dir.RTL:
                e.dir = "rtl";
                break;
              default:
                e.removeAttribute("dir");
            }
          }),
          (goog.i18n.bidi.DirectionalString = function () {}),
          (goog.html.TrustedResourceUrl = function (e, t) {
            (this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_ =
              (e === goog.html.TrustedResourceUrl.CONSTRUCTOR_TOKEN_PRIVATE_ &&
                t) ||
              ""),
              (this.TRUSTED_RESOURCE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ =
                goog.html.TrustedResourceUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_);
          }),
          (goog.html.TrustedResourceUrl.prototype.implementsGoogStringTypedString =
            !0),
          (goog.html.TrustedResourceUrl.prototype.getTypedStringValue =
            function () {
              return this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_.toString();
            }),
          (goog.html.TrustedResourceUrl.prototype.implementsGoogI18nBidiDirectionalString =
            !0),
          (goog.html.TrustedResourceUrl.prototype.getDirection = function () {
            return goog.i18n.bidi.Dir.LTR;
          }),
          (goog.html.TrustedResourceUrl.prototype.cloneWithParams = function (
            e,
            t
          ) {
            var o = goog.html.TrustedResourceUrl.unwrap(this),
              r =
                (o =
                  goog.html.TrustedResourceUrl.URL_PARAM_PARSER_.exec(o))[3] ||
                "";
            return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(
              o[1] +
                goog.html.TrustedResourceUrl.stringifyParams_(
                  "?",
                  o[2] || "",
                  e
                ) +
                goog.html.TrustedResourceUrl.stringifyParams_("#", r, t)
            );
          }),
          goog.DEBUG &&
            (goog.html.TrustedResourceUrl.prototype.toString = function () {
              return (
                "TrustedResourceUrl{" +
                this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_ +
                "}"
              );
            }),
          (goog.html.TrustedResourceUrl.unwrap = function (e) {
            return goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(
              e
            ).toString();
          }),
          (goog.html.TrustedResourceUrl.unwrapTrustedScriptURL = function (e) {
            return e instanceof goog.html.TrustedResourceUrl &&
              e.constructor === goog.html.TrustedResourceUrl &&
              e.TRUSTED_RESOURCE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ ===
                goog.html.TrustedResourceUrl
                  .TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_
              ? e.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_
              : (goog.asserts.fail(
                  "expected object of type TrustedResourceUrl, got '" +
                    e +
                    "' of type " +
                    goog.typeOf(e)
                ),
                "type_error:TrustedResourceUrl");
          }),
          (goog.html.TrustedResourceUrl.format = function (e, t) {
            var o = goog.string.Const.unwrap(e);
            if (!goog.html.TrustedResourceUrl.BASE_URL_.test(o))
              throw Error("Invalid TrustedResourceUrl format: " + o);
            return (
              (e = o.replace(
                goog.html.TrustedResourceUrl.FORMAT_MARKER_,
                function (e, r) {
                  if (!Object.prototype.hasOwnProperty.call(t, r))
                    throw Error(
                      'Found marker, "' +
                        r +
                        '", in format string, "' +
                        o +
                        '", but no valid label mapping found in args: ' +
                        JSON.stringify(t)
                    );
                  return (e = t[r]) instanceof goog.string.Const
                    ? goog.string.Const.unwrap(e)
                    : encodeURIComponent(String(e));
                }
              )),
              goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(
                e
              )
            );
          }),
          (goog.html.TrustedResourceUrl.FORMAT_MARKER_ = /%{(\w+)}/g),
          (goog.html.TrustedResourceUrl.BASE_URL_ =
            /^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i),
          (goog.html.TrustedResourceUrl.URL_PARAM_PARSER_ =
            /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/),
          (goog.html.TrustedResourceUrl.formatWithParams = function (
            e,
            t,
            o,
            r
          ) {
            return goog.html.TrustedResourceUrl.format(e, t).cloneWithParams(
              o,
              r
            );
          }),
          (goog.html.TrustedResourceUrl.fromConstant = function (e) {
            return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(
              goog.string.Const.unwrap(e)
            );
          }),
          (goog.html.TrustedResourceUrl.fromConstants = function (e) {
            for (var t = "", o = 0; o < e.length; o++)
              t += goog.string.Const.unwrap(e[o]);
            return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(
              t
            );
          }),
          (goog.html.TrustedResourceUrl.fromSafeScript = function (e) {
            return (
              (e = goog.fs.blob.getBlobWithProperties(
                [goog.html.SafeScript.unwrap(e)],
                "text/javascript"
              )),
              (e = goog.fs.url.createObjectUrl(e)),
              goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(
                e
              )
            );
          }),
          (goog.html.TrustedResourceUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ =
            {}),
          (goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse =
            function (e) {
              return (
                (e = goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY
                  ? goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY.createScriptURL(
                      e
                    )
                  : e),
                new goog.html.TrustedResourceUrl(
                  goog.html.TrustedResourceUrl.CONSTRUCTOR_TOKEN_PRIVATE_,
                  e
                )
              );
            }),
          (goog.html.TrustedResourceUrl.stringifyParams_ = function (e, t, o) {
            if (null == o) return t;
            if ("string" == typeof o) return o ? e + encodeURIComponent(o) : "";
            for (var r in o) {
              var n = o[r];
              n = Array.isArray(n) ? n : [n];
              for (var i = 0; i < n.length; i++) {
                var a = n[i];
                null != a &&
                  (t || (t = e),
                  (t +=
                    (t.length > e.length ? "&" : "") +
                    encodeURIComponent(r) +
                    "=" +
                    encodeURIComponent(String(a))));
              }
            }
            return t;
          }),
          (goog.html.TrustedResourceUrl.CONSTRUCTOR_TOKEN_PRIVATE_ = {}),
          (goog.string.internal = {}),
          (goog.string.internal.startsWith = function (e, t) {
            return 0 == e.lastIndexOf(t, 0);
          }),
          (goog.string.internal.endsWith = function (e, t) {
            var o = e.length - t.length;
            return 0 <= o && e.indexOf(t, o) == o;
          }),
          (goog.string.internal.caseInsensitiveStartsWith = function (e, t) {
            return (
              0 ==
              goog.string.internal.caseInsensitiveCompare(
                t,
                e.substr(0, t.length)
              )
            );
          }),
          (goog.string.internal.caseInsensitiveEndsWith = function (e, t) {
            return (
              0 ==
              goog.string.internal.caseInsensitiveCompare(
                t,
                e.substr(e.length - t.length, t.length)
              )
            );
          }),
          (goog.string.internal.caseInsensitiveEquals = function (e, t) {
            return e.toLowerCase() == t.toLowerCase();
          }),
          (goog.string.internal.isEmptyOrWhitespace = function (e) {
            return /^[\s\xa0]*$/.test(e);
          }),
          (goog.string.internal.trim =
            goog.TRUSTED_SITE && String.prototype.trim
              ? function (e) {
                  return e.trim();
                }
              : function (e) {
                  return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1];
                }),
          (goog.string.internal.caseInsensitiveCompare = function (e, t) {
            return (e = String(e).toLowerCase()) < (t = String(t).toLowerCase())
              ? -1
              : e == t
              ? 0
              : 1;
          }),
          (goog.string.internal.newLineToBr = function (e, t) {
            return e.replace(/(\r\n|\r|\n)/g, t ? "<br />" : "<br>");
          }),
          (goog.string.internal.htmlEscape = function (e, t) {
            if (t)
              e = e
                .replace(goog.string.internal.AMP_RE_, "&amp;")
                .replace(goog.string.internal.LT_RE_, "&lt;")
                .replace(goog.string.internal.GT_RE_, "&gt;")
                .replace(goog.string.internal.QUOT_RE_, "&quot;")
                .replace(goog.string.internal.SINGLE_QUOTE_RE_, "&#39;")
                .replace(goog.string.internal.NULL_RE_, "&#0;");
            else {
              if (!goog.string.internal.ALL_RE_.test(e)) return e;
              -1 != e.indexOf("&") &&
                (e = e.replace(goog.string.internal.AMP_RE_, "&amp;")),
                -1 != e.indexOf("<") &&
                  (e = e.replace(goog.string.internal.LT_RE_, "&lt;")),
                -1 != e.indexOf(">") &&
                  (e = e.replace(goog.string.internal.GT_RE_, "&gt;")),
                -1 != e.indexOf('"') &&
                  (e = e.replace(goog.string.internal.QUOT_RE_, "&quot;")),
                -1 != e.indexOf("'") &&
                  (e = e.replace(
                    goog.string.internal.SINGLE_QUOTE_RE_,
                    "&#39;"
                  )),
                -1 != e.indexOf("\0") &&
                  (e = e.replace(goog.string.internal.NULL_RE_, "&#0;"));
            }
            return e;
          }),
          (goog.string.internal.AMP_RE_ = /&/g),
          (goog.string.internal.LT_RE_ = /</g),
          (goog.string.internal.GT_RE_ = />/g),
          (goog.string.internal.QUOT_RE_ = /"/g),
          (goog.string.internal.SINGLE_QUOTE_RE_ = /'/g),
          (goog.string.internal.NULL_RE_ = /\x00/g),
          (goog.string.internal.ALL_RE_ = /[\x00&<>"']/),
          (goog.string.internal.whitespaceEscape = function (e, t) {
            return goog.string.internal.newLineToBr(
              e.replace(/  /g, " &#160;"),
              t
            );
          }),
          (goog.string.internal.contains = function (e, t) {
            return -1 != e.indexOf(t);
          }),
          (goog.string.internal.caseInsensitiveContains = function (e, t) {
            return goog.string.internal.contains(
              e.toLowerCase(),
              t.toLowerCase()
            );
          }),
          (goog.string.internal.compareVersions = function (e, t) {
            var o = 0;
            (e = goog.string.internal.trim(String(e)).split(".")),
              (t = goog.string.internal.trim(String(t)).split("."));
            for (
              var r = Math.max(e.length, t.length), n = 0;
              0 == o && n < r;
              n++
            ) {
              var i = e[n] || "",
                a = t[n] || "";
              do {
                if (
                  ((i = /(\d*)(\D*)(.*)/.exec(i) || ["", "", "", ""]),
                  (a = /(\d*)(\D*)(.*)/.exec(a) || ["", "", "", ""]),
                  0 == i[0].length && 0 == a[0].length)
                )
                  break;
                o = 0 == i[1].length ? 0 : parseInt(i[1], 10);
                var s = 0 == a[1].length ? 0 : parseInt(a[1], 10);
                (o =
                  goog.string.internal.compareElements_(o, s) ||
                  goog.string.internal.compareElements_(
                    0 == i[2].length,
                    0 == a[2].length
                  ) ||
                  goog.string.internal.compareElements_(i[2], a[2])),
                  (i = i[3]),
                  (a = a[3]);
              } while (0 == o);
            }
            return o;
          }),
          (goog.string.internal.compareElements_ = function (e, t) {
            return e < t ? -1 : e > t ? 1 : 0;
          }),
          (goog.html.SafeUrl = function (e, t) {
            (this.privateDoNotAccessOrElseSafeUrlWrappedValue_ =
              (e === goog.html.SafeUrl.CONSTRUCTOR_TOKEN_PRIVATE_ && t) || ""),
              (this.SAFE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ =
                goog.html.SafeUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_);
          }),
          (goog.html.SafeUrl.INNOCUOUS_STRING = "about:invalid#zClosurez"),
          (goog.html.SafeUrl.prototype.implementsGoogStringTypedString = !0),
          (goog.html.SafeUrl.prototype.getTypedStringValue = function () {
            return this.privateDoNotAccessOrElseSafeUrlWrappedValue_.toString();
          }),
          (goog.html.SafeUrl.prototype.implementsGoogI18nBidiDirectionalString =
            !0),
          (goog.html.SafeUrl.prototype.getDirection = function () {
            return goog.i18n.bidi.Dir.LTR;
          }),
          goog.DEBUG &&
            (goog.html.SafeUrl.prototype.toString = function () {
              return (
                "SafeUrl{" +
                this.privateDoNotAccessOrElseSafeUrlWrappedValue_ +
                "}"
              );
            }),
          (goog.html.SafeUrl.unwrap = function (e) {
            return e instanceof goog.html.SafeUrl &&
              e.constructor === goog.html.SafeUrl &&
              e.SAFE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ ===
                goog.html.SafeUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_
              ? e.privateDoNotAccessOrElseSafeUrlWrappedValue_
              : (goog.asserts.fail(
                  "expected object of type SafeUrl, got '" +
                    e +
                    "' of type " +
                    goog.typeOf(e)
                ),
                "type_error:SafeUrl");
          }),
          (goog.html.SafeUrl.fromConstant = function (e) {
            return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(
              goog.string.Const.unwrap(e)
            );
          }),
          (goog.html.SAFE_MIME_TYPE_PATTERN_ =
            /^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|text\/csv|video\/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i),
          (goog.html.SafeUrl.isSafeMimeType = function (e) {
            return goog.html.SAFE_MIME_TYPE_PATTERN_.test(e);
          }),
          (goog.html.SafeUrl.fromBlob = function (e) {
            return (
              (e = goog.html.SafeUrl.isSafeMimeType(e.type)
                ? goog.fs.url.createObjectUrl(e)
                : goog.html.SafeUrl.INNOCUOUS_STRING),
              goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(e)
            );
          }),
          (goog.html.SafeUrl.fromMediaSource = function (e) {
            return (
              goog.asserts.assert(
                "MediaSource" in goog.global,
                "No support for MediaSource"
              ),
              (e =
                e instanceof MediaSource
                  ? goog.fs.url.createObjectUrl(e)
                  : goog.html.SafeUrl.INNOCUOUS_STRING),
              goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(e)
            );
          }),
          (goog.html.DATA_URL_PATTERN_ = /^data:(.*);base64,[a-z0-9+\/]+=*$/i),
          (goog.html.SafeUrl.fromDataUrl = function (e) {
            var t = (e = e.replace(/(%0A|%0D)/g, "")).match(
              goog.html.DATA_URL_PATTERN_
            );
            return (
              (t = t && goog.html.SafeUrl.isSafeMimeType(t[1])),
              goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(
                t ? e : goog.html.SafeUrl.INNOCUOUS_STRING
              )
            );
          }),
          (goog.html.SafeUrl.fromTelUrl = function (e) {
            return (
              goog.string.internal.caseInsensitiveStartsWith(e, "tel:") ||
                (e = goog.html.SafeUrl.INNOCUOUS_STRING),
              goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(e)
            );
          }),
          (goog.html.SIP_URL_PATTERN_ =
            /^sip[s]?:[+a-z0-9_.!$%&'*\/=^`{|}~-]+@([a-z0-9-]+\.)+[a-z0-9]{2,63}$/i),
          (goog.html.SafeUrl.fromSipUrl = function (e) {
            return (
              goog.html.SIP_URL_PATTERN_.test(decodeURIComponent(e)) ||
                (e = goog.html.SafeUrl.INNOCUOUS_STRING),
              goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(e)
            );
          }),
          (goog.html.SafeUrl.fromFacebookMessengerUrl = function (e) {
            return (
              goog.string.internal.caseInsensitiveStartsWith(
                e,
                "fb-messenger://share"
              ) || (e = goog.html.SafeUrl.INNOCUOUS_STRING),
              goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(e)
            );
          }),
          (goog.html.SafeUrl.fromWhatsAppUrl = function (e) {
            return (
              goog.string.internal.caseInsensitiveStartsWith(
                e,
                "whatsapp://send"
              ) || (e = goog.html.SafeUrl.INNOCUOUS_STRING),
              goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(e)
            );
          }),
          (goog.html.SafeUrl.fromSmsUrl = function (e) {
            return (
              (goog.string.internal.caseInsensitiveStartsWith(e, "sms:") &&
                goog.html.SafeUrl.isSmsUrlBodyValid_(e)) ||
                (e = goog.html.SafeUrl.INNOCUOUS_STRING),
              goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(e)
            );
          }),
          (goog.html.SafeUrl.isSmsUrlBodyValid_ = function (e) {
            var t = e.indexOf("#");
            if (
              (0 < t && (e = e.substring(0, t)), !(t = e.match(/[?&]body=/gi)))
            )
              return !0;
            if (1 < t.length) return !1;
            if (!(e = e.match(/[?&]body=([^&]*)/)[1])) return !0;
            try {
              decodeURIComponent(e);
            } catch (e) {
              return !1;
            }
            return /^(?:[a-z0-9\-_.~]|%[0-9a-f]{2})+$/i.test(e);
          }),
          (goog.html.SafeUrl.fromSshUrl = function (e) {
            return (
              goog.string.internal.caseInsensitiveStartsWith(e, "ssh://") ||
                (e = goog.html.SafeUrl.INNOCUOUS_STRING),
              goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(e)
            );
          }),
          (goog.html.SafeUrl.sanitizeChromeExtensionUrl = function (e, t) {
            return goog.html.SafeUrl.sanitizeExtensionUrl_(
              /^chrome-extension:\/\/([^\/]+)\//,
              e,
              t
            );
          }),
          (goog.html.SafeUrl.sanitizeFirefoxExtensionUrl = function (e, t) {
            return goog.html.SafeUrl.sanitizeExtensionUrl_(
              /^moz-extension:\/\/([^\/]+)\//,
              e,
              t
            );
          }),
          (goog.html.SafeUrl.sanitizeEdgeExtensionUrl = function (e, t) {
            return goog.html.SafeUrl.sanitizeExtensionUrl_(
              /^ms-browser-extension:\/\/([^\/]+)\//,
              e,
              t
            );
          }),
          (goog.html.SafeUrl.sanitizeExtensionUrl_ = function (e, t, o) {
            return (
              (e = e.exec(t))
                ? ((e = e[1]),
                  -1 ==
                    (o instanceof goog.string.Const
                      ? [goog.string.Const.unwrap(o)]
                      : o.map(function (e) {
                          return goog.string.Const.unwrap(e);
                        })
                    ).indexOf(e) && (t = goog.html.SafeUrl.INNOCUOUS_STRING))
                : (t = goog.html.SafeUrl.INNOCUOUS_STRING),
              goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(t)
            );
          }),
          (goog.html.SafeUrl.fromTrustedResourceUrl = function (e) {
            return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(
              goog.html.TrustedResourceUrl.unwrap(e)
            );
          }),
          (goog.html.SAFE_URL_PATTERN_ =
            /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i),
          (goog.html.SafeUrl.SAFE_URL_PATTERN = goog.html.SAFE_URL_PATTERN_),
          (goog.html.SafeUrl.sanitize = function (e) {
            return e instanceof goog.html.SafeUrl
              ? e
              : ((e =
                  "object" == typeof e && e.implementsGoogStringTypedString
                    ? e.getTypedStringValue()
                    : String(e)),
                goog.html.SAFE_URL_PATTERN_.test(e) ||
                  (e = goog.html.SafeUrl.INNOCUOUS_STRING),
                goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(
                  e
                ));
          }),
          (goog.html.SafeUrl.sanitizeAssertUnchanged = function (e, t) {
            return e instanceof goog.html.SafeUrl
              ? e
              : ((e =
                  "object" == typeof e && e.implementsGoogStringTypedString
                    ? e.getTypedStringValue()
                    : String(e)),
                t &&
                /^data:/i.test(e) &&
                (t = goog.html.SafeUrl.fromDataUrl(e)).getTypedStringValue() ==
                  e
                  ? t
                  : (goog.asserts.assert(
                      goog.html.SAFE_URL_PATTERN_.test(e),
                      "%s does not match the safe URL pattern",
                      e
                    ) || (e = goog.html.SafeUrl.INNOCUOUS_STRING),
                    goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(
                      e
                    )));
          }),
          (goog.html.SafeUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {}),
          (goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse =
            function (e) {
              return new goog.html.SafeUrl(
                goog.html.SafeUrl.CONSTRUCTOR_TOKEN_PRIVATE_,
                e
              );
            }),
          (goog.html.SafeUrl.ABOUT_BLANK =
            goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(
              "about:blank"
            )),
          (goog.html.SafeUrl.CONSTRUCTOR_TOKEN_PRIVATE_ = {}),
          (goog.html.SafeStyle = function () {
            (this.privateDoNotAccessOrElseSafeStyleWrappedValue_ = ""),
              (this.SAFE_STYLE_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ =
                goog.html.SafeStyle.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_);
          }),
          (goog.html.SafeStyle.prototype.implementsGoogStringTypedString = !0),
          (goog.html.SafeStyle.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {}),
          (goog.html.SafeStyle.fromConstant = function (e) {
            return 0 === (e = goog.string.Const.unwrap(e)).length
              ? goog.html.SafeStyle.EMPTY
              : (goog.asserts.assert(
                  goog.string.internal.endsWith(e, ";"),
                  "Last character of style string is not ';': " + e
                ),
                goog.asserts.assert(
                  goog.string.internal.contains(e, ":"),
                  "Style string must contain at least one ':', to specify a \"name: value\" pair: " +
                    e
                ),
                goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(
                  e
                ));
          }),
          (goog.html.SafeStyle.prototype.getTypedStringValue = function () {
            return this.privateDoNotAccessOrElseSafeStyleWrappedValue_;
          }),
          goog.DEBUG &&
            (goog.html.SafeStyle.prototype.toString = function () {
              return (
                "SafeStyle{" +
                this.privateDoNotAccessOrElseSafeStyleWrappedValue_ +
                "}"
              );
            }),
          (goog.html.SafeStyle.unwrap = function (e) {
            return e instanceof goog.html.SafeStyle &&
              e.constructor === goog.html.SafeStyle &&
              e.SAFE_STYLE_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ ===
                goog.html.SafeStyle.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_
              ? e.privateDoNotAccessOrElseSafeStyleWrappedValue_
              : (goog.asserts.fail(
                  "expected object of type SafeStyle, got '" +
                    e +
                    "' of type " +
                    goog.typeOf(e)
                ),
                "type_error:SafeStyle");
          }),
          (goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse =
            function (e) {
              return new goog.html.SafeStyle().initSecurityPrivateDoNotAccessOrElse_(
                e
              );
            }),
          (goog.html.SafeStyle.prototype.initSecurityPrivateDoNotAccessOrElse_ =
            function (e) {
              return (
                (this.privateDoNotAccessOrElseSafeStyleWrappedValue_ = e), this
              );
            }),
          (goog.html.SafeStyle.EMPTY =
            goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(
              ""
            )),
          (goog.html.SafeStyle.INNOCUOUS_STRING = "zClosurez"),
          (goog.html.SafeStyle.create = function (e) {
            var t,
              o = "";
            for (t in e) {
              if (!/^[-_a-zA-Z0-9]+$/.test(t))
                throw Error("Name allows only [-_a-zA-Z0-9], got: " + t);
              var r = e[t];
              null != r &&
                (o +=
                  t +
                  ":" +
                  (r = Array.isArray(r)
                    ? goog.array
                        .map(r, goog.html.SafeStyle.sanitizePropertyValue_)
                        .join(" ")
                    : goog.html.SafeStyle.sanitizePropertyValue_(r)) +
                  ";");
            }
            return o
              ? goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(
                  o
                )
              : goog.html.SafeStyle.EMPTY;
          }),
          (goog.html.SafeStyle.sanitizePropertyValue_ = function (e) {
            if (e instanceof goog.html.SafeUrl)
              return (
                'url("' +
                goog.html.SafeUrl.unwrap(e)
                  .replace(/</g, "%3c")
                  .replace(/[\\"]/g, "\\$&") +
                '")'
              );
            if (
              ((e =
                e instanceof goog.string.Const
                  ? goog.string.Const.unwrap(e)
                  : goog.html.SafeStyle.sanitizePropertyValueString_(
                      String(e)
                    )),
              /[{;}]/.test(e))
            )
              throw new goog.asserts.AssertionError(
                "Value does not allow [{;}], got: %s.",
                [e]
              );
            return e;
          }),
          (goog.html.SafeStyle.sanitizePropertyValueString_ = function (e) {
            var t = e
              .replace(goog.html.SafeStyle.FUNCTIONS_RE_, "$1")
              .replace(goog.html.SafeStyle.FUNCTIONS_RE_, "$1")
              .replace(goog.html.SafeStyle.URL_RE_, "url");
            return goog.html.SafeStyle.VALUE_RE_.test(t)
              ? goog.html.SafeStyle.COMMENT_RE_.test(e)
                ? (goog.asserts.fail(
                    "String value disallows comments, got: " + e
                  ),
                  goog.html.SafeStyle.INNOCUOUS_STRING)
                : goog.html.SafeStyle.hasBalancedQuotes_(e)
                ? goog.html.SafeStyle.hasBalancedSquareBrackets_(e)
                  ? goog.html.SafeStyle.sanitizeUrl_(e)
                  : (goog.asserts.fail(
                      "String value requires balanced square brackets and one identifier per pair of brackets, got: " +
                        e
                    ),
                    goog.html.SafeStyle.INNOCUOUS_STRING)
                : (goog.asserts.fail(
                    "String value requires balanced quotes, got: " + e
                  ),
                  goog.html.SafeStyle.INNOCUOUS_STRING)
              : (goog.asserts.fail(
                  "String value allows only " +
                    goog.html.SafeStyle.VALUE_ALLOWED_CHARS_ +
                    " and simple functions, got: " +
                    e
                ),
                goog.html.SafeStyle.INNOCUOUS_STRING);
          }),
          (goog.html.SafeStyle.hasBalancedQuotes_ = function (e) {
            for (var t = !0, o = !0, r = 0; r < e.length; r++) {
              var n = e.charAt(r);
              "'" == n && o ? (t = !t) : '"' == n && t && (o = !o);
            }
            return t && o;
          }),
          (goog.html.SafeStyle.hasBalancedSquareBrackets_ = function (e) {
            for (var t = !0, o = /^[-_a-zA-Z0-9]$/, r = 0; r < e.length; r++) {
              var n = e.charAt(r);
              if ("]" == n) {
                if (t) return !1;
                t = !0;
              } else if ("[" == n) {
                if (!t) return !1;
                t = !1;
              } else if (!t && !o.test(n)) return !1;
            }
            return t;
          }),
          (goog.html.SafeStyle.VALUE_ALLOWED_CHARS_ =
            "[-,.\"'%_!# a-zA-Z0-9\\[\\]]"),
          (goog.html.SafeStyle.VALUE_RE_ = new RegExp(
            "^" + goog.html.SafeStyle.VALUE_ALLOWED_CHARS_ + "+$"
          )),
          (goog.html.SafeStyle.URL_RE_ =
            /\b(url\([ \t\n]*)('[ -&(-\[\]-~]*'|"[ !#-\[\]-~]*"|[!#-&*-\[\]-~]*)([ \t\n]*\))/g),
          (goog.html.SafeStyle.ALLOWED_FUNCTIONS_ =
            "calc cubic-bezier fit-content hsl hsla linear-gradient matrix minmax repeat rgb rgba (rotate|scale|translate)(X|Y|Z|3d)?".split(
              " "
            )),
          (goog.html.SafeStyle.FUNCTIONS_RE_ = new RegExp(
            "\\b(" +
              goog.html.SafeStyle.ALLOWED_FUNCTIONS_.join("|") +
              ")\\([-+*/0-9a-z.%\\[\\], ]+\\)",
            "g"
          )),
          (goog.html.SafeStyle.COMMENT_RE_ = /\/\*/),
          (goog.html.SafeStyle.sanitizeUrl_ = function (e) {
            return e.replace(
              goog.html.SafeStyle.URL_RE_,
              function (e, t, o, r) {
                var n = "";
                return (
                  (o = o.replace(/^(['"])(.*)\1$/, function (e, t, o) {
                    return (n = t), o;
                  })),
                  (e = goog.html.SafeUrl.sanitize(o).getTypedStringValue()),
                  t + n + e + n + r
                );
              }
            );
          }),
          (goog.html.SafeStyle.concat = function (e) {
            var t = "",
              o = function (e) {
                Array.isArray(e)
                  ? goog.array.forEach(e, o)
                  : (t += goog.html.SafeStyle.unwrap(e));
              };
            return (
              goog.array.forEach(arguments, o),
              t
                ? goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(
                    t
                  )
                : goog.html.SafeStyle.EMPTY
            );
          }),
          (goog.html.SafeStyleSheet = function () {
            (this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_ = ""),
              (this.SAFE_STYLE_SHEET_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ =
                goog.html.SafeStyleSheet.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_);
          }),
          (goog.html.SafeStyleSheet.prototype.implementsGoogStringTypedString =
            !0),
          (goog.html.SafeStyleSheet.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ =
            {}),
          (goog.html.SafeStyleSheet.createRule = function (e, t) {
            if (goog.string.internal.contains(e, "<"))
              throw Error("Selector does not allow '<', got: " + e);
            var o = e.replace(/('|")((?!\1)[^\r\n\f\\]|\\[\s\S])*\1/g, "");
            if (!/^[-_a-zA-Z0-9#.:* ,>+~[\]()=^$|]+$/.test(o))
              throw Error(
                "Selector allows only [-_a-zA-Z0-9#.:* ,>+~[\\]()=^$|] and strings, got: " +
                  e
              );
            if (!goog.html.SafeStyleSheet.hasBalancedBrackets_(o))
              throw Error("() and [] in selector must be balanced, got: " + e);
            return (
              t instanceof goog.html.SafeStyle ||
                (t = goog.html.SafeStyle.create(t)),
              (e =
                e +
                "{" +
                goog.html.SafeStyle.unwrap(t).replace(/</g, "\\3C ") +
                "}"),
              goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(
                e
              )
            );
          }),
          (goog.html.SafeStyleSheet.hasBalancedBrackets_ = function (e) {
            for (
              var t = { "(": ")", "[": "]" }, o = [], r = 0;
              r < e.length;
              r++
            ) {
              var n = e[r];
              if (t[n]) o.push(t[n]);
              else if (goog.object.contains(t, n) && o.pop() != n) return !1;
            }
            return 0 == o.length;
          }),
          (goog.html.SafeStyleSheet.concat = function (e) {
            var t = "",
              o = function (e) {
                Array.isArray(e)
                  ? goog.array.forEach(e, o)
                  : (t += goog.html.SafeStyleSheet.unwrap(e));
              };
            return (
              goog.array.forEach(arguments, o),
              goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(
                t
              )
            );
          }),
          (goog.html.SafeStyleSheet.fromConstant = function (e) {
            return 0 === (e = goog.string.Const.unwrap(e)).length
              ? goog.html.SafeStyleSheet.EMPTY
              : (goog.asserts.assert(
                  !goog.string.internal.contains(e, "<"),
                  "Forbidden '<' character in style sheet string: " + e
                ),
                goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(
                  e
                ));
          }),
          (goog.html.SafeStyleSheet.prototype.getTypedStringValue =
            function () {
              return this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_;
            }),
          goog.DEBUG &&
            (goog.html.SafeStyleSheet.prototype.toString = function () {
              return (
                "SafeStyleSheet{" +
                this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_ +
                "}"
              );
            }),
          (goog.html.SafeStyleSheet.unwrap = function (e) {
            return e instanceof goog.html.SafeStyleSheet &&
              e.constructor === goog.html.SafeStyleSheet &&
              e.SAFE_STYLE_SHEET_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ ===
                goog.html.SafeStyleSheet.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_
              ? e.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_
              : (goog.asserts.fail(
                  "expected object of type SafeStyleSheet, got '" +
                    e +
                    "' of type " +
                    goog.typeOf(e)
                ),
                "type_error:SafeStyleSheet");
          }),
          (goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse =
            function (e) {
              return new goog.html.SafeStyleSheet().initSecurityPrivateDoNotAccessOrElse_(
                e
              );
            }),
          (goog.html.SafeStyleSheet.prototype.initSecurityPrivateDoNotAccessOrElse_ =
            function (e) {
              return (
                (this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_ = e),
                this
              );
            }),
          (goog.html.SafeStyleSheet.EMPTY =
            goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(
              ""
            )),
          (goog.labs = {}),
          (goog.labs.userAgent = {}),
          (goog.labs.userAgent.util = {}),
          (goog.labs.userAgent.util.getNativeUserAgentString_ = function () {
            var e = goog.labs.userAgent.util.getNavigator_();
            return e && (e = e.userAgent) ? e : "";
          }),
          (goog.labs.userAgent.util.getNavigator_ = function () {
            return goog.global.navigator;
          }),
          (goog.labs.userAgent.util.userAgent_ =
            goog.labs.userAgent.util.getNativeUserAgentString_()),
          (goog.labs.userAgent.util.setUserAgent = function (e) {
            goog.labs.userAgent.util.userAgent_ =
              e || goog.labs.userAgent.util.getNativeUserAgentString_();
          }),
          (goog.labs.userAgent.util.getUserAgent = function () {
            return goog.labs.userAgent.util.userAgent_;
          }),
          (goog.labs.userAgent.util.matchUserAgent = function (e) {
            var t = goog.labs.userAgent.util.getUserAgent();
            return goog.string.internal.contains(t, e);
          }),
          (goog.labs.userAgent.util.matchUserAgentIgnoreCase = function (e) {
            var t = goog.labs.userAgent.util.getUserAgent();
            return goog.string.internal.caseInsensitiveContains(t, e);
          }),
          (goog.labs.userAgent.util.extractVersionTuples = function (e) {
            for (
              var t, o = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g, r = [];
              (t = o.exec(e));

            )
              r.push([t[1], t[2], t[3] || void 0]);
            return r;
          }),
          (goog.labs.userAgent.browser = {}),
          (goog.labs.userAgent.browser.matchOpera_ = function () {
            return goog.labs.userAgent.util.matchUserAgent("Opera");
          }),
          (goog.labs.userAgent.browser.matchIE_ = function () {
            return (
              goog.labs.userAgent.util.matchUserAgent("Trident") ||
              goog.labs.userAgent.util.matchUserAgent("MSIE")
            );
          }),
          (goog.labs.userAgent.browser.matchEdgeHtml_ = function () {
            return goog.labs.userAgent.util.matchUserAgent("Edge");
          }),
          (goog.labs.userAgent.browser.matchEdgeChromium_ = function () {
            return goog.labs.userAgent.util.matchUserAgent("Edg/");
          }),
          (goog.labs.userAgent.browser.matchOperaChromium_ = function () {
            return goog.labs.userAgent.util.matchUserAgent("OPR");
          }),
          (goog.labs.userAgent.browser.matchFirefox_ = function () {
            return (
              goog.labs.userAgent.util.matchUserAgent("Firefox") ||
              goog.labs.userAgent.util.matchUserAgent("FxiOS")
            );
          }),
          (goog.labs.userAgent.browser.matchSafari_ = function () {
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
          }),
          (goog.labs.userAgent.browser.matchCoast_ = function () {
            return goog.labs.userAgent.util.matchUserAgent("Coast");
          }),
          (goog.labs.userAgent.browser.matchIosWebview_ = function () {
            return (
              (goog.labs.userAgent.util.matchUserAgent("iPad") ||
                goog.labs.userAgent.util.matchUserAgent("iPhone")) &&
              !goog.labs.userAgent.browser.matchSafari_() &&
              !goog.labs.userAgent.browser.matchChrome_() &&
              !goog.labs.userAgent.browser.matchCoast_() &&
              !goog.labs.userAgent.browser.matchFirefox_() &&
              goog.labs.userAgent.util.matchUserAgent("AppleWebKit")
            );
          }),
          (goog.labs.userAgent.browser.matchChrome_ = function () {
            return (
              (goog.labs.userAgent.util.matchUserAgent("Chrome") ||
                goog.labs.userAgent.util.matchUserAgent("CriOS")) &&
              !goog.labs.userAgent.browser.matchEdgeHtml_()
            );
          }),
          (goog.labs.userAgent.browser.matchAndroidBrowser_ = function () {
            return (
              goog.labs.userAgent.util.matchUserAgent("Android") &&
              !(
                goog.labs.userAgent.browser.isChrome() ||
                goog.labs.userAgent.browser.isFirefox() ||
                goog.labs.userAgent.browser.isOpera() ||
                goog.labs.userAgent.browser.isSilk()
              )
            );
          }),
          (goog.labs.userAgent.browser.isOpera =
            goog.labs.userAgent.browser.matchOpera_),
          (goog.labs.userAgent.browser.isIE =
            goog.labs.userAgent.browser.matchIE_),
          (goog.labs.userAgent.browser.isEdge =
            goog.labs.userAgent.browser.matchEdgeHtml_),
          (goog.labs.userAgent.browser.isEdgeChromium =
            goog.labs.userAgent.browser.matchEdgeChromium_),
          (goog.labs.userAgent.browser.isOperaChromium =
            goog.labs.userAgent.browser.matchOperaChromium_),
          (goog.labs.userAgent.browser.isFirefox =
            goog.labs.userAgent.browser.matchFirefox_),
          (goog.labs.userAgent.browser.isSafari =
            goog.labs.userAgent.browser.matchSafari_),
          (goog.labs.userAgent.browser.isCoast =
            goog.labs.userAgent.browser.matchCoast_),
          (goog.labs.userAgent.browser.isIosWebview =
            goog.labs.userAgent.browser.matchIosWebview_),
          (goog.labs.userAgent.browser.isChrome =
            goog.labs.userAgent.browser.matchChrome_),
          (goog.labs.userAgent.browser.isAndroidBrowser =
            goog.labs.userAgent.browser.matchAndroidBrowser_),
          (goog.labs.userAgent.browser.isSilk = function () {
            return goog.labs.userAgent.util.matchUserAgent("Silk");
          }),
          (goog.labs.userAgent.browser.getVersion = function () {
            function e(e) {
              return (e = goog.array.find(e, r)), o[e] || "";
            }
            var t = goog.labs.userAgent.util.getUserAgent();
            if (goog.labs.userAgent.browser.isIE())
              return goog.labs.userAgent.browser.getIEVersion_(t);
            t = goog.labs.userAgent.util.extractVersionTuples(t);
            var o = {};
            goog.array.forEach(t, function (e) {
              o[e[0]] = e[1];
            });
            var r = goog.partial(goog.object.containsKey, o);
            return goog.labs.userAgent.browser.isOpera()
              ? e(["Version", "Opera"])
              : goog.labs.userAgent.browser.isEdge()
              ? e(["Edge"])
              : goog.labs.userAgent.browser.isEdgeChromium()
              ? e(["Edg"])
              : goog.labs.userAgent.browser.isChrome()
              ? e(["Chrome", "CriOS", "HeadlessChrome"])
              : ((t = t[2]) && t[1]) || "";
          }),
          (goog.labs.userAgent.browser.isVersionOrHigher = function (e) {
            return (
              0 <=
              goog.string.internal.compareVersions(
                goog.labs.userAgent.browser.getVersion(),
                e
              )
            );
          }),
          (goog.labs.userAgent.browser.getIEVersion_ = function (e) {
            var t = /rv: *([\d\.]*)/.exec(e);
            if (t && t[1]) return t[1];
            t = "";
            var o = /MSIE +([\d\.]+)/.exec(e);
            if (o && o[1])
              if (((e = /Trident\/(\d.\d)/.exec(e)), "7.0" == o[1]))
                if (e && e[1])
                  switch (e[1]) {
                    case "4.0":
                      t = "8.0";
                      break;
                    case "5.0":
                      t = "9.0";
                      break;
                    case "6.0":
                      t = "10.0";
                      break;
                    case "7.0":
                      t = "11.0";
                  }
                else t = "7.0";
              else t = o[1];
            return t;
          }),
          (goog.html.SafeHtml = function () {
            (this.privateDoNotAccessOrElseSafeHtmlWrappedValue_ = ""),
              (this.SAFE_HTML_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ =
                goog.html.SafeHtml.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_),
              (this.dir_ = null);
          }),
          (goog.html.SafeHtml.ENABLE_ERROR_MESSAGES = goog.DEBUG),
          (goog.html.SafeHtml.SUPPORT_STYLE_ATTRIBUTE = !0),
          (goog.html.SafeHtml.prototype.implementsGoogI18nBidiDirectionalString =
            !0),
          (goog.html.SafeHtml.prototype.getDirection = function () {
            return this.dir_;
          }),
          (goog.html.SafeHtml.prototype.implementsGoogStringTypedString = !0),
          (goog.html.SafeHtml.prototype.getTypedStringValue = function () {
            return this.privateDoNotAccessOrElseSafeHtmlWrappedValue_.toString();
          }),
          goog.DEBUG &&
            (goog.html.SafeHtml.prototype.toString = function () {
              return (
                "SafeHtml{" +
                this.privateDoNotAccessOrElseSafeHtmlWrappedValue_ +
                "}"
              );
            }),
          (goog.html.SafeHtml.unwrap = function (e) {
            return goog.html.SafeHtml.unwrapTrustedHTML(e).toString();
          }),
          (goog.html.SafeHtml.unwrapTrustedHTML = function (e) {
            return e instanceof goog.html.SafeHtml &&
              e.constructor === goog.html.SafeHtml &&
              e.SAFE_HTML_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ ===
                goog.html.SafeHtml.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_
              ? e.privateDoNotAccessOrElseSafeHtmlWrappedValue_
              : (goog.asserts.fail(
                  "expected object of type SafeHtml, got '" +
                    e +
                    "' of type " +
                    goog.typeOf(e)
                ),
                "type_error:SafeHtml");
          }),
          (goog.html.SafeHtml.htmlEscape = function (e) {
            if (e instanceof goog.html.SafeHtml) return e;
            var t = "object" == typeof e,
              o = null;
            return (
              t &&
                e.implementsGoogI18nBidiDirectionalString &&
                (o = e.getDirection()),
              (e =
                t && e.implementsGoogStringTypedString
                  ? e.getTypedStringValue()
                  : String(e)),
              goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(
                goog.string.internal.htmlEscape(e),
                o
              )
            );
          }),
          (goog.html.SafeHtml.htmlEscapePreservingNewlines = function (e) {
            return e instanceof goog.html.SafeHtml
              ? e
              : ((e = goog.html.SafeHtml.htmlEscape(e)),
                goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(
                  goog.string.internal.newLineToBr(
                    goog.html.SafeHtml.unwrap(e)
                  ),
                  e.getDirection()
                ));
          }),
          (goog.html.SafeHtml.htmlEscapePreservingNewlinesAndSpaces = function (
            e
          ) {
            return e instanceof goog.html.SafeHtml
              ? e
              : ((e = goog.html.SafeHtml.htmlEscape(e)),
                goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(
                  goog.string.internal.whitespaceEscape(
                    goog.html.SafeHtml.unwrap(e)
                  ),
                  e.getDirection()
                ));
          }),
          (goog.html.SafeHtml.from = goog.html.SafeHtml.htmlEscape),
          (goog.html.SafeHtml.comment = function (e) {
            return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(
              "\x3c!--" + goog.string.internal.htmlEscape(e) + "--\x3e",
              null
            );
          }),
          (goog.html.SafeHtml.VALID_NAMES_IN_TAG_ = /^[a-zA-Z0-9-]+$/),
          (goog.html.SafeHtml.URL_ATTRIBUTES_ = {
            action: !0,
            cite: !0,
            data: !0,
            formaction: !0,
            href: !0,
            manifest: !0,
            poster: !0,
            src: !0,
          }),
          (goog.html.SafeHtml.NOT_ALLOWED_TAG_NAMES_ = {
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
          }),
          (goog.html.SafeHtml.create = function (e, t, o) {
            return (
              goog.html.SafeHtml.verifyTagName(String(e)),
              goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse(
                String(e),
                t,
                o
              )
            );
          }),
          (goog.html.SafeHtml.verifyTagName = function (e) {
            if (!goog.html.SafeHtml.VALID_NAMES_IN_TAG_.test(e))
              throw Error(
                goog.html.SafeHtml.ENABLE_ERROR_MESSAGES
                  ? "Invalid tag name <" + e + ">."
                  : ""
              );
            if (e.toUpperCase() in goog.html.SafeHtml.NOT_ALLOWED_TAG_NAMES_)
              throw Error(
                goog.html.SafeHtml.ENABLE_ERROR_MESSAGES
                  ? "Tag name <" + e + "> is not allowed for SafeHtml."
                  : ""
              );
          }),
          (goog.html.SafeHtml.createIframe = function (e, t, o, r) {
            e && goog.html.TrustedResourceUrl.unwrap(e);
            var n = {};
            return (
              (n.src = e || null),
              (n.srcdoc = t && goog.html.SafeHtml.unwrap(t)),
              (e = goog.html.SafeHtml.combineAttributes(n, { sandbox: "" }, o)),
              goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse(
                "iframe",
                e,
                r
              )
            );
          }),
          (goog.html.SafeHtml.createSandboxIframe = function (e, t, o, r) {
            if (!goog.html.SafeHtml.canUseSandboxIframe())
              throw Error(
                goog.html.SafeHtml.ENABLE_ERROR_MESSAGES
                  ? "The browser does not support sandboxed iframes."
                  : ""
              );
            var n = {};
            return (
              (n.src = e
                ? goog.html.SafeUrl.unwrap(goog.html.SafeUrl.sanitize(e))
                : null),
              (n.srcdoc = t || null),
              (n.sandbox = ""),
              (e = goog.html.SafeHtml.combineAttributes(n, {}, o)),
              goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse(
                "iframe",
                e,
                r
              )
            );
          }),
          (goog.html.SafeHtml.canUseSandboxIframe = function () {
            return (
              goog.global.HTMLIFrameElement &&
              "sandbox" in goog.global.HTMLIFrameElement.prototype
            );
          }),
          (goog.html.SafeHtml.createScriptSrc = function (e, t) {
            return (
              goog.html.TrustedResourceUrl.unwrap(e),
              (e = goog.html.SafeHtml.combineAttributes({ src: e }, {}, t)),
              goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse(
                "script",
                e
              )
            );
          }),
          (goog.html.SafeHtml.createScript = function (e, t) {
            for (var o in t) {
              var r = o.toLowerCase();
              if ("language" == r || "src" == r || "text" == r || "type" == r)
                throw Error(
                  goog.html.SafeHtml.ENABLE_ERROR_MESSAGES
                    ? 'Cannot set "' + r + '" attribute'
                    : ""
                );
            }
            for (o = "", e = goog.array.concat(e), r = 0; r < e.length; r++)
              o += goog.html.SafeScript.unwrap(e[r]);
            return (
              (e =
                goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(
                  o,
                  goog.i18n.bidi.Dir.NEUTRAL
                )),
              goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse(
                "script",
                t,
                e
              )
            );
          }),
          (goog.html.SafeHtml.createStyle = function (e, t) {
            t = goog.html.SafeHtml.combineAttributes(
              { type: "text/css" },
              {},
              t
            );
            var o = "";
            e = goog.array.concat(e);
            for (var r = 0; r < e.length; r++)
              o += goog.html.SafeStyleSheet.unwrap(e[r]);
            return (
              (e =
                goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(
                  o,
                  goog.i18n.bidi.Dir.NEUTRAL
                )),
              goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse(
                "style",
                t,
                e
              )
            );
          }),
          (goog.html.SafeHtml.createMetaRefresh = function (e, t) {
            return (
              (e = goog.html.SafeUrl.unwrap(goog.html.SafeUrl.sanitize(e))),
              (goog.labs.userAgent.browser.isIE() ||
                goog.labs.userAgent.browser.isEdge()) &&
                goog.string.internal.contains(e, ";") &&
                (e = "'" + e.replace(/'/g, "%27") + "'"),
              goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse(
                "meta",
                { "http-equiv": "refresh", content: (t || 0) + "; url=" + e }
              )
            );
          }),
          (goog.html.SafeHtml.getAttrNameAndValue_ = function (e, t, o) {
            if (o instanceof goog.string.Const) o = goog.string.Const.unwrap(o);
            else if ("style" == t.toLowerCase()) {
              if (!goog.html.SafeHtml.SUPPORT_STYLE_ATTRIBUTE)
                throw Error(
                  goog.html.SafeHtml.ENABLE_ERROR_MESSAGES
                    ? 'Attribute "style" not supported.'
                    : ""
                );
              o = goog.html.SafeHtml.getStyleValue_(o);
            } else {
              if (/^on/i.test(t))
                throw Error(
                  goog.html.SafeHtml.ENABLE_ERROR_MESSAGES
                    ? 'Attribute "' +
                        t +
                        '" requires goog.string.Const value, "' +
                        o +
                        '" given.'
                    : ""
                );
              if (t.toLowerCase() in goog.html.SafeHtml.URL_ATTRIBUTES_)
                if (o instanceof goog.html.TrustedResourceUrl)
                  o = goog.html.TrustedResourceUrl.unwrap(o);
                else if (o instanceof goog.html.SafeUrl)
                  o = goog.html.SafeUrl.unwrap(o);
                else {
                  if ("string" != typeof o)
                    throw Error(
                      goog.html.SafeHtml.ENABLE_ERROR_MESSAGES
                        ? 'Attribute "' +
                            t +
                            '" on tag "' +
                            e +
                            '" requires goog.html.SafeUrl, goog.string.Const, or string, value "' +
                            o +
                            '" given.'
                        : ""
                    );
                  o = goog.html.SafeUrl.sanitize(o).getTypedStringValue();
                }
            }
            return (
              o.implementsGoogStringTypedString &&
                (o = o.getTypedStringValue()),
              goog.asserts.assert(
                "string" == typeof o || "number" == typeof o,
                "String or number value expected, got " +
                  typeof o +
                  " with value: " +
                  o
              ),
              t + '="' + goog.string.internal.htmlEscape(String(o)) + '"'
            );
          }),
          (goog.html.SafeHtml.getStyleValue_ = function (e) {
            if (!goog.isObject(e))
              throw Error(
                goog.html.SafeHtml.ENABLE_ERROR_MESSAGES
                  ? 'The "style" attribute requires goog.html.SafeStyle or map of style properties, ' +
                      typeof e +
                      " given: " +
                      e
                  : ""
              );
            return (
              e instanceof goog.html.SafeStyle ||
                (e = goog.html.SafeStyle.create(e)),
              goog.html.SafeStyle.unwrap(e)
            );
          }),
          (goog.html.SafeHtml.createWithDir = function (e, t, o, r) {
            return ((t = goog.html.SafeHtml.create(t, o, r)).dir_ = e), t;
          }),
          (goog.html.SafeHtml.join = function (e, t) {
            var o = (e = goog.html.SafeHtml.htmlEscape(e)).getDirection(),
              r = [],
              n = function (e) {
                Array.isArray(e)
                  ? goog.array.forEach(e, n)
                  : ((e = goog.html.SafeHtml.htmlEscape(e)),
                    r.push(goog.html.SafeHtml.unwrap(e)),
                    (e = e.getDirection()),
                    o == goog.i18n.bidi.Dir.NEUTRAL
                      ? (o = e)
                      : e != goog.i18n.bidi.Dir.NEUTRAL &&
                        o != e &&
                        (o = null));
              };
            return (
              goog.array.forEach(t, n),
              goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(
                r.join(goog.html.SafeHtml.unwrap(e)),
                o
              )
            );
          }),
          (goog.html.SafeHtml.concat = function (e) {
            return goog.html.SafeHtml.join(
              goog.html.SafeHtml.EMPTY,
              Array.prototype.slice.call(arguments)
            );
          }),
          (goog.html.SafeHtml.concatWithDir = function (e, t) {
            var o = goog.html.SafeHtml.concat(goog.array.slice(arguments, 1));
            return (o.dir_ = e), o;
          }),
          (goog.html.SafeHtml.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {}),
          (goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse =
            function (e, t) {
              return new goog.html.SafeHtml().initSecurityPrivateDoNotAccessOrElse_(
                e,
                t
              );
            }),
          (goog.html.SafeHtml.prototype.initSecurityPrivateDoNotAccessOrElse_ =
            function (e, t) {
              return (
                (this.privateDoNotAccessOrElseSafeHtmlWrappedValue_ = goog.html
                  .trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY
                  ? goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY.createHTML(
                      e
                    )
                  : e),
                (this.dir_ = t),
                this
              );
            }),
          (goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse =
            function (e, t, o) {
              var r = null,
                n = "<" + e + goog.html.SafeHtml.stringifyAttributes(e, t);
              return (
                null == o ? (o = []) : Array.isArray(o) || (o = [o]),
                goog.dom.tags.isVoidTag(e.toLowerCase())
                  ? (goog.asserts.assert(
                      !o.length,
                      "Void tag <" + e + "> does not allow content."
                    ),
                    (n += ">"))
                  : ((r = goog.html.SafeHtml.concat(o)),
                    (n += ">" + goog.html.SafeHtml.unwrap(r) + "</" + e + ">"),
                    (r = r.getDirection())),
                (e = t && t.dir) &&
                  (r = /^(ltr|rtl|auto)$/i.test(e)
                    ? goog.i18n.bidi.Dir.NEUTRAL
                    : null),
                goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(
                  n,
                  r
                )
              );
            }),
          (goog.html.SafeHtml.stringifyAttributes = function (e, t) {
            var o = "";
            if (t)
              for (var r in t) {
                if (!goog.html.SafeHtml.VALID_NAMES_IN_TAG_.test(r))
                  throw Error(
                    goog.html.SafeHtml.ENABLE_ERROR_MESSAGES
                      ? 'Invalid attribute name "' + r + '".'
                      : ""
                  );
                var n = t[r];
                null != n &&
                  (o += " " + goog.html.SafeHtml.getAttrNameAndValue_(e, r, n));
              }
            return o;
          }),
          (goog.html.SafeHtml.combineAttributes = function (e, t, o) {
            var r,
              n = {};
            for (r in e)
              goog.asserts.assert(r.toLowerCase() == r, "Must be lower case"),
                (n[r] = e[r]);
            for (r in t)
              goog.asserts.assert(r.toLowerCase() == r, "Must be lower case"),
                (n[r] = t[r]);
            if (o)
              for (r in o) {
                var i = r.toLowerCase();
                if (i in e)
                  throw Error(
                    goog.html.SafeHtml.ENABLE_ERROR_MESSAGES
                      ? 'Cannot override "' +
                          i +
                          '" attribute, got "' +
                          r +
                          '" with value "' +
                          o[r] +
                          '"'
                      : ""
                  );
                i in t && delete n[i], (n[r] = o[r]);
              }
            return n;
          }),
          (goog.html.SafeHtml.DOCTYPE_HTML =
            goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(
              "<!DOCTYPE html>",
              goog.i18n.bidi.Dir.NEUTRAL
            )),
          (goog.html.SafeHtml.EMPTY =
            goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(
              "",
              goog.i18n.bidi.Dir.NEUTRAL
            )),
          (goog.html.SafeHtml.BR =
            goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(
              "<br>",
              goog.i18n.bidi.Dir.NEUTRAL
            )),
          (goog.html.uncheckedconversions = {}),
          (goog.html.uncheckedconversions.safeHtmlFromStringKnownToSatisfyTypeContract =
            function (e, t, o) {
              return (
                goog.asserts.assertString(
                  goog.string.Const.unwrap(e),
                  "must provide justification"
                ),
                goog.asserts.assert(
                  !goog.string.internal.isEmptyOrWhitespace(
                    goog.string.Const.unwrap(e)
                  ),
                  "must provide non-empty justification"
                ),
                goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(
                  t,
                  o || null
                )
              );
            }),
          (goog.html.uncheckedconversions.safeScriptFromStringKnownToSatisfyTypeContract =
            function (e, t) {
              return (
                goog.asserts.assertString(
                  goog.string.Const.unwrap(e),
                  "must provide justification"
                ),
                goog.asserts.assert(
                  !goog.string.internal.isEmptyOrWhitespace(
                    goog.string.Const.unwrap(e)
                  ),
                  "must provide non-empty justification"
                ),
                goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(
                  t
                )
              );
            }),
          (goog.html.uncheckedconversions.safeStyleFromStringKnownToSatisfyTypeContract =
            function (e, t) {
              return (
                goog.asserts.assertString(
                  goog.string.Const.unwrap(e),
                  "must provide justification"
                ),
                goog.asserts.assert(
                  !goog.string.internal.isEmptyOrWhitespace(
                    goog.string.Const.unwrap(e)
                  ),
                  "must provide non-empty justification"
                ),
                goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(
                  t
                )
              );
            }),
          (goog.html.uncheckedconversions.safeStyleSheetFromStringKnownToSatisfyTypeContract =
            function (e, t) {
              return (
                goog.asserts.assertString(
                  goog.string.Const.unwrap(e),
                  "must provide justification"
                ),
                goog.asserts.assert(
                  !goog.string.internal.isEmptyOrWhitespace(
                    goog.string.Const.unwrap(e)
                  ),
                  "must provide non-empty justification"
                ),
                goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(
                  t
                )
              );
            }),
          (goog.html.uncheckedconversions.safeUrlFromStringKnownToSatisfyTypeContract =
            function (e, t) {
              return (
                goog.asserts.assertString(
                  goog.string.Const.unwrap(e),
                  "must provide justification"
                ),
                goog.asserts.assert(
                  !goog.string.internal.isEmptyOrWhitespace(
                    goog.string.Const.unwrap(e)
                  ),
                  "must provide non-empty justification"
                ),
                goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(
                  t
                )
              );
            }),
          (goog.html.uncheckedconversions.trustedResourceUrlFromStringKnownToSatisfyTypeContract =
            function (e, t) {
              return (
                goog.asserts.assertString(
                  goog.string.Const.unwrap(e),
                  "must provide justification"
                ),
                goog.asserts.assert(
                  !goog.string.internal.isEmptyOrWhitespace(
                    goog.string.Const.unwrap(e)
                  ),
                  "must provide non-empty justification"
                ),
                goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(
                  t
                )
              );
            }),
          (goog.dom.safe = {}),
          (goog.dom.safe.InsertAdjacentHtmlPosition = {
            AFTERBEGIN: "afterbegin",
            AFTEREND: "afterend",
            BEFOREBEGIN: "beforebegin",
            BEFOREEND: "beforeend",
          }),
          (goog.dom.safe.insertAdjacentHtml = function (e, t, o) {
            e.insertAdjacentHTML(t, goog.html.SafeHtml.unwrapTrustedHTML(o));
          }),
          (goog.dom.safe.SET_INNER_HTML_DISALLOWED_TAGS_ = {
            MATH: !0,
            SCRIPT: !0,
            STYLE: !0,
            SVG: !0,
            TEMPLATE: !0,
          }),
          (goog.dom.safe.isInnerHtmlCleanupRecursive_ =
            goog.functions.cacheReturnValue(function () {
              if (goog.DEBUG && "undefined" == typeof document) return !1;
              var e = document.createElement("div"),
                t = document.createElement("div");
              return (
                t.appendChild(document.createElement("div")),
                e.appendChild(t),
                !(goog.DEBUG && !e.firstChild) &&
                  ((t = e.firstChild.firstChild),
                  (e.innerHTML = goog.html.SafeHtml.unwrapTrustedHTML(
                    goog.html.SafeHtml.EMPTY
                  )),
                  !t.parentElement)
              );
            })),
          (goog.dom.safe.unsafeSetInnerHtmlDoNotUseOrElse = function (e, t) {
            if (goog.dom.safe.isInnerHtmlCleanupRecursive_())
              for (; e.lastChild; ) e.removeChild(e.lastChild);
            e.innerHTML = goog.html.SafeHtml.unwrapTrustedHTML(t);
          }),
          (goog.dom.safe.setInnerHtml = function (e, t) {
            if (goog.asserts.ENABLE_ASSERTS) {
              var o = e.tagName.toUpperCase();
              if (goog.dom.safe.SET_INNER_HTML_DISALLOWED_TAGS_[o])
                throw Error(
                  "goog.dom.safe.setInnerHtml cannot be used to set content of " +
                    e.tagName +
                    "."
                );
            }
            goog.dom.safe.unsafeSetInnerHtmlDoNotUseOrElse(e, t);
          }),
          (goog.dom.safe.setOuterHtml = function (e, t) {
            e.outerHTML = goog.html.SafeHtml.unwrapTrustedHTML(t);
          }),
          (goog.dom.safe.setFormElementAction = function (e, t) {
            (t =
              t instanceof goog.html.SafeUrl
                ? t
                : goog.html.SafeUrl.sanitizeAssertUnchanged(t)),
              (goog.dom.asserts.assertIsHTMLFormElement(e).action =
                goog.html.SafeUrl.unwrap(t));
          }),
          (goog.dom.safe.setButtonFormAction = function (e, t) {
            (t =
              t instanceof goog.html.SafeUrl
                ? t
                : goog.html.SafeUrl.sanitizeAssertUnchanged(t)),
              (goog.dom.asserts.assertIsHTMLButtonElement(e).formAction =
                goog.html.SafeUrl.unwrap(t));
          }),
          (goog.dom.safe.setInputFormAction = function (e, t) {
            (t =
              t instanceof goog.html.SafeUrl
                ? t
                : goog.html.SafeUrl.sanitizeAssertUnchanged(t)),
              (goog.dom.asserts.assertIsHTMLInputElement(e).formAction =
                goog.html.SafeUrl.unwrap(t));
          }),
          (goog.dom.safe.setStyle = function (e, t) {
            e.style.cssText = goog.html.SafeStyle.unwrap(t);
          }),
          (goog.dom.safe.documentWrite = function (e, t) {
            e.write(goog.html.SafeHtml.unwrapTrustedHTML(t));
          }),
          (goog.dom.safe.setAnchorHref = function (e, t) {
            goog.dom.asserts.assertIsHTMLAnchorElement(e),
              (t =
                t instanceof goog.html.SafeUrl
                  ? t
                  : goog.html.SafeUrl.sanitizeAssertUnchanged(t)),
              (e.href = goog.html.SafeUrl.unwrap(t));
          }),
          (goog.dom.safe.setImageSrc = function (e, t) {
            if (
              (goog.dom.asserts.assertIsHTMLImageElement(e),
              !(t instanceof goog.html.SafeUrl))
            ) {
              var o = /^data:image\//i.test(t);
              t = goog.html.SafeUrl.sanitizeAssertUnchanged(t, o);
            }
            e.src = goog.html.SafeUrl.unwrap(t);
          }),
          (goog.dom.safe.setAudioSrc = function (e, t) {
            if (
              (goog.dom.asserts.assertIsHTMLAudioElement(e),
              !(t instanceof goog.html.SafeUrl))
            ) {
              var o = /^data:audio\//i.test(t);
              t = goog.html.SafeUrl.sanitizeAssertUnchanged(t, o);
            }
            e.src = goog.html.SafeUrl.unwrap(t);
          }),
          (goog.dom.safe.setVideoSrc = function (e, t) {
            if (
              (goog.dom.asserts.assertIsHTMLVideoElement(e),
              !(t instanceof goog.html.SafeUrl))
            ) {
              var o = /^data:video\//i.test(t);
              t = goog.html.SafeUrl.sanitizeAssertUnchanged(t, o);
            }
            e.src = goog.html.SafeUrl.unwrap(t);
          }),
          (goog.dom.safe.setEmbedSrc = function (e, t) {
            goog.dom.asserts.assertIsHTMLEmbedElement(e),
              (e.src = goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(t));
          }),
          (goog.dom.safe.setFrameSrc = function (e, t) {
            goog.dom.asserts.assertIsHTMLFrameElement(e),
              (e.src = goog.html.TrustedResourceUrl.unwrap(t));
          }),
          (goog.dom.safe.setIframeSrc = function (e, t) {
            goog.dom.asserts.assertIsHTMLIFrameElement(e),
              (e.src = goog.html.TrustedResourceUrl.unwrap(t));
          }),
          (goog.dom.safe.setIframeSrcdoc = function (e, t) {
            goog.dom.asserts.assertIsHTMLIFrameElement(e),
              (e.srcdoc = goog.html.SafeHtml.unwrapTrustedHTML(t));
          }),
          (goog.dom.safe.setLinkHrefAndRel = function (e, t, o) {
            goog.dom.asserts.assertIsHTMLLinkElement(e),
              (e.rel = o),
              goog.string.internal.caseInsensitiveContains(o, "stylesheet")
                ? (goog.asserts.assert(
                    t instanceof goog.html.TrustedResourceUrl,
                    'URL must be TrustedResourceUrl because "rel" contains "stylesheet"'
                  ),
                  (e.href = goog.html.TrustedResourceUrl.unwrap(t)))
                : (e.href =
                    t instanceof goog.html.TrustedResourceUrl
                      ? goog.html.TrustedResourceUrl.unwrap(t)
                      : t instanceof goog.html.SafeUrl
                      ? goog.html.SafeUrl.unwrap(t)
                      : goog.html.SafeUrl.unwrap(
                          goog.html.SafeUrl.sanitizeAssertUnchanged(t)
                        ));
          }),
          (goog.dom.safe.setObjectData = function (e, t) {
            goog.dom.asserts.assertIsHTMLObjectElement(e),
              (e.data = goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(t));
          }),
          (goog.dom.safe.setScriptSrc = function (e, t) {
            goog.dom.asserts.assertIsHTMLScriptElement(e),
              (e.src = goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(t)),
              (t = goog.getScriptNonce()) && e.setAttribute("nonce", t);
          }),
          (goog.dom.safe.setScriptContent = function (e, t) {
            goog.dom.asserts.assertIsHTMLScriptElement(e),
              (e.text = goog.html.SafeScript.unwrapTrustedScript(t)),
              (t = goog.getScriptNonce()) && e.setAttribute("nonce", t);
          }),
          (goog.dom.safe.setLocationHref = function (e, t) {
            goog.dom.asserts.assertIsLocation(e),
              (t =
                t instanceof goog.html.SafeUrl
                  ? t
                  : goog.html.SafeUrl.sanitizeAssertUnchanged(t)),
              (e.href = goog.html.SafeUrl.unwrap(t));
          }),
          (goog.dom.safe.assignLocation = function (e, t) {
            goog.dom.asserts.assertIsLocation(e),
              (t =
                t instanceof goog.html.SafeUrl
                  ? t
                  : goog.html.SafeUrl.sanitizeAssertUnchanged(t)),
              e.assign(goog.html.SafeUrl.unwrap(t));
          }),
          (goog.dom.safe.replaceLocation = function (e, t) {
            (t =
              t instanceof goog.html.SafeUrl
                ? t
                : goog.html.SafeUrl.sanitizeAssertUnchanged(t)),
              e.replace(goog.html.SafeUrl.unwrap(t));
          }),
          (goog.dom.safe.openInWindow = function (e, t, o, r, n) {
            return (
              (e =
                e instanceof goog.html.SafeUrl
                  ? e
                  : goog.html.SafeUrl.sanitizeAssertUnchanged(e)),
              (t = t || goog.global),
              (o =
                o instanceof goog.string.Const
                  ? goog.string.Const.unwrap(o)
                  : o || ""),
              t.open(goog.html.SafeUrl.unwrap(e), o, r, n)
            );
          }),
          (goog.dom.safe.parseFromStringHtml = function (e, t) {
            return goog.dom.safe.parseFromString(e, t, "text/html");
          }),
          (goog.dom.safe.parseFromString = function (e, t, o) {
            return e.parseFromString(
              goog.html.SafeHtml.unwrapTrustedHTML(t),
              o
            );
          }),
          (goog.dom.safe.createImageFromBlob = function (e) {
            if (!/^image\/.*/g.test(e.type))
              throw Error(
                "goog.dom.safe.createImageFromBlob only accepts MIME type image/.*."
              );
            var t = goog.global.URL.createObjectURL(e);
            return (
              ((e = new goog.global.Image()).onload = function () {
                goog.global.URL.revokeObjectURL(t);
              }),
              goog.dom.safe.setImageSrc(
                e,
                goog.html.uncheckedconversions.safeUrlFromStringKnownToSatisfyTypeContract(
                  goog.string.Const.from("Image blob URL."),
                  t
                )
              ),
              e
            );
          }),
          (goog.string.DETECT_DOUBLE_ESCAPING = !1),
          (goog.string.FORCE_NON_DOM_HTML_UNESCAPING = !1),
          (goog.string.Unicode = { NBSP: " " }),
          (goog.string.startsWith = goog.string.internal.startsWith),
          (goog.string.endsWith = goog.string.internal.endsWith),
          (goog.string.caseInsensitiveStartsWith =
            goog.string.internal.caseInsensitiveStartsWith),
          (goog.string.caseInsensitiveEndsWith =
            goog.string.internal.caseInsensitiveEndsWith),
          (goog.string.caseInsensitiveEquals =
            goog.string.internal.caseInsensitiveEquals),
          (goog.string.subs = function (e, t) {
            for (
              var o = e.split("%s"),
                r = "",
                n = Array.prototype.slice.call(arguments, 1);
              n.length && 1 < o.length;

            )
              r += o.shift() + n.shift();
            return r + o.join("%s");
          }),
          (goog.string.collapseWhitespace = function (e) {
            return e.replace(/[\s\xa0]+/g, " ").replace(/^\s+|\s+$/g, "");
          }),
          (goog.string.isEmptyOrWhitespace =
            goog.string.internal.isEmptyOrWhitespace),
          (goog.string.isEmptyString = function (e) {
            return 0 == e.length;
          }),
          (goog.string.isEmpty = goog.string.isEmptyOrWhitespace),
          (goog.string.isEmptyOrWhitespaceSafe = function (e) {
            return goog.string.isEmptyOrWhitespace(goog.string.makeSafe(e));
          }),
          (goog.string.isEmptySafe = goog.string.isEmptyOrWhitespaceSafe),
          (goog.string.isBreakingWhitespace = function (e) {
            return !/[^\t\n\r ]/.test(e);
          }),
          (goog.string.isAlpha = function (e) {
            return !/[^a-zA-Z]/.test(e);
          }),
          (goog.string.isNumeric = function (e) {
            return !/[^0-9]/.test(e);
          }),
          (goog.string.isAlphaNumeric = function (e) {
            return !/[^a-zA-Z0-9]/.test(e);
          }),
          (goog.string.isSpace = function (e) {
            return " " == e;
          }),
          (goog.string.isUnicodeChar = function (e) {
            return (
              (1 == e.length && " " <= e && "~" >= e) || ("" <= e && "�" >= e)
            );
          }),
          (goog.string.stripNewlines = function (e) {
            return e.replace(/(\r\n|\r|\n)+/g, " ");
          }),
          (goog.string.canonicalizeNewlines = function (e) {
            return e.replace(/(\r\n|\r|\n)/g, "\n");
          }),
          (goog.string.normalizeWhitespace = function (e) {
            return e.replace(/\xa0|\s/g, " ");
          }),
          (goog.string.normalizeSpaces = function (e) {
            return e.replace(/\xa0|[ \t]+/g, " ");
          }),
          (goog.string.collapseBreakingSpaces = function (e) {
            return e
              .replace(/[\t\r\n ]+/g, " ")
              .replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "");
          }),
          (goog.string.trim = goog.string.internal.trim),
          (goog.string.trimLeft = function (e) {
            return e.replace(/^[\s\xa0]+/, "");
          }),
          (goog.string.trimRight = function (e) {
            return e.replace(/[\s\xa0]+$/, "");
          }),
          (goog.string.caseInsensitiveCompare =
            goog.string.internal.caseInsensitiveCompare),
          (goog.string.numberAwareCompare_ = function (e, t, o) {
            if (e == t) return 0;
            if (!e) return -1;
            if (!t) return 1;
            for (
              var r = e.toLowerCase().match(o),
                n = t.toLowerCase().match(o),
                i = Math.min(r.length, n.length),
                a = 0;
              a < i;
              a++
            ) {
              o = r[a];
              var s = n[a];
              if (o != s)
                return (
                  (e = parseInt(o, 10)),
                  !isNaN(e) && ((t = parseInt(s, 10)), !isNaN(t) && e - t)
                    ? e - t
                    : o < s
                    ? -1
                    : 1
                );
            }
            return r.length != n.length ? r.length - n.length : e < t ? -1 : 1;
          }),
          (goog.string.intAwareCompare = function (e, t) {
            return goog.string.numberAwareCompare_(e, t, /\d+|\D+/g);
          }),
          (goog.string.floatAwareCompare = function (e, t) {
            return goog.string.numberAwareCompare_(e, t, /\d+|\.\d+|\D+/g);
          }),
          (goog.string.numerateCompare = goog.string.floatAwareCompare),
          (goog.string.urlEncode = function (e) {
            return encodeURIComponent(String(e));
          }),
          (goog.string.urlDecode = function (e) {
            return decodeURIComponent(e.replace(/\+/g, " "));
          }),
          (goog.string.newLineToBr = goog.string.internal.newLineToBr),
          (goog.string.htmlEscape = function (e, t) {
            return (
              (e = goog.string.internal.htmlEscape(e, t)),
              goog.string.DETECT_DOUBLE_ESCAPING &&
                (e = e.replace(goog.string.E_RE_, "&#101;")),
              e
            );
          }),
          (goog.string.E_RE_ = /e/g),
          (goog.string.unescapeEntities = function (e) {
            return goog.string.contains(e, "&")
              ? !goog.string.FORCE_NON_DOM_HTML_UNESCAPING &&
                "document" in goog.global
                ? goog.string.unescapeEntitiesUsingDom_(e)
                : goog.string.unescapePureXmlEntities_(e)
              : e;
          }),
          (goog.string.unescapeEntitiesWithDocument = function (e, t) {
            return goog.string.contains(e, "&")
              ? goog.string.unescapeEntitiesUsingDom_(e, t)
              : e;
          }),
          (goog.string.unescapeEntitiesUsingDom_ = function (e, t) {
            var o = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"' },
              r = t
                ? t.createElement("div")
                : goog.global.document.createElement("div");
            return e.replace(goog.string.HTML_ENTITY_PATTERN_, function (e, t) {
              var n = o[e];
              return (
                n ||
                ("#" == t.charAt(0) &&
                  ((t = Number("0" + t.substr(1))),
                  isNaN(t) || (n = String.fromCharCode(t))),
                n ||
                  (goog.dom.safe.setInnerHtml(
                    r,
                    goog.html.uncheckedconversions.safeHtmlFromStringKnownToSatisfyTypeContract(
                      goog.string.Const.from("Single HTML entity."),
                      e + " "
                    )
                  ),
                  (n = r.firstChild.nodeValue.slice(0, -1))),
                (o[e] = n))
              );
            });
          }),
          (goog.string.unescapePureXmlEntities_ = function (e) {
            return e.replace(/&([^;]+);/g, function (e, t) {
              switch (t) {
                case "amp":
                  return "&";
                case "lt":
                  return "<";
                case "gt":
                  return ">";
                case "quot":
                  return '"';
                default:
                  return "#" != t.charAt(0) ||
                    ((t = Number("0" + t.substr(1))), isNaN(t))
                    ? e
                    : String.fromCharCode(t);
              }
            });
          }),
          (goog.string.HTML_ENTITY_PATTERN_ = /&([^;\s<&]+);?/g),
          (goog.string.whitespaceEscape = function (e, t) {
            return goog.string.newLineToBr(e.replace(/  /g, " &#160;"), t);
          }),
          (goog.string.preserveSpaces = function (e) {
            return e.replace(/(^|[\n ]) /g, "$1" + goog.string.Unicode.NBSP);
          }),
          (goog.string.stripQuotes = function (e, t) {
            for (var o = t.length, r = 0; r < o; r++) {
              var n = 1 == o ? t : t.charAt(r);
              if (e.charAt(0) == n && e.charAt(e.length - 1) == n)
                return e.substring(1, e.length - 1);
            }
            return e;
          }),
          (goog.string.truncate = function (e, t, o) {
            return (
              o && (e = goog.string.unescapeEntities(e)),
              e.length > t && (e = e.substring(0, t - 3) + "..."),
              o && (e = goog.string.htmlEscape(e)),
              e
            );
          }),
          (goog.string.truncateMiddle = function (e, t, o, r) {
            if (
              (o && (e = goog.string.unescapeEntities(e)), r && e.length > t)
            ) {
              r > t && (r = t);
              var n = e.length - r;
              e = e.substring(0, t - r) + "..." + e.substring(n);
            } else
              e.length > t &&
                ((r = Math.floor(t / 2)),
                (n = e.length - r),
                (e = e.substring(0, r + (t % 2)) + "..." + e.substring(n)));
            return o && (e = goog.string.htmlEscape(e)), e;
          }),
          (goog.string.specialEscapeChars_ = {
            "\0": "\\0",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\v": "\\x0B",
            '"': '\\"',
            "\\": "\\\\",
            "<": "\\u003C",
          }),
          (goog.string.jsEscapeCache_ = { "'": "\\'" }),
          (goog.string.quote = function (e) {
            e = String(e);
            for (var t = ['"'], o = 0; o < e.length; o++) {
              var r = e.charAt(o),
                n = r.charCodeAt(0);
              t[o + 1] =
                goog.string.specialEscapeChars_[r] ||
                (31 < n && 127 > n ? r : goog.string.escapeChar(r));
            }
            return t.push('"'), t.join("");
          }),
          (goog.string.escapeString = function (e) {
            for (var t = [], o = 0; o < e.length; o++)
              t[o] = goog.string.escapeChar(e.charAt(o));
            return t.join("");
          }),
          (goog.string.escapeChar = function (e) {
            if (e in goog.string.jsEscapeCache_)
              return goog.string.jsEscapeCache_[e];
            if (e in goog.string.specialEscapeChars_)
              return (goog.string.jsEscapeCache_[e] =
                goog.string.specialEscapeChars_[e]);
            var t = e.charCodeAt(0);
            if (31 < t && 127 > t) var o = e;
            else
              256 > t
                ? ((o = "\\x"), (16 > t || 256 < t) && (o += "0"))
                : ((o = "\\u"), 4096 > t && (o += "0")),
                (o += t.toString(16).toUpperCase());
            return (goog.string.jsEscapeCache_[e] = o);
          }),
          (goog.string.contains = goog.string.internal.contains),
          (goog.string.caseInsensitiveContains =
            goog.string.internal.caseInsensitiveContains),
          (goog.string.countOf = function (e, t) {
            return e && t ? e.split(t).length - 1 : 0;
          }),
          (goog.string.removeAt = function (e, t, o) {
            var r = e;
            return (
              0 <= t &&
                t < e.length &&
                0 < o &&
                (r = e.substr(0, t) + e.substr(t + o, e.length - t - o)),
              r
            );
          }),
          (goog.string.remove = function (e, t) {
            return e.replace(t, "");
          }),
          (goog.string.removeAll = function (e, t) {
            return (
              (t = new RegExp(goog.string.regExpEscape(t), "g")),
              e.replace(t, "")
            );
          }),
          (goog.string.replaceAll = function (e, t, o) {
            return (
              (t = new RegExp(goog.string.regExpEscape(t), "g")),
              e.replace(t, o.replace(/\$/g, "$$$$"))
            );
          }),
          (goog.string.regExpEscape = function (e) {
            return String(e)
              .replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1")
              .replace(/\x08/g, "\\x08");
          }),
          (goog.string.repeat = String.prototype.repeat
            ? function (e, t) {
                return e.repeat(t);
              }
            : function (e, t) {
                return Array(t + 1).join(e);
              }),
          (goog.string.padNumber = function (e, t, o) {
            return (
              -1 ==
                (o = (e = void 0 !== o ? e.toFixed(o) : String(e)).indexOf(
                  "."
                )) && (o = e.length),
              goog.string.repeat("0", Math.max(0, t - o)) + e
            );
          }),
          (goog.string.makeSafe = function (e) {
            return null == e ? "" : String(e);
          }),
          (goog.string.buildString = function (e) {
            return Array.prototype.join.call(arguments, "");
          }),
          (goog.string.getRandomString = function () {
            return (
              Math.floor(2147483648 * Math.random()).toString(36) +
              Math.abs(
                Math.floor(2147483648 * Math.random()) ^ goog.now()
              ).toString(36)
            );
          }),
          (goog.string.compareVersions = goog.string.internal.compareVersions),
          (goog.string.hashCode = function (e) {
            for (var t = 0, o = 0; o < e.length; ++o)
              t = (31 * t + e.charCodeAt(o)) >>> 0;
            return t;
          }),
          (goog.string.uniqueStringCounter_ = (2147483648 * Math.random()) | 0),
          (goog.string.createUniqueString = function () {
            return "goog_" + goog.string.uniqueStringCounter_++;
          }),
          (goog.string.toNumber = function (e) {
            var t = Number(e);
            return 0 == t && goog.string.isEmptyOrWhitespace(e) ? NaN : t;
          }),
          (goog.string.isLowerCamelCase = function (e) {
            return /^[a-z]+([A-Z][a-z]*)*$/.test(e);
          }),
          (goog.string.isUpperCamelCase = function (e) {
            return /^([A-Z][a-z]*)+$/.test(e);
          }),
          (goog.string.toCamelCase = function (e) {
            return String(e).replace(/\-([a-z])/g, function (e, t) {
              return t.toUpperCase();
            });
          }),
          (goog.string.toSelectorCase = function (e) {
            return String(e)
              .replace(/([A-Z])/g, "-$1")
              .toLowerCase();
          }),
          (goog.string.toTitleCase = function (e, t) {
            return (
              (t = "string" == typeof t ? goog.string.regExpEscape(t) : "\\s"),
              e.replace(
                new RegExp("(^" + (t ? "|[" + t + "]+" : "") + ")([a-z])", "g"),
                function (e, t, o) {
                  return t + o.toUpperCase();
                }
              )
            );
          }),
          (goog.string.capitalize = function (e) {
            return (
              String(e.charAt(0)).toUpperCase() +
              String(e.substr(1)).toLowerCase()
            );
          }),
          (goog.string.parseInt = function (e) {
            return (
              isFinite(e) && (e = String(e)),
              "string" == typeof e
                ? /^\s*-?0x/i.test(e)
                  ? parseInt(e, 16)
                  : parseInt(e, 10)
                : NaN
            );
          }),
          (goog.string.splitLimit = function (e, t, o) {
            e = e.split(t);
            for (var r = []; 0 < o && e.length; ) r.push(e.shift()), o--;
            return e.length && r.push(e.join(t)), r;
          }),
          (goog.string.lastComponent = function (e, t) {
            if (!t) return e;
            "string" == typeof t && (t = [t]);
            for (var o = -1, r = 0; r < t.length; r++)
              if ("" != t[r]) {
                var n = e.lastIndexOf(t[r]);
                n > o && (o = n);
              }
            return -1 == o ? e : e.slice(o + 1);
          }),
          (goog.string.editDistance = function (e, t) {
            var o = [],
              r = [];
            if (e == t) return 0;
            if (!e.length || !t.length) return Math.max(e.length, t.length);
            for (var n = 0; n < t.length + 1; n++) o[n] = n;
            for (n = 0; n < e.length; n++) {
              r[0] = n + 1;
              for (var i = 0; i < t.length; i++)
                r[i + 1] = Math.min(
                  r[i] + 1,
                  o[i + 1] + 1,
                  o[i] + Number(e[n] != t[i])
                );
              for (i = 0; i < o.length; i++) o[i] = r[i];
            }
            return r[t.length];
          }),
          (goog.labs.userAgent.engine = {}),
          (goog.labs.userAgent.engine.isPresto = function () {
            return goog.labs.userAgent.util.matchUserAgent("Presto");
          }),
          (goog.labs.userAgent.engine.isTrident = function () {
            return (
              goog.labs.userAgent.util.matchUserAgent("Trident") ||
              goog.labs.userAgent.util.matchUserAgent("MSIE")
            );
          }),
          (goog.labs.userAgent.engine.isEdge = function () {
            return goog.labs.userAgent.util.matchUserAgent("Edge");
          }),
          (goog.labs.userAgent.engine.isWebKit = function () {
            return (
              goog.labs.userAgent.util.matchUserAgentIgnoreCase("WebKit") &&
              !goog.labs.userAgent.engine.isEdge()
            );
          }),
          (goog.labs.userAgent.engine.isGecko = function () {
            return (
              goog.labs.userAgent.util.matchUserAgent("Gecko") &&
              !goog.labs.userAgent.engine.isWebKit() &&
              !goog.labs.userAgent.engine.isTrident() &&
              !goog.labs.userAgent.engine.isEdge()
            );
          }),
          (goog.labs.userAgent.engine.getVersion = function () {
            var e = goog.labs.userAgent.util.getUserAgent();
            if (e) {
              e = goog.labs.userAgent.util.extractVersionTuples(e);
              var t,
                o = goog.labs.userAgent.engine.getEngineTuple_(e);
              if (o)
                return "Gecko" == o[0]
                  ? goog.labs.userAgent.engine.getVersionForKey_(e, "Firefox")
                  : o[1];
              if (
                (e = e[0]) &&
                (t = e[2]) &&
                (t = /Trident\/([^\s;]+)/.exec(t))
              )
                return t[1];
            }
            return "";
          }),
          (goog.labs.userAgent.engine.getEngineTuple_ = function (e) {
            if (!goog.labs.userAgent.engine.isEdge()) return e[1];
            for (var t = 0; t < e.length; t++) {
              var o = e[t];
              if ("Edge" == o[0]) return o;
            }
          }),
          (goog.labs.userAgent.engine.isVersionOrHigher = function (e) {
            return (
              0 <=
              goog.string.compareVersions(
                goog.labs.userAgent.engine.getVersion(),
                e
              )
            );
          }),
          (goog.labs.userAgent.engine.getVersionForKey_ = function (e, t) {
            return (
              ((e = goog.array.find(e, function (e) {
                return t == e[0];
              })) &&
                e[1]) ||
              ""
            );
          }),
          (goog.labs.userAgent.platform = {}),
          (goog.labs.userAgent.platform.isAndroid = function () {
            return goog.labs.userAgent.util.matchUserAgent("Android");
          }),
          (goog.labs.userAgent.platform.isIpod = function () {
            return goog.labs.userAgent.util.matchUserAgent("iPod");
          }),
          (goog.labs.userAgent.platform.isIphone = function () {
            return (
              goog.labs.userAgent.util.matchUserAgent("iPhone") &&
              !goog.labs.userAgent.util.matchUserAgent("iPod") &&
              !goog.labs.userAgent.util.matchUserAgent("iPad")
            );
          }),
          (goog.labs.userAgent.platform.isIpad = function () {
            return goog.labs.userAgent.util.matchUserAgent("iPad");
          }),
          (goog.labs.userAgent.platform.isIos = function () {
            return (
              goog.labs.userAgent.platform.isIphone() ||
              goog.labs.userAgent.platform.isIpad() ||
              goog.labs.userAgent.platform.isIpod()
            );
          }),
          (goog.labs.userAgent.platform.isMacintosh = function () {
            return goog.labs.userAgent.util.matchUserAgent("Macintosh");
          }),
          (goog.labs.userAgent.platform.isLinux = function () {
            return goog.labs.userAgent.util.matchUserAgent("Linux");
          }),
          (goog.labs.userAgent.platform.isWindows = function () {
            return goog.labs.userAgent.util.matchUserAgent("Windows");
          }),
          (goog.labs.userAgent.platform.isChromeOS = function () {
            return goog.labs.userAgent.util.matchUserAgent("CrOS");
          }),
          (goog.labs.userAgent.platform.isChromecast = function () {
            return goog.labs.userAgent.util.matchUserAgent("CrKey");
          }),
          (goog.labs.userAgent.platform.isKaiOS = function () {
            return goog.labs.userAgent.util.matchUserAgentIgnoreCase("KaiOS");
          }),
          (goog.labs.userAgent.platform.getVersion = function () {
            var e = goog.labs.userAgent.util.getUserAgent(),
              t = "";
            return (
              goog.labs.userAgent.platform.isWindows()
                ? (t = (e = (t = /Windows (?:NT|Phone) ([0-9.]+)/).exec(e))
                    ? e[1]
                    : "0.0")
                : goog.labs.userAgent.platform.isIos()
                ? (t =
                    (e = (t = /(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/).exec(
                      e
                    )) && e[1].replace(/_/g, "."))
                : goog.labs.userAgent.platform.isMacintosh()
                ? (t = (e = (t = /Mac OS X ([0-9_.]+)/).exec(e))
                    ? e[1].replace(/_/g, ".")
                    : "10")
                : goog.labs.userAgent.platform.isKaiOS()
                ? (t = (e = (t = /(?:KaiOS)\/(\S+)/i).exec(e)) && e[1])
                : goog.labs.userAgent.platform.isAndroid()
                ? (t = (e = (t = /Android\s+([^\);]+)(\)|;)/).exec(e)) && e[1])
                : goog.labs.userAgent.platform.isChromeOS() &&
                  (t =
                    (e = (t = /(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/).exec(
                      e
                    )) && e[1]),
              t || ""
            );
          }),
          (goog.labs.userAgent.platform.isVersionOrHigher = function (e) {
            return (
              0 <=
              goog.string.compareVersions(
                goog.labs.userAgent.platform.getVersion(),
                e
              )
            );
          }),
          (goog.reflect = {}),
          (goog.reflect.object = function (e, t) {
            return t;
          }),
          (goog.reflect.objectProperty = function (e, t) {
            return e;
          }),
          (goog.reflect.sinkValue = function (e) {
            return goog.reflect.sinkValue[" "](e), e;
          }),
          (goog.reflect.sinkValue[" "] = goog.nullFunction),
          (goog.reflect.canAccessProperty = function (e, t) {
            try {
              return goog.reflect.sinkValue(e[t]), !0;
            } catch (e) {}
            return !1;
          }),
          (goog.reflect.cache = function (e, t, o, r) {
            return (
              (r = r ? r(t) : t),
              Object.prototype.hasOwnProperty.call(e, r) ? e[r] : (e[r] = o(t))
            );
          }),
          (goog.userAgent = {}),
          (goog.userAgent.ASSUME_IE = !1),
          (goog.userAgent.ASSUME_EDGE = !1),
          (goog.userAgent.ASSUME_GECKO = !1),
          (goog.userAgent.ASSUME_WEBKIT = !1),
          (goog.userAgent.ASSUME_MOBILE_WEBKIT = !1),
          (goog.userAgent.ASSUME_OPERA = !1),
          (goog.userAgent.ASSUME_ANY_VERSION = !1),
          (goog.userAgent.BROWSER_KNOWN_ =
            goog.userAgent.ASSUME_IE ||
            goog.userAgent.ASSUME_EDGE ||
            goog.userAgent.ASSUME_GECKO ||
            goog.userAgent.ASSUME_MOBILE_WEBKIT ||
            goog.userAgent.ASSUME_WEBKIT ||
            goog.userAgent.ASSUME_OPERA),
          (goog.userAgent.getUserAgentString = function () {
            return goog.labs.userAgent.util.getUserAgent();
          }),
          (goog.userAgent.getNavigatorTyped = function () {
            return goog.global.navigator || null;
          }),
          (goog.userAgent.getNavigator = function () {
            return goog.userAgent.getNavigatorTyped();
          }),
          (goog.userAgent.OPERA = goog.userAgent.BROWSER_KNOWN_
            ? goog.userAgent.ASSUME_OPERA
            : goog.labs.userAgent.browser.isOpera()),
          (goog.userAgent.IE = goog.userAgent.BROWSER_KNOWN_
            ? goog.userAgent.ASSUME_IE
            : goog.labs.userAgent.browser.isIE()),
          (goog.userAgent.EDGE = goog.userAgent.BROWSER_KNOWN_
            ? goog.userAgent.ASSUME_EDGE
            : goog.labs.userAgent.engine.isEdge()),
          (goog.userAgent.EDGE_OR_IE =
            goog.userAgent.EDGE || goog.userAgent.IE),
          (goog.userAgent.GECKO = goog.userAgent.BROWSER_KNOWN_
            ? goog.userAgent.ASSUME_GECKO
            : goog.labs.userAgent.engine.isGecko()),
          (goog.userAgent.WEBKIT = goog.userAgent.BROWSER_KNOWN_
            ? goog.userAgent.ASSUME_WEBKIT ||
              goog.userAgent.ASSUME_MOBILE_WEBKIT
            : goog.labs.userAgent.engine.isWebKit()),
          (goog.userAgent.isMobile_ = function () {
            return (
              goog.userAgent.WEBKIT &&
              goog.labs.userAgent.util.matchUserAgent("Mobile")
            );
          }),
          (goog.userAgent.MOBILE =
            goog.userAgent.ASSUME_MOBILE_WEBKIT || goog.userAgent.isMobile_()),
          (goog.userAgent.SAFARI = goog.userAgent.WEBKIT),
          (goog.userAgent.determinePlatform_ = function () {
            var e = goog.userAgent.getNavigatorTyped();
            return (e && e.platform) || "";
          }),
          (goog.userAgent.PLATFORM = goog.userAgent.determinePlatform_()),
          (goog.userAgent.ASSUME_MAC = !1),
          (goog.userAgent.ASSUME_WINDOWS = !1),
          (goog.userAgent.ASSUME_LINUX = !1),
          (goog.userAgent.ASSUME_X11 = !1),
          (goog.userAgent.ASSUME_ANDROID = !1),
          (goog.userAgent.ASSUME_IPHONE = !1),
          (goog.userAgent.ASSUME_IPAD = !1),
          (goog.userAgent.ASSUME_IPOD = !1),
          (goog.userAgent.ASSUME_KAIOS = !1),
          (goog.userAgent.PLATFORM_KNOWN_ =
            goog.userAgent.ASSUME_MAC ||
            goog.userAgent.ASSUME_WINDOWS ||
            goog.userAgent.ASSUME_LINUX ||
            goog.userAgent.ASSUME_X11 ||
            goog.userAgent.ASSUME_ANDROID ||
            goog.userAgent.ASSUME_IPHONE ||
            goog.userAgent.ASSUME_IPAD ||
            goog.userAgent.ASSUME_IPOD),
          (goog.userAgent.MAC = goog.userAgent.PLATFORM_KNOWN_
            ? goog.userAgent.ASSUME_MAC
            : goog.labs.userAgent.platform.isMacintosh()),
          (goog.userAgent.WINDOWS = goog.userAgent.PLATFORM_KNOWN_
            ? goog.userAgent.ASSUME_WINDOWS
            : goog.labs.userAgent.platform.isWindows()),
          (goog.userAgent.isLegacyLinux_ = function () {
            return (
              goog.labs.userAgent.platform.isLinux() ||
              goog.labs.userAgent.platform.isChromeOS()
            );
          }),
          (goog.userAgent.LINUX = goog.userAgent.PLATFORM_KNOWN_
            ? goog.userAgent.ASSUME_LINUX
            : goog.userAgent.isLegacyLinux_()),
          (goog.userAgent.isX11_ = function () {
            var e = goog.userAgent.getNavigatorTyped();
            return !!e && goog.string.contains(e.appVersion || "", "X11");
          }),
          (goog.userAgent.X11 = goog.userAgent.PLATFORM_KNOWN_
            ? goog.userAgent.ASSUME_X11
            : goog.userAgent.isX11_()),
          (goog.userAgent.ANDROID = goog.userAgent.PLATFORM_KNOWN_
            ? goog.userAgent.ASSUME_ANDROID
            : goog.labs.userAgent.platform.isAndroid()),
          (goog.userAgent.IPHONE = goog.userAgent.PLATFORM_KNOWN_
            ? goog.userAgent.ASSUME_IPHONE
            : goog.labs.userAgent.platform.isIphone()),
          (goog.userAgent.IPAD = goog.userAgent.PLATFORM_KNOWN_
            ? goog.userAgent.ASSUME_IPAD
            : goog.labs.userAgent.platform.isIpad()),
          (goog.userAgent.IPOD = goog.userAgent.PLATFORM_KNOWN_
            ? goog.userAgent.ASSUME_IPOD
            : goog.labs.userAgent.platform.isIpod()),
          (goog.userAgent.IOS = goog.userAgent.PLATFORM_KNOWN_
            ? goog.userAgent.ASSUME_IPHONE ||
              goog.userAgent.ASSUME_IPAD ||
              goog.userAgent.ASSUME_IPOD
            : goog.labs.userAgent.platform.isIos()),
          (goog.userAgent.KAIOS = goog.userAgent.PLATFORM_KNOWN_
            ? goog.userAgent.ASSUME_KAIOS
            : goog.labs.userAgent.platform.isKaiOS()),
          (goog.userAgent.determineVersion_ = function () {
            var e = "",
              t = goog.userAgent.getVersionRegexResult_();
            return (
              t && (e = t ? t[1] : ""),
              goog.userAgent.IE &&
              null != (t = goog.userAgent.getDocumentMode_()) &&
              t > parseFloat(e)
                ? String(t)
                : e
            );
          }),
          (goog.userAgent.getVersionRegexResult_ = function () {
            var e = goog.userAgent.getUserAgentString();
            return goog.userAgent.GECKO
              ? /rv:([^\);]+)(\)|;)/.exec(e)
              : goog.userAgent.EDGE
              ? /Edge\/([\d\.]+)/.exec(e)
              : goog.userAgent.IE
              ? /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e)
              : goog.userAgent.WEBKIT
              ? /WebKit\/(\S+)/.exec(e)
              : goog.userAgent.OPERA
              ? /(?:Version)[ \/]?(\S+)/.exec(e)
              : void 0;
          }),
          (goog.userAgent.getDocumentMode_ = function () {
            var e = goog.global.document;
            return e ? e.documentMode : void 0;
          }),
          (goog.userAgent.VERSION = goog.userAgent.determineVersion_()),
          (goog.userAgent.compare = function (e, t) {
            return goog.string.compareVersions(e, t);
          }),
          (goog.userAgent.isVersionOrHigherCache_ = {}),
          (goog.userAgent.isVersionOrHigher = function (e) {
            return (
              goog.userAgent.ASSUME_ANY_VERSION ||
              goog.reflect.cache(
                goog.userAgent.isVersionOrHigherCache_,
                e,
                function () {
                  return (
                    0 <= goog.string.compareVersions(goog.userAgent.VERSION, e)
                  );
                }
              )
            );
          }),
          (goog.userAgent.isVersion = goog.userAgent.isVersionOrHigher),
          (goog.userAgent.isDocumentModeOrHigher = function (e) {
            return Number(goog.userAgent.DOCUMENT_MODE) >= e;
          }),
          (goog.userAgent.isDocumentMode =
            goog.userAgent.isDocumentModeOrHigher),
          (goog.userAgent.DOCUMENT_MODE = (function () {
            if (goog.global.document && goog.userAgent.IE) {
              var e = goog.userAgent.getDocumentMode_();
              return e || parseInt(goog.userAgent.VERSION, 10) || void 0;
            }
          })()),
          (goog.userAgent.product = {}),
          (goog.userAgent.product.ASSUME_FIREFOX = !1),
          (goog.userAgent.product.ASSUME_IPHONE = !1),
          (goog.userAgent.product.ASSUME_IPAD = !1),
          (goog.userAgent.product.ASSUME_ANDROID = !1),
          (goog.userAgent.product.ASSUME_CHROME = !1),
          (goog.userAgent.product.ASSUME_SAFARI = !1),
          (goog.userAgent.product.PRODUCT_KNOWN_ =
            goog.userAgent.ASSUME_IE ||
            goog.userAgent.ASSUME_EDGE ||
            goog.userAgent.ASSUME_OPERA ||
            goog.userAgent.product.ASSUME_FIREFOX ||
            goog.userAgent.product.ASSUME_IPHONE ||
            goog.userAgent.product.ASSUME_IPAD ||
            goog.userAgent.product.ASSUME_ANDROID ||
            goog.userAgent.product.ASSUME_CHROME ||
            goog.userAgent.product.ASSUME_SAFARI),
          (goog.userAgent.product.OPERA = goog.userAgent.OPERA),
          (goog.userAgent.product.IE = goog.userAgent.IE),
          (goog.userAgent.product.EDGE = goog.userAgent.EDGE),
          (goog.userAgent.product.FIREFOX = goog.userAgent.product
            .PRODUCT_KNOWN_
            ? goog.userAgent.product.ASSUME_FIREFOX
            : goog.labs.userAgent.browser.isFirefox()),
          (goog.userAgent.product.isIphoneOrIpod_ = function () {
            return (
              goog.labs.userAgent.platform.isIphone() ||
              goog.labs.userAgent.platform.isIpod()
            );
          }),
          (goog.userAgent.product.IPHONE = goog.userAgent.product.PRODUCT_KNOWN_
            ? goog.userAgent.product.ASSUME_IPHONE
            : goog.userAgent.product.isIphoneOrIpod_()),
          (goog.userAgent.product.IPAD = goog.userAgent.product.PRODUCT_KNOWN_
            ? goog.userAgent.product.ASSUME_IPAD
            : goog.labs.userAgent.platform.isIpad()),
          (goog.userAgent.product.ANDROID = goog.userAgent.product
            .PRODUCT_KNOWN_
            ? goog.userAgent.product.ASSUME_ANDROID
            : goog.labs.userAgent.browser.isAndroidBrowser()),
          (goog.userAgent.product.CHROME = goog.userAgent.product.PRODUCT_KNOWN_
            ? goog.userAgent.product.ASSUME_CHROME
            : goog.labs.userAgent.browser.isChrome()),
          (goog.userAgent.product.isSafariDesktop_ = function () {
            return (
              goog.labs.userAgent.browser.isSafari() &&
              !goog.labs.userAgent.platform.isIos()
            );
          });
        (goog.userAgent.product.SAFARI = goog.userAgent.product.PRODUCT_KNOWN_
          ? goog.userAgent.product.ASSUME_SAFARI
          : goog.userAgent.product.isSafariDesktop_()),
          (goog.crypt.base64 = {}),
          (goog.crypt.base64.DEFAULT_ALPHABET_COMMON_ =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"),
          (goog.crypt.base64.ENCODED_VALS =
            goog.crypt.base64.DEFAULT_ALPHABET_COMMON_ + "+/="),
          (goog.crypt.base64.ENCODED_VALS_WEBSAFE =
            goog.crypt.base64.DEFAULT_ALPHABET_COMMON_ + "-_."),
          (goog.crypt.base64.Alphabet = {
            DEFAULT: 0,
            NO_PADDING: 1,
            WEBSAFE: 2,
            WEBSAFE_DOT_PADDING: 3,
            WEBSAFE_NO_PADDING: 4,
          }),
          (goog.crypt.base64.paddingChars_ = "=."),
          (goog.crypt.base64.isPadding_ = function (e) {
            return goog.string.contains(goog.crypt.base64.paddingChars_, e);
          }),
          (goog.crypt.base64.byteToCharMaps_ = {}),
          (goog.crypt.base64.charToByteMap_ = null),
          (goog.crypt.base64.ASSUME_NATIVE_SUPPORT_ =
            goog.userAgent.GECKO ||
            (goog.userAgent.WEBKIT && !goog.userAgent.product.SAFARI) ||
            goog.userAgent.OPERA),
          (goog.crypt.base64.HAS_NATIVE_ENCODE_ =
            goog.crypt.base64.ASSUME_NATIVE_SUPPORT_ ||
            "function" == typeof goog.global.btoa),
          (goog.crypt.base64.HAS_NATIVE_DECODE_ =
            goog.crypt.base64.ASSUME_NATIVE_SUPPORT_ ||
            (!goog.userAgent.product.SAFARI &&
              !goog.userAgent.IE &&
              "function" == typeof goog.global.atob)),
          (goog.crypt.base64.encodeByteArray = function (e, t) {
            goog.asserts.assert(
              goog.isArrayLike(e),
              "encodeByteArray takes an array as a parameter"
            ),
              void 0 === t && (t = goog.crypt.base64.Alphabet.DEFAULT),
              goog.crypt.base64.init_(),
              (t = goog.crypt.base64.byteToCharMaps_[t]);
            for (var o = [], r = 0; r < e.length; r += 3) {
              var n = e[r],
                i = r + 1 < e.length,
                a = i ? e[r + 1] : 0,
                s = r + 2 < e.length,
                g = s ? e[r + 2] : 0,
                l = n >> 2;
              (n = ((3 & n) << 4) | (a >> 4)),
                (a = ((15 & a) << 2) | (g >> 6)),
                (g &= 63),
                s || ((g = 64), i || (a = 64)),
                o.push(t[l], t[n], t[a] || "", t[g] || "");
            }
            return o.join("");
          }),
          (goog.crypt.base64.encodeString = function (e, t) {
            return goog.crypt.base64.HAS_NATIVE_ENCODE_ && !t
              ? goog.global.btoa(e)
              : goog.crypt.base64.encodeByteArray(
                  goog.crypt.stringToByteArray(e),
                  t
                );
          }),
          (goog.crypt.base64.decodeString = function (e, t) {
            if (goog.crypt.base64.HAS_NATIVE_DECODE_ && !t)
              return goog.global.atob(e);
            var o = "";
            return (
              goog.crypt.base64.decodeStringInternal_(e, function (e) {
                o += String.fromCharCode(e);
              }),
              o
            );
          }),
          (goog.crypt.base64.decodeStringToByteArray = function (e, t) {
            var o = [];
            return (
              goog.crypt.base64.decodeStringInternal_(e, function (e) {
                o.push(e);
              }),
              o
            );
          }),
          (goog.crypt.base64.decodeStringToUint8Array = function (e) {
            goog.asserts.assert(
              !goog.userAgent.IE || goog.userAgent.isVersionOrHigher("10"),
              "Browser does not support typed arrays"
            );
            var t = e.length,
              o = (3 * t) / 4;
            o % 3
              ? (o = Math.floor(o))
              : goog.crypt.base64.isPadding_(e[t - 1]) &&
                (o = goog.crypt.base64.isPadding_(e[t - 2]) ? o - 2 : o - 1);
            var r = new Uint8Array(o),
              n = 0;
            return (
              goog.crypt.base64.decodeStringInternal_(e, function (e) {
                r[n++] = e;
              }),
              r.subarray(0, n)
            );
          }),
          (goog.crypt.base64.decodeStringInternal_ = function (e, t) {
            function o(t) {
              for (; r < e.length; ) {
                var o = e.charAt(r++),
                  n = goog.crypt.base64.charToByteMap_[o];
                if (null != n) return n;
                if (!goog.string.isEmptyOrWhitespace(o))
                  throw Error("Unknown base64 encoding at char: " + o);
              }
              return t;
            }
            goog.crypt.base64.init_();
            for (var r = 0; ; ) {
              var n = o(-1),
                i = o(0),
                a = o(64),
                s = o(64);
              if (64 === s && -1 === n) break;
              t((n << 2) | (i >> 4)),
                64 != a &&
                  (t(((i << 4) & 240) | (a >> 2)),
                  64 != s && t(((a << 6) & 192) | s));
            }
          }),
          (goog.crypt.base64.init_ = function () {
            if (!goog.crypt.base64.charToByteMap_) {
              goog.crypt.base64.charToByteMap_ = {};
              for (
                var e = goog.crypt.base64.DEFAULT_ALPHABET_COMMON_.split(""),
                  t = ["+/=", "+/", "-_=", "-_.", "-_"],
                  o = 0;
                5 > o;
                o++
              ) {
                var r = e.concat(t[o].split(""));
                goog.crypt.base64.byteToCharMaps_[o] = r;
                for (var n = 0; n < r.length; n++) {
                  var i = r[n],
                    a = goog.crypt.base64.charToByteMap_[i];
                  void 0 === a
                    ? (goog.crypt.base64.charToByteMap_[i] = n)
                    : goog.asserts.assert(a === n);
                }
              }
            }
          }),
          (jspb.utils = {}),
          (jspb.utils.split64Low = 0),
          (jspb.utils.split64High = 0),
          (jspb.utils.splitUint64 = function (e) {
            var t = e >>> 0;
            (e = Math.floor((e - t) / jspb.BinaryConstants.TWO_TO_32) >>> 0),
              (jspb.utils.split64Low = t),
              (jspb.utils.split64High = e);
          }),
          (jspb.utils.splitInt64 = function (e) {
            var t = 0 > e,
              o = (e = Math.abs(e)) >>> 0;
            (e = Math.floor((e - o) / jspb.BinaryConstants.TWO_TO_32)),
              (e >>>= 0),
              t &&
                ((e = ~e >>> 0),
                4294967295 < (o = 1 + (~o >>> 0)) &&
                  ((o = 0), 4294967295 < ++e && (e = 0))),
              (jspb.utils.split64Low = o),
              (jspb.utils.split64High = e);
          }),
          (jspb.utils.splitZigzag64 = function (e) {
            var t = 0 > e;
            (e = 2 * Math.abs(e)),
              jspb.utils.splitUint64(e),
              (e = jspb.utils.split64Low);
            var o = jspb.utils.split64High;
            t &&
              (0 == e
                ? 0 == o
                  ? (o = e = 4294967295)
                  : (o--, (e = 4294967295))
                : e--),
              (jspb.utils.split64Low = e),
              (jspb.utils.split64High = o);
          }),
          (jspb.utils.splitFloat32 = function (e) {
            var t = 0 > e ? 1 : 0;
            if (0 === (e = t ? -e : e))
              0 < 1 / e
                ? ((jspb.utils.split64High = 0), (jspb.utils.split64Low = 0))
                : ((jspb.utils.split64High = 0),
                  (jspb.utils.split64Low = 2147483648));
            else if (isNaN(e))
              (jspb.utils.split64High = 0),
                (jspb.utils.split64Low = 2147483647);
            else if (e > jspb.BinaryConstants.FLOAT32_MAX)
              (jspb.utils.split64High = 0),
                (jspb.utils.split64Low = ((t << 31) | 2139095040) >>> 0);
            else if (e < jspb.BinaryConstants.FLOAT32_MIN)
              (e = Math.round(e / Math.pow(2, -149))),
                (jspb.utils.split64High = 0),
                (jspb.utils.split64Low = ((t << 31) | e) >>> 0);
            else {
              var o = Math.floor(Math.log(e) / Math.LN2);
              (e *= Math.pow(2, -o)),
                16777216 <=
                  (e = Math.round(e * jspb.BinaryConstants.TWO_TO_23)) && ++o,
                (jspb.utils.split64High = 0),
                (jspb.utils.split64Low =
                  ((t << 31) | ((o + 127) << 23) | (8388607 & e)) >>> 0);
            }
          }),
          (jspb.utils.splitFloat64 = function (e) {
            var t = 0 > e ? 1 : 0;
            if (0 === (e = t ? -e : e))
              (jspb.utils.split64High = 0 < 1 / e ? 0 : 2147483648),
                (jspb.utils.split64Low = 0);
            else if (isNaN(e))
              (jspb.utils.split64High = 2147483647),
                (jspb.utils.split64Low = 4294967295);
            else if (e > jspb.BinaryConstants.FLOAT64_MAX)
              (jspb.utils.split64High = ((t << 31) | 2146435072) >>> 0),
                (jspb.utils.split64Low = 0);
            else if (e < jspb.BinaryConstants.FLOAT64_MIN) {
              var o = e / Math.pow(2, -1074);
              (e = o / jspb.BinaryConstants.TWO_TO_32),
                (jspb.utils.split64High = ((t << 31) | e) >>> 0),
                (jspb.utils.split64Low = o >>> 0);
            } else {
              var r = 0;
              if (2 <= (o = e)) for (; 2 <= o && 1023 > r; ) r++, (o /= 2);
              else for (; 1 > o && -1022 < r; ) (o *= 2), r--;
              (e =
                ((o = e * Math.pow(2, -r)) * jspb.BinaryConstants.TWO_TO_20) &
                1048575),
                (o = (o * jspb.BinaryConstants.TWO_TO_52) >>> 0),
                (jspb.utils.split64High =
                  ((t << 31) | ((r + 1023) << 20) | e) >>> 0),
                (jspb.utils.split64Low = o);
            }
          }),
          (jspb.utils.splitHash64 = function (e) {
            var t = e.charCodeAt(0),
              o = e.charCodeAt(1),
              r = e.charCodeAt(2),
              n = e.charCodeAt(3),
              i = e.charCodeAt(4),
              a = e.charCodeAt(5),
              s = e.charCodeAt(6);
            (e = e.charCodeAt(7)),
              (jspb.utils.split64Low =
                (t + (o << 8) + (r << 16) + (n << 24)) >>> 0),
              (jspb.utils.split64High =
                (i + (a << 8) + (s << 16) + (e << 24)) >>> 0);
          }),
          (jspb.utils.joinUint64 = function (e, t) {
            return t * jspb.BinaryConstants.TWO_TO_32 + (e >>> 0);
          }),
          (jspb.utils.joinInt64 = function (e, t) {
            var o = 2147483648 & t;
            return (
              o &&
                ((t = ~t >>> 0),
                0 == (e = (1 + ~e) >>> 0) && (t = (t + 1) >>> 0)),
              (e = jspb.utils.joinUint64(e, t)),
              o ? -e : e
            );
          }),
          (jspb.utils.toZigzag64 = function (e, t, o) {
            var r = t >> 31;
            return o((e << 1) ^ r, ((t << 1) | (e >>> 31)) ^ r);
          }),
          (jspb.utils.joinZigzag64 = function (e, t) {
            return jspb.utils.fromZigzag64(e, t, jspb.utils.joinInt64);
          }),
          (jspb.utils.fromZigzag64 = function (e, t, o) {
            var r = -(1 & e);
            return o(((e >>> 1) | (t << 31)) ^ r, (t >>> 1) ^ r);
          }),
          (jspb.utils.joinFloat32 = function (e, t) {
            t = 2 * (e >> 31) + 1;
            var o = (e >>> 23) & 255;
            return (
              (e &= 8388607),
              255 == o
                ? e
                  ? NaN
                  : (1 / 0) * t
                : 0 == o
                ? t * Math.pow(2, -149) * e
                : t * Math.pow(2, o - 150) * (e + Math.pow(2, 23))
            );
          }),
          (jspb.utils.joinFloat64 = function (e, t) {
            var o = 2 * (t >> 31) + 1,
              r = (t >>> 20) & 2047;
            return (
              (e = jspb.BinaryConstants.TWO_TO_32 * (1048575 & t) + e),
              2047 == r
                ? e
                  ? NaN
                  : (1 / 0) * o
                : 0 == r
                ? o * Math.pow(2, -1074) * e
                : o *
                  Math.pow(2, r - 1075) *
                  (e + jspb.BinaryConstants.TWO_TO_52)
            );
          }),
          (jspb.utils.joinHash64 = function (e, t) {
            return String.fromCharCode(
              (e >>> 0) & 255,
              (e >>> 8) & 255,
              (e >>> 16) & 255,
              (e >>> 24) & 255,
              (t >>> 0) & 255,
              (t >>> 8) & 255,
              (t >>> 16) & 255,
              (t >>> 24) & 255
            );
          }),
          (jspb.utils.DIGITS = "0123456789abcdef".split("")),
          (jspb.utils.ZERO_CHAR_CODE_ = 48),
          (jspb.utils.A_CHAR_CODE_ = 97),
          (jspb.utils.joinUnsignedDecimalString = function (e, t) {
            function o(e, t) {
              return (
                (e = e ? String(e) : ""), t ? "0000000".slice(e.length) + e : e
              );
            }
            if (2097151 >= t) return "" + jspb.utils.joinUint64(e, t);
            var r = (((e >>> 24) | (t << 8)) >>> 0) & 16777215;
            return (
              (e =
                (16777215 & e) +
                6777216 * r +
                6710656 * (t = (t >> 16) & 65535)),
              (r += 8147497 * t),
              (t *= 2),
              1e7 <= e && ((r += Math.floor(e / 1e7)), (e %= 1e7)),
              1e7 <= r && ((t += Math.floor(r / 1e7)), (r %= 1e7)),
              o(t, 0) + o(r, t) + o(e, 1)
            );
          }),
          (jspb.utils.joinSignedDecimalString = function (e, t) {
            var o = 2147483648 & t;
            return (
              o && (t = (~t + (0 == (e = (1 + ~e) >>> 0) ? 1 : 0)) >>> 0),
              (e = jspb.utils.joinUnsignedDecimalString(e, t)),
              o ? "-" + e : e
            );
          }),
          (jspb.utils.hash64ToDecimalString = function (e, t) {
            jspb.utils.splitHash64(e), (e = jspb.utils.split64Low);
            var o = jspb.utils.split64High;
            return t
              ? jspb.utils.joinSignedDecimalString(e, o)
              : jspb.utils.joinUnsignedDecimalString(e, o);
          }),
          (jspb.utils.hash64ArrayToDecimalStrings = function (e, t) {
            for (var o = Array(e.length), r = 0; r < e.length; r++)
              o[r] = jspb.utils.hash64ToDecimalString(e[r], t);
            return o;
          }),
          (jspb.utils.decimalStringToHash64 = function (e) {
            function t(e, t) {
              for (var o = 0; 8 > o && (1 !== e || 0 < t); o++)
                (t = e * r[o] + t), (r[o] = 255 & t), (t >>>= 8);
            }
            goog.asserts.assert(0 < e.length);
            var o = !1;
            "-" === e[0] && ((o = !0), (e = e.slice(1)));
            for (var r = [0, 0, 0, 0, 0, 0, 0, 0], n = 0; n < e.length; n++)
              t(10, e.charCodeAt(n) - jspb.utils.ZERO_CHAR_CODE_);
            return (
              o &&
                ((function () {
                  for (var e = 0; 8 > e; e++) r[e] = 255 & ~r[e];
                })(),
                t(1, 1)),
              goog.crypt.byteArrayToString(r)
            );
          }),
          (jspb.utils.splitDecimalString = function (e) {
            jspb.utils.splitHash64(jspb.utils.decimalStringToHash64(e));
          }),
          (jspb.utils.toHexDigit_ = function (e) {
            return String.fromCharCode(
              10 > e
                ? jspb.utils.ZERO_CHAR_CODE_ + e
                : jspb.utils.A_CHAR_CODE_ - 10 + e
            );
          }),
          (jspb.utils.fromHexCharCode_ = function (e) {
            return e >= jspb.utils.A_CHAR_CODE_
              ? e - jspb.utils.A_CHAR_CODE_ + 10
              : e - jspb.utils.ZERO_CHAR_CODE_;
          }),
          (jspb.utils.hash64ToHexString = function (e) {
            var t = Array(18);
            (t[0] = "0"), (t[1] = "x");
            for (var o = 0; 8 > o; o++) {
              var r = e.charCodeAt(7 - o);
              (t[2 * o + 2] = jspb.utils.toHexDigit_(r >> 4)),
                (t[2 * o + 3] = jspb.utils.toHexDigit_(15 & r));
            }
            return t.join("");
          }),
          (jspb.utils.hexStringToHash64 = function (e) {
            (e = e.toLowerCase()),
              goog.asserts.assert(18 == e.length),
              goog.asserts.assert("0" == e[0]),
              goog.asserts.assert("x" == e[1]);
            for (var t = "", o = 0; 8 > o; o++) {
              var r = jspb.utils.fromHexCharCode_(e.charCodeAt(2 * o + 2)),
                n = jspb.utils.fromHexCharCode_(e.charCodeAt(2 * o + 3));
              t = String.fromCharCode(16 * r + n) + t;
            }
            return t;
          }),
          (jspb.utils.hash64ToNumber = function (e, t) {
            jspb.utils.splitHash64(e), (e = jspb.utils.split64Low);
            var o = jspb.utils.split64High;
            return t ? jspb.utils.joinInt64(e, o) : jspb.utils.joinUint64(e, o);
          }),
          (jspb.utils.numberToHash64 = function (e) {
            return (
              jspb.utils.splitInt64(e),
              jspb.utils.joinHash64(
                jspb.utils.split64Low,
                jspb.utils.split64High
              )
            );
          }),
          (jspb.utils.countVarints = function (e, t, o) {
            for (var r = 0, n = t; n < o; n++) r += e[n] >> 7;
            return o - t - r;
          }),
          (jspb.utils.countVarintFields = function (e, t, o, r) {
            var n = 0;
            if (128 > (r = 8 * r + jspb.BinaryConstants.WireType.VARINT))
              for (; t < o && e[t++] == r; )
                for (n++; ; ) {
                  var i = e[t++];
                  if (0 == (128 & i)) break;
                }
            else
              for (; t < o; ) {
                for (i = r; 128 < i; ) {
                  if (e[t] != ((127 & i) | 128)) return n;
                  t++, (i >>= 7);
                }
                if (e[t++] != i) break;
                for (n++; 0 != (128 & (i = e[t++])); );
              }
            return n;
          }),
          (jspb.utils.countFixedFields_ = function (e, t, o, r, n) {
            var i = 0;
            if (128 > r) for (; t < o && e[t++] == r; ) i++, (t += n);
            else
              for (; t < o; ) {
                for (var a = r; 128 < a; ) {
                  if (e[t++] != ((127 & a) | 128)) return i;
                  a >>= 7;
                }
                if (e[t++] != a) break;
                i++, (t += n);
              }
            return i;
          }),
          (jspb.utils.countFixed32Fields = function (e, t, o, r) {
            return jspb.utils.countFixedFields_(
              e,
              t,
              o,
              8 * r + jspb.BinaryConstants.WireType.FIXED32,
              4
            );
          }),
          (jspb.utils.countFixed64Fields = function (e, t, o, r) {
            return jspb.utils.countFixedFields_(
              e,
              t,
              o,
              8 * r + jspb.BinaryConstants.WireType.FIXED64,
              8
            );
          }),
          (jspb.utils.countDelimitedFields = function (e, t, o, r) {
            var n = 0;
            for (r = 8 * r + jspb.BinaryConstants.WireType.DELIMITED; t < o; ) {
              for (var i = r; 128 < i; ) {
                if (e[t++] != ((127 & i) | 128)) return n;
                i >>= 7;
              }
              if (e[t++] != i) break;
              n++;
              for (
                var a = 0, s = 1;
                (a += (127 & (i = e[t++])) * s), (s *= 128), 0 != (128 & i);

              );
              t += a;
            }
            return n;
          }),
          (jspb.utils.debugBytesToTextFormat = function (e) {
            var t = '"';
            if (e) {
              e = jspb.utils.byteSourceToUint8Array(e);
              for (var o = 0; o < e.length; o++)
                (t += "\\x"), 16 > e[o] && (t += "0"), (t += e[o].toString(16));
            }
            return t + '"';
          }),
          (jspb.utils.debugScalarToTextFormat = function (e) {
            return "string" == typeof e ? goog.string.quote(e) : e.toString();
          }),
          (jspb.utils.stringToByteArray = function (e) {
            for (var t = new Uint8Array(e.length), o = 0; o < e.length; o++) {
              var r = e.charCodeAt(o);
              if (255 < r)
                throw Error(
                  "Conversion error: string contains codepoint outside of byte range"
                );
              t[o] = r;
            }
            return t;
          }),
          (jspb.utils.byteSourceToUint8Array = function (e) {
            return e.constructor === Uint8Array
              ? e
              : e.constructor === ArrayBuffer || e.constructor === Array
              ? new Uint8Array(e)
              : e.constructor === String
              ? goog.crypt.base64.decodeStringToUint8Array(e)
              : e instanceof Uint8Array
              ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength)
              : (goog.asserts.fail("Type not convertible to Uint8Array."),
                new Uint8Array(0));
          }),
          (jspb.BinaryDecoder = function (e, t, o) {
            (this.bytes_ = null),
              (this.cursor_ = this.end_ = this.start_ = 0),
              (this.error_ = !1),
              e && this.setBlock(e, t, o);
          }),
          (jspb.BinaryDecoder.instanceCache_ = []),
          (jspb.BinaryDecoder.alloc = function (e, t, o) {
            if (jspb.BinaryDecoder.instanceCache_.length) {
              var r = jspb.BinaryDecoder.instanceCache_.pop();
              return e && r.setBlock(e, t, o), r;
            }
            return new jspb.BinaryDecoder(e, t, o);
          }),
          (jspb.BinaryDecoder.prototype.free = function () {
            this.clear(),
              100 > jspb.BinaryDecoder.instanceCache_.length &&
                jspb.BinaryDecoder.instanceCache_.push(this);
          }),
          (jspb.BinaryDecoder.prototype.clone = function () {
            return jspb.BinaryDecoder.alloc(
              this.bytes_,
              this.start_,
              this.end_ - this.start_
            );
          }),
          (jspb.BinaryDecoder.prototype.clear = function () {
            (this.bytes_ = null),
              (this.cursor_ = this.end_ = this.start_ = 0),
              (this.error_ = !1);
          }),
          (jspb.BinaryDecoder.prototype.getBuffer = function () {
            return this.bytes_;
          }),
          (jspb.BinaryDecoder.prototype.setBlock = function (e, t, o) {
            (this.bytes_ = jspb.utils.byteSourceToUint8Array(e)),
              (this.start_ = void 0 !== t ? t : 0),
              (this.end_ = void 0 !== o ? this.start_ + o : this.bytes_.length),
              (this.cursor_ = this.start_);
          }),
          (jspb.BinaryDecoder.prototype.getEnd = function () {
            return this.end_;
          }),
          (jspb.BinaryDecoder.prototype.setEnd = function (e) {
            this.end_ = e;
          }),
          (jspb.BinaryDecoder.prototype.reset = function () {
            this.cursor_ = this.start_;
          }),
          (jspb.BinaryDecoder.prototype.getCursor = function () {
            return this.cursor_;
          }),
          (jspb.BinaryDecoder.prototype.setCursor = function (e) {
            this.cursor_ = e;
          }),
          (jspb.BinaryDecoder.prototype.advance = function (e) {
            (this.cursor_ += e), goog.asserts.assert(this.cursor_ <= this.end_);
          }),
          (jspb.BinaryDecoder.prototype.atEnd = function () {
            return this.cursor_ == this.end_;
          }),
          (jspb.BinaryDecoder.prototype.pastEnd = function () {
            return this.cursor_ > this.end_;
          }),
          (jspb.BinaryDecoder.prototype.getError = function () {
            return this.error_ || 0 > this.cursor_ || this.cursor_ > this.end_;
          }),
          (jspb.BinaryDecoder.prototype.readSplitVarint64 = function (e) {
            for (var t = 128, o = 0, r = 0, n = 0; 4 > n && 128 <= t; n++)
              o |= (127 & (t = this.bytes_[this.cursor_++])) << (7 * n);
            if (
              (128 <= t &&
                ((o |= (127 & (t = this.bytes_[this.cursor_++])) << 28),
                (r |= (127 & t) >> 4)),
              128 <= t)
            )
              for (n = 0; 5 > n && 128 <= t; n++)
                r |= (127 & (t = this.bytes_[this.cursor_++])) << (7 * n + 3);
            if (128 > t) return e(o >>> 0, r >>> 0);
            goog.asserts.fail("Failed to read varint, encoding is invalid."),
              (this.error_ = !0);
          }),
          (jspb.BinaryDecoder.prototype.readSplitZigzagVarint64 = function (e) {
            return this.readSplitVarint64(function (t, o) {
              return jspb.utils.fromZigzag64(t, o, e);
            });
          }),
          (jspb.BinaryDecoder.prototype.readSplitFixed64 = function (e) {
            var t = this.bytes_,
              o = this.cursor_;
            this.cursor_ += 8;
            for (var r = 0, n = 0, i = o + 7; i >= o; i--)
              (r = (r << 8) | t[i]), (n = (n << 8) | t[i + 4]);
            return e(r, n);
          }),
          (jspb.BinaryDecoder.prototype.skipVarint = function () {
            for (; 128 & this.bytes_[this.cursor_]; ) this.cursor_++;
            this.cursor_++;
          }),
          (jspb.BinaryDecoder.prototype.unskipVarint = function (e) {
            for (; 128 < e; ) this.cursor_--, (e >>>= 7);
            this.cursor_--;
          }),
          (jspb.BinaryDecoder.prototype.readUnsignedVarint32 = function () {
            var e = this.bytes_,
              t = e[this.cursor_ + 0],
              o = 127 & t;
            return 128 > t
              ? ((this.cursor_ += 1),
                goog.asserts.assert(this.cursor_ <= this.end_),
                o)
              : ((o |= (127 & (t = e[this.cursor_ + 1])) << 7),
                128 > t
                  ? ((this.cursor_ += 2),
                    goog.asserts.assert(this.cursor_ <= this.end_),
                    o)
                  : ((o |= (127 & (t = e[this.cursor_ + 2])) << 14),
                    128 > t
                      ? ((this.cursor_ += 3),
                        goog.asserts.assert(this.cursor_ <= this.end_),
                        o)
                      : ((o |= (127 & (t = e[this.cursor_ + 3])) << 21),
                        128 > t
                          ? ((this.cursor_ += 4),
                            goog.asserts.assert(this.cursor_ <= this.end_),
                            o)
                          : ((o |= (15 & (t = e[this.cursor_ + 4])) << 28),
                            128 > t
                              ? ((this.cursor_ += 5),
                                goog.asserts.assert(this.cursor_ <= this.end_),
                                o >>> 0)
                              : ((this.cursor_ += 5),
                                128 <= e[this.cursor_++] &&
                                  128 <= e[this.cursor_++] &&
                                  128 <= e[this.cursor_++] &&
                                  128 <= e[this.cursor_++] &&
                                  128 <= e[this.cursor_++] &&
                                  goog.asserts.assert(!1),
                                goog.asserts.assert(this.cursor_ <= this.end_),
                                o)))));
          }),
          (jspb.BinaryDecoder.prototype.readSignedVarint32 =
            jspb.BinaryDecoder.prototype.readUnsignedVarint32),
          (jspb.BinaryDecoder.prototype.readUnsignedVarint32String =
            function () {
              return this.readUnsignedVarint32().toString();
            }),
          (jspb.BinaryDecoder.prototype.readSignedVarint32String = function () {
            return this.readSignedVarint32().toString();
          }),
          (jspb.BinaryDecoder.prototype.readZigzagVarint32 = function () {
            var e = this.readUnsignedVarint32();
            return (e >>> 1) ^ -(1 & e);
          }),
          (jspb.BinaryDecoder.prototype.readUnsignedVarint64 = function () {
            return this.readSplitVarint64(jspb.utils.joinUint64);
          }),
          (jspb.BinaryDecoder.prototype.readUnsignedVarint64String =
            function () {
              return this.readSplitVarint64(
                jspb.utils.joinUnsignedDecimalString
              );
            }),
          (jspb.BinaryDecoder.prototype.readSignedVarint64 = function () {
            return this.readSplitVarint64(jspb.utils.joinInt64);
          }),
          (jspb.BinaryDecoder.prototype.readSignedVarint64String = function () {
            return this.readSplitVarint64(jspb.utils.joinSignedDecimalString);
          }),
          (jspb.BinaryDecoder.prototype.readZigzagVarint64 = function () {
            return this.readSplitVarint64(jspb.utils.joinZigzag64);
          }),
          (jspb.BinaryDecoder.prototype.readZigzagVarintHash64 = function () {
            return this.readSplitZigzagVarint64(jspb.utils.joinHash64);
          }),
          (jspb.BinaryDecoder.prototype.readZigzagVarint64String = function () {
            return this.readSplitZigzagVarint64(
              jspb.utils.joinSignedDecimalString
            );
          }),
          (jspb.BinaryDecoder.prototype.readUint8 = function () {
            var e = this.bytes_[this.cursor_ + 0];
            return (
              (this.cursor_ += 1),
              goog.asserts.assert(this.cursor_ <= this.end_),
              e
            );
          }),
          (jspb.BinaryDecoder.prototype.readUint16 = function () {
            var e = this.bytes_[this.cursor_ + 0],
              t = this.bytes_[this.cursor_ + 1];
            return (
              (this.cursor_ += 2),
              goog.asserts.assert(this.cursor_ <= this.end_),
              (e << 0) | (t << 8)
            );
          }),
          (jspb.BinaryDecoder.prototype.readUint32 = function () {
            var e = this.bytes_[this.cursor_ + 0],
              t = this.bytes_[this.cursor_ + 1],
              o = this.bytes_[this.cursor_ + 2],
              r = this.bytes_[this.cursor_ + 3];
            return (
              (this.cursor_ += 4),
              goog.asserts.assert(this.cursor_ <= this.end_),
              ((e << 0) | (t << 8) | (o << 16) | (r << 24)) >>> 0
            );
          }),
          (jspb.BinaryDecoder.prototype.readUint64 = function () {
            var e = this.readUint32(),
              t = this.readUint32();
            return jspb.utils.joinUint64(e, t);
          }),
          (jspb.BinaryDecoder.prototype.readUint64String = function () {
            var e = this.readUint32(),
              t = this.readUint32();
            return jspb.utils.joinUnsignedDecimalString(e, t);
          }),
          (jspb.BinaryDecoder.prototype.readInt8 = function () {
            var e = this.bytes_[this.cursor_ + 0];
            return (
              (this.cursor_ += 1),
              goog.asserts.assert(this.cursor_ <= this.end_),
              (e << 24) >> 24
            );
          }),
          (jspb.BinaryDecoder.prototype.readInt16 = function () {
            var e = this.bytes_[this.cursor_ + 0],
              t = this.bytes_[this.cursor_ + 1];
            return (
              (this.cursor_ += 2),
              goog.asserts.assert(this.cursor_ <= this.end_),
              (((e << 0) | (t << 8)) << 16) >> 16
            );
          }),
          (jspb.BinaryDecoder.prototype.readInt32 = function () {
            var e = this.bytes_[this.cursor_ + 0],
              t = this.bytes_[this.cursor_ + 1],
              o = this.bytes_[this.cursor_ + 2],
              r = this.bytes_[this.cursor_ + 3];
            return (
              (this.cursor_ += 4),
              goog.asserts.assert(this.cursor_ <= this.end_),
              (e << 0) | (t << 8) | (o << 16) | (r << 24)
            );
          }),
          (jspb.BinaryDecoder.prototype.readInt64 = function () {
            var e = this.readUint32(),
              t = this.readUint32();
            return jspb.utils.joinInt64(e, t);
          }),
          (jspb.BinaryDecoder.prototype.readInt64String = function () {
            var e = this.readUint32(),
              t = this.readUint32();
            return jspb.utils.joinSignedDecimalString(e, t);
          }),
          (jspb.BinaryDecoder.prototype.readFloat = function () {
            var e = this.readUint32();
            return jspb.utils.joinFloat32(e, 0);
          }),
          (jspb.BinaryDecoder.prototype.readDouble = function () {
            var e = this.readUint32(),
              t = this.readUint32();
            return jspb.utils.joinFloat64(e, t);
          }),
          (jspb.BinaryDecoder.prototype.readBool = function () {
            return !!this.bytes_[this.cursor_++];
          }),
          (jspb.BinaryDecoder.prototype.readEnum = function () {
            return this.readSignedVarint32();
          }),
          (jspb.BinaryDecoder.prototype.readString = function (e) {
            var t = this.bytes_,
              o = this.cursor_;
            e = o + e;
            for (var r = [], n = ""; o < e; ) {
              var i = t[o++];
              if (128 > i) r.push(i);
              else {
                if (192 > i) continue;
                if (224 > i) {
                  var a = t[o++];
                  r.push(((31 & i) << 6) | (63 & a));
                } else if (240 > i) {
                  a = t[o++];
                  var s = t[o++];
                  r.push(((15 & i) << 12) | ((63 & a) << 6) | (63 & s));
                } else if (248 > i) {
                  (i =
                    ((7 & i) << 18) |
                    ((63 & (a = t[o++])) << 12) |
                    ((63 & (s = t[o++])) << 6) |
                    (63 & t[o++])),
                    (i -= 65536),
                    r.push(55296 + ((i >> 10) & 1023), 56320 + (1023 & i));
                }
              }
              8192 <= r.length &&
                ((n += String.fromCharCode.apply(null, r)), (r.length = 0));
            }
            return (
              (n += goog.crypt.byteArrayToString(r)), (this.cursor_ = o), n
            );
          }),
          (jspb.BinaryDecoder.prototype.readStringWithLength = function () {
            var e = this.readUnsignedVarint32();
            return this.readString(e);
          }),
          (jspb.BinaryDecoder.prototype.readBytes = function (e) {
            if (0 > e || this.cursor_ + e > this.bytes_.length)
              return (
                (this.error_ = !0),
                goog.asserts.fail("Invalid byte length!"),
                new Uint8Array(0)
              );
            var t = this.bytes_.subarray(this.cursor_, this.cursor_ + e);
            return (
              (this.cursor_ += e),
              goog.asserts.assert(this.cursor_ <= this.end_),
              t
            );
          }),
          (jspb.BinaryDecoder.prototype.readVarintHash64 = function () {
            return this.readSplitVarint64(jspb.utils.joinHash64);
          }),
          (jspb.BinaryDecoder.prototype.readFixedHash64 = function () {
            var e = this.bytes_,
              t = this.cursor_,
              o = e[t + 0],
              r = e[t + 1],
              n = e[t + 2],
              i = e[t + 3],
              a = e[t + 4],
              s = e[t + 5],
              g = e[t + 6];
            return (
              (e = e[t + 7]),
              (this.cursor_ += 8),
              String.fromCharCode(o, r, n, i, a, s, g, e)
            );
          }),
          (jspb.BinaryReader = function (e, t, o) {
            (this.decoder_ = jspb.BinaryDecoder.alloc(e, t, o)),
              (this.fieldCursor_ = this.decoder_.getCursor()),
              (this.nextField_ = jspb.BinaryConstants.INVALID_FIELD_NUMBER),
              (this.nextWireType_ = jspb.BinaryConstants.WireType.INVALID),
              (this.error_ = !1),
              (this.readCallbacks_ = null);
          }),
          (jspb.BinaryReader.instanceCache_ = []),
          (jspb.BinaryReader.alloc = function (e, t, o) {
            if (jspb.BinaryReader.instanceCache_.length) {
              var r = jspb.BinaryReader.instanceCache_.pop();
              return e && r.decoder_.setBlock(e, t, o), r;
            }
            return new jspb.BinaryReader(e, t, o);
          }),
          (jspb.BinaryReader.prototype.alloc = jspb.BinaryReader.alloc),
          (jspb.BinaryReader.prototype.free = function () {
            this.decoder_.clear(),
              (this.nextField_ = jspb.BinaryConstants.INVALID_FIELD_NUMBER),
              (this.nextWireType_ = jspb.BinaryConstants.WireType.INVALID),
              (this.error_ = !1),
              (this.readCallbacks_ = null),
              100 > jspb.BinaryReader.instanceCache_.length &&
                jspb.BinaryReader.instanceCache_.push(this);
          }),
          (jspb.BinaryReader.prototype.getFieldCursor = function () {
            return this.fieldCursor_;
          }),
          (jspb.BinaryReader.prototype.getCursor = function () {
            return this.decoder_.getCursor();
          }),
          (jspb.BinaryReader.prototype.getBuffer = function () {
            return this.decoder_.getBuffer();
          }),
          (jspb.BinaryReader.prototype.getFieldNumber = function () {
            return this.nextField_;
          }),
          (jspb.BinaryReader.prototype.getWireType = function () {
            return this.nextWireType_;
          }),
          (jspb.BinaryReader.prototype.isDelimited = function () {
            return (
              this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED
            );
          }),
          (jspb.BinaryReader.prototype.isEndGroup = function () {
            return (
              this.nextWireType_ == jspb.BinaryConstants.WireType.END_GROUP
            );
          }),
          (jspb.BinaryReader.prototype.getError = function () {
            return this.error_ || this.decoder_.getError();
          }),
          (jspb.BinaryReader.prototype.setBlock = function (e, t, o) {
            this.decoder_.setBlock(e, t, o),
              (this.nextField_ = jspb.BinaryConstants.INVALID_FIELD_NUMBER),
              (this.nextWireType_ = jspb.BinaryConstants.WireType.INVALID);
          }),
          (jspb.BinaryReader.prototype.reset = function () {
            this.decoder_.reset(),
              (this.nextField_ = jspb.BinaryConstants.INVALID_FIELD_NUMBER),
              (this.nextWireType_ = jspb.BinaryConstants.WireType.INVALID);
          }),
          (jspb.BinaryReader.prototype.advance = function (e) {
            this.decoder_.advance(e);
          }),
          (jspb.BinaryReader.prototype.nextField = function () {
            if (this.decoder_.atEnd()) return !1;
            if (this.getError())
              return goog.asserts.fail("Decoder hit an error"), !1;
            this.fieldCursor_ = this.decoder_.getCursor();
            var e = this.decoder_.readUnsignedVarint32(),
              t = e >>> 3;
            return (e &= 7) != jspb.BinaryConstants.WireType.VARINT &&
              e != jspb.BinaryConstants.WireType.FIXED32 &&
              e != jspb.BinaryConstants.WireType.FIXED64 &&
              e != jspb.BinaryConstants.WireType.DELIMITED &&
              e != jspb.BinaryConstants.WireType.START_GROUP &&
              e != jspb.BinaryConstants.WireType.END_GROUP
              ? (goog.asserts.fail(
                  "Invalid wire type: %s (at position %s)",
                  e,
                  this.fieldCursor_
                ),
                (this.error_ = !0),
                !1)
              : ((this.nextField_ = t), (this.nextWireType_ = e), !0);
          }),
          (jspb.BinaryReader.prototype.unskipHeader = function () {
            this.decoder_.unskipVarint(
              (this.nextField_ << 3) | this.nextWireType_
            );
          }),
          (jspb.BinaryReader.prototype.skipMatchingFields = function () {
            var e = this.nextField_;
            for (
              this.unskipHeader();
              this.nextField() && this.getFieldNumber() == e;

            )
              this.skipField();
            this.decoder_.atEnd() || this.unskipHeader();
          }),
          (jspb.BinaryReader.prototype.skipVarintField = function () {
            this.nextWireType_ != jspb.BinaryConstants.WireType.VARINT
              ? (goog.asserts.fail("Invalid wire type for skipVarintField"),
                this.skipField())
              : this.decoder_.skipVarint();
          }),
          (jspb.BinaryReader.prototype.skipDelimitedField = function () {
            if (this.nextWireType_ != jspb.BinaryConstants.WireType.DELIMITED)
              goog.asserts.fail("Invalid wire type for skipDelimitedField"),
                this.skipField();
            else {
              var e = this.decoder_.readUnsignedVarint32();
              this.decoder_.advance(e);
            }
          }),
          (jspb.BinaryReader.prototype.skipFixed32Field = function () {
            this.nextWireType_ != jspb.BinaryConstants.WireType.FIXED32
              ? (goog.asserts.fail("Invalid wire type for skipFixed32Field"),
                this.skipField())
              : this.decoder_.advance(4);
          }),
          (jspb.BinaryReader.prototype.skipFixed64Field = function () {
            this.nextWireType_ != jspb.BinaryConstants.WireType.FIXED64
              ? (goog.asserts.fail("Invalid wire type for skipFixed64Field"),
                this.skipField())
              : this.decoder_.advance(8);
          }),
          (jspb.BinaryReader.prototype.skipGroup = function () {
            for (var e = this.nextField_; ; ) {
              if (!this.nextField()) {
                goog.asserts.fail("Unmatched start-group tag: stream EOF"),
                  (this.error_ = !0);
                break;
              }
              if (
                this.nextWireType_ == jspb.BinaryConstants.WireType.END_GROUP
              ) {
                this.nextField_ != e &&
                  (goog.asserts.fail("Unmatched end-group tag"),
                  (this.error_ = !0));
                break;
              }
              this.skipField();
            }
          }),
          (jspb.BinaryReader.prototype.skipField = function () {
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
                goog.asserts.fail("Invalid wire encoding for field.");
            }
          }),
          (jspb.BinaryReader.prototype.registerReadCallback = function (e, t) {
            null === this.readCallbacks_ && (this.readCallbacks_ = {}),
              goog.asserts.assert(!this.readCallbacks_[e]),
              (this.readCallbacks_[e] = t);
          }),
          (jspb.BinaryReader.prototype.runReadCallback = function (e) {
            return (
              goog.asserts.assert(null !== this.readCallbacks_),
              (e = this.readCallbacks_[e]),
              goog.asserts.assert(e),
              e(this)
            );
          }),
          (jspb.BinaryReader.prototype.readAny = function (e) {
            this.nextWireType_ = jspb.BinaryConstants.FieldTypeToWireType(e);
            var t = jspb.BinaryConstants.FieldType;
            switch (e) {
              case t.DOUBLE:
                return this.readDouble();
              case t.FLOAT:
                return this.readFloat();
              case t.INT64:
                return this.readInt64();
              case t.UINT64:
                return this.readUint64();
              case t.INT32:
                return this.readInt32();
              case t.FIXED64:
                return this.readFixed64();
              case t.FIXED32:
                return this.readFixed32();
              case t.BOOL:
                return this.readBool();
              case t.STRING:
                return this.readString();
              case t.GROUP:
                goog.asserts.fail(
                  "Group field type not supported in readAny()"
                );
              case t.MESSAGE:
                goog.asserts.fail(
                  "Message field type not supported in readAny()"
                );
              case t.BYTES:
                return this.readBytes();
              case t.UINT32:
                return this.readUint32();
              case t.ENUM:
                return this.readEnum();
              case t.SFIXED32:
                return this.readSfixed32();
              case t.SFIXED64:
                return this.readSfixed64();
              case t.SINT32:
                return this.readSint32();
              case t.SINT64:
                return this.readSint64();
              case t.FHASH64:
                return this.readFixedHash64();
              case t.VHASH64:
                return this.readVarintHash64();
              default:
                goog.asserts.fail("Invalid field type in readAny()");
            }
            return 0;
          }),
          (jspb.BinaryReader.prototype.readMessage = function (e, t) {
            goog.asserts.assert(
              this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED
            );
            var o = this.decoder_.getEnd(),
              r = this.decoder_.readUnsignedVarint32();
            (r = this.decoder_.getCursor() + r),
              this.decoder_.setEnd(r),
              t(e, this),
              this.decoder_.setCursor(r),
              this.decoder_.setEnd(o);
          }),
          (jspb.BinaryReader.prototype.readGroup = function (e, t, o) {
            goog.asserts.assert(
              this.nextWireType_ == jspb.BinaryConstants.WireType.START_GROUP
            ),
              goog.asserts.assert(this.nextField_ == e),
              o(t, this),
              this.error_ ||
                this.nextWireType_ == jspb.BinaryConstants.WireType.END_GROUP ||
                (goog.asserts.fail(
                  "Group submessage did not end with an END_GROUP tag"
                ),
                (this.error_ = !0));
          }),
          (jspb.BinaryReader.prototype.getFieldDecoder = function () {
            goog.asserts.assert(
              this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED
            );
            var e = this.decoder_.readUnsignedVarint32(),
              t = this.decoder_.getCursor(),
              o = t + e;
            return (
              (e = jspb.BinaryDecoder.alloc(this.decoder_.getBuffer(), t, e)),
              this.decoder_.setCursor(o),
              e
            );
          }),
          (jspb.BinaryReader.prototype.readInt32 = function () {
            return (
              goog.asserts.assert(
                this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT
              ),
              this.decoder_.readSignedVarint32()
            );
          }),
          (jspb.BinaryReader.prototype.readInt32String = function () {
            return (
              goog.asserts.assert(
                this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT
              ),
              this.decoder_.readSignedVarint32String()
            );
          }),
          (jspb.BinaryReader.prototype.readInt64 = function () {
            return (
              goog.asserts.assert(
                this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT
              ),
              this.decoder_.readSignedVarint64()
            );
          }),
          (jspb.BinaryReader.prototype.readInt64String = function () {
            return (
              goog.asserts.assert(
                this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT
              ),
              this.decoder_.readSignedVarint64String()
            );
          }),
          (jspb.BinaryReader.prototype.readUint32 = function () {
            return (
              goog.asserts.assert(
                this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT
              ),
              this.decoder_.readUnsignedVarint32()
            );
          }),
          (jspb.BinaryReader.prototype.readUint32String = function () {
            return (
              goog.asserts.assert(
                this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT
              ),
              this.decoder_.readUnsignedVarint32String()
            );
          }),
          (jspb.BinaryReader.prototype.readUint64 = function () {
            return (
              goog.asserts.assert(
                this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT
              ),
              this.decoder_.readUnsignedVarint64()
            );
          }),
          (jspb.BinaryReader.prototype.readUint64String = function () {
            return (
              goog.asserts.assert(
                this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT
              ),
              this.decoder_.readUnsignedVarint64String()
            );
          }),
          (jspb.BinaryReader.prototype.readSint32 = function () {
            return (
              goog.asserts.assert(
                this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT
              ),
              this.decoder_.readZigzagVarint32()
            );
          }),
          (jspb.BinaryReader.prototype.readSint64 = function () {
            return (
              goog.asserts.assert(
                this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT
              ),
              this.decoder_.readZigzagVarint64()
            );
          }),
          (jspb.BinaryReader.prototype.readSint64String = function () {
            return (
              goog.asserts.assert(
                this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT
              ),
              this.decoder_.readZigzagVarint64String()
            );
          }),
          (jspb.BinaryReader.prototype.readFixed32 = function () {
            return (
              goog.asserts.assert(
                this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED32
              ),
              this.decoder_.readUint32()
            );
          }),
          (jspb.BinaryReader.prototype.readFixed64 = function () {
            return (
              goog.asserts.assert(
                this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64
              ),
              this.decoder_.readUint64()
            );
          }),
          (jspb.BinaryReader.prototype.readFixed64String = function () {
            return (
              goog.asserts.assert(
                this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64
              ),
              this.decoder_.readUint64String()
            );
          }),
          (jspb.BinaryReader.prototype.readSfixed32 = function () {
            return (
              goog.asserts.assert(
                this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED32
              ),
              this.decoder_.readInt32()
            );
          }),
          (jspb.BinaryReader.prototype.readSfixed32String = function () {
            return (
              goog.asserts.assert(
                this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED32
              ),
              this.decoder_.readInt32().toString()
            );
          }),
          (jspb.BinaryReader.prototype.readSfixed64 = function () {
            return (
              goog.asserts.assert(
                this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64
              ),
              this.decoder_.readInt64()
            );
          }),
          (jspb.BinaryReader.prototype.readSfixed64String = function () {
            return (
              goog.asserts.assert(
                this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64
              ),
              this.decoder_.readInt64String()
            );
          }),
          (jspb.BinaryReader.prototype.readFloat = function () {
            return (
              goog.asserts.assert(
                this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED32
              ),
              this.decoder_.readFloat()
            );
          }),
          (jspb.BinaryReader.prototype.readDouble = function () {
            return (
              goog.asserts.assert(
                this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64
              ),
              this.decoder_.readDouble()
            );
          }),
          (jspb.BinaryReader.prototype.readBool = function () {
            return (
              goog.asserts.assert(
                this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT
              ),
              !!this.decoder_.readUnsignedVarint32()
            );
          }),
          (jspb.BinaryReader.prototype.readEnum = function () {
            return (
              goog.asserts.assert(
                this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT
              ),
              this.decoder_.readSignedVarint64()
            );
          }),
          (jspb.BinaryReader.prototype.readString = function () {
            goog.asserts.assert(
              this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED
            );
            var e = this.decoder_.readUnsignedVarint32();
            return this.decoder_.readString(e);
          }),
          (jspb.BinaryReader.prototype.readBytes = function () {
            goog.asserts.assert(
              this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED
            );
            var e = this.decoder_.readUnsignedVarint32();
            return this.decoder_.readBytes(e);
          }),
          (jspb.BinaryReader.prototype.readVarintHash64 = function () {
            return (
              goog.asserts.assert(
                this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT
              ),
              this.decoder_.readVarintHash64()
            );
          }),
          (jspb.BinaryReader.prototype.readSintHash64 = function () {
            return (
              goog.asserts.assert(
                this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT
              ),
              this.decoder_.readZigzagVarintHash64()
            );
          }),
          (jspb.BinaryReader.prototype.readSplitVarint64 = function (e) {
            return (
              goog.asserts.assert(
                this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT
              ),
              this.decoder_.readSplitVarint64(e)
            );
          }),
          (jspb.BinaryReader.prototype.readSplitZigzagVarint64 = function (e) {
            return (
              goog.asserts.assert(
                this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT
              ),
              this.decoder_.readSplitVarint64(function (t, o) {
                return jspb.utils.fromZigzag64(t, o, e);
              })
            );
          }),
          (jspb.BinaryReader.prototype.readFixedHash64 = function () {
            return (
              goog.asserts.assert(
                this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64
              ),
              this.decoder_.readFixedHash64()
            );
          }),
          (jspb.BinaryReader.prototype.readSplitFixed64 = function (e) {
            return (
              goog.asserts.assert(
                this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64
              ),
              this.decoder_.readSplitFixed64(e)
            );
          }),
          (jspb.BinaryReader.prototype.readPackedField_ = function (e) {
            goog.asserts.assert(
              this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED
            );
            var t = this.decoder_.readUnsignedVarint32();
            t = this.decoder_.getCursor() + t;
            for (var o = []; this.decoder_.getCursor() < t; )
              o.push(e.call(this.decoder_));
            return o;
          }),
          (jspb.BinaryReader.prototype.readPackedInt32 = function () {
            return this.readPackedField_(this.decoder_.readSignedVarint32);
          }),
          (jspb.BinaryReader.prototype.readPackedInt32String = function () {
            return this.readPackedField_(
              this.decoder_.readSignedVarint32String
            );
          }),
          (jspb.BinaryReader.prototype.readPackedInt64 = function () {
            return this.readPackedField_(this.decoder_.readSignedVarint64);
          }),
          (jspb.BinaryReader.prototype.readPackedInt64String = function () {
            return this.readPackedField_(
              this.decoder_.readSignedVarint64String
            );
          }),
          (jspb.BinaryReader.prototype.readPackedUint32 = function () {
            return this.readPackedField_(this.decoder_.readUnsignedVarint32);
          }),
          (jspb.BinaryReader.prototype.readPackedUint32String = function () {
            return this.readPackedField_(
              this.decoder_.readUnsignedVarint32String
            );
          }),
          (jspb.BinaryReader.prototype.readPackedUint64 = function () {
            return this.readPackedField_(this.decoder_.readUnsignedVarint64);
          }),
          (jspb.BinaryReader.prototype.readPackedUint64String = function () {
            return this.readPackedField_(
              this.decoder_.readUnsignedVarint64String
            );
          }),
          (jspb.BinaryReader.prototype.readPackedSint32 = function () {
            return this.readPackedField_(this.decoder_.readZigzagVarint32);
          }),
          (jspb.BinaryReader.prototype.readPackedSint64 = function () {
            return this.readPackedField_(this.decoder_.readZigzagVarint64);
          }),
          (jspb.BinaryReader.prototype.readPackedSint64String = function () {
            return this.readPackedField_(
              this.decoder_.readZigzagVarint64String
            );
          }),
          (jspb.BinaryReader.prototype.readPackedFixed32 = function () {
            return this.readPackedField_(this.decoder_.readUint32);
          }),
          (jspb.BinaryReader.prototype.readPackedFixed64 = function () {
            return this.readPackedField_(this.decoder_.readUint64);
          }),
          (jspb.BinaryReader.prototype.readPackedFixed64String = function () {
            return this.readPackedField_(this.decoder_.readUint64String);
          }),
          (jspb.BinaryReader.prototype.readPackedSfixed32 = function () {
            return this.readPackedField_(this.decoder_.readInt32);
          }),
          (jspb.BinaryReader.prototype.readPackedSfixed64 = function () {
            return this.readPackedField_(this.decoder_.readInt64);
          }),
          (jspb.BinaryReader.prototype.readPackedSfixed64String = function () {
            return this.readPackedField_(this.decoder_.readInt64String);
          }),
          (jspb.BinaryReader.prototype.readPackedFloat = function () {
            return this.readPackedField_(this.decoder_.readFloat);
          }),
          (jspb.BinaryReader.prototype.readPackedDouble = function () {
            return this.readPackedField_(this.decoder_.readDouble);
          }),
          (jspb.BinaryReader.prototype.readPackedBool = function () {
            return this.readPackedField_(this.decoder_.readBool);
          }),
          (jspb.BinaryReader.prototype.readPackedEnum = function () {
            return this.readPackedField_(this.decoder_.readEnum);
          }),
          (jspb.BinaryReader.prototype.readPackedVarintHash64 = function () {
            return this.readPackedField_(this.decoder_.readVarintHash64);
          }),
          (jspb.BinaryReader.prototype.readPackedFixedHash64 = function () {
            return this.readPackedField_(this.decoder_.readFixedHash64);
          }),
          (jspb.BinaryEncoder = function () {
            this.buffer_ = [];
          }),
          (jspb.BinaryEncoder.prototype.length = function () {
            return this.buffer_.length;
          }),
          (jspb.BinaryEncoder.prototype.end = function () {
            var e = this.buffer_;
            return (this.buffer_ = []), e;
          }),
          (jspb.BinaryEncoder.prototype.writeSplitVarint64 = function (e, t) {
            for (
              goog.asserts.assert(e == Math.floor(e)),
                goog.asserts.assert(t == Math.floor(t)),
                goog.asserts.assert(
                  0 <= e && e < jspb.BinaryConstants.TWO_TO_32
                ),
                goog.asserts.assert(
                  0 <= t && t < jspb.BinaryConstants.TWO_TO_32
                );
              0 < t || 127 < e;

            )
              this.buffer_.push((127 & e) | 128),
                (e = ((e >>> 7) | (t << 25)) >>> 0),
                (t >>>= 7);
            this.buffer_.push(e);
          }),
          (jspb.BinaryEncoder.prototype.writeSplitFixed64 = function (e, t) {
            goog.asserts.assert(e == Math.floor(e)),
              goog.asserts.assert(t == Math.floor(t)),
              goog.asserts.assert(0 <= e && e < jspb.BinaryConstants.TWO_TO_32),
              goog.asserts.assert(0 <= t && t < jspb.BinaryConstants.TWO_TO_32),
              this.writeUint32(e),
              this.writeUint32(t);
          }),
          (jspb.BinaryEncoder.prototype.writeUnsignedVarint32 = function (e) {
            for (
              goog.asserts.assert(e == Math.floor(e)),
                goog.asserts.assert(
                  0 <= e && e < jspb.BinaryConstants.TWO_TO_32
                );
              127 < e;

            )
              this.buffer_.push((127 & e) | 128), (e >>>= 7);
            this.buffer_.push(e);
          }),
          (jspb.BinaryEncoder.prototype.writeSignedVarint32 = function (e) {
            if (
              (goog.asserts.assert(e == Math.floor(e)),
              goog.asserts.assert(
                e >= -jspb.BinaryConstants.TWO_TO_31 &&
                  e < jspb.BinaryConstants.TWO_TO_31
              ),
              0 <= e)
            )
              this.writeUnsignedVarint32(e);
            else {
              for (var t = 0; 9 > t; t++)
                this.buffer_.push((127 & e) | 128), (e >>= 7);
              this.buffer_.push(1);
            }
          }),
          (jspb.BinaryEncoder.prototype.writeUnsignedVarint64 = function (e) {
            goog.asserts.assert(e == Math.floor(e)),
              goog.asserts.assert(0 <= e && e < jspb.BinaryConstants.TWO_TO_64),
              jspb.utils.splitInt64(e),
              this.writeSplitVarint64(
                jspb.utils.split64Low,
                jspb.utils.split64High
              );
          }),
          (jspb.BinaryEncoder.prototype.writeSignedVarint64 = function (e) {
            goog.asserts.assert(e == Math.floor(e)),
              goog.asserts.assert(
                e >= -jspb.BinaryConstants.TWO_TO_63 &&
                  e < jspb.BinaryConstants.TWO_TO_63
              ),
              jspb.utils.splitInt64(e),
              this.writeSplitVarint64(
                jspb.utils.split64Low,
                jspb.utils.split64High
              );
          }),
          (jspb.BinaryEncoder.prototype.writeZigzagVarint32 = function (e) {
            goog.asserts.assert(e == Math.floor(e)),
              goog.asserts.assert(
                e >= -jspb.BinaryConstants.TWO_TO_31 &&
                  e < jspb.BinaryConstants.TWO_TO_31
              ),
              this.writeUnsignedVarint32(((e << 1) ^ (e >> 31)) >>> 0);
          }),
          (jspb.BinaryEncoder.prototype.writeZigzagVarint64 = function (e) {
            goog.asserts.assert(e == Math.floor(e)),
              goog.asserts.assert(
                e >= -jspb.BinaryConstants.TWO_TO_63 &&
                  e < jspb.BinaryConstants.TWO_TO_63
              ),
              jspb.utils.splitZigzag64(e),
              this.writeSplitVarint64(
                jspb.utils.split64Low,
                jspb.utils.split64High
              );
          }),
          (jspb.BinaryEncoder.prototype.writeZigzagVarint64String = function (
            e
          ) {
            this.writeZigzagVarintHash64(jspb.utils.decimalStringToHash64(e));
          }),
          (jspb.BinaryEncoder.prototype.writeZigzagVarintHash64 = function (e) {
            var t = this;
            jspb.utils.splitHash64(e),
              jspb.utils.toZigzag64(
                jspb.utils.split64Low,
                jspb.utils.split64High,
                function (e, o) {
                  t.writeSplitVarint64(e >>> 0, o >>> 0);
                }
              );
          }),
          (jspb.BinaryEncoder.prototype.writeUint8 = function (e) {
            goog.asserts.assert(e == Math.floor(e)),
              goog.asserts.assert(0 <= e && 256 > e),
              this.buffer_.push((e >>> 0) & 255);
          }),
          (jspb.BinaryEncoder.prototype.writeUint16 = function (e) {
            goog.asserts.assert(e == Math.floor(e)),
              goog.asserts.assert(0 <= e && 65536 > e),
              this.buffer_.push((e >>> 0) & 255),
              this.buffer_.push((e >>> 8) & 255);
          }),
          (jspb.BinaryEncoder.prototype.writeUint32 = function (e) {
            goog.asserts.assert(e == Math.floor(e)),
              goog.asserts.assert(0 <= e && e < jspb.BinaryConstants.TWO_TO_32),
              this.buffer_.push((e >>> 0) & 255),
              this.buffer_.push((e >>> 8) & 255),
              this.buffer_.push((e >>> 16) & 255),
              this.buffer_.push((e >>> 24) & 255);
          }),
          (jspb.BinaryEncoder.prototype.writeUint64 = function (e) {
            goog.asserts.assert(e == Math.floor(e)),
              goog.asserts.assert(0 <= e && e < jspb.BinaryConstants.TWO_TO_64),
              jspb.utils.splitUint64(e),
              this.writeUint32(jspb.utils.split64Low),
              this.writeUint32(jspb.utils.split64High);
          }),
          (jspb.BinaryEncoder.prototype.writeInt8 = function (e) {
            goog.asserts.assert(e == Math.floor(e)),
              goog.asserts.assert(-128 <= e && 128 > e),
              this.buffer_.push((e >>> 0) & 255);
          }),
          (jspb.BinaryEncoder.prototype.writeInt16 = function (e) {
            goog.asserts.assert(e == Math.floor(e)),
              goog.asserts.assert(-32768 <= e && 32768 > e),
              this.buffer_.push((e >>> 0) & 255),
              this.buffer_.push((e >>> 8) & 255);
          }),
          (jspb.BinaryEncoder.prototype.writeInt32 = function (e) {
            goog.asserts.assert(e == Math.floor(e)),
              goog.asserts.assert(
                e >= -jspb.BinaryConstants.TWO_TO_31 &&
                  e < jspb.BinaryConstants.TWO_TO_31
              ),
              this.buffer_.push((e >>> 0) & 255),
              this.buffer_.push((e >>> 8) & 255),
              this.buffer_.push((e >>> 16) & 255),
              this.buffer_.push((e >>> 24) & 255);
          }),
          (jspb.BinaryEncoder.prototype.writeInt64 = function (e) {
            goog.asserts.assert(e == Math.floor(e)),
              goog.asserts.assert(
                e >= -jspb.BinaryConstants.TWO_TO_63 &&
                  e < jspb.BinaryConstants.TWO_TO_63
              ),
              jspb.utils.splitInt64(e),
              this.writeSplitFixed64(
                jspb.utils.split64Low,
                jspb.utils.split64High
              );
          }),
          (jspb.BinaryEncoder.prototype.writeInt64String = function (e) {
            goog.asserts.assert(e == Math.floor(e)),
              goog.asserts.assert(
                +e >= -jspb.BinaryConstants.TWO_TO_63 &&
                  +e < jspb.BinaryConstants.TWO_TO_63
              ),
              jspb.utils.splitHash64(jspb.utils.decimalStringToHash64(e)),
              this.writeSplitFixed64(
                jspb.utils.split64Low,
                jspb.utils.split64High
              );
          }),
          (jspb.BinaryEncoder.prototype.writeFloat = function (e) {
            goog.asserts.assert(
              1 / 0 === e ||
                -1 / 0 === e ||
                isNaN(e) ||
                (e >= -jspb.BinaryConstants.FLOAT32_MAX &&
                  e <= jspb.BinaryConstants.FLOAT32_MAX)
            ),
              jspb.utils.splitFloat32(e),
              this.writeUint32(jspb.utils.split64Low);
          }),
          (jspb.BinaryEncoder.prototype.writeDouble = function (e) {
            goog.asserts.assert(
              1 / 0 === e ||
                -1 / 0 === e ||
                isNaN(e) ||
                (e >= -jspb.BinaryConstants.FLOAT64_MAX &&
                  e <= jspb.BinaryConstants.FLOAT64_MAX)
            ),
              jspb.utils.splitFloat64(e),
              this.writeUint32(jspb.utils.split64Low),
              this.writeUint32(jspb.utils.split64High);
          }),
          (jspb.BinaryEncoder.prototype.writeBool = function (e) {
            goog.asserts.assert("boolean" == typeof e || "number" == typeof e),
              this.buffer_.push(e ? 1 : 0);
          }),
          (jspb.BinaryEncoder.prototype.writeEnum = function (e) {
            goog.asserts.assert(e == Math.floor(e)),
              goog.asserts.assert(
                e >= -jspb.BinaryConstants.TWO_TO_31 &&
                  e < jspb.BinaryConstants.TWO_TO_31
              ),
              this.writeSignedVarint32(e);
          }),
          (jspb.BinaryEncoder.prototype.writeBytes = function (e) {
            this.buffer_.push.apply(this.buffer_, e);
          }),
          (jspb.BinaryEncoder.prototype.writeVarintHash64 = function (e) {
            jspb.utils.splitHash64(e),
              this.writeSplitVarint64(
                jspb.utils.split64Low,
                jspb.utils.split64High
              );
          }),
          (jspb.BinaryEncoder.prototype.writeFixedHash64 = function (e) {
            jspb.utils.splitHash64(e),
              this.writeUint32(jspb.utils.split64Low),
              this.writeUint32(jspb.utils.split64High);
          }),
          (jspb.BinaryEncoder.prototype.writeString = function (e) {
            var t = this.buffer_.length;
            goog.asserts.assertString(e);
            for (var o = 0; o < e.length; o++) {
              var r = e.charCodeAt(o);
              if (128 > r) this.buffer_.push(r);
              else if (2048 > r)
                this.buffer_.push((r >> 6) | 192),
                  this.buffer_.push((63 & r) | 128);
              else if (65536 > r)
                if (55296 <= r && 56319 >= r && o + 1 < e.length) {
                  var n = e.charCodeAt(o + 1);
                  56320 <= n &&
                    57343 >= n &&
                    ((r = 1024 * (r - 55296) + n - 56320 + 65536),
                    this.buffer_.push((r >> 18) | 240),
                    this.buffer_.push(((r >> 12) & 63) | 128),
                    this.buffer_.push(((r >> 6) & 63) | 128),
                    this.buffer_.push((63 & r) | 128),
                    o++);
                } else
                  this.buffer_.push((r >> 12) | 224),
                    this.buffer_.push(((r >> 6) & 63) | 128),
                    this.buffer_.push((63 & r) | 128);
            }
            return this.buffer_.length - t;
          }),
          (jspb.arith = {}),
          (jspb.arith.UInt64 = function (e, t) {
            (this.lo = e), (this.hi = t);
          }),
          (jspb.arith.UInt64.prototype.cmp = function (e) {
            return this.hi < e.hi || (this.hi == e.hi && this.lo < e.lo)
              ? -1
              : this.hi == e.hi && this.lo == e.lo
              ? 0
              : 1;
          }),
          (jspb.arith.UInt64.prototype.rightShift = function () {
            return new jspb.arith.UInt64(
              ((this.lo >>> 1) | ((1 & this.hi) << 31)) >>> 0,
              (this.hi >>> 1) >>> 0
            );
          }),
          (jspb.arith.UInt64.prototype.leftShift = function () {
            return new jspb.arith.UInt64(
              (this.lo << 1) >>> 0,
              ((this.hi << 1) | (this.lo >>> 31)) >>> 0
            );
          }),
          (jspb.arith.UInt64.prototype.msb = function () {
            return !!(2147483648 & this.hi);
          }),
          (jspb.arith.UInt64.prototype.lsb = function () {
            return !!(1 & this.lo);
          }),
          (jspb.arith.UInt64.prototype.zero = function () {
            return 0 == this.lo && 0 == this.hi;
          }),
          (jspb.arith.UInt64.prototype.add = function (e) {
            return new jspb.arith.UInt64(
              (((this.lo + e.lo) & 4294967295) >>> 0) >>> 0,
              ((((this.hi + e.hi) & 4294967295) >>> 0) +
                (4294967296 <= this.lo + e.lo ? 1 : 0)) >>>
                0
            );
          }),
          (jspb.arith.UInt64.prototype.sub = function (e) {
            return new jspb.arith.UInt64(
              (((this.lo - e.lo) & 4294967295) >>> 0) >>> 0,
              ((((this.hi - e.hi) & 4294967295) >>> 0) -
                (0 > this.lo - e.lo ? 1 : 0)) >>>
                0
            );
          }),
          (jspb.arith.UInt64.mul32x32 = function (e, t) {
            var o = 65535 & e,
              r = 65535 & t,
              n = t >>> 16;
            for (
              t =
                o * r +
                65536 * ((o * n) & 65535) +
                65536 * (((e >>>= 16) * r) & 65535),
                o = e * n + ((o * n) >>> 16) + ((e * r) >>> 16);
              4294967296 <= t;

            )
              (t -= 4294967296), (o += 1);
            return new jspb.arith.UInt64(t >>> 0, o >>> 0);
          }),
          (jspb.arith.UInt64.prototype.mul = function (e) {
            var t = jspb.arith.UInt64.mul32x32(this.lo, e);
            return (
              ((e = jspb.arith.UInt64.mul32x32(this.hi, e)).hi = e.lo),
              (e.lo = 0),
              t.add(e)
            );
          }),
          (jspb.arith.UInt64.prototype.div = function (e) {
            if (0 == e) return [];
            var t = new jspb.arith.UInt64(0, 0),
              o = new jspb.arith.UInt64(this.lo, this.hi);
            e = new jspb.arith.UInt64(e, 0);
            for (var r = new jspb.arith.UInt64(1, 0); !e.msb(); )
              (e = e.leftShift()), (r = r.leftShift());
            for (; !r.zero(); )
              0 >= e.cmp(o) && ((t = t.add(r)), (o = o.sub(e))),
                (e = e.rightShift()),
                (r = r.rightShift());
            return [t, o];
          }),
          (jspb.arith.UInt64.prototype.toString = function () {
            for (var e = "", t = this; !t.zero(); ) {
              var o = (t = t.div(10))[0];
              (e = t[1].lo + e), (t = o);
            }
            return "" == e && (e = "0"), e;
          }),
          (jspb.arith.UInt64.fromString = function (e) {
            for (
              var t = new jspb.arith.UInt64(0, 0),
                o = new jspb.arith.UInt64(0, 0),
                r = 0;
              r < e.length;
              r++
            ) {
              if ("0" > e[r] || "9" < e[r]) return null;
              var n = parseInt(e[r], 10);
              (o.lo = n), (t = t.mul(10).add(o));
            }
            return t;
          }),
          (jspb.arith.UInt64.prototype.clone = function () {
            return new jspb.arith.UInt64(this.lo, this.hi);
          }),
          (jspb.arith.Int64 = function (e, t) {
            (this.lo = e), (this.hi = t);
          }),
          (jspb.arith.Int64.prototype.add = function (e) {
            return new jspb.arith.Int64(
              (((this.lo + e.lo) & 4294967295) >>> 0) >>> 0,
              ((((this.hi + e.hi) & 4294967295) >>> 0) +
                (4294967296 <= this.lo + e.lo ? 1 : 0)) >>>
                0
            );
          }),
          (jspb.arith.Int64.prototype.sub = function (e) {
            return new jspb.arith.Int64(
              (((this.lo - e.lo) & 4294967295) >>> 0) >>> 0,
              ((((this.hi - e.hi) & 4294967295) >>> 0) -
                (0 > this.lo - e.lo ? 1 : 0)) >>>
                0
            );
          }),
          (jspb.arith.Int64.prototype.clone = function () {
            return new jspb.arith.Int64(this.lo, this.hi);
          }),
          (jspb.arith.Int64.prototype.toString = function () {
            var e = 0 != (2147483648 & this.hi),
              t = new jspb.arith.UInt64(this.lo, this.hi);
            return (
              e && (t = new jspb.arith.UInt64(0, 0).sub(t)),
              (e ? "-" : "") + t.toString()
            );
          }),
          (jspb.arith.Int64.fromString = function (e) {
            var t = 0 < e.length && "-" == e[0];
            return (
              t && (e = e.substring(1)),
              null === (e = jspb.arith.UInt64.fromString(e))
                ? null
                : (t && (e = new jspb.arith.UInt64(0, 0).sub(e)),
                  new jspb.arith.Int64(e.lo, e.hi))
            );
          }),
          (jspb.BinaryWriter = function () {
            (this.blocks_ = []),
              (this.totalLength_ = 0),
              (this.encoder_ = new jspb.BinaryEncoder()),
              (this.bookmarks_ = []);
          }),
          (jspb.BinaryWriter.prototype.appendUint8Array_ = function (e) {
            var t = this.encoder_.end();
            this.blocks_.push(t),
              this.blocks_.push(e),
              (this.totalLength_ += t.length + e.length);
          }),
          (jspb.BinaryWriter.prototype.beginDelimited_ = function (e) {
            return (
              this.writeFieldHeader_(
                e,
                jspb.BinaryConstants.WireType.DELIMITED
              ),
              (e = this.encoder_.end()),
              this.blocks_.push(e),
              (this.totalLength_ += e.length),
              e.push(this.totalLength_),
              e
            );
          }),
          (jspb.BinaryWriter.prototype.endDelimited_ = function (e) {
            var t = e.pop();
            for (
              t = this.totalLength_ + this.encoder_.length() - t,
                goog.asserts.assert(0 <= t);
              127 < t;

            )
              e.push((127 & t) | 128), (t >>>= 7), this.totalLength_++;
            e.push(t), this.totalLength_++;
          }),
          (jspb.BinaryWriter.prototype.writeSerializedMessage = function (
            e,
            t,
            o
          ) {
            this.appendUint8Array_(e.subarray(t, o));
          }),
          (jspb.BinaryWriter.prototype.maybeWriteSerializedMessage = function (
            e,
            t,
            o
          ) {
            null != e &&
              null != t &&
              null != o &&
              this.writeSerializedMessage(e, t, o);
          }),
          (jspb.BinaryWriter.prototype.reset = function () {
            (this.blocks_ = []),
              this.encoder_.end(),
              (this.totalLength_ = 0),
              (this.bookmarks_ = []);
          }),
          (jspb.BinaryWriter.prototype.getResultBuffer = function () {
            goog.asserts.assert(0 == this.bookmarks_.length);
            for (
              var e = new Uint8Array(
                  this.totalLength_ + this.encoder_.length()
                ),
                t = this.blocks_,
                o = t.length,
                r = 0,
                n = 0;
              n < o;
              n++
            ) {
              var i = t[n];
              e.set(i, r), (r += i.length);
            }
            return (
              (t = this.encoder_.end()),
              e.set(t, r),
              (r += t.length),
              goog.asserts.assert(r == e.length),
              (this.blocks_ = [e]),
              e
            );
          }),
          (jspb.BinaryWriter.prototype.getResultBase64String = function (e) {
            return goog.crypt.base64.encodeByteArray(this.getResultBuffer(), e);
          }),
          (jspb.BinaryWriter.prototype.beginSubMessage = function (e) {
            this.bookmarks_.push(this.beginDelimited_(e));
          }),
          (jspb.BinaryWriter.prototype.endSubMessage = function () {
            goog.asserts.assert(0 <= this.bookmarks_.length),
              this.endDelimited_(this.bookmarks_.pop());
          }),
          (jspb.BinaryWriter.prototype.writeFieldHeader_ = function (e, t) {
            goog.asserts.assert(1 <= e && e == Math.floor(e)),
              this.encoder_.writeUnsignedVarint32(8 * e + t);
          }),
          (jspb.BinaryWriter.prototype.writeAny = function (e, t, o) {
            var r = jspb.BinaryConstants.FieldType;
            switch (e) {
              case r.DOUBLE:
                this.writeDouble(t, o);
                break;
              case r.FLOAT:
                this.writeFloat(t, o);
                break;
              case r.INT64:
                this.writeInt64(t, o);
                break;
              case r.UINT64:
                this.writeUint64(t, o);
                break;
              case r.INT32:
                this.writeInt32(t, o);
                break;
              case r.FIXED64:
                this.writeFixed64(t, o);
                break;
              case r.FIXED32:
                this.writeFixed32(t, o);
                break;
              case r.BOOL:
                this.writeBool(t, o);
                break;
              case r.STRING:
                this.writeString(t, o);
                break;
              case r.GROUP:
                goog.asserts.fail(
                  "Group field type not supported in writeAny()"
                );
                break;
              case r.MESSAGE:
                goog.asserts.fail(
                  "Message field type not supported in writeAny()"
                );
                break;
              case r.BYTES:
                this.writeBytes(t, o);
                break;
              case r.UINT32:
                this.writeUint32(t, o);
                break;
              case r.ENUM:
                this.writeEnum(t, o);
                break;
              case r.SFIXED32:
                this.writeSfixed32(t, o);
                break;
              case r.SFIXED64:
                this.writeSfixed64(t, o);
                break;
              case r.SINT32:
                this.writeSint32(t, o);
                break;
              case r.SINT64:
                this.writeSint64(t, o);
                break;
              case r.FHASH64:
                this.writeFixedHash64(t, o);
                break;
              case r.VHASH64:
                this.writeVarintHash64(t, o);
                break;
              default:
                goog.asserts.fail("Invalid field type in writeAny()");
            }
          }),
          (jspb.BinaryWriter.prototype.writeUnsignedVarint32_ = function (
            e,
            t
          ) {
            null != t &&
              (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT),
              this.encoder_.writeUnsignedVarint32(t));
          }),
          (jspb.BinaryWriter.prototype.writeSignedVarint32_ = function (e, t) {
            null != t &&
              (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT),
              this.encoder_.writeSignedVarint32(t));
          }),
          (jspb.BinaryWriter.prototype.writeUnsignedVarint64_ = function (
            e,
            t
          ) {
            null != t &&
              (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT),
              this.encoder_.writeUnsignedVarint64(t));
          }),
          (jspb.BinaryWriter.prototype.writeSignedVarint64_ = function (e, t) {
            null != t &&
              (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT),
              this.encoder_.writeSignedVarint64(t));
          }),
          (jspb.BinaryWriter.prototype.writeZigzagVarint32_ = function (e, t) {
            null != t &&
              (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT),
              this.encoder_.writeZigzagVarint32(t));
          }),
          (jspb.BinaryWriter.prototype.writeZigzagVarint64_ = function (e, t) {
            null != t &&
              (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT),
              this.encoder_.writeZigzagVarint64(t));
          }),
          (jspb.BinaryWriter.prototype.writeZigzagVarint64String_ = function (
            e,
            t
          ) {
            null != t &&
              (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT),
              this.encoder_.writeZigzagVarint64String(t));
          }),
          (jspb.BinaryWriter.prototype.writeZigzagVarintHash64_ = function (
            e,
            t
          ) {
            null != t &&
              (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT),
              this.encoder_.writeZigzagVarintHash64(t));
          }),
          (jspb.BinaryWriter.prototype.writeInt32 = function (e, t) {
            null != t &&
              (goog.asserts.assert(
                t >= -jspb.BinaryConstants.TWO_TO_31 &&
                  t < jspb.BinaryConstants.TWO_TO_31
              ),
              this.writeSignedVarint32_(e, t));
          }),
          (jspb.BinaryWriter.prototype.writeInt32String = function (e, t) {
            null != t &&
              ((t = parseInt(t, 10)),
              goog.asserts.assert(
                t >= -jspb.BinaryConstants.TWO_TO_31 &&
                  t < jspb.BinaryConstants.TWO_TO_31
              ),
              this.writeSignedVarint32_(e, t));
          }),
          (jspb.BinaryWriter.prototype.writeInt64 = function (e, t) {
            null != t &&
              (goog.asserts.assert(
                t >= -jspb.BinaryConstants.TWO_TO_63 &&
                  t < jspb.BinaryConstants.TWO_TO_63
              ),
              this.writeSignedVarint64_(e, t));
          }),
          (jspb.BinaryWriter.prototype.writeInt64String = function (e, t) {
            null != t &&
              ((t = jspb.arith.Int64.fromString(t)),
              this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT),
              this.encoder_.writeSplitVarint64(t.lo, t.hi));
          }),
          (jspb.BinaryWriter.prototype.writeUint32 = function (e, t) {
            null != t &&
              (goog.asserts.assert(
                0 <= t && t < jspb.BinaryConstants.TWO_TO_32
              ),
              this.writeUnsignedVarint32_(e, t));
          }),
          (jspb.BinaryWriter.prototype.writeUint32String = function (e, t) {
            null != t &&
              ((t = parseInt(t, 10)),
              goog.asserts.assert(0 <= t && t < jspb.BinaryConstants.TWO_TO_32),
              this.writeUnsignedVarint32_(e, t));
          }),
          (jspb.BinaryWriter.prototype.writeUint64 = function (e, t) {
            null != t &&
              (goog.asserts.assert(
                0 <= t && t < jspb.BinaryConstants.TWO_TO_64
              ),
              this.writeUnsignedVarint64_(e, t));
          }),
          (jspb.BinaryWriter.prototype.writeUint64String = function (e, t) {
            null != t &&
              ((t = jspb.arith.UInt64.fromString(t)),
              this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT),
              this.encoder_.writeSplitVarint64(t.lo, t.hi));
          }),
          (jspb.BinaryWriter.prototype.writeSint32 = function (e, t) {
            null != t &&
              (goog.asserts.assert(
                t >= -jspb.BinaryConstants.TWO_TO_31 &&
                  t < jspb.BinaryConstants.TWO_TO_31
              ),
              this.writeZigzagVarint32_(e, t));
          }),
          (jspb.BinaryWriter.prototype.writeSint64 = function (e, t) {
            null != t &&
              (goog.asserts.assert(
                t >= -jspb.BinaryConstants.TWO_TO_63 &&
                  t < jspb.BinaryConstants.TWO_TO_63
              ),
              this.writeZigzagVarint64_(e, t));
          }),
          (jspb.BinaryWriter.prototype.writeSintHash64 = function (e, t) {
            null != t && this.writeZigzagVarintHash64_(e, t);
          }),
          (jspb.BinaryWriter.prototype.writeSint64String = function (e, t) {
            null != t && this.writeZigzagVarint64String_(e, t);
          }),
          (jspb.BinaryWriter.prototype.writeFixed32 = function (e, t) {
            null != t &&
              (goog.asserts.assert(
                0 <= t && t < jspb.BinaryConstants.TWO_TO_32
              ),
              this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.FIXED32),
              this.encoder_.writeUint32(t));
          }),
          (jspb.BinaryWriter.prototype.writeFixed64 = function (e, t) {
            null != t &&
              (goog.asserts.assert(
                0 <= t && t < jspb.BinaryConstants.TWO_TO_64
              ),
              this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.FIXED64),
              this.encoder_.writeUint64(t));
          }),
          (jspb.BinaryWriter.prototype.writeFixed64String = function (e, t) {
            null != t &&
              ((t = jspb.arith.UInt64.fromString(t)),
              this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.FIXED64),
              this.encoder_.writeSplitFixed64(t.lo, t.hi));
          }),
          (jspb.BinaryWriter.prototype.writeSfixed32 = function (e, t) {
            null != t &&
              (goog.asserts.assert(
                t >= -jspb.BinaryConstants.TWO_TO_31 &&
                  t < jspb.BinaryConstants.TWO_TO_31
              ),
              this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.FIXED32),
              this.encoder_.writeInt32(t));
          }),
          (jspb.BinaryWriter.prototype.writeSfixed64 = function (e, t) {
            null != t &&
              (goog.asserts.assert(
                t >= -jspb.BinaryConstants.TWO_TO_63 &&
                  t < jspb.BinaryConstants.TWO_TO_63
              ),
              this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.FIXED64),
              this.encoder_.writeInt64(t));
          }),
          (jspb.BinaryWriter.prototype.writeSfixed64String = function (e, t) {
            null != t &&
              ((t = jspb.arith.Int64.fromString(t)),
              this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.FIXED64),
              this.encoder_.writeSplitFixed64(t.lo, t.hi));
          }),
          (jspb.BinaryWriter.prototype.writeFloat = function (e, t) {
            null != t &&
              (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.FIXED32),
              this.encoder_.writeFloat(t));
          }),
          (jspb.BinaryWriter.prototype.writeDouble = function (e, t) {
            null != t &&
              (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.FIXED64),
              this.encoder_.writeDouble(t));
          }),
          (jspb.BinaryWriter.prototype.writeBool = function (e, t) {
            null != t &&
              (goog.asserts.assert(
                "boolean" == typeof t || "number" == typeof t
              ),
              this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT),
              this.encoder_.writeBool(t));
          }),
          (jspb.BinaryWriter.prototype.writeEnum = function (e, t) {
            null != t &&
              (goog.asserts.assert(
                t >= -jspb.BinaryConstants.TWO_TO_31 &&
                  t < jspb.BinaryConstants.TWO_TO_31
              ),
              this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT),
              this.encoder_.writeSignedVarint32(t));
          }),
          (jspb.BinaryWriter.prototype.writeString = function (e, t) {
            null != t &&
              ((e = this.beginDelimited_(e)),
              this.encoder_.writeString(t),
              this.endDelimited_(e));
          }),
          (jspb.BinaryWriter.prototype.writeBytes = function (e, t) {
            null != t &&
              ((t = jspb.utils.byteSourceToUint8Array(t)),
              this.writeFieldHeader_(
                e,
                jspb.BinaryConstants.WireType.DELIMITED
              ),
              this.encoder_.writeUnsignedVarint32(t.length),
              this.appendUint8Array_(t));
          }),
          (jspb.BinaryWriter.prototype.writeMessage = function (e, t, o) {
            null != t &&
              ((e = this.beginDelimited_(e)),
              o(t, this),
              this.endDelimited_(e));
          }),
          (jspb.BinaryWriter.prototype.writeMessageSet = function (e, t, o) {
            null != t &&
              (this.writeFieldHeader_(
                1,
                jspb.BinaryConstants.WireType.START_GROUP
              ),
              this.writeFieldHeader_(2, jspb.BinaryConstants.WireType.VARINT),
              this.encoder_.writeSignedVarint32(e),
              (e = this.beginDelimited_(3)),
              o(t, this),
              this.endDelimited_(e),
              this.writeFieldHeader_(
                1,
                jspb.BinaryConstants.WireType.END_GROUP
              ));
          }),
          (jspb.BinaryWriter.prototype.writeGroup = function (e, t, o) {
            null != t &&
              (this.writeFieldHeader_(
                e,
                jspb.BinaryConstants.WireType.START_GROUP
              ),
              o(t, this),
              this.writeFieldHeader_(
                e,
                jspb.BinaryConstants.WireType.END_GROUP
              ));
          }),
          (jspb.BinaryWriter.prototype.writeFixedHash64 = function (e, t) {
            null != t &&
              (goog.asserts.assert(8 == t.length),
              this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.FIXED64),
              this.encoder_.writeFixedHash64(t));
          }),
          (jspb.BinaryWriter.prototype.writeVarintHash64 = function (e, t) {
            null != t &&
              (goog.asserts.assert(8 == t.length),
              this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT),
              this.encoder_.writeVarintHash64(t));
          }),
          (jspb.BinaryWriter.prototype.writeSplitFixed64 = function (e, t, o) {
            this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.FIXED64),
              this.encoder_.writeSplitFixed64(t, o);
          }),
          (jspb.BinaryWriter.prototype.writeSplitVarint64 = function (e, t, o) {
            this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT),
              this.encoder_.writeSplitVarint64(t, o);
          }),
          (jspb.BinaryWriter.prototype.writeSplitZigzagVarint64 = function (
            e,
            t,
            o
          ) {
            this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT);
            var r = this.encoder_;
            jspb.utils.toZigzag64(t, o, function (e, t) {
              r.writeSplitVarint64(e >>> 0, t >>> 0);
            });
          }),
          (jspb.BinaryWriter.prototype.writeRepeatedInt32 = function (e, t) {
            if (null != t)
              for (var o = 0; o < t.length; o++)
                this.writeSignedVarint32_(e, t[o]);
          }),
          (jspb.BinaryWriter.prototype.writeRepeatedInt32String = function (
            e,
            t
          ) {
            if (null != t)
              for (var o = 0; o < t.length; o++) this.writeInt32String(e, t[o]);
          }),
          (jspb.BinaryWriter.prototype.writeRepeatedInt64 = function (e, t) {
            if (null != t)
              for (var o = 0; o < t.length; o++)
                this.writeSignedVarint64_(e, t[o]);
          }),
          (jspb.BinaryWriter.prototype.writeRepeatedSplitFixed64 = function (
            e,
            t,
            o,
            r
          ) {
            if (null != t)
              for (var n = 0; n < t.length; n++)
                this.writeSplitFixed64(e, o(t[n]), r(t[n]));
          }),
          (jspb.BinaryWriter.prototype.writeRepeatedSplitVarint64 = function (
            e,
            t,
            o,
            r
          ) {
            if (null != t)
              for (var n = 0; n < t.length; n++)
                this.writeSplitVarint64(e, o(t[n]), r(t[n]));
          }),
          (jspb.BinaryWriter.prototype.writeRepeatedSplitZigzagVarint64 =
            function (e, t, o, r) {
              if (null != t)
                for (var n = 0; n < t.length; n++)
                  this.writeSplitZigzagVarint64(e, o(t[n]), r(t[n]));
            }),
          (jspb.BinaryWriter.prototype.writeRepeatedInt64String = function (
            e,
            t
          ) {
            if (null != t)
              for (var o = 0; o < t.length; o++) this.writeInt64String(e, t[o]);
          }),
          (jspb.BinaryWriter.prototype.writeRepeatedUint32 = function (e, t) {
            if (null != t)
              for (var o = 0; o < t.length; o++)
                this.writeUnsignedVarint32_(e, t[o]);
          }),
          (jspb.BinaryWriter.prototype.writeRepeatedUint32String = function (
            e,
            t
          ) {
            if (null != t)
              for (var o = 0; o < t.length; o++)
                this.writeUint32String(e, t[o]);
          }),
          (jspb.BinaryWriter.prototype.writeRepeatedUint64 = function (e, t) {
            if (null != t)
              for (var o = 0; o < t.length; o++)
                this.writeUnsignedVarint64_(e, t[o]);
          }),
          (jspb.BinaryWriter.prototype.writeRepeatedUint64String = function (
            e,
            t
          ) {
            if (null != t)
              for (var o = 0; o < t.length; o++)
                this.writeUint64String(e, t[o]);
          }),
          (jspb.BinaryWriter.prototype.writeRepeatedSint32 = function (e, t) {
            if (null != t)
              for (var o = 0; o < t.length; o++)
                this.writeZigzagVarint32_(e, t[o]);
          }),
          (jspb.BinaryWriter.prototype.writeRepeatedSint64 = function (e, t) {
            if (null != t)
              for (var o = 0; o < t.length; o++)
                this.writeZigzagVarint64_(e, t[o]);
          }),
          (jspb.BinaryWriter.prototype.writeRepeatedSint64String = function (
            e,
            t
          ) {
            if (null != t)
              for (var o = 0; o < t.length; o++)
                this.writeZigzagVarint64String_(e, t[o]);
          }),
          (jspb.BinaryWriter.prototype.writeRepeatedSintHash64 = function (
            e,
            t
          ) {
            if (null != t)
              for (var o = 0; o < t.length; o++)
                this.writeZigzagVarintHash64_(e, t[o]);
          }),
          (jspb.BinaryWriter.prototype.writeRepeatedFixed32 = function (e, t) {
            if (null != t)
              for (var o = 0; o < t.length; o++) this.writeFixed32(e, t[o]);
          }),
          (jspb.BinaryWriter.prototype.writeRepeatedFixed64 = function (e, t) {
            if (null != t)
              for (var o = 0; o < t.length; o++) this.writeFixed64(e, t[o]);
          }),
          (jspb.BinaryWriter.prototype.writeRepeatedFixed64String = function (
            e,
            t
          ) {
            if (null != t)
              for (var o = 0; o < t.length; o++)
                this.writeFixed64String(e, t[o]);
          }),
          (jspb.BinaryWriter.prototype.writeRepeatedSfixed32 = function (e, t) {
            if (null != t)
              for (var o = 0; o < t.length; o++) this.writeSfixed32(e, t[o]);
          }),
          (jspb.BinaryWriter.prototype.writeRepeatedSfixed64 = function (e, t) {
            if (null != t)
              for (var o = 0; o < t.length; o++) this.writeSfixed64(e, t[o]);
          }),
          (jspb.BinaryWriter.prototype.writeRepeatedSfixed64String = function (
            e,
            t
          ) {
            if (null != t)
              for (var o = 0; o < t.length; o++)
                this.writeSfixed64String(e, t[o]);
          }),
          (jspb.BinaryWriter.prototype.writeRepeatedFloat = function (e, t) {
            if (null != t)
              for (var o = 0; o < t.length; o++) this.writeFloat(e, t[o]);
          }),
          (jspb.BinaryWriter.prototype.writeRepeatedDouble = function (e, t) {
            if (null != t)
              for (var o = 0; o < t.length; o++) this.writeDouble(e, t[o]);
          }),
          (jspb.BinaryWriter.prototype.writeRepeatedBool = function (e, t) {
            if (null != t)
              for (var o = 0; o < t.length; o++) this.writeBool(e, t[o]);
          }),
          (jspb.BinaryWriter.prototype.writeRepeatedEnum = function (e, t) {
            if (null != t)
              for (var o = 0; o < t.length; o++) this.writeEnum(e, t[o]);
          }),
          (jspb.BinaryWriter.prototype.writeRepeatedString = function (e, t) {
            if (null != t)
              for (var o = 0; o < t.length; o++) this.writeString(e, t[o]);
          }),
          (jspb.BinaryWriter.prototype.writeRepeatedBytes = function (e, t) {
            if (null != t)
              for (var o = 0; o < t.length; o++) this.writeBytes(e, t[o]);
          }),
          (jspb.BinaryWriter.prototype.writeRepeatedMessage = function (
            e,
            t,
            o
          ) {
            if (null != t)
              for (var r = 0; r < t.length; r++) {
                var n = this.beginDelimited_(e);
                o(t[r], this), this.endDelimited_(n);
              }
          }),
          (jspb.BinaryWriter.prototype.writeRepeatedGroup = function (e, t, o) {
            if (null != t)
              for (var r = 0; r < t.length; r++)
                this.writeFieldHeader_(
                  e,
                  jspb.BinaryConstants.WireType.START_GROUP
                ),
                  o(t[r], this),
                  this.writeFieldHeader_(
                    e,
                    jspb.BinaryConstants.WireType.END_GROUP
                  );
          }),
          (jspb.BinaryWriter.prototype.writeRepeatedFixedHash64 = function (
            e,
            t
          ) {
            if (null != t)
              for (var o = 0; o < t.length; o++) this.writeFixedHash64(e, t[o]);
          }),
          (jspb.BinaryWriter.prototype.writeRepeatedVarintHash64 = function (
            e,
            t
          ) {
            if (null != t)
              for (var o = 0; o < t.length; o++)
                this.writeVarintHash64(e, t[o]);
          }),
          (jspb.BinaryWriter.prototype.writePackedInt32 = function (e, t) {
            if (null != t && t.length) {
              e = this.beginDelimited_(e);
              for (var o = 0; o < t.length; o++)
                this.encoder_.writeSignedVarint32(t[o]);
              this.endDelimited_(e);
            }
          }),
          (jspb.BinaryWriter.prototype.writePackedInt32String = function (
            e,
            t
          ) {
            if (null != t && t.length) {
              e = this.beginDelimited_(e);
              for (var o = 0; o < t.length; o++)
                this.encoder_.writeSignedVarint32(parseInt(t[o], 10));
              this.endDelimited_(e);
            }
          }),
          (jspb.BinaryWriter.prototype.writePackedInt64 = function (e, t) {
            if (null != t && t.length) {
              e = this.beginDelimited_(e);
              for (var o = 0; o < t.length; o++)
                this.encoder_.writeSignedVarint64(t[o]);
              this.endDelimited_(e);
            }
          }),
          (jspb.BinaryWriter.prototype.writePackedSplitFixed64 = function (
            e,
            t,
            o,
            r
          ) {
            if (null != t) {
              e = this.beginDelimited_(e);
              for (var n = 0; n < t.length; n++)
                this.encoder_.writeSplitFixed64(o(t[n]), r(t[n]));
              this.endDelimited_(e);
            }
          }),
          (jspb.BinaryWriter.prototype.writePackedSplitVarint64 = function (
            e,
            t,
            o,
            r
          ) {
            if (null != t) {
              e = this.beginDelimited_(e);
              for (var n = 0; n < t.length; n++)
                this.encoder_.writeSplitVarint64(o(t[n]), r(t[n]));
              this.endDelimited_(e);
            }
          }),
          (jspb.BinaryWriter.prototype.writePackedSplitZigzagVarint64 =
            function (e, t, o, r) {
              if (null != t) {
                e = this.beginDelimited_(e);
                for (var n = this.encoder_, i = 0; i < t.length; i++)
                  jspb.utils.toZigzag64(o(t[i]), r(t[i]), function (e, t) {
                    n.writeSplitVarint64(e >>> 0, t >>> 0);
                  });
                this.endDelimited_(e);
              }
            }),
          (jspb.BinaryWriter.prototype.writePackedInt64String = function (
            e,
            t
          ) {
            if (null != t && t.length) {
              e = this.beginDelimited_(e);
              for (var o = 0; o < t.length; o++) {
                var r = jspb.arith.Int64.fromString(t[o]);
                this.encoder_.writeSplitVarint64(r.lo, r.hi);
              }
              this.endDelimited_(e);
            }
          }),
          (jspb.BinaryWriter.prototype.writePackedUint32 = function (e, t) {
            if (null != t && t.length) {
              e = this.beginDelimited_(e);
              for (var o = 0; o < t.length; o++)
                this.encoder_.writeUnsignedVarint32(t[o]);
              this.endDelimited_(e);
            }
          }),
          (jspb.BinaryWriter.prototype.writePackedUint32String = function (
            e,
            t
          ) {
            if (null != t && t.length) {
              e = this.beginDelimited_(e);
              for (var o = 0; o < t.length; o++)
                this.encoder_.writeUnsignedVarint32(parseInt(t[o], 10));
              this.endDelimited_(e);
            }
          }),
          (jspb.BinaryWriter.prototype.writePackedUint64 = function (e, t) {
            if (null != t && t.length) {
              e = this.beginDelimited_(e);
              for (var o = 0; o < t.length; o++)
                this.encoder_.writeUnsignedVarint64(t[o]);
              this.endDelimited_(e);
            }
          }),
          (jspb.BinaryWriter.prototype.writePackedUint64String = function (
            e,
            t
          ) {
            if (null != t && t.length) {
              e = this.beginDelimited_(e);
              for (var o = 0; o < t.length; o++) {
                var r = jspb.arith.UInt64.fromString(t[o]);
                this.encoder_.writeSplitVarint64(r.lo, r.hi);
              }
              this.endDelimited_(e);
            }
          }),
          (jspb.BinaryWriter.prototype.writePackedSint32 = function (e, t) {
            if (null != t && t.length) {
              e = this.beginDelimited_(e);
              for (var o = 0; o < t.length; o++)
                this.encoder_.writeZigzagVarint32(t[o]);
              this.endDelimited_(e);
            }
          }),
          (jspb.BinaryWriter.prototype.writePackedSint64 = function (e, t) {
            if (null != t && t.length) {
              e = this.beginDelimited_(e);
              for (var o = 0; o < t.length; o++)
                this.encoder_.writeZigzagVarint64(t[o]);
              this.endDelimited_(e);
            }
          }),
          (jspb.BinaryWriter.prototype.writePackedSint64String = function (
            e,
            t
          ) {
            if (null != t && t.length) {
              e = this.beginDelimited_(e);
              for (var o = 0; o < t.length; o++)
                this.encoder_.writeZigzagVarintHash64(
                  jspb.utils.decimalStringToHash64(t[o])
                );
              this.endDelimited_(e);
            }
          }),
          (jspb.BinaryWriter.prototype.writePackedSintHash64 = function (e, t) {
            if (null != t && t.length) {
              e = this.beginDelimited_(e);
              for (var o = 0; o < t.length; o++)
                this.encoder_.writeZigzagVarintHash64(t[o]);
              this.endDelimited_(e);
            }
          }),
          (jspb.BinaryWriter.prototype.writePackedFixed32 = function (e, t) {
            if (null != t && t.length)
              for (
                this.writeFieldHeader_(
                  e,
                  jspb.BinaryConstants.WireType.DELIMITED
                ),
                  this.encoder_.writeUnsignedVarint32(4 * t.length),
                  e = 0;
                e < t.length;
                e++
              )
                this.encoder_.writeUint32(t[e]);
          }),
          (jspb.BinaryWriter.prototype.writePackedFixed64 = function (e, t) {
            if (null != t && t.length)
              for (
                this.writeFieldHeader_(
                  e,
                  jspb.BinaryConstants.WireType.DELIMITED
                ),
                  this.encoder_.writeUnsignedVarint32(8 * t.length),
                  e = 0;
                e < t.length;
                e++
              )
                this.encoder_.writeUint64(t[e]);
          }),
          (jspb.BinaryWriter.prototype.writePackedFixed64String = function (
            e,
            t
          ) {
            if (null != t && t.length)
              for (
                this.writeFieldHeader_(
                  e,
                  jspb.BinaryConstants.WireType.DELIMITED
                ),
                  this.encoder_.writeUnsignedVarint32(8 * t.length),
                  e = 0;
                e < t.length;
                e++
              ) {
                var o = jspb.arith.UInt64.fromString(t[e]);
                this.encoder_.writeSplitFixed64(o.lo, o.hi);
              }
          }),
          (jspb.BinaryWriter.prototype.writePackedSfixed32 = function (e, t) {
            if (null != t && t.length)
              for (
                this.writeFieldHeader_(
                  e,
                  jspb.BinaryConstants.WireType.DELIMITED
                ),
                  this.encoder_.writeUnsignedVarint32(4 * t.length),
                  e = 0;
                e < t.length;
                e++
              )
                this.encoder_.writeInt32(t[e]);
          }),
          (jspb.BinaryWriter.prototype.writePackedSfixed64 = function (e, t) {
            if (null != t && t.length)
              for (
                this.writeFieldHeader_(
                  e,
                  jspb.BinaryConstants.WireType.DELIMITED
                ),
                  this.encoder_.writeUnsignedVarint32(8 * t.length),
                  e = 0;
                e < t.length;
                e++
              )
                this.encoder_.writeInt64(t[e]);
          }),
          (jspb.BinaryWriter.prototype.writePackedSfixed64String = function (
            e,
            t
          ) {
            if (null != t && t.length)
              for (
                this.writeFieldHeader_(
                  e,
                  jspb.BinaryConstants.WireType.DELIMITED
                ),
                  this.encoder_.writeUnsignedVarint32(8 * t.length),
                  e = 0;
                e < t.length;
                e++
              )
                this.encoder_.writeInt64String(t[e]);
          }),
          (jspb.BinaryWriter.prototype.writePackedFloat = function (e, t) {
            if (null != t && t.length)
              for (
                this.writeFieldHeader_(
                  e,
                  jspb.BinaryConstants.WireType.DELIMITED
                ),
                  this.encoder_.writeUnsignedVarint32(4 * t.length),
                  e = 0;
                e < t.length;
                e++
              )
                this.encoder_.writeFloat(t[e]);
          }),
          (jspb.BinaryWriter.prototype.writePackedDouble = function (e, t) {
            if (null != t && t.length)
              for (
                this.writeFieldHeader_(
                  e,
                  jspb.BinaryConstants.WireType.DELIMITED
                ),
                  this.encoder_.writeUnsignedVarint32(8 * t.length),
                  e = 0;
                e < t.length;
                e++
              )
                this.encoder_.writeDouble(t[e]);
          }),
          (jspb.BinaryWriter.prototype.writePackedBool = function (e, t) {
            if (null != t && t.length)
              for (
                this.writeFieldHeader_(
                  e,
                  jspb.BinaryConstants.WireType.DELIMITED
                ),
                  this.encoder_.writeUnsignedVarint32(t.length),
                  e = 0;
                e < t.length;
                e++
              )
                this.encoder_.writeBool(t[e]);
          }),
          (jspb.BinaryWriter.prototype.writePackedEnum = function (e, t) {
            if (null != t && t.length) {
              e = this.beginDelimited_(e);
              for (var o = 0; o < t.length; o++) this.encoder_.writeEnum(t[o]);
              this.endDelimited_(e);
            }
          }),
          (jspb.BinaryWriter.prototype.writePackedFixedHash64 = function (
            e,
            t
          ) {
            if (null != t && t.length)
              for (
                this.writeFieldHeader_(
                  e,
                  jspb.BinaryConstants.WireType.DELIMITED
                ),
                  this.encoder_.writeUnsignedVarint32(8 * t.length),
                  e = 0;
                e < t.length;
                e++
              )
                this.encoder_.writeFixedHash64(t[e]);
          }),
          (jspb.BinaryWriter.prototype.writePackedVarintHash64 = function (
            e,
            t
          ) {
            if (null != t && t.length) {
              e = this.beginDelimited_(e);
              for (var o = 0; o < t.length; o++)
                this.encoder_.writeVarintHash64(t[o]);
              this.endDelimited_(e);
            }
          }),
          (jspb.Map = function (e, t) {
            (this.arr_ = e),
              (this.valueCtor_ = t),
              (this.map_ = {}),
              (this.arrClean = !0),
              0 < this.arr_.length && this.loadFromArray_();
          }),
          (jspb.Map.prototype.loadFromArray_ = function () {
            for (var e = 0; e < this.arr_.length; e++) {
              var t = this.arr_[e],
                o = t[0];
              this.map_[o.toString()] = new jspb.Map.Entry_(o, t[1]);
            }
            this.arrClean = !0;
          }),
          (jspb.Map.prototype.toArray = function () {
            if (this.arrClean) {
              if (this.valueCtor_) {
                var e,
                  t = this.map_;
                for (e in t)
                  if (Object.prototype.hasOwnProperty.call(t, e)) {
                    var o = t[e].valueWrapper;
                    o && o.toArray();
                  }
              }
            } else {
              for (
                this.arr_.length = 0, (t = this.stringKeys_()).sort(), e = 0;
                e < t.length;
                e++
              ) {
                var r = this.map_[t[e]];
                (o = r.valueWrapper) && o.toArray(),
                  this.arr_.push([r.key, r.value]);
              }
              this.arrClean = !0;
            }
            return this.arr_;
          }),
          (jspb.Map.prototype.toObject = function (e, t) {
            for (var o = this.toArray(), r = [], n = 0; n < o.length; n++) {
              var i = this.map_[o[n][0].toString()];
              this.wrapEntry_(i);
              var a = i.valueWrapper;
              a
                ? (goog.asserts.assert(t), r.push([i.key, t(e, a)]))
                : r.push([i.key, i.value]);
            }
            return r;
          }),
          (jspb.Map.fromObject = function (e, t, o) {
            t = new jspb.Map([], t);
            for (var r = 0; r < e.length; r++) {
              var n = e[r][0],
                i = o(e[r][1]);
              t.set(n, i);
            }
            return t;
          }),
          (jspb.Map.ArrayIteratorIterable_ = function (e) {
            (this.idx_ = 0), (this.arr_ = e);
          }),
          (jspb.Map.ArrayIteratorIterable_.prototype.next = function () {
            return this.idx_ < this.arr_.length
              ? { done: !1, value: this.arr_[this.idx_++] }
              : { done: !0, value: void 0 };
          }),
          "undefined" != typeof Symbol &&
            (jspb.Map.ArrayIteratorIterable_.prototype[Symbol.iterator] =
              function () {
                return this;
              }),
          (jspb.Map.prototype.getLength = function () {
            return this.stringKeys_().length;
          }),
          (jspb.Map.prototype.clear = function () {
            (this.map_ = {}), (this.arrClean = !1);
          }),
          (jspb.Map.prototype.del = function (e) {
            e = e.toString();
            var t = this.map_.hasOwnProperty(e);
            return delete this.map_[e], (this.arrClean = !1), t;
          }),
          (jspb.Map.prototype.getEntryList = function () {
            var e = [],
              t = this.stringKeys_();
            t.sort();
            for (var o = 0; o < t.length; o++) {
              var r = this.map_[t[o]];
              e.push([r.key, r.value]);
            }
            return e;
          }),
          (jspb.Map.prototype.entries = function () {
            var e = [],
              t = this.stringKeys_();
            t.sort();
            for (var o = 0; o < t.length; o++) {
              var r = this.map_[t[o]];
              e.push([r.key, this.wrapEntry_(r)]);
            }
            return new jspb.Map.ArrayIteratorIterable_(e);
          }),
          (jspb.Map.prototype.keys = function () {
            var e = [],
              t = this.stringKeys_();
            t.sort();
            for (var o = 0; o < t.length; o++) e.push(this.map_[t[o]].key);
            return new jspb.Map.ArrayIteratorIterable_(e);
          }),
          (jspb.Map.prototype.values = function () {
            var e = [],
              t = this.stringKeys_();
            t.sort();
            for (var o = 0; o < t.length; o++)
              e.push(this.wrapEntry_(this.map_[t[o]]));
            return new jspb.Map.ArrayIteratorIterable_(e);
          }),
          (jspb.Map.prototype.forEach = function (e, t) {
            var o = this.stringKeys_();
            o.sort();
            for (var r = 0; r < o.length; r++) {
              var n = this.map_[o[r]];
              e.call(t, this.wrapEntry_(n), n.key, this);
            }
          }),
          (jspb.Map.prototype.set = function (e, t) {
            var o = new jspb.Map.Entry_(e);
            return (
              this.valueCtor_
                ? ((o.valueWrapper = t), (o.value = t.toArray()))
                : (o.value = t),
              (this.map_[e.toString()] = o),
              (this.arrClean = !1),
              this
            );
          }),
          (jspb.Map.prototype.wrapEntry_ = function (e) {
            return this.valueCtor_
              ? (e.valueWrapper ||
                  (e.valueWrapper = new this.valueCtor_(e.value)),
                e.valueWrapper)
              : e.value;
          }),
          (jspb.Map.prototype.get = function (e) {
            if ((e = this.map_[e.toString()])) return this.wrapEntry_(e);
          }),
          (jspb.Map.prototype.has = function (e) {
            return e.toString() in this.map_;
          }),
          (jspb.Map.prototype.serializeBinary = function (e, t, o, r, n) {
            var i = this.stringKeys_();
            i.sort();
            for (var a = 0; a < i.length; a++) {
              var s = this.map_[i[a]];
              t.beginSubMessage(e),
                o.call(t, 1, s.key),
                this.valueCtor_
                  ? r.call(t, 2, this.wrapEntry_(s), n)
                  : r.call(t, 2, s.value),
                t.endSubMessage();
            }
          }),
          (jspb.Map.deserializeBinary = function (e, t, o, r, n, i, a) {
            for (; t.nextField() && !t.isEndGroup(); ) {
              var s = t.getFieldNumber();
              1 == s
                ? (i = o.call(t))
                : 2 == s &&
                  (e.valueCtor_
                    ? (goog.asserts.assert(n),
                      a || (a = new e.valueCtor_()),
                      r.call(t, a, n))
                    : (a = r.call(t)));
            }
            goog.asserts.assert(null != i),
              goog.asserts.assert(null != a),
              e.set(i, a);
          }),
          (jspb.Map.prototype.stringKeys_ = function () {
            var e,
              t = this.map_,
              o = [];
            for (e in t)
              Object.prototype.hasOwnProperty.call(t, e) && o.push(e);
            return o;
          }),
          (jspb.Map.Entry_ = function (e, t) {
            (this.key = e), (this.value = t), (this.valueWrapper = void 0);
          }),
          (jspb.ExtensionFieldInfo = function (e, t, o, r, n) {
            (this.fieldIndex = e),
              (this.fieldName = t),
              (this.ctor = o),
              (this.toObjectFn = r),
              (this.isRepeated = n);
          }),
          (jspb.ExtensionFieldBinaryInfo = function (e, t, o, r, n, i) {
            (this.fieldInfo = e),
              (this.binaryReaderFn = t),
              (this.binaryWriterFn = o),
              (this.binaryMessageSerializeFn = r),
              (this.binaryMessageDeserializeFn = n),
              (this.isPacked = i);
          }),
          (jspb.ExtensionFieldInfo.prototype.isMessageType = function () {
            return !!this.ctor;
          }),
          (jspb.Message = function () {}),
          (jspb.Message.GENERATE_TO_OBJECT = !0),
          (jspb.Message.GENERATE_FROM_OBJECT = !goog.DISALLOW_TEST_ONLY_CODE),
          (jspb.Message.GENERATE_TO_STRING = !0),
          (jspb.Message.ASSUME_LOCAL_ARRAYS = !1),
          (jspb.Message.SERIALIZE_EMPTY_TRAILING_FIELDS = !0),
          (jspb.Message.SUPPORTS_UINT8ARRAY_ = "function" == typeof Uint8Array),
          (jspb.Message.prototype.getJsPbMessageId = function () {
            return this.messageId_;
          }),
          (jspb.Message.getIndex_ = function (e, t) {
            return t + e.arrayIndexOffset_;
          }),
          (jspb.Message.hiddenES6Property_ = function () {}),
          (jspb.Message.getFieldNumber_ = function (e, t) {
            return t - e.arrayIndexOffset_;
          }),
          (jspb.Message.initialize = function (e, t, o, r, n, i) {
            if (
              ((e.wrappers_ = null),
              t || (t = o ? [o] : []),
              (e.messageId_ = o ? String(o) : void 0),
              (e.arrayIndexOffset_ = 0 === o ? -1 : 0),
              (e.array = t),
              jspb.Message.initPivotAndExtensionObject_(e, r),
              (e.convertedPrimitiveFields_ = {}),
              jspb.Message.SERIALIZE_EMPTY_TRAILING_FIELDS ||
                (e.repeatedFields = n),
              n)
            )
              for (t = 0; t < n.length; t++)
                (o = n[t]) < e.pivot_
                  ? ((o = jspb.Message.getIndex_(e, o)),
                    (e.array[o] =
                      e.array[o] || jspb.Message.EMPTY_LIST_SENTINEL_))
                  : (jspb.Message.maybeInitEmptyExtensionObject_(e),
                    (e.extensionObject_[o] =
                      e.extensionObject_[o] ||
                      jspb.Message.EMPTY_LIST_SENTINEL_));
            if (i && i.length)
              for (t = 0; t < i.length; t++)
                jspb.Message.computeOneofCase(e, i[t]);
          }),
          (jspb.Message.EMPTY_LIST_SENTINEL_ =
            goog.DEBUG && Object.freeze ? Object.freeze([]) : []),
          (jspb.Message.isArray_ = function (e) {
            return jspb.Message.ASSUME_LOCAL_ARRAYS
              ? e instanceof Array
              : Array.isArray(e);
          }),
          (jspb.Message.isExtensionObject_ = function (e) {
            return !(
              null === e ||
              "object" != typeof e ||
              jspb.Message.isArray_(e) ||
              (jspb.Message.SUPPORTS_UINT8ARRAY_ && e instanceof Uint8Array)
            );
          }),
          (jspb.Message.initPivotAndExtensionObject_ = function (e, t) {
            var o = e.array.length,
              r = -1;
            if (
              o &&
              ((r = o - 1),
              (o = e.array[r]),
              jspb.Message.isExtensionObject_(o))
            )
              return (
                (e.pivot_ = jspb.Message.getFieldNumber_(e, r)),
                void (e.extensionObject_ = o)
              );
            -1 < t
              ? ((e.pivot_ = Math.max(
                  t,
                  jspb.Message.getFieldNumber_(e, r + 1)
                )),
                (e.extensionObject_ = null))
              : (e.pivot_ = Number.MAX_VALUE);
          }),
          (jspb.Message.maybeInitEmptyExtensionObject_ = function (e) {
            var t = jspb.Message.getIndex_(e, e.pivot_);
            e.array[t] || (e.extensionObject_ = e.array[t] = {});
          }),
          (jspb.Message.toObjectList = function (e, t, o) {
            for (var r = [], n = 0; n < e.length; n++)
              r[n] = t.call(e[n], o, e[n]);
            return r;
          }),
          (jspb.Message.toObjectExtension = function (e, t, o, r, n) {
            for (var i in o) {
              var a = o[i],
                s = r.call(e, a);
              if (null != s) {
                for (var g in a.fieldName)
                  if (a.fieldName.hasOwnProperty(g)) break;
                t[g] = a.toObjectFn
                  ? a.isRepeated
                    ? jspb.Message.toObjectList(s, a.toObjectFn, n)
                    : a.toObjectFn(n, s)
                  : s;
              }
            }
          }),
          (jspb.Message.serializeBinaryExtensions = function (e, t, o, r) {
            for (var n in o) {
              var i = o[n],
                a = i.fieldInfo;
              if (!i.binaryWriterFn)
                throw Error(
                  "Message extension present that was generated without binary serialization support"
                );
              var s = r.call(e, a);
              if (null != s)
                if (a.isMessageType()) {
                  if (!i.binaryMessageSerializeFn)
                    throw Error(
                      "Message extension present holding submessage without binary support enabled, and message is being serialized to binary format"
                    );
                  i.binaryWriterFn.call(
                    t,
                    a.fieldIndex,
                    s,
                    i.binaryMessageSerializeFn
                  );
                } else i.binaryWriterFn.call(t, a.fieldIndex, s);
            }
          }),
          (jspb.Message.readBinaryExtension = function (e, t, o, r, n) {
            var i = o[t.getFieldNumber()];
            if (i) {
              if (((o = i.fieldInfo), !i.binaryReaderFn))
                throw Error(
                  "Deserializing extension whose generated code does not support binary format"
                );
              if (o.isMessageType()) {
                var a = new o.ctor();
                i.binaryReaderFn.call(t, a, i.binaryMessageDeserializeFn);
              } else a = i.binaryReaderFn.call(t);
              o.isRepeated && !i.isPacked
                ? (t = r.call(e, o))
                  ? t.push(a)
                  : n.call(e, o, [a])
                : n.call(e, o, a);
            } else t.skipField();
          }),
          (jspb.Message.getField = function (e, t) {
            if (t < e.pivot_) {
              t = jspb.Message.getIndex_(e, t);
              var o = e.array[t];
              return o === jspb.Message.EMPTY_LIST_SENTINEL_
                ? (e.array[t] = [])
                : o;
            }
            if (e.extensionObject_)
              return (o = e.extensionObject_[t]) ===
                jspb.Message.EMPTY_LIST_SENTINEL_
                ? (e.extensionObject_[t] = [])
                : o;
          }),
          (jspb.Message.getRepeatedField = function (e, t) {
            return jspb.Message.getField(e, t);
          }),
          (jspb.Message.getOptionalFloatingPointField = function (e, t) {
            return null == (e = jspb.Message.getField(e, t)) ? e : +e;
          }),
          (jspb.Message.getBooleanField = function (e, t) {
            return null == (e = jspb.Message.getField(e, t)) ? e : !!e;
          }),
          (jspb.Message.getRepeatedFloatingPointField = function (e, t) {
            var o = jspb.Message.getRepeatedField(e, t);
            if (
              (e.convertedPrimitiveFields_ ||
                (e.convertedPrimitiveFields_ = {}),
              !e.convertedPrimitiveFields_[t])
            ) {
              for (var r = 0; r < o.length; r++) o[r] = +o[r];
              e.convertedPrimitiveFields_[t] = !0;
            }
            return o;
          }),
          (jspb.Message.getRepeatedBooleanField = function (e, t) {
            var o = jspb.Message.getRepeatedField(e, t);
            if (
              (e.convertedPrimitiveFields_ ||
                (e.convertedPrimitiveFields_ = {}),
              !e.convertedPrimitiveFields_[t])
            ) {
              for (var r = 0; r < o.length; r++) o[r] = !!o[r];
              e.convertedPrimitiveFields_[t] = !0;
            }
            return o;
          }),
          (jspb.Message.bytesAsB64 = function (e) {
            return null == e || "string" == typeof e
              ? e
              : jspb.Message.SUPPORTS_UINT8ARRAY_ && e instanceof Uint8Array
              ? goog.crypt.base64.encodeByteArray(e)
              : (goog.asserts.fail(
                  "Cannot coerce to b64 string: " + goog.typeOf(e)
                ),
                null);
          }),
          (jspb.Message.bytesAsU8 = function (e) {
            return null == e || e instanceof Uint8Array
              ? e
              : "string" == typeof e
              ? goog.crypt.base64.decodeStringToUint8Array(e)
              : (goog.asserts.fail(
                  "Cannot coerce to Uint8Array: " + goog.typeOf(e)
                ),
                null);
          }),
          (jspb.Message.bytesListAsB64 = function (e) {
            return (
              jspb.Message.assertConsistentTypes_(e),
              e.length && "string" != typeof e[0]
                ? goog.array.map(e, jspb.Message.bytesAsB64)
                : e
            );
          }),
          (jspb.Message.bytesListAsU8 = function (e) {
            return (
              jspb.Message.assertConsistentTypes_(e),
              !e.length || e[0] instanceof Uint8Array
                ? e
                : goog.array.map(e, jspb.Message.bytesAsU8)
            );
          }),
          (jspb.Message.assertConsistentTypes_ = function (e) {
            if (goog.DEBUG && e && 1 < e.length) {
              var t = goog.typeOf(e[0]);
              goog.array.forEach(e, function (e) {
                goog.typeOf(e) != t &&
                  goog.asserts.fail(
                    "Inconsistent type in JSPB repeated field array. Got " +
                      goog.typeOf(e) +
                      " expected " +
                      t
                  );
              });
            }
          }),
          (jspb.Message.getFieldWithDefault = function (e, t, o) {
            return null == (e = jspb.Message.getField(e, t)) ? o : e;
          }),
          (jspb.Message.getBooleanFieldWithDefault = function (e, t, o) {
            return null == (e = jspb.Message.getBooleanField(e, t)) ? o : e;
          }),
          (jspb.Message.getFloatingPointFieldWithDefault = function (e, t, o) {
            return null ==
              (e = jspb.Message.getOptionalFloatingPointField(e, t))
              ? o
              : e;
          }),
          (jspb.Message.getFieldProto3 = jspb.Message.getFieldWithDefault),
          (jspb.Message.getMapField = function (e, t, o, r) {
            if ((e.wrappers_ || (e.wrappers_ = {}), t in e.wrappers_))
              return e.wrappers_[t];
            var n = jspb.Message.getField(e, t);
            if (!n) {
              if (o) return;
              (n = []), jspb.Message.setField(e, t, n);
            }
            return (e.wrappers_[t] = new jspb.Map(n, r));
          }),
          (jspb.Message.setField = function (e, t, o) {
            return (
              goog.asserts.assertInstanceof(e, jspb.Message),
              t < e.pivot_
                ? (e.array[jspb.Message.getIndex_(e, t)] = o)
                : (jspb.Message.maybeInitEmptyExtensionObject_(e),
                  (e.extensionObject_[t] = o)),
              e
            );
          }),
          (jspb.Message.setProto3IntField = function (e, t, o) {
            return jspb.Message.setFieldIgnoringDefault_(e, t, o, 0);
          }),
          (jspb.Message.setProto3FloatField = function (e, t, o) {
            return jspb.Message.setFieldIgnoringDefault_(e, t, o, 0);
          }),
          (jspb.Message.setProto3BooleanField = function (e, t, o) {
            return jspb.Message.setFieldIgnoringDefault_(e, t, o, !1);
          }),
          (jspb.Message.setProto3StringField = function (e, t, o) {
            return jspb.Message.setFieldIgnoringDefault_(e, t, o, "");
          }),
          (jspb.Message.setProto3BytesField = function (e, t, o) {
            return jspb.Message.setFieldIgnoringDefault_(e, t, o, "");
          }),
          (jspb.Message.setProto3EnumField = function (e, t, o) {
            return jspb.Message.setFieldIgnoringDefault_(e, t, o, 0);
          }),
          (jspb.Message.setProto3StringIntField = function (e, t, o) {
            return jspb.Message.setFieldIgnoringDefault_(e, t, o, "0");
          }),
          (jspb.Message.setFieldIgnoringDefault_ = function (e, t, o, r) {
            return (
              goog.asserts.assertInstanceof(e, jspb.Message),
              o !== r
                ? jspb.Message.setField(e, t, o)
                : t < e.pivot_
                ? (e.array[jspb.Message.getIndex_(e, t)] = null)
                : (jspb.Message.maybeInitEmptyExtensionObject_(e),
                  delete e.extensionObject_[t]),
              e
            );
          }),
          (jspb.Message.addToRepeatedField = function (e, t, o, r) {
            return (
              goog.asserts.assertInstanceof(e, jspb.Message),
              (t = jspb.Message.getRepeatedField(e, t)),
              null != r ? t.splice(r, 0, o) : t.push(o),
              e
            );
          }),
          (jspb.Message.setOneofField = function (e, t, o, r) {
            return (
              goog.asserts.assertInstanceof(e, jspb.Message),
              (o = jspb.Message.computeOneofCase(e, o)) &&
                o !== t &&
                void 0 !== r &&
                (e.wrappers_ && o in e.wrappers_ && (e.wrappers_[o] = void 0),
                jspb.Message.setField(e, o, void 0)),
              jspb.Message.setField(e, t, r)
            );
          }),
          (jspb.Message.computeOneofCase = function (e, t) {
            for (var o, r, n = 0; n < t.length; n++) {
              var i = t[n],
                a = jspb.Message.getField(e, i);
              null != a &&
                ((o = i), (r = a), jspb.Message.setField(e, i, void 0));
            }
            return o ? (jspb.Message.setField(e, o, r), o) : 0;
          }),
          (jspb.Message.getWrapperField = function (e, t, o, r) {
            if ((e.wrappers_ || (e.wrappers_ = {}), !e.wrappers_[o])) {
              var n = jspb.Message.getField(e, o);
              (r || n) && (e.wrappers_[o] = new t(n));
            }
            return e.wrappers_[o];
          }),
          (jspb.Message.getRepeatedWrapperField = function (e, t, o) {
            return (
              jspb.Message.wrapRepeatedField_(e, t, o),
              (t = e.wrappers_[o]) == jspb.Message.EMPTY_LIST_SENTINEL_ &&
                (t = e.wrappers_[o] = []),
              t
            );
          }),
          (jspb.Message.wrapRepeatedField_ = function (e, t, o) {
            if ((e.wrappers_ || (e.wrappers_ = {}), !e.wrappers_[o])) {
              for (
                var r = jspb.Message.getRepeatedField(e, o), n = [], i = 0;
                i < r.length;
                i++
              )
                n[i] = new t(r[i]);
              e.wrappers_[o] = n;
            }
          }),
          (jspb.Message.setWrapperField = function (e, t, o) {
            goog.asserts.assertInstanceof(e, jspb.Message),
              e.wrappers_ || (e.wrappers_ = {});
            var r = o ? o.toArray() : o;
            return (e.wrappers_[t] = o), jspb.Message.setField(e, t, r);
          }),
          (jspb.Message.setOneofWrapperField = function (e, t, o, r) {
            goog.asserts.assertInstanceof(e, jspb.Message),
              e.wrappers_ || (e.wrappers_ = {});
            var n = r ? r.toArray() : r;
            return (e.wrappers_[t] = r), jspb.Message.setOneofField(e, t, o, n);
          }),
          (jspb.Message.setRepeatedWrapperField = function (e, t, o) {
            goog.asserts.assertInstanceof(e, jspb.Message),
              e.wrappers_ || (e.wrappers_ = {}),
              (o = o || []);
            for (var r = [], n = 0; n < o.length; n++) r[n] = o[n].toArray();
            return (e.wrappers_[t] = o), jspb.Message.setField(e, t, r);
          }),
          (jspb.Message.addToRepeatedWrapperField = function (e, t, o, r, n) {
            jspb.Message.wrapRepeatedField_(e, r, t);
            var i = e.wrappers_[t];
            return (
              i || (i = e.wrappers_[t] = []),
              (o = o || new r()),
              (e = jspb.Message.getRepeatedField(e, t)),
              null != n
                ? (i.splice(n, 0, o), e.splice(n, 0, o.toArray()))
                : (i.push(o), e.push(o.toArray())),
              o
            );
          }),
          (jspb.Message.toMap = function (e, t, o, r) {
            for (var n = {}, i = 0; i < e.length; i++)
              n[t.call(e[i])] = o ? o.call(e[i], r, e[i]) : e[i];
            return n;
          }),
          (jspb.Message.prototype.syncMapFields_ = function () {
            if (this.wrappers_)
              for (var e in this.wrappers_) {
                var t = this.wrappers_[e];
                if (Array.isArray(t))
                  for (var o = 0; o < t.length; o++) t[o] && t[o].toArray();
                else t && t.toArray();
              }
          }),
          (jspb.Message.prototype.toArray = function () {
            return this.syncMapFields_(), this.array;
          }),
          jspb.Message.GENERATE_TO_STRING &&
            (jspb.Message.prototype.toString = function () {
              return this.syncMapFields_(), this.array.toString();
            }),
          (jspb.Message.prototype.getExtension = function (e) {
            if (this.extensionObject_) {
              this.wrappers_ || (this.wrappers_ = {});
              var t = e.fieldIndex;
              if (e.isRepeated) {
                if (e.isMessageType())
                  return (
                    this.wrappers_[t] ||
                      (this.wrappers_[t] = goog.array.map(
                        this.extensionObject_[t] || [],
                        function (t) {
                          return new e.ctor(t);
                        }
                      )),
                    this.wrappers_[t]
                  );
              } else if (e.isMessageType())
                return (
                  !this.wrappers_[t] &&
                    this.extensionObject_[t] &&
                    (this.wrappers_[t] = new e.ctor(this.extensionObject_[t])),
                  this.wrappers_[t]
                );
              return this.extensionObject_[t];
            }
          }),
          (jspb.Message.prototype.setExtension = function (e, t) {
            this.wrappers_ || (this.wrappers_ = {}),
              jspb.Message.maybeInitEmptyExtensionObject_(this);
            var o = e.fieldIndex;
            return (
              e.isRepeated
                ? ((t = t || []),
                  e.isMessageType()
                    ? ((this.wrappers_[o] = t),
                      (this.extensionObject_[o] = goog.array.map(
                        t,
                        function (e) {
                          return e.toArray();
                        }
                      )))
                    : (this.extensionObject_[o] = t))
                : e.isMessageType()
                ? ((this.wrappers_[o] = t),
                  (this.extensionObject_[o] = t ? t.toArray() : t))
                : (this.extensionObject_[o] = t),
              this
            );
          }),
          (jspb.Message.difference = function (e, t) {
            if (!(e instanceof t.constructor))
              throw Error("Messages have different types.");
            var o = e.toArray();
            t = t.toArray();
            var r = [],
              n = 0,
              i = o.length > t.length ? o.length : t.length;
            for (
              e.getJsPbMessageId() && ((r[0] = e.getJsPbMessageId()), (n = 1));
              n < i;
              n++
            )
              jspb.Message.compareFields(o[n], t[n]) || (r[n] = t[n]);
            return new e.constructor(r);
          }),
          (jspb.Message.equals = function (e, t) {
            return (
              e == t ||
              (!(!e || !t) &&
                e instanceof t.constructor &&
                jspb.Message.compareFields(e.toArray(), t.toArray()))
            );
          }),
          (jspb.Message.compareExtensions = function (e, t) {
            (e = e || {}), (t = t || {});
            var o,
              r = {};
            for (o in e) r[o] = 0;
            for (o in t) r[o] = 0;
            for (o in r) if (!jspb.Message.compareFields(e[o], t[o])) return !1;
            return !0;
          }),
          (jspb.Message.compareFields = function (e, t) {
            if (e == t) return !0;
            if (!goog.isObject(e) || !goog.isObject(t))
              return (
                !!(
                  ("number" == typeof e && isNaN(e)) ||
                  ("number" == typeof t && isNaN(t))
                ) && String(e) == String(t)
              );
            if (e.constructor != t.constructor) return !1;
            if (
              jspb.Message.SUPPORTS_UINT8ARRAY_ &&
              e.constructor === Uint8Array
            ) {
              if (e.length != t.length) return !1;
              for (var o = 0; o < e.length; o++) if (e[o] != t[o]) return !1;
              return !0;
            }
            if (e.constructor === Array) {
              var r = void 0,
                n = void 0,
                i = Math.max(e.length, t.length);
              for (o = 0; o < i; o++) {
                var a = e[o],
                  s = t[o];
                if (
                  (a &&
                    a.constructor == Object &&
                    (goog.asserts.assert(void 0 === r),
                    goog.asserts.assert(o === e.length - 1),
                    (r = a),
                    (a = void 0)),
                  s &&
                    s.constructor == Object &&
                    (goog.asserts.assert(void 0 === n),
                    goog.asserts.assert(o === t.length - 1),
                    (n = s),
                    (s = void 0)),
                  !jspb.Message.compareFields(a, s))
                )
                  return !1;
              }
              return (
                (!r && !n) ||
                ((r = r || {}),
                (n = n || {}),
                jspb.Message.compareExtensions(r, n))
              );
            }
            if (e.constructor === Object)
              return jspb.Message.compareExtensions(e, t);
            throw Error("Invalid type in JSPB array");
          }),
          (jspb.Message.prototype.cloneMessage = function () {
            return jspb.Message.cloneMessage(this);
          }),
          (jspb.Message.prototype.clone = function () {
            return jspb.Message.cloneMessage(this);
          }),
          (jspb.Message.clone = function (e) {
            return jspb.Message.cloneMessage(e);
          }),
          (jspb.Message.cloneMessage = function (e) {
            return new e.constructor(jspb.Message.clone_(e.toArray()));
          }),
          (jspb.Message.copyInto = function (e, t) {
            goog.asserts.assertInstanceof(e, jspb.Message),
              goog.asserts.assertInstanceof(t, jspb.Message),
              goog.asserts.assert(
                e.constructor == t.constructor,
                "Copy source and target message should have the same type."
              ),
              (e = jspb.Message.clone(e));
            for (
              var o = t.toArray(), r = e.toArray(), n = (o.length = 0);
              n < r.length;
              n++
            )
              o[n] = r[n];
            (t.wrappers_ = e.wrappers_),
              (t.extensionObject_ = e.extensionObject_);
          }),
          (jspb.Message.clone_ = function (e) {
            if (Array.isArray(e)) {
              for (var t = Array(e.length), o = 0; o < e.length; o++) {
                var r = e[o];
                null != r &&
                  (t[o] =
                    "object" == typeof r
                      ? jspb.Message.clone_(goog.asserts.assert(r))
                      : r);
              }
              return t;
            }
            if (jspb.Message.SUPPORTS_UINT8ARRAY_ && e instanceof Uint8Array)
              return new Uint8Array(e);
            for (o in ((t = {}), e))
              null != (r = e[o]) &&
                (t[o] =
                  "object" == typeof r
                    ? jspb.Message.clone_(goog.asserts.assert(r))
                    : r);
            return t;
          }),
          (jspb.Message.registerMessageType = function (e, t) {
            t.messageId = e;
          }),
          (jspb.Message.messageSetExtensions = {}),
          (jspb.Message.messageSetExtensionsBinary = {}),
          (jspb.Export = {}),
          "object" == typeof exports &&
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
      },
      84: (e, t, o) => {
        "use strict";
        o.d(t, { B: () => s });
        var r = o(655),
          n = o(455),
          i = o(399);
        let a = [
          { index: 0, type: n.eV.OK, category: "action" },
          { index: 1, type: n.eV.CANCEL, category: "action" },
          { index: 2, type: n.eV.SECONDARY, category: "action" },
          { index: 3, type: n.eV.OPTIONS, category: "action" },
          { index: 4, type: n.eV.BUMPER_LEFT, category: "action" },
          { index: 5, type: n.eV.BUMPER_RIGHT, category: "action" },
          { index: 6, type: n.eV.TRIGGER_LEFT, category: "action" },
          { index: 7, type: n.eV.TRIGGER_RIGHT, category: "action" },
          { index: 8, type: n.eV.SELECT, category: "action" },
          { index: 9, type: n.eV.START, category: "action" },
          { index: 10, type: n.eV.LSTICK_CLICK, category: "action" },
          { index: 11, type: n.eV.RSTICK_CLICK, category: "action" },
          { index: 12, type: n.eV.DIR_UP, category: "navigation" },
          { index: 13, type: n.eV.DIR_DOWN, category: "navigation" },
          { index: 14, type: n.eV.DIR_LEFT, category: "navigation" },
          { index: 15, type: n.eV.DIR_RIGHT, category: "navigation" },
          { index: 16, type: n.eV.STEAM_GUIDE, category: "action" },
          { index: 17, type: n.eV.SELECT, category: "action" },
        ];
        class s extends n.oH {
          constructor() {
            super(),
              (this.m_rgGamepadStatus = []),
              this.SetSourceType(n.Rr.GAMEPAD),
              window.addEventListener("gamepadconnected", (e) => {
                this.m_bGamepadDetected ||
                  (this.OnGamepadDetected(), this.PollGamepads());
              });
          }
          PollGamepads() {
            let e = navigator.getGamepads(),
              t = !1;
            for (let o = 0; o < e.length; o++) {
              let r = e[o];
              if (!r) continue;
              this.m_rgGamepadStatus[o] ||
                (this.m_rgGamepadStatus[o] = { buttons: [] });
              let n = this.m_rgGamepadStatus[o];
              for (let e = 0; e < a.length; e++) {
                let o = a[e],
                  i = o.index;
                r.buttons[i] &&
                  (r.buttons[i].pressed
                    ? ((t = !0),
                      n.buttons[i] ||
                        ((n.buttons[i] = !0), this.OnButtonDown(o.type)))
                    : n.buttons[i] &&
                      (this.OnButtonUp(o.type), (n.buttons[i] = !1)));
              }
            }
            document.hasFocus() || t
              ? requestAnimationFrame(this.PollGamepads)
              : (console.log("Lost focus - suspending gamepad polling"),
                window.addEventListener("focusin", this.OnWindowRegainedFocus));
          }
          OnWindowRegainedFocus() {
            window.removeEventListener("focusin", this.OnWindowRegainedFocus),
              this.PollGamepads();
          }
        }
        (0, r.gn)([i.a], s.prototype, "PollGamepads", null),
          (0, r.gn)([i.a], s.prototype, "OnWindowRegainedFocus", null);
      },
      455: (e, t, o) => {
        "use strict";
        o.d(t, { eV: () => r, Rr: () => n, oH: () => g });
        var r,
          n,
          i = o(611);
        class a {
          constructor(e) {
            this.m_config = e;
          }
          Reset() {
            (this.m_ActiveInputId = void 0),
              null != this.m_ActiveInputTimeout &&
                (clearInterval(this.m_ActiveInputTimeout),
                (this.m_ActiveInputTimeout = void 0));
          }
          HandleInputButtonDown(e, t) {
            if (this.m_ActiveInputId !== e && null != t) {
              this.Reset(), (this.m_ActiveInputId = e);
              const o = () => {
                this.m_ActiveInputTimeout = window.setInterval(() => {
                  t();
                }, this.m_config.repeatInterval_ms);
              };
              null == this.m_config.firstRepeatInterval_ms ||
              this.m_config.firstRepeatInterval_ms ===
                this.m_config.repeatInterval_ms
                ? o()
                : (this.m_ActiveInputTimeout = window.setTimeout(() => {
                    t(), o();
                  }, this.m_config.firstRepeatInterval_ms));
            }
          }
        }
        class s {
          constructor(e) {
            (this.m_config = e), (this.m_inputRepeatGenerator = new a(e));
          }
          Reset() {
            this.m_inputRepeatGenerator.Reset();
          }
          HandleInputButtonDown(e, t) {
            this.m_config.inputsThatRepeat.has(e)
              ? this.m_inputRepeatGenerator.HandleInputButtonDown(e, t)
              : this.m_inputRepeatGenerator.Reset();
          }
          HandleInputButtonUp(e) {
            this.m_inputRepeatGenerator.Reset();
          }
        }
        !(function (e) {
          (e[(e.INVALID = 0)] = "INVALID"),
            (e[(e.OK = 1)] = "OK"),
            (e[(e.CANCEL = 2)] = "CANCEL"),
            (e[(e.SECONDARY = 3)] = "SECONDARY"),
            (e[(e.OPTIONS = 4)] = "OPTIONS"),
            (e[(e.BUMPER_LEFT = 5)] = "BUMPER_LEFT"),
            (e[(e.BUMPER_RIGHT = 6)] = "BUMPER_RIGHT"),
            (e[(e.TRIGGER_LEFT = 7)] = "TRIGGER_LEFT"),
            (e[(e.TRIGGER_RIGHT = 8)] = "TRIGGER_RIGHT"),
            (e[(e.DIR_UP = 9)] = "DIR_UP"),
            (e[(e.DIR_DOWN = 10)] = "DIR_DOWN"),
            (e[(e.DIR_LEFT = 11)] = "DIR_LEFT"),
            (e[(e.DIR_RIGHT = 12)] = "DIR_RIGHT"),
            (e[(e.SELECT = 13)] = "SELECT"),
            (e[(e.START = 14)] = "START"),
            (e[(e.LSTICK_CLICK = 15)] = "LSTICK_CLICK"),
            (e[(e.RSTICK_CLICK = 16)] = "RSTICK_CLICK"),
            (e[(e.LSTICK_TOUCH = 17)] = "LSTICK_TOUCH"),
            (e[(e.RSTICK_TOUCH = 18)] = "RSTICK_TOUCH"),
            (e[(e.LPAD_TOUCH = 19)] = "LPAD_TOUCH"),
            (e[(e.LPAD_CLICK = 20)] = "LPAD_CLICK"),
            (e[(e.RPAD_TOUCH = 21)] = "RPAD_TOUCH"),
            (e[(e.RPAD_CLICK = 22)] = "RPAD_CLICK"),
            (e[(e.REAR_LEFT_UPPER = 23)] = "REAR_LEFT_UPPER"),
            (e[(e.REAR_LEFT_LOWER = 24)] = "REAR_LEFT_LOWER"),
            (e[(e.REAR_RIGHT_UPPER = 25)] = "REAR_RIGHT_UPPER"),
            (e[(e.REAR_RIGHT_LOWER = 26)] = "REAR_RIGHT_LOWER"),
            (e[(e.STEAM_GUIDE = 27)] = "STEAM_GUIDE"),
            (e[(e.STEAM_QUICK_MENU = 28)] = "STEAM_QUICK_MENU");
        })(r || (r = {})),
          (function (e) {
            (e[(e.UNKNOWN = 0)] = "UNKNOWN"),
              (e[(e.GAMEPAD = 1)] = "GAMEPAD"),
              (e[(e.KEYBOARD = 2)] = "KEYBOARD"),
              (e[(e.MOUSE = 3)] = "MOUSE"),
              (e[(e.TOUCH = 4)] = "TOUCH"),
              (e[(e.LPAD = 5)] = "LPAD"),
              (e[(e.RPAD = 6)] = "RPAD");
          })(n || (n = {}));
        class g {
          constructor() {
            (this.m_OnGamepadDetectedCallbacks = new i.pB()),
              (this.m_ButtonDownCallbacks = new i.pB()),
              (this.m_ButtonUpCallbacks = new i.pB()),
              (this.m_AnalogCallbacks = new i.pB()),
              (this.m_NavigationTypeChangeCallbacks = new i.pB()),
              (this.m_nLastActiveControllerIndex = -1),
              (this.m_ButtonRepeatHandler = new s({
                inputsThatRepeat: new Set([
                  r.DIR_UP,
                  r.DIR_DOWN,
                  r.DIR_LEFT,
                  r.DIR_RIGHT,
                ]),
                firstRepeatInterval_ms: 400,
                repeatInterval_ms: 50,
              })),
              (this.m_bGamepadDetected = !1);
          }
          RegisterForGamepadDetected(e) {
            return this.m_OnGamepadDetectedCallbacks.Register(e);
          }
          RegisterForGamepadButtonDown(e) {
            return this.m_ButtonDownCallbacks.Register(e);
          }
          RegisterForGamepadButtonUp(e) {
            return this.m_ButtonUpCallbacks.Register(e);
          }
          RegisterForAnalog(e) {
            return this.m_AnalogCallbacks.Register(e);
          }
          RegisterForNavigationTypeChange(e) {
            return this.m_NavigationTypeChangeCallbacks.Register(e);
          }
          SetSourceType(e) {
            this.m_eNavigationSourceType = e;
          }
          GetSourceType() {
            return this.m_eNavigationSourceType;
          }
          SetControllerActive(e) {
            (this.m_nLastActiveControllerIndex = e),
              (this.m_fLastActiveTime = Date.now());
          }
          GetActiveControllerIndex() {
            return this.m_nLastActiveControllerIndex;
          }
          GetActiveControllerTime() {
            return this.m_fLastActiveTime;
          }
          OnGamepadDetected() {
            console.log("Gamepad detected"),
              (this.m_bGamepadDetected = !0),
              this.m_OnGamepadDetectedCallbacks.Dispatch();
          }
          OnButtonDown(e, t) {
            void 0 === t && (t = -1),
              this.SetControllerActive(t),
              this.DispatchButtonDown(e),
              this.m_ButtonRepeatHandler.HandleInputButtonDown(e, () =>
                this.DispatchButtonDown(e, !0)
              );
          }
          OnButtonUp(e, t) {
            void 0 === t && (t = -1),
              this.SetControllerActive(t),
              this.m_ButtonRepeatHandler.HandleInputButtonUp(e),
              this.m_ButtonUpCallbacks.Dispatch(
                e,
                this.m_eNavigationSourceType,
                this.m_nLastActiveControllerIndex
              );
          }
          DispatchButtonDown(e, t) {
            this.m_ButtonDownCallbacks.Dispatch(
              e,
              this.m_eNavigationSourceType,
              this.m_nLastActiveControllerIndex,
              t
            );
          }
          OnAnalogPad(e, t, o, r) {
            void 0 === r && (r = -1),
              this.SetControllerActive(r),
              this.m_AnalogCallbacks.Dispatch(
                e,
                this.m_nLastActiveControllerIndex,
                t,
                o
              );
          }
          OnNavigationTypeChanged(e) {
            this.m_NavigationTypeChangeCallbacks.Dispatch(e);
          }
        }
      },
      513: (e, t, o) => {
        "use strict";
        o.d(t, { U5: () => n.U5 });
        var r,
          n = o(697);
        !(function (e) {
          (e[(e.k_EPlatformTypeUnknown = 0)] = "k_EPlatformTypeUnknown"),
            (e[(e.k_EPlatformTypeWin32 = 1)] = "k_EPlatformTypeWin32"),
            (e[(e.k_EPlatformTypeWin64 = 2)] = "k_EPlatformTypeWin64"),
            (e[(e.k_EPlatformTypeLinux64 = 3)] = "k_EPlatformTypeLinux64"),
            (e[(e.k_EPlatformTypeOSX = 4)] = "k_EPlatformTypeOSX"),
            (e[(e.k_EPlatformTypePS3 = 5)] = "k_EPlatformTypePS3"),
            (e[(e.k_EPlatformTypeLinux32 = 6)] = "k_EPlatformTypeLinux32"),
            (e[(e.k_EPlatformTypeAndroid32 = 7)] = "k_EPlatformTypeAndroid32"),
            (e[(e.k_EPlatformTypeAndroid64 = 8)] = "k_EPlatformTypeAndroid64"),
            (e[(e.k_EPlatformTypeIOS32 = 9)] = "k_EPlatformTypeIOS32"),
            (e[(e.k_EPlatformTypeIOS64 = 10)] = "k_EPlatformTypeIOS64"),
            (e[(e.k_EPlatformTypeTVOS = 11)] = "k_EPlatformTypeTVOS"),
            (e[(e.k_EPlatformTypeEmbeddedClient = 12)] =
              "k_EPlatformTypeEmbeddedClient"),
            (e[(e.k_EPlatformTypeBrowser = 13)] = "k_EPlatformTypeBrowser"),
            (e[(e.k_EPlatformTypeMax = 14)] = "k_EPlatformTypeMax");
        })(r || (r = {}));
        var i, a, s, g, l, u, p, c, _, d, f, h, m, y;
        !(function (e) {
          (e[(e.k_EConnectivityTestResult_Unknown = 0)] =
            "k_EConnectivityTestResult_Unknown"),
            (e[(e.k_EConnectivityTestResult_Connected = 1)] =
              "k_EConnectivityTestResult_Connected"),
            (e[(e.k_EConnectivityTestResult_CaptivePortal = 2)] =
              "k_EConnectivityTestResult_CaptivePortal"),
            (e[(e.k_EConnectivityTestResult_TimedOut = 3)] =
              "k_EConnectivityTestResult_TimedOut"),
            (e[(e.k_EConnectivityTestResult_Failed = 4)] =
              "k_EConnectivityTestResult_Failed"),
            (e[(e.k_EConnectivityTestResult_WifiDisabled = 5)] =
              "k_EConnectivityTestResult_WifiDisabled"),
            (e[(e.k_EConnectivityTestResult_NoLAN = 6)] =
              "k_EConnectivityTestResult_NoLAN");
        })(i || (i = {})),
          (function (e) {
            (e[(e.k_ENetFakeLocalSystemState_Normal = 0)] =
              "k_ENetFakeLocalSystemState_Normal"),
              (e[(e.k_ENetFakeLocalSystemState_NoLAN = 1)] =
                "k_ENetFakeLocalSystemState_NoLAN"),
              (e[(e.k_ENetFakeLocalSystemState_CaptivePortal_Redirected = 2)] =
                "k_ENetFakeLocalSystemState_CaptivePortal_Redirected"),
              (e[(e.k_ENetFakeLocalSystemState_CaptivePortal_InPlace = 3)] =
                "k_ENetFakeLocalSystemState_CaptivePortal_InPlace"),
              (e[(e.k_ENetFakeLocalSystemState_NoInternet = 4)] =
                "k_ENetFakeLocalSystemState_NoInternet"),
              (e[(e.k_ENetFakeLocalSystemState_NoSteam = 5)] =
                "k_ENetFakeLocalSystemState_NoSteam");
          })(a || (a = {})),
          (function (e) {
            (e[(e.k_ESuspendResumeProgressState_Invalid = 0)] =
              "k_ESuspendResumeProgressState_Invalid"),
              (e[(e.k_ESuspendResumeProgressState_Complete = 1)] =
                "k_ESuspendResumeProgressState_Complete"),
              (e[(e.k_ESuspendResumeProgressState_CloudSync = 2)] =
                "k_ESuspendResumeProgressState_CloudSync"),
              (e[(e.k_ESuspendResumeProgressState_LoggingIn = 3)] =
                "k_ESuspendResumeProgressState_LoggingIn"),
              (e[(e.k_ESuspendResumeProgressState_WaitingForApp = 4)] =
                "k_ESuspendResumeProgressState_WaitingForApp"),
              (e[(e.k_ESuspendResumeProgressState_Working = 5)] =
                "k_ESuspendResumeProgressState_Working");
          })(s || (s = {})),
          (function (e) {
            (e[(e.k_EFloatingGamepadTextInputModeModeSingleLine = 0)] =
              "k_EFloatingGamepadTextInputModeModeSingleLine"),
              (e[(e.k_EFloatingGamepadTextInputModeModeMultipleLines = 1)] =
                "k_EFloatingGamepadTextInputModeModeMultipleLines"),
              (e[(e.k_EFloatingGamepadTextInputModeModeEmail = 2)] =
                "k_EFloatingGamepadTextInputModeModeEmail"),
              (e[(e.k_EFloatingGamepadTextInputModeModeNumeric = 3)] =
                "k_EFloatingGamepadTextInputModeModeNumeric");
          })(g || (g = {})),
          (function (e) {
            (e[(e.k_EAppUpdateContentType_Content = 0)] =
              "k_EAppUpdateContentType_Content"),
              (e[(e.k_EAppUpdateContentType_Workshop = 1)] =
                "k_EAppUpdateContentType_Workshop"),
              (e[(e.k_EAppUpdateContentType_Shader = 2)] =
                "k_EAppUpdateContentType_Shader"),
              (e[(e.k_EAppUpdateContentType_Max = 3)] =
                "k_EAppUpdateContentType_Max");
          })(l || (l = {})),
          (function (e) {
            (e[(e.k_EOverlayToStoreFlag_None = 0)] =
              "k_EOverlayToStoreFlag_None"),
              (e[(e.k_EOverlayToStoreFlag_AddToCart = 1)] =
                "k_EOverlayToStoreFlag_AddToCart"),
              (e[(e.k_EOverlayToStoreFlag_AddToCartAndShow = 2)] =
                "k_EOverlayToStoreFlag_AddToCartAndShow");
          })(u || (u = {})),
          (function (e) {
            (e[(e.k_EActivateGameOverlayToWebPageMode_Default = 0)] =
              "k_EActivateGameOverlayToWebPageMode_Default"),
              (e[(e.k_EActivateGameOverlayToWebPageMode_Modal = 1)] =
                "k_EActivateGameOverlayToWebPageMode_Modal");
          })(p || (p = {})),
          (function (e) {
            (e[(e.k_EGamingDeviceType_Unknown = 0)] =
              "k_EGamingDeviceType_Unknown"),
              (e[(e.k_EGamingDeviceType_StandardPC = 1)] =
                "k_EGamingDeviceType_StandardPC"),
              (e[(e.k_EGamingDeviceType_Console = 256)] =
                "k_EGamingDeviceType_Console"),
              (e[(e.k_EGamingDeviceType_PS3 = 272)] =
                "k_EGamingDeviceType_PS3"),
              (e[(e.k_EGamingDeviceType_Steambox = 288)] =
                "k_EGamingDeviceType_Steambox"),
              (e[(e.k_EGamingDeviceType_Handheld = 512)] =
                "k_EGamingDeviceType_Handheld"),
              (e[(e.k_EGamingDeviceType_Phone = 528)] =
                "k_EGamingDeviceType_Phone"),
              (e[(e.k_EGamingDeviceType_SteamDeck = 544)] =
                "k_EGamingDeviceType_SteamDeck");
          })(c || (c = {})),
          (function (e) {
            (e[(e.k_ELoginUIStyleOld = 0)] = "k_ELoginUIStyleOld"),
              (e[(e.k_ELoginUIStyleNewWithoutQRCode = 1)] =
                "k_ELoginUIStyleNewWithoutQRCode"),
              (e[(e.k_ELoginUIStyleNew = 2)] = "k_ELoginUIStyleNew");
          })(_ || (_ = {})),
          (function (e) {
            (e[(e.k_ECommunityProfileItemProperty_ImageSmall = 0)] =
              "k_ECommunityProfileItemProperty_ImageSmall"),
              (e[(e.k_ECommunityProfileItemProperty_ImageLarge = 1)] =
                "k_ECommunityProfileItemProperty_ImageLarge"),
              (e[(e.k_ECommunityProfileItemProperty_InternalName = 2)] =
                "k_ECommunityProfileItemProperty_InternalName"),
              (e[(e.k_ECommunityProfileItemProperty_Title = 3)] =
                "k_ECommunityProfileItemProperty_Title"),
              (e[(e.k_ECommunityProfileItemProperty_Description = 4)] =
                "k_ECommunityProfileItemProperty_Description"),
              (e[(e.k_ECommunityProfileItemProperty_AppID = 5)] =
                "k_ECommunityProfileItemProperty_AppID"),
              (e[(e.k_ECommunityProfileItemProperty_TypeID = 6)] =
                "k_ECommunityProfileItemProperty_TypeID"),
              (e[(e.k_ECommunityProfileItemProperty_Class = 7)] =
                "k_ECommunityProfileItemProperty_Class"),
              (e[(e.k_ECommunityProfileItemProperty_MovieWebM = 8)] =
                "k_ECommunityProfileItemProperty_MovieWebM"),
              (e[(e.k_ECommunityProfileItemProperty_MovieMP4 = 9)] =
                "k_ECommunityProfileItemProperty_MovieMP4"),
              (e[(e.k_ECommunityProfileItemProperty_MovieWebMSmall = 10)] =
                "k_ECommunityProfileItemProperty_MovieWebMSmall"),
              (e[(e.k_ECommunityProfileItemProperty_MovieMP4Small = 11)] =
                "k_ECommunityProfileItemProperty_MovieMP4Small");
          })(d || (d = {})),
          (function (e) {
            (e[(e.k_ERaiseGameWindowResult_NotRunning = 1)] =
              "k_ERaiseGameWindowResult_NotRunning"),
              (e[(e.k_ERaiseGameWindowResult_Success = 2)] =
                "k_ERaiseGameWindowResult_Success"),
              (e[(e.k_ERaiseGameWindowResult_Failure = 3)] =
                "k_ERaiseGameWindowResult_Failure");
          })(f || (f = {})),
          (function (e) {
            (e[(e.k_EPositionInvalid = -1)] = "k_EPositionInvalid"),
              (e[(e.k_EPositionTopLeft = 0)] = "k_EPositionTopLeft"),
              (e[(e.k_EPositionTopRight = 1)] = "k_EPositionTopRight"),
              (e[(e.k_EPositionBottomLeft = 2)] = "k_EPositionBottomLeft"),
              (e[(e.k_EPositionBottomRight = 3)] = "k_EPositionBottomRight");
          })(h || (h = {})),
          (function (e) {
            (e[(e.k_EAppReleaseState_Unknown = 0)] =
              "k_EAppReleaseState_Unknown"),
              (e[(e.k_EAppReleaseState_Unavailable = 1)] =
                "k_EAppReleaseState_Unavailable"),
              (e[(e.k_EAppReleaseState_Prerelease = 2)] =
                "k_EAppReleaseState_Prerelease"),
              (e[(e.k_EAppReleaseState_PreloadOnly = 3)] =
                "k_EAppReleaseState_PreloadOnly"),
              (e[(e.k_EAppReleaseState_Released = 4)] =
                "k_EAppReleaseState_Released"),
              (e[(e.k_EAppReleaseState_Disabled = 5)] =
                "k_EAppReleaseState_Disabled");
          })(m || (m = {})),
          (function (e) {
            (e[(e.k_EInstallMgrStateNone = 0)] = "k_EInstallMgrStateNone"),
              (e[(e.k_EInstallMgrStateSetup = 1)] = "k_EInstallMgrStateSetup"),
              (e[(e.k_EInstallMgrStateWaitLicense = 2)] =
                "k_EInstallMgrStateWaitLicense"),
              (e[(e.k_EInstallMgrStateFreeLicense = 3)] =
                "k_EInstallMgrStateFreeLicense"),
              (e[(e.k_EInstallMgrStateShowCDKey = 4)] =
                "k_EInstallMgrStateShowCDKey"),
              (e[(e.k_EInstallMgrStateWaitAppInfo = 5)] =
                "k_EInstallMgrStateWaitAppInfo"),
              (e[(e.k_EInstallMgrStateShowPassword = 6)] =
                "k_EInstallMgrStateShowPassword"),
              (e[(e.k_EInstallMgrStateShowConfig = 7)] =
                "k_EInstallMgrStateShowConfig"),
              (e[(e.k_EInstallMgrStateShowEULAs = 8)] =
                "k_EInstallMgrStateShowEULAs"),
              (e[(e.k_EInstallMgrStateCreateApps = 9)] =
                "k_EInstallMgrStateCreateApps"),
              (e[(e.k_EInstallMgrStateReadFromMedia = 10)] =
                "k_EInstallMgrStateReadFromMedia"),
              (e[(e.k_EInstallMgrStateShowChangeMedia = 11)] =
                "k_EInstallMgrStateShowChangeMedia"),
              (e[(e.k_EInstallMgrStateWaitLegacyCDKeys = 12)] =
                "k_EInstallMgrStateWaitLegacyCDKeys"),
              (e[(e.k_EInstallMgrStateShowSignup = 13)] =
                "k_EInstallMgrStateShowSignup"),
              (e[(e.k_EInstallMgrStateComplete = 14)] =
                "k_EInstallMgrStateComplete"),
              (e[(e.k_EInstallMgrStateFailed = 15)] =
                "k_EInstallMgrStateFailed"),
              (e[(e.k_EInstallMgrStateCanceled = 16)] =
                "k_EInstallMgrStateCanceled");
          })(y || (y = {}));
        var E, S, b;
        !(function (e) {
          (e[(e.Input = 0)] = "Input"), (e[(e.Output = 1)] = "Output");
        })(E || (E = {})),
          (function (e) {
            (e[(e.Input = 0)] = "Input"),
              (e[(e.AllOutput = 1)] = "AllOutput"),
              (e[(e.Left = 2)] = "Left"),
              (e[(e.Right = 3)] = "Right"),
              (e[(e.Sub = 4)] = "Sub"),
              (e[(e.BackLeft = 5)] = "BackLeft"),
              (e[(e.BackRight = 6)] = "BackRight");
          })(S || (S = {}));
        !(function (e) {
          (e[(e.k_ESteamRealmUnknown = 0)] = "k_ESteamRealmUnknown"),
            (e[(e.k_ESteamRealmGlobal = 1)] = "k_ESteamRealmGlobal"),
            (e[(e.k_ESteamRealmChina = 2)] = "k_ESteamRealmChina");
        })(b || (b = {}));
        var T;
        !(function (e) {
          (e[(e.k_BluetoothDeviceType_Invalid = 0)] =
            "k_BluetoothDeviceType_Invalid"),
            (e[(e.k_BluetoothDeviceType_Unknown = 1)] =
              "k_BluetoothDeviceType_Unknown"),
            (e[(e.k_BluetoothDeviceType_Phone = 2)] =
              "k_BluetoothDeviceType_Phone"),
            (e[(e.k_BluetoothDeviceType_Computer = 3)] =
              "k_BluetoothDeviceType_Computer"),
            (e[(e.k_BluetoothDeviceType_Headset = 4)] =
              "k_BluetoothDeviceType_Headset"),
            (e[(e.k_BluetoothDeviceType_Headphones = 5)] =
              "k_BluetoothDeviceType_Headphones"),
            (e[(e.k_BluetoothDeviceType_Speakers = 6)] =
              "k_BluetoothDeviceType_Speakers"),
            (e[(e.k_BluetoothDeviceType_OtherAudio = 7)] =
              "k_BluetoothDeviceType_OtherAudio"),
            (e[(e.k_BluetoothDeviceType_Mouse = 8)] =
              "k_BluetoothDeviceType_Mouse"),
            (e[(e.k_BluetoothDeviceType_Joystick = 9)] =
              "k_BluetoothDeviceType_Joystick"),
            (e[(e.k_BluetoothDeviceType_Gamepad = 10)] =
              "k_BluetoothDeviceType_Gamepad"),
            (e[(e.k_BluetoothDeviceType_Keyboard = 11)] =
              "k_BluetoothDeviceType_Keyboard");
        })(T || (T = {}));
        var I, A, R, C;
        !(function (e) {
          (e[(e.EBrowserType_OffScreen = 0)] = "EBrowserType_OffScreen"),
            (e[(e.EBrowserType_OpenVROverlay = 1)] =
              "EBrowserType_OpenVROverlay"),
            (e[(e.EBrowserType_OpenVROverlay_Dashboard = 2)] =
              "EBrowserType_OpenVROverlay_Dashboard"),
            (e[(e.EBrowserType_DirectHWND = 3)] = "EBrowserType_DirectHWND"),
            (e[(e.EBrowserType_DirectHWND_Borderless = 4)] =
              "EBrowserType_DirectHWND_Borderless"),
            (e[(e.EBrowserType_DirectHWND_Hidden = 5)] =
              "EBrowserType_DirectHWND_Hidden"),
            (e[(e.EBrowserType_ChildHWNDNative = 6)] =
              "EBrowserType_ChildHWNDNative"),
            (e[(e.EBrowserType_Transparent_Toplevel = 7)] =
              "EBrowserType_Transparent_Toplevel"),
            (e[(e.EBrowserType_OffScreen_SharedTexture = 8)] =
              "EBrowserType_OffScreen_SharedTexture"),
            (e[(e.EBrowserType_OffScreen_GameOverlay = 9)] =
              "EBrowserType_OffScreen_GameOverlay"),
            (e[(e.EBrowserType_OffScreen_GameOverlay_SharedTexture = 10)] =
              "EBrowserType_OffScreen_GameOverlay_SharedTexture"),
            (e[(e.EBrowserType_Offscreen_FriendsUI = 11)] =
              "EBrowserType_Offscreen_FriendsUI"),
            (e[(e.EBrowserType_Offscreen_SteamUI = 12)] =
              "EBrowserType_Offscreen_SteamUI"),
            (e[(e.EBrowserType_OpenVROverlay_Subview = 13)] =
              "EBrowserType_OpenVROverlay_Subview");
        })(I || (I = {})),
          (function (e) {
            (e[(e.SystemKey0 = 0)] = "SystemKey0"),
              (e[(e.SystemKey1 = 1)] = "SystemKey1");
          })(A || (A = {})),
          (function (e) {
            (e[(e.Hidden = 0)] = "Hidden"),
              (e[(e.Notification = 1)] = "Notification"),
              (e[(e.Overlay = 2)] = "Overlay"),
              (e[(e.Opaque = 3)] = "Opaque"),
              (e[(e.OverlayKeyboard = 4)] = "OverlayKeyboard");
          })(R || (R = {})),
          (function (e) {
            (e[(e.MainGamepadUI = 0)] = "MainGamepadUI"),
              (e[(e.OverlayGamepadUI = 1)] = "OverlayGamepadUI"),
              (e[(e.Keyboard = 2)] = "Keyboard"),
              (e[(e.ControllerConfigurator = 3)] = "ControllerConfigurator"),
              (e[(e.VR = 4)] = "VR"),
              (e[(e.SteamLibrary = 5)] = "SteamLibrary"),
              (e[(e.MainDesktopUI = 6)] = "MainDesktopUI"),
              (e[(e.DesktopLogin = 7)] = "DesktopLogin"),
              (e[(e.OverlayDesktopUI = 8)] = "OverlayDesktopUI"),
              (e[(e.SmallModeDesktopUI = 9)] = "SmallModeDesktopUI");
          })(C || (C = {}));
        var D;
        !(function (e) {
          (e[(e.k_EPending = 0)] = "k_EPending"),
            (e[(e.k_EAccepted = 1)] = "k_EAccepted"),
            (e[(e.k_ERejected = 2)] = "k_ERejected");
        })(D || (D = {}));
        var O = o(19);
        O.BinaryReader.prototype, O.BinaryWriter.prototype;
        O.Message;
        var v, N, U, w, M;
        !(function (e) {
          (e[(e.k_EControllerBindingType_None = 0)] =
            "k_EControllerBindingType_None"),
            (e[(e.k_EControllerBindingType_Key = 1)] =
              "k_EControllerBindingType_Key"),
            (e[(e.k_EControllerBindingType_MouseButton = 2)] =
              "k_EControllerBindingType_MouseButton"),
            (e[(e.k_EControllerBindingType_Gamepad = 3)] =
              "k_EControllerBindingType_Gamepad"),
            (e[(e.k_EControllerBindingType_Mousewheel = 4)] =
              "k_EControllerBindingType_Mousewheel"),
            (e[(e.k_EControllerBindingType_Modeshift = 5)] =
              "k_EControllerBindingType_Modeshift"),
            (e[(e.k_EControllerBindingType_GameAction = 6)] =
              "k_EControllerBindingType_GameAction"),
            (e[(e.k_EControllerBindingType_ControllerAction = 7)] =
              "k_EControllerBindingType_ControllerAction");
        })(v || (v = {})),
          (function (e) {
            (e[(e.GAMEPAD_BUTTON_A = 0)] = "GAMEPAD_BUTTON_A"),
              (e[(e.GAMEPAD_BUTTON_B = 1)] = "GAMEPAD_BUTTON_B"),
              (e[(e.GAMEPAD_BUTTON_X = 2)] = "GAMEPAD_BUTTON_X"),
              (e[(e.GAMEPAD_BUTTON_Y = 3)] = "GAMEPAD_BUTTON_Y"),
              (e[(e.GAMEPAD_BUTTON_DPAD_UP = 4)] = "GAMEPAD_BUTTON_DPAD_UP"),
              (e[(e.GAMEPAD_BUTTON_DPAD_RIGHT = 5)] =
                "GAMEPAD_BUTTON_DPAD_RIGHT"),
              (e[(e.GAMEPAD_BUTTON_DPAD_DOWN = 6)] =
                "GAMEPAD_BUTTON_DPAD_DOWN"),
              (e[(e.GAMEPAD_BUTTON_DPAD_LEFT = 7)] =
                "GAMEPAD_BUTTON_DPAD_LEFT"),
              (e[(e.GAMEPAD_BUTTON_MENU = 8)] = "GAMEPAD_BUTTON_MENU"),
              (e[(e.GAMEPAD_BUTTON_VIEW = 9)] = "GAMEPAD_BUTTON_VIEW"),
              (e[(e.GAMEPAD_LEFTPAD_UP = 10)] = "GAMEPAD_LEFTPAD_UP"),
              (e[(e.GAMEPAD_LEFTPAD_DOWN = 11)] = "GAMEPAD_LEFTPAD_DOWN"),
              (e[(e.GAMEPAD_LEFTPAD_LEFT = 12)] = "GAMEPAD_LEFTPAD_LEFT"),
              (e[(e.GAMEPAD_LEFTPAD_RIGHT = 13)] = "GAMEPAD_LEFTPAD_RIGHT"),
              (e[(e.GAMEPAD_LEFTPAD_ANALOG = 14)] = "GAMEPAD_LEFTPAD_ANALOG"),
              (e[(e.GAMEPAD_RIGHTPAD_UP = 15)] = "GAMEPAD_RIGHTPAD_UP"),
              (e[(e.GAMEPAD_RIGHTPAD_DOWN = 16)] = "GAMEPAD_RIGHTPAD_DOWN"),
              (e[(e.GAMEPAD_RIGHTPAD_LEFT = 17)] = "GAMEPAD_RIGHTPAD_LEFT"),
              (e[(e.GAMEPAD_RIGHTPAD_RIGHT = 18)] = "GAMEPAD_RIGHTPAD_RIGHT"),
              (e[(e.GAMEPAD_RIGHTPAD_ANALOG = 19)] = "GAMEPAD_RIGHTPAD_ANALOG"),
              (e[(e.GAMEPAD_LEFTSTICK_UP = 20)] = "GAMEPAD_LEFTSTICK_UP"),
              (e[(e.GAMEPAD_LEFTSTICK_DOWN = 21)] = "GAMEPAD_LEFTSTICK_DOWN"),
              (e[(e.GAMEPAD_LEFTSTICK_LEFT = 22)] = "GAMEPAD_LEFTSTICK_LEFT"),
              (e[(e.GAMEPAD_LEFTSTICK_RIGHT = 23)] = "GAMEPAD_LEFTSTICK_RIGHT"),
              (e[(e.GAMEPAD_LEFTSTICK_ANALOG = 24)] =
                "GAMEPAD_LEFTSTICK_ANALOG"),
              (e[(e.GAMEPAD_LEFTSTICK_CLICK = 25)] = "GAMEPAD_LEFTSTICK_CLICK"),
              (e[(e.GAMEPAD_LTRIGGER_ANALOG = 26)] = "GAMEPAD_LTRIGGER_ANALOG"),
              (e[(e.GAMEPAD_RTRIGGER_ANALOG = 27)] = "GAMEPAD_RTRIGGER_ANALOG"),
              (e[(e.GAMEPAD_BUTTON_LTRIGGER = 28)] = "GAMEPAD_BUTTON_LTRIGGER"),
              (e[(e.GAMEPAD_BUTTON_RTRIGGER = 29)] = "GAMEPAD_BUTTON_RTRIGGER"),
              (e[(e.GAMEPAD_BUTTON_LSHOULDER = 30)] =
                "GAMEPAD_BUTTON_LSHOULDER"),
              (e[(e.GAMEPAD_BUTTON_RSHOULDER = 31)] =
                "GAMEPAD_BUTTON_RSHOULDER"),
              (e[(e.GAMEPAD_BUTTON_LBACK = 32)] = "GAMEPAD_BUTTON_LBACK"),
              (e[(e.GAMEPAD_BUTTON_RBACK = 33)] = "GAMEPAD_BUTTON_RBACK"),
              (e[(e.GAMEPAD_BUTTON_GUIDE = 34)] = "GAMEPAD_BUTTON_GUIDE"),
              (e[(e.GAMEPAD_BUTTON_SELECT = 35)] = "GAMEPAD_BUTTON_SELECT"),
              (e[(e.GAMEPAD_BUTTON_START = 36)] = "GAMEPAD_BUTTON_START"),
              (e[(e.GAMEPAD_BUTTON_LPAD_CLICKED = 37)] =
                "GAMEPAD_BUTTON_LPAD_CLICKED"),
              (e[(e.GAMEPAD_BUTTON_LPAD_TOUCH = 38)] =
                "GAMEPAD_BUTTON_LPAD_TOUCH"),
              (e[(e.GAMEPAD_BUTTON_RPAD_CLICKED = 39)] =
                "GAMEPAD_BUTTON_RPAD_CLICKED"),
              (e[(e.GAMEPAD_BUTTON_RPAD_TOUCH = 40)] =
                "GAMEPAD_BUTTON_RPAD_TOUCH"),
              (e[(e.GAMEPAD_RIGHTSTICK_CLICK = 41)] =
                "GAMEPAD_RIGHTSTICK_CLICK"),
              (e[(e.GAMEPAD_RIGHTSTICK_TOUCH = 42)] =
                "GAMEPAD_RIGHTSTICK_TOUCH"),
              (e[(e.GAMEPAD_LEFTSTICK_TOUCH = 43)] = "GAMEPAD_LEFTSTICK_TOUCH"),
              (e[(e.GAMEPAD_BUTTON_LBACK_UPPER = 44)] =
                "GAMEPAD_BUTTON_LBACK_UPPER"),
              (e[(e.GAMEPAD_BUTTON_RBACK_UPPER = 45)] =
                "GAMEPAD_BUTTON_RBACK_UPPER"),
              (e[(e.GAMEPAD_BUTTON_LAST = 46)] = "GAMEPAD_BUTTON_LAST"),
              (e[(e.GAMEPAD_ANALOG_SCROLL = 47)] = "GAMEPAD_ANALOG_SCROLL"),
              (e[(e.GAMEPAD_ANALOG_LEFT_KEYBOARD_CURSOR = 48)] =
                "GAMEPAD_ANALOG_LEFT_KEYBOARD_CURSOR"),
              (e[(e.GAMEPAD_ANALOG_RIGHT_KEYBOARD_CURSOR = 49)] =
                "GAMEPAD_ANALOG_RIGHT_KEYBOARD_CURSOR"),
              (e[(e.GAMEPAD_ANALOG_LAST = 50)] = "GAMEPAD_ANALOG_LAST");
          })(N || (N = {}));
        !(function (e) {
          (e[(e.k_ERemoteClientLaunchOK = 1)] = "k_ERemoteClientLaunchOK"),
            (e[(e.k_ERemoteClientLaunchFail = 2)] =
              "k_ERemoteClientLaunchFail"),
            (e[(e.k_ERemoteClientLaunchRequiresUI = 3)] =
              "k_ERemoteClientLaunchRequiresUI"),
            (e[(e.k_ERemoteClientLaunchRequiresLaunchOption = 4)] =
              "k_ERemoteClientLaunchRequiresLaunchOption"),
            (e[(e.k_ERemoteClientLaunchRequiresEULA = 5)] =
              "k_ERemoteClientLaunchRequiresEULA"),
            (e[(e.k_ERemoteClientLaunchTimeout = 6)] =
              "k_ERemoteClientLaunchTimeout"),
            (e[(e.k_ERemoteClientLaunchStreamTimeout = 7)] =
              "k_ERemoteClientLaunchStreamTimeout"),
            (e[(e.k_ERemoteClientLaunchStreamClientFail = 8)] =
              "k_ERemoteClientLaunchStreamClientFail"),
            (e[(e.k_ERemoteClientLaunchOtherGameRunning = 9)] =
              "k_ERemoteClientLaunchOtherGameRunning"),
            (e[(e.k_ERemoteClientLaunchDownloadStarted = 10)] =
              "k_ERemoteClientLaunchDownloadStarted"),
            (e[(e.k_ERemoteClientLaunchDownloadNoSpace = 11)] =
              "k_ERemoteClientLaunchDownloadNoSpace"),
            (e[(e.k_ERemoteClientLaunchDownloadFiltered = 12)] =
              "k_ERemoteClientLaunchDownloadFiltered"),
            (e[(e.k_ERemoteClientLaunchDownloadRequiresUI = 13)] =
              "k_ERemoteClientLaunchDownloadRequiresUI"),
            (e[(e.k_ERemoteClientLaunchAccessDenied = 14)] =
              "k_ERemoteClientLaunchAccessDenied"),
            (e[(e.k_ERemoteClientLaunchNetworkError = 15)] =
              "k_ERemoteClientLaunchNetworkError"),
            (e[(e.k_ERemoteClientLaunchProgress = 16)] =
              "k_ERemoteClientLaunchProgress"),
            (e[(e.k_ERemoteClientLaunchParentalUnlockFailed = 17)] =
              "k_ERemoteClientLaunchParentalUnlockFailed"),
            (e[(e.k_ERemoteClientLaunchScreenLocked = 18)] =
              "k_ERemoteClientLaunchScreenLocked"),
            (e[(e.k_ERemoteClientLaunchUnsupported = 19)] =
              "k_ERemoteClientLaunchUnsupported"),
            (e[(e.k_ERemoteClientLaunchDisabledLocal = 20)] =
              "k_ERemoteClientLaunchDisabledLocal"),
            (e[(e.k_ERemoteClientLaunchDisabledRemote = 21)] =
              "k_ERemoteClientLaunchDisabledRemote"),
            (e[(e.k_ERemoteClientLaunchBroadcasting = 22)] =
              "k_ERemoteClientLaunchBroadcasting"),
            (e[(e.k_ERemoteClientLaunchBusy = 23)] =
              "k_ERemoteClientLaunchBusy"),
            (e[(e.k_ERemoteClientLaunchDriversNotInstalled = 24)] =
              "k_ERemoteClientLaunchDriversNotInstalled"),
            (e[(e.k_ERemoteClientLaunchTransportUnavailable = 25)] =
              "k_ERemoteClientLaunchTransportUnavailable"),
            (e[(e.k_ERemoteClientLaunchCanceled = 26)] =
              "k_ERemoteClientLaunchCanceled"),
            (e[(e.k_ERemoteClientLaunchInvisible = 27)] =
              "k_ERemoteClientLaunchInvisible"),
            (e[(e.k_ERemoteClientLaunchRestrictedCountry = 28)] =
              "k_ERemoteClientLaunchRestrictedCountry");
        })(U || (U = {}));
        !(function (e) {
          (e[(e.k_EClientUINotificationGroupChatMessage = 1)] =
            "k_EClientUINotificationGroupChatMessage"),
            (e[(e.k_EClientUINotificationFriendChatMessage = 2)] =
              "k_EClientUINotificationFriendChatMessage"),
            (e[(e.k_EClientUINotificationFriendPersonaState = 3)] =
              "k_EClientUINotificationFriendPersonaState");
        })(w || (w = {}));
        !(function (e) {
          (e[(e.AudioPlayback_Undefined = 0)] = "AudioPlayback_Undefined"),
            (e[(e.AudioPlayback_Playing = 1)] = "AudioPlayback_Playing"),
            (e[(e.AudioPlayback_Paused = 2)] = "AudioPlayback_Paused"),
            (e[(e.AudioPlayback_Idle = 3)] = "AudioPlayback_Idle");
        })(M || (M = {}));
        var P, L, j, B, F;
        !(function (e) {
          (e[(e.Unknown = 0)] = "Unknown"),
            (e[(e.Wired = 1)] = "Wired"),
            (e[(e.Wireless = 2)] = "Wireless"),
            (e[(e.Virtual = 3)] = "Virtual");
        })(P || (P = {})),
          (function (e) {
            (e[(e.NotPresent = 0)] = "NotPresent"),
              (e[(e.Failed = 1)] = "Failed"),
              (e[(e.Disconnected = 2)] = "Disconnected"),
              (e[(e.Disconnecting = 3)] = "Disconnecting"),
              (e[(e.Connecting = 4)] = "Connecting"),
              (e[(e.Connected = 5)] = "Connected"),
              (e[(e.Retrying = 6)] = "Retrying");
          })(L || (L = {})),
          (function (e) {
            (e[(e.None = 0)] = "None"),
              (e[(e.Weak = 1)] = "Weak"),
              (e[(e.Ok = 2)] = "Ok"),
              (e[(e.Good = 3)] = "Good"),
              (e[(e.Excellent = 4)] = "Excellent");
          })(j || (j = {})),
          (function (e) {
            (e[(e.None = 0)] = "None"),
              (e[(e.StaticWep = 1)] = "StaticWep"),
              (e[(e.DynamicWep = 2)] = "DynamicWep"),
              (e[(e.Wpa = 4)] = "Wpa"),
              (e[(e.WpaEnterprise = 8)] = "WpaEnterprise"),
              (e[(e.Wpa2 = 16)] = "Wpa2"),
              (e[(e.Wpa2Enterprise = 32)] = "Wpa2Enterprise"),
              (e[(e.Unsupported = 32768)] = "Unsupported");
          })(B || (B = {})),
          (function (e) {
            (e[(e.k_EHTTPProxyMode_Invalid = 0)] = "k_EHTTPProxyMode_Invalid"),
              (e[(e.k_EHTTPProxyMode_None = 1)] = "k_EHTTPProxyMode_None"),
              (e[(e.k_EHTTPProxyMode_Manual = 2)] = "k_EHTTPProxyMode_Manual"),
              (e[(e.k_EHTTPProxyMode_Automatic = 3)] =
                "k_EHTTPProxyMode_Automatic");
          })(F || (F = {}));
        var V, k, H, x, W;
        !(function (e) {
          (e[(e.k_EComputerActiveStateInvalid = 0)] =
            "k_EComputerActiveStateInvalid"),
            (e[(e.k_EComputerActiveStateActive = 1)] =
              "k_EComputerActiveStateActive"),
            (e[(e.k_EComputerActiveStateIdle = 2)] =
              "k_EComputerActiveStateIdle");
        })(V || (V = {})),
          (function (e) {
            (e[(e.k_EClientUsedInputTypeKeyboard = 0)] =
              "k_EClientUsedInputTypeKeyboard"),
              (e[(e.k_EClientUsedInputTypeMouse = 1)] =
                "k_EClientUsedInputTypeMouse"),
              (e[(e.k_EClientUsedInputTypeController = 2)] =
                "k_EClientUsedInputTypeController"),
              (e[(e.k_EClientUsedInputTypeMax = 3)] =
                "k_EClientUsedInputTypeMax");
          })(k || (k = {})),
          (function (e) {
            (e[(e.k_EVRError_None = 0)] = "k_EVRError_None"),
              (e[(e.k_EVRError_VRSkipParam = 1)] = "k_EVRError_VRSkipParam"),
              (e[(e.k_EVRError_ComponentNotInstalled = 2)] =
                "k_EVRError_ComponentNotInstalled"),
              (e[(e.k_EVRError_ComponentBusy = 3)] =
                "k_EVRError_ComponentBusy"),
              (e[(e.k_EVRError_CrashProtection = 4)] =
                "k_EVRError_CrashProtection"),
              (e[(e.k_EVRError_HmdError = 5)] = "k_EVRError_HmdError"),
              (e[(e.k_EVRError_PathChanged = 6)] = "k_EVRError_PathChanged");
          })(H || (H = {})),
          (function (e) {
            (e[(e.VRInitError_None = 0)] = "VRInitError_None"),
              (e[(e.VRInitError_Unknown = 1)] = "VRInitError_Unknown"),
              (e[(e.VRInitError_Init_InstallationNotFound = 100)] =
                "VRInitError_Init_InstallationNotFound"),
              (e[(e.VRInitError_Init_InstallationCorrupt = 101)] =
                "VRInitError_Init_InstallationCorrupt"),
              (e[(e.VRInitError_Init_VRClientDLLNotFound = 102)] =
                "VRInitError_Init_VRClientDLLNotFound"),
              (e[(e.VRInitError_Init_FileNotFound = 103)] =
                "VRInitError_Init_FileNotFound"),
              (e[(e.VRInitError_Init_FactoryNotFound = 104)] =
                "VRInitError_Init_FactoryNotFound"),
              (e[(e.VRInitError_Init_InterfaceNotFound = 105)] =
                "VRInitError_Init_InterfaceNotFound"),
              (e[(e.VRInitError_Init_InvalidInterface = 106)] =
                "VRInitError_Init_InvalidInterface"),
              (e[(e.VRInitError_Init_UserConfigDirectoryInvalid = 107)] =
                "VRInitError_Init_UserConfigDirectoryInvalid"),
              (e[(e.VRInitError_Init_HmdNotFound = 108)] =
                "VRInitError_Init_HmdNotFound"),
              (e[(e.VRInitError_Init_NotInitialized = 109)] =
                "VRInitError_Init_NotInitialized"),
              (e[(e.VRInitError_Init_PathRegistryNotFound = 110)] =
                "VRInitError_Init_PathRegistryNotFound"),
              (e[(e.VRInitError_Init_NoConfigPath = 111)] =
                "VRInitError_Init_NoConfigPath"),
              (e[(e.VRInitError_Init_NoLogPath = 112)] =
                "VRInitError_Init_NoLogPath"),
              (e[(e.VRInitError_Init_PathRegistryNotWritable = 113)] =
                "VRInitError_Init_PathRegistryNotWritable"),
              (e[(e.VRInitError_Init_AppInfoInitFailed = 114)] =
                "VRInitError_Init_AppInfoInitFailed"),
              (e[(e.VRInitError_Init_Retry = 115)] = "VRInitError_Init_Retry"),
              (e[(e.VRInitError_Init_InitCanceledByUser = 116)] =
                "VRInitError_Init_InitCanceledByUser"),
              (e[(e.VRInitError_Init_AnotherAppLaunching = 117)] =
                "VRInitError_Init_AnotherAppLaunching"),
              (e[(e.VRInitError_Init_SettingsInitFailed = 118)] =
                "VRInitError_Init_SettingsInitFailed"),
              (e[(e.VRInitError_Init_ShuttingDown = 119)] =
                "VRInitError_Init_ShuttingDown"),
              (e[(e.VRInitError_Init_TooManyObjects = 120)] =
                "VRInitError_Init_TooManyObjects"),
              (e[(e.VRInitError_Init_NoServerForBackgroundApp = 121)] =
                "VRInitError_Init_NoServerForBackgroundApp"),
              (e[(e.VRInitError_Init_NotSupportedWithCompositor = 122)] =
                "VRInitError_Init_NotSupportedWithCompositor"),
              (e[(e.VRInitError_Init_NotAvailableToUtilityApps = 123)] =
                "VRInitError_Init_NotAvailableToUtilityApps"),
              (e[(e.VRInitError_Init_Internal = 124)] =
                "VRInitError_Init_Internal"),
              (e[(e.VRInitError_Init_HmdDriverIdIsNone = 125)] =
                "VRInitError_Init_HmdDriverIdIsNone"),
              (e[(e.VRInitError_Init_HmdNotFoundPresenceFailed = 126)] =
                "VRInitError_Init_HmdNotFoundPresenceFailed"),
              (e[(e.VRInitError_Init_VRMonitorNotFound = 127)] =
                "VRInitError_Init_VRMonitorNotFound"),
              (e[(e.VRInitError_Init_VRMonitorStartupFailed = 128)] =
                "VRInitError_Init_VRMonitorStartupFailed"),
              (e[(e.VRInitError_Init_LowPowerWatchdogNotSupported = 129)] =
                "VRInitError_Init_LowPowerWatchdogNotSupported"),
              (e[(e.VRInitError_Init_InvalidApplicationType = 130)] =
                "VRInitError_Init_InvalidApplicationType"),
              (e[(e.VRInitError_Init_NotAvailableToWatchdogApps = 131)] =
                "VRInitError_Init_NotAvailableToWatchdogApps"),
              (e[(e.VRInitError_Init_WatchdogDisabledInSettings = 132)] =
                "VRInitError_Init_WatchdogDisabledInSettings"),
              (e[(e.VRInitError_Init_VRDashboardNotFound = 133)] =
                "VRInitError_Init_VRDashboardNotFound"),
              (e[(e.VRInitError_Init_VRDashboardStartupFailed = 134)] =
                "VRInitError_Init_VRDashboardStartupFailed"),
              (e[(e.VRInitError_Init_VRHomeNotFound = 135)] =
                "VRInitError_Init_VRHomeNotFound"),
              (e[(e.VRInitError_Init_VRHomeStartupFailed = 136)] =
                "VRInitError_Init_VRHomeStartupFailed"),
              (e[(e.VRInitError_Init_RebootingBusy = 137)] =
                "VRInitError_Init_RebootingBusy"),
              (e[(e.VRInitError_Init_FirmwareUpdateBusy = 138)] =
                "VRInitError_Init_FirmwareUpdateBusy"),
              (e[(e.VRInitError_Init_FirmwareRecoveryBusy = 139)] =
                "VRInitError_Init_FirmwareRecoveryBusy"),
              (e[(e.VRInitError_Init_USBServiceBusy = 140)] =
                "VRInitError_Init_USBServiceBusy"),
              (e[(e.VRInitError_Init_VRWebHelperStartupFailed = 141)] =
                "VRInitError_Init_VRWebHelperStartupFailed"),
              (e[(e.VRInitError_Init_TrackerManagerInitFailed = 142)] =
                "VRInitError_Init_TrackerManagerInitFailed"),
              (e[(e.VRInitError_Init_AlreadyRunning = 143)] =
                "VRInitError_Init_AlreadyRunning"),
              (e[(e.VRInitError_Init_FailedForVrMonitor = 144)] =
                "VRInitError_Init_FailedForVrMonitor"),
              (e[(e.VRInitError_Init_PropertyManagerInitFailed = 145)] =
                "VRInitError_Init_PropertyManagerInitFailed"),
              (e[(e.VRInitError_Init_WebServerFailed = 146)] =
                "VRInitError_Init_WebServerFailed"),
              (e[(e.VRInitError_Init_IllegalTypeTransition = 147)] =
                "VRInitError_Init_IllegalTypeTransition"),
              (e[(e.VRInitError_Init_MismatchedRuntimes = 148)] =
                "VRInitError_Init_MismatchedRuntimes"),
              (e[(e.VRInitError_Init_InvalidProcessId = 149)] =
                "VRInitError_Init_InvalidProcessId"),
              (e[(e.VRInitError_Init_VRServiceStartupFailed = 150)] =
                "VRInitError_Init_VRServiceStartupFailed"),
              (e[(e.VRInitError_Init_PrismNeedsNewDrivers = 151)] =
                "VRInitError_Init_PrismNeedsNewDrivers"),
              (e[(e.VRInitError_Init_PrismStartupTimedOut = 152)] =
                "VRInitError_Init_PrismStartupTimedOut"),
              (e[(e.VRInitError_Init_CouldNotStartPrism = 153)] =
                "VRInitError_Init_CouldNotStartPrism"),
              (e[(e.VRInitError_Init_PrismClientInitFailed = 154)] =
                "VRInitError_Init_PrismClientInitFailed"),
              (e[(e.VRInitError_Init_PrismClientStartFailed = 155)] =
                "VRInitError_Init_PrismClientStartFailed"),
              (e[(e.VRInitError_Init_PrismExitedUnexpectedly = 156)] =
                "VRInitError_Init_PrismExitedUnexpectedly"),
              (e[(e.VRInitError_Init_BadLuid = 157)] =
                "VRInitError_Init_BadLuid"),
              (e[(e.VRInitError_Init_NoServerForAppContainer = 158)] =
                "VRInitError_Init_NoServerForAppContainer"),
              (e[(e.VRInitError_Init_DuplicateBootstrapper = 159)] =
                "VRInitError_Init_DuplicateBootstrapper"),
              (e[(e.VRInitError_Init_VRDashboardServicePending = 160)] =
                "VRInitError_Init_VRDashboardServicePending"),
              (e[(e.VRInitError_Init_VRDashboardServiceTimeout = 161)] =
                "VRInitError_Init_VRDashboardServiceTimeout"),
              (e[(e.VRInitError_Init_VRDashboardServiceStopped = 162)] =
                "VRInitError_Init_VRDashboardServiceStopped"),
              (e[(e.VRInitError_Init_VRDashboardAlreadyStarted = 163)] =
                "VRInitError_Init_VRDashboardAlreadyStarted"),
              (e[(e.VRInitError_Init_VRDashboardCopyFailed = 164)] =
                "VRInitError_Init_VRDashboardCopyFailed"),
              (e[(e.VRInitError_Init_VRDashboardTokenFailure = 165)] =
                "VRInitError_Init_VRDashboardTokenFailure"),
              (e[(e.VRInitError_Init_VRDashboardEnvironmentFailure = 166)] =
                "VRInitError_Init_VRDashboardEnvironmentFailure"),
              (e[(e.VRInitError_Init_VRDashboardPathFailure = 167)] =
                "VRInitError_Init_VRDashboardPathFailure"),
              (e[(e.VRInitError_Driver_Failed = 200)] =
                "VRInitError_Driver_Failed"),
              (e[(e.VRInitError_Driver_Unknown = 201)] =
                "VRInitError_Driver_Unknown"),
              (e[(e.VRInitError_Driver_HmdUnknown = 202)] =
                "VRInitError_Driver_HmdUnknown"),
              (e[(e.VRInitError_Driver_NotLoaded = 203)] =
                "VRInitError_Driver_NotLoaded"),
              (e[(e.VRInitError_Driver_RuntimeOutOfDate = 204)] =
                "VRInitError_Driver_RuntimeOutOfDate"),
              (e[(e.VRInitError_Driver_HmdInUse = 205)] =
                "VRInitError_Driver_HmdInUse"),
              (e[(e.VRInitError_Driver_NotCalibrated = 206)] =
                "VRInitError_Driver_NotCalibrated"),
              (e[(e.VRInitError_Driver_CalibrationInvalid = 207)] =
                "VRInitError_Driver_CalibrationInvalid"),
              (e[(e.VRInitError_Driver_HmdDisplayNotFound = 208)] =
                "VRInitError_Driver_HmdDisplayNotFound"),
              (e[(e.VRInitError_Driver_TrackedDeviceInterfaceUnknown = 209)] =
                "VRInitError_Driver_TrackedDeviceInterfaceUnknown"),
              (e[(e.VRInitError_Driver_HmdDriverIdOutOfBounds = 211)] =
                "VRInitError_Driver_HmdDriverIdOutOfBounds"),
              (e[(e.VRInitError_Driver_HmdDisplayMirrored = 212)] =
                "VRInitError_Driver_HmdDisplayMirrored"),
              (e[(e.VRInitError_Driver_HmdDisplayNotFoundLaptop = 213)] =
                "VRInitError_Driver_HmdDisplayNotFoundLaptop"),
              (e[(e.VRInitError_Driver_PeerDriverNotInstalled = 214)] =
                "VRInitError_Driver_PeerDriverNotInstalled"),
              (e[(e.VRInitError_Driver_WirelessHmdNotConnected = 215)] =
                "VRInitError_Driver_WirelessHmdNotConnected"),
              (e[(e.VRInitError_IPC_ServerInitFailed = 300)] =
                "VRInitError_IPC_ServerInitFailed"),
              (e[(e.VRInitError_IPC_ConnectFailed = 301)] =
                "VRInitError_IPC_ConnectFailed"),
              (e[(e.VRInitError_IPC_SharedStateInitFailed = 302)] =
                "VRInitError_IPC_SharedStateInitFailed"),
              (e[(e.VRInitError_IPC_CompositorInitFailed = 303)] =
                "VRInitError_IPC_CompositorInitFailed"),
              (e[(e.VRInitError_IPC_MutexInitFailed = 304)] =
                "VRInitError_IPC_MutexInitFailed"),
              (e[(e.VRInitError_IPC_Failed = 305)] = "VRInitError_IPC_Failed"),
              (e[(e.VRInitError_IPC_CompositorConnectFailed = 306)] =
                "VRInitError_IPC_CompositorConnectFailed"),
              (e[(e.VRInitError_IPC_CompositorInvalidConnectResponse = 307)] =
                "VRInitError_IPC_CompositorInvalidConnectResponse"),
              (e[(e.VRInitError_IPC_ConnectFailedAfterMultipleAttempts = 308)] =
                "VRInitError_IPC_ConnectFailedAfterMultipleAttempts"),
              (e[(e.VRInitError_IPC_ConnectFailedAfterTargetExited = 309)] =
                "VRInitError_IPC_ConnectFailedAfterTargetExited"),
              (e[(e.VRInitError_IPC_NamespaceUnavailable = 310)] =
                "VRInitError_IPC_NamespaceUnavailable"),
              (e[(e.VRInitError_Compositor_Failed = 400)] =
                "VRInitError_Compositor_Failed"),
              (e[(e.VRInitError_Compositor_D3D11HardwareRequired = 401)] =
                "VRInitError_Compositor_D3D11HardwareRequired"),
              (e[(e.VRInitError_Compositor_FirmwareRequiresUpdate = 402)] =
                "VRInitError_Compositor_FirmwareRequiresUpdate"),
              (e[(e.VRInitError_Compositor_OverlayInitFailed = 403)] =
                "VRInitError_Compositor_OverlayInitFailed"),
              (e[(e.VRInitError_Compositor_ScreenshotsInitFailed = 404)] =
                "VRInitError_Compositor_ScreenshotsInitFailed"),
              (e[(e.VRInitError_Compositor_UnableToCreateDevice = 405)] =
                "VRInitError_Compositor_UnableToCreateDevice"),
              (e[(e.VRInitError_Compositor_SharedStateIsNull = 406)] =
                "VRInitError_Compositor_SharedStateIsNull"),
              (e[(e.VRInitError_Compositor_NotificationManagerIsNull = 407)] =
                "VRInitError_Compositor_NotificationManagerIsNull"),
              (e[(e.VRInitError_Compositor_ResourceManagerClientIsNull = 408)] =
                "VRInitError_Compositor_ResourceManagerClientIsNull"),
              (e[
                (e.VRInitError_Compositor_MessageOverlaySharedStateInitFailure = 409)
              ] =
                "VRInitError_Compositor_MessageOverlaySharedStateInitFailure"),
              (e[(e.VRInitError_Compositor_PropertiesInterfaceIsNull = 410)] =
                "VRInitError_Compositor_PropertiesInterfaceIsNull"),
              (e[
                (e.VRInitError_Compositor_CreateFullscreenWindowFailed = 411)
              ] = "VRInitError_Compositor_CreateFullscreenWindowFailed"),
              (e[(e.VRInitError_Compositor_SettingsInterfaceIsNull = 412)] =
                "VRInitError_Compositor_SettingsInterfaceIsNull"),
              (e[(e.VRInitError_Compositor_FailedToShowWindow = 413)] =
                "VRInitError_Compositor_FailedToShowWindow"),
              (e[(e.VRInitError_Compositor_DistortInterfaceIsNull = 414)] =
                "VRInitError_Compositor_DistortInterfaceIsNull"),
              (e[(e.VRInitError_Compositor_DisplayFrequencyFailure = 415)] =
                "VRInitError_Compositor_DisplayFrequencyFailure"),
              (e[
                (e.VRInitError_Compositor_RendererInitializationFailed = 416)
              ] = "VRInitError_Compositor_RendererInitializationFailed"),
              (e[(e.VRInitError_Compositor_DXGIFactoryInterfaceIsNull = 417)] =
                "VRInitError_Compositor_DXGIFactoryInterfaceIsNull"),
              (e[(e.VRInitError_Compositor_DXGIFactoryCreateFailed = 418)] =
                "VRInitError_Compositor_DXGIFactoryCreateFailed"),
              (e[(e.VRInitError_Compositor_DXGIFactoryQueryFailed = 419)] =
                "VRInitError_Compositor_DXGIFactoryQueryFailed"),
              (e[(e.VRInitError_Compositor_InvalidAdapterDesktop = 420)] =
                "VRInitError_Compositor_InvalidAdapterDesktop"),
              (e[(e.VRInitError_Compositor_InvalidHmdAttachment = 421)] =
                "VRInitError_Compositor_InvalidHmdAttachment"),
              (e[(e.VRInitError_Compositor_InvalidOutputDesktop = 422)] =
                "VRInitError_Compositor_InvalidOutputDesktop"),
              (e[(e.VRInitError_Compositor_InvalidDeviceProvided = 423)] =
                "VRInitError_Compositor_InvalidDeviceProvided"),
              (e[
                (e.VRInitError_Compositor_D3D11RendererInitializationFailed = 424)
              ] = "VRInitError_Compositor_D3D11RendererInitializationFailed"),
              (e[(e.VRInitError_Compositor_FailedToFindDisplayMode = 425)] =
                "VRInitError_Compositor_FailedToFindDisplayMode"),
              (e[(e.VRInitError_Compositor_FailedToCreateSwapChain = 426)] =
                "VRInitError_Compositor_FailedToCreateSwapChain"),
              (e[(e.VRInitError_Compositor_FailedToGetBackBuffer = 427)] =
                "VRInitError_Compositor_FailedToGetBackBuffer"),
              (e[(e.VRInitError_Compositor_FailedToCreateRenderTarget = 428)] =
                "VRInitError_Compositor_FailedToCreateRenderTarget"),
              (e[
                (e.VRInitError_Compositor_FailedToCreateDXGI2SwapChain = 429)
              ] = "VRInitError_Compositor_FailedToCreateDXGI2SwapChain"),
              (e[(e.VRInitError_Compositor_FailedtoGetDXGI2BackBuffer = 430)] =
                "VRInitError_Compositor_FailedtoGetDXGI2BackBuffer"),
              (e[
                (e.VRInitError_Compositor_FailedToCreateDXGI2RenderTarget = 431)
              ] = "VRInitError_Compositor_FailedToCreateDXGI2RenderTarget"),
              (e[
                (e.VRInitError_Compositor_FailedToGetDXGIDeviceInterface = 432)
              ] = "VRInitError_Compositor_FailedToGetDXGIDeviceInterface"),
              (e[(e.VRInitError_Compositor_SelectDisplayMode = 433)] =
                "VRInitError_Compositor_SelectDisplayMode"),
              (e[
                (e.VRInitError_Compositor_FailedToCreateNvAPIRenderTargets = 434)
              ] = "VRInitError_Compositor_FailedToCreateNvAPIRenderTargets"),
              (e[(e.VRInitError_Compositor_NvAPISetDisplayMode = 435)] =
                "VRInitError_Compositor_NvAPISetDisplayMode"),
              (e[
                (e.VRInitError_Compositor_FailedToCreateDirectModeDisplay = 436)
              ] = "VRInitError_Compositor_FailedToCreateDirectModeDisplay"),
              (e[(e.VRInitError_Compositor_InvalidHmdPropertyContainer = 437)] =
                "VRInitError_Compositor_InvalidHmdPropertyContainer"),
              (e[(e.VRInitError_Compositor_UpdateDisplayFrequency = 438)] =
                "VRInitError_Compositor_UpdateDisplayFrequency"),
              (e[(e.VRInitError_Compositor_CreateRasterizerState = 439)] =
                "VRInitError_Compositor_CreateRasterizerState"),
              (e[
                (e.VRInitError_Compositor_CreateWireframeRasterizerState = 440)
              ] = "VRInitError_Compositor_CreateWireframeRasterizerState"),
              (e[(e.VRInitError_Compositor_CreateSamplerState = 441)] =
                "VRInitError_Compositor_CreateSamplerState"),
              (e[
                (e.VRInitError_Compositor_CreateClampToBorderSamplerState = 442)
              ] = "VRInitError_Compositor_CreateClampToBorderSamplerState"),
              (e[(e.VRInitError_Compositor_CreateAnisoSamplerState = 443)] =
                "VRInitError_Compositor_CreateAnisoSamplerState"),
              (e[(e.VRInitError_Compositor_CreateOverlaySamplerState = 444)] =
                "VRInitError_Compositor_CreateOverlaySamplerState"),
              (e[(e.VRInitError_Compositor_CreatePanoramaSamplerState = 445)] =
                "VRInitError_Compositor_CreatePanoramaSamplerState"),
              (e[(e.VRInitError_Compositor_CreateFontSamplerState = 446)] =
                "VRInitError_Compositor_CreateFontSamplerState"),
              (e[(e.VRInitError_Compositor_CreateNoBlendState = 447)] =
                "VRInitError_Compositor_CreateNoBlendState"),
              (e[(e.VRInitError_Compositor_CreateBlendState = 448)] =
                "VRInitError_Compositor_CreateBlendState"),
              (e[(e.VRInitError_Compositor_CreateAlphaBlendState = 449)] =
                "VRInitError_Compositor_CreateAlphaBlendState"),
              (e[(e.VRInitError_Compositor_CreateBlendStateMaskR = 450)] =
                "VRInitError_Compositor_CreateBlendStateMaskR"),
              (e[(e.VRInitError_Compositor_CreateBlendStateMaskG = 451)] =
                "VRInitError_Compositor_CreateBlendStateMaskG"),
              (e[(e.VRInitError_Compositor_CreateBlendStateMaskB = 452)] =
                "VRInitError_Compositor_CreateBlendStateMaskB"),
              (e[(e.VRInitError_Compositor_CreateDepthStencilState = 453)] =
                "VRInitError_Compositor_CreateDepthStencilState"),
              (e[
                (e.VRInitError_Compositor_CreateDepthStencilStateNoWrite = 454)
              ] = "VRInitError_Compositor_CreateDepthStencilStateNoWrite"),
              (e[
                (e.VRInitError_Compositor_CreateDepthStencilStateNoDepth = 455)
              ] = "VRInitError_Compositor_CreateDepthStencilStateNoDepth"),
              (e[(e.VRInitError_Compositor_CreateFlushTexture = 456)] =
                "VRInitError_Compositor_CreateFlushTexture"),
              (e[(e.VRInitError_Compositor_CreateDistortionSurfaces = 457)] =
                "VRInitError_Compositor_CreateDistortionSurfaces"),
              (e[(e.VRInitError_Compositor_CreateConstantBuffer = 458)] =
                "VRInitError_Compositor_CreateConstantBuffer"),
              (e[(e.VRInitError_Compositor_CreateHmdPoseConstantBuffer = 459)] =
                "VRInitError_Compositor_CreateHmdPoseConstantBuffer"),
              (e[
                (e.VRInitError_Compositor_CreateHmdPoseStagingConstantBuffer = 460)
              ] = "VRInitError_Compositor_CreateHmdPoseStagingConstantBuffer"),
              (e[
                (e.VRInitError_Compositor_CreateSharedFrameInfoConstantBuffer = 461)
              ] = "VRInitError_Compositor_CreateSharedFrameInfoConstantBuffer"),
              (e[(e.VRInitError_Compositor_CreateOverlayConstantBuffer = 462)] =
                "VRInitError_Compositor_CreateOverlayConstantBuffer"),
              (e[
                (e.VRInitError_Compositor_CreateSceneTextureIndexConstantBuffer = 463)
              ] =
                "VRInitError_Compositor_CreateSceneTextureIndexConstantBuffer"),
              (e[
                (e.VRInitError_Compositor_CreateReadableSceneTextureIndexConstantBuffer = 464)
              ] =
                "VRInitError_Compositor_CreateReadableSceneTextureIndexConstantBuffer"),
              (e[
                (e.VRInitError_Compositor_CreateLayerGraphicsTextureIndexConstantBuffer = 465)
              ] =
                "VRInitError_Compositor_CreateLayerGraphicsTextureIndexConstantBuffer"),
              (e[
                (e.VRInitError_Compositor_CreateLayerComputeTextureIndexConstantBuffer = 466)
              ] =
                "VRInitError_Compositor_CreateLayerComputeTextureIndexConstantBuffer"),
              (e[
                (e.VRInitError_Compositor_CreateLayerComputeSceneTextureIndexConstantBuffer = 467)
              ] =
                "VRInitError_Compositor_CreateLayerComputeSceneTextureIndexConstantBuffer"),
              (e[
                (e.VRInitError_Compositor_CreateComputeHmdPoseConstantBuffer = 468)
              ] = "VRInitError_Compositor_CreateComputeHmdPoseConstantBuffer"),
              (e[(e.VRInitError_Compositor_CreateGeomConstantBuffer = 469)] =
                "VRInitError_Compositor_CreateGeomConstantBuffer"),
              (e[
                (e.VRInitError_Compositor_CreatePanelMaskConstantBuffer = 470)
              ] = "VRInitError_Compositor_CreatePanelMaskConstantBuffer"),
              (e[(e.VRInitError_Compositor_CreatePixelSimUBO = 471)] =
                "VRInitError_Compositor_CreatePixelSimUBO"),
              (e[(e.VRInitError_Compositor_CreateMSAARenderTextures = 472)] =
                "VRInitError_Compositor_CreateMSAARenderTextures"),
              (e[(e.VRInitError_Compositor_CreateResolveRenderTextures = 473)] =
                "VRInitError_Compositor_CreateResolveRenderTextures"),
              (e[
                (e.VRInitError_Compositor_CreateComputeResolveRenderTextures = 474)
              ] = "VRInitError_Compositor_CreateComputeResolveRenderTextures"),
              (e[
                (e.VRInitError_Compositor_CreateDriverDirectModeResolveTextures = 475)
              ] =
                "VRInitError_Compositor_CreateDriverDirectModeResolveTextures"),
              (e[
                (e.VRInitError_Compositor_OpenDriverDirectModeResolveTextures = 476)
              ] = "VRInitError_Compositor_OpenDriverDirectModeResolveTextures"),
              (e[(e.VRInitError_Compositor_CreateFallbackSyncTexture = 477)] =
                "VRInitError_Compositor_CreateFallbackSyncTexture"),
              (e[(e.VRInitError_Compositor_ShareFallbackSyncTexture = 478)] =
                "VRInitError_Compositor_ShareFallbackSyncTexture"),
              (e[(e.VRInitError_Compositor_CreateOverlayIndexBuffer = 479)] =
                "VRInitError_Compositor_CreateOverlayIndexBuffer"),
              (e[(e.VRInitError_Compositor_CreateOverlayVertexBuffer = 480)] =
                "VRInitError_Compositor_CreateOverlayVertexBuffer"),
              (e[(e.VRInitError_Compositor_CreateTextVertexBuffer = 481)] =
                "VRInitError_Compositor_CreateTextVertexBuffer"),
              (e[(e.VRInitError_Compositor_CreateTextIndexBuffer = 482)] =
                "VRInitError_Compositor_CreateTextIndexBuffer"),
              (e[(e.VRInitError_Compositor_CreateMirrorTextures = 483)] =
                "VRInitError_Compositor_CreateMirrorTextures"),
              (e[
                (e.VRInitError_Compositor_CreateLastFrameRenderTexture = 484)
              ] = "VRInitError_Compositor_CreateLastFrameRenderTexture"),
              (e[(e.VRInitError_Compositor_CreateMirrorOverlay = 485)] =
                "VRInitError_Compositor_CreateMirrorOverlay"),
              (e[
                (e.VRInitError_Compositor_FailedToCreateVirtualDisplayBackbuffer = 486)
              ] =
                "VRInitError_Compositor_FailedToCreateVirtualDisplayBackbuffer"),
              (e[(e.VRInitError_Compositor_DisplayModeNotSupported = 487)] =
                "VRInitError_Compositor_DisplayModeNotSupported"),
              (e[(e.VRInitError_Compositor_CreateOverlayInvalidCall = 488)] =
                "VRInitError_Compositor_CreateOverlayInvalidCall"),
              (e[
                (e.VRInitError_Compositor_CreateOverlayAlreadyInitialized = 489)
              ] = "VRInitError_Compositor_CreateOverlayAlreadyInitialized"),
              (e[(e.VRInitError_Compositor_FailedToCreateMailbox = 490)] =
                "VRInitError_Compositor_FailedToCreateMailbox"),
              (e[(e.VRInitError_Compositor_WindowInterfaceIsNull = 491)] =
                "VRInitError_Compositor_WindowInterfaceIsNull"),
              (e[(e.VRInitError_Compositor_SystemLayerCreateInstance = 492)] =
                "VRInitError_Compositor_SystemLayerCreateInstance"),
              (e[(e.VRInitError_Compositor_SystemLayerCreateSession = 493)] =
                "VRInitError_Compositor_SystemLayerCreateSession"),
              (e[(e.VRInitError_Compositor_CreateInverseDistortUVs = 494)] =
                "VRInitError_Compositor_CreateInverseDistortUVs"),
              (e[(e.VRInitError_Compositor_CreateBackbufferDepth = 495)] =
                "VRInitError_Compositor_CreateBackbufferDepth"),
              (e[
                (e.VRInitError_VendorSpecific_UnableToConnectToOculusRuntime = 1e3)
              ] = "VRInitError_VendorSpecific_UnableToConnectToOculusRuntime"),
              (e[(e.VRInitError_VendorSpecific_WindowsNotInDevMode = 1001)] =
                "VRInitError_VendorSpecific_WindowsNotInDevMode"),
              (e[(e.VRInitError_VendorSpecific_OculusLinkNotEnabled = 1002)] =
                "VRInitError_VendorSpecific_OculusLinkNotEnabled"),
              (e[
                (e.VRInitError_VendorSpecific_HmdFound_CantOpenDevice = 1101)
              ] = "VRInitError_VendorSpecific_HmdFound_CantOpenDevice"),
              (e[
                (e.VRInitError_VendorSpecific_HmdFound_UnableToRequestConfigStart = 1102)
              ] =
                "VRInitError_VendorSpecific_HmdFound_UnableToRequestConfigStart"),
              (e[
                (e.VRInitError_VendorSpecific_HmdFound_NoStoredConfig = 1103)
              ] = "VRInitError_VendorSpecific_HmdFound_NoStoredConfig"),
              (e[(e.VRInitError_VendorSpecific_HmdFound_ConfigTooBig = 1104)] =
                "VRInitError_VendorSpecific_HmdFound_ConfigTooBig"),
              (e[
                (e.VRInitError_VendorSpecific_HmdFound_ConfigTooSmall = 1105)
              ] = "VRInitError_VendorSpecific_HmdFound_ConfigTooSmall"),
              (e[
                (e.VRInitError_VendorSpecific_HmdFound_UnableToInitZLib = 1106)
              ] = "VRInitError_VendorSpecific_HmdFound_UnableToInitZLib"),
              (e[
                (e.VRInitError_VendorSpecific_HmdFound_CantReadFirmwareVersion = 1107)
              ] =
                "VRInitError_VendorSpecific_HmdFound_CantReadFirmwareVersion"),
              (e[
                (e.VRInitError_VendorSpecific_HmdFound_UnableToSendUserDataStart = 1108)
              ] =
                "VRInitError_VendorSpecific_HmdFound_UnableToSendUserDataStart"),
              (e[
                (e.VRInitError_VendorSpecific_HmdFound_UnableToGetUserDataStart = 1109)
              ] =
                "VRInitError_VendorSpecific_HmdFound_UnableToGetUserDataStart"),
              (e[
                (e.VRInitError_VendorSpecific_HmdFound_UnableToGetUserDataNext = 1110)
              ] =
                "VRInitError_VendorSpecific_HmdFound_UnableToGetUserDataNext"),
              (e[
                (e.VRInitError_VendorSpecific_HmdFound_UserDataAddressRange = 1111)
              ] = "VRInitError_VendorSpecific_HmdFound_UserDataAddressRange"),
              (e[(e.VRInitError_VendorSpecific_HmdFound_UserDataError = 1112)] =
                "VRInitError_VendorSpecific_HmdFound_UserDataError"),
              (e[
                (e.VRInitError_VendorSpecific_HmdFound_ConfigFailedSanityCheck = 1113)
              ] =
                "VRInitError_VendorSpecific_HmdFound_ConfigFailedSanityCheck"),
              (e[
                (e.VRInitError_VendorSpecific_OculusRuntimeBadInstall = 1114)
              ] = "VRInitError_VendorSpecific_OculusRuntimeBadInstall"),
              (e[
                (e.VRInitError_VendorSpecific_HmdFound_UnexpectedConfiguration_1 = 1115)
              ] =
                "VRInitError_VendorSpecific_HmdFound_UnexpectedConfiguration_1"),
              (e[(e.VRInitError_Steam_SteamInstallationNotFound = 2e3)] =
                "VRInitError_Steam_SteamInstallationNotFound"),
              (e[(e.VRInitError_LastError = 2001)] = "VRInitError_LastError");
          })(x || (x = {})),
          (function (e) {
            (e[(e.Invalid = 0)] = "Invalid"),
              (e[(e.TrackingSystemName_String = 1e3)] =
                "TrackingSystemName_String"),
              (e[(e.ModelNumber_String = 1001)] = "ModelNumber_String"),
              (e[(e.SerialNumber_String = 1002)] = "SerialNumber_String"),
              (e[(e.RenderModelName_String = 1003)] = "RenderModelName_String"),
              (e[(e.WillDriftInYaw_Bool = 1004)] = "WillDriftInYaw_Bool"),
              (e[(e.ManufacturerName_String = 1005)] =
                "ManufacturerName_String"),
              (e[(e.TrackingFirmwareVersion_String = 1006)] =
                "TrackingFirmwareVersion_String"),
              (e[(e.HardwareRevision_String = 1007)] =
                "HardwareRevision_String"),
              (e[(e.AllWirelessDongleDescriptions_String = 1008)] =
                "AllWirelessDongleDescriptions_String"),
              (e[(e.ConnectedWirelessDongle_String = 1009)] =
                "ConnectedWirelessDongle_String"),
              (e[(e.DeviceIsWireless_Bool = 1010)] = "DeviceIsWireless_Bool"),
              (e[(e.DeviceIsCharging_Bool = 1011)] = "DeviceIsCharging_Bool"),
              (e[(e.DeviceBatteryPercentage_Float = 1012)] =
                "DeviceBatteryPercentage_Float"),
              (e[(e.StatusDisplayTransform_Matrix34 = 1013)] =
                "StatusDisplayTransform_Matrix34"),
              (e[(e.Firmware_UpdateAvailable_Bool = 1014)] =
                "Firmware_UpdateAvailable_Bool"),
              (e[(e.Firmware_ManualUpdate_Bool = 1015)] =
                "Firmware_ManualUpdate_Bool"),
              (e[(e.Firmware_ManualUpdateURL_String = 1016)] =
                "Firmware_ManualUpdateURL_String"),
              (e[(e.HardwareRevision_Uint64 = 1017)] =
                "HardwareRevision_Uint64"),
              (e[(e.FirmwareVersion_Uint64 = 1018)] = "FirmwareVersion_Uint64"),
              (e[(e.FPGAVersion_Uint64 = 1019)] = "FPGAVersion_Uint64"),
              (e[(e.VRCVersion_Uint64 = 1020)] = "VRCVersion_Uint64"),
              (e[(e.RadioVersion_Uint64 = 1021)] = "RadioVersion_Uint64"),
              (e[(e.DongleVersion_Uint64 = 1022)] = "DongleVersion_Uint64"),
              (e[(e.BlockServerShutdown_Bool = 1023)] =
                "BlockServerShutdown_Bool"),
              (e[(e.CanUnifyCoordinateSystemWithHmd_Bool = 1024)] =
                "CanUnifyCoordinateSystemWithHmd_Bool"),
              (e[(e.ContainsProximitySensor_Bool = 1025)] =
                "ContainsProximitySensor_Bool"),
              (e[(e.DeviceProvidesBatteryStatus_Bool = 1026)] =
                "DeviceProvidesBatteryStatus_Bool"),
              (e[(e.DeviceCanPowerOff_Bool = 1027)] = "DeviceCanPowerOff_Bool"),
              (e[(e.Firmware_ProgrammingTarget_String = 1028)] =
                "Firmware_ProgrammingTarget_String"),
              (e[(e.DeviceClass_Int32 = 1029)] = "DeviceClass_Int32"),
              (e[(e.HasCamera_Bool = 1030)] = "HasCamera_Bool"),
              (e[(e.DriverVersion_String = 1031)] = "DriverVersion_String"),
              (e[(e.Firmware_ForceUpdateRequired_Bool = 1032)] =
                "Firmware_ForceUpdateRequired_Bool"),
              (e[(e.ViveSystemButtonFixRequired_Bool = 1033)] =
                "ViveSystemButtonFixRequired_Bool"),
              (e[(e.ParentDriver_Uint64 = 1034)] = "ParentDriver_Uint64"),
              (e[(e.ResourceRoot_String = 1035)] = "ResourceRoot_String"),
              (e[(e.RegisteredDeviceType_String = 1036)] =
                "RegisteredDeviceType_String"),
              (e[(e.InputProfilePath_String = 1037)] =
                "InputProfilePath_String"),
              (e[(e.NeverTracked_Bool = 1038)] = "NeverTracked_Bool"),
              (e[(e.NumCameras_Int32 = 1039)] = "NumCameras_Int32"),
              (e[(e.CameraFrameLayout_Int32 = 1040)] =
                "CameraFrameLayout_Int32"),
              (e[(e.CameraStreamFormat_Int32 = 1041)] =
                "CameraStreamFormat_Int32"),
              (e[(e.AdditionalDeviceSettingsPath_String = 1042)] =
                "AdditionalDeviceSettingsPath_String"),
              (e[(e.DevicePowerUsage_Float = 1052)] = "DevicePowerUsage_Float"),
              (e[(e.ReportsTimeSinceVSync_Bool = 2e3)] =
                "ReportsTimeSinceVSync_Bool"),
              (e[(e.SecondsFromVsyncToPhotons_Float = 2001)] =
                "SecondsFromVsyncToPhotons_Float"),
              (e[(e.DisplayFrequency_Float = 2002)] = "DisplayFrequency_Float"),
              (e[(e.UserIpdMeters_Float = 2003)] = "UserIpdMeters_Float"),
              (e[(e.CurrentUniverseId_Uint64 = 2004)] =
                "CurrentUniverseId_Uint64"),
              (e[(e.PreviousUniverseId_Uint64 = 2005)] =
                "PreviousUniverseId_Uint64"),
              (e[(e.DisplayFirmwareVersion_Uint64 = 2006)] =
                "DisplayFirmwareVersion_Uint64"),
              (e[(e.IsOnDesktop_Bool = 2007)] = "IsOnDesktop_Bool"),
              (e[(e.DisplayMCType_Int32 = 2008)] = "DisplayMCType_Int32"),
              (e[(e.DisplayMCOffset_Float = 2009)] = "DisplayMCOffset_Float"),
              (e[(e.DisplayMCScale_Float = 2010)] = "DisplayMCScale_Float"),
              (e[(e.EdidVendorID_Int32 = 2011)] = "EdidVendorID_Int32"),
              (e[(e.DisplayMCImageLeft_String = 2012)] =
                "DisplayMCImageLeft_String"),
              (e[(e.DisplayMCImageRight_String = 2013)] =
                "DisplayMCImageRight_String"),
              (e[(e.DisplayGCBlackClamp_Float = 2014)] =
                "DisplayGCBlackClamp_Float"),
              (e[(e.EdidProductID_Int32 = 2015)] = "EdidProductID_Int32"),
              (e[(e.CameraToHeadTransform_Matrix34 = 2016)] =
                "CameraToHeadTransform_Matrix34"),
              (e[(e.DisplayGCType_Int32 = 2017)] = "DisplayGCType_Int32"),
              (e[(e.DisplayGCOffset_Float = 2018)] = "DisplayGCOffset_Float"),
              (e[(e.DisplayGCScale_Float = 2019)] = "DisplayGCScale_Float"),
              (e[(e.DisplayGCPrescale_Float = 2020)] =
                "DisplayGCPrescale_Float"),
              (e[(e.DisplayGCImage_String = 2021)] = "DisplayGCImage_String"),
              (e[(e.LensCenterLeftU_Float = 2022)] = "LensCenterLeftU_Float"),
              (e[(e.LensCenterLeftV_Float = 2023)] = "LensCenterLeftV_Float"),
              (e[(e.LensCenterRightU_Float = 2024)] = "LensCenterRightU_Float"),
              (e[(e.LensCenterRightV_Float = 2025)] = "LensCenterRightV_Float"),
              (e[(e.UserHeadToEyeDepthMeters_Float = 2026)] =
                "UserHeadToEyeDepthMeters_Float"),
              (e[(e.CameraFirmwareVersion_Uint64 = 2027)] =
                "CameraFirmwareVersion_Uint64"),
              (e[(e.CameraFirmwareDescription_String = 2028)] =
                "CameraFirmwareDescription_String"),
              (e[(e.DisplayFPGAVersion_Uint64 = 2029)] =
                "DisplayFPGAVersion_Uint64"),
              (e[(e.DisplayBootloaderVersion_Uint64 = 2030)] =
                "DisplayBootloaderVersion_Uint64"),
              (e[(e.DisplayHardwareVersion_Uint64 = 2031)] =
                "DisplayHardwareVersion_Uint64"),
              (e[(e.AudioFirmwareVersion_Uint64 = 2032)] =
                "AudioFirmwareVersion_Uint64"),
              (e[(e.CameraCompatibilityMode_Int32 = 2033)] =
                "CameraCompatibilityMode_Int32"),
              (e[(e.ScreenshotHorizontalFieldOfViewDegrees_Float = 2034)] =
                "ScreenshotHorizontalFieldOfViewDegrees_Float"),
              (e[(e.ScreenshotVerticalFieldOfViewDegrees_Float = 2035)] =
                "ScreenshotVerticalFieldOfViewDegrees_Float"),
              (e[(e.DisplaySuppressed_Bool = 2036)] = "DisplaySuppressed_Bool"),
              (e[(e.DisplayAllowNightMode_Bool = 2037)] =
                "DisplayAllowNightMode_Bool"),
              (e[(e.DisplayMCImageWidth_Int32 = 2038)] =
                "DisplayMCImageWidth_Int32"),
              (e[(e.DisplayMCImageHeight_Int32 = 2039)] =
                "DisplayMCImageHeight_Int32"),
              (e[(e.DisplayMCImageNumChannels_Int32 = 2040)] =
                "DisplayMCImageNumChannels_Int32"),
              (e[(e.DisplayMCImageData_Binary = 2041)] =
                "DisplayMCImageData_Binary"),
              (e[(e.SecondsFromPhotonsToVblank_Float = 2042)] =
                "SecondsFromPhotonsToVblank_Float"),
              (e[(e.DriverDirectModeSendsVsyncEvents_Bool = 2043)] =
                "DriverDirectModeSendsVsyncEvents_Bool"),
              (e[(e.DisplayDebugMode_Bool = 2044)] = "DisplayDebugMode_Bool"),
              (e[(e.GraphicsAdapterLuid_Uint64 = 2045)] =
                "GraphicsAdapterLuid_Uint64"),
              (e[(e.DriverProvidedChaperonePath_String = 2048)] =
                "DriverProvidedChaperonePath_String"),
              (e[(e.ExpectedTrackingReferenceCount_Int32 = 2049)] =
                "ExpectedTrackingReferenceCount_Int32"),
              (e[(e.ExpectedControllerCount_Int32 = 2050)] =
                "ExpectedControllerCount_Int32"),
              (e[(e.NamedIconPathControllerLeftDeviceOff_String = 2051)] =
                "NamedIconPathControllerLeftDeviceOff_String"),
              (e[(e.NamedIconPathControllerRightDeviceOff_String = 2052)] =
                "NamedIconPathControllerRightDeviceOff_String"),
              (e[(e.NamedIconPathTrackingReferenceDeviceOff_String = 2053)] =
                "NamedIconPathTrackingReferenceDeviceOff_String"),
              (e[(e.DoNotApplyPrediction_Bool = 2054)] =
                "DoNotApplyPrediction_Bool"),
              (e[(e.CameraToHeadTransforms_Matrix34_Array = 2055)] =
                "CameraToHeadTransforms_Matrix34_Array"),
              (e[(e.DistortionMeshResolution_Int32 = 2056)] =
                "DistortionMeshResolution_Int32"),
              (e[(e.DriverIsDrawingControllers_Bool = 2057)] =
                "DriverIsDrawingControllers_Bool"),
              (e[(e.DriverRequestsApplicationPause_Bool = 2058)] =
                "DriverRequestsApplicationPause_Bool"),
              (e[(e.DriverRequestsReducedRendering_Bool = 2059)] =
                "DriverRequestsReducedRendering_Bool"),
              (e[(e.MinimumIpdStepMeters_Float = 2060)] =
                "MinimumIpdStepMeters_Float"),
              (e[(e.AudioBridgeFirmwareVersion_Uint64 = 2061)] =
                "AudioBridgeFirmwareVersion_Uint64"),
              (e[(e.ImageBridgeFirmwareVersion_Uint64 = 2062)] =
                "ImageBridgeFirmwareVersion_Uint64"),
              (e[(e.ImuToHeadTransform_Matrix34 = 2063)] =
                "ImuToHeadTransform_Matrix34"),
              (e[(e.ImuFactoryGyroBias_Vector3 = 2064)] =
                "ImuFactoryGyroBias_Vector3"),
              (e[(e.ImuFactoryGyroScale_Vector3 = 2065)] =
                "ImuFactoryGyroScale_Vector3"),
              (e[(e.ImuFactoryAccelerometerBias_Vector3 = 2066)] =
                "ImuFactoryAccelerometerBias_Vector3"),
              (e[(e.ImuFactoryAccelerometerScale_Vector3 = 2067)] =
                "ImuFactoryAccelerometerScale_Vector3"),
              (e[(e.ConfigurationIncludesLighthouse20Features_Bool = 2069)] =
                "ConfigurationIncludesLighthouse20Features_Bool"),
              (e[(e.Prop_AdditionalRadioFeatures_Uint64 = 2070)] =
                "Prop_AdditionalRadioFeatures_Uint64"),
              (e[(e.Prop_CameraWhiteBalance_Vector4_Array = 2071)] =
                "Prop_CameraWhiteBalance_Vector4_Array"),
              (e[(e.Prop_CameraDistortionFunction_Int32_Array = 2072)] =
                "Prop_CameraDistortionFunction_Int32_Array"),
              (e[(e.Prop_CameraDistortionCoefficients_Float_Array = 2073)] =
                "Prop_CameraDistortionCoefficients_Float_Array"),
              (e[(e.Prop_ExpectedControllerType_String = 2074)] =
                "Prop_ExpectedControllerType_String"),
              (e[(e.HmdTrackingStyle_Int32 = 2075)] = "HmdTrackingStyle_Int32"),
              (e[(e.DriverProvidedChaperoneVisibility_Bool = 2076)] =
                "DriverProvidedChaperoneVisibility_Bool"),
              (e[(e.HmdColumnCorrectionSettingPrefix_String = 2077)] =
                "HmdColumnCorrectionSettingPrefix_String"),
              (e[(e.CameraSupportsCompatibilityModes_Bool = 2078)] =
                "CameraSupportsCompatibilityModes_Bool"),
              (e[(e.SupportsRoomViewDepthProjection_Bool = 2079)] =
                "SupportsRoomViewDepthProjection_Bool"),
              (e[(e.DisplayAvailableFrameRates_Float_Array = 2080)] =
                "DisplayAvailableFrameRates_Float_Array"),
              (e[(e.DisplaySupportsRuntimeFramerateChange_Bool = 2084)] =
                "DisplaySupportsRuntimeFramerateChange_Bool"),
              (e[(e.DisplaySupportsAnalogGain_Bool = 2085)] =
                "DisplaySupportsAnalogGain_Bool"),
              (e[(e.DisplayMinAnalogGain_Float = 2086)] =
                "DisplayMinAnalogGain_Float"),
              (e[(e.DisplayMaxAnalogGain_Float = 2087)] =
                "DisplayMaxAnalogGain_Float"),
              (e[(e.DashboardScale_Float = 2091)] = "DashboardScale_Float"),
              (e[(e.PeerButtonInfo_String = 2092)] = "PeerButtonInfo_String"),
              (e[(e.IpdUIRangeMinMeters_Float = 2100)] =
                "IpdUIRangeMinMeters_Float"),
              (e[(e.IpdUIRangeMaxMeters_Float = 2101)] =
                "IpdUIRangeMaxMeters_Float"),
              (e[(e.Hmd_SupportsHDCP14LegacyCompat_Bool = 2102)] =
                "Hmd_SupportsHDCP14LegacyCompat_Bool"),
              (e[(e.Hmd_SupportsMicMonitoring_Bool = 2103)] =
                "Hmd_SupportsMicMonitoring_Bool"),
              (e[(e.Hmd_SupportsDisplayPortTrainingMode_Bool = 2104)] =
                "Hmd_SupportsDisplayPortTrainingMode_Bool"),
              (e[(e.Hmd_SupportsRoomViewDirect_Bool = 2105)] =
                "Hmd_SupportsRoomViewDirect_Bool"),
              (e[(e.Hmd_SupportsAppThrottling_Bool = 2106)] =
                "Hmd_SupportsAppThrottling_Bool"),
              (e[(e.Hmd_SupportsGpuBusMonitoring_Bool = 2107)] =
                "Hmd_SupportsGpuBusMonitoring_Bool"),
              (e[(e.DriverRequestedMuraCorrectionMode_Int32 = 2200)] =
                "DriverRequestedMuraCorrectionMode_Int32"),
              (e[(e.DriverRequestedMuraFeather_InnerLeft_Int32 = 2201)] =
                "DriverRequestedMuraFeather_InnerLeft_Int32"),
              (e[(e.DriverRequestedMuraFeather_InnerRight_Int32 = 2202)] =
                "DriverRequestedMuraFeather_InnerRight_Int32"),
              (e[(e.DriverRequestedMuraFeather_InnerTop_Int32 = 2203)] =
                "DriverRequestedMuraFeather_InnerTop_Int32"),
              (e[(e.DriverRequestedMuraFeather_InnerBottom_Int32 = 2204)] =
                "DriverRequestedMuraFeather_InnerBottom_Int32"),
              (e[(e.DriverRequestedMuraFeather_OuterLeft_Int32 = 2205)] =
                "DriverRequestedMuraFeather_OuterLeft_Int32"),
              (e[(e.DriverRequestedMuraFeather_OuterRight_Int32 = 2206)] =
                "DriverRequestedMuraFeather_OuterRight_Int32"),
              (e[(e.DriverRequestedMuraFeather_OuterTop_Int32 = 2207)] =
                "DriverRequestedMuraFeather_OuterTop_Int32"),
              (e[(e.DriverRequestedMuraFeather_OuterBottom_Int32 = 2208)] =
                "DriverRequestedMuraFeather_OuterBottom_Int32"),
              (e[(e.Audio_SupportsDualSpeakerAndJackOutput_Bool = 2303)] =
                "Audio_SupportsDualSpeakerAndJackOutput_Bool"),
              (e[(e.AttachedDeviceId_String = 3e3)] =
                "AttachedDeviceId_String"),
              (e[(e.SupportedButtons_Uint64 = 3001)] =
                "SupportedButtons_Uint64"),
              (e[(e.Axis0Type_Int32 = 3002)] = "Axis0Type_Int32"),
              (e[(e.Axis1Type_Int32 = 3003)] = "Axis1Type_Int32"),
              (e[(e.Axis2Type_Int32 = 3004)] = "Axis2Type_Int32"),
              (e[(e.Axis3Type_Int32 = 3005)] = "Axis3Type_Int32"),
              (e[(e.Axis4Type_Int32 = 3006)] = "Axis4Type_Int32"),
              (e[(e.ControllerRoleHint_Int32 = 3007)] =
                "ControllerRoleHint_Int32"),
              (e[(e.FieldOfViewLeftDegrees_Float = 4e3)] =
                "FieldOfViewLeftDegrees_Float"),
              (e[(e.FieldOfViewRightDegrees_Float = 4001)] =
                "FieldOfViewRightDegrees_Float"),
              (e[(e.FieldOfViewTopDegrees_Float = 4002)] =
                "FieldOfViewTopDegrees_Float"),
              (e[(e.FieldOfViewBottomDegrees_Float = 4003)] =
                "FieldOfViewBottomDegrees_Float"),
              (e[(e.TrackingRangeMinimumMeters_Float = 4004)] =
                "TrackingRangeMinimumMeters_Float"),
              (e[(e.TrackingRangeMaximumMeters_Float = 4005)] =
                "TrackingRangeMaximumMeters_Float"),
              (e[(e.ModeLabel_String = 4006)] = "ModeLabel_String"),
              (e[(e.IconPathName_String = 5e3)] = "IconPathName_String"),
              (e[(e.NamedIconPathDeviceOff_String = 5001)] =
                "NamedIconPathDeviceOff_String"),
              (e[(e.NamedIconPathDeviceSearching_String = 5002)] =
                "NamedIconPathDeviceSearching_String"),
              (e[(e.NamedIconPathDeviceSearchingAlert_String = 5003)] =
                "NamedIconPathDeviceSearchingAlert_String"),
              (e[(e.NamedIconPathDeviceReady_String = 5004)] =
                "NamedIconPathDeviceReady_String"),
              (e[(e.NamedIconPathDeviceReadyAlert_String = 5005)] =
                "NamedIconPathDeviceReadyAlert_String"),
              (e[(e.NamedIconPathDeviceNotReady_String = 5006)] =
                "NamedIconPathDeviceNotReady_String"),
              (e[(e.NamedIconPathDeviceStandby_String = 5007)] =
                "NamedIconPathDeviceStandby_String"),
              (e[(e.NamedIconPathDeviceAlertLow_String = 5008)] =
                "NamedIconPathDeviceAlertLow_String"),
              (e[(e.DisplayHiddenArea_Binary_Start = 5100)] =
                "DisplayHiddenArea_Binary_Start"),
              (e[(e.DisplayHiddenArea_Binary_End = 5150)] =
                "DisplayHiddenArea_Binary_End"),
              (e[(e.ParentContainer = 5151)] = "ParentContainer"),
              (e[(e.UserConfigPath_String = 6e3)] = "UserConfigPath_String"),
              (e[(e.InstallPath_String = 6001)] = "InstallPath_String"),
              (e[(e.HasDisplayComponent_Bool = 6002)] =
                "HasDisplayComponent_Bool"),
              (e[(e.HasControllerComponent_Bool = 6003)] =
                "HasControllerComponent_Bool"),
              (e[(e.HasCameraComponent_Bool = 6004)] =
                "HasCameraComponent_Bool"),
              (e[(e.HasDriverDirectModeComponent_Bool = 6005)] =
                "HasDriverDirectModeComponent_Bool"),
              (e[(e.HasVirtualDisplayComponent_Bool = 6006)] =
                "HasVirtualDisplayComponent_Bool"),
              (e[(e.HasSpatialAnchorsSupport_Bool = 6007)] =
                "HasSpatialAnchorsSupport_Bool"),
              (e[(e.ControllerType_String = 7e3)] = "ControllerType_String"),
              (e[(e.LegacyInputProfile_String = 7001)] =
                "LegacyInputProfile_String"),
              (e[(e.VendorSpecific_Reserved_Start = 1e4)] =
                "VendorSpecific_Reserved_Start"),
              (e[(e.VendorSpecific_Reserved_End = 10999)] =
                "VendorSpecific_Reserved_End"),
              (e[(e.TrackedDeviceProperty_Max = 1e6)] =
                "TrackedDeviceProperty_Max");
          })(W || (W = {}));
      },
      697: (e, t, o) => {
        "use strict";
        function r(e, t) {
          return !!e && "object" == typeof e.SteamClient && t in e.SteamClient;
        }
        function n(e) {
          return (function (e, t) {
            if (!e) return !1;
            const [o, n] = t.split(".", 2);
            return o && n && r(e, o) && n in e.SteamClient[o];
          })(window, e);
        }
        o.d(t, { U5: () => n });
      },
      736: (e, t, o) => {
        "use strict";
        function r(e, t) {
          return (function (e, t) {
            let o = e.findIndex(t);
            return o >= 0 && (e.splice(o, 1), !0);
          })(e, (e) => t == e);
        }
        o.d(t, { Zf: () => r });
      },
      399: (e, t, o) => {
        "use strict";
        function r(e, t, o) {
          return {
            get() {
              let e = o.value.bind(this);
              return (
                this.hasOwnProperty(t) ||
                  Object.defineProperty(this, t, { value: e }),
                e
              );
            },
          };
        }
        o.d(t, { a: () => r });
      },
      611: (e, t, o) => {
        "use strict";
        o.d(t, { Ar: () => l, Hf: () => u, pB: () => a, vq: () => g });
        var r = o(655),
          n = o(736),
          i = o(399);
        class a {
          constructor() {
            this.m_vecCallbacks = [];
          }
          Register(e) {
            this.m_vecCallbacks.push(e);
            return {
              Unregister: () => {
                n.Zf(this.m_vecCallbacks, e);
              },
            };
          }
          Dispatch(...e) {
            for (const t of Array.from(this.m_vecCallbacks)) t(...e);
          }
          ClearAllCallbacks() {
            this.m_vecCallbacks = [];
          }
          CountRegistered() {
            return this.m_vecCallbacks.length;
          }
        }
        class s {
          constructor(e) {
            (this.m_callbacks = new a()), (this.m_currentValue = e);
          }
          Set(e) {
            (this.m_currentValue = e), this.m_callbacks.Dispatch(e);
          }
          get Value() {
            return this.m_currentValue;
          }
          Subscribe(e) {
            return { Unsubscribe: this.m_callbacks.Register(e).Unregister };
          }
        }
        function g(e) {
          return new s(e);
        }
        class l {
          Schedule(e, t) {
            this.IsScheduled() && this.Cancel(),
              (this.m_fnCallback = t),
              (this.m_schTimer = window.setTimeout(this.ScheduledInternal, e));
          }
          IsScheduled() {
            return void 0 !== this.m_schTimer;
          }
          Cancel() {
            this.m_schTimer &&
              (clearTimeout(this.m_schTimer), (this.m_schTimer = void 0));
          }
          ScheduledInternal() {
            this.m_schTimer = void 0;
            let e = this.m_fnCallback;
            (this.m_fnCallback = void 0), e();
          }
        }
        (0, r.gn)([i.a], l.prototype, "ScheduledInternal", null);
        class u {
          constructor() {
            this.m_vecCallbacks = [];
          }
          Push(e) {
            this.m_vecCallbacks.push(e);
          }
          PushArrayRemove(e, t) {
            this.m_vecCallbacks.push(() => n.Zf(e, t));
          }
          Unregister() {
            for (let e of this.m_vecCallbacks) e();
            this.m_vecCallbacks = [];
          }
          GetUnregisterFunc() {
            return this.Unregister;
          }
        }
        (0, r.gn)([i.a], u.prototype, "Unregister", null);
      },
      428: (e, t, o) => {
        "use strict";
        "VALVE_PUBLIC_PATH" in window
          ? (o.p = window.VALVE_PUBLIC_PATH)
          : console.error(
              "VALVE_PUBLIC_PATH not defined; check for a call to CHTMLHelpers::WebpackConfigScriptlet"
            ),
          console.assert(
            123 === Array.from(new Set([123]))[0],
            "Should not include prototypejs."
          );
      },
      655: (e, t, o) => {
        "use strict";
        o.d(t, { _T: () => r, gn: () => n, mG: () => i });
        function r(e, t) {
          var o = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              t.indexOf(r) < 0 &&
              (o[r] = e[r]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var n = 0;
            for (r = Object.getOwnPropertySymbols(e); n < r.length; n++)
              t.indexOf(r[n]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[n]) &&
                (o[r[n]] = e[r[n]]);
          }
          return o;
        }
        function n(e, t, o, r) {
          var n,
            i = arguments.length,
            a =
              i < 3
                ? t
                : null === r
                ? (r = Object.getOwnPropertyDescriptor(t, o))
                : r;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            a = Reflect.decorate(e, t, o, r);
          else
            for (var s = e.length - 1; s >= 0; s--)
              (n = e[s]) &&
                (a = (i < 3 ? n(a) : i > 3 ? n(t, o, a) : n(t, o)) || a);
          return i > 3 && a && Object.defineProperty(t, o, a), a;
        }
        function i(e, t, o, r) {
          return new (o || (o = Promise))(function (n, i) {
            function a(e) {
              try {
                g(r.next(e));
              } catch (e) {
                i(e);
              }
            }
            function s(e) {
              try {
                g(r.throw(e));
              } catch (e) {
                i(e);
              }
            }
            function g(e) {
              var t;
              e.done
                ? n(e.value)
                : ((t = e.value),
                  t instanceof o
                    ? t
                    : new o(function (e) {
                        e(t);
                      })).then(a, s);
            }
            g((r = r.apply(e, t || [])).next());
          });
        }
        Object.create;
        Object.create;
      },
      311: (e) => {
        "use strict";
        e.exports = jQuery;
      },
    },
    __webpack_module_cache__ = {},
    inProgress,
    dataWebpackPrefix,
    loadStylesheet,
    installedCssChunks;
  function __webpack_require__(e) {
    var t = __webpack_module_cache__[e];
    if (void 0 !== t) return t.exports;
    var o = (__webpack_module_cache__[e] = { exports: {} });
    return (
      __webpack_modules__[e].call(o.exports, o, o.exports, __webpack_require__),
      o.exports
    );
  }
  (__webpack_require__.m = __webpack_modules__),
    (__webpack_require__.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return __webpack_require__.d(t, { a: t }), t;
    }),
    (__webpack_require__.d = (e, t) => {
      for (var o in t)
        __webpack_require__.o(t, o) &&
          !__webpack_require__.o(e, o) &&
          Object.defineProperty(e, o, { enumerable: !0, get: t[o] });
    }),
    (__webpack_require__.f = {}),
    (__webpack_require__.e = (e) =>
      Promise.all(
        Object.keys(__webpack_require__.f).reduce(
          (t, o) => (__webpack_require__.f[o](e, t), t),
          []
        )
      )),
    (__webpack_require__.u = (e) =>
      "javascript/legacy_web/" +
      { 380: "desktop", 511: "gamepad" }[e] +
      ".js?contenthash=" +
      { 380: "7d22e20139ec5614dfab", 511: "626e3ae5af285ed14133" }[e]),
    (__webpack_require__.miniCssF = (e) =>
      "css/legacy_web/gamepad.css?contenthash=be44dba8ea7ddd48708c"),
    (__webpack_require__.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (__webpack_require__.o = (e, t) =>
      Object.prototype.hasOwnProperty.call(e, t)),
    (inProgress = {}),
    (dataWebpackPrefix = "legacy_web:"),
    (__webpack_require__.l = (e, t, o, r) => {
      if (inProgress[e]) inProgress[e].push(t);
      else {
        var n, i;
        if (void 0 !== o)
          for (
            var a = document.getElementsByTagName("script"), s = 0;
            s < a.length;
            s++
          ) {
            var g = a[s];
            if (
              g.getAttribute("src") == e ||
              g.getAttribute("data-webpack") == dataWebpackPrefix + o
            ) {
              n = g;
              break;
            }
          }
        n ||
          ((i = !0),
          ((n = document.createElement("script")).charset = "utf-8"),
          (n.timeout = 120),
          __webpack_require__.nc &&
            n.setAttribute("nonce", __webpack_require__.nc),
          n.setAttribute("data-webpack", dataWebpackPrefix + o),
          (n.src = e)),
          (inProgress[e] = [t]);
        var l = (t, o) => {
            (n.onerror = n.onload = null), clearTimeout(u);
            var r = inProgress[e];
            if (
              (delete inProgress[e],
              n.parentNode && n.parentNode.removeChild(n),
              r && r.forEach((e) => e(o)),
              t)
            )
              return t(o);
          },
          u = setTimeout(
            l.bind(null, void 0, { type: "timeout", target: n }),
            12e4
          );
        (n.onerror = l.bind(null, n.onerror)),
          (n.onload = l.bind(null, n.onload)),
          i && document.head.appendChild(n);
      }
    }),
    (__webpack_require__.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (() => {
      var e;
      __webpack_require__.g.importScripts &&
        (e = __webpack_require__.g.location + "");
      var t = __webpack_require__.g.document;
      if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
        var o = t.getElementsByTagName("script");
        o.length && (e = o[o.length - 1].src);
      }
      if (!e)
        throw new Error(
          "Automatic publicPath is not supported in this browser"
        );
      (e = e
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (__webpack_require__.p = e + "../../");
    })(),
    (loadStylesheet = (e) =>
      new Promise((t, o) => {
        var r = __webpack_require__.miniCssF(e),
          n = __webpack_require__.p + r;
        if (
          ((e, t) => {
            for (
              var o = document.getElementsByTagName("link"), r = 0;
              r < o.length;
              r++
            ) {
              var n =
                (a = o[r]).getAttribute("data-href") || a.getAttribute("href");
              if ("stylesheet" === a.rel && (n === e || n === t)) return a;
            }
            var i = document.getElementsByTagName("style");
            for (r = 0; r < i.length; r++) {
              var a;
              if ((n = (a = i[r]).getAttribute("data-href")) === e || n === t)
                return a;
            }
          })(r, n)
        )
          return t();
        ((e, t, o, r) => {
          var n = document.createElement("link");
          (n.rel = "stylesheet"),
            (n.type = "text/css"),
            (n.onerror = n.onload =
              (i) => {
                if (((n.onerror = n.onload = null), "load" === i.type)) o();
                else {
                  var a = i && ("load" === i.type ? "missing" : i.type),
                    s = (i && i.target && i.target.href) || t,
                    g = new Error(
                      "Loading CSS chunk " + e + " failed.\n(" + s + ")"
                    );
                  (g.code = "CSS_CHUNK_LOAD_FAILED"),
                    (g.type = a),
                    (g.request = s),
                    n.parentNode.removeChild(n),
                    r(g);
                }
              }),
            (n.href = t),
            document.head.appendChild(n);
        })(e, n, t, o);
      })),
    (installedCssChunks = { 179: 0 }),
    (__webpack_require__.f.miniCss = (e, t) => {
      installedCssChunks[e]
        ? t.push(installedCssChunks[e])
        : 0 !== installedCssChunks[e] &&
          { 511: 1 }[e] &&
          t.push(
            (installedCssChunks[e] = loadStylesheet(e).then(
              () => {
                installedCssChunks[e] = 0;
              },
              (t) => {
                throw (delete installedCssChunks[e], t);
              }
            ))
          );
    }),
    (() => {
      var e = { 179: 0 };
      __webpack_require__.f.j = (t, o) => {
        var r = __webpack_require__.o(e, t) ? e[t] : void 0;
        if (0 !== r)
          if (r) o.push(r[2]);
          else {
            var n = new Promise((o, n) => (r = e[t] = [o, n]));
            o.push((r[2] = n));
            var i = __webpack_require__.p + __webpack_require__.u(t),
              a = new Error();
            __webpack_require__.l(
              i,
              (o) => {
                if (
                  __webpack_require__.o(e, t) &&
                  (0 !== (r = e[t]) && (e[t] = void 0), r)
                ) {
                  var n = o && ("load" === o.type ? "missing" : o.type),
                    i = o && o.target && o.target.src;
                  (a.message =
                    "Loading chunk " + t + " failed.\n(" + n + ": " + i + ")"),
                    (a.name = "ChunkLoadError"),
                    (a.type = n),
                    (a.request = i),
                    r[1](a);
                }
              },
              "chunk-" + t,
              t
            );
          }
      };
      var t = (t, o) => {
          var r,
            n,
            [i, a, s] = o,
            g = 0;
          if (i.some((t) => 0 !== e[t])) {
            for (r in a)
              __webpack_require__.o(a, r) && (__webpack_require__.m[r] = a[r]);
            if (s) s(__webpack_require__);
          }
          for (t && t(o); g < i.length; g++)
            (n = i[g]),
              __webpack_require__.o(e, n) && e[n] && e[n][0](),
              (e[n] = 0);
        },
        o = (self.webpackChunklegacy_web = self.webpackChunklegacy_web || []);
      o.forEach(t.bind(null, 0)), (o.push = t.bind(null, o.push.bind(o)));
    })();
  var __webpack_exports__ = {};
  (() => {
    "use strict";
    var e = __webpack_require__(655),
      t = (__webpack_require__(428), __webpack_require__(311)),
      o = __webpack_require__.n(t),
      r = __webpack_require__(84),
      n = __webpack_require__(513);
    function i(t) {
      return (0, e.mG)(this, void 0, void 0, function* () {
        const { InitializeGamepadNavigation: e } = yield __webpack_require__
          .e(511)
          .then(__webpack_require__.bind(__webpack_require__, 302));
        e(t);
      });
    }
    __webpack_require__.p.endsWith("shared/") ||
      (__webpack_require__.p = __webpack_require__.p + "shared/"),
      o()(function () {
        !(function () {
          const t = new r.B();
          navigator.userAgent.includes("Valve Steam Gamepad")
            ? i(t)
            : (0, n.U5)("BrowserView.RegisterForMessageFromParent") &&
              (0, n.U5)("BrowserView.PostMessageToParent")
            ? (function () {
                (0, e.mG)(this, void 0, void 0, function* () {
                  const { InitializeForDesktop: e } = yield __webpack_require__
                    .e(380)
                    .then(__webpack_require__.bind(__webpack_require__, 781));
                  e();
                });
              })()
            : t.RegisterForGamepadDetected(() => i(t));
        })();
      });
  })();
})();

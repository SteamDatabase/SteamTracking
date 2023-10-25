/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [4309],
  {
    50132: function (e, t, o) {
      /*!
       * @overview es6-promise - a tiny implementation of Promises/A+.
       * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
       * @license   Licensed under MIT license
       *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
       * @version   v4.2.8+1e68dce6
       */
      e.exports = (function () {
        "use strict";
        function e(e) {
          var t = typeof e;
          return null !== e && ("object" === t || "function" === t);
        }
        function t(e) {
          return "function" == typeof e;
        }
        var i = Array.isArray
            ? Array.isArray
            : function (e) {
                return "[object Array]" === Object.prototype.toString.call(e);
              },
          n = 0,
          r = void 0,
          a = void 0,
          s = function (e, t) {
            (w[n] = e), (w[n + 1] = t), 2 === (n += 2) && (a ? a(E) : R());
          };
        function l(e) {
          a = e;
        }
        function c(e) {
          s = e;
        }
        var u = "undefined" != typeof window ? window : void 0,
          d = u || {},
          p = d.MutationObserver || d.WebKitMutationObserver,
          h =
            "undefined" == typeof self &&
            "undefined" != typeof process &&
            "[object process]" === {}.toString.call(process),
          m =
            "undefined" != typeof Uint8ClampedArray &&
            "undefined" != typeof importScripts &&
            "undefined" != typeof MessageChannel;
        function f() {
          return function () {
            return process.nextTick(E);
          };
        }
        function g() {
          return void 0 !== r
            ? function () {
                r(E);
              }
            : y();
        }
        function b() {
          var e = 0,
            t = new p(E),
            o = document.createTextNode("");
          return (
            t.observe(o, { characterData: !0 }),
            function () {
              o.data = e = ++e % 2;
            }
          );
        }
        function v() {
          var e = new MessageChannel();
          return (
            (e.port1.onmessage = E),
            function () {
              return e.port2.postMessage(0);
            }
          );
        }
        function y() {
          var e = setTimeout;
          return function () {
            return e(E, 1);
          };
        }
        var w = new Array(1e3);
        function E() {
          for (var e = 0; e < n; e += 2)
            (0, w[e])(w[e + 1]), (w[e] = void 0), (w[e + 1] = void 0);
          n = 0;
        }
        function C() {
          try {
            var e = Function("return this")().require("vertx");
            return (r = e.runOnLoop || e.runOnContext), g();
          } catch (e) {
            return y();
          }
        }
        var R = void 0;
        function x(e, t) {
          var o = this,
            i = new this.constructor(S);
          void 0 === i[M] && Y(i);
          var n = o._state;
          if (n) {
            var r = arguments[n - 1];
            s(function () {
              return V(n, i, r, o._result);
            });
          } else j(o, i, e, t);
          return i;
        }
        function _(e) {
          var t = this;
          if (e && "object" == typeof e && e.constructor === t) return e;
          var o = new t(S);
          return H(o, e), o;
        }
        R = h ? f() : p ? b() : m ? v() : void 0 === u ? C() : y();
        var M = Math.random().toString(36).substring(2);
        function S() {}
        var T = void 0,
          k = 1,
          D = 2;
        function L() {
          return new TypeError("You cannot resolve a promise with itself");
        }
        function z() {
          return new TypeError(
            "A promises callback cannot return that same promise.",
          );
        }
        function P(e, t, o, i) {
          try {
            e.call(t, o, i);
          } catch (e) {
            return e;
          }
        }
        function A(e, t, o) {
          s(function (e) {
            var i = !1,
              n = P(
                o,
                t,
                function (o) {
                  i || ((i = !0), t !== o ? H(e, o) : I(e, o));
                },
                function (t) {
                  i || ((i = !0), N(e, t));
                },
                "Settle: " + (e._label || " unknown promise"),
              );
            !i && n && ((i = !0), N(e, n));
          }, e);
        }
        function F(e, t) {
          t._state === k
            ? I(e, t._result)
            : t._state === D
            ? N(e, t._result)
            : j(
                t,
                void 0,
                function (t) {
                  return H(e, t);
                },
                function (t) {
                  return N(e, t);
                },
              );
        }
        function B(e, o, i) {
          o.constructor === e.constructor &&
          i === x &&
          o.constructor.resolve === _
            ? F(e, o)
            : void 0 === i
            ? I(e, o)
            : t(i)
            ? A(e, o, i)
            : I(e, o);
        }
        function H(t, o) {
          if (t === o) N(t, L());
          else if (e(o)) {
            var i = void 0;
            try {
              i = o.then;
            } catch (e) {
              return void N(t, e);
            }
            B(t, o, i);
          } else I(t, o);
        }
        function O(e) {
          e._onerror && e._onerror(e._result), W(e);
        }
        function I(e, t) {
          e._state === T &&
            ((e._result = t),
            (e._state = k),
            0 !== e._subscribers.length && s(W, e));
        }
        function N(e, t) {
          e._state === T && ((e._state = D), (e._result = t), s(O, e));
        }
        function j(e, t, o, i) {
          var n = e._subscribers,
            r = n.length;
          (e._onerror = null),
            (n[r] = t),
            (n[r + k] = o),
            (n[r + D] = i),
            0 === r && e._state && s(W, e);
        }
        function W(e) {
          var t = e._subscribers,
            o = e._state;
          if (0 !== t.length) {
            for (
              var i = void 0, n = void 0, r = e._result, a = 0;
              a < t.length;
              a += 3
            )
              (i = t[a]), (n = t[a + o]), i ? V(o, i, n, r) : n(r);
            e._subscribers.length = 0;
          }
        }
        function V(e, o, i, n) {
          var r = t(i),
            a = void 0,
            s = void 0,
            l = !0;
          if (r) {
            try {
              a = i(n);
            } catch (e) {
              (l = !1), (s = e);
            }
            if (o === a) return void N(o, z());
          } else a = n;
          o._state !== T ||
            (r && l
              ? H(o, a)
              : !1 === l
              ? N(o, s)
              : e === k
              ? I(o, a)
              : e === D && N(o, a));
        }
        function G(e, t) {
          try {
            t(
              function (t) {
                H(e, t);
              },
              function (t) {
                N(e, t);
              },
            );
          } catch (t) {
            N(e, t);
          }
        }
        var U = 0;
        function X() {
          return U++;
        }
        function Y(e) {
          (e[M] = U++),
            (e._state = void 0),
            (e._result = void 0),
            (e._subscribers = []);
        }
        function q() {
          return new Error("Array Methods must be provided an Array");
        }
        var K = (function () {
          function e(e, t) {
            (this._instanceConstructor = e),
              (this.promise = new e(S)),
              this.promise[M] || Y(this.promise),
              i(t)
                ? ((this.length = t.length),
                  (this._remaining = t.length),
                  (this._result = new Array(this.length)),
                  0 === this.length
                    ? I(this.promise, this._result)
                    : ((this.length = this.length || 0),
                      this._enumerate(t),
                      0 === this._remaining && I(this.promise, this._result)))
                : N(this.promise, q());
          }
          return (
            (e.prototype._enumerate = function (e) {
              for (var t = 0; this._state === T && t < e.length; t++)
                this._eachEntry(e[t], t);
            }),
            (e.prototype._eachEntry = function (e, t) {
              var o = this._instanceConstructor,
                i = o.resolve;
              if (i === _) {
                var n = void 0,
                  r = void 0,
                  a = !1;
                try {
                  n = e.then;
                } catch (e) {
                  (a = !0), (r = e);
                }
                if (n === x && e._state !== T)
                  this._settledAt(e._state, t, e._result);
                else if ("function" != typeof n)
                  this._remaining--, (this._result[t] = e);
                else if (o === te) {
                  var s = new o(S);
                  a ? N(s, r) : B(s, e, n), this._willSettleAt(s, t);
                } else
                  this._willSettleAt(
                    new o(function (t) {
                      return t(e);
                    }),
                    t,
                  );
              } else this._willSettleAt(i(e), t);
            }),
            (e.prototype._settledAt = function (e, t, o) {
              var i = this.promise;
              i._state === T &&
                (this._remaining--, e === D ? N(i, o) : (this._result[t] = o)),
                0 === this._remaining && I(i, this._result);
            }),
            (e.prototype._willSettleAt = function (e, t) {
              var o = this;
              j(
                e,
                void 0,
                function (e) {
                  return o._settledAt(k, t, e);
                },
                function (e) {
                  return o._settledAt(D, t, e);
                },
              );
            }),
            e
          );
        })();
        function J(e) {
          return new K(this, e).promise;
        }
        function Z(e) {
          var t = this;
          return i(e)
            ? new t(function (o, i) {
                for (var n = e.length, r = 0; r < n; r++)
                  t.resolve(e[r]).then(o, i);
              })
            : new t(function (e, t) {
                return t(new TypeError("You must pass an array to race."));
              });
        }
        function $(e) {
          var t = new this(S);
          return N(t, e), t;
        }
        function Q() {
          throw new TypeError(
            "You must pass a resolver function as the first argument to the promise constructor",
          );
        }
        function ee() {
          throw new TypeError(
            "Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.",
          );
        }
        var te = (function () {
          function e(t) {
            (this[M] = X()),
              (this._result = this._state = void 0),
              (this._subscribers = []),
              S !== t &&
                ("function" != typeof t && Q(),
                this instanceof e ? G(this, t) : ee());
          }
          return (
            (e.prototype.catch = function (e) {
              return this.then(null, e);
            }),
            (e.prototype.finally = function (e) {
              var o = this,
                i = o.constructor;
              return t(e)
                ? o.then(
                    function (t) {
                      return i.resolve(e()).then(function () {
                        return t;
                      });
                    },
                    function (t) {
                      return i.resolve(e()).then(function () {
                        throw t;
                      });
                    },
                  )
                : o.then(e, e);
            }),
            e
          );
        })();
        function oe() {
          var e = void 0;
          if (void 0 !== o.g) e = o.g;
          else if ("undefined" != typeof self) e = self;
          else
            try {
              e = Function("return this")();
            } catch (e) {
              throw new Error(
                "polyfill failed because global object is unavailable in this environment",
              );
            }
          var t = e.Promise;
          if (t) {
            var i = null;
            try {
              i = Object.prototype.toString.call(t.resolve());
            } catch (e) {}
            if ("[object Promise]" === i && !t.cast) return;
          }
          e.Promise = te;
        }
        return (
          (te.prototype.then = x),
          (te.all = J),
          (te.race = Z),
          (te.resolve = _),
          (te.reject = $),
          (te._setScheduler = l),
          (te._setAsap = c),
          (te._asap = s),
          (te.polyfill = oe),
          (te.Promise = te),
          te
        );
      })();
    },
    29196: (e) => {
      e.exports = (function (e) {
        var t = {};
        function o(i) {
          if (t[i]) return t[i].exports;
          var n = (t[i] = { exports: {}, id: i, loaded: !1 });
          return (
            e[i].call(n.exports, n, n.exports, o), (n.loaded = !0), n.exports
          );
        }
        return (o.m = e), (o.c = t), (o.p = ""), o(0);
      })([
        function (e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.pickSVGProps = t.pickHTMLProps = void 0);
          var i = r(o(1)),
            n = r(o(5));
          function r(e) {
            return e && e.__esModule ? e : { default: e };
          }
          (t.pickHTMLProps = i.default), (t.pickSVGProps = n.default);
        },
        function (e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var i =
              Object.assign ||
              function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var o = arguments[t];
                  for (var i in o)
                    Object.prototype.hasOwnProperty.call(o, i) && (e[i] = o[i]);
                }
                return e;
              },
            n = a(o(2)),
            r = a(o(3));
          function a(e) {
            return e && e.__esModule ? e : { default: e };
          }
          var s = i(
            {},
            n.default,
            [
              "about",
              "datatype",
              "defaultChecked",
              "defaultValue",
              "inlist",
              "prefix",
              "property",
              "resource",
              "typeof",
              "vocab",
              "autoCapitalize",
              "autoCorrect",
              "color",
              "itemProp",
              "itemScope",
              "itemType",
              "itemRef",
              "itemID",
              "security",
              "unselectable",
              "results",
              "autoSave",
              "allowtransparency",
              "charSet",
              "ismap",
              "typemustmatch",
              "onBlur",
              "onChange",
              "onClick",
              "onContextMenu",
              "onCopy",
              "onCut",
              "onDoubleClick",
              "onDrag",
              "onDragEnd",
              "onDragEnter",
              "onDragExit",
              "onDragLeave",
              "onDragOver",
              "onDragStart",
              "onDrop",
              "onFocus",
              "onInput",
              "onKeyDown",
              "onKeyPress",
              "onKeyUp",
              "onMouseDown",
              "onMouseEnter",
              "onMouseLeave",
              "onMouseMove",
              "onMouseOut",
              "onMouseOver",
              "onMouseUp",
              "onPaste",
              "onScroll",
              "onSubmit",
              "onTouchCancel",
              "onTouchEnd",
              "onTouchMove",
              "onTouchStart",
              "onWheel",
              "onCompositionEnd",
              "onCompositionStart",
              "onCompositionUpdate",
              "onInvalid",
              "onPointerDown",
              "onPointerMove",
              "onPointerUp",
              "onPointerCancel",
              "onGotPointerCapture",
              "onLostPointerCapture",
              "onPointerEnter",
              "onPointerLeave",
              "onPointerOver",
              "onPointerOut",
              "onSelect",
              "onAbort",
              "onCanPlay",
              "onCanPlayThrough",
              "onDurationChange",
              "onEmptied",
              "onEncrypted",
              "onEnded",
              "onError",
              "onLoadedData",
              "onLoadedMetadata",
              "onLoadStart",
              "onPause",
              "onPlay",
              "onPlaying",
              "onProgress",
              "onRateChange",
              "onSeeked",
              "onSeeking",
              "onStalled",
              "onSuspend",
              "onTimeUpdate",
              "onVolumeChange",
              "onWaiting",
              "onLoad",
              "onError",
              "onAnimationStart",
              "onAnimationEnd",
              "onAnimationIteration",
              "onTransitionEnd",
              "onToggle",
            ].reduce(function (e, t) {
              return (e[t] = t), e;
            }, {}),
          );
          t.default = (0, r.default)(function (e) {
            return Boolean(s[e]) || /^(data|aria)-/.test(e);
          });
        },
        function (e, t) {
          /*!
           * html-attributes
           * https://github.com/alexmingoia/html-attributes
           */
          "use strict";
          e.exports = {
            abbr: "abbr",
            accept: "accept",
            acceptCharset: "accept-charset",
            accessKey: "accesskey",
            action: "action",
            allowFullScreen: "allowfullscreen",
            allowTransparency: "allowtransparency",
            alt: "alt",
            async: "async",
            autoComplete: "autocomplete",
            autoFocus: "autofocus",
            autoPlay: "autoplay",
            cellPadding: "cellpadding",
            cellSpacing: "cellspacing",
            challenge: "challenge",
            charset: "charset",
            checked: "checked",
            cite: "cite",
            class: "class",
            className: "class",
            cols: "cols",
            colSpan: "colspan",
            command: "command",
            content: "content",
            contentEditable: "contenteditable",
            contextMenu: "contextmenu",
            controls: "controls",
            coords: "coords",
            crossOrigin: "crossorigin",
            data: "data",
            dateTime: "datetime",
            default: "default",
            defer: "defer",
            dir: "dir",
            disabled: "disabled",
            download: "download",
            draggable: "draggable",
            dropzone: "dropzone",
            encType: "enctype",
            for: "for",
            form: "form",
            formAction: "formaction",
            formEncType: "formenctype",
            formMethod: "formmethod",
            formNoValidate: "formnovalidate",
            formTarget: "formtarget",
            frameBorder: "frameBorder",
            headers: "headers",
            height: "height",
            hidden: "hidden",
            high: "high",
            href: "href",
            hrefLang: "hreflang",
            htmlFor: "for",
            httpEquiv: "http-equiv",
            icon: "icon",
            id: "id",
            inputMode: "inputmode",
            isMap: "ismap",
            itemId: "itemid",
            itemProp: "itemprop",
            itemRef: "itemref",
            itemScope: "itemscope",
            itemType: "itemtype",
            kind: "kind",
            label: "label",
            lang: "lang",
            list: "list",
            loop: "loop",
            manifest: "manifest",
            max: "max",
            maxLength: "maxlength",
            media: "media",
            mediaGroup: "mediagroup",
            method: "method",
            min: "min",
            minLength: "minlength",
            multiple: "multiple",
            muted: "muted",
            name: "name",
            noValidate: "novalidate",
            open: "open",
            optimum: "optimum",
            pattern: "pattern",
            ping: "ping",
            placeholder: "placeholder",
            poster: "poster",
            preload: "preload",
            radioGroup: "radiogroup",
            readOnly: "readonly",
            rel: "rel",
            required: "required",
            role: "role",
            rows: "rows",
            rowSpan: "rowspan",
            sandbox: "sandbox",
            scope: "scope",
            scoped: "scoped",
            scrolling: "scrolling",
            seamless: "seamless",
            selected: "selected",
            shape: "shape",
            size: "size",
            sizes: "sizes",
            sortable: "sortable",
            span: "span",
            spellCheck: "spellcheck",
            src: "src",
            srcDoc: "srcdoc",
            srcSet: "srcset",
            start: "start",
            step: "step",
            style: "style",
            tabIndex: "tabindex",
            target: "target",
            title: "title",
            translate: "translate",
            type: "type",
            typeMustMatch: "typemustmatch",
            useMap: "usemap",
            value: "value",
            width: "width",
            wmode: "wmode",
            wrap: "wrap",
          };
        },
        function (e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var i,
            n = o(4),
            r = (i = n) && i.__esModule ? i : { default: i };
          t.default = function (e) {
            return function (t) {
              if (!(0, r.default)(t))
                throw new Error("props should be a plain object");
              var o = {};
              for (var i in t) t.hasOwnProperty(i) && e(i) && (o[i] = t[i]);
              return o;
            };
          };
        },
        function (e, t) {
          var o,
            i,
            n = Function.prototype,
            r = Object.prototype,
            a = n.toString,
            s = r.hasOwnProperty,
            l = a.call(Object),
            c = r.toString,
            u =
              ((o = Object.getPrototypeOf),
              (i = Object),
              function (e) {
                return o(i(e));
              });
          e.exports = function (e) {
            if (
              !(function (e) {
                return !!e && "object" == typeof e;
              })(e) ||
              "[object Object]" != c.call(e) ||
              (function (e) {
                var t = !1;
                if (null != e && "function" != typeof e.toString)
                  try {
                    t = !!(e + "");
                  } catch (e) {}
                return t;
              })(e)
            )
              return !1;
            var t = u(e);
            if (null === t) return !0;
            var o = s.call(t, "constructor") && t.constructor;
            return "function" == typeof o && o instanceof o && a.call(o) == l;
          };
        },
        function (e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var i = r(o(3)),
            n = r(o(6));
          function r(e) {
            return e && e.__esModule ? e : { default: e };
          }
          t.default = (0, i.default)(function (e) {
            return Boolean(n.default[e]);
          });
        },
        function (e, t) {
          /*!
           * svg-attributes
           * https://github.com/alexmingoia/svg-attributes
           */
          "use strict";
          e.exports = {
            accentHeight: "accent-height",
            accumulate: "accumulate",
            additive: "additive",
            alphabetic: "alphabetic",
            amplitude: "amplitude",
            arabicForm: "arabic-form",
            ascent: "ascent",
            attributeName: "attributeName",
            attributeType: "attributeType",
            azimuth: "azimuth",
            baseFrequency: "baseFrequency",
            baseProfile: "baseProfile",
            bbox: "bbox",
            begin: "begin",
            bias: "bias",
            by: "by",
            calcMode: "calcMode",
            capHeight: "cap-height",
            class: "class",
            clipPathUnits: "clipPathUnits",
            contentScriptType: "contentScriptType",
            contentStyleType: "contentStyleType",
            cx: "cx",
            cy: "cy",
            d: "d",
            descent: "descent",
            diffuseConstant: "diffuseConstant",
            divisor: "divisor",
            dur: "dur",
            dx: "dx",
            dy: "dy",
            edgeMode: "edgeMode",
            elevation: "elevation",
            end: "end",
            exponent: "exponent",
            externalResourcesRequired: "externalResourcesRequired",
            fill: "fill",
            filterRes: "filterRes",
            filterUnits: "filterUnits",
            fontFamily: "font-family",
            fontSize: "font-size",
            fontStretch: "font-stretch",
            fontStyle: "font-style",
            format: "format",
            from: "from",
            fx: "fx",
            fy: "fy",
            g1: "g1",
            g2: "g2",
            glyphame: "glyph-name",
            glyphRef: "glyphRef",
            gradientTransform: "gradientTransform",
            gradientUnits: "gradientUnits",
            hanging: "hanging",
            height: "height",
            horizAdvX: "horiz-adv-x",
            horizOriginX: "horiz-origin-x",
            horizOriginY: "horiz-origin-y",
            id: "id",
            ideographic: "ideographic",
            in: "in",
            in2: "in2",
            intercept: "intercept",
            k: "k",
            k1: "k1",
            k2: "k2",
            k3: "k3",
            k4: "k4",
            kernelMatrix: "kernelMatrix",
            kernelUnitLength: "kernelUnitLength",
            keyPoints: "keyPoints",
            keySplines: "keySplines",
            keyTimes: "keyTimes",
            lang: "lang",
            lengthAdjust: "lengthAdjust",
            limitingConeAngle: "limitingConeAngle",
            local: "local",
            markerHeight: "markerHeight",
            markerUnits: "markerUnits",
            markerWidth: "markerWidth",
            maskContentUnits: "maskContentUnits",
            maskUnits: "maskUnits",
            mathematical: "mathematical",
            max: "max",
            media: "media",
            method: "method",
            min: "min",
            mode: "mode",
            name: "name",
            numOctaves: "numOctaves",
            offset: "offset",
            onAbort: "onabort",
            onActivate: "onactivate",
            onBegin: "onbegin",
            onClick: "onclick",
            onEnd: "onend",
            onError: "onerror",
            onFocusIn: "onfocusin",
            onFocusOut: "onfocusout",
            onLoad: "onload",
            onMouseDown: "onmousedown",
            onMouseMove: "onmousemove",
            onMouseOut: "onmouseout",
            onMouseOver: "onmouseover",
            onMouseUp: "onmouseup",
            onRepeat: "onrepeat",
            onResize: "onresize",
            onScroll: "onscroll",
            onUnload: "onunload",
            onZoom: "onzoom",
            operator: "operator",
            order: "order",
            orient: "orient",
            orientation: "orientation",
            origin: "origin",
            overlinePosition: "overline-position",
            overlineThickness: "overline-thickness",
            panose1: "panose-1",
            path: "path",
            pathLength: "pathLength",
            patternContentUnits: "patternContentUnits",
            patternTransform: "patternTransform",
            patternUnits: "patternUnits",
            points: "points",
            pointsAtX: "pointsAtX",
            pointsAtY: "pointsAtY",
            pointsAtZ: "pointsAtZ",
            preserveAlpha: "preserveAlpha",
            preserveAspectRatio: "preserveAspectRatio",
            primitiveUnits: "primitiveUnits",
            r: "r",
            radius: "radius",
            refX: "refX",
            refY: "refY",
            renderingIntent: "rendering-intent",
            repeatCount: "repeatCount",
            repeatDur: "repeatDur",
            requiredExtensions: "requiredExtensions",
            requiredFeatures: "requiredFeatures",
            restart: "restart",
            result: "result",
            rotate: "rotate",
            rx: "rx",
            ry: "ry",
            scale: "scale",
            seed: "seed",
            slope: "slope",
            spacing: "spacing",
            specularConstant: "specularConstant",
            specularExponent: "specularExponent",
            spreadMethod: "spreadMethod",
            startOffset: "startOffset",
            stdDeviation: "stdDeviation",
            stemh: "stemh",
            stemv: "stemv",
            stitchTiles: "stitchTiles",
            strikethroughPosition: "strikethrough-position",
            strikethroughThickness: "strikethrough-thickness",
            string: "string",
            style: "style",
            surfaceScale: "surfaceScale",
            systemLanguage: "systemLanguage",
            tableValues: "tableValues",
            target: "target",
            targetX: "targetX",
            targetY: "targetY",
            textLength: "textLength",
            title: "title",
            to: "to",
            transform: "transform",
            type: "type",
            u1: "u1",
            u2: "u2",
            underlinePosition: "underline-position",
            underlineThickness: "underline-thickness",
            unicode: "unicode",
            unicodeRange: "unicode-range",
            unitsPerEm: "units-per-em",
            vAlphabetic: "v-alphabetic",
            vHanging: "v-hanging",
            vIdeographic: "v-ideographic",
            vMathematical: "v-mathematical",
            values: "values",
            version: "version",
            vertAdvY: "vert-adv-y",
            vertOriginX: "vert-origin-x",
            vertOriginY: "vert-origin-y",
            viewBox: "viewBox",
            viewTarget: "viewTarget",
            width: "width",
            widths: "widths",
            x: "x",
            xHeight: "x-height",
            x1: "x1",
            x2: "x2",
            xChannelSelector: "xChannelSelector",
            xlink: "xlink",
            xml: "xml",
            y: "y",
            y1: "y1",
            y2: "y2",
            yChannelSelector: "yChannelSelector",
            z: "z",
            zoomAndPan: "zoomAndPan",
            alignmentBaseline: "alignment-baseline",
            baselineShift: "baseline-shift",
            clipPath: "clip-path",
            clipRule: "clip-rule",
            clip: "clip",
            colorInterpolationFilters: "color-interpolation-filters",
            colorInterpolation: "color-interpolation",
            colorProfile: "color-profile",
            colorRendering: "color-rendering",
            color: "color",
            cursor: "cursor",
            direction: "direction",
            display: "display",
            dominantBaseline: "dominant-baseline",
            enableBackground: "enable-background",
            fillOpacity: "fill-opacity",
            fillRule: "fill-rule",
            filter: "filter",
            floodColor: "flood-color",
            floodOpacity: "flood-opacity",
            fontSizeAdjust: "font-size-adjust",
            fontVariant: "font-variant",
            fontWeight: "font-weight",
            glyphOrientationHorizontal: "glyph-orientation-horizontal",
            glyphOrientationVertical: "glyph-orientation-vertical",
            imageRendering: "image-rendering",
            kerning: "kerning",
            letterSpacing: "letter-spacing",
            lightingColor: "lighting-color",
            markerEnd: "marker-end",
            markerMid: "marker-mid",
            markerStart: "marker-start",
            mask: "mask",
            opacity: "opacity",
            overflow: "overflow",
            pointerEvents: "pointer-events",
            shapeRendering: "shape-rendering",
            stopColor: "stop-color",
            stopOpacity: "stop-opacity",
            strokeDasharray: "stroke-dasharray",
            strokeDashoffset: "stroke-dashoffset",
            strokeLinecap: "stroke-linecap",
            strokeLinejoin: "stroke-linejoin",
            strokeMiterlimit: "stroke-miterlimit",
            strokeOpacity: "stroke-opacity",
            strokeWidth: "stroke-width",
            stroke: "stroke",
            textAnchor: "text-anchor",
            textDecoration: "text-decoration",
            textRendering: "text-rendering",
            unicodeBidi: "unicode-bidi",
            visibility: "visibility",
            wordSpacing: "word-spacing",
            writingMode: "writing-mode",
          };
        },
      ]);
    },
    28838: function (e, t, o) {
      "use strict";
      var i =
          (this && this.__awaiter) ||
          function (e, t, o, i) {
            return new (o || (o = Promise))(function (n, r) {
              function a(e) {
                try {
                  l(i.next(e));
                } catch (e) {
                  r(e);
                }
              }
              function s(e) {
                try {
                  l(i.throw(e));
                } catch (e) {
                  r(e);
                }
              }
              function l(e) {
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
              l((i = i.apply(e, t || [])).next());
            });
          },
        n =
          (this && this.__generator) ||
          function (e, t) {
            var o,
              i,
              n,
              r,
              a = {
                label: 0,
                sent: function () {
                  if (1 & n[0]) throw n[1];
                  return n[1];
                },
                trys: [],
                ops: [],
              };
            return (
              (r = { next: s(0), throw: s(1), return: s(2) }),
              "function" == typeof Symbol &&
                (r[Symbol.iterator] = function () {
                  return this;
                }),
              r
            );
            function s(r) {
              return function (s) {
                return (function (r) {
                  if (o) throw new TypeError("Generator is already executing.");
                  for (; a; )
                    try {
                      if (
                        ((o = 1),
                        i &&
                          (n =
                            2 & r[0]
                              ? i.return
                              : r[0]
                              ? i.throw || ((n = i.return) && n.call(i), 0)
                              : i.next) &&
                          !(n = n.call(i, r[1])).done)
                      )
                        return n;
                      switch (((i = 0), n && (r = [2 & r[0], n.value]), r[0])) {
                        case 0:
                        case 1:
                          n = r;
                          break;
                        case 4:
                          return a.label++, { value: r[1], done: !1 };
                        case 5:
                          a.label++, (i = r[1]), (r = [0]);
                          continue;
                        case 7:
                          (r = a.ops.pop()), a.trys.pop();
                          continue;
                        default:
                          if (
                            !((n = a.trys),
                            (n = n.length > 0 && n[n.length - 1]) ||
                              (6 !== r[0] && 2 !== r[0]))
                          ) {
                            a = 0;
                            continue;
                          }
                          if (
                            3 === r[0] &&
                            (!n || (r[1] > n[0] && r[1] < n[3]))
                          ) {
                            a.label = r[1];
                            break;
                          }
                          if (6 === r[0] && a.label < n[1]) {
                            (a.label = n[1]), (n = r);
                            break;
                          }
                          if (n && a.label < n[2]) {
                            (a.label = n[2]), a.ops.push(r);
                            break;
                          }
                          n[2] && a.ops.pop(), a.trys.pop();
                          continue;
                      }
                      r = t.call(e, a);
                    } catch (e) {
                      (r = [6, e]), (i = 0);
                    } finally {
                      o = n = 0;
                    }
                  if (5 & r[0]) throw r[1];
                  return { value: r[0] ? r[1] : void 0, done: !0 };
                })([r, s]);
              };
            }
          };
      (t.__esModule = !0), (t.propsToOptions = void 0);
      var r = o(50132),
        a = o(73961),
        s = function () {};
      function l(e, t) {
        return new r.Promise(function (o, i) {
          a.render(e, t, function () {
            o(t);
          });
        });
      }
      t.propsToOptions = function (e) {
        return i(void 0, void 0, void 0, function () {
          var t, o, i, r, a, c, u, d;
          return n(this, function (n) {
            switch (n.label) {
              case 0:
                for (
                  t = {},
                    o = 0,
                    i = [
                      "height",
                      "layout",
                      "layoutColumnsOnNewData",
                      "columnMinWidth",
                      "columnVertAlign",
                      "resizableColumns",
                      "resizableRows",
                      "autoResize",
                      "tooltips",
                      "tooltipsHeader",
                      "tooltipGenerationMode",
                      "initialSort",
                      "initialFilter",
                      "initialHeaderFilter",
                      "footerElement",
                      "index",
                      "keybindings",
                      "clipboard",
                      "clipboardCopyStyled",
                      "clipboardCopySelector",
                      "clipboardCopyFormatter",
                      "clipboardCopyHeader",
                      "clipboardPasteParser",
                      "clipboardPasteAction",
                      "rowFormatter",
                      "placeholder",
                      "selectable",
                    ];
                  o < i.length;
                  o++
                )
                  void 0 !== e[(r = i[o])] && (t[r] = e[r]);
                for (
                  a = 0,
                    c = [
                      "tableBuilt",
                      "rowClick",
                      "rowDblClick",
                      "rowContext",
                      "rowTap",
                      "rowDblTap",
                      "rowTapHold",
                      "rowAdded",
                      "rowDeleted",
                      "rowMoved",
                      "rowUpdated",
                      "rowSelectionChanged",
                      "rowSelected",
                      "rowDeselected",
                      "rowResized",
                      "cellClick",
                      "cellDblClick",
                      "cellContext",
                      "cellTap",
                      "cellDblTap",
                      "cellTapHold",
                      "cellEditing",
                      "cellEdited",
                      "cellEditCancelled",
                      "columnMoved",
                      "columnResized",
                      "columnTitleChanged",
                      "columnVisibilityChanged",
                      "htmlImporting",
                      "htmlImported",
                      "dataLoading",
                      "dataLoaded",
                      "dataChanged",
                      "ajaxRequesting",
                      "ajaxResponse",
                      "ajaxError",
                      "dataFiltering",
                      "dataFiltered",
                      "dataSorting",
                      "dataSorted",
                      "renderStarted",
                      "renderComplete",
                      "pageLoaded",
                      "localized",
                      "dataGrouping",
                      "dataGrouped",
                      "groupVisibilityChanged",
                      "groupClick",
                      "groupDblClick",
                      "groupContext",
                      "groupTap",
                      "groupDblTap",
                      "groupTapHold",
                      "movableRowsSendingStart",
                      "movableRowsSent",
                      "movableRowsSentFailed",
                      "movableRowsSendingStop",
                      "movableRowsReceivingStart",
                      "movableRowsReceived",
                      "movableRowsReceivedFailed",
                      "movableRowsReceivingStop",
                      "validationFailed",
                      "clipboardCopied",
                      "clipboardPasted",
                      "clipboardPasteError",
                      "downloadReady",
                      "downloadComplete",
                    ];
                  a < c.length;
                  a++
                )
                  t[(u = c[a])] = e[u] || s;
                return "object" != typeof e.footerElement
                  ? [3, 2]
                  : [4, l(e.footerElement, document.createElement("div"))];
              case 1:
                (d = n.sent()), (t.footerElement = d.innerHTML), (n.label = 2);
              case 2:
                return [2, t];
            }
          });
        });
      };
    },
    78848: function (e, t, o) {
      "use strict";
      var i,
        n =
          (this && this.__extends) ||
          ((i = function (e, t) {
            return (
              (i =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                }),
              i(e, t)
            );
          }),
          function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Class extends value " +
                  String(t) +
                  " is not a constructor or null",
              );
            function o() {
              this.constructor = e;
            }
            i(e, t),
              (e.prototype =
                null === t
                  ? Object.create(t)
                  : ((o.prototype = t.prototype), new o()));
          }),
        r =
          (this && this.__assign) ||
          function () {
            return (
              (r =
                Object.assign ||
                function (e) {
                  for (var t, o = 1, i = arguments.length; o < i; o++)
                    for (var n in (t = arguments[o]))
                      Object.prototype.hasOwnProperty.call(t, n) &&
                        (e[n] = t[n]);
                  return e;
                }),
              r.apply(this, arguments)
            );
          },
        a =
          (this && this.__awaiter) ||
          function (e, t, o, i) {
            return new (o || (o = Promise))(function (n, r) {
              function a(e) {
                try {
                  l(i.next(e));
                } catch (e) {
                  r(e);
                }
              }
              function s(e) {
                try {
                  l(i.throw(e));
                } catch (e) {
                  r(e);
                }
              }
              function l(e) {
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
              l((i = i.apply(e, t || [])).next());
            });
          },
        s =
          (this && this.__generator) ||
          function (e, t) {
            var o,
              i,
              n,
              r,
              a = {
                label: 0,
                sent: function () {
                  if (1 & n[0]) throw n[1];
                  return n[1];
                },
                trys: [],
                ops: [],
              };
            return (
              (r = { next: s(0), throw: s(1), return: s(2) }),
              "function" == typeof Symbol &&
                (r[Symbol.iterator] = function () {
                  return this;
                }),
              r
            );
            function s(r) {
              return function (s) {
                return (function (r) {
                  if (o) throw new TypeError("Generator is already executing.");
                  for (; a; )
                    try {
                      if (
                        ((o = 1),
                        i &&
                          (n =
                            2 & r[0]
                              ? i.return
                              : r[0]
                              ? i.throw || ((n = i.return) && n.call(i), 0)
                              : i.next) &&
                          !(n = n.call(i, r[1])).done)
                      )
                        return n;
                      switch (((i = 0), n && (r = [2 & r[0], n.value]), r[0])) {
                        case 0:
                        case 1:
                          n = r;
                          break;
                        case 4:
                          return a.label++, { value: r[1], done: !1 };
                        case 5:
                          a.label++, (i = r[1]), (r = [0]);
                          continue;
                        case 7:
                          (r = a.ops.pop()), a.trys.pop();
                          continue;
                        default:
                          if (
                            !((n = a.trys),
                            (n = n.length > 0 && n[n.length - 1]) ||
                              (6 !== r[0] && 2 !== r[0]))
                          ) {
                            a = 0;
                            continue;
                          }
                          if (
                            3 === r[0] &&
                            (!n || (r[1] > n[0] && r[1] < n[3]))
                          ) {
                            a.label = r[1];
                            break;
                          }
                          if (6 === r[0] && a.label < n[1]) {
                            (a.label = n[1]), (n = r);
                            break;
                          }
                          if (n && a.label < n[2]) {
                            (a.label = n[2]), a.ops.push(r);
                            break;
                          }
                          n[2] && a.ops.pop(), a.trys.pop();
                          continue;
                      }
                      r = t.call(e, a);
                    } catch (e) {
                      (r = [6, e]), (i = 0);
                    } finally {
                      o = n = 0;
                    }
                  if (5 & r[0]) throw r[1];
                  return { value: r[0] ? r[1] : void 0, done: !0 };
                })([r, s]);
              };
            }
          };
      t.__esModule = !0;
      var l = o(89526),
        c = o(73961),
        u = o(29196),
        d = o(28838),
        p = o(3073),
        h = o(16894),
        m = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.state = { data: [], columns: t.props.columns }),
              (t.ref = null),
              (t.htmlProps = null),
              (t.mainId =
                "tabulator-" +
                +new Date() +
                "-" +
                Math.floor(9999999 * Math.random())),
              (t.table = null),
              (t.pickValidHTMLProps = function () {
                t.htmlProps ||
                  ((t.htmlProps = u.pickHTMLProps(t.props)),
                  delete t.htmlProps.data,
                  delete t.htmlProps.columns);
              }),
              t
            );
          }
          return (
            n(t, e),
            (t.prototype.componentDidMount = function () {
              return a(this, void 0, void 0, function () {
                var e, t, o, i, n, a, l;
                return s(this, function (s) {
                  switch (s.label) {
                    case 0:
                      return (
                        (e = c.findDOMNode(this.ref)),
                        (t = this),
                        (o = this.props),
                        (i = o.columns),
                        (n = o.data),
                        (a = o.options),
                        [4, d.propsToOptions(this.props)]
                      );
                    case 1:
                      return (
                        (l = s.sent()),
                        new h.default(
                          e,
                          r(
                            r(
                              r(r({ columns: i }, l), {
                                layout: "fitColumns",
                                tableBuilding: function () {
                                  (t.table = this),
                                    t.props.tableBuilding &&
                                      t.props.tableBuilding();
                                },
                                dataLoaded: function () {
                                  t.props.dataLoaded && t.props.dataLoaded();
                                },
                                invalidOptionWarnings: !1,
                              }),
                              a,
                            ),
                            { data: n },
                          ),
                        ),
                        n && n.length > 0 && this.setState({ data: n }),
                        [2]
                      );
                  }
                });
              });
            }),
            (t.prototype.componentWillUnmount = function () {
              this.table && this.table.destroy();
            }),
            (t.prototype.componentWillReceiveProps = function (e) {
              var t = this;
              p.isSameArray(this.state.data, e.data) ||
                this.setState({ data: e.data }, function () {
                  t.table && t.table.setData(t.state.data);
                }),
                p.isSameArray(this.state.columns, e.columns) ||
                  this.setState({ columns: e.columns }, function () {
                    t.table && t.table.setColumns(t.state.columns);
                  });
            }),
            (t.prototype.render = function () {
              var e = this;
              this.pickValidHTMLProps();
              var t = this.props.className;
              return l.createElement(
                "div",
                r(
                  {
                    ref: function (t) {
                      return (e.ref = t);
                    },
                    "data-instance": this.mainId,
                  },
                  this.htmlProps,
                  { className: t },
                ),
              );
            }),
            t
          );
        })(l.Component);
      t.default = m;
    },
    9667: function (e, t, o) {
      "use strict";
      var i,
        n =
          (this && this.__extends) ||
          ((i = function (e, t) {
            return (
              (i =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                }),
              i(e, t)
            );
          }),
          function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Class extends value " +
                  String(t) +
                  " is not a constructor or null",
              );
            function o() {
              this.constructor = e;
            }
            i(e, t),
              (e.prototype =
                null === t
                  ? Object.create(t)
                  : ((o.prototype = t.prototype), new o()));
          }),
        r =
          (this && this.__assign) ||
          function () {
            return (
              (r =
                Object.assign ||
                function (e) {
                  for (var t, o = 1, i = arguments.length; o < i; o++)
                    for (var n in (t = arguments[o]))
                      Object.prototype.hasOwnProperty.call(t, n) &&
                        (e[n] = t[n]);
                  return e;
                }),
              r.apply(this, arguments)
            );
          },
        a =
          (this && this.__awaiter) ||
          function (e, t, o, i) {
            return new (o || (o = Promise))(function (n, r) {
              function a(e) {
                try {
                  l(i.next(e));
                } catch (e) {
                  r(e);
                }
              }
              function s(e) {
                try {
                  l(i.throw(e));
                } catch (e) {
                  r(e);
                }
              }
              function l(e) {
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
              l((i = i.apply(e, t || [])).next());
            });
          },
        s =
          (this && this.__generator) ||
          function (e, t) {
            var o,
              i,
              n,
              r,
              a = {
                label: 0,
                sent: function () {
                  if (1 & n[0]) throw n[1];
                  return n[1];
                },
                trys: [],
                ops: [],
              };
            return (
              (r = { next: s(0), throw: s(1), return: s(2) }),
              "function" == typeof Symbol &&
                (r[Symbol.iterator] = function () {
                  return this;
                }),
              r
            );
            function s(r) {
              return function (s) {
                return (function (r) {
                  if (o) throw new TypeError("Generator is already executing.");
                  for (; a; )
                    try {
                      if (
                        ((o = 1),
                        i &&
                          (n =
                            2 & r[0]
                              ? i.return
                              : r[0]
                              ? i.throw || ((n = i.return) && n.call(i), 0)
                              : i.next) &&
                          !(n = n.call(i, r[1])).done)
                      )
                        return n;
                      switch (((i = 0), n && (r = [2 & r[0], n.value]), r[0])) {
                        case 0:
                        case 1:
                          n = r;
                          break;
                        case 4:
                          return a.label++, { value: r[1], done: !1 };
                        case 5:
                          a.label++, (i = r[1]), (r = [0]);
                          continue;
                        case 7:
                          (r = a.ops.pop()), a.trys.pop();
                          continue;
                        default:
                          if (
                            !((n = a.trys),
                            (n = n.length > 0 && n[n.length - 1]) ||
                              (6 !== r[0] && 2 !== r[0]))
                          ) {
                            a = 0;
                            continue;
                          }
                          if (
                            3 === r[0] &&
                            (!n || (r[1] > n[0] && r[1] < n[3]))
                          ) {
                            a.label = r[1];
                            break;
                          }
                          if (6 === r[0] && a.label < n[1]) {
                            (a.label = n[1]), (n = r);
                            break;
                          }
                          if (n && a.label < n[2]) {
                            (a.label = n[2]), a.ops.push(r);
                            break;
                          }
                          n[2] && a.ops.pop(), a.trys.pop();
                          continue;
                      }
                      r = t.call(e, a);
                    } catch (e) {
                      (r = [6, e]), (i = 0);
                    } finally {
                      o = n = 0;
                    }
                  if (5 & r[0]) throw r[1];
                  return { value: r[0] ? r[1] : void 0, done: !0 };
                })([r, s]);
              };
            }
          },
        l =
          (this && this.__spreadArray) ||
          function (e, t) {
            for (var o = 0, i = t.length, n = e.length; o < i; o++, n++)
              e[n] = t[o];
            return e;
          };
      t.__esModule = !0;
      var c = o(89526),
        u = o(73961),
        d = o(29196),
        p = o(28838),
        h = o(3073),
        m = o(16894),
        f = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.state = {
                data: [],
                columns: t.props.columns,
                options: t.props.options,
              }),
              (t.ref = null),
              (t.htmlProps = null),
              (t.mainId =
                "tabulator-" +
                +new Date() +
                "-" +
                Math.floor(9999999 * Math.random())),
              (t.table = null),
              (t.pickValidHTMLProps = function () {
                t.htmlProps ||
                  ((t.htmlProps = d.pickHTMLProps(t.props)),
                  delete t.htmlProps.data,
                  delete t.htmlProps.columns);
              }),
              t
            );
          }
          return (
            n(t, e),
            (t.prototype.initTabulator = function () {
              var e;
              return a(this, void 0, void 0, function () {
                var t, o, i, n, a, l, c;
                return s(this, function (s) {
                  switch (s.label) {
                    case 0:
                      return (
                        (t = u.findDOMNode(this.ref)),
                        (o = this),
                        (i = this.props),
                        (n = i.columns),
                        (a = i.data),
                        (l = i.options),
                        [4, p.propsToOptions(this.props)]
                      );
                    case 1:
                      return (
                        (c = s.sent()),
                        new m.default(
                          t,
                          r(
                            r(
                              r(r({ columns: n }, c), {
                                layout:
                                  null !== (e = this.props.layout) &&
                                  void 0 !== e
                                    ? e
                                    : "fitColumns",
                                tableBuilding: function () {
                                  (o.table = this),
                                    o.props.tableBuilding &&
                                      o.props.tableBuilding();
                                },
                                dataLoaded: function () {
                                  o.props.dataLoaded && o.props.dataLoaded();
                                },
                                invalidOptionWarnings: !1,
                              }),
                              l,
                            ),
                            { data: a },
                          ),
                        ),
                        a && a.length > 0 && this.setState({ data: a }),
                        [2]
                      );
                  }
                });
              });
            }),
            (t.prototype.componentDidMount = function () {
              return a(this, void 0, void 0, function () {
                return s(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return [4, this.initTabulator()];
                    case 1:
                      return e.sent(), [2];
                  }
                });
              });
            }),
            (t.prototype.componentWillUnmount = function () {
              this.table && this.table.destroy();
            }),
            (t.getDerivedStateFromProps = function (e, t) {
              var o = !e.data || 0 === e.data.length;
              return (!t && o) ||
                (t &&
                  t.data.length &&
                  0 === t.data.length &&
                  e &&
                  e.data &&
                  0 === e.data.length)
                ? null
                : !t ||
                  !(e.data || e.columns | e.options) ||
                  (h.isSameArray(t.data, e.data) &&
                    h.isSameArray(t.columns, e.columns) &&
                    h.isSameObject(t.options, e.options))
                ? {}
                : r(r({}, t), {
                    data: l([], e.data),
                    columns: l([], e.columns),
                    options: r({}, e.options),
                  });
            }),
            (t.prototype.componentDidUpdate = function (e, t) {
              h.isSameArray(t.data, this.state.data) ||
                (this.table && this.table.setData(this.state.data)),
                h.isSameArray(t.columns, this.state.columns) ||
                  (this.table && this.table.setColumns(this.state.columns)),
                h.isSameObject(t.options, this.state.options) ||
                  this.initTabulator();
            }),
            (t.prototype.render = function () {
              var e = this;
              this.pickValidHTMLProps();
              var t = this.props.className;
              return c.createElement(
                "div",
                r(
                  {
                    ref: function (t) {
                      return (e.ref = t);
                    },
                    "data-instance": this.mainId,
                  },
                  this.htmlProps,
                  { className: t },
                ),
              );
            }),
            t
          );
        })(c.Component);
      t.default = f;
    },
    72576: function (e, t, o) {
      "use strict";
      var i,
        n,
        r =
          (this && this.__extends) ||
          ((i = function (e, t) {
            return (
              (i =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                }),
              i(e, t)
            );
          }),
          function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Class extends value " +
                  String(t) +
                  " is not a constructor or null",
              );
            function o() {
              this.constructor = e;
            }
            i(e, t),
              (e.prototype =
                null === t
                  ? Object.create(t)
                  : ((o.prototype = t.prototype), new o()));
          });
      t.__esModule = !0;
      var a = o(89526),
        s = o(9667),
        l = o(25348),
        c = o(10150),
        u = o(73066);
      var d = [
          { title: "Name", field: "name", width: 150 },
          {
            title: "Age",
            field: "age",
            hozAlign: "left",
            formatter: "progress",
          },
          { title: "Favourite Color", field: "color" },
          { title: "Date Of Birth", field: "dob", sorter: "date" },
          {
            title: "Rating",
            field: "rating",
            hozAlign: "center",
            formatter: "star",
          },
          {
            title: "Passed?",
            field: "passed",
            hozAlign: "center",
            formatter: "tickCross",
          },
          {
            title: "Custom",
            field: "custom",
            hozAlign: "center",
            editor: "input",
            formatter: o(3073).reactFormatter(
              a.createElement(function (e) {
                var t = e.cell._cell.row.data,
                  o = e.cell._cell.value || "Edit | Show";
                return a.createElement(
                  "button",
                  {
                    onClick: function () {
                      return alert(t.name);
                    },
                  },
                  o,
                );
              }, null),
            ),
          },
        ],
        p = [
          {
            id: 1,
            name: "Oli Bob",
            age: "12",
            color: "red",
            dob: "01/01/1980",
            rating: 5,
            passed: !0,
            pets: ["cat", "dog"],
          },
          {
            id: 2,
            name: "Mary May",
            age: "1",
            color: "green",
            dob: "12/05/1989",
            rating: 4,
            passed: !0,
            pets: ["cat"],
          },
          {
            id: 3,
            name: "Christine Lobowski",
            age: "42",
            color: "green",
            dob: "10/05/1985",
            rating: 4,
            passed: !1,
          },
          {
            id: 4,
            name: "Brendon Philips",
            age: "125",
            color: "red",
            dob: "01/08/1980",
            rating: 4.5,
            passed: !0,
          },
          {
            id: 5,
            name: "Margret Marmajuke",
            age: "16",
            color: "yellow",
            dob: "07/01/1999",
            rating: 4,
            passed: !1,
          },
          {
            id: 6,
            name: "Van Ng",
            age: "37",
            color: "green",
            dob: "06/10/1982",
            rating: 4,
            passed: !0,
            pets: ["dog", "fish"],
          },
          {
            id: 7,
            name: "Duc Ng",
            age: "37",
            color: "yellow",
            dob: "10/10/1982",
            rating: 4,
            passed: !0,
            pets: ["dog"],
          },
        ],
        h =
          (((n = {})[""] = "&nbsp;"),
          (n.red = "red"),
          (n.green = "green"),
          (n.yellow = "yellow"),
          n),
        m = [
          {
            title: "Name",
            field: "name",
            width: 150,
            editor: "input",
            headerFilter: "input",
          },
          {
            title: "Age",
            field: "age",
            hozAlign: "left",
            formatter: "progress",
            editor: "progress",
          },
          {
            title: "Favourite Color",
            field: "color",
            editor: "select",
            editorParams: { allowEmpty: !0, showListOnEmpty: !0, values: h },
            headerFilter: "select",
            headerFilterParams: { values: h },
          },
          {
            title: "Date Of Birth",
            field: "dob",
            editor: l.default,
            editorParams: { format: "MM/DD/YYYY" },
          },
          {
            title: "Pets",
            field: "pets",
            sorter: function (e, t) {
              return e.toString().localeCompare(t.toString());
            },
            editor: c.default,
            editorParams: {
              values: [
                { id: "cat", name: "cat" },
                { id: "dog", name: "dog" },
                { id: "fish", name: "fish" },
              ],
            },
            formatter: u.default,
            formatterParams: { style: "PILL" },
          },
          {
            title: "Passed?",
            field: "passed",
            hozAlign: "center",
            formatter: "tickCross",
            editor: !0,
          },
        ],
        f = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.state = { data: [], selectedName: "" }),
              (t.ref = null),
              (t.rowClick = function (e, o) {
                console.log("ref table: ", t.ref.table),
                  console.log("rowClick id: ${row.getData().id}", o, e),
                  t.setState({ selectedName: o.getData().name });
              }),
              (t.setData = function () {
                t.setState({ data: p });
              }),
              (t.clearData = function () {
                t.setState({ data: [] });
              }),
              (t.renderAjaxScrollExample = function () {
                var e = {
                  height: 150,
                  movableRows: !0,
                  ajaxProgressiveLoad: "scroll",
                  ajaxProgressiveLoadDelay: 200,
                  ajaxProgressiveLoadScrollMargin: 100,
                  ajaxURL: "https://reqres.in/api/users",
                  paginationDataSent: { page: "page", size: "per_page" },
                  paginationDataReceived: { last_page: "total_pages" },
                  current_page: 1,
                  paginationSize: 3,
                  ajaxResponse: function (e, t, o) {
                    return console.log("ajaxResponse", e), o;
                  },
                  ajaxError: function (e) {
                    console.log("ajaxError", e);
                  },
                };
                return a.createElement(s.default, {
                  ref: function (e) {
                    return (t.ref = e);
                  },
                  columns: [
                    { title: "First Name", field: "first_name", width: 150 },
                    { title: "Last Name", field: "last_name", width: 150 },
                    { title: "Email", field: "email", width: 150 },
                  ],
                  data: [],
                  options: e,
                });
              }),
              t
            );
          }
          return (
            r(t, e),
            (t.prototype.render = function () {
              var e = this;
              return a.createElement(
                "div",
                null,
                a.createElement(s.default, {
                  ref: function (t) {
                    return (e.ref = t);
                  },
                  columns: d,
                  data: p,
                  rowClick: this.rowClick,
                  options: { height: 150, movableRows: !0 },
                  "data-custom-attr": "test-custom-attribute",
                  className: "custom-css-class",
                }),
                a.createElement(
                  "i",
                  null,
                  "Selected Name: ",
                  a.createElement("strong", null, this.state.selectedName),
                ),
                a.createElement(
                  "h3",
                  null,
                  "Asynchronous data: (e.g. fetch) - ",
                  a.createElement(
                    "button",
                    { onClick: this.setData },
                    "Set Data",
                  ),
                  " ",
                  a.createElement(
                    "button",
                    { onClick: this.clearData },
                    "Clear",
                  ),
                ),
                a.createElement(s.default, {
                  columns: d,
                  data: this.state.data,
                }),
                a.createElement("h3", null, "Editable Table"),
                a.createElement(s.default, {
                  columns: m,
                  data: p,
                  cellEdited: function (e) {
                    return console.log("cellEdited", e);
                  },
                  dataChanged: function (e) {
                    return console.log("dataChanged", e);
                  },
                  footerElement: a.createElement("span", null, "Footer"),
                  options: { movableColumns: !0, movableRows: !0 },
                }),
                a.createElement(
                  "h3",
                  null,
                  "Infinite Scrolling with Ajax Requests",
                ),
                this.renderAjaxScrollExample(),
                a.createElement(
                  "p",
                  null,
                  a.createElement(
                    "a",
                    {
                      href: "https://github.com/ngduc/react-tabulator",
                      target: "_blank",
                    },
                    "Back to: Github Repo: react-tabulator",
                  ),
                ),
                a.createElement(
                  "p",
                  null,
                  a.createElement(
                    "a",
                    {
                      href: "http://tabulator.info/examples/4.0",
                      target: "_blank",
                    },
                    "More Tabulator's Examples",
                  ),
                ),
              );
            }),
            t
          );
        })(a.Component);
      t.default = f;
    },
    3073: (e, t, o) => {
      "use strict";
      (t.__esModule = !0),
        (t.reactFormatter = t.isSameObject = t.isSameArray = t.clone = void 0);
      var i = o(89526),
        n = o(73961);
      function r(e) {
        var t = 0;
        return function (o, i) {
          return 0 !== t &&
            "object" == typeof e &&
            "object" == typeof i &&
            e == i
            ? "[Circular]"
            : t >= 29
            ? "[Unknown]"
            : (++t, i);
        };
      }
      (t.clone = function (e) {
        return JSON.parse(JSON.stringify(e));
      }),
        (t.isSameArray = function (e, t) {
          var o = e && e.length ? e.length : 0;
          if (o !== (t && t.length ? t.length : 0)) return !1;
          for (; o--; ) if (e[o] !== t[o]) return !1;
          return !0;
        }),
        (t.isSameObject = function (e, t) {
          return JSON.stringify(e, r(e)) === JSON.stringify(t, r(t));
        }),
        (t.reactFormatter = function (e) {
          return function (t, o, r) {
            var a = function () {
              var o = t.getElement();
              if (o && o.querySelector(".formatterCell")) {
                var r = i.cloneElement(e, { cell: t });
                n.render(r, o.querySelector(".formatterCell"));
              }
            };
            return (
              r(a),
              setTimeout(function () {
                a();
              }, 0),
              '<div class="formatterCell"></div>'
            );
          };
        });
    },
    25348: function (e, t, o) {
      "use strict";
      var i,
        n =
          (this && this.__extends) ||
          ((i = function (e, t) {
            return (
              (i =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                }),
              i(e, t)
            );
          }),
          function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Class extends value " +
                  String(t) +
                  " is not a constructor or null",
              );
            function o() {
              this.constructor = e;
            }
            i(e, t),
              (e.prototype =
                null === t
                  ? Object.create(t)
                  : ((o.prototype = t.prototype), new o()));
          });
      t.__esModule = !0;
      var r = o(89526),
        a = o(73961),
        s = o(1857),
        l = "YYYY-MM-DD",
        c = {
          width: "100%",
          height: "100%",
          fontSize: "1em",
          fontFamily: "inherit",
        },
        u = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.state = { value: "" }),
              (t.ref = null),
              (t.format = t.props.editorParams.format || "MM/DD/YYYY"),
              (t.setValueOnSuccess = function (e) {
                void 0 === e && (e = t.state.value);
                var o = t.props.success;
                if (e) {
                  var i = e;
                  try {
                    if (i.indexOf("-") > 0) {
                      var n = s.parse(e, "YYYY-MM-DD");
                      i = s.format(n, t.format);
                    }
                  } catch (e) {
                    console.error("ERROR", e), (i = s.format(new Date(), l));
                  }
                  o(i);
                } else o("");
              }),
              (t.onChange = function (e) {
                var o = e.target.value;
                t.setState({ value: o });
              }),
              (t.onKeyPress = function (e) {
                var o = t.props.cancel;
                if (13 === e.keyCode) {
                  var i = s.format(new Date(), l),
                    n = t.state.value || i;
                  t.setValueOnSuccess(n);
                } else 27 === e.keyCode && o();
              }),
              (t.onBlur = function () {
                t.setValueOnSuccess();
              }),
              t
            );
          }
          return (
            n(t, e),
            (t.prototype.componentDidMount = function () {
              var e = this;
              this.props.onRendered(function () {
                var t = e.props.cell.getValue();
                e.setState({ value: t }), e.ref.focus();
              });
            }),
            (t.prototype.render = function () {
              var e = this,
                t = this.props.cell,
                o = s.parse(t.getValue(), this.format),
                i = s.format(new Date(), l);
              try {
                i = s.format(o, l);
              } catch (e) {}
              return r.createElement("input", {
                type: "date",
                ref: function (t) {
                  return (e.ref = t);
                },
                defaultValue: i,
                onBlur: this.onBlur,
                onChange: this.onChange,
                onKeyUp: this.onKeyPress,
                style: c,
              });
            }),
            t
          );
        })(r.Component);
      t.default = function (e, t, o, i, n) {
        var s = document.createElement("div");
        return (
          (s.style.height = "100%"),
          a.render(
            r.createElement(u, {
              cell: e,
              onRendered: t,
              success: o,
              cancel: i,
              editorParams: n,
            }),
            s,
          ),
          s
        );
      };
    },
    1857: (e, t) => {
      "use strict";
      (t.__esModule = !0),
        (t.setGlobalDateMasks =
          t.setGlobalDateI18n =
          t.defaultI18n =
          t.parse =
          t.format =
          t.assign =
            void 0);
      var o =
          /d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|Z|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,
        i = "[1-9]\\d?",
        n = "\\d\\d",
        r = "[^\\s]+",
        a = /\[([^]*?)\]/gm;
      function s(e, t) {
        for (var o = [], i = 0, n = e.length; i < n; i++)
          o.push(e[i].substr(0, t));
        return o;
      }
      var l = function (e) {
        return function (t, o) {
          var i = o[e].map(function (e) {
              return e.toLowerCase();
            }),
            n = i.indexOf(t.toLowerCase());
          return n > -1 ? n : null;
        };
      };
      function c(e) {
        for (var t = [], o = 1; o < arguments.length; o++)
          t[o - 1] = arguments[o];
        for (var i = 0, n = t; i < n.length; i++) {
          var r = n[i];
          for (var a in r) e[a] = r[a];
        }
        return e;
      }
      t.assign = c;
      var u = [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        d = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        p = s(d, 3),
        h = {
          dayNamesShort: s(u, 3),
          dayNames: u,
          monthNamesShort: p,
          monthNames: d,
          amPm: ["am", "pm"],
          DoFn: function (e) {
            return (
              e +
              ["th", "st", "nd", "rd"][
                e % 10 > 3 ? 0 : ((e - (e % 10) != 10 ? 1 : 0) * e) % 10
              ]
            );
          },
        };
      t.defaultI18n = h;
      var m = c({}, h),
        f = function (e) {
          return (m = c(m, e));
        };
      t.setGlobalDateI18n = f;
      var g = function (e) {
          return e.replace(/[|\\{()[^$+*?.-]/g, "\\$&");
        },
        b = function (e, t) {
          for (void 0 === t && (t = 2), e = String(e); e.length < t; )
            e = "0" + e;
          return e;
        },
        v = {
          D: function (e) {
            return String(e.getDate());
          },
          DD: function (e) {
            return b(e.getDate());
          },
          Do: function (e, t) {
            return t.DoFn(e.getDate());
          },
          d: function (e) {
            return String(e.getDay());
          },
          dd: function (e) {
            return b(e.getDay());
          },
          ddd: function (e, t) {
            return t.dayNamesShort[e.getDay()];
          },
          dddd: function (e, t) {
            return t.dayNames[e.getDay()];
          },
          M: function (e) {
            return String(e.getMonth() + 1);
          },
          MM: function (e) {
            return b(e.getMonth() + 1);
          },
          MMM: function (e, t) {
            return t.monthNamesShort[e.getMonth()];
          },
          MMMM: function (e, t) {
            return t.monthNames[e.getMonth()];
          },
          YY: function (e) {
            return b(String(e.getFullYear()), 4).substr(2);
          },
          YYYY: function (e) {
            return b(e.getFullYear(), 4);
          },
          h: function (e) {
            return String(e.getHours() % 12 || 12);
          },
          hh: function (e) {
            return b(e.getHours() % 12 || 12);
          },
          H: function (e) {
            return String(e.getHours());
          },
          HH: function (e) {
            return b(e.getHours());
          },
          m: function (e) {
            return String(e.getMinutes());
          },
          mm: function (e) {
            return b(e.getMinutes());
          },
          s: function (e) {
            return String(e.getSeconds());
          },
          ss: function (e) {
            return b(e.getSeconds());
          },
          S: function (e) {
            return String(Math.round(e.getMilliseconds() / 100));
          },
          SS: function (e) {
            return b(Math.round(e.getMilliseconds() / 10), 2);
          },
          SSS: function (e) {
            return b(e.getMilliseconds(), 3);
          },
          a: function (e, t) {
            return e.getHours() < 12 ? t.amPm[0] : t.amPm[1];
          },
          A: function (e, t) {
            return e.getHours() < 12
              ? t.amPm[0].toUpperCase()
              : t.amPm[1].toUpperCase();
          },
          ZZ: function (e) {
            var t = e.getTimezoneOffset();
            return (
              (t > 0 ? "-" : "+") +
              b(100 * Math.floor(Math.abs(t) / 60) + (Math.abs(t) % 60), 4)
            );
          },
          Z: function (e) {
            var t = e.getTimezoneOffset();
            return (
              (t > 0 ? "-" : "+") +
              b(Math.floor(Math.abs(t) / 60), 2) +
              ":" +
              b(Math.abs(t) % 60, 2)
            );
          },
        },
        y = function (e) {
          return +e - 1;
        },
        w = [null, i],
        E = [null, r],
        C = [
          "isPm",
          r,
          function (e, t) {
            var o = e.toLowerCase();
            return o === t.amPm[0] ? 0 : o === t.amPm[1] ? 1 : null;
          },
        ],
        R = [
          "timezoneOffset",
          "[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z?",
          function (e) {
            var t = (e + "").match(/([+-]|\d\d)/gi);
            if (t) {
              var o = 60 * +t[1] + parseInt(t[2], 10);
              return "+" === t[0] ? o : -o;
            }
            return 0;
          },
        ],
        x = {
          D: ["day", i],
          DD: ["day", n],
          Do: [
            "day",
            i + r,
            function (e) {
              return parseInt(e, 10);
            },
          ],
          M: ["month", i, y],
          MM: ["month", n, y],
          YY: [
            "year",
            n,
            function (e) {
              var t = +("" + new Date().getFullYear()).substr(0, 2);
              return +("" + (+e > 68 ? t - 1 : t) + e);
            },
          ],
          h: ["hour", i, void 0, "isPm"],
          hh: ["hour", n, void 0, "isPm"],
          H: ["hour", i],
          HH: ["hour", n],
          m: ["minute", i],
          mm: ["minute", n],
          s: ["second", i],
          ss: ["second", n],
          YYYY: ["year", "\\d{4}"],
          S: [
            "millisecond",
            "\\d",
            function (e) {
              return 100 * +e;
            },
          ],
          SS: [
            "millisecond",
            n,
            function (e) {
              return 10 * +e;
            },
          ],
          SSS: ["millisecond", "\\d{3}"],
          d: w,
          dd: w,
          ddd: E,
          dddd: E,
          MMM: ["month", r, l("monthNamesShort")],
          MMMM: ["month", r, l("monthNames")],
          a: C,
          A: C,
          ZZ: R,
          Z: R,
        },
        _ = {
          default: "ddd MMM DD YYYY HH:mm:ss",
          shortDate: "M/D/YY",
          mediumDate: "MMM D, YYYY",
          longDate: "MMMM D, YYYY",
          fullDate: "dddd, MMMM D, YYYY",
          isoDate: "YYYY-MM-DD",
          isoDateTime: "YYYY-MM-DDTHH:mm:ssZ",
          shortTime: "HH:mm",
          mediumTime: "HH:mm:ss",
          longTime: "HH:mm:ss.SSS",
        },
        M = function (e) {
          return c(_, e);
        };
      t.setGlobalDateMasks = M;
      var S = function (e, t, i) {
        if (
          (void 0 === t && (t = _.default),
          void 0 === i && (i = {}),
          "number" == typeof e && (e = new Date(e)),
          "[object Date]" !== Object.prototype.toString.call(e) ||
            isNaN(e.getTime()))
        )
          throw new Error("Invalid Date pass to format");
        var n = [];
        t = (t = _[t] || t).replace(a, function (e, t) {
          return n.push(t), "@@@";
        });
        var r = c(c({}, m), i);
        return (t = t.replace(o, function (t) {
          return v[t](e, r);
        })).replace(/@@@/g, function () {
          return n.shift();
        });
      };
      function T(e, t, i) {
        if ((void 0 === i && (i = {}), "string" != typeof t))
          throw new Error("Invalid format in fecha parse");
        if (((t = _[t] || t), e.length > 1e3)) return null;
        var n = {
            year: new Date().getFullYear(),
            month: 0,
            day: 1,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0,
            isPm: null,
            timezoneOffset: null,
          },
          r = [],
          s = [],
          l = t.replace(a, function (e, t) {
            return s.push(g(t)), "@@@";
          }),
          u = {},
          d = {};
        (l = g(l).replace(o, function (e) {
          var t = x[e],
            o = t[0],
            i = t[1],
            n = t[3];
          if (u[o])
            throw new Error(
              "Invalid format. " + o + " specified twice in format",
            );
          return (u[o] = !0), n && (d[n] = !0), r.push(t), "(" + i + ")";
        })),
          Object.keys(d).forEach(function (e) {
            if (!u[e])
              throw new Error(
                "Invalid format. " + e + " is required in specified format",
              );
          }),
          (l = l.replace(/@@@/g, function () {
            return s.shift();
          }));
        var p = e.match(new RegExp(l, "i"));
        if (!p) return null;
        for (var h = c(c({}, m), i), f = 1; f < p.length; f++) {
          var b = r[f - 1],
            v = b[0],
            y = b[2],
            w = y ? y(p[f], h) : +p[f];
          if (null == w) return null;
          n[v] = w;
        }
        1 === n.isPm && null != n.hour && 12 != +n.hour
          ? (n.hour = +n.hour + 12)
          : 0 === n.isPm && 12 == +n.hour && (n.hour = 0);
        for (
          var E = new Date(
              n.year,
              n.month,
              n.day,
              n.hour,
              n.minute,
              n.second,
              n.millisecond,
            ),
            C = [
              ["month", "getMonth"],
              ["day", "getDate"],
              ["hour", "getHours"],
              ["minute", "getMinutes"],
              ["second", "getSeconds"],
            ],
            R = ((f = 0), C.length);
          f < R;
          f++
        )
          if (u[C[f][0]] && n[C[f][0]] !== E[C[f][1]]()) return null;
        return null == n.timezoneOffset
          ? E
          : new Date(
              Date.UTC(
                n.year,
                n.month,
                n.day,
                n.hour,
                n.minute - n.timezoneOffset,
                n.second,
                n.millisecond,
              ),
            );
      }
      (t.format = S),
        (t.parse = T),
        (t.default = {
          format: S,
          parse: T,
          defaultI18n: h,
          setGlobalDateI18n: f,
          setGlobalDateMasks: M,
        });
    },
    10150: function (e, t, o) {
      "use strict";
      var i,
        n =
          (this && this.__extends) ||
          ((i = function (e, t) {
            return (
              (i =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                }),
              i(e, t)
            );
          }),
          function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Class extends value " +
                  String(t) +
                  " is not a constructor or null",
              );
            function o() {
              this.constructor = e;
            }
            i(e, t),
              (e.prototype =
                null === t
                  ? Object.create(t)
                  : ((o.prototype = t.prototype), new o()));
          });
      t.__esModule = !0;
      var r = o(89526),
        a = o(73961),
        s = o(3073),
        l = o(79416),
        c = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.state = { value: "", values: [], autofocus: !1 }),
              (t.ref = null),
              (t.setValueOnSuccess = function (e) {
                void 0 === e && (e = t.state.values);
                var o = t.props,
                  i = o.success;
                o.cancel;
                i(e);
              }),
              (t.handleDelete = function (e) {
                var o = t.state.values.filter(function (t, o) {
                  return o !== e;
                });
                t.setState({ values: o }, function () {
                  t.setValueOnSuccess(o);
                });
              }),
              (t.handleAddition = function (e) {
                var o = t.state.values;
                e.name &&
                  (o.push({ id: e.name, name: e.name }),
                  t.setState({ values: o }, function () {
                    t.setValueOnSuccess(o);
                  }));
              }),
              (t.handleBlur = function () {
                var e = t.props.cancel,
                  o = t.ref.input.input.value;
                if (o) {
                  var i = s.clone(t.state.values);
                  i.push({ id: o, name: o }), t.setValueOnSuccess(i);
                } else e();
                var n = a.findDOMNode(t.ref);
                n &&
                  n.parentElement.parentElement.parentElement &&
                  (n.parentElement.parentElement.parentElement.style.overflow =
                    "hidden");
              }),
              t
            );
          }
          return (
            n(t, e),
            (t.prototype.componentDidMount = function () {
              var e = this;
              this.props.onRendered(function () {
                var t = a.findDOMNode(e.ref);
                (t.style.zIndex = 1),
                  (t.parentElement.parentElement.parentElement.style.overflow =
                    "inherit"),
                  t.querySelector("input").focus();
                var o = (e.props.cell.getValue() || []).map(function (e) {
                  return "string" == typeof e ? { id: e, name: e } : e;
                });
                e.setState({ values: o });
              });
            }),
            (t.prototype.render = function () {
              var e = this,
                t = this.props.editorParams,
                o = this.state.values,
                i = t.values;
              return r.createElement(
                "div",
                null,
                r.createElement(l, {
                  ref: function (t) {
                    return (e.ref = t);
                  },
                  placeholder: "Select or Type",
                  tags: o,
                  suggestions: i,
                  allowNew: !0,
                  autoresize: !0,
                  autofocus: this.state.autofocus,
                  handleAddition: this.handleAddition,
                  handleDelete: this.handleDelete,
                  handleBlur: this.handleBlur,
                  minQueryLength: 0,
                }),
              );
            }),
            t
          );
        })(r.Component);
      t.default = function (e, t, o, i, n) {
        var s = document.createElement("div");
        return (
          (s.style.height = "100%"),
          a.render(
            r.createElement(c, {
              cell: e,
              onRendered: t,
              success: o,
              cancel: i,
              editorParams: n,
            }),
            s,
          ),
          s
        );
      };
    },
    73066: (e, t, o) => {
      "use strict";
      t.__esModule = !0;
      var i = o(89526),
        n = o(73961);
      t.default = function (e, t, o) {
        var r = t.style || "",
          a = e.getValue() || [],
          s =
            a && a.length > 0 && "string" == typeof a[0]
              ? i.createElement("span", null, a.join(", "))
              : i.createElement("span", null);
        "PILL" === r &&
          (s = i.createElement(
            "div",
            null,
            a.map(function (e) {
              return "string" == typeof e
                ? i.createElement("span", { key: e }, e)
                : i.createElement("span", { key: e.name }, e.name);
            }),
          ));
        var l = (function () {
          var e = document.createElement("div");
          return (e.style.height = "100%"), e;
        })();
        return (
          (l.className = "multi-value-formatter-content"),
          (l.title =
            a && a.length > 0 && "string" == typeof a[0] ? a.join(", ") : ""),
          n.render(s, l),
          l
        );
      };
    },
    20614: function (e, t, o) {
      "use strict";
      var i =
        (this && this.__createBinding) ||
        (Object.create
          ? function (e, t, o, i) {
              void 0 === i && (i = o),
                Object.defineProperty(e, i, {
                  enumerable: !0,
                  get: function () {
                    return t[o];
                  },
                });
            }
          : function (e, t, o, i) {
              void 0 === i && (i = o), (e[i] = t[o]);
            });
      (t.__esModule = !0),
        (t.reactFormatter =
          t.ReactTabulatorExample =
          t.React15Tabulator =
          t.ReactTabulator =
            void 0),
        i(t, o(9667), "default", "ReactTabulator"),
        i(t, o(78848), "default", "React15Tabulator"),
        i(t, o(72576), "default", "ReactTabulatorExample"),
        i(t, o(3073), "reactFormatter");
    },
    79135: (e, t, o) => {
      "use strict";
      var i = o(89526),
        n = {
          position: "absolute",
          width: 0,
          height: 0,
          visibility: "hidden",
          overflow: "scroll",
          whiteSpace: "pre",
        },
        r = [
          "fontSize",
          "fontFamily",
          "fontWeight",
          "fontStyle",
          "letterSpacing",
          "textTransform",
        ],
        a = (function (e) {
          function t(t) {
            e.call(this, t), (this.state = { inputWidth: null });
          }
          return (
            e && (t.__proto__ = e),
            (t.prototype = Object.create(e && e.prototype)),
            (t.prototype.constructor = t),
            (t.prototype.componentDidMount = function () {
              this.props.autoresize &&
                (this.copyInputStyles(), this.updateInputWidth()),
                this.props.autofocus && this.input.focus();
            }),
            (t.prototype.componentDidUpdate = function (e) {
              var t = e.query,
                o = e.placeholder;
              (t === this.props.query && o === this.props.placeholder) ||
                this.updateInputWidth();
            }),
            (t.prototype.copyInputStyles = function () {
              var e = this,
                t = window.getComputedStyle(this.input);
              r.forEach(function (o) {
                e.sizer.style[o] = t[o];
              });
            }),
            (t.prototype.updateInputWidth = function () {
              var e;
              this.props.autoresize &&
                (e = Math.ceil(this.sizer.scrollWidth) + 2),
                e !== this.state.inputWidth && this.setState({ inputWidth: e });
            }),
            (t.prototype.render = function () {
              var e = this,
                t = this.props,
                o = t.inputAttributes,
                r = t.inputEventHandlers,
                a = t.query,
                s = t.placeholder,
                l = t.expandable,
                c = t.listboxId,
                u = t.selectedIndex,
                d = t.ariaLabel;
              return i.createElement(
                "div",
                { className: this.props.classNames.searchInput },
                i.createElement(
                  "input",
                  Object.assign({}, o, r, {
                    ref: function (t) {
                      e.input = t;
                    },
                    value: a,
                    placeholder: s,
                    role: "combobox",
                    "aria-autocomplete": "list",
                    "aria-label": d || s,
                    "aria-owns": c,
                    "aria-activedescendant": u > -1 ? c + "-" + u : null,
                    "aria-expanded": l,
                    style: { width: this.state.inputWidth },
                  }),
                ),
                i.createElement(
                  "div",
                  {
                    ref: function (t) {
                      e.sizer = t;
                    },
                    style: n,
                  },
                  a || s,
                ),
              );
            }),
            t
          );
        })(i.Component);
      e.exports = a;
    },
    79416: (e, t, o) => {
      "use strict";
      var i = o(89526),
        n = o(2652),
        r = o(83604),
        a = o(79135),
        s = o(78762),
        l = 13,
        c = 9,
        u = 8,
        d = 38,
        p = 40,
        h = {
          root: "react-tags",
          rootFocused: "is-focused",
          selected: "react-tags__selected",
          selectedTag: "react-tags__selected-tag",
          selectedTagName: "react-tags__selected-tag-name",
          search: "react-tags__search",
          searchInput: "react-tags__search-input",
          suggestions: "react-tags__suggestions",
          suggestionActive: "is-active",
          suggestionDisabled: "is-disabled",
        },
        m = (function (e) {
          function t(t) {
            e.call(this, t),
              (this.state = {
                query: "",
                focused: !1,
                expandable: !1,
                selectedIndex: -1,
                classNames: Object.assign({}, h, this.props.classNames),
              }),
              (this.inputEventHandlers = {
                onChange: function () {},
                onBlur: this.handleBlur.bind(this),
                onFocus: this.handleFocus.bind(this),
                onInput: this.handleInput.bind(this),
                onKeyDown: this.handleKeyDown.bind(this),
              }),
              (this.container = i.createRef());
          }
          return (
            e && (t.__proto__ = e),
            (t.prototype = Object.create(e && e.prototype)),
            (t.prototype.constructor = t),
            (t.prototype.componentWillReceiveProps = function (e) {
              this.setState({ classNames: Object.assign({}, h, e.classNames) });
            }),
            (t.prototype.handleInput = function (e) {
              var t = e.target.value;
              this.props.handleInputChange && this.props.handleInputChange(t),
                this.setState({ query: t });
            }),
            (t.prototype.handleKeyDown = function (e) {
              var t = this.state,
                o = t.query,
                i = t.selectedIndex,
                n = this.props,
                r = n.delimiters,
                a = n.delimiterChars;
              (r.indexOf(e.keyCode) > -1 || a.indexOf(e.key) > -1) &&
                ((o || i > -1) && e.preventDefault(), this.handleDelimiter()),
                e.keyCode === u &&
                  0 === o.length &&
                  this.props.allowBackspace &&
                  this.deleteTag(this.props.tags.length - 1),
                e.keyCode === d &&
                  (e.preventDefault(),
                  i <= 0
                    ? this.setState({
                        selectedIndex:
                          this.suggestions.state.options.length - 1,
                      })
                    : this.setState({ selectedIndex: i - 1 })),
                e.keyCode === p &&
                  (e.preventDefault(),
                  this.setState({
                    selectedIndex:
                      (i + 1) % this.suggestions.state.options.length,
                  }));
            }),
            (t.prototype.handleDelimiter = function () {
              var e = this.state,
                t = e.query,
                o = e.selectedIndex;
              if (t.length >= this.props.minQueryLength) {
                var i = this.suggestions.state.options.findIndex(function (e) {
                    return 0 === e.name.search(new RegExp("^" + t + "$", "i"));
                  }),
                  n = -1 === o ? i : o;
                n > -1 && this.suggestions.state.options[n]
                  ? this.addTag(this.suggestions.state.options[n])
                  : this.props.allowNew && this.addTag({ name: t });
              }
            }),
            (t.prototype.handleClick = function (e) {
              document.activeElement !== e.target && this.input.input.focus();
            }),
            (t.prototype.handleBlur = function () {
              this.setState({ focused: !1, selectedIndex: -1 }),
                this.props.handleBlur && this.props.handleBlur(),
                this.props.addOnBlur && this.handleDelimiter();
            }),
            (t.prototype.handleFocus = function () {
              this.setState({ focused: !0 }),
                this.props.handleFocus && this.props.handleFocus();
            }),
            (t.prototype.handleDeleteTag = function (e, t) {
              if (this.container.current) {
                var o =
                    this.container.current.querySelectorAll("a,button,input"),
                  i = Array.prototype.findIndex.call(o, function (e) {
                    return e === t.currentTarget;
                  }),
                  n = o[i - 1] || o[i + 1];
                n && n.focus();
              }
              this.deleteTag(e);
            }),
            (t.prototype.addTag = function (e) {
              e.disabled ||
                (("function" != typeof this.props.handleValidate ||
                  this.props.handleValidate(e)) &&
                  (this.props.handleAddition(e),
                  this.setState({ query: "", selectedIndex: -1 })));
            }),
            (t.prototype.deleteTag = function (e) {
              this.props.handleDelete(e),
                this.props.clearInputOnDelete &&
                  "" !== this.state.query &&
                  this.setState({ query: "" });
            }),
            (t.prototype.render = function () {
              var e = this,
                t = "ReactTags-listbox",
                o = this.props.tagComponent || r,
                n = this.props.tags.map(function (t, n) {
                  return i.createElement(o, {
                    key: n,
                    tag: t,
                    classNames: e.state.classNames,
                    onDelete: e.handleDeleteTag.bind(e, n),
                  });
                }),
                l =
                  this.state.focused &&
                  this.state.query.length >= this.props.minQueryLength,
                c = [this.state.classNames.root];
              return (
                this.state.focused && c.push(this.state.classNames.rootFocused),
                i.createElement(
                  "div",
                  {
                    ref: this.container,
                    className: c.join(" "),
                    onClick: this.handleClick.bind(this),
                  },
                  i.createElement(
                    "div",
                    {
                      className: this.state.classNames.selected,
                      "aria-live": "polite",
                      "aria-relevant": "additions removals",
                    },
                    n,
                  ),
                  i.createElement(
                    "div",
                    { className: this.state.classNames.search },
                    i.createElement(
                      a,
                      Object.assign({}, this.state, {
                        inputAttributes: this.props.inputAttributes,
                        inputEventHandlers: this.inputEventHandlers,
                        ref: function (t) {
                          e.input = t;
                        },
                        listboxId: t,
                        autofocus: this.props.autofocus,
                        autoresize: this.props.autoresize,
                        expandable: l,
                        placeholder: this.props.placeholder,
                        ariaLabel: this.props.ariaLabel,
                      }),
                    ),
                    i.createElement(
                      s,
                      Object.assign({}, this.state, {
                        ref: function (t) {
                          e.suggestions = t;
                        },
                        listboxId: t,
                        expandable: l,
                        noSuggestionsText: this.props.noSuggestionsText,
                        suggestions: this.props.suggestions,
                        suggestionsFilter: this.props.suggestionsFilter,
                        addTag: this.addTag.bind(this),
                        maxSuggestionsLength: this.props.maxSuggestionsLength,
                      }),
                    ),
                  ),
                )
              );
            }),
            t
          );
        })(i.Component);
      (m.defaultProps = {
        tags: [],
        placeholder: "Add new tag",
        noSuggestionsText: null,
        suggestions: [],
        suggestionsFilter: null,
        autofocus: !0,
        autoresize: !0,
        delimiters: [c, l],
        delimiterChars: [],
        minQueryLength: 2,
        maxSuggestionsLength: 6,
        allowNew: !1,
        allowBackspace: !0,
        tagComponent: null,
        inputAttributes: {},
        addOnBlur: !1,
        clearInputOnDelete: !0,
      }),
        (m.propTypes = {
          tags: n.arrayOf(n.object),
          placeholder: n.string,
          ariaLabel: n.string,
          noSuggestionsText: n.string,
          suggestions: n.arrayOf(n.object),
          suggestionsFilter: n.func,
          autofocus: n.bool,
          autoresize: n.bool,
          delimiters: n.arrayOf(n.number),
          delimiterChars: n.arrayOf(n.string),
          handleDelete: n.func.isRequired,
          handleAddition: n.func.isRequired,
          handleInputChange: n.func,
          handleFocus: n.func,
          handleBlur: n.func,
          handleValidate: n.func,
          minQueryLength: n.number,
          maxSuggestionsLength: n.number,
          classNames: n.object,
          allowNew: n.bool,
          allowBackspace: n.bool,
          tagComponent: n.oneOfType([n.func, n.element]),
          inputAttributes: n.object,
          addOnBlur: n.bool,
          clearInputOnDelete: n.bool,
        }),
        (e.exports = m);
    },
    78762: (e, t, o) => {
      "use strict";
      var i = o(89526);
      function n(e) {
        return e.replace(/[-\\^$*+?.()|[\]{}]/g, "\\$&");
      }
      function r(e, t) {
        if (t) {
          var o = RegExp(n(t), "gi");
          e = e.replace(o, "<mark>$&</mark>");
        }
        return { __html: e };
      }
      function a(e, t, o, i, r) {
        if (!i) {
          var a = new RegExp("(?:^|\\s)" + n(e), "i");
          i = function (e) {
            return a.test(e.name);
          };
        }
        var s = t
          .filter(function (t) {
            return i(t, e);
          })
          .slice(0, o);
        return (
          0 === s.length &&
            r &&
            s.push({ id: 0, name: r, disabled: !0, disableMarkIt: !0 }),
          s
        );
      }
      var s = (function (e) {
        function t(t) {
          e.call(this, t),
            (this.state = {
              options: a(
                this.props.query,
                this.props.suggestions,
                this.props.maxSuggestionsLength,
                this.props.suggestionsFilter,
                this.props.noSuggestionsText,
              ),
            });
        }
        return (
          e && (t.__proto__ = e),
          (t.prototype = Object.create(e && e.prototype)),
          (t.prototype.constructor = t),
          (t.prototype.componentWillReceiveProps = function (e) {
            this.setState({
              options: a(
                e.query,
                e.suggestions,
                e.maxSuggestionsLength,
                e.suggestionsFilter,
                e.noSuggestionsText,
              ),
            });
          }),
          (t.prototype.handleMouseDown = function (e, t) {
            t.preventDefault(), this.props.addTag(e);
          }),
          (t.prototype.render = function () {
            var e = this;
            if (!this.props.expandable || !this.state.options.length)
              return null;
            var t = this.state.options.map(function (t, o) {
              var n = e.props.listboxId + "-" + o,
                a = [];
              return (
                e.props.selectedIndex === o &&
                  a.push(e.props.classNames.suggestionActive),
                t.disabled && a.push(e.props.classNames.suggestionDisabled),
                i.createElement(
                  "li",
                  {
                    id: n,
                    key: n,
                    role: "option",
                    className: a.join(" "),
                    "aria-disabled": !0 === t.disabled,
                    onMouseDown: e.handleMouseDown.bind(e, t),
                  },
                  t.disableMarkIt
                    ? t.name
                    : i.createElement("span", {
                        dangerouslySetInnerHTML: r(
                          t.name,
                          e.props.query,
                          t.markInput,
                        ),
                      }),
                )
              );
            });
            return i.createElement(
              "div",
              { className: this.props.classNames.suggestions },
              i.createElement(
                "ul",
                { role: "listbox", id: this.props.listboxId },
                t,
              ),
            );
          }),
          t
        );
      })(i.Component);
      e.exports = s;
    },
    83604: (e, t, o) => {
      "use strict";
      var i = o(89526);
      e.exports = function (e) {
        return i.createElement(
          "button",
          {
            type: "button",
            className: e.classNames.selectedTag,
            title: "Click to remove tag",
            onClick: e.onDelete,
          },
          i.createElement(
            "span",
            { className: e.classNames.selectedTagName },
            e.tag.name,
          ),
        );
      };
    },
    16894: (t, o, n) => {
      "use strict";
      n.r(o), n.d(o, { default: () => oe });
      var r =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            };
      Array.prototype.findIndex ||
        Object.defineProperty(Array.prototype, "findIndex", {
          value: function (e) {
            if (null == this)
              throw new TypeError('"this" is null or not defined');
            var t = Object(this),
              o = t.length >>> 0;
            if ("function" != typeof e)
              throw new TypeError("predicate must be a function");
            for (var i = arguments[1], n = 0; n < o; ) {
              var r = t[n];
              if (e.call(i, r, n, t)) return n;
              n++;
            }
            return -1;
          },
        }),
        Array.prototype.find ||
          Object.defineProperty(Array.prototype, "find", {
            value: function (e) {
              if (null == this)
                throw new TypeError('"this" is null or not defined');
              var t = Object(this),
                o = t.length >>> 0;
              if ("function" != typeof e)
                throw new TypeError("predicate must be a function");
              for (var i = arguments[1], n = 0; n < o; ) {
                var r = t[n];
                if (e.call(i, r, n, t)) return r;
                n++;
              }
            },
          }),
        String.prototype.includes ||
          (String.prototype.includes = function (e, t) {
            if (e instanceof RegExp)
              throw TypeError("first argument must not be a RegExp");
            return void 0 === t && (t = 0), -1 !== this.indexOf(e, t);
          }),
        Array.prototype.includes ||
          Object.defineProperty(Array.prototype, "includes", {
            value: function (e, t) {
              if (null == this)
                throw new TypeError('"this" is null or not defined');
              var o = Object(this),
                i = o.length >>> 0;
              if (0 === i) return !1;
              var n,
                r,
                a = 0 | t,
                s = Math.max(a >= 0 ? a : i - Math.abs(a), 0);
              for (; s < i; ) {
                if (
                  (n = o[s]) === (r = e) ||
                  ("number" == typeof n &&
                    "number" == typeof r &&
                    isNaN(n) &&
                    isNaN(r))
                )
                  return !0;
                s++;
              }
              return !1;
            },
          }),
        "function" != typeof Object.assign &&
          Object.defineProperty(Object, "assign", {
            value: function (e, t) {
              if (null == e)
                throw new TypeError(
                  "Cannot convert undefined or null to object",
                );
              for (var o = Object(e), i = 1; i < arguments.length; i++) {
                var n = arguments[i];
                if (null != n)
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (o[r] = n[r]);
              }
              return o;
            },
            writable: !0,
            configurable: !0,
          });
      var a = function (e) {
        (this.table = e),
          (this.blockHozScrollEvent = !1),
          (this.headersElement = this.createHeadersElement()),
          (this.element = this.createHeaderElement()),
          (this.rowManager = null),
          (this.columns = []),
          (this.columnsByIndex = []),
          (this.columnsByField = {}),
          (this.scrollLeft = 0),
          this.element.insertBefore(
            this.headersElement,
            this.element.firstChild,
          );
      };
      (a.prototype.createHeadersElement = function () {
        var e = document.createElement("div");
        return e.classList.add("tabulator-headers"), e;
      }),
        (a.prototype.createHeaderElement = function () {
          var e = document.createElement("div");
          return (
            e.classList.add("tabulator-header"),
            this.table.options.headerVisible ||
              e.classList.add("tabulator-header-hidden"),
            e
          );
        }),
        (a.prototype.initialize = function () {}),
        (a.prototype.setRowManager = function (e) {
          this.rowManager = e;
        }),
        (a.prototype.getElement = function () {
          return this.element;
        }),
        (a.prototype.getHeadersElement = function () {
          return this.headersElement;
        }),
        (a.prototype.scrollHorizontal = function (e) {
          var t = 0,
            o = this.element.scrollWidth - this.table.element.clientWidth;
          (this.element.scrollLeft = e),
            e > o
              ? ((t = e - o), (this.element.style.marginLeft = -t + "px"))
              : (this.element.style.marginLeft = 0),
            (this.scrollLeft = e),
            this.table.modExists("frozenColumns") &&
              this.table.modules.frozenColumns.scrollHorizontal();
        }),
        (a.prototype.generateColumnsFromRowData = function (e) {
          var t,
            o,
            i = [],
            n = this.table.options.autoColumnsDefinitions;
          if (e && e.length) {
            for (var a in (t = e[0])) {
              var s = { field: a, title: a },
                l = t[a];
              switch (void 0 === l ? "undefined" : r(l)) {
                case "undefined":
                  o = "string";
                  break;
                case "boolean":
                  o = "boolean";
                  break;
                case "object":
                  o = Array.isArray(l) ? "array" : "string";
                  break;
                default:
                  o =
                    isNaN(l) || "" === l
                      ? l.match(/((^[0-9]+[a-z]+)|(^[a-z]+[0-9]+))+$/i)
                        ? "alphanum"
                        : "string"
                      : "number";
              }
              (s.sorter = o), i.push(s);
            }
            if (n)
              switch (void 0 === n ? "undefined" : r(n)) {
                case "function":
                  this.table.options.columns = n.call(this.table, i);
                  break;
                case "object":
                  Array.isArray(n)
                    ? i.forEach(function (e) {
                        var t = n.find(function (t) {
                          return t.field === e.field;
                        });
                        t && Object.assign(e, t);
                      })
                    : i.forEach(function (e) {
                        n[e.field] && Object.assign(e, n[e.field]);
                      }),
                    (this.table.options.columns = i);
              }
            else this.table.options.columns = i;
            this.setColumns(this.table.options.columns);
          }
        }),
        (a.prototype.setColumns = function (e, t) {
          for (var o = this; o.headersElement.firstChild; )
            o.headersElement.removeChild(o.headersElement.firstChild);
          (o.columns = []),
            (o.columnsByIndex = []),
            (o.columnsByField = {}),
            o.table.modExists("frozenColumns") &&
              o.table.modules.frozenColumns.reset(),
            e.forEach(function (e, t) {
              o._addColumn(e);
            }),
            o._reIndexColumns(),
            o.table.options.responsiveLayout &&
              o.table.modExists("responsiveLayout", !0) &&
              o.table.modules.responsiveLayout.initialize(),
            this.table.options.virtualDomHoz &&
              this.table.vdomHoz.reinitialize(!1, !0),
            o.redraw(!0);
        }),
        (a.prototype._addColumn = function (e, t, o) {
          var i = new l(e, this),
            n = i.getElement(),
            r = o ? this.findColumnIndex(o) : o;
          if (o && r > -1) {
            var a = this.columns.indexOf(o.getTopColumn()),
              s = o.getElement();
            t
              ? (this.columns.splice(a, 0, i), s.parentNode.insertBefore(n, s))
              : (this.columns.splice(a + 1, 0, i),
                s.parentNode.insertBefore(n, s.nextSibling));
          } else
            t
              ? (this.columns.unshift(i),
                this.headersElement.insertBefore(
                  i.getElement(),
                  this.headersElement.firstChild,
                ))
              : (this.columns.push(i),
                this.headersElement.appendChild(i.getElement())),
              i.columnRendered();
          return i;
        }),
        (a.prototype.registerColumnField = function (e) {
          e.definition.field && (this.columnsByField[e.definition.field] = e);
        }),
        (a.prototype.registerColumnPosition = function (e) {
          this.columnsByIndex.push(e);
        }),
        (a.prototype._reIndexColumns = function () {
          (this.columnsByIndex = []),
            this.columns.forEach(function (e) {
              e.reRegisterPosition();
            });
        }),
        (a.prototype._verticalAlignHeaders = function () {
          var e = this,
            t = 0;
          e.columns.forEach(function (e) {
            var o;
            e.clearVerticalAlign(), (o = e.getHeight()) > t && (t = o);
          }),
            e.columns.forEach(function (o) {
              o.verticalAlign(e.table.options.columnHeaderVertAlign, t);
            }),
            e.rowManager.adjustTableSize();
        }),
        (a.prototype.findColumn = function (e) {
          return "object" != (void 0 === e ? "undefined" : r(e))
            ? this.columnsByField[e] || !1
            : e instanceof l
            ? e
            : e instanceof s
            ? e._getSelf() || !1
            : ("undefined" != typeof HTMLElement &&
                e instanceof HTMLElement &&
                this.columns.find(function (t) {
                  return t.element === e;
                })) ||
              !1;
        }),
        (a.prototype.getColumnByField = function (e) {
          return this.columnsByField[e];
        }),
        (a.prototype.getColumnsByFieldRoot = function (e) {
          var t = this,
            o = [];
          return (
            Object.keys(this.columnsByField).forEach(function (i) {
              i.split(".")[0] === e && o.push(t.columnsByField[i]);
            }),
            o
          );
        }),
        (a.prototype.getColumnByIndex = function (e) {
          return this.columnsByIndex[e];
        }),
        (a.prototype.getFirstVisibileColumn = function (e) {
          return (
            (e = this.columnsByIndex.findIndex(function (e) {
              return e.visible;
            })) > -1 && this.columnsByIndex[e]
          );
        }),
        (a.prototype.getColumns = function () {
          return this.columns;
        }),
        (a.prototype.findColumnIndex = function (e) {
          return this.columnsByIndex.findIndex(function (t) {
            return e === t;
          });
        }),
        (a.prototype.getRealColumns = function () {
          return this.columnsByIndex;
        }),
        (a.prototype.traverse = function (e) {
          this.columnsByIndex.forEach(function (t, o) {
            e(t, o);
          });
        }),
        (a.prototype.getDefinitions = function (e) {
          var t = [];
          return (
            this.columnsByIndex.forEach(function (o) {
              (!e || (e && o.visible)) && t.push(o.getDefinition());
            }),
            t
          );
        }),
        (a.prototype.getDefinitionTree = function () {
          var e = [];
          return (
            this.columns.forEach(function (t) {
              e.push(t.getDefinition(!0));
            }),
            e
          );
        }),
        (a.prototype.getComponents = function (e) {
          var t = [];
          return (
            (e ? this.columns : this.columnsByIndex).forEach(function (e) {
              t.push(e.getComponent());
            }),
            t
          );
        }),
        (a.prototype.getWidth = function () {
          var e = 0;
          return (
            this.columnsByIndex.forEach(function (t) {
              t.visible && (e += t.getWidth());
            }),
            e
          );
        }),
        (a.prototype.moveColumn = function (e, t, o) {
          this.moveColumnActual(e, t, o),
            this.table.options.responsiveLayout &&
              this.table.modExists("responsiveLayout", !0) &&
              this.table.modules.responsiveLayout.initialize(),
            this.table.modExists("columnCalcs") &&
              this.table.modules.columnCalcs.recalc(
                this.table.rowManager.activeRows,
              ),
            t.element.parentNode.insertBefore(e.element, t.element),
            o && t.element.parentNode.insertBefore(t.element, e.element),
            this._verticalAlignHeaders(),
            this.table.rowManager.reinitialize();
        }),
        (a.prototype.moveColumnActual = function (e, t, o) {
          e.parent.isGroup
            ? this._moveColumnInArray(e.parent.columns, e, t, o)
            : this._moveColumnInArray(this.columns, e, t, o),
            this._moveColumnInArray(this.columnsByIndex, e, t, o, !0),
            this.table.options.responsiveLayout &&
              this.table.modExists("responsiveLayout", !0) &&
              this.table.modules.responsiveLayout.initialize(),
            this.table.options.virtualDomHoz &&
              this.table.vdomHoz.reinitialize(!0),
            this.table.options.columnMoved &&
              this.table.options.columnMoved.call(
                this.table,
                e.getComponent(),
                this.table.columnManager.getComponents(),
              ),
            this.table.options.persistence &&
              this.table.modExists("persistence", !0) &&
              this.table.modules.persistence.config.columns &&
              this.table.modules.persistence.save("columns");
        }),
        (a.prototype._moveColumnInArray = function (e, t, o, i, n) {
          var r,
            a = this,
            s = e.indexOf(t),
            l = [];
          s > -1 &&
            (e.splice(s, 1),
            (r = e.indexOf(o)) > -1 ? i && (r += 1) : (r = s),
            e.splice(r, 0, t),
            n &&
              (this.table.options.dataTree &&
                this.table.modExists("dataTree", !0) &&
                this.table.rowManager.rows.forEach(function (e) {
                  l = l.concat(
                    a.table.modules.dataTree.getTreeChildren(e, !1, !0),
                  );
                }),
              (l = l.concat(this.table.rowManager.rows)).forEach(function (e) {
                if (e.cells.length) {
                  var t = e.cells.splice(s, 1)[0];
                  e.cells.splice(r, 0, t);
                }
              })));
        }),
        (a.prototype.scrollToColumn = function (e, t, o) {
          var i = this,
            n = 0,
            r = 0,
            a = 0,
            s = e.getElement();
          return new Promise(function (l, c) {
            if (
              (void 0 === t && (t = i.table.options.scrollToColumnPosition),
              void 0 === o && (o = i.table.options.scrollToColumnIfVisible),
              e.visible)
            ) {
              switch (t) {
                case "middle":
                case "center":
                  a = -i.element.clientWidth / 2;
                  break;
                case "right":
                  a = s.clientWidth - i.headersElement.clientWidth;
              }
              if (
                !o &&
                (r = s.offsetLeft) > 0 &&
                r + s.offsetWidth < i.element.clientWidth
              )
                return !1;
              (n = s.offsetLeft + a),
                (n = Math.max(
                  Math.min(
                    n,
                    i.table.rowManager.element.scrollWidth -
                      i.table.rowManager.element.clientWidth,
                  ),
                  0,
                )),
                i.table.rowManager.scrollHorizontal(n),
                i.scrollHorizontal(n),
                l();
            } else
              console.warn("Scroll Error - Column not visible"),
                c("Scroll Error - Column not visible");
          });
        }),
        (a.prototype.generateCells = function (e) {
          var t = [];
          return (
            this.columnsByIndex.forEach(function (o) {
              t.push(o.generateCell(e));
            }),
            t
          );
        }),
        (a.prototype.getFlexBaseWidth = function () {
          var e = this,
            t = e.table.element.clientWidth,
            o = 0;
          return (
            e.rowManager.element.scrollHeight >
              e.rowManager.element.clientHeight &&
              (t -=
                e.rowManager.element.offsetWidth -
                e.rowManager.element.clientWidth),
            this.columnsByIndex.forEach(function (i) {
              var n, r, a;
              i.visible &&
                ((n = i.definition.width || 0),
                (r =
                  void 0 === i.minWidth
                    ? e.table.options.columnMinWidth
                    : parseInt(i.minWidth)),
                (a =
                  "string" == typeof n
                    ? n.indexOf("%") > -1
                      ? (t / 100) * parseInt(n)
                      : parseInt(n)
                    : n),
                (o += a > r ? a : r));
            }),
            o
          );
        }),
        (a.prototype.addColumn = function (e, t, o) {
          var i = this;
          return new Promise(function (n, r) {
            var a = i._addColumn(e, t, o);
            i._reIndexColumns(),
              i.table.options.responsiveLayout &&
                i.table.modExists("responsiveLayout", !0) &&
                i.table.modules.responsiveLayout.initialize(),
              i.table.modExists("columnCalcs") &&
                i.table.modules.columnCalcs.recalc(
                  i.table.rowManager.activeRows,
                ),
              i.redraw(!0),
              "fitColumns" != i.table.modules.layout.getMode() &&
                a.reinitializeWidth(),
              i._verticalAlignHeaders(),
              i.table.rowManager.reinitialize(),
              i.table.options.virtualDomHoz && i.table.vdomHoz.reinitialize(),
              n(a);
          });
        }),
        (a.prototype.deregisterColumn = function (e) {
          var t,
            o = e.getField();
          o && delete this.columnsByField[o],
            (t = this.columnsByIndex.indexOf(e)) > -1 &&
              this.columnsByIndex.splice(t, 1),
            (t = this.columns.indexOf(e)) > -1 && this.columns.splice(t, 1),
            this.table.options.responsiveLayout &&
              this.table.modExists("responsiveLayout", !0) &&
              this.table.modules.responsiveLayout.initialize(),
            this._verticalAlignHeaders(),
            this.redraw();
        }),
        (a.prototype.redraw = function (e) {
          e &&
            (g.prototype.helpers.elVisible(this.element) &&
              this._verticalAlignHeaders(),
            this.table.rowManager.resetScroll(),
            this.table.rowManager.reinitialize()),
            ["fitColumns", "fitDataStretch"].indexOf(
              this.table.modules.layout.getMode(),
            ) > -1 || e
              ? this.table.modules.layout.layout()
              : this.table.options.responsiveLayout &&
                this.table.modExists("responsiveLayout", !0) &&
                this.table.modules.responsiveLayout.update(),
            this.table.modExists("frozenColumns") &&
              this.table.modules.frozenColumns.layout(),
            this.table.modExists("columnCalcs") &&
              this.table.modules.columnCalcs.recalc(
                this.table.rowManager.activeRows,
              ),
            e &&
              (this.table.options.persistence &&
                this.table.modExists("persistence", !0) &&
                this.table.modules.persistence.config.columns &&
                this.table.modules.persistence.save("columns"),
              this.table.modExists("columnCalcs") &&
                this.table.modules.columnCalcs.redraw()),
            this.table.footerManager.redraw();
        });
      var s = function (e) {
        (this._column = e), (this.type = "ColumnComponent");
      };
      (s.prototype.getElement = function () {
        return this._column.getElement();
      }),
        (s.prototype.getDefinition = function () {
          return this._column.getDefinition();
        }),
        (s.prototype.getField = function () {
          return this._column.getField();
        }),
        (s.prototype.getCells = function () {
          var e = [];
          return (
            this._column.cells.forEach(function (t) {
              e.push(t.getComponent());
            }),
            e
          );
        }),
        (s.prototype.getVisibility = function () {
          return (
            console.warn(
              "getVisibility function is deprecated, you should now use the isVisible function",
            ),
            this._column.visible
          );
        }),
        (s.prototype.isVisible = function () {
          return this._column.visible;
        }),
        (s.prototype.show = function () {
          this._column.isGroup
            ? this._column.columns.forEach(function (e) {
                e.show();
              })
            : this._column.show();
        }),
        (s.prototype.hide = function () {
          this._column.isGroup
            ? this._column.columns.forEach(function (e) {
                e.hide();
              })
            : this._column.hide();
        }),
        (s.prototype.toggle = function () {
          this._column.visible ? this.hide() : this.show();
        }),
        (s.prototype.delete = function () {
          return this._column.delete();
        }),
        (s.prototype.getSubColumns = function () {
          var e = [];
          return (
            this._column.columns.length &&
              this._column.columns.forEach(function (t) {
                e.push(t.getComponent());
              }),
            e
          );
        }),
        (s.prototype.getParentColumn = function () {
          return (
            this._column.parent instanceof l &&
            this._column.parent.getComponent()
          );
        }),
        (s.prototype._getSelf = function () {
          return this._column;
        }),
        (s.prototype.scrollTo = function () {
          return this._column.table.columnManager.scrollToColumn(this._column);
        }),
        (s.prototype.getTable = function () {
          return this._column.table;
        }),
        (s.prototype.headerFilterFocus = function () {
          this._column.table.modExists("filter", !0) &&
            this._column.table.modules.filter.setHeaderFilterFocus(
              this._column,
            );
        }),
        (s.prototype.reloadHeaderFilter = function () {
          this._column.table.modExists("filter", !0) &&
            this._column.table.modules.filter.reloadHeaderFilter(this._column);
        }),
        (s.prototype.getHeaderFilterValue = function () {
          if (this._column.table.modExists("filter", !0))
            return this._column.table.modules.filter.getHeaderFilterValue(
              this._column,
            );
        }),
        (s.prototype.setHeaderFilterValue = function (e) {
          this._column.table.modExists("filter", !0) &&
            this._column.table.modules.filter.setHeaderFilterValue(
              this._column,
              e,
            );
        }),
        (s.prototype.move = function (e, t) {
          var o = this._column.table.columnManager.findColumn(e);
          o
            ? this._column.table.columnManager.moveColumn(this._column, o, t)
            : console.warn("Move Error - No matching column found:", o);
        }),
        (s.prototype.getNextColumn = function () {
          var e = this._column.nextColumn();
          return !!e && e.getComponent();
        }),
        (s.prototype.getPrevColumn = function () {
          var e = this._column.prevColumn();
          return !!e && e.getComponent();
        }),
        (s.prototype.updateDefinition = function (e) {
          return this._column.updateDefinition(e);
        }),
        (s.prototype.getWidth = function () {
          return this._column.getWidth();
        }),
        (s.prototype.setWidth = function (e) {
          var t;
          return (
            (t =
              !0 === e
                ? this._column.reinitializeWidth(!0)
                : this._column.setWidth(e)),
            this._column.table.options.virtualDomHoz &&
              this._column.table.vdomHoz.reinitialize(!0),
            t
          );
        }),
        (s.prototype.validate = function () {
          return this._column.validate();
        });
      var l = function e(t, o) {
        var i = this;
        (this.table = o.table),
          (this.definition = t),
          (this.parent = o),
          (this.type = "column"),
          (this.columns = []),
          (this.cells = []),
          (this.element = this.createElement()),
          (this.contentElement = !1),
          (this.titleHolderElement = !1),
          (this.titleElement = !1),
          (this.groupElement = this.createGroupElement()),
          (this.isGroup = !1),
          (this.tooltip = !1),
          (this.hozAlign = ""),
          (this.vertAlign = ""),
          (this.field = ""),
          (this.fieldStructure = ""),
          (this.getFieldValue = ""),
          (this.setFieldValue = ""),
          (this.titleFormatterRendered = !1),
          this.setField(this.definition.field),
          this.table.options.invalidOptionWarnings && this.checkDefinition(),
          (this.modules = {}),
          (this.cellEvents = {
            cellClick: !1,
            cellDblClick: !1,
            cellContext: !1,
            cellTap: !1,
            cellDblTap: !1,
            cellTapHold: !1,
            cellMouseEnter: !1,
            cellMouseLeave: !1,
            cellMouseOver: !1,
            cellMouseOut: !1,
            cellMouseMove: !1,
          }),
          (this.width = null),
          (this.widthStyled = ""),
          (this.maxWidth = null),
          (this.maxWidthStyled = ""),
          (this.minWidth = null),
          (this.minWidthStyled = ""),
          (this.widthFixed = !1),
          (this.visible = !0),
          (this.component = null),
          this._mapDepricatedFunctionality(),
          t.columns
            ? ((this.isGroup = !0),
              t.columns.forEach(function (t, o) {
                var n = new e(t, i);
                i.attachColumn(n);
              }),
              i.checkColumnVisibility())
            : o.registerColumnField(this),
          t.rowHandle &&
            !1 !== this.table.options.movableRows &&
            this.table.modExists("moveRow") &&
            this.table.modules.moveRow.setHandle(!0),
          this._buildHeader(),
          this.bindModuleColumns();
      };
      (l.prototype.createElement = function () {
        var e = document.createElement("div");
        return (
          e.classList.add("tabulator-col"),
          e.setAttribute("role", "columnheader"),
          e.setAttribute("aria-sort", "none"),
          e
        );
      }),
        (l.prototype.createGroupElement = function () {
          var e = document.createElement("div");
          return e.classList.add("tabulator-col-group-cols"), e;
        }),
        (l.prototype.checkDefinition = function () {
          var e = this;
          Object.keys(this.definition).forEach(function (t) {
            -1 === e.defaultOptionList.indexOf(t) &&
              console.warn(
                "Invalid column definition option in '" +
                  (e.field || e.definition.title) +
                  "' column:",
                t,
              );
          });
        }),
        (l.prototype.setField = function (e) {
          (this.field = e),
            (this.fieldStructure = e
              ? this.table.options.nestedFieldSeparator
                ? e.split(this.table.options.nestedFieldSeparator)
                : [e]
              : []),
            (this.getFieldValue =
              this.fieldStructure.length > 1
                ? this._getNestedData
                : this._getFlatData),
            (this.setFieldValue =
              this.fieldStructure.length > 1
                ? this._setNestedData
                : this._setFlatData);
        }),
        (l.prototype.registerColumnPosition = function (e) {
          this.parent.registerColumnPosition(e);
        }),
        (l.prototype.registerColumnField = function (e) {
          this.parent.registerColumnField(e);
        }),
        (l.prototype.reRegisterPosition = function () {
          this.isGroup
            ? this.columns.forEach(function (e) {
                e.reRegisterPosition();
              })
            : this.registerColumnPosition(this);
        }),
        (l.prototype._mapDepricatedFunctionality = function () {
          void 0 !== this.definition.hideInHtml &&
            ((this.definition.htmlOutput = !this.definition.hideInHtml),
            console.warn(
              "hideInHtml column definition property is deprecated, you should now use htmlOutput",
            )),
            void 0 !== this.definition.align &&
              ((this.definition.hozAlign = this.definition.align),
              console.warn(
                "align column definition property is deprecated, you should now use hozAlign",
              )),
            void 0 !== this.definition.downloadTitle &&
              ((this.definition.titleDownload = this.definition.downloadTitle),
              console.warn(
                "downloadTitle definition property is deprecated, you should now use titleDownload",
              ));
        }),
        (l.prototype.setTooltip = function () {
          var e = this,
            t = e.definition,
            o =
              t.headerTooltip || !1 === t.tooltip
                ? t.headerTooltip
                : e.table.options.tooltipsHeader;
          o
            ? !0 === o
              ? t.field
                ? e.table.modules.localize.bind(
                    "columns|" + t.field,
                    function (o) {
                      e.element.setAttribute("title", o || t.title);
                    },
                  )
                : e.element.setAttribute("title", t.title)
              : ("function" == typeof o &&
                  !1 === (o = o(e.getComponent())) &&
                  (o = ""),
                e.element.setAttribute("title", o))
            : e.element.setAttribute("title", "");
        }),
        (l.prototype._buildHeader = function () {
          for (var e = this, t = e.definition; e.element.firstChild; )
            e.element.removeChild(e.element.firstChild);
          t.headerVertical &&
            (e.element.classList.add("tabulator-col-vertical"),
            "flip" === t.headerVertical &&
              e.element.classList.add("tabulator-col-vertical-flip")),
            (e.contentElement = e._bindEvents()),
            (e.contentElement = e._buildColumnHeaderContent()),
            e.element.appendChild(e.contentElement),
            e.isGroup ? e._buildGroupHeader() : e._buildColumnHeader(),
            e.setTooltip(),
            e.table.options.resizableColumns &&
              e.table.modExists("resizeColumns") &&
              e.table.modules.resizeColumns.initializeColumn(
                "header",
                e,
                e.element,
              ),
            t.headerFilter &&
              e.table.modExists("filter") &&
              e.table.modExists("edit") &&
              (void 0 !== t.headerFilterPlaceholder &&
                t.field &&
                e.table.modules.localize.setHeaderFilterColumnPlaceholder(
                  t.field,
                  t.headerFilterPlaceholder,
                ),
              e.table.modules.filter.initializeColumn(e)),
            e.table.modExists("frozenColumns") &&
              e.table.modules.frozenColumns.initializeColumn(e),
            e.table.options.movableColumns &&
              !e.isGroup &&
              e.table.modExists("moveColumn") &&
              e.table.modules.moveColumn.initializeColumn(e),
            (t.topCalc || t.bottomCalc) &&
              e.table.modExists("columnCalcs") &&
              e.table.modules.columnCalcs.initializeColumn(e),
            e.table.modExists("persistence") &&
              e.table.modules.persistence.config.columns &&
              e.table.modules.persistence.initializeColumn(e),
            e.element.addEventListener("mouseenter", function (t) {
              e.setTooltip();
            });
        }),
        (l.prototype._bindEvents = function () {
          var e,
            t,
            o,
            i = this,
            n = i.definition;
          "function" == typeof n.headerClick &&
            i.element.addEventListener("click", function (e) {
              n.headerClick(e, i.getComponent());
            }),
            "function" == typeof n.headerDblClick &&
              i.element.addEventListener("dblclick", function (e) {
                n.headerDblClick(e, i.getComponent());
              }),
            "function" == typeof n.headerContext &&
              i.element.addEventListener("contextmenu", function (e) {
                n.headerContext(e, i.getComponent());
              }),
            "function" == typeof n.headerTap &&
              ((o = !1),
              i.element.addEventListener(
                "touchstart",
                function (e) {
                  o = !0;
                },
                { passive: !0 },
              ),
              i.element.addEventListener("touchend", function (e) {
                o && n.headerTap(e, i.getComponent()), (o = !1);
              })),
            "function" == typeof n.headerDblTap &&
              ((e = null),
              i.element.addEventListener("touchend", function (t) {
                e
                  ? (clearTimeout(e),
                    (e = null),
                    n.headerDblTap(t, i.getComponent()))
                  : (e = setTimeout(function () {
                      clearTimeout(e), (e = null);
                    }, 300));
              })),
            "function" == typeof n.headerTapHold &&
              ((t = null),
              i.element.addEventListener(
                "touchstart",
                function (e) {
                  clearTimeout(t),
                    (t = setTimeout(function () {
                      clearTimeout(t),
                        (t = null),
                        (o = !1),
                        n.headerTapHold(e, i.getComponent());
                    }, 1e3));
                },
                { passive: !0 },
              ),
              i.element.addEventListener("touchend", function (e) {
                clearTimeout(t), (t = null);
              })),
            "function" == typeof n.cellClick &&
              (i.cellEvents.cellClick = n.cellClick),
            "function" == typeof n.cellDblClick &&
              (i.cellEvents.cellDblClick = n.cellDblClick),
            "function" == typeof n.cellContext &&
              (i.cellEvents.cellContext = n.cellContext),
            "function" == typeof n.cellMouseEnter &&
              (i.cellEvents.cellMouseEnter = n.cellMouseEnter),
            "function" == typeof n.cellMouseLeave &&
              (i.cellEvents.cellMouseLeave = n.cellMouseLeave),
            "function" == typeof n.cellMouseOver &&
              (i.cellEvents.cellMouseOver = n.cellMouseOver),
            "function" == typeof n.cellMouseOut &&
              (i.cellEvents.cellMouseOut = n.cellMouseOut),
            "function" == typeof n.cellMouseMove &&
              (i.cellEvents.cellMouseMove = n.cellMouseMove),
            "function" == typeof n.cellTap &&
              (i.cellEvents.cellTap = n.cellTap),
            "function" == typeof n.cellDblTap &&
              (i.cellEvents.cellDblTap = n.cellDblTap),
            "function" == typeof n.cellTapHold &&
              (i.cellEvents.cellTapHold = n.cellTapHold),
            "function" == typeof n.cellEdited &&
              (i.cellEvents.cellEdited = n.cellEdited),
            "function" == typeof n.cellEditing &&
              (i.cellEvents.cellEditing = n.cellEditing),
            "function" == typeof n.cellEditCancelled &&
              (i.cellEvents.cellEditCancelled = n.cellEditCancelled);
        }),
        (l.prototype._buildColumnHeader = function () {
          var e = this,
            t = this.definition,
            o = this.table;
          (o.modExists("sort") &&
            o.modules.sort.initializeColumn(this, this.titleHolderElement),
          (t.headerContextMenu || t.headerClickMenu || t.headerMenu) &&
            o.modExists("menu") &&
            o.modules.menu.initializeColumnHeader(this),
          o.modExists("format") && o.modules.format.initializeColumn(this),
          void 0 !== t.editor &&
            o.modExists("edit") &&
            o.modules.edit.initializeColumn(this),
          void 0 !== t.validator &&
            o.modExists("validate") &&
            o.modules.validate.initializeColumn(this),
          o.modExists("mutator") && o.modules.mutator.initializeColumn(this),
          o.modExists("accessor") && o.modules.accessor.initializeColumn(this),
          r(o.options.responsiveLayout) &&
            o.modExists("responsiveLayout") &&
            o.modules.responsiveLayout.initializeColumn(this),
          void 0 !== t.visible && (t.visible ? this.show(!0) : this.hide(!0)),
          t.cssClass) &&
            t.cssClass.split(" ").forEach(function (t) {
              e.element.classList.add(t);
            });
          t.field && this.element.setAttribute("tabulator-field", t.field),
            this.setMinWidth(
              void 0 === t.minWidth
                ? this.table.options.columnMinWidth
                : parseInt(t.minWidth),
            ),
            (t.maxWidth || this.table.options.columnMaxWidth) &&
              !1 !== t.maxWidth &&
              this.setMaxWidth(
                void 0 === t.maxWidth
                  ? this.table.options.columnMaxWidth
                  : parseInt(t.maxWidth),
              ),
            this.reinitializeWidth(),
            (this.tooltip =
              this.definition.tooltip || !1 === this.definition.tooltip
                ? this.definition.tooltip
                : this.table.options.tooltips),
            (this.hozAlign =
              void 0 === this.definition.hozAlign
                ? this.table.options.cellHozAlign
                : this.definition.hozAlign),
            (this.vertAlign =
              void 0 === this.definition.vertAlign
                ? this.table.options.cellVertAlign
                : this.definition.vertAlign),
            (this.titleElement.style.textAlign =
              this.definition.headerHozAlign ||
              this.table.options.headerHozAlign);
        }),
        (l.prototype._buildColumnHeaderContent = function () {
          this.definition, this.table;
          var e = document.createElement("div");
          return (
            e.classList.add("tabulator-col-content"),
            (this.titleHolderElement = document.createElement("div")),
            this.titleHolderElement.classList.add("tabulator-col-title-holder"),
            e.appendChild(this.titleHolderElement),
            (this.titleElement = this._buildColumnHeaderTitle()),
            this.titleHolderElement.appendChild(this.titleElement),
            e
          );
        }),
        (l.prototype._buildColumnHeaderTitle = function () {
          var e = this,
            t = e.definition,
            o = e.table,
            i = document.createElement("div");
          if ((i.classList.add("tabulator-col-title"), t.editableTitle)) {
            var n = document.createElement("input");
            n.classList.add("tabulator-title-editor"),
              n.addEventListener("click", function (e) {
                e.stopPropagation(), n.focus();
              }),
              n.addEventListener("change", function () {
                (t.title = n.value),
                  o.options.columnTitleChanged.call(e.table, e.getComponent());
              }),
              i.appendChild(n),
              t.field
                ? o.modules.localize.bind("columns|" + t.field, function (e) {
                    n.value = e || t.title || "&nbsp;";
                  })
                : (n.value = t.title || "&nbsp;");
          } else
            t.field
              ? o.modules.localize.bind("columns|" + t.field, function (o) {
                  e._formatColumnHeaderTitle(i, o || t.title || "&nbsp;");
                })
              : e._formatColumnHeaderTitle(i, t.title || "&nbsp;");
          return i;
        }),
        (l.prototype._formatColumnHeaderTitle = function (e, t) {
          var o,
            i,
            n,
            a,
            s,
            l = this;
          if (this.definition.titleFormatter && this.table.modExists("format"))
            switch (
              ((o = this.table.modules.format.getFormatter(
                this.definition.titleFormatter,
              )),
              (s = function (e) {
                l.titleFormatterRendered = e;
              }),
              (a = {
                getValue: function () {
                  return t;
                },
                getElement: function () {
                  return e;
                },
              }),
              (n =
                "function" ==
                typeof (n = this.definition.titleFormatterParams || {})
                  ? n()
                  : n),
              void 0 === (i = o.call(this.table.modules.format, a, n, s))
                ? "undefined"
                : r(i))
            ) {
              case "object":
                i instanceof Node
                  ? e.appendChild(i)
                  : ((e.innerHTML = ""),
                    console.warn(
                      "Format Error - Title formatter has returned a type of object, the only valid formatter object return is an instance of Node, the formatter returned:",
                      i,
                    ));
                break;
              case "undefined":
              case "null":
                e.innerHTML = "";
                break;
              default:
                e.innerHTML = i;
            }
          else e.innerHTML = t;
        }),
        (l.prototype._buildGroupHeader = function () {
          var e = this;
          (this.element.classList.add("tabulator-col-group"),
          this.element.setAttribute("role", "columngroup"),
          this.element.setAttribute("aria-title", this.definition.title),
          this.definition.cssClass) &&
            this.definition.cssClass.split(" ").forEach(function (t) {
              e.element.classList.add(t);
            });
          (this.definition.headerContextMenu || this.definition.headerMenu) &&
            this.table.modExists("menu") &&
            this.table.modules.menu.initializeColumnHeader(this),
            (this.titleElement.style.textAlign =
              this.definition.headerHozAlign ||
              this.table.options.headerHozAlign),
            this.element.appendChild(this.groupElement);
        }),
        (l.prototype._getFlatData = function (e) {
          return e[this.field];
        }),
        (l.prototype._getNestedData = function (e) {
          for (
            var t, o = e, i = this.fieldStructure, n = i.length, r = 0;
            r < n && ((t = o = o[i[r]]), o);
            r++
          );
          return t;
        }),
        (l.prototype._setFlatData = function (e, t) {
          this.field && (e[this.field] = t);
        }),
        (l.prototype._setNestedData = function (e, t) {
          for (
            var o = e, i = this.fieldStructure, n = i.length, r = 0;
            r < n;
            r++
          )
            if (r == n - 1) o[i[r]] = t;
            else {
              if (!o[i[r]]) {
                if (void 0 === t) break;
                o[i[r]] = {};
              }
              o = o[i[r]];
            }
        }),
        (l.prototype.attachColumn = function (e) {
          var t = this;
          t.groupElement
            ? (t.columns.push(e), t.groupElement.appendChild(e.getElement()))
            : console.warn(
                "Column Warning - Column being attached to another column instead of column group",
              );
        }),
        (l.prototype.verticalAlign = function (e, t) {
          var o = this.parent.isGroup
            ? this.parent.getGroupElement().clientHeight
            : t || this.parent.getHeadersElement().clientHeight;
          (this.element.style.height = o + "px"),
            this.isGroup &&
              (this.groupElement.style.minHeight =
                o - this.contentElement.offsetHeight + "px"),
            this.isGroup ||
              "top" === e ||
              (this.element.style.paddingTop =
                "bottom" === e
                  ? this.element.clientHeight -
                    this.contentElement.offsetHeight +
                    "px"
                  : (this.element.clientHeight -
                      this.contentElement.offsetHeight) /
                      2 +
                    "px"),
            this.columns.forEach(function (t) {
              t.verticalAlign(e);
            });
        }),
        (l.prototype.clearVerticalAlign = function () {
          (this.element.style.paddingTop = ""),
            (this.element.style.height = ""),
            (this.element.style.minHeight = ""),
            (this.groupElement.style.minHeight = ""),
            this.columns.forEach(function (e) {
              e.clearVerticalAlign();
            });
        }),
        (l.prototype.bindModuleColumns = function () {
          "rownum" == this.definition.formatter &&
            (this.table.rowManager.rowNumColumn = this);
        }),
        (l.prototype.getElement = function () {
          return this.element;
        }),
        (l.prototype.getGroupElement = function () {
          return this.groupElement;
        }),
        (l.prototype.getField = function () {
          return this.field;
        }),
        (l.prototype.getFirstColumn = function () {
          return this.isGroup
            ? !!this.columns.length && this.columns[0].getFirstColumn()
            : this;
        }),
        (l.prototype.getLastColumn = function () {
          return this.isGroup
            ? !!this.columns.length &&
                this.columns[this.columns.length - 1].getLastColumn()
            : this;
        }),
        (l.prototype.getColumns = function () {
          return this.columns;
        }),
        (l.prototype.getCells = function () {
          return this.cells;
        }),
        (l.prototype.getTopColumn = function () {
          return this.parent.isGroup ? this.parent.getTopColumn() : this;
        }),
        (l.prototype.getDefinition = function (e) {
          var t = [];
          return (
            this.isGroup &&
              e &&
              (this.columns.forEach(function (e) {
                t.push(e.getDefinition(!0));
              }),
              (this.definition.columns = t)),
            this.definition
          );
        }),
        (l.prototype.checkColumnVisibility = function () {
          var e = !1;
          this.columns.forEach(function (t) {
            t.visible && (e = !0);
          }),
            e
              ? (this.show(),
                this.parent.table.options.columnVisibilityChanged.call(
                  this.table,
                  this.getComponent(),
                  !1,
                ))
              : this.hide();
        }),
        (l.prototype.show = function (e, t) {
          this.visible ||
            ((this.visible = !0),
            (this.element.style.display = ""),
            this.parent.isGroup && this.parent.checkColumnVisibility(),
            this.cells.forEach(function (e) {
              e.show();
            }),
            this.isGroup || null !== this.width || this.reinitializeWidth(),
            this.table.columnManager._verticalAlignHeaders(),
            this.table.options.persistence &&
              this.table.modExists("persistence", !0) &&
              this.table.modules.persistence.config.columns &&
              this.table.modules.persistence.save("columns"),
            !t &&
              this.table.options.responsiveLayout &&
              this.table.modExists("responsiveLayout", !0) &&
              this.table.modules.responsiveLayout.updateColumnVisibility(
                this,
                this.visible,
              ),
            e ||
              this.table.options.columnVisibilityChanged.call(
                this.table,
                this.getComponent(),
                !0,
              ),
            this.parent.isGroup && this.parent.matchChildWidths(),
            !this.silent &&
              this.table.options.virtualDomHoz &&
              this.table.vdomHoz.reinitialize());
        }),
        (l.prototype.hide = function (e, t) {
          this.visible &&
            ((this.visible = !1),
            (this.element.style.display = "none"),
            this.table.columnManager._verticalAlignHeaders(),
            this.parent.isGroup && this.parent.checkColumnVisibility(),
            this.cells.forEach(function (e) {
              e.hide();
            }),
            this.table.options.persistence &&
              this.table.modExists("persistence", !0) &&
              this.table.modules.persistence.config.columns &&
              this.table.modules.persistence.save("columns"),
            !t &&
              this.table.options.responsiveLayout &&
              this.table.modExists("responsiveLayout", !0) &&
              this.table.modules.responsiveLayout.updateColumnVisibility(
                this,
                this.visible,
              ),
            e ||
              this.table.options.columnVisibilityChanged.call(
                this.table,
                this.getComponent(),
                !1,
              ),
            this.parent.isGroup && this.parent.matchChildWidths(),
            !this.silent &&
              this.table.options.virtualDomHoz &&
              this.table.vdomHoz.reinitialize());
        }),
        (l.prototype.matchChildWidths = function () {
          var e = 0;
          this.contentElement &&
            this.columns.length &&
            (this.columns.forEach(function (t) {
              t.visible && (e += t.getWidth());
            }),
            (this.contentElement.style.maxWidth = e - 1 + "px"),
            this.parent.isGroup && this.parent.matchChildWidths());
        }),
        (l.prototype.removeChild = function (e) {
          var t = this.columns.indexOf(e);
          t > -1 && this.columns.splice(t, 1),
            this.columns.length || this.delete();
        }),
        (l.prototype.setWidth = function (e) {
          (this.widthFixed = !0), this.setWidthActual(e);
        }),
        (l.prototype.setWidthActual = function (e) {
          isNaN(e) &&
            (e = Math.floor(
              (this.table.element.clientWidth / 100) * parseInt(e),
            )),
            (e = Math.max(this.minWidth, e)),
            this.maxWidth && (e = Math.min(this.maxWidth, e)),
            (this.width = e),
            (this.widthStyled = e ? e + "px" : ""),
            (this.element.style.width = this.widthStyled),
            this.isGroup ||
              this.cells.forEach(function (e) {
                e.setWidth();
              }),
            this.parent.isGroup && this.parent.matchChildWidths(),
            this.table.modExists("frozenColumns") &&
              this.table.modules.frozenColumns.layout();
        }),
        (l.prototype.checkCellHeights = function () {
          var e = [];
          this.cells.forEach(function (t) {
            t.row.heightInitialized &&
              (null !== t.row.getElement().offsetParent
                ? (e.push(t.row), t.row.clearCellHeight())
                : (t.row.heightInitialized = !1));
          }),
            e.forEach(function (e) {
              e.calcHeight();
            }),
            e.forEach(function (e) {
              e.setCellHeight();
            });
        }),
        (l.prototype.getWidth = function () {
          var e = 0;
          return (
            this.isGroup
              ? this.columns.forEach(function (t) {
                  t.visible && (e += t.getWidth());
                })
              : (e = this.width),
            e
          );
        }),
        (l.prototype.getHeight = function () {
          return this.element.offsetHeight;
        }),
        (l.prototype.setMinWidth = function (e) {
          (this.minWidth = e),
            (this.minWidthStyled = e ? e + "px" : ""),
            (this.element.style.minWidth = this.minWidthStyled),
            this.cells.forEach(function (e) {
              e.setMinWidth();
            });
        }),
        (l.prototype.setMaxWidth = function (e) {
          (this.maxWidth = e),
            (this.maxWidthStyled = e ? e + "px" : ""),
            (this.element.style.maxWidth = this.maxWidthStyled),
            this.cells.forEach(function (e) {
              e.setMaxWidth();
            });
        }),
        (l.prototype.delete = function () {
          var e = this;
          return new Promise(function (t, o) {
            e.isGroup &&
              e.columns.forEach(function (e) {
                e.delete();
              }),
              e.table.modExists("edit") &&
                e.table.modules.edit.currentCell.column === e &&
                e.table.modules.edit.cancelEdit();
            for (var i = e.cells.length, n = 0; n < i; n++) e.cells[0].delete();
            e.element.parentNode && e.element.parentNode.removeChild(e.element),
              (e.element = !1),
              (e.contentElement = !1),
              (e.titleElement = !1),
              (e.groupElement = !1),
              e.parent.isGroup && e.parent.removeChild(e),
              e.table.columnManager.deregisterColumn(e),
              e.table.options.virtualDomHoz && e.table.vdomHoz.reinitialize(!0),
              t();
          });
        }),
        (l.prototype.columnRendered = function () {
          this.titleFormatterRendered && this.titleFormatterRendered();
        }),
        (l.prototype.validate = function () {
          var e = [];
          return (
            this.cells.forEach(function (t) {
              t.validate() || e.push(t.getComponent());
            }),
            !e.length || e
          );
        }),
        (l.prototype.generateCell = function (e) {
          var t = new m(this, e);
          return this.cells.push(t), t;
        }),
        (l.prototype.nextColumn = function () {
          var e = this.table.columnManager.findColumnIndex(this);
          return e > -1 && this._nextVisibleColumn(e + 1);
        }),
        (l.prototype._nextVisibleColumn = function (e) {
          var t = this.table.columnManager.getColumnByIndex(e);
          return !t || t.visible ? t : this._nextVisibleColumn(e + 1);
        }),
        (l.prototype.prevColumn = function () {
          var e = this.table.columnManager.findColumnIndex(this);
          return e > -1 && this._prevVisibleColumn(e - 1);
        }),
        (l.prototype._prevVisibleColumn = function (e) {
          var t = this.table.columnManager.getColumnByIndex(e);
          return !t || t.visible ? t : this._prevVisibleColumn(e - 1);
        }),
        (l.prototype.reinitializeWidth = function (e) {
          (this.widthFixed = !1),
            void 0 === this.definition.width ||
              e ||
              this.setWidth(this.definition.width),
            this.table.modExists("filter") &&
              this.table.modules.filter.hideHeaderFilterElements(),
            this.fitToData(),
            this.table.modExists("filter") &&
              this.table.modules.filter.showHeaderFilterElements();
        }),
        (l.prototype.fitToData = function () {
          var e = this;
          this.widthFixed ||
            ((this.element.style.width = ""),
            e.cells.forEach(function (e) {
              e.clearWidth();
            }));
          var t = this.element.offsetWidth;
          (e.width && this.widthFixed) ||
            (e.cells.forEach(function (e) {
              var o = e.getWidth();
              o > t && (t = o);
            }),
            t && e.setWidthActual(t + 1));
        }),
        (l.prototype.updateDefinition = function (e) {
          var t = this;
          return new Promise(function (o, i) {
            var n;
            t.isGroup || t.parent.isGroup
              ? (console.warn(
                  "Column Update Error - The updateDefinition function is only available on ungrouped columns",
                ),
                i(
                  "Column Update Error - The updateDefinition function is only available on columns, not column groups",
                ))
              : ((n = Object.assign({}, t.getDefinition())),
                (n = Object.assign(n, e)),
                t.table.columnManager
                  .addColumn(n, !1, t)
                  .then(function (e) {
                    n.field == t.field && (t.field = !1),
                      t
                        .delete()
                        .then(function () {
                          o(e.getComponent());
                        })
                        .catch(function (e) {
                          i(e);
                        });
                  })
                  .catch(function (e) {
                    i(e);
                  }));
          });
        }),
        (l.prototype.deleteCell = function (e) {
          var t = this.cells.indexOf(e);
          t > -1 && this.cells.splice(t, 1);
        }),
        (l.prototype.defaultOptionList = [
          "title",
          "field",
          "columns",
          "visible",
          "align",
          "hozAlign",
          "vertAlign",
          "width",
          "minWidth",
          "maxWidth",
          "widthGrow",
          "widthShrink",
          "resizable",
          "frozen",
          "responsive",
          "tooltip",
          "cssClass",
          "rowHandle",
          "hideInHtml",
          "print",
          "htmlOutput",
          "sorter",
          "sorterParams",
          "formatter",
          "formatterParams",
          "variableHeight",
          "editable",
          "editor",
          "editorParams",
          "validator",
          "mutator",
          "mutatorParams",
          "mutatorData",
          "mutatorDataParams",
          "mutatorEdit",
          "mutatorEditParams",
          "mutatorClipboard",
          "mutatorClipboardParams",
          "accessor",
          "accessorParams",
          "accessorData",
          "accessorDataParams",
          "accessorDownload",
          "accessorDownloadParams",
          "accessorClipboard",
          "accessorClipboardParams",
          "accessorPrint",
          "accessorPrintParams",
          "accessorHtmlOutput",
          "accessorHtmlOutputParams",
          "clipboard",
          "download",
          "downloadTitle",
          "topCalc",
          "topCalcParams",
          "topCalcFormatter",
          "topCalcFormatterParams",
          "bottomCalc",
          "bottomCalcParams",
          "bottomCalcFormatter",
          "bottomCalcFormatterParams",
          "cellClick",
          "cellDblClick",
          "cellContext",
          "cellTap",
          "cellDblTap",
          "cellTapHold",
          "cellMouseEnter",
          "cellMouseLeave",
          "cellMouseOver",
          "cellMouseOut",
          "cellMouseMove",
          "cellEditing",
          "cellEdited",
          "cellEditCancelled",
          "headerSort",
          "headerSortStartingDir",
          "headerSortTristate",
          "headerClick",
          "headerDblClick",
          "headerContext",
          "headerTap",
          "headerDblTap",
          "headerTapHold",
          "headerTooltip",
          "headerVertical",
          "headerHozAlign",
          "editableTitle",
          "titleFormatter",
          "titleFormatterParams",
          "headerFilter",
          "headerFilterPlaceholder",
          "headerFilterParams",
          "headerFilterEmptyCheck",
          "headerFilterFunc",
          "headerFilterFuncParams",
          "headerFilterLiveFilter",
          "print",
          "headerContextMenu",
          "headerMenu",
          "contextMenu",
          "clickMenu",
          "formatterPrint",
          "formatterPrintParams",
          "formatterClipboard",
          "formatterClipboardParams",
          "formatterHtmlOutput",
          "formatterHtmlOutputParams",
          "titlePrint",
          "titleClipboard",
          "titleHtmlOutput",
          "titleDownload",
        ]),
        (l.prototype.getComponent = function () {
          return (
            this.component || (this.component = new s(this)), this.component
          );
        });
      var c = function (e) {
        (this.table = e),
          (this.element = this.createHolderElement()),
          (this.tableElement = this.createTableElement()),
          (this.heightFixer = this.createTableElement()),
          (this.columnManager = null),
          (this.height = 0),
          (this.firstRender = !1),
          (this.renderMode = "virtual"),
          (this.fixedHeight = !1),
          (this.rows = []),
          (this.activeRows = []),
          (this.activeRowsCount = 0),
          (this.displayRows = []),
          (this.displayRowsCount = 0),
          (this.scrollTop = 0),
          (this.scrollLeft = 0),
          (this.vDomRowHeight = 20),
          (this.vDomTop = 0),
          (this.vDomBottom = 0),
          (this.vDomScrollPosTop = 0),
          (this.vDomScrollPosBottom = 0),
          (this.vDomTopPad = 0),
          (this.vDomBottomPad = 0),
          (this.vDomMaxRenderChain = 90),
          (this.vDomWindowBuffer = 0),
          (this.vDomWindowMinTotalRows = 20),
          (this.vDomWindowMinMarginRows = 5),
          (this.vDomTopNewRows = []),
          (this.vDomBottomNewRows = []),
          (this.rowNumColumn = !1),
          (this.redrawBlock = !1),
          (this.redrawBlockRestoreConfig = !1),
          (this.redrawBlockRederInPosition = !1);
      };
      (c.prototype.createHolderElement = function () {
        var e = document.createElement("div");
        return (
          e.classList.add("tabulator-tableHolder"),
          e.setAttribute("tabindex", 0),
          e
        );
      }),
        (c.prototype.createTableElement = function () {
          var e = document.createElement("div");
          return e.classList.add("tabulator-table"), e;
        }),
        (c.prototype.getElement = function () {
          return this.element;
        }),
        (c.prototype.getTableElement = function () {
          return this.tableElement;
        }),
        (c.prototype.getRowPosition = function (e, t) {
          return t ? this.activeRows.indexOf(e) : this.rows.indexOf(e);
        }),
        (c.prototype.setColumnManager = function (e) {
          this.columnManager = e;
        }),
        (c.prototype.initialize = function () {
          var e = this;
          e.setRenderMode(),
            e.element.appendChild(e.tableElement),
            (e.firstRender = !0),
            e.element.addEventListener("scroll", function () {
              var t = e.element.scrollLeft;
              e.scrollLeft != t &&
                (e.columnManager.scrollHorizontal(t),
                e.table.options.groupBy &&
                  e.table.modules.groupRows.scrollHeaders(t),
                e.table.modExists("columnCalcs") &&
                  e.table.modules.columnCalcs.scrollHorizontal(t),
                e.table.options.scrollHorizontal(t)),
                (e.scrollLeft = t);
            }),
            "virtual" === this.renderMode &&
              e.element.addEventListener("scroll", function () {
                var t = e.element.scrollTop,
                  o = e.scrollTop > t;
                e.scrollTop != t
                  ? ((e.scrollTop = t),
                    e.scrollVertical(o),
                    "scroll" == e.table.options.ajaxProgressiveLoad &&
                      e.table.modules.ajax.nextPage(
                        e.element.scrollHeight - e.element.clientHeight - t,
                      ),
                    e.table.options.scrollVertical(t))
                  : (e.scrollTop = t);
              });
        }),
        (c.prototype.findRow = function (e) {
          var t = this;
          return "object" != (void 0 === e ? "undefined" : r(e))
            ? null != e &&
                (t.rows.find(function (o) {
                  return o.data[t.table.options.index] == e;
                }) ||
                  !1)
            : e instanceof p
            ? e
            : e instanceof d
            ? e._getSelf() || !1
            : ("undefined" != typeof HTMLElement &&
                e instanceof HTMLElement &&
                t.rows.find(function (t) {
                  return t.getElement() === e;
                })) ||
              !1;
        }),
        (c.prototype.getRowFromDataObject = function (e) {
          return (
            this.rows.find(function (t) {
              return t.data === e;
            }) || !1
          );
        }),
        (c.prototype.getRowFromPosition = function (e, t) {
          return t ? this.activeRows[e] : this.rows[e];
        }),
        (c.prototype.scrollToRow = function (e, t, o) {
          var i,
            n = this,
            r = this.getDisplayRows().indexOf(e),
            a = e.getElement(),
            s = 0;
          return new Promise(function (e, l) {
            if (r > -1) {
              if (
                (void 0 === t && (t = n.table.options.scrollToRowPosition),
                void 0 === o && (o = n.table.options.scrollToRowIfVisible),
                "nearest" === t)
              )
                switch (n.renderMode) {
                  case "classic":
                    (i = g.prototype.helpers.elOffset(a).top),
                      (t =
                        Math.abs(n.element.scrollTop - i) >
                        Math.abs(
                          n.element.scrollTop + n.element.clientHeight - i,
                        )
                          ? "bottom"
                          : "top");
                    break;
                  case "virtual":
                    t =
                      Math.abs(n.vDomTop - r) > Math.abs(n.vDomBottom - r)
                        ? "bottom"
                        : "top";
                }
              if (
                !o &&
                g.prototype.helpers.elVisible(a) &&
                (s =
                  g.prototype.helpers.elOffset(a).top -
                  g.prototype.helpers.elOffset(n.element).top) > 0 &&
                s < n.element.clientHeight - a.offsetHeight
              )
                return !1;
              switch (n.renderMode) {
                case "classic":
                  n.element.scrollTop =
                    g.prototype.helpers.elOffset(a).top -
                    g.prototype.helpers.elOffset(n.element).top +
                    n.element.scrollTop;
                  break;
                case "virtual":
                  n._virtualRenderFill(r, !0);
              }
              switch (t) {
                case "middle":
                case "center":
                  n.element.scrollHeight - n.element.scrollTop ==
                  n.element.clientHeight
                    ? (n.element.scrollTop =
                        n.element.scrollTop +
                        (a.offsetTop - n.element.scrollTop) -
                        (n.element.scrollHeight - a.offsetTop) / 2)
                    : (n.element.scrollTop =
                        n.element.scrollTop - n.element.clientHeight / 2);
                  break;
                case "bottom":
                  n.element.scrollHeight - n.element.scrollTop ==
                  n.element.clientHeight
                    ? (n.element.scrollTop =
                        n.element.scrollTop -
                        (n.element.scrollHeight - a.offsetTop) +
                        a.offsetHeight)
                    : (n.element.scrollTop =
                        n.element.scrollTop -
                        n.element.clientHeight +
                        a.offsetHeight);
              }
              e();
            } else
              console.warn("Scroll Error - Row not visible"),
                l("Scroll Error - Row not visible");
          });
        }),
        (c.prototype.setData = function (e, t, o) {
          var i = this,
            n = this;
          return new Promise(function (r, a) {
            t && i.getDisplayRows().length
              ? n.table.options.pagination
                ? n._setDataActual(e, !0)
                : i.reRenderInPosition(function () {
                    n._setDataActual(e);
                  })
              : (i.table.options.autoColumns &&
                  o &&
                  i.table.columnManager.generateColumnsFromRowData(e),
                i.resetScroll(),
                i._setDataActual(e)),
              r();
          });
        }),
        (c.prototype._setDataActual = function (e, t) {
          var o = this;
          o.table.options.dataLoading.call(this.table, e),
            this._wipeElements(),
            this.table.options.history &&
              this.table.modExists("history") &&
              this.table.modules.history.clear(),
            Array.isArray(e)
              ? (this.table.modExists("selectRow") &&
                  this.table.modules.selectRow.clearSelectionData(),
                this.table.options.reactiveData &&
                  this.table.modExists("reactiveData", !0) &&
                  this.table.modules.reactiveData.watchData(e),
                e.forEach(function (e, t) {
                  if (e && "object" === (void 0 === e ? "undefined" : r(e))) {
                    var i = new p(e, o);
                    o.rows.push(i);
                  } else
                    console.warn(
                      "Data Loading Warning - Invalid row data detected and ignored, expecting object but received:",
                      e,
                    );
                }),
                o.refreshActiveData(!1, !1, t),
                o.table.options.dataLoaded.call(this.table, e))
              : console.error(
                  "Data Loading Error - Unable to process data due to invalid data type \nExpecting: array \nReceived: ",
                  void 0 === e ? "undefined" : r(e),
                  "\nData:     ",
                  e,
                );
        }),
        (c.prototype._wipeElements = function () {
          this.rows.forEach(function (e) {
            e.wipe();
          }),
            this.table.options.groupBy &&
              this.table.modExists("groupRows") &&
              this.table.modules.groupRows.wipe(),
            (this.rows = []),
            (this.activeRows = []),
            (this.activeRowsCount = 0),
            (this.displayRows = []),
            (this.displayRowsCount = 0),
            this.adjustTableSize();
        }),
        (c.prototype.deleteRow = function (e, t) {
          var o = this.rows.indexOf(e),
            i = this.activeRows.indexOf(e);
          i > -1 && this.activeRows.splice(i, 1),
            o > -1 && this.rows.splice(o, 1),
            this.setActiveRows(this.activeRows),
            this.displayRowIterator(function (t) {
              var o = t.indexOf(e);
              o > -1 && t.splice(o, 1);
            }),
            t || this.reRenderInPosition(),
            this.regenerateRowNumbers(),
            this.table.options.rowDeleted.call(this.table, e.getComponent()),
            this.table.options.dataChanged &&
              this.table.options.dataChanged.call(this.table, this.getData()),
            this.table.options.groupBy && this.table.modExists("groupRows")
              ? this.table.modules.groupRows.updateGroupRows(!0)
              : this.table.options.pagination && this.table.modExists("page")
              ? this.refreshActiveData(!1, !1, !0)
              : this.table.options.pagination &&
                this.table.modExists("page") &&
                this.refreshActiveData("page");
        }),
        (c.prototype.addRow = function (e, t, o, i) {
          var n = this.addRowActual(e, t, o, i);
          return (
            this.table.options.history &&
              this.table.modExists("history") &&
              this.table.modules.history.action("rowAdd", n, {
                data: e,
                pos: t,
                index: o,
              }),
            n
          );
        }),
        (c.prototype.addRows = function (e, t, o) {
          var i = this,
            n = this,
            r = [];
          return new Promise(function (a, s) {
            (t = i.findAddRowPos(t)),
              Array.isArray(e) || (e = [e]),
              e.length - 1,
              ((void 0 === o && t) || (void 0 !== o && !t)) && e.reverse(),
              e.forEach(function (e, i) {
                var a = n.addRow(e, t, o, !0);
                r.push(a);
              }),
              i.table.options.groupBy && i.table.modExists("groupRows")
                ? i.table.modules.groupRows.updateGroupRows(!0)
                : i.table.options.pagination && i.table.modExists("page")
                ? i.refreshActiveData(!1, !1, !0)
                : i.reRenderInPosition(),
              i.table.modExists("columnCalcs") &&
                i.table.modules.columnCalcs.recalc(
                  i.table.rowManager.activeRows,
                ),
              i.regenerateRowNumbers(),
              a(r);
          });
        }),
        (c.prototype.findAddRowPos = function (e) {
          return (
            void 0 === e && (e = this.table.options.addRowPos),
            "pos" === e && (e = !0),
            "bottom" === e && (e = !1),
            e
          );
        }),
        (c.prototype.addRowActual = function (e, t, o, i) {
          var n,
            r,
            a = e instanceof p ? e : new p(e || {}, this),
            s = this.findAddRowPos(t),
            l = -1;
          if (
            (!o &&
              this.table.options.pagination &&
              "page" == this.table.options.paginationAddRow &&
              ((r = this.getDisplayRows()),
              s
                ? r.length
                  ? (o = r[0])
                  : this.activeRows.length &&
                    ((o = this.activeRows[this.activeRows.length - 1]),
                    (s = !1))
                : r.length &&
                  ((o = r[r.length - 1]),
                  (s = !(r.length < this.table.modules.page.getPageSize())))),
            void 0 !== o && (o = this.findRow(o)),
            this.table.options.groupBy && this.table.modExists("groupRows"))
          ) {
            this.table.modules.groupRows.assignRowToGroup(a);
            var c = a.getGroup().rows;
            c.length > 1 &&
              (!o || (o && -1 == c.indexOf(o))
                ? s
                  ? c[0] !== a &&
                    ((o = c[0]),
                    this._moveRowInArray(a.getGroup().rows, a, o, !s))
                  : c[c.length - 1] !== a &&
                    ((o = c[c.length - 1]),
                    this._moveRowInArray(a.getGroup().rows, a, o, !s))
                : this._moveRowInArray(a.getGroup().rows, a, o, !s));
          }
          return (
            o && (l = this.rows.indexOf(o)),
            o && l > -1
              ? ((n = this.activeRows.indexOf(o)),
                this.displayRowIterator(function (e) {
                  var t = e.indexOf(o);
                  t > -1 && e.splice(s ? t : t + 1, 0, a);
                }),
                n > -1 && this.activeRows.splice(s ? n : n + 1, 0, a),
                this.rows.splice(s ? l : l + 1, 0, a))
              : s
              ? (this.displayRowIterator(function (e) {
                  e.unshift(a);
                }),
                this.activeRows.unshift(a),
                this.rows.unshift(a))
              : (this.displayRowIterator(function (e) {
                  e.push(a);
                }),
                this.activeRows.push(a),
                this.rows.push(a)),
            this.setActiveRows(this.activeRows),
            this.table.options.rowAdded.call(this.table, a.getComponent()),
            this.table.options.dataChanged &&
              this.table.options.dataChanged.call(this.table, this.getData()),
            i || this.reRenderInPosition(),
            a
          );
        }),
        (c.prototype.moveRow = function (e, t, o) {
          this.table.options.history &&
            this.table.modExists("history") &&
            this.table.modules.history.action("rowMove", e, {
              posFrom: this.getRowPosition(e),
              posTo: this.getRowPosition(t),
              to: t,
              after: o,
            }),
            this.moveRowActual(e, t, o),
            this.regenerateRowNumbers(),
            this.table.options.rowMoved.call(this.table, e.getComponent());
        }),
        (c.prototype.moveRowActual = function (e, t, o) {
          var i = this;
          if (
            (this._moveRowInArray(this.rows, e, t, o),
            this._moveRowInArray(this.activeRows, e, t, o),
            this.displayRowIterator(function (n) {
              i._moveRowInArray(n, e, t, o);
            }),
            this.table.options.groupBy && this.table.modExists("groupRows"))
          ) {
            !o &&
              t instanceof B &&
              (t = this.table.rowManager.prevDisplayRow(e) || t);
            var n = t.getGroup(),
              r = e.getGroup();
            n === r
              ? this._moveRowInArray(n.rows, e, t, o)
              : (r && r.removeRow(e), n.insertRow(e, t, o));
          }
        }),
        (c.prototype._moveRowInArray = function (e, t, o, i) {
          var n, r, a;
          if (
            t !== o &&
            ((n = e.indexOf(t)) > -1 &&
              (e.splice(n, 1),
              (r = e.indexOf(o)) > -1
                ? i
                  ? e.splice(r + 1, 0, t)
                  : e.splice(r, 0, t)
                : e.splice(n, 0, t)),
            e === this.getDisplayRows())
          ) {
            a = r > n ? r : n + 1;
            for (var s = n < r ? n : r; s <= a; s++)
              e[s] && this.styleRow(e[s], s);
          }
        }),
        (c.prototype.clearData = function () {
          this.setData([]);
        }),
        (c.prototype.getRowIndex = function (e) {
          return this.findRowIndex(e, this.rows);
        }),
        (c.prototype.getDisplayRowIndex = function (e) {
          var t = this.getDisplayRows().indexOf(e);
          return t > -1 && t;
        }),
        (c.prototype.nextDisplayRow = function (e, t) {
          var o = this.getDisplayRowIndex(e),
            i = !1;
          return (
            !1 !== o &&
              o < this.displayRowsCount - 1 &&
              (i = this.getDisplayRows()[o + 1]),
            !i || (i instanceof p && "row" == i.type)
              ? i
              : this.nextDisplayRow(i, t)
          );
        }),
        (c.prototype.prevDisplayRow = function (e, t) {
          var o = this.getDisplayRowIndex(e),
            i = !1;
          return (
            o && (i = this.getDisplayRows()[o - 1]),
            !t || !i || (i instanceof p && "row" == i.type)
              ? i
              : this.prevDisplayRow(i, t)
          );
        }),
        (c.prototype.findRowIndex = function (e, t) {
          var o;
          return !!((e = this.findRow(e)) && (o = t.indexOf(e)) > -1) && o;
        }),
        (c.prototype.getData = function (e, t) {
          var o = [];
          return (
            this.getRows(e).forEach(function (e) {
              "row" == e.type && o.push(e.getData(t || "data"));
            }),
            o
          );
        }),
        (c.prototype.getComponents = function (e) {
          var t = [];
          return (
            this.getRows(e).forEach(function (e) {
              t.push(e.getComponent());
            }),
            t
          );
        }),
        (c.prototype.getDataCount = function (e) {
          return this.getRows(e).length;
        }),
        (c.prototype._genRemoteRequest = function () {
          var e = this,
            t = this.table,
            o = t.options,
            i = {};
          if (t.modExists("page")) {
            if (o.ajaxSorting) {
              var n = this.table.modules.sort.getSort();
              n.forEach(function (e) {
                delete e.column;
              }),
                (i[this.table.modules.page.paginationDataSentNames.sorters] =
                  n);
            }
            if (o.ajaxFiltering) {
              var r = this.table.modules.filter.getFilters(!0, !0);
              i[this.table.modules.page.paginationDataSentNames.filters] = r;
            }
            this.table.modules.ajax.setParams(i, !0);
          }
          t.modules.ajax
            .sendRequest()
            .then(function (t) {
              e._setDataActual(t, !0);
            })
            .catch(function (e) {});
        }),
        (c.prototype.filterRefresh = function () {
          var e = this.table,
            t = e.options,
            o = this.scrollLeft;
          t.ajaxFiltering
            ? "remote" == t.pagination && e.modExists("page")
              ? (e.modules.page.reset(!0),
                e.modules.page
                  .setPage(1)
                  .then(function () {})
                  .catch(function () {}))
              : t.ajaxProgressiveLoad
              ? e.modules.ajax
                  .loadData()
                  .then(function () {})
                  .catch(function () {})
              : this._genRemoteRequest()
            : this.refreshActiveData("filter"),
            this.scrollHorizontal(o);
        }),
        (c.prototype.sorterRefresh = function (e) {
          var t = this.table,
            o = this.table.options,
            i = this.scrollLeft;
          o.ajaxSorting
            ? ("remote" == o.pagination || o.progressiveLoad) &&
              t.modExists("page")
              ? (t.modules.page.reset(!0),
                t.modules.page
                  .setPage(1)
                  .then(function () {})
                  .catch(function () {}))
              : o.ajaxProgressiveLoad
              ? t.modules.ajax
                  .loadData()
                  .then(function () {})
                  .catch(function () {})
              : this._genRemoteRequest()
            : this.refreshActiveData(e ? "filter" : "sort"),
            this.scrollHorizontal(i);
        }),
        (c.prototype.scrollHorizontal = function (e) {
          (this.scrollLeft = e),
            (this.element.scrollLeft = e),
            this.table.options.groupBy &&
              this.table.modules.groupRows.scrollHeaders(e),
            this.table.modExists("columnCalcs") &&
              this.table.modules.columnCalcs.scrollHorizontal(e);
        }),
        (c.prototype.refreshActiveData = function (e, t, o) {
          var i,
            n = this,
            r = this.table,
            a = [
              "all",
              "filter",
              "sort",
              "display",
              "freeze",
              "group",
              "tree",
              "page",
            ];
          if (this.redrawBlock)
            (!this.redrawBlockRestoreConfig ||
              a.indexOf(e) < a.indexOf(this.redrawBlockRestoreConfig.stage)) &&
              (this.redrawBlockRestoreConfig = {
                stage: e,
                skipStage: t,
                renderInPosition: o,
              });
          else {
            switch (
              (n.table.modExists("edit") && n.table.modules.edit.cancelEdit(),
              e || (e = "all"),
              r.options.selectable &&
                !r.options.selectablePersistence &&
                r.modExists("selectRow") &&
                r.modules.selectRow.deselectRows(),
              e)
            ) {
              case "all":
              case "filter":
                t
                  ? (t = !1)
                  : r.modExists("filter")
                  ? n.setActiveRows(r.modules.filter.filter(n.rows))
                  : n.setActiveRows(n.rows.slice(0));
              case "sort":
                t
                  ? (t = !1)
                  : r.modExists("sort") && r.modules.sort.sort(this.activeRows),
                  this.regenerateRowNumbers();
              case "display":
                this.resetDisplayRows();
              case "freeze":
                t
                  ? (t = !1)
                  : this.table.modExists("frozenRows") &&
                    r.modules.frozenRows.isFrozen() &&
                    (r.modules.frozenRows.getDisplayIndex() ||
                      r.modules.frozenRows.setDisplayIndex(
                        this.getNextDisplayIndex(),
                      ),
                    (i = r.modules.frozenRows.getDisplayIndex()),
                    !0 !==
                      (i = n.setDisplayRows(
                        r.modules.frozenRows.getRows(
                          this.getDisplayRows(i - 1),
                        ),
                        i,
                      )) && r.modules.frozenRows.setDisplayIndex(i));
              case "group":
                t
                  ? (t = !1)
                  : r.options.groupBy &&
                    r.modExists("groupRows") &&
                    (r.modules.groupRows.getDisplayIndex() ||
                      r.modules.groupRows.setDisplayIndex(
                        this.getNextDisplayIndex(),
                      ),
                    (i = r.modules.groupRows.getDisplayIndex()),
                    !0 !==
                      (i = n.setDisplayRows(
                        r.modules.groupRows.getRows(this.getDisplayRows(i - 1)),
                        i,
                      )) && r.modules.groupRows.setDisplayIndex(i));
              case "tree":
                t
                  ? (t = !1)
                  : r.options.dataTree &&
                    r.modExists("dataTree") &&
                    (r.modules.dataTree.getDisplayIndex() ||
                      r.modules.dataTree.setDisplayIndex(
                        this.getNextDisplayIndex(),
                      ),
                    (i = r.modules.dataTree.getDisplayIndex()),
                    !0 !==
                      (i = n.setDisplayRows(
                        r.modules.dataTree.getRows(this.getDisplayRows(i - 1)),
                        i,
                      )) && r.modules.dataTree.setDisplayIndex(i)),
                  r.options.pagination &&
                    r.modExists("page") &&
                    !o &&
                    "local" == r.modules.page.getMode() &&
                    r.modules.page.reset();
              case "page":
                t
                  ? (t = !1)
                  : r.options.pagination &&
                    r.modExists("page") &&
                    (r.modules.page.getDisplayIndex() ||
                      r.modules.page.setDisplayIndex(
                        this.getNextDisplayIndex(),
                      ),
                    (i = r.modules.page.getDisplayIndex()),
                    "local" == r.modules.page.getMode() &&
                      r.modules.page.setMaxRows(
                        this.getDisplayRows(i - 1).length,
                      ),
                    !0 !==
                      (i = n.setDisplayRows(
                        r.modules.page.getRows(this.getDisplayRows(i - 1)),
                        i,
                      )) && r.modules.page.setDisplayIndex(i));
            }
            g.prototype.helpers.elVisible(n.element) &&
              (o
                ? n.reRenderInPosition()
                : ("all" === e &&
                    this.table.options.virtualDomHoz &&
                    this.table.vdomHoz.dataChange(),
                  n.renderTable(),
                  r.options.layoutColumnsOnNewData &&
                    n.table.columnManager.redraw(!0))),
              r.modExists("columnCalcs") &&
                r.modules.columnCalcs.recalc(this.activeRows);
          }
        }),
        (c.prototype.regenerateRowNumbers = function () {
          var e = this;
          this.rowNumColumn &&
            this.activeRows.forEach(function (t) {
              var o = t.getCell(e.rowNumColumn);
              o && o._generateContents();
            });
        }),
        (c.prototype.setActiveRows = function (e) {
          (this.activeRows = e),
            (this.activeRowsCount = this.activeRows.length);
        }),
        (c.prototype.resetDisplayRows = function () {
          (this.displayRows = []),
            this.displayRows.push(this.activeRows.slice(0)),
            (this.displayRowsCount = this.displayRows[0].length),
            this.table.modExists("frozenRows") &&
              this.table.modules.frozenRows.setDisplayIndex(0),
            this.table.options.groupBy &&
              this.table.modExists("groupRows") &&
              this.table.modules.groupRows.setDisplayIndex(0),
            this.table.options.pagination &&
              this.table.modExists("page") &&
              this.table.modules.page.setDisplayIndex(0);
        }),
        (c.prototype.getNextDisplayIndex = function () {
          return this.displayRows.length;
        }),
        (c.prototype.setDisplayRows = function (e, t) {
          var o = !0;
          return (
            t && void 0 !== this.displayRows[t]
              ? ((this.displayRows[t] = e), (o = !0))
              : (this.displayRows.push(e),
                (o = t = this.displayRows.length - 1)),
            t == this.displayRows.length - 1 &&
              (this.displayRowsCount =
                this.displayRows[this.displayRows.length - 1].length),
            o
          );
        }),
        (c.prototype.getDisplayRows = function (e) {
          return void 0 === e
            ? this.displayRows.length
              ? this.displayRows[this.displayRows.length - 1]
              : []
            : this.displayRows[e] || [];
        }),
        (c.prototype.getVisibleRows = function (e) {
          var t = this.element.scrollTop,
            o = this.element.clientHeight + t,
            i = !1,
            n = 0,
            r = 0,
            a = this.getDisplayRows();
          if (e) {
            this.getDisplayRows();
            for (var s = this.vDomTop; s <= this.vDomBottom; s++)
              if (a[s])
                if (i) {
                  if (!(o - a[s].getElement().offsetTop >= 0)) break;
                  r = s;
                } else if (t - a[s].getElement().offsetTop >= 0) n = s;
                else {
                  if (((i = !0), !(o - a[s].getElement().offsetTop >= 0)))
                    break;
                  r = s;
                }
          } else (n = this.vDomTop), (r = this.vDomBottom);
          return a.slice(n, r + 1);
        }),
        (c.prototype.displayRowIterator = function (e) {
          this.displayRows.forEach(e),
            (this.displayRowsCount =
              this.displayRows[this.displayRows.length - 1].length);
        }),
        (c.prototype.getRows = function (e) {
          var t;
          switch (e) {
            case "active":
              t = this.activeRows;
              break;
            case "display":
              t = this.table.rowManager.getDisplayRows();
              break;
            case "visible":
              t = this.getVisibleRows(!0);
              break;
            case "selected":
              t = this.table.modules.selectRow.selectedRows;
              break;
            default:
              t = this.rows;
          }
          return t;
        }),
        (c.prototype.reRenderInPosition = function (e) {
          if ("virtual" == this.getRenderMode())
            if (this.redrawBlock)
              e ? e() : (this.redrawBlockRederInPosition = !0);
            else {
              for (
                var t = this.element.scrollTop,
                  o = !1,
                  i = !1,
                  n = this.scrollLeft,
                  r = this.getDisplayRows(),
                  a = this.vDomTop;
                a <= this.vDomBottom;
                a++
              )
                if (r[a]) {
                  var s = t - r[a].getElement().offsetTop;
                  if (!(!1 === i || Math.abs(s) < i)) break;
                  (i = s), (o = a);
                }
              e && e(),
                this._virtualRenderFill(
                  !1 === o ? this.displayRowsCount - 1 : o,
                  !0,
                  i || 0,
                ),
                this.scrollHorizontal(n);
            }
          else this.renderTable(), e && e();
        }),
        (c.prototype.setRenderMode = function () {
          this.table.options.virtualDom
            ? ((this.renderMode = "virtual"),
              this.table.element.clientHeight || this.table.options.height
                ? (this.fixedHeight = !0)
                : (this.fixedHeight = !1))
            : (this.renderMode = "classic");
        }),
        (c.prototype.getRenderMode = function () {
          return this.renderMode;
        }),
        (c.prototype.renderTable = function () {
          switch (
            (this.table.options.renderStarted.call(this.table),
            (this.element.scrollTop = 0),
            this.renderMode)
          ) {
            case "classic":
              this._simpleRender();
              break;
            case "virtual":
              this._virtualRenderFill();
          }
          this.firstRender &&
            (this.displayRowsCount
              ? ((this.firstRender = !1), this.table.modules.layout.layout())
              : this.renderEmptyScroll()),
            this.table.modExists("frozenColumns") &&
              this.table.modules.frozenColumns.layout(),
            this.displayRowsCount ||
              (this.table.options.placeholder &&
                (this.table.options.placeholder.setAttribute(
                  "tabulator-render-mode",
                  this.renderMode,
                ),
                this.getElement().appendChild(this.table.options.placeholder),
                (this.table.options.placeholder.style.width =
                  this.table.columnManager.getWidth() + "px"))),
            this.table.options.renderComplete.call(this.table);
        }),
        (c.prototype._simpleRender = function () {
          this._clearVirtualDom(),
            this.displayRowsCount
              ? this.checkClassicModeGroupHeaderWidth()
              : this.renderEmptyScroll();
        }),
        (c.prototype.checkClassicModeGroupHeaderWidth = function () {
          var e = this,
            t = this.tableElement,
            o = !0;
          e.getDisplayRows().forEach(function (i, n) {
            e.styleRow(i, n),
              t.appendChild(i.getElement()),
              i.initialize(!0),
              "group" !== i.type && (o = !1);
          }),
            (t.style.minWidth = o
              ? e.table.columnManager.getWidth() + "px"
              : "");
        }),
        (c.prototype.renderEmptyScroll = function () {
          this.table.options.placeholder
            ? (this.tableElement.style.display = "none")
            : (this.tableElement.style.minWidth =
                this.table.columnManager.getWidth() + "px");
        }),
        (c.prototype._clearVirtualDom = function () {
          var e = this.tableElement;
          for (
            this.table.options.placeholder &&
            this.table.options.placeholder.parentNode &&
            this.table.options.placeholder.parentNode.removeChild(
              this.table.options.placeholder,
            );
            e.firstChild;

          )
            e.removeChild(e.firstChild);
          (e.style.paddingTop = ""),
            (e.style.paddingBottom = ""),
            (e.style.minWidth = ""),
            (e.style.minHeight = ""),
            (e.style.display = ""),
            (e.style.visibility = ""),
            (this.scrollTop = 0),
            (this.scrollLeft = 0),
            (this.vDomTop = 0),
            (this.vDomBottom = 0),
            (this.vDomTopPad = 0),
            (this.vDomBottomPad = 0);
        }),
        (c.prototype.styleRow = function (e, t) {
          var o = e.getElement();
          t % 2
            ? (o.classList.add("tabulator-row-even"),
              o.classList.remove("tabulator-row-odd"))
            : (o.classList.add("tabulator-row-odd"),
              o.classList.remove("tabulator-row-even"));
        }),
        (c.prototype._virtualRenderFill = function (e, t, o) {
          var i = this,
            n = i.tableElement,
            r = i.element,
            a = 0,
            s = 0,
            l = 0,
            c = 0,
            u = !0,
            d = i.getDisplayRows();
          if (((o = o || 0), (e = e || 0))) {
            for (; n.firstChild; ) n.removeChild(n.firstChild);
            var p = (i.displayRowsCount - e + 1) * i.vDomRowHeight;
            p < i.height &&
              (e -= Math.ceil((i.height - p) / i.vDomRowHeight)) < 0 &&
              (e = 0),
              (e -= a =
                Math.min(
                  Math.max(
                    Math.floor(i.vDomWindowBuffer / i.vDomRowHeight),
                    i.vDomWindowMinMarginRows,
                  ),
                  e,
                ));
          } else i._clearVirtualDom();
          if (i.displayRowsCount && g.prototype.helpers.elVisible(i.element)) {
            for (
              i.vDomTop = e, i.vDomBottom = e - 1;
              (s <= i.height + i.vDomWindowBuffer ||
                c < i.vDomWindowMinTotalRows) &&
              i.vDomBottom < i.displayRowsCount - 1;

            ) {
              var h,
                m = i.vDomBottom + 1,
                f = d[m];
              i.styleRow(f, m),
                n.appendChild(f.getElement()),
                f.initialize(),
                f.heightInitialized || f.normalizeHeight(!0),
                (h = f.getHeight()),
                c < a ? (l += h) : (s += h),
                h > this.vDomWindowBuffer && (this.vDomWindowBuffer = 2 * h),
                "group" !== f.type && (u = !1),
                i.vDomBottom++,
                c++;
            }
            e
              ? ((i.vDomTopPad = t
                  ? i.vDomRowHeight * this.vDomTop + o
                  : i.scrollTop - l),
                (i.vDomBottomPad =
                  i.vDomBottom == i.displayRowsCount - 1
                    ? 0
                    : Math.max(i.vDomScrollHeight - i.vDomTopPad - s - l, 0)))
              : ((this.vDomTopPad = 0),
                (i.vDomRowHeight = Math.floor((s + l) / c)),
                (i.vDomBottomPad =
                  i.vDomRowHeight * (i.displayRowsCount - i.vDomBottom - 1)),
                (i.vDomScrollHeight = l + s + i.vDomBottomPad - i.height)),
              (n.style.paddingTop = i.vDomTopPad + "px"),
              (n.style.paddingBottom = i.vDomBottomPad + "px"),
              t &&
                (this.scrollTop =
                  i.vDomTopPad +
                  l +
                  o -
                  (this.element.scrollWidth > this.element.clientWidth
                    ? this.element.offsetHeight - this.element.clientHeight
                    : 0)),
              (this.scrollTop = Math.min(
                this.scrollTop,
                this.element.scrollHeight - this.height,
              )),
              this.element.scrollWidth > this.element.offsetWidth &&
                t &&
                (this.scrollTop +=
                  this.element.offsetHeight - this.element.clientHeight),
              (this.vDomScrollPosTop = this.scrollTop),
              (this.vDomScrollPosBottom = this.scrollTop),
              (r.scrollTop = this.scrollTop),
              (n.style.minWidth = u
                ? i.table.columnManager.getWidth() + "px"
                : ""),
              i.table.options.groupBy &&
                "fitDataFill" != i.table.modules.layout.getMode() &&
                i.displayRowsCount == i.table.modules.groupRows.countGroups() &&
                (i.tableElement.style.minWidth =
                  i.table.columnManager.getWidth());
          } else this.renderEmptyScroll();
          this.fixedHeight || this.adjustTableSize();
        }),
        (c.prototype.scrollVertical = function (e) {
          var t = this.scrollTop - this.vDomScrollPosTop,
            o = this.scrollTop - this.vDomScrollPosBottom,
            i = 2 * this.vDomWindowBuffer;
          if (-t > i || o > i) {
            var n = this.scrollLeft;
            this._virtualRenderFill(
              Math.floor(
                (this.element.scrollTop / this.element.scrollHeight) *
                  this.displayRowsCount,
              ),
            ),
              this.scrollHorizontal(n);
          } else
            e
              ? (t < 0 && this._addTopRow(-t),
                o < 0 &&
                  (this.vDomScrollHeight - this.scrollTop >
                  this.vDomWindowBuffer
                    ? this._removeBottomRow(-o)
                    : (this.vDomScrollPosBottom = this.scrollTop)))
              : (t >= 0 &&
                  (this.scrollTop > this.vDomWindowBuffer
                    ? this._removeTopRow(t)
                    : (this.vDomScrollPosTop = this.scrollTop)),
                o >= 0 && this._addBottomRow(o));
        }),
        (c.prototype._addTopRow = function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0,
            o = this.tableElement,
            i = this.getDisplayRows();
          if (this.vDomTop) {
            var n = this.vDomTop - 1,
              r = i[n],
              a = r.getHeight() || this.vDomRowHeight;
            e >= a &&
              (this.styleRow(r, n),
              o.insertBefore(r.getElement(), o.firstChild),
              (r.initialized && r.heightInitialized) ||
                (this.vDomTopNewRows.push(r),
                r.heightInitialized || r.clearCellHeight()),
              r.initialize(),
              (this.vDomTopPad -= a),
              this.vDomTopPad < 0 && (this.vDomTopPad = n * this.vDomRowHeight),
              n || (this.vDomTopPad = 0),
              (o.style.paddingTop = this.vDomTopPad + "px"),
              (this.vDomScrollPosTop -= a),
              this.vDomTop--),
              (e = -(this.scrollTop - this.vDomScrollPosTop)),
              r.getHeight() > this.vDomWindowBuffer &&
                (this.vDomWindowBuffer = 2 * r.getHeight()),
              t < this.vDomMaxRenderChain &&
              this.vDomTop &&
              e >= (i[this.vDomTop - 1].getHeight() || this.vDomRowHeight)
                ? this._addTopRow(e, t + 1)
                : this._quickNormalizeRowHeight(this.vDomTopNewRows);
          }
        }),
        (c.prototype._removeTopRow = function (e) {
          var t = this.tableElement,
            o = this.getDisplayRows()[this.vDomTop],
            i = o.getHeight() || this.vDomRowHeight;
          if (e >= i) {
            var n = o.getElement();
            n.parentNode.removeChild(n),
              (this.vDomTopPad += i),
              (t.style.paddingTop = this.vDomTopPad + "px"),
              (this.vDomScrollPosTop += this.vDomTop
                ? i
                : i + this.vDomWindowBuffer),
              this.vDomTop++,
              (e = this.scrollTop - this.vDomScrollPosTop),
              this._removeTopRow(e);
          }
        }),
        (c.prototype._addBottomRow = function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0,
            o = this.tableElement,
            i = this.getDisplayRows();
          if (this.vDomBottom < this.displayRowsCount - 1) {
            var n = this.vDomBottom + 1,
              r = i[n],
              a = r.getHeight() || this.vDomRowHeight;
            e >= a &&
              (this.styleRow(r, n),
              o.appendChild(r.getElement()),
              (r.initialized && r.heightInitialized) ||
                (this.vDomBottomNewRows.push(r),
                r.heightInitialized || r.clearCellHeight()),
              r.initialize(),
              (this.vDomBottomPad -= a),
              (this.vDomBottomPad < 0 || n == this.displayRowsCount - 1) &&
                (this.vDomBottomPad = 0),
              (o.style.paddingBottom = this.vDomBottomPad + "px"),
              (this.vDomScrollPosBottom += a),
              this.vDomBottom++),
              (e = this.scrollTop - this.vDomScrollPosBottom),
              r.getHeight() > this.vDomWindowBuffer &&
                (this.vDomWindowBuffer = 2 * r.getHeight()),
              t < this.vDomMaxRenderChain &&
              this.vDomBottom < this.displayRowsCount - 1 &&
              e >= (i[this.vDomBottom + 1].getHeight() || this.vDomRowHeight)
                ? this._addBottomRow(e, t + 1)
                : this._quickNormalizeRowHeight(this.vDomBottomNewRows);
          }
        }),
        (c.prototype._removeBottomRow = function (e) {
          var t = this.tableElement,
            o = this.getDisplayRows()[this.vDomBottom],
            i = o.getHeight() || this.vDomRowHeight;
          if (e >= i) {
            var n = o.getElement();
            n.parentNode && n.parentNode.removeChild(n),
              (this.vDomBottomPad += i),
              this.vDomBottomPad < 0 && (this.vDomBottomPad = 0),
              (t.style.paddingBottom = this.vDomBottomPad + "px"),
              (this.vDomScrollPosBottom -= i),
              this.vDomBottom--,
              (e = -(this.scrollTop - this.vDomScrollPosBottom)),
              this._removeBottomRow(e);
          }
        }),
        (c.prototype._quickNormalizeRowHeight = function (e) {
          e.forEach(function (e) {
            e.calcHeight();
          }),
            e.forEach(function (e) {
              e.setCellHeight();
            }),
            (e.length = 0);
        }),
        (c.prototype.normalizeHeight = function () {
          this.activeRows.forEach(function (e) {
            e.normalizeHeight();
          });
        }),
        (c.prototype.adjustTableSize = function () {
          var e,
            t = this.element.clientHeight;
          if ("virtual" === this.renderMode) {
            var o = Math.floor(
              this.columnManager.getElement().getBoundingClientRect().height +
                (this.table.footerManager &&
                this.table.footerManager.active &&
                !this.table.footerManager.external
                  ? this.table.footerManager
                      .getElement()
                      .getBoundingClientRect().height
                  : 0),
            );
            this.fixedHeight
              ? ((this.element.style.minHeight = "calc(100% - " + o + "px)"),
                (this.element.style.height = "calc(100% - " + o + "px)"),
                (this.element.style.maxHeight = "calc(100% - " + o + "px)"))
              : ((this.element.style.height = ""),
                (this.element.style.height =
                  this.table.element.clientHeight - o + "px"),
                (this.element.scrollTop = this.scrollTop)),
              (this.height = this.element.clientHeight),
              (this.vDomWindowBuffer =
                this.table.options.virtualDomBuffer || this.height),
              this.fixedHeight ||
                t == this.element.clientHeight ||
                ((((e = this.table.modExists("resizeTable")) &&
                  !this.table.modules.resizeTable.autoResize) ||
                  !e) &&
                  this.redraw());
          }
        }),
        (c.prototype.reinitialize = function () {
          this.rows.forEach(function (e) {
            e.reinitialize(!0);
          });
        }),
        (c.prototype.blockRedraw = function () {
          (this.redrawBlock = !0), (this.redrawBlockRestoreConfig = !1);
        }),
        (c.prototype.restoreRedraw = function () {
          (this.redrawBlock = !1),
            this.redrawBlockRestoreConfig
              ? (this.refreshActiveData(
                  this.redrawBlockRestoreConfig.stage,
                  this.redrawBlockRestoreConfig.skipStage,
                  this.redrawBlockRestoreConfig.renderInPosition,
                ),
                (this.redrawBlockRestoreConfig = !1))
              : this.redrawBlockRederInPosition && this.reRenderInPosition(),
            (this.redrawBlockRederInPosition = !1);
        }),
        (c.prototype.redraw = function (e) {
          var t = this.scrollLeft;
          this.adjustTableSize(),
            (this.table.tableWidth = this.table.element.clientWidth),
            e
              ? this.renderTable()
              : ("classic" == this.renderMode
                  ? this.table.options.groupBy
                    ? this.refreshActiveData("group", !1, !1)
                    : this._simpleRender()
                  : (this.reRenderInPosition(), this.scrollHorizontal(t)),
                this.displayRowsCount ||
                  (this.table.options.placeholder &&
                    this.getElement().appendChild(
                      this.table.options.placeholder,
                    )));
        }),
        (c.prototype.resetScroll = function () {
          if (
            ((this.element.scrollLeft = 0),
            (this.element.scrollTop = 0),
            "ie" === this.table.browser)
          ) {
            var e = document.createEvent("Event");
            e.initEvent("scroll", !1, !0), this.element.dispatchEvent(e);
          } else this.element.dispatchEvent(new Event("scroll"));
        });
      var u = function (e) {
        (this.table = e),
          (this.element = this.table.rowManager.tableElement),
          (this.holderEl = this.table.rowManager.element),
          (this.leftCol = 0),
          (this.rightCol = 0),
          (this.scrollLeft = 0),
          (this.vDomScrollPosLeft = 0),
          (this.vDomScrollPosRight = 0),
          (this.vDomPadLeft = 0),
          (this.vDomPadRight = 0),
          (this.fitDataColAvg = 0),
          (this.window = 200),
          (this.initialized = !1),
          (this.columns = []),
          this.compatabilityCheck() && this.initialize();
      };
      (u.prototype.compatabilityCheck = function () {
        var e = this.table.options,
          t = !0;
        return (
          "fitDataTable" == e.layout &&
            (console.warn(
              "Horizontal Vitrual DOM is not compatible with fitDataTable layout mode",
            ),
            (t = !1)),
          e.responsiveLayout &&
            (console.warn(
              "Horizontal Vitrual DOM is not compatible with responsive columns",
            ),
            (t = !1)),
          this.table.rtl &&
            (console.warn(
              "Horizontal Vitrual DOM is not currently compatible with RTL text direction",
            ),
            (t = !1)),
          e.columns &&
            e.columns.find(function (e) {
              return e.frozen;
            }) &&
            (console.warn(
              "Horizontal Vitrual DOM is not compatible with frozen columns",
            ),
            (t = !1)),
          t || (e.virtualDomHoz = !1),
          t
        );
      }),
        (u.prototype.initialize = function () {
          var e = this;
          this.holderEl.addEventListener("scroll", function () {
            var t = e.holderEl.scrollLeft;
            e.scrollLeft != t &&
              ((e.scrollLeft = t),
              e.scroll(t - (e.vDomScrollPosLeft + e.window)));
          });
        }),
        (u.prototype.deinitialize = function () {
          this.initialized = !1;
        }),
        (u.prototype.clear = function () {
          (this.columns = []),
            (this.leftCol = -1),
            (this.rightCol = 0),
            (this.vDomScrollPosLeft = 0),
            (this.vDomScrollPosRight = 0),
            (this.vDomPadLeft = 0),
            (this.vDomPadRight = 0);
        }),
        (u.prototype.dataChange = function () {
          var e,
            t,
            o = !1,
            i = 0,
            n = 0;
          if ("fitData" === this.table.options.layout) {
            if (
              (this.table.columnManager.columnsByIndex.forEach(function (e) {
                !e.definition.width && e.visible && (o = !0);
              }),
              o &&
                o &&
                this.table.rowManager.getDisplayRows().length &&
                ((this.vDomScrollPosRight =
                  this.scrollLeft + this.holderEl.clientWidth + this.window),
                (e = this.table.options.groupBy
                  ? this.table.modules.groupRows.getGroups(!1)[0].getRows(!1)[0]
                  : this.table.rowManager.getDisplayRows()[0])))
            ) {
              (t = e.getElement()),
                e.generateCells(),
                this.element.appendChild(t);
              for (n = 0; n < e.cells.length; n++) {
                var r = e.cells[n];
                if (
                  (t.appendChild(r.getElement()),
                  r.column.reinitializeWidth(),
                  (i += r.column.getWidth()) > this.vDomScrollPosRight)
                )
                  break;
              }
              for (
                t.parentNode.removeChild(t),
                  this.fitDataColAvg = Math.floor(i / (n + 1));
                n < this.table.columnManager.columnsByIndex.length;
                n++
              )
                this.table.columnManager.columnsByIndex[n].setWidth(
                  this.fitDataColAvg,
                );
              this.reinitialize(!1, !0);
            }
          } else
            "fitColumns" === this.table.options.layout &&
              (this.table.modules.layout.layout(),
              this.table.vdomHoz.reinitialize(!1, !0));
        }),
        (u.prototype.fitDataLayoutOverride = function () {
          for (var e = this.leftCol; e <= this.rightCol; e++)
            this.columns[e].reinitializeWidth();
        }),
        (u.prototype.reinitialize = function (e, t) {
          var o = this,
            i = {
              cols: this.columns,
              leftCol: this.leftCol,
              rightCol: this.rightCol,
            };
          if (!e || this.initialized) {
            this.clear(),
              (this.scrollLeft = this.holderEl.scrollLeft),
              (this.vDomScrollPosLeft = this.scrollLeft - this.window),
              (this.vDomScrollPosRight =
                this.scrollLeft + this.holderEl.clientWidth + this.window);
            var n = 0;
            this.table.columnManager.columnsByIndex.forEach(function (e) {
              var t = {};
              if (e.visible) {
                var i = e.getWidth();
                (t.leftPos = n),
                  (t.rightPos = n + i),
                  n + i > o.vDomScrollPosLeft && n < o.vDomScrollPosRight
                    ? (-1 == o.leftCol &&
                        ((o.leftCol = o.columns.length), (o.vDomPadLeft = n)),
                      (o.rightCol = o.columns.length))
                    : -1 !== o.leftCol && (o.vDomPadRight += i),
                  o.columns.push(e),
                  (e.modules.vdomHoz = t),
                  (n += i);
              }
            }),
              (this.element.style.paddingLeft = this.vDomPadLeft + "px"),
              (this.element.style.paddingRight = this.vDomPadRight + "px"),
              (this.initialized = !0),
              t || (e && !this.reinitChanged(i)) || this.renitializeRows(),
              (this.holderEl.scrollLeft = this.scrollLeft);
          }
        }),
        (u.prototype.reinitChanged = function (e) {
          var t = this,
            o = !0;
          return (
            e.cols.length !== this.columns.length ||
            e.leftCol !== this.leftCol ||
            e.rightCol !== this.rightCol ||
            (e.cols.forEach(function (e, i) {
              e !== t.columns[i] && (o = !1);
            }),
            !o)
          );
        }),
        (u.prototype.renitializeRows = function () {
          var e = this;
          this.table.rowManager.getVisibleRows().forEach(function (t) {
            e.reinitializeRow(t, !0);
          });
        }),
        (u.prototype.scroll = function (e) {
          (this.vDomScrollPosLeft += e),
            (this.vDomScrollPosRight += e),
            e > 0.8 * this.holderEl.clientWidth
              ? this.reinitialize()
              : e > 0
              ? (this.addColRight(), this.removeColLeft())
              : (this.addColLeft(), this.removeColRight());
        }),
        (u.prototype.colPositionAdjust = function (e, t, o) {
          for (var i = e; i < t; i++) {
            var n = this.columns[i];
            (n.modules.vdomHoz.leftPos -= o), (n.modules.vdomHoz.rightPos -= o);
          }
        }),
        (u.prototype.addColRight = function () {
          var e,
            t,
            o = this.columns[this.rightCol + 1];
          o &&
            o.modules.vdomHoz.leftPos <= this.vDomScrollPosRight &&
            (this.table.rowManager.getVisibleRows().forEach(function (e) {
              if ("group" !== e.type) {
                var t = e.getCell(o);
                e.getElement().appendChild(t.getElement()), t.cellRendered();
              }
            }),
            this.fitDataColAvg &&
              (e = o.getWidth()) === this.fitDataColAvg &&
              (o.reinitializeWidth(),
              (t = e - o.getWidth()) &&
                ((o.modules.vdomHoz.rightPos -= t),
                this.colPositionAdjust(
                  this.rightCol + 1,
                  this.columns.length,
                  t,
                ))),
            this.rightCol++,
            this.rightCol >= this.columns.length - 1
              ? (this.vDomPadRight = 0)
              : (this.vDomPadRight -= o.getWidth()),
            (this.element.style.paddingRight = this.vDomPadRight + "px"),
            this.addColRight());
        }),
        (u.prototype.addColLeft = function () {
          var e = this.columns[this.leftCol - 1];
          e &&
            e.modules.vdomHoz.rightPos >= this.vDomScrollPosLeft &&
            (this.table.rowManager.getVisibleRows().forEach(function (t) {
              if ("group" !== t.type) {
                var o = t.getCell(e);
                t.getElement().prepend(o.getElement()), o.cellRendered();
              }
            }),
            this.leftCol
              ? (this.vDomPadLeft -= e.getWidth())
              : (this.vDomPadLeft = 0),
            (this.element.style.paddingLeft = this.vDomPadLeft + "px"),
            this.leftCol--,
            this.addColLeft());
        }),
        (u.prototype.removeColRight = function (e) {
          var t;
          (e = this.columns[this.rightCol]) &&
            e.modules.vdomHoz.leftPos > this.vDomScrollPosRight &&
            ((t = this.table.rowManager.getVisibleRows()),
            (e.modules.vdomHoz.visible = !1),
            t.forEach(function (t) {
              if ("group" !== t.type) {
                var o = t.getCell(e);
                t.getElement().removeChild(o.getElement());
              }
            }),
            (this.vDomPadRight += e.getWidth()),
            (this.element.style.paddingRight = this.vDomPadRight + "px"),
            this.rightCol--,
            this.removeColRight());
        }),
        (u.prototype.removeColLeft = function () {
          var e = this.columns[this.leftCol];
          e &&
            e.modules.vdomHoz.rightPos < this.vDomScrollPosLeft &&
            (this.table.rowManager.getVisibleRows().forEach(function (t) {
              if ("group" !== t.type) {
                var o = t.getCell(e);
                t.getElement().removeChild(o.getElement());
              }
            }),
            (this.vDomPadLeft += e.getWidth()),
            (this.element.style.paddingLeft = this.vDomPadLeft + "px"),
            this.leftCol++,
            this.removeColLeft());
        }),
        (u.prototype.initializeRow = function (e) {
          if ("group" !== e.type) {
            e.modules.vdomHoz = {
              leftCol: this.leftCol,
              rightCol: this.rightCol,
            };
            for (var t = this.leftCol; t <= this.rightCol; t++) {
              var o = this.columns[t];
              if (o && o.visible) {
                var i = e.getCell(o);
                e.getElement().appendChild(i.getElement()), i.cellRendered();
              }
            }
          }
        }),
        (u.prototype.reinitializeRow = function (e, t) {
          if (
            "group" !== e.type &&
            (t ||
              !e.modules.vdomHoz ||
              e.modules.vdomHoz.leftCol !== this.leftCol ||
              e.modules.vdomHoz.rightCol !== this.rightCol)
          ) {
            for (var o = e.getElement(); o.firstChild; )
              o.removeChild(o.firstChild);
            this.initializeRow(e);
          }
        });
      var d = function (e) {
        this._row = e;
      };
      (d.prototype.getData = function (e) {
        return this._row.getData(e);
      }),
        (d.prototype.getElement = function () {
          return this._row.getElement();
        }),
        (d.prototype.getCells = function () {
          var e = [];
          return (
            this._row.getCells().forEach(function (t) {
              e.push(t.getComponent());
            }),
            e
          );
        }),
        (d.prototype.getCell = function (e) {
          var t = this._row.getCell(e);
          return !!t && t.getComponent();
        }),
        (d.prototype.getIndex = function () {
          return this._row.getData("data")[this._row.table.options.index];
        }),
        (d.prototype.getPosition = function (e) {
          return this._row.table.rowManager.getRowPosition(this._row, e);
        }),
        (d.prototype.delete = function () {
          return this._row.delete();
        }),
        (d.prototype.scrollTo = function () {
          return this._row.table.rowManager.scrollToRow(this._row);
        }),
        (d.prototype.pageTo = function () {
          if (this._row.table.modExists("page", !0))
            return this._row.table.modules.page.setPageToRow(this._row);
        }),
        (d.prototype.move = function (e, t) {
          this._row.moveToRow(e, t);
        }),
        (d.prototype.update = function (e) {
          return this._row.updateData(e);
        }),
        (d.prototype.normalizeHeight = function () {
          this._row.normalizeHeight(!0);
        }),
        (d.prototype.select = function () {
          this._row.table.modules.selectRow.selectRows(this._row);
        }),
        (d.prototype.deselect = function () {
          this._row.table.modules.selectRow.deselectRows(this._row);
        }),
        (d.prototype.toggleSelect = function () {
          this._row.table.modules.selectRow.toggleRow(this._row);
        }),
        (d.prototype.isSelected = function () {
          return this._row.table.modules.selectRow.isRowSelected(this._row);
        }),
        (d.prototype._getSelf = function () {
          return this._row;
        }),
        (d.prototype.validate = function () {
          return this._row.validate();
        }),
        (d.prototype.freeze = function () {
          this._row.table.modExists("frozenRows", !0) &&
            this._row.table.modules.frozenRows.freezeRow(this._row);
        }),
        (d.prototype.unfreeze = function () {
          this._row.table.modExists("frozenRows", !0) &&
            this._row.table.modules.frozenRows.unfreezeRow(this._row);
        }),
        (d.prototype.isFrozen = function () {
          return (
            !!this._row.table.modExists("frozenRows", !0) &&
            this._row.table.modules.frozenRows.rows.indexOf(this._row) > -1
          );
        }),
        (d.prototype.treeCollapse = function () {
          this._row.table.modExists("dataTree", !0) &&
            this._row.table.modules.dataTree.collapseRow(this._row);
        }),
        (d.prototype.treeExpand = function () {
          this._row.table.modExists("dataTree", !0) &&
            this._row.table.modules.dataTree.expandRow(this._row);
        }),
        (d.prototype.treeToggle = function () {
          this._row.table.modExists("dataTree", !0) &&
            this._row.table.modules.dataTree.toggleRow(this._row);
        }),
        (d.prototype.getTreeParent = function () {
          return (
            !!this._row.table.modExists("dataTree", !0) &&
            this._row.table.modules.dataTree.getTreeParent(this._row)
          );
        }),
        (d.prototype.getTreeChildren = function () {
          return (
            !!this._row.table.modExists("dataTree", !0) &&
            this._row.table.modules.dataTree.getTreeChildren(this._row, !0)
          );
        }),
        (d.prototype.addTreeChild = function (e, t, o) {
          return (
            !!this._row.table.modExists("dataTree", !0) &&
            this._row.table.modules.dataTree.addTreeChildRow(this._row, e, t, o)
          );
        }),
        (d.prototype.reformat = function () {
          return this._row.reinitialize();
        }),
        (d.prototype.getGroup = function () {
          return this._row.getGroup().getComponent();
        }),
        (d.prototype.getTable = function () {
          return this._row.table;
        }),
        (d.prototype.getNextRow = function () {
          var e = this._row.nextRow();
          return e ? e.getComponent() : e;
        }),
        (d.prototype.getPrevRow = function () {
          var e = this._row.prevRow();
          return e ? e.getComponent() : e;
        });
      var p = function (e, t) {
        var o =
          arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : "row";
        (this.table = t.table),
          (this.parent = t),
          (this.data = {}),
          (this.type = o),
          (this.element = !1),
          (this.modules = {}),
          (this.cells = []),
          (this.height = 0),
          (this.heightStyled = ""),
          (this.manualHeight = !1),
          (this.outerHeight = 0),
          (this.initialized = !1),
          (this.heightInitialized = !1),
          (this.component = null),
          (this.created = !1),
          this.setData(e);
      };
      (p.prototype.create = function () {
        this.created || ((this.created = !0), this.generateElement());
      }),
        (p.prototype.createElement = function () {
          var e = document.createElement("div");
          e.classList.add("tabulator-row"),
            e.setAttribute("role", "row"),
            (this.element = e);
        }),
        (p.prototype.getElement = function () {
          return this.create(), this.element;
        }),
        (p.prototype.detachElement = function () {
          this.element &&
            this.element.parentNode &&
            this.element.parentNode.removeChild(this.element);
        }),
        (p.prototype.generateElement = function () {
          var e,
            t,
            o,
            i = this;
          this.createElement(),
            !1 !== i.table.options.selectable &&
              i.table.modExists("selectRow") &&
              i.table.modules.selectRow.initializeRow(this),
            !1 !== i.table.options.movableRows &&
              i.table.modExists("moveRow") &&
              i.table.modules.moveRow.initializeRow(this),
            !1 !== i.table.options.dataTree &&
              i.table.modExists("dataTree") &&
              i.table.modules.dataTree.initializeRow(this),
            "collapse" === i.table.options.responsiveLayout &&
              i.table.modExists("responsiveLayout") &&
              i.table.modules.responsiveLayout.initializeRow(this),
            (i.table.options.rowContextMenu || i.table.options.rowClickMenu) &&
              this.table.modExists("menu") &&
              i.table.modules.menu.initializeRow(this),
            i.table.options.rowClick &&
              i.element.addEventListener("click", function (e) {
                i.table.options.rowClick(e, i.getComponent());
              }),
            i.table.options.rowDblClick &&
              i.element.addEventListener("dblclick", function (e) {
                i.table.options.rowDblClick(e, i.getComponent());
              }),
            i.table.options.rowContext &&
              i.element.addEventListener("contextmenu", function (e) {
                i.table.options.rowContext(e, i.getComponent());
              }),
            i.table.options.rowMouseEnter &&
              i.element.addEventListener("mouseenter", function (e) {
                i.table.options.rowMouseEnter(e, i.getComponent());
              }),
            i.table.options.rowMouseLeave &&
              i.element.addEventListener("mouseleave", function (e) {
                i.table.options.rowMouseLeave(e, i.getComponent());
              }),
            i.table.options.rowMouseOver &&
              i.element.addEventListener("mouseover", function (e) {
                i.table.options.rowMouseOver(e, i.getComponent());
              }),
            i.table.options.rowMouseOut &&
              i.element.addEventListener("mouseout", function (e) {
                i.table.options.rowMouseOut(e, i.getComponent());
              }),
            i.table.options.rowMouseMove &&
              i.element.addEventListener("mousemove", function (e) {
                i.table.options.rowMouseMove(e, i.getComponent());
              }),
            i.table.options.rowTap &&
              ((o = !1),
              i.element.addEventListener(
                "touchstart",
                function (e) {
                  o = !0;
                },
                { passive: !0 },
              ),
              i.element.addEventListener("touchend", function (e) {
                o && i.table.options.rowTap(e, i.getComponent()), (o = !1);
              })),
            i.table.options.rowDblTap &&
              ((e = null),
              i.element.addEventListener("touchend", function (t) {
                e
                  ? (clearTimeout(e),
                    (e = null),
                    i.table.options.rowDblTap(t, i.getComponent()))
                  : (e = setTimeout(function () {
                      clearTimeout(e), (e = null);
                    }, 300));
              })),
            i.table.options.rowTapHold &&
              ((t = null),
              i.element.addEventListener(
                "touchstart",
                function (e) {
                  clearTimeout(t),
                    (t = setTimeout(function () {
                      clearTimeout(t),
                        (t = null),
                        (o = !1),
                        i.table.options.rowTapHold(e, i.getComponent());
                    }, 1e3));
                },
                { passive: !0 },
              ),
              i.element.addEventListener("touchend", function (e) {
                clearTimeout(t), (t = null);
              }));
        }),
        (p.prototype.generateCells = function () {
          this.cells = this.table.columnManager.generateCells(this);
        }),
        (p.prototype.initialize = function (e) {
          var t = this;
          if ((this.create(), !this.initialized || e)) {
            for (this.deleteCells(); this.element.firstChild; )
              this.element.removeChild(this.element.firstChild);
            this.table.modExists("frozenColumns") &&
              this.table.modules.frozenColumns.layoutRow(this),
              this.generateCells(),
              this.table.options.virtualDomHoz && this.table.vdomHoz.initialized
                ? this.table.vdomHoz.initializeRow(this)
                : this.cells.forEach(function (e) {
                    t.element.appendChild(e.getElement()), e.cellRendered();
                  }),
              e && this.normalizeHeight(),
              this.table.options.dataTree &&
                this.table.modExists("dataTree") &&
                this.table.modules.dataTree.layoutRow(this),
              "collapse" === this.table.options.responsiveLayout &&
                this.table.modExists("responsiveLayout") &&
                this.table.modules.responsiveLayout.layoutRow(this),
              this.table.options.rowFormatter &&
                this.table.options.rowFormatter(this.getComponent()),
              this.table.options.resizableRows &&
                this.table.modExists("resizeRows") &&
                this.table.modules.resizeRows.initializeRow(this),
              (this.initialized = !0);
          } else
            this.table.options.virtualDomHoz &&
              this.table.vdomHoz.reinitializeRow(this);
        }),
        (p.prototype.reinitializeHeight = function () {
          (this.heightInitialized = !1),
            this.element &&
              null !== this.element.offsetParent &&
              this.normalizeHeight(!0);
        }),
        (p.prototype.reinitialize = function (e) {
          (this.initialized = !1),
            (this.heightInitialized = !1),
            this.manualHeight || ((this.height = 0), (this.heightStyled = "")),
            this.element &&
              null !== this.element.offsetParent &&
              this.initialize(!0),
            this.table.options.dataTree &&
              this.table.modExists("dataTree", !0) &&
              this.table.modules.dataTree
                .getTreeChildren(this, !1, !0)
                .forEach(function (e) {
                  e.reinitialize(!0);
                });
        }),
        (p.prototype.calcHeight = function (e) {
          var t = 0,
            o = this.table.options.resizableRows
              ? this.element.clientHeight
              : 0;
          this.cells.forEach(function (e) {
            var o = e.getHeight();
            o > t && (t = o);
          }),
            (this.height = e
              ? Math.max(t, o)
              : this.manualHeight
              ? this.height
              : Math.max(t, o)),
            (this.heightStyled = this.height ? this.height + "px" : ""),
            (this.outerHeight = this.element.offsetHeight);
        }),
        (p.prototype.setCellHeight = function () {
          this.cells.forEach(function (e) {
            e.setHeight();
          }),
            (this.heightInitialized = !0);
        }),
        (p.prototype.clearCellHeight = function () {
          this.cells.forEach(function (e) {
            e.clearHeight();
          });
        }),
        (p.prototype.normalizeHeight = function (e) {
          e && this.clearCellHeight(), this.calcHeight(e), this.setCellHeight();
        }),
        (p.prototype.setHeight = function (e, t) {
          (this.height != e || t) &&
            ((this.manualHeight = !0),
            (this.height = e),
            (this.heightStyled = e ? e + "px" : ""),
            this.setCellHeight(),
            (this.outerHeight = this.element.offsetHeight));
        }),
        (p.prototype.getHeight = function () {
          return this.outerHeight;
        }),
        (p.prototype.getWidth = function () {
          return this.element.offsetWidth;
        }),
        (p.prototype.deleteCell = function (e) {
          var t = this.cells.indexOf(e);
          t > -1 && this.cells.splice(t, 1);
        }),
        (p.prototype.setData = function (e) {
          this.table.modExists("mutator") &&
            (e = this.table.modules.mutator.transformRow(e, "data")),
            (this.data = e),
            this.table.options.reactiveData &&
              this.table.modExists("reactiveData", !0) &&
              this.table.modules.reactiveData.watchRow(this);
        }),
        (p.prototype.updateData = function (e) {
          var t,
            o = this,
            i = this.element && g.prototype.helpers.elVisible(this.element),
            n = {};
          return new Promise(function (r, a) {
            for (var s in ("string" == typeof e && (e = JSON.parse(e)),
            o.table.options.reactiveData &&
              o.table.modExists("reactiveData", !0) &&
              o.table.modules.reactiveData.block(),
            o.table.modExists("mutator")
              ? ((n = Object.assign(n, o.data)),
                (n = Object.assign(n, e)),
                (t = o.table.modules.mutator.transformRow(n, "data", e)))
              : (t = e),
            t))
              o.data[s] = t[s];
            for (var s in (o.table.options.reactiveData &&
              o.table.modExists("reactiveData", !0) &&
              o.table.modules.reactiveData.unblock(),
            e)) {
              o.table.columnManager
                .getColumnsByFieldRoot(s)
                .forEach(function (e) {
                  var n = o.getCell(e.getField());
                  if (n) {
                    var r = e.getFieldValue(t);
                    n.getValue() != r &&
                      (n.setValueProcessData(r), i && n.cellRendered());
                  }
                });
            }
            o.table.options.groupUpdateOnCellEdit &&
              o.table.options.groupBy &&
              o.table.modExists("groupRows") &&
              o.table.modules.groupRows.reassignRowToGroup(o.row),
              i
                ? (o.normalizeHeight(!0),
                  o.table.options.rowFormatter &&
                    o.table.options.rowFormatter(o.getComponent()))
                : ((o.initialized = !1), (o.height = 0), (o.heightStyled = "")),
              !1 !== o.table.options.dataTree &&
                o.table.modExists("dataTree") &&
                o.table.modules.dataTree.redrawNeeded(e) &&
                (o.table.modules.dataTree.initializeRow(o),
                i &&
                  (o.table.modules.dataTree.layoutRow(o),
                  o.table.rowManager.refreshActiveData("tree", !1, !0))),
              o.table.options.rowUpdated.call(o.table, o.getComponent()),
              o.table.options.dataChanged &&
                o.table.options.dataChanged.call(
                  o.table,
                  o.table.rowManager.getData(),
                ),
              r();
          });
        }),
        (p.prototype.getData = function (e) {
          return e && this.table.modExists("accessor")
            ? this.table.modules.accessor.transformRow(this, e)
            : this.data;
        }),
        (p.prototype.getCell = function (e) {
          return (
            (e = this.table.columnManager.findColumn(e)),
            this.cells.find(function (t) {
              return t.column === e;
            })
          );
        }),
        (p.prototype.getCellIndex = function (e) {
          return this.cells.findIndex(function (t) {
            return t === e;
          });
        }),
        (p.prototype.findNextEditableCell = function (e) {
          var t = !1;
          if (e < this.cells.length - 1)
            for (var o = e + 1; o < this.cells.length; o++) {
              var i = this.cells[o];
              if (
                i.column.modules.edit &&
                g.prototype.helpers.elVisible(i.getElement())
              ) {
                var n = !0;
                if (
                  ("function" == typeof i.column.modules.edit.check &&
                    (n = i.column.modules.edit.check(i.getComponent())),
                  n)
                ) {
                  t = i;
                  break;
                }
              }
            }
          return t;
        }),
        (p.prototype.findPrevEditableCell = function (e) {
          var t = !1;
          if (e > 0)
            for (var o = e - 1; o >= 0; o--) {
              var i = this.cells[o],
                n = !0;
              if (
                i.column.modules.edit &&
                g.prototype.helpers.elVisible(i.getElement()) &&
                ("function" == typeof i.column.modules.edit.check &&
                  (n = i.column.modules.edit.check(i.getComponent())),
                n)
              ) {
                t = i;
                break;
              }
            }
          return t;
        }),
        (p.prototype.getCells = function () {
          return this.cells;
        }),
        (p.prototype.nextRow = function () {
          return this.table.rowManager.nextDisplayRow(this, !0) || !1;
        }),
        (p.prototype.prevRow = function () {
          return this.table.rowManager.prevDisplayRow(this, !0) || !1;
        }),
        (p.prototype.moveToRow = function (e, t) {
          var o = this.table.rowManager.findRow(e);
          o
            ? (this.table.rowManager.moveRowActual(this, o, !t),
              this.table.rowManager.refreshActiveData("display", !1, !0))
            : console.warn("Move Error - No matching row found:", e);
        }),
        (p.prototype.validate = function () {
          var e = [];
          return (
            this.cells.forEach(function (t) {
              t.validate() || e.push(t.getComponent());
            }),
            !e.length || e
          );
        }),
        (p.prototype.delete = function () {
          var e = this;
          return new Promise(function (t, o) {
            var i, n;
            e.table.options.history &&
              e.table.modExists("history") &&
              (e.table.options.groupBy && e.table.modExists("groupRows")
                ? (i = (n = e.getGroup().rows).indexOf(e)) && (i = n[i - 1])
                : (i = e.table.rowManager.getRowIndex(e)) &&
                  (i = e.table.rowManager.rows[i - 1]),
              e.table.modules.history.action("rowDelete", e, {
                data: e.getData(),
                pos: !i,
                index: i,
              })),
              e.deleteActual(),
              t();
          });
        }),
        (p.prototype.deleteActual = function (e) {
          this.table.rowManager.getRowIndex(this);
          this.detatchModules(),
            this.table.options.reactiveData &&
              this.table.modExists("reactiveData", !0),
            this.modules.group && this.modules.group.removeRow(this),
            this.table.rowManager.deleteRow(this, e),
            this.deleteCells(),
            (this.initialized = !1),
            (this.heightInitialized = !1),
            (this.element = !1),
            this.table.options.dataTree &&
              this.table.modExists("dataTree", !0) &&
              this.table.modules.dataTree.rowDelete(this),
            this.table.modExists("columnCalcs") &&
              (this.table.options.groupBy && this.table.modExists("groupRows")
                ? this.table.modules.columnCalcs.recalcRowGroup(this)
                : this.table.modules.columnCalcs.recalc(
                    this.table.rowManager.activeRows,
                  ));
        }),
        (p.prototype.detatchModules = function () {
          this.table.modExists("selectRow") &&
            this.table.modules.selectRow._deselectRow(this, !0),
            this.table.modExists("edit") &&
              this.table.modules.edit.currentCell.row === this &&
              this.table.modules.edit.cancelEdit(),
            this.table.modExists("frozenRows") &&
              this.table.modules.frozenRows.detachRow(this);
        }),
        (p.prototype.deleteCells = function () {
          for (var e = this.cells.length, t = 0; t < e; t++)
            this.cells[0].delete();
        }),
        (p.prototype.wipe = function () {
          if ((this.detatchModules(), this.deleteCells(), this.element)) {
            for (; this.element.firstChild; )
              this.element.removeChild(this.element.firstChild);
            this.element.parentNode &&
              this.element.parentNode.removeChild(this.element);
          }
          (this.element = !1), (this.modules = {});
        }),
        (p.prototype.getGroup = function () {
          return this.modules.group || !1;
        }),
        (p.prototype.getComponent = function () {
          return (
            this.component || (this.component = new d(this)), this.component
          );
        });
      var h = function (e) {
        this._cell = e;
      };
      (h.prototype.getValue = function () {
        return this._cell.getValue();
      }),
        (h.prototype.getOldValue = function () {
          return this._cell.getOldValue();
        }),
        (h.prototype.getInitialValue = function () {
          return this._cell.initialValue;
        }),
        (h.prototype.getElement = function () {
          return this._cell.getElement();
        }),
        (h.prototype.getRow = function () {
          return this._cell.row.getComponent();
        }),
        (h.prototype.getData = function () {
          return this._cell.row.getData();
        }),
        (h.prototype.getField = function () {
          return this._cell.column.getField();
        }),
        (h.prototype.getColumn = function () {
          return this._cell.column.getComponent();
        }),
        (h.prototype.setValue = function (e, t) {
          void 0 === t && (t = !0), this._cell.setValue(e, t);
        }),
        (h.prototype.restoreOldValue = function () {
          this._cell.setValueActual(this._cell.getOldValue());
        }),
        (h.prototype.restoreInitialValue = function () {
          this._cell.setValueActual(this._cell.initialValue);
        }),
        (h.prototype.edit = function (e) {
          return this._cell.edit(e);
        }),
        (h.prototype.cancelEdit = function () {
          this._cell.cancelEdit();
        }),
        (h.prototype.isEdited = function () {
          return !!this._cell.modules.edit && this._cell.modules.edit.edited;
        }),
        (h.prototype.clearEdited = function () {
          self.table.modExists("edit", !0) &&
            this._cell.table.modules.edit.clearEdited(this._cell);
        }),
        (h.prototype.isValid = function () {
          return (
            !this._cell.modules.validate || !this._cell.modules.validate.invalid
          );
        }),
        (h.prototype.validate = function () {
          return this._cell.validate();
        }),
        (h.prototype.clearValidation = function () {
          this._cell.table.modExists("validate", !0) &&
            this._cell.table.modules.validate.clearValidation(this._cell);
        }),
        (h.prototype.nav = function () {
          return this._cell.nav();
        }),
        (h.prototype.checkHeight = function () {
          this._cell.checkHeight();
        }),
        (h.prototype.getTable = function () {
          return this._cell.table;
        }),
        (h.prototype._getSelf = function () {
          return this._cell;
        });
      var m = function (e, t) {
        (this.table = e.table),
          (this.column = e),
          (this.row = t),
          (this.element = null),
          (this.value = null),
          this.initialValue,
          (this.oldValue = null),
          (this.modules = {}),
          (this.height = null),
          (this.width = null),
          (this.minWidth = null),
          (this.component = null),
          (this.loaded = !1),
          this.build();
      };
      (m.prototype.build = function () {
        this.generateElement(),
          this.setWidth(),
          this._configureCell(),
          this.setValueActual(this.column.getFieldValue(this.row.data)),
          (this.initialValue = this.value);
      }),
        (m.prototype.generateElement = function () {
          (this.element = document.createElement("div")),
            (this.element.className = "tabulator-cell"),
            this.element.setAttribute("role", "gridcell"),
            (this.element = this.element);
        }),
        (m.prototype._configureCell = function () {
          var e = this,
            t = e.column.cellEvents,
            o = e.element,
            i = this.column.getField();
          ((o.style.textAlign = e.column.hozAlign),
          e.column.vertAlign &&
            ((o.style.display = "inline-flex"),
            (o.style.alignItems =
              { top: "flex-start", bottom: "flex-end", middle: "center" }[
                e.column.vertAlign
              ] || ""),
            e.column.hozAlign &&
              (o.style.justifyContent =
                { left: "flex-start", right: "flex-end", center: "center" }[
                  e.column.hozAlign
                ] || "")),
          i && o.setAttribute("tabulator-field", i),
          e.column.definition.cssClass) &&
            e.column.definition.cssClass.split(" ").forEach(function (e) {
              o.classList.add(e);
            });
          "hover" === this.table.options.tooltipGenerationMode &&
            o.addEventListener("mouseenter", function (t) {
              e._generateTooltip();
            }),
            e._bindClickEvents(t),
            e._bindTouchEvents(t),
            e._bindMouseEvents(t),
            e.column.modules.edit && e.table.modules.edit.bindEditor(e),
            e.column.definition.rowHandle &&
              !1 !== e.table.options.movableRows &&
              e.table.modExists("moveRow") &&
              e.table.modules.moveRow.initializeCell(e),
            e.column.visible || e.hide();
        }),
        (m.prototype._bindClickEvents = function (e) {
          var t = this,
            o = t.element;
          (e.cellClick || t.table.options.cellClick) &&
            o.addEventListener("click", function (o) {
              var i = t.getComponent();
              e.cellClick && e.cellClick.call(t.table, o, i),
                t.table.options.cellClick &&
                  t.table.options.cellClick.call(t.table, o, i);
            }),
            e.cellDblClick || this.table.options.cellDblClick
              ? o.addEventListener("dblclick", function (o) {
                  var i = t.getComponent();
                  e.cellDblClick && e.cellDblClick.call(t.table, o, i),
                    t.table.options.cellDblClick &&
                      t.table.options.cellDblClick.call(t.table, o, i);
                })
              : o.addEventListener("dblclick", function (e) {
                  if (
                    !t.table.modExists("edit") ||
                    t.table.modules.edit.currentCell !== t
                  ) {
                    e.preventDefault();
                    try {
                      if (document.selection)
                        (o = document.body.createTextRange()).moveToElementText(
                          t.element,
                        ),
                          o.select();
                      else if (window.getSelection) {
                        var o;
                        (o = document.createRange()).selectNode(t.element),
                          window.getSelection().removeAllRanges(),
                          window.getSelection().addRange(o);
                      }
                    } catch (e) {}
                  }
                }),
            (e.cellContext || this.table.options.cellContext) &&
              o.addEventListener("contextmenu", function (o) {
                var i = t.getComponent();
                e.cellContext && e.cellContext.call(t.table, o, i),
                  t.table.options.cellContext &&
                    t.table.options.cellContext.call(t.table, o, i);
              });
        }),
        (m.prototype._bindMouseEvents = function (e) {
          var t = this,
            o = t.element;
          (e.cellMouseEnter || t.table.options.cellMouseEnter) &&
            o.addEventListener("mouseenter", function (o) {
              var i = t.getComponent();
              e.cellMouseEnter && e.cellMouseEnter.call(t.table, o, i),
                t.table.options.cellMouseEnter &&
                  t.table.options.cellMouseEnter.call(t.table, o, i);
            }),
            (e.cellMouseLeave || t.table.options.cellMouseLeave) &&
              o.addEventListener("mouseleave", function (o) {
                var i = t.getComponent();
                e.cellMouseLeave && e.cellMouseLeave.call(t.table, o, i),
                  t.table.options.cellMouseLeave &&
                    t.table.options.cellMouseLeave.call(t.table, o, i);
              }),
            (e.cellMouseOver || t.table.options.cellMouseOver) &&
              o.addEventListener("mouseover", function (o) {
                var i = t.getComponent();
                e.cellMouseOver && e.cellMouseOver.call(t.table, o, i),
                  t.table.options.cellMouseOver &&
                    t.table.options.cellMouseOver.call(t.table, o, i);
              }),
            (e.cellMouseOut || t.table.options.cellMouseOut) &&
              o.addEventListener("mouseout", function (o) {
                var i = t.getComponent();
                e.cellMouseOut && e.cellMouseOut.call(t.table, o, i),
                  t.table.options.cellMouseOut &&
                    t.table.options.cellMouseOut.call(t.table, o, i);
              }),
            (e.cellMouseMove || t.table.options.cellMouseMove) &&
              o.addEventListener("mousemove", function (o) {
                var i = t.getComponent();
                e.cellMouseMove && e.cellMouseMove.call(t.table, o, i),
                  t.table.options.cellMouseMove &&
                    t.table.options.cellMouseMove.call(t.table, o, i);
              });
        }),
        (m.prototype._bindTouchEvents = function (e) {
          var t,
            o,
            i,
            n = this,
            r = n.element;
          (e.cellTap || this.table.options.cellTap) &&
            ((i = !1),
            r.addEventListener(
              "touchstart",
              function (e) {
                i = !0;
              },
              { passive: !0 },
            ),
            r.addEventListener("touchend", function (t) {
              if (i) {
                var o = n.getComponent();
                e.cellTap && e.cellTap.call(n.table, t, o),
                  n.table.options.cellTap &&
                    n.table.options.cellTap.call(n.table, t, o);
              }
              i = !1;
            })),
            (e.cellDblTap || this.table.options.cellDblTap) &&
              ((t = null),
              r.addEventListener("touchend", function (o) {
                if (t) {
                  clearTimeout(t), (t = null);
                  var i = n.getComponent();
                  e.cellDblTap && e.cellDblTap.call(n.table, o, i),
                    n.table.options.cellDblTap &&
                      n.table.options.cellDblTap.call(n.table, o, i);
                } else
                  t = setTimeout(function () {
                    clearTimeout(t), (t = null);
                  }, 300);
              })),
            (e.cellTapHold || this.table.options.cellTapHold) &&
              ((o = null),
              r.addEventListener(
                "touchstart",
                function (t) {
                  clearTimeout(o),
                    (o = setTimeout(function () {
                      clearTimeout(o), (o = null), (i = !1);
                      var r = n.getComponent();
                      e.cellTapHold && e.cellTapHold.call(n.table, t, r),
                        n.table.options.cellTapHold &&
                          n.table.options.cellTapHold.call(n.table, t, r);
                    }, 1e3));
                },
                { passive: !0 },
              ),
              r.addEventListener("touchend", function (e) {
                clearTimeout(o), (o = null);
              }));
        }),
        (m.prototype._generateContents = function () {
          var e;
          switch (
            void 0 ===
            (e = this.table.modExists("format")
              ? this.table.modules.format.formatValue(this)
              : (this.element.innerHTML = this.value))
              ? "undefined"
              : r(e)
          ) {
            case "object":
              if (e instanceof Node) {
                for (; this.element.firstChild; )
                  this.element.removeChild(this.element.firstChild);
                this.element.appendChild(e);
              } else
                (this.element.innerHTML = ""),
                  null != e &&
                    console.warn(
                      "Format Error - Formatter has returned a type of object, the only valid formatter object return is an instance of Node, the formatter returned:",
                      e,
                    );
              break;
            case "undefined":
            case "null":
              this.element.innerHTML = "";
              break;
            default:
              this.element.innerHTML = e;
          }
        }),
        (m.prototype.cellRendered = function () {
          this.table.modExists("format") &&
            this.table.modules.format.cellRendered &&
            this.table.modules.format.cellRendered(this);
        }),
        (m.prototype._generateTooltip = function () {
          var e = this.column.tooltip;
          e
            ? (!0 === e
                ? (e = this.value)
                : "function" == typeof e &&
                  !1 === (e = e(this.getComponent())) &&
                  (e = ""),
              void 0 === e && (e = ""),
              this.element.setAttribute("title", e))
            : this.element.setAttribute("title", "");
        }),
        (m.prototype.getElement = function (e) {
          return (
            this.loaded || ((this.loaded = !0), e || this.layoutElement()),
            this.element
          );
        }),
        (m.prototype.getValue = function () {
          return this.value;
        }),
        (m.prototype.getOldValue = function () {
          return this.oldValue;
        }),
        (m.prototype.setValue = function (e, t) {
          var o;
          this.setValueProcessData(e, t) &&
            (this.table.options.history &&
              this.table.modExists("history") &&
              this.table.modules.history.action("cellEdit", this, {
                oldValue: this.oldValue,
                newValue: this.value,
              }),
            (o = this.getComponent()),
            this.column.cellEvents.cellEdited &&
              this.column.cellEvents.cellEdited.call(this.table, o),
            this.table.options.groupUpdateOnCellEdit &&
              this.table.options.groupBy &&
              this.table.modExists("groupRows") &&
              this.table.modules.groupRows.reassignRowToGroup(this.row),
            this.cellRendered(),
            this.table.options.cellEdited.call(this.table, o),
            this.table.options.dataChanged &&
              this.table.options.dataChanged.call(
                this.table,
                this.table.rowManager.getData(),
              ));
        }),
        (m.prototype.setValueProcessData = function (e, t) {
          var o = !1;
          return (
            this.value != e &&
              ((o = !0),
              t &&
                this.column.modules.mutate &&
                (e = this.table.modules.mutator.transformCell(this, e))),
            this.setValueActual(e),
            o &&
              this.table.modExists("columnCalcs") &&
              (this.column.definition.topCalc ||
                this.column.definition.bottomCalc) &&
              (this.table.options.groupBy && this.table.modExists("groupRows")
                ? (("table" != this.table.options.columnCalcs &&
                    "both" != this.table.options.columnCalcs) ||
                    this.table.modules.columnCalcs.recalc(
                      this.table.rowManager.activeRows,
                    ),
                  "table" != this.table.options.columnCalcs &&
                    this.table.modules.columnCalcs.recalcRowGroup(this.row))
                : this.table.modules.columnCalcs.recalc(
                    this.table.rowManager.activeRows,
                  )),
            o
          );
        }),
        (m.prototype.setValueActual = function (e) {
          (this.oldValue = this.value),
            (this.value = e),
            this.table.options.reactiveData &&
              this.table.modExists("reactiveData") &&
              this.table.modules.reactiveData.block(),
            this.column.setFieldValue(this.row.data, e),
            this.table.options.reactiveData &&
              this.table.modExists("reactiveData") &&
              this.table.modules.reactiveData.unblock(),
            this.loaded && this.layoutElement();
        }),
        (m.prototype.layoutElement = function () {
          this._generateContents(),
            this._generateTooltip(),
            this.table.options.resizableColumns &&
              this.table.modExists("resizeColumns") &&
              "row" === this.row.type &&
              this.table.modules.resizeColumns.initializeColumn(
                "cell",
                this.column,
                this.element,
              ),
            (this.column.definition.contextMenu ||
              this.column.definition.clickMenu) &&
              this.table.modExists("menu") &&
              this.table.modules.menu.initializeCell(this),
            this.table.modExists("frozenColumns") &&
              this.table.modules.frozenColumns.layoutElement(
                this.element,
                this.column,
              );
        }),
        (m.prototype.setWidth = function () {
          (this.width = this.column.width),
            (this.element.style.width = this.column.widthStyled);
        }),
        (m.prototype.clearWidth = function () {
          (this.width = ""), (this.element.style.width = "");
        }),
        (m.prototype.getWidth = function () {
          return this.width || this.element.offsetWidth;
        }),
        (m.prototype.setMinWidth = function () {
          (this.minWidth = this.column.minWidth),
            (this.element.style.minWidth = this.column.minWidthStyled);
        }),
        (m.prototype.setMaxWidth = function () {
          (this.maxWidth = this.column.maxWidth),
            (this.element.style.maxWidth = this.column.maxWidthStyled);
        }),
        (m.prototype.checkHeight = function () {
          this.row.reinitializeHeight();
        }),
        (m.prototype.clearHeight = function () {
          (this.element.style.height = ""), (this.height = null);
        }),
        (m.prototype.setHeight = function () {
          (this.height = this.row.height),
            (this.element.style.height = this.row.heightStyled);
        }),
        (m.prototype.getHeight = function () {
          return this.height || this.element.offsetHeight;
        }),
        (m.prototype.show = function () {
          this.element.style.display = this.column.vertAlign
            ? "inline-flex"
            : "";
        }),
        (m.prototype.hide = function () {
          this.element.style.display = "none";
        }),
        (m.prototype.edit = function (e) {
          if (this.table.modExists("edit", !0))
            return this.table.modules.edit.editCell(this, e);
        }),
        (m.prototype.cancelEdit = function () {
          if (this.table.modExists("edit", !0)) {
            var e = this.table.modules.edit.getCurrentCell();
            e && e._getSelf() === this
              ? this.table.modules.edit.cancelEdit()
              : console.warn(
                  "Cancel Editor Error - This cell is not currently being edited ",
                );
          }
        }),
        (m.prototype.validate = function () {
          return (
            !this.column.modules.validate ||
            !this.table.modExists("validate", !0) ||
            !0 ===
              this.table.modules.validate.validate(
                this.column.modules.validate,
                this,
                this.getValue(),
              )
          );
        }),
        (m.prototype.delete = function () {
          !this.table.rowManager.redrawBlock &&
            this.element.parentNode &&
            this.element.parentNode.removeChild(this.element),
            this.modules.validate &&
              this.modules.validate.invalid &&
              this.table.modules.validate.clearValidation(this),
            this.modules.edit &&
              this.modules.edit.edited &&
              this.table.modules.edit.clearEdited(this),
            this.table.options.history &&
              this.table.modules.history.clearComponentHistory(this),
            (this.element = !1),
            this.column.deleteCell(this),
            this.row.deleteCell(this),
            (this.calcs = {});
        }),
        (m.prototype.nav = function () {
          var e = this,
            t = !1,
            o = this.row.getCellIndex(this);
          return {
            next: function () {
              var t,
                o = this.right();
              return (
                !!o ||
                (!(
                  !(t = e.table.rowManager.nextDisplayRow(e.row, !0)) ||
                  !(o = t.findNextEditableCell(-1))
                ) &&
                  (o.edit(), !0))
              );
            },
            prev: function () {
              var t,
                o = this.left();
              return (
                !!o ||
                (!(
                  !(t = e.table.rowManager.prevDisplayRow(e.row, !0)) ||
                  !(o = t.findPrevEditableCell(t.cells.length))
                ) &&
                  (o.edit(), !0))
              );
            },
            left: function () {
              return !!(t = e.row.findPrevEditableCell(o)) && (t.edit(), !0);
            },
            right: function () {
              return !!(t = e.row.findNextEditableCell(o)) && (t.edit(), !0);
            },
            up: function () {
              var t = e.table.rowManager.prevDisplayRow(e.row, !0);
              t && t.cells[o].edit();
            },
            down: function () {
              var t = e.table.rowManager.nextDisplayRow(e.row, !0);
              t && t.cells[o].edit();
            },
          };
        }),
        (m.prototype.getIndex = function () {
          this.row.getCellIndex(this);
        }),
        (m.prototype.getComponent = function () {
          return (
            this.component || (this.component = new h(this)), this.component
          );
        });
      var f = function (e) {
        (this.table = e),
          (this.active = !1),
          (this.element = this.createElement()),
          (this.external = !1),
          (this.links = []),
          this._initialize();
      };
      (f.prototype.createElement = function () {
        var e = document.createElement("div");
        return e.classList.add("tabulator-footer"), e;
      }),
        (f.prototype._initialize = function (e) {
          if (this.table.options.footerElement)
            if ("string" === r(this.table.options.footerElement))
              "<" === this.table.options.footerElement[0]
                ? (this.element.innerHTML = this.table.options.footerElement)
                : ((this.external = !0),
                  (this.element = document.querySelector(
                    this.table.options.footerElement,
                  )));
            else this.element = this.table.options.footerElement;
        }),
        (f.prototype.getElement = function () {
          return this.element;
        }),
        (f.prototype.append = function (e, t) {
          this.activate(t),
            this.element.appendChild(e),
            this.table.rowManager.adjustTableSize();
        }),
        (f.prototype.prepend = function (e, t) {
          this.activate(t),
            this.element.insertBefore(e, this.element.firstChild),
            this.table.rowManager.adjustTableSize();
        }),
        (f.prototype.remove = function (e) {
          e.parentNode.removeChild(e), this.deactivate();
        }),
        (f.prototype.deactivate = function (e) {
          (this.element.firstChild && !e) ||
            (this.external || this.element.parentNode.removeChild(this.element),
            (this.active = !1));
        }),
        (f.prototype.activate = function (e) {
          this.active ||
            ((this.active = !0),
            this.external ||
              (this.table.element.appendChild(this.getElement()),
              (this.table.element.style.display = ""))),
            e && this.links.push(e);
        }),
        (f.prototype.redraw = function () {
          this.links.forEach(function (e) {
            e.footerRedraw();
          });
        });
      var g = function e(t, o) {
        (this.options = {}),
          (this.columnManager = null),
          (this.rowManager = null),
          (this.footerManager = null),
          (this.vdomHoz = null),
          (this.browser = ""),
          (this.browserSlow = !1),
          (this.browserMobile = !1),
          (this.rtl = !1),
          (this.modules = {}),
          this.initializeElement(t) &&
            (this.initializeOptions(o || {}), this._create()),
          e.prototype.comms.register(this);
      };
      (g.prototype.defaultOptions = {
        height: !1,
        minHeight: !1,
        maxHeight: !1,
        layout: "fitData",
        layoutColumnsOnNewData: !1,
        columnMinWidth: 40,
        columnMaxWidth: !1,
        columnHeaderVertAlign: "top",
        columnVertAlign: !1,
        resizableColumns: !0,
        resizableRows: !1,
        autoResize: !0,
        columns: [],
        cellHozAlign: "",
        cellVertAlign: "",
        headerHozAlign: "",
        data: [],
        autoColumns: !1,
        autoColumnsDefinitions: !1,
        reactiveData: !1,
        nestedFieldSeparator: ".",
        tooltips: !1,
        tooltipsHeader: !1,
        tooltipGenerationMode: "load",
        initialSort: !1,
        initialFilter: !1,
        initialHeaderFilter: !1,
        columnHeaderSortMulti: !0,
        sortOrderReverse: !1,
        headerSort: !0,
        headerSortTristate: !1,
        headerSortElement: "<div class='tabulator-arrow'></div>",
        footerElement: !1,
        index: "id",
        textDirection: "auto",
        keybindings: [],
        tabEndNewRow: !1,
        invalidOptionWarnings: !0,
        clipboard: !1,
        clipboardCopyStyled: !0,
        clipboardCopyConfig: !1,
        clipboardCopyFormatter: !1,
        clipboardCopyRowRange: "active",
        clipboardPasteParser: "table",
        clipboardPasteAction: "insert",
        clipboardCopied: function () {},
        clipboardPasted: function () {},
        clipboardPasteError: function () {},
        downloadDataFormatter: !1,
        downloadReady: function (e, t) {
          return t;
        },
        downloadComplete: !1,
        downloadConfig: {},
        downloadRowRange: "active",
        dataTree: !1,
        dataTreeFilter: !0,
        dataTreeSort: !0,
        dataTreeElementColumn: !1,
        dataTreeBranchElement: !0,
        dataTreeChildIndent: 9,
        dataTreeChildField: "_children",
        dataTreeCollapseElement: !1,
        dataTreeExpandElement: !1,
        dataTreeStartExpanded: !1,
        dataTreeRowExpanded: function () {},
        dataTreeRowCollapsed: function () {},
        dataTreeChildColumnCalcs: !1,
        dataTreeSelectPropagate: !1,
        printAsHtml: !1,
        printFormatter: !1,
        printHeader: !1,
        printFooter: !1,
        printCopyStyle: !0,
        printStyled: !0,
        printVisibleRows: !0,
        printRowRange: "visible",
        printConfig: {},
        addRowPos: "bottom",
        selectable: "highlight",
        selectableRangeMode: "drag",
        selectableRollingSelection: !0,
        selectablePersistence: !0,
        selectableCheck: function (e, t) {
          return !0;
        },
        headerFilterLiveFilterDelay: 300,
        headerFilterPlaceholder: !1,
        headerVisible: !0,
        history: !1,
        locale: !1,
        langs: {},
        virtualDom: !0,
        virtualDomBuffer: 0,
        virtualDomHoz: !1,
        persistentLayout: !1,
        persistentSort: !1,
        persistentFilter: !1,
        persistenceID: "",
        persistenceMode: !0,
        persistenceReaderFunc: !1,
        persistenceWriterFunc: !1,
        persistence: !1,
        responsiveLayout: !1,
        responsiveLayoutCollapseStartOpen: !0,
        responsiveLayoutCollapseUseFormatters: !0,
        responsiveLayoutCollapseFormatter: !1,
        pagination: !1,
        paginationSize: !1,
        paginationInitialPage: 1,
        paginationButtonCount: 5,
        paginationSizeSelector: !1,
        paginationElement: !1,
        paginationDataSent: {},
        paginationDataReceived: {},
        paginationAddRow: "page",
        ajaxURL: !1,
        ajaxURLGenerator: !1,
        ajaxParams: {},
        ajaxConfig: "get",
        ajaxContentType: "form",
        ajaxRequestFunc: !1,
        ajaxLoader: !0,
        ajaxLoaderLoading: !1,
        ajaxLoaderError: !1,
        ajaxFiltering: !1,
        ajaxSorting: !1,
        ajaxProgressiveLoad: !1,
        ajaxProgressiveLoadDelay: 0,
        ajaxProgressiveLoadScrollMargin: 0,
        groupBy: !1,
        groupStartOpen: !0,
        groupValues: !1,
        groupUpdateOnCellEdit: !1,
        groupHeader: !1,
        groupHeaderPrint: null,
        groupHeaderClipboard: null,
        groupHeaderHtmlOutput: null,
        groupHeaderDownload: null,
        htmlOutputConfig: !1,
        movableColumns: !1,
        movableRows: !1,
        movableRowsConnectedTables: !1,
        movableRowsConnectedElements: !1,
        movableRowsSender: !1,
        movableRowsReceiver: "insert",
        movableRowsSendingStart: function () {},
        movableRowsSent: function () {},
        movableRowsSentFailed: function () {},
        movableRowsSendingStop: function () {},
        movableRowsReceivingStart: function () {},
        movableRowsReceived: function () {},
        movableRowsReceivedFailed: function () {},
        movableRowsReceivingStop: function () {},
        movableRowsElementDrop: function () {},
        scrollToRowPosition: "top",
        scrollToRowIfVisible: !0,
        scrollToColumnPosition: "left",
        scrollToColumnIfVisible: !0,
        rowFormatter: !1,
        rowFormatterPrint: null,
        rowFormatterClipboard: null,
        rowFormatterHtmlOutput: null,
        placeholder: !1,
        tableBuilding: function () {},
        tableBuilt: function () {},
        renderStarted: function () {},
        renderComplete: function () {},
        rowClick: !1,
        rowDblClick: !1,
        rowContext: !1,
        rowTap: !1,
        rowDblTap: !1,
        rowTapHold: !1,
        rowMouseEnter: !1,
        rowMouseLeave: !1,
        rowMouseOver: !1,
        rowMouseOut: !1,
        rowMouseMove: !1,
        rowContextMenu: !1,
        rowClickMenu: !1,
        rowAdded: function () {},
        rowDeleted: function () {},
        rowMoved: function () {},
        rowUpdated: function () {},
        rowSelectionChanged: function () {},
        rowSelected: function () {},
        rowDeselected: function () {},
        rowResized: function () {},
        cellClick: !1,
        cellDblClick: !1,
        cellContext: !1,
        cellTap: !1,
        cellDblTap: !1,
        cellTapHold: !1,
        cellMouseEnter: !1,
        cellMouseLeave: !1,
        cellMouseOver: !1,
        cellMouseOut: !1,
        cellMouseMove: !1,
        cellEditing: function () {},
        cellEdited: function () {},
        cellEditCancelled: function () {},
        columnMoved: !1,
        columnResized: function () {},
        columnTitleChanged: function () {},
        columnVisibilityChanged: function () {},
        htmlImporting: function () {},
        htmlImported: function () {},
        dataLoading: function () {},
        dataLoaded: function () {},
        dataEdited: !1,
        dataChanged: !1,
        ajaxRequesting: function () {},
        ajaxResponse: !1,
        ajaxError: function () {},
        dataFiltering: !1,
        dataFiltered: !1,
        dataSorting: function () {},
        dataSorted: function () {},
        groupToggleElement: "arrow",
        groupClosedShowCalcs: !1,
        dataGrouping: function () {},
        dataGrouped: !1,
        groupVisibilityChanged: function () {},
        groupClick: !1,
        groupDblClick: !1,
        groupContext: !1,
        groupContextMenu: !1,
        groupClickMenu: !1,
        groupTap: !1,
        groupDblTap: !1,
        groupTapHold: !1,
        columnCalcs: !0,
        pageLoaded: function () {},
        localized: function () {},
        validationMode: "blocking",
        validationFailed: function () {},
        historyUndo: function () {},
        historyRedo: function () {},
        scrollHorizontal: function () {},
        scrollVertical: function () {},
      }),
        (g.prototype.initializeOptions = function (e) {
          if (!1 !== e.invalidOptionWarnings)
            for (var t in e)
              void 0 === this.defaultOptions[t] &&
                console.warn("Invalid table constructor option:", t);
          for (var t in this.defaultOptions)
            t in e
              ? (this.options[t] = e[t])
              : Array.isArray(this.defaultOptions[t])
              ? (this.options[t] = Object.assign([], this.defaultOptions[t]))
              : "object" === r(this.defaultOptions[t]) &&
                null !== this.defaultOptions[t]
              ? (this.options[t] = Object.assign({}, this.defaultOptions[t]))
              : (this.options[t] = this.defaultOptions[t]);
        }),
        (g.prototype.initializeElement = function (e) {
          return "undefined" != typeof HTMLElement && e instanceof HTMLElement
            ? ((this.element = e), !0)
            : "string" == typeof e
            ? ((this.element = document.querySelector(e)),
              !!this.element ||
                (console.error(
                  "Tabulator Creation Error - no element found matching selector: ",
                  e,
                ),
                !1))
            : (console.error(
                "Tabulator Creation Error - Invalid element provided:",
                e,
              ),
              !1);
        }),
        (g.prototype.rtlCheck = function () {
          var e = window.getComputedStyle(this.element);
          switch (this.options.textDirection) {
            case "auto":
              if ("rtl" !== e.direction) break;
            case "rtl":
              this.element.classList.add("tabulator-rtl"), (this.rtl = !0);
              break;
            case "ltr":
              this.element.classList.add("tabulator-ltr");
            default:
              this.rtl = !1;
          }
        }),
        (g.prototype._mapDepricatedFunctionality = function () {
          (this.options.persistentLayout ||
            this.options.persistentSort ||
            this.options.persistentFilter) &&
            (this.options.persistence || (this.options.persistence = {})),
            this.options.dataEdited &&
              (console.warn(
                "DEPRECATION WARNING - dataEdited option has been deprecated, please use the dataChanged option instead",
              ),
              (this.options.dataChanged = this.options.dataEdited)),
            this.options.downloadDataFormatter &&
              console.warn(
                "DEPRECATION WARNING - downloadDataFormatter option has been deprecated",
              ),
            void 0 !== this.options.clipboardCopyHeader &&
              ((this.options.columnHeaders = this.options.clipboardCopyHeader),
              console.warn(
                "DEPRECATION WARNING - clipboardCopyHeader option has been deprecated, please use the columnHeaders property on the clipboardCopyConfig option",
              )),
            !0 !== this.options.printVisibleRows &&
              (console.warn(
                "printVisibleRows option is deprecated, you should now use the printRowRange option",
              ),
              (this.options.persistence.printRowRange = "active")),
            !0 !== this.options.printCopyStyle &&
              (console.warn(
                "printCopyStyle option is deprecated, you should now use the printStyled option",
              ),
              (this.options.persistence.printStyled =
                this.options.printCopyStyle)),
            this.options.persistentLayout &&
              (console.warn(
                "persistentLayout option is deprecated, you should now use the persistence option",
              ),
              !0 !== this.options.persistence &&
                void 0 === this.options.persistence.columns &&
                (this.options.persistence.columns = !0)),
            this.options.persistentSort &&
              (console.warn(
                "persistentSort option is deprecated, you should now use the persistence option",
              ),
              !0 !== this.options.persistence &&
                void 0 === this.options.persistence.sort &&
                (this.options.persistence.sort = !0)),
            this.options.persistentFilter &&
              (console.warn(
                "persistentFilter option is deprecated, you should now use the persistence option",
              ),
              !0 !== this.options.persistence &&
                void 0 === this.options.persistence.filter &&
                (this.options.persistence.filter = !0)),
            this.options.columnVertAlign &&
              (console.warn(
                "columnVertAlign option is deprecated, you should now use the columnHeaderVertAlign option",
              ),
              (this.options.columnHeaderVertAlign =
                this.options.columnVertAlign));
        }),
        (g.prototype._clearSelection = function () {
          this.element.classList.add("tabulator-block-select"),
            window.getSelection
              ? window.getSelection().empty
                ? window.getSelection().empty()
                : window.getSelection().removeAllRanges &&
                  window.getSelection().removeAllRanges()
              : document.selection && document.selection.empty(),
            this.element.classList.remove("tabulator-block-select");
        }),
        (g.prototype._create = function () {
          this._clearObjectPointers(),
            this._mapDepricatedFunctionality(),
            this.bindModules(),
            this.rtlCheck(),
            "TABLE" === this.element.tagName &&
              this.modExists("htmlTableImport", !0) &&
              this.modules.htmlTableImport.parseTable(),
            (this.columnManager = new a(this)),
            (this.rowManager = new c(this)),
            (this.footerManager = new f(this)),
            this.columnManager.setRowManager(this.rowManager),
            this.rowManager.setColumnManager(this.columnManager),
            this.options.virtualDomHoz && (this.vdomHoz = new u(this)),
            this._buildElement(),
            this._loadInitialData();
        }),
        (g.prototype._clearObjectPointers = function () {
          (this.options.columns = this.options.columns.slice(0)),
            this.options.reactiveData ||
              (this.options.data = this.options.data.slice(0));
        }),
        (g.prototype._buildElement = function () {
          var e = this,
            t = this.element,
            o = this.modules,
            i = this.options;
          for (
            i.tableBuilding.call(this),
              t.classList.add("tabulator"),
              t.setAttribute("role", "grid");
            t.firstChild;

          )
            t.removeChild(t.firstChild);
          for (var n in (i.height &&
            ((i.height = isNaN(i.height) ? i.height : i.height + "px"),
            (t.style.height = i.height)),
          !1 !== i.minHeight &&
            ((i.minHeight = isNaN(i.minHeight)
              ? i.minHeight
              : i.minHeight + "px"),
            (t.style.minHeight = i.minHeight)),
          !1 !== i.maxHeight &&
            ((i.maxHeight = isNaN(i.maxHeight)
              ? i.maxHeight
              : i.maxHeight + "px"),
            (t.style.maxHeight = i.maxHeight)),
          this.columnManager.initialize(),
          this.rowManager.initialize(),
          this._detectBrowser(),
          this.modExists("layout", !0) && o.layout.initialize(i.layout),
          o.localize.initialize(),
          !1 !== i.headerFilterPlaceholder &&
            o.localize.setHeaderFilterPlaceholder(i.headerFilterPlaceholder),
          i.langs))
            o.localize.installLang(n, i.langs[n]);
          if (
            (o.localize.setLocale(i.locale), "string" == typeof i.placeholder)
          ) {
            var r = document.createElement("div");
            r.classList.add("tabulator-placeholder");
            var a = document.createElement("span");
            (a.innerHTML = i.placeholder),
              r.appendChild(a),
              (i.placeholder = r);
          }
          if (
            (t.appendChild(this.columnManager.getElement()),
            t.appendChild(this.rowManager.getElement()),
            i.footerElement && this.footerManager.activate(),
            i.persistence &&
              this.modExists("persistence", !0) &&
              o.persistence.initialize(),
            i.movableRows &&
              this.modExists("moveRow") &&
              o.moveRow.initialize(),
            i.autoColumns &&
              this.options.data &&
              this.columnManager.generateColumnsFromRowData(this.options.data),
            this.modExists("columnCalcs") && o.columnCalcs.initialize(),
            this.columnManager.setColumns(i.columns),
            i.dataTree &&
              this.modExists("dataTree", !0) &&
              o.dataTree.initialize(),
            this.modExists("frozenRows") &&
              this.modules.frozenRows.initialize(),
            ((i.persistence &&
              this.modExists("persistence", !0) &&
              o.persistence.config.sort) ||
              i.initialSort) &&
              this.modExists("sort", !0))
          ) {
            var s = [];
            i.persistence &&
            this.modExists("persistence", !0) &&
            o.persistence.config.sort
              ? !1 === (s = o.persistence.load("sort")) &&
                i.initialSort &&
                (s = i.initialSort)
              : i.initialSort && (s = i.initialSort),
              o.sort.setSort(s);
          }
          if (
            ((i.persistence &&
              this.modExists("persistence", !0) &&
              o.persistence.config.filter) ||
              i.initialFilter) &&
            this.modExists("filter", !0)
          ) {
            var l = [];
            i.persistence &&
            this.modExists("persistence", !0) &&
            o.persistence.config.filter
              ? !1 === (l = o.persistence.load("filter")) &&
                i.initialFilter &&
                (l = i.initialFilter)
              : i.initialFilter && (l = i.initialFilter),
              o.filter.setFilter(l);
          }
          i.initialHeaderFilter &&
            this.modExists("filter", !0) &&
            i.initialHeaderFilter.forEach(function (t) {
              var i = e.columnManager.findColumn(t.field);
              if (!i)
                return (
                  console.warn(
                    "Column Filter Error - No matching column found:",
                    t.field,
                  ),
                  !1
                );
              o.filter.setHeaderFilterValue(i, t.value);
            }),
            this.modExists("ajax") && o.ajax.initialize(),
            i.pagination && this.modExists("page", !0) && o.page.initialize(),
            i.groupBy &&
              this.modExists("groupRows", !0) &&
              o.groupRows.initialize(),
            this.modExists("keybindings") && o.keybindings.initialize(),
            this.modExists("selectRow") && o.selectRow.clearSelectionData(!0),
            i.autoResize &&
              this.modExists("resizeTable") &&
              o.resizeTable.initialize(),
            this.modExists("clipboard") && o.clipboard.initialize(),
            i.printAsHtml && this.modExists("print") && o.print.initialize(),
            i.tableBuilt.call(this);
        }),
        (g.prototype._loadInitialData = function () {
          var e = this;
          if (e.options.pagination && e.modExists("page"))
            if (
              (e.modules.page.reset(!0, !0), "local" == e.options.pagination)
            ) {
              if (e.options.data.length)
                e.rowManager.setData(e.options.data, !1, !0);
              else {
                if (
                  (e.options.ajaxURL || e.options.ajaxURLGenerator) &&
                  e.modExists("ajax")
                )
                  return void e.modules.ajax
                    .loadData(!1, !0)
                    .then(function () {})
                    .catch(function () {
                      e.options.paginationInitialPage &&
                        e.modules.page.setPage(e.options.paginationInitialPage);
                    });
                e.rowManager.setData(e.options.data, !1, !0);
              }
              e.options.paginationInitialPage &&
                e.modules.page.setPage(e.options.paginationInitialPage);
            } else
              e.options.ajaxURL
                ? e.modules.page
                    .setPage(e.options.paginationInitialPage)
                    .then(function () {})
                    .catch(function () {})
                : e.rowManager.setData([], !1, !0);
          else
            e.options.data.length
              ? e.rowManager.setData(e.options.data)
              : (e.options.ajaxURL || e.options.ajaxURLGenerator) &&
                e.modExists("ajax")
              ? e.modules.ajax
                  .loadData(!1, !0)
                  .then(function () {})
                  .catch(function () {})
              : e.rowManager.setData(e.options.data, !1, !0);
        }),
        (g.prototype.destroy = function () {
          var e = this.element;
          for (
            g.prototype.comms.deregister(this),
              this.options.reactiveData &&
                this.modExists("reactiveData", !0) &&
                this.modules.reactiveData.unwatchData(),
              this.rowManager.rows.forEach(function (e) {
                e.wipe();
              }),
              this.rowManager.rows = [],
              this.rowManager.activeRows = [],
              this.rowManager.displayRows = [],
              this.options.autoResize &&
                this.modExists("resizeTable") &&
                this.modules.resizeTable.clearBindings(),
              this.modExists("keybindings") &&
                this.modules.keybindings.clearBindings();
            e.firstChild;

          )
            e.removeChild(e.firstChild);
          e.classList.remove("tabulator");
        }),
        (g.prototype._detectBrowser = function () {
          var e = navigator.userAgent || navigator.vendor || window.opera;
          e.indexOf("Trident") > -1
            ? ((this.browser = "ie"), (this.browserSlow = !0))
            : e.indexOf("Edge") > -1
            ? ((this.browser = "edge"), (this.browserSlow = !0))
            : e.indexOf("Firefox") > -1
            ? ((this.browser = "firefox"), (this.browserSlow = !1))
            : ((this.browser = "other"), (this.browserSlow = !1)),
            (this.browserMobile =
              /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
                e,
              ) ||
              /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
                e.substr(0, 4),
              ));
        }),
        (g.prototype.blockRedraw = function () {
          return this.rowManager.blockRedraw();
        }),
        (g.prototype.restoreRedraw = function () {
          return this.rowManager.restoreRedraw();
        }),
        (g.prototype.setDataFromLocalFile = function (e) {
          var t = this;
          return new Promise(function (o, i) {
            var n = document.createElement("input");
            (n.type = "file"),
              (n.accept = e || ".json,application/json"),
              n.addEventListener("change", function (e) {
                var r,
                  a = n.files[0],
                  s = new FileReader();
                s.readAsText(a),
                  (s.onload = function (e) {
                    try {
                      r = JSON.parse(s.result);
                    } catch (e) {
                      return (
                        console.warn(
                          "File Load Error - File contents is invalid JSON",
                          e,
                        ),
                        void i(e)
                      );
                    }
                    t.setData(r)
                      .then(function (e) {
                        o(e);
                      })
                      .catch(function (e) {
                        o(e);
                      });
                  }),
                  (s.onerror = function (e) {
                    console.warn("File Load Error - Unable to read file"), i();
                  });
              }),
              n.click();
          });
        }),
        (g.prototype.setData = function (e, t, o) {
          return (
            this.modExists("ajax") && this.modules.ajax.blockActiveRequest(),
            this._setData(e, t, o, !1, !0)
          );
        }),
        (g.prototype._setData = function (e, t, o, i, n) {
          var r = this;
          return "string" != typeof e
            ? e
              ? r.rowManager.setData(e, i, n)
              : r.modExists("ajax") &&
                (r.modules.ajax.getUrl || r.options.ajaxURLGenerator)
              ? "remote" == r.options.pagination && r.modExists("page", !0)
                ? (r.modules.page.reset(!0, !0), r.modules.page.setPage(1))
                : r.modules.ajax.loadData(i, n)
              : r.rowManager.setData([], i, n)
            : 0 == e.indexOf("{") || 0 == e.indexOf("[")
            ? r.rowManager.setData(JSON.parse(e), i, n)
            : r.modExists("ajax", !0)
            ? (t && r.modules.ajax.setParams(t),
              o && r.modules.ajax.setConfig(o),
              r.modules.ajax.setUrl(e),
              "remote" == r.options.pagination && r.modExists("page", !0)
                ? (r.modules.page.reset(!0, !0), r.modules.page.setPage(1))
                : r.modules.ajax.loadData(i, n))
            : void 0;
        }),
        (g.prototype.clearData = function () {
          this.modExists("ajax") && this.modules.ajax.blockActiveRequest(),
            this.rowManager.clearData();
        }),
        (g.prototype.getData = function (e) {
          return (
            !0 === e &&
              (console.warn(
                "passing a boolean to the getData function is deprecated, you should now pass the string 'active'",
              ),
              (e = "active")),
            this.rowManager.getData(e)
          );
        }),
        (g.prototype.getDataCount = function (e) {
          return (
            !0 === e &&
              (console.warn(
                "passing a boolean to the getDataCount function is deprecated, you should now pass the string 'active'",
              ),
              (e = "active")),
            this.rowManager.getDataCount(e)
          );
        }),
        (g.prototype.searchRows = function (e, t, o) {
          if (this.modExists("filter", !0))
            return this.modules.filter.search("rows", e, t, o);
        }),
        (g.prototype.searchData = function (e, t, o) {
          if (this.modExists("filter", !0))
            return this.modules.filter.search("data", e, t, o);
        }),
        (g.prototype.getHtml = function (e, t, o) {
          if (this.modExists("export", !0))
            return this.modules.export.getHtml(e, t, o);
        }),
        (g.prototype.print = function (e, t, o) {
          if (this.modExists("print", !0))
            return this.modules.print.printFullscreen(e, t, o);
        }),
        (g.prototype.getAjaxUrl = function () {
          if (this.modExists("ajax", !0)) return this.modules.ajax.getUrl();
        }),
        (g.prototype.replaceData = function (e, t, o) {
          return (
            this.modExists("ajax") && this.modules.ajax.blockActiveRequest(),
            this._setData(e, t, o, !0)
          );
        }),
        (g.prototype.updateData = function (e) {
          var t = this,
            o = this,
            i = 0;
          return new Promise(function (n, r) {
            t.modExists("ajax") && t.modules.ajax.blockActiveRequest(),
              "string" == typeof e && (e = JSON.parse(e)),
              e
                ? e.forEach(function (e) {
                    var t = o.rowManager.findRow(e[o.options.index]);
                    t &&
                      (i++,
                      t.updateData(e).then(function () {
                        --i || n();
                      }));
                  })
                : (console.warn("Update Error - No data provided"),
                  r("Update Error - No data provided"));
          });
        }),
        (g.prototype.addData = function (e, t, o) {
          var i = this;
          return new Promise(function (n, r) {
            i.modExists("ajax") && i.modules.ajax.blockActiveRequest(),
              "string" == typeof e && (e = JSON.parse(e)),
              e
                ? i.rowManager.addRows(e, t, o).then(function (e) {
                    var t = [];
                    e.forEach(function (e) {
                      t.push(e.getComponent());
                    }),
                      n(t);
                  })
                : (console.warn("Update Error - No data provided"),
                  r("Update Error - No data provided"));
          });
        }),
        (g.prototype.updateOrAddData = function (e) {
          var t = this,
            o = this,
            i = [],
            n = 0;
          return new Promise(function (r, a) {
            t.modExists("ajax") && t.modules.ajax.blockActiveRequest(),
              "string" == typeof e && (e = JSON.parse(e)),
              e
                ? e.forEach(function (e) {
                    var t = o.rowManager.findRow(e[o.options.index]);
                    n++,
                      t
                        ? t.updateData(e).then(function () {
                            n--, i.push(t.getComponent()), n || r(i);
                          })
                        : o.rowManager.addRows(e).then(function (e) {
                            n--, i.push(e[0].getComponent()), n || r(i);
                          });
                  })
                : (console.warn("Update Error - No data provided"),
                  a("Update Error - No data provided"));
          });
        }),
        (g.prototype.getRow = function (e) {
          var t = this.rowManager.findRow(e);
          return t
            ? t.getComponent()
            : (console.warn("Find Error - No matching row found:", e), !1);
        }),
        (g.prototype.getRowFromPosition = function (e, t) {
          var o = this.rowManager.getRowFromPosition(e, t);
          return o
            ? o.getComponent()
            : (console.warn("Find Error - No matching row found:", e), !1);
        }),
        (g.prototype.deleteRow = function (e) {
          var t = this;
          return new Promise(function (o, i) {
            var n = t,
              r = 0,
              a = 0,
              s = [];
            function l() {
              ++r == e.length && a && (n.rowManager.reRenderInPosition(), o());
            }
            Array.isArray(e) || (e = [e]),
              e.forEach(function (e) {
                var o = t.rowManager.findRow(e, !0);
                o
                  ? s.push(o)
                  : (console.warn("Delete Error - No matching row found:", e),
                    i("Delete Error - No matching row found"),
                    l());
              }),
              s.sort(function (e, o) {
                return t.rowManager.rows.indexOf(e) >
                  t.rowManager.rows.indexOf(o)
                  ? 1
                  : -1;
              }),
              s.forEach(function (e) {
                e.delete()
                  .then(function () {
                    a++, l();
                  })
                  .catch(function (e) {
                    l(), i(e);
                  });
              });
          });
        }),
        (g.prototype.addRow = function (e, t, o) {
          var i = this;
          return new Promise(function (n, r) {
            "string" == typeof e && (e = JSON.parse(e)),
              i.rowManager.addRows(e, t, o).then(function (e) {
                i.modExists("columnCalcs") &&
                  i.modules.columnCalcs.recalc(i.rowManager.activeRows),
                  n(e[0].getComponent());
              });
          });
        }),
        (g.prototype.updateOrAddRow = function (e, t) {
          var o = this;
          return new Promise(function (i, n) {
            var r = o.rowManager.findRow(e);
            "string" == typeof t && (t = JSON.parse(t)),
              r
                ? r
                    .updateData(t)
                    .then(function () {
                      o.modExists("columnCalcs") &&
                        o.modules.columnCalcs.recalc(o.rowManager.activeRows),
                        i(r.getComponent());
                    })
                    .catch(function (e) {
                      n(e);
                    })
                : (r = o.rowManager
                    .addRows(t)
                    .then(function (e) {
                      o.modExists("columnCalcs") &&
                        o.modules.columnCalcs.recalc(o.rowManager.activeRows),
                        i(e[0].getComponent());
                    })
                    .catch(function (e) {
                      n(e);
                    }));
          });
        }),
        (g.prototype.updateRow = function (e, t) {
          var o = this;
          return new Promise(function (i, n) {
            var r = o.rowManager.findRow(e);
            "string" == typeof t && (t = JSON.parse(t)),
              r
                ? r
                    .updateData(t)
                    .then(function () {
                      i(r.getComponent());
                    })
                    .catch(function (e) {
                      n(e);
                    })
                : (console.warn("Update Error - No matching row found:", e),
                  n("Update Error - No matching row found"));
          });
        }),
        (g.prototype.scrollToRow = function (e, t, o) {
          var i = this;
          return new Promise(function (n, r) {
            var a = i.rowManager.findRow(e);
            a
              ? i.rowManager
                  .scrollToRow(a, t, o)
                  .then(function () {
                    n();
                  })
                  .catch(function (e) {
                    r(e);
                  })
              : (console.warn("Scroll Error - No matching row found:", e),
                r("Scroll Error - No matching row found"));
          });
        }),
        (g.prototype.moveRow = function (e, t, o) {
          var i = this.rowManager.findRow(e);
          i
            ? i.moveToRow(t, o)
            : console.warn("Move Error - No matching row found:", e);
        }),
        (g.prototype.getRows = function (e) {
          return (
            !0 === e &&
              (console.warn(
                "passing a boolean to the getRows function is deprecated, you should now pass the string 'active'",
              ),
              (e = "active")),
            this.rowManager.getComponents(e)
          );
        }),
        (g.prototype.getRowPosition = function (e, t) {
          var o = this.rowManager.findRow(e);
          return o
            ? this.rowManager.getRowPosition(o, t)
            : (console.warn("Position Error - No matching row found:", e), !1);
        }),
        (g.prototype.copyToClipboard = function (e) {
          this.modExists("clipboard", !0) && this.modules.clipboard.copy(e);
        }),
        (g.prototype.setColumns = function (e) {
          this.columnManager.setColumns(e);
        }),
        (g.prototype.getColumns = function (e) {
          return this.columnManager.getComponents(e);
        }),
        (g.prototype.getColumn = function (e) {
          var t = this.columnManager.findColumn(e);
          return t
            ? t.getComponent()
            : (console.warn("Find Error - No matching column found:", e), !1);
        }),
        (g.prototype.getColumnDefinitions = function () {
          return this.columnManager.getDefinitionTree();
        }),
        (g.prototype.getColumnLayout = function () {
          if (this.modExists("persistence", !0))
            return this.modules.persistence.parseColumns(
              this.columnManager.getColumns(),
            );
        }),
        (g.prototype.setColumnLayout = function (e) {
          return (
            !!this.modExists("persistence", !0) &&
            (this.columnManager.setColumns(
              this.modules.persistence.mergeDefinition(this.options.columns, e),
            ),
            !0)
          );
        }),
        (g.prototype.showColumn = function (e) {
          var t = this.columnManager.findColumn(e);
          if (!t)
            return (
              console.warn("Column Show Error - No matching column found:", e),
              !1
            );
          t.show(),
            this.options.responsiveLayout &&
              this.modExists("responsiveLayout", !0) &&
              this.modules.responsiveLayout.update();
        }),
        (g.prototype.hideColumn = function (e) {
          var t = this.columnManager.findColumn(e);
          if (!t)
            return (
              console.warn("Column Hide Error - No matching column found:", e),
              !1
            );
          t.hide(),
            this.options.responsiveLayout &&
              this.modExists("responsiveLayout", !0) &&
              this.modules.responsiveLayout.update();
        }),
        (g.prototype.toggleColumn = function (e) {
          var t = this.columnManager.findColumn(e);
          if (!t)
            return (
              console.warn(
                "Column Visibility Toggle Error - No matching column found:",
                e,
              ),
              !1
            );
          t.visible ? t.hide() : t.show();
        }),
        (g.prototype.addColumn = function (e, t, o) {
          var i = this;
          return new Promise(function (n, r) {
            var a = i.columnManager.findColumn(o);
            i.columnManager
              .addColumn(e, t, a)
              .then(function (e) {
                n(e.getComponent());
              })
              .catch(function (e) {
                r(e);
              });
          });
        }),
        (g.prototype.deleteColumn = function (e) {
          var t = this;
          return new Promise(function (o, i) {
            var n = t.columnManager.findColumn(e);
            n
              ? n
                  .delete()
                  .then(function () {
                    o();
                  })
                  .catch(function (e) {
                    i(e);
                  })
              : (console.warn(
                  "Column Delete Error - No matching column found:",
                  e,
                ),
                i());
          });
        }),
        (g.prototype.updateColumnDefinition = function (e, t) {
          var o = this;
          return new Promise(function (i, n) {
            var r = o.columnManager.findColumn(e);
            r
              ? r
                  .updateDefinition(t)
                  .then(function (e) {
                    i(e);
                  })
                  .catch(function (e) {
                    n(e);
                  })
              : (console.warn(
                  "Column Update Error - No matching column found:",
                  e,
                ),
                n());
          });
        }),
        (g.prototype.moveColumn = function (e, t, o) {
          var i = this.columnManager.findColumn(e),
            n = this.columnManager.findColumn(t);
          i
            ? n
              ? this.columnManager.moveColumn(i, n, o)
              : console.warn("Move Error - No matching column found:", n)
            : console.warn("Move Error - No matching column found:", e);
        }),
        (g.prototype.scrollToColumn = function (e, t, o) {
          var i = this;
          return new Promise(function (n, r) {
            var a = i.columnManager.findColumn(e);
            a
              ? i.columnManager
                  .scrollToColumn(a, t, o)
                  .then(function () {
                    n();
                  })
                  .catch(function (e) {
                    r(e);
                  })
              : (console.warn("Scroll Error - No matching column found:", e),
                r("Scroll Error - No matching column found"));
          });
        }),
        (g.prototype.setLocale = function (e) {
          this.modules.localize.setLocale(e);
        }),
        (g.prototype.getLocale = function () {
          return this.modules.localize.getLocale();
        }),
        (g.prototype.getLang = function (e) {
          return this.modules.localize.getLang(e);
        }),
        (g.prototype.redraw = function (e) {
          this.columnManager.redraw(e), this.rowManager.redraw(e);
        }),
        (g.prototype.setHeight = function (e) {
          "classic" !== this.rowManager.renderMode
            ? ((this.options.height = isNaN(e) ? e : e + "px"),
              (this.element.style.height = this.options.height),
              this.rowManager.setRenderMode(),
              this.rowManager.redraw())
            : console.warn(
                "setHeight function is not available in classic render mode",
              );
        }),
        (g.prototype.setSort = function (e, t) {
          this.modExists("sort", !0) &&
            (this.modules.sort.setSort(e, t), this.rowManager.sorterRefresh());
        }),
        (g.prototype.getSorters = function () {
          if (this.modExists("sort", !0)) return this.modules.sort.getSort();
        }),
        (g.prototype.clearSort = function () {
          this.modExists("sort", !0) &&
            (this.modules.sort.clear(), this.rowManager.sorterRefresh());
        }),
        (g.prototype.setFilter = function (e, t, o, i) {
          this.modExists("filter", !0) &&
            (this.modules.filter.setFilter(e, t, o, i),
            this.rowManager.filterRefresh());
        }),
        (g.prototype.refreshFilter = function () {
          this.modExists("filter", !0) && this.rowManager.filterRefresh();
        }),
        (g.prototype.addFilter = function (e, t, o, i) {
          this.modExists("filter", !0) &&
            (this.modules.filter.addFilter(e, t, o, i),
            this.rowManager.filterRefresh());
        }),
        (g.prototype.getFilters = function (e) {
          if (this.modExists("filter", !0))
            return this.modules.filter.getFilters(e);
        }),
        (g.prototype.setHeaderFilterFocus = function (e) {
          if (this.modExists("filter", !0)) {
            var t = this.columnManager.findColumn(e);
            if (!t)
              return (
                console.warn(
                  "Column Filter Focus Error - No matching column found:",
                  e,
                ),
                !1
              );
            this.modules.filter.setHeaderFilterFocus(t);
          }
        }),
        (g.prototype.getHeaderFilterValue = function (e) {
          if (this.modExists("filter", !0)) {
            var t = this.columnManager.findColumn(e);
            if (t) return this.modules.filter.getHeaderFilterValue(t);
            console.warn("Column Filter Error - No matching column found:", e);
          }
        }),
        (g.prototype.setHeaderFilterValue = function (e, t) {
          if (this.modExists("filter", !0)) {
            var o = this.columnManager.findColumn(e);
            if (!o)
              return (
                console.warn(
                  "Column Filter Error - No matching column found:",
                  e,
                ),
                !1
              );
            this.modules.filter.setHeaderFilterValue(o, t);
          }
        }),
        (g.prototype.getHeaderFilters = function () {
          if (this.modExists("filter", !0))
            return this.modules.filter.getHeaderFilters();
        }),
        (g.prototype.removeFilter = function (e, t, o) {
          this.modExists("filter", !0) &&
            (this.modules.filter.removeFilter(e, t, o),
            this.rowManager.filterRefresh());
        }),
        (g.prototype.clearFilter = function (e) {
          this.modExists("filter", !0) &&
            (this.modules.filter.clearFilter(e),
            this.rowManager.filterRefresh());
        }),
        (g.prototype.clearHeaderFilter = function () {
          this.modExists("filter", !0) &&
            (this.modules.filter.clearHeaderFilter(),
            this.rowManager.filterRefresh());
        }),
        (g.prototype.selectRow = function (e) {
          this.modExists("selectRow", !0) &&
            (!0 === e &&
              (console.warn(
                "passing a boolean to the selectRowselectRow function is deprecated, you should now pass the string 'active'",
              ),
              (e = "active")),
            this.modules.selectRow.selectRows(e));
        }),
        (g.prototype.deselectRow = function (e) {
          this.modExists("selectRow", !0) &&
            this.modules.selectRow.deselectRows(e);
        }),
        (g.prototype.toggleSelectRow = function (e) {
          this.modExists("selectRow", !0) &&
            this.modules.selectRow.toggleRow(e);
        }),
        (g.prototype.getSelectedRows = function () {
          if (this.modExists("selectRow", !0))
            return this.modules.selectRow.getSelectedRows();
        }),
        (g.prototype.getSelectedData = function () {
          if (this.modExists("selectRow", !0))
            return this.modules.selectRow.getSelectedData();
        }),
        (g.prototype.getInvalidCells = function () {
          if (this.modExists("validate", !0))
            return this.modules.validate.getInvalidCells();
        }),
        (g.prototype.clearCellValidation = function (e) {
          var t = this;
          this.modExists("validate", !0) &&
            (e || (e = this.modules.validate.getInvalidCells()),
            Array.isArray(e) || (e = [e]),
            e.forEach(function (e) {
              t.modules.validate.clearValidation(e._getSelf());
            }));
        }),
        (g.prototype.validate = function (e) {
          var t = [];
          return (
            this.rowManager.rows.forEach(function (e) {
              var o = e.validate();
              !0 !== o && (t = t.concat(o));
            }),
            !t.length || t
          );
        }),
        (g.prototype.setMaxPage = function (e) {
          if (!this.options.pagination || !this.modExists("page")) return !1;
          this.modules.page.setMaxPage(e);
        }),
        (g.prototype.setPage = function (e) {
          return this.options.pagination && this.modExists("page")
            ? this.modules.page.setPage(e)
            : new Promise(function (e, t) {
                t();
              });
        }),
        (g.prototype.setPageToRow = function (e) {
          var t = this;
          return new Promise(function (o, i) {
            t.options.pagination &&
            t.modExists("page") &&
            (e = t.rowManager.findRow(e))
              ? t.modules.page
                  .setPageToRow(e)
                  .then(function () {
                    o();
                  })
                  .catch(function () {
                    i();
                  })
              : i();
          });
        }),
        (g.prototype.setPageSize = function (e) {
          if (!this.options.pagination || !this.modExists("page")) return !1;
          this.modules.page.setPageSize(e),
            this.modules.page
              .setPage(1)
              .then(function () {})
              .catch(function () {});
        }),
        (g.prototype.getPageSize = function () {
          if (this.options.pagination && this.modExists("page", !0))
            return this.modules.page.getPageSize();
        }),
        (g.prototype.previousPage = function () {
          if (!this.options.pagination || !this.modExists("page")) return !1;
          this.modules.page.previousPage();
        }),
        (g.prototype.nextPage = function () {
          if (!this.options.pagination || !this.modExists("page")) return !1;
          this.modules.page.nextPage();
        }),
        (g.prototype.getPage = function () {
          return (
            !(!this.options.pagination || !this.modExists("page")) &&
            this.modules.page.getPage()
          );
        }),
        (g.prototype.getPageMax = function () {
          return (
            !(!this.options.pagination || !this.modExists("page")) &&
            this.modules.page.getPageMax()
          );
        }),
        (g.prototype.setGroupBy = function (e) {
          if (!this.modExists("groupRows", !0)) return !1;
          (this.options.groupBy = e),
            this.modules.groupRows.initialize(),
            this.rowManager.refreshActiveData("display"),
            this.options.persistence &&
              this.modExists("persistence", !0) &&
              this.modules.persistence.config.group &&
              this.modules.persistence.save("group");
        }),
        (g.prototype.setGroupValues = function (e) {
          if (!this.modExists("groupRows", !0)) return !1;
          (this.options.groupValues = e),
            this.modules.groupRows.initialize(),
            this.rowManager.refreshActiveData("display"),
            this.options.persistence &&
              this.modExists("persistence", !0) &&
              this.modules.persistence.config.group &&
              this.modules.persistence.save("group");
        }),
        (g.prototype.setGroupStartOpen = function (e) {
          if (!this.modExists("groupRows", !0)) return !1;
          (this.options.groupStartOpen = e),
            this.modules.groupRows.initialize(),
            this.options.groupBy
              ? (this.rowManager.refreshActiveData("group"),
                this.options.persistence &&
                  this.modExists("persistence", !0) &&
                  this.modules.persistence.config.group &&
                  this.modules.persistence.save("group"))
              : console.warn(
                  "Grouping Update - cant refresh view, no groups have been set",
                );
        }),
        (g.prototype.setGroupHeader = function (e) {
          if (!this.modExists("groupRows", !0)) return !1;
          (this.options.groupHeader = e),
            this.modules.groupRows.initialize(),
            this.options.groupBy
              ? (this.rowManager.refreshActiveData("group"),
                this.options.persistence &&
                  this.modExists("persistence", !0) &&
                  this.modules.persistence.config.group &&
                  this.modules.persistence.save("group"))
              : console.warn(
                  "Grouping Update - cant refresh view, no groups have been set",
                );
        }),
        (g.prototype.getGroups = function (e) {
          return (
            !!this.modExists("groupRows", !0) &&
            this.modules.groupRows.getGroups(!0)
          );
        }),
        (g.prototype.getGroupedData = function () {
          if (this.modExists("groupRows", !0))
            return this.options.groupBy
              ? this.modules.groupRows.getGroupedData()
              : this.getData();
        }),
        (g.prototype.getEditedCells = function () {
          if (this.modExists("edit", !0))
            return this.modules.edit.getEditedCells();
        }),
        (g.prototype.clearCellEdited = function (e) {
          var t = this;
          this.modExists("edit", !0) &&
            (e || (e = this.modules.edit.getEditedCells()),
            Array.isArray(e) || (e = [e]),
            e.forEach(function (e) {
              t.modules.edit.clearEdited(e._getSelf());
            }));
        }),
        (g.prototype.getCalcResults = function () {
          return (
            !!this.modExists("columnCalcs", !0) &&
            this.modules.columnCalcs.getResults()
          );
        }),
        (g.prototype.recalc = function () {
          this.modExists("columnCalcs", !0) &&
            this.modules.columnCalcs.recalcAll(this.rowManager.activeRows);
        }),
        (g.prototype.navigatePrev = function () {
          var e = !1;
          return (
            !(
              !this.modExists("edit", !0) ||
              !(e = this.modules.edit.currentCell)
            ) && e.nav().prev()
          );
        }),
        (g.prototype.navigateNext = function () {
          var e = !1;
          return (
            !(
              !this.modExists("edit", !0) ||
              !(e = this.modules.edit.currentCell)
            ) && e.nav().next()
          );
        }),
        (g.prototype.navigateLeft = function () {
          var t = !1;
          return (
            !(
              !this.modExists("edit", !0) ||
              !(t = this.modules.edit.currentCell)
            ) && (e.preventDefault(), t.nav().left())
          );
        }),
        (g.prototype.navigateRight = function () {
          var t = !1;
          return (
            !(
              !this.modExists("edit", !0) ||
              !(t = this.modules.edit.currentCell)
            ) && (e.preventDefault(), t.nav().right())
          );
        }),
        (g.prototype.navigateUp = function () {
          var t = !1;
          return (
            !(
              !this.modExists("edit", !0) ||
              !(t = this.modules.edit.currentCell)
            ) && (e.preventDefault(), t.nav().up())
          );
        }),
        (g.prototype.navigateDown = function () {
          var t = !1;
          return (
            !(
              !this.modExists("edit", !0) ||
              !(t = this.modules.edit.currentCell)
            ) && (e.preventDefault(), t.nav().down())
          );
        }),
        (g.prototype.undo = function () {
          return (
            !(!this.options.history || !this.modExists("history", !0)) &&
            this.modules.history.undo()
          );
        }),
        (g.prototype.redo = function () {
          return (
            !(!this.options.history || !this.modExists("history", !0)) &&
            this.modules.history.redo()
          );
        }),
        (g.prototype.getHistoryUndoSize = function () {
          return (
            !(!this.options.history || !this.modExists("history", !0)) &&
            this.modules.history.getHistoryUndoSize()
          );
        }),
        (g.prototype.getHistoryRedoSize = function () {
          return (
            !(!this.options.history || !this.modExists("history", !0)) &&
            this.modules.history.getHistoryRedoSize()
          );
        }),
        (g.prototype.clearHistory = function () {
          return (
            !(!this.options.history || !this.modExists("history", !0)) &&
            this.modules.history.clear()
          );
        }),
        (g.prototype.download = function (e, t, o, i) {
          this.modExists("download", !0) &&
            this.modules.download.download(e, t, o, i);
        }),
        (g.prototype.downloadToTab = function (e, t, o, i) {
          this.modExists("download", !0) &&
            this.modules.download.download(e, t, o, i, !0);
        }),
        (g.prototype.tableComms = function (e, t, o, i) {
          this.modules.comms.receive(e, t, o, i);
        }),
        (g.prototype.moduleBindings = {}),
        (g.prototype.extendModule = function (e, t, o) {
          if (g.prototype.moduleBindings[e]) {
            var i = g.prototype.moduleBindings[e].prototype[t];
            if (i)
              if ("object" == (void 0 === o ? "undefined" : r(o)))
                for (var n in o) i[n] = o[n];
              else
                console.warn(
                  "Module Error - Invalid value type, it must be an object",
                );
            else console.warn("Module Error - property does not exist:", t);
          } else console.warn("Module Error - module does not exist:", e);
        }),
        (g.prototype.registerModule = function (e, t) {
          g.prototype.moduleBindings[e] = t;
        }),
        (g.prototype.bindModules = function () {
          for (var e in ((this.modules = {}), g.prototype.moduleBindings))
            this.modules[e] = new g.prototype.moduleBindings[e](this);
        }),
        (g.prototype.modExists = function (e, t) {
          return (
            !!this.modules[e] ||
            (t && console.error("Tabulator Module Not Installed: " + e), !1)
          );
        }),
        (g.prototype.helpers = {
          elVisible: function (e) {
            return !(e.offsetWidth <= 0 && e.offsetHeight <= 0);
          },
          elOffset: function (e) {
            var t = e.getBoundingClientRect();
            return {
              top:
                t.top + window.pageYOffset - document.documentElement.clientTop,
              left:
                t.left +
                window.pageXOffset -
                document.documentElement.clientLeft,
            };
          },
          deepClone: function (e) {
            var t = Object.assign(Array.isArray(e) ? [] : {}, e);
            for (var o in e)
              null != e[o] &&
                "object" === r(e[o]) &&
                (e[o] instanceof Date
                  ? (t[o] = new Date(e[o]))
                  : (t[o] = this.deepClone(e[o])));
            return t;
          },
        }),
        (g.prototype.comms = {
          tables: [],
          register: function (e) {
            g.prototype.comms.tables.push(e);
          },
          deregister: function (e) {
            var t = g.prototype.comms.tables.indexOf(e);
            t > -1 && g.prototype.comms.tables.splice(t, 1);
          },
          lookupTable: function (e, t) {
            var o,
              i,
              n = [];
            if ("string" == typeof e) {
              if ((o = document.querySelectorAll(e)).length)
                for (var r = 0; r < o.length; r++)
                  (i = g.prototype.comms.matchElement(o[r])) && n.push(i);
            } else
              ("undefined" != typeof HTMLElement && e instanceof HTMLElement) ||
              e instanceof g
                ? (i = g.prototype.comms.matchElement(e)) && n.push(i)
                : Array.isArray(e)
                ? e.forEach(function (e) {
                    n = n.concat(g.prototype.comms.lookupTable(e));
                  })
                : t ||
                  console.warn("Table Connection Error - Invalid Selector", e);
            return n;
          },
          matchElement: function (e) {
            return g.prototype.comms.tables.find(function (t) {
              return e instanceof g ? t === e : t.element === e;
            });
          },
        }),
        (g.prototype.findTable = function (e) {
          var t = g.prototype.comms.lookupTable(e, !0);
          return !(Array.isArray(t) && !t.length) && t;
        });
      var b = function (e) {
        (this.table = e), (this.mode = null);
      };
      (b.prototype.initialize = function (e) {
        this.modes[e]
          ? (this.mode = e)
          : (console.warn(
              "Layout Error - invalid mode set, defaulting to 'fitData' : " + e,
            ),
            (this.mode = "fitData")),
          this.table.element.setAttribute("tabulator-layout", this.mode);
      }),
        (b.prototype.getMode = function () {
          return this.mode;
        }),
        (b.prototype.layout = function () {
          this.modes[this.mode].call(
            this,
            this.table.columnManager.columnsByIndex,
          ),
            0 === this.mode.indexOf("fitData") &&
              this.table.options.persistence &&
              this.table.modExists("persistence", !0) &&
              this.table.modules.persistence.config.columns &&
              this.table.modules.persistence.save("columns");
        }),
        (b.prototype.modes = {
          fitData: function (e) {
            this.table.options.virtualDomHoz
              ? this.table.vdomHoz.fitDataLayoutOverride()
              : e.forEach(function (e) {
                  e.reinitializeWidth();
                }),
              this.table.options.responsiveLayout &&
                this.table.modExists("responsiveLayout", !0) &&
                this.table.modules.responsiveLayout.update();
          },
          fitDataFill: function (e) {
            e.forEach(function (e) {
              e.reinitializeWidth();
            }),
              this.table.options.responsiveLayout &&
                this.table.modExists("responsiveLayout", !0) &&
                this.table.modules.responsiveLayout.update();
          },
          fitDataTable: function (e) {
            e.forEach(function (e) {
              e.reinitializeWidth();
            }),
              this.table.options.responsiveLayout &&
                this.table.modExists("responsiveLayout", !0) &&
                this.table.modules.responsiveLayout.update();
          },
          fitDataStretch: function (e) {
            var t = this,
              o = 0,
              i = this.table.rowManager.element.clientWidth,
              n = 0,
              r = !1;
            e.forEach(function (e, i) {
              e.widthFixed || e.reinitializeWidth(),
                (t.table.options.responsiveLayout
                  ? e.modules.responsive.visible
                  : e.visible) && (r = e),
                e.visible && (o += e.getWidth());
            }),
              r
                ? ((n = i - o + r.getWidth()),
                  this.table.options.responsiveLayout &&
                    this.table.modExists("responsiveLayout", !0) &&
                    (r.setWidth(0),
                    this.table.modules.responsiveLayout.update()),
                  n > 0 ? r.setWidth(n) : r.reinitializeWidth())
                : this.table.options.responsiveLayout &&
                  this.table.modExists("responsiveLayout", !0) &&
                  this.table.modules.responsiveLayout.update();
          },
          fitColumns: function (e) {
            var t,
              o,
              i = this.table.element.clientWidth,
              n = 0,
              r = 0,
              a = 0,
              s = [],
              l = [],
              c = 0,
              u = 0;
            function d(e) {
              return "string" == typeof e
                ? e.indexOf("%") > -1
                  ? (i / 100) * parseInt(e)
                  : parseInt(e)
                : e;
            }
            function p(e, t, o, i) {
              var n = [],
                r = 0,
                s = 0,
                l = 0,
                c = a,
                u = 0,
                h = 0,
                m = [];
              function f(e) {
                return o * (e.column.definition.widthGrow || 1);
              }
              function g(e) {
                return d(e.width) - o * (e.column.definition.widthShrink || 0);
              }
              return (
                e.forEach(function (e, r) {
                  var a = i ? g(e) : f(e);
                  e.column.minWidth >= a
                    ? n.push(e)
                    : e.column.maxWidth && e.column.maxWidth < a
                    ? ((e.width = e.column.maxWidth),
                      (t -= e.column.maxWidth),
                      (c -= i
                        ? e.column.definition.widthShrink || 1
                        : e.column.definition.widthGrow || 1) &&
                        (o = Math.floor(t / c)))
                    : (m.push(e),
                      (h += i
                        ? e.column.definition.widthShrink || 1
                        : e.column.definition.widthGrow || 1));
                }),
                n.length
                  ? (n.forEach(function (e) {
                      (r += i
                        ? e.width - e.column.minWidth
                        : e.column.minWidth),
                        (e.width = e.column.minWidth);
                    }),
                    (u = (s = t - r) - (l = h ? Math.floor(s / h) : s) * h),
                    (u += p(m, s, l, i)))
                  : ((u = h ? t - Math.floor(t / h) * h : t),
                    m.forEach(function (e) {
                      e.width = i ? g(e) : f(e);
                    })),
                u
              );
            }
            this.table.options.responsiveLayout &&
              this.table.modExists("responsiveLayout", !0) &&
              this.table.modules.responsiveLayout.update(),
              this.table.rowManager.element.scrollHeight >
                this.table.rowManager.element.clientHeight &&
                (i -=
                  this.table.rowManager.element.offsetWidth -
                  this.table.rowManager.element.clientWidth),
              e.forEach(function (e) {
                var t, o, i;
                e.visible &&
                  ((t = e.definition.width),
                  (o = parseInt(e.minWidth)),
                  t
                    ? ((i = d(t)),
                      (n += i > o ? i : o),
                      e.definition.widthShrink &&
                        (l.push({ column: e, width: i > o ? i : o }),
                        (c += e.definition.widthShrink)))
                    : (s.push({ column: e, width: 0 }),
                      (a += e.definition.widthGrow || 1)));
              }),
              (r = i - n),
              (t = Math.floor(r / a));
            u = p(s, r, t, !1);
            s.length && u > 0 && (s[s.length - 1].width += +u),
              s.forEach(function (e) {
                r -= e.width;
              }),
              (o = Math.abs(u) + r) > 0 &&
                c &&
                (u = p(l, o, Math.floor(o / c), !0)),
              l.length && (l[l.length - 1].width -= u),
              s.forEach(function (e) {
                e.column.setWidth(e.width);
              }),
              l.forEach(function (e) {
                e.column.setWidth(e.width);
              });
          },
        }),
        g.prototype.registerModule("layout", b);
      var v = function (e) {
        (this.table = e),
          (this.locale = "default"),
          (this.lang = !1),
          (this.bindings = {}),
          (this.langList = {});
      };
      (v.prototype.initialize = function () {
        this.langList = g.prototype.helpers.deepClone(this.langs);
      }),
        (v.prototype.setHeaderFilterPlaceholder = function (e) {
          this.langList.default.headerFilters.default = e;
        }),
        (v.prototype.setHeaderFilterColumnPlaceholder = function (e, t) {
          (this.langList.default.headerFilters.columns[e] = t),
            this.lang &&
              !this.lang.headerFilters.columns[e] &&
              (this.lang.headerFilters.columns[e] = t);
        }),
        (v.prototype.installLang = function (e, t) {
          this.langList[e]
            ? this._setLangProp(this.langList[e], t)
            : (this.langList[e] = t);
        }),
        (v.prototype._setLangProp = function (e, t) {
          for (var o in t)
            e[o] && "object" == r(e[o])
              ? this._setLangProp(e[o], t[o])
              : (e[o] = t[o]);
        }),
        (v.prototype.setLocale = function (e) {
          var t = this;
          if (
            (!0 === (e = e || "default") &&
              navigator.language &&
              (e = navigator.language.toLowerCase()),
            e && !t.langList[e])
          ) {
            var o = e.split("-")[0];
            t.langList[o]
              ? (console.warn(
                  "Localization Error - Exact matching locale not found, using closest match: ",
                  e,
                  o,
                ),
                (e = o))
              : (console.warn(
                  "Localization Error - Matching locale not found, using default: ",
                  e,
                ),
                (e = "default"));
          }
          (t.locale = e),
            (t.lang = g.prototype.helpers.deepClone(t.langList.default || {})),
            "default" != e &&
              (function e(t, o) {
                for (var i in t)
                  "object" == r(t[i])
                    ? (o[i] || (o[i] = {}), e(t[i], o[i]))
                    : (o[i] = t[i]);
              })(t.langList[e], t.lang),
            t.table.options.localized.call(t.table, t.locale, t.lang),
            t._executeBindings();
        }),
        (v.prototype.getLocale = function (e) {
          return self.locale;
        }),
        (v.prototype.getLang = function (e) {
          return e ? this.langList[e] : this.lang;
        }),
        (v.prototype.getText = function (e, t) {
          var o = (e = t ? e + "|" + t : e).split("|");
          return this._getLangElement(o, this.locale) || "";
        }),
        (v.prototype._getLangElement = function (e, t) {
          var o = this.lang;
          return (
            e.forEach(function (e) {
              var t;
              o && ((t = o[e]), (o = void 0 !== t && t));
            }),
            o
          );
        }),
        (v.prototype.bind = function (e, t) {
          this.bindings[e] || (this.bindings[e] = []),
            this.bindings[e].push(t),
            t(this.getText(e), this.lang);
        }),
        (v.prototype._executeBindings = function () {
          var e = this,
            t = function (t) {
              e.bindings[t].forEach(function (o) {
                o(e.getText(t), e.lang);
              });
            };
          for (var o in e.bindings) t(o);
        }),
        (v.prototype.langs = {
          default: {
            groups: { item: "item", items: "items" },
            columns: {},
            ajax: { loading: "Loading", error: "Error" },
            pagination: {
              page_size: "Page Size",
              page_title: "Show Page",
              first: "First",
              first_title: "First Page",
              last: "Last",
              last_title: "Last Page",
              prev: "Prev",
              prev_title: "Prev Page",
              next: "Next",
              next_title: "Next Page",
              all: "All",
            },
            headerFilters: { default: "filter column...", columns: {} },
          },
        }),
        g.prototype.registerModule("localize", v);
      var y = function (e) {
        this.table = e;
      };
      (y.prototype.getConnections = function (e) {
        var t = this,
          o = [];
        return (
          g.prototype.comms.lookupTable(e).forEach(function (e) {
            t.table !== e && o.push(e);
          }),
          o
        );
      }),
        (y.prototype.send = function (e, t, o, i) {
          var n = this,
            r = this.getConnections(e);
          r.forEach(function (e) {
            e.tableComms(n.table.element, t, o, i);
          }),
            !r.length &&
              e &&
              console.warn(
                "Table Connection Error - No tables matching selector found",
                e,
              );
        }),
        (y.prototype.receive = function (e, t, o, i) {
          if (this.table.modExists(t))
            return this.table.modules[t].commsReceived(e, o, i);
          console.warn("Inter-table Comms Error - no such module:", t);
        }),
        g.prototype.registerModule("comms", y);
      var w = function (e) {
        (this.table = e),
          (this.allowedTypes = [
            "",
            "data",
            "download",
            "clipboard",
            "print",
            "htmlOutput",
          ]);
      };
      (w.prototype.initializeColumn = function (e) {
        var t = this,
          o = !1,
          i = {};
        this.allowedTypes.forEach(function (n) {
          var r,
            a = "accessor" + (n.charAt(0).toUpperCase() + n.slice(1));
          e.definition[a] &&
            (r = t.lookupAccessor(e.definition[a])) &&
            ((o = !0),
            (i[a] = { accessor: r, params: e.definition[a + "Params"] || {} }));
        }),
          o && (e.modules.accessor = i);
      }),
        (w.prototype.lookupAccessor = function (e) {
          var t = !1;
          switch (void 0 === e ? "undefined" : r(e)) {
            case "string":
              this.accessors[e]
                ? (t = this.accessors[e])
                : console.warn(
                    "Accessor Error - No such accessor found, ignoring: ",
                    e,
                  );
              break;
            case "function":
              t = e;
          }
          return t;
        }),
        (w.prototype.transformRow = function (e, t) {
          var o = "accessor" + (t.charAt(0).toUpperCase() + t.slice(1)),
            i = e.getComponent(),
            n = g.prototype.helpers.deepClone(e.data || {});
          return (
            this.table.columnManager.traverse(function (e) {
              var r, a, s, l;
              e.modules.accessor &&
                (a =
                  e.modules.accessor[o] || e.modules.accessor.accessor || !1) &&
                "undefined" != (r = e.getFieldValue(n)) &&
                ((l = e.getComponent()),
                (s =
                  "function" == typeof a.params
                    ? a.params(r, n, t, l, i)
                    : a.params),
                e.setFieldValue(n, a.accessor(r, n, t, s, l, i)));
            }),
            n
          );
        }),
        (w.prototype.accessors = {}),
        g.prototype.registerModule("accessor", w);
      var E = function (e) {
        (this.table = e),
          (this.config = !1),
          (this.url = ""),
          (this.urlGenerator = !1),
          (this.params = !1),
          (this.loaderElement = this.createLoaderElement()),
          (this.msgElement = this.createMsgElement()),
          (this.loadingElement = !1),
          (this.errorElement = !1),
          (this.loaderPromise = !1),
          (this.progressiveLoad = !1),
          (this.loading = !1),
          (this.requestOrder = 0);
      };
      (E.prototype.initialize = function () {
        var e;
        this.loaderElement.appendChild(this.msgElement),
          this.table.options.ajaxLoaderLoading &&
            ("string" == typeof this.table.options.ajaxLoaderLoading
              ? (((e = document.createElement("template")).innerHTML =
                  this.table.options.ajaxLoaderLoading.trim()),
                (this.loadingElement = e.content.firstChild))
              : (this.loadingElement = this.table.options.ajaxLoaderLoading)),
          (this.loaderPromise =
            this.table.options.ajaxRequestFunc || this.defaultLoaderPromise),
          (this.urlGenerator =
            this.table.options.ajaxURLGenerator || this.defaultURLGenerator),
          this.table.options.ajaxLoaderError &&
            ("string" == typeof this.table.options.ajaxLoaderError
              ? (((e = document.createElement("template")).innerHTML =
                  this.table.options.ajaxLoaderError.trim()),
                (this.errorElement = e.content.firstChild))
              : (this.errorElement = this.table.options.ajaxLoaderError)),
          this.table.options.ajaxParams &&
            this.setParams(this.table.options.ajaxParams),
          this.table.options.ajaxConfig &&
            this.setConfig(this.table.options.ajaxConfig),
          this.table.options.ajaxURL && this.setUrl(this.table.options.ajaxURL),
          this.table.options.ajaxProgressiveLoad &&
            (this.table.options.pagination
              ? ((this.progressiveLoad = !1),
                console.error(
                  "Progressive Load Error - Pagination and progressive load cannot be used at the same time",
                ))
              : this.table.modExists("page")
              ? ((this.progressiveLoad =
                  this.table.options.ajaxProgressiveLoad),
                this.table.modules.page.initializeProgressive(
                  this.progressiveLoad,
                ))
              : console.error(
                  "Pagination plugin is required for progressive ajax loading",
                ));
      }),
        (E.prototype.createLoaderElement = function () {
          var e = document.createElement("div");
          return e.classList.add("tabulator-loader"), e;
        }),
        (E.prototype.createMsgElement = function () {
          var e = document.createElement("div");
          return (
            e.classList.add("tabulator-loader-msg"),
            e.setAttribute("role", "alert"),
            e
          );
        }),
        (E.prototype.setParams = function (e, t) {
          if (t)
            for (var o in ((this.params = this.params || {}), e))
              this.params[o] = e[o];
          else this.params = e;
        }),
        (E.prototype.getParams = function () {
          return this.params || {};
        }),
        (E.prototype.setConfig = function (e) {
          if ((this._loadDefaultConfig(), "string" == typeof e))
            this.config.method = e;
          else for (var t in e) this.config[t] = e[t];
        }),
        (E.prototype._loadDefaultConfig = function (e) {
          var t = this;
          if (!t.config || e)
            for (var o in ((t.config = {}), t.defaultConfig))
              t.config[o] = t.defaultConfig[o];
        }),
        (E.prototype.setUrl = function (e) {
          this.url = e;
        }),
        (E.prototype.getUrl = function () {
          return this.url;
        }),
        (E.prototype.loadData = function (e, t) {
          return this.progressiveLoad
            ? this._loadDataProgressive()
            : this._loadDataStandard(e, t);
        }),
        (E.prototype.nextPage = function (e) {
          this.loading ||
            (e <
              (this.table.options.ajaxProgressiveLoadScrollMargin ||
                2 * this.table.rowManager.getElement().clientHeight) &&
              this.table.modules.page
                .nextPage()
                .then(function () {})
                .catch(function () {}));
        }),
        (E.prototype.blockActiveRequest = function () {
          this.requestOrder++;
        }),
        (E.prototype._loadDataProgressive = function () {
          return (
            this.table.rowManager.setData([]),
            this.table.modules.page.setPage(1)
          );
        }),
        (E.prototype._loadDataStandard = function (e, t) {
          var o = this;
          return new Promise(function (i, n) {
            o.sendRequest(e)
              .then(function (r) {
                o.table.rowManager
                  .setData(r, e, t)
                  .then(function () {
                    i();
                  })
                  .catch(function (e) {
                    n(e);
                  });
              })
              .catch(function (e) {
                n(e);
              });
          });
        }),
        (E.prototype.generateParamsList = function (e, t) {
          var o = this,
            i = [];
          if (((t = t || ""), Array.isArray(e)))
            e.forEach(function (e, n) {
              i = i.concat(o.generateParamsList(e, t ? t + "[" + n + "]" : n));
            });
          else if ("object" === (void 0 === e ? "undefined" : r(e)))
            for (var n in e)
              i = i.concat(
                o.generateParamsList(e[n], t ? t + "[" + n + "]" : n),
              );
          else i.push({ key: t, value: e });
          return i;
        }),
        (E.prototype.serializeParams = function (e) {
          var t = this.generateParamsList(e),
            o = [];
          return (
            t.forEach(function (e) {
              o.push(
                encodeURIComponent(e.key) + "=" + encodeURIComponent(e.value),
              );
            }),
            o.join("&")
          );
        }),
        (E.prototype.sendRequest = function (e) {
          var t,
            o = this,
            i = this,
            n = i.url;
          return (
            i.requestOrder++,
            (t = i.requestOrder),
            i._loadDefaultConfig(),
            new Promise(function (r, a) {
              !1 !==
              i.table.options.ajaxRequesting.call(o.table, i.url, i.params)
                ? ((i.loading = !0),
                  e || i.showLoader(),
                  o
                    .loaderPromise(n, i.config, i.params)
                    .then(function (e) {
                      t === i.requestOrder
                        ? (i.table.options.ajaxResponse &&
                            (e = i.table.options.ajaxResponse.call(
                              i.table,
                              i.url,
                              i.params,
                              e,
                            )),
                          r(e),
                          i.hideLoader(),
                          (i.loading = !1))
                        : console.warn(
                            "Ajax Response Blocked - An active ajax request was blocked by an attempt to change table data while the request was being made",
                          );
                    })
                    .catch(function (e) {
                      console.error("Ajax Load Error: ", e),
                        i.table.options.ajaxError.call(i.table, e),
                        i.showError(),
                        setTimeout(function () {
                          i.hideLoader();
                        }, 3e3),
                        (i.loading = !1),
                        a(e);
                    }))
                : a();
            })
          );
        }),
        (E.prototype.showLoader = function () {
          if (
            "function" == typeof this.table.options.ajaxLoader
              ? this.table.options.ajaxLoader()
              : this.table.options.ajaxLoader
          ) {
            for (this.hideLoader(); this.msgElement.firstChild; )
              this.msgElement.removeChild(this.msgElement.firstChild);
            this.msgElement.classList.remove("tabulator-error"),
              this.msgElement.classList.add("tabulator-loading"),
              this.loadingElement
                ? this.msgElement.appendChild(this.loadingElement)
                : (this.msgElement.innerHTML =
                    this.table.modules.localize.getText("ajax|loading")),
              this.table.element.appendChild(this.loaderElement);
          }
        }),
        (E.prototype.showError = function () {
          for (this.hideLoader(); this.msgElement.firstChild; )
            this.msgElement.removeChild(this.msgElement.firstChild);
          this.msgElement.classList.remove("tabulator-loading"),
            this.msgElement.classList.add("tabulator-error"),
            this.errorElement
              ? this.msgElement.appendChild(this.errorElement)
              : (this.msgElement.innerHTML =
                  this.table.modules.localize.getText("ajax|error")),
            this.table.element.appendChild(this.loaderElement);
        }),
        (E.prototype.hideLoader = function () {
          this.loaderElement.parentNode &&
            this.loaderElement.parentNode.removeChild(this.loaderElement);
        }),
        (E.prototype.defaultConfig = { method: "GET" }),
        (E.prototype.defaultURLGenerator = function (e, t, o) {
          return (
            e &&
              o &&
              Object.keys(o).length &&
              ((t.method && "get" != t.method.toLowerCase()) ||
                ((t.method = "get"),
                (e +=
                  (e.includes("?") ? "&" : "?") +
                  this.modules.ajax.serializeParams(o)))),
            e
          );
        }),
        (E.prototype.defaultLoaderPromise = function (e, t, o) {
          var i,
            n = this;
          return new Promise(function (a, s) {
            if (
              ((e = n.urlGenerator.call(n.table, e, t, o)),
              "GET" != t.method.toUpperCase())
            )
              if (
                (i =
                  "object" === r(n.table.options.ajaxContentType)
                    ? n.table.options.ajaxContentType
                    : n.contentTypeFormatters[n.table.options.ajaxContentType])
              ) {
                for (var l in i.headers)
                  t.headers || (t.headers = {}),
                    void 0 === t.headers[l] && (t.headers[l] = i.headers[l]);
                t.body = i.body.call(n, e, t, o);
              } else
                console.warn(
                  "Ajax Error - Invalid ajaxContentType value:",
                  n.table.options.ajaxContentType,
                );
            e
              ? (void 0 === t.headers && (t.headers = {}),
                void 0 === t.headers.Accept &&
                  (t.headers.Accept = "application/json"),
                void 0 === t.headers["X-Requested-With"] &&
                  (t.headers["X-Requested-With"] = "XMLHttpRequest"),
                void 0 === t.mode && (t.mode = "cors"),
                "cors" == t.mode
                  ? (void 0 === t.headers["Access-Control-Allow-Origin"] &&
                      (t.headers["Access-Control-Allow-Origin"] =
                        window.location.origin),
                    void 0 === t.credentials && (t.credentials = "same-origin"))
                  : void 0 === t.credentials && (t.credentials = "include"),
                fetch(e, t)
                  .then(function (e) {
                    e.ok
                      ? e
                          .json()
                          .then(function (e) {
                            a(e);
                          })
                          .catch(function (e) {
                            s(e),
                              console.warn(
                                "Ajax Load Error - Invalid JSON returned",
                                e,
                              );
                          })
                      : (console.error(
                          "Ajax Load Error - Connection Error: " + e.status,
                          e.statusText,
                        ),
                        s(e));
                  })
                  .catch(function (e) {
                    console.error("Ajax Load Error - Connection Error: ", e),
                      s(e);
                  }))
              : (console.warn("Ajax Load Error - No URL Set"), a([]));
          });
        }),
        (E.prototype.contentTypeFormatters = {
          json: {
            headers: { "Content-Type": "application/json" },
            body: function (e, t, o) {
              return JSON.stringify(o);
            },
          },
          form: {
            headers: {},
            body: function (e, t, o) {
              var i = this.generateParamsList(o),
                n = new FormData();
              return (
                i.forEach(function (e) {
                  n.append(e.key, e.value);
                }),
                n
              );
            },
          },
        }),
        g.prototype.registerModule("ajax", E);
      var C = function (e) {
        this._row = e;
      };
      (C.prototype.getData = function (e) {
        return this._row.getData(e);
      }),
        (C.prototype.getElement = function () {
          return this._row.getElement();
        }),
        (C.prototype.getTable = function () {
          return this._row.table;
        }),
        (C.prototype.getCells = function () {
          var e = [];
          return (
            this._row.getCells().forEach(function (t) {
              e.push(t.getComponent());
            }),
            e
          );
        }),
        (C.prototype.getCell = function (e) {
          var t = this._row.getCell(e);
          return !!t && t.getComponent();
        }),
        (C.prototype._getSelf = function () {
          return this._row;
        });
      var R = function (e) {
        (this.table = e),
          (this.topCalcs = []),
          (this.botCalcs = []),
          (this.genColumn = !1),
          (this.topElement = this.createElement()),
          (this.botElement = this.createElement()),
          (this.topRow = !1),
          (this.botRow = !1),
          (this.topInitialized = !1),
          (this.botInitialized = !1),
          this.initialize();
      };
      (R.prototype.createElement = function () {
        var e = document.createElement("div");
        return e.classList.add("tabulator-calcs-holder"), e;
      }),
        (R.prototype.initialize = function () {
          this.genColumn = new l({ field: "value" }, this);
        }),
        (R.prototype.registerColumnField = function () {}),
        (R.prototype.initializeColumn = function (e) {
          var t = e.definition,
            o = {
              topCalcParams: t.topCalcParams || {},
              botCalcParams: t.bottomCalcParams || {},
            };
          if (t.topCalc) {
            switch (r(t.topCalc)) {
              case "string":
                this.calculations[t.topCalc]
                  ? (o.topCalc = this.calculations[t.topCalc])
                  : console.warn(
                      "Column Calc Error - No such calculation found, ignoring: ",
                      t.topCalc,
                    );
                break;
              case "function":
                o.topCalc = t.topCalc;
            }
            o.topCalc &&
              ((e.modules.columnCalcs = o),
              this.topCalcs.push(e),
              "group" != this.table.options.columnCalcs &&
                this.initializeTopRow());
          }
          if (t.bottomCalc) {
            switch (r(t.bottomCalc)) {
              case "string":
                this.calculations[t.bottomCalc]
                  ? (o.botCalc = this.calculations[t.bottomCalc])
                  : console.warn(
                      "Column Calc Error - No such calculation found, ignoring: ",
                      t.bottomCalc,
                    );
                break;
              case "function":
                o.botCalc = t.bottomCalc;
            }
            o.botCalc &&
              ((e.modules.columnCalcs = o),
              this.botCalcs.push(e),
              "group" != this.table.options.columnCalcs &&
                this.initializeBottomRow());
          }
        }),
        (R.prototype.removeCalcs = function () {
          var e = !1;
          this.topInitialized &&
            ((this.topInitialized = !1),
            this.topElement.parentNode.removeChild(this.topElement),
            (e = !0)),
            this.botInitialized &&
              ((this.botInitialized = !1),
              this.table.footerManager.remove(this.botElement),
              (e = !0)),
            e && this.table.rowManager.adjustTableSize();
        }),
        (R.prototype.initializeTopRow = function () {
          this.topInitialized ||
            (this.table.columnManager
              .getElement()
              .insertBefore(
                this.topElement,
                this.table.columnManager.headersElement.nextSibling,
              ),
            (this.topInitialized = !0));
        }),
        (R.prototype.initializeBottomRow = function () {
          this.botInitialized ||
            (this.table.footerManager.prepend(this.botElement),
            (this.botInitialized = !0));
        }),
        (R.prototype.scrollHorizontal = function (e) {
          this.botInitialized &&
            this.botRow &&
            (this.botRow.getElement().style.marginLeft = -e + "px");
        }),
        (R.prototype.recalc = function (e) {
          var t;
          if (this.topInitialized || this.botInitialized) {
            if ((this.rowsToData(e), this.topInitialized)) {
              for (
                this.topRow && this.topRow.deleteCells(),
                  t = this.generateRow("top", this.rowsToData(e)),
                  this.topRow = t;
                this.topElement.firstChild;

              )
                this.topElement.removeChild(this.topElement.firstChild);
              this.topElement.appendChild(t.getElement()), t.initialize(!0);
            }
            if (this.botInitialized) {
              for (
                this.botRow && this.botRow.deleteCells(),
                  t = this.generateRow("bottom", this.rowsToData(e)),
                  this.botRow = t;
                this.botElement.firstChild;

              )
                this.botElement.removeChild(this.botElement.firstChild);
              this.botElement.appendChild(t.getElement()), t.initialize(!0);
            }
            this.table.rowManager.adjustTableSize(),
              this.table.modExists("frozenColumns") &&
                this.table.modules.frozenColumns.layout();
          }
        }),
        (R.prototype.recalcRowGroup = function (e) {
          this.recalcGroup(this.table.modules.groupRows.getRowGroup(e));
        }),
        (R.prototype.recalcAll = function () {
          var e = this;
          (this.topCalcs.length || this.botCalcs.length) &&
            ("group" !== this.table.options.columnCalcs &&
              this.recalc(this.table.rowManager.activeRows),
            this.table.options.groupBy &&
              "table" !== this.table.options.columnCalcs &&
              table.modules.groupRows.getChildGroups().forEach(function (t) {
                e.recalcGroup(t);
              }));
        }),
        (R.prototype.recalcGroup = function (e) {
          var t, o;
          e &&
            e.calcs &&
            (e.calcs.bottom &&
              ((t = this.rowsToData(e.rows)),
              (o = this.generateRowData("bottom", t)),
              e.calcs.bottom.updateData(o),
              e.calcs.bottom.reinitialize()),
            e.calcs.top &&
              ((t = this.rowsToData(e.rows)),
              (o = this.generateRowData("top", t)),
              e.calcs.top.updateData(o),
              e.calcs.top.reinitialize()));
        }),
        (R.prototype.generateTopRow = function (e) {
          return this.generateRow("top", this.rowsToData(e));
        }),
        (R.prototype.generateBottomRow = function (e) {
          return this.generateRow("bottom", this.rowsToData(e));
        }),
        (R.prototype.rowsToData = function (e) {
          var t = this,
            o = [];
          return (
            e.forEach(function (e) {
              if (
                (o.push(e.getData()),
                t.table.options.dataTree &&
                  t.table.options.dataTreeChildColumnCalcs &&
                  e.modules.dataTree.open)
              ) {
                var i = t.rowsToData(
                  t.table.modules.dataTree.getFilteredTreeChildren(e),
                );
                o = o.concat(i);
              }
            }),
            o
          );
        }),
        (R.prototype.generateRow = function (e, t) {
          var o,
            i = this,
            n = this.generateRowData(e, t);
          return (
            i.table.modExists("mutator") && i.table.modules.mutator.disable(),
            (o = new p(n, this, "calc")),
            i.table.modExists("mutator") && i.table.modules.mutator.enable(),
            o
              .getElement()
              .classList.add("tabulator-calcs", "tabulator-calcs-" + e),
            (o.component = !1),
            (o.getComponent = function () {
              return (
                this.component || (this.component = new C(this)), this.component
              );
            }),
            (o.generateCells = function () {
              var t = [];
              i.table.columnManager.columnsByIndex.forEach(function (n) {
                i.genColumn.setField(n.getField()),
                  (i.genColumn.hozAlign = n.hozAlign),
                  n.definition[e + "CalcFormatter"] &&
                  i.table.modExists("format")
                    ? (i.genColumn.modules.format = {
                        formatter: i.table.modules.format.getFormatter(
                          n.definition[e + "CalcFormatter"],
                        ),
                        params: n.definition[e + "CalcFormatterParams"] || {},
                      })
                    : (i.genColumn.modules.format = {
                        formatter:
                          i.table.modules.format.getFormatter("plaintext"),
                        params: {},
                      }),
                  (i.genColumn.definition.cssClass = n.definition.cssClass);
                var r = new m(i.genColumn, o);
                r.getElement(),
                  (r.column = n),
                  r.setWidth(),
                  n.cells.push(r),
                  t.push(r),
                  n.visible || r.hide();
              }),
                (this.cells = t);
            }),
            o
          );
        }),
        (R.prototype.generateRowData = function (e, t) {
          var o,
            i,
            n = {},
            r = "top" == e ? this.topCalcs : this.botCalcs,
            a = "top" == e ? "topCalc" : "botCalc";
          return (
            r.forEach(function (e) {
              var r = [];
              e.modules.columnCalcs &&
                e.modules.columnCalcs[a] &&
                (t.forEach(function (t) {
                  r.push(e.getFieldValue(t));
                }),
                (i = a + "Params"),
                (o =
                  "function" == typeof e.modules.columnCalcs[i]
                    ? e.modules.columnCalcs[i](r, t)
                    : e.modules.columnCalcs[i]),
                e.setFieldValue(n, e.modules.columnCalcs[a](r, t, o)));
            }),
            n
          );
        }),
        (R.prototype.hasTopCalcs = function () {
          return !!this.topCalcs.length;
        }),
        (R.prototype.hasBottomCalcs = function () {
          return !!this.botCalcs.length;
        }),
        (R.prototype.redraw = function () {
          this.topRow && this.topRow.normalizeHeight(!0),
            this.botRow && this.botRow.normalizeHeight(!0);
        }),
        (R.prototype.getResults = function () {
          var e = this,
            t = {};
          return (
            this.table.options.groupBy && this.table.modExists("groupRows")
              ? this.table.modules.groupRows
                  .getGroups(!0)
                  .forEach(function (o) {
                    t[o.getKey()] = e.getGroupResults(o);
                  })
              : (t = {
                  top: this.topRow ? this.topRow.getData() : {},
                  bottom: this.botRow ? this.botRow.getData() : {},
                }),
            t
          );
        }),
        (R.prototype.getGroupResults = function (e) {
          var t = this,
            o = e._getSelf(),
            i = e.getSubGroups(),
            n = {};
          return (
            i.forEach(function (e) {
              n[e.getKey()] = t.getGroupResults(e);
            }),
            {
              top: o.calcs.top ? o.calcs.top.getData() : {},
              bottom: o.calcs.bottom ? o.calcs.bottom.getData() : {},
              groups: n,
            }
          );
        }),
        (R.prototype.calculations = {
          avg: function (e, t, o) {
            var i = 0,
              n = void 0 !== o.precision ? o.precision : 2;
            return (
              e.length &&
                ((i = e.reduce(function (e, t) {
                  return Number(e) + Number(t);
                })),
                (i /= e.length),
                (i = !1 !== n ? i.toFixed(n) : i)),
              parseFloat(i).toString()
            );
          },
          max: function (e, t, o) {
            var i = null,
              n = void 0 !== o.precision && o.precision;
            return (
              e.forEach(function (e) {
                ((e = Number(e)) > i || null === i) && (i = e);
              }),
              null !== i ? (!1 !== n ? i.toFixed(n) : i) : ""
            );
          },
          min: function (e, t, o) {
            var i = null,
              n = void 0 !== o.precision && o.precision;
            return (
              e.forEach(function (e) {
                ((e = Number(e)) < i || null === i) && (i = e);
              }),
              null !== i ? (!1 !== n ? i.toFixed(n) : i) : ""
            );
          },
          sum: function (e, t, o) {
            var i = 0,
              n = void 0 !== o.precision && o.precision;
            return (
              e.length &&
                e.forEach(function (e) {
                  (e = Number(e)), (i += isNaN(e) ? 0 : Number(e));
                }),
              !1 !== n ? i.toFixed(n) : i
            );
          },
          concat: function (e, t, o) {
            var i = 0;
            return (
              e.length &&
                (i = e.reduce(function (e, t) {
                  return String(e) + String(t);
                })),
              i
            );
          },
          count: function (e, t, o) {
            var i = 0;
            return (
              e.length &&
                e.forEach(function (e) {
                  e && i++;
                }),
              i
            );
          },
        }),
        g.prototype.registerModule("columnCalcs", R);
      var x = function (e) {
        (this.table = e),
          (this.mode = !0),
          (this.pasteParser = function () {}),
          (this.pasteAction = function () {}),
          (this.customSelection = !1),
          (this.rowRange = !1),
          (this.blocked = !0);
      };
      (x.prototype.initialize = function () {
        var e = this;
        (this.mode = this.table.options.clipboard),
          (this.rowRange = this.table.options.clipboardCopyRowRange),
          (!0 !== this.mode && "copy" !== this.mode) ||
            this.table.element.addEventListener("copy", function (t) {
              var o, i;
              if (!e.blocked) {
                if ((t.preventDefault(), e.customSelection))
                  (o = e.customSelection),
                    e.table.options.clipboardCopyFormatter &&
                      (o = e.table.options.clipboardCopyFormatter("plain", o));
                else {
                  var n = e.table.modules.export.generateExportList(
                    e.table.options.clipboardCopyConfig,
                    e.table.options.clipboardCopyStyled,
                    e.rowRange,
                    "clipboard",
                  );
                  (o = (i = e.table.modules.export.genereateHTMLTable(n))
                    ? e.generatePlainContent(n)
                    : ""),
                    e.table.options.clipboardCopyFormatter &&
                      ((o = e.table.options.clipboardCopyFormatter("plain", o)),
                      (i = e.table.options.clipboardCopyFormatter("html", i)));
                }
                window.clipboardData && window.clipboardData.setData
                  ? window.clipboardData.setData("Text", o)
                  : t.clipboardData && t.clipboardData.setData
                  ? (t.clipboardData.setData("text/plain", o),
                    i && t.clipboardData.setData("text/html", i))
                  : t.originalEvent &&
                    t.originalEvent.clipboardData.setData &&
                    (t.originalEvent.clipboardData.setData("text/plain", o),
                    i && t.originalEvent.clipboardData.setData("text/html", i)),
                  e.table.options.clipboardCopied.call(e.table, o, i),
                  e.reset();
              }
            }),
          (!0 !== this.mode && "paste" !== this.mode) ||
            this.table.element.addEventListener("paste", function (t) {
              e.paste(t);
            }),
          this.setPasteParser(this.table.options.clipboardPasteParser),
          this.setPasteAction(this.table.options.clipboardPasteAction);
      }),
        (x.prototype.reset = function () {
          (this.blocked = !0), (this.customSelection = !1);
        }),
        (x.prototype.generatePlainContent = function (e) {
          var t = [];
          return (
            e.forEach(function (e) {
              var o = [];
              e.columns.forEach(function (t) {
                var i = "";
                if (t)
                  if (
                    ("group" === e.type && (t.value = t.component.getKey()),
                    null === t.value)
                  )
                    i = "";
                  else
                    switch (r(t.value)) {
                      case "object":
                        i = JSON.stringify(t.value);
                        break;
                      case "undefined":
                        i = "";
                        break;
                      default:
                        i = t.value;
                    }
                o.push(i);
              }),
                t.push(o.join("\t"));
            }),
            t.join("\n")
          );
        }),
        (x.prototype.copy = function (e, t) {
          var o, i;
          (this.blocked = !1),
            (this.customSelection = !1),
            (!0 !== this.mode && "copy" !== this.mode) ||
              ((this.rowRange = e || this.table.options.clipboardCopyRowRange),
              void 0 !== window.getSelection && void 0 !== document.createRange
                ? ((e = document.createRange()).selectNodeContents(
                    this.table.element,
                  ),
                  (o = window.getSelection()).toString() &&
                    t &&
                    (this.customSelection = o.toString()),
                  o.removeAllRanges(),
                  o.addRange(e))
                : void 0 !== document.selection &&
                  void 0 !== document.body.createTextRange &&
                  ((i = document.body.createTextRange()).moveToElementText(
                    this.table.element,
                  ),
                  i.select()),
              document.execCommand("copy"),
              o && o.removeAllRanges());
        }),
        (x.prototype.setPasteAction = function (e) {
          switch (void 0 === e ? "undefined" : r(e)) {
            case "string":
              (this.pasteAction = this.pasteActions[e]),
                this.pasteAction ||
                  console.warn(
                    "Clipboard Error - No such paste action found:",
                    e,
                  );
              break;
            case "function":
              this.pasteAction = e;
          }
        }),
        (x.prototype.setPasteParser = function (e) {
          switch (void 0 === e ? "undefined" : r(e)) {
            case "string":
              (this.pasteParser = this.pasteParsers[e]),
                this.pasteParser ||
                  console.warn(
                    "Clipboard Error - No such paste parser found:",
                    e,
                  );
              break;
            case "function":
              this.pasteParser = e;
          }
        }),
        (x.prototype.paste = function (e) {
          var t, o, i;
          this.checkPaseOrigin(e) &&
            ((t = this.getPasteData(e)),
            (o = this.pasteParser.call(this, t))
              ? (e.preventDefault(),
                this.table.modExists("mutator") && (o = this.mutateData(o)),
                (i = this.pasteAction.call(this, o)),
                this.table.options.clipboardPasted.call(this.table, t, o, i))
              : this.table.options.clipboardPasteError.call(this.table, t));
        }),
        (x.prototype.mutateData = function (e) {
          var t = this,
            o = [];
          return (
            Array.isArray(e)
              ? e.forEach(function (e) {
                  o.push(t.table.modules.mutator.transformRow(e, "clipboard"));
                })
              : (o = e),
            o
          );
        }),
        (x.prototype.checkPaseOrigin = function (e) {
          var t = !0;
          return (
            ("DIV" != e.target.tagName ||
              this.table.modules.edit.currentCell) &&
              (t = !1),
            t
          );
        }),
        (x.prototype.getPasteData = function (e) {
          var t;
          return (
            window.clipboardData && window.clipboardData.getData
              ? (t = window.clipboardData.getData("Text"))
              : e.clipboardData && e.clipboardData.getData
              ? (t = e.clipboardData.getData("text/plain"))
              : e.originalEvent &&
                e.originalEvent.clipboardData.getData &&
                (t = e.originalEvent.clipboardData.getData("text/plain")),
            t
          );
        }),
        (x.prototype.pasteParsers = {
          table: function (e) {
            var t = [],
              o = !0,
              i = this.table.columnManager.columns,
              n = [],
              r = [];
            return (
              (e = e.split("\n")).forEach(function (e) {
                t.push(e.split("\t"));
              }),
              !(!t.length || (1 === t.length && t[0].length < 2)) &&
                (!0,
                t[0].forEach(function (e) {
                  var t = i.find(function (t) {
                    return (
                      e &&
                      t.definition.title &&
                      e.trim() &&
                      t.definition.title.trim() === e.trim()
                    );
                  });
                  t ? n.push(t) : (o = !1);
                }),
                o ||
                  ((o = !0),
                  (n = []),
                  t[0].forEach(function (e) {
                    var t = i.find(function (t) {
                      return (
                        e && t.field && e.trim() && t.field.trim() === e.trim()
                      );
                    });
                    t ? n.push(t) : (o = !1);
                  }),
                  o || (n = this.table.columnManager.columnsByIndex)),
                o && t.shift(),
                t.forEach(function (e) {
                  var t = {};
                  e.forEach(function (e, o) {
                    n[o] && (t[n[o].field] = e);
                  }),
                    r.push(t);
                }),
                r)
            );
          },
        }),
        (x.prototype.pasteActions = {
          replace: function (e) {
            return this.table.setData(e);
          },
          update: function (e) {
            return this.table.updateOrAddData(e);
          },
          insert: function (e) {
            return this.table.addData(e);
          },
        }),
        g.prototype.registerModule("clipboard", x);
      var _ = function (e) {
        (this.table = e),
          (this.indent = 10),
          (this.field = ""),
          (this.collapseEl = null),
          (this.expandEl = null),
          (this.branchEl = null),
          (this.elementField = !1),
          (this.startOpen = function () {}),
          (this.displayIndex = 0);
      };
      (_.prototype.initialize = function () {
        var e = null,
          t = this.table.columnManager.getFirstVisibileColumn(),
          o = this.table.options;
        switch (
          ((this.field = o.dataTreeChildField),
          (this.indent = o.dataTreeChildIndent),
          (this.elementField = o.dataTreeElementColumn || (!!t && t.field)),
          o.dataTreeBranchElement &&
            (!0 === o.dataTreeBranchElement
              ? ((this.branchEl = document.createElement("div")),
                this.branchEl.classList.add("tabulator-data-tree-branch"))
              : "string" == typeof o.dataTreeBranchElement
              ? (((e = document.createElement("div")).innerHTML =
                  o.dataTreeBranchElement),
                (this.branchEl = e.firstChild))
              : (this.branchEl = o.dataTreeBranchElement)),
          o.dataTreeCollapseElement
            ? "string" == typeof o.dataTreeCollapseElement
              ? (((e = document.createElement("div")).innerHTML =
                  o.dataTreeCollapseElement),
                (this.collapseEl = e.firstChild))
              : (this.collapseEl = o.dataTreeCollapseElement)
            : ((this.collapseEl = document.createElement("div")),
              this.collapseEl.classList.add("tabulator-data-tree-control"),
              (this.collapseEl.tabIndex = 0),
              (this.collapseEl.innerHTML =
                "<div class='tabulator-data-tree-control-collapse'></div>")),
          o.dataTreeExpandElement
            ? "string" == typeof o.dataTreeExpandElement
              ? (((e = document.createElement("div")).innerHTML =
                  o.dataTreeExpandElement),
                (this.expandEl = e.firstChild))
              : (this.expandEl = o.dataTreeExpandElement)
            : ((this.expandEl = document.createElement("div")),
              this.expandEl.classList.add("tabulator-data-tree-control"),
              (this.expandEl.tabIndex = 0),
              (this.expandEl.innerHTML =
                "<div class='tabulator-data-tree-control-expand'></div>")),
          r(o.dataTreeStartExpanded))
        ) {
          case "boolean":
            this.startOpen = function (e, t) {
              return o.dataTreeStartExpanded;
            };
            break;
          case "function":
            this.startOpen = o.dataTreeStartExpanded;
            break;
          default:
            this.startOpen = function (e, t) {
              return o.dataTreeStartExpanded[t];
            };
        }
      }),
        (_.prototype.initializeRow = function (e) {
          var t = e.getData()[this.field],
            o = Array.isArray(t),
            i =
              o ||
              (!o &&
                "object" === (void 0 === t ? "undefined" : r(t)) &&
                null !== t);
          !i &&
            e.modules.dataTree &&
            e.modules.dataTree.branchEl &&
            e.modules.dataTree.branchEl.parentNode.removeChild(
              e.modules.dataTree.branchEl,
            ),
            !i &&
              e.modules.dataTree &&
              e.modules.dataTree.controlEl &&
              e.modules.dataTree.controlEl.parentNode.removeChild(
                e.modules.dataTree.controlEl,
              ),
            (e.modules.dataTree = {
              index: e.modules.dataTree ? e.modules.dataTree.index : 0,
              open:
                !!i &&
                (e.modules.dataTree
                  ? e.modules.dataTree.open
                  : this.startOpen(e.getComponent(), 0)),
              controlEl:
                !(!e.modules.dataTree || !i) && e.modules.dataTree.controlEl,
              branchEl:
                !(!e.modules.dataTree || !i) && e.modules.dataTree.branchEl,
              parent: !!e.modules.dataTree && e.modules.dataTree.parent,
              children: i,
            });
        }),
        (_.prototype.layoutRow = function (e) {
          var t = (
              this.elementField ? e.getCell(this.elementField) : e.getCells()[0]
            ).getElement(),
            o = e.modules.dataTree;
          o.branchEl &&
            (o.branchEl.parentNode &&
              o.branchEl.parentNode.removeChild(o.branchEl),
            (o.branchEl = !1)),
            o.controlEl &&
              (o.controlEl.parentNode &&
                o.controlEl.parentNode.removeChild(o.controlEl),
              (o.controlEl = !1)),
            this.generateControlElement(e, t),
            e.getElement().classList.add("tabulator-tree-level-" + o.index),
            o.index &&
              (this.branchEl
                ? ((o.branchEl = this.branchEl.cloneNode(!0)),
                  t.insertBefore(o.branchEl, t.firstChild),
                  this.table.rtl
                    ? (o.branchEl.style.marginRight =
                        (o.branchEl.offsetWidth + o.branchEl.style.marginLeft) *
                          (o.index - 1) +
                        o.index * this.indent +
                        "px")
                    : (o.branchEl.style.marginLeft =
                        (o.branchEl.offsetWidth +
                          o.branchEl.style.marginRight) *
                          (o.index - 1) +
                        o.index * this.indent +
                        "px"))
                : this.table.rtl
                ? (t.style.paddingRight =
                    parseInt(
                      window
                        .getComputedStyle(t, null)
                        .getPropertyValue("padding-right"),
                    ) +
                    o.index * this.indent +
                    "px")
                : (t.style.paddingLeft =
                    parseInt(
                      window
                        .getComputedStyle(t, null)
                        .getPropertyValue("padding-left"),
                    ) +
                    o.index * this.indent +
                    "px"));
        }),
        (_.prototype.generateControlElement = function (e, t) {
          var o = this,
            i = e.modules.dataTree,
            n = ((t = t || e.getCells()[0].getElement()), i.controlEl);
          !1 !== i.children &&
            (i.open
              ? ((i.controlEl = this.collapseEl.cloneNode(!0)),
                i.controlEl.addEventListener("click", function (t) {
                  t.stopPropagation(), o.collapseRow(e);
                }))
              : ((i.controlEl = this.expandEl.cloneNode(!0)),
                i.controlEl.addEventListener("click", function (t) {
                  t.stopPropagation(), o.expandRow(e);
                })),
            i.controlEl.addEventListener("mousedown", function (e) {
              e.stopPropagation();
            }),
            n && n.parentNode === t
              ? n.parentNode.replaceChild(i.controlEl, n)
              : t.insertBefore(i.controlEl, t.firstChild));
        }),
        (_.prototype.setDisplayIndex = function (e) {
          this.displayIndex = e;
        }),
        (_.prototype.getDisplayIndex = function () {
          return this.displayIndex;
        }),
        (_.prototype.getRows = function (e) {
          var t = this,
            o = [];
          return (
            e.forEach(function (e, i) {
              var n;
              o.push(e),
                e instanceof p &&
                  (e.create(),
                  (n = e.modules.dataTree.children).index ||
                    !1 === n.children ||
                    t.getChildren(e).forEach(function (e) {
                      e.create(), o.push(e);
                    }));
            }),
            o
          );
        }),
        (_.prototype.getChildren = function (e, t) {
          var o = this,
            i = e.modules.dataTree,
            n = [],
            r = [];
          return (
            !1 !== i.children &&
              (i.open || t) &&
              (Array.isArray(i.children) ||
                (i.children = this.generateChildren(e)),
              (n =
                this.table.modExists("filter") &&
                this.table.options.dataTreeFilter
                  ? this.table.modules.filter.filter(i.children)
                  : i.children),
              this.table.modExists("sort") &&
                this.table.options.dataTreeSort &&
                this.table.modules.sort.sort(n),
              n.forEach(function (e) {
                r.push(e),
                  o.getChildren(e).forEach(function (e) {
                    r.push(e);
                  });
              })),
            r
          );
        }),
        (_.prototype.generateChildren = function (e) {
          var t = this,
            o = [],
            i = e.getData()[this.field];
          return (
            Array.isArray(i) || (i = [i]),
            i.forEach(function (i) {
              var n = new p(i || {}, t.table.rowManager);
              n.create(),
                (n.modules.dataTree.index = e.modules.dataTree.index + 1),
                (n.modules.dataTree.parent = e),
                n.modules.dataTree.children &&
                  (n.modules.dataTree.open = t.startOpen(
                    n.getComponent(),
                    n.modules.dataTree.index,
                  )),
                o.push(n);
            }),
            o
          );
        }),
        (_.prototype.expandRow = function (e, t) {
          var o = e.modules.dataTree;
          !1 !== o.children &&
            ((o.open = !0),
            e.reinitialize(),
            this.table.rowManager.refreshActiveData("tree", !1, !0),
            this.table.options.dataTreeRowExpanded(
              e.getComponent(),
              e.modules.dataTree.index,
            ));
        }),
        (_.prototype.collapseRow = function (e) {
          var t = e.modules.dataTree;
          !1 !== t.children &&
            ((t.open = !1),
            e.reinitialize(),
            this.table.rowManager.refreshActiveData("tree", !1, !0),
            this.table.options.dataTreeRowCollapsed(
              e.getComponent(),
              e.modules.dataTree.index,
            ));
        }),
        (_.prototype.toggleRow = function (e) {
          var t = e.modules.dataTree;
          !1 !== t.children &&
            (t.open ? this.collapseRow(e) : this.expandRow(e));
        }),
        (_.prototype.getTreeParent = function (e) {
          return (
            !!e.modules.dataTree.parent &&
            e.modules.dataTree.parent.getComponent()
          );
        }),
        (_.prototype.getFilteredTreeChildren = function (e) {
          var t = e.modules.dataTree,
            o = [];
          return (
            t.children &&
              (Array.isArray(t.children) ||
                (t.children = this.generateChildren(e)),
              (this.table.modExists("filter") &&
              this.table.options.dataTreeFilter
                ? this.table.modules.filter.filter(t.children)
                : t.children
              ).forEach(function (e) {
                e instanceof p && o.push(e);
              })),
            o
          );
        }),
        (_.prototype.rowDelete = function (e) {
          var t,
            o = e.modules.dataTree.parent;
          o &&
            (!1 !== (t = this.findChildIndex(e, o)) &&
              o.data[this.field].splice(t, 1),
            o.data[this.field].length || delete o.data[this.field],
            this.initializeRow(o),
            this.layoutRow(o)),
            this.table.rowManager.refreshActiveData("tree", !1, !0);
        }),
        (_.prototype.addTreeChildRow = function (e, t, o, i) {
          var n = !1;
          "string" == typeof t && (t = JSON.parse(t)),
            Array.isArray(e.data[this.field]) ||
              ((e.data[this.field] = []),
              (e.modules.dataTree.open = this.startOpen(
                e.getComponent(),
                e.modules.dataTree.index,
              ))),
            void 0 !== i &&
              !1 !== (n = this.findChildIndex(i, e)) &&
              e.data[this.field].splice(o ? n : n + 1, 0, t),
            !1 === n &&
              (o ? e.data[this.field].unshift(t) : e.data[this.field].push(t)),
            this.initializeRow(e),
            this.layoutRow(e),
            this.table.rowManager.refreshActiveData("tree", !1, !0);
        }),
        (_.prototype.findChildIndex = function (e, t) {
          var o = this,
            i = !1;
          return (
            "object" == (void 0 === e ? "undefined" : r(e))
              ? e instanceof p
                ? (i = e.data)
                : e instanceof d
                ? (i = e._getSelf().data)
                : "undefined" != typeof HTMLElement &&
                  e instanceof HTMLElement &&
                  t.modules.dataTree &&
                  (i = t.modules.dataTree.children.find(function (t) {
                    return t instanceof p && t.element === e;
                  })) &&
                  (i = i.data)
              : (i =
                  null != e &&
                  t.data[this.field].find(function (t) {
                    return t.data[o.table.options.index] == e;
                  })),
            i &&
              (Array.isArray(t.data[this.field]) &&
                (i = t.data[this.field].indexOf(i)),
              -1 == i && (i = !1)),
            i
          );
        }),
        (_.prototype.getTreeChildren = function (e, t, o) {
          var i = this,
            n = e.modules.dataTree,
            r = [];
          return (
            n.children &&
              (Array.isArray(n.children) ||
                (n.children = this.generateChildren(e)),
              n.children.forEach(function (e) {
                e instanceof p &&
                  (r.push(t ? e.getComponent() : e),
                  o && (r = r.concat(i.getTreeChildren(e, t, o))));
              })),
            r
          );
        }),
        (_.prototype.checkForRestyle = function (e) {
          e.row.cells.indexOf(e) || e.row.reinitialize();
        }),
        (_.prototype.getChildField = function () {
          return this.field;
        }),
        (_.prototype.redrawNeeded = function (e) {
          return (
            (!!this.field && void 0 !== e[this.field]) ||
            (!!this.elementField && void 0 !== e[this.elementField])
          );
        }),
        g.prototype.registerModule("dataTree", _);
      var M = function (e) {
        this.table = e;
      };
      (M.prototype.download = function (e, t, o, i, n) {
        var r = this,
          a = !1;
        if (
          ("function" == typeof e
            ? (a = e)
            : r.downloaders[e]
            ? (a = r.downloaders[e])
            : console.warn("Download Error - No such download type found: ", e),
          a)
        ) {
          var s = this.generateExportList(i);
          a.call(this.table, s, o || {}, function (o, i) {
            n
              ? !0 === n
                ? r.triggerDownload(o, i, e, t, !0)
                : n(o)
              : r.triggerDownload(o, i, e, t);
          });
        }
      }),
        (M.prototype.generateExportList = function (e) {
          var t = this.table.modules.export.generateExportList(
              this.table.options.downloadConfig,
              !1,
              e || this.table.options.downloadRowRange,
              "download",
            ),
            o = this.table.options.groupHeaderDownload;
          return (
            o && !Array.isArray(o) && (o = [o]),
            t.forEach(function (e) {
              var t;
              "group" === e.type &&
                ((t = e.columns[0]),
                o &&
                  o[e.indent] &&
                  (t.value = o[e.indent](
                    t.value,
                    e.component._group.getRowCount(),
                    e.component._group.getData(),
                    e.component,
                  )));
            }),
            t
          );
        }),
        (M.prototype.triggerDownload = function (e, t, o, i, n) {
          var r = document.createElement("a"),
            a = new Blob([e], { type: t });
          i = i || "Tabulator." + ("function" == typeof o ? "txt" : o);
          (a = this.table.options.downloadReady.call(this.table, e, a)) &&
            (n
              ? window.open(window.URL.createObjectURL(a))
              : navigator.msSaveOrOpenBlob
              ? navigator.msSaveOrOpenBlob(a, i)
              : (r.setAttribute("href", window.URL.createObjectURL(a)),
                r.setAttribute("download", i),
                (r.style.display = "none"),
                document.body.appendChild(r),
                r.click(),
                document.body.removeChild(r)),
            this.table.options.downloadComplete &&
              this.table.options.downloadComplete());
        }),
        (M.prototype.commsReceived = function (e, t, o) {
          if ("intercept" === t)
            this.download(o.type, "", o.options, o.active, o.intercept);
        }),
        (M.prototype.downloaders = {
          csv: function (e, t, o) {
            var i = t && t.delimiter ? t.delimiter : ",",
              n = [],
              a = [];
            e.forEach(function (e) {
              var t = [];
              switch (e.type) {
                case "group":
                  console.warn(
                    "Download Warning - CSV downloader cannot process row groups",
                  );
                  break;
                case "calc":
                  console.warn(
                    "Download Warning - CSV downloader cannot process column calculations",
                  );
                  break;
                case "header":
                  e.columns.forEach(function (e, t) {
                    e &&
                      1 === e.depth &&
                      (a[t] =
                        void 0 === e.value || null === e.value
                          ? ""
                          : '"' + String(e.value).split('"').join('""') + '"');
                  });
                  break;
                case "row":
                  e.columns.forEach(function (e) {
                    if (e) {
                      switch (r(e.value)) {
                        case "object":
                          e.value = JSON.stringify(e.value);
                          break;
                        case "undefined":
                        case "null":
                          e.value = "";
                      }
                      t.push('"' + String(e.value).split('"').join('""') + '"');
                    }
                  }),
                    n.push(t.join(i));
              }
            }),
              a.length && n.unshift(a.join(i)),
              (n = n.join("\n")),
              t.bom && (n = "\ufeff" + n),
              o(n, "text/csv");
          },
          json: function (e, t, o) {
            var i = [];
            e.forEach(function (e) {
              var t = {};
              switch (e.type) {
                case "header":
                  break;
                case "group":
                  console.warn(
                    "Download Warning - JSON downloader cannot process row groups",
                  );
                  break;
                case "calc":
                  console.warn(
                    "Download Warning - JSON downloader cannot process column calculations",
                  );
                  break;
                case "row":
                  e.columns.forEach(function (e) {
                    e && (t[e.component.getField()] = e.value);
                  }),
                    i.push(t);
              }
            }),
              o((i = JSON.stringify(i, null, "\t")), "application/json");
          },
          pdf: function (e, t, o) {
            var i = [],
              n = [],
              a = {},
              s = t.rowGroupStyles || {
                fontStyle: "bold",
                fontSize: 12,
                cellPadding: 6,
                fillColor: 220,
              },
              l = t.rowCalcStyles || {
                fontStyle: "bold",
                fontSize: 10,
                cellPadding: 4,
                fillColor: 232,
              },
              c = t.jsPDF || {},
              u = t && t.title ? t.title : "";
            function d(e, t) {
              var o = [];
              return (
                e.columns.forEach(function (e) {
                  var i;
                  if (e) {
                    switch (r(e.value)) {
                      case "object":
                        e.value = JSON.stringify(e.value);
                        break;
                      case "undefined":
                      case "null":
                        e.value = "";
                    }
                    (i = {
                      content: e.value,
                      colSpan: e.width,
                      rowSpan: e.height,
                    }),
                      t && (i.styles = t),
                      o.push(i);
                  } else o.push("");
                }),
                o
              );
            }
            c.orientation || (c.orientation = t.orientation || "landscape"),
              c.unit || (c.unit = "pt"),
              e.forEach(function (e) {
                switch (e.type) {
                  case "header":
                    i.push(d(e));
                    break;
                  case "group":
                    n.push(d(e, s));
                    break;
                  case "calc":
                    n.push(d(e, l));
                    break;
                  case "row":
                    n.push(d(e));
                }
              });
            var p = new jsPDF(c);
            t &&
              t.autoTable &&
              (a =
                "function" == typeof t.autoTable
                  ? t.autoTable(p) || {}
                  : t.autoTable),
              u &&
                (a.addPageContent = function (e) {
                  p.text(u, 40, 30);
                }),
              (a.head = i),
              (a.body = n),
              p.autoTable(a),
              t && t.documentProcessing && t.documentProcessing(p),
              o(p.output("arraybuffer"), "application/pdf");
          },
          xlsx: function (e, t, o) {
            var i = t.sheetName || "Sheet1",
              n = XLSX.utils.book_new();
            function a() {
              var t = [],
                o = [],
                i = {},
                n = {
                  s: { c: 0, r: 0 },
                  e: {
                    c: e[0]
                      ? e[0].columns.reduce(function (e, t) {
                          return e + (t && t.width ? t.width : 1);
                        }, 0)
                      : 0,
                    r: e.length,
                  },
                };
              return (
                e.forEach(function (e, i) {
                  var n = [];
                  e.columns.forEach(function (e, t) {
                    e
                      ? (n.push(
                          e.value instanceof Date || "object" !== r(e.value)
                            ? e.value
                            : JSON.stringify(e.value),
                        ),
                        (e.width > 1 || e.height > -1) &&
                          o.push({
                            s: { r: i, c: t },
                            e: { r: i + e.height - 1, c: t + e.width - 1 },
                          }))
                      : n.push("");
                  }),
                    t.push(n);
                }),
                XLSX.utils.sheet_add_aoa(i, t),
                (i["!ref"] = XLSX.utils.encode_range(n)),
                o.length && (i["!merges"] = o),
                i
              );
            }
            if (((n.SheetNames = []), (n.Sheets = {}), t.sheetOnly)) o(a());
            else {
              if (t.sheets)
                for (var s in t.sheets)
                  !0 === t.sheets[s]
                    ? (n.SheetNames.push(s), (n.Sheets[s] = a()))
                    : (n.SheetNames.push(s),
                      this.modules.comms.send(
                        t.sheets[s],
                        "download",
                        "intercept",
                        {
                          type: "xlsx",
                          options: { sheetOnly: !0 },
                          active: this.active,
                          intercept: function (e) {
                            n.Sheets[s] = e;
                          },
                        },
                      ));
              else n.SheetNames.push(i), (n.Sheets[i] = a());
              t.documentProcessing && (n = t.documentProcessing(n)),
                o(
                  (function (e) {
                    for (
                      var t = new ArrayBuffer(e.length),
                        o = new Uint8Array(t),
                        i = 0;
                      i != e.length;
                      ++i
                    )
                      o[i] = 255 & e.charCodeAt(i);
                    return t;
                  })(
                    XLSX.write(n, {
                      bookType: "xlsx",
                      bookSST: !0,
                      type: "binary",
                    }),
                  ),
                  "application/octet-stream",
                );
            }
          },
          html: function (e, t, o) {
            this.modExists("export", !0) &&
              o(this.modules.export.genereateHTMLTable(e), "text/html");
          },
        }),
        g.prototype.registerModule("download", M);
      var S = function (e) {
        (this.table = e),
          (this.currentCell = !1),
          (this.mouseClick = !1),
          (this.recursionBlock = !1),
          (this.invalidEdit = !1),
          (this.editedCells = []);
      };
      (S.prototype.initializeColumn = function (e) {
        var t = this,
          o = {
            editor: !1,
            blocked: !1,
            check: e.definition.editable,
            params: e.definition.editorParams || {},
          };
        switch (r(e.definition.editor)) {
          case "string":
            "tick" === e.definition.editor &&
              ((e.definition.editor = "tickCross"),
              console.warn(
                "DEPRECATION WARNING - the tick editor has been deprecated, please use the tickCross editor",
              )),
              t.editors[e.definition.editor]
                ? (o.editor = t.editors[e.definition.editor])
                : console.warn(
                    "Editor Error - No such editor found: ",
                    e.definition.editor,
                  );
            break;
          case "function":
            o.editor = e.definition.editor;
            break;
          case "boolean":
            !0 === e.definition.editor &&
              ("function" != typeof e.definition.formatter
                ? ("tick" === e.definition.formatter &&
                    ((e.definition.formatter = "tickCross"),
                    console.warn(
                      "DEPRECATION WARNING - the tick editor has been deprecated, please use the tickCross editor",
                    )),
                  t.editors[e.definition.formatter]
                    ? (o.editor = t.editors[e.definition.formatter])
                    : (o.editor = t.editors.input))
                : console.warn(
                    "Editor Error - Cannot auto lookup editor for a custom formatter: ",
                    e.definition.formatter,
                  ));
        }
        o.editor && (e.modules.edit = o);
      }),
        (S.prototype.getCurrentCell = function () {
          return !!this.currentCell && this.currentCell.getComponent();
        }),
        (S.prototype.clearEditor = function (e) {
          var t,
            o = this.currentCell;
          if (((this.invalidEdit = !1), o)) {
            for (
              this.currentCell = !1,
                t = o.getElement(),
                e
                  ? o.validate()
                  : t.classList.remove("tabulator-validation-fail"),
                t.classList.remove("tabulator-editing");
              t.firstChild;

            )
              t.removeChild(t.firstChild);
            o.row.getElement().classList.remove("tabulator-row-editing");
          }
        }),
        (S.prototype.cancelEdit = function () {
          if (this.currentCell) {
            var e = this.currentCell,
              t = this.currentCell.getComponent();
            this.clearEditor(!0),
              e.setValueActual(e.getValue()),
              e.cellRendered(),
              ("textarea" == e.column.definition.editor ||
                e.column.definition.variableHeight) &&
                e.row.normalizeHeight(!0),
              e.column.cellEvents.cellEditCancelled &&
                e.column.cellEvents.cellEditCancelled.call(this.table, t),
              this.table.options.cellEditCancelled.call(this.table, t);
          }
        }),
        (S.prototype.bindEditor = function (e) {
          var t = this,
            o = e.getElement(!0);
          o.setAttribute("tabindex", 0),
            o.addEventListener("click", function (e) {
              o.classList.contains("tabulator-editing") ||
                o.focus({ preventScroll: !0 });
            }),
            o.addEventListener("mousedown", function (e) {
              2 === e.button ? e.preventDefault() : (t.mouseClick = !0);
            }),
            o.addEventListener("focus", function (o) {
              t.recursionBlock || t.edit(e, o, !1);
            });
        }),
        (S.prototype.focusCellNoEvent = function (e, t) {
          (this.recursionBlock = !0),
            (t && "ie" === this.table.browser) ||
              e.getElement().focus({ preventScroll: !0 }),
            (this.recursionBlock = !1);
        }),
        (S.prototype.editCell = function (e, t) {
          this.focusCellNoEvent(e), this.edit(e, !1, t);
        }),
        (S.prototype.focusScrollAdjust = function (e) {
          if ("virtual" == this.table.rowManager.getRenderMode()) {
            var t = this.table.rowManager.element.scrollTop,
              o =
                this.table.rowManager.element.clientHeight +
                this.table.rowManager.element.scrollTop,
              i = e.row.getElement();
            i.offsetTop;
            i.offsetTop < t
              ? (this.table.rowManager.element.scrollTop -= t - i.offsetTop)
              : i.offsetTop + i.offsetHeight > o &&
                (this.table.rowManager.element.scrollTop +=
                  i.offsetTop + i.offsetHeight - o);
            var n = this.table.rowManager.element.scrollLeft,
              r =
                this.table.rowManager.element.clientWidth +
                this.table.rowManager.element.scrollLeft,
              a = e.getElement();
            a.offsetLeft;
            this.table.modExists("frozenColumns") &&
              ((n += parseInt(this.table.modules.frozenColumns.leftMargin)),
              (r -= parseInt(this.table.modules.frozenColumns.rightMargin))),
              this.table.options.virtualDomHoz &&
                ((n -= parseInt(this.table.vdomHoz.vDomPadLeft)),
                (r -= parseInt(this.table.vdomHoz.vDomPadLeft))),
              a.offsetLeft < n
                ? (this.table.rowManager.element.scrollLeft -= n - a.offsetLeft)
                : a.offsetLeft + a.offsetWidth > r &&
                  (this.table.rowManager.element.scrollLeft +=
                    a.offsetLeft + a.offsetWidth - r);
          }
        }),
        (S.prototype.edit = function (e, t, o) {
          var i,
            n,
            a,
            s = this,
            l = !0,
            c = function () {},
            u = e.getElement();
          if (!this.currentCell) {
            if (e.column.modules.edit.blocked)
              return (this.mouseClick = !1), u.blur(), !1;
            switch (
              (t && t.stopPropagation(), r(e.column.modules.edit.check))
            ) {
              case "function":
                l = e.column.modules.edit.check(e.getComponent());
                break;
              case "boolean":
                l = e.column.modules.edit.check;
            }
            if (l || o) {
              if (
                (s.cancelEdit(),
                (s.currentCell = e),
                this.focusScrollAdjust(e),
                (n = e.getComponent()),
                this.mouseClick &&
                  ((this.mouseClick = !1),
                  e.column.cellEvents.cellClick &&
                    e.column.cellEvents.cellClick.call(this.table, t, n)),
                e.column.cellEvents.cellEditing &&
                  e.column.cellEvents.cellEditing.call(this.table, n),
                s.table.options.cellEditing.call(this.table, n),
                (a =
                  "function" == typeof e.column.modules.edit.params
                    ? e.column.modules.edit.params(n)
                    : e.column.modules.edit.params),
                !1 ===
                  (i = e.column.modules.edit.editor.call(
                    s,
                    n,
                    function (e) {
                      c = e;
                    },
                    function (t) {
                      if (s.currentCell === e) {
                        var o = !0;
                        return (
                          e.column.modules.validate &&
                            s.table.modExists("validate") &&
                            "manual" != s.table.options.validationMode &&
                            (o = s.table.modules.validate.validate(
                              e.column.modules.validate,
                              e,
                              t,
                            )),
                          !0 === o ||
                          "highlight" === s.table.options.validationMode
                            ? (s.clearEditor(),
                              e.modules.edit || (e.modules.edit = {}),
                              (e.modules.edit.edited = !0),
                              -1 == s.editedCells.indexOf(e) &&
                                s.editedCells.push(e),
                              e.setValue(t, !0),
                              s.table.options.dataTree &&
                                s.table.modExists("dataTree") &&
                                s.table.modules.dataTree.checkForRestyle(e),
                              !0 === o ||
                                (u.classList.add("tabulator-validation-fail"),
                                s.table.options.validationFailed.call(
                                  s.table,
                                  e.getComponent(),
                                  t,
                                  o,
                                ),
                                !1))
                            : ((s.invalidEdit = !0),
                              u.classList.add("tabulator-validation-fail"),
                              s.focusCellNoEvent(e, !0),
                              c(),
                              s.table.options.validationFailed.call(
                                s.table,
                                e.getComponent(),
                                t,
                                o,
                              ),
                              !1)
                        );
                      }
                    },
                    function () {
                      s.currentCell === e &&
                        (s.cancelEdit(),
                        s.table.options.dataTree &&
                          s.table.modExists("dataTree") &&
                          s.table.modules.dataTree.checkForRestyle(e));
                    },
                    a,
                  )))
              )
                return u.blur(), !1;
              if (!(i instanceof Node))
                return (
                  console.warn(
                    "Edit Error - Editor should return an instance of Node, the editor returned:",
                    i,
                  ),
                  u.blur(),
                  !1
                );
              for (
                u.classList.add("tabulator-editing"),
                  e.row.getElement().classList.add("tabulator-row-editing");
                u.firstChild;

              )
                u.removeChild(u.firstChild);
              u.appendChild(i), c();
              for (var d = u.children, p = 0; p < d.length; p++)
                d[p].addEventListener("click", function (e) {
                  e.stopPropagation();
                });
              return !0;
            }
            return (this.mouseClick = !1), u.blur(), !1;
          }
          this.invalidEdit || this.cancelEdit();
        }),
        (S.prototype.maskInput = function (e, t) {
          var o = t.mask,
            i = void 0 !== t.maskLetterChar ? t.maskLetterChar : "A",
            n = void 0 !== t.maskNumberChar ? t.maskNumberChar : "9",
            r = void 0 !== t.maskWildcardChar ? t.maskWildcardChar : "*";
          function a(t) {
            var s = o[t];
            void 0 !== s &&
              s !== r &&
              s !== i &&
              s !== n &&
              ((e.value = e.value + "" + s), a(t + 1));
          }
          e.addEventListener("keydown", function (t) {
            var a = e.value.length,
              s = t.key;
            if (t.keyCode > 46) {
              if (a >= o.length)
                return t.preventDefault(), t.stopPropagation(), !1, !1;
              switch (o[a]) {
                case i:
                  if (s.toUpperCase() == s.toLowerCase())
                    return t.preventDefault(), t.stopPropagation(), !1, !1;
                  break;
                case n:
                  if (isNaN(s))
                    return t.preventDefault(), t.stopPropagation(), !1, !1;
                  break;
                case r:
                  break;
                default:
                  if (s !== o[a])
                    return t.preventDefault(), t.stopPropagation(), !1, !1;
              }
              !0;
            }
          }),
            e.addEventListener("keyup", function (o) {
              o.keyCode > 46 && t.maskAutoFill && a(e.value.length);
            }),
            e.placeholder || (e.placeholder = o),
            t.maskAutoFill && a(e.value.length);
        }),
        (S.prototype.getEditedCells = function () {
          var e = [];
          return (
            this.editedCells.forEach(function (t) {
              e.push(t.getComponent());
            }),
            e
          );
        }),
        (S.prototype.clearEdited = function (e) {
          var t;
          e.modules.edit &&
            e.modules.edit.edited &&
            ((e.modules.edit.edited = !1),
            e.modules.validate && (e.modules.validate.invalid = !1)),
            (t = this.editedCells.indexOf(e)) > -1 &&
              this.editedCells.splice(t, 1);
        }),
        (S.prototype.editors = {
          input: function (e, t, o, i, n) {
            var a = e.getValue(),
              s = document.createElement("input");
            if (
              (s.setAttribute("type", n.search ? "search" : "text"),
              (s.style.padding = "4px"),
              (s.style.width = "100%"),
              (s.style.boxSizing = "border-box"),
              n.elementAttributes && "object" == r(n.elementAttributes))
            )
              for (var l in n.elementAttributes)
                "+" == l.charAt(0)
                  ? ((l = l.slice(1)),
                    s.setAttribute(
                      l,
                      s.getAttribute(l) + n.elementAttributes["+" + l],
                    ))
                  : s.setAttribute(l, n.elementAttributes[l]);
            function c(e) {
              (null == a && "" !== s.value) || s.value !== a
                ? o(s.value) && (a = s.value)
                : i();
            }
            return (
              (s.value = void 0 !== a ? a : ""),
              t(function () {
                s.focus({ preventScroll: !0 }), (s.style.height = "100%");
              }),
              s.addEventListener("change", c),
              s.addEventListener("blur", c),
              s.addEventListener("keydown", function (e) {
                switch (e.keyCode) {
                  case 13:
                    c();
                    break;
                  case 27:
                    i();
                    break;
                  case 35:
                  case 36:
                    e.stopPropagation();
                }
              }),
              n.mask && this.table.modules.edit.maskInput(s, n),
              s
            );
          },
          textarea: function (e, t, o, i, n) {
            var a = e.getValue(),
              s = n.verticalNavigation || "hybrid",
              l = String(null != a ? a : ""),
              c =
                ((l.match(/(?:\r\n|\r|\n)/g) || []).length,
                document.createElement("textarea")),
              u = 0;
            if (
              ((c.style.display = "block"),
              (c.style.padding = "2px"),
              (c.style.height = "100%"),
              (c.style.width = "100%"),
              (c.style.boxSizing = "border-box"),
              (c.style.whiteSpace = "pre-wrap"),
              (c.style.resize = "none"),
              n.elementAttributes && "object" == r(n.elementAttributes))
            )
              for (var d in n.elementAttributes)
                "+" == d.charAt(0)
                  ? ((d = d.slice(1)),
                    c.setAttribute(
                      d,
                      c.getAttribute(d) + n.elementAttributes["+" + d],
                    ))
                  : c.setAttribute(d, n.elementAttributes[d]);
            function p(t) {
              (null == a && "" !== c.value) || c.value !== a
                ? (o(c.value) && (a = c.value),
                  setTimeout(function () {
                    e.getRow().normalizeHeight();
                  }, 300))
                : i();
            }
            return (
              (c.value = l),
              t(function () {
                c.focus({ preventScroll: !0 }),
                  (c.style.height = "100%"),
                  c.scrollHeight,
                  (c.style.height = c.scrollHeight + "px"),
                  e.getRow().normalizeHeight();
              }),
              c.addEventListener("change", p),
              c.addEventListener("blur", p),
              c.addEventListener("keyup", function () {
                c.style.height = "";
                var t = c.scrollHeight;
                (c.style.height = t + "px"),
                  t != u && ((u = t), e.getRow().normalizeHeight());
              }),
              c.addEventListener("keydown", function (e) {
                switch (e.keyCode) {
                  case 27:
                    i();
                    break;
                  case 38:
                    ("editor" == s || ("hybrid" == s && c.selectionStart)) &&
                      (e.stopImmediatePropagation(), e.stopPropagation());
                    break;
                  case 40:
                    ("editor" == s ||
                      ("hybrid" == s && c.selectionStart !== c.value.length)) &&
                      (e.stopImmediatePropagation(), e.stopPropagation());
                    break;
                  case 35:
                  case 36:
                    e.stopPropagation();
                }
              }),
              n.mask && this.table.modules.edit.maskInput(c, n),
              c
            );
          },
          number: function (e, t, o, i, n) {
            var a = e.getValue(),
              s = n.verticalNavigation || "editor",
              l = document.createElement("input");
            if (
              (l.setAttribute("type", "number"),
              void 0 !== n.max && l.setAttribute("max", n.max),
              void 0 !== n.min && l.setAttribute("min", n.min),
              void 0 !== n.step && l.setAttribute("step", n.step),
              (l.style.padding = "4px"),
              (l.style.width = "100%"),
              (l.style.boxSizing = "border-box"),
              n.elementAttributes && "object" == r(n.elementAttributes))
            )
              for (var c in n.elementAttributes)
                "+" == c.charAt(0)
                  ? ((c = c.slice(1)),
                    l.setAttribute(
                      c,
                      l.getAttribute(c) + n.elementAttributes["+" + c],
                    ))
                  : l.setAttribute(c, n.elementAttributes[c]);
            l.value = a;
            var u = function (e) {
              d();
            };
            function d() {
              var e = l.value;
              isNaN(e) || "" === e || (e = Number(e)),
                e !== a ? o(e) && (a = e) : i();
            }
            return (
              t(function () {
                l.removeEventListener("blur", u),
                  l.focus({ preventScroll: !0 }),
                  (l.style.height = "100%"),
                  l.addEventListener("blur", u);
              }),
              l.addEventListener("keydown", function (e) {
                switch (e.keyCode) {
                  case 13:
                    d();
                    break;
                  case 27:
                    i();
                    break;
                  case 38:
                  case 40:
                    "editor" == s &&
                      (e.stopImmediatePropagation(), e.stopPropagation());
                    break;
                  case 35:
                  case 36:
                    e.stopPropagation();
                }
              }),
              n.mask && this.table.modules.edit.maskInput(l, n),
              l
            );
          },
          range: function (e, t, o, i, n) {
            var a = e.getValue(),
              s = document.createElement("input");
            if (
              (s.setAttribute("type", "range"),
              void 0 !== n.max && s.setAttribute("max", n.max),
              void 0 !== n.min && s.setAttribute("min", n.min),
              void 0 !== n.step && s.setAttribute("step", n.step),
              (s.style.padding = "4px"),
              (s.style.width = "100%"),
              (s.style.boxSizing = "border-box"),
              n.elementAttributes && "object" == r(n.elementAttributes))
            )
              for (var l in n.elementAttributes)
                "+" == l.charAt(0)
                  ? ((l = l.slice(1)),
                    s.setAttribute(
                      l,
                      s.getAttribute(l) + n.elementAttributes["+" + l],
                    ))
                  : s.setAttribute(l, n.elementAttributes[l]);
            function c() {
              var e = s.value;
              isNaN(e) || "" === e || (e = Number(e)),
                e != a ? o(e) && (a = e) : i();
            }
            return (
              (s.value = a),
              t(function () {
                s.focus({ preventScroll: !0 }), (s.style.height = "100%");
              }),
              s.addEventListener("blur", function (e) {
                c();
              }),
              s.addEventListener("keydown", function (e) {
                switch (e.keyCode) {
                  case 13:
                    c();
                    break;
                  case 27:
                    i();
                }
              }),
              s
            );
          },
          select: function (e, t, o, i, n) {
            var a = this,
              s = this,
              l = e.getElement(),
              c = e.getValue(),
              u = n.verticalNavigation || "editor",
              d =
                void 0 !== c || null === c
                  ? Array.isArray(c)
                    ? c
                    : [c]
                  : void 0 !== n.defaultValue
                  ? n.defaultValue
                  : [],
              p = document.createElement("input"),
              h = document.createElement("div"),
              m = n.multiselect,
              f = [],
              b = {},
              v = [],
              y = [],
              w = !0,
              E = !1,
              C = "",
              R = null;
            function x(t) {
              var o,
                i = {},
                n = s.table.getData();
              return (
                (o = t
                  ? s.table.columnManager.getColumnByField(t)
                  : e.getColumn()._getSelf())
                  ? n.forEach(function (e) {
                      var t = o.getFieldValue(e);
                      null != t && "" !== t && (i[t] = !0);
                    })
                  : console.warn(
                      "unable to find matching column to create select lookup list:",
                      t,
                    ),
                Object.keys(i)
              );
            }
            function _(t, o) {
              var i = [],
                a = [];
              function s(e) {
                e = {
                  label: e.label,
                  value: e.value,
                  itemParams: e.itemParams,
                  elementAttributes: e.elementAttributes,
                  element: !1,
                };
                return o.indexOf(e.value) > -1 && S(e), i.push(e), a.push(e), e;
              }
              if (("function" == typeof t && (t = t(e)), Array.isArray(t)))
                t.forEach(function (e) {
                  var t;
                  "object" === (void 0 === e ? "undefined" : r(e))
                    ? e.options
                      ? ((t = {
                          label: e.label,
                          group: !0,
                          itemParams: e.itemParams,
                          elementAttributes: e.elementAttributes,
                          element: !1,
                        }),
                        a.push(t),
                        e.options.forEach(function (e) {
                          s(e);
                        }))
                      : s(e)
                    : ((t = { label: e, value: e, element: !1 }),
                      o.indexOf(t.value) > -1 && S(t),
                      i.push(t),
                      a.push(t));
                });
              else
                for (var l in t) {
                  var c = { label: t[l], value: l, element: !1 };
                  o.indexOf(c.value) > -1 && S(c), i.push(c), a.push(c);
                }
              n.sortValuesList &&
                (i.sort(function (e, t) {
                  return e.label < t.label ? -1 : e.label > t.label ? 1 : 0;
                }),
                a.sort(function (e, t) {
                  return e.label < t.label ? -1 : e.label > t.label ? 1 : 0;
                }),
                "asc" !== n.sortValuesList && (i.reverse(), a.reverse())),
                (f = i),
                (v = a),
                (function () {
                  for (; h.firstChild; ) h.removeChild(h.firstChild);
                  v.forEach(function (t) {
                    var o = t.element;
                    if (!o) {
                      if (
                        ((o = document.createElement("div")),
                        (t.label = n.listItemFormatter
                          ? n.listItemFormatter(
                              t.value,
                              t.label,
                              e,
                              o,
                              t.itemParams,
                            )
                          : t.label),
                        t.group
                          ? (o.classList.add(
                              "tabulator-edit-select-list-group",
                            ),
                            (o.tabIndex = 0),
                            (o.innerHTML = "" === t.label ? "&nbsp;" : t.label))
                          : (o.classList.add("tabulator-edit-select-list-item"),
                            (o.tabIndex = 0),
                            (o.innerHTML = "" === t.label ? "&nbsp;" : t.label),
                            o.addEventListener("click", function () {
                              (E = !0),
                                setTimeout(function () {
                                  E = !1;
                                }, 10),
                                m ? (k(t), p.focus()) : D(t);
                            }),
                            y.indexOf(t) > -1 && o.classList.add("active")),
                        t.elementAttributes &&
                          "object" == r(t.elementAttributes))
                      )
                        for (var i in t.elementAttributes)
                          "+" == i.charAt(0)
                            ? ((i = i.slice(1)),
                              o.setAttribute(
                                i,
                                p.getAttribute(i) +
                                  t.elementAttributes["+" + i],
                              ))
                            : o.setAttribute(i, t.elementAttributes[i]);
                      o.addEventListener("mousedown", function () {
                        (w = !1),
                          setTimeout(function () {
                            w = !0;
                          }, 10);
                      }),
                        (t.element = o);
                    }
                    h.appendChild(o);
                  });
                })();
            }
            function M(e, t) {
              !m && b && b.element && b.element.classList.remove("active"),
                b && b.element && b.element.classList.remove("focused"),
                (b = e),
                e.element &&
                  (e.element.classList.add("focused"),
                  t && e.element.classList.add("active")),
                e &&
                  e.element &&
                  e.element.scrollIntoView &&
                  e.element.scrollIntoView({
                    behavior: "smooth",
                    block: "nearest",
                    inline: "start",
                  });
            }
            function S(e) {
              -1 == y.indexOf(e) && (y.push(e), M(e, !0)), z();
            }
            function T(e) {
              var t = y[e];
              e > -1 &&
                (y.splice(e, 1),
                t.element && t.element.classList.remove("active"));
            }
            function k(e) {
              e || (e = b);
              var t = y.indexOf(e);
              t > -1 ? T(t) : (!0 !== m && y.length >= m && T(0), S(e)), z();
            }
            function D(e) {
              A(),
                e || (e = b),
                e && ((p.value = e.label), o(e.value)),
                (d = [e.value]);
            }
            function L(e) {
              e || A();
              var t = [];
              y.forEach(function (e) {
                t.push(e.value);
              }),
                (d = t),
                o(t);
            }
            function z() {
              var e = [];
              y.forEach(function (t) {
                e.push(t.label);
              }),
                (p.value = e.join(", ")),
                !1 === s.currentCell && L(!0);
            }
            function P() {
              A(), i();
            }
            function A() {
              h.parentNode && h.parentNode.removeChild(h),
                s.table.rowManager.element.removeEventListener("scroll", P);
            }
            if (
              ((Array.isArray(n) ||
                (!Array.isArray(n) &&
                  "object" === (void 0 === n ? "undefined" : r(n)) &&
                  !n.values)) &&
                (console.warn(
                  "DEPRECATION WARNING - values for the select editor must now be passed into the values property of the editorParams object, not as the editorParams object",
                ),
                (n = { values: n })),
              p.setAttribute("type", "text"),
              (p.style.padding = "4px"),
              (p.style.width = "100%"),
              (p.style.boxSizing = "border-box"),
              (p.style.cursor = "default"),
              (p.readOnly = 0 != this.currentCell),
              n.elementAttributes && "object" == r(n.elementAttributes))
            )
              for (var F in n.elementAttributes)
                "+" == F.charAt(0)
                  ? ((F = F.slice(1)),
                    p.setAttribute(
                      F,
                      p.getAttribute(F) + n.elementAttributes["+" + F],
                    ))
                  : p.setAttribute(F, n.elementAttributes[F]);
            return (
              (p.value = void 0 !== c || null === c ? c : ""),
              p.addEventListener("search", function (e) {
                p.value ||
                  (!(function () {
                    for (var e = y.length, t = 0; t < e; t++) T(0);
                  })(),
                  L());
              }),
              p.addEventListener("keydown", function (e) {
                var t;
                switch (e.keyCode) {
                  case 38:
                    (t = f.indexOf(b)),
                      ("editor" == u || ("hybrid" == u && t)) &&
                        (e.stopImmediatePropagation(),
                        e.stopPropagation(),
                        e.preventDefault(),
                        t > 0 && M(f[t - 1], !m));
                    break;
                  case 40:
                    (t = f.indexOf(b)),
                      ("editor" == u || ("hybrid" == u && t < f.length - 1)) &&
                        (e.stopImmediatePropagation(),
                        e.stopPropagation(),
                        e.preventDefault(),
                        t < f.length - 1 && M(-1 == t ? f[0] : f[t + 1], !m));
                    break;
                  case 37:
                  case 39:
                    e.stopImmediatePropagation(),
                      e.stopPropagation(),
                      e.preventDefault();
                    break;
                  case 13:
                    m ? k() : D();
                    break;
                  case 27:
                    P();
                    break;
                  case 9:
                    break;
                  default:
                    !1 === s.currentCell && e.preventDefault(),
                      e.keyCode >= 38 &&
                        e.keyCode <= 90 &&
                        (function (e) {
                          clearTimeout(R);
                          var t = String.fromCharCode(
                            event.keyCode,
                          ).toLowerCase();
                          C += t.toLowerCase();
                          var o = f.find(function (e) {
                            return (
                              void 0 !== e.label &&
                              e.label.toLowerCase().startsWith(C)
                            );
                          });
                          o && M(o, !m),
                            (R = setTimeout(function () {
                              C = "";
                            }, 800));
                        })(e.keyCode);
                }
              }),
              p.addEventListener("blur", function (e) {
                w && (m ? L() : P());
              }),
              p.addEventListener("focus", function (e) {
                E ||
                  (function () {
                    if (((y = []), !h.parentNode)) {
                      !0 === n.values
                        ? _(x(), d)
                        : "string" == typeof n.values
                        ? _(x(n.values), d)
                        : _(n.values || [], d);
                      var e = g.prototype.helpers.elOffset(l);
                      (h.style.minWidth = l.offsetWidth + "px"),
                        (h.style.top = e.top + l.offsetHeight + "px"),
                        (h.style.left = e.left + "px"),
                        h.addEventListener("mousedown", function (e) {
                          (w = !1),
                            setTimeout(function () {
                              w = !0;
                            }, 10);
                        }),
                        document.body.appendChild(h);
                    }
                  })();
              }),
              (h = document.createElement("div")).classList.add(
                "tabulator-edit-select-list",
              ),
              t(function () {
                (p.style.height = "100%"), p.focus({ preventScroll: !0 });
              }),
              setTimeout(function () {
                a.table.rowManager.element.addEventListener("scroll", P);
              }, 10),
              p
            );
          },
          autocomplete: function (e, t, o, i, n) {
            var a = this,
              s = this,
              l = e.getElement(),
              c = e.getValue(),
              u = n.verticalNavigation || "editor",
              d =
                void 0 !== c || null === c
                  ? c
                  : void 0 !== n.defaultValue
                  ? n.defaultValue
                  : "",
              p = document.createElement("input"),
              h = document.createElement("div"),
              m = [],
              f = !1,
              b = !0,
              v = !1;
            if (
              (p.setAttribute("type", "search"),
              (p.style.padding = "4px"),
              (p.style.width = "100%"),
              (p.style.boxSizing = "border-box"),
              n.elementAttributes && "object" == r(n.elementAttributes))
            )
              for (var y in n.elementAttributes)
                "+" == y.charAt(0)
                  ? ((y = y.slice(1)),
                    p.setAttribute(
                      y,
                      p.getAttribute(y) + n.elementAttributes["+" + y],
                    ))
                  : p.setAttribute(y, n.elementAttributes[y]);
            function w() {
              !0 === n.values
                ? (v = E())
                : "string" == typeof n.values && (v = E(n.values));
            }
            function E(t) {
              var o,
                i = {},
                r = s.table.getData();
              return (
                (o = t
                  ? s.table.columnManager.getColumnByField(t)
                  : e.getColumn()._getSelf())
                  ? (r.forEach(function (e) {
                      var t = o.getFieldValue(e);
                      null != t && "" !== t && (i[t] = !0);
                    }),
                    (i = n.sortValuesList
                      ? "asc" == n.sortValuesList
                        ? Object.keys(i).sort()
                        : Object.keys(i).sort().reverse()
                      : Object.keys(i)))
                  : console.warn(
                      "unable to find matching column to create autocomplete lookup list:",
                      t,
                    ),
                i
              );
            }
            function C(e, t) {
              var o,
                i,
                r = [];
              (o = v || n.values || []),
                n.searchFunc
                  ? (r = n.searchFunc(e, o)) instanceof Promise
                    ? (R(
                        void 0 !== n.searchingPlaceholder
                          ? n.searchingPlaceholder
                          : "Searching...",
                      ),
                      r
                        .then(function (e) {
                          M(x(e), t);
                        })
                        .catch(function (e) {
                          console.err(
                            "error in autocomplete search promise:",
                            e,
                          );
                        }))
                    : M(x(r), t)
                  : ((i = x(o)),
                    "" === e
                      ? n.showListOnEmpty && (r = i)
                      : i.forEach(function (t) {
                          (null === t.value && void 0 === t.value) ||
                            ((String(t.value)
                              .toLowerCase()
                              .indexOf(String(e).toLowerCase()) > -1 ||
                              String(t.title)
                                .toLowerCase()
                                .indexOf(String(e).toLowerCase()) > -1) &&
                              r.push(t));
                        }),
                    M(r, t));
            }
            function R(e) {
              var t = document.createElement("div");
              _(),
                !1 !== e &&
                  (t.classList.add("tabulator-edit-select-list-notice"),
                  (t.tabIndex = 0),
                  e instanceof Node ? t.appendChild(e) : (t.innerHTML = e),
                  h.appendChild(t));
            }
            function x(e) {
              var t = [];
              if (Array.isArray(e))
                e.forEach(function (e) {
                  var o = {};
                  "object" === (void 0 === e ? "undefined" : r(e))
                    ? ((o.title = n.listItemFormatter
                        ? n.listItemFormatter(e.value, e.label)
                        : e.label),
                      (o.value = e.value))
                    : ((o.title = n.listItemFormatter
                        ? n.listItemFormatter(e, e)
                        : e),
                      (o.value = e)),
                    t.push(o);
                });
              else
                for (var o in e) {
                  var i = {
                    title: n.listItemFormatter
                      ? n.listItemFormatter(o, e[o])
                      : e[o],
                    value: o,
                  };
                  t.push(i);
                }
              return t;
            }
            function _() {
              for (; h.firstChild; ) h.removeChild(h.firstChild);
            }
            function M(e, t) {
              e.length
                ? (function (e, t) {
                    var o = !1;
                    _(),
                      (m = e),
                      m.forEach(function (e) {
                        var i = e.element;
                        i ||
                          ((i = document.createElement("div")).classList.add(
                            "tabulator-edit-select-list-item",
                          ),
                          (i.tabIndex = 0),
                          (i.innerHTML = e.title),
                          i.addEventListener("click", function (t) {
                            T(e), S();
                          }),
                          i.addEventListener("mousedown", function (e) {
                            (b = !1),
                              setTimeout(function () {
                                b = !0;
                              }, 10);
                          }),
                          (e.element = i),
                          t &&
                            e.value == c &&
                            ((p.value = e.title),
                            e.element.classList.add("active"),
                            (o = !0)),
                          e === f &&
                            (e.element.classList.add("active"), (o = !0))),
                          h.appendChild(i);
                      }),
                      o || T(!1);
                  })(e, t)
                : n.emptyPlaceholder && R(n.emptyPlaceholder);
            }
            function S() {
              k(),
                f
                  ? c !== f.value
                    ? ((c = f.value), (p.value = f.title), o(f.value))
                    : i()
                  : n.freetext || (n.allowEmpty && "" === p.value)
                  ? ((c = p.value), o(p.value))
                  : i();
            }
            function T(e, t) {
              f && f.element && f.element.classList.remove("active"),
                (f = e),
                e && e.element && e.element.classList.add("active"),
                e &&
                  e.element &&
                  e.element.scrollIntoView &&
                  e.element.scrollIntoView({
                    behavior: "smooth",
                    block: "nearest",
                    inline: "start",
                  });
            }
            function k() {
              h.parentNode && h.parentNode.removeChild(h),
                s.table.rowManager.element.removeEventListener("scroll", D);
            }
            function D() {
              k(), i();
            }
            return (
              h.classList.add("tabulator-edit-select-list"),
              h.addEventListener("mousedown", function (e) {
                (b = !1),
                  setTimeout(function () {
                    b = !0;
                  }, 10);
              }),
              p.addEventListener("keydown", function (e) {
                var t;
                switch (e.keyCode) {
                  case 38:
                    (t = m.indexOf(f)),
                      ("editor" == u || ("hybrid" == u && t)) &&
                        (e.stopImmediatePropagation(),
                        e.stopPropagation(),
                        e.preventDefault(),
                        T(t > 0 && m[t - 1]));
                    break;
                  case 40:
                    (t = m.indexOf(f)),
                      ("editor" == u || ("hybrid" == u && t < m.length - 1)) &&
                        (e.stopImmediatePropagation(),
                        e.stopPropagation(),
                        e.preventDefault(),
                        t < m.length - 1 && T(-1 == t ? m[0] : m[t + 1]));
                    break;
                  case 37:
                  case 39:
                    e.stopImmediatePropagation(), e.stopPropagation();
                    break;
                  case 13:
                    S();
                    break;
                  case 27:
                    D();
                    break;
                  case 36:
                  case 35:
                    e.stopImmediatePropagation();
                }
              }),
              p.addEventListener("keyup", function (e) {
                switch (e.keyCode) {
                  case 38:
                  case 37:
                  case 39:
                  case 40:
                  case 13:
                  case 27:
                    break;
                  default:
                    C(p.value);
                }
              }),
              p.addEventListener("search", function (e) {
                C(p.value);
              }),
              p.addEventListener("blur", function (e) {
                b && S();
              }),
              p.addEventListener("focus", function (e) {
                var t = d;
                w(),
                  (function () {
                    if (!h.parentNode) {
                      for (console.log("show", d); h.firstChild; )
                        h.removeChild(h.firstChild);
                      var e = g.prototype.helpers.elOffset(l);
                      (h.style.minWidth = l.offsetWidth + "px"),
                        (h.style.top = e.top + l.offsetHeight + "px"),
                        (h.style.left = e.left + "px"),
                        document.body.appendChild(h);
                    }
                  })(),
                  (p.value = t),
                  C(t, !0);
              }),
              t(function () {
                (p.style.height = "100%"), p.focus({ preventScroll: !0 });
              }),
              n.mask && this.table.modules.edit.maskInput(p, n),
              setTimeout(function () {
                a.table.rowManager.element.addEventListener("scroll", D);
              }, 10),
              w(),
              (p.value = d),
              C(d, !0),
              p
            );
          },
          star: function (e, t, o, i, n) {
            var a = this,
              s = e.getElement(),
              l = e.getValue(),
              c = s.getElementsByTagName("svg").length || 5,
              u = s.getElementsByTagName("svg")[0]
                ? s.getElementsByTagName("svg")[0].getAttribute("width")
                : 14,
              d = [],
              p = document.createElement("div"),
              h = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            function m(e) {
              d.forEach(function (t, o) {
                o < e
                  ? ("ie" == a.table.browser
                      ? t.setAttribute("class", "tabulator-star-active")
                      : t.classList.replace(
                          "tabulator-star-inactive",
                          "tabulator-star-active",
                        ),
                    (t.innerHTML =
                      '<polygon fill="#488CE9" stroke="#014AAE" stroke-width="37.6152" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="259.216,29.942 330.27,173.919 489.16,197.007 374.185,309.08 401.33,467.31 259.216,392.612 117.104,467.31 144.25,309.08 29.274,197.007 188.165,173.919 "/>'))
                  : ("ie" == a.table.browser
                      ? t.setAttribute("class", "tabulator-star-inactive")
                      : t.classList.replace(
                          "tabulator-star-active",
                          "tabulator-star-inactive",
                        ),
                    (t.innerHTML =
                      '<polygon fill="#010155" stroke="#686868" stroke-width="37.6152" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="259.216,29.942 330.27,173.919 489.16,197.007 374.185,309.08 401.33,467.31 259.216,392.612 117.104,467.31 144.25,309.08 29.274,197.007 188.165,173.919 "/>'));
              });
            }
            function f(e) {
              var t = document.createElement("span"),
                i = h.cloneNode(!0);
              d.push(i),
                t.addEventListener("mouseenter", function (t) {
                  t.stopPropagation(), t.stopImmediatePropagation(), m(e);
                }),
                t.addEventListener("mousemove", function (e) {
                  e.stopPropagation(), e.stopImmediatePropagation();
                }),
                t.addEventListener("click", function (t) {
                  t.stopPropagation(),
                    t.stopImmediatePropagation(),
                    o(e),
                    s.blur();
                }),
                t.appendChild(i),
                p.appendChild(t);
            }
            function g(e) {
              (l = e), m(e);
            }
            if (
              ((s.style.whiteSpace = "nowrap"),
              (s.style.overflow = "hidden"),
              (s.style.textOverflow = "ellipsis"),
              (p.style.verticalAlign = "middle"),
              (p.style.display = "inline-block"),
              (p.style.padding = "4px"),
              h.setAttribute("width", u),
              h.setAttribute("height", u),
              h.setAttribute("viewBox", "0 0 512 512"),
              h.setAttribute("xml:space", "preserve"),
              (h.style.padding = "0 1px"),
              n.elementAttributes && "object" == r(n.elementAttributes))
            )
              for (var b in n.elementAttributes)
                "+" == b.charAt(0)
                  ? ((b = b.slice(1)),
                    p.setAttribute(
                      b,
                      p.getAttribute(b) + n.elementAttributes["+" + b],
                    ))
                  : p.setAttribute(b, n.elementAttributes[b]);
            for (var v = 1; v <= c; v++) f(v);
            return (
              m((l = Math.min(parseInt(l), c))),
              p.addEventListener("mousemove", function (e) {
                m(0);
              }),
              p.addEventListener("click", function (e) {
                o(0);
              }),
              s.addEventListener("blur", function (e) {
                i();
              }),
              s.addEventListener("keydown", function (e) {
                switch (e.keyCode) {
                  case 39:
                    g(l + 1);
                    break;
                  case 37:
                    g(l - 1);
                    break;
                  case 13:
                    o(l);
                    break;
                  case 27:
                    i();
                }
              }),
              p
            );
          },
          progress: function (e, t, o, i, n) {
            var a,
              s,
              l = e.getElement(),
              c =
                void 0 === n.max
                  ? l.getElementsByTagName("div")[0].getAttribute("max") || 100
                  : n.max,
              u =
                void 0 === n.min
                  ? l.getElementsByTagName("div")[0].getAttribute("min") || 0
                  : n.min,
              d = (c - u) / 100,
              p = e.getValue() || 0,
              h = document.createElement("div"),
              m = document.createElement("div");
            function f() {
              var e = window.getComputedStyle(l, null),
                t =
                  d *
                    Math.round(
                      m.offsetWidth /
                        ((l.clientWidth -
                          parseInt(e.getPropertyValue("padding-left")) -
                          parseInt(e.getPropertyValue("padding-right"))) /
                          100),
                    ) +
                  u;
              o(t),
                l.setAttribute("aria-valuenow", t),
                l.setAttribute("aria-label", p);
            }
            if (
              ((h.style.position = "absolute"),
              (h.style.right = "0"),
              (h.style.top = "0"),
              (h.style.bottom = "0"),
              (h.style.width = "5px"),
              h.classList.add("tabulator-progress-handle"),
              (m.style.display = "inline-block"),
              (m.style.position = "relative"),
              (m.style.height = "100%"),
              (m.style.backgroundColor = "#488CE9"),
              (m.style.maxWidth = "100%"),
              (m.style.minWidth = "0%"),
              n.elementAttributes && "object" == r(n.elementAttributes))
            )
              for (var g in n.elementAttributes)
                "+" == g.charAt(0)
                  ? ((g = g.slice(1)),
                    m.setAttribute(
                      g,
                      m.getAttribute(g) + n.elementAttributes["+" + g],
                    ))
                  : m.setAttribute(g, n.elementAttributes[g]);
            return (
              (l.style.padding = "4px 4px"),
              (p = Math.min(parseFloat(p), c)),
              (p = Math.max(parseFloat(p), u)),
              (p = Math.round((p - u) / d)),
              (m.style.width = p + "%"),
              l.setAttribute("aria-valuemin", u),
              l.setAttribute("aria-valuemax", c),
              m.appendChild(h),
              h.addEventListener("mousedown", function (e) {
                (a = e.screenX), (s = m.offsetWidth);
              }),
              h.addEventListener("mouseover", function () {
                h.style.cursor = "ew-resize";
              }),
              l.addEventListener("mousemove", function (e) {
                a && (m.style.width = s + e.screenX - a + "px");
              }),
              l.addEventListener("mouseup", function (e) {
                a &&
                  (e.stopPropagation(),
                  e.stopImmediatePropagation(),
                  (a = !1),
                  (s = !1),
                  f());
              }),
              l.addEventListener("keydown", function (e) {
                switch (e.keyCode) {
                  case 39:
                    e.preventDefault(),
                      (m.style.width =
                        m.clientWidth + l.clientWidth / 100 + "px");
                    break;
                  case 37:
                    e.preventDefault(),
                      (m.style.width =
                        m.clientWidth - l.clientWidth / 100 + "px");
                    break;
                  case 9:
                  case 13:
                    f();
                    break;
                  case 27:
                    i();
                }
              }),
              l.addEventListener("blur", function () {
                i();
              }),
              m
            );
          },
          tickCross: function (e, t, o, i, n) {
            var a = e.getValue(),
              s = document.createElement("input"),
              l = n.tristate,
              c = void 0 === n.indeterminateValue ? null : n.indeterminateValue,
              u = !1;
            if (
              (s.setAttribute("type", "checkbox"),
              (s.style.marginTop = "5px"),
              (s.style.boxSizing = "border-box"),
              n.elementAttributes && "object" == r(n.elementAttributes))
            )
              for (var d in n.elementAttributes)
                "+" == d.charAt(0)
                  ? ((d = d.slice(1)),
                    s.setAttribute(
                      d,
                      s.getAttribute(d) + n.elementAttributes["+" + d],
                    ))
                  : s.setAttribute(d, n.elementAttributes[d]);
            function p(e) {
              return l
                ? e
                  ? u
                    ? c
                    : s.checked
                  : s.checked && !u
                  ? ((s.checked = !1), (s.indeterminate = !0), (u = !0), c)
                  : ((u = !1), s.checked)
                : s.checked;
            }
            return (
              (s.value = a),
              !l ||
                (void 0 !== a && a !== c && "" !== a) ||
                ((u = !0), (s.indeterminate = !0)),
              "firefox" != this.table.browser &&
                t(function () {
                  s.focus({ preventScroll: !0 });
                }),
              (s.checked = !0 === a || "true" === a || "True" === a || 1 === a),
              t(function () {
                s.focus();
              }),
              s.addEventListener("change", function (e) {
                o(p());
              }),
              s.addEventListener("blur", function (e) {
                o(p(!0));
              }),
              s.addEventListener("keydown", function (e) {
                13 == e.keyCode && o(p()), 27 == e.keyCode && i();
              }),
              s
            );
          },
        }),
        g.prototype.registerModule("edit", S);
      var T = function (e, t, o, i) {
          (this.type = e),
            (this.columns = t),
            (this.component = o || !1),
            (this.indent = i || 0);
        },
        k = function (e, t, o, i, n) {
          (this.value = e),
            (this.component = t || !1),
            (this.width = o),
            (this.height = i),
            (this.depth = n);
        },
        D = function (e) {
          (this.table = e),
            (this.config = {}),
            (this.cloneTableStyle = !0),
            (this.colVisProp = "");
        };
      (D.prototype.generateExportList = function (e, t, o, i) {
        (this.cloneTableStyle = t),
          (this.config = e || {}),
          (this.colVisProp = i);
        var n =
            !1 !== this.config.columnHeaders
              ? this.headersToExportRows(this.generateColumnGroupHeaders())
              : [],
          r = this.bodyToExportRows(this.rowLookup(o));
        return n.concat(r);
      }),
        (D.prototype.genereateTable = function (e, t, o, i) {
          var n = this.generateExportList(e, t, o, i);
          return this.genereateTableElement(n);
        }),
        (D.prototype.rowLookup = function (e) {
          var t = this,
            o = [];
          if ("function" == typeof e)
            e.call(this.table).forEach(function (e) {
              (e = t.table.rowManager.findRow(e)) && o.push(e);
            });
          else
            switch (e) {
              case !0:
              case "visible":
                o = this.table.rowManager.getVisibleRows(!0);
                break;
              case "all":
                o = this.table.rowManager.rows;
                break;
              case "selected":
                o = this.table.modules.selectRow.selectedRows;
                break;
              default:
                o = this.table.options.pagination
                  ? this.table.rowManager.getDisplayRows(
                      this.table.rowManager.displayRows.length - 2,
                    )
                  : this.table.rowManager.getDisplayRows();
            }
          return Object.assign([], o);
        }),
        (D.prototype.generateColumnGroupHeaders = function () {
          var e = this,
            t = [];
          return (
            (!1 !== this.config.columnGroups
              ? this.table.columnManager.columns
              : this.table.columnManager.columnsByIndex
            ).forEach(function (o) {
              var i = e.processColumnGroup(o);
              i && t.push(i);
            }),
            t
          );
        }),
        (D.prototype.processColumnGroup = function (e) {
          var t = this,
            o = e.columns,
            i = 0,
            n = {
              title:
                e.definition[
                  "title" +
                    (this.colVisProp.charAt(0).toUpperCase() +
                      this.colVisProp.slice(1))
                ] || e.definition.title,
              column: e,
              depth: 1,
            };
          if (o.length) {
            if (
              ((n.subGroups = []),
              (n.width = 0),
              o.forEach(function (e) {
                var o = t.processColumnGroup(e);
                o &&
                  ((n.width += o.width),
                  n.subGroups.push(o),
                  o.depth > i && (i = o.depth));
              }),
              (n.depth += i),
              !n.width)
            )
              return !1;
          } else {
            if (!this.columnVisCheck(e)) return !1;
            n.width = 1;
          }
          return n;
        }),
        (D.prototype.columnVisCheck = function (e) {
          return (
            !1 !== e.definition[this.colVisProp] &&
            (e.visible || (!e.visible && e.definition[this.colVisProp]))
          );
        }),
        (D.prototype.headersToExportRows = function (e) {
          var t = [],
            o = 0,
            i = [];
          function n(e, i) {
            var r = o - i;
            if (
              (void 0 === t[i] && (t[i] = []),
              (e.height = e.subGroups ? 1 : r - e.depth + 1),
              t[i].push(e),
              e.height > 1)
            )
              for (var a = 1; a < e.height; a++)
                void 0 === t[i + a] && (t[i + a] = []), t[i + a].push(!1);
            if (e.width > 1) for (var s = 1; s < e.width; s++) t[i].push(!1);
            e.subGroups &&
              e.subGroups.forEach(function (e) {
                n(e, i + 1);
              });
          }
          return (
            e.forEach(function (e) {
              e.depth > o && (o = e.depth);
            }),
            e.forEach(function (e) {
              n(e, 0);
            }),
            t.forEach(function (e) {
              var t = [];
              e.forEach(function (e) {
                e
                  ? t.push(
                      new k(
                        e.title,
                        e.column.getComponent(),
                        e.width,
                        e.height,
                        e.depth,
                      ),
                    )
                  : t.push(null);
              }),
                i.push(new T("header", t));
            }),
            i
          );
        }),
        (D.prototype.bodyToExportRows = function (e) {
          var t = this,
            o = [],
            i = [];
          return (
            this.table.columnManager.columnsByIndex.forEach(function (e) {
              t.columnVisCheck(e) && o.push(e.getComponent());
            }),
            !1 !== this.config.columnCalcs &&
              this.table.modExists("columnCalcs") &&
              (this.table.modules.columnCalcs.topInitialized &&
                e.unshift(this.table.modules.columnCalcs.topRow),
              this.table.modules.columnCalcs.botInitialized &&
                e.push(this.table.modules.columnCalcs.botRow)),
            (e = e.filter(function (e) {
              switch (e.type) {
                case "group":
                  return !1 !== t.config.rowGroups;
                case "calc":
                  return !1 !== t.config.columnCalcs;
                case "row":
                  return !(
                    t.table.options.dataTree &&
                    !1 === t.config.dataTree &&
                    e.modules.dataTree.parent
                  );
              }
              return !0;
            })).forEach(function (e, n) {
              var r = e.getData(t.colVisProp),
                a = [],
                s = 0;
              switch (e.type) {
                case "group":
                  (s = e.level),
                    a.push(new k(e.key, e.getComponent(), o.length, 1));
                  break;
                case "calc":
                case "row":
                  o.forEach(function (e) {
                    a.push(new k(e._column.getFieldValue(r), e, 1, 1));
                  }),
                    t.table.options.dataTree &&
                      !1 !== t.config.dataTree &&
                      (s = e.modules.dataTree.index);
              }
              i.push(new T(e.type, a, e.getComponent(), s));
            }),
            i
          );
        }),
        (D.prototype.genereateTableElement = function (e) {
          var t = this,
            o = document.createElement("table"),
            i = document.createElement("thead"),
            n = document.createElement("tbody"),
            r = this.lookupTableStyles(),
            a =
              this.table.options[
                "rowFormatter" +
                  (this.colVisProp.charAt(0).toUpperCase() +
                    this.colVisProp.slice(1))
              ],
            s = {};
          return (
            (s.rowFormatter = null !== a ? a : this.table.options.rowFormatter),
            this.table.options.dataTree &&
              !1 !== this.config.dataTree &&
              this.table.modExists("columnCalcs") &&
              (s.treeElementField = this.table.modules.dataTree.elementField),
            (s.groupHeader =
              this.table.options[
                "groupHeader" +
                  (this.colVisProp.charAt(0).toUpperCase() +
                    this.colVisProp.slice(1))
              ]),
            s.groupHeader &&
              !Array.isArray(s.groupHeader) &&
              (s.groupHeader = [s.groupHeader]),
            o.classList.add("tabulator-print-table"),
            this.mapElementStyles(
              this.table.columnManager.getHeadersElement(),
              i,
              [
                "border-top",
                "border-left",
                "border-right",
                "border-bottom",
                "background-color",
                "color",
                "font-weight",
                "font-family",
                "font-size",
              ],
            ),
            e.length > 1e3 &&
              console.warn(
                "It may take a long time to render an HTML table with more than 1000 rows",
              ),
            e.forEach(function (e, o) {
              switch (e.type) {
                case "header":
                  i.appendChild(t.genereateHeaderElement(e, s, r));
                  break;
                case "group":
                  n.appendChild(t.genereateGroupElement(e, s, r));
                  break;
                case "calc":
                  n.appendChild(t.genereateCalcElement(e, s, r));
                  break;
                case "row":
                  var a = t.genereateRowElement(e, s, r);
                  t.mapElementStyles(
                    o % 2 && r.evenRow ? r.evenRow : r.oddRow,
                    a,
                    [
                      "border-top",
                      "border-left",
                      "border-right",
                      "border-bottom",
                      "color",
                      "font-weight",
                      "font-family",
                      "font-size",
                      "background-color",
                    ],
                  ),
                    n.appendChild(a);
              }
            }),
            i.innerHTML && o.appendChild(i),
            o.appendChild(n),
            this.mapElementStyles(this.table.element, o, [
              "border-top",
              "border-left",
              "border-right",
              "border-bottom",
            ]),
            o
          );
        }),
        (D.prototype.lookupTableStyles = function () {
          var e = {};
          return (
            this.cloneTableStyle &&
              window.getComputedStyle &&
              ((e.oddRow = this.table.element.querySelector(
                ".tabulator-row-odd:not(.tabulator-group):not(.tabulator-calcs)",
              )),
              (e.evenRow = this.table.element.querySelector(
                ".tabulator-row-even:not(.tabulator-group):not(.tabulator-calcs)",
              )),
              (e.calcRow = this.table.element.querySelector(
                ".tabulator-row.tabulator-calcs",
              )),
              (e.firstRow = this.table.element.querySelector(
                ".tabulator-row:not(.tabulator-group):not(.tabulator-calcs)",
              )),
              (e.firstGroup =
                this.table.element.getElementsByClassName(
                  "tabulator-group",
                )[0]),
              e.firstRow &&
                ((e.styleCells =
                  e.firstRow.getElementsByClassName("tabulator-cell")),
                (e.firstCell = e.styleCells[0]),
                (e.lastCell = e.styleCells[e.styleCells.length - 1]))),
            e
          );
        }),
        (D.prototype.genereateHeaderElement = function (e, t, o) {
          var i = this,
            n = document.createElement("tr");
          return (
            e.columns.forEach(function (e) {
              if (e) {
                var t = document.createElement("th"),
                  o = e.component._column.definition.cssClass
                    ? e.component._column.definition.cssClass.split(" ")
                    : [];
                (t.colSpan = e.width),
                  (t.rowSpan = e.height),
                  (t.innerHTML = e.value),
                  i.cloneTableStyle && (t.style.boxSizing = "border-box"),
                  o.forEach(function (e) {
                    t.classList.add(e);
                  }),
                  i.mapElementStyles(e.component.getElement(), t, [
                    "text-align",
                    "border-top",
                    "border-left",
                    "border-right",
                    "border-bottom",
                    "background-color",
                    "color",
                    "font-weight",
                    "font-family",
                    "font-size",
                  ]),
                  i.mapElementStyles(e.component._column.contentElement, t, [
                    "padding-top",
                    "padding-left",
                    "padding-right",
                    "padding-bottom",
                  ]),
                  e.component._column.visible
                    ? i.mapElementStyles(e.component.getElement(), t, ["width"])
                    : e.component._column.definition.width &&
                      (t.style.width =
                        e.component._column.definition.width + "px"),
                  e.component._column.parent &&
                    i.mapElementStyles(
                      e.component._column.parent.groupElement,
                      t,
                      ["border-top"],
                    ),
                  n.appendChild(t);
              }
            }),
            n
          );
        }),
        (D.prototype.genereateGroupElement = function (e, t, o) {
          var i = document.createElement("tr"),
            n = document.createElement("td"),
            r = e.columns[0];
          return (
            i.classList.add("tabulator-print-table-row"),
            t.groupHeader && t.groupHeader[e.indent]
              ? (r.value = t.groupHeader[e.indent](
                  r.value,
                  e.component._group.getRowCount(),
                  e.component._group.getData(),
                  e.component,
                ))
              : !1 === t.groupHeader
              ? (r.value = r.value)
              : (r.value = e.component._group.generator(
                  r.value,
                  e.component._group.getRowCount(),
                  e.component._group.getData(),
                  e.component,
                )),
            (n.colSpan = r.width),
            (n.innerHTML = r.value),
            i.classList.add("tabulator-print-table-group"),
            i.classList.add("tabulator-group-level-" + e.indent),
            r.component.isVisible() &&
              i.classList.add("tabulator-group-visible"),
            this.mapElementStyles(o.firstGroup, i, [
              "border-top",
              "border-left",
              "border-right",
              "border-bottom",
              "color",
              "font-weight",
              "font-family",
              "font-size",
              "background-color",
            ]),
            this.mapElementStyles(o.firstGroup, n, [
              "padding-top",
              "padding-left",
              "padding-right",
              "padding-bottom",
            ]),
            i.appendChild(n),
            i
          );
        }),
        (D.prototype.genereateCalcElement = function (e, t, o) {
          var i = this.genereateRowElement(e, t, o);
          return (
            i.classList.add("tabulator-print-table-calcs"),
            this.mapElementStyles(o.calcRow, i, [
              "border-top",
              "border-left",
              "border-right",
              "border-bottom",
              "color",
              "font-weight",
              "font-family",
              "font-size",
              "background-color",
            ]),
            i
          );
        }),
        (D.prototype.genereateRowElement = function (e, t, o) {
          var n = this,
            a = document.createElement("tr");
          return (
            a.classList.add("tabulator-print-table-row"),
            e.columns.forEach(function (s) {
              if (s) {
                var l = document.createElement("td"),
                  c = s.component._column,
                  u = s.value,
                  d = {
                    modules: {},
                    getValue: function () {
                      return u;
                    },
                    getField: function () {
                      return c.definition.field;
                    },
                    getElement: function () {
                      return l;
                    },
                    getColumn: function () {
                      return c.getComponent();
                    },
                    getData: function () {
                      return e.component.getData();
                    },
                    getRow: function () {
                      return e.component;
                    },
                    getComponent: function () {
                      return d;
                    },
                    column: c,
                  };
                if (
                  ((c.definition.cssClass
                    ? c.definition.cssClass.split(" ")
                    : []
                  ).forEach(function (e) {
                    l.classList.add(e);
                  }),
                  n.table.modExists("format") && !1 !== n.config.formatCells)
                )
                  u = n.table.modules.format.formatExportValue(d, n.colVisProp);
                else
                  switch (void 0 === u ? "undefined" : r(u)) {
                    case "object":
                      u = JSON.stringify(u);
                      break;
                    case "undefined":
                    case "null":
                      u = "";
                  }
                u instanceof Node ? l.appendChild(u) : (l.innerHTML = u),
                  o.firstCell &&
                    (n.mapElementStyles(o.firstCell, l, [
                      "padding-top",
                      "padding-left",
                      "padding-right",
                      "padding-bottom",
                      "border-top",
                      "border-left",
                      "border-right",
                      "border-bottom",
                      "color",
                      "font-weight",
                      "font-family",
                      "font-size",
                    ]),
                    c.definition.align &&
                      (l.style.textAlign = c.definition.align)),
                  n.table.options.dataTree &&
                    !1 !== n.config.dataTree &&
                    ((t.treeElementField && t.treeElementField == c.field) ||
                      (!t.treeElementField && 0 == i)) &&
                    (e.component._row.modules.dataTree.controlEl &&
                      l.insertBefore(
                        e.component._row.modules.dataTree.controlEl.cloneNode(
                          !0,
                        ),
                        l.firstChild,
                      ),
                    e.component._row.modules.dataTree.branchEl &&
                      l.insertBefore(
                        e.component._row.modules.dataTree.branchEl.cloneNode(
                          !0,
                        ),
                        l.firstChild,
                      )),
                  a.appendChild(l),
                  d.modules.format &&
                    d.modules.format.renderedCallback &&
                    d.modules.format.renderedCallback(),
                  t.rowFormatter &&
                    !1 !== n.config.formatCells &&
                    t.rowFormatter(e.component);
              }
            }),
            a
          );
        }),
        (D.prototype.genereateHTMLTable = function (e) {
          var t = document.createElement("div");
          return t.appendChild(this.genereateTableElement(e)), t.innerHTML;
        }),
        (D.prototype.getHtml = function (e, t, o, i) {
          var n = this.generateExportList(
            o || this.table.options.htmlOutputConfig,
            t,
            e,
            i || "htmlOutput",
          );
          return this.genereateHTMLTable(n);
        }),
        (D.prototype.mapElementStyles = function (e, t, o) {
          if (this.cloneTableStyle && e && t) {
            var i = {
              "background-color": "backgroundColor",
              color: "fontColor",
              width: "width",
              "font-weight": "fontWeight",
              "font-family": "fontFamily",
              "font-size": "fontSize",
              "text-align": "textAlign",
              "border-top": "borderTop",
              "border-left": "borderLeft",
              "border-right": "borderRight",
              "border-bottom": "borderBottom",
              "padding-top": "paddingTop",
              "padding-left": "paddingLeft",
              "padding-right": "paddingRight",
              "padding-bottom": "paddingBottom",
            };
            if (window.getComputedStyle) {
              var n = window.getComputedStyle(e);
              o.forEach(function (e) {
                t.style[i[e]] = n.getPropertyValue(e);
              });
            }
          }
        }),
        g.prototype.registerModule("export", D);
      var L = function (e) {
        (this.table = e),
          (this.filterList = []),
          (this.headerFilters = {}),
          (this.headerFilterColumns = []),
          (this.prevHeaderFilterChangeCheck = ""),
          (this.prevHeaderFilterChangeCheck = "{}"),
          (this.changed = !1);
      };
      (L.prototype.initializeColumn = function (e, t) {
        var o = this,
          i = e.getField();
        (e.modules.filter = {
          success: function (t) {
            var n,
              a =
                ("input" == e.modules.filter.tagType &&
                  "text" == e.modules.filter.attrType) ||
                "textarea" == e.modules.filter.tagType
                  ? "partial"
                  : "match",
              s = "",
              l = "";
            if (
              void 0 === e.modules.filter.prevSuccess ||
              e.modules.filter.prevSuccess !== t
            ) {
              if (
                ((e.modules.filter.prevSuccess = t),
                e.modules.filter.emptyFunc(t))
              )
                delete o.headerFilters[i];
              else {
                switch (
                  ((e.modules.filter.value = t),
                  r(e.definition.headerFilterFunc))
                ) {
                  case "string":
                    o.filters[e.definition.headerFilterFunc]
                      ? ((s = e.definition.headerFilterFunc),
                        (n = function (i) {
                          var n = e.definition.headerFilterFuncParams || {},
                            r = e.getFieldValue(i);
                          return (
                            (n = "function" == typeof n ? n(t, r, i) : n),
                            o.filters[e.definition.headerFilterFunc](t, r, i, n)
                          );
                        }))
                      : console.warn(
                          "Header Filter Error - Matching filter function not found: ",
                          e.definition.headerFilterFunc,
                        );
                    break;
                  case "function":
                    (n = function (o) {
                      var i = e.definition.headerFilterFuncParams || {},
                        n = e.getFieldValue(o);
                      return (
                        (i = "function" == typeof i ? i(t, n, o) : i),
                        e.definition.headerFilterFunc(t, n, o, i)
                      );
                    }),
                      (s = n);
                }
                if (!n)
                  if ("partial" === a)
                    (n = function (o) {
                      var i = e.getFieldValue(o);
                      return (
                        null != i &&
                        String(i)
                          .toLowerCase()
                          .indexOf(String(t).toLowerCase()) > -1
                      );
                    }),
                      (s = "like");
                  else
                    (n = function (o) {
                      return e.getFieldValue(o) == t;
                    }),
                      (s = "=");
                o.headerFilters[i] = { value: t, func: n, type: s, params: {} };
              }
              (l = JSON.stringify(o.headerFilters)),
                o.prevHeaderFilterChangeCheck !== l &&
                  ((o.prevHeaderFilterChangeCheck = l),
                  (o.changed = !0),
                  o.table.rowManager.filterRefresh());
            }
            return !0;
          },
          attrType: !1,
          tagType: !1,
          emptyFunc: !1,
        }),
          this.generateHeaderFilterElement(e);
      }),
        (L.prototype.generateHeaderFilterElement = function (e, t, o) {
          var i,
            n,
            a,
            s,
            l,
            c,
            u,
            d = this,
            p = this,
            h = e.modules.filter.success,
            m = e.getField();
          if (
            (e.modules.filter.headerElement &&
              e.modules.filter.headerElement.parentNode &&
              e.contentElement.removeChild(
                e.modules.filter.headerElement.parentNode,
              ),
            m)
          ) {
            switch (
              ((e.modules.filter.emptyFunc =
                e.definition.headerFilterEmptyCheck ||
                function (e) {
                  return !e && "0" !== e && 0 !== e;
                }),
              (i = document.createElement("div")).classList.add(
                "tabulator-header-filter",
              ),
              r(e.definition.headerFilter))
            ) {
              case "string":
                p.table.modules.edit.editors[e.definition.headerFilter]
                  ? ((n =
                      p.table.modules.edit.editors[e.definition.headerFilter]),
                    ("tick" !== e.definition.headerFilter &&
                      "tickCross" !== e.definition.headerFilter) ||
                      e.definition.headerFilterEmptyCheck ||
                      (e.modules.filter.emptyFunc = function (e) {
                        return !0 !== e && !1 !== e;
                      }))
                  : console.warn(
                      "Filter Error - Cannot build header filter, No such editor found: ",
                      e.definition.editor,
                    );
                break;
              case "function":
                n = e.definition.headerFilter;
                break;
              case "boolean":
                e.modules.edit && e.modules.edit.editor
                  ? (n = e.modules.edit.editor)
                  : e.definition.formatter &&
                    p.table.modules.edit.editors[e.definition.formatter]
                  ? ((n = p.table.modules.edit.editors[e.definition.formatter]),
                    ("tick" !== e.definition.formatter &&
                      "tickCross" !== e.definition.formatter) ||
                      e.definition.headerFilterEmptyCheck ||
                      (e.modules.filter.emptyFunc = function (e) {
                        return !0 !== e && !1 !== e;
                      }))
                  : (n = p.table.modules.edit.editors.input);
            }
            if (n) {
              if (
                ((s = {
                  getValue: function () {
                    return void 0 !== t ? t : "";
                  },
                  getField: function () {
                    return e.definition.field;
                  },
                  getElement: function () {
                    return i;
                  },
                  getColumn: function () {
                    return e.getComponent();
                  },
                  getRow: function () {
                    return { normalizeHeight: function () {} };
                  },
                }),
                (u =
                  "function" ==
                  typeof (u = e.definition.headerFilterParams || {})
                    ? u.call(p.table)
                    : u),
                !(a = n.call(
                  this.table.modules.edit,
                  s,
                  function () {},
                  h,
                  function () {},
                  u,
                )))
              )
                return void console.warn(
                  "Filter Error - Cannot add filter to " +
                    m +
                    " column, editor returned a value of false",
                );
              if (!(a instanceof Node))
                return void console.warn(
                  "Filter Error - Cannot add filter to " +
                    m +
                    " column, editor should return an instance of Node, the editor returned:",
                  a,
                );
              m
                ? p.table.modules.localize.bind(
                    "headerFilters|columns|" + e.definition.field,
                    function (e) {
                      a.setAttribute(
                        "placeholder",
                        void 0 !== e && e
                          ? e
                          : p.table.modules.localize.getText(
                              "headerFilters|default",
                            ),
                      );
                    },
                  )
                : p.table.modules.localize.bind(
                    "headerFilters|default",
                    function (e) {
                      a.setAttribute(
                        "placeholder",
                        void 0 !==
                          p.column.definition.headerFilterPlaceholder &&
                          p.column.definition.headerFilterPlaceholder
                          ? p.column.definition.headerFilterPlaceholder
                          : e,
                      );
                    },
                  ),
                a.addEventListener("click", function (e) {
                  e.stopPropagation(), a.focus();
                }),
                a.addEventListener("focus", function (e) {
                  var t = d.table.columnManager.element.scrollLeft;
                  t !== d.table.rowManager.element.scrollLeft &&
                    (d.table.rowManager.scrollHorizontal(t),
                    d.table.columnManager.scrollHorizontal(t));
                }),
                (l = !1),
                (c = function (e) {
                  l && clearTimeout(l),
                    (l = setTimeout(function () {
                      h(a.value);
                    }, p.table.options.headerFilterLiveFilterDelay));
                }),
                (e.modules.filter.headerElement = a),
                (e.modules.filter.attrType = a.hasAttribute("type")
                  ? a.getAttribute("type").toLowerCase()
                  : ""),
                (e.modules.filter.tagType = a.tagName.toLowerCase()),
                !1 !== e.definition.headerFilterLiveFilter &&
                  ("autocomplete" !== e.definition.headerFilter &&
                    "tickCross" !== e.definition.headerFilter &&
                    (("autocomplete" !== e.definition.editor &&
                      "tickCross" !== e.definition.editor) ||
                      !0 !== e.definition.headerFilter) &&
                    (a.addEventListener("keyup", c),
                    a.addEventListener("search", c),
                    "number" == e.modules.filter.attrType &&
                      a.addEventListener("change", function (e) {
                        h(a.value);
                      }),
                    "text" == e.modules.filter.attrType &&
                      "ie" !== this.table.browser &&
                      a.setAttribute("type", "search")),
                  ("input" != e.modules.filter.tagType &&
                    "select" != e.modules.filter.tagType &&
                    "textarea" != e.modules.filter.tagType) ||
                    a.addEventListener("mousedown", function (e) {
                      e.stopPropagation();
                    })),
                i.appendChild(a),
                e.contentElement.appendChild(i),
                o || p.headerFilterColumns.push(e);
            }
          } else
            console.warn(
              "Filter Error - Cannot add header filter, column has no field set:",
              e.definition.title,
            );
        }),
        (L.prototype.hideHeaderFilterElements = function () {
          this.headerFilterColumns.forEach(function (e) {
            e.modules.filter &&
              e.modules.filter.headerElement &&
              (e.modules.filter.headerElement.style.display = "none");
          });
        }),
        (L.prototype.showHeaderFilterElements = function () {
          this.headerFilterColumns.forEach(function (e) {
            e.modules.filter &&
              e.modules.filter.headerElement &&
              (e.modules.filter.headerElement.style.display = "");
          });
        }),
        (L.prototype.setHeaderFilterFocus = function (e) {
          e.modules.filter && e.modules.filter.headerElement
            ? e.modules.filter.headerElement.focus()
            : console.warn(
                "Column Filter Focus Error - No header filter set on column:",
                e.getField(),
              );
        }),
        (L.prototype.getHeaderFilterValue = function (e) {
          if (e.modules.filter && e.modules.filter.headerElement)
            return e.modules.filter.headerElement.value;
          console.warn(
            "Column Filter Error - No header filter set on column:",
            e.getField(),
          );
        }),
        (L.prototype.setHeaderFilterValue = function (e, t) {
          e &&
            (e.modules.filter && e.modules.filter.headerElement
              ? (this.generateHeaderFilterElement(e, t, !0),
                e.modules.filter.success(t))
              : console.warn(
                  "Column Filter Error - No header filter set on column:",
                  e.getField(),
                ));
        }),
        (L.prototype.reloadHeaderFilter = function (e) {
          e &&
            (e.modules.filter && e.modules.filter.headerElement
              ? this.generateHeaderFilterElement(e, e.modules.filter.value, !0)
              : console.warn(
                  "Column Filter Error - No header filter set on column:",
                  e.getField(),
                ));
        }),
        (L.prototype.hasChanged = function () {
          var e = this.changed;
          return (this.changed = !1), e;
        }),
        (L.prototype.setFilter = function (e, t, o, i) {
          (this.filterList = []),
            Array.isArray(e) ||
              (e = [{ field: e, type: t, value: o, params: i }]),
            this.addFilter(e);
        }),
        (L.prototype.addFilter = function (e, t, o, i) {
          var n = this;
          Array.isArray(e) ||
            (e = [{ field: e, type: t, value: o, params: i }]),
            e.forEach(function (e) {
              (e = n.findFilter(e)) && (n.filterList.push(e), (n.changed = !0));
            }),
            this.table.options.persistence &&
              this.table.modExists("persistence", !0) &&
              this.table.modules.persistence.config.filter &&
              this.table.modules.persistence.save("filter");
        }),
        (L.prototype.findFilter = function (e) {
          var t,
            o = this;
          if (Array.isArray(e)) return this.findSubFilters(e);
          var i = !1;
          return (
            "function" == typeof e.field
              ? (i = function (t) {
                  return e.field(t, e.type || {});
                })
              : o.filters[e.type]
              ? (i = (t = o.table.columnManager.getColumnByField(e.field))
                  ? function (i) {
                      return o.filters[e.type](
                        e.value,
                        t.getFieldValue(i),
                        i,
                        e.params || {},
                      );
                    }
                  : function (t) {
                      return o.filters[e.type](
                        e.value,
                        t[e.field],
                        t,
                        e.params || {},
                      );
                    })
              : console.warn(
                  "Filter Error - No such filter type found, ignoring: ",
                  e.type,
                ),
            (e.func = i),
            !!e.func && e
          );
        }),
        (L.prototype.findSubFilters = function (e) {
          var t = this,
            o = [];
          return (
            e.forEach(function (e) {
              (e = t.findFilter(e)) && o.push(e);
            }),
            !!o.length && o
          );
        }),
        (L.prototype.getFilters = function (e, t) {
          var o = [];
          return (
            e && (o = this.getHeaderFilters()),
            t &&
              o.forEach(function (e) {
                "function" == typeof e.type && (e.type = "function");
              }),
            (o = o.concat(this.filtersToArray(this.filterList, t)))
          );
        }),
        (L.prototype.filtersToArray = function (e, t) {
          var o = this,
            i = [];
          return (
            e.forEach(function (e) {
              var n;
              Array.isArray(e)
                ? i.push(o.filtersToArray(e, t))
                : ((n = { field: e.field, type: e.type, value: e.value }),
                  t && "function" == typeof n.type && (n.type = "function"),
                  i.push(n));
            }),
            i
          );
        }),
        (L.prototype.getHeaderFilters = function () {
          var e = [];
          for (var t in this.headerFilters)
            e.push({
              field: t,
              type: this.headerFilters[t].type,
              value: this.headerFilters[t].value,
            });
          return e;
        }),
        (L.prototype.removeFilter = function (e, t, o) {
          var i = this;
          Array.isArray(e) || (e = [{ field: e, type: t, value: o }]),
            e.forEach(function (e) {
              var t = -1;
              (t =
                "object" == r(e.field)
                  ? i.filterList.findIndex(function (t) {
                      return e === t;
                    })
                  : i.filterList.findIndex(function (t) {
                      return (
                        e.field === t.field &&
                        e.type === t.type &&
                        e.value === t.value
                      );
                    })) > -1
                ? (i.filterList.splice(t, 1), (i.changed = !0))
                : console.warn(
                    "Filter Error - No matching filter type found, ignoring: ",
                    e.type,
                  );
            }),
            this.table.options.persistence &&
              this.table.modExists("persistence", !0) &&
              this.table.modules.persistence.config.filter &&
              this.table.modules.persistence.save("filter");
        }),
        (L.prototype.clearFilter = function (e) {
          (this.filterList = []),
            e && this.clearHeaderFilter(),
            (this.changed = !0),
            this.table.options.persistence &&
              this.table.modExists("persistence", !0) &&
              this.table.modules.persistence.config.filter &&
              this.table.modules.persistence.save("filter");
        }),
        (L.prototype.clearHeaderFilter = function () {
          var e = this;
          (this.headerFilters = {}),
            (e.prevHeaderFilterChangeCheck = "{}"),
            this.headerFilterColumns.forEach(function (t) {
              void 0 !== t.modules.filter.value &&
                delete t.modules.filter.value,
                (t.modules.filter.prevSuccess = void 0),
                e.reloadHeaderFilter(t);
            }),
            (this.changed = !0);
        }),
        (L.prototype.search = function (e, t, o, i) {
          var n = this,
            r = [],
            a = [];
          return (
            Array.isArray(t) || (t = [{ field: t, type: o, value: i }]),
            t.forEach(function (e) {
              (e = n.findFilter(e)) && a.push(e);
            }),
            this.table.rowManager.rows.forEach(function (t) {
              var o = !0;
              a.forEach(function (e) {
                n.filterRecurse(e, t.getData()) || (o = !1);
              }),
                o &&
                  r.push("data" === e ? t.getData("data") : t.getComponent());
            }),
            r
          );
        }),
        (L.prototype.filter = function (e, t) {
          var o = this,
            i = [],
            n = [];
          return (
            o.table.options.dataFiltering &&
              o.table.options.dataFiltering.call(o.table, o.getFilters()),
            o.table.options.ajaxFiltering ||
            (!o.filterList.length && !Object.keys(o.headerFilters).length)
              ? (i = e.slice(0))
              : e.forEach(function (e) {
                  o.filterRow(e) && i.push(e);
                }),
            o.table.options.dataFiltered &&
              (i.forEach(function (e) {
                n.push(e.getComponent());
              }),
              o.table.options.dataFiltered.call(o.table, o.getFilters(), n)),
            i
          );
        }),
        (L.prototype.filterRow = function (e, t) {
          var o = this,
            i = !0,
            n = e.getData();
          for (var r in (o.filterList.forEach(function (e) {
            o.filterRecurse(e, n) || (i = !1);
          }),
          o.headerFilters))
            o.headerFilters[r].func(n) || (i = !1);
          return i;
        }),
        (L.prototype.filterRecurse = function (e, t) {
          var o = this,
            i = !1;
          return (
            Array.isArray(e)
              ? e.forEach(function (e) {
                  o.filterRecurse(e, t) && (i = !0);
                })
              : (i = e.func(t)),
            i
          );
        }),
        (L.prototype.filters = {
          "=": function (e, t, o, i) {
            return t == e;
          },
          "<": function (e, t, o, i) {
            return t < e;
          },
          "<=": function (e, t, o, i) {
            return t <= e;
          },
          ">": function (e, t, o, i) {
            return t > e;
          },
          ">=": function (e, t, o, i) {
            return t >= e;
          },
          "!=": function (e, t, o, i) {
            return t != e;
          },
          regex: function (e, t, o, i) {
            return "string" == typeof e && (e = new RegExp(e)), e.test(t);
          },
          like: function (e, t, o, i) {
            return null == e
              ? t === e
              : null != t &&
                  String(t).toLowerCase().indexOf(e.toLowerCase()) > -1;
          },
          keywords: function (e, t, o, i) {
            var n = e
                .toLowerCase()
                .split(void 0 === i.separator ? " " : i.separator),
              r = String(null == t ? "" : t).toLowerCase(),
              a = [];
            return (
              n.forEach(function (e) {
                r.includes(e) && a.push(!0);
              }),
              i.matchAll ? a.length === n.length : !!a.length
            );
          },
          starts: function (e, t, o, i) {
            return null == e
              ? t === e
              : null != t &&
                  String(t).toLowerCase().startsWith(e.toLowerCase());
          },
          ends: function (e, t, o, i) {
            return null == e
              ? t === e
              : null != t && String(t).toLowerCase().endsWith(e.toLowerCase());
          },
          in: function (e, t, o, i) {
            return Array.isArray(e)
              ? !e.length || e.indexOf(t) > -1
              : (console.warn(
                  "Filter Error - filter value is not an array:",
                  e,
                ),
                !1);
          },
        }),
        g.prototype.registerModule("filter", L);
      var z = function (e) {
        this.table = e;
      };
      (z.prototype.initializeColumn = function (e) {
        (e.modules.format = this.lookupFormatter(e, "")),
          void 0 !== e.definition.formatterPrint &&
            (e.modules.format.print = this.lookupFormatter(e, "Print")),
          void 0 !== e.definition.formatterClipboard &&
            (e.modules.format.clipboard = this.lookupFormatter(e, "Clipboard")),
          void 0 !== e.definition.formatterHtmlOutput &&
            (e.modules.format.htmlOutput = this.lookupFormatter(
              e,
              "HtmlOutput",
            ));
      }),
        (z.prototype.lookupFormatter = function (e, t) {
          var o = { params: e.definition["formatter" + t + "Params"] || {} },
            i = e.definition["formatter" + t];
          switch (void 0 === i ? "undefined" : r(i)) {
            case "string":
              "tick" === i &&
                ((i = "tickCross"),
                void 0 === o.params.crossElement &&
                  (o.params.crossElement = !1),
                console.warn(
                  "DEPRECATION WARNING - the tick formatter has been deprecated, please use the tickCross formatter with the crossElement param set to false",
                )),
                this.formatters[i]
                  ? (o.formatter = this.formatters[i])
                  : (console.warn(
                      "Formatter Error - No such formatter found: ",
                      i,
                    ),
                    (o.formatter = this.formatters.plaintext));
              break;
            case "function":
              o.formatter = i;
              break;
            default:
              o.formatter = this.formatters.plaintext;
          }
          return o;
        }),
        (z.prototype.cellRendered = function (e) {
          e.modules.format &&
            e.modules.format.renderedCallback &&
            !e.modules.format.rendered &&
            (e.modules.format.renderedCallback(),
            (e.modules.format.rendered = !0));
        }),
        (z.prototype.formatValue = function (e) {
          var t = e.getComponent(),
            o =
              "function" == typeof e.column.modules.format.params
                ? e.column.modules.format.params(t)
                : e.column.modules.format.params;
          return e.column.modules.format.formatter.call(
            this,
            t,
            o,
            function (t) {
              e.modules.format || (e.modules.format = {}),
                (e.modules.format.renderedCallback = t),
                (e.modules.format.rendered = !1);
            },
          );
        }),
        (z.prototype.formatExportValue = function (e, t) {
          var o,
            i = e.column.modules.format[t];
          if (i) {
            return (
              (o =
                "function" == typeof i.params ? i.params(component) : i.params),
              i.formatter.call(this, e.getComponent(), o, function (t) {
                e.modules.format || (e.modules.format = {}),
                  (e.modules.format.renderedCallback = t),
                  (e.modules.format.rendered = !1);
              })
            );
          }
          return this.formatValue(e);
        }),
        (z.prototype.sanitizeHTML = function (e) {
          if (e) {
            var t = {
              "&": "&amp;",
              "<": "&lt;",
              ">": "&gt;",
              '"': "&quot;",
              "'": "&#39;",
              "/": "&#x2F;",
              "`": "&#x60;",
              "=": "&#x3D;",
            };
            return String(e).replace(/[&<>"'`=\/]/g, function (e) {
              return t[e];
            });
          }
          return e;
        }),
        (z.prototype.emptyToSpace = function (e) {
          return null == e || "" === e ? "&nbsp;" : e;
        }),
        (z.prototype.getFormatter = function (e) {
          switch (void 0 === e ? "undefined" : r(e)) {
            case "string":
              this.formatters[e]
                ? (e = this.formatters[e])
                : (console.warn(
                    "Formatter Error - No such formatter found: ",
                    e,
                  ),
                  (e = this.formatters.plaintext));
              break;
            case "function":
              break;
            default:
              e = this.formatters.plaintext;
          }
          return e;
        }),
        (z.prototype.formatters = {
          plaintext: function (e, t, o) {
            return this.emptyToSpace(this.sanitizeHTML(e.getValue()));
          },
          html: function (e, t, o) {
            return e.getValue();
          },
          textarea: function (e, t, o) {
            return (
              (e.getElement().style.whiteSpace = "pre-wrap"),
              this.emptyToSpace(this.sanitizeHTML(e.getValue()))
            );
          },
          money: function (e, t, o) {
            var i,
              n,
              r,
              a,
              s = parseFloat(e.getValue()),
              l = t.decimal || ".",
              c = t.thousand || ",",
              u = t.symbol || "",
              d = !!t.symbolAfter,
              p = void 0 !== t.precision ? t.precision : 2;
            if (isNaN(s))
              return this.emptyToSpace(this.sanitizeHTML(e.getValue()));
            for (
              i = !1 !== p ? s.toFixed(p) : s,
                n = (i = String(i).split("."))[0],
                r = i.length > 1 ? l + i[1] : "",
                a = /(\d+)(\d{3})/;
              a.test(n);

            )
              n = n.replace(a, "$1" + c + "$2");
            return d ? n + r + u : u + n + r;
          },
          link: function (e, t, o) {
            var i = e.getValue(),
              n = t.urlPrefix || "",
              a = t.download,
              s = i,
              l = document.createElement("a");
            if ((t.labelField && (s = e.getData()[t.labelField]), t.label))
              switch (r(t.label)) {
                case "string":
                  s = t.label;
                  break;
                case "function":
                  s = t.label(e);
              }
            if (s) {
              if ((t.urlField && (i = e.getData()[t.urlField]), t.url))
                switch (r(t.url)) {
                  case "string":
                    i = t.url;
                    break;
                  case "function":
                    i = t.url(e);
                }
              return (
                l.setAttribute("href", n + i),
                t.target && l.setAttribute("target", t.target),
                t.download &&
                  ((a = "function" == typeof a ? a(e) : !0 === a ? "" : a),
                  l.setAttribute("download", a)),
                (l.innerHTML = this.emptyToSpace(this.sanitizeHTML(s))),
                l
              );
            }
            return "&nbsp;";
          },
          image: function (e, t, o) {
            var i = document.createElement("img"),
              n = e.getValue();
            switch (
              (t.urlPrefix && (n = t.urlPrefix + e.getValue()),
              t.urlSuffix && (n += t.urlSuffix),
              i.setAttribute("src", n),
              r(t.height))
            ) {
              case "number":
                i.style.height = t.height + "px";
                break;
              case "string":
                i.style.height = t.height;
            }
            switch (r(t.width)) {
              case "number":
                i.style.width = t.width + "px";
                break;
              case "string":
                i.style.width = t.width;
            }
            return (
              i.addEventListener("load", function () {
                e.getRow().normalizeHeight();
              }),
              i
            );
          },
          tickCross: function (e, t, o) {
            var i = e.getValue(),
              n = e.getElement(),
              r = t.allowEmpty,
              a = t.allowTruthy,
              s =
                void 0 !== t.tickElement
                  ? t.tickElement
                  : '<svg enable-background="new 0 0 24 24" height="14" width="14" viewBox="0 0 24 24" xml:space="preserve" ><path fill="#2DC214" clip-rule="evenodd" d="M21.652,3.211c-0.293-0.295-0.77-0.295-1.061,0L9.41,14.34  c-0.293,0.297-0.771,0.297-1.062,0L3.449,9.351C3.304,9.203,3.114,9.13,2.923,9.129C2.73,9.128,2.534,9.201,2.387,9.351  l-2.165,1.946C0.078,11.445,0,11.63,0,11.823c0,0.194,0.078,0.397,0.223,0.544l4.94,5.184c0.292,0.296,0.771,0.776,1.062,1.07  l2.124,2.141c0.292,0.293,0.769,0.293,1.062,0l14.366-14.34c0.293-0.294,0.293-0.777,0-1.071L21.652,3.211z" fill-rule="evenodd"/></svg>',
              l =
                void 0 !== t.crossElement
                  ? t.crossElement
                  : '<svg enable-background="new 0 0 24 24" height="14" width="14"  viewBox="0 0 24 24" xml:space="preserve" ><path fill="#CE1515" d="M22.245,4.015c0.313,0.313,0.313,0.826,0,1.139l-6.276,6.27c-0.313,0.312-0.313,0.826,0,1.14l6.273,6.272  c0.313,0.313,0.313,0.826,0,1.14l-2.285,2.277c-0.314,0.312-0.828,0.312-1.142,0l-6.271-6.271c-0.313-0.313-0.828-0.313-1.141,0  l-6.276,6.267c-0.313,0.313-0.828,0.313-1.141,0l-2.282-2.28c-0.313-0.313-0.313-0.826,0-1.14l6.278-6.269  c0.313-0.312,0.313-0.826,0-1.14L1.709,5.147c-0.314-0.313-0.314-0.827,0-1.14l2.284-2.278C4.308,1.417,4.821,1.417,5.135,1.73  L11.405,8c0.314,0.314,0.828,0.314,1.141,0.001l6.276-6.267c0.312-0.312,0.826-0.312,1.141,0L22.245,4.015z"/></svg>';
            return (a && i) ||
              !0 === i ||
              "true" === i ||
              "True" === i ||
              1 === i ||
              "1" === i
              ? (n.setAttribute("aria-checked", !0), s || "")
              : !r || ("null" !== i && "" !== i && null != i)
              ? (n.setAttribute("aria-checked", !1), l || "")
              : (n.setAttribute("aria-checked", "mixed"), "");
          },
          datetime: function (e, t, o) {
            var i = t.inputFormat || "YYYY-MM-DD hh:mm:ss",
              n = t.outputFormat || "DD/MM/YYYY hh:mm:ss",
              r = void 0 !== t.invalidPlaceholder ? t.invalidPlaceholder : "",
              a = e.getValue(),
              s = moment(a, i);
            return s.isValid()
              ? t.timezone
                ? s.tz(t.timezone).format(n)
                : s.format(n)
              : !0 === r
              ? a
              : "function" == typeof r
              ? r(a)
              : r;
          },
          datetimediff: function (e, t, o) {
            var i = t.inputFormat || "YYYY-MM-DD hh:mm:ss",
              n = void 0 !== t.invalidPlaceholder ? t.invalidPlaceholder : "",
              r = void 0 !== t.suffix && t.suffix,
              a = void 0 !== t.unit ? t.unit : void 0,
              s = void 0 !== t.humanize && t.humanize,
              l = void 0 !== t.date ? t.date : moment(),
              c = e.getValue(),
              u = moment(c, i);
            return u.isValid()
              ? s
                ? moment.duration(u.diff(l)).humanize(r)
                : u.diff(l, a) + (r ? " " + r : "")
              : !0 === n
              ? c
              : "function" == typeof n
              ? n(c)
              : n;
          },
          lookup: function (e, t, o) {
            var i = e.getValue();
            return void 0 === t[i]
              ? (console.warn("Missing display value for " + i), i)
              : t[i];
          },
          star: function (e, t, o) {
            var i = e.getValue(),
              n = e.getElement(),
              r = t && t.stars ? t.stars : 5,
              a = document.createElement("span"),
              s = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            (a.style.verticalAlign = "middle"),
              s.setAttribute("width", "14"),
              s.setAttribute("height", "14"),
              s.setAttribute("viewBox", "0 0 512 512"),
              s.setAttribute("xml:space", "preserve"),
              (s.style.padding = "0 1px"),
              (i = i && !isNaN(i) ? parseInt(i) : 0),
              (i = Math.max(0, Math.min(i, r)));
            for (var l = 1; l <= r; l++) {
              var c = s.cloneNode(!0);
              (c.innerHTML =
                l <= i
                  ? '<polygon fill="#FFEA00" stroke="#C1AB60" stroke-width="37.6152" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="259.216,29.942 330.27,173.919 489.16,197.007 374.185,309.08 401.33,467.31 259.216,392.612 117.104,467.31 144.25,309.08 29.274,197.007 188.165,173.919 "/>'
                  : '<polygon fill="#D2D2D2" stroke="#686868" stroke-width="37.6152" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="259.216,29.942 330.27,173.919 489.16,197.007 374.185,309.08 401.33,467.31 259.216,392.612 117.104,467.31 144.25,309.08 29.274,197.007 188.165,173.919 "/>'),
                a.appendChild(c);
            }
            return (
              (n.style.whiteSpace = "nowrap"),
              (n.style.overflow = "hidden"),
              (n.style.textOverflow = "ellipsis"),
              n.setAttribute("aria-label", i),
              a
            );
          },
          traffic: function (e, t, o) {
            var i,
              n,
              a = this.sanitizeHTML(e.getValue()) || 0,
              s = document.createElement("span"),
              l = t && t.max ? t.max : 100,
              c = t && t.min ? t.min : 0,
              u =
                t && void 0 !== t.color ? t.color : ["red", "orange", "green"],
              d = "#666666";
            if (!isNaN(a) && void 0 !== e.getValue()) {
              switch (
                (s.classList.add("tabulator-traffic-light"),
                (n = parseFloat(a) <= l ? parseFloat(a) : l),
                (n = parseFloat(n) >= c ? parseFloat(n) : c),
                (i = (l - c) / 100),
                (n = Math.round((n - c) / i)),
                void 0 === u ? "undefined" : r(u))
              ) {
                case "string":
                  d = u;
                  break;
                case "function":
                  d = u(a);
                  break;
                case "object":
                  if (Array.isArray(u)) {
                    var p = 100 / u.length,
                      h = Math.floor(n / p);
                    (h = Math.min(h, u.length - 1)),
                      (d = u[(h = Math.max(h, 0))]);
                    break;
                  }
              }
              return (s.style.backgroundColor = d), s;
            }
          },
          progress: function (e, t, o) {
            var i,
              n,
              a,
              s,
              l,
              c = this.sanitizeHTML(e.getValue()) || 0,
              u = e.getElement(),
              d = t && t.max ? t.max : 100,
              p = t && t.min ? t.min : 0,
              m = t && t.legendAlign ? t.legendAlign : "center";
            switch (
              ((n = parseFloat(c) <= d ? parseFloat(c) : d),
              (n = parseFloat(n) >= p ? parseFloat(n) : p),
              (i = (d - p) / 100),
              (n = Math.round((n - p) / i)),
              r(t.color))
            ) {
              case "string":
                a = t.color;
                break;
              case "function":
                a = t.color(c);
                break;
              case "object":
                if (Array.isArray(t.color)) {
                  var f = 100 / t.color.length,
                    g = Math.floor(n / f);
                  (g = Math.min(g, t.color.length - 1)),
                    (g = Math.max(g, 0)),
                    (a = t.color[g]);
                  break;
                }
              default:
                a = "#2DC214";
            }
            switch (r(t.legend)) {
              case "string":
                s = t.legend;
                break;
              case "function":
                s = t.legend(c);
                break;
              case "boolean":
                s = c;
                break;
              default:
                s = !1;
            }
            switch (r(t.legendColor)) {
              case "string":
                l = t.legendColor;
                break;
              case "function":
                l = t.legendColor(c);
                break;
              case "object":
                if (Array.isArray(t.legendColor)) {
                  (f = 100 / t.legendColor.length), (g = Math.floor(n / f));
                  (g = Math.min(g, t.legendColor.length - 1)),
                    (g = Math.max(g, 0)),
                    (l = t.legendColor[g]);
                }
                break;
              default:
                l = "#000";
            }
            (u.style.minWidth = "30px"),
              (u.style.position = "relative"),
              u.setAttribute("aria-label", n);
            var b = document.createElement("div");
            if (
              ((b.style.display = "inline-block"),
              (b.style.position = "relative"),
              (b.style.width = n + "%"),
              (b.style.backgroundColor = a),
              (b.style.height = "100%"),
              b.setAttribute("data-max", d),
              b.setAttribute("data-min", p),
              s)
            ) {
              var v = document.createElement("div");
              (v.style.position = "absolute"),
                (v.style.top = "4px"),
                (v.style.left = 0),
                (v.style.textAlign = m),
                (v.style.width = "100%"),
                (v.style.color = l),
                (v.innerHTML = s);
            }
            return (
              o(function () {
                if (!(e instanceof h)) {
                  var t = document.createElement("div");
                  (t.style.position = "absolute"),
                    (t.style.top = "4px"),
                    (t.style.bottom = "4px"),
                    (t.style.left = "4px"),
                    (t.style.right = "4px"),
                    u.appendChild(t),
                    (u = t);
                }
                u.appendChild(b), s && u.appendChild(v);
              }),
              ""
            );
          },
          color: function (e, t, o) {
            return (
              (e.getElement().style.backgroundColor = this.sanitizeHTML(
                e.getValue(),
              )),
              ""
            );
          },
          buttonTick: function (e, t, o) {
            return '<svg enable-background="new 0 0 24 24" height="14" width="14" viewBox="0 0 24 24" xml:space="preserve" ><path fill="#2DC214" clip-rule="evenodd" d="M21.652,3.211c-0.293-0.295-0.77-0.295-1.061,0L9.41,14.34  c-0.293,0.297-0.771,0.297-1.062,0L3.449,9.351C3.304,9.203,3.114,9.13,2.923,9.129C2.73,9.128,2.534,9.201,2.387,9.351  l-2.165,1.946C0.078,11.445,0,11.63,0,11.823c0,0.194,0.078,0.397,0.223,0.544l4.94,5.184c0.292,0.296,0.771,0.776,1.062,1.07  l2.124,2.141c0.292,0.293,0.769,0.293,1.062,0l14.366-14.34c0.293-0.294,0.293-0.777,0-1.071L21.652,3.211z" fill-rule="evenodd"/></svg>';
          },
          buttonCross: function (e, t, o) {
            return '<svg enable-background="new 0 0 24 24" height="14" width="14" viewBox="0 0 24 24" xml:space="preserve" ><path fill="#CE1515" d="M22.245,4.015c0.313,0.313,0.313,0.826,0,1.139l-6.276,6.27c-0.313,0.312-0.313,0.826,0,1.14l6.273,6.272  c0.313,0.313,0.313,0.826,0,1.14l-2.285,2.277c-0.314,0.312-0.828,0.312-1.142,0l-6.271-6.271c-0.313-0.313-0.828-0.313-1.141,0  l-6.276,6.267c-0.313,0.313-0.828,0.313-1.141,0l-2.282-2.28c-0.313-0.313-0.313-0.826,0-1.14l6.278-6.269  c0.313-0.312,0.313-0.826,0-1.14L1.709,5.147c-0.314-0.313-0.314-0.827,0-1.14l2.284-2.278C4.308,1.417,4.821,1.417,5.135,1.73  L11.405,8c0.314,0.314,0.828,0.314,1.141,0.001l6.276-6.267c0.312-0.312,0.826-0.312,1.141,0L22.245,4.015z"/></svg>';
          },
          rownum: function (e, t, o) {
            return (
              this.table.rowManager.activeRows.indexOf(e.getRow()._getSelf()) +
              1
            );
          },
          handle: function (e, t, o) {
            return (
              e.getElement().classList.add("tabulator-row-handle"),
              "<div class='tabulator-row-handle-box'><div class='tabulator-row-handle-bar'></div><div class='tabulator-row-handle-bar'></div><div class='tabulator-row-handle-bar'></div></div>"
            );
          },
          responsiveCollapse: function (e, t, o) {
            var i = document.createElement("div"),
              n = e.getRow()._row.modules.responsiveLayout;
            function r(e) {
              var t = n.element;
              (n.open = e),
                t &&
                  (n.open
                    ? (i.classList.add("open"), (t.style.display = ""))
                    : (i.classList.remove("open"), (t.style.display = "none")));
            }
            return (
              i.classList.add("tabulator-responsive-collapse-toggle"),
              (i.innerHTML =
                "<span class='tabulator-responsive-collapse-toggle-open'>+</span><span class='tabulator-responsive-collapse-toggle-close'>-</span>"),
              e.getElement().classList.add("tabulator-row-handle"),
              i.addEventListener("click", function (e) {
                e.stopImmediatePropagation(), r(!n.open);
              }),
              r(n.open),
              i
            );
          },
          rowSelection: function (e, t, o) {
            var i = this,
              n = document.createElement("input");
            if (((n.type = "checkbox"), this.table.modExists("selectRow", !0)))
              if (
                (n.addEventListener("click", function (e) {
                  e.stopPropagation();
                }),
                "function" == typeof e.getRow)
              ) {
                var r = e.getRow();
                r instanceof d
                  ? (n.addEventListener("change", function (e) {
                      r.toggleSelect();
                    }),
                    (n.checked = r.isSelected && r.isSelected()),
                    this.table.modules.selectRow.registerRowSelectCheckbox(
                      r,
                      n,
                    ))
                  : (n = "");
              } else
                n.addEventListener("change", function (e) {
                  i.table.modules.selectRow.selectedRows.length
                    ? i.table.deselectRow()
                    : i.table.selectRow(t.rowRange);
                }),
                  this.table.modules.selectRow.registerHeaderSelectCheckbox(n);
            return n;
          },
        }),
        g.prototype.registerModule("format", z);
      var P = function (e) {
        (this.table = e),
          (this.leftColumns = []),
          (this.rightColumns = []),
          (this.leftMargin = 0),
          (this.rightMargin = 0),
          (this.rightPadding = 0),
          (this.initializationMode = "left"),
          (this.active = !1),
          (this.scrollEndTimer = !1);
      };
      (P.prototype.reset = function () {
        (this.initializationMode = "left"),
          (this.leftColumns = []),
          (this.rightColumns = []),
          (this.leftMargin = 0),
          (this.rightMargin = 0),
          (this.rightMargin = 0),
          (this.active = !1),
          (this.table.columnManager.headersElement.style.marginLeft = 0),
          (this.table.columnManager.element.style.paddingRight = 0);
      }),
        (P.prototype.initializeColumn = function (e) {
          var t = { margin: 0, edge: !1 };
          e.isGroup ||
            (this.frozenCheck(e)
              ? ((t.position = this.initializationMode),
                "left" == this.initializationMode
                  ? this.leftColumns.push(e)
                  : this.rightColumns.unshift(e),
                (this.active = !0),
                (e.modules.frozen = t))
              : (this.initializationMode = "right"));
        }),
        (P.prototype.frozenCheck = function (e) {
          return (
            e.parent.isGroup &&
              e.definition.frozen &&
              console.warn(
                "Frozen Column Error - Parent column group must be frozen, not individual columns or sub column groups",
              ),
            e.parent.isGroup ? this.frozenCheck(e.parent) : e.definition.frozen
          );
        }),
        (P.prototype.scrollHorizontal = function () {
          var e,
            t = this;
          this.active &&
            (clearTimeout(this.scrollEndTimer),
            (this.scrollEndTimer = setTimeout(function () {
              t.layout();
            }, 100)),
            (e = this.table.rowManager.getVisibleRows()),
            this.calcMargins(),
            this.layoutColumnPosition(),
            this.layoutCalcRows(),
            e.forEach(function (e) {
              "row" === e.type && t.layoutRow(e);
            }),
            (this.table.rowManager.tableElement.style.marginRight =
              this.rightMargin));
        }),
        (P.prototype.calcMargins = function () {
          (this.leftMargin =
            this._calcSpace(this.leftColumns, this.leftColumns.length) + "px"),
            (this.table.columnManager.headersElement.style.marginLeft =
              this.leftMargin),
            (this.rightMargin =
              this._calcSpace(this.rightColumns, this.rightColumns.length) +
              "px"),
            (this.table.columnManager.element.style.paddingRight =
              this.rightMargin),
            (this.rightPadding =
              this.table.rowManager.element.clientWidth +
              this.table.columnManager.scrollLeft);
        }),
        (P.prototype.layoutCalcRows = function () {
          this.table.modExists("columnCalcs") &&
            (this.table.modules.columnCalcs.topInitialized &&
              this.table.modules.columnCalcs.topRow &&
              this.layoutRow(this.table.modules.columnCalcs.topRow),
            this.table.modules.columnCalcs.botInitialized &&
              this.table.modules.columnCalcs.botRow &&
              this.layoutRow(this.table.modules.columnCalcs.botRow));
        }),
        (P.prototype.layoutColumnPosition = function (e) {
          var t = this,
            o = [];
          this.leftColumns.forEach(function (i, n) {
            if (
              ((i.modules.frozen.margin =
                t._calcSpace(t.leftColumns, n) +
                t.table.columnManager.scrollLeft +
                "px"),
              n == t.leftColumns.length - 1
                ? (i.modules.frozen.edge = !0)
                : (i.modules.frozen.edge = !1),
              i.parent.isGroup)
            ) {
              var r = t.getColGroupParentElement(i);
              o.includes(r) || (t.layoutElement(r, i), o.push(r)),
                i.modules.frozen.edge &&
                  r.classList.add(
                    "tabulator-frozen-" + i.modules.frozen.position,
                  );
            } else t.layoutElement(i.getElement(), i);
            e &&
              i.cells.forEach(function (e) {
                t.layoutElement(e.getElement(!0), i);
              });
          }),
            this.rightColumns.forEach(function (o, i) {
              (o.modules.frozen.margin =
                t.rightPadding - t._calcSpace(t.rightColumns, i + 1) + "px"),
                i == t.rightColumns.length - 1
                  ? (o.modules.frozen.edge = !0)
                  : (o.modules.frozen.edge = !1),
                o.parent.isGroup
                  ? t.layoutElement(t.getColGroupParentElement(o), o)
                  : t.layoutElement(o.getElement(), o),
                e &&
                  o.cells.forEach(function (e) {
                    t.layoutElement(e.getElement(!0), o);
                  });
            });
        }),
        (P.prototype.getColGroupParentElement = function (e) {
          return e.parent.isGroup
            ? this.getColGroupParentElement(e.parent)
            : e.getElement();
        }),
        (P.prototype.layout = function () {
          var e = this;
          e.active &&
            (this.calcMargins(),
            e.table.rowManager.getDisplayRows().forEach(function (t) {
              "row" === t.type && e.layoutRow(t);
            }),
            this.layoutCalcRows(),
            this.layoutColumnPosition(!0),
            (this.table.rowManager.tableElement.style.marginRight =
              this.rightMargin));
        }),
        (P.prototype.layoutRow = function (e) {
          var t = this;
          (e.getElement().style.paddingLeft = this.leftMargin),
            this.leftColumns.forEach(function (o) {
              var i = e.getCell(o);
              i && t.layoutElement(i.getElement(!0), o);
            }),
            this.rightColumns.forEach(function (o) {
              var i = e.getCell(o);
              i && t.layoutElement(i.getElement(!0), o);
            });
        }),
        (P.prototype.layoutElement = function (e, t) {
          t.modules.frozen &&
            ((e.style.position = "absolute"),
            (e.style.left = t.modules.frozen.margin),
            e.classList.add("tabulator-frozen"),
            t.modules.frozen.edge &&
              e.classList.add("tabulator-frozen-" + t.modules.frozen.position));
        }),
        (P.prototype._calcSpace = function (e, t) {
          for (var o = 0, i = 0; i < t; i++)
            e[i].visible && (o += e[i].getWidth());
          return o;
        }),
        g.prototype.registerModule("frozenColumns", P);
      var A = function (e) {
        (this.table = e),
          (this.topElement = document.createElement("div")),
          (this.rows = []),
          (this.displayIndex = 0);
      };
      (A.prototype.initialize = function () {
        (this.rows = []),
          this.topElement.classList.add("tabulator-frozen-rows-holder"),
          this.table.columnManager
            .getElement()
            .insertBefore(
              this.topElement,
              this.table.columnManager.headersElement.nextSibling,
            );
      }),
        (A.prototype.setDisplayIndex = function (e) {
          this.displayIndex = e;
        }),
        (A.prototype.getDisplayIndex = function () {
          return this.displayIndex;
        }),
        (A.prototype.isFrozen = function () {
          return !!this.rows.length;
        }),
        (A.prototype.getRows = function (e) {
          var t = e.slice(0);
          return (
            this.rows.forEach(function (e) {
              var o = t.indexOf(e);
              o > -1 && t.splice(o, 1);
            }),
            t
          );
        }),
        (A.prototype.freezeRow = function (e) {
          e.modules.frozen
            ? console.warn("Freeze Error - Row is already frozen")
            : ((e.modules.frozen = !0),
              this.topElement.appendChild(e.getElement()),
              e.initialize(),
              e.normalizeHeight(),
              this.table.rowManager.adjustTableSize(),
              this.rows.push(e),
              this.table.rowManager.refreshActiveData("display"),
              this.styleRows());
        }),
        (A.prototype.unfreezeRow = function (e) {
          this.rows.indexOf(e);
          e.modules.frozen
            ? ((e.modules.frozen = !1),
              this.detachRow(e),
              this.table.rowManager.adjustTableSize(),
              this.table.rowManager.refreshActiveData("display"),
              this.rows.length && this.styleRows())
            : console.warn("Freeze Error - Row is already unfrozen");
        }),
        (A.prototype.detachRow = function (e) {
          var t = this.rows.indexOf(e);
          if (t > -1) {
            var o = e.getElement();
            o.parentNode.removeChild(o), this.rows.splice(t, 1);
          }
        }),
        (A.prototype.styleRows = function (e) {
          var t = this;
          this.rows.forEach(function (e, o) {
            t.table.rowManager.styleRow(e, o);
          });
        }),
        g.prototype.registerModule("frozenRows", A);
      var F = function (e) {
        (this._group = e), (this.type = "GroupComponent");
      };
      (F.prototype.getKey = function () {
        return this._group.key;
      }),
        (F.prototype.getField = function () {
          return this._group.field;
        }),
        (F.prototype.getElement = function () {
          return this._group.element;
        }),
        (F.prototype.getRows = function () {
          return this._group.getRows(!0);
        }),
        (F.prototype.getSubGroups = function () {
          return this._group.getSubGroups(!0);
        }),
        (F.prototype.getParentGroup = function () {
          return !!this._group.parent && this._group.parent.getComponent();
        }),
        (F.prototype.getVisibility = function () {
          return (
            console.warn(
              "getVisibility function is deprecated, you should now use the isVisible function",
            ),
            this._group.visible
          );
        }),
        (F.prototype.isVisible = function () {
          return this._group.visible;
        }),
        (F.prototype.show = function () {
          this._group.show();
        }),
        (F.prototype.hide = function () {
          this._group.hide();
        }),
        (F.prototype.toggle = function () {
          this._group.toggleVisibility();
        }),
        (F.prototype._getSelf = function () {
          return this._group;
        }),
        (F.prototype.getTable = function () {
          return this._group.groupManager.table;
        });
      var B = function (e, t, o, i, n, r, a) {
        (this.groupManager = e),
          (this.parent = t),
          (this.key = i),
          (this.level = o),
          (this.field = n),
          (this.hasSubGroups = o < e.groupIDLookups.length - 1),
          (this.addRow = this.hasSubGroups
            ? this._addRowToGroup
            : this._addRow),
          (this.type = "group"),
          (this.old = a),
          (this.rows = []),
          (this.groups = []),
          (this.groupList = []),
          (this.generator = r),
          (this.elementContents = !1),
          (this.height = 0),
          (this.outerHeight = 0),
          (this.initialized = !1),
          (this.calcs = {}),
          (this.initialized = !1),
          (this.modules = {}),
          (this.arrowElement = !1),
          (this.visible = a
            ? a.visible
            : void 0 !== e.startOpen[o]
            ? e.startOpen[o]
            : e.startOpen[0]),
          (this.component = null),
          this.createElements(),
          this.addBindings(),
          this.createValueGroups();
      };
      (B.prototype.wipe = function () {
        this.groupList.length
          ? this.groupList.forEach(function (e) {
              e.wipe();
            })
          : ((this.element = !1),
            (this.arrowElement = !1),
            (this.elementContents = !1));
      }),
        (B.prototype.createElements = function () {
          var e = document.createElement("div");
          e.classList.add("tabulator-arrow"),
            (this.element = document.createElement("div")),
            this.element.classList.add("tabulator-row"),
            this.element.classList.add("tabulator-group"),
            this.element.classList.add("tabulator-group-level-" + this.level),
            this.element.setAttribute("role", "rowgroup"),
            (this.arrowElement = document.createElement("div")),
            this.arrowElement.classList.add("tabulator-group-toggle"),
            this.arrowElement.appendChild(e),
            !1 !== this.groupManager.table.options.movableRows &&
              this.groupManager.table.modExists("moveRow") &&
              this.groupManager.table.modules.moveRow.initializeGroupHeader(
                this,
              );
        }),
        (B.prototype.createValueGroups = function () {
          var e = this,
            t = this.level + 1;
          this.groupManager.allowedValues &&
            this.groupManager.allowedValues[t] &&
            this.groupManager.allowedValues[t].forEach(function (o) {
              e._createGroup(o, t);
            });
        }),
        (B.prototype.addBindings = function () {
          var e,
            t,
            o,
            i = this;
          i.groupManager.table.options.groupClick &&
            i.element.addEventListener("click", function (e) {
              i.groupManager.table.options.groupClick.call(
                i.groupManager.table,
                e,
                i.getComponent(),
              );
            }),
            i.groupManager.table.options.groupDblClick &&
              i.element.addEventListener("dblclick", function (e) {
                i.groupManager.table.options.groupDblClick.call(
                  i.groupManager.table,
                  e,
                  i.getComponent(),
                );
              }),
            i.groupManager.table.options.groupContext &&
              i.element.addEventListener("contextmenu", function (e) {
                i.groupManager.table.options.groupContext.call(
                  i.groupManager.table,
                  e,
                  i.getComponent(),
                );
              }),
            (i.groupManager.table.options.groupContextMenu ||
              i.groupManager.table.options.groupClickMenu) &&
              i.groupManager.table.modExists("menu") &&
              i.groupManager.table.modules.menu.initializeGroup.call(
                i.groupManager.table.modules.menu,
                i,
              ),
            i.groupManager.table.options.groupTap &&
              ((o = !1),
              i.element.addEventListener(
                "touchstart",
                function (e) {
                  o = !0;
                },
                { passive: !0 },
              ),
              i.element.addEventListener("touchend", function (e) {
                o && i.groupManager.table.options.groupTap(e, i.getComponent()),
                  (o = !1);
              })),
            i.groupManager.table.options.groupDblTap &&
              ((e = null),
              i.element.addEventListener("touchend", function (t) {
                e
                  ? (clearTimeout(e),
                    (e = null),
                    i.groupManager.table.options.groupDblTap(
                      t,
                      i.getComponent(),
                    ))
                  : (e = setTimeout(function () {
                      clearTimeout(e), (e = null);
                    }, 300));
              })),
            i.groupManager.table.options.groupTapHold &&
              ((t = null),
              i.element.addEventListener(
                "touchstart",
                function (e) {
                  clearTimeout(t),
                    (t = setTimeout(function () {
                      clearTimeout(t),
                        (t = null),
                        (o = !1),
                        i.groupManager.table.options.groupTapHold(
                          e,
                          i.getComponent(),
                        );
                    }, 1e3));
                },
                { passive: !0 },
              ),
              i.element.addEventListener("touchend", function (e) {
                clearTimeout(t), (t = null);
              })),
            i.groupManager.table.options.groupToggleElement &&
              ("arrow" == i.groupManager.table.options.groupToggleElement
                ? i.arrowElement
                : i.element
              ).addEventListener("click", function (e) {
                e.stopPropagation(),
                  e.stopImmediatePropagation(),
                  i.toggleVisibility();
              });
        }),
        (B.prototype._createGroup = function (e, t) {
          var o = t + "_" + e,
            i = new B(
              this.groupManager,
              this,
              t,
              e,
              this.groupManager.groupIDLookups[t].field,
              this.groupManager.headerGenerator[t] ||
                this.groupManager.headerGenerator[0],
              !!this.old && this.old.groups[o],
            );
          (this.groups[o] = i), this.groupList.push(i);
        }),
        (B.prototype._addRowToGroup = function (e) {
          var t = this.level + 1;
          if (this.hasSubGroups) {
            var o = this.groupManager.groupIDLookups[t].func(e.getData()),
              i = t + "_" + o;
            this.groupManager.allowedValues &&
            this.groupManager.allowedValues[t]
              ? this.groups[i] && this.groups[i].addRow(e)
              : (this.groups[i] || this._createGroup(o, t),
                this.groups[i].addRow(e));
          }
        }),
        (B.prototype._addRow = function (e) {
          this.rows.push(e), (e.modules.group = this);
        }),
        (B.prototype.insertRow = function (e, t, o) {
          var i = this.conformRowData({});
          e.updateData(i);
          var n = this.rows.indexOf(t);
          n > -1
            ? o
              ? this.rows.splice(n + 1, 0, e)
              : this.rows.splice(n, 0, e)
            : o
            ? this.rows.push(e)
            : this.rows.unshift(e),
            (e.modules.group = this),
            this.generateGroupHeaderContents(),
            this.groupManager.table.modExists("columnCalcs") &&
              "table" != this.groupManager.table.options.columnCalcs &&
              this.groupManager.table.modules.columnCalcs.recalcGroup(this),
            this.groupManager.updateGroupRows(!0);
        }),
        (B.prototype.scrollHeader = function (e) {
          (this.arrowElement.style.marginLeft = e),
            this.groupList.forEach(function (t) {
              t.scrollHeader(e);
            });
        }),
        (B.prototype.getRowIndex = function (e) {}),
        (B.prototype.conformRowData = function (e) {
          return (
            this.field
              ? (e[this.field] = this.key)
              : console.warn(
                  "Data Conforming Error - Cannot conform row data to match new group as groupBy is a function",
                ),
            this.parent && (e = this.parent.conformRowData(e)),
            e
          );
        }),
        (B.prototype.removeRow = function (e) {
          var t = this.rows.indexOf(e),
            o = e.getElement();
          t > -1 && this.rows.splice(t, 1),
            this.groupManager.table.options.groupValues || this.rows.length
              ? (o.parentNode && o.parentNode.removeChild(o),
                this.generateGroupHeaderContents(),
                this.groupManager.table.modExists("columnCalcs") &&
                  "table" != this.groupManager.table.options.columnCalcs &&
                  this.groupManager.table.modules.columnCalcs.recalcGroup(this))
              : (this.parent
                  ? this.parent.removeGroup(this)
                  : this.groupManager.removeGroup(this),
                this.groupManager.updateGroupRows(!0));
        }),
        (B.prototype.removeGroup = function (e) {
          var t,
            o = e.level + "_" + e.key;
          this.groups[o] &&
            (delete this.groups[o],
            (t = this.groupList.indexOf(e)) > -1 && this.groupList.splice(t, 1),
            this.groupList.length ||
              (this.parent
                ? this.parent.removeGroup(this)
                : this.groupManager.removeGroup(this)));
        }),
        (B.prototype.getHeadersAndRows = function (e) {
          var t = [];
          return (
            t.push(this),
            this._visSet(),
            this.visible
              ? this.groupList.length
                ? this.groupList.forEach(function (o) {
                    t = t.concat(o.getHeadersAndRows(e));
                  })
                : (!e &&
                    "table" != this.groupManager.table.options.columnCalcs &&
                    this.groupManager.table.modExists("columnCalcs") &&
                    this.groupManager.table.modules.columnCalcs.hasTopCalcs() &&
                    (this.calcs.top &&
                      (this.calcs.top.detachElement(),
                      this.calcs.top.deleteCells()),
                    (this.calcs.top =
                      this.groupManager.table.modules.columnCalcs.generateTopRow(
                        this.rows,
                      )),
                    t.push(this.calcs.top)),
                  (t = t.concat(this.rows)),
                  !e &&
                    "table" != this.groupManager.table.options.columnCalcs &&
                    this.groupManager.table.modExists("columnCalcs") &&
                    this.groupManager.table.modules.columnCalcs.hasBottomCalcs() &&
                    (this.calcs.bottom &&
                      (this.calcs.bottom.detachElement(),
                      this.calcs.bottom.deleteCells()),
                    (this.calcs.bottom =
                      this.groupManager.table.modules.columnCalcs.generateBottomRow(
                        this.rows,
                      )),
                    t.push(this.calcs.bottom)))
              : this.groupList.length ||
                "table" == this.groupManager.table.options.columnCalcs ||
                (this.groupManager.table.modExists("columnCalcs") &&
                  (!e &&
                    this.groupManager.table.modules.columnCalcs.hasTopCalcs() &&
                    (this.calcs.top &&
                      (this.calcs.top.detachElement(),
                      this.calcs.top.deleteCells()),
                    this.groupManager.table.options.groupClosedShowCalcs &&
                      ((this.calcs.top =
                        this.groupManager.table.modules.columnCalcs.generateTopRow(
                          this.rows,
                        )),
                      t.push(this.calcs.top))),
                  !e &&
                    this.groupManager.table.modules.columnCalcs.hasBottomCalcs() &&
                    (this.calcs.bottom &&
                      (this.calcs.bottom.detachElement(),
                      this.calcs.bottom.deleteCells()),
                    this.groupManager.table.options.groupClosedShowCalcs &&
                      ((this.calcs.bottom =
                        this.groupManager.table.modules.columnCalcs.generateBottomRow(
                          this.rows,
                        )),
                      t.push(this.calcs.bottom))))),
            t
          );
        }),
        (B.prototype.getData = function (e, t) {
          var o = [];
          return (
            this._visSet(),
            (!e || (e && this.visible)) &&
              this.rows.forEach(function (e) {
                o.push(e.getData(t || "data"));
              }),
            o
          );
        }),
        (B.prototype.getRowCount = function () {
          var e = 0;
          return (
            this.groupList.length
              ? this.groupList.forEach(function (t) {
                  e += t.getRowCount();
                })
              : (e = this.rows.length),
            e
          );
        }),
        (B.prototype.toggleVisibility = function () {
          this.visible ? this.hide() : this.show();
        }),
        (B.prototype.hide = function () {
          (this.visible = !1),
            "classic" != this.groupManager.table.rowManager.getRenderMode() ||
            this.groupManager.table.options.pagination
              ? this.groupManager.updateGroupRows(!0)
              : (this.element.classList.remove("tabulator-group-visible"),
                this.groupList.length
                  ? this.groupList.forEach(function (e) {
                      e.getHeadersAndRows().forEach(function (e) {
                        e.detachElement();
                      });
                    })
                  : this.rows.forEach(function (e) {
                      var t = e.getElement();
                      t.parentNode.removeChild(t);
                    }),
                this.groupManager.table.rowManager.setDisplayRows(
                  this.groupManager.updateGroupRows(),
                  this.groupManager.getDisplayIndex(),
                ),
                this.groupManager.table.rowManager.checkClassicModeGroupHeaderWidth()),
            this.groupManager.table.options.groupVisibilityChanged.call(
              this.table,
              this.getComponent(),
              !1,
            );
        }),
        (B.prototype.show = function () {
          var e = this;
          if (
            ((e.visible = !0),
            "classic" != this.groupManager.table.rowManager.getRenderMode() ||
              this.groupManager.table.options.pagination)
          )
            this.groupManager.updateGroupRows(!0);
          else {
            this.element.classList.add("tabulator-group-visible");
            var t = e.getElement();
            this.groupList.length
              ? this.groupList.forEach(function (e) {
                  e.getHeadersAndRows().forEach(function (e) {
                    var o = e.getElement();
                    t.parentNode.insertBefore(o, t.nextSibling),
                      e.initialize(),
                      (t = o);
                  });
                })
              : e.rows.forEach(function (e) {
                  var o = e.getElement();
                  t.parentNode.insertBefore(o, t.nextSibling),
                    e.initialize(),
                    (t = o);
                }),
              this.groupManager.table.rowManager.setDisplayRows(
                this.groupManager.updateGroupRows(),
                this.groupManager.getDisplayIndex(),
              ),
              this.groupManager.table.rowManager.checkClassicModeGroupHeaderWidth();
          }
          this.groupManager.table.options.groupVisibilityChanged.call(
            this.table,
            this.getComponent(),
            !0,
          );
        }),
        (B.prototype._visSet = function () {
          var e = [];
          "function" == typeof this.visible &&
            (this.rows.forEach(function (t) {
              e.push(t.getData());
            }),
            (this.visible = this.visible(
              this.key,
              this.getRowCount(),
              e,
              this.getComponent(),
            )));
        }),
        (B.prototype.getRowGroup = function (e) {
          var t = !1;
          return (
            this.groupList.length
              ? this.groupList.forEach(function (o) {
                  var i = o.getRowGroup(e);
                  i && (t = i);
                })
              : this.rows.find(function (t) {
                  return t === e;
                }) && (t = this),
            t
          );
        }),
        (B.prototype.getSubGroups = function (e) {
          var t = [];
          return (
            this.groupList.forEach(function (o) {
              t.push(e ? o.getComponent() : o);
            }),
            t
          );
        }),
        (B.prototype.getRows = function (e) {
          var t = [];
          return (
            this.rows.forEach(function (o) {
              t.push(e ? o.getComponent() : o);
            }),
            t
          );
        }),
        (B.prototype.generateGroupHeaderContents = function () {
          var e = [];
          for (
            this.rows.forEach(function (t) {
              e.push(t.getData());
            }),
              this.elementContents = this.generator(
                this.key,
                this.getRowCount(),
                e,
                this.getComponent(),
              );
            this.element.firstChild;

          )
            this.element.removeChild(this.element.firstChild);
          "string" == typeof this.elementContents
            ? (this.element.innerHTML = this.elementContents)
            : this.element.appendChild(this.elementContents),
            this.element.insertBefore(
              this.arrowElement,
              this.element.firstChild,
            );
        }),
        (B.prototype.getPath = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          return e.unshift(this.key), this.parent && this.parent.getPath(e), e;
        }),
        (B.prototype.getElement = function () {
          (this.addBindingsd = !1),
            this._visSet(),
            this.visible
              ? this.element.classList.add("tabulator-group-visible")
              : this.element.classList.remove("tabulator-group-visible");
          for (var e = 0; e < this.element.childNodes.length; ++e)
            this.element.childNodes[e].parentNode.removeChild(
              this.element.childNodes[e],
            );
          return this.generateGroupHeaderContents(), this.element;
        }),
        (B.prototype.detachElement = function () {
          this.element &&
            this.element.parentNode &&
            this.element.parentNode.removeChild(this.element);
        }),
        (B.prototype.normalizeHeight = function () {
          this.setHeight(this.element.clientHeight);
        }),
        (B.prototype.initialize = function (e) {
          (this.initialized && !e) ||
            (this.normalizeHeight(), (this.initialized = !0));
        }),
        (B.prototype.reinitialize = function () {
          (this.initialized = !1),
            (this.height = 0),
            g.prototype.helpers.elVisible(this.element) && this.initialize(!0);
        }),
        (B.prototype.setHeight = function (e) {
          this.height != e &&
            ((this.height = e), (this.outerHeight = this.element.offsetHeight));
        }),
        (B.prototype.getHeight = function () {
          return this.outerHeight;
        }),
        (B.prototype.getGroup = function () {
          return this;
        }),
        (B.prototype.reinitializeHeight = function () {}),
        (B.prototype.calcHeight = function () {}),
        (B.prototype.setCellHeight = function () {}),
        (B.prototype.clearCellHeight = function () {}),
        (B.prototype.getComponent = function () {
          return (
            this.component || (this.component = new F(this)), this.component
          );
        });
      var H = function (e) {
        (this.table = e),
          (this.groupIDLookups = !1),
          (this.startOpen = [
            function () {
              return !1;
            },
          ]),
          (this.headerGenerator = [
            function () {
              return "";
            },
          ]),
          (this.groupList = []),
          (this.allowedValues = !1),
          (this.groups = {}),
          (this.displayIndex = 0);
      };
      (H.prototype.initialize = function () {
        var e = this,
          t = e.table.options.groupBy,
          o = e.table.options.groupStartOpen,
          i = e.table.options.groupHeader;
        ((this.allowedValues = e.table.options.groupValues),
        Array.isArray(t) &&
          Array.isArray(i) &&
          t.length > i.length &&
          console.warn(
            "Error creating group headers, groupHeader array is shorter than groupBy array",
          ),
        (e.headerGenerator = [
          function () {
            return "";
          },
        ]),
        (this.startOpen = [
          function () {
            return !1;
          },
        ]),
        e.table.modules.localize.bind("groups|item", function (t, o) {
          e.headerGenerator[0] = function (e, i, n) {
            return (
              (void 0 === e ? "" : e) +
              "<span>(" +
              i +
              " " +
              (1 === i ? t : o.groups.items) +
              ")</span>"
            );
          };
        }),
        (this.groupIDLookups = []),
        Array.isArray(t) || t)
          ? this.table.modExists("columnCalcs") &&
            "table" != this.table.options.columnCalcs &&
            "both" != this.table.options.columnCalcs &&
            this.table.modules.columnCalcs.removeCalcs()
          : this.table.modExists("columnCalcs") &&
            "group" != this.table.options.columnCalcs &&
            this.table.columnManager.getRealColumns().forEach(function (t) {
              t.definition.topCalc &&
                e.table.modules.columnCalcs.initializeTopRow(),
                t.definition.bottomCalc &&
                  e.table.modules.columnCalcs.initializeBottomRow();
            });
        Array.isArray(t) || (t = [t]),
          t.forEach(function (t, o) {
            var i, n;
            (i =
              "function" == typeof t
                ? t
                : (n = e.table.columnManager.getColumnByField(t))
                ? function (e) {
                    return n.getFieldValue(e);
                  }
                : function (e) {
                    return e[t];
                  }),
              e.groupIDLookups.push({
                field: "function" != typeof t && t,
                func: i,
                values: !!e.allowedValues && e.allowedValues[o],
              });
          }),
          o &&
            (Array.isArray(o) || (o = [o]),
            o.forEach(function (e) {
              e =
                "function" == typeof e
                  ? e
                  : function () {
                      return !0;
                    };
            }),
            (e.startOpen = o)),
          i && (e.headerGenerator = Array.isArray(i) ? i : [i]),
          (this.initialized = !0);
      }),
        (H.prototype.setDisplayIndex = function (e) {
          this.displayIndex = e;
        }),
        (H.prototype.getDisplayIndex = function () {
          return this.displayIndex;
        }),
        (H.prototype.getRows = function (e) {
          return this.groupIDLookups.length
            ? (this.table.options.dataGrouping.call(this.table),
              this.generateGroups(e),
              this.table.options.dataGrouped &&
                this.table.options.dataGrouped.call(
                  this.table,
                  this.getGroups(!0),
                ),
              this.updateGroupRows())
            : e.slice(0);
        }),
        (H.prototype.getGroups = function (e) {
          var t = [];
          return (
            this.groupList.forEach(function (o) {
              t.push(e ? o.getComponent() : o);
            }),
            t
          );
        }),
        (H.prototype.getChildGroups = function (e) {
          var t = this,
            o = [];
          return (
            e || (e = this),
            e.groupList.forEach(function (e) {
              e.groupList.length
                ? (o = o.concat(t.getChildGroups(e)))
                : o.push(e);
            }),
            o
          );
        }),
        (H.prototype.wipe = function () {
          this.groupList.forEach(function (e) {
            e.wipe();
          });
        }),
        (H.prototype.pullGroupListData = function (e) {
          var t = this,
            o = [];
          return (
            e.forEach(function (e) {
              var i = { level: 0, rowCount: 0, headerContent: "" },
                n = [];
              e.hasSubGroups
                ? ((n = t.pullGroupListData(e.groupList)),
                  (i.level = e.level),
                  (i.rowCount = n.length - e.groupList.length),
                  (i.headerContent = e.generator(e.key, i.rowCount, e.rows, e)),
                  o.push(i),
                  (o = o.concat(n)))
                : ((i.level = e.level),
                  (i.headerContent = e.generator(
                    e.key,
                    e.rows.length,
                    e.rows,
                    e,
                  )),
                  (i.rowCount = e.getRows().length),
                  o.push(i),
                  e.getRows().forEach(function (e) {
                    o.push(e.getData("data"));
                  }));
            }),
            o
          );
        }),
        (H.prototype.getGroupedData = function () {
          return this.pullGroupListData(this.groupList);
        }),
        (H.prototype.getRowGroup = function (e) {
          var t = !1;
          return (
            this.groupList.forEach(function (o) {
              var i = o.getRowGroup(e);
              i && (t = i);
            }),
            t
          );
        }),
        (H.prototype.countGroups = function () {
          return this.groupList.length;
        }),
        (H.prototype.generateGroups = function (e) {
          var t = this,
            o = t.groups;
          (t.groups = {}),
            (t.groupList = []),
            this.allowedValues && this.allowedValues[0]
              ? (this.allowedValues[0].forEach(function (e) {
                  t.createGroup(e, 0, o);
                }),
                e.forEach(function (e) {
                  t.assignRowToExistingGroup(e, o);
                }))
              : e.forEach(function (e) {
                  t.assignRowToGroup(e, o);
                });
        }),
        (H.prototype.createGroup = function (e, t, o) {
          var i,
            n = t + "_" + e;
          (o = o || []),
            (i = new B(
              this,
              !1,
              t,
              e,
              this.groupIDLookups[0].field,
              this.headerGenerator[0],
              o[n],
            )),
            (this.groups[n] = i),
            this.groupList.push(i);
        }),
        (H.prototype.assignRowToExistingGroup = function (e, t) {
          var o = "0_" + this.groupIDLookups[0].func(e.getData());
          this.groups[o] && this.groups[o].addRow(e);
        }),
        (H.prototype.assignRowToGroup = function (e, t) {
          var o = this.groupIDLookups[0].func(e.getData()),
            i = !this.groups["0_" + o];
          return (
            i && this.createGroup(o, 0, t), this.groups["0_" + o].addRow(e), !i
          );
        }),
        (H.prototype.reassignRowToGroup = function (e) {
          var t = e.getGroup(),
            o = t.getPath(),
            i = this.getExpectedPath(e);
          (o.length == i.length &&
            o.every(function (e, t) {
              return e === i[t];
            })) ||
            (t.removeRow(e),
            this.assignRowToGroup(e, self.groups),
            this.table.rowManager.refreshActiveData("group", !1, !0));
        }),
        (H.prototype.getExpectedPath = function (e) {
          var t = [],
            o = e.getData();
          return (
            this.groupIDLookups.forEach(function (e) {
              t.push(e.func(o));
            }),
            t
          );
        }),
        (H.prototype.updateGroupRows = function (e) {
          var t = this,
            o = [];
          if (
            (t.groupList.forEach(function (e) {
              o = o.concat(e.getHeadersAndRows());
            }),
            e)
          ) {
            var i = t.table.rowManager.setDisplayRows(
              o,
              this.getDisplayIndex(),
            );
            !0 !== i && this.setDisplayIndex(i),
              t.table.rowManager.refreshActiveData("group", !0, !0);
          }
          return o;
        }),
        (H.prototype.scrollHeaders = function (e) {
          this.table.options.virtualDomHoz &&
            (e -= this.table.vdomHoz.vDomPadLeft),
            (e += "px"),
            this.groupList.forEach(function (t) {
              t.scrollHeader(e);
            });
        }),
        (H.prototype.removeGroup = function (e) {
          var t,
            o = e.level + "_" + e.key;
          this.groups[o] &&
            (delete this.groups[o],
            (t = this.groupList.indexOf(e)) > -1 &&
              this.groupList.splice(t, 1));
        }),
        g.prototype.registerModule("groupRows", H);
      var O = function (e) {
        (this.table = e), (this.history = []), (this.index = -1);
      };
      (O.prototype.clear = function () {
        (this.history = []), (this.index = -1);
      }),
        (O.prototype.action = function (e, t, o) {
          (this.history = this.history.slice(0, this.index + 1)),
            this.history.push({ type: e, component: t, data: o }),
            this.index++;
        }),
        (O.prototype.getHistoryUndoSize = function () {
          return this.index + 1;
        }),
        (O.prototype.getHistoryRedoSize = function () {
          return this.history.length - (this.index + 1);
        }),
        (O.prototype.clearComponentHistory = function (e) {
          var t = this.history.findIndex(function (t) {
            return t.component === e;
          });
          t > -1 &&
            (this.history.splice(t, 1),
            t <= this.index && this.index--,
            this.clearComponentHistory(e));
        }),
        (O.prototype.undo = function () {
          if (this.index > -1) {
            var e = this.history[this.index];
            return (
              this.undoers[e.type].call(this, e),
              this.index--,
              this.table.options.historyUndo.call(
                this.table,
                e.type,
                e.component.getComponent(),
                e.data,
              ),
              !0
            );
          }
          return (
            console.warn("History Undo Error - No more history to undo"), !1
          );
        }),
        (O.prototype.redo = function () {
          if (this.history.length - 1 > this.index) {
            this.index++;
            var e = this.history[this.index];
            return (
              this.redoers[e.type].call(this, e),
              this.table.options.historyRedo.call(
                this.table,
                e.type,
                e.component.getComponent(),
                e.data,
              ),
              !0
            );
          }
          return (
            console.warn("History Redo Error - No more history to redo"), !1
          );
        }),
        (O.prototype.undoers = {
          cellEdit: function (e) {
            e.component.setValueProcessData(e.data.oldValue);
          },
          rowAdd: function (e) {
            e.component.deleteActual();
          },
          rowDelete: function (e) {
            var t = this.table.rowManager.addRowActual(
              e.data.data,
              e.data.pos,
              e.data.index,
            );
            this.table.options.groupBy &&
              this.table.modExists("groupRows") &&
              this.table.modules.groupRows.updateGroupRows(!0),
              this._rebindRow(e.component, t);
          },
          rowMove: function (e) {
            this.table.rowManager.moveRowActual(
              e.component,
              this.table.rowManager.rows[e.data.posFrom],
              !e.data.after,
            ),
              this.table.rowManager.redraw();
          },
        }),
        (O.prototype.redoers = {
          cellEdit: function (e) {
            e.component.setValueProcessData(e.data.newValue);
          },
          rowAdd: function (e) {
            var t = this.table.rowManager.addRowActual(
              e.data.data,
              e.data.pos,
              e.data.index,
            );
            this.table.options.groupBy &&
              this.table.modExists("groupRows") &&
              this.table.modules.groupRows.updateGroupRows(!0),
              this._rebindRow(e.component, t);
          },
          rowDelete: function (e) {
            e.component.deleteActual();
          },
          rowMove: function (e) {
            this.table.rowManager.moveRowActual(
              e.component,
              this.table.rowManager.rows[e.data.posTo],
              e.data.after,
            ),
              this.table.rowManager.redraw();
          },
        }),
        (O.prototype._rebindRow = function (e, t) {
          this.history.forEach(function (o) {
            if (o.component instanceof p)
              o.component === e && (o.component = t);
            else if (o.component instanceof m && o.component.row === e) {
              var i = o.component.column.getField();
              i && (o.component = t.getCell(i));
            }
          });
        }),
        g.prototype.registerModule("history", O);
      var I = function (e) {
        (this.table = e), (this.fieldIndex = []), (this.hasIndex = !1);
      };
      (I.prototype.parseTable = function () {
        var e = this,
          t = e.table.element,
          o = e.table.options,
          i = (o.columns, t.getElementsByTagName("th")),
          n = t.getElementsByTagName("tbody")[0],
          a = [];
        (e.hasIndex = !1),
          e.table.options.htmlImporting.call(this.table),
          (n = n ? n.getElementsByTagName("tr") : []),
          e._extractOptions(t, o),
          i.length ? e._extractHeaders(i, n) : e._generateBlankHeaders(i, n);
        for (var s = 0; s < n.length; s++) {
          var l = n[s].getElementsByTagName("td"),
            c = {};
          e.hasIndex || (c[o.index] = s);
          for (var u = 0; u < l.length; u++) {
            var d = l[u];
            void 0 !== this.fieldIndex[u] &&
              (c[this.fieldIndex[u]] = d.innerHTML);
          }
          a.push(c);
        }
        var p = document.createElement("div"),
          h = t.attributes;
        for (var u in h)
          "object" == r(h[u]) && p.setAttribute(h[u].name, h[u].value);
        t.parentNode.replaceChild(p, t),
          (o.data = a),
          e.table.options.htmlImported.call(this.table),
          (this.table.element = p);
      }),
        (I.prototype._extractOptions = function (e, t, o) {
          var i = e.attributes,
            n = o ? Object.assign([], o) : Object.keys(t),
            a = {};
          for (var s in (n.forEach(function (e) {
            a[e.toLowerCase()] = e;
          }),
          i)) {
            var l,
              c = i[s];
            c &&
              "object" == (void 0 === c ? "undefined" : r(c)) &&
              c.name &&
              0 === c.name.indexOf("tabulator-") &&
              ((l = c.name.replace("tabulator-", "")),
              void 0 !== a[l] && (t[a[l]] = this._attribValue(c.value)));
          }
        }),
        (I.prototype._attribValue = function (e) {
          return "true" === e || ("false" !== e && e);
        }),
        (I.prototype._findCol = function (e) {
          return (
            this.table.options.columns.find(function (t) {
              return t.title === e;
            }) || !1
          );
        }),
        (I.prototype._extractHeaders = function (e, t) {
          for (var o = 0; o < e.length; o++) {
            var i,
              n = e[o],
              r = !1,
              a = this._findCol(n.textContent);
            a ? (r = !0) : (a = { title: n.textContent.trim() }),
              a.field ||
                (a.field = n.textContent
                  .trim()
                  .toLowerCase()
                  .replace(" ", "_")),
              (i = n.getAttribute("width")) && !a.width && (a.width = i),
              n.attributes,
              this._extractOptions(n, a, l.prototype.defaultOptionList),
              (this.fieldIndex[o] = a.field),
              a.field == this.table.options.index && (this.hasIndex = !0),
              r || this.table.options.columns.push(a);
          }
        }),
        (I.prototype._generateBlankHeaders = function (e, t) {
          for (var o = 0; o < e.length; o++) {
            var i = e[o],
              n = { title: "", field: "col" + o };
            this.fieldIndex[o] = n.field;
            var r = i.getAttribute("width");
            r && (n.width = r), this.table.options.columns.push(n);
          }
        }),
        g.prototype.registerModule("htmlTableImport", I);
      var N = function (e) {
        (this.table = e),
          (this.watchKeys = null),
          (this.pressedKeys = null),
          (this.keyupBinding = !1),
          (this.keydownBinding = !1);
      };
      (N.prototype.initialize = function () {
        var e = this.table.options.keybindings,
          t = {};
        if (((this.watchKeys = {}), (this.pressedKeys = []), !1 !== e)) {
          for (var o in this.bindings) t[o] = this.bindings[o];
          if (Object.keys(e).length) for (var i in e) t[i] = e[i];
          this.mapBindings(t), this.bindEvents();
        }
      }),
        (N.prototype.mapBindings = function (e) {
          var t = this,
            o = this,
            i = function (i) {
              t.actions[i]
                ? e[i] &&
                  ("object" !== r(e[i]) && (e[i] = [e[i]]),
                  e[i].forEach(function (e) {
                    o.mapBinding(i, e);
                  }))
                : console.warn("Key Binding Error - no such action:", i);
            };
          for (var n in e) i(n);
        }),
        (N.prototype.mapBinding = function (e, t) {
          var o = this,
            i = {
              action: this.actions[e],
              keys: [],
              ctrl: !1,
              shift: !1,
              meta: !1,
            };
          t.toString()
            .toLowerCase()
            .split(" ")
            .join("")
            .split("+")
            .forEach(function (e) {
              switch (e) {
                case "ctrl":
                  i.ctrl = !0;
                  break;
                case "shift":
                  i.shift = !0;
                  break;
                case "meta":
                  i.meta = !0;
                  break;
                default:
                  (e = parseInt(e)),
                    i.keys.push(e),
                    o.watchKeys[e] || (o.watchKeys[e] = []),
                    o.watchKeys[e].push(i);
              }
            });
        }),
        (N.prototype.bindEvents = function () {
          var e = this;
          (this.keyupBinding = function (t) {
            var o = t.keyCode,
              i = e.watchKeys[o];
            i &&
              (e.pressedKeys.push(o),
              i.forEach(function (o) {
                e.checkBinding(t, o);
              }));
          }),
            (this.keydownBinding = function (t) {
              var o = t.keyCode;
              if (e.watchKeys[o]) {
                var i = e.pressedKeys.indexOf(o);
                i > -1 && e.pressedKeys.splice(i, 1);
              }
            }),
            this.table.element.addEventListener("keydown", this.keyupBinding),
            this.table.element.addEventListener("keyup", this.keydownBinding);
        }),
        (N.prototype.clearBindings = function () {
          this.keyupBinding &&
            this.table.element.removeEventListener(
              "keydown",
              this.keyupBinding,
            ),
            this.keydownBinding &&
              this.table.element.removeEventListener(
                "keyup",
                this.keydownBinding,
              );
        }),
        (N.prototype.checkBinding = function (e, t) {
          var o = this,
            i = !0;
          return (
            e.ctrlKey == t.ctrl &&
            e.shiftKey == t.shift &&
            e.metaKey == t.meta &&
            (t.keys.forEach(function (e) {
              -1 == o.pressedKeys.indexOf(e) && (i = !1);
            }),
            i && t.action.call(o, e),
            !0)
          );
        }),
        (N.prototype.bindings = {
          navPrev: "shift + 9",
          navNext: 9,
          navUp: 38,
          navDown: 40,
          scrollPageUp: 33,
          scrollPageDown: 34,
          scrollToStart: 36,
          scrollToEnd: 35,
          undo: "ctrl + 90",
          redo: "ctrl + 89",
          copyToClipboard: "ctrl + 67",
        }),
        (N.prototype.actions = {
          keyBlock: function (e) {
            e.stopPropagation(), e.preventDefault();
          },
          scrollPageUp: function (e) {
            var t = this.table.rowManager,
              o = t.scrollTop - t.height;
            t.element.scrollHeight;
            e.preventDefault(),
              t.displayRowsCount &&
                (o >= 0
                  ? (t.element.scrollTop = o)
                  : t.scrollToRow(t.getDisplayRows()[0])),
              this.table.element.focus();
          },
          scrollPageDown: function (e) {
            var t = this.table.rowManager,
              o = t.scrollTop + t.height,
              i = t.element.scrollHeight;
            e.preventDefault(),
              t.displayRowsCount &&
                (o <= i
                  ? (t.element.scrollTop = o)
                  : t.scrollToRow(t.getDisplayRows()[t.displayRowsCount - 1])),
              this.table.element.focus();
          },
          scrollToStart: function (e) {
            var t = this.table.rowManager;
            e.preventDefault(),
              t.displayRowsCount && t.scrollToRow(t.getDisplayRows()[0]),
              this.table.element.focus();
          },
          scrollToEnd: function (e) {
            var t = this.table.rowManager;
            e.preventDefault(),
              t.displayRowsCount &&
                t.scrollToRow(t.getDisplayRows()[t.displayRowsCount - 1]),
              this.table.element.focus();
          },
          navPrev: function (e) {
            var t = !1;
            this.table.modExists("edit") &&
              (t = this.table.modules.edit.currentCell) &&
              (e.preventDefault(), t.nav().prev());
          },
          navNext: function (e) {
            var t,
              o = !1,
              i = this.table.options.tabEndNewRow;
            this.table.modExists("edit") &&
              (o = this.table.modules.edit.currentCell) &&
              (e.preventDefault(),
              (t = o.nav()).next() ||
                (i &&
                  (o.getElement().firstChild.blur(),
                  (i =
                    !0 === i
                      ? this.table.addRow({})
                      : "function" == typeof i
                      ? this.table.addRow(i(o.row.getComponent()))
                      : this.table.addRow(Object.assign({}, i))).then(
                    function () {
                      setTimeout(function () {
                        t.next();
                      });
                    },
                  ))));
          },
          navLeft: function (e) {
            var t = !1;
            this.table.modExists("edit") &&
              (t = this.table.modules.edit.currentCell) &&
              (e.preventDefault(), t.nav().left());
          },
          navRight: function (e) {
            var t = !1;
            this.table.modExists("edit") &&
              (t = this.table.modules.edit.currentCell) &&
              (e.preventDefault(), t.nav().right());
          },
          navUp: function (e) {
            var t = !1;
            this.table.modExists("edit") &&
              (t = this.table.modules.edit.currentCell) &&
              (e.preventDefault(), t.nav().up());
          },
          navDown: function (e) {
            var t = !1;
            this.table.modExists("edit") &&
              (t = this.table.modules.edit.currentCell) &&
              (e.preventDefault(), t.nav().down());
          },
          undo: function (e) {
            this.table.options.history &&
              this.table.modExists("history") &&
              this.table.modExists("edit") &&
              (this.table.modules.edit.currentCell ||
                (e.preventDefault(), this.table.modules.history.undo()));
          },
          redo: function (e) {
            this.table.options.history &&
              this.table.modExists("history") &&
              this.table.modExists("edit") &&
              (this.table.modules.edit.currentCell ||
                (e.preventDefault(), this.table.modules.history.redo()));
          },
          copyToClipboard: function (e) {
            this.table.modules.edit.currentCell ||
              (this.table.modExists("clipboard", !0) &&
                this.table.modules.clipboard.copy(!1, !0));
          },
        }),
        g.prototype.registerModule("keybindings", N);
      var j = function (e) {
        (this.table = e),
          (this.menuElements = []),
          (this.blurEvent = this.hideMenu.bind(this)),
          (this.escEvent = this.escMenu.bind(this)),
          (this.nestedMenuBlock = !1),
          (this.positionReversedX = !1);
      };
      (j.prototype.initializeColumnHeader = function (e) {
        var t,
          o = this;
        e.definition.headerContextMenu &&
          (e
            .getElement()
            .addEventListener(
              "contextmenu",
              this.LoadMenuEvent.bind(this, e, e.definition.headerContextMenu),
            ),
          this.tapHold(e, e.definition.headerContextMenu)),
          e.definition.headerMenu &&
            ((t = document.createElement("span")).classList.add(
              "tabulator-header-menu-button",
            ),
            (t.innerHTML = "&vellip;"),
            t.addEventListener("click", function (t) {
              t.stopPropagation(),
                t.preventDefault(),
                o.LoadMenuEvent(e, e.definition.headerMenu, t);
            }),
            e.titleElement.insertBefore(t, e.titleElement.firstChild));
      }),
        (j.prototype.LoadMenuEvent = function (e, t, o) {
          (t =
            "function" == typeof t
              ? t.call(this.table, e.getComponent(), o)
              : t),
            this.loadMenu(o, e, t);
        }),
        (j.prototype.tapHold = function (e, t) {
          var o = this,
            i = e.getElement(),
            n = null,
            r = !1;
          i.addEventListener(
            "touchstart",
            function (i) {
              clearTimeout(n),
                (r = !1),
                (n = setTimeout(function () {
                  clearTimeout(n),
                    (n = null),
                    (r = !0),
                    o.LoadMenuEvent(e, t, i);
                }, 1e3));
            },
            { passive: !0 },
          ),
            i.addEventListener("touchend", function (e) {
              clearTimeout(n), (n = null), r && e.preventDefault();
            });
        }),
        (j.prototype.initializeCell = function (e) {
          e.column.definition.contextMenu &&
            (e
              .getElement(!0)
              .addEventListener(
                "contextmenu",
                this.LoadMenuEvent.bind(
                  this,
                  e,
                  e.column.definition.contextMenu,
                ),
              ),
            this.tapHold(e, e.column.definition.contextMenu)),
            e.column.definition.clickMenu &&
              e
                .getElement(!0)
                .addEventListener(
                  "click",
                  this.LoadMenuEvent.bind(
                    this,
                    e,
                    e.column.definition.clickMenu,
                  ),
                );
        }),
        (j.prototype.initializeRow = function (e) {
          this.table.options.rowContextMenu &&
            (e
              .getElement()
              .addEventListener(
                "contextmenu",
                this.LoadMenuEvent.bind(
                  this,
                  e,
                  this.table.options.rowContextMenu,
                ),
              ),
            this.tapHold(e, this.table.options.rowContextMenu)),
            this.table.options.rowClickMenu &&
              e
                .getElement()
                .addEventListener(
                  "click",
                  this.LoadMenuEvent.bind(
                    this,
                    e,
                    this.table.options.rowClickMenu,
                  ),
                );
        }),
        (j.prototype.initializeGroup = function (e) {
          this.table.options.groupContextMenu &&
            (e
              .getElement()
              .addEventListener(
                "contextmenu",
                this.LoadMenuEvent.bind(
                  this,
                  e,
                  this.table.options.groupContextMenu,
                ),
              ),
            this.tapHold(e, this.table.options.groupContextMenu)),
            this.table.options.groupClickMenu &&
              e
                .getElement()
                .addEventListener(
                  "click",
                  this.LoadMenuEvent.bind(
                    this,
                    e,
                    this.table.options.groupClickMenu,
                  ),
                );
        }),
        (j.prototype.loadMenu = function (e, t, o, i) {
          var n = this,
            r = !(e instanceof MouseEvent),
            a = document.createElement("div");
          if (
            (a.classList.add("tabulator-menu"),
            r || e.preventDefault(),
            o && o.length)
          ) {
            if (!i) {
              if (this.nestedMenuBlock) {
                if (this.isOpen()) return;
              } else
                this.nestedMenuBlock = setTimeout(function () {
                  n.nestedMenuBlock = !1;
                }, 100);
              this.hideMenu(), (this.menuElements = []);
            }
            o.forEach(function (e) {
              var o = document.createElement("div"),
                i = e.label,
                r = e.disabled;
              e.separator
                ? o.classList.add("tabulator-menu-separator")
                : (o.classList.add("tabulator-menu-item"),
                  "function" == typeof i &&
                    (i = i.call(n.table, t.getComponent())),
                  i instanceof Node ? o.appendChild(i) : (o.innerHTML = i),
                  "function" == typeof r &&
                    (r = r.call(n.table, t.getComponent())),
                  r
                    ? (o.classList.add("tabulator-menu-item-disabled"),
                      o.addEventListener("click", function (e) {
                        e.stopPropagation();
                      }))
                    : e.menu && e.menu.length
                    ? o.addEventListener("click", function (i) {
                        i.stopPropagation(),
                          n.hideOldSubMenus(a),
                          n.loadMenu(i, t, e.menu, o);
                      })
                    : e.action &&
                      o.addEventListener("click", function (o) {
                        e.action(o, t.getComponent());
                      }),
                  e.menu &&
                    e.menu.length &&
                    o.classList.add("tabulator-menu-item-submenu")),
                a.appendChild(o);
            }),
              a.addEventListener("click", function (e) {
                n.hideMenu();
              }),
              this.menuElements.push(a),
              this.positionMenu(a, i, r, e);
          }
        }),
        (j.prototype.hideOldSubMenus = function (e) {
          var t = this.menuElements.indexOf(e);
          if (t > -1)
            for (var o = this.menuElements.length - 1; o > t; o--) {
              var i = this.menuElements[o];
              i.parentNode && i.parentNode.removeChild(i),
                this.menuElements.pop();
            }
        }),
        (j.prototype.positionMenu = function (e, t, o, i) {
          var n,
            r,
            a,
            s = this,
            l = Math.max(document.body.offsetHeight, window.innerHeight);
          t
            ? ((n = (a = g.prototype.helpers.elOffset(t)).left + t.offsetWidth),
              (r = a.top - 1))
            : ((n = o ? i.touches[0].pageX : i.pageX),
              (r = o ? i.touches[0].pageY : i.pageY),
              (this.positionReversedX = !1)),
            (e.style.top = r + "px"),
            (e.style.left = n + "px"),
            setTimeout(function () {
              s.table.rowManager.element.addEventListener(
                "scroll",
                s.blurEvent,
              ),
                document.body.addEventListener("click", s.blurEvent),
                document.body.addEventListener("contextmenu", s.blurEvent),
                window.addEventListener("resize", s.blurEvent),
                document.body.addEventListener("keydown", s.escEvent);
            }, 100),
            document.body.appendChild(e),
            r + e.offsetHeight >= l &&
              ((e.style.top = ""),
              (e.style.bottom = t
                ? l - a.top - t.offsetHeight - 1 + "px"
                : l - r + "px")),
            (n + e.offsetWidth >= document.body.offsetWidth ||
              this.positionReversedX) &&
              ((e.style.left = ""),
              (e.style.right = t
                ? document.documentElement.offsetWidth - a.left + "px"
                : document.documentElement.offsetWidth - n + "px"),
              (this.positionReversedX = !0));
        }),
        (j.prototype.isOpen = function () {
          return !!this.menuElements.length;
        }),
        (j.prototype.escMenu = function (e) {
          27 == e.keyCode && this.hideMenu();
        }),
        (j.prototype.hideMenu = function () {
          this.menuElements.forEach(function (e) {
            e.parentNode && e.parentNode.removeChild(e);
          }),
            document.body.removeEventListener("keydown", this.escEvent),
            document.body.removeEventListener("click", this.blurEvent),
            document.body.removeEventListener("contextmenu", this.blurEvent),
            window.removeEventListener("resize", this.blurEvent),
            this.table.rowManager.element.removeEventListener(
              "scroll",
              this.blurEvent,
            );
        }),
        (j.prototype.menus = {}),
        g.prototype.registerModule("menu", j);
      var W = function (e) {
        (this.table = e),
          (this.placeholderElement = this.createPlaceholderElement()),
          (this.hoverElement = !1),
          (this.checkTimeout = !1),
          (this.checkPeriod = 250),
          (this.moving = !1),
          (this.toCol = !1),
          (this.toColAfter = !1),
          (this.startX = 0),
          (this.autoScrollMargin = 40),
          (this.autoScrollStep = 5),
          (this.autoScrollTimeout = !1),
          (this.touchMove = !1),
          (this.moveHover = this.moveHover.bind(this)),
          (this.endMove = this.endMove.bind(this));
      };
      (W.prototype.createPlaceholderElement = function () {
        var e = document.createElement("div");
        return (
          e.classList.add("tabulator-col"),
          e.classList.add("tabulator-col-placeholder"),
          e
        );
      }),
        (W.prototype.initializeColumn = function (e) {
          var t,
            o = this,
            i = {};
          e.modules.frozen ||
            ((t = e.getElement()),
            (i.mousemove = function (i) {
              e.parent === o.moving.parent &&
                ((o.touchMove ? i.touches[0].pageX : i.pageX) -
                  g.prototype.helpers.elOffset(t).left +
                  o.table.columnManager.element.scrollLeft >
                e.getWidth() / 2
                  ? (o.toCol === e && o.toColAfter) ||
                    (t.parentNode.insertBefore(
                      o.placeholderElement,
                      t.nextSibling,
                    ),
                    o.moveColumn(e, !0))
                  : (o.toCol !== e || o.toColAfter) &&
                    (t.parentNode.insertBefore(o.placeholderElement, t),
                    o.moveColumn(e, !1)));
            }.bind(o)),
            t.addEventListener("mousedown", function (t) {
              (o.touchMove = !1),
                1 === t.which &&
                  (o.checkTimeout = setTimeout(function () {
                    o.startMove(t, e);
                  }, o.checkPeriod));
            }),
            t.addEventListener("mouseup", function (e) {
              1 === e.which && o.checkTimeout && clearTimeout(o.checkTimeout);
            }),
            o.bindTouchEvents(e)),
            (e.modules.moveColumn = i);
        }),
        (W.prototype.bindTouchEvents = function (e) {
          var t,
            o,
            i,
            n,
            r,
            a,
            s = this,
            l = e.getElement(),
            c = !1;
          l.addEventListener(
            "touchstart",
            function (l) {
              s.checkTimeout = setTimeout(function () {
                (s.touchMove = !0),
                  e,
                  (t = e.nextColumn()),
                  (i = t ? t.getWidth() / 2 : 0),
                  (o = e.prevColumn()),
                  (n = o ? o.getWidth() / 2 : 0),
                  (r = 0),
                  (a = 0),
                  (c = !1),
                  s.startMove(l, e);
              }, s.checkPeriod);
            },
            { passive: !0 },
          ),
            l.addEventListener(
              "touchmove",
              function (l) {
                var u, d;
                s.moving &&
                  (s.moveHover(l),
                  c || (c = l.touches[0].pageX),
                  (u = l.touches[0].pageX - c) > 0
                    ? t &&
                      u - r > i &&
                      (d = t) !== e &&
                      ((c = l.touches[0].pageX),
                      d
                        .getElement()
                        .parentNode.insertBefore(
                          s.placeholderElement,
                          d.getElement().nextSibling,
                        ),
                      s.moveColumn(d, !0))
                    : o &&
                      -u - a > n &&
                      (d = o) !== e &&
                      ((c = l.touches[0].pageX),
                      d
                        .getElement()
                        .parentNode.insertBefore(
                          s.placeholderElement,
                          d.getElement(),
                        ),
                      s.moveColumn(d, !1)),
                  d &&
                    (d,
                    (t = d.nextColumn()),
                    (r = i),
                    (i = t ? t.getWidth() / 2 : 0),
                    (o = d.prevColumn()),
                    (a = n),
                    (n = o ? o.getWidth() / 2 : 0)));
              },
              { passive: !0 },
            ),
            l.addEventListener("touchend", function (e) {
              s.checkTimeout && clearTimeout(s.checkTimeout),
                s.moving && s.endMove(e);
            });
        }),
        (W.prototype.startMove = function (e, t) {
          var o = t.getElement();
          (this.moving = t),
            (this.startX =
              (this.touchMove ? e.touches[0].pageX : e.pageX) -
              g.prototype.helpers.elOffset(o).left),
            this.table.element.classList.add("tabulator-block-select"),
            (this.placeholderElement.style.width = t.getWidth() + "px"),
            (this.placeholderElement.style.height = t.getHeight() + "px"),
            o.parentNode.insertBefore(this.placeholderElement, o),
            o.parentNode.removeChild(o),
            (this.hoverElement = o.cloneNode(!0)),
            this.hoverElement.classList.add("tabulator-moving"),
            this.table.columnManager
              .getElement()
              .appendChild(this.hoverElement),
            (this.hoverElement.style.left = "0"),
            (this.hoverElement.style.bottom = "0"),
            this.touchMove ||
              (this._bindMouseMove(),
              document.body.addEventListener("mousemove", this.moveHover),
              document.body.addEventListener("mouseup", this.endMove)),
            this.moveHover(e);
        }),
        (W.prototype._bindMouseMove = function () {
          this.table.columnManager.columnsByIndex.forEach(function (e) {
            e.modules.moveColumn.mousemove &&
              e
                .getElement()
                .addEventListener("mousemove", e.modules.moveColumn.mousemove);
          });
        }),
        (W.prototype._unbindMouseMove = function () {
          this.table.columnManager.columnsByIndex.forEach(function (e) {
            e.modules.moveColumn.mousemove &&
              e
                .getElement()
                .removeEventListener(
                  "mousemove",
                  e.modules.moveColumn.mousemove,
                );
          });
        }),
        (W.prototype.moveColumn = function (e, t) {
          var o = this.moving.getCells();
          (this.toCol = e),
            (this.toColAfter = t),
            t
              ? e.getCells().forEach(function (e, t) {
                  var i = e.getElement(!0);
                  i.parentNode.insertBefore(o[t].getElement(), i.nextSibling);
                })
              : e.getCells().forEach(function (e, t) {
                  var i = e.getElement(!0);
                  i.parentNode.insertBefore(o[t].getElement(), i);
                });
        }),
        (W.prototype.endMove = function (e) {
          (1 === e.which || this.touchMove) &&
            (this._unbindMouseMove(),
            this.placeholderElement.parentNode.insertBefore(
              this.moving.getElement(),
              this.placeholderElement.nextSibling,
            ),
            this.placeholderElement.parentNode.removeChild(
              this.placeholderElement,
            ),
            this.hoverElement.parentNode.removeChild(this.hoverElement),
            this.table.element.classList.remove("tabulator-block-select"),
            this.toCol &&
              this.table.columnManager.moveColumnActual(
                this.moving,
                this.toCol,
                this.toColAfter,
              ),
            (this.moving = !1),
            (this.toCol = !1),
            (this.toColAfter = !1),
            this.touchMove ||
              (document.body.removeEventListener("mousemove", this.moveHover),
              document.body.removeEventListener("mouseup", this.endMove)));
        }),
        (W.prototype.moveHover = function (e) {
          var t,
            o = this,
            i = o.table.columnManager.getElement(),
            n = i.scrollLeft,
            r =
              (o.touchMove ? e.touches[0].pageX : e.pageX) -
              g.prototype.helpers.elOffset(i).left +
              n;
          (o.hoverElement.style.left = r - o.startX + "px"),
            r - n < o.autoScrollMargin &&
              (o.autoScrollTimeout ||
                (o.autoScrollTimeout = setTimeout(function () {
                  (t = Math.max(0, n - 5)),
                    (o.table.rowManager.getElement().scrollLeft = t),
                    (o.autoScrollTimeout = !1);
                }, 1))),
            n + i.clientWidth - r < o.autoScrollMargin &&
              (o.autoScrollTimeout ||
                (o.autoScrollTimeout = setTimeout(function () {
                  (t = Math.min(i.clientWidth, n + 5)),
                    (o.table.rowManager.getElement().scrollLeft = t),
                    (o.autoScrollTimeout = !1);
                }, 1)));
        }),
        g.prototype.registerModule("moveColumn", W);
      var V = function (e) {
        (this.table = e),
          (this.placeholderElement = this.createPlaceholderElement()),
          (this.hoverElement = !1),
          (this.checkTimeout = !1),
          (this.checkPeriod = 150),
          (this.moving = !1),
          (this.toRow = !1),
          (this.toRowAfter = !1),
          (this.hasHandle = !1),
          (this.startY = 0),
          (this.startX = 0),
          (this.moveHover = this.moveHover.bind(this)),
          (this.endMove = this.endMove.bind(this)),
          (this.tableRowDropEvent = !1),
          (this.touchMove = !1),
          (this.connection = !1),
          (this.connectionSelectorsTables = !1),
          (this.connectionSelectorsElements = !1),
          (this.connectionElements = []),
          (this.connections = []),
          (this.connectedTable = !1),
          (this.connectedRow = !1);
      };
      (V.prototype.createPlaceholderElement = function () {
        var e = document.createElement("div");
        return (
          e.classList.add("tabulator-row"),
          e.classList.add("tabulator-row-placeholder"),
          e
        );
      }),
        (V.prototype.initialize = function (e) {
          (this.connectionSelectorsTables =
            this.table.options.movableRowsConnectedTables),
            (this.connectionSelectorsElements =
              this.table.options.movableRowsConnectedElements),
            (this.connection =
              this.connectionSelectorsTables ||
              this.connectionSelectorsElements);
        }),
        (V.prototype.setHandle = function (e) {
          this.hasHandle = e;
        }),
        (V.prototype.initializeGroupHeader = function (e) {
          var t = this,
            o = {};
          (o.mouseup = function (e) {
            t.tableRowDrop(e, row);
          }.bind(t)),
            (o.mousemove = function (o) {
              var i;
              o.pageY -
                g.prototype.helpers.elOffset(e.element).top +
                t.table.rowManager.element.scrollTop >
              e.getHeight() / 2
                ? (t.toRow === e && t.toRowAfter) ||
                  ((i = e.getElement()).parentNode.insertBefore(
                    t.placeholderElement,
                    i.nextSibling,
                  ),
                  t.moveRow(e, !0))
                : (t.toRow !== e || t.toRowAfter) &&
                  (i = e.getElement()).previousSibling &&
                  (i.parentNode.insertBefore(t.placeholderElement, i),
                  t.moveRow(e, !1));
            }.bind(t)),
            (e.modules.moveRow = o);
        }),
        (V.prototype.initializeRow = function (e) {
          var t,
            o = this,
            i = {};
          (i.mouseup = function (t) {
            o.tableRowDrop(t, e);
          }.bind(o)),
            (i.mousemove = function (t) {
              var i = e.getElement();
              t.pageY -
                g.prototype.helpers.elOffset(i).top +
                o.table.rowManager.element.scrollTop >
              e.getHeight() / 2
                ? (o.toRow === e && o.toRowAfter) ||
                  (i.parentNode.insertBefore(
                    o.placeholderElement,
                    i.nextSibling,
                  ),
                  o.moveRow(e, !0))
                : (o.toRow !== e || o.toRowAfter) &&
                  (i.parentNode.insertBefore(o.placeholderElement, i),
                  o.moveRow(e, !1));
            }.bind(o)),
            this.hasHandle ||
              ((t = e.getElement()).addEventListener("mousedown", function (t) {
                1 === t.which &&
                  (o.checkTimeout = setTimeout(function () {
                    o.startMove(t, e);
                  }, o.checkPeriod));
              }),
              t.addEventListener("mouseup", function (e) {
                1 === e.which && o.checkTimeout && clearTimeout(o.checkTimeout);
              }),
              this.bindTouchEvents(e, e.getElement())),
            (e.modules.moveRow = i);
        }),
        (V.prototype.initializeCell = function (e) {
          var t = this,
            o = e.getElement(!0);
          o.addEventListener("mousedown", function (o) {
            1 === o.which &&
              (t.checkTimeout = setTimeout(function () {
                t.startMove(o, e.row);
              }, t.checkPeriod));
          }),
            o.addEventListener("mouseup", function (e) {
              1 === e.which && t.checkTimeout && clearTimeout(t.checkTimeout);
            }),
            this.bindTouchEvents(e.row, o);
        }),
        (V.prototype.bindTouchEvents = function (e, t) {
          var o,
            i,
            n,
            r,
            a,
            s,
            l = this,
            c = !1;
          t.addEventListener(
            "touchstart",
            function (t) {
              l.checkTimeout = setTimeout(function () {
                (l.touchMove = !0),
                  e,
                  (o = e.nextRow()),
                  (n = o ? o.getHeight() / 2 : 0),
                  (i = e.prevRow()),
                  (r = i ? i.getHeight() / 2 : 0),
                  (a = 0),
                  (s = 0),
                  (c = !1),
                  l.startMove(t, e);
              }, l.checkPeriod);
            },
            { passive: !0 },
          ),
            this.moving,
            this.toRow,
            this.toRowAfter,
            t.addEventListener("touchmove", function (t) {
              var u, d;
              l.moving &&
                (t.preventDefault(),
                l.moveHover(t),
                c || (c = t.touches[0].pageY),
                (u = t.touches[0].pageY - c) > 0
                  ? o &&
                    u - a > n &&
                    (d = o) !== e &&
                    ((c = t.touches[0].pageY),
                    d
                      .getElement()
                      .parentNode.insertBefore(
                        l.placeholderElement,
                        d.getElement().nextSibling,
                      ),
                    l.moveRow(d, !0))
                  : i &&
                    -u - s > r &&
                    (d = i) !== e &&
                    ((c = t.touches[0].pageY),
                    d
                      .getElement()
                      .parentNode.insertBefore(
                        l.placeholderElement,
                        d.getElement(),
                      ),
                    l.moveRow(d, !1)),
                d &&
                  (d,
                  (o = d.nextRow()),
                  (a = n),
                  (n = o ? o.getHeight() / 2 : 0),
                  (i = d.prevRow()),
                  (s = r),
                  (r = i ? i.getHeight() / 2 : 0)));
            }),
            t.addEventListener("touchend", function (e) {
              l.checkTimeout && clearTimeout(l.checkTimeout),
                l.moving && (l.endMove(e), (l.touchMove = !1));
            });
        }),
        (V.prototype._bindMouseMove = function () {
          this.table.rowManager.getDisplayRows().forEach(function (e) {
            ("row" !== e.type && "group" !== e.type) ||
              !e.modules.moveRow.mousemove ||
              e
                .getElement()
                .addEventListener("mousemove", e.modules.moveRow.mousemove);
          });
        }),
        (V.prototype._unbindMouseMove = function () {
          this.table.rowManager.getDisplayRows().forEach(function (e) {
            ("row" !== e.type && "group" !== e.type) ||
              !e.modules.moveRow.mousemove ||
              e
                .getElement()
                .removeEventListener("mousemove", e.modules.moveRow.mousemove);
          });
        }),
        (V.prototype.startMove = function (e, t) {
          var o = t.getElement();
          this.setStartPosition(e, t),
            (this.moving = t),
            this.table.element.classList.add("tabulator-block-select"),
            (this.placeholderElement.style.width = t.getWidth() + "px"),
            (this.placeholderElement.style.height = t.getHeight() + "px"),
            this.connection
              ? (this.table.element.classList.add(
                  "tabulator-movingrow-sending",
                ),
                this.connectToTables(t))
              : (o.parentNode.insertBefore(this.placeholderElement, o),
                o.parentNode.removeChild(o)),
            (this.hoverElement = o.cloneNode(!0)),
            this.hoverElement.classList.add("tabulator-moving"),
            this.connection
              ? (document.body.appendChild(this.hoverElement),
                (this.hoverElement.style.left = "0"),
                (this.hoverElement.style.top = "0"),
                (this.hoverElement.style.width =
                  this.table.element.clientWidth + "px"),
                (this.hoverElement.style.whiteSpace = "nowrap"),
                (this.hoverElement.style.overflow = "hidden"),
                (this.hoverElement.style.pointerEvents = "none"))
              : (this.table.rowManager
                  .getTableElement()
                  .appendChild(this.hoverElement),
                (this.hoverElement.style.left = "0"),
                (this.hoverElement.style.top = "0"),
                this._bindMouseMove()),
            document.body.addEventListener("mousemove", this.moveHover),
            document.body.addEventListener("mouseup", this.endMove),
            this.moveHover(e);
        }),
        (V.prototype.setStartPosition = function (e, t) {
          var o,
            i,
            n = this.touchMove ? e.touches[0].pageX : e.pageX,
            r = this.touchMove ? e.touches[0].pageY : e.pageY;
          (o = t.getElement()),
            this.connection
              ? ((i = o.getBoundingClientRect()),
                (this.startX = i.left - n + window.pageXOffset),
                (this.startY = i.top - r + window.pageYOffset))
              : (this.startY = r - o.getBoundingClientRect().top);
        }),
        (V.prototype.endMove = function (e) {
          (e && 1 !== e.which && !this.touchMove) ||
            (this._unbindMouseMove(),
            this.connection ||
              (this.placeholderElement.parentNode.insertBefore(
                this.moving.getElement(),
                this.placeholderElement.nextSibling,
              ),
              this.placeholderElement.parentNode.removeChild(
                this.placeholderElement,
              )),
            this.hoverElement.parentNode.removeChild(this.hoverElement),
            this.table.element.classList.remove("tabulator-block-select"),
            this.toRow &&
              this.table.rowManager.moveRow(
                this.moving,
                this.toRow,
                this.toRowAfter,
              ),
            (this.moving = !1),
            (this.toRow = !1),
            (this.toRowAfter = !1),
            document.body.removeEventListener("mousemove", this.moveHover),
            document.body.removeEventListener("mouseup", this.endMove),
            this.connection &&
              (this.table.element.classList.remove(
                "tabulator-movingrow-sending",
              ),
              this.disconnectFromTables()));
        }),
        (V.prototype.moveRow = function (e, t) {
          (this.toRow = e), (this.toRowAfter = t);
        }),
        (V.prototype.moveHover = function (e) {
          this.connection
            ? this.moveHoverConnections.call(this, e)
            : this.moveHoverTable.call(this, e);
        }),
        (V.prototype.moveHoverTable = function (e) {
          var t = this.table.rowManager.getElement(),
            o = t.scrollTop,
            i =
              (this.touchMove ? e.touches[0].pageY : e.pageY) -
              t.getBoundingClientRect().top +
              o;
          this.hoverElement.style.top = i - this.startY + "px";
        }),
        (V.prototype.moveHoverConnections = function (e) {
          (this.hoverElement.style.left =
            this.startX +
            (this.touchMove ? e.touches[0].pageX : e.pageX) +
            "px"),
            (this.hoverElement.style.top =
              this.startY +
              (this.touchMove ? e.touches[0].pageY : e.pageY) +
              "px");
        }),
        (V.prototype.elementRowDrop = function (e, t, o) {
          this.table.options.movableRowsElementDrop &&
            this.table.options.movableRowsElementDrop(
              e,
              t,
              !!o && o.getComponent(),
            );
        }),
        (V.prototype.connectToTables = function (e) {
          var t,
            o = this;
          this.connectionSelectorsTables &&
            ((t = this.table.modules.comms.getConnections(
              this.connectionSelectorsTables,
            )),
            this.table.options.movableRowsSendingStart.call(this.table, t),
            this.table.modules.comms.send(
              this.connectionSelectorsTables,
              "moveRow",
              "connect",
              { row: e },
            )),
            this.connectionSelectorsElements &&
              ((this.connectionElements = []),
              Array.isArray(this.connectionSelectorsElements) ||
                (this.connectionSelectorsElements = [
                  this.connectionSelectorsElements,
                ]),
              this.connectionSelectorsElements.forEach(function (e) {
                "string" == typeof e
                  ? (o.connectionElements = o.connectionElements.concat(
                      Array.prototype.slice.call(document.querySelectorAll(e)),
                    ))
                  : o.connectionElements.push(e);
              }),
              this.connectionElements.forEach(function (e) {
                var t = function (t) {
                  o.elementRowDrop(t, e, o.moving);
                };
                e.addEventListener("mouseup", t),
                  (e.tabulatorElementDropEvent = t),
                  e.classList.add("tabulator-movingrow-receiving");
              }));
        }),
        (V.prototype.disconnectFromTables = function () {
          var e;
          this.connectionSelectorsTables &&
            ((e = this.table.modules.comms.getConnections(
              this.connectionSelectorsTables,
            )),
            this.table.options.movableRowsSendingStop.call(this.table, e),
            this.table.modules.comms.send(
              this.connectionSelectorsTables,
              "moveRow",
              "disconnect",
            )),
            this.connectionElements.forEach(function (e) {
              e.classList.remove("tabulator-movingrow-receiving"),
                e.removeEventListener("mouseup", e.tabulatorElementDropEvent),
                delete e.tabulatorElementDropEvent;
            });
        }),
        (V.prototype.connect = function (e, t) {
          var o = this;
          return this.connectedTable
            ? (console.warn(
                "Move Row Error - Table cannot accept connection, already connected to table:",
                this.connectedTable,
              ),
              !1)
            : ((this.connectedTable = e),
              (this.connectedRow = t),
              this.table.element.classList.add("tabulator-movingrow-receiving"),
              o.table.rowManager.getDisplayRows().forEach(function (e) {
                "row" === e.type &&
                  e.modules.moveRow &&
                  e.modules.moveRow.mouseup &&
                  e
                    .getElement()
                    .addEventListener("mouseup", e.modules.moveRow.mouseup);
              }),
              (o.tableRowDropEvent = o.tableRowDrop.bind(o)),
              o.table.element.addEventListener("mouseup", o.tableRowDropEvent),
              this.table.options.movableRowsReceivingStart.call(
                this.table,
                t,
                e,
              ),
              !0);
        }),
        (V.prototype.disconnect = function (e) {
          var t = this;
          e === this.connectedTable
            ? ((this.connectedTable = !1),
              (this.connectedRow = !1),
              this.table.element.classList.remove(
                "tabulator-movingrow-receiving",
              ),
              t.table.rowManager.getDisplayRows().forEach(function (e) {
                "row" === e.type &&
                  e.modules.moveRow &&
                  e.modules.moveRow.mouseup &&
                  e
                    .getElement()
                    .removeEventListener("mouseup", e.modules.moveRow.mouseup);
              }),
              t.table.element.removeEventListener(
                "mouseup",
                t.tableRowDropEvent,
              ),
              this.table.options.movableRowsReceivingStop.call(this.table, e))
            : console.warn(
                "Move Row Error - trying to disconnect from non connected table",
              );
        }),
        (V.prototype.dropComplete = function (e, t, o) {
          var i = !1;
          if (o) {
            switch (r(this.table.options.movableRowsSender)) {
              case "string":
                i = this.senders[this.table.options.movableRowsSender];
                break;
              case "function":
                i = this.table.options.movableRowsSender;
            }
            i
              ? i.call(
                  this,
                  this.moving.getComponent(),
                  t ? t.getComponent() : void 0,
                  e,
                )
              : this.table.options.movableRowsSender &&
                console.warn(
                  "Mover Row Error - no matching sender found:",
                  this.table.options.movableRowsSender,
                ),
              this.table.options.movableRowsSent.call(
                this.table,
                this.moving.getComponent(),
                t ? t.getComponent() : void 0,
                e,
              );
          } else
            this.table.options.movableRowsSentFailed.call(
              this.table,
              this.moving.getComponent(),
              t ? t.getComponent() : void 0,
              e,
            );
          this.endMove();
        }),
        (V.prototype.tableRowDrop = function (e, t) {
          var o = !1,
            i = !1;
          switch (
            (e.stopImmediatePropagation(),
            r(this.table.options.movableRowsReceiver))
          ) {
            case "string":
              o = this.receivers[this.table.options.movableRowsReceiver];
              break;
            case "function":
              o = this.table.options.movableRowsReceiver;
          }
          o
            ? (i = o.call(
                this,
                this.connectedRow.getComponent(),
                t ? t.getComponent() : void 0,
                this.connectedTable,
              ))
            : console.warn(
                "Mover Row Error - no matching receiver found:",
                this.table.options.movableRowsReceiver,
              ),
            i
              ? this.table.options.movableRowsReceived.call(
                  this.table,
                  this.connectedRow.getComponent(),
                  t ? t.getComponent() : void 0,
                  this.connectedTable,
                )
              : this.table.options.movableRowsReceivedFailed.call(
                  this.table,
                  this.connectedRow.getComponent(),
                  t ? t.getComponent() : void 0,
                  this.connectedTable,
                ),
            this.table.modules.comms.send(
              this.connectedTable,
              "moveRow",
              "dropcomplete",
              { row: t, success: i },
            );
        }),
        (V.prototype.receivers = {
          insert: function (e, t, o) {
            return this.table.addRow(e.getData(), void 0, t), !0;
          },
          add: function (e, t, o) {
            return this.table.addRow(e.getData()), !0;
          },
          update: function (e, t, o) {
            return !!t && (t.update(e.getData()), !0);
          },
          replace: function (e, t, o) {
            return (
              !!t && (this.table.addRow(e.getData(), void 0, t), t.delete(), !0)
            );
          },
        }),
        (V.prototype.senders = {
          delete: function (e, t, o) {
            e.delete();
          },
        }),
        (V.prototype.commsReceived = function (e, t, o) {
          switch (t) {
            case "connect":
              return this.connect(e, o.row);
            case "disconnect":
              return this.disconnect(e);
            case "dropcomplete":
              return this.dropComplete(e, o.row, o.success);
          }
        }),
        g.prototype.registerModule("moveRow", V);
      var G = function (e) {
        (this.table = e),
          (this.allowedTypes = ["", "data", "edit", "clipboard"]),
          (this.enabled = !0);
      };
      (G.prototype.initializeColumn = function (e) {
        var t = this,
          o = !1,
          i = {};
        this.allowedTypes.forEach(function (n) {
          var r,
            a = "mutator" + (n.charAt(0).toUpperCase() + n.slice(1));
          e.definition[a] &&
            (r = t.lookupMutator(e.definition[a])) &&
            ((o = !0),
            (i[a] = { mutator: r, params: e.definition[a + "Params"] || {} }));
        }),
          o && (e.modules.mutate = i);
      }),
        (G.prototype.lookupMutator = function (e) {
          var t = !1;
          switch (void 0 === e ? "undefined" : r(e)) {
            case "string":
              this.mutators[e]
                ? (t = this.mutators[e])
                : console.warn(
                    "Mutator Error - No such mutator found, ignoring: ",
                    e,
                  );
              break;
            case "function":
              t = e;
          }
          return t;
        }),
        (G.prototype.transformRow = function (e, t, o) {
          var i,
            n = "mutator" + (t.charAt(0).toUpperCase() + t.slice(1));
          return (
            this.enabled &&
              this.table.columnManager.traverse(function (r) {
                var a, s, l;
                r.modules.mutate &&
                  (a = r.modules.mutate[n] || r.modules.mutate.mutator || !1) &&
                  ((i = r.getFieldValue(void 0 !== o ? o : e)),
                  ("data" != t && void 0 === i) ||
                    ((l = r.getComponent()),
                    (s =
                      "function" == typeof a.params
                        ? a.params(i, e, t, l)
                        : a.params),
                    r.setFieldValue(e, a.mutator(i, e, t, s, l))));
              }),
            e
          );
        }),
        (G.prototype.transformCell = function (e, t) {
          var o =
              e.column.modules.mutate.mutatorEdit ||
              e.column.modules.mutate.mutator ||
              !1,
            i = {};
          return o
            ? ((i = Object.assign(i, e.row.getData())),
              e.column.setFieldValue(i, t),
              o.mutator(t, i, "edit", o.params, e.getComponent()))
            : t;
        }),
        (G.prototype.enable = function () {
          this.enabled = !0;
        }),
        (G.prototype.disable = function () {
          this.enabled = !1;
        }),
        (G.prototype.mutators = {}),
        g.prototype.registerModule("mutator", G);
      var U = function (e) {
        (this.table = e),
          (this.mode = "local"),
          (this.progressiveLoad = !1),
          (this.size = 0),
          (this.page = 1),
          (this.count = 5),
          (this.max = 1),
          (this.displayIndex = 0),
          (this.initialLoad = !0),
          (this.pageSizes = []),
          (this.dataReceivedNames = {}),
          (this.dataSentNames = {}),
          this.createElements();
      };
      (U.prototype.createElements = function () {
        var e;
        (this.element = document.createElement("span")),
          this.element.classList.add("tabulator-paginator"),
          (this.pagesElement = document.createElement("span")),
          this.pagesElement.classList.add("tabulator-pages"),
          (e = document.createElement("button")).classList.add(
            "tabulator-page",
          ),
          e.setAttribute("type", "button"),
          e.setAttribute("role", "button"),
          e.setAttribute("aria-label", ""),
          e.setAttribute("title", ""),
          (this.firstBut = e.cloneNode(!0)),
          this.firstBut.setAttribute("data-page", "first"),
          (this.prevBut = e.cloneNode(!0)),
          this.prevBut.setAttribute("data-page", "prev"),
          (this.nextBut = e.cloneNode(!0)),
          this.nextBut.setAttribute("data-page", "next"),
          (this.lastBut = e.cloneNode(!0)),
          this.lastBut.setAttribute("data-page", "last"),
          this.table.options.paginationSizeSelector &&
            ((this.pageSizeSelect = document.createElement("select")),
            this.pageSizeSelect.classList.add("tabulator-page-size"));
      }),
        (U.prototype.generatePageSizeSelectList = function () {
          var e = this,
            t = [];
          if (this.pageSizeSelect) {
            if (Array.isArray(this.table.options.paginationSizeSelector))
              (t = this.table.options.paginationSizeSelector),
                (this.pageSizes = t),
                -1 == this.pageSizes.indexOf(this.size) && t.unshift(this.size);
            else if (-1 == this.pageSizes.indexOf(this.size)) {
              t = [];
              for (var o = 1; o < 5; o++) t.push(this.size * o);
              this.pageSizes = t;
            } else t = this.pageSizes;
            for (; this.pageSizeSelect.firstChild; )
              this.pageSizeSelect.removeChild(this.pageSizeSelect.firstChild);
            t.forEach(function (t) {
              var o = document.createElement("option");
              (o.value = t),
                !0 === t
                  ? e.table.modules.localize.bind(
                      "pagination|all",
                      function (e) {
                        o.innerHTML = e;
                      },
                    )
                  : (o.innerHTML = t),
                e.pageSizeSelect.appendChild(o);
            }),
              (this.pageSizeSelect.value = this.size);
          }
        }),
        (U.prototype.initialize = function (e) {
          var t,
            o,
            i,
            n = this;
          (this.dataSentNames = Object.assign(
            {},
            this.paginationDataSentNames,
          )),
            (this.dataSentNames = Object.assign(
              this.dataSentNames,
              this.table.options.paginationDataSent,
            )),
            (this.dataReceivedNames = Object.assign(
              {},
              this.paginationDataReceivedNames,
            )),
            (this.dataReceivedNames = Object.assign(
              this.dataReceivedNames,
              this.table.options.paginationDataReceived,
            )),
            n.table.modules.localize.bind("pagination|first", function (e) {
              n.firstBut.innerHTML = e;
            }),
            n.table.modules.localize.bind(
              "pagination|first_title",
              function (e) {
                n.firstBut.setAttribute("aria-label", e),
                  n.firstBut.setAttribute("title", e);
              },
            ),
            n.table.modules.localize.bind("pagination|prev", function (e) {
              n.prevBut.innerHTML = e;
            }),
            n.table.modules.localize.bind(
              "pagination|prev_title",
              function (e) {
                n.prevBut.setAttribute("aria-label", e),
                  n.prevBut.setAttribute("title", e);
              },
            ),
            n.table.modules.localize.bind("pagination|next", function (e) {
              n.nextBut.innerHTML = e;
            }),
            n.table.modules.localize.bind(
              "pagination|next_title",
              function (e) {
                n.nextBut.setAttribute("aria-label", e),
                  n.nextBut.setAttribute("title", e);
              },
            ),
            n.table.modules.localize.bind("pagination|last", function (e) {
              n.lastBut.innerHTML = e;
            }),
            n.table.modules.localize.bind(
              "pagination|last_title",
              function (e) {
                n.lastBut.setAttribute("aria-label", e),
                  n.lastBut.setAttribute("title", e);
              },
            ),
            n.firstBut.addEventListener("click", function () {
              n.setPage(1)
                .then(function () {})
                .catch(function () {});
            }),
            n.prevBut.addEventListener("click", function () {
              n.previousPage()
                .then(function () {})
                .catch(function () {});
            }),
            n.nextBut.addEventListener("click", function () {
              n.nextPage()
                .then(function () {})
                .catch(function () {});
            }),
            n.lastBut.addEventListener("click", function () {
              n.setPage(n.max)
                .then(function () {})
                .catch(function () {});
            }),
            n.table.options.paginationElement &&
              (n.element = n.table.options.paginationElement),
            this.pageSizeSelect &&
              ((t = document.createElement("label")),
              n.table.modules.localize.bind(
                "pagination|page_size",
                function (e) {
                  n.pageSizeSelect.setAttribute("aria-label", e),
                    n.pageSizeSelect.setAttribute("title", e),
                    (t.innerHTML = e);
                },
              ),
              n.element.appendChild(t),
              n.element.appendChild(n.pageSizeSelect),
              n.pageSizeSelect.addEventListener("change", function (e) {
                n.setPageSize(
                  "true" == n.pageSizeSelect.value || n.pageSizeSelect.value,
                ),
                  n
                    .setPage(1)
                    .then(function () {})
                    .catch(function () {});
              })),
            n.element.appendChild(n.firstBut),
            n.element.appendChild(n.prevBut),
            n.element.appendChild(n.pagesElement),
            n.element.appendChild(n.nextBut),
            n.element.appendChild(n.lastBut),
            n.table.options.paginationElement ||
              e ||
              n.table.footerManager.append(n.element, n),
            (n.mode = n.table.options.pagination),
            n.table.options.paginationSize
              ? (n.size = n.table.options.paginationSize)
              : ((o = document.createElement("div")).classList.add(
                  "tabulator-row",
                ),
                (o.style.visibility = e),
                (i = document.createElement("div")).classList.add(
                  "tabulator-cell",
                ),
                (i.innerHTML = "Page Row Test"),
                o.appendChild(i),
                n.table.rowManager.getTableElement().appendChild(o),
                (n.size = Math.floor(
                  n.table.rowManager.getElement().clientHeight / o.offsetHeight,
                )),
                n.table.rowManager.getTableElement().removeChild(o)),
            (n.count = n.table.options.paginationButtonCount),
            n.generatePageSizeSelectList();
        }),
        (U.prototype.initializeProgressive = function (e) {
          this.initialize(!0),
            (this.mode = "progressive_" + e),
            (this.progressiveLoad = !0);
        }),
        (U.prototype.setDisplayIndex = function (e) {
          this.displayIndex = e;
        }),
        (U.prototype.getDisplayIndex = function () {
          return this.displayIndex;
        }),
        (U.prototype.setMaxRows = function (e) {
          (this.max = e
            ? !0 === this.size
              ? 1
              : Math.ceil(e / this.size)
            : 1),
            this.page > this.max && (this.page = this.max);
        }),
        (U.prototype.reset = function (e, t) {
          return (
            ("local" == this.mode || e) && (this.page = 1),
            t && (this.initialLoad = !0),
            !0
          );
        }),
        (U.prototype.setMaxPage = function (e) {
          (e = parseInt(e)),
            (this.max = e || 1),
            this.page > this.max && ((this.page = this.max), this.trigger());
        }),
        (U.prototype.setPage = function (e) {
          var t = this,
            o = this;
          switch (e) {
            case "first":
              return this.setPage(1);
            case "prev":
              return this.previousPage();
            case "next":
              return this.nextPage();
            case "last":
              return this.setPage(this.max);
          }
          return new Promise(function (i, n) {
            ((e = parseInt(e)) > 0 && e <= t.max) || "local" !== t.mode
              ? ((t.page = e),
                t
                  .trigger()
                  .then(function () {
                    i();
                  })
                  .catch(function () {
                    n();
                  }),
                o.table.options.persistence &&
                  o.table.modExists("persistence", !0) &&
                  o.table.modules.persistence.config.page &&
                  o.table.modules.persistence.save("page"))
              : (console.warn(
                  "Pagination Error - Requested page is out of range of 1 - " +
                    t.max +
                    ":",
                  e,
                ),
                n());
          });
        }),
        (U.prototype.setPageToRow = function (e) {
          var t = this;
          return new Promise(function (o, i) {
            var n = t.table.rowManager
              .getDisplayRows(t.displayIndex - 1)
              .indexOf(e);
            if (n > -1) {
              var r = !0 === t.size ? 1 : Math.ceil((n + 1) / t.size);
              t.setPage(r)
                .then(function () {
                  o();
                })
                .catch(function () {
                  i();
                });
            } else
              console.warn("Pagination Error - Requested row is not visible"),
                i();
          });
        }),
        (U.prototype.setPageSize = function (e) {
          !0 !== e && (e = parseInt(e)),
            e > 0 && (this.size = e),
            this.pageSizeSelect && this.generatePageSizeSelectList(),
            this.table.options.persistence &&
              this.table.modExists("persistence", !0) &&
              this.table.modules.persistence.config.page &&
              this.table.modules.persistence.save("page");
        }),
        (U.prototype._setPageButtons = function () {
          for (
            var e = this,
              t = Math.floor((this.count - 1) / 2),
              o = Math.ceil((this.count - 1) / 2),
              i =
                this.max - this.page + t + 1 < this.count
                  ? this.max - this.count + 1
                  : Math.max(this.page - t, 1),
              n =
                this.page <= o
                  ? Math.min(this.count, this.max)
                  : Math.min(this.page + o, this.max);
            e.pagesElement.firstChild;

          )
            e.pagesElement.removeChild(e.pagesElement.firstChild);
          1 == e.page
            ? ((e.firstBut.disabled = !0), (e.prevBut.disabled = !0))
            : ((e.firstBut.disabled = !1), (e.prevBut.disabled = !1)),
            e.page == e.max
              ? ((e.lastBut.disabled = !0), (e.nextBut.disabled = !0))
              : ((e.lastBut.disabled = !1), (e.nextBut.disabled = !1));
          for (var r = i; r <= n; r++)
            r > 0 &&
              r <= e.max &&
              e.pagesElement.appendChild(e._generatePageButton(r));
          this.footerRedraw();
        }),
        (U.prototype._generatePageButton = function (e) {
          var t = this,
            o = document.createElement("button");
          return (
            o.classList.add("tabulator-page"),
            e == t.page && o.classList.add("active"),
            o.setAttribute("type", "button"),
            o.setAttribute("role", "button"),
            t.table.modules.localize.bind(
              "pagination|page_title",
              function (t) {
                o.setAttribute("aria-label", t + " " + e),
                  o.setAttribute("title", t + " " + e);
              },
            ),
            o.setAttribute("data-page", e),
            (o.textContent = e),
            o.addEventListener("click", function (o) {
              t.setPage(e)
                .then(function () {})
                .catch(function () {});
            }),
            o
          );
        }),
        (U.prototype.previousPage = function () {
          var e = this;
          return new Promise(function (t, o) {
            e.page > 1
              ? (e.page--,
                e
                  .trigger()
                  .then(function () {
                    t();
                  })
                  .catch(function () {
                    o();
                  }),
                e.table.options.persistence &&
                  e.table.modExists("persistence", !0) &&
                  e.table.modules.persistence.config.page &&
                  e.table.modules.persistence.save("page"))
              : (console.warn(
                  "Pagination Error - Previous page would be less than page 1:",
                  0,
                ),
                o());
          });
        }),
        (U.prototype.nextPage = function () {
          var e = this;
          return new Promise(function (t, o) {
            e.page < e.max
              ? (e.page++,
                e
                  .trigger()
                  .then(function () {
                    t();
                  })
                  .catch(function () {
                    o();
                  }),
                e.table.options.persistence &&
                  e.table.modExists("persistence", !0) &&
                  e.table.modules.persistence.config.page &&
                  e.table.modules.persistence.save("page"))
              : (e.progressiveLoad ||
                  console.warn(
                    "Pagination Error - Next page would be greater than maximum page of " +
                      e.max +
                      ":",
                    e.max + 1,
                  ),
                o());
          });
        }),
        (U.prototype.getPage = function () {
          return this.page;
        }),
        (U.prototype.getPageMax = function () {
          return this.max;
        }),
        (U.prototype.getPageSize = function (e) {
          return this.size;
        }),
        (U.prototype.getMode = function () {
          return this.mode;
        }),
        (U.prototype.getRows = function (e) {
          var t, o, i;
          if ("local" == this.mode) {
            (t = []),
              !0 === this.size
                ? ((o = 0), (i = e.length))
                : (i = (o = this.size * (this.page - 1)) + parseInt(this.size)),
              this._setPageButtons();
            for (var n = o; n < i; n++) e[n] && t.push(e[n]);
            return t;
          }
          return this._setPageButtons(), e.slice(0);
        }),
        (U.prototype.trigger = function () {
          var e,
            t = this;
          return new Promise(function (o, i) {
            switch (t.mode) {
              case "local":
                (e = t.table.rowManager.scrollLeft),
                  t.table.rowManager.refreshActiveData("page"),
                  t.table.rowManager.scrollHorizontal(e),
                  t.table.options.pageLoaded.call(t.table, t.getPage()),
                  o();
                break;
              case "remote":
              case "progressive_load":
              case "progressive_scroll":
                t.table.modules.ajax.blockActiveRequest(),
                  t
                    ._getRemotePage()
                    .then(function () {
                      o();
                    })
                    .catch(function () {
                      i();
                    });
                break;
              default:
                console.warn(
                  "Pagination Error - no such pagination mode:",
                  t.mode,
                ),
                  i();
            }
          });
        }),
        (U.prototype._getRemotePage = function () {
          var e,
            t,
            o = this,
            i = this;
          return new Promise(function (n, r) {
            if (
              (i.table.modExists("ajax", !0) || r(),
              (e = g.prototype.helpers.deepClone(
                i.table.modules.ajax.getParams() || {},
              )),
              ((t = i.table.modules.ajax.getParams())[o.dataSentNames.page] =
                i.page),
              o.size && (t[o.dataSentNames.size] = o.size),
              o.table.options.ajaxSorting && o.table.modExists("sort"))
            ) {
              var a = i.table.modules.sort.getSort();
              a.forEach(function (e) {
                delete e.column;
              }),
                (t[o.dataSentNames.sorters] = a);
            }
            if (o.table.options.ajaxFiltering && o.table.modExists("filter")) {
              var s = i.table.modules.filter.getFilters(!0, !0);
              t[o.dataSentNames.filters] = s;
            }
            i.table.modules.ajax.setParams(t),
              i.table.modules.ajax
                .sendRequest(o.progressiveLoad)
                .then(function (e) {
                  i._parseRemoteData(e), n();
                })
                .catch(function (e) {
                  r();
                }),
              i.table.modules.ajax.setParams(e);
          });
        }),
        (U.prototype._parseRemoteData = function (e) {
          var t,
            o,
            i = this;
          if (
            (void 0 === e[this.dataReceivedNames.last_page] &&
              console.warn(
                "Remote Pagination Error - Server response missing '" +
                  this.dataReceivedNames.last_page +
                  "' property",
              ),
            e[this.dataReceivedNames.data])
          ) {
            if (
              ((this.max = parseInt(e[this.dataReceivedNames.last_page]) || 1),
              this.progressiveLoad)
            )
              switch (this.mode) {
                case "progressive_load":
                  1 == this.page
                    ? this.table.rowManager.setData(
                        e[this.dataReceivedNames.data],
                        !1,
                        this.initialLoad && 1 == this.page,
                      )
                    : this.table.rowManager.addRows(
                        e[this.dataReceivedNames.data],
                      ),
                    this.page < this.max &&
                      setTimeout(function () {
                        i.nextPage()
                          .then(function () {})
                          .catch(function () {});
                      }, i.table.options.ajaxProgressiveLoadDelay);
                  break;
                case "progressive_scroll":
                  (e = this.table.rowManager
                    .getData()
                    .concat(e[this.dataReceivedNames.data])),
                    this.table.rowManager.setData(
                      e,
                      !0,
                      this.initialLoad && 1 == this.page,
                    ),
                    (o =
                      this.table.options.ajaxProgressiveLoadScrollMargin ||
                      2 * this.table.rowManager.element.clientHeight),
                    i.table.rowManager.element.scrollHeight <=
                      i.table.rowManager.element.clientHeight + o &&
                      i
                        .nextPage()
                        .then(function () {})
                        .catch(function () {});
              }
            else
              (t = this.table.rowManager.scrollLeft),
                this.table.rowManager.setData(
                  e[this.dataReceivedNames.data],
                  !1,
                  this.initialLoad && 1 == this.page,
                ),
                this.table.rowManager.scrollHorizontal(t),
                this.table.columnManager.scrollHorizontal(t),
                this.table.options.pageLoaded.call(this.table, this.getPage());
            this.initialLoad = !1;
          } else
            console.warn(
              "Remote Pagination Error - Server response missing '" +
                this.dataReceivedNames.data +
                "' property",
            );
        }),
        (U.prototype.footerRedraw = function () {
          var e = this.table.footerManager.element;
          Math.ceil(e.clientWidth) - e.scrollWidth < 0
            ? (this.pagesElement.style.display = "none")
            : ((this.pagesElement.style.display = ""),
              Math.ceil(e.clientWidth) - e.scrollWidth < 0 &&
                (this.pagesElement.style.display = "none"));
        }),
        (U.prototype.paginationDataSentNames = {
          page: "page",
          size: "size",
          sorters: "sorters",
          filters: "filters",
        }),
        (U.prototype.paginationDataReceivedNames = {
          current_page: "current_page",
          last_page: "last_page",
          data: "data",
        }),
        g.prototype.registerModule("page", U);
      var X = function (e) {
        (this.table = e),
          (this.mode = ""),
          (this.id = ""),
          (this.defWatcherBlock = !1),
          (this.config = {}),
          (this.readFunc = !1),
          (this.writeFunc = !1);
      };
      (X.prototype.localStorageTest = function () {
        var e = "_tabulator_test";
        try {
          return (
            window.localStorage.setItem(e, e),
            window.localStorage.removeItem(e),
            !0
          );
        } catch (e) {
          return !1;
        }
      }),
        (X.prototype.initialize = function () {
          var e,
            t = this.table.options.persistenceMode,
            o = this.table.options.persistenceID;
          (this.mode =
            !0 !== t ? t : this.localStorageTest() ? "local" : "cookie"),
            this.table.options.persistenceReaderFunc
              ? "function" == typeof this.table.options.persistenceReaderFunc
                ? (this.readFunc = this.table.options.persistenceReaderFunc)
                : this.readers[this.table.options.persistenceReaderFunc]
                ? (this.readFunc =
                    this.readers[this.table.options.persistenceReaderFunc])
                : console.warn(
                    "Persistence Read Error - invalid reader set",
                    this.table.options.persistenceReaderFunc,
                  )
              : this.readers[this.mode]
              ? (this.readFunc = this.readers[this.mode])
              : console.warn(
                  "Persistence Read Error - invalid reader set",
                  this.mode,
                ),
            this.table.options.persistenceWriterFunc
              ? "function" == typeof this.table.options.persistenceWriterFunc
                ? (this.writeFunc = this.table.options.persistenceWriterFunc)
                : this.readers[this.table.options.persistenceWriterFunc]
                ? (this.writeFunc =
                    this.readers[this.table.options.persistenceWriterFunc])
                : console.warn(
                    "Persistence Write Error - invalid reader set",
                    this.table.options.persistenceWriterFunc,
                  )
              : this.writers[this.mode]
              ? (this.writeFunc = this.writers[this.mode])
              : console.warn(
                  "Persistence Write Error - invalid writer set",
                  this.mode,
                ),
            (this.id =
              "tabulator-" +
              (o || this.table.element.getAttribute("id") || "")),
            (this.config = {
              sort:
                !0 === this.table.options.persistence ||
                this.table.options.persistence.sort,
              filter:
                !0 === this.table.options.persistence ||
                this.table.options.persistence.filter,
              group:
                !0 === this.table.options.persistence ||
                this.table.options.persistence.group,
              page:
                !0 === this.table.options.persistence ||
                this.table.options.persistence.page,
              columns:
                !0 === this.table.options.persistence
                  ? ["title", "width", "visible"]
                  : this.table.options.persistence.columns,
            }),
            this.config.page &&
              (e = this.retreiveData("page")) &&
              (void 0 === e.paginationSize ||
                (!0 !== this.config.page && !this.config.page.size) ||
                (this.table.options.paginationSize = e.paginationSize),
              void 0 === e.paginationInitialPage ||
                (!0 !== this.config.page && !this.config.page.page) ||
                (this.table.options.paginationInitialPage =
                  e.paginationInitialPage)),
            this.config.group &&
              (e = this.retreiveData("group")) &&
              (void 0 === e.groupBy ||
                (!0 !== this.config.group && !this.config.group.groupBy) ||
                (this.table.options.groupBy = e.groupBy),
              void 0 === e.groupStartOpen ||
                (!0 !== this.config.group &&
                  !this.config.group.groupStartOpen) ||
                (this.table.options.groupStartOpen = e.groupStartOpen),
              void 0 === e.groupHeader ||
                (!0 !== this.config.group && !this.config.group.groupHeader) ||
                (this.table.options.groupHeader = e.groupHeader)),
            this.config.columns &&
              (this.table.options.columns = this.load(
                "columns",
                this.table.options.columns,
              ));
        }),
        (X.prototype.initializeColumn = function (e) {
          var t,
            o = this;
          this.config.columns &&
            ((this.defWatcherBlock = !0),
            (t = e.getDefinition()),
            (!0 === this.config.columns
              ? Object.keys(t)
              : this.config.columns
            ).forEach(function (e) {
              var i = Object.getOwnPropertyDescriptor(t, e),
                n = t[e];
              i &&
                Object.defineProperty(t, e, {
                  set: function (e) {
                    (n = e),
                      o.defWatcherBlock || o.save("columns"),
                      i.set && i.set(e);
                  },
                  get: function () {
                    return i.get && i.get(), n;
                  },
                });
            }),
            (this.defWatcherBlock = !1));
        }),
        (X.prototype.load = function (e, t) {
          var o = this.retreiveData(e);
          return t && (o = o ? this.mergeDefinition(t, o) : t), o;
        }),
        (X.prototype.retreiveData = function (e) {
          return !!this.readFunc && this.readFunc(this.id, e);
        }),
        (X.prototype.mergeDefinition = function (e, t) {
          var o = this,
            i = [];
          return (
            (t = t || []).forEach(function (t, n) {
              var r,
                a = o._findColumn(e, t);
              a &&
                (!0 === o.config.columns || null == o.config.columns
                  ? (r = Object.keys(a)).push("width")
                  : (r = o.config.columns),
                r.forEach(function (e) {
                  "columns" !== e && void 0 !== t[e] && (a[e] = t[e]);
                }),
                a.columns &&
                  (a.columns = o.mergeDefinition(a.columns, t.columns)),
                i.push(a));
            }),
            e.forEach(function (e, n) {
              o._findColumn(t, e) ||
                (i.length > n ? i.splice(n, 0, e) : i.push(e));
            }),
            i
          );
        }),
        (X.prototype._findColumn = function (e, t) {
          var o = t.columns ? "group" : t.field ? "field" : "object";
          return e.find(function (e) {
            switch (o) {
              case "group":
                return (
                  e.title === t.title && e.columns.length === t.columns.length
                );
              case "field":
                return e.field === t.field;
              case "object":
                return e === t;
            }
          });
        }),
        (X.prototype.save = function (e) {
          var t = {};
          switch (e) {
            case "columns":
              t = this.parseColumns(this.table.columnManager.getColumns());
              break;
            case "filter":
              t = this.table.modules.filter.getFilters();
              break;
            case "sort":
              t = this.validateSorters(this.table.modules.sort.getSort());
              break;
            case "group":
              t = this.getGroupConfig();
              break;
            case "page":
              t = this.getPageConfig();
          }
          this.writeFunc && this.writeFunc(this.id, e, t);
        }),
        (X.prototype.validateSorters = function (e) {
          return (
            e.forEach(function (e) {
              (e.column = e.field), delete e.field;
            }),
            e
          );
        }),
        (X.prototype.getGroupConfig = function () {
          var e = {};
          return (
            this.config.group &&
              ((!0 === this.config.group || this.config.group.groupBy) &&
                (e.groupBy = this.table.options.groupBy),
              (!0 === this.config.group || this.config.group.groupStartOpen) &&
                (e.groupStartOpen = this.table.options.groupStartOpen),
              (!0 === this.config.group || this.config.group.groupHeader) &&
                (e.groupHeader = this.table.options.groupHeader)),
            e
          );
        }),
        (X.prototype.getPageConfig = function () {
          var e = {};
          return (
            this.config.page &&
              ((!0 === this.config.page || this.config.page.size) &&
                (e.paginationSize = this.table.modules.page.getPageSize()),
              (!0 === this.config.page || this.config.page.page) &&
                (e.paginationInitialPage = this.table.modules.page.getPage())),
            e
          );
        }),
        (X.prototype.parseColumns = function (e) {
          var t = this,
            o = [],
            i = ["headerContextMenu", "headerMenu", "contextMenu", "clickMenu"];
          return (
            e.forEach(function (e) {
              var n,
                r = {},
                a = e.getDefinition();
              e.isGroup
                ? ((r.title = a.title),
                  (r.columns = t.parseColumns(e.getColumns())))
                : ((r.field = e.getField()),
                  !0 === t.config.columns || null == t.config.columns
                    ? (n = Object.keys(a)).push("width")
                    : (n = t.config.columns),
                  n.forEach(function (t) {
                    switch (t) {
                      case "width":
                        r.width = e.getWidth();
                        break;
                      case "visible":
                        r.visible = e.visible;
                        break;
                      default:
                        "function" != typeof a[t] &&
                          -1 === i.indexOf(t) &&
                          (r[t] = a[t]);
                    }
                  })),
                o.push(r);
            }),
            o
          );
        }),
        (X.prototype.readers = {
          local: function (e, t) {
            var o = localStorage.getItem(e + "-" + t);
            return !!o && JSON.parse(o);
          },
          cookie: function (e, t) {
            var o,
              i,
              n = document.cookie,
              r = e + "-" + t,
              a = n.indexOf(r + "=");
            return (
              a > -1 &&
                ((n = n.substr(a)),
                (o = n.indexOf(";")) > -1 && (n = n.substr(0, o)),
                (i = n.replace(r + "=", ""))),
              !!i && JSON.parse(i)
            );
          },
        }),
        (X.prototype.writers = {
          local: function (e, t, o) {
            localStorage.setItem(e + "-" + t, JSON.stringify(o));
          },
          cookie: function (e, t, o) {
            var i = new Date();
            i.setDate(i.getDate() + 1e4),
              (document.cookie =
                e +
                "-" +
                t +
                "=" +
                JSON.stringify(o) +
                "; expires=" +
                i.toUTCString());
          },
        }),
        g.prototype.registerModule("persistence", X);
      var Y = function (e) {
        (this.table = e), (this.element = !1), (this.manualBlock = !1);
      };
      (Y.prototype.initialize = function () {
        window.addEventListener("beforeprint", this.replaceTable.bind(this)),
          window.addEventListener("afterprint", this.cleanup.bind(this));
      }),
        (Y.prototype.replaceTable = function () {
          this.manualBlock ||
            ((this.element = document.createElement("div")),
            this.element.classList.add("tabulator-print-table"),
            this.element.appendChild(
              this.table.modules.export.genereateTable(
                this.table.options.printConfig,
                this.table.options.printStyled,
                this.table.options.printRowRange,
                "print",
              ),
            ),
            (this.table.element.style.display = "none"),
            this.table.element.parentNode.insertBefore(
              this.element,
              this.table.element,
            ));
        }),
        (Y.prototype.cleanup = function () {
          document.body.classList.remove("tabulator-print-fullscreen-hide"),
            this.element &&
              this.element.parentNode &&
              (this.element.parentNode.removeChild(this.element),
              (this.table.element.style.display = ""));
        }),
        (Y.prototype.printFullscreen = function (e, t, o) {
          var i,
            n,
            r = window.scrollX,
            a = window.scrollY,
            s = document.createElement("div"),
            l = document.createElement("div"),
            c = this.table.modules.export.genereateTable(
              void 0 !== o ? o : this.table.options.printConfig,
              void 0 !== t ? t : this.table.options.printStyled,
              e,
              "print",
            );
          (this.manualBlock = !0),
            (this.element = document.createElement("div")),
            this.element.classList.add("tabulator-print-fullscreen"),
            this.table.options.printHeader &&
              (s.classList.add("tabulator-print-header"),
              "string" ==
              typeof (i =
                "function" == typeof this.table.options.printHeader
                  ? this.table.options.printHeader.call(this.table)
                  : this.table.options.printHeader)
                ? (s.innerHTML = i)
                : s.appendChild(i),
              this.element.appendChild(s)),
            this.element.appendChild(c),
            this.table.options.printFooter &&
              (l.classList.add("tabulator-print-footer"),
              "string" ==
              typeof (n =
                "function" == typeof this.table.options.printFooter
                  ? this.table.options.printFooter.call(this.table)
                  : this.table.options.printFooter)
                ? (l.innerHTML = n)
                : l.appendChild(n),
              this.element.appendChild(l)),
            document.body.classList.add("tabulator-print-fullscreen-hide"),
            document.body.appendChild(this.element),
            this.table.options.printFormatter &&
              this.table.options.printFormatter(this.element, c),
            window.print(),
            this.cleanup(),
            window.scrollTo(r, a),
            (this.manualBlock = !1);
        }),
        g.prototype.registerModule("print", Y);
      var q = function (e) {
        (this.table = e),
          (this.data = !1),
          (this.blocked = !1),
          (this.origFuncs = {}),
          (this.currentVersion = 0);
      };
      (q.prototype.watchData = function (e) {
        var t,
          o = this;
        this.currentVersion++,
          (t = this.currentVersion),
          o.unwatchData(),
          (o.data = e),
          (o.origFuncs.push = e.push),
          Object.defineProperty(o.data, "push", {
            enumerable: !1,
            configurable: !0,
            value: function () {
              var i = Array.from(arguments);
              return (
                o.blocked ||
                  t !== o.currentVersion ||
                  i.forEach(function (e) {
                    o.table.rowManager.addRowActual(e, !1);
                  }),
                o.origFuncs.push.apply(e, arguments)
              );
            },
          }),
          (o.origFuncs.unshift = e.unshift),
          Object.defineProperty(o.data, "unshift", {
            enumerable: !1,
            configurable: !0,
            value: function () {
              var i = Array.from(arguments);
              return (
                o.blocked ||
                  t !== o.currentVersion ||
                  i.forEach(function (e) {
                    o.table.rowManager.addRowActual(e, !0);
                  }),
                o.origFuncs.unshift.apply(e, arguments)
              );
            },
          }),
          (o.origFuncs.shift = e.shift),
          Object.defineProperty(o.data, "shift", {
            enumerable: !1,
            configurable: !0,
            value: function () {
              var i;
              return (
                o.blocked ||
                  t !== o.currentVersion ||
                  (o.data.length &&
                    (i = o.table.rowManager.getRowFromDataObject(o.data[0])) &&
                    i.deleteActual()),
                o.origFuncs.shift.call(e)
              );
            },
          }),
          (o.origFuncs.pop = e.pop),
          Object.defineProperty(o.data, "pop", {
            enumerable: !1,
            configurable: !0,
            value: function () {
              var i;
              return (
                o.blocked ||
                  t !== o.currentVersion ||
                  (o.data.length &&
                    (i = o.table.rowManager.getRowFromDataObject(
                      o.data[o.data.length - 1],
                    )) &&
                    i.deleteActual()),
                o.origFuncs.pop.call(e)
              );
            },
          }),
          (o.origFuncs.splice = e.splice),
          Object.defineProperty(o.data, "splice", {
            enumerable: !1,
            configurable: !0,
            value: function () {
              var i,
                n = Array.from(arguments),
                r = n[0] < 0 ? e.length + n[0] : n[0],
                a = n[1],
                s = !!n[2] && n.slice(2);
              if (!o.blocked && t === o.currentVersion) {
                if (
                  (s &&
                    ((i =
                      !!e[r] && o.table.rowManager.getRowFromDataObject(e[r]))
                      ? s.forEach(function (e) {
                          o.table.rowManager.addRowActual(e, !0, i, !0);
                        })
                      : (s = s.slice().reverse()).forEach(function (e) {
                          o.table.rowManager.addRowActual(e, !0, !1, !0);
                        })),
                  0 !== a)
                ) {
                  var l = e.slice(r, void 0 === n[1] ? n[1] : r + a);
                  l.forEach(function (e, t) {
                    var i = o.table.rowManager.getRowFromDataObject(e);
                    i && i.deleteActual(t !== l.length - 1);
                  });
                }
                (s || 0 !== a) && o.table.rowManager.reRenderInPosition();
              }
              return o.origFuncs.splice.apply(e, arguments);
            },
          });
      }),
        (q.prototype.unwatchData = function () {
          if (!1 !== this.data)
            for (var e in this.origFuncs)
              Object.defineProperty(this.data, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: this.origFuncs.key,
              });
        }),
        (q.prototype.watchRow = function (e) {
          var t = e.getData();
          for (var o in ((this.blocked = !0), t)) this.watchKey(e, t, o);
          this.table.options.dataTree && this.watchTreeChildren(e),
            (this.blocked = !1);
        }),
        (q.prototype.watchTreeChildren = function (e) {
          var t = this,
            o = e.getData()[this.table.options.dataTreeChildField],
            i = {};
          function n() {
            t.table.modules.dataTree.initializeRow(e),
              t.table.modules.dataTree.layoutRow(e),
              t.table.rowManager.refreshActiveData("tree", !1, !0);
          }
          o &&
            ((i.push = o.push),
            Object.defineProperty(o, "push", {
              enumerable: !1,
              configurable: !0,
              value: function () {
                var e = i.push.apply(o, arguments);
                return n(), e;
              },
            }),
            (i.unshift = o.unshift),
            Object.defineProperty(o, "unshift", {
              enumerable: !1,
              configurable: !0,
              value: function () {
                var e = i.unshift.apply(o, arguments);
                return n(), e;
              },
            }),
            (i.shift = o.shift),
            Object.defineProperty(o, "shift", {
              enumerable: !1,
              configurable: !0,
              value: function () {
                var e = i.shift.call(o);
                return n(), e;
              },
            }),
            (i.pop = o.pop),
            Object.defineProperty(o, "pop", {
              enumerable: !1,
              configurable: !0,
              value: function () {
                var e = i.pop.call(o);
                return n(), e;
              },
            }),
            (i.splice = o.splice),
            Object.defineProperty(o, "splice", {
              enumerable: !1,
              configurable: !0,
              value: function () {
                var e = i.splice.apply(o, arguments);
                return n(), e;
              },
            }));
        }),
        (q.prototype.watchKey = function (e, t, o) {
          var i = this,
            n = Object.getOwnPropertyDescriptor(t, o),
            r = t[o],
            a = this.currentVersion;
          Object.defineProperty(t, o, {
            set: function (t) {
              if (((r = t), !i.blocked && a === i.currentVersion)) {
                var s = {};
                (s[o] = t), e.updateData(s);
              }
              n.set && n.set(t);
            },
            get: function () {
              return n.get && n.get(), r;
            },
          });
        }),
        (q.prototype.unwatchRow = function (e) {
          var t = e.getData();
          for (var o in t) Object.defineProperty(t, o, { value: t[o] });
        }),
        (q.prototype.block = function () {
          this.blocked = !0;
        }),
        (q.prototype.unblock = function () {
          this.blocked = !1;
        }),
        g.prototype.registerModule("reactiveData", q);
      var K = function (e) {
        (this.table = e),
          (this.startColumn = !1),
          (this.startX = !1),
          (this.startWidth = !1),
          (this.handle = null),
          (this.prevHandle = null);
      };
      (K.prototype.initializeColumn = function (e, t, o) {
        var i = this,
          n = !1,
          r = this.table.options.resizableColumns;
        if (
          ("header" === e &&
            ((n =
              "textarea" == t.definition.formatter ||
              t.definition.variableHeight),
            (t.modules.resize = { variableHeight: n })),
          !0 === r || r == e)
        ) {
          var a = document.createElement("div");
          a.className = "tabulator-col-resize-handle";
          var s = document.createElement("div");
          (s.className = "tabulator-col-resize-handle prev"),
            a.addEventListener("click", function (e) {
              e.stopPropagation();
            });
          var l = function (e) {
            var o = t.getLastColumn();
            o &&
              i._checkResizability(o) &&
              ((i.startColumn = t), i._mouseDown(e, o, a));
          };
          a.addEventListener("mousedown", l),
            a.addEventListener("touchstart", l, { passive: !0 }),
            a.addEventListener("dblclick", function (e) {
              var o = t.getLastColumn();
              o &&
                i._checkResizability(o) &&
                (e.stopPropagation(), o.reinitializeWidth(!0));
            }),
            s.addEventListener("click", function (e) {
              e.stopPropagation();
            });
          var c = function (e) {
            var o, n, r;
            (o = t.getFirstColumn()) &&
              (r =
                (n = i.table.columnManager.findColumnIndex(o)) > 0 &&
                i.table.columnManager.getColumnByIndex(n - 1)) &&
              i._checkResizability(r) &&
              ((i.startColumn = t), i._mouseDown(e, r, s));
          };
          s.addEventListener("mousedown", c),
            s.addEventListener("touchstart", c, { passive: !0 }),
            s.addEventListener("dblclick", function (e) {
              var o, n, r;
              (o = t.getFirstColumn()) &&
                (r =
                  (n = i.table.columnManager.findColumnIndex(o)) > 0 &&
                  i.table.columnManager.getColumnByIndex(n - 1)) &&
                i._checkResizability(r) &&
                (e.stopPropagation(), r.reinitializeWidth(!0));
            }),
            o.appendChild(a),
            o.appendChild(s);
        }
      }),
        (K.prototype._checkResizability = function (e) {
          return void 0 !== e.definition.resizable
            ? e.definition.resizable
            : this.table.options.resizableColumns;
        }),
        (K.prototype._mouseDown = function (e, t, o) {
          var i = this;
          function n(e) {
            i.table.rtl
              ? t.setWidth(
                  i.startWidth -
                    ((void 0 === e.screenX ? e.touches[0].screenX : e.screenX) -
                      i.startX),
                )
              : t.setWidth(
                  i.startWidth +
                    ((void 0 === e.screenX ? e.touches[0].screenX : e.screenX) -
                      i.startX),
                ),
              i.table.options.virtualDomHoz && i.table.vdomHoz.reinitialize(!0),
              !i.table.browserSlow &&
                t.modules.resize &&
                t.modules.resize.variableHeight &&
                t.checkCellHeights();
          }
          function r(e) {
            i.startColumn.modules.edit &&
              (i.startColumn.modules.edit.blocked = !1),
              i.table.browserSlow &&
                t.modules.resize &&
                t.modules.resize.variableHeight &&
                t.checkCellHeights(),
              document.body.removeEventListener("mouseup", r),
              document.body.removeEventListener("mousemove", n),
              o.removeEventListener("touchmove", n),
              o.removeEventListener("touchend", r),
              i.table.element.classList.remove("tabulator-block-select"),
              i.table.options.persistence &&
                i.table.modExists("persistence", !0) &&
                i.table.modules.persistence.config.columns &&
                i.table.modules.persistence.save("columns"),
              i.table.options.columnResized.call(i.table, t.getComponent());
          }
          i.table.element.classList.add("tabulator-block-select"),
            e.stopPropagation(),
            i.startColumn.modules.edit &&
              (i.startColumn.modules.edit.blocked = !0),
            (i.startX =
              void 0 === e.screenX ? e.touches[0].screenX : e.screenX),
            (i.startWidth = t.getWidth()),
            document.body.addEventListener("mousemove", n),
            document.body.addEventListener("mouseup", r),
            o.addEventListener("touchmove", n, { passive: !0 }),
            o.addEventListener("touchend", r);
        }),
        g.prototype.registerModule("resizeColumns", K);
      var J = function (e) {
        (this.table = e),
          (this.startColumn = !1),
          (this.startY = !1),
          (this.startHeight = !1),
          (this.handle = null),
          (this.prevHandle = null);
      };
      (J.prototype.initializeRow = function (e) {
        var t = this,
          o = e.getElement(),
          i = document.createElement("div");
        i.className = "tabulator-row-resize-handle";
        var n = document.createElement("div");
        (n.className = "tabulator-row-resize-handle prev"),
          i.addEventListener("click", function (e) {
            e.stopPropagation();
          });
        var r = function (o) {
          (t.startRow = e), t._mouseDown(o, e, i);
        };
        i.addEventListener("mousedown", r),
          i.addEventListener("touchstart", r, { passive: !0 }),
          n.addEventListener("click", function (e) {
            e.stopPropagation();
          });
        var a = function (o) {
          var i = t.table.rowManager.prevDisplayRow(e);
          i && ((t.startRow = i), t._mouseDown(o, i, n));
        };
        n.addEventListener("mousedown", a),
          n.addEventListener("touchstart", a, { passive: !0 }),
          o.appendChild(i),
          o.appendChild(n);
      }),
        (J.prototype._mouseDown = function (e, t, o) {
          var i = this;
          function n(e) {
            t.setHeight(
              i.startHeight +
                ((void 0 === e.screenY ? e.touches[0].screenY : e.screenY) -
                  i.startY),
            );
          }
          function r(e) {
            document.body.removeEventListener("mouseup", n),
              document.body.removeEventListener("mousemove", n),
              o.removeEventListener("touchmove", n),
              o.removeEventListener("touchend", r),
              i.table.element.classList.remove("tabulator-block-select"),
              i.table.options.rowResized.call(this.table, t.getComponent());
          }
          i.table.element.classList.add("tabulator-block-select"),
            e.stopPropagation(),
            (i.startY =
              void 0 === e.screenY ? e.touches[0].screenY : e.screenY),
            (i.startHeight = t.getHeight()),
            document.body.addEventListener("mousemove", n),
            document.body.addEventListener("mouseup", r),
            o.addEventListener("touchmove", n, { passive: !0 }),
            o.addEventListener("touchend", r);
        }),
        g.prototype.registerModule("resizeRows", J);
      var Z = function (e) {
        (this.table = e),
          (this.binding = !1),
          (this.observer = !1),
          (this.containerObserver = !1),
          (this.tableHeight = 0),
          (this.tableWidth = 0),
          (this.containerHeight = 0),
          (this.containerWidth = 0),
          (this.autoResize = !1);
      };
      (Z.prototype.initialize = function (e) {
        var t,
          o = this,
          i = this.table;
        (this.tableHeight = i.element.clientHeight),
          (this.tableWidth = i.element.clientWidth),
          i.element.parentNode &&
            ((this.containerHeight = i.element.parentNode.clientHeight),
            (this.containerWidth = i.element.parentNode.clientWidth)),
          "undefined" != typeof ResizeObserver &&
          "virtual" === i.rowManager.getRenderMode()
            ? ((this.autoResize = !0),
              (this.observer = new ResizeObserver(function (e) {
                if (
                  !i.browserMobile ||
                  (i.browserMobile && !i.modules.edit.currentCell)
                ) {
                  var t = Math.floor(e[0].contentRect.height),
                    n = Math.floor(e[0].contentRect.width);
                  (o.tableHeight == t && o.tableWidth == n) ||
                    ((o.tableHeight = t),
                    (o.tableWidth = n),
                    i.element.parentNode &&
                      ((o.containerHeight = i.element.parentNode.clientHeight),
                      (o.containerWidth = i.element.parentNode.clientWidth)),
                    i.options.virtualDomHoz && i.vdomHoz.reinitialize(!0),
                    i.redraw());
                }
              })),
              this.observer.observe(i.element),
              (t = window.getComputedStyle(i.element)),
              this.table.element.parentNode &&
                !this.table.rowManager.fixedHeight &&
                (t.getPropertyValue("max-height") ||
                  t.getPropertyValue("min-height")) &&
                ((this.containerObserver = new ResizeObserver(function (e) {
                  if (
                    !i.browserMobile ||
                    (i.browserMobile && !i.modules.edit.currentCell)
                  ) {
                    var t = Math.floor(e[0].contentRect.height),
                      n = Math.floor(e[0].contentRect.width);
                    (o.containerHeight == t && o.containerWidth == n) ||
                      ((o.containerHeight = t),
                      (o.containerWidth = n),
                      (o.tableHeight = i.element.clientHeight),
                      (o.tableWidth = i.element.clientWidth)),
                      i.options.virtualDomHoz && i.vdomHoz.reinitialize(!0),
                      i.redraw();
                  }
                })),
                this.containerObserver.observe(this.table.element.parentNode)))
            : ((this.binding = function () {
                (!i.browserMobile ||
                  (i.browserMobile && !i.modules.edit.currentCell)) &&
                  (i.options.virtualDomHoz && i.vdomHoz.reinitialize(!0),
                  i.redraw());
              }),
              window.addEventListener("resize", this.binding));
      }),
        (Z.prototype.clearBindings = function (e) {
          this.binding && window.removeEventListener("resize", this.binding),
            this.observer && this.observer.unobserve(this.table.element),
            this.containerObserver &&
              this.containerObserver.unobserve(this.table.element.parentNode);
        }),
        g.prototype.registerModule("resizeTable", Z);
      var $ = function (e) {
        (this.table = e),
          (this.columns = []),
          (this.hiddenColumns = []),
          (this.mode = ""),
          (this.index = 0),
          (this.collapseFormatter = []),
          (this.collapseStartOpen = !0),
          (this.collapseHandleColumn = !1);
      };
      ($.prototype.initialize = function () {
        var e = this,
          t = [];
        (this.mode = this.table.options.responsiveLayout),
          (this.collapseFormatter =
            this.table.options.responsiveLayoutCollapseFormatter ||
            this.formatCollapsedData),
          (this.collapseStartOpen =
            this.table.options.responsiveLayoutCollapseStartOpen),
          (this.hiddenColumns = []),
          this.table.columnManager.columnsByIndex.forEach(function (o, i) {
            o.modules.responsive &&
              o.modules.responsive.order &&
              o.modules.responsive.visible &&
              ((o.modules.responsive.index = i),
              t.push(o),
              o.visible || "collapse" !== e.mode || e.hiddenColumns.push(o));
          }),
          (t = (t = t.reverse()).sort(function (e, t) {
            return (
              t.modules.responsive.order - e.modules.responsive.order ||
              t.modules.responsive.index - e.modules.responsive.index
            );
          })),
          (this.columns = t),
          "collapse" === this.mode && this.generateCollapsedContent();
        var o = this.table.columnManager.columnsByIndex,
          i = Array.isArray(o),
          n = 0;
        for (o = i ? o : o[Symbol.iterator](); ; ) {
          var r;
          if (i) {
            if (n >= o.length) break;
            r = o[n++];
          } else {
            if ((n = o.next()).done) break;
            r = n.value;
          }
          var a = r;
          if ("responsiveCollapse" == a.definition.formatter) {
            this.collapseHandleColumn = a;
            break;
          }
        }
        this.collapseHandleColumn &&
          (this.hiddenColumns.length
            ? this.collapseHandleColumn.show()
            : this.collapseHandleColumn.hide());
      }),
        ($.prototype.initializeColumn = function (e) {
          var t = e.getDefinition();
          e.modules.responsive = {
            order: void 0 === t.responsive ? 1 : t.responsive,
            visible: !1 !== t.visible,
          };
        }),
        ($.prototype.initializeRow = function (e) {
          var t;
          "calc" !== e.type &&
            ((t = document.createElement("div")).classList.add(
              "tabulator-responsive-collapse",
            ),
            (e.modules.responsiveLayout = {
              element: t,
              open: this.collapseStartOpen,
            }),
            this.collapseStartOpen || (t.style.display = "none"));
        }),
        ($.prototype.layoutRow = function (e) {
          var t = e.getElement();
          e.modules.responsiveLayout &&
            (t.appendChild(e.modules.responsiveLayout.element),
            this.generateCollapsedRowContent(e));
        }),
        ($.prototype.updateColumnVisibility = function (e, t) {
          e.modules.responsive &&
            ((e.modules.responsive.visible = t), this.initialize());
        }),
        ($.prototype.hideColumn = function (e) {
          var t = this.hiddenColumns.length;
          e.hide(!1, !0),
            "collapse" === this.mode &&
              (this.hiddenColumns.unshift(e),
              this.generateCollapsedContent(),
              this.collapseHandleColumn &&
                !t &&
                this.collapseHandleColumn.show());
        }),
        ($.prototype.showColumn = function (e) {
          var t;
          e.show(!1, !0),
            e.setWidth(e.getWidth()),
            "collapse" === this.mode &&
              ((t = this.hiddenColumns.indexOf(e)) > -1 &&
                this.hiddenColumns.splice(t, 1),
              this.generateCollapsedContent(),
              this.collapseHandleColumn &&
                !this.hiddenColumns.length &&
                this.collapseHandleColumn.hide());
        }),
        ($.prototype.update = function () {
          for (var e = this, t = !0; t; ) {
            var o =
                "fitColumns" == e.table.modules.layout.getMode()
                  ? e.table.columnManager.getFlexBaseWidth()
                  : e.table.columnManager.getWidth(),
              i =
                (e.table.options.headerVisible
                  ? e.table.columnManager.element.clientWidth
                  : e.table.element.clientWidth) - o;
            if (i < 0) {
              var n = e.columns[e.index];
              n ? (e.hideColumn(n), e.index++) : (t = !1);
            } else {
              var r = e.columns[e.index - 1];
              r && i > 0 && i >= r.getWidth()
                ? (e.showColumn(r), e.index--)
                : (t = !1);
            }
            e.table.rowManager.activeRowsCount ||
              e.table.rowManager.renderEmptyScroll();
          }
        }),
        ($.prototype.generateCollapsedContent = function () {
          var e = this;
          this.table.rowManager.getDisplayRows().forEach(function (t) {
            e.generateCollapsedRowContent(t);
          });
        }),
        ($.prototype.generateCollapsedRowContent = function (e) {
          var t, o;
          if (e.modules.responsiveLayout) {
            for (t = e.modules.responsiveLayout.element; t.firstChild; )
              t.removeChild(t.firstChild);
            (o = this.collapseFormatter(this.generateCollapsedRowData(e))) &&
              t.appendChild(o);
          }
        }),
        ($.prototype.generateCollapsedRowData = function (e) {
          var t,
            o = this,
            i = e.getData(),
            n = [];
          return (
            this.hiddenColumns.forEach(function (r) {
              var a = r.getFieldValue(i);
              r.definition.title &&
                r.field &&
                (r.modules.format &&
                o.table.options.responsiveLayoutCollapseUseFormatters
                  ? ((t = {
                      value: !1,
                      data: {},
                      getValue: function () {
                        return a;
                      },
                      getData: function () {
                        return i;
                      },
                      getElement: function () {
                        return document.createElement("div");
                      },
                      getRow: function () {
                        return e.getComponent();
                      },
                      getColumn: function () {
                        return r.getComponent();
                      },
                    }),
                    n.push({
                      field: r.field,
                      title: r.definition.title,
                      value: r.modules.format.formatter.call(
                        o.table.modules.format,
                        t,
                        r.modules.format.params,
                      ),
                    }))
                  : n.push({
                      field: r.field,
                      title: r.definition.title,
                      value: a,
                    }));
            }),
            n
          );
        }),
        ($.prototype.formatCollapsedData = function (e) {
          var t = document.createElement("table");
          return (
            e.forEach(function (e) {
              var o,
                i = document.createElement("tr"),
                n = document.createElement("td"),
                r = document.createElement("td"),
                a = document.createElement("strong");
              n.appendChild(a),
                this.table.modules.localize.bind(
                  "columns|" + e.field,
                  function (t) {
                    a.innerText = t || e.title;
                  },
                ),
                e.value instanceof Node
                  ? ((o = document.createElement("div")).appendChild(e.value),
                    r.appendChild(o))
                  : (r.innerHTML = e.value),
                i.appendChild(n),
                i.appendChild(r),
                t.appendChild(i);
            }, this),
            Object.keys(e).length ? t : ""
          );
        }),
        g.prototype.registerModule("responsiveLayout", $);
      var Q = function (e) {
        (this.table = e),
          (this.selecting = !1),
          (this.lastClickedRow = !1),
          (this.selectPrev = []),
          (this.selectedRows = []),
          (this.headerCheckboxElement = null);
      };
      (Q.prototype.clearSelectionData = function (e) {
        (this.selecting = !1),
          (this.lastClickedRow = !1),
          (this.selectPrev = []),
          (this.selectedRows = []),
          e || this._rowSelectionChanged();
      }),
        (Q.prototype.initializeRow = function (e) {
          var t = this,
            o = e.getElement(),
            i = function e() {
              setTimeout(function () {
                t.selecting = !1;
              }, 50),
                document.body.removeEventListener("mouseup", e);
            };
          (e.modules.select = { selected: !1 }),
            t.table.options.selectableCheck.call(this.table, e.getComponent())
              ? (o.classList.add("tabulator-selectable"),
                o.classList.remove("tabulator-unselectable"),
                t.table.options.selectable &&
                  "highlight" != t.table.options.selectable &&
                  ("click" === t.table.options.selectableRangeMode
                    ? o.addEventListener("click", function (o) {
                        if (o.shiftKey) {
                          t.table._clearSelection(),
                            (t.lastClickedRow = t.lastClickedRow || e);
                          var i = t.table.rowManager.getDisplayRowIndex(
                              t.lastClickedRow,
                            ),
                            n = t.table.rowManager.getDisplayRowIndex(e),
                            r = i <= n ? i : n,
                            a = i >= n ? i : n,
                            s = t.table.rowManager
                              .getDisplayRows()
                              .slice(0)
                              .splice(r, a - r + 1);
                          o.ctrlKey || o.metaKey
                            ? (s.forEach(function (o) {
                                o !== t.lastClickedRow &&
                                  (!0 === t.table.options.selectable ||
                                    t.isRowSelected(e) ||
                                    t.selectedRows.length <
                                      t.table.options.selectable) &&
                                  t.toggleRow(o);
                              }),
                              (t.lastClickedRow = e))
                            : (t.deselectRows(void 0, !0),
                              !0 !== t.table.options.selectable &&
                                s.length > t.table.options.selectable &&
                                (s = s.slice(0, t.table.options.selectable)),
                              t.selectRows(s)),
                            t.table._clearSelection();
                        } else
                          o.ctrlKey || o.metaKey
                            ? (t.toggleRow(e), (t.lastClickedRow = e))
                            : (t.deselectRows(void 0, !0),
                              t.selectRows(e),
                              (t.lastClickedRow = e));
                      })
                    : (o.addEventListener("click", function (o) {
                        (t.table.modExists("edit") &&
                          t.table.modules.edit.getCurrentCell()) ||
                          t.table._clearSelection(),
                          t.selecting || t.toggleRow(e);
                      }),
                      o.addEventListener("mousedown", function (o) {
                        if (o.shiftKey)
                          return (
                            t.table._clearSelection(),
                            (t.selecting = !0),
                            (t.selectPrev = []),
                            document.body.addEventListener("mouseup", i),
                            document.body.addEventListener("keyup", i),
                            t.toggleRow(e),
                            !1
                          );
                      }),
                      o.addEventListener("mouseenter", function (o) {
                        t.selecting &&
                          (t.table._clearSelection(),
                          t.toggleRow(e),
                          t.selectPrev[1] == e && t.toggleRow(t.selectPrev[0]));
                      }),
                      o.addEventListener("mouseout", function (o) {
                        t.selecting &&
                          (t.table._clearSelection(), t.selectPrev.unshift(e));
                      }))))
              : (o.classList.add("tabulator-unselectable"),
                o.classList.remove("tabulator-selectable"));
        }),
        (Q.prototype.toggleRow = function (e) {
          this.table.options.selectableCheck.call(
            this.table,
            e.getComponent(),
          ) &&
            (e.modules.select && e.modules.select.selected
              ? this._deselectRow(e)
              : this._selectRow(e));
        }),
        (Q.prototype.selectRows = function (e) {
          var t,
            o = this;
          switch (void 0 === e ? "undefined" : r(e)) {
            case "undefined":
              this.table.rowManager.rows.forEach(function (e) {
                o._selectRow(e, !0, !0);
              }),
                this._rowSelectionChanged();
              break;
            case "string":
              (t = this.table.rowManager.findRow(e))
                ? this._selectRow(t, !0, !0)
                : this.table.rowManager.getRows(e).forEach(function (e) {
                    o._selectRow(e, !0, !0);
                  }),
                this._rowSelectionChanged();
              break;
            default:
              Array.isArray(e)
                ? (e.forEach(function (e) {
                    o._selectRow(e, !0, !0);
                  }),
                  this._rowSelectionChanged())
                : this._selectRow(e, !1, !0);
          }
        }),
        (Q.prototype._selectRow = function (e, t, o) {
          if (
            !isNaN(this.table.options.selectable) &&
            !0 !== this.table.options.selectable &&
            !o &&
            this.selectedRows.length >= this.table.options.selectable
          ) {
            if (!this.table.options.selectableRollingSelection) return !1;
            this._deselectRow(this.selectedRows[0]);
          }
          var i = this.table.rowManager.findRow(e);
          i
            ? -1 == this.selectedRows.indexOf(i) &&
              (i.getElement().classList.add("tabulator-selected"),
              i.modules.select || (i.modules.select = {}),
              (i.modules.select.selected = !0),
              i.modules.select.checkboxEl &&
                (i.modules.select.checkboxEl.checked = !0),
              this.selectedRows.push(i),
              this.table.options.dataTreeSelectPropagate &&
                this.childRowSelection(i, !0),
              t ||
                this.table.options.rowSelected.call(
                  this.table,
                  i.getComponent(),
                ),
              this._rowSelectionChanged(t))
            : t ||
              console.warn(
                "Selection Error - No such row found, ignoring selection:" + e,
              );
        }),
        (Q.prototype.isRowSelected = function (e) {
          return -1 !== this.selectedRows.indexOf(e);
        }),
        (Q.prototype.deselectRows = function (e, t) {
          var o,
            i = this;
          if (void 0 === e) {
            o = i.selectedRows.length;
            for (var n = 0; n < o; n++) i._deselectRow(i.selectedRows[0], !0);
            i._rowSelectionChanged(t);
          } else
            Array.isArray(e)
              ? (e.forEach(function (e) {
                  i._deselectRow(e, !0);
                }),
                i._rowSelectionChanged(t))
              : i._deselectRow(e, t);
        }),
        (Q.prototype._deselectRow = function (e, t) {
          var o,
            i = this,
            n = i.table.rowManager.findRow(e);
          n
            ? (o = i.selectedRows.findIndex(function (e) {
                return e == n;
              })) > -1 &&
              (n.getElement().classList.remove("tabulator-selected"),
              n.modules.select || (n.modules.select = {}),
              (n.modules.select.selected = !1),
              n.modules.select.checkboxEl &&
                (n.modules.select.checkboxEl.checked = !1),
              i.selectedRows.splice(o, 1),
              this.table.options.dataTreeSelectPropagate &&
                this.childRowSelection(n, !1),
              t ||
                i.table.options.rowDeselected.call(
                  this.table,
                  n.getComponent(),
                ),
              i._rowSelectionChanged(t))
            : t ||
              console.warn(
                "Deselection Error - No such row found, ignoring selection:" +
                  e,
              );
        }),
        (Q.prototype.getSelectedData = function () {
          var e = [];
          return (
            this.selectedRows.forEach(function (t) {
              e.push(t.getData());
            }),
            e
          );
        }),
        (Q.prototype.getSelectedRows = function () {
          var e = [];
          return (
            this.selectedRows.forEach(function (t) {
              e.push(t.getComponent());
            }),
            e
          );
        }),
        (Q.prototype._rowSelectionChanged = function (e) {
          this.headerCheckboxElement &&
            (0 === this.selectedRows.length
              ? ((this.headerCheckboxElement.checked = !1),
                (this.headerCheckboxElement.indeterminate = !1))
              : this.table.rowManager.rows.length === this.selectedRows.length
              ? ((this.headerCheckboxElement.checked = !0),
                (this.headerCheckboxElement.indeterminate = !1))
              : ((this.headerCheckboxElement.indeterminate = !0),
                (this.headerCheckboxElement.checked = !1))),
            e ||
              this.table.options.rowSelectionChanged.call(
                this.table,
                this.getSelectedData(),
                this.getSelectedRows(),
              );
        }),
        (Q.prototype.registerRowSelectCheckbox = function (e, t) {
          e._row.modules.select || (e._row.modules.select = {}),
            (e._row.modules.select.checkboxEl = t);
        }),
        (Q.prototype.registerHeaderSelectCheckbox = function (e) {
          this.headerCheckboxElement = e;
        }),
        (Q.prototype.childRowSelection = function (e, t) {
          var o = this.table.modules.dataTree.getChildren(e, !0);
          if (t) {
            var i = o,
              n = Array.isArray(i),
              r = 0;
            for (i = n ? i : i[Symbol.iterator](); ; ) {
              var a;
              if (n) {
                if (r >= i.length) break;
                a = i[r++];
              } else {
                if ((r = i.next()).done) break;
                a = r.value;
              }
              var s = a;
              this._selectRow(s, !0);
            }
          } else {
            var l = o,
              c = Array.isArray(l),
              u = 0;
            for (l = c ? l : l[Symbol.iterator](); ; ) {
              var d;
              if (c) {
                if (u >= l.length) break;
                d = l[u++];
              } else {
                if ((u = l.next()).done) break;
                d = u.value;
              }
              var p = d;
              this._deselectRow(p, !0);
            }
          }
        }),
        g.prototype.registerModule("selectRow", Q);
      var ee = function (e) {
        (this.table = e), (this.sortList = []), (this.changed = !1);
      };
      (ee.prototype.initializeColumn = function (e, t) {
        var o,
          i,
          n = this,
          a = !1;
        switch (r(e.definition.sorter)) {
          case "string":
            n.sorters[e.definition.sorter]
              ? (a = n.sorters[e.definition.sorter])
              : console.warn(
                  "Sort Error - No such sorter found: ",
                  e.definition.sorter,
                );
            break;
          case "function":
            a = e.definition.sorter;
        }
        (e.modules.sort = {
          sorter: a,
          dir: "none",
          params: e.definition.sorterParams || {},
          startingDir: e.definition.headerSortStartingDir || "asc",
          tristate:
            void 0 !== e.definition.headerSortTristate
              ? e.definition.headerSortTristate
              : this.table.options.headerSortTristate,
        }),
          (void 0 === e.definition.headerSort
            ? !1 !== this.table.options.headerSort
            : !1 !== e.definition.headerSort) &&
            ((o = e.getElement()).classList.add("tabulator-sortable"),
            (i = document.createElement("div")).classList.add(
              "tabulator-col-sorter",
            ),
            "object" == r(this.table.options.headerSortElement)
              ? i.appendChild(this.table.options.headerSortElement)
              : (i.innerHTML = this.table.options.headerSortElement),
            t.appendChild(i),
            (e.modules.sort.element = i),
            o.addEventListener("click", function (t) {
              var o = "",
                i = [],
                r = !1;
              if (e.modules.sort) {
                if (e.modules.sort.tristate)
                  o =
                    "none" == e.modules.sort.dir
                      ? e.modules.sort.startingDir
                      : e.modules.sort.dir == e.modules.sort.startingDir
                      ? "asc" == e.modules.sort.dir
                        ? "desc"
                        : "asc"
                      : "none";
                else
                  switch (e.modules.sort.dir) {
                    case "asc":
                      o = "desc";
                      break;
                    case "desc":
                      o = "asc";
                      break;
                    default:
                      o = e.modules.sort.startingDir;
                  }
                n.table.options.columnHeaderSortMulti &&
                (t.shiftKey || t.ctrlKey)
                  ? ((r = (i = n.getSort()).findIndex(function (t) {
                      return t.field === e.getField();
                    })),
                    r > -1
                      ? ((i[r].dir = o),
                        r != i.length - 1 &&
                          ((r = i.splice(r, 1)[0]), "none" != o && i.push(r)))
                      : "none" != o && i.push({ column: e, dir: o }),
                    n.setSort(i))
                  : "none" == o
                  ? n.clear()
                  : n.setSort(e, o),
                  n.table.rowManager.sorterRefresh(!n.sortList.length);
              }
            }));
      }),
        (ee.prototype.hasChanged = function () {
          var e = this.changed;
          return (this.changed = !1), e;
        }),
        (ee.prototype.getSort = function () {
          var e = [];
          return (
            this.sortList.forEach(function (t) {
              t.column &&
                e.push({
                  column: t.column.getComponent(),
                  field: t.column.getField(),
                  dir: t.dir,
                });
            }),
            e
          );
        }),
        (ee.prototype.setSort = function (e, t) {
          var o = this,
            i = [];
          Array.isArray(e) || (e = [{ column: e, dir: t }]),
            e.forEach(function (e) {
              var t;
              (t = o.table.columnManager.findColumn(e.column))
                ? ((e.column = t), i.push(e), (o.changed = !0))
                : console.warn(
                    "Sort Warning - Sort field does not exist and is being ignored: ",
                    e.column,
                  );
            }),
            (o.sortList = i),
            this.table.options.persistence &&
              this.table.modExists("persistence", !0) &&
              this.table.modules.persistence.config.sort &&
              this.table.modules.persistence.save("sort");
        }),
        (ee.prototype.clear = function () {
          this.setSort([]);
        }),
        (ee.prototype.findSorter = function (e) {
          var t,
            o = this.table.rowManager.activeRows[0],
            i = "string";
          if (o && ((o = o.getData()), e.getField()))
            switch (void 0 === (t = e.getFieldValue(o)) ? "undefined" : r(t)) {
              case "undefined":
                i = "string";
                break;
              case "boolean":
                i = "boolean";
                break;
              default:
                isNaN(t) || "" === t
                  ? t.match(/((^[0-9]+[a-z]+)|(^[a-z]+[0-9]+))+$/i) &&
                    (i = "alphanum")
                  : (i = "number");
            }
          return this.sorters[i];
        }),
        (ee.prototype.sort = function (e) {
          var t = this,
            o = this.table.options.sortOrderReverse
              ? t.sortList.slice().reverse()
              : t.sortList,
            i = [],
            n = [];
          t.table.options.dataSorting &&
            t.table.options.dataSorting.call(t.table, t.getSort()),
            t.clearColumnHeaders(),
            t.table.options.ajaxSorting
              ? o.forEach(function (e, o) {
                  t.setColumnHeader(e.column, e.dir);
                })
              : (o.forEach(function (e, o) {
                  var n = e.column.modules.sort;
                  e.column &&
                    n &&
                    (n.sorter || (n.sorter = t.findSorter(e.column)),
                    (e.params =
                      "function" == typeof n.params
                        ? n.params(e.column.getComponent(), e.dir)
                        : n.params),
                    i.push(e)),
                    t.setColumnHeader(e.column, e.dir);
                }),
                i.length && t._sortItems(e, i)),
            t.table.options.dataSorted &&
              (e.forEach(function (e) {
                n.push(e.getComponent());
              }),
              t.table.options.dataSorted.call(t.table, t.getSort(), n));
        }),
        (ee.prototype.clearColumnHeaders = function () {
          this.table.columnManager.getRealColumns().forEach(function (e) {
            e.modules.sort &&
              ((e.modules.sort.dir = "none"),
              e.getElement().setAttribute("aria-sort", "none"));
          });
        }),
        (ee.prototype.setColumnHeader = function (e, t) {
          (e.modules.sort.dir = t), e.getElement().setAttribute("aria-sort", t);
        }),
        (ee.prototype._sortItems = function (e, t) {
          var o = this,
            i = t.length - 1;
          e.sort(function (e, n) {
            for (var r, a = i; a >= 0; a--) {
              var s = t[a];
              if (0 !== (r = o._sortRow(e, n, s.column, s.dir, s.params)))
                break;
            }
            return r;
          });
        }),
        (ee.prototype._sortRow = function (e, t, o, i, n) {
          var r,
            a,
            s = "asc" == i ? e : t,
            l = "asc" == i ? t : e;
          return (
            (e = void 0 !== (e = o.getFieldValue(s.getData())) ? e : ""),
            (t = void 0 !== (t = o.getFieldValue(l.getData())) ? t : ""),
            (r = s.getComponent()),
            (a = l.getComponent()),
            o.modules.sort.sorter.call(this, e, t, r, a, o.getComponent(), i, n)
          );
        }),
        (ee.prototype.sorters = {
          number: function (e, t, o, i, n, r, a) {
            var s = a.alignEmptyValues,
              l = a.decimalSeparator,
              c = a.thousandSeparator,
              u = 0;
            if (
              ((e = String(e)),
              (t = String(t)),
              c && ((e = e.split(c).join("")), (t = t.split(c).join(""))),
              l && ((e = e.split(l).join(".")), (t = t.split(l).join("."))),
              (e = parseFloat(e)),
              (t = parseFloat(t)),
              isNaN(e))
            )
              u = isNaN(t) ? 0 : -1;
            else {
              if (!isNaN(t)) return e - t;
              u = 1;
            }
            return (
              (("top" === s && "desc" === r) ||
                ("bottom" === s && "asc" === r)) &&
                (u *= -1),
              u
            );
          },
          string: function (e, t, o, i, n, a, s) {
            var l,
              c = s.alignEmptyValues,
              u = 0;
            if (e) {
              if (t) {
                switch (r(s.locale)) {
                  case "boolean":
                    s.locale && (l = this.table.modules.localize.getLocale());
                    break;
                  case "string":
                    l = s.locale;
                }
                return String(e)
                  .toLowerCase()
                  .localeCompare(String(t).toLowerCase(), l);
              }
              u = 1;
            } else u = t ? -1 : 0;
            return (
              (("top" === c && "desc" === a) ||
                ("bottom" === c && "asc" === a)) &&
                (u *= -1),
              u
            );
          },
          date: function (e, t, o, i, n, r, a) {
            return (
              a.format || (a.format = "DD/MM/YYYY"),
              this.sorters.datetime.call(this, e, t, o, i, n, r, a)
            );
          },
          time: function (e, t, o, i, n, r, a) {
            return (
              a.format || (a.format = "HH:mm"),
              this.sorters.datetime.call(this, e, t, o, i, n, r, a)
            );
          },
          datetime: function (e, t, o, i, n, r, a) {
            var s = a.format || "DD/MM/YYYY HH:mm:ss",
              l = a.alignEmptyValues,
              c = 0;
            if ("undefined" != typeof moment) {
              if (((e = moment(e, s)), (t = moment(t, s)), e.isValid())) {
                if (t.isValid()) return e - t;
                c = 1;
              } else c = t.isValid() ? -1 : 0;
              return (
                (("top" === l && "desc" === r) ||
                  ("bottom" === l && "asc" === r)) &&
                  (c *= -1),
                c
              );
            }
            console.error(
              "Sort Error - 'datetime' sorter is dependant on moment.js",
            );
          },
          boolean: function (e, t, o, i, n, r, a) {
            return (
              (!0 === e || "true" === e || "True" === e || 1 === e ? 1 : 0) -
              (!0 === t || "true" === t || "True" === t || 1 === t ? 1 : 0)
            );
          },
          array: function (e, t, o, i, n, r, a) {
            var s = a.type || "length",
              l = a.alignEmptyValues,
              c = 0;
            function u(e) {
              switch (s) {
                case "length":
                  return e.length;
                case "sum":
                  return e.reduce(function (e, t) {
                    return e + t;
                  });
                case "max":
                  return Math.max.apply(null, e);
                case "min":
                  return Math.min.apply(null, e);
                case "avg":
                  return (
                    e.reduce(function (e, t) {
                      return e + t;
                    }) / e.length
                  );
              }
            }
            if (Array.isArray(e)) {
              if (Array.isArray(t)) return (e ? u(e) : 0) - (t ? u(t) : 0);
              l = 1;
            } else l = Array.isArray(t) ? -1 : 0;
            return (
              (("top" === l && "desc" === r) ||
                ("bottom" === l && "asc" === r)) &&
                (c *= -1),
              c
            );
          },
          exists: function (e, t, o, i, n, r, a) {
            return (void 0 === e ? 0 : 1) - (void 0 === t ? 0 : 1);
          },
          alphanum: function (e, t, o, i, n, r, a) {
            var s,
              l,
              c,
              u,
              d,
              p = 0,
              h = /(\d+)|(\D+)/g,
              m = /\d/,
              f = a.alignEmptyValues,
              g = 0;
            if (e || 0 === e) {
              if (t || 0 === t) {
                if (isFinite(e) && isFinite(t)) return e - t;
                if (
                  (s = String(e).toLowerCase()) ===
                  (l = String(t).toLowerCase())
                )
                  return 0;
                if (!m.test(s) || !m.test(l)) return s > l ? 1 : -1;
                for (
                  s = s.match(h),
                    l = l.match(h),
                    d = s.length > l.length ? l.length : s.length;
                  p < d;

                )
                  if ((c = s[p]) !== (u = l[p++]))
                    return isFinite(c) && isFinite(u)
                      ? ("0" === c.charAt(0) && (c = "." + c),
                        "0" === u.charAt(0) && (u = "." + u),
                        c - u)
                      : c > u
                      ? 1
                      : -1;
                return s.length > l.length;
              }
              g = 1;
            } else g = t || 0 === t ? -1 : 0;
            return (
              (("top" === f && "desc" === r) ||
                ("bottom" === f && "asc" === r)) &&
                (g *= -1),
              g
            );
          },
        }),
        g.prototype.registerModule("sort", ee);
      var te = function (e) {
        (this.table = e), (this.invalidCells = []);
      };
      (te.prototype.initializeColumn = function (e) {
        var t,
          o = this,
          i = [];
        e.definition.validator &&
          (Array.isArray(e.definition.validator)
            ? e.definition.validator.forEach(function (e) {
                (t = o._extractValidator(e)) && i.push(t);
              })
            : (t = this._extractValidator(e.definition.validator)) && i.push(t),
          (e.modules.validate = !!i.length && i));
      }),
        (te.prototype._extractValidator = function (e) {
          var t, o, i;
          switch (void 0 === e ? "undefined" : r(e)) {
            case "string":
              return (
                (i = e.indexOf(":")) > -1
                  ? ((t = e.substring(0, i)), (o = e.substring(i + 1)))
                  : (t = e),
                this._buildValidator(t, o)
              );
            case "function":
              return this._buildValidator(e);
            case "object":
              return this._buildValidator(e.type, e.parameters);
          }
        }),
        (te.prototype._buildValidator = function (e, t) {
          var o = "function" == typeof e ? e : this.validators[e];
          return o
            ? {
                type: "function" == typeof e ? "function" : e,
                func: o,
                params: t,
              }
            : (console.warn(
                "Validator Setup Error - No matching validator found:",
                e,
              ),
              !1);
        }),
        (te.prototype.validate = function (e, t, o) {
          var i = this,
            n = [],
            r = this.invalidCells.indexOf(t);
          return (
            e &&
              e.forEach(function (e) {
                e.func.call(i, t.getComponent(), o, e.params) ||
                  n.push({ type: e.type, parameters: e.params });
              }),
            (n = !n.length || n),
            t.modules.validate || (t.modules.validate = {}),
            !0 === n
              ? ((t.modules.validate.invalid = !1),
                t.getElement().classList.remove("tabulator-validation-fail"),
                r > -1 && this.invalidCells.splice(r, 1))
              : ((t.modules.validate.invalid = !0),
                "manual" !== this.table.options.validationMode &&
                  t.getElement().classList.add("tabulator-validation-fail"),
                -1 == r && this.invalidCells.push(t)),
            n
          );
        }),
        (te.prototype.getInvalidCells = function () {
          var e = [];
          return (
            this.invalidCells.forEach(function (t) {
              e.push(t.getComponent());
            }),
            e
          );
        }),
        (te.prototype.clearValidation = function (e) {
          var t;
          e.modules.validate &&
            e.modules.validate.invalid &&
            (e.getElement().classList.remove("tabulator-validation-fail"),
            (e.modules.validate.invalid = !1),
            (t = this.invalidCells.indexOf(e)) > -1 &&
              this.invalidCells.splice(t, 1));
        }),
        (te.prototype.validators = {
          integer: function (e, t, o) {
            return (
              "" === t ||
              null == t ||
              ("number" == typeof (t = Number(t)) &&
                isFinite(t) &&
                Math.floor(t) === t)
            );
          },
          float: function (e, t, o) {
            return (
              "" === t ||
              null == t ||
              ("number" == typeof (t = Number(t)) && isFinite(t) && t % 1 != 0)
            );
          },
          numeric: function (e, t, o) {
            return "" === t || null == t || !isNaN(t);
          },
          string: function (e, t, o) {
            return "" === t || null == t || isNaN(t);
          },
          max: function (e, t, o) {
            return "" === t || null == t || parseFloat(t) <= o;
          },
          min: function (e, t, o) {
            return "" === t || null == t || parseFloat(t) >= o;
          },
          starts: function (e, t, o) {
            return (
              "" === t ||
              null == t ||
              String(t).toLowerCase().startsWith(String(o).toLowerCase())
            );
          },
          ends: function (e, t, o) {
            return (
              "" === t ||
              null == t ||
              String(t).toLowerCase().endsWith(String(o).toLowerCase())
            );
          },
          minLength: function (e, t, o) {
            return "" === t || null == t || String(t).length >= o;
          },
          maxLength: function (e, t, o) {
            return "" === t || null == t || String(t).length <= o;
          },
          in: function (e, t, o) {
            return (
              "" === t ||
              null == t ||
              ("string" == typeof o && (o = o.split("|")),
              "" === t || o.indexOf(t) > -1)
            );
          },
          regex: function (e, t, o) {
            return "" === t || null == t || new RegExp(o).test(t);
          },
          unique: function (e, t, o) {
            if ("" === t || null == t) return !0;
            var i = !0,
              n = e.getData(),
              r = e.getColumn()._getSelf();
            return (
              this.table.rowManager.rows.forEach(function (e) {
                var o = e.getData();
                o !== n && t == r.getFieldValue(o) && (i = !1);
              }),
              i
            );
          },
          required: function (e, t, o) {
            return "" !== t && null != t;
          },
        }),
        g.prototype.registerModule("validate", te);
      const oe = g;
    },
    51194: (e, t, o) => {
      "use strict";
      o.d(t, {
        JL: () => E,
        KC: () => C,
        Rg: () => P,
        XB: () => j,
        XD: () => V,
        c_: () => R,
        ik: () => B,
        pA: () => X,
        rf: () => Z,
        u2: () => k,
        vc: () => I,
        xQ: () => L,
      });
      var i = o(45878),
        n = o(43898),
        r = o(67328);
      const a = i.Message;
      var s,
        l,
        c,
        u,
        d,
        p,
        h,
        m,
        f,
        g,
        b,
        v,
        y,
        w,
        E,
        C,
        R,
        x,
        _,
        M,
        S,
        T,
        k,
        D;
      !(function (e) {
        (e[(e.k_EPartnerEmailNotifcationType_Invalid = 0)] =
          "k_EPartnerEmailNotifcationType_Invalid"),
          (e[(e.k_EPartnerEmailNotifcationType_PartnerReminderPreRelease = 1)] =
            "k_EPartnerEmailNotifcationType_PartnerReminderPreRelease");
      })(s || (s = {})),
        (function (e) {
          (e[(e.k_EMembershipEvent_Invalid = 0)] =
            "k_EMembershipEvent_Invalid"),
            (e[(e.k_EMembershipEvent_AccountAddedToPartner = 1)] =
              "k_EMembershipEvent_AccountAddedToPartner"),
            (e[(e.k_EMembershipEvent_AccountRemovedFromPartner = 2)] =
              "k_EMembershipEvent_AccountRemovedFromPartner"),
            (e[(e.k_EMembershipEvent_GroupRightsModified = 3)] =
              "k_EMembershipEvent_GroupRightsModified"),
            (e[(e.k_EMembershipEvent_AddedToGroup = 4)] =
              "k_EMembershipEvent_AddedToGroup"),
            (e[(e.k_EMembershipEvent_RemovedFromGroup = 5)] =
              "k_EMembershipEvent_RemovedFromGroup"),
            (e[(e.k_EMembershipEvent_PublisherRightsModified = 6)] =
              "k_EMembershipEvent_PublisherRightsModified");
        })(l || (l = {})),
        (function (e) {
          (e[(e.k_EBetaProgram_Invalid = 0)] = "k_EBetaProgram_Invalid"),
            (e[(e.k_EBetaProgram_PartnerUTMStats = 1)] =
              "k_EBetaProgram_PartnerUTMStats"),
            (e[(e.k_EBetaProgram_SteamStatsAPI = 2)] =
              "k_EBetaProgram_SteamStatsAPI"),
            (e[(e.k_EBetaProgram_SteamLearn = 3)] =
              "k_EBetaProgram_SteamLearn");
        })(c || (c = {})),
        (function (e) {
          (e[(e.k_ENavigationDeviceType_Unknown = 0)] =
            "k_ENavigationDeviceType_Unknown"),
            (e[(e.k_ENavigationDeviceType_PC = 1)] =
              "k_ENavigationDeviceType_PC"),
            (e[(e.k_ENavigationDeviceType_Mobile = 2)] =
              "k_ENavigationDeviceType_Mobile");
        })(u || (u = {})),
        (function (e) {
          (e[(e.k_EAppCreationCreditStatus_Available = 0)] =
            "k_EAppCreationCreditStatus_Available"),
            (e[(e.k_EAppCreationCreditStatus_Redeemed = 1)] =
              "k_EAppCreationCreditStatus_Redeemed"),
            (e[(e.k_EAppCreationCreditStatus_Revoked = 2)] =
              "k_EAppCreationCreditStatus_Revoked"),
            (e[(e.k_EAppCreationCreditStatus_Pending = 3)] =
              "k_EAppCreationCreditStatus_Pending");
        })(d || (d = {})),
        (function (e) {
          (e[(e.k_EAppCreationCreditType_Standard = 0)] =
            "k_EAppCreationCreditType_Standard"),
            (e[(e.k_EAppCreationCreditType_Granted = 1)] =
              "k_EAppCreationCreditType_Granted"),
            (e[(e.k_EAppCreationCreditType_Complimentary = 2)] =
              "k_EAppCreationCreditType_Complimentary"),
            (e[(e.k_EAppCreationCreditType_AdultContent = 3)] =
              "k_EAppCreationCreditType_AdultContent"),
            (e[(e.k_EAppCreationCreditType_Referral = 4)] =
              "k_EAppCreationCreditType_Referral");
        })(p || (p = {})),
        (function (e) {
          (e[(e.k_EAppReportingPlatform_All = 0)] =
            "k_EAppReportingPlatform_All"),
            (e[(e.k_EAppReportingPlatform_Windows = 1)] =
              "k_EAppReportingPlatform_Windows"),
            (e[(e.k_EAppReportingPlatform_Mac = 2)] =
              "k_EAppReportingPlatform_Mac"),
            (e[(e.k_EAppReportingPlatform_Linux = 4)] =
              "k_EAppReportingPlatform_Linux");
        })(h || (h = {})),
        (function (e) {
          (e[(e.k_EReleaseRequestStateAny = 0)] = "k_EReleaseRequestStateAny"),
            (e[(e.k_EReleaseRequestStateNotReady = 1)] =
              "k_EReleaseRequestStateNotReady"),
            (e[(e.k_EReleaseRequestStatePending = 2)] =
              "k_EReleaseRequestStatePending"),
            (e[(e.k_EReleaseRequestStateApproved = 3)] =
              "k_EReleaseRequestStateApproved");
        })(m || (m = {})),
        (function (e) {
          (e[(e.k_EPartnerNotesType_Misc = 0)] = "k_EPartnerNotesType_Misc"),
            (e[(e.k_EPartnerNotesType_SetStatus_Active = 1)] =
              "k_EPartnerNotesType_SetStatus_Active"),
            (e[(e.k_EPartnerNotesType_SetStatus_Archived = 2)] =
              "k_EPartnerNotesType_SetStatus_Archived"),
            (e[(e.k_EPartnerNotesType_SetStatus_Banned = 3)] =
              "k_EPartnerNotesType_SetStatus_Banned"),
            (e[(e.k_EPartnerNotesType_Warning = 4)] =
              "k_EPartnerNotesType_Warning"),
            (e[(e.k_EPartnerNotesType_Legacy = 5)] =
              "k_EPartnerNotesType_Legacy"),
            (e[(e.k_EPartnerNotesType_SetStatus_Retired = 6)] =
              "k_EPartnerNotesType_SetStatus_Retired");
        })(f || (f = {})),
        (function (e) {
          (e[(e.k_EDocumentationFileType_Invalid = 0)] =
            "k_EDocumentationFileType_Invalid"),
            (e[(e.k_EDocumentationFileType_Download = 1)] =
              "k_EDocumentationFileType_Download"),
            (e[(e.k_EDocumentationFileType_Image = 2)] =
              "k_EDocumentationFileType_Image");
        })(g || (g = {})),
        (function (e) {
          (e[(e.k_EAppCapabilityNone = 0)] = "k_EAppCapabilityNone"),
            (e[(e.k_EAppCapabilityCommunityItems = 1)] =
              "k_EAppCapabilityCommunityItems"),
            (e[(e.k_EAppCapabilityJumboKeyRequests = 2)] =
              "k_EAppCapabilityJumboKeyRequests"),
            (e[(e.k_EAppCapabilityKeyRequests = 3)] =
              "k_EAppCapabilityKeyRequests"),
            (e[(e.k_EAppCapabilityVetted = 4)] = "k_EAppCapabilityVetted"),
            (e[(e.k_EAppCapabilityEligibleForUpcomingList = 5)] =
              "k_EAppCapabilityEligibleForUpcomingList"),
            (e[(e.k_EAppCapabilityVettedForShowcaseItems = 6)] =
              "k_EAppCapabilityVettedForShowcaseItems"),
            (e[(e.k_EAppCapabilityFishy = 7)] = "k_EAppCapabilityFishy");
        })(b || (b = {})),
        (function (e) {
          (e[(e.k_EAppTransferState_Invalid = 0)] =
            "k_EAppTransferState_Invalid"),
            (e[(e.k_EAppTransferState_PendingConfirmationFrom_Receiver = 1)] =
              "k_EAppTransferState_PendingConfirmationFrom_Receiver"),
            (e[(e.k_EAppTransferState_PendingConfirmationFrom_Sender = 2)] =
              "k_EAppTransferState_PendingConfirmationFrom_Sender"),
            (e[(e.k_EAppTransferState_PendingApproval = 3)] =
              "k_EAppTransferState_PendingApproval"),
            (e[(e.k_EAppTransferState_Approved = 4)] =
              "k_EAppTransferState_Approved"),
            (e[(e.k_EAppTransferState_CanceledByReceiver = 5)] =
              "k_EAppTransferState_CanceledByReceiver"),
            (e[(e.k_EAppTransferState_CanceledBySender = 6)] =
              "k_EAppTransferState_CanceledBySender"),
            (e[(e.k_EAppTransferState_Declined = 7)] =
              "k_EAppTransferState_Declined"),
            (e[(e.k_EAppTransferState_RequiresEscalation = 8)] =
              "k_EAppTransferState_RequiresEscalation"),
            (e[(e.k_EAppTransferState_ApprovedPendingScheduledTransfer = 9)] =
              "k_EAppTransferState_ApprovedPendingScheduledTransfer"),
            (e[(e.k_EAppTransferState_Expired = 10)] =
              "k_EAppTransferState_Expired");
        })(v || (v = {})),
        (function (e) {
          (e[(e.k_ETF2BlogPostType_Blog = 0)] = "k_ETF2BlogPostType_Blog"),
            (e[(e.k_ETF2BlogPostType_News = 1)] = "k_ETF2BlogPostType_News"),
            (e[(e.k_ETF2BlogPostType_Updates = 2)] =
              "k_ETF2BlogPostType_Updates"),
            (e[(e.k_ETF2BlogPostType_PostID = 3)] =
              "k_ETF2BlogPostType_PostID"),
            (e[(e.k_ETF2BlogPostType_RSS = 4)] = "k_ETF2BlogPostType_RSS");
        })(y || (y = {})),
        (function (e) {
          (e[(e.k_EPartnerAppOptInType_PartnerEvent = 0)] =
            "k_EPartnerAppOptInType_PartnerEvent"),
            (e[(e.k_EPartnerAppOptInType_FeatureAccess = 1)] =
              "k_EPartnerAppOptInType_FeatureAccess");
        })(w || (w = {})),
        (function (e) {
          (e[(e.k_EPartnerAppOptInAppealState_Invalid = 0)] =
            "k_EPartnerAppOptInAppealState_Invalid"),
            (e[(e.k_EPartnerAppOptInAppealState_Approved = 1)] =
              "k_EPartnerAppOptInAppealState_Approved"),
            (e[(e.k_EPartnerAppOptInAppealState_Denied = 2)] =
              "k_EPartnerAppOptInAppealState_Denied");
        })(E || (E = {})),
        (function (e) {
          (e[(e.k_EOptInEmailTarget_ActivatingUser = 1)] =
            "k_EOptInEmailTarget_ActivatingUser"),
            (e[(e.k_EOptInEmailTarget_DemoNotLive = 2)] =
              "k_EOptInEmailTarget_DemoNotLive"),
            (e[(e.k_EOptInEmailTarget_DiscountMissing = 4)] =
              "k_EOptInEmailTarget_DiscountMissing"),
            (e[(e.k_EOptInEmailTarget_DEPRECATED_InvitedPartners = 8)] =
              "k_EOptInEmailTarget_DEPRECATED_InvitedPartners"),
            (e[(e.k_EOptInEmailTarget_InvitedApps = 16)] =
              "k_EOptInEmailTarget_InvitedApps"),
            (e[(e.k_EOptInEmailTarget_EligibleApps = 32)] =
              "k_EOptInEmailTarget_EligibleApps"),
            (e[(e.k_EOptInEmailTarget_FeaturedApps = 64)] =
              "k_EOptInEmailTarget_FeaturedApps"),
            (e[(e.k_EOptInEmailTarget_FeaturedAppsMissingDate = 128)] =
              "k_EOptInEmailTarget_FeaturedAppsMissingDate"),
            (e[(e.k_EOptInEmailTarget_FeaturedAppsNotContacted = 256)] =
              "k_EOptInEmailTarget_FeaturedAppsNotContacted"),
            (e[(e.k_EOptInEmailTarget_CustomAppList = 512)] =
              "k_EOptInEmailTarget_CustomAppList");
        })(C || (C = {})),
        (function (e) {
          (e[(e.k_EOptInEmailSetting_None = 0)] = "k_EOptInEmailSetting_None"),
            (e[(e.k_EOptInEmailSetting_AssetKit = 1)] =
              "k_EOptInEmailSetting_AssetKit"),
            (e[(e.k_EOptInEmailSetting_PressPreview = 2)] =
              "k_EOptInEmailSetting_PressPreview"),
            (e[(e.k_EOptInEmailSetting_ScheduleWidget = 4)] =
              "k_EOptInEmailSetting_ScheduleWidget"),
            (e[(e.k_EOptInEmailSetting_OptOut = 8)] =
              "k_EOptInEmailSetting_OptOut"),
            (e[(e.k_EOptInEmailSetting_OptOutDemo = 16)] =
              "k_EOptInEmailSetting_OptOutDemo"),
            (e[(e.k_EOptInEmailSetting_EnterDiscount = 32)] =
              "k_EOptInEmailSetting_EnterDiscount"),
            (e[(e.k_EOptInEmailSetting_ActivateDemo = 64)] =
              "k_EOptInEmailSetting_ActivateDemo"),
            (e[(e.k_EOptInEmailSetting_ReviewCategorization = 128)] =
              "k_EOptInEmailSetting_ReviewCategorization"),
            (e[(e.k_EOptInEmailSetting_DemoReview = 256)] =
              "k_EOptInEmailSetting_DemoReview"),
            (e[(e.k_EOptInEmailSetting_PressPreviewDetails = 512)] =
              "k_EOptInEmailSetting_PressPreviewDetails"),
            (e[(e.k_EOptInEmailSetting_StatsSummary = 1024)] =
              "k_EOptInEmailSetting_StatsSummary"),
            (e[(e.k_EOptInEmailSetting_SurveyButton = 2048)] =
              "k_EOptInEmailSetting_SurveyButton"),
            (e[(e.k_EOptInEmailSetting_DemoLaunch = 4096)] =
              "k_EOptInEmailSetting_DemoLaunch"),
            (e[(e.k_EOptInEmailSetting_CallForRegistration = 8192)] =
              "k_EOptInEmailSetting_CallForRegistration");
        })(R || (R = {})),
        (function (e) {
          (e[(e.k_EAppTestType_BuildReview = 0)] =
            "k_EAppTestType_BuildReview"),
            (e[(e.k_EAppTestType_StorePageReview = 1)] =
              "k_EAppTestType_StorePageReview"),
            (e[(e.k_EAppTestType_SteamChina_BuildReview = 2)] =
              "k_EAppTestType_SteamChina_BuildReview"),
            (e[(e.k_EAppTestType_SteamChina_StorePageReview = 3)] =
              "k_EAppTestType_SteamChina_StorePageReview"),
            (e[
              (e.k_EAppTestType_SteamChinaPlatformOperator_StorePageReview = 4)
            ] = "k_EAppTestType_SteamChinaPlatformOperator_StorePageReview"),
            (e[(e.k_EAppTestType_SteamChinaPlatformOperator_BuildReview = 5)] =
              "k_EAppTestType_SteamChinaPlatformOperator_BuildReview"),
            (e[(e.k_EAppTestType_SteamDeckCompatibilityReview = 6)] =
              "k_EAppTestType_SteamDeckCompatibilityReview");
        })(x || (x = {})),
        (function (e) {
          (e[(e.k_EAppTrafficStatAttribution_Store = 0)] =
            "k_EAppTrafficStatAttribution_Store"),
            (e[(e.k_EAppTrafficStatAttribution_SteamPlatform = 1)] =
              "k_EAppTrafficStatAttribution_SteamPlatform"),
            (e[(e.k_EAppTrafficStatAttribution_External = 2)] =
              "k_EAppTrafficStatAttribution_External");
        })(_ || (_ = {})),
        (function (e) {
          (e[(e.k_EPartnerMembershipInviteState_Invalid = 0)] =
            "k_EPartnerMembershipInviteState_Invalid"),
            (e[(e.k_EPartnerMembershipInviteState_Sent = 1)] =
              "k_EPartnerMembershipInviteState_Sent"),
            (e[(e.k_EPartnerMembershipInviteState_ReceiverAccepted = 2)] =
              "k_EPartnerMembershipInviteState_ReceiverAccepted"),
            (e[(e.k_EPartnerMembershipInviteState_ReceiverDeclined = 3)] =
              "k_EPartnerMembershipInviteState_ReceiverDeclined"),
            (e[(e.k_EPartnerMembershipInviteState_PartnerAccepted = 4)] =
              "k_EPartnerMembershipInviteState_PartnerAccepted"),
            (e[(e.k_EPartnerMembershipInviteState_PartnerDeclined = 5)] =
              "k_EPartnerMembershipInviteState_PartnerDeclined"),
            (e[(e.k_EPartnerMembershipInviteState_Canceled = 6)] =
              "k_EPartnerMembershipInviteState_Canceled"),
            (e[(e.k_EPartnerMembershipInviteState_Expired = 7)] =
              "k_EPartnerMembershipInviteState_Expired"),
            (e[(e.k_EPartnerMembershipInviteState_MAX = 8)] =
              "k_EPartnerMembershipInviteState_MAX");
        })(M || (M = {})),
        (function (e) {
          (e[(e.k_EAppShareState_Invalid = 0)] = "k_EAppShareState_Invalid"),
            (e[(e.k_EAppShareState_Created = 1)] = "k_EAppShareState_Created"),
            (e[(e.k_EAppShareState_AwaitingConfirmation = 2)] =
              "k_EAppShareState_AwaitingConfirmation"),
            (e[(e.k_EAppShareState_Declined = 3)] =
              "k_EAppShareState_Declined"),
            (e[(e.k_EAppShareState_Active = 4)] = "k_EAppShareState_Active"),
            (e[(e.k_EAppShareState_Canceled = 5)] =
              "k_EAppShareState_Canceled"),
            (e[(e.k_EAppShareState_Expired = 6)] = "k_EAppShareState_Expired"),
            (e[(e.k_EAppShareState_Revoked = 7)] = "k_EAppShareState_Revoked"),
            (e[(e.k_EAppShareState_CanceledForAppTransfer = 8)] =
              "k_EAppShareState_CanceledForAppTransfer"),
            (e[(e.k_EAppShareState_MAX = 9)] = "k_EAppShareState_MAX");
        })(S || (S = {})),
        (function (e) {
          (e[(e.k_ECommunicationInviteState_Invalid = 0)] =
            "k_ECommunicationInviteState_Invalid"),
            (e[(e.k_ECommunicationInviteState_Pending = 1)] =
              "k_ECommunicationInviteState_Pending"),
            (e[(e.k_ECommunicationInviteState_Accepted = 2)] =
              "k_ECommunicationInviteState_Accepted"),
            (e[(e.k_ECommunicationInviteState_Removed = 4)] =
              "k_ECommunicationInviteState_Removed");
        })(T || (T = {}));
      class L extends a {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            L.prototype.opt_in_name || n.aR(L.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            L.sm_m ||
              (L.sm_m = {
                proto: L,
                fields: {
                  opt_in_name: {
                    n: 1,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  targeting_flag: {
                    n: 2,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  settings_flag: {
                    n: 3,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  email_templates: {
                    n: 4,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  start_rtime: {
                    n: 5,
                    d: 0,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  end_rtime: {
                    n: 6,
                    d: 0,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            L.sm_m
          );
        }
        static MBF() {
          return L.sm_mbf || (L.sm_mbf = n.Bh(L.M())), L.sm_mbf;
        }
        toObject(e = !1) {
          return L.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(L.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(L.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            o = new L();
          return L.deserializeBinaryFromReader(o, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(L.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return L.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(L.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return L.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishing_CreatePartnerAppOptInEmail_Request";
        }
      }
      class z extends a {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            z.prototype.email_def_id || n.aR(z.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: {
                  email_def_id: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                },
              }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = n.Bh(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(z.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            o = new z();
          return z.deserializeBinaryFromReader(o, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(z.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishing_CreatePartnerAppOptInEmail_Response";
        }
      }
      class P extends a {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            P.prototype.email_def_id || n.aR(P.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            P.sm_m ||
              (P.sm_m = {
                proto: P,
                fields: {
                  email_def_id: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  targeting_flag: {
                    n: 2,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  settings_flag: {
                    n: 3,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  email_templates: {
                    n: 4,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  start_rtime: {
                    n: 5,
                    d: 0,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  end_rtime: {
                    n: 6,
                    d: 0,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  reviewed: {
                    n: 7,
                    d: !1,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                },
              }),
            P.sm_m
          );
        }
        static MBF() {
          return P.sm_mbf || (P.sm_mbf = n.Bh(P.M())), P.sm_mbf;
        }
        toObject(e = !1) {
          return P.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(P.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(P.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            o = new P();
          return P.deserializeBinaryFromReader(o, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(P.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(P.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishing_UpdatePartnerAppOptInEmail_Request";
        }
      }
      class A extends a {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), a.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return A.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new A();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            o = new A();
          return A.deserializeBinaryFromReader(o, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishing_UpdatePartnerAppOptInEmail_Response";
        }
      }
      class F extends a {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            F.prototype.accounts_examined || n.aR(F.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
                fields: {
                  accounts_examined: {
                    n: 1,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  accounts_emailed: {
                    n: 2,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  accounts_not_emailed_opted_out: {
                    n: 3,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  accounts_email_failed: {
                    n: 4,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  completed: { n: 5, br: n.FE.readBool, bw: n.Xc.writeBool },
                  rt_last_updated: {
                    n: 6,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            F.sm_m
          );
        }
        static MBF() {
          return F.sm_mbf || (F.sm_mbf = n.Bh(F.M())), F.sm_mbf;
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(F.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(F.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            o = new F();
          return F.deserializeBinaryFromReader(o, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(F.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(F.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPartnerAppOptInEmailStats";
        }
      }
      class B extends a {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            B.prototype.email_def_id || n.aR(B.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: {
                  email_def_id: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  force_resend: { n: 2, br: n.FE.readBool, bw: n.Xc.writeBool },
                },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = n.Bh(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(B.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(B.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            o = new B();
          return B.deserializeBinaryFromReader(o, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(B.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(B.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishing_SendPartnerAppOptInEmailAndWait_Request";
        }
      }
      class H extends a {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            H.prototype.results || n.aR(H.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            H.sm_m ||
              (H.sm_m = { proto: H, fields: { results: { n: 1, c: F } } }),
            H.sm_m
          );
        }
        static MBF() {
          return H.sm_mbf || (H.sm_mbf = n.Bh(H.M())), H.sm_mbf;
        }
        toObject(e = !1) {
          return H.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(H.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(H.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            o = new H();
          return H.deserializeBinaryFromReader(o, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(H.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(H.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return H.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishing_SendPartnerAppOptInEmailAndWait_Response";
        }
      }
      class O extends a {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            O.prototype.opt_in_name || n.aR(O.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            O.sm_m ||
              (O.sm_m = {
                proto: O,
                fields: {
                  opt_in_name: {
                    n: 1,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  targeting_flag: {
                    n: 2,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  settings_flag: {
                    n: 3,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  email_templates: {
                    n: 4,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  start_rtime: {
                    n: 5,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  end_rtime: {
                    n: 6,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  stats: { n: 7, c: F },
                  creator_accountid: {
                    n: 8,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  create_time: {
                    n: 9,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  last_update_time: {
                    n: 10,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  email_def_id: {
                    n: 11,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  completed: { n: 12, br: n.FE.readBool, bw: n.Xc.writeBool },
                  aborted: { n: 13, br: n.FE.readBool, bw: n.Xc.writeBool },
                  deleted: { n: 14, br: n.FE.readBool, bw: n.Xc.writeBool },
                  reviewed: { n: 15, br: n.FE.readBool, bw: n.Xc.writeBool },
                },
              }),
            O.sm_m
          );
        }
        static MBF() {
          return O.sm_mbf || (O.sm_mbf = n.Bh(O.M())), O.sm_mbf;
        }
        toObject(e = !1) {
          return O.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(O.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(O.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            o = new O();
          return O.deserializeBinaryFromReader(o, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(O.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(O.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPartnerAppOptInEmailDef";
        }
      }
      class I extends a {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            I.prototype.opt_in_name || n.aR(I.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
                fields: {
                  opt_in_name: {
                    n: 1,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                },
              }),
            I.sm_m
          );
        }
        static MBF() {
          return I.sm_mbf || (I.sm_mbf = n.Bh(I.M())), I.sm_mbf;
        }
        toObject(e = !1) {
          return I.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(I.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(I.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            o = new I();
          return I.deserializeBinaryFromReader(o, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(I.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(I.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishing_GetPartnerAppOptInEmailDefAndStats_Request";
        }
      }
      class N extends a {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            N.prototype.defs || n.aR(N.M()),
            a.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            N.sm_m ||
              (N.sm_m = {
                proto: N,
                fields: { defs: { n: 1, c: O, r: !0, q: !0 } },
              }),
            N.sm_m
          );
        }
        static MBF() {
          return N.sm_mbf || (N.sm_mbf = n.Bh(N.M())), N.sm_mbf;
        }
        toObject(e = !1) {
          return N.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(N.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(N.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            o = new N();
          return N.deserializeBinaryFromReader(o, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(N.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(N.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishing_GetPartnerAppOptInEmailDefAndStats_Response";
        }
      }
      class j extends a {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            j.prototype.email_def_id || n.aR(j.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            j.sm_m ||
              (j.sm_m = {
                proto: j,
                fields: {
                  email_def_id: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                },
              }),
            j.sm_m
          );
        }
        static MBF() {
          return j.sm_mbf || (j.sm_mbf = n.Bh(j.M())), j.sm_mbf;
        }
        toObject(e = !1) {
          return j.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(j.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(j.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            o = new j();
          return j.deserializeBinaryFromReader(o, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(j.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(j.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishing_GetEstimatePartnerAppOptInEmail_Request";
        }
      }
      class W extends a {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            W.prototype.stats || n.aR(W.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            W.sm_m ||
              (W.sm_m = { proto: W, fields: { stats: { n: 1, c: F } } }),
            W.sm_m
          );
        }
        static MBF() {
          return W.sm_mbf || (W.sm_mbf = n.Bh(W.M())), W.sm_mbf;
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(W.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(W.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            o = new W();
          return W.deserializeBinaryFromReader(o, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(W.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(W.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishing_GetEstimatePartnerAppOptInEmail_Response";
        }
      }
      class V extends a {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            V.prototype.email_def_id || n.aR(V.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            V.sm_m ||
              (V.sm_m = {
                proto: V,
                fields: {
                  email_def_id: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  appid: { n: 2, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  partnerid: {
                    n: 3,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            V.sm_m
          );
        }
        static MBF() {
          return V.sm_mbf || (V.sm_mbf = n.Bh(V.M())), V.sm_mbf;
        }
        toObject(e = !1) {
          return V.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(V.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(V.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            o = new V();
          return V.deserializeBinaryFromReader(o, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(V.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return V.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(V.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return V.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishing_TestFirePartnerAppOptInEmail_Request";
        }
      }
      class G extends a {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), a.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return G.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new G();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            o = new G();
          return G.deserializeBinaryFromReader(o, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishing_TestFirePartnerAppOptInEmail_Response";
        }
      }
      class U extends a {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            U.prototype.accountid || n.aR(U.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            U.sm_m ||
              (U.sm_m = {
                proto: U,
                fields: {
                  accountid: {
                    n: 1,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  appid: { n: 2, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  partnerid: {
                    n: 3,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  rtime_notified: {
                    n: 4,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  ignored_unverified_email: {
                    n: 5,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  ignored_email_optout: {
                    n: 6,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  status: { n: 7, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  send_rtime: {
                    n: 8,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            U.sm_m
          );
        }
        static MBF() {
          return U.sm_mbf || (U.sm_mbf = n.Bh(U.M())), U.sm_mbf;
        }
        toObject(e = !1) {
          return U.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(U.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(U.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            o = new U();
          return U.deserializeBinaryFromReader(o, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(U.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(U.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPartnerOptInEmailTracking";
        }
      }
      class X extends a {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            X.prototype.email_def_id || n.aR(X.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            X.sm_m ||
              (X.sm_m = {
                proto: X,
                fields: {
                  email_def_id: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                },
              }),
            X.sm_m
          );
        }
        static MBF() {
          return X.sm_mbf || (X.sm_mbf = n.Bh(X.M())), X.sm_mbf;
        }
        toObject(e = !1) {
          return X.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(X.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(X.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            o = new X();
          return X.deserializeBinaryFromReader(o, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(X.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return X.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(X.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return X.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishing_GetOptInEmailTracking_Request";
        }
      }
      class Y extends a {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Y.prototype.email_def_id || n.aR(Y.M()),
            a.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            Y.sm_m ||
              (Y.sm_m = {
                proto: Y,
                fields: {
                  email_def_id: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  results: { n: 2, c: U, r: !0, q: !0 },
                },
              }),
            Y.sm_m
          );
        }
        static MBF() {
          return Y.sm_mbf || (Y.sm_mbf = n.Bh(Y.M())), Y.sm_mbf;
        }
        toObject(e = !1) {
          return Y.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(Y.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            o = new Y();
          return Y.deserializeBinaryFromReader(o, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Y.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishing_GetOptInEmailTracking_Response";
        }
      }
      class q extends a {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            q.prototype.appid || n.aR(q.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            q.sm_m ||
              (q.sm_m = {
                proto: q,
                fields: {
                  appid: { n: 1, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  opt_in: { n: 2, br: n.FE.readBool, bw: n.Xc.writeBool },
                  opt_in_name: {
                    n: 3,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  jsondata: { n: 4, br: n.FE.readString, bw: n.Xc.writeString },
                  type: { n: 5, br: n.FE.readEnum, bw: n.Xc.writeEnum },
                  accountid_add: {
                    n: 6,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  time_opted_in: {
                    n: 7,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  time_updated: {
                    n: 8,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  accountid_lastmod: {
                    n: 9,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  invited: { n: 10, br: n.FE.readBool, bw: n.Xc.writeBool },
                  accountid_remove: {
                    n: 11,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  time_opted_out: {
                    n: 12,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  pruned: { n: 13, br: n.FE.readBool, bw: n.Xc.writeBool },
                  accountid_prune: {
                    n: 14,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  time_pruned: {
                    n: 15,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  additional_featuring: {
                    n: 16,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  feature_day: {
                    n: 17,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  accountid_invited: {
                    n: 18,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  no_planned_discount: {
                    n: 19,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  pending_review: {
                    n: 20,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  appeal_state: {
                    n: 21,
                    br: n.FE.readEnum,
                    bw: n.Xc.writeEnum,
                  },
                  accountid_appeal: {
                    n: 22,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            q.sm_m
          );
        }
        static MBF() {
          return q.sm_mbf || (q.sm_mbf = n.Bh(q.M())), q.sm_mbf;
        }
        toObject(e = !1) {
          return q.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(q.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(q.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            o = new q();
          return q.deserializeBinaryFromReader(o, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(q.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(q.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPartnerAppOptInData";
        }
      }
      class K extends a {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            K.prototype.appid || n.aR(K.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            K.sm_m ||
              (K.sm_m = {
                proto: K,
                fields: {
                  appid: { n: 1, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                },
              }),
            K.sm_m
          );
        }
        static MBF() {
          return K.sm_mbf || (K.sm_mbf = n.Bh(K.M())), K.sm_mbf;
        }
        toObject(e = !1) {
          return K.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(K.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(K.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            o = new K();
          return K.deserializeBinaryFromReader(o, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(K.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return K.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(K.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return K.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishing_GetSinglePartnerAppOptIns_Request";
        }
      }
      class J extends a {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            J.prototype.data || n.aR(J.M()),
            a.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            J.sm_m ||
              (J.sm_m = {
                proto: J,
                fields: { data: { n: 1, c: q, r: !0, q: !0 } },
              }),
            J.sm_m
          );
        }
        static MBF() {
          return J.sm_mbf || (J.sm_mbf = n.Bh(J.M())), J.sm_mbf;
        }
        toObject(e = !1) {
          return J.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(J.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(J.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            o = new J();
          return J.deserializeBinaryFromReader(o, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(J.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return J.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(J.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return J.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishing_GetSinglePartnerAppOptIns_Response";
        }
      }
      class Z extends a {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Z.prototype.appids || n.aR(Z.M()),
            a.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            Z.sm_m ||
              (Z.sm_m = {
                proto: Z,
                fields: {
                  appids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: n.FE.readUint32,
                    pbr: n.FE.readPackedUint32,
                    bw: n.Xc.writeRepeatedUint32,
                  },
                  additional_featuring: {
                    n: 2,
                    d: !0,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  opt_in_name: {
                    n: 3,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                },
              }),
            Z.sm_m
          );
        }
        static MBF() {
          return Z.sm_mbf || (Z.sm_mbf = n.Bh(Z.M())), Z.sm_mbf;
        }
        toObject(e = !1) {
          return Z.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(Z.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            o = new Z();
          return Z.deserializeBinaryFromReader(o, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Z.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishing_SetFeaturingOnPartnerAppOptIn_Request";
        }
      }
      class $ extends a {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            $.prototype.appids || n.aR($.M()),
            a.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            $.sm_m ||
              ($.sm_m = {
                proto: $,
                fields: {
                  appids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: n.FE.readUint32,
                    pbr: n.FE.readPackedUint32,
                    bw: n.Xc.writeRepeatedUint32,
                  },
                },
              }),
            $.sm_m
          );
        }
        static MBF() {
          return $.sm_mbf || ($.sm_mbf = n.Bh($.M())), $.sm_mbf;
        }
        toObject(e = !1) {
          return $.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA($.M(), e, t);
        }
        static fromObject(e) {
          return n.aD($.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            o = new $();
          return $.deserializeBinaryFromReader(o, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F($.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return $.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2($.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return $.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishing_SetFeaturingOnPartnerAppOptIn_Response";
        }
      }
      class Q extends a {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Q.prototype.inviteid || n.aR(Q.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Q.sm_m ||
              (Q.sm_m = {
                proto: Q,
                fields: {
                  inviteid: {
                    n: 1,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  accountid_sender: {
                    n: 2,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  email: { n: 3, br: n.FE.readString, bw: n.Xc.writeString },
                  real_name: {
                    n: 4,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  note: { n: 5, br: n.FE.readString, bw: n.Xc.writeString },
                  time_sent: {
                    n: 6,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  current_state: {
                    n: 7,
                    br: n.FE.readEnum,
                    bw: n.Xc.writeEnum,
                  },
                  pub_rights: {
                    n: 8,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  app_rights: {
                    n: 9,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  time_receiver_responded: {
                    n: 10,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  accountid: {
                    n: 11,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  time_partner_responded: {
                    n: 12,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  accountid_partner: {
                    n: 13,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  partnerid: {
                    n: 14,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  time_last_updated: {
                    n: 15,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  sender_ip: {
                    n: 16,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                },
              }),
            Q.sm_m
          );
        }
        static MBF() {
          return Q.sm_mbf || (Q.sm_mbf = n.Bh(Q.M())), Q.sm_mbf;
        }
        toObject(e = !1) {
          return Q.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(Q.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Q.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            o = new Q();
          return Q.deserializeBinaryFromReader(o, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Q.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Q.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "MembershipInvite";
        }
      }
      class ee extends a {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ee.prototype.partnerid || n.aR(ee.M()),
            a.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            ee.sm_m ||
              (ee.sm_m = {
                proto: ee,
                fields: {
                  partnerid: {
                    n: 1,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  filter_states: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: n.FE.readEnum,
                    pbr: n.FE.readPackedEnum,
                    bw: n.Xc.writeRepeatedEnum,
                  },
                },
              }),
            ee.sm_m
          );
        }
        static MBF() {
          return ee.sm_mbf || (ee.sm_mbf = n.Bh(ee.M())), ee.sm_mbf;
        }
        toObject(e = !1) {
          return ee.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(ee.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(ee.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            o = new ee();
          return ee.deserializeBinaryFromReader(o, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(ee.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(ee.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ee.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPartnerMembershipInvite_GetInvites_Request";
        }
      }
      class te extends a {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            te.prototype.invites || n.aR(te.M()),
            a.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            te.sm_m ||
              (te.sm_m = {
                proto: te,
                fields: { invites: { n: 1, c: Q, r: !0, q: !0 } },
              }),
            te.sm_m
          );
        }
        static MBF() {
          return te.sm_mbf || (te.sm_mbf = n.Bh(te.M())), te.sm_mbf;
        }
        toObject(e = !1) {
          return te.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(te.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(te.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            o = new te();
          return te.deserializeBinaryFromReader(o, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(te.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(te.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPartnerMembershipInvite_GetInvites_Response";
        }
      }
      !(function (e) {
        (e.GetSinglePartnerAppOptIn = function (e, t) {
          return e.SendMsg(
            "Publishing.GetSinglePartnerAppOptIn#1",
            (0, r.MD)(K, t),
            J,
            { bConstMethod: !0, ePrivilege: 1 },
          );
        }),
          (e.SetFeaturingOnPartnerAppOptIn = function (e, t) {
            return e.SendMsg(
              "Publishing.SetFeaturingOnPartnerAppOptIn#1",
              (0, r.MD)(Z, t),
              $,
              { ePrivilege: 1 },
            );
          }),
          (e.CreatePartnerAppOptInEmails = function (e, t) {
            return e.SendMsg(
              "Publishing.CreatePartnerAppOptInEmails#1",
              (0, r.MD)(L, t),
              z,
              { ePrivilege: 1 },
            );
          }),
          (e.UpdatePartnerAppOptInEmails = function (e, t) {
            return e.SendMsg(
              "Publishing.UpdatePartnerAppOptInEmails#1",
              (0, r.MD)(P, t),
              A,
              { ePrivilege: 1 },
            );
          }),
          (e.SendPartnerOptInEmailAndWait = function (e, t) {
            return e.SendMsg(
              "Publishing.SendPartnerOptInEmailAndWait#1",
              (0, r.MD)(B, t),
              H,
              { ePrivilege: 1 },
            );
          }),
          (e.GetPartnerAppOptInEmailDefAndStats = function (e, t) {
            return e.SendMsg(
              "Publishing.GetPartnerAppOptInEmailDefAndStats#1",
              (0, r.MD)(I, t),
              N,
              { ePrivilege: 1 },
            );
          }),
          (e.GetEstimatePartnerAppOptInEmail = function (e, t) {
            return e.SendMsg(
              "Publishing.GetEstimatePartnerAppOptInEmail#1",
              (0, r.MD)(j, t),
              W,
              { ePrivilege: 1 },
            );
          }),
          (e.TestFirePartnerAppOptInEmail = function (e, t) {
            return e.SendMsg(
              "Publishing.TestFirePartnerAppOptInEmail#1",
              (0, r.MD)(V, t),
              G,
              { ePrivilege: 1 },
            );
          }),
          (e.GetOptInEmailTracking = function (e, t) {
            return e.SendMsg(
              "Publishing.GetOptInEmailTracking#1",
              (0, r.MD)(X, t),
              Y,
              { ePrivilege: 1 },
            );
          });
      })(k || (k = {})),
        (function (e) {
          e.GetInvites = function (e, t) {
            return e.SendMsg(
              "PartnerMembershipInvite.GetInvites#1",
              (0, r.MD)(ee, t),
              te,
              { bConstMethod: !0, ePrivilege: 11 },
            );
          };
        })(D || (D = {}));
    },
  },
]);

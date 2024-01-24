/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "8650314";
(() => {
  "use strict";
  var e,
    t,
    n = {
      339: (e, t, n) => {
        n.d(t, { eV: () => a, Rr: () => r, oH: () => l });
        var i,
          a,
          r,
          o = n(45);
        class s {
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
              const n = () => {
                this.m_ActiveInputTimeout = window.setInterval(() => {
                  t();
                }, this.m_config.repeatInterval_ms);
              };
              null == this.m_config.firstRepeatInterval_ms ||
              this.m_config.firstRepeatInterval_ms ===
                this.m_config.repeatInterval_ms
                ? n()
                : (this.m_ActiveInputTimeout = window.setTimeout(() => {
                    t(), n();
                  }, this.m_config.firstRepeatInterval_ms));
            }
          }
        }
        !(function (e) {
          (e[(e.None = 0)] = "None"),
            (e[(e.Horizontal = 1)] = "Horizontal"),
            (e[(e.Vertical = 2)] = "Vertical");
        })(i || (i = {}));
        class c {
          constructor(e) {
            (this.m_repeatOnAxis = i.None),
              (this.m_bRepeatEnabled = !0),
              (this.m_config = e),
              (this.m_inputRepeatGenerator = new s(e));
          }
          Reset() {
            this.m_inputRepeatGenerator.Reset();
          }
          SetEnabled(e) {
            (this.m_bRepeatEnabled = e), this.m_bRepeatEnabled || this.Reset();
          }
          HandleInputButtonDown(e, t, n) {
            this.m_bRepeatEnabled && this.m_config.inputsThatRepeat.has(e)
              ? this.m_repeatOnAxis == i.None &&
                ((e != a.DIR_UP && e != a.DIR_DOWN) ||
                  (this.m_repeatOnAxis = i.Vertical),
                (e != a.DIR_LEFT && e != a.DIR_RIGHT) ||
                  (this.m_repeatOnAxis = i.Horizontal),
                t(),
                this.m_inputRepeatGenerator.HandleInputButtonDown(e, n))
              : (t(), this.m_inputRepeatGenerator.Reset());
          }
          HandleInputButtonUp(e) {
            if (
              this.m_config.inputsThatRepeat.has(e) &&
              this.m_repeatOnAxis != i.None
            ) {
              const t = e == a.DIR_UP || e == a.DIR_DOWN,
                n = e == a.DIR_LEFT || e == a.DIR_RIGHT;
              ((this.m_repeatOnAxis == i.Vertical && t) ||
                (this.m_repeatOnAxis == i.Horizontal && n)) &&
                ((this.m_repeatOnAxis = i.None),
                this.m_inputRepeatGenerator.Reset());
            } else this.m_inputRepeatGenerator.Reset();
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
        })(a || (a = {})),
          (function (e) {
            (e[(e.UNKNOWN = 0)] = "UNKNOWN"),
              (e[(e.GAMEPAD = 1)] = "GAMEPAD"),
              (e[(e.KEYBOARD = 2)] = "KEYBOARD"),
              (e[(e.MOUSE = 3)] = "MOUSE"),
              (e[(e.TOUCH = 4)] = "TOUCH"),
              (e[(e.LPAD = 5)] = "LPAD"),
              (e[(e.RPAD = 6)] = "RPAD");
          })(r || (r = {}));
        class l {
          constructor() {
            (this.m_OnGamepadDetectedCallbacks = new o.pB()),
              (this.m_ButtonDownCallbacks = new o.pB()),
              (this.m_ButtonUpCallbacks = new o.pB()),
              (this.m_AnalogCallbacks = new o.pB()),
              (this.m_NavigationTypeChangeCallbacks = new o.pB()),
              (this.m_nLastActiveControllerIndex = -1),
              (this.m_ButtonRepeatHandler = new c({
                inputsThatRepeat: new Set([
                  a.DIR_UP,
                  a.DIR_DOWN,
                  a.DIR_LEFT,
                  a.DIR_RIGHT,
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
          SetRepeatAllowed(e) {
            this.m_ButtonRepeatHandler.SetEnabled(e);
          }
          OnGamepadDetected() {
            console.log("Gamepad detected"),
              (this.m_bGamepadDetected = !0),
              this.m_OnGamepadDetectedCallbacks.Dispatch();
          }
          OnButtonDown(e, t) {
            void 0 === t && (t = -1),
              this.SetControllerActive(t),
              this.m_ButtonRepeatHandler.HandleInputButtonDown(
                e,
                () => this.DispatchButtonDown(e, !1),
                () => this.DispatchButtonDown(e, !0),
              );
          }
          OnButtonUp(e, t) {
            void 0 === t && (t = -1),
              this.SetControllerActive(t),
              this.m_ButtonRepeatHandler.HandleInputButtonUp(e),
              this.m_ButtonUpCallbacks.Dispatch(
                e,
                this.m_eNavigationSourceType,
                this.m_nLastActiveControllerIndex,
              );
          }
          DispatchButtonDown(e, t) {
            this.m_ButtonDownCallbacks.Dispatch(
              e,
              this.m_eNavigationSourceType,
              this.m_nLastActiveControllerIndex,
              t,
            );
          }
          OnAnalogPad(e, t, n, i) {
            void 0 === i && (i = -1),
              this.SetControllerActive(i),
              this.m_AnalogCallbacks.Dispatch(
                e,
                this.m_nLastActiveControllerIndex,
                t,
                n,
              );
          }
          OnNavigationTypeChanged(e) {
            this.m_NavigationTypeChangeCallbacks.Dispatch(e);
          }
        }
      },
      120: (e, t, n) => {
        function i(e, t) {
          return !!e && "object" == typeof e.SteamClient && t in e.SteamClient;
        }
        function a(e) {
          return (function (e, t) {
            if (!e) return !1;
            const [n, a] = t.split(".", 2);
            return n && a && i(e, n) && a in e.SteamClient[n];
          })(window, e);
        }
        n.d(t, { U5: () => a });
      },
      929: (e, t, n) => {
        function i(e, t) {
          return (function (e, t) {
            const n = e.findIndex(t);
            return n >= 0 && (e.splice(n, 1), !0);
          })(e, (e) => t == e);
        }
        n.d(t, { Zf: () => i });
      },
      850: (e, t, n) => {
        function i(e, t, n) {
          return {
            get() {
              let e = n.value.bind(this);
              return (
                this.hasOwnProperty(t) ||
                  Object.defineProperty(this, t, { value: e }),
                e
              );
            },
          };
        }
        n.d(t, { a: () => i });
      },
      45: (e, t, n) => {
        n.d(t, {
          Ar: () => p,
          Hf: () => d,
          km: () => u,
          pB: () => o,
          vq: () => c,
        });
        var i = n(556),
          a = n(929),
          r = n(850);
        class o {
          constructor() {
            this.m_vecCallbacks = [];
          }
          Register(e) {
            this.m_vecCallbacks.push(e);
            return {
              Unregister: () => {
                a.Zf(this.m_vecCallbacks, e);
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
          constructor(e, t) {
            (this.m_callbacks = new o()),
              (this.m_currentValue = e),
              (this.m_fnEquals = t);
          }
          Set(e) {
            if (this.m_fnEquals) {
              if (this.m_fnEquals(this.m_currentValue, e)) return;
            } else if (this.m_currentValue === e) return;
            (this.m_currentValue = e), this.m_callbacks.Dispatch(e);
          }
          get Value() {
            return this.m_currentValue;
          }
          Subscribe(e) {
            return { Unsubscribe: this.m_callbacks.Register(e).Unregister };
          }
        }
        function c(e, t) {
          return new s(e, t);
        }
        class l {
          constructor(e, t, n) {
            (this.m_subscriptionRefCount = 0),
              (this.m_originalSubscribableValue = e),
              (this.m_mappedSubscribableValue = new s(t(e.Value), n)),
              (this.m_fnMap = t);
          }
          get Value() {
            var e;
            return null === (e = this.m_mappedSubscribableValue) || void 0 === e
              ? void 0
              : e.Value;
          }
          Subscribe(e) {
            var t;
            0 == this.m_subscriptionRefCount++ &&
              (this.m_mappedUnsubscribe =
                this.m_originalSubscribableValue.Subscribe((e) =>
                  this.m_mappedSubscribableValue.Set(this.m_fnMap(e)),
                ));
            const n =
              null === (t = this.m_mappedSubscribableValue) || void 0 === t
                ? void 0
                : t.Subscribe(e);
            return {
              Unsubscribe: () => {
                var e;
                n.Unsubscribe(),
                  0 == --this.m_subscriptionRefCount &&
                    (null === (e = this.m_mappedUnsubscribe) ||
                      void 0 === e ||
                      e.Unsubscribe(),
                    (this.m_mappedUnsubscribe = void 0));
              },
            };
          }
        }
        function u(e, t, n) {
          return new l(e, t, n);
        }
        class p {
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
            const e = this.m_fnCallback;
            (this.m_fnCallback = void 0), null == e || e();
          }
        }
        (0, i.gn)([r.a], p.prototype, "ScheduledInternal", null);
        class d {
          constructor() {
            this.m_vecCallbacks = [];
          }
          Push(e) {
            this.m_vecCallbacks.push(e);
          }
          PushArrayRemove(e, t) {
            this.m_vecCallbacks.push(() => a.Zf(e, t));
          }
          Unregister() {
            for (const e of this.m_vecCallbacks) e();
            this.m_vecCallbacks = [];
          }
          GetUnregisterFunc() {
            return this.Unregister;
          }
        }
        (0, i.gn)([r.a], d.prototype, "Unregister", null);
      },
      625: (e, t, n) => {
        "VALVE_PUBLIC_PATH" in window
          ? (n.p = window.VALVE_PUBLIC_PATH)
          : console.error(
              "VALVE_PUBLIC_PATH not defined; check for a call to CHTMLHelpers::WebpackConfigScriptlet",
            ),
          console.assert(
            123 === Array.from(new Set([123]))[0],
            "Should not include prototypejs.",
          );
      },
      311: (e) => {
        e.exports = jQuery;
      },
      556: (e, t, n) => {
        n.d(t, { _T: () => i, gn: () => a, mG: () => r });
        function i(e, t) {
          var n = {};
          for (var i in e)
            Object.prototype.hasOwnProperty.call(e, i) &&
              t.indexOf(i) < 0 &&
              (n[i] = e[i]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var a = 0;
            for (i = Object.getOwnPropertySymbols(e); a < i.length; a++)
              t.indexOf(i[a]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, i[a]) &&
                (n[i[a]] = e[i[a]]);
          }
          return n;
        }
        function a(e, t, n, i) {
          var a,
            r = arguments.length,
            o =
              r < 3
                ? t
                : null === i
                ? (i = Object.getOwnPropertyDescriptor(t, n))
                : i;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            o = Reflect.decorate(e, t, n, i);
          else
            for (var s = e.length - 1; s >= 0; s--)
              (a = e[s]) &&
                (o = (r < 3 ? a(o) : r > 3 ? a(t, n, o) : a(t, n)) || o);
          return r > 3 && o && Object.defineProperty(t, n, o), o;
        }
        function r(e, t, n, i) {
          return new (n || (n = Promise))(function (a, r) {
            function o(e) {
              try {
                c(i.next(e));
              } catch (e) {
                r(e);
              }
            }
            function s(e) {
              try {
                c(i.throw(e));
              } catch (e) {
                r(e);
              }
            }
            function c(e) {
              var t;
              e.done
                ? a(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(o, s);
            }
            c((i = i.apply(e, t || [])).next());
          });
        }
        Object.create;
        Object.create;
        "function" == typeof SuppressedError && SuppressedError;
      },
    },
    i = {};
  function a(e) {
    var t = i[e];
    if (void 0 !== t) return t.exports;
    var r = (i[e] = { exports: {} });
    return n[e](r, r.exports, a), r.exports;
  }
  (a.m = n),
    (a.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return a.d(t, { a: t }), t;
    }),
    (a.d = (e, t) => {
      for (var n in t)
        a.o(t, n) &&
          !a.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    (a.f = {}),
    (a.e = (e) =>
      Promise.all(Object.keys(a.f).reduce((t, n) => (a.f[n](e, t), t), []))),
    (a.u = (e) =>
      "javascript/legacy_web/" +
      { 380: "desktop", 511: "gamepad" }[e] +
      ".js?contenthash=" +
      { 380: "2ab007f5611432473fa5", 511: "a5fc996aa57a0483ee98" }[e]),
    (a.miniCssF = (e) =>
      "css/legacy_web/gamepad.css?contenthash=be44dba8ea7ddd48708c"),
    (a.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (a.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (e = {}),
    (t = "legacy_web:"),
    (a.l = (n, i, r, o) => {
      if (e[n]) e[n].push(i);
      else {
        var s, c;
        if (void 0 !== r)
          for (
            var l = document.getElementsByTagName("script"), u = 0;
            u < l.length;
            u++
          ) {
            var p = l[u];
            if (
              p.getAttribute("src") == n ||
              p.getAttribute("data-webpack") == t + r
            ) {
              s = p;
              break;
            }
          }
        s ||
          ((c = !0),
          ((s = document.createElement("script")).charset = "utf-8"),
          (s.timeout = 120),
          a.nc && s.setAttribute("nonce", a.nc),
          s.setAttribute("data-webpack", t + r),
          (s.src = n)),
          (e[n] = [i]);
        var d = (t, i) => {
            (s.onerror = s.onload = null), clearTimeout(h);
            var a = e[n];
            if (
              (delete e[n],
              s.parentNode && s.parentNode.removeChild(s),
              a && a.forEach((e) => e(i)),
              t)
            )
              return t(i);
          },
          h = setTimeout(
            d.bind(null, void 0, { type: "timeout", target: s }),
            12e4,
          );
        (s.onerror = d.bind(null, s.onerror)),
          (s.onload = d.bind(null, s.onload)),
          c && document.head.appendChild(s);
      }
    }),
    (a.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (() => {
      var e;
      a.g.importScripts && (e = a.g.location + "");
      var t = a.g.document;
      if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
        var n = t.getElementsByTagName("script");
        if (n.length) for (var i = n.length - 1; i > -1 && !e; ) e = n[i--].src;
      }
      if (!e)
        throw new Error(
          "Automatic publicPath is not supported in this browser",
        );
      (e = e
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (a.p = e + "../../");
    })(),
    (() => {
      if ("undefined" != typeof document) {
        var e = (e) =>
            new Promise((t, n) => {
              var i = a.miniCssF(e),
                r = a.p + i;
              if (
                ((e, t) => {
                  for (
                    var n = document.getElementsByTagName("link"), i = 0;
                    i < n.length;
                    i++
                  ) {
                    var a =
                      (o = n[i]).getAttribute("data-href") ||
                      o.getAttribute("href");
                    if ("stylesheet" === o.rel && (a === e || a === t))
                      return o;
                  }
                  var r = document.getElementsByTagName("style");
                  for (i = 0; i < r.length; i++) {
                    var o;
                    if (
                      (a = (o = r[i]).getAttribute("data-href")) === e ||
                      a === t
                    )
                      return o;
                  }
                })(i, r)
              )
                return t();
              ((e, t, n, i, a) => {
                var r = document.createElement("link");
                (r.rel = "stylesheet"),
                  (r.type = "text/css"),
                  (r.onerror = r.onload =
                    (n) => {
                      if (((r.onerror = r.onload = null), "load" === n.type))
                        i();
                      else {
                        var o = n && n.type,
                          s = (n && n.target && n.target.href) || t,
                          c = new Error(
                            "Loading CSS chunk " +
                              e +
                              " failed.\n(" +
                              o +
                              ": " +
                              s +
                              ")",
                          );
                        (c.name = "ChunkLoadError"),
                          (c.code = "CSS_CHUNK_LOAD_FAILED"),
                          (c.type = o),
                          (c.request = s),
                          r.parentNode && r.parentNode.removeChild(r),
                          a(c);
                      }
                    }),
                  (r.href = t),
                  n
                    ? n.parentNode.insertBefore(r, n.nextSibling)
                    : document.head.appendChild(r);
              })(e, r, null, t, n);
            }),
          t = { 179: 0 };
        a.f.miniCss = (n, i) => {
          t[n]
            ? i.push(t[n])
            : 0 !== t[n] &&
              { 511: 1 }[n] &&
              i.push(
                (t[n] = e(n).then(
                  () => {
                    t[n] = 0;
                  },
                  (e) => {
                    throw (delete t[n], e);
                  },
                )),
              );
        };
      }
    })(),
    (() => {
      var e = { 179: 0 };
      a.f.j = (t, n) => {
        var i = a.o(e, t) ? e[t] : void 0;
        if (0 !== i)
          if (i) n.push(i[2]);
          else {
            var r = new Promise((n, a) => (i = e[t] = [n, a]));
            n.push((i[2] = r));
            var o = a.p + a.u(t),
              s = new Error();
            a.l(
              o,
              (n) => {
                if (a.o(e, t) && (0 !== (i = e[t]) && (e[t] = void 0), i)) {
                  var r = n && ("load" === n.type ? "missing" : n.type),
                    o = n && n.target && n.target.src;
                  (s.message =
                    "Loading chunk " + t + " failed.\n(" + r + ": " + o + ")"),
                    (s.name = "ChunkLoadError"),
                    (s.type = r),
                    (s.request = o),
                    i[1](s);
                }
              },
              "chunk-" + t,
              t,
            );
          }
      };
      var t = (t, n) => {
          var i,
            r,
            [o, s, c] = n,
            l = 0;
          if (o.some((t) => 0 !== e[t])) {
            for (i in s) a.o(s, i) && (a.m[i] = s[i]);
            if (c) c(a);
          }
          for (t && t(n); l < o.length; l++)
            (r = o[l]), a.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
        },
        n = (self.webpackChunklegacy_web = self.webpackChunklegacy_web || []);
      n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
    })(),
    (() => {
      var e = a(556),
        t = (a(625), a(311)),
        n = a.n(t),
        i = a(339),
        r = a(850);
      let o = [
        { index: 0, type: i.eV.OK, category: "action" },
        { index: 1, type: i.eV.CANCEL, category: "action" },
        { index: 2, type: i.eV.SECONDARY, category: "action" },
        { index: 3, type: i.eV.OPTIONS, category: "action" },
        { index: 4, type: i.eV.BUMPER_LEFT, category: "action" },
        { index: 5, type: i.eV.BUMPER_RIGHT, category: "action" },
        { index: 6, type: i.eV.TRIGGER_LEFT, category: "action" },
        { index: 7, type: i.eV.TRIGGER_RIGHT, category: "action" },
        { index: 8, type: i.eV.SELECT, category: "action" },
        { index: 9, type: i.eV.START, category: "action" },
        { index: 10, type: i.eV.LSTICK_CLICK, category: "action" },
        { index: 11, type: i.eV.RSTICK_CLICK, category: "action" },
        { index: 12, type: i.eV.DIR_UP, category: "navigation" },
        { index: 13, type: i.eV.DIR_DOWN, category: "navigation" },
        { index: 14, type: i.eV.DIR_LEFT, category: "navigation" },
        { index: 15, type: i.eV.DIR_RIGHT, category: "navigation" },
        { index: 16, type: i.eV.STEAM_GUIDE, category: "action" },
        { index: 17, type: i.eV.SELECT, category: "action" },
      ];
      class s extends i.oH {
        constructor() {
          super(),
            (this.m_rgGamepadStatus = []),
            this.SetSourceType(i.Rr.GAMEPAD),
            window.addEventListener("gamepadconnected", (e) => {
              this.m_bGamepadDetected ||
                (this.OnGamepadDetected(), this.PollGamepads());
            });
        }
        PollGamepads() {
          let e = navigator.getGamepads(),
            t = !1;
          for (let n = 0; n < e.length; n++) {
            let i = e[n];
            if (!i) continue;
            this.m_rgGamepadStatus[n] ||
              (this.m_rgGamepadStatus[n] = { buttons: [] });
            let a = this.m_rgGamepadStatus[n];
            for (let e = 0; e < o.length; e++) {
              let n = o[e],
                r = n.index;
              i.buttons[r] &&
                (i.buttons[r].pressed
                  ? ((t = !0),
                    a.buttons[r] ||
                      ((a.buttons[r] = !0), this.OnButtonDown(n.type)))
                  : a.buttons[r] &&
                    (this.OnButtonUp(n.type), (a.buttons[r] = !1)));
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
      (0, e.gn)([r.a], s.prototype, "PollGamepads", null),
        (0, e.gn)([r.a], s.prototype, "OnWindowRegainedFocus", null);
      var c = a(120);
      function l(t) {
        return (0, e.mG)(this, void 0, void 0, function* () {
          const { InitializeGamepadNavigation: e } = yield a
            .e(511)
            .then(a.bind(a, 543));
          e(t);
        });
      }
      a.p.endsWith("shared/") || (a.p = a.p + "shared/"),
        n()(function () {
          !(function () {
            const t = new s();
            navigator.userAgent.includes("Valve Steam Gamepad")
              ? l(t)
              : (0, c.U5)("BrowserView.RegisterForMessageFromParent") &&
                (0, c.U5)("BrowserView.PostMessageToParent")
              ? (function () {
                  (0, e.mG)(this, void 0, void 0, function* () {
                    const { InitializeForDesktop: e } = yield a
                      .e(380)
                      .then(a.bind(a, 464));
                    e();
                  });
                })()
              : t.RegisterForGamepadDetected(() => l(t));
          })();
        });
    })();
})();

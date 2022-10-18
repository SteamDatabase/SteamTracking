/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "7591909";
(() => {
  "use strict";
  var e,
    t,
    n,
    a,
    i = {
      792: (e, t, n) => {
        n.d(t, { B: () => s });
        var a = n(655),
          i = n(810),
          r = n(61);
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
              let a = e[n];
              if (!a) continue;
              this.m_rgGamepadStatus[n] ||
                (this.m_rgGamepadStatus[n] = { buttons: [] });
              let i = this.m_rgGamepadStatus[n];
              for (let e = 0; e < o.length; e++) {
                let n = o[e],
                  r = n.index;
                a.buttons[r] &&
                  (a.buttons[r].pressed
                    ? ((t = !0),
                      i.buttons[r] ||
                        ((i.buttons[r] = !0), this.OnButtonDown(n.type)))
                    : i.buttons[r] &&
                      (this.OnButtonUp(n.type), (i.buttons[r] = !1)));
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
        (0, a.gn)([r.a], s.prototype, "PollGamepads", null),
          (0, a.gn)([r.a], s.prototype, "OnWindowRegainedFocus", null);
      },
      810: (e, t, n) => {
        n.d(t, { eV: () => a, Rr: () => i, oH: () => c });
        var a,
          i,
          r = n(664);
        class o {
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
        class s {
          constructor(e) {
            (this.m_config = e), (this.m_inputRepeatGenerator = new o(e));
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
        })(a || (a = {})),
          (function (e) {
            (e[(e.UNKNOWN = 0)] = "UNKNOWN"),
              (e[(e.GAMEPAD = 1)] = "GAMEPAD"),
              (e[(e.KEYBOARD = 2)] = "KEYBOARD"),
              (e[(e.MOUSE = 3)] = "MOUSE"),
              (e[(e.TOUCH = 4)] = "TOUCH"),
              (e[(e.LPAD = 5)] = "LPAD"),
              (e[(e.RPAD = 6)] = "RPAD");
          })(i || (i = {}));
        class c {
          constructor() {
            (this.m_OnGamepadDetectedCallbacks = new r.pB()),
              (this.m_ButtonDownCallbacks = new r.pB()),
              (this.m_ButtonUpCallbacks = new r.pB()),
              (this.m_AnalogCallbacks = new r.pB()),
              (this.m_NavigationTypeChangeCallbacks = new r.pB()),
              (this.m_nLastActiveControllerIndex = -1),
              (this.m_ButtonRepeatHandler = new s({
                inputsThatRepeat: new Set([
                  a.DIR_UP,
                  a.DIR_DOWN,
                  a.DIR_LEFT,
                  a.DIR_RIGHT,
                ]),
                firstRepeatInterval_ms: 500,
                repeatInterval_ms: 125,
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
          OnAnalogPad(e, t, n, a) {
            void 0 === a && (a = -1),
              this.SetControllerActive(a),
              this.m_AnalogCallbacks.Dispatch(
                e,
                this.m_nLastActiveControllerIndex,
                t,
                n
              );
          }
          OnNavigationTypeChanged(e) {
            this.m_NavigationTypeChangeCallbacks.Dispatch(e);
          }
        }
      },
      204: (e, t, n) => {
        function a(e, t) {
          return (function (e, t) {
            let n = e.findIndex(t);
            return n >= 0 && (e.splice(n, 1), !0);
          })(e, (e) => t == e);
        }
        n.d(t, { Zf: () => a });
      },
      61: (e, t, n) => {
        function a(e, t, n) {
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
        n.d(t, { a: () => a });
      },
      664: (e, t, n) => {
        n.d(t, { pB: () => o, vq: () => c });
        var a = n(655),
          i = n(204),
          r = n(61);
        class o {
          constructor() {
            this.m_vecCallbacks = [];
          }
          Register(e) {
            this.m_vecCallbacks.push(e);
            return {
              Unregister: () => {
                i.Zf(this.m_vecCallbacks, e);
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
            (this.m_callbacks = new o()), (this.m_currentValue = e);
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
        function c(e) {
          return new s(e);
        }
        (0, a.gn)(
          [r.a],
          class {
            Schedule(e, t) {
              this.IsScheduled() && this.Cancel(),
                (this.m_fnCallback = t),
                (this.m_schTimer = window.setTimeout(
                  this.ScheduledInternal,
                  e
                ));
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
          }.prototype,
          "ScheduledInternal",
          null
        );
      },
      279: (e, t, n) => {
        "VALVE_PUBLIC_PATH" in window
          ? (n.p = window.VALVE_PUBLIC_PATH)
          : console.error(
              "VALVE_PUBLIC_PATH not defined; check for a call to CHTMLHelpers::WebpackConfigScriptlet"
            ),
          console.assert(
            123 === Array.from(new Set([123]))[0],
            "Should not include prototypejs."
          );
      },
      655: (e, t, n) => {
        n.d(t, { _T: () => a, gn: () => i, mG: () => r });
        function a(e, t) {
          var n = {};
          for (var a in e)
            Object.prototype.hasOwnProperty.call(e, a) &&
              t.indexOf(a) < 0 &&
              (n[a] = e[a]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var i = 0;
            for (a = Object.getOwnPropertySymbols(e); i < a.length; i++)
              t.indexOf(a[i]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, a[i]) &&
                (n[a[i]] = e[a[i]]);
          }
          return n;
        }
        function i(e, t, n, a) {
          var i,
            r = arguments.length,
            o =
              r < 3
                ? t
                : null === a
                ? (a = Object.getOwnPropertyDescriptor(t, n))
                : a;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            o = Reflect.decorate(e, t, n, a);
          else
            for (var s = e.length - 1; s >= 0; s--)
              (i = e[s]) &&
                (o = (r < 3 ? i(o) : r > 3 ? i(t, n, o) : i(t, n)) || o);
          return r > 3 && o && Object.defineProperty(t, n, o), o;
        }
        function r(e, t, n, a) {
          return new (n || (n = Promise))(function (i, r) {
            function o(e) {
              try {
                c(a.next(e));
              } catch (e) {
                r(e);
              }
            }
            function s(e) {
              try {
                c(a.throw(e));
              } catch (e) {
                r(e);
              }
            }
            function c(e) {
              var t;
              e.done
                ? i(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(o, s);
            }
            c((a = a.apply(e, t || [])).next());
          });
        }
        Object.create;
        Object.create;
      },
      311: (e) => {
        e.exports = jQuery;
      },
    },
    r = {};
  function o(e) {
    var t = r[e];
    if (void 0 !== t) return t.exports;
    var n = (r[e] = { exports: {} });
    return i[e](n, n.exports, o), n.exports;
  }
  (o.m = i),
    (o.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return o.d(t, { a: t }), t;
    }),
    (o.d = (e, t) => {
      for (var n in t)
        o.o(t, n) &&
          !o.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    (o.f = {}),
    (o.e = (e) =>
      Promise.all(Object.keys(o.f).reduce((t, n) => (o.f[n](e, t), t), []))),
    (o.u = (e) =>
      "javascript/legacy_web/gamepad.js?contenthash=bc7979eb2456b2e5b43b"),
    (o.miniCssF = (e) =>
      "css/legacy_web/gamepad.css?contenthash=6e6111865655343f0b1a"),
    (o.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (e = {}),
    (t = "legacy_web:"),
    (o.l = (n, a, i, r) => {
      if (e[n]) e[n].push(a);
      else {
        var s, c;
        if (void 0 !== i)
          for (
            var l = document.getElementsByTagName("script"), u = 0;
            u < l.length;
            u++
          ) {
            var d = l[u];
            if (
              d.getAttribute("src") == n ||
              d.getAttribute("data-webpack") == t + i
            ) {
              s = d;
              break;
            }
          }
        s ||
          ((c = !0),
          ((s = document.createElement("script")).charset = "utf-8"),
          (s.timeout = 120),
          o.nc && s.setAttribute("nonce", o.nc),
          s.setAttribute("data-webpack", t + i),
          (s.src = n)),
          (e[n] = [a]);
        var p = (t, a) => {
            (s.onerror = s.onload = null), clearTimeout(h);
            var i = e[n];
            if (
              (delete e[n],
              s.parentNode && s.parentNode.removeChild(s),
              i && i.forEach((e) => e(a)),
              t)
            )
              return t(a);
          },
          h = setTimeout(
            p.bind(null, void 0, { type: "timeout", target: s }),
            12e4
          );
        (s.onerror = p.bind(null, s.onerror)),
          (s.onload = p.bind(null, s.onload)),
          c && document.head.appendChild(s);
      }
    }),
    (o.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (() => {
      var e;
      o.g.importScripts && (e = o.g.location + "");
      var t = o.g.document;
      if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
        var n = t.getElementsByTagName("script");
        n.length && (e = n[n.length - 1].src);
      }
      if (!e)
        throw new Error(
          "Automatic publicPath is not supported in this browser"
        );
      (e = e
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (o.p = e + "../../");
    })(),
    (n = (e) =>
      new Promise((t, n) => {
        var a = o.miniCssF(e),
          i = o.p + a;
        if (
          ((e, t) => {
            for (
              var n = document.getElementsByTagName("link"), a = 0;
              a < n.length;
              a++
            ) {
              var i =
                (o = n[a]).getAttribute("data-href") || o.getAttribute("href");
              if ("stylesheet" === o.rel && (i === e || i === t)) return o;
            }
            var r = document.getElementsByTagName("style");
            for (a = 0; a < r.length; a++) {
              var o;
              if ((i = (o = r[a]).getAttribute("data-href")) === e || i === t)
                return o;
            }
          })(a, i)
        )
          return t();
        ((e, t, n, a) => {
          var i = document.createElement("link");
          (i.rel = "stylesheet"),
            (i.type = "text/css"),
            (i.onerror = i.onload =
              (r) => {
                if (((i.onerror = i.onload = null), "load" === r.type)) n();
                else {
                  var o = r && ("load" === r.type ? "missing" : r.type),
                    s = (r && r.target && r.target.href) || t,
                    c = new Error(
                      "Loading CSS chunk " + e + " failed.\n(" + s + ")"
                    );
                  (c.code = "CSS_CHUNK_LOAD_FAILED"),
                    (c.type = o),
                    (c.request = s),
                    i.parentNode.removeChild(i),
                    a(c);
                }
              }),
            (i.href = t),
            document.head.appendChild(i);
        })(e, i, t, n);
      })),
    (a = { 179: 0 }),
    (o.f.miniCss = (e, t) => {
      a[e]
        ? t.push(a[e])
        : 0 !== a[e] &&
          { 511: 1 }[e] &&
          t.push(
            (a[e] = n(e).then(
              () => {
                a[e] = 0;
              },
              (t) => {
                throw (delete a[e], t);
              }
            ))
          );
    }),
    (() => {
      var e = { 179: 0 };
      o.f.j = (t, n) => {
        var a = o.o(e, t) ? e[t] : void 0;
        if (0 !== a)
          if (a) n.push(a[2]);
          else {
            var i = new Promise((n, i) => (a = e[t] = [n, i]));
            n.push((a[2] = i));
            var r = o.p + o.u(t),
              s = new Error();
            o.l(
              r,
              (n) => {
                if (o.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
                  var i = n && ("load" === n.type ? "missing" : n.type),
                    r = n && n.target && n.target.src;
                  (s.message =
                    "Loading chunk " + t + " failed.\n(" + i + ": " + r + ")"),
                    (s.name = "ChunkLoadError"),
                    (s.type = i),
                    (s.request = r),
                    a[1](s);
                }
              },
              "chunk-" + t,
              t
            );
          }
      };
      var t = (t, n) => {
          var a,
            i,
            [r, s, c] = n,
            l = 0;
          if (r.some((t) => 0 !== e[t])) {
            for (a in s) o.o(s, a) && (o.m[a] = s[a]);
            if (c) c(o);
          }
          for (t && t(n); l < r.length; l++)
            (i = r[l]), o.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
        },
        n = (self.webpackChunklegacy_web = self.webpackChunklegacy_web || []);
      n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
    })(),
    (() => {
      var e = o(655),
        t = (o(279), o(311)),
        n = o.n(t),
        a = o(792);
      function i(t) {
        return (0, e.mG)(this, void 0, void 0, function* () {
          const { InitializeGamepadNavigation: e } = yield o
            .e(511)
            .then(o.bind(o, 141));
          e(t);
        });
      }
      o.p.endsWith("shared/") || (o.p = o.p + "shared/"),
        n()(function () {
          !(function () {
            const e = new a.B();
            navigator.userAgent.includes("Valve Steam Gamepad")
              ? i(e)
              : e.RegisterForGamepadDetected(() => i(e));
          })();
        });
    })();
})();

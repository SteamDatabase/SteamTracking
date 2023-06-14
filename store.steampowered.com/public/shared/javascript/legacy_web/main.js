/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "8127728";
(() => {
  "use strict";
  var e,
    t,
    n,
    i,
    a = {
      113: (e, t, n) => {
        n.d(t, { eV: () => i, Rr: () => a, oH: () => c });
        var i,
          a,
          r = n(359);
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
        })(i || (i = {})),
          (function (e) {
            (e[(e.UNKNOWN = 0)] = "UNKNOWN"),
              (e[(e.GAMEPAD = 1)] = "GAMEPAD"),
              (e[(e.KEYBOARD = 2)] = "KEYBOARD"),
              (e[(e.MOUSE = 3)] = "MOUSE"),
              (e[(e.TOUCH = 4)] = "TOUCH"),
              (e[(e.LPAD = 5)] = "LPAD"),
              (e[(e.RPAD = 6)] = "RPAD");
          })(a || (a = {}));
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
                  i.DIR_UP,
                  i.DIR_DOWN,
                  i.DIR_LEFT,
                  i.DIR_RIGHT,
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
          OnAnalogPad(e, t, n, i) {
            void 0 === i && (i = -1),
              this.SetControllerActive(i),
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
      718: (e, t, n) => {
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
      513: (e, t, n) => {
        function i(e, t) {
          return (function (e, t) {
            let n = e.findIndex(t);
            return n >= 0 && (e.splice(n, 1), !0);
          })(e, (e) => t == e);
        }
        n.d(t, { Zf: () => i });
      },
      163: (e, t, n) => {
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
      359: (e, t, n) => {
        n.d(t, { Ar: () => l, Hf: () => u, pB: () => o, vq: () => c });
        var i = n(655),
          a = n(513),
          r = n(163);
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
        (0, i.gn)([r.a], l.prototype, "ScheduledInternal", null);
        class u {
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
            for (let e of this.m_vecCallbacks) e();
            this.m_vecCallbacks = [];
          }
          GetUnregisterFunc() {
            return this.Unregister;
          }
        }
        (0, i.gn)([r.a], u.prototype, "Unregister", null);
      },
      970: (e, t, n) => {
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
    return a[e](n, n.exports, o), n.exports;
  }
  (o.m = a),
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
      "javascript/legacy_web/" +
      { 380: "desktop", 511: "gamepad" }[e] +
      ".js?contenthash=" +
      { 380: "56af335d67f278faffc1", 511: "b24e1fa02093474b9323" }[e]),
    (o.miniCssF = (e) =>
      "css/legacy_web/gamepad.css?contenthash=be44dba8ea7ddd48708c"),
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
    (o.l = (n, i, a, r) => {
      if (e[n]) e[n].push(i);
      else {
        var s, c;
        if (void 0 !== a)
          for (
            var l = document.getElementsByTagName("script"), u = 0;
            u < l.length;
            u++
          ) {
            var d = l[u];
            if (
              d.getAttribute("src") == n ||
              d.getAttribute("data-webpack") == t + a
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
          s.setAttribute("data-webpack", t + a),
          (s.src = n)),
          (e[n] = [i]);
        var p = (t, i) => {
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
        var i = o.miniCssF(e),
          a = o.p + i;
        if (
          ((e, t) => {
            for (
              var n = document.getElementsByTagName("link"), i = 0;
              i < n.length;
              i++
            ) {
              var a =
                (o = n[i]).getAttribute("data-href") || o.getAttribute("href");
              if ("stylesheet" === o.rel && (a === e || a === t)) return o;
            }
            var r = document.getElementsByTagName("style");
            for (i = 0; i < r.length; i++) {
              var o;
              if ((a = (o = r[i]).getAttribute("data-href")) === e || a === t)
                return o;
            }
          })(i, a)
        )
          return t();
        ((e, t, n, i) => {
          var a = document.createElement("link");
          (a.rel = "stylesheet"),
            (a.type = "text/css"),
            (a.onerror = a.onload =
              (r) => {
                if (((a.onerror = a.onload = null), "load" === r.type)) n();
                else {
                  var o = r && ("load" === r.type ? "missing" : r.type),
                    s = (r && r.target && r.target.href) || t,
                    c = new Error(
                      "Loading CSS chunk " + e + " failed.\n(" + s + ")"
                    );
                  (c.code = "CSS_CHUNK_LOAD_FAILED"),
                    (c.type = o),
                    (c.request = s),
                    a.parentNode.removeChild(a),
                    i(c);
                }
              }),
            (a.href = t),
            document.head.appendChild(a);
        })(e, a, t, n);
      })),
    (i = { 179: 0 }),
    (o.f.miniCss = (e, t) => {
      i[e]
        ? t.push(i[e])
        : 0 !== i[e] &&
          { 511: 1 }[e] &&
          t.push(
            (i[e] = n(e).then(
              () => {
                i[e] = 0;
              },
              (t) => {
                throw (delete i[e], t);
              }
            ))
          );
    }),
    (() => {
      var e = { 179: 0 };
      o.f.j = (t, n) => {
        var i = o.o(e, t) ? e[t] : void 0;
        if (0 !== i)
          if (i) n.push(i[2]);
          else {
            var a = new Promise((n, a) => (i = e[t] = [n, a]));
            n.push((i[2] = a));
            var r = o.p + o.u(t),
              s = new Error();
            o.l(
              r,
              (n) => {
                if (o.o(e, t) && (0 !== (i = e[t]) && (e[t] = void 0), i)) {
                  var a = n && ("load" === n.type ? "missing" : n.type),
                    r = n && n.target && n.target.src;
                  (s.message =
                    "Loading chunk " + t + " failed.\n(" + a + ": " + r + ")"),
                    (s.name = "ChunkLoadError"),
                    (s.type = a),
                    (s.request = r),
                    i[1](s);
                }
              },
              "chunk-" + t,
              t
            );
          }
      };
      var t = (t, n) => {
          var i,
            a,
            [r, s, c] = n,
            l = 0;
          if (r.some((t) => 0 !== e[t])) {
            for (i in s) o.o(s, i) && (o.m[i] = s[i]);
            if (c) c(o);
          }
          for (t && t(n); l < r.length; l++)
            (a = r[l]), o.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
        },
        n = (self.webpackChunklegacy_web = self.webpackChunklegacy_web || []);
      n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
    })(),
    (() => {
      var e = o(655),
        t = (o(970), o(311)),
        n = o.n(t),
        i = o(113),
        a = o(163);
      let r = [
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
            for (let e = 0; e < r.length; e++) {
              let n = r[e],
                o = n.index;
              i.buttons[o] &&
                (i.buttons[o].pressed
                  ? ((t = !0),
                    a.buttons[o] ||
                      ((a.buttons[o] = !0), this.OnButtonDown(n.type)))
                  : a.buttons[o] &&
                    (this.OnButtonUp(n.type), (a.buttons[o] = !1)));
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
      (0, e.gn)([a.a], s.prototype, "PollGamepads", null),
        (0, e.gn)([a.a], s.prototype, "OnWindowRegainedFocus", null);
      var c = o(718);
      function l(t) {
        return (0, e.mG)(this, void 0, void 0, function* () {
          const { InitializeGamepadNavigation: e } = yield o
            .e(511)
            .then(o.bind(o, 263));
          e(t);
        });
      }
      o.p.endsWith("shared/") || (o.p = o.p + "shared/"),
        n()(function () {
          !(function () {
            const t = new s();
            navigator.userAgent.includes("Valve Steam Gamepad")
              ? l(t)
              : (0, c.U5)("BrowserView.RegisterForMessageFromParent") &&
                (0, c.U5)("BrowserView.PostMessageToParent")
              ? (function () {
                  (0, e.mG)(this, void 0, void 0, function* () {
                    const { InitializeForDesktop: e } = yield o
                      .e(380)
                      .then(o.bind(o, 211));
                    e();
                  });
                })()
              : t.RegisterForGamepadDetected(() => l(t));
          })();
        });
    })();
})();

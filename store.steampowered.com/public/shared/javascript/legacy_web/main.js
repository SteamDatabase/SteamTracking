/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "9005420";
(() => {
  "use strict";
  var e,
    t,
    n = {
      927: (e, t, n) => {
        n.d(t, { eV: () => i, Rr: () => r, oH: () => l });
        var a,
          i,
          r,
          s = n(814);
        class o {
          m_ActiveInputId;
          m_ActiveInputTimeout;
          m_config;
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
        })(a || (a = {}));
        class c {
          m_config;
          m_inputRepeatGenerator;
          m_repeatOnAxis = a.None;
          m_bRepeatEnabled = !0;
          constructor(e) {
            (this.m_config = e), (this.m_inputRepeatGenerator = new o(e));
          }
          Reset() {
            this.m_inputRepeatGenerator.Reset();
          }
          SetEnabled(e) {
            (this.m_bRepeatEnabled = e), this.m_bRepeatEnabled || this.Reset();
          }
          HandleInputButtonDown(e, t, n) {
            this.m_bRepeatEnabled && this.m_config.inputsThatRepeat.has(e)
              ? this.m_repeatOnAxis == a.None &&
                ((e != i.DIR_UP && e != i.DIR_DOWN) ||
                  (this.m_repeatOnAxis = a.Vertical),
                (e != i.DIR_LEFT && e != i.DIR_RIGHT) ||
                  (this.m_repeatOnAxis = a.Horizontal),
                t(),
                this.m_inputRepeatGenerator.HandleInputButtonDown(e, n))
              : (t(), this.m_inputRepeatGenerator.Reset());
          }
          HandleInputButtonUp(e) {
            if (
              this.m_config.inputsThatRepeat.has(e) &&
              this.m_repeatOnAxis != a.None
            ) {
              const t = e == i.DIR_UP || e == i.DIR_DOWN,
                n = e == i.DIR_LEFT || e == i.DIR_RIGHT;
              ((this.m_repeatOnAxis == a.Vertical && t) ||
                (this.m_repeatOnAxis == a.Horizontal && n)) &&
                ((this.m_repeatOnAxis = a.None),
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
        })(i || (i = {})),
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
          m_OnGamepadDetectedCallbacks = new s.pB();
          m_ButtonDownCallbacks = new s.pB();
          m_ButtonUpCallbacks = new s.pB();
          m_AnalogCallbacks = new s.pB();
          m_NavigationTypeChangeCallbacks = new s.pB();
          m_eNavigationSourceType;
          m_fLastActiveTime;
          m_nLastActiveControllerIndex = -1;
          m_ButtonRepeatHandler = new c({
            inputsThatRepeat: new Set([
              i.DIR_UP,
              i.DIR_DOWN,
              i.DIR_LEFT,
              i.DIR_RIGHT,
            ]),
            firstRepeatInterval_ms: 400,
            repeatInterval_ms: 50,
          });
          m_bGamepadDetected = !1;
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
          OnAnalogPad(e, t, n, a) {
            void 0 === a && (a = -1),
              this.SetControllerActive(a),
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
      377: (e, t, n) => {
        function a(e, t) {
          return !!e && "object" == typeof e.SteamClient && t in e.SteamClient;
        }
        function i(e) {
          return (function (e, t) {
            if (!e) return !1;
            const [n, i] = t.split(".", 2);
            return n && i && a(e, n) && i in e.SteamClient[n];
          })(window, e);
        }
        n.d(t, { U5: () => i });
      },
      221: (e, t, n) => {
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
      814: (e, t, n) => {
        n.d(t, {
          pB: () => s,
          Ar: () => p,
          Hf: () => m,
          vq: () => c,
          km: () => u,
        });
        var a = n(556),
          i = n(598),
          r = n(221);
        class s {
          m_vecCallbacks = [];
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
        class o {
          m_callbacks;
          m_currentValue;
          m_fnEquals;
          constructor(e, t) {
            (this.m_callbacks = new s()),
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
          return new o(e, t);
        }
        class l {
          m_fnMap;
          m_originalSubscribableValue;
          m_mappedSubscribableValue;
          m_mappedUnsubscribe;
          m_subscriptionRefCount = 0;
          constructor(e, t, n) {
            (this.m_originalSubscribableValue = e),
              (this.m_mappedSubscribableValue = new o(t(e.Value), n)),
              (this.m_fnMap = t);
          }
          get Value() {
            return this.m_mappedSubscribableValue?.Value;
          }
          Subscribe(e) {
            0 == this.m_subscriptionRefCount++ &&
              (this.m_mappedUnsubscribe =
                this.m_originalSubscribableValue.Subscribe((e) =>
                  this.m_mappedSubscribableValue.Set(this.m_fnMap(e)),
                ));
            const t = this.m_mappedSubscribableValue?.Subscribe(e);
            return {
              Unsubscribe: () => {
                t.Unsubscribe(),
                  0 == --this.m_subscriptionRefCount &&
                    (this.m_mappedUnsubscribe?.Unsubscribe(),
                    (this.m_mappedUnsubscribe = void 0));
              },
            };
          }
        }
        function u(e, t, n) {
          return new l(e, t, n);
        }
        class p {
          m_schTimer;
          m_fnCallback;
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
            (this.m_fnCallback = void 0), e?.();
          }
        }
        (0, a.gn)([r.a], p.prototype, "ScheduledInternal", null);
        class m {
          m_vecCallbacks = [];
          Push(e) {
            this.m_vecCallbacks.push(e);
          }
          PushArrayRemove(e, t) {
            this.m_vecCallbacks.push(() => i.Zf(e, t));
          }
          Unregister() {
            for (const e of this.m_vecCallbacks) e();
            this.m_vecCallbacks = [];
          }
          GetUnregisterFunc() {
            return this.Unregister;
          }
        }
        (0, a.gn)([r.a], m.prototype, "Unregister", null);
      },
      424: (e, t, n) => {
        "VALVE_PUBLIC_PATH" in window
          ? (n.p = window.VALVE_PUBLIC_PATH)
          : console.error(
              "VALVE_PUBLIC_PATH not defined; check for a call to CHTMLHelpers::WebpackConfigScriptlet",
            ),
          123 !== Array.from(new Set([123]))[0] &&
            console.error("Should not include prototypejs.");
      },
      598: (e, t, n) => {
        function a(e, t) {
          return (function (e, t) {
            const n = e.findIndex(t);
            return n >= 0 && (e.splice(n, 1), !0);
          })(e, (e) => t == e);
        }
        n.d(t, { Zf: () => a });
      },
      311: (e) => {
        e.exports = jQuery;
      },
      556: (e, t, n) => {
        n.d(t, { gn: () => a });
        function a(e, t, n, a) {
          var i,
            r = arguments.length,
            s =
              r < 3
                ? t
                : null === a
                  ? (a = Object.getOwnPropertyDescriptor(t, n))
                  : a;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            s = Reflect.decorate(e, t, n, a);
          else
            for (var o = e.length - 1; o >= 0; o--)
              (i = e[o]) &&
                (s = (r < 3 ? i(s) : r > 3 ? i(t, n, s) : i(t, n)) || s);
          return r > 3 && s && Object.defineProperty(t, n, s), s;
        }
        Object.create;
        Object.create;
        "function" == typeof SuppressedError && SuppressedError;
      },
    },
    a = {};
  function i(e) {
    var t = a[e];
    if (void 0 !== t) return t.exports;
    var r = (a[e] = { exports: {} });
    return n[e](r, r.exports, i), r.exports;
  }
  (i.m = n),
    (i.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return i.d(t, { a: t }), t;
    }),
    (i.d = (e, t) => {
      for (var n in t)
        i.o(t, n) &&
          !i.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    (i.f = {}),
    (i.e = (e) =>
      Promise.all(Object.keys(i.f).reduce((t, n) => (i.f[n](e, t), t), []))),
    (i.u = (e) =>
      "javascript/legacy_web/" +
      { 380: "desktop", 511: "gamepad" }[e] +
      ".js?contenthash=" +
      { 380: "12f047c410691f18bece", 511: "47512b2e7c77addaef8d" }[e]),
    (i.miniCssF = (e) =>
      "css/legacy_web/gamepad.css?contenthash=be44dba8ea7ddd48708c"),
    (i.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (i.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (e = {}),
    (t = "legacy_web:"),
    (i.l = (n, a, r, s) => {
      if (e[n]) e[n].push(a);
      else {
        var o, c;
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
              o = p;
              break;
            }
          }
        o ||
          ((c = !0),
          ((o = document.createElement("script")).charset = "utf-8"),
          (o.timeout = 120),
          i.nc && o.setAttribute("nonce", i.nc),
          o.setAttribute("data-webpack", t + r),
          (o.src = n)),
          (e[n] = [a]);
        var m = (t, a) => {
            (o.onerror = o.onload = null), clearTimeout(_);
            var i = e[n];
            if (
              (delete e[n],
              o.parentNode && o.parentNode.removeChild(o),
              i && i.forEach((e) => e(a)),
              t)
            )
              return t(a);
          },
          _ = setTimeout(
            m.bind(null, void 0, { type: "timeout", target: o }),
            12e4,
          );
        (o.onerror = m.bind(null, o.onerror)),
          (o.onload = m.bind(null, o.onload)),
          c && document.head.appendChild(o);
      }
    }),
    (() => {
      var e;
      i.g.importScripts && (e = i.g.location + "");
      var t = i.g.document;
      if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
        var n = t.getElementsByTagName("script");
        if (n.length) for (var a = n.length - 1; a > -1 && !e; ) e = n[a--].src;
      }
      if (!e)
        throw new Error(
          "Automatic publicPath is not supported in this browser",
        );
      (e = e
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (i.p = e + "../../");
    })(),
    (() => {
      if ("undefined" != typeof document) {
        var e = (e) =>
            new Promise((t, n) => {
              var a = i.miniCssF(e),
                r = i.p + a;
              if (
                ((e, t) => {
                  for (
                    var n = document.getElementsByTagName("link"), a = 0;
                    a < n.length;
                    a++
                  ) {
                    var i =
                      (s = n[a]).getAttribute("data-href") ||
                      s.getAttribute("href");
                    if ("stylesheet" === s.rel && (i === e || i === t))
                      return s;
                  }
                  var r = document.getElementsByTagName("style");
                  for (a = 0; a < r.length; a++) {
                    var s;
                    if (
                      (i = (s = r[a]).getAttribute("data-href")) === e ||
                      i === t
                    )
                      return s;
                  }
                })(a, r)
              )
                return t();
              ((e, t, n, a, i) => {
                var r = document.createElement("link");
                (r.rel = "stylesheet"),
                  (r.type = "text/css"),
                  (r.onerror = r.onload =
                    (n) => {
                      if (((r.onerror = r.onload = null), "load" === n.type))
                        a();
                      else {
                        var s = n && n.type,
                          o = (n && n.target && n.target.href) || t,
                          c = new Error(
                            "Loading CSS chunk " +
                              e +
                              " failed.\n(" +
                              s +
                              ": " +
                              o +
                              ")",
                          );
                        (c.name = "ChunkLoadError"),
                          (c.code = "CSS_CHUNK_LOAD_FAILED"),
                          (c.type = s),
                          (c.request = o),
                          r.parentNode && r.parentNode.removeChild(r),
                          i(c);
                      }
                    }),
                  (r.href = t),
                  n
                    ? n.parentNode.insertBefore(r, n.nextSibling)
                    : document.head.appendChild(r);
              })(e, r, null, t, n);
            }),
          t = { 179: 0 };
        i.f.miniCss = (n, a) => {
          t[n]
            ? a.push(t[n])
            : 0 !== t[n] &&
              { 511: 1 }[n] &&
              a.push(
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
      i.f.j = (t, n) => {
        var a = i.o(e, t) ? e[t] : void 0;
        if (0 !== a)
          if (a) n.push(a[2]);
          else {
            var r = new Promise((n, i) => (a = e[t] = [n, i]));
            n.push((a[2] = r));
            var s = i.p + i.u(t),
              o = new Error();
            i.l(
              s,
              (n) => {
                if (i.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
                  var r = n && ("load" === n.type ? "missing" : n.type),
                    s = n && n.target && n.target.src;
                  (o.message =
                    "Loading chunk " + t + " failed.\n(" + r + ": " + s + ")"),
                    (o.name = "ChunkLoadError"),
                    (o.type = r),
                    (o.request = s),
                    a[1](o);
                }
              },
              "chunk-" + t,
              t,
            );
          }
      };
      var t = (t, n) => {
          var a,
            r,
            [s, o, c] = n,
            l = 0;
          if (s.some((t) => 0 !== e[t])) {
            for (a in o) i.o(o, a) && (i.m[a] = o[a]);
            if (c) c(i);
          }
          for (t && t(n); l < s.length; l++)
            (r = s[l]), i.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
        },
        n = (self.webpackChunklegacy_web = self.webpackChunklegacy_web || []);
      n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
    })(),
    (() => {
      i(424);
      var e = i(311),
        t = i.n(e),
        n = i(556),
        a = i(927),
        r = i(221);
      let s = [
        { index: 0, type: a.eV.OK, category: "action" },
        { index: 1, type: a.eV.CANCEL, category: "action" },
        { index: 2, type: a.eV.SECONDARY, category: "action" },
        { index: 3, type: a.eV.OPTIONS, category: "action" },
        { index: 4, type: a.eV.BUMPER_LEFT, category: "action" },
        { index: 5, type: a.eV.BUMPER_RIGHT, category: "action" },
        { index: 6, type: a.eV.TRIGGER_LEFT, category: "action" },
        { index: 7, type: a.eV.TRIGGER_RIGHT, category: "action" },
        { index: 8, type: a.eV.SELECT, category: "action" },
        { index: 9, type: a.eV.START, category: "action" },
        { index: 10, type: a.eV.LSTICK_CLICK, category: "action" },
        { index: 11, type: a.eV.RSTICK_CLICK, category: "action" },
        { index: 12, type: a.eV.DIR_UP, category: "navigation" },
        { index: 13, type: a.eV.DIR_DOWN, category: "navigation" },
        { index: 14, type: a.eV.DIR_LEFT, category: "navigation" },
        { index: 15, type: a.eV.DIR_RIGHT, category: "navigation" },
        { index: 16, type: a.eV.STEAM_GUIDE, category: "action" },
        { index: 17, type: a.eV.SELECT, category: "action" },
      ];
      class o extends a.oH {
        m_rgGamepadStatus = [];
        constructor() {
          super(),
            this.SetSourceType(a.Rr.GAMEPAD),
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
            for (let e = 0; e < s.length; e++) {
              let n = s[e],
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
          requestAnimationFrame(this.PollGamepads);
        }
      }
      (0, n.gn)([r.a], o.prototype, "PollGamepads", null);
      var c = i(377);
      async function l(e) {
        const { InitializeGamepadNavigation: t } = await i
          .e(511)
          .then(i.bind(i, 858));
        t(e);
      }
      i.p.endsWith("shared/") || (i.p = i.p + "shared/"),
        t()(function () {
          !(function () {
            const e = new o();
            navigator.userAgent.includes("Valve Steam Gamepad")
              ? l(e)
              : (0, c.U5)("BrowserView.RegisterForMessageFromParent") &&
                  (0, c.U5)("BrowserView.PostMessageToParent")
                ? (async function () {
                    const { InitializeForDesktop: e } = await i
                      .e(380)
                      .then(i.bind(i, 646));
                    e();
                  })()
                : e.RegisterForGamepadDetected(() => l(e));
          })();
        });
    })();
})();

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "10320827";
(() => {
  "use strict";
  var e,
    t,
    n = {
      100: (e, t, n) => {
        n.d(t, { pR: () => r, Vz: () => i, nh: () => l });
        var a,
          r,
          i,
          o = n(865);
        class s {
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
          m_fnRepeatAllowed = () => !0;
          constructor(e) {
            (this.m_config = e), (this.m_inputRepeatGenerator = new s(e));
          }
          Reset() {
            this.m_inputRepeatGenerator.Reset();
          }
          SetRepeatAllowed(e) {
            e || (e = () => !0), (this.m_fnRepeatAllowed = e);
          }
          HandleInputButtonDown(e, t, n) {
            this.m_fnRepeatAllowed() && this.m_config.inputsThatRepeat.has(e)
              ? this.m_repeatOnAxis == a.None &&
                ((e != r.DIR_UP && e != r.DIR_DOWN) ||
                  (this.m_repeatOnAxis = a.Vertical),
                (e != r.DIR_LEFT && e != r.DIR_RIGHT) ||
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
              const t = e == r.DIR_UP || e == r.DIR_DOWN,
                n = e == r.DIR_LEFT || e == r.DIR_RIGHT;
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
        })(r || (r = {})),
          (function (e) {
            (e[(e.UNKNOWN = 0)] = "UNKNOWN"),
              (e[(e.GAMEPAD = 1)] = "GAMEPAD"),
              (e[(e.KEYBOARD_SIMULATOR = 2)] = "KEYBOARD_SIMULATOR"),
              (e[(e.MOUSE = 3)] = "MOUSE"),
              (e[(e.TOUCH = 4)] = "TOUCH"),
              (e[(e.LPAD = 5)] = "LPAD"),
              (e[(e.RPAD = 6)] = "RPAD");
          })(i || (i = {}));
        class l {
          m_OnGamepadDetectedCallbacks = new o.l();
          m_ButtonDownCallbacks = new o.l();
          m_ButtonUpCallbacks = new o.l();
          m_AnalogCallbacks = new o.l();
          m_NavigationTypeChangeCallbacks = new o.l();
          m_eNavigationSourceType;
          m_fLastActiveTime;
          m_nLastActiveControllerIndex = -1;
          m_ButtonRepeatHandler = new c({
            inputsThatRepeat: new Set([
              r.DIR_UP,
              r.DIR_DOWN,
              r.DIR_LEFT,
              r.DIR_RIGHT,
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
            this.m_ButtonRepeatHandler.SetRepeatAllowed(e);
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
      403: (e, t, n) => {
        function a(e, t) {
          return (function (e, t) {
            const n = e.findIndex(t);
            return n >= 0 && (e.splice(n, 1), !0);
          })(e, (e) => t == e);
        }
        n.d(t, { x9: () => a });
      },
      178: (e, t, n) => {
        function a(e, t, n) {
          return {
            get() {
              let e = n.value.bind(this);
              return (
                Object.prototype.hasOwnProperty.call(this, t) ||
                  Object.defineProperty(this, t, { value: e }),
                e
              );
            },
          };
        }
        n.d(t, { o: () => a });
      },
      865: (e, t, n) => {
        n.d(t, { l: () => r });
        var a = n(403);
        class r {
          m_vecCallbacks = [];
          Register(e) {
            this.m_vecCallbacks.push(e);
            return {
              Unregister: () => {
                a.x9(this.m_vecCallbacks, e);
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
          static PromiseFromAny(e) {
            return new Promise((t) => {
              let n = [];
              const a = () => {
                n.forEach((e) => e.Unregister()), t();
              };
              for (const t of e) n.push(t.Register(a));
            });
          }
        }
      },
      220: (e, t, n) => {
        function a(e, t) {
          return !!e && "object" == typeof e.SteamClient && t in e.SteamClient;
        }
        function r(e) {
          return (function (e, t) {
            if (!e) return !1;
            const [n, r] = t.split(".", 2);
            return n && r && a(e, n) && r in e.SteamClient[n];
          })(window, e);
        }
        n.d(t, { Dp: () => r });
      },
      541: (e, t, n) => {
        "VALVE_PUBLIC_PATH" in window
          ? (n.p = window.VALVE_PUBLIC_PATH)
          : console.error(
              "VALVE_PUBLIC_PATH not defined; check for a call to CHTMLHelpers::WebpackConfigScriptlet",
            ),
          123 !== Array.from(new Set([123]))[0] &&
            console.error("Should not include prototypejs.");
      },
      669: (e) => {
        e.exports = jQuery;
      },
      629: (e, t, n) => {
        n.d(t, { Cg: () => a });
        function a(e, t, n, a) {
          var r,
            i = arguments.length,
            o =
              i < 3
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
              (r = e[s]) &&
                (o = (i < 3 ? r(o) : i > 3 ? r(t, n, o) : r(t, n)) || o);
          return i > 3 && o && Object.defineProperty(t, n, o), o;
        }
        Object.create;
        Object.create;
        "function" == typeof SuppressedError && SuppressedError;
      },
    },
    a = {};
  function r(e) {
    var t = a[e];
    if (void 0 !== t) return t.exports;
    var i = (a[e] = { exports: {} });
    return n[e](i, i.exports, r), i.exports;
  }
  (r.m = n),
    (r.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return r.d(t, { a: t }), t;
    }),
    (r.d = (e, t) => {
      for (var n in t)
        r.o(t, n) &&
          !r.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    (r.f = {}),
    (r.e = (e) =>
      Promise.all(Object.keys(r.f).reduce((t, n) => (r.f[n](e, t), t), []))),
    (r.u = (e) =>
      "javascript/legacy_web/" +
      ({ 97: "desktop", 616: "gamepad" }[e] || e) +
      ".js?contenthash=" +
      {
        97: "8d0cbd80f296d0acea14",
        554: "884358e316ffb822bd6e",
        616: "dd2691f9ab9443228165",
      }[e]),
    (r.miniCssF = (e) =>
      "css/legacy_web/gamepad.css?contenthash=8f8038e8f8c48763e2ca"),
    (r.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (e = {}),
    (t = "legacy_web:"),
    (r.l = (n, a, i, o) => {
      if (e[n]) e[n].push(a);
      else {
        var s, c;
        if (void 0 !== i)
          for (
            var l = document.getElementsByTagName("script"), p = 0;
            p < l.length;
            p++
          ) {
            var u = l[p];
            if (
              u.getAttribute("src") == n ||
              u.getAttribute("data-webpack") == t + i
            ) {
              s = u;
              break;
            }
          }
        s ||
          ((c = !0),
          ((s = document.createElement("script")).charset = "utf-8"),
          (s.timeout = 120),
          r.nc && s.setAttribute("nonce", r.nc),
          s.setAttribute("data-webpack", t + i),
          (s.src = n)),
          (e[n] = [a]);
        var d = (t, a) => {
            (s.onerror = s.onload = null), clearTimeout(_);
            var r = e[n];
            if (
              (delete e[n],
              s.parentNode && s.parentNode.removeChild(s),
              r && r.forEach((e) => e(a)),
              t)
            )
              return t(a);
          },
          _ = setTimeout(
            d.bind(null, void 0, { type: "timeout", target: s }),
            12e4,
          );
        (s.onerror = d.bind(null, s.onerror)),
          (s.onload = d.bind(null, s.onload)),
          c && document.head.appendChild(s);
      }
    }),
    (() => {
      var e;
      r.g.importScripts && (e = r.g.location + "");
      var t = r.g.document;
      if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
        var n = t.getElementsByTagName("script");
        if (n.length)
          for (var a = n.length - 1; a > -1 && (!e || !/^http(s?):/.test(e)); )
            e = n[a--].src;
      }
      if (!e)
        throw new Error(
          "Automatic publicPath is not supported in this browser",
        );
      (e = e
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (r.p = e + "../../");
    })(),
    (() => {
      if ("undefined" != typeof document) {
        var e = (e) =>
            new Promise((t, n) => {
              var a = r.miniCssF(e),
                i = r.p + a;
              if (
                ((e, t) => {
                  for (
                    var n = document.getElementsByTagName("link"), a = 0;
                    a < n.length;
                    a++
                  ) {
                    var r =
                      (o = n[a]).getAttribute("data-href") ||
                      o.getAttribute("href");
                    if ("stylesheet" === o.rel && (r === e || r === t))
                      return o;
                  }
                  var i = document.getElementsByTagName("style");
                  for (a = 0; a < i.length; a++) {
                    var o;
                    if (
                      (r = (o = i[a]).getAttribute("data-href")) === e ||
                      r === t
                    )
                      return o;
                  }
                })(a, i)
              )
                return t();
              ((e, t, n, a, r) => {
                var i = document.createElement("link");
                (i.rel = "stylesheet"),
                  (i.type = "text/css"),
                  (i.onerror = i.onload =
                    (n) => {
                      if (((i.onerror = i.onload = null), "load" === n.type))
                        a();
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
                          i.parentNode && i.parentNode.removeChild(i),
                          r(c);
                      }
                    }),
                  (i.href = t),
                  n
                    ? n.parentNode.insertBefore(i, n.nextSibling)
                    : document.head.appendChild(i);
              })(e, i, null, t, n);
            }),
          t = { 792: 0 };
        r.f.miniCss = (n, a) => {
          t[n]
            ? a.push(t[n])
            : 0 !== t[n] &&
              { 616: 1 }[n] &&
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
      var e = { 792: 0 };
      r.f.j = (t, n) => {
        var a = r.o(e, t) ? e[t] : void 0;
        if (0 !== a)
          if (a) n.push(a[2]);
          else {
            var i = new Promise((n, r) => (a = e[t] = [n, r]));
            n.push((a[2] = i));
            var o = r.p + r.u(t),
              s = new Error();
            r.l(
              o,
              (n) => {
                if (r.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
                  var i = n && ("load" === n.type ? "missing" : n.type),
                    o = n && n.target && n.target.src;
                  (s.message =
                    "Loading chunk " + t + " failed.\n(" + i + ": " + o + ")"),
                    (s.name = "ChunkLoadError"),
                    (s.type = i),
                    (s.request = o),
                    a[1](s);
                }
              },
              "chunk-" + t,
              t,
            );
          }
      };
      var t = (t, n) => {
          var a,
            i,
            [o, s, c] = n,
            l = 0;
          if (o.some((t) => 0 !== e[t])) {
            for (a in s) r.o(s, a) && (r.m[a] = s[a]);
            if (c) c(r);
          }
          for (t && t(n); l < o.length; l++)
            (i = o[l]), r.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
        },
        n = (self.webpackChunklegacy_web = self.webpackChunklegacy_web || []);
      n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
    })();
  r(541);
  var i = r(669),
    o = r.n(i),
    s = r(629),
    c = r(100),
    l = r(178);
  let p = [
    { index: 0, type: c.pR.OK, category: "action" },
    { index: 1, type: c.pR.CANCEL, category: "action" },
    { index: 2, type: c.pR.SECONDARY, category: "action" },
    { index: 3, type: c.pR.OPTIONS, category: "action" },
    { index: 4, type: c.pR.BUMPER_LEFT, category: "action" },
    { index: 5, type: c.pR.BUMPER_RIGHT, category: "action" },
    { index: 6, type: c.pR.TRIGGER_LEFT, category: "action" },
    { index: 7, type: c.pR.TRIGGER_RIGHT, category: "action" },
    { index: 8, type: c.pR.SELECT, category: "action" },
    { index: 9, type: c.pR.START, category: "action" },
    { index: 10, type: c.pR.LSTICK_CLICK, category: "action" },
    { index: 11, type: c.pR.RSTICK_CLICK, category: "action" },
    { index: 12, type: c.pR.DIR_UP, category: "navigation" },
    { index: 13, type: c.pR.DIR_DOWN, category: "navigation" },
    { index: 14, type: c.pR.DIR_LEFT, category: "navigation" },
    { index: 15, type: c.pR.DIR_RIGHT, category: "navigation" },
    { index: 16, type: c.pR.STEAM_GUIDE, category: "action" },
    { index: 17, type: c.pR.SELECT, category: "action" },
  ];
  class u extends c.nh {
    m_rgGamepadStatus = [];
    constructor() {
      super(),
        this.SetSourceType(c.Vz.GAMEPAD),
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
        let r = this.m_rgGamepadStatus[n];
        for (let e = 0; e < p.length; e++) {
          let n = p[e],
            i = n.index;
          a.buttons[i] &&
            (a.buttons[i].pressed
              ? ((t = !0),
                r.buttons[i] ||
                  ((r.buttons[i] = !0), this.OnButtonDown(n.type)))
              : r.buttons[i] && (this.OnButtonUp(n.type), (r.buttons[i] = !1)));
        }
      }
      requestAnimationFrame(this.PollGamepads);
    }
  }
  (0, s.Cg)([l.o], u.prototype, "PollGamepads", null);
  var d = r(220);
  async function _(e) {
    const { InitializeGamepadNavigation: t } = await Promise.all([
      r.e(554),
      r.e(616),
    ]).then(r.bind(r, 598));
    t(e);
  }
  r.p.endsWith("shared/") || (r.p = r.p + "shared/"),
    o()(function () {
      !(function () {
        const e = new u();
        navigator.userAgent.includes("Valve Steam Gamepad")
          ? _(e)
          : (0, d.Dp)("BrowserView.RegisterForMessageFromParent") &&
              (0, d.Dp)("BrowserView.PostMessageToParent")
            ? (async function () {
                const { InitializeForDesktop: e } = await r
                  .e(97)
                  .then(r.bind(r, 248));
                e();
              })()
            : e.RegisterForGamepadDetected(() => _(e));
      })();
    });
})();

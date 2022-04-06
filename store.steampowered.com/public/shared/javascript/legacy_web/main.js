/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "7189600";
/* Third-party software licenses can be found at licenses.txt */
!(function (t) {
  function e(e) {
    for (var n, a, i = e[0], o = e[1], s = 0, c = []; s < i.length; s++)
      (a = i[s]),
        Object.prototype.hasOwnProperty.call(r, a) && r[a] && c.push(r[a][0]),
        (r[a] = 0);
    for (n in o) Object.prototype.hasOwnProperty.call(o, n) && (t[n] = o[n]);
    for (u && u(e); c.length; ) c.shift()();
  }
  var n = {},
    a = { 1: 0 },
    r = { 1: 0 };
  function i(e) {
    if (n[e]) return n[e].exports;
    var a = (n[e] = { i: e, l: !1, exports: {} });
    return t[e].call(a.exports, a, a.exports, i), (a.l = !0), a.exports;
  }
  (i.e = function (t) {
    var e = [];
    a[t]
      ? e.push(a[t])
      : 0 !== a[t] &&
        { 0: 1 }[t] &&
        e.push(
          (a[t] = new Promise(function (e, n) {
            for (
              var r =
                  "css/legacy_web/" +
                  ({ 0: "gamepad" }[t] || t) +
                  ".css?contenthash=" +
                  { 0: "525a0e2145f53af70526" }[t],
                o = i.p + r,
                s = document.getElementsByTagName("link"),
                c = 0;
              c < s.length;
              c++
            ) {
              var u =
                (d = s[c]).getAttribute("data-href") || d.getAttribute("href");
              if ("stylesheet" === d.rel && (u === r || u === o)) return e();
            }
            var l = document.getElementsByTagName("style");
            for (c = 0; c < l.length; c++) {
              var d;
              if ((u = (d = l[c]).getAttribute("data-href")) === r || u === o)
                return e();
            }
            var p = document.createElement("link");
            (p.rel = "stylesheet"),
              (p.type = "text/css"),
              (p.onload = e),
              (p.onerror = function (e) {
                var r = (e && e.target && e.target.src) || o,
                  i = new Error(
                    "Loading CSS chunk " + t + " failed.\n(" + r + ")"
                  );
                (i.code = "CSS_CHUNK_LOAD_FAILED"),
                  (i.request = r),
                  delete a[t],
                  p.parentNode.removeChild(p),
                  n(i);
              }),
              (p.href = o),
              document.getElementsByTagName("head")[0].appendChild(p);
          }).then(function () {
            a[t] = 0;
          }))
        );
    var n = r[t];
    if (0 !== n)
      if (n) e.push(n[2]);
      else {
        var o = new Promise(function (e, a) {
          n = r[t] = [e, a];
        });
        e.push((n[2] = o));
        var s,
          c = document.createElement("script");
        (c.charset = "utf-8"),
          (c.timeout = 120),
          i.nc && c.setAttribute("nonce", i.nc),
          (c.src = (function (t) {
            return (
              i.p +
              "javascript/legacy_web/" +
              ({ 0: "gamepad" }[t] || t) +
              ".js?contenthash=" +
              { 0: "d13c119130cce1167747" }[t]
            );
          })(t));
        var u = new Error();
        s = function (e) {
          (c.onerror = c.onload = null), clearTimeout(l);
          var n = r[t];
          if (0 !== n) {
            if (n) {
              var a = e && ("load" === e.type ? "missing" : e.type),
                i = e && e.target && e.target.src;
              (u.message =
                "Loading chunk " + t + " failed.\n(" + a + ": " + i + ")"),
                (u.name = "ChunkLoadError"),
                (u.type = a),
                (u.request = i),
                n[1](u);
            }
            r[t] = void 0;
          }
        };
        var l = setTimeout(function () {
          s({ type: "timeout", target: c });
        }, 12e4);
        (c.onerror = c.onload = s), document.head.appendChild(c);
      }
    return Promise.all(e);
  }),
    (i.m = t),
    (i.c = n),
    (i.d = function (t, e, n) {
      i.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
    }),
    (i.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (i.t = function (t, e) {
      if ((1 & e && (t = i(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (i.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var a in t)
          i.d(
            n,
            a,
            function (e) {
              return t[e];
            }.bind(null, a)
          );
      return n;
    }),
    (i.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return i.d(e, "a", e), e;
    }),
    (i.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (i.p = ""),
    (i.oe = function (t) {
      throw (console.error(t), t);
    });
  var o = (window.webpackJsonpLegacyWeb = window.webpackJsonpLegacyWeb || []),
    s = o.push.bind(o);
  (o.push = e), (o = o.slice());
  for (var c = 0; c < o.length; c++) e(o[c]);
  var u = s;
  i((i.s = "gfbn"));
})({
  Kw0F: function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return a;
    }),
      n.d(e, "b", function () {
        return r;
      });
    n("r64O");
    function a(t, e) {
      return r(t, (t) => e == t);
    }
    function r(t, e) {
      let n = t.findIndex(e);
      return n >= 0 && (t.splice(n, 1), !0);
    }
  },
  SHRt: function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return s;
    });
    var a = n("mrSG"),
      r = n("rHSA"),
      i = n("XxJJ");
    let o = [
      { index: 0, type: r.a.OK, category: "action" },
      { index: 1, type: r.a.CANCEL, category: "action" },
      { index: 2, type: r.a.SECONDARY, category: "action" },
      { index: 3, type: r.a.OPTIONS, category: "action" },
      { index: 4, type: r.a.BUMPER_LEFT, category: "action" },
      { index: 5, type: r.a.BUMPER_RIGHT, category: "action" },
      { index: 6, type: r.a.TRIGGER_LEFT, category: "action" },
      { index: 7, type: r.a.TRIGGER_RIGHT, category: "action" },
      { index: 8, type: r.a.SELECT, category: "action" },
      { index: 9, type: r.a.START, category: "action" },
      { index: 10, type: r.a.LSTICK_CLICK, category: "action" },
      { index: 11, type: r.a.RSTICK_CLICK, category: "action" },
      { index: 12, type: r.a.DIR_UP, category: "navigation" },
      { index: 13, type: r.a.DIR_DOWN, category: "navigation" },
      { index: 14, type: r.a.DIR_LEFT, category: "navigation" },
      { index: 15, type: r.a.DIR_RIGHT, category: "navigation" },
      { index: 16, type: r.a.STEAM_GUIDE, category: "action" },
      { index: 17, type: r.a.SELECT, category: "action" },
    ];
    class s extends r.c {
      constructor() {
        super(),
          (this.m_rgGamepadStatus = []),
          this.SetSourceType(r.b.GAMEPAD),
          window.addEventListener("gamepadconnected", (t) => {
            this.m_bGamepadDetected ||
              (this.OnGamepadDetected(), this.PollGamepads());
          });
      }
      PollGamepads() {
        let t = navigator.getGamepads(),
          e = !1;
        for (let n = 0; n < t.length; n++) {
          let a = t[n];
          if (!a) continue;
          this.m_rgGamepadStatus[n] ||
            (this.m_rgGamepadStatus[n] = { buttons: [] });
          let r = this.m_rgGamepadStatus[n];
          for (let t = 0; t < o.length; t++) {
            let n = o[t],
              i = n.index;
            a.buttons[i] &&
              (a.buttons[i].pressed
                ? ((e = !0),
                  r.buttons[i] ||
                    ((r.buttons[i] = !0), this.OnButtonDown(n.type)))
                : r.buttons[i] &&
                  (this.OnButtonUp(n.type), (r.buttons[i] = !1)));
          }
        }
        document.hasFocus() || e
          ? requestAnimationFrame(this.PollGamepads)
          : (console.log("Lost focus - suspending gamepad polling"),
            window.addEventListener("focusin", this.OnWindowRegainedFocus));
      }
      OnWindowRegainedFocus() {
        window.removeEventListener("focusin", this.OnWindowRegainedFocus),
          this.PollGamepads();
      }
    }
    Object(a.b)([i.a], s.prototype, "PollGamepads", null),
      Object(a.b)([i.a], s.prototype, "OnWindowRegainedFocus", null);
  },
  SQr7: function (t, e, n) {
    "use strict";
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
  XxJJ: function (t, e, n) {
    "use strict";
    function a(t, e, n) {
      return {
        get() {
          let t = n.value.bind(this);
          return (
            this.hasOwnProperty(e) ||
              Object.defineProperty(this, e, { value: t }),
            t
          );
        },
      };
    }
    n.d(e, "a", function () {
      return a;
    });
  },
  gfbn: function (t, e, n) {
    "use strict";
    n.r(e);
    var a = n("mrSG"),
      r = (n("SQr7"), n("xeH2")),
      i = n.n(r),
      o = n("SHRt");
    function s(t) {
      return Object(a.a)(this, void 0, void 0, function* () {
        const { InitializeGamepadNavigation: e } = yield n
          .e(0)
          .then(n.bind(null, "biHH"));
        e(t);
      });
    }
    n.p.endsWith("shared/") || (n.p = n.p + "shared/"),
      i()(function () {
        !(function () {
          const t = new o.a();
          navigator.userAgent.includes("Valve Steam Gamepad")
            ? s(t)
            : t.RegisterForGamepadDetected(() => s(t));
        })();
      });
  },
  mrSG: function (t, e, n) {
    "use strict";
    n.d(e, "c", function () {
      return a;
    }),
      n.d(e, "b", function () {
        return r;
      }),
      n.d(e, "a", function () {
        return i;
      });
    function a(t, e) {
      var n = {};
      for (var a in t)
        Object.prototype.hasOwnProperty.call(t, a) &&
          e.indexOf(a) < 0 &&
          (n[a] = t[a]);
      if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
        var r = 0;
        for (a = Object.getOwnPropertySymbols(t); r < a.length; r++)
          e.indexOf(a[r]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(t, a[r]) &&
            (n[a[r]] = t[a[r]]);
      }
      return n;
    }
    function r(t, e, n, a) {
      var r,
        i = arguments.length,
        o =
          i < 3
            ? e
            : null === a
            ? (a = Object.getOwnPropertyDescriptor(e, n))
            : a;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
        o = Reflect.decorate(t, e, n, a);
      else
        for (var s = t.length - 1; s >= 0; s--)
          (r = t[s]) &&
            (o = (i < 3 ? r(o) : i > 3 ? r(e, n, o) : r(e, n)) || o);
      return i > 3 && o && Object.defineProperty(e, n, o), o;
    }
    function i(t, e, n, a) {
      return new (n || (n = Promise))(function (r, i) {
        function o(t) {
          try {
            c(a.next(t));
          } catch (t) {
            i(t);
          }
        }
        function s(t) {
          try {
            c(a.throw(t));
          } catch (t) {
            i(t);
          }
        }
        function c(t) {
          var e;
          t.done
            ? r(t.value)
            : ((e = t.value),
              e instanceof n
                ? e
                : new n(function (t) {
                    t(e);
                  })).then(o, s);
        }
        c((a = a.apply(t, e || [])).next());
      });
    }
    Object.create;
    Object.create;
  },
  qiKp: function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return o;
    }),
      n.d(e, "b", function () {
        return c;
      });
    var a = n("mrSG"),
      r = n("Kw0F"),
      i = n("XxJJ");
    class o {
      constructor() {
        this.m_vecCallbacks = [];
      }
      Register(t) {
        this.m_vecCallbacks.push(t);
        return {
          Unregister: () => {
            r.a(this.m_vecCallbacks, t);
          },
        };
      }
      Dispatch(...t) {
        for (const e of Array.from(this.m_vecCallbacks)) e(...t);
      }
      ClearAllCallbacks() {
        this.m_vecCallbacks = [];
      }
      CountRegistered() {
        return this.m_vecCallbacks.length;
      }
    }
    class s {
      constructor(t) {
        (this.m_callbacks = new o()), (this.m_currentValue = t);
      }
      Set(t) {
        (this.m_currentValue = t), this.m_callbacks.Dispatch(t);
      }
      get Value() {
        return this.m_currentValue;
      }
      Subscribe(t) {
        return { Unsubscribe: this.m_callbacks.Register(t).Unregister };
      }
    }
    function c(t) {
      return new s(t);
    }
    Object(a.b)(
      [i.a],
      class {
        Schedule(t, e) {
          this.IsScheduled() && this.Cancel(),
            (this.m_fnCallback = e),
            (this.m_schTimer = window.setTimeout(this.ScheduledInternal, t));
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
          let t = this.m_fnCallback;
          (this.m_fnCallback = void 0), t();
        }
      }.prototype,
      "ScheduledInternal",
      null
    );
  },
  r64O: function (t, e, n) {
    "use strict";
    function a(t, e, ...n) {
      console.assert
        ? 0 == n.length
          ? console.assert(!!t, e)
          : console.assert(!!t, e, ...n)
        : t || console.warn(e, ...n);
    }
    n.d(e, "a", function () {
      return a;
    });
  },
  rHSA: function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return a;
    }),
      n.d(e, "b", function () {
        return r;
      }),
      n.d(e, "c", function () {
        return c;
      });
    var a,
      r,
      i = n("qiKp");
    class o {
      constructor(t) {
        this.m_config = t;
      }
      Reset() {
        (this.m_ActiveInputId = void 0),
          null != this.m_ActiveInputTimeout &&
            (clearInterval(this.m_ActiveInputTimeout),
            (this.m_ActiveInputTimeout = void 0));
      }
      HandleInputButtonDown(t, e) {
        if (this.m_ActiveInputId !== t && null != e) {
          this.Reset(), (this.m_ActiveInputId = t);
          const n = () => {
            this.m_ActiveInputTimeout = window.setInterval(() => {
              e();
            }, this.m_config.repeatInterval_ms);
          };
          null == this.m_config.firstRepeatInterval_ms ||
          this.m_config.firstRepeatInterval_ms ===
            this.m_config.repeatInterval_ms
            ? n()
            : (this.m_ActiveInputTimeout = window.setTimeout(() => {
                e(), n();
              }, this.m_config.firstRepeatInterval_ms));
        }
      }
    }
    class s {
      constructor(t) {
        (this.m_config = t), (this.m_inputRepeatGenerator = new o(t));
      }
      Reset() {
        this.m_inputRepeatGenerator.Reset();
      }
      HandleInputButtonDown(t, e) {
        this.m_config.inputsThatRepeat.has(t)
          ? this.m_inputRepeatGenerator.HandleInputButtonDown(t, e)
          : this.m_inputRepeatGenerator.Reset();
      }
      HandleInputButtonUp(t) {
        this.m_inputRepeatGenerator.Reset();
      }
    }
    !(function (t) {
      (t[(t.INVALID = 0)] = "INVALID"),
        (t[(t.OK = 1)] = "OK"),
        (t[(t.CANCEL = 2)] = "CANCEL"),
        (t[(t.SECONDARY = 3)] = "SECONDARY"),
        (t[(t.OPTIONS = 4)] = "OPTIONS"),
        (t[(t.BUMPER_LEFT = 5)] = "BUMPER_LEFT"),
        (t[(t.BUMPER_RIGHT = 6)] = "BUMPER_RIGHT"),
        (t[(t.TRIGGER_LEFT = 7)] = "TRIGGER_LEFT"),
        (t[(t.TRIGGER_RIGHT = 8)] = "TRIGGER_RIGHT"),
        (t[(t.DIR_UP = 9)] = "DIR_UP"),
        (t[(t.DIR_DOWN = 10)] = "DIR_DOWN"),
        (t[(t.DIR_LEFT = 11)] = "DIR_LEFT"),
        (t[(t.DIR_RIGHT = 12)] = "DIR_RIGHT"),
        (t[(t.SELECT = 13)] = "SELECT"),
        (t[(t.START = 14)] = "START"),
        (t[(t.LSTICK_CLICK = 15)] = "LSTICK_CLICK"),
        (t[(t.RSTICK_CLICK = 16)] = "RSTICK_CLICK"),
        (t[(t.LSTICK_TOUCH = 17)] = "LSTICK_TOUCH"),
        (t[(t.RSTICK_TOUCH = 18)] = "RSTICK_TOUCH"),
        (t[(t.LPAD_TOUCH = 19)] = "LPAD_TOUCH"),
        (t[(t.LPAD_CLICK = 20)] = "LPAD_CLICK"),
        (t[(t.RPAD_TOUCH = 21)] = "RPAD_TOUCH"),
        (t[(t.RPAD_CLICK = 22)] = "RPAD_CLICK"),
        (t[(t.REAR_LEFT_UPPER = 23)] = "REAR_LEFT_UPPER"),
        (t[(t.REAR_LEFT_LOWER = 24)] = "REAR_LEFT_LOWER"),
        (t[(t.REAR_RIGHT_UPPER = 25)] = "REAR_RIGHT_UPPER"),
        (t[(t.REAR_RIGHT_LOWER = 26)] = "REAR_RIGHT_LOWER"),
        (t[(t.STEAM_GUIDE = 27)] = "STEAM_GUIDE"),
        (t[(t.STEAM_QUICK_MENU = 28)] = "STEAM_QUICK_MENU");
    })(a || (a = {})),
      (function (t) {
        (t[(t.UNKNOWN = 0)] = "UNKNOWN"),
          (t[(t.GAMEPAD = 1)] = "GAMEPAD"),
          (t[(t.KEYBOARD = 2)] = "KEYBOARD"),
          (t[(t.MOUSE = 3)] = "MOUSE"),
          (t[(t.TOUCH = 4)] = "TOUCH");
      })(r || (r = {}));
    class c {
      constructor() {
        (this.m_OnGamepadDetectedCallbacks = new i.a()),
          (this.m_ButtonDownCallbacks = new i.a()),
          (this.m_ButtonUpCallbacks = new i.a()),
          (this.m_AnalogCallbacks = new i.a()),
          (this.m_NavigationTypeChangeCallbacks = new i.a()),
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
      RegisterForGamepadDetected(t) {
        return this.m_OnGamepadDetectedCallbacks.Register(t);
      }
      RegisterForGamepadButtonDown(t) {
        return this.m_ButtonDownCallbacks.Register(t);
      }
      RegisterForGamepadButtonUp(t) {
        return this.m_ButtonUpCallbacks.Register(t);
      }
      RegisterForAnalog(t) {
        return this.m_AnalogCallbacks.Register(t);
      }
      RegisterForNavigationTypeChange(t) {
        return this.m_NavigationTypeChangeCallbacks.Register(t);
      }
      SetSourceType(t) {
        this.m_eNavigationSourceType = t;
      }
      GetSourceType() {
        return this.m_eNavigationSourceType;
      }
      SetControllerActive(t) {
        (this.m_nLastActiveControllerIndex = t),
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
      OnButtonDown(t, e) {
        void 0 === e && (e = -1),
          this.SetControllerActive(e),
          this.DispatchButtonDown(t),
          this.m_ButtonRepeatHandler.HandleInputButtonDown(t, () =>
            this.DispatchButtonDown(t, !0)
          );
      }
      OnButtonUp(t, e) {
        void 0 === e && (e = -1),
          this.SetControllerActive(e),
          this.m_ButtonRepeatHandler.HandleInputButtonUp(t),
          this.m_ButtonUpCallbacks.Dispatch(
            t,
            this.m_eNavigationSourceType,
            this.m_nLastActiveControllerIndex
          );
      }
      DispatchButtonDown(t, e) {
        this.m_ButtonDownCallbacks.Dispatch(
          t,
          this.m_eNavigationSourceType,
          this.m_nLastActiveControllerIndex,
          e
        );
      }
      OnAnalogPad(t, e, n, a) {
        void 0 === a && (a = -1),
          this.SetControllerActive(a),
          this.m_AnalogCallbacks.Dispatch(
            t,
            this.m_nLastActiveControllerIndex,
            e,
            n
          );
      }
      OnNavigationTypeChanged(t) {
        this.m_NavigationTypeChangeCallbacks.Dispatch(t);
      }
    }
  },
  xeH2: function (t, e) {
    t.exports = jQuery;
  },
});

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "7096414";
/* Third-party software licenses can be found at licenses.txt */
!(function (t) {
  function e(e) {
    for (var n, r, i = e[0], a = e[1], c = 0, u = []; c < i.length; c++)
      (r = i[c]),
        Object.prototype.hasOwnProperty.call(o, r) && o[r] && u.push(o[r][0]),
        (o[r] = 0);
    for (n in a) Object.prototype.hasOwnProperty.call(a, n) && (t[n] = a[n]);
    for (s && s(e); u.length; ) u.shift()();
  }
  var n = {},
    r = { 1: 0 },
    o = { 1: 0 };
  function i(e) {
    if (n[e]) return n[e].exports;
    var r = (n[e] = { i: e, l: !1, exports: {} });
    return t[e].call(r.exports, r, r.exports, i), (r.l = !0), r.exports;
  }
  (i.e = function (t) {
    var e = [];
    r[t]
      ? e.push(r[t])
      : 0 !== r[t] &&
        { 0: 1 }[t] &&
        e.push(
          (r[t] = new Promise(function (e, n) {
            for (
              var o =
                  "css/legacy_web/" +
                  ({ 0: "gamepad" }[t] || t) +
                  ".css?contenthash=" +
                  { 0: "7bb5d8afc784790657f5" }[t],
                a = i.p + o,
                c = document.getElementsByTagName("link"),
                u = 0;
              u < c.length;
              u++
            ) {
              var s =
                (l = c[u]).getAttribute("data-href") || l.getAttribute("href");
              if ("stylesheet" === l.rel && (s === o || s === a)) return e();
            }
            var p = document.getElementsByTagName("style");
            for (u = 0; u < p.length; u++) {
              var l;
              if ((s = (l = p[u]).getAttribute("data-href")) === o || s === a)
                return e();
            }
            var f = document.createElement("link");
            (f.rel = "stylesheet"),
              (f.type = "text/css"),
              (f.onload = e),
              (f.onerror = function (e) {
                var o = (e && e.target && e.target.src) || a,
                  i = new Error(
                    "Loading CSS chunk " + t + " failed.\n(" + o + ")"
                  );
                (i.code = "CSS_CHUNK_LOAD_FAILED"),
                  (i.request = o),
                  delete r[t],
                  f.parentNode.removeChild(f),
                  n(i);
              }),
              (f.href = a),
              document.getElementsByTagName("head")[0].appendChild(f);
          }).then(function () {
            r[t] = 0;
          }))
        );
    var n = o[t];
    if (0 !== n)
      if (n) e.push(n[2]);
      else {
        var a = new Promise(function (e, r) {
          n = o[t] = [e, r];
        });
        e.push((n[2] = a));
        var c,
          u = document.createElement("script");
        (u.charset = "utf-8"),
          (u.timeout = 120),
          i.nc && u.setAttribute("nonce", i.nc),
          (u.src = (function (t) {
            return (
              i.p +
              "javascript/legacy_web/" +
              ({ 0: "gamepad" }[t] || t) +
              ".js?contenthash=" +
              { 0: "309f5be69f7d08d75f60" }[t]
            );
          })(t));
        var s = new Error();
        c = function (e) {
          (u.onerror = u.onload = null), clearTimeout(p);
          var n = o[t];
          if (0 !== n) {
            if (n) {
              var r = e && ("load" === e.type ? "missing" : e.type),
                i = e && e.target && e.target.src;
              (s.message =
                "Loading chunk " + t + " failed.\n(" + r + ": " + i + ")"),
                (s.name = "ChunkLoadError"),
                (s.type = r),
                (s.request = i),
                n[1](s);
            }
            o[t] = void 0;
          }
        };
        var p = setTimeout(function () {
          c({ type: "timeout", target: u });
        }, 12e4);
        (u.onerror = u.onload = c), document.head.appendChild(u);
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
        for (var r in t)
          i.d(
            n,
            r,
            function (e) {
              return t[e];
            }.bind(null, r)
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
  var a = (window.webpackJsonpLegacyWeb = window.webpackJsonpLegacyWeb || []),
    c = a.push.bind(a);
  (a.push = e), (a = a.slice());
  for (var u = 0; u < a.length; u++) e(a[u]);
  var s = c;
  i((i.s = "gfbn"));
})({
  Kw0F: function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return r;
    }),
      n.d(e, "b", function () {
        return o;
      });
    n("r64O");
    function r(t, e) {
      return o(t, function (t) {
        return e == t;
      });
    }
    function o(t, e) {
      var n = t.findIndex(e);
      return n >= 0 && (t.splice(n, 1), !0);
    }
  },
  SHRt: function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return c;
    });
    var r = n("mrSG"),
      o = n("rHSA"),
      i = n("XxJJ"),
      a = [
        { index: 0, type: o.a.OK, category: "action" },
        { index: 1, type: o.a.CANCEL, category: "action" },
        { index: 2, type: o.a.SECONDARY, category: "action" },
        { index: 3, type: o.a.OPTIONS, category: "action" },
        { index: 4, type: o.a.BUMPER_LEFT, category: "action" },
        { index: 5, type: o.a.BUMPER_RIGHT, category: "action" },
        { index: 6, type: o.a.TRIGGER_LEFT, category: "action" },
        { index: 7, type: o.a.TRIGGER_RIGHT, category: "action" },
        { index: 8, type: o.a.SELECT, category: "action" },
        { index: 9, type: o.a.START, category: "action" },
        { index: 10, type: o.a.LSTICK_CLICK, category: "action" },
        { index: 11, type: o.a.RSTICK_CLICK, category: "action" },
        { index: 12, type: o.a.DIR_UP, category: "navigation" },
        { index: 13, type: o.a.DIR_DOWN, category: "navigation" },
        { index: 14, type: o.a.DIR_LEFT, category: "navigation" },
        { index: 15, type: o.a.DIR_RIGHT, category: "navigation" },
        { index: 16, type: o.a.STEAM_GUIDE, category: "action" },
        { index: 17, type: o.a.SELECT, category: "action" },
      ],
      c = (function (t) {
        function e() {
          var e = t.call(this) || this;
          return (
            (e.m_rgGamepadStatus = []),
            e.SetSourceType(o.b.GAMEPAD),
            window.addEventListener("gamepadconnected", function (t) {
              e.m_bGamepadDetected || (e.OnGamepadDetected(), e.PollGamepads());
            }),
            e
          );
        }
        return (
          Object(r.d)(e, t),
          (e.prototype.PollGamepads = function () {
            for (
              var t = navigator.getGamepads(), e = !1, n = 0;
              n < t.length;
              n++
            ) {
              var r = t[n];
              if (r) {
                this.m_rgGamepadStatus[n] ||
                  (this.m_rgGamepadStatus[n] = { buttons: [] });
                for (
                  var o = this.m_rgGamepadStatus[n], i = 0;
                  i < a.length;
                  i++
                ) {
                  var c = a[i],
                    u = c.index;
                  r.buttons[u] &&
                    (r.buttons[u].pressed
                      ? ((e = !0),
                        o.buttons[u] ||
                          ((o.buttons[u] = !0), this.OnButtonDown(c.type)))
                      : o.buttons[u] &&
                        (this.OnButtonUp(c.type), (o.buttons[u] = !1)));
                }
              }
            }
            document.hasFocus() || e
              ? requestAnimationFrame(this.PollGamepads)
              : (console.log("Lost focus - suspending gamepad polling"),
                window.addEventListener("focusin", this.OnWindowRegainedFocus));
          }),
          (e.prototype.OnWindowRegainedFocus = function () {
            window.removeEventListener("focusin", this.OnWindowRegainedFocus),
              this.PollGamepads();
          }),
          Object(r.c)([i.a], e.prototype, "PollGamepads", null),
          Object(r.c)([i.a], e.prototype, "OnWindowRegainedFocus", null),
          e
        );
      })(o.c);
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
    function r(t, e, n) {
      return {
        get: function () {
          var t = n.value.bind(this);
          return (
            this.hasOwnProperty(e) ||
              Object.defineProperty(this, e, { value: t }),
            t
          );
        },
      };
    }
    n.d(e, "a", function () {
      return r;
    });
  },
  gfbn: function (t, e, n) {
    "use strict";
    n.r(e);
    var r = n("mrSG"),
      o = (n("SQr7"), n("xeH2")),
      i = n.n(o),
      a = n("SHRt");
    function c(t) {
      return Object(r.b)(this, void 0, void 0, function () {
        return Object(r.e)(this, function (e) {
          switch (e.label) {
            case 0:
              return [4, n.e(0).then(n.bind(null, "biHH"))];
            case 1:
              return (0, e.sent().InitializeGamepadNavigation)(t), [2];
          }
        });
      });
    }
    n.p.endsWith("shared/") || (n.p = n.p + "shared/"),
      i()(function () {
        var t;
        (t = new a.a()),
          navigator.userAgent.includes("Valve Steam Gamepad")
            ? c(t)
            : t.RegisterForGamepadDetected(function () {
                return c(t);
              });
      });
  },
  mrSG: function (t, e, n) {
    "use strict";
    n.d(e, "d", function () {
      return o;
    }),
      n.d(e, "a", function () {
        return i;
      }),
      n.d(e, "f", function () {
        return a;
      }),
      n.d(e, "c", function () {
        return c;
      }),
      n.d(e, "b", function () {
        return u;
      }),
      n.d(e, "e", function () {
        return s;
      }),
      n.d(e, "g", function () {
        return p;
      });
    /*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
    var r = function (t, e) {
      return (r =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (t, e) {
            t.__proto__ = e;
          }) ||
        function (t, e) {
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        })(t, e);
    };
    function o(t, e) {
      if ("function" != typeof e && null !== e)
        throw new TypeError(
          "Class extends value " + String(e) + " is not a constructor or null"
        );
      function n() {
        this.constructor = t;
      }
      r(t, e),
        (t.prototype =
          null === e
            ? Object.create(e)
            : ((n.prototype = e.prototype), new n()));
    }
    var i = function () {
      return (i =
        Object.assign ||
        function (t) {
          for (var e, n = 1, r = arguments.length; n < r; n++)
            for (var o in (e = arguments[n]))
              Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
          return t;
        }).apply(this, arguments);
    };
    function a(t, e) {
      var n = {};
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) &&
          e.indexOf(r) < 0 &&
          (n[r] = t[r]);
      if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
        var o = 0;
        for (r = Object.getOwnPropertySymbols(t); o < r.length; o++)
          e.indexOf(r[o]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(t, r[o]) &&
            (n[r[o]] = t[r[o]]);
      }
      return n;
    }
    function c(t, e, n, r) {
      var o,
        i = arguments.length,
        a =
          i < 3
            ? e
            : null === r
            ? (r = Object.getOwnPropertyDescriptor(e, n))
            : r;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
        a = Reflect.decorate(t, e, n, r);
      else
        for (var c = t.length - 1; c >= 0; c--)
          (o = t[c]) &&
            (a = (i < 3 ? o(a) : i > 3 ? o(e, n, a) : o(e, n)) || a);
      return i > 3 && a && Object.defineProperty(e, n, a), a;
    }
    function u(t, e, n, r) {
      return new (n || (n = Promise))(function (o, i) {
        function a(t) {
          try {
            u(r.next(t));
          } catch (t) {
            i(t);
          }
        }
        function c(t) {
          try {
            u(r.throw(t));
          } catch (t) {
            i(t);
          }
        }
        function u(t) {
          var e;
          t.done
            ? o(t.value)
            : ((e = t.value),
              e instanceof n
                ? e
                : new n(function (t) {
                    t(e);
                  })).then(a, c);
        }
        u((r = r.apply(t, e || [])).next());
      });
    }
    function s(t, e) {
      var n,
        r,
        o,
        i,
        a = {
          label: 0,
          sent: function () {
            if (1 & o[0]) throw o[1];
            return o[1];
          },
          trys: [],
          ops: [],
        };
      return (
        (i = { next: c(0), throw: c(1), return: c(2) }),
        "function" == typeof Symbol &&
          (i[Symbol.iterator] = function () {
            return this;
          }),
        i
      );
      function c(i) {
        return function (c) {
          return (function (i) {
            if (n) throw new TypeError("Generator is already executing.");
            for (; a; )
              try {
                if (
                  ((n = 1),
                  r &&
                    (o =
                      2 & i[0]
                        ? r.return
                        : i[0]
                        ? r.throw || ((o = r.return) && o.call(r), 0)
                        : r.next) &&
                    !(o = o.call(r, i[1])).done)
                )
                  return o;
                switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                  case 0:
                  case 1:
                    o = i;
                    break;
                  case 4:
                    return a.label++, { value: i[1], done: !1 };
                  case 5:
                    a.label++, (r = i[1]), (i = [0]);
                    continue;
                  case 7:
                    (i = a.ops.pop()), a.trys.pop();
                    continue;
                  default:
                    if (
                      !((o = a.trys),
                      (o = o.length > 0 && o[o.length - 1]) ||
                        (6 !== i[0] && 2 !== i[0]))
                    ) {
                      a = 0;
                      continue;
                    }
                    if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                      a.label = i[1];
                      break;
                    }
                    if (6 === i[0] && a.label < o[1]) {
                      (a.label = o[1]), (o = i);
                      break;
                    }
                    if (o && a.label < o[2]) {
                      (a.label = o[2]), a.ops.push(i);
                      break;
                    }
                    o[2] && a.ops.pop(), a.trys.pop();
                    continue;
                }
                i = e.call(t, a);
              } catch (t) {
                (i = [6, t]), (r = 0);
              } finally {
                n = o = 0;
              }
            if (5 & i[0]) throw i[1];
            return { value: i[0] ? i[1] : void 0, done: !0 };
          })([i, c]);
        };
      }
    }
    Object.create;
    function p() {
      for (var t = 0, e = 0, n = arguments.length; e < n; e++)
        t += arguments[e].length;
      var r = Array(t),
        o = 0;
      for (e = 0; e < n; e++)
        for (var i = arguments[e], a = 0, c = i.length; a < c; a++, o++)
          r[o] = i[a];
      return r;
    }
    Object.create;
  },
  qiKp: function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return o;
    }),
      n.d(e, "b", function () {
        return a;
      });
    n("mrSG");
    var r = n("Kw0F"),
      o =
        (n("XxJJ"),
        (function () {
          function t() {
            this.m_vecCallbacks = [];
          }
          return (
            (t.prototype.Register = function (t) {
              var e = this;
              this.m_vecCallbacks.push(t);
              return {
                Unregister: function () {
                  r.a(e.m_vecCallbacks, t);
                },
              };
            }),
            (t.prototype.Dispatch = function () {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
              for (
                var n = 0, r = Array.from(this.m_vecCallbacks);
                n < r.length;
                n++
              ) {
                var o = r[n];
                o.apply(void 0, t);
              }
            }),
            (t.prototype.ClearAllCallbacks = function () {
              this.m_vecCallbacks = [];
            }),
            (t.prototype.CountRegistered = function () {
              return this.m_vecCallbacks.length;
            }),
            t
          );
        })()),
      i = (function () {
        function t(t) {
          (this.m_callbacks = new o()), (this.m_currentValue = t);
        }
        return (
          (t.prototype.Set = function (t) {
            (this.m_currentValue = t), this.m_callbacks.Dispatch(t);
          }),
          Object.defineProperty(t.prototype, "Value", {
            get: function () {
              return this.m_currentValue;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (t.prototype.Subscribe = function (t) {
            return { Unsubscribe: this.m_callbacks.Register(t).Unregister };
          }),
          t
        );
      })();
    function a(t) {
      return new i(t);
    }
  },
  r64O: function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return o;
    });
    var r = n("mrSG");
    function o(t, e) {
      for (var n = [], o = 2; o < arguments.length; o++)
        n[o - 2] = arguments[o];
      console.assert
        ? 0 == n.length
          ? console.assert(!!t, e)
          : console.assert.apply(console, Object(r.g)([!!t, e], n))
        : t || console.warn.apply(console, Object(r.g)([e], n));
    }
  },
  rHSA: function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return r;
    }),
      n.d(e, "b", function () {
        return o;
      }),
      n.d(e, "c", function () {
        return u;
      });
    var r,
      o,
      i = n("qiKp"),
      a = (function () {
        function t(t) {
          this.m_config = t;
        }
        return (
          (t.prototype.Reset = function () {
            (this.m_ActiveInputId = void 0),
              null != this.m_ActiveInputTimeout &&
                (clearInterval(this.m_ActiveInputTimeout),
                (this.m_ActiveInputTimeout = void 0));
          }),
          (t.prototype.HandleInputButtonDown = function (t, e) {
            var n = this;
            if (this.m_ActiveInputId !== t && null != e) {
              this.Reset(), (this.m_ActiveInputId = t);
              var r = function () {
                n.m_ActiveInputTimeout = window.setInterval(function () {
                  e();
                }, n.m_config.repeatInterval_ms);
              };
              null == this.m_config.firstRepeatInterval_ms ||
              this.m_config.firstRepeatInterval_ms ===
                this.m_config.repeatInterval_ms
                ? r()
                : (this.m_ActiveInputTimeout = window.setTimeout(function () {
                    e(), r();
                  }, this.m_config.firstRepeatInterval_ms));
            }
          }),
          t
        );
      })(),
      c = (function () {
        function t(t) {
          (this.m_config = t), (this.m_inputRepeatGenerator = new a(t));
        }
        return (
          (t.prototype.Reset = function () {
            this.m_inputRepeatGenerator.Reset();
          }),
          (t.prototype.HandleInputButtonDown = function (t, e) {
            this.m_config.inputsThatRepeat.has(t)
              ? this.m_inputRepeatGenerator.HandleInputButtonDown(t, e)
              : this.m_inputRepeatGenerator.Reset();
          }),
          (t.prototype.HandleInputButtonUp = function (t) {
            this.m_inputRepeatGenerator.Reset();
          }),
          t
        );
      })();
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
    })(r || (r = {})),
      (function (t) {
        (t[(t.UNKNOWN = 0)] = "UNKNOWN"),
          (t[(t.GAMEPAD = 1)] = "GAMEPAD"),
          (t[(t.KEYBOARD = 2)] = "KEYBOARD"),
          (t[(t.MOUSE = 3)] = "MOUSE"),
          (t[(t.TOUCH = 4)] = "TOUCH");
      })(o || (o = {}));
    var u = (function () {
      function t() {
        (this.m_OnGamepadDetectedCallbacks = new i.a()),
          (this.m_ButtonDownCallbacks = new i.a()),
          (this.m_ButtonUpCallbacks = new i.a()),
          (this.m_NavigationTypeChangeCallbacks = new i.a()),
          (this.m_nLastActiveControllerIndex = -1),
          (this.m_ButtonRepeatHandler = new c({
            inputsThatRepeat: new Set([
              r.DIR_UP,
              r.DIR_DOWN,
              r.DIR_LEFT,
              r.DIR_RIGHT,
            ]),
            firstRepeatInterval_ms: 500,
            repeatInterval_ms: 125,
          })),
          (this.m_bGamepadDetected = !1);
      }
      return (
        (t.prototype.RegisterForGamepadDetected = function (t) {
          return this.m_OnGamepadDetectedCallbacks.Register(t);
        }),
        (t.prototype.RegisterForGamepadButtonDown = function (t) {
          return this.m_ButtonDownCallbacks.Register(t);
        }),
        (t.prototype.RegisterForGamepadButtonUp = function (t) {
          return this.m_ButtonUpCallbacks.Register(t);
        }),
        (t.prototype.RegisterForNavigationTypeChange = function (t) {
          return this.m_NavigationTypeChangeCallbacks.Register(t);
        }),
        (t.prototype.SetSourceType = function (t) {
          this.m_eNavigationSourceType = t;
        }),
        (t.prototype.GetSourceType = function () {
          return this.m_eNavigationSourceType;
        }),
        (t.prototype.SetControllerActive = function (t) {
          (this.m_nLastActiveControllerIndex = t),
            (this.m_fLastActiveTime = Date.now());
        }),
        (t.prototype.GetActiveControllerIndex = function () {
          return this.m_nLastActiveControllerIndex;
        }),
        (t.prototype.GetActiveControllerTime = function () {
          return this.m_fLastActiveTime;
        }),
        (t.prototype.OnGamepadDetected = function () {
          console.log("Gamepad detected"),
            (this.m_bGamepadDetected = !0),
            this.m_OnGamepadDetectedCallbacks.Dispatch();
        }),
        (t.prototype.OnButtonDown = function (t, e) {
          var n = this;
          void 0 === e && (e = -1),
            this.SetControllerActive(e),
            this.DispatchButtonDown(t),
            this.m_ButtonRepeatHandler.HandleInputButtonDown(t, function () {
              return n.DispatchButtonDown(t, !0);
            });
        }),
        (t.prototype.OnButtonUp = function (t, e) {
          void 0 === e && (e = -1),
            this.SetControllerActive(e),
            this.m_ButtonRepeatHandler.HandleInputButtonUp(t),
            this.m_ButtonUpCallbacks.Dispatch(
              t,
              this.m_eNavigationSourceType,
              this.m_nLastActiveControllerIndex
            );
        }),
        (t.prototype.DispatchButtonDown = function (t, e) {
          this.m_ButtonDownCallbacks.Dispatch(
            t,
            this.m_eNavigationSourceType,
            this.m_nLastActiveControllerIndex,
            e
          );
        }),
        (t.prototype.OnNavigationTypeChanged = function (t) {
          this.m_NavigationTypeChangeCallbacks.Dispatch(t);
        }),
        t
      );
    })();
  },
  xeH2: function (t, e) {
    t.exports = jQuery;
  },
});

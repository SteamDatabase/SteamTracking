/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonpLegacyWeb = window.webpackJsonpLegacyWeb || []).push([
  [0],
  {
    "8+ko": function (t, e, n) {
      t.exports = {
        FocusRingRoot: "focusring_FocusRingRoot_3m2Fo",
        FocusRing: "focusring_FocusRing_1sTuv",
        flash: "focusring_flash_15zi-",
        growOutline: "focusring_growOutline_3vSPb",
        fadeOutline: "focusring_fadeOutline_xL-jG",
        blinker: "focusring_blinker_3mURo",
        DebugFocusRing: "focusring_DebugFocusRing_1cTVW",
        FocusRingOnHiddenItem: "focusring_FocusRingOnHiddenItem_8uyqy",
      };
    },
    biHH: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, "InitializeGamepadNavigation", function () {
          return kt;
        });
      var o,
        i,
        r = n("mrSG"),
        a = n("xeH2"),
        s = n.n(a),
        c = n("rHSA");
      !(function (t) {
        (t[(t.GAMEPAD = 0)] = "GAMEPAD"),
          (t[(t.KEYBOARD = 1)] = "KEYBOARD"),
          (t[(t.APPLICATION = 2)] = "APPLICATION"),
          (t[(t.BROWSER = 3)] = "BROWSER");
      })(i || (i = {}));
      var u =
        (((o = {})[c.a.OK] = "vgp_onok"),
        (o[c.a.CANCEL] = "vgp_oncancel"),
        (o[c.a.SECONDARY] = "vgp_onsecondaryaction"),
        (o[c.a.OPTIONS] = "vgp_onoptions"),
        (o[c.a.START] = "vgp_onmenu"),
        o);
      function l(t, e, n) {
        return (
          t.addEventListener(e, n),
          function () {
            return (function (t, e, n) {
              t.removeEventListener(e, n);
            })(t, e, n);
          }
        );
      }
      function h(t, e) {
        return l(t, "vgp_ondirection", p(e));
      }
      function d(t, e, n) {
        if (null === t) return !0;
        var o = new t.ownerDocument.defaultView.CustomEvent(e, {
          bubbles: !0,
          cancelable: !0,
          detail: n,
        });
        return t.dispatchEvent(o);
      }
      function p(t) {
        return function (e) {
          !1 !== t(e) && (e.stopPropagation(), e.preventDefault());
        };
      }
      var m = { x: "y", y: "x" };
      var g,
        f = n("r64O"),
        v = n("XxJJ"),
        b = n("qiKp"),
        _ = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            Object(r.d)(e, t),
            (e.prototype.GetString = function (t) {
              return Promise.resolve(localStorage.getItem(t));
            }),
            (e.prototype.StoreString = function (t, e) {
              return localStorage.setItem(t, e), Promise.resolve();
            }),
            (e.prototype.RemoveObject = function (t) {
              return localStorage.removeItem(t), Promise.resolve();
            }),
            e
          );
        })(
          (function () {
            function t() {}
            return (
              (t.prototype.GetObject = function (t) {
                return Object(r.b)(this, void 0, void 0, function () {
                  var e;
                  return Object(r.e)(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return n.trys.push([0, 2, , 3]), [4, this.GetString(t)];
                      case 1:
                        return [2, (e = n.sent()) ? JSON.parse(e) : null];
                      case 2:
                        return n.sent(), [2, null];
                      case 3:
                        return [2];
                    }
                  });
                });
              }),
              (t.prototype.StoreObject = function (t, e) {
                return Object(r.b)(this, void 0, void 0, function () {
                  return Object(r.e)(this, function (n) {
                    return [2, this.StoreString(t, JSON.stringify(e))];
                  });
                });
              }),
              t
            );
          })()
        ),
        y = [
          "ActionDescription",
          "Backstack",
          "GroupMemberStore",
          "Chat",
          "ChatRoom",
          "ChatRoomGroup",
          "ChatHistory",
          "CompositionState",
          "AppOverviewImplObservable",
          "ReducedValue",
          "FocusNavigation",
          "FocusNavigationMovement",
          "GamepadEvents",
          "VirtualKeyboard",
          "UIStore/BasicUIStore",
          "SystemNetworkStore",
          "SteamClient",
          "AudioPlaybackManager",
        ];
      !(function (t) {
        (t[(t.Debug = 0)] = "Debug"),
          (t[(t.Info = 1)] = "Info"),
          (t[(t.Warning = 2)] = "Warning"),
          (t[(t.Error = 3)] = "Error");
      })(g || (g = {}));
      var C = (function () {
          function t(t, e) {
            (this.m_fnIdGenerator = null),
              (this.m_sName = t),
              (this.m_fnIdGenerator = e),
              N.Get().RegisterLogName(t);
          }
          return (
            (t.prototype.Debug = function () {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
              this.Log.apply(this, Object(r.g)([g.Debug], t));
            }),
            (t.prototype.Info = function () {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
              this.Log.apply(this, Object(r.g)([g.Info], t));
            }),
            (t.prototype.Warning = function () {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
              this.Log.apply(this, Object(r.g)([g.Warning], t));
            }),
            (t.prototype.Error = function () {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
              this.Log.apply(this, Object(r.g)([g.Error], t));
            }),
            (t.prototype.Assert = function (t) {
              for (var e = [], n = 1; n < arguments.length; n++)
                e[n - 1] = arguments[n];
              t ||
                this.Log.apply(
                  this,
                  Object(r.g)([g.Error, "Assertion failed:"], e)
                );
            }),
            (t.prototype.Log = function (t) {
              for (var e, n, o = [], i = 1; i < arguments.length; i++)
                o[i - 1] = arguments[i];
              if (t != g.Debug || N.Get().IsDebugLogEnabled(this.m_sName)) {
                var a = this.m_sName,
                  s =
                    null !==
                      (n =
                        null === (e = this.m_fnIdGenerator) || void 0 === e
                          ? void 0
                          : e.call(this)) && void 0 !== n
                      ? n
                      : null;
                null != s && (a += " (" + s + ")");
                var c = N.Get().IncludeBacktraceInLog;
                A.apply(void 0, Object(r.g)([t, c, a, this.m_sName], o));
              }
            }),
            Object(r.c)([v.a], t.prototype, "Debug", null),
            Object(r.c)([v.a], t.prototype, "Info", null),
            Object(r.c)([v.a], t.prototype, "Warning", null),
            Object(r.c)([v.a], t.prototype, "Error", null),
            Object(r.c)([v.a], t.prototype, "Assert", null),
            t
          );
        })(),
        N = (function () {
          function t() {
            (this.m_Storage = null),
              (this.m_rgLogNames = null),
              (this.m_setEnabledDebugLogs = new Set()),
              (this.m_bIncludeBacktraceInLog = !1),
              (this.m_SettingsChangedCallback = new b.a()),
              (this.m_bLoading = !1),
              (this.m_Storage = new _()),
              (this.m_rgLogNames = y.slice()),
              this.LoadSettings();
          }
          return (
            (t.prototype.LogAsLogManager = function () {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
              A.apply(
                void 0,
                Object(r.g)(
                  [
                    g.Info,
                    this.IncludeBacktraceInLog,
                    "LogManager",
                    "LogManager",
                  ],
                  t
                )
              );
            }),
            (t.prototype.LoadSettings = function () {
              return Object(r.b)(this, void 0, void 0, function () {
                var e, n;
                return Object(r.e)(this, function (o) {
                  switch (o.label) {
                    case 0:
                      return (
                        (this.m_bLoading = !0),
                        (e = this),
                        [
                          4,
                          this.m_Storage.GetObject(
                            t.k_IncludeBacktraceInLog_StorageKey
                          ),
                        ]
                      );
                    case 1:
                      return (
                        (e.m_bIncludeBacktraceInLog = !!o.sent()),
                        [
                          4,
                          this.m_Storage.GetObject(
                            t.k_EnabledLogNames_StorageKey
                          ),
                        ]
                      );
                    case 2:
                      return (
                        (n = o.sent()),
                        Array.isArray(n) &&
                          ((this.m_setEnabledDebugLogs = new Set(n)),
                          this.LogAsLogManager(
                            "Loaded debug enabled log names. Will print log messages for:",
                            Array.from(this.m_setEnabledDebugLogs)
                          )),
                        (this.m_bLoading = !1),
                        this.m_SettingsChangedCallback.Dispatch(),
                        [2]
                      );
                  }
                });
              });
            }),
            (t.prototype.SaveSettings = function () {
              return Object(r.b)(this, void 0, void 0, function () {
                return Object(r.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return [
                        4,
                        this.m_Storage.StoreObject(
                          t.k_EnabledLogNames_StorageKey,
                          Array.from(this.m_setEnabledDebugLogs)
                        ),
                      ];
                    case 1:
                      return (
                        e.sent(),
                        [
                          4,
                          this.m_Storage.StoreObject(
                            t.k_IncludeBacktraceInLog_StorageKey,
                            this.m_bIncludeBacktraceInLog
                          ),
                        ]
                      );
                    case 2:
                      return (
                        e.sent(),
                        this.LogAsLogManager(
                          "Saved enabled debug log names. Will print log messages for:",
                          Array.from(this.m_setEnabledDebugLogs)
                        ),
                        [2]
                      );
                  }
                });
              });
            }),
            (t.Get = function () {
              return (
                null == t.s_Singleton && (t.s_Singleton = new t()),
                t.s_Singleton
              );
            }),
            Object.defineProperty(t.prototype, "Loading", {
              get: function () {
                return this.m_bLoading;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "LogNames", {
              get: function () {
                return this.m_rgLogNames;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.prototype.RegisterLogName = function (t) {
              this.m_rgLogNames.includes(t) || this.m_rgLogNames.push(t);
            }),
            (t.prototype.IsLogName = function (t) {
              return this.m_rgLogNames.includes(t);
            }),
            (t.prototype.IsDebugLogEnabled = function (t) {
              return this.m_setEnabledDebugLogs.has(t);
            }),
            (t.prototype.ToggleDebugLogEnabled = function (t) {
              return Object(r.b)(this, void 0, void 0, function () {
                return Object(r.e)(this, function (e) {
                  return (
                    this.SetDebugLogEnabled(t, !this.IsDebugLogEnabled(t)), [2]
                  );
                });
              });
            }),
            (t.prototype.SetDebugLogEnabled = function (t, e) {
              return Object(r.b)(this, void 0, void 0, function () {
                return Object(r.e)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return (
                        e
                          ? this.m_setEnabledDebugLogs.add(t)
                          : this.m_setEnabledDebugLogs.delete(t),
                        this.m_SettingsChangedCallback.Dispatch(),
                        [4, this.SaveSettings()]
                      );
                    case 1:
                      return n.sent(), [2];
                  }
                });
              });
            }),
            (t.prototype.SetAllDebugLogsEnabled = function (t) {
              return Object(r.b)(this, void 0, void 0, function () {
                return Object(r.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (this.m_setEnabledDebugLogs = new Set(t ? y : [])),
                        this.m_SettingsChangedCallback.Dispatch(),
                        [4, this.SaveSettings()]
                      );
                    case 1:
                      return e.sent(), [2];
                  }
                });
              });
            }),
            (t.prototype.RegisterForSettingsChanges = function (t) {
              return this.m_SettingsChangedCallback.Register(t);
            }),
            Object.defineProperty(t.prototype, "IncludeBacktraceInLog", {
              get: function () {
                return this.m_bIncludeBacktraceInLog;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.prototype.SetIncludeBacktraceInLog = function (t) {
              return Object(r.b)(this, void 0, void 0, function () {
                return Object(r.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (this.m_bIncludeBacktraceInLog = t),
                        this.m_SettingsChangedCallback.Dispatch(),
                        [4, this.SaveSettings()]
                      );
                    case 1:
                      return e.sent(), [2];
                  }
                });
              });
            }),
            (t.k_EnabledLogNames_StorageKey = "EnabledWebLogs"),
            (t.k_IncludeBacktraceInLog_StorageKey = "IncludeBacktraceInLog"),
            (t.s_Singleton = null),
            t
          );
        })();
      function F(t) {
        for (var e = 0, n = 0; n < t.length; n++)
          e = t.charCodeAt(n) + ((e << 5) - e);
        return [(e >> 0) & 255, (e >> 8) & 255, (e >> 16) & 255];
      }
      function O(t) {
        return (299 * t[0] + 587 * t[1] + 114 * t[2]) / 1e3 >= 128;
      }
      function R(t) {
        switch (t) {
          case g.Debug:
            return String.fromCodePoint(128027);
          case g.Info:
            return String.fromCodePoint(8505);
          case g.Warning:
            return String.fromCodePoint(9888);
          case g.Error:
            return String.fromCodePoint(128165);
        }
      }
      function A(t, e, n, o) {
        for (var i = [], a = 4; a < arguments.length; a++)
          i[a - 4] = arguments[a];
        var s = F(o),
          c = s.map(function (t, e) {
            return Math.max(
              0,
              Math.min(255, 255 * (0.8 * (t / 255 - 0.5) + 0.15))
            );
          }),
          u = O(c),
          l = n;
        e && (l = R(t) + " " + l);
        var h = Object(r.g)(
          [
            "%c" + l + "%c:",
            "color: " +
              (u ? "black" : "white") +
              "; background: rgb(" +
              c.join(",") +
              "); padding: 0 1ch",
            "color: transparent; margin-right: -1ch",
          ],
          i
        );
        if (e)
          console.groupCollapsed.apply(console, h),
            console.trace("Callstack"),
            console.groupEnd();
        else
          switch (t) {
            case g.Debug:
            case g.Info:
              console.log.apply(console, h);
              break;
            case g.Warning:
              console.warn.apply(console, h);
              break;
            case g.Error:
              console.error.apply(console, h);
          }
      }
      var S = (function () {
        function t(t) {
          this.m_root = t;
        }
        return (
          (t.SerializeNavNode = function (e, n, o) {
            void 0 === n && (n = !0), void 0 === o && (o = !0);
            var i = null,
              r = e.GetChildren(),
              a = r[0],
              s = r[1];
            return (
              a.length &&
                -1 != s &&
                n &&
                (i = a.map(function (e, n) {
                  return t.SerializeNavNode(e, n == s || o, o);
                })),
              { sNavKey: e.NavKey, iActiveChild: s, rgChildren: i }
            );
          }),
          (t.RestoreSerializedNavNode = function (e, n) {
            var o = n.sNavKey,
              i = n.iActiveChild,
              r = n.rgChildren;
            if (
              (o && Object(f.a)(o == e.NavKey, "navkey mismatch"),
              e.SetActiveChild(i),
              r && r.length)
            ) {
              var a = e.GetChildren()[0],
                s = new Map();
              a.forEach(function (t) {
                t.NavKey && s.set(t.NavKey, t);
              });
              for (var c = 0, u = r; c < u.length; c++) {
                var l = u[c];
                if (l.sNavKey) {
                  var h = s.get(l.sNavKey);
                  h && t.RestoreSerializedNavNode(h, l);
                }
              }
              if (-1 != i && r[i].sNavKey) {
                var d = s.get(r[i].sNavKey);
                d && e.SetActiveChild(a.indexOf(d));
              }
              for (var p = 0, m = 0; p < a.length && m < r.length; ) {
                for (; p < a.length && a[p].NavKey; ) p++;
                for (; m < r.length && r[m].sNavKey; ) m++;
                if (p >= a.length || m >= r.length) break;
                t.RestoreSerializedNavNode(a[p], r[m]), p++, m++;
              }
            }
          }),
          t
        );
      })();
      var D = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.m_rgHistory = []), e;
          }
          return (
            Object(r.d)(e, t),
            (e.prototype.PushState = function () {
              this.m_rgHistory.push(S.SerializeNavNode(this.m_root));
            }),
            (e.prototype.PopState = function () {
              this.m_rgHistory.length &&
                (S.RestoreSerializedNavNode(
                  this.m_root,
                  this.m_rgHistory.pop()
                ),
                this.m_root.BTakeFocus(i.APPLICATION));
            }),
            e
          );
        })(S),
        I = n("Kw0F");
      function w(t) {
        return null != t && void 0 !== t.focus;
      }
      function E(t) {
        var e = void 0;
        return t && (e = t.ownerDocument.defaultView), e;
      }
      function T(t, e) {
        for (var n = t.parentElement; n; ) {
          var o;
          if (!e || "x" == e)
            if (
              "scroll" == (o = window.getComputedStyle(n).overflowX) ||
              "auto" == o
            )
              break;
          if (!e || "y" == e)
            if (
              "scroll" == (o = window.getComputedStyle(n).overflowY) ||
              "auto" == o
            )
              break;
          n = n.parentElement;
        }
        return n;
      }
      function P(t, e) {
        if (!("ownerDocument" in t)) return !0;
        var n = t.ownerDocument.defaultView.getComputedStyle(t),
          o = "x" === e ? n.overflowX : n.overflowY;
        return "auto" === o || "scroll" === o;
      }
      function L(t, e, n) {
        return null == t || isNaN(t) ? t : Math.max(e, Math.min(n, t));
      }
      var M = new C("ScrollSnap").Debug,
        B = !1;
      var G;
      function k(t) {
        if (!t) return { left: 0, top: 0, right: 0, bottom: 0 };
        if (!("ownerDocument" in t))
          return {
            left: 0,
            right: t.innerWidth,
            top: 0,
            bottom: t.innerHeight,
          };
        for (var e = 0, n = 0, o = t; o; )
          (e += o.offsetTop), (n += o.offsetLeft), (o = o.offsetParent);
        for (o = null == t ? void 0 : t.parentElement; o; )
          (e -= o.scrollTop), (n -= o.scrollLeft), (o = o.parentElement);
        return {
          left: n,
          top: e,
          right: n + t.offsetWidth,
          bottom: e + t.offsetHeight,
        };
      }
      function W(t, e) {
        return "x" == e
          ? [t.left, t.right, t.right - t.left]
          : [t.top, t.bottom, t.bottom - t.top];
      }
      function x(t, e, n, o) {
        var i = W(t, o),
          r = i[0],
          a = i[1],
          s = i[2],
          c = W(e, o),
          u = c[0],
          l = c[1],
          h = c[2],
          d = W(n, o),
          p = d[0],
          m = d[1];
        return r < u && a > l
          ? 0
          : (r < u && s <= h) || (a > l && s > h)
          ? r - u - p
          : (r < u && s > h) || (a > l && s <= h)
          ? a - l + m
          : 0;
      }
      function j(t) {
        return "auto" == t
          ? 0
          : t.endsWith("px")
          ? parseInt(t)
          : (console.log("Unsupported length", t), 0);
      }
      function U(t) {
        if (!("ownerDocument" in t))
          return { left: 0, right: 0, top: 0, bottom: 0 };
        var e = t.ownerDocument.defaultView.getComputedStyle(t);
        return {
          left: j(e.scrollMarginLeft),
          right: j(e.scrollMarginRight),
          top: j(e.scrollMarginTop),
          bottom: j(e.scrollMarginBottom),
        };
      }
      function V(t, e) {
        var n = (function (t) {
          var e;
          return {
            left: j(
              (e =
                "ownerDocument" in t
                  ? t.ownerDocument.defaultView.getComputedStyle(t)
                  : t.document.defaultView.getComputedStyle(
                      window.document.documentElement
                    )).scrollPaddingLeft
            ),
            right: j(e.scrollPaddingRight),
            top: j(e.scrollPaddingTop),
            bottom: j(e.scrollPaddingBottom),
          };
        })(t);
        return {
          left: Math.max(0, e.left + n.left),
          right: Math.max(0, e.right - n.right),
          top: Math.max(0, e.top + n.top),
          bottom: Math.max(0, e.bottom - n.bottom),
        };
      }
      function H(t) {
        return t > -1 && t < 1;
      }
      function K(t, e, n, o, i) {
        M(
          "----------------------------------------------------------------------------------"
        ),
          M("Scrolling Into View:", e);
        for (
          var r = [], a = e, s = k(e), c = null != i ? i : Number.MAX_VALUE;
          a;

        ) {
          var u = T(a);
          u || (u = E(a));
          var l = U(a),
            h = k(u),
            d = V(u, h),
            p = { element: u, left: 0, top: 0 };
          if (
            (M(
              "Checking scroll div",
              u,
              "scroll adjusted =>",
              d,
              "target => ",
              s
            ),
            (o && "y" != o) ||
              !P(u, "y") ||
              ((p.top = x(s, d, l, "y")),
              i &&
                ((p.top = Math.min(c, Math.abs(p.top)) * (p.top < 0 ? -1 : 1)),
                (c -= Math.abs(p.top))),
              M("- checked y: " + p.top)),
            (o && "x" != o) ||
              !P(u, "x") ||
              ((p.left = x(s, d, l, "x")),
              i &&
                ((p.left =
                  Math.min(c, Math.abs(p.left)) * (p.left < 0 ? -1 : 1)),
                (c -= Math.abs(p.left))),
              M("- checked x: " + p.left)),
            r.push(p),
            i && !c)
          )
            break;
          if (!("ownerDocument" in u)) break;
          (a = u), (s = h);
        }
        for (var m = !1, g = 0, f = r; g < f.length; g++) {
          if (!H((p = f[g]).left) || !H(p.top)) {
            var v = Y(p.element),
              b = v[0],
              _ = v[1],
              y = v[2],
              C = v[3],
              N = v[4],
              F = v[5],
              O = C + p.top,
              R = y + p.left;
            (R = L(R, 0, N - b)),
              (O = L(O, 0, F - _)),
              (H(y - R) && H(C - O)) ||
                (p.element.scrollTo({ left: R, top: O, behavior: n }),
                m || (M("Scrolling:"), (m = !0)),
                M(
                  "- " +
                    p.top +
                    "," +
                    p.left +
                    " => " +
                    O +
                    ", " +
                    R +
                    ", behavior: " +
                    n,
                  p.element
                ));
          }
        }
      }
      function Y(t) {
        return "ownerDocument" in t
          ? [
              t.clientWidth,
              t.clientHeight,
              t.scrollLeft,
              t.scrollTop,
              t.scrollWidth,
              t.scrollHeight,
            ]
          : [
              t.innerWidth,
              t.innerHeight,
              t.scrollX,
              t.scrollY,
              t.document.documentElement.scrollWidth,
              t.document.documentElement.scrollHeight,
            ];
      }
      var X = new C("FocusNavigation").Debug,
        z = new C("GamepadEvents").Debug,
        J = (function () {
          function t(t, e) {
            (this.m_onActivateCallbacks = new b.a()),
              (this.m_onDeactivateCallbacks = new b.a()),
              (this.m_Controller = t),
              (this.m_ID = e),
              (this.m_Root = new ft(this, null, null)),
              this.m_Root.SetProperties({ layout: ut.COLUMN }),
              (window.GamepadNavTree = this);
          }
          return (
            (t.prototype.SetUseVirtualFocus = function (t) {
              this.m_bVirtualFocus = t;
            }),
            Object.defineProperty(t.prototype, "id", {
              get: function () {
                return this.m_ID;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "Root", {
              get: function () {
                return this.m_Root;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "Controller", {
              get: function () {
                return this.m_Controller;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.prototype.BUseVirtualFocus = function () {
              return this.m_bVirtualFocus;
            }),
            (t.prototype.CreateNode = function (t, e) {
              return new ft(this, t, e);
            }),
            (t.prototype.RegisterNavigationItem = function (t, e) {
              return (
                t.OnMount(e),
                function () {
                  return t.OnUnmount();
                }
              );
            }),
            (t.prototype.OnChildActivated = function (t) {
              this.m_bIsMounted &&
                this.m_Controller.OnGamepadNavigationTreeFocused(this, t);
            }),
            (t.prototype.GetLastFocusedNode = function () {
              return this.m_lastFocusNode;
            }),
            (t.prototype.GetLastFocusedMovementRect = function (t) {
              return "x" == t
                ? this.m_lastFocusNodeXMovement
                : "y" == t
                ? this.m_lastFocusNodeYMovement
                : void 0;
            }),
            Object.defineProperty(t.prototype, "OnActivateCallbacks", {
              get: function () {
                return this.m_onActivateCallbacks;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "OnDeactivateCallbacks", {
              get: function () {
                return this.m_onDeactivateCallbacks;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.prototype.OnActivate = function (t) {
              void 0 === t && (t = !0), t && this.TakeFocus(i.APPLICATION);
            }),
            (t.prototype.IsActiveFocusNavTree = function () {
              return this.m_Controller.IsActiveFocusNavTree(this);
            }),
            (t.prototype.TakeFocus = function (t, e) {
              void 0 === e && (e = !1);
              var n = !1;
              e
                ? (n = this.Root.BVisibleChildTakeFocus(t))
                : this.m_lastFocusNode &&
                  (n = this.m_lastFocusNode.BTakeFocus(t)),
                n || (n = this.Root.BTakeFocus(t)),
                n || this.TransferFocus(t, this.Root);
            }),
            (t.prototype.Activate = function () {
              this.m_Controller.OnGamepadNavigationTreeActivated(this);
            }),
            (t.prototype.Deactivate = function () {
              this.m_Controller.BlurNavTree(this);
            }),
            (t.prototype.BIsActive = function () {
              return this.m_Controller.IsActiveNavTree(this);
            }),
            (t.prototype.BIsActiveFocus = function () {
              return this.m_Controller.IsActiveFocusNavTree(this);
            }),
            (t.prototype.SetIsMounted = function () {
              this.m_bIsMounted = !0;
            }),
            (t.prototype.HandleButtonDownEventAsLogicalEvent = function (t) {
              var e = (function (t) {
                  var e = [
                      c.a.DIR_UP,
                      c.a.DIR_DOWN,
                      c.a.DIR_LEFT,
                      c.a.DIR_RIGHT,
                    ],
                    n = !0,
                    o = !1,
                    i = u[t.detail.button];
                  return (
                    i
                      ? ((o = !0), (n = d(t.target, i, t.detail)))
                      : -1 !== e.indexOf(t.detail.button) &&
                        ((o = !0),
                        (n = d(t.target, "vgp_ondirection", t.detail))),
                    { bUnhandled: n, bHadLogicalEventMapping: o }
                  );
                })(t),
                n = e.bUnhandled,
                o = e.bHadLogicalEventMapping;
              return (
                z(
                  "Logical gamepad Event fired: " +
                    c.a[t.detail.button] +
                    ", had logical event: " +
                    o +
                    ", was handled: " +
                    !n
                ),
                n &&
                  (n = this.m_Controller.FireUnhandledGamepadEventCallbacks(t)),
                t.stopPropagation(),
                n
              );
            }),
            (t.prototype.TransferFocus = function (t, e, n) {
              var o = this;
              this.m_Controller.BatchedUpdate(function () {
                return o.TransferFocusInternal(t, e, n);
              });
            }),
            (t.prototype.TransferFocusInternal = function (t, e, n) {
              var o = this.m_lastFocusNode;
              if (o != e) {
                X(
                  "Transfer focus in " +
                    this.id +
                    ", source: " +
                    i[t] +
                    ", from/to:",
                  null == o ? void 0 : o.m_element,
                  null == e ? void 0 : e.m_element
                );
                var r = { blurredNode: o, focusedNode: e, source: t },
                  a = (function (t, e) {
                    if (!e || !t) return null;
                    var n = e,
                      o = t;
                    for (; n.GetDepth() > o.GetDepth() && n.Parent; )
                      n = n.Parent;
                    for (; o.GetDepth() > n.GetDepth() && o.Parent; )
                      o = o.Parent;
                    for (; n != o && n && o; ) (n = n.Parent), (o = o.Parent);
                    return n;
                  })(o, e);
                if (o) {
                  o.SetHasFocus(!1);
                  for (var s = o; s && s != a; s = s.Parent)
                    s.SetFocusWithin(!1);
                }
                if (e) {
                  e.SetHasFocus(!0);
                  for (var c = e; c && c != a; c = c.Parent)
                    c.SetFocusWithin(!0);
                }
                var u = this.m_Controller.OnFocusChangeStart(t, this, o, e);
                e &&
                  (e.UpdateParentActiveChild(),
                  this.BUseVirtualFocus() ||
                    e.Element.focus({ preventScroll: !0 }),
                  (function (t, e) {
                    for (
                      var n,
                        o,
                        i,
                        r,
                        a = t.Element,
                        s = t,
                        c =
                          null === (n = t.m_Properties) || void 0 === n
                            ? void 0
                            : n.scrollIntoViewType,
                        u = t.Parent;
                      u;
                      u = u.Parent
                    )
                      (null === (o = u.m_Properties) || void 0 === o
                        ? void 0
                        : o.scrollIntoViewWhenChildFocused) && (s = u),
                        void 0 === c &&
                          (c =
                            null === (i = u.m_Properties) || void 0 === i
                              ? void 0
                              : i.scrollIntoViewType);
                    if (
                      (void 0 === c && (c = B ? ht.NoTransform : ht.Standard),
                      a)
                    ) {
                      if (
                        (null === (r = s.m_Properties) || void 0 === r
                          ? void 0
                          : r.fnScrollIntoViewHandler) &&
                        !1 !== s.m_Properties.fnScrollIntoViewHandler(t, e, s)
                      )
                        return;
                      var l = s.m_element,
                        h =
                          c == ht.NoTransform ||
                          c == ht.NoTransformSparseContent;
                      if (e) {
                        var d = l.getBoundingClientRect(),
                          p = !1;
                        ((G && performance.now() - G < 500) ||
                          d.bottom < -300 ||
                          d.top > window.innerHeight + 300) &&
                          (p = !0);
                        var m = p ? "auto" : "smooth";
                        p && (G = performance.now()),
                          t.Tree.Controller.BIsRestoringHistory() &&
                            (m = "auto"),
                          h
                            ? K(0, l, m)
                            : l.scrollIntoView({
                                behavior: m,
                                block: "nearest",
                              });
                      } else
                        h
                          ? K(0, l, "auto")
                          : l.scrollIntoView({
                              behavior: "auto",
                              block: "nearest",
                              inline: "nearest",
                            });
                    }
                  })(e, o)),
                  o &&
                    (d(o.Element, "vgp_onblur", r),
                    !o.m_FocusRing ||
                      (e && o.m_FocusRing == e.m_FocusRing) ||
                      o.m_FocusRing.OnBlur(t, o, e)),
                  e &&
                    (this.OnChildActivated(t),
                    d(e.Element, "vgp_onfocus", r),
                    e.m_FocusRing &&
                      (o && e.m_FocusRing == o.m_FocusRing
                        ? e.m_FocusRing.OnFocusChange(t, o, e)
                        : e.m_FocusRing.OnFocus(t, e, o))),
                  (this.m_lastFocusNode = e),
                  "x" == n
                    ? (this.m_lastFocusNodeXMovement =
                        null == e ? void 0 : e.GetBoundingRect())
                    : "y" == n
                    ? (this.m_lastFocusNodeYMovement =
                        null == e ? void 0 : e.GetBoundingRect())
                    : ((this.m_lastFocusNodeXMovement = void 0),
                      (this.m_lastFocusNodeYMovement = void 0)),
                  this.m_Controller.OnFocusChangeComplete(u);
              }
            }),
            t
          );
        })();
      var q = new C("FocusNavigation").Debug,
        Z = (new C("GamepadEvents").Debug, "focus-nav-show-debug-focus-ring");
      var Q = (function () {
        function t() {
          (this.m_rgGamepadInputSources = []),
            (this.m_rgGamepadNavigationTrees = []),
            (this.m_LastActiveNavTree = null),
            (this.m_LastActiveFocusNavTree = null),
            (this.m_bGlobalEventsInitialized = !1),
            (this.m_bSuppressGamepadInput = !1),
            (this.m_FocusChangedCallbacks = new b.a()),
            (this.m_UnhandledButtonEventsCallbacks = new b.a()),
            (this.m_navigationSource = Object(b.b)({
              eActivationSourceType: c.b.UNKNOWN,
              nActiveGamepadIndex: -1,
              nLastActiveGamepadIndex: -1,
            })),
            (this.m_bShowDebugFocusRing = Object(b.b)(!1)),
            (this.m_bRestoringHistory = !1),
            (this.m_fnGamepadEventUpdateBatcher = function (t) {
              return t();
            }),
            (this.m_iFocusChangeStack = 0),
            (window.FocusNavController = this),
            this.m_bShowDebugFocusRing.Set(
              "shown" == sessionStorage.getItem(Z)
            );
        }
        return (
          (t.prototype.SetShowDebugFocusRing = function (t) {
            this.m_bShowDebugFocusRing.Set(t),
              (function (t) {
                sessionStorage.setItem(Z, t ? "shown" : void 0);
              })(t);
          }),
          (t.prototype.GetShowDebugFocusRing = function () {
            return this.m_bShowDebugFocusRing;
          }),
          (t.prototype.RegisterInputSource = function (t) {
            this.m_rgGamepadInputSources.push(t),
              t.RegisterForGamepadButtonDown(this.OnButtonDown),
              t.RegisterForGamepadButtonUp(this.OnButtonUp),
              t.RegisterForNavigationTypeChange(this.OnNavigationTypeChange);
          }),
          (t.prototype.SetGamepadEventUpdateBatcher = function (t) {
            this.m_fnGamepadEventUpdateBatcher = t;
          }),
          Object.defineProperty(t.prototype, "FocusChangedCallbacks", {
            get: function () {
              return this.m_FocusChangedCallbacks;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "NavigationSource", {
            get: function () {
              return this.m_navigationSource;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (t.prototype.DispatchVirtualButtonPress = function (t) {
            this.OnButtonDown(t, c.b.UNKNOWN, -1);
          }),
          (t.prototype.DispatchVirtualButtonClick = function (t) {
            this.OnButtonDown(t, c.b.GAMEPAD, -1),
              this.OnButtonUp(t, c.b.GAMEPAD, -1);
          }),
          (t.prototype.DispatchVirtualGamepad = function (t, e) {
            switch (t) {
              case "vgp_onbuttondown":
                this.OnButtonDown(e.button, e.source, -1, e.is_repeat);
                break;
              case "vgp_onbuttonup":
                this.OnButtonUp(e.button, e.source, -1);
            }
          }),
          (t.prototype.BGlobalGamepadButton = function (t) {
            return (
              t === c.a.STEAM_GUIDE ||
              t === c.a.STEAM_QUICK_MENU ||
              t === c.a.CANCEL
            );
          }),
          (t.prototype.GetEventTarget = function (t, e) {
            void 0 === e && (e = !1);
            var n = document.activeElement;
            if (this.m_LastActiveNavTree) {
              var o = this.m_navigationSource.Value.eActivationSourceType;
              if (
                !(
                  (o != c.b.GAMEPAD && o != c.b.KEYBOARD) ||
                  this.m_LastActiveNavTree.GetLastFocusedNode() ||
                  (e && this.m_LastActiveNavTree.TakeFocus(i.GAMEPAD, !0),
                  this.BGlobalGamepadButton(t))
                )
              )
                return null;
              this.m_LastActiveNavTree.GetLastFocusedNode() &&
                (n = this.m_LastActiveNavTree.GetLastFocusedNode().Element);
            }
            return n;
          }),
          (t.prototype.ChangeNavigationSource = function (t, e) {
            var n = this.m_navigationSource.Value,
              o = n.nLastActiveGamepadIndex;
            n.nActiveGamepadIndex >= 0 && (o = n.nActiveGamepadIndex),
              this.m_navigationSource.Set({
                eActivationSourceType: t,
                nActiveGamepadIndex: e,
                nLastActiveGamepadIndex: o,
              });
          }),
          (t.prototype.OnButtonDown = function (t, e, n, o) {
            var i;
            if (this.m_bSuppressGamepadInput)
              q(
                "Ignoring button press - gamepad input is suppressed by parent window"
              );
            else {
              this.ChangeNavigationSource(e, n);
              var r = this.GetEventTarget(t, !0);
              q(
                "Firing " +
                  c.a[t] +
                  " in tree " +
                  (null === (i = this.m_LastActiveNavTree) || void 0 === i
                    ? void 0
                    : i.id) +
                  " at ",
                r
              ),
                this.BatchedUpdate(function () {
                  return d(r, "vgp_onbuttondown", {
                    button: t,
                    source: e,
                    is_repeat: o,
                  });
                });
            }
          }),
          (t.prototype.OnButtonUp = function (t, e, n) {
            if (!this.m_bSuppressGamepadInput) {
              this.ChangeNavigationSource(e, n);
              var o = this.GetEventTarget();
              this.BatchedUpdate(function () {
                return d(o, "vgp_onbuttonup", {
                  button: t,
                  source: e,
                  is_repeat: !1,
                });
              });
            }
          }),
          (t.prototype.BatchedUpdate = function (t) {
            this.m_fnGamepadEventUpdateBatcher(t);
          }),
          (t.prototype.OnNavigationTypeChange = function (t) {
            var e;
            if (
              (this.ChangeNavigationSource(t, -1),
              document.hasFocus() &&
                (t == c.b.MOUSE || t == c.b.TOUCH) &&
                this.m_LastActiveNavTree)
            ) {
              var n = this.m_LastActiveNavTree.GetLastFocusedNode(),
                o = (function (t) {
                  if (!w(t)) return !1;
                  var e = t.tagName,
                    n = ((o = t), "INPUT" === o.nodeName ? t.type : null);
                  var o;
                  return (function (t, e) {
                    switch (t) {
                      case "TEXTAREA":
                        return !0;
                      case "INPUT":
                        switch (e) {
                          case "date":
                          case "datetime-local":
                          case "datetime":
                          case "email":
                          case "month":
                          case "number":
                          case "password":
                          case "search":
                          case "tel":
                          case "text":
                          case "time":
                          case "url":
                          case "week":
                            return !0;
                          default:
                            return !1;
                        }
                      default:
                        return !1;
                    }
                  })(e, n);
                })(null == n ? void 0 : n.Element)
                  ? n
                  : null;
              null === (e = this.m_LastActiveNavTree) ||
                void 0 === e ||
                e.TransferFocus(i.BROWSER, o);
            }
          }),
          (t.prototype.NewGamepadNavigationTree = function (t) {
            return new J(this, t);
          }),
          (t.prototype.RegisterGamepadNavigationTree = function (t, e) {
            var n = this;
            if ((t.SetIsMounted(), e))
              this.m_rgGamepadNavigationTrees.unshift(t);
            else {
              this.m_rgGamepadNavigationTrees.push(t);
              var o = t.GetLastFocusedNode();
              this.SetActiveNavTree(t, !0),
                o &&
                  this.m_FocusChangedCallbacks.Dispatch(i.APPLICATION, null, o);
            }
            return (
              this.m_bGlobalEventsInitialized || this.BindGlobalEventHandlers(),
              function () {
                return n.UnregisterGamepadNavigationTree(t);
              }
            );
          }),
          (t.prototype.UnregisterGamepadNavigationTree = function (t) {
            I.a(this.m_rgGamepadNavigationTrees, t),
              this.m_LastActiveNavTree == t &&
                ((this.m_LastActiveNavTree = null),
                this.SetActiveNavTree(null, !0));
          }),
          (t.prototype.GetGamepadNavTreeByID = function (t) {
            var e = this.m_rgGamepadNavigationTrees.findIndex(function (e) {
              return e.id == t;
            });
            return e >= 0 ? this.m_rgGamepadNavigationTrees[e] : null;
          }),
          (t.prototype.OnGamepadNavigationTreeActivated = function (t) {
            this.SetActiveNavTree(t, !1);
          }),
          (t.prototype.OnGamepadNavigationTreeFocused = function (t, e, n) {
            void 0 === n && (n = !1),
              t != this.m_LastActiveFocusNavTree &&
                t != this.m_LastActiveNavTree &&
                q(
                  "There was a focus event in " +
                    t.id +
                    ", but the active nav tree is " +
                    this.m_LastActiveFocusNavTree.id +
                    " so it is being ignored.  Source: " +
                    i[e] +
                    "."
                );
          }),
          (t.prototype.BlurNavTree = function (t) {
            this.m_LastActiveNavTree == t && this.SetActiveNavTree(null, !0),
              I.a(this.m_rgGamepadNavigationTrees, t),
              this.m_rgGamepadNavigationTrees.unshift(t);
          }),
          (t.prototype.IsActiveFocusNavTree = function (t) {
            return t == this.m_LastActiveFocusNavTree;
          }),
          (t.prototype.IsActiveNavTree = function (t) {
            return t == this.m_LastActiveNavTree;
          }),
          (t.prototype.SetActiveNavTree = function (t, e) {
            if (
              (void 0 === e && (e = !1), !t || this.m_LastActiveNavTree != t)
            ) {
              var n = this.m_LastActiveNavTree;
              n && I.a(this.m_rgGamepadNavigationTrees, n),
                t ||
                  (this.m_rgGamepadNavigationTrees.length &&
                    (t = this.m_rgGamepadNavigationTrees[
                      this.m_rgGamepadNavigationTrees.length - 1
                    ]));
              var o = this.m_LastActiveFocusNavTree == t;
              t && I.a(this.m_rgGamepadNavigationTrees, t),
                (this.m_LastActiveNavTree = t),
                (t && t.BUseVirtualFocus()) ||
                  (this.m_LastActiveFocusNavTree = t),
                q(
                  "Move from nav tree " +
                    (null == n ? void 0 : n.id) +
                    " to nav tree " +
                    (null == t ? void 0 : t.id) +
                    " " +
                    (e ? "taking focus" : "no focus")
                ),
                n && this.m_rgGamepadNavigationTrees.push(n),
                t &&
                  (this.m_rgGamepadNavigationTrees.push(t),
                  t.OnActivate(!o && e)),
                n && n.OnDeactivateCallbacks.Dispatch(n, t),
                t && t.OnActivateCallbacks.Dispatch(t, n);
            }
          }),
          (t.prototype.BindGlobalEventHandlers = function () {
            this.m_bGlobalEventsInitialized ||
              (this.m_bGlobalEventsInitialized = !0);
          }),
          (t.prototype.OnFocusChangeStart = function (t, e, n, o) {
            return (
              0 == this.m_iFocusChangeStack
                ? (this.m_ActiveFocusChange = { source: t, from: n, to: o })
                : !this.m_ActiveFocusChange.from &&
                  n &&
                  (this.m_ActiveFocusChange.from = n),
              this.m_iFocusChangeStack++
            );
          }),
          (t.prototype.OnFocusChangeComplete = function (t) {
            if (
              (this.m_iFocusChangeStack--,
              Object(f.a)(
                t == this.m_iFocusChangeStack,
                "out of order focus pop"
              ),
              0 == this.m_iFocusChangeStack)
            ) {
              var e = this.m_ActiveFocusChange,
                n = e.source,
                o = e.from,
                i = e.to;
              this.m_FocusChangedCallbacks.Dispatch(n, o, i);
            }
          }),
          (t.prototype.RegisterForUnhandledButtonDownEvents = function (t) {
            return this.m_UnhandledButtonEventsCallbacks.Register(t);
          }),
          (t.prototype.FireUnhandledGamepadEventCallbacks = function (t) {
            return (
              !this.m_UnhandledButtonEventsCallbacks.CountRegistered() ||
              (this.m_UnhandledButtonEventsCallbacks.Dispatch(t), !1)
            );
          }),
          (t.prototype.SetSuppressGamepadInput = function (t) {
            this.m_bSuppressGamepadInput = t;
          }),
          (t.prototype.TakeFocusChangingIFrame = function () {
            window.focus();
            var t = this.m_LastActiveFocusNavTree || this.m_LastActiveNavTree;
            t && t.TakeFocus(i.APPLICATION);
          }),
          (t.prototype.BIsRestoringHistory = function () {
            return this.m_bRestoringHistory;
          }),
          (t.prototype.RestoreHistoryTransaction = function (t) {
            return Object(r.b)(this, void 0, void 0, function () {
              return Object(r.e)(this, function (e) {
                switch (e.label) {
                  case 0:
                    (this.m_bRestoringHistory = !0), (e.label = 1);
                  case 1:
                    return e.trys.push([1, , 3, 4]), [4, t()];
                  case 2:
                    return e.sent(), [3, 4];
                  case 3:
                    return (this.m_bRestoringHistory = !1), [7];
                  case 4:
                    return [2];
                }
              });
            });
          }),
          Object(r.c)([v.a], t.prototype, "OnButtonDown", null),
          Object(r.c)([v.a], t.prototype, "OnButtonUp", null),
          Object(r.c)([v.a], t.prototype, "OnNavigationTypeChange", null),
          t
        );
      })();
      var $ = (function () {
        function t(t) {
          (this.m_node = t), (this.m_History = new D(t));
        }
        return (
          (t.prototype.TakeFocus = function (t) {
            return this.m_node.BTakeFocus(t ? i.GAMEPAD : i.APPLICATION, t);
          }),
          (t.prototype.ParentTakeFocus = function (t) {
            this.m_node.Parent.BTakeFocus(t ? i.GAMEPAD : i.APPLICATION, t);
          }),
          (t.prototype.ChildTakeFocus = function (t) {
            return this.m_node.BChildTakeFocus(
              t ? i.GAMEPAD : i.APPLICATION,
              t
            );
          }),
          (t.prototype.FocusVisibleChild = function (t) {
            return this.m_node.BVisibleChildTakeFocus(t);
          }),
          (t.prototype.BHasFocus = function () {
            return this.m_node.BHasFocus();
          }),
          (t.prototype.BFocusWithin = function () {
            return this.m_node.BFocusWithin();
          }),
          Object.defineProperty(t.prototype, "NavKey", {
            get: function () {
              return this.m_node.NavKey;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (t.prototype.PushState = function () {
            this.m_History.PushState();
          }),
          (t.prototype.PopState = function () {
            this.m_History && this.m_History.PopState();
          }),
          (t.prototype.NavTree = function () {
            return this.m_node.Tree;
          }),
          (t.prototype.Node = function () {
            return this.m_node;
          }),
          t
        );
      })();
      function tt(t, e, n) {
        return "x" == t
          ? e.x + e.width > n.x && e.x < n.x + n.width
          : "y" == t
          ? e.y + e.height > n.y && e.y < n.y + n.height
          : (Object(f.a)(!1, "Invalid axis " + t), !1);
      }
      function et(t, e, n) {
        var o;
        return (
          "x" == t
            ? (o = Math.min(e.x + e.width, n.x + n.width) - Math.max(e.x, n.x))
            : "y" == t
            ? (o =
                Math.min(e.y + e.height, n.y + n.height) - Math.max(e.y, n.y))
            : (Object(f.a)(!1, "Invalid axis " + t), (o = 0)),
          o < 0 ? 0 : o
        );
      }
      function nt(t, e, n) {
        var o = e[t],
          i = (function (t, e) {
            return "x" == t
              ? { min: e.x, max: e.x + e.width }
              : "y" == t
              ? { min: e.y, max: e.y + e.height }
              : void Object(f.a)(!1, "Invalid axis " + t);
          })(t, n);
        return o < i.min ? i.min - o : o > i.max ? o - i.max : 0;
      }
      function ot(t) {
        if (!t) return ut.NONE;
        var e = t.ownerDocument.defaultView,
          n = e.getComputedStyle(t);
        if ("flex" == n.display)
          switch (n.flexDirection) {
            case "row":
              return "wrap" == n.flexWrap ? ut.GRID : ut.ROW;
            case "row-reverse":
              return ut.ROW_REVERSE;
            case "column":
              return ut.COLUMN;
            case "column-reverse":
              return ut.COLUMN_REVERSE;
          }
        else {
          if ("grid" == n.display) return ut.GRID;
          if (t.childElementCount > 0) {
            var o = e.getComputedStyle(t.firstElementChild);
            if ("left" === o.float) return ut.ROW;
            if ("right" === o.float) return ut.ROW_REVERSE;
            if ("inline" === o.display || "inline-block" === o.display)
              return ut.GRID;
          }
        }
        return ut.COLUMN;
      }
      function it(t) {
        switch (t) {
          case c.a.DIR_UP:
          case c.a.DIR_DOWN:
            return "y";
          case c.a.DIR_LEFT:
          case c.a.DIR_RIGHT:
            return "x";
          default:
            return;
        }
      }
      function rt(t, e, n) {
        var o,
          i = [],
          r = t.GetChildren(),
          a = r[0],
          s = (r[1], t.GetActiveChild()),
          c = s ? s.Element.getBoundingClientRect() : null;
        if (s) {
          if (
            (m = ct(s, e, n)) &&
            !m.offScreen &&
            (o = at(s, m, m.overlap, n)) &&
            !o.visibility.offScreen
          )
            return o;
          m && i.push({ child: s, visibility: m });
        }
        for (var u, l = n || c, h = 0; h < a.length; h++) {
          if ((f = a[h]) != s)
            (m = ct(f, e, l)) && i.push({ child: f, visibility: m });
        }
        i.sort(st);
        for (var d = 0, p = i; d < p.length; d++) {
          var m,
            g = p[d],
            f = g.child;
          if ((m = g.visibility).offScreen && u) {
            if (!u.visibility.offScreen) break;
            if (m.distance > u.visibility.distance) break;
          }
          var v = f == s ? o : at(f, m, m.overlap || e, l);
          v && (!u || st(v, u) < 0) && (u = v);
        }
        return u;
      }
      function at(t, e, n, o) {
        switch (t.GetFocusable()) {
          case "none":
            return null;
          case "children":
            return rt(t, e.overlap || n, o);
          case "self":
            return { child: t, visibility: e };
        }
      }
      function st(t, e) {
        var n = t.visibility,
          o = e.visibility;
        return n.offScreen
          ? o.offScreen
            ? n.distance - o.distance
            : 1
          : o.offScreen
          ? -1
          : n.distance - o.distance;
      }
      function ct(t, e, n) {
        var o,
          i,
          r,
          a,
          s,
          c = t.Element.getBoundingClientRect(),
          u = t.GetFocusable();
        if ("none" == u) return null;
        if ("self" == u) {
          if (
            c.top < e.top ||
            c.right > e.right ||
            c.bottom > e.bottom ||
            c.left < e.left
          ) {
            var l = c.top + c.height / 2,
              h = c.left + c.width / 2;
            if (l < e.top) return { offScreen: "top", distance: e.top - l };
            if (h > e.right)
              return { offScreen: "right", distance: h - e.right };
            if (l > e.bottom)
              return { offScreen: "bottom", distance: l - e.bottom };
            if (h < e.left) return { offScreen: "left", distance: e.left - h };
          }
          n &&
            ((i = c),
            (a = 0),
            (s = 0),
            (r = n).right < i.left
              ? (a = i.left - r.right)
              : r.left > i.right && (a = r.left - i.right),
            r.bottom < i.top
              ? (s = i.top - r.bottom)
              : r.top > i.bottom && (s = r.top - i.bottom),
            (o = Math.sqrt(a * a + s * s)));
        } else if ("children" == u) {
          var d = t.Element;
          if (d.scrollHeight > c.height || d.scrollWidth > c.width) {
            var p = d.ownerDocument.defaultView.getComputedStyle(d);
            if ("visible" == p.overflowX || "visible" == p.overflowY)
              return { overlap: e };
          }
          if (c.bottom < e.top)
            return { offScreen: "top", distance: e.top - c.bottom };
          if (c.left > e.right)
            return { offScreen: "right", distance: c.left - e.right };
          if (c.top > e.bottom)
            return { offScreen: "bottom", distance: c.top - e.bottom };
          if (c.right < e.left)
            return { offScreen: "left", distance: e.left - c.right };
        }
        return {
          overlap: {
            top: Math.max(c.top, e.top),
            right: Math.min(c.right, e.right),
            bottom: Math.min(c.bottom, e.bottom),
            left: Math.max(c.left, e.left),
          },
          distance: o,
        };
      }
      var ut,
        lt,
        ht,
        dt,
        pt,
        mt = new C("FocusNavigationMovement").Debug;
      !(function (t) {
        (t[(t.NONE = 0)] = "NONE"),
          (t[(t.COLUMN = 1)] = "COLUMN"),
          (t[(t.ROW = 2)] = "ROW"),
          (t[(t.COLUMN_REVERSE = 3)] = "COLUMN_REVERSE"),
          (t[(t.ROW_REVERSE = 4)] = "ROW_REVERSE"),
          (t[(t.GRID = 5)] = "GRID"),
          (t[(t.GEOMETRIC = 6)] = "GEOMETRIC");
      })(ut || (ut = {})),
        (function (t) {
          (t[(t.FIRST = 0)] = "FIRST"),
            (t[(t.LAST = 1)] = "LAST"),
            (t[(t.MAINTAIN_X = 2)] = "MAINTAIN_X"),
            (t[(t.MAINTAIN_Y = 3)] = "MAINTAIN_Y"),
            (t[(t.PREFERRED_CHILD = 4)] = "PREFERRED_CHILD");
        })(lt || (lt = {})),
        (function (t) {
          (t[(t.Standard = 0)] = "Standard"),
            (t[(t.NoTransform = 1)] = "NoTransform"),
            (t[(t.NoTransformSparseContent = 2)] = "NoTransformSparseContent");
        })(ht || (ht = {})),
        (function (t) {
          (t[(t.LAZY = 0)] = "LAZY"),
            (t[(t.START = 1)] = "START"),
            (t[(t.CENTER = 2)] = "CENTER"),
            (t[(t.END = 3)] = "END"),
            (t[(t.NEAREST = 4)] = "NEAREST"),
            (t[(t.NONE = 5)] = "NONE");
        })(dt || (dt = {})),
        (function (t) {
          (t[(t.INVALID = 0)] = "INVALID"),
            (t[(t.FORWARD = 1)] = "FORWARD"),
            (t[(t.BACKWARD = 2)] = "BACKWARD");
        })(pt || (pt = {}));
      var gt,
        ft = (function () {
          function t(t, e, n) {
            (this.m_rgChildren = []),
              (this.m_iActiveChild = -1),
              (this.m_bChildrenSorted = !1),
              (this.m_bAutoFocusChild = !1),
              (this.m_bFocused = !1),
              (this.m_FocusCallbackList = new b.a()),
              (this.m_bFocusWithin = !1),
              (this.m_FocusWithinCallbackList = new b.a()),
              (this.m_ActionDescriptionsChangedCallbackList = new b.a()),
              (this.m_RetainFocusParent = null),
              (this.m_rgNavigationHandlers = []),
              (this.m_rgFocusHandlers = []),
              (this.m_Tree = t),
              (this.m_Parent = e),
              (this.m_FocusRing = n),
              (this.m_nDepth = e ? e.m_nDepth + 1 : 0);
          }
          return (
            (t.prototype.CreateHandle = function () {
              return new $(this);
            }),
            Object.defineProperty(t.prototype, "Tree", {
              get: function () {
                return this.m_Tree;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "NavKey", {
              get: function () {
                return this.m_Properties && this.m_Properties.navKey;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "Element", {
              get: function () {
                return this.m_element;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "Parent", {
              get: function () {
                return this.m_Parent;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.prototype.SetProperties = function (t) {
              var e,
                n,
                o,
                i =
                  ((n =
                    null === (e = this.m_Properties) || void 0 === e
                      ? void 0
                      : e.actionDescriptionMap),
                  (o = null == t ? void 0 : t.actionDescriptionMap),
                  !(null == n || null == o
                    ? n === o
                    : "object" == typeof n &&
                      "object" == typeof o &&
                      Object.keys(n).length === Object.keys(o).length &&
                      Object.keys(n).every(function (t) {
                        return o.hasOwnProperty(t) && n[t] === o[t];
                      })));
              (this.m_Properties = t || {}),
                i && this.m_ActionDescriptionsChangedCallbackList.Dispatch(),
                this.m_Properties.retainFocus
                  ? this.m_RetainFocusParent != this &&
                    this.SetRetainFocusParent(this)
                  : this.m_RetainFocusParent == this &&
                    this.SetRetainFocusParent(null),
                this.m_element && this.RegisterDOMEvents();
            }),
            (t.prototype.BWantsAutoFocus = function () {
              return this.m_Properties.autoFocus || this.m_bAutoFocusChild;
            }),
            (t.prototype.BWantsPreferredFocus = function () {
              return this.m_Properties.preferredFocus;
            }),
            (t.prototype.BWantsFocusRing = function () {
              return (
                !this.m_Properties.noFocusRing ||
                this.m_Tree.Controller.GetShowDebugFocusRing().Value
              );
            }),
            (t.prototype.GetBoundingRect = function () {
              return this.m_element && this.m_element.getBoundingClientRect();
            }),
            (t.prototype.GetScrollSnapProps = function () {
              return this.m_Properties;
            }),
            (t.prototype.SetHasFocus = function (t) {
              t != this.m_bFocused &&
                ((this.m_bFocused = t),
                this.m_FocusCallbackList.Dispatch(this.m_bFocused));
            }),
            (t.prototype.SetFocusWithin = function (t) {
              var e;
              t != this.m_bFocusWithin &&
                ((this.m_bFocusWithin = t),
                this.m_FocusWithinCallbackList.Dispatch(this.m_bFocusWithin),
                (null === (e = this.m_Properties) || void 0 === e
                  ? void 0
                  : e.onFocusWithin) &&
                  this.m_Properties.onFocusWithin(this.m_bFocusWithin));
            }),
            (t.prototype.BHasFocus = function () {
              return this.m_bFocused;
            }),
            (t.prototype.BFocusWithin = function () {
              return this.m_bFocusWithin;
            }),
            Object.defineProperty(t.prototype, "FocusCallbackList", {
              get: function () {
                return this.m_FocusCallbackList;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "FocusWithinCallbackList", {
              get: function () {
                return this.m_FocusWithinCallbackList;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(
              t.prototype,
              "ActionDescriptionChangedCallbackList",
              {
                get: function () {
                  return this.m_ActionDescriptionsChangedCallbackList;
                },
                enumerable: !1,
                configurable: !0,
              }
            ),
            (t.prototype.GetActiveActionDescriptions = function () {
              return this.BuildConsolidatedActionDescriptionMap({});
            }),
            (t.prototype.BuildConsolidatedActionDescriptionMap = function (t) {
              var e,
                n =
                  null === (e = this.m_Properties) || void 0 === e
                    ? void 0
                    : e.actionDescriptionMap;
              if (n)
                for (var o in n) {
                  var i = o;
                  void 0 === t[i] && (t[i] = n[i]);
                }
              return this.m_Parent
                ? this.m_Parent.BuildConsolidatedActionDescriptionMap(t)
                : t;
            }),
            (t.prototype.AddChild = function (t) {
              this.m_rgChildren.push(t),
                (this.m_bChildrenSorted = !1),
                this.m_element && this.RegisterDOMEvents(),
                this.m_RetainFocusParent &&
                  t.SetRetainFocusParent(this.m_RetainFocusParent);
            }),
            (t.prototype.OnMount = function (t) {
              (this.m_element = t),
                this.m_Parent
                  ? this.m_Parent.AddChild(this)
                  : Object(f.a)(
                      this == this.m_Tree.Root,
                      "Only root should have no parent"
                    ),
                this.RegisterDOMEvents();
              var e =
                this.m_Properties.autoFocus ||
                (this.m_RetainFocusParent &&
                  this.m_RetainFocusParent.BHasFocus());
              if (this.BWantsAutoFocus() || e) {
                var n = -1;
                this.m_rgChildren.length &&
                  (this.EnsureChildrenSorted(),
                  (n = this.m_rgChildren.findIndex(function (t) {
                    return t.BWantsAutoFocus();
                  }))),
                  (this.m_Properties.autoFocus || e || -1 !== n) &&
                    ((this.m_iActiveChild = n),
                    !this.m_Parent || this.m_Parent.m_element
                      ? this.BTakeFocus(i.APPLICATION)
                      : (this.m_Parent.m_bAutoFocusChild = !0));
              } else if (this.m_rgChildren.length) {
                var o = this.m_rgChildren.findIndex(function (t) {
                  return t.BFocusWithin();
                });
                -1 != o &&
                  ((this.m_iActiveChild = o),
                  Object(f.a)(
                    this.m_bFocusWithin,
                    "Child has focus, we should be m_bFocusWithin"
                  ));
              }
            }),
            (t.prototype.OnUnmount = function () {
              this.m_bFocused &&
                (this.m_RetainFocusParent
                  ? this.m_RetainFocusParent.OnFocusedDecendantRemoved(this)
                  : this.m_Tree.TransferFocus(i.APPLICATION, null)),
                this.UnregisterDOMEvents(),
                this.m_Parent
                  ? this.m_Parent.RemoveChild(this)
                  : Object(f.a)(
                      this == this.m_Tree.Root,
                      "Only root should have no parent"
                    );
            }),
            (t.prototype.RegisterDOMEvents = function () {
              var t = this;
              !this.m_rgNavigationHandlers.length &&
                (this.m_rgChildren.length >= 2 ||
                  this.m_Properties.layout != ut.NONE ||
                  this.m_Properties.onMoveUp ||
                  this.m_Properties.onMoveRight ||
                  this.m_Properties.onMoveDown ||
                  this.m_Properties.onMoveLeft) &&
                this.m_rgNavigationHandlers.push(
                  h(this.m_element, this.OnNavigationEvent)
                ),
                (this.m_Properties.focusable ||
                  0 == this.m_rgChildren.length) &&
                  (this.m_rgFocusHandlers.length ||
                    (this.m_element.addEventListener("focus", this.OnDOMFocus),
                    this.m_element.addEventListener("blur", this.OnDOMBlur),
                    this.m_rgFocusHandlers.push(function () {
                      t.m_element.removeEventListener("focus", t.OnDOMFocus),
                        t.m_element.removeEventListener("blur", t.OnDOMBlur);
                    })));
            }),
            (t.prototype.RemoveChild = function (t) {
              var e = this.m_rgChildren.indexOf(t);
              Object(f.a)(-1 !== e, "Child was not found to remove"),
                -1 !== e &&
                  (e <= this.m_iActiveChild && this.m_iActiveChild--,
                  this.m_rgChildren.splice(e, 1));
            }),
            (t.prototype.UnregisterDOMEvents = function () {
              this.m_rgNavigationHandlers.forEach(function (t) {
                return t();
              }),
                (this.m_rgNavigationHandlers = []),
                this.m_rgFocusHandlers.forEach(function (t) {
                  return t();
                }),
                (this.m_rgFocusHandlers = []);
            }),
            (t.prototype.GetActiveChild = function () {
              return (
                this.EnsureChildrenSorted(),
                this.m_iActiveChild >= 0 &&
                this.m_iActiveChild < this.m_rgChildren.length
                  ? this.m_rgChildren[this.m_iActiveChild]
                  : null
              );
            }),
            (t.prototype.EnsureChildrenSorted = function (t) {
              if ((void 0 === t && (t = !1), !this.m_bChildrenSorted || t)) {
                var e = void 0;
                -1 != this.m_iActiveChild &&
                  (e = this.m_rgChildren[this.m_iActiveChild]),
                  this.m_rgChildren.sort(function (t, e) {
                    var n = t.m_element,
                      o = e.m_element;
                    if (!n) return o ? 1 : 0;
                    if (!o) return -1;
                    var i = n.compareDocumentPosition(o);
                    return i & Node.DOCUMENT_POSITION_PRECEDING
                      ? 1
                      : i & Node.DOCUMENT_POSITION_FOLLOWING
                      ? -1
                      : 0;
                  }),
                  e && (this.m_iActiveChild = this.m_rgChildren.indexOf(e)),
                  (this.m_bChildrenSorted = !0);
              }
            }),
            (t.prototype.GetLastFocusElement = function () {
              var t = this.GetActiveChild();
              return t ? t.GetLastFocusElement() : this.m_element;
            }),
            (t.prototype.OnDOMFocus = function (t) {
              this.m_bFocused || this.m_Tree.TransferFocus(i.BROWSER, this);
            }),
            (t.prototype.OnDOMBlur = function (t) {
              this.m_bFocused && this.m_Tree.TransferFocus(i.BROWSER, null);
            }),
            (t.prototype.UpdateParentActiveChild = function () {
              this.m_Parent &&
                (this.m_Parent.SetActiveChild(this),
                this.m_Parent.UpdateParentActiveChild());
            }),
            (t.prototype.GetFocusable = function () {
              var t = this.m_Properties,
                e = t.focusable,
                n = t.focusableIfNoChildren,
                o = t.childFocusDisabled,
                i = t.fnCanTakeFocus;
              return i && !i(this)
                ? "none"
                : e || (n && (o || 0 == this.m_rgChildren.length))
                ? "self"
                : !o && this.m_rgChildren.length
                ? "children"
                : "none";
            }),
            (t.prototype.BTakeFocus = function (t, e) {
              var n = this.FindFocusableNode(e);
              return !!n && (this.m_Tree.TransferFocus(t, n, it(e)), !0);
            }),
            (t.prototype.FindFocusableNode = function (t) {
              switch (this.GetFocusable()) {
                case "none":
                  return null;
                case "self":
                  return this;
                case "children":
                  return this.FindFocusableDescendant(t);
              }
            }),
            (t.prototype.BChildTakeFocus = function (t, e) {
              var n = this.FindFocusableDescendant(e);
              return !!n && (this.m_Tree.TransferFocus(t, n, it(e)), !0);
            }),
            (t.prototype.FindFocusableDescendant = function (t) {
              var e = it(t),
                n = this.m_Properties,
                o = n.focusableIfNoChildren;
              if (n.childFocusDisabled) return null;
              if (this.m_rgChildren.length) {
                this.EnsureChildrenSorted();
                var i = this.m_Properties.navEntryPreferPosition,
                  r = this.m_iActiveChild;
                if (r < 0 || r >= this.m_rgChildren.length) {
                  r = 0;
                  var a = this.GetLayout();
                  (a != ut.ROW_REVERSE &&
                    a != ut.COLUMN_REVERSE &&
                    i != lt.LAST) ||
                    (r = this.m_rgChildren.length - 1);
                }
                var s = void 0;
                if ((i != lt.MAINTAIN_X && i != lt.MAINTAIN_Y) || !e)
                  if (i == lt.PREFERRED_CHILD)
                    for (var c = 0, u = this.m_rgChildren; c < u.length; c++) {
                      var l = u[c];
                      if (
                        (s = l.BWantsPreferredFocus() && l.FindFocusableNode(t))
                      )
                        return s;
                    }
                  else
                    i == lt.LAST &&
                      (s = this.FindNextFocusableChildInDirection(
                        r + 1,
                        pt.BACKWARD,
                        t
                      ));
                else {
                  var h,
                    d = i == lt.MAINTAIN_X ? "x" : "y";
                  d == m[e] &&
                    (h = this.m_Tree.GetLastFocusedMovementRect(m[e])),
                    mt(
                      "Taking focus while preserving " +
                        lt[i] +
                        " preserved: " +
                        d +
                        " movement: " +
                        e +
                        ", node:",
                      h
                    );
                  var p = this.ComputeRelativeDirection(t, ut.GRID);
                  if (h) {
                    var g = p == pt.BACKWARD ? this.m_rgChildren.length - 1 : 0;
                    s = this.FindClosestChildInNextAxiallyAlignedSet(
                      d,
                      p,
                      t,
                      h,
                      g,
                      this.m_rgChildren[g].GetBoundingRect()
                    );
                  } else if (d != m[e]) {
                    g = p == pt.BACKWARD ? this.m_rgChildren.length : -1;
                    s = this.FindNextFocusableChildInDirection(g, p, t);
                  }
                }
                return (
                  s ||
                    (s = this.FindNextFocusableChildInDirection(
                      r - 1,
                      pt.FORWARD,
                      t
                    )),
                  s ||
                    (s = this.FindNextFocusableChildInDirection(
                      r,
                      pt.BACKWARD,
                      t
                    )),
                  s || (o ? this : null)
                );
              }
              return null;
            }),
            (t.prototype.BVisibleChildTakeFocus = function (t) {
              var e,
                n = rt(
                  this,
                  this.Element
                    ? this.Element.getBoundingClientRect()
                    : document.body.getBoundingClientRect()
                );
              return (
                mt(
                  "Focusing visible child, best child match is " +
                    (null === (e = null == n ? void 0 : n.child) || void 0 === e
                      ? void 0
                      : e.Element.className) +
                    " - " +
                    JSON.stringify(null == n ? void 0 : n.visibility)
                ),
                !!n && n.child.BTakeFocus(t)
              );
            }),
            (t.prototype.GetLayout = function () {
              return this.m_Properties.layout
                ? this.m_Properties.layout
                : this.m_rgChildren.length < 2
                ? ut.NONE
                : ot(this.m_element);
            }),
            (t.prototype.OnNavigationEvent = function (t) {
              var e = t.detail.button;
              if (this.BTryInternalNavigation(e)) return !0;
              var n = this.m_Properties,
                o = n.onMoveUp,
                i = n.onMoveRight,
                r = n.onMoveDown,
                a = n.onMoveLeft,
                s = !1;
              switch (e) {
                case c.a.DIR_UP:
                  o && (s = o(t.detail));
                  break;
                case c.a.DIR_RIGHT:
                  i && (s = i(t.detail));
                  break;
                case c.a.DIR_DOWN:
                  r && (s = r(t.detail));
                  break;
                case c.a.DIR_LEFT:
                  a && (s = a(t.detail));
              }
              return s;
            }),
            (t.prototype.BTryInternalNavigation = function (t) {
              var e,
                n = this.GetLayout(),
                o = this.ComputeRelativeDirection(t, n);
              if (
                (mt(
                  "Handling navigation event " +
                    c.a[t] +
                    " - " +
                    ut[n] +
                    " - " +
                    pt[o],
                  this.m_element
                ),
                o == pt.INVALID)
              )
                return !1;
              if (this.m_Properties.focusable && this.m_bFocused)
                return mt("Skipping navigation within focused element"), !1;
              if ((this.EnsureChildrenSorted(!0), n == ut.GRID))
                e = this.FindNextFocusableChildInGrid(
                  this.m_iActiveChild,
                  o,
                  t
                );
              else {
                var r = this.m_iActiveChild;
                -1 == r &&
                  (r = o == pt.FORWARD ? -1 : this.m_rgChildren.length),
                  (e = this.FindNextFocusableChildInDirection(r, o, t));
              }
              if (e) {
                var a = it(t);
                if (
                  this.GetScrollIntoViewType() == ht.NoTransformSparseContent
                ) {
                  var s =
                      ("y" == a ? window.innerHeight : window.innerWidth) /
                      3.33,
                    u = e.Element.getBoundingClientRect();
                  if (
                    (u.top > window.innerHeight &&
                      u.bottom > window.innerHeight + s) ||
                    (u.bottom < 0 && u.top < -s) ||
                    (u.left > window.innerWidth &&
                      u.right > window.innerWidth + s) ||
                    (u.right < 0 && u.left < -s)
                  )
                    return (
                      mt(
                        "Element too far away, scrolling " +
                          s +
                          " on " +
                          a +
                          " axis "
                      ),
                      K(e.Element, e.Element, "smooth", a, s),
                      !0
                    );
                }
                return this.m_Tree.TransferFocus(i.GAMEPAD, e, a), !0;
              }
              return !1;
            }),
            (t.prototype.GetScrollIntoViewType = function () {
              var t;
              return (
                null === (t = this.m_Properties) || void 0 === t
                  ? void 0
                  : t.scrollIntoViewType
              )
                ? this.m_Properties.scrollIntoViewType
                : this.m_Parent
                ? this.m_Parent.GetScrollIntoViewType()
                : ht.Standard;
            }),
            (t.prototype.ComputeRelativeDirection = function (t, e) {
              var n = e == ut.ROW_REVERSE || e == ut.COLUMN_REVERSE;
              switch (e) {
                case ut.ROW:
                case ut.ROW_REVERSE:
                  switch (t) {
                    case c.a.DIR_LEFT:
                      return n ? pt.FORWARD : pt.BACKWARD;
                    case c.a.DIR_RIGHT:
                      return n ? pt.BACKWARD : pt.FORWARD;
                    default:
                      return pt.INVALID;
                  }
                case ut.COLUMN:
                case ut.COLUMN_REVERSE:
                  switch (t) {
                    case c.a.DIR_UP:
                      return n ? pt.FORWARD : pt.BACKWARD;
                    case c.a.DIR_DOWN:
                      return n ? pt.BACKWARD : pt.FORWARD;
                    default:
                      return pt.INVALID;
                  }
                case ut.GRID:
                  switch (t) {
                    case c.a.DIR_LEFT:
                    case c.a.DIR_UP:
                      return n ? pt.FORWARD : pt.BACKWARD;
                    case c.a.DIR_RIGHT:
                    case c.a.DIR_DOWN:
                      return n ? pt.BACKWARD : pt.FORWARD;
                    default:
                      return pt.INVALID;
                  }
                default:
                  return pt.INVALID;
              }
            }),
            (t.prototype.AdvanceIndex = function (t, e) {
              return t + (e == pt.FORWARD ? 1 : -1);
            }),
            (t.prototype.FindNextFocusableChildInDirection = function (
              t,
              e,
              n
            ) {
              for (
                var o = e == pt.FORWARD ? 1 : -1, i = t + o;
                i >= 0 && i < this.m_rgChildren.length;
                i += o
              ) {
                var r = this.m_rgChildren[i].FindFocusableNode(n);
                if (r) return r;
              }
              return null;
            }),
            (t.prototype.ScanChildren = function (t, e, n) {
              for (
                var o = e == pt.FORWARD ? 1 : -1, i = t;
                i >= 0 && i < this.m_rgChildren.length;
                i += o
              )
                if (n(this.m_rgChildren[i], i)) return i;
              return -1;
            }),
            (t.prototype.FindNextFocusableChildInGrid = function (t, e, n) {
              var o = n == c.a.DIR_UP || n == c.a.DIR_DOWN,
                i = this.GetLastFocusElement();
              if (!i || i == this.m_element)
                return (
                  Object(f.a)(!1, "No active child for grid navigation"),
                  this.FindFocusableDescendant(n)
                );
              var r = (this.GetActiveChild() || this).GetBoundingRect();
              if (n == c.a.DIR_UP || n == c.a.DIR_DOWN) {
                var a = this.m_Tree.GetLastFocusedMovementRect("x");
                a && ((r.x = a.x), (r.width = a.width));
              }
              if (o)
                for (var s = t; -1 != s; ) {
                  var u = this.ScanChildren(
                    this.AdvanceIndex(s, e),
                    e,
                    function (t) {
                      return !tt("y", r, t.GetBoundingRect());
                    }
                  );
                  if (-1 != u) {
                    var l = this.m_rgChildren[u].GetBoundingRect();
                    if (
                      (p = this.FindClosestChildInNextAxiallyAlignedSet(
                        "x",
                        e,
                        n,
                        r,
                        u,
                        l
                      ))
                    )
                      return p;
                  }
                  s = u;
                }
              else
                for (
                  var h = e == pt.FORWARD ? 1 : -1, d = this.AdvanceIndex(t, e);
                  d >= 0 && d < this.m_rgChildren.length;
                  d += h
                ) {
                  var p,
                    m = this.m_rgChildren[d];
                  if (!tt("y", r, m.GetBoundingRect())) return null;
                  if ((p = m.FindFocusableNode(n))) return p;
                }
              return null;
            }),
            (t.prototype.FindClosestChildInNextAxiallyAlignedSet = function (
              t,
              e,
              n,
              o,
              i,
              r
            ) {
              (!i || i < 0) && (i = 0);
              var a,
                s = [],
                c = { x: (a = o).x, y: a.y };
              this.ScanChildren(i, e, function (e) {
                var n = e.GetBoundingRect();
                return (
                  !(!r || tt(m[t], r, n)) ||
                  (s.push({
                    child: e,
                    overlap: et(t, o, n),
                    dist: nt(t, c, n),
                  }),
                  !1)
                );
              }),
                e == pt.BACKWARD && s.reverse(),
                s.sort(function (t, e) {
                  var n = e.overlap - t.overlap;
                  return 0 != n ? n : t.dist - e.dist;
                });
              for (var u = 0, l = s; u < l.length; u++) {
                var h = l[u].child.FindFocusableNode(n);
                if (h) return h;
              }
              return null;
            }),
            (t.prototype.GetChildren = function () {
              return (
                this.EnsureChildrenSorted(),
                [this.m_rgChildren, this.m_iActiveChild]
              );
            }),
            (t.prototype.SetActiveChild = function (e) {
              var n;
              e instanceof t
                ? (this.EnsureChildrenSorted(),
                  (n = this.m_rgChildren.indexOf(e)))
                : (n = e),
                (this.m_iActiveChild = n);
            }),
            (t.prototype.GetDepth = function () {
              return this.m_nDepth;
            }),
            (t.prototype.SetRetainFocusParent = function (t) {
              if (!this.m_Properties.retainFocus || t == this) {
                this.m_RetainFocusParent = t;
                for (var e = 0; e < this.m_rgChildren.length; e++)
                  this.m_rgChildren[e].SetRetainFocusParent(t);
              }
            }),
            (t.prototype.OnFocusedDecendantRemoved = function (t) {
              (t.m_Properties.focusable = !1),
                this.BChildTakeFocus(i.APPLICATION) ||
                  this.m_Tree.TransferFocus(i.APPLICATION, this);
            }),
            Object(r.c)([v.a], t.prototype, "OnDOMFocus", null),
            Object(r.c)([v.a], t.prototype, "OnDOMBlur", null),
            Object(r.c)([v.a], t.prototype, "OnNavigationEvent", null),
            t
          );
        })(),
        vt = "GamepadInput";
      function bt(t) {
        var e = t.split(".", 2),
          n = e[0],
          o = e[1];
        return (
          n &&
          o &&
          (function (t) {
            return "object" == typeof SteamClient && t in SteamClient;
          })(n) &&
          o in SteamClient[n]
        );
      }
      !(function (t) {
        (t[(t.PageUnloading = 0)] = "PageUnloading"),
          (t[(t.Unknown = 1)] = "Unknown"),
          (t[(t.None = 2)] = "None"),
          (t[(t.Basic = 3)] = "Basic"),
          (t[(t.Full = 4)] = "Full");
      })(gt || (gt = {}));
      var _t = (function () {
        function t(t) {
          var e = this;
          (this.m_bIsGamepadInputExternallyControlled = !1),
            (this.m_NavigationController = t),
            bt("BrowserView.RegisterForMessageFromParent") &&
            bt("BrowserView.PostMessageToParent")
              ? ((this.m_bIsGamepadInputExternallyControlled = !0),
                (this.m_postMessage = new Ct()))
              : ((this.m_bIsGamepadInputExternallyControlled =
                  window.top != window.self),
                (this.m_postMessage = new yt(window.top))),
            this.m_postMessage.RegisterForMessage(this.OnMessage),
            window.addEventListener("beforeunload", this.PostPageUnloading),
            this.m_NavigationController.RegisterForUnhandledButtonDownEvents(
              function (t) {
                return e.PostButtonPressToSteam(t.detail.button);
              }
            ),
            t.FocusChangedCallbacks.Register(this.OnFocusChanged),
            this.UpdateActionDescriptions({}),
            this.SendGameInputState("CGamepadWebBridgeClient constructor");
        }
        return (
          (t.prototype.BIsGamepadInputExternallyControlled = function () {
            return this.m_bIsGamepadInputExternallyControlled;
          }),
          (t.prototype.OnFocusChanged = function (t, e, n) {
            var o = n ? n.GetActiveActionDescriptions() : {};
            this.UpdateActionDescriptions(o);
          }),
          (t.prototype.UpdateActionDescriptions = function (t) {
            this.m_postMessage.PostMessage({
              type: "UpdateActionDescriptions",
              data: { descriptions: t },
            });
          }),
          (t.prototype.OnMessage = function (t) {
            switch (t.type) {
              case "TakeFocus":
                this.m_NavigationController.TakeFocusChangingIFrame();
                break;
              case "ForwardedGameEventDetail":
                this.m_NavigationController.DispatchVirtualGamepad(
                  t.data.event,
                  t.data.details
                );
            }
          }),
          (t.prototype.SendGameInputState = function (t) {
            var e = gt.Basic;
            window.bSupportsGamepadUI && (e = gt.Full),
              this.m_postMessage.PostMessage({
                type: "GameInputState",
                data: { source: t, support: e },
              });
          }),
          (t.prototype.PostButtonPressToSteam = function (t) {
            this.m_postMessage.PostMessage({
              type: "ButtonPressed",
              data: { button: t },
            });
          }),
          (t.prototype.PostPageUnloading = function () {
            this.m_postMessage.PostMessage({
              type: "PageUnloading",
              data: { location: window.location.href },
            });
          }),
          Object(r.c)([v.a], t.prototype, "OnFocusChanged", null),
          Object(r.c)([v.a], t.prototype, "OnMessage", null),
          Object(r.c)([v.a], t.prototype, "PostPageUnloading", null),
          t
        );
      })();
      var yt = (function () {
          function t(t) {
            (this.m_postWindow = t),
              window.addEventListener("message", this.OnMessage);
          }
          return (
            (t.prototype.RegisterForMessage = function (t) {
              this.m_fnCallback = t;
            }),
            (t.prototype.PostMessage = function (t) {
              var e = JSON.stringify(t);
              this.m_postWindow.postMessage(
                { gamepadMessage: vt, args: e },
                "*"
              );
            }),
            (t.prototype.OnMessage = function (t) {
              var e = null == t ? void 0 : t.data;
              if (e && e.gamepadMessage == vt && e.args) {
                var n = JSON.parse(e.args);
                this.m_fnCallback(n);
              }
            }),
            Object(r.c)([v.a], t.prototype, "OnMessage", null),
            t
          );
        })(),
        Ct = (function () {
          function t() {
            SteamClient.BrowserView.RegisterForMessageFromParent(
              this.OnMessage
            );
          }
          return (
            (t.prototype.RegisterForMessage = function (t) {
              this.m_fnCallback = t;
            }),
            (t.prototype.PostMessage = function (t) {
              var e = JSON.stringify(t);
              SteamClient.BrowserView.PostMessageToParent(vt, e);
            }),
            (t.prototype.OnMessage = function (t, e) {
              if (t == vt) {
                var n = JSON.parse(e);
                this.m_fnCallback(n);
              }
            }),
            Object(r.c)([v.a], t.prototype, "OnMessage", null),
            t
          );
        })(),
        Nt =
          (n("SHRt"),
          c.c,
          (function (t) {
            function e(e, n) {
              var o = t.call(this, n.m_Tree, n, n.m_FocusRing) || this;
              return (o.m_subNavTreeID = e), o;
            }
            return (
              Object(r.d)(e, t),
              (e.prototype.SetProperties = function (e) {
                var n = this,
                  o = this.m_Parent.m_Tree.Controller,
                  i = function () {
                    return (
                      o.GetGamepadNavTreeByID(n.m_subNavTreeID).Activate(), !1
                    );
                  };
                t.prototype.SetProperties.call(
                  this,
                  Object(r.a)(Object(r.a)({}, e), {
                    onMoveDown: i,
                    fnCanTakeFocus: i,
                  })
                );
              }),
              e
            );
          })(ft));
      var Ft = "VirtualKeyboardMessage";
      function Ot(t) {
        return t && t.type === Ft;
      }
      var Rt,
        At = (function () {
          function t() {
            window.addEventListener("message", this.OnMessage);
          }
          return (
            (t.prototype.ShowVirtualKeyboard = function () {
              this.SendMessage({ message: "ShowVirtualKeyboard" });
            }),
            (t.prototype.HideVirtualKeyboard = function (t) {
              this.SendMessage({ message: "HideVirtualKeyboard", msDelay: t });
            }),
            (t.prototype.OnBrowserViewMessage = function (t, e) {
              t == Ft && this.InternalDispatchMessage(JSON.parse(e));
            }),
            (t.prototype.OnMessage = function (t) {
              this.InternalDispatchMessage(t.data);
            }),
            (t.prototype.InternalDispatchMessage = function (t) {
              Ot(t) && t.message;
            }),
            (t.prototype.SendMessage = function (t) {
              var e = Object(r.a)({ type: "VirtualKeyboardMessage" }, t);
              bt("BrowserView.PostMessageToParent")
                ? SteamClient.BrowserView.PostMessageToParent(
                    e.type,
                    JSON.stringify(e)
                  )
                : (Object(f.a)(
                    window.parent && window.parent != window,
                    "No parent window to post to"
                  ),
                  window.parent.postMessage(e, "*"));
            }),
            Object(r.c)([v.a], t.prototype, "OnBrowserViewMessage", null),
            Object(r.c)([v.a], t.prototype, "OnMessage", null),
            t
          );
        })(),
        St = n("8+ko"),
        Dt = n.n(St);
      function It(t) {
        var e = 0;
        t.children().each(function () {
          var t = s()(this),
            n = t.css("zIndex");
          "auto" === n
            ? t.css("zIndex", 0)
            : isNaN(parseInt(n)) || (e = Math.max(e, parseInt(n)));
        });
        var n = s()("<div/>", {
            style:
              "position: absolute; pointer-events: none; top: 0; left: 0; z-index: " +
              ((e || 100) + 1) +
              "; width: 0; height: 0; padding: 0; margin: 0; background: none; overflow: visible; display: block;",
          }),
          o = null;
        t.prepend(n);
        var i = function (t) {
          if ((o && (o.remove(), (o = null)), t && t.BWantsFocusRing())) {
            var e = t.GetBoundingRect(),
              i = n[0].getBoundingClientRect();
            (o = s()("<div/>", {
              style: "position: absolute; pointer-events: none; ",
              class: Dt.a.FocusRing,
            })).css({
              left: e.x - i.x - 0,
              top: e.y - i.y - 0,
              height: e.height,
              width: e.width,
            }),
              n.append(o);
          }
        };
        return {
          OnBlur: function () {
            return i(null);
          },
          OnFocus: function (t, e) {
            return i(e);
          },
          OnFocusChange: function (t, e, n) {
            return i(n);
          },
        };
      }
      function wt(t) {
        return t ? Function("event", t) : null;
      }
      function Et(t) {
        this.click(), t.stopPropagation();
      }
      function Tt(t) {
        s()(this).find("a")[0].click();
      }
      function Pt(t) {
        var e = t.currentTarget;
        if (!w(e)) return !1;
        var n = 3.33,
          o = "smooth",
          i = e.ownerDocument,
          r = i.defaultView;
        switch (t.detail.button) {
          case c.a.DIR_UP:
            if (r.scrollY > 3)
              return r.scrollBy({ top: -r.innerHeight / n, behavior: o }), !0;
            break;
          case c.a.DIR_RIGHT:
            if (r.scrollX + r.innerWidth < i.body.clientWidth - 3)
              return r.scrollBy({ left: r.innerWidth / n, behavior: o }), !0;
            break;
          case c.a.DIR_DOWN:
            if (r.scrollY + r.innerHeight < i.body.clientHeight - 3)
              return r.scrollBy({ top: r.innerHeight / n, behavior: o }), !0;
            break;
          case c.a.DIR_LEFT:
            if (r.scrollX > 3)
              return r.scrollBy({ left: r.innerWidth / n, behavior: o }), !0;
        }
        return !1;
      }
      !(function (t) {
        (t[(t.Unknown = 0)] = "Unknown"),
          (t[(t.NotNeeded = 1)] = "NotNeeded"),
          (t[(t.InReactTree = 2)] = "InReactTree");
      })(Rt || (Rt = {}));
      var Lt = new At(),
        Mt = !1,
        Bt = null,
        Gt = null;
      function kt(t) {
        Mt ||
          ((Bt = new Q()),
          (window.legacyWebFocusNavController = Bt),
          new _t(Bt).BIsGamepadInputExternallyControlled() ||
            Bt.RegisterInputSource(t),
          (function (t) {
            s()("html").addClass("gpnav_active");
            var e = s()("body"),
              n = t.NewGamepadNavigationTree("legacy"),
              o = It(e);
            (n.Root.m_FocusRing = o),
              n.Root.SetProperties({
                scrollIntoViewType: ht.NoTransformSparseContent,
              }),
              xt.set(document.body, n.Root),
              Vt(document.body, n.Root),
              Xt(void 0, !0),
              t.RegisterGamepadNavigationTree(n, !1),
              s()(document.body).on("vgp_onbuttondown", function (t) {
                n.HandleButtonDownEventAsLogicalEvent(t.originalEvent);
              }),
              h(document.body, Pt),
              new MutationObserver(Wt).observe(document.body, {
                childList: !0,
                subtree: !0,
              }),
              (i = !0),
              (B = i);
            var i;
          })(Bt)),
          (Mt = !0);
      }
      function Wt(t) {
        for (var e = 0, n = t; e < n.length; e++) {
          var o = n[e],
            i = [],
            r = [];
          if ("childList" === o.type) {
            for (var a = 0; a < o.addedNodes.length; a++) {
              if ((u = o.addedNodes[a]).nodeType === Node.ELEMENT_NODE) {
                var c = u;
                c.parentElement && i.push(c);
              }
            }
            for (a = 0; a < o.removedNodes.length; a++) {
              var u;
              (u = o.removedNodes[a]).nodeType === Node.ELEMENT_NODE &&
                r.push(u);
            }
          }
          i.length && Xt(s()(i)), r.length && Yt(s()(r));
        }
      }
      var xt = new WeakMap(),
        jt = new WeakMap(),
        Ut = [];
      function Vt(t, e) {
        if (e instanceof ft) {
          var n = e.GetDepth();
          Ut[n] || (Ut[n] = []), Ut[n].push([t, e]);
        }
        xt.set(t, e);
      }
      function Ht(t, e) {
        var n = jt.has(t) ? jt.get(t) : [];
        n.push(e), jt.set(t, n);
      }
      function Kt(t) {
        return "jquery" in t
          ? xt.get(t[0]) || Rt.Unknown
          : xt.get(t) || Rt.Unknown;
      }
      function Yt(t) {
        t.find("*")
          .addBack()
          .each(function () {
            var t;
            null === (t = jt.get(this)) ||
              void 0 === t ||
              t.forEach(function (t) {
                return t();
              }),
              xt.delete(this),
              jt.delete(this),
              s()(this).attr("data-nav-modal") && Qt();
          });
      }
      function Xt(t, e) {
        void 0 === e && (e = !1);
        performance.now();
        var n =
          "a,button,textarea,input:not(input[type=hidden]),label:not([for]),[data-panel],[data-react-nav-root],[data-nav-modal]";
        s()(n, t)
          .addBack(n)
          .each(function () {
            var t;
            (function (t) {
              return "jquery" in t ? xt.has(t[0]) : xt.has(t);
            })((t = this)) || qt(t);
          }),
          (function () {
            for (var t = Ut.length - 1; t >= 0; t--)
              if (Ut[t])
                for (var e = 0, n = Ut[t]; e < n.length; e++) {
                  var o = n[e],
                    i = o[0],
                    r = o[1];
                  Ht(i, r.Tree.RegisterNavigationItem(r, i));
                }
            Ut = [];
          })();
      }
      function zt(t) {
        Yt(s()(t)), Xt(s()(t));
      }
      function Jt(t) {
        var e = s()(t.Element);
        return (
          !e.data("gpFocusDisabled") &&
          e.is(":visible") &&
          "hidden" != e.css("visibility") &&
          ((e.outerWidth() > 0 && e.outerHeight() > 0) ||
            "hidden" !== e.css("overflow"))
        );
      }
      function qt(t) {
        var e,
          n,
          o = s()(t),
          a = Zt(t);
        if (a instanceof Nt || a == Rt.InReactTree)
          return Vt(t, Rt.InReactTree), Rt.InReactTree;
        var u = a.Tree,
          d = (
            null === (n = null == t ? void 0 : t.dataset) || void 0 === n
              ? void 0
              : n.reactNavRoot
          )
            ? new Nt(t.dataset.reactNavRoot, a)
            : u.CreateNode(a, a.m_FocusRing),
          m = o.data("panel") || {};
        if (
          (s()(t).attr("data-nav-modal") &&
            (function (t) {
              Gt &&
                (Object(f.a)(
                  !1,
                  "Creating a new modal nav tree while one already exists. A modal opening another modal is not currently supported."
                ),
                Qt());
              Gt = Bt.NewGamepadNavigationTree("modal_dialog");
              var e = It(s()("body"));
              (Gt.Root.m_FocusRing = e),
                Gt.Root.SetProperties({}),
                Vt(t, Gt.Root),
                Xt(t),
                h(Gt.Root.m_element, function (t) {
                  return t.stopPropagation(), !1;
                }),
                Bt.RegisterGamepadNavigationTree(Gt, !1);
            })(t),
          "A" == t.tagName || "BUTTON" == t.tagName || "LABEL" == t.tagName)
        )
          (m.focusable = !0), (m.clickOnActivate = !0);
        else if ("INPUT" == t.tagName)
          switch (((m.focusable = !0), t.getAttribute("type"))) {
            case "checkbox":
              m.clickOnActivate = !0;
              break;
            case "text":
            case "password":
              m.enableVirtualKeyboard = !0;
          }
        else
          "TEXTAREA" == t.tagName &&
            ((m.focusable = !0), (m.enableVirtualKeyboard = !0));
        var g = m["flow-children"];
        delete m["flow-children"];
        var v = m.clickOnActivate,
          b = m.maintainX,
          _ = m.maintainY,
          y = m.enableVirtualKeyboard,
          C = m.onOKActionDescription,
          N = m.onCancelActionDescription,
          F = m.onSecondaryActionDescription,
          O = m.onOptionsActionDescription,
          R = m.onMenuActionDescription,
          A = m.actionDescriptionMap,
          S = m.onOKButton,
          D = m.onCancelButton,
          I = m.onSecondaryButton,
          w = m.onOptionsButton,
          E = m.onMenuButton,
          T = m.bFocusRingRoot,
          P = m.type,
          L = Object(r.f)(m, [
            "clickOnActivate",
            "maintainX",
            "maintainY",
            "enableVirtualKeyboard",
            "onOKActionDescription",
            "onCancelActionDescription",
            "onSecondaryActionDescription",
            "onOptionsActionDescription",
            "onMenuActionDescription",
            "actionDescriptionMap",
            "onOKButton",
            "onCancelButton",
            "onSecondaryButton",
            "onOptionsButton",
            "onMenuButton",
            "bFocusRingRoot",
            "type",
          ]),
          M = wt(S),
          B = wt(D),
          G = wt(I),
          k = wt(w),
          W = wt(E);
        P || (P = "Panel"),
          "PanelGroup" == P &&
            ((e = (function (t, e) {
              var n = t.onOKButtonHandler,
                o = t.onCancelButtonHandler,
                r = t.navNode;
              return (
                (e.focusable = !1 !== e.focusable),
                {
                  onOKButtonHandler: function (t) {
                    return (
                      !(
                        !r.BHasFocus() ||
                        !r.BChildTakeFocus(i.GAMEPAD, t.detail.button)
                      ) ||
                      (!!n && n(t))
                    );
                  },
                  onCancelButtonHandler: function (t) {
                    return (
                      !(
                        !r.BFocusWithin() ||
                        r.BHasFocus() ||
                        !r.BTakeFocus(i.GAMEPAD, t.detail.button)
                      ) ||
                      (!!o && o(t))
                    );
                  },
                }
              );
            })(
              { onOKButtonHandler: M, onCancelButtonHandler: B, navNode: d },
              L
            )),
            (M = e.onOKButtonHandler),
            (B = e.onCancelButtonHandler)),
          M &&
            Ht(
              o[0],
              (function (t, e) {
                return l(t, "vgp_onok", p(e));
              })(o[0], M)
            ),
          B &&
            Ht(
              o[0],
              (function (t, e) {
                return l(t, "vgp_oncancel", p(e));
              })(o[0], B)
            ),
          G &&
            F &&
            Ht(
              o[0],
              (function (t, e) {
                return l(t, "vgp_onsecondaryaction", p(e));
              })(o[0], G)
            ),
          k &&
            O &&
            Ht(
              o[0],
              (function (t, e) {
                return l(t, "vgp_onoptions", p(e));
              })(o[0], k)
            ),
          W &&
            R &&
            Ht(
              o[0],
              (function (t, e) {
                return l(t, "vgp_onmenu", p(e));
              })(o[0], W)
            );
        var x = g
          ? (function (t) {
              switch (t) {
                case "column":
                  return ut.COLUMN;
                case "column-reverse":
                  return ut.COLUMN_REVERSE;
                case "row":
                  return ut.ROW;
                case "row-reverse":
                  return ut.ROW_REVERSE;
                case "grid":
                  return ut.GRID;
                default:
                  return ut.NONE;
              }
            })(g)
          : ut.NONE;
        x != ut.NONE && (L.layout = x),
          b
            ? (L.navEntryPreferPosition = lt.MAINTAIN_X)
            : _ && (L.navEntryPreferPosition = lt.MAINTAIN_Y),
          v &&
            (!1 !== L.focusable && (L.focusable = !0),
            o.on("vgp_onok", "firstChild" === v ? Tt : Et),
            Ht(t, function () {
              o.off("vgp_onok");
            })),
          y &&
            (o.on("vgp_onok.vkbindings", function () {
              return Lt.ShowVirtualKeyboard();
            }),
            o.on("click.vkbindings", function () {
              return Lt.ShowVirtualKeyboard();
            }),
            o.on("blur.vkbindings", function () {
              document.hasFocus() &&
                document.activeElement != t &&
                Lt.HideVirtualKeyboard();
            }),
            Ht(t, function () {
              o.off(".vkbindings");
            })),
          L.focusable && void 0 === o.attr("tabIndex") && o.attr("tabIndex", 0),
          L.focusable &&
            d.FocusCallbackList.Register(function (e) {
              return (function (t, e) {
                e ? s()(t).addClass("gpfocus") : s()(t).removeClass("gpfocus");
              })(t, e);
            }),
          T &&
            ((d.m_FocusRing = It(o)),
            "static" == o.css("position") && o.css("position", "relative"));
        var j = (function (t) {
            var e = t.onOKActionDescription,
              n = t.onCancelActionDescription,
              o = t.onSecondaryActionDescription,
              i = t.onOptionsActionDescription,
              a = t.onMenuActionDescription,
              s = t.actionDescriptionMap,
              u = Object(r.a)({}, s);
            return (
              void 0 !== e && (u[c.a.OK] = e),
              void 0 !== n && (u[c.a.CANCEL] = n),
              void 0 !== o && (u[c.a.SECONDARY] = o),
              void 0 !== i && (u[c.a.OPTIONS] = i),
              void 0 !== a && (u[c.a.START] = a),
              u
            );
          })({
            onOKActionDescription: C,
            onCancelActionDescription: N,
            onSecondaryActionDescription: F,
            onOptionsActionDescription: O,
            onMenuActionDescription: R,
            actionDescriptionMap: A,
          }),
          U = Object(r.a)({ fnCanTakeFocus: Jt, actionDescriptionMap: j }, L);
        return d.SetProperties(U), Vt(t, d), d;
      }
      function Zt(t) {
        var e = t.parentElement;
        if (!e) return console.error("no parent"), null;
        var n = Kt(e);
        if (n == Rt.Unknown)
          n = (function (t) {
            var e = !1;
            switch (t.tagName) {
              case "A":
              case "INPUT":
              case "TEXTAREA":
                e = !0;
                break;
              case "DIV":
                if (ot(t) != ut.COLUMN) e = !0;
                else {
                  var n = ot(t.parentElement);
                  (n != ut.ROW && n != ut.ROW_REVERSE) || (e = !0);
                }
            }
            var o = Rt.NotNeeded;
            return e ? (o = qt(t)) : Vt(t, o), o;
          })(e);
        else if (n == Rt.InReactTree) return n;
        return n instanceof ft ? n : Zt(e);
      }
      function Qt(t) {
        Gt && (Bt.UnregisterGamepadNavigationTree(Gt), (Gt = null)),
          t && s()(t).removeAttr("data-nav-modal");
      }
      Object.assign(window, {
        InstrumentFocusElements: Xt,
        ForceUpdateFocusElements: zt,
        GPNavFocusChild: function (t) {
          var e = Kt(t[0]);
          return (
            e instanceof ft || (e = Zt(t[0])),
            e instanceof ft && e.BTakeFocus(i.APPLICATION),
            !1
          );
        },
        GPOnShowingModalWindow: function (t) {
          var e = t;
          return (
            s()(e).attr("data-nav-modal", "true"),
            zt(e),
            function () {
              return Qt(e);
            }
          );
        },
        GPShowVirtualKeyboard: function (t) {
          void 0 === t && (t = !0);
          t ? Lt.ShowVirtualKeyboard() : Lt.HideVirtualKeyboard();
        },
      });
    },
  },
]);

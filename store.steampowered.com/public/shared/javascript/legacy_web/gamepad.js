/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonpLegacyWeb = window.webpackJsonpLegacyWeb || []).push([
  [0],
  {
    "8+ko": function (t, e, n) {
      t.exports = {
        FocusRingRoot: "focusring_FocusRingRoot_3m2Fo",
        FocusRing: "focusring_FocusRing_1sTuv",
        growOutline: "focusring_growOutline_3vSPb",
        fadeOutline: "focusring_fadeOutline_xL-jG",
        blinker: "focusring_blinker_3mURo",
      };
    },
    biHH: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, "InitializeGamepadNavigation", function () {
          return gt;
        });
      var o = n("mrSG"),
        i = n("xeH2"),
        r = n.n(i),
        a = n("rHSA"),
        s = { x: "y", y: "x" };
      var c,
        u = n("r64O"),
        l = n("XxJJ"),
        h = n("qiKp"),
        p = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            Object(o.d)(e, t),
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
                return Object(o.b)(this, void 0, void 0, function () {
                  var e;
                  return Object(o.e)(this, function (n) {
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
                return Object(o.b)(this, void 0, void 0, function () {
                  return Object(o.e)(this, function (n) {
                    return [2, this.StoreString(t, JSON.stringify(e))];
                  });
                });
              }),
              t
            );
          })()
        ),
        d = [
          "ActionDescription",
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
        ];
      !(function (t) {
        (t[(t.Debug = 0)] = "Debug"),
          (t[(t.Info = 1)] = "Info"),
          (t[(t.Warning = 2)] = "Warning"),
          (t[(t.Error = 3)] = "Error");
      })(c || (c = {}));
      var m,
        g,
        v = (function () {
          function t(t, e) {
            (this.m_fnIdGenerator = null),
              (this.m_sName = t),
              (this.m_fnIdGenerator = e),
              f.Get().RegisterLogName(t);
          }
          return (
            (t.prototype.Debug = function () {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
              this.Log.apply(this, Object(o.g)([c.Debug], t));
            }),
            (t.prototype.Info = function () {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
              this.Log.apply(this, Object(o.g)([c.Info], t));
            }),
            (t.prototype.Warning = function () {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
              this.Log.apply(this, Object(o.g)([c.Warning], t));
            }),
            (t.prototype.Error = function () {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
              this.Log.apply(this, Object(o.g)([c.Error], t));
            }),
            (t.prototype.Assert = function (t) {
              for (var e = [], n = 1; n < arguments.length; n++)
                e[n - 1] = arguments[n];
              t ||
                this.Log.apply(
                  this,
                  Object(o.g)([c.Error, "Assertion failed:"], e)
                );
            }),
            (t.prototype.Log = function (t) {
              for (var e, n, i = [], r = 1; r < arguments.length; r++)
                i[r - 1] = arguments[r];
              if (t != c.Debug || f.Get().IsDebugLogEnabled(this.m_sName)) {
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
                var u = f.Get().IncludeBacktraceInLog;
                C.apply(void 0, Object(o.g)([t, u, a, this.m_sName], i));
              }
            }),
            Object(o.c)([l.a], t.prototype, "Debug", null),
            Object(o.c)([l.a], t.prototype, "Info", null),
            Object(o.c)([l.a], t.prototype, "Warning", null),
            Object(o.c)([l.a], t.prototype, "Error", null),
            Object(o.c)([l.a], t.prototype, "Assert", null),
            t
          );
        })(),
        f = (function () {
          function t() {
            (this.m_Storage = null),
              (this.m_rgLogNames = null),
              (this.m_setEnabledDebugLogs = new Set()),
              (this.m_bIncludeBacktraceInLog = !1),
              (this.m_SettingsChangedCallback = new h.a()),
              (this.m_bLoading = !1),
              (this.m_Storage = new p()),
              (this.m_rgLogNames = d.slice()),
              this.LoadSettings();
          }
          return (
            (t.prototype.LogAsLogManager = function () {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
              C.apply(
                void 0,
                Object(o.g)(
                  [
                    c.Info,
                    this.IncludeBacktraceInLog,
                    "LogManager",
                    "LogManager",
                  ],
                  t
                )
              );
            }),
            (t.prototype.LoadSettings = function () {
              return Object(o.b)(this, void 0, void 0, function () {
                var e, n;
                return Object(o.e)(this, function (o) {
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
              return Object(o.b)(this, void 0, void 0, function () {
                return Object(o.e)(this, function (e) {
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
              return Object(o.b)(this, void 0, void 0, function () {
                return Object(o.e)(this, function (e) {
                  return (
                    this.SetDebugLogEnabled(t, !this.IsDebugLogEnabled(t)), [2]
                  );
                });
              });
            }),
            (t.prototype.SetDebugLogEnabled = function (t, e) {
              return Object(o.b)(this, void 0, void 0, function () {
                return Object(o.e)(this, function (n) {
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
              return Object(o.b)(this, void 0, void 0, function () {
                return Object(o.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (this.m_setEnabledDebugLogs = new Set(t ? d : [])),
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
              return Object(o.b)(this, void 0, void 0, function () {
                return Object(o.e)(this, function (e) {
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
      function _(t) {
        for (var e = 0, n = 0; n < t.length; n++)
          e = t.charCodeAt(n) + ((e << 5) - e);
        return [(e >> 0) & 255, (e >> 8) & 255, (e >> 16) & 255];
      }
      function b(t) {
        return (299 * t[0] + 587 * t[1] + 114 * t[2]) / 1e3 >= 128;
      }
      function y(t) {
        switch (t) {
          case c.Debug:
            return String.fromCodePoint(128027);
          case c.Info:
            return String.fromCodePoint(8505);
          case c.Warning:
            return String.fromCodePoint(9888);
          case c.Error:
            return String.fromCodePoint(128165);
        }
      }
      function C(t, e, n, i) {
        for (var r = [], a = 4; a < arguments.length; a++)
          r[a - 4] = arguments[a];
        var s = _(i),
          u = s.map(function (t, e) {
            return Math.max(
              0,
              Math.min(255, 255 * (0.8 * (t / 255 - 0.5) + 0.15))
            );
          }),
          l = b(u),
          h = n;
        e && (h = y(t) + " " + h);
        var p = Object(o.g)(
          [
            "%c" + h + "%c:",
            "color: " +
              (l ? "black" : "white") +
              "; background: rgb(" +
              u.join(",") +
              "); padding: 0 1ch",
            "color: transparent; margin-right: -1ch",
          ],
          r
        );
        if (e)
          console.groupCollapsed.apply(console, p),
            console.trace("Callstack"),
            console.groupEnd();
        else
          switch (t) {
            case c.Debug:
            case c.Info:
              console.log.apply(console, p);
              break;
            case c.Warning:
              console.warn.apply(console, p);
              break;
            case c.Error:
              console.error.apply(console, p);
          }
      }
      !(function (t) {
        (t[(t.GAMEPAD = 0)] = "GAMEPAD"),
          (t[(t.KEYBOARD = 1)] = "KEYBOARD"),
          (t[(t.APPLICATION = 2)] = "APPLICATION"),
          (t[(t.BROWSER = 3)] = "BROWSER");
      })(g || (g = {}));
      var O =
        (((m = {})[a.a.OK] = "vgp_onok"),
        (m[a.a.CANCEL] = "vgp_oncancel"),
        (m[a.a.SECONDARY] = "vgp_onsecondaryaction"),
        (m[a.a.OPTIONS] = "vgp_onoptions"),
        (m[a.a.START] = "vgp_onmenu"),
        m);
      function N(t, e, n) {
        return (
          t.addEventListener(e, n),
          function () {
            return (function (t, e, n) {
              t.removeEventListener(e, n);
            })(t, e, n);
          }
        );
      }
      function A(t, e, n) {
        if (null === t) return !0;
        var o = new t.ownerDocument.defaultView.CustomEvent(e, {
          bubbles: !0,
          cancelable: !0,
          detail: n,
        });
        return t.dispatchEvent(o);
      }
      function R(t) {
        return function (e) {
          !1 !== t(e) && (e.stopPropagation(), e.preventDefault());
        };
      }
      var E = n("Kw0F"),
        F = (function () {
          function t(t) {
            this.m_root = t;
          }
          return (
            (t.prototype.SerializeNavNode = function (t) {
              var e = this,
                n = null,
                o = t.GetChildren(),
                i = o[0],
                r = o[1];
              return (
                i.length &&
                  -1 != r &&
                  (n = i.map(function (t) {
                    return e.SerializeNavNode(t);
                  })),
                { sNavKey: t.NavKey, iActiveChild: r, rgChildren: n }
              );
            }),
            (t.prototype.RestoreSerializedNavNode = function (t, e) {
              var n = e.sNavKey,
                o = e.iActiveChild,
                i = e.rgChildren;
              if (
                (n && Object(u.a)(n == t.NavKey, "navkey mismatch"),
                t.SetActiveChild(o),
                i && i.length)
              ) {
                var r = t.GetChildren()[0],
                  a = new Map();
                r.forEach(function (t) {
                  t.NavKey && a.set(t.NavKey, t);
                });
                for (var s = 0, c = i; s < c.length; s++) {
                  var l = c[s];
                  if (l.sNavKey) {
                    var h = a.get(l.sNavKey);
                    h && this.RestoreSerializedNavNode(h, l);
                  }
                }
                if (-1 != o && i[o].sNavKey) {
                  var p = a.get(i[o].sNavKey);
                  p && t.SetActiveChild(r.indexOf(p));
                }
                for (var d = 0, m = 0; d < r.length && m < i.length; ) {
                  for (; d < r.length && r[d].NavKey; ) d++;
                  for (; m < i.length && i[m].sNavKey; ) m++;
                  if (d >= r.length || m >= i.length) break;
                  this.RestoreSerializedNavNode(r[d], i[m]), d++, m++;
                }
              }
            }),
            t
          );
        })(),
        D = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.m_rgHistory = []), e;
          }
          return (
            Object(o.d)(e, t),
            (e.prototype.PushState = function () {
              this.m_rgHistory.push(this.SerializeNavNode(this.m_root));
            }),
            (e.prototype.PopState = function () {
              this.m_rgHistory.length &&
                (this.RestoreSerializedNavNode(
                  this.m_root,
                  this.m_rgHistory.pop()
                ),
                this.m_root.BTakeFocus(g.APPLICATION));
            }),
            e
          );
        })(F);
      function I(t) {
        return null != t && void 0 !== t.focus;
      }
      function S(t) {
        for (
          var e = 1, n = t.ownerDocument.defaultView, o = t;
          null != o;
          o = o.parentElement
        ) {
          var i = parseFloat(n.getComputedStyle(o).zoom);
          0 !== i && (e *= i);
        }
        return e;
      }
      function T(t, e) {
        if ("x" === e) {
          if (t.scrollWidth <= t.clientWidth) return !1;
        } else if (t.scrollHeight <= t.clientHeight) return !1;
        var n = t.ownerDocument.defaultView.getComputedStyle(t),
          o = "x" === e ? n.overflowX : n.overflowY;
        return "auto" === o || "scroll" === o;
      }
      function w(t, e) {
        for (var n, o = t; null != o; o = o.Parent) {
          var i = o.GetScrollSnapProps(),
            r =
              "x" === e
                ? null == i
                  ? void 0
                  : i.navScrollSnapX
                : null == i
                ? void 0
                : i.navScrollSnapY;
          if (null != r) {
            var a =
              null !==
                (n =
                  "x" === e
                    ? i.navScrollSnapOffsetX
                    : i.navScrollSnapOffsetY) && void 0 !== n
                ? n
                : 0;
            return { elementToSnap: o.Element, snapType: r, nMargin: a };
          }
        }
      }
      function L(t, e) {
        var n = e.elementToSnap,
          o = e.snapType,
          i = e.nMargin;
        if (o != q.NONE)
          for (
            var r = S(n),
              a = n.getBoundingClientRect(),
              s =
                "x" === t
                  ? { min: a.left * r, max: a.right * r }
                  : { min: a.top * r, max: a.bottom * r },
              c = o === q.CENTER ? -1 : 1,
              u = s.min - i * r,
              l = s.max + c * i * r,
              h = n.parentElement;
            null != h;
            h = h.parentElement
          )
            if (T(h, t)) {
              var p = S(h),
                d = h.getBoundingClientRect(),
                m =
                  "x" === t
                    ? { min: d.left * p, max: d.right * p }
                    : { min: d.top * p, max: d.bottom * p };
              if (!(o === q.LAZY && m.min <= u && m.max >= l)) {
                var g = { min: u - m.min, max: l - m.max },
                  v =
                    o === q.START
                      ? 0
                      : o === q.CENTER
                      ? 0.5
                      : o === q.END
                      ? 1
                      : Math.abs(g.min) <= Math.abs(g.max)
                      ? 0
                      : 1,
                  f = ((1 - v) * g.min + v * g.max) / p;
                "x" === t ? (h.scrollLeft += f) : (h.scrollTop += f);
              }
            }
      }
      var P = !1;
      function B(t, e, n, o) {
        if (P) {
          var i = e.getBoundingClientRect(),
            r = n.Element.getBoundingClientRect(),
            a = r.bottom < i.top,
            s = r.top > i.bottom;
          if (
            (a || s) &&
            !(function (t) {
              var e = t.getBoundingClientRect();
              return e.top >= 72 && e.bottom <= window.innerHeight - 72;
            })(e)
          ) {
            var c = s ? i.top - 72 : i.bottom - window.innerHeight + 72;
            t.focus({ preventScroll: !0 });
            for (
              var u = !1, l = e.parentElement;
              null != l;
              l = l.parentElement
            )
              T(l, "y") && ((u = !0), (l.scrollTop += c));
            return u || window.scrollBy({ behavior: o, top: c }), !0;
          }
        }
        return !1;
      }
      var M;
      function G(t) {
        if (t.Element) {
          var e = w(t, "x"),
            n = w(t, "y");
          e && L("x", e), n && L("y", n);
        }
      }
      var k = new v("FocusNavigation").Debug,
        W = new v("GamepadEvents").Debug,
        x = (function () {
          function t() {
            (this.m_rgGamepadInputSources = []),
              (this.m_rgGamepadNavigationTrees = []),
              (this.m_LastActiveNavTree = null),
              (this.m_LastActiveFocusNavTree = null),
              (this.m_bGlobalEventsInitialized = !1),
              (this.m_bSuppressGamepadInput = !1),
              (this.m_FocusChangedCallbacks = new h.a()),
              (this.m_UnhandledButtonEventsCallbacks = new h.a()),
              (this.m_navigationSource = Object(h.b)({
                eActivationSourceType: a.b.UNKNOWN,
                nActiveGamepadIndex: -1,
                nLastActiveGamepadIndex: -1,
              })),
              (this.m_fnGamepadEventUpdateBatcher = function (t) {
                return t();
              }),
              (this.m_iFocusChangeStack = 0),
              (window.FocusNavController = this);
          }
          return (
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
              this.OnButtonDown(t, a.b.UNKNOWN, -1);
            }),
            (t.prototype.DispatchVirtualButtonClick = function (t) {
              this.OnButtonDown(t, a.b.GAMEPAD, -1),
                this.OnButtonUp(t, a.b.GAMEPAD, -1);
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
                t === a.a.STEAM_GUIDE ||
                t === a.a.STEAM_QUICK_MENU ||
                t === a.a.CANCEL
              );
            }),
            (t.prototype.GetEventTarget = function (t, e) {
              void 0 === e && (e = !1);
              var n = document.activeElement;
              if (this.m_LastActiveNavTree) {
                var o = this.m_navigationSource.Value.eActivationSourceType;
                if (
                  !(
                    (o != a.b.GAMEPAD && o != a.b.KEYBOARD) ||
                    this.m_LastActiveNavTree.GetLastFocusedNode() ||
                    (e && this.m_LastActiveNavTree.TakeFocus(g.GAMEPAD),
                    this.BGlobalGamepadButton(t))
                  )
                )
                  return null;
                this.m_LastActiveNavTree.GetLastFocusedNode() &&
                  (n = this.m_LastActiveNavTree
                    .GetLastFocusedNode()
                    .GetLastFocusElement());
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
                k(
                  "Ignoring button press - gamepad input is suppressed by parent window"
                );
              else {
                this.ChangeNavigationSource(e, n);
                var r = this.GetEventTarget(t, !0);
                k(
                  "Firing " +
                    a.a[t] +
                    " in tree " +
                    (null === (i = this.m_LastActiveNavTree) || void 0 === i
                      ? void 0
                      : i.id) +
                    " at ",
                  r
                ),
                  this.m_fnGamepadEventUpdateBatcher(function () {
                    return A(r, "vgp_onbuttondown", {
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
                this.m_fnGamepadEventUpdateBatcher(function () {
                  return A(o, "vgp_onbuttonup", {
                    button: t,
                    source: e,
                    is_repeat: !1,
                  });
                });
              }
            }),
            (t.prototype.OnNavigationTypeChange = function (t) {
              var e;
              if (
                (this.ChangeNavigationSource(t, -1),
                t == a.b.MOUSE || t == a.b.TOUCH)
              ) {
                var n = this.m_LastActiveNavTree.GetLastFocusedNode(),
                  o = (function (t) {
                    if (!I(t)) return !1;
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
                  e.TransferFocus(g.BROWSER, o);
              }
            }),
            (t.prototype.NewGamepadNavigationTree = function (t) {
              return new H(this, t);
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
                    this.m_FocusChangedCallbacks.Dispatch(
                      g.APPLICATION,
                      null,
                      o
                    );
              }
              return (
                this.m_bGlobalEventsInitialized ||
                  this.BindGlobalEventHandlers(),
                function () {
                  return n.UnregisterGamepadNavigationTree(t);
                }
              );
            }),
            (t.prototype.UnregisterGamepadNavigationTree = function (t) {
              E.a(this.m_rgGamepadNavigationTrees, t),
                this.m_LastActiveNavTree == t &&
                  ((this.m_LastActiveNavTree = null),
                  this.SetActiveNavTree(null, !0));
            }),
            (t.prototype.OnGamepadNavigationTreeActivated = function (t, e, n) {
              void 0 === n && (n = !1),
                e != g.BROWSER
                  ? this.SetActiveNavTree(t, n)
                  : t != this.m_LastActiveFocusNavTree &&
                    k(
                      "Not activating nav tree " +
                        t.id +
                        ", browser initiated event"
                    );
            }),
            (t.prototype.BlurNavTree = function (t) {
              this.m_LastActiveNavTree == t && this.SetActiveNavTree(null, !0),
                E.a(this.m_rgGamepadNavigationTrees, t),
                this.m_rgGamepadNavigationTrees.unshift(t);
            }),
            (t.prototype.IsActiveFocusNavTree = function (t) {
              return t == this.m_LastActiveFocusNavTree;
            }),
            (t.prototype.SetActiveNavTree = function (t, e) {
              if (
                (void 0 === e && (e = !1), !t || this.m_LastActiveNavTree != t)
              ) {
                var n = this.m_LastActiveNavTree;
                n &&
                  (n.OnDeactivate(), E.a(this.m_rgGamepadNavigationTrees, n)),
                  t ||
                    (this.m_rgGamepadNavigationTrees.length &&
                      (t = this.m_rgGamepadNavigationTrees[
                        this.m_rgGamepadNavigationTrees.length - 1
                      ]));
                var o = this.m_LastActiveFocusNavTree == t;
                t && E.a(this.m_rgGamepadNavigationTrees, t),
                  (this.m_LastActiveNavTree = t),
                  (t && t.BUseVirtualFocus()) ||
                    (this.m_LastActiveFocusNavTree = t),
                  k(
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
                    t.OnActivate(!o && e));
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
                Object(u.a)(
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
            (t.prototype.HandleButtonDownEventAsLogicalEvent = function (t) {
              var e = (function (t) {
                  var e = [
                      a.a.DIR_UP,
                      a.a.DIR_DOWN,
                      a.a.DIR_LEFT,
                      a.a.DIR_RIGHT,
                    ],
                    n = !0,
                    o = !1,
                    i = O[t.detail.button];
                  return (
                    i
                      ? ((o = !0), (n = A(t.target, i, t.detail)))
                      : -1 !== e.indexOf(t.detail.button) &&
                        ((o = !0),
                        (n = A(t.target, "vgp_ondirection", t.detail))),
                    { bUnhandled: n, bHadLogicalEventMapping: o }
                  );
                })(t),
                n = e.bUnhandled,
                o = e.bHadLogicalEventMapping;
              return (
                W(
                  "Logical gamepad Event fired: " +
                    a.a[t.detail.button] +
                    ", had logical event: " +
                    o +
                    ", was handled: " +
                    !n
                ),
                n && (n = this.FireUnhandledGamepadEventCallbacks(t)),
                t.stopPropagation(),
                n
              );
            }),
            (t.prototype.SetSuppressGamepadInput = function (t) {
              this.m_bSuppressGamepadInput = t;
            }),
            (t.prototype.TakeFocusChangingIFrame = function () {
              window.focus();
              var t = this.m_LastActiveFocusNavTree || this.m_LastActiveNavTree;
              t && t.TakeFocus(g.APPLICATION);
            }),
            Object(o.c)([l.a], t.prototype, "OnButtonDown", null),
            Object(o.c)([l.a], t.prototype, "OnButtonUp", null),
            Object(o.c)([l.a], t.prototype, "OnNavigationTypeChange", null),
            t
          );
        })();
      var U = (function () {
        function t(t) {
          (this.m_node = t), (this.m_History = new D(t));
        }
        return (
          (t.prototype.TakeFocus = function (t) {
            return this.m_node.BTakeFocus(t ? g.GAMEPAD : g.APPLICATION, t);
          }),
          (t.prototype.ParentTakeFocus = function (t) {
            this.m_node.Parent.BTakeFocus(t ? g.GAMEPAD : g.APPLICATION, t);
          }),
          (t.prototype.ChildTakeFocus = function (t) {
            return this.m_node.BChildTakeFocus(
              t ? g.GAMEPAD : g.APPLICATION,
              t
            );
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
          (t.prototype.ScrollSnap = function () {
            G(this.m_node);
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
      function j(t, e, n) {
        return "x" == t
          ? e.x + e.width > n.x && e.x < n.x + n.width
          : "y" == t
          ? e.y + e.height > n.y && e.y < n.y + n.height
          : (Object(u.a)(!1, "Invalid axis " + t), !1);
      }
      function K(t, e, n) {
        var o;
        return (
          "x" == t
            ? (o = Math.min(e.x + e.width, n.x + n.width) - Math.max(e.x, n.x))
            : "y" == t
            ? (o =
                Math.min(e.y + e.height, n.y + n.height) - Math.max(e.y, n.y))
            : (Object(u.a)(!1, "Invalid axis " + t), (o = 0)),
          o < 0 ? 0 : o
        );
      }
      function V(t, e, n) {
        var o = e[t],
          i = (function (t, e) {
            return "x" == t
              ? { min: e.x, max: e.x + e.width }
              : "y" == t
              ? { min: e.y, max: e.y + e.height }
              : void Object(u.a)(!1, "Invalid axis " + t);
          })(t, n);
        return o < i.min ? i.min - o : o > i.max ? o - i.max : 0;
      }
      var H = (function () {
        function t(t, e) {
          (this.m_onActivateCallbacks = new h.a()),
            (this.m_onDeactivateCallbacks = new h.a()),
            (this.m_Controller = t),
            (this.m_ID = e),
            (this.m_Root = new tt(this, null, null)),
            this.m_Root.SetProperties({ layout: X.COLUMN }),
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
            return new tt(this, t, e);
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
              this.m_Controller.OnGamepadNavigationTreeActivated(this, t);
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
            void 0 === t && (t = !0),
              t && this.TakeFocus(g.APPLICATION),
              this.m_onActivateCallbacks.Dispatch();
          }),
          (t.prototype.IsActiveFocusNavTree = function () {
            return this.m_Controller.IsActiveFocusNavTree(this);
          }),
          (t.prototype.TakeFocus = function (t) {
            var e = !1;
            this.m_lastFocusNode && (e = this.m_lastFocusNode.BTakeFocus(t)),
              e || (e = this.Root.BTakeFocus(t)),
              e || this.TransferFocus(t, this.Root);
          }),
          (t.prototype.OnDeactivate = function () {
            this.m_onDeactivateCallbacks.Dispatch();
          }),
          (t.prototype.Activate = function () {
            this.m_Controller.OnGamepadNavigationTreeActivated(
              this,
              g.APPLICATION,
              !0
            );
          }),
          (t.prototype.Deactivate = function () {
            this.m_Controller.BlurNavTree(this);
          }),
          (t.prototype.SetIsMounted = function () {
            this.m_bIsMounted = !0;
          }),
          (t.prototype.TransferFocus = function (t, e, n) {
            var o = this.m_lastFocusNode;
            if (o != e) {
              k(
                "Transfer focus in " +
                  this.id +
                  ", source: " +
                  g[t] +
                  ", from/to:",
                null == o ? void 0 : o.m_element,
                null == e ? void 0 : e.m_element
              );
              var i = { blurredNode: o, focusedNode: e, source: t },
                r = (function (t, e) {
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
                for (var a = o; a && a != r; a = a.Parent) a.SetFocusWithin(!1);
              }
              if (e) {
                e.SetHasFocus(!0);
                for (var s = e; s && s != r; s = s.Parent) s.SetFocusWithin(!0);
              }
              var c = this.m_Controller.OnFocusChangeStart(t, this, o, e);
              e &&
                (this.BUseVirtualFocus()
                  ? (e.RequestFocus(), G(e))
                  : (function (t, e) {
                      for (
                        var n, o = t.Element, i = o, r = t.Parent;
                        r;
                        r = r.Parent
                      )
                        (null === (n = r.m_Properties) || void 0 === n
                          ? void 0
                          : n.scrollIntoViewWhenChildFocused) &&
                          (i = r.m_element);
                      if (o)
                        if (e) {
                          var a = i.getBoundingClientRect(),
                            s = !1;
                          ((M && performance.now() - M < 500) ||
                            a.bottom < -300 ||
                            a.top > window.innerHeight + 300) &&
                            (s = !0);
                          var c = s ? "auto" : "smooth";
                          s && (M = performance.now()),
                            B(o, i, e, c) ||
                              (o.focus({ preventScroll: !0 }),
                              i.scrollIntoView({
                                behavior: c,
                                block: "nearest",
                              }));
                        } else o.focus();
                    })(e, o)),
                o &&
                  (A(o.Element, "vgp_onblur", i),
                  !o.m_FocusRing ||
                    (e && o.m_FocusRing == e.m_FocusRing) ||
                    o.m_FocusRing.OnBlur(t, o, e)),
                e &&
                  (this.OnChildActivated(t),
                  A(e.Element, "vgp_onfocus", i),
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
                this.m_Controller.OnFocusChangeComplete(c);
            }
          }),
          t
        );
      })();
      function Y(t) {
        if (!t) return X.NONE;
        var e = t.ownerDocument.defaultView,
          n = e.getComputedStyle(t);
        if ("flex" == n.display)
          switch (n.flexDirection) {
            case "row":
              return "wrap" == n.flexWrap ? X.GRID : X.ROW;
            case "row-reverse":
              return X.ROW_REVERSE;
            case "column":
              return X.COLUMN;
            case "column-reverse":
              return X.COLUMN_REVERSE;
          }
        else {
          if ("grid" == n.display) return X.GRID;
          if (t.childElementCount > 0) {
            var o = e.getComputedStyle(t.firstElementChild);
            if ("left" === o.float) return X.ROW;
            if ("right" === o.float) return X.ROW_REVERSE;
            if ("inline" === o.display || "inline-block" === o.display)
              return X.GRID;
          }
        }
        return X.COLUMN;
      }
      function z(t) {
        switch (t) {
          case a.a.DIR_UP:
          case a.a.DIR_DOWN:
            return "y";
          case a.a.DIR_LEFT:
          case a.a.DIR_RIGHT:
            return "x";
          default:
            return;
        }
      }
      var X,
        J,
        q,
        Z,
        Q = new v("FocusNavigationMovement").Debug;
      !(function (t) {
        (t[(t.NONE = 0)] = "NONE"),
          (t[(t.COLUMN = 1)] = "COLUMN"),
          (t[(t.ROW = 2)] = "ROW"),
          (t[(t.COLUMN_REVERSE = 3)] = "COLUMN_REVERSE"),
          (t[(t.ROW_REVERSE = 4)] = "ROW_REVERSE"),
          (t[(t.GRID = 5)] = "GRID"),
          (t[(t.GEOMETRIC = 6)] = "GEOMETRIC");
      })(X || (X = {})),
        (function (t) {
          (t[(t.FIRST = 0)] = "FIRST"),
            (t[(t.LAST = 1)] = "LAST"),
            (t[(t.MAINTAIN_X = 2)] = "MAINTAIN_X"),
            (t[(t.MAINTAIN_Y = 3)] = "MAINTAIN_Y"),
            (t[(t.PREFERRED_CHILD = 4)] = "PREFERRED_CHILD");
        })(J || (J = {})),
        (function (t) {
          (t[(t.LAZY = 0)] = "LAZY"),
            (t[(t.START = 1)] = "START"),
            (t[(t.CENTER = 2)] = "CENTER"),
            (t[(t.END = 3)] = "END"),
            (t[(t.NEAREST = 4)] = "NEAREST"),
            (t[(t.NONE = 5)] = "NONE");
        })(q || (q = {})),
        (function (t) {
          (t[(t.INVALID = 0)] = "INVALID"),
            (t[(t.FORWARD = 1)] = "FORWARD"),
            (t[(t.BACKWARD = 2)] = "BACKWARD");
        })(Z || (Z = {}));
      var $,
        tt = (function () {
          function t(t, e, n) {
            (this.m_rgChildren = []),
              (this.m_iActiveChild = -1),
              (this.m_bChildrenSorted = !1),
              (this.m_bAutoFocusChild = !1),
              (this.m_bFocused = !1),
              (this.m_FocusCallbackList = new h.a()),
              (this.m_bFocusWithin = !1),
              (this.m_FocusWithinCallbackList = new h.a()),
              (this.m_ActionDescriptionsChangedCallbackList = new h.a()),
              (this.m_rgNavigationHandlers = []),
              (this.m_rgFocusHandlers = []),
              (this.m_Tree = t),
              (this.m_Parent = e),
              (this.m_FocusRing = n),
              (this.m_nDepth = e ? e.m_nDepth + 1 : 0);
          }
          return (
            (t.prototype.CreateHandle = function () {
              return new U(this);
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
                this.m_element && this.RegisterDOMEvents();
            }),
            (t.prototype.BWantsAutoFocus = function () {
              return this.m_Properties.autoFocus || this.m_bAutoFocusChild;
            }),
            (t.prototype.BWantsPreferredFocus = function () {
              return this.m_Properties.preferredFocus;
            }),
            (t.prototype.BWantsFocusRing = function () {
              return !this.m_Properties.noFocusRing;
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
                this.m_element && this.RegisterDOMEvents();
            }),
            (t.prototype.OnMount = function (t) {
              if (
                ((this.m_element = t),
                this.m_Parent
                  ? this.m_Parent.AddChild(this)
                  : Object(u.a)(
                      this == this.m_Tree.Root,
                      "Only root should have no parent"
                    ),
                this.RegisterDOMEvents(),
                this.BWantsAutoFocus())
              ) {
                var e = -1;
                this.m_rgChildren.length &&
                  (this.EnsureChildrenSorted(),
                  (e = this.m_rgChildren.findIndex(function (t) {
                    return t.BWantsAutoFocus();
                  }))),
                  (this.m_Properties.autoFocus || -1 !== e) &&
                    ((this.m_iActiveChild = e),
                    !this.m_Parent || this.m_Parent.m_element
                      ? this.BTakeFocus(g.APPLICATION)
                      : (this.m_Parent.m_bAutoFocusChild = !0));
              }
            }),
            (t.prototype.OnUnmount = function () {
              this.m_bFocused && this.m_Tree.TransferFocus(g.APPLICATION, null),
                this.UnregisterDOMEvents(),
                this.m_Parent
                  ? this.m_Parent.RemoveChild(this)
                  : Object(u.a)(
                      this == this.m_Tree.Root,
                      "Only root should have no parent"
                    );
            }),
            (t.prototype.RegisterDOMEvents = function () {
              var t,
                e,
                n = this;
              !this.m_rgNavigationHandlers.length &&
                (this.GetLayout() ||
                  this.m_Properties.onMoveUp ||
                  this.m_Properties.onMoveRight ||
                  this.m_Properties.onMoveDown ||
                  this.m_Properties.onMoveLeft) &&
                this.m_rgNavigationHandlers.push(
                  ((t = this.m_element),
                  (e = this.OnNavigationEvent),
                  N(t, "vgp_ondirection", R(e)))
                ),
                this.m_rgChildren.length > 0 &&
                  (this.m_fnUnregisterFocusIn ||
                    (this.m_element.addEventListener("focusin", this.OnFocusIn),
                    (this.m_fnUnregisterFocusIn = function () {
                      return n.m_element.removeEventListener(
                        "focusin",
                        n.OnFocusIn
                      );
                    }))),
                (this.m_Properties.focusable ||
                  0 == this.m_rgChildren.length) &&
                  (this.m_rgFocusHandlers.length ||
                    (this.m_element.addEventListener("focus", this.OnDOMFocus),
                    this.m_element.addEventListener("blur", this.OnDOMBlur),
                    this.m_rgFocusHandlers.push(function () {
                      n.m_element.removeEventListener("focus", n.OnDOMFocus),
                        n.m_element.removeEventListener("blur", n.OnDOMBlur);
                    })));
            }),
            (t.prototype.RemoveChild = function (t) {
              var e = this.m_rgChildren.indexOf(t);
              Object(u.a)(-1 !== e, "Child was not found to remove"),
                -1 !== e &&
                  (e <= this.m_iActiveChild && this.m_iActiveChild--,
                  this.m_rgChildren.splice(e, 1));
            }),
            (t.prototype.UnregisterDOMEvents = function () {
              this.m_rgNavigationHandlers.forEach(function (t) {
                return t();
              }),
                (this.m_rgNavigationHandlers = []),
                this.m_fnUnregisterFocusIn && this.m_fnUnregisterFocusIn(),
                (this.m_fnUnregisterFocusIn = void 0),
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
            (t.prototype.OnFocusIn = function (t) {
              if (this.m_rgChildren.length) {
                this.EnsureChildrenSorted();
                for (
                  var e = this.m_rgChildren.map(function (t) {
                      return t.m_element;
                    }),
                    n = t.target;
                  n;

                ) {
                  var o = e.indexOf(n);
                  if (-1 !== o) {
                    (this.m_iActiveChild = o),
                      this.m_Tree.OnChildActivated(g.BROWSER);
                    break;
                  }
                  if (n == this.m_element) {
                    (this.m_iActiveChild = -1),
                      this.m_Tree.OnChildActivated(g.BROWSER);
                    break;
                  }
                  n = n.parentElement;
                }
              }
            }),
            (t.prototype.OnDOMFocus = function (t) {
              this.m_bFocused || this.m_Tree.TransferFocus(g.BROWSER, this);
            }),
            (t.prototype.OnDOMBlur = function (t) {
              this.m_bFocused && this.m_Tree.TransferFocus(g.BROWSER, null);
            }),
            (t.prototype.RequestFocus = function () {
              this.m_Parent &&
                (this.m_Parent.SetActiveChild(this),
                this.m_Parent.RequestFocus());
            }),
            (t.prototype.BTakeFocus = function (t, e) {
              var n = z(e),
                o = this.m_Properties,
                i = o.focusable,
                r = o.focusableIfNoChildren,
                a = o.childFocusDisabled,
                s = o.fnCanTakeFocus;
              return (
                !(s && !s(this)) &&
                (i || (r && a) || (r && 0 == this.m_rgChildren.length)
                  ? (this.m_Tree.TransferFocus(t, this, n), !0)
                  : this.BChildTakeFocus(t, e))
              );
            }),
            (t.prototype.BChildTakeFocus = function (t, e) {
              var n = z(e),
                o = this.m_Properties,
                i = o.focusableIfNoChildren;
              if (o.childFocusDisabled) return !1;
              if (this.m_rgChildren.length) {
                this.EnsureChildrenSorted();
                var r = this.m_Properties.navEntryPreferPosition,
                  a = this.m_iActiveChild;
                if (a < 0 || a >= this.m_rgChildren.length) {
                  a = 0;
                  var c = this.GetLayout();
                  (c != X.ROW_REVERSE &&
                    c != X.COLUMN_REVERSE &&
                    r != J.LAST) ||
                    (a = this.m_rgChildren.length - 1);
                }
                if ((r != J.MAINTAIN_X && r != J.MAINTAIN_Y) || !n) {
                  if (r == J.PREFERRED_CHILD)
                    for (var u = 0, l = this.m_rgChildren; u < l.length; u++) {
                      var h = l[u];
                      if (
                        h.BWantsPreferredFocus() &&
                        h.BTakeFocus(g.GAMEPAD, e)
                      )
                        return !0;
                    }
                  else if (
                    r == J.LAST &&
                    this.BFocusNextChildInDirection(t, a + 1, Z.BACKWARD, e)
                  )
                    return !0;
                } else {
                  var p,
                    d = r == J.MAINTAIN_X ? "x" : "y";
                  d == s[n] &&
                    (p = this.m_Tree.GetLastFocusedMovementRect(s[n])),
                    Q(
                      "Taking focus while preserving " +
                        J[r] +
                        " preserved: " +
                        d +
                        " movement: " +
                        n +
                        ", node:",
                      p
                    );
                  var m = this.ComputeRelativeDirection(e, X.GRID);
                  if (p) {
                    var v = m == Z.BACKWARD ? this.m_rgChildren.length - 1 : 0;
                    if (
                      this.BFocusClosestChildInNextAxiallyAlignedSet(
                        d,
                        m,
                        e,
                        p,
                        v,
                        this.m_rgChildren[v].GetBoundingRect()
                      )
                    )
                      return !0;
                  } else if (d != s[n]) {
                    v = m == Z.BACKWARD ? this.m_rgChildren.length : -1;
                    if (this.BFocusNextChildInDirection(t, v, m, e)) return !0;
                  }
                }
                return (
                  !!this.BFocusNextChildInDirection(t, a - 1, Z.FORWARD, e) ||
                  !!this.BFocusNextChildInDirection(t, a, Z.BACKWARD, e) ||
                  (!!i && (this.m_Tree.TransferFocus(t, this, n), !0))
                );
              }
              return !1;
            }),
            (t.prototype.GetLayout = function () {
              return this.m_Properties.layout
                ? this.m_Properties.layout
                : this.m_rgChildren.length < 2
                ? X.NONE
                : Y(this.m_element);
            }),
            (t.prototype.OnNavigationEvent = function (t) {
              var e = t.detail.button;
              if (this.BTryInternalNavigation(e)) return !0;
              var n = this.m_Properties,
                o = n.onMoveUp,
                i = n.onMoveRight,
                r = n.onMoveDown,
                s = n.onMoveLeft,
                c = !1;
              switch (e) {
                case a.a.DIR_UP:
                  o && (c = o(t.detail));
                  break;
                case a.a.DIR_RIGHT:
                  i && (c = i(t.detail));
                  break;
                case a.a.DIR_DOWN:
                  r && (c = r(t.detail));
                  break;
                case a.a.DIR_LEFT:
                  s && (c = s(t.detail));
              }
              return c;
            }),
            (t.prototype.BTryInternalNavigation = function (t) {
              var e = this.GetLayout(),
                n = this.ComputeRelativeDirection(t, e);
              if (
                (Q(
                  "Handling navigation event " +
                    a.a[t] +
                    " - " +
                    X[e] +
                    " - " +
                    Z[n],
                  this.m_element
                ),
                n == Z.INVALID)
              )
                return !1;
              if (this.m_Properties.focusable && this.m_bFocused)
                return Q("Skipping navigation within focused element"), !1;
              if ((this.EnsureChildrenSorted(!0), e == X.GRID))
                return this.BPerformGridNavigation(this.m_iActiveChild, n, t);
              var o = this.m_iActiveChild;
              return (
                -1 == o && (o = n == Z.FORWARD ? -1 : this.m_rgChildren.length),
                this.BFocusNextChildInDirection(g.GAMEPAD, o, n, t)
              );
            }),
            (t.prototype.ComputeRelativeDirection = function (t, e) {
              var n = e == X.ROW_REVERSE || e == X.COLUMN_REVERSE;
              switch (e) {
                case X.ROW:
                case X.ROW_REVERSE:
                  switch (t) {
                    case a.a.DIR_LEFT:
                      return n ? Z.FORWARD : Z.BACKWARD;
                    case a.a.DIR_RIGHT:
                      return n ? Z.BACKWARD : Z.FORWARD;
                    default:
                      return Z.INVALID;
                  }
                case X.COLUMN:
                case X.COLUMN_REVERSE:
                  switch (t) {
                    case a.a.DIR_UP:
                      return n ? Z.FORWARD : Z.BACKWARD;
                    case a.a.DIR_DOWN:
                      return n ? Z.BACKWARD : Z.FORWARD;
                    default:
                      return Z.INVALID;
                  }
                case X.GRID:
                  switch (t) {
                    case a.a.DIR_LEFT:
                    case a.a.DIR_UP:
                      return n ? Z.FORWARD : Z.BACKWARD;
                    case a.a.DIR_RIGHT:
                    case a.a.DIR_DOWN:
                      return n ? Z.BACKWARD : Z.FORWARD;
                    default:
                      return Z.INVALID;
                  }
                default:
                  return Z.INVALID;
              }
            }),
            (t.prototype.AdvanceIndex = function (t, e) {
              return t + (e == Z.FORWARD ? 1 : -1);
            }),
            (t.prototype.BFocusNextChildInDirection = function (t, e, n, o) {
              for (
                var i = n == Z.FORWARD ? 1 : -1, r = e + i;
                r >= 0 && r < this.m_rgChildren.length;
                r += i
              ) {
                if (this.m_rgChildren[r].BTakeFocus(t, o))
                  return (this.m_iActiveChild = r), !0;
              }
              return !1;
            }),
            (t.prototype.ScanChildren = function (t, e, n) {
              for (
                var o = e == Z.FORWARD ? 1 : -1, i = t;
                i >= 0 && i < this.m_rgChildren.length;
                i += o
              )
                if (n(this.m_rgChildren[i], i)) return i;
              return -1;
            }),
            (t.prototype.BPerformGridNavigation = function (t, e, n) {
              var o = n == a.a.DIR_UP || n == a.a.DIR_DOWN,
                i = this.GetLastFocusElement();
              if (!i || i == this.m_element)
                return (
                  !!this.BFocusNextChildInDirection(
                    g.GAMEPAD,
                    this.m_iActiveChild,
                    e,
                    n
                  ) ||
                  this.BFocusNextChildInDirection(
                    g.GAMEPAD,
                    this.m_iActiveChild,
                    e == Z.FORWARD ? Z.BACKWARD : Z.FORWARD,
                    n
                  )
                );
              var r = (this.GetActiveChild() || this).GetBoundingRect();
              if (n == a.a.DIR_UP || n == a.a.DIR_DOWN) {
                var s = this.m_Tree.GetLastFocusedMovementRect("x");
                s && ((r.x = s.x), (r.width = s.width));
              }
              if (!o) {
                var c = !1;
                return (
                  -1 !=
                    this.ScanChildren(this.AdvanceIndex(t, e), e, function (t) {
                      return j("y", r, t.GetBoundingRect())
                        ? t.BTakeFocus(g.GAMEPAD, n)
                        : ((c = !0), !0);
                    }) && !c
                );
              }
              var u = this.ScanChildren(
                this.AdvanceIndex(t, e),
                e,
                function (t) {
                  return !j("y", r, t.GetBoundingRect());
                }
              );
              if (-1 == u) return !1;
              var l = this.m_rgChildren[u].GetBoundingRect();
              return !!this.BFocusClosestChildInNextAxiallyAlignedSet(
                "x",
                e,
                n,
                r,
                u,
                l
              );
            }),
            (t.prototype.BFocusClosestChildInNextAxiallyAlignedSet = function (
              t,
              e,
              n,
              o,
              i,
              r
            ) {
              (!i || i < 0) && (i = 0);
              var a,
                c = [],
                u = { x: (a = o).x, y: a.y };
              this.ScanChildren(i, e, function (e) {
                var n = e.GetBoundingRect();
                return (
                  !(!r || j(s[t], r, n)) ||
                  (c.push({ child: e, overlap: K(t, o, n), dist: V(t, u, n) }),
                  !1)
                );
              }),
                e == Z.BACKWARD && c.reverse(),
                c.sort(function (t, e) {
                  var n = e.overlap - t.overlap;
                  return 0 != n ? n : t.dist - e.dist;
                });
              for (var l = 0, h = c; l < h.length; l++) {
                if (h[l].child.BTakeFocus(g.GAMEPAD, n)) return !0;
              }
              return !1;
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
            Object(o.c)([l.a], t.prototype, "OnFocusIn", null),
            Object(o.c)([l.a], t.prototype, "OnDOMFocus", null),
            Object(o.c)([l.a], t.prototype, "OnDOMBlur", null),
            Object(o.c)([l.a], t.prototype, "OnNavigationEvent", null),
            t
          );
        })(),
        et = "GamepadInput";
      function nt(t) {
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
      })($ || ($ = {}));
      var ot = (function () {
        function t(t) {
          var e = this;
          (this.m_bIsGamepadInputExternallyControlled = !1),
            (this.m_NavigationController = t),
            nt("BrowserView.RegisterForMessageFromParent") &&
            nt("BrowserView.PostMessageToParent")
              ? ((this.m_bIsGamepadInputExternallyControlled = !0),
                (this.m_postMessage = new rt()))
              : ((this.m_bIsGamepadInputExternallyControlled =
                  window.top != window.self),
                (this.m_postMessage = new it(window.top))),
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
            var e = $.Basic;
            window.bSupportsGamepadUI && (e = $.Full),
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
          Object(o.c)([l.a], t.prototype, "OnFocusChanged", null),
          Object(o.c)([l.a], t.prototype, "OnMessage", null),
          Object(o.c)([l.a], t.prototype, "PostPageUnloading", null),
          t
        );
      })();
      var it = (function () {
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
                { gamepadMessage: et, args: e },
                "*"
              );
            }),
            (t.prototype.OnMessage = function (t) {
              var e = null == t ? void 0 : t.data;
              if (e && e.gamepadMessage == et && e.args) {
                var n = JSON.parse(e.args);
                this.m_fnCallback(n);
              }
            }),
            Object(o.c)([l.a], t.prototype, "OnMessage", null),
            t
          );
        })(),
        rt = (function () {
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
              SteamClient.BrowserView.PostMessageToParent(et, e);
            }),
            (t.prototype.OnMessage = function (t, e) {
              if (t == et) {
                var n = JSON.parse(e);
                this.m_fnCallback(n);
              }
            }),
            Object(o.c)([l.a], t.prototype, "OnMessage", null),
            t
          );
        })();
      n("SHRt"), a.c;
      var at = "VirtualKeyboardMessage";
      function st(t) {
        return t && t.type === at;
      }
      var ct,
        ut = (function () {
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
              t == at && this.InternalDispatchMessage(JSON.parse(e));
            }),
            (t.prototype.OnMessage = function (t) {
              this.InternalDispatchMessage(t.data);
            }),
            (t.prototype.InternalDispatchMessage = function (t) {
              st(t) && t.message;
            }),
            (t.prototype.SendMessage = function (t) {
              var e = Object(o.a)({ type: "VirtualKeyboardMessage" }, t);
              nt("BrowserView.PostMessageToParent")
                ? SteamClient.BrowserView.PostMessageToParent(
                    e.type,
                    JSON.stringify(e)
                  )
                : (Object(u.a)(
                    window.parent && window.parent != window,
                    "No parent window to post to"
                  ),
                  window.parent.postMessage(e, "*"));
            }),
            Object(o.c)([l.a], t.prototype, "OnBrowserViewMessage", null),
            Object(o.c)([l.a], t.prototype, "OnMessage", null),
            t
          );
        })(),
        lt = n("8+ko"),
        ht = n.n(lt);
      function pt(t) {
        var e = 0;
        t.children().each(function () {
          var t = r()(this),
            n = t.css("zIndex");
          "auto" === n
            ? t.css("zIndex", 0)
            : isNaN(parseInt(n)) || (e = Math.max(e, parseInt(n)));
        });
        var n = r()("<div/>", {
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
            (o = r()("<div/>", {
              style: "position: absolute; pointer-events: none; ",
              class: ht.a.FocusRing,
            })).css({
              left: e.x - i.x - 4,
              top: e.y - i.y - 4,
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
      !(function (t) {
        (t[(t.Unknown = 0)] = "Unknown"),
          (t[(t.NotNeeded = 1)] = "NotNeeded"),
          (t[(t.InReactTree = 2)] = "InReactTree");
      })(ct || (ct = {}));
      var dt = new ut(),
        mt = !1;
      function gt(t) {
        if (!mt) {
          var e = new x();
          (window.legacyWebFocusNavController = e),
            new ot(e).BIsGamepadInputExternallyControlled() ||
              e.RegisterInputSource(t),
            (function (t) {
              r()("html").addClass("gpnav_active");
              var e = r()("body"),
                n = t.NewGamepadNavigationTree("legacy"),
                o = pt(e);
              (n.Root.m_FocusRing = o),
                n.Root.SetProperties({}),
                ft.set(document.body, n.Root),
                yt(document.body, n.Root),
                At(void 0, !0),
                t.RegisterGamepadNavigationTree(n, !1),
                r()(document.body).on("vgp_onbuttondown", function (e) {
                  t.HandleButtonDownEventAsLogicalEvent(e.originalEvent);
                }),
                new MutationObserver(vt).observe(document.body, {
                  childList: !0,
                  subtree: !0,
                }),
                (i = !0),
                (P = i);
              var i;
            })(e);
        }
        mt = !0;
      }
      function vt(t) {
        for (var e = 0, n = t; e < n.length; e++) {
          var o = n[e],
            i = [],
            a = [];
          if ("childList" === o.type) {
            for (var s = 0; s < o.addedNodes.length; s++) {
              if ((u = o.addedNodes[s]).nodeType === Node.ELEMENT_NODE) {
                var c = u;
                c.parentElement && i.push(c);
              }
            }
            for (s = 0; s < o.removedNodes.length; s++) {
              var u;
              (u = o.removedNodes[s]).nodeType === Node.ELEMENT_NODE &&
                a.push(u);
            }
          }
          i.length && At(r()(i)), a.length && Nt(r()(a));
        }
      }
      var ft = new WeakMap(),
        _t = new WeakMap(),
        bt = [];
      function yt(t, e) {
        if (e instanceof tt) {
          var n = e.GetDepth();
          bt[n] || (bt[n] = []), bt[n].push([t, e]);
        }
        ft.set(t, e);
      }
      function Ct(t, e) {
        var n = _t.has(t) ? _t.get(t) : [];
        n.push(e), _t.set(t, n);
      }
      function Ot(t) {
        return "jquery" in t
          ? ft.get(t[0]) || ct.Unknown
          : ft.get(t) || ct.Unknown;
      }
      function Nt(t) {
        t.find("*")
          .addBack()
          .each(function () {
            var t;
            null === (t = _t.get(this)) ||
              void 0 === t ||
              t.forEach(function (t) {
                return t();
              }),
              ft.delete(this),
              _t.delete(this);
          });
      }
      function At(t, e) {
        void 0 === e && (e = !1);
        performance.now();
        var n =
          "a,button,input:not(input[type=hidden]),label,[data-panel],[data-react-nav-root]";
        r()(n, t)
          .addBack(n)
          .each(function () {
            var t;
            (function (t) {
              return "jquery" in t ? ft.has(t[0]) : ft.has(t);
            })((t = this)) || Dt(t);
          }),
          (function () {
            for (var t = bt.length - 1; t >= 0; t--)
              if (bt[t])
                for (var e = 0, n = bt[t]; e < n.length; e++) {
                  var o = n[e],
                    i = o[0],
                    r = o[1];
                  Ct(i, r.Tree.RegisterNavigationItem(r, i));
                }
            bt = [];
          })();
      }
      function Rt(t) {
        var e = r()(t.Element);
        return (
          e.is(":visible") &&
          ((e.outerWidth() > 0 && e.outerHeight() > 0) ||
            "hidden" !== e.css("overflow"))
        );
      }
      function Et(t) {
        this.click(), t.stopPropagation();
      }
      function Ft(t) {
        r()(this).find("a")[0].click();
      }
      function Dt(t) {
        var e,
          n = r()(t),
          i = It(t);
        if (
          (null === (e = null == t ? void 0 : t.dataset) || void 0 === e
            ? void 0
            : e.reactNavRoot) ||
          i == ct.InReactTree
        )
          return yt(t, ct.InReactTree), ct.InReactTree;
        var s = i.Tree.CreateNode(i, i.m_FocusRing),
          c = n.data("panel") || {};
        if ("A" == t.tagName || "BUTTON" == t.tagName || "LABEL" == t.tagName)
          (c.focusable = !0), (c.clickOnActivate = !0);
        else if ("INPUT" == t.tagName)
          switch (((c.focusable = !0), t.getAttribute("type"))) {
            case "checkbox":
              c.clickOnActivate = !0;
              break;
            case "text":
            case "password":
              c.enableVirtualKeyboard = !0;
          }
        var u = c["flow-children"];
        delete c["flow-children"];
        var l = c.clickOnActivate,
          h = c.maintainX,
          p = c.maintainY,
          d = c.enableVirtualKeyboard,
          m = c.onOKActionDescription,
          g = c.onCancelActionDescription,
          v = c.onSecondaryActionDescription,
          f = c.onOptionsActionDescription,
          _ = c.onMenuActionDescription,
          b = c.actionDescriptionMap,
          y = c.onOKButton,
          C = c.onCancelButton,
          O = c.onSecondaryButton,
          A = c.onOptionsButton,
          E = c.onMenuButton,
          F = c.bFocusRingRoot,
          D = Object(o.f)(c, [
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
          ]);
        y &&
          m &&
          Ct(
            n[0],
            (function (t, e) {
              return N(t, "vgp_onok", R(e));
            })(n[0], Function("event", y))
          ),
          C &&
            g &&
            Ct(
              n[0],
              (function (t, e) {
                return N(t, "vgp_oncancel", R(e));
              })(n[0], Function("event", C))
            ),
          O &&
            v &&
            Ct(
              n[0],
              (function (t, e) {
                return N(t, "vgp_onsecondaryaction", R(e));
              })(n[0], Function("event", O))
            ),
          A &&
            f &&
            Ct(
              n[0],
              (function (t, e) {
                return N(t, "vgp_onoptions", R(e));
              })(n[0], Function("event", A))
            ),
          E &&
            _ &&
            Ct(
              n[0],
              (function (t, e) {
                return N(t, "vgp_onmenu", R(e));
              })(n[0], Function("event", E))
            );
        var I = u
          ? (function (t) {
              switch (t) {
                case "column":
                  return X.COLUMN;
                case "column-reverse":
                  return X.COLUMN_REVERSE;
                case "row":
                  return X.ROW;
                case "row-reverse":
                  return X.ROW_REVERSE;
                case "grid":
                  return X.GRID;
                default:
                  return X.NONE;
              }
            })(u)
          : X.NONE;
        I != X.NONE && (D.layout = I),
          h
            ? (D.navEntryPreferPosition = J.MAINTAIN_X)
            : p && (D.navEntryPreferPosition = J.MAINTAIN_Y),
          l &&
            (!1 !== D.focusable && (D.focusable = !0),
            n.on("vgp_onok", "firstChild" === l ? Ft : Et),
            Ct(t, function () {
              n.off("vgp_onok");
            })),
          d &&
            (n.on("vgp_onok.vkbindings", function () {
              return dt.ShowVirtualKeyboard();
            }),
            n.on("click.vkbindings", function () {
              return dt.ShowVirtualKeyboard();
            }),
            n.on("blur.vkbindings", function () {
              return dt.HideVirtualKeyboard();
            }),
            Ct(t, function () {
              n.off(".vkbindings");
            })),
          D.focusable && void 0 === n.attr("tabIndex") && n.attr("tabIndex", 0),
          D.focusable &&
            s.FocusCallbackList.Register(function (e) {
              return (function (t, e) {
                e ? r()(t).addClass("gpfocus") : r()(t).removeClass("gpfocus");
              })(t, e);
            }),
          F &&
            ((s.m_FocusRing = pt(n)),
            "static" == n.css("position") && n.css("position", "relative"));
        var S = (function (t) {
            var e = t.onOKActionDescription,
              n = t.onCancelActionDescription,
              i = t.onSecondaryActionDescription,
              r = t.onOptionsActionDescription,
              s = t.onMenuActionDescription,
              c = t.actionDescriptionMap,
              u = Object(o.a)({}, c);
            return (
              void 0 !== e && (u[a.a.OK] = e),
              void 0 !== n && (u[a.a.CANCEL] = n),
              void 0 !== i && (u[a.a.SECONDARY] = i),
              void 0 !== r && (u[a.a.OPTIONS] = r),
              void 0 !== s && (u[a.a.START] = s),
              u
            );
          })({
            onOKActionDescription: m,
            onCancelActionDescription: g,
            onSecondaryActionDescription: v,
            onOptionsActionDescription: f,
            onMenuActionDescription: _,
            actionDescriptionMap: b,
          }),
          T = Object(o.a)({ fnCanTakeFocus: Rt, actionDescriptionMap: S }, D);
        return s.SetProperties(T), yt(t, s), s;
      }
      function It(t) {
        var e = t.parentElement;
        if (!e) return console.error("no parent"), null;
        var n = Ot(e);
        if (n == ct.Unknown)
          n = (function (t) {
            var e = !1;
            switch (t.tagName) {
              case "A":
              case "INPUT":
                e = !0;
                break;
              case "DIV":
                if (Y(t) != X.COLUMN) e = !0;
                else {
                  var n = Y(t.parentElement);
                  (n != X.ROW && n != X.ROW_REVERSE) || (e = !0);
                }
            }
            var o = ct.NotNeeded;
            return e ? (o = Dt(t)) : yt(t, o), o;
          })(e);
        else if (n == ct.InReactTree) return n;
        return n instanceof tt ? n : It(e);
      }
      Object.assign(window, {
        InstrumentFocusElements: At,
        ForceUpdateFocusElements: function (t) {
          Nt(r()(t)), At(r()(t));
        },
        GPNavFocusChild: function (t) {
          var e = Ot(t[0]);
          return (
            e instanceof tt || (e = It(t[0])),
            e instanceof tt && e.BTakeFocus(g.APPLICATION),
            !1
          );
        },
      });
    },
  },
]);

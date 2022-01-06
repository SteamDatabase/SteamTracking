/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonpLegacyWeb = window.webpackJsonpLegacyWeb || []).push([
  [0],
  {
    biHH: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, "InitializeGamepadNavigation", function () {
          return ht;
        });
      var i = n("mrSG"),
        o = n("xeH2"),
        r = n.n(o),
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
            Object(i.d)(e, t),
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
                return Object(i.b)(this, void 0, void 0, function () {
                  var e;
                  return Object(i.e)(this, function (n) {
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
                return Object(i.b)(this, void 0, void 0, function () {
                  return Object(i.e)(this, function (n) {
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
              this.Log.apply(this, Object(i.g)([c.Debug], t));
            }),
            (t.prototype.Info = function () {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
              this.Log.apply(this, Object(i.g)([c.Info], t));
            }),
            (t.prototype.Warning = function () {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
              this.Log.apply(this, Object(i.g)([c.Warning], t));
            }),
            (t.prototype.Error = function () {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
              this.Log.apply(this, Object(i.g)([c.Error], t));
            }),
            (t.prototype.Assert = function (t) {
              for (var e = [], n = 1; n < arguments.length; n++)
                e[n - 1] = arguments[n];
              t ||
                this.Log.apply(
                  this,
                  Object(i.g)([c.Error, "Assertion failed:"], e)
                );
            }),
            (t.prototype.Log = function (t) {
              for (var e, n, o = [], r = 1; r < arguments.length; r++)
                o[r - 1] = arguments[r];
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
                C.apply(void 0, Object(i.g)([t, u, a, this.m_sName], o));
              }
            }),
            Object(i.c)([l.a], t.prototype, "Debug", null),
            Object(i.c)([l.a], t.prototype, "Info", null),
            Object(i.c)([l.a], t.prototype, "Warning", null),
            Object(i.c)([l.a], t.prototype, "Error", null),
            Object(i.c)([l.a], t.prototype, "Assert", null),
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
                Object(i.g)(
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
              return Object(i.b)(this, void 0, void 0, function () {
                var e, n;
                return Object(i.e)(this, function (i) {
                  switch (i.label) {
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
                        (e.m_bIncludeBacktraceInLog = !!i.sent()),
                        [
                          4,
                          this.m_Storage.GetObject(
                            t.k_EnabledLogNames_StorageKey
                          ),
                        ]
                      );
                    case 2:
                      return (
                        (n = i.sent()),
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
              return Object(i.b)(this, void 0, void 0, function () {
                return Object(i.e)(this, function (e) {
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
              return Object(i.b)(this, void 0, void 0, function () {
                return Object(i.e)(this, function (e) {
                  return (
                    this.SetDebugLogEnabled(t, !this.IsDebugLogEnabled(t)), [2]
                  );
                });
              });
            }),
            (t.prototype.SetDebugLogEnabled = function (t, e) {
              return Object(i.b)(this, void 0, void 0, function () {
                return Object(i.e)(this, function (n) {
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
              return Object(i.b)(this, void 0, void 0, function () {
                return Object(i.e)(this, function (e) {
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
              return Object(i.b)(this, void 0, void 0, function () {
                return Object(i.e)(this, function (e) {
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
      function C(t, e, n, o) {
        for (var r = [], a = 4; a < arguments.length; a++)
          r[a - 4] = arguments[a];
        var s = _(o),
          u = s.map(function (t, e) {
            return Math.max(
              0,
              Math.min(255, 255 * (0.8 * (t / 255 - 0.5) + 0.15))
            );
          }),
          l = b(u),
          h = n;
        e && (h = y(t) + " " + h);
        var p = Object(i.g)(
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
        var i = new t.ownerDocument.defaultView.CustomEvent(e, {
          bubbles: !0,
          cancelable: !0,
          detail: n,
        });
        return t.dispatchEvent(i);
      }
      function R(t) {
        return function (e) {
          !1 !== t(e) && (e.stopPropagation(), e.preventDefault());
        };
      }
      var E = n("Kw0F"),
        D = (function () {
          function t(t) {
            this.m_root = t;
          }
          return (
            (t.prototype.SerializeNavNode = function (t) {
              var e = this,
                n = null,
                i = t.GetChildren(),
                o = i[0],
                r = i[1];
              return (
                o.length &&
                  -1 != r &&
                  (n = o.map(function (t) {
                    return e.SerializeNavNode(t);
                  })),
                { sNavKey: t.NavKey, iActiveChild: r, rgChildren: n }
              );
            }),
            (t.prototype.RestoreSerializedNavNode = function (t, e) {
              var n = e.sNavKey,
                i = e.iActiveChild,
                o = e.rgChildren;
              if (
                (n && Object(u.a)(n == t.NavKey, "navkey mismatch"),
                t.SetActiveChild(i),
                o && o.length)
              ) {
                var r = t.GetChildren()[0],
                  a = new Map();
                r.forEach(function (t) {
                  t.NavKey && a.set(t.NavKey, t);
                });
                for (var s = 0, c = o; s < c.length; s++) {
                  var l = c[s];
                  if (l.sNavKey) {
                    var h = a.get(l.sNavKey);
                    h && this.RestoreSerializedNavNode(h, l);
                  }
                }
                if (-1 != i && o[i].sNavKey) {
                  var p = a.get(o[i].sNavKey);
                  p && t.SetActiveChild(r.indexOf(p));
                }
                for (var d = 0, m = 0; d < r.length && m < o.length; ) {
                  for (; d < r.length && r[d].NavKey; ) d++;
                  for (; m < o.length && o[m].sNavKey; ) m++;
                  if (d >= r.length || m >= o.length) break;
                  this.RestoreSerializedNavNode(r[d], o[m]), d++, m++;
                }
              }
            }),
            t
          );
        })(),
        I = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.m_rgHistory = []), e;
          }
          return (
            Object(i.d)(e, t),
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
        })(D);
      function S(t) {
        return null != t && void 0 !== t.focus;
      }
      function F(t) {
        for (
          var e = 1, n = t.ownerDocument.defaultView, i = t;
          null != i;
          i = i.parentElement
        ) {
          var o = parseFloat(n.getComputedStyle(i).zoom);
          0 !== o && (e *= o);
        }
        return e;
      }
      function T(t, e) {
        if ("x" === e) {
          if (t.scrollWidth <= t.clientWidth) return !1;
        } else if (t.scrollHeight <= t.clientHeight) return !1;
        var n = t.ownerDocument.defaultView.getComputedStyle(t),
          i = "x" === e ? n.overflowX : n.overflowY;
        return "auto" === i || "scroll" === i;
      }
      function w(t, e) {
        for (var n, i = t; null != i; i = i.Parent) {
          var o = i.GetScrollSnapProps(),
            r =
              "x" === e
                ? null == o
                  ? void 0
                  : o.navScrollSnapX
                : null == o
                ? void 0
                : o.navScrollSnapY;
          if (null != r) {
            var a =
              null !==
                (n =
                  "x" === e
                    ? o.navScrollSnapOffsetX
                    : o.navScrollSnapOffsetY) && void 0 !== n
                ? n
                : 0;
            return { elementToSnap: i.Element, snapType: r, nMargin: a };
          }
        }
      }
      function L(t, e) {
        var n = e.elementToSnap,
          i = e.snapType,
          o = e.nMargin;
        if (i != J.NONE)
          for (
            var r = F(n),
              a = n.getBoundingClientRect(),
              s =
                "x" === t
                  ? { min: a.left * r, max: a.right * r }
                  : { min: a.top * r, max: a.bottom * r },
              c = i === J.CENTER ? -1 : 1,
              u = s.min - o * r,
              l = s.max + c * o * r,
              h = n.parentElement;
            null != h;
            h = h.parentElement
          )
            if (T(h, t)) {
              var p = F(h),
                d = h.getBoundingClientRect(),
                m =
                  "x" === t
                    ? { min: d.left * p, max: d.right * p }
                    : { min: d.top * p, max: d.bottom * p };
              if (!(i === J.LAZY && m.min <= u && m.max >= l)) {
                var g = { min: u - m.min, max: l - m.max },
                  v =
                    i === J.START
                      ? 0
                      : i === J.CENTER
                      ? 0.5
                      : i === J.END
                      ? 1
                      : Math.abs(g.min) <= Math.abs(g.max)
                      ? 0
                      : 1,
                  f = ((1 - v) * g.min + v * g.max) / p;
                "x" === t ? (h.scrollLeft += f) : (h.scrollTop += f);
              }
            }
      }
      var M = !1;
      function P(t, e, n) {
        if (M) {
          var i = t.getBoundingClientRect(),
            o = e.Element.getBoundingClientRect(),
            r = o.bottom < i.top,
            a = o.top > i.bottom;
          if (
            (r || a) &&
            !(function (t) {
              var e = t.getBoundingClientRect();
              return e.top >= 72 && e.bottom <= window.innerHeight - 72;
            })(t)
          ) {
            var s = a ? i.top - 72 : i.bottom - window.innerHeight + 72;
            t.focus({ preventScroll: !0 });
            for (
              var c = !1, u = t.parentElement;
              null != u;
              u = u.parentElement
            )
              T(u, "y") && ((c = !0), (u.scrollTop += s));
            return c || window.scrollBy({ behavior: n, top: s }), !0;
          }
        }
        return !1;
      }
      var B;
      function G(t) {
        if (t.Element) {
          var e = w(t, "x"),
            n = w(t, "y");
          e && L("x", e), n && L("y", n);
        }
      }
      var k = new v("FocusNavigation").Debug,
        x = new v("GamepadEvents").Debug,
        W = (function () {
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
                var i = this.m_navigationSource.Value.eActivationSourceType;
                if (
                  !(
                    (i != a.b.GAMEPAD && i != a.b.KEYBOARD) ||
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
                i = n.nLastActiveGamepadIndex;
              n.nActiveGamepadIndex >= 0 && (i = n.nActiveGamepadIndex),
                this.m_navigationSource.Set({
                  eActivationSourceType: t,
                  nActiveGamepadIndex: e,
                  nLastActiveGamepadIndex: i,
                });
            }),
            (t.prototype.OnButtonDown = function (t, e, n, i) {
              var o;
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
                    (null === (o = this.m_LastActiveNavTree) || void 0 === o
                      ? void 0
                      : o.id) +
                    " at ",
                  r
                ),
                  A(r, "vgp_onbuttondown", {
                    button: t,
                    source: e,
                    is_repeat: i,
                  });
              }
            }),
            (t.prototype.OnButtonUp = function (t, e, n) {
              this.m_bSuppressGamepadInput ||
                (this.ChangeNavigationSource(e, n),
                A(this.GetEventTarget(), "vgp_onbuttonup", {
                  button: t,
                  source: e,
                  is_repeat: !1,
                }));
            }),
            (t.prototype.OnNavigationTypeChange = function (t) {
              var e;
              if (
                (this.ChangeNavigationSource(t, -1),
                t == a.b.MOUSE || t == a.b.TOUCH)
              ) {
                var n = this.m_LastActiveNavTree.GetLastFocusedNode(),
                  i = (function (t) {
                    if (!S(t)) return !1;
                    var e = t.tagName,
                      n = ((i = t), "INPUT" === i.nodeName ? t.type : null);
                    var i;
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
                  e.TransferFocus(g.BROWSER, i);
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
                var i = t.GetLastFocusedNode();
                this.SetActiveNavTree(t, !0),
                  i &&
                    this.m_FocusChangedCallbacks.Dispatch(
                      g.APPLICATION,
                      null,
                      i
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
                var i = this.m_LastActiveFocusNavTree == t;
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
                    t.OnActivate(!i && e));
              }
            }),
            (t.prototype.BindGlobalEventHandlers = function () {
              this.m_bGlobalEventsInitialized ||
                (this.m_bGlobalEventsInitialized = !0);
            }),
            (t.prototype.OnFocusChangeStart = function (t, e, n, i) {
              return (
                0 == this.m_iFocusChangeStack
                  ? (this.m_ActiveFocusChange = { source: t, from: n, to: i })
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
                  i = e.from,
                  o = e.to;
                this.m_FocusChangedCallbacks.Dispatch(n, i, o);
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
                    i = !1,
                    o = O[t.detail.button];
                  return (
                    o
                      ? ((i = !0), (n = A(t.target, o, t.detail)))
                      : -1 !== e.indexOf(t.detail.button) &&
                        ((i = !0),
                        (n = A(t.target, "vgp_ondirection", t.detail))),
                    { bUnhandled: n, bHadLogicalEventMapping: i }
                  );
                })(t),
                n = e.bUnhandled,
                i = e.bHadLogicalEventMapping;
              return (
                x(
                  "Logical gamepad Event fired: " +
                    a.a[t.detail.button] +
                    ", had logical event: " +
                    i +
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
            Object(i.c)([l.a], t.prototype, "OnButtonDown", null),
            Object(i.c)([l.a], t.prototype, "OnButtonUp", null),
            Object(i.c)([l.a], t.prototype, "OnNavigationTypeChange", null),
            t
          );
        })();
      var j = (function () {
        function t(t) {
          (this.m_node = t), (this.m_History = new I(t));
        }
        return (
          (t.prototype.TakeFocus = function (t) {
            return this.m_node.BTakeFocus(t ? g.GAMEPAD : g.APPLICATION, t);
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
      function U(t, e, n) {
        return "x" == t
          ? e.x + e.width > n.x && e.x < n.x + n.width
          : "y" == t
          ? e.y + e.height > n.y && e.y < n.y + n.height
          : (Object(u.a)(!1, "Invalid axis " + t), !1);
      }
      function K(t, e, n) {
        var i;
        return (
          "x" == t
            ? (i = Math.min(e.x + e.width, n.x + n.width) - Math.max(e.x, n.x))
            : "y" == t
            ? (i =
                Math.min(e.y + e.height, n.y + n.height) - Math.max(e.y, n.y))
            : (Object(u.a)(!1, "Invalid axis " + t), (i = 0)),
          i < 0 ? 0 : i
        );
      }
      function V(t, e, n) {
        var i = e[t],
          o = (function (t, e) {
            return "x" == t
              ? { min: e.x, max: e.x + e.width }
              : "y" == t
              ? { min: e.y, max: e.y + e.height }
              : void Object(u.a)(!1, "Invalid axis " + t);
          })(t, n);
        return i < o.min ? o.min - i : i > o.max ? i - o.max : 0;
      }
      var H = (function () {
        function t(t, e) {
          (this.m_onActivateCallbacks = new h.a()),
            (this.m_onDeactivateCallbacks = new h.a()),
            (this.m_Controller = t),
            (this.m_ID = e),
            (this.m_Root = new $(this, null, null)),
            this.m_Root.SetProperties({ layout: z.COLUMN }),
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
            return new $(this, t, e);
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
            var i = this.m_lastFocusNode;
            if (i != e) {
              k(
                "Transfer focus in " +
                  this.id +
                  ", source: " +
                  g[t] +
                  ", from/to:",
                null == i ? void 0 : i.m_element,
                null == e ? void 0 : e.m_element
              );
              var o = { blurredNode: i, focusedNode: e, source: t };
              i && i.SetHasFocus(!1), e && e.SetHasFocus(!0);
              var r = this.m_Controller.OnFocusChangeStart(t, this, i, e);
              e &&
                (this.BUseVirtualFocus()
                  ? (e.RequestFocus(), G(e))
                  : (function (t, e) {
                      var n = t.Element;
                      if (n) {
                        var i = w(t, "x"),
                          o = w(t, "y");
                        if (i || o)
                          n.focus({ preventScroll: !0 }),
                            i && L("x", i),
                            o && L("y", o);
                        else if (e) {
                          var r = n.getBoundingClientRect(),
                            a = !1;
                          ((B && performance.now() - B < 500) ||
                            r.bottom < -300 ||
                            r.top > window.innerHeight + 300) &&
                            (a = !0);
                          var s = a ? "auto" : "smooth";
                          a && (B = performance.now()),
                            P(n, e, s) ||
                              (n.focus({ preventScroll: !0 }),
                              n.scrollIntoView({
                                behavior: s,
                                block: "nearest",
                              }));
                        } else n.focus();
                      }
                    })(e, i)),
                i &&
                  (A(i.Element, "vgp_onblur", o),
                  !i.m_FocusRing ||
                    (e && i.m_FocusRing == e.m_FocusRing) ||
                    i.m_FocusRing.OnBlur(t, i, e)),
                e &&
                  (this.OnChildActivated(t),
                  A(e.Element, "vgp_onfocus", o),
                  e.m_FocusRing &&
                    (i && e.m_FocusRing == i.m_FocusRing
                      ? e.m_FocusRing.OnFocusChange(t, i, e)
                      : e.m_FocusRing.OnFocus(t, e, i))),
                (this.m_lastFocusNode = e),
                "x" == n
                  ? (this.m_lastFocusNodeXMovement =
                      null == e ? void 0 : e.GetBoundingRect())
                  : "y" == n
                  ? (this.m_lastFocusNodeYMovement =
                      null == e ? void 0 : e.GetBoundingRect())
                  : ((this.m_lastFocusNodeXMovement = void 0),
                    (this.m_lastFocusNodeYMovement = void 0)),
                this.m_Controller.OnFocusChangeComplete(r);
            }
          }),
          t
        );
      })();
      function Y(t) {
        if (!t) return z.NONE;
        var e = t.ownerDocument.defaultView,
          n = e.getComputedStyle(t);
        if ("flex" == n.display)
          switch (n.flexDirection) {
            case "row":
              return "wrap" == n.flexWrap ? z.GRID : z.ROW;
            case "row-reverse":
              return z.ROW_REVERSE;
            case "column":
              return z.COLUMN;
            case "column-reverse":
              return z.COLUMN_REVERSE;
          }
        else {
          if ("grid" == n.display) return z.GRID;
          if (t.childElementCount > 0) {
            var i = e.getComputedStyle(t.firstElementChild);
            if ("left" === i.float) return z.ROW;
            if ("right" === i.float) return z.ROW_REVERSE;
            if ("inline" === i.display || "inline-block" === i.display)
              return z.GRID;
          }
        }
        return z.COLUMN;
      }
      var z,
        X,
        J,
        q,
        Z = new v("FocusNavigationMovement").Debug;
      !(function (t) {
        (t[(t.NONE = 0)] = "NONE"),
          (t[(t.COLUMN = 1)] = "COLUMN"),
          (t[(t.ROW = 2)] = "ROW"),
          (t[(t.COLUMN_REVERSE = 3)] = "COLUMN_REVERSE"),
          (t[(t.ROW_REVERSE = 4)] = "ROW_REVERSE"),
          (t[(t.GRID = 5)] = "GRID"),
          (t[(t.GEOMETRIC = 6)] = "GEOMETRIC");
      })(z || (z = {})),
        (function (t) {
          (t[(t.FIRST = 0)] = "FIRST"),
            (t[(t.MAINTAIN_X = 1)] = "MAINTAIN_X"),
            (t[(t.MAINTAIN_Y = 2)] = "MAINTAIN_Y"),
            (t[(t.PREFERRED_CHILD = 3)] = "PREFERRED_CHILD");
        })(X || (X = {})),
        (function (t) {
          (t[(t.LAZY = 0)] = "LAZY"),
            (t[(t.START = 1)] = "START"),
            (t[(t.CENTER = 2)] = "CENTER"),
            (t[(t.END = 3)] = "END"),
            (t[(t.NEAREST = 4)] = "NEAREST"),
            (t[(t.NONE = 5)] = "NONE");
        })(J || (J = {})),
        (function (t) {
          (t[(t.INVALID = 0)] = "INVALID"),
            (t[(t.FORWARD = 1)] = "FORWARD"),
            (t[(t.BACKWARD = 2)] = "BACKWARD");
        })(q || (q = {}));
      var Q,
        $ = (function () {
          function t(t, e, n) {
            (this.m_rgChildren = []),
              (this.m_iActiveChild = -1),
              (this.m_bChildrenSorted = !1),
              (this.m_bAutoFocusChild = !1),
              (this.m_bFocused = !1),
              (this.m_FocusCallbackList = new h.a()),
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
              return new j(this);
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
                i,
                o =
                  ((n =
                    null === (e = this.m_Properties) || void 0 === e
                      ? void 0
                      : e.actionDescriptionMap),
                  (i = null == t ? void 0 : t.actionDescriptionMap),
                  !(null == n || null == i
                    ? n === i
                    : "object" == typeof n &&
                      "object" == typeof i &&
                      Object.keys(n).length === Object.keys(i).length &&
                      Object.keys(n).every(function (t) {
                        return i.hasOwnProperty(t) && n[t] === i[t];
                      })));
              (this.m_Properties = t || {}),
                o && this.m_ActionDescriptionsChangedCallbackList.Dispatch(),
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
            (t.prototype.BHasFocus = function () {
              return this.m_bFocused;
            }),
            (t.prototype.BFocusWithin = function () {
              return (
                !!this.m_bFocused ||
                (-1 != this.m_iActiveChild &&
                  this.m_iActiveChild < this.m_rgChildren.length &&
                  this.m_rgChildren[this.m_iActiveChild].BFocusWithin())
              );
            }),
            Object.defineProperty(t.prototype, "FocusCallbackList", {
              get: function () {
                return this.m_FocusCallbackList;
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
                for (var i in n) {
                  var o = i;
                  void 0 === t[o] && (t[o] = n[o]);
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
                      i = e.m_element;
                    if (!n) return i ? 1 : 0;
                    if (!i) return -1;
                    var o = n.compareDocumentPosition(i);
                    return o & Node.DOCUMENT_POSITION_PRECEDING
                      ? 1
                      : o & Node.DOCUMENT_POSITION_FOLLOWING
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
                  var i = e.indexOf(n);
                  if (-1 !== i) {
                    (this.m_iActiveChild = i),
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
              var n = (function (t) {
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
                })(e),
                i = this.m_Properties,
                o = i.focusable,
                r = i.focusableIfNoChildren,
                c = i.childFocusDisabled,
                u = i.fnCanTakeFocus;
              if (u && !u(this)) return !1;
              if (o || (r && c) || (r && 0 == this.m_rgChildren.length))
                return this.m_Tree.TransferFocus(t, this, n), !0;
              if (c) return !1;
              if (this.m_rgChildren.length) {
                this.EnsureChildrenSorted();
                var l = this.m_iActiveChild;
                if (l < 0 || l >= this.m_rgChildren.length) {
                  l = 0;
                  var h = this.GetLayout();
                  (h != z.ROW_REVERSE && h != z.COLUMN_REVERSE) ||
                    (l = this.m_rgChildren.length - 1);
                }
                var p = this.m_Properties.navEntryPreferPosition;
                if ((p != X.MAINTAIN_X && p != X.MAINTAIN_Y) || !n) {
                  if (p == X.PREFERRED_CHILD)
                    for (var d = 0, m = this.m_rgChildren; d < m.length; d++) {
                      var v = m[d];
                      if (
                        v.BWantsPreferredFocus() &&
                        v.BTakeFocus(g.GAMEPAD, e)
                      )
                        return !0;
                    }
                } else {
                  var f,
                    _ = p == X.MAINTAIN_X ? "x" : "y";
                  _ == s[n] &&
                    (f = this.m_Tree.GetLastFocusedMovementRect(s[n])),
                    Z(
                      "Taking focus while preserving " +
                        X[p] +
                        " preserved: " +
                        _ +
                        " movement: " +
                        n +
                        ", node:",
                      f
                    );
                  var b = this.ComputeRelativeDirection(e, z.GRID);
                  if (f) {
                    var y = b == q.BACKWARD ? this.m_rgChildren.length - 1 : 0;
                    if (
                      this.BFocusClosestChildInNextAxiallyAlignedSet(
                        _,
                        b,
                        e,
                        f,
                        y,
                        this.m_rgChildren[y].GetBoundingRect()
                      )
                    )
                      return !0;
                  } else if (_ != s[n]) {
                    y = b == q.BACKWARD ? this.m_rgChildren.length : -1;
                    if (this.BFocusNextChildInDirection(t, y, b, e)) return !0;
                  }
                }
                return (
                  !!this.BFocusNextChildInDirection(t, l - 1, q.FORWARD, e) ||
                  !!this.BFocusNextChildInDirection(t, l, q.BACKWARD, e) ||
                  (!!r && (this.m_Tree.TransferFocus(t, this, n), !0))
                );
              }
              return !1;
            }),
            (t.prototype.GetLayout = function () {
              return this.m_Properties.layout
                ? this.m_Properties.layout
                : this.m_rgChildren.length < 2
                ? z.NONE
                : Y(this.m_element);
            }),
            (t.prototype.OnNavigationEvent = function (t) {
              var e = t.detail.button;
              if (this.BTryInternalNavigation(e)) return !0;
              var n = this.m_Properties,
                i = n.onMoveUp,
                o = n.onMoveRight,
                r = n.onMoveDown,
                s = n.onMoveLeft,
                c = !1;
              switch (e) {
                case a.a.DIR_UP:
                  i && (c = i(t.detail));
                  break;
                case a.a.DIR_RIGHT:
                  o && (c = o(t.detail));
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
                (Z(
                  "Handling navigation event " +
                    a.a[t] +
                    " - " +
                    z[e] +
                    " - " +
                    q[n],
                  this.m_element
                ),
                n == q.INVALID)
              )
                return !1;
              if (this.m_Properties.focusable && this.m_bFocused)
                return Z("Skipping navigation within focused element"), !1;
              if ((this.EnsureChildrenSorted(!0), e == z.GRID))
                return this.BPerformGridNavigation(this.m_iActiveChild, n, t);
              var i = this.m_iActiveChild;
              return (
                -1 == i && (i = n == q.FORWARD ? -1 : this.m_rgChildren.length),
                this.BFocusNextChildInDirection(g.GAMEPAD, i, n, t)
              );
            }),
            (t.prototype.ComputeRelativeDirection = function (t, e) {
              var n = e == z.ROW_REVERSE || e == z.COLUMN_REVERSE;
              switch (e) {
                case z.ROW:
                case z.ROW_REVERSE:
                  switch (t) {
                    case a.a.DIR_LEFT:
                      return n ? q.FORWARD : q.BACKWARD;
                    case a.a.DIR_RIGHT:
                      return n ? q.BACKWARD : q.FORWARD;
                    default:
                      return q.INVALID;
                  }
                case z.COLUMN:
                case z.COLUMN_REVERSE:
                  switch (t) {
                    case a.a.DIR_UP:
                      return n ? q.FORWARD : q.BACKWARD;
                    case a.a.DIR_DOWN:
                      return n ? q.BACKWARD : q.FORWARD;
                    default:
                      return q.INVALID;
                  }
                case z.GRID:
                  switch (t) {
                    case a.a.DIR_LEFT:
                    case a.a.DIR_UP:
                      return n ? q.FORWARD : q.BACKWARD;
                    case a.a.DIR_RIGHT:
                    case a.a.DIR_DOWN:
                      return n ? q.BACKWARD : q.FORWARD;
                    default:
                      return q.INVALID;
                  }
                default:
                  return q.INVALID;
              }
            }),
            (t.prototype.AdvanceIndex = function (t, e) {
              return t + (e == q.FORWARD ? 1 : -1);
            }),
            (t.prototype.BFocusNextChildInDirection = function (t, e, n, i) {
              for (
                var o = n == q.FORWARD ? 1 : -1, r = e + o;
                r >= 0 && r < this.m_rgChildren.length;
                r += o
              ) {
                if (this.m_rgChildren[r].BTakeFocus(t, i))
                  return (this.m_iActiveChild = r), !0;
              }
              return !1;
            }),
            (t.prototype.ScanChildren = function (t, e, n) {
              for (
                var i = e == q.FORWARD ? 1 : -1, o = t;
                o >= 0 && o < this.m_rgChildren.length;
                o += i
              )
                if (n(this.m_rgChildren[o], o)) return o;
              return -1;
            }),
            (t.prototype.BPerformGridNavigation = function (t, e, n) {
              var i = n == a.a.DIR_UP || n == a.a.DIR_DOWN,
                o = this.GetLastFocusElement();
              if (!o || o == this.m_element)
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
                    e == q.FORWARD ? q.BACKWARD : q.FORWARD,
                    n
                  )
                );
              var r = (this.GetActiveChild() || this).GetBoundingRect();
              if (n == a.a.DIR_UP || n == a.a.DIR_DOWN) {
                var s = this.m_Tree.GetLastFocusedMovementRect("x");
                s && ((r.x = s.x), (r.width = s.width));
              }
              if (!i) {
                var c = !1;
                return (
                  -1 !=
                    this.ScanChildren(this.AdvanceIndex(t, e), e, function (t) {
                      return U("y", r, t.GetBoundingRect())
                        ? t.BTakeFocus(g.GAMEPAD, n)
                        : ((c = !0), !0);
                    }) && !c
                );
              }
              var u = this.ScanChildren(
                this.AdvanceIndex(t, e),
                e,
                function (t) {
                  return !U("y", r, t.GetBoundingRect());
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
              i,
              o,
              r
            ) {
              (!o || o < 0) && (o = 0);
              var a,
                c = [],
                u = { x: (a = i).x, y: a.y };
              this.ScanChildren(o, e, function (e) {
                var n = e.GetBoundingRect();
                return (
                  !(!r || U(s[t], r, n)) ||
                  (c.push({ child: e, overlap: K(t, i, n), dist: V(t, u, n) }),
                  !1)
                );
              }),
                e == q.BACKWARD && c.reverse(),
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
            Object(i.c)([l.a], t.prototype, "OnFocusIn", null),
            Object(i.c)([l.a], t.prototype, "OnDOMFocus", null),
            Object(i.c)([l.a], t.prototype, "OnDOMBlur", null),
            Object(i.c)([l.a], t.prototype, "OnNavigationEvent", null),
            t
          );
        })(),
        tt = "GamepadInput";
      function et(t) {
        var e = t.split(".", 2),
          n = e[0],
          i = e[1];
        return (
          n &&
          i &&
          (function (t) {
            return "object" == typeof SteamClient && t in SteamClient;
          })(n) &&
          i in SteamClient[n]
        );
      }
      !(function (t) {
        (t[(t.PageUnloading = 0)] = "PageUnloading"),
          (t[(t.Unknown = 1)] = "Unknown"),
          (t[(t.None = 2)] = "None"),
          (t[(t.Basic = 3)] = "Basic"),
          (t[(t.Full = 4)] = "Full");
      })(Q || (Q = {}));
      var nt = (function () {
        function t(t) {
          var e = this;
          (this.m_bIsGamepadInputExternallyControlled = !1),
            (this.m_NavigationController = t),
            et("BrowserView.RegisterForMessageFromParent") &&
            et("BrowserView.PostMessageToParent")
              ? ((this.m_bIsGamepadInputExternallyControlled = !0),
                (this.m_postMessage = new ot()))
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
            var i = n ? n.GetActiveActionDescriptions() : {};
            this.UpdateActionDescriptions(i);
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
            var e = Q.Basic;
            window.bSupportsGamepadUI && (e = Q.Full),
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
          Object(i.c)([l.a], t.prototype, "OnFocusChanged", null),
          Object(i.c)([l.a], t.prototype, "OnMessage", null),
          Object(i.c)([l.a], t.prototype, "PostPageUnloading", null),
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
                { gamepadMessage: tt, args: e },
                "*"
              );
            }),
            (t.prototype.OnMessage = function (t) {
              var e = null == t ? void 0 : t.data;
              if (e && e.gamepadMessage == tt && e.args) {
                var n = JSON.parse(e.args);
                this.m_fnCallback(n);
              }
            }),
            Object(i.c)([l.a], t.prototype, "OnMessage", null),
            t
          );
        })(),
        ot = (function () {
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
              SteamClient.BrowserView.PostMessageToParent(tt, e);
            }),
            (t.prototype.OnMessage = function (t, e) {
              if (t == tt) {
                var n = JSON.parse(e);
                this.m_fnCallback(n);
              }
            }),
            Object(i.c)([l.a], t.prototype, "OnMessage", null),
            t
          );
        })();
      n("SHRt"), a.c;
      var rt = "VirtualKeyboardMessage";
      function at(t) {
        return t && t.type === rt;
      }
      var st = (function () {
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
            t == rt && this.InternalDispatchMessage(JSON.parse(e));
          }),
          (t.prototype.OnMessage = function (t) {
            this.InternalDispatchMessage(t.data);
          }),
          (t.prototype.InternalDispatchMessage = function (t) {
            at(t) && t.message;
          }),
          (t.prototype.SendMessage = function (t) {
            var e = Object(i.a)({ type: "VirtualKeyboardMessage" }, t);
            et("BrowserView.PostMessageToParent")
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
          Object(i.c)([l.a], t.prototype, "OnBrowserViewMessage", null),
          Object(i.c)([l.a], t.prototype, "OnMessage", null),
          t
        );
      })();
      function ct(t) {
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
          i = r()("<div/>", {
            style: "display: none; position: absolute; pointer-events: none; ",
            class: "gpfocusring",
          });
        n.append(i), t.prepend(n);
        var o = function (t) {
          if (t && t.BWantsFocusRing()) {
            var e = t.GetBoundingRect(),
              o = n[0].getBoundingClientRect();
            i.css({
              left: e.x - o.x - 4,
              top: e.y - o.y - 4,
              height: e.height,
              width: e.width,
            }),
              i.show();
          } else i.hide();
        };
        return {
          OnBlur: function () {
            return o(null);
          },
          OnFocus: function (t, e) {
            return o(e);
          },
          OnFocusChange: function (t, e, n) {
            return o(n);
          },
        };
      }
      var ut = new st(),
        lt = !1;
      function ht(t) {
        if (!lt) {
          var e = new W();
          new nt(e).BIsGamepadInputExternallyControlled() ||
            e.RegisterInputSource(t),
            (function (t) {
              r()("html").addClass("gpnav_active");
              var e = r()("body"),
                n = t.NewGamepadNavigationTree("legacy"),
                i = ct(e);
              (n.Root.m_FocusRing = i),
                n.Root.SetProperties({}),
                dt.set(document.body, n.Root),
                vt(document.body, n.Root),
                bt(void 0, !0),
                t.RegisterGamepadNavigationTree(n, !1),
                r()(document.body).on("vgp_onbuttondown", function (e) {
                  t.HandleButtonDownEventAsLogicalEvent(e.originalEvent);
                }),
                new MutationObserver(pt).observe(document.body, {
                  childList: !0,
                  subtree: !0,
                }),
                (o = !0),
                (M = o);
              var o;
            })(e);
        }
        lt = !0;
      }
      function pt(t) {
        for (var e = 0, n = t; e < n.length; e++) {
          var i = n[e],
            o = [],
            a = [];
          if ("childList" === i.type) {
            for (var s = 0; s < i.addedNodes.length; s++) {
              if ((u = i.addedNodes[s]).nodeType === Node.ELEMENT_NODE) {
                var c = u;
                c.parentElement && o.push(c);
              }
            }
            for (s = 0; s < i.removedNodes.length; s++) {
              var u;
              (u = i.removedNodes[s]).nodeType === Node.ELEMENT_NODE &&
                a.push(u);
            }
          }
          o.length && bt(r()(o)), a.length && _t(r()(a));
        }
      }
      var dt = new WeakMap(),
        mt = new WeakMap(),
        gt = [];
      function vt(t, e) {
        if (e) {
          var n = e.GetDepth();
          gt[n] || (gt[n] = []), gt[n].push([t, e]);
        }
        dt.set(t, e);
      }
      function ft(t) {
        return "jquery" in t ? dt.get(t[0]) : dt.get(t);
      }
      function _t(t) {
        t.find("*")
          .addBack()
          .each(function () {
            var t = mt.get(this);
            t && t(), dt.delete(this), mt.delete(this);
          });
      }
      function bt(t, e) {
        void 0 === e && (e = !1);
        performance.now();
        var n = "a,button,input:not(input[type=hidden]),label,[data-panel]";
        r()(n, t)
          .addBack(n)
          .each(function () {
            var t;
            (function (t) {
              return "jquery" in t ? dt.has(t[0]) : dt.has(t);
            })((t = this)) || Nt(t);
          }),
          (function () {
            for (var t = gt.length - 1; t >= 0; t--)
              if (gt[t])
                for (var e = 0, n = gt[t]; e < n.length; e++) {
                  var i = n[e],
                    o = i[0],
                    r = i[1];
                  mt.set(o, r.Tree.RegisterNavigationItem(r, o));
                }
            gt = [];
          })();
      }
      function yt(t) {
        var e = r()(t.Element);
        return (
          e.is(":visible") &&
          ((e.outerWidth() > 0 && e.outerHeight() > 0) ||
            "hidden" !== e.css("overflow"))
        );
      }
      function Ct(t) {
        this.click(), t.stopPropagation();
      }
      function Ot(t) {
        r()(this).find("a")[0].click();
      }
      function Nt(t) {
        var e = r()(t),
          n = At(t),
          o = n.Tree.CreateNode(n, n.m_FocusRing),
          s = e.data("panel") || {};
        if ("A" == t.tagName || "BUTTON" == t.tagName || "LABEL" == t.tagName)
          (s.focusable = !0), (s.clickOnActivate = !0);
        else if ("INPUT" == t.tagName)
          switch (((s.focusable = !0), t.getAttribute("type"))) {
            case "checkbox":
              s.clickOnActivate = !0;
              break;
            case "text":
            case "password":
              s.enableVirtualKeyboard = !0;
          }
        var c = s["flow-children"];
        delete s["flow-children"];
        var u = s.clickOnActivate,
          l = s.maintainX,
          h = s.maintainY,
          p = s.enableVirtualKeyboard,
          d = s.onOKActionDescription,
          m = s.onCancelActionDescription,
          g = s.onSecondaryActionDescription,
          v = s.onOptionsActionDescription,
          f = s.onMenuActionDescription,
          _ = s.actionDescriptionMap,
          b = s.onOKButton,
          y = s.onCancelButton,
          C = s.onSecondaryButton,
          O = s.onOptionsButton,
          A = s.onMenuButton,
          E = s.bFocusRingRoot,
          D = Object(i.f)(s, [
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
        b &&
          d &&
          (function (t, e) {
            N(t, "vgp_onok", R(e));
          })(e[0], Function("event", b)),
          y &&
            m &&
            (function (t, e) {
              N(t, "vgp_oncancel", R(e));
            })(e[0], Function("event", y)),
          C &&
            g &&
            (function (t, e) {
              N(t, "vgp_onsecondaryaction", R(e));
            })(e[0], Function("event", C)),
          O &&
            v &&
            (function (t, e) {
              N(t, "vgp_onoptions", R(e));
            })(e[0], Function("event", O)),
          A &&
            f &&
            (function (t, e) {
              N(t, "vgp_onmenu", R(e));
            })(e[0], Function("event", A));
        var I = c
          ? (function (t) {
              switch (t) {
                case "column":
                  return z.COLUMN;
                case "column-reverse":
                  return z.COLUMN_REVERSE;
                case "row":
                  return z.ROW;
                case "row-reverse":
                  return z.ROW_REVERSE;
                case "grid":
                  return z.GRID;
                default:
                  return z.NONE;
              }
            })(c)
          : z.NONE;
        I != z.NONE && (D.layout = I),
          l
            ? (D.navEntryPreferPosition = X.MAINTAIN_X)
            : h && (D.navEntryPreferPosition = X.MAINTAIN_Y),
          u &&
            (!1 !== D.focusable && (D.focusable = !0),
            e.on("vgp_onok", "firstChild" === u ? Ot : Ct)),
          p &&
            (e.on("vgp_onok.vkbindings", function () {
              return ut.ShowVirtualKeyboard();
            }),
            e.on("click.vkbindings", function () {
              return ut.ShowVirtualKeyboard();
            }),
            e.on("blur.vkbindings", function () {
              return ut.HideVirtualKeyboard();
            })),
          D.focusable && void 0 === e.attr("tabIndex") && e.attr("tabIndex", 0),
          D.focusable &&
            o.FocusCallbackList.Register(function (e) {
              return (function (t, e) {
                e ? r()(t).addClass("gpfocus") : r()(t).removeClass("gpfocus");
              })(t, e);
            }),
          E &&
            ((o.m_FocusRing = ct(e)),
            "static" == e.css("position") && e.css("position", "relative"));
        var S = (function (t) {
            var e = t.onOKActionDescription,
              n = t.onCancelActionDescription,
              o = t.onSecondaryActionDescription,
              r = t.onOptionsActionDescription,
              s = t.onMenuActionDescription,
              c = t.actionDescriptionMap,
              u = Object(i.a)({}, c);
            return (
              void 0 !== e && (u[a.a.OK] = e),
              void 0 !== n && (u[a.a.CANCEL] = n),
              void 0 !== o && (u[a.a.SECONDARY] = o),
              void 0 !== r && (u[a.a.OPTIONS] = r),
              void 0 !== s && (u[a.a.START] = s),
              u
            );
          })({
            onOKActionDescription: d,
            onCancelActionDescription: m,
            onSecondaryActionDescription: g,
            onOptionsActionDescription: v,
            onMenuActionDescription: f,
            actionDescriptionMap: _,
          }),
          F = Object(i.a)({ fnCanTakeFocus: yt, actionDescriptionMap: S }, D);
        return o.SetProperties(F), vt(t, o), o;
      }
      function At(t) {
        var e = t.parentElement;
        if (!e) return console.error("no parent"), null;
        var n = ft(e);
        return (
          n ||
            !1 === n ||
            (n = (function (t) {
              var e = !1;
              switch (t.tagName) {
                case "A":
                case "INPUT":
                  e = !0;
                  break;
                case "DIV":
                  if (Y(t) != z.COLUMN) e = !0;
                  else {
                    var n = Y(t.parentElement);
                    (n != z.ROW && n != z.ROW_REVERSE) || (e = !0);
                  }
              }
              var i = !1;
              return e ? (i = Nt(t)) : vt(t, !1), i;
            })(e)),
          n || At(e)
        );
      }
      Object.assign(window, {
        InstrumentFocusElements: bt,
        ForceUpdateFocusElements: function (t) {
          _t(r()(t)), bt(r()(t));
        },
        GPNavFocusChild: function (t) {
          var e = ft(t[0]);
          return e || (e = At(t[0])), !!e && e.BTakeFocus(g.APPLICATION);
        },
      });
    },
  },
]);

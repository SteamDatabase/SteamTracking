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
          return qt;
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
      function m(t) {
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
      }
      var f = { x: "y", y: "x" };
      var v,
        g = n("r64O"),
        _ = n("XxJJ"),
        b = n("qiKp"),
        y = (function (t) {
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
        C = [
          "ActionDescription",
          "Backstack",
          "BrowserBackstack",
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
          "LaunchStates",
        ];
      !(function (t) {
        (t[(t.Debug = 0)] = "Debug"),
          (t[(t.Info = 1)] = "Info"),
          (t[(t.Warning = 2)] = "Warning"),
          (t[(t.Error = 3)] = "Error");
      })(v || (v = {}));
      var N = (function () {
          function t(t, e) {
            (this.m_fnIdGenerator = null),
              (this.m_sName = t),
              (this.m_fnIdGenerator = e),
              O.Get().RegisterLogName(t);
          }
          return (
            (t.prototype.Debug = function () {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
              this.Log.apply(this, Object(r.g)([v.Debug], t));
            }),
            (t.prototype.Info = function () {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
              this.Log.apply(this, Object(r.g)([v.Info], t));
            }),
            (t.prototype.Warning = function () {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
              this.Log.apply(this, Object(r.g)([v.Warning], t));
            }),
            (t.prototype.Error = function () {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
              this.Log.apply(this, Object(r.g)([v.Error], t));
            }),
            (t.prototype.Assert = function (t) {
              for (var e = [], n = 1; n < arguments.length; n++)
                e[n - 1] = arguments[n];
              t ||
                this.Log.apply(
                  this,
                  Object(r.g)([v.Error, "Assertion failed:"], e)
                );
            }),
            (t.prototype.Log = function (t) {
              for (var e, n, o = [], i = 1; i < arguments.length; i++)
                o[i - 1] = arguments[i];
              if (t != v.Debug || O.Get().IsDebugLogEnabled(this.m_sName)) {
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
                var c = O.Get().IncludeBacktraceInLog;
                T.apply(void 0, Object(r.g)([t, c, a, this.m_sName], o));
              }
            }),
            Object(r.c)([_.a], t.prototype, "Debug", null),
            Object(r.c)([_.a], t.prototype, "Info", null),
            Object(r.c)([_.a], t.prototype, "Warning", null),
            Object(r.c)([_.a], t.prototype, "Error", null),
            Object(r.c)([_.a], t.prototype, "Assert", null),
            t
          );
        })(),
        O = (function () {
          function t() {
            (this.m_Storage = null),
              (this.m_rgLogNames = null),
              (this.m_setEnabledDebugLogs = new Set()),
              (this.m_bIncludeBacktraceInLog = !1),
              (this.m_SettingsChangedCallback = new b.a()),
              (this.m_bLoading = !1),
              (this.m_Storage = new y()),
              (this.m_rgLogNames = C.slice()),
              this.LoadSettings();
          }
          return (
            (t.prototype.LogAsLogManager = function () {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
              T.apply(
                void 0,
                Object(r.g)(
                  [
                    v.Info,
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
                        (this.m_setEnabledDebugLogs = new Set(t ? C : [])),
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
      function w(t) {
        return (299 * t[0] + 587 * t[1] + 114 * t[2]) / 1e3 >= 128;
      }
      function A(t) {
        switch (t) {
          case v.Debug:
            return String.fromCodePoint(128027);
          case v.Info:
            return String.fromCodePoint(8505);
          case v.Warning:
            return String.fromCodePoint(9888);
          case v.Error:
            return String.fromCodePoint(128165);
        }
      }
      function T(t, e, n, o) {
        for (var i = [], a = 4; a < arguments.length; a++)
          i[a - 4] = arguments[a];
        var s = F(o),
          c = s.map(function (t, e) {
            return Math.max(
              0,
              Math.min(255, 255 * (0.8 * (t / 255 - 0.5) + 0.15))
            );
          }),
          u = w(c),
          l = n;
        e && (l = A(t) + " " + l);
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
            case v.Debug:
            case v.Info:
              console.log.apply(console, h);
              break;
            case v.Warning:
              console.warn.apply(console, h);
              break;
            case v.Error:
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
              (o && Object(g.a)(o == e.NavKey, "navkey mismatch"),
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
      var R = (function (t) {
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
        D = n("Kw0F");
      function I(t) {
        return null != t && void 0 !== t.focus;
      }
      function E(t) {
        var e = void 0;
        return t && (e = t.ownerDocument.defaultView), e;
      }
      function P(t, e) {
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
      function L(t, e) {
        if (!("ownerDocument" in t)) return !0;
        var n = t.ownerDocument.defaultView.getComputedStyle(t),
          o = "x" === e ? n.overflowX : n.overflowY;
        return "auto" === o || "scroll" === o;
      }
      var M = new N("FocusNavigation").Debug,
        B = new N("GamepadEvents").Debug,
        G = (function () {
          function t(t, e) {
            (this.m_onActivateCallbacks = new b.a()),
              (this.m_onDeactivateCallbacks = new b.a()),
              (this.m_Controller = t),
              (this.m_ID = e),
              (this.m_Root = new Ft(this, null, null)),
              this.m_Root.SetProperties({ layout: gt.COLUMN }),
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
              return new Ft(this, t, e);
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
            (t.prototype.Activate = function (t) {
              void 0 === t && (t = !1),
                this.m_Controller.OnGamepadNavigationTreeActivated(this, t);
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
              var t = this.m_Root.Element;
              (t.__nav_tree = this),
                t.__nav_wrapper && t.__nav_wrapper.BindTree(this),
                (this.m_bIsMounted = !0);
            }),
            (t.prototype.SetParentEmbeddedNavTree = function (t) {
              this.m_ParentEmbeddedNavTree = t;
            }),
            (t.prototype.GetParentEmbeddedNavTree = function () {
              return this.m_ParentEmbeddedNavTree;
            }),
            (t.prototype.SetOnUnhandledButtonCallback = function (t) {
              this.m_onUnhandledButton = t;
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
                B(
                  "Logical gamepad Event fired: " +
                    c.a[t.detail.button] +
                    ", had logical event: " +
                    o +
                    ", was handled: " +
                    !n
                ),
                n &&
                  this.m_onUnhandledButton &&
                  (n = this.m_onUnhandledButton(t)),
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
                M(
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
                e && e.SetDOMFocusAndScroll(t, o),
                  o &&
                    (d(o.Element, "vgp_onblur", r),
                    !o.m_FocusRing ||
                      (e && o.m_FocusRing == e.m_FocusRing) ||
                      o.m_FocusRing.OnBlur(t, o, e)),
                  e &&
                    (d(e.Element, "vgp_onfocus", r),
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
      var k = new N("FocusNavigation").Debug,
        W = (new N("GamepadEvents").Debug, "focus-nav-show-debug-focus-ring");
      var j = (function () {
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
              "shown" == sessionStorage.getItem(W)
            );
        }
        return (
          (t.prototype.SetShowDebugFocusRing = function (t) {
            this.m_bShowDebugFocusRing.Set(t),
              (function (t) {
                sessionStorage.setItem(W, t ? "shown" : void 0);
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
              k(
                "Ignoring button press - gamepad input is suppressed by parent window"
              );
            else {
              this.ChangeNavigationSource(e, n);
              var r = this.GetEventTarget(t, !0);
              k(
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
                e.TransferFocus(i.BROWSER, o);
            }
          }),
          (t.prototype.NewGamepadNavigationTree = function (t) {
            return new G(this, t);
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
            D.a(this.m_rgGamepadNavigationTrees, t),
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
          (t.prototype.OnGamepadNavigationTreeActivated = function (t, e) {
            void 0 === e && (e = !1), this.SetActiveNavTree(t, e);
          }),
          (t.prototype.OnGamepadNavigationTreeFocused = function (t, e, n) {
            void 0 === n && (n = !1),
              t != this.m_LastActiveFocusNavTree &&
                t != this.m_LastActiveNavTree &&
                (this.m_LastActiveFocusNavTree.GetParentEmbeddedNavTree() ==
                  t ||
                t.GetParentEmbeddedNavTree() == this.m_LastActiveFocusNavTree
                  ? (k(
                      "There was a focus event in " +
                        t.id +
                        ", allowing focus transfer to activate nav tree due to parent embedded relationship"
                    ),
                    t.Activate())
                  : k(
                      "There was a focus event in " +
                        t.id +
                        ", but the active nav tree is " +
                        this.m_LastActiveFocusNavTree.id +
                        " so it is being ignored.  Source: " +
                        i[e] +
                        "."
                    ));
          }),
          (t.prototype.BlurNavTree = function (t) {
            this.m_LastActiveNavTree == t && this.SetActiveNavTree(null, !0),
              D.a(this.m_rgGamepadNavigationTrees, t),
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
              n && D.a(this.m_rgGamepadNavigationTrees, n),
                t ||
                  (this.m_rgGamepadNavigationTrees.length &&
                    (t = this.m_rgGamepadNavigationTrees[
                      this.m_rgGamepadNavigationTrees.length - 1
                    ]));
              var o = this.m_LastActiveFocusNavTree == t;
              t && D.a(this.m_rgGamepadNavigationTrees, t),
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
              Object(g.a)(
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
          Object(r.c)([_.a], t.prototype, "OnButtonDown", null),
          Object(r.c)([_.a], t.prototype, "OnButtonUp", null),
          Object(r.c)([_.a], t.prototype, "OnNavigationTypeChange", null),
          t
        );
      })();
      var x = (function () {
        function t(t) {
          (this.m_node = t), (this.m_History = new R(t));
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
      function U(t, e, n) {
        return "x" == t
          ? e.x + e.width > n.x && e.x < n.x + n.width
          : "y" == t
          ? e.y + e.height > n.y && e.y < n.y + n.height
          : (Object(g.a)(!1, "Invalid axis " + t), !1);
      }
      function H(t, e, n) {
        var o;
        return (
          "x" == t
            ? (o = Math.min(e.x + e.width, n.x + n.width) - Math.max(e.x, n.x))
            : "y" == t
            ? (o =
                Math.min(e.y + e.height, n.y + n.height) - Math.max(e.y, n.y))
            : (Object(g.a)(!1, "Invalid axis " + t), (o = 0)),
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
              : void Object(g.a)(!1, "Invalid axis " + t);
          })(t, n);
        return o < i.min ? i.min - o : o > i.max ? o - i.max : 0;
      }
      function K(t) {
        if (!t) return gt.NONE;
        var e = t.ownerDocument.defaultView,
          n = e.getComputedStyle(t);
        if ("flex" == n.display)
          switch (n.flexDirection) {
            case "row":
              return "wrap" == n.flexWrap ? gt.GRID : gt.ROW;
            case "row-reverse":
              return gt.ROW_REVERSE;
            case "column":
              return gt.COLUMN;
            case "column-reverse":
              return gt.COLUMN_REVERSE;
          }
        else {
          if ("grid" == n.display) return gt.GRID;
          if (t.childElementCount > 0) {
            var o = e.getComputedStyle(t.firstElementChild);
            if ("left" === o.float) return gt.ROW;
            if ("right" === o.float) return gt.ROW_REVERSE;
            if ("inline" === o.display || "inline-block" === o.display)
              return gt.GRID;
          }
        }
        return gt.COLUMN;
      }
      function Y(t) {
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
      function X(t, e, n) {
        var o,
          i = [],
          r = t.GetChildren(),
          a = r[0],
          s = (r[1], t.GetActiveChild()),
          c = s ? s.Element.getBoundingClientRect() : null;
        if (s) {
          if (
            (m = q(s, e, n)) &&
            !m.offScreen &&
            (o = z(s, m, m.overlap, n)) &&
            !o.visibility.offScreen
          )
            return o;
          m && i.push({ child: s, visibility: m });
        }
        for (var u, l = n || c, h = 0; h < a.length; h++) {
          if ((v = a[h]) != s)
            (m = q(v, e, l)) && i.push({ child: v, visibility: m });
        }
        i.sort(J);
        for (var d = 0, p = i; d < p.length; d++) {
          var m,
            f = p[d],
            v = f.child;
          if ((m = f.visibility).offScreen && u) {
            if (!u.visibility.offScreen) break;
            if (m.distance > u.visibility.distance) break;
          }
          var g = v == s ? o : z(v, m, m.overlap || e, l);
          g && (!u || J(g, u) < 0) && (u = g);
        }
        return u;
      }
      function z(t, e, n, o) {
        switch (t.GetFocusable()) {
          case "none":
            return null;
          case "children":
            return X(t, e.overlap || n, o);
          case "self":
            return { child: t, visibility: e };
        }
      }
      function J(t, e) {
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
      function q(t, e, n) {
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
      function Z(t, e, n) {
        return null == t || isNaN(t) ? t : Math.max(e, Math.min(n, t));
      }
      var Q = (function () {
          function t(t, e) {
            (this.m_bActive = !1),
              (this.m_fnBoundAnimationFunc = void 0),
              (this.m_window = t),
              (this.m_options = Object(r.a)({ timing: "sine" }, e));
          }
          return (
            (t.prototype.Start = function () {
              var t;
              switch (
                ((this.m_msStart = performance.now()),
                (this.m_msEnd = this.m_msStart + this.m_options.msDuration),
                this.m_options.timing)
              ) {
                case "linear":
                  t = function (t) {
                    return t;
                  };
                  break;
                case "cubic-in-out":
                  t = function (t) {
                    return t < 0.5
                      ? 4 * t * t * t
                      : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
                  };
                  break;
                case "sine":
                default:
                  t = function (t) {
                    return 0.5 - Math.cos(t * Math.PI) / 2;
                  };
              }
              (this.m_bActive = !0),
                (this.m_fnBoundAnimationFunc = this.OnInterval.bind(this, t)),
                this.m_window.requestAnimationFrame(
                  this.m_fnBoundAnimationFunc
                );
            }),
            (t.prototype.BIsActive = function () {
              return this.m_bActive;
            }),
            (t.prototype.End = function () {
              if (this.m_bActive) {
                try {
                  this.Update(1);
                } catch (t) {}
                this.ClearInterval(), this.FireOnComplete();
              }
            }),
            (t.prototype.FireOnComplete = function () {
              this.m_options.onComplete && this.m_options.onComplete();
            }),
            (t.prototype.Cancel = function () {
              this.m_bActive = !1;
            }),
            (t.prototype.OnInterval = function (t) {
              if (this.m_bActive) {
                var e = performance.now() - this.m_msStart;
                if (e >= this.m_options.msDuration) this.End();
                else {
                  var n = e / this.m_options.msDuration;
                  try {
                    this.Update(t(n));
                  } catch (t) {}
                  this.m_window.requestAnimationFrame(
                    this.m_fnBoundAnimationFunc
                  );
                }
              }
            }),
            (t.prototype.ClearInterval = function () {
              this.m_bActive = !1;
            }),
            t
          );
        })(),
        $ = (function (t) {
          function e(e, n, o) {
            var i = t.call(this, e, n) || this;
            return (i.m_fnCallback = o), i;
          }
          return (
            Object(r.d)(e, t),
            (e.prototype.Update = function (t) {
              this.m_fnCallback(t);
            }),
            e
          );
        })(Q),
        tt = (function (t) {
          function e(e, n, o) {
            var i = t.call(this, "ownerDocument" in e ? E(e) : e, o) || this;
            return (i.m_props = {}), (i.m_object = e), (i.m_propTargets = n), i;
          }
          return (
            Object(r.d)(e, t),
            (e.prototype.Start = function () {
              for (var e in ((this.m_props = {}), this.m_propTargets)) {
                var n = parseFloat(this.m_object[e]) || 0,
                  o = this.m_propTargets[e];
                n != o && (this.m_props[e] = { start: n, end: o });
              }
              t.prototype.Start.call(this);
            }),
            (e.prototype.Update = function (t) {
              for (var e in this.m_props) {
                var n = this.m_props[e],
                  o = n.start + (n.end - n.start) * t;
                this.m_object[e] = o;
              }
            }),
            e
          );
        })(Q),
        et = new N("ScrollSnap").Debug,
        nt = !1;
      var ot;
      function it(t) {
        if (!t) return { left: 0, top: 0, right: 0, bottom: 0 };
        if (!("ownerDocument" in t))
          return {
            left: 0,
            right: t.innerWidth,
            top: 0,
            bottom: t.innerHeight,
          };
        for (var e = 0, n = 0, o = t; o; ) {
          if (((e += o.offsetTop), (n += o.offsetLeft), "ownerDocument" in o))
            if ("fixed" === window.getComputedStyle(o).position) break;
          o = o.offsetParent;
        }
        for (o = null == t ? void 0 : t.parentElement; o; ) {
          var i = vt(o);
          if (((e -= i.scrollTop), (n -= i.scrollLeft), "ownerDocument" in o))
            if ("fixed" === window.getComputedStyle(o).position) break;
          o = o.parentElement;
        }
        return {
          left: n,
          top: e,
          right: n + t.offsetWidth,
          bottom: e + t.offsetHeight,
        };
      }
      function rt(t, e) {
        return "x" == e
          ? [t.left, t.right, t.right - t.left]
          : [t.top, t.bottom, t.bottom - t.top];
      }
      function at(t, e, n, o) {
        var i = rt(t, o),
          r = i[0],
          a = i[1],
          s = i[2],
          c = rt(e, o),
          u = c[0],
          l = c[1],
          h = c[2],
          d = rt(n, o),
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
      function st(t) {
        return "auto" == t
          ? 0
          : t.endsWith("px")
          ? parseInt(t)
          : (console.log("Unsupported length", t), 0);
      }
      function ct(t) {
        if (!("ownerDocument" in t))
          return { left: 0, right: 0, top: 0, bottom: 0 };
        var e = t.ownerDocument.defaultView.getComputedStyle(t);
        return {
          left: st(e.scrollMarginLeft),
          right: st(e.scrollMarginRight),
          top: st(e.scrollMarginTop),
          bottom: st(e.scrollMarginBottom),
        };
      }
      function ut(t, e) {
        var n = (function (t) {
          var e;
          return {
            left: st(
              (e =
                "ownerDocument" in t
                  ? t.ownerDocument.defaultView.getComputedStyle(t)
                  : t.document.defaultView.getComputedStyle(
                      window.document.documentElement
                    )).scrollPaddingLeft
            ),
            right: st(e.scrollPaddingRight),
            top: st(e.scrollPaddingTop),
            bottom: st(e.scrollPaddingBottom),
          };
        })(t);
        return {
          left: Math.max(0, e.left + n.left),
          right: Math.max(0, e.right - n.right),
          top: Math.max(0, e.top + n.top),
          bottom: Math.max(0, e.bottom - n.bottom),
        };
      }
      function lt(t) {
        return t > -1 && t < 1;
      }
      function ht(t, e, n, o, i) {
        et(
          "----------------------------------------------------------------------------------"
        ),
          et("Scrolling Into View:", e);
        for (
          var r = [], a = e, s = it(e), c = null != i ? i : Number.MAX_VALUE;
          a;

        ) {
          var u = P(a);
          u || (u = E(a));
          var l = ct(a),
            h = ut(u, it(u)),
            d = ft(u),
            p = { element: u, left: 0, top: 0 };
          if (
            (et(
              "Checking scroll div",
              u,
              "scroll y:" +
                d.scrollTop +
                " of " +
                d.MaxScrollTop() +
                ", x:" +
                d.scrollLeft +
                " of " +
                d.MaxScrollLeft() +
                ", adjusted =>",
              h,
              "target => ",
              s
            ),
            (o && "y" != o) ||
              !L(u, "y") ||
              ((p.top = at(s, h, l, "y")),
              (p.top = Z(p.top, -d.scrollTop, d.MaxScrollTop() - d.scrollTop)),
              i &&
                ((p.top = Math.min(c, Math.abs(p.top)) * (p.top < 0 ? -1 : 1)),
                (c -= Math.abs(p.top))),
              et("- checked y: " + p.top)),
            (o && "x" != o) ||
              !L(u, "x") ||
              ((p.left = at(s, h, l, "x")),
              (p.left = Z(
                p.left,
                -d.scrollLeft,
                d.MaxScrollLeft() - d.scrollLeft
              )),
              i &&
                ((p.left =
                  Math.min(c, Math.abs(p.left)) * (p.left < 0 ? -1 : 1)),
                (c -= Math.abs(p.left))),
              et("- checked x: " + p.left)),
            r.push(p),
            i && !c)
          )
            break;
          if (!("ownerDocument" in u)) break;
          (a = u),
            (s = {
              top: s.top - p.top,
              right: s.right - p.left,
              bottom: s.bottom - p.top,
              left: s.left - p.left,
            });
        }
        for (var m = !1, f = 0, v = r; f < v.length; f++) {
          if (!lt((p = v[f]).left) || !lt(p.top)) {
            var g = (d = ft(p.element)).scrollTop + p.top,
              _ = d.scrollLeft + p.left;
            (_ = Z(_, 0, d.MaxScrollLeft())),
              (g = Z(g, 0, d.MaxScrollTop())),
              (lt(d.scrollLeft - _) && lt(d.scrollTop - g)) ||
                (d.scrollTo({ left: _, top: g, behavior: n }),
                m || (et("Scrolling:"), (m = !0)),
                et(
                  "- " +
                    p.top +
                    "," +
                    p.left +
                    " => " +
                    g +
                    ", " +
                    _ +
                    ", behavior: " +
                    n,
                  p.element
                ));
          }
        }
      }
      function dt(t, e) {
        var n = e.top,
          o = e.left,
          i = e.behavior,
          r = ft(t);
        r.scrollTo({
          top: r.scrollTop + (null != n ? n : 0),
          left: r.scrollLeft + (null != o ? o : 0),
          behavior: i,
        });
      }
      var pt = (function () {
          function t(t) {
            var e = this;
            (this.m_scrollTopTarget = void 0),
              (this.m_scrollLeftTarget = void 0),
              (this.m_animation = void 0),
              "ownerDocument" in t
                ? ((this.m_element = t),
                  (this.m_fnOriginalScrollTo = t.scrollTo),
                  (this.m_element.scrollTo = function (t, n) {
                    "number" == typeof t
                      ? e.scrollTo({ left: t, top: n })
                      : e.scrollTo(t);
                  }))
                : ((this.m_window = t),
                  (this.m_element = t.document.documentElement));
          }
          return (
            (t.prototype.ResetScrollState = function () {
              (this.m_scrollTopTarget = void 0),
                (this.m_scrollLeftTarget = void 0),
                this.m_window || (this.m_element.style.scrollSnapType = "");
            }),
            (t.prototype.scrollTo = function (t) {
              var e,
                n,
                o = this;
              if ("auto" == t.behavior)
                this.m_animation &&
                  (this.m_animation.Cancel(), (this.m_animation = void 0)),
                  this.m_window
                    ? this.m_window.scrollTo(t)
                    : this.m_fnOriginalScrollTo.apply(this.m_element, [t]),
                  this.ResetScrollState();
              else {
                var i =
                    null !== (e = t.left) && void 0 !== e ? e : this.scrollLeft,
                  r = null !== (n = t.top) && void 0 !== n ? n : this.scrollTop,
                  a = "sine";
                if (
                  (this.m_animation &&
                    (this.m_animation.Cancel(), (a = "linear")),
                  Math.max(
                    Math.abs(this.currentScrollTop - r),
                    Math.abs(this.currentScrollLeft - i)
                  ) > 0)
                ) {
                  var s = {
                    msDuration: 200,
                    timing: a,
                    onComplete: this.ResetScrollState,
                  };
                  if (this.m_window) {
                    var c = this.currentScrollLeft,
                      u = this.currentScrollTop;
                    this.m_animation = new $(this.m_window, s, function (t) {
                      o.m_window.scrollTo({
                        left: c + (i - c) * t,
                        top: u + (r - u) * t,
                        behavior: "auto",
                      });
                    });
                  } else
                    (this.m_element.style.scrollSnapType = "initial"),
                      (this.m_animation = new tt(
                        this.m_element,
                        { scrollTop: r, scrollLeft: i },
                        s
                      ));
                  (this.m_scrollLeftTarget = i),
                    (this.m_scrollTopTarget = r),
                    this.m_animation.Start();
                }
              }
            }),
            Object.defineProperty(t.prototype, "clientWidth", {
              get: function () {
                return this.m_window
                  ? this.m_window.innerWidth
                  : this.m_element.clientWidth;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "clientHeight", {
              get: function () {
                return this.m_window
                  ? this.m_window.innerHeight
                  : this.m_element.clientHeight;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "currentScrollLeft", {
              get: function () {
                return this.m_window
                  ? this.m_window.scrollX
                  : this.m_element.scrollLeft;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "currentScrollTop", {
              get: function () {
                return this.m_window
                  ? this.m_window.scrollY
                  : this.m_element.scrollTop;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "scrollLeft", {
              get: function () {
                var t;
                return null !== (t = this.m_scrollLeftTarget) && void 0 !== t
                  ? t
                  : this.currentScrollLeft;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "scrollTop", {
              get: function () {
                var t;
                return null !== (t = this.m_scrollTopTarget) && void 0 !== t
                  ? t
                  : this.currentScrollTop;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "scrollWidth", {
              get: function () {
                return this.m_element.scrollWidth;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "scrollHeight", {
              get: function () {
                return this.m_element.scrollHeight;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.prototype.MaxScrollTop = function () {
              return this.scrollHeight - this.clientHeight;
            }),
            (t.prototype.MaxScrollLeft = function () {
              return this.scrollWidth - this.clientWidth;
            }),
            Object(r.c)([_.a], t.prototype, "ResetScrollState", null),
            t
          );
        })(),
        mt = new WeakMap();
      function ft(t) {
        var e = mt.get(t);
        return e || ((e = new pt(t)), mt.set(t, e)), e;
      }
      function vt(t) {
        var e = mt.get(t);
        return e
          ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
          : { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop };
      }
      var gt,
        _t,
        bt,
        yt,
        Ct,
        Nt = new N("FocusNavigationMovement").Debug;
      !(function (t) {
        (t[(t.NONE = 0)] = "NONE"),
          (t[(t.COLUMN = 1)] = "COLUMN"),
          (t[(t.ROW = 2)] = "ROW"),
          (t[(t.COLUMN_REVERSE = 3)] = "COLUMN_REVERSE"),
          (t[(t.ROW_REVERSE = 4)] = "ROW_REVERSE"),
          (t[(t.GRID = 5)] = "GRID"),
          (t[(t.GEOMETRIC = 6)] = "GEOMETRIC");
      })(gt || (gt = {})),
        (function (t) {
          (t[(t.FIRST = 0)] = "FIRST"),
            (t[(t.LAST = 1)] = "LAST"),
            (t[(t.MAINTAIN_X = 2)] = "MAINTAIN_X"),
            (t[(t.MAINTAIN_Y = 3)] = "MAINTAIN_Y"),
            (t[(t.PREFERRED_CHILD = 4)] = "PREFERRED_CHILD");
        })(_t || (_t = {})),
        (function (t) {
          (t[(t.Standard = 0)] = "Standard"),
            (t[(t.NoTransform = 1)] = "NoTransform"),
            (t[(t.NoTransformSparseContent = 2)] = "NoTransformSparseContent");
        })(bt || (bt = {})),
        (function (t) {
          (t[(t.LAZY = 0)] = "LAZY"),
            (t[(t.START = 1)] = "START"),
            (t[(t.CENTER = 2)] = "CENTER"),
            (t[(t.END = 3)] = "END"),
            (t[(t.NEAREST = 4)] = "NEAREST"),
            (t[(t.NONE = 5)] = "NONE");
        })(yt || (yt = {})),
        (function (t) {
          (t[(t.INVALID = 0)] = "INVALID"),
            (t[(t.FORWARD = 1)] = "FORWARD"),
            (t[(t.BACKWARD = 2)] = "BACKWARD");
        })(Ct || (Ct = {}));
      var Ot,
        Ft = (function () {
          function t(t, e, n) {
            (this.m_rgChildren = []),
              (this.m_iActiveChild = -1),
              (this.m_bChildrenSorted = !1),
              (this.m_bAutoFocusChild = !1),
              (this.m_bMounted = !1),
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
              return new x(this);
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
                var t, e;
                return (
                  null === (t = this.m_Properties) || void 0 === t
                    ? void 0
                    : t.navKey
                )
                  ? this.m_Properties.navKey
                  : (
                      null === (e = this.m_element) || void 0 === e
                        ? void 0
                        : e.id
                    )
                  ? this.m_element.id
                  : void 0;
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
                i,
                r =
                  ((o =
                    null === (e = this.m_Properties) || void 0 === e
                      ? void 0
                      : e.actionDescriptionMap),
                  (i = null == t ? void 0 : t.actionDescriptionMap),
                  !(null == o || null == i
                    ? o === i
                    : "object" == typeof o &&
                      "object" == typeof i &&
                      Object.keys(o).length === Object.keys(i).length &&
                      Object.keys(o).every(function (t) {
                        return i.hasOwnProperty(t) && o[t] === i[t];
                      }))),
                a =
                  null === (n = this.m_Properties) || void 0 === n
                    ? void 0
                    : n.retainFocus;
              (this.m_Properties = t || {}),
                r && this.m_ActionDescriptionsChangedCallbackList.Dispatch(),
                this.m_Properties.retainFocus && !a
                  ? this.PropagateRetainFocusParentToChildren(this)
                  : !this.m_Properties.retainFocus &&
                    a &&
                    this.PropagateRetainFocusParentToChildren(
                      this.m_RetainFocusParent
                    ),
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
              var e;
              this.m_rgChildren.push(t),
                (this.m_bChildrenSorted = !1),
                this.m_element && this.RegisterDOMEvents(),
                (
                  null === (e = this.m_Properties) || void 0 === e
                    ? void 0
                    : e.retainFocus
                )
                  ? t.SetRetainFocusParent(this)
                  : this.m_RetainFocusParent &&
                    t.SetRetainFocusParent(this.m_RetainFocusParent);
            }),
            (t.prototype.OnMount = function (t) {
              (this.m_element = t),
                this.m_Parent
                  ? this.m_Parent.AddChild(this)
                  : Object(g.a)(
                      this == this.m_Tree.Root,
                      "Only root should have no parent"
                    ),
                (this.m_bMounted = !0),
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
                  Object(g.a)(
                    this.m_bFocusWithin,
                    "Child has focus, we should be m_bFocusWithin"
                  ));
              }
            }),
            (t.prototype.DEV_SetDebugPropsOnElement = function () {}),
            (t.prototype.OnUnmount = function () {
              var t;
              (null === (t = this.m_Properties) || void 0 === t
                ? void 0
                : t.retainFocus) &&
                this.PropagateRetainFocusParentToChildren(
                  this.m_RetainFocusParent
                ),
                (this.m_bMounted = !1),
                this.m_bFocused &&
                  (Nt(
                    "The focused node is unmounting, " +
                      (this.m_RetainFocusParent
                        ? "will transfer to retain focus ancestor"
                        : "will blur") +
                      "."
                  ),
                  this.m_RetainFocusParent
                    ? this.m_RetainFocusParent.OnFocusedDecendantRemoved(this)
                    : this.m_Tree.TransferFocus(i.APPLICATION, null)),
                this.UnregisterDOMEvents(),
                this.m_Parent
                  ? this.m_Parent.RemoveChild(this)
                  : Object(g.a)(
                      this == this.m_Tree.Root,
                      "Only root should have no parent"
                    );
            }),
            (t.prototype.RegisterDOMEvents = function () {
              var t = this;
              !this.m_rgNavigationHandlers.length &&
                (this.m_rgChildren.length >= 2 ||
                  this.m_Properties.layout != gt.NONE ||
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
              Object(g.a)(-1 !== e, "Child was not found to remove"),
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
              return this.m_bMounted
                ? i && !i(this)
                  ? "none"
                  : e || (n && (o || 0 == this.m_rgChildren.length))
                  ? "self"
                  : !o && this.m_rgChildren.length
                  ? "children"
                  : "none"
                : "none";
            }),
            (t.prototype.BTakeFocus = function (t, e) {
              var n = this.FindFocusableNode(e);
              return !!n && (this.m_Tree.TransferFocus(t, n, Y(e)), !0);
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
              return !!n && (this.m_Tree.TransferFocus(t, n, Y(e)), !0);
            }),
            (t.prototype.FindFocusableDescendant = function (t) {
              var e = Y(t),
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
                  (a != gt.ROW_REVERSE &&
                    a != gt.COLUMN_REVERSE &&
                    i != _t.LAST) ||
                    (r = this.m_rgChildren.length - 1);
                }
                var s = void 0;
                if ((i != _t.MAINTAIN_X && i != _t.MAINTAIN_Y) || !e)
                  if (i == _t.PREFERRED_CHILD)
                    for (var c = 0, u = this.m_rgChildren; c < u.length; c++) {
                      var l = u[c];
                      if (
                        (s = l.BWantsPreferredFocus() && l.FindFocusableNode(t))
                      )
                        return s;
                    }
                  else
                    i == _t.LAST &&
                      (s = this.FindNextFocusableChildInDirection(
                        r + 1,
                        Ct.BACKWARD,
                        t
                      ));
                else {
                  var h,
                    d = i == _t.MAINTAIN_X ? "x" : "y";
                  d == f[e] &&
                    (h = this.m_Tree.GetLastFocusedMovementRect(f[e])),
                    Nt(
                      "Taking focus while preserving " +
                        _t[i] +
                        " preserved: " +
                        d +
                        " movement: " +
                        e +
                        ", node:",
                      h
                    );
                  var p = this.ComputeRelativeDirection(t, gt.GRID);
                  if (h) {
                    var m = p == Ct.BACKWARD ? this.m_rgChildren.length - 1 : 0;
                    s = this.FindClosestChildInNextAxiallyAlignedSet(
                      d,
                      p,
                      t,
                      h,
                      m,
                      this.m_rgChildren[m].GetBoundingRect()
                    );
                  } else if (d != f[e]) {
                    m = p == Ct.BACKWARD ? this.m_rgChildren.length : -1;
                    s = this.FindNextFocusableChildInDirection(m, p, t);
                  }
                }
                return (
                  s ||
                    (s = this.FindNextFocusableChildInDirection(
                      r - 1,
                      Ct.FORWARD,
                      t
                    )),
                  s ||
                    (s = this.FindNextFocusableChildInDirection(
                      r,
                      Ct.BACKWARD,
                      t
                    )),
                  s || (o ? this : null)
                );
              }
              return null;
            }),
            (t.prototype.BVisibleChildTakeFocus = function (t) {
              var e,
                n = X(
                  this,
                  this.Element
                    ? this.Element.getBoundingClientRect()
                    : document.body.getBoundingClientRect()
                );
              return (
                Nt(
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
                ? gt.NONE
                : K(this.m_element);
            }),
            (t.prototype.OnNavigationEvent = function (t) {
              var e = t.detail.button;
              if (this.BTryInternalNavigation(e, t.detail.is_repeat)) return !0;
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
            (t.prototype.BTryInternalNavigation = function (t, e) {
              var n,
                o = this.GetLayout(),
                r = this.ComputeRelativeDirection(t, o);
              if (
                (Nt(
                  "Handling navigation event " +
                    c.a[t] +
                    " - " +
                    gt[o] +
                    " - " +
                    Ct[r],
                  this.m_element
                ),
                r == Ct.INVALID)
              )
                return !1;
              if (this.m_Properties.focusable && this.m_bFocused)
                return Nt("Skipping navigation within focused element"), !1;
              if ((this.EnsureChildrenSorted(!0), o == gt.GRID))
                n = this.FindNextFocusableChildInGrid(
                  this.m_iActiveChild,
                  r,
                  t
                );
              else {
                var a = this.m_iActiveChild;
                -1 == a &&
                  (a = r == Ct.FORWARD ? -1 : this.m_rgChildren.length),
                  (n = this.FindNextFocusableChildInDirection(a, r, t));
              }
              if (n) {
                var s = Y(t);
                if (
                  this.GetScrollIntoViewType() == bt.NoTransformSparseContent
                ) {
                  var u =
                      ("y" == s ? window.innerHeight : window.innerWidth) /
                      (e ? 4.5 : 3.33),
                    l = it(n.Element);
                  if (
                    (l.top > window.innerHeight &&
                      l.bottom > window.innerHeight + u) ||
                    (l.bottom < 0 && l.top < -u) ||
                    (l.left > window.innerWidth &&
                      l.right > window.innerWidth + u) ||
                    (l.right < 0 && l.left < -u)
                  )
                    return (
                      Nt(
                        "Element too far away, scrolling " +
                          u +
                          " on " +
                          s +
                          " axis "
                      ),
                      ht(n.Element, n.Element, "smooth", s, u),
                      !0
                    );
                }
                return this.m_Tree.TransferFocus(i.GAMEPAD, n, s), !0;
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
                : bt.Standard;
            }),
            (t.prototype.ComputeRelativeDirection = function (t, e) {
              var n = e == gt.ROW_REVERSE || e == gt.COLUMN_REVERSE;
              switch (e) {
                case gt.ROW:
                case gt.ROW_REVERSE:
                  switch (t) {
                    case c.a.DIR_LEFT:
                      return n ? Ct.FORWARD : Ct.BACKWARD;
                    case c.a.DIR_RIGHT:
                      return n ? Ct.BACKWARD : Ct.FORWARD;
                    default:
                      return Ct.INVALID;
                  }
                case gt.COLUMN:
                case gt.COLUMN_REVERSE:
                  switch (t) {
                    case c.a.DIR_UP:
                      return n ? Ct.FORWARD : Ct.BACKWARD;
                    case c.a.DIR_DOWN:
                      return n ? Ct.BACKWARD : Ct.FORWARD;
                    default:
                      return Ct.INVALID;
                  }
                case gt.GRID:
                  switch (t) {
                    case c.a.DIR_LEFT:
                    case c.a.DIR_UP:
                      return n ? Ct.FORWARD : Ct.BACKWARD;
                    case c.a.DIR_RIGHT:
                    case c.a.DIR_DOWN:
                      return n ? Ct.BACKWARD : Ct.FORWARD;
                    default:
                      return Ct.INVALID;
                  }
                default:
                  return Ct.INVALID;
              }
            }),
            (t.prototype.AdvanceIndex = function (t, e) {
              return t + (e == Ct.FORWARD ? 1 : -1);
            }),
            (t.prototype.FindNextFocusableChildInDirection = function (
              t,
              e,
              n
            ) {
              for (
                var o = e == Ct.FORWARD ? 1 : -1, i = t + o;
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
                var o = e == Ct.FORWARD ? 1 : -1, i = t;
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
                  Object(g.a)(!1, "No active child for grid navigation"),
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
                      return !U("y", r, t.GetBoundingRect());
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
                  var h = e == Ct.FORWARD ? 1 : -1, d = this.AdvanceIndex(t, e);
                  d >= 0 && d < this.m_rgChildren.length;
                  d += h
                ) {
                  var p,
                    m = this.m_rgChildren[d];
                  if (!U("y", r, m.GetBoundingRect())) return null;
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
                  !(!r || U(f[t], r, n)) ||
                  (s.push({ child: e, overlap: H(t, o, n), dist: V(t, c, n) }),
                  !1)
                );
              }),
                e == Ct.BACKWARD && s.reverse(),
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
              (this.m_RetainFocusParent = t),
                this.m_Properties.retainFocus ||
                  this.PropagateRetainFocusParentToChildren(t);
            }),
            (t.prototype.PropagateRetainFocusParentToChildren = function (t) {
              for (var e = 0; e < this.m_rgChildren.length; e++)
                this.m_rgChildren[e].SetRetainFocusParent(t);
            }),
            (t.prototype.OnFocusedDecendantRemoved = function (t) {
              this.BChildTakeFocus(i.APPLICATION) ||
                this.m_Tree.TransferFocus(i.APPLICATION, this);
            }),
            (t.prototype.SetDOMFocusAndScroll = function (t, e) {
              this.UpdateParentActiveChild(),
                this.m_Tree.BUseVirtualFocus() ||
                  this.m_element.focus({ preventScroll: !0 }),
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
                    (void 0 === c && (c = nt ? bt.NoTransform : bt.Standard), a)
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
                        c == bt.NoTransform || c == bt.NoTransformSparseContent;
                    if (e) {
                      var d = h ? it(l) : l.getBoundingClientRect(),
                        p = !1,
                        m = Math.max(1.4 * (d.bottom - d.top), 40);
                      ((ot && performance.now() - ot < 500) ||
                        d.bottom < -m ||
                        d.top > window.innerHeight + m) &&
                        (p = !0);
                      var f = p ? "auto" : "smooth";
                      p && (ot = performance.now()),
                        t.Tree.Controller.BIsRestoringHistory() && (f = "auto"),
                        h
                          ? ht(0, l, f)
                          : l.scrollIntoView({ behavior: f, block: "nearest" });
                    } else
                      h
                        ? ht(0, l, "auto")
                        : l.scrollIntoView({
                            behavior: "auto",
                            block: "nearest",
                            inline: "nearest",
                          });
                  }
                })(this, e),
                this.m_Tree.OnChildActivated(t);
            }),
            Object(r.c)([_.a], t.prototype, "OnDOMFocus", null),
            Object(r.c)([_.a], t.prototype, "OnDOMBlur", null),
            Object(r.c)([_.a], t.prototype, "OnNavigationEvent", null),
            t
          );
        })(),
        wt = "GamepadInput";
      function At(t) {
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
      })(Ot || (Ot = {}));
      var Tt = (function () {
        function t(t) {
          var e = this;
          (this.m_bIsGamepadInputExternallyControlled = !1),
            (this.m_NavigationController = t),
            At("BrowserView.RegisterForMessageFromParent") &&
            At("BrowserView.PostMessageToParent")
              ? ((this.m_bIsGamepadInputExternallyControlled = !0),
                (this.m_postMessage = new Rt()))
              : ((this.m_bIsGamepadInputExternallyControlled =
                  window.top != window.self),
                (this.m_postMessage = new St(window.top))),
            this.m_postMessage.RegisterForMessage(this.OnMessage),
            window.addEventListener("unload", this.PostPageUnloading),
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
          (t.prototype.BFromActiveNavTree = function (t, e) {
            var n = null == e ? void 0 : e.Tree;
            return (
              n || (n = null == t ? void 0 : t.Tree),
              n && n.Controller.IsActiveFocusNavTree(n)
            );
          }),
          (t.prototype.OnFocusChanged = function (t, e, n) {
            var o = n ? n.GetActiveActionDescriptions() : {};
            this.BFromActiveNavTree(e, n) && this.UpdateActionDescriptions(o);
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
            var e = Ot.Basic;
            window.bSupportsGamepadUI && (e = Ot.Full),
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
          Object(r.c)([_.a], t.prototype, "OnFocusChanged", null),
          Object(r.c)([_.a], t.prototype, "OnMessage", null),
          Object(r.c)([_.a], t.prototype, "PostPageUnloading", null),
          t
        );
      })();
      var St = (function () {
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
                { gamepadMessage: wt, args: e },
                "*"
              );
            }),
            (t.prototype.OnMessage = function (t) {
              var e = null == t ? void 0 : t.data;
              if (e && e.gamepadMessage == wt && e.args) {
                var n = JSON.parse(e.args);
                this.m_fnCallback(n);
              }
            }),
            Object(r.c)([_.a], t.prototype, "OnMessage", null),
            t
          );
        })(),
        Rt = (function () {
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
              SteamClient.BrowserView.PostMessageToParent(wt, e);
            }),
            (t.prototype.OnMessage = function (t, e) {
              if (t == wt) {
                var n = JSON.parse(e);
                this.m_fnCallback(n);
              }
            }),
            Object(r.c)([_.a], t.prototype, "OnMessage", null),
            t
          );
        })(),
        Dt =
          (n("SHRt"),
          c.c,
          (function (t) {
            function e(e, n) {
              return t.call(this, n.m_Tree, n, n.m_FocusRing) || this;
            }
            return (
              Object(r.d)(e, t),
              (e.prototype.OnMount = function (e) {
                t.prototype.OnMount.call(this, e), (e.__nav_wrapper = this);
                var n = e.__nav_tree;
                n && this.BindTree(n);
              }),
              (e.prototype.BindTree = function (t) {
                t.GetParentEmbeddedNavTree() &&
                  ((this.m_wrappedTree = t),
                  t.OnActivateCallbacks.Register(this.OnWrappedTreeActivated),
                  t.BIsActive() && this.OnWrappedTreeActivated(),
                  t.SetOnUnhandledButtonCallback(
                    this.OnWrappedTreeUnhandledButton
                  ));
              }),
              (e.prototype.OnWrappedTreeActivated = function () {
                this.BHasFocus() ||
                  this.m_Tree.TransferFocus(i.APPLICATION, this);
              }),
              (e.prototype.OnWrappedTreeUnhandledButton = function (t) {
                return (
                  d(this.m_Parent.Element, "vgp_onbuttondown", t.detail), !1
                );
              }),
              (e.prototype.SetDOMFocusAndScroll = function (t, e) {
                this.UpdateParentActiveChild(),
                  this.m_wrappedTree.BIsActive() ||
                    (this.m_wrappedTree.Activate(),
                    this.m_wrappedTree.TakeFocus(t));
              }),
              (e.prototype.SetProperties = function (e) {
                t.prototype.SetProperties.call(
                  this,
                  Object(r.a)(Object(r.a)({}, e), {
                    noFocusRing: !0,
                    focusable: !0,
                  })
                );
              }),
              Object(r.c)([_.a], e.prototype, "OnWrappedTreeActivated", null),
              Object(r.c)(
                [_.a],
                e.prototype,
                "OnWrappedTreeUnhandledButton",
                null
              ),
              e
            );
          })(Ft));
      var It = "VirtualKeyboardMessage";
      function Et(t) {
        return t && t.type === It;
      }
      var Pt = (function () {
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
              t == It && this.InternalDispatchMessage(JSON.parse(e));
            }),
            (t.prototype.OnMessage = function (t) {
              this.InternalDispatchMessage(t.data);
            }),
            (t.prototype.InternalDispatchMessage = function (t) {
              Et(t) && t.message;
            }),
            (t.prototype.SendMessage = function (t) {
              var e = Object(r.a)({ type: "VirtualKeyboardMessage" }, t);
              At("BrowserView.PostMessageToParent")
                ? SteamClient.BrowserView.PostMessageToParent(
                    e.type,
                    JSON.stringify(e)
                  )
                : (Object(g.a)(
                    window.parent && window.parent != window,
                    "No parent window to post to"
                  ),
                  window.parent.postMessage(e, "*"));
            }),
            Object(r.c)([_.a], t.prototype, "OnBrowserViewMessage", null),
            Object(r.c)([_.a], t.prototype, "OnMessage", null),
            t
          );
        })(),
        Lt = n("8+ko"),
        Mt = n.n(Lt);
      function Bt(t) {
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
          o = null,
          i = null,
          r = 0,
          a = 0,
          c = 0,
          u = 0;
        t.prepend(n);
        var l = function (t) {
            var e = t.GetBoundingRect(),
              o = n[0].getBoundingClientRect();
            return {
              left: e.x - o.x - 0,
              top: e.y - o.y - 0,
              height: e.height,
              width: e.width,
            };
          },
          h = function (t) {
            (r = t.left),
              (a = t.top),
              (c = t.height),
              (u = t.width),
              o.css({ left: r, top: a, height: c, width: u });
          },
          d = function (t) {
            if (
              (o && (o.remove(), (o = null)),
              i && (window.clearInterval(i), (i = null)),
              t && t.BWantsFocusRing())
            ) {
              o = s()("<div/>", {
                style: "position: absolute; pointer-events: none; ",
                class: Mt.a.FocusRing,
              });
              var e = l(t);
              h(e),
                n.append(o),
                (i = window.setInterval(function () {
                  return (function (t) {
                    if (t && t.BWantsFocusRing() && o) {
                      var e = l(t);
                      (e.left == r &&
                        e.top == a &&
                        e.height == c &&
                        e.width == u) ||
                        h(e);
                    }
                  })(t);
                }, 200));
            }
          };
        return {
          OnBlur: function () {
            return d(null);
          },
          OnFocus: function (t, e) {
            return d(e);
          },
          OnFocusChange: function (t, e, n) {
            return d(n);
          },
        };
      }
      function Gt(t) {
        return !!t.is_repeat;
      }
      function kt(t) {
        return t ? Function("event", t) : null;
      }
      function Wt() {
        return !0;
      }
      function jt(t) {
        return "BlockMovement" == t
          ? Wt
          : "RepeatNavigationBoundary" == t
          ? Gt
          : t
          ? Function("detail", t)
          : null;
      }
      function xt(t) {
        this.click(), t.stopPropagation();
      }
      function Ut(t) {
        s()(this).find("a")[0].click();
      }
      function Ht(t) {
        var e = t.currentTarget;
        if (!I(e)) return !1;
        var n = t.detail.is_repeat ? 4.5 : 3.33,
          o = "smooth",
          i = e.ownerDocument,
          r = i.defaultView;
        switch (t.detail.button) {
          case c.a.DIR_UP:
            if (r.scrollY > 3)
              return dt(r, { top: -r.innerHeight / n, behavior: o }), !0;
            break;
          case c.a.DIR_RIGHT:
            if (r.scrollX + r.innerWidth < i.body.clientWidth - 3)
              return dt(r, { left: r.innerWidth / n, behavior: o }), !0;
            break;
          case c.a.DIR_DOWN:
            if (r.scrollY + r.innerHeight < i.body.clientHeight - 3)
              return dt(r, { top: r.innerHeight / n, behavior: o }), !0;
            break;
          case c.a.DIR_LEFT:
            if (r.scrollX > 3)
              return dt(r, { left: r.innerWidth / n, behavior: o }), !0;
        }
        return !1;
      }
      var Vt;
      function Kt(t, e) {
        var n = window.history.state;
        if (n && n[t] && n[t].navState) {
          var o = n[t],
            r = o.navState,
            a = o.hadFocus;
          e.Tree.Controller.RestoreHistoryTransaction(function () {
            var t, n;
            (t = e),
              (n = r),
              S.RestoreSerializedNavNode(t, n),
              a && (e.Tree.Activate(), e.BTakeFocus(i.APPLICATION));
          });
        }
      }
      !(function (t) {
        (t[(t.Unknown = 0)] = "Unknown"),
          (t[(t.NotNeeded = 1)] = "NotNeeded"),
          (t[(t.InReactTree = 2)] = "InReactTree");
      })(Vt || (Vt = {}));
      var Yt = new Pt(),
        Xt = !1,
        zt = null,
        Jt = null;
      function qt(t) {
        Xt ||
          ((zt = new j()),
          (window.legacyWebFocusNavController = zt),
          new Tt(zt).BIsGamepadInputExternallyControlled() ||
            zt.RegisterInputSource(t),
          (function (t) {
            s()("html").addClass("gpnav_active");
            var e = s()("body"),
              n = t.NewGamepadNavigationTree("legacy"),
              o = Bt(e);
            (n.Root.m_FocusRing = o),
              n.Root.SetProperties({
                scrollIntoViewType: bt.NoTransformSparseContent,
              }),
              (window.__nav_tree_root = n),
              Qt.set(document.body, n.Root),
              ee(document.body, n.Root),
              re(void 0, !0),
              t.RegisterGamepadNavigationTree(n, !1),
              s()(document.body).on("vgp_onbuttondown", function (t) {
                n.HandleButtonDownEventAsLogicalEvent(t.originalEvent);
              }),
              h(document.body, Ht),
              new MutationObserver(Zt).observe(document.body, {
                childList: !0,
                subtree: !0,
              }),
              (c = !0),
              (nt = c),
              (i = "legacy_web_root"),
              (a = n.Root),
              window.addEventListener("popstate", function () {
                return Kt(i, a);
              }),
              a.Tree.Controller.FocusChangedCallbacks.Register(function () {
                var t,
                  e,
                  n = {
                    navState: ((e = a), S.SerializeNavNode(e, !0, !1)),
                    hadFocus: a.Tree.BIsActive(),
                  };
                window.history.replaceState(
                  Object(r.a)(
                    Object(r.a)({}, window.history.state),
                    (((t = {})[i] = n), t)
                  ),
                  null
                );
              }),
              Kt(i, a),
              Object.assign(window, he),
              window.dispatchEvent(new CustomEvent("vgp_gamepadnavready"));
            var i, a;
            var c;
          })(zt)),
          (Xt = !0);
      }
      function Zt(t) {
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
          i.length && re(s()(i)), r.length && ie(s()(r));
        }
      }
      var Qt = new WeakMap(),
        $t = new WeakMap(),
        te = [];
      function ee(t, e) {
        if (e instanceof Ft) {
          var n = e.GetDepth();
          te[n] || (te[n] = []), te[n].push([t, e]);
        }
        Qt.set(t, e);
      }
      function ne(t, e) {
        var n = $t.has(t) ? $t.get(t) : [];
        n.push(e), $t.set(t, n);
      }
      function oe(t) {
        return "jquery" in t
          ? Qt.get(t[0]) || Vt.Unknown
          : Qt.get(t) || Vt.Unknown;
      }
      function ie(t) {
        t.find("*")
          .addBack()
          .each(function () {
            var t;
            null === (t = $t.get(this)) ||
              void 0 === t ||
              t.forEach(function (t) {
                return t();
              }),
              Qt.delete(this),
              $t.delete(this),
              s()(this).attr("data-nav-modal") && le();
          });
      }
      function re(t, e) {
        void 0 === e && (e = !1);
        performance.now();
        var n =
          "a,button,textarea,input:not(input[type=hidden]),label:not([for]),[data-panel],[data-react-nav-root],[data-nav-modal]";
        s()(n, t)
          .addBack(n)
          .each(function () {
            var t;
            (function (t) {
              return "jquery" in t ? Qt.has(t[0]) : Qt.has(t);
            })((t = this)) || ce(t);
          }),
          (function () {
            for (var t = te.length - 1; t >= 0; t--)
              if (te[t])
                for (var e = 0, n = te[t]; e < n.length; e++) {
                  var o = n[e],
                    i = o[0],
                    r = o[1];
                  ne(i, r.Tree.RegisterNavigationItem(r, i));
                }
            te = [];
          })();
      }
      function ae(t) {
        ie(s()(t)), re(s()(t));
      }
      function se(t) {
        var e = s()(t.Element);
        return (
          !e.data("gpFocusDisabled") &&
          e.is(":visible") &&
          "hidden" != e.css("visibility") &&
          ((e.outerWidth() > 0 && e.outerHeight() > 0) ||
            "hidden" !== e.css("overflow"))
        );
      }
      function ce(t) {
        var e,
          n,
          o,
          a,
          c,
          u,
          d,
          f,
          v = s()(t),
          _ = ue(t);
        if (_ instanceof Dt || _ == Vt.InReactTree)
          return ee(t, Vt.InReactTree), Vt.InReactTree;
        var b = _.Tree,
          y = v.data("reactNavRoot")
            ? new Dt(v.data("reactNavRoot"), _)
            : b.CreateNode(_, _.m_FocusRing),
          C = v.data("panel") || {};
        if (
          (s()(t).attr("data-nav-modal") &&
            (function (t) {
              Jt &&
                (Object(g.a)(
                  !1,
                  "Creating a new modal nav tree while one already exists. A modal opening another modal is not currently supported."
                ),
                le());
              Jt = zt.NewGamepadNavigationTree("modal_dialog");
              var e = Bt(s()("body"));
              (Jt.Root.m_FocusRing = e),
                Jt.Root.SetProperties({}),
                ee(t, Jt.Root),
                re(t),
                h(Jt.Root.m_element, function (t) {
                  return t.stopPropagation(), !1;
                }),
                zt.RegisterGamepadNavigationTree(Jt, !1);
            })(t),
          "A" == t.tagName || "BUTTON" == t.tagName || "LABEL" == t.tagName)
        )
          (C.focusable = null === (n = C.focusable) || void 0 === n || n),
            (C.clickOnActivate =
              null === (o = C.clickOnActivate) || void 0 === o || o);
        else if ("INPUT" == t.tagName)
          switch (
            ((C.focusable = null === (a = C.focusable) || void 0 === a || a),
            t.getAttribute("type"))
          ) {
            case "checkbox":
              C.clickOnActivate =
                null === (c = C.clickOnActivate) || void 0 === c || c;
              break;
            case "text":
            case "password":
              C.enableVirtualKeyboard =
                null === (u = C.enableVirtualKeyboard) || void 0 === u || u;
          }
        else
          "TEXTAREA" == t.tagName &&
            ((C.focusable = null === (d = C.focusable) || void 0 === d || d),
            (C.enableVirtualKeyboard =
              null === (f = C.enableVirtualKeyboard) || void 0 === f || f));
        var N = C["flow-children"];
        delete C["flow-children"];
        var O = C.clickOnActivate,
          F = C.maintainX,
          w = C.maintainY,
          A = C.enableVirtualKeyboard,
          T = C.preferredChild,
          S = C.onOKActionDescription,
          R = C.onCancelActionDescription,
          D = C.onSecondaryActionDescription,
          I = C.onOptionsActionDescription,
          E = C.onMenuActionDescription,
          P = C.actionDescriptionMap,
          L = C.onOKButton,
          M = C.onCancelButton,
          B = C.onSecondaryButton,
          G = C.onOptionsButton,
          k = C.onMenuButton,
          W = C.onMoveUp,
          j = C.onMoveRight,
          x = C.onMoveDown,
          U = C.onMoveLeft,
          H = C.onGamepadDirection,
          V = C.bFocusRingRoot,
          K = C.type,
          Y = Object(r.f)(C, [
            "clickOnActivate",
            "maintainX",
            "maintainY",
            "enableVirtualKeyboard",
            "preferredChild",
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
            "onMoveUp",
            "onMoveRight",
            "onMoveDown",
            "onMoveLeft",
            "onGamepadDirection",
            "bFocusRingRoot",
            "type",
          ]),
          X = kt(L),
          z = kt(M),
          J = kt(B),
          q = kt(G),
          Z = kt(k),
          Q = kt(H);
        K || (K = "Panel"),
          "PanelGroup" == K &&
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
              { onOKButtonHandler: X, onCancelButtonHandler: z, navNode: y },
              Y
            )),
            (X = e.onOKButtonHandler),
            (z = e.onCancelButtonHandler)),
          X &&
            ne(
              v[0],
              (function (t, e) {
                return l(t, "vgp_onok", p(e));
              })(v[0], X)
            ),
          z &&
            ne(
              v[0],
              (function (t, e) {
                return l(t, "vgp_oncancel", p(e));
              })(v[0], z)
            ),
          J &&
            D &&
            ne(
              v[0],
              (function (t, e) {
                return l(t, "vgp_onsecondaryaction", p(e));
              })(v[0], J)
            ),
          q &&
            I &&
            ne(
              v[0],
              (function (t, e) {
                return l(t, "vgp_onoptions", p(e));
              })(v[0], q)
            ),
          Z &&
            E &&
            ne(
              v[0],
              (function (t, e) {
                return l(t, "vgp_onmenu", p(e));
              })(v[0], Z)
            ),
          Q && ne(v[0], h(v[0], Q));
        var $ = (function (t, e, n, o) {
            var i = {};
            return (
              t && (i.onMoveUp = jt(t)),
              e && (i.onMoveRight = jt(e)),
              n && (i.onMoveDown = jt(n)),
              o && (i.onMoveLeft = jt(o)),
              i
            );
          })(W, j, x, U),
          tt = N
            ? (function (t) {
                switch (t) {
                  case "column":
                    return gt.COLUMN;
                  case "column-reverse":
                    return gt.COLUMN_REVERSE;
                  case "row":
                    return gt.ROW;
                  case "row-reverse":
                    return gt.ROW_REVERSE;
                  case "grid":
                    return gt.GRID;
                  default:
                    return gt.NONE;
                }
              })(N)
            : gt.NONE;
        tt != gt.NONE && (Y.layout = tt),
          F
            ? (Y.navEntryPreferPosition = _t.MAINTAIN_X)
            : w
            ? (Y.navEntryPreferPosition = _t.MAINTAIN_Y)
            : T && (Y.navEntryPreferPosition = _t.PREFERRED_CHILD),
          O &&
            (!1 !== Y.focusable && (Y.focusable = !0),
            v.on("vgp_onok", "firstChild" === O ? Ut : xt),
            ne(t, function () {
              v.off("vgp_onok");
            })),
          A &&
            (v.on("vgp_onok.vkbindings", function () {
              return Yt.ShowVirtualKeyboard();
            }),
            v.on("click.vkbindings", function () {
              return Yt.ShowVirtualKeyboard();
            }),
            v.on("blur.vkbindings", function () {
              document.hasFocus() &&
                document.activeElement != t &&
                Yt.HideVirtualKeyboard();
            }),
            ne(t, function () {
              v.off(".vkbindings");
            })),
          Y.focusable && void 0 === v.attr("tabIndex") && v.attr("tabIndex", 0),
          Y.focusable &&
            y.FocusCallbackList.Register(function (e) {
              return (function (t, e) {
                e ? s()(t).addClass("gpfocus") : s()(t).removeClass("gpfocus");
              })(t, e);
            }),
          V &&
            ((y.m_FocusRing = Bt(v)),
            "static" == v.css("position") && v.css("position", "relative"));
        var et = m({
            onOKActionDescription: S,
            onCancelActionDescription: R,
            onSecondaryActionDescription: D,
            onOptionsActionDescription: I,
            onMenuActionDescription: E,
            actionDescriptionMap: P,
          }),
          nt = Object(r.a)(
            Object(r.a)({ fnCanTakeFocus: se, actionDescriptionMap: et }, $),
            Y
          );
        return y.SetProperties(nt), ee(t, y), y;
      }
      function ue(t) {
        var e = t.parentElement;
        if (!e) return console.error("no parent"), null;
        var n = oe(e);
        if (n == Vt.Unknown)
          n = (function (t) {
            var e = !1;
            switch (t.tagName) {
              case "A":
              case "INPUT":
              case "TEXTAREA":
                e = !0;
                break;
              case "DIV":
                if (K(t) != gt.COLUMN) e = !0;
                else {
                  var n = K(t.parentElement);
                  (n != gt.ROW && n != gt.ROW_REVERSE) || (e = !0);
                }
            }
            var o = Vt.NotNeeded;
            return e ? (o = ce(t)) : ee(t, o), o;
          })(e);
        else if (n == Vt.InReactTree) return n;
        return n instanceof Ft ? n : ue(e);
      }
      function le(t) {
        Jt && (zt.UnregisterGamepadNavigationTree(Jt), (Jt = null)),
          t && s()(t).removeAttr("data-nav-modal");
      }
      var he = {
        InstrumentFocusElements: re,
        ForceUpdateFocusElements: ae,
        GPNavFocusChild: function (t) {
          var e = oe(t[0]);
          return (
            e instanceof Ft || (e = ue(t[0])),
            e instanceof Ft && e.BTakeFocus(i.APPLICATION),
            !1
          );
        },
        GPOnShowingModalWindow: function (t) {
          var e = t;
          return (
            s()(e).attr("data-nav-modal", "true"),
            ae(e),
            function () {
              return le(e);
            }
          );
        },
        GPShowVirtualKeyboard: function (t) {
          void 0 === t && (t = !0),
            t ? Yt.ShowVirtualKeyboard() : Yt.HideVirtualKeyboard();
        },
        GPNavUpdateActionDescriptions: function (t, e) {
          var n = oe(t);
          n instanceof Ft &&
            n.SetProperties(
              Object(r.a)(Object(r.a)({}, n.m_Properties), {
                actionDescriptionMap: m(e),
              })
            );
        },
      };
    },
  },
]);

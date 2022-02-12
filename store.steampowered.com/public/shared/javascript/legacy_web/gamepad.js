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
          return xt;
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
      var f,
        g = n("r64O"),
        v = n("XxJJ"),
        _ = n("qiKp"),
        b = (function (t) {
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
      })(f || (f = {}));
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
              this.Log.apply(this, Object(r.g)([f.Debug], t));
            }),
            (t.prototype.Info = function () {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
              this.Log.apply(this, Object(r.g)([f.Info], t));
            }),
            (t.prototype.Warning = function () {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
              this.Log.apply(this, Object(r.g)([f.Warning], t));
            }),
            (t.prototype.Error = function () {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
              this.Log.apply(this, Object(r.g)([f.Error], t));
            }),
            (t.prototype.Assert = function (t) {
              for (var e = [], n = 1; n < arguments.length; n++)
                e[n - 1] = arguments[n];
              t ||
                this.Log.apply(
                  this,
                  Object(r.g)([f.Error, "Assertion failed:"], e)
                );
            }),
            (t.prototype.Log = function (t) {
              for (var e, n, o = [], i = 1; i < arguments.length; i++)
                o[i - 1] = arguments[i];
              if (t != f.Debug || N.Get().IsDebugLogEnabled(this.m_sName)) {
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
                R.apply(void 0, Object(r.g)([t, c, a, this.m_sName], o));
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
              (this.m_SettingsChangedCallback = new _.a()),
              (this.m_bLoading = !1),
              (this.m_Storage = new b()),
              (this.m_rgLogNames = y.slice()),
              this.LoadSettings();
          }
          return (
            (t.prototype.LogAsLogManager = function () {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
              R.apply(
                void 0,
                Object(r.g)(
                  [
                    f.Info,
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
      function A(t) {
        switch (t) {
          case f.Debug:
            return String.fromCodePoint(128027);
          case f.Info:
            return String.fromCodePoint(8505);
          case f.Warning:
            return String.fromCodePoint(9888);
          case f.Error:
            return String.fromCodePoint(128165);
        }
      }
      function R(t, e, n, o) {
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
            case f.Debug:
            case f.Info:
              console.log.apply(console, h);
              break;
            case f.Warning:
              console.warn.apply(console, h);
              break;
            case f.Error:
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
      var T = (function (t) {
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
      function w(t) {
        var e = void 0;
        return t && (e = t.ownerDocument.defaultView), e;
      }
      function E(t, e) {
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
      var L = new C("FocusNavigation").Debug,
        M = new C("GamepadEvents").Debug,
        B = (function () {
          function t(t, e) {
            (this.m_onActivateCallbacks = new _.a()),
              (this.m_onDeactivateCallbacks = new _.a()),
              (this.m_Controller = t),
              (this.m_ID = e),
              (this.m_Root = new gt(this, null, null)),
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
              return new gt(this, t, e);
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
                M(
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
                L(
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
      var G = new C("FocusNavigation").Debug,
        k = (new C("GamepadEvents").Debug, "focus-nav-show-debug-focus-ring");
      var W = (function () {
        function t() {
          (this.m_rgGamepadInputSources = []),
            (this.m_rgGamepadNavigationTrees = []),
            (this.m_LastActiveNavTree = null),
            (this.m_LastActiveFocusNavTree = null),
            (this.m_bGlobalEventsInitialized = !1),
            (this.m_bSuppressGamepadInput = !1),
            (this.m_FocusChangedCallbacks = new _.a()),
            (this.m_UnhandledButtonEventsCallbacks = new _.a()),
            (this.m_navigationSource = Object(_.b)({
              eActivationSourceType: c.b.UNKNOWN,
              nActiveGamepadIndex: -1,
              nLastActiveGamepadIndex: -1,
            })),
            (this.m_bShowDebugFocusRing = Object(_.b)(!1)),
            (this.m_bRestoringHistory = !1),
            (this.m_fnGamepadEventUpdateBatcher = function (t) {
              return t();
            }),
            (this.m_iFocusChangeStack = 0),
            (window.FocusNavController = this),
            this.m_bShowDebugFocusRing.Set(
              "shown" == sessionStorage.getItem(k)
            );
        }
        return (
          (t.prototype.SetShowDebugFocusRing = function (t) {
            this.m_bShowDebugFocusRing.Set(t),
              (function (t) {
                sessionStorage.setItem(k, t ? "shown" : void 0);
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
              G(
                "Ignoring button press - gamepad input is suppressed by parent window"
              );
            else {
              this.ChangeNavigationSource(e, n);
              var r = this.GetEventTarget(t, !0);
              G(
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
            return new B(this, t);
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
                  ? (G(
                      "There was a focus event in " +
                        t.id +
                        ", allowing focus transfer to activate nav tree due to parent embedded relationship"
                    ),
                    t.Activate())
                  : G(
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
                G(
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
          Object(r.c)([v.a], t.prototype, "OnButtonDown", null),
          Object(r.c)([v.a], t.prototype, "OnButtonUp", null),
          Object(r.c)([v.a], t.prototype, "OnNavigationTypeChange", null),
          t
        );
      })();
      var U = (function () {
        function t(t) {
          (this.m_node = t), (this.m_History = new T(t));
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
      function x(t, e, n) {
        return "x" == t
          ? e.x + e.width > n.x && e.x < n.x + n.width
          : "y" == t
          ? e.y + e.height > n.y && e.y < n.y + n.height
          : (Object(g.a)(!1, "Invalid axis " + t), !1);
      }
      function j(t, e, n) {
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
      function H(t) {
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
      function K(t) {
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
      function Y(t, e, n) {
        var o,
          i = [],
          r = t.GetChildren(),
          a = r[0],
          s = (r[1], t.GetActiveChild()),
          c = s ? s.Element.getBoundingClientRect() : null;
        if (s) {
          if (
            (m = J(s, e, n)) &&
            !m.offScreen &&
            (o = X(s, m, m.overlap, n)) &&
            !o.visibility.offScreen
          )
            return o;
          m && i.push({ child: s, visibility: m });
        }
        for (var u, l = n || c, h = 0; h < a.length; h++) {
          if ((g = a[h]) != s)
            (m = J(g, e, l)) && i.push({ child: g, visibility: m });
        }
        i.sort(z);
        for (var d = 0, p = i; d < p.length; d++) {
          var m,
            f = p[d],
            g = f.child;
          if ((m = f.visibility).offScreen && u) {
            if (!u.visibility.offScreen) break;
            if (m.distance > u.visibility.distance) break;
          }
          var v = g == s ? o : X(g, m, m.overlap || e, l);
          v && (!u || z(v, u) < 0) && (u = v);
        }
        return u;
      }
      function X(t, e, n, o) {
        switch (t.GetFocusable()) {
          case "none":
            return null;
          case "children":
            return Y(t, e.overlap || n, o);
          case "self":
            return { child: t, visibility: e };
        }
      }
      function z(t, e) {
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
      function J(t, e, n) {
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
      function q(t, e, n) {
        return null == t || isNaN(t) ? t : Math.max(e, Math.min(n, t));
      }
      var Z = new C("ScrollSnap").Debug,
        Q = !1;
      var $;
      function tt(t) {
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
      function et(t, e) {
        return "x" == e
          ? [t.left, t.right, t.right - t.left]
          : [t.top, t.bottom, t.bottom - t.top];
      }
      function nt(t, e, n, o) {
        var i = et(t, o),
          r = i[0],
          a = i[1],
          s = i[2],
          c = et(e, o),
          u = c[0],
          l = c[1],
          h = c[2],
          d = et(n, o),
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
      function ot(t) {
        return "auto" == t
          ? 0
          : t.endsWith("px")
          ? parseInt(t)
          : (console.log("Unsupported length", t), 0);
      }
      function it(t) {
        if (!("ownerDocument" in t))
          return { left: 0, right: 0, top: 0, bottom: 0 };
        var e = t.ownerDocument.defaultView.getComputedStyle(t);
        return {
          left: ot(e.scrollMarginLeft),
          right: ot(e.scrollMarginRight),
          top: ot(e.scrollMarginTop),
          bottom: ot(e.scrollMarginBottom),
        };
      }
      function rt(t, e) {
        var n = (function (t) {
          var e;
          return {
            left: ot(
              (e =
                "ownerDocument" in t
                  ? t.ownerDocument.defaultView.getComputedStyle(t)
                  : t.document.defaultView.getComputedStyle(
                      window.document.documentElement
                    )).scrollPaddingLeft
            ),
            right: ot(e.scrollPaddingRight),
            top: ot(e.scrollPaddingTop),
            bottom: ot(e.scrollPaddingBottom),
          };
        })(t);
        return {
          left: Math.max(0, e.left + n.left),
          right: Math.max(0, e.right - n.right),
          top: Math.max(0, e.top + n.top),
          bottom: Math.max(0, e.bottom - n.bottom),
        };
      }
      function at(t) {
        return t > -1 && t < 1;
      }
      function st(t, e, n, o, i) {
        Z(
          "----------------------------------------------------------------------------------"
        ),
          Z("Scrolling Into View:", e);
        for (
          var r = [], a = e, s = tt(e), c = null != i ? i : Number.MAX_VALUE;
          a;

        ) {
          var u = E(a);
          u || (u = w(a));
          var l = it(a),
            h = tt(u),
            d = rt(u, h),
            p = { element: u, left: 0, top: 0 };
          if (
            (Z(
              "Checking scroll div",
              u,
              "scroll adjusted =>",
              d,
              "target => ",
              s
            ),
            (o && "y" != o) ||
              !P(u, "y") ||
              ((p.top = nt(s, d, l, "y")),
              i &&
                ((p.top = Math.min(c, Math.abs(p.top)) * (p.top < 0 ? -1 : 1)),
                (c -= Math.abs(p.top))),
              Z("- checked y: " + p.top)),
            (o && "x" != o) ||
              !P(u, "x") ||
              ((p.left = nt(s, d, l, "x")),
              i &&
                ((p.left =
                  Math.min(c, Math.abs(p.left)) * (p.left < 0 ? -1 : 1)),
                (c -= Math.abs(p.left))),
              Z("- checked x: " + p.left)),
            r.push(p),
            i && !c)
          )
            break;
          if (!("ownerDocument" in u)) break;
          (a = u), (s = h);
        }
        for (var m = !1, f = 0, g = r; f < g.length; f++) {
          if (!at((p = g[f]).left) || !at(p.top)) {
            var v = ct(p.element),
              _ = v[0],
              b = v[1],
              y = v[2],
              C = v[3],
              N = v[4],
              F = v[5],
              O = C + p.top,
              A = y + p.left;
            (A = q(A, 0, N - _)),
              (O = q(O, 0, F - b)),
              (at(y - A) && at(C - O)) ||
                (p.element.scrollTo({ left: A, top: O, behavior: n }),
                m || (Z("Scrolling:"), (m = !0)),
                Z(
                  "- " +
                    p.top +
                    "," +
                    p.left +
                    " => " +
                    O +
                    ", " +
                    A +
                    ", behavior: " +
                    n,
                  p.element
                ));
          }
        }
      }
      function ct(t) {
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
      var ft,
        gt = (function () {
          function t(t, e, n) {
            (this.m_rgChildren = []),
              (this.m_iActiveChild = -1),
              (this.m_bChildrenSorted = !1),
              (this.m_bAutoFocusChild = !1),
              (this.m_bFocused = !1),
              (this.m_FocusCallbackList = new _.a()),
              (this.m_bFocusWithin = !1),
              (this.m_FocusWithinCallbackList = new _.a()),
              (this.m_ActionDescriptionsChangedCallbackList = new _.a()),
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
            (t.prototype.OnUnmount = function () {
              var t;
              (null === (t = this.m_Properties) || void 0 === t
                ? void 0
                : t.retainFocus) &&
                this.PropagateRetainFocusParentToChildren(
                  this.m_RetainFocusParent
                ),
                this.m_bFocused &&
                  (this.m_RetainFocusParent
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
              return !!n && (this.m_Tree.TransferFocus(t, n, K(e)), !0);
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
              return !!n && (this.m_Tree.TransferFocus(t, n, K(e)), !0);
            }),
            (t.prototype.FindFocusableDescendant = function (t) {
              var e = K(t),
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
                    var f = p == pt.BACKWARD ? this.m_rgChildren.length - 1 : 0;
                    s = this.FindClosestChildInNextAxiallyAlignedSet(
                      d,
                      p,
                      t,
                      h,
                      f,
                      this.m_rgChildren[f].GetBoundingRect()
                    );
                  } else if (d != m[e]) {
                    f = p == pt.BACKWARD ? this.m_rgChildren.length : -1;
                    s = this.FindNextFocusableChildInDirection(f, p, t);
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
                n = Y(
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
                : H(this.m_element);
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
                var a = K(t);
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
                      st(e.Element, e.Element, "smooth", a, s),
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
                      return !x("y", r, t.GetBoundingRect());
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
                  if (!x("y", r, m.GetBoundingRect())) return null;
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
                  !(!r || x(m[t], r, n)) ||
                  (s.push({ child: e, overlap: j(t, o, n), dist: V(t, c, n) }),
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
              (this.m_RetainFocusParent = t),
                this.m_Properties.retainFocus ||
                  this.PropagateRetainFocusParentToChildren(t);
            }),
            (t.prototype.PropagateRetainFocusParentToChildren = function (t) {
              for (var e = 0; e < this.m_rgChildren.length; e++)
                this.m_rgChildren[e].SetRetainFocusParent(t);
            }),
            (t.prototype.OnFocusedDecendantRemoved = function (t) {
              (t.m_Properties.focusable = !1),
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
                    (void 0 === c && (c = Q ? ht.NoTransform : ht.Standard), a)
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
                        c == ht.NoTransform || c == ht.NoTransformSparseContent;
                    if (e) {
                      var d = l.getBoundingClientRect(),
                        p = !1,
                        m = Math.max(1.4 * d.height, 40);
                      (($ && performance.now() - $ < 500) ||
                        d.bottom < -m ||
                        d.top > window.innerHeight + m) &&
                        (p = !0);
                      var f = p ? "auto" : "smooth";
                      p && ($ = performance.now()),
                        t.Tree.Controller.BIsRestoringHistory() && (f = "auto"),
                        h
                          ? st(0, l, f)
                          : l.scrollIntoView({ behavior: f, block: "nearest" });
                    } else
                      h
                        ? st(0, l, "auto")
                        : l.scrollIntoView({
                            behavior: "auto",
                            block: "nearest",
                            inline: "nearest",
                          });
                  }
                })(this, e),
                this.m_Tree.OnChildActivated(t);
            }),
            Object(r.c)([v.a], t.prototype, "OnDOMFocus", null),
            Object(r.c)([v.a], t.prototype, "OnDOMBlur", null),
            Object(r.c)([v.a], t.prototype, "OnNavigationEvent", null),
            t
          );
        })(),
        vt = "GamepadInput";
      function _t(t) {
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
      })(ft || (ft = {}));
      var bt = (function () {
        function t(t) {
          var e = this;
          (this.m_bIsGamepadInputExternallyControlled = !1),
            (this.m_NavigationController = t),
            _t("BrowserView.RegisterForMessageFromParent") &&
            _t("BrowserView.PostMessageToParent")
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
            var e = ft.Basic;
            window.bSupportsGamepadUI && (e = ft.Full),
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
                (this.m_wrappedTree = t),
                  t.OnActivateCallbacks.Register(this.OnWrappedTreeActivated),
                  t.BIsActive() && this.OnWrappedTreeActivated(),
                  t.SetOnUnhandledButtonCallback(
                    this.OnWrappedTreeUnhandledButton
                  );
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
              Object(r.c)([v.a], e.prototype, "OnWrappedTreeActivated", null),
              Object(r.c)(
                [v.a],
                e.prototype,
                "OnWrappedTreeUnhandledButton",
                null
              ),
              e
            );
          })(gt));
      var Ft = "VirtualKeyboardMessage";
      function Ot(t) {
        return t && t.type === Ft;
      }
      var At,
        Rt = (function () {
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
              _t("BrowserView.PostMessageToParent")
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
            Object(r.c)([v.a], t.prototype, "OnBrowserViewMessage", null),
            Object(r.c)([v.a], t.prototype, "OnMessage", null),
            t
          );
        })(),
        St = n("8+ko"),
        Tt = n.n(St);
      function Dt(t) {
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
              class: Tt.a.FocusRing,
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
      function It(t) {
        return !!t.is_repeat;
      }
      function wt(t) {
        return t ? Function("event", t) : null;
      }
      function Et() {
        return !0;
      }
      function Pt(t) {
        return "BlockMovement" == t
          ? Et
          : "RepeatNavigationBoundary" == t
          ? It
          : t
          ? Function("detail", t)
          : null;
      }
      function Lt(t) {
        this.click(), t.stopPropagation();
      }
      function Mt(t) {
        s()(this).find("a")[0].click();
      }
      function Bt(t) {
        var e = t.currentTarget;
        if (!I(e)) return !1;
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
      })(At || (At = {}));
      var Gt = new Rt(),
        kt = !1,
        Wt = null,
        Ut = null;
      function xt(t) {
        kt ||
          ((Wt = new W()),
          (window.legacyWebFocusNavController = Wt),
          new bt(Wt).BIsGamepadInputExternallyControlled() ||
            Wt.RegisterInputSource(t),
          (function (t) {
            s()("html").addClass("gpnav_active");
            var e = s()("body"),
              n = t.NewGamepadNavigationTree("legacy"),
              o = Dt(e);
            (n.Root.m_FocusRing = o),
              n.Root.SetProperties({
                scrollIntoViewType: ht.NoTransformSparseContent,
              }),
              (window.__nav_tree_root = n),
              Vt.set(document.body, n.Root),
              Yt(document.body, n.Root),
              qt(void 0, !0),
              t.RegisterGamepadNavigationTree(n, !1),
              s()(document.body).on("vgp_onbuttondown", function (t) {
                n.HandleButtonDownEventAsLogicalEvent(t.originalEvent);
              }),
              h(document.body, Bt),
              new MutationObserver(jt).observe(document.body, {
                childList: !0,
                subtree: !0,
              }),
              (i = !0),
              (Q = i);
            var i;
          })(Wt)),
          (kt = !0);
      }
      function jt(t) {
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
          i.length && qt(s()(i)), r.length && Jt(s()(r));
        }
      }
      var Vt = new WeakMap(),
        Ht = new WeakMap(),
        Kt = [];
      function Yt(t, e) {
        if (e instanceof gt) {
          var n = e.GetDepth();
          Kt[n] || (Kt[n] = []), Kt[n].push([t, e]);
        }
        Vt.set(t, e);
      }
      function Xt(t, e) {
        var n = Ht.has(t) ? Ht.get(t) : [];
        n.push(e), Ht.set(t, n);
      }
      function zt(t) {
        return "jquery" in t
          ? Vt.get(t[0]) || At.Unknown
          : Vt.get(t) || At.Unknown;
      }
      function Jt(t) {
        t.find("*")
          .addBack()
          .each(function () {
            var t;
            null === (t = Ht.get(this)) ||
              void 0 === t ||
              t.forEach(function (t) {
                return t();
              }),
              Vt.delete(this),
              Ht.delete(this),
              s()(this).attr("data-nav-modal") && ee();
          });
      }
      function qt(t, e) {
        void 0 === e && (e = !1);
        performance.now();
        var n =
          "a,button,textarea,input:not(input[type=hidden]),label:not([for]),[data-panel],[data-react-nav-root],[data-nav-modal]";
        s()(n, t)
          .addBack(n)
          .each(function () {
            var t;
            (function (t) {
              return "jquery" in t ? Vt.has(t[0]) : Vt.has(t);
            })((t = this)) || $t(t);
          }),
          (function () {
            for (var t = Kt.length - 1; t >= 0; t--)
              if (Kt[t])
                for (var e = 0, n = Kt[t]; e < n.length; e++) {
                  var o = n[e],
                    i = o[0],
                    r = o[1];
                  Xt(i, r.Tree.RegisterNavigationItem(r, i));
                }
            Kt = [];
          })();
      }
      function Zt(t) {
        Jt(s()(t)), qt(s()(t));
      }
      function Qt(t) {
        var e = s()(t.Element);
        return (
          !e.data("gpFocusDisabled") &&
          e.is(":visible") &&
          "hidden" != e.css("visibility") &&
          ((e.outerWidth() > 0 && e.outerHeight() > 0) ||
            "hidden" !== e.css("overflow"))
        );
      }
      function $t(t) {
        var e,
          n = s()(t),
          o = te(t);
        if (o instanceof Nt || o == At.InReactTree)
          return Yt(t, At.InReactTree), At.InReactTree;
        var a = o.Tree,
          u = n.data("reactNavRoot")
            ? new Nt(n.data("reactNavRoot"), o)
            : a.CreateNode(o, o.m_FocusRing),
          d = n.data("panel") || {};
        if (
          (s()(t).attr("data-nav-modal") &&
            (function (t) {
              Ut &&
                (Object(g.a)(
                  !1,
                  "Creating a new modal nav tree while one already exists. A modal opening another modal is not currently supported."
                ),
                ee());
              Ut = Wt.NewGamepadNavigationTree("modal_dialog");
              var e = Dt(s()("body"));
              (Ut.Root.m_FocusRing = e),
                Ut.Root.SetProperties({}),
                Yt(t, Ut.Root),
                qt(t),
                h(Ut.Root.m_element, function (t) {
                  return t.stopPropagation(), !1;
                }),
                Wt.RegisterGamepadNavigationTree(Ut, !1);
            })(t),
          "A" == t.tagName || "BUTTON" == t.tagName || "LABEL" == t.tagName)
        )
          (d.focusable = !0), (d.clickOnActivate = !0);
        else if ("INPUT" == t.tagName)
          switch (((d.focusable = !0), t.getAttribute("type"))) {
            case "checkbox":
              d.clickOnActivate = !0;
              break;
            case "text":
            case "password":
              d.enableVirtualKeyboard = !0;
          }
        else
          "TEXTAREA" == t.tagName &&
            ((d.focusable = !0), (d.enableVirtualKeyboard = !0));
        var m = d["flow-children"];
        delete d["flow-children"];
        var f = d.clickOnActivate,
          v = d.maintainX,
          _ = d.maintainY,
          b = d.enableVirtualKeyboard,
          y = d.onOKActionDescription,
          C = d.onCancelActionDescription,
          N = d.onSecondaryActionDescription,
          F = d.onOptionsActionDescription,
          O = d.onMenuActionDescription,
          A = d.actionDescriptionMap,
          R = d.onOKButton,
          S = d.onCancelButton,
          T = d.onSecondaryButton,
          D = d.onOptionsButton,
          I = d.onMenuButton,
          w = d.onMoveUp,
          E = d.onMoveRight,
          P = d.onMoveDown,
          L = d.onMoveLeft,
          M = d.bFocusRingRoot,
          B = d.type,
          G = Object(r.f)(d, [
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
            "onMoveUp",
            "onMoveRight",
            "onMoveDown",
            "onMoveLeft",
            "bFocusRingRoot",
            "type",
          ]),
          k = wt(R),
          W = wt(S),
          U = wt(T),
          x = wt(D),
          j = wt(I);
        B || (B = "Panel"),
          "PanelGroup" == B &&
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
              { onOKButtonHandler: k, onCancelButtonHandler: W, navNode: u },
              G
            )),
            (k = e.onOKButtonHandler),
            (W = e.onCancelButtonHandler)),
          k &&
            Xt(
              n[0],
              (function (t, e) {
                return l(t, "vgp_onok", p(e));
              })(n[0], k)
            ),
          W &&
            Xt(
              n[0],
              (function (t, e) {
                return l(t, "vgp_oncancel", p(e));
              })(n[0], W)
            ),
          U &&
            N &&
            Xt(
              n[0],
              (function (t, e) {
                return l(t, "vgp_onsecondaryaction", p(e));
              })(n[0], U)
            ),
          x &&
            F &&
            Xt(
              n[0],
              (function (t, e) {
                return l(t, "vgp_onoptions", p(e));
              })(n[0], x)
            ),
          j &&
            O &&
            Xt(
              n[0],
              (function (t, e) {
                return l(t, "vgp_onmenu", p(e));
              })(n[0], j)
            );
        var V = (function (t, e, n, o) {
            var i = {};
            return (
              t && (i.onMoveUp = Pt(t)),
              e && (i.onMoveRight = Pt(e)),
              n && (i.onMoveDown = Pt(n)),
              o && (i.onMoveLeft = Pt(o)),
              i
            );
          })(w, E, P, L),
          H = m
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
              })(m)
            : ut.NONE;
        H != ut.NONE && (G.layout = H),
          v
            ? (G.navEntryPreferPosition = lt.MAINTAIN_X)
            : _ && (G.navEntryPreferPosition = lt.MAINTAIN_Y),
          f &&
            (!1 !== G.focusable && (G.focusable = !0),
            n.on("vgp_onok", "firstChild" === f ? Mt : Lt),
            Xt(t, function () {
              n.off("vgp_onok");
            })),
          b &&
            (n.on("vgp_onok.vkbindings", function () {
              return Gt.ShowVirtualKeyboard();
            }),
            n.on("click.vkbindings", function () {
              return Gt.ShowVirtualKeyboard();
            }),
            n.on("blur.vkbindings", function () {
              document.hasFocus() &&
                document.activeElement != t &&
                Gt.HideVirtualKeyboard();
            }),
            Xt(t, function () {
              n.off(".vkbindings");
            })),
          G.focusable && void 0 === n.attr("tabIndex") && n.attr("tabIndex", 0),
          G.focusable &&
            u.FocusCallbackList.Register(function (e) {
              return (function (t, e) {
                e ? s()(t).addClass("gpfocus") : s()(t).removeClass("gpfocus");
              })(t, e);
            }),
          M &&
            ((u.m_FocusRing = Dt(n)),
            "static" == n.css("position") && n.css("position", "relative"));
        var K = (function (t) {
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
            onOKActionDescription: y,
            onCancelActionDescription: C,
            onSecondaryActionDescription: N,
            onOptionsActionDescription: F,
            onMenuActionDescription: O,
            actionDescriptionMap: A,
          }),
          Y = Object(r.a)(
            Object(r.a)({ fnCanTakeFocus: Qt, actionDescriptionMap: K }, V),
            G
          );
        return u.SetProperties(Y), Yt(t, u), u;
      }
      function te(t) {
        var e = t.parentElement;
        if (!e) return console.error("no parent"), null;
        var n = zt(e);
        if (n == At.Unknown)
          n = (function (t) {
            var e = !1;
            switch (t.tagName) {
              case "A":
              case "INPUT":
              case "TEXTAREA":
                e = !0;
                break;
              case "DIV":
                if (H(t) != ut.COLUMN) e = !0;
                else {
                  var n = H(t.parentElement);
                  (n != ut.ROW && n != ut.ROW_REVERSE) || (e = !0);
                }
            }
            var o = At.NotNeeded;
            return e ? (o = $t(t)) : Yt(t, o), o;
          })(e);
        else if (n == At.InReactTree) return n;
        return n instanceof gt ? n : te(e);
      }
      function ee(t) {
        Ut && (Wt.UnregisterGamepadNavigationTree(Ut), (Ut = null)),
          t && s()(t).removeAttr("data-nav-modal");
      }
      Object.assign(window, {
        InstrumentFocusElements: qt,
        ForceUpdateFocusElements: Zt,
        GPNavFocusChild: function (t) {
          var e = zt(t[0]);
          return (
            e instanceof gt || (e = te(t[0])),
            e instanceof gt && e.BTakeFocus(i.APPLICATION),
            !1
          );
        },
        GPOnShowingModalWindow: function (t) {
          var e = t;
          return (
            s()(e).attr("data-nav-modal", "true"),
            Zt(e),
            function () {
              return ee(e);
            }
          );
        },
        GPShowVirtualKeyboard: function (t) {
          void 0 === t && (t = !0);
          t ? Gt.ShowVirtualKeyboard() : Gt.HideVirtualKeyboard();
        },
      });
    },
  },
]);

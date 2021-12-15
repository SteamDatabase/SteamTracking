/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonpLegacyWeb = window.webpackJsonpLegacyWeb || []).push([
  [0],
  {
    biHH: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, "InitializeGamepadNavigation", function () {
          return ut;
        });
      var i,
        o,
        r = n("mrSG"),
        a = n("xeH2"),
        s = n.n(a),
        c = n("rHSA");
      !(function (t) {
        (t[(t.GAMEPAD = 0)] = "GAMEPAD"),
          (t[(t.KEYBOARD = 1)] = "KEYBOARD"),
          (t[(t.APPLICATION = 2)] = "APPLICATION"),
          (t[(t.BROWSER = 3)] = "BROWSER");
      })(o || (o = {}));
      var u =
        (((i = {})[c.a.OK] = "vgp_onok"),
        (i[c.a.CANCEL] = "vgp_oncancel"),
        (i[c.a.SECONDARY] = "vgp_onsecondaryaction"),
        (i[c.a.OPTIONS] = "vgp_onoptions"),
        (i[c.a.START] = "vgp_onmenu"),
        i);
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
        return l(t, "vgp_oncancel", m(e));
      }
      function p(t, e) {
        return l(t, "vgp_ondirection", m(e));
      }
      function d(t, e, n) {
        if (null !== t) {
          var i = new t.ownerDocument.defaultView.CustomEvent(e, {
            bubbles: !0,
            cancelable: !0,
            detail: n,
          });
          t.dispatchEvent(i);
        }
      }
      function m(t) {
        return function (e) {
          !1 !== t(e) && e.stopPropagation();
        };
      }
      var g,
        v = n("XxJJ"),
        f = "GamepadInput";
      !(function (t) {
        (t[(t.PageUnloading = 0)] = "PageUnloading"),
          (t[(t.Unknown = 1)] = "Unknown"),
          (t[(t.None = 2)] = "None"),
          (t[(t.Basic = 3)] = "Basic"),
          (t[(t.Full = 4)] = "Full");
      })(g || (g = {}));
      var _ = (function () {
        function t(t) {
          var e = this;
          (this.m_NavigationController = t),
            "undefined" == typeof SteamClient ||
            void 0 === SteamClient.BrowserView ||
            void 0 === SteamClient.BrowserView.RegisterForMessageFromParent ||
            (SteamClient.BrowserView.PostMessageToParent, 1)
              ? (this.m_postMessage = new b(window.top))
              : (this.m_postMessage = new y()),
            this.m_postMessage.RegisterForMessage(this.OnMessage),
            h(window, function () {
              return e.PostButtonPressToSteam(c.a.CANCEL);
            }),
            l(window, "vgp_onbuttondown", function (t) {
              return e.PostButtonDownToSteam(t);
            }),
            window.addEventListener("beforeunload", this.PostPageUnloading),
            t.FocusChangedCallbacks.Register(this.OnFocusChanged),
            this.UpdateActionDescriptions({}),
            this.SendGameInputState("CGamepadWebBridgeClient constructor");
        }
        return (
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
            var e = g.Basic;
            window.bSupportsGamepadUI && (e = g.Full),
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
          (t.prototype.PostButtonDownToSteam = function (t) {
            switch (t.detail.button) {
              case c.a.STEAM_GUIDE:
              case c.a.STEAM_QUICK_MENU:
                this.PostButtonPressToSteam(t.detail.button);
            }
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
      var b = (function () {
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
                { gamepadMessage: f, args: e },
                "*"
              );
            }),
            (t.prototype.OnMessage = function (t) {
              var e = null == t ? void 0 : t.data;
              if (e && e.gamepadMessage == f && e.args) {
                var n = JSON.parse(e.args);
                this.m_fnCallback(n);
              }
            }),
            Object(r.c)([v.a], t.prototype, "OnMessage", null),
            t
          );
        })(),
        y = (function () {
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
              SteamClient.BrowserView.PostMessageToParent(f, e);
            }),
            (t.prototype.OnMessage = function (t, e) {
              if (t == f) {
                var n = JSON.parse(e);
                this.m_fnCallback(n);
              }
            }),
            Object(r.c)([v.a], t.prototype, "OnMessage", null),
            t
          );
        })(),
        C = n("Kw0F"),
        O = n("r64O");
      function N(t) {
        return null != t && void 0 !== t.focus;
      }
      function A(t) {
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
      function R(t, e) {
        if ("x" === e) {
          if (t.scrollWidth <= t.clientWidth) return !1;
        } else if (t.scrollHeight <= t.clientHeight) return !1;
        var n = t.ownerDocument.defaultView.getComputedStyle(t),
          i = "x" === e ? n.overflowX : n.overflowY;
        return "auto" === i || "scroll" === i;
      }
      c.c;
      var S = n("qiKp"),
        E = (function () {
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
                (n && Object(O.a)(n == t.NavKey, "navkey mismatch"),
                t.SetActiveChild(i),
                o && o.length)
              ) {
                var r = t.GetChildren()[0],
                  a = new Map();
                r.forEach(function (t) {
                  t.NavKey && a.set(t.NavKey, t);
                });
                for (var s = 0, c = o; s < c.length; s++) {
                  var u = c[s];
                  if (u.sNavKey) {
                    var l = a.get(u.sNavKey);
                    l && this.RestoreSerializedNavNode(l, u);
                  }
                }
                if (-1 != i && o[i].sNavKey) {
                  var h = a.get(o[i].sNavKey);
                  h && t.SetActiveChild(r.indexOf(h));
                }
                for (var p = 0, d = 0; p < r.length && d < o.length; ) {
                  for (; p < r.length && r[p].NavKey; ) p++;
                  for (; d < o.length && o[d].sNavKey; ) d++;
                  if (p >= r.length || d >= o.length) break;
                  this.RestoreSerializedNavNode(r[p], o[d]), p++, d++;
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
            Object(r.d)(e, t),
            (e.prototype.PushState = function () {
              this.m_rgHistory.push(this.SerializeNavNode(this.m_root));
            }),
            (e.prototype.PopState = function () {
              this.m_rgHistory.length &&
                (this.RestoreSerializedNavNode(
                  this.m_root,
                  this.m_rgHistory.pop()
                ),
                this.m_root.BTakeFocus(o.APPLICATION));
            }),
            e
          );
        })(E),
        I = { x: "y", y: "x" };
      var F,
        T = (function (t) {
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
        w = [
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
      })(F || (F = {}));
      var L = (function () {
          function t(t, e) {
            (this.m_fnIdGenerator = null),
              (this.m_sName = t),
              (this.m_fnIdGenerator = e),
              P.Get().RegisterLogName(t);
          }
          return (
            (t.prototype.Debug = function () {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
              this.Log.apply(this, Object(r.g)([F.Debug], t));
            }),
            (t.prototype.Info = function () {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
              this.Log.apply(this, Object(r.g)([F.Info], t));
            }),
            (t.prototype.Warning = function () {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
              this.Log.apply(this, Object(r.g)([F.Warning], t));
            }),
            (t.prototype.Error = function () {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
              this.Log.apply(this, Object(r.g)([F.Error], t));
            }),
            (t.prototype.Assert = function (t) {
              for (var e = [], n = 1; n < arguments.length; n++)
                e[n - 1] = arguments[n];
              t ||
                this.Log.apply(
                  this,
                  Object(r.g)([F.Error, "Assertion failed:"], e)
                );
            }),
            (t.prototype.Log = function (t) {
              for (var e, n, i = [], o = 1; o < arguments.length; o++)
                i[o - 1] = arguments[o];
              if (t != F.Debug || P.Get().IsDebugLogEnabled(this.m_sName)) {
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
                var c = P.Get().IncludeBacktraceInLog;
                k.apply(void 0, Object(r.g)([t, c, a, this.m_sName], i));
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
        P = (function () {
          function t() {
            (this.m_Storage = null),
              (this.m_rgLogNames = null),
              (this.m_setEnabledDebugLogs = new Set()),
              (this.m_bIncludeBacktraceInLog = !1),
              (this.m_SettingsChangedCallback = new S.a()),
              (this.m_bLoading = !1),
              (this.m_Storage = new T()),
              (this.m_rgLogNames = w.slice()),
              this.LoadSettings();
          }
          return (
            (t.prototype.LogAsLogManager = function () {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
              k.apply(
                void 0,
                Object(r.g)(
                  [
                    F.Info,
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
                return Object(r.e)(this, function (i) {
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
                        (this.m_setEnabledDebugLogs = new Set(t ? w : [])),
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
      function M(t) {
        for (var e = 0, n = 0; n < t.length; n++)
          e = t.charCodeAt(n) + ((e << 5) - e);
        return [(e >> 0) & 255, (e >> 8) & 255, (e >> 16) & 255];
      }
      function B(t) {
        return (299 * t[0] + 587 * t[1] + 114 * t[2]) / 1e3 >= 128;
      }
      function G(t) {
        switch (t) {
          case F.Debug:
            return String.fromCodePoint(128027);
          case F.Info:
            return String.fromCodePoint(8505);
          case F.Warning:
            return String.fromCodePoint(9888);
          case F.Error:
            return String.fromCodePoint(128165);
        }
      }
      function k(t, e, n, i) {
        for (var o = [], a = 4; a < arguments.length; a++)
          o[a - 4] = arguments[a];
        var s = M(i),
          c = s.map(function (t, e) {
            return Math.max(
              0,
              Math.min(255, 255 * (0.8 * (t / 255 - 0.5) + 0.15))
            );
          }),
          u = B(c),
          l = n;
        e && (l = G(t) + " " + l);
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
          o
        );
        if (e)
          console.groupCollapsed.apply(console, h),
            console.trace("Callstack"),
            console.groupEnd();
        else
          switch (t) {
            case F.Debug:
            case F.Info:
              console.log.apply(console, h);
              break;
            case F.Warning:
              console.warn.apply(console, h);
              break;
            case F.Error:
              console.error.apply(console, h);
          }
      }
      var x,
        W,
        j,
        U,
        K = new L("FocusNavigationMovement").Debug;
      !(function (t) {
        (t[(t.NONE = 0)] = "NONE"),
          (t[(t.COLUMN = 1)] = "COLUMN"),
          (t[(t.ROW = 2)] = "ROW"),
          (t[(t.COLUMN_REVERSE = 3)] = "COLUMN_REVERSE"),
          (t[(t.ROW_REVERSE = 4)] = "ROW_REVERSE"),
          (t[(t.GRID = 5)] = "GRID"),
          (t[(t.GEOMETRIC = 6)] = "GEOMETRIC");
      })(x || (x = {})),
        (function (t) {
          (t[(t.FIRST = 0)] = "FIRST"),
            (t[(t.MAINTAIN_X = 1)] = "MAINTAIN_X"),
            (t[(t.MAINTAIN_Y = 2)] = "MAINTAIN_Y"),
            (t[(t.PREFERRED_CHILD = 3)] = "PREFERRED_CHILD");
        })(W || (W = {})),
        (function (t) {
          (t[(t.LAZY = 0)] = "LAZY"),
            (t[(t.START = 1)] = "START"),
            (t[(t.CENTER = 2)] = "CENTER"),
            (t[(t.END = 3)] = "END"),
            (t[(t.NEAREST = 4)] = "NEAREST"),
            (t[(t.NONE = 5)] = "NONE");
        })(j || (j = {})),
        (function (t) {
          (t[(t.INVALID = 0)] = "INVALID"),
            (t[(t.FORWARD = 1)] = "FORWARD"),
            (t[(t.BACKWARD = 2)] = "BACKWARD");
        })(U || (U = {}));
      var V = (function () {
        function t(t, e, n) {
          (this.m_rgChildren = []),
            (this.m_iActiveChild = -1),
            (this.m_bChildrenSorted = !1),
            (this.m_bAutoFocusChild = !1),
            (this.m_bFocused = !1),
            (this.m_FocusCallbackList = new S.a()),
            (this.m_ActionDescriptionsChangedCallbackList = new S.a()),
            (this.m_rgNavigationHandlers = []),
            (this.m_rgFocusHandlers = []),
            (this.m_Tree = t),
            (this.m_Parent = e),
            (this.m_FocusRing = n),
            (this.m_nDepth = e ? e.m_nDepth + 1 : 0);
        }
        return (
          (t.prototype.CreateHandle = function () {
            return new Z(this);
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
                : Object(O.a)(
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
                    ? this.BTakeFocus(o.APPLICATION)
                    : (this.m_Parent.m_bAutoFocusChild = !0));
            }
          }),
          (t.prototype.OnUnmount = function () {
            this.m_bFocused && this.m_Tree.TransferFocus(o.APPLICATION, null),
              this.UnregisterDOMEvents(),
              this.m_Parent
                ? this.m_Parent.RemoveChild(this)
                : Object(O.a)(
                    this == this.m_Tree.Root,
                    "Only root should have no parent"
                  );
          }),
          (t.prototype.RegisterDOMEvents = function () {
            var t = this;
            !this.m_rgNavigationHandlers.length &&
              (this.GetLayout() ||
                this.m_Properties.onMoveUp ||
                this.m_Properties.onMoveRight ||
                this.m_Properties.onMoveDown ||
                this.m_Properties.onMoveLeft) &&
              this.m_rgNavigationHandlers.push(
                p(this.m_element, this.OnNavigationEvent)
              ),
              this.m_rgChildren.length > 0 &&
                (this.m_fnUnregisterFocusIn ||
                  (this.m_element.addEventListener("focusin", this.OnFocusIn),
                  (this.m_fnUnregisterFocusIn = function () {
                    return t.m_element.removeEventListener(
                      "focusin",
                      t.OnFocusIn
                    );
                  }))),
              (this.m_Properties.focusable || 0 == this.m_rgChildren.length) &&
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
            Object(O.a)(-1 !== e, "Child was not found to remove"),
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
                    this.m_Tree.OnChildActivated(o.BROWSER);
                  break;
                }
                if (n == this.m_element) {
                  (this.m_iActiveChild = -1),
                    this.m_Tree.OnChildActivated(o.BROWSER);
                  break;
                }
                n = n.parentElement;
              }
            }
          }),
          (t.prototype.OnDOMFocus = function (t) {
            this.m_bFocused || this.m_Tree.TransferFocus(o.BROWSER, this);
          }),
          (t.prototype.OnDOMBlur = function (t) {
            this.m_bFocused && this.m_Tree.TransferFocus(o.BROWSER, null);
          }),
          (t.prototype.RequestFocus = function () {
            this.m_Parent &&
              (this.m_Parent.SetActiveChild(this),
              this.m_Parent.RequestFocus());
          }),
          (t.prototype.BTakeFocus = function (t, e) {
            var n = (function (t) {
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
              })(e),
              i = this.m_Properties,
              r = i.focusable,
              a = i.focusableIfNoChildren,
              s = i.childFocusDisabled,
              u = i.fnCanTakeFocus;
            if (u && !u(this)) return !1;
            if (r || (a && s) || (a && 0 == this.m_rgChildren.length))
              return this.m_Tree.TransferFocus(t, this, n), !0;
            if (s) return !1;
            if (this.m_rgChildren.length) {
              this.EnsureChildrenSorted();
              var l = this.m_iActiveChild;
              if (l < 0 || l >= this.m_rgChildren.length) {
                l = 0;
                var h = this.GetLayout();
                (h != x.ROW_REVERSE && h != x.COLUMN_REVERSE) ||
                  (l = this.m_rgChildren.length - 1);
              }
              var p = this.m_Properties.navEntryPreferPosition;
              if (
                (p == W.MAINTAIN_X && "y" == n) ||
                (p == W.MAINTAIN_Y && "x" == n)
              ) {
                var d = I[n],
                  m = this.m_Tree.GetLastFocusedMovementRect(d);
                K("Taking focus while preserving " + W[p] + ", node:", m);
                var g = this.ComputeRelativeDirection(e, x.GRID);
                if (m) {
                  var v = g == U.BACKWARD ? this.m_rgChildren.length - 1 : 0;
                  if (
                    this.BFocusClosestChildInNextAxiallyAlignedSet(
                      d,
                      g,
                      e,
                      m,
                      v,
                      this.m_rgChildren[v].GetBoundingRect()
                    )
                  )
                    return !0;
                }
              } else if (p == W.PREFERRED_CHILD)
                for (var f = 0, _ = this.m_rgChildren; f < _.length; f++) {
                  var b = _[f];
                  if (b.BWantsPreferredFocus() && b.BTakeFocus(o.GAMEPAD, e))
                    return !0;
                }
              return (
                !!this.BFocusNextChildInDirection(t, l - 1, U.FORWARD, e) ||
                !!this.BFocusNextChildInDirection(t, l, U.BACKWARD, e) ||
                (!!a && (this.m_Tree.TransferFocus(t, this, n), !0))
              );
            }
            return !1;
          }),
          (t.prototype.GetLayout = function () {
            return this.m_Properties.layout
              ? this.m_Properties.layout
              : this.m_rgChildren.length < 2
              ? x.NONE
              : nt(this.m_element);
          }),
          (t.prototype.OnNavigationEvent = function (t) {
            var e = t.detail.button;
            if (this.BTryInternalNavigation(e)) return !0;
            var n = this.m_Properties,
              i = n.onMoveUp,
              o = n.onMoveRight,
              r = n.onMoveDown,
              a = n.onMoveLeft,
              s = !1;
            switch (e) {
              case c.a.DIR_UP:
                i && (s = i(t.detail));
                break;
              case c.a.DIR_RIGHT:
                o && (s = o(t.detail));
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
            var e = this.GetLayout(),
              n = this.ComputeRelativeDirection(t, e);
            if (
              (K(
                "Handling navigation event " +
                  c.a[t] +
                  " - " +
                  x[e] +
                  " - " +
                  U[n],
                this.m_element
              ),
              n == U.INVALID)
            )
              return !1;
            if (this.m_Properties.focusable && this.m_bFocused)
              return K("Skipping navigation within focused element"), !1;
            if ((this.EnsureChildrenSorted(!0), e == x.GRID))
              return this.BPerformGridNavigation(this.m_iActiveChild, n, t);
            var i = this.m_iActiveChild;
            return (
              -1 == i && (i = n == U.FORWARD ? -1 : this.m_rgChildren.length),
              this.BFocusNextChildInDirection(o.GAMEPAD, i, n, t)
            );
          }),
          (t.prototype.ComputeRelativeDirection = function (t, e) {
            var n = e == x.ROW_REVERSE || e == x.COLUMN_REVERSE;
            switch (e) {
              case x.ROW:
              case x.ROW_REVERSE:
                switch (t) {
                  case c.a.DIR_LEFT:
                    return n ? U.FORWARD : U.BACKWARD;
                  case c.a.DIR_RIGHT:
                    return n ? U.BACKWARD : U.FORWARD;
                  default:
                    return U.INVALID;
                }
              case x.COLUMN:
              case x.COLUMN_REVERSE:
                switch (t) {
                  case c.a.DIR_UP:
                    return n ? U.FORWARD : U.BACKWARD;
                  case c.a.DIR_DOWN:
                    return n ? U.BACKWARD : U.FORWARD;
                  default:
                    return U.INVALID;
                }
              case x.GRID:
                switch (t) {
                  case c.a.DIR_LEFT:
                  case c.a.DIR_UP:
                    return n ? U.FORWARD : U.BACKWARD;
                  case c.a.DIR_RIGHT:
                  case c.a.DIR_DOWN:
                    return n ? U.BACKWARD : U.FORWARD;
                  default:
                    return U.INVALID;
                }
              default:
                return U.INVALID;
            }
          }),
          (t.prototype.AdvanceIndex = function (t, e) {
            return t + (e == U.FORWARD ? 1 : -1);
          }),
          (t.prototype.BFocusNextChildInDirection = function (t, e, n, i) {
            for (
              var o = n == U.FORWARD ? 1 : -1, r = e + o;
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
              var i = e == U.FORWARD ? 1 : -1, o = t;
              o >= 0 && o < this.m_rgChildren.length;
              o += i
            )
              if (n(this.m_rgChildren[o], o)) return o;
            return -1;
          }),
          (t.prototype.BPerformGridNavigation = function (t, e, n) {
            var i = n == c.a.DIR_UP || n == c.a.DIR_DOWN,
              r = this.GetLastFocusElement();
            if (!r || r == this.m_element)
              return (
                !!this.BFocusNextChildInDirection(
                  o.GAMEPAD,
                  this.m_iActiveChild,
                  e,
                  n
                ) ||
                this.BFocusNextChildInDirection(
                  o.GAMEPAD,
                  this.m_iActiveChild,
                  e == U.FORWARD ? U.BACKWARD : U.FORWARD,
                  n
                )
              );
            var a = (this.GetActiveChild() || this).GetBoundingRect();
            if (n == c.a.DIR_UP || n == c.a.DIR_DOWN) {
              var s = this.m_Tree.GetLastFocusedMovementRect("x");
              s && ((a.x = s.x), (a.width = s.width));
            }
            if (!i) {
              var u = !1;
              return (
                -1 !=
                  this.ScanChildren(this.AdvanceIndex(t, e), e, function (t) {
                    return Q("y", a, t.GetBoundingRect())
                      ? t.BTakeFocus(o.GAMEPAD, n)
                      : ((u = !0), !0);
                  }) && !u
              );
            }
            var l = this.ScanChildren(this.AdvanceIndex(t, e), e, function (t) {
              return !Q("y", a, t.GetBoundingRect());
            });
            if (-1 == l) return !1;
            var h = this.m_rgChildren[l].GetBoundingRect();
            return !!this.BFocusClosestChildInNextAxiallyAlignedSet(
              "x",
              e,
              n,
              a,
              l,
              h
            );
          }),
          (t.prototype.BFocusClosestChildInNextAxiallyAlignedSet = function (
            t,
            e,
            n,
            i,
            r,
            a
          ) {
            (!r || r < 0) && (r = 0);
            var s,
              c = [],
              u = { x: (s = i).x, y: s.y };
            this.ScanChildren(r, e, function (e) {
              var n = e.GetBoundingRect();
              return (
                !(!a || Q(I[t], a, n)) ||
                (c.push({ child: e, overlap: $(t, i, n), dist: tt(t, u, n) }),
                !1)
              );
            }),
              e == U.BACKWARD && c.reverse(),
              c.sort(function (t, e) {
                var n = e.overlap - t.overlap;
                return 0 != n ? n : t.dist - e.dist;
              });
            for (var l = 0, h = c; l < h.length; l++) {
              if (h[l].child.BTakeFocus(o.GAMEPAD, n)) return !0;
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
          Object(r.c)([v.a], t.prototype, "OnFocusIn", null),
          Object(r.c)([v.a], t.prototype, "OnDOMFocus", null),
          Object(r.c)([v.a], t.prototype, "OnDOMBlur", null),
          Object(r.c)([v.a], t.prototype, "OnNavigationEvent", null),
          t
        );
      })();
      function H(t, e) {
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
      function Y(t, e) {
        var n = e.elementToSnap,
          i = e.snapType,
          o = e.nMargin;
        if (i != j.NONE)
          for (
            var r = A(n),
              a = n.getBoundingClientRect(),
              s =
                "x" === t
                  ? { min: a.left * r, max: a.right * r }
                  : { min: a.top * r, max: a.bottom * r },
              c = i === j.CENTER ? -1 : 1,
              u = s.min - o * r,
              l = s.max + c * o * r,
              h = n.parentElement;
            null != h;
            h = h.parentElement
          )
            if (R(h, t)) {
              var p = A(h),
                d = h.getBoundingClientRect(),
                m =
                  "x" === t
                    ? { min: d.left * p, max: d.right * p }
                    : { min: d.top * p, max: d.bottom * p };
              if (!(i === j.LAZY && m.min <= u && m.max >= l)) {
                var g = { min: u - m.min, max: l - m.max },
                  v =
                    i === j.START
                      ? 0
                      : i === j.CENTER
                      ? 0.5
                      : i === j.END
                      ? 1
                      : Math.abs(g.min) <= Math.abs(g.max)
                      ? 0
                      : 1,
                  f = ((1 - v) * g.min + v * g.max) / p;
                "x" === t ? (h.scrollLeft += f) : (h.scrollTop += f);
              }
            }
      }
      var z;
      function X(t) {
        if (t.Element) {
          var e = H(t, "x"),
            n = H(t, "y");
          e && Y("x", e), n && Y("y", n);
        }
      }
      var J = new L("FocusNavigation").Debug,
        q = (function () {
          function t() {
            (this.m_rgGamepadInputSources = []),
              (this.m_rgGamepadNavigationTrees = []),
              (this.m_LastActiveNavTree = null),
              (this.m_LastActiveFocusNavTree = null),
              (this.m_bGlobalEventsInitialized = !1),
              (this.m_bSuppressGamepadInput = !1),
              (this.m_FocusChangedCallbacks = new S.a()),
              (this.m_mapUnhandledEventsCallbacks = new Map()),
              (this.m_navigationSource = Object(S.b)({
                eActivationSourceType: c.b.UNKNOWN,
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
              this.OnButtonDown(t, c.b.UNKNOWN, -1);
            }),
            (t.prototype.DispatchVirtualButtonClick = function (t) {
              this.OnButtonDown(t, c.b.UNKNOWN, -1),
                this.OnButtonUp(t, c.b.UNKNOWN, -1);
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
                var i = this.m_navigationSource.Value.eActivationSourceType;
                if (
                  !(
                    (i != c.b.GAMEPAD && i != c.b.KEYBOARD) ||
                    this.m_LastActiveNavTree.GetLastFocusedNode() ||
                    (e && this.m_LastActiveNavTree.TakeFocus(o.GAMEPAD),
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
                J(
                  "Ignoring button press - gamepad input is suppressed by parent window"
                );
              else {
                this.ChangeNavigationSource(e, n);
                var r = this.GetEventTarget(t, !0);
                J(
                  "Firing " +
                    c.a[t] +
                    " in tree " +
                    (null === (o = this.m_LastActiveNavTree) || void 0 === o
                      ? void 0
                      : o.id) +
                    " at ",
                  r
                ),
                  d(r, "vgp_onbuttondown", {
                    button: t,
                    source: e,
                    is_repeat: i,
                  });
              }
            }),
            (t.prototype.OnButtonUp = function (t, e, n) {
              this.m_bSuppressGamepadInput ||
                (this.ChangeNavigationSource(e, n),
                d(this.GetEventTarget(), "vgp_onbuttonup", {
                  button: t,
                  source: e,
                  is_repeat: !1,
                }));
            }),
            (t.prototype.OnNavigationTypeChange = function (t) {
              var e;
              if (
                (this.ChangeNavigationSource(t, -1),
                t == c.b.MOUSE || t == c.b.TOUCH)
              ) {
                var n = this.m_LastActiveNavTree.GetLastFocusedNode(),
                  i = (function (t) {
                    if (!N(t)) return !1;
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
                  e.TransferFocus(o.BROWSER, i);
              }
            }),
            (t.prototype.NewGamepadNavigationTree = function (t) {
              return new et(this, t);
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
                      o.APPLICATION,
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
              C.a(this.m_rgGamepadNavigationTrees, t),
                this.m_LastActiveNavTree == t &&
                  ((this.m_LastActiveNavTree = null),
                  this.SetActiveNavTree(null, !0));
            }),
            (t.prototype.OnGamepadNavigationTreeActivated = function (t, e, n) {
              void 0 === n && (n = !1),
                e != o.BROWSER
                  ? this.SetActiveNavTree(t, n)
                  : t != this.m_LastActiveFocusNavTree &&
                    J(
                      "Not activating nav tree " +
                        t.id +
                        ", browser initiated event"
                    );
            }),
            (t.prototype.BlurNavTree = function (t) {
              this.m_LastActiveNavTree == t && this.SetActiveNavTree(null, !0),
                C.a(this.m_rgGamepadNavigationTrees, t),
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
                  (n.OnDeactivate(), C.a(this.m_rgGamepadNavigationTrees, n)),
                  t ||
                    (this.m_rgGamepadNavigationTrees.length &&
                      (t = this.m_rgGamepadNavigationTrees[
                        this.m_rgGamepadNavigationTrees.length - 1
                      ]));
                var i = this.m_LastActiveFocusNavTree == t;
                t && C.a(this.m_rgGamepadNavigationTrees, t),
                  (this.m_LastActiveNavTree = t),
                  (t && t.BUseVirtualFocus()) ||
                    (this.m_LastActiveFocusNavTree = t),
                  J(
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
              var t = this;
              this.m_bGlobalEventsInitialized ||
                (p(window, function (e) {
                  document.body == document.activeElement &&
                    t.m_LastActiveNavTree &&
                    t.m_LastActiveNavTree.Root.BTakeFocus(o.GAMEPAD);
                }),
                (this.m_bGlobalEventsInitialized = !0));
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
                Object(O.a)(
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
              return this.InsertUnhandledEventCallback("vgp_onbuttondown", t);
            }),
            (t.prototype.InsertUnhandledEventCallback = function (t, e) {
              var n = this.m_mapUnhandledEventsCallbacks.get(t);
              return (
                void 0 === n &&
                  ((n = new S.a()),
                  this.m_mapUnhandledEventsCallbacks.set(t, n)),
                n.Register(e)
              );
            }),
            (t.prototype.FireUnhandledGamepadEventCallbacks = function (t) {
              var e = this.m_mapUnhandledEventsCallbacks.get(t.type);
              e && e.Dispatch(t);
            }),
            (t.prototype.SetSuppressGamepadInput = function (t) {
              this.m_bSuppressGamepadInput = t;
            }),
            (t.prototype.TakeFocusChangingIFrame = function () {
              window.focus();
              var t = this.m_LastActiveFocusNavTree || this.m_LastActiveNavTree;
              t && t.TakeFocus(o.APPLICATION);
            }),
            Object(r.c)([v.a], t.prototype, "OnButtonDown", null),
            Object(r.c)([v.a], t.prototype, "OnButtonUp", null),
            Object(r.c)([v.a], t.prototype, "OnNavigationTypeChange", null),
            t
          );
        })();
      var Z = (function () {
        function t(t) {
          (this.m_node = t), (this.m_History = new D(t));
        }
        return (
          (t.prototype.TakeFocus = function (t) {
            return this.m_node.BTakeFocus(t ? o.GAMEPAD : o.APPLICATION, t);
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
            X(this.m_node);
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
      function Q(t, e, n) {
        return "x" == t
          ? e.x + e.width > n.x && e.x < n.x + n.width
          : "y" == t
          ? e.y + e.height > n.y && e.y < n.y + n.height
          : (Object(O.a)(!1, "Invalid axis " + t), !1);
      }
      function $(t, e, n) {
        var i;
        return (
          "x" == t
            ? (i = Math.min(e.x + e.width, n.x + n.width) - Math.max(e.x, n.x))
            : "y" == t
            ? (i =
                Math.min(e.y + e.height, n.y + n.height) - Math.max(e.y, n.y))
            : (Object(O.a)(!1, "Invalid axis " + t), (i = 0)),
          i < 0 ? 0 : i
        );
      }
      function tt(t, e, n) {
        var i = e[t],
          o = (function (t, e) {
            return "x" == t
              ? { min: e.x, max: e.x + e.width }
              : "y" == t
              ? { min: e.y, max: e.y + e.height }
              : void Object(O.a)(!1, "Invalid axis " + t);
          })(t, n);
        return i < o.min ? o.min - i : i > o.max ? i - o.max : 0;
      }
      var et = (function () {
        function t(t, e) {
          (this.m_onActivateCallbacks = new S.a()),
            (this.m_onDeactivateCallbacks = new S.a()),
            (this.m_Controller = t),
            (this.m_ID = e),
            (this.m_Root = new V(this, null, null)),
            this.m_Root.SetProperties({ layout: x.COLUMN }),
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
            return new V(this, t, e);
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
              t && this.TakeFocus(o.APPLICATION),
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
              o.APPLICATION,
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
              J(
                "Transfer focus in " +
                  this.id +
                  ", source: " +
                  o[t] +
                  ", from/to:",
                null == i ? void 0 : i.m_element,
                null == e ? void 0 : e.m_element
              );
              var r = { blurredNode: i, focusedNode: e, source: t };
              i && i.SetHasFocus(!1), e && e.SetHasFocus(!0);
              var a = this.m_Controller.OnFocusChangeStart(t, this, i, e);
              e &&
                (this.BUseVirtualFocus()
                  ? (e.RequestFocus(), X(e))
                  : (function (t, e) {
                      var n = t.Element;
                      if (n) {
                        var i = H(t, "x"),
                          o = H(t, "y");
                        if (i || o)
                          n.focus({ preventScroll: !0 }),
                            i && Y("x", i),
                            o && Y("y", o);
                        else if (e) {
                          n.focus({ preventScroll: !0 });
                          var r = n.getBoundingClientRect(),
                            a = !1;
                          ((z && performance.now() - z < 500) ||
                            r.bottom < -300 ||
                            r.top > window.innerHeight + 300) &&
                            (a = !0);
                          var s = a ? "auto" : "smooth";
                          a && (z = performance.now()),
                            n.scrollIntoView({ behavior: s, block: "nearest" });
                        } else n.focus();
                      }
                    })(e, i)),
                i &&
                  (d(i.Element, "vgp_onblur", r),
                  !i.m_FocusRing ||
                    (e && i.m_FocusRing == e.m_FocusRing) ||
                    i.m_FocusRing.OnBlur(t, i, e)),
                e &&
                  (this.OnChildActivated(t),
                  d(e.Element, "vgp_onfocus", r),
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
                this.m_Controller.OnFocusChangeComplete(a);
            }
          }),
          t
        );
      })();
      function nt(t) {
        if (!t) return x.NONE;
        var e = t.ownerDocument.defaultView,
          n = e.getComputedStyle(t);
        if ("flex" == n.display)
          switch (n.flexDirection) {
            case "row":
              return "wrap" == n.flexWrap ? x.GRID : x.ROW;
            case "row-reverse":
              return x.ROW_REVERSE;
            case "column":
              return x.COLUMN;
            case "column-reverse":
              return x.COLUMN_REVERSE;
          }
        else {
          if ("grid" == n.display) return x.GRID;
          if (t.childElementCount > 0) {
            var i = e.getComputedStyle(t.firstElementChild);
            if ("left" === i.float) return x.ROW;
            if ("right" === i.float) return x.ROW_REVERSE;
            if ("inline" === i.display || "inline-block" === i.display)
              return x.GRID;
          }
        }
        return x.COLUMN;
      }
      var it = "VirtualKeyboardMessage";
      function ot(t) {
        return t && t.type === it;
      }
      var rt = (function () {
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
            t == it && this.InternalDispatchMessage(JSON.parse(e));
          }),
          (t.prototype.OnMessage = function (t) {
            this.InternalDispatchMessage(t.data);
          }),
          (t.prototype.InternalDispatchMessage = function (t) {
            ot(t) && t.message;
          }),
          (t.prototype.SendMessage = function (t) {
            Object(O.a)(
              window.parent && window.parent != window,
              "No parent window to post to"
            );
            var e = Object(r.a)({ type: "VirtualKeyboardMessage" }, t);
            "undefined" != typeof SteamClient &&
            SteamClient.BrowserView &&
            SteamClient.BrowserView.PostMessageToParent
              ? SteamClient.BrowserView.PostMessageToParent(
                  e.type,
                  JSON.stringify(e)
                )
              : window.parent.postMessage(e, "*");
          }),
          Object(r.c)([v.a], t.prototype, "OnBrowserViewMessage", null),
          Object(r.c)([v.a], t.prototype, "OnMessage", null),
          t
        );
      })();
      function at(t) {
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
          i = s()("<div/>", {
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
      var st = new rt(),
        ct = !1;
      function ut(t) {
        if (!ct) {
          var e = new q();
          e.RegisterInputSource(t),
            (function (t) {
              s()("html").addClass("gpnav_active");
              var e = s()("body"),
                n = t.NewGamepadNavigationTree("legacy"),
                i = at(e);
              (n.Root.m_FocusRing = i),
                n.Root.SetProperties({}),
                ht.set(document.body, n.Root),
                mt(document.body, n.Root),
                ft(),
                t.RegisterGamepadNavigationTree(n, !1),
                s()(document.body).on("vgp_onbuttondown", function (t) {
                  !(function (t) {
                    var e = [
                        c.a.DIR_UP,
                        c.a.DIR_DOWN,
                        c.a.DIR_LEFT,
                        c.a.DIR_RIGHT,
                      ],
                      n = u[t.detail.button];
                    n
                      ? d(t.target, n, t.detail)
                      : -1 !== e.indexOf(t.detail.button) &&
                        d(t.target, "vgp_ondirection", t.detail);
                  })(t.originalEvent);
                }),
                new MutationObserver(lt).observe(document.body, {
                  childList: !0,
                  subtree: !0,
                });
            })(e),
            new _(e);
        }
        ct = !0;
      }
      function lt(t) {
        for (var e = [], n = [], i = 0, o = t; i < o.length; i++) {
          var r = o[i];
          if ("childList" === r.type) {
            for (var a = 0; a < r.addedNodes.length; a++) {
              (c = r.addedNodes[a]).nodeType === Node.ELEMENT_NODE && e.push(c);
            }
            for (a = 0; a < r.removedNodes.length; a++) {
              var c;
              (c = r.removedNodes[a]).nodeType === Node.ELEMENT_NODE &&
                n.push(c);
            }
          }
        }
        e.length && ft(s()(e)), n.length && vt(s()(n));
      }
      var ht = new WeakMap(),
        pt = new WeakMap(),
        dt = [];
      function mt(t, e) {
        if (e) {
          var n = e.GetDepth();
          dt[n] || (dt[n] = []), dt[n].push([t, e]);
        }
        ht.set(t, e);
      }
      function gt(t) {
        return "jquery" in t ? ht.get(t[0]) : ht.get(t);
      }
      function vt(t) {
        t.find("*")
          .addBack()
          .each(function () {
            var t = pt.get(this);
            t && t(), ht.delete(this), pt.delete(this);
          });
      }
      function ft(t) {
        performance.now();
        var e = "a,button,input:not(input[type=hidden]),label,[data-panel]";
        s()(e, t)
          .addBack(e)
          .each(function () {
            !(function (t) {
              var e = s()(t).data("navNode");
              if (!1 === e) return;
              e || Ct(t);
            })(this);
          }),
          (function () {
            for (var t = dt.length - 1; t >= 0; t--)
              if (dt[t])
                for (var e = 0, n = dt[t]; e < n.length; e++) {
                  var i = n[e],
                    o = i[0],
                    r = i[1];
                  pt.set(o, r.Tree.RegisterNavigationItem(r, o));
                }
            dt = [];
          })();
      }
      function _t(t) {
        var e = s()(t.Element);
        return (
          e.is(":visible") &&
          ((e.outerWidth() > 0 && e.outerHeight() > 0) ||
            "hidden" !== e.css("overflow"))
        );
      }
      function bt(t) {
        this.click(), t.stopPropagation();
      }
      function yt(t) {
        s()(this).find("a")[0].click();
      }
      function Ct(t) {
        var e = s()(t),
          n = Ot(t),
          i = n.Tree.CreateNode(n, n.m_FocusRing),
          o = e.data("panel") || {};
        if ("A" == t.tagName || "BUTTON" == t.tagName || "LABEL" == t.tagName)
          (o.focusable = !0), (o.clickOnActivate = !0);
        else if ("INPUT" == t.tagName)
          switch (((o.focusable = !0), t.getAttribute("type"))) {
            case "checkbox":
              o.clickOnActivate = !0;
              break;
            case "text":
            case "password":
              o.enableVirtualKeyboard = !0;
          }
        var a = o["flow-children"];
        delete o["flow-children"];
        var u = o.clickOnActivate,
          p = o.maintainX,
          d = o.maintainY,
          g = o.enableVirtualKeyboard,
          v = o.onOKActionDescription,
          f = o.onCancelActionDescription,
          _ = o.onSecondaryActionDescription,
          b = o.onOptionsActionDescription,
          y = o.onMenuActionDescription,
          C = o.actionDescriptionMap,
          O = o.onOKButton,
          N = o.onCancelButton,
          A = o.onSecondaryButton,
          R = o.onOptionsButton,
          S = o.onMenuButton,
          E = o.bFocusRingRoot,
          D = Object(r.f)(o, [
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
        O &&
          v &&
          (function (t, e) {
            l(t, "vgp_onok", m(e));
          })(e[0], Function("event", O)),
          N && f && h(e[0], Function("event", N)),
          A &&
            _ &&
            (function (t, e) {
              l(t, "vgp_onsecondaryaction", m(e));
            })(e[0], Function("event", A)),
          R &&
            b &&
            (function (t, e) {
              l(t, "vgp_onoptions", m(e));
            })(e[0], Function("event", R)),
          S &&
            y &&
            (function (t, e) {
              l(t, "vgp_onmenu", m(e));
            })(e[0], Function("event", S));
        var I = a
          ? (function (t) {
              switch (t) {
                case "column":
                  return x.COLUMN;
                case "column-reverse":
                  return x.COLUMN_REVERSE;
                case "row":
                  return x.ROW;
                case "row-reverse":
                  return x.ROW_REVERSE;
                case "grid":
                  return x.GRID;
                default:
                  return x.NONE;
              }
            })(a)
          : x.NONE;
        I != x.NONE && (D.layout = I),
          p
            ? (D.navEntryPreferPosition = W.MAINTAIN_X)
            : d && (D.navEntryPreferPosition = W.MAINTAIN_Y),
          u &&
            (!1 !== D.focusable && (D.focusable = !0),
            e.on("vgp_onok", "firstChild" === u ? yt : bt)),
          g &&
            (e.on("vgp_onok.vkbindings", function () {
              return st.ShowVirtualKeyboard();
            }),
            e.on("click.vkbindings", function () {
              return st.ShowVirtualKeyboard();
            }),
            e.on("blur.vkbindings", function () {
              return st.HideVirtualKeyboard();
            })),
          D.focusable && void 0 === e.attr("tabIndex") && e.attr("tabIndex", 0),
          D.focusable &&
            i.FocusCallbackList.Register(function (e) {
              return (function (t, e) {
                e ? s()(t).addClass("gpfocus") : s()(t).removeClass("gpfocus");
              })(t, e);
            }),
          E &&
            ((i.m_FocusRing = at(e)),
            "static" == e.css("position") && e.css("position", "relative"));
        var F = (function (t) {
            var e = t.onOKActionDescription,
              n = t.onCancelActionDescription,
              i = t.onSecondaryActionDescription,
              o = t.onOptionsActionDescription,
              a = t.onMenuActionDescription,
              s = t.actionDescriptionMap,
              u = Object(r.a)({}, s);
            return (
              void 0 !== e && (u[c.a.OK] = e),
              void 0 !== n && (u[c.a.CANCEL] = n),
              void 0 !== i && (u[c.a.SECONDARY] = i),
              void 0 !== o && (u[c.a.OPTIONS] = o),
              void 0 !== a && (u[c.a.START] = a),
              u
            );
          })({
            onOKActionDescription: v,
            onCancelActionDescription: f,
            onSecondaryActionDescription: _,
            onOptionsActionDescription: b,
            onMenuActionDescription: y,
            actionDescriptionMap: C,
          }),
          T = Object(r.a)({ fnCanTakeFocus: _t, actionDescriptionMap: F }, D);
        return i.SetProperties(T), mt(t, i), i;
      }
      function Ot(t) {
        var e = t.parentElement;
        if (!e) return console.error("no parent"), null;
        var n = gt(e);
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
                  if (nt(t) != x.COLUMN) e = !0;
                  else {
                    var n = nt(t.parentElement);
                    (n != x.ROW && n != x.ROW_REVERSE) || (e = !0);
                  }
              }
              var i = !1;
              return e ? (i = Ct(t)) : mt(t, !1), i;
            })(e)),
          n || Ot(e)
        );
      }
      Object.assign(window, {
        InstrumentFocusElements: ft,
        ForceUpdateFocusElements: function (t) {
          vt(s()(t)), ft(s()(t));
        },
        GPNavFocusChild: function (t) {
          var e = gt(t[0]);
          return e || (e = Ot(t[0])), !!e && e.BTakeFocus(o.APPLICATION);
        },
      });
    },
  },
]);

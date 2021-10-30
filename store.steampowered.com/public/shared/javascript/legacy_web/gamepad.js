/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonpLegacyWeb = window.webpackJsonpLegacyWeb || []).push([
  [0],
  {
    biHH: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "InitializeGamepadNavigation", function () {
          return Ne;
        });
      var i,
        o,
        r = n("mrSG"),
        a = n("xeH2"),
        s = n.n(a),
        u = n("rHSA");
      !(function (e) {
        (e[(e.GAMEPAD = 0)] = "GAMEPAD"),
          (e[(e.KEYBOARD = 1)] = "KEYBOARD"),
          (e[(e.APPLICATION = 2)] = "APPLICATION"),
          (e[(e.BROWSER = 3)] = "BROWSER");
      })(o || (o = {}));
      var c =
        (((i = {})[u.a.OK] = "vgp_onok"),
        (i[u.a.CANCEL] = "vgp_oncancel"),
        (i[u.a.SECONDARY] = "vgp_onsecondaryaction"),
        (i[u.a.OPTIONS] = "vgp_onoptions"),
        (i[u.a.START] = "vgp_onmenu"),
        i);
      function l(e, t, n) {
        return (
          e.addEventListener(t, n),
          function () {
            return (function (e, t, n) {
              e.removeEventListener(t, n);
            })(e, t, n);
          }
        );
      }
      function h(e, t) {
        return l(e, "vgp_ondirection", d(t));
      }
      function p(e, t, n) {
        if (null !== e) {
          var i = new e.ownerDocument.defaultView.CustomEvent(t, {
            bubbles: !0,
            cancelable: !0,
            detail: n,
          });
          e.dispatchEvent(i);
        }
      }
      function d(e) {
        return function (t) {
          !1 !== e(t) && t.stopPropagation();
        };
      }
      var m = n("XxJJ"),
        _ = (function () {
          function e(e) {
            var t = this;
            (this.m_NavigationController = e),
              "undefined" != typeof SteamClient &&
                SteamClient.BrowserView.RegisterForMessageFromParent &&
                SteamClient.BrowserView.RegisterForMessageFromParent(
                  this.OnMessageFromParent
                ),
              l(
                window,
                "vgp_oncancel",
                d(function () {
                  return t.PostButtonPressToSteam(u.a.CANCEL);
                })
              ),
              (function (e, t) {
                l(e, "vgp_onbuttondown", t);
              })(window, function (e) {
                return t.PostButtonDownToSteam(e);
              }),
              this.PostMessage({ type: "QuerySuppressGamepadInput" });
          }
          return (
            (e.prototype.OnMessageFromParent = function (e, t) {
              if ("GamepadInput" == e) {
                var n = JSON.parse(t);
                switch (n.type) {
                  case "SetSuppressGamepadInput":
                    this.m_NavigationController.SetSuppressGamepadInput(
                      n.data.suppressed
                    );
                }
              }
            }),
            (e.prototype.PostButtonPressToSteam = function (e) {
              "undefined" != typeof SteamClient &&
                SteamClient.BrowserView &&
                SteamClient.BrowserView.PostMessageToParent &&
                this.PostMessage({
                  type: "ButtonPressed",
                  data: { button: e },
                });
            }),
            (e.prototype.PostButtonDownToSteam = function (e) {
              switch (e.detail.button) {
                case u.a.STEAM_GUIDE:
                case u.a.STEAM_QUICK_MENU:
                  this.PostButtonPressToSteam(e.detail.button);
              }
            }),
            (e.prototype.PostMessage = function (e) {
              if ("undefined" != typeof SteamClient) {
                var t = JSON.stringify(e);
                SteamClient.BrowserView.PostMessageToParent("GamepadInput", t);
              }
            }),
            Object(r.c)([m.a], e.prototype, "OnMessageFromParent", null),
            e
          );
        })(),
        v = n("Kw0F"),
        g = n("r64O");
      function f(e) {
        return null != e && void 0 !== e.focus;
      }
      function C(e) {
        for (
          var t = 1, n = e.ownerDocument.defaultView, i = e;
          null != i;
          i = i.parentElement
        ) {
          var o = parseFloat(n.getComputedStyle(i).zoom);
          0 !== o && (t *= o);
        }
        return t;
      }
      function y(e, t) {
        if ("x" === t) {
          if (e.scrollWidth <= e.clientWidth) return !1;
        } else if (e.scrollHeight <= e.clientHeight) return !1;
        var n = e.ownerDocument.defaultView.getComputedStyle(e),
          i = "x" === t ? n.overflowX : n.overflowY;
        return "auto" === i || "scroll" === i;
      }
      u.c;
      var E = n("qiKp"),
        R = (function () {
          function e(e) {
            (this.m_rgHistory = []), (this.m_root = e);
          }
          return (
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
            (e.prototype.SerializeNavNode = function (e) {
              var t = this,
                n = null,
                i = e.GetChildren(),
                o = i[0],
                r = i[1];
              return (
                o.length &&
                  -1 != r &&
                  (n = o.map(function (e) {
                    return t.SerializeNavNode(e);
                  })),
                { sNavKey: e.NavKey, iActiveChild: r, rgChildren: n }
              );
            }),
            (e.prototype.RestoreSerializedNavNode = function (e, t) {
              var n = t.sNavKey,
                i = t.iActiveChild,
                o = t.rgChildren;
              if (
                (n && Object(g.a)(n == e.NavKey, "navkey mismatch"),
                e.SetActiveChild(i),
                o && o.length)
              ) {
                var r = e.GetChildren()[0],
                  a = new Map();
                r.forEach(function (e) {
                  e.NavKey && a.set(e.NavKey, e);
                });
                for (var s = 0, u = o; s < u.length; s++) {
                  var c = u[s];
                  if (c.sNavKey) {
                    var l = a.get(c.sNavKey);
                    l && this.RestoreSerializedNavNode(l, c);
                  }
                }
                if (-1 != i && o[i].sNavKey) {
                  var h = a.get(o[i].sNavKey);
                  h && e.SetActiveChild(r.indexOf(h));
                }
                for (var p = 0, d = 0; p < r.length && d < o.length; ) {
                  for (; p < r.length && r[p].NavKey; ) p++;
                  for (; d < o.length && o[d].sNavKey; ) d++;
                  if (p >= r.length || d >= o.length) break;
                  this.RestoreSerializedNavNode(r[p], o[d]), p++, d++;
                }
              }
            }),
            e
          );
        })(),
        b = { x: "y", y: "x" };
      var T,
        N = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(r.d)(t, e),
            (t.prototype.GetString = function (e) {
              return Promise.resolve(localStorage.getItem(e));
            }),
            (t.prototype.StoreString = function (e, t) {
              return localStorage.setItem(e, t), Promise.resolve();
            }),
            (t.prototype.RemoveObject = function (e) {
              return localStorage.removeItem(e), Promise.resolve();
            }),
            t
          );
        })(
          (function () {
            function e() {}
            return (
              (e.prototype.GetObject = function (e) {
                return Object(r.b)(this, void 0, void 0, function () {
                  var t;
                  return Object(r.e)(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return n.trys.push([0, 2, , 3]), [4, this.GetString(e)];
                      case 1:
                        return [2, (t = n.sent()) ? JSON.parse(t) : null];
                      case 2:
                        return n.sent(), [2, null];
                      case 3:
                        return [2];
                    }
                  });
                });
              }),
              (e.prototype.StoreObject = function (e, t) {
                return Object(r.b)(this, void 0, void 0, function () {
                  return Object(r.e)(this, function (n) {
                    return [2, this.StoreString(e, JSON.stringify(t))];
                  });
                });
              }),
              e
            );
          })()
        ),
        S = [
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
      !(function (e) {
        (e[(e.Debug = 0)] = "Debug"),
          (e[(e.Info = 1)] = "Info"),
          (e[(e.Warning = 2)] = "Warning"),
          (e[(e.Error = 3)] = "Error");
      })(T || (T = {}));
      var O = (function () {
          function e(e, t) {
            (this.m_fnIdGenerator = null),
              (this.m_sName = e),
              (this.m_fnIdGenerator = t),
              k.Get().RegisterLogName(e);
          }
          return (
            (e.prototype.Debug = function () {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              this.Log.apply(this, Object(r.g)([T.Debug], e));
            }),
            (e.prototype.Info = function () {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              this.Log.apply(this, Object(r.g)([T.Info], e));
            }),
            (e.prototype.Warning = function () {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              this.Log.apply(this, Object(r.g)([T.Warning], e));
            }),
            (e.prototype.Error = function () {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              this.Log.apply(this, Object(r.g)([T.Error], e));
            }),
            (e.prototype.Assert = function (e) {
              for (var t = [], n = 1; n < arguments.length; n++)
                t[n - 1] = arguments[n];
              e ||
                this.Log.apply(
                  this,
                  Object(r.g)([T.Error, "Assertion failed:"], t)
                );
            }),
            (e.prototype.Log = function (e) {
              for (var t, n, i = [], o = 1; o < arguments.length; o++)
                i[o - 1] = arguments[o];
              if (e != T.Debug || k.Get().IsDebugLogEnabled(this.m_sName)) {
                var a = this.m_sName,
                  s =
                    null !==
                      (n =
                        null === (t = this.m_fnIdGenerator) || void 0 === t
                          ? void 0
                          : t.call(this)) && void 0 !== n
                      ? n
                      : null;
                null != s && (a += " (" + s + ")");
                var u = k.Get().IncludeBacktraceInLog;
                L.apply(void 0, Object(r.g)([e, u, a, this.m_sName], i));
              }
            }),
            Object(r.c)([m.a], e.prototype, "Debug", null),
            Object(r.c)([m.a], e.prototype, "Info", null),
            Object(r.c)([m.a], e.prototype, "Warning", null),
            Object(r.c)([m.a], e.prototype, "Error", null),
            Object(r.c)([m.a], e.prototype, "Assert", null),
            e
          );
        })(),
        k = (function () {
          function e() {
            (this.m_Storage = null),
              (this.m_rgLogNames = null),
              (this.m_setEnabledDebugLogs = new Set()),
              (this.m_bIncludeBacktraceInLog = !1),
              (this.m_SettingsChangedCallback = new E.a()),
              (this.m_bLoading = !1),
              (this.m_Storage = new N()),
              (this.m_rgLogNames = S.slice()),
              this.LoadSettings();
          }
          return (
            (e.prototype.LogAsLogManager = function () {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              L.apply(
                void 0,
                Object(r.g)(
                  [
                    T.Info,
                    this.IncludeBacktraceInLog,
                    "LogManager",
                    "LogManager",
                  ],
                  e
                )
              );
            }),
            (e.prototype.LoadSettings = function () {
              return Object(r.b)(this, void 0, void 0, function () {
                var t, n;
                return Object(r.e)(this, function (i) {
                  switch (i.label) {
                    case 0:
                      return (
                        (this.m_bLoading = !0),
                        (t = this),
                        [
                          4,
                          this.m_Storage.GetObject(
                            e.k_IncludeBacktraceInLog_StorageKey
                          ),
                        ]
                      );
                    case 1:
                      return (
                        (t.m_bIncludeBacktraceInLog = !!i.sent()),
                        [
                          4,
                          this.m_Storage.GetObject(
                            e.k_EnabledLogNames_StorageKey
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
            (e.prototype.SaveSettings = function () {
              return Object(r.b)(this, void 0, void 0, function () {
                return Object(r.e)(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return [
                        4,
                        this.m_Storage.StoreObject(
                          e.k_EnabledLogNames_StorageKey,
                          Array.from(this.m_setEnabledDebugLogs)
                        ),
                      ];
                    case 1:
                      return (
                        t.sent(),
                        [
                          4,
                          this.m_Storage.StoreObject(
                            e.k_IncludeBacktraceInLog_StorageKey,
                            this.m_bIncludeBacktraceInLog
                          ),
                        ]
                      );
                    case 2:
                      return (
                        t.sent(),
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
            (e.Get = function () {
              return (
                null == e.s_Singleton && (e.s_Singleton = new e()),
                e.s_Singleton
              );
            }),
            Object.defineProperty(e.prototype, "Loading", {
              get: function () {
                return this.m_bLoading;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "LogNames", {
              get: function () {
                return this.m_rgLogNames;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.RegisterLogName = function (e) {
              this.m_rgLogNames.includes(e) || this.m_rgLogNames.push(e);
            }),
            (e.prototype.IsLogName = function (e) {
              return this.m_rgLogNames.includes(e);
            }),
            (e.prototype.IsDebugLogEnabled = function (e) {
              return this.m_setEnabledDebugLogs.has(e);
            }),
            (e.prototype.ToggleDebugLogEnabled = function (e) {
              return Object(r.b)(this, void 0, void 0, function () {
                return Object(r.e)(this, function (t) {
                  return (
                    this.SetDebugLogEnabled(e, !this.IsDebugLogEnabled(e)), [2]
                  );
                });
              });
            }),
            (e.prototype.SetDebugLogEnabled = function (e, t) {
              return Object(r.b)(this, void 0, void 0, function () {
                return Object(r.e)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return (
                        t
                          ? this.m_setEnabledDebugLogs.add(e)
                          : this.m_setEnabledDebugLogs.delete(e),
                        this.m_SettingsChangedCallback.Dispatch(),
                        [4, this.SaveSettings()]
                      );
                    case 1:
                      return n.sent(), [2];
                  }
                });
              });
            }),
            (e.prototype.SetAllDebugLogsEnabled = function (e) {
              return Object(r.b)(this, void 0, void 0, function () {
                return Object(r.e)(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return (
                        (this.m_setEnabledDebugLogs = new Set(e ? S : [])),
                        this.m_SettingsChangedCallback.Dispatch(),
                        [4, this.SaveSettings()]
                      );
                    case 1:
                      return t.sent(), [2];
                  }
                });
              });
            }),
            (e.prototype.RegisterForSettingsChanges = function (e) {
              return this.m_SettingsChangedCallback.Register(e);
            }),
            Object.defineProperty(e.prototype, "IncludeBacktraceInLog", {
              get: function () {
                return this.m_bIncludeBacktraceInLog;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.SetIncludeBacktraceInLog = function (e) {
              return Object(r.b)(this, void 0, void 0, function () {
                return Object(r.e)(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return (
                        (this.m_bIncludeBacktraceInLog = e),
                        this.m_SettingsChangedCallback.Dispatch(),
                        [4, this.SaveSettings()]
                      );
                    case 1:
                      return t.sent(), [2];
                  }
                });
              });
            }),
            (e.k_EnabledLogNames_StorageKey = "EnabledWebLogs"),
            (e.k_IncludeBacktraceInLog_StorageKey = "IncludeBacktraceInLog"),
            (e.s_Singleton = null),
            e
          );
        })();
      function A(e) {
        for (var t = 0, n = 0; n < e.length; n++)
          t = e.charCodeAt(n) + ((t << 5) - t);
        return [(t >> 0) & 255, (t >> 8) & 255, (t >> 16) & 255];
      }
      function I(e) {
        return (299 * e[0] + 587 * e[1] + 114 * e[2]) / 1e3 >= 128;
      }
      function D(e) {
        switch (e) {
          case T.Debug:
            return String.fromCodePoint(128027);
          case T.Info:
            return String.fromCodePoint(8505);
          case T.Warning:
            return String.fromCodePoint(9888);
          case T.Error:
            return String.fromCodePoint(128165);
        }
      }
      function L(e, t, n, i) {
        for (var o = [], a = 4; a < arguments.length; a++)
          o[a - 4] = arguments[a];
        var s = A(i),
          u = s.map(function (e, t) {
            return Math.max(
              0,
              Math.min(255, 255 * (0.8 * (e / 255 - 0.5) + 0.15))
            );
          }),
          c = I(u),
          l = n;
        t && (l = D(e) + " " + l);
        var h = Object(r.g)(
          [
            "%c" + l + "%c:",
            "color: " +
              (c ? "black" : "white") +
              "; background: rgb(" +
              u.join(",") +
              "); padding: 0 1ch",
            "color: transparent; margin-right: -1ch",
          ],
          o
        );
        if (t)
          console.groupCollapsed.apply(console, h),
            console.trace("Callstack"),
            console.groupEnd();
        else
          switch (e) {
            case T.Debug:
            case T.Info:
              console.log.apply(console, h);
              break;
            case T.Warning:
              console.warn.apply(console, h);
              break;
            case T.Error:
              console.error.apply(console, h);
          }
      }
      var F,
        B,
        P,
        w,
        G = new O("FocusNavigationMovement").Debug;
      !(function (e) {
        (e[(e.NONE = 0)] = "NONE"),
          (e[(e.COLUMN = 1)] = "COLUMN"),
          (e[(e.ROW = 2)] = "ROW"),
          (e[(e.COLUMN_REVERSE = 3)] = "COLUMN_REVERSE"),
          (e[(e.ROW_REVERSE = 4)] = "ROW_REVERSE"),
          (e[(e.GRID = 5)] = "GRID"),
          (e[(e.GEOMETRIC = 6)] = "GEOMETRIC");
      })(F || (F = {})),
        (function (e) {
          (e[(e.FIRST = 0)] = "FIRST"),
            (e[(e.MAINTAIN_X = 1)] = "MAINTAIN_X"),
            (e[(e.MAINTAIN_Y = 2)] = "MAINTAIN_Y"),
            (e[(e.PREFERRED_CHILD = 3)] = "PREFERRED_CHILD");
        })(B || (B = {})),
        (function (e) {
          (e[(e.LAZY = 0)] = "LAZY"),
            (e[(e.START = 1)] = "START"),
            (e[(e.CENTER = 2)] = "CENTER"),
            (e[(e.END = 3)] = "END"),
            (e[(e.NEAREST = 4)] = "NEAREST"),
            (e[(e.NONE = 5)] = "NONE");
        })(P || (P = {})),
        (function (e) {
          (e[(e.INVALID = 0)] = "INVALID"),
            (e[(e.FORWARD = 1)] = "FORWARD"),
            (e[(e.BACKWARD = 2)] = "BACKWARD");
        })(w || (w = {}));
      var M = (function () {
        function e(e, t, n) {
          (this.m_rgChildren = []),
            (this.m_iActiveChild = -1),
            (this.m_bChildrenSorted = !1),
            (this.m_bAutoFocusChild = !1),
            (this.m_bFocused = !1),
            (this.m_FocusCallbackList = new E.a()),
            (this.m_ActionDescriptionsChangedCallbackList = new E.a()),
            (this.m_rgNavigationHandlers = []),
            (this.m_rgFocusHandlers = []),
            (this.m_Tree = e),
            (this.m_Parent = t),
            (this.m_FocusRing = n),
            (this.m_nDepth = t ? t.m_nDepth + 1 : 0);
        }
        return (
          (e.prototype.CreateHandle = function () {
            return new H(this);
          }),
          Object.defineProperty(e.prototype, "Tree", {
            get: function () {
              return this.m_Tree;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "NavKey", {
            get: function () {
              return this.m_Properties && this.m_Properties.navKey;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "Element", {
            get: function () {
              return this.m_element;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "Parent", {
            get: function () {
              return this.m_Parent;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.prototype.SetProperties = function (e) {
            var t,
              n,
              i,
              o =
                ((n =
                  null === (t = this.m_Properties) || void 0 === t
                    ? void 0
                    : t.actionDescriptionMap),
                (i = null == e ? void 0 : e.actionDescriptionMap),
                !(null == n || null == i
                  ? n === i
                  : "object" == typeof n &&
                    "object" == typeof i &&
                    Object.keys(n).length === Object.keys(i).length &&
                    Object.keys(n).every(function (e) {
                      return i.hasOwnProperty(e) && n[e] === i[e];
                    })));
            (this.m_Properties = e || {}),
              o && this.m_ActionDescriptionsChangedCallbackList.Dispatch(),
              this.m_element && this.RegisterDOMEvents();
          }),
          (e.prototype.BWantsAutoFocus = function () {
            return this.m_Properties.autoFocus || this.m_bAutoFocusChild;
          }),
          (e.prototype.BWantsPreferredFocus = function () {
            return this.m_Properties.preferredFocus;
          }),
          (e.prototype.BWantsFocusRing = function () {
            return !this.m_Properties.noFocusRing;
          }),
          (e.prototype.GetBoundingRect = function () {
            return this.m_element && this.m_element.getBoundingClientRect();
          }),
          (e.prototype.GetScrollSnapProps = function () {
            return this.m_Properties;
          }),
          (e.prototype.SetHasFocus = function (e) {
            e != this.m_bFocused &&
              ((this.m_bFocused = e),
              this.m_FocusCallbackList.Dispatch(this.m_bFocused));
          }),
          (e.prototype.BHasFocus = function () {
            return this.m_bFocused;
          }),
          (e.prototype.BFocusWithin = function () {
            if (this.m_bFocused) return !0;
            for (var e = 0, t = this.m_rgChildren; e < t.length; e++) {
              if (t[e].BFocusWithin()) return !0;
            }
            return !1;
          }),
          Object.defineProperty(e.prototype, "FocusCallbackList", {
            get: function () {
              return this.m_FocusCallbackList;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(
            e.prototype,
            "ActionDescriptionChangedCallbackList",
            {
              get: function () {
                return this.m_ActionDescriptionsChangedCallbackList;
              },
              enumerable: !1,
              configurable: !0,
            }
          ),
          (e.prototype.GetActiveActionDescriptions = function () {
            return this.BuildConsolidatedActionDescriptionMap({});
          }),
          (e.prototype.BuildConsolidatedActionDescriptionMap = function (e) {
            var t,
              n =
                null === (t = this.m_Properties) || void 0 === t
                  ? void 0
                  : t.actionDescriptionMap;
            if (n)
              for (var i in n) {
                var o = i;
                void 0 === e[o] && (e[o] = n[o]);
              }
            return this.m_Parent
              ? this.m_Parent.BuildConsolidatedActionDescriptionMap(e)
              : e;
          }),
          (e.prototype.AddChild = function (e) {
            this.m_rgChildren.push(e),
              (this.m_bChildrenSorted = !1),
              this.m_element && this.RegisterDOMEvents();
          }),
          (e.prototype.OnMount = function (e) {
            if (
              ((this.m_element = e),
              this.m_Parent
                ? this.m_Parent.AddChild(this)
                : Object(g.a)(
                    this == this.m_Tree.Root,
                    "Only root should have no parent"
                  ),
              this.RegisterDOMEvents(),
              this.BWantsAutoFocus())
            ) {
              var t = -1;
              this.m_rgChildren.length &&
                (this.EnsureChildrenSorted(),
                (t = this.m_rgChildren.findIndex(function (e) {
                  return e.BWantsAutoFocus();
                }))),
                (this.m_Properties.autoFocus || -1 !== t) &&
                  ((this.m_iActiveChild = t),
                  !this.m_Parent || this.m_Parent.m_element
                    ? this.BTakeFocus(o.APPLICATION)
                    : (this.m_Parent.m_bAutoFocusChild = !0));
            }
          }),
          (e.prototype.OnUnmount = function () {
            this.m_bFocused && this.m_Tree.TransferFocus(o.APPLICATION, null),
              this.UnregisterDOMEvents(),
              this.m_Parent
                ? this.m_Parent.RemoveChild(this)
                : Object(g.a)(
                    this == this.m_Tree.Root,
                    "Only root should have no parent"
                  );
          }),
          (e.prototype.RegisterDOMEvents = function () {
            var e = this;
            !this.m_rgNavigationHandlers.length &&
              (this.GetLayout() ||
                this.m_Properties.onMoveUp ||
                this.m_Properties.onMoveRight ||
                this.m_Properties.onMoveDown ||
                this.m_Properties.onMoveLeft) &&
              (this.m_rgNavigationHandlers.push(
                h(this.m_element, this.OnNavigationEvent)
              ),
              this.m_element.addEventListener("focusin", this.OnFocusIn),
              this.m_rgNavigationHandlers.push(function () {
                return e.m_element.removeEventListener("focusin", e.OnFocusIn);
              })),
              this.m_rgFocusHandlers.length ||
                (!this.m_Properties.focusable &&
                  0 != this.m_rgChildren.length) ||
                (this.m_element.addEventListener("focus", this.OnDOMFocus),
                this.m_element.addEventListener("blur", this.OnDOMBlur),
                this.m_rgFocusHandlers.push(function () {
                  e.m_element.removeEventListener("focus", e.OnDOMFocus),
                    e.m_element.removeEventListener("blur", e.OnDOMBlur);
                }));
          }),
          (e.prototype.RemoveChild = function (e) {
            var t = this.m_rgChildren.indexOf(e);
            Object(g.a)(-1 !== t, "Child was not found to remove"),
              -1 !== t &&
                (t <= this.m_iActiveChild && this.m_iActiveChild--,
                this.m_rgChildren.splice(t, 1));
          }),
          (e.prototype.UnregisterDOMEvents = function () {
            this.m_rgNavigationHandlers.forEach(function (e) {
              return e();
            }),
              (this.m_rgNavigationHandlers = []),
              this.m_rgFocusHandlers.forEach(function (e) {
                return e();
              }),
              (this.m_rgFocusHandlers = []);
          }),
          (e.prototype.GetActiveChild = function () {
            return (
              this.EnsureChildrenSorted(),
              this.m_iActiveChild >= 0 &&
              this.m_iActiveChild < this.m_rgChildren.length
                ? this.m_rgChildren[this.m_iActiveChild]
                : null
            );
          }),
          (e.prototype.EnsureChildrenSorted = function (e) {
            if ((void 0 === e && (e = !1), !this.m_bChildrenSorted || e)) {
              var t = void 0;
              -1 != this.m_iActiveChild &&
                (t = this.m_rgChildren[this.m_iActiveChild]),
                this.m_rgChildren.sort(function (e, t) {
                  var n = e.m_element,
                    i = t.m_element;
                  if (!n) return i ? 1 : 0;
                  if (!i) return -1;
                  var o = n.compareDocumentPosition(i);
                  return o & Node.DOCUMENT_POSITION_PRECEDING
                    ? 1
                    : o & Node.DOCUMENT_POSITION_FOLLOWING
                    ? -1
                    : 0;
                }),
                t && (this.m_iActiveChild = this.m_rgChildren.indexOf(t)),
                (this.m_bChildrenSorted = !0);
            }
          }),
          (e.prototype.GetLastFocusElement = function () {
            var e = this.GetActiveChild();
            return e ? e.GetLastFocusElement() : this.m_element;
          }),
          (e.prototype.OnFocusIn = function (e) {
            if (this.m_rgChildren.length) {
              this.EnsureChildrenSorted();
              for (
                var t = this.m_rgChildren.map(function (e) {
                    return e.m_element;
                  }),
                  n = e.target;
                n;

              ) {
                var i = t.indexOf(n);
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
          (e.prototype.OnDOMFocus = function (e) {
            this.m_bFocused || this.m_Tree.TransferFocus(o.BROWSER, this);
          }),
          (e.prototype.OnDOMBlur = function (e) {
            this.m_bFocused && this.m_Tree.TransferFocus(o.BROWSER, null);
          }),
          (e.prototype.RequestFocus = function () {
            this.m_Parent &&
              (this.m_Parent.SetActiveChild(this),
              this.m_Parent.RequestFocus());
          }),
          (e.prototype.BTakeFocus = function (e, t) {
            var n = (function (e) {
                switch (e) {
                  case u.a.DIR_UP:
                  case u.a.DIR_DOWN:
                    return "y";
                  case u.a.DIR_LEFT:
                  case u.a.DIR_RIGHT:
                    return "x";
                  default:
                    return;
                }
              })(t),
              i = this.m_Properties,
              r = i.focusable,
              a = i.focusableIfNoChildren,
              s = i.childFocusDisabled,
              c = i.fnCanTakeFocus;
            if (c && !c(this)) return !1;
            if (r || (a && s) || (a && 0 == this.m_rgChildren.length))
              return this.m_Tree.TransferFocus(e, this, n), !0;
            if (s) return !1;
            if (this.m_rgChildren.length) {
              this.EnsureChildrenSorted();
              var l = this.m_iActiveChild;
              if (l < 0 || l >= this.m_rgChildren.length) {
                l = 0;
                var h = this.GetLayout();
                (h != F.ROW_REVERSE && h != F.COLUMN_REVERSE) ||
                  (l = this.m_rgChildren.length - 1);
              }
              var p = this.m_Properties.navEntryPreferPosition;
              if (
                (p == B.MAINTAIN_X && "y" == n) ||
                (p == B.MAINTAIN_Y && "x" == n)
              ) {
                var d = b[n],
                  m = this.m_Tree.GetLastFocusedMovementNode(d);
                G(
                  "Taking focus while preserving " + B[p] + ", node:",
                  null == m ? void 0 : m.m_element
                );
                var _ = this.ComputeRelativeDirection(t, F.GRID);
                if (m) {
                  var v = X(m.GetBoundingRect()),
                    g = _ == w.BACKWARD ? this.m_rgChildren.length - 1 : 0;
                  if (
                    this.BFocusClosestChildInNextAxiallyAlignedSet(
                      d,
                      _,
                      t,
                      v,
                      g,
                      this.m_rgChildren[g].GetBoundingRect()
                    )
                  )
                    return !0;
                }
              } else if (p == B.PREFERRED_CHILD)
                for (var f = 0, C = this.m_rgChildren; f < C.length; f++) {
                  var y = C[f];
                  if (y.BWantsPreferredFocus() && y.BTakeFocus(o.GAMEPAD, t))
                    return !0;
                }
              return (
                !!this.BFocusNextChildInDirection(e, l - 1, w.FORWARD, t) ||
                !!this.BFocusNextChildInDirection(e, l, w.BACKWARD, t) ||
                (!!a && (this.m_Tree.TransferFocus(e, this, n), !0))
              );
            }
            return !1;
          }),
          (e.prototype.GetLayout = function () {
            return this.m_Properties.layout
              ? this.m_Properties.layout
              : this.m_rgChildren.length < 2
              ? F.NONE
              : q(this.m_element);
          }),
          (e.prototype.OnNavigationEvent = function (e) {
            var t = e.detail.button;
            if (this.BTryInternalNavigation(t)) return !0;
            var n = this.m_Properties,
              i = n.onMoveUp,
              o = n.onMoveRight,
              r = n.onMoveDown,
              a = n.onMoveLeft,
              s = !1;
            switch (t) {
              case u.a.DIR_UP:
                i && (s = i(e.detail));
                break;
              case u.a.DIR_RIGHT:
                o && (s = o(e.detail));
                break;
              case u.a.DIR_DOWN:
                r && (s = r(e.detail));
                break;
              case u.a.DIR_LEFT:
                a && (s = a(e.detail));
            }
            return s;
          }),
          (e.prototype.BTryInternalNavigation = function (e) {
            var t = this.GetLayout(),
              n = this.ComputeRelativeDirection(e, t);
            if (
              (G(
                "Handling navigation event " +
                  u.a[e] +
                  " - " +
                  F[t] +
                  " - " +
                  w[n],
                this.m_element
              ),
              n == w.INVALID)
            )
              return !1;
            if (this.m_Properties.focusable && this.m_bFocused)
              return G("Skipping navigation within focused element"), !1;
            if ((this.EnsureChildrenSorted(!0), t == F.GRID))
              return this.BPerformGridNavigation(this.m_iActiveChild, n, e);
            var i = this.m_iActiveChild;
            return (
              -1 == i && (i = n == w.FORWARD ? -1 : this.m_rgChildren.length),
              this.BFocusNextChildInDirection(o.GAMEPAD, i, n, e)
            );
          }),
          (e.prototype.ComputeRelativeDirection = function (e, t) {
            var n = t == F.ROW_REVERSE || t == F.COLUMN_REVERSE;
            switch (t) {
              case F.ROW:
              case F.ROW_REVERSE:
                switch (e) {
                  case u.a.DIR_LEFT:
                    return n ? w.FORWARD : w.BACKWARD;
                  case u.a.DIR_RIGHT:
                    return n ? w.BACKWARD : w.FORWARD;
                  default:
                    return w.INVALID;
                }
              case F.COLUMN:
              case F.COLUMN_REVERSE:
                switch (e) {
                  case u.a.DIR_UP:
                    return n ? w.FORWARD : w.BACKWARD;
                  case u.a.DIR_DOWN:
                    return n ? w.BACKWARD : w.FORWARD;
                  default:
                    return w.INVALID;
                }
              case F.GRID:
                switch (e) {
                  case u.a.DIR_LEFT:
                  case u.a.DIR_UP:
                    return n ? w.FORWARD : w.BACKWARD;
                  case u.a.DIR_RIGHT:
                  case u.a.DIR_DOWN:
                    return n ? w.BACKWARD : w.FORWARD;
                  default:
                    return w.INVALID;
                }
              default:
                return w.INVALID;
            }
          }),
          (e.prototype.AdvanceIndex = function (e, t) {
            return e + (t == w.FORWARD ? 1 : -1);
          }),
          (e.prototype.BFocusNextChildInDirection = function (e, t, n, i) {
            for (
              var o = n == w.FORWARD ? 1 : -1, r = t + o;
              r >= 0 && r < this.m_rgChildren.length;
              r += o
            ) {
              if (this.m_rgChildren[r].BTakeFocus(e, i))
                return (this.m_iActiveChild = r), !0;
            }
            return !1;
          }),
          (e.prototype.ScanChildren = function (e, t, n) {
            for (
              var i = t == w.FORWARD ? 1 : -1, o = e;
              o >= 0 && o < this.m_rgChildren.length;
              o += i
            )
              if (n(this.m_rgChildren[o], o)) return o;
            return -1;
          }),
          (e.prototype.BPerformGridNavigation = function (e, t, n) {
            var i = n == u.a.DIR_UP || n == u.a.DIR_DOWN,
              r = this.GetLastFocusElement();
            if (!r || r == this.m_element)
              return (
                !!this.BFocusNextChildInDirection(
                  o.GAMEPAD,
                  this.m_iActiveChild,
                  t,
                  n
                ) ||
                this.BFocusNextChildInDirection(
                  o.GAMEPAD,
                  this.m_iActiveChild,
                  t == w.FORWARD ? w.BACKWARD : w.FORWARD,
                  n
                )
              );
            var a = (this.GetActiveChild() || this).GetBoundingRect();
            if (n == u.a.DIR_UP || n == u.a.DIR_DOWN) {
              var s = this.m_Tree.GetLastFocusedMovementNode("x");
              if (s) {
                var c = s.GetBoundingRect();
                (a.x = c.x), (a.width = c.width);
              }
            }
            if (!i) {
              var l = !1;
              return (
                -1 !=
                  this.ScanChildren(this.AdvanceIndex(e, t), t, function (e) {
                    return V("y", a, e.GetBoundingRect())
                      ? e.BTakeFocus(o.GAMEPAD, n)
                      : ((l = !0), !0);
                  }) && !l
              );
            }
            var h = this.ScanChildren(this.AdvanceIndex(e, t), t, function (e) {
              return !V("y", a, e.GetBoundingRect());
            });
            if (-1 == h) return !1;
            var p = this.m_rgChildren[h].GetBoundingRect(),
              d = X(a);
            return !!this.BFocusClosestChildInNextAxiallyAlignedSet(
              "x",
              t,
              n,
              d,
              h,
              p
            );
          }),
          (e.prototype.BFocusClosestChildInNextAxiallyAlignedSet = function (
            e,
            t,
            n,
            i,
            r,
            a
          ) {
            (!r || r < 0) && (r = 0);
            var s = [];
            this.ScanChildren(r, t, function (t) {
              return (
                !(!a || V(b[e], a, t.GetBoundingRect())) ||
                (s.push({ child: t, dist: Y(e, i, t.GetBoundingRect()) }), !1)
              );
            }),
              t == w.BACKWARD && s.reverse(),
              s.sort(function (e, t) {
                return e.dist - t.dist;
              });
            for (var u = 0, c = s; u < c.length; u++) {
              if (c[u].child.BTakeFocus(o.GAMEPAD, n)) return !0;
            }
            return !1;
          }),
          (e.prototype.GetChildren = function () {
            return (
              this.EnsureChildrenSorted(),
              [this.m_rgChildren, this.m_iActiveChild]
            );
          }),
          (e.prototype.SetActiveChild = function (t) {
            var n;
            t instanceof e
              ? (this.EnsureChildrenSorted(),
                (n = this.m_rgChildren.indexOf(t)))
              : (n = t),
              (this.m_iActiveChild = n);
          }),
          (e.prototype.GetDepth = function () {
            return this.m_nDepth;
          }),
          Object(r.c)([m.a], e.prototype, "OnFocusIn", null),
          Object(r.c)([m.a], e.prototype, "OnDOMFocus", null),
          Object(r.c)([m.a], e.prototype, "OnDOMBlur", null),
          Object(r.c)([m.a], e.prototype, "OnNavigationEvent", null),
          e
        );
      })();
      function U(e, t) {
        for (var n, i = e; null != i; i = i.Parent) {
          var o = i.GetScrollSnapProps(),
            r =
              "x" === t
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
                  "x" === t
                    ? o.navScrollSnapOffsetX
                    : o.navScrollSnapOffsetY) && void 0 !== n
                ? n
                : 0;
            return { elementToSnap: i.Element, snapType: r, nMargin: a };
          }
        }
      }
      function W(e, t) {
        var n = t.elementToSnap,
          i = t.snapType,
          o = t.nMargin;
        if (i != P.NONE)
          for (
            var r = C(n),
              a = n.getBoundingClientRect(),
              s =
                "x" === e
                  ? { min: a.left * r, max: a.right * r }
                  : { min: a.top * r, max: a.bottom * r },
              u = i === P.CENTER ? -1 : 1,
              c = s.min - o * r,
              l = s.max + u * o * r,
              h = n.parentElement;
            null != h;
            h = h.parentElement
          )
            if (y(h, e)) {
              var p = C(h),
                d = h.getBoundingClientRect(),
                m =
                  "x" === e
                    ? { min: d.left * p, max: d.right * p }
                    : { min: d.top * p, max: d.bottom * p };
              if (!(i === P.LAZY && m.min <= c && m.max >= l)) {
                var _ = { min: c - m.min, max: l - m.max },
                  v =
                    i === P.START
                      ? 0
                      : i === P.CENTER
                      ? 0.5
                      : i === P.END
                      ? 1
                      : Math.abs(_.min) <= Math.abs(_.max)
                      ? 0
                      : 1,
                  g = ((1 - v) * _.min + v * _.max) / p;
                "x" === e ? (h.scrollLeft += g) : (h.scrollTop += g);
              }
            }
      }
      function x(e) {
        if (e.Element) {
          var t = U(e, "x"),
            n = U(e, "y");
          t && W("x", t), n && W("y", n);
        }
      }
      var K = new O("FocusNavigation").Debug,
        j = (function () {
          function e() {
            (this.m_rgGamepadInputSources = []),
              (this.m_rgGamepadNavigationTrees = []),
              (this.m_LastActiveNavTree = null),
              (this.m_LastActiveFocusNavTree = null),
              (this.m_bGlobalEventsInitialized = !1),
              (this.m_bSuppressGamepadInput = !1),
              (this.m_FocusChangedCallbacks = new E.a()),
              (this.m_mapUnhandledEventsCallbacks = new Map()),
              (this.m_navigationSource = Object(E.b)({
                eActivationSourceType: u.b.UNKNOWN,
                nActiveGamepadIndex: -1,
                nLastActiveGamepadIndex: -1,
              })),
              (this.m_iFocusChangeStack = 0),
              (window.FocusNavController = this);
          }
          return (
            (e.prototype.RegisterInputSource = function (e) {
              this.m_rgGamepadInputSources.push(e),
                e.RegisterForGamepadButtonDown(this.OnButtonDown),
                e.RegisterForGamepadButtonUp(this.OnButtonUp),
                e.RegisterForNavigationTypeChange(this.OnNavigationTypeChange);
            }),
            Object.defineProperty(e.prototype, "FocusChangedCallbacks", {
              get: function () {
                return this.m_FocusChangedCallbacks;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "NavigationSource", {
              get: function () {
                return this.m_navigationSource;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.DispatchVirtualButtonPress = function (e) {
              this.OnButtonDown(e, u.b.UNKNOWN, -1);
            }),
            (e.prototype.DispatchVirtualButtonClick = function (e) {
              this.OnButtonDown(e, u.b.UNKNOWN, -1),
                this.OnButtonUp(e, u.b.UNKNOWN, -1);
            }),
            (e.prototype.BGlobalGamepadButton = function (e) {
              return (
                e === u.a.STEAM_GUIDE ||
                e === u.a.STEAM_QUICK_MENU ||
                e === u.a.CANCEL
              );
            }),
            (e.prototype.GetEventTarget = function (e) {
              var t = document.activeElement;
              if (this.m_LastActiveNavTree) {
                var n = this.m_navigationSource.Value.eActivationSourceType;
                if (
                  !(
                    (n != u.b.GAMEPAD && n != u.b.KEYBOARD) ||
                    this.m_LastActiveNavTree.GetLastFocusedNode() ||
                    (this.m_LastActiveNavTree.TakeFocus(o.GAMEPAD),
                    this.BGlobalGamepadButton(e))
                  )
                )
                  return null;
                this.m_LastActiveNavTree.GetLastFocusedNode() &&
                  (t = this.m_LastActiveNavTree
                    .GetLastFocusedNode()
                    .GetLastFocusElement());
              }
              return t;
            }),
            (e.prototype.ChangeNavigationSource = function (e, t) {
              var n = this.m_navigationSource.Value,
                i = n.nLastActiveGamepadIndex;
              n.nActiveGamepadIndex >= 0 && (i = n.nActiveGamepadIndex),
                this.m_navigationSource.Set({
                  eActivationSourceType: e,
                  nActiveGamepadIndex: t,
                  nLastActiveGamepadIndex: i,
                });
            }),
            (e.prototype.OnButtonDown = function (e, t, n, i) {
              var o;
              if (this.m_bSuppressGamepadInput)
                K(
                  "Ignoring button press - gamepad input is suppressed by parent window"
                );
              else {
                this.ChangeNavigationSource(t, n);
                var r = this.GetEventTarget(e);
                K(
                  "Firing " +
                    u.a[e] +
                    " in tree " +
                    (null === (o = this.m_LastActiveNavTree) || void 0 === o
                      ? void 0
                      : o.id) +
                    " at ",
                  r
                ),
                  p(r, "vgp_onbuttondown", {
                    button: e,
                    source: t,
                    is_repeat: i,
                  });
              }
            }),
            (e.prototype.OnButtonUp = function (e, t, n) {
              this.m_bSuppressGamepadInput ||
                (this.ChangeNavigationSource(t, n),
                p(this.GetEventTarget(), "vgp_onbuttonup", {
                  button: e,
                  source: t,
                  is_repeat: !1,
                }));
            }),
            (e.prototype.OnNavigationTypeChange = function (e) {
              var t;
              if (
                (this.ChangeNavigationSource(e, -1),
                e == u.b.MOUSE || e == u.b.TOUCH)
              ) {
                var n = this.m_LastActiveNavTree.GetLastFocusedNode(),
                  i = (function (e) {
                    if (!f(e)) return !1;
                    var t = e.tagName,
                      n = ((i = e), "INPUT" === i.nodeName ? e.type : null);
                    var i;
                    return (function (e, t) {
                      switch (e) {
                        case "TEXTAREA":
                          return !0;
                        case "INPUT":
                          switch (t) {
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
                    })(t, n);
                  })(null == n ? void 0 : n.Element)
                    ? n
                    : null;
                null === (t = this.m_LastActiveNavTree) ||
                  void 0 === t ||
                  t.TransferFocus(o.BROWSER, i);
              }
            }),
            (e.prototype.NewGamepadNavigationTree = function (e) {
              return new z(this, e);
            }),
            (e.prototype.RegisterGamepadNavigationTree = function (e, t) {
              var n = this;
              return (
                e.SetIsMounted(),
                t
                  ? this.m_rgGamepadNavigationTrees.unshift(e)
                  : (this.m_rgGamepadNavigationTrees.push(e),
                    this.SetActiveNavTree(e, !0)),
                this.m_bGlobalEventsInitialized ||
                  this.BindGlobalEventHandlers(),
                function () {
                  return n.UnregisterGamepadNavigationTree(e);
                }
              );
            }),
            (e.prototype.UnregisterGamepadNavigationTree = function (e) {
              v.a(this.m_rgGamepadNavigationTrees, e),
                this.m_LastActiveNavTree == e &&
                  ((this.m_LastActiveNavTree = null),
                  this.SetActiveNavTree(null, !0));
            }),
            (e.prototype.OnGamepadNavigationTreeActivated = function (e, t, n) {
              void 0 === n && (n = !1),
                t != o.BROWSER
                  ? this.SetActiveNavTree(e, n)
                  : e != this.m_LastActiveFocusNavTree &&
                    K(
                      "Not activating nav tree " +
                        e.id +
                        ", browser initiated event"
                    );
            }),
            (e.prototype.BlurNavTree = function (e) {
              this.m_LastActiveNavTree == e && this.SetActiveNavTree(null, !0),
                v.a(this.m_rgGamepadNavigationTrees, e),
                this.m_rgGamepadNavigationTrees.unshift(e);
            }),
            (e.prototype.IsActiveFocusNavTree = function (e) {
              return e == this.m_LastActiveFocusNavTree;
            }),
            (e.prototype.SetActiveNavTree = function (e, t) {
              if (
                (void 0 === t && (t = !1), !e || this.m_LastActiveNavTree != e)
              ) {
                var n = this.m_LastActiveNavTree;
                n &&
                  (n.OnDeactivate(), v.a(this.m_rgGamepadNavigationTrees, n)),
                  e ||
                    (this.m_rgGamepadNavigationTrees.length &&
                      (e = this.m_rgGamepadNavigationTrees[
                        this.m_rgGamepadNavigationTrees.length - 1
                      ]));
                var i = this.m_LastActiveFocusNavTree == e;
                e && v.a(this.m_rgGamepadNavigationTrees, e),
                  (this.m_LastActiveNavTree = e),
                  (e && e.BUseVirtualFocus()) ||
                    (this.m_LastActiveFocusNavTree = e),
                  K(
                    "Move from nav tree " +
                      (null == n ? void 0 : n.id) +
                      " to nav tree " +
                      (null == e ? void 0 : e.id) +
                      " " +
                      (t ? "taking focus" : "no focus")
                  ),
                  n && this.m_rgGamepadNavigationTrees.push(n),
                  e &&
                    (this.m_rgGamepadNavigationTrees.push(e),
                    e.OnActivate(!i && t));
              }
            }),
            (e.prototype.BindGlobalEventHandlers = function () {
              var e = this;
              this.m_bGlobalEventsInitialized ||
                (h(window, function (t) {
                  document.body == document.activeElement &&
                    e.m_LastActiveNavTree &&
                    e.m_LastActiveNavTree.Root.BTakeFocus(o.GAMEPAD);
                }),
                (this.m_bGlobalEventsInitialized = !0));
            }),
            (e.prototype.OnFocusChangeStart = function (e, t, n, i) {
              return (
                0 == this.m_iFocusChangeStack
                  ? (this.m_ActiveFocusChange = { source: e, from: n, to: i })
                  : !this.m_ActiveFocusChange.from &&
                    n &&
                    (this.m_ActiveFocusChange.from = n),
                this.m_iFocusChangeStack++
              );
            }),
            (e.prototype.OnFocusChangeComplete = function (e) {
              if (
                (this.m_iFocusChangeStack--,
                Object(g.a)(
                  e == this.m_iFocusChangeStack,
                  "out of order focus pop"
                ),
                0 == this.m_iFocusChangeStack)
              ) {
                var t = this.m_ActiveFocusChange,
                  n = t.source,
                  i = t.from,
                  o = t.to;
                this.m_FocusChangedCallbacks.Dispatch(n, i, o);
              }
            }),
            (e.prototype.RegisterForUnhandledButtonDownEvents = function (e) {
              return this.InsertUnhandledEventCallback("vgp_onbuttondown", e);
            }),
            (e.prototype.InsertUnhandledEventCallback = function (e, t) {
              var n = this.m_mapUnhandledEventsCallbacks.get(e);
              return (
                void 0 === n &&
                  ((n = new E.a()),
                  this.m_mapUnhandledEventsCallbacks.set(e, n)),
                n.Register(t)
              );
            }),
            (e.prototype.FireUnhandledGamepadEventCallbacks = function (e) {
              var t = this.m_mapUnhandledEventsCallbacks.get(e.type);
              t && t.Dispatch(e);
            }),
            (e.prototype.SetSuppressGamepadInput = function (e) {
              this.m_bSuppressGamepadInput = e;
            }),
            Object(r.c)([m.a], e.prototype, "OnButtonDown", null),
            Object(r.c)([m.a], e.prototype, "OnButtonUp", null),
            Object(r.c)([m.a], e.prototype, "OnNavigationTypeChange", null),
            e
          );
        })();
      var H = (function () {
        function e(e) {
          (this.m_node = e), (this.m_History = new R(e));
        }
        return (
          (e.prototype.TakeFocus = function (e) {
            return this.m_node.BTakeFocus(o.APPLICATION, e);
          }),
          (e.prototype.BFocusWithin = function () {
            return this.m_node.BFocusWithin();
          }),
          Object.defineProperty(e.prototype, "NavKey", {
            get: function () {
              return this.m_node.NavKey;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.prototype.PushState = function () {
            this.m_History.PushState();
          }),
          (e.prototype.PopState = function () {
            this.m_History && this.m_History.PopState();
          }),
          (e.prototype.ScrollSnap = function () {
            x(this.m_node);
          }),
          (e.prototype.NavTree = function () {
            return this.m_node.Tree;
          }),
          (e.prototype.Node = function () {
            return this.m_node;
          }),
          e
        );
      })();
      function V(e, t, n) {
        return "x" == e
          ? t.x + t.width > n.x && t.x < n.x + n.width
          : "y" == e
          ? t.y + t.height > n.y && t.y < n.y + n.height
          : (Object(g.a)(!1, "Invalid axis " + e), !1);
      }
      function Y(e, t, n) {
        var i = t[e],
          o = (function (e, t) {
            return "x" == e
              ? { min: t.x, max: t.x + t.width }
              : "y" == e
              ? { min: t.y, max: t.y + t.height }
              : void Object(g.a)(!1, "Invalid axis " + e);
          })(e, n);
        return i < o.min ? o.min - i : i > o.max ? i - o.max : 0;
      }
      function X(e) {
        return { x: e.x, y: e.y };
      }
      var z = (function () {
        function e(e, t) {
          (this.m_onActivateCallbacks = new E.a()),
            (this.m_onDeactivateCallbacks = new E.a()),
            (this.m_Controller = e),
            (this.m_ID = t),
            (this.m_Root = new M(this, null, null)),
            this.m_Root.SetProperties({ layout: F.COLUMN }),
            (window.GamepadNavTree = this);
        }
        return (
          (e.prototype.SetUseVirtualFocus = function (e) {
            this.m_bVirtualFocus = e;
          }),
          Object.defineProperty(e.prototype, "id", {
            get: function () {
              return this.m_ID;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "Root", {
            get: function () {
              return this.m_Root;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "Controller", {
            get: function () {
              return this.m_Controller;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.prototype.BUseVirtualFocus = function () {
            return this.m_bVirtualFocus;
          }),
          (e.prototype.CreateNode = function (e, t) {
            return new M(this, e, t);
          }),
          (e.prototype.RegisterNavigationItem = function (e, t) {
            return (
              e.OnMount(t),
              function () {
                return e.OnUnmount();
              }
            );
          }),
          (e.prototype.OnChildActivated = function (e) {
            this.m_bIsMounted &&
              this.m_Controller.OnGamepadNavigationTreeActivated(this, e);
          }),
          (e.prototype.GetLastFocusedNode = function () {
            return this.m_lastFocusNode;
          }),
          (e.prototype.GetLastFocusedMovementNode = function (e) {
            return "x" == e
              ? this.m_lastFocusNodeXMovement
              : "y" == e
              ? this.m_lastFocusNodeYMovement
              : void 0;
          }),
          Object.defineProperty(e.prototype, "OnActivateCallbacks", {
            get: function () {
              return this.m_onActivateCallbacks;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "OnDeactivateCallbacks", {
            get: function () {
              return this.m_onDeactivateCallbacks;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.prototype.OnActivate = function (e) {
            void 0 === e && (e = !0),
              e && this.TakeFocus(o.APPLICATION),
              this.m_onActivateCallbacks.Dispatch();
          }),
          (e.prototype.IsActiveFocusNavTree = function () {
            return this.m_Controller.IsActiveFocusNavTree(this);
          }),
          (e.prototype.TakeFocus = function (e) {
            var t = !1;
            this.m_lastFocusNode && (t = this.m_lastFocusNode.BTakeFocus(e)),
              t || (t = this.Root.BTakeFocus(e)),
              t || this.TransferFocus(e, this.Root);
          }),
          (e.prototype.OnDeactivate = function () {
            this.m_onDeactivateCallbacks.Dispatch();
          }),
          (e.prototype.Activate = function () {
            this.m_Controller.OnGamepadNavigationTreeActivated(
              this,
              o.APPLICATION,
              !0
            );
          }),
          (e.prototype.Deactivate = function () {
            this.m_Controller.BlurNavTree(this);
          }),
          (e.prototype.SetIsMounted = function () {
            this.m_bIsMounted = !0;
          }),
          (e.prototype.TransferFocus = function (e, t, n) {
            var i = this.m_lastFocusNode;
            if (i != t) {
              K(
                "Transfer focus in " +
                  this.id +
                  ", source: " +
                  o[e] +
                  ", from/to:",
                null == i ? void 0 : i.m_element,
                null == t ? void 0 : t.m_element
              );
              var r = { blurredNode: i, focusedNode: t, source: e };
              i && i.SetHasFocus(!1), t && t.SetHasFocus(!0);
              var a = this.m_Controller.OnFocusChangeStart(e, this, i, t);
              t &&
                (this.BUseVirtualFocus()
                  ? (t.RequestFocus(), x(t))
                  : (function (e, t) {
                      var n = e.Element;
                      if (n) {
                        var i = U(e, "x"),
                          o = U(e, "y");
                        i || o
                          ? (n.focus({ preventScroll: !0 }),
                            i && W("x", i),
                            o && W("y", o))
                          : t
                          ? (n.focus({ preventScroll: !0 }),
                            n.scrollIntoView({
                              behavior: "smooth",
                              block: "nearest",
                            }))
                          : n.focus();
                      }
                    })(t, i)),
                i &&
                  (p(i.Element, "vgp_onblur", r),
                  !i.m_FocusRing ||
                    (t && i.m_FocusRing == t.m_FocusRing) ||
                    i.m_FocusRing.OnBlur(e, i, t)),
                t &&
                  (this.OnChildActivated(e),
                  p(t.Element, "vgp_onfocus", r),
                  t.m_FocusRing &&
                    (i && t.m_FocusRing == i.m_FocusRing
                      ? t.m_FocusRing.OnFocusChange(e, i, t)
                      : t.m_FocusRing.OnFocus(e, t, i))),
                (this.m_lastFocusNode = t),
                "x" == n
                  ? (this.m_lastFocusNodeXMovement = t)
                  : "y" == n
                  ? (this.m_lastFocusNodeYMovement = t)
                  : ((this.m_lastFocusNodeXMovement = void 0),
                    (this.m_lastFocusNodeYMovement = void 0)),
                this.m_Controller.OnFocusChangeComplete(a);
            }
          }),
          e
        );
      })();
      function q(e) {
        if (!e) return F.NONE;
        var t = e.ownerDocument.defaultView,
          n = t.getComputedStyle(e);
        if ("flex" == n.display)
          switch (n.flexDirection) {
            case "row":
              return "wrap" == n.flexWrap ? F.GRID : F.ROW;
            case "row-reverse":
              return F.ROW_REVERSE;
            case "column":
              return F.COLUMN;
            case "column-reverse":
              return F.COLUMN_REVERSE;
          }
        else {
          if ("grid" == n.display) return F.GRID;
          if (e.childElementCount > 0) {
            var i = t.getComputedStyle(e.firstElementChild);
            if ("left" === i.float) return F.ROW;
            if ("right" === i.float) return F.ROW_REVERSE;
            if ("inline" === i.display || "inline-block" === i.display)
              return F.GRID;
          }
        }
        return F.COLUMN;
      }
      var J = "VirtualKeyboardMessage";
      function Q(e) {
        return e && e.type === J;
      }
      var Z = (function () {
        function e() {
          "undefined" != typeof SteamClient &&
            SteamClient.BrowserView.RegisterForMessageFromParent(
              this.OnBrowserViewMessage
            ),
            window.addEventListener("message", this.OnMessage);
        }
        return (
          (e.prototype.ShowVirtualKeyboard = function () {
            this.SendMessage({ message: "ShowVirtualKeyboard" });
          }),
          (e.prototype.HideVirtualKeyboard = function (e) {
            this.SendMessage({ message: "HideVirtualKeyboard", msDelay: e });
          }),
          (e.prototype.OnBrowserViewMessage = function (e, t) {
            e == J && this.InternalDispatchMessage(JSON.parse(t));
          }),
          (e.prototype.OnMessage = function (e) {
            this.InternalDispatchMessage(e.data);
          }),
          (e.prototype.InternalDispatchMessage = function (e) {
            Q(e) && e.message;
          }),
          (e.prototype.SendMessage = function (e) {
            Object(g.a)(
              window.parent && window.parent != window,
              "No parent window to post to"
            );
            var t = Object(r.a)({ type: "VirtualKeyboardMessage" }, e);
            "undefined" != typeof SteamClient &&
            SteamClient.BrowserView &&
            SteamClient.BrowserView.PostMessageToParent
              ? SteamClient.BrowserView.PostMessageToParent(
                  t.type,
                  JSON.stringify(t)
                )
              : window.parent.postMessage(t, "*");
          }),
          Object(r.c)([m.a], e.prototype, "OnBrowserViewMessage", null),
          Object(r.c)([m.a], e.prototype, "OnMessage", null),
          e
        );
      })();
      var $, ee, te;
      !(function (e) {
        (e[(e.k_EConnectivityTestResult_Unknown = 0)] =
          "k_EConnectivityTestResult_Unknown"),
          (e[(e.k_EConnectivityTestResult_Connected = 1)] =
            "k_EConnectivityTestResult_Connected"),
          (e[(e.k_EConnectivityTestResult_CaptivePortal = 2)] =
            "k_EConnectivityTestResult_CaptivePortal"),
          (e[(e.k_EConnectivityTestResult_TimedOut = 3)] =
            "k_EConnectivityTestResult_TimedOut"),
          (e[(e.k_EConnectivityTestResult_Failed = 4)] =
            "k_EConnectivityTestResult_Failed");
      })($ || ($ = {})),
        (function (e) {
          (e[(e.k_EConnectivityTestSimulation_None = 0)] =
            "k_EConnectivityTestSimulation_None"),
            (e[(e.k_EConnectivityTestSimulation_CaptivePortal_Redirected = 1)] =
              "k_EConnectivityTestSimulation_CaptivePortal_Redirected"),
            (e[(e.k_EConnectivityTestSimulation_CaptivePortal_InPlace = 2)] =
              "k_EConnectivityTestSimulation_CaptivePortal_InPlace"),
            (e[(e.k_EConnectivityTestSimulation_TimeOut = 3)] =
              "k_EConnectivityTestSimulation_TimeOut"),
            (e[(e.k_EConnectivityTestSimulation_Fail = 4)] =
              "k_EConnectivityTestSimulation_Fail");
        })(ee || (ee = {})),
        (function (e) {
          (e[(e.k_ESuspendResumeProgressState_Invalid = 0)] =
            "k_ESuspendResumeProgressState_Invalid"),
            (e[(e.k_ESuspendResumeProgressState_Complete = 1)] =
              "k_ESuspendResumeProgressState_Complete"),
            (e[(e.k_ESuspendResumeProgressState_CloudSync = 2)] =
              "k_ESuspendResumeProgressState_CloudSync"),
            (e[(e.k_ESuspendResumeProgressState_LoggingIn = 3)] =
              "k_ESuspendResumeProgressState_LoggingIn"),
            (e[(e.k_ESuspendResumeProgressState_WaitingForApp = 4)] =
              "k_ESuspendResumeProgressState_WaitingForApp");
        })(te || (te = {}));
      var ne;
      !(function (e) {
        (e[(e.k_EControllerBindingType_None = 0)] =
          "k_EControllerBindingType_None"),
          (e[(e.k_EControllerBindingType_Key = 1)] =
            "k_EControllerBindingType_Key"),
          (e[(e.k_EControllerBindingType_MouseButton = 2)] =
            "k_EControllerBindingType_MouseButton"),
          (e[(e.k_EControllerBindingType_Gamepad = 3)] =
            "k_EControllerBindingType_Gamepad"),
          (e[(e.k_EControllerBindingType_Mousewheel = 4)] =
            "k_EControllerBindingType_Mousewheel"),
          (e[(e.k_EControllerBindingType_Modeshift = 5)] =
            "k_EControllerBindingType_Modeshift"),
          (e[(e.k_EControllerBindingType_GameAction = 6)] =
            "k_EControllerBindingType_GameAction"),
          (e[(e.k_EControllerBindingType_ControllerAction = 7)] =
            "k_EControllerBindingType_ControllerAction");
      })(ne || (ne = {}));
      var ie;
      !(function (e) {
        (e[(e.Input = 0)] = "Input"),
          (e[(e.AllOutput = 1)] = "AllOutput"),
          (e[(e.Left = 2)] = "Left"),
          (e[(e.Right = 3)] = "Right"),
          (e[(e.Sub = 4)] = "Sub"),
          (e[(e.BackLeft = 5)] = "BackLeft"),
          (e[(e.BackRight = 6)] = "BackRight");
      })(ie || (ie = {}));
      var oe;
      !(function (e) {
        (e[(e.Error = -2)] = "Error"),
          (e[(e.Invalid = -1)] = "Invalid"),
          (e[(e.UpToDate = 0)] = "UpToDate"),
          (e[(e.Checking = 1)] = "Checking"),
          (e[(e.Available = 2)] = "Available"),
          (e[(e.Downloading = 3)] = "Downloading"),
          (e[(e.Downloaded = 4)] = "Downloaded"),
          (e[(e.Applying = 5)] = "Applying"),
          (e[(e.Applied = 6)] = "Applied"),
          (e[(e.ClientRestartPending = 7)] = "ClientRestartPending"),
          (e[(e.SystemRestartPending = 8)] = "SystemRestartPending");
      })(oe || (oe = {}));
      var re;
      !(function (e) {
        (e[(e.EBrowserType_OffScreen = 0)] = "EBrowserType_OffScreen"),
          (e[(e.EBrowserType_OpenVROverlay = 1)] =
            "EBrowserType_OpenVROverlay"),
          (e[(e.EBrowserType_OpenVROverlay_Dashboard = 2)] =
            "EBrowserType_OpenVROverlay_Dashboard"),
          (e[(e.EBrowserType_DirectHWND = 3)] = "EBrowserType_DirectHWND"),
          (e[(e.EBrowserType_DirectHWND_Borderless = 4)] =
            "EBrowserType_DirectHWND_Borderless"),
          (e[(e.EBrowserType_DirectHWND_Hidden = 5)] =
            "EBrowserType_DirectHWND_Hidden"),
          (e[(e.EBrowserType_ChildHWNDNative = 6)] =
            "EBrowserType_ChildHWNDNative"),
          (e[(e.EBrowserType_Transparent_Toplevel = 7)] =
            "EBrowserType_Transparent_Toplevel"),
          (e[(e.EBrowserType_OffScreen_SharedTexture = 8)] =
            "EBrowserType_OffScreen_SharedTexture"),
          (e[(e.EBrowserType_OffScreen_GameOverlay = 9)] =
            "EBrowserType_OffScreen_GameOverlay"),
          (e[(e.EBrowserType_OffScreen_GameOverlay_SharedTexture = 10)] =
            "EBrowserType_OffScreen_GameOverlay_SharedTexture"),
          (e[(e.EBrowserType_Offscreen_FriendsUI = 11)] =
            "EBrowserType_Offscreen_FriendsUI"),
          (e[(e.EBrowserType_MAX = 12)] = "EBrowserType_MAX");
      })(re || (re = {}));
      var ae, se;
      !(function (e) {
        (e[(e.k_EClientUINotificationGroupChatMessage = 1)] =
          "k_EClientUINotificationGroupChatMessage"),
          (e[(e.k_EClientUINotificationFriendChatMessage = 2)] =
            "k_EClientUINotificationFriendChatMessage"),
          (e[(e.k_EClientUINotificationFriendPersonaState = 3)] =
            "k_EClientUINotificationFriendPersonaState");
      })(ae || (ae = {})),
        (function (e) {
          (e[(e.k_EComputerActiveStateInvalid = 0)] =
            "k_EComputerActiveStateInvalid"),
            (e[(e.k_EComputerActiveStateActive = 1)] =
              "k_EComputerActiveStateActive"),
            (e[(e.k_EComputerActiveStateIdle = 2)] =
              "k_EComputerActiveStateIdle");
        })(se || (se = {}));
      var ue;
      !(function (e) {
        (e[(e.k_EPending = 0)] = "k_EPending"),
          (e[(e.k_EAccepted = 1)] = "k_EAccepted"),
          (e[(e.k_ERejected = 2)] = "k_ERejected");
      })(ue || (ue = {}));
      var ce, le;
      !(function (e) {
        (e[(e.k_EClientUsedInputTypeKeyboard = 0)] =
          "k_EClientUsedInputTypeKeyboard"),
          (e[(e.k_EClientUsedInputTypeMouse = 1)] =
            "k_EClientUsedInputTypeMouse"),
          (e[(e.k_EClientUsedInputTypeController = 2)] =
            "k_EClientUsedInputTypeController"),
          (e[(e.k_EClientUsedInputTypeMax = 3)] = "k_EClientUsedInputTypeMax");
      })(ce || (ce = {})),
        (function (e) {
          (e[(e.k_ERemoteClientLaunchOK = 1)] = "k_ERemoteClientLaunchOK"),
            (e[(e.k_ERemoteClientLaunchFail = 2)] =
              "k_ERemoteClientLaunchFail"),
            (e[(e.k_ERemoteClientLaunchRequiresUI = 3)] =
              "k_ERemoteClientLaunchRequiresUI"),
            (e[(e.k_ERemoteClientLaunchRequiresLaunchOption = 4)] =
              "k_ERemoteClientLaunchRequiresLaunchOption"),
            (e[(e.k_ERemoteClientLaunchRequiresEULA = 5)] =
              "k_ERemoteClientLaunchRequiresEULA"),
            (e[(e.k_ERemoteClientLaunchTimeout = 6)] =
              "k_ERemoteClientLaunchTimeout"),
            (e[(e.k_ERemoteClientLaunchStreamTimeout = 7)] =
              "k_ERemoteClientLaunchStreamTimeout"),
            (e[(e.k_ERemoteClientLaunchStreamClientFail = 8)] =
              "k_ERemoteClientLaunchStreamClientFail"),
            (e[(e.k_ERemoteClientLaunchOtherGameRunning = 9)] =
              "k_ERemoteClientLaunchOtherGameRunning"),
            (e[(e.k_ERemoteClientLaunchDownloadStarted = 10)] =
              "k_ERemoteClientLaunchDownloadStarted"),
            (e[(e.k_ERemoteClientLaunchDownloadNoSpace = 11)] =
              "k_ERemoteClientLaunchDownloadNoSpace"),
            (e[(e.k_ERemoteClientLaunchDownloadFiltered = 12)] =
              "k_ERemoteClientLaunchDownloadFiltered"),
            (e[(e.k_ERemoteClientLaunchDownloadRequiresUI = 13)] =
              "k_ERemoteClientLaunchDownloadRequiresUI"),
            (e[(e.k_ERemoteClientLaunchAccessDenied = 14)] =
              "k_ERemoteClientLaunchAccessDenied"),
            (e[(e.k_ERemoteClientLaunchNetworkError = 15)] =
              "k_ERemoteClientLaunchNetworkError"),
            (e[(e.k_ERemoteClientLaunchProgress = 16)] =
              "k_ERemoteClientLaunchProgress"),
            (e[(e.k_ERemoteClientLaunchParentalUnlockFailed = 17)] =
              "k_ERemoteClientLaunchParentalUnlockFailed"),
            (e[(e.k_ERemoteClientLaunchScreenLocked = 18)] =
              "k_ERemoteClientLaunchScreenLocked"),
            (e[(e.k_ERemoteClientLaunchUnsupported = 19)] =
              "k_ERemoteClientLaunchUnsupported"),
            (e[(e.k_ERemoteClientLaunchDisabledLocal = 20)] =
              "k_ERemoteClientLaunchDisabledLocal"),
            (e[(e.k_ERemoteClientLaunchDisabledRemote = 21)] =
              "k_ERemoteClientLaunchDisabledRemote"),
            (e[(e.k_ERemoteClientLaunchBroadcasting = 22)] =
              "k_ERemoteClientLaunchBroadcasting"),
            (e[(e.k_ERemoteClientLaunchBusy = 23)] =
              "k_ERemoteClientLaunchBusy"),
            (e[(e.k_ERemoteClientLaunchDriversNotInstalled = 24)] =
              "k_ERemoteClientLaunchDriversNotInstalled"),
            (e[(e.k_ERemoteClientLaunchTransportUnavailable = 25)] =
              "k_ERemoteClientLaunchTransportUnavailable"),
            (e[(e.k_ERemoteClientLaunchCanceled = 26)] =
              "k_ERemoteClientLaunchCanceled"),
            (e[(e.k_ERemoteClientLaunchInvisible = 27)] =
              "k_ERemoteClientLaunchInvisible"),
            (e[(e.k_ERemoteClientLaunchRestrictedCountry = 28)] =
              "k_ERemoteClientLaunchRestrictedCountry");
        })(le || (le = {}));
      var he;
      !(function (e) {
        (e[(e.k_ESteamRealmUnknown = 0)] = "k_ESteamRealmUnknown"),
          (e[(e.k_ESteamRealmGlobal = 1)] = "k_ESteamRealmGlobal"),
          (e[(e.k_ESteamRealmChina = 2)] = "k_ESteamRealmChina");
      })(he || (he = {}));
      var pe;
      !(function (e) {
        (e[(e.k_BluetoothDeviceType_Invalid = 0)] =
          "k_BluetoothDeviceType_Invalid"),
          (e[(e.k_BluetoothDeviceType_Unknown = 1)] =
            "k_BluetoothDeviceType_Unknown"),
          (e[(e.k_BluetoothDeviceType_Phone = 2)] =
            "k_BluetoothDeviceType_Phone"),
          (e[(e.k_BluetoothDeviceType_Computer = 3)] =
            "k_BluetoothDeviceType_Computer"),
          (e[(e.k_BluetoothDeviceType_Headset = 4)] =
            "k_BluetoothDeviceType_Headset"),
          (e[(e.k_BluetoothDeviceType_Headphones = 5)] =
            "k_BluetoothDeviceType_Headphones"),
          (e[(e.k_BluetoothDeviceType_Speakers = 6)] =
            "k_BluetoothDeviceType_Speakers"),
          (e[(e.k_BluetoothDeviceType_OtherAudio = 7)] =
            "k_BluetoothDeviceType_OtherAudio"),
          (e[(e.k_BluetoothDeviceType_Mouse = 8)] =
            "k_BluetoothDeviceType_Mouse"),
          (e[(e.k_BluetoothDeviceType_Joystick = 9)] =
            "k_BluetoothDeviceType_Joystick"),
          (e[(e.k_BluetoothDeviceType_Gamepad = 10)] =
            "k_BluetoothDeviceType_Gamepad"),
          (e[(e.k_BluetoothDeviceType_Keyboard = 11)] =
            "k_BluetoothDeviceType_Keyboard");
      })(pe || (pe = {}));
      var de, me, _e, ve, ge;
      !(function (e) {
        (e[(e.Unknown = 0)] = "Unknown"),
          (e[(e.Wired = 1)] = "Wired"),
          (e[(e.Wireless = 2)] = "Wireless"),
          (e[(e.Virtual = 3)] = "Virtual");
      })(de || (de = {})),
        (function (e) {
          (e[(e.NotPresent = 0)] = "NotPresent"),
            (e[(e.Failed = 1)] = "Failed"),
            (e[(e.Disconnected = 2)] = "Disconnected"),
            (e[(e.Disconnecting = 3)] = "Disconnecting"),
            (e[(e.Connecting = 4)] = "Connecting"),
            (e[(e.Connected = 5)] = "Connected"),
            (e[(e.Retrying = 6)] = "Retrying");
        })(me || (me = {})),
        (function (e) {
          (e[(e.None = 0)] = "None"),
            (e[(e.Weak = 1)] = "Weak"),
            (e[(e.Ok = 2)] = "Ok"),
            (e[(e.Good = 3)] = "Good"),
            (e[(e.Excellent = 4)] = "Excellent");
        })(_e || (_e = {})),
        (function (e) {
          (e[(e.None = 0)] = "None"),
            (e[(e.StaticWep = 1)] = "StaticWep"),
            (e[(e.DynamicWep = 2)] = "DynamicWep"),
            (e[(e.Wpa = 4)] = "Wpa"),
            (e[(e.WpaEnterprise = 8)] = "WpaEnterprise"),
            (e[(e.Wpa2 = 16)] = "Wpa2"),
            (e[(e.Wpa2Enterprise = 32)] = "Wpa2Enterprise"),
            (e[(e.Unsupported = 32768)] = "Unsupported");
        })(ve || (ve = {})),
        (function (e) {
          (e[(e.k_EHTTPProxyMode_Invalid = 0)] = "k_EHTTPProxyMode_Invalid"),
            (e[(e.k_EHTTPProxyMode_None = 1)] = "k_EHTTPProxyMode_None"),
            (e[(e.k_EHTTPProxyMode_Manual = 2)] = "k_EHTTPProxyMode_Manual"),
            (e[(e.k_EHTTPProxyMode_Automatic = 3)] =
              "k_EHTTPProxyMode_Automatic");
        })(ge || (ge = {}));
      var fe, Ce, ye;
      !(function (e) {
        (e[(e.SystemKey0 = 0)] = "SystemKey0"),
          (e[(e.SystemKey1 = 1)] = "SystemKey1");
      })(fe || (fe = {})),
        (function (e) {
          (e[(e.Hidden = 0)] = "Hidden"),
            (e[(e.Notification = 1)] = "Notification"),
            (e[(e.Overlay = 2)] = "Overlay"),
            (e[(e.Opaque = 3)] = "Opaque"),
            (e[(e.OverlayKeyboard = 4)] = "OverlayKeyboard");
        })(Ce || (Ce = {}));
      var Ee = {
          A: u.a.OK,
          B: u.a.CANCEL,
          X: u.a.SECONDARY,
          Y: u.a.OPTIONS,
          SELECT: u.a.SELECT,
          START: u.a.START,
          LSHOULDER: u.a.BUMPER_LEFT,
          RSHOULDER: u.a.BUMPER_RIGHT,
          LTRIGGER: u.a.TRIGGER_LEFT,
          RTRIGGER: u.a.TRIGGER_RIGHT,
          LEFTSTICK_UP: u.a.DIR_UP,
          LEFTSTICK_RIGHT: u.a.DIR_RIGHT,
          LEFTSTICK_DOWN: u.a.DIR_DOWN,
          LEFTSTICK_LEFT: u.a.DIR_LEFT,
          LEFTSTICK_CLICK: u.a.LSTICK_CLICK,
          RIGHTSTICK_CLICK: u.a.RSTICK_CLICK,
          LeftStick: u.a.LSTICK_TOUCH,
          RightStick: u.a.RSTICK_TOUCH,
          LeftTrackpad: u.a.LPAD_TOUCH,
          LeftTrackpadClick: u.a.LPAD_CLICK,
          RightTrackpad: u.a.RPAD_TOUCH,
          RightTrackpadClick: u.a.RPAD_CLICK,
          RearLeftUpper: u.a.REAR_LEFT_UPPER,
          RearLeftLower: u.a.REAR_LEFT_LOWER,
          RearRightUpper: u.a.REAR_RIGHT_UPPER,
          RearRightLower: u.a.REAR_RIGHT_LOWER,
        },
        Re =
          (((ye = {})[fe.SystemKey0] = u.a.STEAM_GUIDE),
          (ye[fe.SystemKey1] = u.a.STEAM_QUICK_MENU),
          ye),
        be = (u.c, new Z()),
        Te = !1;
      function Ne(e) {
        if (!Te) {
          var t = new j();
          t.RegisterInputSource(e),
            (function (e) {
              s()("html").addClass("gpnav_active");
              var t = s()("body"),
                n = e.NewGamepadNavigationTree("legacy"),
                i = (function (e) {
                  var t = 0;
                  e.children().each(function () {
                    var e = s()(this),
                      n = e.css("zIndex");
                    "auto" === n
                      ? e.css("zIndex", 0)
                      : isNaN(parseInt(n)) || (t = Math.max(t, parseInt(n)));
                  });
                  var n = s()("<div/>", {
                      style:
                        "position: absolute; pointer-events: none; top: 0; left: 0; z-index: " +
                        ((t || 100) + 1),
                    }),
                    i = s()("<div/>", {
                      style:
                        "display: none; position: absolute; pointer-events: none; ",
                      class: "gpfocusring",
                    });
                  n.append(i), e.prepend(n);
                  var o = function (e) {
                    if (e && e.BWantsFocusRing()) {
                      var t = e.GetBoundingRect(),
                        o = n[0].getBoundingClientRect();
                      i.css({
                        left: t.x - o.x - 4,
                        top: t.y - o.y - 4,
                        height: t.height,
                        width: t.width,
                      }),
                        i.show();
                    } else i.hide();
                  };
                  return {
                    OnBlur: function () {
                      return o(null);
                    },
                    OnFocus: function (e, t) {
                      return o(t);
                    },
                    OnFocusChange: function (e, t, n) {
                      return o(n);
                    },
                  };
                })(t);
              (n.Root.m_FocusRing = i),
                n.Root.SetProperties({}),
                Oe.set(document.body, n.Root),
                Ie(document.body, n.Root),
                Le(),
                e.RegisterGamepadNavigationTree(n, !1),
                s()(document.body).on("vgp_onbuttondown", function (e) {
                  !(function (e) {
                    var t = [
                        u.a.DIR_UP,
                        u.a.DIR_DOWN,
                        u.a.DIR_LEFT,
                        u.a.DIR_RIGHT,
                      ],
                      n = c[e.detail.button];
                    n
                      ? p(e.target, n, e.detail)
                      : -1 !== t.indexOf(e.detail.button) &&
                        p(e.target, "vgp_ondirection", e.detail);
                  })(e.originalEvent);
                }),
                new MutationObserver(Se).observe(document.body, {
                  childList: !0,
                  subtree: !0,
                });
            })(t),
            new _(t);
        }
        Te = !0;
      }
      function Se(e) {
        for (var t = [], n = [], i = 0, o = e; i < o.length; i++) {
          var r = o[i];
          if ("childList" === r.type) {
            for (var a = 0; a < r.addedNodes.length; a++) {
              (u = r.addedNodes[a]).nodeType === Node.ELEMENT_NODE && t.push(u);
            }
            for (a = 0; a < r.removedNodes.length; a++) {
              var u;
              (u = r.removedNodes[a]).nodeType === Node.ELEMENT_NODE &&
                n.push(u);
            }
          }
        }
        t.length && Le(s()(t)),
          n.length &&
            s()(n)
              .find("*")
              .addBack()
              .each(function () {
                var e = ke.get(this);
                e && e(), Oe.delete(this), ke.delete(this);
              });
      }
      var Oe = new WeakMap(),
        ke = new WeakMap(),
        Ae = [];
      function Ie(e, t) {
        if (t) {
          var n = t.GetDepth();
          Ae[n] || (Ae[n] = []), Ae[n].push([e, t]);
        }
        Oe.set(e, t);
      }
      function De(e) {
        return "jquery" in e ? Oe.get(e[0]) : Oe.get(e);
      }
      function Le(e) {
        performance.now();
        var t = "a,button,input:not(input[type=hidden]),label,[data-panel]";
        s()(t, e)
          .addBack(t)
          .each(function () {
            !(function (e) {
              var t = s()(e).data("navNode");
              if (!1 === t) return;
              t || we(e);
            })(this);
          }),
          (function () {
            for (var e = Ae.length - 1; e >= 0; e--)
              if (Ae[e])
                for (var t = 0, n = Ae[e]; t < n.length; t++) {
                  var i = n[t],
                    o = i[0],
                    r = i[1];
                  ke.set(o, r.Tree.RegisterNavigationItem(r, o));
                }
            Ae = [];
          })();
      }
      function Fe(e) {
        var t = s()(e.Element);
        return (
          t.is(":visible") &&
          ((t.outerWidth() > 0 && t.outerHeight() > 0) ||
            "hidden" !== t.css("overflow"))
        );
      }
      function Be(e) {
        this.click(), e.stopPropagation();
      }
      function Pe(e) {
        s()(this).find("a").first().trigger("click");
      }
      function we(e) {
        var t = s()(e),
          n = Ge(e),
          i = n.Tree.CreateNode(n, n.m_FocusRing),
          o = t.data("panel") || {};
        if ("A" == e.tagName || "BUTTON" == e.tagName || "LABEL" == e.tagName)
          (o.focusable = !0), (o.clickOnActivate = !0);
        else if ("INPUT" == e.tagName)
          switch (((o.focusable = !0), e.getAttribute("type"))) {
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
          c = o.maintainX,
          l = o.maintainY,
          h = o.enableVirtualKeyboard,
          p = Object(r.f)(o, [
            "clickOnActivate",
            "maintainX",
            "maintainY",
            "enableVirtualKeyboard",
          ]),
          d = a
            ? (function (e) {
                switch (e) {
                  case "column":
                    return F.COLUMN;
                  case "column-reverse":
                    return F.COLUMN_REVERSE;
                  case "row":
                    return F.ROW;
                  case "row-reverse":
                    return F.ROW_REVERSE;
                  case "grid":
                    return F.GRID;
                  default:
                    return F.NONE;
                }
              })(a)
            : F.NONE;
        d != F.NONE && (p.layout = d),
          c
            ? (p.navEntryPreferPosition = B.MAINTAIN_X)
            : l && (p.navEntryPreferPosition = B.MAINTAIN_Y),
          u &&
            (!1 !== p.focusable && (p.focusable = !0),
            t.on("vgp_onok", "firstChild" === u ? Pe : Be)),
          h &&
            (t.on("vgp_onok.vkbindings", function () {
              return be.ShowVirtualKeyboard();
            }),
            t.on("click.vkbindings", function () {
              return be.ShowVirtualKeyboard();
            }),
            t.on("blur.vkbindings", function () {
              return be.HideVirtualKeyboard();
            })),
          p.focusable && void 0 === t.attr("tabIndex") && t.attr("tabIndex", 0),
          p.focusable &&
            i.FocusCallbackList.Register(function (t) {
              return (function (e, t) {
                t ? s()(e).addClass("gpfocus") : s()(e).removeClass("gpfocus");
              })(e, t);
            });
        var m = Object(r.a)({ fnCanTakeFocus: Fe }, p);
        return i.SetProperties(m), Ie(e, i), i;
      }
      function Ge(e) {
        var t = e.parentElement;
        if (!t) return console.error("no parent"), null;
        var n = De(t);
        return (
          n ||
            !1 === n ||
            (n = (function (e) {
              var t = !1;
              switch (e.tagName) {
                case "A":
                case "INPUT":
                  t = !0;
                  break;
                case "DIV":
                  if (q(e) != F.COLUMN) t = !0;
                  else {
                    var n = q(e.parentElement);
                    (n != F.ROW && n != F.ROW_REVERSE) || (t = !0);
                  }
              }
              var i = !1;
              return t ? (i = we(e)) : Ie(e, !1), i;
            })(t)),
          n || Ge(t)
        );
      }
      (window.InstrumentFocusElements = Le),
        (window.GPNavFocusChild = function (e) {
          var t = De(e[0]);
          return t || (t = Ge(e[0])), !!t && t.BTakeFocus(o.APPLICATION);
        });
    },
  },
]);

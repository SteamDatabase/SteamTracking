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
          return yt;
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
      function h(t, e, n) {
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
      var d = { x: "y", y: "x" };
      var m,
        g = n("r64O"),
        v = n("XxJJ"),
        f = n("qiKp"),
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
        b = [
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
      })(m || (m = {}));
      var y = (function () {
          function t(t, e) {
            (this.m_fnIdGenerator = null),
              (this.m_sName = t),
              (this.m_fnIdGenerator = e),
              C.Get().RegisterLogName(t);
          }
          return (
            (t.prototype.Debug = function () {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
              this.Log.apply(this, Object(r.g)([m.Debug], t));
            }),
            (t.prototype.Info = function () {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
              this.Log.apply(this, Object(r.g)([m.Info], t));
            }),
            (t.prototype.Warning = function () {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
              this.Log.apply(this, Object(r.g)([m.Warning], t));
            }),
            (t.prototype.Error = function () {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
              this.Log.apply(this, Object(r.g)([m.Error], t));
            }),
            (t.prototype.Assert = function (t) {
              for (var e = [], n = 1; n < arguments.length; n++)
                e[n - 1] = arguments[n];
              t ||
                this.Log.apply(
                  this,
                  Object(r.g)([m.Error, "Assertion failed:"], e)
                );
            }),
            (t.prototype.Log = function (t) {
              for (var e, n, o = [], i = 1; i < arguments.length; i++)
                o[i - 1] = arguments[i];
              if (t != m.Debug || C.Get().IsDebugLogEnabled(this.m_sName)) {
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
                var c = C.Get().IncludeBacktraceInLog;
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
        C = (function () {
          function t() {
            (this.m_Storage = null),
              (this.m_rgLogNames = null),
              (this.m_setEnabledDebugLogs = new Set()),
              (this.m_bIncludeBacktraceInLog = !1),
              (this.m_SettingsChangedCallback = new f.a()),
              (this.m_bLoading = !1),
              (this.m_Storage = new _()),
              (this.m_rgLogNames = b.slice()),
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
                    m.Info,
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
                        (this.m_setEnabledDebugLogs = new Set(t ? b : [])),
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
      function N(t) {
        for (var e = 0, n = 0; n < t.length; n++)
          e = t.charCodeAt(n) + ((e << 5) - e);
        return [(e >> 0) & 255, (e >> 8) & 255, (e >> 16) & 255];
      }
      function O(t) {
        return (299 * t[0] + 587 * t[1] + 114 * t[2]) / 1e3 >= 128;
      }
      function A(t) {
        switch (t) {
          case m.Debug:
            return String.fromCodePoint(128027);
          case m.Info:
            return String.fromCodePoint(8505);
          case m.Warning:
            return String.fromCodePoint(9888);
          case m.Error:
            return String.fromCodePoint(128165);
        }
      }
      function R(t, e, n, o) {
        for (var i = [], a = 4; a < arguments.length; a++)
          i[a - 4] = arguments[a];
        var s = N(o),
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
            case m.Debug:
            case m.Info:
              console.log.apply(console, h);
              break;
            case m.Warning:
              console.warn.apply(console, h);
              break;
            case m.Error:
              console.error.apply(console, h);
          }
      }
      var F = n("Kw0F"),
        D = (function () {
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
                  var p = s.get(r[i].sNavKey);
                  p && e.SetActiveChild(a.indexOf(p));
                }
                for (var d = 0, m = 0; d < a.length && m < r.length; ) {
                  for (; d < a.length && a[d].NavKey; ) d++;
                  for (; m < r.length && r[m].sNavKey; ) m++;
                  if (d >= a.length || m >= r.length) break;
                  t.RestoreSerializedNavNode(a[d], r[m]), d++, m++;
                }
              }
            }),
            t
          );
        })();
      var I = (function (t) {
        function e() {
          var e = (null !== t && t.apply(this, arguments)) || this;
          return (e.m_rgHistory = []), e;
        }
        return (
          Object(r.d)(e, t),
          (e.prototype.PushState = function () {
            this.m_rgHistory.push(D.SerializeNavNode(this.m_root));
          }),
          (e.prototype.PopState = function () {
            this.m_rgHistory.length &&
              (D.RestoreSerializedNavNode(this.m_root, this.m_rgHistory.pop()),
              this.m_root.BTakeFocus(i.APPLICATION));
          }),
          e
        );
      })(D);
      function E(t) {
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
        if (o != Z.NONE)
          for (
            var r = S(n),
              a = n.getBoundingClientRect(),
              s =
                "x" === t
                  ? { min: a.left * r, max: a.right * r }
                  : { min: a.top * r, max: a.bottom * r },
              c = o === Z.CENTER ? -1 : 1,
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
              if (!(o === Z.LAZY && m.min <= u && m.max >= l)) {
                var g = { min: u - m.min, max: l - m.max },
                  v =
                    o === Z.START
                      ? 0
                      : o === Z.CENTER
                      ? 0.5
                      : o === Z.END
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
      var G;
      function M(t) {
        if (t.Element) {
          var e = w(t, "x"),
            n = w(t, "y");
          e && L("x", e), n && L("y", n);
        }
      }
      var k = new y("FocusNavigation").Debug,
        W = new y("GamepadEvents").Debug,
        x = "focus-nav-show-debug-focus-ring";
      var j = (function () {
        function t() {
          (this.m_rgGamepadInputSources = []),
            (this.m_rgGamepadNavigationTrees = []),
            (this.m_LastActiveNavTree = null),
            (this.m_LastActiveFocusNavTree = null),
            (this.m_bGlobalEventsInitialized = !1),
            (this.m_bSuppressGamepadInput = !1),
            (this.m_FocusChangedCallbacks = new f.a()),
            (this.m_UnhandledButtonEventsCallbacks = new f.a()),
            (this.m_navigationSource = Object(f.b)({
              eActivationSourceType: c.b.UNKNOWN,
              nActiveGamepadIndex: -1,
              nLastActiveGamepadIndex: -1,
            })),
            (this.m_bShowDebugFocusRing = Object(f.b)(!1)),
            (this.m_fnGamepadEventUpdateBatcher = function (t) {
              return t();
            }),
            (this.m_iFocusChangeStack = 0),
            (window.FocusNavController = this),
            this.m_bShowDebugFocusRing.Set(
              "shown" == sessionStorage.getItem(x)
            );
        }
        return (
          (t.prototype.SetShowDebugFocusRing = function (t) {
            this.m_bShowDebugFocusRing.Set(t),
              (function (t) {
                sessionStorage.setItem(x, t ? "shown" : void 0);
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
                  (e && this.m_LastActiveNavTree.TakeFocus(i.GAMEPAD),
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
                  c.a[t] +
                  " in tree " +
                  (null === (i = this.m_LastActiveNavTree) || void 0 === i
                    ? void 0
                    : i.id) +
                  " at ",
                r
              ),
                this.m_fnGamepadEventUpdateBatcher(function () {
                  return h(r, "vgp_onbuttondown", {
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
                return h(o, "vgp_onbuttonup", {
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
              document.hasFocus() && (t == c.b.MOUSE || t == c.b.TOUCH))
            ) {
              var n = this.m_LastActiveNavTree.GetLastFocusedNode(),
                o = (function (t) {
                  if (!E(t)) return !1;
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
            return new Y(this, t);
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
            F.a(this.m_rgGamepadNavigationTrees, t),
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
                k(
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
              F.a(this.m_rgGamepadNavigationTrees, t),
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
              n && F.a(this.m_rgGamepadNavigationTrees, n),
                t ||
                  (this.m_rgGamepadNavigationTrees.length &&
                    (t = this.m_rgGamepadNavigationTrees[
                      this.m_rgGamepadNavigationTrees.length - 1
                    ]));
              var o = this.m_LastActiveFocusNavTree == t;
              t && F.a(this.m_rgGamepadNavigationTrees, t),
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
          Object(r.c)([v.a], t.prototype, "OnButtonDown", null),
          Object(r.c)([v.a], t.prototype, "OnButtonUp", null),
          Object(r.c)([v.a], t.prototype, "OnNavigationTypeChange", null),
          t
        );
      })();
      var U = (function () {
        function t(t) {
          (this.m_node = t), (this.m_History = new I(t));
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
            M(this.m_node);
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
      function H(t, e, n) {
        return "x" == t
          ? e.x + e.width > n.x && e.x < n.x + n.width
          : "y" == t
          ? e.y + e.height > n.y && e.y < n.y + n.height
          : (Object(g.a)(!1, "Invalid axis " + t), !1);
      }
      function K(t, e, n) {
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
      var Y = (function () {
        function t(t, e) {
          (this.m_onActivateCallbacks = new f.a()),
            (this.m_onDeactivateCallbacks = new f.a()),
            (this.m_Controller = t),
            (this.m_ID = e),
            (this.m_Root = new et(this, null, null)),
            this.m_Root.SetProperties({ layout: J.COLUMN }),
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
            return new et(this, t, e);
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
          (t.prototype.TakeFocus = function (t) {
            var e = !1;
            this.m_lastFocusNode && (e = this.m_lastFocusNode.BTakeFocus(t)),
              e || (e = this.Root.BTakeFocus(t)),
              e || this.TransferFocus(t, this.Root);
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
                var e = [c.a.DIR_UP, c.a.DIR_DOWN, c.a.DIR_LEFT, c.a.DIR_RIGHT],
                  n = !0,
                  o = !1,
                  i = u[t.detail.button];
                return (
                  i
                    ? ((o = !0), (n = h(t.target, i, t.detail)))
                    : -1 !== e.indexOf(t.detail.button) &&
                      ((o = !0),
                      (n = h(t.target, "vgp_ondirection", t.detail))),
                  { bUnhandled: n, bHadLogicalEventMapping: o }
                );
              })(t),
              n = e.bUnhandled,
              o = e.bHadLogicalEventMapping;
            return (
              W(
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
            var o = this.m_lastFocusNode;
            if (o != e) {
              k(
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
                for (var s = o; s && s != a; s = s.Parent) s.SetFocusWithin(!1);
              }
              if (e) {
                e.SetHasFocus(!0);
                for (var c = e; c && c != a; c = c.Parent) c.SetFocusWithin(!0);
              }
              var u = this.m_Controller.OnFocusChangeStart(t, this, o, e);
              e &&
                (this.BUseVirtualFocus()
                  ? (e.RequestFocus(), M(e))
                  : (function (t, e) {
                      for (
                        var n, o, i = t.Element, r = t, a = t.Parent;
                        a;
                        a = a.Parent
                      )
                        (null === (n = a.m_Properties) || void 0 === n
                          ? void 0
                          : n.scrollIntoViewWhenChildFocused) && (r = a);
                      if (i) {
                        if (
                          (null === (o = r.m_Properties) || void 0 === o
                            ? void 0
                            : o.fnScrollIntoViewHandler) &&
                          !1 !== r.m_Properties.fnScrollIntoViewHandler(t, e, r)
                        )
                          return;
                        if (e) {
                          var s = r.m_element,
                            c = s.getBoundingClientRect(),
                            u = !1;
                          ((G && performance.now() - G < 500) ||
                            c.bottom < -300 ||
                            c.top > window.innerHeight + 300) &&
                            (u = !0);
                          var l = u ? "auto" : "smooth";
                          u && (G = performance.now()),
                            B(i, s, e, l) ||
                              (i.focus({ preventScroll: !0 }),
                              s.scrollIntoView({
                                behavior: l,
                                block: "nearest",
                              }));
                        } else i.focus();
                      }
                    })(e, o)),
                o &&
                  (h(o.Element, "vgp_onblur", r),
                  !o.m_FocusRing ||
                    (e && o.m_FocusRing == e.m_FocusRing) ||
                    o.m_FocusRing.OnBlur(t, o, e)),
                e &&
                  (this.OnChildActivated(t),
                  h(e.Element, "vgp_onfocus", r),
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
      function z(t) {
        if (!t) return J.NONE;
        var e = t.ownerDocument.defaultView,
          n = e.getComputedStyle(t);
        if ("flex" == n.display)
          switch (n.flexDirection) {
            case "row":
              return "wrap" == n.flexWrap ? J.GRID : J.ROW;
            case "row-reverse":
              return J.ROW_REVERSE;
            case "column":
              return J.COLUMN;
            case "column-reverse":
              return J.COLUMN_REVERSE;
          }
        else {
          if ("grid" == n.display) return J.GRID;
          if (t.childElementCount > 0) {
            var o = e.getComputedStyle(t.firstElementChild);
            if ("left" === o.float) return J.ROW;
            if ("right" === o.float) return J.ROW_REVERSE;
            if ("inline" === o.display || "inline-block" === o.display)
              return J.GRID;
          }
        }
        return J.COLUMN;
      }
      function X(t) {
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
      var J,
        q,
        Z,
        Q,
        $ = new y("FocusNavigationMovement").Debug;
      !(function (t) {
        (t[(t.NONE = 0)] = "NONE"),
          (t[(t.COLUMN = 1)] = "COLUMN"),
          (t[(t.ROW = 2)] = "ROW"),
          (t[(t.COLUMN_REVERSE = 3)] = "COLUMN_REVERSE"),
          (t[(t.ROW_REVERSE = 4)] = "ROW_REVERSE"),
          (t[(t.GRID = 5)] = "GRID"),
          (t[(t.GEOMETRIC = 6)] = "GEOMETRIC");
      })(J || (J = {})),
        (function (t) {
          (t[(t.FIRST = 0)] = "FIRST"),
            (t[(t.LAST = 1)] = "LAST"),
            (t[(t.MAINTAIN_X = 2)] = "MAINTAIN_X"),
            (t[(t.MAINTAIN_Y = 3)] = "MAINTAIN_Y"),
            (t[(t.PREFERRED_CHILD = 4)] = "PREFERRED_CHILD");
        })(q || (q = {})),
        (function (t) {
          (t[(t.LAZY = 0)] = "LAZY"),
            (t[(t.START = 1)] = "START"),
            (t[(t.CENTER = 2)] = "CENTER"),
            (t[(t.END = 3)] = "END"),
            (t[(t.NEAREST = 4)] = "NEAREST"),
            (t[(t.NONE = 5)] = "NONE");
        })(Z || (Z = {})),
        (function (t) {
          (t[(t.INVALID = 0)] = "INVALID"),
            (t[(t.FORWARD = 1)] = "FORWARD"),
            (t[(t.BACKWARD = 2)] = "BACKWARD");
        })(Q || (Q = {}));
      var tt,
        et = (function () {
          function t(t, e, n) {
            (this.m_rgChildren = []),
              (this.m_iActiveChild = -1),
              (this.m_bChildrenSorted = !1),
              (this.m_bAutoFocusChild = !1),
              (this.m_bFocused = !1),
              (this.m_FocusCallbackList = new f.a()),
              (this.m_bFocusWithin = !1),
              (this.m_FocusWithinCallbackList = new f.a()),
              (this.m_ActionDescriptionsChangedCallbackList = new f.a()),
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
                this.m_element && this.RegisterDOMEvents();
            }),
            (t.prototype.OnMount = function (t) {
              if (
                ((this.m_element = t),
                this.m_Parent
                  ? this.m_Parent.AddChild(this)
                  : Object(g.a)(
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
                      ? this.BTakeFocus(i.APPLICATION)
                      : (this.m_Parent.m_bAutoFocusChild = !0));
              }
            }),
            (t.prototype.OnUnmount = function () {
              this.m_bFocused && this.m_Tree.TransferFocus(i.APPLICATION, null),
                this.UnregisterDOMEvents(),
                this.m_Parent
                  ? this.m_Parent.RemoveChild(this)
                  : Object(g.a)(
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
                  l(t, "vgp_ondirection", p(e)))
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
                      this.m_Tree.OnChildActivated(i.BROWSER);
                    break;
                  }
                  if (n == this.m_element) {
                    (this.m_iActiveChild = -1),
                      this.m_Tree.OnChildActivated(i.BROWSER);
                    break;
                  }
                  n = n.parentElement;
                }
              }
            }),
            (t.prototype.OnDOMFocus = function (t) {
              this.m_bFocused || this.m_Tree.TransferFocus(i.BROWSER, this);
            }),
            (t.prototype.OnDOMBlur = function (t) {
              this.m_bFocused && this.m_Tree.TransferFocus(i.BROWSER, null);
            }),
            (t.prototype.RequestFocus = function () {
              this.m_Parent &&
                (this.m_Parent.SetActiveChild(this),
                this.m_Parent.RequestFocus());
            }),
            (t.prototype.BTakeFocus = function (t, e) {
              var n = X(e),
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
              var n = X(e),
                o = this.m_Properties,
                r = o.focusableIfNoChildren;
              if (o.childFocusDisabled) return !1;
              if (this.m_rgChildren.length) {
                this.EnsureChildrenSorted();
                var a = this.m_Properties.navEntryPreferPosition,
                  s = this.m_iActiveChild;
                if (s < 0 || s >= this.m_rgChildren.length) {
                  s = 0;
                  var c = this.GetLayout();
                  (c != J.ROW_REVERSE &&
                    c != J.COLUMN_REVERSE &&
                    a != q.LAST) ||
                    (s = this.m_rgChildren.length - 1);
                }
                if ((a != q.MAINTAIN_X && a != q.MAINTAIN_Y) || !n) {
                  if (a == q.PREFERRED_CHILD)
                    for (var u = 0, l = this.m_rgChildren; u < l.length; u++) {
                      var h = l[u];
                      if (
                        h.BWantsPreferredFocus() &&
                        h.BTakeFocus(i.GAMEPAD, e)
                      )
                        return !0;
                    }
                  else if (
                    a == q.LAST &&
                    this.BFocusNextChildInDirection(t, s + 1, Q.BACKWARD, e)
                  )
                    return !0;
                } else {
                  var p,
                    m = a == q.MAINTAIN_X ? "x" : "y";
                  m == d[n] &&
                    (p = this.m_Tree.GetLastFocusedMovementRect(d[n])),
                    $(
                      "Taking focus while preserving " +
                        q[a] +
                        " preserved: " +
                        m +
                        " movement: " +
                        n +
                        ", node:",
                      p
                    );
                  var g = this.ComputeRelativeDirection(e, J.GRID);
                  if (p) {
                    var v = g == Q.BACKWARD ? this.m_rgChildren.length - 1 : 0;
                    if (
                      this.BFocusClosestChildInNextAxiallyAlignedSet(
                        m,
                        g,
                        e,
                        p,
                        v,
                        this.m_rgChildren[v].GetBoundingRect()
                      )
                    )
                      return !0;
                  } else if (m != d[n]) {
                    v = g == Q.BACKWARD ? this.m_rgChildren.length : -1;
                    if (this.BFocusNextChildInDirection(t, v, g, e)) return !0;
                  }
                }
                return (
                  !!this.BFocusNextChildInDirection(t, s - 1, Q.FORWARD, e) ||
                  !!this.BFocusNextChildInDirection(t, s, Q.BACKWARD, e) ||
                  (!!r && (this.m_Tree.TransferFocus(t, this, n), !0))
                );
              }
              return !1;
            }),
            (t.prototype.GetLayout = function () {
              return this.m_Properties.layout
                ? this.m_Properties.layout
                : this.m_rgChildren.length < 2
                ? J.NONE
                : z(this.m_element);
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
              var e = this.GetLayout(),
                n = this.ComputeRelativeDirection(t, e);
              if (
                ($(
                  "Handling navigation event " +
                    c.a[t] +
                    " - " +
                    J[e] +
                    " - " +
                    Q[n],
                  this.m_element
                ),
                n == Q.INVALID)
              )
                return !1;
              if (this.m_Properties.focusable && this.m_bFocused)
                return $("Skipping navigation within focused element"), !1;
              if ((this.EnsureChildrenSorted(!0), e == J.GRID))
                return this.BPerformGridNavigation(this.m_iActiveChild, n, t);
              var o = this.m_iActiveChild;
              return (
                -1 == o && (o = n == Q.FORWARD ? -1 : this.m_rgChildren.length),
                this.BFocusNextChildInDirection(i.GAMEPAD, o, n, t)
              );
            }),
            (t.prototype.ComputeRelativeDirection = function (t, e) {
              var n = e == J.ROW_REVERSE || e == J.COLUMN_REVERSE;
              switch (e) {
                case J.ROW:
                case J.ROW_REVERSE:
                  switch (t) {
                    case c.a.DIR_LEFT:
                      return n ? Q.FORWARD : Q.BACKWARD;
                    case c.a.DIR_RIGHT:
                      return n ? Q.BACKWARD : Q.FORWARD;
                    default:
                      return Q.INVALID;
                  }
                case J.COLUMN:
                case J.COLUMN_REVERSE:
                  switch (t) {
                    case c.a.DIR_UP:
                      return n ? Q.FORWARD : Q.BACKWARD;
                    case c.a.DIR_DOWN:
                      return n ? Q.BACKWARD : Q.FORWARD;
                    default:
                      return Q.INVALID;
                  }
                case J.GRID:
                  switch (t) {
                    case c.a.DIR_LEFT:
                    case c.a.DIR_UP:
                      return n ? Q.FORWARD : Q.BACKWARD;
                    case c.a.DIR_RIGHT:
                    case c.a.DIR_DOWN:
                      return n ? Q.BACKWARD : Q.FORWARD;
                    default:
                      return Q.INVALID;
                  }
                default:
                  return Q.INVALID;
              }
            }),
            (t.prototype.AdvanceIndex = function (t, e) {
              return t + (e == Q.FORWARD ? 1 : -1);
            }),
            (t.prototype.BFocusNextChildInDirection = function (t, e, n, o) {
              for (
                var i = n == Q.FORWARD ? 1 : -1, r = e + i;
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
                var o = e == Q.FORWARD ? 1 : -1, i = t;
                i >= 0 && i < this.m_rgChildren.length;
                i += o
              )
                if (n(this.m_rgChildren[i], i)) return i;
              return -1;
            }),
            (t.prototype.BPerformGridNavigation = function (t, e, n) {
              var o = n == c.a.DIR_UP || n == c.a.DIR_DOWN,
                r = this.GetLastFocusElement();
              if (!r || r == this.m_element)
                return (
                  !!this.BFocusNextChildInDirection(
                    i.GAMEPAD,
                    this.m_iActiveChild,
                    e,
                    n
                  ) ||
                  this.BFocusNextChildInDirection(
                    i.GAMEPAD,
                    this.m_iActiveChild,
                    e == Q.FORWARD ? Q.BACKWARD : Q.FORWARD,
                    n
                  )
                );
              var a = (this.GetActiveChild() || this).GetBoundingRect();
              if (n == c.a.DIR_UP || n == c.a.DIR_DOWN) {
                var s = this.m_Tree.GetLastFocusedMovementRect("x");
                s && ((a.x = s.x), (a.width = s.width));
              }
              if (!o) {
                var u = !1;
                return (
                  -1 !=
                    this.ScanChildren(this.AdvanceIndex(t, e), e, function (t) {
                      return H("y", a, t.GetBoundingRect())
                        ? t.BTakeFocus(i.GAMEPAD, n)
                        : ((u = !0), !0);
                    }) && !u
                );
              }
              var l = this.ScanChildren(
                this.AdvanceIndex(t, e),
                e,
                function (t) {
                  return !H("y", a, t.GetBoundingRect());
                }
              );
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
              o,
              r,
              a
            ) {
              (!r || r < 0) && (r = 0);
              var s,
                c = [],
                u = { x: (s = o).x, y: s.y };
              this.ScanChildren(r, e, function (e) {
                var n = e.GetBoundingRect();
                return (
                  !(!a || H(d[t], a, n)) ||
                  (c.push({ child: e, overlap: K(t, o, n), dist: V(t, u, n) }),
                  !1)
                );
              }),
                e == Q.BACKWARD && c.reverse(),
                c.sort(function (t, e) {
                  var n = e.overlap - t.overlap;
                  return 0 != n ? n : t.dist - e.dist;
                });
              for (var l = 0, h = c; l < h.length; l++) {
                if (h[l].child.BTakeFocus(i.GAMEPAD, n)) return !0;
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
        })(),
        nt = "GamepadInput";
      function ot(t) {
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
      })(tt || (tt = {}));
      var it = (function () {
        function t(t) {
          var e = this;
          (this.m_bIsGamepadInputExternallyControlled = !1),
            (this.m_NavigationController = t),
            ot("BrowserView.RegisterForMessageFromParent") &&
            ot("BrowserView.PostMessageToParent")
              ? ((this.m_bIsGamepadInputExternallyControlled = !0),
                (this.m_postMessage = new at()))
              : ((this.m_bIsGamepadInputExternallyControlled =
                  window.top != window.self),
                (this.m_postMessage = new rt(window.top))),
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
            var e = tt.Basic;
            window.bSupportsGamepadUI && (e = tt.Full),
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
      var rt = (function () {
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
                { gamepadMessage: nt, args: e },
                "*"
              );
            }),
            (t.prototype.OnMessage = function (t) {
              var e = null == t ? void 0 : t.data;
              if (e && e.gamepadMessage == nt && e.args) {
                var n = JSON.parse(e.args);
                this.m_fnCallback(n);
              }
            }),
            Object(r.c)([v.a], t.prototype, "OnMessage", null),
            t
          );
        })(),
        at = (function () {
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
              SteamClient.BrowserView.PostMessageToParent(nt, e);
            }),
            (t.prototype.OnMessage = function (t, e) {
              if (t == nt) {
                var n = JSON.parse(e);
                this.m_fnCallback(n);
              }
            }),
            Object(r.c)([v.a], t.prototype, "OnMessage", null),
            t
          );
        })();
      n("SHRt"), c.c;
      var st = "VirtualKeyboardMessage";
      function ct(t) {
        return t && t.type === st;
      }
      var ut = (function () {
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
              t == st && this.InternalDispatchMessage(JSON.parse(e));
            }),
            (t.prototype.OnMessage = function (t) {
              this.InternalDispatchMessage(t.data);
            }),
            (t.prototype.InternalDispatchMessage = function (t) {
              ct(t) && t.message;
            }),
            (t.prototype.SendMessage = function (t) {
              var e = Object(r.a)({ type: "VirtualKeyboardMessage" }, t);
              ot("BrowserView.PostMessageToParent")
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
        lt = n("8+ko"),
        ht = n.n(lt);
      function pt(t) {
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
              class: ht.a.FocusRing,
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
      var dt,
        mt = (function (t) {
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
        })(et);
      function gt(t) {
        return t ? Function("event", t) : null;
      }
      function vt(t) {
        this.click(), t.stopPropagation();
      }
      function ft(t) {
        s()(this).find("a")[0].click();
      }
      !(function (t) {
        (t[(t.Unknown = 0)] = "Unknown"),
          (t[(t.NotNeeded = 1)] = "NotNeeded"),
          (t[(t.InReactTree = 2)] = "InReactTree");
      })(dt || (dt = {}));
      var _t = new ut(),
        bt = !1;
      function yt(t) {
        if (!bt) {
          var e = new j();
          (window.legacyWebFocusNavController = e),
            new it(e).BIsGamepadInputExternallyControlled() ||
              e.RegisterInputSource(t),
            (function (t) {
              s()("html").addClass("gpnav_active");
              var e = s()("body"),
                n = t.NewGamepadNavigationTree("legacy"),
                o = pt(e);
              (n.Root.m_FocusRing = o),
                n.Root.SetProperties({}),
                Nt.set(document.body, n.Root),
                Rt(document.body, n.Root),
                Et(void 0, !0),
                t.RegisterGamepadNavigationTree(n, !1),
                s()(document.body).on("vgp_onbuttondown", function (t) {
                  n.HandleButtonDownEventAsLogicalEvent(t.originalEvent);
                }),
                new MutationObserver(Ct).observe(document.body, {
                  childList: !0,
                  subtree: !0,
                }),
                (i = !0),
                (P = i);
              var i;
            })(e);
        }
        bt = !0;
      }
      function Ct(t) {
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
          i.length && Et(s()(i)), r.length && It(s()(r));
        }
      }
      var Nt = new WeakMap(),
        Ot = new WeakMap(),
        At = [];
      function Rt(t, e) {
        if (e instanceof et) {
          var n = e.GetDepth();
          At[n] || (At[n] = []), At[n].push([t, e]);
        }
        Nt.set(t, e);
      }
      function Ft(t, e) {
        var n = Ot.has(t) ? Ot.get(t) : [];
        n.push(e), Ot.set(t, n);
      }
      function Dt(t) {
        return "jquery" in t
          ? Nt.get(t[0]) || dt.Unknown
          : Nt.get(t) || dt.Unknown;
      }
      function It(t) {
        t.find("*")
          .addBack()
          .each(function () {
            var t;
            null === (t = Ot.get(this)) ||
              void 0 === t ||
              t.forEach(function (t) {
                return t();
              }),
              Nt.delete(this),
              Ot.delete(this);
          });
      }
      function Et(t, e) {
        void 0 === e && (e = !1);
        performance.now();
        var n =
          "a,button,input:not(input[type=hidden]),label:not([for]),[data-panel],[data-react-nav-root]";
        s()(n, t)
          .addBack(n)
          .each(function () {
            var t;
            (function (t) {
              return "jquery" in t ? Nt.has(t[0]) : Nt.has(t);
            })((t = this)) || Tt(t);
          }),
          (function () {
            for (var t = At.length - 1; t >= 0; t--)
              if (At[t])
                for (var e = 0, n = At[t]; e < n.length; e++) {
                  var o = n[e],
                    i = o[0],
                    r = o[1];
                  Ft(i, r.Tree.RegisterNavigationItem(r, i));
                }
            At = [];
          })();
      }
      function St(t) {
        var e = s()(t.Element);
        return (
          !e.data("gpFocusDisabled") &&
          e.is(":visible") &&
          ((e.outerWidth() > 0 && e.outerHeight() > 0) ||
            "hidden" !== e.css("overflow"))
        );
      }
      function Tt(t) {
        var e,
          n,
          o = s()(t),
          a = wt(t);
        if (a instanceof mt || a == dt.InReactTree)
          return Rt(t, dt.InReactTree), dt.InReactTree;
        var u = a.Tree,
          h = (
            null === (n = null == t ? void 0 : t.dataset) || void 0 === n
              ? void 0
              : n.reactNavRoot
          )
            ? new mt(t.dataset.reactNavRoot, a)
            : u.CreateNode(a, a.m_FocusRing),
          d = o.data("panel") || {};
        if ("A" == t.tagName || "BUTTON" == t.tagName || "LABEL" == t.tagName)
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
        var m = d["flow-children"];
        delete d["flow-children"];
        var g = d.clickOnActivate,
          v = d.maintainX,
          f = d.maintainY,
          _ = d.enableVirtualKeyboard,
          b = d.onOKActionDescription,
          y = d.onCancelActionDescription,
          C = d.onSecondaryActionDescription,
          N = d.onOptionsActionDescription,
          O = d.onMenuActionDescription,
          A = d.actionDescriptionMap,
          R = d.onOKButton,
          F = d.onCancelButton,
          D = d.onSecondaryButton,
          I = d.onOptionsButton,
          E = d.onMenuButton,
          S = d.bFocusRingRoot,
          T = d.type,
          w = Object(r.f)(d, [
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
          L = gt(R),
          P = gt(F),
          B = gt(D),
          G = gt(I),
          M = gt(E);
        T || (T = "Panel"),
          "PanelGroup" == T &&
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
              { onOKButtonHandler: L, onCancelButtonHandler: P, navNode: h },
              w
            )),
            (L = e.onOKButtonHandler),
            (P = e.onCancelButtonHandler)),
          L &&
            Ft(
              o[0],
              (function (t, e) {
                return l(t, "vgp_onok", p(e));
              })(o[0], L)
            ),
          P &&
            Ft(
              o[0],
              (function (t, e) {
                return l(t, "vgp_oncancel", p(e));
              })(o[0], P)
            ),
          B &&
            C &&
            Ft(
              o[0],
              (function (t, e) {
                return l(t, "vgp_onsecondaryaction", p(e));
              })(o[0], B)
            ),
          G &&
            N &&
            Ft(
              o[0],
              (function (t, e) {
                return l(t, "vgp_onoptions", p(e));
              })(o[0], G)
            ),
          M &&
            O &&
            Ft(
              o[0],
              (function (t, e) {
                return l(t, "vgp_onmenu", p(e));
              })(o[0], M)
            );
        var k = m
          ? (function (t) {
              switch (t) {
                case "column":
                  return J.COLUMN;
                case "column-reverse":
                  return J.COLUMN_REVERSE;
                case "row":
                  return J.ROW;
                case "row-reverse":
                  return J.ROW_REVERSE;
                case "grid":
                  return J.GRID;
                default:
                  return J.NONE;
              }
            })(m)
          : J.NONE;
        k != J.NONE && (w.layout = k),
          v
            ? (w.navEntryPreferPosition = q.MAINTAIN_X)
            : f && (w.navEntryPreferPosition = q.MAINTAIN_Y),
          g &&
            (!1 !== w.focusable && (w.focusable = !0),
            o.on("vgp_onok", "firstChild" === g ? ft : vt),
            Ft(t, function () {
              o.off("vgp_onok");
            })),
          _ &&
            (o.on("vgp_onok.vkbindings", function () {
              return _t.ShowVirtualKeyboard();
            }),
            o.on("click.vkbindings", function () {
              return _t.ShowVirtualKeyboard();
            }),
            o.on("blur.vkbindings", function () {
              return _t.HideVirtualKeyboard();
            }),
            Ft(t, function () {
              o.off(".vkbindings");
            })),
          w.focusable && void 0 === o.attr("tabIndex") && o.attr("tabIndex", 0),
          w.focusable &&
            h.FocusCallbackList.Register(function (e) {
              return (function (t, e) {
                e ? s()(t).addClass("gpfocus") : s()(t).removeClass("gpfocus");
              })(t, e);
            }),
          S &&
            ((h.m_FocusRing = pt(o)),
            "static" == o.css("position") && o.css("position", "relative"));
        var W = (function (t) {
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
            onOKActionDescription: b,
            onCancelActionDescription: y,
            onSecondaryActionDescription: C,
            onOptionsActionDescription: N,
            onMenuActionDescription: O,
            actionDescriptionMap: A,
          }),
          x = Object(r.a)({ fnCanTakeFocus: St, actionDescriptionMap: W }, w);
        return h.SetProperties(x), Rt(t, h), h;
      }
      function wt(t) {
        var e = t.parentElement;
        if (!e) return console.error("no parent"), null;
        var n = Dt(e);
        if (n == dt.Unknown)
          n = (function (t) {
            var e = !1;
            switch (t.tagName) {
              case "A":
              case "INPUT":
                e = !0;
                break;
              case "DIV":
                if (z(t) != J.COLUMN) e = !0;
                else {
                  var n = z(t.parentElement);
                  (n != J.ROW && n != J.ROW_REVERSE) || (e = !0);
                }
            }
            var o = dt.NotNeeded;
            return e ? (o = Tt(t)) : Rt(t, o), o;
          })(e);
        else if (n == dt.InReactTree) return n;
        return n instanceof et ? n : wt(e);
      }
      Object.assign(window, {
        InstrumentFocusElements: Et,
        ForceUpdateFocusElements: function (t) {
          It(s()(t)), Et(s()(t));
        },
        GPNavFocusChild: function (t) {
          var e = Dt(t[0]);
          return (
            e instanceof et || (e = wt(t[0])),
            e instanceof et && e.BTakeFocus(i.APPLICATION),
            !1
          );
        },
      });
    },
  },
]);

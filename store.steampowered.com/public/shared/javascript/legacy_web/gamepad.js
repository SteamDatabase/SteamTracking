/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunklegacy_web = self.webpackChunklegacy_web || []).push([
  [511],
  {
    369: (e) => {
      e.exports = {
        FocusRingRoot: "focusring_FocusRingRoot_3PH_X",
        FocusRing: "focusring_FocusRing_1IZrQ",
        flash: "focusring_flash_1YTKZ",
        growOutline: "focusring_growOutline_Z3LxS",
        fadeOutline: "focusring_fadeOutline_2hZu3",
        blinker: "focusring_blinker_3wFMM",
        DebugFocusRing: "focusring_DebugFocusRing_YxeOZ",
        FocusRingOnHiddenItem: "focusring_FocusRingOnHiddenItem_2OusV",
      };
    },
    165: (e, t, n) => {
      "use strict";
      n.d(t, { Pf: () => r, y5: () => a });
      var i = n(655),
        o = n(340),
        s = n(883);
      class r {
        constructor() {
          SteamClient.BrowserView.RegisterForMessageFromParent(this.OnMessage);
        }
        RegisterForMessage(e) {
          this.m_fnCallback = e;
        }
        PostMessage(e) {
          let t = JSON.stringify(e);
          SteamClient.BrowserView.PostMessageToParent(s.l, t);
        }
        OnMessage(e, t) {
          if (e == s.l) {
            const e = JSON.parse(t);
            this.m_fnCallback(e);
          } else if ("Checkout" == e) {
            let e = JSON.parse(t);
            if ("paypal_success" == e.action)
              try {
                window.OnPayPalSuccess(e.transid);
              } catch (e) {}
            else if ("paypal_cancel" == e.action)
              try {
                window.OnPayPalCancel(e.transid);
              } catch (e) {}
          } else if ("PinnedView" == e) {
            let e = JSON.parse(t);
            try {
              window.HandleOverlayWindowPinnedView(
                e.bPinned,
                e.bShowPinnedView
              );
            } catch (e) {}
          }
        }
      }
      (0, i.gn)([o.a], r.prototype, "OnMessage", null);
      class a {
        constructor(e) {
          (this.m_postWindow = e),
            window.addEventListener("message", this.OnMessage);
        }
        RegisterForMessage(e) {
          this.m_fnCallback = e;
        }
        PostMessage(e) {
          let t = JSON.stringify(e);
          this.m_postWindow.postMessage({ gamepadMessage: s.l, args: t }, "*");
        }
        OnMessage(e) {
          let t = null == e ? void 0 : e.data;
          if (t && t.gamepadMessage == s.l && t.args) {
            const e = JSON.parse(t.args);
            this.m_fnCallback(e);
          }
        }
      }
      (0, i.gn)([o.a], a.prototype, "OnMessage", null);
    },
    298: (e, t, n) => {
      "use strict";
      n.d(t, {
        $G: () => d,
        Cj: () => v,
        DX: () => u,
        Jb: () => m,
        R3: () => l,
        Ut: () => g,
        WF: () => h,
        n2: () => c,
        uS: () => i,
        x: () => a,
      });
      var i,
        o = n(987);
      !(function (e) {
        (e[(e.GAMEPAD = 0)] = "GAMEPAD"),
          (e[(e.KEYBOARD = 1)] = "KEYBOARD"),
          (e[(e.APPLICATION = 2)] = "APPLICATION"),
          (e[(e.BROWSER = 3)] = "BROWSER");
      })(i || (i = {}));
      let s = {
        [o.eV.OK]: "vgp_onok",
        [o.eV.CANCEL]: "vgp_oncancel",
        [o.eV.SECONDARY]: "vgp_onsecondaryaction",
        [o.eV.OPTIONS]: "vgp_onoptions",
        [o.eV.START]: "vgp_onmenu",
      };
      function r(e, t, n) {
        return (
          e.addEventListener(t, n),
          () =>
            (function (e, t, n) {
              e.removeEventListener(t, n);
            })(e, t, n)
        );
      }
      function a(e, t) {
        return r(e, "vgp_onok", _(t));
      }
      function l(e, t) {
        return r(e, "vgp_oncancel", _(t));
      }
      function c(e, t) {
        return r(e, "vgp_onsecondaryaction", _(t));
      }
      function u(e, t) {
        return r(e, "vgp_onoptions", _(t));
      }
      function h(e, t) {
        return r(e, "vgp_onmenu", _(t));
      }
      function d(e, t) {
        return r(e, "vgp_ondirection", _(t));
      }
      function m(e, t, n) {
        let i = e;
        if (!i || !i.ownerDocument || !i.ownerDocument.defaultView) return !0;
        let o = new i.ownerDocument.defaultView.CustomEvent(t, {
          bubbles: !0,
          cancelable: !0,
          detail: n,
        });
        return e.dispatchEvent(o);
      }
      function g(e) {
        const t = [o.eV.DIR_UP, o.eV.DIR_DOWN, o.eV.DIR_LEFT, o.eV.DIR_RIGHT];
        let n = !0,
          i = !1,
          r = s[e.detail.button];
        return (
          r
            ? ((i = !0), (n = m(e.target, r, e.detail)))
            : -1 !== t.indexOf(e.detail.button) &&
              ((i = !0), (n = m(e.target, "vgp_ondirection", e.detail))),
          { bUnhandled: n, bHadLogicalEventMapping: i }
        );
      }
      function _(e) {
        return (t) => {
          !1 !== e(t) && (t.stopPropagation(), t.preventDefault());
        };
      }
      function v(e) {
        const {
            onOKActionDescription: t,
            onCancelActionDescription: n,
            onSecondaryActionDescription: i,
            onOptionsActionDescription: s,
            onMenuActionDescription: r,
            actionDescriptionMap: a,
          } = e,
          l = Object.assign({}, a);
        return (
          void 0 !== t && (l[o.eV.OK] = t),
          void 0 !== n && (l[o.eV.CANCEL] = n),
          void 0 !== i && (l[o.eV.SECONDARY] = i),
          void 0 !== s && (l[o.eV.OPTIONS] = s),
          void 0 !== r && (l[o.eV.START] = r),
          l
        );
      }
    },
    883: (e, t, n) => {
      "use strict";
      n.d(t, { i: () => o, l: () => i });
      n(298), n(987);
      const i = "GamepadInput";
      var o;
      !(function (e) {
        (e[(e.PageUnloading = 0)] = "PageUnloading"),
          (e[(e.Unknown = 1)] = "Unknown"),
          (e[(e.None = 2)] = "None"),
          (e[(e.Basic = 3)] = "Basic"),
          (e[(e.Full = 4)] = "Full");
      })(o || (o = {}));
    },
    183: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { InitializeGamepadNavigation: () => ot });
      var i = n(655),
        o = n(311),
        s = n.n(o),
        r = n(298),
        a = n(987);
      const l = { x: "y", y: "x" };
      function c(e, t, ...n) {
        console.assert
          ? 0 == n.length
            ? console.assert(!!e, t)
            : console.assert(!!e, t, ...n)
          : e || console.warn(t, ...n);
      }
      var u = n(340),
        h = n(185);
      class d extends class {
        GetObject(e) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            try {
              const t = yield this.GetString(e);
              return t ? JSON.parse(t) : null;
            } catch (e) {
              return null;
            }
          });
        }
        StoreObject(e, t) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            return this.StoreString(e, JSON.stringify(t));
          });
        }
      } {
        GetString(e) {
          return Promise.resolve(localStorage.getItem(e));
        }
        StoreString(e, t) {
          return localStorage.setItem(e, t), Promise.resolve();
        }
        RemoveObject(e) {
          return localStorage.removeItem(e), Promise.resolve();
        }
      }
      const m = [
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
        "LibraryUIStore/BasicUIStore",
        "SystemNetworkStore",
        "SteamClient",
        "AudioPlaybackManager",
        "LaunchStates",
        "Haptics",
        "ControllerConfigurator",
        "FriendsUI/RemotePlay",
        "SalePage",
        "VR",
      ];
      var g;
      !(function (e) {
        (e[(e.Debug = 0)] = "Debug"),
          (e[(e.Info = 1)] = "Info"),
          (e[(e.Warning = 2)] = "Warning"),
          (e[(e.Error = 3)] = "Error");
      })(g || (g = {}));
      class _ {
        constructor(e, t) {
          (this.m_fnIdGenerator = null),
            (this.m_sName = e),
            (this.m_fnIdGenerator = t),
            v.Get().RegisterLogName(e);
        }
        Debug(...e) {
          this.Log(g.Debug, ...e);
        }
        Info(...e) {
          this.Log(g.Info, ...e);
        }
        Warning(...e) {
          this.Log(g.Warning, ...e);
        }
        Error(...e) {
          this.Log(g.Error, ...e);
        }
        Assert(e, ...t) {
          e || this.Log(g.Error, "Assertion failed:", ...t);
        }
        Log(e, ...t) {
          var n, i;
          if (e == g.Debug && !v.Get().IsDebugLogEnabled(this.m_sName)) return;
          let o = this.m_sName;
          const s =
            null !==
              (i =
                null === (n = this.m_fnIdGenerator) || void 0 === n
                  ? void 0
                  : n.call(this)) && void 0 !== i
              ? i
              : null;
          null != s && (o += " (" + s + ")");
          p(e, v.Get().IncludeBacktraceInLog, o, this.m_sName, ...t);
        }
      }
      (0, i.gn)([u.a], _.prototype, "Debug", null),
        (0, i.gn)([u.a], _.prototype, "Info", null),
        (0, i.gn)([u.a], _.prototype, "Warning", null),
        (0, i.gn)([u.a], _.prototype, "Error", null),
        (0, i.gn)([u.a], _.prototype, "Assert", null);
      class v {
        constructor() {
          (this.m_Storage = null),
            (this.m_rgLogNames = null),
            (this.m_setEnabledDebugLogs = new Set()),
            (this.m_bIncludeBacktraceInLog = !1),
            (this.m_SettingsChangedCallback = new h.pB()),
            (this.m_bLoading = !1),
            (this.m_Storage = new d()),
            (this.m_rgLogNames = m.slice()),
            this.LoadSettings();
        }
        LogAsLogManager(...e) {
          p(
            g.Info,
            this.IncludeBacktraceInLog,
            "LogManager",
            "LogManager",
            ...e
          );
        }
        LoadSettings() {
          return (0, i.mG)(this, void 0, void 0, function* () {
            (this.m_bLoading = !0),
              (this.m_bIncludeBacktraceInLog =
                !!(yield this.m_Storage.GetObject(
                  v.k_IncludeBacktraceInLog_StorageKey
                )));
            const e = yield this.m_Storage.GetObject(
              v.k_EnabledLogNames_StorageKey
            );
            Array.isArray(e) &&
              ((this.m_setEnabledDebugLogs = new Set(e)),
              this.LogAsLogManager(
                "Loaded debug enabled log names. Will print log messages for:",
                Array.from(this.m_setEnabledDebugLogs)
              )),
              (this.m_bLoading = !1),
              this.m_SettingsChangedCallback.Dispatch();
          });
        }
        SaveSettings() {
          return (0, i.mG)(this, void 0, void 0, function* () {
            yield this.m_Storage.StoreObject(
              v.k_EnabledLogNames_StorageKey,
              Array.from(this.m_setEnabledDebugLogs)
            ),
              yield this.m_Storage.StoreObject(
                v.k_IncludeBacktraceInLog_StorageKey,
                this.m_bIncludeBacktraceInLog
              ),
              this.LogAsLogManager(
                "Saved enabled debug log names. Will print log messages for:",
                Array.from(this.m_setEnabledDebugLogs)
              );
          });
        }
        static Get() {
          return (
            null == v.s_Singleton && (v.s_Singleton = new v()), v.s_Singleton
          );
        }
        get Loading() {
          return this.m_bLoading;
        }
        get LogNames() {
          return this.m_rgLogNames;
        }
        RegisterLogName(e) {
          this.m_rgLogNames.includes(e) || this.m_rgLogNames.push(e);
        }
        IsLogName(e) {
          return this.m_rgLogNames.includes(e);
        }
        IsDebugLogEnabled(e) {
          return this.m_setEnabledDebugLogs.has(e);
        }
        ToggleDebugLogEnabled(e) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            this.SetDebugLogEnabled(e, !this.IsDebugLogEnabled(e));
          });
        }
        SetDebugLogEnabled(e, t) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            t
              ? this.m_setEnabledDebugLogs.add(e)
              : this.m_setEnabledDebugLogs.delete(e),
              this.m_SettingsChangedCallback.Dispatch(),
              yield this.SaveSettings();
          });
        }
        SetAllDebugLogsEnabled(e) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            (this.m_setEnabledDebugLogs = new Set(e ? m : [])),
              this.m_SettingsChangedCallback.Dispatch(),
              yield this.SaveSettings();
          });
        }
        RegisterForSettingsChanges(e) {
          return this.m_SettingsChangedCallback.Register(e);
        }
        get IncludeBacktraceInLog() {
          return this.m_bIncludeBacktraceInLog;
        }
        SetIncludeBacktraceInLog(e) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            (this.m_bIncludeBacktraceInLog = e),
              this.m_SettingsChangedCallback.Dispatch(),
              yield this.SaveSettings();
          });
        }
      }
      function p(e, t, n, i, ...o) {
        const s = (function (e) {
            let t = 0;
            for (let n = 0; n < e.length; n++)
              t = e.charCodeAt(n) + ((t << 5) - t);
            return [(t >> 0) & 255, (t >> 8) & 255, (t >> 16) & 255];
          })(i).map((e, t) =>
            Math.round(
              Math.max(0, Math.min(255, 255 * (0.8 * (e / 255 - 0.5) + 0.15)))
            )
          ),
          r = (299 * (a = s)[0] + 587 * a[1] + 114 * a[2]) / 1e3 >= 128;
        var a;
        let l = n;
        t &&
          (l =
            (function (e) {
              switch (e) {
                case g.Debug:
                  return String.fromCodePoint(128027);
                case g.Info:
                  return String.fromCodePoint(8505);
                case g.Warning:
                  return String.fromCodePoint(9888);
                case g.Error:
                  return String.fromCodePoint(128165);
              }
            })(e) +
            " " +
            l);
        const c =
            o.length >= 1 && "string" == typeof o[0] && o[0].includes("%c"),
          u = c && o.shift(),
          h = [
            `%c${l}%c:${c ? " %c" + u : ""}`,
            `color: ${r ? "black" : "white"}; background: rgb(${s.join(
              ","
            )}); padding: 0 1ch`,
            "color: transparent; margin-right: -1ch",
            ...(c ? [""] : []),
            ...o,
          ];
        if (t)
          console.groupCollapsed(...h),
            console.trace("Callstack"),
            console.groupEnd();
        else
          switch (e) {
            case g.Debug:
            case g.Info:
              console.log(...h);
              break;
            case g.Warning:
              console.warn(...h);
              break;
            case g.Error:
              console.error(...h);
          }
      }
      (v.k_EnabledLogNames_StorageKey = "EnabledWebLogs"),
        (v.k_IncludeBacktraceInLog_StorageKey = "IncludeBacktraceInLog"),
        (v.s_Singleton = null);
      const f = () => v.Get().LogNames.slice().sort(),
        C = (e, t) => {
          v.Get().IsLogName(e)
            ? v.Get().SetDebugLogEnabled(e, t)
            : console.warn(`No log named "${e}", available logs:`, f());
        };
      (window.DebugLogEnable = (...e) => e.forEach((e) => C(e, !0))),
        (window.DebugLogDisable = (...e) => e.forEach((e) => C(e, !1))),
        (window.DebugLogEnableAll = () => v.Get().SetAllDebugLogsEnabled(!0)),
        (window.DebugLogDisableAll = () => v.Get().SetAllDebugLogsEnabled(!1)),
        (window.DebugLogEnableBacktrace = () =>
          v.Get().SetIncludeBacktraceInLog(!0)),
        (window.DebugLogDisableBacktrace = () =>
          v.Get().SetIncludeBacktraceInLog(!1)),
        (window.DebugLogNames = f),
        (window.EnableSteamConsole = (e = !0) =>
          v.Get().SetDebugLogEnabled("SteamClient", e));
      class b {
        constructor(e) {
          this.m_root = e;
        }
        static SerializeNavState(e, t = !0, n = !0) {
          return {
            root: b.SerializeNavNode(e, t, n),
            bHadFocus: e.BFocusWithin(),
          };
        }
        static SerializeNavNode(e, t = !0, n = !0) {
          let i = null;
          const [o, s] = e.GetChildren();
          return (
            o.length &&
              -1 != s &&
              t &&
              (i = o.map((e, t) => b.SerializeNavNode(e, t == s || n, n))),
            { sNavKey: e.NavKey, iActiveChild: s, rgChildren: i }
          );
        }
        static RestoreSerializedNavState(e, t, n = 0) {
          const { root: i, bHadFocus: o } = t;
          e.Tree.Controller.RestoreHistoryTransaction(() => {
            b.RestoreSerializedNavNode(e, i),
              (1 == n || (0 == n && o)) && e.BTakeFocus(r.uS.APPLICATION);
          });
        }
        static RestoreSerializedNavNode(e, t) {
          var n;
          const { sNavKey: i, iActiveChild: o, rgChildren: s } = t;
          if (
            (i && c(i == e.NavKey, "navkey mismatch"),
            e.SetActiveChild(o),
            s && s.length)
          ) {
            const [t] = e.GetChildren();
            let i = new Map();
            t.forEach((e) => {
              e.NavKey && i.set(e.NavKey, e);
            });
            for (const e of s) {
              if (!e.sNavKey) continue;
              const t = i.get(e.sNavKey);
              t && b.RestoreSerializedNavNode(t, e);
            }
            if (
              -1 != o &&
              (null === (n = s[o]) || void 0 === n ? void 0 : n.sNavKey)
            ) {
              const n = i.get(s[o].sNavKey);
              n && e.SetActiveChild(t.indexOf(n));
            }
            let r = 0,
              a = 0;
            for (; r < t.length && a < s.length; ) {
              for (; r < t.length && t[r].NavKey; ) r++;
              for (; a < s.length && s[a].sNavKey; ) a++;
              if (r >= t.length || a >= s.length) break;
              b.RestoreSerializedNavNode(t[r], s[a]), r++, a++;
            }
          }
        }
      }
      function A(e) {
        return b.SerializeNavState(e, !0, !1);
      }
      function S(e, t, n = 0) {
        return b.RestoreSerializedNavState(e, t, n);
      }
      class w extends b {
        constructor() {
          super(...arguments), (this.m_rgHistory = []);
        }
        PushState() {
          this.m_rgHistory.push(b.SerializeNavState(this.m_root));
        }
        PopState(e = 0) {
          this.m_rgHistory.length &&
            b.RestoreSerializedNavState(this.m_root, this.m_rgHistory.pop(), e);
        }
      }
      class F extends b {
        constructor() {
          super(...arguments), (this.m_mapHistory = new Map());
        }
        SaveState(e) {
          this.m_mapHistory.set(e, b.SerializeNavState(this.m_root));
        }
        RestoreState(e, t = 0) {
          const n = this.m_mapHistory.get(e);
          return (
            !!n &&
            (console.log(`Restoring history for state ${e}`),
            b.RestoreSerializedNavState(this.m_root, n, t),
            !0)
          );
        }
      }
      var N = n(634),
        R = n(454);
      function I(e) {
        return null != e && void 0 !== e.focus;
      }
      function D(e) {
        let t;
        return e && (t = e.ownerDocument.defaultView), t;
      }
      function T(e, t) {
        let n = e.parentElement;
        for (; n; ) {
          if (!t || "x" == t) {
            let e = window.getComputedStyle(n);
            if (
              "scroll" == e.overflowX ||
              "auto" == e.overflowX ||
              "fixed" == e.position
            )
              break;
          }
          if (!t || "y" == t) {
            let e = window.getComputedStyle(n);
            if (
              "scroll" == e.overflowY ||
              "auto" == e.overflowY ||
              "fixed" == e.position
            )
              break;
          }
          n = n.parentElement;
        }
        return n;
      }
      function E(e, t) {
        if (!("ownerDocument" in e)) return !0;
        const n = e.ownerDocument.defaultView.getComputedStyle(e),
          i = "x" === t ? n.overflowX : n.overflowY;
        return "auto" === i || "scroll" === i;
      }
      function O(e, t, n) {
        if ("childList" === e.type) {
          for (let n = 0; n < e.addedNodes.length; n++) {
            const i = e.addedNodes[n];
            if (i.nodeType === Node.ELEMENT_NODE) {
              const e = i;
              e.parentElement && t(e);
            }
          }
          for (let t = 0; t < e.removedNodes.length; t++) {
            const i = e.removedNodes[t];
            i.nodeType === Node.ELEMENT_NODE && n(i);
          }
        }
      }
      const L = new _("FocusNavigation").Debug;
      class y {
        constructor(e, t) {
          (this.m_bActive = !1),
            (this.m_rgGamepadNavigationTrees = []),
            (this.m_LastActiveNavTree = null),
            (this.m_LastActiveFocusNavTree = null),
            (this.m_bMounted = !0),
            (this.m_schDeferredActivate = new h.Ar()),
            (this.m_FocusChangedCallbacks = new h.pB()),
            (this.m_ActiveCallbacks = new h.pB()),
            (this.m_iFocusChangeStack = 0),
            (this.m_controller = e),
            (this.m_rootWindow = t),
            (this.m_activeWindow = t);
        }
        get RootWindow() {
          return this.m_rootWindow;
        }
        get ActiveWindow() {
          return this.m_activeWindow;
        }
        FindNavTreeInFocusedWindow() {
          for (
            let e = this.m_rgGamepadNavigationTrees.length - 1;
            e >= 0;
            e--
          ) {
            const t = this.m_rgGamepadNavigationTrees[e];
            if (t.Window.document.hasFocus()) return t;
          }
        }
        Destroy(e) {
          e == this.m_rootWindow
            ? (L(`${this.LogName(e)} Destroying context for window`),
              (this.m_bMounted = !1),
              this.m_schDeferredActivate.Cancel(),
              this.SetActive(!1, e))
            : L(`${this.LogName(e)} Child window destroyed`);
        }
        SetActive(e, t, n) {
          this.m_controller.BatchedUpdate(() => {
            var i;
            e
              ? ((this.m_activeWindow = t),
                (this.m_activeBrowserView = n),
                this.m_controller.OnContextActivated(this))
              : ((this.m_activeBrowserView = void 0),
                this.m_controller.OnContextDeactivated(this, !1)),
              this.m_bActive != e &&
                ((this.m_bActive = e),
                this.m_ActiveCallbacks.Dispatch(e),
                null === (i = this.m_LastActiveFocusNavTree) ||
                  void 0 === i ||
                  i.OnActiveStateChangedCallbacks.Dispatch(
                    e,
                    this.m_LastActiveFocusNavTree
                  ));
          });
        }
        OnActivate(e) {
          L(
            `${this.LogName(e)} Activating context, there are ${
              this.m_rgGamepadNavigationTrees.length
            } trees in this context`
          ),
            this.SetActive(!0, e);
        }
        OnActivateBrowserView(e, t) {
          L(`${this.LogName(e)} Browser View "${t}" activated in context`),
            this.SetActive(!0, e, t);
        }
        OnDeactivate(e) {
          this.m_activeWindow == e
            ? (L(`${this.LogName(e)} Deactivate context for window`),
              this.SetActive(!1, e))
            : L(
                `${this.LogName(e)} Blurred, but not deactivating because (${
                  this.m_activeWindow.name
                }) has focus.`
              );
        }
        OnDeactivateBrowserView(e, t) {
          L(`${this.LogName(e)} Browser View "${t}" deactivated in context`),
            this.m_activeBrowserView == t && this.SetActive(!1, e, t);
        }
        BIsActive() {
          return this.m_bActive;
        }
        get ActiveCallbacks() {
          return this.m_ActiveCallbacks;
        }
        AddNavTree(e, t) {
          t
            ? this.m_rgGamepadNavigationTrees.unshift(e)
            : (this.m_rgGamepadNavigationTrees.push(e),
              this.SetActiveNavTree(e, !0));
        }
        LogName(e) {
          return e && this.m_rootWindow != e
            ? `(${this.m_rootWindow.name}) > (${e.name})`
            : `(${this.m_rootWindow.name})`;
        }
        SetActiveNavTree(e, t = !1) {
          if (e && this.m_LastActiveNavTree == e) return;
          const n = this.m_LastActiveNavTree;
          n && R.Zf(this.m_rgGamepadNavigationTrees, n),
            e ||
              (this.m_rgGamepadNavigationTrees.length &&
                (e =
                  this.m_rgGamepadNavigationTrees[
                    this.m_rgGamepadNavigationTrees.length - 1
                  ]));
          const i = this.m_LastActiveFocusNavTree == e;
          e && R.Zf(this.m_rgGamepadNavigationTrees, e),
            (this.m_LastActiveNavTree = e),
            (e && e.BUseVirtualFocus()) || (this.m_LastActiveFocusNavTree = e),
            L(
              `${this.LogName(e.Window)} Move from nav tree ${
                null == n ? void 0 : n.id
              } to nav tree ${null == e ? void 0 : e.id} ${
                t ? "taking focus" : "no focus"
              }`
            ),
            n && this.m_rgGamepadNavigationTrees.push(n),
            e &&
              (this.m_rgGamepadNavigationTrees.push(e),
              i ||
                !t ||
                e.DeferredFocus.BHasQueuedFocusNode() ||
                e.DeferredFocus.RequestFocus(e.Root)),
            n && n != this.m_LastActiveFocusNavTree && n.OnDeactivate(e),
            e && !i && e.OnActivate(n);
        }
        BlurNavTree(e) {
          this.m_LastActiveNavTree == e && this.SetActiveNavTree(null, !0),
            R.Zf(this.m_rgGamepadNavigationTrees, e),
            this.m_rgGamepadNavigationTrees.unshift(e);
        }
        UnregisterGamepadNavigationTree(e) {
          R.Zf(this.m_rgGamepadNavigationTrees, e),
            L(
              `(${this.m_rootWindow.name}) Unregister tree ${
                null == e ? void 0 : e.id
              } ${
                this.m_LastActiveFocusNavTree == e
                  ? "(was active)"
                  : "(inactive)"
              }`
            ),
            this.m_LastActiveNavTree == e &&
              ((this.m_LastActiveNavTree = null),
              this.m_bMounted &&
                this.m_schDeferredActivate.Schedule(1, () => {
                  this.m_LastActiveNavTree || this.SetActiveNavTree(null, !0);
                }));
        }
        get FocusChangedCallbacks() {
          return this.m_FocusChangedCallbacks;
        }
        OnFocusChangeStart(e, t, n, i) {
          return (
            0 == this.m_iFocusChangeStack
              ? (this.m_ActiveFocusChange = { source: e, from: n, to: i })
              : !this.m_ActiveFocusChange.from &&
                n &&
                (this.m_ActiveFocusChange.from = n),
            this.m_iFocusChangeStack++
          );
        }
        OnFocusChangeComplete(e) {
          if (
            (this.m_iFocusChangeStack--,
            c(e == this.m_iFocusChangeStack, "out of order focus pop"),
            0 == this.m_iFocusChangeStack)
          ) {
            const { source: e, from: t, to: n } = this.m_ActiveFocusChange;
            this.m_FocusChangedCallbacks.Dispatch(e, t, n);
          }
        }
      }
      const B = new _("FocusNavigation").Debug,
        M = new _("GamepadEvents").Debug;
      class P {
        constructor(e, t, n) {
          (this.m_onActivateCallbacks = new h.pB()),
            (this.m_onDeactivateCallbacks = new h.pB()),
            (this.m_onActiveFocusStateChangedCallbacks = new h.pB()),
            (this.m_lastFocusNodeXMovement = new G()),
            (this.m_lastFocusNodeYMovement = new G()),
            (this.m_DeferredFocus = new x(this)),
            (this.m_Controller = e),
            (this.m_context = t),
            (this.m_ID = n),
            (this.m_Root = new we(this, null, null)),
            this.m_Root.SetProperties({ layout: Ce.COLUMN }),
            (window.GamepadNavTree = this);
        }
        SetUseVirtualFocus(e) {
          this.m_bVirtualFocus = e;
        }
        get id() {
          return this.m_ID;
        }
        get Root() {
          return this.m_Root;
        }
        get Controller() {
          return this.m_Controller;
        }
        get WindowContext() {
          return this.m_context;
        }
        get Window() {
          return this.m_window;
        }
        BUseVirtualFocus() {
          return this.m_bVirtualFocus;
        }
        BIsContextActive() {
          return this.m_Controller.BIsInActiveContext(this);
        }
        CreateNode(e, t) {
          return new we(this, e, t);
        }
        RegisterNavigationItem(e, t) {
          return e.OnMount(t), () => e.OnUnmount();
        }
        OnChildActivated(e) {
          this.m_bIsMounted &&
            this.m_Controller.OnGamepadNavigationTreeFocused(this, e);
        }
        GetLastFocusedNode() {
          return this.m_lastFocusNode;
        }
        GetLastFocusedMovementRect(e) {
          return "x" == e
            ? this.m_lastFocusNodeXMovement.GetRect()
            : "y" == e
            ? this.m_lastFocusNodeYMovement.GetRect()
            : void 0;
        }
        get OnActivateCallbacks() {
          return this.m_onActivateCallbacks;
        }
        get OnDeactivateCallbacks() {
          return this.m_onDeactivateCallbacks;
        }
        get OnActiveStateChangedCallbacks() {
          return this.m_onActiveFocusStateChangedCallbacks;
        }
        OnActivate(e) {
          this.m_onActivateCallbacks.Dispatch(this, e),
            this.m_onActiveFocusStateChangedCallbacks.Dispatch(!0, this);
        }
        OnDeactivate(e) {
          this.m_onDeactivateCallbacks.Dispatch(this, e),
            this.m_onActiveFocusStateChangedCallbacks.Dispatch(!1, this),
            (this.m_bWasActiveForLastFocusChange = !1);
        }
        IsActiveFocusNavTree() {
          return this.m_Controller.IsActiveFocusNavTree(this);
        }
        TakeFocus(e, t = !1) {
          let n = !1;
          t
            ? (n = this.Root.BVisibleChildTakeFocus(e))
            : this.m_lastFocusNode && (n = this.m_lastFocusNode.BTakeFocus(e)),
            n || (n = this.Root.BTakeFocus(e)),
            n || this.TransferFocus(e, this.Root);
        }
        Activate(e = !1) {
          this.m_Controller.OnGamepadNavigationTreeActivated(this, e);
        }
        Deactivate() {
          this.m_Controller.BlurNavTree(this);
        }
        BIsActive() {
          return (
            this.m_bIsMounted &&
            (this.m_Controller.IsActiveNavTree(this) ||
              this.m_Controller.IsActiveFocusNavTree(this))
          );
        }
        BIsActiveFocus() {
          return (
            this.m_bIsMounted && this.m_Controller.IsActiveFocusNavTree(this)
          );
        }
        BIsActiveWithinContext() {
          return (
            this.m_bIsMounted &&
            (this.m_context.m_LastActiveNavTree == this ||
              this.m_context.m_LastActiveFocusNavTree == this)
          );
        }
        SetIsMounted(e) {
          this.m_window = e;
          const t = this.m_Root.Element;
          (t.__nav_tree = this),
            t.__nav_wrapper && t.__nav_wrapper.BindTree(this),
            (this.m_bIsMounted = !0);
        }
        SetParentEmbeddedNavTree(e) {
          this.m_ParentEmbeddedNavTree = e;
        }
        GetParentEmbeddedNavTree() {
          return this.m_ParentEmbeddedNavTree;
        }
        SetOnUnhandledButtonCallback(e) {
          this.m_onUnhandledButton = e;
        }
        HandleButtonDownEventAsLogicalEvent(e) {
          let { bUnhandled: t, bHadLogicalEventMapping: n } = (0, r.Ut)(e);
          return (
            M(
              `Logical gamepad Event fired: ${
                a.eV[e.detail.button]
              }, had logical event: ${n}, was handled: ${!t}`
            ),
            t && this.m_onUnhandledButton && (t = this.m_onUnhandledButton(e)),
            t && (t = this.m_Controller.FireUnhandledGamepadEventCallbacks(e)),
            e.stopPropagation(),
            t
          );
        }
        get DeferredFocus() {
          return this.m_DeferredFocus;
        }
        TransferFocus(e, t, n) {
          this.m_Controller.BatchedUpdate(() =>
            this.TransferFocusInternal(e, t, n)
          );
        }
        TransferFocusInternal(e, t, n) {
          const i = this.m_lastFocusNode;
          if (
            i == t &&
            (this.m_bWasActiveForLastFocusChange || !this.BIsActive())
          )
            return;
          B(
            `Transfer focus in ${this.id}, source: ${r.uS[e]}, from/to:`,
            null == i ? void 0 : i.m_element,
            null == t ? void 0 : t.m_element
          );
          const o = { blurredNode: i, focusedNode: t, source: e },
            s = (function (e, t) {
              if (!t || !e) return null;
              let n = t,
                i = e;
              for (; n.GetDepth() > i.GetDepth() && n.Parent; ) n = n.Parent;
              for (; i.GetDepth() > n.GetDepth() && i.Parent; ) i = i.Parent;
              for (; n != i && n && i; ) (n = n.Parent), (i = i.Parent);
              return n;
            })(i, t);
          if (i) {
            i.SetHasFocus(!1);
            for (let e = i; e && e != s; e = e.Parent) e.SetFocusWithin(!1);
          }
          if (t) {
            t.SetHasFocus(!0);
            for (let e = t; e && e != s; e = e.Parent) e.SetFocusWithin(!0);
          }
          let a = this.m_context.OnFocusChangeStart(e, this, i, t);
          t && t.SetDOMFocusAndScroll(e, i),
            i &&
              ((0, r.Jb)(i.Element, "vgp_onblur", o),
              !i.m_FocusRing ||
                (t && i.m_FocusRing == t.m_FocusRing) ||
                i.m_FocusRing.OnBlur(e, i, t)),
            t &&
              ((0, r.Jb)(t.Element, "vgp_onfocus", o),
              t.m_FocusRing &&
                (i && t.m_FocusRing == i.m_FocusRing
                  ? t.m_FocusRing.OnFocusChange(e, i, t)
                  : t.m_FocusRing.OnFocus(e, t, i))),
            (this.m_lastFocusNode = t),
            (this.m_bWasActiveForLastFocusChange = this.BIsActive()),
            "x" == n
              ? this.m_lastFocusNodeXMovement.SetNode(t.Element)
              : "y" == n
              ? this.m_lastFocusNodeYMovement.SetNode(t.Element)
              : (this.m_lastFocusNodeXMovement.Reset(),
                this.m_lastFocusNodeYMovement.Reset()),
            this.m_context.OnFocusChangeComplete(a);
        }
      }
      class G {
        SetNode(e) {
          (this.m_element = e),
            (this.m_rect = e ? e.getBoundingClientRect() : void 0);
        }
        Reset() {
          this.SetNode(void 0);
        }
        GetRect() {
          var e;
          return (
            null === (e = this.m_element) || void 0 === e
              ? void 0
              : e.isConnected
          )
            ? this.m_element.getBoundingClientRect()
            : this.m_rect;
        }
      }
      class x {
        constructor(e) {
          (this.m_schExecuteQueuedFocus = new h.Ar()),
            (this.m_bSuppressed = !1),
            (this.m_tree = e);
        }
        RequestFocus(e, t) {
          e
            ? ((this.m_target = Object.assign(Object.assign({}, t), {
                node: e,
              })),
              this.m_interval ||
                this.m_bSuppressed ||
                this.m_schExecuteQueuedFocus.Schedule(1, () => {
                  (this.m_interval = void 0), this.ExecuteQueuedFocus();
                }))
            : (this.m_target = void 0);
        }
        BHasQueuedFocusNode() {
          return !!this.m_target;
        }
        BIsQueuedFocusNode(e) {
          return this.m_target && this.m_target.node == e;
        }
        SuppressFocus() {
          (this.m_bSuppressed = !0), this.ClearInterval();
        }
        Reset() {
          (this.m_bSuppressed = !1),
            (this.m_target = void 0),
            this.ClearInterval();
        }
        ClearInterval() {
          this.m_schExecuteQueuedFocus.Cancel();
        }
        ExecuteQueuedFocus() {
          if (((this.m_bSuppressed = !1), this.m_target)) {
            const { node: e, bFocusDescendant: t } = this.m_target;
            (this.m_target = void 0),
              B(
                `DeferredFocus in ${this.m_tree.id} - focusing ${
                  t ? "descendant of" : "node"
                } ${e.NavKey}`
              ),
              t
                ? e.BChildTakeFocus(r.uS.APPLICATION) ||
                  this.m_tree.TransferFocus(r.uS.APPLICATION, e)
                : e.BTakeFocus(r.uS.APPLICATION);
          }
        }
      }
      const k = new _("FocusNavigation").Debug,
        V = (new _("GamepadEvents").Debug, "focus-nav-show-debug-focus-ring");
      class U {
        constructor() {
          (this.m_rgGamepadInputSources = []),
            (this.m_rgAllContexts = []),
            (this.m_bGlobalEventsInitialized = !1),
            (this.m_fnCatchAllGamepadInput = null),
            (this.m_UnhandledButtonEventsCallbacks = new h.pB()),
            (this.m_navigationSource = (0, h.vq)({
              eActivationSourceType: a.Rr.UNKNOWN,
              nActiveGamepadIndex: -1,
              nLastActiveGamepadIndex: -1,
            })),
            (this.m_bShowDebugFocusRing = (0, h.vq)(!1)),
            (this.m_bRestoringHistory = !1),
            (this.m_fnGamepadEventUpdateBatcher = (e) => e()),
            (window.FocusNavController = this),
            this.m_bShowDebugFocusRing.Set(
              "shown" == sessionStorage.getItem(V)
            );
        }
        CreateContext(e) {
          const t = new y(this, e);
          return this.m_rgAllContexts.push(t), t;
        }
        GetDefaultContext() {
          return (
            this.m_DefaultContext ||
              (this.m_DefaultContext = this.CreateContext(window)),
            this.m_DefaultContext
          );
        }
        GetActiveContext() {
          return this.m_ActiveContext;
        }
        FindAnActiveContext() {
          var e, t;
          if (!this.m_ActiveContext && 0 != this.m_rgAllContexts.length) {
            console.warn("No active context; finding one");
            for (const e of this.m_rgAllContexts) {
              const t = e.FindNavTreeInFocusedWindow();
              if (t) {
                k(
                  `${e.LogName(
                    t.Window
                  )} Found a focused window; setting this context as active.`
                ),
                  (this.m_ActiveContext = e),
                  this.m_ActiveContext.OnActivate(t.Window);
                break;
              }
            }
          }
          return (
            !this.m_ActiveContext &&
              this.m_LastActiveContext &&
              (c(
                !1,
                `Failed to find an active context, will fall back to ${
                  null === (e = this.m_LastActiveContext) || void 0 === e
                    ? void 0
                    : e.LogName()
                }`
              ),
              (this.m_ActiveContext = this.m_LastActiveContext),
              this.m_ActiveContext.OnActivate(
                null ===
                  (t = this.m_LastActiveContext.m_LastActiveFocusNavTree) ||
                  void 0 === t
                  ? void 0
                  : t.Window
              )),
            this.m_ActiveContext
          );
        }
        SetShowDebugFocusRing(e) {
          this.m_bShowDebugFocusRing.Set(e),
            (function (e) {
              sessionStorage.setItem(V, e ? "shown" : void 0);
            })(e);
        }
        GetShowDebugFocusRing() {
          return this.m_bShowDebugFocusRing;
        }
        RegisterInputSource(e) {
          let t = new h.Hf();
          return (
            this.m_rgGamepadInputSources.push(e),
            t.PushArrayRemove(this.m_rgGamepadInputSources, e),
            t.Push(
              e.RegisterForGamepadButtonDown(this.OnButtonDown).Unregister
            ),
            t.Push(e.RegisterForGamepadButtonUp(this.OnButtonUp).Unregister),
            t.Push(
              e.RegisterForNavigationTypeChange(this.OnNavigationTypeChange)
                .Unregister
            ),
            t.GetUnregisterFunc()
          );
        }
        SetGamepadEventUpdateBatcher(e) {
          this.m_fnGamepadEventUpdateBatcher = e;
        }
        get NavigationSource() {
          return this.m_navigationSource;
        }
        DispatchVirtualButtonPress(e) {
          this.OnButtonDown(e, a.Rr.UNKNOWN, -1);
        }
        DispatchVirtualButtonClick(e) {
          this.OnButtonDown(e, a.Rr.GAMEPAD, -1),
            this.OnButtonUp(e, a.Rr.GAMEPAD, -1);
        }
        DispatchVirtualGamepad(e, t) {
          switch (e) {
            case "vgp_onbuttondown":
              this.OnButtonDown(t.button, t.source, -1, t.is_repeat);
              break;
            case "vgp_onbuttonup":
              this.OnButtonUp(t.button, t.source, -1);
          }
        }
        BGlobalGamepadButton(e) {
          return (
            e === a.eV.STEAM_GUIDE ||
            e === a.eV.STEAM_QUICK_MENU ||
            e === a.eV.CANCEL
          );
        }
        GetEventTarget(e, t = !1) {
          let n = this.GetActiveContext();
          !n && t && (n = this.FindAnActiveContext());
          let i = null == n ? void 0 : n.ActiveWindow.document.activeElement;
          if (null == n ? void 0 : n.m_LastActiveNavTree) {
            let o = this.m_navigationSource.Value.eActivationSourceType;
            if (
              !(
                n.m_LastActiveNavTree.GetLastFocusedNode() ||
                (o != a.Rr.GAMEPAD && o != a.Rr.KEYBOARD) ||
                (t && n.m_LastActiveNavTree.TakeFocus(r.uS.GAMEPAD, !0),
                this.BGlobalGamepadButton(e))
              )
            )
              return [null, n];
            n.m_LastActiveNavTree.GetLastFocusedNode() &&
              (i = n.m_LastActiveNavTree.GetLastFocusedNode().Element);
          }
          return [i, n];
        }
        ChangeNavigationSource(e, t) {
          let n = this.m_navigationSource.Value,
            i = n.nLastActiveGamepadIndex;
          n.nActiveGamepadIndex >= 0 && (i = n.nActiveGamepadIndex),
            this.m_navigationSource.Set({
              eActivationSourceType: e,
              nActiveGamepadIndex: t,
              nLastActiveGamepadIndex: i,
            }),
            e != a.Rr.MOUSE &&
              (0, N.U5)("Browser.HideCursorUntilMouseEvent") &&
              SteamClient.Browser.HideCursorUntilMouseEvent();
        }
        OnButtonDown(e, t, n, i) {
          var o;
          if (this.m_fnCatchAllGamepadInput && this.m_fnCatchAllGamepadInput(e))
            return void k(
              "Ignoring button press - gamepad input is suppressed by parent window"
            );
          this.ChangeNavigationSource(t, n);
          const [s, l] = this.GetEventTarget(e, !0);
          k(
            `Firing ${a.eV[e]} in tree ${
              null === (o = null == l ? void 0 : l.m_LastActiveNavTree) ||
              void 0 === o
                ? void 0
                : o.id
            } at `,
            s
          ),
            this.BatchedUpdate(() =>
              (0, r.Jb)(s, "vgp_onbuttondown", {
                button: e,
                source: t,
                is_repeat: i,
              })
            );
        }
        OnButtonUp(e, t, n) {
          if (this.m_fnCatchAllGamepadInput) return;
          this.ChangeNavigationSource(t, n);
          const [i, o] = this.GetEventTarget();
          this.BatchedUpdate(() =>
            (0, r.Jb)(i, "vgp_onbuttonup", {
              button: e,
              source: t,
              is_repeat: !1,
            })
          );
        }
        BatchedUpdate(e) {
          this.m_fnGamepadEventUpdateBatcher(e);
        }
        OnNavigationTypeChange(e) {
          var t, n;
          if (
            (this.ChangeNavigationSource(e, -1),
            document.hasFocus() &&
              (e == a.Rr.MOUSE || e == a.Rr.TOUCH) &&
              (null === (t = this.m_ActiveContext) || void 0 === t
                ? void 0
                : t.m_LastActiveNavTree))
          ) {
            const e =
                this.m_ActiveContext.m_LastActiveNavTree.GetLastFocusedNode(),
              t = (function (e) {
                if (!I(e)) return !1;
                const t = e.tagName,
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
              })(null == e ? void 0 : e.Element)
                ? e
                : null;
            null === (n = this.m_ActiveContext.m_LastActiveNavTree) ||
              void 0 === n ||
              n.TransferFocus(r.uS.BROWSER, t);
          }
        }
        NewGamepadNavigationTree(e, t) {
          return new P(this, e, t);
        }
        RegisterGamepadNavigationTree(e, t, n) {
          const i = e.WindowContext;
          return (
            e.SetIsMounted(t),
            n || ((this.m_ActiveContext = i), (this.m_LastActiveContext = i)),
            i.AddNavTree(e, n),
            this.m_bGlobalEventsInitialized || this.BindGlobalEventHandlers(),
            () => i.UnregisterGamepadNavigationTree(e)
          );
        }
        OnGamepadNavigationTreeActivated(e, t = !1) {
          e.WindowContext.SetActiveNavTree(e, t);
        }
        OnGamepadNavigationTreeFocused(e, t, n = !1) {
          const i = e.WindowContext;
          i != this.m_ActiveContext &&
            k(`(${i.LogName(e.Window)}) Focus event in inactive window`),
            e != i.m_LastActiveFocusNavTree &&
              e != i.m_LastActiveNavTree &&
              (i.m_LastActiveFocusNavTree.GetParentEmbeddedNavTree() == e ||
              e.GetParentEmbeddedNavTree() == i.m_LastActiveFocusNavTree
                ? (k(
                    `There was a focus event in ${e.id}, allowing focus transfer to activate nav tree due to parent embedded relationship`
                  ),
                  e.Activate())
                : k(
                    `There was a focus event in ${e.id}, but the active nav tree is ${i.m_LastActiveFocusNavTree.id} so it is being ignored.  Source: ${r.uS[t]}.`
                  ));
        }
        BlurNavTree(e) {
          e.WindowContext.BlurNavTree(e);
        }
        IsActiveFocusNavTree(e) {
          var t;
          return Boolean(
            e &&
              e ==
                (null === (t = this.m_ActiveContext) || void 0 === t
                  ? void 0
                  : t.m_LastActiveFocusNavTree)
          );
        }
        IsActiveNavTree(e) {
          var t;
          return Boolean(
            e &&
              e ==
                (null === (t = this.m_ActiveContext) || void 0 === t
                  ? void 0
                  : t.m_LastActiveNavTree)
          );
        }
        BIsInActiveContext(e) {
          return Boolean(e && e.WindowContext == this.m_ActiveContext);
        }
        BindGlobalEventHandlers() {
          this.m_bGlobalEventsInitialized ||
            (this.m_bGlobalEventsInitialized = !0);
        }
        RegisterForUnhandledButtonDownEvents(e) {
          return this.m_UnhandledButtonEventsCallbacks.Register(e);
        }
        FireUnhandledGamepadEventCallbacks(e) {
          return (
            !this.m_UnhandledButtonEventsCallbacks.CountRegistered() ||
            (this.m_UnhandledButtonEventsCallbacks.Dispatch(e), !1)
          );
        }
        SetSuppressGamepadInput(e) {
          this.m_fnCatchAllGamepadInput = e ? () => !0 : null;
        }
        SetCatchAllGamepadInput(e) {
          this.m_fnCatchAllGamepadInput = e;
        }
        TakeFocusChangingIFrame() {
          window.focus();
          let e =
            this.m_ActiveContext.m_LastActiveFocusNavTree ||
            this.m_ActiveContext.m_LastActiveNavTree;
          e && e.TakeFocus(r.uS.APPLICATION);
        }
        OnContextActivated(e) {
          (this.m_ActiveContext = e), (this.m_LastActiveContext = e);
        }
        OnContextDeactivated(e, t) {
          t &&
            (this.m_LastActiveContext == e &&
              (this.m_LastActiveContext = void 0),
            R.Zf(this.m_rgAllContexts, e)),
            this.m_ActiveContext == e && (this.m_ActiveContext = void 0);
        }
        BIsRestoringHistory() {
          return this.m_bRestoringHistory;
        }
        RestoreHistoryTransaction(e) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            this.m_bRestoringHistory = !0;
            try {
              yield e();
            } finally {
              this.m_bRestoringHistory = !1;
            }
          });
        }
      }
      (0, i.gn)([u.a], U.prototype, "OnButtonDown", null),
        (0, i.gn)([u.a], U.prototype, "OnButtonUp", null),
        (0, i.gn)([u.a], U.prototype, "OnNavigationTypeChange", null);
      class W {
        constructor(e) {
          this.m_node = e;
        }
        TakeFocus(e) {
          return this.m_node.BTakeFocus(e ? r.uS.GAMEPAD : r.uS.APPLICATION, e);
        }
        ParentTakeFocus(e) {
          this.m_node.Parent.BTakeFocus(e ? r.uS.GAMEPAD : r.uS.APPLICATION, e);
        }
        ChildTakeFocus(e) {
          return this.m_node.BChildTakeFocus(
            e ? r.uS.GAMEPAD : r.uS.APPLICATION,
            e
          );
        }
        FocusVisibleChild(e) {
          return this.m_node.BVisibleChildTakeFocus(e);
        }
        BHasFocus() {
          return this.m_node.BHasFocus();
        }
        BFocusWithin() {
          return this.m_node.BFocusWithin();
        }
        get NavKey() {
          return this.m_node.NavKey;
        }
        PushState() {
          this.m_History || (this.m_History = new w(this.m_node)),
            this.m_History.PushState();
        }
        PopState(e = 0) {
          this.m_History && this.m_History.PopState(e);
        }
        SaveState(e) {
          this.m_StateHistory || (this.m_StateHistory = new F(this.m_node)),
            this.m_StateHistory.SaveState(e);
        }
        RestoreState(e, t = 0) {
          return (
            !!this.m_StateHistory && this.m_StateHistory.RestoreState(e, t)
          );
        }
        GetFocusSnapshot() {
          return A(this.m_node);
        }
        RestoreFocusSnapshot(e, t = 0) {
          return S(this.m_node, e, t);
        }
        NavTree() {
          return this.m_node.Tree;
        }
        Node() {
          return this.m_node;
        }
      }
      function H(e, t, n, i = 0.001) {
        return "x" == e
          ? t.x + t.width > n.x + i && t.x + i < n.x + n.width
          : "y" == e
          ? t.y + t.height > n.y + i && t.y + i < n.y + n.height
          : (c(!1, `Invalid axis ${e}`), !1);
      }
      function K(e, t, n) {
        let i;
        return (
          "x" == e
            ? (i = Math.min(t.x + t.width, n.x + n.width) - Math.max(t.x, n.x))
            : "y" == e
            ? (i =
                Math.min(t.y + t.height, n.y + n.height) - Math.max(t.y, n.y))
            : (c(!1, `Invalid axis ${e}`), (i = 0)),
          i < 0 ? 0 : i
        );
      }
      function $(e, t, n) {
        const i = t[e],
          o = (function (e, t) {
            return "x" == e
              ? { min: t.x, max: t.x + t.width }
              : "y" == e
              ? { min: t.y, max: t.y + t.height }
              : void c(!1, `Invalid axis ${e}`);
          })(e, n);
        return i < o.min ? o.min - i : i > o.max ? i - o.max : 0;
      }
      function j(e) {
        if (!e) return Ce.NONE;
        const t = e.ownerDocument.defaultView,
          n = t.getComputedStyle(e);
        if ("flex" == n.display)
          switch (n.flexDirection) {
            case "row":
              return "wrap" == n.flexWrap ? Ce.GRID : Ce.ROW;
            case "row-reverse":
              return Ce.ROW_REVERSE;
            case "column":
              return Ce.COLUMN;
            case "column-reverse":
              return Ce.COLUMN_REVERSE;
          }
        else {
          if ("grid" == n.display) return Ce.GRID;
          if (e.childElementCount > 0) {
            const n = t.getComputedStyle(e.firstElementChild);
            if ("left" === n.float) return Ce.ROW;
            if ("right" === n.float) return Ce.ROW_REVERSE;
            if ("inline" === n.display || "inline-block" === n.display)
              return Ce.GRID;
          }
        }
        return Ce.COLUMN;
      }
      function Y(e) {
        switch (e) {
          case a.eV.DIR_UP:
          case a.eV.DIR_DOWN:
            return "y";
          case a.eV.DIR_LEFT:
          case a.eV.DIR_RIGHT:
            return "x";
          default:
            return;
        }
      }
      function X(e, t, n) {
        const i = [],
          [o, s] = e.GetChildren(),
          r = e.GetActiveChild();
        let a;
        const l = r ? r.Element.getBoundingClientRect() : null;
        if (r) {
          const e = Q(r, t, n);
          if (
            e &&
            !e.offScreen &&
            ((a = z(r, e, e.overlap, n)), a && !a.visibility.offScreen)
          )
            return a;
          e && i.push({ child: r, visibility: e });
        }
        const c = n || l;
        for (let e = 0; e < o.length; e++) {
          const n = o[e];
          if (n == r) continue;
          const s = Q(n, t, c);
          s && i.push({ child: n, visibility: s });
        }
        let u;
        i.sort(J);
        for (const e of i) {
          const { child: n, visibility: i } = e;
          if (i.offScreen && u) {
            if (!u.visibility.offScreen) break;
            if (i.distance > u.visibility.distance) break;
          }
          const o = n == r ? a : z(n, i, i.overlap || t, c);
          o && (!u || J(o, u) < 0) && (u = o);
        }
        return u;
      }
      function z(e, t, n, i) {
        switch (e.GetFocusable()) {
          case "none":
            return null;
          case "children":
            return X(e, t.overlap || n, i);
          case "self":
            return { child: e, visibility: t };
        }
      }
      function J(e, t) {
        const n = e.visibility,
          i = t.visibility;
        return n.offScreen
          ? i.offScreen
            ? n.distance - i.distance
            : 1
          : i.offScreen
          ? -1
          : n.distance - i.distance;
      }
      function Q(e, t, n) {
        const i = e.Element.getBoundingClientRect(),
          o = e.GetFocusable();
        let s;
        if ("none" == o) return null;
        if ("self" == o) {
          if (
            i.top < t.top ||
            i.right > t.right ||
            i.bottom > t.bottom ||
            i.left < t.left
          ) {
            const e = i.top + i.height / 2,
              n = i.left + i.width / 2;
            if (e < t.top) return { offScreen: "top", distance: t.top - e };
            if (n > t.right)
              return { offScreen: "right", distance: n - t.right };
            if (e > t.bottom)
              return { offScreen: "bottom", distance: e - t.bottom };
            if (n < t.left) return { offScreen: "left", distance: t.left - n };
          }
          n &&
            (s = (function (e, t) {
              let n = 0,
                i = 0;
              return (
                t.right < e.left
                  ? (n = e.left - t.right)
                  : t.left > e.right && (n = t.left - e.right),
                t.bottom < e.top
                  ? (i = e.top - t.bottom)
                  : t.top > e.bottom && (i = t.top - e.bottom),
                Math.sqrt(n * n + i * i)
              );
            })(i, n));
        } else if ("children" == o) {
          const n = e.Element;
          if (n.scrollHeight > i.height || n.scrollWidth > i.width) {
            const e = n.ownerDocument.defaultView.getComputedStyle(n);
            if ("visible" == e.overflowX || "visible" == e.overflowY)
              return { overlap: t };
          }
          if (i.bottom < t.top)
            return { offScreen: "top", distance: t.top - i.bottom };
          if (i.left > t.right)
            return { offScreen: "right", distance: i.left - t.right };
          if (i.top > t.bottom)
            return { offScreen: "bottom", distance: i.top - t.bottom };
          if (i.right < t.left)
            return { offScreen: "left", distance: t.left - i.right };
        }
        return {
          overlap: {
            top: Math.max(i.top, t.top),
            right: Math.min(i.right, t.right),
            bottom: Math.min(i.bottom, t.bottom),
            left: Math.max(i.left, t.left),
          },
          distance: s,
        };
      }
      function q(e, t, n) {
        return null == e || isNaN(e) ? e : Math.max(t, Math.min(n, e));
      }
      class Z {
        constructor(e, t) {
          (this.m_bActive = !1),
            (this.m_fnBoundAnimationFunc = void 0),
            (this.m_window = e),
            (this.m_options = Object.assign({ timing: "sine" }, t));
        }
        Start() {
          let e;
          switch (
            ((this.m_msStart = performance.now()),
            (this.m_msEnd = this.m_msStart + this.m_options.msDuration),
            this.m_options.timing)
          ) {
            case "linear":
              e = function (e) {
                return e;
              };
              break;
            case "cubic-in-out":
              e = function (e) {
                return e < 0.5
                  ? 4 * e * e * e
                  : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1;
              };
              break;
            default:
              e = function (e) {
                return 0.5 - Math.cos(e * Math.PI) / 2;
              };
          }
          (this.m_bActive = !0),
            (this.m_fnBoundAnimationFunc = this.OnInterval.bind(this, e)),
            this.m_window.requestAnimationFrame(this.m_fnBoundAnimationFunc);
        }
        BIsActive() {
          return this.m_bActive;
        }
        End() {
          if (this.m_bActive) {
            try {
              this.Update(1);
            } catch (e) {}
            this.ClearInterval(), this.FireOnComplete();
          }
        }
        FireOnComplete() {
          this.m_options.onComplete && this.m_options.onComplete();
        }
        Cancel() {
          this.m_bActive = !1;
        }
        OnInterval(e) {
          if (!this.m_bActive) return;
          let t = performance.now() - this.m_msStart;
          if (t >= this.m_options.msDuration) return void this.End();
          let n = t / this.m_options.msDuration;
          try {
            this.Update(e(n));
          } catch (e) {}
          this.m_window.requestAnimationFrame(this.m_fnBoundAnimationFunc);
        }
        ClearInterval() {
          this.m_bActive = !1;
        }
      }
      class ee extends Z {
        constructor(e, t, n) {
          super(e, t), (this.m_fnCallback = n);
        }
        Update(e) {
          this.m_fnCallback(e);
        }
      }
      class te extends Z {
        constructor(e, t, n) {
          super("ownerDocument" in e ? D(e) : e, n),
            (this.m_props = {}),
            (this.m_object = e),
            (this.m_propTargets = t);
        }
        Start() {
          this.m_props = {};
          for (let e in this.m_propTargets) {
            let t = parseFloat(this.m_object[e]) || 0,
              n = this.m_propTargets[e];
            t != n && (this.m_props[e] = { start: t, end: n });
          }
          super.Start();
        }
        Update(e) {
          for (let t in this.m_props) {
            let n = this.m_props[t],
              i = n.start + (n.end - n.start) * e;
            this.m_object[t] = i;
          }
        }
      }
      const ne = new _("ScrollSnap").Debug;
      let ie = !1;
      let oe;
      function se(e) {
        if (!e) return { left: 0, top: 0, right: 0, bottom: 0 };
        if (!("ownerDocument" in e))
          return {
            left: 0,
            right: e.innerWidth,
            top: 0,
            bottom: e.innerHeight,
          };
        let t = 0,
          n = 0,
          i = e;
        for (; i; ) {
          if (((t += i.offsetTop), (n += i.offsetLeft), "ownerDocument" in i)) {
            if ("fixed" === window.getComputedStyle(i).position) break;
          }
          i = i.offsetParent;
        }
        for (i = null == e ? void 0 : e.parentElement; i; ) {
          const { scrollTop: e, scrollLeft: o } = pe(i);
          if (((t -= e), (n -= o), "ownerDocument" in i)) {
            if ("fixed" === window.getComputedStyle(i).position) break;
          }
          i = i.parentElement;
        }
        return {
          left: n,
          top: t,
          right: n + e.offsetWidth,
          bottom: t + e.offsetHeight,
        };
      }
      function re(e, t) {
        return "x" == t
          ? [e.left, e.right, e.right - e.left]
          : [e.top, e.bottom, e.bottom - e.top];
      }
      function ae(e, t, n, i) {
        let [o, s, r] = re(e, i),
          [a, l, c] = re(t, i),
          [u, h] = re(n, i);
        return o < a && s > l
          ? 0
          : (o < a && r <= c) || (s > l && r > c)
          ? o - a - u
          : (o < a && r > c) || (s > l && r <= c)
          ? s - l + h
          : 0;
      }
      function le(e) {
        return "auto" == e
          ? 0
          : e.endsWith("px")
          ? parseInt(e)
          : (console.log("Unsupported length", e), 0);
      }
      function ce(e) {
        if (!("ownerDocument" in e))
          return { left: 0, right: 0, top: 0, bottom: 0 };
        const t = e.ownerDocument.defaultView.getComputedStyle(e);
        return {
          left: le(t.scrollMarginLeft),
          right: le(t.scrollMarginRight),
          top: le(t.scrollMarginTop),
          bottom: le(t.scrollMarginBottom),
        };
      }
      function ue(e, t) {
        let n = (function (e) {
          let t;
          return (
            (t =
              "ownerDocument" in e
                ? e.ownerDocument.defaultView.getComputedStyle(e)
                : e.document.defaultView.getComputedStyle(
                    window.document.documentElement
                  )),
            {
              left: le(t.scrollPaddingLeft),
              right: le(t.scrollPaddingRight),
              top: le(t.scrollPaddingTop),
              bottom: le(t.scrollPaddingBottom),
            }
          );
        })(e);
        return {
          left: Math.max(0, t.left + n.left),
          right: Math.max(0, t.right - n.right),
          top: Math.max(0, t.top + n.top),
          bottom: Math.max(0, t.bottom - n.bottom),
        };
      }
      function he(e) {
        return e > -1 && e < 1;
      }
      function de(e, t, n, i, o) {
        ne(
          "----------------------------------------------------------------------------------"
        ),
          ne("Scrolling Into View:", t);
        let s = [],
          r = t,
          a = se(t),
          l = null != o ? o : Number.MAX_VALUE;
        for (; r; ) {
          let e = T(r);
          e || (e = D(r));
          let t = ce(r),
            n = ue(e, se(e)),
            c = ve(e),
            u = { element: e, left: 0, top: 0 };
          if (
            (ne(
              "Checking scroll div",
              e,
              `scroll y:${c.scrollTop} of ${c.MaxScrollTop()}, x:${
                c.scrollLeft
              } of ${c.MaxScrollLeft()}, adjusted =>`,
              n,
              "target => ",
              a
            ),
            (i && "y" != i) ||
              !E(e, "y") ||
              ((u.top = ae(a, n, t, "y")),
              (u.top = q(u.top, -c.scrollTop, c.MaxScrollTop() - c.scrollTop)),
              o &&
                ((u.top = Math.min(l, Math.abs(u.top)) * (u.top < 0 ? -1 : 1)),
                (l -= Math.abs(u.top))),
              ne(`- checked y: ${u.top}`)),
            (i && "x" != i) ||
              !E(e, "x") ||
              ((u.left = ae(a, n, t, "x")),
              (u.left = q(
                u.left,
                -c.scrollLeft,
                c.MaxScrollLeft() - c.scrollLeft
              )),
              o &&
                ((u.left =
                  Math.min(l, Math.abs(u.left)) * (u.left < 0 ? -1 : 1)),
                (l -= Math.abs(u.left))),
              ne(`- checked x: ${u.left}`)),
            s.push(u),
            o && !l)
          )
            break;
          if (!("ownerDocument" in e)) break;
          const h = window.getComputedStyle(e);
          if ("fixed" === h.position || "sticky" === h.position) break;
          (r = e),
            (a = {
              top: a.top - u.top,
              right: a.right - u.left,
              bottom: a.bottom - u.top,
              left: a.left - u.left,
            });
        }
        let c = !1;
        for (let e of s) {
          if (he(e.left) && he(e.top)) continue;
          let t = ve(e.element),
            i = t.scrollTop + e.top,
            o = t.scrollLeft + e.left;
          (o = q(o, 0, t.MaxScrollLeft())),
            (i = q(i, 0, t.MaxScrollTop())),
            (he(t.scrollLeft - o) && he(t.scrollTop - i)) ||
              (t.scrollTo({ left: o, top: i, behavior: n }),
              c || (ne("Scrolling:"), (c = !0)),
              ne(
                `- ${e.top},${e.left} => ${i}, ${o}, behavior: ${n}`,
                e.element
              ));
        }
      }
      function me(e, t) {
        const { top: n, left: i, behavior: o } = t,
          s = ve(e);
        s.scrollTo({
          top: s.scrollTop + (null != n ? n : 0),
          left: s.scrollLeft + (null != i ? i : 0),
          behavior: o,
        });
      }
      class ge {
        constructor(e) {
          (this.m_scrollTopTarget = void 0),
            (this.m_scrollLeftTarget = void 0),
            (this.m_animation = void 0),
            "ownerDocument" in e
              ? ((this.m_element = e),
                (this.m_fnOriginalScrollTo = e.scrollTo),
                (this.m_element.scrollTo = (e, t) => {
                  "number" == typeof e
                    ? this.scrollTo({ left: e, top: t })
                    : this.scrollTo(e);
                }))
              : ((this.m_window = e),
                (this.m_element = e.document.documentElement));
        }
        ResetScrollState() {
          (this.m_scrollTopTarget = void 0),
            (this.m_scrollLeftTarget = void 0),
            this.m_window || (this.m_element.style.scrollSnapType = "");
        }
        scrollTo(e) {
          var t, n;
          if ("auto" == e.behavior)
            this.m_animation &&
              (this.m_animation.Cancel(), (this.m_animation = void 0)),
              this.m_window
                ? this.m_window.scrollTo(e)
                : this.m_fnOriginalScrollTo.apply(this.m_element, [e]),
              this.ResetScrollState();
          else {
            const i =
                null !== (t = e.left) && void 0 !== t ? t : this.scrollLeft,
              o = null !== (n = e.top) && void 0 !== n ? n : this.scrollTop;
            let s = "sine";
            this.m_animation && (this.m_animation.Cancel(), (s = "linear"));
            if (
              Math.max(
                Math.abs(this.currentScrollTop - o),
                Math.abs(this.currentScrollLeft - i)
              ) > 0
            ) {
              const e = {
                msDuration: 200,
                timing: s,
                onComplete: this.ResetScrollState,
              };
              if (this.m_window) {
                const t = this.currentScrollLeft,
                  n = this.currentScrollTop;
                this.m_animation = new ee(this.m_window, e, (e) => {
                  this.m_window.scrollTo({
                    left: t + (i - t) * e,
                    top: n + (o - n) * e,
                    behavior: "auto",
                  });
                });
              } else
                (this.m_element.style.scrollSnapType = "initial"),
                  (this.m_animation = new te(
                    this.m_element,
                    { scrollTop: o, scrollLeft: i },
                    e
                  ));
              (this.m_scrollLeftTarget = i),
                (this.m_scrollTopTarget = o),
                this.m_animation.Start();
            }
          }
        }
        get clientWidth() {
          return this.m_window
            ? this.m_window.innerWidth
            : this.m_element.clientWidth;
        }
        get clientHeight() {
          return this.m_window
            ? this.m_window.innerHeight
            : this.m_element.clientHeight;
        }
        get currentScrollLeft() {
          return this.m_window
            ? this.m_window.scrollX
            : this.m_element.scrollLeft;
        }
        get currentScrollTop() {
          return this.m_window
            ? this.m_window.scrollY
            : this.m_element.scrollTop;
        }
        get scrollLeft() {
          var e;
          return null !== (e = this.m_scrollLeftTarget) && void 0 !== e
            ? e
            : this.currentScrollLeft;
        }
        get scrollTop() {
          var e;
          return null !== (e = this.m_scrollTopTarget) && void 0 !== e
            ? e
            : this.currentScrollTop;
        }
        get scrollWidth() {
          return this.m_element.scrollWidth;
        }
        get scrollHeight() {
          return this.m_element.scrollHeight;
        }
        MaxScrollTop() {
          return this.scrollHeight - this.clientHeight;
        }
        MaxScrollLeft() {
          return this.scrollWidth - this.clientWidth;
        }
      }
      (0, i.gn)([u.a], ge.prototype, "ResetScrollState", null);
      const _e = new WeakMap();
      function ve(e) {
        let t = _e.get(e);
        return t || ((t = new ge(e)), _e.set(e, t)), t;
      }
      function pe(e) {
        const t = _e.get(e);
        return t
          ? { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop }
          : { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
      }
      const fe = new _("FocusNavigationMovement").Debug;
      var Ce, be, Ae, Se;
      !(function (e) {
        (e[(e.NONE = 0)] = "NONE"),
          (e[(e.COLUMN = 1)] = "COLUMN"),
          (e[(e.ROW = 2)] = "ROW"),
          (e[(e.COLUMN_REVERSE = 3)] = "COLUMN_REVERSE"),
          (e[(e.ROW_REVERSE = 4)] = "ROW_REVERSE"),
          (e[(e.GRID = 5)] = "GRID"),
          (e[(e.GEOMETRIC = 6)] = "GEOMETRIC");
      })(Ce || (Ce = {})),
        (function (e) {
          (e[(e.FIRST = 0)] = "FIRST"),
            (e[(e.LAST = 1)] = "LAST"),
            (e[(e.MAINTAIN_X = 2)] = "MAINTAIN_X"),
            (e[(e.MAINTAIN_Y = 3)] = "MAINTAIN_Y"),
            (e[(e.PREFERRED_CHILD = 4)] = "PREFERRED_CHILD");
        })(be || (be = {})),
        (function (e) {
          (e[(e.Standard = 0)] = "Standard"),
            (e[(e.NoTransform = 1)] = "NoTransform"),
            (e[(e.NoTransformSparseContent = 2)] = "NoTransformSparseContent");
        })(Ae || (Ae = {})),
        (function (e) {
          (e[(e.INVALID = 0)] = "INVALID"),
            (e[(e.FORWARD = 1)] = "FORWARD"),
            (e[(e.BACKWARD = 2)] = "BACKWARD");
        })(Se || (Se = {}));
      class we {
        constructor(e, t, n) {
          (this.m_rgChildren = []),
            (this.m_iLastActiveChildIndex = -1),
            (this.m_bChildrenSorted = !1),
            (this.m_bAutoFocusChild = !1),
            (this.m_bMounted = !1),
            (this.m_bFocused = !1),
            (this.m_FocusCallbackList = new h.pB()),
            (this.m_bFocusWithin = !1),
            (this.m_FocusWithinCallbackList = new h.pB()),
            (this.m_ActionDescriptionsChangedCallbackList = new h.pB()),
            (this.m_RetainFocusParent = null),
            (this.m_rgNavigationHandlers = []),
            (this.m_rgFocusHandlers = []),
            (this.m_Tree = e),
            (this.m_Parent = t),
            (this.m_FocusRing = n),
            (this.m_nDepth = t ? t.m_nDepth + 1 : 0);
        }
        CreateHandle() {
          return new W(this);
        }
        get Tree() {
          return this.m_Tree;
        }
        get NavKey() {
          var e, t;
          return (
            null === (e = this.m_Properties) || void 0 === e ? void 0 : e.navKey
          )
            ? this.m_Properties.navKey
            : (null === (t = this.m_element) || void 0 === t ? void 0 : t.id)
            ? this.m_element.id
            : void 0;
        }
        get Element() {
          return this.m_element;
        }
        get Parent() {
          return this.m_Parent;
        }
        SetProperties(e) {
          var t, n, i, o, s;
          const a =
            ((l =
              null === (t = this.m_Properties) || void 0 === t
                ? void 0
                : t.actionDescriptionMap),
            (c = null == e ? void 0 : e.actionDescriptionMap),
            !(null == l || null == c
              ? l === c
              : "object" == typeof l &&
                "object" == typeof c &&
                Object.keys(l).length === Object.keys(c).length &&
                Object.keys(l).every(
                  (e) => c.hasOwnProperty(e) && l[e] === c[e]
                )));
          var l, c;
          const u =
              null === (n = this.m_Properties) || void 0 === n
                ? void 0
                : n.retainFocus,
            h =
              null === (i = this.m_Properties) || void 0 === i
                ? void 0
                : i.noFocusRing;
          (this.m_Properties = e || {}),
            a && this.m_ActionDescriptionsChangedCallbackList.Dispatch(),
            this.m_Properties.retainFocus && !u
              ? this.PropagateRetainFocusParentToChildren(this)
              : !this.m_Properties.retainFocus &&
                u &&
                this.PropagateRetainFocusParentToChildren(
                  this.m_RetainFocusParent
                ),
            this.m_Properties.noFocusRing && !h && this.BHasFocus()
              ? null === (o = this.m_FocusRing) ||
                void 0 === o ||
                o.OnBlur(r.uS.APPLICATION, this, this)
              : !this.m_Properties.noFocusRing &&
                h &&
                this.BHasFocus() &&
                (null === (s = this.m_FocusRing) ||
                  void 0 === s ||
                  s.OnFocus(r.uS.APPLICATION, this, this)),
            this.m_element && this.RegisterDOMEvents();
        }
        BWantsAutoFocus() {
          return this.m_Properties.autoFocus || this.m_bAutoFocusChild;
        }
        BWantsPreferredFocus() {
          return this.m_Properties.preferredFocus;
        }
        BWantsFocusRing() {
          return (
            !this.m_Properties.noFocusRing ||
            this.m_Tree.Controller.GetShowDebugFocusRing().Value
          );
        }
        GetBoundingRect() {
          return this.m_element && this.m_element.getBoundingClientRect();
        }
        SetHasFocus(e) {
          e != this.m_bFocused &&
            ((this.m_bFocused = e),
            this.m_FocusCallbackList.Dispatch(this.m_bFocused));
        }
        SetFocusWithin(e) {
          var t;
          e != this.m_bFocusWithin &&
            ((this.m_bFocusWithin = e),
            this.m_FocusWithinCallbackList.Dispatch(this.m_bFocusWithin),
            (null === (t = this.m_Properties) || void 0 === t
              ? void 0
              : t.onFocusWithin) &&
              this.m_Properties.onFocusWithin(this.m_bFocusWithin));
        }
        BHasFocus() {
          return this.m_bFocused;
        }
        BFocusWithin() {
          return this.m_bFocusWithin;
        }
        get FocusCallbackList() {
          return this.m_FocusCallbackList;
        }
        get FocusWithinCallbackList() {
          return this.m_FocusWithinCallbackList;
        }
        ForceMeasureFocusRing() {
          var e;
          null === (e = this.m_FocusRing) ||
            void 0 === e ||
            e.OnForceMeasureFocusRing();
        }
        get ActionDescriptionChangedCallbackList() {
          return this.m_ActionDescriptionsChangedCallbackList;
        }
        GetActiveActionDescriptions() {
          return this.BuildConsolidatedActionDescriptionMap({});
        }
        BuildConsolidatedActionDescriptionMap(e) {
          var t;
          const n =
            null === (t = this.m_Properties) || void 0 === t
              ? void 0
              : t.actionDescriptionMap;
          if (n)
            for (const t in n) {
              const i = t;
              void 0 === e[i] && (e[i] = n[i]);
            }
          return this.m_Parent
            ? this.m_Parent.BuildConsolidatedActionDescriptionMap(e)
            : e;
        }
        AddChild(e) {
          var t;
          this.m_rgChildren.push(e),
            (this.m_bChildrenSorted = !1),
            this.m_element && this.RegisterDOMEvents(),
            (
              null === (t = this.m_Properties) || void 0 === t
                ? void 0
                : t.retainFocus
            )
              ? e.SetRetainFocusParent(this)
              : this.m_RetainFocusParent &&
                e.SetRetainFocusParent(this.m_RetainFocusParent),
            this.m_bMounted &&
              e.BFocusWithin() &&
              (c(
                !this.m_ActiveChild && this.BFocusWithin(),
                "Invalid focus state in AddChild"
              ),
              this.SetActiveChild(this.m_rgChildren.length - 1));
        }
        OnMount(e) {
          (this.m_element = e),
            this.m_Parent
              ? this.m_Parent.AddChild(this)
              : c(this == this.m_Tree.Root, "Only root should have no parent"),
            (this.m_bMounted = !0),
            this.RegisterDOMEvents();
          const t =
              this.m_RetainFocusParent && this.m_RetainFocusParent.BHasFocus(),
            n = this.m_Properties.autoFocus || t;
          if (this.BWantsAutoFocus() || n) {
            let e = -1;
            this.m_rgChildren.length &&
              (this.EnsureChildrenSorted(),
              (e = this.m_rgChildren.findIndex((e) => e.BWantsAutoFocus()))),
              (this.m_Properties.autoFocus || n || -1 !== e) &&
                (this.SetActiveChild(e),
                !this.m_Parent || this.m_Parent.m_element
                  ? t
                    ? this.m_Tree.DeferredFocus.BHasQueuedFocusNode() ||
                      this.m_Tree.DeferredFocus.RequestFocus(
                        this.m_RetainFocusParent,
                        { bFocusDescendant: !0 }
                      )
                    : this.Tree.DeferredFocus.RequestFocus(this)
                  : (this.m_Parent.m_bAutoFocusChild = !0));
          } else if (this.m_rgChildren.length) {
            const e = this.m_rgChildren.findIndex((e) => e.BFocusWithin());
            -1 != e &&
              (this.SetActiveChild(e),
              c(
                this.m_bFocusWithin,
                "Child has focus, we should be m_bFocusWithin"
              ));
          }
        }
        DEV_SetDebugPropsOnElement() {}
        OnUnmount() {
          var e;
          (null === (e = this.m_Properties) || void 0 === e
            ? void 0
            : e.retainFocus) &&
            this.PropagateRetainFocusParentToChildren(this.m_RetainFocusParent),
            (this.m_bMounted = !1);
          const t = this.Tree.DeferredFocus.BIsQueuedFocusNode(this);
          (this.m_bFocused || t) &&
            (fe(
              `The focused node is unmounting, ${
                this.m_RetainFocusParent
                  ? "will transfer to retain focus ancestor"
                  : "will blur"
              }.`
            ),
            t && this.Tree.DeferredFocus.RequestFocus(void 0),
            this.m_RetainFocusParent
              ? this.m_RetainFocusParent.OnFocusedDecendantRemoved(this)
              : this.m_bFocused &&
                this.m_Tree.TransferFocus(r.uS.APPLICATION, null)),
            this.UnregisterDOMEvents(),
            this.m_Parent
              ? this.m_Parent.RemoveChild(this)
              : c(this == this.m_Tree.Root, "Only root should have no parent");
        }
        RegisterDOMEvents() {
          !this.m_rgNavigationHandlers.length &&
            (this.m_rgChildren.length >= 2 ||
              this.m_Properties.layout != Ce.NONE ||
              this.m_Properties.onMoveUp ||
              this.m_Properties.onMoveRight ||
              this.m_Properties.onMoveDown ||
              this.m_Properties.onMoveLeft) &&
            this.m_rgNavigationHandlers.push(
              (0, r.$G)(this.m_element, this.OnNavigationEvent)
            ),
            (this.m_Properties.focusable || 0 == this.m_rgChildren.length) &&
              (this.m_rgFocusHandlers.length ||
                (this.m_element.addEventListener("focus", this.OnDOMFocus),
                this.m_element.addEventListener("blur", this.OnDOMBlur),
                this.m_rgFocusHandlers.push(() => {
                  this.m_element.removeEventListener("focus", this.OnDOMFocus),
                    this.m_element.removeEventListener("blur", this.OnDOMBlur);
                })));
        }
        RemoveChild(e) {
          let t = this.m_rgChildren.indexOf(e);
          c(-1 !== t, "Child was not found to remove"),
            -1 !== t &&
              (this.m_ActiveChild == e && (this.m_ActiveChild = void 0),
              this.m_rgChildren.splice(t, 1));
        }
        UnregisterDOMEvents() {
          this.m_rgNavigationHandlers.forEach((e) => e()),
            (this.m_rgNavigationHandlers = []),
            this.m_rgFocusHandlers.forEach((e) => e()),
            (this.m_rgFocusHandlers = []);
        }
        GetActiveDescendant() {
          const e = this.GetActiveChild();
          return e ? e.GetActiveDescendant() : this;
        }
        IsValidChildIndex(e) {
          return e >= 0 && e < this.m_rgChildren.length;
        }
        GetActiveChild() {
          return this.m_ActiveChild
            ? this.m_ActiveChild
            : (this.EnsureChildrenSorted(),
              this.IsValidChildIndex(this.m_iLastActiveChildIndex)
                ? this.m_rgChildren[this.m_iLastActiveChildIndex]
                : null);
        }
        GetActiveChildIndex() {
          if (this.m_ActiveChild) {
            if (
              this.IsValidChildIndex(this.m_iLastActiveChildIndex) &&
              this.m_rgChildren[this.m_iLastActiveChildIndex] ==
                this.m_ActiveChild
            )
              return this.m_iLastActiveChildIndex;
            this.m_iLastActiveChildIndex = this.m_rgChildren.indexOf(
              this.m_ActiveChild
            );
          }
          return this.m_iLastActiveChildIndex;
        }
        EnsureChildrenSorted(e = !1) {
          (this.m_bChildrenSorted && !e) ||
            (this.m_rgChildren.sort((e, t) => {
              const n = e.m_element,
                i = t.m_element;
              if (!n) return i ? 1 : 0;
              if (!i) return -1;
              const o = n.compareDocumentPosition(i);
              return o & Node.DOCUMENT_POSITION_PRECEDING
                ? 1
                : o & Node.DOCUMENT_POSITION_FOLLOWING
                ? -1
                : 0;
            }),
            this.m_ActiveChild &&
              (this.m_iLastActiveChildIndex = this.m_rgChildren.indexOf(
                this.m_ActiveChild
              )),
            (this.m_bChildrenSorted = !0));
        }
        GetLastFocusElement() {
          const e = this.GetActiveChild();
          return e ? e.GetLastFocusElement() : this.m_element;
        }
        OnDOMFocus(e) {
          this.m_bFocused || this.m_Tree.TransferFocus(r.uS.BROWSER, this);
        }
        OnDOMBlur(e) {
          this.m_bFocused &&
            this.m_element.ownerDocument.hasFocus() &&
            this.m_Tree.TransferFocus(r.uS.BROWSER, null);
        }
        UpdateParentActiveChild() {
          this.m_Parent &&
            (this.m_Parent.SetActiveChild(this),
            this.m_Parent.UpdateParentActiveChild());
        }
        GetFocusable() {
          const {
            focusable: e,
            focusableIfNoChildren: t,
            childFocusDisabled: n,
            fnCanTakeFocus: i,
          } = this.m_Properties;
          return this.m_bMounted
            ? i && !i(this)
              ? "none"
              : e || (t && (n || 0 == this.m_rgChildren.length))
              ? "self"
              : !n && this.m_rgChildren.length
              ? "children"
              : "none"
            : "none";
        }
        BTakeFocus(e, t) {
          const n = this.FindFocusableNode(t);
          return this.InternalFocusDescendant(n, e, t);
        }
        FindFocusableNode(e, t) {
          switch (this.GetFocusable()) {
            case "none":
              return null;
            case "self":
              return this;
            case "children":
              return this.FindFocusableDescendant(e, t);
          }
        }
        BChildTakeFocus(e, t) {
          const n = this.FindFocusableDescendant(t);
          return this.InternalFocusDescendant(n, e, t);
        }
        BFocusFirstChild(e) {
          const t = this.FindNextFocusableChildInDirection(
            -1,
            Se.FORWARD,
            a.eV.INVALID
          );
          return this.InternalFocusDescendant(t, e);
        }
        BFocusLastChild(e) {
          const t = this.FindNextFocusableChildInDirection(
            this.m_rgChildren.length,
            Se.BACKWARD,
            a.eV.INVALID
          );
          return this.InternalFocusDescendant(t, e);
        }
        FindFocusableDescendant(e, t) {
          const n = Y(e),
            { focusableIfNoChildren: i, childFocusDisabled: o } =
              this.m_Properties;
          if (o) return null;
          if (this.m_rgChildren.length) {
            this.EnsureChildrenSorted();
            const { navEntryPreferPosition: o, resetNavOnEntry: s } =
              this.m_Properties;
            let r,
              a = this.GetActiveChildIndex();
            if ((s && void 0 !== e && (a = -1), !this.IsValidChildIndex(a))) {
              const e = this.GetLayout();
              a =
                a >= this.m_rgChildren.length ||
                e == Ce.ROW_REVERSE ||
                e == Ce.COLUMN_REVERSE ||
                o == be.LAST
                  ? this.m_rgChildren.length - 1
                  : 0;
            }
            if ((o == be.MAINTAIN_X || o == be.MAINTAIN_Y || t) && n) {
              let i, s;
              o == be.MAINTAIN_X ? (i = "x") : o == be.MAINTAIN_Y && (i = "y"),
                i == l[n] && (s = this.m_Tree.GetLastFocusedMovementRect(l[n])),
                fe(
                  `Taking focus while preserving ${be[o]} preserved: ${i} movement: ${n}, node:`,
                  s || t
                );
              const a = this.ComputeRelativeDirection(e, Ce.GRID);
              if (s || t) {
                const o = a == Se.BACKWARD ? this.m_rgChildren.length - 1 : 0;
                r = this.FindClosestChildInNextAxiallyAlignedSet(
                  i || l[n],
                  a,
                  e,
                  s || t,
                  o,
                  this.m_rgChildren[o].GetBoundingRect()
                );
              } else if (i != l[n]) {
                const t = a == Se.BACKWARD ? this.m_rgChildren.length : -1;
                r = this.FindNextFocusableChildInDirection(t, a, e);
              }
            } else if (o == be.PREFERRED_CHILD) {
              for (const t of this.m_rgChildren)
                if (
                  ((r = t.BWantsPreferredFocus() && t.FindFocusableNode(e)), r)
                )
                  return r;
            } else
              o == be.LAST &&
                (r = this.FindNextFocusableChildInDirection(
                  a + 1,
                  Se.BACKWARD,
                  e
                ));
            return (
              r ||
                (r = this.FindNextFocusableChildInDirection(
                  a - 1,
                  Se.FORWARD,
                  e
                )),
              r ||
                (r = this.FindNextFocusableChildInDirection(a, Se.BACKWARD, e)),
              r || (i ? this : null)
            );
          }
          return null;
        }
        BVisibleChildTakeFocus(e) {
          var t, n, i, o;
          const s =
              null !==
                (i =
                  null ===
                    (n =
                      null === (t = this.Element) || void 0 === t
                        ? void 0
                        : t.ownerDocument) || void 0 === n
                    ? void 0
                    : n.defaultView) && void 0 !== i
                ? i
                : window,
            r = X(this, {
              top: 0,
              left: 0,
              right: s.innerWidth,
              bottom: s.innerHeight,
            });
          return (
            fe(
              `Focusing visible child, best child match is ${
                null === (o = null == r ? void 0 : r.child) || void 0 === o
                  ? void 0
                  : o.Element.className
              } - ${JSON.stringify(null == r ? void 0 : r.visibility)}`
            ),
            !!r && r.child.BTakeFocus(e)
          );
        }
        GetLayout() {
          if (this.m_Properties.layout) return this.m_Properties.layout;
          if (this.m_rgChildren.length < 2) return Ce.NONE;
          return j(this.m_element);
        }
        OnNavigationEvent(e) {
          const t = e.detail.button;
          if (this.BTryInternalNavigation(t, e.detail.is_repeat)) return !0;
          const {
            onMoveUp: n,
            onMoveRight: i,
            onMoveDown: o,
            onMoveLeft: s,
          } = this.m_Properties;
          let r = !1;
          switch (t) {
            case a.eV.DIR_UP:
              n && (r = n(e.detail, this));
              break;
            case a.eV.DIR_RIGHT:
              i && (r = i(e.detail, this));
              break;
            case a.eV.DIR_DOWN:
              o && (r = o(e.detail, this));
              break;
            case a.eV.DIR_LEFT:
              s && (r = s(e.detail, this));
          }
          return r;
        }
        InternalFocusDescendant(e, t, n) {
          return !!e && (this.m_Tree.TransferFocus(t, e, Y(n)), !0);
        }
        BTryInternalNavigation(e, t) {
          var n;
          const i = this.GetLayout();
          let o,
            s = this.ComputeRelativeDirection(e, i);
          if (
            (fe(
              `Handling navigation event ${a.eV[e]} - ${Ce[i]} - ${Se[s]}`,
              this.m_element
            ),
            s == Se.INVALID)
          )
            return !1;
          if (this.m_Properties.focusable && this.m_bFocused)
            return fe("Skipping navigation within focused element"), !1;
          if ((this.EnsureChildrenSorted(!0), i == Ce.GRID))
            o = this.FindNextFocusableChildInGrid(
              this.GetActiveChildIndex(),
              s,
              e
            );
          else {
            let t = this.GetActiveChildIndex();
            this.IsValidChildIndex(t) ||
              (t = s == Se.FORWARD ? -1 : this.m_rgChildren.length),
              (o = this.FindNextFocusableChildInDirection(t, s, e));
          }
          if (o) {
            const i = Y(e);
            if (this.GetScrollIntoViewType() == Ae.NoTransformSparseContent) {
              const e =
                  null === (n = o.Element) || void 0 === n
                    ? void 0
                    : n.ownerDocument.defaultView,
                s =
                  ("y" == i ? e.innerHeight : e.innerWidth) / (t ? 4.5 : 3.33),
                r = se(o.Element);
              if (
                (r.top > e.innerHeight && r.bottom > e.innerHeight + s) ||
                (r.bottom < 0 && r.top < -s) ||
                (r.left > e.innerWidth && r.right > e.innerWidth + s) ||
                (r.right < 0 && r.left < -s)
              )
                return (
                  fe(`Element too far away, scrolling ${s} on ${i} axis `),
                  de(o.Element, o.Element, "smooth", i, s),
                  !0
                );
            }
            return this.m_Tree.TransferFocus(r.uS.GAMEPAD, o, i), !0;
          }
          return !1;
        }
        GetScrollIntoViewType() {
          var e;
          return (
            null === (e = this.m_Properties) || void 0 === e
              ? void 0
              : e.scrollIntoViewType
          )
            ? this.m_Properties.scrollIntoViewType
            : this.m_Parent
            ? this.m_Parent.GetScrollIntoViewType()
            : Ae.Standard;
        }
        GetRelativeDirection(e) {
          return this.ComputeRelativeDirection(e, this.GetLayout());
        }
        ComputeRelativeDirection(e, t) {
          let n = t == Ce.ROW_REVERSE || t == Ce.COLUMN_REVERSE;
          switch (t) {
            case Ce.ROW:
            case Ce.ROW_REVERSE:
              switch (e) {
                case a.eV.DIR_LEFT:
                  return n ? Se.FORWARD : Se.BACKWARD;
                case a.eV.DIR_RIGHT:
                  return n ? Se.BACKWARD : Se.FORWARD;
                default:
                  return Se.INVALID;
              }
            case Ce.COLUMN:
            case Ce.COLUMN_REVERSE:
              switch (e) {
                case a.eV.DIR_UP:
                  return n ? Se.FORWARD : Se.BACKWARD;
                case a.eV.DIR_DOWN:
                  return n ? Se.BACKWARD : Se.FORWARD;
                default:
                  return Se.INVALID;
              }
            case Ce.GRID:
              switch (e) {
                case a.eV.DIR_LEFT:
                case a.eV.DIR_UP:
                  return n ? Se.FORWARD : Se.BACKWARD;
                case a.eV.DIR_RIGHT:
                case a.eV.DIR_DOWN:
                  return n ? Se.BACKWARD : Se.FORWARD;
                default:
                  return Se.INVALID;
              }
            default:
              return Se.INVALID;
          }
        }
        AdvanceIndex(e, t) {
          return e + (t == Se.FORWARD ? 1 : -1);
        }
        FindNextFocusableChildInDirection(e, t, n) {
          let i = t == Se.FORWARD ? 1 : -1;
          for (let t = e + i; t >= 0 && t < this.m_rgChildren.length; t += i) {
            const e = this.m_rgChildren[t].FindFocusableNode(n);
            if (e) return e;
          }
          return null;
        }
        ScanChildren(e, t, n) {
          let i = t == Se.FORWARD ? 1 : -1;
          for (let t = e; t >= 0 && t < this.m_rgChildren.length; t += i)
            if (n(this.m_rgChildren[t], t)) return t;
          return -1;
        }
        FindNextFocusableChildInGrid(e, t, n) {
          const i = n == a.eV.DIR_UP || n == a.eV.DIR_DOWN,
            o = this.GetLastFocusElement();
          if (!o || o == this.m_element)
            return (
              c(
                !1,
                "No active child for grid navigation",
                this.m_iLastActiveChildIndex,
                this.m_rgChildren.length,
                o
              ),
              this.FindFocusableDescendant(n)
            );
          const s = this.GetActiveDescendant().GetBoundingRect();
          if (n == a.eV.DIR_UP || n == a.eV.DIR_DOWN) {
            const e = this.m_Tree.GetLastFocusedMovementRect("x");
            e && ((s.x = e.x), (s.width = e.width));
          }
          if (i) {
            let i = e;
            for (; -1 != i; ) {
              const e = this.ScanChildren(
                this.AdvanceIndex(i, t),
                t,
                (e) => !H("y", s, e.GetBoundingRect())
              );
              if (-1 != e) {
                const i = this.m_rgChildren[e].GetBoundingRect(),
                  o = this.FindClosestChildInNextAxiallyAlignedSet(
                    "x",
                    t,
                    n,
                    s,
                    e,
                    i
                  );
                if (o) return o;
              }
              i = e;
            }
          } else {
            let i = t == Se.FORWARD ? 1 : -1;
            for (
              let o = this.AdvanceIndex(e, t);
              o >= 0 && o < this.m_rgChildren.length;
              o += i
            ) {
              const e = this.m_rgChildren[o];
              if (!H("y", s, e.GetBoundingRect())) return null;
              let t = e.FindFocusableNode(n);
              if (t) return t;
            }
          }
          return null;
        }
        FindClosestChildInNextAxiallyAlignedSet(e, t, n, i, o, s) {
          (!o || o < 0) && (o = 0);
          let r = [];
          const a = { x: (c = i).x, y: c.y };
          var c;
          this.ScanChildren(o, t, (t) => {
            const n = t.GetBoundingRect();
            return (
              !(!s || H(l[e], s, n)) ||
              (r.push({ child: t, overlap: K(e, i, n), dist: $(e, a, n) }), !1)
            );
          }),
            t == Se.BACKWARD && r.reverse(),
            r.sort((e, t) => {
              const n = t.overlap - e.overlap;
              return 0 != n ? n : e.dist - t.dist;
            });
          for (const { child: e } of r) {
            const t = e.FindFocusableNode(n, i);
            if (t) return t;
          }
          return null;
        }
        GetChildren() {
          return (
            this.EnsureChildrenSorted(),
            [this.m_rgChildren, this.m_iLastActiveChildIndex]
          );
        }
        SetActiveChild(e) {
          e instanceof we
            ? (this.EnsureChildrenSorted(),
              (this.m_ActiveChild = e),
              (this.m_iLastActiveChildIndex = this.m_rgChildren.indexOf(e)))
            : (this.IsValidChildIndex(e) &&
                (this.m_ActiveChild = this.m_rgChildren[e]),
              (this.m_iLastActiveChildIndex = e));
        }
        GetDepth() {
          return this.m_nDepth;
        }
        SetRetainFocusParent(e) {
          (this.m_RetainFocusParent = e),
            this.m_Properties.retainFocus ||
              this.PropagateRetainFocusParentToChildren(e);
        }
        PropagateRetainFocusParentToChildren(e) {
          for (let t = 0; t < this.m_rgChildren.length; t++)
            this.m_rgChildren[t].SetRetainFocusParent(e);
        }
        OnFocusedDecendantRemoved(e) {
          this.m_Tree.DeferredFocus.RequestFocus(this, {
            bFocusDescendant: !0,
          });
        }
        SetDOMFocusAndScroll(e, t) {
          this.UpdateParentActiveChild(),
            this.m_Tree.BIsActiveFocus()
              ? (c(
                  !this.m_Tree.BUseVirtualFocus(),
                  "Virtual focus tree should not have browser focus"
                ),
                this.m_element.focus({ preventScroll: !0 }))
              : this.m_Tree.BUseVirtualFocus() ||
                fe(
                  `Didn't move focus to element as tree ${this.m_Tree.id} is not active focus tree`
                ),
            (function (e, t) {
              var n, i, o;
              const s = e.Element;
              if (!s) return;
              let r = [e];
              for (let t = e.Parent; t; t = t.Parent)
                (null === (n = t.m_Properties) || void 0 === n
                  ? void 0
                  : n.scrollIntoViewWhenChildFocused) && r.push(t);
              for (; r.length; ) {
                let n = r.pop(),
                  s = 0 == r.length,
                  a =
                    null === (i = n.m_Properties) || void 0 === i
                      ? void 0
                      : i.scrollIntoViewType;
                if (
                  (void 0 === a && (a = ie ? Ae.NoTransform : Ae.Standard),
                  (null === (o = n.m_Properties) || void 0 === o
                    ? void 0
                    : o.fnScrollIntoViewHandler) &&
                    !1 !== n.m_Properties.fnScrollIntoViewHandler(e, t, n))
                )
                  continue;
                const l = n.m_element,
                  c =
                    a == Ae.NoTransform ||
                    a == Ae.NoTransformSparseContent ||
                    !s;
                if (t) {
                  const t = c ? se(l) : l.getBoundingClientRect();
                  let n = !1;
                  const i = Math.max(1.4 * (t.bottom - t.top), 40);
                  ((oe && performance.now() - oe < 500) ||
                    t.bottom < -i ||
                    t.top > window.innerHeight + i) &&
                    (n = !0);
                  let o = n ? "auto" : "smooth";
                  n && (oe = performance.now()),
                    e.Tree.Controller.BIsRestoringHistory() && (o = "auto"),
                    c
                      ? de(0, l, o)
                      : l.scrollIntoView({ behavior: o, block: "nearest" });
                } else
                  c
                    ? de(0, l, "auto")
                    : l.scrollIntoView({
                        behavior: "auto",
                        block: "nearest",
                        inline: "nearest",
                      });
              }
            })(this, t),
            this.m_Tree.OnChildActivated(e);
        }
      }
      (0, i.gn)([u.a], we.prototype, "OnDOMFocus", null),
        (0, i.gn)([u.a], we.prototype, "OnDOMBlur", null),
        (0, i.gn)([u.a], we.prototype, "OnNavigationEvent", null);
      var Fe = n(883),
        Ne = n(386),
        Re = n(165);
      class Ie {
        constructor(e) {
          (this.m_bIsGamepadInputExternallyControlled = !1),
            (this.m_NavigationController = e),
            (0, Ne.U5)("BrowserView.RegisterForMessageFromParent") &&
            (0, Ne.U5)("BrowserView.PostMessageToParent")
              ? ((this.m_bIsGamepadInputExternallyControlled = !0),
                (this.m_postMessage = new Re.Pf()))
              : ((this.m_bIsGamepadInputExternallyControlled =
                  window.top != window.self),
                (this.m_postMessage = new Re.y5(window.top))),
            this.m_postMessage.RegisterForMessage(this.OnMessage),
            window.addEventListener("unload", this.PostPageUnloading),
            this.m_NavigationController.RegisterForUnhandledButtonDownEvents(
              (e) => this.PostButtonPressToSteam(e.detail.button)
            ),
            e
              .GetDefaultContext()
              .FocusChangedCallbacks.Register(this.OnFocusChanged),
            this.UpdateActionDescriptions({}),
            this.SendGameInputState("CGamepadWebBridgeClient constructor");
        }
        BIsGamepadInputExternallyControlled() {
          return this.m_bIsGamepadInputExternallyControlled;
        }
        BFromActiveNavTree(e, t) {
          let n = null == t ? void 0 : t.Tree;
          return (
            n || (n = null == e ? void 0 : e.Tree),
            n && n.Controller.IsActiveFocusNavTree(n)
          );
        }
        OnFocusChanged(e, t, n) {
          const i = n ? n.GetActiveActionDescriptions() : {};
          this.BFromActiveNavTree(t, n) && this.UpdateActionDescriptions(i);
        }
        UpdateActionDescriptions(e) {
          this.m_postMessage.PostMessage({
            type: "UpdateActionDescriptions",
            data: { descriptions: e },
          });
        }
        OnMessage(e) {
          switch (e.type) {
            case "TakeFocus":
              this.m_NavigationController.TakeFocusChangingIFrame();
              break;
            case "ForwardedGameEventDetail":
              this.m_NavigationController.DispatchVirtualGamepad(
                e.data.event,
                e.data.details
              );
          }
        }
        SendGameInputState(e) {
          let t = Fe.i.Basic;
          window.bSupportsGamepadUI && (t = Fe.i.Full),
            this.m_postMessage.PostMessage({
              type: "GameInputState",
              data: { source: e, support: t },
            });
        }
        PostButtonPressToSteam(e) {
          this.m_postMessage.PostMessage({
            type: "ButtonPressed",
            data: { button: e },
          });
        }
        PostPageUnloading() {
          this.m_postMessage.PostMessage({
            type: "PageUnloading",
            data: { location: window.location.href },
          });
        }
      }
      (0, i.gn)([u.a], Ie.prototype, "OnFocusChanged", null),
        (0, i.gn)([u.a], Ie.prototype, "OnMessage", null),
        (0, i.gn)([u.a], Ie.prototype, "PostPageUnloading", null);
      n(228);
      function De() {
        return !!window.document;
      }
      let Te;
      function Ee() {
        if (!De()) return Te || (Te = Oe()), Te;
        let e = (function (e) {
          if (!De() || !window.document.cookie) return null;
          let t = document.cookie.match("(^|; )" + e + "=([^;]*)");
          return t && t[2] ? decodeURIComponent(t[2]) : null;
        })("sessionid");
        return e || (e = Oe()), e;
      }
      function Oe() {
        let e = (function () {
          let e = "";
          for (let i = 0; i < 24; i++)
            e += ((t = 0),
            (n = 35),
            (t = Math.ceil(t)),
            (n = Math.floor(n)),
            Math.floor(Math.random() * (n - t + 1)) + t).toString(36);
          var t, n;
          return e;
        })();
        return (
          (function (e, t, n, i) {
            if (!De()) return;
            i || (i = "/");
            let o = "";
            if (void 0 !== n && n) {
              let e = new Date();
              e.setTime(e.getTime() + 864e5 * n),
                (o = "; expires=" + e.toUTCString());
            }
            document.cookie =
              encodeURIComponent(e) +
              "=" +
              encodeURIComponent(t) +
              o +
              ";path=" +
              i;
          })("sessionid", e, 0),
          e
        );
      }
      const Le = {
        EUNIVERSE: 0,
        WEB_UNIVERSE: "",
        LANGUAGE: "english",
        SUPPORTED_LANGUAGES: [],
        COUNTRY: "",
        AVATAR_BASE_URL: "",
        MEDIA_CDN_COMMUNITY_URL: "",
        MEDIA_CDN_URL: "",
        COMMUNITY_CDN_URL: "",
        COMMUNITY_CDN_ASSET_URL: "",
        BASE_URL_SHARED_CDN: "",
        STORE_CDN_URL: "",
        PUBLIC_SHARED_URL: "",
        COMMUNITY_BASE_URL: "",
        CHAT_BASE_URL: "",
        STORE_BASE_URL: "",
        STORE_CHECKOUT_BASE_URL: "",
        LOGIN_BASE_URL: "",
        SUPPORT_BASE_URL: "",
        STORE_ICON_BASE_URL: "",
        IMG_URL: "",
        STEAMTV_BASE_URL: "",
        HELP_BASE_URL: "",
        PARTNER_BASE_URL: "",
        STATS_BASE_URL: "",
        INTERNAL_STATS_BASE_URL: "",
        BASE_URL_STORE_CDN_ASSETS: "",
        IN_CLIENT: !1,
        USE_POPUPS: !1,
        IN_MOBILE: !1,
        IN_MOBILE_WEBVIEW: !1,
        IN_TENFOOT: !1,
        PLATFORM: "",
        SNR: "",
        LAUNCHER_TYPE: 0,
        EREALM: 0,
        IN_CHROMEOS: !1,
        TESLA: !1,
        LOCAL_HOSTNAME: "",
        WEBAPI_BASE_URL: "",
        TOKEN_URL: "",
        BUILD_TIMESTAMP: 0,
        PAGE_TIMESTAMP: 0,
        FROM_WEB: !1,
        WEBSITE_ID: "Unknown",
        get SESSIONID() {
          return Ee();
        },
        FRIENDSUI_BETA: !1,
        STEAM_TV: !1,
        DEV_MODE: !1,
        IN_STEAMUI: !1,
        IN_GAMEPADUI: !1,
        IN_STEAMUI_SHARED_CONTEXT: !1,
        DECK_DISPLAY_MODE: !1,
        ON_DECK: !1,
        ON_STEAMOS: !1,
        IN_GAMESCOPE: !1,
        IN_LOGIN: !1,
        IN_LOGIN_REFRESH: !1,
        USE_LONGEST_LOC_STRING: !1,
      };
      class ye extends a.oH {
        constructor(e) {
          super(),
            (this.m_lastButtonDown = a.eV.INVALID),
            this.SetSourceType(a.Rr.KEYBOARD),
            e.addEventListener("keydown", this.OnKeyDown),
            e.addEventListener("keyup", this.OnKeyUp),
            e.addEventListener("blur", this.Reset);
        }
        OnKeyDown(e) {
          const t = this.TranslateKey(e);
          t != a.eV.INVALID &&
            (e.preventDefault(),
            t != this.m_lastButtonDown &&
              (this.Reset(),
              this.OnButtonDown(t),
              (this.m_lastButtonDown = t)));
        }
        OnKeyUp(e) {
          const t = this.TranslateKey(e);
          t != a.eV.INVALID &&
            (this.OnButtonUp(t),
            (this.m_lastButtonDown = a.eV.INVALID),
            e.preventDefault());
        }
        Reset() {
          this.m_lastButtonDown != a.eV.INVALID &&
            (this.OnButtonUp(this.m_lastButtonDown),
            (this.m_lastButtonDown = a.eV.INVALID));
        }
        GetKeycodeFromEvent(e) {
          return "linux" === Le.PLATFORM && e.key.length > 1
            ? e.key || e.code
            : e.code || e.key;
        }
        BShouldSwallowEventForTextInputWorkaround(e) {
          if (
            !(
              I(e.target) &&
              ("INPUT" === e.target.nodeName ||
                "TEXTAREA" === e.target.nodeName)
            )
          )
            return !1;
          const t = this.GetKeycodeFromEvent(e);
          let n = e.target;
          const i = Array.from(
            n.ownerDocument.getElementsByClassName("gpfocus")
          ).some((e) =>
            Array.from(e.classList).some((e) => e.includes("virtualkeyboard"))
          );
          switch (t) {
            case "ArrowUp": {
              if (i) return !0;
              let t = null == n ? void 0 : n.value.indexOf("\n");
              return (
                "TEXTAREA" === e.target.nodeName &&
                t >= 0 &&
                t < (null == n ? void 0 : n.selectionStart)
              );
            }
            case "ArrowDown": {
              if (i) return !0;
              let t = null == n ? void 0 : n.value.lastIndexOf("\n");
              return (
                "TEXTAREA" === e.target.nodeName &&
                t >= 0 &&
                t >= (null == n ? void 0 : n.selectionStart) &&
                (null == n ? void 0 : n.selectionEnd) <
                  (null == n ? void 0 : n.value.length)
              );
            }
            case "ArrowLeft":
              return (
                !!i ||
                ((null == n ? void 0 : n.selectionStart) > 0 &&
                  (null == n ? void 0 : n.selectionEnd) > 0)
              );
            case "ArrowRight":
              return (
                !!i ||
                ((null == n ? void 0 : n.selectionStart) <
                  (null == n ? void 0 : n.value.length) &&
                  (null == n ? void 0 : n.selectionEnd) <
                    (null == n ? void 0 : n.value.length))
              );
            case "Enter":
            case "Backspace":
              return !0;
            default:
              return !1;
          }
        }
        TranslateKey(e) {
          const t = this.GetKeycodeFromEvent(e),
            n = e.ctrlKey,
            i = e.shiftKey;
          if (this.BShouldSwallowEventForTextInputWorkaround(e))
            return a.eV.INVALID;
          if (n && i)
            switch (t) {
              case "Digit4":
                return a.eV.TRIGGER_LEFT;
              case "Digit5":
                return a.eV.TRIGGER_RIGHT;
              default:
                return a.eV.INVALID;
            }
          if (n)
            switch (t) {
              case "Digit1":
                return a.eV.STEAM_GUIDE;
              case "Digit2":
                return a.eV.STEAM_QUICK_MENU;
              case "Digit3":
              case "Digit9":
                return a.eV.SELECT;
              case "Digit4":
                return a.eV.BUMPER_LEFT;
              case "Digit5":
                return a.eV.BUMPER_RIGHT;
              case "Digit6":
                return a.eV.LSTICK_CLICK;
              case "Digit7":
                return a.eV.RSTICK_CLICK;
              case "Digit8":
                return a.eV.OPTIONS;
              case "Digit0":
                return a.eV.START;
            }
          switch (t) {
            case "Escape":
              return a.eV.CANCEL;
            case "Enter":
              return a.eV.OK;
            case "Backspace":
              return a.eV.SECONDARY;
            case "ArrowUp":
              return a.eV.DIR_UP;
            case "ArrowDown":
              return a.eV.DIR_DOWN;
            case "ArrowLeft":
              return a.eV.DIR_LEFT;
            case "ArrowRight":
              return a.eV.DIR_RIGHT;
          }
          return a.eV.INVALID;
        }
      }
      (0, i.gn)([u.a], ye.prototype, "OnKeyDown", null),
        (0, i.gn)([u.a], ye.prototype, "OnKeyUp", null),
        (0, i.gn)([u.a], ye.prototype, "Reset", null);
      class Be extends we {
        constructor(e, t) {
          super(t.m_Tree, t, t.m_FocusRing),
            (this.m_rgCallbackRegistrations = []);
        }
        OnMount(e) {
          super.OnMount(e), (e.__nav_wrapper = this);
          const t = e.__nav_tree;
          t && this.BindTree(t);
        }
        OnUnmount() {
          for (const e of this.m_rgCallbackRegistrations) e.Unregister();
          this.m_rgCallbackRegistrations = [];
        }
        BindTree(e) {
          e.GetParentEmbeddedNavTree() &&
            ((this.m_wrappedTree = e),
            this.m_rgCallbackRegistrations.push(
              e.OnActivateCallbacks.Register(this.OnWrappedTreeActivated)
            ),
            this.m_rgCallbackRegistrations.push(
              e.OnDeactivateCallbacks.Register(this.OnWrappedTreeDeactivated)
            ),
            e.BIsActive() && this.OnWrappedTreeActivated(),
            e.SetOnUnhandledButtonCallback(this.OnWrappedTreeUnhandledButton));
        }
        OnWrappedTreeActivated() {
          this.BHasFocus() || this.m_Tree.TransferFocus(r.uS.APPLICATION, this);
        }
        OnWrappedTreeDeactivated() {
          this.m_wrappedTree.TransferFocus(r.uS.APPLICATION, null);
        }
        OnWrappedTreeUnhandledButton(e) {
          return (
            (0, r.Jb)(this.m_Parent.Element, "vgp_onbuttondown", e.detail), !1
          );
        }
        SetDOMFocusAndScroll(e, t) {
          this.UpdateParentActiveChild(),
            this.m_wrappedTree.BIsActive() ||
              (this.m_wrappedTree.Activate(), this.m_wrappedTree.TakeFocus(e));
        }
        SetProperties(e) {
          super.SetProperties(
            Object.assign(Object.assign({}, e), {
              noFocusRing: !0,
              focusable: !0,
            })
          );
        }
      }
      (0, i.gn)([u.a], Be.prototype, "OnWrappedTreeActivated", null),
        (0, i.gn)([u.a], Be.prototype, "OnWrappedTreeDeactivated", null),
        (0, i.gn)([u.a], Be.prototype, "OnWrappedTreeUnhandledButton", null);
      const Me = "VirtualKeyboardMessage";
      function Pe(e) {
        return e && e.type === Me;
      }
      class Ge {
        constructor() {
          window.addEventListener("message", this.OnMessage);
        }
        CreateVirtualKeyboardRef() {
          return {
            ShowVirtualKeyboard: this.ShowVirtualKeyboard,
            ShowModalKeyboard: this.ShowModalKeyboard,
            SetAsCurrentVirtualKeyboardTarget: () => {},
            HideVirtualKeyboard: this.HideVirtualKeyboard,
            DelayHideVirtualKeyboard: this.HideVirtualKeyboard,
            BIsActive: () => !0,
            BIsElementValidForInput: () => !0,
          };
        }
        ShowVirtualKeyboard() {
          this.SendMessage({ message: "ShowVirtualKeyboard" });
        }
        ShowModalKeyboard() {
          this.SendMessage({ message: "ShowModalKeyboard" });
        }
        HideVirtualKeyboard(e) {
          this.SendMessage({ message: "HideVirtualKeyboard", msDelay: e });
        }
        OnBrowserViewMessage(e, t) {
          e == Me && this.InternalDispatchMessage(JSON.parse(t));
        }
        OnMessage(e) {
          this.InternalDispatchMessage(e.data);
        }
        InternalDispatchMessage(e) {
          Pe(e) && e.message;
        }
        SendMessage(e) {
          const t = Object.assign({ type: "VirtualKeyboardMessage" }, e);
          (0, Ne.U5)("BrowserView.PostMessageToParent")
            ? SteamClient.BrowserView.PostMessageToParent(
                t.type,
                JSON.stringify(t)
              )
            : (c(
                window.parent && window.parent != window,
                "No parent window to post to"
              ),
              window.parent.postMessage(t, "*"));
        }
      }
      (0, i.gn)([u.a], Ge.prototype, "ShowVirtualKeyboard", null),
        (0, i.gn)([u.a], Ge.prototype, "ShowModalKeyboard", null),
        (0, i.gn)([u.a], Ge.prototype, "HideVirtualKeyboard", null),
        (0, i.gn)([u.a], Ge.prototype, "OnBrowserViewMessage", null),
        (0, i.gn)([u.a], Ge.prototype, "OnMessage", null);
      (0, i.gn)(
        [u.a],
        class {
          constructor(e, t) {
            (this.m_refKeyboard = t), e.on("message", this.OnMessage);
          }
          OnMessage(e, t, n) {
            if (e == Me) {
              const e = JSON.parse(t);
              if (Pe(e))
                switch (e.message) {
                  case "ShowVirtualKeyboard":
                    this.m_refKeyboard.ShowVirtualKeyboard();
                    break;
                  case "ShowModalKeyboard":
                    this.m_refKeyboard.ShowModalKeyboard();
                    break;
                  case "HideVirtualKeyboard":
                    this.m_refKeyboard.DelayHideVirtualKeyboard(e.msDelay);
                }
            }
          }
        }.prototype,
        "OnMessage",
        null
      );
      var xe = n(369),
        ke = n.n(xe);
      function Ve(e) {
        let t = 0;
        e.children().each(function () {
          const e = s()(this),
            n = e.css("zIndex");
          "auto" === n
            ? e.css("zIndex", 0)
            : isNaN(parseInt(n)) || (t = Math.max(t, parseInt(n)));
        });
        const n = s()("<div/>", {
          style: `position: absolute; pointer-events: none; top: 0; left: 0; z-index: ${
            (t || 100) + 1
          }; width: 0; height: 0; padding: 0; margin: 0; background: none; overflow: visible; display: block;`,
        });
        let i = null,
          o = null,
          r = null,
          a = 0,
          l = 0,
          c = 0,
          u = 0;
        e.prepend(n);
        const h = (e) => {
            const t = e.GetBoundingRect(),
              i = n[0].getBoundingClientRect();
            return {
              left: t.x - i.x - 0,
              top: t.y - i.y - 0,
              height: t.height,
              width: t.width,
            };
          },
          d = (e) => {
            (a = e.left),
              (l = e.top),
              (c = e.height),
              (u = e.width),
              i.css({ left: a, top: l, height: c, width: u });
          },
          m = (e) => {
            if (e && e.BWantsFocusRing() && i) {
              let t = h(e);
              (t.left == a && t.top == l && t.height == c && t.width == u) ||
                d(t);
            }
          },
          g = (e) => {
            if (
              ((o = e),
              i && (i.remove(), (i = null)),
              r && (window.clearInterval(r), (r = null)),
              e && e.BWantsFocusRing())
            ) {
              i = s()("<div/>", {
                style: "position: absolute; pointer-events: none; ",
                class: ke().FocusRing,
              });
              let t = h(e);
              d(t), n.append(i), (r = window.setInterval(() => m(e), 200));
            }
          };
        return {
          OnBlur: () => g(null),
          OnFocus: (e, t) => g(t),
          OnFocusChange: (e, t, n) => g(n),
          OnForceMeasureFocusRing: () => m(o),
        };
      }
      function Ue(e) {
        return !!e.is_repeat;
      }
      Object.seal({ onMoveUp: We, onMoveDown: We }),
        Object.seal({ onMoveRight: We, onMoveLeft: We });
      function We(e, t) {
        if (e.is_repeat) return !1;
        const n = t.GetRelativeDirection(e.button);
        return n == Se.FORWARD
          ? t.BFocusFirstChild(r.uS.GAMEPAD)
          : n == Se.BACKWARD && t.BFocusLastChild(r.uS.GAMEPAD);
      }
      function He(e) {
        return e ? Function("event", e) : null;
      }
      function Ke() {
        return !0;
      }
      function $e(e) {
        return "BlockMovement" == e
          ? Ke
          : "RepeatNavigationBoundary" == e
          ? Ue
          : e
          ? Function("detail", e)
          : null;
      }
      function je(e) {
        this.click(), e.stopPropagation();
      }
      function Ye(e) {
        s()(this).find('a, input[type="checkbox"]')[0].click();
      }
      function Xe(e) {
        const t = e.currentTarget;
        if (!I(t)) return !1;
        const n = e.detail.is_repeat ? 4.5 : 3.33,
          i = "smooth",
          o = t.ownerDocument,
          s = o.defaultView;
        switch (e.detail.button) {
          case a.eV.DIR_UP:
            if (s.scrollY > 3)
              return me(s, { top: -s.innerHeight / n, behavior: i }), !0;
            break;
          case a.eV.DIR_RIGHT:
            if (s.scrollX + s.innerWidth < o.body.clientWidth - 3)
              return me(s, { left: s.innerWidth / n, behavior: i }), !0;
            break;
          case a.eV.DIR_DOWN:
            if (s.scrollY + s.innerHeight < o.body.clientHeight - 3)
              return me(s, { top: s.innerHeight / n, behavior: i }), !0;
            break;
          case a.eV.DIR_LEFT:
            if (s.scrollX > 3)
              return me(s, { left: s.innerWidth / n, behavior: i }), !0;
        }
        return !1;
      }
      function ze(e) {
        const { name: t, root: n, navState: i } = e;
        i
          ? (S(n, i), n.Tree.DeferredFocus.Reset())
          : n.Tree.DeferredFocus.ExecuteQueuedFocus();
      }
      function Je(e, t) {
        const n = window.history.state;
        return { name: e, root: t, navState: null == n ? void 0 : n[e] };
      }
      var Qe;
      !(function (e) {
        (e[(e.Unknown = 0)] = "Unknown"),
          (e[(e.NotNeeded = 1)] = "NotNeeded"),
          (e[(e.InReactTree = 2)] = "InReactTree");
      })(Qe || (Qe = {}));
      const qe = new Ge();
      let Ze,
        et = !1,
        tt = null,
        nt = null,
        it = null;
      function ot(e) {
        et ||
          ((tt = new U()),
          (window.legacyWebFocusNavController = tt),
          (Ze = new Ie(tt)),
          Ze.BIsGamepadInputExternallyControlled() || tt.RegisterInputSource(e),
          (Ze.BIsGamepadInputExternallyControlled() ||
            navigator.userAgent.includes("Valve Steam Gamepad")) &&
            tt.RegisterInputSource(new ye(window)),
          (function (e) {
            s()("html").addClass("gpnav_active");
            const t = s()("body"),
              n = e.NewGamepadNavigationTree(e.GetDefaultContext(), "legacy"),
              i = Ve(t);
            (n.Root.m_FocusRing = i),
              n.Root.SetProperties({
                scrollIntoViewType: Ae.NoTransformSparseContent,
              }),
              (window.__nav_tree_root = n),
              (window.__virtual_keyboard_client = qe),
              rt.set(document.body, n.Root),
              ct(document.body, n.Root),
              mt(void 0, !0),
              e.RegisterGamepadNavigationTree(n, window, !1),
              s()(document.body).on("vgp_onbuttondown", function (e) {
                n.HandleButtonDownEventAsLogicalEvent(e.originalEvent);
              }),
              (0, r.$G)(document.body, Xe);
            new MutationObserver(st).observe(document.body, {
              childList: !0,
              subtree: !0,
            }),
              (o = !0),
              (ie = o),
              (function (e, t) {
                var n;
                if (
                  (t.Tree.DeferredFocus.SuppressFocus(),
                  window.addEventListener("popstate", () => ze(Je(e, t))),
                  null === (n = window.history.state) || void 0 === n
                    ? void 0
                    : n.notify_focus_restore_ready)
                ) {
                  var i = Je(e, t);
                  window.addEventListener("focus_restore_ready", function (e) {
                    window.setTimeout(function () {
                      ze(i);
                    }, 100);
                  });
                } else ze(Je(e, t));
                !(function (e, t) {
                  t.Tree.WindowContext.FocusChangedCallbacks.Register(() => {
                    window.history.replaceState(
                      Object.assign(Object.assign({}, window.history.state), {
                        [e]: A(t),
                      }),
                      null
                    );
                  });
                })(e, t);
              })("legacy_web_root", n.Root),
              Object.assign(window, Ct),
              window.dispatchEvent(new CustomEvent("vgp_gamepadnavready"));
            var o;
          })(tt)),
          (et = !0);
      }
      function st(e) {
        for (const t of e) {
          const e = [],
            n = [];
          O(
            t,
            (t) => e.push(t),
            (e) => n.push(e)
          ),
            e.length && mt(s()(e)),
            n.length && dt(s()(n));
        }
      }
      const rt = new WeakMap(),
        at = new WeakMap();
      let lt = [];
      function ct(e, t) {
        if (t instanceof we) {
          const n = t.GetDepth();
          lt[n] || (lt[n] = []), lt[n].push([e, t]);
        }
        rt.set(e, t);
      }
      function ut(e, t) {
        const n = at.has(e) ? at.get(e) : [];
        n.push(t), at.set(e, n);
      }
      function ht(e) {
        return "jquery" in e
          ? rt.get(e[0]) || Qe.Unknown
          : rt.get(e) || Qe.Unknown;
      }
      function dt(e) {
        e.find("*")
          .addBack()
          .each(function () {
            var e;
            null === (e = at.get(this)) ||
              void 0 === e ||
              e.forEach((e) => e()),
              rt.delete(this),
              at.delete(this),
              s()(this).attr("data-nav-modal") && ft();
          });
      }
      function mt(e, t = !1) {
        performance.now();
        const n =
          "a,button,textarea,input:not(input[type=hidden]),label:not([for]),[data-panel],[data-react-nav-root],[data-nav-modal]";
        s()(n, e)
          .addBack(n)
          .each(function () {
            var e;
            (function (e) {
              return "jquery" in e ? rt.has(e[0]) : rt.has(e);
            })((e = this)) || vt(e);
          }),
          (function () {
            for (let e = lt.length - 1; e >= 0; e--)
              if (lt[e])
                for (let [t, n] of lt[e])
                  ut(t, n.Tree.RegisterNavigationItem(n, t));
            lt = [];
          })();
      }
      function gt(e) {
        dt(s()(e)), mt(s()(e));
      }
      function _t(e) {
        const t = s()(e.Element);
        return (
          !t.data("gpFocusDisabled") &&
          t.is(":visible") &&
          "hidden" != t.css("visibility") &&
          ((t.outerWidth() > 0 && t.outerHeight() > 0) ||
            "hidden" !== t.css("overflow"))
        );
      }
      function vt(e) {
        var t, n, o, a, l, u, h;
        const d = s()(e),
          m = pt(e);
        if (m instanceof Be || m == Qe.InReactTree)
          return ct(e, Qe.InReactTree), Qe.InReactTree;
        const g = m.Tree;
        let _ = d.data("reactNavRoot")
            ? new Be(d.data("reactNavRoot"), m)
            : g.CreateNode(m, m.m_FocusRing),
          v = d.data("panel") || {};
        if (
          (s()(e).attr("data-nav-modal") &&
            (function (e) {
              nt &&
                (c(
                  !1,
                  "Creating a new modal nav tree while one already exists. A modal opening another modal is not currently supported."
                ),
                ft());
              nt = tt.NewGamepadNavigationTree(
                tt.GetDefaultContext(),
                "modal_dialog"
              );
              const t = Ve(s()("body"));
              (nt.Root.m_FocusRing = t),
                nt.Root.SetProperties({}),
                ct(e, nt.Root),
                mt(e),
                (0, r.$G)(nt.Root.m_element, (e) => !0),
                (it = tt.RegisterGamepadNavigationTree(nt, window, !1));
            })(e),
          "A" == e.tagName || "BUTTON" == e.tagName || "LABEL" == e.tagName)
        )
          (v.focusable = null === (t = v.focusable) || void 0 === t || t),
            (v.clickOnActivate =
              null === (n = v.clickOnActivate) || void 0 === n || n);
        else if ("INPUT" == e.tagName)
          switch (
            ((v.focusable = null === (o = v.focusable) || void 0 === o || o),
            e.getAttribute("type"))
          ) {
            case "radio":
            case "checkbox":
              v.clickOnActivate =
                null === (a = v.clickOnActivate) || void 0 === a || a;
              break;
            case "text":
            case "password":
              v.enableVirtualKeyboard =
                null === (l = v.enableVirtualKeyboard) || void 0 === l || l;
          }
        else
          "TEXTAREA" == e.tagName &&
            ((v.focusable = null === (u = v.focusable) || void 0 === u || u),
            (v.enableVirtualKeyboard =
              null === (h = v.enableVirtualKeyboard) || void 0 === h || h));
        const p = v["flow-children"];
        delete v["flow-children"];
        let {
            clickOnActivate: f,
            maintainX: C,
            maintainY: b,
            enableVirtualKeyboard: A,
            preferredChild: S,
            onOKActionDescription: w,
            onCancelActionDescription: F,
            onSecondaryActionDescription: N,
            onOptionsActionDescription: R,
            onMenuActionDescription: I,
            actionDescriptionMap: D,
            onOKButton: T,
            onCancelButton: E,
            onSecondaryButton: O,
            onOptionsButton: L,
            onMenuButton: y,
            onMoveUp: B,
            onMoveRight: M,
            onMoveDown: P,
            onMoveLeft: G,
            onGamepadDirection: x,
            bFocusRingRoot: k,
            type: V,
          } = v,
          U = (0, i._T)(v, [
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
          W = He(T),
          H = He(E),
          K = He(O),
          $ = He(L),
          j = He(y),
          Y = He(x);
        V || (V = "Panel"),
          "PanelGroup" == V &&
            ({ onOKButtonHandler: W, onCancelButtonHandler: H } = (function (
              e,
              t
            ) {
              const {
                onOKButtonHandler: n,
                onCancelButtonHandler: i,
                navNode: o,
              } = e;
              return (
                (t.focusable = !1 !== t.focusable),
                {
                  onOKButtonHandler: (e) =>
                    !(
                      !o.BHasFocus() ||
                      !o.BChildTakeFocus(r.uS.GAMEPAD, e.detail.button)
                    ) ||
                    (!!n && n(e)),
                  onCancelButtonHandler: (e) =>
                    !(
                      !o.BFocusWithin() ||
                      o.BHasFocus() ||
                      !o.BTakeFocus(r.uS.GAMEPAD, e.detail.button)
                    ) ||
                    (!!i && i(e)),
                }
              );
            })(
              { onOKButtonHandler: W, onCancelButtonHandler: H, navNode: _ },
              U
            )),
          W && ut(d[0], (0, r.x)(d[0], W)),
          H && ut(d[0], (0, r.R3)(d[0], H)),
          K && N && ut(d[0], (0, r.n2)(d[0], K)),
          $ && R && ut(d[0], (0, r.DX)(d[0], $)),
          j && I && ut(d[0], (0, r.WF)(d[0], j)),
          Y && ut(d[0], (0, r.$G)(d[0], Y));
        const X = (function (e, t, n, i) {
            const o = {};
            return (
              e && (o.onMoveUp = $e(e)),
              t && (o.onMoveRight = $e(t)),
              n && (o.onMoveDown = $e(n)),
              i && (o.onMoveLeft = $e(i)),
              o
            );
          })(B, M, P, G),
          z = p
            ? (function (e) {
                switch (e) {
                  case "column":
                    return Ce.COLUMN;
                  case "column-reverse":
                    return Ce.COLUMN_REVERSE;
                  case "row":
                    return Ce.ROW;
                  case "row-reverse":
                    return Ce.ROW_REVERSE;
                  case "grid":
                    return Ce.GRID;
                  default:
                    return Ce.NONE;
                }
              })(p)
            : Ce.NONE;
        z != Ce.NONE && (U.layout = z),
          C
            ? (U.navEntryPreferPosition = be.MAINTAIN_X)
            : b
            ? (U.navEntryPreferPosition = be.MAINTAIN_Y)
            : S && (U.navEntryPreferPosition = be.PREFERRED_CHILD),
          f &&
            (!1 !== U.focusable && (U.focusable = !0),
            d.on("vgp_onok", "firstChild" === f ? Ye : je),
            ut(e, () => {
              d.off("vgp_onok");
            })),
          A &&
            (d.on("vgp_onok.vkbindings", () => qe.ShowVirtualKeyboard()),
            d.on("click.vkbindings", () => qe.ShowVirtualKeyboard()),
            d.on("blur.vkbindings", () => {
              document.hasFocus() &&
                document.activeElement != e &&
                qe.HideVirtualKeyboard();
            }),
            ut(e, () => {
              d.off(".vkbindings");
            })),
          U.focusable && void 0 === d.attr("tabIndex") && d.attr("tabIndex", 0),
          U.focusable &&
            _.FocusCallbackList.Register((t) =>
              (function (e, t) {
                t ? s()(e).addClass("gpfocus") : s()(e).removeClass("gpfocus");
              })(e, t)
            ),
          k &&
            ((_.m_FocusRing = Ve(d)),
            "static" == d.css("position") && d.css("position", "relative"));
        const J = (0, r.Cj)({
            onOKActionDescription: w,
            onCancelActionDescription: F,
            onSecondaryActionDescription: N,
            onOptionsActionDescription: R,
            onMenuActionDescription: I,
            actionDescriptionMap: D,
          }),
          Q = Object.assign(
            Object.assign({ fnCanTakeFocus: _t, actionDescriptionMap: J }, X),
            U
          );
        return _.SetProperties(Q), ct(e, _), _;
      }
      function pt(e) {
        const t = e.parentElement;
        if (!t) return console.error("no parent"), null;
        let n = ht(t);
        if (n == Qe.Unknown)
          n = (function (e) {
            let t = !1;
            switch (e.tagName) {
              case "A":
              case "INPUT":
              case "TEXTAREA":
                t = !0;
                break;
              case "DIV":
                if (j(e) != Ce.COLUMN) t = !0;
                else {
                  const n = j(e.parentElement);
                  (n != Ce.ROW && n != Ce.ROW_REVERSE) || (t = !0);
                }
            }
            let n = Qe.NotNeeded;
            return t ? (n = vt(e)) : ct(e, n), n;
          })(t);
        else if (n == Qe.InReactTree) return n;
        return n instanceof we ? n : pt(t);
      }
      function ft(e) {
        it && (it(), (it = null), (nt = null)),
          e && s()(e).removeAttr("data-nav-modal");
      }
      const Ct = {
        InstrumentFocusElements: mt,
        ForceUpdateFocusElements: gt,
        GPNavFocusChild: function (e) {
          let t = ht(e[0]);
          return (
            t instanceof we || (t = pt(e[0])),
            t instanceof we && t.BTakeFocus(r.uS.APPLICATION),
            !1
          );
        },
        GPOnShowingModalWindow: function (e) {
          const t = e;
          return s()(t).attr("data-nav-modal", "true"), gt(t), () => ft(t);
        },
        GPShowVirtualKeyboard: function (e = !0) {
          e ? qe.ShowVirtualKeyboard() : qe.HideVirtualKeyboard();
        },
        GPNavUpdateActionDescriptions: function (e, t) {
          const n = ht(e);
          n instanceof we &&
            n.SetProperties(
              Object.assign(Object.assign({}, n.m_Properties), {
                actionDescriptionMap: (0, r.Cj)(t),
              })
            );
        },
      };
    },
  },
]);

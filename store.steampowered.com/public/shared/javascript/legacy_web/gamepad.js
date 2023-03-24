/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunklegacy_web = self.webpackChunklegacy_web || []).push([
  [511],
  {
    369: (t) => {
      t.exports = {
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
    255: (t, e, n) => {
      "use strict";
      n.d(e, { Pf: () => r, y5: () => a });
      var i = n(655),
        o = n(495),
        s = n(837);
      class r {
        constructor() {
          SteamClient.BrowserView.RegisterForMessageFromParent(this.OnMessage);
        }
        RegisterForMessage(t) {
          this.m_fnCallback = t;
        }
        PostMessage(t) {
          let e = JSON.stringify(t);
          SteamClient.BrowserView.PostMessageToParent(s.l, e);
        }
        OnMessage(t, e) {
          if (t == s.l) {
            const t = JSON.parse(e);
            this.m_fnCallback(t);
          } else if ("Checkout" == t) {
            let t = JSON.parse(e);
            if ("paypal_success" == t.action)
              try {
                window.OnPayPalSuccess(t.transid);
              } catch (t) {}
            else if ("paypal_cancel" == t.action)
              try {
                window.OnPayPalCancel(t.transid);
              } catch (t) {}
          }
        }
      }
      (0, i.gn)([o.a], r.prototype, "OnMessage", null);
      class a {
        constructor(t) {
          (this.m_postWindow = t),
            window.addEventListener("message", this.OnMessage);
        }
        RegisterForMessage(t) {
          this.m_fnCallback = t;
        }
        PostMessage(t) {
          let e = JSON.stringify(t);
          this.m_postWindow.postMessage({ gamepadMessage: s.l, args: e }, "*");
        }
        OnMessage(t) {
          let e = null == t ? void 0 : t.data;
          if (e && e.gamepadMessage == s.l && e.args) {
            const t = JSON.parse(e.args);
            this.m_fnCallback(t);
          }
        }
      }
      (0, i.gn)([o.a], a.prototype, "OnMessage", null);
    },
    425: (t, e, n) => {
      "use strict";
      n.d(e, {
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
        o = n(100);
      !(function (t) {
        (t[(t.GAMEPAD = 0)] = "GAMEPAD"),
          (t[(t.KEYBOARD = 1)] = "KEYBOARD"),
          (t[(t.APPLICATION = 2)] = "APPLICATION"),
          (t[(t.BROWSER = 3)] = "BROWSER");
      })(i || (i = {}));
      let s = {
        [o.eV.OK]: "vgp_onok",
        [o.eV.CANCEL]: "vgp_oncancel",
        [o.eV.SECONDARY]: "vgp_onsecondaryaction",
        [o.eV.OPTIONS]: "vgp_onoptions",
        [o.eV.START]: "vgp_onmenu",
      };
      function r(t, e, n) {
        return (
          t.addEventListener(e, n),
          () =>
            (function (t, e, n) {
              t.removeEventListener(e, n);
            })(t, e, n)
        );
      }
      function a(t, e) {
        return r(t, "vgp_onok", _(e));
      }
      function l(t, e) {
        return r(t, "vgp_oncancel", _(e));
      }
      function c(t, e) {
        return r(t, "vgp_onsecondaryaction", _(e));
      }
      function u(t, e) {
        return r(t, "vgp_onoptions", _(e));
      }
      function h(t, e) {
        return r(t, "vgp_onmenu", _(e));
      }
      function d(t, e) {
        return r(t, "vgp_ondirection", _(e));
      }
      function m(t, e, n) {
        let i = t;
        if (!i || !i.ownerDocument || !i.ownerDocument.defaultView) return !0;
        let o = new i.ownerDocument.defaultView.CustomEvent(e, {
          bubbles: !0,
          cancelable: !0,
          detail: n,
        });
        return t.dispatchEvent(o);
      }
      function g(t) {
        const e = [o.eV.DIR_UP, o.eV.DIR_DOWN, o.eV.DIR_LEFT, o.eV.DIR_RIGHT];
        let n = !0,
          i = !1,
          r = s[t.detail.button];
        return (
          r
            ? ((i = !0), (n = m(t.target, r, t.detail)))
            : -1 !== e.indexOf(t.detail.button) &&
              ((i = !0), (n = m(t.target, "vgp_ondirection", t.detail))),
          { bUnhandled: n, bHadLogicalEventMapping: i }
        );
      }
      function _(t) {
        return (e) => {
          !1 !== t(e) && (e.stopPropagation(), e.preventDefault());
        };
      }
      function v(t) {
        const {
            onOKActionDescription: e,
            onCancelActionDescription: n,
            onSecondaryActionDescription: i,
            onOptionsActionDescription: s,
            onMenuActionDescription: r,
            actionDescriptionMap: a,
          } = t,
          l = Object.assign({}, a);
        return (
          void 0 !== e && (l[o.eV.OK] = e),
          void 0 !== n && (l[o.eV.CANCEL] = n),
          void 0 !== i && (l[o.eV.SECONDARY] = i),
          void 0 !== s && (l[o.eV.OPTIONS] = s),
          void 0 !== r && (l[o.eV.START] = r),
          l
        );
      }
    },
    837: (t, e, n) => {
      "use strict";
      n.d(e, { i: () => o, l: () => i });
      n(425), n(100);
      const i = "GamepadInput";
      var o;
      !(function (t) {
        (t[(t.PageUnloading = 0)] = "PageUnloading"),
          (t[(t.Unknown = 1)] = "Unknown"),
          (t[(t.None = 2)] = "None"),
          (t[(t.Basic = 3)] = "Basic"),
          (t[(t.Full = 4)] = "Full");
      })(o || (o = {}));
    },
    12: (t, e, n) => {
      "use strict";
      n.r(e), n.d(e, { InitializeGamepadNavigation: () => oe });
      var i = n(655),
        o = n(311),
        s = n.n(o),
        r = n(425),
        a = n(100);
      const l = { x: "y", y: "x" };
      function c(t, e, ...n) {
        console.assert
          ? 0 == n.length
            ? console.assert(!!t, e)
            : console.assert(!!t, e, ...n)
          : t || console.warn(e, ...n);
      }
      var u = n(495),
        h = n(585);
      class d extends class {
        GetObject(t) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            try {
              const e = yield this.GetString(t);
              return e ? JSON.parse(e) : null;
            } catch (t) {
              return null;
            }
          });
        }
        StoreObject(t, e) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            return this.StoreString(t, JSON.stringify(e));
          });
        }
      } {
        GetString(t) {
          return Promise.resolve(localStorage.getItem(t));
        }
        StoreString(t, e) {
          return localStorage.setItem(t, e), Promise.resolve();
        }
        RemoveObject(t) {
          return localStorage.removeItem(t), Promise.resolve();
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
      !(function (t) {
        (t[(t.Debug = 0)] = "Debug"),
          (t[(t.Info = 1)] = "Info"),
          (t[(t.Warning = 2)] = "Warning"),
          (t[(t.Error = 3)] = "Error");
      })(g || (g = {}));
      class _ {
        constructor(t, e) {
          (this.m_fnIdGenerator = null),
            (this.m_sName = t),
            (this.m_fnIdGenerator = e),
            v.Get().RegisterLogName(t);
        }
        Debug(...t) {
          this.Log(g.Debug, ...t);
        }
        Info(...t) {
          this.Log(g.Info, ...t);
        }
        Warning(...t) {
          this.Log(g.Warning, ...t);
        }
        Error(...t) {
          this.Log(g.Error, ...t);
        }
        Assert(t, ...e) {
          t || this.Log(g.Error, "Assertion failed:", ...e);
        }
        Log(t, ...e) {
          var n, i;
          if (t == g.Debug && !v.Get().IsDebugLogEnabled(this.m_sName)) return;
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
          p(t, v.Get().IncludeBacktraceInLog, o, this.m_sName, ...e);
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
        LogAsLogManager(...t) {
          p(
            g.Info,
            this.IncludeBacktraceInLog,
            "LogManager",
            "LogManager",
            ...t
          );
        }
        LoadSettings() {
          return (0, i.mG)(this, void 0, void 0, function* () {
            (this.m_bLoading = !0),
              (this.m_bIncludeBacktraceInLog =
                !!(yield this.m_Storage.GetObject(
                  v.k_IncludeBacktraceInLog_StorageKey
                )));
            const t = yield this.m_Storage.GetObject(
              v.k_EnabledLogNames_StorageKey
            );
            Array.isArray(t) &&
              ((this.m_setEnabledDebugLogs = new Set(t)),
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
        RegisterLogName(t) {
          this.m_rgLogNames.includes(t) || this.m_rgLogNames.push(t);
        }
        IsLogName(t) {
          return this.m_rgLogNames.includes(t);
        }
        IsDebugLogEnabled(t) {
          return this.m_setEnabledDebugLogs.has(t);
        }
        ToggleDebugLogEnabled(t) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            this.SetDebugLogEnabled(t, !this.IsDebugLogEnabled(t));
          });
        }
        SetDebugLogEnabled(t, e) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            e
              ? this.m_setEnabledDebugLogs.add(t)
              : this.m_setEnabledDebugLogs.delete(t),
              this.m_SettingsChangedCallback.Dispatch(),
              yield this.SaveSettings();
          });
        }
        SetAllDebugLogsEnabled(t) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            (this.m_setEnabledDebugLogs = new Set(t ? m : [])),
              this.m_SettingsChangedCallback.Dispatch(),
              yield this.SaveSettings();
          });
        }
        RegisterForSettingsChanges(t) {
          return this.m_SettingsChangedCallback.Register(t);
        }
        get IncludeBacktraceInLog() {
          return this.m_bIncludeBacktraceInLog;
        }
        SetIncludeBacktraceInLog(t) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            (this.m_bIncludeBacktraceInLog = t),
              this.m_SettingsChangedCallback.Dispatch(),
              yield this.SaveSettings();
          });
        }
      }
      function p(t, e, n, i, ...o) {
        const s = (function (t) {
            let e = 0;
            for (let n = 0; n < t.length; n++)
              e = t.charCodeAt(n) + ((e << 5) - e);
            return [(e >> 0) & 255, (e >> 8) & 255, (e >> 16) & 255];
          })(i).map((t, e) =>
            Math.round(
              Math.max(0, Math.min(255, 255 * (0.8 * (t / 255 - 0.5) + 0.15)))
            )
          ),
          r = (299 * (a = s)[0] + 587 * a[1] + 114 * a[2]) / 1e3 >= 128;
        var a;
        let l = n;
        e &&
          (l =
            (function (t) {
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
            })(t) +
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
        if (e)
          console.groupCollapsed(...h),
            console.trace("Callstack"),
            console.groupEnd();
        else
          switch (t) {
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
        C = (t, e) => {
          v.Get().IsLogName(t)
            ? v.Get().SetDebugLogEnabled(t, e)
            : console.warn(`No log named "${t}", available logs:`, f());
        };
      (window.DebugLogEnable = (...t) => t.forEach((t) => C(t, !0))),
        (window.DebugLogDisable = (...t) => t.forEach((t) => C(t, !1))),
        (window.DebugLogEnableAll = () => v.Get().SetAllDebugLogsEnabled(!0)),
        (window.DebugLogDisableAll = () => v.Get().SetAllDebugLogsEnabled(!1)),
        (window.DebugLogEnableBacktrace = () =>
          v.Get().SetIncludeBacktraceInLog(!0)),
        (window.DebugLogDisableBacktrace = () =>
          v.Get().SetIncludeBacktraceInLog(!1)),
        (window.DebugLogNames = f),
        (window.EnableSteamConsole = (t = !0) =>
          v.Get().SetDebugLogEnabled("SteamClient", t));
      class b {
        constructor(t) {
          this.m_root = t;
        }
        static SerializeNavState(t, e = !0, n = !0) {
          return {
            root: b.SerializeNavNode(t, e, n),
            bHadFocus: t.BFocusWithin(),
          };
        }
        static SerializeNavNode(t, e = !0, n = !0) {
          let i = null;
          const [o, s] = t.GetChildren();
          return (
            o.length &&
              -1 != s &&
              e &&
              (i = o.map((t, e) => b.SerializeNavNode(t, e == s || n, n))),
            { sNavKey: t.NavKey, iActiveChild: s, rgChildren: i }
          );
        }
        static RestoreSerializedNavState(t, e, n = 0) {
          const { root: i, bHadFocus: o } = e;
          t.Tree.Controller.RestoreHistoryTransaction(() => {
            b.RestoreSerializedNavNode(t, i),
              (1 == n || (0 == n && o)) && t.BTakeFocus(r.uS.APPLICATION);
          });
        }
        static RestoreSerializedNavNode(t, e) {
          var n;
          const { sNavKey: i, iActiveChild: o, rgChildren: s } = e;
          if (
            (i && c(i == t.NavKey, "navkey mismatch"),
            t.SetActiveChild(o),
            s && s.length)
          ) {
            const [e] = t.GetChildren();
            let i = new Map();
            e.forEach((t) => {
              t.NavKey && i.set(t.NavKey, t);
            });
            for (const t of s) {
              if (!t.sNavKey) continue;
              const e = i.get(t.sNavKey);
              e && b.RestoreSerializedNavNode(e, t);
            }
            if (
              -1 != o &&
              (null === (n = s[o]) || void 0 === n ? void 0 : n.sNavKey)
            ) {
              const n = i.get(s[o].sNavKey);
              n && t.SetActiveChild(e.indexOf(n));
            }
            let r = 0,
              a = 0;
            for (; r < e.length && a < s.length; ) {
              for (; r < e.length && e[r].NavKey; ) r++;
              for (; a < s.length && s[a].sNavKey; ) a++;
              if (r >= e.length || a >= s.length) break;
              b.RestoreSerializedNavNode(e[r], s[a]), r++, a++;
            }
          }
        }
      }
      function A(t) {
        return b.SerializeNavState(t, !0, !1);
      }
      function S(t, e, n = 0) {
        return b.RestoreSerializedNavState(t, e, n);
      }
      class w extends b {
        constructor() {
          super(...arguments), (this.m_rgHistory = []);
        }
        PushState() {
          this.m_rgHistory.push(b.SerializeNavState(this.m_root));
        }
        PopState(t = 0) {
          this.m_rgHistory.length &&
            b.RestoreSerializedNavState(this.m_root, this.m_rgHistory.pop(), t);
        }
      }
      class F extends b {
        constructor() {
          super(...arguments), (this.m_mapHistory = new Map());
        }
        SaveState(t) {
          this.m_mapHistory.set(t, b.SerializeNavState(this.m_root));
        }
        RestoreState(t, e = 0) {
          const n = this.m_mapHistory.get(t);
          return (
            !!n &&
            (console.log(`Restoring history for state ${t}`),
            b.RestoreSerializedNavState(this.m_root, n, e),
            !0)
          );
        }
      }
      var N = n(959),
        R = n(669);
      function I(t) {
        return null != t && void 0 !== t.focus;
      }
      function D(t) {
        let e;
        return t && (e = t.ownerDocument.defaultView), e;
      }
      function T(t, e) {
        let n = t.parentElement;
        for (; n; ) {
          if (!e || "x" == e) {
            let t = window.getComputedStyle(n);
            if (
              "scroll" == t.overflowX ||
              "auto" == t.overflowX ||
              "fixed" == t.position
            )
              break;
          }
          if (!e || "y" == e) {
            let t = window.getComputedStyle(n);
            if (
              "scroll" == t.overflowY ||
              "auto" == t.overflowY ||
              "fixed" == t.position
            )
              break;
          }
          n = n.parentElement;
        }
        return n;
      }
      function E(t, e) {
        if (!("ownerDocument" in t)) return !0;
        const n = t.ownerDocument.defaultView.getComputedStyle(t),
          i = "x" === e ? n.overflowX : n.overflowY;
        return "auto" === i || "scroll" === i;
      }
      function O(t, e, n) {
        if ("childList" === t.type) {
          for (let n = 0; n < t.addedNodes.length; n++) {
            const i = t.addedNodes[n];
            if (i.nodeType === Node.ELEMENT_NODE) {
              const t = i;
              t.parentElement && e(t);
            }
          }
          for (let e = 0; e < t.removedNodes.length; e++) {
            const i = t.removedNodes[e];
            i.nodeType === Node.ELEMENT_NODE && n(i);
          }
        }
      }
      const L = new _("FocusNavigation").Debug;
      class y {
        constructor(t, e) {
          (this.m_bActive = !1),
            (this.m_rgGamepadNavigationTrees = []),
            (this.m_LastActiveNavTree = null),
            (this.m_LastActiveFocusNavTree = null),
            (this.m_bMounted = !0),
            (this.m_schDeferredActivate = new h.Ar()),
            (this.m_FocusChangedCallbacks = new h.pB()),
            (this.m_ActiveCallbacks = new h.pB()),
            (this.m_iFocusChangeStack = 0),
            (this.m_controller = t),
            (this.m_rootWindow = e),
            (this.m_activeWindow = e);
        }
        get RootWindow() {
          return this.m_rootWindow;
        }
        get ActiveWindow() {
          return this.m_activeWindow;
        }
        FindNavTreeInFocusedWindow() {
          for (
            let t = this.m_rgGamepadNavigationTrees.length - 1;
            t >= 0;
            t--
          ) {
            const e = this.m_rgGamepadNavigationTrees[t];
            if (e.Window.document.hasFocus()) return e;
          }
        }
        Destroy(t) {
          t == this.m_rootWindow
            ? (L(`${this.LogName(t)} Destroying context for window`),
              (this.m_bMounted = !1),
              this.m_schDeferredActivate.Cancel(),
              this.SetActive(!1, t))
            : L(`${this.LogName(t)} Child window destroyed`);
        }
        SetActive(t, e, n) {
          this.m_controller.BatchedUpdate(() => {
            var i;
            t
              ? ((this.m_activeWindow = e),
                (this.m_activeBrowserView = n),
                this.m_controller.OnContextActivated(this))
              : ((this.m_activeBrowserView = void 0),
                this.m_controller.OnContextDeactivated(this, !1)),
              this.m_bActive != t &&
                ((this.m_bActive = t),
                this.m_ActiveCallbacks.Dispatch(t),
                null === (i = this.m_LastActiveFocusNavTree) ||
                  void 0 === i ||
                  i.OnActiveStateChangedCallbacks.Dispatch(
                    t,
                    this.m_LastActiveFocusNavTree
                  ));
          });
        }
        OnActivate(t) {
          L(
            `${this.LogName(t)} Activating context, there are ${
              this.m_rgGamepadNavigationTrees.length
            } trees in this context`
          ),
            this.SetActive(!0, t);
        }
        OnActivateBrowserView(t, e) {
          L(`${this.LogName(t)} Browser View "${e}" activated in context`),
            this.SetActive(!0, t, e);
        }
        OnDeactivate(t) {
          this.m_activeWindow == t
            ? (L(`${this.LogName(t)} Deactivate context for window`),
              this.SetActive(!1, t))
            : L(
                `${this.LogName(t)} Blurred, but not deactivating because (${
                  this.m_activeWindow.name
                }) has focus.`
              );
        }
        OnDeactivateBrowserView(t, e) {
          L(`${this.LogName(t)} Browser View "${e}" deactivated in context`),
            this.m_activeBrowserView == e && this.SetActive(!1, t, e);
        }
        BIsActive() {
          return this.m_bActive;
        }
        get ActiveCallbacks() {
          return this.m_ActiveCallbacks;
        }
        AddNavTree(t, e) {
          e
            ? this.m_rgGamepadNavigationTrees.unshift(t)
            : (this.m_rgGamepadNavigationTrees.push(t),
              this.SetActiveNavTree(t, !0));
        }
        LogName(t) {
          return t && this.m_rootWindow != t
            ? `(${this.m_rootWindow.name}) > (${t.name})`
            : `(${this.m_rootWindow.name})`;
        }
        SetActiveNavTree(t, e = !1) {
          if (t && this.m_LastActiveNavTree == t) return;
          const n = this.m_LastActiveNavTree;
          n && R.Zf(this.m_rgGamepadNavigationTrees, n),
            t ||
              (this.m_rgGamepadNavigationTrees.length &&
                (t =
                  this.m_rgGamepadNavigationTrees[
                    this.m_rgGamepadNavigationTrees.length - 1
                  ]));
          const i = this.m_LastActiveFocusNavTree == t;
          t && R.Zf(this.m_rgGamepadNavigationTrees, t),
            (this.m_LastActiveNavTree = t),
            (t && t.BUseVirtualFocus()) || (this.m_LastActiveFocusNavTree = t),
            L(
              `${this.LogName(t.Window)} Move from nav tree ${
                null == n ? void 0 : n.id
              } to nav tree ${null == t ? void 0 : t.id} ${
                e ? "taking focus" : "no focus"
              }`
            ),
            n && this.m_rgGamepadNavigationTrees.push(n),
            t &&
              (this.m_rgGamepadNavigationTrees.push(t),
              i ||
                !e ||
                t.DeferredFocus.BHasQueuedFocusNode() ||
                t.DeferredFocus.RequestFocus(t.Root)),
            n && n != this.m_LastActiveFocusNavTree && n.OnDeactivate(t),
            t && !i && t.OnActivate(n);
        }
        BlurNavTree(t) {
          this.m_LastActiveNavTree == t && this.SetActiveNavTree(null, !0),
            R.Zf(this.m_rgGamepadNavigationTrees, t),
            this.m_rgGamepadNavigationTrees.unshift(t);
        }
        UnregisterGamepadNavigationTree(t) {
          R.Zf(this.m_rgGamepadNavigationTrees, t),
            L(
              `(${this.m_rootWindow.name}) Unregister tree ${
                null == t ? void 0 : t.id
              } ${
                this.m_LastActiveFocusNavTree == t
                  ? "(was active)"
                  : "(inactive)"
              }`
            ),
            this.m_LastActiveNavTree == t &&
              ((this.m_LastActiveNavTree = null),
              this.m_bMounted &&
                this.m_schDeferredActivate.Schedule(1, () => {
                  this.m_LastActiveNavTree || this.SetActiveNavTree(null, !0);
                }));
        }
        get FocusChangedCallbacks() {
          return this.m_FocusChangedCallbacks;
        }
        OnFocusChangeStart(t, e, n, i) {
          return (
            0 == this.m_iFocusChangeStack
              ? (this.m_ActiveFocusChange = { source: t, from: n, to: i })
              : !this.m_ActiveFocusChange.from &&
                n &&
                (this.m_ActiveFocusChange.from = n),
            this.m_iFocusChangeStack++
          );
        }
        OnFocusChangeComplete(t) {
          if (
            (this.m_iFocusChangeStack--,
            c(t == this.m_iFocusChangeStack, "out of order focus pop"),
            0 == this.m_iFocusChangeStack)
          ) {
            const { source: t, from: e, to: n } = this.m_ActiveFocusChange;
            this.m_FocusChangedCallbacks.Dispatch(t, e, n);
          }
        }
      }
      const B = new _("FocusNavigation").Debug,
        M = new _("GamepadEvents").Debug;
      class P {
        constructor(t, e, n) {
          (this.m_onActivateCallbacks = new h.pB()),
            (this.m_onDeactivateCallbacks = new h.pB()),
            (this.m_onActiveFocusStateChangedCallbacks = new h.pB()),
            (this.m_lastFocusNodeXMovement = new G()),
            (this.m_lastFocusNodeYMovement = new G()),
            (this.m_DeferredFocus = new x(this)),
            (this.m_Controller = t),
            (this.m_context = e),
            (this.m_ID = n),
            (this.m_Root = new wt(this, null, null)),
            this.m_Root.SetProperties({ layout: Ct.COLUMN }),
            (window.GamepadNavTree = this);
        }
        SetUseVirtualFocus(t) {
          this.m_bVirtualFocus = t;
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
        CreateNode(t, e) {
          return new wt(this, t, e);
        }
        RegisterNavigationItem(t, e) {
          return t.OnMount(e), () => t.OnUnmount();
        }
        OnChildActivated(t) {
          this.m_bIsMounted &&
            this.m_Controller.OnGamepadNavigationTreeFocused(this, t);
        }
        GetLastFocusedNode() {
          return this.m_lastFocusNode;
        }
        GetLastFocusedMovementRect(t) {
          return "x" == t
            ? this.m_lastFocusNodeXMovement.GetRect()
            : "y" == t
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
        OnActivate(t) {
          this.m_onActivateCallbacks.Dispatch(this, t),
            this.m_onActiveFocusStateChangedCallbacks.Dispatch(!0, this);
        }
        OnDeactivate(t) {
          this.m_onDeactivateCallbacks.Dispatch(this, t),
            this.m_onActiveFocusStateChangedCallbacks.Dispatch(!1, this),
            (this.m_bWasActiveForLastFocusChange = !1);
        }
        IsActiveFocusNavTree() {
          return this.m_Controller.IsActiveFocusNavTree(this);
        }
        TakeFocus(t, e = !1) {
          let n = !1;
          e
            ? (n = this.Root.BVisibleChildTakeFocus(t))
            : this.m_lastFocusNode && (n = this.m_lastFocusNode.BTakeFocus(t)),
            n || (n = this.Root.BTakeFocus(t)),
            n || this.TransferFocus(t, this.Root);
        }
        Activate(t = !1) {
          this.m_Controller.OnGamepadNavigationTreeActivated(this, t);
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
        SetIsMounted(t) {
          this.m_window = t;
          const e = this.m_Root.Element;
          (e.__nav_tree = this),
            e.__nav_wrapper && e.__nav_wrapper.BindTree(this),
            (this.m_bIsMounted = !0);
        }
        SetParentEmbeddedNavTree(t) {
          this.m_ParentEmbeddedNavTree = t;
        }
        GetParentEmbeddedNavTree() {
          return this.m_ParentEmbeddedNavTree;
        }
        SetOnUnhandledButtonCallback(t) {
          this.m_onUnhandledButton = t;
        }
        HandleButtonDownEventAsLogicalEvent(t) {
          let { bUnhandled: e, bHadLogicalEventMapping: n } = (0, r.Ut)(t);
          return (
            M(
              `Logical gamepad Event fired: ${
                a.eV[t.detail.button]
              }, had logical event: ${n}, was handled: ${!e}`
            ),
            e && this.m_onUnhandledButton && (e = this.m_onUnhandledButton(t)),
            e && (e = this.m_Controller.FireUnhandledGamepadEventCallbacks(t)),
            t.stopPropagation(),
            e
          );
        }
        get DeferredFocus() {
          return this.m_DeferredFocus;
        }
        TransferFocus(t, e, n) {
          this.m_Controller.BatchedUpdate(() =>
            this.TransferFocusInternal(t, e, n)
          );
        }
        TransferFocusInternal(t, e, n) {
          const i = this.m_lastFocusNode;
          if (
            i == e &&
            (this.m_bWasActiveForLastFocusChange || !this.BIsActive())
          )
            return;
          B(
            `Transfer focus in ${this.id}, source: ${r.uS[t]}, from/to:`,
            null == i ? void 0 : i.m_element,
            null == e ? void 0 : e.m_element
          );
          const o = { blurredNode: i, focusedNode: e, source: t },
            s = (function (t, e) {
              if (!e || !t) return null;
              let n = e,
                i = t;
              for (; n.GetDepth() > i.GetDepth() && n.Parent; ) n = n.Parent;
              for (; i.GetDepth() > n.GetDepth() && i.Parent; ) i = i.Parent;
              for (; n != i && n && i; ) (n = n.Parent), (i = i.Parent);
              return n;
            })(i, e);
          if (i) {
            i.SetHasFocus(!1);
            for (let t = i; t && t != s; t = t.Parent) t.SetFocusWithin(!1);
          }
          if (e) {
            e.SetHasFocus(!0);
            for (let t = e; t && t != s; t = t.Parent) t.SetFocusWithin(!0);
          }
          let a = this.m_context.OnFocusChangeStart(t, this, i, e);
          e && e.SetDOMFocusAndScroll(t, i),
            i &&
              ((0, r.Jb)(i.Element, "vgp_onblur", o),
              !i.m_FocusRing ||
                (e && i.m_FocusRing == e.m_FocusRing) ||
                i.m_FocusRing.OnBlur(t, i, e)),
            e &&
              ((0, r.Jb)(e.Element, "vgp_onfocus", o),
              e.m_FocusRing &&
                (i && e.m_FocusRing == i.m_FocusRing
                  ? e.m_FocusRing.OnFocusChange(t, i, e)
                  : e.m_FocusRing.OnFocus(t, e, i))),
            (this.m_lastFocusNode = e),
            (this.m_bWasActiveForLastFocusChange = this.BIsActive()),
            "x" == n
              ? this.m_lastFocusNodeXMovement.SetNode(e.Element)
              : "y" == n
              ? this.m_lastFocusNodeYMovement.SetNode(e.Element)
              : (this.m_lastFocusNodeXMovement.Reset(),
                this.m_lastFocusNodeYMovement.Reset()),
            this.m_context.OnFocusChangeComplete(a);
        }
      }
      class G {
        SetNode(t) {
          (this.m_element = t),
            (this.m_rect = t ? t.getBoundingClientRect() : void 0);
        }
        Reset() {
          this.SetNode(void 0);
        }
        GetRect() {
          var t;
          return (
            null === (t = this.m_element) || void 0 === t
              ? void 0
              : t.isConnected
          )
            ? this.m_element.getBoundingClientRect()
            : this.m_rect;
        }
      }
      class x {
        constructor(t) {
          (this.m_schExecuteQueuedFocus = new h.Ar()),
            (this.m_bSuppressed = !1),
            (this.m_tree = t);
        }
        RequestFocus(t, e) {
          t
            ? ((this.m_target = Object.assign(Object.assign({}, e), {
                node: t,
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
        BIsQueuedFocusNode(t) {
          return this.m_target && this.m_target.node == t;
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
            const { node: t, bFocusDescendant: e } = this.m_target;
            (this.m_target = void 0),
              B(
                `DeferredFocus in ${this.m_tree.id} - focusing ${
                  e ? "descendant of" : "node"
                } ${t.NavKey}`
              ),
              e
                ? t.BChildTakeFocus(r.uS.APPLICATION) ||
                  this.m_tree.TransferFocus(r.uS.APPLICATION, t)
                : t.BTakeFocus(r.uS.APPLICATION);
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
            (this.m_fnGamepadEventUpdateBatcher = (t) => t()),
            (window.FocusNavController = this),
            this.m_bShowDebugFocusRing.Set(
              "shown" == sessionStorage.getItem(V)
            );
        }
        CreateContext(t) {
          const e = new y(this, t);
          return this.m_rgAllContexts.push(e), e;
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
          var t, e;
          if (!this.m_ActiveContext && 0 != this.m_rgAllContexts.length) {
            console.warn("No active context; finding one");
            for (const t of this.m_rgAllContexts) {
              const e = t.FindNavTreeInFocusedWindow();
              if (e) {
                k(
                  `${t.LogName(
                    e.Window
                  )} Found a focused window; setting this context as active.`
                ),
                  (this.m_ActiveContext = t),
                  this.m_ActiveContext.OnActivate(e.Window);
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
                  null === (t = this.m_LastActiveContext) || void 0 === t
                    ? void 0
                    : t.LogName()
                }`
              ),
              (this.m_ActiveContext = this.m_LastActiveContext),
              this.m_ActiveContext.OnActivate(
                null ===
                  (e = this.m_LastActiveContext.m_LastActiveFocusNavTree) ||
                  void 0 === e
                  ? void 0
                  : e.Window
              )),
            this.m_ActiveContext
          );
        }
        SetShowDebugFocusRing(t) {
          this.m_bShowDebugFocusRing.Set(t),
            (function (t) {
              sessionStorage.setItem(V, t ? "shown" : void 0);
            })(t);
        }
        GetShowDebugFocusRing() {
          return this.m_bShowDebugFocusRing;
        }
        RegisterInputSource(t) {
          let e = new h.Hf();
          return (
            this.m_rgGamepadInputSources.push(t),
            e.PushArrayRemove(this.m_rgGamepadInputSources, t),
            e.Push(
              t.RegisterForGamepadButtonDown(this.OnButtonDown).Unregister
            ),
            e.Push(t.RegisterForGamepadButtonUp(this.OnButtonUp).Unregister),
            e.Push(
              t.RegisterForNavigationTypeChange(this.OnNavigationTypeChange)
                .Unregister
            ),
            e.GetUnregisterFunc()
          );
        }
        SetGamepadEventUpdateBatcher(t) {
          this.m_fnGamepadEventUpdateBatcher = t;
        }
        get NavigationSource() {
          return this.m_navigationSource;
        }
        DispatchVirtualButtonPress(t) {
          this.OnButtonDown(t, a.Rr.UNKNOWN, -1);
        }
        DispatchVirtualButtonClick(t) {
          this.OnButtonDown(t, a.Rr.GAMEPAD, -1),
            this.OnButtonUp(t, a.Rr.GAMEPAD, -1);
        }
        DispatchVirtualGamepad(t, e) {
          switch (t) {
            case "vgp_onbuttondown":
              this.OnButtonDown(e.button, e.source, -1, e.is_repeat);
              break;
            case "vgp_onbuttonup":
              this.OnButtonUp(e.button, e.source, -1);
          }
        }
        BGlobalGamepadButton(t) {
          return (
            t === a.eV.STEAM_GUIDE ||
            t === a.eV.STEAM_QUICK_MENU ||
            t === a.eV.CANCEL
          );
        }
        GetEventTarget(t, e = !1) {
          let n = this.GetActiveContext();
          !n && e && (n = this.FindAnActiveContext());
          let i = null == n ? void 0 : n.ActiveWindow.document.activeElement;
          if (null == n ? void 0 : n.m_LastActiveNavTree) {
            let o = this.m_navigationSource.Value.eActivationSourceType;
            if (
              !(
                n.m_LastActiveNavTree.GetLastFocusedNode() ||
                (o != a.Rr.GAMEPAD && o != a.Rr.KEYBOARD) ||
                (e && n.m_LastActiveNavTree.TakeFocus(r.uS.GAMEPAD, !0),
                this.BGlobalGamepadButton(t))
              )
            )
              return [null, n];
            n.m_LastActiveNavTree.GetLastFocusedNode() &&
              (i = n.m_LastActiveNavTree.GetLastFocusedNode().Element);
          }
          return [i, n];
        }
        ChangeNavigationSource(t, e) {
          let n = this.m_navigationSource.Value,
            i = n.nLastActiveGamepadIndex;
          n.nActiveGamepadIndex >= 0 && (i = n.nActiveGamepadIndex),
            this.m_navigationSource.Set({
              eActivationSourceType: t,
              nActiveGamepadIndex: e,
              nLastActiveGamepadIndex: i,
            }),
            t != a.Rr.MOUSE &&
              (0, N.U5)("Browser.HideCursorUntilMouseEvent") &&
              SteamClient.Browser.HideCursorUntilMouseEvent();
        }
        OnButtonDown(t, e, n, i) {
          var o;
          if (this.m_fnCatchAllGamepadInput && this.m_fnCatchAllGamepadInput(t))
            return void k(
              "Ignoring button press - gamepad input is suppressed by parent window"
            );
          this.ChangeNavigationSource(e, n);
          const [s, l] = this.GetEventTarget(t, !0);
          k(
            `Firing ${a.eV[t]} in tree ${
              null === (o = null == l ? void 0 : l.m_LastActiveNavTree) ||
              void 0 === o
                ? void 0
                : o.id
            } at `,
            s
          ),
            this.BatchedUpdate(() =>
              (0, r.Jb)(s, "vgp_onbuttondown", {
                button: t,
                source: e,
                is_repeat: i,
              })
            );
        }
        OnButtonUp(t, e, n) {
          if (this.m_fnCatchAllGamepadInput) return;
          this.ChangeNavigationSource(e, n);
          const [i, o] = this.GetEventTarget();
          this.BatchedUpdate(() =>
            (0, r.Jb)(i, "vgp_onbuttonup", {
              button: t,
              source: e,
              is_repeat: !1,
            })
          );
        }
        BatchedUpdate(t) {
          this.m_fnGamepadEventUpdateBatcher(t);
        }
        OnNavigationTypeChange(t) {
          var e, n;
          if (
            (this.ChangeNavigationSource(t, -1),
            document.hasFocus() &&
              (t == a.Rr.MOUSE || t == a.Rr.TOUCH) &&
              (null === (e = this.m_ActiveContext) || void 0 === e
                ? void 0
                : e.m_LastActiveNavTree))
          ) {
            const t =
                this.m_ActiveContext.m_LastActiveNavTree.GetLastFocusedNode(),
              e = (function (t) {
                if (!I(t)) return !1;
                const e = t.tagName,
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
              })(null == t ? void 0 : t.Element)
                ? t
                : null;
            null === (n = this.m_ActiveContext.m_LastActiveNavTree) ||
              void 0 === n ||
              n.TransferFocus(r.uS.BROWSER, e);
          }
        }
        NewGamepadNavigationTree(t, e) {
          return new P(this, t, e);
        }
        RegisterGamepadNavigationTree(t, e, n) {
          const i = t.WindowContext;
          return (
            t.SetIsMounted(e),
            n || ((this.m_ActiveContext = i), (this.m_LastActiveContext = i)),
            i.AddNavTree(t, n),
            this.m_bGlobalEventsInitialized || this.BindGlobalEventHandlers(),
            () => i.UnregisterGamepadNavigationTree(t)
          );
        }
        OnGamepadNavigationTreeActivated(t, e = !1) {
          t.WindowContext.SetActiveNavTree(t, e);
        }
        OnGamepadNavigationTreeFocused(t, e, n = !1) {
          const i = t.WindowContext;
          i != this.m_ActiveContext &&
            k(`(${i.LogName(t.Window)}) Focus event in inactive window`),
            t != i.m_LastActiveFocusNavTree &&
              t != i.m_LastActiveNavTree &&
              (i.m_LastActiveFocusNavTree.GetParentEmbeddedNavTree() == t ||
              t.GetParentEmbeddedNavTree() == i.m_LastActiveFocusNavTree
                ? (k(
                    `There was a focus event in ${t.id}, allowing focus transfer to activate nav tree due to parent embedded relationship`
                  ),
                  t.Activate())
                : k(
                    `There was a focus event in ${t.id}, but the active nav tree is ${i.m_LastActiveFocusNavTree.id} so it is being ignored.  Source: ${r.uS[e]}.`
                  ));
        }
        BlurNavTree(t) {
          t.WindowContext.BlurNavTree(t);
        }
        IsActiveFocusNavTree(t) {
          var e;
          return Boolean(
            t &&
              t ==
                (null === (e = this.m_ActiveContext) || void 0 === e
                  ? void 0
                  : e.m_LastActiveFocusNavTree)
          );
        }
        IsActiveNavTree(t) {
          var e;
          return Boolean(
            t &&
              t ==
                (null === (e = this.m_ActiveContext) || void 0 === e
                  ? void 0
                  : e.m_LastActiveNavTree)
          );
        }
        BIsInActiveContext(t) {
          return Boolean(t && t.WindowContext == this.m_ActiveContext);
        }
        BindGlobalEventHandlers() {
          this.m_bGlobalEventsInitialized ||
            (this.m_bGlobalEventsInitialized = !0);
        }
        RegisterForUnhandledButtonDownEvents(t) {
          return this.m_UnhandledButtonEventsCallbacks.Register(t);
        }
        FireUnhandledGamepadEventCallbacks(t) {
          return (
            !this.m_UnhandledButtonEventsCallbacks.CountRegistered() ||
            (this.m_UnhandledButtonEventsCallbacks.Dispatch(t), !1)
          );
        }
        SetSuppressGamepadInput(t) {
          this.m_fnCatchAllGamepadInput = t ? () => !0 : null;
        }
        SetCatchAllGamepadInput(t) {
          this.m_fnCatchAllGamepadInput = t;
        }
        TakeFocusChangingIFrame() {
          window.focus();
          let t =
            this.m_ActiveContext.m_LastActiveFocusNavTree ||
            this.m_ActiveContext.m_LastActiveNavTree;
          t && t.TakeFocus(r.uS.APPLICATION);
        }
        OnContextActivated(t) {
          (this.m_ActiveContext = t), (this.m_LastActiveContext = t);
        }
        OnContextDeactivated(t, e) {
          e &&
            (this.m_LastActiveContext == t &&
              (this.m_LastActiveContext = void 0),
            R.Zf(this.m_rgAllContexts, t)),
            this.m_ActiveContext == t && (this.m_ActiveContext = void 0);
        }
        BIsRestoringHistory() {
          return this.m_bRestoringHistory;
        }
        RestoreHistoryTransaction(t) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            this.m_bRestoringHistory = !0;
            try {
              yield t();
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
        constructor(t) {
          this.m_node = t;
        }
        TakeFocus(t) {
          return this.m_node.BTakeFocus(t ? r.uS.GAMEPAD : r.uS.APPLICATION, t);
        }
        ParentTakeFocus(t) {
          this.m_node.Parent.BTakeFocus(t ? r.uS.GAMEPAD : r.uS.APPLICATION, t);
        }
        ChildTakeFocus(t) {
          return this.m_node.BChildTakeFocus(
            t ? r.uS.GAMEPAD : r.uS.APPLICATION,
            t
          );
        }
        FocusVisibleChild(t) {
          return this.m_node.BVisibleChildTakeFocus(t);
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
        PopState(t = 0) {
          this.m_History && this.m_History.PopState(t);
        }
        SaveState(t) {
          this.m_StateHistory || (this.m_StateHistory = new F(this.m_node)),
            this.m_StateHistory.SaveState(t);
        }
        RestoreState(t, e = 0) {
          return (
            !!this.m_StateHistory && this.m_StateHistory.RestoreState(t, e)
          );
        }
        GetFocusSnapshot() {
          return A(this.m_node);
        }
        RestoreFocusSnapshot(t, e = 0) {
          return S(this.m_node, t, e);
        }
        NavTree() {
          return this.m_node.Tree;
        }
        Node() {
          return this.m_node;
        }
      }
      function H(t, e, n, i = 0.001) {
        return "x" == t
          ? e.x + e.width > n.x + i && e.x + i < n.x + n.width
          : "y" == t
          ? e.y + e.height > n.y + i && e.y + i < n.y + n.height
          : (c(!1, `Invalid axis ${t}`), !1);
      }
      function K(t, e, n) {
        let i;
        return (
          "x" == t
            ? (i = Math.min(e.x + e.width, n.x + n.width) - Math.max(e.x, n.x))
            : "y" == t
            ? (i =
                Math.min(e.y + e.height, n.y + n.height) - Math.max(e.y, n.y))
            : (c(!1, `Invalid axis ${t}`), (i = 0)),
          i < 0 ? 0 : i
        );
      }
      function $(t, e, n) {
        const i = e[t],
          o = (function (t, e) {
            return "x" == t
              ? { min: e.x, max: e.x + e.width }
              : "y" == t
              ? { min: e.y, max: e.y + e.height }
              : void c(!1, `Invalid axis ${t}`);
          })(t, n);
        return i < o.min ? o.min - i : i > o.max ? i - o.max : 0;
      }
      function j(t) {
        if (!t) return Ct.NONE;
        const e = t.ownerDocument.defaultView,
          n = e.getComputedStyle(t);
        if ("flex" == n.display)
          switch (n.flexDirection) {
            case "row":
              return "wrap" == n.flexWrap ? Ct.GRID : Ct.ROW;
            case "row-reverse":
              return Ct.ROW_REVERSE;
            case "column":
              return Ct.COLUMN;
            case "column-reverse":
              return Ct.COLUMN_REVERSE;
          }
        else {
          if ("grid" == n.display) return Ct.GRID;
          if (t.childElementCount > 0) {
            const n = e.getComputedStyle(t.firstElementChild);
            if ("left" === n.float) return Ct.ROW;
            if ("right" === n.float) return Ct.ROW_REVERSE;
            if ("inline" === n.display || "inline-block" === n.display)
              return Ct.GRID;
          }
        }
        return Ct.COLUMN;
      }
      function Y(t) {
        switch (t) {
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
      function X(t, e, n) {
        const i = [],
          [o, s] = t.GetChildren(),
          r = t.GetActiveChild();
        let a;
        const l = r ? r.Element.getBoundingClientRect() : null;
        if (r) {
          const t = Q(r, e, n);
          if (
            t &&
            !t.offScreen &&
            ((a = z(r, t, t.overlap, n)), a && !a.visibility.offScreen)
          )
            return a;
          t && i.push({ child: r, visibility: t });
        }
        const c = n || l;
        for (let t = 0; t < o.length; t++) {
          const n = o[t];
          if (n == r) continue;
          const s = Q(n, e, c);
          s && i.push({ child: n, visibility: s });
        }
        let u;
        i.sort(J);
        for (const t of i) {
          const { child: n, visibility: i } = t;
          if (i.offScreen && u) {
            if (!u.visibility.offScreen) break;
            if (i.distance > u.visibility.distance) break;
          }
          const o = n == r ? a : z(n, i, i.overlap || e, c);
          o && (!u || J(o, u) < 0) && (u = o);
        }
        return u;
      }
      function z(t, e, n, i) {
        switch (t.GetFocusable()) {
          case "none":
            return null;
          case "children":
            return X(t, e.overlap || n, i);
          case "self":
            return { child: t, visibility: e };
        }
      }
      function J(t, e) {
        const n = t.visibility,
          i = e.visibility;
        return n.offScreen
          ? i.offScreen
            ? n.distance - i.distance
            : 1
          : i.offScreen
          ? -1
          : n.distance - i.distance;
      }
      function Q(t, e, n) {
        const i = t.Element.getBoundingClientRect(),
          o = t.GetFocusable();
        let s;
        if ("none" == o) return null;
        if ("self" == o) {
          if (
            i.top < e.top ||
            i.right > e.right ||
            i.bottom > e.bottom ||
            i.left < e.left
          ) {
            const t = i.top + i.height / 2,
              n = i.left + i.width / 2;
            if (t < e.top) return { offScreen: "top", distance: e.top - t };
            if (n > e.right)
              return { offScreen: "right", distance: n - e.right };
            if (t > e.bottom)
              return { offScreen: "bottom", distance: t - e.bottom };
            if (n < e.left) return { offScreen: "left", distance: e.left - n };
          }
          n &&
            (s = (function (t, e) {
              let n = 0,
                i = 0;
              return (
                e.right < t.left
                  ? (n = t.left - e.right)
                  : e.left > t.right && (n = e.left - t.right),
                e.bottom < t.top
                  ? (i = t.top - e.bottom)
                  : e.top > t.bottom && (i = e.top - t.bottom),
                Math.sqrt(n * n + i * i)
              );
            })(i, n));
        } else if ("children" == o) {
          const n = t.Element;
          if (n.scrollHeight > i.height || n.scrollWidth > i.width) {
            const t = n.ownerDocument.defaultView.getComputedStyle(n);
            if ("visible" == t.overflowX || "visible" == t.overflowY)
              return { overlap: e };
          }
          if (i.bottom < e.top)
            return { offScreen: "top", distance: e.top - i.bottom };
          if (i.left > e.right)
            return { offScreen: "right", distance: i.left - e.right };
          if (i.top > e.bottom)
            return { offScreen: "bottom", distance: i.top - e.bottom };
          if (i.right < e.left)
            return { offScreen: "left", distance: e.left - i.right };
        }
        return {
          overlap: {
            top: Math.max(i.top, e.top),
            right: Math.min(i.right, e.right),
            bottom: Math.min(i.bottom, e.bottom),
            left: Math.max(i.left, e.left),
          },
          distance: s,
        };
      }
      function q(t, e, n) {
        return null == t || isNaN(t) ? t : Math.max(e, Math.min(n, t));
      }
      class Z {
        constructor(t, e) {
          (this.m_bActive = !1),
            (this.m_fnBoundAnimationFunc = void 0),
            (this.m_window = t),
            (this.m_options = Object.assign({ timing: "sine" }, e));
        }
        Start() {
          let t;
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
            default:
              t = function (t) {
                return 0.5 - Math.cos(t * Math.PI) / 2;
              };
          }
          (this.m_bActive = !0),
            (this.m_fnBoundAnimationFunc = this.OnInterval.bind(this, t)),
            this.m_window.requestAnimationFrame(this.m_fnBoundAnimationFunc);
        }
        BIsActive() {
          return this.m_bActive;
        }
        End() {
          if (this.m_bActive) {
            try {
              this.Update(1);
            } catch (t) {}
            this.ClearInterval(), this.FireOnComplete();
          }
        }
        FireOnComplete() {
          this.m_options.onComplete && this.m_options.onComplete();
        }
        Cancel() {
          this.m_bActive = !1;
        }
        OnInterval(t) {
          if (!this.m_bActive) return;
          let e = performance.now() - this.m_msStart;
          if (e >= this.m_options.msDuration) return void this.End();
          let n = e / this.m_options.msDuration;
          try {
            this.Update(t(n));
          } catch (t) {}
          this.m_window.requestAnimationFrame(this.m_fnBoundAnimationFunc);
        }
        ClearInterval() {
          this.m_bActive = !1;
        }
      }
      class tt extends Z {
        constructor(t, e, n) {
          super(t, e), (this.m_fnCallback = n);
        }
        Update(t) {
          this.m_fnCallback(t);
        }
      }
      class et extends Z {
        constructor(t, e, n) {
          super("ownerDocument" in t ? D(t) : t, n),
            (this.m_props = {}),
            (this.m_object = t),
            (this.m_propTargets = e);
        }
        Start() {
          this.m_props = {};
          for (let t in this.m_propTargets) {
            let e = parseFloat(this.m_object[t]) || 0,
              n = this.m_propTargets[t];
            e != n && (this.m_props[t] = { start: e, end: n });
          }
          super.Start();
        }
        Update(t) {
          for (let e in this.m_props) {
            let n = this.m_props[e],
              i = n.start + (n.end - n.start) * t;
            this.m_object[e] = i;
          }
        }
      }
      const nt = new _("ScrollSnap").Debug;
      let it = !1;
      let ot;
      function st(t) {
        if (!t) return { left: 0, top: 0, right: 0, bottom: 0 };
        if (!("ownerDocument" in t))
          return {
            left: 0,
            right: t.innerWidth,
            top: 0,
            bottom: t.innerHeight,
          };
        let e = 0,
          n = 0,
          i = t;
        for (; i; ) {
          if (((e += i.offsetTop), (n += i.offsetLeft), "ownerDocument" in i)) {
            if ("fixed" === window.getComputedStyle(i).position) break;
          }
          i = i.offsetParent;
        }
        for (i = null == t ? void 0 : t.parentElement; i; ) {
          const { scrollTop: t, scrollLeft: o } = pt(i);
          if (((e -= t), (n -= o), "ownerDocument" in i)) {
            if ("fixed" === window.getComputedStyle(i).position) break;
          }
          i = i.parentElement;
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
      function at(t, e, n, i) {
        let [o, s, r] = rt(t, i),
          [a, l, c] = rt(e, i),
          [u, h] = rt(n, i);
        return o < a && s > l
          ? 0
          : (o < a && r <= c) || (s > l && r > c)
          ? o - a - u
          : (o < a && r > c) || (s > l && r <= c)
          ? s - l + h
          : 0;
      }
      function lt(t) {
        return "auto" == t
          ? 0
          : t.endsWith("px")
          ? parseInt(t)
          : (console.log("Unsupported length", t), 0);
      }
      function ct(t) {
        if (!("ownerDocument" in t))
          return { left: 0, right: 0, top: 0, bottom: 0 };
        const e = t.ownerDocument.defaultView.getComputedStyle(t);
        return {
          left: lt(e.scrollMarginLeft),
          right: lt(e.scrollMarginRight),
          top: lt(e.scrollMarginTop),
          bottom: lt(e.scrollMarginBottom),
        };
      }
      function ut(t, e) {
        let n = (function (t) {
          let e;
          return (
            (e =
              "ownerDocument" in t
                ? t.ownerDocument.defaultView.getComputedStyle(t)
                : t.document.defaultView.getComputedStyle(
                    window.document.documentElement
                  )),
            {
              left: lt(e.scrollPaddingLeft),
              right: lt(e.scrollPaddingRight),
              top: lt(e.scrollPaddingTop),
              bottom: lt(e.scrollPaddingBottom),
            }
          );
        })(t);
        return {
          left: Math.max(0, e.left + n.left),
          right: Math.max(0, e.right - n.right),
          top: Math.max(0, e.top + n.top),
          bottom: Math.max(0, e.bottom - n.bottom),
        };
      }
      function ht(t) {
        return t > -1 && t < 1;
      }
      function dt(t, e, n, i, o) {
        nt(
          "----------------------------------------------------------------------------------"
        ),
          nt("Scrolling Into View:", e);
        let s = [],
          r = e,
          a = st(e),
          l = null != o ? o : Number.MAX_VALUE;
        for (; r; ) {
          let t = T(r);
          t || (t = D(r));
          let e = ct(r),
            n = ut(t, st(t)),
            c = vt(t),
            u = { element: t, left: 0, top: 0 };
          if (
            (nt(
              "Checking scroll div",
              t,
              `scroll y:${c.scrollTop} of ${c.MaxScrollTop()}, x:${
                c.scrollLeft
              } of ${c.MaxScrollLeft()}, adjusted =>`,
              n,
              "target => ",
              a
            ),
            (i && "y" != i) ||
              !E(t, "y") ||
              ((u.top = at(a, n, e, "y")),
              (u.top = q(u.top, -c.scrollTop, c.MaxScrollTop() - c.scrollTop)),
              o &&
                ((u.top = Math.min(l, Math.abs(u.top)) * (u.top < 0 ? -1 : 1)),
                (l -= Math.abs(u.top))),
              nt(`- checked y: ${u.top}`)),
            (i && "x" != i) ||
              !E(t, "x") ||
              ((u.left = at(a, n, e, "x")),
              (u.left = q(
                u.left,
                -c.scrollLeft,
                c.MaxScrollLeft() - c.scrollLeft
              )),
              o &&
                ((u.left =
                  Math.min(l, Math.abs(u.left)) * (u.left < 0 ? -1 : 1)),
                (l -= Math.abs(u.left))),
              nt(`- checked x: ${u.left}`)),
            s.push(u),
            o && !l)
          )
            break;
          if (!("ownerDocument" in t)) break;
          const h = window.getComputedStyle(t);
          if ("fixed" === h.position || "sticky" === h.position) break;
          (r = t),
            (a = {
              top: a.top - u.top,
              right: a.right - u.left,
              bottom: a.bottom - u.top,
              left: a.left - u.left,
            });
        }
        let c = !1;
        for (let t of s) {
          if (ht(t.left) && ht(t.top)) continue;
          let e = vt(t.element),
            i = e.scrollTop + t.top,
            o = e.scrollLeft + t.left;
          (o = q(o, 0, e.MaxScrollLeft())),
            (i = q(i, 0, e.MaxScrollTop())),
            (ht(e.scrollLeft - o) && ht(e.scrollTop - i)) ||
              (e.scrollTo({ left: o, top: i, behavior: n }),
              c || (nt("Scrolling:"), (c = !0)),
              nt(
                `- ${t.top},${t.left} => ${i}, ${o}, behavior: ${n}`,
                t.element
              ));
        }
      }
      function mt(t, e) {
        const { top: n, left: i, behavior: o } = e,
          s = vt(t);
        s.scrollTo({
          top: s.scrollTop + (null != n ? n : 0),
          left: s.scrollLeft + (null != i ? i : 0),
          behavior: o,
        });
      }
      class gt {
        constructor(t) {
          (this.m_scrollTopTarget = void 0),
            (this.m_scrollLeftTarget = void 0),
            (this.m_animation = void 0),
            "ownerDocument" in t
              ? ((this.m_element = t),
                (this.m_fnOriginalScrollTo = t.scrollTo),
                (this.m_element.scrollTo = (t, e) => {
                  "number" == typeof t
                    ? this.scrollTo({ left: t, top: e })
                    : this.scrollTo(t);
                }))
              : ((this.m_window = t),
                (this.m_element = t.document.documentElement));
        }
        ResetScrollState() {
          (this.m_scrollTopTarget = void 0),
            (this.m_scrollLeftTarget = void 0),
            this.m_window || (this.m_element.style.scrollSnapType = "");
        }
        scrollTo(t) {
          var e, n;
          if ("auto" == t.behavior)
            this.m_animation &&
              (this.m_animation.Cancel(), (this.m_animation = void 0)),
              this.m_window
                ? this.m_window.scrollTo(t)
                : this.m_fnOriginalScrollTo.apply(this.m_element, [t]),
              this.ResetScrollState();
          else {
            const i =
                null !== (e = t.left) && void 0 !== e ? e : this.scrollLeft,
              o = null !== (n = t.top) && void 0 !== n ? n : this.scrollTop;
            let s = "sine";
            this.m_animation && (this.m_animation.Cancel(), (s = "linear"));
            if (
              Math.max(
                Math.abs(this.currentScrollTop - o),
                Math.abs(this.currentScrollLeft - i)
              ) > 0
            ) {
              const t = {
                msDuration: 200,
                timing: s,
                onComplete: this.ResetScrollState,
              };
              if (this.m_window) {
                const e = this.currentScrollLeft,
                  n = this.currentScrollTop;
                this.m_animation = new tt(this.m_window, t, (t) => {
                  this.m_window.scrollTo({
                    left: e + (i - e) * t,
                    top: n + (o - n) * t,
                    behavior: "auto",
                  });
                });
              } else
                (this.m_element.style.scrollSnapType = "initial"),
                  (this.m_animation = new et(
                    this.m_element,
                    { scrollTop: o, scrollLeft: i },
                    t
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
          var t;
          return null !== (t = this.m_scrollLeftTarget) && void 0 !== t
            ? t
            : this.currentScrollLeft;
        }
        get scrollTop() {
          var t;
          return null !== (t = this.m_scrollTopTarget) && void 0 !== t
            ? t
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
      (0, i.gn)([u.a], gt.prototype, "ResetScrollState", null);
      const _t = new WeakMap();
      function vt(t) {
        let e = _t.get(t);
        return e || ((e = new gt(t)), _t.set(t, e)), e;
      }
      function pt(t) {
        const e = _t.get(t);
        return e
          ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
          : { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop };
      }
      const ft = new _("FocusNavigationMovement").Debug;
      var Ct, bt, At, St;
      !(function (t) {
        (t[(t.NONE = 0)] = "NONE"),
          (t[(t.COLUMN = 1)] = "COLUMN"),
          (t[(t.ROW = 2)] = "ROW"),
          (t[(t.COLUMN_REVERSE = 3)] = "COLUMN_REVERSE"),
          (t[(t.ROW_REVERSE = 4)] = "ROW_REVERSE"),
          (t[(t.GRID = 5)] = "GRID"),
          (t[(t.GEOMETRIC = 6)] = "GEOMETRIC");
      })(Ct || (Ct = {})),
        (function (t) {
          (t[(t.FIRST = 0)] = "FIRST"),
            (t[(t.LAST = 1)] = "LAST"),
            (t[(t.MAINTAIN_X = 2)] = "MAINTAIN_X"),
            (t[(t.MAINTAIN_Y = 3)] = "MAINTAIN_Y"),
            (t[(t.PREFERRED_CHILD = 4)] = "PREFERRED_CHILD");
        })(bt || (bt = {})),
        (function (t) {
          (t[(t.Standard = 0)] = "Standard"),
            (t[(t.NoTransform = 1)] = "NoTransform"),
            (t[(t.NoTransformSparseContent = 2)] = "NoTransformSparseContent");
        })(At || (At = {})),
        (function (t) {
          (t[(t.INVALID = 0)] = "INVALID"),
            (t[(t.FORWARD = 1)] = "FORWARD"),
            (t[(t.BACKWARD = 2)] = "BACKWARD");
        })(St || (St = {}));
      class wt {
        constructor(t, e, n) {
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
            (this.m_Tree = t),
            (this.m_Parent = e),
            (this.m_FocusRing = n),
            (this.m_nDepth = e ? e.m_nDepth + 1 : 0);
        }
        CreateHandle() {
          return new W(this);
        }
        get Tree() {
          return this.m_Tree;
        }
        get NavKey() {
          var t, e;
          return (
            null === (t = this.m_Properties) || void 0 === t ? void 0 : t.navKey
          )
            ? this.m_Properties.navKey
            : (null === (e = this.m_element) || void 0 === e ? void 0 : e.id)
            ? this.m_element.id
            : void 0;
        }
        get Element() {
          return this.m_element;
        }
        get Parent() {
          return this.m_Parent;
        }
        SetProperties(t) {
          var e, n, i, o, s;
          const a =
            ((l =
              null === (e = this.m_Properties) || void 0 === e
                ? void 0
                : e.actionDescriptionMap),
            (c = null == t ? void 0 : t.actionDescriptionMap),
            !(null == l || null == c
              ? l === c
              : "object" == typeof l &&
                "object" == typeof c &&
                Object.keys(l).length === Object.keys(c).length &&
                Object.keys(l).every(
                  (t) => c.hasOwnProperty(t) && l[t] === c[t]
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
          (this.m_Properties = t || {}),
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
        SetHasFocus(t) {
          t != this.m_bFocused &&
            ((this.m_bFocused = t),
            this.m_FocusCallbackList.Dispatch(this.m_bFocused));
        }
        SetFocusWithin(t) {
          var e;
          t != this.m_bFocusWithin &&
            ((this.m_bFocusWithin = t),
            this.m_FocusWithinCallbackList.Dispatch(this.m_bFocusWithin),
            (null === (e = this.m_Properties) || void 0 === e
              ? void 0
              : e.onFocusWithin) &&
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
          var t;
          null === (t = this.m_FocusRing) ||
            void 0 === t ||
            t.OnForceMeasureFocusRing();
        }
        get ActionDescriptionChangedCallbackList() {
          return this.m_ActionDescriptionsChangedCallbackList;
        }
        GetActiveActionDescriptions() {
          return this.BuildConsolidatedActionDescriptionMap({});
        }
        BuildConsolidatedActionDescriptionMap(t) {
          var e;
          const n =
            null === (e = this.m_Properties) || void 0 === e
              ? void 0
              : e.actionDescriptionMap;
          if (n)
            for (const e in n) {
              const i = e;
              void 0 === t[i] && (t[i] = n[i]);
            }
          return this.m_Parent
            ? this.m_Parent.BuildConsolidatedActionDescriptionMap(t)
            : t;
        }
        AddChild(t) {
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
                t.SetRetainFocusParent(this.m_RetainFocusParent),
            this.m_bMounted &&
              t.BFocusWithin() &&
              (c(
                !this.m_ActiveChild && this.BFocusWithin(),
                "Invalid focus state in AddChild"
              ),
              this.SetActiveChild(this.m_rgChildren.length - 1));
        }
        OnMount(t) {
          (this.m_element = t),
            this.m_Parent
              ? this.m_Parent.AddChild(this)
              : c(this == this.m_Tree.Root, "Only root should have no parent"),
            (this.m_bMounted = !0),
            this.RegisterDOMEvents();
          const e =
              this.m_RetainFocusParent && this.m_RetainFocusParent.BHasFocus(),
            n = this.m_Properties.autoFocus || e;
          if (this.BWantsAutoFocus() || n) {
            let t = -1;
            this.m_rgChildren.length &&
              (this.EnsureChildrenSorted(),
              (t = this.m_rgChildren.findIndex((t) => t.BWantsAutoFocus()))),
              (this.m_Properties.autoFocus || n || -1 !== t) &&
                (this.SetActiveChild(t),
                !this.m_Parent || this.m_Parent.m_element
                  ? e
                    ? this.m_Tree.DeferredFocus.BHasQueuedFocusNode() ||
                      this.m_Tree.DeferredFocus.RequestFocus(
                        this.m_RetainFocusParent,
                        { bFocusDescendant: !0 }
                      )
                    : this.Tree.DeferredFocus.RequestFocus(this)
                  : (this.m_Parent.m_bAutoFocusChild = !0));
          } else if (this.m_rgChildren.length) {
            const t = this.m_rgChildren.findIndex((t) => t.BFocusWithin());
            -1 != t &&
              (this.SetActiveChild(t),
              c(
                this.m_bFocusWithin,
                "Child has focus, we should be m_bFocusWithin"
              ));
          }
        }
        DEV_SetDebugPropsOnElement() {}
        OnUnmount() {
          var t;
          (null === (t = this.m_Properties) || void 0 === t
            ? void 0
            : t.retainFocus) &&
            this.PropagateRetainFocusParentToChildren(this.m_RetainFocusParent),
            (this.m_bMounted = !1);
          const e = this.Tree.DeferredFocus.BIsQueuedFocusNode(this);
          (this.m_bFocused || e) &&
            (ft(
              `The focused node is unmounting, ${
                this.m_RetainFocusParent
                  ? "will transfer to retain focus ancestor"
                  : "will blur"
              }.`
            ),
            e && this.Tree.DeferredFocus.RequestFocus(void 0),
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
              this.m_Properties.layout != Ct.NONE ||
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
        RemoveChild(t) {
          let e = this.m_rgChildren.indexOf(t);
          c(-1 !== e, "Child was not found to remove"),
            -1 !== e &&
              (this.m_ActiveChild == t && (this.m_ActiveChild = void 0),
              this.m_rgChildren.splice(e, 1));
        }
        UnregisterDOMEvents() {
          this.m_rgNavigationHandlers.forEach((t) => t()),
            (this.m_rgNavigationHandlers = []),
            this.m_rgFocusHandlers.forEach((t) => t()),
            (this.m_rgFocusHandlers = []);
        }
        GetActiveDescendant() {
          const t = this.GetActiveChild();
          return t ? t.GetActiveDescendant() : this;
        }
        IsValidChildIndex(t) {
          return t >= 0 && t < this.m_rgChildren.length;
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
        EnsureChildrenSorted(t = !1) {
          (this.m_bChildrenSorted && !t) ||
            (this.m_rgChildren.sort((t, e) => {
              const n = t.m_element,
                i = e.m_element;
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
          const t = this.GetActiveChild();
          return t ? t.GetLastFocusElement() : this.m_element;
        }
        OnDOMFocus(t) {
          this.m_bFocused || this.m_Tree.TransferFocus(r.uS.BROWSER, this);
        }
        OnDOMBlur(t) {
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
            focusable: t,
            focusableIfNoChildren: e,
            childFocusDisabled: n,
            fnCanTakeFocus: i,
          } = this.m_Properties;
          return this.m_bMounted
            ? i && !i(this)
              ? "none"
              : t || (e && (n || 0 == this.m_rgChildren.length))
              ? "self"
              : !n && this.m_rgChildren.length
              ? "children"
              : "none"
            : "none";
        }
        BTakeFocus(t, e) {
          const n = this.FindFocusableNode(e);
          return this.InternalFocusDescendant(n, t, e);
        }
        FindFocusableNode(t, e) {
          switch (this.GetFocusable()) {
            case "none":
              return null;
            case "self":
              return this;
            case "children":
              return this.FindFocusableDescendant(t, e);
          }
        }
        BChildTakeFocus(t, e) {
          const n = this.FindFocusableDescendant(e);
          return this.InternalFocusDescendant(n, t, e);
        }
        BFocusFirstChild(t) {
          const e = this.FindNextFocusableChildInDirection(
            -1,
            St.FORWARD,
            a.eV.INVALID
          );
          return this.InternalFocusDescendant(e, t);
        }
        BFocusLastChild(t) {
          const e = this.FindNextFocusableChildInDirection(
            this.m_rgChildren.length,
            St.BACKWARD,
            a.eV.INVALID
          );
          return this.InternalFocusDescendant(e, t);
        }
        FindFocusableDescendant(t, e) {
          const n = Y(t),
            { focusableIfNoChildren: i, childFocusDisabled: o } =
              this.m_Properties;
          if (o) return null;
          if (this.m_rgChildren.length) {
            this.EnsureChildrenSorted();
            const { navEntryPreferPosition: o, resetNavOnEntry: s } =
              this.m_Properties;
            let r,
              a = this.GetActiveChildIndex();
            if ((s && void 0 !== t && (a = -1), !this.IsValidChildIndex(a))) {
              const t = this.GetLayout();
              a =
                a >= this.m_rgChildren.length ||
                t == Ct.ROW_REVERSE ||
                t == Ct.COLUMN_REVERSE ||
                o == bt.LAST
                  ? this.m_rgChildren.length - 1
                  : 0;
            }
            if ((o == bt.MAINTAIN_X || o == bt.MAINTAIN_Y || e) && n) {
              let i, s;
              o == bt.MAINTAIN_X ? (i = "x") : o == bt.MAINTAIN_Y && (i = "y"),
                i == l[n] && (s = this.m_Tree.GetLastFocusedMovementRect(l[n])),
                ft(
                  `Taking focus while preserving ${bt[o]} preserved: ${i} movement: ${n}, node:`,
                  s || e
                );
              const a = this.ComputeRelativeDirection(t, Ct.GRID);
              if (s || e) {
                const o = a == St.BACKWARD ? this.m_rgChildren.length - 1 : 0;
                r = this.FindClosestChildInNextAxiallyAlignedSet(
                  i || l[n],
                  a,
                  t,
                  s || e,
                  o,
                  this.m_rgChildren[o].GetBoundingRect()
                );
              } else if (i != l[n]) {
                const e = a == St.BACKWARD ? this.m_rgChildren.length : -1;
                r = this.FindNextFocusableChildInDirection(e, a, t);
              }
            } else if (o == bt.PREFERRED_CHILD) {
              for (const e of this.m_rgChildren)
                if (
                  ((r = e.BWantsPreferredFocus() && e.FindFocusableNode(t)), r)
                )
                  return r;
            } else
              o == bt.LAST &&
                (r = this.FindNextFocusableChildInDirection(
                  a + 1,
                  St.BACKWARD,
                  t
                ));
            return (
              r ||
                (r = this.FindNextFocusableChildInDirection(
                  a - 1,
                  St.FORWARD,
                  t
                )),
              r ||
                (r = this.FindNextFocusableChildInDirection(a, St.BACKWARD, t)),
              r || (i ? this : null)
            );
          }
          return null;
        }
        BVisibleChildTakeFocus(t) {
          var e, n, i, o;
          const s =
              null !==
                (i =
                  null ===
                    (n =
                      null === (e = this.Element) || void 0 === e
                        ? void 0
                        : e.ownerDocument) || void 0 === n
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
            ft(
              `Focusing visible child, best child match is ${
                null === (o = null == r ? void 0 : r.child) || void 0 === o
                  ? void 0
                  : o.Element.className
              } - ${JSON.stringify(null == r ? void 0 : r.visibility)}`
            ),
            !!r && r.child.BTakeFocus(t)
          );
        }
        GetLayout() {
          if (this.m_Properties.layout) return this.m_Properties.layout;
          if (this.m_rgChildren.length < 2) return Ct.NONE;
          return j(this.m_element);
        }
        OnNavigationEvent(t) {
          const e = t.detail.button;
          if (this.BTryInternalNavigation(e, t.detail.is_repeat)) return !0;
          const {
            onMoveUp: n,
            onMoveRight: i,
            onMoveDown: o,
            onMoveLeft: s,
          } = this.m_Properties;
          let r = !1;
          switch (e) {
            case a.eV.DIR_UP:
              n && (r = n(t.detail, this));
              break;
            case a.eV.DIR_RIGHT:
              i && (r = i(t.detail, this));
              break;
            case a.eV.DIR_DOWN:
              o && (r = o(t.detail, this));
              break;
            case a.eV.DIR_LEFT:
              s && (r = s(t.detail, this));
          }
          return r;
        }
        InternalFocusDescendant(t, e, n) {
          return !!t && (this.m_Tree.TransferFocus(e, t, Y(n)), !0);
        }
        BTryInternalNavigation(t, e) {
          var n;
          const i = this.GetLayout();
          let o,
            s = this.ComputeRelativeDirection(t, i);
          if (
            (ft(
              `Handling navigation event ${a.eV[t]} - ${Ct[i]} - ${St[s]}`,
              this.m_element
            ),
            s == St.INVALID)
          )
            return !1;
          if (this.m_Properties.focusable && this.m_bFocused)
            return ft("Skipping navigation within focused element"), !1;
          if ((this.EnsureChildrenSorted(!0), i == Ct.GRID))
            o = this.FindNextFocusableChildInGrid(
              this.GetActiveChildIndex(),
              s,
              t
            );
          else {
            let e = this.GetActiveChildIndex();
            this.IsValidChildIndex(e) ||
              (e = s == St.FORWARD ? -1 : this.m_rgChildren.length),
              (o = this.FindNextFocusableChildInDirection(e, s, t));
          }
          if (o) {
            const i = Y(t);
            if (this.GetScrollIntoViewType() == At.NoTransformSparseContent) {
              const t =
                  null === (n = o.Element) || void 0 === n
                    ? void 0
                    : n.ownerDocument.defaultView,
                s =
                  ("y" == i ? t.innerHeight : t.innerWidth) / (e ? 4.5 : 3.33),
                r = st(o.Element);
              if (
                (r.top > t.innerHeight && r.bottom > t.innerHeight + s) ||
                (r.bottom < 0 && r.top < -s) ||
                (r.left > t.innerWidth && r.right > t.innerWidth + s) ||
                (r.right < 0 && r.left < -s)
              )
                return (
                  ft(`Element too far away, scrolling ${s} on ${i} axis `),
                  dt(o.Element, o.Element, "smooth", i, s),
                  !0
                );
            }
            return this.m_Tree.TransferFocus(r.uS.GAMEPAD, o, i), !0;
          }
          return !1;
        }
        GetScrollIntoViewType() {
          var t;
          return (
            null === (t = this.m_Properties) || void 0 === t
              ? void 0
              : t.scrollIntoViewType
          )
            ? this.m_Properties.scrollIntoViewType
            : this.m_Parent
            ? this.m_Parent.GetScrollIntoViewType()
            : At.Standard;
        }
        GetRelativeDirection(t) {
          return this.ComputeRelativeDirection(t, this.GetLayout());
        }
        ComputeRelativeDirection(t, e) {
          let n = e == Ct.ROW_REVERSE || e == Ct.COLUMN_REVERSE;
          switch (e) {
            case Ct.ROW:
            case Ct.ROW_REVERSE:
              switch (t) {
                case a.eV.DIR_LEFT:
                  return n ? St.FORWARD : St.BACKWARD;
                case a.eV.DIR_RIGHT:
                  return n ? St.BACKWARD : St.FORWARD;
                default:
                  return St.INVALID;
              }
            case Ct.COLUMN:
            case Ct.COLUMN_REVERSE:
              switch (t) {
                case a.eV.DIR_UP:
                  return n ? St.FORWARD : St.BACKWARD;
                case a.eV.DIR_DOWN:
                  return n ? St.BACKWARD : St.FORWARD;
                default:
                  return St.INVALID;
              }
            case Ct.GRID:
              switch (t) {
                case a.eV.DIR_LEFT:
                case a.eV.DIR_UP:
                  return n ? St.FORWARD : St.BACKWARD;
                case a.eV.DIR_RIGHT:
                case a.eV.DIR_DOWN:
                  return n ? St.BACKWARD : St.FORWARD;
                default:
                  return St.INVALID;
              }
            default:
              return St.INVALID;
          }
        }
        AdvanceIndex(t, e) {
          return t + (e == St.FORWARD ? 1 : -1);
        }
        FindNextFocusableChildInDirection(t, e, n) {
          let i = e == St.FORWARD ? 1 : -1;
          for (let e = t + i; e >= 0 && e < this.m_rgChildren.length; e += i) {
            const t = this.m_rgChildren[e].FindFocusableNode(n);
            if (t) return t;
          }
          return null;
        }
        ScanChildren(t, e, n) {
          let i = e == St.FORWARD ? 1 : -1;
          for (let e = t; e >= 0 && e < this.m_rgChildren.length; e += i)
            if (n(this.m_rgChildren[e], e)) return e;
          return -1;
        }
        FindNextFocusableChildInGrid(t, e, n) {
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
            const t = this.m_Tree.GetLastFocusedMovementRect("x");
            t && ((s.x = t.x), (s.width = t.width));
          }
          if (i) {
            let i = t;
            for (; -1 != i; ) {
              const t = this.ScanChildren(
                this.AdvanceIndex(i, e),
                e,
                (t) => !H("y", s, t.GetBoundingRect())
              );
              if (-1 != t) {
                const i = this.m_rgChildren[t].GetBoundingRect(),
                  o = this.FindClosestChildInNextAxiallyAlignedSet(
                    "x",
                    e,
                    n,
                    s,
                    t,
                    i
                  );
                if (o) return o;
              }
              i = t;
            }
          } else {
            let i = e == St.FORWARD ? 1 : -1;
            for (
              let o = this.AdvanceIndex(t, e);
              o >= 0 && o < this.m_rgChildren.length;
              o += i
            ) {
              const t = this.m_rgChildren[o];
              if (!H("y", s, t.GetBoundingRect())) return null;
              let e = t.FindFocusableNode(n);
              if (e) return e;
            }
          }
          return null;
        }
        FindClosestChildInNextAxiallyAlignedSet(t, e, n, i, o, s) {
          (!o || o < 0) && (o = 0);
          let r = [];
          const a = { x: (c = i).x, y: c.y };
          var c;
          this.ScanChildren(o, e, (e) => {
            const n = e.GetBoundingRect();
            return (
              !(!s || H(l[t], s, n)) ||
              (r.push({ child: e, overlap: K(t, i, n), dist: $(t, a, n) }), !1)
            );
          }),
            e == St.BACKWARD && r.reverse(),
            r.sort((t, e) => {
              const n = e.overlap - t.overlap;
              return 0 != n ? n : t.dist - e.dist;
            });
          for (const { child: t } of r) {
            const e = t.FindFocusableNode(n, i);
            if (e) return e;
          }
          return null;
        }
        GetChildren() {
          return (
            this.EnsureChildrenSorted(),
            [this.m_rgChildren, this.m_iLastActiveChildIndex]
          );
        }
        SetActiveChild(t) {
          t instanceof wt
            ? (this.EnsureChildrenSorted(),
              (this.m_ActiveChild = t),
              (this.m_iLastActiveChildIndex = this.m_rgChildren.indexOf(t)))
            : (this.IsValidChildIndex(t) &&
                (this.m_ActiveChild = this.m_rgChildren[t]),
              (this.m_iLastActiveChildIndex = t));
        }
        GetDepth() {
          return this.m_nDepth;
        }
        SetRetainFocusParent(t) {
          (this.m_RetainFocusParent = t),
            this.m_Properties.retainFocus ||
              this.PropagateRetainFocusParentToChildren(t);
        }
        PropagateRetainFocusParentToChildren(t) {
          for (let e = 0; e < this.m_rgChildren.length; e++)
            this.m_rgChildren[e].SetRetainFocusParent(t);
        }
        OnFocusedDecendantRemoved(t) {
          this.m_Tree.DeferredFocus.RequestFocus(this, {
            bFocusDescendant: !0,
          });
        }
        SetDOMFocusAndScroll(t, e) {
          this.UpdateParentActiveChild(),
            this.m_Tree.BIsActiveFocus()
              ? (c(
                  !this.m_Tree.BUseVirtualFocus(),
                  "Virtual focus tree should not have browser focus"
                ),
                this.m_element.focus({ preventScroll: !0 }))
              : this.m_Tree.BUseVirtualFocus() ||
                ft(
                  `Didn't move focus to element as tree ${this.m_Tree.id} is not active focus tree`
                ),
            (function (t, e) {
              var n, i, o;
              const s = t.Element;
              if (!s) return;
              let r = [t];
              for (let e = t.Parent; e; e = e.Parent)
                (null === (n = e.m_Properties) || void 0 === n
                  ? void 0
                  : n.scrollIntoViewWhenChildFocused) && r.push(e);
              for (; r.length; ) {
                let n = r.pop(),
                  s = 0 == r.length,
                  a =
                    null === (i = n.m_Properties) || void 0 === i
                      ? void 0
                      : i.scrollIntoViewType;
                if (
                  (void 0 === a && (a = it ? At.NoTransform : At.Standard),
                  (null === (o = n.m_Properties) || void 0 === o
                    ? void 0
                    : o.fnScrollIntoViewHandler) &&
                    !1 !== n.m_Properties.fnScrollIntoViewHandler(t, e, n))
                )
                  continue;
                const l = n.m_element,
                  c =
                    a == At.NoTransform ||
                    a == At.NoTransformSparseContent ||
                    !s;
                if (e) {
                  const e = c ? st(l) : l.getBoundingClientRect();
                  let n = !1;
                  const i = Math.max(1.4 * (e.bottom - e.top), 40);
                  ((ot && performance.now() - ot < 500) ||
                    e.bottom < -i ||
                    e.top > window.innerHeight + i) &&
                    (n = !0);
                  let o = n ? "auto" : "smooth";
                  n && (ot = performance.now()),
                    t.Tree.Controller.BIsRestoringHistory() && (o = "auto"),
                    c
                      ? dt(0, l, o)
                      : l.scrollIntoView({ behavior: o, block: "nearest" });
                } else
                  c
                    ? dt(0, l, "auto")
                    : l.scrollIntoView({
                        behavior: "auto",
                        block: "nearest",
                        inline: "nearest",
                      });
              }
            })(this, e),
            this.m_Tree.OnChildActivated(t);
        }
      }
      (0, i.gn)([u.a], wt.prototype, "OnDOMFocus", null),
        (0, i.gn)([u.a], wt.prototype, "OnDOMBlur", null),
        (0, i.gn)([u.a], wt.prototype, "OnNavigationEvent", null);
      var Ft = n(837),
        Nt = n(782),
        Rt = n(255);
      class It {
        constructor(t) {
          (this.m_bIsGamepadInputExternallyControlled = !1),
            (this.m_NavigationController = t),
            (0, Nt.U5)("BrowserView.RegisterForMessageFromParent") &&
            (0, Nt.U5)("BrowserView.PostMessageToParent")
              ? ((this.m_bIsGamepadInputExternallyControlled = !0),
                (this.m_postMessage = new Rt.Pf()))
              : ((this.m_bIsGamepadInputExternallyControlled =
                  window.top != window.self),
                (this.m_postMessage = new Rt.y5(window.top))),
            this.m_postMessage.RegisterForMessage(this.OnMessage),
            window.addEventListener("unload", this.PostPageUnloading),
            this.m_NavigationController.RegisterForUnhandledButtonDownEvents(
              (t) => this.PostButtonPressToSteam(t.detail.button)
            ),
            t
              .GetDefaultContext()
              .FocusChangedCallbacks.Register(this.OnFocusChanged),
            this.UpdateActionDescriptions({}),
            this.SendGameInputState("CGamepadWebBridgeClient constructor");
        }
        BIsGamepadInputExternallyControlled() {
          return this.m_bIsGamepadInputExternallyControlled;
        }
        BFromActiveNavTree(t, e) {
          let n = null == e ? void 0 : e.Tree;
          return (
            n || (n = null == t ? void 0 : t.Tree),
            n && n.Controller.IsActiveFocusNavTree(n)
          );
        }
        OnFocusChanged(t, e, n) {
          const i = n ? n.GetActiveActionDescriptions() : {};
          this.BFromActiveNavTree(e, n) && this.UpdateActionDescriptions(i);
        }
        UpdateActionDescriptions(t) {
          this.m_postMessage.PostMessage({
            type: "UpdateActionDescriptions",
            data: { descriptions: t },
          });
        }
        OnMessage(t) {
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
        }
        SendGameInputState(t) {
          let e = Ft.i.Basic;
          window.bSupportsGamepadUI && (e = Ft.i.Full),
            this.m_postMessage.PostMessage({
              type: "GameInputState",
              data: { source: t, support: e },
            });
        }
        PostButtonPressToSteam(t) {
          this.m_postMessage.PostMessage({
            type: "ButtonPressed",
            data: { button: t },
          });
        }
        PostPageUnloading() {
          this.m_postMessage.PostMessage({
            type: "PageUnloading",
            data: { location: window.location.href },
          });
        }
      }
      (0, i.gn)([u.a], It.prototype, "OnFocusChanged", null),
        (0, i.gn)([u.a], It.prototype, "OnMessage", null),
        (0, i.gn)([u.a], It.prototype, "PostPageUnloading", null);
      n(374);
      function Dt() {
        return !!window.document;
      }
      let Tt;
      function Et() {
        if (!Dt()) return Tt || (Tt = Ot()), Tt;
        let t = (function (t) {
          if (!Dt() || !window.document.cookie) return null;
          let e = document.cookie.match("(^|; )" + t + "=([^;]*)");
          return e && e[2] ? decodeURIComponent(e[2]) : null;
        })("sessionid");
        return t || (t = Ot()), t;
      }
      function Ot() {
        let t = (function () {
          let t = "";
          for (let i = 0; i < 24; i++)
            t += ((e = 0),
            (n = 35),
            (e = Math.ceil(e)),
            (n = Math.floor(n)),
            Math.floor(Math.random() * (n - e + 1)) + e).toString(36);
          var e, n;
          return t;
        })();
        return (
          (function (t, e, n, i) {
            if (!Dt()) return;
            i || (i = "/");
            let o = "";
            if (void 0 !== n && n) {
              let t = new Date();
              t.setTime(t.getTime() + 864e5 * n),
                (o = "; expires=" + t.toUTCString());
            }
            document.cookie =
              encodeURIComponent(t) +
              "=" +
              encodeURIComponent(e) +
              o +
              ";path=" +
              i;
          })("sessionid", t, 0),
          t
        );
      }
      const Lt = {
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
          return Et();
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
      class yt extends a.oH {
        constructor(t) {
          super(),
            (this.m_lastButtonDown = a.eV.INVALID),
            this.SetSourceType(a.Rr.KEYBOARD),
            t.addEventListener("keydown", this.OnKeyDown),
            t.addEventListener("keyup", this.OnKeyUp),
            t.addEventListener("blur", this.Reset);
        }
        OnKeyDown(t) {
          const e = this.TranslateKey(t);
          e != a.eV.INVALID &&
            (t.preventDefault(),
            e != this.m_lastButtonDown &&
              (this.Reset(),
              this.OnButtonDown(e),
              (this.m_lastButtonDown = e)));
        }
        OnKeyUp(t) {
          const e = this.TranslateKey(t);
          e != a.eV.INVALID &&
            (this.OnButtonUp(e),
            (this.m_lastButtonDown = a.eV.INVALID),
            t.preventDefault());
        }
        Reset() {
          this.m_lastButtonDown != a.eV.INVALID &&
            (this.OnButtonUp(this.m_lastButtonDown),
            (this.m_lastButtonDown = a.eV.INVALID));
        }
        GetKeycodeFromEvent(t) {
          return "linux" === Lt.PLATFORM && t.key.length > 1
            ? t.key || t.code
            : t.code || t.key;
        }
        BShouldSwallowEventForTextInputWorkaround(t) {
          if (
            !(
              I(t.target) &&
              ("INPUT" === t.target.nodeName ||
                "TEXTAREA" === t.target.nodeName)
            )
          )
            return !1;
          const e = this.GetKeycodeFromEvent(t);
          let n = t.target;
          const i = Array.from(
            n.ownerDocument.getElementsByClassName("gpfocus")
          ).some((t) =>
            Array.from(t.classList).some((t) => t.includes("virtualkeyboard"))
          );
          switch (e) {
            case "ArrowUp": {
              if (i) return !0;
              let e = null == n ? void 0 : n.value.indexOf("\n");
              return (
                "TEXTAREA" === t.target.nodeName &&
                e >= 0 &&
                e < (null == n ? void 0 : n.selectionStart)
              );
            }
            case "ArrowDown": {
              if (i) return !0;
              let e = null == n ? void 0 : n.value.lastIndexOf("\n");
              return (
                "TEXTAREA" === t.target.nodeName &&
                e >= 0 &&
                e >= (null == n ? void 0 : n.selectionStart) &&
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
        TranslateKey(t) {
          const e = this.GetKeycodeFromEvent(t),
            n = t.ctrlKey,
            i = t.shiftKey;
          if (this.BShouldSwallowEventForTextInputWorkaround(t))
            return a.eV.INVALID;
          if (n && i)
            switch (e) {
              case "Digit4":
                return a.eV.TRIGGER_LEFT;
              case "Digit5":
                return a.eV.TRIGGER_RIGHT;
              default:
                return a.eV.INVALID;
            }
          if (n)
            switch (e) {
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
          switch (e) {
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
      (0, i.gn)([u.a], yt.prototype, "OnKeyDown", null),
        (0, i.gn)([u.a], yt.prototype, "OnKeyUp", null),
        (0, i.gn)([u.a], yt.prototype, "Reset", null);
      class Bt extends wt {
        constructor(t, e) {
          super(e.m_Tree, e, e.m_FocusRing),
            (this.m_rgCallbackRegistrations = []);
        }
        OnMount(t) {
          super.OnMount(t), (t.__nav_wrapper = this);
          const e = t.__nav_tree;
          e && this.BindTree(e);
        }
        OnUnmount() {
          for (const t of this.m_rgCallbackRegistrations) t.Unregister();
          this.m_rgCallbackRegistrations = [];
        }
        BindTree(t) {
          t.GetParentEmbeddedNavTree() &&
            ((this.m_wrappedTree = t),
            this.m_rgCallbackRegistrations.push(
              t.OnActivateCallbacks.Register(this.OnWrappedTreeActivated)
            ),
            this.m_rgCallbackRegistrations.push(
              t.OnDeactivateCallbacks.Register(this.OnWrappedTreeDeactivated)
            ),
            t.BIsActive() && this.OnWrappedTreeActivated(),
            t.SetOnUnhandledButtonCallback(this.OnWrappedTreeUnhandledButton));
        }
        OnWrappedTreeActivated() {
          this.BHasFocus() || this.m_Tree.TransferFocus(r.uS.APPLICATION, this);
        }
        OnWrappedTreeDeactivated() {
          this.m_wrappedTree.TransferFocus(r.uS.APPLICATION, null);
        }
        OnWrappedTreeUnhandledButton(t) {
          return (
            (0, r.Jb)(this.m_Parent.Element, "vgp_onbuttondown", t.detail), !1
          );
        }
        SetDOMFocusAndScroll(t, e) {
          this.UpdateParentActiveChild(),
            this.m_wrappedTree.BIsActive() ||
              (this.m_wrappedTree.Activate(), this.m_wrappedTree.TakeFocus(t));
        }
        SetProperties(t) {
          super.SetProperties(
            Object.assign(Object.assign({}, t), {
              noFocusRing: !0,
              focusable: !0,
            })
          );
        }
      }
      (0, i.gn)([u.a], Bt.prototype, "OnWrappedTreeActivated", null),
        (0, i.gn)([u.a], Bt.prototype, "OnWrappedTreeDeactivated", null),
        (0, i.gn)([u.a], Bt.prototype, "OnWrappedTreeUnhandledButton", null);
      const Mt = "VirtualKeyboardMessage";
      function Pt(t) {
        return t && t.type === Mt;
      }
      class Gt {
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
        HideVirtualKeyboard(t) {
          this.SendMessage({ message: "HideVirtualKeyboard", msDelay: t });
        }
        OnBrowserViewMessage(t, e) {
          t == Mt && this.InternalDispatchMessage(JSON.parse(e));
        }
        OnMessage(t) {
          this.InternalDispatchMessage(t.data);
        }
        InternalDispatchMessage(t) {
          Pt(t) && t.message;
        }
        SendMessage(t) {
          const e = Object.assign({ type: "VirtualKeyboardMessage" }, t);
          (0, Nt.U5)("BrowserView.PostMessageToParent")
            ? SteamClient.BrowserView.PostMessageToParent(
                e.type,
                JSON.stringify(e)
              )
            : (c(
                window.parent && window.parent != window,
                "No parent window to post to"
              ),
              window.parent.postMessage(e, "*"));
        }
      }
      (0, i.gn)([u.a], Gt.prototype, "ShowVirtualKeyboard", null),
        (0, i.gn)([u.a], Gt.prototype, "ShowModalKeyboard", null),
        (0, i.gn)([u.a], Gt.prototype, "HideVirtualKeyboard", null),
        (0, i.gn)([u.a], Gt.prototype, "OnBrowserViewMessage", null),
        (0, i.gn)([u.a], Gt.prototype, "OnMessage", null);
      (0, i.gn)(
        [u.a],
        class {
          constructor(t, e) {
            (this.m_refKeyboard = e), t.on("message", this.OnMessage);
          }
          OnMessage(t, e, n) {
            if (t == Mt) {
              const t = JSON.parse(e);
              if (Pt(t))
                switch (t.message) {
                  case "ShowVirtualKeyboard":
                    this.m_refKeyboard.ShowVirtualKeyboard();
                    break;
                  case "ShowModalKeyboard":
                    this.m_refKeyboard.ShowModalKeyboard();
                    break;
                  case "HideVirtualKeyboard":
                    this.m_refKeyboard.DelayHideVirtualKeyboard(t.msDelay);
                }
            }
          }
        }.prototype,
        "OnMessage",
        null
      );
      var xt = n(369),
        kt = n.n(xt);
      function Vt(t) {
        let e = 0;
        t.children().each(function () {
          const t = s()(this),
            n = t.css("zIndex");
          "auto" === n
            ? t.css("zIndex", 0)
            : isNaN(parseInt(n)) || (e = Math.max(e, parseInt(n)));
        });
        const n = s()("<div/>", {
          style: `position: absolute; pointer-events: none; top: 0; left: 0; z-index: ${
            (e || 100) + 1
          }; width: 0; height: 0; padding: 0; margin: 0; background: none; overflow: visible; display: block;`,
        });
        let i = null,
          o = null,
          r = null,
          a = 0,
          l = 0,
          c = 0,
          u = 0;
        t.prepend(n);
        const h = (t) => {
            const e = t.GetBoundingRect(),
              i = n[0].getBoundingClientRect();
            return {
              left: e.x - i.x - 0,
              top: e.y - i.y - 0,
              height: e.height,
              width: e.width,
            };
          },
          d = (t) => {
            (a = t.left),
              (l = t.top),
              (c = t.height),
              (u = t.width),
              i.css({ left: a, top: l, height: c, width: u });
          },
          m = (t) => {
            if (t && t.BWantsFocusRing() && i) {
              let e = h(t);
              (e.left == a && e.top == l && e.height == c && e.width == u) ||
                d(e);
            }
          },
          g = (t) => {
            if (
              ((o = t),
              i && (i.remove(), (i = null)),
              r && (window.clearInterval(r), (r = null)),
              t && t.BWantsFocusRing())
            ) {
              i = s()("<div/>", {
                style: "position: absolute; pointer-events: none; ",
                class: kt().FocusRing,
              });
              let e = h(t);
              d(e), n.append(i), (r = window.setInterval(() => m(t), 200));
            }
          };
        return {
          OnBlur: () => g(null),
          OnFocus: (t, e) => g(e),
          OnFocusChange: (t, e, n) => g(n),
          OnForceMeasureFocusRing: () => m(o),
        };
      }
      function Ut(t) {
        return !!t.is_repeat;
      }
      Object.seal({ onMoveUp: Wt, onMoveDown: Wt }),
        Object.seal({ onMoveRight: Wt, onMoveLeft: Wt });
      function Wt(t, e) {
        if (t.is_repeat) return !1;
        const n = e.GetRelativeDirection(t.button);
        return n == St.FORWARD
          ? e.BFocusFirstChild(r.uS.GAMEPAD)
          : n == St.BACKWARD && e.BFocusLastChild(r.uS.GAMEPAD);
      }
      function Ht(t) {
        return t ? Function("event", t) : null;
      }
      function Kt() {
        return !0;
      }
      function $t(t) {
        return "BlockMovement" == t
          ? Kt
          : "RepeatNavigationBoundary" == t
          ? Ut
          : t
          ? Function("detail", t)
          : null;
      }
      function jt(t) {
        this.click(), t.stopPropagation();
      }
      function Yt(t) {
        s()(this).find('a, input[type="checkbox"]')[0].click();
      }
      function Xt(t) {
        const e = t.currentTarget;
        if (!I(e)) return !1;
        const n = t.detail.is_repeat ? 4.5 : 3.33,
          i = "smooth",
          o = e.ownerDocument,
          s = o.defaultView;
        switch (t.detail.button) {
          case a.eV.DIR_UP:
            if (s.scrollY > 3)
              return mt(s, { top: -s.innerHeight / n, behavior: i }), !0;
            break;
          case a.eV.DIR_RIGHT:
            if (s.scrollX + s.innerWidth < o.body.clientWidth - 3)
              return mt(s, { left: s.innerWidth / n, behavior: i }), !0;
            break;
          case a.eV.DIR_DOWN:
            if (s.scrollY + s.innerHeight < o.body.clientHeight - 3)
              return mt(s, { top: s.innerHeight / n, behavior: i }), !0;
            break;
          case a.eV.DIR_LEFT:
            if (s.scrollX > 3)
              return mt(s, { left: s.innerWidth / n, behavior: i }), !0;
        }
        return !1;
      }
      function zt(t) {
        const { name: e, root: n, navState: i } = t;
        i
          ? (S(n, i), n.Tree.DeferredFocus.Reset())
          : n.Tree.DeferredFocus.ExecuteQueuedFocus();
      }
      function Jt(t, e) {
        const n = window.history.state;
        return { name: t, root: e, navState: null == n ? void 0 : n[t] };
      }
      var Qt;
      !(function (t) {
        (t[(t.Unknown = 0)] = "Unknown"),
          (t[(t.NotNeeded = 1)] = "NotNeeded"),
          (t[(t.InReactTree = 2)] = "InReactTree");
      })(Qt || (Qt = {}));
      const qt = new Gt();
      let Zt,
        te = !1,
        ee = null,
        ne = null,
        ie = null;
      function oe(t) {
        te ||
          ((ee = new U()),
          (window.legacyWebFocusNavController = ee),
          (Zt = new It(ee)),
          Zt.BIsGamepadInputExternallyControlled() || ee.RegisterInputSource(t),
          (Zt.BIsGamepadInputExternallyControlled() ||
            navigator.userAgent.includes("Valve Steam Gamepad")) &&
            ee.RegisterInputSource(new yt(window)),
          (function (t) {
            s()("html").addClass("gpnav_active");
            const e = s()("body"),
              n = t.NewGamepadNavigationTree(t.GetDefaultContext(), "legacy"),
              i = Vt(e);
            (n.Root.m_FocusRing = i),
              n.Root.SetProperties({
                scrollIntoViewType: At.NoTransformSparseContent,
              }),
              (window.__nav_tree_root = n),
              (window.__virtual_keyboard_client = qt),
              re.set(document.body, n.Root),
              ce(document.body, n.Root),
              me(void 0, !0),
              t.RegisterGamepadNavigationTree(n, window, !1),
              s()(document.body).on("vgp_onbuttondown", function (t) {
                n.HandleButtonDownEventAsLogicalEvent(t.originalEvent);
              }),
              (0, r.$G)(document.body, Xt);
            new MutationObserver(se).observe(document.body, {
              childList: !0,
              subtree: !0,
            }),
              (o = !0),
              (it = o),
              (function (t, e) {
                var n;
                if (
                  (e.Tree.DeferredFocus.SuppressFocus(),
                  window.addEventListener("popstate", () => zt(Jt(t, e))),
                  null === (n = window.history.state) || void 0 === n
                    ? void 0
                    : n.notify_focus_restore_ready)
                ) {
                  var i = Jt(t, e);
                  window.addEventListener("focus_restore_ready", function (t) {
                    window.setTimeout(function () {
                      zt(i);
                    }, 100);
                  });
                } else zt(Jt(t, e));
                !(function (t, e) {
                  e.Tree.WindowContext.FocusChangedCallbacks.Register(() => {
                    window.history.replaceState(
                      Object.assign(Object.assign({}, window.history.state), {
                        [t]: A(e),
                      }),
                      null
                    );
                  });
                })(t, e);
              })("legacy_web_root", n.Root),
              Object.assign(window, Ce),
              window.dispatchEvent(new CustomEvent("vgp_gamepadnavready"));
            var o;
          })(ee)),
          (te = !0);
      }
      function se(t) {
        for (const e of t) {
          const t = [],
            n = [];
          O(
            e,
            (e) => t.push(e),
            (t) => n.push(t)
          ),
            t.length && me(s()(t)),
            n.length && de(s()(n));
        }
      }
      const re = new WeakMap(),
        ae = new WeakMap();
      let le = [];
      function ce(t, e) {
        if (e instanceof wt) {
          const n = e.GetDepth();
          le[n] || (le[n] = []), le[n].push([t, e]);
        }
        re.set(t, e);
      }
      function ue(t, e) {
        const n = ae.has(t) ? ae.get(t) : [];
        n.push(e), ae.set(t, n);
      }
      function he(t) {
        return "jquery" in t
          ? re.get(t[0]) || Qt.Unknown
          : re.get(t) || Qt.Unknown;
      }
      function de(t) {
        t.find("*")
          .addBack()
          .each(function () {
            var t;
            null === (t = ae.get(this)) ||
              void 0 === t ||
              t.forEach((t) => t()),
              re.delete(this),
              ae.delete(this),
              s()(this).attr("data-nav-modal") && fe();
          });
      }
      function me(t, e = !1) {
        performance.now();
        const n =
          "a,button,textarea,input:not(input[type=hidden]),label:not([for]),[data-panel],[data-react-nav-root],[data-nav-modal]";
        s()(n, t)
          .addBack(n)
          .each(function () {
            var t;
            (function (t) {
              return "jquery" in t ? re.has(t[0]) : re.has(t);
            })((t = this)) || ve(t);
          }),
          (function () {
            for (let t = le.length - 1; t >= 0; t--)
              if (le[t])
                for (let [e, n] of le[t])
                  ue(e, n.Tree.RegisterNavigationItem(n, e));
            le = [];
          })();
      }
      function ge(t) {
        de(s()(t)), me(s()(t));
      }
      function _e(t) {
        const e = s()(t.Element);
        return (
          !e.data("gpFocusDisabled") &&
          e.is(":visible") &&
          "hidden" != e.css("visibility") &&
          ((e.outerWidth() > 0 && e.outerHeight() > 0) ||
            "hidden" !== e.css("overflow"))
        );
      }
      function ve(t) {
        var e, n, o, a, l, u, h;
        const d = s()(t),
          m = pe(t);
        if (m instanceof Bt || m == Qt.InReactTree)
          return ce(t, Qt.InReactTree), Qt.InReactTree;
        const g = m.Tree;
        let _ = d.data("reactNavRoot")
            ? new Bt(d.data("reactNavRoot"), m)
            : g.CreateNode(m, m.m_FocusRing),
          v = d.data("panel") || {};
        if (
          (s()(t).attr("data-nav-modal") &&
            (function (t) {
              ne &&
                (c(
                  !1,
                  "Creating a new modal nav tree while one already exists. A modal opening another modal is not currently supported."
                ),
                fe());
              ne = ee.NewGamepadNavigationTree(
                ee.GetDefaultContext(),
                "modal_dialog"
              );
              const e = Vt(s()("body"));
              (ne.Root.m_FocusRing = e),
                ne.Root.SetProperties({}),
                ce(t, ne.Root),
                me(t),
                (0, r.$G)(ne.Root.m_element, (t) => !0),
                (ie = ee.RegisterGamepadNavigationTree(ne, window, !1));
            })(t),
          "A" == t.tagName || "BUTTON" == t.tagName || "LABEL" == t.tagName)
        )
          (v.focusable = null === (e = v.focusable) || void 0 === e || e),
            (v.clickOnActivate =
              null === (n = v.clickOnActivate) || void 0 === n || n);
        else if ("INPUT" == t.tagName)
          switch (
            ((v.focusable = null === (o = v.focusable) || void 0 === o || o),
            t.getAttribute("type"))
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
          "TEXTAREA" == t.tagName &&
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
          W = Ht(T),
          H = Ht(E),
          K = Ht(O),
          $ = Ht(L),
          j = Ht(y),
          Y = Ht(x);
        V || (V = "Panel"),
          "PanelGroup" == V &&
            ({ onOKButtonHandler: W, onCancelButtonHandler: H } = (function (
              t,
              e
            ) {
              const {
                onOKButtonHandler: n,
                onCancelButtonHandler: i,
                navNode: o,
              } = t;
              return (
                (e.focusable = !1 !== e.focusable),
                {
                  onOKButtonHandler: (t) =>
                    !(
                      !o.BHasFocus() ||
                      !o.BChildTakeFocus(r.uS.GAMEPAD, t.detail.button)
                    ) ||
                    (!!n && n(t)),
                  onCancelButtonHandler: (t) =>
                    !(
                      !o.BFocusWithin() ||
                      o.BHasFocus() ||
                      !o.BTakeFocus(r.uS.GAMEPAD, t.detail.button)
                    ) ||
                    (!!i && i(t)),
                }
              );
            })(
              { onOKButtonHandler: W, onCancelButtonHandler: H, navNode: _ },
              U
            )),
          W && ue(d[0], (0, r.x)(d[0], W)),
          H && ue(d[0], (0, r.R3)(d[0], H)),
          K && N && ue(d[0], (0, r.n2)(d[0], K)),
          $ && R && ue(d[0], (0, r.DX)(d[0], $)),
          j && I && ue(d[0], (0, r.WF)(d[0], j)),
          Y && ue(d[0], (0, r.$G)(d[0], Y));
        const X = (function (t, e, n, i) {
            const o = {};
            return (
              t && (o.onMoveUp = $t(t)),
              e && (o.onMoveRight = $t(e)),
              n && (o.onMoveDown = $t(n)),
              i && (o.onMoveLeft = $t(i)),
              o
            );
          })(B, M, P, G),
          z = p
            ? (function (t) {
                switch (t) {
                  case "column":
                    return Ct.COLUMN;
                  case "column-reverse":
                    return Ct.COLUMN_REVERSE;
                  case "row":
                    return Ct.ROW;
                  case "row-reverse":
                    return Ct.ROW_REVERSE;
                  case "grid":
                    return Ct.GRID;
                  default:
                    return Ct.NONE;
                }
              })(p)
            : Ct.NONE;
        z != Ct.NONE && (U.layout = z),
          C
            ? (U.navEntryPreferPosition = bt.MAINTAIN_X)
            : b
            ? (U.navEntryPreferPosition = bt.MAINTAIN_Y)
            : S && (U.navEntryPreferPosition = bt.PREFERRED_CHILD),
          f &&
            (!1 !== U.focusable && (U.focusable = !0),
            d.on("vgp_onok", "firstChild" === f ? Yt : jt),
            ue(t, () => {
              d.off("vgp_onok");
            })),
          A &&
            (d.on("vgp_onok.vkbindings", () => qt.ShowVirtualKeyboard()),
            d.on("click.vkbindings", () => qt.ShowVirtualKeyboard()),
            d.on("blur.vkbindings", () => {
              document.hasFocus() &&
                document.activeElement != t &&
                qt.HideVirtualKeyboard();
            }),
            ue(t, () => {
              d.off(".vkbindings");
            })),
          U.focusable && void 0 === d.attr("tabIndex") && d.attr("tabIndex", 0),
          U.focusable &&
            _.FocusCallbackList.Register((e) =>
              (function (t, e) {
                e ? s()(t).addClass("gpfocus") : s()(t).removeClass("gpfocus");
              })(t, e)
            ),
          k &&
            ((_.m_FocusRing = Vt(d)),
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
            Object.assign({ fnCanTakeFocus: _e, actionDescriptionMap: J }, X),
            U
          );
        return _.SetProperties(Q), ce(t, _), _;
      }
      function pe(t) {
        const e = t.parentElement;
        if (!e) return console.error("no parent"), null;
        let n = he(e);
        if (n == Qt.Unknown)
          n = (function (t) {
            let e = !1;
            switch (t.tagName) {
              case "A":
              case "INPUT":
              case "TEXTAREA":
                e = !0;
                break;
              case "DIV":
                if (j(t) != Ct.COLUMN) e = !0;
                else {
                  const n = j(t.parentElement);
                  (n != Ct.ROW && n != Ct.ROW_REVERSE) || (e = !0);
                }
            }
            let n = Qt.NotNeeded;
            return e ? (n = ve(t)) : ce(t, n), n;
          })(e);
        else if (n == Qt.InReactTree) return n;
        return n instanceof wt ? n : pe(e);
      }
      function fe(t) {
        ie && (ie(), (ie = null), (ne = null)),
          t && s()(t).removeAttr("data-nav-modal");
      }
      const Ce = {
        InstrumentFocusElements: me,
        ForceUpdateFocusElements: ge,
        GPNavFocusChild: function (t) {
          let e = he(t[0]);
          return (
            e instanceof wt || (e = pe(t[0])),
            e instanceof wt && e.BTakeFocus(r.uS.APPLICATION),
            !1
          );
        },
        GPOnShowingModalWindow: function (t) {
          const e = t;
          return s()(e).attr("data-nav-modal", "true"), ge(e), () => fe(e);
        },
        GPShowVirtualKeyboard: function (t = !0) {
          t ? qt.ShowVirtualKeyboard() : qt.HideVirtualKeyboard();
        },
        GPNavUpdateActionDescriptions: function (t, e) {
          const n = he(t);
          n instanceof wt &&
            n.SetProperties(
              Object.assign(Object.assign({}, n.m_Properties), {
                actionDescriptionMap: (0, r.Cj)(e),
              })
            );
        },
      };
    },
  },
]);

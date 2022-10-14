/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunklegacy_web = self.webpackChunklegacy_web || []).push([
  [511],
  {
    222: (t) => {
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
    223: (t, e, n) => {
      "use strict";
      n.r(e), n.d(e, { InitializeGamepadNavigation: () => te });
      var i,
        o = n(655),
        s = n(311),
        r = n.n(s),
        a = n(28);
      !(function (t) {
        (t[(t.GAMEPAD = 0)] = "GAMEPAD"),
          (t[(t.KEYBOARD = 1)] = "KEYBOARD"),
          (t[(t.APPLICATION = 2)] = "APPLICATION"),
          (t[(t.BROWSER = 3)] = "BROWSER");
      })(i || (i = {}));
      let l = {
        [a.eV.OK]: "vgp_onok",
        [a.eV.CANCEL]: "vgp_oncancel",
        [a.eV.SECONDARY]: "vgp_onsecondaryaction",
        [a.eV.OPTIONS]: "vgp_onoptions",
        [a.eV.START]: "vgp_onmenu",
      };
      function c(t, e, n) {
        return (
          t.addEventListener(e, n),
          () =>
            (function (t, e, n) {
              t.removeEventListener(e, n);
            })(t, e, n)
        );
      }
      function u(t, e) {
        return c(t, "vgp_ondirection", d(e));
      }
      function h(t, e, n) {
        let i = t;
        if (null === i || !i.ownerDocument || !i.ownerDocument.defaultView)
          return !0;
        let o = new i.ownerDocument.defaultView.CustomEvent(e, {
          bubbles: !0,
          cancelable: !0,
          detail: n,
        });
        return t.dispatchEvent(o);
      }
      function d(t) {
        return (e) => {
          !1 !== t(e) && (e.stopPropagation(), e.preventDefault());
        };
      }
      function m(t) {
        const {
            onOKActionDescription: e,
            onCancelActionDescription: n,
            onSecondaryActionDescription: i,
            onOptionsActionDescription: o,
            onMenuActionDescription: s,
            actionDescriptionMap: r,
          } = t,
          l = Object.assign({}, r);
        return (
          void 0 !== e && (l[a.eV.OK] = e),
          void 0 !== n && (l[a.eV.CANCEL] = n),
          void 0 !== i && (l[a.eV.SECONDARY] = i),
          void 0 !== o && (l[a.eV.OPTIONS] = o),
          void 0 !== s && (l[a.eV.START] = s),
          l
        );
      }
      const g = { x: "y", y: "x" };
      function p(t, e, ...n) {
        console.assert
          ? 0 == n.length
            ? console.assert(!!t, e)
            : console.assert(!!t, e, ...n)
          : t || console.warn(e, ...n);
      }
      var _ = n(272),
        v = n(385);
      class f extends class {
        GetObject(t) {
          return (0, o.mG)(this, void 0, void 0, function* () {
            try {
              const e = yield this.GetString(t);
              return e ? JSON.parse(e) : null;
            } catch (t) {
              return null;
            }
          });
        }
        StoreObject(t, e) {
          return (0, o.mG)(this, void 0, void 0, function* () {
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
      const b = [
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
        "Haptics",
        "ControllerConfigurator",
        "FriendsUI/RemotePlay",
        "SalePage",
      ];
      var C;
      !(function (t) {
        (t[(t.Debug = 0)] = "Debug"),
          (t[(t.Info = 1)] = "Info"),
          (t[(t.Warning = 2)] = "Warning"),
          (t[(t.Error = 3)] = "Error");
      })(C || (C = {}));
      class F {
        constructor(t, e) {
          (this.m_fnIdGenerator = null),
            (this.m_sName = t),
            (this.m_fnIdGenerator = e),
            A.Get().RegisterLogName(t);
        }
        Debug(...t) {
          this.Log(C.Debug, ...t);
        }
        Info(...t) {
          this.Log(C.Info, ...t);
        }
        Warning(...t) {
          this.Log(C.Warning, ...t);
        }
        Error(...t) {
          this.Log(C.Error, ...t);
        }
        Assert(t, ...e) {
          t || this.Log(C.Error, "Assertion failed:", ...e);
        }
        Log(t, ...e) {
          var n, i;
          if (t == C.Debug && !A.Get().IsDebugLogEnabled(this.m_sName)) return;
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
          w(t, A.Get().IncludeBacktraceInLog, o, this.m_sName, ...e);
        }
      }
      (0, o.gn)([_.a], F.prototype, "Debug", null),
        (0, o.gn)([_.a], F.prototype, "Info", null),
        (0, o.gn)([_.a], F.prototype, "Warning", null),
        (0, o.gn)([_.a], F.prototype, "Error", null),
        (0, o.gn)([_.a], F.prototype, "Assert", null);
      class A {
        constructor() {
          (this.m_Storage = null),
            (this.m_rgLogNames = null),
            (this.m_setEnabledDebugLogs = new Set()),
            (this.m_bIncludeBacktraceInLog = !1),
            (this.m_SettingsChangedCallback = new v.pB()),
            (this.m_bLoading = !1),
            (this.m_Storage = new f()),
            (this.m_rgLogNames = b.slice()),
            this.LoadSettings();
        }
        LogAsLogManager(...t) {
          w(
            C.Info,
            this.IncludeBacktraceInLog,
            "LogManager",
            "LogManager",
            ...t
          );
        }
        LoadSettings() {
          return (0, o.mG)(this, void 0, void 0, function* () {
            (this.m_bLoading = !0),
              (this.m_bIncludeBacktraceInLog =
                !!(yield this.m_Storage.GetObject(
                  A.k_IncludeBacktraceInLog_StorageKey
                )));
            const t = yield this.m_Storage.GetObject(
              A.k_EnabledLogNames_StorageKey
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
          return (0, o.mG)(this, void 0, void 0, function* () {
            yield this.m_Storage.StoreObject(
              A.k_EnabledLogNames_StorageKey,
              Array.from(this.m_setEnabledDebugLogs)
            ),
              yield this.m_Storage.StoreObject(
                A.k_IncludeBacktraceInLog_StorageKey,
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
            null == A.s_Singleton && (A.s_Singleton = new A()), A.s_Singleton
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
          return (0, o.mG)(this, void 0, void 0, function* () {
            this.SetDebugLogEnabled(t, !this.IsDebugLogEnabled(t));
          });
        }
        SetDebugLogEnabled(t, e) {
          return (0, o.mG)(this, void 0, void 0, function* () {
            e
              ? this.m_setEnabledDebugLogs.add(t)
              : this.m_setEnabledDebugLogs.delete(t),
              this.m_SettingsChangedCallback.Dispatch(),
              yield this.SaveSettings();
          });
        }
        SetAllDebugLogsEnabled(t) {
          return (0, o.mG)(this, void 0, void 0, function* () {
            (this.m_setEnabledDebugLogs = new Set(t ? b : [])),
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
          return (0, o.mG)(this, void 0, void 0, function* () {
            (this.m_bIncludeBacktraceInLog = t),
              this.m_SettingsChangedCallback.Dispatch(),
              yield this.SaveSettings();
          });
        }
      }
      function w(t, e, n, i, ...o) {
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
                case C.Debug:
                  return String.fromCodePoint(128027);
                case C.Info:
                  return String.fromCodePoint(8505);
                case C.Warning:
                  return String.fromCodePoint(9888);
                case C.Error:
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
            case C.Debug:
            case C.Info:
              console.log(...h);
              break;
            case C.Warning:
              console.warn(...h);
              break;
            case C.Error:
              console.error(...h);
          }
      }
      (A.k_EnabledLogNames_StorageKey = "EnabledWebLogs"),
        (A.k_IncludeBacktraceInLog_StorageKey = "IncludeBacktraceInLog"),
        (A.s_Singleton = null);
      class R {
        constructor(t) {
          this.m_root = t;
        }
        static SerializeNavState(t, e = !0, n = !0) {
          return {
            root: R.SerializeNavNode(t, e, n),
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
              (i = o.map((t, e) => R.SerializeNavNode(t, e == s || n, n))),
            { sNavKey: t.NavKey, iActiveChild: s, rgChildren: i }
          );
        }
        static RestoreSerializedNavState(t, e, n = 0) {
          const { root: o, bHadFocus: s } = e;
          t.Tree.Controller.RestoreHistoryTransaction(() => {
            R.RestoreSerializedNavNode(t, o),
              (1 == n || (0 == n && s)) && t.BTakeFocus(i.APPLICATION);
          });
        }
        static RestoreSerializedNavNode(t, e) {
          var n;
          const { sNavKey: i, iActiveChild: o, rgChildren: s } = e;
          if (
            (i && p(i == t.NavKey, "navkey mismatch"),
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
              e && R.RestoreSerializedNavNode(e, t);
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
              R.RestoreSerializedNavNode(e[r], s[a]), r++, a++;
            }
          }
        }
      }
      class N extends R {
        constructor() {
          super(...arguments), (this.m_rgHistory = []);
        }
        PushState() {
          this.m_rgHistory.push(R.SerializeNavState(this.m_root));
        }
        PopState(t = 0) {
          this.m_rgHistory.length &&
            R.RestoreSerializedNavState(this.m_root, this.m_rgHistory.pop(), t);
        }
      }
      class I extends R {
        constructor() {
          super(...arguments), (this.m_mapHistory = new Map());
        }
        SaveState(t) {
          this.m_mapHistory.set(t, R.SerializeNavState(this.m_root));
        }
        RestoreState(t, e = 0) {
          const n = this.m_mapHistory.get(t);
          return (
            !!n &&
            (console.log(`Restoring history for state ${t}`),
            R.RestoreSerializedNavState(this.m_root, n, e),
            !0)
          );
        }
      }
      var D = n(637);
      function S(t) {
        return null != t && void 0 !== t.focus;
      }
      function T(t) {
        let e;
        return t && (e = t.ownerDocument.defaultView), e;
      }
      function O(t, e) {
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
      function y(t, e) {
        if (!("ownerDocument" in t)) return !0;
        const n = t.ownerDocument.defaultView.getComputedStyle(t),
          i = "x" === e ? n.overflowX : n.overflowY;
        return "auto" === i || "scroll" === i;
      }
      function E(t, e, n) {
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
      const L = new F("FocusNavigation").Debug,
        P = new F("GamepadEvents").Debug;
      class M {
        constructor(t, e, n) {
          (this.m_onActivateCallbacks = new v.pB()),
            (this.m_onDeactivateCallbacks = new v.pB()),
            (this.m_onActiveFocusStateChangedCallbacks = new v.pB()),
            (this.m_lastFocusNodeXMovement = new B()),
            (this.m_lastFocusNodeYMovement = new B()),
            (this.m_DeferredFocus = new G(this)),
            (this.m_Controller = t),
            (this.m_ownerWindow = e),
            (this.m_ID = n),
            (this.m_Root = new wt(this, null, null)),
            this.m_Root.SetProperties({ layout: bt.COLUMN }),
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
        get ownerWindow() {
          return this.m_ownerWindow;
        }
        BUseVirtualFocus() {
          return this.m_bVirtualFocus;
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
        SetIsMounted() {
          const t = this.m_Root.Element;
          (t.__nav_tree = this),
            t.__nav_wrapper && t.__nav_wrapper.BindTree(this),
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
          let { bUnhandled: e, bHadLogicalEventMapping: n } = (function (t) {
            const e = [
              a.eV.DIR_UP,
              a.eV.DIR_DOWN,
              a.eV.DIR_LEFT,
              a.eV.DIR_RIGHT,
            ];
            let n = !0,
              i = !1,
              o = l[t.detail.button];
            return (
              o
                ? ((i = !0), (n = h(t.target, o, t.detail)))
                : -1 !== e.indexOf(t.detail.button) &&
                  ((i = !0), (n = h(t.target, "vgp_ondirection", t.detail))),
              { bUnhandled: n, bHadLogicalEventMapping: i }
            );
          })(t);
          return (
            P(
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
          const o = this.m_lastFocusNode;
          if (
            o == e &&
            (this.m_bWasActiveForLastFocusChange || !this.BIsActive())
          )
            return;
          L(
            `Transfer focus in ${this.id}, source: ${i[t]}, from/to:`,
            null == o ? void 0 : o.m_element,
            null == e ? void 0 : e.m_element
          );
          const s = { blurredNode: o, focusedNode: e, source: t },
            r = (function (t, e) {
              if (!e || !t) return null;
              let n = e,
                i = t;
              for (; n.GetDepth() > i.GetDepth() && n.Parent; ) n = n.Parent;
              for (; i.GetDepth() > n.GetDepth() && i.Parent; ) i = i.Parent;
              for (; n != i && n && i; ) (n = n.Parent), (i = i.Parent);
              return n;
            })(o, e);
          if (o) {
            o.SetHasFocus(!1);
            for (let t = o; t && t != r; t = t.Parent) t.SetFocusWithin(!1);
          }
          if (e) {
            e.SetHasFocus(!0);
            for (let t = e; t && t != r; t = t.Parent) t.SetFocusWithin(!0);
          }
          let a = this.m_Controller.OnFocusChangeStart(t, this, o, e);
          e && e.SetDOMFocusAndScroll(t, o),
            o &&
              (h(o.Element, "vgp_onblur", s),
              !o.m_FocusRing ||
                (e && o.m_FocusRing == e.m_FocusRing) ||
                o.m_FocusRing.OnBlur(t, o, e)),
            e &&
              (h(e.Element, "vgp_onfocus", s),
              e.m_FocusRing &&
                (o && e.m_FocusRing == o.m_FocusRing
                  ? e.m_FocusRing.OnFocusChange(t, o, e)
                  : e.m_FocusRing.OnFocus(t, e, o))),
            (this.m_lastFocusNode = e),
            (this.m_bWasActiveForLastFocusChange = this.BIsActive()),
            "x" == n
              ? this.m_lastFocusNodeXMovement.SetNode(e.Element)
              : "y" == n
              ? this.m_lastFocusNodeYMovement.SetNode(e.Element)
              : (this.m_lastFocusNodeXMovement.Reset(),
                this.m_lastFocusNodeYMovement.Reset()),
            this.m_Controller.OnFocusChangeComplete(a);
        }
      }
      class B {
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
      class G {
        constructor(t) {
          (this.m_bSuppressed = !1), (this.m_tree = t);
        }
        RequestFocus(t, e) {
          t
            ? ((this.m_target = Object.assign(Object.assign({}, e), {
                node: t,
              })),
              this.m_interval ||
                this.m_bSuppressed ||
                (this.m_interval = window.setTimeout(() => {
                  (this.m_interval = void 0), this.ExecuteQueuedFocus();
                }, 1)))
            : (this.m_target = void 0);
        }
        BHasQueuedFocusNode() {
          return !!this.m_target;
        }
        BIsQueuedFocusNode(t) {
          return this.m_target && this.m_target.node == t;
        }
        SuppressFocus() {
          this.m_bSuppressed = !0;
        }
        Reset() {
          (this.m_bSuppressed = !1),
            (this.m_target = void 0),
            this.ClearInterval();
        }
        ClearInterval() {
          this.m_interval &&
            (window.clearInterval(this.m_interval), (this.m_interval = void 0));
        }
        ExecuteQueuedFocus() {
          if (((this.m_bSuppressed = !1), this.m_target)) {
            const { node: t, bFocusDescendant: e } = this.m_target;
            (this.m_target = void 0),
              L(
                `DeferredFocus in ${this.m_tree.id} - focusing ${
                  e ? "descendant of" : "node"
                } ${t.NavKey}`
              ),
              e
                ? t.BChildTakeFocus(i.APPLICATION) ||
                  this.m_tree.TransferFocus(i.APPLICATION, t)
                : t.BTakeFocus(i.APPLICATION);
          }
        }
      }
      const k = new F("FocusNavigation").Debug,
        V = (new F("GamepadEvents").Debug, "focus-nav-show-debug-focus-ring");
      class x {
        constructor(t) {
          (this.m_rgGamepadNavigationTrees = []),
            (this.m_LastActiveNavTree = null),
            (this.m_LastActiveFocusNavTree = null),
            (this.m_ownerWindow = t);
        }
        SetActiveNavTree(t, e = !1) {
          if (t && this.m_LastActiveNavTree == t) return;
          const n = this.m_LastActiveNavTree;
          n && D.Zf(this.m_rgGamepadNavigationTrees, n),
            t ||
              (this.m_rgGamepadNavigationTrees.length &&
                (t =
                  this.m_rgGamepadNavigationTrees[
                    this.m_rgGamepadNavigationTrees.length - 1
                  ]));
          const o = this.m_LastActiveFocusNavTree == t;
          t && D.Zf(this.m_rgGamepadNavigationTrees, t),
            (this.m_LastActiveNavTree = t),
            (t && t.BUseVirtualFocus()) || (this.m_LastActiveFocusNavTree = t),
            k(
              `Move from nav tree ${null == n ? void 0 : n.id} to nav tree ${
                null == t ? void 0 : t.id
              } ${e ? "taking focus" : "no focus"}`
            ),
            n && this.m_rgGamepadNavigationTrees.push(n),
            t &&
              (this.m_rgGamepadNavigationTrees.push(t),
              !o && e && t.TakeFocus(i.APPLICATION)),
            n && n != this.m_LastActiveFocusNavTree && n.OnDeactivate(t),
            t && !o && t.OnActivate(n);
        }
        BlurNavTree(t) {
          this.m_LastActiveNavTree == t && this.SetActiveNavTree(null, !0),
            D.Zf(this.m_rgGamepadNavigationTrees, t),
            this.m_rgGamepadNavigationTrees.unshift(t);
        }
        UnregisterGamepadNavigationTree(t) {
          D.Zf(this.m_rgGamepadNavigationTrees, t),
            this.m_LastActiveNavTree == t &&
              ((this.m_LastActiveNavTree = null),
              this.SetActiveNavTree(null, !0));
        }
      }
      class W {
        constructor() {
          (this.m_rgGamepadInputSources = []),
            (this.m_mapContexts = new WeakMap()),
            (this.m_bGlobalEventsInitialized = !1),
            (this.m_fnCatchAllGamepadInput = null),
            (this.m_FocusChangedCallbacks = new v.pB()),
            (this.m_UnhandledButtonEventsCallbacks = new v.pB()),
            (this.m_navigationSource = (0, v.vq)({
              eActivationSourceType: a.Rr.UNKNOWN,
              nActiveGamepadIndex: -1,
              nLastActiveGamepadIndex: -1,
            })),
            (this.m_bShowDebugFocusRing = (0, v.vq)(!1)),
            (this.m_bRestoringHistory = !1),
            (this.m_fnGamepadEventUpdateBatcher = (t) => t()),
            (this.m_iFocusChangeStack = 0),
            (window.FocusNavController = this),
            this.m_bShowDebugFocusRing.Set(
              "shown" == sessionStorage.getItem(V)
            );
        }
        GetOrCreateContext(t) {
          return (
            this.m_mapContexts.has(t) || this.m_mapContexts.set(t, new x(t)),
            this.m_mapContexts.get(t)
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
          this.m_rgGamepadInputSources.push(t),
            t.RegisterForGamepadButtonDown(this.OnButtonDown),
            t.RegisterForGamepadButtonUp(this.OnButtonUp),
            t.RegisterForNavigationTypeChange(this.OnNavigationTypeChange);
        }
        SetGamepadEventUpdateBatcher(t) {
          this.m_fnGamepadEventUpdateBatcher = t;
        }
        get FocusChangedCallbacks() {
          return this.m_FocusChangedCallbacks;
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
          const n = this.m_ActiveContext;
          let o = null == n ? void 0 : n.m_ownerWindow.document.activeElement;
          if (null == n ? void 0 : n.m_LastActiveNavTree) {
            let s = this.m_navigationSource.Value.eActivationSourceType;
            if (
              !(
                n.m_LastActiveNavTree.GetLastFocusedNode() ||
                (s != a.Rr.GAMEPAD && s != a.Rr.KEYBOARD) ||
                (e && n.m_LastActiveNavTree.TakeFocus(i.GAMEPAD, !0),
                this.BGlobalGamepadButton(t))
              )
            )
              return null;
            n.m_LastActiveNavTree.GetLastFocusedNode() &&
              (o = n.m_LastActiveNavTree.GetLastFocusedNode().Element);
          }
          return o;
        }
        ChangeNavigationSource(t, e) {
          let n = this.m_navigationSource.Value,
            i = n.nLastActiveGamepadIndex;
          n.nActiveGamepadIndex >= 0 && (i = n.nActiveGamepadIndex),
            this.m_navigationSource.Set({
              eActivationSourceType: t,
              nActiveGamepadIndex: e,
              nLastActiveGamepadIndex: i,
            });
        }
        OnButtonDown(t, e, n, i) {
          var o, s;
          if (this.m_fnCatchAllGamepadInput && this.m_fnCatchAllGamepadInput(t))
            return void k(
              "Ignoring button press - gamepad input is suppressed by parent window"
            );
          this.ChangeNavigationSource(e, n);
          const r = this.GetEventTarget(t, !0);
          k(
            `Firing ${a.eV[t]} in tree ${
              null ===
                (s =
                  null === (o = this.m_ActiveContext) || void 0 === o
                    ? void 0
                    : o.m_LastActiveNavTree) || void 0 === s
                ? void 0
                : s.id
            } at `,
            r
          ),
            this.BatchedUpdate(() =>
              h(r, "vgp_onbuttondown", { button: t, source: e, is_repeat: i })
            );
        }
        OnButtonUp(t, e, n) {
          if (this.m_fnCatchAllGamepadInput) return;
          this.ChangeNavigationSource(e, n);
          const i = this.GetEventTarget();
          this.BatchedUpdate(() =>
            h(i, "vgp_onbuttonup", { button: t, source: e, is_repeat: !1 })
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
                if (!S(t)) return !1;
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
              n.TransferFocus(i.BROWSER, e);
          }
        }
        NewGamepadNavigationTree(t, e) {
          return new M(this, t, e);
        }
        RegisterGamepadNavigationTree(t, e) {
          const n = this.GetOrCreateContext(t.ownerWindow);
          return (
            t.SetIsMounted(),
            e
              ? n.m_rgGamepadNavigationTrees.unshift(t)
              : ((this.m_ActiveContext = n),
                n.m_rgGamepadNavigationTrees.push(t),
                n.SetActiveNavTree(t, !0)),
            this.m_bGlobalEventsInitialized || this.BindGlobalEventHandlers(),
            () => n.UnregisterGamepadNavigationTree(t)
          );
        }
        OnGamepadNavigationTreeActivated(t, e = !1) {
          this.m_mapContexts.get(t.ownerWindow).SetActiveNavTree(t, e);
        }
        OnGamepadNavigationTreeFocused(t, e, n = !1) {
          const o = this.m_mapContexts.get(t.ownerWindow);
          o != this.m_ActiveContext &&
            (k(
              `Changing context to window ${o.m_ownerWindow.name} as tree saw a focus event`
            ),
            (this.m_ActiveContext = o)),
            t != o.m_LastActiveFocusNavTree &&
              t != o.m_LastActiveNavTree &&
              (o.m_LastActiveFocusNavTree.GetParentEmbeddedNavTree() == t ||
              t.GetParentEmbeddedNavTree() == o.m_LastActiveFocusNavTree
                ? (k(
                    `There was a focus event in ${t.id}, allowing focus transfer to activate nav tree due to parent embedded relationship`
                  ),
                  t.Activate())
                : k(
                    `There was a focus event in ${t.id}, but the active nav tree is ${o.m_LastActiveFocusNavTree.id} so it is being ignored.  Source: ${i[e]}.`
                  ));
        }
        BlurNavTree(t) {
          this.m_mapContexts.get(t.ownerWindow).BlurNavTree(t);
        }
        IsActiveFocusNavTree(t) {
          var e;
          return (
            t &&
            t ==
              (null === (e = this.m_ActiveContext) || void 0 === e
                ? void 0
                : e.m_LastActiveFocusNavTree)
          );
        }
        IsActiveNavTree(t) {
          var e;
          return (
            t &&
            t ==
              (null === (e = this.m_ActiveContext) || void 0 === e
                ? void 0
                : e.m_LastActiveNavTree)
          );
        }
        BindGlobalEventHandlers() {
          this.m_bGlobalEventsInitialized ||
            (this.m_bGlobalEventsInitialized = !0);
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
            p(t == this.m_iFocusChangeStack, "out of order focus pop"),
            0 == this.m_iFocusChangeStack)
          ) {
            const { source: t, from: e, to: n } = this.m_ActiveFocusChange;
            this.m_FocusChangedCallbacks.Dispatch(t, e, n);
          }
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
          t && t.TakeFocus(i.APPLICATION);
        }
        OnContextActivated(t) {
          var e;
          (this.m_ActiveContext = this.m_mapContexts.get(t)),
            k(
              `Activating context for window ${t.name}, there are ${
                null === (e = this.m_ActiveContext) || void 0 === e
                  ? void 0
                  : e.m_rgGamepadNavigationTrees.length
              } trees in this context`
            );
        }
        OnContextDeactivated(t) {
          k(`Deactivate context for window ${t.name}`);
        }
        BIsRestoringHistory() {
          return this.m_bRestoringHistory;
        }
        RestoreHistoryTransaction(t) {
          return (0, o.mG)(this, void 0, void 0, function* () {
            this.m_bRestoringHistory = !0;
            try {
              yield t();
            } finally {
              this.m_bRestoringHistory = !1;
            }
          });
        }
      }
      (0, o.gn)([_.a], W.prototype, "OnButtonDown", null),
        (0, o.gn)([_.a], W.prototype, "OnButtonUp", null),
        (0, o.gn)([_.a], W.prototype, "OnNavigationTypeChange", null);
      class U {
        constructor(t) {
          this.m_node = t;
        }
        TakeFocus(t) {
          return this.m_node.BTakeFocus(t ? i.GAMEPAD : i.APPLICATION, t);
        }
        ParentTakeFocus(t) {
          this.m_node.Parent.BTakeFocus(t ? i.GAMEPAD : i.APPLICATION, t);
        }
        ChildTakeFocus(t) {
          return this.m_node.BChildTakeFocus(t ? i.GAMEPAD : i.APPLICATION, t);
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
          this.m_History || (this.m_History = new N(this.m_node)),
            this.m_History.PushState();
        }
        PopState(t = 0) {
          this.m_History && this.m_History.PopState(t);
        }
        SaveState(t) {
          this.m_StateHistory || (this.m_StateHistory = new I(this.m_node)),
            this.m_StateHistory.SaveState(t);
        }
        RestoreState(t, e = 0) {
          return (
            !!this.m_StateHistory && this.m_StateHistory.RestoreState(t, e)
          );
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
          : (p(!1, `Invalid axis ${t}`), !1);
      }
      function K(t, e, n) {
        let i;
        return (
          "x" == t
            ? (i = Math.min(e.x + e.width, n.x + n.width) - Math.max(e.x, n.x))
            : "y" == t
            ? (i =
                Math.min(e.y + e.height, n.y + n.height) - Math.max(e.y, n.y))
            : (p(!1, `Invalid axis ${t}`), (i = 0)),
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
              : void p(!1, `Invalid axis ${t}`);
          })(t, n);
        return i < o.min ? o.min - i : i > o.max ? i - o.max : 0;
      }
      function j(t) {
        if (!t) return bt.NONE;
        const e = t.ownerDocument.defaultView,
          n = e.getComputedStyle(t);
        if ("flex" == n.display)
          switch (n.flexDirection) {
            case "row":
              return "wrap" == n.flexWrap ? bt.GRID : bt.ROW;
            case "row-reverse":
              return bt.ROW_REVERSE;
            case "column":
              return bt.COLUMN;
            case "column-reverse":
              return bt.COLUMN_REVERSE;
          }
        else {
          if ("grid" == n.display) return bt.GRID;
          if (t.childElementCount > 0) {
            const n = e.getComputedStyle(t.firstElementChild);
            if ("left" === n.float) return bt.ROW;
            if ("right" === n.float) return bt.ROW_REVERSE;
            if ("inline" === n.display || "inline-block" === n.display)
              return bt.GRID;
          }
        }
        return bt.COLUMN;
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
      function z(t, e, n) {
        const i = [],
          [o, s] = t.GetChildren(),
          r = t.GetActiveChild();
        let a;
        const l = r ? r.Element.getBoundingClientRect() : null;
        if (r) {
          const t = J(r, e, n);
          if (
            t &&
            !t.offScreen &&
            ((a = X(r, t, t.overlap, n)), a && !a.visibility.offScreen)
          )
            return a;
          t && i.push({ child: r, visibility: t });
        }
        const c = n || l;
        for (let t = 0; t < o.length; t++) {
          const n = o[t];
          if (n == r) continue;
          const s = J(n, e, c);
          s && i.push({ child: n, visibility: s });
        }
        let u;
        i.sort(q);
        for (const t of i) {
          const { child: n, visibility: i } = t;
          if (i.offScreen && u) {
            if (!u.visibility.offScreen) break;
            if (i.distance > u.visibility.distance) break;
          }
          const o = n == r ? a : X(n, i, i.overlap || e, c);
          o && (!u || q(o, u) < 0) && (u = o);
        }
        return u;
      }
      function X(t, e, n, i) {
        switch (t.GetFocusable()) {
          case "none":
            return null;
          case "children":
            return z(t, e.overlap || n, i);
          case "self":
            return { child: t, visibility: e };
        }
      }
      function q(t, e) {
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
      function J(t, e, n) {
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
      function Q(t, e, n) {
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
          super("ownerDocument" in t ? T(t) : t, n),
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
      const nt = new F("ScrollSnap").Debug;
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
          const { scrollTop: t, scrollLeft: o } = vt(i);
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
          let t = O(r);
          t || (t = T(r));
          let e = ct(r),
            n = ut(t, st(t)),
            c = _t(t),
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
              !y(t, "y") ||
              ((u.top = at(a, n, e, "y")),
              (u.top = Q(u.top, -c.scrollTop, c.MaxScrollTop() - c.scrollTop)),
              o &&
                ((u.top = Math.min(l, Math.abs(u.top)) * (u.top < 0 ? -1 : 1)),
                (l -= Math.abs(u.top))),
              nt(`- checked y: ${u.top}`)),
            (i && "x" != i) ||
              !y(t, "x") ||
              ((u.left = at(a, n, e, "x")),
              (u.left = Q(
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
          let e = _t(t.element),
            i = e.scrollTop + t.top,
            o = e.scrollLeft + t.left;
          (o = Q(o, 0, e.MaxScrollLeft())),
            (i = Q(i, 0, e.MaxScrollTop())),
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
          s = _t(t);
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
      (0, o.gn)([_.a], gt.prototype, "ResetScrollState", null);
      const pt = new WeakMap();
      function _t(t) {
        let e = pt.get(t);
        return e || ((e = new gt(t)), pt.set(t, e)), e;
      }
      function vt(t) {
        const e = pt.get(t);
        return e
          ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
          : { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop };
      }
      const ft = new F("FocusNavigationMovement").Debug;
      var bt, Ct, Ft, At;
      !(function (t) {
        (t[(t.NONE = 0)] = "NONE"),
          (t[(t.COLUMN = 1)] = "COLUMN"),
          (t[(t.ROW = 2)] = "ROW"),
          (t[(t.COLUMN_REVERSE = 3)] = "COLUMN_REVERSE"),
          (t[(t.ROW_REVERSE = 4)] = "ROW_REVERSE"),
          (t[(t.GRID = 5)] = "GRID"),
          (t[(t.GEOMETRIC = 6)] = "GEOMETRIC");
      })(bt || (bt = {})),
        (function (t) {
          (t[(t.FIRST = 0)] = "FIRST"),
            (t[(t.LAST = 1)] = "LAST"),
            (t[(t.MAINTAIN_X = 2)] = "MAINTAIN_X"),
            (t[(t.MAINTAIN_Y = 3)] = "MAINTAIN_Y"),
            (t[(t.PREFERRED_CHILD = 4)] = "PREFERRED_CHILD");
        })(Ct || (Ct = {})),
        (function (t) {
          (t[(t.Standard = 0)] = "Standard"),
            (t[(t.NoTransform = 1)] = "NoTransform"),
            (t[(t.NoTransformSparseContent = 2)] = "NoTransformSparseContent");
        })(Ft || (Ft = {})),
        (function (t) {
          (t[(t.INVALID = 0)] = "INVALID"),
            (t[(t.FORWARD = 1)] = "FORWARD"),
            (t[(t.BACKWARD = 2)] = "BACKWARD");
        })(At || (At = {}));
      class wt {
        constructor(t, e, n) {
          (this.m_rgChildren = []),
            (this.m_iLastActiveChildIndex = -1),
            (this.m_bChildrenSorted = !1),
            (this.m_bAutoFocusChild = !1),
            (this.m_bMounted = !1),
            (this.m_bFocused = !1),
            (this.m_FocusCallbackList = new v.pB()),
            (this.m_bFocusWithin = !1),
            (this.m_FocusWithinCallbackList = new v.pB()),
            (this.m_ActionDescriptionsChangedCallbackList = new v.pB()),
            (this.m_RetainFocusParent = null),
            (this.m_rgNavigationHandlers = []),
            (this.m_rgFocusHandlers = []),
            (this.m_Tree = t),
            (this.m_Parent = e),
            (this.m_FocusRing = n),
            (this.m_nDepth = e ? e.m_nDepth + 1 : 0);
        }
        CreateHandle() {
          return new U(this);
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
          var e, n, o, s, r;
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
              null === (o = this.m_Properties) || void 0 === o
                ? void 0
                : o.noFocusRing;
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
              ? null === (s = this.m_FocusRing) ||
                void 0 === s ||
                s.OnBlur(i.APPLICATION, this, this)
              : !this.m_Properties.noFocusRing &&
                h &&
                this.BHasFocus() &&
                (null === (r = this.m_FocusRing) ||
                  void 0 === r ||
                  r.OnFocus(i.APPLICATION, this, this)),
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
              (p(
                !this.m_ActiveChild && this.BFocusWithin(),
                "Invalid focus state in AddChild"
              ),
              this.SetActiveChild(this.m_rgChildren.length - 1));
        }
        OnMount(t) {
          (this.m_element = t),
            this.m_Parent
              ? this.m_Parent.AddChild(this)
              : p(this == this.m_Tree.Root, "Only root should have no parent"),
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
              p(
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
                this.m_Tree.TransferFocus(i.APPLICATION, null)),
            this.UnregisterDOMEvents(),
            this.m_Parent
              ? this.m_Parent.RemoveChild(this)
              : p(this == this.m_Tree.Root, "Only root should have no parent");
        }
        RegisterDOMEvents() {
          !this.m_rgNavigationHandlers.length &&
            (this.m_rgChildren.length >= 2 ||
              this.m_Properties.layout != bt.NONE ||
              this.m_Properties.onMoveUp ||
              this.m_Properties.onMoveRight ||
              this.m_Properties.onMoveDown ||
              this.m_Properties.onMoveLeft) &&
            this.m_rgNavigationHandlers.push(
              u(this.m_element, this.OnNavigationEvent)
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
          p(-1 !== e, "Child was not found to remove"),
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
          this.m_bFocused || this.m_Tree.TransferFocus(i.BROWSER, this);
        }
        OnDOMBlur(t) {
          this.m_bFocused &&
            this.m_element.ownerDocument.hasFocus() &&
            this.m_Tree.TransferFocus(i.BROWSER, null);
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
            At.FORWARD,
            a.eV.INVALID
          );
          return this.InternalFocusDescendant(e, t);
        }
        BFocusLastChild(t) {
          const e = this.FindNextFocusableChildInDirection(
            this.m_rgChildren.length,
            At.BACKWARD,
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
                t == bt.ROW_REVERSE ||
                t == bt.COLUMN_REVERSE ||
                o == Ct.LAST
                  ? this.m_rgChildren.length - 1
                  : 0;
            }
            if ((o == Ct.MAINTAIN_X || o == Ct.MAINTAIN_Y || e) && n) {
              let i, s;
              o == Ct.MAINTAIN_X ? (i = "x") : o == Ct.MAINTAIN_Y && (i = "y"),
                i == g[n] && (s = this.m_Tree.GetLastFocusedMovementRect(g[n])),
                ft(
                  `Taking focus while preserving ${Ct[o]} preserved: ${i} movement: ${n}, node:`,
                  s || e
                );
              const a = this.ComputeRelativeDirection(t, bt.GRID);
              if (s || e) {
                const o = a == At.BACKWARD ? this.m_rgChildren.length - 1 : 0;
                r = this.FindClosestChildInNextAxiallyAlignedSet(
                  i || g[n],
                  a,
                  t,
                  s || e,
                  o,
                  this.m_rgChildren[o].GetBoundingRect()
                );
              } else if (i != g[n]) {
                const e = a == At.BACKWARD ? this.m_rgChildren.length : -1;
                r = this.FindNextFocusableChildInDirection(e, a, t);
              }
            } else if (o == Ct.PREFERRED_CHILD) {
              for (const e of this.m_rgChildren)
                if (
                  ((r = e.BWantsPreferredFocus() && e.FindFocusableNode(t)), r)
                )
                  return r;
            } else
              o == Ct.LAST &&
                (r = this.FindNextFocusableChildInDirection(
                  a + 1,
                  At.BACKWARD,
                  t
                ));
            return (
              r ||
                (r = this.FindNextFocusableChildInDirection(
                  a - 1,
                  At.FORWARD,
                  t
                )),
              r ||
                (r = this.FindNextFocusableChildInDirection(a, At.BACKWARD, t)),
              r || (i ? this : null)
            );
          }
          return null;
        }
        BVisibleChildTakeFocus(t) {
          var e;
          const n = z(
            this,
            this.Element
              ? this.Element.getBoundingClientRect()
              : document.body.getBoundingClientRect()
          );
          return (
            ft(
              `Focusing visible child, best child match is ${
                null === (e = null == n ? void 0 : n.child) || void 0 === e
                  ? void 0
                  : e.Element.className
              } - ${JSON.stringify(null == n ? void 0 : n.visibility)}`
            ),
            !!n && n.child.BTakeFocus(t)
          );
        }
        GetLayout() {
          if (this.m_Properties.layout) return this.m_Properties.layout;
          if (this.m_rgChildren.length < 2) return bt.NONE;
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
          const n = this.GetLayout();
          let o,
            s = this.ComputeRelativeDirection(t, n);
          if (
            (ft(
              `Handling navigation event ${a.eV[t]} - ${bt[n]} - ${At[s]}`,
              this.m_element
            ),
            s == At.INVALID)
          )
            return !1;
          if (this.m_Properties.focusable && this.m_bFocused)
            return ft("Skipping navigation within focused element"), !1;
          if ((this.EnsureChildrenSorted(!0), n == bt.GRID))
            o = this.FindNextFocusableChildInGrid(
              this.GetActiveChildIndex(),
              s,
              t
            );
          else {
            let e = this.GetActiveChildIndex();
            this.IsValidChildIndex(e) ||
              (e = s == At.FORWARD ? -1 : this.m_rgChildren.length),
              (o = this.FindNextFocusableChildInDirection(e, s, t));
          }
          if (o) {
            const n = Y(t);
            if (this.GetScrollIntoViewType() == Ft.NoTransformSparseContent) {
              const t =
                  ("y" == n ? window.innerHeight : window.innerWidth) /
                  (e ? 4.5 : 3.33),
                i = st(o.Element);
              if (
                (i.top > window.innerHeight &&
                  i.bottom > window.innerHeight + t) ||
                (i.bottom < 0 && i.top < -t) ||
                (i.left > window.innerWidth &&
                  i.right > window.innerWidth + t) ||
                (i.right < 0 && i.left < -t)
              )
                return (
                  ft(`Element too far away, scrolling ${t} on ${n} axis `),
                  dt(o.Element, o.Element, "smooth", n, t),
                  !0
                );
            }
            return this.m_Tree.TransferFocus(i.GAMEPAD, o, n), !0;
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
            : Ft.Standard;
        }
        GetRelativeDirection(t) {
          return this.ComputeRelativeDirection(t, this.GetLayout());
        }
        ComputeRelativeDirection(t, e) {
          let n = e == bt.ROW_REVERSE || e == bt.COLUMN_REVERSE;
          switch (e) {
            case bt.ROW:
            case bt.ROW_REVERSE:
              switch (t) {
                case a.eV.DIR_LEFT:
                  return n ? At.FORWARD : At.BACKWARD;
                case a.eV.DIR_RIGHT:
                  return n ? At.BACKWARD : At.FORWARD;
                default:
                  return At.INVALID;
              }
            case bt.COLUMN:
            case bt.COLUMN_REVERSE:
              switch (t) {
                case a.eV.DIR_UP:
                  return n ? At.FORWARD : At.BACKWARD;
                case a.eV.DIR_DOWN:
                  return n ? At.BACKWARD : At.FORWARD;
                default:
                  return At.INVALID;
              }
            case bt.GRID:
              switch (t) {
                case a.eV.DIR_LEFT:
                case a.eV.DIR_UP:
                  return n ? At.FORWARD : At.BACKWARD;
                case a.eV.DIR_RIGHT:
                case a.eV.DIR_DOWN:
                  return n ? At.BACKWARD : At.FORWARD;
                default:
                  return At.INVALID;
              }
            default:
              return At.INVALID;
          }
        }
        AdvanceIndex(t, e) {
          return t + (e == At.FORWARD ? 1 : -1);
        }
        FindNextFocusableChildInDirection(t, e, n) {
          let i = e == At.FORWARD ? 1 : -1;
          for (let e = t + i; e >= 0 && e < this.m_rgChildren.length; e += i) {
            const t = this.m_rgChildren[e].FindFocusableNode(n);
            if (t) return t;
          }
          return null;
        }
        ScanChildren(t, e, n) {
          let i = e == At.FORWARD ? 1 : -1;
          for (let e = t; e >= 0 && e < this.m_rgChildren.length; e += i)
            if (n(this.m_rgChildren[e], e)) return e;
          return -1;
        }
        FindNextFocusableChildInGrid(t, e, n) {
          const i = n == a.eV.DIR_UP || n == a.eV.DIR_DOWN,
            o = this.GetLastFocusElement();
          if (!o || o == this.m_element)
            return (
              p(
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
            let i = e == At.FORWARD ? 1 : -1;
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
          const a = { x: (l = i).x, y: l.y };
          var l;
          this.ScanChildren(o, e, (e) => {
            const n = e.GetBoundingRect();
            return (
              !(!s || H(g[t], s, n)) ||
              (r.push({ child: e, overlap: K(t, i, n), dist: $(t, a, n) }), !1)
            );
          }),
            e == At.BACKWARD && r.reverse(),
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
              ? (p(
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
                  (void 0 === a && (a = it ? Ft.NoTransform : Ft.Standard),
                  (null === (o = n.m_Properties) || void 0 === o
                    ? void 0
                    : o.fnScrollIntoViewHandler) &&
                    !1 !== n.m_Properties.fnScrollIntoViewHandler(t, e, n))
                )
                  continue;
                const l = n.m_element,
                  c =
                    a == Ft.NoTransform ||
                    a == Ft.NoTransformSparseContent ||
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
      (0, o.gn)([_.a], wt.prototype, "OnDOMFocus", null),
        (0, o.gn)([_.a], wt.prototype, "OnDOMBlur", null),
        (0, o.gn)([_.a], wt.prototype, "OnNavigationEvent", null);
      const Rt = "GamepadInput";
      var Nt;
      function It(t) {
        const [e, n] = t.split(".", 2);
        return (
          e &&
          n &&
          (function (t) {
            return "object" == typeof SteamClient && t in SteamClient;
          })(e) &&
          n in SteamClient[e]
        );
      }
      !(function (t) {
        (t[(t.PageUnloading = 0)] = "PageUnloading"),
          (t[(t.Unknown = 1)] = "Unknown"),
          (t[(t.None = 2)] = "None"),
          (t[(t.Basic = 3)] = "Basic"),
          (t[(t.Full = 4)] = "Full");
      })(Nt || (Nt = {}));
      class Dt {
        constructor(t) {
          (this.m_bIsGamepadInputExternallyControlled = !1),
            (this.m_NavigationController = t),
            It("BrowserView.RegisterForMessageFromParent") &&
            It("BrowserView.PostMessageToParent")
              ? ((this.m_bIsGamepadInputExternallyControlled = !0),
                (this.m_postMessage = new Tt()))
              : ((this.m_bIsGamepadInputExternallyControlled =
                  window.top != window.self),
                (this.m_postMessage = new St(window.top))),
            this.m_postMessage.RegisterForMessage(this.OnMessage),
            window.addEventListener("unload", this.PostPageUnloading),
            this.m_NavigationController.RegisterForUnhandledButtonDownEvents(
              (t) => this.PostButtonPressToSteam(t.detail.button)
            ),
            t.FocusChangedCallbacks.Register(this.OnFocusChanged),
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
          let e = Nt.Basic;
          window.bSupportsGamepadUI && (e = Nt.Full),
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
      (0, o.gn)([_.a], Dt.prototype, "OnFocusChanged", null),
        (0, o.gn)([_.a], Dt.prototype, "OnMessage", null),
        (0, o.gn)([_.a], Dt.prototype, "PostPageUnloading", null);
      class St {
        constructor(t) {
          (this.m_postWindow = t),
            window.addEventListener("message", this.OnMessage);
        }
        RegisterForMessage(t) {
          this.m_fnCallback = t;
        }
        PostMessage(t) {
          let e = JSON.stringify(t);
          this.m_postWindow.postMessage({ gamepadMessage: Rt, args: e }, "*");
        }
        OnMessage(t) {
          let e = null == t ? void 0 : t.data;
          if (e && e.gamepadMessage == Rt && e.args) {
            const t = JSON.parse(e.args);
            this.m_fnCallback(t);
          }
        }
      }
      (0, o.gn)([_.a], St.prototype, "OnMessage", null);
      class Tt {
        constructor() {
          SteamClient.BrowserView.RegisterForMessageFromParent(this.OnMessage);
        }
        RegisterForMessage(t) {
          this.m_fnCallback = t;
        }
        PostMessage(t) {
          let e = JSON.stringify(t);
          SteamClient.BrowserView.PostMessageToParent(Rt, e);
        }
        OnMessage(t, e) {
          if (t == Rt) {
            const t = JSON.parse(e);
            this.m_fnCallback(t);
          } else if ("Checkout" == t) {
            var n = JSON.parse(e);
            if ("paypal_success" == n.action)
              try {
                window.OnPayPalSuccess(n.transid);
              } catch (t) {}
            else if ("paypal_cancel" == n.action)
              try {
                window.OnPayPalCancel(n.transid);
              } catch (t) {}
          }
        }
      }
      (0, o.gn)([_.a], Tt.prototype, "OnMessage", null);
      n(143);
      class Ot extends a.oH {
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
        TranslateKey(t) {
          const e = t.code,
            n = t.ctrlKey,
            i = t.shiftKey,
            o =
              S(t.target) &&
              ("INPUT" === t.target.nodeName ||
                "TEXTAREA" === t.target.nodeName);
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
              return o ? a.eV.INVALID : a.eV.OK;
            case "Backspace":
              return o ? a.eV.INVALID : a.eV.SECONDARY;
            case "ArrowUp":
              return o ? a.eV.INVALID : a.eV.DIR_UP;
            case "ArrowDown":
              return o ? a.eV.INVALID : a.eV.DIR_DOWN;
            case "ArrowLeft":
              return o ? a.eV.INVALID : a.eV.DIR_LEFT;
            case "ArrowRight":
              return o ? a.eV.INVALID : a.eV.DIR_RIGHT;
          }
          return a.eV.INVALID;
        }
      }
      (0, o.gn)([_.a], Ot.prototype, "OnKeyDown", null),
        (0, o.gn)([_.a], Ot.prototype, "OnKeyUp", null),
        (0, o.gn)([_.a], Ot.prototype, "Reset", null);
      class yt extends wt {
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
          this.BHasFocus() || this.m_Tree.TransferFocus(i.APPLICATION, this);
        }
        OnWrappedTreeDeactivated() {
          this.m_wrappedTree.TransferFocus(i.APPLICATION, null);
        }
        OnWrappedTreeUnhandledButton(t) {
          return h(this.m_Parent.Element, "vgp_onbuttondown", t.detail), !1;
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
      (0, o.gn)([_.a], yt.prototype, "OnWrappedTreeActivated", null),
        (0, o.gn)([_.a], yt.prototype, "OnWrappedTreeDeactivated", null),
        (0, o.gn)([_.a], yt.prototype, "OnWrappedTreeUnhandledButton", null);
      const Et = "VirtualKeyboardMessage";
      function Lt(t) {
        return t && t.type === Et;
      }
      class Pt {
        constructor() {
          window.addEventListener("message", this.OnMessage);
        }
        ShowVirtualKeyboard() {
          this.SendMessage({ message: "ShowVirtualKeyboard" });
        }
        HideVirtualKeyboard(t) {
          this.SendMessage({ message: "HideVirtualKeyboard", msDelay: t });
        }
        OnBrowserViewMessage(t, e) {
          t == Et && this.InternalDispatchMessage(JSON.parse(e));
        }
        OnMessage(t) {
          this.InternalDispatchMessage(t.data);
        }
        InternalDispatchMessage(t) {
          Lt(t) && t.message;
        }
        SendMessage(t) {
          const e = Object.assign({ type: "VirtualKeyboardMessage" }, t);
          It("BrowserView.PostMessageToParent")
            ? SteamClient.BrowserView.PostMessageToParent(
                e.type,
                JSON.stringify(e)
              )
            : (p(
                window.parent && window.parent != window,
                "No parent window to post to"
              ),
              window.parent.postMessage(e, "*"));
        }
      }
      (0, o.gn)([_.a], Pt.prototype, "OnBrowserViewMessage", null),
        (0, o.gn)([_.a], Pt.prototype, "OnMessage", null);
      (0, o.gn)(
        [_.a],
        class {
          constructor(t, e) {
            (this.m_refKeyboard = e), t.on("message", this.OnMessage);
          }
          OnMessage(t, e, n) {
            if (t == Et) {
              const t = JSON.parse(e);
              if (Lt(t))
                switch (t.message) {
                  case "ShowVirtualKeyboard":
                    this.m_refKeyboard.ShowVirtualKeyboard();
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
      var Mt = n(222),
        Bt = n.n(Mt);
      function Gt(t) {
        let e = 0;
        t.children().each(function () {
          const t = r()(this),
            n = t.css("zIndex");
          "auto" === n
            ? t.css("zIndex", 0)
            : isNaN(parseInt(n)) || (e = Math.max(e, parseInt(n)));
        });
        const n = r()("<div/>", {
          style: `position: absolute; pointer-events: none; top: 0; left: 0; z-index: ${
            (e || 100) + 1
          }; width: 0; height: 0; padding: 0; margin: 0; background: none; overflow: visible; display: block;`,
        });
        let i = null,
          o = null,
          s = null,
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
              s && (window.clearInterval(s), (s = null)),
              t && t.BWantsFocusRing())
            ) {
              i = r()("<div/>", {
                style: "position: absolute; pointer-events: none; ",
                class: Bt().FocusRing,
              });
              let e = h(t);
              d(e), n.append(i), (s = window.setInterval(() => m(t), 200));
            }
          };
        return {
          OnBlur: () => g(null),
          OnFocus: (t, e) => g(e),
          OnFocusChange: (t, e, n) => g(n),
          OnForceMeasureFocusRing: () => m(o),
        };
      }
      function kt(t) {
        return !!t.is_repeat;
      }
      Object.seal({ onMoveUp: Vt, onMoveDown: Vt }),
        Object.seal({ onMoveRight: Vt, onMoveLeft: Vt });
      function Vt(t, e) {
        if (t.is_repeat) return !1;
        const n = e.GetRelativeDirection(t.button);
        return n == At.FORWARD
          ? e.BFocusFirstChild(i.GAMEPAD)
          : n == At.BACKWARD && e.BFocusLastChild(i.GAMEPAD);
      }
      function xt(t) {
        return t ? Function("event", t) : null;
      }
      function Wt() {
        return !0;
      }
      function Ut(t) {
        return "BlockMovement" == t
          ? Wt
          : "RepeatNavigationBoundary" == t
          ? kt
          : t
          ? Function("detail", t)
          : null;
      }
      function Ht(t) {
        this.click(), t.stopPropagation();
      }
      function Kt(t) {
        r()(this).find('a, input[type="checkbox"]')[0].click();
      }
      function $t(t) {
        const e = t.currentTarget;
        if (!S(e)) return !1;
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
      function jt(t, e) {
        const n = window.history.state;
        if (n && n[t]) {
          const i = n[t];
          !(function (t, e, n = 0) {
            R.RestoreSerializedNavState(t, e, n);
          })(e, i);
        }
      }
      var Yt;
      !(function (t) {
        (t[(t.Unknown = 0)] = "Unknown"),
          (t[(t.NotNeeded = 1)] = "NotNeeded"),
          (t[(t.InReactTree = 2)] = "InReactTree");
      })(Yt || (Yt = {}));
      const zt = new Pt();
      let Xt,
        qt = !1,
        Jt = null,
        Qt = null,
        Zt = null;
      function te(t) {
        qt ||
          ((Jt = new W()),
          (window.legacyWebFocusNavController = Jt),
          (Xt = new Dt(Jt)),
          Xt.BIsGamepadInputExternallyControlled() || Jt.RegisterInputSource(t),
          (function (t) {
            r()("html").addClass("gpnav_active");
            const e = r()("body"),
              n = t.NewGamepadNavigationTree(window, "legacy"),
              i = Gt(e);
            (n.Root.m_FocusRing = i),
              n.Root.SetProperties({
                scrollIntoViewType: Ft.NoTransformSparseContent,
              }),
              (window.__nav_tree_root = n),
              ne.set(document.body, n.Root),
              se(document.body, n.Root),
              ce(void 0, !0),
              t.RegisterGamepadNavigationTree(n, !1),
              r()(document.body).on("vgp_onbuttondown", function (t) {
                n.HandleButtonDownEventAsLogicalEvent(t.originalEvent);
              }),
              u(document.body, $t);
            new MutationObserver(ee).observe(document.body, {
              childList: !0,
              subtree: !0,
            }),
              (a = !0),
              (it = a),
              (o = "legacy_web_root"),
              (s = n.Root),
              window.addEventListener("popstate", () => jt(o, s)),
              s.Tree.Controller.FocusChangedCallbacks.Register(() => {
                var t;
                window.history.replaceState(
                  Object.assign(Object.assign({}, window.history.state), {
                    [o]: ((t = s), R.SerializeNavState(t, !0, !1)),
                  }),
                  null
                );
              }),
              jt(o, s),
              Object.assign(window, pe),
              window.dispatchEvent(new CustomEvent("vgp_gamepadnavready"));
            var o, s;
            var a;
          })(Jt)),
          (qt = !0);
      }
      function ee(t) {
        for (const e of t) {
          const t = [],
            n = [];
          E(
            e,
            (e) => t.push(e),
            (t) => n.push(t)
          ),
            t.length && ce(r()(t)),
            n.length && le(r()(n));
        }
      }
      const ne = new WeakMap(),
        ie = new WeakMap();
      let oe = [];
      function se(t, e) {
        if (e instanceof wt) {
          const n = e.GetDepth();
          oe[n] || (oe[n] = []), oe[n].push([t, e]);
        }
        ne.set(t, e);
      }
      function re(t, e) {
        const n = ie.has(t) ? ie.get(t) : [];
        n.push(e), ie.set(t, n);
      }
      function ae(t) {
        return "jquery" in t
          ? ne.get(t[0]) || Yt.Unknown
          : ne.get(t) || Yt.Unknown;
      }
      function le(t) {
        t.find("*")
          .addBack()
          .each(function () {
            var t;
            null === (t = ie.get(this)) ||
              void 0 === t ||
              t.forEach((t) => t()),
              ne.delete(this),
              ie.delete(this),
              r()(this).attr("data-nav-modal") && ge();
          });
      }
      function ce(t, e = !1) {
        performance.now();
        const n =
          "a,button,textarea,input:not(input[type=hidden]),label:not([for]),[data-panel],[data-react-nav-root],[data-nav-modal]";
        r()(n, t)
          .addBack(n)
          .each(function () {
            var t;
            (function (t) {
              return "jquery" in t ? ne.has(t[0]) : ne.has(t);
            })((t = this)) || de(t);
          }),
          (function () {
            for (let t = oe.length - 1; t >= 0; t--)
              if (oe[t])
                for (let [e, n] of oe[t])
                  re(e, n.Tree.RegisterNavigationItem(n, e));
            oe = [];
          })();
      }
      function ue(t) {
        le(r()(t)), ce(r()(t));
      }
      function he(t) {
        const e = r()(t.Element);
        return (
          !e.data("gpFocusDisabled") &&
          e.is(":visible") &&
          "hidden" != e.css("visibility") &&
          ((e.outerWidth() > 0 && e.outerHeight() > 0) ||
            "hidden" !== e.css("overflow"))
        );
      }
      function de(t) {
        var e, n, s, a, l, h, g;
        const _ = r()(t),
          v = me(t);
        if (v instanceof yt || v == Yt.InReactTree)
          return se(t, Yt.InReactTree), Yt.InReactTree;
        const f = v.Tree;
        let b = _.data("reactNavRoot")
            ? new yt(_.data("reactNavRoot"), v)
            : f.CreateNode(v, v.m_FocusRing),
          C = _.data("panel") || {};
        if (
          (r()(t).attr("data-nav-modal") &&
            (function (t) {
              Qt &&
                (p(
                  !1,
                  "Creating a new modal nav tree while one already exists. A modal opening another modal is not currently supported."
                ),
                ge());
              Qt = Jt.NewGamepadNavigationTree(window, "modal_dialog");
              const e = Gt(r()("body"));
              (Qt.Root.m_FocusRing = e),
                Qt.Root.SetProperties({}),
                se(t, Qt.Root),
                ce(t),
                u(Qt.Root.m_element, (t) => !0),
                (Zt = Jt.RegisterGamepadNavigationTree(Qt, !1));
            })(t),
          "A" == t.tagName || "BUTTON" == t.tagName || "LABEL" == t.tagName)
        )
          (C.focusable = null === (e = C.focusable) || void 0 === e || e),
            (C.clickOnActivate =
              null === (n = C.clickOnActivate) || void 0 === n || n);
        else if ("INPUT" == t.tagName)
          switch (
            ((C.focusable = null === (s = C.focusable) || void 0 === s || s),
            t.getAttribute("type"))
          ) {
            case "radio":
            case "checkbox":
              C.clickOnActivate =
                null === (a = C.clickOnActivate) || void 0 === a || a;
              break;
            case "text":
            case "password":
              C.enableVirtualKeyboard =
                null === (l = C.enableVirtualKeyboard) || void 0 === l || l;
          }
        else
          "TEXTAREA" == t.tagName &&
            ((C.focusable = null === (h = C.focusable) || void 0 === h || h),
            (C.enableVirtualKeyboard =
              null === (g = C.enableVirtualKeyboard) || void 0 === g || g));
        const F = C["flow-children"];
        delete C["flow-children"];
        let {
            clickOnActivate: A,
            maintainX: w,
            maintainY: R,
            enableVirtualKeyboard: N,
            preferredChild: I,
            onOKActionDescription: D,
            onCancelActionDescription: S,
            onSecondaryActionDescription: T,
            onOptionsActionDescription: O,
            onMenuActionDescription: y,
            actionDescriptionMap: E,
            onOKButton: L,
            onCancelButton: P,
            onSecondaryButton: M,
            onOptionsButton: B,
            onMenuButton: G,
            onMoveUp: k,
            onMoveRight: V,
            onMoveDown: x,
            onMoveLeft: W,
            onGamepadDirection: U,
            bFocusRingRoot: H,
            type: K,
          } = C,
          $ = (0, o._T)(C, [
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
          j = xt(L),
          Y = xt(P),
          z = xt(M),
          X = xt(B),
          q = xt(G),
          J = xt(U);
        K || (K = "Panel"),
          "PanelGroup" == K &&
            ({ onOKButtonHandler: j, onCancelButtonHandler: Y } = (function (
              t,
              e
            ) {
              const {
                onOKButtonHandler: n,
                onCancelButtonHandler: o,
                navNode: s,
              } = t;
              return (
                (e.focusable = !1 !== e.focusable),
                {
                  onOKButtonHandler: (t) =>
                    !(
                      !s.BHasFocus() ||
                      !s.BChildTakeFocus(i.GAMEPAD, t.detail.button)
                    ) ||
                    (!!n && n(t)),
                  onCancelButtonHandler: (t) =>
                    !(
                      !s.BFocusWithin() ||
                      s.BHasFocus() ||
                      !s.BTakeFocus(i.GAMEPAD, t.detail.button)
                    ) ||
                    (!!o && o(t)),
                }
              );
            })(
              { onOKButtonHandler: j, onCancelButtonHandler: Y, navNode: b },
              $
            )),
          j &&
            re(
              _[0],
              (function (t, e) {
                return c(t, "vgp_onok", d(e));
              })(_[0], j)
            ),
          Y &&
            re(
              _[0],
              (function (t, e) {
                return c(t, "vgp_oncancel", d(e));
              })(_[0], Y)
            ),
          z &&
            T &&
            re(
              _[0],
              (function (t, e) {
                return c(t, "vgp_onsecondaryaction", d(e));
              })(_[0], z)
            ),
          X &&
            O &&
            re(
              _[0],
              (function (t, e) {
                return c(t, "vgp_onoptions", d(e));
              })(_[0], X)
            ),
          q &&
            y &&
            re(
              _[0],
              (function (t, e) {
                return c(t, "vgp_onmenu", d(e));
              })(_[0], q)
            ),
          J && re(_[0], u(_[0], J));
        const Q = (function (t, e, n, i) {
            const o = {};
            return (
              t && (o.onMoveUp = Ut(t)),
              e && (o.onMoveRight = Ut(e)),
              n && (o.onMoveDown = Ut(n)),
              i && (o.onMoveLeft = Ut(i)),
              o
            );
          })(k, V, x, W),
          Z = F
            ? (function (t) {
                switch (t) {
                  case "column":
                    return bt.COLUMN;
                  case "column-reverse":
                    return bt.COLUMN_REVERSE;
                  case "row":
                    return bt.ROW;
                  case "row-reverse":
                    return bt.ROW_REVERSE;
                  case "grid":
                    return bt.GRID;
                  default:
                    return bt.NONE;
                }
              })(F)
            : bt.NONE;
        Z != bt.NONE && ($.layout = Z),
          w
            ? ($.navEntryPreferPosition = Ct.MAINTAIN_X)
            : R
            ? ($.navEntryPreferPosition = Ct.MAINTAIN_Y)
            : I && ($.navEntryPreferPosition = Ct.PREFERRED_CHILD),
          A &&
            (!1 !== $.focusable && ($.focusable = !0),
            _.on("vgp_onok", "firstChild" === A ? Kt : Ht),
            re(t, () => {
              _.off("vgp_onok");
            })),
          N &&
            (_.on("vgp_onok.vkbindings", () => zt.ShowVirtualKeyboard()),
            _.on("click.vkbindings", () => zt.ShowVirtualKeyboard()),
            _.on("blur.vkbindings", () => {
              document.hasFocus() &&
                document.activeElement != t &&
                zt.HideVirtualKeyboard();
            }),
            re(t, () => {
              _.off(".vkbindings");
            })),
          $.focusable && void 0 === _.attr("tabIndex") && _.attr("tabIndex", 0),
          $.focusable &&
            b.FocusCallbackList.Register((e) =>
              (function (t, e) {
                e ? r()(t).addClass("gpfocus") : r()(t).removeClass("gpfocus");
              })(t, e)
            ),
          H &&
            ((b.m_FocusRing = Gt(_)),
            "static" == _.css("position") && _.css("position", "relative"));
        const tt = m({
            onOKActionDescription: D,
            onCancelActionDescription: S,
            onSecondaryActionDescription: T,
            onOptionsActionDescription: O,
            onMenuActionDescription: y,
            actionDescriptionMap: E,
          }),
          et = Object.assign(
            Object.assign({ fnCanTakeFocus: he, actionDescriptionMap: tt }, Q),
            $
          );
        return b.SetProperties(et), se(t, b), b;
      }
      function me(t) {
        const e = t.parentElement;
        if (!e) return console.error("no parent"), null;
        let n = ae(e);
        if (n == Yt.Unknown)
          n = (function (t) {
            let e = !1;
            switch (t.tagName) {
              case "A":
              case "INPUT":
              case "TEXTAREA":
                e = !0;
                break;
              case "DIV":
                if (j(t) != bt.COLUMN) e = !0;
                else {
                  const n = j(t.parentElement);
                  (n != bt.ROW && n != bt.ROW_REVERSE) || (e = !0);
                }
            }
            let n = Yt.NotNeeded;
            return e ? (n = de(t)) : se(t, n), n;
          })(e);
        else if (n == Yt.InReactTree) return n;
        return n instanceof wt ? n : me(e);
      }
      function ge(t) {
        Zt && (Zt(), (Zt = null), (Qt = null)),
          t && r()(t).removeAttr("data-nav-modal");
      }
      const pe = {
        InstrumentFocusElements: ce,
        ForceUpdateFocusElements: ue,
        GPNavFocusChild: function (t) {
          let e = ae(t[0]);
          return (
            e instanceof wt || (e = me(t[0])),
            e instanceof wt && e.BTakeFocus(i.APPLICATION),
            !1
          );
        },
        GPOnShowingModalWindow: function (t) {
          const e = t;
          return r()(e).attr("data-nav-modal", "true"), ue(e), () => ge(e);
        },
        GPShowVirtualKeyboard: function (t = !0) {
          t ? zt.ShowVirtualKeyboard() : zt.HideVirtualKeyboard();
        },
        GPNavUpdateActionDescriptions: function (t, e) {
          const n = ae(t);
          n instanceof wt &&
            n.SetProperties(
              Object.assign(Object.assign({}, n.m_Properties), {
                actionDescriptionMap: m(e),
              })
            );
        },
      };
    },
  },
]);

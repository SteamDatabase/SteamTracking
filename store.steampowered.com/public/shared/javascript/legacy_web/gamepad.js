/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunklegacy_web = self.webpackChunklegacy_web || []).push([
  [511],
  {
    222: (e) => {
      e.exports = {
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
    790: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { InitializeGamepadNavigation: () => Qe });
      var i,
        o = n(655),
        s = n(311),
        r = n.n(s),
        a = n(187);
      !(function (e) {
        (e[(e.GAMEPAD = 0)] = "GAMEPAD"),
          (e[(e.KEYBOARD = 1)] = "KEYBOARD"),
          (e[(e.APPLICATION = 2)] = "APPLICATION"),
          (e[(e.BROWSER = 3)] = "BROWSER");
      })(i || (i = {}));
      let l = {
        [a.eV.OK]: "vgp_onok",
        [a.eV.CANCEL]: "vgp_oncancel",
        [a.eV.SECONDARY]: "vgp_onsecondaryaction",
        [a.eV.OPTIONS]: "vgp_onoptions",
        [a.eV.START]: "vgp_onmenu",
      };
      function c(e, t, n) {
        return (
          e.addEventListener(t, n),
          () =>
            (function (e, t, n) {
              e.removeEventListener(t, n);
            })(e, t, n)
        );
      }
      function u(e, t) {
        return c(e, "vgp_ondirection", d(t));
      }
      function h(e, t, n) {
        let i = e;
        if (null === i || !i.ownerDocument || !i.ownerDocument.defaultView)
          return !0;
        let o = new i.ownerDocument.defaultView.CustomEvent(t, {
          bubbles: !0,
          cancelable: !0,
          detail: n,
        });
        return e.dispatchEvent(o);
      }
      function d(e) {
        return (t) => {
          !1 !== e(t) && (t.stopPropagation(), t.preventDefault());
        };
      }
      function m(e) {
        const {
            onOKActionDescription: t,
            onCancelActionDescription: n,
            onSecondaryActionDescription: i,
            onOptionsActionDescription: o,
            onMenuActionDescription: s,
            actionDescriptionMap: r,
          } = e,
          l = Object.assign({}, r);
        return (
          void 0 !== t && (l[a.eV.OK] = t),
          void 0 !== n && (l[a.eV.CANCEL] = n),
          void 0 !== i && (l[a.eV.SECONDARY] = i),
          void 0 !== o && (l[a.eV.OPTIONS] = o),
          void 0 !== s && (l[a.eV.START] = s),
          l
        );
      }
      const g = { x: "y", y: "x" };
      function p(e, t, ...n) {
        console.assert
          ? 0 == n.length
            ? console.assert(!!e, t)
            : console.assert(!!e, t, ...n)
          : e || console.warn(t, ...n);
      }
      var _ = n(922),
        v = n(58);
      class f extends class {
        GetObject(e) {
          return (0, o.mG)(this, void 0, void 0, function* () {
            try {
              const t = yield this.GetString(e);
              return t ? JSON.parse(t) : null;
            } catch (e) {
              return null;
            }
          });
        }
        StoreObject(e, t) {
          return (0, o.mG)(this, void 0, void 0, function* () {
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
      !(function (e) {
        (e[(e.Debug = 0)] = "Debug"),
          (e[(e.Info = 1)] = "Info"),
          (e[(e.Warning = 2)] = "Warning"),
          (e[(e.Error = 3)] = "Error");
      })(C || (C = {}));
      class F {
        constructor(e, t) {
          (this.m_fnIdGenerator = null),
            (this.m_sName = e),
            (this.m_fnIdGenerator = t),
            A.Get().RegisterLogName(e);
        }
        Debug(...e) {
          this.Log(C.Debug, ...e);
        }
        Info(...e) {
          this.Log(C.Info, ...e);
        }
        Warning(...e) {
          this.Log(C.Warning, ...e);
        }
        Error(...e) {
          this.Log(C.Error, ...e);
        }
        Assert(e, ...t) {
          e || this.Log(C.Error, "Assertion failed:", ...t);
        }
        Log(e, ...t) {
          var n, i;
          if (e == C.Debug && !A.Get().IsDebugLogEnabled(this.m_sName)) return;
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
          N(e, A.Get().IncludeBacktraceInLog, o, this.m_sName, ...t);
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
        LogAsLogManager(...e) {
          N(
            C.Info,
            this.IncludeBacktraceInLog,
            "LogManager",
            "LogManager",
            ...e
          );
        }
        LoadSettings() {
          return (0, o.mG)(this, void 0, void 0, function* () {
            (this.m_bLoading = !0),
              (this.m_bIncludeBacktraceInLog =
                !!(yield this.m_Storage.GetObject(
                  A.k_IncludeBacktraceInLog_StorageKey
                )));
            const e = yield this.m_Storage.GetObject(
              A.k_EnabledLogNames_StorageKey
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
          return (0, o.mG)(this, void 0, void 0, function* () {
            this.SetDebugLogEnabled(e, !this.IsDebugLogEnabled(e));
          });
        }
        SetDebugLogEnabled(e, t) {
          return (0, o.mG)(this, void 0, void 0, function* () {
            t
              ? this.m_setEnabledDebugLogs.add(e)
              : this.m_setEnabledDebugLogs.delete(e),
              this.m_SettingsChangedCallback.Dispatch(),
              yield this.SaveSettings();
          });
        }
        SetAllDebugLogsEnabled(e) {
          return (0, o.mG)(this, void 0, void 0, function* () {
            (this.m_setEnabledDebugLogs = new Set(e ? b : [])),
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
          return (0, o.mG)(this, void 0, void 0, function* () {
            (this.m_bIncludeBacktraceInLog = e),
              this.m_SettingsChangedCallback.Dispatch(),
              yield this.SaveSettings();
          });
        }
      }
      function N(e, t, n, i, ...o) {
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
                case C.Debug:
                  return String.fromCodePoint(128027);
                case C.Info:
                  return String.fromCodePoint(8505);
                case C.Warning:
                  return String.fromCodePoint(9888);
                case C.Error:
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
        constructor(e) {
          this.m_root = e;
        }
        static SerializeNavState(e, t = !0, n = !0) {
          return {
            root: R.SerializeNavNode(e, t, n),
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
              (i = o.map((e, t) => R.SerializeNavNode(e, t == s || n, n))),
            { sNavKey: e.NavKey, iActiveChild: s, rgChildren: i }
          );
        }
        static RestoreSerializedNavState(e, t, n = 0) {
          const { root: o, bHadFocus: s } = t;
          e.Tree.Controller.RestoreHistoryTransaction(() => {
            R.RestoreSerializedNavNode(e, o),
              (1 == n || (0 == n && s)) && e.BTakeFocus(i.APPLICATION);
          });
        }
        static RestoreSerializedNavNode(e, t) {
          var n;
          const { sNavKey: i, iActiveChild: o, rgChildren: s } = t;
          if (
            (i && p(i == e.NavKey, "navkey mismatch"),
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
              t && R.RestoreSerializedNavNode(t, e);
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
              R.RestoreSerializedNavNode(t[r], s[a]), r++, a++;
            }
          }
        }
      }
      class I extends R {
        constructor() {
          super(...arguments), (this.m_rgHistory = []);
        }
        PushState() {
          this.m_rgHistory.push(R.SerializeNavState(this.m_root));
        }
        PopState(e = 0) {
          this.m_rgHistory.length &&
            R.RestoreSerializedNavState(this.m_root, this.m_rgHistory.pop(), e);
        }
      }
      class D extends R {
        constructor() {
          super(...arguments), (this.m_mapHistory = new Map());
        }
        SaveState(e) {
          this.m_mapHistory.set(e, R.SerializeNavState(this.m_root));
        }
        RestoreState(e, t = 0) {
          const n = this.m_mapHistory.get(e);
          return (
            !!n &&
            (console.log(`Restoring history for state ${e}`),
            R.RestoreSerializedNavState(this.m_root, n, t),
            !0)
          );
        }
      }
      var S = n(882);
      function w(e) {
        return null != e && void 0 !== e.focus;
      }
      function T(e) {
        let t;
        return e && (t = e.ownerDocument.defaultView), t;
      }
      function O(e, t) {
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
      function y(e, t) {
        if (!("ownerDocument" in e)) return !0;
        const n = e.ownerDocument.defaultView.getComputedStyle(e),
          i = "x" === t ? n.overflowX : n.overflowY;
        return "auto" === i || "scroll" === i;
      }
      function E(e, t, n) {
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
      const L = new F("FocusNavigation").Debug,
        P = new F("GamepadEvents").Debug;
      class B {
        constructor(e, t) {
          (this.m_onActivateCallbacks = new v.pB()),
            (this.m_onDeactivateCallbacks = new v.pB()),
            (this.m_onActiveFocusStateChangedCallbacks = new v.pB()),
            (this.m_lastFocusNodeXMovement = new M()),
            (this.m_lastFocusNodeYMovement = new M()),
            (this.m_DeferredFocus = new G(this)),
            (this.m_Controller = e),
            (this.m_ID = t),
            (this.m_Root = new Ae(this, null, null)),
            this.m_Root.SetProperties({ layout: fe.COLUMN }),
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
        BUseVirtualFocus() {
          return this.m_bVirtualFocus;
        }
        CreateNode(e, t) {
          return new Ae(this, e, t);
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
            this.m_Controller.IsActiveNavTree(this) ||
            this.m_Controller.IsActiveFocusNavTree(this)
          );
        }
        BIsActiveFocus() {
          return this.m_Controller.IsActiveFocusNavTree(this);
        }
        SetIsMounted() {
          const e = this.m_Root.Element;
          (e.__nav_tree = this),
            e.__nav_wrapper && e.__nav_wrapper.BindTree(this),
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
          let { bUnhandled: t, bHadLogicalEventMapping: n } = (function (e) {
            const t = [
              a.eV.DIR_UP,
              a.eV.DIR_DOWN,
              a.eV.DIR_LEFT,
              a.eV.DIR_RIGHT,
            ];
            let n = !0,
              i = !1,
              o = l[e.detail.button];
            return (
              o
                ? ((i = !0), (n = h(e.target, o, e.detail)))
                : -1 !== t.indexOf(e.detail.button) &&
                  ((i = !0), (n = h(e.target, "vgp_ondirection", e.detail))),
              { bUnhandled: n, bHadLogicalEventMapping: i }
            );
          })(e);
          return (
            P(
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
          const o = this.m_lastFocusNode;
          if (
            o == t &&
            (this.m_bWasActiveForLastFocusChange || !this.BIsActive())
          )
            return;
          L(
            `Transfer focus in ${this.id}, source: ${i[e]}, from/to:`,
            null == o ? void 0 : o.m_element,
            null == t ? void 0 : t.m_element
          );
          const s = { blurredNode: o, focusedNode: t, source: e },
            r = (function (e, t) {
              if (!t || !e) return null;
              let n = t,
                i = e;
              for (; n.GetDepth() > i.GetDepth() && n.Parent; ) n = n.Parent;
              for (; i.GetDepth() > n.GetDepth() && i.Parent; ) i = i.Parent;
              for (; n != i && n && i; ) (n = n.Parent), (i = i.Parent);
              return n;
            })(o, t);
          if (o) {
            o.SetHasFocus(!1);
            for (let e = o; e && e != r; e = e.Parent) e.SetFocusWithin(!1);
          }
          if (t) {
            t.SetHasFocus(!0);
            for (let e = t; e && e != r; e = e.Parent) e.SetFocusWithin(!0);
          }
          let a = this.m_Controller.OnFocusChangeStart(e, this, o, t);
          t && t.SetDOMFocusAndScroll(e, o),
            o &&
              (h(o.Element, "vgp_onblur", s),
              !o.m_FocusRing ||
                (t && o.m_FocusRing == t.m_FocusRing) ||
                o.m_FocusRing.OnBlur(e, o, t)),
            t &&
              (h(t.Element, "vgp_onfocus", s),
              t.m_FocusRing &&
                (o && t.m_FocusRing == o.m_FocusRing
                  ? t.m_FocusRing.OnFocusChange(e, o, t)
                  : t.m_FocusRing.OnFocus(e, t, o))),
            (this.m_lastFocusNode = t),
            (this.m_bWasActiveForLastFocusChange = this.BIsActive()),
            "x" == n
              ? this.m_lastFocusNodeXMovement.SetNode(t.Element)
              : "y" == n
              ? this.m_lastFocusNodeYMovement.SetNode(t.Element)
              : (this.m_lastFocusNodeXMovement.Reset(),
                this.m_lastFocusNodeYMovement.Reset()),
            this.m_Controller.OnFocusChangeComplete(a);
        }
      }
      class M {
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
      class G {
        constructor(e) {
          (this.m_bSuppressed = !1), (this.m_tree = e);
        }
        RequestFocus(e, t) {
          e
            ? ((this.m_target = Object.assign(Object.assign({}, t), {
                node: e,
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
        BIsQueuedFocusNode(e) {
          return this.m_target && this.m_target.node == e;
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
            const { node: e, bFocusDescendant: t } = this.m_target;
            (this.m_target = void 0),
              L(
                `DeferredFocus in ${this.m_tree.id} - focusing ${
                  t ? "descendant of" : "node"
                } ${e.NavKey}`
              ),
              t
                ? e.BChildTakeFocus(i.APPLICATION) ||
                  this.m_tree.TransferFocus(i.APPLICATION, e)
                : e.BTakeFocus(i.APPLICATION);
          }
        }
      }
      const k = new F("FocusNavigation").Debug,
        V = (new F("GamepadEvents").Debug, "focus-nav-show-debug-focus-ring");
      class x {
        constructor() {
          (this.m_rgGamepadInputSources = []),
            (this.m_rgGamepadNavigationTrees = []),
            (this.m_LastActiveNavTree = null),
            (this.m_LastActiveFocusNavTree = null),
            (this.m_bGlobalEventsInitialized = !1),
            (this.m_bSuppressGamepadInput = !1),
            (this.m_FocusChangedCallbacks = new v.pB()),
            (this.m_UnhandledButtonEventsCallbacks = new v.pB()),
            (this.m_navigationSource = (0, v.vq)({
              eActivationSourceType: a.Rr.UNKNOWN,
              nActiveGamepadIndex: -1,
              nLastActiveGamepadIndex: -1,
            })),
            (this.m_bShowDebugFocusRing = (0, v.vq)(!1)),
            (this.m_bRestoringHistory = !1),
            (this.m_fnGamepadEventUpdateBatcher = (e) => e()),
            (this.m_iFocusChangeStack = 0),
            (window.FocusNavController = this),
            this.m_bShowDebugFocusRing.Set(
              "shown" == sessionStorage.getItem(V)
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
          this.m_rgGamepadInputSources.push(e),
            e.RegisterForGamepadButtonDown(this.OnButtonDown),
            e.RegisterForGamepadButtonUp(this.OnButtonUp),
            e.RegisterForNavigationTypeChange(this.OnNavigationTypeChange);
        }
        SetGamepadEventUpdateBatcher(e) {
          this.m_fnGamepadEventUpdateBatcher = e;
        }
        get FocusChangedCallbacks() {
          return this.m_FocusChangedCallbacks;
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
          let n = document.activeElement;
          if (this.m_LastActiveNavTree) {
            let o = this.m_navigationSource.Value.eActivationSourceType;
            if (
              !(
                (o != a.Rr.GAMEPAD && o != a.Rr.KEYBOARD) ||
                this.m_LastActiveNavTree.GetLastFocusedNode() ||
                (t && this.m_LastActiveNavTree.TakeFocus(i.GAMEPAD, !0),
                this.BGlobalGamepadButton(e))
              )
            )
              return null;
            this.m_LastActiveNavTree.GetLastFocusedNode() &&
              (n = this.m_LastActiveNavTree.GetLastFocusedNode().Element);
          }
          return n;
        }
        ChangeNavigationSource(e, t) {
          let n = this.m_navigationSource.Value,
            i = n.nLastActiveGamepadIndex;
          n.nActiveGamepadIndex >= 0 && (i = n.nActiveGamepadIndex),
            this.m_navigationSource.Set({
              eActivationSourceType: e,
              nActiveGamepadIndex: t,
              nLastActiveGamepadIndex: i,
            });
        }
        OnButtonDown(e, t, n, i) {
          var o;
          if (this.m_bSuppressGamepadInput)
            return void k(
              "Ignoring button press - gamepad input is suppressed by parent window"
            );
          this.ChangeNavigationSource(t, n);
          const s = this.GetEventTarget(e, !0);
          k(
            `Firing ${a.eV[e]} in tree ${
              null === (o = this.m_LastActiveNavTree) || void 0 === o
                ? void 0
                : o.id
            } at `,
            s
          ),
            this.BatchedUpdate(() =>
              h(s, "vgp_onbuttondown", { button: e, source: t, is_repeat: i })
            );
        }
        OnButtonUp(e, t, n) {
          if (this.m_bSuppressGamepadInput) return;
          this.ChangeNavigationSource(t, n);
          const i = this.GetEventTarget();
          this.BatchedUpdate(() =>
            h(i, "vgp_onbuttonup", { button: e, source: t, is_repeat: !1 })
          );
        }
        BatchedUpdate(e) {
          this.m_fnGamepadEventUpdateBatcher(e);
        }
        OnNavigationTypeChange(e) {
          var t;
          if (
            (this.ChangeNavigationSource(e, -1),
            document.hasFocus() &&
              (e == a.Rr.MOUSE || e == a.Rr.TOUCH) &&
              this.m_LastActiveNavTree)
          ) {
            const e = this.m_LastActiveNavTree.GetLastFocusedNode(),
              n = (function (e) {
                if (!w(e)) return !1;
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
            null === (t = this.m_LastActiveNavTree) ||
              void 0 === t ||
              t.TransferFocus(i.BROWSER, n);
          }
        }
        NewGamepadNavigationTree(e) {
          return new B(this, e);
        }
        RegisterGamepadNavigationTree(e, t) {
          return (
            e.SetIsMounted(),
            t
              ? this.m_rgGamepadNavigationTrees.unshift(e)
              : (this.m_rgGamepadNavigationTrees.push(e),
                this.SetActiveNavTree(e, !0)),
            this.m_bGlobalEventsInitialized || this.BindGlobalEventHandlers(),
            () => this.UnregisterGamepadNavigationTree(e)
          );
        }
        UnregisterGamepadNavigationTree(e) {
          S.Zf(this.m_rgGamepadNavigationTrees, e),
            this.m_LastActiveNavTree == e &&
              ((this.m_LastActiveNavTree = null),
              this.SetActiveNavTree(null, !0));
        }
        GetGamepadNavTreeByID(e) {
          const t = this.m_rgGamepadNavigationTrees.findIndex((t) => t.id == e);
          return t >= 0 ? this.m_rgGamepadNavigationTrees[t] : null;
        }
        OnGamepadNavigationTreeActivated(e, t = !1) {
          this.SetActiveNavTree(e, t);
        }
        OnGamepadNavigationTreeFocused(e, t, n = !1) {
          e != this.m_LastActiveFocusNavTree &&
            e != this.m_LastActiveNavTree &&
            (this.m_LastActiveFocusNavTree.GetParentEmbeddedNavTree() == e ||
            e.GetParentEmbeddedNavTree() == this.m_LastActiveFocusNavTree
              ? (k(
                  `There was a focus event in ${e.id}, allowing focus transfer to activate nav tree due to parent embedded relationship`
                ),
                e.Activate())
              : k(
                  `There was a focus event in ${e.id}, but the active nav tree is ${this.m_LastActiveFocusNavTree.id} so it is being ignored.  Source: ${i[t]}.`
                ));
        }
        BlurNavTree(e) {
          this.m_LastActiveNavTree == e && this.SetActiveNavTree(null, !0),
            S.Zf(this.m_rgGamepadNavigationTrees, e),
            this.m_rgGamepadNavigationTrees.unshift(e);
        }
        IsActiveFocusNavTree(e) {
          return e == this.m_LastActiveFocusNavTree;
        }
        IsActiveNavTree(e) {
          return e == this.m_LastActiveNavTree;
        }
        SetActiveNavTree(e, t = !1) {
          if (e && this.m_LastActiveNavTree == e) return;
          const n = this.m_LastActiveNavTree;
          n && S.Zf(this.m_rgGamepadNavigationTrees, n),
            e ||
              (this.m_rgGamepadNavigationTrees.length &&
                (e =
                  this.m_rgGamepadNavigationTrees[
                    this.m_rgGamepadNavigationTrees.length - 1
                  ]));
          const o = this.m_LastActiveFocusNavTree == e;
          e && S.Zf(this.m_rgGamepadNavigationTrees, e),
            (this.m_LastActiveNavTree = e),
            (e && e.BUseVirtualFocus()) || (this.m_LastActiveFocusNavTree = e),
            k(
              `Move from nav tree ${null == n ? void 0 : n.id} to nav tree ${
                null == e ? void 0 : e.id
              } ${t ? "taking focus" : "no focus"}`
            ),
            n && this.m_rgGamepadNavigationTrees.push(n),
            e &&
              (this.m_rgGamepadNavigationTrees.push(e),
              !o && t && e.TakeFocus(i.APPLICATION)),
            n && n != this.m_LastActiveFocusNavTree && n.OnDeactivate(e),
            e && !o && e.OnActivate(n);
        }
        BindGlobalEventHandlers() {
          this.m_bGlobalEventsInitialized ||
            (this.m_bGlobalEventsInitialized = !0);
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
            p(e == this.m_iFocusChangeStack, "out of order focus pop"),
            0 == this.m_iFocusChangeStack)
          ) {
            const { source: e, from: t, to: n } = this.m_ActiveFocusChange;
            this.m_FocusChangedCallbacks.Dispatch(e, t, n);
          }
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
          this.m_bSuppressGamepadInput = e;
        }
        TakeFocusChangingIFrame() {
          window.focus();
          let e = this.m_LastActiveFocusNavTree || this.m_LastActiveNavTree;
          e && e.TakeFocus(i.APPLICATION);
        }
        BIsRestoringHistory() {
          return this.m_bRestoringHistory;
        }
        RestoreHistoryTransaction(e) {
          return (0, o.mG)(this, void 0, void 0, function* () {
            this.m_bRestoringHistory = !0;
            try {
              yield e();
            } finally {
              this.m_bRestoringHistory = !1;
            }
          });
        }
      }
      (0, o.gn)([_.a], x.prototype, "OnButtonDown", null),
        (0, o.gn)([_.a], x.prototype, "OnButtonUp", null),
        (0, o.gn)([_.a], x.prototype, "OnNavigationTypeChange", null);
      class W {
        constructor(e) {
          this.m_node = e;
        }
        TakeFocus(e) {
          return this.m_node.BTakeFocus(e ? i.GAMEPAD : i.APPLICATION, e);
        }
        ParentTakeFocus(e) {
          this.m_node.Parent.BTakeFocus(e ? i.GAMEPAD : i.APPLICATION, e);
        }
        ChildTakeFocus(e) {
          return this.m_node.BChildTakeFocus(e ? i.GAMEPAD : i.APPLICATION, e);
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
          this.m_History || (this.m_History = new I(this.m_node)),
            this.m_History.PushState();
        }
        PopState(e = 0) {
          this.m_History && this.m_History.PopState(e);
        }
        SaveState(e) {
          this.m_StateHistory || (this.m_StateHistory = new D(this.m_node)),
            this.m_StateHistory.SaveState(e);
        }
        RestoreState(e, t = 0) {
          return (
            !!this.m_StateHistory && this.m_StateHistory.RestoreState(e, t)
          );
        }
        NavTree() {
          return this.m_node.Tree;
        }
        Node() {
          return this.m_node;
        }
      }
      function U(e, t, n, i = 0.001) {
        return "x" == e
          ? t.x + t.width > n.x + i && t.x + i < n.x + n.width
          : "y" == e
          ? t.y + t.height > n.y + i && t.y + i < n.y + n.height
          : (p(!1, `Invalid axis ${e}`), !1);
      }
      function H(e, t, n) {
        let i;
        return (
          "x" == e
            ? (i = Math.min(t.x + t.width, n.x + n.width) - Math.max(t.x, n.x))
            : "y" == e
            ? (i =
                Math.min(t.y + t.height, n.y + n.height) - Math.max(t.y, n.y))
            : (p(!1, `Invalid axis ${e}`), (i = 0)),
          i < 0 ? 0 : i
        );
      }
      function K(e, t, n) {
        const i = t[e],
          o = (function (e, t) {
            return "x" == e
              ? { min: t.x, max: t.x + t.width }
              : "y" == e
              ? { min: t.y, max: t.y + t.height }
              : void p(!1, `Invalid axis ${e}`);
          })(e, n);
        return i < o.min ? o.min - i : i > o.max ? i - o.max : 0;
      }
      function $(e) {
        if (!e) return fe.NONE;
        const t = e.ownerDocument.defaultView,
          n = t.getComputedStyle(e);
        if ("flex" == n.display)
          switch (n.flexDirection) {
            case "row":
              return "wrap" == n.flexWrap ? fe.GRID : fe.ROW;
            case "row-reverse":
              return fe.ROW_REVERSE;
            case "column":
              return fe.COLUMN;
            case "column-reverse":
              return fe.COLUMN_REVERSE;
          }
        else {
          if ("grid" == n.display) return fe.GRID;
          if (e.childElementCount > 0) {
            const n = t.getComputedStyle(e.firstElementChild);
            if ("left" === n.float) return fe.ROW;
            if ("right" === n.float) return fe.ROW_REVERSE;
            if ("inline" === n.display || "inline-block" === n.display)
              return fe.GRID;
          }
        }
        return fe.COLUMN;
      }
      function j(e) {
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
      function Y(e, t, n) {
        const i = [],
          [o, s] = e.GetChildren(),
          r = e.GetActiveChild();
        let a;
        const l = r ? r.Element.getBoundingClientRect() : null;
        if (r) {
          const e = q(r, t, n);
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
          const s = q(n, t, c);
          s && i.push({ child: n, visibility: s });
        }
        let u;
        i.sort(X);
        for (const e of i) {
          const { child: n, visibility: i } = e;
          if (i.offScreen && u) {
            if (!u.visibility.offScreen) break;
            if (i.distance > u.visibility.distance) break;
          }
          const o = n == r ? a : z(n, i, i.overlap || t, c);
          o && (!u || X(o, u) < 0) && (u = o);
        }
        return u;
      }
      function z(e, t, n, i) {
        switch (e.GetFocusable()) {
          case "none":
            return null;
          case "children":
            return Y(e, t.overlap || n, i);
          case "self":
            return { child: e, visibility: t };
        }
      }
      function X(e, t) {
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
      function q(e, t, n) {
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
      function J(e, t, n) {
        return null == e || isNaN(e) ? e : Math.max(t, Math.min(n, e));
      }
      class Q {
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
      class Z extends Q {
        constructor(e, t, n) {
          super(e, t), (this.m_fnCallback = n);
        }
        Update(e) {
          this.m_fnCallback(e);
        }
      }
      class ee extends Q {
        constructor(e, t, n) {
          super("ownerDocument" in e ? T(e) : e, n),
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
      const te = new F("ScrollSnap").Debug;
      let ne = !1;
      let ie;
      function oe(e) {
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
          const { scrollTop: e, scrollLeft: o } = _e(i);
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
      function se(e, t) {
        return "x" == t
          ? [e.left, e.right, e.right - e.left]
          : [e.top, e.bottom, e.bottom - e.top];
      }
      function re(e, t, n, i) {
        let [o, s, r] = se(e, i),
          [a, l, c] = se(t, i),
          [u, h] = se(n, i);
        return o < a && s > l
          ? 0
          : (o < a && r <= c) || (s > l && r > c)
          ? o - a - u
          : (o < a && r > c) || (s > l && r <= c)
          ? s - l + h
          : 0;
      }
      function ae(e) {
        return "auto" == e
          ? 0
          : e.endsWith("px")
          ? parseInt(e)
          : (console.log("Unsupported length", e), 0);
      }
      function le(e) {
        if (!("ownerDocument" in e))
          return { left: 0, right: 0, top: 0, bottom: 0 };
        const t = e.ownerDocument.defaultView.getComputedStyle(e);
        return {
          left: ae(t.scrollMarginLeft),
          right: ae(t.scrollMarginRight),
          top: ae(t.scrollMarginTop),
          bottom: ae(t.scrollMarginBottom),
        };
      }
      function ce(e, t) {
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
              left: ae(t.scrollPaddingLeft),
              right: ae(t.scrollPaddingRight),
              top: ae(t.scrollPaddingTop),
              bottom: ae(t.scrollPaddingBottom),
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
      function ue(e) {
        return e > -1 && e < 1;
      }
      function he(e, t, n, i, o) {
        te(
          "----------------------------------------------------------------------------------"
        ),
          te("Scrolling Into View:", t);
        let s = [],
          r = t,
          a = oe(t),
          l = null != o ? o : Number.MAX_VALUE;
        for (; r; ) {
          let e = O(r);
          e || (e = T(r));
          let t = le(r),
            n = ce(e, oe(e)),
            c = pe(e),
            u = { element: e, left: 0, top: 0 };
          if (
            (te(
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
              !y(e, "y") ||
              ((u.top = re(a, n, t, "y")),
              (u.top = J(u.top, -c.scrollTop, c.MaxScrollTop() - c.scrollTop)),
              o &&
                ((u.top = Math.min(l, Math.abs(u.top)) * (u.top < 0 ? -1 : 1)),
                (l -= Math.abs(u.top))),
              te(`- checked y: ${u.top}`)),
            (i && "x" != i) ||
              !y(e, "x") ||
              ((u.left = re(a, n, t, "x")),
              (u.left = J(
                u.left,
                -c.scrollLeft,
                c.MaxScrollLeft() - c.scrollLeft
              )),
              o &&
                ((u.left =
                  Math.min(l, Math.abs(u.left)) * (u.left < 0 ? -1 : 1)),
                (l -= Math.abs(u.left))),
              te(`- checked x: ${u.left}`)),
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
          if (ue(e.left) && ue(e.top)) continue;
          let t = pe(e.element),
            i = t.scrollTop + e.top,
            o = t.scrollLeft + e.left;
          (o = J(o, 0, t.MaxScrollLeft())),
            (i = J(i, 0, t.MaxScrollTop())),
            (ue(t.scrollLeft - o) && ue(t.scrollTop - i)) ||
              (t.scrollTo({ left: o, top: i, behavior: n }),
              c || (te("Scrolling:"), (c = !0)),
              te(
                `- ${e.top},${e.left} => ${i}, ${o}, behavior: ${n}`,
                e.element
              ));
        }
      }
      function de(e, t) {
        const { top: n, left: i, behavior: o } = t,
          s = pe(e);
        s.scrollTo({
          top: s.scrollTop + (null != n ? n : 0),
          left: s.scrollLeft + (null != i ? i : 0),
          behavior: o,
        });
      }
      class me {
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
                this.m_animation = new Z(this.m_window, e, (e) => {
                  this.m_window.scrollTo({
                    left: t + (i - t) * e,
                    top: n + (o - n) * e,
                    behavior: "auto",
                  });
                });
              } else
                (this.m_element.style.scrollSnapType = "initial"),
                  (this.m_animation = new ee(
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
      (0, o.gn)([_.a], me.prototype, "ResetScrollState", null);
      const ge = new WeakMap();
      function pe(e) {
        let t = ge.get(e);
        return t || ((t = new me(e)), ge.set(e, t)), t;
      }
      function _e(e) {
        const t = ge.get(e);
        return t
          ? { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop }
          : { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
      }
      const ve = new F("FocusNavigationMovement").Debug;
      var fe, be, Ce, Fe;
      !(function (e) {
        (e[(e.NONE = 0)] = "NONE"),
          (e[(e.COLUMN = 1)] = "COLUMN"),
          (e[(e.ROW = 2)] = "ROW"),
          (e[(e.COLUMN_REVERSE = 3)] = "COLUMN_REVERSE"),
          (e[(e.ROW_REVERSE = 4)] = "ROW_REVERSE"),
          (e[(e.GRID = 5)] = "GRID"),
          (e[(e.GEOMETRIC = 6)] = "GEOMETRIC");
      })(fe || (fe = {})),
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
        })(Ce || (Ce = {})),
        (function (e) {
          (e[(e.INVALID = 0)] = "INVALID"),
            (e[(e.FORWARD = 1)] = "FORWARD"),
            (e[(e.BACKWARD = 2)] = "BACKWARD");
        })(Fe || (Fe = {}));
      class Ae {
        constructor(e, t, n) {
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
          var t, n, o, s, r;
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
              null === (o = this.m_Properties) || void 0 === o
                ? void 0
                : o.noFocusRing;
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
              (p(
                !this.m_ActiveChild && this.BFocusWithin(),
                "Invalid focus state in AddChild"
              ),
              this.SetActiveChild(this.m_rgChildren.length - 1));
        }
        OnMount(e) {
          (this.m_element = e),
            this.m_Parent
              ? this.m_Parent.AddChild(this)
              : p(this == this.m_Tree.Root, "Only root should have no parent"),
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
              p(
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
            (ve(
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
                this.m_Tree.TransferFocus(i.APPLICATION, null)),
            this.UnregisterDOMEvents(),
            this.m_Parent
              ? this.m_Parent.RemoveChild(this)
              : p(this == this.m_Tree.Root, "Only root should have no parent");
        }
        RegisterDOMEvents() {
          !this.m_rgNavigationHandlers.length &&
            (this.m_rgChildren.length >= 2 ||
              this.m_Properties.layout != fe.NONE ||
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
        RemoveChild(e) {
          let t = this.m_rgChildren.indexOf(e);
          p(-1 !== t, "Child was not found to remove"),
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
          this.m_bFocused || this.m_Tree.TransferFocus(i.BROWSER, this);
        }
        OnDOMBlur(e) {
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
            Fe.FORWARD,
            a.eV.INVALID
          );
          return this.InternalFocusDescendant(t, e);
        }
        BFocusLastChild(e) {
          const t = this.FindNextFocusableChildInDirection(
            this.m_rgChildren.length,
            Fe.BACKWARD,
            a.eV.INVALID
          );
          return this.InternalFocusDescendant(t, e);
        }
        FindFocusableDescendant(e, t) {
          const n = j(e),
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
                e == fe.ROW_REVERSE ||
                e == fe.COLUMN_REVERSE ||
                o == be.LAST
                  ? this.m_rgChildren.length - 1
                  : 0;
            }
            if ((o == be.MAINTAIN_X || o == be.MAINTAIN_Y || t) && n) {
              let i, s;
              o == be.MAINTAIN_X ? (i = "x") : o == be.MAINTAIN_Y && (i = "y"),
                i == g[n] && (s = this.m_Tree.GetLastFocusedMovementRect(g[n])),
                ve(
                  `Taking focus while preserving ${be[o]} preserved: ${i} movement: ${n}, node:`,
                  s || t
                );
              const a = this.ComputeRelativeDirection(e, fe.GRID);
              if (s || t) {
                const o = a == Fe.BACKWARD ? this.m_rgChildren.length - 1 : 0;
                r = this.FindClosestChildInNextAxiallyAlignedSet(
                  i || g[n],
                  a,
                  e,
                  s || t,
                  o,
                  this.m_rgChildren[o].GetBoundingRect()
                );
              } else if (i != g[n]) {
                const t = a == Fe.BACKWARD ? this.m_rgChildren.length : -1;
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
                  Fe.BACKWARD,
                  e
                ));
            return (
              r ||
                (r = this.FindNextFocusableChildInDirection(
                  a - 1,
                  Fe.FORWARD,
                  e
                )),
              r ||
                (r = this.FindNextFocusableChildInDirection(a, Fe.BACKWARD, e)),
              r || (i ? this : null)
            );
          }
          return null;
        }
        BVisibleChildTakeFocus(e) {
          var t;
          const n = Y(
            this,
            this.Element
              ? this.Element.getBoundingClientRect()
              : document.body.getBoundingClientRect()
          );
          return (
            ve(
              `Focusing visible child, best child match is ${
                null === (t = null == n ? void 0 : n.child) || void 0 === t
                  ? void 0
                  : t.Element.className
              } - ${JSON.stringify(null == n ? void 0 : n.visibility)}`
            ),
            !!n && n.child.BTakeFocus(e)
          );
        }
        GetLayout() {
          if (this.m_Properties.layout) return this.m_Properties.layout;
          if (this.m_rgChildren.length < 2) return fe.NONE;
          return $(this.m_element);
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
          return !!e && (this.m_Tree.TransferFocus(t, e, j(n)), !0);
        }
        BTryInternalNavigation(e, t) {
          const n = this.GetLayout();
          let o,
            s = this.ComputeRelativeDirection(e, n);
          if (
            (ve(
              `Handling navigation event ${a.eV[e]} - ${fe[n]} - ${Fe[s]}`,
              this.m_element
            ),
            s == Fe.INVALID)
          )
            return !1;
          if (this.m_Properties.focusable && this.m_bFocused)
            return ve("Skipping navigation within focused element"), !1;
          if ((this.EnsureChildrenSorted(!0), n == fe.GRID))
            o = this.FindNextFocusableChildInGrid(
              this.GetActiveChildIndex(),
              s,
              e
            );
          else {
            let t = this.GetActiveChildIndex();
            this.IsValidChildIndex(t) ||
              (t = s == Fe.FORWARD ? -1 : this.m_rgChildren.length),
              (o = this.FindNextFocusableChildInDirection(t, s, e));
          }
          if (o) {
            const n = j(e);
            if (this.GetScrollIntoViewType() == Ce.NoTransformSparseContent) {
              const e =
                  ("y" == n ? window.innerHeight : window.innerWidth) /
                  (t ? 4.5 : 3.33),
                i = oe(o.Element);
              if (
                (i.top > window.innerHeight &&
                  i.bottom > window.innerHeight + e) ||
                (i.bottom < 0 && i.top < -e) ||
                (i.left > window.innerWidth &&
                  i.right > window.innerWidth + e) ||
                (i.right < 0 && i.left < -e)
              )
                return (
                  ve(`Element too far away, scrolling ${e} on ${n} axis `),
                  he(o.Element, o.Element, "smooth", n, e),
                  !0
                );
            }
            return this.m_Tree.TransferFocus(i.GAMEPAD, o, n), !0;
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
            : Ce.Standard;
        }
        GetRelativeDirection(e) {
          return this.ComputeRelativeDirection(e, this.GetLayout());
        }
        ComputeRelativeDirection(e, t) {
          let n = t == fe.ROW_REVERSE || t == fe.COLUMN_REVERSE;
          switch (t) {
            case fe.ROW:
            case fe.ROW_REVERSE:
              switch (e) {
                case a.eV.DIR_LEFT:
                  return n ? Fe.FORWARD : Fe.BACKWARD;
                case a.eV.DIR_RIGHT:
                  return n ? Fe.BACKWARD : Fe.FORWARD;
                default:
                  return Fe.INVALID;
              }
            case fe.COLUMN:
            case fe.COLUMN_REVERSE:
              switch (e) {
                case a.eV.DIR_UP:
                  return n ? Fe.FORWARD : Fe.BACKWARD;
                case a.eV.DIR_DOWN:
                  return n ? Fe.BACKWARD : Fe.FORWARD;
                default:
                  return Fe.INVALID;
              }
            case fe.GRID:
              switch (e) {
                case a.eV.DIR_LEFT:
                case a.eV.DIR_UP:
                  return n ? Fe.FORWARD : Fe.BACKWARD;
                case a.eV.DIR_RIGHT:
                case a.eV.DIR_DOWN:
                  return n ? Fe.BACKWARD : Fe.FORWARD;
                default:
                  return Fe.INVALID;
              }
            default:
              return Fe.INVALID;
          }
        }
        AdvanceIndex(e, t) {
          return e + (t == Fe.FORWARD ? 1 : -1);
        }
        FindNextFocusableChildInDirection(e, t, n) {
          let i = t == Fe.FORWARD ? 1 : -1;
          for (let t = e + i; t >= 0 && t < this.m_rgChildren.length; t += i) {
            const e = this.m_rgChildren[t].FindFocusableNode(n);
            if (e) return e;
          }
          return null;
        }
        ScanChildren(e, t, n) {
          let i = t == Fe.FORWARD ? 1 : -1;
          for (let t = e; t >= 0 && t < this.m_rgChildren.length; t += i)
            if (n(this.m_rgChildren[t], t)) return t;
          return -1;
        }
        FindNextFocusableChildInGrid(e, t, n) {
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
            const e = this.m_Tree.GetLastFocusedMovementRect("x");
            e && ((s.x = e.x), (s.width = e.width));
          }
          if (i) {
            let i = e;
            for (; -1 != i; ) {
              const e = this.ScanChildren(
                this.AdvanceIndex(i, t),
                t,
                (e) => !U("y", s, e.GetBoundingRect())
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
            let i = t == Fe.FORWARD ? 1 : -1;
            for (
              let o = this.AdvanceIndex(e, t);
              o >= 0 && o < this.m_rgChildren.length;
              o += i
            ) {
              const e = this.m_rgChildren[o];
              if (!U("y", s, e.GetBoundingRect())) return null;
              let t = e.FindFocusableNode(n);
              if (t) return t;
            }
          }
          return null;
        }
        FindClosestChildInNextAxiallyAlignedSet(e, t, n, i, o, s) {
          (!o || o < 0) && (o = 0);
          let r = [];
          const a = { x: (l = i).x, y: l.y };
          var l;
          this.ScanChildren(o, t, (t) => {
            const n = t.GetBoundingRect();
            return (
              !(!s || U(g[e], s, n)) ||
              (r.push({ child: t, overlap: H(e, i, n), dist: K(e, a, n) }), !1)
            );
          }),
            t == Fe.BACKWARD && r.reverse(),
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
          e instanceof Ae
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
              ? (p(
                  !this.m_Tree.BUseVirtualFocus(),
                  "Virtual focus tree should not have browser focus"
                ),
                this.m_element.focus({ preventScroll: !0 }))
              : this.m_Tree.BUseVirtualFocus() ||
                ve(
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
                  (void 0 === a && (a = ne ? Ce.NoTransform : Ce.Standard),
                  (null === (o = n.m_Properties) || void 0 === o
                    ? void 0
                    : o.fnScrollIntoViewHandler) &&
                    !1 !== n.m_Properties.fnScrollIntoViewHandler(e, t, n))
                )
                  continue;
                const l = n.m_element,
                  c =
                    a == Ce.NoTransform ||
                    a == Ce.NoTransformSparseContent ||
                    !s;
                if (t) {
                  const t = c ? oe(l) : l.getBoundingClientRect();
                  let n = !1;
                  const i = Math.max(1.4 * (t.bottom - t.top), 40);
                  ((ie && performance.now() - ie < 500) ||
                    t.bottom < -i ||
                    t.top > window.innerHeight + i) &&
                    (n = !0);
                  let o = n ? "auto" : "smooth";
                  n && (ie = performance.now()),
                    e.Tree.Controller.BIsRestoringHistory() && (o = "auto"),
                    c
                      ? he(0, l, o)
                      : l.scrollIntoView({ behavior: o, block: "nearest" });
                } else
                  c
                    ? he(0, l, "auto")
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
      (0, o.gn)([_.a], Ae.prototype, "OnDOMFocus", null),
        (0, o.gn)([_.a], Ae.prototype, "OnDOMBlur", null),
        (0, o.gn)([_.a], Ae.prototype, "OnNavigationEvent", null);
      const Ne = "GamepadInput";
      var Re;
      function Ie(e) {
        const [t, n] = e.split(".", 2);
        return (
          t &&
          n &&
          (function (e) {
            return "object" == typeof SteamClient && e in SteamClient;
          })(t) &&
          n in SteamClient[t]
        );
      }
      !(function (e) {
        (e[(e.PageUnloading = 0)] = "PageUnloading"),
          (e[(e.Unknown = 1)] = "Unknown"),
          (e[(e.None = 2)] = "None"),
          (e[(e.Basic = 3)] = "Basic"),
          (e[(e.Full = 4)] = "Full");
      })(Re || (Re = {}));
      class De {
        constructor(e) {
          (this.m_bIsGamepadInputExternallyControlled = !1),
            (this.m_NavigationController = e),
            Ie("BrowserView.RegisterForMessageFromParent") &&
            Ie("BrowserView.PostMessageToParent")
              ? ((this.m_bIsGamepadInputExternallyControlled = !0),
                (this.m_postMessage = new we()))
              : ((this.m_bIsGamepadInputExternallyControlled =
                  window.top != window.self),
                (this.m_postMessage = new Se(window.top))),
            this.m_postMessage.RegisterForMessage(this.OnMessage),
            window.addEventListener("unload", this.PostPageUnloading),
            this.m_NavigationController.RegisterForUnhandledButtonDownEvents(
              (e) => this.PostButtonPressToSteam(e.detail.button)
            ),
            e.FocusChangedCallbacks.Register(this.OnFocusChanged),
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
          let t = Re.Basic;
          window.bSupportsGamepadUI && (t = Re.Full),
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
      (0, o.gn)([_.a], De.prototype, "OnFocusChanged", null),
        (0, o.gn)([_.a], De.prototype, "OnMessage", null),
        (0, o.gn)([_.a], De.prototype, "PostPageUnloading", null);
      class Se {
        constructor(e) {
          (this.m_postWindow = e),
            window.addEventListener("message", this.OnMessage);
        }
        RegisterForMessage(e) {
          this.m_fnCallback = e;
        }
        PostMessage(e) {
          let t = JSON.stringify(e);
          this.m_postWindow.postMessage({ gamepadMessage: Ne, args: t }, "*");
        }
        OnMessage(e) {
          let t = null == e ? void 0 : e.data;
          if (t && t.gamepadMessage == Ne && t.args) {
            const e = JSON.parse(t.args);
            this.m_fnCallback(e);
          }
        }
      }
      (0, o.gn)([_.a], Se.prototype, "OnMessage", null);
      class we {
        constructor() {
          SteamClient.BrowserView.RegisterForMessageFromParent(this.OnMessage);
        }
        RegisterForMessage(e) {
          this.m_fnCallback = e;
        }
        PostMessage(e) {
          let t = JSON.stringify(e);
          SteamClient.BrowserView.PostMessageToParent(Ne, t);
        }
        OnMessage(e, t) {
          if (e == Ne) {
            const e = JSON.parse(t);
            this.m_fnCallback(e);
          } else if ("Checkout" == e) {
            var n = JSON.parse(t);
            if ("paypal_success" == n.action)
              try {
                window.OnPayPalSuccess(n.transid);
              } catch (e) {}
            else if ("paypal_cancel" == n.action)
              try {
                window.OnPayPalCancel(n.transid);
              } catch (e) {}
          }
        }
      }
      (0, o.gn)([_.a], we.prototype, "OnMessage", null);
      n(554);
      class Te extends a.oH {
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
        TranslateKey(e) {
          const t = e.code,
            n = e.ctrlKey,
            i = e.shiftKey,
            o =
              w(e.target) &&
              ("INPUT" === e.target.nodeName ||
                "TEXTAREA" === e.target.nodeName);
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
      (0, o.gn)([_.a], Te.prototype, "OnKeyDown", null),
        (0, o.gn)([_.a], Te.prototype, "OnKeyUp", null),
        (0, o.gn)([_.a], Te.prototype, "Reset", null);
      class Oe extends Ae {
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
          this.BHasFocus() || this.m_Tree.TransferFocus(i.APPLICATION, this);
        }
        OnWrappedTreeDeactivated() {
          this.m_wrappedTree.TransferFocus(i.APPLICATION, null);
        }
        OnWrappedTreeUnhandledButton(e) {
          return h(this.m_Parent.Element, "vgp_onbuttondown", e.detail), !1;
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
      (0, o.gn)([_.a], Oe.prototype, "OnWrappedTreeActivated", null),
        (0, o.gn)([_.a], Oe.prototype, "OnWrappedTreeDeactivated", null),
        (0, o.gn)([_.a], Oe.prototype, "OnWrappedTreeUnhandledButton", null);
      const ye = "VirtualKeyboardMessage";
      function Ee(e) {
        return e && e.type === ye;
      }
      class Le {
        constructor() {
          window.addEventListener("message", this.OnMessage);
        }
        ShowVirtualKeyboard() {
          this.SendMessage({ message: "ShowVirtualKeyboard" });
        }
        HideVirtualKeyboard(e) {
          this.SendMessage({ message: "HideVirtualKeyboard", msDelay: e });
        }
        OnBrowserViewMessage(e, t) {
          e == ye && this.InternalDispatchMessage(JSON.parse(t));
        }
        OnMessage(e) {
          this.InternalDispatchMessage(e.data);
        }
        InternalDispatchMessage(e) {
          Ee(e) && e.message;
        }
        SendMessage(e) {
          const t = Object.assign({ type: "VirtualKeyboardMessage" }, e);
          Ie("BrowserView.PostMessageToParent")
            ? SteamClient.BrowserView.PostMessageToParent(
                t.type,
                JSON.stringify(t)
              )
            : (p(
                window.parent && window.parent != window,
                "No parent window to post to"
              ),
              window.parent.postMessage(t, "*"));
        }
      }
      (0, o.gn)([_.a], Le.prototype, "OnBrowserViewMessage", null),
        (0, o.gn)([_.a], Le.prototype, "OnMessage", null);
      (0, o.gn)(
        [_.a],
        class {
          constructor(e, t) {
            (this.m_refKeyboard = t), e.on("message", this.OnMessage);
          }
          OnMessage(e, t, n) {
            if (e == ye) {
              const e = JSON.parse(t);
              if (Ee(e))
                switch (e.message) {
                  case "ShowVirtualKeyboard":
                    this.m_refKeyboard.ShowVirtualKeyboard();
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
      var Pe = n(222),
        Be = n.n(Pe);
      function Me(e) {
        let t = 0;
        e.children().each(function () {
          const e = r()(this),
            n = e.css("zIndex");
          "auto" === n
            ? e.css("zIndex", 0)
            : isNaN(parseInt(n)) || (t = Math.max(t, parseInt(n)));
        });
        const n = r()("<div/>", {
          style: `position: absolute; pointer-events: none; top: 0; left: 0; z-index: ${
            (t || 100) + 1
          }; width: 0; height: 0; padding: 0; margin: 0; background: none; overflow: visible; display: block;`,
        });
        let i = null,
          o = null,
          s = null,
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
              s && (window.clearInterval(s), (s = null)),
              e && e.BWantsFocusRing())
            ) {
              i = r()("<div/>", {
                style: "position: absolute; pointer-events: none; ",
                class: Be().FocusRing,
              });
              let t = h(e);
              d(t), n.append(i), (s = window.setInterval(() => m(e), 200));
            }
          };
        return {
          OnBlur: () => g(null),
          OnFocus: (e, t) => g(t),
          OnFocusChange: (e, t, n) => g(n),
          OnForceMeasureFocusRing: () => m(o),
        };
      }
      function Ge(e) {
        return !!e.is_repeat;
      }
      Object.seal({ onMoveUp: ke, onMoveDown: ke }),
        Object.seal({ onMoveRight: ke, onMoveLeft: ke });
      function ke(e, t) {
        if (e.is_repeat) return !1;
        const n = t.GetRelativeDirection(e.button);
        return n == Fe.FORWARD
          ? t.BFocusFirstChild(i.GAMEPAD)
          : n == Fe.BACKWARD && t.BFocusLastChild(i.GAMEPAD);
      }
      function Ve(e) {
        return e ? Function("event", e) : null;
      }
      function xe() {
        return !0;
      }
      function We(e) {
        return "BlockMovement" == e
          ? xe
          : "RepeatNavigationBoundary" == e
          ? Ge
          : e
          ? Function("detail", e)
          : null;
      }
      function Ue(e) {
        this.click(), e.stopPropagation();
      }
      function He(e) {
        r()(this).find('a, input[type="checkbox"]')[0].click();
      }
      function Ke(e) {
        const t = e.currentTarget;
        if (!w(t)) return !1;
        const n = e.detail.is_repeat ? 4.5 : 3.33,
          i = "smooth",
          o = t.ownerDocument,
          s = o.defaultView;
        switch (e.detail.button) {
          case a.eV.DIR_UP:
            if (s.scrollY > 3)
              return de(s, { top: -s.innerHeight / n, behavior: i }), !0;
            break;
          case a.eV.DIR_RIGHT:
            if (s.scrollX + s.innerWidth < o.body.clientWidth - 3)
              return de(s, { left: s.innerWidth / n, behavior: i }), !0;
            break;
          case a.eV.DIR_DOWN:
            if (s.scrollY + s.innerHeight < o.body.clientHeight - 3)
              return de(s, { top: s.innerHeight / n, behavior: i }), !0;
            break;
          case a.eV.DIR_LEFT:
            if (s.scrollX > 3)
              return de(s, { left: s.innerWidth / n, behavior: i }), !0;
        }
        return !1;
      }
      function $e(e, t) {
        const n = window.history.state;
        if (n && n[e]) {
          const i = n[e];
          !(function (e, t, n = 0) {
            R.RestoreSerializedNavState(e, t, n);
          })(t, i);
        }
      }
      var je;
      !(function (e) {
        (e[(e.Unknown = 0)] = "Unknown"),
          (e[(e.NotNeeded = 1)] = "NotNeeded"),
          (e[(e.InReactTree = 2)] = "InReactTree");
      })(je || (je = {}));
      const Ye = new Le();
      let ze,
        Xe = !1,
        qe = null,
        Je = null;
      function Qe(e) {
        Xe ||
          ((qe = new x()),
          (window.legacyWebFocusNavController = qe),
          (ze = new De(qe)),
          ze.BIsGamepadInputExternallyControlled() || qe.RegisterInputSource(e),
          (function (e) {
            r()("html").addClass("gpnav_active");
            const t = r()("body"),
              n = e.NewGamepadNavigationTree("legacy"),
              i = Me(t);
            (n.Root.m_FocusRing = i),
              n.Root.SetProperties({
                scrollIntoViewType: Ce.NoTransformSparseContent,
              }),
              (window.__nav_tree_root = n),
              et.set(document.body, n.Root),
              it(document.body, n.Root),
              at(void 0, !0),
              e.RegisterGamepadNavigationTree(n, !1),
              r()(document.body).on("vgp_onbuttondown", function (e) {
                n.HandleButtonDownEventAsLogicalEvent(e.originalEvent);
              }),
              u(document.body, Ke);
            new MutationObserver(Ze).observe(document.body, {
              childList: !0,
              subtree: !0,
            }),
              (a = !0),
              (ne = a),
              (o = "legacy_web_root"),
              (s = n.Root),
              window.addEventListener("popstate", () => $e(o, s)),
              s.Tree.Controller.FocusChangedCallbacks.Register(() => {
                var e;
                window.history.replaceState(
                  Object.assign(Object.assign({}, window.history.state), {
                    [o]: ((e = s), R.SerializeNavState(e, !0, !1)),
                  }),
                  null
                );
              }),
              $e(o, s),
              Object.assign(window, mt),
              window.dispatchEvent(new CustomEvent("vgp_gamepadnavready"));
            var o, s;
            var a;
          })(qe)),
          (Xe = !0);
      }
      function Ze(e) {
        for (const t of e) {
          const e = [],
            n = [];
          E(
            t,
            (t) => e.push(t),
            (e) => n.push(e)
          ),
            e.length && at(r()(e)),
            n.length && rt(r()(n));
        }
      }
      const et = new WeakMap(),
        tt = new WeakMap();
      let nt = [];
      function it(e, t) {
        if (t instanceof Ae) {
          const n = t.GetDepth();
          nt[n] || (nt[n] = []), nt[n].push([e, t]);
        }
        et.set(e, t);
      }
      function ot(e, t) {
        const n = tt.has(e) ? tt.get(e) : [];
        n.push(t), tt.set(e, n);
      }
      function st(e) {
        return "jquery" in e
          ? et.get(e[0]) || je.Unknown
          : et.get(e) || je.Unknown;
      }
      function rt(e) {
        e.find("*")
          .addBack()
          .each(function () {
            var e;
            null === (e = tt.get(this)) ||
              void 0 === e ||
              e.forEach((e) => e()),
              et.delete(this),
              tt.delete(this),
              r()(this).attr("data-nav-modal") && dt();
          });
      }
      function at(e, t = !1) {
        performance.now();
        const n =
          "a,button,textarea,input:not(input[type=hidden]),label:not([for]),[data-panel],[data-react-nav-root],[data-nav-modal]";
        r()(n, e)
          .addBack(n)
          .each(function () {
            var e;
            (function (e) {
              return "jquery" in e ? et.has(e[0]) : et.has(e);
            })((e = this)) || ut(e);
          }),
          (function () {
            for (let e = nt.length - 1; e >= 0; e--)
              if (nt[e])
                for (let [t, n] of nt[e])
                  ot(t, n.Tree.RegisterNavigationItem(n, t));
            nt = [];
          })();
      }
      function lt(e) {
        rt(r()(e)), at(r()(e));
      }
      function ct(e) {
        const t = r()(e.Element);
        return (
          !t.data("gpFocusDisabled") &&
          t.is(":visible") &&
          "hidden" != t.css("visibility") &&
          ((t.outerWidth() > 0 && t.outerHeight() > 0) ||
            "hidden" !== t.css("overflow"))
        );
      }
      function ut(e) {
        var t, n, s, a, l, h, g;
        const _ = r()(e),
          v = ht(e);
        if (v instanceof Oe || v == je.InReactTree)
          return it(e, je.InReactTree), je.InReactTree;
        const f = v.Tree;
        let b = _.data("reactNavRoot")
            ? new Oe(_.data("reactNavRoot"), v)
            : f.CreateNode(v, v.m_FocusRing),
          C = _.data("panel") || {};
        if (
          (r()(e).attr("data-nav-modal") &&
            (function (e) {
              Je &&
                (p(
                  !1,
                  "Creating a new modal nav tree while one already exists. A modal opening another modal is not currently supported."
                ),
                dt());
              Je = qe.NewGamepadNavigationTree("modal_dialog");
              const t = Me(r()("body"));
              (Je.Root.m_FocusRing = t),
                Je.Root.SetProperties({}),
                it(e, Je.Root),
                at(e),
                u(Je.Root.m_element, (e) => !0),
                qe.RegisterGamepadNavigationTree(Je, !1);
            })(e),
          "A" == e.tagName || "BUTTON" == e.tagName || "LABEL" == e.tagName)
        )
          (C.focusable = null === (t = C.focusable) || void 0 === t || t),
            (C.clickOnActivate =
              null === (n = C.clickOnActivate) || void 0 === n || n);
        else if ("INPUT" == e.tagName)
          switch (
            ((C.focusable = null === (s = C.focusable) || void 0 === s || s),
            e.getAttribute("type"))
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
          "TEXTAREA" == e.tagName &&
            ((C.focusable = null === (h = C.focusable) || void 0 === h || h),
            (C.enableVirtualKeyboard =
              null === (g = C.enableVirtualKeyboard) || void 0 === g || g));
        const F = C["flow-children"];
        delete C["flow-children"];
        let {
            clickOnActivate: A,
            maintainX: N,
            maintainY: R,
            enableVirtualKeyboard: I,
            preferredChild: D,
            onOKActionDescription: S,
            onCancelActionDescription: w,
            onSecondaryActionDescription: T,
            onOptionsActionDescription: O,
            onMenuActionDescription: y,
            actionDescriptionMap: E,
            onOKButton: L,
            onCancelButton: P,
            onSecondaryButton: B,
            onOptionsButton: M,
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
          j = Ve(L),
          Y = Ve(P),
          z = Ve(B),
          X = Ve(M),
          q = Ve(G),
          J = Ve(U);
        K || (K = "Panel"),
          "PanelGroup" == K &&
            ({ onOKButtonHandler: j, onCancelButtonHandler: Y } = (function (
              e,
              t
            ) {
              const {
                onOKButtonHandler: n,
                onCancelButtonHandler: o,
                navNode: s,
              } = e;
              return (
                (t.focusable = !1 !== t.focusable),
                {
                  onOKButtonHandler: (e) =>
                    !(
                      !s.BHasFocus() ||
                      !s.BChildTakeFocus(i.GAMEPAD, e.detail.button)
                    ) ||
                    (!!n && n(e)),
                  onCancelButtonHandler: (e) =>
                    !(
                      !s.BFocusWithin() ||
                      s.BHasFocus() ||
                      !s.BTakeFocus(i.GAMEPAD, e.detail.button)
                    ) ||
                    (!!o && o(e)),
                }
              );
            })(
              { onOKButtonHandler: j, onCancelButtonHandler: Y, navNode: b },
              $
            )),
          j &&
            ot(
              _[0],
              (function (e, t) {
                return c(e, "vgp_onok", d(t));
              })(_[0], j)
            ),
          Y &&
            ot(
              _[0],
              (function (e, t) {
                return c(e, "vgp_oncancel", d(t));
              })(_[0], Y)
            ),
          z &&
            T &&
            ot(
              _[0],
              (function (e, t) {
                return c(e, "vgp_onsecondaryaction", d(t));
              })(_[0], z)
            ),
          X &&
            O &&
            ot(
              _[0],
              (function (e, t) {
                return c(e, "vgp_onoptions", d(t));
              })(_[0], X)
            ),
          q &&
            y &&
            ot(
              _[0],
              (function (e, t) {
                return c(e, "vgp_onmenu", d(t));
              })(_[0], q)
            ),
          J && ot(_[0], u(_[0], J));
        const Q = (function (e, t, n, i) {
            const o = {};
            return (
              e && (o.onMoveUp = We(e)),
              t && (o.onMoveRight = We(t)),
              n && (o.onMoveDown = We(n)),
              i && (o.onMoveLeft = We(i)),
              o
            );
          })(k, V, x, W),
          Z = F
            ? (function (e) {
                switch (e) {
                  case "column":
                    return fe.COLUMN;
                  case "column-reverse":
                    return fe.COLUMN_REVERSE;
                  case "row":
                    return fe.ROW;
                  case "row-reverse":
                    return fe.ROW_REVERSE;
                  case "grid":
                    return fe.GRID;
                  default:
                    return fe.NONE;
                }
              })(F)
            : fe.NONE;
        Z != fe.NONE && ($.layout = Z),
          N
            ? ($.navEntryPreferPosition = be.MAINTAIN_X)
            : R
            ? ($.navEntryPreferPosition = be.MAINTAIN_Y)
            : D && ($.navEntryPreferPosition = be.PREFERRED_CHILD),
          A &&
            (!1 !== $.focusable && ($.focusable = !0),
            _.on("vgp_onok", "firstChild" === A ? He : Ue),
            ot(e, () => {
              _.off("vgp_onok");
            })),
          I &&
            (_.on("vgp_onok.vkbindings", () => Ye.ShowVirtualKeyboard()),
            _.on("click.vkbindings", () => Ye.ShowVirtualKeyboard()),
            _.on("blur.vkbindings", () => {
              document.hasFocus() &&
                document.activeElement != e &&
                Ye.HideVirtualKeyboard();
            }),
            ot(e, () => {
              _.off(".vkbindings");
            })),
          $.focusable && void 0 === _.attr("tabIndex") && _.attr("tabIndex", 0),
          $.focusable &&
            b.FocusCallbackList.Register((t) =>
              (function (e, t) {
                t ? r()(e).addClass("gpfocus") : r()(e).removeClass("gpfocus");
              })(e, t)
            ),
          H &&
            ((b.m_FocusRing = Me(_)),
            "static" == _.css("position") && _.css("position", "relative"));
        const ee = m({
            onOKActionDescription: S,
            onCancelActionDescription: w,
            onSecondaryActionDescription: T,
            onOptionsActionDescription: O,
            onMenuActionDescription: y,
            actionDescriptionMap: E,
          }),
          te = Object.assign(
            Object.assign({ fnCanTakeFocus: ct, actionDescriptionMap: ee }, Q),
            $
          );
        return b.SetProperties(te), it(e, b), b;
      }
      function ht(e) {
        const t = e.parentElement;
        if (!t) return console.error("no parent"), null;
        let n = st(t);
        if (n == je.Unknown)
          n = (function (e) {
            let t = !1;
            switch (e.tagName) {
              case "A":
              case "INPUT":
              case "TEXTAREA":
                t = !0;
                break;
              case "DIV":
                if ($(e) != fe.COLUMN) t = !0;
                else {
                  const n = $(e.parentElement);
                  (n != fe.ROW && n != fe.ROW_REVERSE) || (t = !0);
                }
            }
            let n = je.NotNeeded;
            return t ? (n = ut(e)) : it(e, n), n;
          })(t);
        else if (n == je.InReactTree) return n;
        return n instanceof Ae ? n : ht(t);
      }
      function dt(e) {
        Je && (qe.UnregisterGamepadNavigationTree(Je), (Je = null)),
          e && r()(e).removeAttr("data-nav-modal");
      }
      const mt = {
        InstrumentFocusElements: at,
        ForceUpdateFocusElements: lt,
        GPNavFocusChild: function (e) {
          let t = st(e[0]);
          return (
            t instanceof Ae || (t = ht(e[0])),
            t instanceof Ae && t.BTakeFocus(i.APPLICATION),
            !1
          );
        },
        GPOnShowingModalWindow: function (e) {
          const t = e;
          return r()(t).attr("data-nav-modal", "true"), lt(t), () => dt(t);
        },
        GPShowVirtualKeyboard: function (e = !0) {
          e ? Ye.ShowVirtualKeyboard() : Ye.HideVirtualKeyboard();
        },
        GPNavUpdateActionDescriptions: function (e, t) {
          const n = st(e);
          n instanceof Ae &&
            n.SetProperties(
              Object.assign(Object.assign({}, n.m_Properties), {
                actionDescriptionMap: m(t),
              })
            );
        },
      };
    },
  },
]);

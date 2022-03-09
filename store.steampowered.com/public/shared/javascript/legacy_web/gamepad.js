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
          return zt;
        });
      var i,
        o = n("mrSG"),
        s = n("xeH2"),
        r = n.n(s),
        a = n("rHSA");
      !(function (t) {
        (t[(t.GAMEPAD = 0)] = "GAMEPAD"),
          (t[(t.KEYBOARD = 1)] = "KEYBOARD"),
          (t[(t.APPLICATION = 2)] = "APPLICATION"),
          (t[(t.BROWSER = 3)] = "BROWSER");
      })(i || (i = {}));
      let l = {
        [a.a.OK]: "vgp_onok",
        [a.a.CANCEL]: "vgp_oncancel",
        [a.a.SECONDARY]: "vgp_onsecondaryaction",
        [a.a.OPTIONS]: "vgp_onoptions",
        [a.a.START]: "vgp_onmenu",
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
        if (null === t) return !0;
        let i = new t.ownerDocument.defaultView.CustomEvent(e, {
          bubbles: !0,
          cancelable: !0,
          detail: n,
        });
        return t.dispatchEvent(i);
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
          void 0 !== e && (l[a.a.OK] = e),
          void 0 !== n && (l[a.a.CANCEL] = n),
          void 0 !== i && (l[a.a.SECONDARY] = i),
          void 0 !== o && (l[a.a.OPTIONS] = o),
          void 0 !== s && (l[a.a.START] = s),
          l
        );
      }
      const g = { x: "y", y: "x" };
      var p = n("r64O"),
        v = n("XxJJ"),
        _ = n("qiKp");
      class f extends class {
        GetObject(t) {
          return Object(o.a)(this, void 0, void 0, function* () {
            try {
              const e = yield this.GetString(t);
              return e ? JSON.parse(e) : null;
            } catch (t) {
              return null;
            }
          });
        }
        StoreObject(t, e) {
          return Object(o.a)(this, void 0, void 0, function* () {
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
            N.Get().RegisterLogName(t);
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
          if (t == C.Debug && !N.Get().IsDebugLogEnabled(this.m_sName)) return;
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
          A(t, N.Get().IncludeBacktraceInLog, o, this.m_sName, ...e);
        }
      }
      Object(o.b)([v.a], F.prototype, "Debug", null),
        Object(o.b)([v.a], F.prototype, "Info", null),
        Object(o.b)([v.a], F.prototype, "Warning", null),
        Object(o.b)([v.a], F.prototype, "Error", null),
        Object(o.b)([v.a], F.prototype, "Assert", null);
      class N {
        constructor() {
          (this.m_Storage = null),
            (this.m_rgLogNames = null),
            (this.m_setEnabledDebugLogs = new Set()),
            (this.m_bIncludeBacktraceInLog = !1),
            (this.m_SettingsChangedCallback = new _.a()),
            (this.m_bLoading = !1),
            (this.m_Storage = new f()),
            (this.m_rgLogNames = b.slice()),
            this.LoadSettings();
        }
        LogAsLogManager(...t) {
          A(
            C.Info,
            this.IncludeBacktraceInLog,
            "LogManager",
            "LogManager",
            ...t
          );
        }
        LoadSettings() {
          return Object(o.a)(this, void 0, void 0, function* () {
            (this.m_bLoading = !0),
              (this.m_bIncludeBacktraceInLog = !!(yield this.m_Storage.GetObject(
                N.k_IncludeBacktraceInLog_StorageKey
              )));
            const t = yield this.m_Storage.GetObject(
              N.k_EnabledLogNames_StorageKey
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
          return Object(o.a)(this, void 0, void 0, function* () {
            yield this.m_Storage.StoreObject(
              N.k_EnabledLogNames_StorageKey,
              Array.from(this.m_setEnabledDebugLogs)
            ),
              yield this.m_Storage.StoreObject(
                N.k_IncludeBacktraceInLog_StorageKey,
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
            null == N.s_Singleton && (N.s_Singleton = new N()), N.s_Singleton
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
          return Object(o.a)(this, void 0, void 0, function* () {
            this.SetDebugLogEnabled(t, !this.IsDebugLogEnabled(t));
          });
        }
        SetDebugLogEnabled(t, e) {
          return Object(o.a)(this, void 0, void 0, function* () {
            e
              ? this.m_setEnabledDebugLogs.add(t)
              : this.m_setEnabledDebugLogs.delete(t),
              this.m_SettingsChangedCallback.Dispatch(),
              yield this.SaveSettings();
          });
        }
        SetAllDebugLogsEnabled(t) {
          return Object(o.a)(this, void 0, void 0, function* () {
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
          return Object(o.a)(this, void 0, void 0, function* () {
            (this.m_bIncludeBacktraceInLog = t),
              this.m_SettingsChangedCallback.Dispatch(),
              yield this.SaveSettings();
          });
        }
      }
      function A(t, e, n, i, ...o) {
        const s = (function (t) {
            let e = 0;
            for (let n = 0; n < t.length; n++)
              e = t.charCodeAt(n) + ((e << 5) - e);
            return [(e >> 0) & 255, (e >> 8) & 255, (e >> 16) & 255];
          })(i).map((t, e) =>
            Math.max(0, Math.min(255, 255 * (0.8 * (t / 255 - 0.5) + 0.15)))
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
        const c = [
          `%c${l}%c:`,
          `color: ${r ? "black" : "white"}; background: rgb(${s.join(
            ","
          )}); padding: 0 1ch`,
          "color: transparent; margin-right: -1ch",
          ...o,
        ];
        if (e)
          console.groupCollapsed(...c),
            console.trace("Callstack"),
            console.groupEnd();
        else
          switch (t) {
            case C.Debug:
            case C.Info:
              console.log(...c);
              break;
            case C.Warning:
              console.warn(...c);
              break;
            case C.Error:
              console.error(...c);
          }
      }
      (N.k_EnabledLogNames_StorageKey = "EnabledWebLogs"),
        (N.k_IncludeBacktraceInLog_StorageKey = "IncludeBacktraceInLog"),
        (N.s_Singleton = null);
      class R {
        constructor(t) {
          this.m_root = t;
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
        static RestoreSerializedNavNode(t, e) {
          const { sNavKey: n, iActiveChild: i, rgChildren: o } = e;
          if (
            (n && Object(p.a)(n == t.NavKey, "navkey mismatch"),
            t.SetActiveChild(i),
            o && o.length)
          ) {
            const [e] = t.GetChildren();
            let n = new Map();
            e.forEach((t) => {
              t.NavKey && n.set(t.NavKey, t);
            });
            for (const t of o) {
              if (!t.sNavKey) continue;
              const e = n.get(t.sNavKey);
              e && R.RestoreSerializedNavNode(e, t);
            }
            if (-1 != i && o[i].sNavKey) {
              const s = n.get(o[i].sNavKey);
              s && t.SetActiveChild(e.indexOf(s));
            }
            let s = 0,
              r = 0;
            for (; s < e.length && r < o.length; ) {
              for (; s < e.length && e[s].NavKey; ) s++;
              for (; r < o.length && o[r].sNavKey; ) r++;
              if (s >= e.length || r >= o.length) break;
              R.RestoreSerializedNavNode(e[s], o[r]), s++, r++;
            }
          }
        }
      }
      class w extends R {
        constructor() {
          super(...arguments), (this.m_rgHistory = []);
        }
        PushState() {
          this.m_rgHistory.push(R.SerializeNavNode(this.m_root));
        }
        PopState() {
          this.m_rgHistory.length &&
            (R.RestoreSerializedNavNode(this.m_root, this.m_rgHistory.pop()),
            this.m_root.BTakeFocus(i.APPLICATION));
        }
      }
      var T = n("Kw0F");
      function D(t) {
        return null != t && void 0 !== t.focus;
      }
      function S(t) {
        let e;
        return t && (e = t.ownerDocument.defaultView), e;
      }
      function O(t, e) {
        let n = t.parentElement;
        for (; n; ) {
          if (!e || "x" == e) {
            let t = window.getComputedStyle(n).overflowX;
            if ("scroll" == t || "auto" == t) break;
          }
          if (!e || "y" == e) {
            let t = window.getComputedStyle(n).overflowY;
            if ("scroll" == t || "auto" == t) break;
          }
          n = n.parentElement;
        }
        return n;
      }
      function I(t, e) {
        if (!("ownerDocument" in t)) return !0;
        const n = t.ownerDocument.defaultView.getComputedStyle(t),
          i = "x" === e ? n.overflowX : n.overflowY;
        return "auto" === i || "scroll" === i;
      }
      const E = new F("FocusNavigation").Debug,
        y = new F("GamepadEvents").Debug;
      class L {
        constructor(t, e) {
          (this.m_onActivateCallbacks = new _.a()),
            (this.m_onDeactivateCallbacks = new _.a()),
            (this.m_lastFocusNodeXMovement = new P()),
            (this.m_lastFocusNodeYMovement = new P()),
            (this.m_Controller = t),
            (this.m_ID = e),
            (this.m_Root = new bt(this, null, null)),
            this.m_Root.SetProperties({ layout: pt.COLUMN }),
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
        BUseVirtualFocus() {
          return this.m_bVirtualFocus;
        }
        CreateNode(t, e) {
          return new bt(this, t, e);
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
        OnActivate(t = !0) {
          t && this.TakeFocus(i.APPLICATION);
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
          return this.m_Controller.IsActiveNavTree(this);
        }
        BIsActiveFocus() {
          return this.m_Controller.IsActiveFocusNavTree(this);
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
            const e = [a.a.DIR_UP, a.a.DIR_DOWN, a.a.DIR_LEFT, a.a.DIR_RIGHT];
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
            y(
              `Logical gamepad Event fired: ${
                a.a[t.detail.button]
              }, had logical event: ${n}, was handled: ${!e}`
            ),
            e && this.m_onUnhandledButton && (e = this.m_onUnhandledButton(t)),
            e && (e = this.m_Controller.FireUnhandledGamepadEventCallbacks(t)),
            t.stopPropagation(),
            e
          );
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
          E(
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
      class P {
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
      const M = new F("FocusNavigation").Debug,
        B = (new F("GamepadEvents").Debug, "focus-nav-show-debug-focus-ring");
      class G {
        constructor() {
          (this.m_rgGamepadInputSources = []),
            (this.m_rgGamepadNavigationTrees = []),
            (this.m_LastActiveNavTree = null),
            (this.m_LastActiveFocusNavTree = null),
            (this.m_bGlobalEventsInitialized = !1),
            (this.m_bSuppressGamepadInput = !1),
            (this.m_FocusChangedCallbacks = new _.a()),
            (this.m_UnhandledButtonEventsCallbacks = new _.a()),
            (this.m_navigationSource = Object(_.b)({
              eActivationSourceType: a.b.UNKNOWN,
              nActiveGamepadIndex: -1,
              nLastActiveGamepadIndex: -1,
            })),
            (this.m_bShowDebugFocusRing = Object(_.b)(!1)),
            (this.m_bRestoringHistory = !1),
            (this.m_fnGamepadEventUpdateBatcher = (t) => t()),
            (this.m_iFocusChangeStack = 0),
            (window.FocusNavController = this),
            this.m_bShowDebugFocusRing.Set(
              "shown" == sessionStorage.getItem(B)
            );
        }
        SetShowDebugFocusRing(t) {
          this.m_bShowDebugFocusRing.Set(t),
            (function (t) {
              sessionStorage.setItem(B, t ? "shown" : void 0);
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
          this.OnButtonDown(t, a.b.UNKNOWN, -1);
        }
        DispatchVirtualButtonClick(t) {
          this.OnButtonDown(t, a.b.GAMEPAD, -1),
            this.OnButtonUp(t, a.b.GAMEPAD, -1);
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
            t === a.a.STEAM_GUIDE ||
            t === a.a.STEAM_QUICK_MENU ||
            t === a.a.CANCEL
          );
        }
        GetEventTarget(t, e = !1) {
          let n = document.activeElement;
          if (this.m_LastActiveNavTree) {
            let o = this.m_navigationSource.Value.eActivationSourceType;
            if (
              !(
                (o != a.b.GAMEPAD && o != a.b.KEYBOARD) ||
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
          var o;
          if (this.m_bSuppressGamepadInput)
            return void M(
              "Ignoring button press - gamepad input is suppressed by parent window"
            );
          this.ChangeNavigationSource(e, n);
          const s = this.GetEventTarget(t, !0);
          M(
            `Firing ${a.a[t]} in tree ${
              null === (o = this.m_LastActiveNavTree) || void 0 === o
                ? void 0
                : o.id
            } at `,
            s
          ),
            this.BatchedUpdate(() =>
              h(s, "vgp_onbuttondown", { button: t, source: e, is_repeat: i })
            );
        }
        OnButtonUp(t, e, n) {
          if (this.m_bSuppressGamepadInput) return;
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
          var e;
          if (
            (this.ChangeNavigationSource(t, -1),
            document.hasFocus() &&
              (t == a.b.MOUSE || t == a.b.TOUCH) &&
              this.m_LastActiveNavTree)
          ) {
            const t = this.m_LastActiveNavTree.GetLastFocusedNode(),
              n = (function (t) {
                if (!D(t)) return !1;
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
            null === (e = this.m_LastActiveNavTree) ||
              void 0 === e ||
              e.TransferFocus(i.BROWSER, n);
          }
        }
        NewGamepadNavigationTree(t) {
          return new L(this, t);
        }
        RegisterGamepadNavigationTree(t, e) {
          return (
            t.SetIsMounted(),
            e
              ? this.m_rgGamepadNavigationTrees.unshift(t)
              : (this.m_rgGamepadNavigationTrees.push(t),
                this.SetActiveNavTree(t, !0)),
            this.m_bGlobalEventsInitialized || this.BindGlobalEventHandlers(),
            () => this.UnregisterGamepadNavigationTree(t)
          );
        }
        UnregisterGamepadNavigationTree(t) {
          T.a(this.m_rgGamepadNavigationTrees, t),
            this.m_LastActiveNavTree == t &&
              ((this.m_LastActiveNavTree = null),
              this.SetActiveNavTree(null, !0));
        }
        GetGamepadNavTreeByID(t) {
          const e = this.m_rgGamepadNavigationTrees.findIndex((e) => e.id == t);
          return e >= 0 ? this.m_rgGamepadNavigationTrees[e] : null;
        }
        OnGamepadNavigationTreeActivated(t, e = !1) {
          this.SetActiveNavTree(t, e);
        }
        OnGamepadNavigationTreeFocused(t, e, n = !1) {
          t != this.m_LastActiveFocusNavTree &&
            t != this.m_LastActiveNavTree &&
            (this.m_LastActiveFocusNavTree.GetParentEmbeddedNavTree() == t ||
            t.GetParentEmbeddedNavTree() == this.m_LastActiveFocusNavTree
              ? (M(
                  `There was a focus event in ${t.id}, allowing focus transfer to activate nav tree due to parent embedded relationship`
                ),
                t.Activate())
              : M(
                  `There was a focus event in ${t.id}, but the active nav tree is ${this.m_LastActiveFocusNavTree.id} so it is being ignored.  Source: ${i[e]}.`
                ));
        }
        BlurNavTree(t) {
          this.m_LastActiveNavTree == t && this.SetActiveNavTree(null, !0),
            T.a(this.m_rgGamepadNavigationTrees, t),
            this.m_rgGamepadNavigationTrees.unshift(t);
        }
        IsActiveFocusNavTree(t) {
          return t == this.m_LastActiveFocusNavTree;
        }
        IsActiveNavTree(t) {
          return t == this.m_LastActiveNavTree;
        }
        SetActiveNavTree(t, e = !1) {
          if (t && this.m_LastActiveNavTree == t) return;
          const n = this.m_LastActiveNavTree;
          n && T.a(this.m_rgGamepadNavigationTrees, n),
            t ||
              (this.m_rgGamepadNavigationTrees.length &&
                (t = this.m_rgGamepadNavigationTrees[
                  this.m_rgGamepadNavigationTrees.length - 1
                ]));
          const i = this.m_LastActiveFocusNavTree == t;
          t && T.a(this.m_rgGamepadNavigationTrees, t),
            (this.m_LastActiveNavTree = t),
            (t && t.BUseVirtualFocus()) || (this.m_LastActiveFocusNavTree = t),
            M(
              `Move from nav tree ${null == n ? void 0 : n.id} to nav tree ${
                null == t ? void 0 : t.id
              } ${e ? "taking focus" : "no focus"}`
            ),
            n && this.m_rgGamepadNavigationTrees.push(n),
            t &&
              (this.m_rgGamepadNavigationTrees.push(t), t.OnActivate(!i && e)),
            n && n.OnDeactivateCallbacks.Dispatch(n, t),
            t && t.OnActivateCallbacks.Dispatch(t, n);
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
            Object(p.a)(
              t == this.m_iFocusChangeStack,
              "out of order focus pop"
            ),
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
          this.m_bSuppressGamepadInput = t;
        }
        TakeFocusChangingIFrame() {
          window.focus();
          let t = this.m_LastActiveFocusNavTree || this.m_LastActiveNavTree;
          t && t.TakeFocus(i.APPLICATION);
        }
        BIsRestoringHistory() {
          return this.m_bRestoringHistory;
        }
        RestoreHistoryTransaction(t) {
          return Object(o.a)(this, void 0, void 0, function* () {
            this.m_bRestoringHistory = !0;
            try {
              yield t();
            } finally {
              this.m_bRestoringHistory = !1;
            }
          });
        }
      }
      Object(o.b)([v.a], G.prototype, "OnButtonDown", null),
        Object(o.b)([v.a], G.prototype, "OnButtonUp", null),
        Object(o.b)([v.a], G.prototype, "OnNavigationTypeChange", null);
      class k {
        constructor(t) {
          (this.m_node = t), (this.m_History = new w(t));
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
          this.m_History.PushState();
        }
        PopState() {
          this.m_History && this.m_History.PopState();
        }
        NavTree() {
          return this.m_node.Tree;
        }
        Node() {
          return this.m_node;
        }
      }
      function W(t, e, n) {
        return "x" == t
          ? e.x + e.width > n.x && e.x < n.x + n.width
          : "y" == t
          ? e.y + e.height > n.y && e.y < n.y + n.height
          : (Object(p.a)(!1, `Invalid axis ${t}`), !1);
      }
      function U(t, e, n) {
        let i;
        return (
          "x" == t
            ? (i = Math.min(e.x + e.width, n.x + n.width) - Math.max(e.x, n.x))
            : "y" == t
            ? (i =
                Math.min(e.y + e.height, n.y + n.height) - Math.max(e.y, n.y))
            : (Object(p.a)(!1, `Invalid axis ${t}`), (i = 0)),
          i < 0 ? 0 : i
        );
      }
      function x(t, e, n) {
        const i = e[t],
          o = (function (t, e) {
            return "x" == t
              ? { min: e.x, max: e.x + e.width }
              : "y" == t
              ? { min: e.y, max: e.y + e.height }
              : void Object(p.a)(!1, `Invalid axis ${t}`);
          })(t, n);
        return i < o.min ? o.min - i : i > o.max ? i - o.max : 0;
      }
      function V(t) {
        if (!t) return pt.NONE;
        const e = t.ownerDocument.defaultView,
          n = e.getComputedStyle(t);
        if ("flex" == n.display)
          switch (n.flexDirection) {
            case "row":
              return "wrap" == n.flexWrap ? pt.GRID : pt.ROW;
            case "row-reverse":
              return pt.ROW_REVERSE;
            case "column":
              return pt.COLUMN;
            case "column-reverse":
              return pt.COLUMN_REVERSE;
          }
        else {
          if ("grid" == n.display) return pt.GRID;
          if (t.childElementCount > 0) {
            const n = e.getComputedStyle(t.firstElementChild);
            if ("left" === n.float) return pt.ROW;
            if ("right" === n.float) return pt.ROW_REVERSE;
            if ("inline" === n.display || "inline-block" === n.display)
              return pt.GRID;
          }
        }
        return pt.COLUMN;
      }
      function H(t) {
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
      }
      function K(t, e, n) {
        const i = [],
          [o, s] = t.GetChildren(),
          r = t.GetActiveChild();
        let a;
        const l = r ? r.Element.getBoundingClientRect() : null;
        if (r) {
          const t = Y(r, e, n);
          if (
            t &&
            !t.offScreen &&
            ((a = j(r, t, t.overlap, n)), a && !a.visibility.offScreen)
          )
            return a;
          t && i.push({ child: r, visibility: t });
        }
        const c = n || l;
        for (let t = 0; t < o.length; t++) {
          const n = o[t];
          if (n == r) continue;
          const s = Y(n, e, c);
          s && i.push({ child: n, visibility: s });
        }
        let u;
        i.sort($);
        for (const t of i) {
          const { child: n, visibility: i } = t;
          if (i.offScreen && u) {
            if (!u.visibility.offScreen) break;
            if (i.distance > u.visibility.distance) break;
          }
          const o = n == r ? a : j(n, i, i.overlap || e, c);
          o && (!u || $(o, u) < 0) && (u = o);
        }
        return u;
      }
      function j(t, e, n, i) {
        switch (t.GetFocusable()) {
          case "none":
            return null;
          case "children":
            return K(t, e.overlap || n, i);
          case "self":
            return { child: t, visibility: e };
        }
      }
      function $(t, e) {
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
      function Y(t, e, n) {
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
      function X(t, e, n) {
        return null == t || isNaN(t) ? t : Math.max(e, Math.min(n, t));
      }
      class z {
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
            case "sine":
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
      class J extends z {
        constructor(t, e, n) {
          super(t, e), (this.m_fnCallback = n);
        }
        Update(t) {
          this.m_fnCallback(t);
        }
      }
      class q extends z {
        constructor(t, e, n) {
          super("ownerDocument" in t ? S(t) : t, n),
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
      const Q = new F("ScrollSnap").Debug;
      let Z = !1;
      let tt;
      function et(t) {
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
          const { scrollTop: t, scrollLeft: o } = mt(i);
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
      function nt(t, e) {
        return "x" == e
          ? [t.left, t.right, t.right - t.left]
          : [t.top, t.bottom, t.bottom - t.top];
      }
      function it(t, e, n, i) {
        let [o, s, r] = nt(t, i),
          [a, l, c] = nt(e, i),
          [u, h] = nt(n, i);
        return o < a && s > l
          ? 0
          : (o < a && r <= c) || (s > l && r > c)
          ? o - a - u
          : (o < a && r > c) || (s > l && r <= c)
          ? s - l + h
          : 0;
      }
      function ot(t) {
        return "auto" == t
          ? 0
          : t.endsWith("px")
          ? parseInt(t)
          : (console.log("Unsupported length", t), 0);
      }
      function st(t) {
        if (!("ownerDocument" in t))
          return { left: 0, right: 0, top: 0, bottom: 0 };
        const e = t.ownerDocument.defaultView.getComputedStyle(t);
        return {
          left: ot(e.scrollMarginLeft),
          right: ot(e.scrollMarginRight),
          top: ot(e.scrollMarginTop),
          bottom: ot(e.scrollMarginBottom),
        };
      }
      function rt(t, e) {
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
              left: ot(e.scrollPaddingLeft),
              right: ot(e.scrollPaddingRight),
              top: ot(e.scrollPaddingTop),
              bottom: ot(e.scrollPaddingBottom),
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
      function at(t) {
        return t > -1 && t < 1;
      }
      function lt(t, e, n, i, o) {
        Q(
          "----------------------------------------------------------------------------------"
        ),
          Q("Scrolling Into View:", e);
        let s = [],
          r = e,
          a = et(e),
          l = null != o ? o : Number.MAX_VALUE;
        for (; r; ) {
          let t = O(r);
          t || (t = S(r));
          let e = st(r),
            n = rt(t, et(t)),
            c = dt(t),
            u = { element: t, left: 0, top: 0 };
          if (
            (Q(
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
              !I(t, "y") ||
              ((u.top = it(a, n, e, "y")),
              (u.top = X(u.top, -c.scrollTop, c.MaxScrollTop() - c.scrollTop)),
              o &&
                ((u.top = Math.min(l, Math.abs(u.top)) * (u.top < 0 ? -1 : 1)),
                (l -= Math.abs(u.top))),
              Q(`- checked y: ${u.top}`)),
            (i && "x" != i) ||
              !I(t, "x") ||
              ((u.left = it(a, n, e, "x")),
              (u.left = X(
                u.left,
                -c.scrollLeft,
                c.MaxScrollLeft() - c.scrollLeft
              )),
              o &&
                ((u.left =
                  Math.min(l, Math.abs(u.left)) * (u.left < 0 ? -1 : 1)),
                (l -= Math.abs(u.left))),
              Q(`- checked x: ${u.left}`)),
            s.push(u),
            o && !l)
          )
            break;
          if (!("ownerDocument" in t)) break;
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
          if (at(t.left) && at(t.top)) continue;
          let e = dt(t.element),
            i = e.scrollTop + t.top,
            o = e.scrollLeft + t.left;
          (o = X(o, 0, e.MaxScrollLeft())),
            (i = X(i, 0, e.MaxScrollTop())),
            (at(e.scrollLeft - o) && at(e.scrollTop - i)) ||
              (e.scrollTo({ left: o, top: i, behavior: n }),
              c || (Q("Scrolling:"), (c = !0)),
              Q(
                `- ${t.top},${t.left} => ${i}, ${o}, behavior: ${n}`,
                t.element
              ));
        }
      }
      function ct(t, e) {
        const { top: n, left: i, behavior: o } = e,
          s = dt(t);
        s.scrollTo({
          top: s.scrollTop + (null != n ? n : 0),
          left: s.scrollLeft + (null != i ? i : 0),
          behavior: o,
        });
      }
      class ut {
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
                this.m_animation = new J(this.m_window, t, (t) => {
                  this.m_window.scrollTo({
                    left: e + (i - e) * t,
                    top: n + (o - n) * t,
                    behavior: "auto",
                  });
                });
              } else
                (this.m_element.style.scrollSnapType = "initial"),
                  (this.m_animation = new q(
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
      Object(o.b)([v.a], ut.prototype, "ResetScrollState", null);
      const ht = new WeakMap();
      function dt(t) {
        let e = ht.get(t);
        return e || ((e = new ut(t)), ht.set(t, e)), e;
      }
      function mt(t) {
        const e = ht.get(t);
        return e
          ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
          : { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop };
      }
      const gt = new F("FocusNavigationMovement").Debug;
      var pt, vt, _t, ft;
      !(function (t) {
        (t[(t.NONE = 0)] = "NONE"),
          (t[(t.COLUMN = 1)] = "COLUMN"),
          (t[(t.ROW = 2)] = "ROW"),
          (t[(t.COLUMN_REVERSE = 3)] = "COLUMN_REVERSE"),
          (t[(t.ROW_REVERSE = 4)] = "ROW_REVERSE"),
          (t[(t.GRID = 5)] = "GRID"),
          (t[(t.GEOMETRIC = 6)] = "GEOMETRIC");
      })(pt || (pt = {})),
        (function (t) {
          (t[(t.FIRST = 0)] = "FIRST"),
            (t[(t.LAST = 1)] = "LAST"),
            (t[(t.MAINTAIN_X = 2)] = "MAINTAIN_X"),
            (t[(t.MAINTAIN_Y = 3)] = "MAINTAIN_Y"),
            (t[(t.PREFERRED_CHILD = 4)] = "PREFERRED_CHILD");
        })(vt || (vt = {})),
        (function (t) {
          (t[(t.Standard = 0)] = "Standard"),
            (t[(t.NoTransform = 1)] = "NoTransform"),
            (t[(t.NoTransformSparseContent = 2)] = "NoTransformSparseContent");
        })(_t || (_t = {})),
        (function (t) {
          (t[(t.INVALID = 0)] = "INVALID"),
            (t[(t.FORWARD = 1)] = "FORWARD"),
            (t[(t.BACKWARD = 2)] = "BACKWARD");
        })(ft || (ft = {}));
      class bt {
        constructor(t, e, n) {
          (this.m_rgChildren = []),
            (this.m_iActiveChild = -1),
            (this.m_bChildrenSorted = !1),
            (this.m_bAutoFocusChild = !1),
            (this.m_bMounted = !1),
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
        CreateHandle() {
          return new k(this);
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
                t.SetRetainFocusParent(this.m_RetainFocusParent);
        }
        OnMount(t) {
          (this.m_element = t),
            this.m_Parent
              ? this.m_Parent.AddChild(this)
              : Object(p.a)(
                  this == this.m_Tree.Root,
                  "Only root should have no parent"
                ),
            (this.m_bMounted = !0),
            this.RegisterDOMEvents();
          const e =
            this.m_Properties.autoFocus ||
            (this.m_RetainFocusParent && this.m_RetainFocusParent.BHasFocus());
          if (this.BWantsAutoFocus() || e) {
            let t = -1;
            this.m_rgChildren.length &&
              (this.EnsureChildrenSorted(),
              (t = this.m_rgChildren.findIndex((t) => t.BWantsAutoFocus()))),
              (this.m_Properties.autoFocus || e || -1 !== t) &&
                ((this.m_iActiveChild = t),
                !this.m_Parent || this.m_Parent.m_element
                  ? this.BTakeFocus(i.APPLICATION)
                  : (this.m_Parent.m_bAutoFocusChild = !0));
          } else if (this.m_rgChildren.length) {
            const t = this.m_rgChildren.findIndex((t) => t.BFocusWithin());
            -1 != t &&
              ((this.m_iActiveChild = t),
              Object(p.a)(
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
            (this.m_bMounted = !1),
            this.m_bFocused &&
              (gt(
                `The focused node is unmounting, ${
                  this.m_RetainFocusParent
                    ? "will transfer to retain focus ancestor"
                    : "will blur"
                }.`
              ),
              this.m_RetainFocusParent
                ? this.m_RetainFocusParent.OnFocusedDecendantRemoved(this)
                : this.m_Tree.TransferFocus(i.APPLICATION, null)),
            this.UnregisterDOMEvents(),
            this.m_Parent
              ? this.m_Parent.RemoveChild(this)
              : Object(p.a)(
                  this == this.m_Tree.Root,
                  "Only root should have no parent"
                );
        }
        RegisterDOMEvents() {
          !this.m_rgNavigationHandlers.length &&
            (this.m_rgChildren.length >= 2 ||
              this.m_Properties.layout != pt.NONE ||
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
          Object(p.a)(-1 !== e, "Child was not found to remove"),
            -1 !== e &&
              (e <= this.m_iActiveChild && this.m_iActiveChild--,
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
        GetActiveChild() {
          return (
            this.EnsureChildrenSorted(),
            this.m_iActiveChild >= 0 &&
            this.m_iActiveChild < this.m_rgChildren.length
              ? this.m_rgChildren[this.m_iActiveChild]
              : null
          );
        }
        EnsureChildrenSorted(t = !1) {
          if (!this.m_bChildrenSorted || t) {
            let t;
            -1 != this.m_iActiveChild &&
              (t = this.m_rgChildren[this.m_iActiveChild]),
              this.m_rgChildren.sort((t, e) => {
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
              t && (this.m_iActiveChild = this.m_rgChildren.indexOf(t)),
              (this.m_bChildrenSorted = !0);
          }
        }
        GetLastFocusElement() {
          const t = this.GetActiveChild();
          return t ? t.GetLastFocusElement() : this.m_element;
        }
        OnDOMFocus(t) {
          this.m_bFocused || this.m_Tree.TransferFocus(i.BROWSER, this);
        }
        OnDOMBlur(t) {
          this.m_bFocused && this.m_Tree.TransferFocus(i.BROWSER, null);
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
            ft.FORWARD,
            a.a.INVALID
          );
          return this.InternalFocusDescendant(e, t);
        }
        BFocusLastChild(t) {
          const e = this.FindNextFocusableChildInDirection(
            this.m_rgChildren.length,
            ft.BACKWARD,
            a.a.INVALID
          );
          return this.InternalFocusDescendant(e, t);
        }
        FindFocusableDescendant(t, e) {
          const n = H(t),
            {
              focusableIfNoChildren: i,
              childFocusDisabled: o,
            } = this.m_Properties;
          if (o) return null;
          if (this.m_rgChildren.length) {
            this.EnsureChildrenSorted();
            const {
              navEntryPreferPosition: o,
              resetNavOnEntry: s,
            } = this.m_Properties;
            let r,
              a = this.m_iActiveChild;
            if (
              (s && void 0 !== t && (a = -1),
              a < 0 || a >= this.m_rgChildren.length)
            ) {
              a = 0;
              const t = this.GetLayout();
              (t != pt.ROW_REVERSE && t != pt.COLUMN_REVERSE && o != vt.LAST) ||
                (a = this.m_rgChildren.length - 1);
            }
            if ((o == vt.MAINTAIN_X || o == vt.MAINTAIN_Y || e) && n) {
              let i, s;
              o == vt.MAINTAIN_X ? (i = "x") : o == vt.MAINTAIN_Y && (i = "y"),
                i == g[n] && (s = this.m_Tree.GetLastFocusedMovementRect(g[n])),
                gt(
                  `Taking focus while preserving ${vt[o]} preserved: ${i} movement: ${n}, node:`,
                  s || e
                );
              const a = this.ComputeRelativeDirection(t, pt.GRID);
              if (s || e) {
                const o = a == ft.BACKWARD ? this.m_rgChildren.length - 1 : 0;
                r = this.FindClosestChildInNextAxiallyAlignedSet(
                  i || g[n],
                  a,
                  t,
                  s || e,
                  o,
                  this.m_rgChildren[o].GetBoundingRect()
                );
              } else if (i != g[n]) {
                const e = a == ft.BACKWARD ? this.m_rgChildren.length : -1;
                r = this.FindNextFocusableChildInDirection(e, a, t);
              }
            } else if (o == vt.PREFERRED_CHILD) {
              for (const e of this.m_rgChildren)
                if (
                  ((r = e.BWantsPreferredFocus() && e.FindFocusableNode(t)), r)
                )
                  return r;
            } else
              o == vt.LAST &&
                (r = this.FindNextFocusableChildInDirection(
                  a + 1,
                  ft.BACKWARD,
                  t
                ));
            return (
              r ||
                (r = this.FindNextFocusableChildInDirection(
                  a - 1,
                  ft.FORWARD,
                  t
                )),
              r ||
                (r = this.FindNextFocusableChildInDirection(a, ft.BACKWARD, t)),
              r || (i ? this : null)
            );
          }
          return null;
        }
        BVisibleChildTakeFocus(t) {
          var e;
          const n = K(
            this,
            this.Element
              ? this.Element.getBoundingClientRect()
              : document.body.getBoundingClientRect()
          );
          return (
            gt(
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
          if (this.m_rgChildren.length < 2) return pt.NONE;
          return V(this.m_element);
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
            case a.a.DIR_UP:
              n && (r = n(t.detail, this));
              break;
            case a.a.DIR_RIGHT:
              i && (r = i(t.detail, this));
              break;
            case a.a.DIR_DOWN:
              o && (r = o(t.detail, this));
              break;
            case a.a.DIR_LEFT:
              s && (r = s(t.detail, this));
          }
          return r;
        }
        InternalFocusDescendant(t, e, n) {
          return !!t && (this.m_Tree.TransferFocus(e, t, H(n)), !0);
        }
        BTryInternalNavigation(t, e) {
          const n = this.GetLayout();
          let o,
            s = this.ComputeRelativeDirection(t, n);
          if (
            (gt(
              `Handling navigation event ${a.a[t]} - ${pt[n]} - ${ft[s]}`,
              this.m_element
            ),
            s == ft.INVALID)
          )
            return !1;
          if (this.m_Properties.focusable && this.m_bFocused)
            return gt("Skipping navigation within focused element"), !1;
          if ((this.EnsureChildrenSorted(!0), n == pt.GRID))
            o = this.FindNextFocusableChildInGrid(this.m_iActiveChild, s, t);
          else {
            let e = this.m_iActiveChild;
            -1 == e && (e = s == ft.FORWARD ? -1 : this.m_rgChildren.length),
              (o = this.FindNextFocusableChildInDirection(e, s, t));
          }
          if (o) {
            const n = H(t);
            if (this.GetScrollIntoViewType() == _t.NoTransformSparseContent) {
              const t =
                  ("y" == n ? window.innerHeight : window.innerWidth) /
                  (e ? 4.5 : 3.33),
                i = et(o.Element);
              if (
                (i.top > window.innerHeight &&
                  i.bottom > window.innerHeight + t) ||
                (i.bottom < 0 && i.top < -t) ||
                (i.left > window.innerWidth &&
                  i.right > window.innerWidth + t) ||
                (i.right < 0 && i.left < -t)
              )
                return (
                  gt(`Element too far away, scrolling ${t} on ${n} axis `),
                  lt(o.Element, o.Element, "smooth", n, t),
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
            : _t.Standard;
        }
        GetRelativeDirection(t) {
          return this.ComputeRelativeDirection(t, this.GetLayout());
        }
        ComputeRelativeDirection(t, e) {
          let n = e == pt.ROW_REVERSE || e == pt.COLUMN_REVERSE;
          switch (e) {
            case pt.ROW:
            case pt.ROW_REVERSE:
              switch (t) {
                case a.a.DIR_LEFT:
                  return n ? ft.FORWARD : ft.BACKWARD;
                case a.a.DIR_RIGHT:
                  return n ? ft.BACKWARD : ft.FORWARD;
                default:
                  return ft.INVALID;
              }
            case pt.COLUMN:
            case pt.COLUMN_REVERSE:
              switch (t) {
                case a.a.DIR_UP:
                  return n ? ft.FORWARD : ft.BACKWARD;
                case a.a.DIR_DOWN:
                  return n ? ft.BACKWARD : ft.FORWARD;
                default:
                  return ft.INVALID;
              }
            case pt.GRID:
              switch (t) {
                case a.a.DIR_LEFT:
                case a.a.DIR_UP:
                  return n ? ft.FORWARD : ft.BACKWARD;
                case a.a.DIR_RIGHT:
                case a.a.DIR_DOWN:
                  return n ? ft.BACKWARD : ft.FORWARD;
                default:
                  return ft.INVALID;
              }
            default:
              return ft.INVALID;
          }
        }
        AdvanceIndex(t, e) {
          return t + (e == ft.FORWARD ? 1 : -1);
        }
        FindNextFocusableChildInDirection(t, e, n) {
          let i = e == ft.FORWARD ? 1 : -1;
          for (let e = t + i; e >= 0 && e < this.m_rgChildren.length; e += i) {
            const t = this.m_rgChildren[e].FindFocusableNode(n);
            if (t) return t;
          }
          return null;
        }
        ScanChildren(t, e, n) {
          let i = e == ft.FORWARD ? 1 : -1;
          for (let e = t; e >= 0 && e < this.m_rgChildren.length; e += i)
            if (n(this.m_rgChildren[e], e)) return e;
          return -1;
        }
        FindNextFocusableChildInGrid(t, e, n) {
          const i = n == a.a.DIR_UP || n == a.a.DIR_DOWN,
            o = this.GetLastFocusElement();
          if (!o || o == this.m_element)
            return (
              Object(p.a)(!1, "No active child for grid navigation"),
              this.FindFocusableDescendant(n)
            );
          const s = this.GetActiveDescendant().GetBoundingRect();
          if (n == a.a.DIR_UP || n == a.a.DIR_DOWN) {
            const t = this.m_Tree.GetLastFocusedMovementRect("x");
            t && ((s.x = t.x), (s.width = t.width));
          }
          if (i) {
            let i = t;
            for (; -1 != i; ) {
              const t = this.ScanChildren(
                this.AdvanceIndex(i, e),
                e,
                (t) => !W("y", s, t.GetBoundingRect())
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
            let i = e == ft.FORWARD ? 1 : -1;
            for (
              let o = this.AdvanceIndex(t, e);
              o >= 0 && o < this.m_rgChildren.length;
              o += i
            ) {
              const t = this.m_rgChildren[o];
              if (!W("y", s, t.GetBoundingRect())) return null;
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
              !(!s || W(g[t], s, n)) ||
              (r.push({ child: e, overlap: U(t, i, n), dist: x(t, a, n) }), !1)
            );
          }),
            e == ft.BACKWARD && r.reverse(),
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
            [this.m_rgChildren, this.m_iActiveChild]
          );
        }
        SetActiveChild(t) {
          let e;
          t instanceof bt
            ? (this.EnsureChildrenSorted(), (e = this.m_rgChildren.indexOf(t)))
            : (e = t),
            (this.m_iActiveChild = e);
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
          this.BChildTakeFocus(i.APPLICATION) ||
            this.m_Tree.TransferFocus(i.APPLICATION, this);
        }
        SetDOMFocusAndScroll(t, e) {
          this.UpdateParentActiveChild(),
            this.m_Tree.BIsActiveFocus()
              ? (Object(p.a)(
                  !this.m_Tree.BUseVirtualFocus(),
                  "Virtual focus tree should not have browser focus"
                ),
                this.m_element.focus({ preventScroll: !0 }))
              : this.m_Tree.BUseVirtualFocus() ||
                gt(
                  `Didn't move focus to element as tree ${this.m_Tree.id} is not active focus tree`
                ),
            (function (t, e) {
              var n, i, o, s;
              const r = t.Element;
              let a = t,
                l =
                  null === (n = t.m_Properties) || void 0 === n
                    ? void 0
                    : n.scrollIntoViewType;
              for (let e = t.Parent; e; e = e.Parent)
                (null === (i = e.m_Properties) || void 0 === i
                  ? void 0
                  : i.scrollIntoViewWhenChildFocused) && (a = e),
                  void 0 === l &&
                    (l =
                      null === (o = e.m_Properties) || void 0 === o
                        ? void 0
                        : o.scrollIntoViewType);
              if ((void 0 === l && (l = Z ? _t.NoTransform : _t.Standard), !r))
                return;
              if (
                (null === (s = a.m_Properties) || void 0 === s
                  ? void 0
                  : s.fnScrollIntoViewHandler) &&
                !1 !== a.m_Properties.fnScrollIntoViewHandler(t, e, a)
              )
                return;
              const c = a.m_element,
                u = l == _t.NoTransform || l == _t.NoTransformSparseContent;
              if (e) {
                const e = u ? et(c) : c.getBoundingClientRect();
                let n = !1;
                const i = Math.max(1.4 * (e.bottom - e.top), 40);
                ((tt && performance.now() - tt < 500) ||
                  e.bottom < -i ||
                  e.top > window.innerHeight + i) &&
                  (n = !0);
                let o = n ? "auto" : "smooth";
                n && (tt = performance.now()),
                  t.Tree.Controller.BIsRestoringHistory() && (o = "auto"),
                  u
                    ? lt(0, c, o)
                    : c.scrollIntoView({ behavior: o, block: "nearest" });
              } else
                u
                  ? lt(0, c, "auto")
                  : c.scrollIntoView({
                      behavior: "auto",
                      block: "nearest",
                      inline: "nearest",
                    });
            })(this, e),
            this.m_Tree.OnChildActivated(t);
        }
      }
      Object(o.b)([v.a], bt.prototype, "OnDOMFocus", null),
        Object(o.b)([v.a], bt.prototype, "OnDOMBlur", null),
        Object(o.b)([v.a], bt.prototype, "OnNavigationEvent", null);
      const Ct = "GamepadInput";
      var Ft;
      function Nt(t) {
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
      })(Ft || (Ft = {}));
      class At {
        constructor(t) {
          (this.m_bIsGamepadInputExternallyControlled = !1),
            (this.m_NavigationController = t),
            Nt("BrowserView.RegisterForMessageFromParent") &&
            Nt("BrowserView.PostMessageToParent")
              ? ((this.m_bIsGamepadInputExternallyControlled = !0),
                (this.m_postMessage = new wt()))
              : ((this.m_bIsGamepadInputExternallyControlled =
                  window.top != window.self),
                (this.m_postMessage = new Rt(window.top))),
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
          let e = Ft.Basic;
          window.bSupportsGamepadUI && (e = Ft.Full),
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
      Object(o.b)([v.a], At.prototype, "OnFocusChanged", null),
        Object(o.b)([v.a], At.prototype, "OnMessage", null),
        Object(o.b)([v.a], At.prototype, "PostPageUnloading", null);
      class Rt {
        constructor(t) {
          (this.m_postWindow = t),
            window.addEventListener("message", this.OnMessage);
        }
        RegisterForMessage(t) {
          this.m_fnCallback = t;
        }
        PostMessage(t) {
          let e = JSON.stringify(t);
          this.m_postWindow.postMessage({ gamepadMessage: Ct, args: e }, "*");
        }
        OnMessage(t) {
          let e = null == t ? void 0 : t.data;
          if (e && e.gamepadMessage == Ct && e.args) {
            const t = JSON.parse(e.args);
            this.m_fnCallback(t);
          }
        }
      }
      Object(o.b)([v.a], Rt.prototype, "OnMessage", null);
      class wt {
        constructor() {
          SteamClient.BrowserView.RegisterForMessageFromParent(this.OnMessage);
        }
        RegisterForMessage(t) {
          this.m_fnCallback = t;
        }
        PostMessage(t) {
          let e = JSON.stringify(t);
          SteamClient.BrowserView.PostMessageToParent(Ct, e);
        }
        OnMessage(t, e) {
          if (t == Ct) {
            const t = JSON.parse(e);
            this.m_fnCallback(t);
          }
        }
      }
      Object(o.b)([v.a], wt.prototype, "OnMessage", null);
      n("SHRt");
      class Tt extends a.c {
        constructor(t) {
          super(),
            (this.m_lastButtonDown = a.a.INVALID),
            this.SetSourceType(a.b.KEYBOARD),
            t.addEventListener("keydown", this.OnKeyDown),
            t.addEventListener("keyup", this.OnKeyUp),
            t.addEventListener("blur", this.Reset);
        }
        OnKeyDown(t) {
          if ("Tab" == t.code) return void t.preventDefault();
          const e = this.TranslateKey(t);
          e != a.a.INVALID &&
            (t.preventDefault(),
            e != this.m_lastButtonDown &&
              (this.Reset(),
              this.OnButtonDown(e),
              (this.m_lastButtonDown = e)));
        }
        OnKeyUp(t) {
          const e = this.TranslateKey(t);
          e != a.a.INVALID &&
            (this.OnButtonUp(e),
            (this.m_lastButtonDown = a.a.INVALID),
            t.preventDefault());
        }
        Reset() {
          this.m_lastButtonDown != a.a.INVALID &&
            (this.OnButtonUp(this.m_lastButtonDown),
            (this.m_lastButtonDown = a.a.INVALID));
        }
        TranslateKey(t) {
          const e = t.code,
            n = t.ctrlKey,
            i =
              D(t.target) &&
              ("INPUT" === t.target.nodeName ||
                "TEXTAREA" === t.target.nodeName);
          if (n)
            switch (e) {
              case "Digit1":
                return a.a.STEAM_GUIDE;
              case "Digit2":
                return a.a.STEAM_QUICK_MENU;
              case "Digit3":
                return a.a.SELECT;
              case "Digit4":
                return a.a.BUMPER_LEFT;
              case "Digit5":
                return a.a.BUMPER_RIGHT;
              case "Digit6":
                return a.a.LSTICK_CLICK;
              case "Digit7":
                return a.a.RSTICK_CLICK;
              case "Digit8":
                return a.a.OPTIONS;
              case "Digit9":
                return a.a.SELECT;
              case "Digit0":
                return a.a.START;
            }
          switch (e) {
            case "Escape":
              return a.a.CANCEL;
            case "Enter":
              return i ? a.a.INVALID : a.a.OK;
            case "Backspace":
              return i ? a.a.INVALID : a.a.SECONDARY;
            case "ArrowUp":
              return a.a.DIR_UP;
            case "ArrowDown":
              return a.a.DIR_DOWN;
            case "ArrowLeft":
              return a.a.DIR_LEFT;
            case "ArrowRight":
              return a.a.DIR_RIGHT;
          }
          return a.a.INVALID;
        }
      }
      Object(o.b)([v.a], Tt.prototype, "OnKeyDown", null),
        Object(o.b)([v.a], Tt.prototype, "OnKeyUp", null),
        Object(o.b)([v.a], Tt.prototype, "Reset", null);
      class Dt extends bt {
        constructor(t, e) {
          super(e.m_Tree, e, e.m_FocusRing);
        }
        OnMount(t) {
          super.OnMount(t), (t.__nav_wrapper = this);
          const e = t.__nav_tree;
          e && this.BindTree(e);
        }
        BindTree(t) {
          t.GetParentEmbeddedNavTree() &&
            ((this.m_wrappedTree = t),
            t.OnActivateCallbacks.Register(this.OnWrappedTreeActivated),
            t.BIsActive() && this.OnWrappedTreeActivated(),
            t.SetOnUnhandledButtonCallback(this.OnWrappedTreeUnhandledButton));
        }
        OnWrappedTreeActivated() {
          this.BHasFocus() || this.m_Tree.TransferFocus(i.APPLICATION, this);
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
      Object(o.b)([v.a], Dt.prototype, "OnWrappedTreeActivated", null),
        Object(o.b)([v.a], Dt.prototype, "OnWrappedTreeUnhandledButton", null);
      const St = "VirtualKeyboardMessage";
      function Ot(t) {
        return t && t.type === St;
      }
      class It {
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
          t == St && this.InternalDispatchMessage(JSON.parse(e));
        }
        OnMessage(t) {
          this.InternalDispatchMessage(t.data);
        }
        InternalDispatchMessage(t) {
          Ot(t) && t.message;
        }
        SendMessage(t) {
          const e = Object.assign({ type: "VirtualKeyboardMessage" }, t);
          Nt("BrowserView.PostMessageToParent")
            ? SteamClient.BrowserView.PostMessageToParent(
                e.type,
                JSON.stringify(e)
              )
            : (Object(p.a)(
                window.parent && window.parent != window,
                "No parent window to post to"
              ),
              window.parent.postMessage(e, "*"));
        }
      }
      Object(o.b)([v.a], It.prototype, "OnBrowserViewMessage", null),
        Object(o.b)([v.a], It.prototype, "OnMessage", null);
      Object(o.b)(
        [v.a],
        class {
          constructor(t, e) {
            (this.m_refKeyboard = e), t.on("message", this.OnMessage);
          }
          OnMessage(t, e, n) {
            if (t == St) {
              const t = JSON.parse(e);
              if (Ot(t))
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
      var Et = n("8+ko"),
        yt = n.n(Et);
      function Lt(t) {
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
          s = 0,
          a = 0,
          l = 0,
          c = 0;
        t.prepend(n);
        const u = (t) => {
            const e = t.GetBoundingRect(),
              i = n[0].getBoundingClientRect();
            return {
              left: e.x - i.x - 0,
              top: e.y - i.y - 0,
              height: e.height,
              width: e.width,
            };
          },
          h = (t) => {
            (s = t.left),
              (a = t.top),
              (l = t.height),
              (c = t.width),
              i.css({ left: s, top: a, height: l, width: c });
          },
          d = (t) => {
            if (
              (i && (i.remove(), (i = null)),
              o && (window.clearInterval(o), (o = null)),
              t && t.BWantsFocusRing())
            ) {
              i = r()("<div/>", {
                style: "position: absolute; pointer-events: none; ",
                class: yt.a.FocusRing,
              });
              let e = u(t);
              h(e),
                n.append(i),
                (o = window.setInterval(
                  () =>
                    ((t) => {
                      if (t && t.BWantsFocusRing() && i) {
                        let e = u(t);
                        (e.left == s &&
                          e.top == a &&
                          e.height == l &&
                          e.width == c) ||
                          h(e);
                      }
                    })(t),
                  200
                ));
            }
          };
        return {
          OnBlur: () => d(null),
          OnFocus: (t, e) => d(e),
          OnFocusChange: (t, e, n) => d(n),
        };
      }
      function Pt(t) {
        return !!t.is_repeat;
      }
      Object.seal({ onMoveUp: Mt, onMoveDown: Mt }),
        Object.seal({ onMoveRight: Mt, onMoveLeft: Mt });
      function Mt(t, e) {
        if (t.is_repeat) return !1;
        const n = e.GetRelativeDirection(t.button);
        return n == ft.FORWARD
          ? e.BFocusFirstChild(i.GAMEPAD)
          : n == ft.BACKWARD && e.BFocusLastChild(i.GAMEPAD);
      }
      function Bt(t) {
        return t ? Function("event", t) : null;
      }
      function Gt() {
        return !0;
      }
      function kt(t) {
        return "BlockMovement" == t
          ? Gt
          : "RepeatNavigationBoundary" == t
          ? Pt
          : t
          ? Function("detail", t)
          : null;
      }
      function Wt(t) {
        this.click(), t.stopPropagation();
      }
      function Ut(t) {
        r()(this).find("a")[0].click();
      }
      function xt(t) {
        const e = t.currentTarget;
        if (!D(e)) return !1;
        const n = t.detail.is_repeat ? 4.5 : 3.33,
          i = "smooth",
          o = e.ownerDocument,
          s = o.defaultView;
        switch (t.detail.button) {
          case a.a.DIR_UP:
            if (s.scrollY > 3)
              return ct(s, { top: -s.innerHeight / n, behavior: i }), !0;
            break;
          case a.a.DIR_RIGHT:
            if (s.scrollX + s.innerWidth < o.body.clientWidth - 3)
              return ct(s, { left: s.innerWidth / n, behavior: i }), !0;
            break;
          case a.a.DIR_DOWN:
            if (s.scrollY + s.innerHeight < o.body.clientHeight - 3)
              return ct(s, { top: s.innerHeight / n, behavior: i }), !0;
            break;
          case a.a.DIR_LEFT:
            if (s.scrollX > 3)
              return ct(s, { left: s.innerWidth / n, behavior: i }), !0;
        }
        return !1;
      }
      function Vt(t, e) {
        const n = window.history.state;
        if (n && n[t] && n[t].navState) {
          const { navState: o, hadFocus: s } = n[t];
          e.Tree.Controller.RestoreHistoryTransaction(() => {
            var t, n;
            (t = e),
              (n = o),
              R.RestoreSerializedNavNode(t, n),
              s && (e.Tree.Activate(), e.BTakeFocus(i.APPLICATION));
          });
        }
      }
      var Ht;
      !(function (t) {
        (t[(t.Unknown = 0)] = "Unknown"),
          (t[(t.NotNeeded = 1)] = "NotNeeded"),
          (t[(t.InReactTree = 2)] = "InReactTree");
      })(Ht || (Ht = {}));
      const Kt = new It();
      let jt,
        $t = !1,
        Yt = null,
        Xt = null;
      function zt(t) {
        $t ||
          ((Yt = new G()),
          (window.legacyWebFocusNavController = Yt),
          (jt = new At(Yt)),
          jt.BIsGamepadInputExternallyControlled() || Yt.RegisterInputSource(t),
          (function (t) {
            r()("html").addClass("gpnav_active");
            const e = r()("body"),
              n = t.NewGamepadNavigationTree("legacy"),
              i = Lt(e);
            (n.Root.m_FocusRing = i),
              n.Root.SetProperties({
                scrollIntoViewType: _t.NoTransformSparseContent,
              }),
              (window.__nav_tree_root = n),
              qt.set(document.body, n.Root),
              te(document.body, n.Root),
              oe(void 0, !0),
              t.RegisterGamepadNavigationTree(n, !1),
              r()(document.body).on("vgp_onbuttondown", function (t) {
                n.HandleButtonDownEventAsLogicalEvent(t.originalEvent);
              }),
              u(document.body, xt);
            new MutationObserver(Jt).observe(document.body, {
              childList: !0,
              subtree: !0,
            }),
              (a = !0),
              (Z = a),
              (o = "legacy_web_root"),
              (s = n.Root),
              window.addEventListener("popstate", () => Vt(o, s)),
              s.Tree.Controller.FocusChangedCallbacks.Register(() => {
                const t = {
                  navState: ((e = s), R.SerializeNavNode(e, !0, !1)),
                  hadFocus: s.Tree.BIsActive(),
                };
                var e;
                window.history.replaceState(
                  Object.assign(Object.assign({}, window.history.state), {
                    [o]: t,
                  }),
                  null
                );
              }),
              Vt(o, s),
              Object.assign(window, ue),
              window.dispatchEvent(new CustomEvent("vgp_gamepadnavready"));
            var o, s;
            var a;
          })(Yt)),
          ($t = !0);
      }
      function Jt(t) {
        for (const e of t) {
          const t = [],
            n = [];
          if ("childList" === e.type) {
            for (let n = 0; n < e.addedNodes.length; n++) {
              const i = e.addedNodes[n];
              if (i.nodeType === Node.ELEMENT_NODE) {
                const e = i;
                e.parentElement && t.push(e);
              }
            }
            for (let t = 0; t < e.removedNodes.length; t++) {
              const i = e.removedNodes[t];
              i.nodeType === Node.ELEMENT_NODE && n.push(i);
            }
          }
          t.length && oe(r()(t)), n.length && ie(r()(n));
        }
      }
      const qt = new WeakMap(),
        Qt = new WeakMap();
      let Zt = [];
      function te(t, e) {
        if (e instanceof bt) {
          const n = e.GetDepth();
          Zt[n] || (Zt[n] = []), Zt[n].push([t, e]);
        }
        qt.set(t, e);
      }
      function ee(t, e) {
        const n = Qt.has(t) ? Qt.get(t) : [];
        n.push(e), Qt.set(t, n);
      }
      function ne(t) {
        return "jquery" in t
          ? qt.get(t[0]) || Ht.Unknown
          : qt.get(t) || Ht.Unknown;
      }
      function ie(t) {
        t.find("*")
          .addBack()
          .each(function () {
            var t;
            null === (t = Qt.get(this)) ||
              void 0 === t ||
              t.forEach((t) => t()),
              qt.delete(this),
              Qt.delete(this),
              r()(this).attr("data-nav-modal") && ce();
          });
      }
      function oe(t, e = !1) {
        performance.now();
        const n =
          "a,button,textarea,input:not(input[type=hidden]),label:not([for]),[data-panel],[data-react-nav-root],[data-nav-modal]";
        r()(n, t)
          .addBack(n)
          .each(function () {
            var t;
            (function (t) {
              return "jquery" in t ? qt.has(t[0]) : qt.has(t);
            })((t = this)) || ae(t);
          }),
          (function () {
            for (let t = Zt.length - 1; t >= 0; t--)
              if (Zt[t])
                for (let [e, n] of Zt[t])
                  ee(e, n.Tree.RegisterNavigationItem(n, e));
            Zt = [];
          })();
      }
      function se(t) {
        ie(r()(t)), oe(r()(t));
      }
      function re(t) {
        const e = r()(t.Element);
        return (
          !e.data("gpFocusDisabled") &&
          e.is(":visible") &&
          "hidden" != e.css("visibility") &&
          ((e.outerWidth() > 0 && e.outerHeight() > 0) ||
            "hidden" !== e.css("overflow"))
        );
      }
      function ae(t) {
        var e, n, s, a, l, h, g;
        const v = r()(t),
          _ = le(t);
        if (_ instanceof Dt || _ == Ht.InReactTree)
          return te(t, Ht.InReactTree), Ht.InReactTree;
        const f = _.Tree;
        let b = v.data("reactNavRoot")
            ? new Dt(v.data("reactNavRoot"), _)
            : f.CreateNode(_, _.m_FocusRing),
          C = v.data("panel") || {};
        if (
          (r()(t).attr("data-nav-modal") &&
            (function (t) {
              Xt &&
                (Object(p.a)(
                  !1,
                  "Creating a new modal nav tree while one already exists. A modal opening another modal is not currently supported."
                ),
                ce());
              Xt = Yt.NewGamepadNavigationTree("modal_dialog");
              const e = Lt(r()("body"));
              (Xt.Root.m_FocusRing = e),
                Xt.Root.SetProperties({}),
                te(t, Xt.Root),
                oe(t),
                u(Xt.Root.m_element, (t) => !0),
                Yt.RegisterGamepadNavigationTree(Xt, !1);
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
            clickOnActivate: N,
            maintainX: A,
            maintainY: R,
            enableVirtualKeyboard: w,
            preferredChild: T,
            onOKActionDescription: D,
            onCancelActionDescription: S,
            onSecondaryActionDescription: O,
            onOptionsActionDescription: I,
            onMenuActionDescription: E,
            actionDescriptionMap: y,
            onOKButton: L,
            onCancelButton: P,
            onSecondaryButton: M,
            onOptionsButton: B,
            onMenuButton: G,
            onMoveUp: k,
            onMoveRight: W,
            onMoveDown: U,
            onMoveLeft: x,
            onGamepadDirection: V,
            bFocusRingRoot: H,
            type: K,
          } = C,
          j = Object(o.c)(C, [
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
          $ = Bt(L),
          Y = Bt(P),
          X = Bt(M),
          z = Bt(B),
          J = Bt(G),
          q = Bt(V);
        K || (K = "Panel"),
          "PanelGroup" == K &&
            ({ onOKButtonHandler: $, onCancelButtonHandler: Y } = (function (
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
              { onOKButtonHandler: $, onCancelButtonHandler: Y, navNode: b },
              j
            )),
          $ &&
            ee(
              v[0],
              (function (t, e) {
                return c(t, "vgp_onok", d(e));
              })(v[0], $)
            ),
          Y &&
            ee(
              v[0],
              (function (t, e) {
                return c(t, "vgp_oncancel", d(e));
              })(v[0], Y)
            ),
          X &&
            O &&
            ee(
              v[0],
              (function (t, e) {
                return c(t, "vgp_onsecondaryaction", d(e));
              })(v[0], X)
            ),
          z &&
            I &&
            ee(
              v[0],
              (function (t, e) {
                return c(t, "vgp_onoptions", d(e));
              })(v[0], z)
            ),
          J &&
            E &&
            ee(
              v[0],
              (function (t, e) {
                return c(t, "vgp_onmenu", d(e));
              })(v[0], J)
            ),
          q && ee(v[0], u(v[0], q));
        const Q = (function (t, e, n, i) {
            const o = {};
            return (
              t && (o.onMoveUp = kt(t)),
              e && (o.onMoveRight = kt(e)),
              n && (o.onMoveDown = kt(n)),
              i && (o.onMoveLeft = kt(i)),
              o
            );
          })(k, W, U, x),
          Z = F
            ? (function (t) {
                switch (t) {
                  case "column":
                    return pt.COLUMN;
                  case "column-reverse":
                    return pt.COLUMN_REVERSE;
                  case "row":
                    return pt.ROW;
                  case "row-reverse":
                    return pt.ROW_REVERSE;
                  case "grid":
                    return pt.GRID;
                  default:
                    return pt.NONE;
                }
              })(F)
            : pt.NONE;
        Z != pt.NONE && (j.layout = Z),
          A
            ? (j.navEntryPreferPosition = vt.MAINTAIN_X)
            : R
            ? (j.navEntryPreferPosition = vt.MAINTAIN_Y)
            : T && (j.navEntryPreferPosition = vt.PREFERRED_CHILD),
          N &&
            (!1 !== j.focusable && (j.focusable = !0),
            v.on("vgp_onok", "firstChild" === N ? Ut : Wt),
            ee(t, () => {
              v.off("vgp_onok");
            })),
          w &&
            (v.on("vgp_onok.vkbindings", () => Kt.ShowVirtualKeyboard()),
            v.on("click.vkbindings", () => Kt.ShowVirtualKeyboard()),
            v.on("blur.vkbindings", () => {
              document.hasFocus() &&
                document.activeElement != t &&
                Kt.HideVirtualKeyboard();
            }),
            ee(t, () => {
              v.off(".vkbindings");
            })),
          j.focusable && void 0 === v.attr("tabIndex") && v.attr("tabIndex", 0),
          j.focusable &&
            b.FocusCallbackList.Register((e) =>
              (function (t, e) {
                e ? r()(t).addClass("gpfocus") : r()(t).removeClass("gpfocus");
              })(t, e)
            ),
          H &&
            ((b.m_FocusRing = Lt(v)),
            "static" == v.css("position") && v.css("position", "relative"));
        const tt = m({
            onOKActionDescription: D,
            onCancelActionDescription: S,
            onSecondaryActionDescription: O,
            onOptionsActionDescription: I,
            onMenuActionDescription: E,
            actionDescriptionMap: y,
          }),
          et = Object.assign(
            Object.assign({ fnCanTakeFocus: re, actionDescriptionMap: tt }, Q),
            j
          );
        return b.SetProperties(et), te(t, b), b;
      }
      function le(t) {
        const e = t.parentElement;
        if (!e) return console.error("no parent"), null;
        let n = ne(e);
        if (n == Ht.Unknown)
          n = (function (t) {
            let e = !1;
            switch (t.tagName) {
              case "A":
              case "INPUT":
              case "TEXTAREA":
                e = !0;
                break;
              case "DIV":
                if (V(t) != pt.COLUMN) e = !0;
                else {
                  const n = V(t.parentElement);
                  (n != pt.ROW && n != pt.ROW_REVERSE) || (e = !0);
                }
            }
            let n = Ht.NotNeeded;
            return e ? (n = ae(t)) : te(t, n), n;
          })(e);
        else if (n == Ht.InReactTree) return n;
        return n instanceof bt ? n : le(e);
      }
      function ce(t) {
        Xt && (Yt.UnregisterGamepadNavigationTree(Xt), (Xt = null)),
          t && r()(t).removeAttr("data-nav-modal");
      }
      const ue = {
        InstrumentFocusElements: oe,
        ForceUpdateFocusElements: se,
        GPNavFocusChild: function (t) {
          let e = ne(t[0]);
          return (
            e instanceof bt || (e = le(t[0])),
            e instanceof bt && e.BTakeFocus(i.APPLICATION),
            !1
          );
        },
        GPOnShowingModalWindow: function (t) {
          const e = t;
          return r()(e).attr("data-nav-modal", "true"), se(e), () => ce(e);
        },
        GPShowVirtualKeyboard: function (t = !0) {
          t ? Kt.ShowVirtualKeyboard() : Kt.HideVirtualKeyboard();
        },
        GPNavUpdateActionDescriptions: function (t, e) {
          const n = ne(t);
          n instanceof bt &&
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

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunklegacy_web = self.webpackChunklegacy_web || []).push([
  [616],
  {
    402: (e) => {
      e.exports = {
        FocusRingRoot: "focusring_FocusRingRoot_3FIjY",
        FocusRing: "focusring_FocusRing_1wPpl",
        flash: "focusring_flash_1RqM3",
        growOutline: "focusring_growOutline_2o99S",
        fadeOutline: "focusring_fadeOutline_zn08h",
        blinker: "focusring_blinker_1aef_",
        DebugFocusRing: "focusring_DebugFocusRing_1uiTT",
        FocusRingOnHiddenItem: "focusring_FocusRingOnHiddenItem_2rIZm",
      };
    },
    112: (e, t, r) => {
      "use strict";
      r.d(t, { InitializeGamepadNavigation: () => ln });
      var i,
        n = r(669),
        s = r.n(n),
        a = r(83),
        o = r(696);
      function l(e) {
        return "object" == typeof e && null !== e && "value" in e;
      }
      function c(e, t) {
        return l(e) && l(t)
          ? e.value === t.value &&
              Boolean(e.bShowOnLeft) == Boolean(t.bShowOnLeft) &&
              Boolean(e.bShowOnFloatingVRFooter) ==
                Boolean(t.bShowOnFloatingVRFooter)
          : e === t;
      }
      !(function (e) {
        (e[(e.GAMEPAD = 0)] = "GAMEPAD"),
          (e[(e.KEYBOARD = 1)] = "KEYBOARD"),
          (e[(e.APPLICATION = 2)] = "APPLICATION"),
          (e[(e.BROWSER = 3)] = "BROWSER"),
          (e[(e.AUTOFOCUS = 4)] = "AUTOFOCUS");
      })(i || (i = {}));
      let u = {
        [a.pR.OK]: "vgp_onok",
        [a.pR.CANCEL]: "vgp_oncancel",
        [a.pR.SECONDARY]: "vgp_onsecondaryaction",
        [a.pR.OPTIONS]: "vgp_onoptions",
        [a.pR.START]: "vgp_onmenu",
      };
      function d(e, t, r) {
        return (
          e.addEventListener(t, r),
          () =>
            (function (e, t, r) {
              e.removeEventListener(t, r);
            })(e, t, r)
        );
      }
      function m(e, t) {
        return d(e, "vgp_ondirection", _(t));
      }
      function g(e, t, r) {
        let i = e;
        if (!i || !i.ownerDocument || !i.ownerDocument.defaultView) return !0;
        let n = new i.ownerDocument.defaultView.CustomEvent(t, {
          bubbles: !0,
          cancelable: !0,
          detail: r,
        });
        return i.dispatchEvent(n);
      }
      function _(e) {
        return (t) => {
          !1 !== e(t) && (t.stopPropagation(), t.preventDefault());
        };
      }
      function h(e) {
        const {
            onOKActionDescription: t,
            onCancelActionDescription: r,
            onSecondaryActionDescription: i,
            onOptionsActionDescription: n,
            onMenuActionDescription: s,
            actionDescriptionMap: o,
          } = e,
          l = { ...o };
        return (
          void 0 !== t && (l[a.pR.OK] = t),
          void 0 !== r && (l[a.pR.CANCEL] = r),
          void 0 !== i && (l[a.pR.SECONDARY] = i),
          void 0 !== n && (l[a.pR.OPTIONS] = n),
          void 0 !== s && (l[a.pR.START] = s),
          l
        );
      }
      var b = r(629),
        p = r(706),
        f = r(341),
        B = r(626),
        w = r(577);
      class y {
        m_NavigationController;
        m_postMessage;
        m_bIsGamepadInputExternallyControlled = !1;
        constructor(e) {
          if (
            ((this.m_NavigationController = e),
            (0, B.Dp)("BrowserView.RegisterForMessageFromParent") &&
              (0, B.Dp)("BrowserView.PostMessageToParent"))
          )
            (this.m_bIsGamepadInputExternallyControlled = !0),
              (this.m_postMessage = new w.Vp()),
              this.m_NavigationController.UpdateSourceToGamepad();
          else {
            const e = window.top;
            e && e != window.self
              ? ((this.m_bIsGamepadInputExternallyControlled = !0),
                (this.m_postMessage = new w.n4(e)))
              : ((this.m_bIsGamepadInputExternallyControlled = !1),
                (this.m_postMessage = new w.A7()));
          }
          this.m_postMessage.RegisterForMessage(this.OnMessage),
            window.addEventListener("unload", this.PostPageUnloading),
            this.m_NavigationController.RegisterForUnhandledButtonDownEvents(
              (e) => this.PostButtonPressToSteam(e.detail.button),
            ),
            this.UpdateActionDescriptions({}),
            this.SendGameInputState("CGamepadWebBridgeClient constructor");
        }
        RegisterForFocusChanged(e) {
          return e.FocusChangedCallbacks.Register(this.OnFocusChanged)
            .Unregister;
        }
        BIsGamepadInputExternallyControlled() {
          return this.m_bIsGamepadInputExternallyControlled;
        }
        BFromActiveNavTree(e, t) {
          let r = t?.Tree;
          return r || (r = e?.Tree), r && r.Controller.IsActiveFocusNavTree(r);
        }
        OnFocusChanged(e, t, r) {
          this.BFromActiveNavTree(t, r) &&
            this.OnActionDescriptionTargetChanged(r);
        }
        UpdateActionDescriptions(e) {
          this.m_postMessage.PostMessage({
            type: "UpdateActionDescriptions",
            data: { descriptions: e },
          });
        }
        m_rgCallbackRegistrations = [];
        OnActionDescriptionTargetChanged(e) {
          if (
            (this.m_rgCallbackRegistrations.forEach((e) => e()),
            (this.m_rgCallbackRegistrations = []),
            e)
          ) {
            const t = () =>
              this.UpdateActionDescriptions(
                e.GetActiveActionDescriptions() ?? {},
              );
            t();
            for (let r = e; null != r; r = r.Parent)
              this.m_rgCallbackRegistrations.push(
                r.ActionDescriptionChangedCallbackList.Register(t).Unregister,
              );
          } else this.UpdateActionDescriptions({});
        }
        OnMessage(e) {
          switch (e.type) {
            case "TakeFocus":
              this.m_NavigationController.TakeFocusChangingIFrame();
              break;
            case "ForwardedGameEventDetail":
              this.m_NavigationController.DispatchVirtualGamepad(
                e.data.event,
                e.data.details,
              );
          }
        }
        SendGameInputState(e) {
          let t = f.h.Basic;
          window.bSupportsGamepadUI && (t = f.h.Full),
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
      function S(e) {
        return null != e && void 0 !== e.focus;
      }
      (0, b.Cg)([p.o], y.prototype, "OnFocusChanged", null),
        (0, b.Cg)([p.o], y.prototype, "OnMessage", null),
        (0, b.Cg)([p.o], y.prototype, "PostPageUnloading", null);
      function v(e, t, r) {
        if ("childList" === e.type) {
          for (let r = 0; r < e.addedNodes.length; r++) {
            const i = e.addedNodes[r];
            if (i.nodeType === Node.ELEMENT_NODE) {
              const e = i;
              e.parentElement && t(e);
            }
          }
          for (let t = 0; t < e.removedNodes.length; t++) {
            const i = e.removedNodes[t];
            i.nodeType === Node.ELEMENT_NODE && r?.(i);
          }
        }
      }
      const M = "",
        C = [
          { strKey: "Enter", button: a.pR.OK },
          { strKey: "Escape", button: a.pR.CANCEL },
          { strKey: "ArrowUp", button: a.pR.DIR_UP },
          { strKey: "ArrowDown", button: a.pR.DIR_DOWN },
          { strKey: "ArrowLeft", button: a.pR.DIR_LEFT },
          { strKey: "ArrowRight", button: a.pR.DIR_RIGHT },
          { strKey: "F1", button: a.pR.STEAM_GUIDE },
          { strKey: "F2", button: a.pR.STEAM_QUICK_MENU },
          { strKey: "F3", button: a.pR.SECONDARY },
          { strKey: "F4", button: a.pR.OPTIONS },
          { strKey: "F6", button: a.pR.BUMPER_LEFT },
          { strKey: "F7", button: a.pR.BUMPER_RIGHT },
          { strKey: "F6", bShift: !0, button: a.pR.TRIGGER_LEFT },
          { strKey: "F7", bShift: !0, button: a.pR.TRIGGER_RIGHT },
          { strKey: "F6", bCtrl: !0, button: a.pR.LSTICK_CLICK },
          { strKey: "F7", bCtrl: !0, button: a.pR.RSTICK_CLICK },
          { strKey: "F8", button: a.pR.SELECT },
          { strKey: "F9", button: a.pR.START },
          { strKey: "Backspace", button: a.pR.SECONDARY },
          { strKey: "Digit1", bCtrl: !0, button: a.pR.STEAM_GUIDE },
          { strKey: "Digit2", bCtrl: !0, button: a.pR.STEAM_QUICK_MENU },
          { strKey: "Digit3", bCtrl: !0, button: a.pR.SELECT },
          { strKey: "Digit4", bCtrl: !0, button: a.pR.BUMPER_LEFT },
          { strKey: "Digit5", bCtrl: !0, button: a.pR.BUMPER_RIGHT },
          { strKey: "Digit6", bCtrl: !0, button: a.pR.LSTICK_CLICK },
          { strKey: "Digit7", bCtrl: !0, button: a.pR.RSTICK_CLICK },
          { strKey: "Digit8", bCtrl: !0, button: a.pR.OPTIONS },
          { strKey: "Digit0", bCtrl: !0, button: a.pR.START },
          {
            strKey: "Digit4",
            bCtrl: !0,
            bShift: !0,
            button: a.pR.TRIGGER_LEFT,
          },
          {
            strKey: "Digit5",
            bCtrl: !0,
            bShift: !0,
            button: a.pR.TRIGGER_RIGHT,
          },
        ];
      const R = new WeakMap();
      function T(e) {
        return (R.get(e) ?? 0) > 0;
      }
      class I extends a.nh {
        m_lastButtonDown = a.pR.INVALID;
        m_strLastKeyDown;
        m_targetWindow;
        constructor(e) {
          super(),
            (this.m_targetWindow = e),
            this.SetSourceType(a.Vz.KEYBOARD_SIMULATOR),
            e.addEventListener("keydown", this.OnKeyDown, { capture: !0 }),
            e.addEventListener("keyup", this.OnKeyUp, { capture: !0 }),
            e.addEventListener("blur", this.Reset);
        }
        OnKeyDown(e) {
          if (T(this.m_targetWindow)) return;
          const t = this.TranslateKey(e);
          t != a.pR.INVALID &&
            (e.preventDefault(),
            e.stopPropagation(),
            t != this.m_lastButtonDown &&
              (this.Reset(),
              this.OnButtonDown(t),
              (this.m_lastButtonDown = t),
              (this.m_strLastKeyDown = this.GetKeycodeFromEvent(e))));
        }
        OnKeyUp(e) {
          if (
            this.m_lastButtonDown != a.pR.INVALID &&
            this.GetKeycodeFromEvent(e) == this.m_strLastKeyDown
          )
            return (
              this.OnButtonUp(this.m_lastButtonDown),
              (this.m_lastButtonDown = a.pR.INVALID),
              (this.m_strLastKeyDown = void 0),
              e.preventDefault(),
              void e.stopPropagation()
            );
          T(this.m_targetWindow) ||
            this.TranslateKey(e) == a.pR.INVALID ||
            (e.preventDefault(), e.stopPropagation());
        }
        Reset() {
          this.m_lastButtonDown != a.pR.INVALID &&
            (this.OnButtonUp(this.m_lastButtonDown),
            (this.m_lastButtonDown = a.pR.INVALID),
            (this.m_strLastKeyDown = void 0));
        }
        GetKeycodeFromEvent(e) {
          return "linux" === M && e.key.length > 1
            ? e.key || e.code
            : e.code || e.key;
        }
        BShouldSwallowEventForTextInputWorkaround(e) {
          if (
            !(
              S(e.target) &&
              ("INPUT" === e.target.nodeName ||
                "TEXTAREA" === e.target.nodeName ||
                e.target.hasAttribute("contenteditable"))
            )
          )
            return !1;
          if (e.target.hasAttribute("contenteditable")) return !0;
          const t = this.GetKeycodeFromEvent(e);
          let r = e.target;
          if ("range" === r.type) return !1;
          const i = Array.from(
            r.ownerDocument.getElementsByClassName("gpfocus"),
          ).some((e) =>
            Array.from(e.classList).some((e) => e.includes("virtualkeyboard")),
          );
          switch (t) {
            case "ArrowUp": {
              if (i) return !0;
              let t = r?.value.indexOf("\n");
              return (
                "TEXTAREA" === e.target.nodeName &&
                t >= 0 &&
                t < (r?.selectionStart ?? 0)
              );
            }
            case "ArrowDown": {
              if (i) return !0;
              let t = r?.value.lastIndexOf("\n");
              return (
                "TEXTAREA" === e.target.nodeName &&
                t >= 0 &&
                t >= (r?.selectionStart ?? 0) &&
                (r?.selectionEnd ?? 0) < r?.value.length
              );
            }
            case "ArrowLeft":
              return (
                !!i ||
                ((r?.selectionStart ?? 0) > 0 && (r?.selectionEnd ?? 0) > 0)
              );
            case "ArrowRight":
              return (
                !!i ||
                ((r?.selectionStart ?? 0) < r?.value.length &&
                  (r?.selectionEnd ?? 0) < r?.value.length)
              );
            case "Enter":
            case "Backspace":
              return !0;
            default:
              return !1;
          }
        }
        TranslateKey(e) {
          const t = this.GetKeycodeFromEvent(e);
          if (e.altKey) return a.pR.INVALID;
          if (this.BShouldSwallowEventForTextInputWorkaround(e))
            return a.pR.INVALID;
          const r = C.find(
            (r) =>
              r.strKey === t &&
              !!r.bCtrl === e.ctrlKey &&
              !!r.bShift === e.shiftKey,
          );
          return r?.button ?? a.pR.INVALID;
        }
      }
      (0, b.Cg)([p.o], I.prototype, "OnKeyDown", null),
        (0, b.Cg)([p.o], I.prototype, "OnKeyUp", null),
        (0, b.Cg)([p.o], I.prototype, "Reset", null);
      var F,
        A = r(59),
        N = r(873);
      class E {
        SyncStore(e) {
          return this.Subscribe(e).Unsubscribe;
        }
        GetValue() {
          return this.Value;
        }
      }
      (0, b.Cg)([p.o], E.prototype, "SyncStore", null),
        (0, b.Cg)([p.o], E.prototype, "GetValue", null);
      class O extends E {}
      class D extends O {
        m_callbacks;
        m_currentValue;
        m_fnEquals;
        constructor(e, t) {
          super(),
            (this.m_callbacks = new N.l()),
            (this.m_currentValue = e),
            (this.m_fnEquals = t);
        }
        Set(e) {
          if (this.m_fnEquals) {
            if (this.m_fnEquals(this.m_currentValue, e)) return !1;
          } else if (this.m_currentValue === e) return !1;
          return (this.m_currentValue = e), this.m_callbacks.Dispatch(e), !0;
        }
        get Value() {
          return this.m_currentValue;
        }
        Subscribe(e) {
          return { Unsubscribe: this.m_callbacks.Register(e).Unregister };
        }
        get SubscriberCount() {
          return this.m_callbacks.CountRegistered();
        }
      }
      function z(e, t) {
        return new D(e, t);
      }
      class P extends E {
        m_fnMap;
        m_originalSubscribableValue;
        m_mappedSubscribableValue;
        m_bMappedValueStale = !1;
        constructor(e, t, r) {
          super(),
            (this.m_originalSubscribableValue = e),
            (this.m_mappedSubscribableValue = new D(t(e.Value), r)),
            (this.m_fnMap = t),
            this.m_originalSubscribableValue.Subscribe(() => {
              this.m_mappedSubscribableValue.SubscriberCount > 0
                ? this.UpdateMappedValue()
                : (this.m_bMappedValueStale = !0);
            });
        }
        get Value() {
          return (
            this.m_bMappedValueStale && this.UpdateMappedValue(),
            this.m_mappedSubscribableValue.Value
          );
        }
        Subscribe(e) {
          return this.m_mappedSubscribableValue.Subscribe(e);
        }
        UpdateMappedValue() {
          this.m_mappedSubscribableValue.Set(
            this.m_fnMap(this.m_originalSubscribableValue.Value),
          ),
            (this.m_bMappedValueStale = !1);
        }
      }
      class W {
        m_schTimer;
        m_fnCallback;
        m_fnOnCancel;
        Schedule(e, t) {
          this.IsScheduled() && this.Cancel(),
            (this.m_fnCallback = t),
            (this.m_schTimer = window.setTimeout(this.ScheduledInternal, e));
        }
        AsyncSchedule(e, t) {
          return new Promise((r, i) => {
            this.Schedule(e, () => {
              t(), r();
            }),
              (this.m_fnOnCancel = i);
          });
        }
        IsScheduled() {
          return void 0 !== this.m_schTimer;
        }
        Cancel() {
          if (this.m_schTimer) {
            const e = this.m_fnOnCancel;
            clearTimeout(this.m_schTimer), this.Reset(), e && e();
          }
        }
        Reset() {
          (this.m_schTimer = void 0),
            (this.m_fnCallback = void 0),
            (this.m_fnOnCancel = void 0);
        }
        ScheduledInternal() {
          const e = this.m_fnCallback;
          this.Reset(), e?.();
        }
      }
      (0, b.Cg)([p.o], W.prototype, "ScheduledInternal", null);
      class G {
        m_vecCallbacks = [];
        Push(e) {
          this.m_vecCallbacks.push(e);
        }
        PushArrayRemove(e, t) {
          this.m_vecCallbacks.push(() => A.x9(e, t));
        }
        Unregister() {
          for (const e of this.m_vecCallbacks) e();
          this.m_vecCallbacks = [];
        }
        GetUnregisterFunc() {
          return this.Unregister;
        }
      }
      (0, b.Cg)([p.o], G.prototype, "Unregister", null),
        (function (e) {
          (e[(e.Debug = 0)] = "Debug"),
            (e[(e.Info = 1)] = "Info"),
            (e[(e.Warning = 2)] = "Warning"),
            (e[(e.Error = 3)] = "Error");
        })(F || (F = {}));
      class U {
        m_sName;
        m_fnIdGenerator = void 0;
        constructor(e, t) {
          (this.m_sName = e),
            (this.m_fnIdGenerator = t),
            x.Get().RegisterLogName(e);
        }
        Debug(...e) {
          this.Log(F.Debug, ...e);
        }
        Info(...e) {
          this.Log(F.Info, ...e);
        }
        Warning(...e) {
          this.Log(F.Warning, ...e);
        }
        Error(...e) {
          this.Log(F.Error, ...e);
        }
        Assert(e, ...t) {
          e || this.Log(F.Error, "Assertion failed:", ...t);
        }
        IsDebugEnabled() {
          return x.Get().IsDebugLogEnabled(this.m_sName);
        }
        Log(e, ...t) {
          const r = x.Get().IsDebugLogEnabled(this.m_sName);
          if (e == F.Debug && !r) return;
          let i = this.m_sName;
          const n = this.m_fnIdGenerator?.() ?? null;
          null != n && (i += " (" + n + ")");
          L(
            e,
            r,
            x.Get().IncludeBacktraceInLog,
            x.Get().AllowCSSInLogStyling,
            i,
            this.m_sName,
            ...t,
          );
        }
      }
      (0, b.Cg)([p.o], U.prototype, "Debug", null),
        (0, b.Cg)([p.o], U.prototype, "Info", null),
        (0, b.Cg)([p.o], U.prototype, "Warning", null),
        (0, b.Cg)([p.o], U.prototype, "Error", null),
        (0, b.Cg)([p.o], U.prototype, "Assert", null);
      class x {
        static k_EnabledLogNames_StorageKey = "EnabledWebLogs";
        static k_IncludeBacktraceInLog_StorageKey = "IncludeBacktraceInLog";
        static k_AllowCSSInLogColors_StorageKey = "AllowCSSInLogColors";
        m_setKnownDebugLogs = new Set();
        m_setEnabledDebugLogs = new Set();
        m_bIncludeBacktraceInLog = !1;
        m_bAllowCSSInLogStyling = !0;
        m_SettingsChangedCallback = new N.l();
        m_bLoading = !0;
        constructor() {
          this.LoadSettings();
        }
        LogAsLogManager(...e) {
          L(
            F.Info,
            !0,
            this.IncludeBacktraceInLog,
            this.AllowCSSInLogStyling,
            "LogManager",
            "LogManager",
            ...e,
          );
        }
        async LoadSettings() {
          const e = (e, t) => {
            try {
              0;
              const r = localStorage.getItem(e);
              return r ? JSON.parse(r) : t;
            } catch {
              return t;
            }
          };
          (this.m_bIncludeBacktraceInLog = !!e(
            x.k_IncludeBacktraceInLog_StorageKey,
            !1,
          )),
            (this.m_bAllowCSSInLogStyling = !!e(
              x.k_AllowCSSInLogColors_StorageKey,
              !0,
            ));
          const t = e(x.k_EnabledLogNames_StorageKey, void 0);
          if (Array.isArray(t)) {
            this.m_setEnabledDebugLogs = new Set(t);
            for (const e of t) this.m_setKnownDebugLogs.add(e);
            this.LogAsLogManager(
              "Loaded debug enabled log names. Will print log messages for:",
              Array.from(this.m_setEnabledDebugLogs),
            );
          } else 0;
          (this.m_bLoading = !1), this.m_SettingsChangedCallback.Dispatch();
        }
        async SaveSettings() {
          localStorage.setItem(
            x.k_EnabledLogNames_StorageKey,
            JSON.stringify(Array.from(this.m_setEnabledDebugLogs)),
          ),
            localStorage.setItem(
              x.k_IncludeBacktraceInLog_StorageKey,
              JSON.stringify(this.m_bIncludeBacktraceInLog),
            ),
            localStorage.setItem(
              x.k_AllowCSSInLogColors_StorageKey,
              JSON.stringify(this.m_bAllowCSSInLogStyling),
            ),
            this.LogAsLogManager(
              "Saved enabled debug log names. Will print log messages for:",
              Array.from(this.m_setEnabledDebugLogs),
            );
        }
        PrintEnabledLogs(...e) {
          e &&
            e.length > 0 &&
            console.warn(
              `Use DebugLogEnable( '${e.join("', '")}' ) to enable a log. This function tells you what's enabled.`,
            ),
            this.LogAsLogManager(
              "Will print log messages for:",
              Array.from(this.m_setEnabledDebugLogs),
            );
        }
        static Get() {
          return (
            null == window.g_LogManager && (window.g_LogManager = new x()),
            window.g_LogManager
          );
        }
        get Loading() {
          return this.m_bLoading;
        }
        get LogNames() {
          return this.m_setKnownDebugLogs.values();
        }
        RegisterLogName(e) {
          this.m_setKnownDebugLogs.add(e);
        }
        IsLogName(e) {
          return this.m_setKnownDebugLogs.has(e);
        }
        IsDebugLogEnabled(e) {
          return this.m_setEnabledDebugLogs.has(e);
        }
        async ToggleDebugLogEnabled(e) {
          this.SetDebugLogEnabled(e, !this.IsDebugLogEnabled(e));
        }
        async SetDebugLogEnabled(e, t) {
          this.IsLogName(e)
            ? (t
                ? this.m_setEnabledDebugLogs.add(e)
                : this.m_setEnabledDebugLogs.delete(e),
              this.m_SettingsChangedCallback.Dispatch(),
              await this.SaveSettings())
            : console.warn(
                `No log named "${e}", available logs:`,
                this.GetLogNames(),
              );
        }
        async SetDebugLogsEnabled(e, ...t) {
          t.forEach((t) => this.SetDebugLogEnabled(t, e));
        }
        async SetAllDebugLogsEnabled(e) {
          (this.m_setEnabledDebugLogs = e
            ? new Set(this.m_setKnownDebugLogs)
            : new Set()),
            this.m_SettingsChangedCallback.Dispatch(),
            await this.SaveSettings();
        }
        RegisterForSettingsChanges(e) {
          return this.m_SettingsChangedCallback.Register(e);
        }
        get IncludeBacktraceInLog() {
          return this.m_bIncludeBacktraceInLog;
        }
        async SetIncludeBacktraceInLog(e) {
          (this.m_bIncludeBacktraceInLog = e),
            this.m_SettingsChangedCallback.Dispatch(),
            await this.SaveSettings();
        }
        get AllowCSSInLogStyling() {
          return this.m_bAllowCSSInLogStyling;
        }
        async SetAllowCSSInLogStyling(e) {
          (this.m_bAllowCSSInLogStyling = e),
            this.m_SettingsChangedCallback.Dispatch(),
            await this.SaveSettings();
        }
        GetLogNames() {
          return Array.from(this.LogNames).sort();
        }
      }
      function L(e, t, r, i, n, s, ...a) {
        let o,
          l = n;
        if (
          (r &&
            (l =
              (function (e) {
                switch (e) {
                  case F.Debug:
                    return String.fromCodePoint(128027);
                  case F.Info:
                    return String.fromCodePoint(8505);
                  case F.Warning:
                    return String.fromCodePoint(9888);
                  case F.Error:
                    return String.fromCodePoint(128165);
                }
              })(e) +
              " " +
              l),
          i && t)
        ) {
          const e = (function (e) {
              let t = 0;
              for (let r = 0; r < e.length; r++)
                t = e.charCodeAt(r) + ((t << 5) - t);
              return [255 & t, (t >> 8) & 255, (t >> 16) & 255];
            })(s).map((e, t) =>
              Math.round(
                Math.max(
                  0,
                  Math.min(255, 255 * (0.8 * (e / 255 - 0.5) + 0.15)),
                ),
              ),
            ),
            t = (299 * (c = e)[0] + 587 * c[1] + 114 * c[2]) / 1e3 >= 128,
            r = a.length >= 1 && "string" == typeof a[0] && a[0].includes("%c"),
            i = r && a.shift();
          o = [
            `%c${l}%c:${r ? " %c" + i : ""}`,
            `color: ${t ? "black" : "white"}; background: rgb(${e.join(",")}); padding: 0 1ch; border-radius: 3px;`,
            "color: transparent; margin-right: -1ch",
            ...(r ? [""] : []),
            ...a,
          ];
        } else o = [`${l}:`, ...a];
        var c;
        if (r)
          console.groupCollapsed(...o),
            console.trace("Callstack"),
            console.groupEnd();
        else
          switch (e) {
            case F.Debug:
            case F.Info:
              console.log(...o);
              break;
            case F.Warning:
              console.warn(...o);
              break;
            case F.Error:
              console.clogerror
                ? console.clogerror(3, ...o)
                : console.error(...o);
          }
      }
      function k(e, t, ...r) {
        console.assert
          ? 0 == r.length
            ? console.assert(!!e, t)
            : console.assert(!!e, t, ...r)
          : e || console.warn(t, ...r);
      }
      function j(e) {
        return null != e && void 0 !== e.focus;
      }
      function H(e, t) {
        let r = 0,
          i = 0;
        return (
          t.right < e.left
            ? (r = e.left - t.right)
            : t.left > e.right && (r = t.left - e.right),
          t.bottom < e.top
            ? (i = e.top - t.bottom)
            : t.top > e.bottom && (i = t.top - e.bottom),
          Math.sqrt(r * r + i * i)
        );
      }
      function V(e) {
        let t;
        return e && (t = e.ownerDocument.defaultView), t;
      }
      (window.DebugLogEnable = (...e) => x.Get().SetDebugLogsEnabled(!0, ...e)),
        (window.DebugLogDisable = (...e) =>
          x.Get().SetDebugLogsEnabled(!1, ...e)),
        (window.DebugLogEnableAll = () => x.Get().SetAllDebugLogsEnabled(!0)),
        (window.DebugLogDisableAll = () => x.Get().SetAllDebugLogsEnabled(!1)),
        (window.DebugLogEnableBacktrace = () =>
          x.Get().SetIncludeBacktraceInLog(!0)),
        (window.DebugLogDisableBacktrace = () =>
          x.Get().SetIncludeBacktraceInLog(!1)),
        (window.DebugLogNames = () => x.Get().GetLogNames()),
        (window.DebugLogEnabled = (...e) => x.Get().PrintEnabledLogs(...e)),
        (window.EnableSteamConsole = (e = !0) =>
          x.Get().SetDebugLogEnabled("SteamClient", e));
      function K(e, t) {
        let r = e?.parentElement;
        for (; r; ) {
          if (j(r)) {
            const e = window.getComputedStyle(r);
            if ("fixed" == e.position || "sticky" == e.position) break;
            if (
              !(
                (t && "x" != t) ||
                ("scroll" != e.overflowX && "auto" != e.overflowX)
              )
            )
              break;
            if (
              !(
                (t && "y" != t) ||
                ("scroll" != e.overflowY && "auto" != e.overflowY)
              )
            )
              break;
          }
          r = r.parentElement;
        }
        return j(r) ? r : null;
      }
      function q(e, t) {
        if (!("ownerDocument" in e)) return !0;
        const r = e.ownerDocument.defaultView.getComputedStyle(e),
          i = "x" === t ? r.overflowX : r.overflowY;
        return "auto" === i || "scroll" === i;
      }
      const $ = { x: "y", y: "x" };
      const Q = new U("FocusHistory"),
        Y = Q.Debug;
      class X {
        m_root;
        constructor(e) {
          this.m_root = e;
        }
        static SerializeNavState(e, t = !0, r = !0) {
          return {
            root: X.SerializeNavNode(e, t, r),
            bHadFocus: e.BFocusWithin() && e.Tree.BIsActiveWithinContext(),
          };
        }
        static SerializeNavNode(e, t = !0, r = !0) {
          let i;
          const [n, s] = e.GetChildren();
          n.length &&
            -1 != s &&
            t &&
            (i = n.map((e, t) => X.SerializeNavNode(e, t == s || r, r)));
          const a = { rgChildren: i };
          return (
            e.NavKey && (a.sNavKey = e.NavKey),
            -1 != s && (a.iActiveChild = s),
            a
          );
        }
        static RestoreSerializedNavState(e, t, r = 0) {
          const { root: n, bHadFocus: s } = t;
          e.Tree.Controller.RestoreHistoryTransaction(() => {
            X.RestoreSerializedNavNode(e, n),
              (1 == r || (0 == r && s)) && e.BTakeFocus(i.APPLICATION);
          });
        }
        static RestoreSerializedNavNode(e, t, r = 0) {
          const { sNavKey: i, iActiveChild: n = -1, rgChildren: s } = t;
          i && k(i == e.NavKey, "navkey mismatch"), e.SetActiveChild(n);
          const a = Q.IsDebugEnabled()
            ? `[${e.Tree.id}]${(function (e) {
                if (0 == e) return "";
                let t = "";
                for (let r = 0; r < e; r++) t += "*";
                return (t += " "), t;
              })(r)}`
            : "";
          if (s && s.length) {
            const [t] = e.GetChildren();
            if (-1 != n && Q.IsDebugEnabled()) {
              const r = s.length != t.length;
              Y(
                `${a}Restoring node ${e.NavKey} which had active child ${n} of ${s.length}${r ? `- now ${t.length} children.` : ""}`,
              );
            }
            let i = new Map();
            t.forEach((e) => {
              e.NavKey && i.set(e.NavKey, e);
            });
            for (const e of s) {
              if (!e.sNavKey) continue;
              const t = i.get(e.sNavKey);
              t && X.RestoreSerializedNavNode(t, e, r + 1);
            }
            if (-1 != n && s[n]?.sNavKey) {
              const r = i.get(s[n].sNavKey);
              Y(
                `${a}Restoring node ${e.NavKey}, child with focus: ${s[n].sNavKey} ${void 0 === r ? "MISSING!!" : ""}`,
              ),
                r && e.SetActiveChild(t.indexOf(r));
            }
            let o = 0,
              l = 0;
            for (; o < t.length && l < s.length; ) {
              for (; o < t.length && t[o].NavKey; ) o++;
              for (; l < s.length && s[l].sNavKey; ) l++;
              if (o >= t.length || l >= s.length) break;
              X.RestoreSerializedNavNode(t[o], s[l], r + 1), o++, l++;
            }
          }
        }
      }
      function J(e) {
        return X.SerializeNavState(e, !0, !1);
      }
      function Z(e, t, r = 0) {
        return X.RestoreSerializedNavState(e, t, r);
      }
      class ee extends X {
        m_rgHistory = [];
        PushState() {
          this.m_rgHistory.push(X.SerializeNavState(this.m_root));
        }
        PopState(e = 0) {
          this.m_rgHistory.length &&
            X.RestoreSerializedNavState(this.m_root, this.m_rgHistory.pop(), e);
        }
      }
      class te extends X {
        m_mapHistory = new Map();
        SaveState(e) {
          this.m_mapHistory.set(e, X.SerializeNavState(this.m_root));
        }
        RestoreState(e, t = 0) {
          const r = this.m_mapHistory.get(e);
          return (
            !!r &&
            (console.log(`Restoring history for state ${e}`),
            X.RestoreSerializedNavState(this.m_root, r, t),
            !0)
          );
        }
      }
      class re {
        m_node;
        m_History;
        m_StateHistory;
        constructor(e) {
          this.m_node = e;
        }
        TakeFocus(e) {
          return this.m_node.BTakeFocus(e ? i.GAMEPAD : i.APPLICATION, e);
        }
        ParentTakeFocus(e) {
          this.m_node.Parent?.BTakeFocus(e ? i.GAMEPAD : i.APPLICATION, e);
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
          this.m_History || (this.m_History = new ee(this.m_node)),
            this.m_History.PushState();
        }
        PopState(e = 0) {
          this.m_History && this.m_History.PopState(e);
        }
        SaveState(e) {
          this.m_StateHistory || (this.m_StateHistory = new te(this.m_node)),
            this.m_StateHistory.SaveState(e);
        }
        RestoreState(e, t = 0) {
          return (
            !!this.m_StateHistory && this.m_StateHistory.RestoreState(e, t)
          );
        }
        GetFocusSnapshot() {
          return J(this.m_node);
        }
        RestoreFocusSnapshot(e, t = 0) {
          return Z(this.m_node, e, t);
        }
        NavTree() {
          return this.m_node.Tree;
        }
        Node() {
          return this.m_node;
        }
      }
      function ie(e, t, r, i = 0.001) {
        return "x" == e
          ? t.right > r.left + i && t.left + i < r.right
          : "y" == e
            ? t.bottom > r.top + i && t.top + i < r.bottom
            : (k(!1, `Invalid axis ${e}`), !1);
      }
      function ne(e, t, r) {
        let i;
        return (
          "x" == e
            ? (i = Math.min(t.right, r.right) - Math.max(t.left, r.left))
            : "y" == e
              ? (i = Math.min(t.bottom, r.bottom) - Math.max(t.top, r.top))
              : (k(!1, `Invalid axis ${e}`), (i = 0)),
          i < 0 ? 0 : i
        );
      }
      function se(e, t) {
        return "x" == e
          ? { min: t.left, max: t.right }
          : { min: t.top, max: t.bottom };
      }
      function ae(e, t, r) {
        const i = t[e],
          n = se(e, r);
        return i < n.min ? n.min - i : i > n.max ? i - n.max : 0;
      }
      function oe(e) {
        if (!e) return We.NONE;
        const t = e.ownerDocument.defaultView,
          r = t.getComputedStyle(e);
        if ("flex" == r.display)
          switch (r.flexDirection) {
            case "row":
              return "wrap" == r.flexWrap ? We.GRID : We.ROW;
            case "row-reverse":
              return We.ROW_REVERSE;
            case "column":
              return We.COLUMN;
            case "column-reverse":
              return We.COLUMN_REVERSE;
          }
        else {
          if ("grid" == r.display)
            return "none" !== r.gridTemplateAreas ? We.GEOMETRIC : We.GRID;
          if (e.childElementCount > 0) {
            const r = t.getComputedStyle(e.firstElementChild);
            if ("left" === r.float) return We.ROW;
            if ("right" === r.float) return We.ROW_REVERSE;
            if ("inline" === r.display || "inline-block" === r.display)
              return We.GRID;
          }
        }
        return We.COLUMN;
      }
      function le(e) {
        switch (e) {
          case a.pR.DIR_UP:
          case a.pR.DIR_DOWN:
            return "y";
          case a.pR.DIR_LEFT:
          case a.pR.DIR_RIGHT:
            return "x";
          default:
            return;
        }
      }
      function ce(e, t, r) {
        const i = [],
          [n, s] = e.GetChildren(),
          a = e.GetActiveChild();
        let o;
        const l = a ? a.Element?.getBoundingClientRect() : null;
        if (a) {
          const e = me(a, t, r);
          if (
            e &&
            !e.offScreen &&
            ((o = ue(a, e, e.overlap, r)), o && !o.visibility.offScreen)
          )
            return o;
          e && i.push({ child: a, visibility: e });
        }
        const c = r || l;
        for (let e = 0; e < n.length; e++) {
          const r = n[e];
          if (r == a) continue;
          const s = me(r, t, c ?? void 0);
          s && i.push({ child: r, visibility: s });
        }
        let u;
        i.sort(de);
        for (const e of i) {
          const { child: r, visibility: i } = e;
          if (i.offScreen && u) {
            if (!u.visibility.offScreen) break;
            if (i.distance && i.distance > u.visibility.distance) break;
          }
          const n = r == a ? o : ue(r, i, i.overlap || t, c ?? void 0);
          n && (!u || de(n, u) < 0) && (u = n);
        }
        return u;
      }
      function ue(e, t, r, i) {
        switch (e.GetFocusable()) {
          case "none":
            return;
          case "children":
            return ce(e, t.overlap || r, i);
          case "self":
            return { child: e, visibility: t };
        }
      }
      function de(e, t) {
        const r = e.visibility,
          i = t.visibility;
        return r.offScreen
          ? i.offScreen
            ? r.distance - i.distance
            : 1
          : i.offScreen
            ? -1
            : r.distance - i.distance;
      }
      function me(e, t, r) {
        const i = e.Element?.getBoundingClientRect(),
          n = e.GetFocusable();
        let s;
        if ("none" == n || !i || !t) return null;
        if ("self" == n) {
          if (
            i.top < t.top ||
            i.right > t.right ||
            i.bottom > t.bottom ||
            i.left < t.left
          ) {
            const e = i.top + i.height / 2,
              r = i.left + i.width / 2;
            if (e < t.top) return { offScreen: "top", distance: t.top - e };
            if (r > t.right)
              return { offScreen: "right", distance: r - t.right };
            if (e > t.bottom)
              return { offScreen: "bottom", distance: e - t.bottom };
            if (r < t.left) return { offScreen: "left", distance: t.left - r };
          }
          r &&
            (s = (function (e, t) {
              let r = 0,
                i = 0;
              return (
                t.right < e.left
                  ? (r = e.left - t.right)
                  : t.left > e.right && (r = t.left - e.right),
                t.bottom < e.top
                  ? (i = e.top - t.bottom)
                  : t.top > e.bottom && (i = t.top - e.bottom),
                Math.sqrt(r * r + i * i)
              );
            })(i, r));
        } else if ("children" == n) {
          const r = e.Element;
          if (!r) return null;
          if (r.scrollHeight > i.height || r.scrollWidth > i.width) {
            const e = r.ownerDocument.defaultView.getComputedStyle(r);
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
      function ge(e, t, r) {
        return null == e || isNaN(e) ? e : Math.max(t, Math.min(r, e));
      }
      class _e {
        m_options;
        m_msStart;
        m_msEnd;
        m_bActive = !1;
        m_fnBoundAnimationFunc = void 0;
        m_window;
        constructor(e, t) {
          (this.m_window = e), (this.m_options = { timing: "sine", ...t });
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
            } catch {}
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
          let r = t / this.m_options.msDuration;
          try {
            this.Update(e(r));
          } catch {}
          this.m_window.requestAnimationFrame(this.m_fnBoundAnimationFunc);
        }
        ClearInterval() {
          this.m_bActive = !1;
        }
      }
      class he extends _e {
        m_fnCallback;
        constructor(e, t, r) {
          super(e, t), (this.m_fnCallback = r);
        }
        Update(e) {
          this.m_fnCallback(e);
        }
      }
      class be extends _e {
        m_object;
        m_propTargets;
        m_props = {};
        constructor(e, t, r) {
          super("ownerDocument" in e ? V(e) : e, r),
            (this.m_object = e),
            (this.m_propTargets = t);
        }
        Start() {
          this.m_props = {};
          for (let e in this.m_propTargets) {
            let t = parseFloat(this.m_object[e]) || 0,
              r = this.m_propTargets[e];
            t != r && (this.m_props[e] = { start: t, end: r });
          }
          super.Start();
        }
        Update(e) {
          for (let t in this.m_props) {
            let r = this.m_props[t],
              i = r.start + (r.end - r.start) * e;
            this.m_object[t] = i;
          }
        }
      }
      const pe = new U("ScrollSnap").Debug;
      let fe = !1;
      let Be;
      function we(e, t, r, n, s) {
        const a = e.Element;
        if (!a) return;
        let o = [{ node: e, eScrollType: e.m_Properties?.scrollIntoViewType }];
        for (let t = e.Parent; t; t = t.Parent) {
          const e = t.m_Properties?.scrollIntoViewWhenChildFocused,
            r = t.m_Properties?.scrollIntoViewType;
          if (e) {
            const i = { node: t, eScrollType: r };
            "force" === e ? (o = [i]) : o.push(i);
          }
          if (void 0 !== r)
            for (
              let e = o.length - 1;
              e >= 0 && void 0 === o[e].eScrollType;
              e--
            )
              o[e].eScrollType = r;
        }
        for (; o.length; ) {
          let { node: n, eScrollType: l } = o.pop(),
            c = 0 == o.length;
          if (
            (void 0 === l && (l = fe ? Ue.NoTransform : Ue.Standard),
            n?.m_Properties?.fnScrollIntoViewHandler)
          ) {
            if (!1 !== n.m_Properties.fnScrollIntoViewHandler(e, t, n))
              continue;
          }
          const u = n.m_element,
            d = l == Ue.NoTransform || l == Ue.NoTransformSparseContent || !c;
          if (t || r === i.GAMEPAD) {
            const t = d ? Se(u) : u.getBoundingClientRect(),
              r = u.ownerDocument.defaultView.innerHeight,
              i = 40,
              n = s ? i : Math.max(0.4 * r, i);
            let o = !1;
            const l = Be && performance.now() - Be < 500;
            (l || t.bottom < -n || t.top > r + n) &&
              ((o = !0),
              l ||
                pe(
                  `Disabling smooth scrolling, ${t.bottom} < ${-n}, ${t.top} > ${r} + ${n} `,
                ));
            let c = o ? "auto" : "smooth";
            o && (Be = performance.now()),
              e.Tree.Controller.BIsRestoringHistory() && (c = "auto"),
              d
                ? Fe(a, u, c)
                : (pe(
                    `Scrolling Into View ('${c}' via browser scrollIntoView):`,
                    u,
                  ),
                  u.scrollIntoView({ behavior: c, block: "nearest" }));
          } else
            pe("No previous element for scrolling, will jump"),
              d
                ? Fe(a, u, "auto")
                : (pe(
                    "Scrolling Into View ('auto' via browser scrollIntoView):",
                    u,
                  ),
                  u?.scrollIntoView({
                    behavior: "auto",
                    block: "nearest",
                    inline: "nearest",
                  }));
        }
        !(function (e, t) {
          const r = le(t);
          if (!r) return;
          let i = null;
          for (let t = e; t; t = t.GetNavParentCrossingTrees())
            t.m_Properties?.scrollRegionToStartOrEnd && (i = t);
          if (!i) return;
          for (
            let n = e;
            n &&
            !n.BHasNavTargetInDirection(t, !0) &&
            (n != e &&
              n.Element &&
              n.m_Properties?.scrollRegionToStartOrEnd &&
              ye(n.Element, t, r),
            n != i);
            n = n.GetNavParentCrossingTrees()
          );
        })(e, n);
      }
      function ye(e, t, r) {
        let i = e,
          n = i.ownerDocument;
        if (
          (i == n.body && n.defaultView && !q(i, r) && (i = n.defaultView),
          !q(i, r))
        )
          return;
        const s = Oe(i);
        if ("y" == r) {
          const e = t == a.pR.DIR_DOWN ? s.MaxScrollTop() : 0;
          s.scrollTo({ top: e, behavior: "smooth" });
        } else {
          const e = t == a.pR.DIR_RIGHT ? s.MaxScrollLeft() : 0;
          s.scrollTo({ left: e, behavior: "smooth" });
        }
      }
      function Se(e) {
        if (!e) return { left: 0, top: 0, right: 0, bottom: 0 };
        if (!("ownerDocument" in e))
          return {
            left: 0,
            right: e.innerWidth,
            top: 0,
            bottom: e.innerHeight,
          };
        let t = 0,
          r = 0,
          i = e;
        for (; i; ) {
          if ("ownerDocument" in i) {
            const e = window.getComputedStyle(i);
            if ("fixed" === e.position || "sticky" === e.position) break;
          }
          (t += i.offsetTop), (r += i.offsetLeft), (i = i.offsetParent);
        }
        for (i = e?.parentElement; i; ) {
          const { scrollTop: e, scrollLeft: n } = De(i);
          if (((t -= e), (r -= n), "ownerDocument" in i)) {
            const e = window.getComputedStyle(i);
            if ("fixed" === e.position || "sticky" === e.position) break;
          }
          i = i.parentElement;
        }
        return {
          left: r,
          top: t,
          right: r + e.offsetWidth,
          bottom: t + e.offsetHeight,
        };
      }
      function ve(e, t) {
        return "x" == t
          ? [e.left, e.right, e.right - e.left]
          : [e.top, e.bottom, e.bottom - e.top];
      }
      function Me(e, t, r, i) {
        let [n, s, a] = ve(e, i),
          [o, l, c] = ve(t, i),
          [u, d] = ve(r, i);
        if (n < o && s > l) return 0;
        const m = n - u,
          g = s + d,
          _ = a > c;
        return (m < o && !_) || (g > l && _)
          ? m - o
          : (m < o && _) || (g > l && !_)
            ? g - l
            : 0;
      }
      function Ce(e) {
        return "auto" == e
          ? 0
          : e.endsWith("px")
            ? parseInt(e)
            : (console.log("Unsupported length", e), 0);
      }
      function Re(e) {
        if (!("ownerDocument" in e))
          return { left: 0, right: 0, top: 0, bottom: 0 };
        const t = e.ownerDocument.defaultView.getComputedStyle(e);
        return {
          left: Ce(t.scrollMarginLeft),
          right: Ce(t.scrollMarginRight),
          top: Ce(t.scrollMarginTop),
          bottom: Ce(t.scrollMarginBottom),
        };
      }
      function Te(e, t) {
        let r = (function (e) {
          let t;
          return (
            (t =
              "ownerDocument" in e
                ? e.ownerDocument.defaultView.getComputedStyle(e)
                : e.document.defaultView.getComputedStyle(
                    window.document.documentElement,
                  )),
            {
              left: Ce(t.scrollPaddingLeft),
              right: Ce(t.scrollPaddingRight),
              top: Ce(t.scrollPaddingTop),
              bottom: Ce(t.scrollPaddingBottom),
            }
          );
        })(e);
        return {
          left: Math.max(0, t.left + r.left),
          right: Math.max(0, t.right - r.right),
          top: Math.max(0, t.top + r.top),
          bottom: Math.max(0, t.bottom - r.bottom),
        };
      }
      function Ie(e) {
        return e > -1 && e < 1;
      }
      function Fe(e, t, r, i, n) {
        pe(
          "----------------------------------------------------------------------------------",
        ),
          pe("Scrolling Into View (NoTransform):", t);
        let s = [],
          a = t,
          o = Se(t),
          l = n ?? Number.MAX_VALUE;
        for (; a; ) {
          let e = K(a);
          e || (e = V(a));
          let t = Re(a),
            r = Te(e, Se(e)),
            c = Oe(e),
            u = { element: e, left: 0, top: 0 };
          if (
            (pe(
              "Checking scroll div",
              e,
              `scroll y:${c.scrollTop} of ${c.MaxScrollTop()}, x:${c.scrollLeft} of ${c.MaxScrollLeft()}, adjusted =>`,
              r,
              "target => ",
              o,
            ),
            (i && "y" != i) ||
              !q(e, "y") ||
              ((u.top = Me(o, r, t, "y")),
              (u.top = ge(u.top, -c.scrollTop, c.MaxScrollTop() - c.scrollTop)),
              n &&
                ((u.top = Math.min(l, Math.abs(u.top)) * (u.top < 0 ? -1 : 1)),
                (l -= Math.abs(u.top))),
              pe(`- checked y: ${u.top}`)),
            (i && "x" != i) ||
              !q(e, "x") ||
              ((u.left = Me(o, r, t, "x")),
              (u.left = ge(
                u.left,
                -c.scrollLeft,
                c.MaxScrollLeft() - c.scrollLeft,
              )),
              n &&
                ((u.left =
                  Math.min(l, Math.abs(u.left)) * (u.left < 0 ? -1 : 1)),
                (l -= Math.abs(u.left))),
              pe(`- checked x: ${u.left}`)),
            s.push(u),
            n && !l)
          )
            break;
          if (!("ownerDocument" in e)) break;
          const d = window.getComputedStyle(e);
          if ("fixed" === d.position || "sticky" === d.position) break;
          (a = e),
            (o = {
              top: o.top - u.top,
              right: o.right - u.left,
              bottom: o.bottom - u.top,
              left: o.left - u.left,
            });
        }
        let c = !1;
        for (let e of s) {
          if (Ie(e.left) && Ie(e.top)) continue;
          let t = Oe(e.element),
            i = t.scrollTop + e.top,
            n = t.scrollLeft + e.left;
          (n = ge(n, 0, t.MaxScrollLeft())),
            (i = ge(i, 0, t.MaxScrollTop())),
            (Ie(t.scrollLeft - n) && Ie(t.scrollTop - i)) ||
              (t.scrollTo({ left: n, top: i, behavior: r }),
              c || (pe("Scrolling:"), (c = !0)),
              pe(
                `- ${e.top},${e.left} => ${i}, ${n}, behavior: ${r}`,
                e.element,
              ));
        }
      }
      function Ae(e, t) {
        const { top: r, left: i, behavior: n } = t,
          s = Oe(e);
        s.scrollTo({
          top: s.scrollTop + (r ?? 0),
          left: s.scrollLeft + (i ?? 0),
          behavior: n,
        });
      }
      class Ne {
        m_element;
        m_fnOriginalScrollTo;
        m_window;
        m_scrollTopTarget = void 0;
        m_scrollLeftTarget = void 0;
        m_animation = void 0;
        constructor(e) {
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
          if ("smooth" != e?.behavior)
            this.m_animation &&
              (this.m_animation.Cancel(), (this.m_animation = void 0)),
              this.m_window
                ? this.m_window.scrollTo(e)
                : this.m_fnOriginalScrollTo?.apply(this.m_element, [e]),
              this.ResetScrollState();
          else {
            const t = e.left ?? this.scrollLeft,
              r = e.top ?? this.scrollTop;
            let i = "sine";
            this.m_animation && (this.m_animation.Cancel(), (i = "linear"));
            if (
              Math.max(
                Math.abs(this.currentScrollTop - r),
                Math.abs(this.currentScrollLeft - t),
              ) > 0
            ) {
              const e = {
                msDuration: 200,
                timing: i,
                onComplete: this.ResetScrollState,
              };
              if (this.m_window) {
                const i = this.currentScrollLeft,
                  n = this.currentScrollTop;
                this.m_animation = new he(this.m_window, e, (e) => {
                  this.m_window?.scrollTo({
                    left: i + (t - i) * e,
                    top: n + (r - n) * e,
                    behavior: "auto",
                  });
                });
              } else
                (this.m_element.style.scrollSnapType = "initial"),
                  (this.m_animation = new be(
                    this.m_element,
                    { scrollTop: r, scrollLeft: t },
                    e,
                  ));
              (this.m_scrollLeftTarget = t),
                (this.m_scrollTopTarget = r),
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
          return this.m_scrollLeftTarget ?? this.currentScrollLeft;
        }
        get scrollTop() {
          return this.m_scrollTopTarget ?? this.currentScrollTop;
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
      (0, b.Cg)([p.o], Ne.prototype, "ResetScrollState", null);
      const Ee = new WeakMap();
      function Oe(e) {
        let t = Ee.get(e);
        return t || ((t = new Ne(e)), Ee.set(e, t)), t;
      }
      function De(e) {
        const t = Ee.get(e);
        return t
          ? { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop }
          : { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
      }
      const ze = new U("FocusNavigationMovement"),
        Pe = ze.Debug;
      var We, Ge, Ue, xe;
      !(function (e) {
        (e[(e.NONE = 0)] = "NONE"),
          (e[(e.COLUMN = 1)] = "COLUMN"),
          (e[(e.ROW = 2)] = "ROW"),
          (e[(e.COLUMN_REVERSE = 3)] = "COLUMN_REVERSE"),
          (e[(e.ROW_REVERSE = 4)] = "ROW_REVERSE"),
          (e[(e.GRID = 5)] = "GRID"),
          (e[(e.GEOMETRIC = 6)] = "GEOMETRIC");
      })(We || (We = {})),
        (function (e) {
          (e[(e.FIRST = 0)] = "FIRST"),
            (e[(e.LAST = 1)] = "LAST"),
            (e[(e.MAINTAIN_X = 2)] = "MAINTAIN_X"),
            (e[(e.MAINTAIN_Y = 3)] = "MAINTAIN_Y"),
            (e[(e.PREFERRED_CHILD = 4)] = "PREFERRED_CHILD");
        })(Ge || (Ge = {})),
        (function (e) {
          (e[(e.Standard = 0)] = "Standard"),
            (e[(e.NoTransform = 1)] = "NoTransform"),
            (e[(e.NoTransformSparseContent = 2)] = "NoTransformSparseContent");
        })(Ue || (Ue = {})),
        (function (e) {
          (e[(e.INVALID = 0)] = "INVALID"),
            (e[(e.FORWARD = 1)] = "FORWARD"),
            (e[(e.BACKWARD = 2)] = "BACKWARD");
        })(xe || (xe = {}));
      class Le {
        m_Tree;
        m_Parent;
        m_rgChildren = [];
        m_ActiveChild;
        m_iLastActiveChildIndex = -1;
        m_Properties;
        m_element;
        m_FocusRing;
        m_bChildrenSorted = !1;
        m_bAutoFocusChild = !1;
        m_bMounted = !1;
        m_nDepth;
        m_Focused = z(!1);
        m_FocusWithin = z(!1);
        m_ActionDescriptionsChangedCallbackList = new N.l();
        m_FocusableIfEmptyAncestor = null;
        m_rgNavigationHandlers = [];
        m_rgFocusHandlers = [];
        constructor(e, t, r) {
          (this.m_Tree = e),
            (this.m_Parent = t),
            (this.m_FocusRing = r),
            (this.m_nDepth = t ? t.m_nDepth + 1 : 0);
        }
        CreateHandle() {
          return new re(this);
        }
        get Tree() {
          return this.m_Tree;
        }
        get NavKey() {
          return this.m_Properties?.navKey ? this.m_Properties.navKey : void 0;
        }
        get Element() {
          return this.m_element;
        }
        get Parent() {
          return this.m_Parent;
        }
        GetNavParentCrossingTrees() {
          return this.m_Parent
            ? this.m_Parent
            : this.m_Tree.GetParentEmbeddedNavTree() && this.Element
              ? (this.Element.__nav_wrapper ?? null)
              : null;
        }
        GetWrappedTree() {
          return null;
        }
        SetProperties(e) {
          const t =
            ((r = this.m_Properties?.actionDescriptionMap),
            (n = e?.actionDescriptionMap),
            (s = c),
            !(null == r || null == n
              ? r === n
              : "object" == typeof r &&
                "object" == typeof n &&
                Object.keys(r).length === Object.keys(n).length &&
                ((s = s ?? ((e, t) => e === t)),
                Object.keys(r).every(
                  (e) => n.hasOwnProperty(e) && s(r[e], n[e]),
                ))));
          var r, n, s;
          const a = this.m_Properties?.focusableIfEmpty,
            o = this.m_Properties?.noFocusRing;
          (this.m_Properties = e || {}),
            t && this.m_ActionDescriptionsChangedCallbackList.Dispatch(),
            this.m_Properties.focusableIfEmpty && !a
              ? this.PropagateFocusableIfEmptyAncestorToDescendants(this)
              : !this.m_Properties.focusableIfEmpty &&
                a &&
                this.PropagateFocusableIfEmptyAncestorToDescendants(
                  this.m_FocusableIfEmptyAncestor,
                ),
            this.m_Properties.noFocusRing && !o && this.BHasFocus()
              ? this.m_FocusRing?.OnBlur(i.APPLICATION, this, this)
              : !this.m_Properties.noFocusRing &&
                o &&
                this.BHasFocus() &&
                this.m_FocusRing?.OnFocus(i.APPLICATION, this, this),
            this.m_element && this.RegisterDOMEvents();
        }
        BWantsAutoFocus() {
          return this.m_Properties?.autoFocus || this.m_bAutoFocusChild;
        }
        BWantsPreferredFocus() {
          return this.m_Properties?.preferredFocus;
        }
        BWantsFocusRing() {
          return (
            !this.m_Properties?.noFocusRing ||
            this.m_Tree.Controller.GetShowDebugFocusRing().Value
          );
        }
        GetBoundingRect() {
          return this.m_element?.getBoundingClientRect();
        }
        GetElementForFocusRingMeasure() {
          const e = this.m_element;
          return this.m_Properties?.focusRingSizeElementID
            ? (e?.ownerDocument?.getElementById(
                this.m_Properties.focusRingSizeElementID,
              ) ?? e)
            : e;
        }
        GetBoundingRectForFocusRing() {
          return this.GetElementForFocusRingMeasure()?.getBoundingClientRect();
        }
        GetBorderRadiusForFocusRing() {
          if (!this.m_Properties?.focusRingHasBorderRadius) return;
          const e = this.GetElementForFocusRingMeasure();
          if (!e) return;
          const t = e.ownerDocument?.defaultView?.getComputedStyle(e);
          return t
            ? {
                borderTopLeftRadius: t.borderTopLeftRadius,
                borderTopRightRadius: t.borderTopRightRadius,
                borderBottomRightRadius: t.borderBottomRightRadius,
                borderBottomLeftRadius: t.borderBottomLeftRadius,
              }
            : void 0;
        }
        SetHasFocus(e) {
          this.m_Focused.Set(e);
        }
        SetFocusWithin(e) {
          this.m_FocusWithin.Set(e) &&
            this.m_Properties?.onFocusWithin &&
            this.m_Properties.onFocusWithin(e);
        }
        get SubscribableHasFocus() {
          return this.m_Focused;
        }
        BHasFocus() {
          return this.m_Focused.Value;
        }
        get SubscribableFocusWithin() {
          return this.m_FocusWithin;
        }
        BFocusWithin() {
          return this.m_FocusWithin.Value;
        }
        ForceMeasureFocusRing() {
          this.m_FocusRing?.OnForceMeasureFocusRing();
        }
        get ActionDescriptionChangedCallbackList() {
          return this.m_ActionDescriptionsChangedCallbackList;
        }
        GetActiveActionDescriptions() {
          return this.BuildConsolidatedActionDescriptionMap({});
        }
        BuildConsolidatedActionDescriptionMap(e) {
          const t = this.m_Properties?.actionDescriptionMap;
          if (t)
            for (const r in t) {
              const i = r;
              void 0 === e[i] && (e[i] = t[i]);
            }
          return this.m_Parent
            ? this.m_Parent.BuildConsolidatedActionDescriptionMap(e)
            : this.m_Tree.GetParentEmbeddedNavTree()
              ? this.m_Tree
                  .GetParentEmbeddedNavTree()
                  .Root.BuildConsolidatedActionDescriptionMap(e)
              : e;
        }
        AddChild(e) {
          this.m_rgChildren.push(e),
            (this.m_bChildrenSorted = !1),
            this.m_element && this.RegisterDOMEvents(),
            this.m_Properties?.focusableIfEmpty
              ? e.SetFocusableIfEmptyAncestor(this)
              : this.m_FocusableIfEmptyAncestor &&
                e.SetFocusableIfEmptyAncestor(this.m_FocusableIfEmptyAncestor),
            this.m_bMounted &&
              e.BFocusWithin() &&
              (k(
                !this.m_ActiveChild && this.BFocusWithin(),
                "Invalid focus state in AddChild",
              ),
              this.SetActiveChild(this.m_rgChildren.length - 1));
        }
        OnMount(e) {
          (this.m_element = e),
            this.m_Parent
              ? this.m_Parent.AddChild(this)
              : k(this == this.m_Tree.Root, "Only root should have no parent"),
            (this.m_bMounted = !0),
            this.RegisterDOMEvents();
          const t =
              this.m_FocusableIfEmptyAncestor &&
              this.m_FocusableIfEmptyAncestor.BHasFocus(),
            r = this.m_Properties?.autoFocus || t;
          if (this.BWantsAutoFocus() || r) {
            let e = -1;
            this.m_rgChildren.length &&
              (this.EnsureChildrenSorted(),
              (e = this.m_rgChildren.findIndex((e) => e.BWantsAutoFocus()))),
              (this.m_Properties?.autoFocus || r || -1 !== e) &&
                (this.SetActiveChild(e),
                !this.m_Parent || this.m_Parent.m_element
                  ? t
                    ? this.m_Tree.DeferredFocus.BHasQueuedFocusNode() ||
                      this.m_Tree.DeferredFocus.RequestFocus(
                        this.m_FocusableIfEmptyAncestor,
                        { bFocusDescendant: !0 },
                      )
                    : this.Tree.DeferredFocus.RequestFocus(this)
                  : (this.m_Parent.m_bAutoFocusChild = !0));
          } else if (this.m_rgChildren.length) {
            const e = this.m_rgChildren.findIndex((e) => e.BFocusWithin());
            -1 != e &&
              (this.SetActiveChild(e),
              k(
                this.BFocusWithin(),
                "Child has focus, we should be m_bFocusWithin",
              ));
          }
        }
        DEV_SetDebugPropsOnElement() {}
        OnUnmount() {
          this.m_Properties?.focusableIfEmpty &&
            this.PropagateFocusableIfEmptyAncestorToDescendants(
              this.m_FocusableIfEmptyAncestor,
            ),
            (this.m_bMounted = !1);
          const e = this.Tree.DeferredFocus.BIsQueuedFocusNode(this);
          (this.BHasFocus() || e) &&
            (Pe(
              `The focused node is unmounting, ${this.m_FocusableIfEmptyAncestor ? "will transfer to retain focus ancestor" : "will blur"}.`,
            ),
            e && this.Tree.DeferredFocus.RequestFocus(null),
            this.m_FocusableIfEmptyAncestor
              ? this.m_FocusableIfEmptyAncestor.OnFocusedDecendantRemoved(this)
              : this.BHasFocus() &&
                this.m_Tree.TransferFocus(i.APPLICATION, null)),
            this.UnregisterDOMEvents(),
            this.m_Parent
              ? this.m_Parent.RemoveChild(this)
              : k(this == this.m_Tree.Root, "Only root should have no parent");
        }
        RegisterDOMEvents() {
          !this.m_rgNavigationHandlers.length &&
            this.m_element &&
            (this.m_rgChildren.length >= 2 ||
              this.m_Properties?.layout != We.NONE ||
              this.m_Properties.onMoveUp ||
              this.m_Properties.onMoveRight ||
              this.m_Properties.onMoveDown ||
              this.m_Properties.onMoveLeft) &&
            this.m_rgNavigationHandlers.push(
              m(this.m_element, this.OnNavigationEvent),
            ),
            (this.m_Properties?.focusable ||
              this.m_Properties?.focusableIfEmpty ||
              0 == this.m_rgChildren.length) &&
              (this.m_rgFocusHandlers.length ||
                (this.m_element?.addEventListener("focus", this.OnDOMFocus),
                this.m_element?.addEventListener("blur", this.OnDOMBlur),
                this.m_rgFocusHandlers.push(() => {
                  this.m_element?.removeEventListener("focus", this.OnDOMFocus),
                    this.m_element?.removeEventListener("blur", this.OnDOMBlur);
                })));
        }
        RemoveChild(e) {
          let t = this.m_rgChildren.indexOf(e);
          k(-1 !== t, "Child was not found to remove"),
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
              this.m_ActiveChild,
            );
          }
          return this.m_iLastActiveChildIndex;
        }
        EnsureChildrenSorted(e = !1) {
          (this.m_bChildrenSorted && !e) ||
            (this.m_rgChildren.sort((e, t) => {
              const r = e.m_element,
                i = t.m_element;
              if (!r || !r.isConnected) return i && i.isConnected ? 1 : 0;
              if (!i || !i.isConnected) return -1;
              const n = r.compareDocumentPosition(i);
              return n & Node.DOCUMENT_POSITION_PRECEDING
                ? 1
                : n & Node.DOCUMENT_POSITION_FOLLOWING
                  ? -1
                  : 0;
            }),
            this.m_ActiveChild &&
              (this.m_iLastActiveChildIndex = this.m_rgChildren.indexOf(
                this.m_ActiveChild,
              )),
            (this.m_bChildrenSorted = !0));
        }
        GetLastFocusElement() {
          const e = this.GetActiveChild();
          return e ? e.GetLastFocusElement() : this.m_element;
        }
        OnDOMFocus(e) {
          if (!this.BHasFocus()) {
            if ("children" == this.GetFocusable()) {
              const e = this.FindFocusableDescendant();
              if (e && e !== this)
                return (
                  Pe(
                    "Browser gave node focus but we are marked focusableIfEmpty, transfering focus to descendant.",
                    this.m_element,
                    e.m_element,
                  ),
                  void this.m_Tree.TransferFocus(i.BROWSER, e)
                );
            }
            this.m_Tree.TransferFocus(i.BROWSER, this);
          }
        }
        OnDOMBlur(e) {
          this.BHasFocus() &&
            this.m_element?.ownerDocument.hasFocus() &&
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
            focusableIfEmpty: t,
            childFocusDisabled: r,
            fnCanTakeFocus: i,
          } = this.m_Properties;
          return this.m_bMounted
            ? i && !i(this)
              ? "none"
              : e || (t && (r || 0 == this.m_rgChildren.length))
                ? "self"
                : !r && this.m_rgChildren.length
                  ? "children"
                  : "none"
            : "none";
        }
        BTakeFocus(e, t) {
          const r = this.FindFocusableNode(t);
          return this.InternalFocusDescendant(r, e, t);
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
          const r = this.FindFocusableDescendant(t);
          return this.InternalFocusDescendant(r, e, t);
        }
        BFocusFirstChild(e) {
          const t = this.FindNextFocusableChildInDirection(
            -1,
            xe.FORWARD,
            a.pR.INVALID,
          );
          return this.InternalFocusDescendant(t, e);
        }
        BFocusLastChild(e) {
          const t = this.FindNextFocusableChildInDirection(
            this.m_rgChildren.length,
            xe.BACKWARD,
            a.pR.INVALID,
          );
          return this.InternalFocusDescendant(t, e);
        }
        FindFocusableDescendant(e, t) {
          const r = le(e),
            { focusableIfEmpty: i, childFocusDisabled: n } =
              this.m_Properties ?? {};
          if (n) return null;
          if (this.m_rgChildren.length) {
            this.EnsureChildrenSorted();
            const { navEntryPreferPosition: n, resetNavOnEntry: s } =
              this.m_Properties ?? {};
            let a = this.GetActiveChildIndex();
            s && void 0 !== e && (a = -1);
            const o = this.GetLayout();
            let l, c;
            if (
              (this.IsValidChildIndex(a) ||
                (a =
                  a >= this.m_rgChildren.length ||
                  o == We.ROW_REVERSE ||
                  o == We.COLUMN_REVERSE ||
                  n == Ge.LAST
                    ? this.m_rgChildren.length - 1
                    : 0),
              n == Ge.MAINTAIN_X
                ? (c = "x")
                : n == Ge.MAINTAIN_Y
                  ? (c = "y")
                  : o == We.GEOMETRIC && r && (c = $[r]),
              (c || t) && r)
            ) {
              const i = this.m_Tree.GetLastFocusedNode();
              if (t || (i && c == $[r])) {
                const s =
                  t ||
                  this.AdjustRectForLastMovementOnTangentAxis(
                    i.GetBoundingRect(),
                    r,
                  );
                Pe(
                  `Taking focus while preserving ${n && Ge[n]} preserved: ${c} movement: ${r}, node:`,
                  s,
                ),
                  (l = this.FindClosestFocusableNodeToRect(e, s));
              } else if (c != $[r]) {
                const t = this.ComputeRelativeDirection(e, We.GRID),
                  r = t == xe.BACKWARD ? this.m_rgChildren.length : -1;
                l = this.FindNextFocusableChildInDirection(r, t, e);
              }
            } else if (n == Ge.PREFERRED_CHILD) {
              let t = this.m_rgChildren;
              for (; t.length; ) {
                let r = [];
                for (const i of t) {
                  if (
                    ((l = i.BWantsPreferredFocus()
                      ? i.FindFocusableNode(e)
                      : void 0),
                    l)
                  )
                    return l;
                  r.push(...i.m_rgChildren);
                }
                t = r;
              }
            } else
              n == Ge.LAST &&
                (l = this.FindNextFocusableChildInDirection(
                  a + 1,
                  xe.BACKWARD,
                  e,
                ));
            return (
              l ||
                (l = this.FindNextFocusableChildInDirection(
                  a - 1,
                  xe.FORWARD,
                  e,
                )),
              l ||
                (l = this.FindNextFocusableChildInDirection(a, xe.BACKWARD, e)),
              l || (i ? this : null)
            );
          }
          return null;
        }
        BVisibleChildTakeFocus(e) {
          const t = this.Element?.ownerDocument?.defaultView ?? window,
            r = ce(this, {
              top: 0,
              left: 0,
              right: t.innerWidth,
              bottom: t.innerHeight,
            });
          return (
            Pe(
              `Focusing visible child, best child match is ${r?.child?.Element?.className} - ${JSON.stringify(r?.visibility)}`,
            ),
            !!r && r.child.BTakeFocus(e)
          );
        }
        GetLayout() {
          if (this.m_Properties?.layout) return this.m_Properties.layout;
          if (this.m_rgChildren.length < 2) return We.NONE;
          return oe(this.m_element);
        }
        OnNavigationEvent(e) {
          const t = e.detail.button;
          if (this.BTryInternalNavigation(t, e.detail.is_repeat ?? !1))
            return !0;
          const {
            onMoveUp: r,
            onMoveRight: i,
            onMoveDown: n,
            onMoveLeft: s,
          } = this.m_Properties ?? {};
          let o = !1;
          switch (t) {
            case a.pR.DIR_UP:
              r && (o = r(e.detail, this));
              break;
            case a.pR.DIR_RIGHT:
              i && (o = i(e.detail, this));
              break;
            case a.pR.DIR_DOWN:
              n && (o = n(e.detail, this));
              break;
            case a.pR.DIR_LEFT:
              s && (o = s(e.detail, this));
          }
          return o;
        }
        InternalFocusDescendant(e, t, r) {
          return !!e && (this.m_Tree.TransferFocus(t, e, r, !1), !0);
        }
        BHasNavTargetInDirection(e, t) {
          if (this.HasMovementHandler(e)) return !0;
          let r = this.FindNextFocusableChild(e);
          if (t && r) {
            let e = r.GetWrappedTree();
            if (e && e.GetExcludeFromScrollRegionSearch()) return !1;
          }
          return !!r;
        }
        HasMovementHandler(e) {
          switch (e) {
            case a.pR.DIR_UP:
              return !!this.m_Properties?.onMoveUp;
            case a.pR.DIR_DOWN:
              return !!this.m_Properties?.onMoveDown;
            case a.pR.DIR_LEFT:
              return !!this.m_Properties?.onMoveLeft;
            case a.pR.DIR_RIGHT:
              return !!this.m_Properties?.onMoveRight;
          }
          return !1;
        }
        FindNextFocusableChild(e) {
          const t = this.GetLayout(),
            r = this.ComputeRelativeDirection(e, t);
          if (r == xe.INVALID) return null;
          if (this.m_Properties?.focusable && this.BHasFocus()) return null;
          if ((this.EnsureChildrenSorted(!0), t == We.GRID))
            return this.FindNextFocusableChildInGrid(
              this.GetActiveChildIndex(),
              r,
              e,
            );
          if (t == We.GEOMETRIC)
            return this.FindNextFocusableChildGeometric(r, e);
          let i = this.GetActiveChildIndex();
          return (
            this.IsValidChildIndex(i) ||
              (i = r == xe.FORWARD ? -1 : this.m_rgChildren.length),
            this.FindNextFocusableChildInDirection(i, r, e)
          );
        }
        BTryInternalNavigation(e, t) {
          Pe(
            `Handling navigation event ${a.pR[e]} - ${We[this.GetLayout()]}`,
            this.m_element,
          );
          const r = this.FindNextFocusableChild(e);
          if (!r) return !1;
          const n = le(e),
            s = this.ComputeRelativeDirection(e, this.GetLayout());
          if (
            this.GetScrollIntoViewType() == Ue.NoTransformSparseContent ||
            r.GetScrollIntoViewType() == Ue.NoTransformSparseContent
          ) {
            const e = r.Element?.ownerDocument.defaultView;
            if (e) {
              const i =
                  ("y" == n ? e.innerHeight : e.innerWidth) / (t ? 4.5 : 3.33),
                a = Se(r.Element);
              let o = !1;
              if (
                ("y" == n
                  ? s == xe.FORWARD
                    ? (o =
                        a.top > e.innerHeight && a.bottom > e.innerHeight + i)
                    : s == xe.BACKWARD && (o = a.bottom < 0 && a.top < -i)
                  : "x" == n &&
                    (s == xe.FORWARD
                      ? (o =
                          a.left > e.innerWidth && a.right > e.innerWidth + i)
                      : s == xe.BACKWARD && (o = a.right < 0 && a.left < -i)),
                o)
              )
                return (
                  Pe(`Element too far away, scrolling ${i} on ${n} axis `),
                  Fe(r.Element, r.Element, "smooth", n, i),
                  !0
                );
            }
          }
          return this.m_Tree.TransferFocus(i.GAMEPAD, r, e), !0;
        }
        GetScrollIntoViewType() {
          return void 0 !== this.m_Properties?.scrollIntoViewType &&
            null !== this.m_Properties?.scrollIntoViewType
            ? this.m_Properties.scrollIntoViewType
            : this.m_Parent
              ? this.m_Parent.GetScrollIntoViewType()
              : Ue.Standard;
        }
        GetRelativeDirection(e) {
          return this.ComputeRelativeDirection(e, this.GetLayout());
        }
        ComputeRelativeDirection(e, t) {
          let r = t == We.ROW_REVERSE || t == We.COLUMN_REVERSE;
          switch (t) {
            case We.ROW:
            case We.ROW_REVERSE:
              switch (e) {
                case a.pR.DIR_LEFT:
                  return r ? xe.FORWARD : xe.BACKWARD;
                case a.pR.DIR_RIGHT:
                  return r ? xe.BACKWARD : xe.FORWARD;
                default:
                  return xe.INVALID;
              }
            case We.COLUMN:
            case We.COLUMN_REVERSE:
              switch (e) {
                case a.pR.DIR_UP:
                  return r ? xe.FORWARD : xe.BACKWARD;
                case a.pR.DIR_DOWN:
                  return r ? xe.BACKWARD : xe.FORWARD;
                default:
                  return xe.INVALID;
              }
            case We.GRID:
            case We.GEOMETRIC:
              switch (e) {
                case a.pR.DIR_LEFT:
                case a.pR.DIR_UP:
                  return r ? xe.FORWARD : xe.BACKWARD;
                case a.pR.DIR_RIGHT:
                case a.pR.DIR_DOWN:
                  return r ? xe.BACKWARD : xe.FORWARD;
                default:
                  return xe.INVALID;
              }
            default:
              return xe.INVALID;
          }
        }
        AdvanceIndex(e, t) {
          return e + (t == xe.FORWARD ? 1 : -1);
        }
        FindNextFocusableChildInDirection(e, t, r) {
          let i = t == xe.FORWARD ? 1 : -1;
          for (let t = e + i; t >= 0 && t < this.m_rgChildren.length; t += i) {
            const e = this.m_rgChildren[t].FindFocusableNode(r);
            if (e) return e;
          }
          return null;
        }
        ScanChildren(e, t, r) {
          let i = t == xe.FORWARD ? 1 : -1;
          for (let t = e; t >= 0 && t < this.m_rgChildren.length; t += i)
            if (r(this.m_rgChildren[t], t)) return t;
          return -1;
        }
        FindNextFocusableChildInGrid(e, t, r) {
          const i = r == a.pR.DIR_UP || r == a.pR.DIR_DOWN,
            n = this.GetLastFocusElement();
          if (!n || n == this.m_element)
            return (
              k(
                !1,
                "No active child for grid navigation",
                this.m_iLastActiveChildIndex,
                this.m_rgChildren.length,
                n,
              ),
              this.FindFocusableDescendant(r)
            );
          let s = this.GetActiveDescendant().GetBoundingRect();
          if (
            ((r != a.pR.DIR_UP && r != a.pR.DIR_DOWN) ||
              (s = this.AdjustRectForLastMovementOnTangentAxis(s, "y")),
            i)
          ) {
            let i = e;
            for (; -1 != i; ) {
              const e = this.ScanChildren(
                this.AdvanceIndex(i, t),
                t,
                (e) => !ie("y", s, e.GetBoundingRect()),
              );
              if (-1 != e) {
                const i = this.m_rgChildren[e].GetBoundingRect(),
                  n = this.FindClosestChildInNextAxiallyAlignedSet(
                    "x",
                    t,
                    r,
                    s,
                    e,
                    i,
                  );
                if (n) return n;
              }
              i = e;
            }
          } else {
            let i = t == xe.FORWARD ? 1 : -1;
            for (
              let n = this.AdvanceIndex(e, t);
              n >= 0 && n < this.m_rgChildren.length;
              n += i
            ) {
              const e = this.m_rgChildren[n];
              if (!ie("y", s, e.GetBoundingRect())) return null;
              let t = e.FindFocusableNode(r);
              if (t) return t;
            }
          }
          return null;
        }
        FindNextFocusableChildGeometric(e, t) {
          const r = this.GetLastFocusElement();
          if (!r || r == this.m_element)
            return (
              k(
                !1,
                "No active child for geometric navigation",
                this.m_iLastActiveChildIndex,
                this.m_rgChildren.length,
                r,
              ),
              this.FindFocusableDescendant(t)
            );
          const i = le(t);
          if (!i) return null;
          const n = this.AdjustRectForLastMovementOnTangentAxis(
            this.GetActiveDescendant().GetBoundingRect(),
            i,
          );
          return this.FindClosetChildInDirection(i, n, e, t);
        }
        AdjustRectForLastMovementOnTangentAxis(e, t) {
          const r = this.m_Tree.GetLastFocusedMovementRect($[t]);
          return r
            ? "x" == t
              ? { left: e.left, right: e.right, top: r.top, bottom: r.bottom }
              : { left: r.left, right: r.right, top: e.top, bottom: e.bottom }
            : e;
        }
        FindClosestFocusableNodeToRect(e, t) {
          const r = le(e),
            i = r && $[r],
            n = [];
          for (const e of this.m_rgChildren) {
            const r = e.GetBoundingRect();
            if (r) {
              const s = H(t, r),
                a = i ? ne(i, t, r) : 0;
              n.push({ child: e, overlap: a, dist: s });
            }
          }
          n.sort((e, t) =>
            e.dist != t.dist ? e.dist - t.dist : t.overlap - e.overlap,
          );
          for (const { child: r } of n) {
            const i = r.FindFocusableNode(e, t);
            if (i) return i;
          }
          return null;
        }
        FindClosetChildInDirection(e, t, r, i) {
          Pe(
            `Find child closest to rect, rect is at left ${t.left} top ${t.top} right ${t.right} bottom ${t.bottom}`,
          );
          const n = se(e, t),
            s = [];
          for (const i of this.m_rgChildren) {
            const a = i.GetBoundingRect();
            if (a) {
              const o = se(e, a);
              let l;
              (l = r == xe.FORWARD ? o.min - n.max : n.min - o.max),
                l >= 0 &&
                  s.push({ child: i, overlap: ne($[e], t, a), dist: l });
            }
          }
          if (
            (s.sort((e, t) => {
              if (e.overlap) {
                if (!t.overlap) return -1;
              } else if (t.overlap) return 1;
              const r = e.dist - t.dist;
              return r || t.overlap - e.overlap;
            }),
            ze.IsDebugEnabled())
          ) {
            const e = s
              .slice(0, 3)
              .map(
                ({ dist: e, overlap: t, child: r }) =>
                  `[ node: ${r.m_element?.className} dist: ${e} overlap: ${t} ]`,
              );
            Pe(`Found nodes on axis, top 3 (of ${s.length}: ${e.join(", ")}`);
          }
          for (const { child: e } of s) {
            const r = e.FindFocusableNode(i, t);
            if (r) return r;
          }
          return null;
        }
        FindClosestChildInNextAxiallyAlignedSet(e, t, r, i, n, s) {
          (!n || n < 0) && (n = 0);
          let a = [];
          if (!i) return null;
          const o = { x: (l = i).left, y: l.top };
          var l;
          this.ScanChildren(n, t, (t) => {
            const r = t.GetBoundingRect();
            return (
              !!r &&
              (!(!s || ie($[e], s, r)) ||
                (a.push({ child: t, overlap: ne(e, i, r), dist: ae(e, o, r) }),
                !1))
            );
          }),
            t == xe.BACKWARD && a.reverse(),
            a.sort((e, t) => {
              const r = t.overlap - e.overlap;
              return 0 != r ? r : e.dist - t.dist;
            });
          for (const { child: e } of a) {
            const t = e.FindFocusableNode(r, i);
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
          e instanceof Le
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
        SetFocusableIfEmptyAncestor(e) {
          (this.m_FocusableIfEmptyAncestor = e),
            this.m_Properties?.focusableIfEmpty ||
              this.PropagateFocusableIfEmptyAncestorToDescendants(e);
        }
        PropagateFocusableIfEmptyAncestorToDescendants(e) {
          for (let t = 0; t < this.m_rgChildren.length; t++)
            this.m_rgChildren[t].SetFocusableIfEmptyAncestor(e);
        }
        OnFocusedDecendantRemoved(e) {
          this.m_Tree.DeferredFocus.RequestFocus(this, {
            bFocusDescendant: !0,
          });
        }
        SetDOMFocusAndScroll(e, t, r, i) {
          this.UpdateParentActiveChild(),
            this.m_Tree.OnChildActivated(e),
            this.m_Tree.BIsActiveFocus()
              ? (k(
                  !this.m_Tree.BUseVirtualFocus(),
                  "Virtual focus tree should not have browser focus",
                ),
                this.m_element?.focus({ preventScroll: !0 }))
              : this.m_Tree.BUseVirtualFocus() ||
                Pe(
                  `Didn't move focus to element as tree ${this.m_Tree.id} is not active focus tree`,
                ),
            this.m_Tree.BIsActive() && we(this, t, e, r, i);
        }
      }
      (0, b.Cg)([p.o], Le.prototype, "OnDOMFocus", null),
        (0, b.Cg)([p.o], Le.prototype, "OnDOMBlur", null),
        (0, b.Cg)([p.o], Le.prototype, "OnNavigationEvent", null);
      const ke = new U("FocusNavigation").Debug,
        je = new U("GamepadEvents").Debug;
      class He extends Le {
        m_wrappedTree;
        m_rgCallbackRegistrations = new G();
        constructor(e, t) {
          super(t.m_Tree, t, t.m_FocusRing),
            this.SetProperties({ navKey: `FocusNavTreeWrapper_${e}` });
        }
        OnMount(e) {
          super.OnMount(e), (e.__nav_wrapper = this);
          const t = e.__nav_tree;
          t && this.BindTree(t);
        }
        OnUnmount() {
          this.m_rgCallbackRegistrations.Unregister(), super.OnUnmount();
        }
        BindTree(e) {
          e.GetParentEmbeddedNavTree() &&
            ((this.m_wrappedTree = e),
            this.m_rgCallbackRegistrations.Push(
              e.OnActivateCallbacks.Register(this.OnWrappedTreeActivated)
                .Unregister,
            ),
            e.BIsActive() && this.OnWrappedTreeActivated(),
            this.m_rgCallbackRegistrations.Push(
              e.RegisterOnUnhandledButtonCallback(
                this.OnWrappedTreeUnhandledButton,
              ),
            ));
        }
        OnWrappedTreeActivated() {
          ke(
            "Wrapped tree activated, " +
              (this.BHasFocus()
                ? "but we already have focus"
                : "transferring focus"),
          ),
            this.BHasFocus() || this.m_Tree.TransferFocus(i.APPLICATION, this);
        }
        OnWrappedTreeUnhandledButton(e) {
          return (
            je(
              `Propagating ${a.pR[e.detail.button]} event out of tree, firing at element:`,
              this.m_Parent?.Element,
            ),
            g(this.m_Parent?.Element, "vgp_onbuttondown", e.detail),
            !0
          );
        }
        SetDOMFocusAndScroll(e, t, r, i) {
          this.UpdateParentActiveChild(),
            this.m_wrappedTree?.BIsActive() ||
              (this.m_wrappedTree?.Activate(),
              this.m_wrappedTree?.TakeFocus(e));
        }
        CanTakeFocus(e) {
          return !!this.m_wrappedTree?.Root.FindFocusableDescendant();
        }
        SetProperties(e) {
          super.SetProperties({
            ...e,
            noFocusRing: !0,
            focusable: !0,
            fnCanTakeFocus: this.CanTakeFocus,
          });
        }
        GetWrappedTree() {
          return this.m_wrappedTree || null;
        }
      }
      (0, b.Cg)([p.o], He.prototype, "OnWrappedTreeActivated", null),
        (0, b.Cg)([p.o], He.prototype, "OnWrappedTreeUnhandledButton", null),
        (0, b.Cg)([p.o], He.prototype, "CanTakeFocus", null);
      const Ve = new U("FocusHistory").Debug;
      function Ke(e) {
        const t = (t) => {
            Ve(
              `preserving state and suppressing focus for tree ${e.id} for navigation type ${t.navigationType}`,
            );
            const r = window.navigation.currentEntry?.getState() ?? {};
            if ("replace" != t.navigationType) {
              const t = J(e.Root);
              window.navigation.updateCurrentEntry({
                state: { ...r, [$e(e)]: t },
              });
            } else
              r[Xe] &&
                t.intercept({
                  async handler() {
                    const r = t.destination.getState() ?? {},
                      { [$e(e)]: i, ...n } = r;
                    window.navigation.updateCurrentEntry({
                      state: { ...n, [Xe]: !0 },
                    });
                  },
                  focusReset: "manual",
                });
            e.DeferredFocus.SuppressFocus();
          },
          r = (t) => {
            qe(e)
              ? e.DeferredFocus.Reset()
              : e.DeferredFocus.ExecuteQueuedFocus();
          },
          i = new G();
        return (
          window.navigation.addEventListener("navigate", t),
          i.Push(() => window.navigation.removeEventListener("navigate", t)),
          window.navigation.addEventListener("navigatesuccess", r),
          i.Push(() =>
            window.navigation.removeEventListener("navigatesuccess", r),
          ),
          (function () {
            if (!Ye) {
              Ye = new N.l();
              const e = performance.now(),
                t = (t) => {
                  "string" == typeof t.data &&
                    "FocusRestoreReady" == t.data &&
                    (Ve(
                      `Got FocusRestoreReady event from page after ${performance.now() - e}ms, will record in history.  ${Ye.CountRegistered()} trees waiting.`,
                    ),
                    window.navigation.updateCurrentEntry({
                      state: {
                        ...window.navigation.currentEntry?.getState(),
                        [Xe]: !0,
                      },
                    }),
                    Ye.Dispatch(),
                    Ye.ClearAllCallbacks(),
                    window.clearTimeout(r));
                };
              window.addEventListener("message", t);
              const r = window.setTimeout(() => {
                Ye.CountRegistered() &&
                  (console.warn(
                    "Waited 4000ms for FocusRestoreReady, proceeding",
                  ),
                  Ye.Dispatch());
              }, 4e3);
            }
          })(),
          (function () {
            const e = window.navigation.currentEntry?.getState();
            return (
              Ve(`Wait for page? ${e?.[Xe] ? "wait" : "no"} `, e), !!e?.[Xe]
            );
          })()
            ? (function (e, t) {
                if (window.__bFocusRestoreReady) return void qe(e);
                Ve(
                  `Wait for page enabled, suppressing focus in ${e.id} until we hear that page is ready`,
                ),
                  e.DeferredFocus.SuppressFocus();
                const r = Qe(e),
                  i = () => {
                    qe(e, r)
                      ? e.DeferredFocus.Reset()
                      : e.DeferredFocus.ExecuteQueuedFocus();
                  },
                  n = Ye.Register(i).Unregister;
                t.Push(n);
              })(e, i)
            : qe(e),
          i.GetUnregisterFunc()
        );
      }
      function qe(e, t) {
        const r = t ?? Qe(e);
        return (
          Ve(
            `Restoring focus state for ${e.id}, ${r ? "history available" : "no history"}`,
          ),
          !!r && (Z(e.Root, r, 0), !0)
        );
      }
      function $e(e) {
        return `FocusHistory_${e.id}`;
      }
      function Qe(e) {
        const t = window.navigation.currentEntry?.getState();
        return t?.[$e(e)];
      }
      let Ye;
      const Xe = "FocusHistoryWaitForPage";
      const Je = new U("FocusNavigation").Debug,
        Ze = new U("GamepadEvents").Debug;
      class et {
        m_Controller;
        m_context;
        m_window;
        m_ParentNavTree;
        m_rgChildNavTrees = [];
        m_ID;
        m_valueIsMounted = z(!1);
        m_bIsEnabled = !1;
        m_tsLastActivated;
        m_Root;
        m_onActivateCallbacks = new N.l();
        m_onDeactivateCallbacks = new N.l();
        m_onActiveFocusStateChangedCallbacks = new N.l();
        m_onChildTreesChanged = new N.l();
        m_Properties;
        m_bExcludeFromScrollRegionSearch = !1;
        m_onGlobalButtonDown;
        m_rgOnUnhandledButton = [];
        m_rgGlobalButtonHandlers = [];
        constructor(e, t, r, i, n) {
          (this.m_Controller = e),
            (this.m_context = t),
            (this.m_ID = r),
            (this.m_ParentNavTree = i),
            (this.m_Root = new Le(this, null, null)),
            this.m_Root.SetProperties({ layout: We.COLUMN }),
            (this.m_Properties = n);
        }
        get id() {
          return this.m_ID;
        }
        get Parent() {
          return this.m_ParentNavTree;
        }
        get ChildTrees() {
          return this.m_rgChildNavTrees;
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
          return this.m_Properties.virtualFocus ?? !1;
        }
        BIsModal() {
          return this.m_Properties.modal ?? !1;
        }
        FindModalDescendant() {
          for (const e of this.m_rgChildNavTrees) {
            if (e.BIsModal() && e.BIsEnabled()) return e;
            const t = e.FindModalDescendant();
            if (t) return t;
          }
        }
        BIsContextActive() {
          return this.m_Controller.BIsInActiveContext(this);
        }
        CreateNode(e, t) {
          return new Le(this, e, t);
        }
        RegisterNavigationItem(e, t) {
          return e.OnMount(t), () => e.OnUnmount();
        }
        OnChildActivated(e) {
          this.m_valueIsMounted.Value &&
            this.m_Controller.OnGamepadNavigationTreeFocused(this, e);
        }
        m_lastFocusNode;
        m_bWasActiveForLastFocusChange;
        m_lastFocusNodeXMovement = new tt();
        m_lastFocusNodeYMovement = new tt();
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
        get OnChildTreesChangedCallbacks() {
          return this.m_onChildTreesChanged;
        }
        get OnActiveStateChangedCallbacks() {
          return this.m_onActiveFocusStateChangedCallbacks;
        }
        OnActivate(e) {
          (this.m_tsLastActivated = performance.now()),
            this.m_onActivateCallbacks.Dispatch(this, e),
            this.m_onActiveFocusStateChangedCallbacks.Dispatch(!0, this);
          for (let e = this.m_lastFocusNode; e; e = e.Parent)
            e.SetFocusWithin(!0);
        }
        OnDeactivate(e) {
          this.m_onDeactivateCallbacks.Dispatch(this, e),
            this.m_onActiveFocusStateChangedCallbacks.Dispatch(!1, this),
            (this.m_bWasActiveForLastFocusChange = !1);
          for (let e = this.m_lastFocusNode; e; e = e.Parent)
            e.SetFocusWithin(!1);
        }
        OnContextActiveStateChanged(e) {
          this.m_onActiveFocusStateChangedCallbacks.Dispatch(e, this);
        }
        IsActiveFocusNavTree() {
          return this.m_Controller.IsActiveFocusNavTree(this);
        }
        TakeFocus(e, t = !1) {
          let r = !1;
          t
            ? (r = this.Root.BVisibleChildTakeFocus(e))
            : this.m_lastFocusNode && (r = this.m_lastFocusNode.BTakeFocus(e)),
            r || (r = this.Root.BTakeFocus(e)),
            r || this.TransferFocus(e, this.Root);
        }
        Activate(e = !1) {
          this.m_Controller.OnGamepadNavigationTreeActivated(
            this.FindModalDescendant() ?? this,
            e,
          );
        }
        Deactivate() {
          this.m_Controller.BlurNavTree(this);
        }
        BIsEnabled() {
          return this.m_bIsEnabled;
        }
        get SubscribableIsMounted() {
          return this.m_valueIsMounted;
        }
        BIsActive() {
          return (
            this.m_valueIsMounted.Value &&
            (this.m_Controller.IsActiveNavTree(this) ||
              this.m_Controller.IsActiveFocusNavTree(this))
          );
        }
        BIsActiveFocus() {
          return (
            this.m_valueIsMounted.Value &&
            this.m_Controller.IsActiveFocusNavTree(this)
          );
        }
        BIsActiveWithinContext() {
          return (
            this.m_valueIsMounted.Value &&
            (this.m_context.m_LastActiveNavTree == this ||
              this.m_context.m_LastActiveFocusNavTree == this)
          );
        }
        GetTimeLastActivated() {
          return this.m_tsLastActivated;
        }
        MountNavTree(e) {
          this.m_window = e;
          const t = this.m_Root.Element;
          (t.__nav_tree = this),
            t.__nav_wrapper && t.__nav_wrapper.BindTree(this);
          const r = new G();
          return (
            this.m_valueIsMounted.Set(!0),
            r.Push(() => this.m_valueIsMounted.Set(!1)),
            this.m_ParentNavTree &&
              r.Push(this.m_ParentNavTree.AddChildNavTree(this)),
            "navigationapi" == this.m_Properties.historyMode &&
              r.Push(Ke(this)),
            this.m_onActiveFocusStateChangedCallbacks.Dispatch(
              this.BIsActive(),
              this,
            ),
            r.GetUnregisterFunc()
          );
        }
        SetIsEnabled(e) {
          this.m_bIsEnabled != e &&
            ((this.m_bIsEnabled = e),
            this.m_bIsEnabled || (this.m_tsLastActivated = void 0));
        }
        GetExcludeFromScrollRegionSearch() {
          return this.m_bExcludeFromScrollRegionSearch;
        }
        SetExcludeFromScrollRegionSearch(e) {
          this.m_bExcludeFromScrollRegionSearch = e;
        }
        GetParentEmbeddedNavTree() {
          return this.m_Properties.bIsEmbeddedInLegacyTree
            ? this.m_ParentNavTree
            : void 0;
        }
        RegisterOnUnhandledButtonCallback(e) {
          return (
            this.m_rgOnUnhandledButton.push(e),
            () => {
              A.x9(this.m_rgOnUnhandledButton, e);
            }
          );
        }
        RegisterGlobalButtonHandler(e, t, r) {
          const i = { button: e, fnCallback: t, description: r };
          return (
            this.m_rgGlobalButtonHandlers.push(i),
            this.UpdateRootActionDescriptionMap(),
            () => {
              A.x9(this.m_rgGlobalButtonHandlers, i),
                this.UpdateRootActionDescriptionMap();
            }
          );
        }
        UpdateRootActionDescriptionMap() {
          const e = {};
          for (const { button: t, description: r } of this
            .m_rgGlobalButtonHandlers)
            r && (e[t] = r);
          this.m_Root.SetProperties({
            ...this.m_Root.m_Properties,
            actionDescriptionMap: e,
          });
        }
        SetOnGlobalButtonDown(e) {
          this.m_onGlobalButtonDown = e;
        }
        OnRootButtonDown(e) {
          for (let t = this; t; t = t.Parent)
            if (
              (t.m_onGlobalButtonDown && t.m_onGlobalButtonDown(e),
              e.cancelBubble)
            )
              return !1;
          return this.HandleButtonDownEventAsLogicalEvent(e);
        }
        TryRootButtonListeners(e) {
          for (const { button: t, fnCallback: r } of this
            .m_rgGlobalButtonHandlers)
            if (t == e.detail.button && !1 !== r(e)) return !1;
          for (const t of this.m_rgOnUnhandledButton)
            if (!1 !== t(e)) return !1;
          return !0;
        }
        HandleButtonDownEventAsLogicalEvent(e) {
          let { bUnhandled: t, bHadLogicalEventMapping: r } = (function (e) {
            const t = [
              a.pR.DIR_UP,
              a.pR.DIR_DOWN,
              a.pR.DIR_LEFT,
              a.pR.DIR_RIGHT,
            ];
            let r = !0,
              i = !1,
              n = u[e.detail.button];
            return (
              n
                ? ((i = !0), (r = g(e.target, n, e.detail)))
                : -1 !== t.indexOf(e.detail.button) &&
                  ((i = !0), (r = g(e.target, "vgp_ondirection", e.detail))),
              { bUnhandled: r, bHadLogicalEventMapping: i }
            );
          })(e);
          return (
            Ze(
              `Logical gamepad Event fired: ${a.pR[e.detail.button]}, had logical event: ${r}, was handled: ${!t}`,
            ),
            t && (t = this.TryRootButtonListeners(e)),
            t && (t = this.m_Controller.FireUnhandledGamepadEventCallbacks(e)),
            e.stopPropagation(),
            t
          );
        }
        m_DeferredFocus = new rt(this);
        get DeferredFocus() {
          return this.m_DeferredFocus;
        }
        AddChildNavTree(e) {
          return (
            this.m_rgChildNavTrees.push(e),
            this.OnChildTreesChangedCallbacks.Dispatch("add", e),
            () => {
              A.x9(this.m_rgChildNavTrees, e),
                this.OnChildTreesChangedCallbacks.Dispatch("remove", e);
            }
          );
        }
        TransferFocus(e, t, r, i) {
          (r = r ?? a.pR.INVALID),
            (i = i ?? !1),
            this.m_Controller.BatchedUpdate(() =>
              this.TransferFocusInternal(e, t, r, i),
            );
        }
        TransferFocusInternal(e, t, r, n) {
          const s = le(r),
            a = this.m_lastFocusNode;
          if (
            a == t &&
            (this.m_bWasActiveForLastFocusChange || !this.BIsActive())
          )
            return;
          Je(
            `Transfer focus in ${this.id}, source: ${e && i[e]}, from/to:`,
            a?.m_element,
            t?.m_element,
          );
          const o = { blurredNode: a, focusedNode: t, focusSource: e },
            l = (function (e, t) {
              if (!t || !e) return null;
              let r = t,
                i = e;
              for (; r.GetDepth() > i.GetDepth() && r.Parent; ) r = r.Parent;
              for (; i.GetDepth() > r.GetDepth() && i.Parent; ) i = i.Parent;
              for (; r != i && r && i; ) (r = r.Parent), (i = i.Parent);
              return r;
            })(a, t);
          if (a) {
            a.SetHasFocus(!1);
            for (let e = a; e && e != l; e = e.Parent) e.SetFocusWithin(!1);
          }
          if (t) {
            t.SetHasFocus(!0);
            for (let e = t; e && e != l; e = e.Parent) e.SetFocusWithin(!0);
          }
          let c = this.m_context.OnFocusChangeStart(e, this, a, t);
          t && t.SetDOMFocusAndScroll(e, a, r, n),
            a &&
              (g(a.Element, "vgp_onblur", o),
              !a.m_FocusRing ||
                (t && a.m_FocusRing == t.m_FocusRing) ||
                a.m_FocusRing.OnBlur(e, a, t)),
            t &&
              (g(t.Element, "vgp_onfocus", o),
              t.m_FocusRing &&
                (a && t.m_FocusRing == a.m_FocusRing
                  ? t.m_FocusRing.OnFocusChange(e, a, t)
                  : t.m_FocusRing.OnFocus(e, t, a))),
            (this.m_lastFocusNode = t),
            (this.m_bWasActiveForLastFocusChange = this.BIsActive()),
            "x" == s
              ? this.m_lastFocusNodeXMovement.SetNode(t?.Element)
              : "y" == s
                ? this.m_lastFocusNodeYMovement.SetNode(t?.Element)
                : (this.m_lastFocusNodeXMovement.Reset(),
                  this.m_lastFocusNodeYMovement.Reset()),
            this.m_context.OnFocusChangeComplete(c);
        }
      }
      class tt {
        m_element;
        m_rect;
        SetNode(e) {
          (this.m_element = e),
            (this.m_rect = e ? e.getBoundingClientRect() : void 0);
        }
        Reset() {
          this.SetNode(void 0);
        }
        GetRect() {
          return this.m_element?.isConnected
            ? this.m_element.getBoundingClientRect()
            : this.m_rect;
        }
      }
      class rt {
        m_tree;
        m_target;
        m_interval;
        m_schExecuteQueuedFocus = new W();
        m_bSuppressed = !1;
        constructor(e) {
          this.m_tree = e;
        }
        RequestFocus(e, t) {
          e
            ? ((this.m_target = { ...t, node: e }),
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
              Je(
                `DeferredFocus in ${this.m_tree.id} - focusing ${t ? "descendant of" : "node"} ${e.NavKey}`,
              ),
              t
                ? e.BChildTakeFocus(i.AUTOFOCUS) ||
                  this.m_tree.TransferFocus(i.AUTOFOCUS, e)
                : e.BTakeFocus(i.AUTOFOCUS) ||
                  this.m_tree.TakeFocus(i.AUTOFOCUS);
          }
        }
      }
      const it = new U("FocusNavigation").Debug;
      class nt {
        m_rootWindow;
        m_activeWindow;
        m_activeBrowserView;
        m_valueIsActive = z(!1);
        m_controller;
        m_rgGamepadNavigationTrees = [];
        m_LastActiveNavTree;
        m_LastActiveFocusNavTree;
        m_bMounted = !0;
        m_schDeferredActivate = new W();
        m_FocusChangedCallbacks = new N.l();
        m_NavTreeActivatedOrReactivatedCallbacks = new N.l();
        m_bIsGamepadInputSuppressed = !1;
        m_bVR = !1;
        m_fnGetNavTreeToActivateOverride;
        constructor(e, t, r, i) {
          (this.m_controller = e),
            (this.m_rootWindow = t),
            (this.m_activeWindow = t),
            (this.m_bIsGamepadInputSuppressed = r),
            (this.m_bVR = i);
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
            if (t.Window?.document.hasFocus()) return t;
          }
        }
        FindNavTreeInWindow(e, t = !0) {
          for (
            let r = this.m_rgGamepadNavigationTrees.length - 1;
            r >= 0;
            r--
          ) {
            const i = this.m_rgGamepadNavigationTrees[r];
            if ((!t || i.BIsEnabled()) && i.Window == e) return i;
          }
        }
        OnMount(e) {
          e == this.m_rootWindow && (this.m_bMounted = !0);
        }
        Destroy(e) {
          e == this.m_rootWindow
            ? (it(`${this.LogName(e)} Destroying context for window`),
              (this.m_bMounted = !1),
              this.m_schDeferredActivate.Cancel(),
              this.SetActive(!1, e),
              this.m_controller.DestroyContext(this))
            : it(`${this.LogName(e)} Child window destroyed`);
        }
        SetActive(e, t, r = void 0) {
          this.m_controller.BatchedUpdate(() => {
            if (e && !this.m_controller.BCanActivateContext(this))
              return void it(
                `${this.LogName(t)} Skipping context activation due to CFocusNavWindowContext`,
              );
            const i = this.m_valueIsActive.Value != e;
            e
              ? ((this.m_activeWindow = t),
                (this.m_activeBrowserView = r),
                this.m_controller.OnContextActivated(this))
              : ((this.m_activeBrowserView = void 0),
                this.m_controller.OnContextDeactivated(this, !1)),
              this.m_valueIsActive.Set(e),
              i &&
                this.m_LastActiveFocusNavTree?.OnContextActiveStateChanged(e);
            const n = this.m_LastActiveFocusNavTree;
            if (e && void 0 === r && n?.Window == (t ?? this.m_rootWindow)) {
              const e = n?.GetLastFocusedNode()?.Element,
                t = e?.ownerDocument.activeElement;
              !e ||
                !n?.BIsActiveFocus() ||
                (t && t != e.ownerDocument.body) ||
                e.focus({ preventScroll: !0 });
            }
          });
        }
        OnActivate(e) {
          (this.BIsActive() &&
            this.m_activeWindow == e &&
            void 0 === this.m_activeBrowserView) ||
            (it(
              `${this.LogName(e)} Activating context, there are ${this.m_rgGamepadNavigationTrees.length} trees in this context`,
            ),
            this.SetActive(!0, e));
        }
        OnActivateBrowserView(e, t) {
          (this.BIsActive() &&
            this.m_activeWindow == e &&
            this.m_activeBrowserView == t) ||
            (it(`${this.LogName(e)} Browser View "${t}" activated in context`),
            this.SetActive(!0, e, t));
        }
        OnDeactivate(e) {
          this.m_activeWindow == e
            ? (it(`${this.LogName(e)} Deactivate context for window`),
              this.SetActive(!1, e))
            : it(
                `${this.LogName(e)} Blurred, but not deactivating because (${this.m_activeWindow?.name}) has focus.`,
              );
        }
        OnDeactivateBrowserView(e, t) {
          it(`${this.LogName(e)} Browser View "${t}" deactivated in context`),
            this.m_activeBrowserView == t && this.SetActive(!1, e, t);
        }
        SetGamepadInputSuppressed(e) {
          this.m_bIsGamepadInputSuppressed = e;
        }
        BIsGamepadInputSuppressed() {
          return this.m_bIsGamepadInputSuppressed;
        }
        BIsVR() {
          return this.m_bVR;
        }
        BIsActive() {
          return this.m_valueIsActive.Value;
        }
        get IsActive() {
          return this.m_valueIsActive;
        }
        AddNavTree(e) {
          this.m_rgGamepadNavigationTrees.push(e);
        }
        LogName(e = void 0) {
          return e && this.m_rootWindow != e
            ? `(${this.m_rootWindow.name}) > (${e.name})`
            : `(${this.m_rootWindow.name})`;
        }
        SetNavTreeToActivateOverride(e) {
          this.m_fnGetNavTreeToActivateOverride = e;
        }
        FindNavTreeToActivate() {
          let e;
          const t = this.m_fnGetNavTreeToActivateOverride?.();
          if (t?.BIsEnabled()) e = t;
          else
            for (
              let t = this.m_rgGamepadNavigationTrees.length - 1;
              t >= 0;
              t--
            ) {
              const r = this.m_rgGamepadNavigationTrees[t];
              if (r.BIsEnabled()) {
                e = r;
                break;
              }
            }
          return e?.FindModalDescendant() ?? e;
        }
        SetActiveNavTree(e, t = !1) {
          if (e && this.m_LastActiveNavTree == e)
            return void this.m_NavTreeActivatedOrReactivatedCallbacks.Dispatch(
              e,
            );
          const r = this.m_LastActiveNavTree;
          r && A.x9(this.m_rgGamepadNavigationTrees, r),
            e || (e = this.FindNavTreeToActivate());
          const i = this.m_LastActiveFocusNavTree == e;
          e && A.x9(this.m_rgGamepadNavigationTrees, e),
            (this.m_LastActiveNavTree = e),
            (e && e.BUseVirtualFocus()) || (this.m_LastActiveFocusNavTree = e),
            it(
              `${this.LogName(e?.Window)} Move from nav tree ${r?.id} to nav tree ${e?.id} ${t ? "taking focus" : "no focus"}`,
            ),
            r && this.m_rgGamepadNavigationTrees.push(r),
            e &&
              (this.m_rgGamepadNavigationTrees.push(e),
              i ||
                !t ||
                e.DeferredFocus.BHasQueuedFocusNode() ||
                e.DeferredFocus.RequestFocus(e.Root),
              this.m_NavTreeActivatedOrReactivatedCallbacks.Dispatch(e)),
            r && r != this.m_LastActiveFocusNavTree && r.OnDeactivate(e),
            e && !i && e.OnActivate(r);
        }
        BlurNavTree(e) {
          this.m_LastActiveNavTree == e && this.SetActiveNavTree(void 0, !0),
            A.x9(this.m_rgGamepadNavigationTrees, e),
            this.m_rgGamepadNavigationTrees.unshift(e);
        }
        async UnregisterGamepadNavigationTree(e) {
          A.x9(this.m_rgGamepadNavigationTrees, e),
            it(
              `(${this.m_rootWindow.name}) Unregister tree ${e?.id} ${this.m_LastActiveFocusNavTree == e ? "(was active)" : "(inactive)"}`,
            ),
            e.SetIsEnabled(!1),
            this.m_LastActiveNavTree == e &&
              this.m_bMounted &&
              (await this.m_schDeferredActivate.AsyncSchedule(1, () => {
                (this.m_LastActiveNavTree && this.m_LastActiveNavTree != e) ||
                  this.SetActiveNavTree(void 0, !0);
              }));
        }
        get FocusChangedCallbacks() {
          return this.m_FocusChangedCallbacks;
        }
        get NavTreeActivatedOrReactivatedCallbacks() {
          return this.m_NavTreeActivatedOrReactivatedCallbacks;
        }
        m_iFocusChangeStack = 0;
        m_ActiveFocusChange;
        OnFocusChangeStart(e, t, r, i) {
          return (
            0 == this.m_iFocusChangeStack
              ? (this.m_ActiveFocusChange = {
                  source: e,
                  from: r || void 0,
                  to: i || void 0,
                })
              : this.m_ActiveFocusChange &&
                (!this.m_ActiveFocusChange.from &&
                  r &&
                  (this.m_ActiveFocusChange.from = r),
                i && (this.m_ActiveFocusChange.to = i)),
            this.m_iFocusChangeStack++
          );
        }
        OnFocusChangeComplete(e) {
          if (
            (this.m_iFocusChangeStack--,
            k(e == this.m_iFocusChangeStack, "out of order focus pop"),
            0 == this.m_iFocusChangeStack)
          ) {
            const {
              source: e,
              from: t,
              to: r,
            } = this.m_ActiveFocusChange ?? {};
            this.m_FocusChangedCallbacks.Dispatch(e, t, r);
          }
        }
        get NavigationSourceGlyphInfo() {
          return this.m_controller.NavigationSourceGlyphInfo;
        }
      }
      var st = r(663),
        at = r.n(st);
      const ot = st.BinaryReader.prototype,
        lt = st.BinaryWriter.prototype;
      function ct(e) {
        const t = {},
          { fields: r } = e;
        for (const e in r) {
          const i = r[e];
          t[i.n] = i;
        }
        return t;
      }
      function ut(e, t) {
        const { proto: r, fields: i } = e,
          n = new r();
        if (null == t) return n;
        for (const e in i) {
          const { n: r, c: s, r: a, d: o, q: l } = i[e];
          if (!Object.prototype.hasOwnProperty.call(t, e)) continue;
          const c = t[e];
          s
            ? a
              ? st.Message.setRepeatedWrapperField(
                  n,
                  r,
                  Array.isArray(c) ? c.map((e) => s.fromObject(e)) : [],
                )
              : st.Message.setWrapperField(n, r, s.fromObject(c))
            : st.Message.setField(n, r, c);
        }
        return n;
      }
      function dt(e, t, r) {
        const { proto: i, fields: n } = e,
          s = {};
        for (const e in n) {
          const { n: i, c: a, r: o, d: l, q: c } = n[e];
          if (a)
            if (o)
              s[e] = st.Message.toObjectList(
                st.Message.getRepeatedWrapperField(r, a, i),
                a.toObject,
                t,
              );
            else {
              const n = st.Message.getWrapperField(r, a, i, c ? 1 : 0);
              n && (s[e] = a.toObject(t, n));
            }
          else {
            const t = st.Message.getFieldWithDefault(
              r,
              i,
              void 0 !== l ? l : null,
            );
            (null !== t || c) && (s[e] = t);
          }
        }
        return t && (s.$jspbMessageInstance = r), s;
      }
      function mt(e, t, r) {
        for (; r.nextField() && !r.isEndGroup(); ) {
          const i = e[r.getFieldNumber()];
          if (i) {
            const { n: e, c: n, r: s, d: a, q: o, br: l } = i;
            if (n) {
              const i = new n();
              r.readMessage(i, n.deserializeBinaryFromReader),
                s
                  ? st.Message.addToRepeatedWrapperField(t, e, i, n)
                  : st.Message.setWrapperField(t, e, i);
            } else if (l) {
              const i = l.call(r);
              s
                ? st.Message.addToRepeatedField(t, e, i)
                : st.Message.setField(t, e, i);
            } else
              console.assert(
                !!l,
                `Reader func not set for field number ${e} in class ${n}`,
              ),
                r.skipField();
          } else r.skipField();
        }
        return t;
      }
      function gt(e, t, r) {
        const { fields: i } = e;
        for (const e in i) {
          const { n, c: s, r: a, d: o, q: l, bw: c } = i[e];
          if (s)
            if (a) {
              const e = st.Message.getRepeatedWrapperField(t, s, n);
              ((e && e.length) || l) &&
                r.writeRepeatedMessage(n, e, s.serializeBinaryToWriter);
            } else {
              const e = st.Message.getWrapperField(t, s, n, l ? 1 : 0);
              e && r.writeMessage(n, e, s.serializeBinaryToWriter);
            }
          else if (c) {
            const e = st.Message.getField(t, n);
            void 0 !== e && c.call(r, n, e);
          } else
            console.assert(
              !!c,
              `Writer func not set for field number ${n} in class ${s}`,
            );
        }
      }
      function _t(e) {
        const t = e.proto;
        for (const r in e.fields) {
          const i = e.fields[r],
            { n, c: s, r: a, d: o, q: l } = i;
          Object.prototype.hasOwnProperty.call(i, "d")
            ? (t.prototype[r] = ht(st.Message.getFieldWithDefault, n, o))
            : (t.prototype[r] = s
                ? a
                  ? ht(st.Message.getRepeatedWrapperField, s, n)
                  : bt(s, n)
                : ht(st.Message.getField, n)),
            (t.prototype[`set_${r}`] = pt(
              s
                ? a
                  ? st.Message.setRepeatedWrapperField
                  : st.Message.setWrapperField
                : st.Message.setField,
              n,
            )),
            a && (t.prototype[`add_${r}`] = ft(n, s));
        }
      }
      function ht(e, ...t) {
        return function () {
          return e(this, ...t);
        };
      }
      function bt(e, t) {
        return function (r = !0) {
          return st.Message.getWrapperField(this, e, t, r ? 1 : 0);
        };
      }
      function pt(e, t) {
        return function (r) {
          return e(this, t, r);
        };
      }
      function ft(e, t) {
        return t
          ? function (r, i) {
              return st.Message.addToRepeatedWrapperField(this, e, r, t, i);
            }
          : function (t, r) {
              st.Message.addToRepeatedField(this, e, t, r);
            };
      }
      async function Bt(e, t = "SHA-256") {
        let r;
        var i;
        "string" == typeof e
          ? ((i = e), (r = new TextEncoder().encode(i).buffer))
          : (r = e);
        return (function (e) {
          const t = new Uint8Array(e);
          let r = "";
          for (let e = 0; e < t.length; e++)
            r += ("00" + t[e].toString(16)).slice(-2);
          return r;
        })(await window.crypto.subtle.digest(t, r));
      }
      class wt extends st.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            wt.prototype.original_hostname || _t(wt.M()),
            st.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            wt.sm_m ||
              (wt.sm_m = {
                proto: wt,
                fields: {
                  original_hostname: {
                    n: 1,
                    br: ot.readString,
                    bw: lt.writeString,
                  },
                  actual_hostname: {
                    n: 2,
                    br: ot.readString,
                    bw: lt.writeString,
                  },
                  path: { n: 3, br: ot.readString, bw: lt.writeString },
                  base_name: { n: 4, br: ot.readString, bw: lt.writeString },
                  success: { n: 5, br: ot.readBool, bw: lt.writeBool },
                  status_code: { n: 6, br: ot.readUint32, bw: lt.writeUint32 },
                  address_of_request_url: {
                    n: 7,
                    br: ot.readString,
                    bw: lt.writeString,
                  },
                  response_time_ms: {
                    n: 8,
                    br: ot.readUint32,
                    bw: lt.writeUint32,
                  },
                  bytes_received: {
                    n: 9,
                    br: ot.readUint64String,
                    bw: lt.writeUint64String,
                  },
                  num_retries: { n: 10, br: ot.readUint32, bw: lt.writeUint32 },
                },
              }),
            wt.sm_m
          );
        }
        static MBF() {
          return wt.sm_mbf || (wt.sm_mbf = ct(wt.M())), wt.sm_mbf;
        }
        toObject(e = !1) {
          return wt.toObject(e, this);
        }
        static toObject(e, t) {
          return dt(wt.M(), e, t);
        }
        static fromObject(e) {
          return ut(wt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (at().BinaryReader)(e),
            r = new wt();
          return wt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return mt(wt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (at().BinaryWriter)();
          return wt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          gt(wt.M(), e, t);
        }
        serializeBase64String() {
          var e = new (at().BinaryWriter)();
          return wt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_ClientBootstrap_RequestInfo";
        }
      }
      class yt extends st.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            yt.prototype.launcher_type || _t(yt.M()),
            st.Message.initialize(this, e, 0, -1, [7, 8], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            yt.sm_m ||
              (yt.sm_m = {
                proto: yt,
                fields: {
                  launcher_type: {
                    n: 1,
                    br: ot.readUint32,
                    bw: lt.writeUint32,
                  },
                  steam_realm: { n: 2, br: ot.readUint32, bw: lt.writeUint32 },
                  beta_name: { n: 3, br: ot.readString, bw: lt.writeString },
                  download_completed: {
                    n: 4,
                    br: ot.readBool,
                    bw: lt.writeBool,
                  },
                  total_time_ms: {
                    n: 6,
                    br: ot.readUint32,
                    bw: lt.writeUint32,
                  },
                  manifest_requests: { n: 7, c: wt, r: !0, q: !0 },
                  package_requests: { n: 8, c: wt, r: !0, q: !0 },
                },
              }),
            yt.sm_m
          );
        }
        static MBF() {
          return yt.sm_mbf || (yt.sm_mbf = ct(yt.M())), yt.sm_mbf;
        }
        toObject(e = !1) {
          return yt.toObject(e, this);
        }
        static toObject(e, t) {
          return dt(yt.M(), e, t);
        }
        static fromObject(e) {
          return ut(yt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (at().BinaryReader)(e),
            r = new yt();
          return yt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return mt(yt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (at().BinaryWriter)();
          return yt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          gt(yt.M(), e, t);
        }
        serializeBase64String() {
          var e = new (at().BinaryWriter)();
          return yt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_ClientBootstrap_Summary";
        }
      }
      class St extends st.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            St.prototype.class_100 || _t(St.M()),
            st.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            St.sm_m ||
              (St.sm_m = {
                proto: St,
                fields: {
                  class_100: { n: 1, br: ot.readUint32, bw: lt.writeUint32 },
                  class_200: { n: 2, br: ot.readUint32, bw: lt.writeUint32 },
                  class_300: { n: 3, br: ot.readUint32, bw: lt.writeUint32 },
                  class_400: { n: 4, br: ot.readUint32, bw: lt.writeUint32 },
                  class_500: { n: 5, br: ot.readUint32, bw: lt.writeUint32 },
                  no_response: { n: 6, br: ot.readUint32, bw: lt.writeUint32 },
                  class_unknown: {
                    n: 7,
                    br: ot.readUint32,
                    bw: lt.writeUint32,
                  },
                },
              }),
            St.sm_m
          );
        }
        static MBF() {
          return St.sm_mbf || (St.sm_mbf = ct(St.M())), St.sm_mbf;
        }
        toObject(e = !1) {
          return St.toObject(e, this);
        }
        static toObject(e, t) {
          return dt(St.M(), e, t);
        }
        static fromObject(e) {
          return ut(St.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (at().BinaryReader)(e),
            r = new St();
          return St.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return mt(St.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (at().BinaryWriter)();
          return St.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          gt(St.M(), e, t);
        }
        serializeBase64String() {
          var e = new (at().BinaryWriter)();
          return St.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_ContentDownloadResponse_Counts";
        }
      }
      class vt extends st.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            vt.prototype.hostname || _t(vt.M()),
            st.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            vt.sm_m ||
              (vt.sm_m = {
                proto: vt,
                fields: {
                  hostname: { n: 1, br: ot.readString, bw: lt.writeString },
                  source_type: { n: 2, br: ot.readUint32, bw: lt.writeUint32 },
                  counts: { n: 3, c: St },
                },
              }),
            vt.sm_m
          );
        }
        static MBF() {
          return vt.sm_mbf || (vt.sm_mbf = ct(vt.M())), vt.sm_mbf;
        }
        toObject(e = !1) {
          return vt.toObject(e, this);
        }
        static toObject(e, t) {
          return dt(vt.M(), e, t);
        }
        static fromObject(e) {
          return ut(vt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (at().BinaryReader)(e),
            r = new vt();
          return vt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return mt(vt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (at().BinaryWriter)();
          return vt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          gt(vt.M(), e, t);
        }
        serializeBase64String() {
          var e = new (at().BinaryWriter)();
          return vt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_ContentDownloadResponse_HostCounts";
        }
      }
      class Mt extends st.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Mt.prototype.hosts || _t(Mt.M()),
            st.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Mt.sm_m ||
              (Mt.sm_m = {
                proto: Mt,
                fields: { hosts: { n: 1, c: vt, r: !0, q: !0 } },
              }),
            Mt.sm_m
          );
        }
        static MBF() {
          return Mt.sm_mbf || (Mt.sm_mbf = ct(Mt.M())), Mt.sm_mbf;
        }
        toObject(e = !1) {
          return Mt.toObject(e, this);
        }
        static toObject(e, t) {
          return dt(Mt.M(), e, t);
        }
        static fromObject(e) {
          return ut(Mt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (at().BinaryReader)(e),
            r = new Mt();
          return Mt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return mt(Mt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (at().BinaryWriter)();
          return Mt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          gt(Mt.M(), e, t);
        }
        serializeBase64String() {
          var e = new (at().BinaryWriter)();
          return Mt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_ContentDownloadResponse_Hosts";
        }
      }
      st.Message;
      st.Message;
      class Ct extends st.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ct.prototype.dst_gcid_queue || _t(Ct.M()),
            st.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ct.sm_m ||
              (Ct.sm_m = {
                proto: Ct,
                fields: {
                  dst_gcid_queue: {
                    n: 1,
                    br: ot.readUint64String,
                    bw: lt.writeUint64String,
                  },
                  dst_gc_dir_index: {
                    n: 2,
                    br: ot.readUint32,
                    bw: lt.writeUint32,
                  },
                },
              }),
            Ct.sm_m
          );
        }
        static MBF() {
          return Ct.sm_mbf || (Ct.sm_mbf = ct(Ct.M())), Ct.sm_mbf;
        }
        toObject(e = !1) {
          return Ct.toObject(e, this);
        }
        static toObject(e, t) {
          return dt(Ct.M(), e, t);
        }
        static fromObject(e) {
          return ut(Ct.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (at().BinaryReader)(e),
            r = new Ct();
          return Ct.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return mt(Ct.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (at().BinaryWriter)();
          return Ct.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          gt(Ct.M(), e, t);
        }
        serializeBase64String() {
          var e = new (at().BinaryWriter)();
          return Ct.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgGCRoutingProtoBufHeader";
        }
      }
      class Rt extends st.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Rt.prototype.steamid || _t(Rt.M()),
            st.Message.initialize(this, e, 0, -1, [27, 41], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Rt.sm_m ||
              (Rt.sm_m = {
                proto: Rt,
                fields: {
                  steamid: {
                    n: 1,
                    br: ot.readFixed64String,
                    bw: lt.writeFixed64String,
                  },
                  client_sessionid: {
                    n: 2,
                    br: ot.readInt32,
                    bw: lt.writeInt32,
                  },
                  routing_appid: {
                    n: 3,
                    br: ot.readUint32,
                    bw: lt.writeUint32,
                  },
                  jobid_source: {
                    n: 10,
                    d: "18446744073709551615",
                    br: ot.readFixed64String,
                    bw: lt.writeFixed64String,
                  },
                  jobid_target: {
                    n: 11,
                    d: "18446744073709551615",
                    br: ot.readFixed64String,
                    bw: lt.writeFixed64String,
                  },
                  target_job_name: {
                    n: 12,
                    br: ot.readString,
                    bw: lt.writeString,
                  },
                  seq_num: { n: 24, br: ot.readInt32, bw: lt.writeInt32 },
                  eresult: { n: 13, d: 2, br: ot.readInt32, bw: lt.writeInt32 },
                  error_message: {
                    n: 14,
                    br: ot.readString,
                    bw: lt.writeString,
                  },
                  ip: { n: 15, br: ot.readUint32, bw: lt.writeUint32 },
                  ip_v6: { n: 29, br: ot.readBytes, bw: lt.writeBytes },
                  auth_account_flags: {
                    n: 16,
                    br: ot.readUint32,
                    bw: lt.writeUint32,
                  },
                  token_source: {
                    n: 22,
                    br: ot.readUint32,
                    bw: lt.writeUint32,
                  },
                  admin_spoofing_user: {
                    n: 23,
                    br: ot.readBool,
                    bw: lt.writeBool,
                  },
                  transport_error: {
                    n: 17,
                    d: 1,
                    br: ot.readInt32,
                    bw: lt.writeInt32,
                  },
                  messageid: {
                    n: 18,
                    d: "18446744073709551615",
                    br: ot.readUint64String,
                    bw: lt.writeUint64String,
                  },
                  publisher_group_id: {
                    n: 19,
                    br: ot.readUint32,
                    bw: lt.writeUint32,
                  },
                  sysid: { n: 20, br: ot.readUint32, bw: lt.writeUint32 },
                  webapi_key_id: {
                    n: 25,
                    br: ot.readUint32,
                    bw: lt.writeUint32,
                  },
                  is_from_external_source: {
                    n: 26,
                    br: ot.readBool,
                    bw: lt.writeBool,
                  },
                  forward_to_sysid: {
                    n: 27,
                    r: !0,
                    q: !0,
                    br: ot.readUint32,
                    pbr: ot.readPackedUint32,
                    bw: lt.writeRepeatedUint32,
                  },
                  cm_sysid: { n: 28, br: ot.readUint32, bw: lt.writeUint32 },
                  launcher_type: {
                    n: 31,
                    d: 0,
                    br: ot.readUint32,
                    bw: lt.writeUint32,
                  },
                  realm: { n: 32, d: 0, br: ot.readUint32, bw: lt.writeUint32 },
                  timeout_ms: {
                    n: 33,
                    d: -1,
                    br: ot.readInt32,
                    bw: lt.writeInt32,
                  },
                  debug_source: {
                    n: 34,
                    br: ot.readString,
                    bw: lt.writeString,
                  },
                  debug_source_string_index: {
                    n: 35,
                    br: ot.readUint32,
                    bw: lt.writeUint32,
                  },
                  token_id: {
                    n: 36,
                    br: ot.readUint64String,
                    bw: lt.writeUint64String,
                  },
                  routing_gc: { n: 37, c: Ct },
                  session_disposition: {
                    n: 38,
                    d: 0,
                    br: ot.readEnum,
                    bw: lt.writeEnum,
                  },
                  wg_token: { n: 39, br: ot.readString, bw: lt.writeString },
                  webui_auth_key: {
                    n: 40,
                    br: ot.readString,
                    bw: lt.writeString,
                  },
                  exclude_client_sessionids: {
                    n: 41,
                    r: !0,
                    q: !0,
                    br: ot.readInt32,
                    pbr: ot.readPackedInt32,
                    bw: lt.writeRepeatedInt32,
                  },
                  admin_request_spoofing_steamid: {
                    n: 43,
                    br: ot.readFixed64String,
                    bw: lt.writeFixed64String,
                  },
                  is_valveds: { n: 44, br: ot.readBool, bw: lt.writeBool },
                  trace_tag: {
                    n: 45,
                    br: ot.readFixed64String,
                    bw: lt.writeFixed64String,
                  },
                  wg_msg_trace_flags: {
                    n: 46,
                    br: ot.readUint32,
                    bw: lt.writeUint32,
                  },
                  wg_msg_trace_instance: {
                    n: 47,
                    br: ot.readUint32,
                    bw: lt.writeUint32,
                  },
                  wg_msg_trace_gid: {
                    n: 48,
                    br: ot.readUint32,
                    bw: lt.writeUint32,
                  },
                  wg_msg_trace_token: {
                    n: 49,
                    br: ot.readString,
                    bw: lt.writeString,
                  },
                  wg_msg_trace_steamid: {
                    n: 50,
                    br: ot.readFixed64String,
                    bw: lt.writeFixed64String,
                  },
                  wg_msg_trace_status: {
                    n: 51,
                    br: ot.readString,
                    bw: lt.writeString,
                  },
                  trace_flags: { n: 52, br: ot.readUint32, bw: lt.writeUint32 },
                  browserapi_site: {
                    n: 53,
                    br: ot.readString,
                    bw: lt.writeString,
                  },
                },
              }),
            Rt.sm_m
          );
        }
        static MBF() {
          return Rt.sm_mbf || (Rt.sm_mbf = ct(Rt.M())), Rt.sm_mbf;
        }
        toObject(e = !1) {
          return Rt.toObject(e, this);
        }
        static toObject(e, t) {
          return dt(Rt.M(), e, t);
        }
        static fromObject(e) {
          return ut(Rt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (at().BinaryReader)(e),
            r = new Rt();
          return Rt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return mt(Rt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (at().BinaryWriter)();
          return Rt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          gt(Rt.M(), e, t);
        }
        serializeBase64String() {
          var e = new (at().BinaryWriter)();
          return Rt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgProtoBufHeader";
        }
      }
      st.Message;
      st.Message;
      st.Message;
      st.Message;
      st.Message;
      st.Message;
      st.Message;
      st.Message;
      st.Message;
      st.Message;
      st.Message;
      st.Message;
      st.Message;
      st.Message;
      st.Message;
      st.Message;
      st.Message;
      st.Message;
      st.Message;
      class Tt extends st.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Tt.prototype.manufacturer || _t(Tt.M()),
            st.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Tt.sm_m ||
              (Tt.sm_m = {
                proto: Tt,
                fields: {
                  manufacturer: { n: 1, br: ot.readString, bw: lt.writeString },
                  model: { n: 2, br: ot.readString, bw: lt.writeString },
                  dx_video_card: {
                    n: 3,
                    br: ot.readString,
                    bw: lt.writeString,
                  },
                  dx_vendorid: { n: 4, br: ot.readInt32, bw: lt.writeInt32 },
                  dx_deviceid: { n: 5, br: ot.readInt32, bw: lt.writeInt32 },
                  num_gpu: { n: 6, br: ot.readUint32, bw: lt.writeUint32 },
                  system_ram: {
                    n: 7,
                    br: ot.readUint64String,
                    bw: lt.writeUint64String,
                  },
                  os: { n: 8, br: ot.readString, bw: lt.writeString },
                  cpu_vendor: { n: 9, br: ot.readString, bw: lt.writeString },
                  cpu_name: { n: 10, br: ot.readString, bw: lt.writeString },
                  gaming_device_type: {
                    n: 11,
                    br: ot.readUint32,
                    bw: lt.writeUint32,
                  },
                  dx_driver_version: {
                    n: 12,
                    br: ot.readString,
                    bw: lt.writeString,
                  },
                  adapter_description: {
                    n: 14,
                    br: ot.readString,
                    bw: lt.writeString,
                  },
                  driver_version: {
                    n: 15,
                    br: ot.readString,
                    bw: lt.writeString,
                  },
                  driver_date: { n: 16, br: ot.readString, bw: lt.writeString },
                  vram_size: { n: 17, br: ot.readUint32, bw: lt.writeUint32 },
                  screen_width: {
                    n: 18,
                    br: ot.readUint32,
                    bw: lt.writeUint32,
                  },
                  screen_height: {
                    n: 19,
                    br: ot.readUint32,
                    bw: lt.writeUint32,
                  },
                  precise_frame_rate: {
                    n: 20,
                    br: ot.readBool,
                    bw: lt.writeBool,
                  },
                },
              }),
            Tt.sm_m
          );
        }
        static MBF() {
          return Tt.sm_mbf || (Tt.sm_mbf = ct(Tt.M())), Tt.sm_mbf;
        }
        toObject(e = !1) {
          return Tt.toObject(e, this);
        }
        static toObject(e, t) {
          return dt(Tt.M(), e, t);
        }
        static fromObject(e) {
          return ut(Tt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (at().BinaryReader)(e),
            r = new Tt();
          return Tt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return mt(Tt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (at().BinaryWriter)();
          return Tt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          gt(Tt.M(), e, t);
        }
        serializeBase64String() {
          var e = new (at().BinaryWriter)();
          return Tt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "UserSystemInformation";
        }
      }
      class It extends st.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            It.prototype.setting || _t(It.M()),
            st.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            It.sm_m ||
              (It.sm_m = {
                proto: It,
                fields: {
                  setting: { n: 1, br: ot.readEnum, bw: lt.writeEnum },
                  game_resolution_width: {
                    n: 2,
                    br: ot.readUint32,
                    bw: lt.writeUint32,
                  },
                  game_resolution_height: {
                    n: 3,
                    br: ot.readUint32,
                    bw: lt.writeUint32,
                  },
                },
              }),
            It.sm_m
          );
        }
        static MBF() {
          return It.sm_mbf || (It.sm_mbf = ct(It.M())), It.sm_mbf;
        }
        toObject(e = !1) {
          return It.toObject(e, this);
        }
        static toObject(e, t) {
          return dt(It.M(), e, t);
        }
        static fromObject(e) {
          return ut(It.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (at().BinaryReader)(e),
            r = new It();
          return It.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return mt(It.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (at().BinaryWriter)();
          return It.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          gt(It.M(), e, t);
        }
        serializeBase64String() {
          var e = new (at().BinaryWriter)();
          return It.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "GamePerformanceSettings";
        }
      }
      class Ft extends st.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ft.prototype.raw_version || _t(Ft.M()),
            st.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ft.sm_m ||
              (Ft.sm_m = {
                proto: Ft,
                fields: {
                  raw_version: { n: 1, br: ot.readString, bw: lt.writeString },
                  requested_interface_type: {
                    n: 2,
                    br: ot.readString,
                    bw: lt.writeString,
                  },
                },
              }),
            Ft.sm_m
          );
        }
        static MBF() {
          return Ft.sm_mbf || (Ft.sm_mbf = ct(Ft.M())), Ft.sm_mbf;
        }
        toObject(e = !1) {
          return Ft.toObject(e, this);
        }
        static toObject(e, t) {
          return dt(Ft.M(), e, t);
        }
        static fromObject(e) {
          return ut(Ft.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (at().BinaryReader)(e),
            r = new Ft();
          return Ft.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return mt(Ft.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (at().BinaryWriter)();
          return Ft.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          gt(Ft.M(), e, t);
        }
        serializeBase64String() {
          var e = new (at().BinaryWriter)();
          return Ft.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_AppInterfaceCreation";
        }
      }
      class At extends st.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            At.prototype.interface_name || _t(At.M()),
            st.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            At.sm_m ||
              (At.sm_m = {
                proto: At,
                fields: {
                  interface_name: {
                    n: 1,
                    br: ot.readString,
                    bw: lt.writeString,
                  },
                  method_name: { n: 2, br: ot.readString, bw: lt.writeString },
                  call_count: { n: 3, br: ot.readUint32, bw: lt.writeUint32 },
                },
              }),
            At.sm_m
          );
        }
        static MBF() {
          return At.sm_mbf || (At.sm_mbf = ct(At.M())), At.sm_mbf;
        }
        toObject(e = !1) {
          return At.toObject(e, this);
        }
        static toObject(e, t) {
          return dt(At.M(), e, t);
        }
        static fromObject(e) {
          return ut(At.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (at().BinaryReader)(e),
            r = new At();
          return At.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return mt(At.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (at().BinaryWriter)();
          return At.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          gt(At.M(), e, t);
        }
        serializeBase64String() {
          var e = new (at().BinaryWriter)();
          return At.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_AppInterfaceMethodCounts";
        }
      }
      class Nt extends st.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Nt.prototype.game_id || _t(Nt.M()),
            st.Message.initialize(this, e, 0, -1, [2, 3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Nt.sm_m ||
              (Nt.sm_m = {
                proto: Nt,
                fields: {
                  game_id: {
                    n: 1,
                    br: ot.readUint64String,
                    bw: lt.writeUint64String,
                  },
                  interfaces_created: { n: 2, c: Ft, r: !0, q: !0 },
                  methods_called: { n: 3, c: At, r: !0, q: !0 },
                  session_length_seconds: {
                    n: 4,
                    br: ot.readUint32,
                    bw: lt.writeUint32,
                  },
                },
              }),
            Nt.sm_m
          );
        }
        static MBF() {
          return Nt.sm_mbf || (Nt.sm_mbf = ct(Nt.M())), Nt.sm_mbf;
        }
        toObject(e = !1) {
          return Nt.toObject(e, this);
        }
        static toObject(e, t) {
          return dt(Nt.M(), e, t);
        }
        static fromObject(e) {
          return ut(Nt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (at().BinaryReader)(e),
            r = new Nt();
          return Nt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return mt(Nt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (at().BinaryWriter)();
          return Nt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          gt(Nt.M(), e, t);
        }
        serializeBase64String() {
          var e = new (at().BinaryWriter)();
          return Nt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_AppInterfaceStats_Notification";
        }
      }
      class Et extends st.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Et.prototype.protocol_tested || _t(Et.M()),
            st.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Et.sm_m ||
              (Et.sm_m = {
                proto: Et,
                fields: {
                  protocol_tested: {
                    n: 1,
                    br: ot.readUint32,
                    bw: lt.writeUint32,
                  },
                  connectivity_state: {
                    n: 2,
                    br: ot.readUint32,
                    bw: lt.writeUint32,
                  },
                },
              }),
            Et.sm_m
          );
        }
        static MBF() {
          return Et.sm_mbf || (Et.sm_mbf = ct(Et.M())), Et.sm_mbf;
        }
        toObject(e = !1) {
          return Et.toObject(e, this);
        }
        static toObject(e, t) {
          return dt(Et.M(), e, t);
        }
        static fromObject(e) {
          return ut(Et.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (at().BinaryReader)(e),
            r = new Et();
          return Et.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return mt(Et.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (at().BinaryWriter)();
          return Et.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          gt(Et.M(), e, t);
        }
        serializeBase64String() {
          var e = new (at().BinaryWriter)();
          return Et.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_IPv6Connectivity_Result";
        }
      }
      class Ot extends st.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ot.prototype.cell_id || _t(Ot.M()),
            st.Message.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ot.sm_m ||
              (Ot.sm_m = {
                proto: Ot,
                fields: {
                  cell_id: { n: 1, br: ot.readUint32, bw: lt.writeUint32 },
                  results: { n: 2, c: Et, r: !0, q: !0 },
                  private_ip_is_rfc6598: {
                    n: 3,
                    br: ot.readBool,
                    bw: lt.writeBool,
                  },
                },
              }),
            Ot.sm_m
          );
        }
        static MBF() {
          return Ot.sm_mbf || (Ot.sm_mbf = ct(Ot.M())), Ot.sm_mbf;
        }
        toObject(e = !1) {
          return Ot.toObject(e, this);
        }
        static toObject(e, t) {
          return dt(Ot.M(), e, t);
        }
        static fromObject(e) {
          return ut(Ot.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (at().BinaryReader)(e),
            r = new Ot();
          return Ot.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return mt(Ot.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (at().BinaryWriter)();
          return Ot.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          gt(Ot.M(), e, t);
        }
        serializeBase64String() {
          var e = new (at().BinaryWriter)();
          return Ot.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_IPv6Connectivity_Notification";
        }
      }
      class Dt extends st.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Dt.prototype.product || _t(Dt.M()),
            st.Message.initialize(this, e, 0, -1, [3, 4, 5], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Dt.sm_m ||
              (Dt.sm_m = {
                proto: Dt,
                fields: {
                  product: { n: 1, br: ot.readString, bw: lt.writeString },
                  version: { n: 2, br: ot.readString, bw: lt.writeString },
                  routes: { n: 3, c: zt, r: !0, q: !0 },
                  components: { n: 4, c: Pt, r: !0, q: !0 },
                  actions: { n: 5, c: Wt, r: !0, q: !0 },
                },
              }),
            Dt.sm_m
          );
        }
        static MBF() {
          return Dt.sm_mbf || (Dt.sm_mbf = ct(Dt.M())), Dt.sm_mbf;
        }
        toObject(e = !1) {
          return Dt.toObject(e, this);
        }
        static toObject(e, t) {
          return dt(Dt.M(), e, t);
        }
        static fromObject(e) {
          return ut(Dt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (at().BinaryReader)(e),
            r = new Dt();
          return Dt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return mt(Dt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (at().BinaryWriter)();
          return Dt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          gt(Dt.M(), e, t);
        }
        serializeBase64String() {
          var e = new (at().BinaryWriter)();
          return Dt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_ReportReactUsage_Notification";
        }
      }
      class zt extends st.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            zt.prototype.route || _t(zt.M()),
            st.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            zt.sm_m ||
              (zt.sm_m = {
                proto: zt,
                fields: {
                  route: { n: 1, br: ot.readString, bw: lt.writeString },
                  count: { n: 2, br: ot.readUint32, bw: lt.writeUint32 },
                },
              }),
            zt.sm_m
          );
        }
        static MBF() {
          return zt.sm_mbf || (zt.sm_mbf = ct(zt.M())), zt.sm_mbf;
        }
        toObject(e = !1) {
          return zt.toObject(e, this);
        }
        static toObject(e, t) {
          return dt(zt.M(), e, t);
        }
        static fromObject(e) {
          return ut(zt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (at().BinaryReader)(e),
            r = new zt();
          return zt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return mt(zt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (at().BinaryWriter)();
          return zt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          gt(zt.M(), e, t);
        }
        serializeBase64String() {
          var e = new (at().BinaryWriter)();
          return zt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_ReportReactUsage_Notification_RouteData";
        }
      }
      class Pt extends st.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Pt.prototype.component || _t(Pt.M()),
            st.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Pt.sm_m ||
              (Pt.sm_m = {
                proto: Pt,
                fields: {
                  component: { n: 1, br: ot.readString, bw: lt.writeString },
                  count: { n: 2, br: ot.readUint32, bw: lt.writeUint32 },
                },
              }),
            Pt.sm_m
          );
        }
        static MBF() {
          return Pt.sm_mbf || (Pt.sm_mbf = ct(Pt.M())), Pt.sm_mbf;
        }
        toObject(e = !1) {
          return Pt.toObject(e, this);
        }
        static toObject(e, t) {
          return dt(Pt.M(), e, t);
        }
        static fromObject(e) {
          return ut(Pt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (at().BinaryReader)(e),
            r = new Pt();
          return Pt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return mt(Pt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (at().BinaryWriter)();
          return Pt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          gt(Pt.M(), e, t);
        }
        serializeBase64String() {
          var e = new (at().BinaryWriter)();
          return Pt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_ReportReactUsage_Notification_ComponentData";
        }
      }
      class Wt extends st.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Wt.prototype.action || _t(Wt.M()),
            st.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Wt.sm_m ||
              (Wt.sm_m = {
                proto: Wt,
                fields: {
                  action: { n: 1, br: ot.readString, bw: lt.writeString },
                  count: { n: 2, br: ot.readUint32, bw: lt.writeUint32 },
                },
              }),
            Wt.sm_m
          );
        }
        static MBF() {
          return Wt.sm_mbf || (Wt.sm_mbf = ct(Wt.M())), Wt.sm_mbf;
        }
        toObject(e = !1) {
          return Wt.toObject(e, this);
        }
        static toObject(e, t) {
          return dt(Wt.M(), e, t);
        }
        static fromObject(e) {
          return ut(Wt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (at().BinaryReader)(e),
            r = new Wt();
          return Wt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return mt(Wt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (at().BinaryWriter)();
          return Wt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          gt(Wt.M(), e, t);
        }
        serializeBase64String() {
          var e = new (at().BinaryWriter)();
          return Wt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_ReportReactUsage_Notification_ActionData";
        }
      }
      class Gt extends st.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Gt.prototype.product || _t(Gt.M()),
            st.Message.initialize(this, e, 0, -1, [3, 4], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Gt.sm_m ||
              (Gt.sm_m = {
                proto: Gt,
                fields: {
                  product: { n: 1, br: ot.readString, bw: lt.writeString },
                  version: { n: 2, br: ot.readString, bw: lt.writeString },
                  errors: { n: 3, c: Ut, r: !0, q: !0 },
                  tags: {
                    n: 4,
                    r: !0,
                    q: !0,
                    br: ot.readString,
                    bw: lt.writeRepeatedString,
                  },
                },
              }),
            Gt.sm_m
          );
        }
        static MBF() {
          return Gt.sm_mbf || (Gt.sm_mbf = ct(Gt.M())), Gt.sm_mbf;
        }
        toObject(e = !1) {
          return Gt.toObject(e, this);
        }
        static toObject(e, t) {
          return dt(Gt.M(), e, t);
        }
        static fromObject(e) {
          return ut(Gt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (at().BinaryReader)(e),
            r = new Gt();
          return Gt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return mt(Gt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (at().BinaryWriter)();
          return Gt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          gt(Gt.M(), e, t);
        }
        serializeBase64String() {
          var e = new (at().BinaryWriter)();
          return Gt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_ReportClientError_Notification";
        }
      }
      class Ut extends st.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ut.prototype.identifier || _t(Ut.M()),
            st.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ut.sm_m ||
              (Ut.sm_m = {
                proto: Ut,
                fields: {
                  identifier: { n: 1, br: ot.readString, bw: lt.writeString },
                  message: { n: 2, br: ot.readString, bw: lt.writeString },
                  count: { n: 3, br: ot.readUint32, bw: lt.writeUint32 },
                  context: { n: 4, br: ot.readString, bw: lt.writeString },
                  url: { n: 5, br: ot.readString, bw: lt.writeString },
                },
              }),
            Ut.sm_m
          );
        }
        static MBF() {
          return Ut.sm_mbf || (Ut.sm_mbf = ct(Ut.M())), Ut.sm_mbf;
        }
        toObject(e = !1) {
          return Ut.toObject(e, this);
        }
        static toObject(e, t) {
          return dt(Ut.M(), e, t);
        }
        static fromObject(e) {
          return ut(Ut.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (at().BinaryReader)(e),
            r = new Ut();
          return Ut.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return mt(Ut.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (at().BinaryWriter)();
          return Ut.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          gt(Ut.M(), e, t);
        }
        serializeBase64String() {
          var e = new (at().BinaryWriter)();
          return Ut.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_ReportClientError_Notification_Error";
        }
      }
      class xt extends st.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            xt.prototype.type || _t(xt.M()),
            st.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            xt.sm_m ||
              (xt.sm_m = {
                proto: xt,
                fields: {
                  type: { n: 1, br: ot.readEnum, bw: lt.writeEnum },
                  num_ops: { n: 2, br: ot.readUint32, bw: lt.writeUint32 },
                  num_bytes: {
                    n: 3,
                    br: ot.readUint64String,
                    bw: lt.writeUint64String,
                  },
                  busy_time_ms: {
                    n: 4,
                    br: ot.readUint64String,
                    bw: lt.writeUint64String,
                  },
                  idle_time_ms: {
                    n: 5,
                    br: ot.readUint64String,
                    bw: lt.writeUint64String,
                  },
                  sum_run_time_ms: {
                    n: 6,
                    br: ot.readUint64String,
                    bw: lt.writeUint64String,
                  },
                  sum_wait_time_ms: {
                    n: 7,
                    br: ot.readUint64String,
                    bw: lt.writeUint64String,
                  },
                },
              }),
            xt.sm_m
          );
        }
        static MBF() {
          return xt.sm_mbf || (xt.sm_mbf = ct(xt.M())), xt.sm_mbf;
        }
        toObject(e = !1) {
          return xt.toObject(e, this);
        }
        static toObject(e, t) {
          return dt(xt.M(), e, t);
        }
        static fromObject(e) {
          return ut(xt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (at().BinaryReader)(e),
            r = new xt();
          return xt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return mt(xt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (at().BinaryWriter)();
          return xt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          gt(xt.M(), e, t);
        }
        serializeBase64String() {
          var e = new (at().BinaryWriter)();
          return xt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_SteamPipeWorkStats_Operation";
        }
      }
      class Lt extends st.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Lt.prototype.appid || _t(Lt.M()),
            st.Message.initialize(this, e, 0, -1, [4], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Lt.sm_m ||
              (Lt.sm_m = {
                proto: Lt,
                fields: {
                  appid: { n: 1, br: ot.readUint32, bw: lt.writeUint32 },
                  depotid: { n: 2, br: ot.readUint32, bw: lt.writeUint32 },
                  work_type: { n: 3, br: ot.readEnum, bw: lt.writeEnum },
                  operations: { n: 4, c: xt, r: !0, q: !0 },
                  hardware_type: {
                    n: 5,
                    br: ot.readUint32,
                    bw: lt.writeUint32,
                  },
                },
              }),
            Lt.sm_m
          );
        }
        static MBF() {
          return Lt.sm_mbf || (Lt.sm_mbf = ct(Lt.M())), Lt.sm_mbf;
        }
        toObject(e = !1) {
          return Lt.toObject(e, this);
        }
        static toObject(e, t) {
          return dt(Lt.M(), e, t);
        }
        static fromObject(e) {
          return ut(Lt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (at().BinaryReader)(e),
            r = new Lt();
          return Lt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return mt(Lt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (at().BinaryWriter)();
          return Lt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          gt(Lt.M(), e, t);
        }
        serializeBase64String() {
          var e = new (at().BinaryWriter)();
          return Lt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_SteamPipeWorkStats_Notification";
        }
      }
      class kt extends st.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            kt.prototype.summary || _t(kt.M()),
            st.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            kt.sm_m ||
              (kt.sm_m = { proto: kt, fields: { summary: { n: 1, c: yt } } }),
            kt.sm_m
          );
        }
        static MBF() {
          return kt.sm_mbf || (kt.sm_mbf = ct(kt.M())), kt.sm_mbf;
        }
        toObject(e = !1) {
          return kt.toObject(e, this);
        }
        static toObject(e, t) {
          return dt(kt.M(), e, t);
        }
        static fromObject(e) {
          return ut(kt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (at().BinaryReader)(e),
            r = new kt();
          return kt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return mt(kt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (at().BinaryWriter)();
          return kt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          gt(kt.M(), e, t);
        }
        serializeBase64String() {
          var e = new (at().BinaryWriter)();
          return kt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_ClientBootstrap_Notification";
        }
      }
      class jt extends st.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            jt.prototype.cell_id || _t(jt.M()),
            st.Message.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            jt.sm_m ||
              (jt.sm_m = {
                proto: jt,
                fields: {
                  cell_id: { n: 1, br: ot.readUint32, bw: lt.writeUint32 },
                  stats: { n: 2, c: Ht, r: !0, q: !0 },
                  throttling_kbps: {
                    n: 3,
                    br: ot.readUint32,
                    bw: lt.writeUint32,
                  },
                  os_type: { n: 4, br: ot.readUint32, bw: lt.writeUint32 },
                  device_type: { n: 5, br: ot.readUint32, bw: lt.writeUint32 },
                },
              }),
            jt.sm_m
          );
        }
        static MBF() {
          return jt.sm_mbf || (jt.sm_mbf = ct(jt.M())), jt.sm_mbf;
        }
        toObject(e = !1) {
          return jt.toObject(e, this);
        }
        static toObject(e, t) {
          return dt(jt.M(), e, t);
        }
        static fromObject(e) {
          return ut(jt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (at().BinaryReader)(e),
            r = new jt();
          return jt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return mt(jt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (at().BinaryWriter)();
          return jt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          gt(jt.M(), e, t);
        }
        serializeBase64String() {
          var e = new (at().BinaryWriter)();
          return jt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_DownloadRates_Notification";
        }
      }
      class Ht extends st.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ht.prototype.source_type || _t(Ht.M()),
            st.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ht.sm_m ||
              (Ht.sm_m = {
                proto: Ht,
                fields: {
                  source_type: { n: 1, br: ot.readUint32, bw: lt.writeUint32 },
                  source_id: { n: 2, br: ot.readUint32, bw: lt.writeUint32 },
                  bytes: {
                    n: 3,
                    br: ot.readUint64String,
                    bw: lt.writeUint64String,
                  },
                  host_name: { n: 4, br: ot.readString, bw: lt.writeString },
                  microseconds: {
                    n: 5,
                    br: ot.readUint64String,
                    bw: lt.writeUint64String,
                  },
                  used_ipv6: { n: 6, br: ot.readBool, bw: lt.writeBool },
                  proxied: { n: 7, br: ot.readBool, bw: lt.writeBool },
                  used_http2: { n: 8, br: ot.readBool, bw: lt.writeBool },
                  cache_hits: { n: 9, br: ot.readUint32, bw: lt.writeUint32 },
                  cache_misses: {
                    n: 10,
                    br: ot.readUint32,
                    bw: lt.writeUint32,
                  },
                  hit_bytes: {
                    n: 11,
                    br: ot.readUint64String,
                    bw: lt.writeUint64String,
                  },
                  miss_bytes: {
                    n: 12,
                    br: ot.readUint64String,
                    bw: lt.writeUint64String,
                  },
                  chunks_scored: {
                    n: 13,
                    br: ot.readUint32,
                    bw: lt.writeUint32,
                  },
                  sum_chunk_scores: {
                    n: 14,
                    br: ot.readDouble,
                    bw: lt.writeDouble,
                  },
                },
              }),
            Ht.sm_m
          );
        }
        static MBF() {
          return Ht.sm_mbf || (Ht.sm_mbf = ct(Ht.M())), Ht.sm_mbf;
        }
        toObject(e = !1) {
          return Ht.toObject(e, this);
        }
        static toObject(e, t) {
          return dt(Ht.M(), e, t);
        }
        static fromObject(e) {
          return ut(Ht.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (at().BinaryReader)(e),
            r = new Ht();
          return Ht.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return mt(Ht.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (at().BinaryWriter)();
          return Ht.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          gt(Ht.M(), e, t);
        }
        serializeBase64String() {
          var e = new (at().BinaryWriter)();
          return Ht.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_DownloadRates_Notification_StatsInfo";
        }
      }
      class Vt extends st.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Vt.prototype.validation_result || _t(Vt.M()),
            st.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Vt.sm_m ||
              (Vt.sm_m = {
                proto: Vt,
                fields: {
                  validation_result: {
                    n: 1,
                    br: ot.readInt32,
                    bw: lt.writeInt32,
                  },
                  app_id: { n: 2, br: ot.readUint32, bw: lt.writeUint32 },
                  staged_files: { n: 3, br: ot.readBool, bw: lt.writeBool },
                  user_initiated: { n: 4, br: ot.readBool, bw: lt.writeBool },
                  early_out: { n: 5, br: ot.readBool, bw: lt.writeBool },
                  chunks_scanned: {
                    n: 6,
                    br: ot.readUint32,
                    bw: lt.writeUint32,
                  },
                  chunks_corrupt: {
                    n: 7,
                    br: ot.readUint32,
                    bw: lt.writeUint32,
                  },
                  bytes_scanned: {
                    n: 8,
                    br: ot.readUint64String,
                    bw: lt.writeUint64String,
                  },
                  chunk_bytes_corrupt: {
                    n: 9,
                    br: ot.readUint64String,
                    bw: lt.writeUint64String,
                  },
                  total_file_size_corrupt: {
                    n: 10,
                    br: ot.readUint64String,
                    bw: lt.writeUint64String,
                  },
                },
              }),
            Vt.sm_m
          );
        }
        static MBF() {
          return Vt.sm_mbf || (Vt.sm_mbf = ct(Vt.M())), Vt.sm_mbf;
        }
        toObject(e = !1) {
          return Vt.toObject(e, this);
        }
        static toObject(e, t) {
          return dt(Vt.M(), e, t);
        }
        static fromObject(e) {
          return ut(Vt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (at().BinaryReader)(e),
            r = new Vt();
          return Vt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return mt(Vt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (at().BinaryWriter)();
          return Vt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          gt(Vt.M(), e, t);
        }
        serializeBase64String() {
          var e = new (at().BinaryWriter)();
          return Vt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_ContentValidation_Notification";
        }
      }
      class Kt extends st.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Kt.prototype.app_id || _t(Kt.M()),
            st.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Kt.sm_m ||
              (Kt.sm_m = {
                proto: Kt,
                fields: {
                  app_id: { n: 1, br: ot.readUint32, bw: lt.writeUint32 },
                  platform_type: {
                    n: 2,
                    br: ot.readUint32,
                    bw: lt.writeUint32,
                  },
                  preload: { n: 3, br: ot.readBool, bw: lt.writeBool },
                  blocking_app_launch: {
                    n: 4,
                    br: ot.readBool,
                    bw: lt.writeBool,
                  },
                  files_uploaded: {
                    n: 5,
                    br: ot.readUint32,
                    bw: lt.writeUint32,
                  },
                  files_downloaded: {
                    n: 6,
                    br: ot.readUint32,
                    bw: lt.writeUint32,
                  },
                  files_deleted: {
                    n: 7,
                    br: ot.readUint32,
                    bw: lt.writeUint32,
                  },
                  bytes_uploaded: {
                    n: 8,
                    br: ot.readUint64String,
                    bw: lt.writeUint64String,
                  },
                  bytes_downloaded: {
                    n: 9,
                    br: ot.readUint64String,
                    bw: lt.writeUint64String,
                  },
                  microsec_total: {
                    n: 10,
                    br: ot.readUint64String,
                    bw: lt.writeUint64String,
                  },
                  microsec_init_caches: {
                    n: 11,
                    br: ot.readUint64String,
                    bw: lt.writeUint64String,
                  },
                  microsec_validate_state: {
                    n: 12,
                    br: ot.readUint64String,
                    bw: lt.writeUint64String,
                  },
                  microsec_ac_launch: {
                    n: 13,
                    br: ot.readUint64String,
                    bw: lt.writeUint64String,
                  },
                  microsec_ac_prep_user_files: {
                    n: 14,
                    br: ot.readUint64String,
                    bw: lt.writeUint64String,
                  },
                  microsec_ac_exit: {
                    n: 15,
                    br: ot.readUint64String,
                    bw: lt.writeUint64String,
                  },
                  microsec_build_sync_list: {
                    n: 16,
                    br: ot.readUint64String,
                    bw: lt.writeUint64String,
                  },
                  microsec_delete_files: {
                    n: 17,
                    br: ot.readUint64String,
                    bw: lt.writeUint64String,
                  },
                  microsec_download_files: {
                    n: 18,
                    br: ot.readUint64String,
                    bw: lt.writeUint64String,
                  },
                  microsec_upload_files: {
                    n: 19,
                    br: ot.readUint64String,
                    bw: lt.writeUint64String,
                  },
                  hardware_type: {
                    n: 20,
                    br: ot.readUint32,
                    bw: lt.writeUint32,
                  },
                  files_managed: {
                    n: 21,
                    br: ot.readUint32,
                    bw: lt.writeUint32,
                  },
                },
              }),
            Kt.sm_m
          );
        }
        static MBF() {
          return Kt.sm_mbf || (Kt.sm_mbf = ct(Kt.M())), Kt.sm_mbf;
        }
        toObject(e = !1) {
          return Kt.toObject(e, this);
        }
        static toObject(e, t) {
          return dt(Kt.M(), e, t);
        }
        static fromObject(e) {
          return ut(Kt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (at().BinaryReader)(e),
            r = new Kt();
          return Kt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return mt(Kt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (at().BinaryWriter)();
          return Kt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          gt(Kt.M(), e, t);
        }
        serializeBase64String() {
          var e = new (at().BinaryWriter)();
          return Kt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_CloudAppSyncStats_Notification";
        }
      }
      class qt extends st.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            qt.prototype.cell_id || _t(qt.M()),
            st.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            qt.sm_m ||
              (qt.sm_m = {
                proto: qt,
                fields: {
                  cell_id: { n: 1, br: ot.readUint32, bw: lt.writeUint32 },
                  data: { n: 2, c: Mt },
                },
              }),
            qt.sm_m
          );
        }
        static MBF() {
          return qt.sm_mbf || (qt.sm_mbf = ct(qt.M())), qt.sm_mbf;
        }
        toObject(e = !1) {
          return qt.toObject(e, this);
        }
        static toObject(e, t) {
          return dt(qt.M(), e, t);
        }
        static fromObject(e) {
          return ut(qt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (at().BinaryReader)(e),
            r = new qt();
          return qt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return mt(qt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (at().BinaryWriter)();
          return qt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          gt(qt.M(), e, t);
        }
        serializeBase64String() {
          var e = new (at().BinaryWriter)();
          return qt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_ContentDownloadResponse_Counts_Notification";
        }
      }
      class $t extends st.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            $t.prototype.eresult || _t($t.M()),
            st.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            $t.sm_m ||
              ($t.sm_m = {
                proto: $t,
                fields: {
                  eresult: {
                    n: 1,
                    d: 2,
                    br: ot.readUint32,
                    bw: lt.writeUint32,
                  },
                  share_method: { n: 2, br: ot.readEnum, bw: lt.writeEnum },
                  seconds: { n: 3, br: ot.readFloat, bw: lt.writeFloat },
                  bytes: {
                    n: 4,
                    br: ot.readUint64String,
                    bw: lt.writeUint64String,
                  },
                  gameid: {
                    n: 5,
                    br: ot.readFixed64String,
                    bw: lt.writeFixed64String,
                  },
                },
              }),
            $t.sm_m
          );
        }
        static MBF() {
          return $t.sm_mbf || ($t.sm_mbf = ct($t.M())), $t.sm_mbf;
        }
        toObject(e = !1) {
          return $t.toObject(e, this);
        }
        static toObject(e, t) {
          return dt($t.M(), e, t);
        }
        static fromObject(e) {
          return ut($t.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (at().BinaryReader)(e),
            r = new $t();
          return $t.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return mt($t.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (at().BinaryWriter)();
          return $t.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          gt($t.M(), e, t);
        }
        serializeBase64String() {
          var e = new (at().BinaryWriter)();
          return $t.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_ClipShare_Notification";
        }
      }
      class Qt extends st.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Qt.prototype.original_range_method || _t(Qt.M()),
            st.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Qt.sm_m ||
              (Qt.sm_m = {
                proto: Qt,
                fields: {
                  original_range_method: {
                    n: 1,
                    br: ot.readEnum,
                    bw: lt.writeEnum,
                  },
                  start: { n: 2, c: Yt },
                  end: { n: 3, c: Yt },
                  seconds: { n: 4, br: ot.readFloat, bw: lt.writeFloat },
                  gameid: {
                    n: 5,
                    br: ot.readFixed64String,
                    bw: lt.writeFixed64String,
                  },
                },
              }),
            Qt.sm_m
          );
        }
        static MBF() {
          return Qt.sm_mbf || (Qt.sm_mbf = ct(Qt.M())), Qt.sm_mbf;
        }
        toObject(e = !1) {
          return Qt.toObject(e, this);
        }
        static toObject(e, t) {
          return dt(Qt.M(), e, t);
        }
        static fromObject(e) {
          return ut(Qt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (at().BinaryReader)(e),
            r = new Qt();
          return Qt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return mt(Qt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (at().BinaryWriter)();
          return Qt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          gt(Qt.M(), e, t);
        }
        serializeBase64String() {
          var e = new (at().BinaryWriter)();
          return Qt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_ClipRange_Notification";
        }
      }
      class Yt extends st.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Yt.prototype.original_range_method || _t(Yt.M()),
            st.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Yt.sm_m ||
              (Yt.sm_m = {
                proto: Yt,
                fields: {
                  original_range_method: {
                    n: 1,
                    br: ot.readEnum,
                    bw: lt.writeEnum,
                  },
                  latest_range_method: {
                    n: 2,
                    br: ot.readEnum,
                    bw: lt.writeEnum,
                  },
                  delta_ms: { n: 3, br: ot.readInt32, bw: lt.writeInt32 },
                },
              }),
            Yt.sm_m
          );
        }
        static MBF() {
          return Yt.sm_mbf || (Yt.sm_mbf = ct(Yt.M())), Yt.sm_mbf;
        }
        toObject(e = !1) {
          return Yt.toObject(e, this);
        }
        static toObject(e, t) {
          return dt(Yt.M(), e, t);
        }
        static fromObject(e) {
          return ut(Yt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (at().BinaryReader)(e),
            r = new Yt();
          return Yt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return mt(Yt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (at().BinaryWriter)();
          return Yt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          gt(Yt.M(), e, t);
        }
        serializeBase64String() {
          var e = new (at().BinaryWriter)();
          return Yt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_ClipRange_Notification_RelativeRangeEdge";
        }
      }
      class Xt extends st.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Xt.prototype.recording_type || _t(Xt.M()),
            st.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Xt.sm_m ||
              (Xt.sm_m = {
                proto: Xt,
                fields: {
                  recording_type: { n: 1, br: ot.readEnum, bw: lt.writeEnum },
                  seconds: { n: 2, br: ot.readFloat, bw: lt.writeFloat },
                  bytes: {
                    n: 3,
                    br: ot.readUint64String,
                    bw: lt.writeUint64String,
                  },
                  gameid: {
                    n: 4,
                    br: ot.readFixed64String,
                    bw: lt.writeFixed64String,
                  },
                  instant_clip: { n: 5, br: ot.readBool, bw: lt.writeBool },
                },
              }),
            Xt.sm_m
          );
        }
        static MBF() {
          return Xt.sm_mbf || (Xt.sm_mbf = ct(Xt.M())), Xt.sm_mbf;
        }
        toObject(e = !1) {
          return Xt.toObject(e, this);
        }
        static toObject(e, t) {
          return dt(Xt.M(), e, t);
        }
        static fromObject(e) {
          return ut(Xt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (at().BinaryReader)(e),
            r = new Xt();
          return Xt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return mt(Xt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (at().BinaryWriter)();
          return Xt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          gt(Xt.M(), e, t);
        }
        serializeBase64String() {
          var e = new (at().BinaryWriter)();
          return Xt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_EndGameRecording_Notification";
        }
      }
      class Jt extends st.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Jt.prototype.frame_rates || _t(Jt.M()),
            st.Message.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Jt.sm_m ||
              (Jt.sm_m = {
                proto: Jt,
                fields: {
                  frame_rates: { n: 2, c: Zt, r: !0, q: !0 },
                  system_info: { n: 3, c: Tt },
                },
              }),
            Jt.sm_m
          );
        }
        static MBF() {
          return Jt.sm_mbf || (Jt.sm_mbf = ct(Jt.M())), Jt.sm_mbf;
        }
        toObject(e = !1) {
          return Jt.toObject(e, this);
        }
        static toObject(e, t) {
          return dt(Jt.M(), e, t);
        }
        static fromObject(e) {
          return ut(Jt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (at().BinaryReader)(e),
            r = new Jt();
          return Jt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return mt(Jt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (at().BinaryWriter)();
          return Jt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          gt(Jt.M(), e, t);
        }
        serializeBase64String() {
          var e = new (at().BinaryWriter)();
          return Jt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_GamePerformance_Notification";
        }
      }
      class Zt extends st.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Zt.prototype.gameid || _t(Zt.M()),
            st.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Zt.sm_m ||
              (Zt.sm_m = {
                proto: Zt,
                fields: {
                  gameid: {
                    n: 1,
                    br: ot.readFixed64String,
                    bw: lt.writeFixed64String,
                  },
                  frame_rate: { n: 2, br: ot.readUint32, bw: lt.writeUint32 },
                  session_seconds: {
                    n: 3,
                    br: ot.readInt32,
                    bw: lt.writeInt32,
                  },
                  framegen_frame_rate: {
                    n: 4,
                    br: ot.readUint32,
                    bw: lt.writeUint32,
                  },
                  game_settings: { n: 5, c: It },
                  seconds_since_active: {
                    n: 6,
                    br: ot.readUint32,
                    bw: lt.writeUint32,
                  },
                  frame_rate_limit: {
                    n: 7,
                    br: ot.readUint32,
                    bw: lt.writeUint32,
                  },
                },
              }),
            Zt.sm_m
          );
        }
        static MBF() {
          return Zt.sm_mbf || (Zt.sm_mbf = ct(Zt.M())), Zt.sm_mbf;
        }
        toObject(e = !1) {
          return Zt.toObject(e, this);
        }
        static toObject(e, t) {
          return dt(Zt.M(), e, t);
        }
        static fromObject(e) {
          return ut(Zt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (at().BinaryReader)(e),
            r = new Zt();
          return Zt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return mt(Zt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (at().BinaryWriter)();
          return Zt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          gt(Zt.M(), e, t);
        }
        serializeBase64String() {
          var e = new (at().BinaryWriter)();
          return Zt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_GamePerformance_Notification_FrameRate";
        }
      }
      class er extends st.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            er.prototype.client_args || _t(er.M()),
            st.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            er.sm_m ||
              (er.sm_m = {
                proto: er,
                fields: {
                  client_args: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: ot.readString,
                    bw: lt.writeRepeatedString,
                  },
                  gpu_webview_regkey_disabled: {
                    n: 2,
                    br: ot.readBool,
                    bw: lt.writeBool,
                  },
                  suppress_gpu_chrome: {
                    n: 3,
                    br: ot.readBool,
                    bw: lt.writeBool,
                  },
                  browser_not_supported: {
                    n: 4,
                    br: ot.readBool,
                    bw: lt.writeBool,
                  },
                  hw_accel_video_regkey_disabled: {
                    n: 5,
                    br: ot.readBool,
                    bw: lt.writeBool,
                  },
                  mini_mode_enabled: {
                    n: 6,
                    br: ot.readBool,
                    bw: lt.writeBool,
                  },
                  fps_counter_enabled: {
                    n: 7,
                    br: ot.readBool,
                    bw: lt.writeBool,
                  },
                  library_low_bandwidth_mode_enabled: {
                    n: 8,
                    br: ot.readBool,
                    bw: lt.writeBool,
                  },
                  library_low_perf_mode_enabled: {
                    n: 9,
                    br: ot.readBool,
                    bw: lt.writeBool,
                  },
                  gr_mode: { n: 10, br: ot.readEnum, bw: lt.writeEnum },
                },
              }),
            er.sm_m
          );
        }
        static MBF() {
          return er.sm_mbf || (er.sm_mbf = ct(er.M())), er.sm_mbf;
        }
        toObject(e = !1) {
          return er.toObject(e, this);
        }
        static toObject(e, t) {
          return dt(er.M(), e, t);
        }
        static fromObject(e) {
          return ut(er.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (at().BinaryReader)(e),
            r = new er();
          return er.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return mt(er.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (at().BinaryWriter)();
          return er.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          gt(er.M(), e, t);
        }
        serializeBase64String() {
          var e = new (at().BinaryWriter)();
          return er.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_ReportClientArgs_Notification";
        }
      }
      class tr extends st.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            tr.prototype.accessibility_desktop_ui_scale || _t(tr.M()),
            st.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            tr.sm_m ||
              (tr.sm_m = {
                proto: tr,
                fields: {
                  accessibility_desktop_ui_scale: {
                    n: 1,
                    br: ot.readFloat,
                    bw: lt.writeFloat,
                  },
                  accessibility_screen_reader_enabled: {
                    n: 2,
                    br: ot.readBool,
                    bw: lt.writeBool,
                  },
                  accessibility_high_contrast_mode: {
                    n: 3,
                    br: ot.readBool,
                    bw: lt.writeBool,
                  },
                  accessibility_reduce_motion: {
                    n: 4,
                    br: ot.readBool,
                    bw: lt.writeBool,
                  },
                  accessibility_color_filter_name: {
                    n: 5,
                    br: ot.readString,
                    bw: lt.writeString,
                  },
                },
              }),
            tr.sm_m
          );
        }
        static MBF() {
          return tr.sm_mbf || (tr.sm_mbf = ct(tr.M())), tr.sm_mbf;
        }
        toObject(e = !1) {
          return tr.toObject(e, this);
        }
        static toObject(e, t) {
          return dt(tr.M(), e, t);
        }
        static fromObject(e) {
          return ut(tr.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (at().BinaryReader)(e),
            r = new tr();
          return tr.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return mt(tr.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (at().BinaryWriter)();
          return tr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          gt(tr.M(), e, t);
        }
        serializeBase64String() {
          var e = new (at().BinaryWriter)();
          return tr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_ReportAccessibilitySettings_Notification";
        }
      }
      class rr extends st.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            rr.prototype.glibc_version_major || _t(rr.M()),
            st.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            rr.sm_m ||
              (rr.sm_m = {
                proto: rr,
                fields: {
                  glibc_version_major: {
                    n: 1,
                    br: ot.readInt32,
                    bw: lt.writeInt32,
                  },
                  glibc_version_minor: {
                    n: 2,
                    br: ot.readInt32,
                    bw: lt.writeInt32,
                  },
                  account_type: { n: 3, br: ot.readInt32, bw: lt.writeInt32 },
                  launcher_type: { n: 4, br: ot.readInt32, bw: lt.writeInt32 },
                  game_server_appid: {
                    n: 5,
                    br: ot.readInt32,
                    bw: lt.writeInt32,
                  },
                  process_name: { n: 6, br: ot.readString, bw: lt.writeString },
                  kernel_version_major: {
                    n: 7,
                    br: ot.readInt32,
                    bw: lt.writeInt32,
                  },
                  kernel_version_minor: {
                    n: 8,
                    br: ot.readInt32,
                    bw: lt.writeInt32,
                  },
                },
              }),
            rr.sm_m
          );
        }
        static MBF() {
          return rr.sm_mbf || (rr.sm_mbf = ct(rr.M())), rr.sm_mbf;
        }
        toObject(e = !1) {
          return rr.toObject(e, this);
        }
        static toObject(e, t) {
          return dt(rr.M(), e, t);
        }
        static fromObject(e) {
          return ut(rr.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (at().BinaryReader)(e),
            r = new rr();
          return rr.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return mt(rr.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (at().BinaryWriter)();
          return rr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          gt(rr.M(), e, t);
        }
        serializeBase64String() {
          var e = new (at().BinaryWriter)();
          return rr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_ReportLinuxStats_Notification";
        }
      }
      var ir;
      !(function (e) {
        (e.ClientAppInterfaceStatsReport = function (e, t) {
          return e.SendNotification(
            "ClientMetrics.ClientAppInterfaceStatsReport#1",
            Tr(Nt, t),
            { ePrivilege: 1 },
          );
        }),
          (e.ClientIPv6ConnectivityReport = function (e, t) {
            return e.SendNotification(
              "ClientMetrics.ClientIPv6ConnectivityReport#1",
              Tr(Ot, t),
              { ePrivilege: 1 },
            );
          }),
          (e.SteamPipeWorkStatsReport = function (e, t) {
            return e.SendNotification(
              "ClientMetrics.SteamPipeWorkStatsReport#1",
              Tr(Lt, t),
              { ePrivilege: 1 },
            );
          }),
          (e.ReportReactUsage = function (e, t) {
            return e.SendNotification(
              "ClientMetrics.ReportReactUsage#1",
              Tr(Dt, t),
              {
                ePrivilege: 2,
                eWebAPIKeyRequirement: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }),
          (e.ReportClientError = function (e, t) {
            return e.SendNotification(
              "ClientMetrics.ReportClientError#1",
              Tr(Gt, t),
              {
                ePrivilege: 2,
                eWebAPIKeyRequirement: 1,
                rgBrowserAPISites: ["all"],
              },
            );
          }),
          (e.ClientBootstrapReport = function (e, t) {
            return e.SendNotification(
              "ClientMetrics.ClientBootstrapReport#1",
              Tr(kt, t),
              { ePrivilege: 1 },
            );
          }),
          (e.ClientDownloadRatesReport = function (e, t) {
            return e.SendNotification(
              "ClientMetrics.ClientDownloadRatesReport#1",
              Tr(jt, t),
              { ePrivilege: 1 },
            );
          }),
          (e.ClientContentValidationReport = function (e, t) {
            return e.SendNotification(
              "ClientMetrics.ClientContentValidationReport#1",
              Tr(Vt, t),
              { ePrivilege: 1 },
            );
          }),
          (e.ClientCloudAppSyncStats = function (e, t) {
            return e.SendNotification(
              "ClientMetrics.ClientCloudAppSyncStats#1",
              Tr(Kt, t),
              { ePrivilege: 1 },
            );
          }),
          (e.ClientDownloadResponseCodeCounts = function (e, t) {
            return e.SendNotification(
              "ClientMetrics.ClientDownloadResponseCodeCounts#1",
              Tr(qt, t),
              { ePrivilege: 1 },
            );
          }),
          (e.ReportClientArgs = function (e, t) {
            return e.SendNotification(
              "ClientMetrics.ReportClientArgs#1",
              Tr(er, t),
              { ePrivilege: 1 },
            );
          }),
          (e.ReportLinuxStats = function (e, t) {
            return e.SendNotification(
              "ClientMetrics.ReportLinuxStats#1",
              Tr(rr, t),
              { ePrivilege: 1 },
            );
          }),
          (e.ReportAccessibilitySettings = function (e, t) {
            return e.SendNotification(
              "ClientMetrics.ReportAccessibilitySettings#1",
              Tr(tr, t),
              { ePrivilege: 1 },
            );
          }),
          (e.ReportClipShare = function (e, t) {
            return e.SendNotification(
              "ClientMetrics.ReportClipShare#1",
              Tr($t, t),
              { ePrivilege: 1 },
            );
          }),
          (e.ReportClipRange = function (e, t) {
            return e.SendNotification(
              "ClientMetrics.ReportClipRange#1",
              Tr(Qt, t),
              { ePrivilege: 1 },
            );
          }),
          (e.ReportEndGameRecording = function (e, t) {
            return e.SendNotification(
              "ClientMetrics.ReportEndGameRecording#1",
              Tr(Xt, t),
              { ePrivilege: 1 },
            );
          }),
          (e.ReportGamePerformance = function (e, t) {
            return e.SendNotification(
              "ClientMetrics.ReportGamePerformance#1",
              Tr(Jt, t),
              { ePrivilege: 1 },
            );
          });
      })(ir || (ir = {}));
      const nr =
        window.addEventListener ||
        (globalThis && globalThis.addEventListener) ||
        (() => {});
      let sr,
        ar = [],
        or = (e, t, r) =>
          ar.push({ error: e, cCallsitesToIgnore: t, strComponentStack: r });
      const lr = !0;
      class cr extends Error {
        constructor(...e) {
          super(...e), (this.name = "Assertion Failed");
        }
      }
      {
        const e = console.assert;
        console.assert = (t, r, ...i) => {
          if (!t) {
            const e = mr();
            or(new cr(_r(r, ...i)), 2, e);
          }
          e.apply(console, [t, r, ...i]);
        };
        const t = console.error;
        (console.error = (e, ...r) => {
          const i = mr();
          or(new Error(_r(e, ...r)), 1, i), t.apply(console, [e, ...r]);
        }),
          (console.clogerror = (e, r, ...i) => {
            const n = mr();
            or(new Error(_r(r, ...i)), e + 1, n), t.apply(console, [r, ...i]);
          }),
          nr("error", (e) => {
            or(e.error, 0);
          }),
          nr("unhandledrejection", (e) => {
            or(e.reason, 0);
          }),
          (sr = window.setTimeout(() => {
            (ar = []), (or = () => {});
          }, 3e4));
      }
      const ur = { cCallsitesToIgnore: 0, bIncludeMessageInIdentifier: !1 },
        dr = [
          "(localhost|127.0.0.1):(?!(80|443))",
          "chrome-extension://",
          "HTMLDivElement.onreset \\(/market",
          "/.millennium/Dist",
          "Millennium internal",
          "millenium",
          "millennium",
          "decky://",
          "Refused unauthorized RPC command",
        ];
      function mr() {
        try {
          const e =
            o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
          if (
            e &&
            "object" == typeof e &&
            "function" == typeof e.getCurrentStack
          ) {
            const t = e.getCurrentStack();
            if ("string" == typeof t) return t;
          }
        } catch (e) {}
      }
      class gr {
        m_strProduct;
        m_strVersion;
        m_transport = null;
        m_rgErrorQueue = [];
        m_sendTimer = null;
        m_bReportingPaused = !1;
        m_pauseTimer = void 0;
        m_fnGetReportingInterval = vr;
        m_fnGetReportTags = () => [];
        m_fnGetURL = () => location.href;
        strDisplayVersion;
        m_bEnabled = !0;
        m_bInitialized = !1;
        constructor(e = !0) {
          e
            ? (ar.forEach(
                ({ error: e, cCallsitesToIgnore: t, strComponentStack: r }) =>
                  this.ReportError(e, {
                    cCallsitesToIgnore: t,
                    strComponentStack: r,
                  }),
              ),
              (or = (e, t, r) =>
                this.ReportError(e, {
                  cCallsitesToIgnore: t,
                  strComponentStack: r,
                })))
            : (or = () => {}),
            (ar = []),
            clearTimeout(sr),
            window.setTimeout(() => {
              this.m_bInitialized ||
                ((this.m_bEnabled = !1), (this.m_rgErrorQueue = []));
            }, 3e4);
        }
        Init(e, t, r, i = {}) {
          (this.m_bInitialized = !0),
            (this.m_strProduct = e),
            (this.m_strVersion = t),
            (this.m_transport = r),
            i.fnGetReportingInterval &&
              (this.m_fnGetReportingInterval = i.fnGetReportingInterval),
            i.fnGetReportTags && (this.m_fnGetReportTags = i.fnGetReportTags),
            i.fnGetURL && (this.m_fnGetURL = i.fnGetURL),
            i.strDisplayVersion &&
              (this.strDisplayVersion = i.strDisplayVersion),
            this.m_bEnabled ||
              (console.error(
                "Error reporting was initialized after being disabled, possibly dropping errors.",
              ),
              (this.m_bEnabled = !0)),
            this.m_rgErrorQueue.length &&
              (this.SendErrorReports(this.m_rgErrorQueue),
              (this.m_rgErrorQueue = []));
        }
        SetGetURL(e) {
          this.m_fnGetURL = e;
        }
        async ReportError(e, t) {
          if (!e)
            return (
              console.warn(
                "Failed to report error: ReportError() was called without an error to report.",
              ),
              null
            );
          try {
            const r = { ...ur, ...t };
            if (!this.m_bEnabled) return null;
            0;
            const i = await (function (e, t) {
              try {
                return e.stack && e.stack.match(hr)
                  ? (async function (e, t) {
                      const {
                          cCallsitesToIgnore: r,
                          bIncludeMessageInIdentifier: i,
                        } = t,
                        { message: n, stack: s } = e,
                        a = s?.split("\n") ?? [];
                      let o = wr(a.filter((e) => !!e.match(hr))[r]);
                      i && (o = `${o} ${n}`);
                      const l = a
                        .map((e) => {
                          let t = e.match(/(.*)\((.*):(\d+):(\d+)\)/);
                          if (
                            ((t && 5 == t.length) ||
                              (t = e.match(/(.*at )(http.*):(\d+):(\d+)/)),
                            !t)
                          )
                            return e;
                          if (5 === t.length) {
                            const [e, r, i, n, s] = t,
                              a = parseInt(n),
                              o = parseInt(s);
                            if (!isNaN(a) && !isNaN(o)) return [r, i, a, o];
                          }
                          return e;
                        })
                        .filter((e) => !!e);
                      return {
                        identifier: o,
                        identifierHash: await Sr(o),
                        message: l,
                      };
                    })(e, t)
                  : e.stack && e.stack.match(br)
                    ? (async function (e, t) {
                        const {
                            cCallsitesToIgnore: r,
                            bIncludeMessageInIdentifier: i,
                          } = t,
                          n = e.stack?.split("\n") ?? [];
                        let s = wr(n.filter((e) => !!e.match(br))[r]);
                        i && (s = `${s} ${e.message}`);
                        const a = n
                          .map((e) => {
                            const t = e.match(/(.*@)?(.*):(\d+):(\d+)/);
                            if (!t) return e;
                            if (5 === t.length) {
                              const [e, r, i, n, s] = t,
                                a = parseInt(n),
                                o = parseInt(s);
                              if (!isNaN(a) && !isNaN(o)) return [r, i, a, o];
                            }
                            return e;
                          })
                          .filter((e) => !!e);
                        return {
                          identifier: s,
                          identifierHash: await Sr(s),
                          message: [e.message, ...a],
                        };
                      })(e, t)
                    : e.stack && e.stack.match(pr)
                      ? (async function (e, t) {
                          const {
                              bIncludeMessageInIdentifier: r,
                              cCallsitesToIgnore: i,
                            } = t,
                            n = e.stack?.split("\n") ?? [],
                            s = n[i],
                            a = s.split("/");
                          let o = a[a.length - 1];
                          s.indexOf("@") > -1 &&
                            (o = s.split("@")[0] + "@" + o);
                          r && (o = `${o} ${e.message}`);
                          const l = n
                            .map((e) => {
                              const t = e.match(/(.*@)?(.*):(\d+):(\d+)/);
                              if (!t) return e;
                              if (5 === t.length) {
                                const [e, r, i, n, s] = t,
                                  a = parseInt(n),
                                  o = parseInt(s);
                                if (!isNaN(a) && !isNaN(o)) return [r, i, a, o];
                              }
                              return e;
                            })
                            .filter((e) => !!e);
                          return {
                            identifier: o,
                            identifierHash: await Sr(o),
                            message: [e.message, ...l],
                          };
                        })(e, t)
                      : (Br ||
                          (console.warn(
                            "Error reporter does not know how to parse generated stack:",
                          ),
                          console.warn(e.stack),
                          (Br = !0)),
                        null);
              } catch (e) {
                return (
                  console.warn(`Failed to normalize error stack: ${e}`), null
                );
              }
            })(e, r);
            return i
              ? (r.cCallsitesToIgnore &&
                  i.message.splice(1, r.cCallsitesToIgnore),
                r.strComponentStack &&
                  (i.strComponentStack = r.strComponentStack),
                (i.strUrl = this.m_fnGetURL()),
                (i.strDisplayVersion = this.strDisplayVersion),
                this.SendErrorReport(i),
                i)
              : null;
          } catch (e) {
            return console.log(`Failed to report error: ${e}`), null;
          }
        }
        PauseReportingForDuration(e) {
          this.PauseReporting(),
            (this.m_pauseTimer = window.setTimeout(
              () => this.ResumeReporting(),
              e,
            ));
        }
        PauseReporting() {
          (this.m_bReportingPaused = !0),
            window.clearTimeout(this.m_pauseTimer);
        }
        ResumeReporting() {
          (this.m_bReportingPaused = !1),
            window.clearTimeout(this.m_pauseTimer),
            this.ScheduleSend();
        }
        BIsBlacklisted(e) {
          for (let t of e.message) {
            let r = JSON.stringify(t);
            for (let t of dr) {
              const i = new RegExp(t);
              if (r.match(i))
                return console.warn("Report", e, "matched regex", t), !0;
            }
          }
          return !1;
        }
        SendErrorReport(e) {
          this.BIsBlacklisted(e) ||
            (this.m_transport
              ? this.QueueReport(e)
              : this.m_rgErrorQueue.push(e));
        }
        QueueReport(e) {
          this.m_rgErrorQueue.push(e),
            this.m_bReportingPaused || this.ScheduleSend();
        }
        ScheduleSend() {
          this.m_sendTimer ||
            (this.m_sendTimer = window.setTimeout(() => {
              this.SendErrorReports(this.m_rgErrorQueue),
                (this.m_rgErrorQueue = []),
                (this.m_sendTimer = null);
            }, this.m_fnGetReportingInterval()));
        }
        SendErrorReports(e) {
          if (!e || !e.length) return;
          const t = Rr.Init(Gt),
            r = e.reduce(
              (e, t) => (
                e[t.identifier]
                  ? e[t.identifier].count++
                  : (e[t.identifier] = { report: t, count: 1 }),
                e
              ),
              {},
            ),
            i = Object.keys(r).map((e) => {
              const { report: t, count: i } = r[e],
                n = new Ut();
              let s;
              return (
                n.set_count(i),
                n.set_identifier(t.identifier + " " + t.identifierHash),
                n.set_message(JSON.stringify(t.message)),
                t.strComponentStack &&
                  ((s ??= {}), (s.componentStack = t.strComponentStack)),
                t.strDisplayVersion &&
                  ((s ??= {}), (s.strDisplayVersion = t.strDisplayVersion)),
                s && n.set_context(JSON.stringify(s)),
                t.strUrl && n.set_url(t.strUrl),
                n
              );
            });
          t.Body().set_product(this.m_strProduct),
            t.Body().set_version(this.m_strVersion),
            t.Body().set_errors(i);
          for (const e of this.m_fnGetReportTags()) t.Body().add_tags(e);
          ir.ReportClientError(this.m_transport, t);
        }
        get version() {
          return this.m_strVersion;
        }
        get product() {
          return this.m_strProduct;
        }
        get reporting_enabled() {
          return lr;
        }
      }
      function _r(e, ...t) {
        if ("string" == typeof e && 0 === t.length) return e;
        return [e, ...t]
          .map((e) => {
            try {
              let t = String(e);
              return "[object Object]" == t && (t = JSON.stringify(e)), t;
            } catch (e) {
              return "[Stringify Error]";
            }
          })
          .join(", ");
      }
      const hr = /^\s*at .*(\S+:\d+|\(native\))/m,
        br = /(^|@)\S+:\d+/,
        pr = /.*\/bundle-[a-zA-Z0-9]+:\d+:\d+/;
      let fr,
        Br = !1;
      function wr(e) {
        return (function (e) {
          const t = "https://",
            r = e.indexOf(t);
          if (-1 === r) return e;
          const i = e.indexOf("/", r + t.length);
          return -1 === i ? e : e.slice(0, r) + e.slice(i);
        })(
          (function (e) {
            const t = e.lastIndexOf("?");
            if (-1 === t) return e;
            const r = e.indexOf(":", t);
            return -1 === r ? e : e.slice(0, t) + e.slice(r);
          })(e),
        );
      }
      const yr = () => (fr || (fr = new gr()), fr);
      async function Sr(e) {
        try {
          return (await Bt(e)).slice(0, 16);
        } catch (e) {
          return "";
        }
      }
      function vr() {
        return 1e4;
      }
      class Mr {
        m_nOffset;
        m_nLength;
        m_viewPacket;
        m_rgubPacket;
        m_iGet;
        m_iPut;
        constructor(e, t = 0, r) {
          (this.m_nOffset = t || 0),
            e instanceof Uint8Array || e instanceof DataView
              ? ((this.m_nLength = r || e.byteLength - this.m_nOffset),
                (this.m_nOffset += e.byteOffset),
                (this.m_viewPacket = new DataView(
                  e.buffer,
                  this.m_nOffset,
                  this.m_nLength,
                )))
              : ((this.m_nLength = r || e.byteLength - this.m_nOffset),
                (this.m_viewPacket = new DataView(
                  e,
                  this.m_nOffset,
                  this.m_nLength,
                ))),
            (this.m_rgubPacket = new Uint8Array(
              this.m_viewPacket.buffer,
              this.m_viewPacket.byteOffset,
              this.m_viewPacket.byteLength,
            )),
            (this.m_iGet = 0),
            (this.m_iPut = 0);
        }
        TellGet() {
          return this.m_iGet + this.m_viewPacket.byteOffset;
        }
        GetPacket() {
          return this.m_viewPacket.buffer;
        }
        GetUint8() {
          return this.m_viewPacket.getUint8(this.m_iGet++);
        }
        GetUint32(e = !0) {
          const t = this.m_viewPacket.getUint32(this.m_iGet, e);
          return (this.m_iGet += 4), t;
        }
        SeekGetHead(e = 0) {
          this.m_iGet = e || 0;
        }
        SeekGetCurrent(e) {
          this.m_iGet += e;
        }
        TellPut() {
          return this.m_iPut + this.m_viewPacket.byteOffset;
        }
        TellMaxPut() {
          return this.m_viewPacket.byteLength;
        }
        PutUint8(e) {
          this.m_viewPacket.setUint8(this.m_iPut++, e);
        }
        PutUint32(e, t = !0) {
          this.m_viewPacket.setUint32(this.m_iPut, e, t), (this.m_iPut += 4);
        }
        PutBytes(e) {
          this.m_rgubPacket.set(e, this.m_iPut), (this.m_iPut += e.length);
        }
        SeekPut(e) {
          this.m_iPut += e;
        }
        GetCountBytesRemaining() {
          return this.m_viewPacket.byteLength - this.m_iGet;
        }
      }
      class Cr {
        static InitHeaderFromPacket(e) {
          return new Cr(void 0, e);
        }
        m_eMsg;
        m_bValid;
        m_netPacket;
        m_cubHeader;
        m_header;
        m_body;
        constructor(e, t, r, i, n, s) {
          if (i)
            (this.m_eMsg = i.m_eMsg),
              (this.m_bValid = i.m_bValid),
              this.m_bValid &&
                ((this.m_netPacket = i.m_netPacket),
                (this.m_cubHeader = i.m_cubHeader),
                (this.m_header = i.m_header),
                this.InitForType(r));
          else {
            if (((this.m_header = new Rt(null)), (this.m_bValid = !0), t))
              if (
                ((this.m_netPacket = t),
                this.m_netPacket.SeekGetHead(),
                (this.m_eMsg = this.m_netPacket.GetUint32()),
                2147483648 & this.m_eMsg)
              ) {
                (this.m_eMsg = 2147483647 & this.m_eMsg),
                  (this.m_cubHeader = this.m_netPacket.GetUint32());
                try {
                  Rt.deserializeBinaryFromReader(
                    this.m_header,
                    new st.BinaryReader(
                      this.m_netPacket.GetPacket(),
                      this.m_netPacket.TellGet(),
                      this.m_cubHeader,
                    ),
                  ),
                    this.m_netPacket.SeekGetCurrent(this.m_cubHeader),
                    r && this.InitForType(r);
                } catch (e) {
                  console.error("Exception deserializing protobuf", e),
                    (this.m_bValid = !1);
                }
              } else this.m_bValid = !1;
            else
              e && (this.m_eMsg = e),
                s && r
                  ? (this.m_body = r.fromObject(s))
                  : r && (this.m_body = new r());
            n && this.m_header.set_jobid_target(n.Hdr().jobid_target());
          }
        }
        InitForType(e) {
          (this.m_body = new e()),
            this.m_netPacket &&
              (this.m_netPacket.SeekGetHead(8 + this.m_cubHeader),
              this.ReadBodyFromBuffer(e, this.m_netPacket));
        }
        ReadBodyFromBuffer(e, t) {
          try {
            e.deserializeBinaryFromReader(
              this.m_body,
              new st.BinaryReader(
                t.GetPacket(),
                t.TellGet(),
                t.GetCountBytesRemaining(),
              ),
            );
          } catch (e) {
            this.m_bValid = !1;
            const t = yr(),
              r = `Exception parsing protobuf message body of type ${this.m_eMsg}.  Definitions may be out of sync with server version.`;
            t &&
              t.ReportError(new Error(r), { bIncludeMessageInIdentifier: !0 }),
              console.warn(r),
              console.log(e.stack || e);
          }
        }
        BIsValid() {
          return this.m_bValid;
        }
        Body() {
          return this.m_body;
        }
        SetBodyJSON(e) {
          (e.toObject = () => e), (this.m_body = e);
        }
        Hdr() {
          return this.m_header;
        }
        GetEMsg() {
          return this.m_eMsg;
        }
        SetEMsg(e) {
          this.m_eMsg = e;
        }
        GetEResult() {
          return this.Hdr().eresult();
        }
        BSuccess() {
          return 1 == this.Hdr().eresult();
        }
        GetErrorMessage() {
          return this.Hdr().error_message()
            ? this.Hdr().error_message()
            : `eresult ${this.Hdr().eresult()}`;
        }
        Serialize() {
          const e = this.m_header.serializeBinary(),
            t = this.m_body.serializeBinary(),
            r = 2147483648 | this.m_eMsg,
            i = new Uint8Array(8 + e.length + t.length),
            n = new Mr(i);
          return (
            n.PutUint32(r),
            n.PutUint32(e.length),
            n.PutBytes(e),
            n.PutBytes(t),
            i
          );
        }
        SerializeBody() {
          const e = this.m_body.serializeBinary(),
            t = new Uint8Array(e.length);
          return new Mr(t).PutBytes(e), t;
        }
        DEBUG_ToObject() {
          return {};
        }
        DEBUG_LogToConsole() {
          0;
        }
      }
      class Rr extends Cr {
        constructor(e, t = 0, r, i, n) {
          super(t, r, e, i, void 0, n);
        }
        static InitFromPacket(e, t) {
          return new Rr(e, 0, t);
        }
        static InitFromMsg(e, t) {
          return new Rr(e, void 0, void 0, t);
        }
        static Init(e, t) {
          return new Rr(e, t);
        }
        static InitFromObject(e, t) {
          return new Rr(e, void 0, void 0, void 0, t);
        }
        Body() {
          return super.Body();
        }
        SetBodyFields(e) {
          for (const t in e)
            Array.isArray(e[t])
              ? this.Body()[`add_${t}`] &&
                e[t].forEach((e) => {
                  this.Body()[`add_${t}`](e);
                })
              : this.Body()[`set_${t}`] && this.Body()[`set_${t}`](e[t]);
        }
      }
      function Tr(e, t, r) {
        let i;
        return (
          (i = t instanceof Rr ? t : Rr.InitFromObject(e, t)),
          void 0 !== r?.strDebugSource &&
            i.Hdr().set_debug_source(r.strDebugSource),
          i
        );
      }
      const Ir = new (class {
        m_transport = null;
        m_registry = null;
        SetDefaultTransport(e) {
          null != this.m_transport &&
            console.error(
              "Multiple attempts to set a default WebUI transport: overriding previous",
            ),
            (this.m_transport = e);
        }
        GetDefaultTransport() {
          return this.m_transport;
        }
        SetDefaultHandlerRegistry(e) {
          null != this.m_registry &&
            console.error(
              "Multiple attempts to set a default WebUI message handler registry: overriding previous",
            ),
            (this.m_registry = e);
        }
        GetDefaultHandlerRegistry() {
          return this.m_registry;
        }
      })();
      function Fr() {
        return Ir;
      }
      class Ar extends st.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ar.prototype.controller_index || _t(Ar.M()),
            st.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ar.sm_m ||
              (Ar.sm_m = {
                proto: Ar,
                fields: {
                  controller_index: {
                    n: 1,
                    br: ot.readUint32,
                    bw: lt.writeUint32,
                  },
                  dpad_up: { n: 2, br: ot.readBool, bw: lt.writeBool },
                  dpad_down: { n: 3, br: ot.readBool, bw: lt.writeBool },
                  dpad_left: { n: 4, br: ot.readBool, bw: lt.writeBool },
                  dpad_right: { n: 5, br: ot.readBool, bw: lt.writeBool },
                  button_south: { n: 6, br: ot.readBool, bw: lt.writeBool },
                  button_east: { n: 7, br: ot.readBool, bw: lt.writeBool },
                  button_west: { n: 8, br: ot.readBool, bw: lt.writeBool },
                  button_north: { n: 9, br: ot.readBool, bw: lt.writeBool },
                  button_back_view: {
                    n: 10,
                    br: ot.readBool,
                    bw: lt.writeBool,
                  },
                  button_start_options: {
                    n: 11,
                    br: ot.readBool,
                    bw: lt.writeBool,
                  },
                  button_steam: { n: 12, br: ot.readBool, bw: lt.writeBool },
                  button_quick_access: {
                    n: 13,
                    br: ot.readBool,
                    bw: lt.writeBool,
                  },
                  button_mute_capture: {
                    n: 14,
                    br: ot.readBool,
                    bw: lt.writeBool,
                  },
                  left_stick_click: {
                    n: 15,
                    br: ot.readBool,
                    bw: lt.writeBool,
                  },
                  left_stick_touch: {
                    n: 16,
                    br: ot.readBool,
                    bw: lt.writeBool,
                  },
                  left_stick_deflect: {
                    n: 17,
                    br: ot.readBool,
                    bw: lt.writeBool,
                  },
                  right_stick_click: {
                    n: 18,
                    br: ot.readBool,
                    bw: lt.writeBool,
                  },
                  right_stick_touch: {
                    n: 19,
                    br: ot.readBool,
                    bw: lt.writeBool,
                  },
                  right_stick_deflect: {
                    n: 20,
                    br: ot.readBool,
                    bw: lt.writeBool,
                  },
                  center_trackpad_touch: {
                    n: 21,
                    br: ot.readBool,
                    bw: lt.writeBool,
                  },
                  center_trackpad_click: {
                    n: 22,
                    br: ot.readBool,
                    bw: lt.writeBool,
                  },
                  left_trackpad_touch: {
                    n: 23,
                    br: ot.readBool,
                    bw: lt.writeBool,
                  },
                  left_trackpad_click: {
                    n: 24,
                    br: ot.readBool,
                    bw: lt.writeBool,
                  },
                  right_trackpad_touch: {
                    n: 25,
                    br: ot.readBool,
                    bw: lt.writeBool,
                  },
                  right_trackpad_click: {
                    n: 26,
                    br: ot.readBool,
                    bw: lt.writeBool,
                  },
                  left_bumper: { n: 27, br: ot.readBool, bw: lt.writeBool },
                  left_trigger: { n: 28, br: ot.readBool, bw: lt.writeBool },
                  l4: { n: 29, br: ot.readBool, bw: lt.writeBool },
                  l5: { n: 30, br: ot.readBool, bw: lt.writeBool },
                  left_aux: { n: 31, br: ot.readBool, bw: lt.writeBool },
                  right_bumper: { n: 32, br: ot.readBool, bw: lt.writeBool },
                  right_trigger: { n: 33, br: ot.readBool, bw: lt.writeBool },
                  r4: { n: 34, br: ot.readBool, bw: lt.writeBool },
                  r5: { n: 35, br: ot.readBool, bw: lt.writeBool },
                  right_aux: { n: 36, br: ot.readBool, bw: lt.writeBool },
                  button_state_bits: {
                    n: 37,
                    br: ot.readUint64String,
                    bw: lt.writeUint64String,
                  },
                },
              }),
            Ar.sm_m
          );
        }
        static MBF() {
          return Ar.sm_mbf || (Ar.sm_mbf = ct(Ar.M())), Ar.sm_mbf;
        }
        toObject(e = !1) {
          return Ar.toObject(e, this);
        }
        static toObject(e, t) {
          return dt(Ar.M(), e, t);
        }
        static fromObject(e) {
          return ut(Ar.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (at().BinaryReader)(e),
            r = new Ar();
          return Ar.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return mt(Ar.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (at().BinaryWriter)();
          return Ar.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          gt(Ar.M(), e, t);
        }
        serializeBase64String() {
          var e = new (at().BinaryWriter)();
          return Ar.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_ControllerButtonStateChanged_Notification";
        }
      }
      class Nr extends st.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Nr.prototype.x || _t(Nr.M()),
            st.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Nr.sm_m ||
              (Nr.sm_m = {
                proto: Nr,
                fields: {
                  x: { n: 1, br: ot.readFloat, bw: lt.writeFloat },
                  y: { n: 2, br: ot.readFloat, bw: lt.writeFloat },
                },
              }),
            Nr.sm_m
          );
        }
        static MBF() {
          return Nr.sm_mbf || (Nr.sm_mbf = ct(Nr.M())), Nr.sm_mbf;
        }
        toObject(e = !1) {
          return Nr.toObject(e, this);
        }
        static toObject(e, t) {
          return dt(Nr.M(), e, t);
        }
        static fromObject(e) {
          return ut(Nr.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (at().BinaryReader)(e),
            r = new Nr();
          return Nr.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return mt(Nr.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (at().BinaryWriter)();
          return Nr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          gt(Nr.M(), e, t);
        }
        serializeBase64String() {
          var e = new (at().BinaryWriter)();
          return Nr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "ControllerVector2";
        }
      }
      class Er extends st.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Er.prototype.x || _t(Er.M()),
            st.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Er.sm_m ||
              (Er.sm_m = {
                proto: Er,
                fields: {
                  x: { n: 1, br: ot.readFloat, bw: lt.writeFloat },
                  y: { n: 2, br: ot.readFloat, bw: lt.writeFloat },
                  z: { n: 3, br: ot.readFloat, bw: lt.writeFloat },
                },
              }),
            Er.sm_m
          );
        }
        static MBF() {
          return Er.sm_mbf || (Er.sm_mbf = ct(Er.M())), Er.sm_mbf;
        }
        toObject(e = !1) {
          return Er.toObject(e, this);
        }
        static toObject(e, t) {
          return dt(Er.M(), e, t);
        }
        static fromObject(e) {
          return ut(Er.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (at().BinaryReader)(e),
            r = new Er();
          return Er.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return mt(Er.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (at().BinaryWriter)();
          return Er.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          gt(Er.M(), e, t);
        }
        serializeBase64String() {
          var e = new (at().BinaryWriter)();
          return Er.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "ControllerVector3";
        }
      }
      class Or extends st.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Or.prototype.w || _t(Or.M()),
            st.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Or.sm_m ||
              (Or.sm_m = {
                proto: Or,
                fields: {
                  w: { n: 1, br: ot.readFloat, bw: lt.writeFloat },
                  x: { n: 2, br: ot.readFloat, bw: lt.writeFloat },
                  y: { n: 3, br: ot.readFloat, bw: lt.writeFloat },
                  z: { n: 4, br: ot.readFloat, bw: lt.writeFloat },
                },
              }),
            Or.sm_m
          );
        }
        static MBF() {
          return Or.sm_mbf || (Or.sm_mbf = ct(Or.M())), Or.sm_mbf;
        }
        toObject(e = !1) {
          return Or.toObject(e, this);
        }
        static toObject(e, t) {
          return dt(Or.M(), e, t);
        }
        static fromObject(e) {
          return ut(Or.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (at().BinaryReader)(e),
            r = new Or();
          return Or.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return mt(Or.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (at().BinaryWriter)();
          return Or.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          gt(Or.M(), e, t);
        }
        serializeBase64String() {
          var e = new (at().BinaryWriter)();
          return Or.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "ControllerQuaternion";
        }
      }
      class Dr extends st.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Dr.prototype.pitch || _t(Dr.M()),
            st.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Dr.sm_m ||
              (Dr.sm_m = {
                proto: Dr,
                fields: {
                  pitch: { n: 1, br: ot.readFloat, bw: lt.writeFloat },
                  yaw: { n: 2, br: ot.readFloat, bw: lt.writeFloat },
                  roll: { n: 3, br: ot.readFloat, bw: lt.writeFloat },
                },
              }),
            Dr.sm_m
          );
        }
        static MBF() {
          return Dr.sm_mbf || (Dr.sm_mbf = ct(Dr.M())), Dr.sm_mbf;
        }
        toObject(e = !1) {
          return Dr.toObject(e, this);
        }
        static toObject(e, t) {
          return dt(Dr.M(), e, t);
        }
        static fromObject(e) {
          return ut(Dr.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (at().BinaryReader)(e),
            r = new Dr();
          return Dr.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return mt(Dr.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (at().BinaryWriter)();
          return Dr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          gt(Dr.M(), e, t);
        }
        serializeBase64String() {
          var e = new (at().BinaryWriter)();
          return Dr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "ControllerGyroEulerAngles";
        }
      }
      class zr extends st.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            zr.prototype.controller_index || _t(zr.M()),
            st.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            zr.sm_m ||
              (zr.sm_m = {
                proto: zr,
                fields: {
                  controller_index: {
                    n: 1,
                    br: ot.readUint32,
                    bw: lt.writeUint32,
                  },
                  joystick_left: { n: 2, c: Nr },
                  joystick_right: { n: 3, c: Nr },
                  trackpad_left: { n: 4, c: Nr },
                  trackpad_right: { n: 5, c: Nr },
                  trackpad_center: { n: 6, c: Nr },
                  trackpad_pressure_left: {
                    n: 7,
                    br: ot.readFloat,
                    bw: lt.writeFloat,
                  },
                  trackpad_pressure_right: {
                    n: 8,
                    br: ot.readFloat,
                    bw: lt.writeFloat,
                  },
                  trigger_left: { n: 9, br: ot.readFloat, bw: lt.writeFloat },
                  trigger_right: { n: 10, br: ot.readFloat, bw: lt.writeFloat },
                },
              }),
            zr.sm_m
          );
        }
        static MBF() {
          return zr.sm_mbf || (zr.sm_mbf = ct(zr.M())), zr.sm_mbf;
        }
        toObject(e = !1) {
          return zr.toObject(e, this);
        }
        static toObject(e, t) {
          return dt(zr.M(), e, t);
        }
        static fromObject(e) {
          return ut(zr.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (at().BinaryReader)(e),
            r = new zr();
          return zr.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return mt(zr.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (at().BinaryWriter)();
          return zr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          gt(zr.M(), e, t);
        }
        serializeBase64String() {
          var e = new (at().BinaryWriter)();
          return zr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_ControllerAxesStateChange_Notification";
        }
      }
      class Pr extends st.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Pr.prototype.controller_index || _t(Pr.M()),
            st.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Pr.sm_m ||
              (Pr.sm_m = {
                proto: Pr,
                fields: {
                  controller_index: {
                    n: 1,
                    br: ot.readUint32,
                    bw: lt.writeUint32,
                  },
                  imu_index: { n: 2, br: ot.readUint32, bw: lt.writeUint32 },
                  gyro_raw_quaternion: { n: 3, c: Or },
                  gyro_filtered_quaternion: { n: 4, c: Or },
                  imu_sensor_delta_time: {
                    n: 5,
                    br: ot.readUint32,
                    bw: lt.writeUint32,
                  },
                  estimated_packet_rate: {
                    n: 6,
                    br: ot.readUint32,
                    bw: lt.writeUint32,
                  },
                },
              }),
            Pr.sm_m
          );
        }
        static MBF() {
          return Pr.sm_mbf || (Pr.sm_mbf = ct(Pr.M())), Pr.sm_mbf;
        }
        toObject(e = !1) {
          return Pr.toObject(e, this);
        }
        static toObject(e, t) {
          return dt(Pr.M(), e, t);
        }
        static fromObject(e) {
          return ut(Pr.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (at().BinaryReader)(e),
            r = new Pr();
          return Pr.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return mt(Pr.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (at().BinaryWriter)();
          return Pr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          gt(Pr.M(), e, t);
        }
        serializeBase64String() {
          var e = new (at().BinaryWriter)();
          return Pr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_GyroQuaternionChanged_Notification";
        }
      }
      class Wr extends st.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Wr.prototype.controller_index || _t(Wr.M()),
            st.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Wr.sm_m ||
              (Wr.sm_m = {
                proto: Wr,
                fields: {
                  controller_index: {
                    n: 1,
                    br: ot.readUint32,
                    bw: lt.writeUint32,
                  },
                  imu_index: { n: 2, br: ot.readUint32, bw: lt.writeUint32 },
                  gyro_raw_speed: { n: 3, c: Dr },
                  gyro_filtered_speed: { n: 4, c: Dr },
                },
              }),
            Wr.sm_m
          );
        }
        static MBF() {
          return Wr.sm_mbf || (Wr.sm_mbf = ct(Wr.M())), Wr.sm_mbf;
        }
        toObject(e = !1) {
          return Wr.toObject(e, this);
        }
        static toObject(e, t) {
          return dt(Wr.M(), e, t);
        }
        static fromObject(e) {
          return ut(Wr.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (at().BinaryReader)(e),
            r = new Wr();
          return Wr.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return mt(Wr.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (at().BinaryWriter)();
          return Wr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          gt(Wr.M(), e, t);
        }
        serializeBase64String() {
          var e = new (at().BinaryWriter)();
          return Wr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_GyroSpeedChanged_Notification";
        }
      }
      class Gr extends st.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Gr.prototype.controller_index || _t(Gr.M()),
            st.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Gr.sm_m ||
              (Gr.sm_m = {
                proto: Gr,
                fields: {
                  controller_index: {
                    n: 1,
                    br: ot.readUint32,
                    bw: lt.writeUint32,
                  },
                  imu_index: { n: 2, br: ot.readUint32, bw: lt.writeUint32 },
                  acceleromter_1g: { n: 4, c: Er },
                  trusted_gravity_1g: { n: 5, c: Er },
                },
              }),
            Gr.sm_m
          );
        }
        static MBF() {
          return Gr.sm_mbf || (Gr.sm_mbf = ct(Gr.M())), Gr.sm_mbf;
        }
        toObject(e = !1) {
          return Gr.toObject(e, this);
        }
        static toObject(e, t) {
          return dt(Gr.M(), e, t);
        }
        static fromObject(e) {
          return ut(Gr.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (at().BinaryReader)(e),
            r = new Gr();
          return Gr.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return mt(Gr.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (at().BinaryWriter)();
          return Gr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          gt(Gr.M(), e, t);
        }
        serializeBase64String() {
          var e = new (at().BinaryWriter)();
          return Gr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_GyroAccelerometerChanged_Notification";
        }
      }
      class Ur extends st.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ur.prototype.controller_index || _t(Ur.M()),
            st.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ur.sm_m ||
              (Ur.sm_m = {
                proto: Ur,
                fields: {
                  controller_index: {
                    n: 1,
                    br: ot.readUint32,
                    bw: lt.writeUint32,
                  },
                  imu_index: { n: 2, br: ot.readUint32, bw: lt.writeUint32 },
                  acceleromter_noise: {
                    n: 3,
                    br: ot.readFloat,
                    bw: lt.writeFloat,
                  },
                  gyroscope_noise: {
                    n: 4,
                    br: ot.readFloat,
                    bw: lt.writeFloat,
                  },
                  calibration_progress: {
                    n: 5,
                    br: ot.readFloat,
                    bw: lt.writeFloat,
                  },
                  calibration_state: {
                    n: 6,
                    br: ot.readUint32,
                    bw: lt.writeUint32,
                  },
                  gyroscope_noise_tolerance: {
                    n: 7,
                    br: ot.readFloat,
                    bw: lt.writeFloat,
                  },
                  accelerometer_noise_tolerance: {
                    n: 8,
                    br: ot.readFloat,
                    bw: lt.writeFloat,
                  },
                },
              }),
            Ur.sm_m
          );
        }
        static MBF() {
          return Ur.sm_mbf || (Ur.sm_mbf = ct(Ur.M())), Ur.sm_mbf;
        }
        toObject(e = !1) {
          return Ur.toObject(e, this);
        }
        static toObject(e, t) {
          return dt(Ur.M(), e, t);
        }
        static fromObject(e) {
          return ut(Ur.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (at().BinaryReader)(e),
            r = new Ur();
          return Ur.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return mt(Ur.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (at().BinaryWriter)();
          return Ur.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          gt(Ur.M(), e, t);
        }
        serializeBase64String() {
          var e = new (at().BinaryWriter)();
          return Ur.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_GyroCalibration_Notification";
        }
      }
      class xr extends st.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            xr.prototype.controller_index || _t(xr.M()),
            st.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            xr.sm_m ||
              (xr.sm_m = {
                proto: xr,
                fields: {
                  controller_index: {
                    n: 1,
                    br: ot.readUint32,
                    bw: lt.writeUint32,
                  },
                  flow_mode: { n: 2, br: ot.readUint32, bw: lt.writeUint32 },
                },
              }),
            xr.sm_m
          );
        }
        static MBF() {
          return xr.sm_mbf || (xr.sm_mbf = ct(xr.M())), xr.sm_mbf;
        }
        toObject(e = !1) {
          return xr.toObject(e, this);
        }
        static toObject(e, t) {
          return dt(xr.M(), e, t);
        }
        static fromObject(e) {
          return ut(xr.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (at().BinaryReader)(e),
            r = new xr();
          return xr.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return mt(xr.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (at().BinaryWriter)();
          return xr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          gt(xr.M(), e, t);
        }
        serializeBase64String() {
          var e = new (at().BinaryWriter)();
          return xr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_ControllerStateFlow_Request";
        }
      }
      class Lr extends st.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), st.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Lr.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Lr();
        }
        static deserializeBinary(e) {
          let t = new (at().BinaryReader)(e),
            r = new Lr();
          return Lr.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (at().BinaryWriter)();
          return Lr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (at().BinaryWriter)();
          return Lr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_ControllerStateFlow_Response";
        }
      }
      class kr extends st.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            kr.prototype.controller_index || _t(kr.M()),
            st.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            kr.sm_m ||
              (kr.sm_m = {
                proto: kr,
                fields: {
                  controller_index: {
                    n: 1,
                    br: ot.readUint32,
                    bw: lt.writeUint32,
                  },
                  side: { n: 2, br: ot.readInt32, bw: lt.writeInt32 },
                },
              }),
            kr.sm_m
          );
        }
        static MBF() {
          return kr.sm_mbf || (kr.sm_mbf = ct(kr.M())), kr.sm_mbf;
        }
        toObject(e = !1) {
          return kr.toObject(e, this);
        }
        static toObject(e, t) {
          return dt(kr.M(), e, t);
        }
        static fromObject(e) {
          return ut(kr.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (at().BinaryReader)(e),
            r = new kr();
          return kr.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return mt(kr.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (at().BinaryWriter)();
          return kr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          gt(kr.M(), e, t);
        }
        serializeBase64String() {
          var e = new (at().BinaryWriter)();
          return kr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_GyroSoftwareCalibration_Request";
        }
      }
      class jr extends st.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), st.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return jr.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new jr();
        }
        static deserializeBinary(e) {
          let t = new (at().BinaryReader)(e),
            r = new jr();
          return jr.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (at().BinaryWriter)();
          return jr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (at().BinaryWriter)();
          return jr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_GyroSoftwareCalibration_Response";
        }
      }
      class Hr extends st.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Hr.prototype.controller_index || _t(Hr.M()),
            st.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Hr.sm_m ||
              (Hr.sm_m = {
                proto: Hr,
                fields: {
                  controller_index: {
                    n: 1,
                    br: ot.readUint32,
                    bw: lt.writeUint32,
                  },
                  dongle_index: { n: 2, br: ot.readUint32, bw: lt.writeUint32 },
                  slot: { n: 3, br: ot.readUint32, bw: lt.writeUint32 },
                },
              }),
            Hr.sm_m
          );
        }
        static MBF() {
          return Hr.sm_mbf || (Hr.sm_mbf = ct(Hr.M())), Hr.sm_mbf;
        }
        toObject(e = !1) {
          return Hr.toObject(e, this);
        }
        static toObject(e, t) {
          return dt(Hr.M(), e, t);
        }
        static fromObject(e) {
          return ut(Hr.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (at().BinaryReader)(e),
            r = new Hr();
          return Hr.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return mt(Hr.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (at().BinaryWriter)();
          return Hr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          gt(Hr.M(), e, t);
        }
        serializeBase64String() {
          var e = new (at().BinaryWriter)();
          return Hr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_PairDongleTritonConnected_Request";
        }
      }
      class Vr extends st.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), st.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Vr.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Vr();
        }
        static deserializeBinary(e) {
          let t = new (at().BinaryReader)(e),
            r = new Vr();
          return Vr.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (at().BinaryWriter)();
          return Vr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (at().BinaryWriter)();
          return Vr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_PairDongleTritonConnected_Response";
        }
      }
      class Kr extends st.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), st.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Kr.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Kr();
        }
        static deserializeBinary(e) {
          let t = new (at().BinaryReader)(e),
            r = new Kr();
          return Kr.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (at().BinaryWriter)();
          return Kr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (at().BinaryWriter)();
          return Kr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_SteamDonglesChanged_Notification";
        }
      }
      class qr extends st.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            qr.prototype.controller_index || _t(qr.M()),
            st.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            qr.sm_m ||
              (qr.sm_m = {
                proto: qr,
                fields: {
                  controller_index: {
                    n: 1,
                    br: ot.readUint32,
                    bw: lt.writeUint32,
                  },
                },
              }),
            qr.sm_m
          );
        }
        static MBF() {
          return qr.sm_mbf || (qr.sm_mbf = ct(qr.M())), qr.sm_mbf;
        }
        toObject(e = !1) {
          return qr.toObject(e, this);
        }
        static toObject(e, t) {
          return dt(qr.M(), e, t);
        }
        static fromObject(e) {
          return ut(qr.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (at().BinaryReader)(e),
            r = new qr();
          return qr.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return mt(qr.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (at().BinaryWriter)();
          return qr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          gt(qr.M(), e, t);
        }
        serializeBase64String() {
          var e = new (at().BinaryWriter)();
          return qr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_UnpairedTritonPluggedIn_Notification";
        }
      }
      class $r extends st.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            $r.prototype.docked_puck_index || _t($r.M()),
            st.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            $r.sm_m ||
              ($r.sm_m = {
                proto: $r,
                fields: {
                  docked_puck_index: {
                    n: 1,
                    br: ot.readUint32,
                    bw: lt.writeUint32,
                  },
                },
              }),
            $r.sm_m
          );
        }
        static MBF() {
          return $r.sm_mbf || ($r.sm_mbf = ct($r.M())), $r.sm_mbf;
        }
        toObject(e = !1) {
          return $r.toObject(e, this);
        }
        static toObject(e, t) {
          return dt($r.M(), e, t);
        }
        static fromObject(e) {
          return ut($r.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (at().BinaryReader)(e),
            r = new $r();
          return $r.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return mt($r.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (at().BinaryWriter)();
          return $r.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          gt($r.M(), e, t);
        }
        serializeBase64String() {
          var e = new (at().BinaryWriter)();
          return $r.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_UnpairedTritonDocked_Notification";
        }
      }
      class Qr extends st.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Qr.prototype.docked_puck_index || _t(Qr.M()),
            st.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Qr.sm_m ||
              (Qr.sm_m = {
                proto: Qr,
                fields: {
                  docked_puck_index: {
                    n: 1,
                    br: ot.readUint32,
                    bw: lt.writeUint32,
                  },
                },
              }),
            Qr.sm_m
          );
        }
        static MBF() {
          return Qr.sm_mbf || (Qr.sm_mbf = ct(Qr.M())), Qr.sm_mbf;
        }
        toObject(e = !1) {
          return Qr.toObject(e, this);
        }
        static toObject(e, t) {
          return dt(Qr.M(), e, t);
        }
        static fromObject(e) {
          return ut(Qr.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (at().BinaryReader)(e),
            r = new Qr();
          return Qr.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return mt(Qr.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (at().BinaryWriter)();
          return Qr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          gt(Qr.M(), e, t);
        }
        serializeBase64String() {
          var e = new (at().BinaryWriter)();
          return Qr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_TritonUndocked_Notification";
        }
      }
      class Yr extends st.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Yr.prototype.controller_index || _t(Yr.M()),
            st.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Yr.sm_m ||
              (Yr.sm_m = {
                proto: Yr,
                fields: {
                  controller_index: {
                    n: 1,
                    br: ot.readUint32,
                    bw: lt.writeUint32,
                  },
                },
              }),
            Yr.sm_m
          );
        }
        static MBF() {
          return Yr.sm_mbf || (Yr.sm_mbf = ct(Yr.M())), Yr.sm_mbf;
        }
        toObject(e = !1) {
          return Yr.toObject(e, this);
        }
        static toObject(e, t) {
          return dt(Yr.M(), e, t);
        }
        static fromObject(e) {
          return ut(Yr.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (at().BinaryReader)(e),
            r = new Yr();
          return Yr.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return mt(Yr.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (at().BinaryWriter)();
          return Yr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          gt(Yr.M(), e, t);
        }
        serializeBase64String() {
          var e = new (at().BinaryWriter)();
          return Yr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_ControllerPairingChanged_Notification";
        }
      }
      class Xr extends st.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Xr.prototype.include_bonds || _t(Xr.M()),
            st.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Xr.sm_m ||
              (Xr.sm_m = {
                proto: Xr,
                fields: {
                  include_bonds: { n: 1, br: ot.readBool, bw: lt.writeBool },
                },
              }),
            Xr.sm_m
          );
        }
        static MBF() {
          return Xr.sm_mbf || (Xr.sm_mbf = ct(Xr.M())), Xr.sm_mbf;
        }
        toObject(e = !1) {
          return Xr.toObject(e, this);
        }
        static toObject(e, t) {
          return dt(Xr.M(), e, t);
        }
        static fromObject(e) {
          return ut(Xr.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (at().BinaryReader)(e),
            r = new Xr();
          return Xr.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return mt(Xr.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (at().BinaryWriter)();
          return Xr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          gt(Xr.M(), e, t);
        }
        serializeBase64String() {
          var e = new (at().BinaryWriter)();
          return Xr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_GetDongles_Request";
        }
      }
      class Jr extends st.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Jr.prototype.steam_controller_v1 || _t(Jr.M()),
            st.Message.initialize(this, e, 0, -1, [2, 3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Jr.sm_m ||
              (Jr.sm_m = {
                proto: Jr,
                fields: {
                  steam_controller_v1: {
                    n: 1,
                    br: ot.readBool,
                    bw: lt.writeBool,
                  },
                  ibex_internal: { n: 2, c: Zr, r: !0, q: !0 },
                  ibex_external: { n: 3, c: Zr, r: !0, q: !0 },
                },
              }),
            Jr.sm_m
          );
        }
        static MBF() {
          return Jr.sm_mbf || (Jr.sm_mbf = ct(Jr.M())), Jr.sm_mbf;
        }
        toObject(e = !1) {
          return Jr.toObject(e, this);
        }
        static toObject(e, t) {
          return dt(Jr.M(), e, t);
        }
        static fromObject(e) {
          return ut(Jr.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (at().BinaryReader)(e),
            r = new Jr();
          return Jr.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return mt(Jr.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (at().BinaryWriter)();
          return Jr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          gt(Jr.M(), e, t);
        }
        serializeBase64String() {
          var e = new (at().BinaryWriter)();
          return Jr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_GetDongles_Response";
        }
      }
      class Zr extends st.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Zr.prototype.index || _t(Zr.M()),
            st.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Zr.sm_m ||
              (Zr.sm_m = {
                proto: Zr,
                fields: {
                  index: { n: 1, br: ot.readUint32, bw: lt.writeUint32 },
                  dongle_serial_number: {
                    n: 2,
                    br: ot.readString,
                    bw: lt.writeString,
                  },
                  paired_serial_number: {
                    n: 3,
                    br: ot.readString,
                    bw: lt.writeString,
                  },
                  paired: { n: 4, br: ot.readBool, bw: lt.writeBool },
                  docked: { n: 5, br: ot.readBool, bw: lt.writeBool },
                },
              }),
            Zr.sm_m
          );
        }
        static MBF() {
          return Zr.sm_mbf || (Zr.sm_mbf = ct(Zr.M())), Zr.sm_mbf;
        }
        toObject(e = !1) {
          return Zr.toObject(e, this);
        }
        static toObject(e, t) {
          return dt(Zr.M(), e, t);
        }
        static fromObject(e) {
          return ut(Zr.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (at().BinaryReader)(e),
            r = new Zr();
          return Zr.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return mt(Zr.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (at().BinaryWriter)();
          return Zr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          gt(Zr.M(), e, t);
        }
        serializeBase64String() {
          var e = new (at().BinaryWriter)();
          return Zr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_GetDongles_Response_Dongle";
        }
      }
      class ei extends st.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), st.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return ei.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new ei();
        }
        static deserializeBinary(e) {
          let t = new (at().BinaryReader)(e),
            r = new ei();
          return ei.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (at().BinaryWriter)();
          return ei.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (at().BinaryWriter)();
          return ei.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_ShouldTritonPairInOobe_Request";
        }
      }
      class ti extends st.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), st.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return ti.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new ti();
        }
        static deserializeBinary(e) {
          let t = new (at().BinaryReader)(e),
            r = new ti();
          return ti.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (at().BinaryWriter)();
          return ti.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (at().BinaryWriter)();
          return ti.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_WaitInitialControllerStateEnumerated_Request";
        }
      }
      class ri extends st.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), st.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return ri.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new ri();
        }
        static deserializeBinary(e) {
          let t = new (at().BinaryReader)(e),
            r = new ri();
          return ri.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (at().BinaryWriter)();
          return ri.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (at().BinaryWriter)();
          return ri.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_WaitInitialControllerStateEnumerated_Response";
        }
      }
      class ii extends st.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ii.prototype.pair_type || _t(ii.M()),
            st.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ii.sm_m ||
              (ii.sm_m = {
                proto: ii,
                fields: {
                  pair_type: { n: 1, br: ot.readEnum, bw: lt.writeEnum },
                  controller_index: {
                    n: 2,
                    br: ot.readUint32,
                    bw: lt.writeUint32,
                  },
                  dongle_index: { n: 3, br: ot.readUint32, bw: lt.writeUint32 },
                },
              }),
            ii.sm_m
          );
        }
        static MBF() {
          return ii.sm_mbf || (ii.sm_mbf = ct(ii.M())), ii.sm_mbf;
        }
        toObject(e = !1) {
          return ii.toObject(e, this);
        }
        static toObject(e, t) {
          return dt(ii.M(), e, t);
        }
        static fromObject(e) {
          return ut(ii.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (at().BinaryReader)(e),
            r = new ii();
          return ii.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return mt(ii.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (at().BinaryWriter)();
          return ii.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          gt(ii.M(), e, t);
        }
        serializeBase64String() {
          var e = new (at().BinaryWriter)();
          return ii.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_ShouldTritonPairInOobe_Response";
        }
      }
      class ni extends st.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ni.prototype.controller_type || _t(ni.M()),
            st.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ni.sm_m ||
              (ni.sm_m = {
                proto: ni,
                fields: {
                  controller_type: {
                    n: 1,
                    br: ot.readInt32,
                    bw: lt.writeInt32,
                  },
                  controller_style: {
                    n: 2,
                    br: ot.readInt32,
                    bw: lt.writeInt32,
                  },
                  source: { n: 3, br: ot.readInt32, bw: lt.writeInt32 },
                  input: { n: 4, br: ot.readInt32, bw: lt.writeInt32 },
                },
              }),
            ni.sm_m
          );
        }
        static MBF() {
          return ni.sm_mbf || (ni.sm_mbf = ct(ni.M())), ni.sm_mbf;
        }
        toObject(e = !1) {
          return ni.toObject(e, this);
        }
        static toObject(e, t) {
          return dt(ni.M(), e, t);
        }
        static fromObject(e) {
          return ut(ni.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (at().BinaryReader)(e),
            r = new ni();
          return ni.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return mt(ni.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (at().BinaryWriter)();
          return ni.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          gt(ni.M(), e, t);
        }
        serializeBase64String() {
          var e = new (at().BinaryWriter)();
          return ni.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CControllerOriginKey";
        }
      }
      class si extends st.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            si.prototype.key || _t(si.M()),
            st.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            si.sm_m ||
              (si.sm_m = {
                proto: si,
                fields: {
                  key: { n: 1, c: ni },
                  localized_string: {
                    n: 2,
                    br: ot.readString,
                    bw: lt.writeString,
                  },
                },
              }),
            si.sm_m
          );
        }
        static MBF() {
          return si.sm_mbf || (si.sm_mbf = ct(si.M())), si.sm_mbf;
        }
        toObject(e = !1) {
          return si.toObject(e, this);
        }
        static toObject(e, t) {
          return dt(si.M(), e, t);
        }
        static fromObject(e) {
          return ut(si.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (at().BinaryReader)(e),
            r = new si();
          return si.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return mt(si.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (at().BinaryWriter)();
          return si.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          gt(si.M(), e, t);
        }
        serializeBase64String() {
          var e = new (at().BinaryWriter)();
          return si.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CControllerAccessibilityString";
        }
      }
      class ai extends st.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), st.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return ai.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new ai();
        }
        static deserializeBinary(e) {
          let t = new (at().BinaryReader)(e),
            r = new ai();
          return ai.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (at().BinaryWriter)();
          return ai.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (at().BinaryWriter)();
          return ai.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_ControllerAccessibilityStrings_Request";
        }
      }
      class oi extends st.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            oi.prototype.strings || _t(oi.M()),
            st.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            oi.sm_m ||
              (oi.sm_m = {
                proto: oi,
                fields: { strings: { n: 1, c: si, r: !0, q: !0 } },
              }),
            oi.sm_m
          );
        }
        static MBF() {
          return oi.sm_mbf || (oi.sm_mbf = ct(oi.M())), oi.sm_mbf;
        }
        toObject(e = !1) {
          return oi.toObject(e, this);
        }
        static toObject(e, t) {
          return dt(oi.M(), e, t);
        }
        static fromObject(e) {
          return ut(oi.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (at().BinaryReader)(e),
            r = new oi();
          return oi.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return mt(oi.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (at().BinaryWriter)();
          return oi.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          gt(oi.M(), e, t);
        }
        serializeBase64String() {
          var e = new (at().BinaryWriter)();
          return oi.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_ControllerAccessibilityStrings_Response";
        }
      }
      class li extends st.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            li.prototype.idx || _t(li.M()),
            st.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            li.sm_m ||
              (li.sm_m = {
                proto: li,
                fields: {
                  idx: { n: 1, br: ot.readUint32, bw: lt.writeUint32 },
                },
              }),
            li.sm_m
          );
        }
        static MBF() {
          return li.sm_mbf || (li.sm_mbf = ct(li.M())), li.sm_mbf;
        }
        toObject(e = !1) {
          return li.toObject(e, this);
        }
        static toObject(e, t) {
          return dt(li.M(), e, t);
        }
        static fromObject(e) {
          return ut(li.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (at().BinaryReader)(e),
            r = new li();
          return li.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return mt(li.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (at().BinaryWriter)();
          return li.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          gt(li.M(), e, t);
        }
        serializeBase64String() {
          var e = new (at().BinaryWriter)();
          return li.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_ControllerPowerMenu_Notification";
        }
      }
      class ci extends st.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ci.prototype.controller_index || _t(ci.M()),
            st.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ci.sm_m ||
              (ci.sm_m = {
                proto: ci,
                fields: {
                  controller_index: {
                    n: 1,
                    br: ot.readUint32,
                    bw: lt.writeUint32,
                  },
                },
              }),
            ci.sm_m
          );
        }
        static MBF() {
          return ci.sm_mbf || (ci.sm_mbf = ct(ci.M())), ci.sm_mbf;
        }
        toObject(e = !1) {
          return ci.toObject(e, this);
        }
        static toObject(e, t) {
          return dt(ci.M(), e, t);
        }
        static fromObject(e) {
          return ut(ci.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (at().BinaryReader)(e),
            r = new ci();
          return ci.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return mt(ci.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (at().BinaryWriter)();
          return ci.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          gt(ci.M(), e, t);
        }
        serializeBase64String() {
          var e = new (at().BinaryWriter)();
          return ci.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_ControllerDisconnected_Notification";
        }
      }
      class ui extends st.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ui.prototype.controller_index || _t(ui.M()),
            st.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ui.sm_m ||
              (ui.sm_m = {
                proto: ui,
                fields: {
                  controller_index: {
                    n: 1,
                    br: ot.readUint32,
                    bw: lt.writeUint32,
                  },
                },
              }),
            ui.sm_m
          );
        }
        static MBF() {
          return ui.sm_mbf || (ui.sm_mbf = ct(ui.M())), ui.sm_mbf;
        }
        toObject(e = !1) {
          return ui.toObject(e, this);
        }
        static toObject(e, t) {
          return dt(ui.M(), e, t);
        }
        static fromObject(e) {
          return ut(ui.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (at().BinaryReader)(e),
            r = new ui();
          return ui.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return mt(ui.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (at().BinaryWriter)();
          return ui.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          gt(ui.M(), e, t);
        }
        serializeBase64String() {
          var e = new (at().BinaryWriter)();
          return ui.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_GetTritonPairingInfo_Request";
        }
      }
      class di extends st.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            di.prototype.slot || _t(di.M()),
            st.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            di.sm_m ||
              (di.sm_m = {
                proto: di,
                fields: {
                  slot: { n: 1, c: mi, r: !0, q: !0 },
                  connection_type: { n: 2, br: ot.readEnum, bw: lt.writeEnum },
                },
              }),
            di.sm_m
          );
        }
        static MBF() {
          return di.sm_mbf || (di.sm_mbf = ct(di.M())), di.sm_mbf;
        }
        toObject(e = !1) {
          return di.toObject(e, this);
        }
        static toObject(e, t) {
          return dt(di.M(), e, t);
        }
        static fromObject(e) {
          return ut(di.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (at().BinaryReader)(e),
            r = new di();
          return di.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return mt(di.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (at().BinaryWriter)();
          return di.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          gt(di.M(), e, t);
        }
        serializeBase64String() {
          var e = new (at().BinaryWriter)();
          return di.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_GetTritonPairingInfo_Response";
        }
      }
      class mi extends st.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            mi.prototype.serial_number || _t(mi.M()),
            st.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            mi.sm_m ||
              (mi.sm_m = {
                proto: mi,
                fields: {
                  serial_number: {
                    n: 1,
                    br: ot.readString,
                    bw: lt.writeString,
                  },
                  active: { n: 2, br: ot.readBool, bw: lt.writeBool },
                  type: { n: 3, br: ot.readEnum, bw: lt.writeEnum },
                },
              }),
            mi.sm_m
          );
        }
        static MBF() {
          return mi.sm_mbf || (mi.sm_mbf = ct(mi.M())), mi.sm_mbf;
        }
        toObject(e = !1) {
          return mi.toObject(e, this);
        }
        static toObject(e, t) {
          return dt(mi.M(), e, t);
        }
        static fromObject(e) {
          return ut(mi.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (at().BinaryReader)(e),
            r = new mi();
          return mi.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return mt(mi.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (at().BinaryWriter)();
          return mi.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          gt(mi.M(), e, t);
        }
        serializeBase64String() {
          var e = new (at().BinaryWriter)();
          return mi.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_GetTritonPairingInfo_Response_Slot";
        }
      }
      class gi extends st.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            gi.prototype.controller_index || _t(gi.M()),
            st.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            gi.sm_m ||
              (gi.sm_m = {
                proto: gi,
                fields: {
                  controller_index: {
                    n: 1,
                    br: ot.readUint32,
                    bw: lt.writeUint32,
                  },
                  slot_index: { n: 2, br: ot.readUint32, bw: lt.writeUint32 },
                },
              }),
            gi.sm_m
          );
        }
        static MBF() {
          return gi.sm_mbf || (gi.sm_mbf = ct(gi.M())), gi.sm_mbf;
        }
        toObject(e = !1) {
          return gi.toObject(e, this);
        }
        static toObject(e, t) {
          return dt(gi.M(), e, t);
        }
        static fromObject(e) {
          return ut(gi.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (at().BinaryReader)(e),
            r = new gi();
          return gi.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return mt(gi.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (at().BinaryWriter)();
          return gi.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          gt(gi.M(), e, t);
        }
        serializeBase64String() {
          var e = new (at().BinaryWriter)();
          return gi.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_ForgetTritonPairingBond_Request";
        }
      }
      class _i extends st.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), st.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return _i.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new _i();
        }
        static deserializeBinary(e) {
          let t = new (at().BinaryReader)(e),
            r = new _i();
          return _i.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (at().BinaryWriter)();
          return _i.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (at().BinaryWriter)();
          return _i.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_ForgetTritonPairingBond_Response";
        }
      }
      class hi extends st.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            hi.prototype.dongle_index || _t(hi.M()),
            st.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            hi.sm_m ||
              (hi.sm_m = {
                proto: hi,
                fields: {
                  dongle_index: { n: 1, br: ot.readUint32, bw: lt.writeUint32 },
                },
              }),
            hi.sm_m
          );
        }
        static MBF() {
          return hi.sm_mbf || (hi.sm_mbf = ct(hi.M())), hi.sm_mbf;
        }
        toObject(e = !1) {
          return hi.toObject(e, this);
        }
        static toObject(e, t) {
          return dt(hi.M(), e, t);
        }
        static fromObject(e) {
          return ut(hi.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (at().BinaryReader)(e),
            r = new hi();
          return hi.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return mt(hi.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (at().BinaryWriter)();
          return hi.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          gt(hi.M(), e, t);
        }
        serializeBase64String() {
          var e = new (at().BinaryWriter)();
          return hi.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_ForgetDonglePairingBond_Request";
        }
      }
      class bi extends st.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), st.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return bi.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new bi();
        }
        static deserializeBinary(e) {
          let t = new (at().BinaryReader)(e),
            r = new bi();
          return bi.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (at().BinaryWriter)();
          return bi.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (at().BinaryWriter)();
          return bi.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_ForgetDonglePairingBond_Response";
        }
      }
      class pi extends st.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            pi.prototype.serial_number || _t(pi.M()),
            st.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            pi.sm_m ||
              (pi.sm_m = {
                proto: pi,
                fields: {
                  serial_number: {
                    n: 1,
                    br: ot.readString,
                    bw: lt.writeString,
                  },
                },
              }),
            pi.sm_m
          );
        }
        static MBF() {
          return pi.sm_mbf || (pi.sm_mbf = ct(pi.M())), pi.sm_mbf;
        }
        toObject(e = !1) {
          return pi.toObject(e, this);
        }
        static toObject(e, t) {
          return dt(pi.M(), e, t);
        }
        static fromObject(e) {
          return ut(pi.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (at().BinaryReader)(e),
            r = new pi();
          return pi.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return mt(pi.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (at().BinaryWriter)();
          return pi.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          gt(pi.M(), e, t);
        }
        serializeBase64String() {
          var e = new (at().BinaryWriter)();
          return pi.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_GetControllerName_Request";
        }
      }
      class fi extends st.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            fi.prototype.controller_name || _t(fi.M()),
            st.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            fi.sm_m ||
              (fi.sm_m = {
                proto: fi,
                fields: {
                  controller_name: {
                    n: 1,
                    br: ot.readString,
                    bw: lt.writeString,
                  },
                },
              }),
            fi.sm_m
          );
        }
        static MBF() {
          return fi.sm_mbf || (fi.sm_mbf = ct(fi.M())), fi.sm_mbf;
        }
        toObject(e = !1) {
          return fi.toObject(e, this);
        }
        static toObject(e, t) {
          return dt(fi.M(), e, t);
        }
        static fromObject(e) {
          return ut(fi.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (at().BinaryReader)(e),
            r = new fi();
          return fi.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return mt(fi.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (at().BinaryWriter)();
          return fi.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          gt(fi.M(), e, t);
        }
        serializeBase64String() {
          var e = new (at().BinaryWriter)();
          return fi.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_GetControllerName_Response";
        }
      }
      class Bi extends st.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Bi.prototype.controller_index || _t(Bi.M()),
            st.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Bi.sm_m ||
              (Bi.sm_m = {
                proto: Bi,
                fields: {
                  controller_index: {
                    n: 1,
                    br: ot.readUint32,
                    bw: lt.writeUint32,
                  },
                  enable: { n: 2, br: ot.readBool, bw: lt.writeBool },
                },
              }),
            Bi.sm_m
          );
        }
        static MBF() {
          return Bi.sm_mbf || (Bi.sm_mbf = ct(Bi.M())), Bi.sm_mbf;
        }
        toObject(e = !1) {
          return Bi.toObject(e, this);
        }
        static toObject(e, t) {
          return dt(Bi.M(), e, t);
        }
        static fromObject(e) {
          return ut(Bi.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (at().BinaryReader)(e),
            r = new Bi();
          return Bi.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return mt(Bi.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (at().BinaryWriter)();
          return Bi.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          gt(Bi.M(), e, t);
        }
        serializeBase64String() {
          var e = new (at().BinaryWriter)();
          return Bi.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_EnableDockedInput_Request";
        }
      }
      class wi extends st.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), st.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return wi.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new wi();
        }
        static deserializeBinary(e) {
          let t = new (at().BinaryReader)(e),
            r = new wi();
          return wi.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (at().BinaryWriter)();
          return wi.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (at().BinaryWriter)();
          return wi.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_EnableDockedInput_Response";
        }
      }
      class yi extends st.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            yi.prototype.controller_index || _t(yi.M()),
            st.Message.initialize(this, e, 0, -1, [18], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            yi.sm_m ||
              (yi.sm_m = {
                proto: yi,
                fields: {
                  controller_index: {
                    n: 1,
                    br: ot.readUint32,
                    bw: lt.writeUint32,
                  },
                  initialized: { n: 2, br: ot.readBool, bw: lt.writeBool },
                  controller_type: {
                    n: 3,
                    br: ot.readUint32,
                    bw: lt.writeUint32,
                  },
                  controller_style: {
                    n: 4,
                    br: ot.readUint32,
                    bw: lt.writeUint32,
                  },
                  xinput_index: { n: 5, br: ot.readInt32, bw: lt.writeInt32 },
                  is_wireless_steam_dongle: {
                    n: 6,
                    br: ot.readBool,
                    bw: lt.writeBool,
                  },
                  vendor_id: { n: 7, br: ot.readUint32, bw: lt.writeUint32 },
                  product_id: { n: 8, br: ot.readUint32, bw: lt.writeUint32 },
                  capabilities: {
                    n: 9,
                    br: ot.readUint64String,
                    bw: lt.writeUint64String,
                  },
                  firmware_version: {
                    n: 10,
                    br: ot.readUint32,
                    bw: lt.writeUint32,
                  },
                  firmware_build_time: {
                    n: 11,
                    br: ot.readString,
                    bw: lt.writeString,
                  },
                  serial_number: {
                    n: 12,
                    br: ot.readString,
                    bw: lt.writeString,
                  },
                  cpu_id: { n: 13, br: ot.readString, bw: lt.writeString },
                  name: { n: 14, br: ot.readString, bw: lt.writeString },
                  is_remote_device: {
                    n: 15,
                    br: ot.readBool,
                    bw: lt.writeBool,
                  },
                  is_bluetooth: { n: 16, br: ot.readBool, bw: lt.writeBool },
                  has_touchscreen: { n: 17, br: ot.readBool, bw: lt.writeBool },
                  mac_addr: {
                    n: 18,
                    r: !0,
                    q: !0,
                    br: ot.readString,
                    bw: lt.writeRepeatedString,
                  },
                  battery_level: {
                    n: 19,
                    br: ot.readUint32,
                    bw: lt.writeUint32,
                  },
                  is_charging: { n: 20, br: ot.readBool, bw: lt.writeBool },
                  led_brightness: {
                    n: 21,
                    br: ot.readFloat,
                    bw: lt.writeFloat,
                  },
                  led_saturation: {
                    n: 22,
                    br: ot.readFloat,
                    bw: lt.writeFloat,
                  },
                  turn_on_sound: { n: 23, br: ot.readInt32, bw: lt.writeInt32 },
                  turn_off_sound: {
                    n: 24,
                    br: ot.readInt32,
                    bw: lt.writeInt32,
                  },
                  led_red: { n: 25, br: ot.readInt32, bw: lt.writeInt32 },
                  led_green: { n: 26, br: ot.readInt32, bw: lt.writeInt32 },
                  led_blue: { n: 27, br: ot.readInt32, bw: lt.writeInt32 },
                  deadzone_left_stick: {
                    n: 28,
                    br: ot.readInt32,
                    bw: lt.writeInt32,
                  },
                  deadzone_right_stick: {
                    n: 29,
                    br: ot.readInt32,
                    bw: lt.writeInt32,
                  },
                  haptics_enabled: { n: 30, br: ot.readBool, bw: lt.writeBool },
                  gyro_sw_antidrift_enabled: {
                    n: 31,
                    br: ot.readBool,
                    bw: lt.writeBool,
                  },
                  gyro_one_euro_filter_enabled: {
                    n: 32,
                    br: ot.readBool,
                    bw: lt.writeBool,
                  },
                  haptic_strength_left: {
                    n: 33,
                    br: ot.readInt32,
                    bw: lt.writeInt32,
                  },
                  haptic_strength_right: {
                    n: 34,
                    br: ot.readInt32,
                    bw: lt.writeInt32,
                  },
                  pad_pressure_curve_left: {
                    n: 35,
                    br: ot.readFloat,
                    bw: lt.writeFloat,
                  },
                  pad_pressure_curve_right: {
                    n: 36,
                    br: ot.readFloat,
                    bw: lt.writeFloat,
                  },
                  left_stick_touch_disable_lpad: {
                    n: 37,
                    br: ot.readBool,
                    bw: lt.writeBool,
                  },
                  right_stick_touch_disable_rpad: {
                    n: 38,
                    br: ot.readBool,
                    bw: lt.writeBool,
                  },
                  player_slot_led_setting: {
                    n: 39,
                    br: ot.readInt32,
                    bw: lt.writeInt32,
                  },
                  has_nintendo_layout: {
                    n: 40,
                    br: ot.readBool,
                    bw: lt.writeBool,
                  },
                  has_reversed_layout: {
                    n: 41,
                    br: ot.readBool,
                    bw: lt.writeBool,
                  },
                  has_universal_face_button_glyphs: {
                    n: 42,
                    br: ot.readBool,
                    bw: lt.writeBool,
                  },
                  gyro_stationary_tolerance: {
                    n: 43,
                    br: ot.readFloat,
                    bw: lt.writeFloat,
                  },
                  accel_stationary_tolerance: {
                    n: 44,
                    br: ot.readFloat,
                    bw: lt.writeFloat,
                  },
                  aux_capsense_threshold: {
                    n: 45,
                    br: ot.readInt32,
                    bw: lt.writeInt32,
                  },
                  aux_capsense_hysterisis: {
                    n: 46,
                    br: ot.readInt32,
                    bw: lt.writeInt32,
                  },
                  rumble_setting: {
                    n: 47,
                    br: ot.readInt32,
                    bw: lt.writeInt32,
                  },
                  triton_gyro_hw_cal: {
                    n: 48,
                    br: ot.readInt32,
                    bw: lt.writeInt32,
                  },
                  use_gyro_sw_biases: {
                    n: 49,
                    br: ot.readBool,
                    bw: lt.writeBool,
                  },
                  rumble_intensity: {
                    n: 50,
                    br: ot.readInt32,
                    bw: lt.writeInt32,
                  },
                },
              }),
            yi.sm_m
          );
        }
        static MBF() {
          return yi.sm_mbf || (yi.sm_mbf = ct(yi.M())), yi.sm_mbf;
        }
        toObject(e = !1) {
          return yi.toObject(e, this);
        }
        static toObject(e, t) {
          return dt(yi.M(), e, t);
        }
        static fromObject(e) {
          return ut(yi.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (at().BinaryReader)(e),
            r = new yi();
          return yi.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return mt(yi.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (at().BinaryWriter)();
          return yi.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          gt(yi.M(), e, t);
        }
        serializeBase64String() {
          var e = new (at().BinaryWriter)();
          return yi.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_RawControllerDetailItem";
        }
      }
      class Si extends st.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), st.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Si.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Si();
        }
        static deserializeBinary(e) {
          let t = new (at().BinaryReader)(e),
            r = new Si();
          return Si.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (at().BinaryWriter)();
          return Si.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (at().BinaryWriter)();
          return Si.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_ControllerListChanged_Notification";
        }
      }
      class vi extends st.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), st.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return vi.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new vi();
        }
        static deserializeBinary(e) {
          let t = new (at().BinaryReader)(e),
            r = new vi();
          return vi.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (at().BinaryWriter)();
          return vi.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (at().BinaryWriter)();
          return vi.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_GetControllerList_Request";
        }
      }
      class Mi extends st.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Mi.prototype.controllers || _t(Mi.M()),
            st.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Mi.sm_m ||
              (Mi.sm_m = {
                proto: Mi,
                fields: { controllers: { n: 1, c: yi, r: !0, q: !0 } },
              }),
            Mi.sm_m
          );
        }
        static MBF() {
          return Mi.sm_mbf || (Mi.sm_mbf = ct(Mi.M())), Mi.sm_mbf;
        }
        toObject(e = !1) {
          return Mi.toObject(e, this);
        }
        static toObject(e, t) {
          return dt(Mi.M(), e, t);
        }
        static fromObject(e) {
          return ut(Mi.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (at().BinaryReader)(e),
            r = new Mi();
          return Mi.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return mt(Mi.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (at().BinaryWriter)();
          return Mi.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          gt(Mi.M(), e, t);
        }
        serializeBase64String() {
          var e = new (at().BinaryWriter)();
          return Mi.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_GetControllerList_Response";
        }
      }
      class Ci extends st.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), st.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Ci.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Ci();
        }
        static deserializeBinary(e) {
          let t = new (at().BinaryReader)(e),
            r = new Ci();
          return Ci.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (at().BinaryWriter)();
          return Ci.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (at().BinaryWriter)();
          return Ci.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_FirstSteamControllerConnection_Notification";
        }
      }
      class Ri extends st.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ri.prototype.period_ms || _t(Ri.M()),
            st.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ri.sm_m ||
              (Ri.sm_m = {
                proto: Ri,
                fields: {
                  period_ms: { n: 1, br: ot.readInt32, bw: lt.writeInt32 },
                  packets_sent: { n: 2, br: ot.readUint32, bw: lt.writeUint32 },
                  packet_retransmissions: {
                    n: 3,
                    br: ot.readUint32,
                    bw: lt.writeUint32,
                  },
                  interval_max_ms: {
                    n: 4,
                    br: ot.readUint32,
                    bw: lt.writeUint32,
                  },
                  rssi_measure: { n: 5, br: ot.readInt32, bw: lt.writeInt32 },
                  reason: { n: 6, br: ot.readUint32, bw: lt.writeUint32 },
                  rf_channel: { n: 7, br: ot.readUint32, bw: lt.writeUint32 },
                  backup_channel: {
                    n: 8,
                    br: ot.readUint32,
                    bw: lt.writeUint32,
                  },
                },
              }),
            Ri.sm_m
          );
        }
        static MBF() {
          return Ri.sm_mbf || (Ri.sm_mbf = ct(Ri.M())), Ri.sm_mbf;
        }
        toObject(e = !1) {
          return Ri.toObject(e, this);
        }
        static toObject(e, t) {
          return dt(Ri.M(), e, t);
        }
        static fromObject(e) {
          return ut(Ri.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (at().BinaryReader)(e),
            r = new Ri();
          return Ri.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return mt(Ri.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (at().BinaryWriter)();
          return Ri.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          gt(Ri.M(), e, t);
        }
        serializeBase64String() {
          var e = new (at().BinaryWriter)();
          return Ri.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CTritonQosStatus";
        }
      }
      class Ti extends st.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ti.prototype.controller_index || _t(Ti.M()),
            st.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ti.sm_m ||
              (Ti.sm_m = {
                proto: Ti,
                fields: {
                  controller_index: {
                    n: 1,
                    br: ot.readUint32,
                    bw: lt.writeUint32,
                  },
                  status: { n: 2, c: Ri },
                },
              }),
            Ti.sm_m
          );
        }
        static MBF() {
          return Ti.sm_mbf || (Ti.sm_mbf = ct(Ti.M())), Ti.sm_mbf;
        }
        toObject(e = !1) {
          return Ti.toObject(e, this);
        }
        static toObject(e, t) {
          return dt(Ti.M(), e, t);
        }
        static fromObject(e) {
          return ut(Ti.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (at().BinaryReader)(e),
            r = new Ti();
          return Ti.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return mt(Ti.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (at().BinaryWriter)();
          return Ti.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          gt(Ti.M(), e, t);
        }
        serializeBase64String() {
          var e = new (at().BinaryWriter)();
          return Ti.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_TritonQos_Notification";
        }
      }
      class Ii extends st.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ii.prototype.controller_index || _t(Ii.M()),
            st.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ii.sm_m ||
              (Ii.sm_m = {
                proto: Ii,
                fields: {
                  controller_index: {
                    n: 1,
                    br: ot.readUint32,
                    bw: lt.writeUint32,
                  },
                  enable: { n: 2, br: ot.readBool, bw: lt.writeBool },
                },
              }),
            Ii.sm_m
          );
        }
        static MBF() {
          return Ii.sm_mbf || (Ii.sm_mbf = ct(Ii.M())), Ii.sm_mbf;
        }
        toObject(e = !1) {
          return Ii.toObject(e, this);
        }
        static toObject(e, t) {
          return dt(Ii.M(), e, t);
        }
        static fromObject(e) {
          return ut(Ii.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (at().BinaryReader)(e),
            r = new Ii();
          return Ii.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return mt(Ii.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (at().BinaryWriter)();
          return Ii.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          gt(Ii.M(), e, t);
        }
        serializeBase64String() {
          var e = new (at().BinaryWriter)();
          return Ii.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_EnableQosStatus_Request";
        }
      }
      class Fi extends st.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), st.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Fi.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Fi();
        }
        static deserializeBinary(e) {
          let t = new (at().BinaryReader)(e),
            r = new Fi();
          return Fi.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (at().BinaryWriter)();
          return Fi.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (at().BinaryWriter)();
          return Fi.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_EnableQosStatus_Response";
        }
      }
      class Ai extends st.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ai.prototype.controller_index || _t(Ai.M()),
            st.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ai.sm_m ||
              (Ai.sm_m = {
                proto: Ai,
                fields: {
                  controller_index: {
                    n: 1,
                    br: ot.readUint32,
                    bw: lt.writeUint32,
                  },
                  battery_level: {
                    n: 2,
                    br: ot.readUint32,
                    bw: lt.writeUint32,
                  },
                  charging: { n: 3, br: ot.readBool, bw: lt.writeBool },
                },
              }),
            Ai.sm_m
          );
        }
        static MBF() {
          return Ai.sm_mbf || (Ai.sm_mbf = ct(Ai.M())), Ai.sm_mbf;
        }
        toObject(e = !1) {
          return Ai.toObject(e, this);
        }
        static toObject(e, t) {
          return dt(Ai.M(), e, t);
        }
        static fromObject(e) {
          return ut(Ai.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (at().BinaryReader)(e),
            r = new Ai();
          return Ai.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return mt(Ai.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (at().BinaryWriter)();
          return Ai.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          gt(Ai.M(), e, t);
        }
        serializeBase64String() {
          var e = new (at().BinaryWriter)();
          return Ai.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_ControllerBatteryState_Notification";
        }
      }
      var Ni;
      !(function (e) {
        (e.NotifyButtonStateChangedHandler = {
          name: "SteamInputManager.NotifyButtonStateChanged#1",
          request: Ar,
        }),
          (e.RegisterForNotifyButtonStateChanged = function (t, r) {
            return null == (r = r || Fr().GetDefaultHandlerRegistry())
              ? (console.error(
                  "Transport Error: no default registry is available for request",
                ),
                null)
              : r.RegisterServiceNotificationHandler(
                  e.NotifyButtonStateChangedHandler,
                  t,
                );
          }),
          (e.NotifyButtonStateChanged = function (e, t) {
            return null == (t = t || Fr().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamInputManager.NotifyButtonStateChanged#1",
                  Tr(Ar, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SendMsgNotifyButtonStateChanged = function (e, t) {
            return null == (t = t || Fr().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamInputManager.NotifyButtonStateChanged#1",
                  Tr(Ar, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.NotifyAxesStateChangedHandler = {
            name: "SteamInputManager.NotifyAxesStateChanged#1",
            request: zr,
          }),
          (e.RegisterForNotifyAxesStateChanged = function (t, r) {
            return null == (r = r || Fr().GetDefaultHandlerRegistry())
              ? (console.error(
                  "Transport Error: no default registry is available for request",
                ),
                null)
              : r.RegisterServiceNotificationHandler(
                  e.NotifyAxesStateChangedHandler,
                  t,
                );
          }),
          (e.NotifyAxesStateChanged = function (e, t) {
            return null == (t = t || Fr().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamInputManager.NotifyAxesStateChanged#1",
                  Tr(zr, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SendMsgNotifyAxesStateChanged = function (e, t) {
            return null == (t = t || Fr().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamInputManager.NotifyAxesStateChanged#1",
                  Tr(zr, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.NotifyGyroQuaternionStateChangedHandler = {
            name: "SteamInputManager.NotifyGyroQuaternionStateChanged#1",
            request: Pr,
          }),
          (e.RegisterForNotifyGyroQuaternionStateChanged = function (t, r) {
            return null == (r = r || Fr().GetDefaultHandlerRegistry())
              ? (console.error(
                  "Transport Error: no default registry is available for request",
                ),
                null)
              : r.RegisterServiceNotificationHandler(
                  e.NotifyGyroQuaternionStateChangedHandler,
                  t,
                );
          }),
          (e.NotifyGyroQuaternionStateChanged = function (e, t) {
            return null == (t = t || Fr().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamInputManager.NotifyGyroQuaternionStateChanged#1",
                  Tr(Pr, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SendMsgNotifyGyroQuaternionStateChanged = function (e, t) {
            return null == (t = t || Fr().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamInputManager.NotifyGyroQuaternionStateChanged#1",
                  Tr(Pr, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.NotifyGyroSpeedStateChangedHandler = {
            name: "SteamInputManager.NotifyGyroSpeedStateChanged#1",
            request: Wr,
          }),
          (e.RegisterForNotifyGyroSpeedStateChanged = function (t, r) {
            return null == (r = r || Fr().GetDefaultHandlerRegistry())
              ? (console.error(
                  "Transport Error: no default registry is available for request",
                ),
                null)
              : r.RegisterServiceNotificationHandler(
                  e.NotifyGyroSpeedStateChangedHandler,
                  t,
                );
          }),
          (e.NotifyGyroSpeedStateChanged = function (e, t) {
            return null == (t = t || Fr().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamInputManager.NotifyGyroSpeedStateChanged#1",
                  Tr(Wr, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SendMsgNotifyGyroSpeedStateChanged = function (e, t) {
            return null == (t = t || Fr().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamInputManager.NotifyGyroSpeedStateChanged#1",
                  Tr(Wr, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.NotifyGyroAccelerometerStateChangedHandler = {
            name: "SteamInputManager.NotifyGyroAccelerometerStateChanged#1",
            request: Gr,
          }),
          (e.RegisterForNotifyGyroAccelerometerStateChanged = function (t, r) {
            return null == (r = r || Fr().GetDefaultHandlerRegistry())
              ? (console.error(
                  "Transport Error: no default registry is available for request",
                ),
                null)
              : r.RegisterServiceNotificationHandler(
                  e.NotifyGyroAccelerometerStateChangedHandler,
                  t,
                );
          }),
          (e.NotifyGyroAccelerometerStateChanged = function (e, t) {
            return null == (t = t || Fr().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamInputManager.NotifyGyroAccelerometerStateChanged#1",
                  Tr(Gr, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SendMsgNotifyGyroAccelerometerStateChanged = function (e, t) {
            return null == (t = t || Fr().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamInputManager.NotifyGyroAccelerometerStateChanged#1",
                  Tr(Gr, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.NotifyGyroCalibrationStateChangedHandler = {
            name: "SteamInputManager.NotifyGyroCalibrationStateChanged#1",
            request: Ur,
          }),
          (e.RegisterForNotifyGyroCalibrationStateChanged = function (t, r) {
            return null == (r = r || Fr().GetDefaultHandlerRegistry())
              ? (console.error(
                  "Transport Error: no default registry is available for request",
                ),
                null)
              : r.RegisterServiceNotificationHandler(
                  e.NotifyGyroCalibrationStateChangedHandler,
                  t,
                );
          }),
          (e.NotifyGyroCalibrationStateChanged = function (e, t) {
            return null == (t = t || Fr().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamInputManager.NotifyGyroCalibrationStateChanged#1",
                  Tr(Ur, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SendMsgNotifyGyroCalibrationStateChanged = function (e, t) {
            return null == (t = t || Fr().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamInputManager.NotifyGyroCalibrationStateChanged#1",
                  Tr(Ur, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.NotifyControllerPowerMenuHandler = {
            name: "SteamInputManager.NotifyControllerPowerMenu#1",
            request: li,
          }),
          (e.RegisterForNotifyControllerPowerMenu = function (t, r) {
            return null == (r = r || Fr().GetDefaultHandlerRegistry())
              ? (console.error(
                  "Transport Error: no default registry is available for request",
                ),
                null)
              : r.RegisterServiceNotificationHandler(
                  e.NotifyControllerPowerMenuHandler,
                  t,
                );
          }),
          (e.NotifyControllerPowerMenu = function (e, t) {
            return null == (t = t || Fr().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamInputManager.NotifyControllerPowerMenu#1",
                  Tr(li, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SendMsgNotifyControllerPowerMenu = function (e, t) {
            return null == (t = t || Fr().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamInputManager.NotifyControllerPowerMenu#1",
                  Tr(li, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.NotifyUnpairedTritonPluggedInHandler = {
            name: "SteamInputManager.NotifyUnpairedTritonPluggedIn#1",
            request: qr,
          }),
          (e.RegisterForNotifyUnpairedTritonPluggedIn = function (t, r) {
            return null == (r = r || Fr().GetDefaultHandlerRegistry())
              ? (console.error(
                  "Transport Error: no default registry is available for request",
                ),
                null)
              : r.RegisterServiceNotificationHandler(
                  e.NotifyUnpairedTritonPluggedInHandler,
                  t,
                );
          }),
          (e.NotifyUnpairedTritonPluggedIn = function (e, t) {
            return null == (t = t || Fr().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamInputManager.NotifyUnpairedTritonPluggedIn#1",
                  Tr(qr, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SendMsgNotifyUnpairedTritonPluggedIn = function (e, t) {
            return null == (t = t || Fr().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamInputManager.NotifyUnpairedTritonPluggedIn#1",
                  Tr(qr, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.NotifyUnpairedTritonDockedHandler = {
            name: "SteamInputManager.NotifyUnpairedTritonDocked#1",
            request: $r,
          }),
          (e.RegisterForNotifyUnpairedTritonDocked = function (t, r) {
            return null == (r = r || Fr().GetDefaultHandlerRegistry())
              ? (console.error(
                  "Transport Error: no default registry is available for request",
                ),
                null)
              : r.RegisterServiceNotificationHandler(
                  e.NotifyUnpairedTritonDockedHandler,
                  t,
                );
          }),
          (e.NotifyUnpairedTritonDocked = function (e, t) {
            return null == (t = t || Fr().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamInputManager.NotifyUnpairedTritonDocked#1",
                  Tr($r, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SendMsgNotifyUnpairedTritonDocked = function (e, t) {
            return null == (t = t || Fr().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamInputManager.NotifyUnpairedTritonDocked#1",
                  Tr($r, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.NotifyTritonUndockedHandler = {
            name: "SteamInputManager.NotifyTritonUndocked#1",
            request: Qr,
          }),
          (e.RegisterForNotifyTritonUndocked = function (t, r) {
            return null == (r = r || Fr().GetDefaultHandlerRegistry())
              ? (console.error(
                  "Transport Error: no default registry is available for request",
                ),
                null)
              : r.RegisterServiceNotificationHandler(
                  e.NotifyTritonUndockedHandler,
                  t,
                );
          }),
          (e.NotifyTritonUndocked = function (e, t) {
            return null == (t = t || Fr().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamInputManager.NotifyTritonUndocked#1",
                  Tr(Qr, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SendMsgNotifyTritonUndocked = function (e, t) {
            return null == (t = t || Fr().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamInputManager.NotifyTritonUndocked#1",
                  Tr(Qr, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.NotifySteamDonglesChangedHandler = {
            name: "SteamInputManager.NotifySteamDonglesChanged#1",
            request: Kr,
          }),
          (e.RegisterForNotifySteamDonglesChanged = function (t, r) {
            return null == (r = r || Fr().GetDefaultHandlerRegistry())
              ? (console.error(
                  "Transport Error: no default registry is available for request",
                ),
                null)
              : r.RegisterServiceNotificationHandler(
                  e.NotifySteamDonglesChangedHandler,
                  t,
                );
          }),
          (e.NotifySteamDonglesChanged = function (e, t) {
            return null == (t = t || Fr().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamInputManager.NotifySteamDonglesChanged#1",
                  Tr(Kr, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SendMsgNotifySteamDonglesChanged = function (e, t) {
            return null == (t = t || Fr().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamInputManager.NotifySteamDonglesChanged#1",
                  Tr(Kr, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.NotifyControllerDisconnectedHandler = {
            name: "SteamInputManager.NotifyControllerDisconnected#1",
            request: ci,
          }),
          (e.RegisterForNotifyControllerDisconnected = function (t, r) {
            return null == (r = r || Fr().GetDefaultHandlerRegistry())
              ? (console.error(
                  "Transport Error: no default registry is available for request",
                ),
                null)
              : r.RegisterServiceNotificationHandler(
                  e.NotifyControllerDisconnectedHandler,
                  t,
                );
          }),
          (e.NotifyControllerDisconnected = function (e, t) {
            return null == (t = t || Fr().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamInputManager.NotifyControllerDisconnected#1",
                  Tr(ci, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SendMsgNotifyControllerDisconnected = function (e, t) {
            return null == (t = t || Fr().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamInputManager.NotifyControllerDisconnected#1",
                  Tr(ci, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.NotifyControllerPairingChangedHandler = {
            name: "SteamInputManager.NotifyControllerPairingChanged#1",
            request: Yr,
          }),
          (e.RegisterForNotifyControllerPairingChanged = function (t, r) {
            return null == (r = r || Fr().GetDefaultHandlerRegistry())
              ? (console.error(
                  "Transport Error: no default registry is available for request",
                ),
                null)
              : r.RegisterServiceNotificationHandler(
                  e.NotifyControllerPairingChangedHandler,
                  t,
                );
          }),
          (e.NotifyControllerPairingChanged = function (e, t) {
            return null == (t = t || Fr().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamInputManager.NotifyControllerPairingChanged#1",
                  Tr(Yr, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SendMsgNotifyControllerPairingChanged = function (e, t) {
            return null == (t = t || Fr().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamInputManager.NotifyControllerPairingChanged#1",
                  Tr(Yr, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.NotifyControllerListChangedHandler = {
            name: "SteamInputManager.NotifyControllerListChanged#1",
            request: Si,
          }),
          (e.RegisterForNotifyControllerListChanged = function (t, r) {
            return null == (r = r || Fr().GetDefaultHandlerRegistry())
              ? (console.error(
                  "Transport Error: no default registry is available for request",
                ),
                null)
              : r.RegisterServiceNotificationHandler(
                  e.NotifyControllerListChangedHandler,
                  t,
                );
          }),
          (e.NotifyControllerListChanged = function (e, t) {
            return null == (t = t || Fr().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamInputManager.NotifyControllerListChanged#1",
                  Tr(Si, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SendMsgNotifyControllerListChanged = function (e, t) {
            return null == (t = t || Fr().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamInputManager.NotifyControllerListChanged#1",
                  Tr(Si, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.NotifyControllerBatteryStateHandler = {
            name: "SteamInputManager.NotifyControllerBatteryState#1",
            request: Ai,
          }),
          (e.RegisterForNotifyControllerBatteryState = function (t, r) {
            return null == (r = r || Fr().GetDefaultHandlerRegistry())
              ? (console.error(
                  "Transport Error: no default registry is available for request",
                ),
                null)
              : r.RegisterServiceNotificationHandler(
                  e.NotifyControllerBatteryStateHandler,
                  t,
                );
          }),
          (e.NotifyControllerBatteryState = function (e, t) {
            return null == (t = t || Fr().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamInputManager.NotifyControllerBatteryState#1",
                  Tr(Ai, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SendMsgNotifyControllerBatteryState = function (e, t) {
            return null == (t = t || Fr().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamInputManager.NotifyControllerBatteryState#1",
                  Tr(Ai, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.NotifyFirstSteamControllerConnectionHandler = {
            name: "SteamInputManager.NotifyFirstSteamControllerConnection#1",
            request: Ci,
          }),
          (e.RegisterForNotifyFirstSteamControllerConnection = function (t, r) {
            return null == (r = r || Fr().GetDefaultHandlerRegistry())
              ? (console.error(
                  "Transport Error: no default registry is available for request",
                ),
                null)
              : r.RegisterServiceNotificationHandler(
                  e.NotifyFirstSteamControllerConnectionHandler,
                  t,
                );
          }),
          (e.NotifyFirstSteamControllerConnection = function (e, t) {
            return null == (t = t || Fr().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamInputManager.NotifyFirstSteamControllerConnection#1",
                  Tr(Ci, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SendMsgNotifyFirstSteamControllerConnection = function (e, t) {
            return null == (t = t || Fr().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamInputManager.NotifyFirstSteamControllerConnection#1",
                  Tr(Ci, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.NotifyTritonQosHandler = {
            name: "SteamInputManager.NotifyTritonQos#1",
            request: Ti,
          }),
          (e.RegisterForNotifyTritonQos = function (t, r) {
            return null == (r = r || Fr().GetDefaultHandlerRegistry())
              ? (console.error(
                  "Transport Error: no default registry is available for request",
                ),
                null)
              : r.RegisterServiceNotificationHandler(
                  e.NotifyTritonQosHandler,
                  t,
                );
          }),
          (e.NotifyTritonQos = function (e, t) {
            return null == (t = t || Fr().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamInputManager.NotifyTritonQos#1",
                  Tr(Ti, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SendMsgNotifyTritonQos = function (e, t) {
            return null == (t = t || Fr().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamInputManager.NotifyTritonQos#1",
                  Tr(Ti, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.StartControllerStateFlowHandler = {
            name: "SteamInputManager.StartControllerStateFlow#1",
            request: xr,
            response: Lr,
          }),
          (e.StartControllerStateFlow = function (e, t) {
            return null == (t = t || Fr().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg(
                  "SteamInputManager.StartControllerStateFlow#1",
                  Tr(xr, e),
                  Lr,
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SendMsgStartControllerStateFlow = function (e, t) {
            return null == (t = t || Fr().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg(
                  "SteamInputManager.StartControllerStateFlow#1",
                  Tr(xr, e),
                  Lr,
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.EndControllerStateFlowHandler = {
            name: "SteamInputManager.EndControllerStateFlow#1",
            request: xr,
            response: Lr,
          }),
          (e.EndControllerStateFlow = function (e, t) {
            return null == (t = t || Fr().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg(
                  "SteamInputManager.EndControllerStateFlow#1",
                  Tr(xr, e),
                  Lr,
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SendMsgEndControllerStateFlow = function (e, t) {
            return null == (t = t || Fr().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg(
                  "SteamInputManager.EndControllerStateFlow#1",
                  Tr(xr, e),
                  Lr,
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.GetControllerAccessibilityStringsHandler = {
            name: "SteamInputManager.GetControllerAccessibilityStrings#1",
            request: ai,
            response: oi,
          }),
          (e.GetControllerAccessibilityStrings = function (e, t) {
            return null == (t = t || Fr().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg(
                  "SteamInputManager.GetControllerAccessibilityStrings#1",
                  Tr(ai, e),
                  oi,
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SendMsgGetControllerAccessibilityStrings = function (e, t) {
            return null == (t = t || Fr().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg(
                  "SteamInputManager.GetControllerAccessibilityStrings#1",
                  Tr(ai, e),
                  oi,
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.StartGyroSoftwareCalibrationHandler = {
            name: "SteamInputManager.StartGyroSoftwareCalibration#1",
            request: kr,
            response: jr,
          }),
          (e.StartGyroSoftwareCalibration = function (e, t) {
            return null == (t = t || Fr().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg(
                  "SteamInputManager.StartGyroSoftwareCalibration#1",
                  Tr(kr, e),
                  jr,
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SendMsgStartGyroSoftwareCalibration = function (e, t) {
            return null == (t = t || Fr().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg(
                  "SteamInputManager.StartGyroSoftwareCalibration#1",
                  Tr(kr, e),
                  jr,
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.CancelGyroSoftwareCalibrationHandler = {
            name: "SteamInputManager.CancelGyroSoftwareCalibration#1",
            request: kr,
            response: jr,
          }),
          (e.CancelGyroSoftwareCalibration = function (e, t) {
            return null == (t = t || Fr().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg(
                  "SteamInputManager.CancelGyroSoftwareCalibration#1",
                  Tr(kr, e),
                  jr,
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SendMsgCancelGyroSoftwareCalibration = function (e, t) {
            return null == (t = t || Fr().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg(
                  "SteamInputManager.CancelGyroSoftwareCalibration#1",
                  Tr(kr, e),
                  jr,
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.PairDongleTritonConnectedHandler = {
            name: "SteamInputManager.PairDongleTritonConnected#1",
            request: Hr,
            response: Vr,
          }),
          (e.PairDongleTritonConnected = function (e, t) {
            return null == (t = t || Fr().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg(
                  "SteamInputManager.PairDongleTritonConnected#1",
                  Tr(Hr, e),
                  Vr,
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SendMsgPairDongleTritonConnected = function (e, t) {
            return null == (t = t || Fr().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg(
                  "SteamInputManager.PairDongleTritonConnected#1",
                  Tr(Hr, e),
                  Vr,
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.GetDonglesHandler = {
            name: "SteamInputManager.GetDongles#1",
            request: Xr,
            response: Jr,
          }),
          (e.GetDongles = function (e, t) {
            return null == (t = t || Fr().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg("SteamInputManager.GetDongles#1", Tr(Xr, e), Jr, {
                  ePrivilege: 1,
                  eClientExecutionSite: 2,
                });
          }),
          (e.SendMsgGetDongles = function (e, t) {
            return null == (t = t || Fr().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg("SteamInputManager.GetDongles#1", Tr(Xr, e), Jr, {
                  ePrivilege: 1,
                  eClientExecutionSite: 2,
                });
          }),
          (e.ShouldTritonPairInOobeHandler = {
            name: "SteamInputManager.ShouldTritonPairInOobe#1",
            request: ei,
            response: ii,
          }),
          (e.ShouldTritonPairInOobe = function (e, t) {
            return null == (t = t || Fr().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg(
                  "SteamInputManager.ShouldTritonPairInOobe#1",
                  Tr(ei, e),
                  ii,
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SendMsgShouldTritonPairInOobe = function (e, t) {
            return null == (t = t || Fr().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg(
                  "SteamInputManager.ShouldTritonPairInOobe#1",
                  Tr(ei, e),
                  ii,
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.WaitInitialControllerStateEnumeratedHandler = {
            name: "SteamInputManager.WaitInitialControllerStateEnumerated#1",
            request: ti,
            response: ri,
          }),
          (e.WaitInitialControllerStateEnumerated = function (e, t) {
            return null == (t = t || Fr().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg(
                  "SteamInputManager.WaitInitialControllerStateEnumerated#1",
                  Tr(ti, e),
                  ri,
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SendMsgWaitInitialControllerStateEnumerated = function (e, t) {
            return null == (t = t || Fr().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg(
                  "SteamInputManager.WaitInitialControllerStateEnumerated#1",
                  Tr(ti, e),
                  ri,
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.GetTritonPairingInfoHandler = {
            name: "SteamInputManager.GetTritonPairingInfo#1",
            request: ui,
            response: di,
          }),
          (e.GetTritonPairingInfo = function (e, t) {
            return null == (t = t || Fr().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg(
                  "SteamInputManager.GetTritonPairingInfo#1",
                  Tr(ui, e),
                  di,
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SendMsgGetTritonPairingInfo = function (e, t) {
            return null == (t = t || Fr().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg(
                  "SteamInputManager.GetTritonPairingInfo#1",
                  Tr(ui, e),
                  di,
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.ForgetTritonPairingBondHandler = {
            name: "SteamInputManager.ForgetTritonPairingBond#1",
            request: gi,
            response: _i,
          }),
          (e.ForgetTritonPairingBond = function (e, t) {
            return null == (t = t || Fr().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg(
                  "SteamInputManager.ForgetTritonPairingBond#1",
                  Tr(gi, e),
                  _i,
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SendMsgForgetTritonPairingBond = function (e, t) {
            return null == (t = t || Fr().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg(
                  "SteamInputManager.ForgetTritonPairingBond#1",
                  Tr(gi, e),
                  _i,
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.ForgetDonglePairingBondHandler = {
            name: "SteamInputManager.ForgetDonglePairingBond#1",
            request: hi,
            response: bi,
          }),
          (e.ForgetDonglePairingBond = function (e, t) {
            return null == (t = t || Fr().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg(
                  "SteamInputManager.ForgetDonglePairingBond#1",
                  Tr(hi, e),
                  bi,
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SendMsgForgetDonglePairingBond = function (e, t) {
            return null == (t = t || Fr().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg(
                  "SteamInputManager.ForgetDonglePairingBond#1",
                  Tr(hi, e),
                  bi,
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.GetControllerNameHandler = {
            name: "SteamInputManager.GetControllerName#1",
            request: pi,
            response: fi,
          }),
          (e.GetControllerName = function (e, t) {
            return null == (t = t || Fr().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg(
                  "SteamInputManager.GetControllerName#1",
                  Tr(pi, e),
                  fi,
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SendMsgGetControllerName = function (e, t) {
            return null == (t = t || Fr().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg(
                  "SteamInputManager.GetControllerName#1",
                  Tr(pi, e),
                  fi,
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.GetControllerListHandler = {
            name: "SteamInputManager.GetControllerList#1",
            request: vi,
            response: Mi,
          }),
          (e.GetControllerList = function (e, t) {
            return null == (t = t || Fr().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg(
                  "SteamInputManager.GetControllerList#1",
                  Tr(vi, e),
                  Mi,
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SendMsgGetControllerList = function (e, t) {
            return null == (t = t || Fr().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg(
                  "SteamInputManager.GetControllerList#1",
                  Tr(vi, e),
                  Mi,
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.EnableDockedInputHandler = {
            name: "SteamInputManager.EnableDockedInput#1",
            request: Bi,
            response: wi,
          }),
          (e.EnableDockedInput = function (e, t) {
            return null == (t = t || Fr().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg(
                  "SteamInputManager.EnableDockedInput#1",
                  Tr(Bi, e),
                  wi,
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SendMsgEnableDockedInput = function (e, t) {
            return null == (t = t || Fr().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg(
                  "SteamInputManager.EnableDockedInput#1",
                  Tr(Bi, e),
                  wi,
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.EnableQosStatusHandler = {
            name: "SteamInputManager.EnableQosStatus#1",
            request: Ii,
            response: Fi,
          }),
          (e.EnableQosStatus = function (e, t) {
            return null == (t = t || Fr().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg(
                  "SteamInputManager.EnableQosStatus#1",
                  Tr(Ii, e),
                  Fi,
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SendMsgEnableQosStatus = function (e, t) {
            return null == (t = t || Fr().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg(
                  "SteamInputManager.EnableQosStatus#1",
                  Tr(Ii, e),
                  Fi,
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          });
      })(Ni || (Ni = {}));
      var Ei;
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
      })(Ei || (Ei = {}));
      BigInt(1),
        BigInt(0),
        BigInt(1),
        BigInt(1),
        BigInt(1),
        BigInt(2),
        BigInt(1),
        BigInt(3),
        BigInt(1),
        BigInt(4),
        BigInt(1),
        BigInt(5),
        BigInt(1),
        BigInt(6),
        BigInt(1),
        BigInt(7),
        BigInt(1),
        BigInt(8),
        BigInt(1),
        BigInt(9),
        BigInt(1),
        BigInt(10),
        BigInt(1),
        BigInt(11),
        BigInt(1),
        BigInt(12),
        BigInt(1),
        BigInt(13),
        BigInt(1),
        BigInt(14),
        BigInt(1),
        BigInt(15),
        BigInt(1),
        BigInt(16),
        BigInt(1),
        BigInt(17),
        BigInt(1),
        BigInt(18),
        BigInt(1),
        BigInt(19),
        BigInt(1),
        BigInt(20),
        BigInt(1),
        BigInt(21),
        BigInt(1),
        BigInt(22),
        BigInt(1),
        BigInt(23),
        BigInt(1),
        BigInt(24),
        BigInt(1),
        BigInt(25),
        BigInt(1),
        BigInt(26),
        BigInt(1),
        BigInt(27),
        BigInt(1),
        BigInt(28),
        BigInt(1),
        BigInt(29),
        BigInt(1),
        BigInt(30),
        BigInt(1),
        BigInt(31),
        BigInt(1),
        BigInt(32),
        BigInt(1),
        BigInt(33),
        BigInt(1),
        BigInt(34),
        BigInt(1),
        BigInt(35),
        BigInt(1),
        BigInt(36),
        BigInt(1),
        BigInt(37),
        BigInt(1),
        BigInt(38),
        BigInt(1),
        BigInt(39);
      var Oi;
      !(function (e) {
        (e[(e.GAMEPAD_BUTTON_A = 0)] = "GAMEPAD_BUTTON_A"),
          (e[(e.GAMEPAD_BUTTON_B = 1)] = "GAMEPAD_BUTTON_B"),
          (e[(e.GAMEPAD_BUTTON_X = 2)] = "GAMEPAD_BUTTON_X"),
          (e[(e.GAMEPAD_BUTTON_Y = 3)] = "GAMEPAD_BUTTON_Y"),
          (e[(e.GAMEPAD_BUTTON_DPAD_UP = 4)] = "GAMEPAD_BUTTON_DPAD_UP"),
          (e[(e.GAMEPAD_BUTTON_DPAD_RIGHT = 5)] = "GAMEPAD_BUTTON_DPAD_RIGHT"),
          (e[(e.GAMEPAD_BUTTON_DPAD_DOWN = 6)] = "GAMEPAD_BUTTON_DPAD_DOWN"),
          (e[(e.GAMEPAD_BUTTON_DPAD_LEFT = 7)] = "GAMEPAD_BUTTON_DPAD_LEFT"),
          (e[(e.GAMEPAD_BUTTON_MENU = 8)] = "GAMEPAD_BUTTON_MENU"),
          (e[(e.GAMEPAD_BUTTON_VIEW = 9)] = "GAMEPAD_BUTTON_VIEW"),
          (e[(e.GAMEPAD_LEFTPAD_UP = 10)] = "GAMEPAD_LEFTPAD_UP"),
          (e[(e.GAMEPAD_LEFTPAD_DOWN = 11)] = "GAMEPAD_LEFTPAD_DOWN"),
          (e[(e.GAMEPAD_LEFTPAD_LEFT = 12)] = "GAMEPAD_LEFTPAD_LEFT"),
          (e[(e.GAMEPAD_LEFTPAD_RIGHT = 13)] = "GAMEPAD_LEFTPAD_RIGHT"),
          (e[(e.GAMEPAD_LEFTPAD_ANALOG = 14)] = "GAMEPAD_LEFTPAD_ANALOG"),
          (e[(e.GAMEPAD_RIGHTPAD_UP = 15)] = "GAMEPAD_RIGHTPAD_UP"),
          (e[(e.GAMEPAD_RIGHTPAD_DOWN = 16)] = "GAMEPAD_RIGHTPAD_DOWN"),
          (e[(e.GAMEPAD_RIGHTPAD_LEFT = 17)] = "GAMEPAD_RIGHTPAD_LEFT"),
          (e[(e.GAMEPAD_RIGHTPAD_RIGHT = 18)] = "GAMEPAD_RIGHTPAD_RIGHT"),
          (e[(e.GAMEPAD_RIGHTPAD_ANALOG = 19)] = "GAMEPAD_RIGHTPAD_ANALOG"),
          (e[(e.GAMEPAD_LEFTSTICK_UP = 20)] = "GAMEPAD_LEFTSTICK_UP"),
          (e[(e.GAMEPAD_LEFTSTICK_DOWN = 21)] = "GAMEPAD_LEFTSTICK_DOWN"),
          (e[(e.GAMEPAD_LEFTSTICK_LEFT = 22)] = "GAMEPAD_LEFTSTICK_LEFT"),
          (e[(e.GAMEPAD_LEFTSTICK_RIGHT = 23)] = "GAMEPAD_LEFTSTICK_RIGHT"),
          (e[(e.GAMEPAD_LEFTSTICK_ANALOG = 24)] = "GAMEPAD_LEFTSTICK_ANALOG"),
          (e[(e.GAMEPAD_LEFTSTICK_CLICK = 25)] = "GAMEPAD_LEFTSTICK_CLICK"),
          (e[(e.GAMEPAD_LTRIGGER_ANALOG = 26)] = "GAMEPAD_LTRIGGER_ANALOG"),
          (e[(e.GAMEPAD_RTRIGGER_ANALOG = 27)] = "GAMEPAD_RTRIGGER_ANALOG"),
          (e[(e.GAMEPAD_BUTTON_LTRIGGER = 28)] = "GAMEPAD_BUTTON_LTRIGGER"),
          (e[(e.GAMEPAD_BUTTON_RTRIGGER = 29)] = "GAMEPAD_BUTTON_RTRIGGER"),
          (e[(e.GAMEPAD_BUTTON_LSHOULDER = 30)] = "GAMEPAD_BUTTON_LSHOULDER"),
          (e[(e.GAMEPAD_BUTTON_RSHOULDER = 31)] = "GAMEPAD_BUTTON_RSHOULDER"),
          (e[(e.GAMEPAD_BUTTON_LBACK = 32)] = "GAMEPAD_BUTTON_LBACK"),
          (e[(e.GAMEPAD_BUTTON_RBACK = 33)] = "GAMEPAD_BUTTON_RBACK"),
          (e[(e.GAMEPAD_BUTTON_GUIDE = 34)] = "GAMEPAD_BUTTON_GUIDE"),
          (e[(e.GAMEPAD_BUTTON_SELECT = 35)] = "GAMEPAD_BUTTON_SELECT"),
          (e[(e.GAMEPAD_BUTTON_START = 36)] = "GAMEPAD_BUTTON_START"),
          (e[(e.GAMEPAD_BUTTON_LPAD_CLICKED = 37)] =
            "GAMEPAD_BUTTON_LPAD_CLICKED"),
          (e[(e.GAMEPAD_BUTTON_LPAD_TOUCH = 38)] = "GAMEPAD_BUTTON_LPAD_TOUCH"),
          (e[(e.GAMEPAD_BUTTON_RPAD_CLICKED = 39)] =
            "GAMEPAD_BUTTON_RPAD_CLICKED"),
          (e[(e.GAMEPAD_BUTTON_RPAD_TOUCH = 40)] = "GAMEPAD_BUTTON_RPAD_TOUCH"),
          (e[(e.GAMEPAD_RIGHTSTICK_CLICK = 41)] = "GAMEPAD_RIGHTSTICK_CLICK"),
          (e[(e.GAMEPAD_RIGHTSTICK_TOUCH = 42)] = "GAMEPAD_RIGHTSTICK_TOUCH"),
          (e[(e.GAMEPAD_LEFTSTICK_TOUCH = 43)] = "GAMEPAD_LEFTSTICK_TOUCH"),
          (e[(e.GAMEPAD_BUTTON_LBACK_UPPER = 44)] =
            "GAMEPAD_BUTTON_LBACK_UPPER"),
          (e[(e.GAMEPAD_BUTTON_RBACK_UPPER = 45)] =
            "GAMEPAD_BUTTON_RBACK_UPPER"),
          (e[(e.GAMEPAD_BUTTON_LAST = 46)] = "GAMEPAD_BUTTON_LAST"),
          (e[(e.GAMEPAD_ANALOG_SCROLL = 47)] = "GAMEPAD_ANALOG_SCROLL"),
          (e[(e.GAMEPAD_ANALOG_LEFT_KEYBOARD_CURSOR = 48)] =
            "GAMEPAD_ANALOG_LEFT_KEYBOARD_CURSOR"),
          (e[(e.GAMEPAD_ANALOG_RIGHT_KEYBOARD_CURSOR = 49)] =
            "GAMEPAD_ANALOG_RIGHT_KEYBOARD_CURSOR"),
          (e[(e.GAMEPAD_ANALOG_LAST = 50)] = "GAMEPAD_ANALOG_LAST");
      })(Oi || (Oi = {}));
      const Di = new U("FocusNavigation").Debug,
        zi = new U("FocusNavigation").Assert,
        Pi = "focus-nav-show-debug-focus-ring";
      function Wi(e, t) {
        return (
          e?.eActivationSourceType === t?.eActivationSourceType &&
          e?.nActiveGamepadIndex === t?.nActiveGamepadIndex &&
          e?.nLastActiveGamepadIndex === t?.nLastActiveGamepadIndex
        );
      }
      class Gi {
        m_rgGamepadInputSources = [];
        m_DefaultContext;
        m_rgAllContexts = [];
        m_ActiveContext;
        m_LastActiveContext;
        m_ContextSetChangedCallbacks = new N.l();
        m_rgCatchAllGamepadInput = [];
        m_UnhandledButtonEventsCallbacks = new N.l();
        m_navigationSource = z(
          {
            eActivationSourceType: a.Vz.UNKNOWN,
            nActiveGamepadIndex: -1,
            nLastActiveGamepadIndex: -1,
          },
          Wi,
        );
        m_navigationSourceSupportsFocus = (function (e, t, r) {
          return new P(e, t, r);
        })(this.m_navigationSource, (e) => (0, a.UE)(e?.eActivationSourceType));
        m_bShowDebugFocusRing = z(!1);
        m_glyphInfo = z({ nControllerType: 4, nControllerStyle: 100 });
        m_bRestoringHistory = !1;
        m_nSystemKeyAppIDHint;
        m_fnSystemKeyContextResolver;
        m_fnGamepadEventUpdateBatcher = (e) => e();
        constructor() {
          window.FocusNavController = this;
        }
        Init() {
          this.m_bShowDebugFocusRing.Set("shown" == sessionStorage.getItem(Pi));
        }
        CreateContext(e, t, r) {
          const i = new nt(this, e, t, r);
          return (
            this.m_rgAllContexts.push(i),
            setTimeout(() => this.m_ContextSetChangedCallbacks.Dispatch(), 0),
            i
          );
        }
        DestroyContext(e) {
          A.x9(this.m_rgAllContexts, e),
            this.m_ContextSetChangedCallbacks.Dispatch();
        }
        GetDefaultContext() {
          return (
            this.m_DefaultContext ||
              (this.m_DefaultContext = this.CreateContext(window, !1, !1)),
            this.m_DefaultContext
          );
        }
        GetActiveContext() {
          return this.m_ActiveContext;
        }
        BHasVRGamepadNavigationContext() {
          return this.m_rgAllContexts?.some(
            (e) => e.BIsVR() && !e.BIsGamepadInputSuppressed(),
          );
        }
        FindContextForRootWindow(e) {
          return this.m_rgAllContexts?.find((t) => t.RootWindow == e);
        }
        BCanActivateContext(e) {
          return !!e && !(this.BHasVRGamepadNavigationContext() && !e.BIsVR());
        }
        FindAnActiveContext() {
          if (!this.m_ActiveContext && 0 != this.m_rgAllContexts.length) {
            console.warn("No active context; finding one");
            for (const e of this.m_rgAllContexts) {
              const t = e.FindNavTreeInFocusedWindow();
              if (t && this.BCanActivateContext(e)) {
                Di(
                  `${e.LogName(t.Window)} Found a focused window; setting this context as active.`,
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
              this.BCanActivateContext(this.m_LastActiveContext) &&
              (Di(
                `Failed to find an active context, will fall back to ${this.m_LastActiveContext.LogName()}`,
              ),
              (this.m_ActiveContext = this.m_LastActiveContext),
              this.m_ActiveContext.OnActivate(
                this.m_LastActiveContext.m_LastActiveFocusNavTree?.Window,
              )),
            this.m_ActiveContext
          );
        }
        SetShowDebugFocusRing(e) {
          this.m_bShowDebugFocusRing.Set(e),
            (function (e) {
              e
                ? sessionStorage.setItem(Pi, "shown")
                : sessionStorage.removeItem(Pi);
            })(e);
        }
        GetShowDebugFocusRing() {
          return this.m_bShowDebugFocusRing;
        }
        RegisterInputSource(e) {
          let t = new G();
          return (
            this.m_rgGamepadInputSources.push(e),
            t.PushArrayRemove(this.m_rgGamepadInputSources, e),
            t.Push(
              e.RegisterForGamepadButtonDown(this.OnButtonDown).Unregister,
            ),
            t.Push(e.RegisterForGamepadButtonUp(this.OnButtonUp).Unregister),
            t.Push(
              e.RegisterForNavigationTypeChange(this.OnNavigationTypeChange)
                .Unregister,
            ),
            e.SetRepeatAllowed(() => this.m_ActiveContext?.BIsActive() ?? !1),
            t.Push(() => e.SetRepeatAllowed()),
            e.GetSourceType() == a.Vz.GAMEPAD && this.UpdateSourceToGamepad(),
            t.Push(e.Init(this).Unregister),
            t.GetUnregisterFunc()
          );
        }
        UpdateSourceToGamepad(e = !1) {
          (this.m_navigationSource.Value.eActivationSourceType ==
            a.Vz.UNKNOWN ||
            e) &&
            this.m_navigationSource.Set({
              ...this.m_navigationSource.Value,
              eActivationSourceType: a.Vz.GAMEPAD,
            });
        }
        SetGamepadEventUpdateBatcher(e) {
          this.m_fnGamepadEventUpdateBatcher = e;
        }
        get NavigationSource() {
          return this.m_navigationSource;
        }
        get NavigationSourceSupportsFocus() {
          return this.m_navigationSourceSupportsFocus;
        }
        get NavigationSourceGlyphInfo() {
          return this.m_glyphInfo;
        }
        DispatchVirtualButtonClick(e, t, r) {
          let i;
          if (t) i = this.GetActiveContext() ?? this.FindAnActiveContext();
          else if (r && !(0, a.UE)(r)) {
            const e = this.GetActiveContext() ?? this.FindAnActiveContext(),
              r = e?.m_LastActiveNavTree;
            r &&
              !r.GetLastFocusedNode() &&
              r.Root.Element &&
              ((t = r.Root.Element), (i = e));
          }
          this.OnButtonDown(
            e,
            r ?? a.Vz.GAMEPAD,
            -1,
            void 0,
            void 0,
            void 0,
            t,
            i,
            !0,
          ),
            this.OnButtonUp(
              e,
              r ?? a.Vz.GAMEPAD,
              -1,
              void 0,
              void 0,
              void 0,
              t,
              i,
              !0,
            );
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
            e === a.pR.STEAM_GUIDE ||
            e === a.pR.STEAM_QUICK_MENU ||
            e === a.pR.CANCEL
          );
        }
        GetEventTarget(e, t, r = !1) {
          let n = this.GetActiveContext();
          if (this.m_nSystemKeyAppIDHint && !n?.FindNavTreeInFocusedWindow()) {
            const e = this.m_fnSystemKeyContextResolver?.(
              this.m_nSystemKeyAppIDHint,
            );
            e &&
              e != n &&
              this.BCanActivateContext(e) &&
              (Di(
                `GetEventTarget: using ${e.LogName()} for system key AppID ${this.m_nSystemKeyAppIDHint} instead of ${n?.LogName() ?? "no context"}`,
              ),
              n?.ActiveWindow && n.OnDeactivate(n.ActiveWindow),
              e.OnActivate(e.m_LastActiveFocusNavTree?.Window ?? e.RootWindow),
              (n = e));
          }
          !n && r && (n = this.FindAnActiveContext());
          let s = n?.ActiveWindow?.document.activeElement;
          if (n?.m_LastActiveNavTree) {
            if (
              (t || (t = this.m_navigationSource?.Value?.eActivationSourceType),
              !n.m_LastActiveNavTree.GetLastFocusedNode() &&
                (0, a.UE)(t) &&
                (Di(
                  `GetEventTarget: Context ${n.LogName()} tree ${n.m_LastActiveNavTree.id} has no focused node, ${r ? "finding one" : "will not find one"}`,
                ),
                r && n.m_LastActiveNavTree.TakeFocus(i.GAMEPAD, !0),
                !this.BGlobalGamepadButton(e)))
            )
              return [void 0, n];
            n.m_LastActiveNavTree.GetLastFocusedNode()
              ? (s = n.m_LastActiveNavTree?.GetLastFocusedNode()?.Element)
              : Di(
                  `GetEventTarget: Context ${n.LogName()} tree ${n.m_LastActiveNavTree.id} still has no focused node - will fall back to document.activeElement`,
                );
          }
          return [s, n];
        }
        ChangeNavigationSource(e, t, r, i) {
          let n = this.m_navigationSource.Value;
          if (
            e == a.Vz.MOUSE &&
            n.eActivationSourceType == a.Vz.KEYBOARD_SIMULATOR
          )
            return !1;
          let s = n.nLastActiveGamepadIndex;
          return (
            null != n.nActiveGamepadIndex &&
              n.nActiveGamepadIndex >= 0 &&
              (s = n.nActiveGamepadIndex),
            this.m_navigationSource.Set({
              eActivationSourceType: e,
              nActiveGamepadIndex: t,
              nLastActiveGamepadIndex: s,
            }),
            r &&
              i &&
              this.m_glyphInfo.Set({ nControllerType: r, nControllerStyle: i }),
            e != a.Vz.MOUSE &&
              (0, B.Dp)("Browser.HideCursorUntilMouseEvent") &&
              SteamClient.Browser.HideCursorUntilMouseEvent(),
            n.eActivationSourceType != e
          );
        }
        OnButtonActionInternal(e, t, r, i, n, s, o, l, c, u) {
          for (let r = this.m_rgCatchAllGamepadInput.length - 1; r >= 0; r--)
            if (this.m_rgCatchAllGamepadInput[r](t, e, n ?? !1))
              return void (
                e &&
                Di(
                  "Ignoring button press - gamepad input is suppressed by parent window",
                )
              );
          zi(
            !!s == !!o,
            "Must set both overrideContext and overrideElement or neither",
          );
          let d = s,
            m = o;
          (null != d && null != m) || ([d, m] = this.GetEventTarget(t, r, e)),
            !m?.BIsGamepadInputSuppressed() || l
              ? (this.ChangeNavigationSource(r, i, c, u),
                e &&
                  Di(
                    `Firing ${a.pR[t]} in tree ${m?.m_LastActiveNavTree?.id} at `,
                    d,
                  ),
                this.BatchedUpdate(() =>
                  g(d, e ? "vgp_onbuttondown" : "vgp_onbuttonup", {
                    button: t,
                    source: r,
                    is_repeat: n,
                  }),
                ))
              : Di(
                  `Suppressing ${a.pR[t]} input on element ${d?.className} because tree ${m?.m_LastActiveNavTree?.id} has it disabled`,
                );
        }
        OnButtonDown(e, t, r, i, n, s, a, o, l) {
          this.OnButtonActionInternal(!0, e, t, r, i, a, o, l, n, s);
        }
        OnButtonUp(e, t, r, i, n, s, a, o, l) {
          this.OnButtonActionInternal(!1, e, t, r, !1, a, o, l, n, s);
        }
        BatchedUpdate(e) {
          this.m_fnGamepadEventUpdateBatcher(e);
        }
        OnNavigationTypeChange(e) {
          if (
            this.ChangeNavigationSource(e, -1) &&
            (document.hasFocus() || this.m_LastActiveContext?.BIsVR()) &&
            (e == a.Vz.MOUSE || e == a.Vz.TOUCH) &&
            this.m_ActiveContext?.m_LastActiveNavTree
          ) {
            const e =
                this.m_ActiveContext.m_LastActiveNavTree.GetLastFocusedNode(),
              t = (function (e) {
                if (!S(e)) return !1;
                const t = e.tagName,
                  r = ((i = e), "INPUT" === i.nodeName ? e.type : void 0);
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
                })(t, r);
              })(e?.Element)
                ? e
                : null;
            this.m_ActiveContext.m_LastActiveNavTree?.TransferFocus(
              i.APPLICATION,
              t,
            );
          }
        }
        NewGamepadNavigationTree(e, t, r, i) {
          return new et(this, e, t, r, i);
        }
        RegisterGamepadNavigationTree(e, t) {
          Di("Registering focusnav tree ", e.id);
          const r = e.WindowContext;
          r.AddNavTree(e);
          const i = e.MountNavTree(t);
          return (
            !e.Parent &&
              e.BIsEnabled() &&
              (this.BCanActivateContext(r) &&
                (this.m_LastActiveContext = this.m_ActiveContext = r),
              r.BIsVR() || r.SetActiveNavTree(e, !0)),
            () => {
              r.UnregisterGamepadNavigationTree(e).then(() => i());
            }
          );
        }
        OnGamepadNavigationTreeActivated(e, t = !1) {
          e.WindowContext.SetActiveNavTree(e, t);
        }
        OnGamepadNavigationTreeFocused(e, t, r = !1) {
          const n = e.WindowContext;
          n != this.m_ActiveContext &&
            Di(`(${n.LogName(e.Window)}) Focus event in inactive window`),
            e != n.m_LastActiveFocusNavTree &&
              e != n.m_LastActiveNavTree &&
              (n.m_LastActiveFocusNavTree?.GetParentEmbeddedNavTree() == e ||
              e.GetParentEmbeddedNavTree() == n.m_LastActiveFocusNavTree
                ? t == i.AUTOFOCUS &&
                  n.m_LastActiveNavTree?.GetLastFocusedNode()
                  ? Di(
                      `There was an autofocus event in ${e.id}, but the active nav tree is ${n.m_LastActiveFocusNavTree?.id} and we already have something focused.  Source: ${t && i[t]}.`,
                    )
                  : (Di(
                      `There was a focus event in ${e.id}, allowing focus transfer to activate nav tree due to parent embedded relationship`,
                    ),
                    e.Activate())
                : Di(
                    `There was a focus event in ${e.id}, but the active nav tree is ${n.m_LastActiveFocusNavTree?.id} so it is being ignored.  Source: ${t && i[t]}.`,
                  ));
        }
        BlurNavTree(e) {
          e.WindowContext.BlurNavTree(e);
        }
        IsActiveFocusNavTree(e) {
          return Boolean(
            e && e == this.m_ActiveContext?.m_LastActiveFocusNavTree,
          );
        }
        IsActiveNavTree(e) {
          return Boolean(e && e == this.m_ActiveContext?.m_LastActiveNavTree);
        }
        GetActiveNavTree() {
          return this.m_ActiveContext?.m_LastActiveNavTree;
        }
        BIsInActiveContext(e) {
          return Boolean(e && e.WindowContext == this.m_ActiveContext);
        }
        SetSystemKeyAppIDHint(e) {
          this.m_nSystemKeyAppIDHint = e;
        }
        SetSystemKeyContextResolver(e) {
          this.m_fnSystemKeyContextResolver = e;
        }
        RegisterForUnhandledButtonDownEvents(e) {
          return this.m_UnhandledButtonEventsCallbacks.Register(e);
        }
        get ContextSetChangedCallbacks() {
          return this.m_ContextSetChangedCallbacks;
        }
        FireUnhandledGamepadEventCallbacks(e) {
          return (
            !this.m_UnhandledButtonEventsCallbacks.CountRegistered() ||
            (this.m_UnhandledButtonEventsCallbacks.Dispatch(e), !1)
          );
        }
        SetCatchAllGamepadInput(e) {
          return (
            this.m_rgCatchAllGamepadInput.push(e),
            {
              Unregister: () => {
                const t = this.m_rgCatchAllGamepadInput.indexOf(e);
                t >= 0 && this.m_rgCatchAllGamepadInput.splice(t, 1);
              },
            }
          );
        }
        TakeFocusChangingIFrame() {
          window.focus();
          let e =
            this.m_ActiveContext?.m_LastActiveFocusNavTree ||
            this.m_ActiveContext?.m_LastActiveNavTree;
          e && e.TakeFocus(i.APPLICATION);
        }
        OnContextActivated(e) {
          (this.m_ActiveContext = e), (this.m_LastActiveContext = e);
        }
        OnContextDeactivated(e, t) {
          t &&
            (this.m_LastActiveContext == e &&
              (this.m_LastActiveContext = void 0),
            this.DestroyContext(e)),
            this.m_ActiveContext == e && (this.m_ActiveContext = void 0);
        }
        BIsRestoringHistory() {
          return this.m_bRestoringHistory;
        }
        async RestoreHistoryTransaction(e) {
          this.m_bRestoringHistory = !0;
          try {
            await e();
          } finally {
            this.m_bRestoringHistory = !1;
          }
        }
      }
      function Ui(e) {
        if (!e) return We.NONE;
        switch (e) {
          case "column":
            return We.COLUMN;
          case "column-reverse":
            return We.COLUMN_REVERSE;
          case "row":
            return We.ROW;
          case "row-reverse":
            return We.ROW_REVERSE;
          case "grid":
            return We.GRID;
          case "geometric":
            return We.GEOMETRIC;
          default:
            return (
              (function (e, t, ...r) {
                k(!1, t, ...r);
              })(0, `Unhandled flow-children: ${e}`),
              We.NONE
            );
        }
      }
      (0, b.Cg)([p.o], Gi.prototype, "OnButtonDown", null),
        (0, b.Cg)([p.o], Gi.prototype, "OnButtonUp", null),
        (0, b.Cg)([p.o], Gi.prototype, "OnNavigationTypeChange", null);
      const xi = "VirtualKeyboardMessage";
      function Li(e) {
        return e && e.type === xi;
      }
      class ki {
        m_ownerWindow;
        constructor() {}
        Init(e) {
          return (
            (this.m_ownerWindow = e),
            this.m_ownerWindow.addEventListener("message", this.OnMessage),
            () => {
              this.m_ownerWindow.removeEventListener("message", this.OnMessage),
                (this.m_ownerWindow = void 0);
            }
          );
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
          e == xi && this.InternalDispatchMessage(JSON.parse(t));
        }
        OnMessage(e) {
          this.InternalDispatchMessage(e.data);
        }
        InternalDispatchMessage(e) {
          Li(e) && e.message;
        }
        SendMessage(e) {
          const t = { type: "VirtualKeyboardMessage", ...e };
          (0, B.Dp)("BrowserView.PostMessageToParent")
            ? SteamClient.BrowserView.PostMessageToParent(
                t.type,
                JSON.stringify(t),
              )
            : this.m_ownerWindow &&
              (k(
                this.m_ownerWindow.parent &&
                  this.m_ownerWindow.parent != this.m_ownerWindow,
                "CVirtualKeyboardClient: No parent client window available, cannot display virtual keyboard",
              ),
              this.m_ownerWindow.parent.postMessage(t, "*"));
        }
      }
      (0, b.Cg)([p.o], ki.prototype, "ShowVirtualKeyboard", null),
        (0, b.Cg)([p.o], ki.prototype, "ShowModalKeyboard", null),
        (0, b.Cg)([p.o], ki.prototype, "HideVirtualKeyboard", null),
        (0, b.Cg)([p.o], ki.prototype, "OnBrowserViewMessage", null),
        (0, b.Cg)([p.o], ki.prototype, "OnMessage", null);
      (0, b.Cg)(
        [p.o],
        class {
          m_showKeyboard;
          m_showModalKeyboard;
          m_hideKeyboard;
          constructor(e, t, r, i) {
            (this.m_showKeyboard = t),
              (this.m_showModalKeyboard = r),
              (this.m_hideKeyboard = i),
              e.on("message", this.OnMessage);
          }
          OnMessage(e, t, r) {
            if (e == xi) {
              const e = JSON.parse(t);
              if (Li(e))
                switch (e.message) {
                  case "ShowVirtualKeyboard":
                    this.m_showKeyboard();
                    break;
                  case "ShowModalKeyboard":
                    this.m_showModalKeyboard();
                    break;
                  case "HideVirtualKeyboard":
                    this.m_hideKeyboard();
                }
            }
          }
        }.prototype,
        "OnMessage",
        null,
      );
      var ji = r(402),
        Hi = r.n(ji);
      function Vi(e) {
        let t = 0;
        e.children().each(function () {
          const e = s()(this),
            r = e.css("zIndex");
          "auto" === r
            ? e.css("zIndex", 0)
            : isNaN(parseInt(r)) || (t = Math.max(t, parseInt(r)));
        });
        const r = s()("<div/>", {
          style: `position: absolute; pointer-events: none; top: 0; left: 0; z-index: ${(t || 100) + 1}; width: 0; height: 0; padding: 0; margin: 0; background: none; overflow: visible; display: block;`,
        });
        let i,
          n,
          a = 0,
          o = 0,
          l = 0,
          c = 0;
        e.prepend(r);
        const u = (e) => {
            const t = e.GetBoundingRectForFocusRing(),
              i = r[0].getBoundingClientRect();
            return {
              left: t.x - i.x - 0,
              top: t.y - i.y - 0,
              height: t.height,
              width: t.width,
            };
          },
          d = (e, t) => {
            (a = t.left),
              (o = t.top),
              (l = t.height),
              (c = t.width),
              e.css({ left: a, top: o, height: l, width: c });
          },
          m = (e) => {
            if ((i && (i(), (i = void 0)), e && e.BWantsFocusRing())) {
              let t = s()("<div/>", {
                  "data-focusring": !0,
                  style: "position: absolute; pointer-events: none; ",
                  class: Hi().FocusRing,
                }),
                m = u(e);
              d(t, m),
                r.append(t),
                (n = () =>
                  ((e, t) => {
                    if (e && e.BWantsFocusRing()) {
                      let r = u(e);
                      (r.left == a &&
                        r.top == o &&
                        r.height == l &&
                        r.width == c) ||
                        d(t, r);
                    }
                  })(e, t));
              let g = window.setInterval(n, 200),
                _ = e.Tree.OnActiveStateChangedCallbacks.Register((e) => {
                  e ? t.show() : t.hide();
                });
              i = () => {
                window.clearInterval(g),
                  t.remove(),
                  (n = void 0),
                  _.Unregister();
              };
            }
          };
        return {
          OnBlur: () => m(null),
          OnFocus: (e, t) => m(t),
          OnFocusChange: (e, t, r) => m(r),
          OnForceMeasureFocusRing: () => n && n(),
        };
      }
      function Ki(e) {
        return !!e.is_repeat;
      }
      Object.seal({ onMoveUp: qi, onMoveDown: qi }),
        Object.seal({ onMoveRight: qi, onMoveLeft: qi });
      function qi(e, t) {
        if (e.is_repeat) return !1;
        const r = t.GetRelativeDirection(e.button);
        return r == xe.FORWARD
          ? t.BFocusFirstChild(i.GAMEPAD)
          : r == xe.BACKWARD && t.BFocusLastChild(i.GAMEPAD);
      }
      function $i(e) {
        if (e) {
          const t = Function("event", e);
          return (e) => t.apply(e.currentTarget, [e]);
        }
        return null;
      }
      function Qi() {
        return !0;
      }
      function Yi(e) {
        return "BlockMovement" == e
          ? Qi
          : "RepeatNavigationBoundary" == e
            ? Ki
            : e
              ? Function("detail", e)
              : null;
      }
      function Xi(e) {
        this.click(), e.stopPropagation();
      }
      function Ji(e) {
        s()(this).find('a, input[type="checkbox"]')[0].click();
      }
      function Zi(e, t) {
        t ? s()(e).addClass("gpfocus") : s()(e).removeClass("gpfocus");
      }
      function en(e) {
        const t = e.currentTarget;
        if (e.defaultPrevented || !S(t)) return !1;
        const r = e.detail.is_repeat ? 4.5 : 3.33,
          i = "smooth",
          n = t.ownerDocument,
          s = n.defaultView;
        switch (e.detail.button) {
          case a.pR.DIR_UP:
            if (s.scrollY > 3)
              return Ae(s, { top: -s.innerHeight / r, behavior: i }), !0;
            break;
          case a.pR.DIR_RIGHT:
            if (s.scrollX + s.innerWidth < n.documentElement.scrollWidth - 3)
              return Ae(s, { left: s.innerWidth / r, behavior: i }), !0;
            break;
          case a.pR.DIR_DOWN:
            if (s.scrollY + s.innerHeight < n.documentElement.scrollHeight - 3)
              return Ae(s, { top: s.innerHeight / r, behavior: i }), !0;
            break;
          case a.pR.DIR_LEFT:
            if (s.scrollX > 3)
              return Ae(s, { left: (s.innerWidth / r) * -1, behavior: i }), !0;
        }
        return !1;
      }
      const tn = new U("FocusNavigation").Debug;
      var rn;
      !(function (e) {
        (e[(e.Unknown = 0)] = "Unknown"),
          (e[(e.NotNeeded = 1)] = "NotNeeded"),
          (e[(e.InReactTree = 2)] = "InReactTree");
      })(rn || (rn = {}));
      const nn = new ki();
      let sn,
        an = !1,
        on = null;
      function ln(e) {
        an ||
          ((on = new Gi()),
          (sn = new y(on)),
          sn.RegisterForFocusChanged(on.GetDefaultContext()),
          nn.Init(window),
          sn.BIsGamepadInputExternallyControlled() || on.RegisterInputSource(e),
          (sn.BIsGamepadInputExternallyControlled() ||
            navigator.userAgent.includes("Valve Steam Gamepad")) &&
            on.RegisterInputSource(new I(window)),
          (function (e) {
            s()("html").addClass("gpnav_active");
            const t = s()("body"),
              r = e.GetDefaultContext(),
              i = e.NewGamepadNavigationTree(r, "legacy", void 0, {
                historyMode: "navigationapi",
              });
            s()(window).on("touchstart mousedown focus", () =>
              r.OnActivate(window),
            ),
              s()(window).on("blur", () => r.OnDeactivate(window));
            const n = Vi(t),
              a = 0 != t.data("react-nav-scrollregiontostartorend");
            (i.Root.m_FocusRing = n),
              i.Root.SetProperties({
                scrollIntoViewType: Ue.NoTransformSparseContent,
                scrollRegionToStartOrEnd: a,
              }),
              i.SetIsEnabled(!0),
              i.OnActiveStateChangedCallbacks.Register((e) => {
                const t = i.GetLastFocusedNode();
                t?.Element && Zi(t.Element, e);
              }),
              Object.assign(window, {
                legacyWebFocusNavController: on,
                __nav_tree_root: i,
                __virtual_keyboard_client: nn,
              }),
              un.set(document.body, i.Root),
              gn(document.body, i.Root),
              fn(void 0, !0),
              e.RegisterGamepadNavigationTree(i, window),
              r.OnMount(window),
              window.document.hasFocus() && r.OnActivate(window);
            s()(document.body).on("vgp_onbuttondown", function (e) {
              i.OnRootButtonDown(e.originalEvent);
            }),
              m(document.body, en);
            new MutationObserver(cn).observe(document.body, {
              childList: !0,
              subtree: !0,
            }),
              (function (e) {
                fe = e;
              })(!0),
              (function () {
                Object.assign(window, Mn),
                  window.dispatchEvent(new CustomEvent("vgp_gamepadnavready"));
              })(),
              !1;
          })(on)),
          (an = !0);
      }
      function cn(e) {
        for (const t of e) {
          const e = [],
            r = [];
          v(
            t,
            (t) => e.push(t),
            (e) => r.push(e),
          ),
            e.length && fn(s()(e)),
            r.length && pn(s()(r));
        }
      }
      const un = new WeakMap(),
        dn = new WeakMap();
      let mn = [];
      function gn(e, t) {
        if (t instanceof Le) {
          const r = t.GetDepth();
          mn[r] || (mn[r] = []), mn[r].push([e, t]);
        }
        un.set(e, t);
      }
      function _n(e, t) {
        const r = dn.has(e) ? dn.get(e) : [];
        r.push(t), dn.set(e, r);
      }
      function hn(e) {
        return "jquery" in e
          ? un.get(e[0]) || rn.Unknown
          : un.get(e) || rn.Unknown;
      }
      function bn(e) {
        return "jquery" in e ? un.has(e[0]) : un.has(e);
      }
      function pn(e) {
        e.find("*")
          .addBack()
          .each(function () {
            dn.get(this)?.forEach((e) => e()),
              un.delete(this),
              dn.delete(this),
              s()(this).attr("data-nav-modal") && vn(this);
          });
      }
      function fn(e, t = !1) {
        performance.now();
        const r =
          "a,button,textarea,input:not(input[type=hidden]),label:not([for]),[data-panel],[data-react-nav-root],[data-nav-modal]";
        s()(r, e)
          .addBack(r)
          .each(function () {
            var e;
            bn((e = this)) || yn(e);
          }),
          (function () {
            for (let e = mn.length - 1; e >= 0; e--)
              if (mn[e])
                for (let [t, r] of mn[e]) {
                  _n(t, r.Tree.RegisterNavigationItem(r, t));
                  const e = s()(t).data("navTreeModal");
                  e &&
                    (s()(t).data(
                      "unregisterNavTree",
                      on.RegisterGamepadNavigationTree(e, window),
                    ),
                    e.Activate(!0));
                }
            mn = [];
          })();
      }
      function Bn(e) {
        let t = rn.NotNeeded;
        return (
          !(function (e) {
            if (s()(e).attr("data-nav-modal")) return !0;
            switch (e.tagName) {
              case "A":
              case "INPUT":
              case "TEXTAREA":
                return !0;
              case "DIV":
                if (oe(e) != We.COLUMN) return !0;
                const t = oe(e.parentElement);
                return t == We.ROW || t == We.ROW_REVERSE;
              default:
                return !1;
            }
          })(e)
            ? gn(e, t)
            : (t = yn(e)),
          t
        );
      }
      function wn(e) {
        const t = s()(e.Element);
        return (
          !t.data("gpFocusDisabled") &&
          !(!t.is(":visible") || "hidden" == t.css("visibility")) &&
          (0 != t.outerWidth() ||
            0 != t.outerHeight() ||
            "hidden" !== t.css("overflow"))
        );
      }
      function yn(e) {
        const t = s()(e),
          r = Sn(e);
        if (r instanceof He || r == rn.InReactTree)
          return gn(e, rn.InReactTree), rn.InReactTree;
        const n = r.Tree;
        let a,
          o = t.data("panel") || {},
          l = wn;
        if (
          (t.attr("data-nav-modal")
            ? (a = (function (e, t) {
                const r = on.NewGamepadNavigationTree(
                    on.GetDefaultContext(),
                    "modal_dialog",
                    e,
                    { modal: !0 },
                  ),
                  i = Vi(s()(t));
                return (
                  (r.Root.m_FocusRing = i),
                  r.Root.SetProperties({ focusableIfEmpty: !0 }),
                  s()(t).data("navTreeModal", r),
                  gn(t, r.Root),
                  r.Root
                );
              })(n, e))
            : t.data("reactNavRoot")
              ? ((a = new He(t.data("reactNavRoot"), r)), (l = void 0))
              : (a = n.CreateNode(r, r.m_FocusRing)),
          "A" == e.tagName || "BUTTON" == e.tagName || "LABEL" == e.tagName)
        )
          (o.focusable = o.focusable ?? !0),
            (o.clickOnActivate = o.clickOnActivate ?? !0);
        else if ("INPUT" == e.tagName)
          switch (((o.focusable = o.focusable ?? !0), e.getAttribute("type"))) {
            case "radio":
            case "checkbox":
              o.clickOnActivate = o.clickOnActivate ?? !0;
              break;
            case "text":
            case "password":
              o.enableVirtualKeyboard = o.enableVirtualKeyboard ?? !0;
          }
        else
          "TEXTAREA" == e.tagName &&
            ((o.focusable = o.focusable ?? !0),
            (o.enableVirtualKeyboard = o.enableVirtualKeyboard ?? !0));
        "string" == typeof o.scrollIntoViewType &&
          (o.scrollIntoViewType =
            Ue[o.scrollIntoViewType] ?? Ue.NoTransformSparseContent);
        const c = o["flow-children"];
        delete o["flow-children"];
        let {
            clickOnActivate: u,
            maintainX: g,
            maintainY: b,
            enableVirtualKeyboard: p,
            preferredChild: f,
            onOKActionDescription: B,
            onCancelActionDescription: w,
            onSecondaryActionDescription: y,
            onOptionsActionDescription: S,
            onMenuActionDescription: v,
            actionDescriptionMap: M,
            onOKButton: C,
            onCancelButton: R,
            onSecondaryButton: T,
            onOptionsButton: I,
            onMenuButton: F,
            onMoveUp: A,
            onMoveRight: N,
            onMoveDown: E,
            onMoveLeft: O,
            onGamepadDirection: D,
            bFocusRingRoot: z,
            type: P,
            ...W
          } = o,
          G = $i(C),
          U = $i(R),
          x = $i(T),
          L = $i(I),
          k = $i(F),
          j = $i(D);
        P || (P = "Panel"),
          "PanelGroup" == P &&
            ({ onOKButtonHandler: G, onCancelButtonHandler: U } = (function (
              e,
              t,
            ) {
              const {
                onOKButtonHandler: r,
                onCancelButtonHandler: n,
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
                    (!!r && r(e)),
                  onCancelButtonHandler: (e) =>
                    !(
                      !s.BFocusWithin() ||
                      s.BHasFocus() ||
                      !s.BTakeFocus(i.GAMEPAD, e.detail.button)
                    ) ||
                    (!!n && n(e)),
                }
              );
            })(
              { onOKButtonHandler: G, onCancelButtonHandler: U, navNode: a },
              W,
            )),
          G &&
            _n(
              t[0],
              (function (e, t) {
                return d(e, "vgp_onok", _(t));
              })(t[0], G),
            ),
          U &&
            _n(
              t[0],
              (function (e, t) {
                return d(e, "vgp_oncancel", _(t));
              })(t[0], U),
            ),
          x &&
            y &&
            _n(
              t[0],
              (function (e, t) {
                return d(e, "vgp_onsecondaryaction", _(t));
              })(t[0], x),
            ),
          L &&
            S &&
            _n(
              t[0],
              (function (e, t) {
                return d(e, "vgp_onoptions", _(t));
              })(t[0], L),
            ),
          k &&
            v &&
            _n(
              t[0],
              (function (e, t) {
                return d(e, "vgp_onmenu", _(t));
              })(t[0], k),
            ),
          j && _n(t[0], m(t[0], j));
        const H = (function (e, t, r, i) {
            const n = {};
            return (
              e && (n.onMoveUp = Yi(e)),
              t && (n.onMoveRight = Yi(t)),
              r && (n.onMoveDown = Yi(r)),
              i && (n.onMoveLeft = Yi(i)),
              n
            );
          })(A, N, E, O),
          V = c ? Ui(c) : We.NONE;
        V != We.NONE && (W.layout = V),
          g
            ? (W.navEntryPreferPosition = Ge.MAINTAIN_X)
            : b
              ? (W.navEntryPreferPosition = Ge.MAINTAIN_Y)
              : f && (W.navEntryPreferPosition = Ge.PREFERRED_CHILD),
          u &&
            (!1 !== W.focusable && (W.focusable = !0),
            t.on("vgp_onok", "firstChild" === u ? Ji : Xi),
            t.attr("role") ||
              ("A" !== t.prop("tagName") && t.attr("role", "button")),
            _n(e, () => {
              t.off("vgp_onok");
            })),
          p &&
            (t.on("vgp_onok.vkbindings", () => nn.ShowVirtualKeyboard()),
            t.on("click.vkbindings", (e) => {
              "mouse" !== e.originalEvent?.pointerType &&
                nn.ShowVirtualKeyboard();
            }),
            t.on("blur.vkbindings", () => {
              document.hasFocus() &&
                document.activeElement != e &&
                nn.HideVirtualKeyboard();
            }),
            _n(e, () => {
              t.off(".vkbindings");
            })),
          W.focusable && void 0 === t.attr("tabIndex") && t.attr("tabIndex", 0),
          W.focusable && a.SubscribableHasFocus.Subscribe((t) => Zi(e, t)),
          z &&
            ((a.m_FocusRing = Vi(t)),
            "static" == t.css("position") && t.css("position", "relative"));
        const K = {
          fnCanTakeFocus: l,
          actionDescriptionMap: h({
            onOKActionDescription: B,
            onCancelActionDescription: w,
            onSecondaryActionDescription: y,
            onOptionsActionDescription: S,
            onMenuActionDescription: v,
            actionDescriptionMap: M,
          }),
          ...H,
          ...W,
        };
        return a.SetProperties(K), gn(e, a), a;
      }
      function Sn(e) {
        const t = e.parentElement;
        if (!t) return console.error("no parent"), null;
        let r = hn(t);
        if (r == rn.Unknown) r = Bn(t);
        else if (r == rn.InReactTree) return r;
        return r instanceof Le ? r : Sn(t);
      }
      function vn(e) {
        const t = s()(e).data("unregisterNavTree");
        console.assert(t, "missing unregister binding"),
          t(),
          s()(e).removeAttr("data-nav-modal"),
          s()(e).removeData("unregisterNavTree"),
          s()(e).removeClass("navTreeModal");
      }
      const Mn = {
        InstrumentFocusElements: fn,
        ForceUpdateFocusElements: function (e) {
          pn(s()(e)), fn(s()(e));
        },
        GPNavFocusChild: function (e) {
          let t = hn(e[0]);
          return (
            t instanceof Le || (t = Sn(e[0])),
            t instanceof Le && t.BTakeFocus(i.APPLICATION),
            !1
          );
        },
        GPOnShowingModalWindow: function (e) {
          tn("Showing element as modal", e);
          const t = s()(e),
            r = bn(t);
          return (
            r &&
              (tn(
                "Element already in DOM tree, forcibly re-instrumenting elements so they are parented to modal",
              ),
              pn(t)),
            t.attr("data-nav-modal", "true"),
            r && fn(t),
            () => vn(e)
          );
        },
        GPShowVirtualKeyboard: function (e = !0) {
          e ? nn.ShowVirtualKeyboard() : nn.HideVirtualKeyboard();
        },
        GPNavUpdateActionDescriptions: function (e, t) {
          const r = hn(e);
          r instanceof Le &&
            r.SetProperties({ ...r.m_Properties, actionDescriptionMap: h(t) });
        },
      };
    },
    341: (e, t, r) => {
      "use strict";
      r.d(t, { T: () => i, h: () => n });
      const i = "GamepadInput";
      var n;
      !(function (e) {
        (e[(e.PageUnloading = 0)] = "PageUnloading"),
          (e[(e.Unknown = 1)] = "Unknown"),
          (e[(e.None = 2)] = "None"),
          (e[(e.Basic = 3)] = "Basic"),
          (e[(e.Full = 4)] = "Full");
      })(n || (n = {}));
    },
    577: (e, t, r) => {
      "use strict";
      r.d(t, { A7: () => a, Vp: () => o, n4: () => l });
      var i = r(629),
        n = r(706),
        s = r(341);
      class a {
        PostMessage(e) {}
        RegisterForMessage(e) {}
      }
      class o {
        m_fnCallback = void 0;
        constructor() {
          SteamClient.BrowserView.RegisterForMessageFromParent(this.OnMessage);
        }
        RegisterForMessage(e) {
          this.m_fnCallback = e;
        }
        PostMessage(e) {
          let t = JSON.stringify(e);
          SteamClient.BrowserView.PostMessageToParent(s.T, t);
        }
        OnMessage(e, t) {
          if (e == s.T) {
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
                1 == e.bPinned,
                1 == e.bShowPinnedView,
              );
            } catch (e) {}
          }
        }
      }
      (0, i.Cg)([n.o], o.prototype, "OnMessage", null);
      class l {
        m_postWindow;
        m_fnCallback = void 0;
        constructor(e) {
          (this.m_postWindow = e),
            window.addEventListener("message", this.OnMessage);
        }
        RegisterForMessage(e) {
          this.m_fnCallback = e;
        }
        PostMessage(e) {
          let t = JSON.stringify(e);
          this.m_postWindow.postMessage({ gamepadMessage: s.T, args: t }, "*");
        }
        OnMessage(e) {
          let t = e?.data;
          if (t && t.gamepadMessage == s.T && t.args) {
            const e = JSON.parse(t.args);
            this.m_fnCallback(e);
          }
        }
      }
      (0, i.Cg)([n.o], l.prototype, "OnMessage", null);
    },
  },
]);

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
    899: (e, t, r) => {
      "use strict";
      r.d(t, { InitializeGamepadNavigation: () => sn });
      var i,
        n = r(669),
        s = r.n(n),
        a = r(461),
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
        f = r(606),
        p = r(777),
        B = r(750),
        w = r(821);
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
          let t = p.h.Basic;
          window.bSupportsGamepadUI && (t = p.h.Full),
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
      (0, b.Cg)([f.o], y.prototype, "OnFocusChanged", null),
        (0, b.Cg)([f.o], y.prototype, "OnMessage", null),
        (0, b.Cg)([f.o], y.prototype, "PostPageUnloading", null);
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
      const M = "";
      class C extends a.nh {
        m_lastButtonDown = a.pR.INVALID;
        constructor(e) {
          super(),
            this.SetSourceType(a.Vz.KEYBOARD_SIMULATOR),
            e.addEventListener("keydown", this.OnKeyDown, { capture: !0 }),
            e.addEventListener("keyup", this.OnKeyUp, { capture: !0 }),
            e.addEventListener("blur", this.Reset);
        }
        OnKeyDown(e) {
          const t = this.TranslateKey(e);
          t != a.pR.INVALID &&
            (e.preventDefault(),
            e.stopPropagation(),
            t != this.m_lastButtonDown &&
              (this.Reset(),
              this.OnButtonDown(t),
              (this.m_lastButtonDown = t)));
        }
        OnKeyUp(e) {
          const t = this.TranslateKey(e);
          t != a.pR.INVALID &&
            (this.OnButtonUp(t),
            (this.m_lastButtonDown = a.pR.INVALID),
            e.preventDefault(),
            e.stopPropagation());
        }
        Reset() {
          this.m_lastButtonDown != a.pR.INVALID &&
            (this.OnButtonUp(this.m_lastButtonDown),
            (this.m_lastButtonDown = a.pR.INVALID));
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
          if (e.ctrlKey)
            if (e.shiftKey)
              switch (t) {
                case "Digit4":
                  return a.pR.TRIGGER_LEFT;
                case "Digit5":
                  return a.pR.TRIGGER_RIGHT;
                default:
                  return a.pR.INVALID;
              }
            else
              switch (t) {
                case "Digit1":
                  return a.pR.STEAM_GUIDE;
                case "Digit2":
                  return a.pR.STEAM_QUICK_MENU;
                case "Digit3":
                case "Digit9":
                  return a.pR.SELECT;
                case "Digit4":
                  return a.pR.BUMPER_LEFT;
                case "Digit5":
                  return a.pR.BUMPER_RIGHT;
                case "Digit6":
                  return a.pR.LSTICK_CLICK;
                case "Digit7":
                  return a.pR.RSTICK_CLICK;
                case "Digit8":
                  return a.pR.OPTIONS;
                case "Digit0":
                  return a.pR.START;
              }
          else if (!e.shiftKey)
            switch (t) {
              case "Escape":
                return a.pR.CANCEL;
              case "Enter":
                return a.pR.OK;
              case "Backspace":
                return a.pR.SECONDARY;
              case "ArrowUp":
                return a.pR.DIR_UP;
              case "ArrowDown":
                return a.pR.DIR_DOWN;
              case "ArrowLeft":
                return a.pR.DIR_LEFT;
              case "ArrowRight":
                return a.pR.DIR_RIGHT;
            }
          return a.pR.INVALID;
        }
      }
      (0, b.Cg)([f.o], C.prototype, "OnKeyDown", null),
        (0, b.Cg)([f.o], C.prototype, "OnKeyUp", null),
        (0, b.Cg)([f.o], C.prototype, "Reset", null);
      var R,
        T = r(831),
        I = r(877);
      class F {
        SyncStore(e) {
          return this.Subscribe(e).Unsubscribe;
        }
        GetValue() {
          return this.Value;
        }
      }
      (0, b.Cg)([f.o], F.prototype, "SyncStore", null),
        (0, b.Cg)([f.o], F.prototype, "GetValue", null);
      class A extends F {}
      class N extends A {
        m_callbacks;
        m_currentValue;
        m_fnEquals;
        constructor(e, t) {
          super(),
            (this.m_callbacks = new I.l()),
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
      function E(e, t) {
        return new N(e, t);
      }
      class O extends F {
        m_fnMap;
        m_originalSubscribableValue;
        m_mappedSubscribableValue;
        m_bMappedValueStale = !1;
        constructor(e, t, r) {
          super(),
            (this.m_originalSubscribableValue = e),
            (this.m_mappedSubscribableValue = new N(t(e.Value), r)),
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
      class z {
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
      (0, b.Cg)([f.o], z.prototype, "ScheduledInternal", null);
      class D {
        m_vecCallbacks = [];
        Push(e) {
          this.m_vecCallbacks.push(e);
        }
        PushArrayRemove(e, t) {
          this.m_vecCallbacks.push(() => T.x9(e, t));
        }
        Unregister() {
          for (const e of this.m_vecCallbacks) e();
          this.m_vecCallbacks = [];
        }
        GetUnregisterFunc() {
          return this.Unregister;
        }
      }
      (0, b.Cg)([f.o], D.prototype, "Unregister", null),
        (function (e) {
          (e[(e.Debug = 0)] = "Debug"),
            (e[(e.Info = 1)] = "Info"),
            (e[(e.Warning = 2)] = "Warning"),
            (e[(e.Error = 3)] = "Error");
        })(R || (R = {}));
      class P {
        m_sName;
        m_fnIdGenerator = void 0;
        constructor(e, t) {
          (this.m_sName = e),
            (this.m_fnIdGenerator = t),
            W.Get().RegisterLogName(e);
        }
        Debug(...e) {
          this.Log(R.Debug, ...e);
        }
        Info(...e) {
          this.Log(R.Info, ...e);
        }
        Warning(...e) {
          this.Log(R.Warning, ...e);
        }
        Error(...e) {
          this.Log(R.Error, ...e);
        }
        Assert(e, ...t) {
          e || this.Log(R.Error, "Assertion failed:", ...t);
        }
        IsDebugEnabled() {
          return W.Get().IsDebugLogEnabled(this.m_sName);
        }
        Log(e, ...t) {
          const r = W.Get().IsDebugLogEnabled(this.m_sName);
          if (e == R.Debug && !r) return;
          let i = this.m_sName;
          const n = this.m_fnIdGenerator?.() ?? null;
          null != n && (i += " (" + n + ")");
          G(
            e,
            r,
            W.Get().IncludeBacktraceInLog,
            W.Get().AllowCSSInLogStyling,
            i,
            this.m_sName,
            ...t,
          );
        }
      }
      (0, b.Cg)([f.o], P.prototype, "Debug", null),
        (0, b.Cg)([f.o], P.prototype, "Info", null),
        (0, b.Cg)([f.o], P.prototype, "Warning", null),
        (0, b.Cg)([f.o], P.prototype, "Error", null),
        (0, b.Cg)([f.o], P.prototype, "Assert", null);
      class W {
        static k_EnabledLogNames_StorageKey = "EnabledWebLogs";
        static k_IncludeBacktraceInLog_StorageKey = "IncludeBacktraceInLog";
        static k_AllowCSSInLogColors_StorageKey = "AllowCSSInLogColors";
        m_setKnownDebugLogs = new Set();
        m_setEnabledDebugLogs = new Set();
        m_bIncludeBacktraceInLog = !1;
        m_bAllowCSSInLogStyling = !0;
        m_SettingsChangedCallback = new I.l();
        m_bLoading = !0;
        constructor() {
          this.LoadSettings();
        }
        LogAsLogManager(...e) {
          G(
            R.Info,
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
            W.k_IncludeBacktraceInLog_StorageKey,
            !1,
          )),
            (this.m_bAllowCSSInLogStyling = !!e(
              W.k_AllowCSSInLogColors_StorageKey,
              !0,
            ));
          const t = e(W.k_EnabledLogNames_StorageKey, void 0);
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
            W.k_EnabledLogNames_StorageKey,
            JSON.stringify(Array.from(this.m_setEnabledDebugLogs)),
          ),
            localStorage.setItem(
              W.k_IncludeBacktraceInLog_StorageKey,
              JSON.stringify(this.m_bIncludeBacktraceInLog),
            ),
            localStorage.setItem(
              W.k_AllowCSSInLogColors_StorageKey,
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
            null == window.g_LogManager && (window.g_LogManager = new W()),
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
      function G(e, t, r, i, n, s, ...a) {
        let o,
          l = n;
        if (
          (r &&
            (l =
              (function (e) {
                switch (e) {
                  case R.Debug:
                    return String.fromCodePoint(128027);
                  case R.Info:
                    return String.fromCodePoint(8505);
                  case R.Warning:
                    return String.fromCodePoint(9888);
                  case R.Error:
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
            case R.Debug:
            case R.Info:
              console.log(...o);
              break;
            case R.Warning:
              console.warn(...o);
              break;
            case R.Error:
              console.clogerror
                ? console.clogerror(3, ...o)
                : console.error(...o);
          }
      }
      function U(e, t, ...r) {
        console.assert
          ? 0 == r.length
            ? console.assert(!!e, t)
            : console.assert(!!e, t, ...r)
          : e || console.warn(t, ...r);
      }
      function x(e) {
        return null != e && void 0 !== e.focus;
      }
      function L(e, t) {
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
      function k(e) {
        let t;
        return e && (t = e.ownerDocument.defaultView), t;
      }
      (window.DebugLogEnable = (...e) => W.Get().SetDebugLogsEnabled(!0, ...e)),
        (window.DebugLogDisable = (...e) =>
          W.Get().SetDebugLogsEnabled(!1, ...e)),
        (window.DebugLogEnableAll = () => W.Get().SetAllDebugLogsEnabled(!0)),
        (window.DebugLogDisableAll = () => W.Get().SetAllDebugLogsEnabled(!1)),
        (window.DebugLogEnableBacktrace = () =>
          W.Get().SetIncludeBacktraceInLog(!0)),
        (window.DebugLogDisableBacktrace = () =>
          W.Get().SetIncludeBacktraceInLog(!1)),
        (window.DebugLogNames = () => W.Get().GetLogNames()),
        (window.DebugLogEnabled = (...e) => W.Get().PrintEnabledLogs(...e)),
        (window.EnableSteamConsole = (e = !0) =>
          W.Get().SetDebugLogEnabled("SteamClient", e));
      function j(e, t) {
        let r = e?.parentElement;
        for (; r; ) {
          if (x(r)) {
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
        return x(r) ? r : null;
      }
      function H(e, t) {
        if (!("ownerDocument" in e)) return !0;
        const r = e.ownerDocument.defaultView.getComputedStyle(e),
          i = "x" === t ? r.overflowX : r.overflowY;
        return "auto" === i || "scroll" === i;
      }
      const V = { x: "y", y: "x" };
      const q = new P("FocusHistory"),
        K = q.Debug;
      class $ {
        m_root;
        constructor(e) {
          this.m_root = e;
        }
        static SerializeNavState(e, t = !0, r = !0) {
          return {
            root: $.SerializeNavNode(e, t, r),
            bHadFocus: e.BFocusWithin() && e.Tree.BIsActiveWithinContext(),
          };
        }
        static SerializeNavNode(e, t = !0, r = !0) {
          let i;
          const [n, s] = e.GetChildren();
          n.length &&
            -1 != s &&
            t &&
            (i = n.map((e, t) => $.SerializeNavNode(e, t == s || r, r)));
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
            $.RestoreSerializedNavNode(e, n),
              (1 == r || (0 == r && s)) && e.BTakeFocus(i.APPLICATION);
          });
        }
        static RestoreSerializedNavNode(e, t, r = 0) {
          const { sNavKey: i, iActiveChild: n = -1, rgChildren: s } = t;
          i && U(i == e.NavKey, "navkey mismatch"), e.SetActiveChild(n);
          const a = q.IsDebugEnabled()
            ? `[${e.Tree.id}]${(function (e) {
                if (0 == e) return "";
                let t = "";
                for (let r = 0; r < e; r++) t += "*";
                return (t += " "), t;
              })(r)}`
            : "";
          if (s && s.length) {
            const [t] = e.GetChildren();
            if (-1 != n && q.IsDebugEnabled()) {
              const r = s.length != t.length;
              K(
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
              t && $.RestoreSerializedNavNode(t, e, r + 1);
            }
            if (-1 != n && s[n]?.sNavKey) {
              const r = i.get(s[n].sNavKey);
              K(
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
              $.RestoreSerializedNavNode(t[o], s[l], r + 1), o++, l++;
            }
          }
        }
      }
      function Q(e) {
        return $.SerializeNavState(e, !0, !1);
      }
      function Y(e, t, r = 0) {
        return $.RestoreSerializedNavState(e, t, r);
      }
      class X extends $ {
        m_rgHistory = [];
        PushState() {
          this.m_rgHistory.push($.SerializeNavState(this.m_root));
        }
        PopState(e = 0) {
          this.m_rgHistory.length &&
            $.RestoreSerializedNavState(this.m_root, this.m_rgHistory.pop(), e);
        }
      }
      class J extends $ {
        m_mapHistory = new Map();
        SaveState(e) {
          this.m_mapHistory.set(e, $.SerializeNavState(this.m_root));
        }
        RestoreState(e, t = 0) {
          const r = this.m_mapHistory.get(e);
          return (
            !!r &&
            (console.log(`Restoring history for state ${e}`),
            $.RestoreSerializedNavState(this.m_root, r, t),
            !0)
          );
        }
      }
      class Z {
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
          this.m_History || (this.m_History = new X(this.m_node)),
            this.m_History.PushState();
        }
        PopState(e = 0) {
          this.m_History && this.m_History.PopState(e);
        }
        SaveState(e) {
          this.m_StateHistory || (this.m_StateHistory = new J(this.m_node)),
            this.m_StateHistory.SaveState(e);
        }
        RestoreState(e, t = 0) {
          return (
            !!this.m_StateHistory && this.m_StateHistory.RestoreState(e, t)
          );
        }
        GetFocusSnapshot() {
          return Q(this.m_node);
        }
        RestoreFocusSnapshot(e, t = 0) {
          return Y(this.m_node, e, t);
        }
        NavTree() {
          return this.m_node.Tree;
        }
        Node() {
          return this.m_node;
        }
      }
      function ee(e, t, r, i = 0.001) {
        return "x" == e
          ? t.right > r.left + i && t.left + i < r.right
          : "y" == e
            ? t.bottom > r.top + i && t.top + i < r.bottom
            : (U(!1, `Invalid axis ${e}`), !1);
      }
      function te(e, t, r) {
        let i;
        return (
          "x" == e
            ? (i = Math.min(t.right, r.right) - Math.max(t.left, r.left))
            : "y" == e
              ? (i = Math.min(t.bottom, r.bottom) - Math.max(t.top, r.top))
              : (U(!1, `Invalid axis ${e}`), (i = 0)),
          i < 0 ? 0 : i
        );
      }
      function re(e, t) {
        return "x" == e
          ? { min: t.left, max: t.right }
          : { min: t.top, max: t.bottom };
      }
      function ie(e, t, r) {
        const i = t[e],
          n = re(e, r);
        return i < n.min ? n.min - i : i > n.max ? i - n.max : 0;
      }
      function ne(e) {
        if (!e) return ze.NONE;
        const t = e.ownerDocument.defaultView,
          r = t.getComputedStyle(e);
        if ("flex" == r.display)
          switch (r.flexDirection) {
            case "row":
              return "wrap" == r.flexWrap ? ze.GRID : ze.ROW;
            case "row-reverse":
              return ze.ROW_REVERSE;
            case "column":
              return ze.COLUMN;
            case "column-reverse":
              return ze.COLUMN_REVERSE;
          }
        else {
          if ("grid" == r.display)
            return "none" !== r.gridTemplateAreas ? ze.GEOMETRIC : ze.GRID;
          if (e.childElementCount > 0) {
            const r = t.getComputedStyle(e.firstElementChild);
            if ("left" === r.float) return ze.ROW;
            if ("right" === r.float) return ze.ROW_REVERSE;
            if ("inline" === r.display || "inline-block" === r.display)
              return ze.GRID;
          }
        }
        return ze.COLUMN;
      }
      function se(e) {
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
      function ae(e, t, r) {
        const i = [],
          [n, s] = e.GetChildren(),
          a = e.GetActiveChild();
        let o;
        const l = a ? a.Element?.getBoundingClientRect() : null;
        if (a) {
          const e = ce(a, t, r);
          if (
            e &&
            !e.offScreen &&
            ((o = oe(a, e, e.overlap, r)), o && !o.visibility.offScreen)
          )
            return o;
          e && i.push({ child: a, visibility: e });
        }
        const c = r || l;
        for (let e = 0; e < n.length; e++) {
          const r = n[e];
          if (r == a) continue;
          const s = ce(r, t, c ?? void 0);
          s && i.push({ child: r, visibility: s });
        }
        let u;
        i.sort(le);
        for (const e of i) {
          const { child: r, visibility: i } = e;
          if (i.offScreen && u) {
            if (!u.visibility.offScreen) break;
            if (i.distance && i.distance > u.visibility.distance) break;
          }
          const n = r == a ? o : oe(r, i, i.overlap || t, c ?? void 0);
          n && (!u || le(n, u) < 0) && (u = n);
        }
        return u;
      }
      function oe(e, t, r, i) {
        switch (e.GetFocusable()) {
          case "none":
            return;
          case "children":
            return ae(e, t.overlap || r, i);
          case "self":
            return { child: e, visibility: t };
        }
      }
      function le(e, t) {
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
      function ce(e, t, r) {
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
      function ue(e, t, r) {
        return null == e || isNaN(e) ? e : Math.max(t, Math.min(r, e));
      }
      class de {
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
      class me extends de {
        m_fnCallback;
        constructor(e, t, r) {
          super(e, t), (this.m_fnCallback = r);
        }
        Update(e) {
          this.m_fnCallback(e);
        }
      }
      class ge extends de {
        m_object;
        m_propTargets;
        m_props = {};
        constructor(e, t, r) {
          super("ownerDocument" in e ? k(e) : e, r),
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
      const _e = new P("ScrollSnap").Debug;
      let he = !1;
      let be;
      function fe(e, t, r, n, s) {
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
            (void 0 === l && (l = he ? Pe.NoTransform : Pe.Standard),
            n?.m_Properties?.fnScrollIntoViewHandler)
          ) {
            if (!1 !== n.m_Properties.fnScrollIntoViewHandler(e, t, n))
              continue;
          }
          const u = n.m_element,
            d = l == Pe.NoTransform || l == Pe.NoTransformSparseContent || !c;
          if (t || r === i.GAMEPAD) {
            const t = d ? Be(u) : u.getBoundingClientRect(),
              r = u.ownerDocument.defaultView.innerHeight,
              i = 40,
              n = s ? i : Math.max(0.4 * r, i);
            let o = !1;
            const l = be && performance.now() - be < 500;
            (l || t.bottom < -n || t.top > r + n) &&
              ((o = !0),
              l ||
                _e(
                  `Disabling smooth scrolling, ${t.bottom} < ${-n}, ${t.top} > ${r} + ${n} `,
                ));
            let c = o ? "auto" : "smooth";
            o && (be = performance.now()),
              e.Tree.Controller.BIsRestoringHistory() && (c = "auto"),
              d
                ? Re(a, u, c)
                : (_e(
                    `Scrolling Into View ('${c}' via browser scrollIntoView):`,
                    u,
                  ),
                  u.scrollIntoView({ behavior: c, block: "nearest" }));
          } else
            _e("No previous element for scrolling, will jump"),
              d
                ? Re(a, u, "auto")
                : (_e(
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
          const r = se(t);
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
              pe(n.Element, t, r),
            n != i);
            n = n.GetNavParentCrossingTrees()
          );
        })(e, n);
      }
      function pe(e, t, r) {
        let i = e,
          n = i.ownerDocument;
        if (
          (i == n.body && n.defaultView && !H(i, r) && (i = n.defaultView),
          !H(i, r))
        )
          return;
        const s = Ae(i);
        if ("y" == r) {
          const e = t == a.pR.DIR_DOWN ? s.MaxScrollTop() : 0;
          s.scrollTo({ top: e, behavior: "smooth" });
        } else {
          const e = t == a.pR.DIR_RIGHT ? s.MaxScrollLeft() : 0;
          s.scrollTo({ left: e, behavior: "smooth" });
        }
      }
      function Be(e) {
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
          const { scrollTop: e, scrollLeft: n } = Ne(i);
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
      function we(e, t) {
        return "x" == t
          ? [e.left, e.right, e.right - e.left]
          : [e.top, e.bottom, e.bottom - e.top];
      }
      function ye(e, t, r, i) {
        let [n, s, a] = we(e, i),
          [o, l, c] = we(t, i),
          [u, d] = we(r, i);
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
      function Se(e) {
        return "auto" == e
          ? 0
          : e.endsWith("px")
            ? parseInt(e)
            : (console.log("Unsupported length", e), 0);
      }
      function ve(e) {
        if (!("ownerDocument" in e))
          return { left: 0, right: 0, top: 0, bottom: 0 };
        const t = e.ownerDocument.defaultView.getComputedStyle(e);
        return {
          left: Se(t.scrollMarginLeft),
          right: Se(t.scrollMarginRight),
          top: Se(t.scrollMarginTop),
          bottom: Se(t.scrollMarginBottom),
        };
      }
      function Me(e, t) {
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
              left: Se(t.scrollPaddingLeft),
              right: Se(t.scrollPaddingRight),
              top: Se(t.scrollPaddingTop),
              bottom: Se(t.scrollPaddingBottom),
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
      function Ce(e) {
        return e > -1 && e < 1;
      }
      function Re(e, t, r, i, n) {
        _e(
          "----------------------------------------------------------------------------------",
        ),
          _e("Scrolling Into View (NoTransform):", t);
        let s = [],
          a = t,
          o = Be(t),
          l = n ?? Number.MAX_VALUE;
        for (; a; ) {
          let e = j(a);
          e || (e = k(a));
          let t = ve(a),
            r = Me(e, Be(e)),
            c = Ae(e),
            u = { element: e, left: 0, top: 0 };
          if (
            (_e(
              "Checking scroll div",
              e,
              `scroll y:${c.scrollTop} of ${c.MaxScrollTop()}, x:${c.scrollLeft} of ${c.MaxScrollLeft()}, adjusted =>`,
              r,
              "target => ",
              o,
            ),
            (i && "y" != i) ||
              !H(e, "y") ||
              ((u.top = ye(o, r, t, "y")),
              (u.top = ue(u.top, -c.scrollTop, c.MaxScrollTop() - c.scrollTop)),
              n &&
                ((u.top = Math.min(l, Math.abs(u.top)) * (u.top < 0 ? -1 : 1)),
                (l -= Math.abs(u.top))),
              _e(`- checked y: ${u.top}`)),
            (i && "x" != i) ||
              !H(e, "x") ||
              ((u.left = ye(o, r, t, "x")),
              (u.left = ue(
                u.left,
                -c.scrollLeft,
                c.MaxScrollLeft() - c.scrollLeft,
              )),
              n &&
                ((u.left =
                  Math.min(l, Math.abs(u.left)) * (u.left < 0 ? -1 : 1)),
                (l -= Math.abs(u.left))),
              _e(`- checked x: ${u.left}`)),
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
          if (Ce(e.left) && Ce(e.top)) continue;
          let t = Ae(e.element),
            i = t.scrollTop + e.top,
            n = t.scrollLeft + e.left;
          (n = ue(n, 0, t.MaxScrollLeft())),
            (i = ue(i, 0, t.MaxScrollTop())),
            (Ce(t.scrollLeft - n) && Ce(t.scrollTop - i)) ||
              (t.scrollTo({ left: n, top: i, behavior: r }),
              c || (_e("Scrolling:"), (c = !0)),
              _e(
                `- ${e.top},${e.left} => ${i}, ${n}, behavior: ${r}`,
                e.element,
              ));
        }
      }
      function Te(e, t) {
        const { top: r, left: i, behavior: n } = t,
          s = Ae(e);
        s.scrollTo({
          top: s.scrollTop + (r ?? 0),
          left: s.scrollLeft + (i ?? 0),
          behavior: n,
        });
      }
      class Ie {
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
                this.m_animation = new me(this.m_window, e, (e) => {
                  this.m_window?.scrollTo({
                    left: i + (t - i) * e,
                    top: n + (r - n) * e,
                    behavior: "auto",
                  });
                });
              } else
                (this.m_element.style.scrollSnapType = "initial"),
                  (this.m_animation = new ge(
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
      (0, b.Cg)([f.o], Ie.prototype, "ResetScrollState", null);
      const Fe = new WeakMap();
      function Ae(e) {
        let t = Fe.get(e);
        return t || ((t = new Ie(e)), Fe.set(e, t)), t;
      }
      function Ne(e) {
        const t = Fe.get(e);
        return t
          ? { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop }
          : { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
      }
      const Ee = new P("FocusNavigationMovement"),
        Oe = Ee.Debug;
      var ze, De, Pe, We;
      !(function (e) {
        (e[(e.NONE = 0)] = "NONE"),
          (e[(e.COLUMN = 1)] = "COLUMN"),
          (e[(e.ROW = 2)] = "ROW"),
          (e[(e.COLUMN_REVERSE = 3)] = "COLUMN_REVERSE"),
          (e[(e.ROW_REVERSE = 4)] = "ROW_REVERSE"),
          (e[(e.GRID = 5)] = "GRID"),
          (e[(e.GEOMETRIC = 6)] = "GEOMETRIC");
      })(ze || (ze = {})),
        (function (e) {
          (e[(e.FIRST = 0)] = "FIRST"),
            (e[(e.LAST = 1)] = "LAST"),
            (e[(e.MAINTAIN_X = 2)] = "MAINTAIN_X"),
            (e[(e.MAINTAIN_Y = 3)] = "MAINTAIN_Y"),
            (e[(e.PREFERRED_CHILD = 4)] = "PREFERRED_CHILD");
        })(De || (De = {})),
        (function (e) {
          (e[(e.Standard = 0)] = "Standard"),
            (e[(e.NoTransform = 1)] = "NoTransform"),
            (e[(e.NoTransformSparseContent = 2)] = "NoTransformSparseContent");
        })(Pe || (Pe = {})),
        (function (e) {
          (e[(e.INVALID = 0)] = "INVALID"),
            (e[(e.FORWARD = 1)] = "FORWARD"),
            (e[(e.BACKWARD = 2)] = "BACKWARD");
        })(We || (We = {}));
      class Ge {
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
        m_Focused = E(!1);
        m_FocusWithin = E(!1);
        m_ActionDescriptionsChangedCallbackList = new I.l();
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
          return new Z(this);
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
          if (!this.m_Properties?.focusRingSizeElementID) return;
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
              (U(
                !this.m_ActiveChild && this.BFocusWithin(),
                "Invalid focus state in AddChild",
              ),
              this.SetActiveChild(this.m_rgChildren.length - 1));
        }
        OnMount(e) {
          (this.m_element = e),
            this.m_Parent
              ? this.m_Parent.AddChild(this)
              : U(this == this.m_Tree.Root, "Only root should have no parent"),
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
              U(
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
            (Oe(
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
              : U(this == this.m_Tree.Root, "Only root should have no parent");
        }
        RegisterDOMEvents() {
          !this.m_rgNavigationHandlers.length &&
            this.m_element &&
            (this.m_rgChildren.length >= 2 ||
              this.m_Properties?.layout != ze.NONE ||
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
          U(-1 !== t, "Child was not found to remove"),
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
                  Oe(
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
            We.FORWARD,
            a.pR.INVALID,
          );
          return this.InternalFocusDescendant(t, e);
        }
        BFocusLastChild(e) {
          const t = this.FindNextFocusableChildInDirection(
            this.m_rgChildren.length,
            We.BACKWARD,
            a.pR.INVALID,
          );
          return this.InternalFocusDescendant(t, e);
        }
        FindFocusableDescendant(e, t) {
          const r = se(e),
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
                  o == ze.ROW_REVERSE ||
                  o == ze.COLUMN_REVERSE ||
                  n == De.LAST
                    ? this.m_rgChildren.length - 1
                    : 0),
              n == De.MAINTAIN_X
                ? (c = "x")
                : n == De.MAINTAIN_Y
                  ? (c = "y")
                  : o == ze.GEOMETRIC && r && (c = V[r]),
              (c || t) && r)
            ) {
              const i = this.m_Tree.GetLastFocusedNode();
              if (t || (i && c == V[r])) {
                const s =
                  t ||
                  this.AdjustRectForLastMovementOnTangentAxis(
                    i.GetBoundingRect(),
                    r,
                  );
                Oe(
                  `Taking focus while preserving ${n && De[n]} preserved: ${c} movement: ${r}, node:`,
                  s,
                ),
                  (l = this.FindClosestFocusableNodeToRect(e, s));
              } else if (c != V[r]) {
                const t = this.ComputeRelativeDirection(e, ze.GRID),
                  r = t == We.BACKWARD ? this.m_rgChildren.length : -1;
                l = this.FindNextFocusableChildInDirection(r, t, e);
              }
            } else if (n == De.PREFERRED_CHILD) {
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
              n == De.LAST &&
                (l = this.FindNextFocusableChildInDirection(
                  a + 1,
                  We.BACKWARD,
                  e,
                ));
            return (
              l ||
                (l = this.FindNextFocusableChildInDirection(
                  a - 1,
                  We.FORWARD,
                  e,
                )),
              l ||
                (l = this.FindNextFocusableChildInDirection(a, We.BACKWARD, e)),
              l || (i ? this : null)
            );
          }
          return null;
        }
        BVisibleChildTakeFocus(e) {
          const t = this.Element?.ownerDocument?.defaultView ?? window,
            r = ae(this, {
              top: 0,
              left: 0,
              right: t.innerWidth,
              bottom: t.innerHeight,
            });
          return (
            Oe(
              `Focusing visible child, best child match is ${r?.child?.Element?.className} - ${JSON.stringify(r?.visibility)}`,
            ),
            !!r && r.child.BTakeFocus(e)
          );
        }
        GetLayout() {
          if (this.m_Properties?.layout) return this.m_Properties.layout;
          if (this.m_rgChildren.length < 2) return ze.NONE;
          return ne(this.m_element);
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
          if (r == We.INVALID) return null;
          if (this.m_Properties?.focusable && this.BHasFocus()) return null;
          if ((this.EnsureChildrenSorted(!0), t == ze.GRID))
            return this.FindNextFocusableChildInGrid(
              this.GetActiveChildIndex(),
              r,
              e,
            );
          if (t == ze.GEOMETRIC)
            return this.FindNextFocusableChildGeometric(r, e);
          let i = this.GetActiveChildIndex();
          return (
            this.IsValidChildIndex(i) ||
              (i = r == We.FORWARD ? -1 : this.m_rgChildren.length),
            this.FindNextFocusableChildInDirection(i, r, e)
          );
        }
        BTryInternalNavigation(e, t) {
          Oe(
            `Handling navigation event ${a.pR[e]} - ${ze[this.GetLayout()]}`,
            this.m_element,
          );
          const r = this.FindNextFocusableChild(e);
          if (!r) return !1;
          const n = se(e),
            s = this.ComputeRelativeDirection(e, this.GetLayout());
          if (
            this.GetScrollIntoViewType() == Pe.NoTransformSparseContent ||
            r.GetScrollIntoViewType() == Pe.NoTransformSparseContent
          ) {
            const e = r.Element?.ownerDocument.defaultView;
            if (e) {
              const i =
                  ("y" == n ? e.innerHeight : e.innerWidth) / (t ? 4.5 : 3.33),
                a = Be(r.Element);
              let o = !1;
              if (
                ("y" == n
                  ? s == We.FORWARD
                    ? (o =
                        a.top > e.innerHeight && a.bottom > e.innerHeight + i)
                    : s == We.BACKWARD && (o = a.bottom < 0 && a.top < -i)
                  : "x" == n &&
                    (s == We.FORWARD
                      ? (o =
                          a.left > e.innerWidth && a.right > e.innerWidth + i)
                      : s == We.BACKWARD && (o = a.right < 0 && a.left < -i)),
                o)
              )
                return (
                  Oe(`Element too far away, scrolling ${i} on ${n} axis `),
                  Re(r.Element, r.Element, "smooth", n, i),
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
              : Pe.Standard;
        }
        GetRelativeDirection(e) {
          return this.ComputeRelativeDirection(e, this.GetLayout());
        }
        ComputeRelativeDirection(e, t) {
          let r = t == ze.ROW_REVERSE || t == ze.COLUMN_REVERSE;
          switch (t) {
            case ze.ROW:
            case ze.ROW_REVERSE:
              switch (e) {
                case a.pR.DIR_LEFT:
                  return r ? We.FORWARD : We.BACKWARD;
                case a.pR.DIR_RIGHT:
                  return r ? We.BACKWARD : We.FORWARD;
                default:
                  return We.INVALID;
              }
            case ze.COLUMN:
            case ze.COLUMN_REVERSE:
              switch (e) {
                case a.pR.DIR_UP:
                  return r ? We.FORWARD : We.BACKWARD;
                case a.pR.DIR_DOWN:
                  return r ? We.BACKWARD : We.FORWARD;
                default:
                  return We.INVALID;
              }
            case ze.GRID:
            case ze.GEOMETRIC:
              switch (e) {
                case a.pR.DIR_LEFT:
                case a.pR.DIR_UP:
                  return r ? We.FORWARD : We.BACKWARD;
                case a.pR.DIR_RIGHT:
                case a.pR.DIR_DOWN:
                  return r ? We.BACKWARD : We.FORWARD;
                default:
                  return We.INVALID;
              }
            default:
              return We.INVALID;
          }
        }
        AdvanceIndex(e, t) {
          return e + (t == We.FORWARD ? 1 : -1);
        }
        FindNextFocusableChildInDirection(e, t, r) {
          let i = t == We.FORWARD ? 1 : -1;
          for (let t = e + i; t >= 0 && t < this.m_rgChildren.length; t += i) {
            const e = this.m_rgChildren[t].FindFocusableNode(r);
            if (e) return e;
          }
          return null;
        }
        ScanChildren(e, t, r) {
          let i = t == We.FORWARD ? 1 : -1;
          for (let t = e; t >= 0 && t < this.m_rgChildren.length; t += i)
            if (r(this.m_rgChildren[t], t)) return t;
          return -1;
        }
        FindNextFocusableChildInGrid(e, t, r) {
          const i = r == a.pR.DIR_UP || r == a.pR.DIR_DOWN,
            n = this.GetLastFocusElement();
          if (!n || n == this.m_element)
            return (
              U(
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
                (e) => !ee("y", s, e.GetBoundingRect()),
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
            let i = t == We.FORWARD ? 1 : -1;
            for (
              let n = this.AdvanceIndex(e, t);
              n >= 0 && n < this.m_rgChildren.length;
              n += i
            ) {
              const e = this.m_rgChildren[n];
              if (!ee("y", s, e.GetBoundingRect())) return null;
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
              U(
                !1,
                "No active child for geometric navigation",
                this.m_iLastActiveChildIndex,
                this.m_rgChildren.length,
                r,
              ),
              this.FindFocusableDescendant(t)
            );
          const i = se(t);
          if (!i) return null;
          const n = this.AdjustRectForLastMovementOnTangentAxis(
            this.GetActiveDescendant().GetBoundingRect(),
            i,
          );
          return this.FindClosetChildInDirection(i, n, e, t);
        }
        AdjustRectForLastMovementOnTangentAxis(e, t) {
          const r = this.m_Tree.GetLastFocusedMovementRect(V[t]);
          return r
            ? "x" == t
              ? { left: e.left, right: e.right, top: r.top, bottom: r.bottom }
              : { left: r.left, right: r.right, top: e.top, bottom: e.bottom }
            : e;
        }
        FindClosestFocusableNodeToRect(e, t) {
          const r = se(e),
            i = r && V[r],
            n = [];
          for (const e of this.m_rgChildren) {
            const r = e.GetBoundingRect();
            if (r) {
              const s = L(t, r),
                a = i ? te(i, t, r) : 0;
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
          Oe(
            `Find child closest to rect, rect is at left ${t.left} top ${t.top} right ${t.right} bottom ${t.bottom}`,
          );
          const n = re(e, t),
            s = [];
          for (const i of this.m_rgChildren) {
            const a = i.GetBoundingRect();
            if (a) {
              const o = re(e, a);
              let l;
              (l = r == We.FORWARD ? o.min - n.max : n.min - o.max),
                l >= 0 &&
                  s.push({ child: i, overlap: te(V[e], t, a), dist: l });
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
            Ee.IsDebugEnabled())
          ) {
            const e = s
              .slice(0, 3)
              .map(
                ({ dist: e, overlap: t, child: r }) =>
                  `[ node: ${r.m_element?.className} dist: ${e} overlap: ${t} ]`,
              );
            Oe(`Found nodes on axis, top 3 (of ${s.length}: ${e.join(", ")}`);
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
              (!(!s || ee(V[e], s, r)) ||
                (a.push({ child: t, overlap: te(e, i, r), dist: ie(e, o, r) }),
                !1))
            );
          }),
            t == We.BACKWARD && a.reverse(),
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
          e instanceof Ge
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
              ? (U(
                  !this.m_Tree.BUseVirtualFocus(),
                  "Virtual focus tree should not have browser focus",
                ),
                this.m_element?.focus({ preventScroll: !0 }))
              : this.m_Tree.BUseVirtualFocus() ||
                Oe(
                  `Didn't move focus to element as tree ${this.m_Tree.id} is not active focus tree`,
                ),
            this.m_Tree.BIsActive() && fe(this, t, e, r, i);
        }
      }
      (0, b.Cg)([f.o], Ge.prototype, "OnDOMFocus", null),
        (0, b.Cg)([f.o], Ge.prototype, "OnDOMBlur", null),
        (0, b.Cg)([f.o], Ge.prototype, "OnNavigationEvent", null);
      const Ue = new P("FocusNavigation").Debug,
        xe = new P("GamepadEvents").Debug;
      class Le extends Ge {
        m_wrappedTree;
        m_rgCallbackRegistrations = new D();
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
          Ue(
            "Wrapped tree activated, " +
              (this.BHasFocus()
                ? "but we already have focus"
                : "transferring focus"),
          ),
            this.BHasFocus() || this.m_Tree.TransferFocus(i.APPLICATION, this);
        }
        OnWrappedTreeUnhandledButton(e) {
          return (
            xe(
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
      (0, b.Cg)([f.o], Le.prototype, "OnWrappedTreeActivated", null),
        (0, b.Cg)([f.o], Le.prototype, "OnWrappedTreeUnhandledButton", null),
        (0, b.Cg)([f.o], Le.prototype, "CanTakeFocus", null);
      const ke = new P("FocusHistory").Debug;
      function je(e) {
        const t = (t) => {
            ke(
              `preserving state and suppressing focus for tree ${e.id} for navigation type ${t.navigationType}`,
            );
            const r = window.navigation.currentEntry?.getState() ?? {};
            if ("replace" != t.navigationType) {
              const t = Q(e.Root);
              window.navigation.updateCurrentEntry({
                state: { ...r, [Ve(e)]: t },
              });
            } else
              r[$e] &&
                t.intercept({
                  async handler() {
                    const r = t.destination.getState() ?? {},
                      { [Ve(e)]: i, ...n } = r;
                    window.navigation.updateCurrentEntry({
                      state: { ...n, [$e]: !0 },
                    });
                  },
                  focusReset: "manual",
                });
            e.DeferredFocus.SuppressFocus();
          },
          r = (t) => {
            He(e)
              ? e.DeferredFocus.Reset()
              : e.DeferredFocus.ExecuteQueuedFocus();
          },
          i = new D();
        return (
          window.navigation.addEventListener("navigate", t),
          i.Push(() => window.navigation.removeEventListener("navigate", t)),
          window.navigation.addEventListener("navigatesuccess", r),
          i.Push(() =>
            window.navigation.removeEventListener("navigatesuccess", r),
          ),
          (function () {
            if (!Ke) {
              Ke = new I.l();
              const e = performance.now(),
                t = (t) => {
                  "string" == typeof t.data &&
                    "FocusRestoreReady" == t.data &&
                    (ke(
                      `Got FocusRestoreReady event from page after ${performance.now() - e}ms, will record in history.  ${Ke.CountRegistered()} trees waiting.`,
                    ),
                    window.navigation.updateCurrentEntry({
                      state: {
                        ...window.navigation.currentEntry?.getState(),
                        [$e]: !0,
                      },
                    }),
                    Ke.Dispatch(),
                    Ke.ClearAllCallbacks(),
                    window.clearTimeout(r));
                };
              window.addEventListener("message", t);
              const r = window.setTimeout(() => {
                Ke.CountRegistered() &&
                  (console.warn(
                    "Waited 4000ms for FocusRestoreReady, proceeding",
                  ),
                  Ke.Dispatch());
              }, 4e3);
            }
          })(),
          (function () {
            const e = window.navigation.currentEntry?.getState();
            return (
              ke(`Wait for page? ${e?.[$e] ? "wait" : "no"} `, e), !!e?.[$e]
            );
          })()
            ? (function (e, t) {
                if (window.__bFocusRestoreReady) return void He(e);
                ke(
                  `Wait for page enabled, suppressing focus in ${e.id} until we hear that page is ready`,
                ),
                  e.DeferredFocus.SuppressFocus();
                const r = qe(e),
                  i = () => {
                    He(e, r)
                      ? e.DeferredFocus.Reset()
                      : e.DeferredFocus.ExecuteQueuedFocus();
                  },
                  n = Ke.Register(i).Unregister;
                t.Push(n);
              })(e, i)
            : He(e),
          i.GetUnregisterFunc()
        );
      }
      function He(e, t) {
        const r = t ?? qe(e);
        return (
          ke(
            `Restoring focus state for ${e.id}, ${r ? "history available" : "no history"}`,
          ),
          !!r && (Y(e.Root, r, 0), !0)
        );
      }
      function Ve(e) {
        return `FocusHistory_${e.id}`;
      }
      function qe(e) {
        const t = window.navigation.currentEntry?.getState();
        return t?.[Ve(e)];
      }
      let Ke;
      const $e = "FocusHistoryWaitForPage";
      const Qe = new P("FocusNavigation").Debug,
        Ye = new P("GamepadEvents").Debug;
      class Xe {
        m_Controller;
        m_context;
        m_window;
        m_ParentNavTree;
        m_rgChildNavTrees = [];
        m_ID;
        m_valueIsMounted = E(!1);
        m_bIsEnabled = !1;
        m_tsLastActivated;
        m_Root;
        m_onActivateCallbacks = new I.l();
        m_onDeactivateCallbacks = new I.l();
        m_onActiveFocusStateChangedCallbacks = new I.l();
        m_onChildTreesChanged = new I.l();
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
            (this.m_Root = new Ge(this, null, null)),
            this.m_Root.SetProperties({ layout: ze.COLUMN }),
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
          return new Ge(this, e, t);
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
        m_lastFocusNodeXMovement = new Je();
        m_lastFocusNodeYMovement = new Je();
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
          const r = new D();
          return (
            this.m_valueIsMounted.Set(!0),
            r.Push(() => this.m_valueIsMounted.Set(!1)),
            this.m_ParentNavTree &&
              r.Push(this.m_ParentNavTree.AddChildNavTree(this)),
            "navigationapi" == this.m_Properties.historyMode &&
              r.Push(je(this)),
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
              T.x9(this.m_rgOnUnhandledButton, e);
            }
          );
        }
        RegisterGlobalButtonHandler(e, t, r) {
          const i = { button: e, fnCallback: t, description: r };
          return (
            this.m_rgGlobalButtonHandlers.push(i),
            this.UpdateRootActionDescriptionMap(),
            () => {
              T.x9(this.m_rgGlobalButtonHandlers, i),
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
            Ye(
              `Logical gamepad Event fired: ${a.pR[e.detail.button]}, had logical event: ${r}, was handled: ${!t}`,
            ),
            t && (t = this.TryRootButtonListeners(e)),
            t && (t = this.m_Controller.FireUnhandledGamepadEventCallbacks(e)),
            e.stopPropagation(),
            t
          );
        }
        m_DeferredFocus = new Ze(this);
        get DeferredFocus() {
          return this.m_DeferredFocus;
        }
        AddChildNavTree(e) {
          return (
            this.m_rgChildNavTrees.push(e),
            this.OnChildTreesChangedCallbacks.Dispatch("add", e),
            () => {
              T.x9(this.m_rgChildNavTrees, e),
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
          const s = se(r),
            a = this.m_lastFocusNode;
          if (
            a == t &&
            (this.m_bWasActiveForLastFocusChange || !this.BIsActive())
          )
            return;
          Qe(
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
      class Je {
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
      class Ze {
        m_tree;
        m_target;
        m_interval;
        m_schExecuteQueuedFocus = new z();
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
              Qe(
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
      const et = new P("FocusNavigation").Debug;
      class tt {
        m_rootWindow;
        m_activeWindow;
        m_activeBrowserView;
        m_valueIsActive = E(!1);
        m_controller;
        m_rgGamepadNavigationTrees = [];
        m_LastActiveNavTree;
        m_LastActiveFocusNavTree;
        m_bMounted = !0;
        m_schDeferredActivate = new z();
        m_FocusChangedCallbacks = new I.l();
        m_NavTreeActivatedOrReactivatedCallbacks = new I.l();
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
            ? (et(`${this.LogName(e)} Destroying context for window`),
              (this.m_bMounted = !1),
              this.m_schDeferredActivate.Cancel(),
              this.SetActive(!1, e),
              this.m_controller.DestroyContext(this))
            : et(`${this.LogName(e)} Child window destroyed`);
        }
        SetActive(e, t, r = void 0) {
          this.m_controller.BatchedUpdate(() => {
            if (e && !this.m_controller.BCanActivateContext(this))
              return void et(
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
          });
        }
        OnActivate(e) {
          (this.BIsActive() &&
            this.m_activeWindow == e &&
            void 0 === this.m_activeBrowserView) ||
            (et(
              `${this.LogName(e)} Activating context, there are ${this.m_rgGamepadNavigationTrees.length} trees in this context`,
            ),
            this.SetActive(!0, e));
        }
        OnActivateBrowserView(e, t) {
          (this.BIsActive() &&
            this.m_activeWindow == e &&
            this.m_activeBrowserView == t) ||
            (et(`${this.LogName(e)} Browser View "${t}" activated in context`),
            this.SetActive(!0, e, t));
        }
        OnDeactivate(e) {
          this.m_activeWindow == e
            ? (et(`${this.LogName(e)} Deactivate context for window`),
              this.SetActive(!1, e))
            : et(
                `${this.LogName(e)} Blurred, but not deactivating because (${this.m_activeWindow?.name}) has focus.`,
              );
        }
        OnDeactivateBrowserView(e, t) {
          et(`${this.LogName(e)} Browser View "${t}" deactivated in context`),
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
          r && T.x9(this.m_rgGamepadNavigationTrees, r),
            e || (e = this.FindNavTreeToActivate());
          const i = this.m_LastActiveFocusNavTree == e;
          e && T.x9(this.m_rgGamepadNavigationTrees, e),
            (this.m_LastActiveNavTree = e),
            (e && e.BUseVirtualFocus()) || (this.m_LastActiveFocusNavTree = e),
            et(
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
            T.x9(this.m_rgGamepadNavigationTrees, e),
            this.m_rgGamepadNavigationTrees.unshift(e);
        }
        async UnregisterGamepadNavigationTree(e) {
          T.x9(this.m_rgGamepadNavigationTrees, e),
            et(
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
            U(e == this.m_iFocusChangeStack, "out of order focus pop"),
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
      var rt = r(663),
        it = r.n(rt);
      const nt = rt.BinaryReader.prototype,
        st = rt.BinaryWriter.prototype;
      function at(e) {
        const t = {},
          { fields: r } = e;
        for (const e in r) {
          const i = r[e];
          t[i.n] = i;
        }
        return t;
      }
      function ot(e, t) {
        const { proto: r, fields: i } = e,
          n = new r();
        if (null == t) return n;
        for (const e in i) {
          const { n: r, c: s, r: a, d: o, q: l } = i[e];
          if (!Object.prototype.hasOwnProperty.call(t, e)) continue;
          const c = t[e];
          s
            ? a
              ? rt.Message.setRepeatedWrapperField(
                  n,
                  r,
                  Array.isArray(c) ? c.map((e) => s.fromObject(e)) : [],
                )
              : rt.Message.setWrapperField(n, r, s.fromObject(c))
            : rt.Message.setField(n, r, c);
        }
        return n;
      }
      function lt(e, t, r) {
        const { proto: i, fields: n } = e,
          s = {};
        for (const e in n) {
          const { n: i, c: a, r: o, d: l, q: c } = n[e];
          if (a)
            if (o)
              s[e] = rt.Message.toObjectList(
                rt.Message.getRepeatedWrapperField(r, a, i),
                a.toObject,
                t,
              );
            else {
              const n = rt.Message.getWrapperField(r, a, i, c ? 1 : 0);
              n && (s[e] = a.toObject(t, n));
            }
          else {
            const t = rt.Message.getFieldWithDefault(
              r,
              i,
              void 0 !== l ? l : null,
            );
            (null !== t || c) && (s[e] = t);
          }
        }
        return t && (s.$jspbMessageInstance = r), s;
      }
      function ct(e, t, r) {
        for (; r.nextField() && !r.isEndGroup(); ) {
          const i = e[r.getFieldNumber()];
          if (i) {
            const { n: e, c: n, r: s, d: a, q: o, br: l } = i;
            if (n) {
              const i = new n();
              r.readMessage(i, n.deserializeBinaryFromReader),
                s
                  ? rt.Message.addToRepeatedWrapperField(t, e, i, n)
                  : rt.Message.setWrapperField(t, e, i);
            } else if (l) {
              const i = l.call(r);
              s
                ? rt.Message.addToRepeatedField(t, e, i)
                : rt.Message.setField(t, e, i);
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
      function ut(e, t, r) {
        const { fields: i } = e;
        for (const e in i) {
          const { n, c: s, r: a, d: o, q: l, bw: c } = i[e];
          if (s)
            if (a) {
              const e = rt.Message.getRepeatedWrapperField(t, s, n);
              ((e && e.length) || l) &&
                r.writeRepeatedMessage(n, e, s.serializeBinaryToWriter);
            } else {
              const e = rt.Message.getWrapperField(t, s, n, l ? 1 : 0);
              e && r.writeMessage(n, e, s.serializeBinaryToWriter);
            }
          else if (c) {
            const e = rt.Message.getField(t, n);
            void 0 !== e && c.call(r, n, e);
          } else
            console.assert(
              !!c,
              `Writer func not set for field number ${n} in class ${s}`,
            );
        }
      }
      function dt(e) {
        const t = e.proto;
        for (const r in e.fields) {
          const i = e.fields[r],
            { n, c: s, r: a, d: o, q: l } = i;
          Object.prototype.hasOwnProperty.call(i, "d")
            ? (t.prototype[r] = mt(rt.Message.getFieldWithDefault, n, o))
            : (t.prototype[r] = s
                ? a
                  ? mt(rt.Message.getRepeatedWrapperField, s, n)
                  : gt(s, n)
                : mt(rt.Message.getField, n)),
            (t.prototype[`set_${r}`] = _t(
              s
                ? a
                  ? rt.Message.setRepeatedWrapperField
                  : rt.Message.setWrapperField
                : rt.Message.setField,
              n,
            )),
            a && (t.prototype[`add_${r}`] = ht(n, s));
        }
      }
      function mt(e, ...t) {
        return function () {
          return e(this, ...t);
        };
      }
      function gt(e, t) {
        return function (r = !0) {
          return rt.Message.getWrapperField(this, e, t, r ? 1 : 0);
        };
      }
      function _t(e, t) {
        return function (r) {
          return e(this, t, r);
        };
      }
      function ht(e, t) {
        return t
          ? function (r, i) {
              return rt.Message.addToRepeatedWrapperField(this, e, r, t, i);
            }
          : function (t, r) {
              rt.Message.addToRepeatedField(this, e, t, r);
            };
      }
      async function bt(e, t = "SHA-256") {
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
      class ft extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ft.prototype.original_hostname || dt(ft.M()),
            rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ft.sm_m ||
              (ft.sm_m = {
                proto: ft,
                fields: {
                  original_hostname: {
                    n: 1,
                    br: nt.readString,
                    bw: st.writeString,
                  },
                  actual_hostname: {
                    n: 2,
                    br: nt.readString,
                    bw: st.writeString,
                  },
                  path: { n: 3, br: nt.readString, bw: st.writeString },
                  base_name: { n: 4, br: nt.readString, bw: st.writeString },
                  success: { n: 5, br: nt.readBool, bw: st.writeBool },
                  status_code: { n: 6, br: nt.readUint32, bw: st.writeUint32 },
                  address_of_request_url: {
                    n: 7,
                    br: nt.readString,
                    bw: st.writeString,
                  },
                  response_time_ms: {
                    n: 8,
                    br: nt.readUint32,
                    bw: st.writeUint32,
                  },
                  bytes_received: {
                    n: 9,
                    br: nt.readUint64String,
                    bw: st.writeUint64String,
                  },
                  num_retries: { n: 10, br: nt.readUint32, bw: st.writeUint32 },
                },
              }),
            ft.sm_m
          );
        }
        static MBF() {
          return ft.sm_mbf || (ft.sm_mbf = at(ft.M())), ft.sm_mbf;
        }
        toObject(e = !1) {
          return ft.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(ft.M(), e, t);
        }
        static fromObject(e) {
          return ot(ft.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new ft();
          return ft.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(ft.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return ft.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(ft.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return ft.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_ClientBootstrap_RequestInfo";
        }
      }
      class pt extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            pt.prototype.launcher_type || dt(pt.M()),
            rt.Message.initialize(this, e, 0, -1, [7, 8], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            pt.sm_m ||
              (pt.sm_m = {
                proto: pt,
                fields: {
                  launcher_type: {
                    n: 1,
                    br: nt.readUint32,
                    bw: st.writeUint32,
                  },
                  steam_realm: { n: 2, br: nt.readUint32, bw: st.writeUint32 },
                  beta_name: { n: 3, br: nt.readString, bw: st.writeString },
                  download_completed: {
                    n: 4,
                    br: nt.readBool,
                    bw: st.writeBool,
                  },
                  total_time_ms: {
                    n: 6,
                    br: nt.readUint32,
                    bw: st.writeUint32,
                  },
                  manifest_requests: { n: 7, c: ft, r: !0, q: !0 },
                  package_requests: { n: 8, c: ft, r: !0, q: !0 },
                },
              }),
            pt.sm_m
          );
        }
        static MBF() {
          return pt.sm_mbf || (pt.sm_mbf = at(pt.M())), pt.sm_mbf;
        }
        toObject(e = !1) {
          return pt.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(pt.M(), e, t);
        }
        static fromObject(e) {
          return ot(pt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new pt();
          return pt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(pt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return pt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(pt.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return pt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_ClientBootstrap_Summary";
        }
      }
      class Bt extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Bt.prototype.class_100 || dt(Bt.M()),
            rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Bt.sm_m ||
              (Bt.sm_m = {
                proto: Bt,
                fields: {
                  class_100: { n: 1, br: nt.readUint32, bw: st.writeUint32 },
                  class_200: { n: 2, br: nt.readUint32, bw: st.writeUint32 },
                  class_300: { n: 3, br: nt.readUint32, bw: st.writeUint32 },
                  class_400: { n: 4, br: nt.readUint32, bw: st.writeUint32 },
                  class_500: { n: 5, br: nt.readUint32, bw: st.writeUint32 },
                  no_response: { n: 6, br: nt.readUint32, bw: st.writeUint32 },
                  class_unknown: {
                    n: 7,
                    br: nt.readUint32,
                    bw: st.writeUint32,
                  },
                },
              }),
            Bt.sm_m
          );
        }
        static MBF() {
          return Bt.sm_mbf || (Bt.sm_mbf = at(Bt.M())), Bt.sm_mbf;
        }
        toObject(e = !1) {
          return Bt.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(Bt.M(), e, t);
        }
        static fromObject(e) {
          return ot(Bt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new Bt();
          return Bt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(Bt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return Bt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(Bt.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return Bt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_ContentDownloadResponse_Counts";
        }
      }
      class wt extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            wt.prototype.hostname || dt(wt.M()),
            rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            wt.sm_m ||
              (wt.sm_m = {
                proto: wt,
                fields: {
                  hostname: { n: 1, br: nt.readString, bw: st.writeString },
                  source_type: { n: 2, br: nt.readUint32, bw: st.writeUint32 },
                  counts: { n: 3, c: Bt },
                },
              }),
            wt.sm_m
          );
        }
        static MBF() {
          return wt.sm_mbf || (wt.sm_mbf = at(wt.M())), wt.sm_mbf;
        }
        toObject(e = !1) {
          return wt.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(wt.M(), e, t);
        }
        static fromObject(e) {
          return ot(wt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new wt();
          return wt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(wt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return wt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(wt.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return wt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_ContentDownloadResponse_HostCounts";
        }
      }
      class yt extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            yt.prototype.hosts || dt(yt.M()),
            rt.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            yt.sm_m ||
              (yt.sm_m = {
                proto: yt,
                fields: { hosts: { n: 1, c: wt, r: !0, q: !0 } },
              }),
            yt.sm_m
          );
        }
        static MBF() {
          return yt.sm_mbf || (yt.sm_mbf = at(yt.M())), yt.sm_mbf;
        }
        toObject(e = !1) {
          return yt.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(yt.M(), e, t);
        }
        static fromObject(e) {
          return ot(yt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new yt();
          return yt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(yt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return yt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(yt.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return yt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_ContentDownloadResponse_Hosts";
        }
      }
      rt.Message;
      rt.Message;
      class St extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            St.prototype.dst_gcid_queue || dt(St.M()),
            rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            St.sm_m ||
              (St.sm_m = {
                proto: St,
                fields: {
                  dst_gcid_queue: {
                    n: 1,
                    br: nt.readUint64String,
                    bw: st.writeUint64String,
                  },
                  dst_gc_dir_index: {
                    n: 2,
                    br: nt.readUint32,
                    bw: st.writeUint32,
                  },
                },
              }),
            St.sm_m
          );
        }
        static MBF() {
          return St.sm_mbf || (St.sm_mbf = at(St.M())), St.sm_mbf;
        }
        toObject(e = !1) {
          return St.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(St.M(), e, t);
        }
        static fromObject(e) {
          return ot(St.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new St();
          return St.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(St.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return St.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(St.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return St.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgGCRoutingProtoBufHeader";
        }
      }
      class vt extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            vt.prototype.steamid || dt(vt.M()),
            rt.Message.initialize(this, e, 0, -1, [27, 41], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            vt.sm_m ||
              (vt.sm_m = {
                proto: vt,
                fields: {
                  steamid: {
                    n: 1,
                    br: nt.readFixed64String,
                    bw: st.writeFixed64String,
                  },
                  client_sessionid: {
                    n: 2,
                    br: nt.readInt32,
                    bw: st.writeInt32,
                  },
                  routing_appid: {
                    n: 3,
                    br: nt.readUint32,
                    bw: st.writeUint32,
                  },
                  jobid_source: {
                    n: 10,
                    d: "18446744073709551615",
                    br: nt.readFixed64String,
                    bw: st.writeFixed64String,
                  },
                  jobid_target: {
                    n: 11,
                    d: "18446744073709551615",
                    br: nt.readFixed64String,
                    bw: st.writeFixed64String,
                  },
                  target_job_name: {
                    n: 12,
                    br: nt.readString,
                    bw: st.writeString,
                  },
                  seq_num: { n: 24, br: nt.readInt32, bw: st.writeInt32 },
                  eresult: { n: 13, d: 2, br: nt.readInt32, bw: st.writeInt32 },
                  error_message: {
                    n: 14,
                    br: nt.readString,
                    bw: st.writeString,
                  },
                  ip: { n: 15, br: nt.readUint32, bw: st.writeUint32 },
                  ip_v6: { n: 29, br: nt.readBytes, bw: st.writeBytes },
                  auth_account_flags: {
                    n: 16,
                    br: nt.readUint32,
                    bw: st.writeUint32,
                  },
                  token_source: {
                    n: 22,
                    br: nt.readUint32,
                    bw: st.writeUint32,
                  },
                  admin_spoofing_user: {
                    n: 23,
                    br: nt.readBool,
                    bw: st.writeBool,
                  },
                  transport_error: {
                    n: 17,
                    d: 1,
                    br: nt.readInt32,
                    bw: st.writeInt32,
                  },
                  messageid: {
                    n: 18,
                    d: "18446744073709551615",
                    br: nt.readUint64String,
                    bw: st.writeUint64String,
                  },
                  publisher_group_id: {
                    n: 19,
                    br: nt.readUint32,
                    bw: st.writeUint32,
                  },
                  sysid: { n: 20, br: nt.readUint32, bw: st.writeUint32 },
                  webapi_key_id: {
                    n: 25,
                    br: nt.readUint32,
                    bw: st.writeUint32,
                  },
                  is_from_external_source: {
                    n: 26,
                    br: nt.readBool,
                    bw: st.writeBool,
                  },
                  forward_to_sysid: {
                    n: 27,
                    r: !0,
                    q: !0,
                    br: nt.readUint32,
                    pbr: nt.readPackedUint32,
                    bw: st.writeRepeatedUint32,
                  },
                  cm_sysid: { n: 28, br: nt.readUint32, bw: st.writeUint32 },
                  launcher_type: {
                    n: 31,
                    d: 0,
                    br: nt.readUint32,
                    bw: st.writeUint32,
                  },
                  realm: { n: 32, d: 0, br: nt.readUint32, bw: st.writeUint32 },
                  timeout_ms: {
                    n: 33,
                    d: -1,
                    br: nt.readInt32,
                    bw: st.writeInt32,
                  },
                  debug_source: {
                    n: 34,
                    br: nt.readString,
                    bw: st.writeString,
                  },
                  debug_source_string_index: {
                    n: 35,
                    br: nt.readUint32,
                    bw: st.writeUint32,
                  },
                  token_id: {
                    n: 36,
                    br: nt.readUint64String,
                    bw: st.writeUint64String,
                  },
                  routing_gc: { n: 37, c: St },
                  session_disposition: {
                    n: 38,
                    d: 0,
                    br: nt.readEnum,
                    bw: st.writeEnum,
                  },
                  wg_token: { n: 39, br: nt.readString, bw: st.writeString },
                  webui_auth_key: {
                    n: 40,
                    br: nt.readString,
                    bw: st.writeString,
                  },
                  exclude_client_sessionids: {
                    n: 41,
                    r: !0,
                    q: !0,
                    br: nt.readInt32,
                    pbr: nt.readPackedInt32,
                    bw: st.writeRepeatedInt32,
                  },
                  admin_request_spoofing_steamid: {
                    n: 43,
                    br: nt.readFixed64String,
                    bw: st.writeFixed64String,
                  },
                  is_valveds: { n: 44, br: nt.readBool, bw: st.writeBool },
                  trace_tag: {
                    n: 45,
                    br: nt.readFixed64String,
                    bw: st.writeFixed64String,
                  },
                },
              }),
            vt.sm_m
          );
        }
        static MBF() {
          return vt.sm_mbf || (vt.sm_mbf = at(vt.M())), vt.sm_mbf;
        }
        toObject(e = !1) {
          return vt.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(vt.M(), e, t);
        }
        static fromObject(e) {
          return ot(vt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new vt();
          return vt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(vt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return vt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(vt.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return vt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgProtoBufHeader";
        }
      }
      rt.Message;
      rt.Message;
      rt.Message;
      rt.Message;
      rt.Message;
      rt.Message;
      rt.Message;
      rt.Message;
      rt.Message;
      rt.Message;
      rt.Message;
      rt.Message;
      rt.Message;
      rt.Message;
      rt.Message;
      rt.Message;
      rt.Message;
      rt.Message;
      rt.Message;
      class Mt extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Mt.prototype.manufacturer || dt(Mt.M()),
            rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Mt.sm_m ||
              (Mt.sm_m = {
                proto: Mt,
                fields: {
                  manufacturer: { n: 1, br: nt.readString, bw: st.writeString },
                  model: { n: 2, br: nt.readString, bw: st.writeString },
                  dx_video_card: {
                    n: 3,
                    br: nt.readString,
                    bw: st.writeString,
                  },
                  dx_vendorid: { n: 4, br: nt.readInt32, bw: st.writeInt32 },
                  dx_deviceid: { n: 5, br: nt.readInt32, bw: st.writeInt32 },
                  num_gpu: { n: 6, br: nt.readUint32, bw: st.writeUint32 },
                  system_ram: {
                    n: 7,
                    br: nt.readUint64String,
                    bw: st.writeUint64String,
                  },
                  os: { n: 8, br: nt.readString, bw: st.writeString },
                  cpu_vendor: { n: 9, br: nt.readString, bw: st.writeString },
                  cpu_name: { n: 10, br: nt.readString, bw: st.writeString },
                  gaming_device_type: {
                    n: 11,
                    br: nt.readUint32,
                    bw: st.writeUint32,
                  },
                  dx_driver_version: {
                    n: 12,
                    br: nt.readString,
                    bw: st.writeString,
                  },
                  adapter_description: {
                    n: 14,
                    br: nt.readString,
                    bw: st.writeString,
                  },
                  driver_version: {
                    n: 15,
                    br: nt.readString,
                    bw: st.writeString,
                  },
                  driver_date: { n: 16, br: nt.readString, bw: st.writeString },
                  vram_size: { n: 17, br: nt.readUint32, bw: st.writeUint32 },
                  screen_width: {
                    n: 18,
                    br: nt.readUint32,
                    bw: st.writeUint32,
                  },
                  screen_height: {
                    n: 19,
                    br: nt.readUint32,
                    bw: st.writeUint32,
                  },
                  precise_frame_rate: {
                    n: 20,
                    br: nt.readBool,
                    bw: st.writeBool,
                  },
                },
              }),
            Mt.sm_m
          );
        }
        static MBF() {
          return Mt.sm_mbf || (Mt.sm_mbf = at(Mt.M())), Mt.sm_mbf;
        }
        toObject(e = !1) {
          return Mt.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(Mt.M(), e, t);
        }
        static fromObject(e) {
          return ot(Mt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new Mt();
          return Mt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(Mt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return Mt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(Mt.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return Mt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "UserSystemInformation";
        }
      }
      class Ct extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ct.prototype.setting || dt(Ct.M()),
            rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ct.sm_m ||
              (Ct.sm_m = {
                proto: Ct,
                fields: {
                  setting: { n: 1, br: nt.readEnum, bw: st.writeEnum },
                  game_resolution_width: {
                    n: 2,
                    br: nt.readUint32,
                    bw: st.writeUint32,
                  },
                  game_resolution_height: {
                    n: 3,
                    br: nt.readUint32,
                    bw: st.writeUint32,
                  },
                },
              }),
            Ct.sm_m
          );
        }
        static MBF() {
          return Ct.sm_mbf || (Ct.sm_mbf = at(Ct.M())), Ct.sm_mbf;
        }
        toObject(e = !1) {
          return Ct.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(Ct.M(), e, t);
        }
        static fromObject(e) {
          return ot(Ct.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new Ct();
          return Ct.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(Ct.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return Ct.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(Ct.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return Ct.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "GamePerformanceSettings";
        }
      }
      class Rt extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Rt.prototype.raw_version || dt(Rt.M()),
            rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Rt.sm_m ||
              (Rt.sm_m = {
                proto: Rt,
                fields: {
                  raw_version: { n: 1, br: nt.readString, bw: st.writeString },
                  requested_interface_type: {
                    n: 2,
                    br: nt.readString,
                    bw: st.writeString,
                  },
                },
              }),
            Rt.sm_m
          );
        }
        static MBF() {
          return Rt.sm_mbf || (Rt.sm_mbf = at(Rt.M())), Rt.sm_mbf;
        }
        toObject(e = !1) {
          return Rt.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(Rt.M(), e, t);
        }
        static fromObject(e) {
          return ot(Rt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new Rt();
          return Rt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(Rt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return Rt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(Rt.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return Rt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_AppInterfaceCreation";
        }
      }
      class Tt extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Tt.prototype.interface_name || dt(Tt.M()),
            rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Tt.sm_m ||
              (Tt.sm_m = {
                proto: Tt,
                fields: {
                  interface_name: {
                    n: 1,
                    br: nt.readString,
                    bw: st.writeString,
                  },
                  method_name: { n: 2, br: nt.readString, bw: st.writeString },
                  call_count: { n: 3, br: nt.readUint32, bw: st.writeUint32 },
                },
              }),
            Tt.sm_m
          );
        }
        static MBF() {
          return Tt.sm_mbf || (Tt.sm_mbf = at(Tt.M())), Tt.sm_mbf;
        }
        toObject(e = !1) {
          return Tt.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(Tt.M(), e, t);
        }
        static fromObject(e) {
          return ot(Tt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new Tt();
          return Tt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(Tt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return Tt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(Tt.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return Tt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_AppInterfaceMethodCounts";
        }
      }
      class It extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            It.prototype.game_id || dt(It.M()),
            rt.Message.initialize(this, e, 0, -1, [2, 3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            It.sm_m ||
              (It.sm_m = {
                proto: It,
                fields: {
                  game_id: {
                    n: 1,
                    br: nt.readUint64String,
                    bw: st.writeUint64String,
                  },
                  interfaces_created: { n: 2, c: Rt, r: !0, q: !0 },
                  methods_called: { n: 3, c: Tt, r: !0, q: !0 },
                  session_length_seconds: {
                    n: 4,
                    br: nt.readUint32,
                    bw: st.writeUint32,
                  },
                },
              }),
            It.sm_m
          );
        }
        static MBF() {
          return It.sm_mbf || (It.sm_mbf = at(It.M())), It.sm_mbf;
        }
        toObject(e = !1) {
          return It.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(It.M(), e, t);
        }
        static fromObject(e) {
          return ot(It.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new It();
          return It.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(It.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return It.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(It.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return It.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_AppInterfaceStats_Notification";
        }
      }
      class Ft extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ft.prototype.protocol_tested || dt(Ft.M()),
            rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ft.sm_m ||
              (Ft.sm_m = {
                proto: Ft,
                fields: {
                  protocol_tested: {
                    n: 1,
                    br: nt.readUint32,
                    bw: st.writeUint32,
                  },
                  connectivity_state: {
                    n: 2,
                    br: nt.readUint32,
                    bw: st.writeUint32,
                  },
                },
              }),
            Ft.sm_m
          );
        }
        static MBF() {
          return Ft.sm_mbf || (Ft.sm_mbf = at(Ft.M())), Ft.sm_mbf;
        }
        toObject(e = !1) {
          return Ft.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(Ft.M(), e, t);
        }
        static fromObject(e) {
          return ot(Ft.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new Ft();
          return Ft.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(Ft.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return Ft.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(Ft.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return Ft.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_IPv6Connectivity_Result";
        }
      }
      class At extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            At.prototype.cell_id || dt(At.M()),
            rt.Message.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            At.sm_m ||
              (At.sm_m = {
                proto: At,
                fields: {
                  cell_id: { n: 1, br: nt.readUint32, bw: st.writeUint32 },
                  results: { n: 2, c: Ft, r: !0, q: !0 },
                  private_ip_is_rfc6598: {
                    n: 3,
                    br: nt.readBool,
                    bw: st.writeBool,
                  },
                },
              }),
            At.sm_m
          );
        }
        static MBF() {
          return At.sm_mbf || (At.sm_mbf = at(At.M())), At.sm_mbf;
        }
        toObject(e = !1) {
          return At.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(At.M(), e, t);
        }
        static fromObject(e) {
          return ot(At.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new At();
          return At.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(At.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return At.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(At.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return At.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_IPv6Connectivity_Notification";
        }
      }
      class Nt extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Nt.prototype.product || dt(Nt.M()),
            rt.Message.initialize(this, e, 0, -1, [3, 4, 5], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Nt.sm_m ||
              (Nt.sm_m = {
                proto: Nt,
                fields: {
                  product: { n: 1, br: nt.readString, bw: st.writeString },
                  version: { n: 2, br: nt.readString, bw: st.writeString },
                  routes: { n: 3, c: Et, r: !0, q: !0 },
                  components: { n: 4, c: Ot, r: !0, q: !0 },
                  actions: { n: 5, c: zt, r: !0, q: !0 },
                },
              }),
            Nt.sm_m
          );
        }
        static MBF() {
          return Nt.sm_mbf || (Nt.sm_mbf = at(Nt.M())), Nt.sm_mbf;
        }
        toObject(e = !1) {
          return Nt.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(Nt.M(), e, t);
        }
        static fromObject(e) {
          return ot(Nt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new Nt();
          return Nt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(Nt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return Nt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(Nt.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return Nt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_ReportReactUsage_Notification";
        }
      }
      class Et extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Et.prototype.route || dt(Et.M()),
            rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Et.sm_m ||
              (Et.sm_m = {
                proto: Et,
                fields: {
                  route: { n: 1, br: nt.readString, bw: st.writeString },
                  count: { n: 2, br: nt.readUint32, bw: st.writeUint32 },
                },
              }),
            Et.sm_m
          );
        }
        static MBF() {
          return Et.sm_mbf || (Et.sm_mbf = at(Et.M())), Et.sm_mbf;
        }
        toObject(e = !1) {
          return Et.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(Et.M(), e, t);
        }
        static fromObject(e) {
          return ot(Et.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new Et();
          return Et.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(Et.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return Et.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(Et.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return Et.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_ReportReactUsage_Notification_RouteData";
        }
      }
      class Ot extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ot.prototype.component || dt(Ot.M()),
            rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ot.sm_m ||
              (Ot.sm_m = {
                proto: Ot,
                fields: {
                  component: { n: 1, br: nt.readString, bw: st.writeString },
                  count: { n: 2, br: nt.readUint32, bw: st.writeUint32 },
                },
              }),
            Ot.sm_m
          );
        }
        static MBF() {
          return Ot.sm_mbf || (Ot.sm_mbf = at(Ot.M())), Ot.sm_mbf;
        }
        toObject(e = !1) {
          return Ot.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(Ot.M(), e, t);
        }
        static fromObject(e) {
          return ot(Ot.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new Ot();
          return Ot.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(Ot.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return Ot.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(Ot.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return Ot.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_ReportReactUsage_Notification_ComponentData";
        }
      }
      class zt extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            zt.prototype.action || dt(zt.M()),
            rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            zt.sm_m ||
              (zt.sm_m = {
                proto: zt,
                fields: {
                  action: { n: 1, br: nt.readString, bw: st.writeString },
                  count: { n: 2, br: nt.readUint32, bw: st.writeUint32 },
                },
              }),
            zt.sm_m
          );
        }
        static MBF() {
          return zt.sm_mbf || (zt.sm_mbf = at(zt.M())), zt.sm_mbf;
        }
        toObject(e = !1) {
          return zt.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(zt.M(), e, t);
        }
        static fromObject(e) {
          return ot(zt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new zt();
          return zt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(zt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return zt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(zt.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return zt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_ReportReactUsage_Notification_ActionData";
        }
      }
      class Dt extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Dt.prototype.product || dt(Dt.M()),
            rt.Message.initialize(this, e, 0, -1, [3, 4], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Dt.sm_m ||
              (Dt.sm_m = {
                proto: Dt,
                fields: {
                  product: { n: 1, br: nt.readString, bw: st.writeString },
                  version: { n: 2, br: nt.readString, bw: st.writeString },
                  errors: { n: 3, c: Pt, r: !0, q: !0 },
                  tags: {
                    n: 4,
                    r: !0,
                    q: !0,
                    br: nt.readString,
                    bw: st.writeRepeatedString,
                  },
                },
              }),
            Dt.sm_m
          );
        }
        static MBF() {
          return Dt.sm_mbf || (Dt.sm_mbf = at(Dt.M())), Dt.sm_mbf;
        }
        toObject(e = !1) {
          return Dt.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(Dt.M(), e, t);
        }
        static fromObject(e) {
          return ot(Dt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new Dt();
          return Dt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(Dt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return Dt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(Dt.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return Dt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_ReportClientError_Notification";
        }
      }
      class Pt extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Pt.prototype.identifier || dt(Pt.M()),
            rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Pt.sm_m ||
              (Pt.sm_m = {
                proto: Pt,
                fields: {
                  identifier: { n: 1, br: nt.readString, bw: st.writeString },
                  message: { n: 2, br: nt.readString, bw: st.writeString },
                  count: { n: 3, br: nt.readUint32, bw: st.writeUint32 },
                  context: { n: 4, br: nt.readString, bw: st.writeString },
                  url: { n: 5, br: nt.readString, bw: st.writeString },
                },
              }),
            Pt.sm_m
          );
        }
        static MBF() {
          return Pt.sm_mbf || (Pt.sm_mbf = at(Pt.M())), Pt.sm_mbf;
        }
        toObject(e = !1) {
          return Pt.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(Pt.M(), e, t);
        }
        static fromObject(e) {
          return ot(Pt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new Pt();
          return Pt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(Pt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return Pt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(Pt.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return Pt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_ReportClientError_Notification_Error";
        }
      }
      class Wt extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Wt.prototype.type || dt(Wt.M()),
            rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Wt.sm_m ||
              (Wt.sm_m = {
                proto: Wt,
                fields: {
                  type: { n: 1, br: nt.readEnum, bw: st.writeEnum },
                  num_ops: { n: 2, br: nt.readUint32, bw: st.writeUint32 },
                  num_bytes: {
                    n: 3,
                    br: nt.readUint64String,
                    bw: st.writeUint64String,
                  },
                  busy_time_ms: {
                    n: 4,
                    br: nt.readUint64String,
                    bw: st.writeUint64String,
                  },
                  idle_time_ms: {
                    n: 5,
                    br: nt.readUint64String,
                    bw: st.writeUint64String,
                  },
                  sum_run_time_ms: {
                    n: 6,
                    br: nt.readUint64String,
                    bw: st.writeUint64String,
                  },
                  sum_wait_time_ms: {
                    n: 7,
                    br: nt.readUint64String,
                    bw: st.writeUint64String,
                  },
                },
              }),
            Wt.sm_m
          );
        }
        static MBF() {
          return Wt.sm_mbf || (Wt.sm_mbf = at(Wt.M())), Wt.sm_mbf;
        }
        toObject(e = !1) {
          return Wt.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(Wt.M(), e, t);
        }
        static fromObject(e) {
          return ot(Wt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new Wt();
          return Wt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(Wt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return Wt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(Wt.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return Wt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_SteamPipeWorkStats_Operation";
        }
      }
      class Gt extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Gt.prototype.appid || dt(Gt.M()),
            rt.Message.initialize(this, e, 0, -1, [4], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Gt.sm_m ||
              (Gt.sm_m = {
                proto: Gt,
                fields: {
                  appid: { n: 1, br: nt.readUint32, bw: st.writeUint32 },
                  depotid: { n: 2, br: nt.readUint32, bw: st.writeUint32 },
                  work_type: { n: 3, br: nt.readEnum, bw: st.writeEnum },
                  operations: { n: 4, c: Wt, r: !0, q: !0 },
                  hardware_type: {
                    n: 5,
                    br: nt.readUint32,
                    bw: st.writeUint32,
                  },
                },
              }),
            Gt.sm_m
          );
        }
        static MBF() {
          return Gt.sm_mbf || (Gt.sm_mbf = at(Gt.M())), Gt.sm_mbf;
        }
        toObject(e = !1) {
          return Gt.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(Gt.M(), e, t);
        }
        static fromObject(e) {
          return ot(Gt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new Gt();
          return Gt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(Gt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return Gt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(Gt.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return Gt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_SteamPipeWorkStats_Notification";
        }
      }
      class Ut extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ut.prototype.summary || dt(Ut.M()),
            rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ut.sm_m ||
              (Ut.sm_m = { proto: Ut, fields: { summary: { n: 1, c: pt } } }),
            Ut.sm_m
          );
        }
        static MBF() {
          return Ut.sm_mbf || (Ut.sm_mbf = at(Ut.M())), Ut.sm_mbf;
        }
        toObject(e = !1) {
          return Ut.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(Ut.M(), e, t);
        }
        static fromObject(e) {
          return ot(Ut.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new Ut();
          return Ut.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(Ut.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return Ut.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(Ut.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return Ut.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_ClientBootstrap_Notification";
        }
      }
      class xt extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            xt.prototype.cell_id || dt(xt.M()),
            rt.Message.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            xt.sm_m ||
              (xt.sm_m = {
                proto: xt,
                fields: {
                  cell_id: { n: 1, br: nt.readUint32, bw: st.writeUint32 },
                  stats: { n: 2, c: Lt, r: !0, q: !0 },
                  throttling_kbps: {
                    n: 3,
                    br: nt.readUint32,
                    bw: st.writeUint32,
                  },
                  os_type: { n: 4, br: nt.readUint32, bw: st.writeUint32 },
                  device_type: { n: 5, br: nt.readUint32, bw: st.writeUint32 },
                },
              }),
            xt.sm_m
          );
        }
        static MBF() {
          return xt.sm_mbf || (xt.sm_mbf = at(xt.M())), xt.sm_mbf;
        }
        toObject(e = !1) {
          return xt.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(xt.M(), e, t);
        }
        static fromObject(e) {
          return ot(xt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new xt();
          return xt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(xt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return xt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(xt.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return xt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_DownloadRates_Notification";
        }
      }
      class Lt extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Lt.prototype.source_type || dt(Lt.M()),
            rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Lt.sm_m ||
              (Lt.sm_m = {
                proto: Lt,
                fields: {
                  source_type: { n: 1, br: nt.readUint32, bw: st.writeUint32 },
                  source_id: { n: 2, br: nt.readUint32, bw: st.writeUint32 },
                  bytes: {
                    n: 3,
                    br: nt.readUint64String,
                    bw: st.writeUint64String,
                  },
                  host_name: { n: 4, br: nt.readString, bw: st.writeString },
                  microseconds: {
                    n: 5,
                    br: nt.readUint64String,
                    bw: st.writeUint64String,
                  },
                  used_ipv6: { n: 6, br: nt.readBool, bw: st.writeBool },
                  proxied: { n: 7, br: nt.readBool, bw: st.writeBool },
                  used_http2: { n: 8, br: nt.readBool, bw: st.writeBool },
                  cache_hits: { n: 9, br: nt.readUint32, bw: st.writeUint32 },
                  cache_misses: {
                    n: 10,
                    br: nt.readUint32,
                    bw: st.writeUint32,
                  },
                  hit_bytes: {
                    n: 11,
                    br: nt.readUint64String,
                    bw: st.writeUint64String,
                  },
                  miss_bytes: {
                    n: 12,
                    br: nt.readUint64String,
                    bw: st.writeUint64String,
                  },
                  chunks_scored: {
                    n: 13,
                    br: nt.readUint32,
                    bw: st.writeUint32,
                  },
                  sum_chunk_scores: {
                    n: 14,
                    br: nt.readDouble,
                    bw: st.writeDouble,
                  },
                },
              }),
            Lt.sm_m
          );
        }
        static MBF() {
          return Lt.sm_mbf || (Lt.sm_mbf = at(Lt.M())), Lt.sm_mbf;
        }
        toObject(e = !1) {
          return Lt.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(Lt.M(), e, t);
        }
        static fromObject(e) {
          return ot(Lt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new Lt();
          return Lt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(Lt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return Lt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(Lt.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return Lt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_DownloadRates_Notification_StatsInfo";
        }
      }
      class kt extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            kt.prototype.validation_result || dt(kt.M()),
            rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            kt.sm_m ||
              (kt.sm_m = {
                proto: kt,
                fields: {
                  validation_result: {
                    n: 1,
                    br: nt.readInt32,
                    bw: st.writeInt32,
                  },
                  app_id: { n: 2, br: nt.readUint32, bw: st.writeUint32 },
                  staged_files: { n: 3, br: nt.readBool, bw: st.writeBool },
                  user_initiated: { n: 4, br: nt.readBool, bw: st.writeBool },
                  early_out: { n: 5, br: nt.readBool, bw: st.writeBool },
                  chunks_scanned: {
                    n: 6,
                    br: nt.readUint32,
                    bw: st.writeUint32,
                  },
                  chunks_corrupt: {
                    n: 7,
                    br: nt.readUint32,
                    bw: st.writeUint32,
                  },
                  bytes_scanned: {
                    n: 8,
                    br: nt.readUint64String,
                    bw: st.writeUint64String,
                  },
                  chunk_bytes_corrupt: {
                    n: 9,
                    br: nt.readUint64String,
                    bw: st.writeUint64String,
                  },
                  total_file_size_corrupt: {
                    n: 10,
                    br: nt.readUint64String,
                    bw: st.writeUint64String,
                  },
                },
              }),
            kt.sm_m
          );
        }
        static MBF() {
          return kt.sm_mbf || (kt.sm_mbf = at(kt.M())), kt.sm_mbf;
        }
        toObject(e = !1) {
          return kt.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(kt.M(), e, t);
        }
        static fromObject(e) {
          return ot(kt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new kt();
          return kt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(kt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return kt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(kt.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return kt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_ContentValidation_Notification";
        }
      }
      class jt extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            jt.prototype.app_id || dt(jt.M()),
            rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            jt.sm_m ||
              (jt.sm_m = {
                proto: jt,
                fields: {
                  app_id: { n: 1, br: nt.readUint32, bw: st.writeUint32 },
                  platform_type: {
                    n: 2,
                    br: nt.readUint32,
                    bw: st.writeUint32,
                  },
                  preload: { n: 3, br: nt.readBool, bw: st.writeBool },
                  blocking_app_launch: {
                    n: 4,
                    br: nt.readBool,
                    bw: st.writeBool,
                  },
                  files_uploaded: {
                    n: 5,
                    br: nt.readUint32,
                    bw: st.writeUint32,
                  },
                  files_downloaded: {
                    n: 6,
                    br: nt.readUint32,
                    bw: st.writeUint32,
                  },
                  files_deleted: {
                    n: 7,
                    br: nt.readUint32,
                    bw: st.writeUint32,
                  },
                  bytes_uploaded: {
                    n: 8,
                    br: nt.readUint64String,
                    bw: st.writeUint64String,
                  },
                  bytes_downloaded: {
                    n: 9,
                    br: nt.readUint64String,
                    bw: st.writeUint64String,
                  },
                  microsec_total: {
                    n: 10,
                    br: nt.readUint64String,
                    bw: st.writeUint64String,
                  },
                  microsec_init_caches: {
                    n: 11,
                    br: nt.readUint64String,
                    bw: st.writeUint64String,
                  },
                  microsec_validate_state: {
                    n: 12,
                    br: nt.readUint64String,
                    bw: st.writeUint64String,
                  },
                  microsec_ac_launch: {
                    n: 13,
                    br: nt.readUint64String,
                    bw: st.writeUint64String,
                  },
                  microsec_ac_prep_user_files: {
                    n: 14,
                    br: nt.readUint64String,
                    bw: st.writeUint64String,
                  },
                  microsec_ac_exit: {
                    n: 15,
                    br: nt.readUint64String,
                    bw: st.writeUint64String,
                  },
                  microsec_build_sync_list: {
                    n: 16,
                    br: nt.readUint64String,
                    bw: st.writeUint64String,
                  },
                  microsec_delete_files: {
                    n: 17,
                    br: nt.readUint64String,
                    bw: st.writeUint64String,
                  },
                  microsec_download_files: {
                    n: 18,
                    br: nt.readUint64String,
                    bw: st.writeUint64String,
                  },
                  microsec_upload_files: {
                    n: 19,
                    br: nt.readUint64String,
                    bw: st.writeUint64String,
                  },
                  hardware_type: {
                    n: 20,
                    br: nt.readUint32,
                    bw: st.writeUint32,
                  },
                  files_managed: {
                    n: 21,
                    br: nt.readUint32,
                    bw: st.writeUint32,
                  },
                },
              }),
            jt.sm_m
          );
        }
        static MBF() {
          return jt.sm_mbf || (jt.sm_mbf = at(jt.M())), jt.sm_mbf;
        }
        toObject(e = !1) {
          return jt.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(jt.M(), e, t);
        }
        static fromObject(e) {
          return ot(jt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new jt();
          return jt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(jt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return jt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(jt.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return jt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_CloudAppSyncStats_Notification";
        }
      }
      class Ht extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ht.prototype.cell_id || dt(Ht.M()),
            rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ht.sm_m ||
              (Ht.sm_m = {
                proto: Ht,
                fields: {
                  cell_id: { n: 1, br: nt.readUint32, bw: st.writeUint32 },
                  data: { n: 2, c: yt },
                },
              }),
            Ht.sm_m
          );
        }
        static MBF() {
          return Ht.sm_mbf || (Ht.sm_mbf = at(Ht.M())), Ht.sm_mbf;
        }
        toObject(e = !1) {
          return Ht.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(Ht.M(), e, t);
        }
        static fromObject(e) {
          return ot(Ht.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new Ht();
          return Ht.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(Ht.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return Ht.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(Ht.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return Ht.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_ContentDownloadResponse_Counts_Notification";
        }
      }
      class Vt extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Vt.prototype.eresult || dt(Vt.M()),
            rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Vt.sm_m ||
              (Vt.sm_m = {
                proto: Vt,
                fields: {
                  eresult: {
                    n: 1,
                    d: 2,
                    br: nt.readUint32,
                    bw: st.writeUint32,
                  },
                  share_method: { n: 2, br: nt.readEnum, bw: st.writeEnum },
                  seconds: { n: 3, br: nt.readFloat, bw: st.writeFloat },
                  bytes: {
                    n: 4,
                    br: nt.readUint64String,
                    bw: st.writeUint64String,
                  },
                  gameid: {
                    n: 5,
                    br: nt.readFixed64String,
                    bw: st.writeFixed64String,
                  },
                },
              }),
            Vt.sm_m
          );
        }
        static MBF() {
          return Vt.sm_mbf || (Vt.sm_mbf = at(Vt.M())), Vt.sm_mbf;
        }
        toObject(e = !1) {
          return Vt.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(Vt.M(), e, t);
        }
        static fromObject(e) {
          return ot(Vt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new Vt();
          return Vt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(Vt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return Vt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(Vt.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return Vt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_ClipShare_Notification";
        }
      }
      class qt extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            qt.prototype.original_range_method || dt(qt.M()),
            rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            qt.sm_m ||
              (qt.sm_m = {
                proto: qt,
                fields: {
                  original_range_method: {
                    n: 1,
                    br: nt.readEnum,
                    bw: st.writeEnum,
                  },
                  start: { n: 2, c: Kt },
                  end: { n: 3, c: Kt },
                  seconds: { n: 4, br: nt.readFloat, bw: st.writeFloat },
                  gameid: {
                    n: 5,
                    br: nt.readFixed64String,
                    bw: st.writeFixed64String,
                  },
                },
              }),
            qt.sm_m
          );
        }
        static MBF() {
          return qt.sm_mbf || (qt.sm_mbf = at(qt.M())), qt.sm_mbf;
        }
        toObject(e = !1) {
          return qt.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(qt.M(), e, t);
        }
        static fromObject(e) {
          return ot(qt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new qt();
          return qt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(qt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return qt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(qt.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return qt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_ClipRange_Notification";
        }
      }
      class Kt extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Kt.prototype.original_range_method || dt(Kt.M()),
            rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Kt.sm_m ||
              (Kt.sm_m = {
                proto: Kt,
                fields: {
                  original_range_method: {
                    n: 1,
                    br: nt.readEnum,
                    bw: st.writeEnum,
                  },
                  latest_range_method: {
                    n: 2,
                    br: nt.readEnum,
                    bw: st.writeEnum,
                  },
                  delta_ms: { n: 3, br: nt.readInt32, bw: st.writeInt32 },
                },
              }),
            Kt.sm_m
          );
        }
        static MBF() {
          return Kt.sm_mbf || (Kt.sm_mbf = at(Kt.M())), Kt.sm_mbf;
        }
        toObject(e = !1) {
          return Kt.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(Kt.M(), e, t);
        }
        static fromObject(e) {
          return ot(Kt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new Kt();
          return Kt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(Kt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return Kt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(Kt.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return Kt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_ClipRange_Notification_RelativeRangeEdge";
        }
      }
      class $t extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            $t.prototype.recording_type || dt($t.M()),
            rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            $t.sm_m ||
              ($t.sm_m = {
                proto: $t,
                fields: {
                  recording_type: { n: 1, br: nt.readEnum, bw: st.writeEnum },
                  seconds: { n: 2, br: nt.readFloat, bw: st.writeFloat },
                  bytes: {
                    n: 3,
                    br: nt.readUint64String,
                    bw: st.writeUint64String,
                  },
                  gameid: {
                    n: 4,
                    br: nt.readFixed64String,
                    bw: st.writeFixed64String,
                  },
                  instant_clip: { n: 5, br: nt.readBool, bw: st.writeBool },
                },
              }),
            $t.sm_m
          );
        }
        static MBF() {
          return $t.sm_mbf || ($t.sm_mbf = at($t.M())), $t.sm_mbf;
        }
        toObject(e = !1) {
          return $t.toObject(e, this);
        }
        static toObject(e, t) {
          return lt($t.M(), e, t);
        }
        static fromObject(e) {
          return ot($t.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new $t();
          return $t.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct($t.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return $t.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut($t.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return $t.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_EndGameRecording_Notification";
        }
      }
      class Qt extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Qt.prototype.frame_rates || dt(Qt.M()),
            rt.Message.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Qt.sm_m ||
              (Qt.sm_m = {
                proto: Qt,
                fields: {
                  frame_rates: { n: 2, c: Yt, r: !0, q: !0 },
                  system_info: { n: 3, c: Mt },
                },
              }),
            Qt.sm_m
          );
        }
        static MBF() {
          return Qt.sm_mbf || (Qt.sm_mbf = at(Qt.M())), Qt.sm_mbf;
        }
        toObject(e = !1) {
          return Qt.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(Qt.M(), e, t);
        }
        static fromObject(e) {
          return ot(Qt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new Qt();
          return Qt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(Qt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return Qt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(Qt.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return Qt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_GamePerformance_Notification";
        }
      }
      class Yt extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Yt.prototype.gameid || dt(Yt.M()),
            rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Yt.sm_m ||
              (Yt.sm_m = {
                proto: Yt,
                fields: {
                  gameid: {
                    n: 1,
                    br: nt.readFixed64String,
                    bw: st.writeFixed64String,
                  },
                  frame_rate: { n: 2, br: nt.readUint32, bw: st.writeUint32 },
                  session_seconds: {
                    n: 3,
                    br: nt.readInt32,
                    bw: st.writeInt32,
                  },
                  framegen_frame_rate: {
                    n: 4,
                    br: nt.readUint32,
                    bw: st.writeUint32,
                  },
                  game_settings: { n: 5, c: Ct },
                  seconds_since_active: {
                    n: 6,
                    br: nt.readUint32,
                    bw: st.writeUint32,
                  },
                },
              }),
            Yt.sm_m
          );
        }
        static MBF() {
          return Yt.sm_mbf || (Yt.sm_mbf = at(Yt.M())), Yt.sm_mbf;
        }
        toObject(e = !1) {
          return Yt.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(Yt.M(), e, t);
        }
        static fromObject(e) {
          return ot(Yt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new Yt();
          return Yt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(Yt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return Yt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(Yt.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return Yt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_GamePerformance_Notification_FrameRate";
        }
      }
      class Xt extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Xt.prototype.client_args || dt(Xt.M()),
            rt.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Xt.sm_m ||
              (Xt.sm_m = {
                proto: Xt,
                fields: {
                  client_args: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: nt.readString,
                    bw: st.writeRepeatedString,
                  },
                  gpu_webview_regkey_disabled: {
                    n: 2,
                    br: nt.readBool,
                    bw: st.writeBool,
                  },
                  suppress_gpu_chrome: {
                    n: 3,
                    br: nt.readBool,
                    bw: st.writeBool,
                  },
                  browser_not_supported: {
                    n: 4,
                    br: nt.readBool,
                    bw: st.writeBool,
                  },
                  hw_accel_video_regkey_disabled: {
                    n: 5,
                    br: nt.readBool,
                    bw: st.writeBool,
                  },
                  mini_mode_enabled: {
                    n: 6,
                    br: nt.readBool,
                    bw: st.writeBool,
                  },
                  fps_counter_enabled: {
                    n: 7,
                    br: nt.readBool,
                    bw: st.writeBool,
                  },
                  library_low_bandwidth_mode_enabled: {
                    n: 8,
                    br: nt.readBool,
                    bw: st.writeBool,
                  },
                  library_low_perf_mode_enabled: {
                    n: 9,
                    br: nt.readBool,
                    bw: st.writeBool,
                  },
                  gr_mode: { n: 10, br: nt.readEnum, bw: st.writeEnum },
                },
              }),
            Xt.sm_m
          );
        }
        static MBF() {
          return Xt.sm_mbf || (Xt.sm_mbf = at(Xt.M())), Xt.sm_mbf;
        }
        toObject(e = !1) {
          return Xt.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(Xt.M(), e, t);
        }
        static fromObject(e) {
          return ot(Xt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new Xt();
          return Xt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(Xt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return Xt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(Xt.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return Xt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_ReportClientArgs_Notification";
        }
      }
      class Jt extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Jt.prototype.accessibility_desktop_ui_scale || dt(Jt.M()),
            rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Jt.sm_m ||
              (Jt.sm_m = {
                proto: Jt,
                fields: {
                  accessibility_desktop_ui_scale: {
                    n: 1,
                    br: nt.readFloat,
                    bw: st.writeFloat,
                  },
                  accessibility_screen_reader_enabled: {
                    n: 2,
                    br: nt.readBool,
                    bw: st.writeBool,
                  },
                  accessibility_high_contrast_mode: {
                    n: 3,
                    br: nt.readBool,
                    bw: st.writeBool,
                  },
                  accessibility_reduce_motion: {
                    n: 4,
                    br: nt.readBool,
                    bw: st.writeBool,
                  },
                  accessibility_color_filter_name: {
                    n: 5,
                    br: nt.readString,
                    bw: st.writeString,
                  },
                },
              }),
            Jt.sm_m
          );
        }
        static MBF() {
          return Jt.sm_mbf || (Jt.sm_mbf = at(Jt.M())), Jt.sm_mbf;
        }
        toObject(e = !1) {
          return Jt.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(Jt.M(), e, t);
        }
        static fromObject(e) {
          return ot(Jt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new Jt();
          return Jt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(Jt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return Jt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(Jt.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return Jt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_ReportAccessibilitySettings_Notification";
        }
      }
      class Zt extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Zt.prototype.glibc_version_major || dt(Zt.M()),
            rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Zt.sm_m ||
              (Zt.sm_m = {
                proto: Zt,
                fields: {
                  glibc_version_major: {
                    n: 1,
                    br: nt.readInt32,
                    bw: st.writeInt32,
                  },
                  glibc_version_minor: {
                    n: 2,
                    br: nt.readInt32,
                    bw: st.writeInt32,
                  },
                  account_type: { n: 3, br: nt.readInt32, bw: st.writeInt32 },
                  launcher_type: { n: 4, br: nt.readInt32, bw: st.writeInt32 },
                  game_server_appid: {
                    n: 5,
                    br: nt.readInt32,
                    bw: st.writeInt32,
                  },
                  process_name: { n: 6, br: nt.readString, bw: st.writeString },
                  kernel_version_major: {
                    n: 7,
                    br: nt.readInt32,
                    bw: st.writeInt32,
                  },
                  kernel_version_minor: {
                    n: 8,
                    br: nt.readInt32,
                    bw: st.writeInt32,
                  },
                },
              }),
            Zt.sm_m
          );
        }
        static MBF() {
          return Zt.sm_mbf || (Zt.sm_mbf = at(Zt.M())), Zt.sm_mbf;
        }
        toObject(e = !1) {
          return Zt.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(Zt.M(), e, t);
        }
        static fromObject(e) {
          return ot(Zt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new Zt();
          return Zt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(Zt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return Zt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(Zt.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return Zt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_ReportLinuxStats_Notification";
        }
      }
      var er;
      !(function (e) {
        (e.ClientAppInterfaceStatsReport = function (e, t) {
          return e.SendNotification(
            "ClientMetrics.ClientAppInterfaceStatsReport#1",
            Mr(It, t),
            { ePrivilege: 1 },
          );
        }),
          (e.ClientIPv6ConnectivityReport = function (e, t) {
            return e.SendNotification(
              "ClientMetrics.ClientIPv6ConnectivityReport#1",
              Mr(At, t),
              { ePrivilege: 1 },
            );
          }),
          (e.SteamPipeWorkStatsReport = function (e, t) {
            return e.SendNotification(
              "ClientMetrics.SteamPipeWorkStatsReport#1",
              Mr(Gt, t),
              { ePrivilege: 1 },
            );
          }),
          (e.ReportReactUsage = function (e, t) {
            return e.SendNotification(
              "ClientMetrics.ReportReactUsage#1",
              Mr(Nt, t),
              { ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.ReportClientError = function (e, t) {
            return e.SendNotification(
              "ClientMetrics.ReportClientError#1",
              Mr(Dt, t),
              { ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.ClientBootstrapReport = function (e, t) {
            return e.SendNotification(
              "ClientMetrics.ClientBootstrapReport#1",
              Mr(Ut, t),
              { ePrivilege: 1 },
            );
          }),
          (e.ClientDownloadRatesReport = function (e, t) {
            return e.SendNotification(
              "ClientMetrics.ClientDownloadRatesReport#1",
              Mr(xt, t),
              { ePrivilege: 1 },
            );
          }),
          (e.ClientContentValidationReport = function (e, t) {
            return e.SendNotification(
              "ClientMetrics.ClientContentValidationReport#1",
              Mr(kt, t),
              { ePrivilege: 1 },
            );
          }),
          (e.ClientCloudAppSyncStats = function (e, t) {
            return e.SendNotification(
              "ClientMetrics.ClientCloudAppSyncStats#1",
              Mr(jt, t),
              { ePrivilege: 1 },
            );
          }),
          (e.ClientDownloadResponseCodeCounts = function (e, t) {
            return e.SendNotification(
              "ClientMetrics.ClientDownloadResponseCodeCounts#1",
              Mr(Ht, t),
              { ePrivilege: 1 },
            );
          }),
          (e.ReportClientArgs = function (e, t) {
            return e.SendNotification(
              "ClientMetrics.ReportClientArgs#1",
              Mr(Xt, t),
              { ePrivilege: 1 },
            );
          }),
          (e.ReportLinuxStats = function (e, t) {
            return e.SendNotification(
              "ClientMetrics.ReportLinuxStats#1",
              Mr(Zt, t),
              { ePrivilege: 1 },
            );
          }),
          (e.ReportAccessibilitySettings = function (e, t) {
            return e.SendNotification(
              "ClientMetrics.ReportAccessibilitySettings#1",
              Mr(Jt, t),
              { ePrivilege: 1 },
            );
          }),
          (e.ReportClipShare = function (e, t) {
            return e.SendNotification(
              "ClientMetrics.ReportClipShare#1",
              Mr(Vt, t),
              { ePrivilege: 1 },
            );
          }),
          (e.ReportClipRange = function (e, t) {
            return e.SendNotification(
              "ClientMetrics.ReportClipRange#1",
              Mr(qt, t),
              { ePrivilege: 1 },
            );
          }),
          (e.ReportEndGameRecording = function (e, t) {
            return e.SendNotification(
              "ClientMetrics.ReportEndGameRecording#1",
              Mr($t, t),
              { ePrivilege: 1 },
            );
          }),
          (e.ReportGamePerformance = function (e, t) {
            return e.SendNotification(
              "ClientMetrics.ReportGamePerformance#1",
              Mr(Qt, t),
              { ePrivilege: 1 },
            );
          });
      })(er || (er = {}));
      const tr =
        window.addEventListener ||
        (globalThis && globalThis.addEventListener) ||
        (() => {});
      let rr,
        ir = [],
        nr = (e, t, r) =>
          ir.push({ error: e, cCallsitesToIgnore: t, strComponentStack: r });
      const sr = !0;
      class ar extends Error {
        constructor(...e) {
          super(...e), (this.name = "Assertion Failed");
        }
      }
      {
        const e = console.assert;
        console.assert = (t, r, ...i) => {
          if (!t) {
            const e = cr();
            nr(new ar(dr(r, ...i)), 2, e);
          }
          e.apply(console, [t, r, ...i]);
        };
        const t = console.error;
        (console.error = (e, ...r) => {
          const i = cr();
          nr(new Error(dr(e, ...r)), 1, i), t.apply(console, [e, ...r]);
        }),
          (console.clogerror = (e, r, ...i) => {
            const n = cr();
            nr(new Error(dr(r, ...i)), e + 1, n), t.apply(console, [r, ...i]);
          }),
          tr("error", (e) => {
            nr(e.error, 0);
          }),
          tr("unhandledrejection", (e) => {
            nr(e.reason, 0);
          }),
          (rr = window.setTimeout(() => {
            (ir = []), (nr = () => {});
          }, 3e4));
      }
      const or = { cCallsitesToIgnore: 0, bIncludeMessageInIdentifier: !1 },
        lr = [
          "(localhost|127.0.0.1):(?!(80|443))",
          "chrome-extension://",
          "HTMLDivElement.onreset \\(/market",
          "/.millennium/Dist",
          "Millennium internal",
          "millenium",
          "millennium",
          "Refused unauthorized RPC command",
        ];
      function cr() {
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
      class ur {
        m_strProduct;
        m_strVersion;
        m_transport = null;
        m_rgErrorQueue = [];
        m_sendTimer = null;
        m_bReportingPaused = !1;
        m_pauseTimer = void 0;
        m_fnGetReportingInterval = wr;
        m_fnGetReportTags = () => [];
        m_fnGetURL = () => location.href;
        m_bEnabled = !0;
        m_bInitialized = !1;
        constructor(e = !0) {
          e
            ? (ir.forEach(
                ({ error: e, cCallsitesToIgnore: t, strComponentStack: r }) =>
                  this.ReportError(e, {
                    cCallsitesToIgnore: t,
                    strComponentStack: r,
                  }),
              ),
              (nr = (e, t, r) =>
                this.ReportError(e, {
                  cCallsitesToIgnore: t,
                  strComponentStack: r,
                })))
            : (nr = () => {}),
            (ir = []),
            clearTimeout(rr),
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
            const r = { ...or, ...t };
            if (!this.m_bEnabled) return null;
            0;
            const i = await (function (e, t) {
              try {
                return e.stack && e.stack.match(mr)
                  ? (async function (e, t) {
                      const {
                          cCallsitesToIgnore: r,
                          bIncludeMessageInIdentifier: i,
                        } = t,
                        { message: n, stack: s } = e,
                        a = s?.split("\n") ?? [];
                      let o = fr(a.filter((e) => !!e.match(mr))[r]);
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
                        identifierHash: await Br(o),
                        message: l,
                      };
                    })(e, t)
                  : e.stack && e.stack.match(gr)
                    ? (async function (e, t) {
                        const {
                            cCallsitesToIgnore: r,
                            bIncludeMessageInIdentifier: i,
                          } = t,
                          n = e.stack?.split("\n") ?? [];
                        let s = fr(n.filter((e) => !!e.match(gr))[r]);
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
                          identifierHash: await Br(s),
                          message: [e.message, ...a],
                        };
                      })(e, t)
                    : e.stack && e.stack.match(_r)
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
                            identifierHash: await Br(o),
                            message: [e.message, ...l],
                          };
                        })(e, t)
                      : (br ||
                          (console.warn(
                            "Error reporter does not know how to parse generated stack:",
                          ),
                          console.warn(e.stack),
                          (br = !0)),
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
            for (let t of lr) {
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
          const t = vr.Init(Dt),
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
                n = new Pt();
              let s;
              return (
                n.set_count(i),
                n.set_identifier(t.identifier + " " + t.identifierHash),
                n.set_message(JSON.stringify(t.message)),
                t.strComponentStack &&
                  ((s ??= {}), (s.componentStack = t.strComponentStack)),
                s && n.set_context(JSON.stringify(s)),
                t.strUrl && n.set_url(t.strUrl),
                n
              );
            });
          t.Body().set_product(this.m_strProduct),
            t.Body().set_version(this.m_strVersion),
            t.Body().set_errors(i);
          for (const e of this.m_fnGetReportTags()) t.Body().add_tags(e);
          er.ReportClientError(this.m_transport, t);
        }
        get version() {
          return this.m_strVersion;
        }
        get product() {
          return this.m_strProduct;
        }
        get reporting_enabled() {
          return sr;
        }
      }
      function dr(e, ...t) {
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
      const mr = /^\s*at .*(\S+:\d+|\(native\))/m,
        gr = /(^|@)\S+:\d+/,
        _r = /.*\/bundle-[a-zA-Z0-9]+:\d+:\d+/;
      let hr,
        br = !1;
      function fr(e) {
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
      const pr = () => (hr || (hr = new ur()), hr);
      async function Br(e) {
        try {
          return (await bt(e)).slice(0, 16);
        } catch (e) {
          return "";
        }
      }
      function wr() {
        return 1e4;
      }
      class yr {
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
      class Sr {
        static InitHeaderFromPacket(e) {
          return new Sr(void 0, e);
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
            if (((this.m_header = new vt(null)), (this.m_bValid = !0), t))
              if (
                ((this.m_netPacket = t),
                this.m_netPacket.SeekGetHead(),
                (this.m_eMsg = this.m_netPacket.GetUint32()),
                2147483648 & this.m_eMsg)
              ) {
                (this.m_eMsg = 2147483647 & this.m_eMsg),
                  (this.m_cubHeader = this.m_netPacket.GetUint32());
                try {
                  vt.deserializeBinaryFromReader(
                    this.m_header,
                    new rt.BinaryReader(
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
              new rt.BinaryReader(
                t.GetPacket(),
                t.TellGet(),
                t.GetCountBytesRemaining(),
              ),
            );
          } catch (e) {
            this.m_bValid = !1;
            const t = pr(),
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
            n = new yr(i);
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
          return new yr(t).PutBytes(e), t;
        }
        DEBUG_ToObject() {
          return {};
        }
        DEBUG_LogToConsole() {
          0;
        }
      }
      class vr extends Sr {
        constructor(e, t = 0, r, i, n) {
          super(t, r, e, i, void 0, n);
        }
        static InitFromPacket(e, t) {
          return new vr(e, 0, t);
        }
        static InitFromMsg(e, t) {
          return new vr(e, void 0, void 0, t);
        }
        static Init(e, t) {
          return new vr(e, t);
        }
        static InitFromObject(e, t) {
          return new vr(e, void 0, void 0, void 0, t);
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
      function Mr(e, t, r) {
        let i;
        return (
          (i = t instanceof vr ? t : vr.InitFromObject(e, t)),
          void 0 !== r?.strDebugSource &&
            i.Hdr().set_debug_source(r.strDebugSource),
          i
        );
      }
      const Cr = new (class {
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
      function Rr() {
        return Cr;
      }
      class Tr extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Tr.prototype.controller_index || dt(Tr.M()),
            rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Tr.sm_m ||
              (Tr.sm_m = {
                proto: Tr,
                fields: {
                  controller_index: {
                    n: 1,
                    br: nt.readUint32,
                    bw: st.writeUint32,
                  },
                  dpad_up: { n: 2, br: nt.readBool, bw: st.writeBool },
                  dpad_down: { n: 3, br: nt.readBool, bw: st.writeBool },
                  dpad_left: { n: 4, br: nt.readBool, bw: st.writeBool },
                  dpad_right: { n: 5, br: nt.readBool, bw: st.writeBool },
                  button_south: { n: 6, br: nt.readBool, bw: st.writeBool },
                  button_east: { n: 7, br: nt.readBool, bw: st.writeBool },
                  button_west: { n: 8, br: nt.readBool, bw: st.writeBool },
                  button_north: { n: 9, br: nt.readBool, bw: st.writeBool },
                  button_back_view: {
                    n: 10,
                    br: nt.readBool,
                    bw: st.writeBool,
                  },
                  button_start_options: {
                    n: 11,
                    br: nt.readBool,
                    bw: st.writeBool,
                  },
                  button_steam: { n: 12, br: nt.readBool, bw: st.writeBool },
                  button_quick_access: {
                    n: 13,
                    br: nt.readBool,
                    bw: st.writeBool,
                  },
                  button_mute_capture: {
                    n: 14,
                    br: nt.readBool,
                    bw: st.writeBool,
                  },
                  left_stick_click: {
                    n: 15,
                    br: nt.readBool,
                    bw: st.writeBool,
                  },
                  left_stick_touch: {
                    n: 16,
                    br: nt.readBool,
                    bw: st.writeBool,
                  },
                  left_stick_deflect: {
                    n: 17,
                    br: nt.readBool,
                    bw: st.writeBool,
                  },
                  right_stick_click: {
                    n: 18,
                    br: nt.readBool,
                    bw: st.writeBool,
                  },
                  right_stick_touch: {
                    n: 19,
                    br: nt.readBool,
                    bw: st.writeBool,
                  },
                  right_stick_deflect: {
                    n: 20,
                    br: nt.readBool,
                    bw: st.writeBool,
                  },
                  center_trackpad_touch: {
                    n: 21,
                    br: nt.readBool,
                    bw: st.writeBool,
                  },
                  center_trackpad_click: {
                    n: 22,
                    br: nt.readBool,
                    bw: st.writeBool,
                  },
                  left_trackpad_touch: {
                    n: 23,
                    br: nt.readBool,
                    bw: st.writeBool,
                  },
                  left_trackpad_click: {
                    n: 24,
                    br: nt.readBool,
                    bw: st.writeBool,
                  },
                  right_trackpad_touch: {
                    n: 25,
                    br: nt.readBool,
                    bw: st.writeBool,
                  },
                  right_trackpad_click: {
                    n: 26,
                    br: nt.readBool,
                    bw: st.writeBool,
                  },
                  left_bumper: { n: 27, br: nt.readBool, bw: st.writeBool },
                  left_trigger: { n: 28, br: nt.readBool, bw: st.writeBool },
                  l4: { n: 29, br: nt.readBool, bw: st.writeBool },
                  l5: { n: 30, br: nt.readBool, bw: st.writeBool },
                  left_aux: { n: 31, br: nt.readBool, bw: st.writeBool },
                  right_bumper: { n: 32, br: nt.readBool, bw: st.writeBool },
                  right_trigger: { n: 33, br: nt.readBool, bw: st.writeBool },
                  r4: { n: 34, br: nt.readBool, bw: st.writeBool },
                  r5: { n: 35, br: nt.readBool, bw: st.writeBool },
                  right_aux: { n: 36, br: nt.readBool, bw: st.writeBool },
                  button_state_bits: {
                    n: 37,
                    br: nt.readUint64String,
                    bw: st.writeUint64String,
                  },
                },
              }),
            Tr.sm_m
          );
        }
        static MBF() {
          return Tr.sm_mbf || (Tr.sm_mbf = at(Tr.M())), Tr.sm_mbf;
        }
        toObject(e = !1) {
          return Tr.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(Tr.M(), e, t);
        }
        static fromObject(e) {
          return ot(Tr.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new Tr();
          return Tr.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(Tr.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return Tr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(Tr.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return Tr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_ControllerButtonStateChanged_Notification";
        }
      }
      class Ir extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ir.prototype.x || dt(Ir.M()),
            rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ir.sm_m ||
              (Ir.sm_m = {
                proto: Ir,
                fields: {
                  x: { n: 1, br: nt.readFloat, bw: st.writeFloat },
                  y: { n: 2, br: nt.readFloat, bw: st.writeFloat },
                },
              }),
            Ir.sm_m
          );
        }
        static MBF() {
          return Ir.sm_mbf || (Ir.sm_mbf = at(Ir.M())), Ir.sm_mbf;
        }
        toObject(e = !1) {
          return Ir.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(Ir.M(), e, t);
        }
        static fromObject(e) {
          return ot(Ir.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new Ir();
          return Ir.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(Ir.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return Ir.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(Ir.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return Ir.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "ControllerVector2";
        }
      }
      class Fr extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Fr.prototype.x || dt(Fr.M()),
            rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Fr.sm_m ||
              (Fr.sm_m = {
                proto: Fr,
                fields: {
                  x: { n: 1, br: nt.readFloat, bw: st.writeFloat },
                  y: { n: 2, br: nt.readFloat, bw: st.writeFloat },
                  z: { n: 3, br: nt.readFloat, bw: st.writeFloat },
                },
              }),
            Fr.sm_m
          );
        }
        static MBF() {
          return Fr.sm_mbf || (Fr.sm_mbf = at(Fr.M())), Fr.sm_mbf;
        }
        toObject(e = !1) {
          return Fr.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(Fr.M(), e, t);
        }
        static fromObject(e) {
          return ot(Fr.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new Fr();
          return Fr.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(Fr.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return Fr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(Fr.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return Fr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "ControllerVector3";
        }
      }
      class Ar extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ar.prototype.w || dt(Ar.M()),
            rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ar.sm_m ||
              (Ar.sm_m = {
                proto: Ar,
                fields: {
                  w: { n: 1, br: nt.readFloat, bw: st.writeFloat },
                  x: { n: 2, br: nt.readFloat, bw: st.writeFloat },
                  y: { n: 3, br: nt.readFloat, bw: st.writeFloat },
                  z: { n: 4, br: nt.readFloat, bw: st.writeFloat },
                },
              }),
            Ar.sm_m
          );
        }
        static MBF() {
          return Ar.sm_mbf || (Ar.sm_mbf = at(Ar.M())), Ar.sm_mbf;
        }
        toObject(e = !1) {
          return Ar.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(Ar.M(), e, t);
        }
        static fromObject(e) {
          return ot(Ar.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new Ar();
          return Ar.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(Ar.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return Ar.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(Ar.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return Ar.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "ControllerQuaternion";
        }
      }
      class Nr extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Nr.prototype.pitch || dt(Nr.M()),
            rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Nr.sm_m ||
              (Nr.sm_m = {
                proto: Nr,
                fields: {
                  pitch: { n: 1, br: nt.readFloat, bw: st.writeFloat },
                  yaw: { n: 2, br: nt.readFloat, bw: st.writeFloat },
                  roll: { n: 3, br: nt.readFloat, bw: st.writeFloat },
                },
              }),
            Nr.sm_m
          );
        }
        static MBF() {
          return Nr.sm_mbf || (Nr.sm_mbf = at(Nr.M())), Nr.sm_mbf;
        }
        toObject(e = !1) {
          return Nr.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(Nr.M(), e, t);
        }
        static fromObject(e) {
          return ot(Nr.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new Nr();
          return Nr.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(Nr.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return Nr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(Nr.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return Nr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "ControllerGyroEulerAngles";
        }
      }
      class Er extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Er.prototype.controller_index || dt(Er.M()),
            rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Er.sm_m ||
              (Er.sm_m = {
                proto: Er,
                fields: {
                  controller_index: {
                    n: 1,
                    br: nt.readUint32,
                    bw: st.writeUint32,
                  },
                  joystick_left: { n: 2, c: Ir },
                  joystick_right: { n: 3, c: Ir },
                  trackpad_left: { n: 4, c: Ir },
                  trackpad_right: { n: 5, c: Ir },
                  trackpad_center: { n: 6, c: Ir },
                  trackpad_pressure_left: {
                    n: 7,
                    br: nt.readFloat,
                    bw: st.writeFloat,
                  },
                  trackpad_pressure_right: {
                    n: 8,
                    br: nt.readFloat,
                    bw: st.writeFloat,
                  },
                  trigger_left: { n: 9, br: nt.readFloat, bw: st.writeFloat },
                  trigger_right: { n: 10, br: nt.readFloat, bw: st.writeFloat },
                },
              }),
            Er.sm_m
          );
        }
        static MBF() {
          return Er.sm_mbf || (Er.sm_mbf = at(Er.M())), Er.sm_mbf;
        }
        toObject(e = !1) {
          return Er.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(Er.M(), e, t);
        }
        static fromObject(e) {
          return ot(Er.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new Er();
          return Er.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(Er.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return Er.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(Er.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return Er.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_ControllerAxesStateChange_Notification";
        }
      }
      class Or extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Or.prototype.controller_index || dt(Or.M()),
            rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Or.sm_m ||
              (Or.sm_m = {
                proto: Or,
                fields: {
                  controller_index: {
                    n: 1,
                    br: nt.readUint32,
                    bw: st.writeUint32,
                  },
                  imu_index: { n: 2, br: nt.readUint32, bw: st.writeUint32 },
                  gyro_raw_quaternion: { n: 3, c: Ar },
                  gyro_filtered_quaternion: { n: 4, c: Ar },
                  imu_sensor_delta_time: {
                    n: 5,
                    br: nt.readUint32,
                    bw: st.writeUint32,
                  },
                  estimated_packet_rate: {
                    n: 6,
                    br: nt.readUint32,
                    bw: st.writeUint32,
                  },
                },
              }),
            Or.sm_m
          );
        }
        static MBF() {
          return Or.sm_mbf || (Or.sm_mbf = at(Or.M())), Or.sm_mbf;
        }
        toObject(e = !1) {
          return Or.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(Or.M(), e, t);
        }
        static fromObject(e) {
          return ot(Or.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new Or();
          return Or.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(Or.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return Or.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(Or.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return Or.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_GyroQuaternionChanged_Notification";
        }
      }
      class zr extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            zr.prototype.controller_index || dt(zr.M()),
            rt.Message.initialize(this, e, 0, -1, void 0, null);
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
                    br: nt.readUint32,
                    bw: st.writeUint32,
                  },
                  imu_index: { n: 2, br: nt.readUint32, bw: st.writeUint32 },
                  gyro_raw_speed: { n: 3, c: Nr },
                  gyro_filtered_speed: { n: 4, c: Nr },
                },
              }),
            zr.sm_m
          );
        }
        static MBF() {
          return zr.sm_mbf || (zr.sm_mbf = at(zr.M())), zr.sm_mbf;
        }
        toObject(e = !1) {
          return zr.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(zr.M(), e, t);
        }
        static fromObject(e) {
          return ot(zr.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new zr();
          return zr.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(zr.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return zr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(zr.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return zr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_GyroSpeedChanged_Notification";
        }
      }
      class Dr extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Dr.prototype.controller_index || dt(Dr.M()),
            rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Dr.sm_m ||
              (Dr.sm_m = {
                proto: Dr,
                fields: {
                  controller_index: {
                    n: 1,
                    br: nt.readUint32,
                    bw: st.writeUint32,
                  },
                  imu_index: { n: 2, br: nt.readUint32, bw: st.writeUint32 },
                  acceleromter_1g: { n: 4, c: Fr },
                  trusted_gravity_1g: { n: 5, c: Fr },
                },
              }),
            Dr.sm_m
          );
        }
        static MBF() {
          return Dr.sm_mbf || (Dr.sm_mbf = at(Dr.M())), Dr.sm_mbf;
        }
        toObject(e = !1) {
          return Dr.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(Dr.M(), e, t);
        }
        static fromObject(e) {
          return ot(Dr.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new Dr();
          return Dr.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(Dr.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return Dr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(Dr.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return Dr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_GyroAccelerometerChanged_Notification";
        }
      }
      class Pr extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Pr.prototype.controller_index || dt(Pr.M()),
            rt.Message.initialize(this, e, 0, -1, void 0, null);
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
                    br: nt.readUint32,
                    bw: st.writeUint32,
                  },
                  imu_index: { n: 2, br: nt.readUint32, bw: st.writeUint32 },
                  acceleromter_noise: {
                    n: 3,
                    br: nt.readFloat,
                    bw: st.writeFloat,
                  },
                  gyroscope_noise: {
                    n: 4,
                    br: nt.readFloat,
                    bw: st.writeFloat,
                  },
                  calibration_progress: {
                    n: 5,
                    br: nt.readFloat,
                    bw: st.writeFloat,
                  },
                  calibration_state: {
                    n: 6,
                    br: nt.readUint32,
                    bw: st.writeUint32,
                  },
                  gyroscope_noise_tolerance: {
                    n: 7,
                    br: nt.readFloat,
                    bw: st.writeFloat,
                  },
                  accelerometer_noise_tolerance: {
                    n: 8,
                    br: nt.readFloat,
                    bw: st.writeFloat,
                  },
                },
              }),
            Pr.sm_m
          );
        }
        static MBF() {
          return Pr.sm_mbf || (Pr.sm_mbf = at(Pr.M())), Pr.sm_mbf;
        }
        toObject(e = !1) {
          return Pr.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(Pr.M(), e, t);
        }
        static fromObject(e) {
          return ot(Pr.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new Pr();
          return Pr.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(Pr.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return Pr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(Pr.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return Pr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_GyroCalibration_Notification";
        }
      }
      class Wr extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Wr.prototype.controller_index || dt(Wr.M()),
            rt.Message.initialize(this, e, 0, -1, void 0, null);
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
                    br: nt.readUint32,
                    bw: st.writeUint32,
                  },
                  flow_mode: { n: 2, br: nt.readUint32, bw: st.writeUint32 },
                },
              }),
            Wr.sm_m
          );
        }
        static MBF() {
          return Wr.sm_mbf || (Wr.sm_mbf = at(Wr.M())), Wr.sm_mbf;
        }
        toObject(e = !1) {
          return Wr.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(Wr.M(), e, t);
        }
        static fromObject(e) {
          return ot(Wr.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new Wr();
          return Wr.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(Wr.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return Wr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(Wr.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return Wr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_ControllerStateFlow_Request";
        }
      }
      class Gr extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Gr.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Gr();
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new Gr();
          return Gr.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return Gr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return Gr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_ControllerStateFlow_Response";
        }
      }
      class Ur extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ur.prototype.controller_index || dt(Ur.M()),
            rt.Message.initialize(this, e, 0, -1, void 0, null);
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
                    br: nt.readUint32,
                    bw: st.writeUint32,
                  },
                  side: { n: 2, br: nt.readInt32, bw: st.writeInt32 },
                },
              }),
            Ur.sm_m
          );
        }
        static MBF() {
          return Ur.sm_mbf || (Ur.sm_mbf = at(Ur.M())), Ur.sm_mbf;
        }
        toObject(e = !1) {
          return Ur.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(Ur.M(), e, t);
        }
        static fromObject(e) {
          return ot(Ur.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new Ur();
          return Ur.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(Ur.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return Ur.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(Ur.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return Ur.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_GyroSoftwareCalibration_Request";
        }
      }
      class xr extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return xr.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new xr();
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new xr();
          return xr.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return xr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return xr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_GyroSoftwareCalibration_Response";
        }
      }
      class Lr extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Lr.prototype.controller_index || dt(Lr.M()),
            rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Lr.sm_m ||
              (Lr.sm_m = {
                proto: Lr,
                fields: {
                  controller_index: {
                    n: 1,
                    br: nt.readUint32,
                    bw: st.writeUint32,
                  },
                  dongle_index: { n: 2, br: nt.readUint32, bw: st.writeUint32 },
                  slot: { n: 3, br: nt.readUint32, bw: st.writeUint32 },
                },
              }),
            Lr.sm_m
          );
        }
        static MBF() {
          return Lr.sm_mbf || (Lr.sm_mbf = at(Lr.M())), Lr.sm_mbf;
        }
        toObject(e = !1) {
          return Lr.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(Lr.M(), e, t);
        }
        static fromObject(e) {
          return ot(Lr.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new Lr();
          return Lr.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(Lr.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return Lr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(Lr.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return Lr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_PairDongleTritonConnected_Request";
        }
      }
      class kr extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return kr.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new kr();
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new kr();
          return kr.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return kr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return kr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_PairDongleTritonConnected_Response";
        }
      }
      class jr extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), rt.Message.initialize(this, e, 0, -1, void 0, null);
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
          let t = new (it().BinaryReader)(e),
            r = new jr();
          return jr.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return jr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return jr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_SteamDonglesChanged_Notification";
        }
      }
      class Hr extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Hr.prototype.controller_index || dt(Hr.M()),
            rt.Message.initialize(this, e, 0, -1, void 0, null);
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
                    br: nt.readUint32,
                    bw: st.writeUint32,
                  },
                },
              }),
            Hr.sm_m
          );
        }
        static MBF() {
          return Hr.sm_mbf || (Hr.sm_mbf = at(Hr.M())), Hr.sm_mbf;
        }
        toObject(e = !1) {
          return Hr.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(Hr.M(), e, t);
        }
        static fromObject(e) {
          return ot(Hr.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new Hr();
          return Hr.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(Hr.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return Hr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(Hr.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return Hr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_UnpairedTritonPluggedIn_Notification";
        }
      }
      class Vr extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Vr.prototype.docked_puck_index || dt(Vr.M()),
            rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Vr.sm_m ||
              (Vr.sm_m = {
                proto: Vr,
                fields: {
                  docked_puck_index: {
                    n: 1,
                    br: nt.readUint32,
                    bw: st.writeUint32,
                  },
                },
              }),
            Vr.sm_m
          );
        }
        static MBF() {
          return Vr.sm_mbf || (Vr.sm_mbf = at(Vr.M())), Vr.sm_mbf;
        }
        toObject(e = !1) {
          return Vr.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(Vr.M(), e, t);
        }
        static fromObject(e) {
          return ot(Vr.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new Vr();
          return Vr.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(Vr.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return Vr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(Vr.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return Vr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_UnpairedTritonDocked_Notification";
        }
      }
      class qr extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            qr.prototype.docked_puck_index || dt(qr.M()),
            rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            qr.sm_m ||
              (qr.sm_m = {
                proto: qr,
                fields: {
                  docked_puck_index: {
                    n: 1,
                    br: nt.readUint32,
                    bw: st.writeUint32,
                  },
                },
              }),
            qr.sm_m
          );
        }
        static MBF() {
          return qr.sm_mbf || (qr.sm_mbf = at(qr.M())), qr.sm_mbf;
        }
        toObject(e = !1) {
          return qr.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(qr.M(), e, t);
        }
        static fromObject(e) {
          return ot(qr.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new qr();
          return qr.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(qr.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return qr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(qr.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return qr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_TritonUndocked_Notification";
        }
      }
      class Kr extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Kr.prototype.controller_index || dt(Kr.M()),
            rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Kr.sm_m ||
              (Kr.sm_m = {
                proto: Kr,
                fields: {
                  controller_index: {
                    n: 1,
                    br: nt.readUint32,
                    bw: st.writeUint32,
                  },
                },
              }),
            Kr.sm_m
          );
        }
        static MBF() {
          return Kr.sm_mbf || (Kr.sm_mbf = at(Kr.M())), Kr.sm_mbf;
        }
        toObject(e = !1) {
          return Kr.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(Kr.M(), e, t);
        }
        static fromObject(e) {
          return ot(Kr.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new Kr();
          return Kr.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(Kr.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return Kr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(Kr.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return Kr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_ControllerPairingChanged_Notification";
        }
      }
      class $r extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            $r.prototype.include_bonds || dt($r.M()),
            rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            $r.sm_m ||
              ($r.sm_m = {
                proto: $r,
                fields: {
                  include_bonds: { n: 1, br: nt.readBool, bw: st.writeBool },
                },
              }),
            $r.sm_m
          );
        }
        static MBF() {
          return $r.sm_mbf || ($r.sm_mbf = at($r.M())), $r.sm_mbf;
        }
        toObject(e = !1) {
          return $r.toObject(e, this);
        }
        static toObject(e, t) {
          return lt($r.M(), e, t);
        }
        static fromObject(e) {
          return ot($r.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new $r();
          return $r.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct($r.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return $r.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut($r.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return $r.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_GetDongles_Request";
        }
      }
      class Qr extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Qr.prototype.steam_controller_v1 || dt(Qr.M()),
            rt.Message.initialize(this, e, 0, -1, [2, 3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Qr.sm_m ||
              (Qr.sm_m = {
                proto: Qr,
                fields: {
                  steam_controller_v1: {
                    n: 1,
                    br: nt.readBool,
                    bw: st.writeBool,
                  },
                  ibex_internal: { n: 2, c: Yr, r: !0, q: !0 },
                  ibex_external: { n: 3, c: Yr, r: !0, q: !0 },
                },
              }),
            Qr.sm_m
          );
        }
        static MBF() {
          return Qr.sm_mbf || (Qr.sm_mbf = at(Qr.M())), Qr.sm_mbf;
        }
        toObject(e = !1) {
          return Qr.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(Qr.M(), e, t);
        }
        static fromObject(e) {
          return ot(Qr.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new Qr();
          return Qr.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(Qr.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return Qr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(Qr.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return Qr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_GetDongles_Response";
        }
      }
      class Yr extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Yr.prototype.index || dt(Yr.M()),
            rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Yr.sm_m ||
              (Yr.sm_m = {
                proto: Yr,
                fields: {
                  index: { n: 1, br: nt.readUint32, bw: st.writeUint32 },
                  dongle_serial_number: {
                    n: 2,
                    br: nt.readString,
                    bw: st.writeString,
                  },
                  paired_serial_number: {
                    n: 3,
                    br: nt.readString,
                    bw: st.writeString,
                  },
                  paired: { n: 4, br: nt.readBool, bw: st.writeBool },
                  docked: { n: 5, br: nt.readBool, bw: st.writeBool },
                },
              }),
            Yr.sm_m
          );
        }
        static MBF() {
          return Yr.sm_mbf || (Yr.sm_mbf = at(Yr.M())), Yr.sm_mbf;
        }
        toObject(e = !1) {
          return Yr.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(Yr.M(), e, t);
        }
        static fromObject(e) {
          return ot(Yr.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new Yr();
          return Yr.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(Yr.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return Yr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(Yr.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return Yr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_GetDongles_Response_Dongle";
        }
      }
      class Xr extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Xr.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Xr();
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new Xr();
          return Xr.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return Xr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return Xr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_ShouldTritonPairInOobe_Request";
        }
      }
      class Jr extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Jr.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Jr();
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new Jr();
          return Jr.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return Jr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return Jr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_WaitInitialControllerStateEnumerated_Request";
        }
      }
      class Zr extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Zr.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Zr();
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new Zr();
          return Zr.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return Zr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return Zr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_WaitInitialControllerStateEnumerated_Response";
        }
      }
      class ei extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ei.prototype.pair_type || dt(ei.M()),
            rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ei.sm_m ||
              (ei.sm_m = {
                proto: ei,
                fields: {
                  pair_type: { n: 1, br: nt.readEnum, bw: st.writeEnum },
                  controller_index: {
                    n: 2,
                    br: nt.readUint32,
                    bw: st.writeUint32,
                  },
                  dongle_index: { n: 3, br: nt.readUint32, bw: st.writeUint32 },
                },
              }),
            ei.sm_m
          );
        }
        static MBF() {
          return ei.sm_mbf || (ei.sm_mbf = at(ei.M())), ei.sm_mbf;
        }
        toObject(e = !1) {
          return ei.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(ei.M(), e, t);
        }
        static fromObject(e) {
          return ot(ei.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new ei();
          return ei.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(ei.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return ei.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(ei.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return ei.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_ShouldTritonPairInOobe_Response";
        }
      }
      class ti extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ti.prototype.controller_type || dt(ti.M()),
            rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ti.sm_m ||
              (ti.sm_m = {
                proto: ti,
                fields: {
                  controller_type: {
                    n: 1,
                    br: nt.readInt32,
                    bw: st.writeInt32,
                  },
                  controller_style: {
                    n: 2,
                    br: nt.readInt32,
                    bw: st.writeInt32,
                  },
                  source: { n: 3, br: nt.readInt32, bw: st.writeInt32 },
                  input: { n: 4, br: nt.readInt32, bw: st.writeInt32 },
                },
              }),
            ti.sm_m
          );
        }
        static MBF() {
          return ti.sm_mbf || (ti.sm_mbf = at(ti.M())), ti.sm_mbf;
        }
        toObject(e = !1) {
          return ti.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(ti.M(), e, t);
        }
        static fromObject(e) {
          return ot(ti.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new ti();
          return ti.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(ti.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return ti.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(ti.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return ti.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CControllerOriginKey";
        }
      }
      class ri extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ri.prototype.key || dt(ri.M()),
            rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ri.sm_m ||
              (ri.sm_m = {
                proto: ri,
                fields: {
                  key: { n: 1, c: ti },
                  localized_string: {
                    n: 2,
                    br: nt.readString,
                    bw: st.writeString,
                  },
                },
              }),
            ri.sm_m
          );
        }
        static MBF() {
          return ri.sm_mbf || (ri.sm_mbf = at(ri.M())), ri.sm_mbf;
        }
        toObject(e = !1) {
          return ri.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(ri.M(), e, t);
        }
        static fromObject(e) {
          return ot(ri.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new ri();
          return ri.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(ri.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return ri.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(ri.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return ri.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CControllerAccessibilityString";
        }
      }
      class ii extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return ii.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new ii();
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new ii();
          return ii.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return ii.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return ii.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_ControllerAccessibilityStrings_Request";
        }
      }
      class ni extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ni.prototype.strings || dt(ni.M()),
            rt.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ni.sm_m ||
              (ni.sm_m = {
                proto: ni,
                fields: { strings: { n: 1, c: ri, r: !0, q: !0 } },
              }),
            ni.sm_m
          );
        }
        static MBF() {
          return ni.sm_mbf || (ni.sm_mbf = at(ni.M())), ni.sm_mbf;
        }
        toObject(e = !1) {
          return ni.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(ni.M(), e, t);
        }
        static fromObject(e) {
          return ot(ni.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new ni();
          return ni.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(ni.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return ni.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(ni.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return ni.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_ControllerAccessibilityStrings_Response";
        }
      }
      class si extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            si.prototype.idx || dt(si.M()),
            rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            si.sm_m ||
              (si.sm_m = {
                proto: si,
                fields: {
                  idx: { n: 1, br: nt.readUint32, bw: st.writeUint32 },
                },
              }),
            si.sm_m
          );
        }
        static MBF() {
          return si.sm_mbf || (si.sm_mbf = at(si.M())), si.sm_mbf;
        }
        toObject(e = !1) {
          return si.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(si.M(), e, t);
        }
        static fromObject(e) {
          return ot(si.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new si();
          return si.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(si.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return si.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(si.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return si.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_ControllerPowerMenu_Notification";
        }
      }
      class ai extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ai.prototype.controller_index || dt(ai.M()),
            rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ai.sm_m ||
              (ai.sm_m = {
                proto: ai,
                fields: {
                  controller_index: {
                    n: 1,
                    br: nt.readUint32,
                    bw: st.writeUint32,
                  },
                },
              }),
            ai.sm_m
          );
        }
        static MBF() {
          return ai.sm_mbf || (ai.sm_mbf = at(ai.M())), ai.sm_mbf;
        }
        toObject(e = !1) {
          return ai.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(ai.M(), e, t);
        }
        static fromObject(e) {
          return ot(ai.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new ai();
          return ai.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(ai.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return ai.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(ai.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return ai.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_ControllerDisconnected_Notification";
        }
      }
      class oi extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            oi.prototype.controller_index || dt(oi.M()),
            rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            oi.sm_m ||
              (oi.sm_m = {
                proto: oi,
                fields: {
                  controller_index: {
                    n: 1,
                    br: nt.readUint32,
                    bw: st.writeUint32,
                  },
                },
              }),
            oi.sm_m
          );
        }
        static MBF() {
          return oi.sm_mbf || (oi.sm_mbf = at(oi.M())), oi.sm_mbf;
        }
        toObject(e = !1) {
          return oi.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(oi.M(), e, t);
        }
        static fromObject(e) {
          return ot(oi.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new oi();
          return oi.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(oi.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return oi.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(oi.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return oi.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_GetTritonPairingInfo_Request";
        }
      }
      class li extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            li.prototype.slot || dt(li.M()),
            rt.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            li.sm_m ||
              (li.sm_m = {
                proto: li,
                fields: {
                  slot: { n: 1, c: ci, r: !0, q: !0 },
                  connection_type: { n: 2, br: nt.readEnum, bw: st.writeEnum },
                },
              }),
            li.sm_m
          );
        }
        static MBF() {
          return li.sm_mbf || (li.sm_mbf = at(li.M())), li.sm_mbf;
        }
        toObject(e = !1) {
          return li.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(li.M(), e, t);
        }
        static fromObject(e) {
          return ot(li.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new li();
          return li.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(li.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return li.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(li.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return li.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_GetTritonPairingInfo_Response";
        }
      }
      class ci extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ci.prototype.serial_number || dt(ci.M()),
            rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ci.sm_m ||
              (ci.sm_m = {
                proto: ci,
                fields: {
                  serial_number: {
                    n: 1,
                    br: nt.readString,
                    bw: st.writeString,
                  },
                  active: { n: 2, br: nt.readBool, bw: st.writeBool },
                  type: { n: 3, br: nt.readEnum, bw: st.writeEnum },
                },
              }),
            ci.sm_m
          );
        }
        static MBF() {
          return ci.sm_mbf || (ci.sm_mbf = at(ci.M())), ci.sm_mbf;
        }
        toObject(e = !1) {
          return ci.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(ci.M(), e, t);
        }
        static fromObject(e) {
          return ot(ci.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new ci();
          return ci.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(ci.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return ci.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(ci.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return ci.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_GetTritonPairingInfo_Response_Slot";
        }
      }
      class ui extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ui.prototype.controller_index || dt(ui.M()),
            rt.Message.initialize(this, e, 0, -1, void 0, null);
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
                    br: nt.readUint32,
                    bw: st.writeUint32,
                  },
                  slot_index: { n: 2, br: nt.readUint32, bw: st.writeUint32 },
                },
              }),
            ui.sm_m
          );
        }
        static MBF() {
          return ui.sm_mbf || (ui.sm_mbf = at(ui.M())), ui.sm_mbf;
        }
        toObject(e = !1) {
          return ui.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(ui.M(), e, t);
        }
        static fromObject(e) {
          return ot(ui.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new ui();
          return ui.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(ui.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return ui.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(ui.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return ui.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_ForgetTritonPairingBond_Request";
        }
      }
      class di extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return di.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new di();
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new di();
          return di.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return di.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return di.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_ForgetTritonPairingBond_Response";
        }
      }
      class mi extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            mi.prototype.dongle_index || dt(mi.M()),
            rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            mi.sm_m ||
              (mi.sm_m = {
                proto: mi,
                fields: {
                  dongle_index: { n: 1, br: nt.readUint32, bw: st.writeUint32 },
                },
              }),
            mi.sm_m
          );
        }
        static MBF() {
          return mi.sm_mbf || (mi.sm_mbf = at(mi.M())), mi.sm_mbf;
        }
        toObject(e = !1) {
          return mi.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(mi.M(), e, t);
        }
        static fromObject(e) {
          return ot(mi.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new mi();
          return mi.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(mi.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return mi.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(mi.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return mi.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_ForgetDonglePairingBond_Request";
        }
      }
      class gi extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return gi.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new gi();
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new gi();
          return gi.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return gi.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return gi.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_ForgetDonglePairingBond_Response";
        }
      }
      class _i extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _i.prototype.serial_number || dt(_i.M()),
            rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _i.sm_m ||
              (_i.sm_m = {
                proto: _i,
                fields: {
                  serial_number: {
                    n: 1,
                    br: nt.readString,
                    bw: st.writeString,
                  },
                },
              }),
            _i.sm_m
          );
        }
        static MBF() {
          return _i.sm_mbf || (_i.sm_mbf = at(_i.M())), _i.sm_mbf;
        }
        toObject(e = !1) {
          return _i.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(_i.M(), e, t);
        }
        static fromObject(e) {
          return ot(_i.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new _i();
          return _i.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(_i.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return _i.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(_i.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return _i.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_GetControllerName_Request";
        }
      }
      class hi extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            hi.prototype.controller_name || dt(hi.M()),
            rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            hi.sm_m ||
              (hi.sm_m = {
                proto: hi,
                fields: {
                  controller_name: {
                    n: 1,
                    br: nt.readString,
                    bw: st.writeString,
                  },
                },
              }),
            hi.sm_m
          );
        }
        static MBF() {
          return hi.sm_mbf || (hi.sm_mbf = at(hi.M())), hi.sm_mbf;
        }
        toObject(e = !1) {
          return hi.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(hi.M(), e, t);
        }
        static fromObject(e) {
          return ot(hi.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new hi();
          return hi.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(hi.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return hi.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(hi.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return hi.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_GetControllerName_Response";
        }
      }
      class bi extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            bi.prototype.controller_index || dt(bi.M()),
            rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            bi.sm_m ||
              (bi.sm_m = {
                proto: bi,
                fields: {
                  controller_index: {
                    n: 1,
                    br: nt.readUint32,
                    bw: st.writeUint32,
                  },
                  enable: { n: 2, br: nt.readBool, bw: st.writeBool },
                },
              }),
            bi.sm_m
          );
        }
        static MBF() {
          return bi.sm_mbf || (bi.sm_mbf = at(bi.M())), bi.sm_mbf;
        }
        toObject(e = !1) {
          return bi.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(bi.M(), e, t);
        }
        static fromObject(e) {
          return ot(bi.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new bi();
          return bi.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(bi.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return bi.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(bi.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return bi.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_EnableDockedInput_Request";
        }
      }
      class fi extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return fi.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new fi();
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new fi();
          return fi.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return fi.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return fi.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_EnableDockedInput_Response";
        }
      }
      class pi extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            pi.prototype.controller_index || dt(pi.M()),
            rt.Message.initialize(this, e, 0, -1, [18], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            pi.sm_m ||
              (pi.sm_m = {
                proto: pi,
                fields: {
                  controller_index: {
                    n: 1,
                    br: nt.readUint32,
                    bw: st.writeUint32,
                  },
                  initialized: { n: 2, br: nt.readBool, bw: st.writeBool },
                  controller_type: {
                    n: 3,
                    br: nt.readUint32,
                    bw: st.writeUint32,
                  },
                  controller_style: {
                    n: 4,
                    br: nt.readUint32,
                    bw: st.writeUint32,
                  },
                  xinput_index: { n: 5, br: nt.readInt32, bw: st.writeInt32 },
                  is_wireless_steam_dongle: {
                    n: 6,
                    br: nt.readBool,
                    bw: st.writeBool,
                  },
                  vendor_id: { n: 7, br: nt.readUint32, bw: st.writeUint32 },
                  product_id: { n: 8, br: nt.readUint32, bw: st.writeUint32 },
                  capabilities: {
                    n: 9,
                    br: nt.readUint64String,
                    bw: st.writeUint64String,
                  },
                  firmware_version: {
                    n: 10,
                    br: nt.readUint32,
                    bw: st.writeUint32,
                  },
                  firmware_build_time: {
                    n: 11,
                    br: nt.readString,
                    bw: st.writeString,
                  },
                  serial_number: {
                    n: 12,
                    br: nt.readString,
                    bw: st.writeString,
                  },
                  cpu_id: { n: 13, br: nt.readString, bw: st.writeString },
                  name: { n: 14, br: nt.readString, bw: st.writeString },
                  is_remote_device: {
                    n: 15,
                    br: nt.readBool,
                    bw: st.writeBool,
                  },
                  is_bluetooth: { n: 16, br: nt.readBool, bw: st.writeBool },
                  has_touchscreen: { n: 17, br: nt.readBool, bw: st.writeBool },
                  mac_addr: {
                    n: 18,
                    r: !0,
                    q: !0,
                    br: nt.readString,
                    bw: st.writeRepeatedString,
                  },
                  battery_level: {
                    n: 19,
                    br: nt.readUint32,
                    bw: st.writeUint32,
                  },
                  is_charging: { n: 20, br: nt.readBool, bw: st.writeBool },
                  led_brightness: {
                    n: 21,
                    br: nt.readFloat,
                    bw: st.writeFloat,
                  },
                  led_saturation: {
                    n: 22,
                    br: nt.readFloat,
                    bw: st.writeFloat,
                  },
                  turn_on_sound: { n: 23, br: nt.readInt32, bw: st.writeInt32 },
                  turn_off_sound: {
                    n: 24,
                    br: nt.readInt32,
                    bw: st.writeInt32,
                  },
                  led_red: { n: 25, br: nt.readInt32, bw: st.writeInt32 },
                  led_green: { n: 26, br: nt.readInt32, bw: st.writeInt32 },
                  led_blue: { n: 27, br: nt.readInt32, bw: st.writeInt32 },
                  deadzone_left_stick: {
                    n: 28,
                    br: nt.readInt32,
                    bw: st.writeInt32,
                  },
                  deadzone_right_stick: {
                    n: 29,
                    br: nt.readInt32,
                    bw: st.writeInt32,
                  },
                  haptics_enabled: { n: 30, br: nt.readBool, bw: st.writeBool },
                  gyro_sw_antidrift_enabled: {
                    n: 31,
                    br: nt.readBool,
                    bw: st.writeBool,
                  },
                  gyro_one_euro_filter_enabled: {
                    n: 32,
                    br: nt.readBool,
                    bw: st.writeBool,
                  },
                  haptic_strength_left: {
                    n: 33,
                    br: nt.readInt32,
                    bw: st.writeInt32,
                  },
                  haptic_strength_right: {
                    n: 34,
                    br: nt.readInt32,
                    bw: st.writeInt32,
                  },
                  pad_pressure_curve_left: {
                    n: 35,
                    br: nt.readFloat,
                    bw: st.writeFloat,
                  },
                  pad_pressure_curve_right: {
                    n: 36,
                    br: nt.readFloat,
                    bw: st.writeFloat,
                  },
                  left_stick_touch_disable_lpad: {
                    n: 37,
                    br: nt.readBool,
                    bw: st.writeBool,
                  },
                  right_stick_touch_disable_rpad: {
                    n: 38,
                    br: nt.readBool,
                    bw: st.writeBool,
                  },
                  player_slot_led_setting: {
                    n: 39,
                    br: nt.readInt32,
                    bw: st.writeInt32,
                  },
                  has_nintendo_layout: {
                    n: 40,
                    br: nt.readBool,
                    bw: st.writeBool,
                  },
                  has_reversed_layout: {
                    n: 41,
                    br: nt.readBool,
                    bw: st.writeBool,
                  },
                  has_universal_face_button_glyphs: {
                    n: 42,
                    br: nt.readBool,
                    bw: st.writeBool,
                  },
                  gyro_stationary_tolerance: {
                    n: 43,
                    br: nt.readFloat,
                    bw: st.writeFloat,
                  },
                  accel_stationary_tolerance: {
                    n: 44,
                    br: nt.readFloat,
                    bw: st.writeFloat,
                  },
                  aux_capsense_threshold: {
                    n: 45,
                    br: nt.readInt32,
                    bw: st.writeInt32,
                  },
                  aux_capsense_hysterisis: {
                    n: 46,
                    br: nt.readInt32,
                    bw: st.writeInt32,
                  },
                  rumble_setting: {
                    n: 47,
                    br: nt.readInt32,
                    bw: st.writeInt32,
                  },
                  triton_gyro_hw_cal: {
                    n: 48,
                    br: nt.readInt32,
                    bw: st.writeInt32,
                  },
                  use_gyro_sw_biases: {
                    n: 49,
                    br: nt.readBool,
                    bw: st.writeBool,
                  },
                },
              }),
            pi.sm_m
          );
        }
        static MBF() {
          return pi.sm_mbf || (pi.sm_mbf = at(pi.M())), pi.sm_mbf;
        }
        toObject(e = !1) {
          return pi.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(pi.M(), e, t);
        }
        static fromObject(e) {
          return ot(pi.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new pi();
          return pi.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(pi.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return pi.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(pi.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return pi.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_RawControllerDetailItem";
        }
      }
      class Bi extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Bi.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Bi();
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new Bi();
          return Bi.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return Bi.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return Bi.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_ControllerListChanged_Notification";
        }
      }
      class wi extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), rt.Message.initialize(this, e, 0, -1, void 0, null);
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
          let t = new (it().BinaryReader)(e),
            r = new wi();
          return wi.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return wi.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return wi.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_GetControllerList_Request";
        }
      }
      class yi extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            yi.prototype.controllers || dt(yi.M()),
            rt.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            yi.sm_m ||
              (yi.sm_m = {
                proto: yi,
                fields: { controllers: { n: 1, c: pi, r: !0, q: !0 } },
              }),
            yi.sm_m
          );
        }
        static MBF() {
          return yi.sm_mbf || (yi.sm_mbf = at(yi.M())), yi.sm_mbf;
        }
        toObject(e = !1) {
          return yi.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(yi.M(), e, t);
        }
        static fromObject(e) {
          return ot(yi.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new yi();
          return yi.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(yi.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return yi.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(yi.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return yi.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_GetControllerList_Response";
        }
      }
      class Si extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), rt.Message.initialize(this, e, 0, -1, void 0, null);
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
          let t = new (it().BinaryReader)(e),
            r = new Si();
          return Si.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return Si.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return Si.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_FirstSteamControllerConnection_Notification";
        }
      }
      class vi extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            vi.prototype.period_ms || dt(vi.M()),
            rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            vi.sm_m ||
              (vi.sm_m = {
                proto: vi,
                fields: {
                  period_ms: { n: 1, br: nt.readInt32, bw: st.writeInt32 },
                  packets_sent: { n: 2, br: nt.readUint32, bw: st.writeUint32 },
                  packet_retransmissions: {
                    n: 3,
                    br: nt.readUint32,
                    bw: st.writeUint32,
                  },
                  interval_max_ms: {
                    n: 4,
                    br: nt.readUint32,
                    bw: st.writeUint32,
                  },
                  rssi_measure: { n: 5, br: nt.readInt32, bw: st.writeInt32 },
                  reason: { n: 6, br: nt.readUint32, bw: st.writeUint32 },
                  rf_channel: { n: 7, br: nt.readUint32, bw: st.writeUint32 },
                  backup_channel: {
                    n: 8,
                    br: nt.readUint32,
                    bw: st.writeUint32,
                  },
                },
              }),
            vi.sm_m
          );
        }
        static MBF() {
          return vi.sm_mbf || (vi.sm_mbf = at(vi.M())), vi.sm_mbf;
        }
        toObject(e = !1) {
          return vi.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(vi.M(), e, t);
        }
        static fromObject(e) {
          return ot(vi.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new vi();
          return vi.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(vi.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return vi.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(vi.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return vi.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CTritonQosStatus";
        }
      }
      class Mi extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Mi.prototype.controller_index || dt(Mi.M()),
            rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Mi.sm_m ||
              (Mi.sm_m = {
                proto: Mi,
                fields: {
                  controller_index: {
                    n: 1,
                    br: nt.readUint32,
                    bw: st.writeUint32,
                  },
                  status: { n: 2, c: vi },
                },
              }),
            Mi.sm_m
          );
        }
        static MBF() {
          return Mi.sm_mbf || (Mi.sm_mbf = at(Mi.M())), Mi.sm_mbf;
        }
        toObject(e = !1) {
          return Mi.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(Mi.M(), e, t);
        }
        static fromObject(e) {
          return ot(Mi.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new Mi();
          return Mi.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(Mi.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return Mi.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(Mi.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return Mi.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_TritonQos_Notification";
        }
      }
      class Ci extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ci.prototype.controller_index || dt(Ci.M()),
            rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ci.sm_m ||
              (Ci.sm_m = {
                proto: Ci,
                fields: {
                  controller_index: {
                    n: 1,
                    br: nt.readUint32,
                    bw: st.writeUint32,
                  },
                  enable: { n: 2, br: nt.readBool, bw: st.writeBool },
                },
              }),
            Ci.sm_m
          );
        }
        static MBF() {
          return Ci.sm_mbf || (Ci.sm_mbf = at(Ci.M())), Ci.sm_mbf;
        }
        toObject(e = !1) {
          return Ci.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(Ci.M(), e, t);
        }
        static fromObject(e) {
          return ot(Ci.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new Ci();
          return Ci.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(Ci.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return Ci.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(Ci.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return Ci.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_EnableQosStatus_Request";
        }
      }
      class Ri extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Ri.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Ri();
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new Ri();
          return Ri.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return Ri.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return Ri.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_EnableQosStatus_Response";
        }
      }
      class Ti extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ti.prototype.controller_index || dt(Ti.M()),
            rt.Message.initialize(this, e, 0, -1, void 0, null);
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
                    br: nt.readUint32,
                    bw: st.writeUint32,
                  },
                  battery_level: {
                    n: 2,
                    br: nt.readUint32,
                    bw: st.writeUint32,
                  },
                  charging: { n: 3, br: nt.readBool, bw: st.writeBool },
                },
              }),
            Ti.sm_m
          );
        }
        static MBF() {
          return Ti.sm_mbf || (Ti.sm_mbf = at(Ti.M())), Ti.sm_mbf;
        }
        toObject(e = !1) {
          return Ti.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(Ti.M(), e, t);
        }
        static fromObject(e) {
          return ot(Ti.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new Ti();
          return Ti.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(Ti.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return Ti.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(Ti.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return Ti.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_ControllerBatteryState_Notification";
        }
      }
      var Ii;
      !(function (e) {
        (e.NotifyButtonStateChangedHandler = {
          name: "SteamInputManager.NotifyButtonStateChanged#1",
          request: Tr,
        }),
          (e.RegisterForNotifyButtonStateChanged = function (t, r) {
            return null == (r = r || Rr().GetDefaultHandlerRegistry())
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
            return null == (t = t || Rr().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamInputManager.NotifyButtonStateChanged#1",
                  Mr(Tr, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SendMsgNotifyButtonStateChanged = function (e, t) {
            return null == (t = t || Rr().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamInputManager.NotifyButtonStateChanged#1",
                  Mr(Tr, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.NotifyAxesStateChangedHandler = {
            name: "SteamInputManager.NotifyAxesStateChanged#1",
            request: Er,
          }),
          (e.RegisterForNotifyAxesStateChanged = function (t, r) {
            return null == (r = r || Rr().GetDefaultHandlerRegistry())
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
            return null == (t = t || Rr().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamInputManager.NotifyAxesStateChanged#1",
                  Mr(Er, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SendMsgNotifyAxesStateChanged = function (e, t) {
            return null == (t = t || Rr().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamInputManager.NotifyAxesStateChanged#1",
                  Mr(Er, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.NotifyGyroQuaternionStateChangedHandler = {
            name: "SteamInputManager.NotifyGyroQuaternionStateChanged#1",
            request: Or,
          }),
          (e.RegisterForNotifyGyroQuaternionStateChanged = function (t, r) {
            return null == (r = r || Rr().GetDefaultHandlerRegistry())
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
            return null == (t = t || Rr().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamInputManager.NotifyGyroQuaternionStateChanged#1",
                  Mr(Or, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SendMsgNotifyGyroQuaternionStateChanged = function (e, t) {
            return null == (t = t || Rr().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamInputManager.NotifyGyroQuaternionStateChanged#1",
                  Mr(Or, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.NotifyGyroSpeedStateChangedHandler = {
            name: "SteamInputManager.NotifyGyroSpeedStateChanged#1",
            request: zr,
          }),
          (e.RegisterForNotifyGyroSpeedStateChanged = function (t, r) {
            return null == (r = r || Rr().GetDefaultHandlerRegistry())
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
            return null == (t = t || Rr().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamInputManager.NotifyGyroSpeedStateChanged#1",
                  Mr(zr, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SendMsgNotifyGyroSpeedStateChanged = function (e, t) {
            return null == (t = t || Rr().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamInputManager.NotifyGyroSpeedStateChanged#1",
                  Mr(zr, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.NotifyGyroAccelerometerStateChangedHandler = {
            name: "SteamInputManager.NotifyGyroAccelerometerStateChanged#1",
            request: Dr,
          }),
          (e.RegisterForNotifyGyroAccelerometerStateChanged = function (t, r) {
            return null == (r = r || Rr().GetDefaultHandlerRegistry())
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
            return null == (t = t || Rr().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamInputManager.NotifyGyroAccelerometerStateChanged#1",
                  Mr(Dr, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SendMsgNotifyGyroAccelerometerStateChanged = function (e, t) {
            return null == (t = t || Rr().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamInputManager.NotifyGyroAccelerometerStateChanged#1",
                  Mr(Dr, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.NotifyGyroCalibrationStateChangedHandler = {
            name: "SteamInputManager.NotifyGyroCalibrationStateChanged#1",
            request: Pr,
          }),
          (e.RegisterForNotifyGyroCalibrationStateChanged = function (t, r) {
            return null == (r = r || Rr().GetDefaultHandlerRegistry())
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
            return null == (t = t || Rr().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamInputManager.NotifyGyroCalibrationStateChanged#1",
                  Mr(Pr, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SendMsgNotifyGyroCalibrationStateChanged = function (e, t) {
            return null == (t = t || Rr().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamInputManager.NotifyGyroCalibrationStateChanged#1",
                  Mr(Pr, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.NotifyControllerPowerMenuHandler = {
            name: "SteamInputManager.NotifyControllerPowerMenu#1",
            request: si,
          }),
          (e.RegisterForNotifyControllerPowerMenu = function (t, r) {
            return null == (r = r || Rr().GetDefaultHandlerRegistry())
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
            return null == (t = t || Rr().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamInputManager.NotifyControllerPowerMenu#1",
                  Mr(si, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SendMsgNotifyControllerPowerMenu = function (e, t) {
            return null == (t = t || Rr().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamInputManager.NotifyControllerPowerMenu#1",
                  Mr(si, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.NotifyUnpairedTritonPluggedInHandler = {
            name: "SteamInputManager.NotifyUnpairedTritonPluggedIn#1",
            request: Hr,
          }),
          (e.RegisterForNotifyUnpairedTritonPluggedIn = function (t, r) {
            return null == (r = r || Rr().GetDefaultHandlerRegistry())
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
            return null == (t = t || Rr().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamInputManager.NotifyUnpairedTritonPluggedIn#1",
                  Mr(Hr, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SendMsgNotifyUnpairedTritonPluggedIn = function (e, t) {
            return null == (t = t || Rr().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamInputManager.NotifyUnpairedTritonPluggedIn#1",
                  Mr(Hr, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.NotifyUnpairedTritonDockedHandler = {
            name: "SteamInputManager.NotifyUnpairedTritonDocked#1",
            request: Vr,
          }),
          (e.RegisterForNotifyUnpairedTritonDocked = function (t, r) {
            return null == (r = r || Rr().GetDefaultHandlerRegistry())
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
            return null == (t = t || Rr().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamInputManager.NotifyUnpairedTritonDocked#1",
                  Mr(Vr, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SendMsgNotifyUnpairedTritonDocked = function (e, t) {
            return null == (t = t || Rr().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamInputManager.NotifyUnpairedTritonDocked#1",
                  Mr(Vr, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.NotifyTritonUndockedHandler = {
            name: "SteamInputManager.NotifyTritonUndocked#1",
            request: qr,
          }),
          (e.RegisterForNotifyTritonUndocked = function (t, r) {
            return null == (r = r || Rr().GetDefaultHandlerRegistry())
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
            return null == (t = t || Rr().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamInputManager.NotifyTritonUndocked#1",
                  Mr(qr, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SendMsgNotifyTritonUndocked = function (e, t) {
            return null == (t = t || Rr().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamInputManager.NotifyTritonUndocked#1",
                  Mr(qr, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.NotifySteamDonglesChangedHandler = {
            name: "SteamInputManager.NotifySteamDonglesChanged#1",
            request: jr,
          }),
          (e.RegisterForNotifySteamDonglesChanged = function (t, r) {
            return null == (r = r || Rr().GetDefaultHandlerRegistry())
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
            return null == (t = t || Rr().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamInputManager.NotifySteamDonglesChanged#1",
                  Mr(jr, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SendMsgNotifySteamDonglesChanged = function (e, t) {
            return null == (t = t || Rr().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamInputManager.NotifySteamDonglesChanged#1",
                  Mr(jr, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.NotifyControllerDisconnectedHandler = {
            name: "SteamInputManager.NotifyControllerDisconnected#1",
            request: ai,
          }),
          (e.RegisterForNotifyControllerDisconnected = function (t, r) {
            return null == (r = r || Rr().GetDefaultHandlerRegistry())
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
            return null == (t = t || Rr().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamInputManager.NotifyControllerDisconnected#1",
                  Mr(ai, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SendMsgNotifyControllerDisconnected = function (e, t) {
            return null == (t = t || Rr().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamInputManager.NotifyControllerDisconnected#1",
                  Mr(ai, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.NotifyControllerPairingChangedHandler = {
            name: "SteamInputManager.NotifyControllerPairingChanged#1",
            request: Kr,
          }),
          (e.RegisterForNotifyControllerPairingChanged = function (t, r) {
            return null == (r = r || Rr().GetDefaultHandlerRegistry())
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
            return null == (t = t || Rr().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamInputManager.NotifyControllerPairingChanged#1",
                  Mr(Kr, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SendMsgNotifyControllerPairingChanged = function (e, t) {
            return null == (t = t || Rr().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamInputManager.NotifyControllerPairingChanged#1",
                  Mr(Kr, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.NotifyControllerListChangedHandler = {
            name: "SteamInputManager.NotifyControllerListChanged#1",
            request: Bi,
          }),
          (e.RegisterForNotifyControllerListChanged = function (t, r) {
            return null == (r = r || Rr().GetDefaultHandlerRegistry())
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
            return null == (t = t || Rr().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamInputManager.NotifyControllerListChanged#1",
                  Mr(Bi, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SendMsgNotifyControllerListChanged = function (e, t) {
            return null == (t = t || Rr().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamInputManager.NotifyControllerListChanged#1",
                  Mr(Bi, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.NotifyControllerBatteryStateHandler = {
            name: "SteamInputManager.NotifyControllerBatteryState#1",
            request: Ti,
          }),
          (e.RegisterForNotifyControllerBatteryState = function (t, r) {
            return null == (r = r || Rr().GetDefaultHandlerRegistry())
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
            return null == (t = t || Rr().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamInputManager.NotifyControllerBatteryState#1",
                  Mr(Ti, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SendMsgNotifyControllerBatteryState = function (e, t) {
            return null == (t = t || Rr().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamInputManager.NotifyControllerBatteryState#1",
                  Mr(Ti, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.NotifyFirstSteamControllerConnectionHandler = {
            name: "SteamInputManager.NotifyFirstSteamControllerConnection#1",
            request: Si,
          }),
          (e.RegisterForNotifyFirstSteamControllerConnection = function (t, r) {
            return null == (r = r || Rr().GetDefaultHandlerRegistry())
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
            return null == (t = t || Rr().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamInputManager.NotifyFirstSteamControllerConnection#1",
                  Mr(Si, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SendMsgNotifyFirstSteamControllerConnection = function (e, t) {
            return null == (t = t || Rr().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamInputManager.NotifyFirstSteamControllerConnection#1",
                  Mr(Si, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.NotifyTritonQosHandler = {
            name: "SteamInputManager.NotifyTritonQos#1",
            request: Mi,
          }),
          (e.RegisterForNotifyTritonQos = function (t, r) {
            return null == (r = r || Rr().GetDefaultHandlerRegistry())
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
            return null == (t = t || Rr().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamInputManager.NotifyTritonQos#1",
                  Mr(Mi, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SendMsgNotifyTritonQos = function (e, t) {
            return null == (t = t || Rr().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamInputManager.NotifyTritonQos#1",
                  Mr(Mi, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.StartControllerStateFlowHandler = {
            name: "SteamInputManager.StartControllerStateFlow#1",
            request: Wr,
            response: Gr,
          }),
          (e.StartControllerStateFlow = function (e, t) {
            return null == (t = t || Rr().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg(
                  "SteamInputManager.StartControllerStateFlow#1",
                  Mr(Wr, e),
                  Gr,
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SendMsgStartControllerStateFlow = function (e, t) {
            return null == (t = t || Rr().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg(
                  "SteamInputManager.StartControllerStateFlow#1",
                  Mr(Wr, e),
                  Gr,
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.EndControllerStateFlowHandler = {
            name: "SteamInputManager.EndControllerStateFlow#1",
            request: Wr,
            response: Gr,
          }),
          (e.EndControllerStateFlow = function (e, t) {
            return null == (t = t || Rr().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg(
                  "SteamInputManager.EndControllerStateFlow#1",
                  Mr(Wr, e),
                  Gr,
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SendMsgEndControllerStateFlow = function (e, t) {
            return null == (t = t || Rr().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg(
                  "SteamInputManager.EndControllerStateFlow#1",
                  Mr(Wr, e),
                  Gr,
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.GetControllerAccessibilityStringsHandler = {
            name: "SteamInputManager.GetControllerAccessibilityStrings#1",
            request: ii,
            response: ni,
          }),
          (e.GetControllerAccessibilityStrings = function (e, t) {
            return null == (t = t || Rr().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg(
                  "SteamInputManager.GetControllerAccessibilityStrings#1",
                  Mr(ii, e),
                  ni,
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SendMsgGetControllerAccessibilityStrings = function (e, t) {
            return null == (t = t || Rr().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg(
                  "SteamInputManager.GetControllerAccessibilityStrings#1",
                  Mr(ii, e),
                  ni,
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.StartGyroSoftwareCalibrationHandler = {
            name: "SteamInputManager.StartGyroSoftwareCalibration#1",
            request: Ur,
            response: xr,
          }),
          (e.StartGyroSoftwareCalibration = function (e, t) {
            return null == (t = t || Rr().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg(
                  "SteamInputManager.StartGyroSoftwareCalibration#1",
                  Mr(Ur, e),
                  xr,
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SendMsgStartGyroSoftwareCalibration = function (e, t) {
            return null == (t = t || Rr().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg(
                  "SteamInputManager.StartGyroSoftwareCalibration#1",
                  Mr(Ur, e),
                  xr,
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.CancelGyroSoftwareCalibrationHandler = {
            name: "SteamInputManager.CancelGyroSoftwareCalibration#1",
            request: Ur,
            response: xr,
          }),
          (e.CancelGyroSoftwareCalibration = function (e, t) {
            return null == (t = t || Rr().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg(
                  "SteamInputManager.CancelGyroSoftwareCalibration#1",
                  Mr(Ur, e),
                  xr,
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SendMsgCancelGyroSoftwareCalibration = function (e, t) {
            return null == (t = t || Rr().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg(
                  "SteamInputManager.CancelGyroSoftwareCalibration#1",
                  Mr(Ur, e),
                  xr,
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.PairDongleTritonConnectedHandler = {
            name: "SteamInputManager.PairDongleTritonConnected#1",
            request: Lr,
            response: kr,
          }),
          (e.PairDongleTritonConnected = function (e, t) {
            return null == (t = t || Rr().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg(
                  "SteamInputManager.PairDongleTritonConnected#1",
                  Mr(Lr, e),
                  kr,
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SendMsgPairDongleTritonConnected = function (e, t) {
            return null == (t = t || Rr().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg(
                  "SteamInputManager.PairDongleTritonConnected#1",
                  Mr(Lr, e),
                  kr,
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.GetDonglesHandler = {
            name: "SteamInputManager.GetDongles#1",
            request: $r,
            response: Qr,
          }),
          (e.GetDongles = function (e, t) {
            return null == (t = t || Rr().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg("SteamInputManager.GetDongles#1", Mr($r, e), Qr, {
                  ePrivilege: 1,
                  eClientExecutionSite: 2,
                });
          }),
          (e.SendMsgGetDongles = function (e, t) {
            return null == (t = t || Rr().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg("SteamInputManager.GetDongles#1", Mr($r, e), Qr, {
                  ePrivilege: 1,
                  eClientExecutionSite: 2,
                });
          }),
          (e.ShouldTritonPairInOobeHandler = {
            name: "SteamInputManager.ShouldTritonPairInOobe#1",
            request: Xr,
            response: ei,
          }),
          (e.ShouldTritonPairInOobe = function (e, t) {
            return null == (t = t || Rr().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg(
                  "SteamInputManager.ShouldTritonPairInOobe#1",
                  Mr(Xr, e),
                  ei,
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SendMsgShouldTritonPairInOobe = function (e, t) {
            return null == (t = t || Rr().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg(
                  "SteamInputManager.ShouldTritonPairInOobe#1",
                  Mr(Xr, e),
                  ei,
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.WaitInitialControllerStateEnumeratedHandler = {
            name: "SteamInputManager.WaitInitialControllerStateEnumerated#1",
            request: Jr,
            response: Zr,
          }),
          (e.WaitInitialControllerStateEnumerated = function (e, t) {
            return null == (t = t || Rr().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg(
                  "SteamInputManager.WaitInitialControllerStateEnumerated#1",
                  Mr(Jr, e),
                  Zr,
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SendMsgWaitInitialControllerStateEnumerated = function (e, t) {
            return null == (t = t || Rr().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg(
                  "SteamInputManager.WaitInitialControllerStateEnumerated#1",
                  Mr(Jr, e),
                  Zr,
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.GetTritonPairingInfoHandler = {
            name: "SteamInputManager.GetTritonPairingInfo#1",
            request: oi,
            response: li,
          }),
          (e.GetTritonPairingInfo = function (e, t) {
            return null == (t = t || Rr().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg(
                  "SteamInputManager.GetTritonPairingInfo#1",
                  Mr(oi, e),
                  li,
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SendMsgGetTritonPairingInfo = function (e, t) {
            return null == (t = t || Rr().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg(
                  "SteamInputManager.GetTritonPairingInfo#1",
                  Mr(oi, e),
                  li,
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.ForgetTritonPairingBondHandler = {
            name: "SteamInputManager.ForgetTritonPairingBond#1",
            request: ui,
            response: di,
          }),
          (e.ForgetTritonPairingBond = function (e, t) {
            return null == (t = t || Rr().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg(
                  "SteamInputManager.ForgetTritonPairingBond#1",
                  Mr(ui, e),
                  di,
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SendMsgForgetTritonPairingBond = function (e, t) {
            return null == (t = t || Rr().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg(
                  "SteamInputManager.ForgetTritonPairingBond#1",
                  Mr(ui, e),
                  di,
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.ForgetDonglePairingBondHandler = {
            name: "SteamInputManager.ForgetDonglePairingBond#1",
            request: mi,
            response: gi,
          }),
          (e.ForgetDonglePairingBond = function (e, t) {
            return null == (t = t || Rr().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg(
                  "SteamInputManager.ForgetDonglePairingBond#1",
                  Mr(mi, e),
                  gi,
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SendMsgForgetDonglePairingBond = function (e, t) {
            return null == (t = t || Rr().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg(
                  "SteamInputManager.ForgetDonglePairingBond#1",
                  Mr(mi, e),
                  gi,
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.GetControllerNameHandler = {
            name: "SteamInputManager.GetControllerName#1",
            request: _i,
            response: hi,
          }),
          (e.GetControllerName = function (e, t) {
            return null == (t = t || Rr().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg(
                  "SteamInputManager.GetControllerName#1",
                  Mr(_i, e),
                  hi,
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SendMsgGetControllerName = function (e, t) {
            return null == (t = t || Rr().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg(
                  "SteamInputManager.GetControllerName#1",
                  Mr(_i, e),
                  hi,
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.GetControllerListHandler = {
            name: "SteamInputManager.GetControllerList#1",
            request: wi,
            response: yi,
          }),
          (e.GetControllerList = function (e, t) {
            return null == (t = t || Rr().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg(
                  "SteamInputManager.GetControllerList#1",
                  Mr(wi, e),
                  yi,
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SendMsgGetControllerList = function (e, t) {
            return null == (t = t || Rr().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg(
                  "SteamInputManager.GetControllerList#1",
                  Mr(wi, e),
                  yi,
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.EnableDockedInputHandler = {
            name: "SteamInputManager.EnableDockedInput#1",
            request: bi,
            response: fi,
          }),
          (e.EnableDockedInput = function (e, t) {
            return null == (t = t || Rr().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg(
                  "SteamInputManager.EnableDockedInput#1",
                  Mr(bi, e),
                  fi,
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SendMsgEnableDockedInput = function (e, t) {
            return null == (t = t || Rr().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg(
                  "SteamInputManager.EnableDockedInput#1",
                  Mr(bi, e),
                  fi,
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.EnableQosStatusHandler = {
            name: "SteamInputManager.EnableQosStatus#1",
            request: Ci,
            response: Ri,
          }),
          (e.EnableQosStatus = function (e, t) {
            return null == (t = t || Rr().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg(
                  "SteamInputManager.EnableQosStatus#1",
                  Mr(Ci, e),
                  Ri,
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SendMsgEnableQosStatus = function (e, t) {
            return null == (t = t || Rr().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg(
                  "SteamInputManager.EnableQosStatus#1",
                  Mr(Ci, e),
                  Ri,
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          });
      })(Ii || (Ii = {}));
      var Fi;
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
      })(Fi || (Fi = {}));
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
      var Ai;
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
      })(Ai || (Ai = {}));
      const Ni = new P("FocusNavigation").Debug,
        Ei = new P("FocusNavigation").Assert,
        Oi = "focus-nav-show-debug-focus-ring";
      function zi(e, t) {
        return (
          e?.eActivationSourceType === t?.eActivationSourceType &&
          e?.nActiveGamepadIndex === t?.nActiveGamepadIndex &&
          e?.nLastActiveGamepadIndex === t?.nLastActiveGamepadIndex
        );
      }
      class Di {
        m_rgGamepadInputSources = [];
        m_DefaultContext;
        m_rgAllContexts = [];
        m_ActiveContext;
        m_LastActiveContext;
        m_ContextSetChangedCallbacks = new I.l();
        m_rgCatchAllGamepadInput = [];
        m_UnhandledButtonEventsCallbacks = new I.l();
        m_navigationSource = E(
          {
            eActivationSourceType: a.Vz.UNKNOWN,
            nActiveGamepadIndex: -1,
            nLastActiveGamepadIndex: -1,
          },
          zi,
        );
        m_navigationSourceSupportsFocus = (function (e, t, r) {
          return new O(e, t, r);
        })(this.m_navigationSource, (e) => (0, a.UE)(e?.eActivationSourceType));
        m_bShowDebugFocusRing = E(!1);
        m_glyphInfo = E({ nControllerType: 4, nControllerStyle: 100 });
        m_bRestoringHistory = !1;
        m_fnGamepadEventUpdateBatcher = (e) => e();
        constructor() {
          window.FocusNavController = this;
        }
        Init() {
          this.m_bShowDebugFocusRing.Set("shown" == sessionStorage.getItem(Oi));
        }
        CreateContext(e, t, r) {
          const i = new tt(this, e, t, r);
          return (
            this.m_rgAllContexts.push(i),
            setTimeout(() => this.m_ContextSetChangedCallbacks.Dispatch(), 0),
            i
          );
        }
        DestroyContext(e) {
          T.x9(this.m_rgAllContexts, e),
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
                Ni(
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
              (Ni(
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
                ? sessionStorage.setItem(Oi, "shown")
                : sessionStorage.removeItem(Oi);
            })(e);
        }
        GetShowDebugFocusRing() {
          return this.m_bShowDebugFocusRing;
        }
        RegisterInputSource(e) {
          let t = new D();
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
          t && (i = this.GetActiveContext() ?? this.FindAnActiveContext()),
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
          !n && r && (n = this.FindAnActiveContext());
          let s = n?.ActiveWindow?.document.activeElement;
          if (n?.m_LastActiveNavTree) {
            if (
              (t || (t = this.m_navigationSource?.Value?.eActivationSourceType),
              !n.m_LastActiveNavTree.GetLastFocusedNode() &&
                (0, a.UE)(t) &&
                (Ni(
                  `GetEventTarget: Context ${n.LogName()} tree ${n.m_LastActiveNavTree.id} has no focused node, ${r ? "finding one" : "will not find one"}`,
                ),
                r && n.m_LastActiveNavTree.TakeFocus(i.GAMEPAD, !0),
                !this.BGlobalGamepadButton(e)))
            )
              return [void 0, n];
            n.m_LastActiveNavTree.GetLastFocusedNode()
              ? (s = n.m_LastActiveNavTree?.GetLastFocusedNode()?.Element)
              : Ni(
                  `GetEventTarget: Context ${n.LogName()} tree ${n.m_LastActiveNavTree.id} still has no focused node - will fall back to document.activeElement`,
                );
          }
          return [s, n];
        }
        ChangeNavigationSource(e, t, r, i) {
          let n = this.m_navigationSource.Value,
            s = n.nLastActiveGamepadIndex;
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
                Ni(
                  "Ignoring button press - gamepad input is suppressed by parent window",
                )
              );
          Ei(
            !!s == !!o,
            "Must set both overrideContext and overrideElement or neither",
          );
          let d = s,
            m = o;
          (null != d && null != m) || ([d, m] = this.GetEventTarget(t, r, e)),
            !m?.BIsGamepadInputSuppressed() || l
              ? (this.ChangeNavigationSource(r, i, c, u),
                e &&
                  Ni(
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
              : Ni(
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
          return new Xe(this, e, t, r, i);
        }
        RegisterGamepadNavigationTree(e, t) {
          Ni("Registering focusnav tree ", e.id);
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
            Ni(`(${n.LogName(e.Window)}) Focus event in inactive window`),
            e != n.m_LastActiveFocusNavTree &&
              e != n.m_LastActiveNavTree &&
              (n.m_LastActiveFocusNavTree?.GetParentEmbeddedNavTree() == e ||
              e.GetParentEmbeddedNavTree() == n.m_LastActiveFocusNavTree
                ? t == i.AUTOFOCUS &&
                  n.m_LastActiveNavTree?.GetLastFocusedNode()
                  ? Ni(
                      `There was an autofocus event in ${e.id}, but the active nav tree is ${n.m_LastActiveFocusNavTree?.id} and we already have something focused.  Source: ${t && i[t]}.`,
                    )
                  : (Ni(
                      `There was a focus event in ${e.id}, allowing focus transfer to activate nav tree due to parent embedded relationship`,
                    ),
                    e.Activate())
                : Ni(
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
      function Pi(e) {
        if (!e) return ze.NONE;
        switch (e) {
          case "column":
            return ze.COLUMN;
          case "column-reverse":
            return ze.COLUMN_REVERSE;
          case "row":
            return ze.ROW;
          case "row-reverse":
            return ze.ROW_REVERSE;
          case "grid":
            return ze.GRID;
          case "geometric":
            return ze.GEOMETRIC;
          default:
            return (
              (function (e, t, ...r) {
                U(!1, t, ...r);
              })(0, `Unhandled flow-children: ${e}`),
              ze.NONE
            );
        }
      }
      (0, b.Cg)([f.o], Di.prototype, "OnButtonDown", null),
        (0, b.Cg)([f.o], Di.prototype, "OnButtonUp", null),
        (0, b.Cg)([f.o], Di.prototype, "OnNavigationTypeChange", null);
      const Wi = "VirtualKeyboardMessage";
      function Gi(e) {
        return e && e.type === Wi;
      }
      class Ui {
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
          e == Wi && this.InternalDispatchMessage(JSON.parse(t));
        }
        OnMessage(e) {
          this.InternalDispatchMessage(e.data);
        }
        InternalDispatchMessage(e) {
          Gi(e) && e.message;
        }
        SendMessage(e) {
          const t = { type: "VirtualKeyboardMessage", ...e };
          (0, B.Dp)("BrowserView.PostMessageToParent")
            ? SteamClient.BrowserView.PostMessageToParent(
                t.type,
                JSON.stringify(t),
              )
            : this.m_ownerWindow &&
              (U(
                this.m_ownerWindow.parent &&
                  this.m_ownerWindow.parent != this.m_ownerWindow,
                "CVirtualKeyboardClient: No parent client window available, cannot display virtual keyboard",
              ),
              this.m_ownerWindow.parent.postMessage(t, "*"));
        }
      }
      (0, b.Cg)([f.o], Ui.prototype, "ShowVirtualKeyboard", null),
        (0, b.Cg)([f.o], Ui.prototype, "ShowModalKeyboard", null),
        (0, b.Cg)([f.o], Ui.prototype, "HideVirtualKeyboard", null),
        (0, b.Cg)([f.o], Ui.prototype, "OnBrowserViewMessage", null),
        (0, b.Cg)([f.o], Ui.prototype, "OnMessage", null);
      (0, b.Cg)(
        [f.o],
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
            if (e == Wi) {
              const e = JSON.parse(t);
              if (Gi(e))
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
      var xi = r(402),
        Li = r.n(xi);
      function ki(e) {
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
                  class: Li().FocusRing,
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
      function ji(e) {
        return !!e.is_repeat;
      }
      Object.seal({ onMoveUp: Hi, onMoveDown: Hi }),
        Object.seal({ onMoveRight: Hi, onMoveLeft: Hi });
      function Hi(e, t) {
        if (e.is_repeat) return !1;
        const r = t.GetRelativeDirection(e.button);
        return r == We.FORWARD
          ? t.BFocusFirstChild(i.GAMEPAD)
          : r == We.BACKWARD && t.BFocusLastChild(i.GAMEPAD);
      }
      function Vi(e) {
        if (e) {
          const t = Function("event", e);
          return (e) => t.apply(e.currentTarget, [e]);
        }
        return null;
      }
      function qi() {
        return !0;
      }
      function Ki(e) {
        return "BlockMovement" == e
          ? qi
          : "RepeatNavigationBoundary" == e
            ? ji
            : e
              ? Function("detail", e)
              : null;
      }
      function $i(e) {
        this.click(), e.stopPropagation();
      }
      function Qi(e) {
        s()(this).find('a, input[type="checkbox"]')[0].click();
      }
      function Yi(e, t) {
        t ? s()(e).addClass("gpfocus") : s()(e).removeClass("gpfocus");
      }
      function Xi(e) {
        const t = e.currentTarget;
        if (e.defaultPrevented || !S(t)) return !1;
        const r = e.detail.is_repeat ? 4.5 : 3.33,
          i = "smooth",
          n = t.ownerDocument,
          s = n.defaultView;
        switch (e.detail.button) {
          case a.pR.DIR_UP:
            if (s.scrollY > 3)
              return Te(s, { top: -s.innerHeight / r, behavior: i }), !0;
            break;
          case a.pR.DIR_RIGHT:
            if (s.scrollX + s.innerWidth < n.documentElement.scrollWidth - 3)
              return Te(s, { left: s.innerWidth / r, behavior: i }), !0;
            break;
          case a.pR.DIR_DOWN:
            if (s.scrollY + s.innerHeight < n.documentElement.scrollHeight - 3)
              return Te(s, { top: s.innerHeight / r, behavior: i }), !0;
            break;
          case a.pR.DIR_LEFT:
            if (s.scrollX > 3)
              return Te(s, { left: (s.innerWidth / r) * -1, behavior: i }), !0;
        }
        return !1;
      }
      const Ji = new P("FocusNavigation").Debug;
      var Zi;
      !(function (e) {
        (e[(e.Unknown = 0)] = "Unknown"),
          (e[(e.NotNeeded = 1)] = "NotNeeded"),
          (e[(e.InReactTree = 2)] = "InReactTree");
      })(Zi || (Zi = {}));
      const en = new Ui();
      let tn,
        rn = !1,
        nn = null;
      function sn(e) {
        rn ||
          ((nn = new Di()),
          (tn = new y(nn)),
          tn.RegisterForFocusChanged(nn.GetDefaultContext()),
          en.Init(window),
          tn.BIsGamepadInputExternallyControlled() || nn.RegisterInputSource(e),
          (tn.BIsGamepadInputExternallyControlled() ||
            navigator.userAgent.includes("Valve Steam Gamepad")) &&
            nn.RegisterInputSource(new C(window)),
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
            const n = ki(t),
              a = 0 != t.data("react-nav-scrollregiontostartorend");
            (i.Root.m_FocusRing = n),
              i.Root.SetProperties({
                scrollIntoViewType: Pe.NoTransformSparseContent,
                scrollRegionToStartOrEnd: a,
              }),
              i.SetIsEnabled(!0),
              i.OnActiveStateChangedCallbacks.Register((e) => {
                const t = i.GetLastFocusedNode();
                t?.Element && Yi(t.Element, e);
              }),
              Object.assign(window, {
                legacyWebFocusNavController: nn,
                __nav_tree_root: i,
                __virtual_keyboard_client: en,
              }),
              on.set(document.body, i.Root),
              un(document.body, i.Root),
              hn(void 0, !0),
              e.RegisterGamepadNavigationTree(i, window),
              r.OnMount(window),
              window.document.hasFocus() && r.OnActivate(window);
            s()(document.body).on("vgp_onbuttondown", function (e) {
              i.OnRootButtonDown(e.originalEvent);
            }),
              m(document.body, Xi);
            new MutationObserver(an).observe(document.body, {
              childList: !0,
              subtree: !0,
            }),
              (function (e) {
                he = e;
              })(!0),
              (function () {
                Object.assign(window, yn),
                  window.dispatchEvent(new CustomEvent("vgp_gamepadnavready"));
              })(),
              !1;
          })(nn)),
          (rn = !0);
      }
      function an(e) {
        for (const t of e) {
          const e = [],
            r = [];
          v(
            t,
            (t) => e.push(t),
            (e) => r.push(e),
          ),
            e.length && hn(s()(e)),
            r.length && _n(s()(r));
        }
      }
      const on = new WeakMap(),
        ln = new WeakMap();
      let cn = [];
      function un(e, t) {
        if (t instanceof Ge) {
          const r = t.GetDepth();
          cn[r] || (cn[r] = []), cn[r].push([e, t]);
        }
        on.set(e, t);
      }
      function dn(e, t) {
        const r = ln.has(e) ? ln.get(e) : [];
        r.push(t), ln.set(e, r);
      }
      function mn(e) {
        return "jquery" in e
          ? on.get(e[0]) || Zi.Unknown
          : on.get(e) || Zi.Unknown;
      }
      function gn(e) {
        return "jquery" in e ? on.has(e[0]) : on.has(e);
      }
      function _n(e) {
        e.find("*")
          .addBack()
          .each(function () {
            ln.get(this)?.forEach((e) => e()),
              on.delete(this),
              ln.delete(this),
              s()(this).attr("data-nav-modal") && wn(this);
          });
      }
      function hn(e, t = !1) {
        performance.now();
        const r =
          "a,button,textarea,input:not(input[type=hidden]),label:not([for]),[data-panel],[data-react-nav-root],[data-nav-modal]";
        s()(r, e)
          .addBack(r)
          .each(function () {
            var e;
            gn((e = this)) || pn(e);
          }),
          (function () {
            for (let e = cn.length - 1; e >= 0; e--)
              if (cn[e])
                for (let [t, r] of cn[e]) {
                  dn(t, r.Tree.RegisterNavigationItem(r, t));
                  const e = s()(t).data("navTreeModal");
                  e &&
                    (s()(t).data(
                      "unregisterNavTree",
                      nn.RegisterGamepadNavigationTree(e, window),
                    ),
                    e.Activate(!0));
                }
            cn = [];
          })();
      }
      function bn(e) {
        let t = Zi.NotNeeded;
        return (
          !(function (e) {
            if (s()(e).attr("data-nav-modal")) return !0;
            switch (e.tagName) {
              case "A":
              case "INPUT":
              case "TEXTAREA":
                return !0;
              case "DIV":
                if (ne(e) != ze.COLUMN) return !0;
                const t = ne(e.parentElement);
                return t == ze.ROW || t == ze.ROW_REVERSE;
              default:
                return !1;
            }
          })(e)
            ? un(e, t)
            : (t = pn(e)),
          t
        );
      }
      function fn(e) {
        const t = s()(e.Element);
        return (
          !t.data("gpFocusDisabled") &&
          !(!t.is(":visible") || "hidden" == t.css("visibility")) &&
          (0 != t.outerWidth() ||
            0 != t.outerHeight() ||
            "hidden" !== t.css("overflow"))
        );
      }
      function pn(e) {
        const t = s()(e),
          r = Bn(e);
        if (r instanceof Le || r == Zi.InReactTree)
          return un(e, Zi.InReactTree), Zi.InReactTree;
        const n = r.Tree;
        let a,
          o = t.data("panel") || {},
          l = fn;
        if (
          (t.attr("data-nav-modal")
            ? (a = (function (e, t) {
                const r = nn.NewGamepadNavigationTree(
                    nn.GetDefaultContext(),
                    "modal_dialog",
                    e,
                    { modal: !0 },
                  ),
                  i = ki(s()(t));
                return (
                  (r.Root.m_FocusRing = i),
                  r.Root.SetProperties({ focusableIfEmpty: !0 }),
                  s()(t).data("navTreeModal", r),
                  un(t, r.Root),
                  r.Root
                );
              })(n, e))
            : t.data("reactNavRoot")
              ? ((a = new Le(t.data("reactNavRoot"), r)), (l = void 0))
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
            Pe[o.scrollIntoViewType] ?? Pe.NoTransformSparseContent);
        const c = o["flow-children"];
        delete o["flow-children"];
        let {
            clickOnActivate: u,
            maintainX: g,
            maintainY: b,
            enableVirtualKeyboard: f,
            preferredChild: p,
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
            onGamepadDirection: z,
            bFocusRingRoot: D,
            type: P,
            ...W
          } = o,
          G = Vi(C),
          U = Vi(R),
          x = Vi(T),
          L = Vi(I),
          k = Vi(F),
          j = Vi(z);
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
            dn(
              t[0],
              (function (e, t) {
                return d(e, "vgp_onok", _(t));
              })(t[0], G),
            ),
          U &&
            dn(
              t[0],
              (function (e, t) {
                return d(e, "vgp_oncancel", _(t));
              })(t[0], U),
            ),
          x &&
            y &&
            dn(
              t[0],
              (function (e, t) {
                return d(e, "vgp_onsecondaryaction", _(t));
              })(t[0], x),
            ),
          L &&
            S &&
            dn(
              t[0],
              (function (e, t) {
                return d(e, "vgp_onoptions", _(t));
              })(t[0], L),
            ),
          k &&
            v &&
            dn(
              t[0],
              (function (e, t) {
                return d(e, "vgp_onmenu", _(t));
              })(t[0], k),
            ),
          j && dn(t[0], m(t[0], j));
        const H = (function (e, t, r, i) {
            const n = {};
            return (
              e && (n.onMoveUp = Ki(e)),
              t && (n.onMoveRight = Ki(t)),
              r && (n.onMoveDown = Ki(r)),
              i && (n.onMoveLeft = Ki(i)),
              n
            );
          })(A, N, E, O),
          V = c ? Pi(c) : ze.NONE;
        V != ze.NONE && (W.layout = V),
          g
            ? (W.navEntryPreferPosition = De.MAINTAIN_X)
            : b
              ? (W.navEntryPreferPosition = De.MAINTAIN_Y)
              : p && (W.navEntryPreferPosition = De.PREFERRED_CHILD),
          u &&
            (!1 !== W.focusable && (W.focusable = !0),
            t.on("vgp_onok", "firstChild" === u ? Qi : $i),
            t.attr("role") ||
              ("A" !== t.prop("tagName") && t.attr("role", "button")),
            dn(e, () => {
              t.off("vgp_onok");
            })),
          f &&
            (t.on("vgp_onok.vkbindings", () => en.ShowVirtualKeyboard()),
            t.on("click.vkbindings", () => en.ShowVirtualKeyboard()),
            t.on("blur.vkbindings", () => {
              document.hasFocus() &&
                document.activeElement != e &&
                en.HideVirtualKeyboard();
            }),
            dn(e, () => {
              t.off(".vkbindings");
            })),
          W.focusable && void 0 === t.attr("tabIndex") && t.attr("tabIndex", 0),
          W.focusable && a.SubscribableHasFocus.Subscribe((t) => Yi(e, t)),
          D &&
            ((a.m_FocusRing = ki(t)),
            "static" == t.css("position") && t.css("position", "relative"));
        const q = {
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
        return a.SetProperties(q), un(e, a), a;
      }
      function Bn(e) {
        const t = e.parentElement;
        if (!t) return console.error("no parent"), null;
        let r = mn(t);
        if (r == Zi.Unknown) r = bn(t);
        else if (r == Zi.InReactTree) return r;
        return r instanceof Ge ? r : Bn(t);
      }
      function wn(e) {
        const t = s()(e).data("unregisterNavTree");
        console.assert(t, "missing unregister binding"),
          t(),
          s()(e).removeAttr("data-nav-modal"),
          s()(e).removeData("unregisterNavTree"),
          s()(e).removeClass("navTreeModal");
      }
      const yn = {
        InstrumentFocusElements: hn,
        ForceUpdateFocusElements: function (e) {
          _n(s()(e)), hn(s()(e));
        },
        GPNavFocusChild: function (e) {
          let t = mn(e[0]);
          return (
            t instanceof Ge || (t = Bn(e[0])),
            t instanceof Ge && t.BTakeFocus(i.APPLICATION),
            !1
          );
        },
        GPOnShowingModalWindow: function (e) {
          Ji("Showing element as modal", e);
          const t = s()(e),
            r = gn(t);
          return (
            r &&
              (Ji(
                "Element already in DOM tree, forcibly re-instrumenting elements so they are parented to modal",
              ),
              _n(t)),
            t.attr("data-nav-modal", "true"),
            r && hn(t),
            () => wn(e)
          );
        },
        GPShowVirtualKeyboard: function (e = !0) {
          e ? en.ShowVirtualKeyboard() : en.HideVirtualKeyboard();
        },
        GPNavUpdateActionDescriptions: function (e, t) {
          const r = mn(e);
          r instanceof Ge &&
            r.SetProperties({ ...r.m_Properties, actionDescriptionMap: h(t) });
        },
      };
    },
    777: (e, t, r) => {
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
    821: (e, t, r) => {
      "use strict";
      r.d(t, { A7: () => a, Vp: () => o, n4: () => l });
      var i = r(629),
        n = r(606),
        s = r(777);
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

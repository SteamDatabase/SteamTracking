/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunklegacy_web = self.webpackChunklegacy_web || []).push([
  [616],
  {
    668: (e) => {
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
    621: (e, t, n) => {
      "use strict";
      n.d(t, { InitializeGamepadNavigation: () => gt });
      var i,
        o = n(669),
        s = n.n(o),
        r = n(382);
      !(function (e) {
        (e[(e.GAMEPAD = 0)] = "GAMEPAD"),
          (e[(e.KEYBOARD = 1)] = "KEYBOARD"),
          (e[(e.APPLICATION = 2)] = "APPLICATION"),
          (e[(e.BROWSER = 3)] = "BROWSER");
      })(i || (i = {}));
      let a = {
        [r.pR.OK]: "vgp_onok",
        [r.pR.CANCEL]: "vgp_oncancel",
        [r.pR.SECONDARY]: "vgp_onsecondaryaction",
        [r.pR.OPTIONS]: "vgp_onoptions",
        [r.pR.START]: "vgp_onmenu",
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
      function l(e, t) {
        return c(e, "vgp_ondirection", h(t));
      }
      function u(e, t, n) {
        let i = e;
        if (!i || !i.ownerDocument || !i.ownerDocument.defaultView) return !0;
        let o = new i.ownerDocument.defaultView.CustomEvent(t, {
          bubbles: !0,
          cancelable: !0,
          detail: n,
        });
        return i.dispatchEvent(o);
      }
      function h(e) {
        return (t) => {
          !1 !== e(t) && (t.stopPropagation(), t.preventDefault());
        };
      }
      function d(e) {
        const {
            onOKActionDescription: t,
            onCancelActionDescription: n,
            onSecondaryActionDescription: i,
            onOptionsActionDescription: o,
            onMenuActionDescription: s,
            actionDescriptionMap: a,
          } = e,
          c = { ...a };
        return (
          void 0 !== t && (c[r.pR.OK] = t),
          void 0 !== n && (c[r.pR.CANCEL] = n),
          void 0 !== i && (c[r.pR.SECONDARY] = i),
          void 0 !== o && (c[r.pR.OPTIONS] = o),
          void 0 !== s && (c[r.pR.START] = s),
          c
        );
      }
      var m = n(629),
        g = n(608),
        _ = n(335),
        p = n(358),
        v = n(973);
      class f {
        m_NavigationController;
        m_postMessage;
        m_bIsGamepadInputExternallyControlled = !1;
        constructor(e) {
          (this.m_NavigationController = e),
            (0, p.Dp)("BrowserView.RegisterForMessageFromParent") &&
            (0, p.Dp)("BrowserView.PostMessageToParent")
              ? ((this.m_bIsGamepadInputExternallyControlled = !0),
                (this.m_postMessage = new v.Vp()))
              : ((this.m_bIsGamepadInputExternallyControlled =
                  window.top != window.self),
                (this.m_postMessage = new v.n4(window.top))),
            this.m_postMessage.RegisterForMessage(this.OnMessage),
            window.addEventListener("unload", this.PostPageUnloading),
            this.m_NavigationController.RegisterForUnhandledButtonDownEvents(
              (e) => this.PostButtonPressToSteam(e.detail.button),
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
          let n = t?.Tree;
          return n || (n = e?.Tree), n && n.Controller.IsActiveFocusNavTree(n);
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
                e.data.details,
              );
          }
        }
        SendGameInputState(e) {
          let t = _.h.Basic;
          window.bSupportsGamepadUI && (t = _.h.Full),
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
      function C(e) {
        return null != e && void 0 !== e.focus;
      }
      function A(e) {
        let t;
        return e && (t = e.ownerDocument.defaultView), t;
      }
      (0, m.Cg)([g.o], f.prototype, "OnFocusChanged", null),
        (0, m.Cg)([g.o], f.prototype, "OnMessage", null),
        (0, m.Cg)([g.o], f.prototype, "PostPageUnloading", null);
      function b(e, t) {
        let n = e?.parentElement;
        for (; n; ) {
          if (C(n)) {
            if (!t || "x" == t) {
              const e = window.getComputedStyle(n);
              if (
                "scroll" == e.overflowX ||
                "auto" == e.overflowX ||
                "fixed" == e.position
              )
                break;
            }
            if (!t || "y" == t) {
              const e = window.getComputedStyle(n);
              if (
                "scroll" == e.overflowY ||
                "auto" == e.overflowY ||
                "fixed" == e.position
              )
                break;
            }
          }
          n = n.parentElement;
        }
        return C(n) ? n : null;
      }
      function R(e, t) {
        if (!("ownerDocument" in e)) return !0;
        const n = e.ownerDocument.defaultView.getComputedStyle(e),
          i = "x" === t ? n.overflowX : n.overflowY;
        return "auto" === i || "scroll" === i;
      }
      function w(e, t, n) {
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
            i.nodeType === Node.ELEMENT_NODE && n?.(i);
          }
        }
      }
      function S(e, t, n) {
        return null == e || isNaN(e) ? e : Math.max(t, Math.min(n, e));
      }
      function F() {
        return !!window.document;
      }
      let N;
      function I() {
        if (!F()) return N || (N = T()), N;
        let e = (function (e) {
          if (!F() || !window.document.cookie) return null;
          const t = document.cookie.match("(^|; )" + e + "=([^;]*)");
          return t && t[2] ? decodeURIComponent(t[2]) : null;
        })("sessionid");
        return e || (e = T()), e;
      }
      function T() {
        const e = (function () {
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
            if (!F()) return;
            i || (i = "/");
            let o = "";
            if (void 0 !== n && n) {
              const e = new Date();
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
      const D = {
        EUNIVERSE: 0,
        WEB_UNIVERSE: "",
        LANGUAGE: "english",
        SUPPORTED_LANGUAGES: [],
        COUNTRY: "",
        AVATAR_BASE_URL: "",
        MEDIA_CDN_COMMUNITY_URL: "",
        MEDIA_CDN_URL: "",
        CLAN_CDN_ASSET_URL: "",
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
          return I();
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
        SILENT_STARTUP: !1,
        CLIENT_SESSION: 0,
      };
      class E extends r.nh {
        m_lastButtonDown = r.pR.INVALID;
        constructor(e) {
          super(),
            this.SetSourceType(r.Vz.KEYBOARD),
            e.addEventListener("keydown", this.OnKeyDown),
            e.addEventListener("keyup", this.OnKeyUp),
            e.addEventListener("blur", this.Reset);
        }
        OnKeyDown(e) {
          const t = this.TranslateKey(e);
          t != r.pR.INVALID &&
            (e.preventDefault(),
            t != this.m_lastButtonDown &&
              (this.Reset(),
              this.OnButtonDown(t),
              (this.m_lastButtonDown = t)));
        }
        OnKeyUp(e) {
          const t = this.TranslateKey(e);
          t != r.pR.INVALID &&
            (this.OnButtonUp(t),
            (this.m_lastButtonDown = r.pR.INVALID),
            e.preventDefault());
        }
        Reset() {
          this.m_lastButtonDown != r.pR.INVALID &&
            (this.OnButtonUp(this.m_lastButtonDown),
            (this.m_lastButtonDown = r.pR.INVALID));
        }
        GetKeycodeFromEvent(e) {
          return "linux" === D.PLATFORM && e.key.length > 1
            ? e.key || e.code
            : e.code || e.key;
        }
        BShouldSwallowEventForTextInputWorkaround(e) {
          if (
            !(
              C(e.target) &&
              ("INPUT" === e.target.nodeName ||
                "TEXTAREA" === e.target.nodeName ||
                e.target.hasAttribute("contenteditable"))
            )
          )
            return !1;
          if (e.target.hasAttribute("contenteditable")) return !0;
          const t = this.GetKeycodeFromEvent(e);
          let n = e.target;
          const i = Array.from(
            n.ownerDocument.getElementsByClassName("gpfocus"),
          ).some((e) =>
            Array.from(e.classList).some((e) => e.includes("virtualkeyboard")),
          );
          switch (t) {
            case "ArrowUp": {
              if (i) return !0;
              let t = n?.value.indexOf("\n");
              return (
                "TEXTAREA" === e.target.nodeName &&
                t >= 0 &&
                t < (n?.selectionStart ?? 0)
              );
            }
            case "ArrowDown": {
              if (i) return !0;
              let t = n?.value.lastIndexOf("\n");
              return (
                "TEXTAREA" === e.target.nodeName &&
                t >= 0 &&
                t >= (n?.selectionStart ?? 0) &&
                (n?.selectionEnd ?? 0) < n?.value.length
              );
            }
            case "ArrowLeft":
              return (
                !!i ||
                ((n?.selectionStart ?? 0) > 0 && (n?.selectionEnd ?? 0) > 0)
              );
            case "ArrowRight":
              return (
                !!i ||
                ((n?.selectionStart ?? 0) < n?.value.length &&
                  (n?.selectionEnd ?? 0) < n?.value.length)
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
            return r.pR.INVALID;
          if (n && i)
            switch (t) {
              case "Digit4":
                return r.pR.TRIGGER_LEFT;
              case "Digit5":
                return r.pR.TRIGGER_RIGHT;
              default:
                return r.pR.INVALID;
            }
          if (n)
            switch (t) {
              case "Digit1":
                return r.pR.STEAM_GUIDE;
              case "Digit2":
                return r.pR.STEAM_QUICK_MENU;
              case "Digit3":
              case "Digit9":
                return r.pR.SELECT;
              case "Digit4":
                return r.pR.BUMPER_LEFT;
              case "Digit5":
                return r.pR.BUMPER_RIGHT;
              case "Digit6":
                return r.pR.LSTICK_CLICK;
              case "Digit7":
                return r.pR.RSTICK_CLICK;
              case "Digit8":
                return r.pR.OPTIONS;
              case "Digit0":
                return r.pR.START;
            }
          switch (t) {
            case "Escape":
              return r.pR.CANCEL;
            case "Enter":
              return r.pR.OK;
            case "Backspace":
              return r.pR.SECONDARY;
            case "ArrowUp":
              return r.pR.DIR_UP;
            case "ArrowDown":
              return r.pR.DIR_DOWN;
            case "ArrowLeft":
              return r.pR.DIR_LEFT;
            case "ArrowRight":
              return r.pR.DIR_RIGHT;
          }
          return r.pR.INVALID;
        }
      }
      (0, m.Cg)([g.o], E.prototype, "OnKeyDown", null),
        (0, m.Cg)([g.o], E.prototype, "OnKeyUp", null),
        (0, m.Cg)([g.o], E.prototype, "Reset", null);
      const L = { x: "y", y: "x" };
      function y(e, t, ...n) {
        try {
          console.assert
            ? 0 == n.length
              ? console.assert(!!e, t)
              : console.assert(!!e, t, ...n)
            : e || console.warn(t, ...n);
        } catch (e) {}
      }
      var O = n(261);
      class B {
        async GetObject(e) {
          try {
            const t = await this.GetString(e);
            return t ? JSON.parse(t) : null;
          } catch {
            return null;
          }
        }
        async StoreObject(e, t) {
          return this.StoreString(e, JSON.stringify(t));
        }
      }
      class M extends B {
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
      const P = [
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
        "VRDashboardPopupStore",
        "VRGamepadUIMessages",
        "VRPathProperties",
      ];
      var G;
      !(function (e) {
        (e[(e.Debug = 0)] = "Debug"),
          (e[(e.Info = 1)] = "Info"),
          (e[(e.Warning = 2)] = "Warning"),
          (e[(e.Error = 3)] = "Error");
      })(G || (G = {}));
      class x {
        m_sName;
        m_fnIdGenerator = void 0;
        constructor(e, t) {
          (this.m_sName = e),
            (this.m_fnIdGenerator = t),
            k.Get().RegisterLogName(e);
        }
        Debug(...e) {
          this.Log(G.Debug, ...e);
        }
        Info(...e) {
          this.Log(G.Info, ...e);
        }
        Warning(...e) {
          this.Log(G.Warning, ...e);
        }
        Error(...e) {
          this.Log(G.Error, ...e);
        }
        Assert(e, ...t) {
          e || this.Log(G.Error, "Assertion failed:", ...t);
        }
        IsDebugEnabled() {
          return k.Get().IsDebugLogEnabled(this.m_sName);
        }
        Log(e, ...t) {
          const n = k.Get().IsDebugLogEnabled(this.m_sName);
          if (e == G.Debug && !n) return;
          let i = this.m_sName;
          const o = this.m_fnIdGenerator?.() ?? null;
          null != o && (i += " (" + o + ")");
          U(e, n, k.Get().IncludeBacktraceInLog, i, this.m_sName, ...t);
        }
      }
      (0, m.Cg)([g.o], x.prototype, "Debug", null),
        (0, m.Cg)([g.o], x.prototype, "Info", null),
        (0, m.Cg)([g.o], x.prototype, "Warning", null),
        (0, m.Cg)([g.o], x.prototype, "Error", null),
        (0, m.Cg)([g.o], x.prototype, "Assert", null);
      class k {
        static k_EnabledLogNames_StorageKey = "EnabledWebLogs";
        static k_IncludeBacktraceInLog_StorageKey = "IncludeBacktraceInLog";
        static s_Singleton = null;
        m_Storage = null;
        m_rgLogNames;
        m_setEnabledDebugLogs = new Set();
        m_bIncludeBacktraceInLog = !1;
        m_SettingsChangedCallback = new O.lu();
        m_bLoading = !1;
        constructor() {
          (this.m_Storage = new M()),
            (this.m_rgLogNames = P.slice()),
            this.LoadSettings();
        }
        LogAsLogManager(...e) {
          U(
            G.Info,
            !0,
            this.IncludeBacktraceInLog,
            "LogManager",
            "LogManager",
            ...e,
          );
        }
        async LoadSettings() {
          (this.m_bLoading = !0),
            (this.m_bIncludeBacktraceInLog = !!(await this.m_Storage?.GetObject(
              k.k_IncludeBacktraceInLog_StorageKey,
            )));
          const e = await this.m_Storage?.GetObject(
            k.k_EnabledLogNames_StorageKey,
          );
          Array.isArray(e) &&
            ((this.m_setEnabledDebugLogs = new Set(e)),
            this.LogAsLogManager(
              "Loaded debug enabled log names. Will print log messages for:",
              Array.from(this.m_setEnabledDebugLogs),
            )),
            (this.m_bLoading = !1),
            this.m_SettingsChangedCallback.Dispatch();
        }
        async SaveSettings() {
          await this.m_Storage?.StoreObject(
            k.k_EnabledLogNames_StorageKey,
            Array.from(this.m_setEnabledDebugLogs),
          ),
            await this.m_Storage?.StoreObject(
              k.k_IncludeBacktraceInLog_StorageKey,
              this.m_bIncludeBacktraceInLog,
            ),
            this.LogAsLogManager(
              "Saved enabled debug log names. Will print log messages for:",
              Array.from(this.m_setEnabledDebugLogs),
            );
        }
        static Get() {
          return (
            null == k.s_Singleton && (k.s_Singleton = new k()), k.s_Singleton
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
        async ToggleDebugLogEnabled(e) {
          this.SetDebugLogEnabled(e, !this.IsDebugLogEnabled(e));
        }
        async SetDebugLogEnabled(e, t) {
          t
            ? this.m_setEnabledDebugLogs.add(e)
            : this.m_setEnabledDebugLogs.delete(e),
            this.m_SettingsChangedCallback.Dispatch(),
            await this.SaveSettings();
        }
        async SetAllDebugLogsEnabled(e) {
          (this.m_setEnabledDebugLogs = new Set(e ? P : [])),
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
      }
      function U(e, t, n, i, o, ...s) {
        const r = (function (e) {
            let t = 0;
            for (let n = 0; n < e.length; n++)
              t = e.charCodeAt(n) + ((t << 5) - t);
            return [(t >> 0) & 255, (t >> 8) & 255, (t >> 16) & 255];
          })(o).map((e, t) =>
            Math.round(
              Math.max(0, Math.min(255, 255 * (0.8 * (e / 255 - 0.5) + 0.15))),
            ),
          ),
          a = (299 * (c = r)[0] + 587 * c[1] + 114 * c[2]) / 1e3 >= 128;
        var c;
        let l = i;
        n &&
          (l =
            (function (e) {
              switch (e) {
                case G.Debug:
                  return String.fromCodePoint(128027);
                case G.Info:
                  return String.fromCodePoint(8505);
                case G.Warning:
                  return String.fromCodePoint(9888);
                case G.Error:
                  return String.fromCodePoint(128165);
              }
            })(e) +
            " " +
            l);
        const u =
            s.length >= 1 && "string" == typeof s[0] && s[0].includes("%c"),
          h = u && s.shift();
        let d;
        if (
          ((d = t
            ? [
                `%c${l}%c:${u ? " %c" + h : ""}`,
                `color: ${a ? "black" : "white"}; background: rgb(${r.join(",")}); padding: 0 1ch; border-radius: 3px;`,
                "color: transparent; margin-right: -1ch",
                ...(u ? [""] : []),
                ...s,
              ]
            : s),
          n)
        )
          console.groupCollapsed(...d),
            console.trace("Callstack"),
            console.groupEnd();
        else
          switch (e) {
            case G.Debug:
            case G.Info:
              console.log(...d);
              break;
            case G.Warning:
              console.warn(...d);
              break;
            case G.Error:
              console.clogerror
                ? console.clogerror(3, ...d)
                : console.error(...d);
          }
      }
      const W = () => k.Get().LogNames.slice().sort(),
        V = (e, t) => {
          k.Get().IsLogName(e)
            ? k.Get().SetDebugLogEnabled(e, t)
            : console.warn(`No log named "${e}", available logs:`, W());
        };
      (window.DebugLogEnable = (...e) => e.forEach((e) => V(e, !0))),
        (window.DebugLogDisable = (...e) => e.forEach((e) => V(e, !1))),
        (window.DebugLogEnableAll = () => k.Get().SetAllDebugLogsEnabled(!0)),
        (window.DebugLogDisableAll = () => k.Get().SetAllDebugLogsEnabled(!1)),
        (window.DebugLogEnableBacktrace = () =>
          k.Get().SetIncludeBacktraceInLog(!0)),
        (window.DebugLogDisableBacktrace = () =>
          k.Get().SetIncludeBacktraceInLog(!1)),
        (window.DebugLogNames = W),
        (window.EnableSteamConsole = (e = !0) =>
          k.Get().SetDebugLogEnabled("SteamClient", e));
      class H {
        m_root;
        constructor(e) {
          this.m_root = e;
        }
        static SerializeNavState(e, t = !0, n = !0) {
          return {
            root: H.SerializeNavNode(e, t, n),
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
              (i = o.map((e, t) => H.SerializeNavNode(e, t == s || n, n))),
            { sNavKey: e.NavKey, iActiveChild: s, rgChildren: i }
          );
        }
        static RestoreSerializedNavState(e, t, n = 0) {
          const { root: o, bHadFocus: s } = t;
          e.Tree.Controller.RestoreHistoryTransaction(() => {
            H.RestoreSerializedNavNode(e, o),
              (1 == n || (0 == n && s)) && e.BTakeFocus(i.APPLICATION);
          });
        }
        static RestoreSerializedNavNode(e, t) {
          const { sNavKey: n, iActiveChild: i, rgChildren: o } = t;
          if (
            (n && y(n == e.NavKey, "navkey mismatch"),
            e.SetActiveChild(i),
            o && o.length)
          ) {
            const [t] = e.GetChildren();
            let n = new Map();
            t.forEach((e) => {
              e.NavKey && n.set(e.NavKey, e);
            });
            for (const e of o) {
              if (!e.sNavKey) continue;
              const t = n.get(e.sNavKey);
              t && H.RestoreSerializedNavNode(t, e);
            }
            if (-1 != i && o[i]?.sNavKey) {
              const s = n.get(o[i].sNavKey);
              s && e.SetActiveChild(t.indexOf(s));
            }
            let s = 0,
              r = 0;
            for (; s < t.length && r < o.length; ) {
              for (; s < t.length && t[s].NavKey; ) s++;
              for (; r < o.length && o[r].sNavKey; ) r++;
              if (s >= t.length || r >= o.length) break;
              H.RestoreSerializedNavNode(t[s], o[r]), s++, r++;
            }
          }
        }
      }
      function K(e) {
        const { root: t, bHadFocus: n } = e;
        let i = "ROOT",
          o = t;
        for (; o; ) {
          const e =
            -1 != o.iActiveChild ? o.rgChildren?.[o.iActiveChild] : null;
          e && (i += `=> [${e.sNavKey ?? o.iActiveChild}]`), (o = e);
        }
        return n && (i += " (with focus)"), i;
      }
      function $(e) {
        return H.SerializeNavState(e, !0, !1);
      }
      function z(e, t, n = 0) {
        return H.RestoreSerializedNavState(e, t, n);
      }
      class Y extends H {
        m_rgHistory = [];
        PushState() {
          this.m_rgHistory.push(H.SerializeNavState(this.m_root));
        }
        PopState(e = 0) {
          this.m_rgHistory.length &&
            H.RestoreSerializedNavState(this.m_root, this.m_rgHistory.pop(), e);
        }
      }
      class X extends H {
        m_mapHistory = new Map();
        SaveState(e) {
          this.m_mapHistory.set(e, H.SerializeNavState(this.m_root));
        }
        RestoreState(e, t = 0) {
          const n = this.m_mapHistory.get(e);
          return (
            !!n &&
            (console.log(`Restoring history for state ${e}`),
            H.RestoreSerializedNavState(this.m_root, n, t),
            !0)
          );
        }
      }
      var j = n(845);
      const J = new x("FocusNavigation").Debug,
        Q = new x("GamepadEvents").Debug;
      class q {
        m_Controller;
        m_context;
        m_window;
        m_ID;
        m_bVirtualFocus;
        m_bIsMounted;
        m_Root;
        m_onActivateCallbacks = new O.lu();
        m_onDeactivateCallbacks = new O.lu();
        m_onActiveFocusStateChangedCallbacks = new O.lu();
        m_ParentEmbeddedNavTree;
        m_onUnhandledButton;
        m_applyFocusClassesInDesktop = !1;
        constructor(e, t, n) {
          (this.m_Controller = e),
            (this.m_context = t),
            (this.m_ID = n),
            (this.m_Root = new Ve(this, null, null)),
            this.m_Root.SetProperties({ layout: xe.COLUMN }),
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
          return new Ve(this, e, t);
        }
        RegisterNavigationItem(e, t) {
          return e.OnMount(t), () => e.OnUnmount();
        }
        OnChildActivated(e) {
          this.m_bIsMounted &&
            this.m_Controller.OnGamepadNavigationTreeFocused(this, e);
        }
        m_lastFocusNode;
        m_bWasActiveForLastFocusChange;
        m_lastFocusNodeXMovement = new Z();
        m_lastFocusNodeYMovement = new Z();
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
        SetApplyFocusClassesInDesktop(e) {
          this.m_applyFocusClassesInDesktop = e;
        }
        GetApplyFocusClassesInDesktop() {
          return this.m_applyFocusClassesInDesktop;
        }
        SetOnUnhandledButtonCallback(e) {
          this.m_onUnhandledButton = e;
        }
        HandleButtonDownEventAsLogicalEvent(e) {
          let { bUnhandled: t, bHadLogicalEventMapping: n } = (function (e) {
            const t = [
              r.pR.DIR_UP,
              r.pR.DIR_DOWN,
              r.pR.DIR_LEFT,
              r.pR.DIR_RIGHT,
            ];
            let n = !0,
              i = !1,
              o = a[e.detail.button];
            return (
              o
                ? ((i = !0), (n = u(e.target, o, e.detail)))
                : -1 !== t.indexOf(e.detail.button) &&
                  ((i = !0), (n = u(e.target, "vgp_ondirection", e.detail))),
              { bUnhandled: n, bHadLogicalEventMapping: i }
            );
          })(e);
          return (
            Q(
              `Logical gamepad Event fired: ${r.pR[e.detail.button]}, had logical event: ${n}, was handled: ${!t}`,
            ),
            t && this.m_onUnhandledButton && (t = this.m_onUnhandledButton(e)),
            t && (t = this.m_Controller.FireUnhandledGamepadEventCallbacks(e)),
            e.stopPropagation(),
            t
          );
        }
        m_DeferredFocus = new ee(this);
        get DeferredFocus() {
          return this.m_DeferredFocus;
        }
        TransferFocus(e, t, n) {
          this.m_Controller.BatchedUpdate(() =>
            this.TransferFocusInternal(e, t, n),
          );
        }
        TransferFocusInternal(e, t, n) {
          const o = this.m_lastFocusNode;
          if (
            o == t &&
            (this.m_bWasActiveForLastFocusChange || !this.BIsActive())
          )
            return;
          J(
            `Transfer focus in ${this.id}, source: ${e && i[e]}, from/to:`,
            o?.m_element,
            t?.m_element,
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
          let a = this.m_context.OnFocusChangeStart(e, this, o, t);
          t && t.SetDOMFocusAndScroll(e, o),
            o &&
              (u(o.Element, "vgp_onblur", s),
              !o.m_FocusRing ||
                (t && o.m_FocusRing == t.m_FocusRing) ||
                o.m_FocusRing.OnBlur(e, o, t)),
            t &&
              (u(t.Element, "vgp_onfocus", s),
              t.m_FocusRing &&
                (o && t.m_FocusRing == o.m_FocusRing
                  ? t.m_FocusRing.OnFocusChange(e, o, t)
                  : t.m_FocusRing.OnFocus(e, t, o))),
            (this.m_lastFocusNode = t),
            (this.m_bWasActiveForLastFocusChange = this.BIsActive()),
            "x" == n
              ? this.m_lastFocusNodeXMovement.SetNode(t?.Element)
              : "y" == n
                ? this.m_lastFocusNodeYMovement.SetNode(t?.Element)
                : (this.m_lastFocusNodeXMovement.Reset(),
                  this.m_lastFocusNodeYMovement.Reset()),
            this.m_context.OnFocusChangeComplete(a);
        }
      }
      class Z {
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
      class ee {
        m_tree;
        m_target;
        m_interval;
        m_schExecuteQueuedFocus = new O.LU();
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
              J(
                `DeferredFocus in ${this.m_tree.id} - focusing ${t ? "descendant of" : "node"} ${e.NavKey}`,
              ),
              t
                ? e.BChildTakeFocus(i.APPLICATION) ||
                  this.m_tree.TransferFocus(i.APPLICATION, e)
                : e.BTakeFocus(i.APPLICATION);
          }
        }
      }
      const te = new x("FocusNavigation").Debug;
      class ne {
        m_rootWindow;
        m_activeWindow;
        m_activeBrowserView;
        m_bActive = !1;
        m_controller;
        m_rgGamepadNavigationTrees = [];
        m_LastActiveNavTree = null;
        m_LastActiveFocusNavTree = null;
        m_bMounted = !0;
        m_schDeferredActivate = new O.LU();
        m_FocusChangedCallbacks = new O.lu();
        m_ActiveCallbacks = new O.lu();
        m_bIsGamepadInputSuppressed = !1;
        constructor(e, t, n) {
          (this.m_controller = e),
            (this.m_rootWindow = t),
            (this.m_activeWindow = t),
            (this.m_bIsGamepadInputSuppressed = n);
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
        Destroy(e) {
          e == this.m_rootWindow
            ? (te(`${this.LogName(e)} Destroying context for window`),
              (this.m_bMounted = !1),
              this.m_schDeferredActivate.Cancel(),
              this.SetActive(!1, e))
            : te(`${this.LogName(e)} Child window destroyed`);
        }
        SetActive(e, t, n = void 0) {
          this.m_controller.BatchedUpdate(() => {
            const i = this.m_bActive != e;
            (this.m_bActive = e),
              e
                ? ((this.m_activeWindow = t),
                  (this.m_activeBrowserView = n),
                  this.m_controller.OnContextActivated(this))
                : ((this.m_activeBrowserView = void 0),
                  this.m_controller.OnContextDeactivated(this, !1)),
              i &&
                ((this.m_bActive = e),
                this.m_ActiveCallbacks.Dispatch(e),
                this.m_LastActiveFocusNavTree?.OnActiveStateChangedCallbacks.Dispatch(
                  e,
                  this.m_LastActiveFocusNavTree,
                ));
          });
        }
        OnActivate(e) {
          te(
            `${this.LogName(e)} Activating context, there are ${this.m_rgGamepadNavigationTrees.length} trees in this context`,
          ),
            this.SetActive(!0, e);
        }
        OnActivateBrowserView(e, t) {
          te(`${this.LogName(e)} Browser View "${t}" activated in context`),
            this.SetActive(!0, e, t);
        }
        OnDeactivate(e) {
          this.m_activeWindow == e
            ? (te(`${this.LogName(e)} Deactivate context for window`),
              this.SetActive(!1, e))
            : te(
                `${this.LogName(e)} Blurred, but not deactivating because (${this.m_activeWindow?.name}) has focus.`,
              );
        }
        OnDeactivateBrowserView(e, t) {
          te(`${this.LogName(e)} Browser View "${t}" deactivated in context`),
            this.m_activeBrowserView == t && this.SetActive(!1, e, t);
        }
        BIsGamepadInputSuppressed() {
          return this.m_bIsGamepadInputSuppressed;
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
        LogName(e = void 0) {
          return e && this.m_rootWindow != e
            ? `(${this.m_rootWindow.name}) > (${e.name})`
            : `(${this.m_rootWindow.name})`;
        }
        SetActiveNavTree(e, t = !1) {
          if (e && this.m_LastActiveNavTree == e) return;
          const n = this.m_LastActiveNavTree;
          n && j.x9(this.m_rgGamepadNavigationTrees, n),
            e ||
              (this.m_rgGamepadNavigationTrees.length &&
                (e =
                  this.m_rgGamepadNavigationTrees[
                    this.m_rgGamepadNavigationTrees.length - 1
                  ]));
          const i = this.m_LastActiveFocusNavTree == e;
          e && j.x9(this.m_rgGamepadNavigationTrees, e),
            (this.m_LastActiveNavTree = e),
            (e && e.BUseVirtualFocus()) || (this.m_LastActiveFocusNavTree = e),
            te(
              `${this.LogName(e?.Window)} Move from nav tree ${n?.id} to nav tree ${e?.id} ${t ? "taking focus" : "no focus"}`,
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
            j.x9(this.m_rgGamepadNavigationTrees, e),
            this.m_rgGamepadNavigationTrees.unshift(e);
        }
        UnregisterGamepadNavigationTree(e) {
          j.x9(this.m_rgGamepadNavigationTrees, e),
            te(
              `(${this.m_rootWindow.name}) Unregister tree ${e?.id} ${this.m_LastActiveFocusNavTree == e ? "(was active)" : "(inactive)"}`,
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
        m_iFocusChangeStack = 0;
        m_ActiveFocusChange;
        OnFocusChangeStart(e, t, n, i) {
          return (
            0 == this.m_iFocusChangeStack
              ? (this.m_ActiveFocusChange = { source: e, from: n, to: i })
              : this.m_ActiveFocusChange &&
                !this.m_ActiveFocusChange.from &&
                n &&
                (this.m_ActiveFocusChange.from = n),
            this.m_iFocusChangeStack++
          );
        }
        OnFocusChangeComplete(e) {
          if (
            (this.m_iFocusChangeStack--,
            y(e == this.m_iFocusChangeStack, "out of order focus pop"),
            0 == this.m_iFocusChangeStack)
          ) {
            const {
              source: e,
              from: t,
              to: n,
            } = this.m_ActiveFocusChange ?? {};
            this.m_FocusChangedCallbacks.Dispatch(e, t, n);
          }
        }
      }
      const ie = new x("FocusNavigation").Debug,
        oe = new x("FocusNavigation").Assert,
        se = "focus-nav-show-debug-focus-ring";
      function re(e, t) {
        return (
          e?.eActivationSourceType === t?.eActivationSourceType &&
          e?.nActiveGamepadIndex === t?.nActiveGamepadIndex &&
          e?.nLastActiveGamepadIndex === t?.nLastActiveGamepadIndex
        );
      }
      class ae {
        m_rgGamepadInputSources = [];
        m_DefaultContext;
        m_rgAllContexts = [];
        m_ActiveContext;
        m_LastActiveContext;
        m_bGlobalEventsInitialized = !1;
        m_fnCatchAllGamepadInput = null;
        m_UnhandledButtonEventsCallbacks = new O.lu();
        m_navigationSource = (0, O.Jc)(
          {
            eActivationSourceType: r.Vz.UNKNOWN,
            nActiveGamepadIndex: -1,
            nLastActiveGamepadIndex: -1,
          },
          re,
        );
        m_navigationSourceSupportsFocus = (0, O.YX)(
          this.m_navigationSource,
          (e) =>
            e?.eActivationSourceType === r.Vz.GAMEPAD ||
            e?.eActivationSourceType === r.Vz.KEYBOARD ||
            e?.eActivationSourceType === r.Vz.UNKNOWN,
        );
        m_bShowDebugFocusRing = (0, O.Jc)(!1);
        m_bRestoringHistory = !1;
        m_fnGamepadEventUpdateBatcher = (e) => e();
        constructor() {
          (window.FocusNavController = this),
            this.m_bShowDebugFocusRing.Set(
              "shown" == sessionStorage.getItem(se),
            );
        }
        CreateContext(e, t) {
          const n = new ne(this, e, t);
          return this.m_rgAllContexts.push(n), n;
        }
        GetDefaultContext() {
          return (
            this.m_DefaultContext ||
              (this.m_DefaultContext = this.CreateContext(window, !1)),
            this.m_DefaultContext
          );
        }
        GetActiveContext() {
          return this.m_ActiveContext;
        }
        FindAnActiveContext() {
          if (!this.m_ActiveContext && 0 != this.m_rgAllContexts.length) {
            console.warn("No active context; finding one");
            for (const e of this.m_rgAllContexts) {
              const t = e.FindNavTreeInFocusedWindow();
              if (t) {
                ie(
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
              (y(
                !1,
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
                ? sessionStorage.setItem(se, "shown")
                : sessionStorage.removeItem(se);
            })(e);
        }
        GetShowDebugFocusRing() {
          return this.m_bShowDebugFocusRing;
        }
        RegisterInputSource(e) {
          let t = new O.e0();
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
            t.GetUnregisterFunc()
          );
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
        DispatchVirtualButtonPress(e) {
          this.OnButtonDown(e, r.Vz.UNKNOWN, -1);
        }
        DispatchVirtualButtonClick(e, t) {
          let n;
          t && (n = this.GetActiveContext() ?? this.FindAnActiveContext()),
            this.OnButtonDown(e, r.Vz.GAMEPAD, -1, void 0, t, n, !0),
            this.OnButtonUp(e, r.Vz.GAMEPAD, -1, void 0, t, n, !0);
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
            e === r.pR.STEAM_GUIDE ||
            e === r.pR.STEAM_QUICK_MENU ||
            e === r.pR.CANCEL
          );
        }
        GetEventTarget(e, t, n = !1) {
          let o = this.GetActiveContext();
          !o && n && (o = this.FindAnActiveContext());
          let s = o?.ActiveWindow?.document.activeElement;
          if (o?.m_LastActiveNavTree) {
            if (
              (t || (t = this.m_navigationSource?.Value?.eActivationSourceType),
              !(
                o.m_LastActiveNavTree.GetLastFocusedNode() ||
                (t != r.Vz.GAMEPAD && t != r.Vz.KEYBOARD) ||
                (ie(
                  `GetEventTarget: Context ${o.LogName()} tree ${o.m_LastActiveNavTree.id} has no focused node, ${n ? "finding one" : "will not find one"}`,
                ),
                n && o.m_LastActiveNavTree.TakeFocus(i.GAMEPAD, !0),
                this.BGlobalGamepadButton(e))
              ))
            )
              return [void 0, o];
            o.m_LastActiveNavTree.GetLastFocusedNode()
              ? (s = o.m_LastActiveNavTree?.GetLastFocusedNode()?.Element)
              : ie(
                  `GetEventTarget: Context ${o.LogName()} tree ${o.m_LastActiveNavTree.id} still has no focused node - will fall back to document.activeElement`,
                );
          }
          return [s, o];
        }
        ChangeNavigationSource(e, t) {
          let n = this.m_navigationSource.Value,
            i = n.nLastActiveGamepadIndex;
          n.nActiveGamepadIndex &&
            n.nActiveGamepadIndex >= 0 &&
            (i = n.nActiveGamepadIndex),
            this.m_navigationSource.Set({
              eActivationSourceType: e,
              nActiveGamepadIndex: t,
              nLastActiveGamepadIndex: i,
            }),
            e != r.Vz.MOUSE &&
              (0, p.Dp)("Browser.HideCursorUntilMouseEvent") &&
              SteamClient.Browser.HideCursorUntilMouseEvent();
        }
        OnButtonActionInternal(e, t, n, i, o, s, a, c) {
          if (this.m_fnCatchAllGamepadInput && this.m_fnCatchAllGamepadInput(t))
            return void (
              e &&
              ie(
                "Ignoring button press - gamepad input is suppressed by parent window",
              )
            );
          oe(
            !!s == !!a,
            "Must set both overrideContext and overrideElement or neither",
          );
          let l = s,
            h = a;
          (null != l && null != h) || ([l, h] = this.GetEventTarget(t, n, !0)),
            !h?.BIsGamepadInputSuppressed() || c
              ? (this.ChangeNavigationSource(n, i),
                e &&
                  ie(
                    `Firing ${r.pR[t]} in tree ${h?.m_LastActiveNavTree?.id} at `,
                    l,
                  ),
                this.BatchedUpdate(() =>
                  u(l, e ? "vgp_onbuttondown" : "vgp_onbuttonup", {
                    button: t,
                    source: n,
                    is_repeat: o,
                  }),
                ))
              : ie(
                  `Suppressing ${r.pR[t]} input on element ${l?.className} because tree ${h?.m_LastActiveNavTree?.id} has it disabled`,
                );
        }
        OnButtonDown(e, t, n, i, o, s, r) {
          this.OnButtonActionInternal(!0, e, t, n, i, o, s, r);
        }
        OnButtonUp(e, t, n, i, o, s, r) {
          this.OnButtonActionInternal(!1, e, t, n, !1, o, s, r);
        }
        BatchedUpdate(e) {
          this.m_fnGamepadEventUpdateBatcher(e);
        }
        OnNavigationTypeChange(e) {
          if (
            (this.ChangeNavigationSource(e, -1),
            document.hasFocus() &&
              (e == r.Vz.MOUSE || e == r.Vz.TOUCH) &&
              this.m_ActiveContext?.m_LastActiveNavTree)
          ) {
            const e =
                this.m_ActiveContext.m_LastActiveNavTree.GetLastFocusedNode(),
              t = (function (e) {
                if (!C(e)) return !1;
                const t = e.tagName,
                  n = ((i = e), "INPUT" === i.nodeName ? e.type : void 0);
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
              })(e?.Element)
                ? e
                : null;
            this.m_ActiveContext.m_LastActiveNavTree?.TransferFocus(
              i.BROWSER,
              t,
            );
          }
        }
        NewGamepadNavigationTree(e, t) {
          return new q(this, e, t);
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
          const o = e.WindowContext;
          o != this.m_ActiveContext &&
            ie(`(${o.LogName(e.Window)}) Focus event in inactive window`),
            e != o.m_LastActiveFocusNavTree &&
              e != o.m_LastActiveNavTree &&
              (o.m_LastActiveFocusNavTree?.GetParentEmbeddedNavTree() == e ||
              e.GetParentEmbeddedNavTree() == o.m_LastActiveFocusNavTree
                ? (ie(
                    `There was a focus event in ${e.id}, allowing focus transfer to activate nav tree due to parent embedded relationship`,
                  ),
                  e.Activate())
                : ie(
                    `There was a focus event in ${e.id}, but the active nav tree is ${o.m_LastActiveFocusNavTree?.id} so it is being ignored.  Source: ${t && i[t]}.`,
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
            this.m_ActiveContext?.m_LastActiveFocusNavTree ||
            this.m_ActiveContext?.m_LastActiveNavTree;
          e && e.TakeFocus(i.APPLICATION);
        }
        OnContextActivated(e) {
          (this.m_ActiveContext = e),
            (this.m_LastActiveContext = e),
            this.UpdateRepeatAllowed();
        }
        OnContextDeactivated(e, t) {
          t &&
            (this.m_LastActiveContext == e &&
              (this.m_LastActiveContext = void 0),
            j.x9(this.m_rgAllContexts, e)),
            this.m_ActiveContext == e && (this.m_ActiveContext = void 0),
            this.UpdateRepeatAllowed();
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
        UpdateRepeatAllowed() {
          const e = this.m_ActiveContext?.BIsActive() ?? !1;
          for (const t of this.m_rgGamepadInputSources) t.SetRepeatAllowed(e);
        }
      }
      (0, m.Cg)([g.o], ae.prototype, "OnButtonDown", null),
        (0, m.Cg)([g.o], ae.prototype, "OnButtonUp", null),
        (0, m.Cg)([g.o], ae.prototype, "OnNavigationTypeChange", null),
        (0, m.Cg)([g.o], ae.prototype, "UpdateRepeatAllowed", null);
      class ce {
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
          this.m_History || (this.m_History = new Y(this.m_node)),
            this.m_History.PushState();
        }
        PopState(e = 0) {
          this.m_History && this.m_History.PopState(e);
        }
        SaveState(e) {
          this.m_StateHistory || (this.m_StateHistory = new X(this.m_node)),
            this.m_StateHistory.SaveState(e);
        }
        RestoreState(e, t = 0) {
          return (
            !!this.m_StateHistory && this.m_StateHistory.RestoreState(e, t)
          );
        }
        GetFocusSnapshot() {
          return $(this.m_node);
        }
        RestoreFocusSnapshot(e, t = 0) {
          return z(this.m_node, e, t);
        }
        NavTree() {
          return this.m_node.Tree;
        }
        Node() {
          return this.m_node;
        }
      }
      function le(e, t, n, i = 0.001) {
        return "x" == e
          ? t.x + t.width > n.x + i && t.x + i < n.x + n.width
          : "y" == e
            ? t.y + t.height > n.y + i && t.y + i < n.y + n.height
            : (y(!1, `Invalid axis ${e}`), !1);
      }
      function ue(e, t, n) {
        let i;
        return (
          "x" == e
            ? (i = Math.min(t.x + t.width, n.x + n.width) - Math.max(t.x, n.x))
            : "y" == e
              ? (i =
                  Math.min(t.y + t.height, n.y + n.height) - Math.max(t.y, n.y))
              : (y(!1, `Invalid axis ${e}`), (i = 0)),
          i < 0 ? 0 : i
        );
      }
      function he(e, t, n) {
        const i = t[e],
          o = (function (e, t) {
            return "x" == e
              ? { min: t.x, max: t.x + t.width }
              : { min: t.y, max: t.y + t.height };
          })(e, n);
        return i < o.min ? o.min - i : i > o.max ? i - o.max : 0;
      }
      function de(e) {
        if (!e) return xe.NONE;
        const t = e.ownerDocument.defaultView,
          n = t.getComputedStyle(e);
        if ("flex" == n.display)
          switch (n.flexDirection) {
            case "row":
              return "wrap" == n.flexWrap ? xe.GRID : xe.ROW;
            case "row-reverse":
              return xe.ROW_REVERSE;
            case "column":
              return xe.COLUMN;
            case "column-reverse":
              return xe.COLUMN_REVERSE;
          }
        else {
          if ("grid" == n.display) return xe.GRID;
          if (e.childElementCount > 0) {
            const n = t.getComputedStyle(e.firstElementChild);
            if ("left" === n.float) return xe.ROW;
            if ("right" === n.float) return xe.ROW_REVERSE;
            if ("inline" === n.display || "inline-block" === n.display)
              return xe.GRID;
          }
        }
        return xe.COLUMN;
      }
      function me(e) {
        switch (e) {
          case r.pR.DIR_UP:
          case r.pR.DIR_DOWN:
            return "y";
          case r.pR.DIR_LEFT:
          case r.pR.DIR_RIGHT:
            return "x";
          default:
            return;
        }
      }
      function ge(e, t, n) {
        const i = [],
          [o, s] = e.GetChildren(),
          r = e.GetActiveChild();
        let a;
        const c = r ? r.Element?.getBoundingClientRect() : null;
        if (r) {
          const e = ve(r, t, n);
          if (
            e &&
            !e.offScreen &&
            ((a = _e(r, e, e.overlap, n)), a && !a.visibility.offScreen)
          )
            return a;
          e && i.push({ child: r, visibility: e });
        }
        const l = n || c;
        for (let e = 0; e < o.length; e++) {
          const n = o[e];
          if (n == r) continue;
          const s = ve(n, t, l ?? void 0);
          s && i.push({ child: n, visibility: s });
        }
        let u;
        i.sort(pe);
        for (const e of i) {
          const { child: n, visibility: i } = e;
          if (i.offScreen && u) {
            if (!u.visibility.offScreen) break;
            if (i.distance && i.distance > u.visibility.distance) break;
          }
          const o = n == r ? a : _e(n, i, i.overlap || t, l ?? void 0);
          o && (!u || pe(o, u) < 0) && (u = o);
        }
        return u;
      }
      function _e(e, t, n, i) {
        switch (e.GetFocusable()) {
          case "none":
            return;
          case "children":
            return ge(e, t.overlap || n, i);
          case "self":
            return { child: e, visibility: t };
        }
      }
      function pe(e, t) {
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
      function ve(e, t, n) {
        const i = e.Element?.getBoundingClientRect(),
          o = e.GetFocusable();
        let s;
        if ("none" == o || !i || !t) return null;
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
          if (!n) return null;
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
      class fe {
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
          let n = t / this.m_options.msDuration;
          try {
            this.Update(e(n));
          } catch {}
          this.m_window.requestAnimationFrame(this.m_fnBoundAnimationFunc);
        }
        ClearInterval() {
          this.m_bActive = !1;
        }
      }
      class Ce extends fe {
        m_fnCallback;
        constructor(e, t, n) {
          super(e, t), (this.m_fnCallback = n);
        }
        Update(e) {
          this.m_fnCallback(e);
        }
      }
      class Ae extends fe {
        m_object;
        m_propTargets;
        m_props = {};
        constructor(e, t, n) {
          super("ownerDocument" in e ? A(e) : e, n),
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
      const be = new x("ScrollSnap").Debug;
      let Re = !1;
      let we;
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
          n = 0,
          i = e;
        for (; i; ) {
          if (((t += i.offsetTop), (n += i.offsetLeft), "ownerDocument" in i)) {
            if ("fixed" === window.getComputedStyle(i).position) break;
          }
          i = i.offsetParent;
        }
        for (i = e?.parentElement; i; ) {
          const { scrollTop: e, scrollLeft: o } = Pe(i);
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
      function Fe(e, t) {
        return "x" == t
          ? [e.left, e.right, e.right - e.left]
          : [e.top, e.bottom, e.bottom - e.top];
      }
      function Ne(e, t, n, i) {
        let [o, s, r] = Fe(e, i),
          [a, c, l] = Fe(t, i),
          [u, h] = Fe(n, i);
        return o < a && s > c
          ? 0
          : (o < a && r <= l) || (s > c && r > l)
            ? o - a - u
            : (o < a && r > l) || (s > c && r <= l)
              ? s - c + h
              : 0;
      }
      function Ie(e) {
        return "auto" == e
          ? 0
          : e.endsWith("px")
            ? parseInt(e)
            : (console.log("Unsupported length", e), 0);
      }
      function Te(e) {
        if (!("ownerDocument" in e))
          return { left: 0, right: 0, top: 0, bottom: 0 };
        const t = e.ownerDocument.defaultView.getComputedStyle(e);
        return {
          left: Ie(t.scrollMarginLeft),
          right: Ie(t.scrollMarginRight),
          top: Ie(t.scrollMarginTop),
          bottom: Ie(t.scrollMarginBottom),
        };
      }
      function De(e, t) {
        let n = (function (e) {
          let t;
          return (
            (t =
              "ownerDocument" in e
                ? e.ownerDocument.defaultView.getComputedStyle(e)
                : e.document.defaultView.getComputedStyle(
                    window.document.documentElement,
                  )),
            {
              left: Ie(t.scrollPaddingLeft),
              right: Ie(t.scrollPaddingRight),
              top: Ie(t.scrollPaddingTop),
              bottom: Ie(t.scrollPaddingBottom),
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
      function Ee(e) {
        return e > -1 && e < 1;
      }
      function Le(e, t, n, i, o) {
        be(
          "----------------------------------------------------------------------------------",
        ),
          be("Scrolling Into View:", t);
        let s = [],
          r = t,
          a = Se(t),
          c = o ?? Number.MAX_VALUE;
        for (; r; ) {
          let e = b(r);
          e || (e = A(r));
          let t = Te(r),
            n = De(e, Se(e)),
            l = Me(e),
            u = { element: e, left: 0, top: 0 };
          if (
            (be(
              "Checking scroll div",
              e,
              `scroll y:${l.scrollTop} of ${l.MaxScrollTop()}, x:${l.scrollLeft} of ${l.MaxScrollLeft()}, adjusted =>`,
              n,
              "target => ",
              a,
            ),
            (i && "y" != i) ||
              !R(e, "y") ||
              ((u.top = Ne(a, n, t, "y")),
              (u.top = S(u.top, -l.scrollTop, l.MaxScrollTop() - l.scrollTop)),
              o &&
                ((u.top = Math.min(c, Math.abs(u.top)) * (u.top < 0 ? -1 : 1)),
                (c -= Math.abs(u.top))),
              be(`- checked y: ${u.top}`)),
            (i && "x" != i) ||
              !R(e, "x") ||
              ((u.left = Ne(a, n, t, "x")),
              (u.left = S(
                u.left,
                -l.scrollLeft,
                l.MaxScrollLeft() - l.scrollLeft,
              )),
              o &&
                ((u.left =
                  Math.min(c, Math.abs(u.left)) * (u.left < 0 ? -1 : 1)),
                (c -= Math.abs(u.left))),
              be(`- checked x: ${u.left}`)),
            s.push(u),
            o && !c)
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
        let l = !1;
        for (let e of s) {
          if (Ee(e.left) && Ee(e.top)) continue;
          let t = Me(e.element),
            i = t.scrollTop + e.top,
            o = t.scrollLeft + e.left;
          (o = S(o, 0, t.MaxScrollLeft())),
            (i = S(i, 0, t.MaxScrollTop())),
            (Ee(t.scrollLeft - o) && Ee(t.scrollTop - i)) ||
              (t.scrollTo({ left: o, top: i, behavior: n }),
              l || (be("Scrolling:"), (l = !0)),
              be(
                `- ${e.top},${e.left} => ${i}, ${o}, behavior: ${n}`,
                e.element,
              ));
        }
      }
      function ye(e, t) {
        const { top: n, left: i, behavior: o } = t,
          s = Me(e);
        s.scrollTo({
          top: s.scrollTop + (n ?? 0),
          left: s.scrollLeft + (i ?? 0),
          behavior: o,
        });
      }
      class Oe {
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
              n = e.top ?? this.scrollTop;
            let i = "sine";
            this.m_animation && (this.m_animation.Cancel(), (i = "linear"));
            if (
              Math.max(
                Math.abs(this.currentScrollTop - n),
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
                  o = this.currentScrollTop;
                this.m_animation = new Ce(this.m_window, e, (e) => {
                  this.m_window?.scrollTo({
                    left: i + (t - i) * e,
                    top: o + (n - o) * e,
                    behavior: "auto",
                  });
                });
              } else
                (this.m_element.style.scrollSnapType = "initial"),
                  (this.m_animation = new Ae(
                    this.m_element,
                    { scrollTop: n, scrollLeft: t },
                    e,
                  ));
              (this.m_scrollLeftTarget = t),
                (this.m_scrollTopTarget = n),
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
      (0, m.Cg)([g.o], Oe.prototype, "ResetScrollState", null);
      const Be = new WeakMap();
      function Me(e) {
        let t = Be.get(e);
        return t || ((t = new Oe(e)), Be.set(e, t)), t;
      }
      function Pe(e) {
        const t = Be.get(e);
        return t
          ? { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop }
          : { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
      }
      const Ge = new x("FocusNavigationMovement").Debug;
      var xe, ke, Ue, We;
      !(function (e) {
        (e[(e.NONE = 0)] = "NONE"),
          (e[(e.COLUMN = 1)] = "COLUMN"),
          (e[(e.ROW = 2)] = "ROW"),
          (e[(e.COLUMN_REVERSE = 3)] = "COLUMN_REVERSE"),
          (e[(e.ROW_REVERSE = 4)] = "ROW_REVERSE"),
          (e[(e.GRID = 5)] = "GRID"),
          (e[(e.GEOMETRIC = 6)] = "GEOMETRIC");
      })(xe || (xe = {})),
        (function (e) {
          (e[(e.FIRST = 0)] = "FIRST"),
            (e[(e.LAST = 1)] = "LAST"),
            (e[(e.MAINTAIN_X = 2)] = "MAINTAIN_X"),
            (e[(e.MAINTAIN_Y = 3)] = "MAINTAIN_Y"),
            (e[(e.PREFERRED_CHILD = 4)] = "PREFERRED_CHILD");
        })(ke || (ke = {})),
        (function (e) {
          (e[(e.Standard = 0)] = "Standard"),
            (e[(e.NoTransform = 1)] = "NoTransform"),
            (e[(e.NoTransformSparseContent = 2)] = "NoTransformSparseContent");
        })(Ue || (Ue = {})),
        (function (e) {
          (e[(e.INVALID = 0)] = "INVALID"),
            (e[(e.FORWARD = 1)] = "FORWARD"),
            (e[(e.BACKWARD = 2)] = "BACKWARD");
        })(We || (We = {}));
      class Ve {
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
        m_bFocused = !1;
        m_FocusCallbackList = new O.lu();
        m_bFocusWithin = !1;
        m_FocusWithinCallbackList = new O.lu();
        m_ActionDescriptionsChangedCallbackList = new O.lu();
        m_RetainFocusParent = null;
        m_rgNavigationHandlers = [];
        m_rgFocusHandlers = [];
        constructor(e, t, n) {
          (this.m_Tree = e),
            (this.m_Parent = t),
            (this.m_FocusRing = n),
            (this.m_nDepth = t ? t.m_nDepth + 1 : 0);
        }
        CreateHandle() {
          return new ce(this);
        }
        get Tree() {
          return this.m_Tree;
        }
        get NavKey() {
          return this.m_Properties?.navKey
            ? this.m_Properties.navKey
            : this.m_element?.id
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
          const t =
            ((n = this.m_Properties?.actionDescriptionMap),
            (o = e?.actionDescriptionMap),
            !(null == n || null == o
              ? n === o
              : "object" == typeof n &&
                "object" == typeof o &&
                Object.keys(n).length === Object.keys(o).length &&
                Object.keys(n).every(
                  (e) => o.hasOwnProperty(e) && n[e] === o[e],
                )));
          var n, o;
          const s = this.m_Properties?.retainFocus,
            r = this.m_Properties?.noFocusRing;
          (this.m_Properties = e || {}),
            t && this.m_ActionDescriptionsChangedCallbackList.Dispatch(),
            this.m_Properties.retainFocus && !s
              ? this.PropagateRetainFocusParentToChildren(this)
              : !this.m_Properties.retainFocus &&
                s &&
                this.PropagateRetainFocusParentToChildren(
                  this.m_RetainFocusParent,
                ),
            this.m_Properties.noFocusRing && !r && this.BHasFocus()
              ? this.m_FocusRing?.OnBlur(i.APPLICATION, this, this)
              : !this.m_Properties.noFocusRing &&
                r &&
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
          return this.m_element && this.m_element.getBoundingClientRect();
        }
        SetHasFocus(e) {
          e != this.m_bFocused &&
            ((this.m_bFocused = e),
            this.m_FocusCallbackList.Dispatch(this.m_bFocused));
        }
        SetFocusWithin(e) {
          e != this.m_bFocusWithin &&
            ((this.m_bFocusWithin = e),
            this.m_FocusWithinCallbackList.Dispatch(this.m_bFocusWithin),
            this.m_Properties?.onFocusWithin &&
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
            for (const n in t) {
              const i = n;
              void 0 === e[i] && (e[i] = t[i]);
            }
          return this.m_Parent
            ? this.m_Parent.BuildConsolidatedActionDescriptionMap(e)
            : e;
        }
        AddChild(e) {
          this.m_rgChildren.push(e),
            (this.m_bChildrenSorted = !1),
            this.m_element && this.RegisterDOMEvents(),
            this.m_Properties?.retainFocus
              ? e.SetRetainFocusParent(this)
              : this.m_RetainFocusParent &&
                e.SetRetainFocusParent(this.m_RetainFocusParent),
            this.m_bMounted &&
              e.BFocusWithin() &&
              (y(
                !this.m_ActiveChild && this.BFocusWithin(),
                "Invalid focus state in AddChild",
              ),
              this.SetActiveChild(this.m_rgChildren.length - 1));
        }
        OnMount(e) {
          (this.m_element = e),
            this.m_Parent
              ? this.m_Parent.AddChild(this)
              : y(this == this.m_Tree.Root, "Only root should have no parent"),
            (this.m_bMounted = !0),
            this.RegisterDOMEvents();
          const t =
              this.m_RetainFocusParent && this.m_RetainFocusParent.BHasFocus(),
            n = this.m_Properties?.autoFocus || t;
          if (this.BWantsAutoFocus() || n) {
            let e = -1;
            this.m_rgChildren.length &&
              (this.EnsureChildrenSorted(),
              (e = this.m_rgChildren.findIndex((e) => e.BWantsAutoFocus()))),
              (this.m_Properties?.autoFocus || n || -1 !== e) &&
                (this.SetActiveChild(e),
                !this.m_Parent || this.m_Parent.m_element
                  ? t
                    ? this.m_Tree.DeferredFocus.BHasQueuedFocusNode() ||
                      this.m_Tree.DeferredFocus.RequestFocus(
                        this.m_RetainFocusParent,
                        { bFocusDescendant: !0 },
                      )
                    : this.Tree.DeferredFocus.RequestFocus(this)
                  : (this.m_Parent.m_bAutoFocusChild = !0));
          } else if (this.m_rgChildren.length) {
            const e = this.m_rgChildren.findIndex((e) => e.BFocusWithin());
            -1 != e &&
              (this.SetActiveChild(e),
              y(
                this.m_bFocusWithin,
                "Child has focus, we should be m_bFocusWithin",
              ));
          }
        }
        DEV_SetDebugPropsOnElement() {}
        OnUnmount() {
          this.m_Properties?.retainFocus &&
            this.PropagateRetainFocusParentToChildren(this.m_RetainFocusParent),
            (this.m_bMounted = !1);
          const e = this.Tree.DeferredFocus.BIsQueuedFocusNode(this);
          (this.m_bFocused || e) &&
            (Ge(
              `The focused node is unmounting, ${this.m_RetainFocusParent ? "will transfer to retain focus ancestor" : "will blur"}.`,
            ),
            e && this.Tree.DeferredFocus.RequestFocus(null),
            this.m_RetainFocusParent
              ? this.m_RetainFocusParent.OnFocusedDecendantRemoved(this)
              : this.m_bFocused &&
                this.m_Tree.TransferFocus(i.APPLICATION, null)),
            this.UnregisterDOMEvents(),
            this.m_Parent
              ? this.m_Parent.RemoveChild(this)
              : y(this == this.m_Tree.Root, "Only root should have no parent");
        }
        RegisterDOMEvents() {
          !this.m_rgNavigationHandlers.length &&
            this.m_element &&
            (this.m_rgChildren.length >= 2 ||
              this.m_Properties?.layout != xe.NONE ||
              this.m_Properties.onMoveUp ||
              this.m_Properties.onMoveRight ||
              this.m_Properties.onMoveDown ||
              this.m_Properties.onMoveLeft) &&
            this.m_rgNavigationHandlers.push(
              l(this.m_element, this.OnNavigationEvent),
            ),
            (this.m_Properties?.focusable ||
              this.m_Properties?.focusableIfNoChildren ||
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
          y(-1 !== t, "Child was not found to remove"),
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
                this.m_ActiveChild,
              )),
            (this.m_bChildrenSorted = !0));
        }
        GetLastFocusElement() {
          const e = this.GetActiveChild();
          return e ? e.GetLastFocusElement() : this.m_element;
        }
        OnDOMFocus(e) {
          if (!this.m_bFocused) {
            if ("children" == this.GetFocusable()) {
              const e = this.FindFocusableDescendant();
              if (e && e !== this)
                return (
                  Ge(
                    "Browser gave node focus but we are marked focusableIfNoChildren, transfering focus to descendant.",
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
          this.m_bFocused &&
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
            We.FORWARD,
            r.pR.INVALID,
          );
          return this.InternalFocusDescendant(t, e);
        }
        BFocusLastChild(e) {
          const t = this.FindNextFocusableChildInDirection(
            this.m_rgChildren.length,
            We.BACKWARD,
            r.pR.INVALID,
          );
          return this.InternalFocusDescendant(t, e);
        }
        FindFocusableDescendant(e, t) {
          const n = me(e),
            { focusableIfNoChildren: i, childFocusDisabled: o } =
              this.m_Properties ?? {};
          if (o) return null;
          if (this.m_rgChildren.length) {
            this.EnsureChildrenSorted();
            const { navEntryPreferPosition: o, resetNavOnEntry: s } =
              this.m_Properties ?? {};
            let r,
              a = this.GetActiveChildIndex();
            if ((s && void 0 !== e && (a = -1), !this.IsValidChildIndex(a))) {
              const e = this.GetLayout();
              a =
                a >= this.m_rgChildren.length ||
                e == xe.ROW_REVERSE ||
                e == xe.COLUMN_REVERSE ||
                o == ke.LAST
                  ? this.m_rgChildren.length - 1
                  : 0;
            }
            if ((o == ke.MAINTAIN_X || o == ke.MAINTAIN_Y || t) && n) {
              let i, s;
              o == ke.MAINTAIN_X ? (i = "x") : o == ke.MAINTAIN_Y && (i = "y"),
                i == L[n] &&
                  (s =
                    this.m_Tree.GetLastFocusedMovementRect(L[n]) ??
                    this.m_Tree.GetLastFocusedNode()?.GetBoundingRect()),
                Ge(
                  `Taking focus while preserving ${o && ke[o]} preserved: ${i} movement: ${n}, node:`,
                  s || t,
                );
              const a = this.ComputeRelativeDirection(e, xe.GRID);
              if (s || t) {
                const o = a == We.BACKWARD ? this.m_rgChildren.length - 1 : 0;
                r = this.FindClosestChildInNextAxiallyAlignedSet(
                  i || L[n],
                  a,
                  e,
                  s || t,
                  o,
                  this.m_rgChildren[o].GetBoundingRect(),
                );
              } else if (i != L[n]) {
                const t = a == We.BACKWARD ? this.m_rgChildren.length : -1;
                r = this.FindNextFocusableChildInDirection(t, a, e);
              }
            } else if (o == ke.PREFERRED_CHILD) {
              for (const t of this.m_rgChildren)
                if (
                  ((r = t.BWantsPreferredFocus()
                    ? t.FindFocusableNode(e)
                    : void 0),
                  r)
                )
                  return r;
            } else
              o == ke.LAST &&
                (r = this.FindNextFocusableChildInDirection(
                  a + 1,
                  We.BACKWARD,
                  e,
                ));
            return (
              r ||
                (r = this.FindNextFocusableChildInDirection(
                  a - 1,
                  We.FORWARD,
                  e,
                )),
              r ||
                (r = this.FindNextFocusableChildInDirection(a, We.BACKWARD, e)),
              r || (i ? this : null)
            );
          }
          return null;
        }
        BVisibleChildTakeFocus(e) {
          const t = this.Element?.ownerDocument?.defaultView ?? window,
            n = ge(this, {
              top: 0,
              left: 0,
              right: t.innerWidth,
              bottom: t.innerHeight,
            });
          return (
            Ge(
              `Focusing visible child, best child match is ${n?.child?.Element?.className} - ${JSON.stringify(n?.visibility)}`,
            ),
            !!n && n.child.BTakeFocus(e)
          );
        }
        GetLayout() {
          if (this.m_Properties?.layout) return this.m_Properties.layout;
          if (this.m_rgChildren.length < 2) return xe.NONE;
          return de(this.m_element);
        }
        OnNavigationEvent(e) {
          const t = e.detail.button;
          if (this.BTryInternalNavigation(t, e.detail.is_repeat ?? !1))
            return !0;
          const {
            onMoveUp: n,
            onMoveRight: i,
            onMoveDown: o,
            onMoveLeft: s,
          } = this.m_Properties ?? {};
          let a = !1;
          switch (t) {
            case r.pR.DIR_UP:
              n && (a = n(e.detail, this));
              break;
            case r.pR.DIR_RIGHT:
              i && (a = i(e.detail, this));
              break;
            case r.pR.DIR_DOWN:
              o && (a = o(e.detail, this));
              break;
            case r.pR.DIR_LEFT:
              s && (a = s(e.detail, this));
          }
          return a;
        }
        InternalFocusDescendant(e, t, n) {
          return !!e && (this.m_Tree.TransferFocus(t, e, me(n)), !0);
        }
        BTryInternalNavigation(e, t) {
          const n = this.GetLayout();
          let o,
            s = this.ComputeRelativeDirection(e, n);
          if (
            (Ge(
              `Handling navigation event ${r.pR[e]} - ${xe[n]} - ${We[s]}`,
              this.m_element,
            ),
            s == We.INVALID)
          )
            return !1;
          if (this.m_Properties?.focusable && this.m_bFocused)
            return Ge("Skipping navigation within focused element"), !1;
          if ((this.EnsureChildrenSorted(!0), n == xe.GRID))
            o = this.FindNextFocusableChildInGrid(
              this.GetActiveChildIndex(),
              s,
              e,
            );
          else {
            let t = this.GetActiveChildIndex();
            this.IsValidChildIndex(t) ||
              (t = s == We.FORWARD ? -1 : this.m_rgChildren.length),
              (o = this.FindNextFocusableChildInDirection(t, s, e));
          }
          if (o) {
            const n = me(e);
            if (this.GetScrollIntoViewType() == Ue.NoTransformSparseContent) {
              const e = o.Element?.ownerDocument.defaultView;
              if (e) {
                const i =
                    ("y" == n ? e.innerHeight : e.innerWidth) /
                    (t ? 4.5 : 3.33),
                  s = Se(o.Element);
                if (
                  (s.top > e.innerHeight && s.bottom > e.innerHeight + i) ||
                  (s.bottom < 0 && s.top < -i) ||
                  (s.left > e.innerWidth && s.right > e.innerWidth + i) ||
                  (s.right < 0 && s.left < -i)
                )
                  return (
                    Ge(`Element too far away, scrolling ${i} on ${n} axis `),
                    Le(o.Element, o.Element, "smooth", n, i),
                    !0
                  );
              }
            }
            return this.m_Tree.TransferFocus(i.GAMEPAD, o, n), !0;
          }
          return !1;
        }
        GetScrollIntoViewType() {
          return this.m_Properties?.scrollIntoViewType
            ? this.m_Properties.scrollIntoViewType
            : this.m_Parent
              ? this.m_Parent.GetScrollIntoViewType()
              : Ue.Standard;
        }
        GetRelativeDirection(e) {
          return this.ComputeRelativeDirection(e, this.GetLayout());
        }
        ComputeRelativeDirection(e, t) {
          let n = t == xe.ROW_REVERSE || t == xe.COLUMN_REVERSE;
          switch (t) {
            case xe.ROW:
            case xe.ROW_REVERSE:
              switch (e) {
                case r.pR.DIR_LEFT:
                  return n ? We.FORWARD : We.BACKWARD;
                case r.pR.DIR_RIGHT:
                  return n ? We.BACKWARD : We.FORWARD;
                default:
                  return We.INVALID;
              }
            case xe.COLUMN:
            case xe.COLUMN_REVERSE:
              switch (e) {
                case r.pR.DIR_UP:
                  return n ? We.FORWARD : We.BACKWARD;
                case r.pR.DIR_DOWN:
                  return n ? We.BACKWARD : We.FORWARD;
                default:
                  return We.INVALID;
              }
            case xe.GRID:
              switch (e) {
                case r.pR.DIR_LEFT:
                case r.pR.DIR_UP:
                  return n ? We.FORWARD : We.BACKWARD;
                case r.pR.DIR_RIGHT:
                case r.pR.DIR_DOWN:
                  return n ? We.BACKWARD : We.FORWARD;
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
        FindNextFocusableChildInDirection(e, t, n) {
          let i = t == We.FORWARD ? 1 : -1;
          for (let t = e + i; t >= 0 && t < this.m_rgChildren.length; t += i) {
            const e = this.m_rgChildren[t].FindFocusableNode(n);
            if (e) return e;
          }
          return null;
        }
        ScanChildren(e, t, n) {
          let i = t == We.FORWARD ? 1 : -1;
          for (let t = e; t >= 0 && t < this.m_rgChildren.length; t += i)
            if (n(this.m_rgChildren[t], t)) return t;
          return -1;
        }
        FindNextFocusableChildInGrid(e, t, n) {
          const i = n == r.pR.DIR_UP || n == r.pR.DIR_DOWN,
            o = this.GetLastFocusElement();
          if (!o || o == this.m_element)
            return (
              y(
                !1,
                "No active child for grid navigation",
                this.m_iLastActiveChildIndex,
                this.m_rgChildren.length,
                o,
              ),
              this.FindFocusableDescendant(n)
            );
          const s = this.GetActiveDescendant().GetBoundingRect();
          if (n == r.pR.DIR_UP || n == r.pR.DIR_DOWN) {
            const e =
              this.m_Tree.GetLastFocusedMovementRect("x") ??
              this.m_Tree.GetLastFocusedNode()?.GetBoundingRect();
            e && ((s.x = e.x), (s.width = e.width));
          }
          if (i) {
            let i = e;
            for (; -1 != i; ) {
              const e = this.ScanChildren(
                this.AdvanceIndex(i, t),
                t,
                (e) => !le("y", s, e.GetBoundingRect()),
              );
              if (-1 != e) {
                const i = this.m_rgChildren[e].GetBoundingRect(),
                  o = this.FindClosestChildInNextAxiallyAlignedSet(
                    "x",
                    t,
                    n,
                    s,
                    e,
                    i,
                  );
                if (o) return o;
              }
              i = e;
            }
          } else {
            let i = t == We.FORWARD ? 1 : -1;
            for (
              let o = this.AdvanceIndex(e, t);
              o >= 0 && o < this.m_rgChildren.length;
              o += i
            ) {
              const e = this.m_rgChildren[o];
              if (!le("y", s, e.GetBoundingRect())) return null;
              let t = e.FindFocusableNode(n);
              if (t) return t;
            }
          }
          return null;
        }
        FindClosestChildInNextAxiallyAlignedSet(e, t, n, i, o, s) {
          (!o || o < 0) && (o = 0);
          let r = [];
          if (!i) return null;
          const a = { x: (c = i).x, y: c.y };
          var c;
          this.ScanChildren(o, t, (t) => {
            const n = t.GetBoundingRect();
            return (
              !!n &&
              (!(!s || le(L[e], s, n)) ||
                (r.push({ child: t, overlap: ue(e, i, n), dist: he(e, a, n) }),
                !1))
            );
          }),
            t == We.BACKWARD && r.reverse(),
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
          e instanceof Ve
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
            this.m_Properties?.retainFocus ||
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
              ? (y(
                  !this.m_Tree.BUseVirtualFocus(),
                  "Virtual focus tree should not have browser focus",
                ),
                this.m_element?.focus({ preventScroll: !0 }))
              : this.m_Tree.BUseVirtualFocus() ||
                Ge(
                  `Didn't move focus to element as tree ${this.m_Tree.id} is not active focus tree`,
                ),
            (function (e, t) {
              const n = e.Element;
              if (!n) return;
              let i = [e];
              for (let t = e.Parent; t; t = t.Parent)
                t.m_Properties?.scrollIntoViewWhenChildFocused && i.push(t);
              for (; i.length; ) {
                let n = i.pop(),
                  o = 0 == i.length,
                  s = n?.m_Properties?.scrollIntoViewType;
                if (
                  (void 0 === s && (s = Re ? Ue.NoTransform : Ue.Standard),
                  n?.m_Properties?.fnScrollIntoViewHandler &&
                    !1 !== n.m_Properties.fnScrollIntoViewHandler(e, t, n))
                )
                  continue;
                const r = n.m_element,
                  a =
                    s == Ue.NoTransform ||
                    s == Ue.NoTransformSparseContent ||
                    !o;
                if (t) {
                  const t = a ? Se(r) : r.getBoundingClientRect();
                  let n = !1;
                  const i = Math.max(1.4 * (t.bottom - t.top), 40);
                  ((we && performance.now() - we < 500) ||
                    t.bottom < -i ||
                    t.top > window.innerHeight + i) &&
                    (n = !0);
                  let o = n ? "auto" : "smooth";
                  n && (we = performance.now()),
                    e.Tree.Controller.BIsRestoringHistory() && (o = "auto"),
                    a
                      ? Le(0, r, o)
                      : r.scrollIntoView({ behavior: o, block: "nearest" });
                } else
                  a
                    ? Le(0, r, "auto")
                    : r?.scrollIntoView({
                        behavior: "auto",
                        block: "nearest",
                        inline: "nearest",
                      });
              }
            })(this, t),
            this.m_Tree.OnChildActivated(e);
        }
      }
      (0, m.Cg)([g.o], Ve.prototype, "OnDOMFocus", null),
        (0, m.Cg)([g.o], Ve.prototype, "OnDOMBlur", null),
        (0, m.Cg)([g.o], Ve.prototype, "OnNavigationEvent", null);
      class He extends Ve {
        m_wrappedTree;
        m_rgCallbackRegistrations = [];
        constructor(e, t) {
          super(t.m_Tree, t, t.m_FocusRing);
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
              e.OnActivateCallbacks.Register(this.OnWrappedTreeActivated),
            ),
            this.m_rgCallbackRegistrations.push(
              e.OnDeactivateCallbacks.Register(this.OnWrappedTreeDeactivated),
            ),
            e.BIsActive() && this.OnWrappedTreeActivated(),
            e.SetOnUnhandledButtonCallback(this.OnWrappedTreeUnhandledButton));
        }
        OnWrappedTreeActivated() {
          this.BHasFocus() || this.m_Tree.TransferFocus(i.APPLICATION, this);
        }
        OnWrappedTreeDeactivated() {
          this.m_wrappedTree?.TransferFocus(i.APPLICATION, null);
        }
        OnWrappedTreeUnhandledButton(e) {
          return u(this.m_Parent?.Element, "vgp_onbuttondown", e.detail), !1;
        }
        SetDOMFocusAndScroll(e, t) {
          this.UpdateParentActiveChild(),
            this.m_wrappedTree?.BIsActive() ||
              (this.m_wrappedTree?.Activate(),
              this.m_wrappedTree?.TakeFocus(e));
        }
        SetProperties(e) {
          super.SetProperties({ ...e, noFocusRing: !0, focusable: !0 });
        }
      }
      (0, m.Cg)([g.o], He.prototype, "OnWrappedTreeActivated", null),
        (0, m.Cg)([g.o], He.prototype, "OnWrappedTreeDeactivated", null),
        (0, m.Cg)([g.o], He.prototype, "OnWrappedTreeUnhandledButton", null);
      const Ke = "VirtualKeyboardMessage";
      function $e(e) {
        return e && e.type === Ke;
      }
      class ze {
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
          e == Ke && this.InternalDispatchMessage(JSON.parse(t));
        }
        OnMessage(e) {
          this.InternalDispatchMessage(e.data);
        }
        InternalDispatchMessage(e) {
          $e(e) && e.message;
        }
        SendMessage(e) {
          const t = { type: "VirtualKeyboardMessage", ...e };
          (0, p.Dp)("BrowserView.PostMessageToParent")
            ? SteamClient.BrowserView.PostMessageToParent(
                t.type,
                JSON.stringify(t),
              )
            : (y(
                window.parent && window.parent != window,
                "No parent window to post to",
              ),
              window.parent.postMessage(t, "*"));
        }
      }
      (0, m.Cg)([g.o], ze.prototype, "ShowVirtualKeyboard", null),
        (0, m.Cg)([g.o], ze.prototype, "ShowModalKeyboard", null),
        (0, m.Cg)([g.o], ze.prototype, "HideVirtualKeyboard", null),
        (0, m.Cg)([g.o], ze.prototype, "OnBrowserViewMessage", null),
        (0, m.Cg)([g.o], ze.prototype, "OnMessage", null);
      (0, m.Cg)(
        [g.o],
        class {
          m_showKeyboard;
          m_showModalKeyboard;
          m_hideKeyboard;
          constructor(e, t, n, i) {
            (this.m_showKeyboard = t),
              (this.m_showModalKeyboard = n),
              (this.m_hideKeyboard = i),
              e.on("message", this.OnMessage);
          }
          OnMessage(e, t, n) {
            if (e == Ke) {
              const e = JSON.parse(t);
              if ($e(e))
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
      var Ye = n(668),
        Xe = n.n(Ye);
      function je(e) {
        let t = 0;
        e.children().each(function () {
          const e = s()(this),
            n = e.css("zIndex");
          "auto" === n
            ? e.css("zIndex", 0)
            : isNaN(parseInt(n)) || (t = Math.max(t, parseInt(n)));
        });
        const n = s()("<div/>", {
          style: `position: absolute; pointer-events: none; top: 0; left: 0; z-index: ${(t || 100) + 1}; width: 0; height: 0; padding: 0; margin: 0; background: none; overflow: visible; display: block;`,
        });
        let i = null,
          o = null,
          r = null,
          a = 0,
          c = 0,
          l = 0,
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
              (c = e.top),
              (l = e.height),
              (u = e.width),
              i.css({ left: a, top: c, height: l, width: u });
          },
          m = (e) => {
            if (e && e.BWantsFocusRing() && i) {
              let t = h(e);
              (t.left == a && t.top == c && t.height == l && t.width == u) ||
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
                class: Xe().FocusRing,
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
      function Je(e) {
        return !!e.is_repeat;
      }
      Object.seal({ onMoveUp: Qe, onMoveDown: Qe }),
        Object.seal({ onMoveRight: Qe, onMoveLeft: Qe });
      function Qe(e, t) {
        if (e.is_repeat) return !1;
        const n = t.GetRelativeDirection(e.button);
        return n == We.FORWARD
          ? t.BFocusFirstChild(i.GAMEPAD)
          : n == We.BACKWARD && t.BFocusLastChild(i.GAMEPAD);
      }
      function qe(e) {
        return e ? Function("event", e) : null;
      }
      function Ze() {
        return !0;
      }
      function et(e) {
        return "BlockMovement" == e
          ? Ze
          : "RepeatNavigationBoundary" == e
            ? Je
            : e
              ? Function("detail", e)
              : null;
      }
      function tt(e) {
        this.click(), e.stopPropagation();
      }
      function nt(e) {
        s()(this).find('a, input[type="checkbox"]')[0].click();
      }
      function it(e) {
        const t = e.currentTarget;
        if (!C(t)) return !1;
        const n = e.detail.is_repeat ? 4.5 : 3.33,
          i = "smooth",
          o = t.ownerDocument,
          s = o.defaultView;
        switch (e.detail.button) {
          case r.pR.DIR_UP:
            if (s.scrollY > 3)
              return ye(s, { top: -s.innerHeight / n, behavior: i }), !0;
            break;
          case r.pR.DIR_RIGHT:
            if (s.scrollX + s.innerWidth < o.body.clientWidth - 3)
              return ye(s, { left: s.innerWidth / n, behavior: i }), !0;
            break;
          case r.pR.DIR_DOWN:
            if (s.scrollY + s.innerHeight < o.body.clientHeight - 3)
              return ye(s, { top: s.innerHeight / n, behavior: i }), !0;
            break;
          case r.pR.DIR_LEFT:
            if (s.scrollX > 3)
              return ye(s, { left: s.innerWidth / n, behavior: i }), !0;
        }
        return !1;
      }
      const ot = !1;
      function st(e) {
        const { name: t, root: n, navState: i } = e;
        i
          ? (ot && console.log(`Restore ${t} history snapshot ${K(i)}`),
            z(n, i),
            n.Tree.DeferredFocus.Reset())
          : (ot && console.log(`No focus state in history for ${t}`),
            n.Tree.DeferredFocus.ExecuteQueuedFocus());
      }
      function rt(e, t) {
        const n = window.history.state;
        return { name: e, root: t, navState: n?.[e] };
      }
      var at;
      !(function (e) {
        (e[(e.Unknown = 0)] = "Unknown"),
          (e[(e.NotNeeded = 1)] = "NotNeeded"),
          (e[(e.InReactTree = 2)] = "InReactTree");
      })(at || (at = {}));
      const ct = new ze();
      let lt,
        ut = !1,
        ht = null,
        dt = null,
        mt = null;
      function gt(e) {
        ut ||
          ((ht = new ae()),
          (window.legacyWebFocusNavController = ht),
          (lt = new f(ht)),
          lt.BIsGamepadInputExternallyControlled() || ht.RegisterInputSource(e),
          (lt.BIsGamepadInputExternallyControlled() ||
            navigator.userAgent.includes("Valve Steam Gamepad")) &&
            ht.RegisterInputSource(new E(window)),
          (function (e) {
            s()("html").addClass("gpnav_active");
            const t = s()("body"),
              n = e.NewGamepadNavigationTree(e.GetDefaultContext(), "legacy"),
              i = je(t);
            (n.Root.m_FocusRing = i),
              n.Root.SetProperties({
                scrollIntoViewType: Ue.NoTransformSparseContent,
              }),
              (window.__nav_tree_root = n),
              (window.__virtual_keyboard_client = ct),
              pt.set(document.body, n.Root),
              Ct(document.body, n.Root),
              wt(void 0, !0),
              e.RegisterGamepadNavigationTree(n, window, !1),
              s()(document.body).on("vgp_onbuttondown", function (e) {
                n.HandleButtonDownEventAsLogicalEvent(e.originalEvent);
              }),
              l(document.body, it);
            new MutationObserver(_t).observe(document.body, {
              childList: !0,
              subtree: !0,
            }),
              (o = !0),
              (Re = o),
              (function (e, t) {
                if (
                  (t.Tree.DeferredFocus.SuppressFocus(),
                  window.addEventListener("popstate", () => st(rt(e, t))),
                  window.history.state?.notify_focus_restore_ready)
                ) {
                  ot &&
                    console.log(
                      "waiting to restore focus until focus_restore_ready is sent",
                    );
                  var n = rt(e, t);
                  window.addEventListener("focus_restore_ready", function (e) {
                    ot && console.log("focus_restore_ready received"),
                      window.setTimeout(function () {
                        st(n);
                      }, 100);
                  });
                } else
                  ot && console.log("immediately restoring focus from history"),
                    st(rt(e, t));
                !(function (e, t) {
                  t.Tree.WindowContext.FocusChangedCallbacks.Register(() => {
                    ot &&
                      console.log(`Recording nav state for ${e}: ${K($(t))}`),
                      window.history.replaceState(
                        { ...window.history.state, [e]: $(t) },
                        null,
                      );
                  });
                })(e, t);
              })("legacy_web_root", n.Root),
              Object.assign(window, Dt),
              window.dispatchEvent(new CustomEvent("vgp_gamepadnavready"));
            var o;
          })(ht)),
          (ut = !0);
      }
      function _t(e) {
        for (const t of e) {
          const e = [],
            n = [];
          w(
            t,
            (t) => e.push(t),
            (e) => n.push(e),
          ),
            e.length && wt(s()(e)),
            n.length && Rt(s()(n));
        }
      }
      const pt = new WeakMap(),
        vt = new WeakMap();
      let ft = [];
      function Ct(e, t) {
        if (t instanceof Ve) {
          const n = t.GetDepth();
          ft[n] || (ft[n] = []), ft[n].push([e, t]);
        }
        pt.set(e, t);
      }
      function At(e, t) {
        const n = vt.has(e) ? vt.get(e) : [];
        n.push(t), vt.set(e, n);
      }
      function bt(e) {
        return "jquery" in e
          ? pt.get(e[0]) || at.Unknown
          : pt.get(e) || at.Unknown;
      }
      function Rt(e) {
        e.find("*")
          .addBack()
          .each(function () {
            vt.get(this)?.forEach((e) => e()),
              pt.delete(this),
              vt.delete(this),
              s()(this).attr("data-nav-modal") && Tt();
          });
      }
      function wt(e, t = !1) {
        performance.now();
        const n =
          "a,button,textarea,input:not(input[type=hidden]),label:not([for]),[data-panel],[data-react-nav-root],[data-nav-modal]";
        s()(n, e)
          .addBack(n)
          .each(function () {
            var e;
            (function (e) {
              return "jquery" in e ? pt.has(e[0]) : pt.has(e);
            })((e = this)) || Nt(e);
          }),
          (function () {
            for (let e = ft.length - 1; e >= 0; e--)
              if (ft[e])
                for (let [t, n] of ft[e])
                  At(t, n.Tree.RegisterNavigationItem(n, t));
            ft = [];
          })();
      }
      function St(e) {
        Rt(s()(e)), wt(s()(e));
      }
      function Ft(e) {
        const t = s()(e.Element);
        return (
          !t.data("gpFocusDisabled") &&
          t.is(":visible") &&
          "hidden" != t.css("visibility") &&
          ((t.outerWidth() > 0 && t.outerHeight() > 0) ||
            "hidden" !== t.css("overflow"))
        );
      }
      function Nt(e) {
        const t = s()(e),
          n = It(e);
        if (n instanceof He || n == at.InReactTree)
          return Ct(e, at.InReactTree), at.InReactTree;
        const o = n.Tree;
        let r = t.data("reactNavRoot")
            ? new He(t.data("reactNavRoot"), n)
            : o.CreateNode(n, n.m_FocusRing),
          a = t.data("panel") || {};
        if (
          (s()(e).attr("data-nav-modal") &&
            (function (e) {
              dt &&
                (y(
                  !1,
                  "Creating a new modal nav tree while one already exists. A modal opening another modal is not currently supported.",
                ),
                Tt());
              dt = ht.NewGamepadNavigationTree(
                ht.GetDefaultContext(),
                "modal_dialog",
              );
              const t = je(s()("body"));
              (dt.Root.m_FocusRing = t),
                dt.Root.SetProperties({}),
                Ct(e, dt.Root),
                wt(e),
                l(dt.Root.m_element, (e) => !0),
                (mt = ht.RegisterGamepadNavigationTree(dt, window, !1));
            })(e),
          "A" == e.tagName || "BUTTON" == e.tagName || "LABEL" == e.tagName)
        )
          (a.focusable = a.focusable ?? !0),
            (a.clickOnActivate = a.clickOnActivate ?? !0);
        else if ("INPUT" == e.tagName)
          switch (((a.focusable = a.focusable ?? !0), e.getAttribute("type"))) {
            case "radio":
            case "checkbox":
              a.clickOnActivate = a.clickOnActivate ?? !0;
              break;
            case "text":
            case "password":
              a.enableVirtualKeyboard = a.enableVirtualKeyboard ?? !0;
          }
        else
          "TEXTAREA" == e.tagName &&
            ((a.focusable = a.focusable ?? !0),
            (a.enableVirtualKeyboard = a.enableVirtualKeyboard ?? !0));
        const u = a["flow-children"];
        delete a["flow-children"];
        let {
            clickOnActivate: m,
            maintainX: g,
            maintainY: _,
            enableVirtualKeyboard: p,
            preferredChild: v,
            onOKActionDescription: f,
            onCancelActionDescription: C,
            onSecondaryActionDescription: A,
            onOptionsActionDescription: b,
            onMenuActionDescription: R,
            actionDescriptionMap: w,
            onOKButton: S,
            onCancelButton: F,
            onSecondaryButton: N,
            onOptionsButton: I,
            onMenuButton: T,
            onMoveUp: D,
            onMoveRight: E,
            onMoveDown: L,
            onMoveLeft: O,
            onGamepadDirection: B,
            bFocusRingRoot: M,
            type: P,
            ...G
          } = a,
          x = qe(S),
          k = qe(F),
          U = qe(N),
          W = qe(I),
          V = qe(T),
          H = qe(B);
        P || (P = "Panel"),
          "PanelGroup" == P &&
            ({ onOKButtonHandler: x, onCancelButtonHandler: k } = (function (
              e,
              t,
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
              { onOKButtonHandler: x, onCancelButtonHandler: k, navNode: r },
              G,
            )),
          x &&
            At(
              t[0],
              (function (e, t) {
                return c(e, "vgp_onok", h(t));
              })(t[0], x),
            ),
          k &&
            At(
              t[0],
              (function (e, t) {
                return c(e, "vgp_oncancel", h(t));
              })(t[0], k),
            ),
          U &&
            A &&
            At(
              t[0],
              (function (e, t) {
                return c(e, "vgp_onsecondaryaction", h(t));
              })(t[0], U),
            ),
          W &&
            b &&
            At(
              t[0],
              (function (e, t) {
                return c(e, "vgp_onoptions", h(t));
              })(t[0], W),
            ),
          V &&
            R &&
            At(
              t[0],
              (function (e, t) {
                return c(e, "vgp_onmenu", h(t));
              })(t[0], V),
            ),
          H && At(t[0], l(t[0], H));
        const K = (function (e, t, n, i) {
            const o = {};
            return (
              e && (o.onMoveUp = et(e)),
              t && (o.onMoveRight = et(t)),
              n && (o.onMoveDown = et(n)),
              i && (o.onMoveLeft = et(i)),
              o
            );
          })(D, E, L, O),
          $ = u
            ? (function (e) {
                switch (e) {
                  case "column":
                    return xe.COLUMN;
                  case "column-reverse":
                    return xe.COLUMN_REVERSE;
                  case "row":
                    return xe.ROW;
                  case "row-reverse":
                    return xe.ROW_REVERSE;
                  case "grid":
                    return xe.GRID;
                  default:
                    return xe.NONE;
                }
              })(u)
            : xe.NONE;
        $ != xe.NONE && (G.layout = $),
          g
            ? (G.navEntryPreferPosition = ke.MAINTAIN_X)
            : _
              ? (G.navEntryPreferPosition = ke.MAINTAIN_Y)
              : v && (G.navEntryPreferPosition = ke.PREFERRED_CHILD),
          m &&
            (!1 !== G.focusable && (G.focusable = !0),
            t.on("vgp_onok", "firstChild" === m ? nt : tt),
            At(e, () => {
              t.off("vgp_onok");
            })),
          p &&
            (t.on("vgp_onok.vkbindings", () => ct.ShowVirtualKeyboard()),
            t.on("click.vkbindings", () => ct.ShowVirtualKeyboard()),
            t.on("blur.vkbindings", () => {
              document.hasFocus() &&
                document.activeElement != e &&
                ct.HideVirtualKeyboard();
            }),
            At(e, () => {
              t.off(".vkbindings");
            })),
          G.focusable && void 0 === t.attr("tabIndex") && t.attr("tabIndex", 0),
          G.focusable &&
            r.FocusCallbackList.Register((t) =>
              (function (e, t) {
                t ? s()(e).addClass("gpfocus") : s()(e).removeClass("gpfocus");
              })(e, t),
            ),
          M &&
            ((r.m_FocusRing = je(t)),
            "static" == t.css("position") && t.css("position", "relative"));
        const z = {
          fnCanTakeFocus: Ft,
          actionDescriptionMap: d({
            onOKActionDescription: f,
            onCancelActionDescription: C,
            onSecondaryActionDescription: A,
            onOptionsActionDescription: b,
            onMenuActionDescription: R,
            actionDescriptionMap: w,
          }),
          ...K,
          ...G,
        };
        return r.SetProperties(z), Ct(e, r), r;
      }
      function It(e) {
        const t = e.parentElement;
        if (!t) return console.error("no parent"), null;
        let n = bt(t);
        if (n == at.Unknown)
          n = (function (e) {
            let t = !1;
            switch (e.tagName) {
              case "A":
              case "INPUT":
              case "TEXTAREA":
                t = !0;
                break;
              case "DIV":
                if (de(e) != xe.COLUMN) t = !0;
                else {
                  const n = de(e.parentElement);
                  (n != xe.ROW && n != xe.ROW_REVERSE) || (t = !0);
                }
            }
            let n = at.NotNeeded;
            return t ? (n = Nt(e)) : Ct(e, n), n;
          })(t);
        else if (n == at.InReactTree) return n;
        return n instanceof Ve ? n : It(t);
      }
      function Tt(e) {
        mt && (mt(), (mt = null), (dt = null)),
          e && s()(e).removeAttr("data-nav-modal");
      }
      const Dt = {
        InstrumentFocusElements: wt,
        ForceUpdateFocusElements: St,
        GPNavFocusChild: function (e) {
          let t = bt(e[0]);
          return (
            t instanceof Ve || (t = It(e[0])),
            t instanceof Ve && t.BTakeFocus(i.APPLICATION),
            !1
          );
        },
        GPOnShowingModalWindow: function (e) {
          const t = e;
          return s()(t).attr("data-nav-modal", "true"), St(t), () => Tt(t);
        },
        GPShowVirtualKeyboard: function (e = !0) {
          e ? ct.ShowVirtualKeyboard() : ct.HideVirtualKeyboard();
        },
        GPNavUpdateActionDescriptions: function (e, t) {
          const n = bt(e);
          n instanceof Ve &&
            n.SetProperties({ ...n.m_Properties, actionDescriptionMap: d(t) });
        },
      };
    },
    973: (e, t, n) => {
      "use strict";
      n.d(t, { Vp: () => r, n4: () => a });
      var i = n(629),
        o = n(608),
        s = n(335);
      class r {
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
      (0, i.Cg)([o.o], r.prototype, "OnMessage", null);
      class a {
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
      (0, i.Cg)([o.o], a.prototype, "OnMessage", null);
    },
    335: (e, t, n) => {
      "use strict";
      n.d(t, { T: () => i, h: () => o });
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
  },
]);

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunklegacy_web = self.webpackChunklegacy_web || []).push([
  [511],
  {
    908: (e) => {
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
    948: (e, t, n) => {
      "use strict";
      n.d(t, { Pf: () => r, y5: () => a });
      var i = n(556),
        o = n(254),
        s = n(575);
      class r {
        constructor() {
          (this.m_fnCallback = void 0),
            SteamClient.BrowserView.RegisterForMessageFromParent(
              this.OnMessage,
            );
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
                1 == e.bPinned,
                1 == e.bShowPinnedView,
              );
            } catch (e) {}
          }
        }
      }
      (0, i.gn)([o.a], r.prototype, "OnMessage", null);
      class a {
        constructor(e) {
          (this.m_fnCallback = void 0),
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
    575: (e, t, n) => {
      "use strict";
      n.d(t, { i: () => o, l: () => i });
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
    358: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { InitializeGamepadNavigation: () => vt });
      var i,
        o = n(556),
        s = n(311),
        r = n.n(s),
        a = n(879);
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
        return c(e, "vgp_ondirection", h(t));
      }
      function d(e, t, n) {
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
      var v = n(254),
        g = n(575),
        _ = n(443),
        p = n(948);
      class f {
        constructor(e) {
          (this.m_bIsGamepadInputExternallyControlled = !1),
            (this.m_NavigationController = e),
            (0, _.U5)("BrowserView.RegisterForMessageFromParent") &&
            (0, _.U5)("BrowserView.PostMessageToParent")
              ? ((this.m_bIsGamepadInputExternallyControlled = !0),
                (this.m_postMessage = new p.Pf()))
              : ((this.m_bIsGamepadInputExternallyControlled =
                  window.top != window.self),
                (this.m_postMessage = new p.y5(window.top))),
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
                e.data.details,
              );
          }
        }
        SendGameInputState(e) {
          let t = g.i.Basic;
          window.bSupportsGamepadUI && (t = g.i.Full),
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
      function A(e) {
        return null != e && void 0 !== e.focus;
      }
      function C(e) {
        let t;
        return e && (t = e.ownerDocument.defaultView), t;
      }
      (0, o.gn)([v.a], f.prototype, "OnFocusChanged", null),
        (0, o.gn)([v.a], f.prototype, "OnMessage", null),
        (0, o.gn)([v.a], f.prototype, "PostPageUnloading", null);
      function b(e, t) {
        let n = null == e ? void 0 : e.parentElement;
        for (; n; ) {
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
          n = n.parentElement;
        }
        return A(n) ? n : null;
      }
      function w(e, t) {
        if (!("ownerDocument" in e)) return !0;
        const n = e.ownerDocument.defaultView.getComputedStyle(e),
          i = "x" === t ? n.overflowX : n.overflowY;
        return "auto" === i || "scroll" === i;
      }
      function S(e, t, n) {
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
            i.nodeType === Node.ELEMENT_NODE && (null == n || n(i));
          }
        }
      }
      function F(e, t, n) {
        return null == e || isNaN(e) ? e : Math.max(t, Math.min(n, e));
      }
      function N() {
        return !!window.document;
      }
      let R;
      function I() {
        if (!N()) return R || (R = D()), R;
        let e = (function (e) {
          if (!N() || !window.document.cookie) return null;
          const t = document.cookie.match("(^|; )" + e + "=([^;]*)");
          return t && t[2] ? decodeURIComponent(t[2]) : null;
        })("sessionid");
        return e || (e = D()), e;
      }
      function D() {
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
            if (!N()) return;
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
      const T = {
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
      };
      class E extends a.oH {
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
          return "linux" === T.PLATFORM && e.key.length > 1
            ? e.key || e.code
            : e.code || e.key;
        }
        BShouldSwallowEventForTextInputWorkaround(e) {
          var t, n, i, o, s, r, a;
          if (
            !(
              A(e.target) &&
              ("INPUT" === e.target.nodeName ||
                "TEXTAREA" === e.target.nodeName ||
                e.target.hasAttribute("contenteditable"))
            )
          )
            return !1;
          if (e.target.hasAttribute("contenteditable")) return !0;
          const l = this.GetKeycodeFromEvent(e);
          let c = e.target;
          const u = Array.from(
            c.ownerDocument.getElementsByClassName("gpfocus"),
          ).some((e) =>
            Array.from(e.classList).some((e) => e.includes("virtualkeyboard")),
          );
          switch (l) {
            case "ArrowUp": {
              if (u) return !0;
              let n = null == c ? void 0 : c.value.indexOf("\n");
              return (
                "TEXTAREA" === e.target.nodeName &&
                n >= 0 &&
                n <
                  (null !== (t = null == c ? void 0 : c.selectionStart) &&
                  void 0 !== t
                    ? t
                    : 0)
              );
            }
            case "ArrowDown": {
              if (u) return !0;
              let t = null == c ? void 0 : c.value.lastIndexOf("\n");
              return (
                "TEXTAREA" === e.target.nodeName &&
                t >= 0 &&
                t >=
                  (null !== (n = null == c ? void 0 : c.selectionStart) &&
                  void 0 !== n
                    ? n
                    : 0) &&
                (null !== (i = null == c ? void 0 : c.selectionEnd) &&
                void 0 !== i
                  ? i
                  : 0) < (null == c ? void 0 : c.value.length)
              );
            }
            case "ArrowLeft":
              return (
                !!u ||
                ((null !== (o = null == c ? void 0 : c.selectionStart) &&
                void 0 !== o
                  ? o
                  : 0) > 0 &&
                  (null !== (s = null == c ? void 0 : c.selectionEnd) &&
                  void 0 !== s
                    ? s
                    : 0) > 0)
              );
            case "ArrowRight":
              return (
                !!u ||
                ((null !== (r = null == c ? void 0 : c.selectionStart) &&
                void 0 !== r
                  ? r
                  : 0) < (null == c ? void 0 : c.value.length) &&
                  (null !== (a = null == c ? void 0 : c.selectionEnd) &&
                  void 0 !== a
                    ? a
                    : 0) < (null == c ? void 0 : c.value.length))
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
      (0, o.gn)([v.a], E.prototype, "OnKeyDown", null),
        (0, o.gn)([v.a], E.prototype, "OnKeyUp", null),
        (0, o.gn)([v.a], E.prototype, "Reset", null);
      const O = { x: "y", y: "x" };
      function y(e, t, ...n) {
        console.assert
          ? 0 == n.length
            ? console.assert(!!e, t)
            : console.assert(!!e, t, ...n)
          : e || console.warn(t, ...n);
      }
      var L = n(530);
      class B {
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
        constructor(e, t) {
          (this.m_fnIdGenerator = void 0),
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
          var n, i;
          const o = k.Get().IsDebugLogEnabled(this.m_sName);
          if (e == G.Debug && !o) return;
          let s = this.m_sName;
          const r =
            null !==
              (i =
                null === (n = this.m_fnIdGenerator) || void 0 === n
                  ? void 0
                  : n.call(this)) && void 0 !== i
              ? i
              : null;
          null != r && (s += " (" + r + ")");
          V(e, o, k.Get().IncludeBacktraceInLog, s, this.m_sName, ...t);
        }
      }
      (0, o.gn)([v.a], x.prototype, "Debug", null),
        (0, o.gn)([v.a], x.prototype, "Info", null),
        (0, o.gn)([v.a], x.prototype, "Warning", null),
        (0, o.gn)([v.a], x.prototype, "Error", null),
        (0, o.gn)([v.a], x.prototype, "Assert", null);
      class k {
        constructor() {
          (this.m_Storage = null),
            (this.m_setEnabledDebugLogs = new Set()),
            (this.m_bIncludeBacktraceInLog = !1),
            (this.m_SettingsChangedCallback = new L.pB()),
            (this.m_bLoading = !1),
            (this.m_Storage = new M()),
            (this.m_rgLogNames = P.slice()),
            this.LoadSettings();
        }
        LogAsLogManager(...e) {
          V(
            G.Info,
            !0,
            this.IncludeBacktraceInLog,
            "LogManager",
            "LogManager",
            ...e,
          );
        }
        LoadSettings() {
          var e, t;
          return (0, o.mG)(this, void 0, void 0, function* () {
            (this.m_bLoading = !0),
              (this.m_bIncludeBacktraceInLog = !!(yield null ===
                (e = this.m_Storage) || void 0 === e
                ? void 0
                : e.GetObject(k.k_IncludeBacktraceInLog_StorageKey)));
            const n = yield null === (t = this.m_Storage) || void 0 === t
              ? void 0
              : t.GetObject(k.k_EnabledLogNames_StorageKey);
            Array.isArray(n) &&
              ((this.m_setEnabledDebugLogs = new Set(n)),
              this.LogAsLogManager(
                "Loaded debug enabled log names. Will print log messages for:",
                Array.from(this.m_setEnabledDebugLogs),
              )),
              (this.m_bLoading = !1),
              this.m_SettingsChangedCallback.Dispatch();
          });
        }
        SaveSettings() {
          var e, t;
          return (0, o.mG)(this, void 0, void 0, function* () {
            yield null === (e = this.m_Storage) || void 0 === e
              ? void 0
              : e.StoreObject(
                  k.k_EnabledLogNames_StorageKey,
                  Array.from(this.m_setEnabledDebugLogs),
                ),
              yield null === (t = this.m_Storage) || void 0 === t
                ? void 0
                : t.StoreObject(
                    k.k_IncludeBacktraceInLog_StorageKey,
                    this.m_bIncludeBacktraceInLog,
                  ),
              this.LogAsLogManager(
                "Saved enabled debug log names. Will print log messages for:",
                Array.from(this.m_setEnabledDebugLogs),
              );
          });
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
            (this.m_setEnabledDebugLogs = new Set(e ? P : [])),
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
      function V(e, t, n, i, o, ...s) {
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
          a = (299 * (l = r)[0] + 587 * l[1] + 114 * l[2]) / 1e3 >= 128;
        var l;
        let c = i;
        n &&
          (c =
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
            c);
        const u =
            s.length >= 1 && "string" == typeof s[0] && s[0].includes("%c"),
          d = u && s.shift();
        let h;
        if (
          ((h = t
            ? [
                `%c${c}%c:${u ? " %c" + d : ""}`,
                `color: ${a ? "black" : "white"}; background: rgb(${r.join(",")}); padding: 0 1ch; border-radius: 3px;`,
                "color: transparent; margin-right: -1ch",
                ...(u ? [""] : []),
                ...s,
              ]
            : s),
          n)
        )
          console.groupCollapsed(...h),
            console.trace("Callstack"),
            console.groupEnd();
        else
          switch (e) {
            case G.Debug:
            case G.Info:
              console.log(...h);
              break;
            case G.Warning:
              console.warn(...h);
              break;
            case G.Error:
              console.clogerror
                ? console.clogerror(3, ...h)
                : console.error(...h);
          }
      }
      (k.k_EnabledLogNames_StorageKey = "EnabledWebLogs"),
        (k.k_IncludeBacktraceInLog_StorageKey = "IncludeBacktraceInLog"),
        (k.s_Singleton = null);
      const U = () => k.Get().LogNames.slice().sort(),
        W = (e, t) => {
          k.Get().IsLogName(e)
            ? k.Get().SetDebugLogEnabled(e, t)
            : console.warn(`No log named "${e}", available logs:`, U());
        };
      (window.DebugLogEnable = (...e) => e.forEach((e) => W(e, !0))),
        (window.DebugLogDisable = (...e) => e.forEach((e) => W(e, !1))),
        (window.DebugLogEnableAll = () => k.Get().SetAllDebugLogsEnabled(!0)),
        (window.DebugLogDisableAll = () => k.Get().SetAllDebugLogsEnabled(!1)),
        (window.DebugLogEnableBacktrace = () =>
          k.Get().SetIncludeBacktraceInLog(!0)),
        (window.DebugLogDisableBacktrace = () =>
          k.Get().SetIncludeBacktraceInLog(!1)),
        (window.DebugLogNames = U),
        (window.EnableSteamConsole = (e = !0) =>
          k.Get().SetDebugLogEnabled("SteamClient", e));
      class H {
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
          var n;
          const { sNavKey: i, iActiveChild: o, rgChildren: s } = t;
          if (
            (i && y(i == e.NavKey, "navkey mismatch"),
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
              t && H.RestoreSerializedNavNode(t, e);
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
              H.RestoreSerializedNavNode(t[r], s[a]), r++, a++;
            }
          }
        }
      }
      function K(e) {
        var t, n;
        const { root: i, bHadFocus: o } = e;
        let s = "ROOT",
          r = i;
        for (; r; ) {
          const e =
            -1 != r.iActiveChild
              ? null === (t = r.rgChildren) || void 0 === t
                ? void 0
                : t[r.iActiveChild]
              : null;
          e &&
            (s += `=> [${null !== (n = e.sNavKey) && void 0 !== n ? n : r.iActiveChild}]`),
            (r = e);
        }
        return o && (s += " (with focus)"), s;
      }
      function $(e) {
        return H.SerializeNavState(e, !0, !1);
      }
      function j(e, t, n = 0) {
        return H.RestoreSerializedNavState(e, t, n);
      }
      class Y extends H {
        constructor() {
          super(...arguments), (this.m_rgHistory = []);
        }
        PushState() {
          this.m_rgHistory.push(H.SerializeNavState(this.m_root));
        }
        PopState(e = 0) {
          this.m_rgHistory.length &&
            H.RestoreSerializedNavState(this.m_root, this.m_rgHistory.pop(), e);
        }
      }
      class X extends H {
        constructor() {
          super(...arguments), (this.m_mapHistory = new Map());
        }
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
      var z = n(527);
      const Q = new x("FocusNavigation").Debug,
        q = new x("GamepadEvents").Debug;
      class J {
        constructor(e, t, n) {
          (this.m_onActivateCallbacks = new L.pB()),
            (this.m_onDeactivateCallbacks = new L.pB()),
            (this.m_onActiveFocusStateChangedCallbacks = new L.pB()),
            (this.m_applyFocusClassesInDesktop = !1),
            (this.m_lastFocusNodeXMovement = new Z()),
            (this.m_lastFocusNodeYMovement = new Z()),
            (this.m_DeferredFocus = new ee(this)),
            (this.m_Controller = e),
            (this.m_context = t),
            (this.m_ID = n),
            (this.m_Root = new We(this, null, null)),
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
          return new We(this, e, t);
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
                ? ((i = !0), (n = d(e.target, o, e.detail)))
                : -1 !== t.indexOf(e.detail.button) &&
                  ((i = !0), (n = d(e.target, "vgp_ondirection", e.detail))),
              { bUnhandled: n, bHadLogicalEventMapping: i }
            );
          })(e);
          return (
            q(
              `Logical gamepad Event fired: ${a.eV[e.detail.button]}, had logical event: ${n}, was handled: ${!t}`,
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
          Q(
            `Transfer focus in ${this.id}, source: ${e && i[e]}, from/to:`,
            null == o ? void 0 : o.m_element,
            null == t ? void 0 : t.m_element,
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
              (d(o.Element, "vgp_onblur", s),
              !o.m_FocusRing ||
                (t && o.m_FocusRing == t.m_FocusRing) ||
                o.m_FocusRing.OnBlur(e, o, t)),
            t &&
              (d(t.Element, "vgp_onfocus", s),
              t.m_FocusRing &&
                (o && t.m_FocusRing == o.m_FocusRing
                  ? t.m_FocusRing.OnFocusChange(e, o, t)
                  : t.m_FocusRing.OnFocus(e, t, o))),
            (this.m_lastFocusNode = t),
            (this.m_bWasActiveForLastFocusChange = this.BIsActive()),
            "x" == n
              ? this.m_lastFocusNodeXMovement.SetNode(
                  null == t ? void 0 : t.Element,
                )
              : "y" == n
                ? this.m_lastFocusNodeYMovement.SetNode(
                    null == t ? void 0 : t.Element,
                  )
                : (this.m_lastFocusNodeXMovement.Reset(),
                  this.m_lastFocusNodeYMovement.Reset()),
            this.m_context.OnFocusChangeComplete(a);
        }
      }
      class Z {
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
      class ee {
        constructor(e) {
          (this.m_schExecuteQueuedFocus = new L.Ar()),
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
              Q(
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
        constructor(e, t, n) {
          (this.m_bActive = !1),
            (this.m_rgGamepadNavigationTrees = []),
            (this.m_LastActiveNavTree = null),
            (this.m_LastActiveFocusNavTree = null),
            (this.m_bMounted = !0),
            (this.m_schDeferredActivate = new L.Ar()),
            (this.m_FocusChangedCallbacks = new L.pB()),
            (this.m_ActiveCallbacks = new L.pB()),
            (this.m_bIsGamepadInputSuppressed = !1),
            (this.m_iFocusChangeStack = 0),
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
          var e;
          for (
            let t = this.m_rgGamepadNavigationTrees.length - 1;
            t >= 0;
            t--
          ) {
            const n = this.m_rgGamepadNavigationTrees[t];
            if (
              null === (e = n.Window) || void 0 === e
                ? void 0
                : e.document.hasFocus()
            )
              return n;
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
            var i;
            const o = this.m_bActive != e;
            (this.m_bActive = e),
              e
                ? ((this.m_activeWindow = t),
                  (this.m_activeBrowserView = n),
                  this.m_controller.OnContextActivated(this))
                : ((this.m_activeBrowserView = void 0),
                  this.m_controller.OnContextDeactivated(this, !1)),
              o &&
                ((this.m_bActive = e),
                this.m_ActiveCallbacks.Dispatch(e),
                null === (i = this.m_LastActiveFocusNavTree) ||
                  void 0 === i ||
                  i.OnActiveStateChangedCallbacks.Dispatch(
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
          var t;
          this.m_activeWindow == e
            ? (te(`${this.LogName(e)} Deactivate context for window`),
              this.SetActive(!1, e))
            : te(
                `${this.LogName(e)} Blurred, but not deactivating because (${null === (t = this.m_activeWindow) || void 0 === t ? void 0 : t.name}) has focus.`,
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
          n && z.Zf(this.m_rgGamepadNavigationTrees, n),
            e ||
              (this.m_rgGamepadNavigationTrees.length &&
                (e =
                  this.m_rgGamepadNavigationTrees[
                    this.m_rgGamepadNavigationTrees.length - 1
                  ]));
          const i = this.m_LastActiveFocusNavTree == e;
          e && z.Zf(this.m_rgGamepadNavigationTrees, e),
            (this.m_LastActiveNavTree = e),
            (e && e.BUseVirtualFocus()) || (this.m_LastActiveFocusNavTree = e),
            te(
              `${this.LogName(null == e ? void 0 : e.Window)} Move from nav tree ${null == n ? void 0 : n.id} to nav tree ${null == e ? void 0 : e.id} ${t ? "taking focus" : "no focus"}`,
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
            z.Zf(this.m_rgGamepadNavigationTrees, e),
            this.m_rgGamepadNavigationTrees.unshift(e);
        }
        UnregisterGamepadNavigationTree(e) {
          z.Zf(this.m_rgGamepadNavigationTrees, e),
            te(
              `(${this.m_rootWindow.name}) Unregister tree ${null == e ? void 0 : e.id} ${this.m_LastActiveFocusNavTree == e ? "(was active)" : "(inactive)"}`,
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
              : this.m_ActiveFocusChange &&
                !this.m_ActiveFocusChange.from &&
                n &&
                (this.m_ActiveFocusChange.from = n),
            this.m_iFocusChangeStack++
          );
        }
        OnFocusChangeComplete(e) {
          var t;
          if (
            (this.m_iFocusChangeStack--,
            y(e == this.m_iFocusChangeStack, "out of order focus pop"),
            0 == this.m_iFocusChangeStack)
          ) {
            const {
              source: e,
              from: n,
              to: i,
            } = null !== (t = this.m_ActiveFocusChange) && void 0 !== t
              ? t
              : {};
            this.m_FocusChangedCallbacks.Dispatch(e, n, i);
          }
        }
      }
      const ie = new x("FocusNavigation").Debug,
        oe = new x("FocusNavigation").Assert,
        se = "focus-nav-show-debug-focus-ring";
      function re(e, t) {
        return (
          (null == e ? void 0 : e.eActivationSourceType) ===
            (null == t ? void 0 : t.eActivationSourceType) &&
          (null == e ? void 0 : e.nActiveGamepadIndex) ===
            (null == t ? void 0 : t.nActiveGamepadIndex) &&
          (null == e ? void 0 : e.nLastActiveGamepadIndex) ===
            (null == t ? void 0 : t.nLastActiveGamepadIndex)
        );
      }
      class ae {
        constructor() {
          (this.m_rgGamepadInputSources = []),
            (this.m_rgAllContexts = []),
            (this.m_bGlobalEventsInitialized = !1),
            (this.m_fnCatchAllGamepadInput = null),
            (this.m_UnhandledButtonEventsCallbacks = new L.pB()),
            (this.m_navigationSource = (0, L.vq)(
              {
                eActivationSourceType: a.Rr.UNKNOWN,
                nActiveGamepadIndex: -1,
                nLastActiveGamepadIndex: -1,
              },
              re,
            )),
            (this.m_navigationSourceSupportsFocus = (0, L.km)(
              this.m_navigationSource,
              (e) =>
                (null == e ? void 0 : e.eActivationSourceType) ===
                  a.Rr.GAMEPAD ||
                (null == e ? void 0 : e.eActivationSourceType) ===
                  a.Rr.KEYBOARD ||
                (null == e ? void 0 : e.eActivationSourceType) === a.Rr.UNKNOWN,
            )),
            (this.m_bShowDebugFocusRing = (0, L.vq)(!1)),
            (this.m_bRestoringHistory = !1),
            (this.m_fnGamepadEventUpdateBatcher = (e) => e()),
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
          var e;
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
                null ===
                  (e = this.m_LastActiveContext.m_LastActiveFocusNavTree) ||
                  void 0 === e
                  ? void 0
                  : e.Window,
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
          let t = new L.Hf();
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
          this.OnButtonDown(e, a.Rr.UNKNOWN, -1);
        }
        DispatchVirtualButtonClick(e, t) {
          var n;
          let i;
          t &&
            (i =
              null !== (n = this.GetActiveContext()) && void 0 !== n
                ? n
                : this.FindAnActiveContext()),
            this.OnButtonDown(e, a.Rr.GAMEPAD, -1, void 0, t, i, !0),
            this.OnButtonUp(e, a.Rr.GAMEPAD, -1, void 0, t, i, !0);
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
          var n, o, s, r, l;
          let c = this.GetActiveContext();
          !c && t && (c = this.FindAnActiveContext());
          let u =
            null === (n = null == c ? void 0 : c.ActiveWindow) || void 0 === n
              ? void 0
              : n.document.activeElement;
          if (null == c ? void 0 : c.m_LastActiveNavTree) {
            let n =
              null ===
                (s =
                  null === (o = this.m_navigationSource) || void 0 === o
                    ? void 0
                    : o.Value) || void 0 === s
                ? void 0
                : s.eActivationSourceType;
            if (
              !(
                c.m_LastActiveNavTree.GetLastFocusedNode() ||
                (n != a.Rr.GAMEPAD && n != a.Rr.KEYBOARD) ||
                (t && c.m_LastActiveNavTree.TakeFocus(i.GAMEPAD, !0),
                this.BGlobalGamepadButton(e))
              )
            )
              return [void 0, c];
            c.m_LastActiveNavTree.GetLastFocusedNode() &&
              (u =
                null ===
                  (l =
                    null === (r = c.m_LastActiveNavTree) || void 0 === r
                      ? void 0
                      : r.GetLastFocusedNode()) || void 0 === l
                  ? void 0
                  : l.Element);
          }
          return [u, c];
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
            e != a.Rr.MOUSE &&
              (0, _.U5)("Browser.HideCursorUntilMouseEvent") &&
              SteamClient.Browser.HideCursorUntilMouseEvent();
        }
        OnButtonActionInternal(e, t, n, i, o, s, r, l) {
          var c, u;
          if (this.m_fnCatchAllGamepadInput && this.m_fnCatchAllGamepadInput(t))
            return void (
              e &&
              ie(
                "Ignoring button press - gamepad input is suppressed by parent window",
              )
            );
          oe(
            !!s == !!r,
            "Must set both overrideContext and overrideElement or neither",
          );
          let h = s,
            m = r;
          (null != h && null != m) || ([h, m] = this.GetEventTarget(t, !0)),
            !(null == m ? void 0 : m.BIsGamepadInputSuppressed()) || l
              ? (this.ChangeNavigationSource(n, i),
                e &&
                  ie(
                    `Firing ${a.eV[t]} in tree ${null === (u = null == m ? void 0 : m.m_LastActiveNavTree) || void 0 === u ? void 0 : u.id} at `,
                    h,
                  ),
                this.BatchedUpdate(() =>
                  d(h, e ? "vgp_onbuttondown" : "vgp_onbuttonup", {
                    button: t,
                    source: n,
                    is_repeat: o,
                  }),
                ))
              : ie(
                  `Suppressing ${a.eV[t]} input on element ${null == h ? void 0 : h.className} because tree ${null === (c = null == m ? void 0 : m.m_LastActiveNavTree) || void 0 === c ? void 0 : c.id} has it disabled`,
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
                if (!A(e)) return !1;
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
              })(null == e ? void 0 : e.Element)
                ? e
                : null;
            null === (n = this.m_ActiveContext.m_LastActiveNavTree) ||
              void 0 === n ||
              n.TransferFocus(i.BROWSER, t);
          }
        }
        NewGamepadNavigationTree(e, t) {
          return new J(this, e, t);
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
          var o, s;
          const r = e.WindowContext;
          r != this.m_ActiveContext &&
            ie(`(${r.LogName(e.Window)}) Focus event in inactive window`),
            e != r.m_LastActiveFocusNavTree &&
              e != r.m_LastActiveNavTree &&
              ((null === (o = r.m_LastActiveFocusNavTree) || void 0 === o
                ? void 0
                : o.GetParentEmbeddedNavTree()) == e ||
              e.GetParentEmbeddedNavTree() == r.m_LastActiveFocusNavTree
                ? (ie(
                    `There was a focus event in ${e.id}, allowing focus transfer to activate nav tree due to parent embedded relationship`,
                  ),
                  e.Activate())
                : ie(
                    `There was a focus event in ${e.id}, but the active nav tree is ${null === (s = r.m_LastActiveFocusNavTree) || void 0 === s ? void 0 : s.id} so it is being ignored.  Source: ${t && i[t]}.`,
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
                  : t.m_LastActiveFocusNavTree),
          );
        }
        IsActiveNavTree(e) {
          var t;
          return Boolean(
            e &&
              e ==
                (null === (t = this.m_ActiveContext) || void 0 === t
                  ? void 0
                  : t.m_LastActiveNavTree),
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
          var e, t;
          window.focus();
          let n =
            (null === (e = this.m_ActiveContext) || void 0 === e
              ? void 0
              : e.m_LastActiveFocusNavTree) ||
            (null === (t = this.m_ActiveContext) || void 0 === t
              ? void 0
              : t.m_LastActiveNavTree);
          n && n.TakeFocus(i.APPLICATION);
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
            z.Zf(this.m_rgAllContexts, e)),
            this.m_ActiveContext == e && (this.m_ActiveContext = void 0),
            this.UpdateRepeatAllowed();
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
        UpdateRepeatAllowed() {
          var e, t;
          const n =
            null !==
              (t =
                null === (e = this.m_ActiveContext) || void 0 === e
                  ? void 0
                  : e.BIsActive()) &&
            void 0 !== t &&
            t;
          for (const e of this.m_rgGamepadInputSources) e.SetRepeatAllowed(n);
        }
      }
      (0, o.gn)([v.a], ae.prototype, "OnButtonDown", null),
        (0, o.gn)([v.a], ae.prototype, "OnButtonUp", null),
        (0, o.gn)([v.a], ae.prototype, "OnNavigationTypeChange", null),
        (0, o.gn)([v.a], ae.prototype, "UpdateRepeatAllowed", null);
      class le {
        constructor(e) {
          this.m_node = e;
        }
        TakeFocus(e) {
          return this.m_node.BTakeFocus(e ? i.GAMEPAD : i.APPLICATION, e);
        }
        ParentTakeFocus(e) {
          var t;
          null === (t = this.m_node.Parent) ||
            void 0 === t ||
            t.BTakeFocus(e ? i.GAMEPAD : i.APPLICATION, e);
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
          return j(this.m_node, e, t);
        }
        NavTree() {
          return this.m_node.Tree;
        }
        Node() {
          return this.m_node;
        }
      }
      function ce(e, t, n, i = 0.001) {
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
      function de(e, t, n) {
        const i = t[e],
          o = (function (e, t) {
            return "x" == e
              ? { min: t.x, max: t.x + t.width }
              : { min: t.y, max: t.y + t.height };
          })(e, n);
        return i < o.min ? o.min - i : i > o.max ? i - o.max : 0;
      }
      function he(e) {
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
      function ve(e, t, n) {
        var i;
        const o = [],
          [s, r] = e.GetChildren(),
          a = e.GetActiveChild();
        let l;
        const c = a
          ? null === (i = a.Element) || void 0 === i
            ? void 0
            : i.getBoundingClientRect()
          : null;
        if (a) {
          const e = pe(a, t, n);
          if (
            e &&
            !e.offScreen &&
            ((l = ge(a, e, e.overlap, n)), l && !l.visibility.offScreen)
          )
            return l;
          e && o.push({ child: a, visibility: e });
        }
        const u = n || c;
        for (let e = 0; e < s.length; e++) {
          const n = s[e];
          if (n == a) continue;
          const i = pe(n, t, null != u ? u : void 0);
          i && o.push({ child: n, visibility: i });
        }
        let d;
        o.sort(_e);
        for (const e of o) {
          const { child: n, visibility: i } = e;
          if (i.offScreen && d) {
            if (!d.visibility.offScreen) break;
            if (i.distance && i.distance > d.visibility.distance) break;
          }
          const o =
            n == a ? l : ge(n, i, i.overlap || t, null != u ? u : void 0);
          o && (!d || _e(o, d) < 0) && (d = o);
        }
        return d;
      }
      function ge(e, t, n, i) {
        switch (e.GetFocusable()) {
          case "none":
            return;
          case "children":
            return ve(e, t.overlap || n, i);
          case "self":
            return { child: e, visibility: t };
        }
      }
      function _e(e, t) {
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
      function pe(e, t, n) {
        var i;
        const o =
            null === (i = e.Element) || void 0 === i
              ? void 0
              : i.getBoundingClientRect(),
          s = e.GetFocusable();
        let r;
        if ("none" == s || !o || !t) return null;
        if ("self" == s) {
          if (
            o.top < t.top ||
            o.right > t.right ||
            o.bottom > t.bottom ||
            o.left < t.left
          ) {
            const e = o.top + o.height / 2,
              n = o.left + o.width / 2;
            if (e < t.top) return { offScreen: "top", distance: t.top - e };
            if (n > t.right)
              return { offScreen: "right", distance: n - t.right };
            if (e > t.bottom)
              return { offScreen: "bottom", distance: e - t.bottom };
            if (n < t.left) return { offScreen: "left", distance: t.left - n };
          }
          n &&
            (r = (function (e, t) {
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
            })(o, n));
        } else if ("children" == s) {
          const n = e.Element;
          if (!n) return null;
          if (n.scrollHeight > o.height || n.scrollWidth > o.width) {
            const e = n.ownerDocument.defaultView.getComputedStyle(n);
            if ("visible" == e.overflowX || "visible" == e.overflowY)
              return { overlap: t };
          }
          if (o.bottom < t.top)
            return { offScreen: "top", distance: t.top - o.bottom };
          if (o.left > t.right)
            return { offScreen: "right", distance: o.left - t.right };
          if (o.top > t.bottom)
            return { offScreen: "bottom", distance: o.top - t.bottom };
          if (o.right < t.left)
            return { offScreen: "left", distance: t.left - o.right };
        }
        return {
          overlap: {
            top: Math.max(o.top, t.top),
            right: Math.min(o.right, t.right),
            bottom: Math.min(o.bottom, t.bottom),
            left: Math.max(o.left, t.left),
          },
          distance: r,
        };
      }
      class fe {
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
      class Ae extends fe {
        constructor(e, t, n) {
          super(e, t), (this.m_fnCallback = n);
        }
        Update(e) {
          this.m_fnCallback(e);
        }
      }
      class Ce extends fe {
        constructor(e, t, n) {
          super("ownerDocument" in e ? C(e) : e, n),
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
      const be = new x("ScrollSnap").Debug;
      let we = !1;
      let Se;
      function Fe(e) {
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
      function Ne(e, t) {
        return "x" == t
          ? [e.left, e.right, e.right - e.left]
          : [e.top, e.bottom, e.bottom - e.top];
      }
      function Re(e, t, n, i) {
        let [o, s, r] = Ne(e, i),
          [a, l, c] = Ne(t, i),
          [u, d] = Ne(n, i);
        return o < a && s > l
          ? 0
          : (o < a && r <= c) || (s > l && r > c)
            ? o - a - u
            : (o < a && r > c) || (s > l && r <= c)
              ? s - l + d
              : 0;
      }
      function Ie(e) {
        return "auto" == e
          ? 0
          : e.endsWith("px")
            ? parseInt(e)
            : (console.log("Unsupported length", e), 0);
      }
      function De(e) {
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
      function Te(e, t) {
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
      function Oe(e, t, n, i, o) {
        be(
          "----------------------------------------------------------------------------------",
        ),
          be("Scrolling Into View:", t);
        let s = [],
          r = t,
          a = Fe(t),
          l = null != o ? o : Number.MAX_VALUE;
        for (; r; ) {
          let e = b(r);
          e || (e = C(r));
          let t = De(r),
            n = Te(e, Fe(e)),
            c = Me(e),
            u = { element: e, left: 0, top: 0 };
          if (
            (be(
              "Checking scroll div",
              e,
              `scroll y:${c.scrollTop} of ${c.MaxScrollTop()}, x:${c.scrollLeft} of ${c.MaxScrollLeft()}, adjusted =>`,
              n,
              "target => ",
              a,
            ),
            (i && "y" != i) ||
              !w(e, "y") ||
              ((u.top = Re(a, n, t, "y")),
              (u.top = F(u.top, -c.scrollTop, c.MaxScrollTop() - c.scrollTop)),
              o &&
                ((u.top = Math.min(l, Math.abs(u.top)) * (u.top < 0 ? -1 : 1)),
                (l -= Math.abs(u.top))),
              be(`- checked y: ${u.top}`)),
            (i && "x" != i) ||
              !w(e, "x") ||
              ((u.left = Re(a, n, t, "x")),
              (u.left = F(
                u.left,
                -c.scrollLeft,
                c.MaxScrollLeft() - c.scrollLeft,
              )),
              o &&
                ((u.left =
                  Math.min(l, Math.abs(u.left)) * (u.left < 0 ? -1 : 1)),
                (l -= Math.abs(u.left))),
              be(`- checked x: ${u.left}`)),
            s.push(u),
            o && !l)
          )
            break;
          if (!("ownerDocument" in e)) break;
          const d = window.getComputedStyle(e);
          if ("fixed" === d.position || "sticky" === d.position) break;
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
          if (Ee(e.left) && Ee(e.top)) continue;
          let t = Me(e.element),
            i = t.scrollTop + e.top,
            o = t.scrollLeft + e.left;
          (o = F(o, 0, t.MaxScrollLeft())),
            (i = F(i, 0, t.MaxScrollTop())),
            (Ee(t.scrollLeft - o) && Ee(t.scrollTop - i)) ||
              (t.scrollTo({ left: o, top: i, behavior: n }),
              c || (be("Scrolling:"), (c = !0)),
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
          top: s.scrollTop + (null != n ? n : 0),
          left: s.scrollLeft + (null != i ? i : 0),
          behavior: o,
        });
      }
      class Le {
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
          var t, n, i;
          if ("smooth" != (null == e ? void 0 : e.behavior))
            this.m_animation &&
              (this.m_animation.Cancel(), (this.m_animation = void 0)),
              this.m_window
                ? this.m_window.scrollTo(e)
                : null === (t = this.m_fnOriginalScrollTo) ||
                  void 0 === t ||
                  t.apply(this.m_element, [e]),
              this.ResetScrollState();
          else {
            const t =
                null !== (n = e.left) && void 0 !== n ? n : this.scrollLeft,
              o = null !== (i = e.top) && void 0 !== i ? i : this.scrollTop;
            let s = "sine";
            this.m_animation && (this.m_animation.Cancel(), (s = "linear"));
            if (
              Math.max(
                Math.abs(this.currentScrollTop - o),
                Math.abs(this.currentScrollLeft - t),
              ) > 0
            ) {
              const e = {
                msDuration: 200,
                timing: s,
                onComplete: this.ResetScrollState,
              };
              if (this.m_window) {
                const n = this.currentScrollLeft,
                  i = this.currentScrollTop;
                this.m_animation = new Ae(this.m_window, e, (e) => {
                  var s;
                  null === (s = this.m_window) ||
                    void 0 === s ||
                    s.scrollTo({
                      left: n + (t - n) * e,
                      top: i + (o - i) * e,
                      behavior: "auto",
                    });
                });
              } else
                (this.m_element.style.scrollSnapType = "initial"),
                  (this.m_animation = new Ce(
                    this.m_element,
                    { scrollTop: o, scrollLeft: t },
                    e,
                  ));
              (this.m_scrollLeftTarget = t),
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
      (0, o.gn)([v.a], Le.prototype, "ResetScrollState", null);
      const Be = new WeakMap();
      function Me(e) {
        let t = Be.get(e);
        return t || ((t = new Le(e)), Be.set(e, t)), t;
      }
      function Pe(e) {
        const t = Be.get(e);
        return t
          ? { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop }
          : { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
      }
      const Ge = new x("FocusNavigationMovement").Debug;
      var xe, ke, Ve, Ue;
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
        })(Ve || (Ve = {})),
        (function (e) {
          (e[(e.INVALID = 0)] = "INVALID"),
            (e[(e.FORWARD = 1)] = "FORWARD"),
            (e[(e.BACKWARD = 2)] = "BACKWARD");
        })(Ue || (Ue = {}));
      class We {
        constructor(e, t, n) {
          (this.m_rgChildren = []),
            (this.m_iLastActiveChildIndex = -1),
            (this.m_bChildrenSorted = !1),
            (this.m_bAutoFocusChild = !1),
            (this.m_bMounted = !1),
            (this.m_bFocused = !1),
            (this.m_FocusCallbackList = new L.pB()),
            (this.m_bFocusWithin = !1),
            (this.m_FocusWithinCallbackList = new L.pB()),
            (this.m_ActionDescriptionsChangedCallbackList = new L.pB()),
            (this.m_RetainFocusParent = null),
            (this.m_rgNavigationHandlers = []),
            (this.m_rgFocusHandlers = []),
            (this.m_Tree = e),
            (this.m_Parent = t),
            (this.m_FocusRing = n),
            (this.m_nDepth = t ? t.m_nDepth + 1 : 0);
        }
        CreateHandle() {
          return new le(this);
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
                  (e) => c.hasOwnProperty(e) && l[e] === c[e],
                )));
          var l, c;
          const u =
              null === (n = this.m_Properties) || void 0 === n
                ? void 0
                : n.retainFocus,
            d =
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
                  this.m_RetainFocusParent,
                ),
            this.m_Properties.noFocusRing && !d && this.BHasFocus()
              ? null === (s = this.m_FocusRing) ||
                void 0 === s ||
                s.OnBlur(i.APPLICATION, this, this)
              : !this.m_Properties.noFocusRing &&
                d &&
                this.BHasFocus() &&
                (null === (r = this.m_FocusRing) ||
                  void 0 === r ||
                  r.OnFocus(i.APPLICATION, this, this)),
            this.m_element && this.RegisterDOMEvents();
        }
        BWantsAutoFocus() {
          var e;
          return (
            (null === (e = this.m_Properties) || void 0 === e
              ? void 0
              : e.autoFocus) || this.m_bAutoFocusChild
          );
        }
        BWantsPreferredFocus() {
          var e;
          return null === (e = this.m_Properties) || void 0 === e
            ? void 0
            : e.preferredFocus;
        }
        BWantsFocusRing() {
          var e;
          return (
            !(null === (e = this.m_Properties) || void 0 === e
              ? void 0
              : e.noFocusRing) ||
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
              (y(
                !this.m_ActiveChild && this.BFocusWithin(),
                "Invalid focus state in AddChild",
              ),
              this.SetActiveChild(this.m_rgChildren.length - 1));
        }
        OnMount(e) {
          var t, n;
          (this.m_element = e),
            this.m_Parent
              ? this.m_Parent.AddChild(this)
              : y(this == this.m_Tree.Root, "Only root should have no parent"),
            (this.m_bMounted = !0),
            this.RegisterDOMEvents();
          const i =
              this.m_RetainFocusParent && this.m_RetainFocusParent.BHasFocus(),
            o =
              (null === (t = this.m_Properties) || void 0 === t
                ? void 0
                : t.autoFocus) || i;
          if (this.BWantsAutoFocus() || o) {
            let e = -1;
            this.m_rgChildren.length &&
              (this.EnsureChildrenSorted(),
              (e = this.m_rgChildren.findIndex((e) => e.BWantsAutoFocus()))),
              ((null === (n = this.m_Properties) || void 0 === n
                ? void 0
                : n.autoFocus) ||
                o ||
                -1 !== e) &&
                (this.SetActiveChild(e),
                !this.m_Parent || this.m_Parent.m_element
                  ? i
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
          var e;
          (null === (e = this.m_Properties) || void 0 === e
            ? void 0
            : e.retainFocus) &&
            this.PropagateRetainFocusParentToChildren(this.m_RetainFocusParent),
            (this.m_bMounted = !1);
          const t = this.Tree.DeferredFocus.BIsQueuedFocusNode(this);
          (this.m_bFocused || t) &&
            (Ge(
              `The focused node is unmounting, ${this.m_RetainFocusParent ? "will transfer to retain focus ancestor" : "will blur"}.`,
            ),
            t && this.Tree.DeferredFocus.RequestFocus(null),
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
          var e, t, n, i;
          !this.m_rgNavigationHandlers.length &&
            this.m_element &&
            (this.m_rgChildren.length >= 2 ||
              (null === (e = this.m_Properties) || void 0 === e
                ? void 0
                : e.layout) != xe.NONE ||
              this.m_Properties.onMoveUp ||
              this.m_Properties.onMoveRight ||
              this.m_Properties.onMoveDown ||
              this.m_Properties.onMoveLeft) &&
            this.m_rgNavigationHandlers.push(
              u(this.m_element, this.OnNavigationEvent),
            ),
            ((null === (t = this.m_Properties) || void 0 === t
              ? void 0
              : t.focusable) ||
              0 == this.m_rgChildren.length) &&
              (this.m_rgFocusHandlers.length ||
                (null === (n = this.m_element) ||
                  void 0 === n ||
                  n.addEventListener("focus", this.OnDOMFocus),
                null === (i = this.m_element) ||
                  void 0 === i ||
                  i.addEventListener("blur", this.OnDOMBlur),
                this.m_rgFocusHandlers.push(() => {
                  var e, t;
                  null === (e = this.m_element) ||
                    void 0 === e ||
                    e.removeEventListener("focus", this.OnDOMFocus),
                    null === (t = this.m_element) ||
                      void 0 === t ||
                      t.removeEventListener("blur", this.OnDOMBlur);
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
          this.m_bFocused || this.m_Tree.TransferFocus(i.BROWSER, this);
        }
        OnDOMBlur(e) {
          var t;
          this.m_bFocused &&
            (null === (t = this.m_element) || void 0 === t
              ? void 0
              : t.ownerDocument.hasFocus()) &&
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
            Ue.FORWARD,
            a.eV.INVALID,
          );
          return this.InternalFocusDescendant(t, e);
        }
        BFocusLastChild(e) {
          const t = this.FindNextFocusableChildInDirection(
            this.m_rgChildren.length,
            Ue.BACKWARD,
            a.eV.INVALID,
          );
          return this.InternalFocusDescendant(t, e);
        }
        FindFocusableDescendant(e, t) {
          var n, i, o, s;
          const r = me(e),
            { focusableIfNoChildren: a, childFocusDisabled: l } =
              null !== (n = this.m_Properties) && void 0 !== n ? n : {};
          if (l) return null;
          if (this.m_rgChildren.length) {
            this.EnsureChildrenSorted();
            const { navEntryPreferPosition: n, resetNavOnEntry: l } =
              null !== (i = this.m_Properties) && void 0 !== i ? i : {};
            let c,
              u = this.GetActiveChildIndex();
            if ((l && void 0 !== e && (u = -1), !this.IsValidChildIndex(u))) {
              const e = this.GetLayout();
              u =
                u >= this.m_rgChildren.length ||
                e == xe.ROW_REVERSE ||
                e == xe.COLUMN_REVERSE ||
                n == ke.LAST
                  ? this.m_rgChildren.length - 1
                  : 0;
            }
            if ((n == ke.MAINTAIN_X || n == ke.MAINTAIN_Y || t) && r) {
              let i, a;
              n == ke.MAINTAIN_X ? (i = "x") : n == ke.MAINTAIN_Y && (i = "y"),
                i == O[r] &&
                  (a =
                    null !==
                      (o = this.m_Tree.GetLastFocusedMovementRect(O[r])) &&
                    void 0 !== o
                      ? o
                      : null === (s = this.m_Tree.GetLastFocusedNode()) ||
                          void 0 === s
                        ? void 0
                        : s.GetBoundingRect()),
                Ge(
                  `Taking focus while preserving ${n && ke[n]} preserved: ${i} movement: ${r}, node:`,
                  a || t,
                );
              const l = this.ComputeRelativeDirection(e, xe.GRID);
              if (a || t) {
                const n = l == Ue.BACKWARD ? this.m_rgChildren.length - 1 : 0;
                c = this.FindClosestChildInNextAxiallyAlignedSet(
                  i || O[r],
                  l,
                  e,
                  a || t,
                  n,
                  this.m_rgChildren[n].GetBoundingRect(),
                );
              } else if (i != O[r]) {
                const t = l == Ue.BACKWARD ? this.m_rgChildren.length : -1;
                c = this.FindNextFocusableChildInDirection(t, l, e);
              }
            } else if (n == ke.PREFERRED_CHILD) {
              for (const t of this.m_rgChildren)
                if (
                  ((c = t.BWantsPreferredFocus()
                    ? t.FindFocusableNode(e)
                    : void 0),
                  c)
                )
                  return c;
            } else
              n == ke.LAST &&
                (c = this.FindNextFocusableChildInDirection(
                  u + 1,
                  Ue.BACKWARD,
                  e,
                ));
            return (
              c ||
                (c = this.FindNextFocusableChildInDirection(
                  u - 1,
                  Ue.FORWARD,
                  e,
                )),
              c ||
                (c = this.FindNextFocusableChildInDirection(u, Ue.BACKWARD, e)),
              c || (a ? this : null)
            );
          }
          return null;
        }
        BVisibleChildTakeFocus(e) {
          var t, n, i, o, s;
          const r =
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
            a = ve(this, {
              top: 0,
              left: 0,
              right: r.innerWidth,
              bottom: r.innerHeight,
            });
          return (
            Ge(
              `Focusing visible child, best child match is ${null === (s = null === (o = null == a ? void 0 : a.child) || void 0 === o ? void 0 : o.Element) || void 0 === s ? void 0 : s.className} - ${JSON.stringify(null == a ? void 0 : a.visibility)}`,
            ),
            !!a && a.child.BTakeFocus(e)
          );
        }
        GetLayout() {
          var e;
          if (
            null === (e = this.m_Properties) || void 0 === e ? void 0 : e.layout
          )
            return this.m_Properties.layout;
          if (this.m_rgChildren.length < 2) return xe.NONE;
          return he(this.m_element);
        }
        OnNavigationEvent(e) {
          var t, n;
          const i = e.detail.button;
          if (
            this.BTryInternalNavigation(
              i,
              null !== (t = e.detail.is_repeat) && void 0 !== t && t,
            )
          )
            return !0;
          const {
            onMoveUp: o,
            onMoveRight: s,
            onMoveDown: r,
            onMoveLeft: l,
          } = null !== (n = this.m_Properties) && void 0 !== n ? n : {};
          let c = !1;
          switch (i) {
            case a.eV.DIR_UP:
              o && (c = o(e.detail, this));
              break;
            case a.eV.DIR_RIGHT:
              s && (c = s(e.detail, this));
              break;
            case a.eV.DIR_DOWN:
              r && (c = r(e.detail, this));
              break;
            case a.eV.DIR_LEFT:
              l && (c = l(e.detail, this));
          }
          return c;
        }
        InternalFocusDescendant(e, t, n) {
          return !!e && (this.m_Tree.TransferFocus(t, e, me(n)), !0);
        }
        BTryInternalNavigation(e, t) {
          var n, o;
          const s = this.GetLayout();
          let r,
            l = this.ComputeRelativeDirection(e, s);
          if (
            (Ge(
              `Handling navigation event ${a.eV[e]} - ${xe[s]} - ${Ue[l]}`,
              this.m_element,
            ),
            l == Ue.INVALID)
          )
            return !1;
          if (
            (null === (n = this.m_Properties) || void 0 === n
              ? void 0
              : n.focusable) &&
            this.m_bFocused
          )
            return Ge("Skipping navigation within focused element"), !1;
          if ((this.EnsureChildrenSorted(!0), s == xe.GRID))
            r = this.FindNextFocusableChildInGrid(
              this.GetActiveChildIndex(),
              l,
              e,
            );
          else {
            let t = this.GetActiveChildIndex();
            this.IsValidChildIndex(t) ||
              (t = l == Ue.FORWARD ? -1 : this.m_rgChildren.length),
              (r = this.FindNextFocusableChildInDirection(t, l, e));
          }
          if (r) {
            const n = me(e);
            if (this.GetScrollIntoViewType() == Ve.NoTransformSparseContent) {
              const e =
                null === (o = r.Element) || void 0 === o
                  ? void 0
                  : o.ownerDocument.defaultView;
              if (e) {
                const i =
                    ("y" == n ? e.innerHeight : e.innerWidth) /
                    (t ? 4.5 : 3.33),
                  o = Fe(r.Element);
                if (
                  (o.top > e.innerHeight && o.bottom > e.innerHeight + i) ||
                  (o.bottom < 0 && o.top < -i) ||
                  (o.left > e.innerWidth && o.right > e.innerWidth + i) ||
                  (o.right < 0 && o.left < -i)
                )
                  return (
                    Ge(`Element too far away, scrolling ${i} on ${n} axis `),
                    Oe(r.Element, r.Element, "smooth", n, i),
                    !0
                  );
              }
            }
            return this.m_Tree.TransferFocus(i.GAMEPAD, r, n), !0;
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
              : Ve.Standard;
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
                case a.eV.DIR_LEFT:
                  return n ? Ue.FORWARD : Ue.BACKWARD;
                case a.eV.DIR_RIGHT:
                  return n ? Ue.BACKWARD : Ue.FORWARD;
                default:
                  return Ue.INVALID;
              }
            case xe.COLUMN:
            case xe.COLUMN_REVERSE:
              switch (e) {
                case a.eV.DIR_UP:
                  return n ? Ue.FORWARD : Ue.BACKWARD;
                case a.eV.DIR_DOWN:
                  return n ? Ue.BACKWARD : Ue.FORWARD;
                default:
                  return Ue.INVALID;
              }
            case xe.GRID:
              switch (e) {
                case a.eV.DIR_LEFT:
                case a.eV.DIR_UP:
                  return n ? Ue.FORWARD : Ue.BACKWARD;
                case a.eV.DIR_RIGHT:
                case a.eV.DIR_DOWN:
                  return n ? Ue.BACKWARD : Ue.FORWARD;
                default:
                  return Ue.INVALID;
              }
            default:
              return Ue.INVALID;
          }
        }
        AdvanceIndex(e, t) {
          return e + (t == Ue.FORWARD ? 1 : -1);
        }
        FindNextFocusableChildInDirection(e, t, n) {
          let i = t == Ue.FORWARD ? 1 : -1;
          for (let t = e + i; t >= 0 && t < this.m_rgChildren.length; t += i) {
            const e = this.m_rgChildren[t].FindFocusableNode(n);
            if (e) return e;
          }
          return null;
        }
        ScanChildren(e, t, n) {
          let i = t == Ue.FORWARD ? 1 : -1;
          for (let t = e; t >= 0 && t < this.m_rgChildren.length; t += i)
            if (n(this.m_rgChildren[t], t)) return t;
          return -1;
        }
        FindNextFocusableChildInGrid(e, t, n) {
          var i, o;
          const s = n == a.eV.DIR_UP || n == a.eV.DIR_DOWN,
            r = this.GetLastFocusElement();
          if (!r || r == this.m_element)
            return (
              y(
                !1,
                "No active child for grid navigation",
                this.m_iLastActiveChildIndex,
                this.m_rgChildren.length,
                r,
              ),
              this.FindFocusableDescendant(n)
            );
          const l = this.GetActiveDescendant().GetBoundingRect();
          if (n == a.eV.DIR_UP || n == a.eV.DIR_DOWN) {
            const e =
              null !== (i = this.m_Tree.GetLastFocusedMovementRect("x")) &&
              void 0 !== i
                ? i
                : null === (o = this.m_Tree.GetLastFocusedNode()) ||
                    void 0 === o
                  ? void 0
                  : o.GetBoundingRect();
            e && ((l.x = e.x), (l.width = e.width));
          }
          if (s) {
            let i = e;
            for (; -1 != i; ) {
              const e = this.ScanChildren(
                this.AdvanceIndex(i, t),
                t,
                (e) => !ce("y", l, e.GetBoundingRect()),
              );
              if (-1 != e) {
                const i = this.m_rgChildren[e].GetBoundingRect(),
                  o = this.FindClosestChildInNextAxiallyAlignedSet(
                    "x",
                    t,
                    n,
                    l,
                    e,
                    i,
                  );
                if (o) return o;
              }
              i = e;
            }
          } else {
            let i = t == Ue.FORWARD ? 1 : -1;
            for (
              let o = this.AdvanceIndex(e, t);
              o >= 0 && o < this.m_rgChildren.length;
              o += i
            ) {
              const e = this.m_rgChildren[o];
              if (!ce("y", l, e.GetBoundingRect())) return null;
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
          const a = { x: (l = i).x, y: l.y };
          var l;
          this.ScanChildren(o, t, (t) => {
            const n = t.GetBoundingRect();
            return (
              !!n &&
              (!(!s || ce(O[e], s, n)) ||
                (r.push({ child: t, overlap: ue(e, i, n), dist: de(e, a, n) }),
                !1))
            );
          }),
            t == Ue.BACKWARD && r.reverse(),
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
          e instanceof We
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
          var t;
          (this.m_RetainFocusParent = e),
            (null === (t = this.m_Properties) || void 0 === t
              ? void 0
              : t.retainFocus) || this.PropagateRetainFocusParentToChildren(e);
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
          var n;
          this.UpdateParentActiveChild(),
            this.m_Tree.BIsActiveFocus()
              ? (y(
                  !this.m_Tree.BUseVirtualFocus(),
                  "Virtual focus tree should not have browser focus",
                ),
                null === (n = this.m_element) ||
                  void 0 === n ||
                  n.focus({ preventScroll: !0 }))
              : this.m_Tree.BUseVirtualFocus() ||
                Ge(
                  `Didn't move focus to element as tree ${this.m_Tree.id} is not active focus tree`,
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
                    null === (i = null == n ? void 0 : n.m_Properties) ||
                    void 0 === i
                      ? void 0
                      : i.scrollIntoViewType;
                if (
                  (void 0 === a && (a = we ? Ve.NoTransform : Ve.Standard),
                  (null === (o = null == n ? void 0 : n.m_Properties) ||
                  void 0 === o
                    ? void 0
                    : o.fnScrollIntoViewHandler) &&
                    !1 !== n.m_Properties.fnScrollIntoViewHandler(e, t, n))
                )
                  continue;
                const l = n.m_element,
                  c =
                    a == Ve.NoTransform ||
                    a == Ve.NoTransformSparseContent ||
                    !s;
                if (t) {
                  const t = c ? Fe(l) : l.getBoundingClientRect();
                  let n = !1;
                  const i = Math.max(1.4 * (t.bottom - t.top), 40);
                  ((Se && performance.now() - Se < 500) ||
                    t.bottom < -i ||
                    t.top > window.innerHeight + i) &&
                    (n = !0);
                  let o = n ? "auto" : "smooth";
                  n && (Se = performance.now()),
                    e.Tree.Controller.BIsRestoringHistory() && (o = "auto"),
                    c
                      ? Oe(0, l, o)
                      : l.scrollIntoView({ behavior: o, block: "nearest" });
                } else
                  c
                    ? Oe(0, l, "auto")
                    : null == l ||
                      l.scrollIntoView({
                        behavior: "auto",
                        block: "nearest",
                        inline: "nearest",
                      });
              }
            })(this, t),
            this.m_Tree.OnChildActivated(e);
        }
      }
      (0, o.gn)([v.a], We.prototype, "OnDOMFocus", null),
        (0, o.gn)([v.a], We.prototype, "OnDOMBlur", null),
        (0, o.gn)([v.a], We.prototype, "OnNavigationEvent", null);
      class He extends We {
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
          var e;
          null === (e = this.m_wrappedTree) ||
            void 0 === e ||
            e.TransferFocus(i.APPLICATION, null);
        }
        OnWrappedTreeUnhandledButton(e) {
          var t;
          return (
            d(
              null === (t = this.m_Parent) || void 0 === t ? void 0 : t.Element,
              "vgp_onbuttondown",
              e.detail,
            ),
            !1
          );
        }
        SetDOMFocusAndScroll(e, t) {
          var n, i, o;
          this.UpdateParentActiveChild(),
            (null === (n = this.m_wrappedTree) || void 0 === n
              ? void 0
              : n.BIsActive()) ||
              (null === (i = this.m_wrappedTree) ||
                void 0 === i ||
                i.Activate(),
              null === (o = this.m_wrappedTree) ||
                void 0 === o ||
                o.TakeFocus(e));
        }
        SetProperties(e) {
          super.SetProperties(
            Object.assign(Object.assign({}, e), {
              noFocusRing: !0,
              focusable: !0,
            }),
          );
        }
      }
      (0, o.gn)([v.a], He.prototype, "OnWrappedTreeActivated", null),
        (0, o.gn)([v.a], He.prototype, "OnWrappedTreeDeactivated", null),
        (0, o.gn)([v.a], He.prototype, "OnWrappedTreeUnhandledButton", null);
      const Ke = "VirtualKeyboardMessage";
      function $e(e) {
        return e && e.type === Ke;
      }
      class je {
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
          const t = Object.assign({ type: "VirtualKeyboardMessage" }, e);
          (0, _.U5)("BrowserView.PostMessageToParent")
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
      (0, o.gn)([v.a], je.prototype, "ShowVirtualKeyboard", null),
        (0, o.gn)([v.a], je.prototype, "ShowModalKeyboard", null),
        (0, o.gn)([v.a], je.prototype, "HideVirtualKeyboard", null),
        (0, o.gn)([v.a], je.prototype, "OnBrowserViewMessage", null),
        (0, o.gn)([v.a], je.prototype, "OnMessage", null);
      (0, o.gn)(
        [v.a],
        class {
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
      var Ye = n(908),
        Xe = n.n(Ye);
      function ze(e) {
        let t = 0;
        e.children().each(function () {
          const e = r()(this),
            n = e.css("zIndex");
          "auto" === n
            ? e.css("zIndex", 0)
            : isNaN(parseInt(n)) || (t = Math.max(t, parseInt(n)));
        });
        const n = r()("<div/>", {
          style: `position: absolute; pointer-events: none; top: 0; left: 0; z-index: ${(t || 100) + 1}; width: 0; height: 0; padding: 0; margin: 0; background: none; overflow: visible; display: block;`,
        });
        let i = null,
          o = null,
          s = null,
          a = 0,
          l = 0,
          c = 0,
          u = 0;
        e.prepend(n);
        const d = (e) => {
            const t = e.GetBoundingRect(),
              i = n[0].getBoundingClientRect();
            return {
              left: t.x - i.x - 0,
              top: t.y - i.y - 0,
              height: t.height,
              width: t.width,
            };
          },
          h = (e) => {
            (a = e.left),
              (l = e.top),
              (c = e.height),
              (u = e.width),
              i.css({ left: a, top: l, height: c, width: u });
          },
          m = (e) => {
            if (e && e.BWantsFocusRing() && i) {
              let t = d(e);
              (t.left == a && t.top == l && t.height == c && t.width == u) ||
                h(t);
            }
          },
          v = (e) => {
            if (
              ((o = e),
              i && (i.remove(), (i = null)),
              s && (window.clearInterval(s), (s = null)),
              e && e.BWantsFocusRing())
            ) {
              i = r()("<div/>", {
                style: "position: absolute; pointer-events: none; ",
                class: Xe().FocusRing,
              });
              let t = d(e);
              h(t), n.append(i), (s = window.setInterval(() => m(e), 200));
            }
          };
        return {
          OnBlur: () => v(null),
          OnFocus: (e, t) => v(t),
          OnFocusChange: (e, t, n) => v(n),
          OnForceMeasureFocusRing: () => m(o),
        };
      }
      function Qe(e) {
        return !!e.is_repeat;
      }
      Object.seal({ onMoveUp: qe, onMoveDown: qe }),
        Object.seal({ onMoveRight: qe, onMoveLeft: qe });
      function qe(e, t) {
        if (e.is_repeat) return !1;
        const n = t.GetRelativeDirection(e.button);
        return n == Ue.FORWARD
          ? t.BFocusFirstChild(i.GAMEPAD)
          : n == Ue.BACKWARD && t.BFocusLastChild(i.GAMEPAD);
      }
      function Je(e) {
        return e ? Function("event", e) : null;
      }
      function Ze() {
        return !0;
      }
      function et(e) {
        return "BlockMovement" == e
          ? Ze
          : "RepeatNavigationBoundary" == e
            ? Qe
            : e
              ? Function("detail", e)
              : null;
      }
      function tt(e) {
        this.click(), e.stopPropagation();
      }
      function nt(e) {
        r()(this).find('a, input[type="checkbox"]')[0].click();
      }
      function it(e) {
        const t = e.currentTarget;
        if (!A(t)) return !1;
        const n = e.detail.is_repeat ? 4.5 : 3.33,
          i = "smooth",
          o = t.ownerDocument,
          s = o.defaultView;
        switch (e.detail.button) {
          case a.eV.DIR_UP:
            if (s.scrollY > 3)
              return ye(s, { top: -s.innerHeight / n, behavior: i }), !0;
            break;
          case a.eV.DIR_RIGHT:
            if (s.scrollX + s.innerWidth < o.body.clientWidth - 3)
              return ye(s, { left: s.innerWidth / n, behavior: i }), !0;
            break;
          case a.eV.DIR_DOWN:
            if (s.scrollY + s.innerHeight < o.body.clientHeight - 3)
              return ye(s, { top: s.innerHeight / n, behavior: i }), !0;
            break;
          case a.eV.DIR_LEFT:
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
            j(n, i),
            n.Tree.DeferredFocus.Reset())
          : (ot && console.log(`No focus state in history for ${t}`),
            n.Tree.DeferredFocus.ExecuteQueuedFocus());
      }
      function rt(e, t) {
        const n = window.history.state;
        return { name: e, root: t, navState: null == n ? void 0 : n[e] };
      }
      var at;
      !(function (e) {
        (e[(e.Unknown = 0)] = "Unknown"),
          (e[(e.NotNeeded = 1)] = "NotNeeded"),
          (e[(e.InReactTree = 2)] = "InReactTree");
      })(at || (at = {}));
      const lt = new je();
      let ct,
        ut = !1,
        dt = null,
        ht = null,
        mt = null;
      function vt(e) {
        ut ||
          ((dt = new ae()),
          (window.legacyWebFocusNavController = dt),
          (ct = new f(dt)),
          ct.BIsGamepadInputExternallyControlled() || dt.RegisterInputSource(e),
          (ct.BIsGamepadInputExternallyControlled() ||
            navigator.userAgent.includes("Valve Steam Gamepad")) &&
            dt.RegisterInputSource(new E(window)),
          (function (e) {
            r()("html").addClass("gpnav_active");
            const t = r()("body"),
              n = e.NewGamepadNavigationTree(e.GetDefaultContext(), "legacy"),
              i = ze(t);
            (n.Root.m_FocusRing = i),
              n.Root.SetProperties({
                scrollIntoViewType: Ve.NoTransformSparseContent,
              }),
              (window.__nav_tree_root = n),
              (window.__virtual_keyboard_client = lt),
              _t.set(document.body, n.Root),
              At(document.body, n.Root),
              St(void 0, !0),
              e.RegisterGamepadNavigationTree(n, window, !1),
              r()(document.body).on("vgp_onbuttondown", function (e) {
                n.HandleButtonDownEventAsLogicalEvent(e.originalEvent);
              }),
              u(document.body, it);
            new MutationObserver(gt).observe(document.body, {
              childList: !0,
              subtree: !0,
            }),
              (o = !0),
              (we = o),
              (function (e, t) {
                var n;
                if (
                  (t.Tree.DeferredFocus.SuppressFocus(),
                  window.addEventListener("popstate", () => st(rt(e, t))),
                  null === (n = window.history.state) || void 0 === n
                    ? void 0
                    : n.notify_focus_restore_ready)
                ) {
                  ot &&
                    console.log(
                      "waiting to restore focus until focus_restore_ready is sent",
                    );
                  var i = rt(e, t);
                  window.addEventListener("focus_restore_ready", function (e) {
                    ot && console.log("focus_restore_ready received"),
                      window.setTimeout(function () {
                        st(i);
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
                        Object.assign(Object.assign({}, window.history.state), {
                          [e]: $(t),
                        }),
                        null,
                      );
                  });
                })(e, t);
              })("legacy_web_root", n.Root),
              Object.assign(window, Tt),
              window.dispatchEvent(new CustomEvent("vgp_gamepadnavready"));
            var o;
          })(dt)),
          (ut = !0);
      }
      function gt(e) {
        for (const t of e) {
          const e = [],
            n = [];
          S(
            t,
            (t) => e.push(t),
            (e) => n.push(e),
          ),
            e.length && St(r()(e)),
            n.length && wt(r()(n));
        }
      }
      const _t = new WeakMap(),
        pt = new WeakMap();
      let ft = [];
      function At(e, t) {
        if (t instanceof We) {
          const n = t.GetDepth();
          ft[n] || (ft[n] = []), ft[n].push([e, t]);
        }
        _t.set(e, t);
      }
      function Ct(e, t) {
        const n = pt.has(e) ? pt.get(e) : [];
        n.push(t), pt.set(e, n);
      }
      function bt(e) {
        return "jquery" in e
          ? _t.get(e[0]) || at.Unknown
          : _t.get(e) || at.Unknown;
      }
      function wt(e) {
        e.find("*")
          .addBack()
          .each(function () {
            var e;
            null === (e = pt.get(this)) ||
              void 0 === e ||
              e.forEach((e) => e()),
              _t.delete(this),
              pt.delete(this),
              r()(this).attr("data-nav-modal") && Dt();
          });
      }
      function St(e, t = !1) {
        performance.now();
        const n =
          "a,button,textarea,input:not(input[type=hidden]),label:not([for]),[data-panel],[data-react-nav-root],[data-nav-modal]";
        r()(n, e)
          .addBack(n)
          .each(function () {
            var e;
            (function (e) {
              return "jquery" in e ? _t.has(e[0]) : _t.has(e);
            })((e = this)) || Rt(e);
          }),
          (function () {
            for (let e = ft.length - 1; e >= 0; e--)
              if (ft[e])
                for (let [t, n] of ft[e])
                  Ct(t, n.Tree.RegisterNavigationItem(n, t));
            ft = [];
          })();
      }
      function Ft(e) {
        wt(r()(e)), St(r()(e));
      }
      function Nt(e) {
        const t = r()(e.Element);
        return (
          !t.data("gpFocusDisabled") &&
          t.is(":visible") &&
          "hidden" != t.css("visibility") &&
          ((t.outerWidth() > 0 && t.outerHeight() > 0) ||
            "hidden" !== t.css("overflow"))
        );
      }
      function Rt(e) {
        var t, n, s, a, l, d, v;
        const g = r()(e),
          _ = It(e);
        if (_ instanceof He || _ == at.InReactTree)
          return At(e, at.InReactTree), at.InReactTree;
        const p = _.Tree;
        let f = g.data("reactNavRoot")
            ? new He(g.data("reactNavRoot"), _)
            : p.CreateNode(_, _.m_FocusRing),
          A = g.data("panel") || {};
        if (
          (r()(e).attr("data-nav-modal") &&
            (function (e) {
              ht &&
                (y(
                  !1,
                  "Creating a new modal nav tree while one already exists. A modal opening another modal is not currently supported.",
                ),
                Dt());
              ht = dt.NewGamepadNavigationTree(
                dt.GetDefaultContext(),
                "modal_dialog",
              );
              const t = ze(r()("body"));
              (ht.Root.m_FocusRing = t),
                ht.Root.SetProperties({}),
                At(e, ht.Root),
                St(e),
                u(ht.Root.m_element, (e) => !0),
                (mt = dt.RegisterGamepadNavigationTree(ht, window, !1));
            })(e),
          "A" == e.tagName || "BUTTON" == e.tagName || "LABEL" == e.tagName)
        )
          (A.focusable = null === (t = A.focusable) || void 0 === t || t),
            (A.clickOnActivate =
              null === (n = A.clickOnActivate) || void 0 === n || n);
        else if ("INPUT" == e.tagName)
          switch (
            ((A.focusable = null === (s = A.focusable) || void 0 === s || s),
            e.getAttribute("type"))
          ) {
            case "radio":
            case "checkbox":
              A.clickOnActivate =
                null === (a = A.clickOnActivate) || void 0 === a || a;
              break;
            case "text":
            case "password":
              A.enableVirtualKeyboard =
                null === (l = A.enableVirtualKeyboard) || void 0 === l || l;
          }
        else
          "TEXTAREA" == e.tagName &&
            ((A.focusable = null === (d = A.focusable) || void 0 === d || d),
            (A.enableVirtualKeyboard =
              null === (v = A.enableVirtualKeyboard) || void 0 === v || v));
        const C = A["flow-children"];
        delete A["flow-children"];
        let {
            clickOnActivate: b,
            maintainX: w,
            maintainY: S,
            enableVirtualKeyboard: F,
            preferredChild: N,
            onOKActionDescription: R,
            onCancelActionDescription: I,
            onSecondaryActionDescription: D,
            onOptionsActionDescription: T,
            onMenuActionDescription: E,
            actionDescriptionMap: O,
            onOKButton: L,
            onCancelButton: B,
            onSecondaryButton: M,
            onOptionsButton: P,
            onMenuButton: G,
            onMoveUp: x,
            onMoveRight: k,
            onMoveDown: V,
            onMoveLeft: U,
            onGamepadDirection: W,
            bFocusRingRoot: H,
            type: K,
          } = A,
          $ = (0, o._T)(A, [
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
          j = Je(L),
          Y = Je(B),
          X = Je(M),
          z = Je(P),
          Q = Je(G),
          q = Je(W);
        K || (K = "Panel"),
          "PanelGroup" == K &&
            ({ onOKButtonHandler: j, onCancelButtonHandler: Y } = (function (
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
              { onOKButtonHandler: j, onCancelButtonHandler: Y, navNode: f },
              $,
            )),
          j &&
            Ct(
              g[0],
              (function (e, t) {
                return c(e, "vgp_onok", h(t));
              })(g[0], j),
            ),
          Y &&
            Ct(
              g[0],
              (function (e, t) {
                return c(e, "vgp_oncancel", h(t));
              })(g[0], Y),
            ),
          X &&
            D &&
            Ct(
              g[0],
              (function (e, t) {
                return c(e, "vgp_onsecondaryaction", h(t));
              })(g[0], X),
            ),
          z &&
            T &&
            Ct(
              g[0],
              (function (e, t) {
                return c(e, "vgp_onoptions", h(t));
              })(g[0], z),
            ),
          Q &&
            E &&
            Ct(
              g[0],
              (function (e, t) {
                return c(e, "vgp_onmenu", h(t));
              })(g[0], Q),
            ),
          q && Ct(g[0], u(g[0], q));
        const J = (function (e, t, n, i) {
            const o = {};
            return (
              e && (o.onMoveUp = et(e)),
              t && (o.onMoveRight = et(t)),
              n && (o.onMoveDown = et(n)),
              i && (o.onMoveLeft = et(i)),
              o
            );
          })(x, k, V, U),
          Z = C
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
              })(C)
            : xe.NONE;
        Z != xe.NONE && ($.layout = Z),
          w
            ? ($.navEntryPreferPosition = ke.MAINTAIN_X)
            : S
              ? ($.navEntryPreferPosition = ke.MAINTAIN_Y)
              : N && ($.navEntryPreferPosition = ke.PREFERRED_CHILD),
          b &&
            (!1 !== $.focusable && ($.focusable = !0),
            g.on("vgp_onok", "firstChild" === b ? nt : tt),
            Ct(e, () => {
              g.off("vgp_onok");
            })),
          F &&
            (g.on("vgp_onok.vkbindings", () => lt.ShowVirtualKeyboard()),
            g.on("click.vkbindings", () => lt.ShowVirtualKeyboard()),
            g.on("blur.vkbindings", () => {
              document.hasFocus() &&
                document.activeElement != e &&
                lt.HideVirtualKeyboard();
            }),
            Ct(e, () => {
              g.off(".vkbindings");
            })),
          $.focusable && void 0 === g.attr("tabIndex") && g.attr("tabIndex", 0),
          $.focusable &&
            f.FocusCallbackList.Register((t) =>
              (function (e, t) {
                t ? r()(e).addClass("gpfocus") : r()(e).removeClass("gpfocus");
              })(e, t),
            ),
          H &&
            ((f.m_FocusRing = ze(g)),
            "static" == g.css("position") && g.css("position", "relative"));
        const ee = m({
            onOKActionDescription: R,
            onCancelActionDescription: I,
            onSecondaryActionDescription: D,
            onOptionsActionDescription: T,
            onMenuActionDescription: E,
            actionDescriptionMap: O,
          }),
          te = Object.assign(
            Object.assign({ fnCanTakeFocus: Nt, actionDescriptionMap: ee }, J),
            $,
          );
        return f.SetProperties(te), At(e, f), f;
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
                if (he(e) != xe.COLUMN) t = !0;
                else {
                  const n = he(e.parentElement);
                  (n != xe.ROW && n != xe.ROW_REVERSE) || (t = !0);
                }
            }
            let n = at.NotNeeded;
            return t ? (n = Rt(e)) : At(e, n), n;
          })(t);
        else if (n == at.InReactTree) return n;
        return n instanceof We ? n : It(t);
      }
      function Dt(e) {
        mt && (mt(), (mt = null), (ht = null)),
          e && r()(e).removeAttr("data-nav-modal");
      }
      const Tt = {
        InstrumentFocusElements: St,
        ForceUpdateFocusElements: Ft,
        GPNavFocusChild: function (e) {
          let t = bt(e[0]);
          return (
            t instanceof We || (t = It(e[0])),
            t instanceof We && t.BTakeFocus(i.APPLICATION),
            !1
          );
        },
        GPOnShowingModalWindow: function (e) {
          const t = e;
          return r()(t).attr("data-nav-modal", "true"), Ft(t), () => Dt(t);
        },
        GPShowVirtualKeyboard: function (e = !0) {
          e ? lt.ShowVirtualKeyboard() : lt.HideVirtualKeyboard();
        },
        GPNavUpdateActionDescriptions: function (e, t) {
          const n = bt(e);
          n instanceof We &&
            n.SetProperties(
              Object.assign(Object.assign({}, n.m_Properties), {
                actionDescriptionMap: m(t),
              }),
            );
        },
      };
    },
  },
]);

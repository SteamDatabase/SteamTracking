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
    851: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { InitializeGamepadNavigation: () => Gt });
      var i,
        o = n(655),
        s = n(311),
        r = n.n(s),
        a = n(703);
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
        return e.dispatchEvent(o);
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
      const _ = { x: "y", y: "x" };
      function p(e, t, ...n) {
        console.assert
          ? 0 == n.length
            ? console.assert(!!e, t)
            : console.assert(!!e, t, ...n)
          : e || console.warn(t, ...n);
      }
      var g = n(444),
        v = n(812);
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
      const C = [
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
      var E, y;
      !(function (e) {
        (e[(e.Debug = 0)] = "Debug"),
          (e[(e.Info = 1)] = "Info"),
          (e[(e.Warning = 2)] = "Warning"),
          (e[(e.Error = 3)] = "Error");
      })(E || (E = {}));
      class T {
        constructor(e, t) {
          (this.m_fnIdGenerator = null),
            (this.m_sName = e),
            (this.m_fnIdGenerator = t),
            b.Get().RegisterLogName(e);
        }
        Debug(...e) {
          this.Log(E.Debug, ...e);
        }
        Info(...e) {
          this.Log(E.Info, ...e);
        }
        Warning(...e) {
          this.Log(E.Warning, ...e);
        }
        Error(...e) {
          this.Log(E.Error, ...e);
        }
        Assert(e, ...t) {
          e || this.Log(E.Error, "Assertion failed:", ...t);
        }
        Log(e, ...t) {
          var n, i;
          if (e == E.Debug && !b.Get().IsDebugLogEnabled(this.m_sName)) return;
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
          S(e, b.Get().IncludeBacktraceInLog, o, this.m_sName, ...t);
        }
      }
      (0, o.gn)([g.a], T.prototype, "Debug", null),
        (0, o.gn)([g.a], T.prototype, "Info", null),
        (0, o.gn)([g.a], T.prototype, "Warning", null),
        (0, o.gn)([g.a], T.prototype, "Error", null),
        (0, o.gn)([g.a], T.prototype, "Assert", null);
      class b {
        constructor() {
          (this.m_Storage = null),
            (this.m_rgLogNames = null),
            (this.m_setEnabledDebugLogs = new Set()),
            (this.m_bIncludeBacktraceInLog = !1),
            (this.m_SettingsChangedCallback = new v.pB()),
            (this.m_bLoading = !1),
            (this.m_Storage = new f()),
            (this.m_rgLogNames = C.slice()),
            this.LoadSettings();
        }
        LogAsLogManager(...e) {
          S(
            E.Info,
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
                  b.k_IncludeBacktraceInLog_StorageKey
                )));
            const e = yield this.m_Storage.GetObject(
              b.k_EnabledLogNames_StorageKey
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
              b.k_EnabledLogNames_StorageKey,
              Array.from(this.m_setEnabledDebugLogs)
            ),
              yield this.m_Storage.StoreObject(
                b.k_IncludeBacktraceInLog_StorageKey,
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
            null == b.s_Singleton && (b.s_Singleton = new b()), b.s_Singleton
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
            (this.m_setEnabledDebugLogs = new Set(e ? C : [])),
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
      function S(e, t, n, i, ...o) {
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
                case E.Debug:
                  return String.fromCodePoint(128027);
                case E.Info:
                  return String.fromCodePoint(8505);
                case E.Warning:
                  return String.fromCodePoint(9888);
                case E.Error:
                  return String.fromCodePoint(128165);
              }
            })(e) +
            " " +
            l);
        const c =
            o.length >= 1 && "string" == typeof o[0] && o[0].includes("%c"),
          u = c && o.shift(),
          d = [
            `%c${l}%c:${c ? " %c" + u : ""}`,
            `color: ${r ? "black" : "white"}; background: rgb(${s.join(
              ","
            )}); padding: 0 1ch`,
            "color: transparent; margin-right: -1ch",
            ...(c ? [""] : []),
            ...o,
          ];
        if (t)
          console.groupCollapsed(...d),
            console.trace("Callstack"),
            console.groupEnd();
        else
          switch (e) {
            case E.Debug:
            case E.Info:
              console.log(...d);
              break;
            case E.Warning:
              console.warn(...d);
              break;
            case E.Error:
              console.error(...d);
          }
      }
      (b.k_EnabledLogNames_StorageKey = "EnabledWebLogs"),
        (b.k_IncludeBacktraceInLog_StorageKey = "IncludeBacktraceInLog"),
        (b.s_Singleton = null),
        (window.EnableSteamConsole = (e = !0) =>
          b.Get().SetDebugLogEnabled("SteamClient", e));
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
      function k(e) {
        return R.SerializeNavState(e, !0, !1);
      }
      class A extends R {
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
      class w extends R {
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
      function F(e, t) {
        return !!e && "object" == typeof e.SteamClient && t in e.SteamClient;
      }
      function D(e) {
        return (function (e, t) {
          if (!e) return !1;
          const [n, i] = t.split(".", 2);
          return n && i && F(e, n) && i in e.SteamClient[n];
        })(window, e);
      }
      !(function (e) {
        (e[(e.k_EPlatformTypeUnknown = 0)] = "k_EPlatformTypeUnknown"),
          (e[(e.k_EPlatformTypeWin32 = 1)] = "k_EPlatformTypeWin32"),
          (e[(e.k_EPlatformTypeWin64 = 2)] = "k_EPlatformTypeWin64"),
          (e[(e.k_EPlatformTypeLinux64 = 3)] = "k_EPlatformTypeLinux64"),
          (e[(e.k_EPlatformTypeOSX = 4)] = "k_EPlatformTypeOSX"),
          (e[(e.k_EPlatformTypePS3 = 5)] = "k_EPlatformTypePS3"),
          (e[(e.k_EPlatformTypeLinux32 = 6)] = "k_EPlatformTypeLinux32"),
          (e[(e.k_EPlatformTypeAndroid32 = 7)] = "k_EPlatformTypeAndroid32"),
          (e[(e.k_EPlatformTypeAndroid64 = 8)] = "k_EPlatformTypeAndroid64"),
          (e[(e.k_EPlatformTypeIOS32 = 9)] = "k_EPlatformTypeIOS32"),
          (e[(e.k_EPlatformTypeIOS64 = 10)] = "k_EPlatformTypeIOS64"),
          (e[(e.k_EPlatformTypeTVOS = 11)] = "k_EPlatformTypeTVOS"),
          (e[(e.k_EPlatformTypeEmbeddedClient = 12)] =
            "k_EPlatformTypeEmbeddedClient"),
          (e[(e.k_EPlatformTypeBrowser = 13)] = "k_EPlatformTypeBrowser"),
          (e[(e.k_EPlatformTypeMax = 14)] = "k_EPlatformTypeMax");
      })(y || (y = {}));
      var I, N, P, L, O, B, M, G, x, W, V, U, H;
      !(function (e) {
        (e[(e.k_EConnectivityTestResult_Unknown = 0)] =
          "k_EConnectivityTestResult_Unknown"),
          (e[(e.k_EConnectivityTestResult_Connected = 1)] =
            "k_EConnectivityTestResult_Connected"),
          (e[(e.k_EConnectivityTestResult_CaptivePortal = 2)] =
            "k_EConnectivityTestResult_CaptivePortal"),
          (e[(e.k_EConnectivityTestResult_TimedOut = 3)] =
            "k_EConnectivityTestResult_TimedOut"),
          (e[(e.k_EConnectivityTestResult_Failed = 4)] =
            "k_EConnectivityTestResult_Failed"),
          (e[(e.k_EConnectivityTestResult_WifiDisabled = 5)] =
            "k_EConnectivityTestResult_WifiDisabled"),
          (e[(e.k_EConnectivityTestResult_NoLAN = 6)] =
            "k_EConnectivityTestResult_NoLAN");
      })(I || (I = {})),
        (function (e) {
          (e[(e.k_ENetFakeLocalSystemState_Normal = 0)] =
            "k_ENetFakeLocalSystemState_Normal"),
            (e[(e.k_ENetFakeLocalSystemState_NoLAN = 1)] =
              "k_ENetFakeLocalSystemState_NoLAN"),
            (e[(e.k_ENetFakeLocalSystemState_CaptivePortal_Redirected = 2)] =
              "k_ENetFakeLocalSystemState_CaptivePortal_Redirected"),
            (e[(e.k_ENetFakeLocalSystemState_CaptivePortal_InPlace = 3)] =
              "k_ENetFakeLocalSystemState_CaptivePortal_InPlace"),
            (e[(e.k_ENetFakeLocalSystemState_NoInternet = 4)] =
              "k_ENetFakeLocalSystemState_NoInternet"),
            (e[(e.k_ENetFakeLocalSystemState_NoSteam = 5)] =
              "k_ENetFakeLocalSystemState_NoSteam");
        })(N || (N = {})),
        (function (e) {
          (e[(e.k_ESuspendResumeProgressState_Invalid = 0)] =
            "k_ESuspendResumeProgressState_Invalid"),
            (e[(e.k_ESuspendResumeProgressState_Complete = 1)] =
              "k_ESuspendResumeProgressState_Complete"),
            (e[(e.k_ESuspendResumeProgressState_CloudSync = 2)] =
              "k_ESuspendResumeProgressState_CloudSync"),
            (e[(e.k_ESuspendResumeProgressState_LoggingIn = 3)] =
              "k_ESuspendResumeProgressState_LoggingIn"),
            (e[(e.k_ESuspendResumeProgressState_WaitingForApp = 4)] =
              "k_ESuspendResumeProgressState_WaitingForApp"),
            (e[(e.k_ESuspendResumeProgressState_Working = 5)] =
              "k_ESuspendResumeProgressState_Working");
        })(P || (P = {})),
        (function (e) {
          (e[(e.k_EFloatingGamepadTextInputModeModeSingleLine = 0)] =
            "k_EFloatingGamepadTextInputModeModeSingleLine"),
            (e[(e.k_EFloatingGamepadTextInputModeModeMultipleLines = 1)] =
              "k_EFloatingGamepadTextInputModeModeMultipleLines"),
            (e[(e.k_EFloatingGamepadTextInputModeModeEmail = 2)] =
              "k_EFloatingGamepadTextInputModeModeEmail"),
            (e[(e.k_EFloatingGamepadTextInputModeModeNumeric = 3)] =
              "k_EFloatingGamepadTextInputModeModeNumeric");
        })(L || (L = {})),
        (function (e) {
          (e[(e.k_EAppUpdateContentType_Content = 0)] =
            "k_EAppUpdateContentType_Content"),
            (e[(e.k_EAppUpdateContentType_Workshop = 1)] =
              "k_EAppUpdateContentType_Workshop"),
            (e[(e.k_EAppUpdateContentType_Shader = 2)] =
              "k_EAppUpdateContentType_Shader"),
            (e[(e.k_EAppUpdateContentType_Max = 3)] =
              "k_EAppUpdateContentType_Max");
        })(O || (O = {})),
        (function (e) {
          (e[(e.k_EOverlayToStoreFlag_None = 0)] =
            "k_EOverlayToStoreFlag_None"),
            (e[(e.k_EOverlayToStoreFlag_AddToCart = 1)] =
              "k_EOverlayToStoreFlag_AddToCart"),
            (e[(e.k_EOverlayToStoreFlag_AddToCartAndShow = 2)] =
              "k_EOverlayToStoreFlag_AddToCartAndShow");
        })(B || (B = {})),
        (function (e) {
          (e[(e.k_EActivateGameOverlayToWebPageMode_Default = 0)] =
            "k_EActivateGameOverlayToWebPageMode_Default"),
            (e[(e.k_EActivateGameOverlayToWebPageMode_Modal = 1)] =
              "k_EActivateGameOverlayToWebPageMode_Modal");
        })(M || (M = {})),
        (function (e) {
          (e[(e.k_EGamingDeviceType_Unknown = 0)] =
            "k_EGamingDeviceType_Unknown"),
            (e[(e.k_EGamingDeviceType_StandardPC = 1)] =
              "k_EGamingDeviceType_StandardPC"),
            (e[(e.k_EGamingDeviceType_Console = 256)] =
              "k_EGamingDeviceType_Console"),
            (e[(e.k_EGamingDeviceType_PS3 = 272)] = "k_EGamingDeviceType_PS3"),
            (e[(e.k_EGamingDeviceType_Steambox = 288)] =
              "k_EGamingDeviceType_Steambox"),
            (e[(e.k_EGamingDeviceType_Handheld = 512)] =
              "k_EGamingDeviceType_Handheld"),
            (e[(e.k_EGamingDeviceType_Phone = 528)] =
              "k_EGamingDeviceType_Phone"),
            (e[(e.k_EGamingDeviceType_SteamDeck = 544)] =
              "k_EGamingDeviceType_SteamDeck");
        })(G || (G = {})),
        (function (e) {
          (e[(e.k_ELoginUIStyleOld = 0)] = "k_ELoginUIStyleOld"),
            (e[(e.k_ELoginUIStyleNewWithoutQRCode = 1)] =
              "k_ELoginUIStyleNewWithoutQRCode"),
            (e[(e.k_ELoginUIStyleNew = 2)] = "k_ELoginUIStyleNew");
        })(x || (x = {})),
        (function (e) {
          (e[(e.k_ECommunityProfileItemProperty_ImageSmall = 0)] =
            "k_ECommunityProfileItemProperty_ImageSmall"),
            (e[(e.k_ECommunityProfileItemProperty_ImageLarge = 1)] =
              "k_ECommunityProfileItemProperty_ImageLarge"),
            (e[(e.k_ECommunityProfileItemProperty_InternalName = 2)] =
              "k_ECommunityProfileItemProperty_InternalName"),
            (e[(e.k_ECommunityProfileItemProperty_Title = 3)] =
              "k_ECommunityProfileItemProperty_Title"),
            (e[(e.k_ECommunityProfileItemProperty_Description = 4)] =
              "k_ECommunityProfileItemProperty_Description"),
            (e[(e.k_ECommunityProfileItemProperty_AppID = 5)] =
              "k_ECommunityProfileItemProperty_AppID"),
            (e[(e.k_ECommunityProfileItemProperty_TypeID = 6)] =
              "k_ECommunityProfileItemProperty_TypeID"),
            (e[(e.k_ECommunityProfileItemProperty_Class = 7)] =
              "k_ECommunityProfileItemProperty_Class"),
            (e[(e.k_ECommunityProfileItemProperty_MovieWebM = 8)] =
              "k_ECommunityProfileItemProperty_MovieWebM"),
            (e[(e.k_ECommunityProfileItemProperty_MovieMP4 = 9)] =
              "k_ECommunityProfileItemProperty_MovieMP4"),
            (e[(e.k_ECommunityProfileItemProperty_MovieWebMSmall = 10)] =
              "k_ECommunityProfileItemProperty_MovieWebMSmall"),
            (e[(e.k_ECommunityProfileItemProperty_MovieMP4Small = 11)] =
              "k_ECommunityProfileItemProperty_MovieMP4Small");
        })(W || (W = {})),
        (function (e) {
          (e[(e.k_ERaiseGameWindowResult_NotRunning = 1)] =
            "k_ERaiseGameWindowResult_NotRunning"),
            (e[(e.k_ERaiseGameWindowResult_Success = 2)] =
              "k_ERaiseGameWindowResult_Success"),
            (e[(e.k_ERaiseGameWindowResult_Failure = 3)] =
              "k_ERaiseGameWindowResult_Failure");
        })(V || (V = {})),
        (function (e) {
          (e[(e.k_EPositionInvalid = -1)] = "k_EPositionInvalid"),
            (e[(e.k_EPositionTopLeft = 0)] = "k_EPositionTopLeft"),
            (e[(e.k_EPositionTopRight = 1)] = "k_EPositionTopRight"),
            (e[(e.k_EPositionBottomLeft = 2)] = "k_EPositionBottomLeft"),
            (e[(e.k_EPositionBottomRight = 3)] = "k_EPositionBottomRight");
        })(U || (U = {})),
        (function (e) {
          (e[(e.k_EAppReleaseState_Unknown = 0)] =
            "k_EAppReleaseState_Unknown"),
            (e[(e.k_EAppReleaseState_Unavailable = 1)] =
              "k_EAppReleaseState_Unavailable"),
            (e[(e.k_EAppReleaseState_Prerelease = 2)] =
              "k_EAppReleaseState_Prerelease"),
            (e[(e.k_EAppReleaseState_PreloadOnly = 3)] =
              "k_EAppReleaseState_PreloadOnly"),
            (e[(e.k_EAppReleaseState_Released = 4)] =
              "k_EAppReleaseState_Released"),
            (e[(e.k_EAppReleaseState_Disabled = 5)] =
              "k_EAppReleaseState_Disabled");
        })(H || (H = {}));
      var K, $, j;
      !(function (e) {
        (e[(e.Input = 0)] = "Input"), (e[(e.Output = 1)] = "Output");
      })(K || (K = {})),
        (function (e) {
          (e[(e.Input = 0)] = "Input"),
            (e[(e.AllOutput = 1)] = "AllOutput"),
            (e[(e.Left = 2)] = "Left"),
            (e[(e.Right = 3)] = "Right"),
            (e[(e.Sub = 4)] = "Sub"),
            (e[(e.BackLeft = 5)] = "BackLeft"),
            (e[(e.BackRight = 6)] = "BackRight");
        })($ || ($ = {}));
      !(function (e) {
        (e[(e.k_ESteamRealmUnknown = 0)] = "k_ESteamRealmUnknown"),
          (e[(e.k_ESteamRealmGlobal = 1)] = "k_ESteamRealmGlobal"),
          (e[(e.k_ESteamRealmChina = 2)] = "k_ESteamRealmChina");
      })(j || (j = {}));
      var X;
      !(function (e) {
        (e[(e.k_BluetoothDeviceType_Invalid = 0)] =
          "k_BluetoothDeviceType_Invalid"),
          (e[(e.k_BluetoothDeviceType_Unknown = 1)] =
            "k_BluetoothDeviceType_Unknown"),
          (e[(e.k_BluetoothDeviceType_Phone = 2)] =
            "k_BluetoothDeviceType_Phone"),
          (e[(e.k_BluetoothDeviceType_Computer = 3)] =
            "k_BluetoothDeviceType_Computer"),
          (e[(e.k_BluetoothDeviceType_Headset = 4)] =
            "k_BluetoothDeviceType_Headset"),
          (e[(e.k_BluetoothDeviceType_Headphones = 5)] =
            "k_BluetoothDeviceType_Headphones"),
          (e[(e.k_BluetoothDeviceType_Speakers = 6)] =
            "k_BluetoothDeviceType_Speakers"),
          (e[(e.k_BluetoothDeviceType_OtherAudio = 7)] =
            "k_BluetoothDeviceType_OtherAudio"),
          (e[(e.k_BluetoothDeviceType_Mouse = 8)] =
            "k_BluetoothDeviceType_Mouse"),
          (e[(e.k_BluetoothDeviceType_Joystick = 9)] =
            "k_BluetoothDeviceType_Joystick"),
          (e[(e.k_BluetoothDeviceType_Gamepad = 10)] =
            "k_BluetoothDeviceType_Gamepad"),
          (e[(e.k_BluetoothDeviceType_Keyboard = 11)] =
            "k_BluetoothDeviceType_Keyboard");
      })(X || (X = {}));
      var Y, z, q, Q;
      !(function (e) {
        (e[(e.EBrowserType_OffScreen = 0)] = "EBrowserType_OffScreen"),
          (e[(e.EBrowserType_OpenVROverlay = 1)] =
            "EBrowserType_OpenVROverlay"),
          (e[(e.EBrowserType_OpenVROverlay_Dashboard = 2)] =
            "EBrowserType_OpenVROverlay_Dashboard"),
          (e[(e.EBrowserType_DirectHWND = 3)] = "EBrowserType_DirectHWND"),
          (e[(e.EBrowserType_DirectHWND_Borderless = 4)] =
            "EBrowserType_DirectHWND_Borderless"),
          (e[(e.EBrowserType_DirectHWND_Hidden = 5)] =
            "EBrowserType_DirectHWND_Hidden"),
          (e[(e.EBrowserType_ChildHWNDNative = 6)] =
            "EBrowserType_ChildHWNDNative"),
          (e[(e.EBrowserType_Transparent_Toplevel = 7)] =
            "EBrowserType_Transparent_Toplevel"),
          (e[(e.EBrowserType_OffScreen_SharedTexture = 8)] =
            "EBrowserType_OffScreen_SharedTexture"),
          (e[(e.EBrowserType_OffScreen_GameOverlay = 9)] =
            "EBrowserType_OffScreen_GameOverlay"),
          (e[(e.EBrowserType_OffScreen_GameOverlay_SharedTexture = 10)] =
            "EBrowserType_OffScreen_GameOverlay_SharedTexture"),
          (e[(e.EBrowserType_Offscreen_FriendsUI = 11)] =
            "EBrowserType_Offscreen_FriendsUI"),
          (e[(e.EBrowserType_MAX = 12)] = "EBrowserType_MAX");
      })(Y || (Y = {})),
        (function (e) {
          (e[(e.SystemKey0 = 0)] = "SystemKey0"),
            (e[(e.SystemKey1 = 1)] = "SystemKey1");
        })(z || (z = {})),
        (function (e) {
          (e[(e.Hidden = 0)] = "Hidden"),
            (e[(e.Notification = 1)] = "Notification"),
            (e[(e.Overlay = 2)] = "Overlay"),
            (e[(e.Opaque = 3)] = "Opaque"),
            (e[(e.OverlayKeyboard = 4)] = "OverlayKeyboard");
        })(q || (q = {})),
        (function (e) {
          (e[(e.MainGamepadUI = 0)] = "MainGamepadUI"),
            (e[(e.OverlayGamepadUI = 1)] = "OverlayGamepadUI"),
            (e[(e.Keyboard = 2)] = "Keyboard"),
            (e[(e.ControllerConfigurator = 3)] = "ControllerConfigurator"),
            (e[(e.VR = 4)] = "VR"),
            (e[(e.SteamLibrary = 5)] = "SteamLibrary"),
            (e[(e.MainDesktopUI = 6)] = "MainDesktopUI"),
            (e[(e.DesktopLogin = 7)] = "DesktopLogin"),
            (e[(e.OverlayDesktopUI = 8)] = "OverlayDesktopUI"),
            (e[(e.SmallModeDesktopUI = 9)] = "SmallModeDesktopUI");
        })(Q || (Q = {}));
      var J;
      !(function (e) {
        (e[(e.k_EPending = 0)] = "k_EPending"),
          (e[(e.k_EAccepted = 1)] = "k_EAccepted"),
          (e[(e.k_ERejected = 2)] = "k_ERejected");
      })(J || (J = {}));
      var Z = n(19);
      Z.BinaryReader.prototype, Z.BinaryWriter.prototype;
      Z.Message;
      var ee, te, ne;
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
      })(ee || (ee = {}));
      !(function (e) {
        (e[(e.k_ERemoteClientLaunchOK = 1)] = "k_ERemoteClientLaunchOK"),
          (e[(e.k_ERemoteClientLaunchFail = 2)] = "k_ERemoteClientLaunchFail"),
          (e[(e.k_ERemoteClientLaunchRequiresUI = 3)] =
            "k_ERemoteClientLaunchRequiresUI"),
          (e[(e.k_ERemoteClientLaunchRequiresLaunchOption = 4)] =
            "k_ERemoteClientLaunchRequiresLaunchOption"),
          (e[(e.k_ERemoteClientLaunchRequiresEULA = 5)] =
            "k_ERemoteClientLaunchRequiresEULA"),
          (e[(e.k_ERemoteClientLaunchTimeout = 6)] =
            "k_ERemoteClientLaunchTimeout"),
          (e[(e.k_ERemoteClientLaunchStreamTimeout = 7)] =
            "k_ERemoteClientLaunchStreamTimeout"),
          (e[(e.k_ERemoteClientLaunchStreamClientFail = 8)] =
            "k_ERemoteClientLaunchStreamClientFail"),
          (e[(e.k_ERemoteClientLaunchOtherGameRunning = 9)] =
            "k_ERemoteClientLaunchOtherGameRunning"),
          (e[(e.k_ERemoteClientLaunchDownloadStarted = 10)] =
            "k_ERemoteClientLaunchDownloadStarted"),
          (e[(e.k_ERemoteClientLaunchDownloadNoSpace = 11)] =
            "k_ERemoteClientLaunchDownloadNoSpace"),
          (e[(e.k_ERemoteClientLaunchDownloadFiltered = 12)] =
            "k_ERemoteClientLaunchDownloadFiltered"),
          (e[(e.k_ERemoteClientLaunchDownloadRequiresUI = 13)] =
            "k_ERemoteClientLaunchDownloadRequiresUI"),
          (e[(e.k_ERemoteClientLaunchAccessDenied = 14)] =
            "k_ERemoteClientLaunchAccessDenied"),
          (e[(e.k_ERemoteClientLaunchNetworkError = 15)] =
            "k_ERemoteClientLaunchNetworkError"),
          (e[(e.k_ERemoteClientLaunchProgress = 16)] =
            "k_ERemoteClientLaunchProgress"),
          (e[(e.k_ERemoteClientLaunchParentalUnlockFailed = 17)] =
            "k_ERemoteClientLaunchParentalUnlockFailed"),
          (e[(e.k_ERemoteClientLaunchScreenLocked = 18)] =
            "k_ERemoteClientLaunchScreenLocked"),
          (e[(e.k_ERemoteClientLaunchUnsupported = 19)] =
            "k_ERemoteClientLaunchUnsupported"),
          (e[(e.k_ERemoteClientLaunchDisabledLocal = 20)] =
            "k_ERemoteClientLaunchDisabledLocal"),
          (e[(e.k_ERemoteClientLaunchDisabledRemote = 21)] =
            "k_ERemoteClientLaunchDisabledRemote"),
          (e[(e.k_ERemoteClientLaunchBroadcasting = 22)] =
            "k_ERemoteClientLaunchBroadcasting"),
          (e[(e.k_ERemoteClientLaunchBusy = 23)] = "k_ERemoteClientLaunchBusy"),
          (e[(e.k_ERemoteClientLaunchDriversNotInstalled = 24)] =
            "k_ERemoteClientLaunchDriversNotInstalled"),
          (e[(e.k_ERemoteClientLaunchTransportUnavailable = 25)] =
            "k_ERemoteClientLaunchTransportUnavailable"),
          (e[(e.k_ERemoteClientLaunchCanceled = 26)] =
            "k_ERemoteClientLaunchCanceled"),
          (e[(e.k_ERemoteClientLaunchInvisible = 27)] =
            "k_ERemoteClientLaunchInvisible"),
          (e[(e.k_ERemoteClientLaunchRestrictedCountry = 28)] =
            "k_ERemoteClientLaunchRestrictedCountry");
      })(te || (te = {}));
      !(function (e) {
        (e[(e.k_EClientUINotificationGroupChatMessage = 1)] =
          "k_EClientUINotificationGroupChatMessage"),
          (e[(e.k_EClientUINotificationFriendChatMessage = 2)] =
            "k_EClientUINotificationFriendChatMessage"),
          (e[(e.k_EClientUINotificationFriendPersonaState = 3)] =
            "k_EClientUINotificationFriendPersonaState");
      })(ne || (ne = {}));
      var ie, oe, se, re, ae;
      !(function (e) {
        (e[(e.Unknown = 0)] = "Unknown"),
          (e[(e.Wired = 1)] = "Wired"),
          (e[(e.Wireless = 2)] = "Wireless"),
          (e[(e.Virtual = 3)] = "Virtual");
      })(ie || (ie = {})),
        (function (e) {
          (e[(e.NotPresent = 0)] = "NotPresent"),
            (e[(e.Failed = 1)] = "Failed"),
            (e[(e.Disconnected = 2)] = "Disconnected"),
            (e[(e.Disconnecting = 3)] = "Disconnecting"),
            (e[(e.Connecting = 4)] = "Connecting"),
            (e[(e.Connected = 5)] = "Connected"),
            (e[(e.Retrying = 6)] = "Retrying");
        })(oe || (oe = {})),
        (function (e) {
          (e[(e.None = 0)] = "None"),
            (e[(e.Weak = 1)] = "Weak"),
            (e[(e.Ok = 2)] = "Ok"),
            (e[(e.Good = 3)] = "Good"),
            (e[(e.Excellent = 4)] = "Excellent");
        })(se || (se = {})),
        (function (e) {
          (e[(e.None = 0)] = "None"),
            (e[(e.StaticWep = 1)] = "StaticWep"),
            (e[(e.DynamicWep = 2)] = "DynamicWep"),
            (e[(e.Wpa = 4)] = "Wpa"),
            (e[(e.WpaEnterprise = 8)] = "WpaEnterprise"),
            (e[(e.Wpa2 = 16)] = "Wpa2"),
            (e[(e.Wpa2Enterprise = 32)] = "Wpa2Enterprise"),
            (e[(e.Unsupported = 32768)] = "Unsupported");
        })(re || (re = {})),
        (function (e) {
          (e[(e.k_EHTTPProxyMode_Invalid = 0)] = "k_EHTTPProxyMode_Invalid"),
            (e[(e.k_EHTTPProxyMode_None = 1)] = "k_EHTTPProxyMode_None"),
            (e[(e.k_EHTTPProxyMode_Manual = 2)] = "k_EHTTPProxyMode_Manual"),
            (e[(e.k_EHTTPProxyMode_Automatic = 3)] =
              "k_EHTTPProxyMode_Automatic");
        })(ae || (ae = {}));
      var le, ce;
      !(function (e) {
        (e[(e.k_EComputerActiveStateInvalid = 0)] =
          "k_EComputerActiveStateInvalid"),
          (e[(e.k_EComputerActiveStateActive = 1)] =
            "k_EComputerActiveStateActive"),
          (e[(e.k_EComputerActiveStateIdle = 2)] =
            "k_EComputerActiveStateIdle");
      })(le || (le = {})),
        (function (e) {
          (e[(e.k_EClientUsedInputTypeKeyboard = 0)] =
            "k_EClientUsedInputTypeKeyboard"),
            (e[(e.k_EClientUsedInputTypeMouse = 1)] =
              "k_EClientUsedInputTypeMouse"),
            (e[(e.k_EClientUsedInputTypeController = 2)] =
              "k_EClientUsedInputTypeController"),
            (e[(e.k_EClientUsedInputTypeMax = 3)] =
              "k_EClientUsedInputTypeMax");
        })(ce || (ce = {}));
      var ue = n(433);
      function de(e) {
        return null != e && void 0 !== e.focus;
      }
      function he(e) {
        let t;
        return e && (t = e.ownerDocument.defaultView), t;
      }
      function me(e, t) {
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
      function _e(e, t) {
        if (!("ownerDocument" in e)) return !0;
        const n = e.ownerDocument.defaultView.getComputedStyle(e),
          i = "x" === t ? n.overflowX : n.overflowY;
        return "auto" === i || "scroll" === i;
      }
      function pe(e, t, n) {
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
      const ge = new T("FocusNavigation").Debug;
      class ve {
        constructor(e, t) {
          (this.m_bActive = !1),
            (this.m_rgGamepadNavigationTrees = []),
            (this.m_LastActiveNavTree = null),
            (this.m_LastActiveFocusNavTree = null),
            (this.m_bMounted = !0),
            (this.m_schDeferredActivate = new v.Ar()),
            (this.m_FocusChangedCallbacks = new v.pB()),
            (this.m_ActiveCallbacks = new v.pB()),
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
            ? (ge(`${this.LogName(e)} Destroying context for window`),
              (this.m_bMounted = !1),
              this.m_schDeferredActivate.Cancel(),
              this.SetActive(!1, e))
            : ge(`${this.LogName(e)} Child window destroyed`);
        }
        SetActive(e, t, n) {
          e
            ? ((this.m_activeWindow = t),
              (this.m_activeBrowserView = n),
              this.m_controller.OnContextActivated(this))
            : ((this.m_activeBrowserView = void 0),
              this.m_controller.OnContextDeactivated(this, !1)),
            this.m_bActive != e &&
              ((this.m_bActive = e), this.m_ActiveCallbacks.Dispatch(e));
        }
        OnActivate(e) {
          ge(
            `${this.LogName(e)} Activating context, there are ${
              this.m_rgGamepadNavigationTrees.length
            } trees in this context`
          ),
            this.SetActive(!0, e);
        }
        OnActivateBrowserView(e, t) {
          ge(`${this.LogName(e)} Browser View "${t}" activated in context`),
            this.SetActive(!0, e, t);
        }
        OnDeactivate(e) {
          this.m_activeWindow == e
            ? (ge(`${this.LogName(e)} Deactivate context for window`),
              this.SetActive(!1, e))
            : ge(
                `${this.LogName(e)} Blurred, but not deactivating because (${
                  this.m_activeWindow.name
                }) has focus.`
              );
        }
        OnDeactivateBrowserView(e, t) {
          ge(`${this.LogName(e)} Browser View "${t}" deactivated in context`),
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
          n && ue.Zf(this.m_rgGamepadNavigationTrees, n),
            e ||
              (this.m_rgGamepadNavigationTrees.length &&
                (e =
                  this.m_rgGamepadNavigationTrees[
                    this.m_rgGamepadNavigationTrees.length - 1
                  ]));
          const o = this.m_LastActiveFocusNavTree == e;
          e && ue.Zf(this.m_rgGamepadNavigationTrees, e),
            (this.m_LastActiveNavTree = e),
            (e && e.BUseVirtualFocus()) || (this.m_LastActiveFocusNavTree = e),
            ge(
              `${this.LogName(e.Window)} Move from nav tree ${
                null == n ? void 0 : n.id
              } to nav tree ${null == e ? void 0 : e.id} ${
                t ? "taking focus" : "no focus"
              }`
            ),
            n && this.m_rgGamepadNavigationTrees.push(n),
            e &&
              (this.m_rgGamepadNavigationTrees.push(e),
              !o && t && e.TakeFocus(i.APPLICATION)),
            n && n != this.m_LastActiveFocusNavTree && n.OnDeactivate(e),
            e && !o && e.OnActivate(n);
        }
        BlurNavTree(e) {
          this.m_LastActiveNavTree == e && this.SetActiveNavTree(null, !0),
            ue.Zf(this.m_rgGamepadNavigationTrees, e),
            this.m_rgGamepadNavigationTrees.unshift(e);
        }
        UnregisterGamepadNavigationTree(e) {
          ue.Zf(this.m_rgGamepadNavigationTrees, e),
            ge(
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
            p(e == this.m_iFocusChangeStack, "out of order focus pop"),
            0 == this.m_iFocusChangeStack)
          ) {
            const { source: e, from: t, to: n } = this.m_ActiveFocusChange;
            this.m_FocusChangedCallbacks.Dispatch(e, t, n);
          }
        }
      }
      const fe = new T("FocusNavigation").Debug,
        Ce = new T("GamepadEvents").Debug;
      class Ee {
        constructor(e, t, n) {
          (this.m_onActivateCallbacks = new v.pB()),
            (this.m_onDeactivateCallbacks = new v.pB()),
            (this.m_onActiveFocusStateChangedCallbacks = new v.pB()),
            (this.m_lastFocusNodeXMovement = new ye()),
            (this.m_lastFocusNodeYMovement = new ye()),
            (this.m_DeferredFocus = new Te(this)),
            (this.m_Controller = e),
            (this.m_context = t),
            (this.m_ID = n),
            (this.m_Root = new at(this, null, null)),
            this.m_Root.SetProperties({ layout: it.COLUMN }),
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
          return new at(this, e, t);
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
            Ce(
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
          fe(
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
              ? this.m_lastFocusNodeXMovement.SetNode(t.Element)
              : "y" == n
              ? this.m_lastFocusNodeYMovement.SetNode(t.Element)
              : (this.m_lastFocusNodeXMovement.Reset(),
                this.m_lastFocusNodeYMovement.Reset()),
            this.m_context.OnFocusChangeComplete(a);
        }
      }
      class ye {
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
      class Te {
        constructor(e) {
          (this.m_schExecuteQueuedFocus = new v.Ar()),
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
          this.m_bSuppressed = !0;
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
              fe(
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
      const be = new T("FocusNavigation").Debug,
        Se = (new T("GamepadEvents").Debug, "focus-nav-show-debug-focus-ring");
      class Re {
        constructor() {
          (this.m_rgGamepadInputSources = []),
            (this.m_rgAllContexts = []),
            (this.m_bGlobalEventsInitialized = !1),
            (this.m_fnCatchAllGamepadInput = null),
            (this.m_UnhandledButtonEventsCallbacks = new v.pB()),
            (this.m_navigationSource = (0, v.vq)({
              eActivationSourceType: a.Rr.UNKNOWN,
              nActiveGamepadIndex: -1,
              nLastActiveGamepadIndex: -1,
            })),
            (this.m_bShowDebugFocusRing = (0, v.vq)(!1)),
            (this.m_bRestoringHistory = !1),
            (this.m_fnGamepadEventUpdateBatcher = (e) => e()),
            (window.FocusNavController = this),
            this.m_bShowDebugFocusRing.Set(
              "shown" == sessionStorage.getItem(Se)
            );
        }
        CreateContext(e) {
          const t = new ve(this, e);
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
          var e;
          if (!this.m_ActiveContext && 0 != this.m_rgAllContexts.length) {
            console.warn("No active context; finding one");
            for (const e of this.m_rgAllContexts) {
              const t = e.FindNavTreeInFocusedWindow();
              if (t) {
                be(
                  `${e.LogName(
                    t.Window
                  )} Found a focused window; setting this context as active.`
                ),
                  (this.m_ActiveContext = e),
                  e.SetActiveNavTree(t);
                break;
              }
            }
          }
          return (
            !this.m_ActiveContext &&
              this.m_LastActiveContext &&
              (p(
                !1,
                `Failed to find an active context, will fall back to ${
                  null === (e = this.m_LastActiveContext) || void 0 === e
                    ? void 0
                    : e.LogName()
                }`
              ),
              (this.m_ActiveContext = this.m_LastActiveContext)),
            this.m_ActiveContext
          );
        }
        SetShowDebugFocusRing(e) {
          this.m_bShowDebugFocusRing.Set(e),
            (function (e) {
              sessionStorage.setItem(Se, e ? "shown" : void 0);
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
          const n = this.GetActiveContext();
          let o = null == n ? void 0 : n.ActiveWindow.document.activeElement;
          if (null == n ? void 0 : n.m_LastActiveNavTree) {
            let s = this.m_navigationSource.Value.eActivationSourceType;
            if (
              !(
                n.m_LastActiveNavTree.GetLastFocusedNode() ||
                (s != a.Rr.GAMEPAD && s != a.Rr.KEYBOARD) ||
                (t && n.m_LastActiveNavTree.TakeFocus(i.GAMEPAD, !0),
                this.BGlobalGamepadButton(e))
              )
            )
              return [null, n];
            n.m_LastActiveNavTree.GetLastFocusedNode() &&
              (o = n.m_LastActiveNavTree.GetLastFocusedNode().Element);
          }
          return [o, n];
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
              D("Browser.HideCursorUntilMouseEvent") &&
              SteamClient.Browser.HideCursorUntilMouseEvent();
        }
        OnButtonDown(e, t, n, i) {
          var o;
          if (this.m_fnCatchAllGamepadInput && this.m_fnCatchAllGamepadInput(e))
            return void be(
              "Ignoring button press - gamepad input is suppressed by parent window"
            );
          this.ChangeNavigationSource(t, n);
          const [s, r] = this.GetEventTarget(e, !0);
          be(
            `Firing ${a.eV[e]} in tree ${
              null === (o = null == r ? void 0 : r.m_LastActiveNavTree) ||
              void 0 === o
                ? void 0
                : o.id
            } at `,
            s
          ),
            this.BatchedUpdate(() =>
              d(s, "vgp_onbuttondown", { button: e, source: t, is_repeat: i })
            );
        }
        OnButtonUp(e, t, n) {
          if (this.m_fnCatchAllGamepadInput) return;
          this.ChangeNavigationSource(t, n);
          const [i, o] = this.GetEventTarget();
          this.BatchedUpdate(() =>
            d(i, "vgp_onbuttonup", { button: e, source: t, is_repeat: !1 })
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
                if (!de(e)) return !1;
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
              n.TransferFocus(i.BROWSER, t);
          }
        }
        NewGamepadNavigationTree(e, t) {
          return new Ee(this, e, t);
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
            be(`(${o.LogName(e.Window)}) Focus event in inactive window`),
            e != o.m_LastActiveFocusNavTree &&
              e != o.m_LastActiveNavTree &&
              (o.m_LastActiveFocusNavTree.GetParentEmbeddedNavTree() == e ||
              e.GetParentEmbeddedNavTree() == o.m_LastActiveFocusNavTree
                ? (be(
                    `There was a focus event in ${e.id}, allowing focus transfer to activate nav tree due to parent embedded relationship`
                  ),
                  e.Activate())
                : be(
                    `There was a focus event in ${e.id}, but the active nav tree is ${o.m_LastActiveFocusNavTree.id} so it is being ignored.  Source: ${i[t]}.`
                  ));
        }
        BlurNavTree(e) {
          e.WindowContext.BlurNavTree(e);
        }
        IsActiveFocusNavTree(e) {
          var t;
          return (
            e &&
            e ==
              (null === (t = this.m_ActiveContext) || void 0 === t
                ? void 0
                : t.m_LastActiveFocusNavTree)
          );
        }
        IsActiveNavTree(e) {
          var t;
          return (
            e &&
            e ==
              (null === (t = this.m_ActiveContext) || void 0 === t
                ? void 0
                : t.m_LastActiveNavTree)
          );
        }
        BIsInActiveContext(e) {
          return e && e.WindowContext == this.m_ActiveContext;
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
          e && e.TakeFocus(i.APPLICATION);
        }
        OnContextActivated(e) {
          (this.m_ActiveContext = e), (this.m_LastActiveContext = e);
        }
        OnContextDeactivated(e, t) {
          t &&
            (this.m_LastActiveContext == e &&
              (this.m_LastActiveContext = void 0),
            ue.Zf(this.m_rgAllContexts, e)),
            this.m_ActiveContext == e && (this.m_ActiveContext = void 0);
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
      (0, o.gn)([g.a], Re.prototype, "OnButtonDown", null),
        (0, o.gn)([g.a], Re.prototype, "OnButtonUp", null),
        (0, o.gn)([g.a], Re.prototype, "OnNavigationTypeChange", null);
      class ke {
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
          this.m_History || (this.m_History = new A(this.m_node)),
            this.m_History.PushState();
        }
        PopState(e = 0) {
          this.m_History && this.m_History.PopState(e);
        }
        SaveState(e) {
          this.m_StateHistory || (this.m_StateHistory = new w(this.m_node)),
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
      function Ae(e, t, n, i = 0.001) {
        return "x" == e
          ? t.x + t.width > n.x + i && t.x + i < n.x + n.width
          : "y" == e
          ? t.y + t.height > n.y + i && t.y + i < n.y + n.height
          : (p(!1, `Invalid axis ${e}`), !1);
      }
      function we(e, t, n) {
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
      function Fe(e, t, n) {
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
      function De(e) {
        if (!e) return it.NONE;
        const t = e.ownerDocument.defaultView,
          n = t.getComputedStyle(e);
        if ("flex" == n.display)
          switch (n.flexDirection) {
            case "row":
              return "wrap" == n.flexWrap ? it.GRID : it.ROW;
            case "row-reverse":
              return it.ROW_REVERSE;
            case "column":
              return it.COLUMN;
            case "column-reverse":
              return it.COLUMN_REVERSE;
          }
        else {
          if ("grid" == n.display) return it.GRID;
          if (e.childElementCount > 0) {
            const n = t.getComputedStyle(e.firstElementChild);
            if ("left" === n.float) return it.ROW;
            if ("right" === n.float) return it.ROW_REVERSE;
            if ("inline" === n.display || "inline-block" === n.display)
              return it.GRID;
          }
        }
        return it.COLUMN;
      }
      function Ie(e) {
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
      function Ne(e, t, n) {
        const i = [],
          [o, s] = e.GetChildren(),
          r = e.GetActiveChild();
        let a;
        const l = r ? r.Element.getBoundingClientRect() : null;
        if (r) {
          const e = Oe(r, t, n);
          if (
            e &&
            !e.offScreen &&
            ((a = Pe(r, e, e.overlap, n)), a && !a.visibility.offScreen)
          )
            return a;
          e && i.push({ child: r, visibility: e });
        }
        const c = n || l;
        for (let e = 0; e < o.length; e++) {
          const n = o[e];
          if (n == r) continue;
          const s = Oe(n, t, c);
          s && i.push({ child: n, visibility: s });
        }
        let u;
        i.sort(Le);
        for (const e of i) {
          const { child: n, visibility: i } = e;
          if (i.offScreen && u) {
            if (!u.visibility.offScreen) break;
            if (i.distance > u.visibility.distance) break;
          }
          const o = n == r ? a : Pe(n, i, i.overlap || t, c);
          o && (!u || Le(o, u) < 0) && (u = o);
        }
        return u;
      }
      function Pe(e, t, n, i) {
        switch (e.GetFocusable()) {
          case "none":
            return null;
          case "children":
            return Ne(e, t.overlap || n, i);
          case "self":
            return { child: e, visibility: t };
        }
      }
      function Le(e, t) {
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
      function Oe(e, t, n) {
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
      function Be(e, t, n) {
        return null == e || isNaN(e) ? e : Math.max(t, Math.min(n, e));
      }
      class Me {
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
      class Ge extends Me {
        constructor(e, t, n) {
          super(e, t), (this.m_fnCallback = n);
        }
        Update(e) {
          this.m_fnCallback(e);
        }
      }
      class xe extends Me {
        constructor(e, t, n) {
          super("ownerDocument" in e ? he(e) : e, n),
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
      const We = new T("ScrollSnap").Debug;
      let Ve = !1;
      let Ue;
      function He(e) {
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
          const { scrollTop: e, scrollLeft: o } = tt(i);
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
      function Ke(e, t) {
        return "x" == t
          ? [e.left, e.right, e.right - e.left]
          : [e.top, e.bottom, e.bottom - e.top];
      }
      function $e(e, t, n, i) {
        let [o, s, r] = Ke(e, i),
          [a, l, c] = Ke(t, i),
          [u, d] = Ke(n, i);
        return o < a && s > l
          ? 0
          : (o < a && r <= c) || (s > l && r > c)
          ? o - a - u
          : (o < a && r > c) || (s > l && r <= c)
          ? s - l + d
          : 0;
      }
      function je(e) {
        return "auto" == e
          ? 0
          : e.endsWith("px")
          ? parseInt(e)
          : (console.log("Unsupported length", e), 0);
      }
      function Xe(e) {
        if (!("ownerDocument" in e))
          return { left: 0, right: 0, top: 0, bottom: 0 };
        const t = e.ownerDocument.defaultView.getComputedStyle(e);
        return {
          left: je(t.scrollMarginLeft),
          right: je(t.scrollMarginRight),
          top: je(t.scrollMarginTop),
          bottom: je(t.scrollMarginBottom),
        };
      }
      function Ye(e, t) {
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
              left: je(t.scrollPaddingLeft),
              right: je(t.scrollPaddingRight),
              top: je(t.scrollPaddingTop),
              bottom: je(t.scrollPaddingBottom),
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
      function ze(e) {
        return e > -1 && e < 1;
      }
      function qe(e, t, n, i, o) {
        We(
          "----------------------------------------------------------------------------------"
        ),
          We("Scrolling Into View:", t);
        let s = [],
          r = t,
          a = He(t),
          l = null != o ? o : Number.MAX_VALUE;
        for (; r; ) {
          let e = me(r);
          e || (e = he(r));
          let t = Xe(r),
            n = Ye(e, He(e)),
            c = et(e),
            u = { element: e, left: 0, top: 0 };
          if (
            (We(
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
              !_e(e, "y") ||
              ((u.top = $e(a, n, t, "y")),
              (u.top = Be(u.top, -c.scrollTop, c.MaxScrollTop() - c.scrollTop)),
              o &&
                ((u.top = Math.min(l, Math.abs(u.top)) * (u.top < 0 ? -1 : 1)),
                (l -= Math.abs(u.top))),
              We(`- checked y: ${u.top}`)),
            (i && "x" != i) ||
              !_e(e, "x") ||
              ((u.left = $e(a, n, t, "x")),
              (u.left = Be(
                u.left,
                -c.scrollLeft,
                c.MaxScrollLeft() - c.scrollLeft
              )),
              o &&
                ((u.left =
                  Math.min(l, Math.abs(u.left)) * (u.left < 0 ? -1 : 1)),
                (l -= Math.abs(u.left))),
              We(`- checked x: ${u.left}`)),
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
          if (ze(e.left) && ze(e.top)) continue;
          let t = et(e.element),
            i = t.scrollTop + e.top,
            o = t.scrollLeft + e.left;
          (o = Be(o, 0, t.MaxScrollLeft())),
            (i = Be(i, 0, t.MaxScrollTop())),
            (ze(t.scrollLeft - o) && ze(t.scrollTop - i)) ||
              (t.scrollTo({ left: o, top: i, behavior: n }),
              c || (We("Scrolling:"), (c = !0)),
              We(
                `- ${e.top},${e.left} => ${i}, ${o}, behavior: ${n}`,
                e.element
              ));
        }
      }
      function Qe(e, t) {
        const { top: n, left: i, behavior: o } = t,
          s = et(e);
        s.scrollTo({
          top: s.scrollTop + (null != n ? n : 0),
          left: s.scrollLeft + (null != i ? i : 0),
          behavior: o,
        });
      }
      class Je {
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
                this.m_animation = new Ge(this.m_window, e, (e) => {
                  this.m_window.scrollTo({
                    left: t + (i - t) * e,
                    top: n + (o - n) * e,
                    behavior: "auto",
                  });
                });
              } else
                (this.m_element.style.scrollSnapType = "initial"),
                  (this.m_animation = new xe(
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
      (0, o.gn)([g.a], Je.prototype, "ResetScrollState", null);
      const Ze = new WeakMap();
      function et(e) {
        let t = Ze.get(e);
        return t || ((t = new Je(e)), Ze.set(e, t)), t;
      }
      function tt(e) {
        const t = Ze.get(e);
        return t
          ? { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop }
          : { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
      }
      const nt = new T("FocusNavigationMovement").Debug;
      var it, ot, st, rt;
      !(function (e) {
        (e[(e.NONE = 0)] = "NONE"),
          (e[(e.COLUMN = 1)] = "COLUMN"),
          (e[(e.ROW = 2)] = "ROW"),
          (e[(e.COLUMN_REVERSE = 3)] = "COLUMN_REVERSE"),
          (e[(e.ROW_REVERSE = 4)] = "ROW_REVERSE"),
          (e[(e.GRID = 5)] = "GRID"),
          (e[(e.GEOMETRIC = 6)] = "GEOMETRIC");
      })(it || (it = {})),
        (function (e) {
          (e[(e.FIRST = 0)] = "FIRST"),
            (e[(e.LAST = 1)] = "LAST"),
            (e[(e.MAINTAIN_X = 2)] = "MAINTAIN_X"),
            (e[(e.MAINTAIN_Y = 3)] = "MAINTAIN_Y"),
            (e[(e.PREFERRED_CHILD = 4)] = "PREFERRED_CHILD");
        })(ot || (ot = {})),
        (function (e) {
          (e[(e.Standard = 0)] = "Standard"),
            (e[(e.NoTransform = 1)] = "NoTransform"),
            (e[(e.NoTransformSparseContent = 2)] = "NoTransformSparseContent");
        })(st || (st = {})),
        (function (e) {
          (e[(e.INVALID = 0)] = "INVALID"),
            (e[(e.FORWARD = 1)] = "FORWARD"),
            (e[(e.BACKWARD = 2)] = "BACKWARD");
        })(rt || (rt = {}));
      class at {
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
          return new ke(this);
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
                  this.m_RetainFocusParent
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
            (nt(
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
              this.m_Properties.layout != it.NONE ||
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
            rt.FORWARD,
            a.eV.INVALID
          );
          return this.InternalFocusDescendant(t, e);
        }
        BFocusLastChild(e) {
          const t = this.FindNextFocusableChildInDirection(
            this.m_rgChildren.length,
            rt.BACKWARD,
            a.eV.INVALID
          );
          return this.InternalFocusDescendant(t, e);
        }
        FindFocusableDescendant(e, t) {
          const n = Ie(e),
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
                e == it.ROW_REVERSE ||
                e == it.COLUMN_REVERSE ||
                o == ot.LAST
                  ? this.m_rgChildren.length - 1
                  : 0;
            }
            if ((o == ot.MAINTAIN_X || o == ot.MAINTAIN_Y || t) && n) {
              let i, s;
              o == ot.MAINTAIN_X ? (i = "x") : o == ot.MAINTAIN_Y && (i = "y"),
                i == _[n] && (s = this.m_Tree.GetLastFocusedMovementRect(_[n])),
                nt(
                  `Taking focus while preserving ${ot[o]} preserved: ${i} movement: ${n}, node:`,
                  s || t
                );
              const a = this.ComputeRelativeDirection(e, it.GRID);
              if (s || t) {
                const o = a == rt.BACKWARD ? this.m_rgChildren.length - 1 : 0;
                r = this.FindClosestChildInNextAxiallyAlignedSet(
                  i || _[n],
                  a,
                  e,
                  s || t,
                  o,
                  this.m_rgChildren[o].GetBoundingRect()
                );
              } else if (i != _[n]) {
                const t = a == rt.BACKWARD ? this.m_rgChildren.length : -1;
                r = this.FindNextFocusableChildInDirection(t, a, e);
              }
            } else if (o == ot.PREFERRED_CHILD) {
              for (const t of this.m_rgChildren)
                if (
                  ((r = t.BWantsPreferredFocus() && t.FindFocusableNode(e)), r)
                )
                  return r;
            } else
              o == ot.LAST &&
                (r = this.FindNextFocusableChildInDirection(
                  a + 1,
                  rt.BACKWARD,
                  e
                ));
            return (
              r ||
                (r = this.FindNextFocusableChildInDirection(
                  a - 1,
                  rt.FORWARD,
                  e
                )),
              r ||
                (r = this.FindNextFocusableChildInDirection(a, rt.BACKWARD, e)),
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
            r = Ne(this, {
              top: 0,
              left: 0,
              right: s.innerWidth,
              bottom: s.innerHeight,
            });
          return (
            nt(
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
          if (this.m_rgChildren.length < 2) return it.NONE;
          return De(this.m_element);
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
          return !!e && (this.m_Tree.TransferFocus(t, e, Ie(n)), !0);
        }
        BTryInternalNavigation(e, t) {
          var n;
          const o = this.GetLayout();
          let s,
            r = this.ComputeRelativeDirection(e, o);
          if (
            (nt(
              `Handling navigation event ${a.eV[e]} - ${it[o]} - ${rt[r]}`,
              this.m_element
            ),
            r == rt.INVALID)
          )
            return !1;
          if (this.m_Properties.focusable && this.m_bFocused)
            return nt("Skipping navigation within focused element"), !1;
          if ((this.EnsureChildrenSorted(!0), o == it.GRID))
            s = this.FindNextFocusableChildInGrid(
              this.GetActiveChildIndex(),
              r,
              e
            );
          else {
            let t = this.GetActiveChildIndex();
            this.IsValidChildIndex(t) ||
              (t = r == rt.FORWARD ? -1 : this.m_rgChildren.length),
              (s = this.FindNextFocusableChildInDirection(t, r, e));
          }
          if (s) {
            const o = Ie(e);
            if (this.GetScrollIntoViewType() == st.NoTransformSparseContent) {
              const e =
                  null === (n = s.Element) || void 0 === n
                    ? void 0
                    : n.ownerDocument.defaultView,
                i =
                  ("y" == o ? e.innerHeight : e.innerWidth) / (t ? 4.5 : 3.33),
                r = He(s.Element);
              if (
                (r.top > e.innerHeight && r.bottom > e.innerHeight + i) ||
                (r.bottom < 0 && r.top < -i) ||
                (r.left > e.innerWidth && r.right > e.innerWidth + i) ||
                (r.right < 0 && r.left < -i)
              )
                return (
                  nt(`Element too far away, scrolling ${i} on ${o} axis `),
                  qe(s.Element, s.Element, "smooth", o, i),
                  !0
                );
            }
            return this.m_Tree.TransferFocus(i.GAMEPAD, s, o), !0;
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
            : st.Standard;
        }
        GetRelativeDirection(e) {
          return this.ComputeRelativeDirection(e, this.GetLayout());
        }
        ComputeRelativeDirection(e, t) {
          let n = t == it.ROW_REVERSE || t == it.COLUMN_REVERSE;
          switch (t) {
            case it.ROW:
            case it.ROW_REVERSE:
              switch (e) {
                case a.eV.DIR_LEFT:
                  return n ? rt.FORWARD : rt.BACKWARD;
                case a.eV.DIR_RIGHT:
                  return n ? rt.BACKWARD : rt.FORWARD;
                default:
                  return rt.INVALID;
              }
            case it.COLUMN:
            case it.COLUMN_REVERSE:
              switch (e) {
                case a.eV.DIR_UP:
                  return n ? rt.FORWARD : rt.BACKWARD;
                case a.eV.DIR_DOWN:
                  return n ? rt.BACKWARD : rt.FORWARD;
                default:
                  return rt.INVALID;
              }
            case it.GRID:
              switch (e) {
                case a.eV.DIR_LEFT:
                case a.eV.DIR_UP:
                  return n ? rt.FORWARD : rt.BACKWARD;
                case a.eV.DIR_RIGHT:
                case a.eV.DIR_DOWN:
                  return n ? rt.BACKWARD : rt.FORWARD;
                default:
                  return rt.INVALID;
              }
            default:
              return rt.INVALID;
          }
        }
        AdvanceIndex(e, t) {
          return e + (t == rt.FORWARD ? 1 : -1);
        }
        FindNextFocusableChildInDirection(e, t, n) {
          let i = t == rt.FORWARD ? 1 : -1;
          for (let t = e + i; t >= 0 && t < this.m_rgChildren.length; t += i) {
            const e = this.m_rgChildren[t].FindFocusableNode(n);
            if (e) return e;
          }
          return null;
        }
        ScanChildren(e, t, n) {
          let i = t == rt.FORWARD ? 1 : -1;
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
                (e) => !Ae("y", s, e.GetBoundingRect())
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
            let i = t == rt.FORWARD ? 1 : -1;
            for (
              let o = this.AdvanceIndex(e, t);
              o >= 0 && o < this.m_rgChildren.length;
              o += i
            ) {
              const e = this.m_rgChildren[o];
              if (!Ae("y", s, e.GetBoundingRect())) return null;
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
              !(!s || Ae(_[e], s, n)) ||
              (r.push({ child: t, overlap: we(e, i, n), dist: Fe(e, a, n) }),
              !1)
            );
          }),
            t == rt.BACKWARD && r.reverse(),
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
          e instanceof at
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
                nt(
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
                  (void 0 === a && (a = Ve ? st.NoTransform : st.Standard),
                  (null === (o = n.m_Properties) || void 0 === o
                    ? void 0
                    : o.fnScrollIntoViewHandler) &&
                    !1 !== n.m_Properties.fnScrollIntoViewHandler(e, t, n))
                )
                  continue;
                const l = n.m_element,
                  c =
                    a == st.NoTransform ||
                    a == st.NoTransformSparseContent ||
                    !s;
                if (t) {
                  const t = c ? He(l) : l.getBoundingClientRect();
                  let n = !1;
                  const i = Math.max(1.4 * (t.bottom - t.top), 40);
                  ((Ue && performance.now() - Ue < 500) ||
                    t.bottom < -i ||
                    t.top > window.innerHeight + i) &&
                    (n = !0);
                  let o = n ? "auto" : "smooth";
                  n && (Ue = performance.now()),
                    e.Tree.Controller.BIsRestoringHistory() && (o = "auto"),
                    c
                      ? qe(0, l, o)
                      : l.scrollIntoView({ behavior: o, block: "nearest" });
                } else
                  c
                    ? qe(0, l, "auto")
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
      (0, o.gn)([g.a], at.prototype, "OnDOMFocus", null),
        (0, o.gn)([g.a], at.prototype, "OnDOMBlur", null),
        (0, o.gn)([g.a], at.prototype, "OnNavigationEvent", null);
      const lt = "GamepadInput";
      var ct;
      !(function (e) {
        (e[(e.PageUnloading = 0)] = "PageUnloading"),
          (e[(e.Unknown = 1)] = "Unknown"),
          (e[(e.None = 2)] = "None"),
          (e[(e.Basic = 3)] = "Basic"),
          (e[(e.Full = 4)] = "Full");
      })(ct || (ct = {}));
      class ut {
        constructor(e) {
          (this.m_bIsGamepadInputExternallyControlled = !1),
            (this.m_NavigationController = e),
            D("BrowserView.RegisterForMessageFromParent") &&
            D("BrowserView.PostMessageToParent")
              ? ((this.m_bIsGamepadInputExternallyControlled = !0),
                (this.m_postMessage = new ht()))
              : ((this.m_bIsGamepadInputExternallyControlled =
                  window.top != window.self),
                (this.m_postMessage = new dt(window.top))),
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
          let t = ct.Basic;
          window.bSupportsGamepadUI && (t = ct.Full),
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
      (0, o.gn)([g.a], ut.prototype, "OnFocusChanged", null),
        (0, o.gn)([g.a], ut.prototype, "OnMessage", null),
        (0, o.gn)([g.a], ut.prototype, "PostPageUnloading", null);
      class dt {
        constructor(e) {
          (this.m_postWindow = e),
            window.addEventListener("message", this.OnMessage);
        }
        RegisterForMessage(e) {
          this.m_fnCallback = e;
        }
        PostMessage(e) {
          let t = JSON.stringify(e);
          this.m_postWindow.postMessage({ gamepadMessage: lt, args: t }, "*");
        }
        OnMessage(e) {
          let t = null == e ? void 0 : e.data;
          if (t && t.gamepadMessage == lt && t.args) {
            const e = JSON.parse(t.args);
            this.m_fnCallback(e);
          }
        }
      }
      (0, o.gn)([g.a], dt.prototype, "OnMessage", null);
      class ht {
        constructor() {
          SteamClient.BrowserView.RegisterForMessageFromParent(this.OnMessage);
        }
        RegisterForMessage(e) {
          this.m_fnCallback = e;
        }
        PostMessage(e) {
          let t = JSON.stringify(e);
          SteamClient.BrowserView.PostMessageToParent(lt, t);
        }
        OnMessage(e, t) {
          if (e == lt) {
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
          }
        }
      }
      (0, o.gn)([g.a], ht.prototype, "OnMessage", null);
      n(761);
      class mt extends a.oH {
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
        BShouldSwallowEventForTextInputWorkaround(e) {
          if (
            !(
              de(e.target) &&
              ("INPUT" === e.target.nodeName ||
                "TEXTAREA" === e.target.nodeName)
            )
          )
            return !1;
          const t = e.code;
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
          const t = e.code,
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
      (0, o.gn)([g.a], mt.prototype, "OnKeyDown", null),
        (0, o.gn)([g.a], mt.prototype, "OnKeyUp", null),
        (0, o.gn)([g.a], mt.prototype, "Reset", null);
      class _t extends at {
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
          return d(this.m_Parent.Element, "vgp_onbuttondown", e.detail), !1;
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
      (0, o.gn)([g.a], _t.prototype, "OnWrappedTreeActivated", null),
        (0, o.gn)([g.a], _t.prototype, "OnWrappedTreeDeactivated", null),
        (0, o.gn)([g.a], _t.prototype, "OnWrappedTreeUnhandledButton", null);
      const pt = "VirtualKeyboardMessage";
      function gt(e) {
        return e && e.type === pt;
      }
      class vt {
        constructor() {
          window.addEventListener("message", this.OnMessage);
        }
        CreateVirtualKeyboardRef() {
          return {
            ShowVirtualKeyboard: this.ShowVirtualKeyboard,
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
        HideVirtualKeyboard(e) {
          this.SendMessage({ message: "HideVirtualKeyboard", msDelay: e });
        }
        OnBrowserViewMessage(e, t) {
          e == pt && this.InternalDispatchMessage(JSON.parse(t));
        }
        OnMessage(e) {
          this.InternalDispatchMessage(e.data);
        }
        InternalDispatchMessage(e) {
          gt(e) && e.message;
        }
        SendMessage(e) {
          const t = Object.assign({ type: "VirtualKeyboardMessage" }, e);
          D("BrowserView.PostMessageToParent")
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
      (0, o.gn)([g.a], vt.prototype, "ShowVirtualKeyboard", null),
        (0, o.gn)([g.a], vt.prototype, "HideVirtualKeyboard", null),
        (0, o.gn)([g.a], vt.prototype, "OnBrowserViewMessage", null),
        (0, o.gn)([g.a], vt.prototype, "OnMessage", null);
      (0, o.gn)(
        [g.a],
        class {
          constructor(e, t) {
            (this.m_refKeyboard = t), e.on("message", this.OnMessage);
          }
          OnMessage(e, t, n) {
            if (e == pt) {
              const e = JSON.parse(t);
              if (gt(e))
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
      var ft = n(369),
        Ct = n.n(ft);
      function Et(e) {
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
          _ = (e) => {
            if (
              ((o = e),
              i && (i.remove(), (i = null)),
              s && (window.clearInterval(s), (s = null)),
              e && e.BWantsFocusRing())
            ) {
              i = r()("<div/>", {
                style: "position: absolute; pointer-events: none; ",
                class: Ct().FocusRing,
              });
              let t = d(e);
              h(t), n.append(i), (s = window.setInterval(() => m(e), 200));
            }
          };
        return {
          OnBlur: () => _(null),
          OnFocus: (e, t) => _(t),
          OnFocusChange: (e, t, n) => _(n),
          OnForceMeasureFocusRing: () => m(o),
        };
      }
      function yt(e) {
        return !!e.is_repeat;
      }
      Object.seal({ onMoveUp: Tt, onMoveDown: Tt }),
        Object.seal({ onMoveRight: Tt, onMoveLeft: Tt });
      function Tt(e, t) {
        if (e.is_repeat) return !1;
        const n = t.GetRelativeDirection(e.button);
        return n == rt.FORWARD
          ? t.BFocusFirstChild(i.GAMEPAD)
          : n == rt.BACKWARD && t.BFocusLastChild(i.GAMEPAD);
      }
      function bt(e) {
        return e ? Function("event", e) : null;
      }
      function St() {
        return !0;
      }
      function Rt(e) {
        return "BlockMovement" == e
          ? St
          : "RepeatNavigationBoundary" == e
          ? yt
          : e
          ? Function("detail", e)
          : null;
      }
      function kt(e) {
        this.click(), e.stopPropagation();
      }
      function At(e) {
        r()(this).find('a, input[type="checkbox"]')[0].click();
      }
      function wt(e) {
        const t = e.currentTarget;
        if (!de(t)) return !1;
        const n = e.detail.is_repeat ? 4.5 : 3.33,
          i = "smooth",
          o = t.ownerDocument,
          s = o.defaultView;
        switch (e.detail.button) {
          case a.eV.DIR_UP:
            if (s.scrollY > 3)
              return Qe(s, { top: -s.innerHeight / n, behavior: i }), !0;
            break;
          case a.eV.DIR_RIGHT:
            if (s.scrollX + s.innerWidth < o.body.clientWidth - 3)
              return Qe(s, { left: s.innerWidth / n, behavior: i }), !0;
            break;
          case a.eV.DIR_DOWN:
            if (s.scrollY + s.innerHeight < o.body.clientHeight - 3)
              return Qe(s, { top: s.innerHeight / n, behavior: i }), !0;
            break;
          case a.eV.DIR_LEFT:
            if (s.scrollX > 3)
              return Qe(s, { left: s.innerWidth / n, behavior: i }), !0;
        }
        return !1;
      }
      function Ft(e) {
        const { name: t, root: n, navState: i } = e;
        i
          ? (!(function (e, t, n = 0) {
              R.RestoreSerializedNavState(e, t, n);
            })(n, i),
            n.Tree.DeferredFocus.Reset())
          : n.Tree.DeferredFocus.ExecuteQueuedFocus();
      }
      function Dt(e, t) {
        const n = window.history.state;
        return { name: e, root: t, navState: null == n ? void 0 : n[e] };
      }
      var It;
      !(function (e) {
        (e[(e.Unknown = 0)] = "Unknown"),
          (e[(e.NotNeeded = 1)] = "NotNeeded"),
          (e[(e.InReactTree = 2)] = "InReactTree");
      })(It || (It = {}));
      const Nt = new vt();
      let Pt,
        Lt = !1,
        Ot = null,
        Bt = null,
        Mt = null;
      function Gt(e) {
        Lt ||
          ((Ot = new Re()),
          (window.legacyWebFocusNavController = Ot),
          (Pt = new ut(Ot)),
          Pt.BIsGamepadInputExternallyControlled() || Ot.RegisterInputSource(e),
          (Pt.BIsGamepadInputExternallyControlled() ||
            navigator.userAgent.includes("Valve Steam Gamepad")) &&
            Ot.RegisterInputSource(new mt(window)),
          (function (e) {
            r()("html").addClass("gpnav_active");
            const t = r()("body"),
              n = e.NewGamepadNavigationTree(e.GetDefaultContext(), "legacy"),
              i = Et(t);
            (n.Root.m_FocusRing = i),
              n.Root.SetProperties({
                scrollIntoViewType: st.NoTransformSparseContent,
              }),
              (window.__nav_tree_root = n),
              (window.__virtual_keyboard_client = Nt),
              Wt.set(document.body, n.Root),
              Ht(document.body, n.Root),
              Xt(void 0, !0),
              e.RegisterGamepadNavigationTree(n, window, !1),
              r()(document.body).on("vgp_onbuttondown", function (e) {
                n.HandleButtonDownEventAsLogicalEvent(e.originalEvent);
              }),
              u(document.body, wt);
            new MutationObserver(xt).observe(document.body, {
              childList: !0,
              subtree: !0,
            }),
              (o = !0),
              (Ve = o),
              (function (e, t) {
                var n;
                if (
                  (t.Tree.DeferredFocus.SuppressFocus(),
                  window.addEventListener("popstate", () => Ft(Dt(e, t))),
                  null === (n = window.history.state) || void 0 === n
                    ? void 0
                    : n.notify_focus_restore_ready)
                ) {
                  var i = Dt(e, t);
                  window.addEventListener("focus_restore_ready", function (e) {
                    window.setTimeout(function () {
                      Ft(i);
                    }, 100);
                  });
                } else Ft(Dt(e, t));
                !(function (e, t) {
                  t.Tree.WindowContext.FocusChangedCallbacks.Register(() => {
                    window.history.replaceState(
                      Object.assign(Object.assign({}, window.history.state), {
                        [e]: k(t),
                      }),
                      null
                    );
                  });
                })(e, t);
              })("legacy_web_root", n.Root),
              Object.assign(window, Zt),
              window.dispatchEvent(new CustomEvent("vgp_gamepadnavready"));
            var o;
          })(Ot)),
          (Lt = !0);
      }
      function xt(e) {
        for (const t of e) {
          const e = [],
            n = [];
          pe(
            t,
            (t) => e.push(t),
            (e) => n.push(e)
          ),
            e.length && Xt(r()(e)),
            n.length && jt(r()(n));
        }
      }
      const Wt = new WeakMap(),
        Vt = new WeakMap();
      let Ut = [];
      function Ht(e, t) {
        if (t instanceof at) {
          const n = t.GetDepth();
          Ut[n] || (Ut[n] = []), Ut[n].push([e, t]);
        }
        Wt.set(e, t);
      }
      function Kt(e, t) {
        const n = Vt.has(e) ? Vt.get(e) : [];
        n.push(t), Vt.set(e, n);
      }
      function $t(e) {
        return "jquery" in e
          ? Wt.get(e[0]) || It.Unknown
          : Wt.get(e) || It.Unknown;
      }
      function jt(e) {
        e.find("*")
          .addBack()
          .each(function () {
            var e;
            null === (e = Vt.get(this)) ||
              void 0 === e ||
              e.forEach((e) => e()),
              Wt.delete(this),
              Vt.delete(this),
              r()(this).attr("data-nav-modal") && Jt();
          });
      }
      function Xt(e, t = !1) {
        performance.now();
        const n =
          "a,button,textarea,input:not(input[type=hidden]),label:not([for]),[data-panel],[data-react-nav-root],[data-nav-modal]";
        r()(n, e)
          .addBack(n)
          .each(function () {
            var e;
            (function (e) {
              return "jquery" in e ? Wt.has(e[0]) : Wt.has(e);
            })((e = this)) || qt(e);
          }),
          (function () {
            for (let e = Ut.length - 1; e >= 0; e--)
              if (Ut[e])
                for (let [t, n] of Ut[e])
                  Kt(t, n.Tree.RegisterNavigationItem(n, t));
            Ut = [];
          })();
      }
      function Yt(e) {
        jt(r()(e)), Xt(r()(e));
      }
      function zt(e) {
        const t = r()(e.Element);
        return (
          !t.data("gpFocusDisabled") &&
          t.is(":visible") &&
          "hidden" != t.css("visibility") &&
          ((t.outerWidth() > 0 && t.outerHeight() > 0) ||
            "hidden" !== t.css("overflow"))
        );
      }
      function qt(e) {
        var t, n, s, a, l, d, _;
        const g = r()(e),
          v = Qt(e);
        if (v instanceof _t || v == It.InReactTree)
          return Ht(e, It.InReactTree), It.InReactTree;
        const f = v.Tree;
        let C = g.data("reactNavRoot")
            ? new _t(g.data("reactNavRoot"), v)
            : f.CreateNode(v, v.m_FocusRing),
          E = g.data("panel") || {};
        if (
          (r()(e).attr("data-nav-modal") &&
            (function (e) {
              Bt &&
                (p(
                  !1,
                  "Creating a new modal nav tree while one already exists. A modal opening another modal is not currently supported."
                ),
                Jt());
              Bt = Ot.NewGamepadNavigationTree(
                Ot.GetDefaultContext(),
                "modal_dialog"
              );
              const t = Et(r()("body"));
              (Bt.Root.m_FocusRing = t),
                Bt.Root.SetProperties({}),
                Ht(e, Bt.Root),
                Xt(e),
                u(Bt.Root.m_element, (e) => !0),
                (Mt = Ot.RegisterGamepadNavigationTree(Bt, window, !1));
            })(e),
          "A" == e.tagName || "BUTTON" == e.tagName || "LABEL" == e.tagName)
        )
          (E.focusable = null === (t = E.focusable) || void 0 === t || t),
            (E.clickOnActivate =
              null === (n = E.clickOnActivate) || void 0 === n || n);
        else if ("INPUT" == e.tagName)
          switch (
            ((E.focusable = null === (s = E.focusable) || void 0 === s || s),
            e.getAttribute("type"))
          ) {
            case "radio":
            case "checkbox":
              E.clickOnActivate =
                null === (a = E.clickOnActivate) || void 0 === a || a;
              break;
            case "text":
            case "password":
              E.enableVirtualKeyboard =
                null === (l = E.enableVirtualKeyboard) || void 0 === l || l;
          }
        else
          "TEXTAREA" == e.tagName &&
            ((E.focusable = null === (d = E.focusable) || void 0 === d || d),
            (E.enableVirtualKeyboard =
              null === (_ = E.enableVirtualKeyboard) || void 0 === _ || _));
        const y = E["flow-children"];
        delete E["flow-children"];
        let {
            clickOnActivate: T,
            maintainX: b,
            maintainY: S,
            enableVirtualKeyboard: R,
            preferredChild: k,
            onOKActionDescription: A,
            onCancelActionDescription: w,
            onSecondaryActionDescription: F,
            onOptionsActionDescription: D,
            onMenuActionDescription: I,
            actionDescriptionMap: N,
            onOKButton: P,
            onCancelButton: L,
            onSecondaryButton: O,
            onOptionsButton: B,
            onMenuButton: M,
            onMoveUp: G,
            onMoveRight: x,
            onMoveDown: W,
            onMoveLeft: V,
            onGamepadDirection: U,
            bFocusRingRoot: H,
            type: K,
          } = E,
          $ = (0, o._T)(E, [
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
          j = bt(P),
          X = bt(L),
          Y = bt(O),
          z = bt(B),
          q = bt(M),
          Q = bt(U);
        K || (K = "Panel"),
          "PanelGroup" == K &&
            ({ onOKButtonHandler: j, onCancelButtonHandler: X } = (function (
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
              { onOKButtonHandler: j, onCancelButtonHandler: X, navNode: C },
              $
            )),
          j &&
            Kt(
              g[0],
              (function (e, t) {
                return c(e, "vgp_onok", h(t));
              })(g[0], j)
            ),
          X &&
            Kt(
              g[0],
              (function (e, t) {
                return c(e, "vgp_oncancel", h(t));
              })(g[0], X)
            ),
          Y &&
            F &&
            Kt(
              g[0],
              (function (e, t) {
                return c(e, "vgp_onsecondaryaction", h(t));
              })(g[0], Y)
            ),
          z &&
            D &&
            Kt(
              g[0],
              (function (e, t) {
                return c(e, "vgp_onoptions", h(t));
              })(g[0], z)
            ),
          q &&
            I &&
            Kt(
              g[0],
              (function (e, t) {
                return c(e, "vgp_onmenu", h(t));
              })(g[0], q)
            ),
          Q && Kt(g[0], u(g[0], Q));
        const J = (function (e, t, n, i) {
            const o = {};
            return (
              e && (o.onMoveUp = Rt(e)),
              t && (o.onMoveRight = Rt(t)),
              n && (o.onMoveDown = Rt(n)),
              i && (o.onMoveLeft = Rt(i)),
              o
            );
          })(G, x, W, V),
          Z = y
            ? (function (e) {
                switch (e) {
                  case "column":
                    return it.COLUMN;
                  case "column-reverse":
                    return it.COLUMN_REVERSE;
                  case "row":
                    return it.ROW;
                  case "row-reverse":
                    return it.ROW_REVERSE;
                  case "grid":
                    return it.GRID;
                  default:
                    return it.NONE;
                }
              })(y)
            : it.NONE;
        Z != it.NONE && ($.layout = Z),
          b
            ? ($.navEntryPreferPosition = ot.MAINTAIN_X)
            : S
            ? ($.navEntryPreferPosition = ot.MAINTAIN_Y)
            : k && ($.navEntryPreferPosition = ot.PREFERRED_CHILD),
          T &&
            (!1 !== $.focusable && ($.focusable = !0),
            g.on("vgp_onok", "firstChild" === T ? At : kt),
            Kt(e, () => {
              g.off("vgp_onok");
            })),
          R &&
            (g.on("vgp_onok.vkbindings", () => Nt.ShowVirtualKeyboard()),
            g.on("click.vkbindings", () => Nt.ShowVirtualKeyboard()),
            g.on("blur.vkbindings", () => {
              document.hasFocus() &&
                document.activeElement != e &&
                Nt.HideVirtualKeyboard();
            }),
            Kt(e, () => {
              g.off(".vkbindings");
            })),
          $.focusable && void 0 === g.attr("tabIndex") && g.attr("tabIndex", 0),
          $.focusable &&
            C.FocusCallbackList.Register((t) =>
              (function (e, t) {
                t ? r()(e).addClass("gpfocus") : r()(e).removeClass("gpfocus");
              })(e, t)
            ),
          H &&
            ((C.m_FocusRing = Et(g)),
            "static" == g.css("position") && g.css("position", "relative"));
        const ee = m({
            onOKActionDescription: A,
            onCancelActionDescription: w,
            onSecondaryActionDescription: F,
            onOptionsActionDescription: D,
            onMenuActionDescription: I,
            actionDescriptionMap: N,
          }),
          te = Object.assign(
            Object.assign({ fnCanTakeFocus: zt, actionDescriptionMap: ee }, J),
            $
          );
        return C.SetProperties(te), Ht(e, C), C;
      }
      function Qt(e) {
        const t = e.parentElement;
        if (!t) return console.error("no parent"), null;
        let n = $t(t);
        if (n == It.Unknown)
          n = (function (e) {
            let t = !1;
            switch (e.tagName) {
              case "A":
              case "INPUT":
              case "TEXTAREA":
                t = !0;
                break;
              case "DIV":
                if (De(e) != it.COLUMN) t = !0;
                else {
                  const n = De(e.parentElement);
                  (n != it.ROW && n != it.ROW_REVERSE) || (t = !0);
                }
            }
            let n = It.NotNeeded;
            return t ? (n = qt(e)) : Ht(e, n), n;
          })(t);
        else if (n == It.InReactTree) return n;
        return n instanceof at ? n : Qt(t);
      }
      function Jt(e) {
        Mt && (Mt(), (Mt = null), (Bt = null)),
          e && r()(e).removeAttr("data-nav-modal");
      }
      const Zt = {
        InstrumentFocusElements: Xt,
        ForceUpdateFocusElements: Yt,
        GPNavFocusChild: function (e) {
          let t = $t(e[0]);
          return (
            t instanceof at || (t = Qt(e[0])),
            t instanceof at && t.BTakeFocus(i.APPLICATION),
            !1
          );
        },
        GPOnShowingModalWindow: function (e) {
          const t = e;
          return r()(t).attr("data-nav-modal", "true"), Yt(t), () => Jt(t);
        },
        GPShowVirtualKeyboard: function (e = !0) {
          e ? Nt.ShowVirtualKeyboard() : Nt.HideVirtualKeyboard();
        },
        GPNavUpdateActionDescriptions: function (e, t) {
          const n = $t(e);
          n instanceof at &&
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

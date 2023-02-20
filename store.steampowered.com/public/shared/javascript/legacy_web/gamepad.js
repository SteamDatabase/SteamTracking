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
    879: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { InitializeGamepadNavigation: () => Xt });
      var r,
        n = o(655),
        i = o(311),
        a = o.n(i),
        s = o(734);
      !(function (e) {
        (e[(e.GAMEPAD = 0)] = "GAMEPAD"),
          (e[(e.KEYBOARD = 1)] = "KEYBOARD"),
          (e[(e.APPLICATION = 2)] = "APPLICATION"),
          (e[(e.BROWSER = 3)] = "BROWSER");
      })(r || (r = {}));
      let l = {
        [s.eV.OK]: "vgp_onok",
        [s.eV.CANCEL]: "vgp_oncancel",
        [s.eV.SECONDARY]: "vgp_onsecondaryaction",
        [s.eV.OPTIONS]: "vgp_onoptions",
        [s.eV.START]: "vgp_onmenu",
      };
      function c(e, t, o) {
        return (
          e.addEventListener(t, o),
          () =>
            (function (e, t, o) {
              e.removeEventListener(t, o);
            })(e, t, o)
        );
      }
      function _(e, t) {
        return c(e, "vgp_ondirection", u(t));
      }
      function d(e, t, o) {
        let r = e;
        if (!r || !r.ownerDocument || !r.ownerDocument.defaultView) return !0;
        let n = new r.ownerDocument.defaultView.CustomEvent(t, {
          bubbles: !0,
          cancelable: !0,
          detail: o,
        });
        return e.dispatchEvent(n);
      }
      function u(e) {
        return (t) => {
          !1 !== e(t) && (t.stopPropagation(), t.preventDefault());
        };
      }
      function m(e) {
        const {
            onOKActionDescription: t,
            onCancelActionDescription: o,
            onSecondaryActionDescription: r,
            onOptionsActionDescription: n,
            onMenuActionDescription: i,
            actionDescriptionMap: a,
          } = e,
          l = Object.assign({}, a);
        return (
          void 0 !== t && (l[s.eV.OK] = t),
          void 0 !== o && (l[s.eV.CANCEL] = o),
          void 0 !== r && (l[s.eV.SECONDARY] = r),
          void 0 !== n && (l[s.eV.OPTIONS] = n),
          void 0 !== i && (l[s.eV.START] = i),
          l
        );
      }
      const h = { x: "y", y: "x" };
      function p(e, t, ...o) {
        console.assert
          ? 0 == o.length
            ? console.assert(!!e, t)
            : console.assert(!!e, t, ...o)
          : e || console.warn(t, ...o);
      }
      var I = o(666),
        g = o(102);
      class C extends class {
        GetObject(e) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            try {
              const t = yield this.GetString(e);
              return t ? JSON.parse(t) : null;
            } catch (e) {
              return null;
            }
          });
        }
        StoreObject(e, t) {
          return (0, n.mG)(this, void 0, void 0, function* () {
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
      const E = [
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
      var v, R;
      !(function (e) {
        (e[(e.Debug = 0)] = "Debug"),
          (e[(e.Info = 1)] = "Info"),
          (e[(e.Warning = 2)] = "Warning"),
          (e[(e.Error = 3)] = "Error");
      })(v || (v = {}));
      class f {
        constructor(e, t) {
          (this.m_fnIdGenerator = null),
            (this.m_sName = e),
            (this.m_fnIdGenerator = t),
            S.Get().RegisterLogName(e);
        }
        Debug(...e) {
          this.Log(v.Debug, ...e);
        }
        Info(...e) {
          this.Log(v.Info, ...e);
        }
        Warning(...e) {
          this.Log(v.Warning, ...e);
        }
        Error(...e) {
          this.Log(v.Error, ...e);
        }
        Assert(e, ...t) {
          e || this.Log(v.Error, "Assertion failed:", ...t);
        }
        Log(e, ...t) {
          var o, r;
          if (e == v.Debug && !S.Get().IsDebugLogEnabled(this.m_sName)) return;
          let n = this.m_sName;
          const i =
            null !==
              (r =
                null === (o = this.m_fnIdGenerator) || void 0 === o
                  ? void 0
                  : o.call(this)) && void 0 !== r
              ? r
              : null;
          null != i && (n += " (" + i + ")");
          y(e, S.Get().IncludeBacktraceInLog, n, this.m_sName, ...t);
        }
      }
      (0, n.gn)([I.a], f.prototype, "Debug", null),
        (0, n.gn)([I.a], f.prototype, "Info", null),
        (0, n.gn)([I.a], f.prototype, "Warning", null),
        (0, n.gn)([I.a], f.prototype, "Error", null),
        (0, n.gn)([I.a], f.prototype, "Assert", null);
      class S {
        constructor() {
          (this.m_Storage = null),
            (this.m_rgLogNames = null),
            (this.m_setEnabledDebugLogs = new Set()),
            (this.m_bIncludeBacktraceInLog = !1),
            (this.m_SettingsChangedCallback = new g.pB()),
            (this.m_bLoading = !1),
            (this.m_Storage = new C()),
            (this.m_rgLogNames = E.slice()),
            this.LoadSettings();
        }
        LogAsLogManager(...e) {
          y(
            v.Info,
            this.IncludeBacktraceInLog,
            "LogManager",
            "LogManager",
            ...e
          );
        }
        LoadSettings() {
          return (0, n.mG)(this, void 0, void 0, function* () {
            (this.m_bLoading = !0),
              (this.m_bIncludeBacktraceInLog =
                !!(yield this.m_Storage.GetObject(
                  S.k_IncludeBacktraceInLog_StorageKey
                )));
            const e = yield this.m_Storage.GetObject(
              S.k_EnabledLogNames_StorageKey
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
          return (0, n.mG)(this, void 0, void 0, function* () {
            yield this.m_Storage.StoreObject(
              S.k_EnabledLogNames_StorageKey,
              Array.from(this.m_setEnabledDebugLogs)
            ),
              yield this.m_Storage.StoreObject(
                S.k_IncludeBacktraceInLog_StorageKey,
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
            null == S.s_Singleton && (S.s_Singleton = new S()), S.s_Singleton
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
          return (0, n.mG)(this, void 0, void 0, function* () {
            this.SetDebugLogEnabled(e, !this.IsDebugLogEnabled(e));
          });
        }
        SetDebugLogEnabled(e, t) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            t
              ? this.m_setEnabledDebugLogs.add(e)
              : this.m_setEnabledDebugLogs.delete(e),
              this.m_SettingsChangedCallback.Dispatch(),
              yield this.SaveSettings();
          });
        }
        SetAllDebugLogsEnabled(e) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            (this.m_setEnabledDebugLogs = new Set(e ? E : [])),
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
          return (0, n.mG)(this, void 0, void 0, function* () {
            (this.m_bIncludeBacktraceInLog = e),
              this.m_SettingsChangedCallback.Dispatch(),
              yield this.SaveSettings();
          });
        }
      }
      function y(e, t, o, r, ...n) {
        const i = (function (e) {
            let t = 0;
            for (let o = 0; o < e.length; o++)
              t = e.charCodeAt(o) + ((t << 5) - t);
            return [(t >> 0) & 255, (t >> 8) & 255, (t >> 16) & 255];
          })(r).map((e, t) =>
            Math.round(
              Math.max(0, Math.min(255, 255 * (0.8 * (e / 255 - 0.5) + 0.15)))
            )
          ),
          a = (299 * (s = i)[0] + 587 * s[1] + 114 * s[2]) / 1e3 >= 128;
        var s;
        let l = o;
        t &&
          (l =
            (function (e) {
              switch (e) {
                case v.Debug:
                  return String.fromCodePoint(128027);
                case v.Info:
                  return String.fromCodePoint(8505);
                case v.Warning:
                  return String.fromCodePoint(9888);
                case v.Error:
                  return String.fromCodePoint(128165);
              }
            })(e) +
            " " +
            l);
        const c =
            n.length >= 1 && "string" == typeof n[0] && n[0].includes("%c"),
          _ = c && n.shift(),
          d = [
            `%c${l}%c:${c ? " %c" + _ : ""}`,
            `color: ${a ? "black" : "white"}; background: rgb(${i.join(
              ","
            )}); padding: 0 1ch`,
            "color: transparent; margin-right: -1ch",
            ...(c ? [""] : []),
            ...n,
          ];
        if (t)
          console.groupCollapsed(...d),
            console.trace("Callstack"),
            console.groupEnd();
        else
          switch (e) {
            case v.Debug:
            case v.Info:
              console.log(...d);
              break;
            case v.Warning:
              console.warn(...d);
              break;
            case v.Error:
              console.error(...d);
          }
      }
      (S.k_EnabledLogNames_StorageKey = "EnabledWebLogs"),
        (S.k_IncludeBacktraceInLog_StorageKey = "IncludeBacktraceInLog"),
        (S.s_Singleton = null),
        (window.EnableSteamConsole = (e = !0) =>
          S.Get().SetDebugLogEnabled("SteamClient", e));
      class T {
        constructor(e) {
          this.m_root = e;
        }
        static SerializeNavState(e, t = !0, o = !0) {
          return {
            root: T.SerializeNavNode(e, t, o),
            bHadFocus: e.BFocusWithin(),
          };
        }
        static SerializeNavNode(e, t = !0, o = !0) {
          let r = null;
          const [n, i] = e.GetChildren();
          return (
            n.length &&
              -1 != i &&
              t &&
              (r = n.map((e, t) => T.SerializeNavNode(e, t == i || o, o))),
            { sNavKey: e.NavKey, iActiveChild: i, rgChildren: r }
          );
        }
        static RestoreSerializedNavState(e, t, o = 0) {
          const { root: n, bHadFocus: i } = t;
          e.Tree.Controller.RestoreHistoryTransaction(() => {
            T.RestoreSerializedNavNode(e, n),
              (1 == o || (0 == o && i)) && e.BTakeFocus(r.APPLICATION);
          });
        }
        static RestoreSerializedNavNode(e, t) {
          var o;
          const { sNavKey: r, iActiveChild: n, rgChildren: i } = t;
          if (
            (r && p(r == e.NavKey, "navkey mismatch"),
            e.SetActiveChild(n),
            i && i.length)
          ) {
            const [t] = e.GetChildren();
            let r = new Map();
            t.forEach((e) => {
              e.NavKey && r.set(e.NavKey, e);
            });
            for (const e of i) {
              if (!e.sNavKey) continue;
              const t = r.get(e.sNavKey);
              t && T.RestoreSerializedNavNode(t, e);
            }
            if (
              -1 != n &&
              (null === (o = i[n]) || void 0 === o ? void 0 : o.sNavKey)
            ) {
              const o = r.get(i[n].sNavKey);
              o && e.SetActiveChild(t.indexOf(o));
            }
            let a = 0,
              s = 0;
            for (; a < t.length && s < i.length; ) {
              for (; a < t.length && t[a].NavKey; ) a++;
              for (; s < i.length && i[s].sNavKey; ) s++;
              if (a >= t.length || s >= i.length) break;
              T.RestoreSerializedNavNode(t[a], i[s]), a++, s++;
            }
          }
        }
      }
      function F(e) {
        return T.SerializeNavState(e, !0, !1);
      }
      class V extends T {
        constructor() {
          super(...arguments), (this.m_rgHistory = []);
        }
        PushState() {
          this.m_rgHistory.push(T.SerializeNavState(this.m_root));
        }
        PopState(e = 0) {
          this.m_rgHistory.length &&
            T.RestoreSerializedNavState(this.m_root, this.m_rgHistory.pop(), e);
        }
      }
      class D extends T {
        constructor() {
          super(...arguments), (this.m_mapHistory = new Map());
        }
        SaveState(e) {
          this.m_mapHistory.set(e, T.SerializeNavState(this.m_root));
        }
        RestoreState(e, t = 0) {
          const o = this.m_mapHistory.get(e);
          return (
            !!o &&
            (console.log(`Restoring history for state ${e}`),
            T.RestoreSerializedNavState(this.m_root, o, t),
            !0)
          );
        }
      }
      function A(e, t) {
        return !!e && "object" == typeof e.SteamClient && t in e.SteamClient;
      }
      function b(e) {
        return (function (e, t) {
          if (!e) return !1;
          const [o, r] = t.split(".", 2);
          return o && r && A(e, o) && r in e.SteamClient[o];
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
      })(R || (R = {}));
      var k, N, w, P, L, O, M, B, x, G, U, W, H, K;
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
      })(k || (k = {})),
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
        })(w || (w = {})),
        (function (e) {
          (e[(e.k_EFloatingGamepadTextInputModeModeSingleLine = 0)] =
            "k_EFloatingGamepadTextInputModeModeSingleLine"),
            (e[(e.k_EFloatingGamepadTextInputModeModeMultipleLines = 1)] =
              "k_EFloatingGamepadTextInputModeModeMultipleLines"),
            (e[(e.k_EFloatingGamepadTextInputModeModeEmail = 2)] =
              "k_EFloatingGamepadTextInputModeModeEmail"),
            (e[(e.k_EFloatingGamepadTextInputModeModeNumeric = 3)] =
              "k_EFloatingGamepadTextInputModeModeNumeric");
        })(P || (P = {})),
        (function (e) {
          (e[(e.k_EAppUpdateContentType_Content = 0)] =
            "k_EAppUpdateContentType_Content"),
            (e[(e.k_EAppUpdateContentType_Workshop = 1)] =
              "k_EAppUpdateContentType_Workshop"),
            (e[(e.k_EAppUpdateContentType_Shader = 2)] =
              "k_EAppUpdateContentType_Shader"),
            (e[(e.k_EAppUpdateContentType_Max = 3)] =
              "k_EAppUpdateContentType_Max");
        })(L || (L = {})),
        (function (e) {
          (e[(e.k_EOverlayToStoreFlag_None = 0)] =
            "k_EOverlayToStoreFlag_None"),
            (e[(e.k_EOverlayToStoreFlag_AddToCart = 1)] =
              "k_EOverlayToStoreFlag_AddToCart"),
            (e[(e.k_EOverlayToStoreFlag_AddToCartAndShow = 2)] =
              "k_EOverlayToStoreFlag_AddToCartAndShow");
        })(O || (O = {})),
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
        })(B || (B = {})),
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
        })(G || (G = {})),
        (function (e) {
          (e[(e.k_ERaiseGameWindowResult_NotRunning = 1)] =
            "k_ERaiseGameWindowResult_NotRunning"),
            (e[(e.k_ERaiseGameWindowResult_Success = 2)] =
              "k_ERaiseGameWindowResult_Success"),
            (e[(e.k_ERaiseGameWindowResult_Failure = 3)] =
              "k_ERaiseGameWindowResult_Failure");
        })(U || (U = {})),
        (function (e) {
          (e[(e.k_EPositionInvalid = -1)] = "k_EPositionInvalid"),
            (e[(e.k_EPositionTopLeft = 0)] = "k_EPositionTopLeft"),
            (e[(e.k_EPositionTopRight = 1)] = "k_EPositionTopRight"),
            (e[(e.k_EPositionBottomLeft = 2)] = "k_EPositionBottomLeft"),
            (e[(e.k_EPositionBottomRight = 3)] = "k_EPositionBottomRight");
        })(W || (W = {})),
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
        })(H || (H = {})),
        (function (e) {
          (e[(e.k_EInstallMgrStateNone = 0)] = "k_EInstallMgrStateNone"),
            (e[(e.k_EInstallMgrStateSetup = 1)] = "k_EInstallMgrStateSetup"),
            (e[(e.k_EInstallMgrStateWaitLicense = 2)] =
              "k_EInstallMgrStateWaitLicense"),
            (e[(e.k_EInstallMgrStateFreeLicense = 3)] =
              "k_EInstallMgrStateFreeLicense"),
            (e[(e.k_EInstallMgrStateShowCDKey = 4)] =
              "k_EInstallMgrStateShowCDKey"),
            (e[(e.k_EInstallMgrStateWaitAppInfo = 5)] =
              "k_EInstallMgrStateWaitAppInfo"),
            (e[(e.k_EInstallMgrStateShowPassword = 6)] =
              "k_EInstallMgrStateShowPassword"),
            (e[(e.k_EInstallMgrStateShowConfig = 7)] =
              "k_EInstallMgrStateShowConfig"),
            (e[(e.k_EInstallMgrStateShowEULAs = 8)] =
              "k_EInstallMgrStateShowEULAs"),
            (e[(e.k_EInstallMgrStateCreateApps = 9)] =
              "k_EInstallMgrStateCreateApps"),
            (e[(e.k_EInstallMgrStateReadFromMedia = 10)] =
              "k_EInstallMgrStateReadFromMedia"),
            (e[(e.k_EInstallMgrStateShowChangeMedia = 11)] =
              "k_EInstallMgrStateShowChangeMedia"),
            (e[(e.k_EInstallMgrStateWaitLegacyCDKeys = 12)] =
              "k_EInstallMgrStateWaitLegacyCDKeys"),
            (e[(e.k_EInstallMgrStateShowSignup = 13)] =
              "k_EInstallMgrStateShowSignup"),
            (e[(e.k_EInstallMgrStateComplete = 14)] =
              "k_EInstallMgrStateComplete"),
            (e[(e.k_EInstallMgrStateFailed = 15)] = "k_EInstallMgrStateFailed"),
            (e[(e.k_EInstallMgrStateCanceled = 16)] =
              "k_EInstallMgrStateCanceled");
        })(K || (K = {}));
      var $, X, j;
      !(function (e) {
        (e[(e.Input = 0)] = "Input"), (e[(e.Output = 1)] = "Output");
      })($ || ($ = {})),
        (function (e) {
          (e[(e.Input = 0)] = "Input"),
            (e[(e.AllOutput = 1)] = "AllOutput"),
            (e[(e.Left = 2)] = "Left"),
            (e[(e.Right = 3)] = "Right"),
            (e[(e.Sub = 4)] = "Sub"),
            (e[(e.BackLeft = 5)] = "BackLeft"),
            (e[(e.BackRight = 6)] = "BackRight");
        })(X || (X = {}));
      !(function (e) {
        (e[(e.k_ESteamRealmUnknown = 0)] = "k_ESteamRealmUnknown"),
          (e[(e.k_ESteamRealmGlobal = 1)] = "k_ESteamRealmGlobal"),
          (e[(e.k_ESteamRealmChina = 2)] = "k_ESteamRealmChina");
      })(j || (j = {}));
      var z;
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
      })(z || (z = {}));
      var Y, q, Q, J;
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
          (e[(e.EBrowserType_Offscreen_SteamUI = 12)] =
            "EBrowserType_Offscreen_SteamUI"),
          (e[(e.EBrowserType_OpenVROverlay_Subview = 13)] =
            "EBrowserType_OpenVROverlay_Subview");
      })(Y || (Y = {})),
        (function (e) {
          (e[(e.SystemKey0 = 0)] = "SystemKey0"),
            (e[(e.SystemKey1 = 1)] = "SystemKey1");
        })(q || (q = {})),
        (function (e) {
          (e[(e.Hidden = 0)] = "Hidden"),
            (e[(e.Notification = 1)] = "Notification"),
            (e[(e.Overlay = 2)] = "Overlay"),
            (e[(e.Opaque = 3)] = "Opaque"),
            (e[(e.OverlayKeyboard = 4)] = "OverlayKeyboard");
        })(Q || (Q = {})),
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
        })(J || (J = {}));
      var Z;
      !(function (e) {
        (e[(e.k_EPending = 0)] = "k_EPending"),
          (e[(e.k_EAccepted = 1)] = "k_EAccepted"),
          (e[(e.k_ERejected = 2)] = "k_ERejected");
      })(Z || (Z = {}));
      var ee = o(19);
      ee.BinaryReader.prototype, ee.BinaryWriter.prototype;
      ee.Message;
      var te, oe, re, ne;
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
      })(te || (te = {}));
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
      })(oe || (oe = {}));
      !(function (e) {
        (e[(e.k_EClientUINotificationGroupChatMessage = 1)] =
          "k_EClientUINotificationGroupChatMessage"),
          (e[(e.k_EClientUINotificationFriendChatMessage = 2)] =
            "k_EClientUINotificationFriendChatMessage"),
          (e[(e.k_EClientUINotificationFriendPersonaState = 3)] =
            "k_EClientUINotificationFriendPersonaState");
      })(re || (re = {}));
      !(function (e) {
        (e[(e.AudioPlayback_Undefined = 0)] = "AudioPlayback_Undefined"),
          (e[(e.AudioPlayback_Playing = 1)] = "AudioPlayback_Playing"),
          (e[(e.AudioPlayback_Paused = 2)] = "AudioPlayback_Paused"),
          (e[(e.AudioPlayback_Idle = 3)] = "AudioPlayback_Idle");
      })(ne || (ne = {}));
      var ie, ae, se, le, ce;
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
        })(ae || (ae = {})),
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
        })(le || (le = {})),
        (function (e) {
          (e[(e.k_EHTTPProxyMode_Invalid = 0)] = "k_EHTTPProxyMode_Invalid"),
            (e[(e.k_EHTTPProxyMode_None = 1)] = "k_EHTTPProxyMode_None"),
            (e[(e.k_EHTTPProxyMode_Manual = 2)] = "k_EHTTPProxyMode_Manual"),
            (e[(e.k_EHTTPProxyMode_Automatic = 3)] =
              "k_EHTTPProxyMode_Automatic");
        })(ce || (ce = {}));
      var _e, de, ue, me;
      !(function (e) {
        (e[(e.k_EComputerActiveStateInvalid = 0)] =
          "k_EComputerActiveStateInvalid"),
          (e[(e.k_EComputerActiveStateActive = 1)] =
            "k_EComputerActiveStateActive"),
          (e[(e.k_EComputerActiveStateIdle = 2)] =
            "k_EComputerActiveStateIdle");
      })(_e || (_e = {})),
        (function (e) {
          (e[(e.k_EClientUsedInputTypeKeyboard = 0)] =
            "k_EClientUsedInputTypeKeyboard"),
            (e[(e.k_EClientUsedInputTypeMouse = 1)] =
              "k_EClientUsedInputTypeMouse"),
            (e[(e.k_EClientUsedInputTypeController = 2)] =
              "k_EClientUsedInputTypeController"),
            (e[(e.k_EClientUsedInputTypeMax = 3)] =
              "k_EClientUsedInputTypeMax");
        })(de || (de = {})),
        (function (e) {
          (e[(e.k_EVRError_None = 0)] = "k_EVRError_None"),
            (e[(e.k_EVRError_VRSkipParam = 1)] = "k_EVRError_VRSkipParam"),
            (e[(e.k_EVRError_ComponentNotInstalled = 2)] =
              "k_EVRError_ComponentNotInstalled"),
            (e[(e.k_EVRError_ComponentBusy = 3)] = "k_EVRError_ComponentBusy"),
            (e[(e.k_EVRError_CrashProtection = 4)] =
              "k_EVRError_CrashProtection"),
            (e[(e.k_EVRError_HmdError = 5)] = "k_EVRError_HmdError");
        })(ue || (ue = {})),
        (function (e) {
          (e[(e.VRInitError_None = 0)] = "VRInitError_None"),
            (e[(e.VRInitError_Unknown = 1)] = "VRInitError_Unknown"),
            (e[(e.VRInitError_Init_InstallationNotFound = 100)] =
              "VRInitError_Init_InstallationNotFound"),
            (e[(e.VRInitError_Init_InstallationCorrupt = 101)] =
              "VRInitError_Init_InstallationCorrupt"),
            (e[(e.VRInitError_Init_VRClientDLLNotFound = 102)] =
              "VRInitError_Init_VRClientDLLNotFound"),
            (e[(e.VRInitError_Init_FileNotFound = 103)] =
              "VRInitError_Init_FileNotFound"),
            (e[(e.VRInitError_Init_FactoryNotFound = 104)] =
              "VRInitError_Init_FactoryNotFound"),
            (e[(e.VRInitError_Init_InterfaceNotFound = 105)] =
              "VRInitError_Init_InterfaceNotFound"),
            (e[(e.VRInitError_Init_InvalidInterface = 106)] =
              "VRInitError_Init_InvalidInterface"),
            (e[(e.VRInitError_Init_UserConfigDirectoryInvalid = 107)] =
              "VRInitError_Init_UserConfigDirectoryInvalid"),
            (e[(e.VRInitError_Init_HmdNotFound = 108)] =
              "VRInitError_Init_HmdNotFound"),
            (e[(e.VRInitError_Init_NotInitialized = 109)] =
              "VRInitError_Init_NotInitialized"),
            (e[(e.VRInitError_Init_PathRegistryNotFound = 110)] =
              "VRInitError_Init_PathRegistryNotFound"),
            (e[(e.VRInitError_Init_NoConfigPath = 111)] =
              "VRInitError_Init_NoConfigPath"),
            (e[(e.VRInitError_Init_NoLogPath = 112)] =
              "VRInitError_Init_NoLogPath"),
            (e[(e.VRInitError_Init_PathRegistryNotWritable = 113)] =
              "VRInitError_Init_PathRegistryNotWritable"),
            (e[(e.VRInitError_Init_AppInfoInitFailed = 114)] =
              "VRInitError_Init_AppInfoInitFailed"),
            (e[(e.VRInitError_Init_Retry = 115)] = "VRInitError_Init_Retry"),
            (e[(e.VRInitError_Init_InitCanceledByUser = 116)] =
              "VRInitError_Init_InitCanceledByUser"),
            (e[(e.VRInitError_Init_AnotherAppLaunching = 117)] =
              "VRInitError_Init_AnotherAppLaunching"),
            (e[(e.VRInitError_Init_SettingsInitFailed = 118)] =
              "VRInitError_Init_SettingsInitFailed"),
            (e[(e.VRInitError_Init_ShuttingDown = 119)] =
              "VRInitError_Init_ShuttingDown"),
            (e[(e.VRInitError_Init_TooManyObjects = 120)] =
              "VRInitError_Init_TooManyObjects"),
            (e[(e.VRInitError_Init_NoServerForBackgroundApp = 121)] =
              "VRInitError_Init_NoServerForBackgroundApp"),
            (e[(e.VRInitError_Init_NotSupportedWithCompositor = 122)] =
              "VRInitError_Init_NotSupportedWithCompositor"),
            (e[(e.VRInitError_Init_NotAvailableToUtilityApps = 123)] =
              "VRInitError_Init_NotAvailableToUtilityApps"),
            (e[(e.VRInitError_Init_Internal = 124)] =
              "VRInitError_Init_Internal"),
            (e[(e.VRInitError_Init_HmdDriverIdIsNone = 125)] =
              "VRInitError_Init_HmdDriverIdIsNone"),
            (e[(e.VRInitError_Init_HmdNotFoundPresenceFailed = 126)] =
              "VRInitError_Init_HmdNotFoundPresenceFailed"),
            (e[(e.VRInitError_Init_VRMonitorNotFound = 127)] =
              "VRInitError_Init_VRMonitorNotFound"),
            (e[(e.VRInitError_Init_VRMonitorStartupFailed = 128)] =
              "VRInitError_Init_VRMonitorStartupFailed"),
            (e[(e.VRInitError_Init_LowPowerWatchdogNotSupported = 129)] =
              "VRInitError_Init_LowPowerWatchdogNotSupported"),
            (e[(e.VRInitError_Init_InvalidApplicationType = 130)] =
              "VRInitError_Init_InvalidApplicationType"),
            (e[(e.VRInitError_Init_NotAvailableToWatchdogApps = 131)] =
              "VRInitError_Init_NotAvailableToWatchdogApps"),
            (e[(e.VRInitError_Init_WatchdogDisabledInSettings = 132)] =
              "VRInitError_Init_WatchdogDisabledInSettings"),
            (e[(e.VRInitError_Init_VRDashboardNotFound = 133)] =
              "VRInitError_Init_VRDashboardNotFound"),
            (e[(e.VRInitError_Init_VRDashboardStartupFailed = 134)] =
              "VRInitError_Init_VRDashboardStartupFailed"),
            (e[(e.VRInitError_Init_VRHomeNotFound = 135)] =
              "VRInitError_Init_VRHomeNotFound"),
            (e[(e.VRInitError_Init_VRHomeStartupFailed = 136)] =
              "VRInitError_Init_VRHomeStartupFailed"),
            (e[(e.VRInitError_Init_RebootingBusy = 137)] =
              "VRInitError_Init_RebootingBusy"),
            (e[(e.VRInitError_Init_FirmwareUpdateBusy = 138)] =
              "VRInitError_Init_FirmwareUpdateBusy"),
            (e[(e.VRInitError_Init_FirmwareRecoveryBusy = 139)] =
              "VRInitError_Init_FirmwareRecoveryBusy"),
            (e[(e.VRInitError_Init_USBServiceBusy = 140)] =
              "VRInitError_Init_USBServiceBusy"),
            (e[(e.VRInitError_Init_VRWebHelperStartupFailed = 141)] =
              "VRInitError_Init_VRWebHelperStartupFailed"),
            (e[(e.VRInitError_Init_TrackerManagerInitFailed = 142)] =
              "VRInitError_Init_TrackerManagerInitFailed"),
            (e[(e.VRInitError_Init_AlreadyRunning = 143)] =
              "VRInitError_Init_AlreadyRunning"),
            (e[(e.VRInitError_Init_FailedForVrMonitor = 144)] =
              "VRInitError_Init_FailedForVrMonitor"),
            (e[(e.VRInitError_Init_PropertyManagerInitFailed = 145)] =
              "VRInitError_Init_PropertyManagerInitFailed"),
            (e[(e.VRInitError_Init_WebServerFailed = 146)] =
              "VRInitError_Init_WebServerFailed"),
            (e[(e.VRInitError_Init_IllegalTypeTransition = 147)] =
              "VRInitError_Init_IllegalTypeTransition"),
            (e[(e.VRInitError_Init_MismatchedRuntimes = 148)] =
              "VRInitError_Init_MismatchedRuntimes"),
            (e[(e.VRInitError_Init_InvalidProcessId = 149)] =
              "VRInitError_Init_InvalidProcessId"),
            (e[(e.VRInitError_Init_VRServiceStartupFailed = 150)] =
              "VRInitError_Init_VRServiceStartupFailed"),
            (e[(e.VRInitError_Init_PrismNeedsNewDrivers = 151)] =
              "VRInitError_Init_PrismNeedsNewDrivers"),
            (e[(e.VRInitError_Init_PrismStartupTimedOut = 152)] =
              "VRInitError_Init_PrismStartupTimedOut"),
            (e[(e.VRInitError_Init_CouldNotStartPrism = 153)] =
              "VRInitError_Init_CouldNotStartPrism"),
            (e[(e.VRInitError_Init_PrismClientInitFailed = 154)] =
              "VRInitError_Init_PrismClientInitFailed"),
            (e[(e.VRInitError_Init_PrismClientStartFailed = 155)] =
              "VRInitError_Init_PrismClientStartFailed"),
            (e[(e.VRInitError_Init_PrismExitedUnexpectedly = 156)] =
              "VRInitError_Init_PrismExitedUnexpectedly"),
            (e[(e.VRInitError_Init_BadLuid = 157)] =
              "VRInitError_Init_BadLuid"),
            (e[(e.VRInitError_Init_NoServerForAppContainer = 158)] =
              "VRInitError_Init_NoServerForAppContainer"),
            (e[(e.VRInitError_Init_DuplicateBootstrapper = 159)] =
              "VRInitError_Init_DuplicateBootstrapper"),
            (e[(e.VRInitError_Init_VRDashboardServicePending = 160)] =
              "VRInitError_Init_VRDashboardServicePending"),
            (e[(e.VRInitError_Init_VRDashboardServiceTimeout = 161)] =
              "VRInitError_Init_VRDashboardServiceTimeout"),
            (e[(e.VRInitError_Init_VRDashboardServiceStopped = 162)] =
              "VRInitError_Init_VRDashboardServiceStopped"),
            (e[(e.VRInitError_Init_VRDashboardAlreadyStarted = 163)] =
              "VRInitError_Init_VRDashboardAlreadyStarted"),
            (e[(e.VRInitError_Init_VRDashboardCopyFailed = 164)] =
              "VRInitError_Init_VRDashboardCopyFailed"),
            (e[(e.VRInitError_Init_VRDashboardTokenFailure = 165)] =
              "VRInitError_Init_VRDashboardTokenFailure"),
            (e[(e.VRInitError_Init_VRDashboardEnvironmentFailure = 166)] =
              "VRInitError_Init_VRDashboardEnvironmentFailure"),
            (e[(e.VRInitError_Init_VRDashboardPathFailure = 167)] =
              "VRInitError_Init_VRDashboardPathFailure"),
            (e[(e.VRInitError_Driver_Failed = 200)] =
              "VRInitError_Driver_Failed"),
            (e[(e.VRInitError_Driver_Unknown = 201)] =
              "VRInitError_Driver_Unknown"),
            (e[(e.VRInitError_Driver_HmdUnknown = 202)] =
              "VRInitError_Driver_HmdUnknown"),
            (e[(e.VRInitError_Driver_NotLoaded = 203)] =
              "VRInitError_Driver_NotLoaded"),
            (e[(e.VRInitError_Driver_RuntimeOutOfDate = 204)] =
              "VRInitError_Driver_RuntimeOutOfDate"),
            (e[(e.VRInitError_Driver_HmdInUse = 205)] =
              "VRInitError_Driver_HmdInUse"),
            (e[(e.VRInitError_Driver_NotCalibrated = 206)] =
              "VRInitError_Driver_NotCalibrated"),
            (e[(e.VRInitError_Driver_CalibrationInvalid = 207)] =
              "VRInitError_Driver_CalibrationInvalid"),
            (e[(e.VRInitError_Driver_HmdDisplayNotFound = 208)] =
              "VRInitError_Driver_HmdDisplayNotFound"),
            (e[(e.VRInitError_Driver_TrackedDeviceInterfaceUnknown = 209)] =
              "VRInitError_Driver_TrackedDeviceInterfaceUnknown"),
            (e[(e.VRInitError_Driver_HmdDriverIdOutOfBounds = 211)] =
              "VRInitError_Driver_HmdDriverIdOutOfBounds"),
            (e[(e.VRInitError_Driver_HmdDisplayMirrored = 212)] =
              "VRInitError_Driver_HmdDisplayMirrored"),
            (e[(e.VRInitError_Driver_HmdDisplayNotFoundLaptop = 213)] =
              "VRInitError_Driver_HmdDisplayNotFoundLaptop"),
            (e[(e.VRInitError_Driver_PeerDriverNotInstalled = 214)] =
              "VRInitError_Driver_PeerDriverNotInstalled"),
            (e[(e.VRInitError_Driver_WirelessHmdNotConnected = 215)] =
              "VRInitError_Driver_WirelessHmdNotConnected"),
            (e[(e.VRInitError_IPC_ServerInitFailed = 300)] =
              "VRInitError_IPC_ServerInitFailed"),
            (e[(e.VRInitError_IPC_ConnectFailed = 301)] =
              "VRInitError_IPC_ConnectFailed"),
            (e[(e.VRInitError_IPC_SharedStateInitFailed = 302)] =
              "VRInitError_IPC_SharedStateInitFailed"),
            (e[(e.VRInitError_IPC_CompositorInitFailed = 303)] =
              "VRInitError_IPC_CompositorInitFailed"),
            (e[(e.VRInitError_IPC_MutexInitFailed = 304)] =
              "VRInitError_IPC_MutexInitFailed"),
            (e[(e.VRInitError_IPC_Failed = 305)] = "VRInitError_IPC_Failed"),
            (e[(e.VRInitError_IPC_CompositorConnectFailed = 306)] =
              "VRInitError_IPC_CompositorConnectFailed"),
            (e[(e.VRInitError_IPC_CompositorInvalidConnectResponse = 307)] =
              "VRInitError_IPC_CompositorInvalidConnectResponse"),
            (e[(e.VRInitError_IPC_ConnectFailedAfterMultipleAttempts = 308)] =
              "VRInitError_IPC_ConnectFailedAfterMultipleAttempts"),
            (e[(e.VRInitError_IPC_ConnectFailedAfterTargetExited = 309)] =
              "VRInitError_IPC_ConnectFailedAfterTargetExited"),
            (e[(e.VRInitError_IPC_NamespaceUnavailable = 310)] =
              "VRInitError_IPC_NamespaceUnavailable"),
            (e[(e.VRInitError_Compositor_Failed = 400)] =
              "VRInitError_Compositor_Failed"),
            (e[(e.VRInitError_Compositor_D3D11HardwareRequired = 401)] =
              "VRInitError_Compositor_D3D11HardwareRequired"),
            (e[(e.VRInitError_Compositor_FirmwareRequiresUpdate = 402)] =
              "VRInitError_Compositor_FirmwareRequiresUpdate"),
            (e[(e.VRInitError_Compositor_OverlayInitFailed = 403)] =
              "VRInitError_Compositor_OverlayInitFailed"),
            (e[(e.VRInitError_Compositor_ScreenshotsInitFailed = 404)] =
              "VRInitError_Compositor_ScreenshotsInitFailed"),
            (e[(e.VRInitError_Compositor_UnableToCreateDevice = 405)] =
              "VRInitError_Compositor_UnableToCreateDevice"),
            (e[(e.VRInitError_Compositor_SharedStateIsNull = 406)] =
              "VRInitError_Compositor_SharedStateIsNull"),
            (e[(e.VRInitError_Compositor_NotificationManagerIsNull = 407)] =
              "VRInitError_Compositor_NotificationManagerIsNull"),
            (e[(e.VRInitError_Compositor_ResourceManagerClientIsNull = 408)] =
              "VRInitError_Compositor_ResourceManagerClientIsNull"),
            (e[
              (e.VRInitError_Compositor_MessageOverlaySharedStateInitFailure = 409)
            ] = "VRInitError_Compositor_MessageOverlaySharedStateInitFailure"),
            (e[(e.VRInitError_Compositor_PropertiesInterfaceIsNull = 410)] =
              "VRInitError_Compositor_PropertiesInterfaceIsNull"),
            (e[(e.VRInitError_Compositor_CreateFullscreenWindowFailed = 411)] =
              "VRInitError_Compositor_CreateFullscreenWindowFailed"),
            (e[(e.VRInitError_Compositor_SettingsInterfaceIsNull = 412)] =
              "VRInitError_Compositor_SettingsInterfaceIsNull"),
            (e[(e.VRInitError_Compositor_FailedToShowWindow = 413)] =
              "VRInitError_Compositor_FailedToShowWindow"),
            (e[(e.VRInitError_Compositor_DistortInterfaceIsNull = 414)] =
              "VRInitError_Compositor_DistortInterfaceIsNull"),
            (e[(e.VRInitError_Compositor_DisplayFrequencyFailure = 415)] =
              "VRInitError_Compositor_DisplayFrequencyFailure"),
            (e[(e.VRInitError_Compositor_RendererInitializationFailed = 416)] =
              "VRInitError_Compositor_RendererInitializationFailed"),
            (e[(e.VRInitError_Compositor_DXGIFactoryInterfaceIsNull = 417)] =
              "VRInitError_Compositor_DXGIFactoryInterfaceIsNull"),
            (e[(e.VRInitError_Compositor_DXGIFactoryCreateFailed = 418)] =
              "VRInitError_Compositor_DXGIFactoryCreateFailed"),
            (e[(e.VRInitError_Compositor_DXGIFactoryQueryFailed = 419)] =
              "VRInitError_Compositor_DXGIFactoryQueryFailed"),
            (e[(e.VRInitError_Compositor_InvalidAdapterDesktop = 420)] =
              "VRInitError_Compositor_InvalidAdapterDesktop"),
            (e[(e.VRInitError_Compositor_InvalidHmdAttachment = 421)] =
              "VRInitError_Compositor_InvalidHmdAttachment"),
            (e[(e.VRInitError_Compositor_InvalidOutputDesktop = 422)] =
              "VRInitError_Compositor_InvalidOutputDesktop"),
            (e[(e.VRInitError_Compositor_InvalidDeviceProvided = 423)] =
              "VRInitError_Compositor_InvalidDeviceProvided"),
            (e[
              (e.VRInitError_Compositor_D3D11RendererInitializationFailed = 424)
            ] = "VRInitError_Compositor_D3D11RendererInitializationFailed"),
            (e[(e.VRInitError_Compositor_FailedToFindDisplayMode = 425)] =
              "VRInitError_Compositor_FailedToFindDisplayMode"),
            (e[(e.VRInitError_Compositor_FailedToCreateSwapChain = 426)] =
              "VRInitError_Compositor_FailedToCreateSwapChain"),
            (e[(e.VRInitError_Compositor_FailedToGetBackBuffer = 427)] =
              "VRInitError_Compositor_FailedToGetBackBuffer"),
            (e[(e.VRInitError_Compositor_FailedToCreateRenderTarget = 428)] =
              "VRInitError_Compositor_FailedToCreateRenderTarget"),
            (e[(e.VRInitError_Compositor_FailedToCreateDXGI2SwapChain = 429)] =
              "VRInitError_Compositor_FailedToCreateDXGI2SwapChain"),
            (e[(e.VRInitError_Compositor_FailedtoGetDXGI2BackBuffer = 430)] =
              "VRInitError_Compositor_FailedtoGetDXGI2BackBuffer"),
            (e[
              (e.VRInitError_Compositor_FailedToCreateDXGI2RenderTarget = 431)
            ] = "VRInitError_Compositor_FailedToCreateDXGI2RenderTarget"),
            (e[
              (e.VRInitError_Compositor_FailedToGetDXGIDeviceInterface = 432)
            ] = "VRInitError_Compositor_FailedToGetDXGIDeviceInterface"),
            (e[(e.VRInitError_Compositor_SelectDisplayMode = 433)] =
              "VRInitError_Compositor_SelectDisplayMode"),
            (e[
              (e.VRInitError_Compositor_FailedToCreateNvAPIRenderTargets = 434)
            ] = "VRInitError_Compositor_FailedToCreateNvAPIRenderTargets"),
            (e[(e.VRInitError_Compositor_NvAPISetDisplayMode = 435)] =
              "VRInitError_Compositor_NvAPISetDisplayMode"),
            (e[
              (e.VRInitError_Compositor_FailedToCreateDirectModeDisplay = 436)
            ] = "VRInitError_Compositor_FailedToCreateDirectModeDisplay"),
            (e[(e.VRInitError_Compositor_InvalidHmdPropertyContainer = 437)] =
              "VRInitError_Compositor_InvalidHmdPropertyContainer"),
            (e[(e.VRInitError_Compositor_UpdateDisplayFrequency = 438)] =
              "VRInitError_Compositor_UpdateDisplayFrequency"),
            (e[(e.VRInitError_Compositor_CreateRasterizerState = 439)] =
              "VRInitError_Compositor_CreateRasterizerState"),
            (e[
              (e.VRInitError_Compositor_CreateWireframeRasterizerState = 440)
            ] = "VRInitError_Compositor_CreateWireframeRasterizerState"),
            (e[(e.VRInitError_Compositor_CreateSamplerState = 441)] =
              "VRInitError_Compositor_CreateSamplerState"),
            (e[
              (e.VRInitError_Compositor_CreateClampToBorderSamplerState = 442)
            ] = "VRInitError_Compositor_CreateClampToBorderSamplerState"),
            (e[(e.VRInitError_Compositor_CreateAnisoSamplerState = 443)] =
              "VRInitError_Compositor_CreateAnisoSamplerState"),
            (e[(e.VRInitError_Compositor_CreateOverlaySamplerState = 444)] =
              "VRInitError_Compositor_CreateOverlaySamplerState"),
            (e[(e.VRInitError_Compositor_CreatePanoramaSamplerState = 445)] =
              "VRInitError_Compositor_CreatePanoramaSamplerState"),
            (e[(e.VRInitError_Compositor_CreateFontSamplerState = 446)] =
              "VRInitError_Compositor_CreateFontSamplerState"),
            (e[(e.VRInitError_Compositor_CreateNoBlendState = 447)] =
              "VRInitError_Compositor_CreateNoBlendState"),
            (e[(e.VRInitError_Compositor_CreateBlendState = 448)] =
              "VRInitError_Compositor_CreateBlendState"),
            (e[(e.VRInitError_Compositor_CreateAlphaBlendState = 449)] =
              "VRInitError_Compositor_CreateAlphaBlendState"),
            (e[(e.VRInitError_Compositor_CreateBlendStateMaskR = 450)] =
              "VRInitError_Compositor_CreateBlendStateMaskR"),
            (e[(e.VRInitError_Compositor_CreateBlendStateMaskG = 451)] =
              "VRInitError_Compositor_CreateBlendStateMaskG"),
            (e[(e.VRInitError_Compositor_CreateBlendStateMaskB = 452)] =
              "VRInitError_Compositor_CreateBlendStateMaskB"),
            (e[(e.VRInitError_Compositor_CreateDepthStencilState = 453)] =
              "VRInitError_Compositor_CreateDepthStencilState"),
            (e[
              (e.VRInitError_Compositor_CreateDepthStencilStateNoWrite = 454)
            ] = "VRInitError_Compositor_CreateDepthStencilStateNoWrite"),
            (e[
              (e.VRInitError_Compositor_CreateDepthStencilStateNoDepth = 455)
            ] = "VRInitError_Compositor_CreateDepthStencilStateNoDepth"),
            (e[(e.VRInitError_Compositor_CreateFlushTexture = 456)] =
              "VRInitError_Compositor_CreateFlushTexture"),
            (e[(e.VRInitError_Compositor_CreateDistortionSurfaces = 457)] =
              "VRInitError_Compositor_CreateDistortionSurfaces"),
            (e[(e.VRInitError_Compositor_CreateConstantBuffer = 458)] =
              "VRInitError_Compositor_CreateConstantBuffer"),
            (e[(e.VRInitError_Compositor_CreateHmdPoseConstantBuffer = 459)] =
              "VRInitError_Compositor_CreateHmdPoseConstantBuffer"),
            (e[
              (e.VRInitError_Compositor_CreateHmdPoseStagingConstantBuffer = 460)
            ] = "VRInitError_Compositor_CreateHmdPoseStagingConstantBuffer"),
            (e[
              (e.VRInitError_Compositor_CreateSharedFrameInfoConstantBuffer = 461)
            ] = "VRInitError_Compositor_CreateSharedFrameInfoConstantBuffer"),
            (e[(e.VRInitError_Compositor_CreateOverlayConstantBuffer = 462)] =
              "VRInitError_Compositor_CreateOverlayConstantBuffer"),
            (e[
              (e.VRInitError_Compositor_CreateSceneTextureIndexConstantBuffer = 463)
            ] = "VRInitError_Compositor_CreateSceneTextureIndexConstantBuffer"),
            (e[
              (e.VRInitError_Compositor_CreateReadableSceneTextureIndexConstantBuffer = 464)
            ] =
              "VRInitError_Compositor_CreateReadableSceneTextureIndexConstantBuffer"),
            (e[
              (e.VRInitError_Compositor_CreateLayerGraphicsTextureIndexConstantBuffer = 465)
            ] =
              "VRInitError_Compositor_CreateLayerGraphicsTextureIndexConstantBuffer"),
            (e[
              (e.VRInitError_Compositor_CreateLayerComputeTextureIndexConstantBuffer = 466)
            ] =
              "VRInitError_Compositor_CreateLayerComputeTextureIndexConstantBuffer"),
            (e[
              (e.VRInitError_Compositor_CreateLayerComputeSceneTextureIndexConstantBuffer = 467)
            ] =
              "VRInitError_Compositor_CreateLayerComputeSceneTextureIndexConstantBuffer"),
            (e[
              (e.VRInitError_Compositor_CreateComputeHmdPoseConstantBuffer = 468)
            ] = "VRInitError_Compositor_CreateComputeHmdPoseConstantBuffer"),
            (e[(e.VRInitError_Compositor_CreateGeomConstantBuffer = 469)] =
              "VRInitError_Compositor_CreateGeomConstantBuffer"),
            (e[(e.VRInitError_Compositor_CreatePanelMaskConstantBuffer = 470)] =
              "VRInitError_Compositor_CreatePanelMaskConstantBuffer"),
            (e[(e.VRInitError_Compositor_CreatePixelSimUBO = 471)] =
              "VRInitError_Compositor_CreatePixelSimUBO"),
            (e[(e.VRInitError_Compositor_CreateMSAARenderTextures = 472)] =
              "VRInitError_Compositor_CreateMSAARenderTextures"),
            (e[(e.VRInitError_Compositor_CreateResolveRenderTextures = 473)] =
              "VRInitError_Compositor_CreateResolveRenderTextures"),
            (e[
              (e.VRInitError_Compositor_CreateComputeResolveRenderTextures = 474)
            ] = "VRInitError_Compositor_CreateComputeResolveRenderTextures"),
            (e[
              (e.VRInitError_Compositor_CreateDriverDirectModeResolveTextures = 475)
            ] = "VRInitError_Compositor_CreateDriverDirectModeResolveTextures"),
            (e[
              (e.VRInitError_Compositor_OpenDriverDirectModeResolveTextures = 476)
            ] = "VRInitError_Compositor_OpenDriverDirectModeResolveTextures"),
            (e[(e.VRInitError_Compositor_CreateFallbackSyncTexture = 477)] =
              "VRInitError_Compositor_CreateFallbackSyncTexture"),
            (e[(e.VRInitError_Compositor_ShareFallbackSyncTexture = 478)] =
              "VRInitError_Compositor_ShareFallbackSyncTexture"),
            (e[(e.VRInitError_Compositor_CreateOverlayIndexBuffer = 479)] =
              "VRInitError_Compositor_CreateOverlayIndexBuffer"),
            (e[(e.VRInitError_Compositor_CreateOverlayVertexBuffer = 480)] =
              "VRInitError_Compositor_CreateOverlayVertexBuffer"),
            (e[(e.VRInitError_Compositor_CreateTextVertexBuffer = 481)] =
              "VRInitError_Compositor_CreateTextVertexBuffer"),
            (e[(e.VRInitError_Compositor_CreateTextIndexBuffer = 482)] =
              "VRInitError_Compositor_CreateTextIndexBuffer"),
            (e[(e.VRInitError_Compositor_CreateMirrorTextures = 483)] =
              "VRInitError_Compositor_CreateMirrorTextures"),
            (e[(e.VRInitError_Compositor_CreateLastFrameRenderTexture = 484)] =
              "VRInitError_Compositor_CreateLastFrameRenderTexture"),
            (e[(e.VRInitError_Compositor_CreateMirrorOverlay = 485)] =
              "VRInitError_Compositor_CreateMirrorOverlay"),
            (e[
              (e.VRInitError_Compositor_FailedToCreateVirtualDisplayBackbuffer = 486)
            ] =
              "VRInitError_Compositor_FailedToCreateVirtualDisplayBackbuffer"),
            (e[(e.VRInitError_Compositor_DisplayModeNotSupported = 487)] =
              "VRInitError_Compositor_DisplayModeNotSupported"),
            (e[(e.VRInitError_Compositor_CreateOverlayInvalidCall = 488)] =
              "VRInitError_Compositor_CreateOverlayInvalidCall"),
            (e[
              (e.VRInitError_Compositor_CreateOverlayAlreadyInitialized = 489)
            ] = "VRInitError_Compositor_CreateOverlayAlreadyInitialized"),
            (e[(e.VRInitError_Compositor_FailedToCreateMailbox = 490)] =
              "VRInitError_Compositor_FailedToCreateMailbox"),
            (e[(e.VRInitError_Compositor_WindowInterfaceIsNull = 491)] =
              "VRInitError_Compositor_WindowInterfaceIsNull"),
            (e[(e.VRInitError_Compositor_SystemLayerCreateInstance = 492)] =
              "VRInitError_Compositor_SystemLayerCreateInstance"),
            (e[(e.VRInitError_Compositor_SystemLayerCreateSession = 493)] =
              "VRInitError_Compositor_SystemLayerCreateSession"),
            (e[(e.VRInitError_Compositor_CreateInverseDistortUVs = 494)] =
              "VRInitError_Compositor_CreateInverseDistortUVs"),
            (e[(e.VRInitError_Compositor_CreateBackbufferDepth = 495)] =
              "VRInitError_Compositor_CreateBackbufferDepth"),
            (e[
              (e.VRInitError_VendorSpecific_UnableToConnectToOculusRuntime = 1e3)
            ] = "VRInitError_VendorSpecific_UnableToConnectToOculusRuntime"),
            (e[(e.VRInitError_VendorSpecific_WindowsNotInDevMode = 1001)] =
              "VRInitError_VendorSpecific_WindowsNotInDevMode"),
            (e[(e.VRInitError_VendorSpecific_OculusLinkNotEnabled = 1002)] =
              "VRInitError_VendorSpecific_OculusLinkNotEnabled"),
            (e[(e.VRInitError_VendorSpecific_HmdFound_CantOpenDevice = 1101)] =
              "VRInitError_VendorSpecific_HmdFound_CantOpenDevice"),
            (e[
              (e.VRInitError_VendorSpecific_HmdFound_UnableToRequestConfigStart = 1102)
            ] =
              "VRInitError_VendorSpecific_HmdFound_UnableToRequestConfigStart"),
            (e[(e.VRInitError_VendorSpecific_HmdFound_NoStoredConfig = 1103)] =
              "VRInitError_VendorSpecific_HmdFound_NoStoredConfig"),
            (e[(e.VRInitError_VendorSpecific_HmdFound_ConfigTooBig = 1104)] =
              "VRInitError_VendorSpecific_HmdFound_ConfigTooBig"),
            (e[(e.VRInitError_VendorSpecific_HmdFound_ConfigTooSmall = 1105)] =
              "VRInitError_VendorSpecific_HmdFound_ConfigTooSmall"),
            (e[
              (e.VRInitError_VendorSpecific_HmdFound_UnableToInitZLib = 1106)
            ] = "VRInitError_VendorSpecific_HmdFound_UnableToInitZLib"),
            (e[
              (e.VRInitError_VendorSpecific_HmdFound_CantReadFirmwareVersion = 1107)
            ] = "VRInitError_VendorSpecific_HmdFound_CantReadFirmwareVersion"),
            (e[
              (e.VRInitError_VendorSpecific_HmdFound_UnableToSendUserDataStart = 1108)
            ] =
              "VRInitError_VendorSpecific_HmdFound_UnableToSendUserDataStart"),
            (e[
              (e.VRInitError_VendorSpecific_HmdFound_UnableToGetUserDataStart = 1109)
            ] = "VRInitError_VendorSpecific_HmdFound_UnableToGetUserDataStart"),
            (e[
              (e.VRInitError_VendorSpecific_HmdFound_UnableToGetUserDataNext = 1110)
            ] = "VRInitError_VendorSpecific_HmdFound_UnableToGetUserDataNext"),
            (e[
              (e.VRInitError_VendorSpecific_HmdFound_UserDataAddressRange = 1111)
            ] = "VRInitError_VendorSpecific_HmdFound_UserDataAddressRange"),
            (e[(e.VRInitError_VendorSpecific_HmdFound_UserDataError = 1112)] =
              "VRInitError_VendorSpecific_HmdFound_UserDataError"),
            (e[
              (e.VRInitError_VendorSpecific_HmdFound_ConfigFailedSanityCheck = 1113)
            ] = "VRInitError_VendorSpecific_HmdFound_ConfigFailedSanityCheck"),
            (e[(e.VRInitError_VendorSpecific_OculusRuntimeBadInstall = 1114)] =
              "VRInitError_VendorSpecific_OculusRuntimeBadInstall"),
            (e[
              (e.VRInitError_VendorSpecific_HmdFound_UnexpectedConfiguration_1 = 1115)
            ] =
              "VRInitError_VendorSpecific_HmdFound_UnexpectedConfiguration_1"),
            (e[(e.VRInitError_Steam_SteamInstallationNotFound = 2e3)] =
              "VRInitError_Steam_SteamInstallationNotFound"),
            (e[(e.VRInitError_LastError = 2001)] = "VRInitError_LastError");
        })(me || (me = {}));
      var he = o(373);
      function pe(e) {
        return null != e && void 0 !== e.focus;
      }
      function Ie(e) {
        let t;
        return e && (t = e.ownerDocument.defaultView), t;
      }
      function ge(e, t) {
        let o = e.parentElement;
        for (; o; ) {
          if (!t || "x" == t) {
            let e = window.getComputedStyle(o);
            if (
              "scroll" == e.overflowX ||
              "auto" == e.overflowX ||
              "fixed" == e.position
            )
              break;
          }
          if (!t || "y" == t) {
            let e = window.getComputedStyle(o);
            if (
              "scroll" == e.overflowY ||
              "auto" == e.overflowY ||
              "fixed" == e.position
            )
              break;
          }
          o = o.parentElement;
        }
        return o;
      }
      function Ce(e, t) {
        if (!("ownerDocument" in e)) return !0;
        const o = e.ownerDocument.defaultView.getComputedStyle(e),
          r = "x" === t ? o.overflowX : o.overflowY;
        return "auto" === r || "scroll" === r;
      }
      function Ee(e, t, o) {
        if ("childList" === e.type) {
          for (let o = 0; o < e.addedNodes.length; o++) {
            const r = e.addedNodes[o];
            if (r.nodeType === Node.ELEMENT_NODE) {
              const e = r;
              e.parentElement && t(e);
            }
          }
          for (let t = 0; t < e.removedNodes.length; t++) {
            const r = e.removedNodes[t];
            r.nodeType === Node.ELEMENT_NODE && o(r);
          }
        }
      }
      const ve = new f("FocusNavigation").Debug;
      class Re {
        constructor(e, t) {
          (this.m_bActive = !1),
            (this.m_rgGamepadNavigationTrees = []),
            (this.m_LastActiveNavTree = null),
            (this.m_LastActiveFocusNavTree = null),
            (this.m_bMounted = !0),
            (this.m_schDeferredActivate = new g.Ar()),
            (this.m_FocusChangedCallbacks = new g.pB()),
            (this.m_ActiveCallbacks = new g.pB()),
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
            ? (ve(`${this.LogName(e)} Destroying context for window`),
              (this.m_bMounted = !1),
              this.m_schDeferredActivate.Cancel(),
              this.SetActive(!1, e))
            : ve(`${this.LogName(e)} Child window destroyed`);
        }
        SetActive(e, t, o) {
          e
            ? ((this.m_activeWindow = t),
              (this.m_activeBrowserView = o),
              this.m_controller.OnContextActivated(this))
            : ((this.m_activeBrowserView = void 0),
              this.m_controller.OnContextDeactivated(this, !1)),
            this.m_bActive != e &&
              ((this.m_bActive = e), this.m_ActiveCallbacks.Dispatch(e));
        }
        OnActivate(e) {
          ve(
            `${this.LogName(e)} Activating context, there are ${
              this.m_rgGamepadNavigationTrees.length
            } trees in this context`
          ),
            this.SetActive(!0, e);
        }
        OnActivateBrowserView(e, t) {
          ve(`${this.LogName(e)} Browser View "${t}" activated in context`),
            this.SetActive(!0, e, t);
        }
        OnDeactivate(e) {
          this.m_activeWindow == e
            ? (ve(`${this.LogName(e)} Deactivate context for window`),
              this.SetActive(!1, e))
            : ve(
                `${this.LogName(e)} Blurred, but not deactivating because (${
                  this.m_activeWindow.name
                }) has focus.`
              );
        }
        OnDeactivateBrowserView(e, t) {
          ve(`${this.LogName(e)} Browser View "${t}" deactivated in context`),
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
          const o = this.m_LastActiveNavTree;
          o && he.Zf(this.m_rgGamepadNavigationTrees, o),
            e ||
              (this.m_rgGamepadNavigationTrees.length &&
                (e =
                  this.m_rgGamepadNavigationTrees[
                    this.m_rgGamepadNavigationTrees.length - 1
                  ]));
          const r = this.m_LastActiveFocusNavTree == e;
          e && he.Zf(this.m_rgGamepadNavigationTrees, e),
            (this.m_LastActiveNavTree = e),
            (e && e.BUseVirtualFocus()) || (this.m_LastActiveFocusNavTree = e),
            ve(
              `${this.LogName(e.Window)} Move from nav tree ${
                null == o ? void 0 : o.id
              } to nav tree ${null == e ? void 0 : e.id} ${
                t ? "taking focus" : "no focus"
              }`
            ),
            o && this.m_rgGamepadNavigationTrees.push(o),
            e &&
              (this.m_rgGamepadNavigationTrees.push(e),
              r ||
                !t ||
                e.DeferredFocus.BHasQueuedFocusNode() ||
                e.DeferredFocus.RequestFocus(e.Root)),
            o && o != this.m_LastActiveFocusNavTree && o.OnDeactivate(e),
            e && !r && e.OnActivate(o);
        }
        BlurNavTree(e) {
          this.m_LastActiveNavTree == e && this.SetActiveNavTree(null, !0),
            he.Zf(this.m_rgGamepadNavigationTrees, e),
            this.m_rgGamepadNavigationTrees.unshift(e);
        }
        UnregisterGamepadNavigationTree(e) {
          he.Zf(this.m_rgGamepadNavigationTrees, e),
            ve(
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
        OnFocusChangeStart(e, t, o, r) {
          return (
            0 == this.m_iFocusChangeStack
              ? (this.m_ActiveFocusChange = { source: e, from: o, to: r })
              : !this.m_ActiveFocusChange.from &&
                o &&
                (this.m_ActiveFocusChange.from = o),
            this.m_iFocusChangeStack++
          );
        }
        OnFocusChangeComplete(e) {
          if (
            (this.m_iFocusChangeStack--,
            p(e == this.m_iFocusChangeStack, "out of order focus pop"),
            0 == this.m_iFocusChangeStack)
          ) {
            const { source: e, from: t, to: o } = this.m_ActiveFocusChange;
            this.m_FocusChangedCallbacks.Dispatch(e, t, o);
          }
        }
      }
      const fe = new f("FocusNavigation").Debug,
        Se = new f("GamepadEvents").Debug;
      class ye {
        constructor(e, t, o) {
          (this.m_onActivateCallbacks = new g.pB()),
            (this.m_onDeactivateCallbacks = new g.pB()),
            (this.m_onActiveFocusStateChangedCallbacks = new g.pB()),
            (this.m_lastFocusNodeXMovement = new Te()),
            (this.m_lastFocusNodeYMovement = new Te()),
            (this.m_DeferredFocus = new Fe(this)),
            (this.m_Controller = e),
            (this.m_context = t),
            (this.m_ID = o),
            (this.m_Root = new dt(this, null, null)),
            this.m_Root.SetProperties({ layout: st.COLUMN }),
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
          return new dt(this, e, t);
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
          let o = !1;
          t
            ? (o = this.Root.BVisibleChildTakeFocus(e))
            : this.m_lastFocusNode && (o = this.m_lastFocusNode.BTakeFocus(e)),
            o || (o = this.Root.BTakeFocus(e)),
            o || this.TransferFocus(e, this.Root);
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
          let { bUnhandled: t, bHadLogicalEventMapping: o } = (function (e) {
            const t = [
              s.eV.DIR_UP,
              s.eV.DIR_DOWN,
              s.eV.DIR_LEFT,
              s.eV.DIR_RIGHT,
            ];
            let o = !0,
              r = !1,
              n = l[e.detail.button];
            return (
              n
                ? ((r = !0), (o = d(e.target, n, e.detail)))
                : -1 !== t.indexOf(e.detail.button) &&
                  ((r = !0), (o = d(e.target, "vgp_ondirection", e.detail))),
              { bUnhandled: o, bHadLogicalEventMapping: r }
            );
          })(e);
          return (
            Se(
              `Logical gamepad Event fired: ${
                s.eV[e.detail.button]
              }, had logical event: ${o}, was handled: ${!t}`
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
        TransferFocus(e, t, o) {
          this.m_Controller.BatchedUpdate(() =>
            this.TransferFocusInternal(e, t, o)
          );
        }
        TransferFocusInternal(e, t, o) {
          const n = this.m_lastFocusNode;
          if (
            n == t &&
            (this.m_bWasActiveForLastFocusChange || !this.BIsActive())
          )
            return;
          fe(
            `Transfer focus in ${this.id}, source: ${r[e]}, from/to:`,
            null == n ? void 0 : n.m_element,
            null == t ? void 0 : t.m_element
          );
          const i = { blurredNode: n, focusedNode: t, source: e },
            a = (function (e, t) {
              if (!t || !e) return null;
              let o = t,
                r = e;
              for (; o.GetDepth() > r.GetDepth() && o.Parent; ) o = o.Parent;
              for (; r.GetDepth() > o.GetDepth() && r.Parent; ) r = r.Parent;
              for (; o != r && o && r; ) (o = o.Parent), (r = r.Parent);
              return o;
            })(n, t);
          if (n) {
            n.SetHasFocus(!1);
            for (let e = n; e && e != a; e = e.Parent) e.SetFocusWithin(!1);
          }
          if (t) {
            t.SetHasFocus(!0);
            for (let e = t; e && e != a; e = e.Parent) e.SetFocusWithin(!0);
          }
          let s = this.m_context.OnFocusChangeStart(e, this, n, t);
          t && t.SetDOMFocusAndScroll(e, n),
            n &&
              (d(n.Element, "vgp_onblur", i),
              !n.m_FocusRing ||
                (t && n.m_FocusRing == t.m_FocusRing) ||
                n.m_FocusRing.OnBlur(e, n, t)),
            t &&
              (d(t.Element, "vgp_onfocus", i),
              t.m_FocusRing &&
                (n && t.m_FocusRing == n.m_FocusRing
                  ? t.m_FocusRing.OnFocusChange(e, n, t)
                  : t.m_FocusRing.OnFocus(e, t, n))),
            (this.m_lastFocusNode = t),
            (this.m_bWasActiveForLastFocusChange = this.BIsActive()),
            "x" == o
              ? this.m_lastFocusNodeXMovement.SetNode(t.Element)
              : "y" == o
              ? this.m_lastFocusNodeYMovement.SetNode(t.Element)
              : (this.m_lastFocusNodeXMovement.Reset(),
                this.m_lastFocusNodeYMovement.Reset()),
            this.m_context.OnFocusChangeComplete(s);
        }
      }
      class Te {
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
      class Fe {
        constructor(e) {
          (this.m_schExecuteQueuedFocus = new g.Ar()),
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
              fe(
                `DeferredFocus in ${this.m_tree.id} - focusing ${
                  t ? "descendant of" : "node"
                } ${e.NavKey}`
              ),
              t
                ? e.BChildTakeFocus(r.APPLICATION) ||
                  this.m_tree.TransferFocus(r.APPLICATION, e)
                : e.BTakeFocus(r.APPLICATION);
          }
        }
      }
      const Ve = new f("FocusNavigation").Debug,
        De = (new f("GamepadEvents").Debug, "focus-nav-show-debug-focus-ring");
      class Ae {
        constructor() {
          (this.m_rgGamepadInputSources = []),
            (this.m_rgAllContexts = []),
            (this.m_bGlobalEventsInitialized = !1),
            (this.m_fnCatchAllGamepadInput = null),
            (this.m_UnhandledButtonEventsCallbacks = new g.pB()),
            (this.m_navigationSource = (0, g.vq)({
              eActivationSourceType: s.Rr.UNKNOWN,
              nActiveGamepadIndex: -1,
              nLastActiveGamepadIndex: -1,
            })),
            (this.m_bShowDebugFocusRing = (0, g.vq)(!1)),
            (this.m_bRestoringHistory = !1),
            (this.m_fnGamepadEventUpdateBatcher = (e) => e()),
            (window.FocusNavController = this),
            this.m_bShowDebugFocusRing.Set(
              "shown" == sessionStorage.getItem(De)
            );
        }
        CreateContext(e) {
          const t = new Re(this, e);
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
                Ve(
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
              sessionStorage.setItem(De, e ? "shown" : void 0);
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
          this.OnButtonDown(e, s.Rr.UNKNOWN, -1);
        }
        DispatchVirtualButtonClick(e) {
          this.OnButtonDown(e, s.Rr.GAMEPAD, -1),
            this.OnButtonUp(e, s.Rr.GAMEPAD, -1);
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
            e === s.eV.STEAM_GUIDE ||
            e === s.eV.STEAM_QUICK_MENU ||
            e === s.eV.CANCEL
          );
        }
        GetEventTarget(e, t = !1) {
          const o = this.GetActiveContext();
          let n = null == o ? void 0 : o.ActiveWindow.document.activeElement;
          if (null == o ? void 0 : o.m_LastActiveNavTree) {
            let i = this.m_navigationSource.Value.eActivationSourceType;
            if (
              !(
                o.m_LastActiveNavTree.GetLastFocusedNode() ||
                (i != s.Rr.GAMEPAD && i != s.Rr.KEYBOARD) ||
                (t && o.m_LastActiveNavTree.TakeFocus(r.GAMEPAD, !0),
                this.BGlobalGamepadButton(e))
              )
            )
              return [null, o];
            o.m_LastActiveNavTree.GetLastFocusedNode() &&
              (n = o.m_LastActiveNavTree.GetLastFocusedNode().Element);
          }
          return [n, o];
        }
        ChangeNavigationSource(e, t) {
          let o = this.m_navigationSource.Value,
            r = o.nLastActiveGamepadIndex;
          o.nActiveGamepadIndex >= 0 && (r = o.nActiveGamepadIndex),
            this.m_navigationSource.Set({
              eActivationSourceType: e,
              nActiveGamepadIndex: t,
              nLastActiveGamepadIndex: r,
            }),
            e != s.Rr.MOUSE &&
              b("Browser.HideCursorUntilMouseEvent") &&
              SteamClient.Browser.HideCursorUntilMouseEvent();
        }
        OnButtonDown(e, t, o, r) {
          var n;
          if (this.m_fnCatchAllGamepadInput && this.m_fnCatchAllGamepadInput(e))
            return void Ve(
              "Ignoring button press - gamepad input is suppressed by parent window"
            );
          this.ChangeNavigationSource(t, o);
          const [i, a] = this.GetEventTarget(e, !0);
          Ve(
            `Firing ${s.eV[e]} in tree ${
              null === (n = null == a ? void 0 : a.m_LastActiveNavTree) ||
              void 0 === n
                ? void 0
                : n.id
            } at `,
            i
          ),
            this.BatchedUpdate(() =>
              d(i, "vgp_onbuttondown", { button: e, source: t, is_repeat: r })
            );
        }
        OnButtonUp(e, t, o) {
          if (this.m_fnCatchAllGamepadInput) return;
          this.ChangeNavigationSource(t, o);
          const [r, n] = this.GetEventTarget();
          this.BatchedUpdate(() =>
            d(r, "vgp_onbuttonup", { button: e, source: t, is_repeat: !1 })
          );
        }
        BatchedUpdate(e) {
          this.m_fnGamepadEventUpdateBatcher(e);
        }
        OnNavigationTypeChange(e) {
          var t, o;
          if (
            (this.ChangeNavigationSource(e, -1),
            document.hasFocus() &&
              (e == s.Rr.MOUSE || e == s.Rr.TOUCH) &&
              (null === (t = this.m_ActiveContext) || void 0 === t
                ? void 0
                : t.m_LastActiveNavTree))
          ) {
            const e =
                this.m_ActiveContext.m_LastActiveNavTree.GetLastFocusedNode(),
              t = (function (e) {
                if (!pe(e)) return !1;
                const t = e.tagName,
                  o = ((r = e), "INPUT" === r.nodeName ? e.type : null);
                var r;
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
                })(t, o);
              })(null == e ? void 0 : e.Element)
                ? e
                : null;
            null === (o = this.m_ActiveContext.m_LastActiveNavTree) ||
              void 0 === o ||
              o.TransferFocus(r.BROWSER, t);
          }
        }
        NewGamepadNavigationTree(e, t) {
          return new ye(this, e, t);
        }
        RegisterGamepadNavigationTree(e, t, o) {
          const r = e.WindowContext;
          return (
            e.SetIsMounted(t),
            o || ((this.m_ActiveContext = r), (this.m_LastActiveContext = r)),
            r.AddNavTree(e, o),
            this.m_bGlobalEventsInitialized || this.BindGlobalEventHandlers(),
            () => r.UnregisterGamepadNavigationTree(e)
          );
        }
        OnGamepadNavigationTreeActivated(e, t = !1) {
          e.WindowContext.SetActiveNavTree(e, t);
        }
        OnGamepadNavigationTreeFocused(e, t, o = !1) {
          const n = e.WindowContext;
          n != this.m_ActiveContext &&
            Ve(`(${n.LogName(e.Window)}) Focus event in inactive window`),
            e != n.m_LastActiveFocusNavTree &&
              e != n.m_LastActiveNavTree &&
              (n.m_LastActiveFocusNavTree.GetParentEmbeddedNavTree() == e ||
              e.GetParentEmbeddedNavTree() == n.m_LastActiveFocusNavTree
                ? (Ve(
                    `There was a focus event in ${e.id}, allowing focus transfer to activate nav tree due to parent embedded relationship`
                  ),
                  e.Activate())
                : Ve(
                    `There was a focus event in ${e.id}, but the active nav tree is ${n.m_LastActiveFocusNavTree.id} so it is being ignored.  Source: ${r[t]}.`
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
          e && e.TakeFocus(r.APPLICATION);
        }
        OnContextActivated(e) {
          (this.m_ActiveContext = e), (this.m_LastActiveContext = e);
        }
        OnContextDeactivated(e, t) {
          t &&
            (this.m_LastActiveContext == e &&
              (this.m_LastActiveContext = void 0),
            he.Zf(this.m_rgAllContexts, e)),
            this.m_ActiveContext == e && (this.m_ActiveContext = void 0);
        }
        BIsRestoringHistory() {
          return this.m_bRestoringHistory;
        }
        RestoreHistoryTransaction(e) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            this.m_bRestoringHistory = !0;
            try {
              yield e();
            } finally {
              this.m_bRestoringHistory = !1;
            }
          });
        }
      }
      (0, n.gn)([I.a], Ae.prototype, "OnButtonDown", null),
        (0, n.gn)([I.a], Ae.prototype, "OnButtonUp", null),
        (0, n.gn)([I.a], Ae.prototype, "OnNavigationTypeChange", null);
      class be {
        constructor(e) {
          this.m_node = e;
        }
        TakeFocus(e) {
          return this.m_node.BTakeFocus(e ? r.GAMEPAD : r.APPLICATION, e);
        }
        ParentTakeFocus(e) {
          this.m_node.Parent.BTakeFocus(e ? r.GAMEPAD : r.APPLICATION, e);
        }
        ChildTakeFocus(e) {
          return this.m_node.BChildTakeFocus(e ? r.GAMEPAD : r.APPLICATION, e);
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
          this.m_History || (this.m_History = new V(this.m_node)),
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
      function ke(e, t, o, r = 0.001) {
        return "x" == e
          ? t.x + t.width > o.x + r && t.x + r < o.x + o.width
          : "y" == e
          ? t.y + t.height > o.y + r && t.y + r < o.y + o.height
          : (p(!1, `Invalid axis ${e}`), !1);
      }
      function Ne(e, t, o) {
        let r;
        return (
          "x" == e
            ? (r = Math.min(t.x + t.width, o.x + o.width) - Math.max(t.x, o.x))
            : "y" == e
            ? (r =
                Math.min(t.y + t.height, o.y + o.height) - Math.max(t.y, o.y))
            : (p(!1, `Invalid axis ${e}`), (r = 0)),
          r < 0 ? 0 : r
        );
      }
      function we(e, t, o) {
        const r = t[e],
          n = (function (e, t) {
            return "x" == e
              ? { min: t.x, max: t.x + t.width }
              : "y" == e
              ? { min: t.y, max: t.y + t.height }
              : void p(!1, `Invalid axis ${e}`);
          })(e, o);
        return r < n.min ? n.min - r : r > n.max ? r - n.max : 0;
      }
      function Pe(e) {
        if (!e) return st.NONE;
        const t = e.ownerDocument.defaultView,
          o = t.getComputedStyle(e);
        if ("flex" == o.display)
          switch (o.flexDirection) {
            case "row":
              return "wrap" == o.flexWrap ? st.GRID : st.ROW;
            case "row-reverse":
              return st.ROW_REVERSE;
            case "column":
              return st.COLUMN;
            case "column-reverse":
              return st.COLUMN_REVERSE;
          }
        else {
          if ("grid" == o.display) return st.GRID;
          if (e.childElementCount > 0) {
            const o = t.getComputedStyle(e.firstElementChild);
            if ("left" === o.float) return st.ROW;
            if ("right" === o.float) return st.ROW_REVERSE;
            if ("inline" === o.display || "inline-block" === o.display)
              return st.GRID;
          }
        }
        return st.COLUMN;
      }
      function Le(e) {
        switch (e) {
          case s.eV.DIR_UP:
          case s.eV.DIR_DOWN:
            return "y";
          case s.eV.DIR_LEFT:
          case s.eV.DIR_RIGHT:
            return "x";
          default:
            return;
        }
      }
      function Oe(e, t, o) {
        const r = [],
          [n, i] = e.GetChildren(),
          a = e.GetActiveChild();
        let s;
        const l = a ? a.Element.getBoundingClientRect() : null;
        if (a) {
          const e = xe(a, t, o);
          if (
            e &&
            !e.offScreen &&
            ((s = Me(a, e, e.overlap, o)), s && !s.visibility.offScreen)
          )
            return s;
          e && r.push({ child: a, visibility: e });
        }
        const c = o || l;
        for (let e = 0; e < n.length; e++) {
          const o = n[e];
          if (o == a) continue;
          const i = xe(o, t, c);
          i && r.push({ child: o, visibility: i });
        }
        let _;
        r.sort(Be);
        for (const e of r) {
          const { child: o, visibility: r } = e;
          if (r.offScreen && _) {
            if (!_.visibility.offScreen) break;
            if (r.distance > _.visibility.distance) break;
          }
          const n = o == a ? s : Me(o, r, r.overlap || t, c);
          n && (!_ || Be(n, _) < 0) && (_ = n);
        }
        return _;
      }
      function Me(e, t, o, r) {
        switch (e.GetFocusable()) {
          case "none":
            return null;
          case "children":
            return Oe(e, t.overlap || o, r);
          case "self":
            return { child: e, visibility: t };
        }
      }
      function Be(e, t) {
        const o = e.visibility,
          r = t.visibility;
        return o.offScreen
          ? r.offScreen
            ? o.distance - r.distance
            : 1
          : r.offScreen
          ? -1
          : o.distance - r.distance;
      }
      function xe(e, t, o) {
        const r = e.Element.getBoundingClientRect(),
          n = e.GetFocusable();
        let i;
        if ("none" == n) return null;
        if ("self" == n) {
          if (
            r.top < t.top ||
            r.right > t.right ||
            r.bottom > t.bottom ||
            r.left < t.left
          ) {
            const e = r.top + r.height / 2,
              o = r.left + r.width / 2;
            if (e < t.top) return { offScreen: "top", distance: t.top - e };
            if (o > t.right)
              return { offScreen: "right", distance: o - t.right };
            if (e > t.bottom)
              return { offScreen: "bottom", distance: e - t.bottom };
            if (o < t.left) return { offScreen: "left", distance: t.left - o };
          }
          o &&
            (i = (function (e, t) {
              let o = 0,
                r = 0;
              return (
                t.right < e.left
                  ? (o = e.left - t.right)
                  : t.left > e.right && (o = t.left - e.right),
                t.bottom < e.top
                  ? (r = e.top - t.bottom)
                  : t.top > e.bottom && (r = t.top - e.bottom),
                Math.sqrt(o * o + r * r)
              );
            })(r, o));
        } else if ("children" == n) {
          const o = e.Element;
          if (o.scrollHeight > r.height || o.scrollWidth > r.width) {
            const e = o.ownerDocument.defaultView.getComputedStyle(o);
            if ("visible" == e.overflowX || "visible" == e.overflowY)
              return { overlap: t };
          }
          if (r.bottom < t.top)
            return { offScreen: "top", distance: t.top - r.bottom };
          if (r.left > t.right)
            return { offScreen: "right", distance: r.left - t.right };
          if (r.top > t.bottom)
            return { offScreen: "bottom", distance: r.top - t.bottom };
          if (r.right < t.left)
            return { offScreen: "left", distance: t.left - r.right };
        }
        return {
          overlap: {
            top: Math.max(r.top, t.top),
            right: Math.min(r.right, t.right),
            bottom: Math.min(r.bottom, t.bottom),
            left: Math.max(r.left, t.left),
          },
          distance: i,
        };
      }
      function Ge(e, t, o) {
        return null == e || isNaN(e) ? e : Math.max(t, Math.min(o, e));
      }
      class Ue {
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
          let o = t / this.m_options.msDuration;
          try {
            this.Update(e(o));
          } catch (e) {}
          this.m_window.requestAnimationFrame(this.m_fnBoundAnimationFunc);
        }
        ClearInterval() {
          this.m_bActive = !1;
        }
      }
      class We extends Ue {
        constructor(e, t, o) {
          super(e, t), (this.m_fnCallback = o);
        }
        Update(e) {
          this.m_fnCallback(e);
        }
      }
      class He extends Ue {
        constructor(e, t, o) {
          super("ownerDocument" in e ? Ie(e) : e, o),
            (this.m_props = {}),
            (this.m_object = e),
            (this.m_propTargets = t);
        }
        Start() {
          this.m_props = {};
          for (let e in this.m_propTargets) {
            let t = parseFloat(this.m_object[e]) || 0,
              o = this.m_propTargets[e];
            t != o && (this.m_props[e] = { start: t, end: o });
          }
          super.Start();
        }
        Update(e) {
          for (let t in this.m_props) {
            let o = this.m_props[t],
              r = o.start + (o.end - o.start) * e;
            this.m_object[t] = r;
          }
        }
      }
      const Ke = new f("ScrollSnap").Debug;
      let $e = !1;
      let Xe;
      function je(e) {
        if (!e) return { left: 0, top: 0, right: 0, bottom: 0 };
        if (!("ownerDocument" in e))
          return {
            left: 0,
            right: e.innerWidth,
            top: 0,
            bottom: e.innerHeight,
          };
        let t = 0,
          o = 0,
          r = e;
        for (; r; ) {
          if (((t += r.offsetTop), (o += r.offsetLeft), "ownerDocument" in r)) {
            if ("fixed" === window.getComputedStyle(r).position) break;
          }
          r = r.offsetParent;
        }
        for (r = null == e ? void 0 : e.parentElement; r; ) {
          const { scrollTop: e, scrollLeft: n } = it(r);
          if (((t -= e), (o -= n), "ownerDocument" in r)) {
            if ("fixed" === window.getComputedStyle(r).position) break;
          }
          r = r.parentElement;
        }
        return {
          left: o,
          top: t,
          right: o + e.offsetWidth,
          bottom: t + e.offsetHeight,
        };
      }
      function ze(e, t) {
        return "x" == t
          ? [e.left, e.right, e.right - e.left]
          : [e.top, e.bottom, e.bottom - e.top];
      }
      function Ye(e, t, o, r) {
        let [n, i, a] = ze(e, r),
          [s, l, c] = ze(t, r),
          [_, d] = ze(o, r);
        return n < s && i > l
          ? 0
          : (n < s && a <= c) || (i > l && a > c)
          ? n - s - _
          : (n < s && a > c) || (i > l && a <= c)
          ? i - l + d
          : 0;
      }
      function qe(e) {
        return "auto" == e
          ? 0
          : e.endsWith("px")
          ? parseInt(e)
          : (console.log("Unsupported length", e), 0);
      }
      function Qe(e) {
        if (!("ownerDocument" in e))
          return { left: 0, right: 0, top: 0, bottom: 0 };
        const t = e.ownerDocument.defaultView.getComputedStyle(e);
        return {
          left: qe(t.scrollMarginLeft),
          right: qe(t.scrollMarginRight),
          top: qe(t.scrollMarginTop),
          bottom: qe(t.scrollMarginBottom),
        };
      }
      function Je(e, t) {
        let o = (function (e) {
          let t;
          return (
            (t =
              "ownerDocument" in e
                ? e.ownerDocument.defaultView.getComputedStyle(e)
                : e.document.defaultView.getComputedStyle(
                    window.document.documentElement
                  )),
            {
              left: qe(t.scrollPaddingLeft),
              right: qe(t.scrollPaddingRight),
              top: qe(t.scrollPaddingTop),
              bottom: qe(t.scrollPaddingBottom),
            }
          );
        })(e);
        return {
          left: Math.max(0, t.left + o.left),
          right: Math.max(0, t.right - o.right),
          top: Math.max(0, t.top + o.top),
          bottom: Math.max(0, t.bottom - o.bottom),
        };
      }
      function Ze(e) {
        return e > -1 && e < 1;
      }
      function et(e, t, o, r, n) {
        Ke(
          "----------------------------------------------------------------------------------"
        ),
          Ke("Scrolling Into View:", t);
        let i = [],
          a = t,
          s = je(t),
          l = null != n ? n : Number.MAX_VALUE;
        for (; a; ) {
          let e = ge(a);
          e || (e = Ie(a));
          let t = Qe(a),
            o = Je(e, je(e)),
            c = nt(e),
            _ = { element: e, left: 0, top: 0 };
          if (
            (Ke(
              "Checking scroll div",
              e,
              `scroll y:${c.scrollTop} of ${c.MaxScrollTop()}, x:${
                c.scrollLeft
              } of ${c.MaxScrollLeft()}, adjusted =>`,
              o,
              "target => ",
              s
            ),
            (r && "y" != r) ||
              !Ce(e, "y") ||
              ((_.top = Ye(s, o, t, "y")),
              (_.top = Ge(_.top, -c.scrollTop, c.MaxScrollTop() - c.scrollTop)),
              n &&
                ((_.top = Math.min(l, Math.abs(_.top)) * (_.top < 0 ? -1 : 1)),
                (l -= Math.abs(_.top))),
              Ke(`- checked y: ${_.top}`)),
            (r && "x" != r) ||
              !Ce(e, "x") ||
              ((_.left = Ye(s, o, t, "x")),
              (_.left = Ge(
                _.left,
                -c.scrollLeft,
                c.MaxScrollLeft() - c.scrollLeft
              )),
              n &&
                ((_.left =
                  Math.min(l, Math.abs(_.left)) * (_.left < 0 ? -1 : 1)),
                (l -= Math.abs(_.left))),
              Ke(`- checked x: ${_.left}`)),
            i.push(_),
            n && !l)
          )
            break;
          if (!("ownerDocument" in e)) break;
          const d = window.getComputedStyle(e);
          if ("fixed" === d.position || "sticky" === d.position) break;
          (a = e),
            (s = {
              top: s.top - _.top,
              right: s.right - _.left,
              bottom: s.bottom - _.top,
              left: s.left - _.left,
            });
        }
        let c = !1;
        for (let e of i) {
          if (Ze(e.left) && Ze(e.top)) continue;
          let t = nt(e.element),
            r = t.scrollTop + e.top,
            n = t.scrollLeft + e.left;
          (n = Ge(n, 0, t.MaxScrollLeft())),
            (r = Ge(r, 0, t.MaxScrollTop())),
            (Ze(t.scrollLeft - n) && Ze(t.scrollTop - r)) ||
              (t.scrollTo({ left: n, top: r, behavior: o }),
              c || (Ke("Scrolling:"), (c = !0)),
              Ke(
                `- ${e.top},${e.left} => ${r}, ${n}, behavior: ${o}`,
                e.element
              ));
        }
      }
      function tt(e, t) {
        const { top: o, left: r, behavior: n } = t,
          i = nt(e);
        i.scrollTo({
          top: i.scrollTop + (null != o ? o : 0),
          left: i.scrollLeft + (null != r ? r : 0),
          behavior: n,
        });
      }
      class ot {
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
          var t, o;
          if ("auto" == e.behavior)
            this.m_animation &&
              (this.m_animation.Cancel(), (this.m_animation = void 0)),
              this.m_window
                ? this.m_window.scrollTo(e)
                : this.m_fnOriginalScrollTo.apply(this.m_element, [e]),
              this.ResetScrollState();
          else {
            const r =
                null !== (t = e.left) && void 0 !== t ? t : this.scrollLeft,
              n = null !== (o = e.top) && void 0 !== o ? o : this.scrollTop;
            let i = "sine";
            this.m_animation && (this.m_animation.Cancel(), (i = "linear"));
            if (
              Math.max(
                Math.abs(this.currentScrollTop - n),
                Math.abs(this.currentScrollLeft - r)
              ) > 0
            ) {
              const e = {
                msDuration: 200,
                timing: i,
                onComplete: this.ResetScrollState,
              };
              if (this.m_window) {
                const t = this.currentScrollLeft,
                  o = this.currentScrollTop;
                this.m_animation = new We(this.m_window, e, (e) => {
                  this.m_window.scrollTo({
                    left: t + (r - t) * e,
                    top: o + (n - o) * e,
                    behavior: "auto",
                  });
                });
              } else
                (this.m_element.style.scrollSnapType = "initial"),
                  (this.m_animation = new He(
                    this.m_element,
                    { scrollTop: n, scrollLeft: r },
                    e
                  ));
              (this.m_scrollLeftTarget = r),
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
      (0, n.gn)([I.a], ot.prototype, "ResetScrollState", null);
      const rt = new WeakMap();
      function nt(e) {
        let t = rt.get(e);
        return t || ((t = new ot(e)), rt.set(e, t)), t;
      }
      function it(e) {
        const t = rt.get(e);
        return t
          ? { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop }
          : { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
      }
      const at = new f("FocusNavigationMovement").Debug;
      var st, lt, ct, _t;
      !(function (e) {
        (e[(e.NONE = 0)] = "NONE"),
          (e[(e.COLUMN = 1)] = "COLUMN"),
          (e[(e.ROW = 2)] = "ROW"),
          (e[(e.COLUMN_REVERSE = 3)] = "COLUMN_REVERSE"),
          (e[(e.ROW_REVERSE = 4)] = "ROW_REVERSE"),
          (e[(e.GRID = 5)] = "GRID"),
          (e[(e.GEOMETRIC = 6)] = "GEOMETRIC");
      })(st || (st = {})),
        (function (e) {
          (e[(e.FIRST = 0)] = "FIRST"),
            (e[(e.LAST = 1)] = "LAST"),
            (e[(e.MAINTAIN_X = 2)] = "MAINTAIN_X"),
            (e[(e.MAINTAIN_Y = 3)] = "MAINTAIN_Y"),
            (e[(e.PREFERRED_CHILD = 4)] = "PREFERRED_CHILD");
        })(lt || (lt = {})),
        (function (e) {
          (e[(e.Standard = 0)] = "Standard"),
            (e[(e.NoTransform = 1)] = "NoTransform"),
            (e[(e.NoTransformSparseContent = 2)] = "NoTransformSparseContent");
        })(ct || (ct = {})),
        (function (e) {
          (e[(e.INVALID = 0)] = "INVALID"),
            (e[(e.FORWARD = 1)] = "FORWARD"),
            (e[(e.BACKWARD = 2)] = "BACKWARD");
        })(_t || (_t = {}));
      class dt {
        constructor(e, t, o) {
          (this.m_rgChildren = []),
            (this.m_iLastActiveChildIndex = -1),
            (this.m_bChildrenSorted = !1),
            (this.m_bAutoFocusChild = !1),
            (this.m_bMounted = !1),
            (this.m_bFocused = !1),
            (this.m_FocusCallbackList = new g.pB()),
            (this.m_bFocusWithin = !1),
            (this.m_FocusWithinCallbackList = new g.pB()),
            (this.m_ActionDescriptionsChangedCallbackList = new g.pB()),
            (this.m_RetainFocusParent = null),
            (this.m_rgNavigationHandlers = []),
            (this.m_rgFocusHandlers = []),
            (this.m_Tree = e),
            (this.m_Parent = t),
            (this.m_FocusRing = o),
            (this.m_nDepth = t ? t.m_nDepth + 1 : 0);
        }
        CreateHandle() {
          return new be(this);
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
          var t, o, n, i, a;
          const s =
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
          const _ =
              null === (o = this.m_Properties) || void 0 === o
                ? void 0
                : o.retainFocus,
            d =
              null === (n = this.m_Properties) || void 0 === n
                ? void 0
                : n.noFocusRing;
          (this.m_Properties = e || {}),
            s && this.m_ActionDescriptionsChangedCallbackList.Dispatch(),
            this.m_Properties.retainFocus && !_
              ? this.PropagateRetainFocusParentToChildren(this)
              : !this.m_Properties.retainFocus &&
                _ &&
                this.PropagateRetainFocusParentToChildren(
                  this.m_RetainFocusParent
                ),
            this.m_Properties.noFocusRing && !d && this.BHasFocus()
              ? null === (i = this.m_FocusRing) ||
                void 0 === i ||
                i.OnBlur(r.APPLICATION, this, this)
              : !this.m_Properties.noFocusRing &&
                d &&
                this.BHasFocus() &&
                (null === (a = this.m_FocusRing) ||
                  void 0 === a ||
                  a.OnFocus(r.APPLICATION, this, this)),
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
          const o =
            null === (t = this.m_Properties) || void 0 === t
              ? void 0
              : t.actionDescriptionMap;
          if (o)
            for (const t in o) {
              const r = t;
              void 0 === e[r] && (e[r] = o[r]);
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
            o = this.m_Properties.autoFocus || t;
          if (this.BWantsAutoFocus() || o) {
            let e = -1;
            this.m_rgChildren.length &&
              (this.EnsureChildrenSorted(),
              (e = this.m_rgChildren.findIndex((e) => e.BWantsAutoFocus()))),
              (this.m_Properties.autoFocus || o || -1 !== e) &&
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
            (at(
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
                this.m_Tree.TransferFocus(r.APPLICATION, null)),
            this.UnregisterDOMEvents(),
            this.m_Parent
              ? this.m_Parent.RemoveChild(this)
              : p(this == this.m_Tree.Root, "Only root should have no parent");
        }
        RegisterDOMEvents() {
          !this.m_rgNavigationHandlers.length &&
            (this.m_rgChildren.length >= 2 ||
              this.m_Properties.layout != st.NONE ||
              this.m_Properties.onMoveUp ||
              this.m_Properties.onMoveRight ||
              this.m_Properties.onMoveDown ||
              this.m_Properties.onMoveLeft) &&
            this.m_rgNavigationHandlers.push(
              _(this.m_element, this.OnNavigationEvent)
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
              const o = e.m_element,
                r = t.m_element;
              if (!o) return r ? 1 : 0;
              if (!r) return -1;
              const n = o.compareDocumentPosition(r);
              return n & Node.DOCUMENT_POSITION_PRECEDING
                ? 1
                : n & Node.DOCUMENT_POSITION_FOLLOWING
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
          this.m_bFocused || this.m_Tree.TransferFocus(r.BROWSER, this);
        }
        OnDOMBlur(e) {
          this.m_bFocused &&
            this.m_element.ownerDocument.hasFocus() &&
            this.m_Tree.TransferFocus(r.BROWSER, null);
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
            childFocusDisabled: o,
            fnCanTakeFocus: r,
          } = this.m_Properties;
          return this.m_bMounted
            ? r && !r(this)
              ? "none"
              : e || (t && (o || 0 == this.m_rgChildren.length))
              ? "self"
              : !o && this.m_rgChildren.length
              ? "children"
              : "none"
            : "none";
        }
        BTakeFocus(e, t) {
          const o = this.FindFocusableNode(t);
          return this.InternalFocusDescendant(o, e, t);
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
          const o = this.FindFocusableDescendant(t);
          return this.InternalFocusDescendant(o, e, t);
        }
        BFocusFirstChild(e) {
          const t = this.FindNextFocusableChildInDirection(
            -1,
            _t.FORWARD,
            s.eV.INVALID
          );
          return this.InternalFocusDescendant(t, e);
        }
        BFocusLastChild(e) {
          const t = this.FindNextFocusableChildInDirection(
            this.m_rgChildren.length,
            _t.BACKWARD,
            s.eV.INVALID
          );
          return this.InternalFocusDescendant(t, e);
        }
        FindFocusableDescendant(e, t) {
          const o = Le(e),
            { focusableIfNoChildren: r, childFocusDisabled: n } =
              this.m_Properties;
          if (n) return null;
          if (this.m_rgChildren.length) {
            this.EnsureChildrenSorted();
            const { navEntryPreferPosition: n, resetNavOnEntry: i } =
              this.m_Properties;
            let a,
              s = this.GetActiveChildIndex();
            if ((i && void 0 !== e && (s = -1), !this.IsValidChildIndex(s))) {
              const e = this.GetLayout();
              s =
                s >= this.m_rgChildren.length ||
                e == st.ROW_REVERSE ||
                e == st.COLUMN_REVERSE ||
                n == lt.LAST
                  ? this.m_rgChildren.length - 1
                  : 0;
            }
            if ((n == lt.MAINTAIN_X || n == lt.MAINTAIN_Y || t) && o) {
              let r, i;
              n == lt.MAINTAIN_X ? (r = "x") : n == lt.MAINTAIN_Y && (r = "y"),
                r == h[o] && (i = this.m_Tree.GetLastFocusedMovementRect(h[o])),
                at(
                  `Taking focus while preserving ${lt[n]} preserved: ${r} movement: ${o}, node:`,
                  i || t
                );
              const s = this.ComputeRelativeDirection(e, st.GRID);
              if (i || t) {
                const n = s == _t.BACKWARD ? this.m_rgChildren.length - 1 : 0;
                a = this.FindClosestChildInNextAxiallyAlignedSet(
                  r || h[o],
                  s,
                  e,
                  i || t,
                  n,
                  this.m_rgChildren[n].GetBoundingRect()
                );
              } else if (r != h[o]) {
                const t = s == _t.BACKWARD ? this.m_rgChildren.length : -1;
                a = this.FindNextFocusableChildInDirection(t, s, e);
              }
            } else if (n == lt.PREFERRED_CHILD) {
              for (const t of this.m_rgChildren)
                if (
                  ((a = t.BWantsPreferredFocus() && t.FindFocusableNode(e)), a)
                )
                  return a;
            } else
              n == lt.LAST &&
                (a = this.FindNextFocusableChildInDirection(
                  s + 1,
                  _t.BACKWARD,
                  e
                ));
            return (
              a ||
                (a = this.FindNextFocusableChildInDirection(
                  s - 1,
                  _t.FORWARD,
                  e
                )),
              a ||
                (a = this.FindNextFocusableChildInDirection(s, _t.BACKWARD, e)),
              a || (r ? this : null)
            );
          }
          return null;
        }
        BVisibleChildTakeFocus(e) {
          var t, o, r, n;
          const i =
              null !==
                (r =
                  null ===
                    (o =
                      null === (t = this.Element) || void 0 === t
                        ? void 0
                        : t.ownerDocument) || void 0 === o
                    ? void 0
                    : o.defaultView) && void 0 !== r
                ? r
                : window,
            a = Oe(this, {
              top: 0,
              left: 0,
              right: i.innerWidth,
              bottom: i.innerHeight,
            });
          return (
            at(
              `Focusing visible child, best child match is ${
                null === (n = null == a ? void 0 : a.child) || void 0 === n
                  ? void 0
                  : n.Element.className
              } - ${JSON.stringify(null == a ? void 0 : a.visibility)}`
            ),
            !!a && a.child.BTakeFocus(e)
          );
        }
        GetLayout() {
          if (this.m_Properties.layout) return this.m_Properties.layout;
          if (this.m_rgChildren.length < 2) return st.NONE;
          return Pe(this.m_element);
        }
        OnNavigationEvent(e) {
          const t = e.detail.button;
          if (this.BTryInternalNavigation(t, e.detail.is_repeat)) return !0;
          const {
            onMoveUp: o,
            onMoveRight: r,
            onMoveDown: n,
            onMoveLeft: i,
          } = this.m_Properties;
          let a = !1;
          switch (t) {
            case s.eV.DIR_UP:
              o && (a = o(e.detail, this));
              break;
            case s.eV.DIR_RIGHT:
              r && (a = r(e.detail, this));
              break;
            case s.eV.DIR_DOWN:
              n && (a = n(e.detail, this));
              break;
            case s.eV.DIR_LEFT:
              i && (a = i(e.detail, this));
          }
          return a;
        }
        InternalFocusDescendant(e, t, o) {
          return !!e && (this.m_Tree.TransferFocus(t, e, Le(o)), !0);
        }
        BTryInternalNavigation(e, t) {
          var o;
          const n = this.GetLayout();
          let i,
            a = this.ComputeRelativeDirection(e, n);
          if (
            (at(
              `Handling navigation event ${s.eV[e]} - ${st[n]} - ${_t[a]}`,
              this.m_element
            ),
            a == _t.INVALID)
          )
            return !1;
          if (this.m_Properties.focusable && this.m_bFocused)
            return at("Skipping navigation within focused element"), !1;
          if ((this.EnsureChildrenSorted(!0), n == st.GRID))
            i = this.FindNextFocusableChildInGrid(
              this.GetActiveChildIndex(),
              a,
              e
            );
          else {
            let t = this.GetActiveChildIndex();
            this.IsValidChildIndex(t) ||
              (t = a == _t.FORWARD ? -1 : this.m_rgChildren.length),
              (i = this.FindNextFocusableChildInDirection(t, a, e));
          }
          if (i) {
            const n = Le(e);
            if (this.GetScrollIntoViewType() == ct.NoTransformSparseContent) {
              const e =
                  null === (o = i.Element) || void 0 === o
                    ? void 0
                    : o.ownerDocument.defaultView,
                r =
                  ("y" == n ? e.innerHeight : e.innerWidth) / (t ? 4.5 : 3.33),
                a = je(i.Element);
              if (
                (a.top > e.innerHeight && a.bottom > e.innerHeight + r) ||
                (a.bottom < 0 && a.top < -r) ||
                (a.left > e.innerWidth && a.right > e.innerWidth + r) ||
                (a.right < 0 && a.left < -r)
              )
                return (
                  at(`Element too far away, scrolling ${r} on ${n} axis `),
                  et(i.Element, i.Element, "smooth", n, r),
                  !0
                );
            }
            return this.m_Tree.TransferFocus(r.GAMEPAD, i, n), !0;
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
            : ct.Standard;
        }
        GetRelativeDirection(e) {
          return this.ComputeRelativeDirection(e, this.GetLayout());
        }
        ComputeRelativeDirection(e, t) {
          let o = t == st.ROW_REVERSE || t == st.COLUMN_REVERSE;
          switch (t) {
            case st.ROW:
            case st.ROW_REVERSE:
              switch (e) {
                case s.eV.DIR_LEFT:
                  return o ? _t.FORWARD : _t.BACKWARD;
                case s.eV.DIR_RIGHT:
                  return o ? _t.BACKWARD : _t.FORWARD;
                default:
                  return _t.INVALID;
              }
            case st.COLUMN:
            case st.COLUMN_REVERSE:
              switch (e) {
                case s.eV.DIR_UP:
                  return o ? _t.FORWARD : _t.BACKWARD;
                case s.eV.DIR_DOWN:
                  return o ? _t.BACKWARD : _t.FORWARD;
                default:
                  return _t.INVALID;
              }
            case st.GRID:
              switch (e) {
                case s.eV.DIR_LEFT:
                case s.eV.DIR_UP:
                  return o ? _t.FORWARD : _t.BACKWARD;
                case s.eV.DIR_RIGHT:
                case s.eV.DIR_DOWN:
                  return o ? _t.BACKWARD : _t.FORWARD;
                default:
                  return _t.INVALID;
              }
            default:
              return _t.INVALID;
          }
        }
        AdvanceIndex(e, t) {
          return e + (t == _t.FORWARD ? 1 : -1);
        }
        FindNextFocusableChildInDirection(e, t, o) {
          let r = t == _t.FORWARD ? 1 : -1;
          for (let t = e + r; t >= 0 && t < this.m_rgChildren.length; t += r) {
            const e = this.m_rgChildren[t].FindFocusableNode(o);
            if (e) return e;
          }
          return null;
        }
        ScanChildren(e, t, o) {
          let r = t == _t.FORWARD ? 1 : -1;
          for (let t = e; t >= 0 && t < this.m_rgChildren.length; t += r)
            if (o(this.m_rgChildren[t], t)) return t;
          return -1;
        }
        FindNextFocusableChildInGrid(e, t, o) {
          const r = o == s.eV.DIR_UP || o == s.eV.DIR_DOWN,
            n = this.GetLastFocusElement();
          if (!n || n == this.m_element)
            return (
              p(
                !1,
                "No active child for grid navigation",
                this.m_iLastActiveChildIndex,
                this.m_rgChildren.length,
                n
              ),
              this.FindFocusableDescendant(o)
            );
          const i = this.GetActiveDescendant().GetBoundingRect();
          if (o == s.eV.DIR_UP || o == s.eV.DIR_DOWN) {
            const e = this.m_Tree.GetLastFocusedMovementRect("x");
            e && ((i.x = e.x), (i.width = e.width));
          }
          if (r) {
            let r = e;
            for (; -1 != r; ) {
              const e = this.ScanChildren(
                this.AdvanceIndex(r, t),
                t,
                (e) => !ke("y", i, e.GetBoundingRect())
              );
              if (-1 != e) {
                const r = this.m_rgChildren[e].GetBoundingRect(),
                  n = this.FindClosestChildInNextAxiallyAlignedSet(
                    "x",
                    t,
                    o,
                    i,
                    e,
                    r
                  );
                if (n) return n;
              }
              r = e;
            }
          } else {
            let r = t == _t.FORWARD ? 1 : -1;
            for (
              let n = this.AdvanceIndex(e, t);
              n >= 0 && n < this.m_rgChildren.length;
              n += r
            ) {
              const e = this.m_rgChildren[n];
              if (!ke("y", i, e.GetBoundingRect())) return null;
              let t = e.FindFocusableNode(o);
              if (t) return t;
            }
          }
          return null;
        }
        FindClosestChildInNextAxiallyAlignedSet(e, t, o, r, n, i) {
          (!n || n < 0) && (n = 0);
          let a = [];
          const s = { x: (l = r).x, y: l.y };
          var l;
          this.ScanChildren(n, t, (t) => {
            const o = t.GetBoundingRect();
            return (
              !(!i || ke(h[e], i, o)) ||
              (a.push({ child: t, overlap: Ne(e, r, o), dist: we(e, s, o) }),
              !1)
            );
          }),
            t == _t.BACKWARD && a.reverse(),
            a.sort((e, t) => {
              const o = t.overlap - e.overlap;
              return 0 != o ? o : e.dist - t.dist;
            });
          for (const { child: e } of a) {
            const t = e.FindFocusableNode(o, r);
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
          e instanceof dt
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
                at(
                  `Didn't move focus to element as tree ${this.m_Tree.id} is not active focus tree`
                ),
            (function (e, t) {
              var o, r, n;
              const i = e.Element;
              if (!i) return;
              let a = [e];
              for (let t = e.Parent; t; t = t.Parent)
                (null === (o = t.m_Properties) || void 0 === o
                  ? void 0
                  : o.scrollIntoViewWhenChildFocused) && a.push(t);
              for (; a.length; ) {
                let o = a.pop(),
                  i = 0 == a.length,
                  s =
                    null === (r = o.m_Properties) || void 0 === r
                      ? void 0
                      : r.scrollIntoViewType;
                if (
                  (void 0 === s && (s = $e ? ct.NoTransform : ct.Standard),
                  (null === (n = o.m_Properties) || void 0 === n
                    ? void 0
                    : n.fnScrollIntoViewHandler) &&
                    !1 !== o.m_Properties.fnScrollIntoViewHandler(e, t, o))
                )
                  continue;
                const l = o.m_element,
                  c =
                    s == ct.NoTransform ||
                    s == ct.NoTransformSparseContent ||
                    !i;
                if (t) {
                  const t = c ? je(l) : l.getBoundingClientRect();
                  let o = !1;
                  const r = Math.max(1.4 * (t.bottom - t.top), 40);
                  ((Xe && performance.now() - Xe < 500) ||
                    t.bottom < -r ||
                    t.top > window.innerHeight + r) &&
                    (o = !0);
                  let n = o ? "auto" : "smooth";
                  o && (Xe = performance.now()),
                    e.Tree.Controller.BIsRestoringHistory() && (n = "auto"),
                    c
                      ? et(0, l, n)
                      : l.scrollIntoView({ behavior: n, block: "nearest" });
                } else
                  c
                    ? et(0, l, "auto")
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
      (0, n.gn)([I.a], dt.prototype, "OnDOMFocus", null),
        (0, n.gn)([I.a], dt.prototype, "OnDOMBlur", null),
        (0, n.gn)([I.a], dt.prototype, "OnNavigationEvent", null);
      const ut = "GamepadInput";
      var mt;
      !(function (e) {
        (e[(e.PageUnloading = 0)] = "PageUnloading"),
          (e[(e.Unknown = 1)] = "Unknown"),
          (e[(e.None = 2)] = "None"),
          (e[(e.Basic = 3)] = "Basic"),
          (e[(e.Full = 4)] = "Full");
      })(mt || (mt = {}));
      class ht {
        constructor(e) {
          (this.m_bIsGamepadInputExternallyControlled = !1),
            (this.m_NavigationController = e),
            b("BrowserView.RegisterForMessageFromParent") &&
            b("BrowserView.PostMessageToParent")
              ? ((this.m_bIsGamepadInputExternallyControlled = !0),
                (this.m_postMessage = new It()))
              : ((this.m_bIsGamepadInputExternallyControlled =
                  window.top != window.self),
                (this.m_postMessage = new pt(window.top))),
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
          let o = null == t ? void 0 : t.Tree;
          return (
            o || (o = null == e ? void 0 : e.Tree),
            o && o.Controller.IsActiveFocusNavTree(o)
          );
        }
        OnFocusChanged(e, t, o) {
          const r = o ? o.GetActiveActionDescriptions() : {};
          this.BFromActiveNavTree(t, o) && this.UpdateActionDescriptions(r);
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
          let t = mt.Basic;
          window.bSupportsGamepadUI && (t = mt.Full),
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
      (0, n.gn)([I.a], ht.prototype, "OnFocusChanged", null),
        (0, n.gn)([I.a], ht.prototype, "OnMessage", null),
        (0, n.gn)([I.a], ht.prototype, "PostPageUnloading", null);
      class pt {
        constructor(e) {
          (this.m_postWindow = e),
            window.addEventListener("message", this.OnMessage);
        }
        RegisterForMessage(e) {
          this.m_fnCallback = e;
        }
        PostMessage(e) {
          let t = JSON.stringify(e);
          this.m_postWindow.postMessage({ gamepadMessage: ut, args: t }, "*");
        }
        OnMessage(e) {
          let t = null == e ? void 0 : e.data;
          if (t && t.gamepadMessage == ut && t.args) {
            const e = JSON.parse(t.args);
            this.m_fnCallback(e);
          }
        }
      }
      (0, n.gn)([I.a], pt.prototype, "OnMessage", null);
      class It {
        constructor() {
          SteamClient.BrowserView.RegisterForMessageFromParent(this.OnMessage);
        }
        RegisterForMessage(e) {
          this.m_fnCallback = e;
        }
        PostMessage(e) {
          let t = JSON.stringify(e);
          SteamClient.BrowserView.PostMessageToParent(ut, t);
        }
        OnMessage(e, t) {
          if (e == ut) {
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
      (0, n.gn)([I.a], It.prototype, "OnMessage", null);
      o(958);
      function gt() {
        return !!window.document;
      }
      const Ct = {
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
          return (function () {
            if (!gt()) return Et || (Et = vt()), Et;
            let e = (function (e) {
              if (!gt() || !window.document.cookie) return null;
              let t = document.cookie.match("(^|; )" + e + "=([^;]*)");
              return t && t[2] ? decodeURIComponent(t[2]) : null;
            })("sessionid");
            e || (e = vt());
            return e;
          })();
        },
        FRIENDSUI_BETA: !1,
        STEAM_TV: !1,
        DEV_MODE: !1,
        IN_STEAMUI: !1,
        IN_GAMEPADUI: !1,
        IN_STEAMUI_SHARED_CONTEXT: !1,
        ONE_STEAMUI_SHARED_CONTEXT: !1,
        DECK_DISPLAY_MODE: !1,
        ON_DECK: !1,
        ON_STEAMOS: !1,
        IN_GAMESCOPE: !1,
        IN_LOGIN: !1,
        IN_LOGIN_REFRESH: !1,
        USE_LONGEST_LOC_STRING: !1,
      };
      let Et;
      function vt() {
        let e = (function () {
          let e = "";
          for (let r = 0; r < 24; r++)
            e += ((t = 0),
            (o = 35),
            (t = Math.ceil(t)),
            (o = Math.floor(o)),
            Math.floor(Math.random() * (o - t + 1)) + t).toString(36);
          var t, o;
          return e;
        })();
        return (
          (function (e, t, o, r) {
            if (!gt()) return;
            r || (r = "/");
            let n = "";
            if (void 0 !== o && o) {
              let e = new Date();
              e.setTime(e.getTime() + 864e5 * o),
                (n = "; expires=" + e.toUTCString());
            }
            document.cookie =
              encodeURIComponent(e) +
              "=" +
              encodeURIComponent(t) +
              n +
              ";path=" +
              r;
          })("sessionid", e, 0),
          e
        );
      }
      class Rt extends s.oH {
        constructor(e) {
          super(),
            (this.m_lastButtonDown = s.eV.INVALID),
            this.SetSourceType(s.Rr.KEYBOARD),
            e.addEventListener("keydown", this.OnKeyDown),
            e.addEventListener("keyup", this.OnKeyUp),
            e.addEventListener("blur", this.Reset);
        }
        OnKeyDown(e) {
          const t = this.TranslateKey(e);
          t != s.eV.INVALID &&
            (e.preventDefault(),
            t != this.m_lastButtonDown &&
              (this.Reset(),
              this.OnButtonDown(t),
              (this.m_lastButtonDown = t)));
        }
        OnKeyUp(e) {
          const t = this.TranslateKey(e);
          t != s.eV.INVALID &&
            (this.OnButtonUp(t),
            (this.m_lastButtonDown = s.eV.INVALID),
            e.preventDefault());
        }
        Reset() {
          this.m_lastButtonDown != s.eV.INVALID &&
            (this.OnButtonUp(this.m_lastButtonDown),
            (this.m_lastButtonDown = s.eV.INVALID));
        }
        GetKeycodeFromEvent(e) {
          return "linux" === Ct.PLATFORM && e.key.length > 1
            ? e.key || e.code
            : e.code || e.key;
        }
        BShouldSwallowEventForTextInputWorkaround(e) {
          if (
            !(
              pe(e.target) &&
              ("INPUT" === e.target.nodeName ||
                "TEXTAREA" === e.target.nodeName)
            )
          )
            return !1;
          const t = this.GetKeycodeFromEvent(e);
          let o = e.target;
          const r = Array.from(
            o.ownerDocument.getElementsByClassName("gpfocus")
          ).some((e) =>
            Array.from(e.classList).some((e) => e.includes("virtualkeyboard"))
          );
          switch (t) {
            case "ArrowUp": {
              if (r) return !0;
              let t = null == o ? void 0 : o.value.indexOf("\n");
              return (
                "TEXTAREA" === e.target.nodeName &&
                t >= 0 &&
                t < (null == o ? void 0 : o.selectionStart)
              );
            }
            case "ArrowDown": {
              if (r) return !0;
              let t = null == o ? void 0 : o.value.lastIndexOf("\n");
              return (
                "TEXTAREA" === e.target.nodeName &&
                t >= 0 &&
                t >= (null == o ? void 0 : o.selectionStart) &&
                (null == o ? void 0 : o.selectionEnd) <
                  (null == o ? void 0 : o.value.length)
              );
            }
            case "ArrowLeft":
              return (
                !!r ||
                ((null == o ? void 0 : o.selectionStart) > 0 &&
                  (null == o ? void 0 : o.selectionEnd) > 0)
              );
            case "ArrowRight":
              return (
                !!r ||
                ((null == o ? void 0 : o.selectionStart) <
                  (null == o ? void 0 : o.value.length) &&
                  (null == o ? void 0 : o.selectionEnd) <
                    (null == o ? void 0 : o.value.length))
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
            o = e.ctrlKey,
            r = e.shiftKey;
          if (this.BShouldSwallowEventForTextInputWorkaround(e))
            return s.eV.INVALID;
          if (o && r)
            switch (t) {
              case "Digit4":
                return s.eV.TRIGGER_LEFT;
              case "Digit5":
                return s.eV.TRIGGER_RIGHT;
              default:
                return s.eV.INVALID;
            }
          if (o)
            switch (t) {
              case "Digit1":
                return s.eV.STEAM_GUIDE;
              case "Digit2":
                return s.eV.STEAM_QUICK_MENU;
              case "Digit3":
              case "Digit9":
                return s.eV.SELECT;
              case "Digit4":
                return s.eV.BUMPER_LEFT;
              case "Digit5":
                return s.eV.BUMPER_RIGHT;
              case "Digit6":
                return s.eV.LSTICK_CLICK;
              case "Digit7":
                return s.eV.RSTICK_CLICK;
              case "Digit8":
                return s.eV.OPTIONS;
              case "Digit0":
                return s.eV.START;
            }
          switch (t) {
            case "Escape":
              return s.eV.CANCEL;
            case "Enter":
              return s.eV.OK;
            case "Backspace":
              return s.eV.SECONDARY;
            case "ArrowUp":
              return s.eV.DIR_UP;
            case "ArrowDown":
              return s.eV.DIR_DOWN;
            case "ArrowLeft":
              return s.eV.DIR_LEFT;
            case "ArrowRight":
              return s.eV.DIR_RIGHT;
          }
          return s.eV.INVALID;
        }
      }
      (0, n.gn)([I.a], Rt.prototype, "OnKeyDown", null),
        (0, n.gn)([I.a], Rt.prototype, "OnKeyUp", null),
        (0, n.gn)([I.a], Rt.prototype, "Reset", null);
      class ft extends dt {
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
          this.BHasFocus() || this.m_Tree.TransferFocus(r.APPLICATION, this);
        }
        OnWrappedTreeDeactivated() {
          this.m_wrappedTree.TransferFocus(r.APPLICATION, null);
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
      (0, n.gn)([I.a], ft.prototype, "OnWrappedTreeActivated", null),
        (0, n.gn)([I.a], ft.prototype, "OnWrappedTreeDeactivated", null),
        (0, n.gn)([I.a], ft.prototype, "OnWrappedTreeUnhandledButton", null);
      const St = "VirtualKeyboardMessage";
      function yt(e) {
        return e && e.type === St;
      }
      class Tt {
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
          e == St && this.InternalDispatchMessage(JSON.parse(t));
        }
        OnMessage(e) {
          this.InternalDispatchMessage(e.data);
        }
        InternalDispatchMessage(e) {
          yt(e) && e.message;
        }
        SendMessage(e) {
          const t = Object.assign({ type: "VirtualKeyboardMessage" }, e);
          b("BrowserView.PostMessageToParent")
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
      (0, n.gn)([I.a], Tt.prototype, "ShowVirtualKeyboard", null),
        (0, n.gn)([I.a], Tt.prototype, "ShowModalKeyboard", null),
        (0, n.gn)([I.a], Tt.prototype, "HideVirtualKeyboard", null),
        (0, n.gn)([I.a], Tt.prototype, "OnBrowserViewMessage", null),
        (0, n.gn)([I.a], Tt.prototype, "OnMessage", null);
      (0, n.gn)(
        [I.a],
        class {
          constructor(e, t) {
            (this.m_refKeyboard = t), e.on("message", this.OnMessage);
          }
          OnMessage(e, t, o) {
            if (e == St) {
              const e = JSON.parse(t);
              if (yt(e))
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
      var Ft = o(369),
        Vt = o.n(Ft);
      function Dt(e) {
        let t = 0;
        e.children().each(function () {
          const e = a()(this),
            o = e.css("zIndex");
          "auto" === o
            ? e.css("zIndex", 0)
            : isNaN(parseInt(o)) || (t = Math.max(t, parseInt(o)));
        });
        const o = a()("<div/>", {
          style: `position: absolute; pointer-events: none; top: 0; left: 0; z-index: ${
            (t || 100) + 1
          }; width: 0; height: 0; padding: 0; margin: 0; background: none; overflow: visible; display: block;`,
        });
        let r = null,
          n = null,
          i = null,
          s = 0,
          l = 0,
          c = 0,
          _ = 0;
        e.prepend(o);
        const d = (e) => {
            const t = e.GetBoundingRect(),
              r = o[0].getBoundingClientRect();
            return {
              left: t.x - r.x - 0,
              top: t.y - r.y - 0,
              height: t.height,
              width: t.width,
            };
          },
          u = (e) => {
            (s = e.left),
              (l = e.top),
              (c = e.height),
              (_ = e.width),
              r.css({ left: s, top: l, height: c, width: _ });
          },
          m = (e) => {
            if (e && e.BWantsFocusRing() && r) {
              let t = d(e);
              (t.left == s && t.top == l && t.height == c && t.width == _) ||
                u(t);
            }
          },
          h = (e) => {
            if (
              ((n = e),
              r && (r.remove(), (r = null)),
              i && (window.clearInterval(i), (i = null)),
              e && e.BWantsFocusRing())
            ) {
              r = a()("<div/>", {
                style: "position: absolute; pointer-events: none; ",
                class: Vt().FocusRing,
              });
              let t = d(e);
              u(t), o.append(r), (i = window.setInterval(() => m(e), 200));
            }
          };
        return {
          OnBlur: () => h(null),
          OnFocus: (e, t) => h(t),
          OnFocusChange: (e, t, o) => h(o),
          OnForceMeasureFocusRing: () => m(n),
        };
      }
      function At(e) {
        return !!e.is_repeat;
      }
      Object.seal({ onMoveUp: bt, onMoveDown: bt }),
        Object.seal({ onMoveRight: bt, onMoveLeft: bt });
      function bt(e, t) {
        if (e.is_repeat) return !1;
        const o = t.GetRelativeDirection(e.button);
        return o == _t.FORWARD
          ? t.BFocusFirstChild(r.GAMEPAD)
          : o == _t.BACKWARD && t.BFocusLastChild(r.GAMEPAD);
      }
      function kt(e) {
        return e ? Function("event", e) : null;
      }
      function Nt() {
        return !0;
      }
      function wt(e) {
        return "BlockMovement" == e
          ? Nt
          : "RepeatNavigationBoundary" == e
          ? At
          : e
          ? Function("detail", e)
          : null;
      }
      function Pt(e) {
        this.click(), e.stopPropagation();
      }
      function Lt(e) {
        a()(this).find('a, input[type="checkbox"]')[0].click();
      }
      function Ot(e) {
        const t = e.currentTarget;
        if (!pe(t)) return !1;
        const o = e.detail.is_repeat ? 4.5 : 3.33,
          r = "smooth",
          n = t.ownerDocument,
          i = n.defaultView;
        switch (e.detail.button) {
          case s.eV.DIR_UP:
            if (i.scrollY > 3)
              return tt(i, { top: -i.innerHeight / o, behavior: r }), !0;
            break;
          case s.eV.DIR_RIGHT:
            if (i.scrollX + i.innerWidth < n.body.clientWidth - 3)
              return tt(i, { left: i.innerWidth / o, behavior: r }), !0;
            break;
          case s.eV.DIR_DOWN:
            if (i.scrollY + i.innerHeight < n.body.clientHeight - 3)
              return tt(i, { top: i.innerHeight / o, behavior: r }), !0;
            break;
          case s.eV.DIR_LEFT:
            if (i.scrollX > 3)
              return tt(i, { left: i.innerWidth / o, behavior: r }), !0;
        }
        return !1;
      }
      function Mt(e) {
        const { name: t, root: o, navState: r } = e;
        r
          ? (!(function (e, t, o = 0) {
              T.RestoreSerializedNavState(e, t, o);
            })(o, r),
            o.Tree.DeferredFocus.Reset())
          : o.Tree.DeferredFocus.ExecuteQueuedFocus();
      }
      function Bt(e, t) {
        const o = window.history.state;
        return { name: e, root: t, navState: null == o ? void 0 : o[e] };
      }
      var xt;
      !(function (e) {
        (e[(e.Unknown = 0)] = "Unknown"),
          (e[(e.NotNeeded = 1)] = "NotNeeded"),
          (e[(e.InReactTree = 2)] = "InReactTree");
      })(xt || (xt = {}));
      const Gt = new Tt();
      let Ut,
        Wt = !1,
        Ht = null,
        Kt = null,
        $t = null;
      function Xt(e) {
        Wt ||
          ((Ht = new Ae()),
          (window.legacyWebFocusNavController = Ht),
          (Ut = new ht(Ht)),
          Ut.BIsGamepadInputExternallyControlled() || Ht.RegisterInputSource(e),
          (Ut.BIsGamepadInputExternallyControlled() ||
            navigator.userAgent.includes("Valve Steam Gamepad")) &&
            Ht.RegisterInputSource(new Rt(window)),
          (function (e) {
            a()("html").addClass("gpnav_active");
            const t = a()("body"),
              o = e.NewGamepadNavigationTree(e.GetDefaultContext(), "legacy"),
              r = Dt(t);
            (o.Root.m_FocusRing = r),
              o.Root.SetProperties({
                scrollIntoViewType: ct.NoTransformSparseContent,
              }),
              (window.__nav_tree_root = o),
              (window.__virtual_keyboard_client = Gt),
              zt.set(document.body, o.Root),
              Qt(document.body, o.Root),
              to(void 0, !0),
              e.RegisterGamepadNavigationTree(o, window, !1),
              a()(document.body).on("vgp_onbuttondown", function (e) {
                o.HandleButtonDownEventAsLogicalEvent(e.originalEvent);
              }),
              _(document.body, Ot);
            new MutationObserver(jt).observe(document.body, {
              childList: !0,
              subtree: !0,
            }),
              (n = !0),
              ($e = n),
              (function (e, t) {
                var o;
                if (
                  (t.Tree.DeferredFocus.SuppressFocus(),
                  window.addEventListener("popstate", () => Mt(Bt(e, t))),
                  null === (o = window.history.state) || void 0 === o
                    ? void 0
                    : o.notify_focus_restore_ready)
                ) {
                  var r = Bt(e, t);
                  window.addEventListener("focus_restore_ready", function (e) {
                    window.setTimeout(function () {
                      Mt(r);
                    }, 100);
                  });
                } else Mt(Bt(e, t));
                !(function (e, t) {
                  t.Tree.WindowContext.FocusChangedCallbacks.Register(() => {
                    window.history.replaceState(
                      Object.assign(Object.assign({}, window.history.state), {
                        [e]: F(t),
                      }),
                      null
                    );
                  });
                })(e, t);
              })("legacy_web_root", o.Root),
              Object.assign(window, so),
              window.dispatchEvent(new CustomEvent("vgp_gamepadnavready"));
            var n;
          })(Ht)),
          (Wt = !0);
      }
      function jt(e) {
        for (const t of e) {
          const e = [],
            o = [];
          Ee(
            t,
            (t) => e.push(t),
            (e) => o.push(e)
          ),
            e.length && to(a()(e)),
            o.length && eo(a()(o));
        }
      }
      const zt = new WeakMap(),
        Yt = new WeakMap();
      let qt = [];
      function Qt(e, t) {
        if (t instanceof dt) {
          const o = t.GetDepth();
          qt[o] || (qt[o] = []), qt[o].push([e, t]);
        }
        zt.set(e, t);
      }
      function Jt(e, t) {
        const o = Yt.has(e) ? Yt.get(e) : [];
        o.push(t), Yt.set(e, o);
      }
      function Zt(e) {
        return "jquery" in e
          ? zt.get(e[0]) || xt.Unknown
          : zt.get(e) || xt.Unknown;
      }
      function eo(e) {
        e.find("*")
          .addBack()
          .each(function () {
            var e;
            null === (e = Yt.get(this)) ||
              void 0 === e ||
              e.forEach((e) => e()),
              zt.delete(this),
              Yt.delete(this),
              a()(this).attr("data-nav-modal") && ao();
          });
      }
      function to(e, t = !1) {
        performance.now();
        const o =
          "a,button,textarea,input:not(input[type=hidden]),label:not([for]),[data-panel],[data-react-nav-root],[data-nav-modal]";
        a()(o, e)
          .addBack(o)
          .each(function () {
            var e;
            (function (e) {
              return "jquery" in e ? zt.has(e[0]) : zt.has(e);
            })((e = this)) || no(e);
          }),
          (function () {
            for (let e = qt.length - 1; e >= 0; e--)
              if (qt[e])
                for (let [t, o] of qt[e])
                  Jt(t, o.Tree.RegisterNavigationItem(o, t));
            qt = [];
          })();
      }
      function oo(e) {
        eo(a()(e)), to(a()(e));
      }
      function ro(e) {
        const t = a()(e.Element);
        return (
          !t.data("gpFocusDisabled") &&
          t.is(":visible") &&
          "hidden" != t.css("visibility") &&
          ((t.outerWidth() > 0 && t.outerHeight() > 0) ||
            "hidden" !== t.css("overflow"))
        );
      }
      function no(e) {
        var t, o, i, s, l, d, h;
        const I = a()(e),
          g = io(e);
        if (g instanceof ft || g == xt.InReactTree)
          return Qt(e, xt.InReactTree), xt.InReactTree;
        const C = g.Tree;
        let E = I.data("reactNavRoot")
            ? new ft(I.data("reactNavRoot"), g)
            : C.CreateNode(g, g.m_FocusRing),
          v = I.data("panel") || {};
        if (
          (a()(e).attr("data-nav-modal") &&
            (function (e) {
              Kt &&
                (p(
                  !1,
                  "Creating a new modal nav tree while one already exists. A modal opening another modal is not currently supported."
                ),
                ao());
              Kt = Ht.NewGamepadNavigationTree(
                Ht.GetDefaultContext(),
                "modal_dialog"
              );
              const t = Dt(a()("body"));
              (Kt.Root.m_FocusRing = t),
                Kt.Root.SetProperties({}),
                Qt(e, Kt.Root),
                to(e),
                _(Kt.Root.m_element, (e) => !0),
                ($t = Ht.RegisterGamepadNavigationTree(Kt, window, !1));
            })(e),
          "A" == e.tagName || "BUTTON" == e.tagName || "LABEL" == e.tagName)
        )
          (v.focusable = null === (t = v.focusable) || void 0 === t || t),
            (v.clickOnActivate =
              null === (o = v.clickOnActivate) || void 0 === o || o);
        else if ("INPUT" == e.tagName)
          switch (
            ((v.focusable = null === (i = v.focusable) || void 0 === i || i),
            e.getAttribute("type"))
          ) {
            case "radio":
            case "checkbox":
              v.clickOnActivate =
                null === (s = v.clickOnActivate) || void 0 === s || s;
              break;
            case "text":
            case "password":
              v.enableVirtualKeyboard =
                null === (l = v.enableVirtualKeyboard) || void 0 === l || l;
          }
        else
          "TEXTAREA" == e.tagName &&
            ((v.focusable = null === (d = v.focusable) || void 0 === d || d),
            (v.enableVirtualKeyboard =
              null === (h = v.enableVirtualKeyboard) || void 0 === h || h));
        const R = v["flow-children"];
        delete v["flow-children"];
        let {
            clickOnActivate: f,
            maintainX: S,
            maintainY: y,
            enableVirtualKeyboard: T,
            preferredChild: F,
            onOKActionDescription: V,
            onCancelActionDescription: D,
            onSecondaryActionDescription: A,
            onOptionsActionDescription: b,
            onMenuActionDescription: k,
            actionDescriptionMap: N,
            onOKButton: w,
            onCancelButton: P,
            onSecondaryButton: L,
            onOptionsButton: O,
            onMenuButton: M,
            onMoveUp: B,
            onMoveRight: x,
            onMoveDown: G,
            onMoveLeft: U,
            onGamepadDirection: W,
            bFocusRingRoot: H,
            type: K,
          } = v,
          $ = (0, n._T)(v, [
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
          X = kt(w),
          j = kt(P),
          z = kt(L),
          Y = kt(O),
          q = kt(M),
          Q = kt(W);
        K || (K = "Panel"),
          "PanelGroup" == K &&
            ({ onOKButtonHandler: X, onCancelButtonHandler: j } = (function (
              e,
              t
            ) {
              const {
                onOKButtonHandler: o,
                onCancelButtonHandler: n,
                navNode: i,
              } = e;
              return (
                (t.focusable = !1 !== t.focusable),
                {
                  onOKButtonHandler: (e) =>
                    !(
                      !i.BHasFocus() ||
                      !i.BChildTakeFocus(r.GAMEPAD, e.detail.button)
                    ) ||
                    (!!o && o(e)),
                  onCancelButtonHandler: (e) =>
                    !(
                      !i.BFocusWithin() ||
                      i.BHasFocus() ||
                      !i.BTakeFocus(r.GAMEPAD, e.detail.button)
                    ) ||
                    (!!n && n(e)),
                }
              );
            })(
              { onOKButtonHandler: X, onCancelButtonHandler: j, navNode: E },
              $
            )),
          X &&
            Jt(
              I[0],
              (function (e, t) {
                return c(e, "vgp_onok", u(t));
              })(I[0], X)
            ),
          j &&
            Jt(
              I[0],
              (function (e, t) {
                return c(e, "vgp_oncancel", u(t));
              })(I[0], j)
            ),
          z &&
            A &&
            Jt(
              I[0],
              (function (e, t) {
                return c(e, "vgp_onsecondaryaction", u(t));
              })(I[0], z)
            ),
          Y &&
            b &&
            Jt(
              I[0],
              (function (e, t) {
                return c(e, "vgp_onoptions", u(t));
              })(I[0], Y)
            ),
          q &&
            k &&
            Jt(
              I[0],
              (function (e, t) {
                return c(e, "vgp_onmenu", u(t));
              })(I[0], q)
            ),
          Q && Jt(I[0], _(I[0], Q));
        const J = (function (e, t, o, r) {
            const n = {};
            return (
              e && (n.onMoveUp = wt(e)),
              t && (n.onMoveRight = wt(t)),
              o && (n.onMoveDown = wt(o)),
              r && (n.onMoveLeft = wt(r)),
              n
            );
          })(B, x, G, U),
          Z = R
            ? (function (e) {
                switch (e) {
                  case "column":
                    return st.COLUMN;
                  case "column-reverse":
                    return st.COLUMN_REVERSE;
                  case "row":
                    return st.ROW;
                  case "row-reverse":
                    return st.ROW_REVERSE;
                  case "grid":
                    return st.GRID;
                  default:
                    return st.NONE;
                }
              })(R)
            : st.NONE;
        Z != st.NONE && ($.layout = Z),
          S
            ? ($.navEntryPreferPosition = lt.MAINTAIN_X)
            : y
            ? ($.navEntryPreferPosition = lt.MAINTAIN_Y)
            : F && ($.navEntryPreferPosition = lt.PREFERRED_CHILD),
          f &&
            (!1 !== $.focusable && ($.focusable = !0),
            I.on("vgp_onok", "firstChild" === f ? Lt : Pt),
            Jt(e, () => {
              I.off("vgp_onok");
            })),
          T &&
            (I.on("vgp_onok.vkbindings", () => Gt.ShowVirtualKeyboard()),
            I.on("click.vkbindings", () => Gt.ShowVirtualKeyboard()),
            I.on("blur.vkbindings", () => {
              document.hasFocus() &&
                document.activeElement != e &&
                Gt.HideVirtualKeyboard();
            }),
            Jt(e, () => {
              I.off(".vkbindings");
            })),
          $.focusable && void 0 === I.attr("tabIndex") && I.attr("tabIndex", 0),
          $.focusable &&
            E.FocusCallbackList.Register((t) =>
              (function (e, t) {
                t ? a()(e).addClass("gpfocus") : a()(e).removeClass("gpfocus");
              })(e, t)
            ),
          H &&
            ((E.m_FocusRing = Dt(I)),
            "static" == I.css("position") && I.css("position", "relative"));
        const ee = m({
            onOKActionDescription: V,
            onCancelActionDescription: D,
            onSecondaryActionDescription: A,
            onOptionsActionDescription: b,
            onMenuActionDescription: k,
            actionDescriptionMap: N,
          }),
          te = Object.assign(
            Object.assign({ fnCanTakeFocus: ro, actionDescriptionMap: ee }, J),
            $
          );
        return E.SetProperties(te), Qt(e, E), E;
      }
      function io(e) {
        const t = e.parentElement;
        if (!t) return console.error("no parent"), null;
        let o = Zt(t);
        if (o == xt.Unknown)
          o = (function (e) {
            let t = !1;
            switch (e.tagName) {
              case "A":
              case "INPUT":
              case "TEXTAREA":
                t = !0;
                break;
              case "DIV":
                if (Pe(e) != st.COLUMN) t = !0;
                else {
                  const o = Pe(e.parentElement);
                  (o != st.ROW && o != st.ROW_REVERSE) || (t = !0);
                }
            }
            let o = xt.NotNeeded;
            return t ? (o = no(e)) : Qt(e, o), o;
          })(t);
        else if (o == xt.InReactTree) return o;
        return o instanceof dt ? o : io(t);
      }
      function ao(e) {
        $t && ($t(), ($t = null), (Kt = null)),
          e && a()(e).removeAttr("data-nav-modal");
      }
      const so = {
        InstrumentFocusElements: to,
        ForceUpdateFocusElements: oo,
        GPNavFocusChild: function (e) {
          let t = Zt(e[0]);
          return (
            t instanceof dt || (t = io(e[0])),
            t instanceof dt && t.BTakeFocus(r.APPLICATION),
            !1
          );
        },
        GPOnShowingModalWindow: function (e) {
          const t = e;
          return a()(t).attr("data-nav-modal", "true"), oo(t), () => ao(t);
        },
        GPShowVirtualKeyboard: function (e = !0) {
          e ? Gt.ShowVirtualKeyboard() : Gt.HideVirtualKeyboard();
        },
        GPNavUpdateActionDescriptions: function (e, t) {
          const o = Zt(e);
          o instanceof dt &&
            o.SetProperties(
              Object.assign(Object.assign({}, o.m_Properties), {
                actionDescriptionMap: m(t),
              })
            );
        },
      };
    },
  },
]);

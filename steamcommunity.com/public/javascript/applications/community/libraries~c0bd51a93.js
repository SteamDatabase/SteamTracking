/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [6983],
  {
    77936: (e, t, a) => {
      function n(e) {
        return 5 == e || 6 == e;
      }
      a.d(t, {
        dt: () => r,
        eV: () => o,
        fk: () => n,
        gg: () => m,
        jM: () => s,
        j_: () => i,
      });
      function r(e, t = "en") {
        switch (e) {
          case 0:
            return "en";
          case 1:
            return "de";
          case 2:
            return "fr";
          case 3:
            return "it";
          case 4:
            return "ko";
          case 5:
            return "es";
          case 6:
            return "zh-cn";
          case 7:
            return "zh-tw";
          case 8:
            return "ru";
          case 9:
            return "th";
          case 10:
            return "ja";
          case 11:
            return "pt";
          case 12:
            return "pl";
          case 13:
            return "da";
          case 14:
            return "nl";
          case 15:
            return "fi";
          case 16:
            return "no";
          case 17:
            return "sv";
          case 18:
            return "hu";
          case 19:
            return "cs";
          case 20:
            return "ro";
          case 21:
            return "tr";
          case 25:
            return "ar";
          case 22:
            return "pt-br";
          case 23:
            return "bg";
          case 24:
            return "el";
          case 26:
            return "uk";
          case 27:
            return "es-419";
          case 28:
            return "vi";
          case 29:
            return "sc-sc";
          case 30:
            return "id";
          default:
            return t;
        }
      }
      const o = (e) => ("koreana" === e ? "korean" : e);
      function i(e, t = "") {
        switch (e) {
          case 0:
            return "english";
          case 1:
            return "german";
          case 2:
            return "french";
          case 3:
            return "italian";
          case 4:
            return "koreana";
          case 5:
            return "spanish";
          case 6:
            return "schinese";
          case 7:
            return "tchinese";
          case 8:
            return "russian";
          case 9:
            return "thai";
          case 10:
            return "japanese";
          case 11:
            return "portuguese";
          case 12:
            return "polish";
          case 13:
            return "danish";
          case 14:
            return "dutch";
          case 15:
            return "finnish";
          case 16:
            return "norwegian";
          case 17:
            return "swedish";
          case 18:
            return "hungarian";
          case 19:
            return "czech";
          case 20:
            return "romanian";
          case 21:
            return "turkish";
          case 25:
            return "arabic";
          case 22:
            return "brazilian";
          case 23:
            return "bulgarian";
          case 24:
            return "greek";
          case 26:
            return "ukrainian";
          case 27:
            return "latam";
          case 28:
            return "vietnamese";
          case 29:
            return "sc_schinese";
          case 30:
            return "indonesian";
          default:
            return t;
        }
      }
      function s(e, t = 0) {
        switch (e) {
          case "english":
            return 0;
          case "german":
            return 1;
          case "french":
            return 2;
          case "italian":
            return 3;
          case "korean":
          case "koreana":
            return 4;
          case "spanish":
            return 5;
          case "schinese":
            return 6;
          case "tchinese":
            return 7;
          case "russian":
            return 8;
          case "thai":
            return 9;
          case "japanese":
            return 10;
          case "portuguese":
            return 11;
          case "polish":
            return 12;
          case "danish":
            return 13;
          case "dutch":
            return 14;
          case "finnish":
            return 15;
          case "norwegian":
            return 16;
          case "swedish":
            return 17;
          case "hungarian":
            return 18;
          case "czech":
            return 19;
          case "romanian":
            return 20;
          case "turkish":
            return 21;
          case "arabic":
            return 25;
          case "brazilian":
            return 22;
          case "bulgarian":
            return 23;
          case "greek":
            return 24;
          case "ukrainian":
            return 26;
          case "latam":
            return 27;
          case "vietnamese":
            return 28;
          case "sc_schinese":
            return 29;
          case "indonesian":
            return 30;
          default:
            return t;
        }
      }
      var _, l, u, k, c, p, E, m, S, d, g, y, I, P, C, T;
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
      })(_ || (_ = {})),
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
        })(l || (l = {})),
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
        })(u || (u = {})),
        (function (e) {
          (e[(e.k_EFloatingGamepadTextInputModeModeSingleLine = 0)] =
            "k_EFloatingGamepadTextInputModeModeSingleLine"),
            (e[(e.k_EFloatingGamepadTextInputModeModeMultipleLines = 1)] =
              "k_EFloatingGamepadTextInputModeModeMultipleLines"),
            (e[(e.k_EFloatingGamepadTextInputModeModeEmail = 2)] =
              "k_EFloatingGamepadTextInputModeModeEmail"),
            (e[(e.k_EFloatingGamepadTextInputModeModeNumeric = 3)] =
              "k_EFloatingGamepadTextInputModeModeNumeric");
        })(k || (k = {})),
        (function (e) {
          (e[(e.k_EAppUpdateContentType_Content = 0)] =
            "k_EAppUpdateContentType_Content"),
            (e[(e.k_EAppUpdateContentType_Workshop = 1)] =
              "k_EAppUpdateContentType_Workshop"),
            (e[(e.k_EAppUpdateContentType_Shader = 2)] =
              "k_EAppUpdateContentType_Shader"),
            (e[(e.k_EAppUpdateContentType_Max = 3)] =
              "k_EAppUpdateContentType_Max");
        })(c || (c = {})),
        (function (e) {
          (e[(e.k_EOverlayToStoreFlag_None = 0)] =
            "k_EOverlayToStoreFlag_None"),
            (e[(e.k_EOverlayToStoreFlag_AddToCart = 1)] =
              "k_EOverlayToStoreFlag_AddToCart"),
            (e[(e.k_EOverlayToStoreFlag_AddToCartAndShow = 2)] =
              "k_EOverlayToStoreFlag_AddToCartAndShow");
        })(p || (p = {})),
        (function (e) {
          (e[(e.k_EActivateGameOverlayToWebPageMode_Default = 0)] =
            "k_EActivateGameOverlayToWebPageMode_Default"),
            (e[(e.k_EActivateGameOverlayToWebPageMode_Modal = 1)] =
              "k_EActivateGameOverlayToWebPageMode_Modal");
        })(E || (E = {})),
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
        })(m || (m = {})),
        (function (e) {
          (e[(e.k_ELoginUIStyleOld = 0)] = "k_ELoginUIStyleOld"),
            (e[(e.k_ELoginUIStyleNewWithoutQRCode = 1)] =
              "k_ELoginUIStyleNewWithoutQRCode"),
            (e[(e.k_ELoginUIStyleNew = 2)] = "k_ELoginUIStyleNew");
        })(S || (S = {})),
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
        })(d || (d = {})),
        (function (e) {
          (e[(e.k_ERaiseGameWindowResult_NotRunning = 1)] =
            "k_ERaiseGameWindowResult_NotRunning"),
            (e[(e.k_ERaiseGameWindowResult_Success = 2)] =
              "k_ERaiseGameWindowResult_Success"),
            (e[(e.k_ERaiseGameWindowResult_Failure = 3)] =
              "k_ERaiseGameWindowResult_Failure");
        })(g || (g = {})),
        (function (e) {
          (e[(e.k_EPositionInvalid = -1)] = "k_EPositionInvalid"),
            (e[(e.k_EPositionTopLeft = 0)] = "k_EPositionTopLeft"),
            (e[(e.k_EPositionTopRight = 1)] = "k_EPositionTopRight"),
            (e[(e.k_EPositionBottomLeft = 2)] = "k_EPositionBottomLeft"),
            (e[(e.k_EPositionBottomRight = 3)] = "k_EPositionBottomRight");
        })(y || (y = {})),
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
        })(I || (I = {})),
        (function (e) {
          (e[(e.k_EGameIDTypeApp = 0)] = "k_EGameIDTypeApp"),
            (e[(e.k_EGameIDTypeGameMod = 1)] = "k_EGameIDTypeGameMod"),
            (e[(e.k_EGameIDTypeShortcut = 2)] = "k_EGameIDTypeShortcut"),
            (e[(e.k_EGameIDTypeP2P = 3)] = "k_EGameIDTypeP2P");
        })(P || (P = {})),
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
        })(C || (C = {})),
        (function (e) {
          (e[(e.k_EWindowBringToFrontInvalid = 0)] =
            "k_EWindowBringToFrontInvalid"),
            (e[(e.k_EWindowBringToFrontAndForceOS = 1)] =
              "k_EWindowBringToFrontAndForceOS"),
            (e[(e.k_EWindowBringToFrontWithoutForcingOS = 2)] =
              "k_EWindowBringToFrontWithoutForcingOS");
        })(T || (T = {}));
    },
  },
]);

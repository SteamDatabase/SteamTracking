/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "8130296";
(() => {
  var e,
    t,
    r,
    n,
    o,
    i = {
      61952: (e, t, r) => {
        "use strict";
        function n(e, t, r, n) {
          var o,
            i = arguments.length,
            a =
              i < 3
                ? t
                : null === n
                ? (n = Object.getOwnPropertyDescriptor(t, r))
                : n;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            a = Reflect.decorate(e, t, r, n);
          else
            for (var _ = e.length - 1; _ >= 0; _--)
              (o = e[_]) &&
                (a = (i < 3 ? o(a) : i > 3 ? o(t, r, a) : o(t, r)) || a);
          return i > 3 && a && Object.defineProperty(t, r, a), a;
        }
        function o(e, t, r, n) {
          return new (r || (r = Promise))(function (o, i) {
            function a(e) {
              try {
                s(n.next(e));
              } catch (e) {
                i(e);
              }
            }
            function _(e) {
              try {
                s(n.throw(e));
              } catch (e) {
                i(e);
              }
            }
            function s(e) {
              var t;
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof r
                    ? t
                    : new r(function (e) {
                        e(t);
                      })).then(a, _);
            }
            s((n = n.apply(e, t || [])).next());
          });
        }
        Object.create;
        Object.create;
        r(22740);
        var i = r(87363),
          a = r.n(i),
          _ = r(61533);
        const s = 2147483647;
        function l(e, t = 0) {
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
            default:
              return t;
          }
        }
        var d, c, u, p, m, I, C, E, h, R, S, g, D, f, y, T;
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
        })(d || (d = {})),
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
          })(c || (c = {})),
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
          })(p || (p = {})),
          (function (e) {
            (e[(e.k_EAppUpdateContentType_Content = 0)] =
              "k_EAppUpdateContentType_Content"),
              (e[(e.k_EAppUpdateContentType_Workshop = 1)] =
                "k_EAppUpdateContentType_Workshop"),
              (e[(e.k_EAppUpdateContentType_Shader = 2)] =
                "k_EAppUpdateContentType_Shader"),
              (e[(e.k_EAppUpdateContentType_Max = 3)] =
                "k_EAppUpdateContentType_Max");
          })(m || (m = {})),
          (function (e) {
            (e[(e.k_EOverlayToStoreFlag_None = 0)] =
              "k_EOverlayToStoreFlag_None"),
              (e[(e.k_EOverlayToStoreFlag_AddToCart = 1)] =
                "k_EOverlayToStoreFlag_AddToCart"),
              (e[(e.k_EOverlayToStoreFlag_AddToCartAndShow = 2)] =
                "k_EOverlayToStoreFlag_AddToCartAndShow");
          })(I || (I = {})),
          (function (e) {
            (e[(e.k_EActivateGameOverlayToWebPageMode_Default = 0)] =
              "k_EActivateGameOverlayToWebPageMode_Default"),
              (e[(e.k_EActivateGameOverlayToWebPageMode_Modal = 1)] =
                "k_EActivateGameOverlayToWebPageMode_Modal");
          })(C || (C = {})),
          (function (e) {
            (e[(e.k_EGamingDeviceType_Unknown = 0)] =
              "k_EGamingDeviceType_Unknown"),
              (e[(e.k_EGamingDeviceType_StandardPC = 1)] =
                "k_EGamingDeviceType_StandardPC"),
              (e[(e.k_EGamingDeviceType_Console = 256)] =
                "k_EGamingDeviceType_Console"),
              (e[(e.k_EGamingDeviceType_PS3 = 272)] =
                "k_EGamingDeviceType_PS3"),
              (e[(e.k_EGamingDeviceType_Steambox = 288)] =
                "k_EGamingDeviceType_Steambox"),
              (e[(e.k_EGamingDeviceType_Handheld = 512)] =
                "k_EGamingDeviceType_Handheld"),
              (e[(e.k_EGamingDeviceType_Phone = 528)] =
                "k_EGamingDeviceType_Phone"),
              (e[(e.k_EGamingDeviceType_SteamDeck = 544)] =
                "k_EGamingDeviceType_SteamDeck");
          })(E || (E = {})),
          (function (e) {
            (e[(e.k_ELoginUIStyleOld = 0)] = "k_ELoginUIStyleOld"),
              (e[(e.k_ELoginUIStyleNewWithoutQRCode = 1)] =
                "k_ELoginUIStyleNewWithoutQRCode"),
              (e[(e.k_ELoginUIStyleNew = 2)] = "k_ELoginUIStyleNew");
          })(h || (h = {})),
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
          })(R || (R = {})),
          (function (e) {
            (e[(e.k_ERaiseGameWindowResult_NotRunning = 1)] =
              "k_ERaiseGameWindowResult_NotRunning"),
              (e[(e.k_ERaiseGameWindowResult_Success = 2)] =
                "k_ERaiseGameWindowResult_Success"),
              (e[(e.k_ERaiseGameWindowResult_Failure = 3)] =
                "k_ERaiseGameWindowResult_Failure");
          })(S || (S = {})),
          (function (e) {
            (e[(e.k_EPositionInvalid = -1)] = "k_EPositionInvalid"),
              (e[(e.k_EPositionTopLeft = 0)] = "k_EPositionTopLeft"),
              (e[(e.k_EPositionTopRight = 1)] = "k_EPositionTopRight"),
              (e[(e.k_EPositionBottomLeft = 2)] = "k_EPositionBottomLeft"),
              (e[(e.k_EPositionBottomRight = 3)] = "k_EPositionBottomRight");
          })(g || (g = {})),
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
          })(D || (D = {})),
          (function (e) {
            (e[(e.k_EGameIDTypeApp = 0)] = "k_EGameIDTypeApp"),
              (e[(e.k_EGameIDTypeGameMod = 1)] = "k_EGameIDTypeGameMod"),
              (e[(e.k_EGameIDTypeShortcut = 2)] = "k_EGameIDTypeShortcut"),
              (e[(e.k_EGameIDTypeP2P = 3)] = "k_EGameIDTypeP2P");
          })(f || (f = {})),
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
              (e[(e.k_EInstallMgrStateFailed = 15)] =
                "k_EInstallMgrStateFailed"),
              (e[(e.k_EInstallMgrStateCanceled = 16)] =
                "k_EInstallMgrStateCanceled");
          })(y || (y = {})),
          (function (e) {
            (e[(e.k_EWindowBringToFrontInvalid = 0)] =
              "k_EWindowBringToFrontInvalid"),
              (e[(e.k_EWindowBringToFrontAndForceOS = 1)] =
                "k_EWindowBringToFrontAndForceOS"),
              (e[(e.k_EWindowBringToFrontWithoutForcingOS = 2)] =
                "k_EWindowBringToFrontWithoutForcingOS");
          })(T || (T = {}));
        var A, v, V;
        !(function (e) {
          (e[(e.Input = 0)] = "Input"), (e[(e.Output = 1)] = "Output");
        })(A || (A = {})),
          (function (e) {
            (e[(e.Input = 0)] = "Input"),
              (e[(e.AllOutput = 1)] = "AllOutput"),
              (e[(e.Left = 2)] = "Left"),
              (e[(e.Right = 3)] = "Right"),
              (e[(e.Sub = 4)] = "Sub"),
              (e[(e.BackLeft = 5)] = "BackLeft"),
              (e[(e.BackRight = 6)] = "BackRight");
          })(v || (v = {}));
        !(function (e) {
          (e[(e.k_ESteamRealmUnknown = 0)] = "k_ESteamRealmUnknown"),
            (e[(e.k_ESteamRealmGlobal = 1)] = "k_ESteamRealmGlobal"),
            (e[(e.k_ESteamRealmChina = 2)] = "k_ESteamRealmChina");
        })(V || (V = {}));
        var F;
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
        })(F || (F = {}));
        var k, P, M, B;
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
        })(k || (k = {})),
          (function (e) {
            (e[(e.SystemKey0 = 0)] = "SystemKey0"),
              (e[(e.SystemKey1 = 1)] = "SystemKey1");
          })(P || (P = {})),
          (function (e) {
            (e[(e.Hidden = 0)] = "Hidden"),
              (e[(e.Notification = 1)] = "Notification"),
              (e[(e.Overlay = 2)] = "Overlay"),
              (e[(e.Opaque = 3)] = "Opaque"),
              (e[(e.OverlayKeyboard = 4)] = "OverlayKeyboard");
          })(M || (M = {})),
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
          })(B || (B = {}));
        var N, L, U, b, O;
        !(function (e) {
          (e[(e.k_EPending = 0)] = "k_EPending"),
            (e[(e.k_EAccepted = 1)] = "k_EAccepted"),
            (e[(e.k_ERejected = 2)] = "k_ERejected");
        })(N || (N = {})),
          (function (e) {
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
          })(L || (L = {})),
          (function (e) {
            (e[(e.GAMEPAD_BUTTON_A = 0)] = "GAMEPAD_BUTTON_A"),
              (e[(e.GAMEPAD_BUTTON_B = 1)] = "GAMEPAD_BUTTON_B"),
              (e[(e.GAMEPAD_BUTTON_X = 2)] = "GAMEPAD_BUTTON_X"),
              (e[(e.GAMEPAD_BUTTON_Y = 3)] = "GAMEPAD_BUTTON_Y"),
              (e[(e.GAMEPAD_BUTTON_DPAD_UP = 4)] = "GAMEPAD_BUTTON_DPAD_UP"),
              (e[(e.GAMEPAD_BUTTON_DPAD_RIGHT = 5)] =
                "GAMEPAD_BUTTON_DPAD_RIGHT"),
              (e[(e.GAMEPAD_BUTTON_DPAD_DOWN = 6)] =
                "GAMEPAD_BUTTON_DPAD_DOWN"),
              (e[(e.GAMEPAD_BUTTON_DPAD_LEFT = 7)] =
                "GAMEPAD_BUTTON_DPAD_LEFT"),
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
              (e[(e.GAMEPAD_LEFTSTICK_ANALOG = 24)] =
                "GAMEPAD_LEFTSTICK_ANALOG"),
              (e[(e.GAMEPAD_LEFTSTICK_CLICK = 25)] = "GAMEPAD_LEFTSTICK_CLICK"),
              (e[(e.GAMEPAD_LTRIGGER_ANALOG = 26)] = "GAMEPAD_LTRIGGER_ANALOG"),
              (e[(e.GAMEPAD_RTRIGGER_ANALOG = 27)] = "GAMEPAD_RTRIGGER_ANALOG"),
              (e[(e.GAMEPAD_BUTTON_LTRIGGER = 28)] = "GAMEPAD_BUTTON_LTRIGGER"),
              (e[(e.GAMEPAD_BUTTON_RTRIGGER = 29)] = "GAMEPAD_BUTTON_RTRIGGER"),
              (e[(e.GAMEPAD_BUTTON_LSHOULDER = 30)] =
                "GAMEPAD_BUTTON_LSHOULDER"),
              (e[(e.GAMEPAD_BUTTON_RSHOULDER = 31)] =
                "GAMEPAD_BUTTON_RSHOULDER"),
              (e[(e.GAMEPAD_BUTTON_LBACK = 32)] = "GAMEPAD_BUTTON_LBACK"),
              (e[(e.GAMEPAD_BUTTON_RBACK = 33)] = "GAMEPAD_BUTTON_RBACK"),
              (e[(e.GAMEPAD_BUTTON_GUIDE = 34)] = "GAMEPAD_BUTTON_GUIDE"),
              (e[(e.GAMEPAD_BUTTON_SELECT = 35)] = "GAMEPAD_BUTTON_SELECT"),
              (e[(e.GAMEPAD_BUTTON_START = 36)] = "GAMEPAD_BUTTON_START"),
              (e[(e.GAMEPAD_BUTTON_LPAD_CLICKED = 37)] =
                "GAMEPAD_BUTTON_LPAD_CLICKED"),
              (e[(e.GAMEPAD_BUTTON_LPAD_TOUCH = 38)] =
                "GAMEPAD_BUTTON_LPAD_TOUCH"),
              (e[(e.GAMEPAD_BUTTON_RPAD_CLICKED = 39)] =
                "GAMEPAD_BUTTON_RPAD_CLICKED"),
              (e[(e.GAMEPAD_BUTTON_RPAD_TOUCH = 40)] =
                "GAMEPAD_BUTTON_RPAD_TOUCH"),
              (e[(e.GAMEPAD_RIGHTSTICK_CLICK = 41)] =
                "GAMEPAD_RIGHTSTICK_CLICK"),
              (e[(e.GAMEPAD_RIGHTSTICK_TOUCH = 42)] =
                "GAMEPAD_RIGHTSTICK_TOUCH"),
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
          })(U || (U = {}));
        !(function (e) {
          (e[(e.k_ERemoteClientLaunchOK = 1)] = "k_ERemoteClientLaunchOK"),
            (e[(e.k_ERemoteClientLaunchFail = 2)] =
              "k_ERemoteClientLaunchFail"),
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
            (e[(e.k_ERemoteClientLaunchBusy = 23)] =
              "k_ERemoteClientLaunchBusy"),
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
        })(b || (b = {}));
        !(function (e) {
          (e[(e.AudioPlayback_Undefined = 0)] = "AudioPlayback_Undefined"),
            (e[(e.AudioPlayback_Playing = 1)] = "AudioPlayback_Playing"),
            (e[(e.AudioPlayback_Paused = 2)] = "AudioPlayback_Paused"),
            (e[(e.AudioPlayback_Idle = 3)] = "AudioPlayback_Idle");
        })(O || (O = {}));
        var G, w, H, j, x, W;
        !(function (e) {
          (e[(e.Unknown = 0)] = "Unknown"),
            (e[(e.Wired = 1)] = "Wired"),
            (e[(e.Wireless = 2)] = "Wireless"),
            (e[(e.Virtual = 3)] = "Virtual");
        })(G || (G = {})),
          (function (e) {
            (e[(e.NotPresent = 0)] = "NotPresent"),
              (e[(e.Failed = 1)] = "Failed"),
              (e[(e.Disconnected = 2)] = "Disconnected"),
              (e[(e.Disconnecting = 3)] = "Disconnecting"),
              (e[(e.Connecting = 4)] = "Connecting"),
              (e[(e.Connected = 5)] = "Connected"),
              (e[(e.Retrying = 6)] = "Retrying");
          })(w || (w = {})),
          (function (e) {
            (e[(e.None = 0)] = "None"),
              (e[(e.Weak = 1)] = "Weak"),
              (e[(e.Ok = 2)] = "Ok"),
              (e[(e.Good = 3)] = "Good"),
              (e[(e.Excellent = 4)] = "Excellent");
          })(H || (H = {})),
          (function (e) {
            (e[(e.None = 0)] = "None"),
              (e[(e.StaticWep = 1)] = "StaticWep"),
              (e[(e.DynamicWep = 2)] = "DynamicWep"),
              (e[(e.Wpa = 4)] = "Wpa"),
              (e[(e.WpaEnterprise = 8)] = "WpaEnterprise"),
              (e[(e.Wpa2 = 16)] = "Wpa2"),
              (e[(e.Wpa2Enterprise = 32)] = "Wpa2Enterprise"),
              (e[(e.Unsupported = 32768)] = "Unsupported");
          })(j || (j = {})),
          (function (e) {
            (e[(e.k_EHTTPProxyMode_Invalid = 0)] = "k_EHTTPProxyMode_Invalid"),
              (e[(e.k_EHTTPProxyMode_None = 1)] = "k_EHTTPProxyMode_None"),
              (e[(e.k_EHTTPProxyMode_Manual = 2)] = "k_EHTTPProxyMode_Manual"),
              (e[(e.k_EHTTPProxyMode_Automatic = 3)] =
                "k_EHTTPProxyMode_Automatic");
          })(x || (x = {}));
        !(function (e) {
          (e[(e.k_EClientUINotificationGroupChatMessage = 1)] =
            "k_EClientUINotificationGroupChatMessage"),
            (e[(e.k_EClientUINotificationFriendChatMessage = 2)] =
              "k_EClientUINotificationFriendChatMessage"),
            (e[(e.k_EClientUINotificationFriendPersonaState = 3)] =
              "k_EClientUINotificationFriendPersonaState");
        })(W || (W = {}));
        var q, K, z, Y, $, X, J;
        function Q(e) {
          if (!Z() || !window.document.cookie) return null;
          let t = document.cookie.match("(^|; )" + e + "=([^;]*)");
          return t && t[2] ? decodeURIComponent(t[2]) : null;
        }
        function Z() {
          return !!window.document;
        }
        !(function (e) {
          (e[(e.k_EComputerActiveStateInvalid = 0)] =
            "k_EComputerActiveStateInvalid"),
            (e[(e.k_EComputerActiveStateActive = 1)] =
              "k_EComputerActiveStateActive"),
            (e[(e.k_EComputerActiveStateIdle = 2)] =
              "k_EComputerActiveStateIdle");
        })(q || (q = {})),
          (function (e) {
            (e[(e.k_EClientUsedInputTypeKeyboard = 0)] =
              "k_EClientUsedInputTypeKeyboard"),
              (e[(e.k_EClientUsedInputTypeMouse = 1)] =
                "k_EClientUsedInputTypeMouse"),
              (e[(e.k_EClientUsedInputTypeController = 2)] =
                "k_EClientUsedInputTypeController"),
              (e[(e.k_EClientUsedInputTypeMax = 3)] =
                "k_EClientUsedInputTypeMax");
          })(K || (K = {})),
          (function (e) {
            (e[(e.k_EVRError_None = 0)] = "k_EVRError_None"),
              (e[(e.k_EVRError_VRSkipParam = 1)] = "k_EVRError_VRSkipParam"),
              (e[(e.k_EVRError_ComponentNotInstalled = 2)] =
                "k_EVRError_ComponentNotInstalled"),
              (e[(e.k_EVRError_ComponentBusy = 3)] =
                "k_EVRError_ComponentBusy"),
              (e[(e.k_EVRError_CrashProtection = 4)] =
                "k_EVRError_CrashProtection"),
              (e[(e.k_EVRError_HmdError = 5)] = "k_EVRError_HmdError"),
              (e[(e.k_EVRError_PathChanged = 6)] = "k_EVRError_PathChanged");
          })(z || (z = {})),
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
              ] =
                "VRInitError_Compositor_MessageOverlaySharedStateInitFailure"),
              (e[(e.VRInitError_Compositor_PropertiesInterfaceIsNull = 410)] =
                "VRInitError_Compositor_PropertiesInterfaceIsNull"),
              (e[
                (e.VRInitError_Compositor_CreateFullscreenWindowFailed = 411)
              ] = "VRInitError_Compositor_CreateFullscreenWindowFailed"),
              (e[(e.VRInitError_Compositor_SettingsInterfaceIsNull = 412)] =
                "VRInitError_Compositor_SettingsInterfaceIsNull"),
              (e[(e.VRInitError_Compositor_FailedToShowWindow = 413)] =
                "VRInitError_Compositor_FailedToShowWindow"),
              (e[(e.VRInitError_Compositor_DistortInterfaceIsNull = 414)] =
                "VRInitError_Compositor_DistortInterfaceIsNull"),
              (e[(e.VRInitError_Compositor_DisplayFrequencyFailure = 415)] =
                "VRInitError_Compositor_DisplayFrequencyFailure"),
              (e[
                (e.VRInitError_Compositor_RendererInitializationFailed = 416)
              ] = "VRInitError_Compositor_RendererInitializationFailed"),
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
              (e[
                (e.VRInitError_Compositor_FailedToCreateDXGI2SwapChain = 429)
              ] = "VRInitError_Compositor_FailedToCreateDXGI2SwapChain"),
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
              ] =
                "VRInitError_Compositor_CreateSceneTextureIndexConstantBuffer"),
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
              (e[
                (e.VRInitError_Compositor_CreatePanelMaskConstantBuffer = 470)
              ] = "VRInitError_Compositor_CreatePanelMaskConstantBuffer"),
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
              ] =
                "VRInitError_Compositor_CreateDriverDirectModeResolveTextures"),
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
              (e[
                (e.VRInitError_Compositor_CreateLastFrameRenderTexture = 484)
              ] = "VRInitError_Compositor_CreateLastFrameRenderTexture"),
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
              (e[
                (e.VRInitError_VendorSpecific_HmdFound_CantOpenDevice = 1101)
              ] = "VRInitError_VendorSpecific_HmdFound_CantOpenDevice"),
              (e[
                (e.VRInitError_VendorSpecific_HmdFound_UnableToRequestConfigStart = 1102)
              ] =
                "VRInitError_VendorSpecific_HmdFound_UnableToRequestConfigStart"),
              (e[
                (e.VRInitError_VendorSpecific_HmdFound_NoStoredConfig = 1103)
              ] = "VRInitError_VendorSpecific_HmdFound_NoStoredConfig"),
              (e[(e.VRInitError_VendorSpecific_HmdFound_ConfigTooBig = 1104)] =
                "VRInitError_VendorSpecific_HmdFound_ConfigTooBig"),
              (e[
                (e.VRInitError_VendorSpecific_HmdFound_ConfigTooSmall = 1105)
              ] = "VRInitError_VendorSpecific_HmdFound_ConfigTooSmall"),
              (e[
                (e.VRInitError_VendorSpecific_HmdFound_UnableToInitZLib = 1106)
              ] = "VRInitError_VendorSpecific_HmdFound_UnableToInitZLib"),
              (e[
                (e.VRInitError_VendorSpecific_HmdFound_CantReadFirmwareVersion = 1107)
              ] =
                "VRInitError_VendorSpecific_HmdFound_CantReadFirmwareVersion"),
              (e[
                (e.VRInitError_VendorSpecific_HmdFound_UnableToSendUserDataStart = 1108)
              ] =
                "VRInitError_VendorSpecific_HmdFound_UnableToSendUserDataStart"),
              (e[
                (e.VRInitError_VendorSpecific_HmdFound_UnableToGetUserDataStart = 1109)
              ] =
                "VRInitError_VendorSpecific_HmdFound_UnableToGetUserDataStart"),
              (e[
                (e.VRInitError_VendorSpecific_HmdFound_UnableToGetUserDataNext = 1110)
              ] =
                "VRInitError_VendorSpecific_HmdFound_UnableToGetUserDataNext"),
              (e[
                (e.VRInitError_VendorSpecific_HmdFound_UserDataAddressRange = 1111)
              ] = "VRInitError_VendorSpecific_HmdFound_UserDataAddressRange"),
              (e[(e.VRInitError_VendorSpecific_HmdFound_UserDataError = 1112)] =
                "VRInitError_VendorSpecific_HmdFound_UserDataError"),
              (e[
                (e.VRInitError_VendorSpecific_HmdFound_ConfigFailedSanityCheck = 1113)
              ] =
                "VRInitError_VendorSpecific_HmdFound_ConfigFailedSanityCheck"),
              (e[
                (e.VRInitError_VendorSpecific_OculusRuntimeBadInstall = 1114)
              ] = "VRInitError_VendorSpecific_OculusRuntimeBadInstall"),
              (e[
                (e.VRInitError_VendorSpecific_HmdFound_UnexpectedConfiguration_1 = 1115)
              ] =
                "VRInitError_VendorSpecific_HmdFound_UnexpectedConfiguration_1"),
              (e[(e.VRInitError_Steam_SteamInstallationNotFound = 2e3)] =
                "VRInitError_Steam_SteamInstallationNotFound"),
              (e[(e.VRInitError_LastError = 2001)] = "VRInitError_LastError");
          })(Y || (Y = {})),
          (function (e) {
            (e[(e.Invalid = 0)] = "Invalid"),
              (e[(e.TrackingSystemName_String = 1e3)] =
                "TrackingSystemName_String"),
              (e[(e.ModelNumber_String = 1001)] = "ModelNumber_String"),
              (e[(e.SerialNumber_String = 1002)] = "SerialNumber_String"),
              (e[(e.RenderModelName_String = 1003)] = "RenderModelName_String"),
              (e[(e.WillDriftInYaw_Bool = 1004)] = "WillDriftInYaw_Bool"),
              (e[(e.ManufacturerName_String = 1005)] =
                "ManufacturerName_String"),
              (e[(e.TrackingFirmwareVersion_String = 1006)] =
                "TrackingFirmwareVersion_String"),
              (e[(e.HardwareRevision_String = 1007)] =
                "HardwareRevision_String"),
              (e[(e.AllWirelessDongleDescriptions_String = 1008)] =
                "AllWirelessDongleDescriptions_String"),
              (e[(e.ConnectedWirelessDongle_String = 1009)] =
                "ConnectedWirelessDongle_String"),
              (e[(e.DeviceIsWireless_Bool = 1010)] = "DeviceIsWireless_Bool"),
              (e[(e.DeviceIsCharging_Bool = 1011)] = "DeviceIsCharging_Bool"),
              (e[(e.DeviceBatteryPercentage_Float = 1012)] =
                "DeviceBatteryPercentage_Float"),
              (e[(e.StatusDisplayTransform_Matrix34 = 1013)] =
                "StatusDisplayTransform_Matrix34"),
              (e[(e.Firmware_UpdateAvailable_Bool = 1014)] =
                "Firmware_UpdateAvailable_Bool"),
              (e[(e.Firmware_ManualUpdate_Bool = 1015)] =
                "Firmware_ManualUpdate_Bool"),
              (e[(e.Firmware_ManualUpdateURL_String = 1016)] =
                "Firmware_ManualUpdateURL_String"),
              (e[(e.HardwareRevision_Uint64 = 1017)] =
                "HardwareRevision_Uint64"),
              (e[(e.FirmwareVersion_Uint64 = 1018)] = "FirmwareVersion_Uint64"),
              (e[(e.FPGAVersion_Uint64 = 1019)] = "FPGAVersion_Uint64"),
              (e[(e.VRCVersion_Uint64 = 1020)] = "VRCVersion_Uint64"),
              (e[(e.RadioVersion_Uint64 = 1021)] = "RadioVersion_Uint64"),
              (e[(e.DongleVersion_Uint64 = 1022)] = "DongleVersion_Uint64"),
              (e[(e.BlockServerShutdown_Bool = 1023)] =
                "BlockServerShutdown_Bool"),
              (e[(e.CanUnifyCoordinateSystemWithHmd_Bool = 1024)] =
                "CanUnifyCoordinateSystemWithHmd_Bool"),
              (e[(e.ContainsProximitySensor_Bool = 1025)] =
                "ContainsProximitySensor_Bool"),
              (e[(e.DeviceProvidesBatteryStatus_Bool = 1026)] =
                "DeviceProvidesBatteryStatus_Bool"),
              (e[(e.DeviceCanPowerOff_Bool = 1027)] = "DeviceCanPowerOff_Bool"),
              (e[(e.Firmware_ProgrammingTarget_String = 1028)] =
                "Firmware_ProgrammingTarget_String"),
              (e[(e.DeviceClass_Int32 = 1029)] = "DeviceClass_Int32"),
              (e[(e.HasCamera_Bool = 1030)] = "HasCamera_Bool"),
              (e[(e.DriverVersion_String = 1031)] = "DriverVersion_String"),
              (e[(e.Firmware_ForceUpdateRequired_Bool = 1032)] =
                "Firmware_ForceUpdateRequired_Bool"),
              (e[(e.ViveSystemButtonFixRequired_Bool = 1033)] =
                "ViveSystemButtonFixRequired_Bool"),
              (e[(e.ParentDriver_Uint64 = 1034)] = "ParentDriver_Uint64"),
              (e[(e.ResourceRoot_String = 1035)] = "ResourceRoot_String"),
              (e[(e.RegisteredDeviceType_String = 1036)] =
                "RegisteredDeviceType_String"),
              (e[(e.InputProfilePath_String = 1037)] =
                "InputProfilePath_String"),
              (e[(e.NeverTracked_Bool = 1038)] = "NeverTracked_Bool"),
              (e[(e.NumCameras_Int32 = 1039)] = "NumCameras_Int32"),
              (e[(e.CameraFrameLayout_Int32 = 1040)] =
                "CameraFrameLayout_Int32"),
              (e[(e.CameraStreamFormat_Int32 = 1041)] =
                "CameraStreamFormat_Int32"),
              (e[(e.AdditionalDeviceSettingsPath_String = 1042)] =
                "AdditionalDeviceSettingsPath_String"),
              (e[(e.DevicePowerUsage_Float = 1052)] = "DevicePowerUsage_Float"),
              (e[(e.ReportsTimeSinceVSync_Bool = 2e3)] =
                "ReportsTimeSinceVSync_Bool"),
              (e[(e.SecondsFromVsyncToPhotons_Float = 2001)] =
                "SecondsFromVsyncToPhotons_Float"),
              (e[(e.DisplayFrequency_Float = 2002)] = "DisplayFrequency_Float"),
              (e[(e.UserIpdMeters_Float = 2003)] = "UserIpdMeters_Float"),
              (e[(e.CurrentUniverseId_Uint64 = 2004)] =
                "CurrentUniverseId_Uint64"),
              (e[(e.PreviousUniverseId_Uint64 = 2005)] =
                "PreviousUniverseId_Uint64"),
              (e[(e.DisplayFirmwareVersion_Uint64 = 2006)] =
                "DisplayFirmwareVersion_Uint64"),
              (e[(e.IsOnDesktop_Bool = 2007)] = "IsOnDesktop_Bool"),
              (e[(e.DisplayMCType_Int32 = 2008)] = "DisplayMCType_Int32"),
              (e[(e.DisplayMCOffset_Float = 2009)] = "DisplayMCOffset_Float"),
              (e[(e.DisplayMCScale_Float = 2010)] = "DisplayMCScale_Float"),
              (e[(e.EdidVendorID_Int32 = 2011)] = "EdidVendorID_Int32"),
              (e[(e.DisplayMCImageLeft_String = 2012)] =
                "DisplayMCImageLeft_String"),
              (e[(e.DisplayMCImageRight_String = 2013)] =
                "DisplayMCImageRight_String"),
              (e[(e.DisplayGCBlackClamp_Float = 2014)] =
                "DisplayGCBlackClamp_Float"),
              (e[(e.EdidProductID_Int32 = 2015)] = "EdidProductID_Int32"),
              (e[(e.CameraToHeadTransform_Matrix34 = 2016)] =
                "CameraToHeadTransform_Matrix34"),
              (e[(e.DisplayGCType_Int32 = 2017)] = "DisplayGCType_Int32"),
              (e[(e.DisplayGCOffset_Float = 2018)] = "DisplayGCOffset_Float"),
              (e[(e.DisplayGCScale_Float = 2019)] = "DisplayGCScale_Float"),
              (e[(e.DisplayGCPrescale_Float = 2020)] =
                "DisplayGCPrescale_Float"),
              (e[(e.DisplayGCImage_String = 2021)] = "DisplayGCImage_String"),
              (e[(e.LensCenterLeftU_Float = 2022)] = "LensCenterLeftU_Float"),
              (e[(e.LensCenterLeftV_Float = 2023)] = "LensCenterLeftV_Float"),
              (e[(e.LensCenterRightU_Float = 2024)] = "LensCenterRightU_Float"),
              (e[(e.LensCenterRightV_Float = 2025)] = "LensCenterRightV_Float"),
              (e[(e.UserHeadToEyeDepthMeters_Float = 2026)] =
                "UserHeadToEyeDepthMeters_Float"),
              (e[(e.CameraFirmwareVersion_Uint64 = 2027)] =
                "CameraFirmwareVersion_Uint64"),
              (e[(e.CameraFirmwareDescription_String = 2028)] =
                "CameraFirmwareDescription_String"),
              (e[(e.DisplayFPGAVersion_Uint64 = 2029)] =
                "DisplayFPGAVersion_Uint64"),
              (e[(e.DisplayBootloaderVersion_Uint64 = 2030)] =
                "DisplayBootloaderVersion_Uint64"),
              (e[(e.DisplayHardwareVersion_Uint64 = 2031)] =
                "DisplayHardwareVersion_Uint64"),
              (e[(e.AudioFirmwareVersion_Uint64 = 2032)] =
                "AudioFirmwareVersion_Uint64"),
              (e[(e.CameraCompatibilityMode_Int32 = 2033)] =
                "CameraCompatibilityMode_Int32"),
              (e[(e.ScreenshotHorizontalFieldOfViewDegrees_Float = 2034)] =
                "ScreenshotHorizontalFieldOfViewDegrees_Float"),
              (e[(e.ScreenshotVerticalFieldOfViewDegrees_Float = 2035)] =
                "ScreenshotVerticalFieldOfViewDegrees_Float"),
              (e[(e.DisplaySuppressed_Bool = 2036)] = "DisplaySuppressed_Bool"),
              (e[(e.DisplayAllowNightMode_Bool = 2037)] =
                "DisplayAllowNightMode_Bool"),
              (e[(e.DisplayMCImageWidth_Int32 = 2038)] =
                "DisplayMCImageWidth_Int32"),
              (e[(e.DisplayMCImageHeight_Int32 = 2039)] =
                "DisplayMCImageHeight_Int32"),
              (e[(e.DisplayMCImageNumChannels_Int32 = 2040)] =
                "DisplayMCImageNumChannels_Int32"),
              (e[(e.DisplayMCImageData_Binary = 2041)] =
                "DisplayMCImageData_Binary"),
              (e[(e.SecondsFromPhotonsToVblank_Float = 2042)] =
                "SecondsFromPhotonsToVblank_Float"),
              (e[(e.DriverDirectModeSendsVsyncEvents_Bool = 2043)] =
                "DriverDirectModeSendsVsyncEvents_Bool"),
              (e[(e.DisplayDebugMode_Bool = 2044)] = "DisplayDebugMode_Bool"),
              (e[(e.GraphicsAdapterLuid_Uint64 = 2045)] =
                "GraphicsAdapterLuid_Uint64"),
              (e[(e.DriverProvidedChaperonePath_String = 2048)] =
                "DriverProvidedChaperonePath_String"),
              (e[(e.ExpectedTrackingReferenceCount_Int32 = 2049)] =
                "ExpectedTrackingReferenceCount_Int32"),
              (e[(e.ExpectedControllerCount_Int32 = 2050)] =
                "ExpectedControllerCount_Int32"),
              (e[(e.NamedIconPathControllerLeftDeviceOff_String = 2051)] =
                "NamedIconPathControllerLeftDeviceOff_String"),
              (e[(e.NamedIconPathControllerRightDeviceOff_String = 2052)] =
                "NamedIconPathControllerRightDeviceOff_String"),
              (e[(e.NamedIconPathTrackingReferenceDeviceOff_String = 2053)] =
                "NamedIconPathTrackingReferenceDeviceOff_String"),
              (e[(e.DoNotApplyPrediction_Bool = 2054)] =
                "DoNotApplyPrediction_Bool"),
              (e[(e.CameraToHeadTransforms_Matrix34_Array = 2055)] =
                "CameraToHeadTransforms_Matrix34_Array"),
              (e[(e.DistortionMeshResolution_Int32 = 2056)] =
                "DistortionMeshResolution_Int32"),
              (e[(e.DriverIsDrawingControllers_Bool = 2057)] =
                "DriverIsDrawingControllers_Bool"),
              (e[(e.DriverRequestsApplicationPause_Bool = 2058)] =
                "DriverRequestsApplicationPause_Bool"),
              (e[(e.DriverRequestsReducedRendering_Bool = 2059)] =
                "DriverRequestsReducedRendering_Bool"),
              (e[(e.MinimumIpdStepMeters_Float = 2060)] =
                "MinimumIpdStepMeters_Float"),
              (e[(e.AudioBridgeFirmwareVersion_Uint64 = 2061)] =
                "AudioBridgeFirmwareVersion_Uint64"),
              (e[(e.ImageBridgeFirmwareVersion_Uint64 = 2062)] =
                "ImageBridgeFirmwareVersion_Uint64"),
              (e[(e.ImuToHeadTransform_Matrix34 = 2063)] =
                "ImuToHeadTransform_Matrix34"),
              (e[(e.ImuFactoryGyroBias_Vector3 = 2064)] =
                "ImuFactoryGyroBias_Vector3"),
              (e[(e.ImuFactoryGyroScale_Vector3 = 2065)] =
                "ImuFactoryGyroScale_Vector3"),
              (e[(e.ImuFactoryAccelerometerBias_Vector3 = 2066)] =
                "ImuFactoryAccelerometerBias_Vector3"),
              (e[(e.ImuFactoryAccelerometerScale_Vector3 = 2067)] =
                "ImuFactoryAccelerometerScale_Vector3"),
              (e[(e.ConfigurationIncludesLighthouse20Features_Bool = 2069)] =
                "ConfigurationIncludesLighthouse20Features_Bool"),
              (e[(e.Prop_AdditionalRadioFeatures_Uint64 = 2070)] =
                "Prop_AdditionalRadioFeatures_Uint64"),
              (e[(e.Prop_CameraWhiteBalance_Vector4_Array = 2071)] =
                "Prop_CameraWhiteBalance_Vector4_Array"),
              (e[(e.Prop_CameraDistortionFunction_Int32_Array = 2072)] =
                "Prop_CameraDistortionFunction_Int32_Array"),
              (e[(e.Prop_CameraDistortionCoefficients_Float_Array = 2073)] =
                "Prop_CameraDistortionCoefficients_Float_Array"),
              (e[(e.Prop_ExpectedControllerType_String = 2074)] =
                "Prop_ExpectedControllerType_String"),
              (e[(e.HmdTrackingStyle_Int32 = 2075)] = "HmdTrackingStyle_Int32"),
              (e[(e.DriverProvidedChaperoneVisibility_Bool = 2076)] =
                "DriverProvidedChaperoneVisibility_Bool"),
              (e[(e.HmdColumnCorrectionSettingPrefix_String = 2077)] =
                "HmdColumnCorrectionSettingPrefix_String"),
              (e[(e.CameraSupportsCompatibilityModes_Bool = 2078)] =
                "CameraSupportsCompatibilityModes_Bool"),
              (e[(e.SupportsRoomViewDepthProjection_Bool = 2079)] =
                "SupportsRoomViewDepthProjection_Bool"),
              (e[(e.DisplayAvailableFrameRates_Float_Array = 2080)] =
                "DisplayAvailableFrameRates_Float_Array"),
              (e[(e.DisplaySupportsRuntimeFramerateChange_Bool = 2084)] =
                "DisplaySupportsRuntimeFramerateChange_Bool"),
              (e[(e.DisplaySupportsAnalogGain_Bool = 2085)] =
                "DisplaySupportsAnalogGain_Bool"),
              (e[(e.DisplayMinAnalogGain_Float = 2086)] =
                "DisplayMinAnalogGain_Float"),
              (e[(e.DisplayMaxAnalogGain_Float = 2087)] =
                "DisplayMaxAnalogGain_Float"),
              (e[(e.DashboardScale_Float = 2091)] = "DashboardScale_Float"),
              (e[(e.PeerButtonInfo_String = 2092)] = "PeerButtonInfo_String"),
              (e[(e.IpdUIRangeMinMeters_Float = 2100)] =
                "IpdUIRangeMinMeters_Float"),
              (e[(e.IpdUIRangeMaxMeters_Float = 2101)] =
                "IpdUIRangeMaxMeters_Float"),
              (e[(e.Hmd_SupportsHDCP14LegacyCompat_Bool = 2102)] =
                "Hmd_SupportsHDCP14LegacyCompat_Bool"),
              (e[(e.Hmd_SupportsMicMonitoring_Bool = 2103)] =
                "Hmd_SupportsMicMonitoring_Bool"),
              (e[(e.Hmd_SupportsDisplayPortTrainingMode_Bool = 2104)] =
                "Hmd_SupportsDisplayPortTrainingMode_Bool"),
              (e[(e.Hmd_SupportsRoomViewDirect_Bool = 2105)] =
                "Hmd_SupportsRoomViewDirect_Bool"),
              (e[(e.Hmd_SupportsAppThrottling_Bool = 2106)] =
                "Hmd_SupportsAppThrottling_Bool"),
              (e[(e.Hmd_SupportsGpuBusMonitoring_Bool = 2107)] =
                "Hmd_SupportsGpuBusMonitoring_Bool"),
              (e[(e.DriverRequestedMuraCorrectionMode_Int32 = 2200)] =
                "DriverRequestedMuraCorrectionMode_Int32"),
              (e[(e.DriverRequestedMuraFeather_InnerLeft_Int32 = 2201)] =
                "DriverRequestedMuraFeather_InnerLeft_Int32"),
              (e[(e.DriverRequestedMuraFeather_InnerRight_Int32 = 2202)] =
                "DriverRequestedMuraFeather_InnerRight_Int32"),
              (e[(e.DriverRequestedMuraFeather_InnerTop_Int32 = 2203)] =
                "DriverRequestedMuraFeather_InnerTop_Int32"),
              (e[(e.DriverRequestedMuraFeather_InnerBottom_Int32 = 2204)] =
                "DriverRequestedMuraFeather_InnerBottom_Int32"),
              (e[(e.DriverRequestedMuraFeather_OuterLeft_Int32 = 2205)] =
                "DriverRequestedMuraFeather_OuterLeft_Int32"),
              (e[(e.DriverRequestedMuraFeather_OuterRight_Int32 = 2206)] =
                "DriverRequestedMuraFeather_OuterRight_Int32"),
              (e[(e.DriverRequestedMuraFeather_OuterTop_Int32 = 2207)] =
                "DriverRequestedMuraFeather_OuterTop_Int32"),
              (e[(e.DriverRequestedMuraFeather_OuterBottom_Int32 = 2208)] =
                "DriverRequestedMuraFeather_OuterBottom_Int32"),
              (e[(e.Audio_SupportsDualSpeakerAndJackOutput_Bool = 2303)] =
                "Audio_SupportsDualSpeakerAndJackOutput_Bool"),
              (e[(e.AttachedDeviceId_String = 3e3)] =
                "AttachedDeviceId_String"),
              (e[(e.SupportedButtons_Uint64 = 3001)] =
                "SupportedButtons_Uint64"),
              (e[(e.Axis0Type_Int32 = 3002)] = "Axis0Type_Int32"),
              (e[(e.Axis1Type_Int32 = 3003)] = "Axis1Type_Int32"),
              (e[(e.Axis2Type_Int32 = 3004)] = "Axis2Type_Int32"),
              (e[(e.Axis3Type_Int32 = 3005)] = "Axis3Type_Int32"),
              (e[(e.Axis4Type_Int32 = 3006)] = "Axis4Type_Int32"),
              (e[(e.ControllerRoleHint_Int32 = 3007)] =
                "ControllerRoleHint_Int32"),
              (e[(e.FieldOfViewLeftDegrees_Float = 4e3)] =
                "FieldOfViewLeftDegrees_Float"),
              (e[(e.FieldOfViewRightDegrees_Float = 4001)] =
                "FieldOfViewRightDegrees_Float"),
              (e[(e.FieldOfViewTopDegrees_Float = 4002)] =
                "FieldOfViewTopDegrees_Float"),
              (e[(e.FieldOfViewBottomDegrees_Float = 4003)] =
                "FieldOfViewBottomDegrees_Float"),
              (e[(e.TrackingRangeMinimumMeters_Float = 4004)] =
                "TrackingRangeMinimumMeters_Float"),
              (e[(e.TrackingRangeMaximumMeters_Float = 4005)] =
                "TrackingRangeMaximumMeters_Float"),
              (e[(e.ModeLabel_String = 4006)] = "ModeLabel_String"),
              (e[(e.IconPathName_String = 5e3)] = "IconPathName_String"),
              (e[(e.NamedIconPathDeviceOff_String = 5001)] =
                "NamedIconPathDeviceOff_String"),
              (e[(e.NamedIconPathDeviceSearching_String = 5002)] =
                "NamedIconPathDeviceSearching_String"),
              (e[(e.NamedIconPathDeviceSearchingAlert_String = 5003)] =
                "NamedIconPathDeviceSearchingAlert_String"),
              (e[(e.NamedIconPathDeviceReady_String = 5004)] =
                "NamedIconPathDeviceReady_String"),
              (e[(e.NamedIconPathDeviceReadyAlert_String = 5005)] =
                "NamedIconPathDeviceReadyAlert_String"),
              (e[(e.NamedIconPathDeviceNotReady_String = 5006)] =
                "NamedIconPathDeviceNotReady_String"),
              (e[(e.NamedIconPathDeviceStandby_String = 5007)] =
                "NamedIconPathDeviceStandby_String"),
              (e[(e.NamedIconPathDeviceAlertLow_String = 5008)] =
                "NamedIconPathDeviceAlertLow_String"),
              (e[(e.DisplayHiddenArea_Binary_Start = 5100)] =
                "DisplayHiddenArea_Binary_Start"),
              (e[(e.DisplayHiddenArea_Binary_End = 5150)] =
                "DisplayHiddenArea_Binary_End"),
              (e[(e.ParentContainer = 5151)] = "ParentContainer"),
              (e[(e.UserConfigPath_String = 6e3)] = "UserConfigPath_String"),
              (e[(e.InstallPath_String = 6001)] = "InstallPath_String"),
              (e[(e.HasDisplayComponent_Bool = 6002)] =
                "HasDisplayComponent_Bool"),
              (e[(e.HasControllerComponent_Bool = 6003)] =
                "HasControllerComponent_Bool"),
              (e[(e.HasCameraComponent_Bool = 6004)] =
                "HasCameraComponent_Bool"),
              (e[(e.HasDriverDirectModeComponent_Bool = 6005)] =
                "HasDriverDirectModeComponent_Bool"),
              (e[(e.HasVirtualDisplayComponent_Bool = 6006)] =
                "HasVirtualDisplayComponent_Bool"),
              (e[(e.HasSpatialAnchorsSupport_Bool = 6007)] =
                "HasSpatialAnchorsSupport_Bool"),
              (e[(e.ControllerType_String = 7e3)] = "ControllerType_String"),
              (e[(e.LegacyInputProfile_String = 7001)] =
                "LegacyInputProfile_String"),
              (e[(e.VendorSpecific_Reserved_Start = 1e4)] =
                "VendorSpecific_Reserved_Start"),
              (e[(e.VendorSpecific_Reserved_End = 10999)] =
                "VendorSpecific_Reserved_End"),
              (e[(e.TrackedDeviceProperty_Max = 1e6)] =
                "TrackedDeviceProperty_Max");
          })($ || ($ = {})),
          (function (e) {
            (e[(e.Invalid = 0)] = "Invalid"),
              (e[(e.TrackingSystemName_String = 1e3)] =
                "TrackingSystemName_String"),
              (e[(e.ModelNumber_String = 1001)] = "ModelNumber_String"),
              (e[(e.SerialNumber_String = 1002)] = "SerialNumber_String"),
              (e[(e.RenderModelName_String = 1003)] = "RenderModelName_String"),
              (e[(e.WillDriftInYaw_Bool = 1004)] = "WillDriftInYaw_Bool"),
              (e[(e.ManufacturerName_String = 1005)] =
                "ManufacturerName_String"),
              (e[(e.TrackingFirmwareVersion_String = 1006)] =
                "TrackingFirmwareVersion_String"),
              (e[(e.HardwareRevision_String = 1007)] =
                "HardwareRevision_String"),
              (e[(e.AllWirelessDongleDescriptions_String = 1008)] =
                "AllWirelessDongleDescriptions_String"),
              (e[(e.ConnectedWirelessDongle_String = 1009)] =
                "ConnectedWirelessDongle_String"),
              (e[(e.DeviceIsWireless_Bool = 1010)] = "DeviceIsWireless_Bool"),
              (e[(e.DeviceIsCharging_Bool = 1011)] = "DeviceIsCharging_Bool"),
              (e[(e.DeviceBatteryPercentage_Float = 1012)] =
                "DeviceBatteryPercentage_Float"),
              (e[(e.StatusDisplayTransform_Matrix34 = 1013)] =
                "StatusDisplayTransform_Matrix34"),
              (e[(e.Firmware_UpdateAvailable_Bool = 1014)] =
                "Firmware_UpdateAvailable_Bool"),
              (e[(e.Firmware_ManualUpdate_Bool = 1015)] =
                "Firmware_ManualUpdate_Bool"),
              (e[(e.Firmware_ManualUpdateURL_String = 1016)] =
                "Firmware_ManualUpdateURL_String"),
              (e[(e.HardwareRevision_Uint64 = 1017)] =
                "HardwareRevision_Uint64"),
              (e[(e.FirmwareVersion_Uint64 = 1018)] = "FirmwareVersion_Uint64"),
              (e[(e.FPGAVersion_Uint64 = 1019)] = "FPGAVersion_Uint64"),
              (e[(e.VRCVersion_Uint64 = 1020)] = "VRCVersion_Uint64"),
              (e[(e.RadioVersion_Uint64 = 1021)] = "RadioVersion_Uint64"),
              (e[(e.DongleVersion_Uint64 = 1022)] = "DongleVersion_Uint64"),
              (e[(e.BlockServerShutdown_Bool = 1023)] =
                "BlockServerShutdown_Bool"),
              (e[(e.CanUnifyCoordinateSystemWithHmd_Bool = 1024)] =
                "CanUnifyCoordinateSystemWithHmd_Bool"),
              (e[(e.ContainsProximitySensor_Bool = 1025)] =
                "ContainsProximitySensor_Bool"),
              (e[(e.DeviceProvidesBatteryStatus_Bool = 1026)] =
                "DeviceProvidesBatteryStatus_Bool"),
              (e[(e.DeviceCanPowerOff_Bool = 1027)] = "DeviceCanPowerOff_Bool"),
              (e[(e.Firmware_ProgrammingTarget_String = 1028)] =
                "Firmware_ProgrammingTarget_String"),
              (e[(e.DeviceClass_Int32 = 1029)] = "DeviceClass_Int32"),
              (e[(e.HasCamera_Bool = 1030)] = "HasCamera_Bool"),
              (e[(e.DriverVersion_String = 1031)] = "DriverVersion_String"),
              (e[(e.Firmware_ForceUpdateRequired_Bool = 1032)] =
                "Firmware_ForceUpdateRequired_Bool"),
              (e[(e.ViveSystemButtonFixRequired_Bool = 1033)] =
                "ViveSystemButtonFixRequired_Bool"),
              (e[(e.ParentDriver_Uint64 = 1034)] = "ParentDriver_Uint64"),
              (e[(e.ResourceRoot_String = 1035)] = "ResourceRoot_String"),
              (e[(e.RegisteredDeviceType_String = 1036)] =
                "RegisteredDeviceType_String"),
              (e[(e.InputProfilePath_String = 1037)] =
                "InputProfilePath_String"),
              (e[(e.NeverTracked_Bool = 1038)] = "NeverTracked_Bool"),
              (e[(e.NumCameras_Int32 = 1039)] = "NumCameras_Int32"),
              (e[(e.CameraFrameLayout_Int32 = 1040)] =
                "CameraFrameLayout_Int32"),
              (e[(e.CameraStreamFormat_Int32 = 1041)] =
                "CameraStreamFormat_Int32"),
              (e[(e.AdditionalDeviceSettingsPath_String = 1042)] =
                "AdditionalDeviceSettingsPath_String"),
              (e[(e.DevicePowerUsage_Float = 1052)] = "DevicePowerUsage_Float"),
              (e[(e.ReportsTimeSinceVSync_Bool = 2e3)] =
                "ReportsTimeSinceVSync_Bool"),
              (e[(e.SecondsFromVsyncToPhotons_Float = 2001)] =
                "SecondsFromVsyncToPhotons_Float"),
              (e[(e.DisplayFrequency_Float = 2002)] = "DisplayFrequency_Float"),
              (e[(e.UserIpdMeters_Float = 2003)] = "UserIpdMeters_Float"),
              (e[(e.CurrentUniverseId_Uint64 = 2004)] =
                "CurrentUniverseId_Uint64"),
              (e[(e.PreviousUniverseId_Uint64 = 2005)] =
                "PreviousUniverseId_Uint64"),
              (e[(e.DisplayFirmwareVersion_Uint64 = 2006)] =
                "DisplayFirmwareVersion_Uint64"),
              (e[(e.IsOnDesktop_Bool = 2007)] = "IsOnDesktop_Bool"),
              (e[(e.DisplayMCType_Int32 = 2008)] = "DisplayMCType_Int32"),
              (e[(e.DisplayMCOffset_Float = 2009)] = "DisplayMCOffset_Float"),
              (e[(e.DisplayMCScale_Float = 2010)] = "DisplayMCScale_Float"),
              (e[(e.EdidVendorID_Int32 = 2011)] = "EdidVendorID_Int32"),
              (e[(e.DisplayMCImageLeft_String = 2012)] =
                "DisplayMCImageLeft_String"),
              (e[(e.DisplayMCImageRight_String = 2013)] =
                "DisplayMCImageRight_String"),
              (e[(e.DisplayGCBlackClamp_Float = 2014)] =
                "DisplayGCBlackClamp_Float"),
              (e[(e.EdidProductID_Int32 = 2015)] = "EdidProductID_Int32"),
              (e[(e.CameraToHeadTransform_Matrix34 = 2016)] =
                "CameraToHeadTransform_Matrix34"),
              (e[(e.DisplayGCType_Int32 = 2017)] = "DisplayGCType_Int32"),
              (e[(e.DisplayGCOffset_Float = 2018)] = "DisplayGCOffset_Float"),
              (e[(e.DisplayGCScale_Float = 2019)] = "DisplayGCScale_Float"),
              (e[(e.DisplayGCPrescale_Float = 2020)] =
                "DisplayGCPrescale_Float"),
              (e[(e.DisplayGCImage_String = 2021)] = "DisplayGCImage_String"),
              (e[(e.LensCenterLeftU_Float = 2022)] = "LensCenterLeftU_Float"),
              (e[(e.LensCenterLeftV_Float = 2023)] = "LensCenterLeftV_Float"),
              (e[(e.LensCenterRightU_Float = 2024)] = "LensCenterRightU_Float"),
              (e[(e.LensCenterRightV_Float = 2025)] = "LensCenterRightV_Float"),
              (e[(e.UserHeadToEyeDepthMeters_Float = 2026)] =
                "UserHeadToEyeDepthMeters_Float"),
              (e[(e.CameraFirmwareVersion_Uint64 = 2027)] =
                "CameraFirmwareVersion_Uint64"),
              (e[(e.CameraFirmwareDescription_String = 2028)] =
                "CameraFirmwareDescription_String"),
              (e[(e.DisplayFPGAVersion_Uint64 = 2029)] =
                "DisplayFPGAVersion_Uint64"),
              (e[(e.DisplayBootloaderVersion_Uint64 = 2030)] =
                "DisplayBootloaderVersion_Uint64"),
              (e[(e.DisplayHardwareVersion_Uint64 = 2031)] =
                "DisplayHardwareVersion_Uint64"),
              (e[(e.AudioFirmwareVersion_Uint64 = 2032)] =
                "AudioFirmwareVersion_Uint64"),
              (e[(e.CameraCompatibilityMode_Int32 = 2033)] =
                "CameraCompatibilityMode_Int32"),
              (e[(e.ScreenshotHorizontalFieldOfViewDegrees_Float = 2034)] =
                "ScreenshotHorizontalFieldOfViewDegrees_Float"),
              (e[(e.ScreenshotVerticalFieldOfViewDegrees_Float = 2035)] =
                "ScreenshotVerticalFieldOfViewDegrees_Float"),
              (e[(e.DisplaySuppressed_Bool = 2036)] = "DisplaySuppressed_Bool"),
              (e[(e.DisplayAllowNightMode_Bool = 2037)] =
                "DisplayAllowNightMode_Bool"),
              (e[(e.DisplayMCImageWidth_Int32 = 2038)] =
                "DisplayMCImageWidth_Int32"),
              (e[(e.DisplayMCImageHeight_Int32 = 2039)] =
                "DisplayMCImageHeight_Int32"),
              (e[(e.DisplayMCImageNumChannels_Int32 = 2040)] =
                "DisplayMCImageNumChannels_Int32"),
              (e[(e.DisplayMCImageData_Binary = 2041)] =
                "DisplayMCImageData_Binary"),
              (e[(e.SecondsFromPhotonsToVblank_Float = 2042)] =
                "SecondsFromPhotonsToVblank_Float"),
              (e[(e.DriverDirectModeSendsVsyncEvents_Bool = 2043)] =
                "DriverDirectModeSendsVsyncEvents_Bool"),
              (e[(e.DisplayDebugMode_Bool = 2044)] = "DisplayDebugMode_Bool"),
              (e[(e.GraphicsAdapterLuid_Uint64 = 2045)] =
                "GraphicsAdapterLuid_Uint64"),
              (e[(e.DriverProvidedChaperonePath_String = 2048)] =
                "DriverProvidedChaperonePath_String"),
              (e[(e.ExpectedTrackingReferenceCount_Int32 = 2049)] =
                "ExpectedTrackingReferenceCount_Int32"),
              (e[(e.ExpectedControllerCount_Int32 = 2050)] =
                "ExpectedControllerCount_Int32"),
              (e[(e.NamedIconPathControllerLeftDeviceOff_String = 2051)] =
                "NamedIconPathControllerLeftDeviceOff_String"),
              (e[(e.NamedIconPathControllerRightDeviceOff_String = 2052)] =
                "NamedIconPathControllerRightDeviceOff_String"),
              (e[(e.NamedIconPathTrackingReferenceDeviceOff_String = 2053)] =
                "NamedIconPathTrackingReferenceDeviceOff_String"),
              (e[(e.DoNotApplyPrediction_Bool = 2054)] =
                "DoNotApplyPrediction_Bool"),
              (e[(e.CameraToHeadTransforms_Matrix34_Array = 2055)] =
                "CameraToHeadTransforms_Matrix34_Array"),
              (e[(e.DistortionMeshResolution_Int32 = 2056)] =
                "DistortionMeshResolution_Int32"),
              (e[(e.DriverIsDrawingControllers_Bool = 2057)] =
                "DriverIsDrawingControllers_Bool"),
              (e[(e.DriverRequestsApplicationPause_Bool = 2058)] =
                "DriverRequestsApplicationPause_Bool"),
              (e[(e.DriverRequestsReducedRendering_Bool = 2059)] =
                "DriverRequestsReducedRendering_Bool"),
              (e[(e.MinimumIpdStepMeters_Float = 2060)] =
                "MinimumIpdStepMeters_Float"),
              (e[(e.AudioBridgeFirmwareVersion_Uint64 = 2061)] =
                "AudioBridgeFirmwareVersion_Uint64"),
              (e[(e.ImageBridgeFirmwareVersion_Uint64 = 2062)] =
                "ImageBridgeFirmwareVersion_Uint64"),
              (e[(e.ImuToHeadTransform_Matrix34 = 2063)] =
                "ImuToHeadTransform_Matrix34"),
              (e[(e.ImuFactoryGyroBias_Vector3 = 2064)] =
                "ImuFactoryGyroBias_Vector3"),
              (e[(e.ImuFactoryGyroScale_Vector3 = 2065)] =
                "ImuFactoryGyroScale_Vector3"),
              (e[(e.ImuFactoryAccelerometerBias_Vector3 = 2066)] =
                "ImuFactoryAccelerometerBias_Vector3"),
              (e[(e.ImuFactoryAccelerometerScale_Vector3 = 2067)] =
                "ImuFactoryAccelerometerScale_Vector3"),
              (e[(e.ConfigurationIncludesLighthouse20Features_Bool = 2069)] =
                "ConfigurationIncludesLighthouse20Features_Bool"),
              (e[(e.Prop_AdditionalRadioFeatures_Uint64 = 2070)] =
                "Prop_AdditionalRadioFeatures_Uint64"),
              (e[(e.Prop_CameraWhiteBalance_Vector4_Array = 2071)] =
                "Prop_CameraWhiteBalance_Vector4_Array"),
              (e[(e.Prop_CameraDistortionFunction_Int32_Array = 2072)] =
                "Prop_CameraDistortionFunction_Int32_Array"),
              (e[(e.Prop_CameraDistortionCoefficients_Float_Array = 2073)] =
                "Prop_CameraDistortionCoefficients_Float_Array"),
              (e[(e.Prop_ExpectedControllerType_String = 2074)] =
                "Prop_ExpectedControllerType_String"),
              (e[(e.HmdTrackingStyle_Int32 = 2075)] = "HmdTrackingStyle_Int32"),
              (e[(e.DriverProvidedChaperoneVisibility_Bool = 2076)] =
                "DriverProvidedChaperoneVisibility_Bool"),
              (e[(e.HmdColumnCorrectionSettingPrefix_String = 2077)] =
                "HmdColumnCorrectionSettingPrefix_String"),
              (e[(e.CameraSupportsCompatibilityModes_Bool = 2078)] =
                "CameraSupportsCompatibilityModes_Bool"),
              (e[(e.SupportsRoomViewDepthProjection_Bool = 2079)] =
                "SupportsRoomViewDepthProjection_Bool"),
              (e[(e.DisplayAvailableFrameRates_Float_Array = 2080)] =
                "DisplayAvailableFrameRates_Float_Array"),
              (e[(e.DisplaySupportsRuntimeFramerateChange_Bool = 2084)] =
                "DisplaySupportsRuntimeFramerateChange_Bool"),
              (e[(e.DisplaySupportsAnalogGain_Bool = 2085)] =
                "DisplaySupportsAnalogGain_Bool"),
              (e[(e.DisplayMinAnalogGain_Float = 2086)] =
                "DisplayMinAnalogGain_Float"),
              (e[(e.DisplayMaxAnalogGain_Float = 2087)] =
                "DisplayMaxAnalogGain_Float"),
              (e[(e.DashboardScale_Float = 2091)] = "DashboardScale_Float"),
              (e[(e.PeerButtonInfo_String = 2092)] = "PeerButtonInfo_String"),
              (e[(e.IpdUIRangeMinMeters_Float = 2100)] =
                "IpdUIRangeMinMeters_Float"),
              (e[(e.IpdUIRangeMaxMeters_Float = 2101)] =
                "IpdUIRangeMaxMeters_Float"),
              (e[(e.Hmd_SupportsHDCP14LegacyCompat_Bool = 2102)] =
                "Hmd_SupportsHDCP14LegacyCompat_Bool"),
              (e[(e.Hmd_SupportsMicMonitoring_Bool = 2103)] =
                "Hmd_SupportsMicMonitoring_Bool"),
              (e[(e.Hmd_SupportsDisplayPortTrainingMode_Bool = 2104)] =
                "Hmd_SupportsDisplayPortTrainingMode_Bool"),
              (e[(e.Hmd_SupportsRoomViewDirect_Bool = 2105)] =
                "Hmd_SupportsRoomViewDirect_Bool"),
              (e[(e.Hmd_SupportsAppThrottling_Bool = 2106)] =
                "Hmd_SupportsAppThrottling_Bool"),
              (e[(e.Hmd_SupportsGpuBusMonitoring_Bool = 2107)] =
                "Hmd_SupportsGpuBusMonitoring_Bool"),
              (e[(e.DriverRequestedMuraCorrectionMode_Int32 = 2200)] =
                "DriverRequestedMuraCorrectionMode_Int32"),
              (e[(e.DriverRequestedMuraFeather_InnerLeft_Int32 = 2201)] =
                "DriverRequestedMuraFeather_InnerLeft_Int32"),
              (e[(e.DriverRequestedMuraFeather_InnerRight_Int32 = 2202)] =
                "DriverRequestedMuraFeather_InnerRight_Int32"),
              (e[(e.DriverRequestedMuraFeather_InnerTop_Int32 = 2203)] =
                "DriverRequestedMuraFeather_InnerTop_Int32"),
              (e[(e.DriverRequestedMuraFeather_InnerBottom_Int32 = 2204)] =
                "DriverRequestedMuraFeather_InnerBottom_Int32"),
              (e[(e.DriverRequestedMuraFeather_OuterLeft_Int32 = 2205)] =
                "DriverRequestedMuraFeather_OuterLeft_Int32"),
              (e[(e.DriverRequestedMuraFeather_OuterRight_Int32 = 2206)] =
                "DriverRequestedMuraFeather_OuterRight_Int32"),
              (e[(e.DriverRequestedMuraFeather_OuterTop_Int32 = 2207)] =
                "DriverRequestedMuraFeather_OuterTop_Int32"),
              (e[(e.DriverRequestedMuraFeather_OuterBottom_Int32 = 2208)] =
                "DriverRequestedMuraFeather_OuterBottom_Int32"),
              (e[(e.Audio_SupportsDualSpeakerAndJackOutput_Bool = 2303)] =
                "Audio_SupportsDualSpeakerAndJackOutput_Bool"),
              (e[(e.AttachedDeviceId_String = 3e3)] =
                "AttachedDeviceId_String"),
              (e[(e.SupportedButtons_Uint64 = 3001)] =
                "SupportedButtons_Uint64"),
              (e[(e.Axis0Type_Int32 = 3002)] = "Axis0Type_Int32"),
              (e[(e.Axis1Type_Int32 = 3003)] = "Axis1Type_Int32"),
              (e[(e.Axis2Type_Int32 = 3004)] = "Axis2Type_Int32"),
              (e[(e.Axis3Type_Int32 = 3005)] = "Axis3Type_Int32"),
              (e[(e.Axis4Type_Int32 = 3006)] = "Axis4Type_Int32"),
              (e[(e.ControllerRoleHint_Int32 = 3007)] =
                "ControllerRoleHint_Int32"),
              (e[(e.FieldOfViewLeftDegrees_Float = 4e3)] =
                "FieldOfViewLeftDegrees_Float"),
              (e[(e.FieldOfViewRightDegrees_Float = 4001)] =
                "FieldOfViewRightDegrees_Float"),
              (e[(e.FieldOfViewTopDegrees_Float = 4002)] =
                "FieldOfViewTopDegrees_Float"),
              (e[(e.FieldOfViewBottomDegrees_Float = 4003)] =
                "FieldOfViewBottomDegrees_Float"),
              (e[(e.TrackingRangeMinimumMeters_Float = 4004)] =
                "TrackingRangeMinimumMeters_Float"),
              (e[(e.TrackingRangeMaximumMeters_Float = 4005)] =
                "TrackingRangeMaximumMeters_Float"),
              (e[(e.ModeLabel_String = 4006)] = "ModeLabel_String"),
              (e[(e.IconPathName_String = 5e3)] = "IconPathName_String"),
              (e[(e.NamedIconPathDeviceOff_String = 5001)] =
                "NamedIconPathDeviceOff_String"),
              (e[(e.NamedIconPathDeviceSearching_String = 5002)] =
                "NamedIconPathDeviceSearching_String"),
              (e[(e.NamedIconPathDeviceSearchingAlert_String = 5003)] =
                "NamedIconPathDeviceSearchingAlert_String"),
              (e[(e.NamedIconPathDeviceReady_String = 5004)] =
                "NamedIconPathDeviceReady_String"),
              (e[(e.NamedIconPathDeviceReadyAlert_String = 5005)] =
                "NamedIconPathDeviceReadyAlert_String"),
              (e[(e.NamedIconPathDeviceNotReady_String = 5006)] =
                "NamedIconPathDeviceNotReady_String"),
              (e[(e.NamedIconPathDeviceStandby_String = 5007)] =
                "NamedIconPathDeviceStandby_String"),
              (e[(e.NamedIconPathDeviceAlertLow_String = 5008)] =
                "NamedIconPathDeviceAlertLow_String"),
              (e[(e.DisplayHiddenArea_Binary_Start = 5100)] =
                "DisplayHiddenArea_Binary_Start"),
              (e[(e.DisplayHiddenArea_Binary_End = 5150)] =
                "DisplayHiddenArea_Binary_End"),
              (e[(e.ParentContainer = 5151)] = "ParentContainer"),
              (e[(e.UserConfigPath_String = 6e3)] = "UserConfigPath_String"),
              (e[(e.InstallPath_String = 6001)] = "InstallPath_String"),
              (e[(e.HasDisplayComponent_Bool = 6002)] =
                "HasDisplayComponent_Bool"),
              (e[(e.HasControllerComponent_Bool = 6003)] =
                "HasControllerComponent_Bool"),
              (e[(e.HasCameraComponent_Bool = 6004)] =
                "HasCameraComponent_Bool"),
              (e[(e.HasDriverDirectModeComponent_Bool = 6005)] =
                "HasDriverDirectModeComponent_Bool"),
              (e[(e.HasVirtualDisplayComponent_Bool = 6006)] =
                "HasVirtualDisplayComponent_Bool"),
              (e[(e.HasSpatialAnchorsSupport_Bool = 6007)] =
                "HasSpatialAnchorsSupport_Bool"),
              (e[(e.ControllerType_String = 7e3)] = "ControllerType_String"),
              (e[(e.LegacyInputProfile_String = 7001)] =
                "LegacyInputProfile_String"),
              (e[(e.VendorSpecific_Reserved_Start = 1e4)] =
                "VendorSpecific_Reserved_Start"),
              (e[(e.VendorSpecific_Reserved_End = 10999)] =
                "VendorSpecific_Reserved_End"),
              (e[(e.TrackedDeviceProperty_Max = 1e6)] =
                "TrackedDeviceProperty_Max");
          })(X || (X = {})),
          (function (e) {
            (e[(e.None = 0)] = "None"),
              (e[(e.ButtonEnter = 1)] = "ButtonEnter"),
              (e[(e.ButtonLeave = 2)] = "ButtonLeave"),
              (e[(e.Snap = 3)] = "Snap"),
              (e[(e.Sliding = 4)] = "Sliding"),
              (e[(e.SlidingEdge = 5)] = "SlidingEdge");
          })(J || (J = {}));
        const ee = "webui_config";
        let te;
        function re() {
          let e = (function () {
            let e = "";
            for (let n = 0; n < 24; n++)
              e += ((t = 0),
              (r = 35),
              (t = Math.ceil(t)),
              (r = Math.floor(r)),
              Math.floor(Math.random() * (r - t + 1)) + t).toString(36);
            var t, r;
            return e;
          })();
          return (
            (function (e, t, r, n) {
              if (!Z()) return;
              n || (n = "/");
              let o = "";
              if (void 0 !== r && r) {
                let e = new Date();
                e.setTime(e.getTime() + 864e5 * r),
                  (o = "; expires=" + e.toUTCString());
              }
              document.cookie =
                encodeURIComponent(e) +
                "=" +
                encodeURIComponent(t) +
                o +
                ";path=" +
                n;
            })("sessionid", e, 0),
            e
          );
        }
        function ne(e = ee) {
          const t = {},
            r = oe("config", e);
          r && (delete r.SESSIONID, Object.assign(_e, r), (t.config = !0));
          const n = oe("userinfo", e);
          n &&
            (Object.assign(se, n),
            (t.userConfig = !0),
            se.is_support &&
              (function () {
                let e = null;
                Z() && (e = Q(ae));
                return Boolean(e && 1 === Number.parseInt(e));
              })() &&
              (se.is_support = !1));
          const o = oe("broadcast", e);
          o && (Object.assign(le, o), (t.broadcastConfig = !0));
          const i = oe("community", e);
          i && (Object.assign(de, i), (t.communityConfig = !0));
          const a = oe("event", e);
          return a && (Object.assign(ce, a), (t.eventConfig = !0)), t;
        }
        function oe(e, t = ee) {
          return ie(e, t, !0);
        }
        function ie(e, t = ee, r) {
          let n;
          if (
            ((n =
              "string" == typeof t
                ? !{
                    NODE_ENV: "production",
                    STEAM_BUILD: "buildbot",
                    VALVE_BUILD: "false",
                  }.MOBILE_BUILD && document.getElementById(t)
                : t),
            n)
          )
            try {
              if (n.hasAttribute("data-" + e)) {
                return JSON.parse(n.getAttribute("data-" + e));
              }
              return null;
            } catch (e) {
              console.error("Failed to parse config", e);
            }
          else r && console.error("Missing config element #", t);
        }
        const ae = "presentation_mode";
        const _e = {
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
            return (function () {
              if (!Z()) return te || (te = re()), te;
              let e = Q("sessionid");
              return e || (e = re()), e;
            })();
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
        _e.FOO = !1;
        const se = {
            logged_in: !1,
            steamid: "",
            accountid: 0,
            account_name: "",
            token: void 0,
            token_use_id: void 0,
            webapi_token: "",
            authwgtoken: "",
            is_support: !1,
            is_limited: !1,
            is_partner_member: !1,
            short_url: "",
            country_code: "",
          },
          le = { steamid: "", clanid: 0, listid: 0 },
          de = {
            CLANSTEAMID: "",
            CLANACCOUNTID: 0,
            APPID: 0,
            VANITY_ID: "",
            IS_CREATOR_HOME: !1,
            IS_CURATOR: !1,
            IS_OGG: !1,
            CAN_UPLOAD_IMAGES: !1,
            APP_NAME: "",
            HEADER_IMAGE: "",
            HAS_ADULT_CONTENT: !1,
            HAS_ADULT_CONTENT_SEX: !1,
            HAS_ADULT_CONTENT_VIOLENCE: !1,
            IS_VALVE_GROUP: !1,
            IS_ALLOWED_SC: !1,
          },
          ce = { ANNOUNCEMENT_GID: "", TAKEOVER_ANNOUNCEMENT_GID: "" };
        a().createContext({});
        let ue = { success: !0, result: 1 };
        class pe {
          constructor() {
            (this.m_connection = new me()),
              (this.m_bAllowAccountMismatch = !1),
              (this.m_mapCacheSubscribedApp = new Map());
          }
          FailureResult(e = 2) {
            let t = { success: !1, result: e };
            return (
              this.m_connection &&
                !this.m_connection.browser_supported &&
                (t.browser_unsupported = !0),
              this.m_connection &&
                !this.m_connection.connected_to_client &&
                (t.connect_failed = !0),
              7 == e && (t.call_unsupported = !0),
              t
            );
          }
          SetAllowAccountMismatch(e) {
            this.m_bAllowAccountMismatch = e;
          }
          BClientConnected() {
            return this.m_connection.Connect().then(
              () => ue,
              () => this.FailureResult()
            );
          }
          BClientSupportsMessage(e) {
            return (
              !(
                !this.m_connection.connected_to_client ||
                !this.m_connection.ready
              ) &&
              -1 !== this.m_connection.ClientInfo.rgSupportedMessages.indexOf(e)
            );
          }
          OpenFriendChatDialog(e) {
            let t = { message: "ShowFriendChatDialog", steamid: e };
            return this.GenericEResultCall(t);
          }
          OpenChatRoomGroupDialog(e, t) {
            let r = { message: "ShowChatRoomGroupDialog", chat_group_id: e };
            return t && (r.chat_room_id = t), this.GenericEResultCall(r);
          }
          ShowChatRoomGroupInvite(e) {
            let t = { message: "ShowChatRoomGroupInvite", invite_code: e };
            return this.GenericEResultCall(t);
          }
          BIsSubscribedApp(e) {
            if (this.m_mapCacheSubscribedApp.has(e))
              return Promise.resolve(this.m_mapCacheSubscribedApp.get(e));
            let t = { message: "IsSubscribedApp", appid: e };
            return this.GenericEResultCall(t).then((t) => {
              if (t.connect_failed) return;
              let r = 1 == t.result;
              return this.m_mapCacheSubscribedApp.set(e, r), r;
            });
          }
          OpenFriendsDialog() {
            return this.GenericEResultCall({ message: "OpenFriendsDialog" });
          }
          BClientAccountMatches() {
            return (
              !se.logged_in ||
              se.accountid == this.m_connection.ClientInfo.unAccountID
            );
          }
          GenericEResultCall(e) {
            return this.m_connection
              .Connect()
              .then(() =>
                this.m_bAllowAccountMismatch || this.BClientAccountMatches()
                  ? this.m_connection
                      .SendMsgAndAwaitResponse(e)
                      .then((e) =>
                        1 === e.success ? ue : this.FailureResult(e.success)
                      )
                  : { success: !1, result: 19, account_mismatch: !0 }
              )
              .catch(() => this.FailureResult());
          }
        }
        class me {
          constructor() {
            (this.m_mapWaitingCallbacks = new Map()),
              (this.m_iCallSeq = 1),
              (this.m_bReady = !1),
              (this.m_bClientConnectionFailed = !1),
              (this.m_bSecurityException = !1),
              (this.m_ClientInfo = {
                ulVersion: "",
                bFriendsUIEnabled: !1,
                unAccountID: 0,
                rgSupportedMessages: [],
              });
          }
          get ClientInfo() {
            return this.m_ClientInfo;
          }
          get ready() {
            return this.m_bReady;
          }
          get browser_supported() {
            return !this.m_bSecurityException;
          }
          get connected_to_client() {
            return this.m_socket && this.m_socket.readyState == WebSocket.OPEN;
          }
          SendMsgAndAwaitResponse(e) {
            return new Promise((t, r) => {
              let n = this.m_iCallSeq++;
              this.BSendMsg(e, n)
                ? this.m_mapWaitingCallbacks.set(n, {
                    iSeq: n,
                    fnCallback: t,
                    fnError: r,
                  })
                : r();
            });
          }
          BSendMsg(e, t) {
            if (!this.m_socket || this.m_socket.readyState != WebSocket.OPEN)
              return !1;
            let r = Object.assign({}, e, {
              universe: _e.EUNIVERSE,
              accountid: se.accountid,
            });
            void 0 !== t && (r.sequenceid = t);
            try {
              return this.m_socket.send(JSON.stringify(r)), !0;
            } catch (e) {
              return !1;
            }
          }
          OnSocketMessage(e) {
            try {
              let t = JSON.parse(e.data);
              if (t.sequenceid) {
                let e = this.m_mapWaitingCallbacks.get(t.sequenceid);
                if (e)
                  return (
                    this.m_mapWaitingCallbacks.delete(t.sequenceid),
                    void e.fnCallback(t)
                  );
              }
            } catch (e) {
              console.error("exception parsing response", e);
            }
          }
          Connect() {
            if (this.m_bReady && this.m_socket.readyState == WebSocket.OPEN)
              return Promise.resolve();
            if (this.m_promiseConnect) return this.m_promiseConnect;
            let e = new Promise((e, t) => {
              try {
                this.m_socket = new WebSocket(
                  "ws://127.0.0.1:27060/clientsocket/"
                );
              } catch (e) {
                return (this.m_bSecurityException = !0), void t(e);
              }
              (this.m_socket.onerror = (e) => {
                t();
              }),
                (this.m_socket.onmessage = this.OnSocketMessage.bind(this)),
                (this.m_socket.onopen = () => {
                  this.SendMsgAndAwaitResponse({ message: "GetClientInfo" })
                    .then((r) => {
                      1 == r.success
                        ? ((this.m_ClientInfo.ulVersion = r.clientversion),
                          (this.m_ClientInfo.bFriendsUIEnabled = !!r.friendsui),
                          (this.m_ClientInfo.unAccountID = r.accountid),
                          r.supported_messages &&
                            (this.m_ClientInfo.rgSupportedMessages =
                              r.supported_messages),
                          e())
                        : t();
                    })
                    .catch(t);
                });
            });
            return (
              (this.m_promiseConnect = e),
              this.m_promiseConnect
                .then(() => {
                  (this.m_bReady = !0), (this.m_promiseConnect = void 0);
                })
                .catch(() => {
                  (this.m_bClientConnectionFailed = !0),
                    (this.m_promiseConnect = void 0);
                }),
              this.m_promiseConnect
            );
          }
        }
        let Ie = new pe();
        window.ClientConnectionAPI = Ie;
        r(9669);
        function Ce(e, t) {
          return (function (e, t) {
            let r = e.findIndex(t);
            return r >= 0 && (e.splice(r, 1), !0);
          })(e, (e) => t == e);
        }
        function Ee(e, t, r) {
          return {
            get() {
              let e = r.value.bind(this);
              return (
                this.hasOwnProperty(t) ||
                  Object.defineProperty(this, t, { value: e }),
                e
              );
            },
          };
        }
        class he {
          constructor() {
            this.m_vecCallbacks = [];
          }
          Register(e) {
            this.m_vecCallbacks.push(e);
            return {
              Unregister: () => {
                Ce(this.m_vecCallbacks, e);
              },
            };
          }
          Dispatch(...e) {
            for (const t of Array.from(this.m_vecCallbacks)) t(...e);
          }
          ClearAllCallbacks() {
            this.m_vecCallbacks = [];
          }
          CountRegistered() {
            return this.m_vecCallbacks.length;
          }
        }
        n(
          [Ee],
          class {
            Schedule(e, t) {
              this.IsScheduled() && this.Cancel(),
                (this.m_fnCallback = t),
                (this.m_schTimer = window.setTimeout(
                  this.ScheduledInternal,
                  e
                ));
            }
            IsScheduled() {
              return void 0 !== this.m_schTimer;
            }
            Cancel() {
              this.m_schTimer &&
                (clearTimeout(this.m_schTimer), (this.m_schTimer = void 0));
            }
            ScheduledInternal() {
              this.m_schTimer = void 0;
              let e = this.m_fnCallback;
              (this.m_fnCallback = void 0), e();
            }
          }.prototype,
          "ScheduledInternal",
          null
        );
        n(
          [Ee],
          class {
            constructor() {
              this.m_vecCallbacks = [];
            }
            Push(e) {
              this.m_vecCallbacks.push(e);
            }
            PushArrayRemove(e, t) {
              this.m_vecCallbacks.push(() => Ce(e, t));
            }
            Unregister() {
              for (let e of this.m_vecCallbacks) e();
              this.m_vecCallbacks = [];
            }
            GetUnregisterFunc() {
              return this.Unregister;
            }
          }.prototype,
          "Unregister",
          null
        );
        var Re;
        !(function (e) {
          (e[(e.None = 0)] = "None"),
            (e[(e.Ago = 1)] = "Ago"),
            (e[(e.Remaining = 2)] = "Remaining");
        })(Re || (Re = {}));
        new Map();
        new Map(), new Map();
        new Map(), new Map(), new Map(), new Map(), new Map(), new Map();
        class Se {
          constructor() {
            (this.m_mapTokens = new Map()),
              (this.m_mapFallbackTokens = new Map()),
              (this.m_cbkTokensChanged = new he());
          }
          static InstallErrorReportingStore(e) {
            this.sm_ErrorReportingStore = e;
          }
          static GetLanguageFallback(e) {
            return "sc_schinese" === e ? "schinese" : "english";
          }
          static GetELanguageFallback(e) {
            return 29 === e ? 6 : 0;
          }
          static IsELanguageValidInRealm(e, t) {
            return (
              t === (29 === e ? V.k_ESteamRealmChina : V.k_ESteamRealmGlobal)
            );
          }
          static GetLanguageListForRealms(e) {
            const t = new Array();
            for (let r = 0; r < 30; r++)
              for (const n of e)
                if (this.IsELanguageValidInRealm(r, n)) {
                  t.push(r);
                  break;
                }
            return t;
          }
          InitFromObjects(e, t, r, n, o) {
            o || this.m_mapTokens.clear();
            const i = Object.assign(Object.assign({}, r || {}), e),
              a = Object.assign(Object.assign({}, n || {}), t || {});
            this.AddTokens(i, a), this.m_cbkTokensChanged.Dispatch();
          }
          InitDirect(e, t) {
            this.m_mapTokens.clear(),
              this.m_mapFallbackTokens.clear(),
              this.AddTokens(e, t),
              this.m_cbkTokensChanged.Dispatch();
          }
          AddTokens(e, t) {
            Object.keys(e).forEach((t) => {
              this.m_mapTokens.set(t, e[t]);
            }),
              t &&
                Object.keys(t).forEach((e) => {
                  this.m_mapTokens.has(e) || this.m_mapTokens.set(e, t[e]),
                    this.m_mapFallbackTokens.set(e, t[e]);
                });
          }
          GetTokensChangedCallbackList() {
            return this.m_cbkTokensChanged;
          }
          GetPreferredLocales() {
            return this.m_rgLocalesToUse
              ? this.m_rgLocalesToUse
              : navigator && navigator.languages
              ? navigator.languages
              : ["en-US"];
          }
          GetELanguageFallbackOrder(e = null) {
            let t = new Array();
            if (
              (t.push(l(_e.LANGUAGE)),
              (_e.SUPPORTED_LANGUAGES || []).forEach((e) => {
                e.value != _e.LANGUAGE && t.push(l(e.value));
              }),
              e)
            ) {
              Se.GetLanguageListForRealms(e).forEach((e) => {
                -1 == t.indexOf(e) && t.push(e);
              });
            }
            return t;
          }
          SetPreferredLocales(e) {
            this.m_rgLocalesToUse = e;
          }
          BLooksLikeToken(e) {
            return e && e.length > 0 && "#" == e.charAt(0);
          }
          LocalizeIfToken(e, t) {
            return this.BLooksLikeToken(e) ? this.LocalizeString(e, t) : e;
          }
          LocalizeString(e, t) {
            if (!this.BLooksLikeToken(e)) return;
            let r = this.m_mapTokens.get(e.substring(1));
            if (void 0 !== r) return r;
            !t &&
              Se.sm_ErrorReportingStore &&
              Se.sm_ErrorReportingStore.ReportError(
                new Error(
                  `Unable to find localization token '${e}' for language '${_e.LANGUAGE}', ${this.m_mapTokens.size} tokens in map`
                ),
                { bIncludeMessageInIdentifier: !0 }
              );
          }
          LocalizeStringFromFallback(e) {
            if (!e || 0 == e.length || "#" != e.charAt(0)) return;
            let t = this.m_mapFallbackTokens.get(e.substring(1));
            return void 0 !== t ? t : void 0;
          }
        }
        function ge(e, ...t) {
          let r = ye.LocalizeString(e);
          return void 0 === r ? e : fe(r, ...t);
        }
        function De(e, ...t) {
          let r = ye.LocalizeString(e);
          if (void 0 === r) return e;
          let n,
            o = [],
            a = /(.*?)%(\d+)\$s/g,
            _ = 0;
          for (; (n = a.exec(r)); ) {
            (_ += n[0].length), o.push(n[1]);
            let e = parseInt(n[2]);
            e >= 1 && e <= t.length && o.push(t[e - 1]);
          }
          return o.push(r.substr(_)), i.createElement(i.Fragment, null, ...o);
        }
        function fe(e, ...t) {
          return 0 == t.length
            ? e
            : (e = e.replace(/%(?:(\d+)\$)?s/g, function (e, r) {
                if (r <= t.length && r >= 1) {
                  let e = t[r - 1];
                  return String(null == e ? "" : e);
                }
                return e;
              }));
        }
        const ye = new Se();
        function Te(e, t, ...r) {
          console.assert
            ? 0 == r.length
              ? console.assert(!!e, t)
              : console.assert(!!e, t, ...r)
            : e || console.warn(t, ...r);
        }
        window.LocalizationManager = ye;
        var Ae = r(22188),
          ve = r(29323);
        class Ve {
          constructor(e) {
            (this.m_bReady = !1),
              (this.m_bValid = !1),
              (this.m_strInviteCode = e);
          }
          BIsReady() {
            return this.m_bReady;
          }
          BIsValid() {
            return this.m_bValid;
          }
          BIsInviteLink() {
            return !!this.m_strInviteCode;
          }
          GetInviteCode() {
            return this.m_strInviteCode;
          }
          BNeverExpires() {
            return this.m_rtTimeExpires == s;
          }
          GetChatRoomGroupID() {
            return this.m_ulChatRoomGroupID;
          }
          BIsVoiceChatInvite() {
            return !!this.m_ulChatID;
          }
          GetChatID() {
            return this.m_ulChatID;
          }
          GetURL() {
            return this.m_strInviteCode
              ? ((e = this.m_strInviteCode),
                "public" == _e.WEB_UNIVERSE
                  ? `https://s.team/chat/${e}`
                  : `${_e.COMMUNITY_BASE_URL}chat/invite/${e}`)
              : null;
            var e;
          }
          BIsUserBanned() {
            return this.m_bIsBanned;
          }
          GetTimeKickExpires() {
            return this.m_rtKickExpires;
          }
          get time_expires() {
            return this.m_rtTimeExpires;
          }
          InitInvalid() {
            (this.m_bValid = !1), (this.m_bReady = !0);
          }
          InitDirectInvite(e, t, r = !1, n = undefined) {
            (this.m_ulChatRoomGroupID = e),
              (this.m_ulChatID = t),
              (this.m_bIsBanned = r),
              (this.m_rtKickExpires = n),
              (this.m_rtTimeExpires = s),
              (this.m_bValid = !0),
              (this.m_bReady = !0);
          }
        }
        n([Ae.LO], Ve.prototype, "m_bReady", void 0),
          n([Ae.aD], Ve.prototype, "InitInvalid", null),
          n([Ae.aD], Ve.prototype, "InitDirectInvite", null);
        var Fe = r(43720),
          ke = r.n(Fe);
        class Pe {
          constructor(e = 0, t, r, n) {
            e instanceof Pe
              ? (this.m_ulSteamID = e.m_ulSteamID)
              : "string" == typeof e
              ? (this.m_ulSteamID = ke().fromString(e, !0))
              : t && r && void 0 !== n
              ? this.SetFromComponents(e, n, r, t)
              : (this.m_ulSteamID = e ? ke().fromNumber(e, !0) : ke().UZERO);
          }
          static InitFromAccountID(e) {
            return new Pe(Number(e), _e.EUNIVERSE, 1, 1);
          }
          static InitFromClanID(e) {
            return new Pe(Number(e), _e.EUNIVERSE, 7, 0);
          }
          GetAccountID() {
            return this.m_ulSteamID.getLowBitsUnsigned();
          }
          GetInstance() {
            return 1048575 & this.m_ulSteamID.getHighBitsUnsigned();
          }
          GetAccountType() {
            return (this.m_ulSteamID.getHighBitsUnsigned() >> 20) & 15;
          }
          GetUniverse() {
            return (this.m_ulSteamID.getHighBitsUnsigned() >> 24) & 255;
          }
          ConvertTo64BitString() {
            return this.m_ulSteamID.toString();
          }
          Render() {
            switch (this.GetAccountType()) {
              case 0:
                return (
                  "[I:" + this.GetUniverse() + ":" + this.GetAccountID() + "]"
                );
              case 7:
                return (
                  "[g:" + this.GetUniverse() + ":" + this.GetAccountID() + "]"
                );
              case 4:
                return (
                  "[A:" +
                  this.GetUniverse() +
                  ":" +
                  this.GetAccountID() +
                  ":" +
                  this.GetInstance() +
                  "]"
                );
              case 3:
                return (
                  "[G:" + this.GetUniverse() + ":" + this.GetAccountID() + "]"
                );
              case 2:
                return (
                  "[M:" +
                  this.GetUniverse() +
                  ":" +
                  this.GetAccountID() +
                  ":" +
                  this.GetInstance() +
                  "]"
                );
              case 5:
                return (
                  "[P:" + this.GetUniverse() + ":" + this.GetAccountID() + "]"
                );
              case 6:
                return (
                  "[C:" + this.GetUniverse() + ":" + this.GetAccountID() + "]"
                );
              default:
                return (
                  "[U:" + this.GetUniverse() + ":" + this.GetAccountID() + "]"
                );
            }
          }
          static InitFromString(e) {
            let t = new Pe();
            try {
              let [r, n, o, i, a] =
                  e.match(/\[([I|g|A|G|M|P|C|U]):(\d+):(\d+):?(\d+)?\]/) || [],
                _ = Number(o),
                s = Number(i),
                l = a ? Number(a) : 1;
              switch (n) {
                case "I":
                  t.SetFromComponents(s, l, 0, _);
                case "g":
                  t.SetFromComponents(s, 0, 7, _);
                case "A":
                  t.SetFromComponents(s, l, 4, _);
                case "G":
                  t.SetFromComponents(s, l, 3, _);
                case "M":
                  t.SetFromComponents(s, l, 2, _);
                case "P":
                  t.SetFromComponents(s, l, 5, _);
                case "C":
                  t.SetFromComponents(s, l, 6, _);
                case "U":
                  t.SetFromComponents(s, l, 1, _);
              }
            } catch (e) {}
            return t;
          }
          BIsValid() {
            let e = this.GetAccountType();
            if (e <= 0 || e >= 11) return !1;
            let t = this.GetUniverse();
            if (t <= 0 || t >= 5) return !1;
            if (1 == e) {
              if (0 == this.GetAccountID() || this.GetInstance() > 4) return !1;
            } else if (7 == e) {
              if (0 == this.GetAccountID() || 0 != this.GetInstance())
                return !1;
            } else if (3 == e && 0 == this.GetAccountID()) return !1;
            return !0;
          }
          BIsIndividualAccount() {
            return 1 == this.GetAccountType();
          }
          BIsClanAccount() {
            return 7 == this.GetAccountType();
          }
          SetAccountID(e) {
            this.m_ulSteamID = new (ke())(
              e,
              this.m_ulSteamID.getHighBitsUnsigned(),
              !0
            );
          }
          SetInstance(e) {
            this.SetFromComponents(
              this.GetAccountID(),
              e,
              this.GetAccountType(),
              this.GetUniverse()
            );
          }
          SetAccountType(e) {
            this.SetFromComponents(
              this.GetAccountID(),
              this.GetInstance(),
              e,
              this.GetUniverse()
            );
          }
          SetUniverse(e) {
            this.SetFromComponents(
              this.GetAccountID(),
              this.GetInstance(),
              this.GetAccountType(),
              e
            );
          }
          SetFromComponents(e, t, r, n) {
            let o = ((255 & n) << 24) + ((15 & r) << 20) + (1048575 & t),
              i = 4294967295 & e;
            this.m_ulSteamID = new (ke())(i, o, !0);
          }
        }
        var Me = r(42238);
        class Be extends Ve {
          BIsExpired() {
            return Ne.sm_rtTimeCur >= this.m_rtTimeExpires;
          }
          InitFromPHPInviteLinkInfo(e) {
            this.m_ulChatID = e.chat_id;
            let t = new Pe(e.steamid_sender);
            t.BIsIndividualAccount() &&
              (this.m_unAccountIDInviter = t.GetAccountID()),
              (this.m_rtTimeExpires = e.time_expires),
              (this.m_bIsBanned = e.banned),
              (this.m_rtKickExpires = e.time_kick_expire),
              e.group_summary &&
                (this.m_ulChatRoomGroupID = e.group_summary.chat_group_id),
              (this.m_bValid = !0),
              (this.m_bReady = !0);
          }
        }
        n([Ae.aD], Be.prototype, "InitFromPHPInviteLinkInfo", null);
        class Ne {
          constructor(e) {
            (this.m_bConnectingToClient = !1),
              (this.m_invite = new Be(e.strInviteCode)),
              e.Invite
                ? this.m_invite.InitFromPHPInviteLinkInfo(e.Invite)
                : this.m_invite.InitInvalid(),
              (this.m_htmlPreRendered = e.render),
              this.SendInviteToClient();
          }
          BIsInviteValid() {
            return this.m_invite.BIsValid() && !this.m_invite.BIsExpired();
          }
          GetInvite() {
            return this.m_invite;
          }
          BIsConnectingToClient() {
            return this.m_bConnectingToClient;
          }
          GetConnectResults() {
            return this.m_connectResult;
          }
          GetPreRenderedHTML() {
            return this.m_htmlPreRendered;
          }
          LaunchWebChat() {
            !(function (e) {
              let t = window.open("", "SteamWebChat", "");
              if (!t) return;
              let r = !1,
                n = !1;
              try {
                r = "about:blank" == t.location.href;
              } catch (e) {
                n = !0;
              }
              if (r) {
                if (e) {
                  let r = function (n) {
                    let o = _e.COMMUNITY_BASE_URL.replace(
                      /(https?:\/\/[^/]*).*$/,
                      "$1"
                    );
                    n.source == t &&
                      "FriendsUIReady" == n.data &&
                      n.origin == o &&
                      (t.postMessage(e, _e.COMMUNITY_BASE_URL),
                      window.removeEventListener("message", r));
                  };
                  window.addEventListener("message", r);
                }
                t.location.href = _e.COMMUNITY_BASE_URL + "chat/";
              } else e && t.postMessage(e, _e.COMMUNITY_BASE_URL);
              t.focus();
            })({
              command: "ShowChatRoomGroupInvite",
              invite_code: this.m_invite.GetInviteCode(),
            });
          }
          LaunchSteamIgnoreAccount() {
            Ie.SetAllowAccountMismatch(!0), this.SendInviteToClient();
          }
          ForceLaunchSteamClient() {
            window.location.href = `steam://friends/ShowChatRoomGroupInvite/${this.m_invite.GetInviteCode()}`;
          }
          SendInviteToClient() {
            this.m_invite.BIsValid() &&
              !this.m_invite.BIsExpired() &&
              ((this.m_bConnectingToClient = !0),
              Ie.ShowChatRoomGroupInvite(this.m_invite.GetInviteCode()).then(
                (e) => {
                  (0, Ae.z)(() => {
                    (this.m_bConnectingToClient = !1),
                      (this.m_connectResult = e),
                      console.log(e);
                  });
                }
              ));
          }
        }
        n([Ae.LO], Ne.prototype, "m_bConnectingToClient", void 0),
          n([Ae.LO], Ne.prototype, "m_connectResult", void 0);
        let Le = class extends i.Component {
          render() {
            return i.createElement(
              "div",
              { className: "InviteLandingRoot" },
              this.props.controller.BIsInviteValid()
                ? i.createElement(Ue, { controller: this.props.controller })
                : i.createElement(be, { controller: this.props.controller })
            );
          }
        };
        Le = n([ve.Pi], Le);
        let Ue = class extends i.Component {
          constructor() {
            super(...arguments), (this.m_bTriedToLaunchSteam = !1);
          }
          LaunchWebChat() {
            this.props.controller.LaunchWebChat();
          }
          OpenInSteamIgnoreAccount() {
            this.props.controller.LaunchSteamIgnoreAccount();
          }
          LaunchSteamClient() {
            this.props.controller.ForceLaunchSteamClient(),
              window.setTimeout(() => {
                this.m_bTriedToLaunchSteam = !0;
              }, 1e3);
          }
          IsMobileDevice() {
            switch (new Me.UAParser(navigator.userAgent).getResult().os.name) {
              case "iOS":
              case "Android":
              case "BlackBerry":
                return !0;
            }
            return !1;
          }
          render() {
            if (this.props.controller.BIsConnectingToClient())
              return i.createElement(
                "div",
                { className: "ChatMessageInvite RequestingInfo NoColumns" },
                i.createElement(
                  "div",
                  { className: "postedExpiredInvite" },
                  ge("#bbcode_invite_requesting_info")
                )
              );
            let e = this.props.controller.GetConnectResults(),
              t = this.props.controller.GetInvite(),
              r = (_e.COMMUNITY_BASE_URL, this.IsMobileDevice()),
              n = "inviteButton inviteButtonJoinChat";
            return (
              t.BIsVoiceChatInvite() && (n += " inviteButtonJoinVoice"),
              e.success
                ? i.createElement(
                    "div",
                    { className: "ChatMessageInvite NoColumns" },
                    i.createElement(
                      "div",
                      { className: "groupName" },
                      ge("#InviteLanding_SentToSteam")
                    ),
                    i.createElement(
                      "div",
                      { className: "inviteLabel" },
                      De(
                        "#InviteLanding_SentToSteam_Desc",
                        i.createElement(
                          "a",
                          {
                            href: "javascript:void(0);",
                            onClick: this.LaunchWebChat,
                          },
                          ge("#InviteLanding_SentToSteam_Desc_LaunchWebChat")
                        )
                      )
                    )
                  )
                : e.account_mismatch
                ? i.createElement(
                    Oe,
                    { render: this.props.controller.GetPreRenderedHTML() },
                    i.createElement(
                      "div",
                      { className: "inviteLabel" },
                      ge("#InviteLanding_AccountMismatch")
                    ),
                    i.createElement(
                      "div",
                      { className: "inviteLabel" },
                      i.createElement(
                        "button",
                        {
                          className: n,
                          type: "button",
                          onClick: this.OpenInSteamIgnoreAccount,
                        },
                        ge("#InviteLanding_OpenInSteam")
                      ),
                      i.createElement(
                        "button",
                        {
                          className: n,
                          type: "button",
                          onClick: this.LaunchWebChat,
                        },
                        ge("#InviteLanding_OpenInWebChat")
                      )
                    )
                  )
                : e.call_unsupported
                ? i.createElement(
                    "div",
                    { className: "ChatMessageInvite" },
                    i.createElement(
                      "div",
                      { className: "groupName" },
                      ge("#InviteLanding_SentToSteam")
                    ),
                    i.createElement(
                      "div",
                      { className: "inviteLabel" },
                      De(
                        "#InviteLanding_SentToSteam_Desc",
                        i.createElement(
                          "a",
                          {
                            href: "javascript:void(0);",
                            onClick: this.LaunchWebChat,
                          },
                          ge("#InviteLanding_SentToSteam_Desc_LaunchWebChat")
                        )
                      )
                    )
                  )
                : i.createElement(
                    Oe,
                    { render: this.props.controller.GetPreRenderedHTML() },
                    i.createElement(
                      "div",
                      { className: "inviteLabel inviteLabelButtons" },
                      !r &&
                        i.createElement(
                          "button",
                          {
                            className: n,
                            type: "button",
                            onClick: this.LaunchSteamClient,
                          },
                          ge("#InviteLanding_OpenInSteam")
                        ),
                      i.createElement(
                        "button",
                        {
                          className: n,
                          type: "button",
                          onClick: this.LaunchWebChat,
                        },
                        ge("#InviteLanding_OpenInWebChat")
                      )
                    ),
                    this.m_bTriedToLaunchSteam &&
                      i.createElement(
                        "div",
                        { className: "inviteLabel inviteLabelLaunchPrompt" },
                        ge("#InviteLanding_OpenInSteam_Help")
                      )
                  )
            );
          }
        };
        n([Ae.LO], Ue.prototype, "m_bTriedToLaunchSteam", void 0),
          n([Ee], Ue.prototype, "LaunchWebChat", null),
          n([Ee], Ue.prototype, "OpenInSteamIgnoreAccount", null),
          n([Ee], Ue.prototype, "LaunchSteamClient", null),
          (Ue = n([ve.Pi], Ue));
        class be extends i.Component {
          render() {
            return i.createElement(
              "div",
              { className: "ChatMessageInvite" },
              i.createElement(
                "div",
                { className: "postedExpiredInvite" },
                ge("#InviteLanding_ExpiredOrInvalid")
              )
            );
          }
        }
        function Oe(e) {
          return i.createElement(
            "div",
            { className: "ChatMessageInvite" },
            i.createElement("div", {
              className: "leftInviteContainer",
              dangerouslySetInnerHTML: { __html: e.render.strAvatarHTML },
            }),
            i.createElement(
              "div",
              { className: "rightInviteContainer" },
              i.createElement(
                "div",
                { className: "inviteLabel" },
                De(
                  "#bbcode_invite_description",
                  i.createElement("span", {
                    dangerouslySetInnerHTML: {
                      __html: e.render.strInviterNameLinkHTML,
                    },
                  })
                )
              ),
              i.createElement(
                "div",
                { className: "groupName" },
                e.render.strChatRoomGroupName
              ),
              e.children
            )
          );
        }
        window.AssertMsg = Te;
        let Ge = new pe();
        function we(e) {
          let t;
          try {
            t = JSON.parse(e.getAttribute("data-inviteinfo"));
          } catch (e) {}
          Ne.sm_rtTimeCur = t.rtTimeCur;
          let r = new Ne(t);
          _.render(i.createElement(Le, { controller: r }), e);
        }
        (window.ClientConnectionAPI = Ge),
          document.addEventListener("DOMContentLoaded", function () {
            return o(this, void 0, void 0, function* () {
              ne(),
                yield (function (e) {
                  return o(this, void 0, void 0, function* () {
                    const t = Se.GetLanguageFallback(e),
                      n = e === t,
                      [o, i, a, _] = yield Promise.all([
                        r(41171)(`./shared_${e}.json`),
                        r(3119)(`./friendsui_${e}.json`),
                        n ? {} : r(91090)(`./shared_${t}.json`),
                        n ? {} : r(9014)(`./friendsui_${t}.json`),
                      ]);
                    ye.AddTokens(
                      Object.assign(Object.assign({}, o), i),
                      Object.assign(Object.assign({}, a), _)
                    );
                  });
                })(_e.LANGUAGE),
                (function () {
                  let e = document.querySelectorAll(".ChatReactRoot");
                  for (let t = 0; t < e.length; t++) {
                    let r = e[t],
                      n = r.getAttribute("data-component");
                    "ChatInvite" === n
                      ? we(r)
                      : Te(!1, `unknown component: "${n}"`);
                  }
                })();
            });
          });
      },
      22740: (e, t, r) => {
        "use strict";
        "VALVE_PUBLIC_PATH" in window
          ? (r.p = window.VALVE_PUBLIC_PATH)
          : console.error(
              "VALVE_PUBLIC_PATH not defined; check for a call to CHTMLHelpers::WebpackConfigScriptlet"
            ),
          console.assert(
            123 === Array.from(new Set([123]))[0],
            "Should not include prototypejs."
          );
      },
      3119: (e, t, r) => {
        var n = {
          "./friendsui_arabic.json": [58480, 6992],
          "./friendsui_brazilian.json": [33109, 2862],
          "./friendsui_bulgarian.json": [5242, 8518],
          "./friendsui_czech.json": [98399, 4448],
          "./friendsui_danish.json": [34581, 9775],
          "./friendsui_dutch.json": [27904, 7575],
          "./friendsui_english.json": [67927, 8247],
          "./friendsui_finnish.json": [63907, 4596],
          "./friendsui_french.json": [49877, 3500],
          "./friendsui_german.json": [90262, 4989],
          "./friendsui_greek.json": [84583, 1471],
          "./friendsui_hungarian.json": [85581, 5802],
          "./friendsui_italian.json": [31577, 8815],
          "./friendsui_japanese.json": [86521, 6727],
          "./friendsui_koreana.json": [73827, 6986],
          "./friendsui_latam.json": [13236, 7651],
          "./friendsui_norwegian.json": [19181, 4716],
          "./friendsui_polish.json": [3751, 699],
          "./friendsui_portuguese.json": [21520, 4264],
          "./friendsui_romanian.json": [98235, 3182],
          "./friendsui_russian.json": [99942, 2913],
          "./friendsui_sc_schinese.json": [64522, 3140],
          "./friendsui_schinese.json": [19456, 7706],
          "./friendsui_spanish.json": [12011, 3471],
          "./friendsui_swedish.json": [66100, 9818],
          "./friendsui_tchinese.json": [74628, 7340],
          "./friendsui_thai.json": [88902, 9263],
          "./friendsui_turkish.json": [95797, 5632],
          "./friendsui_ukrainian.json": [83292, 2822],
          "./friendsui_vietnamese.json": [39248, 1635],
        };
        function o(e) {
          if (!r.o(n, e))
            return Promise.resolve().then(() => {
              var t = new Error("Cannot find module '" + e + "'");
              throw ((t.code = "MODULE_NOT_FOUND"), t);
            });
          var t = n[e],
            o = t[0];
          return r.e(t[1]).then(() => r.t(o, 19));
        }
        (o.keys = () => Object.keys(n)), (o.id = 3119), (e.exports = o);
      },
      9014: (e, t, r) => {
        var n = {
          "./friendsui_arabic.json": [58480, 6992],
          "./friendsui_brazilian.json": [33109, 2862],
          "./friendsui_bulgarian.json": [5242, 8518],
          "./friendsui_czech.json": [98399, 4448],
          "./friendsui_danish.json": [34581, 9775],
          "./friendsui_dutch.json": [27904, 7575],
          "./friendsui_english.json": [67927, 8247],
          "./friendsui_finnish.json": [63907, 4596],
          "./friendsui_french.json": [49877, 3500],
          "./friendsui_german.json": [90262, 4989],
          "./friendsui_greek.json": [84583, 1471],
          "./friendsui_hungarian.json": [85581, 5802],
          "./friendsui_italian.json": [31577, 8815],
          "./friendsui_japanese.json": [86521, 6727],
          "./friendsui_koreana.json": [73827, 6986],
          "./friendsui_latam.json": [13236, 7651],
          "./friendsui_norwegian.json": [19181, 4716],
          "./friendsui_polish.json": [3751, 699],
          "./friendsui_portuguese.json": [21520, 4264],
          "./friendsui_romanian.json": [98235, 3182],
          "./friendsui_russian.json": [99942, 2913],
          "./friendsui_sc_schinese.json": [64522, 3140],
          "./friendsui_schinese.json": [19456, 7706],
          "./friendsui_spanish.json": [12011, 3471],
          "./friendsui_swedish.json": [66100, 9818],
          "./friendsui_tchinese.json": [74628, 7340],
          "./friendsui_thai.json": [88902, 9263],
          "./friendsui_turkish.json": [95797, 5632],
          "./friendsui_ukrainian.json": [83292, 2822],
          "./friendsui_vietnamese.json": [39248, 1635],
        };
        function o(e) {
          if (!r.o(n, e))
            return Promise.resolve().then(() => {
              var t = new Error("Cannot find module '" + e + "'");
              throw ((t.code = "MODULE_NOT_FOUND"), t);
            });
          var t = n[e],
            o = t[0];
          return r.e(t[1]).then(() => r.t(o, 19));
        }
        (o.keys = () => Object.keys(n)), (o.id = 9014), (e.exports = o);
      },
      41171: (e, t, r) => {
        var n = {
          "./shared_arabic.json": [91967, 2431],
          "./shared_brazilian.json": [34050, 8385],
          "./shared_bulgarian.json": [81457, 1313],
          "./shared_czech.json": [96162, 4189],
          "./shared_danish.json": [69668, 9753],
          "./shared_dutch.json": [98554, 5925],
          "./shared_english.json": [84075, 7975],
          "./shared_finnish.json": [49134, 3557],
          "./shared_french.json": [79224, 3112],
          "./shared_german.json": [20057, 6007],
          "./shared_greek.json": [86417, 4297],
          "./shared_hungarian.json": [19248, 5948],
          "./shared_italian.json": [77819, 5933],
          "./shared_japanese.json": [48536, 2844],
          "./shared_koreana.json": [72400, 6542],
          "./shared_latam.json": [29185, 2443],
          "./shared_norwegian.json": [36134, 4108],
          "./shared_polish.json": [87151, 3252],
          "./shared_portuguese.json": [3630, 5849],
          "./shared_romanian.json": [51363, 4823],
          "./shared_russian.json": [60859, 9062],
          "./shared_sc_schinese.json": [6055, 2029],
          "./shared_schinese.json": [88004, 2537],
          "./shared_spanish.json": [35090, 6492],
          "./shared_swedish.json": [84447, 5625],
          "./shared_tchinese.json": [92869, 7602],
          "./shared_thai.json": [34720, 1162],
          "./shared_turkish.json": [3347, 5438],
          "./shared_ukrainian.json": [46150, 7781],
          "./shared_vietnamese.json": [12315, 4964],
        };
        function o(e) {
          if (!r.o(n, e))
            return Promise.resolve().then(() => {
              var t = new Error("Cannot find module '" + e + "'");
              throw ((t.code = "MODULE_NOT_FOUND"), t);
            });
          var t = n[e],
            o = t[0];
          return r.e(t[1]).then(() => r.t(o, 19));
        }
        (o.keys = () => Object.keys(n)), (o.id = 41171), (e.exports = o);
      },
      91090: (e, t, r) => {
        var n = {
          "./shared_arabic.json": [91967, 2431],
          "./shared_brazilian.json": [34050, 8385],
          "./shared_bulgarian.json": [81457, 1313],
          "./shared_czech.json": [96162, 4189],
          "./shared_danish.json": [69668, 9753],
          "./shared_dutch.json": [98554, 5925],
          "./shared_english.json": [84075, 7975],
          "./shared_finnish.json": [49134, 3557],
          "./shared_french.json": [79224, 3112],
          "./shared_german.json": [20057, 6007],
          "./shared_greek.json": [86417, 4297],
          "./shared_hungarian.json": [19248, 5948],
          "./shared_italian.json": [77819, 5933],
          "./shared_japanese.json": [48536, 2844],
          "./shared_koreana.json": [72400, 6542],
          "./shared_latam.json": [29185, 2443],
          "./shared_norwegian.json": [36134, 4108],
          "./shared_polish.json": [87151, 3252],
          "./shared_portuguese.json": [3630, 5849],
          "./shared_romanian.json": [51363, 4823],
          "./shared_russian.json": [60859, 9062],
          "./shared_sc_schinese.json": [6055, 2029],
          "./shared_schinese.json": [88004, 2537],
          "./shared_spanish.json": [35090, 6492],
          "./shared_swedish.json": [84447, 5625],
          "./shared_tchinese.json": [92869, 7602],
          "./shared_thai.json": [34720, 1162],
          "./shared_turkish.json": [3347, 5438],
          "./shared_ukrainian.json": [46150, 7781],
          "./shared_vietnamese.json": [12315, 4964],
        };
        function o(e) {
          if (!r.o(n, e))
            return Promise.resolve().then(() => {
              var t = new Error("Cannot find module '" + e + "'");
              throw ((t.code = "MODULE_NOT_FOUND"), t);
            });
          var t = n[e],
            o = t[0];
          return r.e(t[1]).then(() => r.t(o, 19));
        }
        (o.keys = () => Object.keys(n)), (o.id = 91090), (e.exports = o);
      },
      87363: (e) => {
        "use strict";
        e.exports = React;
      },
      61533: (e) => {
        "use strict";
        e.exports = ReactDOM;
      },
    },
    a = {};
  function _(e) {
    var t = a[e];
    if (void 0 !== t) return t.exports;
    var r = (a[e] = { id: e, loaded: !1, exports: {} });
    return i[e].call(r.exports, r, r.exports, _), (r.loaded = !0), r.exports;
  }
  (_.m = i),
    (_.amdO = {}),
    (e = []),
    (_.O = (t, r, n, o) => {
      if (!r) {
        var i = 1 / 0;
        for (d = 0; d < e.length; d++) {
          for (var [r, n, o] = e[d], a = !0, s = 0; s < r.length; s++)
            (!1 & o || i >= o) && Object.keys(_.O).every((e) => _.O[e](r[s]))
              ? r.splice(s--, 1)
              : ((a = !1), o < i && (i = o));
          if (a) {
            e.splice(d--, 1);
            var l = n();
            void 0 !== l && (t = l);
          }
        }
        return t;
      }
      o = o || 0;
      for (var d = e.length; d > 0 && e[d - 1][2] > o; d--) e[d] = e[d - 1];
      e[d] = [r, n, o];
    }),
    (_.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return _.d(t, { a: t }), t;
    }),
    (r = Object.getPrototypeOf
      ? (e) => Object.getPrototypeOf(e)
      : (e) => e.__proto__),
    (_.t = function (e, n) {
      if ((1 & n && (e = this(e)), 8 & n)) return e;
      if ("object" == typeof e && e) {
        if (4 & n && e.__esModule) return e;
        if (16 & n && "function" == typeof e.then) return e;
      }
      var o = Object.create(null);
      _.r(o);
      var i = {};
      t = t || [null, r({}), r([]), r(r)];
      for (var a = 2 & n && e; "object" == typeof a && !~t.indexOf(a); a = r(a))
        Object.getOwnPropertyNames(a).forEach((t) => (i[t] = () => e[t]));
      return (i.default = () => e), _.d(o, i), o;
    }),
    (_.d = (e, t) => {
      for (var r in t)
        _.o(t, r) &&
          !_.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (_.f = {}),
    (_.e = (e) =>
      Promise.all(Object.keys(_.f).reduce((t, r) => (_.f[r](e, t), t), []))),
    (_.u = (e) =>
      "javascript/webui/" +
      {
        699: "friendsui_polish-json",
        1162: "shared_thai-json",
        1313: "shared_bulgarian-json",
        1471: "friendsui_greek-json",
        1635: "friendsui_vietnamese-json",
        2029: "shared_sc_schinese-json",
        2431: "shared_arabic-json",
        2443: "shared_latam-json",
        2537: "shared_schinese-json",
        2822: "friendsui_ukrainian-json",
        2844: "shared_japanese-json",
        2862: "friendsui_brazilian-json",
        2913: "friendsui_russian-json",
        3112: "shared_french-json",
        3140: "friendsui_sc_schinese-json",
        3182: "friendsui_romanian-json",
        3252: "shared_polish-json",
        3471: "friendsui_spanish-json",
        3500: "friendsui_french-json",
        3557: "shared_finnish-json",
        4108: "shared_norwegian-json",
        4189: "shared_czech-json",
        4264: "friendsui_portuguese-json",
        4297: "shared_greek-json",
        4448: "friendsui_czech-json",
        4596: "friendsui_finnish-json",
        4716: "friendsui_norwegian-json",
        4823: "shared_romanian-json",
        4964: "shared_vietnamese-json",
        4989: "friendsui_german-json",
        5438: "shared_turkish-json",
        5625: "shared_swedish-json",
        5632: "friendsui_turkish-json",
        5802: "friendsui_hungarian-json",
        5849: "shared_portuguese-json",
        5925: "shared_dutch-json",
        5933: "shared_italian-json",
        5948: "shared_hungarian-json",
        6007: "shared_german-json",
        6492: "shared_spanish-json",
        6542: "shared_koreana-json",
        6727: "friendsui_japanese-json",
        6986: "friendsui_koreana-json",
        6992: "friendsui_arabic-json",
        7340: "friendsui_tchinese-json",
        7575: "friendsui_dutch-json",
        7602: "shared_tchinese-json",
        7651: "friendsui_latam-json",
        7706: "friendsui_schinese-json",
        7781: "shared_ukrainian-json",
        7975: "shared_english-json",
        8247: "friendsui_english-json",
        8385: "shared_brazilian-json",
        8518: "friendsui_bulgarian-json",
        8815: "friendsui_italian-json",
        9062: "shared_russian-json",
        9263: "friendsui_thai-json",
        9753: "shared_danish-json",
        9775: "friendsui_danish-json",
        9818: "friendsui_swedish-json",
      }[e] +
      ".js?contenthash=" +
      {
        699: "e520ea8eb741214a85ed",
        1162: "0f5c7509064b10ece378",
        1313: "f1c31d58abcdafee396b",
        1471: "f672673711c2b00c6f49",
        1635: "327b0ab06e9918b8ba12",
        2029: "6c4ad79e585988cc71d5",
        2431: "faf493c0d081b4c4473c",
        2443: "95df4c99620d92b7cd99",
        2537: "5d4a8a6667cb93826f81",
        2822: "b746dddeffd6385ff4c2",
        2844: "7b06d52cf915bf7c7f90",
        2862: "919b0f8467aa4d0dd8af",
        2913: "57a19c6ffdaede13c040",
        3112: "288afd0d9c5eccda074a",
        3140: "67232a94c8f87bf86abf",
        3182: "626a386cb26ef9f94014",
        3252: "6a26b3994be6c547b67d",
        3471: "3d722f5b01571f009d05",
        3500: "e9b32ef169e610726b31",
        3557: "0629952b08a7368f184b",
        4108: "441daf985c724282b8a7",
        4189: "058a3e5ed8d72e8cce23",
        4264: "ec103289f4c6ed47540d",
        4297: "c76e8f68241b9e05dcf6",
        4448: "78e23706de09c7356d89",
        4596: "d5a9ab76686b8add8234",
        4716: "0d03a3ed1cc805af2770",
        4823: "0f239af33e2675828baa",
        4964: "fd40c9f738bcd774b583",
        4989: "7080a6ac094d0c96366d",
        5438: "0bdbfb7da92192e017db",
        5625: "a03e0c6eeb7ca662a836",
        5632: "ba35dfe882793e9e2de3",
        5802: "debc3461bbf286c8c1df",
        5849: "ace1e84e10cb46049306",
        5925: "4eaff1ab5d86ced46283",
        5933: "0a4675d6fb0b6c832bda",
        5948: "39d43ce4aaa7e754ae65",
        6007: "f9f42695cd3ec4eebcf3",
        6492: "3a83bf03c58b935889c7",
        6542: "0caf38bbf5ada39f1b1e",
        6727: "6e337a8e0713fb5c3df0",
        6986: "eee1d09dbca5e738acdc",
        6992: "3b30a7e01544619acb07",
        7340: "dd947cee9875884305e1",
        7575: "3e33390f518ecc16c2e0",
        7602: "8b4227469c94b8de5c61",
        7651: "810b9512d7a3c5658b6a",
        7706: "415e651d68936074233f",
        7781: "af3e8f21f294ac2fe1c7",
        7975: "409dfcba9702cd86452d",
        8247: "50033bbb032af7582c98",
        8385: "c73447a34f114cba30b9",
        8518: "466b062b4e684e714502",
        8815: "1f786d86346bdbc68758",
        9062: "79a5341eb37ad068c059",
        9263: "0faea3edd3efa407123d",
        9753: "3be01d5b53e4527743d2",
        9775: "660b7785225eab50cda3",
        9818: "f7b856f8c101aa9cae33",
      }[e]),
    (_.miniCssF = (e) => {}),
    (_.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (_.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (n = {}),
    (o = "@steam/friendsui:"),
    (_.l = (e, t, r, i) => {
      if (n[e]) n[e].push(t);
      else {
        var a, s;
        if (void 0 !== r)
          for (
            var l = document.getElementsByTagName("script"), d = 0;
            d < l.length;
            d++
          ) {
            var c = l[d];
            if (
              c.getAttribute("src") == e ||
              c.getAttribute("data-webpack") == o + r
            ) {
              a = c;
              break;
            }
          }
        a ||
          ((s = !0),
          ((a = document.createElement("script")).charset = "utf-8"),
          (a.timeout = 120),
          _.nc && a.setAttribute("nonce", _.nc),
          a.setAttribute("data-webpack", o + r),
          (a.src = e)),
          (n[e] = [t]);
        var u = (t, r) => {
            (a.onerror = a.onload = null), clearTimeout(p);
            var o = n[e];
            if (
              (delete n[e],
              a.parentNode && a.parentNode.removeChild(a),
              o && o.forEach((e) => e(r)),
              t)
            )
              return t(r);
          },
          p = setTimeout(
            u.bind(null, void 0, { type: "timeout", target: a }),
            12e4
          );
        (a.onerror = u.bind(null, a.onerror)),
          (a.onload = u.bind(null, a.onload)),
          s && document.head.appendChild(a);
      }
    }),
    (_.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (_.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e)),
    (_.j = 1856),
    (() => {
      var e;
      _.g.importScripts && (e = _.g.location + "");
      var t = _.g.document;
      if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
        var r = t.getElementsByTagName("script");
        r.length && (e = r[r.length - 1].src);
      }
      if (!e)
        throw new Error(
          "Automatic publicPath is not supported in this browser"
        );
      (e = e
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (_.p = e + "../../");
    })(),
    (() => {
      var e = { 1856: 0 };
      (_.f.j = (t, r) => {
        var n = _.o(e, t) ? e[t] : void 0;
        if (0 !== n)
          if (n) r.push(n[2]);
          else {
            var o = new Promise((r, o) => (n = e[t] = [r, o]));
            r.push((n[2] = o));
            var i = _.p + _.u(t),
              a = new Error();
            _.l(
              i,
              (r) => {
                if (_.o(e, t) && (0 !== (n = e[t]) && (e[t] = void 0), n)) {
                  var o = r && ("load" === r.type ? "missing" : r.type),
                    i = r && r.target && r.target.src;
                  (a.message =
                    "Loading chunk " + t + " failed.\n(" + o + ": " + i + ")"),
                    (a.name = "ChunkLoadError"),
                    (a.type = o),
                    (a.request = i),
                    n[1](a);
                }
              },
              "chunk-" + t,
              t
            );
          }
      }),
        (_.O.j = (t) => 0 === e[t]);
      var t = (t, r) => {
          var n,
            o,
            [i, a, s] = r,
            l = 0;
          if (i.some((t) => 0 !== e[t])) {
            for (n in a) _.o(a, n) && (_.m[n] = a[n]);
            if (s) var d = s(_);
          }
          for (t && t(r); l < i.length; l++)
            (o = i[l]), _.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
          return _.O(d);
        },
        r = (self.webpackChunk_steam_friendsui =
          self.webpackChunk_steam_friendsui || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })();
  var s = _.O(void 0, [5968], () => _(61952));
  s = _.O(s);
})();

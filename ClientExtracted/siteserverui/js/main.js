(self.webpackChunksiteserverui = self.webpackChunksiteserverui || []).push([
  [8792],
  {
    978: (e) => {
      e.exports = {
        LoadingWrapper: "_2wAKy-0ZkO_vhbiQCP9MgE",
        Static: "_1QfwpLmLTSuiIRLDzdY_7l",
        none: "_1F0lzP-Krz_y5P9ewZEvBD",
        bottomCircle: "_2qjZm0dB7I6lcRkZhNTqvD",
        noString: "_1Sy0pXVZOdWbgouFyD2zJj",
        Throbber: "lYUEjD8Qh3GM_ZrZeLwpI",
        throbber_small: "_2zbyh5jEDlV5HVD3iUve-k",
        throbber_medium: "_2CphUsHNDgIWItNIzeIldY",
        throbber_large: "_1x18vR7Qop8v8_G8qSR6CL",
        throbber_center_wrapper: "_3IYPzqtvB2ZE7x710d5x2C",
        ThrobberText: "_21nVi2jNuF_prxLY1mAaKK",
        blur: "_1ctjA2yjeB21eCDj_r1mVz",
        ThrobberRoundLoop: "_1O-cWE6nuIVO3x6-Onw0IU",
        roundOuterOutline: "_1Vv--mA6PueyEKXXMTwljt",
        roundOuter: "_2K0LzwjOXDopMHoqY_v_CO",
        roundFill: "_3sQFkavAEPhliH6DiFmHRH",
        ThrobberFillLoop: "ofdi9VLSRZ5W98WsXVHiq",
        topCircle: "_1LZffuoDq-N25wNHckxsf",
        circlePulse: "_1XN6ZJ1l8nVoUxp1WnOBqw",
        ThrobberTopCircleLoop: "_1jALk36CiS_T9Pg7vBjpIQ",
        ThrobberBottomCircleLoop: "_1KvOgdKiNE9XuSYUau3hKW",
        roundThrobber15: "_2LGHpu_-ihfOhQwdfR3Kiy",
        roundThrobber14: "_2FGCneH2AemMrIrZnZskw_",
        roundThrobber13: "_1X-5j16jaQntVrZfadibyc",
        roundThrobber12: "_1pj1Q3Ef4FdHDdl9QEtpxp",
        roundThrobber11: "xFmZaMe5nZpoTc5PQBKn3",
        roundThrobber10: "_3MGYowzMQ6TwbH3fu9SVjt",
        roundThrobber09: "ktVJ42jiVhWEVV9O6z2FK",
        roundThrobber08: "_3s_7my869lIOj-1vnqJ39y",
        roundThrobber07: "_11MVp53Me_frOuaJfsQ4FE",
        roundThrobber06: "_2cl-maglen-RF0YQjShgqG",
        roundThrobber05: "_3-JE0FpIzECzeqtd5cyjGI",
        roundThrobber04: "_1xNIKvHdzLhBldONo6yIZs",
        roundThrobber03: "_1S17yicfcrPc11m83ydGp3",
        roundThrobber02: "_1-oUJqmCLOoGqVJz5dgj6J",
        roundThrobber01: "_2tXgejjqNKy6cSX1Lv7PrG",
        ThrobberRoundLoopThickness: "_1fs4RGcMBRzbQQirDBiFoM",
        throbber_xlarge: "_1gYeZMYKBDqNpVuw58_LCl",
        throbber_xxlarge: "_3j-p4JOqdpaF4obGtIeAB",
        ThrobberDelayAppear: "I3aEq3lbK7Pm8ujENvtri",
        Visible: "_2SwSJd-DlX2dRiDGxZWHI5",
        NewThrobber: "_1m8iQOSVziKDHiInrfskv_",
      };
    },
    4453: (e, t, r) => {
      "use strict";
      var i = r(7850),
        n = r(4844);
      function s(e, t, ...r) {
        console.assert
          ? 0 == r.length
            ? console.assert(!!e, t)
            : console.assert(!!e, t, ...r)
          : e || console.warn(t, ...r);
      }
      var a = r(4629),
        o = r(626),
        l = r(3288);
      function c(...e) {
        return e.reduce(
          (e, t) =>
            t
              ? "string" == typeof t
                ? e
                  ? `${e} ${t}`
                  : t
                : "object" == typeof t
                  ? e
                    ? `${e} ${u(t)}`
                    : u(t)
                  : e
              : e,
          "",
        );
      }
      function u(e) {
        return Object.keys(e).reduce(
          (t, r) => (e[r] ? (t ? `${t} ${r}` : r) : t),
          "",
        );
      }
      var m = r(978),
        d = r.n(m);
      const _ =
          r.p + "images/steam_spinner.png?v=8669e97b288da32670e77181618c3dfb",
        b = {
          EUNIVERSE: 0,
          LANGUAGE: "english",
          SUPPORTED_LANGUAGES: [],
          COUNTRY: "",
          AVATAR_BASE_URL: "",
          MEDIA_CDN_COMMUNITY_URL: "",
          MEDIA_CDN_URL: "",
          CLAN_CDN_ASSET_URL: "",
          COMMUNITY_ASSETS_BASE_URL: "",
          VIDEO_CDN_URL: "",
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
          STORE_ITEM_BASE_URL: "",
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
          ARCH: "",
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
          IN_STEAMUI: !1,
          FORCED_DISPLAY_MODE: void 0,
          ON_FRAME: !1,
          IS_STEAMOS: !1,
          ON_STEAMOS_CLIENT_BRANCH: !1,
          IN_GAMESCOPE: !1,
          USE_LONGEST_LOC_STRING: !1,
          SILENT_STARTUP: !1,
          DEV_MODE: !1,
          CLIENT_SESSION: 0,
          NOW: 0,
        },
        g = {
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
          is_valve_email: !1,
          short_url: "",
          country_code: "",
          excluded_content_descriptors: [3, 4, 1],
        };
      let p = new Set(),
        B = !1;
      o.createContext({});
      var h, w, y;
      !(function (e) {
        (e[(e.kPFIFlag_MicroTransactionFile = 1)] =
          "kPFIFlag_MicroTransactionFile"),
          (e[(e.kPFIFlag_Incompatible = 2)] = "kPFIFlag_Incompatible"),
          (e[(e.kPFIFlag_RevenueSplitsFinalized = 4)] =
            "kPFIFlag_RevenueSplitsFinalized"),
          (e[(e.kPFIFlag_AcceptedForUse = 8)] = "kPFIFlag_AcceptedForUse"),
          (e[(e.kPFIFlag_CollectionShowSubscribeAll = 16)] =
            "kPFIFlag_CollectionShowSubscribeAll"),
          (e[(e.kPFIFlag_ItemInProgress = 32)] = "kPFIFlag_ItemInProgress"),
          (e[(e.kPFIFlag_GamePlayable = 64)] = "kPFIFlag_GamePlayable"),
          (e[(e.kPFIFlag_AwaitingModeration = 128)] =
            "kPFIFlag_AwaitingModeration"),
          (e[(e.kPFIFlag_PendingApproval = 256)] = "kPFIFlag_PendingApproval"),
          (e[(e.kPFIFlag_FixedStats = 1536)] = "kPFIFlag_FixedStats"),
          (e[(e.kPFIFlag_LatestWorkshopTermsNotAccepted = 2048)] =
            "kPFIFlag_LatestWorkshopTermsNotAccepted"),
          (e[(e.kPFIFlag_DepotContent = 4096)] = "kPFIFlag_DepotContent"),
          (e[(e.kPFIFlag_CollectionAllOwnerItems = 8192)] =
            "kPFIFlag_CollectionAllOwnerItems"),
          (e[(e.kPFIFlag_CollectionIsASet = 16384)] =
            "kPFIFlag_CollectionIsASet"),
          (e[(e.kPFIFlag_Subscribable = 32768)] = "kPFIFlag_Subscribable"),
          (e[(e.kPFIFlag_ForceUnbanned = 65536)] = "kPFIFlag_ForceUnbanned"),
          (e[(e.kPFIFlag_ForceInappropriate = 131072)] =
            "kPFIFlag_ForceInappropriate"),
          (e[(e.kPFIFlag_ForceAppropriate = 262144)] =
            "kPFIFlag_ForceAppropriate"),
          (e[(e.kPFIFlag_RequireVerification = 524288)] =
            "kPFIFlag_RequireVerification"),
          (e[(e.kPFIFlag_HasApprovedSteamChinaContent = 1048576)] =
            "kPFIFlag_HasApprovedSteamChinaContent"),
          (e[(e.kPFIFlag_HasApprovedContent = 2097152)] =
            "kPFIFlag_HasApprovedContent"),
          (e[(e.kPFIFlag_IgnoreTextContentCheckFlag = 4194304)] =
            "kPFIFlag_IgnoreTextContentCheckFlag"),
          (e[(e.kPFIFlag_DisableComments = 8388608)] =
            "kPFIFlag_DisableComments"),
          (e[(e.kPFIFlag_NeedsContentCheck = 16777216)] =
            "kPFIFlag_NeedsContentCheck"),
          (e[(e.kPFIFlag_SteamChinaCreated = 33554432)] =
            "kPFIFlag_SteamChinaCreated"),
          (e[(e.kPFIFlag_RejectedLatestContent = 67108864)] =
            "kPFIFlag_RejectedLatestContent"),
          (e[(e.kPFIFlag_ManagedContentDescriptors = 134217728)] =
            "kPFIFlag_ManagedContentDescriptors"),
          (e[(e.kPFIFlag_HasAuthorSnapshots = 268435456)] =
            "kPFIFlag_HasAuthorSnapshots");
      })(h || (h = {})),
        (function (e) {
          (e[(e.k_EPFSplitType_MicrotransactionItem = 0)] =
            "k_EPFSplitType_MicrotransactionItem"),
            (e[(e.k_EPFSplitType_WorkshopItem = 1)] =
              "k_EPFSplitType_WorkshopItem"),
            (e[(e.k_EPFSplitType_GreenlightItem = 2)] =
              "k_EPFSplitType_GreenlightItem"),
            (e[(e.k_EPFSplitType_SharedFile = 3)] =
              "k_EPFSplitType_SharedFile");
        })(w || (w = {})),
        (function (e) {
          (e[(e.k_EPFAuditAction_Banned = 1)] = "k_EPFAuditAction_Banned"),
            (e[(e.k_EPFAuditAction_UnBanned = 2)] =
              "k_EPFAuditAction_UnBanned"),
            (e[(e.k_EPFAuditAction_AddedIncompatibleFlag = 3)] =
              "k_EPFAuditAction_AddedIncompatibleFlag"),
            (e[(e.k_EPFAuditAction_RemovedIncompatibleFlag = 4)] =
              "k_EPFAuditAction_RemovedIncompatibleFlag"),
            (e[(e.k_EPFAuditAction_AddedForceInappropriateFlag = 5)] =
              "k_EPFAuditAction_AddedForceInappropriateFlag"),
            (e[(e.k_EPFAuditAction_RemovedForceInappropriateFlag = 6)] =
              "k_EPFAuditAction_RemovedForceInappropriateFlag"),
            (e[(e.k_EPFAuditAction_AddedForceAppropriateFlag = 7)] =
              "k_EPFAuditAction_AddedForceAppropriateFlag"),
            (e[(e.k_EPFAuditAction_RemovedForceAppropriateFlag = 8)] =
              "k_EPFAuditAction_RemovedForceAppropriateFlag"),
            (e[(e.k_EPFAuditAction_AddedAcceptedForUseFlag = 9)] =
              "k_EPFAuditAction_AddedAcceptedForUseFlag"),
            (e[(e.k_EPFAuditAction_RemovedAcceptedForUseFlag = 10)] =
              "k_EPFAuditAction_RemovedAcceptedForUseFlag"),
            (e[(e.k_EPFAuditAction_ClearedReports = 11)] =
              "k_EPFAuditAction_ClearedReports"),
            (e[(e.k_EPFAuditAction_RequireVerification = 12)] =
              "k_EPFAuditAction_RequireVerification"),
            (e[(e.k_EPFAuditAction_ResendVerificationEmail = 13)] =
              "k_EPFAuditAction_ResendVerificationEmail"),
            (e[(e.k_EPFAuditAction_SubmissionVerified = 14)] =
              "k_EPFAuditAction_SubmissionVerified"),
            (e[(e.k_EPFAuditAction_ApprovedByModerator = 15)] =
              "k_EPFAuditAction_ApprovedByModerator"),
            (e[(e.k_EPFAuditAction_RejectedByModerator = 16)] =
              "k_EPFAuditAction_RejectedByModerator"),
            (e[(e.k_EPFAuditAction_ApprovedForSteamChina = 17)] =
              "k_EPFAuditAction_ApprovedForSteamChina"),
            (e[(e.k_EPFAuditAction_RejectedForSteamChina = 18)] =
              "k_EPFAuditAction_RejectedForSteamChina"),
            (e[(e.k_EPFAuditAction_AddedIgnoreTextContentCheckFlag = 19)] =
              "k_EPFAuditAction_AddedIgnoreTextContentCheckFlag"),
            (e[(e.k_EPFAuditAction_RemovedIgnoreTextContentCheckFlag = 20)] =
              "k_EPFAuditAction_RemovedIgnoreTextContentCheckFlag"),
            (e[(e.k_EPFAuditAction_VoteBannedUsers = 21)] =
              "k_EPFAuditAction_VoteBannedUsers"),
            (e[(e.k_EPFAuditAction_ClearedVoteBannedUsers = 22)] =
              "k_EPFAuditAction_ClearedVoteBannedUsers"),
            (e[(e.k_EPFAuditAction_Deleted = 23)] = "k_EPFAuditAction_Deleted"),
            (e[(e.k_EPFAuditAction_PermanentlyDeleted = 24)] =
              "k_EPFAuditAction_PermanentlyDeleted"),
            (e[(e.k_EPFAuditAction_AddedContentDescriptor = 25)] =
              "k_EPFAuditAction_AddedContentDescriptor"),
            (e[(e.k_EPFAuditAction_RemovedContentDescriptor = 26)] =
              "k_EPFAuditAction_RemovedContentDescriptor"),
            (e[(e.k_EPFAuditAction_AddedRestrictedCountry = 27)] =
              "k_EPFAuditAction_AddedRestrictedCountry"),
            (e[(e.k_EPFAuditAction_RemovedRestrictedCountry = 28)] =
              "k_EPFAuditAction_RemovedRestrictedCountry"),
            (e[(e.k_EPFAuditAction_TransferredOwnership = 29)] =
              "k_EPFAuditAction_TransferredOwnership");
        })(y || (y = {}));
      const f = 30;
      [
        ["None", "none", -1],
        ["Afrikaans", "afrikaans", 0],
        ["Albanian", "albanian", 1],
        ["Amharic", "amharic", 2],
        ["Armenian", "armenian", 3],
        ["Assamese", "assamese", 4],
        ["Azerbaijani", "azerbaijani", 5],
        ["Bangla", "bangla", 6],
        ["Basque", "basque", 7],
        ["Belarusian", "belarusian", 8],
        ["Bosnian", "bosnian", 9],
        ["Catalan", "catalan", 10],
        ["Cherokee", "cherokee", 11],
        ["Croatian", "croatian", 12],
        ["Dari", "dari", 13],
        ["Estonian", "estonian", 14],
        ["Filipino", "filipino", 15],
        ["Galician", "galician", 16],
        ["Georgian", "georgian", 17],
        ["Gujarati", "gujarati", 18],
        ["Punjabi (Gurmukhi)", "gurmukhi", 19],
        ["Hausa", "hausa", 20],
        ["Hebrew", "hebrew", 21],
        ["Hindi", "hindi", 22],
        ["Icelandic", "icelandic", 23],
        ["Igbo", "igbo", 24],
        ["Indonesian", "indonesian", 25],
        ["Irish", "irish", 26],
        ["Kannada", "kannada", 27],
        ["Kazakh", "kazakh", 28],
        ["Khmer", "khmer", 29],
        ["K'iche'", "kiche", 30],
        ["Kinyarwanda", "kinyarwanda", 31],
        ["Konkani", "konkani", 32],
        ["Kyrgyz", "kyrgyz", 33],
        ["Latvian", "latvian", 34],
        ["Lithuanian", "lithuanian", 35],
        ["Luxembourgish", "luxembourgish", 36],
        ["Macedonian", "macedonian", 37],
        ["Malay", "malay", 38],
        ["Malayalam", "malayalam", 39],
        ["Maltese", "maltese", 40],
        ["Maori", "maori", 41],
        ["Marathi", "marathi", 42],
        ["Mongolian", "mongolian", 43],
        ["Nepali", "nepali", 44],
        ["Odia", "odia", 45],
        ["Persian", "persian", 46],
        ["Quechua", "quechua", 47],
        ["Scots", "scots", 48],
        ["Serbian", "serbian", 49],
        ["Punjabi (Shahmukhi)", "shahmukhi", 50],
        ["Sindhi", "sindhi", 51],
        ["Sinhala", "sinhala", 52],
        ["Slovak", "slovak", 53],
        ["Slovenian", "slovenian", 54],
        ["Sorani", "sorani", 55],
        ["Sotho", "sotho", 56],
        ["Swahili", "swahili", 57],
        ["Tajik", "tajik", 58],
        ["Tamil", "tamil", 59],
        ["Tatar", "tatar", 60],
        ["Telugu", "telugu", 61],
        ["Tigrinya", "tigrinya", 62],
        ["Tswana", "tswana", 63],
        ["Turkmen", "turkmen", 64],
        ["Urdu", "urdu", 65],
        ["Uyghur", "uyghur", 66],
        ["Uzbek", "uzbek", 67],
        ["Valencian", "valencian", 68],
        ["Welsh", "welsh", 69],
        ["Wolof", "wolof", 70],
        ["Xhosa", "xhosa", 71],
        ["Yoruba", "yoruba", 72],
        ["Zulu", "zulu", 73],
      ].map((e) => ({
        name: e[0],
        shortName: e[1],
        eAdditionalLanguage: e[2],
      }));
      function S(e, t = "") {
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
          case f:
            return "indonesian";
          case 31:
            return "malay";
          default:
            return t;
        }
      }
      function M(e, t = 0) {
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
            return f;
          case "malay":
            return 31;
          default:
            return t;
        }
      }
      var z, C, R, F, v, j, I, T;
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
      })(z || (z = {})),
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
        })(C || (C = {})),
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
        })(R || (R = {})),
        (function (e) {
          (e[(e.k_EFloatingGamepadTextInputModeModeSingleLine = 0)] =
            "k_EFloatingGamepadTextInputModeModeSingleLine"),
            (e[(e.k_EFloatingGamepadTextInputModeModeMultipleLines = 1)] =
              "k_EFloatingGamepadTextInputModeModeMultipleLines"),
            (e[(e.k_EFloatingGamepadTextInputModeModeEmail = 2)] =
              "k_EFloatingGamepadTextInputModeModeEmail"),
            (e[(e.k_EFloatingGamepadTextInputModeModeNumeric = 3)] =
              "k_EFloatingGamepadTextInputModeModeNumeric");
        })(F || (F = {})),
        (function (e) {
          (e[(e.k_EAppUpdateContentType_Content = 0)] =
            "k_EAppUpdateContentType_Content"),
            (e[(e.k_EAppUpdateContentType_Workshop = 1)] =
              "k_EAppUpdateContentType_Workshop"),
            (e[(e.k_EAppUpdateContentType_Shader = 2)] =
              "k_EAppUpdateContentType_Shader"),
            (e[(e.k_EAppUpdateContentType_Max = 3)] =
              "k_EAppUpdateContentType_Max");
        })(v || (v = {})),
        (function (e) {
          (e[(e.k_EAppUpdateProgress_VerifyingInstalledFiles = 0)] =
            "k_EAppUpdateProgress_VerifyingInstalledFiles"),
            (e[(e.k_EAppUpdateProgress_Preallocating = 1)] =
              "k_EAppUpdateProgress_Preallocating"),
            (e[(e.k_EAppUpdateProgress_Download = 2)] =
              "k_EAppUpdateProgress_Download"),
            (e[(e.k_EAppUpdateProgress_Staging = 3)] =
              "k_EAppUpdateProgress_Staging"),
            (e[(e.k_EAppUpdateProgress_VerifyingStagedFiles = 4)] =
              "k_EAppUpdateProgress_VerifyingStagedFiles"),
            (e[(e.k_EAppUpdateProgress_Copying = 5)] =
              "k_EAppUpdateProgress_Copying"),
            (e[(e.k_EAppUpdateProgress_Committing = 6)] =
              "k_EAppUpdateProgress_Committing"),
            (e[(e.k_EAppUpdateProgress_Max = 7)] = "k_EAppUpdateProgress_Max");
        })(j || (j = {})),
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
        })(T || (T = {}));
      var W, x, k, O, E, N;
      !(function (e) {
        (e[(e.k_ERaiseGameWindowResult_NotRunning = 1)] =
          "k_ERaiseGameWindowResult_NotRunning"),
          (e[(e.k_ERaiseGameWindowResult_Success = 2)] =
            "k_ERaiseGameWindowResult_Success"),
          (e[(e.k_ERaiseGameWindowResult_Failure = 3)] =
            "k_ERaiseGameWindowResult_Failure");
      })(W || (W = {})),
        (function (e) {
          (e[(e.k_EPositionInvalid = -1)] = "k_EPositionInvalid"),
            (e[(e.k_EPositionTopLeft = 0)] = "k_EPositionTopLeft"),
            (e[(e.k_EPositionTopRight = 1)] = "k_EPositionTopRight"),
            (e[(e.k_EPositionBottomLeft = 2)] = "k_EPositionBottomLeft"),
            (e[(e.k_EPositionBottomRight = 3)] = "k_EPositionBottomRight");
        })(x || (x = {})),
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
        })(k || (k = {})),
        (function (e) {
          (e[(e.k_EGameIDTypeApp = 0)] = "k_EGameIDTypeApp"),
            (e[(e.k_EGameIDTypeGameMod = 1)] = "k_EGameIDTypeGameMod"),
            (e[(e.k_EGameIDTypeShortcut = 2)] = "k_EGameIDTypeShortcut");
        })(O || (O = {})),
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
        })(E || (E = {})),
        (function (e) {
          (e[(e.k_EWindowBringToFrontInvalid = 0)] =
            "k_EWindowBringToFrontInvalid"),
            (e[(e.k_EWindowBringToFrontAndForceOS = 1)] =
              "k_EWindowBringToFrontAndForceOS"),
            (e[(e.k_EWindowBringToFrontWithoutForcingOS = 2)] =
              "k_EWindowBringToFrontWithoutForcingOS");
        })(N || (N = {}));
      var P;
      !(function (e) {
        (e[(e.k_ETwoFactorTokenSteamguardScheme_None = 0)] =
          "k_ETwoFactorTokenSteamguardScheme_None"),
          (e[(e.k_ETwoFactorTokenSteamguardScheme_Email = 1)] =
            "k_ETwoFactorTokenSteamguardScheme_Email"),
          (e[(e.k_ETwoFactorTokenSteamguardScheme_TwoFactor = 2)] =
            "k_ETwoFactorTokenSteamguardScheme_TwoFactor");
      })(P || (P = {}));
      const U = window.Config ?? b,
        A =
          (window.UserConfig,
          window.Config
            ? () => Promise.resolve()
            : function () {
                return B
                  ? Promise.resolve()
                  : new Promise((e) => {
                      p.add(e);
                    });
              });
      window.Config && Object.assign(b, window.Config),
        window.UserConfig && Object.assign(g, window.UserConfig);
      const L = o.memo(function (e) {
        const {
          className: t,
          size: r,
          string: n,
          position: s,
          static: a,
          msDelayAppear: l,
        } = e;
        let u = [d().LoadingWrapper, "SteamLogoThrobber", G(r)];
        const [m, g] = o.useState(!l),
          p = !(
            b.IN_CLIENT &&
            (function (e) {
              switch (e) {
                default:
                  break;
                case 4:
                case 1:
                case 8:
                  return !0;
              }
              return !1;
            })(b.LAUNCHER_TYPE)
          );
        return (
          (0, o.useEffect)(() => {
            if (m) return;
            const e = setTimeout(() => g(!0), l);
            return () => clearTimeout(e);
          }, [l, m]),
          void 0 === n && u.push(d().noString),
          t && u.push(t),
          a && u.push(d().Static),
          (0, i.jsxs)("div", {
            className: c(
              "center" == s && d().throbber_center_wrapper,
              !!l && d().ThrobberDelayAppear,
              m && d().Visible,
            ),
            children: [
              m &&
                p &&
                (0, i.jsx)("div", {
                  className: u.join(" "),
                  children: (0, i.jsx)("div", {
                    className: d().NewThrobber,
                    children: (0, i.jsx)("img", { src: _ }),
                  }),
                }),
              Boolean(n) &&
                (0, i.jsx)("div", { className: d().ThrobberText, children: n }),
            ],
          })
        );
      });
      o.memo(function (e) {
        const {
          className: t,
          size: r,
          string: n,
          position: s,
          static: a,
          msDelayAppear: l,
        } = e;
        let u = [d().LoadingWrapper, "SteamLogoThrobber", G(r)];
        const [m, _] = o.useState(!l);
        return (
          (0, o.useEffect)(() => {
            if (m) return;
            const e = setTimeout(() => _(!0), l);
            return () => clearTimeout(e);
          }, [l, m]),
          void 0 === n && u.push(d().noString),
          t && u.push(t),
          a && u.push(d().Static),
          (0, i.jsxs)("div", {
            className: c(
              "center" == s && d().throbber_center_wrapper,
              !!l && d().ThrobberDelayAppear,
              m && d().Visible,
            ),
            children: [
              m &&
                (0, i.jsx)("div", {
                  className: u.join(" "),
                  children: (0, i.jsxs)("div", {
                    className: d().Throbber,
                    children: [
                      (0, i.jsx)(D, { className: d().base }),
                      (0, i.jsx)(D, { className: d().blur }),
                    ],
                  }),
                }),
              Boolean(n) &&
                (0, i.jsx)("div", { className: d().ThrobberText, children: n }),
            ],
          })
        );
      });
      function G(e) {
        switch (e) {
          case "small":
            return d().throbber_small;
          case "medium":
            return d().throbber_medium;
          case "xlarge":
            return d().throbber_xlarge;
          case "xxlarge":
            return d().throbber_xxlarge;
          default:
            return d().throbber_large;
        }
      }
      function D(e) {
        let t = "SVGIcon_Button SVGIcon_Throbber ";
        return (
          e.className && (t += e.className),
          (0, i.jsxs)("svg", {
            version: "1.1",
            id: "base",
            xmlns: "http://www.w3.org/2000/svg",
            className: t,
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256",
            children: [
              (0, i.jsxs)("g", {
                className: d().partCircle,
                children: [
                  (0, i.jsx)("path", {
                    className: d().roundOuter,
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895",
                  }),
                  (0, i.jsx)("path", {
                    className: d().roundOuter,
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M201.432,101.166",
                  }),
                  (0, i.jsx)("path", {
                    className: d().roundOuter,
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754",
                  }),
                ],
              }),
              (0, i.jsxs)("g", {
                className: d().mainOutline,
                children: [
                  (0, i.jsx)("path", {
                    className: d().roundFill,
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                  (0, i.jsx)("path", {
                    className: d().roundOuterOutline,
                    strokeLinecap: "butt",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                  (0, i.jsx)("path", {
                    className: d().roundThrobber01,
                    strokeLinecap: "butt",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                  (0, i.jsx)("path", {
                    className: d().roundThrobber02,
                    strokeLinecap: "butt",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                  (0, i.jsx)("path", {
                    className: d().roundThrobber03,
                    strokeLinecap: "butt",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                  (0, i.jsx)("path", {
                    className: d().roundThrobber04,
                    strokeLinecap: "butt",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                  (0, i.jsx)("path", {
                    className: d().roundThrobber05,
                    strokeLinecap: "butt",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                  (0, i.jsx)("path", {
                    className: d().roundThrobber06,
                    strokeLinecap: "butt",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                  (0, i.jsx)("path", {
                    className: d().roundThrobber07,
                    strokeLinecap: "butt",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                  (0, i.jsx)("path", {
                    className: d().roundThrobber08,
                    strokeLinecap: "butt",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                  (0, i.jsx)("path", {
                    className: d().roundThrobber09,
                    strokeLinecap: "butt",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                  (0, i.jsx)("path", {
                    className: d().roundThrobber10,
                    strokeLinecap: "butt",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                  (0, i.jsx)("path", {
                    className: d().roundThrobber11,
                    strokeLinecap: "butt",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                  (0, i.jsx)("path", {
                    className: d().roundThrobber12,
                    strokeLinecap: "butt",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                  (0, i.jsx)("path", {
                    className: d().roundThrobber13,
                    strokeLinecap: "butt",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                  (0, i.jsx)("path", {
                    className: d().roundThrobber14,
                    strokeLinecap: "butt",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                  (0, i.jsx)("path", {
                    className: d().roundThrobber15,
                    strokeLinecap: "butt",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "6",
                    strokeMiterlimit: "10",
                    d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
                  }),
                ],
              }),
              (0, i.jsx)("g", {
                className: d().bottomCircle,
                children: (0, i.jsx)("path", {
                  fill: "#ffffff",
                  d: "M89.226,181.579L76.5,176.321c2.256,4.696,6.159,8.628,11.339,10.786 c11.197,4.668,24.11-0.647,28.779-11.854c2.259-5.425,2.274-11.405,0.033-16.841c-2.237-5.436-6.46-9.675-11.886-11.938 c-5.384-2.24-11.151-2.156-16.22-0.244l13.146,5.436c8.261,3.443,12.166,12.93,8.725,21.189 C106.976,181.115,97.486,185.022,89.226,181.579",
                }),
              }),
              (0, i.jsx)("g", {
                className: d().topCircle,
                children: (0, i.jsx)("circle", {
                  fill: "none",
                  stroke: "#ffffff",
                  strokeWidth: "6",
                  strokeMiterlimit: "10",
                  cx: "161.731",
                  cy: "101.274",
                  r: "23.019",
                }),
              }),
            ],
          })
        );
      }
      var q = r(4947);
      function H(e, t, r) {
        return {
          get() {
            let e = r.value.bind(this);
            return (
              Object.prototype.hasOwnProperty.call(this, t) ||
                Object.defineProperty(this, t, { value: e }),
              e
            );
          },
        };
      }
      async function V(e, t = "SHA-256") {
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
      var $ = r(613),
        K = r.n($);
      const Q = $.BinaryReader.prototype,
        X = $.BinaryWriter.prototype;
      function Y(e) {
        const t = {},
          { fields: r } = e;
        for (const e in r) {
          const i = r[e];
          t[i.n] = i;
        }
        return t;
      }
      function Z(e, t) {
        const { proto: r, fields: i } = e,
          n = new r();
        if (null == t) return n;
        for (const e in i) {
          const { n: r, c: s, r: a, d: o, q: l } = i[e];
          if (!Object.prototype.hasOwnProperty.call(t, e)) continue;
          const c = t[e];
          s
            ? a
              ? $.Message.setRepeatedWrapperField(
                  n,
                  r,
                  Array.isArray(c) ? c.map((e) => s.fromObject(e)) : [],
                )
              : $.Message.setWrapperField(n, r, s.fromObject(c))
            : $.Message.setField(n, r, c);
        }
        return n;
      }
      function J(e, t, r) {
        const { proto: i, fields: n } = e,
          s = {};
        for (const e in n) {
          const { n: i, c: a, r: o, d: l, q: c } = n[e];
          if (a)
            if (o)
              s[e] = $.Message.toObjectList(
                $.Message.getRepeatedWrapperField(r, a, i),
                a.toObject,
                t,
              );
            else {
              const n = $.Message.getWrapperField(r, a, i, c ? 1 : 0);
              n && (s[e] = a.toObject(t, n));
            }
          else {
            const t = $.Message.getFieldWithDefault(
              r,
              i,
              void 0 !== l ? l : null,
            );
            (null !== t || c) && (s[e] = t);
          }
        }
        return t && (s.$jspbMessageInstance = r), s;
      }
      function ee(e, t, r) {
        for (; r.nextField() && !r.isEndGroup(); ) {
          const i = e[r.getFieldNumber()];
          if (i) {
            const { n: e, c: n, r: s, d: a, q: o, br: l } = i;
            if (n) {
              const i = new n();
              r.readMessage(i, n.deserializeBinaryFromReader),
                s
                  ? $.Message.addToRepeatedWrapperField(t, e, i, n)
                  : $.Message.setWrapperField(t, e, i);
            } else if (l) {
              const i = l.call(r);
              s
                ? $.Message.addToRepeatedField(t, e, i)
                : $.Message.setField(t, e, i);
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
      function te(e, t, r) {
        const { fields: i } = e;
        for (const e in i) {
          const { n, c: s, r: a, d: o, q: l, bw: c } = i[e];
          if (s)
            if (a) {
              const e = $.Message.getRepeatedWrapperField(t, s, n);
              ((e && e.length) || l) &&
                r.writeRepeatedMessage(n, e, s.serializeBinaryToWriter);
            } else {
              const e = $.Message.getWrapperField(t, s, n, l ? 1 : 0);
              e && r.writeMessage(n, e, s.serializeBinaryToWriter);
            }
          else if (c) {
            const e = $.Message.getField(t, n);
            void 0 !== e && c.call(r, n, e);
          } else
            console.assert(
              !!c,
              `Writer func not set for field number ${n} in class ${s}`,
            );
        }
      }
      function re(e) {
        const t = e.proto;
        for (const r in e.fields) {
          const i = e.fields[r],
            { n, c: s, r: a, d: o, q: l } = i;
          Object.prototype.hasOwnProperty.call(i, "d")
            ? (t.prototype[r] = ie($.Message.getFieldWithDefault, n, o))
            : (t.prototype[r] = s
                ? a
                  ? ie($.Message.getRepeatedWrapperField, s, n)
                  : ne(s, n)
                : ie($.Message.getField, n)),
            (t.prototype[`set_${r}`] = se(
              s
                ? a
                  ? $.Message.setRepeatedWrapperField
                  : $.Message.setWrapperField
                : $.Message.setField,
              n,
            )),
            a && (t.prototype[`add_${r}`] = ae(n, s));
        }
      }
      function ie(e, ...t) {
        return function () {
          return e(this, ...t);
        };
      }
      function ne(e, t) {
        return function (r = !0) {
          return $.Message.getWrapperField(this, e, t, r ? 1 : 0);
        };
      }
      function se(e, t) {
        return function (r) {
          return e(this, t, r);
        };
      }
      function ae(e, t) {
        return t
          ? function (r, i) {
              return $.Message.addToRepeatedWrapperField(this, e, r, t, i);
            }
          : function (t, r) {
              $.Message.addToRepeatedField(this, e, t, r);
            };
      }
      class oe extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            oe.prototype.original_hostname || re(oe.M()),
            $.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            oe.sm_m ||
              (oe.sm_m = {
                proto: oe,
                fields: {
                  original_hostname: {
                    n: 1,
                    br: Q.readString,
                    bw: X.writeString,
                  },
                  actual_hostname: {
                    n: 2,
                    br: Q.readString,
                    bw: X.writeString,
                  },
                  path: { n: 3, br: Q.readString, bw: X.writeString },
                  base_name: { n: 4, br: Q.readString, bw: X.writeString },
                  success: { n: 5, br: Q.readBool, bw: X.writeBool },
                  status_code: { n: 6, br: Q.readUint32, bw: X.writeUint32 },
                  address_of_request_url: {
                    n: 7,
                    br: Q.readString,
                    bw: X.writeString,
                  },
                  response_time_ms: {
                    n: 8,
                    br: Q.readUint32,
                    bw: X.writeUint32,
                  },
                  bytes_received: {
                    n: 9,
                    br: Q.readUint64String,
                    bw: X.writeUint64String,
                  },
                  num_retries: { n: 10, br: Q.readUint32, bw: X.writeUint32 },
                },
              }),
            oe.sm_m
          );
        }
        static MBF() {
          return oe.sm_mbf || (oe.sm_mbf = Y(oe.M())), oe.sm_mbf;
        }
        toObject(e = !1) {
          return oe.toObject(e, this);
        }
        static toObject(e, t) {
          return J(oe.M(), e, t);
        }
        static fromObject(e) {
          return Z(oe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new oe();
          return oe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(oe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(oe.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return oe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_ClientBootstrap_RequestInfo";
        }
      }
      class le extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            le.prototype.launcher_type || re(le.M()),
            $.Message.initialize(this, e, 0, -1, [7, 8], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            le.sm_m ||
              (le.sm_m = {
                proto: le,
                fields: {
                  launcher_type: { n: 1, br: Q.readUint32, bw: X.writeUint32 },
                  steam_realm: { n: 2, br: Q.readUint32, bw: X.writeUint32 },
                  beta_name: { n: 3, br: Q.readString, bw: X.writeString },
                  download_completed: { n: 4, br: Q.readBool, bw: X.writeBool },
                  total_time_ms: { n: 6, br: Q.readUint32, bw: X.writeUint32 },
                  manifest_requests: { n: 7, c: oe, r: !0, q: !0 },
                  package_requests: { n: 8, c: oe, r: !0, q: !0 },
                },
              }),
            le.sm_m
          );
        }
        static MBF() {
          return le.sm_mbf || (le.sm_mbf = Y(le.M())), le.sm_mbf;
        }
        toObject(e = !1) {
          return le.toObject(e, this);
        }
        static toObject(e, t) {
          return J(le.M(), e, t);
        }
        static fromObject(e) {
          return Z(le.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new le();
          return le.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(le.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return le.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(le.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return le.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_ClientBootstrap_Summary";
        }
      }
      class ce extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ce.prototype.class_100 || re(ce.M()),
            $.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ce.sm_m ||
              (ce.sm_m = {
                proto: ce,
                fields: {
                  class_100: { n: 1, br: Q.readUint32, bw: X.writeUint32 },
                  class_200: { n: 2, br: Q.readUint32, bw: X.writeUint32 },
                  class_300: { n: 3, br: Q.readUint32, bw: X.writeUint32 },
                  class_400: { n: 4, br: Q.readUint32, bw: X.writeUint32 },
                  class_500: { n: 5, br: Q.readUint32, bw: X.writeUint32 },
                  no_response: { n: 6, br: Q.readUint32, bw: X.writeUint32 },
                  class_unknown: { n: 7, br: Q.readUint32, bw: X.writeUint32 },
                },
              }),
            ce.sm_m
          );
        }
        static MBF() {
          return ce.sm_mbf || (ce.sm_mbf = Y(ce.M())), ce.sm_mbf;
        }
        toObject(e = !1) {
          return ce.toObject(e, this);
        }
        static toObject(e, t) {
          return J(ce.M(), e, t);
        }
        static fromObject(e) {
          return Z(ce.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new ce();
          return ce.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(ce.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(ce.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return ce.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_ContentDownloadResponse_Counts";
        }
      }
      class ue extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ue.prototype.hostname || re(ue.M()),
            $.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ue.sm_m ||
              (ue.sm_m = {
                proto: ue,
                fields: {
                  hostname: { n: 1, br: Q.readString, bw: X.writeString },
                  source_type: { n: 2, br: Q.readUint32, bw: X.writeUint32 },
                  counts: { n: 3, c: ce },
                },
              }),
            ue.sm_m
          );
        }
        static MBF() {
          return ue.sm_mbf || (ue.sm_mbf = Y(ue.M())), ue.sm_mbf;
        }
        toObject(e = !1) {
          return ue.toObject(e, this);
        }
        static toObject(e, t) {
          return J(ue.M(), e, t);
        }
        static fromObject(e) {
          return Z(ue.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new ue();
          return ue.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(ue.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(ue.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return ue.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_ContentDownloadResponse_HostCounts";
        }
      }
      class me extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            me.prototype.hosts || re(me.M()),
            $.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            me.sm_m ||
              (me.sm_m = {
                proto: me,
                fields: { hosts: { n: 1, c: ue, r: !0, q: !0 } },
              }),
            me.sm_m
          );
        }
        static MBF() {
          return me.sm_mbf || (me.sm_mbf = Y(me.M())), me.sm_mbf;
        }
        toObject(e = !1) {
          return me.toObject(e, this);
        }
        static toObject(e, t) {
          return J(me.M(), e, t);
        }
        static fromObject(e) {
          return Z(me.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new me();
          return me.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(me.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return me.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(me.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return me.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_ContentDownloadResponse_Hosts";
        }
      }
      $.Message;
      $.Message;
      class de extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            de.prototype.dst_gcid_queue || re(de.M()),
            $.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            de.sm_m ||
              (de.sm_m = {
                proto: de,
                fields: {
                  dst_gcid_queue: {
                    n: 1,
                    br: Q.readUint64String,
                    bw: X.writeUint64String,
                  },
                  dst_gc_dir_index: {
                    n: 2,
                    br: Q.readUint32,
                    bw: X.writeUint32,
                  },
                },
              }),
            de.sm_m
          );
        }
        static MBF() {
          return de.sm_mbf || (de.sm_mbf = Y(de.M())), de.sm_mbf;
        }
        toObject(e = !1) {
          return de.toObject(e, this);
        }
        static toObject(e, t) {
          return J(de.M(), e, t);
        }
        static fromObject(e) {
          return Z(de.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new de();
          return de.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(de.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return de.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(de.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return de.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgGCRoutingProtoBufHeader";
        }
      }
      class _e extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _e.prototype.steamid || re(_e.M()),
            $.Message.initialize(this, e, 0, -1, [27, 41], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _e.sm_m ||
              (_e.sm_m = {
                proto: _e,
                fields: {
                  steamid: {
                    n: 1,
                    br: Q.readFixed64String,
                    bw: X.writeFixed64String,
                  },
                  client_sessionid: { n: 2, br: Q.readInt32, bw: X.writeInt32 },
                  routing_appid: { n: 3, br: Q.readUint32, bw: X.writeUint32 },
                  jobid_source: {
                    n: 10,
                    d: "18446744073709551615",
                    br: Q.readFixed64String,
                    bw: X.writeFixed64String,
                  },
                  jobid_target: {
                    n: 11,
                    d: "18446744073709551615",
                    br: Q.readFixed64String,
                    bw: X.writeFixed64String,
                  },
                  target_job_name: {
                    n: 12,
                    br: Q.readString,
                    bw: X.writeString,
                  },
                  seq_num: { n: 24, br: Q.readInt32, bw: X.writeInt32 },
                  eresult: { n: 13, d: 2, br: Q.readInt32, bw: X.writeInt32 },
                  error_message: { n: 14, br: Q.readString, bw: X.writeString },
                  ip: { n: 15, br: Q.readUint32, bw: X.writeUint32 },
                  ip_v6: { n: 29, br: Q.readBytes, bw: X.writeBytes },
                  auth_account_flags: {
                    n: 16,
                    br: Q.readUint32,
                    bw: X.writeUint32,
                  },
                  token_source: { n: 22, br: Q.readUint32, bw: X.writeUint32 },
                  admin_spoofing_user: {
                    n: 23,
                    br: Q.readBool,
                    bw: X.writeBool,
                  },
                  transport_error: {
                    n: 17,
                    d: 1,
                    br: Q.readInt32,
                    bw: X.writeInt32,
                  },
                  messageid: {
                    n: 18,
                    d: "18446744073709551615",
                    br: Q.readUint64String,
                    bw: X.writeUint64String,
                  },
                  publisher_group_id: {
                    n: 19,
                    br: Q.readUint32,
                    bw: X.writeUint32,
                  },
                  sysid: { n: 20, br: Q.readUint32, bw: X.writeUint32 },
                  webapi_key_id: { n: 25, br: Q.readUint32, bw: X.writeUint32 },
                  is_from_external_source: {
                    n: 26,
                    br: Q.readBool,
                    bw: X.writeBool,
                  },
                  forward_to_sysid: {
                    n: 27,
                    r: !0,
                    q: !0,
                    br: Q.readUint32,
                    pbr: Q.readPackedUint32,
                    bw: X.writeRepeatedUint32,
                  },
                  cm_sysid: { n: 28, br: Q.readUint32, bw: X.writeUint32 },
                  launcher_type: {
                    n: 31,
                    d: 0,
                    br: Q.readUint32,
                    bw: X.writeUint32,
                  },
                  realm: { n: 32, d: 0, br: Q.readUint32, bw: X.writeUint32 },
                  timeout_ms: {
                    n: 33,
                    d: -1,
                    br: Q.readInt32,
                    bw: X.writeInt32,
                  },
                  debug_source: { n: 34, br: Q.readString, bw: X.writeString },
                  debug_source_string_index: {
                    n: 35,
                    br: Q.readUint32,
                    bw: X.writeUint32,
                  },
                  token_id: {
                    n: 36,
                    br: Q.readUint64String,
                    bw: X.writeUint64String,
                  },
                  routing_gc: { n: 37, c: de },
                  session_disposition: {
                    n: 38,
                    d: 0,
                    br: Q.readEnum,
                    bw: X.writeEnum,
                  },
                  wg_token: { n: 39, br: Q.readString, bw: X.writeString },
                  webui_auth_key: {
                    n: 40,
                    br: Q.readString,
                    bw: X.writeString,
                  },
                  exclude_client_sessionids: {
                    n: 41,
                    r: !0,
                    q: !0,
                    br: Q.readInt32,
                    pbr: Q.readPackedInt32,
                    bw: X.writeRepeatedInt32,
                  },
                  admin_request_spoofing_steamid: {
                    n: 43,
                    br: Q.readFixed64String,
                    bw: X.writeFixed64String,
                  },
                  is_valveds: { n: 44, br: Q.readBool, bw: X.writeBool },
                  trace_tag: {
                    n: 45,
                    br: Q.readFixed64String,
                    bw: X.writeFixed64String,
                  },
                },
              }),
            _e.sm_m
          );
        }
        static MBF() {
          return _e.sm_mbf || (_e.sm_mbf = Y(_e.M())), _e.sm_mbf;
        }
        toObject(e = !1) {
          return _e.toObject(e, this);
        }
        static toObject(e, t) {
          return J(_e.M(), e, t);
        }
        static fromObject(e) {
          return Z(_e.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new _e();
          return _e.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(_e.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return _e.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(_e.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return _e.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgProtoBufHeader";
        }
      }
      $.Message;
      $.Message;
      $.Message;
      $.Message;
      $.Message;
      $.Message;
      $.Message;
      $.Message;
      $.Message;
      $.Message;
      $.Message;
      $.Message;
      $.Message;
      $.Message;
      $.Message;
      $.Message;
      $.Message;
      $.Message;
      $.Message;
      class be extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            be.prototype.manufacturer || re(be.M()),
            $.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            be.sm_m ||
              (be.sm_m = {
                proto: be,
                fields: {
                  manufacturer: { n: 1, br: Q.readString, bw: X.writeString },
                  model: { n: 2, br: Q.readString, bw: X.writeString },
                  dx_video_card: { n: 3, br: Q.readString, bw: X.writeString },
                  dx_vendorid: { n: 4, br: Q.readInt32, bw: X.writeInt32 },
                  dx_deviceid: { n: 5, br: Q.readInt32, bw: X.writeInt32 },
                  num_gpu: { n: 6, br: Q.readUint32, bw: X.writeUint32 },
                  system_ram: {
                    n: 7,
                    br: Q.readUint64String,
                    bw: X.writeUint64String,
                  },
                  os: { n: 8, br: Q.readString, bw: X.writeString },
                  cpu_vendor: { n: 9, br: Q.readString, bw: X.writeString },
                  cpu_name: { n: 10, br: Q.readString, bw: X.writeString },
                  gaming_device_type: {
                    n: 11,
                    br: Q.readUint32,
                    bw: X.writeUint32,
                  },
                  dx_driver_version: {
                    n: 12,
                    br: Q.readString,
                    bw: X.writeString,
                  },
                  adapter_description: {
                    n: 14,
                    br: Q.readString,
                    bw: X.writeString,
                  },
                  driver_version: {
                    n: 15,
                    br: Q.readString,
                    bw: X.writeString,
                  },
                  driver_date: { n: 16, br: Q.readString, bw: X.writeString },
                  vram_size: { n: 17, br: Q.readUint32, bw: X.writeUint32 },
                  screen_width: { n: 18, br: Q.readUint32, bw: X.writeUint32 },
                  screen_height: { n: 19, br: Q.readUint32, bw: X.writeUint32 },
                  precise_frame_rate: {
                    n: 20,
                    br: Q.readBool,
                    bw: X.writeBool,
                  },
                },
              }),
            be.sm_m
          );
        }
        static MBF() {
          return be.sm_mbf || (be.sm_mbf = Y(be.M())), be.sm_mbf;
        }
        toObject(e = !1) {
          return be.toObject(e, this);
        }
        static toObject(e, t) {
          return J(be.M(), e, t);
        }
        static fromObject(e) {
          return Z(be.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new be();
          return be.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(be.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return be.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(be.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return be.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "UserSystemInformation";
        }
      }
      class ge extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ge.prototype.setting || re(ge.M()),
            $.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ge.sm_m ||
              (ge.sm_m = {
                proto: ge,
                fields: {
                  setting: { n: 1, br: Q.readEnum, bw: X.writeEnum },
                  game_resolution_width: {
                    n: 2,
                    br: Q.readUint32,
                    bw: X.writeUint32,
                  },
                  game_resolution_height: {
                    n: 3,
                    br: Q.readUint32,
                    bw: X.writeUint32,
                  },
                },
              }),
            ge.sm_m
          );
        }
        static MBF() {
          return ge.sm_mbf || (ge.sm_mbf = Y(ge.M())), ge.sm_mbf;
        }
        toObject(e = !1) {
          return ge.toObject(e, this);
        }
        static toObject(e, t) {
          return J(ge.M(), e, t);
        }
        static fromObject(e) {
          return Z(ge.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new ge();
          return ge.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(ge.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(ge.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return ge.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "GamePerformanceSettings";
        }
      }
      class pe extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            pe.prototype.raw_version || re(pe.M()),
            $.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            pe.sm_m ||
              (pe.sm_m = {
                proto: pe,
                fields: {
                  raw_version: { n: 1, br: Q.readString, bw: X.writeString },
                  requested_interface_type: {
                    n: 2,
                    br: Q.readString,
                    bw: X.writeString,
                  },
                },
              }),
            pe.sm_m
          );
        }
        static MBF() {
          return pe.sm_mbf || (pe.sm_mbf = Y(pe.M())), pe.sm_mbf;
        }
        toObject(e = !1) {
          return pe.toObject(e, this);
        }
        static toObject(e, t) {
          return J(pe.M(), e, t);
        }
        static fromObject(e) {
          return Z(pe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new pe();
          return pe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(pe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(pe.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return pe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_AppInterfaceCreation";
        }
      }
      class Be extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Be.prototype.interface_name || re(Be.M()),
            $.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Be.sm_m ||
              (Be.sm_m = {
                proto: Be,
                fields: {
                  interface_name: { n: 1, br: Q.readString, bw: X.writeString },
                  method_name: { n: 2, br: Q.readString, bw: X.writeString },
                  call_count: { n: 3, br: Q.readUint32, bw: X.writeUint32 },
                },
              }),
            Be.sm_m
          );
        }
        static MBF() {
          return Be.sm_mbf || (Be.sm_mbf = Y(Be.M())), Be.sm_mbf;
        }
        toObject(e = !1) {
          return Be.toObject(e, this);
        }
        static toObject(e, t) {
          return J(Be.M(), e, t);
        }
        static fromObject(e) {
          return Z(Be.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new Be();
          return Be.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(Be.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return Be.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(Be.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return Be.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_AppInterfaceMethodCounts";
        }
      }
      class he extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            he.prototype.game_id || re(he.M()),
            $.Message.initialize(this, e, 0, -1, [2, 3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            he.sm_m ||
              (he.sm_m = {
                proto: he,
                fields: {
                  game_id: {
                    n: 1,
                    br: Q.readUint64String,
                    bw: X.writeUint64String,
                  },
                  interfaces_created: { n: 2, c: pe, r: !0, q: !0 },
                  methods_called: { n: 3, c: Be, r: !0, q: !0 },
                  session_length_seconds: {
                    n: 4,
                    br: Q.readUint32,
                    bw: X.writeUint32,
                  },
                },
              }),
            he.sm_m
          );
        }
        static MBF() {
          return he.sm_mbf || (he.sm_mbf = Y(he.M())), he.sm_mbf;
        }
        toObject(e = !1) {
          return he.toObject(e, this);
        }
        static toObject(e, t) {
          return J(he.M(), e, t);
        }
        static fromObject(e) {
          return Z(he.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new he();
          return he.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(he.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return he.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(he.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return he.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_AppInterfaceStats_Notification";
        }
      }
      class we extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            we.prototype.protocol_tested || re(we.M()),
            $.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            we.sm_m ||
              (we.sm_m = {
                proto: we,
                fields: {
                  protocol_tested: {
                    n: 1,
                    br: Q.readUint32,
                    bw: X.writeUint32,
                  },
                  connectivity_state: {
                    n: 2,
                    br: Q.readUint32,
                    bw: X.writeUint32,
                  },
                },
              }),
            we.sm_m
          );
        }
        static MBF() {
          return we.sm_mbf || (we.sm_mbf = Y(we.M())), we.sm_mbf;
        }
        toObject(e = !1) {
          return we.toObject(e, this);
        }
        static toObject(e, t) {
          return J(we.M(), e, t);
        }
        static fromObject(e) {
          return Z(we.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new we();
          return we.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(we.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return we.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(we.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return we.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_IPv6Connectivity_Result";
        }
      }
      class ye extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ye.prototype.cell_id || re(ye.M()),
            $.Message.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ye.sm_m ||
              (ye.sm_m = {
                proto: ye,
                fields: {
                  cell_id: { n: 1, br: Q.readUint32, bw: X.writeUint32 },
                  results: { n: 2, c: we, r: !0, q: !0 },
                  private_ip_is_rfc6598: {
                    n: 3,
                    br: Q.readBool,
                    bw: X.writeBool,
                  },
                },
              }),
            ye.sm_m
          );
        }
        static MBF() {
          return ye.sm_mbf || (ye.sm_mbf = Y(ye.M())), ye.sm_mbf;
        }
        toObject(e = !1) {
          return ye.toObject(e, this);
        }
        static toObject(e, t) {
          return J(ye.M(), e, t);
        }
        static fromObject(e) {
          return Z(ye.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new ye();
          return ye.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(ye.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return ye.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(ye.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return ye.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_IPv6Connectivity_Notification";
        }
      }
      class fe extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            fe.prototype.product || re(fe.M()),
            $.Message.initialize(this, e, 0, -1, [3, 4, 5], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            fe.sm_m ||
              (fe.sm_m = {
                proto: fe,
                fields: {
                  product: { n: 1, br: Q.readString, bw: X.writeString },
                  version: { n: 2, br: Q.readString, bw: X.writeString },
                  routes: { n: 3, c: Se, r: !0, q: !0 },
                  components: { n: 4, c: Me, r: !0, q: !0 },
                  actions: { n: 5, c: ze, r: !0, q: !0 },
                },
              }),
            fe.sm_m
          );
        }
        static MBF() {
          return fe.sm_mbf || (fe.sm_mbf = Y(fe.M())), fe.sm_mbf;
        }
        toObject(e = !1) {
          return fe.toObject(e, this);
        }
        static toObject(e, t) {
          return J(fe.M(), e, t);
        }
        static fromObject(e) {
          return Z(fe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new fe();
          return fe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(fe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return fe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(fe.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return fe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_ReportReactUsage_Notification";
        }
      }
      class Se extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Se.prototype.route || re(Se.M()),
            $.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Se.sm_m ||
              (Se.sm_m = {
                proto: Se,
                fields: {
                  route: { n: 1, br: Q.readString, bw: X.writeString },
                  count: { n: 2, br: Q.readUint32, bw: X.writeUint32 },
                },
              }),
            Se.sm_m
          );
        }
        static MBF() {
          return Se.sm_mbf || (Se.sm_mbf = Y(Se.M())), Se.sm_mbf;
        }
        toObject(e = !1) {
          return Se.toObject(e, this);
        }
        static toObject(e, t) {
          return J(Se.M(), e, t);
        }
        static fromObject(e) {
          return Z(Se.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new Se();
          return Se.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(Se.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return Se.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(Se.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return Se.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_ReportReactUsage_Notification_RouteData";
        }
      }
      class Me extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Me.prototype.component || re(Me.M()),
            $.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Me.sm_m ||
              (Me.sm_m = {
                proto: Me,
                fields: {
                  component: { n: 1, br: Q.readString, bw: X.writeString },
                  count: { n: 2, br: Q.readUint32, bw: X.writeUint32 },
                },
              }),
            Me.sm_m
          );
        }
        static MBF() {
          return Me.sm_mbf || (Me.sm_mbf = Y(Me.M())), Me.sm_mbf;
        }
        toObject(e = !1) {
          return Me.toObject(e, this);
        }
        static toObject(e, t) {
          return J(Me.M(), e, t);
        }
        static fromObject(e) {
          return Z(Me.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new Me();
          return Me.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(Me.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return Me.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(Me.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return Me.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_ReportReactUsage_Notification_ComponentData";
        }
      }
      class ze extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ze.prototype.action || re(ze.M()),
            $.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ze.sm_m ||
              (ze.sm_m = {
                proto: ze,
                fields: {
                  action: { n: 1, br: Q.readString, bw: X.writeString },
                  count: { n: 2, br: Q.readUint32, bw: X.writeUint32 },
                },
              }),
            ze.sm_m
          );
        }
        static MBF() {
          return ze.sm_mbf || (ze.sm_mbf = Y(ze.M())), ze.sm_mbf;
        }
        toObject(e = !1) {
          return ze.toObject(e, this);
        }
        static toObject(e, t) {
          return J(ze.M(), e, t);
        }
        static fromObject(e) {
          return Z(ze.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new ze();
          return ze.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(ze.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return ze.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(ze.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return ze.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_ReportReactUsage_Notification_ActionData";
        }
      }
      class Ce extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ce.prototype.product || re(Ce.M()),
            $.Message.initialize(this, e, 0, -1, [3, 4], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ce.sm_m ||
              (Ce.sm_m = {
                proto: Ce,
                fields: {
                  product: { n: 1, br: Q.readString, bw: X.writeString },
                  version: { n: 2, br: Q.readString, bw: X.writeString },
                  errors: { n: 3, c: Re, r: !0, q: !0 },
                  tags: {
                    n: 4,
                    r: !0,
                    q: !0,
                    br: Q.readString,
                    bw: X.writeRepeatedString,
                  },
                },
              }),
            Ce.sm_m
          );
        }
        static MBF() {
          return Ce.sm_mbf || (Ce.sm_mbf = Y(Ce.M())), Ce.sm_mbf;
        }
        toObject(e = !1) {
          return Ce.toObject(e, this);
        }
        static toObject(e, t) {
          return J(Ce.M(), e, t);
        }
        static fromObject(e) {
          return Z(Ce.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new Ce();
          return Ce.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(Ce.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return Ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(Ce.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return Ce.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_ReportClientError_Notification";
        }
      }
      class Re extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Re.prototype.identifier || re(Re.M()),
            $.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Re.sm_m ||
              (Re.sm_m = {
                proto: Re,
                fields: {
                  identifier: { n: 1, br: Q.readString, bw: X.writeString },
                  message: { n: 2, br: Q.readString, bw: X.writeString },
                  count: { n: 3, br: Q.readUint32, bw: X.writeUint32 },
                  context: { n: 4, br: Q.readString, bw: X.writeString },
                  url: { n: 5, br: Q.readString, bw: X.writeString },
                },
              }),
            Re.sm_m
          );
        }
        static MBF() {
          return Re.sm_mbf || (Re.sm_mbf = Y(Re.M())), Re.sm_mbf;
        }
        toObject(e = !1) {
          return Re.toObject(e, this);
        }
        static toObject(e, t) {
          return J(Re.M(), e, t);
        }
        static fromObject(e) {
          return Z(Re.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new Re();
          return Re.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(Re.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return Re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(Re.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return Re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_ReportClientError_Notification_Error";
        }
      }
      class Fe extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Fe.prototype.type || re(Fe.M()),
            $.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Fe.sm_m ||
              (Fe.sm_m = {
                proto: Fe,
                fields: {
                  type: { n: 1, br: Q.readEnum, bw: X.writeEnum },
                  num_ops: { n: 2, br: Q.readUint32, bw: X.writeUint32 },
                  num_bytes: {
                    n: 3,
                    br: Q.readUint64String,
                    bw: X.writeUint64String,
                  },
                  busy_time_ms: {
                    n: 4,
                    br: Q.readUint64String,
                    bw: X.writeUint64String,
                  },
                  idle_time_ms: {
                    n: 5,
                    br: Q.readUint64String,
                    bw: X.writeUint64String,
                  },
                  sum_run_time_ms: {
                    n: 6,
                    br: Q.readUint64String,
                    bw: X.writeUint64String,
                  },
                  sum_wait_time_ms: {
                    n: 7,
                    br: Q.readUint64String,
                    bw: X.writeUint64String,
                  },
                },
              }),
            Fe.sm_m
          );
        }
        static MBF() {
          return Fe.sm_mbf || (Fe.sm_mbf = Y(Fe.M())), Fe.sm_mbf;
        }
        toObject(e = !1) {
          return Fe.toObject(e, this);
        }
        static toObject(e, t) {
          return J(Fe.M(), e, t);
        }
        static fromObject(e) {
          return Z(Fe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new Fe();
          return Fe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(Fe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return Fe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(Fe.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return Fe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_SteamPipeWorkStats_Operation";
        }
      }
      class ve extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ve.prototype.appid || re(ve.M()),
            $.Message.initialize(this, e, 0, -1, [4], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ve.sm_m ||
              (ve.sm_m = {
                proto: ve,
                fields: {
                  appid: { n: 1, br: Q.readUint32, bw: X.writeUint32 },
                  depotid: { n: 2, br: Q.readUint32, bw: X.writeUint32 },
                  work_type: { n: 3, br: Q.readEnum, bw: X.writeEnum },
                  operations: { n: 4, c: Fe, r: !0, q: !0 },
                  hardware_type: { n: 5, br: Q.readUint32, bw: X.writeUint32 },
                },
              }),
            ve.sm_m
          );
        }
        static MBF() {
          return ve.sm_mbf || (ve.sm_mbf = Y(ve.M())), ve.sm_mbf;
        }
        toObject(e = !1) {
          return ve.toObject(e, this);
        }
        static toObject(e, t) {
          return J(ve.M(), e, t);
        }
        static fromObject(e) {
          return Z(ve.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new ve();
          return ve.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(ve.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return ve.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(ve.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return ve.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_SteamPipeWorkStats_Notification";
        }
      }
      class je extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            je.prototype.summary || re(je.M()),
            $.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            je.sm_m ||
              (je.sm_m = { proto: je, fields: { summary: { n: 1, c: le } } }),
            je.sm_m
          );
        }
        static MBF() {
          return je.sm_mbf || (je.sm_mbf = Y(je.M())), je.sm_mbf;
        }
        toObject(e = !1) {
          return je.toObject(e, this);
        }
        static toObject(e, t) {
          return J(je.M(), e, t);
        }
        static fromObject(e) {
          return Z(je.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new je();
          return je.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(je.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return je.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(je.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return je.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_ClientBootstrap_Notification";
        }
      }
      class Ie extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ie.prototype.cell_id || re(Ie.M()),
            $.Message.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ie.sm_m ||
              (Ie.sm_m = {
                proto: Ie,
                fields: {
                  cell_id: { n: 1, br: Q.readUint32, bw: X.writeUint32 },
                  stats: { n: 2, c: Te, r: !0, q: !0 },
                  throttling_kbps: {
                    n: 3,
                    br: Q.readUint32,
                    bw: X.writeUint32,
                  },
                  os_type: { n: 4, br: Q.readUint32, bw: X.writeUint32 },
                  device_type: { n: 5, br: Q.readUint32, bw: X.writeUint32 },
                },
              }),
            Ie.sm_m
          );
        }
        static MBF() {
          return Ie.sm_mbf || (Ie.sm_mbf = Y(Ie.M())), Ie.sm_mbf;
        }
        toObject(e = !1) {
          return Ie.toObject(e, this);
        }
        static toObject(e, t) {
          return J(Ie.M(), e, t);
        }
        static fromObject(e) {
          return Z(Ie.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new Ie();
          return Ie.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(Ie.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return Ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(Ie.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return Ie.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_DownloadRates_Notification";
        }
      }
      class Te extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Te.prototype.source_type || re(Te.M()),
            $.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Te.sm_m ||
              (Te.sm_m = {
                proto: Te,
                fields: {
                  source_type: { n: 1, br: Q.readUint32, bw: X.writeUint32 },
                  source_id: { n: 2, br: Q.readUint32, bw: X.writeUint32 },
                  bytes: {
                    n: 3,
                    br: Q.readUint64String,
                    bw: X.writeUint64String,
                  },
                  host_name: { n: 4, br: Q.readString, bw: X.writeString },
                  microseconds: {
                    n: 5,
                    br: Q.readUint64String,
                    bw: X.writeUint64String,
                  },
                  used_ipv6: { n: 6, br: Q.readBool, bw: X.writeBool },
                  proxied: { n: 7, br: Q.readBool, bw: X.writeBool },
                  used_http2: { n: 8, br: Q.readBool, bw: X.writeBool },
                  cache_hits: { n: 9, br: Q.readUint32, bw: X.writeUint32 },
                  cache_misses: { n: 10, br: Q.readUint32, bw: X.writeUint32 },
                  hit_bytes: {
                    n: 11,
                    br: Q.readUint64String,
                    bw: X.writeUint64String,
                  },
                  miss_bytes: {
                    n: 12,
                    br: Q.readUint64String,
                    bw: X.writeUint64String,
                  },
                  chunks_scored: { n: 13, br: Q.readUint32, bw: X.writeUint32 },
                  sum_chunk_scores: {
                    n: 14,
                    br: Q.readDouble,
                    bw: X.writeDouble,
                  },
                },
              }),
            Te.sm_m
          );
        }
        static MBF() {
          return Te.sm_mbf || (Te.sm_mbf = Y(Te.M())), Te.sm_mbf;
        }
        toObject(e = !1) {
          return Te.toObject(e, this);
        }
        static toObject(e, t) {
          return J(Te.M(), e, t);
        }
        static fromObject(e) {
          return Z(Te.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new Te();
          return Te.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(Te.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return Te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(Te.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return Te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_DownloadRates_Notification_StatsInfo";
        }
      }
      class We extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            We.prototype.validation_result || re(We.M()),
            $.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            We.sm_m ||
              (We.sm_m = {
                proto: We,
                fields: {
                  validation_result: {
                    n: 1,
                    br: Q.readInt32,
                    bw: X.writeInt32,
                  },
                  app_id: { n: 2, br: Q.readUint32, bw: X.writeUint32 },
                  staged_files: { n: 3, br: Q.readBool, bw: X.writeBool },
                  user_initiated: { n: 4, br: Q.readBool, bw: X.writeBool },
                  early_out: { n: 5, br: Q.readBool, bw: X.writeBool },
                  chunks_scanned: { n: 6, br: Q.readUint32, bw: X.writeUint32 },
                  chunks_corrupt: { n: 7, br: Q.readUint32, bw: X.writeUint32 },
                  bytes_scanned: {
                    n: 8,
                    br: Q.readUint64String,
                    bw: X.writeUint64String,
                  },
                  chunk_bytes_corrupt: {
                    n: 9,
                    br: Q.readUint64String,
                    bw: X.writeUint64String,
                  },
                  total_file_size_corrupt: {
                    n: 10,
                    br: Q.readUint64String,
                    bw: X.writeUint64String,
                  },
                },
              }),
            We.sm_m
          );
        }
        static MBF() {
          return We.sm_mbf || (We.sm_mbf = Y(We.M())), We.sm_mbf;
        }
        toObject(e = !1) {
          return We.toObject(e, this);
        }
        static toObject(e, t) {
          return J(We.M(), e, t);
        }
        static fromObject(e) {
          return Z(We.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new We();
          return We.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(We.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return We.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(We.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return We.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_ContentValidation_Notification";
        }
      }
      class xe extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            xe.prototype.app_id || re(xe.M()),
            $.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            xe.sm_m ||
              (xe.sm_m = {
                proto: xe,
                fields: {
                  app_id: { n: 1, br: Q.readUint32, bw: X.writeUint32 },
                  platform_type: { n: 2, br: Q.readUint32, bw: X.writeUint32 },
                  preload: { n: 3, br: Q.readBool, bw: X.writeBool },
                  blocking_app_launch: {
                    n: 4,
                    br: Q.readBool,
                    bw: X.writeBool,
                  },
                  files_uploaded: { n: 5, br: Q.readUint32, bw: X.writeUint32 },
                  files_downloaded: {
                    n: 6,
                    br: Q.readUint32,
                    bw: X.writeUint32,
                  },
                  files_deleted: { n: 7, br: Q.readUint32, bw: X.writeUint32 },
                  bytes_uploaded: {
                    n: 8,
                    br: Q.readUint64String,
                    bw: X.writeUint64String,
                  },
                  bytes_downloaded: {
                    n: 9,
                    br: Q.readUint64String,
                    bw: X.writeUint64String,
                  },
                  microsec_total: {
                    n: 10,
                    br: Q.readUint64String,
                    bw: X.writeUint64String,
                  },
                  microsec_init_caches: {
                    n: 11,
                    br: Q.readUint64String,
                    bw: X.writeUint64String,
                  },
                  microsec_validate_state: {
                    n: 12,
                    br: Q.readUint64String,
                    bw: X.writeUint64String,
                  },
                  microsec_ac_launch: {
                    n: 13,
                    br: Q.readUint64String,
                    bw: X.writeUint64String,
                  },
                  microsec_ac_prep_user_files: {
                    n: 14,
                    br: Q.readUint64String,
                    bw: X.writeUint64String,
                  },
                  microsec_ac_exit: {
                    n: 15,
                    br: Q.readUint64String,
                    bw: X.writeUint64String,
                  },
                  microsec_build_sync_list: {
                    n: 16,
                    br: Q.readUint64String,
                    bw: X.writeUint64String,
                  },
                  microsec_delete_files: {
                    n: 17,
                    br: Q.readUint64String,
                    bw: X.writeUint64String,
                  },
                  microsec_download_files: {
                    n: 18,
                    br: Q.readUint64String,
                    bw: X.writeUint64String,
                  },
                  microsec_upload_files: {
                    n: 19,
                    br: Q.readUint64String,
                    bw: X.writeUint64String,
                  },
                  hardware_type: { n: 20, br: Q.readUint32, bw: X.writeUint32 },
                  files_managed: { n: 21, br: Q.readUint32, bw: X.writeUint32 },
                },
              }),
            xe.sm_m
          );
        }
        static MBF() {
          return xe.sm_mbf || (xe.sm_mbf = Y(xe.M())), xe.sm_mbf;
        }
        toObject(e = !1) {
          return xe.toObject(e, this);
        }
        static toObject(e, t) {
          return J(xe.M(), e, t);
        }
        static fromObject(e) {
          return Z(xe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new xe();
          return xe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(xe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return xe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(xe.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return xe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_CloudAppSyncStats_Notification";
        }
      }
      class ke extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ke.prototype.cell_id || re(ke.M()),
            $.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ke.sm_m ||
              (ke.sm_m = {
                proto: ke,
                fields: {
                  cell_id: { n: 1, br: Q.readUint32, bw: X.writeUint32 },
                  data: { n: 2, c: me },
                },
              }),
            ke.sm_m
          );
        }
        static MBF() {
          return ke.sm_mbf || (ke.sm_mbf = Y(ke.M())), ke.sm_mbf;
        }
        toObject(e = !1) {
          return ke.toObject(e, this);
        }
        static toObject(e, t) {
          return J(ke.M(), e, t);
        }
        static fromObject(e) {
          return Z(ke.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new ke();
          return ke.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(ke.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return ke.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(ke.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return ke.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_ContentDownloadResponse_Counts_Notification";
        }
      }
      class Oe extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Oe.prototype.eresult || re(Oe.M()),
            $.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Oe.sm_m ||
              (Oe.sm_m = {
                proto: Oe,
                fields: {
                  eresult: { n: 1, d: 2, br: Q.readUint32, bw: X.writeUint32 },
                  share_method: { n: 2, br: Q.readEnum, bw: X.writeEnum },
                  seconds: { n: 3, br: Q.readFloat, bw: X.writeFloat },
                  bytes: {
                    n: 4,
                    br: Q.readUint64String,
                    bw: X.writeUint64String,
                  },
                  gameid: {
                    n: 5,
                    br: Q.readFixed64String,
                    bw: X.writeFixed64String,
                  },
                },
              }),
            Oe.sm_m
          );
        }
        static MBF() {
          return Oe.sm_mbf || (Oe.sm_mbf = Y(Oe.M())), Oe.sm_mbf;
        }
        toObject(e = !1) {
          return Oe.toObject(e, this);
        }
        static toObject(e, t) {
          return J(Oe.M(), e, t);
        }
        static fromObject(e) {
          return Z(Oe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new Oe();
          return Oe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(Oe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return Oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(Oe.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return Oe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_ClipShare_Notification";
        }
      }
      class Ee extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ee.prototype.original_range_method || re(Ee.M()),
            $.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ee.sm_m ||
              (Ee.sm_m = {
                proto: Ee,
                fields: {
                  original_range_method: {
                    n: 1,
                    br: Q.readEnum,
                    bw: X.writeEnum,
                  },
                  start: { n: 2, c: Ne },
                  end: { n: 3, c: Ne },
                  seconds: { n: 4, br: Q.readFloat, bw: X.writeFloat },
                  gameid: {
                    n: 5,
                    br: Q.readFixed64String,
                    bw: X.writeFixed64String,
                  },
                },
              }),
            Ee.sm_m
          );
        }
        static MBF() {
          return Ee.sm_mbf || (Ee.sm_mbf = Y(Ee.M())), Ee.sm_mbf;
        }
        toObject(e = !1) {
          return Ee.toObject(e, this);
        }
        static toObject(e, t) {
          return J(Ee.M(), e, t);
        }
        static fromObject(e) {
          return Z(Ee.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new Ee();
          return Ee.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(Ee.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return Ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(Ee.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return Ee.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_ClipRange_Notification";
        }
      }
      class Ne extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ne.prototype.original_range_method || re(Ne.M()),
            $.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ne.sm_m ||
              (Ne.sm_m = {
                proto: Ne,
                fields: {
                  original_range_method: {
                    n: 1,
                    br: Q.readEnum,
                    bw: X.writeEnum,
                  },
                  latest_range_method: {
                    n: 2,
                    br: Q.readEnum,
                    bw: X.writeEnum,
                  },
                  delta_ms: { n: 3, br: Q.readInt32, bw: X.writeInt32 },
                },
              }),
            Ne.sm_m
          );
        }
        static MBF() {
          return Ne.sm_mbf || (Ne.sm_mbf = Y(Ne.M())), Ne.sm_mbf;
        }
        toObject(e = !1) {
          return Ne.toObject(e, this);
        }
        static toObject(e, t) {
          return J(Ne.M(), e, t);
        }
        static fromObject(e) {
          return Z(Ne.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new Ne();
          return Ne.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(Ne.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return Ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(Ne.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return Ne.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_ClipRange_Notification_RelativeRangeEdge";
        }
      }
      class Pe extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Pe.prototype.recording_type || re(Pe.M()),
            $.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Pe.sm_m ||
              (Pe.sm_m = {
                proto: Pe,
                fields: {
                  recording_type: { n: 1, br: Q.readEnum, bw: X.writeEnum },
                  seconds: { n: 2, br: Q.readFloat, bw: X.writeFloat },
                  bytes: {
                    n: 3,
                    br: Q.readUint64String,
                    bw: X.writeUint64String,
                  },
                  gameid: {
                    n: 4,
                    br: Q.readFixed64String,
                    bw: X.writeFixed64String,
                  },
                  instant_clip: { n: 5, br: Q.readBool, bw: X.writeBool },
                },
              }),
            Pe.sm_m
          );
        }
        static MBF() {
          return Pe.sm_mbf || (Pe.sm_mbf = Y(Pe.M())), Pe.sm_mbf;
        }
        toObject(e = !1) {
          return Pe.toObject(e, this);
        }
        static toObject(e, t) {
          return J(Pe.M(), e, t);
        }
        static fromObject(e) {
          return Z(Pe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new Pe();
          return Pe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(Pe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return Pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(Pe.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return Pe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_EndGameRecording_Notification";
        }
      }
      class Ue extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ue.prototype.frame_rates || re(Ue.M()),
            $.Message.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ue.sm_m ||
              (Ue.sm_m = {
                proto: Ue,
                fields: {
                  frame_rates: { n: 2, c: Ae, r: !0, q: !0 },
                  system_info: { n: 3, c: be },
                },
              }),
            Ue.sm_m
          );
        }
        static MBF() {
          return Ue.sm_mbf || (Ue.sm_mbf = Y(Ue.M())), Ue.sm_mbf;
        }
        toObject(e = !1) {
          return Ue.toObject(e, this);
        }
        static toObject(e, t) {
          return J(Ue.M(), e, t);
        }
        static fromObject(e) {
          return Z(Ue.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new Ue();
          return Ue.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(Ue.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return Ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(Ue.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return Ue.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_GamePerformance_Notification";
        }
      }
      class Ae extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ae.prototype.gameid || re(Ae.M()),
            $.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ae.sm_m ||
              (Ae.sm_m = {
                proto: Ae,
                fields: {
                  gameid: {
                    n: 1,
                    br: Q.readFixed64String,
                    bw: X.writeFixed64String,
                  },
                  frame_rate: { n: 2, br: Q.readUint32, bw: X.writeUint32 },
                  session_seconds: { n: 3, br: Q.readInt32, bw: X.writeInt32 },
                  framegen_frame_rate: {
                    n: 4,
                    br: Q.readUint32,
                    bw: X.writeUint32,
                  },
                  game_settings: { n: 5, c: ge },
                },
              }),
            Ae.sm_m
          );
        }
        static MBF() {
          return Ae.sm_mbf || (Ae.sm_mbf = Y(Ae.M())), Ae.sm_mbf;
        }
        toObject(e = !1) {
          return Ae.toObject(e, this);
        }
        static toObject(e, t) {
          return J(Ae.M(), e, t);
        }
        static fromObject(e) {
          return Z(Ae.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new Ae();
          return Ae.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(Ae.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return Ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(Ae.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return Ae.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_GamePerformance_Notification_FrameRate";
        }
      }
      class Le extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Le.prototype.client_args || re(Le.M()),
            $.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Le.sm_m ||
              (Le.sm_m = {
                proto: Le,
                fields: {
                  client_args: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: Q.readString,
                    bw: X.writeRepeatedString,
                  },
                  gpu_webview_regkey_disabled: {
                    n: 2,
                    br: Q.readBool,
                    bw: X.writeBool,
                  },
                  suppress_gpu_chrome: {
                    n: 3,
                    br: Q.readBool,
                    bw: X.writeBool,
                  },
                  browser_not_supported: {
                    n: 4,
                    br: Q.readBool,
                    bw: X.writeBool,
                  },
                  hw_accel_video_regkey_disabled: {
                    n: 5,
                    br: Q.readBool,
                    bw: X.writeBool,
                  },
                  mini_mode_enabled: { n: 6, br: Q.readBool, bw: X.writeBool },
                  fps_counter_enabled: {
                    n: 7,
                    br: Q.readBool,
                    bw: X.writeBool,
                  },
                  library_low_bandwidth_mode_enabled: {
                    n: 8,
                    br: Q.readBool,
                    bw: X.writeBool,
                  },
                  library_low_perf_mode_enabled: {
                    n: 9,
                    br: Q.readBool,
                    bw: X.writeBool,
                  },
                  gr_mode: { n: 10, br: Q.readEnum, bw: X.writeEnum },
                },
              }),
            Le.sm_m
          );
        }
        static MBF() {
          return Le.sm_mbf || (Le.sm_mbf = Y(Le.M())), Le.sm_mbf;
        }
        toObject(e = !1) {
          return Le.toObject(e, this);
        }
        static toObject(e, t) {
          return J(Le.M(), e, t);
        }
        static fromObject(e) {
          return Z(Le.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new Le();
          return Le.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(Le.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return Le.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(Le.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return Le.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_ReportClientArgs_Notification";
        }
      }
      class Ge extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ge.prototype.accessibility_desktop_ui_scale || re(Ge.M()),
            $.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ge.sm_m ||
              (Ge.sm_m = {
                proto: Ge,
                fields: {
                  accessibility_desktop_ui_scale: {
                    n: 1,
                    br: Q.readFloat,
                    bw: X.writeFloat,
                  },
                  accessibility_screen_reader_enabled: {
                    n: 2,
                    br: Q.readBool,
                    bw: X.writeBool,
                  },
                  accessibility_high_contrast_mode: {
                    n: 3,
                    br: Q.readBool,
                    bw: X.writeBool,
                  },
                  accessibility_reduce_motion: {
                    n: 4,
                    br: Q.readBool,
                    bw: X.writeBool,
                  },
                  accessibility_color_filter_name: {
                    n: 5,
                    br: Q.readString,
                    bw: X.writeString,
                  },
                },
              }),
            Ge.sm_m
          );
        }
        static MBF() {
          return Ge.sm_mbf || (Ge.sm_mbf = Y(Ge.M())), Ge.sm_mbf;
        }
        toObject(e = !1) {
          return Ge.toObject(e, this);
        }
        static toObject(e, t) {
          return J(Ge.M(), e, t);
        }
        static fromObject(e) {
          return Z(Ge.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new Ge();
          return Ge.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(Ge.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return Ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(Ge.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return Ge.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_ReportAccessibilitySettings_Notification";
        }
      }
      class De extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            De.prototype.glibc_version_major || re(De.M()),
            $.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            De.sm_m ||
              (De.sm_m = {
                proto: De,
                fields: {
                  glibc_version_major: {
                    n: 1,
                    br: Q.readInt32,
                    bw: X.writeInt32,
                  },
                  glibc_version_minor: {
                    n: 2,
                    br: Q.readInt32,
                    bw: X.writeInt32,
                  },
                  account_type: { n: 3, br: Q.readInt32, bw: X.writeInt32 },
                  launcher_type: { n: 4, br: Q.readInt32, bw: X.writeInt32 },
                  game_server_appid: {
                    n: 5,
                    br: Q.readInt32,
                    bw: X.writeInt32,
                  },
                  process_name: { n: 6, br: Q.readString, bw: X.writeString },
                },
              }),
            De.sm_m
          );
        }
        static MBF() {
          return De.sm_mbf || (De.sm_mbf = Y(De.M())), De.sm_mbf;
        }
        toObject(e = !1) {
          return De.toObject(e, this);
        }
        static toObject(e, t) {
          return J(De.M(), e, t);
        }
        static fromObject(e) {
          return Z(De.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new De();
          return De.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(De.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return De.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(De.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return De.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_ReportLinuxStats_Notification";
        }
      }
      var qe;
      !(function (e) {
        (e.ClientAppInterfaceStatsReport = function (e, t) {
          return e.SendNotification(
            "ClientMetrics.ClientAppInterfaceStatsReport#1",
            bt(he, t),
            { ePrivilege: 1 },
          );
        }),
          (e.ClientIPv6ConnectivityReport = function (e, t) {
            return e.SendNotification(
              "ClientMetrics.ClientIPv6ConnectivityReport#1",
              bt(ye, t),
              { ePrivilege: 1 },
            );
          }),
          (e.SteamPipeWorkStatsReport = function (e, t) {
            return e.SendNotification(
              "ClientMetrics.SteamPipeWorkStatsReport#1",
              bt(ve, t),
              { ePrivilege: 1 },
            );
          }),
          (e.ReportReactUsage = function (e, t) {
            return e.SendNotification(
              "ClientMetrics.ReportReactUsage#1",
              bt(fe, t),
              { ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.ReportClientError = function (e, t) {
            return e.SendNotification(
              "ClientMetrics.ReportClientError#1",
              bt(Ce, t),
              { ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.ClientBootstrapReport = function (e, t) {
            return e.SendNotification(
              "ClientMetrics.ClientBootstrapReport#1",
              bt(je, t),
              { ePrivilege: 1 },
            );
          }),
          (e.ClientDownloadRatesReport = function (e, t) {
            return e.SendNotification(
              "ClientMetrics.ClientDownloadRatesReport#1",
              bt(Ie, t),
              { ePrivilege: 1 },
            );
          }),
          (e.ClientContentValidationReport = function (e, t) {
            return e.SendNotification(
              "ClientMetrics.ClientContentValidationReport#1",
              bt(We, t),
              { ePrivilege: 1 },
            );
          }),
          (e.ClientCloudAppSyncStats = function (e, t) {
            return e.SendNotification(
              "ClientMetrics.ClientCloudAppSyncStats#1",
              bt(xe, t),
              { ePrivilege: 1 },
            );
          }),
          (e.ClientDownloadResponseCodeCounts = function (e, t) {
            return e.SendNotification(
              "ClientMetrics.ClientDownloadResponseCodeCounts#1",
              bt(ke, t),
              { ePrivilege: 1 },
            );
          }),
          (e.ReportClientArgs = function (e, t) {
            return e.SendNotification(
              "ClientMetrics.ReportClientArgs#1",
              bt(Le, t),
              { ePrivilege: 1 },
            );
          }),
          (e.ReportLinuxStats = function (e, t) {
            return e.SendNotification(
              "ClientMetrics.ReportLinuxStats#1",
              bt(De, t),
              { ePrivilege: 1 },
            );
          }),
          (e.ReportAccessibilitySettings = function (e, t) {
            return e.SendNotification(
              "ClientMetrics.ReportAccessibilitySettings#1",
              bt(Ge, t),
              { ePrivilege: 1 },
            );
          }),
          (e.ReportClipShare = function (e, t) {
            return e.SendNotification(
              "ClientMetrics.ReportClipShare#1",
              bt(Oe, t),
              { ePrivilege: 1 },
            );
          }),
          (e.ReportClipRange = function (e, t) {
            return e.SendNotification(
              "ClientMetrics.ReportClipRange#1",
              bt(Ee, t),
              { ePrivilege: 1 },
            );
          }),
          (e.ReportEndGameRecording = function (e, t) {
            return e.SendNotification(
              "ClientMetrics.ReportEndGameRecording#1",
              bt(Pe, t),
              { ePrivilege: 1 },
            );
          }),
          (e.ReportGamePerformance = function (e, t) {
            return e.SendNotification(
              "ClientMetrics.ReportGamePerformance#1",
              bt(Ue, t),
              { ePrivilege: 1 },
            );
          });
      })(qe || (qe = {}));
      const He =
        window.addEventListener ||
        (globalThis && globalThis.addEventListener) ||
        (() => {});
      let Ve,
        $e = [],
        Ke = (e, t, r) =>
          $e.push({ error: e, cCallsitesToIgnore: t, strComponentStack: r });
      const Qe = !0;
      class Xe extends Error {
        constructor(...e) {
          super(...e), (this.name = "Assertion Failed");
        }
      }
      {
        const e = console.assert;
        console.assert = (t, r, ...i) => {
          if (!t) {
            const e = Je();
            Ke(new Xe(tt(r, ...i)), 2, e);
          }
          e.apply(console, [t, r, ...i]);
        };
        const t = console.error;
        (console.error = (e, ...r) => {
          const i = Je();
          Ke(new Error(tt(e, ...r)), 1, i), t.apply(console, [e, ...r]);
        }),
          (console.clogerror = (e, r, ...i) => {
            const n = Je();
            Ke(new Error(tt(r, ...i)), e + 1, n), t.apply(console, [r, ...i]);
          }),
          He("error", (e) => {
            Ke(e.error, 0);
          }),
          He("unhandledrejection", (e) => {
            Ke(e.reason, 0);
          }),
          (Ve = window.setTimeout(() => {
            ($e = []), (Ke = () => {});
          }, 3e4));
      }
      const Ye = { cCallsitesToIgnore: 0, bIncludeMessageInIdentifier: !1 },
        Ze = [
          "(localhost|127.0.0.1):(?!(80|443))",
          "chrome-extension://",
          "HTMLDivElement.onreset \\(/market",
          "/.millennium/Dist",
          "Millennium internal",
          "millenium",
          "millennium",
          "Refused unauthorized RPC command",
        ];
      function Je() {
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
      class et {
        m_strProduct;
        m_strVersion;
        m_transport = null;
        m_rgErrorQueue = [];
        m_sendTimer = null;
        m_bReportingPaused = !1;
        m_pauseTimer = void 0;
        m_fnGetReportingInterval = ut;
        m_fnGetReportTags = () => [];
        m_fnGetURL = () => location.href;
        m_bEnabled = !0;
        m_bInitialized = !1;
        constructor(e = !0) {
          e
            ? ($e.forEach(
                ({ error: e, cCallsitesToIgnore: t, strComponentStack: r }) =>
                  this.ReportError(e, {
                    cCallsitesToIgnore: t,
                    strComponentStack: r,
                  }),
              ),
              (Ke = (e, t, r) =>
                this.ReportError(e, {
                  cCallsitesToIgnore: t,
                  strComponentStack: r,
                })))
            : (Ke = () => {}),
            ($e = []),
            clearTimeout(Ve),
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
            const r = { ...Ye, ...t };
            if (!this.m_bEnabled) return null;
            0;
            const i = await (function (e, t) {
              try {
                return e.stack && e.stack.match(rt)
                  ? (async function (e, t) {
                      const {
                          cCallsitesToIgnore: r,
                          bIncludeMessageInIdentifier: i,
                        } = t,
                        { message: n, stack: s } = e,
                        a = s?.split("\n") ?? [];
                      let o = ot(a.filter((e) => !!e.match(rt))[r]);
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
                        identifierHash: await ct(o),
                        message: l,
                      };
                    })(e, t)
                  : e.stack && e.stack.match(it)
                    ? (async function (e, t) {
                        const {
                            cCallsitesToIgnore: r,
                            bIncludeMessageInIdentifier: i,
                          } = t,
                          n = e.stack?.split("\n") ?? [];
                        let s = ot(n.filter((e) => !!e.match(it))[r]);
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
                          identifierHash: await ct(s),
                          message: [e.message, ...a],
                        };
                      })(e, t)
                    : e.stack && e.stack.match(nt)
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
                            identifierHash: await ct(o),
                            message: [e.message, ...l],
                          };
                        })(e, t)
                      : (at ||
                          (console.warn(
                            "Error reporter does not know how to parse generated stack:",
                          ),
                          console.warn(e.stack),
                          (at = !0)),
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
            for (let t of Ze) {
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
          const t = _t.Init(Ce),
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
                n = new Re();
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
          qe.ReportClientError(this.m_transport, t);
        }
        get version() {
          return this.m_strVersion;
        }
        get product() {
          return this.m_strProduct;
        }
        get reporting_enabled() {
          return Qe;
        }
      }
      function tt(e, ...t) {
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
      const rt = /^\s*at .*(\S+:\d+|\(native\))/m,
        it = /(^|@)\S+:\d+/,
        nt = /.*\/bundle-[a-zA-Z0-9]+:\d+:\d+/;
      let st,
        at = !1;
      function ot(e) {
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
      const lt = () => (st || (st = new et()), st);
      async function ct(e) {
        try {
          return (await V(e)).slice(0, 16);
        } catch (e) {
          return "";
        }
      }
      function ut() {
        return 1e4;
      }
      class mt {
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
      class dt {
        static InitHeaderFromPacket(e) {
          return new dt(void 0, e);
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
            if (((this.m_header = new _e(null)), (this.m_bValid = !0), t))
              if (
                ((this.m_netPacket = t),
                this.m_netPacket.SeekGetHead(),
                (this.m_eMsg = this.m_netPacket.GetUint32()),
                2147483648 & this.m_eMsg)
              ) {
                (this.m_eMsg = 2147483647 & this.m_eMsg),
                  (this.m_cubHeader = this.m_netPacket.GetUint32());
                try {
                  _e.deserializeBinaryFromReader(
                    this.m_header,
                    new $.BinaryReader(
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
              new $.BinaryReader(
                t.GetPacket(),
                t.TellGet(),
                t.GetCountBytesRemaining(),
              ),
            );
          } catch (e) {
            this.m_bValid = !1;
            const t = lt(),
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
            n = new mt(i);
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
          return new mt(t).PutBytes(e), t;
        }
        DEBUG_ToObject() {
          return {};
        }
        DEBUG_LogToConsole() {
          0;
        }
      }
      class _t extends dt {
        constructor(e, t = 0, r, i, n) {
          super(t, r, e, i, void 0, n);
        }
        static InitFromPacket(e, t) {
          return new _t(e, 0, t);
        }
        static InitFromMsg(e, t) {
          return new _t(e, void 0, void 0, t);
        }
        static Init(e, t) {
          return new _t(e, t);
        }
        static InitFromObject(e, t) {
          return new _t(e, void 0, void 0, void 0, t);
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
      function bt(e, t, r) {
        let i;
        return (
          (i = t instanceof _t ? t : _t.InitFromObject(e, t)),
          void 0 !== r?.strDebugSource &&
            i.Hdr().set_debug_source(r.strDebugSource),
          i
        );
      }
      class gt extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            gt.prototype.username || re(gt.M()),
            $.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            gt.sm_m ||
              (gt.sm_m = {
                proto: gt,
                fields: {
                  username: { n: 1, br: Q.readString, bw: X.writeString },
                  password: { n: 2, br: Q.readString, bw: X.writeString },
                  steamguardcode: { n: 3, br: Q.readString, bw: X.writeString },
                  remember_password: { n: 4, br: Q.readBool, bw: X.writeBool },
                },
              }),
            gt.sm_m
          );
        }
        static MBF() {
          return gt.sm_mbf || (gt.sm_mbf = Y(gt.M())), gt.sm_mbf;
        }
        toObject(e = !1) {
          return gt.toObject(e, this);
        }
        static toObject(e, t) {
          return J(gt.M(), e, t);
        }
        static fromObject(e) {
          return Z(gt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new gt();
          return gt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(gt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return gt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(gt.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return gt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "SiteServerUI_Login_Request";
        }
      }
      class pt extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            pt.prototype.logon_state || re(pt.M()),
            $.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            pt.sm_m ||
              (pt.sm_m = {
                proto: pt,
                fields: {
                  logon_state: { n: 1, br: Q.readInt32, bw: X.writeInt32 },
                  logon_eresult: { n: 2, br: Q.readInt32, bw: X.writeInt32 },
                },
              }),
            pt.sm_m
          );
        }
        static MBF() {
          return pt.sm_mbf || (pt.sm_mbf = Y(pt.M())), pt.sm_mbf;
        }
        toObject(e = !1) {
          return pt.toObject(e, this);
        }
        static toObject(e, t) {
          return J(pt.M(), e, t);
        }
        static fromObject(e) {
          return Z(pt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new pt();
          return pt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(pt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return pt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(pt.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return pt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "SiteServerUI_Login_Response";
        }
      }
      class Bt extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), $.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Bt.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Bt();
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new Bt();
          return Bt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return Bt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return Bt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "SiteServerUI_LoginStatus_Request";
        }
      }
      class ht extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ht.prototype.username || re(ht.M()),
            $.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ht.sm_m ||
              (ht.sm_m = {
                proto: ht,
                fields: {
                  username: { n: 1, br: Q.readString, bw: X.writeString },
                  cached_credentials: { n: 2, br: Q.readBool, bw: X.writeBool },
                  logon_state: { n: 3, br: Q.readInt32, bw: X.writeInt32 },
                  logon_eresult: { n: 4, br: Q.readInt32, bw: X.writeInt32 },
                },
              }),
            ht.sm_m
          );
        }
        static MBF() {
          return ht.sm_mbf || (ht.sm_mbf = Y(ht.M())), ht.sm_mbf;
        }
        toObject(e = !1) {
          return ht.toObject(e, this);
        }
        static toObject(e, t) {
          return J(ht.M(), e, t);
        }
        static fromObject(e) {
          return Z(ht.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new ht();
          return ht.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(ht.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return ht.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(ht.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return ht.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "SiteServerUI_LoginStatus_Response";
        }
      }
      class wt extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), $.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return wt.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new wt();
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new wt();
          return wt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return wt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return wt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "SiteServerUI_CancelLogin_Request";
        }
      }
      class yt extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            yt.prototype.logon_state || re(yt.M()),
            $.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            yt.sm_m ||
              (yt.sm_m = {
                proto: yt,
                fields: {
                  logon_state: { n: 1, br: Q.readInt32, bw: X.writeInt32 },
                  logon_eresult: { n: 2, br: Q.readInt32, bw: X.writeInt32 },
                },
              }),
            yt.sm_m
          );
        }
        static MBF() {
          return yt.sm_mbf || (yt.sm_mbf = Y(yt.M())), yt.sm_mbf;
        }
        toObject(e = !1) {
          return yt.toObject(e, this);
        }
        static toObject(e, t) {
          return J(yt.M(), e, t);
        }
        static fromObject(e) {
          return Z(yt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new yt();
          return yt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(yt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return yt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(yt.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return yt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "SiteServerUI_CancelLogin_Response";
        }
      }
      class ft extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), $.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return ft.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new ft();
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new ft();
          return ft.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return ft.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return ft.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "SiteServerUI_Logout_Request";
        }
      }
      class St extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            St.prototype.logon_state || re(St.M()),
            $.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            St.sm_m ||
              (St.sm_m = {
                proto: St,
                fields: {
                  logon_state: { n: 1, br: Q.readInt32, bw: X.writeInt32 },
                  logout_eresult: { n: 2, br: Q.readInt32, bw: X.writeInt32 },
                },
              }),
            St.sm_m
          );
        }
        static MBF() {
          return St.sm_mbf || (St.sm_mbf = Y(St.M())), St.sm_mbf;
        }
        toObject(e = !1) {
          return St.toObject(e, this);
        }
        static toObject(e, t) {
          return J(St.M(), e, t);
        }
        static fromObject(e) {
          return Z(St.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new St();
          return St.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(St.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return St.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(St.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return St.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "SiteServerUI_Logout_Response";
        }
      }
      class Mt extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Mt.prototype.restart || re(Mt.M()),
            $.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Mt.sm_m ||
              (Mt.sm_m = {
                proto: Mt,
                fields: { restart: { n: 1, br: Q.readBool, bw: X.writeBool } },
              }),
            Mt.sm_m
          );
        }
        static MBF() {
          return Mt.sm_mbf || (Mt.sm_mbf = Y(Mt.M())), Mt.sm_mbf;
        }
        toObject(e = !1) {
          return Mt.toObject(e, this);
        }
        static toObject(e, t) {
          return J(Mt.M(), e, t);
        }
        static fromObject(e) {
          return Z(Mt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new Mt();
          return Mt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(Mt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return Mt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(Mt.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return Mt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "SiteServerUI_Quit_Request";
        }
      }
      class zt extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), $.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return zt.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new zt();
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new zt();
          return zt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return zt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return zt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "SiteServerUI_Quit_Response";
        }
      }
      class Ct extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), $.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Ct.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Ct();
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new Ct();
          return Ct.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return Ct.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return Ct.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "SiteServerUI_Status_Request";
        }
      }
      class Rt extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Rt.prototype.logon_state || re(Rt.M()),
            $.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Rt.sm_m ||
              (Rt.sm_m = {
                proto: Rt,
                fields: {
                  logon_state: { n: 1, br: Q.readInt32, bw: X.writeInt32 },
                  logon_eresult: { n: 2, br: Q.readInt32, bw: X.writeInt32 },
                  connected: { n: 3, br: Q.readBool, bw: X.writeBool },
                  cache_enabled: { n: 4, br: Q.readBool, bw: X.writeBool },
                  acct_status: { n: 5, br: Q.readInt32, bw: X.writeInt32 },
                },
              }),
            Rt.sm_m
          );
        }
        static MBF() {
          return Rt.sm_mbf || (Rt.sm_mbf = Y(Rt.M())), Rt.sm_mbf;
        }
        toObject(e = !1) {
          return Rt.toObject(e, this);
        }
        static toObject(e, t) {
          return J(Rt.M(), e, t);
        }
        static fromObject(e) {
          return Z(Rt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new Rt();
          return Rt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(Rt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return Rt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(Rt.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return Rt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "SiteServerUI_Status_Response";
        }
      }
      class Ft extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), $.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Ft.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Ft();
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new Ft();
          return Ft.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return Ft.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return Ft.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "SiteServerUI_GetLanguage_Request";
        }
      }
      class vt extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            vt.prototype.language || re(vt.M()),
            $.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            vt.sm_m ||
              (vt.sm_m = {
                proto: vt,
                fields: {
                  language: { n: 1, br: Q.readString, bw: X.writeString },
                },
              }),
            vt.sm_m
          );
        }
        static MBF() {
          return vt.sm_mbf || (vt.sm_mbf = Y(vt.M())), vt.sm_mbf;
        }
        toObject(e = !1) {
          return vt.toObject(e, this);
        }
        static toObject(e, t) {
          return J(vt.M(), e, t);
        }
        static fromObject(e) {
          return Z(vt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new vt();
          return vt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(vt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return vt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(vt.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return vt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "SiteServerUI_GetLanguage_Response";
        }
      }
      class jt extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            jt.prototype.language || re(jt.M()),
            $.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            jt.sm_m ||
              (jt.sm_m = {
                proto: jt,
                fields: {
                  language: { n: 1, br: Q.readString, bw: X.writeString },
                },
              }),
            jt.sm_m
          );
        }
        static MBF() {
          return jt.sm_mbf || (jt.sm_mbf = Y(jt.M())), jt.sm_mbf;
        }
        toObject(e = !1) {
          return jt.toObject(e, this);
        }
        static toObject(e, t) {
          return J(jt.M(), e, t);
        }
        static fromObject(e) {
          return Z(jt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new jt();
          return jt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(jt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return jt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(jt.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return jt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "SiteServerUI_SetLanguage_Request";
        }
      }
      class It extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), $.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return It.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new It();
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new It();
          return It.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return It.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return It.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "SiteServerUI_SetLanguage_Response";
        }
      }
      class Tt extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), $.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Tt.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Tt();
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new Tt();
          return Tt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return Tt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return Tt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "SiteServerUI_ClientStatus_Request";
        }
      }
      class Wt extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Wt.prototype.clients || re(Wt.M()),
            $.Message.initialize(this, e, 0, -1, [4, 5], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Wt.sm_m ||
              (Wt.sm_m = {
                proto: Wt,
                fields: {
                  clients: { n: 4, c: xt, r: !0, q: !0 },
                  payments: { n: 5, c: kt, r: !0, q: !0 },
                },
              }),
            Wt.sm_m
          );
        }
        static MBF() {
          return Wt.sm_mbf || (Wt.sm_mbf = Y(Wt.M())), Wt.sm_mbf;
        }
        toObject(e = !1) {
          return Wt.toObject(e, this);
        }
        static toObject(e, t) {
          return J(Wt.M(), e, t);
        }
        static fromObject(e) {
          return Z(Wt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new Wt();
          return Wt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(Wt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return Wt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(Wt.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return Wt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "SiteServerUI_ClientStatus_Response";
        }
      }
      class xt extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            xt.prototype.ip || re(xt.M()),
            $.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            xt.sm_m ||
              (xt.sm_m = {
                proto: xt,
                fields: {
                  ip: { n: 1, br: Q.readUint32, bw: X.writeUint32 },
                  hostname: { n: 2, br: Q.readString, bw: X.writeString },
                  connected: { n: 3, br: Q.readBool, bw: X.writeBool },
                  instance_id: {
                    n: 4,
                    br: Q.readUint64String,
                    bw: X.writeUint64String,
                  },
                },
              }),
            xt.sm_m
          );
        }
        static MBF() {
          return xt.sm_mbf || (xt.sm_mbf = Y(xt.M())), xt.sm_mbf;
        }
        toObject(e = !1) {
          return xt.toObject(e, this);
        }
        static toObject(e, t) {
          return J(xt.M(), e, t);
        }
        static fromObject(e) {
          return Z(xt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new xt();
          return xt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(xt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return xt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(xt.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return xt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "SiteServerUI_ClientStatus_Response_ClientInfo";
        }
      }
      class kt extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            kt.prototype.transid || re(kt.M()),
            $.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            kt.sm_m ||
              (kt.sm_m = {
                proto: kt,
                fields: {
                  transid: {
                    n: 1,
                    br: Q.readUint64String,
                    bw: X.writeUint64String,
                  },
                  steamid: {
                    n: 2,
                    br: Q.readUint64String,
                    bw: X.writeUint64String,
                  },
                  amount: { n: 3, br: Q.readString, bw: X.writeString },
                  time_created: { n: 4, br: Q.readInt32, bw: X.writeInt32 },
                  purchase_status: { n: 5, br: Q.readInt32, bw: X.writeInt32 },
                  hostname: { n: 6, br: Q.readString, bw: X.writeString },
                  persona_name: { n: 7, br: Q.readString, bw: X.writeString },
                  profile_url: { n: 8, br: Q.readString, bw: X.writeString },
                  avatar_url: { n: 9, br: Q.readString, bw: X.writeString },
                },
              }),
            kt.sm_m
          );
        }
        static MBF() {
          return kt.sm_mbf || (kt.sm_mbf = Y(kt.M())), kt.sm_mbf;
        }
        toObject(e = !1) {
          return kt.toObject(e, this);
        }
        static toObject(e, t) {
          return J(kt.M(), e, t);
        }
        static fromObject(e) {
          return Z(kt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new kt();
          return kt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(kt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return kt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(kt.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return kt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "SiteServerUI_ClientStatus_Response_Payment";
        }
      }
      class Ot extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), $.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Ot.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Ot();
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new Ot();
          return Ot.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return Ot.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return Ot.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "SiteServerUI_ContentCacheStatus_Request";
        }
      }
      class Et extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Et.prototype.enabled || re(Et.M()),
            $.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Et.sm_m ||
              (Et.sm_m = {
                proto: Et,
                fields: {
                  enabled: { n: 1, br: Q.readBool, bw: X.writeBool },
                  port: { n: 2, br: Q.readUint32, bw: X.writeUint32 },
                  cache_location: { n: 3, br: Q.readString, bw: X.writeString },
                  max_size_gb: { n: 4, br: Q.readUint32, bw: X.writeUint32 },
                  p2p_enabled: { n: 5, br: Q.readBool, bw: X.writeBool },
                  explicit_ip_address: {
                    n: 9,
                    br: Q.readString,
                    bw: X.writeString,
                  },
                  external_process: { n: 10, br: Q.readBool, bw: X.writeBool },
                  current_size_gb: {
                    n: 6,
                    br: Q.readUint32,
                    bw: X.writeUint32,
                  },
                  current_bw: {
                    n: 7,
                    br: Q.readUint64String,
                    bw: X.writeUint64String,
                  },
                  total_bytes_served: {
                    n: 8,
                    br: Q.readUint64String,
                    bw: X.writeUint64String,
                  },
                },
              }),
            Et.sm_m
          );
        }
        static MBF() {
          return Et.sm_mbf || (Et.sm_mbf = Y(Et.M())), Et.sm_mbf;
        }
        toObject(e = !1) {
          return Et.toObject(e, this);
        }
        static toObject(e, t) {
          return J(Et.M(), e, t);
        }
        static fromObject(e) {
          return Z(Et.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new Et();
          return Et.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(Et.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return Et.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(Et.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return Et.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "SiteServerUI_ContentCacheStatus_Response";
        }
      }
      class Nt extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Nt.prototype.enabled || re(Nt.M()),
            $.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Nt.sm_m ||
              (Nt.sm_m = {
                proto: Nt,
                fields: {
                  enabled: { n: 1, br: Q.readBool, bw: X.writeBool },
                  port: { n: 2, br: Q.readUint32, bw: X.writeUint32 },
                  cache_location: { n: 3, br: Q.readString, bw: X.writeString },
                  max_size_gb: { n: 4, br: Q.readUint32, bw: X.writeUint32 },
                  p2p_enabled: { n: 5, br: Q.readBool, bw: X.writeBool },
                  external_process: { n: 6, br: Q.readBool, bw: X.writeBool },
                  explicit_ip_address: {
                    n: 7,
                    br: Q.readString,
                    bw: X.writeString,
                  },
                },
              }),
            Nt.sm_m
          );
        }
        static MBF() {
          return Nt.sm_mbf || (Nt.sm_mbf = Y(Nt.M())), Nt.sm_mbf;
        }
        toObject(e = !1) {
          return Nt.toObject(e, this);
        }
        static toObject(e, t) {
          return J(Nt.M(), e, t);
        }
        static fromObject(e) {
          return Z(Nt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new Nt();
          return Nt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(Nt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return Nt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(Nt.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return Nt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "SiteServerUI_ContentCacheConfig_Request";
        }
      }
      class Pt extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), $.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Pt.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Pt();
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new Pt();
          return Pt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return Pt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return Pt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "SiteServerUI_ContentCacheConfig_Response";
        }
      }
      var Ut = r(1944),
        At = r(1735),
        Lt = r.n(At);
      class Gt {
        m_eView = 0;
        m_bShutDown = !1;
        m_bConnected = !1;
        m_strLanguage = "None";
        m_bCacheState = !1;
        m_eAcctStatus = 0;
        m_vecModals = [];
        m_bClientsConnected = !1;
        m_bSteamCmd = !1;
        m_unModalNextKey = 0;
        constructor() {
          (0, q.Gn)(this);
        }
        get view() {
          return this.m_eView;
        }
        SetView(e) {
          this.m_eView = e;
        }
        get shutdown() {
          return this.m_bShutDown;
        }
        SetShutdown() {
          this.m_bShutDown = !0;
        }
        get connected() {
          return this.m_bConnected;
        }
        SetConnection(e) {
          this.m_bConnected = e;
        }
        get language() {
          return this.m_strLanguage;
        }
        SetLanguage(e) {
          this.m_strLanguage = e;
        }
        get cacheEnabled() {
          return this.m_bCacheState;
        }
        SetCacheState(e) {
          this.m_bCacheState = e;
        }
        get acctStatus() {
          return this.m_eAcctStatus;
        }
        SetAcctStatus(e) {
          this.m_eAcctStatus = e;
        }
        get clientsHaveConnected() {
          return this.m_bClientsConnected;
        }
        SetClientsConnected(e) {
          this.m_bClientsConnected = e;
        }
        get steamcmdConnected() {
          return this.m_bSteamCmd;
        }
        SetSteamcmdConnected(e) {
          this.m_bSteamCmd = e;
        }
        get activeModal() {
          return 0 != this.m_vecModals.length
            ? this.m_vecModals[this.m_vecModals.length - 1]
            : null;
        }
        ShowModal(e) {
          let t = { handle: null },
            r = (0, q.XI)(() => {
              let e = this.m_vecModals.indexOf(t.handle);
              e >= 0 && this.m_vecModals.splice(e, 1);
            }),
            i = this.m_unModalNextKey++,
            n = o.cloneElement(e, { closeModal: r, key: i });
          this.m_vecModals.push(n),
            (t.handle = this.m_vecModals[this.m_vecModals.length - 1]);
        }
      }
      (0, a.Cg)([q.sH], Gt.prototype, "m_eView", void 0),
        (0, a.Cg)([q.sH], Gt.prototype, "m_bShutDown", void 0),
        (0, a.Cg)([q.sH], Gt.prototype, "m_bConnected", void 0),
        (0, a.Cg)([q.sH], Gt.prototype, "m_strLanguage", void 0),
        (0, a.Cg)([q.sH], Gt.prototype, "m_bCacheState", void 0),
        (0, a.Cg)([q.sH], Gt.prototype, "m_eAcctStatus", void 0),
        (0, a.Cg)([q.sH.shallow], Gt.prototype, "m_vecModals", void 0),
        (0, a.Cg)([q.sH], Gt.prototype, "m_bClientsConnected", void 0),
        (0, a.Cg)([q.sH], Gt.prototype, "m_bSteamCmd", void 0),
        (0, a.Cg)([q.EW], Gt.prototype, "view", null),
        (0, a.Cg)([q.XI.bound], Gt.prototype, "SetView", null),
        (0, a.Cg)([q.EW], Gt.prototype, "shutdown", null),
        (0, a.Cg)([H], Gt.prototype, "SetShutdown", null),
        (0, a.Cg)([q.EW], Gt.prototype, "connected", null),
        (0, a.Cg)([q.XI.bound], Gt.prototype, "SetConnection", null),
        (0, a.Cg)([q.EW], Gt.prototype, "language", null),
        (0, a.Cg)([q.XI.bound], Gt.prototype, "SetLanguage", null),
        (0, a.Cg)([q.EW], Gt.prototype, "cacheEnabled", null),
        (0, a.Cg)([q.XI.bound], Gt.prototype, "SetCacheState", null),
        (0, a.Cg)([q.EW], Gt.prototype, "acctStatus", null),
        (0, a.Cg)([q.XI.bound], Gt.prototype, "SetAcctStatus", null),
        (0, a.Cg)([q.EW], Gt.prototype, "clientsHaveConnected", null),
        (0, a.Cg)([q.XI.bound], Gt.prototype, "SetClientsConnected", null),
        (0, a.Cg)([q.EW], Gt.prototype, "steamcmdConnected", null),
        (0, a.Cg)([q.XI.bound], Gt.prototype, "SetSteamcmdConnected", null),
        (0, a.Cg)([q.EW], Gt.prototype, "activeModal", null),
        (0, a.Cg)([q.XI], Gt.prototype, "ShowModal", null);
      const Dt = new Gt();
      window.uiStore = Dt;
      class qt {
        m_ServiceTransport;
        m_strBaseURL;
        constructor() {
          this.m_strBaseURL = "http://localhost:" + String(27100) + "/";
        }
        Login(e) {
          return this.SendMsgAndAwaitResponse(e, pt, 1, "login");
        }
        GetLoginStatus(e) {
          return this.SendMsgAndAwaitResponse(e, ht, 0, "loginstatus");
        }
        CancelLogin(e) {
          return this.SendMsgAndAwaitResponse(e, yt, 1, "cancellogin");
        }
        Logout(e) {
          return this.SendMsgAndAwaitResponse(e, St, 1, "logout");
        }
        Quit(e) {
          return this.SendMsgAndAwaitResponse(e, zt, 1, "quit");
        }
        GetStatus(e) {
          return this.SendMsgAndAwaitResponse(e, Rt, 0, "status");
        }
        GetLanguage(e) {
          return this.SendMsgAndAwaitResponse(e, vt, 0, "language");
        }
        SetLanguage(e) {
          return this.SendMsgAndAwaitResponse(e, It, 1, "language");
        }
        GetClientStatus(e) {
          return this.SendMsgAndAwaitResponse(e, Wt, 0, "clientstatus");
        }
        GetContentCacheStatus(e) {
          return this.SendMsgAndAwaitResponse(e, Et, 0, "cachestatus");
        }
        UpdateCacheConfig(e) {
          return this.SendMsgAndAwaitResponse(e, Pt, 1, "cacheconfig");
        }
        async SendMsgAndAwaitResponse(e, t, r, i) {
          let n = null;
          try {
            let s = await this.Send(e, r, i);
            if (200 != s.status || !s.data) throw new Error("Request Error");
            let a = new mt(s.data);
            (n = _t.Init(t)),
              n.Hdr().set_eresult(2),
              s.headers &&
                (s.headers["x-eresult"] &&
                  n.Hdr().set_eresult(s.headers["x-eresult"]),
                s.headers["x-error_message"] &&
                  n.Hdr().set_error_message(s.headers["x-error_message"]));
            let o = new $.BinaryReader(
              a.GetPacket(),
              a.TellGet(),
              a.GetCountBytesRemaining(),
            );
            t.deserializeBinaryFromReader(n.Body(), o),
              Dt.SetSteamcmdConnected(!0);
          } catch (e) {
            n = this.CreateFailedMsgProtobuf(t, 3, null);
          }
          return n;
        }
        Send(e, t, r) {
          let i = this.CreateWebAPIURL(r),
            n = e.SerializeBody(),
            s = Ut.iI(n),
            a = { responseType: "arraybuffer", params: {} };
          if (1 === t) {
            const e = new FormData();
            return e.append("input_protobuf_encoded", s), Lt().post(i, e, a);
          }
          return (
            (a.params = { ...a.params, input_protobuf_encoded: s }),
            Lt().get(i, a)
          );
        }
        CreateWebAPIURL(e) {
          return this.m_strBaseURL + e;
        }
        CreateFailedMsgProtobuf(e, t, r) {
          let i = _t.Init(e);
          return (
            i.Hdr().set_eresult(2),
            i.Hdr().set_transport_error(t),
            r && i.Hdr().set_error_message(r),
            i
          );
        }
      }
      (0, a.Cg)([H], qt.prototype, "Login", null),
        (0, a.Cg)([H], qt.prototype, "GetLoginStatus", null),
        (0, a.Cg)([H], qt.prototype, "CancelLogin", null),
        (0, a.Cg)([H], qt.prototype, "Logout", null),
        (0, a.Cg)([H], qt.prototype, "Quit", null),
        (0, a.Cg)([H], qt.prototype, "GetStatus", null),
        (0, a.Cg)([H], qt.prototype, "GetLanguage", null),
        (0, a.Cg)([H], qt.prototype, "SetLanguage", null),
        (0, a.Cg)([H], qt.prototype, "GetClientStatus", null),
        (0, a.Cg)([H], qt.prototype, "GetContentCacheStatus", null),
        (0, a.Cg)([H], qt.prototype, "UpdateCacheConfig", null),
        (0, a.Cg)([H], qt.prototype, "SendMsgAndAwaitResponse", null),
        (0, a.Cg)([H], qt.prototype, "Send", null);
      const Ht = new qt();
      window.loginStore = Ht;
      class Vt {
        m_strAccountName = "";
        m_bUserHasCachedCredentials = !1;
        m_eLoginState = -1;
        m_eLoginResult = 1;
        m_strPassword = "";
        m_strSteamGuardCode = "";
        m_bRememberPassword = !1;
        constructor() {
          (0, q.Gn)(this);
        }
        get accountName() {
          return this.m_strAccountName;
        }
        get hasCachedCredentials() {
          return this.m_bUserHasCachedCredentials;
        }
        get loginState() {
          return this.m_eLoginState;
        }
        get loginResult() {
          return this.m_eLoginResult;
        }
        SetAccountAndPassword(e, t, r) {
          (this.m_strAccountName = e),
            (this.m_strPassword = t),
            (this.m_strSteamGuardCode = ""),
            (this.m_bRememberPassword = r);
        }
        SetSteamGuardCode(e) {
          this.m_strSteamGuardCode = e;
        }
        OnLoginStateChange(e, t, r) {
          (this.m_strAccountName = e),
            (this.m_eLoginState = t),
            (this.m_eLoginResult = r),
            5 == r &&
              this.m_bUserHasCachedCredentials &&
              (this.m_bUserHasCachedCredentials = !1);
        }
        SetLoginStatus(e, t) {
          this.OnLoginStateChange(this.m_strAccountName, e, t);
        }
        SetSteamCmdNotConnected() {
          this.OnLoginStateChange($t.accountName, 6, 2);
        }
        async StartLogin() {
          const e = _t.Init(gt);
          e.Body().set_username(this.m_strAccountName),
            e.Body().set_password(this.m_strPassword),
            e.Body().set_steamguardcode(this.m_strSteamGuardCode),
            e.Body().set_remember_password(this.m_bRememberPassword);
          const t = await Ht.Login(e);
          this.OnLoginStateChange(
            this.m_strAccountName,
            t.Body().logon_state(),
            t.Body().logon_eresult(),
          );
        }
        async UpdateLoginStatus() {
          const e = _t.Init(Bt),
            t = await Ht.GetLoginStatus(e);
          1 == t.Hdr().eresult()
            ? ((this.m_bUserHasCachedCredentials = t
                .Body()
                .cached_credentials()),
              this.OnLoginStateChange(
                t.Body().username(),
                t.Body().logon_state(),
                t.Body().logon_eresult(),
              ))
            : this.OnLoginStateChange(this.m_strAccountName, 6, 2);
        }
        async CancelLogin() {
          const e = _t.Init(wt),
            t = await Ht.CancelLogin(e);
          this.OnLoginStateChange(
            this.m_strAccountName,
            t.Body().logon_state(),
            t.Body().logon_eresult(),
          );
        }
        async StartLogout() {
          this.SetAccountAndPassword("", "", !1),
            (this.m_bUserHasCachedCredentials = !1),
            (this.m_bRememberPassword = !1);
          const e = _t.Init(ft),
            t = await Ht.Logout(e);
          this.OnLoginStateChange(
            "",
            t.Body().logon_state(),
            t.Body().logout_eresult(),
          );
        }
      }
      (0, a.Cg)([q.sH], Vt.prototype, "m_strAccountName", void 0),
        (0, a.Cg)([q.sH], Vt.prototype, "m_bUserHasCachedCredentials", void 0),
        (0, a.Cg)([q.sH], Vt.prototype, "m_eLoginState", void 0),
        (0, a.Cg)([q.sH], Vt.prototype, "m_eLoginResult", void 0),
        (0, a.Cg)([q.EW], Vt.prototype, "accountName", null),
        (0, a.Cg)([q.EW], Vt.prototype, "hasCachedCredentials", null),
        (0, a.Cg)([q.EW], Vt.prototype, "loginState", null),
        (0, a.Cg)([q.EW], Vt.prototype, "loginResult", null),
        (0, a.Cg)([q.XI.bound], Vt.prototype, "SetAccountAndPassword", null),
        (0, a.Cg)([H], Vt.prototype, "SetSteamGuardCode", null),
        (0, a.Cg)([q.XI.bound], Vt.prototype, "OnLoginStateChange", null),
        (0, a.Cg)([H], Vt.prototype, "SetLoginStatus", null),
        (0, a.Cg)([H], Vt.prototype, "SetSteamCmdNotConnected", null),
        (0, a.Cg)([H], Vt.prototype, "StartLogin", null),
        (0, a.Cg)([H], Vt.prototype, "UpdateLoginStatus", null),
        (0, a.Cg)([H], Vt.prototype, "CancelLogin", null),
        (0, a.Cg)([H], Vt.prototype, "StartLogout", null);
      const $t = new Vt();
      var Kt;
      (window.loginStore = $t),
        (function (e) {
          (e[(e.k_ESteamRealmUnknown = 0)] = "k_ESteamRealmUnknown"),
            (e[(e.k_ESteamRealmGlobal = 1)] = "k_ESteamRealmGlobal"),
            (e[(e.k_ESteamRealmChina = 2)] = "k_ESteamRealmChina");
        })(Kt || (Kt = {}));
      function Qt(e, t) {
        return (function (e, t) {
          const r = e.findIndex(t);
          return r >= 0 && (e.splice(r, 1), !0);
        })(e, (e) => t == e);
      }
      class Xt {
        m_vecCallbacks = [];
        Register(e) {
          this.m_vecCallbacks.push(e);
          return {
            Unregister: () => {
              Qt(this.m_vecCallbacks, e);
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
        static PromiseFromAny(e) {
          return new Promise((t) => {
            let r = [];
            const i = () => {
              r.forEach((e) => e.Unregister()), t();
            };
            for (const t of e) r.push(t.Register(i));
          });
        }
      }
      class Yt {
        SyncStore(e) {
          return this.Subscribe(e).Unsubscribe;
        }
        GetValue() {
          return this.Value;
        }
      }
      (0, a.Cg)([H], Yt.prototype, "SyncStore", null),
        (0, a.Cg)([H], Yt.prototype, "GetValue", null);
      (0, a.Cg)(
        [H],
        class {
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
        }.prototype,
        "ScheduledInternal",
        null,
      );
      (0, a.Cg)(
        [H],
        class {
          m_vecCallbacks = [];
          Push(e) {
            this.m_vecCallbacks.push(e);
          }
          PushArrayRemove(e, t) {
            this.m_vecCallbacks.push(() => Qt(e, t));
          }
          Unregister() {
            for (const e of this.m_vecCallbacks) e();
            this.m_vecCallbacks = [];
          }
          GetUnregisterFunc() {
            return this.Unregister;
          }
        }.prototype,
        "Unregister",
        null,
      );
      const Zt = new Set([
        "sc_schinese",
        "schinese",
        "tchinese",
        "japanese",
        "koreana",
        "thai",
        "arabic",
        "indonesian",
        "malay",
        "bulgarian",
        "czech",
        "danish",
        "german",
        "english",
        "spanish",
        "latam",
        "greek",
        "french",
        "italian",
        "hungarian",
        "dutch",
        "norwegian",
        "polish",
        "portuguese",
        "brazilian",
        "romanian",
        "russian",
        "finnish",
        "swedish",
        "turkish",
        "vietnamese",
        "ukrainian",
      ]);
      const Jt = new Map([
        ["en", "english"],
        ["de", "german"],
        ["fr", "french"],
        ["it", "italian"],
        ["ko", "koreana"],
        ["es-419", "latam"],
        ["es", "spanish"],
        ["zh", "schinese"],
        ["zh-cn", "schinese"],
        ["zh-tw", "tchinese"],
        ["ru", "russian"],
        ["ar", "arabic"],
        ["th", "thai"],
        ["ja", "japanese"],
        ["pt-br", "brazilian"],
        ["pt", "portuguese"],
        ["pl", "polish"],
        ["da", "danish"],
        ["nl", "dutch"],
        ["fi", "finnish"],
        ["nb", "norwegian"],
        ["no", "norwegian"],
        ["sv", "swedish"],
        ["hu", "hungarian"],
        ["cs", "czech"],
        ["ro", "romanian"],
        ["tr", "turkish"],
        ["bg", "bulgarian"],
        ["el", "greek"],
        ["uk", "ukrainian"],
        ["vn", "vietnamese"],
        ["vi", "vietnamese"],
        ["id", "indonesian"],
        ["ms", "malay"],
      ]);
      const er = new Map();
      for (const [e, t] of Jt.entries()) er.set(t, e);
      function tr(e) {
        if ("english" !== e)
          return "sc_schinese" === e ? "schinese" : "english";
      }
      er.set("sc_schinese", er.get("schinese")),
        er.set("korean", er.get("koreana"));
      function rr(e, ...t) {
        return 0 == t.length
          ? e
          : (e = e.replace(/%(?:(\d+)\$)?s/g, function (e, r) {
              if (r <= t.length && r >= 1) {
                const e = t[r - 1];
                return String(null == e ? "" : e);
              }
              return e;
            }));
      }
      let ir;
      ir ??= new Set();
      let nr = null;
      class sr extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            sr.prototype.title || re(sr.M()),
            $.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            sr.sm_m ||
              (sr.sm_m = {
                proto: sr,
                fields: {
                  title: { n: 1, br: Q.readString, bw: X.writeString },
                },
              }),
            sr.sm_m
          );
        }
        static MBF() {
          return sr.sm_mbf || (sr.sm_mbf = Y(sr.M())), sr.sm_mbf;
        }
        toObject(e = !1) {
          return sr.toObject(e, this);
        }
        static toObject(e, t) {
          return J(sr.M(), e, t);
        }
        static fromObject(e) {
          return Z(sr.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new sr();
          return sr.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(sr.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return sr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(sr.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return sr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "SteamAward_Localization";
        }
      }
      class ar extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ar.prototype.voteid || re(ar.M()),
            $.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ar.sm_m ||
              (ar.sm_m = {
                proto: ar,
                fields: {
                  voteid: { n: 1, br: Q.readInt32, bw: X.writeInt32 },
                  localization: { n: 2, c: sr },
                  award_year: { n: 3, br: Q.readInt32, bw: X.writeInt32 },
                },
              }),
            ar.sm_m
          );
        }
        static MBF() {
          return ar.sm_mbf || (ar.sm_mbf = Y(ar.M())), ar.sm_mbf;
        }
        toObject(e = !1) {
          return ar.toObject(e, this);
        }
        static toObject(e, t) {
          return J(ar.M(), e, t);
        }
        static fromObject(e) {
          return Z(ar.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new ar();
          return ar.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(ar.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return ar.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(ar.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return ar.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "SteamAward";
        }
      }
      class or extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            or.prototype.sale_filter || re(or.M()),
            $.Message.initialize(this, e, 0, -1, [3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            or.sm_m ||
              (or.sm_m = {
                proto: or,
                fields: {
                  sale_filter: { n: 1, c: lr },
                  content_hub_filter: { n: 2, c: cr },
                  store_filters: { n: 3, c: mr, r: !0, q: !0 },
                },
              }),
            or.sm_m
          );
        }
        static MBF() {
          return or.sm_mbf || (or.sm_mbf = Y(or.M())), or.sm_mbf;
        }
        toObject(e = !1) {
          return or.toObject(e, this);
        }
        static toObject(e, t) {
          return J(or.M(), e, t);
        }
        static fromObject(e) {
          return Z(or.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new or();
          return or.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(or.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return or.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(or.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return or.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStorePageFilter";
        }
      }
      class lr extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            lr.prototype.sale_tagid || re(lr.M()),
            $.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            lr.sm_m ||
              (lr.sm_m = {
                proto: lr,
                fields: {
                  sale_tagid: { n: 1, br: Q.readUint32, bw: X.writeUint32 },
                  creator_clan_account_id: {
                    n: 2,
                    br: Q.readUint32,
                    bw: X.writeUint32,
                  },
                },
              }),
            lr.sm_m
          );
        }
        static MBF() {
          return lr.sm_mbf || (lr.sm_mbf = Y(lr.M())), lr.sm_mbf;
        }
        toObject(e = !1) {
          return lr.toObject(e, this);
        }
        static toObject(e, t) {
          return J(lr.M(), e, t);
        }
        static fromObject(e) {
          return Z(lr.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new lr();
          return lr.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(lr.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return lr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(lr.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return lr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStorePageFilter_SalePageFilter";
        }
      }
      class cr extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            cr.prototype.hub_type || re(cr.M()),
            $.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            cr.sm_m ||
              (cr.sm_m = {
                proto: cr,
                fields: {
                  hub_type: { n: 1, br: Q.readString, bw: X.writeString },
                  hub_category: { n: 2, br: Q.readString, bw: X.writeString },
                  hub_tagid: { n: 3, br: Q.readUint32, bw: X.writeUint32 },
                  discount_filter: { n: 4, br: Q.readEnum, bw: X.writeEnum },
                  optin: { n: 5, c: ur },
                },
              }),
            cr.sm_m
          );
        }
        static MBF() {
          return cr.sm_mbf || (cr.sm_mbf = Y(cr.M())), cr.sm_mbf;
        }
        toObject(e = !1) {
          return cr.toObject(e, this);
        }
        static toObject(e, t) {
          return J(cr.M(), e, t);
        }
        static fromObject(e) {
          return Z(cr.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new cr();
          return cr.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(cr.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return cr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(cr.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return cr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStorePageFilter_ContentHubFilter";
        }
      }
      class ur extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ur.prototype.name || re(ur.M()),
            $.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ur.sm_m ||
              (ur.sm_m = {
                proto: ur,
                fields: {
                  name: { n: 1, br: Q.readString, bw: X.writeString },
                  optin_tagid: { n: 2, br: Q.readUint32, bw: X.writeUint32 },
                  prune_tagid: { n: 3, br: Q.readUint32, bw: X.writeUint32 },
                  optin_only: { n: 4, br: Q.readBool, bw: X.writeBool },
                },
              }),
            ur.sm_m
          );
        }
        static MBF() {
          return ur.sm_mbf || (ur.sm_mbf = Y(ur.M())), ur.sm_mbf;
        }
        toObject(e = !1) {
          return ur.toObject(e, this);
        }
        static toObject(e, t) {
          return J(ur.M(), e, t);
        }
        static fromObject(e) {
          return Z(ur.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new ur();
          return ur.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(ur.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return ur.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(ur.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return ur.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStorePageFilter_ContentHubFilter_OptInInfo";
        }
      }
      class mr extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            mr.prototype.filter_json || re(mr.M()),
            $.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            mr.sm_m ||
              (mr.sm_m = {
                proto: mr,
                fields: {
                  filter_json: { n: 1, br: Q.readString, bw: X.writeString },
                  cache_key: { n: 2, br: Q.readString, bw: X.writeString },
                },
              }),
            mr.sm_m
          );
        }
        static MBF() {
          return mr.sm_mbf || (mr.sm_mbf = Y(mr.M())), mr.sm_mbf;
        }
        toObject(e = !1) {
          return mr.toObject(e, this);
        }
        static toObject(e, t) {
          return J(mr.M(), e, t);
        }
        static fromObject(e) {
          return Z(mr.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new mr();
          return mr.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(mr.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return mr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(mr.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return mr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStorePageFilter_StoreFilter";
        }
      }
      class dr extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            dr.prototype.type || re(dr.M()),
            $.Message.initialize(this, e, 0, -1, [3, 9], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            dr.sm_m ||
              (dr.sm_m = {
                proto: dr,
                fields: {
                  type: { n: 1, br: Q.readString, bw: X.writeString },
                  rating: { n: 2, br: Q.readString, bw: X.writeString },
                  descriptors: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: Q.readString,
                    bw: X.writeRepeatedString,
                  },
                  interactive_elements: {
                    n: 4,
                    br: Q.readString,
                    bw: X.writeString,
                  },
                  agency: { n: 5, br: Q.readEnum, bw: X.writeEnum },
                  banned: { n: 6, br: Q.readBool, bw: X.writeBool },
                  esrb_online_music_not_rated: {
                    n: 7,
                    br: Q.readBool,
                    bw: X.writeBool,
                  },
                  esrb_online_interactions_not_rated: {
                    n: 8,
                    br: Q.readBool,
                    bw: X.writeBool,
                  },
                  survey_interactive_elements: {
                    n: 9,
                    r: !0,
                    q: !0,
                    br: Q.readEnum,
                    pbr: Q.readPackedEnum,
                    bw: X.writeRepeatedEnum,
                  },
                  required_age: { n: 10, br: Q.readInt32, bw: X.writeInt32 },
                  use_age_gate: { n: 11, br: Q.readBool, bw: X.writeBool },
                  image_url: { n: 20, br: Q.readString, bw: X.writeString },
                  image_target: { n: 21, br: Q.readString, bw: X.writeString },
                },
              }),
            dr.sm_m
          );
        }
        static MBF() {
          return dr.sm_mbf || (dr.sm_mbf = Y(dr.M())), dr.sm_mbf;
        }
        toObject(e = !1) {
          return dr.toObject(e, this);
        }
        static toObject(e, t) {
          return J(dr.M(), e, t);
        }
        static fromObject(e) {
          return Z(dr.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new dr();
          return dr.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(dr.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return dr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(dr.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return dr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreGameRating";
        }
      }
      class _r extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _r.prototype.item_type || re(_r.M()),
            $.Message.initialize(
              this,
              e,
              0,
              -1,
              [11, 12, 20, 21, 25, 41, 52, 71, 74],
              null,
            );
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _r.sm_m ||
              (_r.sm_m = {
                proto: _r,
                fields: {
                  item_type: { n: 1, br: Q.readEnum, bw: X.writeEnum },
                  id: { n: 2, br: Q.readUint32, bw: X.writeUint32 },
                  gid: {
                    n: 76,
                    br: Q.readFixed64String,
                    bw: X.writeFixed64String,
                  },
                  success: { n: 3, br: Q.readUint32, bw: X.writeUint32 },
                  visible: { n: 4, br: Q.readBool, bw: X.writeBool },
                  unvailable_for_country_restriction: {
                    n: 5,
                    br: Q.readBool,
                    bw: X.writeBool,
                  },
                  name: { n: 6, br: Q.readString, bw: X.writeString },
                  store_url_path: { n: 7, br: Q.readString, bw: X.writeString },
                  store_url_slug: { n: 8, br: Q.readString, bw: X.writeString },
                  appid: { n: 9, br: Q.readUint32, bw: X.writeUint32 },
                  type: { n: 10, br: Q.readEnum, bw: X.writeEnum },
                  included_types: {
                    n: 11,
                    r: !0,
                    q: !0,
                    br: Q.readEnum,
                    pbr: Q.readPackedEnum,
                    bw: X.writeRepeatedEnum,
                  },
                  included_appids: {
                    n: 12,
                    r: !0,
                    q: !0,
                    br: Q.readUint32,
                    pbr: Q.readPackedUint32,
                    bw: X.writeRepeatedUint32,
                  },
                  is_free: { n: 13, br: Q.readBool, bw: X.writeBool },
                  is_early_access: { n: 14, br: Q.readBool, bw: X.writeBool },
                  related_items: { n: 15, c: Br },
                  included_items: { n: 16, c: hr },
                  content_descriptorids: {
                    n: 20,
                    r: !0,
                    q: !0,
                    br: Q.readEnum,
                    pbr: Q.readPackedEnum,
                    bw: X.writeRepeatedEnum,
                  },
                  tagids: {
                    n: 21,
                    r: !0,
                    q: !0,
                    br: Q.readUint32,
                    pbr: Q.readPackedUint32,
                    bw: X.writeRepeatedUint32,
                  },
                  categories: { n: 22, c: wr },
                  reviews: { n: 23, c: yr },
                  basic_info: { n: 24, c: Sr },
                  tags: { n: 25, c: zr, r: !0, q: !0 },
                  assets: { n: 30, c: Cr },
                  release: { n: 31, c: Rr },
                  platforms: { n: 32, c: Fr },
                  game_rating: { n: 33, c: dr },
                  is_coming_soon: { n: 34, br: Q.readBool, bw: X.writeBool },
                  best_purchase_option: { n: 40, c: jr },
                  purchase_options: { n: 41, c: jr, r: !0, q: !0 },
                  self_purchase_option: { n: 43, c: jr },
                  screenshots: { n: 50, c: Wr },
                  trailers: { n: 51, c: kr },
                  supported_languages: { n: 52, c: Pr, r: !0, q: !0 },
                  store_url_path_override: {
                    n: 53,
                    br: Q.readString,
                    bw: X.writeString,
                  },
                  free_weekend: { n: 54, c: Ur },
                  unlisted: { n: 55, br: Q.readBool, bw: X.writeBool },
                  game_count: { n: 56, br: Q.readUint32, bw: X.writeUint32 },
                  internal_name: { n: 57, br: Q.readString, bw: X.writeString },
                  full_description_bbcode: {
                    n: 58,
                    br: Q.readString,
                    bw: X.writeString,
                  },
                  is_free_temporarily: {
                    n: 59,
                    br: Q.readBool,
                    bw: X.writeBool,
                  },
                  assets_without_overrides: { n: 60, c: Cr },
                  user_filter_failure: { n: 70, c: hi },
                  links: { n: 71, c: Ar, r: !0, q: !0 },
                  purchase_description_bbcode: {
                    n: 72,
                    br: Q.readString,
                    bw: X.writeString,
                  },
                  package_groups: { n: 74, c: Lr, r: !0, q: !0 },
                  extra_details: { n: 75, c: $r },
                },
              }),
            _r.sm_m
          );
        }
        static MBF() {
          return _r.sm_mbf || (_r.sm_mbf = Y(_r.M())), _r.sm_mbf;
        }
        toObject(e = !1) {
          return _r.toObject(e, this);
        }
        static toObject(e, t) {
          return J(_r.M(), e, t);
        }
        static fromObject(e) {
          return Z(_r.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new _r();
          return _r.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(_r.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return _r.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(_r.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return _r.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem";
        }
      }
      class br extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            br.prototype.appid || re(br.M()),
            $.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            br.sm_m ||
              (br.sm_m = {
                proto: br,
                fields: {
                  appid: { n: 1, br: Q.readUint32, bw: X.writeUint32 },
                  label: { n: 2, br: Q.readString, bw: X.writeString },
                  show_above_purchase: {
                    n: 3,
                    br: Q.readBool,
                    bw: X.writeBool,
                  },
                },
              }),
            br.sm_m
          );
        }
        static MBF() {
          return br.sm_mbf || (br.sm_mbf = Y(br.M())), br.sm_mbf;
        }
        toObject(e = !1) {
          return br.toObject(e, this);
        }
        static toObject(e, t) {
          return J(br.M(), e, t);
        }
        static fromObject(e) {
          return Z(br.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new br();
          return br.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(br.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return br.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(br.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return br.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_Demo";
        }
      }
      class gr extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            gr.prototype.appid || re(gr.M()),
            $.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            gr.sm_m ||
              (gr.sm_m = {
                proto: gr,
                fields: {
                  appid: { n: 1, br: Q.readUint32, bw: X.writeUint32 },
                  is_open: { n: 2, br: Q.readBool, bw: X.writeBool },
                },
              }),
            gr.sm_m
          );
        }
        static MBF() {
          return gr.sm_mbf || (gr.sm_mbf = Y(gr.M())), gr.sm_mbf;
        }
        toObject(e = !1) {
          return gr.toObject(e, this);
        }
        static toObject(e, t) {
          return J(gr.M(), e, t);
        }
        static fromObject(e) {
          return Z(gr.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new gr();
          return gr.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(gr.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return gr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(gr.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return gr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_Playtest";
        }
      }
      class pr extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            pr.prototype.appid || re(pr.M()),
            $.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            pr.sm_m ||
              (pr.sm_m = {
                proto: pr,
                fields: {
                  appid: { n: 1, br: Q.readUint32, bw: X.writeUint32 },
                  header_text: { n: 2, br: Q.readString, bw: X.writeString },
                  description_text: {
                    n: 3,
                    br: Q.readString,
                    bw: X.writeString,
                  },
                },
              }),
            pr.sm_m
          );
        }
        static MBF() {
          return pr.sm_mbf || (pr.sm_mbf = Y(pr.M())), pr.sm_mbf;
        }
        toObject(e = !1) {
          return pr.toObject(e, this);
        }
        static toObject(e, t) {
          return J(pr.M(), e, t);
        }
        static fromObject(e) {
          return Z(pr.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new pr();
          return pr.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(pr.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return pr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(pr.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return pr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_RelatedF2P";
        }
      }
      class Br extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Br.prototype.parent_appid || re(Br.M()),
            $.Message.initialize(this, e, 0, -1, [2, 3, 4, 5, 6, 9], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Br.sm_m ||
              (Br.sm_m = {
                proto: Br,
                fields: {
                  parent_appid: { n: 1, br: Q.readUint32, bw: X.writeUint32 },
                  demo_appid: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: Q.readUint32,
                    pbr: Q.readPackedUint32,
                    bw: X.writeRepeatedUint32,
                  },
                  standalone_demo_appid: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: Q.readUint32,
                    pbr: Q.readPackedUint32,
                    bw: X.writeRepeatedUint32,
                  },
                  demos: { n: 4, c: br, r: !0, q: !0 },
                  standalone_demos: { n: 5, c: br, r: !0, q: !0 },
                  playtests: { n: 6, c: gr, r: !0, q: !0 },
                  related_f2p: { n: 7, c: pr },
                  dlc_parent_appids: {
                    n: 9,
                    r: !0,
                    q: !0,
                    br: Q.readUint32,
                    pbr: Q.readPackedUint32,
                    bw: X.writeRepeatedUint32,
                  },
                },
              }),
            Br.sm_m
          );
        }
        static MBF() {
          return Br.sm_mbf || (Br.sm_mbf = Y(Br.M())), Br.sm_mbf;
        }
        toObject(e = !1) {
          return Br.toObject(e, this);
        }
        static toObject(e, t) {
          return J(Br.M(), e, t);
        }
        static fromObject(e) {
          return Z(Br.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new Br();
          return Br.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(Br.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return Br.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(Br.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return Br.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_RelatedItems";
        }
      }
      class hr extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            hr.prototype.included_apps || re(hr.M()),
            $.Message.initialize(this, e, 0, -1, [1, 2, 3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            hr.sm_m ||
              (hr.sm_m = {
                proto: hr,
                fields: {
                  included_apps: { n: 1, c: _r, r: !0, q: !0 },
                  included_packages: { n: 2, c: _r, r: !0, q: !0 },
                  included_bundles: { n: 3, c: _r, r: !0, q: !0 },
                },
              }),
            hr.sm_m
          );
        }
        static MBF() {
          return hr.sm_mbf || (hr.sm_mbf = Y(hr.M())), hr.sm_mbf;
        }
        toObject(e = !1) {
          return hr.toObject(e, this);
        }
        static toObject(e, t) {
          return J(hr.M(), e, t);
        }
        static fromObject(e) {
          return Z(hr.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new hr();
          return hr.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(hr.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return hr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(hr.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return hr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_IncludedItems";
        }
      }
      class wr extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            wr.prototype.supported_player_categoryids || re(wr.M()),
            $.Message.initialize(this, e, 0, -1, [2, 3, 4], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            wr.sm_m ||
              (wr.sm_m = {
                proto: wr,
                fields: {
                  supported_player_categoryids: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: Q.readUint32,
                    pbr: Q.readPackedUint32,
                    bw: X.writeRepeatedUint32,
                  },
                  feature_categoryids: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: Q.readUint32,
                    pbr: Q.readPackedUint32,
                    bw: X.writeRepeatedUint32,
                  },
                  controller_categoryids: {
                    n: 4,
                    r: !0,
                    q: !0,
                    br: Q.readUint32,
                    pbr: Q.readPackedUint32,
                    bw: X.writeRepeatedUint32,
                  },
                },
              }),
            wr.sm_m
          );
        }
        static MBF() {
          return wr.sm_mbf || (wr.sm_mbf = Y(wr.M())), wr.sm_mbf;
        }
        toObject(e = !1) {
          return wr.toObject(e, this);
        }
        static toObject(e, t) {
          return J(wr.M(), e, t);
        }
        static fromObject(e) {
          return Z(wr.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new wr();
          return wr.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(wr.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return wr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(wr.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return wr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_Categories";
        }
      }
      class yr extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            yr.prototype.summary_filtered || re(yr.M()),
            $.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            yr.sm_m ||
              (yr.sm_m = {
                proto: yr,
                fields: {
                  summary_filtered: { n: 1, c: fr },
                  summary_unfiltered: { n: 2, c: fr },
                  summary_language_specific: { n: 3, c: fr },
                },
              }),
            yr.sm_m
          );
        }
        static MBF() {
          return yr.sm_mbf || (yr.sm_mbf = Y(yr.M())), yr.sm_mbf;
        }
        toObject(e = !1) {
          return yr.toObject(e, this);
        }
        static toObject(e, t) {
          return J(yr.M(), e, t);
        }
        static fromObject(e) {
          return Z(yr.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new yr();
          return yr.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(yr.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return yr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(yr.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return yr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_Reviews";
        }
      }
      class fr extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            fr.prototype.review_count || re(fr.M()),
            $.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            fr.sm_m ||
              (fr.sm_m = {
                proto: fr,
                fields: {
                  review_count: { n: 1, br: Q.readUint32, bw: X.writeUint32 },
                  percent_positive: { n: 2, br: Q.readInt32, bw: X.writeInt32 },
                  review_score: { n: 3, br: Q.readEnum, bw: X.writeEnum },
                  review_score_label: {
                    n: 4,
                    br: Q.readString,
                    bw: X.writeString,
                  },
                },
              }),
            fr.sm_m
          );
        }
        static MBF() {
          return fr.sm_mbf || (fr.sm_mbf = Y(fr.M())), fr.sm_mbf;
        }
        toObject(e = !1) {
          return fr.toObject(e, this);
        }
        static toObject(e, t) {
          return J(fr.M(), e, t);
        }
        static fromObject(e) {
          return Z(fr.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new fr();
          return fr.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(fr.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return fr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(fr.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return fr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_Reviews_StoreReviewSummary";
        }
      }
      class Sr extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Sr.prototype.short_description || re(Sr.M()),
            $.Message.initialize(this, e, 0, -1, [2, 3, 4], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Sr.sm_m ||
              (Sr.sm_m = {
                proto: Sr,
                fields: {
                  short_description: {
                    n: 1,
                    br: Q.readString,
                    bw: X.writeString,
                  },
                  publishers: { n: 2, c: Mr, r: !0, q: !0 },
                  developers: { n: 3, c: Mr, r: !0, q: !0 },
                  franchises: { n: 4, c: Mr, r: !0, q: !0 },
                  capsule_headline: {
                    n: 5,
                    br: Q.readString,
                    bw: X.writeString,
                  },
                },
              }),
            Sr.sm_m
          );
        }
        static MBF() {
          return Sr.sm_mbf || (Sr.sm_mbf = Y(Sr.M())), Sr.sm_mbf;
        }
        toObject(e = !1) {
          return Sr.toObject(e, this);
        }
        static toObject(e, t) {
          return J(Sr.M(), e, t);
        }
        static fromObject(e) {
          return Z(Sr.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new Sr();
          return Sr.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(Sr.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return Sr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(Sr.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return Sr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_BasicInfo";
        }
      }
      class Mr extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Mr.prototype.name || re(Mr.M()),
            $.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Mr.sm_m ||
              (Mr.sm_m = {
                proto: Mr,
                fields: {
                  name: { n: 1, br: Q.readString, bw: X.writeString },
                  creator_clan_account_id: {
                    n: 2,
                    br: Q.readUint32,
                    bw: X.writeUint32,
                  },
                },
              }),
            Mr.sm_m
          );
        }
        static MBF() {
          return Mr.sm_mbf || (Mr.sm_mbf = Y(Mr.M())), Mr.sm_mbf;
        }
        toObject(e = !1) {
          return Mr.toObject(e, this);
        }
        static toObject(e, t) {
          return J(Mr.M(), e, t);
        }
        static fromObject(e) {
          return Z(Mr.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new Mr();
          return Mr.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(Mr.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return Mr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(Mr.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return Mr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_BasicInfo_CreatorHomeLink";
        }
      }
      class zr extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            zr.prototype.tagid || re(zr.M()),
            $.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            zr.sm_m ||
              (zr.sm_m = {
                proto: zr,
                fields: {
                  tagid: { n: 1, br: Q.readUint32, bw: X.writeUint32 },
                  weight: { n: 2, br: Q.readUint32, bw: X.writeUint32 },
                },
              }),
            zr.sm_m
          );
        }
        static MBF() {
          return zr.sm_mbf || (zr.sm_mbf = Y(zr.M())), zr.sm_mbf;
        }
        toObject(e = !1) {
          return zr.toObject(e, this);
        }
        static toObject(e, t) {
          return J(zr.M(), e, t);
        }
        static fromObject(e) {
          return Z(zr.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new zr();
          return zr.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(zr.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return zr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(zr.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return zr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_Tag";
        }
      }
      class Cr extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Cr.prototype.asset_url_format || re(Cr.M()),
            $.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Cr.sm_m ||
              (Cr.sm_m = {
                proto: Cr,
                fields: {
                  asset_url_format: {
                    n: 1,
                    br: Q.readString,
                    bw: X.writeString,
                  },
                  main_capsule: { n: 2, br: Q.readString, bw: X.writeString },
                  main_capsule_2x: {
                    n: 18,
                    br: Q.readString,
                    bw: X.writeString,
                  },
                  small_capsule: { n: 3, br: Q.readString, bw: X.writeString },
                  small_capsule_2x: {
                    n: 19,
                    br: Q.readString,
                    bw: X.writeString,
                  },
                  header: { n: 4, br: Q.readString, bw: X.writeString },
                  header_2x: { n: 20, br: Q.readString, bw: X.writeString },
                  package_header: { n: 5, br: Q.readString, bw: X.writeString },
                  page_background: {
                    n: 6,
                    br: Q.readString,
                    bw: X.writeString,
                  },
                  hero_capsule: { n: 7, br: Q.readString, bw: X.writeString },
                  hero_capsule_2x: {
                    n: 8,
                    br: Q.readString,
                    bw: X.writeString,
                  },
                  library_capsule: {
                    n: 9,
                    br: Q.readString,
                    bw: X.writeString,
                  },
                  library_capsule_2x: {
                    n: 10,
                    br: Q.readString,
                    bw: X.writeString,
                  },
                  library_hero: { n: 11, br: Q.readString, bw: X.writeString },
                  library_hero_2x: {
                    n: 12,
                    br: Q.readString,
                    bw: X.writeString,
                  },
                  community_icon: {
                    n: 13,
                    br: Q.readString,
                    bw: X.writeString,
                  },
                  clan_avatar: { n: 14, br: Q.readString, bw: X.writeString },
                  page_background_path: {
                    n: 15,
                    br: Q.readString,
                    bw: X.writeString,
                  },
                  raw_page_background: {
                    n: 16,
                    br: Q.readString,
                    bw: X.writeString,
                  },
                  edition_comparison: {
                    n: 17,
                    br: Q.readString,
                    bw: X.writeString,
                  },
                  last_modified: { n: 21, br: Q.readUint32, bw: X.writeUint32 },
                },
              }),
            Cr.sm_m
          );
        }
        static MBF() {
          return Cr.sm_mbf || (Cr.sm_mbf = Y(Cr.M())), Cr.sm_mbf;
        }
        toObject(e = !1) {
          return Cr.toObject(e, this);
        }
        static toObject(e, t) {
          return J(Cr.M(), e, t);
        }
        static fromObject(e) {
          return Z(Cr.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new Cr();
          return Cr.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(Cr.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return Cr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(Cr.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return Cr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_Assets";
        }
      }
      class Rr extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Rr.prototype.steam_release_date || re(Rr.M()),
            $.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Rr.sm_m ||
              (Rr.sm_m = {
                proto: Rr,
                fields: {
                  steam_release_date: {
                    n: 1,
                    br: Q.readUint32,
                    bw: X.writeUint32,
                  },
                  original_release_date: {
                    n: 2,
                    br: Q.readUint32,
                    bw: X.writeUint32,
                  },
                  original_steam_release_date: {
                    n: 3,
                    br: Q.readUint32,
                    bw: X.writeUint32,
                  },
                  release_from_early_access_date: {
                    n: 11,
                    br: Q.readUint32,
                    bw: X.writeUint32,
                  },
                  release_from_early_access_style: {
                    n: 12,
                    br: Q.readUint32,
                    bw: X.writeUint32,
                  },
                  is_coming_soon: { n: 4, br: Q.readBool, bw: X.writeBool },
                  is_preload: { n: 5, br: Q.readBool, bw: X.writeBool },
                  custom_release_date_message: {
                    n: 6,
                    br: Q.readString,
                    bw: X.writeString,
                  },
                  is_abridged_release_date: {
                    n: 7,
                    br: Q.readBool,
                    bw: X.writeBool,
                  },
                  coming_soon_display: {
                    n: 8,
                    br: Q.readString,
                    bw: X.writeString,
                  },
                  is_early_access: { n: 10, br: Q.readBool, bw: X.writeBool },
                  mac_release_date: {
                    n: 20,
                    br: Q.readUint32,
                    bw: X.writeUint32,
                  },
                  linux_release_date: {
                    n: 21,
                    br: Q.readUint32,
                    bw: X.writeUint32,
                  },
                  limited_launch_active: {
                    n: 22,
                    br: Q.readBool,
                    bw: X.writeBool,
                  },
                  advance_access_date: {
                    n: 23,
                    br: Q.readUint32,
                    bw: X.writeUint32,
                  },
                },
              }),
            Rr.sm_m
          );
        }
        static MBF() {
          return Rr.sm_mbf || (Rr.sm_mbf = Y(Rr.M())), Rr.sm_mbf;
        }
        toObject(e = !1) {
          return Rr.toObject(e, this);
        }
        static toObject(e, t) {
          return J(Rr.M(), e, t);
        }
        static fromObject(e) {
          return Z(Rr.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new Rr();
          return Rr.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(Rr.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return Rr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(Rr.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return Rr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_ReleaseInfo";
        }
      }
      class Fr extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Fr.prototype.windows || re(Fr.M()),
            $.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Fr.sm_m ||
              (Fr.sm_m = {
                proto: Fr,
                fields: {
                  windows: { n: 1, br: Q.readBool, bw: X.writeBool },
                  mac: { n: 2, br: Q.readBool, bw: X.writeBool },
                  steamos_linux: { n: 3, br: Q.readBool, bw: X.writeBool },
                  vr_support: { n: 10, c: vr },
                  steam_deck_compat_category: {
                    n: 11,
                    br: Q.readEnum,
                    bw: X.writeEnum,
                  },
                  steam_os_compat_category: {
                    n: 12,
                    br: Q.readEnum,
                    bw: X.writeEnum,
                  },
                  steam_frame_compat_category: {
                    n: 13,
                    br: Q.readEnum,
                    bw: X.writeEnum,
                  },
                  steam_machine_compat_category: {
                    n: 14,
                    br: Q.readEnum,
                    bw: X.writeEnum,
                  },
                },
              }),
            Fr.sm_m
          );
        }
        static MBF() {
          return Fr.sm_mbf || (Fr.sm_mbf = Y(Fr.M())), Fr.sm_mbf;
        }
        toObject(e = !1) {
          return Fr.toObject(e, this);
        }
        static toObject(e, t) {
          return J(Fr.M(), e, t);
        }
        static fromObject(e) {
          return Z(Fr.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new Fr();
          return Fr.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(Fr.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return Fr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(Fr.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return Fr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_Platforms";
        }
      }
      class vr extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            vr.prototype.vrhmd || re(vr.M()),
            $.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            vr.sm_m ||
              (vr.sm_m = {
                proto: vr,
                fields: {
                  vrhmd: { n: 1, br: Q.readBool, bw: X.writeBool },
                  vrhmd_only: { n: 2, br: Q.readBool, bw: X.writeBool },
                  htc_vive: { n: 40, br: Q.readBool, bw: X.writeBool },
                  oculus_rift: { n: 41, br: Q.readBool, bw: X.writeBool },
                  windows_mr: { n: 42, br: Q.readBool, bw: X.writeBool },
                  valve_index: { n: 43, br: Q.readBool, bw: X.writeBool },
                },
              }),
            vr.sm_m
          );
        }
        static MBF() {
          return vr.sm_mbf || (vr.sm_mbf = Y(vr.M())), vr.sm_mbf;
        }
        toObject(e = !1) {
          return vr.toObject(e, this);
        }
        static toObject(e, t) {
          return J(vr.M(), e, t);
        }
        static fromObject(e) {
          return Z(vr.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new vr();
          return vr.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(vr.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return vr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(vr.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return vr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_Platforms_VRSupport";
        }
      }
      class jr extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            jr.prototype.packageid || re(jr.M()),
            $.Message.initialize(this, e, 0, -1, [20], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            jr.sm_m ||
              (jr.sm_m = {
                proto: jr,
                fields: {
                  packageid: { n: 1, br: Q.readInt32, bw: X.writeInt32 },
                  bundleid: { n: 2, br: Q.readInt32, bw: X.writeInt32 },
                  purchase_option_name: {
                    n: 3,
                    br: Q.readString,
                    bw: X.writeString,
                  },
                  final_price_in_cents: {
                    n: 5,
                    br: Q.readInt64String,
                    bw: X.writeInt64String,
                  },
                  original_price_in_cents: {
                    n: 6,
                    br: Q.readInt64String,
                    bw: X.writeInt64String,
                  },
                  formatted_final_price: {
                    n: 8,
                    br: Q.readString,
                    bw: X.writeString,
                  },
                  formatted_original_price: {
                    n: 9,
                    br: Q.readString,
                    bw: X.writeString,
                  },
                  discount_pct: { n: 10, br: Q.readInt32, bw: X.writeInt32 },
                  bundle_discount_pct: {
                    n: 12,
                    br: Q.readInt32,
                    bw: X.writeInt32,
                  },
                  is_free_to_keep: { n: 13, br: Q.readBool, bw: X.writeBool },
                  price_before_bundle_discount: {
                    n: 14,
                    br: Q.readInt64String,
                    bw: X.writeInt64String,
                  },
                  formatted_price_before_bundle_discount: {
                    n: 15,
                    br: Q.readString,
                    bw: X.writeString,
                  },
                  active_discounts: { n: 20, c: Ir, r: !0, q: !0 },
                  user_can_purchase_as_gift: {
                    n: 31,
                    br: Q.readBool,
                    bw: X.writeBool,
                  },
                  is_commercial_license: {
                    n: 40,
                    br: Q.readBool,
                    bw: X.writeBool,
                  },
                  should_suppress_discount_pct: {
                    n: 41,
                    br: Q.readBool,
                    bw: X.writeBool,
                  },
                  hide_discount_pct_for_compliance: {
                    n: 42,
                    d: !1,
                    br: Q.readBool,
                    bw: X.writeBool,
                  },
                  included_game_count: {
                    n: 43,
                    d: 1,
                    br: Q.readInt32,
                    bw: X.writeInt32,
                  },
                  lowest_recent_price_in_cents: {
                    n: 44,
                    br: Q.readInt64String,
                    bw: X.writeInt64String,
                  },
                  requires_shipping: { n: 45, br: Q.readBool, bw: X.writeBool },
                  recurrence_info: { n: 46, c: Tr },
                  free_to_keep_ends: {
                    n: 47,
                    br: Q.readUint32,
                    bw: X.writeUint32,
                  },
                  must_purchase_as_set: {
                    n: 48,
                    d: !1,
                    br: Q.readBool,
                    bw: X.writeBool,
                  },
                  package_group: {
                    n: 49,
                    d: "default",
                    br: Q.readString,
                    bw: X.writeString,
                  },
                  is_edition: { n: 50, br: Q.readBool, bw: X.writeBool },
                  free_to_keep_base_package: {
                    n: 51,
                    br: Q.readUint32,
                    bw: X.writeUint32,
                  },
                  price_cannot_be_displayed_as_discount: {
                    n: 52,
                    d: !1,
                    br: Q.readBool,
                    bw: X.writeBool,
                  },
                  price_to_base_discount_on: {
                    n: 53,
                    br: Q.readInt64String,
                    bw: X.writeInt64String,
                  },
                  free_with_master_sub_appid: {
                    n: 54,
                    br: Q.readUint32,
                    bw: X.writeUint32,
                  },
                  formatted_lowest_recent_price: {
                    n: 55,
                    br: Q.readString,
                    bw: X.writeString,
                  },
                },
              }),
            jr.sm_m
          );
        }
        static MBF() {
          return jr.sm_mbf || (jr.sm_mbf = Y(jr.M())), jr.sm_mbf;
        }
        toObject(e = !1) {
          return jr.toObject(e, this);
        }
        static toObject(e, t) {
          return J(jr.M(), e, t);
        }
        static fromObject(e) {
          return Z(jr.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new jr();
          return jr.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(jr.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return jr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(jr.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return jr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_PurchaseOption";
        }
      }
      class Ir extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ir.prototype.discount_amount || re(Ir.M()),
            $.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ir.sm_m ||
              (Ir.sm_m = {
                proto: Ir,
                fields: {
                  discount_amount: {
                    n: 1,
                    br: Q.readInt64String,
                    bw: X.writeInt64String,
                  },
                  discount_description: {
                    n: 2,
                    br: Q.readString,
                    bw: X.writeString,
                  },
                  discount_end_date: {
                    n: 3,
                    br: Q.readUint32,
                    bw: X.writeUint32,
                  },
                  master_sub_appid: {
                    n: 4,
                    br: Q.readUint32,
                    bw: X.writeUint32,
                  },
                },
              }),
            Ir.sm_m
          );
        }
        static MBF() {
          return Ir.sm_mbf || (Ir.sm_mbf = Y(Ir.M())), Ir.sm_mbf;
        }
        toObject(e = !1) {
          return Ir.toObject(e, this);
        }
        static toObject(e, t) {
          return J(Ir.M(), e, t);
        }
        static fromObject(e) {
          return Z(Ir.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new Ir();
          return Ir.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(Ir.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return Ir.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(Ir.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return Ir.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_PurchaseOption_Discount";
        }
      }
      class Tr extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Tr.prototype.packageid || re(Tr.M()),
            $.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Tr.sm_m ||
              (Tr.sm_m = {
                proto: Tr,
                fields: {
                  packageid: { n: 1, br: Q.readInt32, bw: X.writeInt32 },
                  billing_agreement_type: {
                    n: 2,
                    br: Q.readInt32,
                    bw: X.writeInt32,
                  },
                  renewal_time_unit: {
                    n: 3,
                    br: Q.readInt32,
                    bw: X.writeInt32,
                  },
                  renewal_time_period: {
                    n: 4,
                    br: Q.readInt32,
                    bw: X.writeInt32,
                  },
                  renewal_price_in_cents: {
                    n: 5,
                    br: Q.readInt64String,
                    bw: X.writeInt64String,
                  },
                  formatted_renewal_price: {
                    n: 6,
                    br: Q.readString,
                    bw: X.writeString,
                  },
                },
              }),
            Tr.sm_m
          );
        }
        static MBF() {
          return Tr.sm_mbf || (Tr.sm_mbf = Y(Tr.M())), Tr.sm_mbf;
        }
        toObject(e = !1) {
          return Tr.toObject(e, this);
        }
        static toObject(e, t) {
          return J(Tr.M(), e, t);
        }
        static fromObject(e) {
          return Z(Tr.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new Tr();
          return Tr.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(Tr.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return Tr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(Tr.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return Tr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_PurchaseOption_RecurrenceInfo";
        }
      }
      class Wr extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Wr.prototype.all_ages_screenshots || re(Wr.M()),
            $.Message.initialize(this, e, 0, -1, [2, 3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Wr.sm_m ||
              (Wr.sm_m = {
                proto: Wr,
                fields: {
                  all_ages_screenshots: { n: 2, c: xr, r: !0, q: !0 },
                  mature_content_screenshots: { n: 3, c: xr, r: !0, q: !0 },
                },
              }),
            Wr.sm_m
          );
        }
        static MBF() {
          return Wr.sm_mbf || (Wr.sm_mbf = Y(Wr.M())), Wr.sm_mbf;
        }
        toObject(e = !1) {
          return Wr.toObject(e, this);
        }
        static toObject(e, t) {
          return J(Wr.M(), e, t);
        }
        static fromObject(e) {
          return Z(Wr.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new Wr();
          return Wr.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(Wr.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return Wr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(Wr.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return Wr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_Screenshots";
        }
      }
      class xr extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            xr.prototype.filename || re(xr.M()),
            $.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            xr.sm_m ||
              (xr.sm_m = {
                proto: xr,
                fields: {
                  filename: { n: 1, br: Q.readString, bw: X.writeString },
                  ordinal: { n: 2, br: Q.readInt32, bw: X.writeInt32 },
                },
              }),
            xr.sm_m
          );
        }
        static MBF() {
          return xr.sm_mbf || (xr.sm_mbf = Y(xr.M())), xr.sm_mbf;
        }
        toObject(e = !1) {
          return xr.toObject(e, this);
        }
        static toObject(e, t) {
          return J(xr.M(), e, t);
        }
        static fromObject(e) {
          return Z(xr.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new xr();
          return xr.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(xr.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return xr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(xr.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return xr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_Screenshots_Screenshot";
        }
      }
      class kr extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            kr.prototype.highlights || re(kr.M()),
            $.Message.initialize(this, e, 0, -1, [1, 2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            kr.sm_m ||
              (kr.sm_m = {
                proto: kr,
                fields: {
                  highlights: { n: 1, c: Nr, r: !0, q: !0 },
                  other_trailers: { n: 2, c: Nr, r: !0, q: !0 },
                },
              }),
            kr.sm_m
          );
        }
        static MBF() {
          return kr.sm_mbf || (kr.sm_mbf = Y(kr.M())), kr.sm_mbf;
        }
        toObject(e = !1) {
          return kr.toObject(e, this);
        }
        static toObject(e, t) {
          return J(kr.M(), e, t);
        }
        static fromObject(e) {
          return Z(kr.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new kr();
          return kr.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(kr.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return kr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(kr.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return kr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_Trailers";
        }
      }
      class Or extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Or.prototype.filename || re(Or.M()),
            $.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Or.sm_m ||
              (Or.sm_m = {
                proto: Or,
                fields: {
                  filename: { n: 1, br: Q.readString, bw: X.writeString },
                  type: { n: 2, br: Q.readString, bw: X.writeString },
                },
              }),
            Or.sm_m
          );
        }
        static MBF() {
          return Or.sm_mbf || (Or.sm_mbf = Y(Or.M())), Or.sm_mbf;
        }
        toObject(e = !1) {
          return Or.toObject(e, this);
        }
        static toObject(e, t) {
          return J(Or.M(), e, t);
        }
        static fromObject(e) {
          return Z(Or.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new Or();
          return Or.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(Or.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return Or.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(Or.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return Or.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_Trailers_VideoSource";
        }
      }
      class Er extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Er.prototype.cdn_path || re(Er.M()),
            $.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Er.sm_m ||
              (Er.sm_m = {
                proto: Er,
                fields: {
                  cdn_path: { n: 1, br: Q.readString, bw: X.writeString },
                  encoding: { n: 2, br: Q.readString, bw: X.writeString },
                },
              }),
            Er.sm_m
          );
        }
        static MBF() {
          return Er.sm_mbf || (Er.sm_mbf = Y(Er.M())), Er.sm_mbf;
        }
        toObject(e = !1) {
          return Er.toObject(e, this);
        }
        static toObject(e, t) {
          return J(Er.M(), e, t);
        }
        static fromObject(e) {
          return Z(Er.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new Er();
          return Er.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(Er.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return Er.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(Er.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return Er.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_Trailers_AdaptiveTrailer";
        }
      }
      class Nr extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Nr.prototype.trailer_name || re(Nr.M()),
            $.Message.initialize(this, e, 0, -1, [5, 6], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Nr.sm_m ||
              (Nr.sm_m = {
                proto: Nr,
                fields: {
                  trailer_name: { n: 1, br: Q.readString, bw: X.writeString },
                  trailer_url_format: {
                    n: 2,
                    br: Q.readString,
                    bw: X.writeString,
                  },
                  trailer_category: { n: 13, br: Q.readEnum, bw: X.writeEnum },
                  microtrailer: { n: 5, c: Or, r: !0, q: !0 },
                  adaptive_trailers: { n: 6, c: Er, r: !0, q: !0 },
                  captions_manifest: {
                    n: 7,
                    br: Q.readString,
                    bw: X.writeString,
                  },
                  screenshot_medium: {
                    n: 10,
                    br: Q.readString,
                    bw: X.writeString,
                  },
                  screenshot_full: {
                    n: 11,
                    br: Q.readString,
                    bw: X.writeString,
                  },
                  trailer_base_id: { n: 12, br: Q.readInt32, bw: X.writeInt32 },
                  all_ages: { n: 14, br: Q.readBool, bw: X.writeBool },
                },
              }),
            Nr.sm_m
          );
        }
        static MBF() {
          return Nr.sm_mbf || (Nr.sm_mbf = Y(Nr.M())), Nr.sm_mbf;
        }
        toObject(e = !1) {
          return Nr.toObject(e, this);
        }
        static toObject(e, t) {
          return J(Nr.M(), e, t);
        }
        static fromObject(e) {
          return Z(Nr.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new Nr();
          return Nr.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(Nr.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return Nr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(Nr.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return Nr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_Trailers_Trailer";
        }
      }
      class Pr extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Pr.prototype.elanguage || re(Pr.M()),
            $.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Pr.sm_m ||
              (Pr.sm_m = {
                proto: Pr,
                fields: {
                  elanguage: { n: 1, d: -1, br: Q.readInt32, bw: X.writeInt32 },
                  eadditionallanguage: {
                    n: 5,
                    d: -1,
                    br: Q.readInt32,
                    bw: X.writeInt32,
                  },
                  supported: { n: 2, br: Q.readBool, bw: X.writeBool },
                  full_audio: { n: 3, br: Q.readBool, bw: X.writeBool },
                  subtitles: { n: 4, br: Q.readBool, bw: X.writeBool },
                },
              }),
            Pr.sm_m
          );
        }
        static MBF() {
          return Pr.sm_mbf || (Pr.sm_mbf = Y(Pr.M())), Pr.sm_mbf;
        }
        toObject(e = !1) {
          return Pr.toObject(e, this);
        }
        static toObject(e, t) {
          return J(Pr.M(), e, t);
        }
        static fromObject(e) {
          return Z(Pr.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new Pr();
          return Pr.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(Pr.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return Pr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(Pr.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return Pr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_SupportedLanguage";
        }
      }
      class Ur extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ur.prototype.start_time || re(Ur.M()),
            $.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ur.sm_m ||
              (Ur.sm_m = {
                proto: Ur,
                fields: {
                  start_time: { n: 1, br: Q.readUint32, bw: X.writeUint32 },
                  end_time: { n: 2, br: Q.readUint32, bw: X.writeUint32 },
                  text: { n: 3, br: Q.readString, bw: X.writeString },
                  appid: { n: 4, br: Q.readUint32, bw: X.writeUint32 },
                },
              }),
            Ur.sm_m
          );
        }
        static MBF() {
          return Ur.sm_mbf || (Ur.sm_mbf = Y(Ur.M())), Ur.sm_mbf;
        }
        toObject(e = !1) {
          return Ur.toObject(e, this);
        }
        static toObject(e, t) {
          return J(Ur.M(), e, t);
        }
        static fromObject(e) {
          return Z(Ur.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new Ur();
          return Ur.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(Ur.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return Ur.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(Ur.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return Ur.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_FreeWeekend";
        }
      }
      class Ar extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ar.prototype.link_type || re(Ar.M()),
            $.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ar.sm_m ||
              (Ar.sm_m = {
                proto: Ar,
                fields: {
                  link_type: { n: 1, br: Q.readEnum, bw: X.writeEnum },
                  url: { n: 2, br: Q.readString, bw: X.writeString },
                  text: { n: 3, br: Q.readString, bw: X.writeString },
                },
              }),
            Ar.sm_m
          );
        }
        static MBF() {
          return Ar.sm_mbf || (Ar.sm_mbf = Y(Ar.M())), Ar.sm_mbf;
        }
        toObject(e = !1) {
          return Ar.toObject(e, this);
        }
        static toObject(e, t) {
          return J(Ar.M(), e, t);
        }
        static fromObject(e) {
          return Z(Ar.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new Ar();
          return Ar.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(Ar.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return Ar.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(Ar.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return Ar.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_Link";
        }
      }
      class Lr extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Lr.prototype.name || re(Lr.M()),
            $.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Lr.sm_m ||
              (Lr.sm_m = {
                proto: Lr,
                fields: {
                  name: { n: 1, br: Q.readString, bw: X.writeString },
                  heading: { n: 2, br: Q.readString, bw: X.writeString },
                  display_type: { n: 3, br: Q.readEnum, bw: X.writeEnum },
                  dropdown_title: { n: 4, br: Q.readString, bw: X.writeString },
                  dropdown_description_bbcode: {
                    n: 5,
                    br: Q.readString,
                    bw: X.writeString,
                  },
                },
              }),
            Lr.sm_m
          );
        }
        static MBF() {
          return Lr.sm_mbf || (Lr.sm_mbf = Y(Lr.M())), Lr.sm_mbf;
        }
        toObject(e = !1) {
          return Lr.toObject(e, this);
        }
        static toObject(e, t) {
          return J(Lr.M(), e, t);
        }
        static fromObject(e) {
          return Z(Lr.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new Lr();
          return Lr.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(Lr.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return Lr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(Lr.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return Lr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_PackageGroup";
        }
      }
      class Gr extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Gr.prototype.kernel_mode || re(Gr.M()),
            $.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Gr.sm_m ||
              (Gr.sm_m = {
                proto: Gr,
                fields: {
                  kernel_mode: { n: 1, br: Q.readBool, bw: X.writeBool },
                  uninstall_completely: {
                    n: 2,
                    br: Q.readBool,
                    bw: X.writeBool,
                  },
                  boot_protection: { n: 3, br: Q.readBool, bw: X.writeBool },
                  boot_protection_name: {
                    n: 4,
                    br: Q.readString,
                    bw: X.writeString,
                  },
                  name: { n: 5, br: Q.readString, bw: X.writeString },
                  name_loc: { n: 6, br: Q.readString, bw: X.writeString },
                },
              }),
            Gr.sm_m
          );
        }
        static MBF() {
          return Gr.sm_mbf || (Gr.sm_mbf = Y(Gr.M())), Gr.sm_mbf;
        }
        toObject(e = !1) {
          return Gr.toObject(e, this);
        }
        static toObject(e, t) {
          return J(Gr.M(), e, t);
        }
        static fromObject(e) {
          return Z(Gr.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new Gr();
          return Gr.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(Gr.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return Gr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(Gr.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return Gr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_Anticheat";
        }
      }
      class Dr extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Dr.prototype.name || re(Dr.M()),
            $.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Dr.sm_m ||
              (Dr.sm_m = {
                proto: Dr,
                fields: {
                  name: { n: 1, br: Q.readString, bw: X.writeString },
                  url: { n: 2, br: Q.readString, bw: X.writeString },
                },
              }),
            Dr.sm_m
          );
        }
        static MBF() {
          return Dr.sm_mbf || (Dr.sm_mbf = Y(Dr.M())), Dr.sm_mbf;
        }
        toObject(e = !1) {
          return Dr.toObject(e, this);
        }
        static toObject(e, t) {
          return J(Dr.M(), e, t);
        }
        static fromObject(e) {
          return Z(Dr.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new Dr();
          return Dr.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(Dr.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return Dr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(Dr.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return Dr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_Eula";
        }
      }
      class qr extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            qr.prototype.name || re(qr.M()),
            $.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            qr.sm_m ||
              (qr.sm_m = {
                proto: qr,
                fields: {
                  name: { n: 1, br: Q.readString, bw: X.writeString },
                  url: { n: 2, br: Q.readString, bw: X.writeString },
                },
              }),
            qr.sm_m
          );
        }
        static MBF() {
          return qr.sm_mbf || (qr.sm_mbf = Y(qr.M())), qr.sm_mbf;
        }
        toObject(e = !1) {
          return qr.toObject(e, this);
        }
        static toObject(e, t) {
          return J(qr.M(), e, t);
        }
        static fromObject(e) {
          return Z(qr.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new qr();
          return qr.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(qr.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return qr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(qr.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return qr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_AIGeneratedContentService";
        }
      }
      class Hr extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Hr.prototype.label || re(Hr.M()),
            $.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Hr.sm_m ||
              (Hr.sm_m = {
                proto: Hr,
                fields: {
                  label: { n: 1, br: Q.readString, bw: X.writeString },
                  content_bbcode: { n: 2, br: Q.readString, bw: X.writeString },
                  banner: { n: 3, br: Q.readEnum, bw: X.writeEnum },
                },
              }),
            Hr.sm_m
          );
        }
        static MBF() {
          return Hr.sm_mbf || (Hr.sm_mbf = Y(Hr.M())), Hr.sm_mbf;
        }
        toObject(e = !1) {
          return Hr.toObject(e, this);
        }
        static toObject(e, t) {
          return J(Hr.M(), e, t);
        }
        static fromObject(e) {
          return Z(Hr.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new Hr();
          return Hr.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(Hr.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return Hr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(Hr.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return Hr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_PageSection";
        }
      }
      class Vr extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Vr.prototype.quote || re(Vr.M()),
            $.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Vr.sm_m ||
              (Vr.sm_m = {
                proto: Vr,
                fields: {
                  quote: { n: 1, br: Q.readString, bw: X.writeString },
                  score: { n: 2, br: Q.readString, bw: X.writeString },
                  site: { n: 3, br: Q.readString, bw: X.writeString },
                  url: { n: 4, br: Q.readString, bw: X.writeString },
                },
              }),
            Vr.sm_m
          );
        }
        static MBF() {
          return Vr.sm_mbf || (Vr.sm_mbf = Y(Vr.M())), Vr.sm_mbf;
        }
        toObject(e = !1) {
          return Vr.toObject(e, this);
        }
        static toObject(e, t) {
          return J(Vr.M(), e, t);
        }
        static fromObject(e) {
          return Z(Vr.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new Vr();
          return Vr.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(Vr.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return Vr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(Vr.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return Vr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_PressReview";
        }
      }
      class $r extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            $r.prototype.steam_award || re($r.M()),
            $.Message.initialize(this, e, 0, -1, [1, 10, 13, 15, 18], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            $r.sm_m ||
              ($r.sm_m = {
                proto: $r,
                fields: {
                  steam_award: { n: 1, c: ar, r: !0, q: !0 },
                  vetted: { n: 2, br: Q.readBool, bw: X.writeBool },
                  no_mouse_keyboard_support: {
                    n: 3,
                    br: Q.readBool,
                    bw: X.writeBool,
                  },
                  controller_wizard_complete: {
                    n: 4,
                    br: Q.readBool,
                    bw: X.writeBool,
                  },
                  drm_third_party_type: {
                    n: 5,
                    br: Q.readString,
                    bw: X.writeString,
                  },
                  drm_activation_limit: {
                    n: 6,
                    br: Q.readString,
                    bw: X.writeString,
                  },
                  user_account_third_party: {
                    n: 7,
                    br: Q.readString,
                    bw: X.writeString,
                  },
                  user_account_third_party_link_to_steam: {
                    n: 8,
                    br: Q.readBool,
                    bw: X.writeBool,
                  },
                  anticheat: { n: 9, c: Gr },
                  eula: { n: 10, c: Dr, r: !0, q: !0 },
                  ai_generation_service: { n: 11, c: qr },
                  refund_checks_ea_playtime: {
                    n: 12,
                    br: Q.readBool,
                    bw: X.writeBool,
                  },
                  section: { n: 13, c: Hr, r: !0, q: !0 },
                  legal_notice_bbcode: {
                    n: 14,
                    br: Q.readString,
                    bw: X.writeString,
                  },
                  interactive_elements: {
                    n: 15,
                    r: !0,
                    q: !0,
                    br: Q.readEnum,
                    pbr: Q.readPackedEnum,
                    bw: X.writeRepeatedEnum,
                  },
                  content_survey_notes: {
                    n: 16,
                    br: Q.readString,
                    bw: X.writeString,
                  },
                  content_survey_ai_notes: {
                    n: 17,
                    br: Q.readString,
                    bw: X.writeString,
                  },
                  press_review: { n: 18, c: Vr, r: !0, q: !0 },
                  partner_awards_bbcode: {
                    n: 19,
                    br: Q.readString,
                    bw: X.writeString,
                  },
                },
              }),
            $r.sm_m
          );
        }
        static MBF() {
          return $r.sm_mbf || ($r.sm_mbf = Y($r.M())), $r.sm_mbf;
        }
        toObject(e = !1) {
          return $r.toObject(e, this);
        }
        static toObject(e, t) {
          return J($r.M(), e, t);
        }
        static fromObject(e) {
          return Z($r.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new $r();
          return $r.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee($r.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return $r.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te($r.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return $r.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_ExtraDetails";
        }
      }
      class Kr extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Kr.prototype.include_assets || re(Kr.M()),
            $.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Kr.sm_m ||
              (Kr.sm_m = {
                proto: Kr,
                fields: {
                  include_assets: { n: 1, br: Q.readBool, bw: X.writeBool },
                  include_release: { n: 2, br: Q.readBool, bw: X.writeBool },
                  include_platforms: { n: 3, br: Q.readBool, bw: X.writeBool },
                  include_all_purchase_options: {
                    n: 4,
                    br: Q.readBool,
                    bw: X.writeBool,
                  },
                  include_screenshots: {
                    n: 5,
                    br: Q.readBool,
                    bw: X.writeBool,
                  },
                  include_trailers: { n: 6, br: Q.readBool, bw: X.writeBool },
                  include_ratings: { n: 7, br: Q.readBool, bw: X.writeBool },
                  include_tag_count: {
                    n: 8,
                    br: Q.readInt32,
                    bw: X.writeInt32,
                  },
                  include_reviews: { n: 9, br: Q.readBool, bw: X.writeBool },
                  include_basic_info: {
                    n: 10,
                    br: Q.readBool,
                    bw: X.writeBool,
                  },
                  include_supported_languages: {
                    n: 11,
                    br: Q.readBool,
                    bw: X.writeBool,
                  },
                  include_full_description: {
                    n: 12,
                    br: Q.readBool,
                    bw: X.writeBool,
                  },
                  include_included_items: {
                    n: 13,
                    br: Q.readBool,
                    bw: X.writeBool,
                  },
                  included_item_data_request: { n: 14, c: Kr },
                  include_assets_without_overrides: {
                    n: 15,
                    br: Q.readBool,
                    bw: X.writeBool,
                  },
                  apply_user_filters: {
                    n: 16,
                    br: Q.readBool,
                    bw: X.writeBool,
                  },
                  include_links: { n: 17, br: Q.readBool, bw: X.writeBool },
                  include_extra_details: {
                    n: 18,
                    br: Q.readBool,
                    bw: X.writeBool,
                  },
                  include_best_purchase_option: {
                    n: 19,
                    d: !0,
                    br: Q.readBool,
                    bw: X.writeBool,
                  },
                },
              }),
            Kr.sm_m
          );
        }
        static MBF() {
          return Kr.sm_mbf || (Kr.sm_mbf = Y(Kr.M())), Kr.sm_mbf;
        }
        toObject(e = !1) {
          return Kr.toObject(e, this);
        }
        static toObject(e, t) {
          return J(Kr.M(), e, t);
        }
        static fromObject(e) {
          return Z(Kr.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new Kr();
          return Kr.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(Kr.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return Kr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(Kr.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return Kr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreBrowseItemDataRequest";
        }
      }
      class Qr extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Qr.prototype.language || re(Qr.M()),
            $.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Qr.sm_m ||
              (Qr.sm_m = {
                proto: Qr,
                fields: {
                  language: { n: 1, br: Q.readString, bw: X.writeString },
                  elanguage: { n: 2, br: Q.readInt32, bw: X.writeInt32 },
                  country_code: { n: 3, br: Q.readString, bw: X.writeString },
                },
              }),
            Qr.sm_m
          );
        }
        static MBF() {
          return Qr.sm_mbf || (Qr.sm_mbf = Y(Qr.M())), Qr.sm_mbf;
        }
        toObject(e = !1) {
          return Qr.toObject(e, this);
        }
        static toObject(e, t) {
          return J(Qr.M(), e, t);
        }
        static fromObject(e) {
          return Z(Qr.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new Qr();
          return Qr.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(Qr.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return Qr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(Qr.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return Qr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreBrowseContext";
        }
      }
      class Xr extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Xr.prototype.appid || re(Xr.M()),
            $.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Xr.sm_m ||
              (Xr.sm_m = {
                proto: Xr,
                fields: {
                  appid: { n: 1, br: Q.readUint32, bw: X.writeUint32 },
                  packageid: { n: 2, br: Q.readUint32, bw: X.writeUint32 },
                  bundleid: { n: 3, br: Q.readUint32, bw: X.writeUint32 },
                  tagid: { n: 4, br: Q.readUint32, bw: X.writeUint32 },
                  creatorid: { n: 5, br: Q.readUint32, bw: X.writeUint32 },
                  hubcategoryid: { n: 6, br: Q.readUint32, bw: X.writeUint32 },
                  salepagegid: {
                    n: 7,
                    br: Q.readFixed64String,
                    bw: X.writeFixed64String,
                  },
                },
              }),
            Xr.sm_m
          );
        }
        static MBF() {
          return Xr.sm_mbf || (Xr.sm_mbf = Y(Xr.M())), Xr.sm_mbf;
        }
        toObject(e = !1) {
          return Xr.toObject(e, this);
        }
        static toObject(e, t) {
          return J(Xr.M(), e, t);
        }
        static fromObject(e) {
          return Z(Xr.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new Xr();
          return Xr.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(Xr.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return Xr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(Xr.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return Xr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItemID";
        }
      }
      class Yr extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Yr.prototype.ids || re(Yr.M()),
            $.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Yr.sm_m ||
              (Yr.sm_m = {
                proto: Yr,
                fields: {
                  ids: { n: 1, c: Xr, r: !0, q: !0 },
                  context: { n: 2, c: Qr },
                  data_request: { n: 3, c: Kr },
                },
              }),
            Yr.sm_m
          );
        }
        static MBF() {
          return Yr.sm_mbf || (Yr.sm_mbf = Y(Yr.M())), Yr.sm_mbf;
        }
        toObject(e = !1) {
          return Yr.toObject(e, this);
        }
        static toObject(e, t) {
          return J(Yr.M(), e, t);
        }
        static fromObject(e) {
          return Z(Yr.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new Yr();
          return Yr.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(Yr.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return Yr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(Yr.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return Yr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreBrowse_GetItems_Request";
        }
      }
      class Zr extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Zr.prototype.store_items || re(Zr.M()),
            $.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Zr.sm_m ||
              (Zr.sm_m = {
                proto: Zr,
                fields: { store_items: { n: 1, c: _r, r: !0, q: !0 } },
              }),
            Zr.sm_m
          );
        }
        static MBF() {
          return Zr.sm_mbf || (Zr.sm_mbf = Y(Zr.M())), Zr.sm_mbf;
        }
        toObject(e = !1) {
          return Zr.toObject(e, this);
        }
        static toObject(e, t) {
          return J(Zr.M(), e, t);
        }
        static fromObject(e) {
          return Z(Zr.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new Zr();
          return Zr.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(Zr.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return Zr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(Zr.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return Zr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreBrowse_GetItems_Response";
        }
      }
      class Jr extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Jr.prototype.language || re(Jr.M()),
            $.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Jr.sm_m ||
              (Jr.sm_m = {
                proto: Jr,
                fields: {
                  language: { n: 1, br: Q.readString, bw: X.writeString },
                  elanguage: { n: 2, d: -1, br: Q.readInt32, bw: X.writeInt32 },
                },
              }),
            Jr.sm_m
          );
        }
        static MBF() {
          return Jr.sm_mbf || (Jr.sm_mbf = Y(Jr.M())), Jr.sm_mbf;
        }
        toObject(e = !1) {
          return Jr.toObject(e, this);
        }
        static toObject(e, t) {
          return J(Jr.M(), e, t);
        }
        static fromObject(e) {
          return Z(Jr.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new Jr();
          return Jr.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(Jr.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return Jr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(Jr.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return Jr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreBrowse_GetStoreCategories_Request";
        }
      }
      class ei extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ei.prototype.categories || re(ei.M()),
            $.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ei.sm_m ||
              (ei.sm_m = {
                proto: ei,
                fields: { categories: { n: 1, c: ti, r: !0, q: !0 } },
              }),
            ei.sm_m
          );
        }
        static MBF() {
          return ei.sm_mbf || (ei.sm_mbf = Y(ei.M())), ei.sm_mbf;
        }
        toObject(e = !1) {
          return ei.toObject(e, this);
        }
        static toObject(e, t) {
          return J(ei.M(), e, t);
        }
        static fromObject(e) {
          return Z(ei.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new ei();
          return ei.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(ei.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return ei.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(ei.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return ei.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreBrowse_GetStoreCategories_Response";
        }
      }
      class ti extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ti.prototype.categoryid || re(ti.M()),
            $.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ti.sm_m ||
              (ti.sm_m = {
                proto: ti,
                fields: {
                  categoryid: { n: 1, br: Q.readUint32, bw: X.writeUint32 },
                  type: { n: 2, br: Q.readEnum, bw: X.writeEnum },
                  internal_name: { n: 3, br: Q.readString, bw: X.writeString },
                  display_name: { n: 4, br: Q.readString, bw: X.writeString },
                  image_url: { n: 5, br: Q.readString, bw: X.writeString },
                  show_in_search: { n: 6, br: Q.readBool, bw: X.writeBool },
                  computed: { n: 7, br: Q.readBool, bw: X.writeBool },
                  edit_url: { n: 8, br: Q.readString, bw: X.writeString },
                  edit_sort_order: {
                    n: 9,
                    br: Q.readUint32,
                    bw: X.writeUint32,
                  },
                },
              }),
            ti.sm_m
          );
        }
        static MBF() {
          return ti.sm_mbf || (ti.sm_mbf = Y(ti.M())), ti.sm_mbf;
        }
        toObject(e = !1) {
          return ti.toObject(e, this);
        }
        static toObject(e, t) {
          return J(ti.M(), e, t);
        }
        static fromObject(e) {
          return Z(ti.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new ti();
          return ti.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(ti.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return ti.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(ti.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return ti.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreBrowse_GetStoreCategories_Response_Category";
        }
      }
      class ri extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ri.prototype.context || re(ri.M()),
            $.Message.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ri.sm_m ||
              (ri.sm_m = {
                proto: ri,
                fields: {
                  context: { n: 1, c: Qr },
                  excluded_content_descriptorids: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: Q.readEnum,
                    pbr: Q.readPackedEnum,
                    bw: X.writeRepeatedEnum,
                  },
                },
              }),
            ri.sm_m
          );
        }
        static MBF() {
          return ri.sm_mbf || (ri.sm_mbf = Y(ri.M())), ri.sm_mbf;
        }
        toObject(e = !1) {
          return ri.toObject(e, this);
        }
        static toObject(e, t) {
          return J(ri.M(), e, t);
        }
        static fromObject(e) {
          return Z(ri.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new ri();
          return ri.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(ri.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return ri.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(ri.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return ri.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreBrowse_GetContentHubConfig_Request";
        }
      }
      class ii extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ii.prototype.hubconfigs || re(ii.M()),
            $.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ii.sm_m ||
              (ii.sm_m = {
                proto: ii,
                fields: { hubconfigs: { n: 1, c: ni, r: !0, q: !0 } },
              }),
            ii.sm_m
          );
        }
        static MBF() {
          return ii.sm_mbf || (ii.sm_mbf = Y(ii.M())), ii.sm_mbf;
        }
        toObject(e = !1) {
          return ii.toObject(e, this);
        }
        static toObject(e, t) {
          return J(ii.M(), e, t);
        }
        static fromObject(e) {
          return Z(ii.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new ii();
          return ii.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(ii.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return ii.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(ii.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return ii.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreBrowse_GetContentHubConfig_Response";
        }
      }
      class ni extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ni.prototype.hubcategoryid || re(ni.M()),
            $.Message.initialize(this, e, 0, -1, [6, 7, 8, 9], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ni.sm_m ||
              (ni.sm_m = {
                proto: ni,
                fields: {
                  hubcategoryid: { n: 1, br: Q.readUint32, bw: X.writeUint32 },
                  type: { n: 2, br: Q.readString, bw: X.writeString },
                  handle: { n: 3, br: Q.readString, bw: X.writeString },
                  display_name: { n: 4, br: Q.readString, bw: X.writeString },
                  url_path: { n: 5, br: Q.readString, bw: X.writeString },
                  replaces_tags: {
                    n: 6,
                    r: !0,
                    q: !0,
                    br: Q.readUint32,
                    pbr: Q.readPackedUint32,
                    bw: X.writeRepeatedUint32,
                  },
                  must_have_tags: {
                    n: 7,
                    r: !0,
                    q: !0,
                    br: Q.readUint32,
                    pbr: Q.readPackedUint32,
                    bw: X.writeRepeatedUint32,
                  },
                  any_one_of_tags: {
                    n: 8,
                    r: !0,
                    q: !0,
                    br: Q.readUint32,
                    pbr: Q.readPackedUint32,
                    bw: X.writeRepeatedUint32,
                  },
                  must_not_have_tags: {
                    n: 9,
                    r: !0,
                    q: !0,
                    br: Q.readUint32,
                    pbr: Q.readPackedUint32,
                    bw: X.writeRepeatedUint32,
                  },
                  hub_description: {
                    n: 10,
                    br: Q.readString,
                    bw: X.writeString,
                  },
                },
              }),
            ni.sm_m
          );
        }
        static MBF() {
          return ni.sm_mbf || (ni.sm_mbf = Y(ni.M())), ni.sm_mbf;
        }
        toObject(e = !1) {
          return ni.toObject(e, this);
        }
        static toObject(e, t) {
          return J(ni.M(), e, t);
        }
        static fromObject(e) {
          return Z(ni.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new ni();
          return ni.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(ni.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return ni.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(ni.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return ni.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreBrowse_GetContentHubConfig_Response_ContentHubConfig";
        }
      }
      class si extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            si.prototype.country_code || re(si.M()),
            $.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            si.sm_m ||
              (si.sm_m = {
                proto: si,
                fields: {
                  country_code: { n: 1, br: Q.readString, bw: X.writeString },
                  currency_code: { n: 2, br: Q.readString, bw: X.writeString },
                },
              }),
            si.sm_m
          );
        }
        static MBF() {
          return si.sm_mbf || (si.sm_mbf = Y(si.M())), si.sm_mbf;
        }
        toObject(e = !1) {
          return si.toObject(e, this);
        }
        static toObject(e, t) {
          return J(si.M(), e, t);
        }
        static fromObject(e) {
          return Z(si.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new si();
          return si.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(si.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return si.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(si.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return si.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreBrowse_GetPriceStops_Request";
        }
      }
      class ai extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ai.prototype.price_stops || re(ai.M()),
            $.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ai.sm_m ||
              (ai.sm_m = {
                proto: ai,
                fields: {
                  price_stops: { n: 1, c: oi, r: !0, q: !0 },
                  currency_code: { n: 2, br: Q.readString, bw: X.writeString },
                },
              }),
            ai.sm_m
          );
        }
        static MBF() {
          return ai.sm_mbf || (ai.sm_mbf = Y(ai.M())), ai.sm_mbf;
        }
        toObject(e = !1) {
          return ai.toObject(e, this);
        }
        static toObject(e, t) {
          return J(ai.M(), e, t);
        }
        static fromObject(e) {
          return Z(ai.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new ai();
          return ai.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(ai.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return ai.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(ai.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return ai.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreBrowse_GetPriceStops_Response";
        }
      }
      class oi extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            oi.prototype.formatted_amount || re(oi.M()),
            $.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            oi.sm_m ||
              (oi.sm_m = {
                proto: oi,
                fields: {
                  formatted_amount: {
                    n: 1,
                    br: Q.readString,
                    bw: X.writeString,
                  },
                  amount_in_cents: {
                    n: 2,
                    br: Q.readInt64String,
                    bw: X.writeInt64String,
                  },
                },
              }),
            oi.sm_m
          );
        }
        static MBF() {
          return oi.sm_mbf || (oi.sm_mbf = Y(oi.M())), oi.sm_mbf;
        }
        toObject(e = !1) {
          return oi.toObject(e, this);
        }
        static toObject(e, t) {
          return J(oi.M(), e, t);
        }
        static fromObject(e) {
          return Z(oi.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new oi();
          return oi.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(oi.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return oi.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(oi.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return oi.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreBrowse_GetPriceStops_Response_PriceStop";
        }
      }
      class li extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            li.prototype.context || re(li.M()),
            $.Message.initialize(this, e, 0, -1, [3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            li.sm_m ||
              (li.sm_m = {
                proto: li,
                fields: {
                  context: { n: 1, c: Qr },
                  store_page_filter: { n: 2, c: or },
                  appids: { n: 3, c: Xr, r: !0, q: !0 },
                  steamid: {
                    n: 4,
                    br: Q.readUint64String,
                    bw: X.writeUint64String,
                  },
                },
              }),
            li.sm_m
          );
        }
        static MBF() {
          return li.sm_mbf || (li.sm_mbf = Y(li.M())), li.sm_mbf;
        }
        toObject(e = !1) {
          return li.toObject(e, this);
        }
        static toObject(e, t) {
          return J(li.M(), e, t);
        }
        static fromObject(e) {
          return Z(li.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new li();
          return li.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(li.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return li.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(li.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return li.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreBrowse_GetDLCForApps_Request";
        }
      }
      class ci extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ci.prototype.dlc_data || re(ci.M()),
            $.Message.initialize(this, e, 0, -1, [1, 2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ci.sm_m ||
              (ci.sm_m = {
                proto: ci,
                fields: {
                  dlc_data: { n: 1, c: ui, r: !0, q: !0 },
                  playtime: { n: 2, c: mi, r: !0, q: !0 },
                },
              }),
            ci.sm_m
          );
        }
        static MBF() {
          return ci.sm_mbf || (ci.sm_mbf = Y(ci.M())), ci.sm_mbf;
        }
        toObject(e = !1) {
          return ci.toObject(e, this);
        }
        static toObject(e, t) {
          return J(ci.M(), e, t);
        }
        static fromObject(e) {
          return Z(ci.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new ci();
          return ci.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(ci.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return ci.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(ci.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return ci.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreBrowse_GetDLCForApps_Response";
        }
      }
      class ui extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ui.prototype.appid || re(ui.M()),
            $.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ui.sm_m ||
              (ui.sm_m = {
                proto: ui,
                fields: {
                  appid: { n: 1, br: Q.readUint32, bw: X.writeUint32 },
                  parentappid: { n: 2, br: Q.readUint32, bw: X.writeUint32 },
                  release_date: { n: 3, br: Q.readUint32, bw: X.writeUint32 },
                  coming_soon: { n: 4, br: Q.readBool, bw: X.writeBool },
                  price: {
                    n: 5,
                    br: Q.readInt64String,
                    bw: X.writeInt64String,
                  },
                  discount: { n: 6, br: Q.readUint32, bw: X.writeUint32 },
                  free: { n: 7, br: Q.readBool, bw: X.writeBool },
                },
              }),
            ui.sm_m
          );
        }
        static MBF() {
          return ui.sm_mbf || (ui.sm_mbf = Y(ui.M())), ui.sm_mbf;
        }
        toObject(e = !1) {
          return ui.toObject(e, this);
        }
        static toObject(e, t) {
          return J(ui.M(), e, t);
        }
        static fromObject(e) {
          return Z(ui.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new ui();
          return ui.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(ui.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return ui.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(ui.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return ui.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreBrowse_GetDLCForApps_Response_DLCData";
        }
      }
      class mi extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            mi.prototype.appid || re(mi.M()),
            $.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            mi.sm_m ||
              (mi.sm_m = {
                proto: mi,
                fields: {
                  appid: { n: 1, br: Q.readUint32, bw: X.writeUint32 },
                  playtime: { n: 2, br: Q.readUint32, bw: X.writeUint32 },
                  last_played: { n: 3, br: Q.readUint32, bw: X.writeUint32 },
                },
              }),
            mi.sm_m
          );
        }
        static MBF() {
          return mi.sm_mbf || (mi.sm_mbf = Y(mi.M())), mi.sm_mbf;
        }
        toObject(e = !1) {
          return mi.toObject(e, this);
        }
        static toObject(e, t) {
          return J(mi.M(), e, t);
        }
        static fromObject(e) {
          return Z(mi.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new mi();
          return mi.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(mi.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return mi.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(mi.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return mi.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreBrowse_GetDLCForApps_Response_PlaytimeForApp";
        }
      }
      class di extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            di.prototype.context || re(di.M()),
            $.Message.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            di.sm_m ||
              (di.sm_m = {
                proto: di,
                fields: {
                  context: { n: 1, c: Qr },
                  appids: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: Q.readUint32,
                    pbr: Q.readPackedUint32,
                    bw: X.writeRepeatedUint32,
                  },
                  flavor: { n: 3, br: Q.readString, bw: X.writeString },
                  count: { n: 4, br: Q.readUint32, bw: X.writeUint32 },
                  store_page_filter: { n: 5, c: or },
                },
              }),
            di.sm_m
          );
        }
        static MBF() {
          return di.sm_mbf || (di.sm_mbf = Y(di.M())), di.sm_mbf;
        }
        toObject(e = !1) {
          return di.toObject(e, this);
        }
        static toObject(e, t) {
          return J(di.M(), e, t);
        }
        static fromObject(e) {
          return Z(di.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new di();
          return di.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(di.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return di.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(di.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return di.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreBrowse_GetDLCForAppsSolr_Request";
        }
      }
      class _i extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _i.prototype.dlc_lists || re(_i.M()),
            $.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _i.sm_m ||
              (_i.sm_m = {
                proto: _i,
                fields: { dlc_lists: { n: 1, c: bi, r: !0, q: !0 } },
              }),
            _i.sm_m
          );
        }
        static MBF() {
          return _i.sm_mbf || (_i.sm_mbf = Y(_i.M())), _i.sm_mbf;
        }
        toObject(e = !1) {
          return _i.toObject(e, this);
        }
        static toObject(e, t) {
          return J(_i.M(), e, t);
        }
        static fromObject(e) {
          return Z(_i.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new _i();
          return _i.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(_i.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return _i.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(_i.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return _i.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreBrowse_GetDLCForAppsSolr_Response";
        }
      }
      class bi extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            bi.prototype.parent_appid || re(bi.M()),
            $.Message.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            bi.sm_m ||
              (bi.sm_m = {
                proto: bi,
                fields: {
                  parent_appid: { n: 1, br: Q.readUint32, bw: X.writeUint32 },
                  dlc_appids: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: Q.readUint32,
                    pbr: Q.readPackedUint32,
                    bw: X.writeRepeatedUint32,
                  },
                },
              }),
            bi.sm_m
          );
        }
        static MBF() {
          return bi.sm_mbf || (bi.sm_mbf = Y(bi.M())), bi.sm_mbf;
        }
        toObject(e = !1) {
          return bi.toObject(e, this);
        }
        static toObject(e, t) {
          return J(bi.M(), e, t);
        }
        static fromObject(e) {
          return Z(bi.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new bi();
          return bi.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(bi.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return bi.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(bi.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return bi.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreBrowse_GetDLCForAppsSolr_Response_DLCList";
        }
      }
      class gi extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            gi.prototype.packageid || re(gi.M()),
            $.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            gi.sm_m ||
              (gi.sm_m = {
                proto: gi,
                fields: {
                  packageid: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: Q.readUint32,
                    pbr: Q.readPackedUint32,
                    bw: X.writeRepeatedUint32,
                  },
                  context: { n: 2, c: Qr },
                },
              }),
            gi.sm_m
          );
        }
        static MBF() {
          return gi.sm_mbf || (gi.sm_mbf = Y(gi.M())), gi.sm_mbf;
        }
        toObject(e = !1) {
          return gi.toObject(e, this);
        }
        static toObject(e, t) {
          return J(gi.M(), e, t);
        }
        static fromObject(e) {
          return Z(gi.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new gi();
          return gi.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(gi.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return gi.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(gi.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return gi.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreBrowse_GetHardwareItems_Request";
        }
      }
      class pi extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            pi.prototype.packageid || re(pi.M()),
            $.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            pi.sm_m ||
              (pi.sm_m = {
                proto: pi,
                fields: {
                  packageid: { n: 1, br: Q.readUint32, bw: X.writeUint32 },
                  inventory_available: {
                    n: 3,
                    br: Q.readBool,
                    bw: X.writeBool,
                  },
                  high_pending_orders: {
                    n: 4,
                    br: Q.readBool,
                    bw: X.writeBool,
                  },
                  account_restricted_from_purchasing: {
                    n: 5,
                    br: Q.readBool,
                    bw: X.writeBool,
                  },
                  requires_reservation: {
                    n: 6,
                    br: Q.readBool,
                    bw: X.writeBool,
                  },
                  rtime_estimated_notification: {
                    n: 7,
                    br: Q.readUint32,
                    bw: X.writeUint32,
                  },
                  notificaton_token: {
                    n: 8,
                    br: Q.readString,
                    bw: X.writeString,
                  },
                  reservation_state: {
                    n: 9,
                    br: Q.readInt32,
                    bw: X.writeInt32,
                  },
                  expired: { n: 10, br: Q.readBool, bw: X.writeBool },
                  time_expires: { n: 11, br: Q.readUint32, bw: X.writeUint32 },
                  time_reserved: { n: 12, br: Q.readUint32, bw: X.writeUint32 },
                  allow_quantity_purchase: {
                    n: 13,
                    br: Q.readBool,
                    bw: X.writeBool,
                  },
                  max_quantity_per_purchase: {
                    n: 14,
                    br: Q.readInt32,
                    bw: X.writeInt32,
                  },
                  allow_purchase_in_country: {
                    n: 15,
                    br: Q.readBool,
                    bw: X.writeBool,
                  },
                  estimated_delivery_soonest_business_days: {
                    n: 17,
                    br: Q.readUint32,
                    bw: X.writeUint32,
                  },
                  estimated_delivery_latest_business_days: {
                    n: 18,
                    br: Q.readUint32,
                    bw: X.writeUint32,
                  },
                  not_allowed_to_reserved_because_already_owned: {
                    n: 19,
                    br: Q.readBool,
                    bw: X.writeBool,
                  },
                  appid_ownership_not_allowed_to_reserve: {
                    n: 20,
                    br: Q.readUint32,
                    bw: X.writeUint32,
                  },
                  account_first_date_purchase_requirement: {
                    n: 21,
                    br: Q.readUint32,
                    bw: X.writeUint32,
                  },
                  position_is_waitlist: {
                    n: 22,
                    br: Q.readBool,
                    bw: X.writeBool,
                  },
                  user_waitlist_token: {
                    n: 23,
                    br: Q.readString,
                    bw: X.writeString,
                  },
                  queue_in_waitlist: { n: 24, br: Q.readBool, bw: X.writeBool },
                  queue_waitlist_token: {
                    n: 25,
                    br: Q.readString,
                    bw: X.writeString,
                  },
                  collection_time_active: {
                    n: 26,
                    br: Q.readUint32,
                    bw: X.writeUint32,
                  },
                  reservation_not_allowed: {
                    n: 27,
                    br: Q.readBool,
                    bw: X.writeBool,
                  },
                  requires_signature: {
                    n: 28,
                    br: Q.readBool,
                    bw: X.writeBool,
                  },
                },
              }),
            pi.sm_m
          );
        }
        static MBF() {
          return pi.sm_mbf || (pi.sm_mbf = Y(pi.M())), pi.sm_mbf;
        }
        toObject(e = !1) {
          return pi.toObject(e, this);
        }
        static toObject(e, t) {
          return J(pi.M(), e, t);
        }
        static fromObject(e) {
          return Z(pi.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new pi();
          return pi.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(pi.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return pi.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(pi.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return pi.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CHardwarePackageDetails";
        }
      }
      class Bi extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Bi.prototype.details || re(Bi.M()),
            $.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Bi.sm_m ||
              (Bi.sm_m = {
                proto: Bi,
                fields: { details: { n: 1, c: pi, r: !0, q: !0 } },
              }),
            Bi.sm_m
          );
        }
        static MBF() {
          return Bi.sm_mbf || (Bi.sm_mbf = Y(Bi.M())), Bi.sm_mbf;
        }
        toObject(e = !1) {
          return Bi.toObject(e, this);
        }
        static toObject(e, t) {
          return J(Bi.M(), e, t);
        }
        static fromObject(e) {
          return Z(Bi.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new Bi();
          return Bi.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(Bi.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return Bi.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(Bi.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return Bi.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreBrowse_GetHardwareItems_Response";
        }
      }
      class hi extends $.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            hi.prototype.filter_failure || re(hi.M()),
            $.Message.initialize(this, e, 0, -1, [21, 30], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            hi.sm_m ||
              (hi.sm_m = {
                proto: hi,
                fields: {
                  filter_failure: {
                    n: 1,
                    d: 0,
                    br: Q.readEnum,
                    bw: X.writeEnum,
                  },
                  already_owned: { n: 5, br: Q.readBool, bw: X.writeBool },
                  on_wishlist: { n: 6, br: Q.readBool, bw: X.writeBool },
                  ignored: { n: 7, br: Q.readBool, bw: X.writeBool },
                  not_in_users_language: {
                    n: 10,
                    br: Q.readBool,
                    bw: X.writeBool,
                  },
                  not_on_users_platform: {
                    n: 11,
                    br: Q.readBool,
                    bw: X.writeBool,
                  },
                  demo_for_owned_game: {
                    n: 12,
                    br: Q.readBool,
                    bw: X.writeBool,
                  },
                  dlc_for_unowned_game: {
                    n: 13,
                    br: Q.readBool,
                    bw: X.writeBool,
                  },
                  nonpreferred_product_early_access: {
                    n: 22,
                    br: Q.readBool,
                    bw: X.writeBool,
                  },
                  nonpreferred_product_prepurchase: {
                    n: 23,
                    br: Q.readBool,
                    bw: X.writeBool,
                  },
                  nonpreferred_product_software: {
                    n: 24,
                    br: Q.readBool,
                    bw: X.writeBool,
                  },
                  nonpreferred_product_vr: {
                    n: 25,
                    br: Q.readBool,
                    bw: X.writeBool,
                  },
                  excluded_tagids: {
                    n: 21,
                    r: !0,
                    q: !0,
                    br: Q.readUint32,
                    pbr: Q.readPackedUint32,
                    bw: X.writeRepeatedUint32,
                  },
                  excluded_content_descriptorids: {
                    n: 30,
                    r: !0,
                    q: !0,
                    br: Q.readEnum,
                    pbr: Q.readPackedEnum,
                    bw: X.writeRepeatedEnum,
                  },
                },
              }),
            hi.sm_m
          );
        }
        static MBF() {
          return hi.sm_mbf || (hi.sm_mbf = Y(hi.M())), hi.sm_mbf;
        }
        toObject(e = !1) {
          return hi.toObject(e, this);
        }
        static toObject(e, t) {
          return J(hi.M(), e, t);
        }
        static fromObject(e) {
          return Z(hi.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (K().BinaryReader)(e),
            r = new hi();
          return hi.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ee(hi.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (K().BinaryWriter)();
          return hi.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          te(hi.M(), e, t);
        }
        serializeBase64String() {
          var e = new (K().BinaryWriter)();
          return hi.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreBrowseFilterFailure";
        }
      }
      var wi;
      function yi() {
        if (((e = U.LANGUAGE), !Zt.has(e)))
          throw `unknown language ${U.LANGUAGE}`;
        return {
          languages: [
            {
              strLanguage: U.LANGUAGE,
              strISOCode: er.get(U.LANGUAGE),
              eSource: 5,
            },
          ],
        };
        var e;
      }
      !(function (e) {
        (e.GetItems = function (e, t, r) {
          return e.SendMsg("StoreBrowse.GetItems#1", bt(Yr, t, r), Zr, {
            bConstMethod: !0,
            ePrivilege: 1,
            eWebAPIKeyRequirement: 1,
          });
        }),
          (e.GetStoreCategories = function (e, t, r) {
            return e.SendMsg(
              "StoreBrowse.GetStoreCategories#1",
              bt(Jr, t, r),
              ei,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetContentHubConfig = function (e, t, r) {
            return e.SendMsg(
              "StoreBrowse.GetContentHubConfig#1",
              bt(ri, t, r),
              ii,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetPriceStops = function (e, t, r) {
            return e.SendMsg("StoreBrowse.GetPriceStops#1", bt(si, t, r), ai, {
              bConstMethod: !0,
              ePrivilege: 0,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.GetDLCForApps = function (e, t, r) {
            return e.SendMsg("StoreBrowse.GetDLCForApps#1", bt(li, t, r), ci, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.GetDLCForAppsSolr = function (e, t, r) {
            return e.SendMsg(
              "StoreBrowse.GetDLCForAppsSolr#1",
              bt(di, t, r),
              _i,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetHardwareItems = function (e, t, r) {
            return e.SendMsg(
              "StoreBrowse.GetHardwareItems#1",
              bt(gi, t, r),
              Bi,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          });
      })(wi || (wi = {}));
      const fi = {};
      (fi.arabic = () => r.e(361).then(r.t.bind(r, 361, 19))),
        (fi.brazilian = () => r.e(9333).then(r.t.bind(r, 9333, 19))),
        (fi.bulgarian = () => r.e(9854).then(r.t.bind(r, 9854, 19))),
        (fi.czech = () => r.e(3296).then(r.t.bind(r, 3296, 19))),
        (fi.danish = () => r.e(8356).then(r.t.bind(r, 8356, 19))),
        (fi.dutch = () => r.e(4401).then(r.t.bind(r, 4401, 19))),
        (fi.english = () => r.e(1031).then(r.t.bind(r, 1031, 19))),
        (fi.finnish = () => r.e(7688).then(r.t.bind(r, 7688, 19))),
        (fi.french = () => r.e(2589).then(r.t.bind(r, 2589, 19))),
        (fi.german = () => r.e(1359).then(r.t.bind(r, 1359, 19))),
        (fi.greek = () => r.e(4175).then(r.t.bind(r, 4175, 19))),
        (fi.hungarian = () => r.e(2330).then(r.t.bind(r, 2330, 19))),
        (fi.indonesian = () => r.e(1229).then(r.t.bind(r, 1229, 19))),
        (fi.italian = () => r.e(2711).then(r.t.bind(r, 2711, 19))),
        (fi.japanese = () => r.e(8010).then(r.t.bind(r, 8010, 19))),
        (fi.koreana = () => r.e(764).then(r.t.bind(r, 764, 19))),
        (fi.latam = () => r.e(684).then(r.t.bind(r, 684, 19))),
        (fi.malay = () => r.e(8515).then(r.t.bind(r, 8515, 19))),
        (fi.norwegian = () => r.e(5319).then(r.t.bind(r, 5319, 19))),
        (fi.polish = () => r.e(2736).then(r.t.bind(r, 2736, 19))),
        (fi.portuguese = () => r.e(3248).then(r.t.bind(r, 3248, 19))),
        (fi.romanian = () => r.e(4122).then(r.t.bind(r, 4122, 19))),
        (fi.russian = () => r.e(9998).then(r.t.bind(r, 9998, 19))),
        (fi.sc_schinese = () => r.e(20).then(r.t.bind(r, 20, 19))),
        (fi.schinese = () => r.e(9965).then(r.t.bind(r, 9965, 19))),
        (fi.spanish = () => r.e(9431).then(r.t.bind(r, 9431, 19))),
        (fi.swedish = () => r.e(7046).then(r.t.bind(r, 7046, 19))),
        (fi.tchinese = () => r.e(662).then(r.t.bind(r, 662, 19))),
        (fi.thai = () => r.e(1047).then(r.t.bind(r, 1047, 19))),
        (fi.turkish = () => r.e(7700).then(r.t.bind(r, 7700, 19))),
        (fi.ukrainian = () => r.e(3301).then(r.t.bind(r, 3301, 19))),
        (fi.vietnamese = () => r.e(2378).then(r.t.bind(r, 2378, 19)));
      const Si = (function (e) {
        const t = new Map(),
          r = (async function () {
            await A();
            const r = yi(),
              i = new Set([]);
            for (const e of r.languages) {
              i.add(e.strLanguage);
              const t = tr(e.strLanguage);
              t && i.add(t);
            }
            return Promise.all(
              Array.from(i).map((r) =>
                e(r).then((e) => {
                  if (!e)
                    return void console.error(
                      `Project loc failed to load language ${r}, got ${e}`,
                    );
                  const i = new Map();
                  for (const [t, r] of Object.entries(e)) i.set("#" + t, r);
                  t.set(r, i);
                }),
              ),
            );
          })();
        let i = !1,
          n = !1;
        var s;
        function a(e, s) {
          const [o, ...l] = s,
            c =
              t.get(o.strLanguage)?.get(e) ??
              t.get(tr(o.strLanguage) ?? "english")?.get(e);
          if (void 0 !== c) return c;
          if (0 === l.length) {
            if (n)
              return (
                console.warn(
                  `Couldn't find localization key ${e} after erroring loading strings`,
                ),
                e
              );
            if (!i) throw r;
            return (
              lt().ReportError(
                new Error(`Couldn't find localization key ${e}`),
                { bIncludeMessageInIdentifier: !0 },
              ),
              console.warn(`Couldn't find localization key ${e}`),
              e
            );
          }
          return a(e, l);
        }
        function l(e, ...t) {
          return rr(a(e, yi().languages), ...t);
        }
        return (
          r
            .then(() => (i = !0))
            .catch((e) => {
              console.error("LoadStrings error", e), (n = !0);
            }),
          (s = r),
          (ir ??= new Set()),
          ir.add(s),
          (nr = Promise.all(ir)),
          {
            Localize: (e, ...t) => l(e, ...t),
            LocalizeReact(e, ...t) {
              const r = this.Localize(e);
              if (r === e) return r;
              const i = [],
                n = /(.*?)%(\d+)\$s/g;
              let s,
                a = 0;
              for (; (s = n.exec(r)); ) {
                (a += s[0].length), i.push(s[1]);
                const e = parseInt(s[2]);
                e >= 1 && e <= t.length && i.push(t[e - 1]);
              }
              return (
                i.push(r.slice(a)), o.createElement(o.Fragment, null, ...i)
              );
            },
            LocalizePlural: (e, t, ...r) =>
              1 === t || "1" === t ? l(e, t, ...r) : l(e + "_Plural", t, ...r),
            GetAppTypeLocKey(e, t) {
              switch (t) {
                case 5:
                  return e + "_Guide";
                case 10:
                  return e + "_Hardware";
                case 4:
                  return e + "_DLC";
                case 11:
                  return e + "_Music";
                case 8:
                  return e + "_Series";
                case 1:
                  return e + "_Demo";
                case 6:
                  return e + "_Software";
                case 7:
                  return e + "_Video";
                default:
                  return e;
              }
            },
            GetAppTypePluralLocKey(e, t) {
              switch (t) {
                case 6:
                  return e + "_Software";
                case 7:
                  return e + "_Video";
                default:
                  return e;
              }
            },
            LocalizeInSpecificLang: (e, t, ...r) => rr(a(t, [e]), ...r),
            Ready: () => r,
            IsReady: () => i,
            HasKey(e) {
              const r = yi().languages,
                i = [...r.map((e) => e.strLanguage), tr(r[0].strLanguage)];
              for (const r of i) {
                if (!r) continue;
                const i = t.get(r);
                if (i && i.has(e)) return !0;
              }
              return !1;
            },
          }
        );
      })(async function (e) {
        if (fi[e]) return fi[e]();
      });
      var Mi;
      !(function (e) {
        (e[(e.None = 0)] = "None"),
          (e[(e.Ago = 1)] = "Ago"),
          (e[(e.Remaining = 2)] = "Remaining");
      })(Mi || (Mi = {}));
      new Map();
      new Map();
      new Map(), new Map(), new Map(), new Map(), new Map(), new Map();
      class zi {
        m_mapTokens = new Map();
        m_mapFallbackTokens = new Map();
        m_cbkTokensChanged = new Xt();
        m_rgLocalesToUse;
        m_bReportIndividualMissingTokens = !0;
        m_bReady = !1;
        static GetLanguageFallback(e) {
          return "sc_schinese" === e ? "schinese" : "english";
        }
        static GetELanguageFallback(e) {
          return 29 === e ? 6 : 0;
        }
        static IsELanguageValidInRealm(e, t) {
          return (
            t === (29 === e ? Kt.k_ESteamRealmChina : Kt.k_ESteamRealmGlobal)
          );
        }
        static GetLanguageListForRealms(e) {
          const t = new Array();
          for (let r = 0; r < 32; r++)
            for (const i of e)
              if (this.IsELanguageValidInRealm(r, i)) {
                t.push(r);
                break;
              }
          return t;
        }
        InitFromObjects(e, t, r, i) {
          i && (this.m_bReportIndividualMissingTokens = !1),
            r || this.m_mapTokens.clear(),
            this.AddTokens(e, t || {}),
            this.m_cbkTokensChanged.Dispatch();
        }
        InitDirect(e, t) {
          this.m_mapTokens.clear(),
            this.m_mapFallbackTokens.clear(),
            this.AddTokens(e, t),
            this.m_cbkTokensChanged.Dispatch();
        }
        SetReady(e) {
          this.m_bReady = e;
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
            (t.push(M(b.LANGUAGE)),
            (b.SUPPORTED_LANGUAGES || []).forEach((e) => {
              e.value != b.LANGUAGE && t.push(M(e.value));
            }),
            e)
          ) {
            zi.GetLanguageListForRealms(e).forEach((e) => {
              -1 == t.indexOf(e) && t.push(e);
            });
          }
          return t;
        }
        SetPreferredLocales(e) {
          this.m_rgLocalesToUse = e;
        }
        BLooksLikeToken(e) {
          return !!e && e.length > 0 && "#" == e.charAt(0);
        }
        LocalizeIfToken(e, t) {
          return this.BLooksLikeToken(e) ? this.LocalizeString(e, t) : e;
        }
        LocalizeString(e, t) {
          if (!this.BLooksLikeToken(e)) return;
          let r = this.m_mapTokens.get(e.substring(1));
          return void 0 === r
            ? Si.HasKey(e)
              ? Si.Localize(e)
              : void (0 === this.m_mapTokens.size
                  ? s(
                      !1,
                      `Attempting to localize token '${e}' with no tokens in our map for language '${b.LANGUAGE}'. SharedLoc ready: ${Si.IsReady()}. site has inited: ${this.m_bReady}`,
                    )
                  : !t &&
                    this.m_bReportIndividualMissingTokens &&
                    lt().ReportError(
                      new Error(
                        `Unable to find localization token '${e}' for language '${b.LANGUAGE}', ${this.m_mapTokens.size} tokens in map. SharedLoc ready: ${Si.IsReady()}. site has inited: ${this.m_bReady}`,
                      ),
                      { bIncludeMessageInIdentifier: !0 },
                    ))
            : r;
        }
        LocalizeStringFromFallback(e) {
          if (!e || 0 == e.length || "#" != e.charAt(0)) return;
          let t = this.m_mapFallbackTokens.get(e.substring(1));
          return void 0 !== t ? t : void 0;
        }
        static GetTokenWithFallback(e) {
          if (!e) return "";
          const t = M(b.LANGUAGE),
            r = e.find((e) => e.language == t);
          if (r) return r.localized_string;
          const i = zi.GetELanguageFallback(t),
            n = e.find((e) => e.language == i);
          return n?.localized_string ?? "";
        }
        static BHasTokenLanguage(e, t) {
          return Boolean(t.find((t) => t.language == e));
        }
      }
      function Ci(e, ...t) {
        let r = vi.LocalizeString(e);
        return void 0 === r ? e : Fi(r, ...t);
      }
      function Ri(e, ...t) {
        let r = vi.LocalizeString(e);
        if (void 0 === r) return e;
        let i,
          n = [],
          s = /(.*?)%(\d+)\$s/g,
          a = 0;
        for (; (i = s.exec(r)); ) {
          (a += i[0].length), n.push(i[1]);
          let e = parseInt(i[2]);
          e >= 1 && e <= t.length && n.push(t[e - 1]);
        }
        return n.push(r.substr(a)), o.createElement(o.Fragment, null, ...n);
      }
      function Fi(e, ...t) {
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
      const vi = new zi();
      window.LocalizationManager = vi;
      var ji = r(2630),
        Ii = r(3741);
      let Ti = class extends o.Component {
        render() {
          return Dt.activeModal;
        }
      };
      function Wi(e, ...t) {
        return Ci(e, ...t)
          .split("<br>")
          .map((e, t) =>
            (0, i.jsxs)("span", { children: [e, (0, i.jsx)("br", {})] }, t),
          );
      }
      function xi(e) {
        let t = Ci("#Button_OK");
        e.strOkButtonText && (t = e.strOkButtonText);
        let r = Ci("#Button_Cancel");
        e.strCancelButtonText && (r = e.strCancelButtonText);
        const n = o.useRef(null);
        return (0, i.jsx)(ji.A, {
          children: (0, i.jsx)(
            Ii.A,
            {
              nodeRef: n,
              classNames: "modal-anim",
              timeout: 500,
              appear: !0,
              children: (0, i.jsx)("div", {
                ref: n,
                className: "modal_background",
                onClick: (t) => {
                  t.target === t.currentTarget &&
                    (e.onCancel && e.onCancel(),
                    e.closeModal && e.closeModal());
                },
                children: (0, i.jsxs)("div", {
                  className:
                    "PopupGeneric PopupVisible" +
                    (null != e.className ? " " + e.className : ""),
                  children: [
                    (0, i.jsx)("div", { className: "PopupGenericBackground" }),
                    (0, i.jsxs)("div", {
                      className: "PopupGenericContainer",
                      children: [
                        e.strTitle &&
                          (0, i.jsx)("div", {
                            className: "modal_title",
                            children: (0, i.jsx)("div", {
                              className: "PopupGenericTitle",
                              children: e.strTitle,
                            }),
                          }),
                        (0, i.jsxs)("div", {
                          className: "model_content",
                          children: [
                            e.strMessage &&
                              (0, i.jsx)("div", {
                                className: "PopupGenericBodyText",
                                children: Wi(e.strMessage),
                              }),
                            (0, i.jsx)("div", {
                              className: "PopupGenericChildren",
                              children: e.children,
                            }),
                            (0, i.jsxs)("div", {
                              className: "GenericButtonGroup",
                              children: [
                                (e.bShowOK || null == e.bShowOK) &&
                                  (0, i.jsx)("button", {
                                    className: "GenericButton",
                                    onClick: () => {
                                      ((e) => {
                                        let t = !0;
                                        e.onOk && (t = e.onOk()),
                                          t && e.closeModal && e.closeModal();
                                      })(e);
                                    },
                                    children: t,
                                  }),
                                e.optionalButtons,
                                (e.bShowCancel || null == e.bShowCancel) &&
                                  (0, i.jsx)("button", {
                                    className: "GenericButton",
                                    onClick: () => {
                                      ((e) => {
                                        let t = !0;
                                        e.onCancel && (t = e.onCancel()),
                                          t && e.closeModal && e.closeModal();
                                      })(e);
                                    },
                                    children: r,
                                  }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            },
            0,
          ),
        });
      }
      Ti = (0, a.Cg)([l.PA], Ti);
      class ki extends o.Component {
        constructor(e) {
          super(e);
        }
        render() {
          return (0, i.jsx)(xi, {
            closeModal: this.props.closeModal,
            strTitle: this.props.strTitle,
            className: "GenericDialog",
            bShowCancel: this.props.bShowCancel,
            onOk: this.props.onOk,
            children: (0, i.jsx)("div", {
              className: "GenericDialogContainer",
              children: (0, i.jsx)("div", {
                className: "PopupGenericBodyText",
                children: this.props.strBodyText,
              }),
            }),
          });
        }
      }
      async function Oi(e) {
        try {
          const [t] = await Promise.all([
              r(2857)(`./siteserverui_${e}.json`),
              Si.Ready(),
            ]),
            i = { ...t.default };
          if ("english" !== e) {
            const e = {
              ...(await r.e(2895).then(r.t.bind(r, 2895, 19))).default,
            };
            vi.InitFromObjects(i, e);
          } else vi.InitFromObjects(i, null);
        } catch (t) {
          console.log(
            "InitLocalization Error: Failed to load loc files for",
            e,
          );
          const [i] = await Promise.all([
              r.e(2895).then(r.t.bind(r, 2895, 19)),
              Si.Ready(),
            ]),
            n = { ...i.default };
          vi.InitFromObjects(n, null);
        }
      }
      function Ei(e = !1) {
        ({ NODE_ENV: "production", STEAM_BUILD: "buildbot" }).ELECTRON_BUILD &&
          Dt.SetShutdown();
        const t = _t.Init(Mt);
        return t.Body().set_restart(e), Ht.Quit(t);
      }
      function Ni(e = null) {
        let t = (0, i.jsx)(ki, {
          strTitle: Ci("#Status_Error"),
          strBodyText: e,
          bShowCancel: !1,
        });
        Dt.ShowModal(t);
      }
      class Pi extends o.Component {
        constructor(e) {
          super(e);
        }
        render() {
          return (0, i.jsx)("div", {
            className: "tooltip tooltip-icon",
            children: (0, i.jsx)("div", {
              className: "tooltip-container",
              children: (0, i.jsx)("span", {
                className: "tooltiptext",
                children: this.props.strText,
              }),
            }),
          });
        }
      }
      let Ui = class extends o.Component {
        constructor(e) {
          super(e);
        }
        render() {
          return (0, i.jsx)("div", {
            className: "MainWindowTitleBar TitleBar",
            children: (0, i.jsxs)("div", {
              className: "MainNavContainer",
              children: [
                (0, i.jsx)("div", { className: "SteamLogoMainNav" }),
                (0, i.jsxs)("div", {
                  children: [
                    (0, i.jsx)("div", {
                      className: "TitleBarTitle",
                      children: Ci("#Title"),
                    }),
                    (0, i.jsx)(Li, {}),
                  ],
                }),
              ],
            }),
          });
        }
      };
      Ui = (0, a.Cg)([l.PA], Ui);
      let Ai = class extends o.Component {
        constructor(e) {
          super(e);
        }
        render() {
          return (0, i.jsx)("div", {
            className: "MainWindowTitleBar TitleBar",
            children: (0, i.jsxs)("div", {
              className: "MainNavContainer",
              children: [
                (0, i.jsx)("div", { className: "SteamLogoMainNav" }),
                (0, i.jsx)("div", {
                  children: (0, i.jsx)("div", {
                    className: "TitleBarTitle",
                    children: Ci("#Title"),
                  }),
                }),
              ],
            }),
          });
        }
      };
      Ai = (0, a.Cg)([l.PA], Ai);
      class Li extends o.Component {
        async Language() {
          Dt.SetView(2);
        }
        async Cache() {
          Dt.SetView(4);
        }
        OnChangeAccount() {
          let e = o.createElement(
            ki,
            {
              strTitle: Ci("#Logout_Logout"),
              strBodyText: Ci("#Logout_Prompt_ChangeUser"),
              onOk: () => this.Logout(),
            },
            null,
          );
          Dt.ShowModal(e);
        }
        Logout() {
          return $t.StartLogout(), !0;
        }
        render() {
          return (0, i.jsxs)("div", {
            className: "MainWindowTitleBarButton",
            children: [
              Ci("#Menu_Header_Settings"),
              (0, i.jsx)("div", {
                className: "MainNavPopout",
                children: (0, i.jsxs)("div", {
                  className:
                    "TopNavSettingsPopoutContents TopNavPopoutContents",
                  children: [
                    (0, i.jsx)("a", {
                      className: "SteamFeatureNavItem",
                      href: "#",
                      onClick: this.Language,
                      children: Ci("#Menu_Language"),
                    }),
                    (0, i.jsx)("a", {
                      className: "SteamFeatureNavItem",
                      href: "#",
                      onClick: this.Cache,
                      children: Ci("#Menu_Cache"),
                    }),
                    (0, i.jsx)("a", {
                      className: "SteamFeatureNavItem",
                      href: "#",
                      onClick: this.OnChangeAccount,
                      children: Ci("#Menu_ChangeAccount"),
                    }),
                  ],
                }),
              }),
            ],
          });
        }
      }
      (0, a.Cg)([H], Li.prototype, "Language", null),
        (0, a.Cg)([H], Li.prototype, "Cache", null),
        (0, a.Cg)([H], Li.prototype, "OnChangeAccount", null);
      let Gi = class extends o.Component {
        constructor(e) {
          super(e);
        }
        render() {
          let e = Dt.connected
              ? Ci("#Status_Connected")
              : Ci("#Status_NotConnected"),
            t = Dt.cacheEnabled
              ? Ci("#Status_Enabled")
              : Ci("#Status_Disabled");
          return (0, i.jsxs)("div", {
            className: "Footer",
            children: [
              (0, i.jsx)(qi, {}),
              (0, i.jsxs)("div", {
                className: "FooterConnectionStatus",
                children: [
                  (0, i.jsx)("div", {
                    className: "FooterStatusName",
                    children: Ci("#Status_SteamService") + ": ",
                  }),
                  (0, i.jsx)("div", {
                    className: "FooterStatusValue",
                    children: e,
                  }),
                ],
              }),
              (0, i.jsxs)("div", {
                className: "FooterCacheStatus",
                children: [
                  (0, i.jsx)("div", {
                    className: "FooterStatusName",
                    children: Ci("#Status_ContentCache") + ": ",
                  }),
                  (0, i.jsx)("div", {
                    className: "FooterStatusValue",
                    children: t,
                  }),
                ],
              }),
            ],
          });
        }
      };
      Gi = (0, a.Cg)([l.PA], Gi);
      let Di = class extends o.Component {
        constructor(e) {
          super(e);
        }
        render() {
          Dt.connected ? Ci("#Status_Connected") : Ci("#Status_NotConnected");
          return (0, i.jsx)("div", { className: "Footer" });
        }
      };
      Di = (0, a.Cg)([l.PA], Di);
      let qi = class extends o.Component {
        m_eAcctStatusLast = 0;
        m_bAlertDismissed = !1;
        constructor(e) {
          super(e), (this.state = { bToggle: !1 });
        }
        Dismiss() {
          (this.m_bAlertDismissed = !0),
            this.setState({ bToggle: !this.state.bToggle });
        }
        Show() {
          (this.m_bAlertDismissed = !1),
            this.setState({ bToggle: !this.state.bToggle });
        }
        render() {
          let e = Dt.acctStatus,
            t = !1;
          0 != e
            ? e != this.m_eAcctStatusLast
              ? ((this.m_bAlertDismissed = !1), (t = !0))
              : this.m_bAlertDismissed || (t = !0)
            : (t = !this.m_bAlertDismissed);
          let r = (0, i.jsx)("a", {
              className: "link",
              href: "https://partner.steamgames.com",
              children: "partner.steamgames.com",
            }),
            n = (0, i.jsx)("a", {
              className: "link",
              href: "https://store.steampowered.com/pccafe/",
              children: "store.steampowered.com",
            }),
            s = "",
            a = !0;
          switch (Dt.acctStatus) {
            case 0:
              (s = Ri("#ForAdditionalInfo", r)), (a = !1);
              break;
            case 1:
              s = Ri("#AcctStatus_NoLicenses", n);
              break;
            case 2:
              s = Ri("#AcctStatus_NotAssociated", r);
              break;
            case 3:
              s = Ci("#AcctStatus_LoggedInElsewhere");
          }
          this.m_eAcctStatusLast = e;
          const o = a ? "AcctAlertIcon" : "AcctInfoIcon",
            l = t ? { display: "none" } : {};
          return (0, i.jsxs)("div", {
            children: [
              (0, i.jsxs)("div", {
                className: "AcctStatusAlert " + (t ? "slideup" : "slidedown"),
                children: [
                  (0, i.jsx)("div", { className: o }),
                  (0, i.jsx)("div", {
                    className: "AcctStatusAlertMsg",
                    children: s,
                  }),
                  (0, i.jsx)("div", {
                    className: "TitleButtonBar",
                    children: (0, i.jsx)("div", {
                      className: "title-area-icon closeButton",
                      onClick: this.Dismiss,
                      children: (0, i.jsx)("div", {
                        className: "closeButtonContainer",
                      }),
                    }),
                  }),
                ],
              }),
              (0, i.jsx)("div", {
                className: "ExpandAlertIcon",
                style: l,
                onClick: this.Show,
              }),
            ],
          });
        }
      };
      function Hi(e) {
        switch (e) {
          case 5:
            return Ci("#Login_PasswordMismatch");
          case 88:
            return Ci("#Login_TwoFactorMismatch");
        }
        return Ci("#Steam_EResult_" + e) + " (" + String(e) + ")";
      }
      (0, a.Cg)([H], qi.prototype, "Dismiss", null),
        (0, a.Cg)([H], qi.prototype, "Show", null),
        (qi = (0, a.Cg)([l.PA], qi));
      class Vi extends o.PureComponent {
        constructor(e) {
          super(e);
        }
        render() {
          return (0, i.jsxs)("div", {
            className: "MainWindow",
            children: [
              (0, i.jsx)(Ai, {}),
              (0, i.jsx)("div", {
                className: "LoginWindowContentContainer",
                children: (0, i.jsx)("div", {
                  className: "LoginWindowContent",
                  children: (0, i.jsx)("div", {
                    className: "LoginWindowContentGradient",
                    children: (0, i.jsx)("div", {
                      className: "LoginBackground",
                      children: (0, i.jsx)("div", {
                        className: "LoginContainer",
                        children: this.props.children,
                      }),
                    }),
                  }),
                }),
              }),
              (0, i.jsx)(Di, {}),
            ],
          });
        }
      }
      let $i = class extends o.Component {
        m_bShowErrors = !0;
        constructor(e) {
          super(e),
            (this.state = {
              strAccountName: "",
              strPassword: "",
              strUser: "",
              bRememberPassword: !1,
            });
        }
        componentWillMount() {
          this.setState({ strAccountName: $t.accountName });
        }
        OnGetLoginUsers(e) {
          this.setState({ strUser: e });
        }
        LoginWithCachedCredentials(e) {
          $t.SetSteamGuardCode(""),
            $t.SetAccountAndPassword(this.state.strAccountName, "", !0),
            $t.StartLogin(),
            (this.m_bShowErrors = !0);
        }
        OnAccountNameChange(e) {
          this.setState({ strAccountName: e.target.value });
        }
        OnPasswordChange(e) {
          this.setState({ strPassword: e.target.value });
        }
        OnRememberChange(e) {
          this.setState({ bRememberPassword: e.target.checked });
        }
        LoginWithCredentials(e) {
          e.preventDefault(),
            $t.SetSteamGuardCode(""),
            this.state.strAccountName &&
              this.state.strPassword &&
              ($t.SetAccountAndPassword(
                this.state.strAccountName,
                this.state.strPassword,
                this.state.bRememberPassword,
              ),
              $t.StartLogin()),
            (this.m_bShowErrors = !0);
        }
        async ShowLoginFailure() {
          await Ni(Ci("#Login_LastError", Hi($t.loginResult))),
            (this.m_bShowErrors = !1);
        }
        render() {
          if (this.state.strAccountName && $t.hasCachedCredentials)
            return (
              this.LoginWithCachedCredentials(this.state.strAccountName),
              (0, i.jsx)(Vi, {})
            );
          1 != $t.loginResult &&
            21 != $t.loginResult &&
            this.m_bShowErrors &&
            this.ShowLoginFailure();
          let e = this.state.bRememberPassword ? "checked" : "";
          return (0, i.jsxs)(Vi, {
            children: [
              (0, i.jsx)("div", {
                className: "PopupGenericTitle",
                children: Ci("#Login_EnterCredentials"),
              }),
              (0, i.jsxs)("form", {
                className: "MainLoginForm",
                children: [
                  (0, i.jsxs)("div", {
                    className: "MainLoginFormGroup",
                    children: [
                      (0, i.jsx)("label", {
                        className: "PopupGenericBodyText",
                        children: Ci("#Login_AccountName"),
                      }),
                      (0, i.jsx)(Pi, { strText: Ci("#Login_AccountHelp") }),
                      (0, i.jsx)("input", {
                        type: "text",
                        autoFocus: !0,
                        value: this.state.strAccountName,
                        onChange: this.OnAccountNameChange,
                      }),
                    ],
                  }),
                  (0, i.jsxs)("div", {
                    className: "MainLoginFormGroup",
                    children: [
                      (0, i.jsx)("label", {
                        className: "PopupGenericBodyText",
                        children: Ci("#Login_Password"),
                      }),
                      (0, i.jsx)("input", {
                        type: "password",
                        value: this.state.strPassword,
                        onChange: this.OnPasswordChange,
                      }),
                    ],
                  }),
                  (0, i.jsxs)("div", {
                    className: "MainLoginFormRemember",
                    children: [
                      (0, i.jsx)("input", {
                        type: "checkbox",
                        value: e,
                        onChange: this.OnRememberChange,
                      }),
                      (0, i.jsx)("label", {
                        className: "PopupGenericBodyText",
                        children: Ci("#Login_RememberPassword"),
                      }),
                    ],
                  }),
                  (0, i.jsxs)("div", {
                    className: "GenericButtonGroup",
                    children: [
                      (0, i.jsx)("button", {
                        className: "GenericButton default",
                        type: "submit",
                        onClick: this.LoginWithCredentials,
                        children: Ci("#Login_Login"),
                      }),
                      (0, i.jsx)("button", {
                        className: "GenericButton",
                        type: "button",
                        onClick: this.props.onCancel,
                        children: Ci("#Button_Cancel"),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
      };
      (0, a.Cg)([H], $i.prototype, "OnGetLoginUsers", null),
        (0, a.Cg)([H], $i.prototype, "LoginWithCachedCredentials", null),
        (0, a.Cg)([H], $i.prototype, "OnAccountNameChange", null),
        (0, a.Cg)([H], $i.prototype, "OnPasswordChange", null),
        (0, a.Cg)([H], $i.prototype, "OnRememberChange", null),
        (0, a.Cg)([H], $i.prototype, "LoginWithCredentials", null),
        ($i = (0, a.Cg)([l.PA], $i));
      class Ki extends o.PureComponent {
        m_bShowErrors = !0;
        constructor(e) {
          super(e), (this.state = { strAuthCode: "" });
        }
        OnAuthCodeChange(e) {
          this.setState({ strAuthCode: e.target.value });
        }
        LoginWithSteamGuard(e) {
          e.preventDefault(),
            $t.SetSteamGuardCode(this.state.strAuthCode),
            $t.StartLogin(),
            (this.m_bShowErrors = !0);
        }
        async ShowFailure() {
          await Ni(Ci("#Login_LastError", Hi($t.loginResult))),
            (this.m_bShowErrors = !1);
        }
        render() {
          1 != $t.loginResult &&
            63 != $t.loginResult &&
            85 != $t.loginResult &&
            this.m_bShowErrors &&
            this.ShowFailure();
          let e =
              85 == $t.loginResult
                ? Ci("#Login_EnterTwoFactor", $t.accountName)
                : Ci("#Login_EnterSteamGuard", $t.accountName),
            t =
              85 == $t.loginResult
                ? Ci("#Login_TwoFactorTitle", $t.accountName)
                : Ci("#Login_SteamGuardTitle", $t.accountName),
            r =
              85 == $t.loginResult
                ? Ci("#Login_TwoFactorDesc", $t.accountName)
                : Ci("#Login_SteamGuardDesc", $t.accountName);
          return (0, i.jsxs)(Vi, {
            children: [
              (0, i.jsx)("div", {
                className: "PopupGenericTitle",
                children: t,
              }),
              (0, i.jsx)("br", {}),
              (0, i.jsx)("label", {
                className: "PopupGenericBodyText",
                children: r,
              }),
              (0, i.jsxs)("form", {
                className: "SteamGuardForm",
                children: [
                  (0, i.jsxs)("div", {
                    className: "MainLoginFormGroup",
                    children: [
                      (0, i.jsx)("label", {
                        className: "PopupGenericBodyText",
                        children: e,
                      }),
                      (0, i.jsx)("input", {
                        type: "text",
                        maxLength: 5,
                        autoFocus: !0,
                        value: this.state.strAuthCode,
                        onChange: this.OnAuthCodeChange,
                      }),
                    ],
                  }),
                  (0, i.jsxs)("div", {
                    className: "GenericButtonGroup",
                    children: [
                      (0, i.jsx)("button", {
                        className: "GenericButton default",
                        type: "submit",
                        onClick: this.LoginWithSteamGuard,
                        children: Ci("#Login_Login"),
                      }),
                      (0, i.jsx)("button", {
                        className: "GenericButton",
                        onClick: this.props.onCancel,
                        children: Ci("#Button_Cancel"),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
      }
      (0, a.Cg)([H], Ki.prototype, "OnAuthCodeChange", null),
        (0, a.Cg)([H], Ki.prototype, "LoginWithSteamGuard", null);
      let Qi = class extends o.Component {
        m_TimerID;
        m_bRequestInFlight;
        constructor(e) {
          super(e), (this.m_TimerID = 0), (this.m_bRequestInFlight = !1);
        }
        CancelLogin() {}
        componentDidMount() {
          this.m_TimerID = window.setInterval(() => this.tick(), 1e3);
        }
        componentWillUnmount() {
          clearInterval(this.m_TimerID), (this.m_TimerID = 0);
        }
        tick() {
          this.m_bRequestInFlight ||
            Dt.shutdown ||
            ((this.m_bRequestInFlight = !0),
            $t.UpdateLoginStatus(),
            (this.m_bRequestInFlight = !1));
        }
        render() {
          let e = "",
            t = !1,
            r = Ci("#Button_Cancel"),
            n = null;
          switch (this.props.loginState) {
            case 1:
              (e = Ci("#Login_ConnectingUser") + " " + $t.accountName),
                (t = !0);
              break;
            case 5:
              (e = Ci("#Status_NoConnection")),
                (t = !0),
                (r = Ci("#Menu_Exit"));
              break;
            case 3:
              e = Ci("#Login_LoggingOut");
              break;
            case 6:
              (e = Ci("#Status_NoSteamCmd")),
                (n =
                  !Dt.steamcmdConnected &&
                  (0, i.jsxs)("div", {
                    className: "HelpText",
                    children: [
                      (0, i.jsx)("br", {}),
                      Ci("#Status_NoSteamCmd_Help", String(27100)),
                    ],
                  }));
          }
          return (0, i.jsx)(Vi, {
            children: (0, i.jsxs)("div", {
              className: "LoginStatusContainer",
              children: [
                (0, i.jsx)("div", {
                  style: { width: "100%", height: "100%" },
                  children: (0, i.jsx)(L, {
                    size: "medium",
                    position: "center",
                  }),
                }),
                (0, i.jsx)("div", {
                  className: "LoginStatusMessage",
                  children: (0, i.jsx)("div", {
                    className: "LoginStatus PopupGenericBodyText",
                    children: e,
                  }),
                }),
                n,
                (0, i.jsx)("div", {
                  className: "LoginStatusButtonContainer",
                  children:
                    t &&
                    (0, i.jsx)("button", {
                      className: "GenericButton",
                      onClick: this.props.onCancel,
                      children: r,
                    }),
                }),
              ],
            }),
          });
        }
      };
      (0, a.Cg)([H], Qi.prototype, "CancelLogin", null),
        (Qi = (0, a.Cg)([l.PA], Qi));
      let Xi = class extends o.Component {
        constructor(e) {
          super(e);
        }
        CancelLogin() {
          2 == $t.loginState || 1 == $t.loginState || 7 == $t.loginState
            ? $t.CancelLogin()
            : Ei();
        }
        componentDidMount() {
          $t.UpdateLoginStatus();
        }
        render() {
          let e = $t.loginState;
          switch (e) {
            case -1:
              return (0, i.jsx)(Vi, {});
            case 0:
              return (0, i.jsx)($i, { onCancel: this.CancelLogin });
            case 2:
            case 7:
              return (0, i.jsx)(Ki, {
                loginState: e,
                onCancel: this.CancelLogin,
              });
            default:
              return (0, i.jsx)(Qi, {
                loginState: e,
                onCancel: this.CancelLogin,
              });
          }
        }
      };
      (0, a.Cg)([H], Xi.prototype, "CancelLogin", null),
        (Xi = (0, a.Cg)([l.PA], Xi));
      let Yi = class extends o.Component {
        constructor(e) {
          super(e);
        }
        render() {
          return (0, i.jsxs)("div", {
            className: "MainWindow",
            children: [
              (0, i.jsx)(Ai, {}),
              (0, i.jsx)("div", {
                className: "LanguageWindowContentContainer",
                children: (0, i.jsx)("div", {
                  className: "LanguageWindowContent",
                  children: (0, i.jsx)("div", {
                    className: "LanguageWindowContentGradient",
                    children: (0, i.jsx)("div", {
                      className: "LanguageBackground",
                      children: (0, i.jsx)(Zi, {}),
                    }),
                  }),
                }),
              }),
              (0, i.jsx)(Di, {}),
            ],
          });
        }
      };
      Yi = (0, a.Cg)([l.PA], Yi);
      class Zi extends o.Component {
        constructor(e) {
          super(e), (this.state = { strLanguage: Dt.language });
        }
        async Save() {
          let e = this.state.strLanguage;
          "None" === e && (e = "english");
          const t = _t.Init(jt);
          t.Body().set_language(e),
            await Ht.SetLanguage(t),
            await Oi(e),
            Dt.SetLanguage(e),
            Dt.SetView(3);
        }
        Cancel() {
          Dt.SetView(3);
        }
        onSelect(e) {
          this.setState({ strLanguage: e.target.value });
        }
        render() {
          let e = [];
          for (let t = 0; t < 32; t++) {
            let r = S(t),
              i = Ci("#Language_" + r);
            e.push({ key: t, value: r, name: i });
          }
          return (0, i.jsxs)("div", {
            className: "LanguageContainer",
            children: [
              (0, i.jsx)("div", {
                className: "PopupGenericTitle",
                children: Ci("#Language_Configure"),
              }),
              (0, i.jsx)("br", {}),
              (0, i.jsxs)("form", {
                className: "LanguageForm",
                children: [
                  (0, i.jsx)("div", {
                    className: "LanguageFormGroup",
                    children: (0, i.jsx)("select", {
                      value: this.state.strLanguage,
                      onChange: this.onSelect,
                      children: e.map((e, t) =>
                        (0, i.jsx)(
                          "option",
                          { value: e.value, children: e.name },
                          t,
                        ),
                      ),
                    }),
                  }),
                  (0, i.jsxs)("div", {
                    className: "GenericButtonGroup",
                    children: [
                      (0, i.jsx)("button", {
                        className: "GenericButton",
                        type: "submit",
                        onClick: this.Save,
                        children: Ci("#Button_Save"),
                      }),
                      (0, i.jsx)("button", {
                        className: "GenericButton",
                        type: "button",
                        onClick: this.Cancel,
                        children: Ci("#Button_Cancel"),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
      }
      (0, a.Cg)([H], Zi.prototype, "Save", null),
        (0, a.Cg)([H], Zi.prototype, "Cancel", null),
        (0, a.Cg)([H], Zi.prototype, "onSelect", null);
      class Ji extends o.Component {
        state = {};
        constructor(e) {
          super(e), (this.state.lastErrorKey = e.errorKey);
        }
        componentDidCatch(e, t) {
          lt()
            .ReportError(e, { strComponentStack: t.componentStack || void 0 })
            .then(
              (e) => e && this.setState({ identifierHash: e.identifierHash }),
            ),
            this.setState({
              error: { error: e, info: t },
              lastErrorKey: this.props.errorKey,
            });
        }
        Reset() {
          this.setState({ error: void 0 });
        }
        render() {
          const { children: e, fallback: t, errorKey: r } = this.props,
            { error: n, identifierHash: s, lastErrorKey: a } = this.state;
          return n && r == a
            ? void 0 !== t
              ? "function" == typeof t
                ? t(n.error)
                : t
              : lt().reporting_enabled
                ? (0, i.jsx)(tn, {
                    error: n,
                    identifierHash: s,
                    store: lt(),
                    onRefresh: this.Reset,
                  })
                : (0, i.jsx)(en, { error: n, onDismiss: this.Reset })
            : e || null;
        }
      }
      (0, a.Cg)([H], Ji.prototype, "Reset", null);
      const en = ({ error: e, onDismiss: t }) => {
          let r = e.error ? e.error.stack : "Stack missing",
            n = e.info ? e.info.componentStack : "",
            s = (e.error && e.error.message) || "unknown error";
          return (0, i.jsxs)(rn, {
            children: [
              (0, i.jsxs)(nn, { children: ['Error: "', s, '"'] }),
              "   ",
              (0, i.jsx)("span", {
                style: { textDecoration: "underline", cursor: "pointer" },
                onClick: t,
                children: "(x) Dismiss",
              }),
              (0, i.jsx)("br", {}),
              (0, i.jsx)(sn, { children: r }),
              (0, i.jsxs)(sn, {
                children: ["The error occurred while rendering:", n],
              }),
            ],
          });
        },
        tn = (e) => {
          const { error: t, onRefresh: r, identifierHash: n, store: s } = e,
            a = (t.error && t.error.message) || "unknown error",
            o = `${s.product}_${s.version}_${n}`;
          return (0, i.jsxs)(rn, {
            children: [
              (0, i.jsxs)(nn, {
                children: [
                  "Something went wrong while displaying this content. ",
                  (0, i.jsx)("span", {
                    style: { textDecoration: "underline", cursor: "pointer" },
                    onClick: r,
                    children: "Refresh",
                  }),
                ],
              }),
              (0, i.jsxs)(sn, { children: ["Error Reference: ", o] }),
              (0, i.jsx)(sn, { children: a }),
            ],
          });
        },
        rn = ({ children: e }) =>
          (0, i.jsx)("div", {
            style: {
              overflow: "auto",
              marginLeft: "15px",
              color: "white",
              fontSize: "16px",
              userSelect: "auto",
              backgroundColor: "black",
            },
            className: "ErrorBoundary",
            children: e,
          }),
        nn = ({ children: e }) =>
          (0, i.jsx)("h1", {
            style: {
              fontSize: "20px",
              display: "inline-block",
              marginTop: "15px",
              userSelect: "auto",
            },
            children: e,
          }),
        sn = ({ children: e }) =>
          (0, i.jsx)("pre", {
            style: { marginTop: "15px", opacity: 0.7, userSelect: "auto" },
            children: e,
          });
      class an extends o.Component {
        m_TimerID;
        m_bRequestInFlight;
        constructor(e) {
          super(e), (this.state = { rgClients: [], rgPayments: [] });
        }
        async componentDidMount() {
          this.refreshStatus(),
            (this.m_TimerID = window.setInterval(
              () => this.refreshStatus(),
              5e3,
            ));
        }
        componentWillUnmount() {
          clearInterval(this.m_TimerID), (this.m_TimerID = 0);
        }
        renderIP(e) {
          return (
            (e >>> 24) +
            "." +
            ((e >> 16) & 255) +
            "." +
            ((e >> 8) & 255) +
            "." +
            (255 & e)
          );
        }
        async refreshStatus() {
          this.m_bRequestInFlight = !0;
          const e = _t.Init(Tt),
            t = await Ht.GetClientStatus(e);
          if (1 != t.Hdr().eresult()) return;
          const { clients: r = [], payments: i = [] } = t.Body().toObject(),
            n = r.map((e) => ({
              ip: this.renderIP(e.ip),
              hostname: e.hostname,
              connected: e.connected,
              instanceid: e.instance_id,
            })),
            s = i.map((e) => ({
              transid: e.transid,
              hostname: e.hostname,
              amount: e.amount,
              status: e.purchase_status,
              name: e.persona_name,
              profile: e.profile_url,
              avatar: e.avatar_url,
            }));
          this.setState({ rgClients: n, rgPayments: s }),
            (this.m_bRequestInFlight = !1);
        }
        render() {
          const e = [
            Ci("#ClientStatus_IPAddress"),
            Ci("#ClientStatus_Hostname"),
            Ci("#ClientStatus_Status"),
          ];
          return (0, i.jsxs)("div", {
            className: "ClientStatusContainerGradient",
            children: [
              (0, i.jsx)(ln, { data: this.state.rgPayments }),
              (0, i.jsx)(on, { columns: e, data: this.state.rgClients }),
            ],
          });
        }
      }
      class on extends o.Component {
        constructor(e) {
          super(e);
        }
        render() {
          let e = this.props.columns,
            t = this.props.data;
          if (0 == t.length) {
            if (Dt.clientsHaveConnected)
              return (0, i.jsxs)("div", {
                children: [
                  (0, i.jsx)("div", {
                    className: "ClientStatusHeader",
                    children: (0, i.jsx)("label", {
                      className: "PopupGenericTitle",
                      children: Ci("#ClientStatus_Title"),
                    }),
                  }),
                  (0, i.jsx)("label", {
                    className: "PopupGenericBodyText",
                    children: Ci("#ClientStatus_NoClients"),
                  }),
                ],
              });
            let e = (0, i.jsx)("a", {
              className: "link blue",
              href: "https://help.steampowered.com/faqs/view/2EA8-4D75-DA21-31EB",
              children: "help.steampowered.com",
            });
            return (0, i.jsxs)("div", {
              children: [
                (0, i.jsx)("div", {
                  className: "ClientStatusHeader",
                  children: (0, i.jsx)("label", {
                    className: "PopupGenericTitle",
                    children: Ci("#ClientStatus_Title"),
                  }),
                }),
                (0, i.jsx)("label", {
                  className: "PopupGenericBodyText",
                  children: Ci("#ClientStatus_NoClients"),
                }),
                (0, i.jsx)("br", {}),
                (0, i.jsx)("label", {
                  className: "HelpText",
                  children: Ci("#ClientStatus_Troubleshoot") + ":",
                }),
                (0, i.jsxs)("ul", {
                  children: [
                    (0, i.jsx)("li", {
                      children: (0, i.jsx)("label", {
                        className: "HelpText",
                        children: Ci("#ClientStatus_Troubleshoot1"),
                      }),
                    }),
                    (0, i.jsx)("li", {
                      children: (0, i.jsx)("label", {
                        className: "HelpText",
                        children: Ri("#ClientStatus_Troubleshoot2", e),
                      }),
                    }),
                  ],
                }),
              ],
            });
          }
          Dt.SetClientsConnected(!0);
          let r = (0, i.jsx)("tr", {
              children: e.map((e, t) =>
                (0, i.jsx)("th", { className: "col" + t, children: e }, t),
              ),
            }),
            n = t.map(function (t) {
              let r = t.ip + String(t.instanceid);
              return (0, i.jsx)(
                "tr",
                {
                  children: e.map((e, r) => {
                    let n = "";
                    return (
                      (n =
                        0 == r
                          ? t.ip
                          : 1 == r
                            ? t.hostname
                            : t.connected
                              ? Ci("#Status_Connected")
                              : Ci("#Status_NotConnected")),
                      (0, i.jsx)("td", { className: "col" + r, children: n }, r)
                    );
                  }),
                },
                r,
              );
            });
          return (0, i.jsxs)("div", {
            className: "ClientStatusContainer",
            children: [
              (0, i.jsx)("div", {
                className: "ClientStatusHeader",
                children: (0, i.jsx)("label", {
                  className: "PopupGenericBodyTitle",
                  children: Ci("#ClientStatus_Title"),
                }),
              }),
              (0, i.jsx)("div", {
                className: "ClientStatusTableContainer",
                children: (0, i.jsxs)("table", {
                  className:
                    "ClientStatusTable table table-bordered table-hover",
                  children: [
                    (0, i.jsx)("thead", { children: r }),
                    (0, i.jsx)("tbody", { children: n }),
                  ],
                }),
              }),
            ],
          });
        }
      }
      class ln extends o.Component {
        constructor(e) {
          super(e);
        }
        Approve(e) {
          window.location.href =
            "https://partner.steamgames.com/walletfunding/approval/";
        }
        render() {
          let e = [
              Ci("#ClientStatus_Action"),
              Ci("#ClientStatus_Hostname"),
              Ci("#ClientStatus_Account"),
              Ci("#ClientStatus_Amount"),
            ],
            t = this.props.data,
            r = (0, i.jsx)("tr", {
              children: e.map((e, t) =>
                (0, i.jsx)("th", { className: "col" + t, children: e }, t),
              ),
            }),
            n = t.map((t) =>
              (0, i.jsx)(
                "tr",
                {
                  children: e.map((e, r) => {
                    switch (r) {
                      case 0:
                        return (0, i.jsx)(
                          "td",
                          {
                            className: "col" + r,
                            children: (0, i.jsx)("button", {
                              className: "btn_blue_white_innerfade",
                              onClick: this.Approve,
                              children: Ci("#ClientStatus_Approve"),
                            }),
                          },
                          r,
                        );
                      case 1:
                        return (0, i.jsx)(
                          "td",
                          { className: "col" + r, children: t.hostname },
                          r,
                        );
                      case 2:
                        return (0, i.jsx)(
                          "td",
                          {
                            className: "col" + r,
                            children: (0, i.jsxs)("div", {
                              className: "profile",
                              children: [
                                (0, i.jsx)("a", {
                                  href: t.profile,
                                  children: (0, i.jsx)("img", {
                                    className: "avatar",
                                    src: t.avatar,
                                  }),
                                }),
                                (0, i.jsx)("a", {
                                  className: "link",
                                  href: t.profile,
                                  children: t.name,
                                }),
                              ],
                            }),
                          },
                          r,
                        );
                      case 3:
                        return (0, i.jsx)(
                          "td",
                          { className: "col" + r, children: t.amount },
                          r,
                        );
                      default:
                        return null;
                    }
                  }),
                },
                t.transid,
              ),
            );
          return 0 == t.length
            ? null
            : (0, i.jsxs)("div", {
                className: "CafeFundingContainer",
                children: [
                  (0, i.jsx)("div", {
                    className: "CafeFundingHeader",
                    children: (0, i.jsx)("label", {
                      className: "PopupGenericTitle",
                      children: Ci("#ClientStatus_FundingRequests"),
                    }),
                  }),
                  (0, i.jsx)("div", {
                    className: "ClientStatusDesc",
                    children: (0, i.jsx)("label", {
                      className: "HelpText",
                      children: Ci("#ClientStatus_FundingInstr"),
                    }),
                  }),
                  (0, i.jsx)("div", {
                    className: "CafeFundingTableContainer",
                    children: (0, i.jsxs)("table", {
                      className:
                        "CafeFundingTable table table-bordered table-hover",
                      children: [
                        (0, i.jsx)("thead", { children: r }),
                        (0, i.jsx)("tbody", { children: n }),
                      ],
                    }),
                  }),
                ],
              });
        }
      }
      (0, a.Cg)([H], ln.prototype, "Approve", null);
      let cn = class extends o.Component {
        constructor(e) {
          super(e);
        }
        render() {
          return (0, i.jsxs)("div", {
            className: "MainWindow",
            children: [
              (0, i.jsx)(Ai, {}),
              (0, i.jsx)("div", {
                className: "CacheWindowContentContainer",
                children: (0, i.jsx)("div", {
                  className: "CacheWindowContent",
                  children: (0, i.jsx)("div", {
                    className: "CacheWindowContentGradient",
                    children: (0, i.jsx)("div", {
                      className: "CacheBackground",
                      children: (0, i.jsx)(dn, {}),
                    }),
                  }),
                }),
              }),
              (0, i.jsx)(Di, {}),
            ],
          });
        }
      };
      function un(e) {
        return null == e ? "" : e.toLocaleString([]);
      }
      function mn(e) {
        if (null == e) return "";
        return (e / 1e6).toFixed(1).toLocaleString();
      }
      cn = (0, a.Cg)([l.PA], cn);
      class dn extends o.Component {
        m_bEditDialogVisible = !1;
        m_TimerID;
        m_bRequestInFlight = !1;
        constructor(e) {
          super(e),
            (this.state = {
              bEnabled: !1,
              unPort: 0,
              strCacheLocation: "",
              unMaxSize: 0,
              bP2PEnabled: !1,
              unCurrentSize: 0,
              unCurrentBW: 0,
              unTotalBytesServed: 0,
              strExplicitIP: "",
              bExternalProcess: !1,
            });
        }
        async Edit() {
          if (this.m_bEditDialogVisible) return;
          let e = o.createElement(
            _n,
            {
              bEnabled: this.state.bEnabled,
              unPort: this.state.unPort,
              strCacheLocation: this.state.strCacheLocation,
              unMaxSize: this.state.unMaxSize,
              bP2PEnabled: this.state.bP2PEnabled,
              bExternalProcess: this.state.bExternalProcess,
              strExplicitIP: this.state.strExplicitIP,
              onOk: (e, t, r, i, n, s, a) => this.OnUpdate(e, t, r, i, n, s, a),
              CloseModal: () => this.CloseModal(),
            },
            null,
          );
          (this.m_bEditDialogVisible = !0), Dt.ShowModal(e);
        }
        Cancel() {
          Dt.SetView(3);
        }
        CloseModal() {
          this.m_bEditDialogVisible = !1;
        }
        async OnUpdate(e, t, r, i, n, s, a) {
          const o = _t.Init(Nt);
          o.Body().set_enabled(e),
            o.Body().set_port(t),
            o.Body().set_cache_location(r),
            o.Body().set_max_size_gb(i),
            o.Body().set_p2p_enabled(n),
            o.Body().set_explicit_ip_address(a),
            o.Body().set_external_process(s);
          1 != (await Ht.UpdateCacheConfig(o)).Hdr().eresult()
            ? await Ni(Ci("#Cache_UpdateFailed"))
            : (Ei(!0), Dt.SetView(3));
        }
        async componentWillMount() {
          const e = _t.Init(Ot),
            t = await Ht.GetContentCacheStatus(e);
          this.setState({
            bEnabled: t.Body().enabled(),
            unPort: t.Body().port(),
            strCacheLocation: t.Body().cache_location(),
            unMaxSize: t.Body().max_size_gb(),
            bP2PEnabled: t.Body().p2p_enabled(),
            bExternalProcess: t.Body().external_process(),
            strExplicitIP: t.Body().explicit_ip_address(),
          }),
            t.Body().enabled() &&
              this.setState({
                unCurrentSize: t.Body().current_size_gb(),
                unCurrentBW: parseFloat(t.Body().current_bw()),
                unTotalBytesServed: parseFloat(t.Body().total_bytes_served()),
              }),
            (this.m_TimerID = window.setInterval(() => this.tick(), 1e3));
        }
        componentWillUnmount() {
          clearInterval(this.m_TimerID), (this.m_TimerID = 0);
        }
        async tick() {
          if (this.m_bRequestInFlight || Dt.shutdown) return;
          this.m_bRequestInFlight = !0;
          const e = _t.Init(Ot),
            t = await Ht.GetContentCacheStatus(e);
          t.Body().enabled() &&
            this.setState({
              unCurrentSize: t.Body().current_size_gb(),
              unCurrentBW: parseFloat(t.Body().current_bw()),
              unTotalBytesServed: parseFloat(t.Body().total_bytes_served()),
            }),
            (this.m_bRequestInFlight = !1);
        }
        render() {
          let e = this.state.bEnabled
              ? Ci("#Status_Enabled")
              : Ci("#Status_Disabled"),
            t = this.state.bP2PEnabled
              ? Ci("#Status_Enabled")
              : Ci("#Status_Disabled"),
            r = this.state.bExternalProcess
              ? Ci("#Status_Enabled")
              : Ci("#Status_Disabled");
          return (0, i.jsxs)("div", {
            className: "CacheContainer",
            children: [
              (0, i.jsx)("div", {
                className: "PopupGenericTitle",
                children: Ci("#Cache_Configure"),
              }),
              (0, i.jsx)("br", {}),
              (0, i.jsxs)("div", {
                className: "CacheFormGroup",
                children: [
                  (0, i.jsx)("label", {
                    className: "PopupGenericBodyText TextPairName",
                    children: Ci("#Cache_Location") + ":",
                  }),
                  (0, i.jsx)("label", {
                    className: "PopupGenericBodyText TextPairValue",
                    children: e,
                  }),
                ],
              }),
              (0, i.jsxs)("div", {
                className: "CacheFormGroup",
                children: [
                  (0, i.jsx)("label", {
                    className: "PopupGenericBodyText TextPairName",
                    children: Ci("#Cache_Location") + ":",
                  }),
                  (0, i.jsx)("label", {
                    className: "PopupGenericBodyText TextPairValue",
                    children: this.state.strCacheLocation,
                  }),
                  (0, i.jsx)(Pi, { strText: Ci("#Cache_LocationTip") }),
                ],
              }),
              (0, i.jsxs)("div", {
                className: "CacheFormGroup",
                children: [
                  (0, i.jsx)("label", {
                    className: "PopupGenericBodyText TextPairName",
                    children: Ci("#Cache_Port") + ":",
                  }),
                  (0, i.jsx)("label", {
                    className: "PopupGenericBodyText TextPairValue",
                    children: this.state.unPort,
                  }),
                  (0, i.jsx)(Pi, { strText: Ci("#Cache_PortTip") }),
                ],
              }),
              (0, i.jsxs)("div", {
                className: "CacheFormGroup",
                children: [
                  (0, i.jsx)("label", {
                    className: "PopupGenericBodyText TextPairName",
                    children: Ci("#Cache_MaxSize") + " (GB):",
                  }),
                  (0, i.jsx)("label", {
                    className: "PopupGenericBodyText TextPairValue",
                    children: un(this.state.unMaxSize),
                  }),
                  (0, i.jsx)(Pi, { strText: Ci("#Cache_MaxSizeTip") }),
                ],
              }),
              (0, i.jsxs)("div", {
                className: "CacheFormGroup",
                children: [
                  (0, i.jsx)("label", {
                    className: "PopupGenericBodyText TextPairName",
                    children: Ci("#Cache_P2P") + ":",
                  }),
                  (0, i.jsx)("label", {
                    className: "PopupGenericBodyText TextPairValue",
                    children: t,
                  }),
                  (0, i.jsx)(Pi, { strText: Ci("#Cache_P2PTip") }),
                ],
              }),
              (0, i.jsxs)("div", {
                className: "CacheFormGroup",
                children: [
                  (0, i.jsx)("label", {
                    className: "PopupGenericBodyText TextPairName",
                    children: Ci("#Cache_Explicit_IP") + ":",
                  }),
                  (0, i.jsx)("label", {
                    className: "PopupGenericBodyText TextPairValue",
                    children: this.state.strExplicitIP,
                  }),
                  (0, i.jsx)(Pi, { strText: Ci("#Cache_ExplicitIPTip") }),
                ],
              }),
              (0, i.jsxs)("div", {
                className: "CacheFormGroup",
                children: [
                  (0, i.jsx)("label", {
                    className: "PopupGenericBodyText TextPairName",
                    children: Ci("#Cache_External_Process") + ":",
                  }),
                  (0, i.jsx)("label", {
                    className: "PopupGenericBodyText TextPairValue",
                    children: r,
                  }),
                  (0, i.jsx)(Pi, { strText: Ci("#Cache_ExternalProcessTip") }),
                ],
              }),
              (0, i.jsx)("br", {}),
              (0, i.jsxs)("div", {
                className: "CacheFormGroup",
                children: [
                  (0, i.jsx)("label", {
                    className: "PopupGenericBodyText TextPairName",
                    children: Ci("#Cache_CurrentSize") + " (GB):",
                  }),
                  (0, i.jsx)("label", {
                    className: "PopupGenericBodyText TextPairValue",
                    children: un(this.state.unCurrentSize),
                  }),
                ],
              }),
              (0, i.jsxs)("div", {
                className: "CacheFormGroup",
                children: [
                  (0, i.jsx)("label", {
                    className: "PopupGenericBodyText TextPairName",
                    children: Ci("#Cache_Bandwidth") + ":",
                  }),
                  (0, i.jsx)("label", {
                    className: "PopupGenericBodyText TextPairValue",
                    children: mn(this.state.unCurrentBW) + " Mbps",
                  }),
                ],
              }),
              (0, i.jsxs)("div", {
                className: "CacheFormGroup",
                children: [
                  (0, i.jsx)("label", {
                    className: "PopupGenericBodyText TextPairName",
                    children: Ci("#Cache_BytesServed") + ":",
                  }),
                  (0, i.jsx)("label", {
                    className: "PopupGenericBodyText TextPairValue",
                    children:
                      ((n = this.state.unTotalBytesServed),
                      null == n
                        ? ""
                        : n < 1e3
                          ? n.toLocaleString([])
                          : n < 1e6
                            ? (n / 1e3).toFixed(1).toLocaleString() + " KB"
                            : n < 1e9
                              ? (n / 1e6).toFixed(2).toLocaleString() + " MB"
                              : (n / 1e9).toFixed(3).toLocaleString() + " GB"),
                  }),
                ],
              }),
              (0, i.jsxs)("div", {
                className: "GenericButtonGroup",
                children: [
                  (0, i.jsx)("button", {
                    className: "GenericButton",
                    type: "submit",
                    onClick: this.Edit,
                    children: Ci("#Button_Edit"),
                  }),
                  (0, i.jsx)("button", {
                    className: "GenericButton",
                    type: "button",
                    onClick: this.Cancel,
                    children: Ci("#Button_Cancel"),
                  }),
                ],
              }),
            ],
          });
          var n;
        }
      }
      (0, a.Cg)([H], dn.prototype, "Edit", null),
        (0, a.Cg)([H], dn.prototype, "Cancel", null),
        (0, a.Cg)([H], dn.prototype, "CloseModal", null);
      class _n extends o.Component {
        constructor(e) {
          super(e),
            (this.state = {
              bEnabled: this.props.bEnabled,
              unPort: this.props.unPort,
              strCacheLocation: this.props.strCacheLocation,
              unMaxSize: this.props.unMaxSize,
              bP2PEnabled: this.props.bP2PEnabled,
              bExternalProcess: this.props.bExternalProcess,
              strExplicitIP: this.props.strExplicitIP,
            });
        }
        Save() {
          return (
            this.props.onOk(
              this.state.bEnabled,
              this.state.unPort,
              this.state.strCacheLocation,
              this.state.unMaxSize,
              this.state.bP2PEnabled,
              this.state.bExternalProcess,
              this.state.strExplicitIP,
            ),
            this.props.CloseModal(),
            !0
          );
        }
        Cancel() {
          return this.props.CloseModal(), !0;
        }
        OnEnableChange(e) {
          this.setState({ bEnabled: e.target.checked }),
            e.target.checked &&
              0 == this.state.unPort &&
              this.setState({ unPort: 80 });
        }
        OnP2PChange(e) {
          this.setState({ bP2PEnabled: e.target.checked });
        }
        OnPortChange(e) {
          this.setState({ unPort: Number(e.target.value) });
        }
        OnMaxSizeChange(e) {
          this.setState({ unMaxSize: Number(e.target.value) });
        }
        OnLocationChange(e) {
          this.setState({ strCacheLocation: e.target.value });
        }
        OnExternalProcessChange(e) {
          this.setState({ bExternalProcess: e.target.checked });
        }
        OnExplicitIPChange(e) {
          this.setState({ strExplicitIP: e.target.value });
        }
        render() {
          return (0, i.jsx)(xi, {
            closeModal: this.props.closeModal,
            onOk: this.Save,
            onCancel: this.Cancel,
            strTitle: Ci("#Cache_Configure"),
            className: "CacheEditDialog",
            strOkButtonText: Ci("#Button_Restart"),
            children: (0, i.jsxs)("div", {
              className: "CacheEditContainer",
              children: [
                (0, i.jsxs)("div", {
                  className: "CacheEditGroup CacheStateEnable",
                  children: [
                    (0, i.jsx)("input", {
                      type: "checkbox",
                      checked: this.state.bEnabled,
                      onChange: this.OnEnableChange,
                    }),
                    (0, i.jsx)("label", {
                      className: "PopupGenericBodyText TextPairName",
                      children: Ci("#Cache_EnableCache"),
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  className: "CacheEditGroup",
                  children: [
                    (0, i.jsx)("label", {
                      className: "PopupGenericBodyText TextPairName",
                      children: Ci("#Cache_Location") + ":",
                    }),
                    (0, i.jsx)("input", {
                      className: "CacheEditLocation TextPairValue",
                      type: "text",
                      value: this.state.strCacheLocation,
                      onChange: this.OnLocationChange,
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  className: "CacheEditGroup",
                  children: [
                    (0, i.jsxs)("div", {
                      className: "CacheFormGroup",
                      children: [
                        (0, i.jsx)("label", {
                          className: "PopupGenericBodyText TextPairName",
                          children: Ci("#Cache_MaxSize") + " (GB):",
                        }),
                        (0, i.jsx)("input", {
                          className: "CacheEditMaxSize TextPairValue",
                          type: "number",
                          value: this.state.unMaxSize,
                          onChange: this.OnMaxSizeChange,
                        }),
                      ],
                    }),
                    (0, i.jsxs)("div", {
                      className: "CacheFormGroup",
                      children: [
                        (0, i.jsx)("label", {
                          className: "PopupGenericBodyText TextPairName",
                          children: Ci("#Cache_Port") + ":",
                        }),
                        (0, i.jsx)("input", {
                          className: "CacheEditPort TextPairValue",
                          type: "number",
                          value: this.state.unPort,
                          onChange: this.OnPortChange,
                        }),
                      ],
                    }),
                    (0, i.jsxs)("div", {
                      className: "CacheFormGroup",
                      children: [
                        (0, i.jsx)("label", {
                          className: "PopupGenericBodyText TextPairName",
                          children: Ci("#Cache_Explicit_IP") + ":",
                        }),
                        (0, i.jsx)("input", {
                          className: "CacheEditPort TextPairValue",
                          type: "text",
                          value: this.state.strExplicitIP,
                          onChange: this.OnExplicitIPChange,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  className: "CacheEditGroup CachePNPEnable",
                  children: [
                    (0, i.jsx)("input", {
                      type: "checkbox",
                      checked: this.state.bP2PEnabled,
                      onChange: this.OnP2PChange,
                    }),
                    (0, i.jsx)("label", {
                      className: "PopupGenericBodyText TextPairName",
                      children: Ci("#Cache_EnableP2P"),
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  className: "CacheEditGroup CacheExternalProcess",
                  children: [
                    (0, i.jsx)("input", {
                      type: "checkbox",
                      checked: this.state.bExternalProcess,
                      onChange: this.OnExternalProcessChange,
                    }),
                    (0, i.jsx)("label", {
                      className: "PopupGenericBodyText TextPairName",
                      children: Ci("#Cache_External_Process"),
                    }),
                  ],
                }),
                (0, i.jsx)("div", {
                  className: "CacheEditGroup",
                  children: (0, i.jsx)("label", {
                    className: "PopupGenericBodyText",
                    children: Ci("#Cache_RestartRequired"),
                  }),
                }),
              ],
            }),
          });
        }
      }
      (0, a.Cg)([H], _n.prototype, "Save", null),
        (0, a.Cg)([H], _n.prototype, "Cancel", null),
        (0, a.Cg)([H], _n.prototype, "OnEnableChange", null),
        (0, a.Cg)([H], _n.prototype, "OnP2PChange", null),
        (0, a.Cg)([H], _n.prototype, "OnPortChange", null),
        (0, a.Cg)([H], _n.prototype, "OnMaxSizeChange", null),
        (0, a.Cg)([H], _n.prototype, "OnLocationChange", null),
        (0, a.Cg)([H], _n.prototype, "OnExternalProcessChange", null),
        (0, a.Cg)([H], _n.prototype, "OnExplicitIPChange", null);
      let bn = class extends o.Component {
        m_TimerID;
        m_bRequestInFlight;
        constructor(e) {
          super(e), (this.state = { bLocalizationComplete: !1 });
        }
        async componentDidMount() {
          const e = _t.Init(Ft);
          let t;
          const r = _t.Init(Ot);
          await Promise.all([
            Ht.GetLanguage(e),
            Ht.GetContentCacheStatus(r),
          ]).then((e) => {
            t = e[0];
            const r = e[1];
            Dt.SetCacheState(r.Body().enabled());
          });
          let i = "None" === t.Body().language(),
            n = S(M(t.Body().language()));
          "None" !== t.Body().language() && Dt.SetLanguage(n),
            await Oi(n),
            this.setState({ bLocalizationComplete: !0 }),
            Dt.SetView(i ? 2 : 1),
            (this.m_TimerID = window.setInterval(() => this.tick(), 1e3));
        }
        componentWillUnmount() {
          clearInterval(this.m_TimerID), (this.m_TimerID = 0);
        }
        async tick() {
          if (this.m_bRequestInFlight || Dt.shutdown) return;
          this.m_bRequestInFlight = !0;
          const e = _t.Init(Ct),
            t = await Ht.GetStatus(e);
          1 != t.Hdr().eresult()
            ? ($t.SetSteamCmdNotConnected(), Dt.SetView(1))
            : ($t.SetLoginStatus(
                t.Body().logon_state(),
                t.Body().logon_eresult(),
              ),
              Dt.SetConnection(t.Body().connected()),
              Dt.SetCacheState(t.Body().cache_enabled()),
              Dt.SetAcctStatus(t.Body().acct_status())),
            4 == $t.loginState && 1 == Dt.view
              ? Dt.SetView(3)
              : 4 != $t.loginState && 3 == Dt.view && Dt.SetView(1),
            (this.m_bRequestInFlight = !1);
        }
        render() {
          let e = Dt.view;
          return (
            3 == e && 4 != $t.loginState && (e = 1),
            (0, i.jsx)("div", {
              id: "SiteServerMain",
              className: "SiteServerMain",
              children: (0, i.jsxs)(Ji, {
                children: [
                  1 == e && (0, i.jsx)(Xi, {}),
                  2 == e && (0, i.jsx)(Yi, {}),
                  3 == e && (0, i.jsx)(gn, {}),
                  4 == e && (0, i.jsx)(cn, {}),
                  (0, i.jsx)(Ti, {}),
                ],
              }),
            })
          );
        }
      };
      bn = (0, a.Cg)([l.PA], bn);
      class gn extends o.PureComponent {
        constructor(e) {
          super(e), (this.state = { bSidebarCollapsed: !1 });
        }
        render() {
          return (0, i.jsxs)("div", {
            className: "MainWindow",
            children: [
              (0, i.jsx)(Ui, {}),
              (0, i.jsx)("div", {
                className: "MainWindowContentContainer",
                children: (0, i.jsx)(pn, {}),
              }),
              (0, i.jsx)(Gi, {}),
            ],
          });
        }
      }
      let pn = class extends o.Component {
        constructor(e) {
          super(e);
        }
        render() {
          return (0, i.jsx)("div", {
            className: "MainWindowContent",
            children: (0, i.jsx)("div", {
              className: "MainWindowContentGradient",
              children: (0, i.jsx)("div", {
                className: "MainWindowClientStatusContainer",
                children: (0, i.jsx)(an, {}),
              }),
            }),
          });
        }
      };
      pn = (0, a.Cg)([l.PA], pn);
      const Bn = bn;
      (0, q.jK)({ enforceActions: "never" }),
        (window.AssertMsg = s),
        n
          .createRoot(document.getElementById("root"))
          .render((0, i.jsx)(Bn, {}));
    },
    2857: (e, t, r) => {
      var i = {
        "./siteserverui_arabic.json": [8449, 8449],
        "./siteserverui_brazilian.json": [6125, 6125],
        "./siteserverui_bulgarian.json": [3814, 3814],
        "./siteserverui_czech.json": [6680, 6680],
        "./siteserverui_danish.json": [2444, 2444],
        "./siteserverui_dutch.json": [5001, 5001],
        "./siteserverui_english.json": [2895, 2895],
        "./siteserverui_finnish.json": [5024, 5024],
        "./siteserverui_french.json": [1189, 1189],
        "./siteserverui_german.json": [1319, 1319],
        "./siteserverui_greek.json": [4279, 4279],
        "./siteserverui_hungarian.json": [1698, 1698],
        "./siteserverui_indonesian.json": [5701, 5701],
        "./siteserverui_italian.json": [1103, 1103],
        "./siteserverui_japanese.json": [9666, 9666],
        "./siteserverui_koreana.json": [7476, 7476],
        "./siteserverui_latam.json": [8676, 8676],
        "./siteserverui_malay.json": [4539, 4539],
        "./siteserverui_norwegian.json": [4719, 4719],
        "./siteserverui_polish.json": [9400, 9400],
        "./siteserverui_portuguese.json": [7896, 7896],
        "./siteserverui_romanian.json": [578, 578],
        "./siteserverui_russian.json": [6742, 6742],
        "./siteserverui_schinese.json": [7077, 7077],
        "./siteserverui_spanish.json": [6975, 6975],
        "./siteserverui_swedish.json": [5294, 5294],
        "./siteserverui_tchinese.json": [4846, 4846],
        "./siteserverui_thai.json": [1695, 1695],
        "./siteserverui_turkish.json": [9423, 9423],
        "./siteserverui_ukrainian.json": [9709, 9709],
        "./siteserverui_vietnamese.json": [8050, 8050],
      };
      function n(e) {
        if (!r.o(i, e))
          return Promise.resolve().then(() => {
            var t = new Error("Cannot find module '" + e + "'");
            throw ((t.code = "MODULE_NOT_FOUND"), t);
          });
        var t = i[e],
          n = t[0];
        return r.e(t[1]).then(() => r.t(n, 19));
      }
      (n.keys = () => Object.keys(i)), (n.id = 2857), (e.exports = n);
    },
  },
  (e) => {
    e.O(0, [8997], () => {
      return (t = 4453), e((e.s = t));
      var t;
    });
    e.O();
  },
]);

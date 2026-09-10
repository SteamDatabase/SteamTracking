/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "10984581";
(() => {
  var e,
    t,
    n,
    i,
    r,
    s = {
      9437: (e, t, n) => {
        var i = {
          "./friendsui_arabic.json": [64541, 6518],
          "./friendsui_brazilian.json": [34977, 4154],
          "./friendsui_bulgarian.json": [29322, 6385],
          "./friendsui_czech.json": [88612, 7487],
          "./friendsui_danish.json": [23992, 4787],
          "./friendsui_dutch.json": [26117, 4302],
          "./friendsui_english.json": [20723, 3016],
          "./friendsui_finnish.json": [80444, 8759],
          "./friendsui_french.json": [79337, 8194],
          "./friendsui_german.json": [51651, 5480],
          "./friendsui_greek.json": [74483, 4488],
          "./friendsui_hungarian.json": [35798, 5341],
          "./friendsui_indonesian.json": [88097, 762],
          "./friendsui_italian.json": [67291, 3232],
          "./friendsui_japanese.json": [52118, 3485],
          "./friendsui_koreana.json": [9104, 6971],
          "./friendsui_latam.json": [42944, 1499],
          "./friendsui_malay.json": [18495, 2532],
          "./friendsui_norwegian.json": [53267, 4776],
          "./friendsui_polish.json": [92180, 6127],
          "./friendsui_portuguese.json": [90828, 3415],
          "./friendsui_romanian.json": [35534, 7861],
          "./friendsui_russian.json": [44330, 2945],
          "./friendsui_sc_schinese.json": [27088, 43],
          "./friendsui_schinese.json": [77033, 9746],
          "./friendsui_spanish.json": [22619, 9808],
          "./friendsui_swedish.json": [40842, 6609],
          "./friendsui_tchinese.json": [34618, 8766],
          "./friendsui_thai.json": [33779, 6888],
          "./friendsui_turkish.json": [22483, 3e3],
          "./friendsui_ukrainian.json": [54297, 4434],
          "./friendsui_vietnamese.json": [13414, 3789],
        };
        function r(e) {
          if (!n.o(i, e))
            return Promise.resolve().then(() => {
              var t = new Error("Cannot find module '" + e + "'");
              throw ((t.code = "MODULE_NOT_FOUND"), t);
            });
          var t = i[e],
            r = t[0];
          return n.e(t[1]).then(() => n.t(r, 19));
        }
        (r.keys = () => Object.keys(i)), (r.id = 9437), (e.exports = r);
      },
      48516: (e, t, n) => {
        var i = {
          "./friendsui_arabic.json": [64541, 6518],
          "./friendsui_brazilian.json": [34977, 4154],
          "./friendsui_bulgarian.json": [29322, 6385],
          "./friendsui_czech.json": [88612, 7487],
          "./friendsui_danish.json": [23992, 4787],
          "./friendsui_dutch.json": [26117, 4302],
          "./friendsui_english.json": [20723, 3016],
          "./friendsui_finnish.json": [80444, 8759],
          "./friendsui_french.json": [79337, 8194],
          "./friendsui_german.json": [51651, 5480],
          "./friendsui_greek.json": [74483, 4488],
          "./friendsui_hungarian.json": [35798, 5341],
          "./friendsui_indonesian.json": [88097, 762],
          "./friendsui_italian.json": [67291, 3232],
          "./friendsui_japanese.json": [52118, 3485],
          "./friendsui_koreana.json": [9104, 6971],
          "./friendsui_latam.json": [42944, 1499],
          "./friendsui_malay.json": [18495, 2532],
          "./friendsui_norwegian.json": [53267, 4776],
          "./friendsui_polish.json": [92180, 6127],
          "./friendsui_portuguese.json": [90828, 3415],
          "./friendsui_romanian.json": [35534, 7861],
          "./friendsui_russian.json": [44330, 2945],
          "./friendsui_sc_schinese.json": [27088, 43],
          "./friendsui_schinese.json": [77033, 9746],
          "./friendsui_spanish.json": [22619, 9808],
          "./friendsui_swedish.json": [40842, 6609],
          "./friendsui_tchinese.json": [34618, 8766],
          "./friendsui_thai.json": [33779, 6888],
          "./friendsui_turkish.json": [22483, 3e3],
          "./friendsui_ukrainian.json": [54297, 4434],
          "./friendsui_vietnamese.json": [13414, 3789],
        };
        function r(e) {
          if (!n.o(i, e))
            return Promise.resolve().then(() => {
              var t = new Error("Cannot find module '" + e + "'");
              throw ((t.code = "MODULE_NOT_FOUND"), t);
            });
          var t = i[e],
            r = t[0];
          return n.e(t[1]).then(() => n.t(r, 19));
        }
        (r.keys = () => Object.keys(i)), (r.id = 48516), (e.exports = r);
      },
      67497: (e, t, n) => {
        "use strict";
        n(30186);
        var i = n(63696),
          r = n(7470),
          s = n(24960);
        const a = {
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
          o = {
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
            excluded_content_descriptors: [s.u7, s.T4, s.mx],
          },
          c = { steamid: "", clanid: 0, listid: 0 },
          l = {
            CLANSTEAMID: "",
            CLANACCOUNTID: 0,
            APPID: 0,
            VANITY_ID: "",
            IS_CREATOR_HOME: !1,
            IS_CURATOR: !1,
            IS_OGG: !1,
            CAN_UPLOAD_IMAGES: !1,
            IS_VALVE_GROUP: !1,
            IS_ALLOWED_SC: !1,
          },
          d = { ANNOUNCEMENT_GID: "", TAKEOVER_ANNOUNCEMENT_GID: "" };
        function u() {
          return !!window.document;
        }
        const _ = "webui_config";
        function h(e, t = _) {
          return m(e, t, !0);
        }
        function m(e, t = _, n) {
          let i;
          if (
            ((i =
              "string" == typeof t
                ? {
                    NODE_ENV: "production",
                    STEAM_BUILD: "buildbot",
                    VALVE_BUILD: "false",
                  }.MOBILE_BUILD
                  ? null
                  : document.getElementById(t)
                : t),
            i)
          )
            try {
              if (i.hasAttribute("data-" + e)) {
                return JSON.parse(i.getAttribute("data-" + e));
              }
              return null;
            } catch (e) {
              console.error(
                "Failed to parse config for " +
                  o.steamid +
                  " (" +
                  window.location.href +
                  ")",
                e,
              );
            }
          else n && console.error("Missing config element #", t);
        }
        function p(e = _) {
          const t = {},
            n = h("config", e);
          n && (Object.assign(a, n), (t.config = !0));
          const i = h("userinfo", e);
          i &&
            (Object.assign(o, i),
            (t.userConfig = !0),
            o.is_support &&
              (function () {
                let e = null;
                u() &&
                  (e = (function (e) {
                    if (!u() || !window.document.cookie) return null;
                    const t = document.cookie.match("(^|; )" + e + "=([^;]*)");
                    return t && t[2] ? decodeURIComponent(t[2]) : null;
                  })(k));
                return Boolean(e && 1 === Number.parseInt(e));
              })() &&
              (o.is_support = !1));
          const r = h("broadcast", e);
          r && (Object.assign(c, r), (t.broadcastConfig = !0));
          const s = h("community", e);
          s && (Object.assign(l, s), (t.communityConfig = !0));
          const m = h("event", e);
          return (
            m && (Object.assign(d, m), (t.eventConfig = !0)),
            (f = !0),
            g.forEach((e) => e()),
            t
          );
        }
        let g = new Set(),
          f = !1;
        const k = "presentation_mode";
        i.createContext({});
        n(83957), n(22386);
        new Map();
        var b, E, I;
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
            (e[(e.kPFIFlag_PendingApproval = 256)] =
              "kPFIFlag_PendingApproval"),
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
        })(b || (b = {})),
          (function (e) {
            (e[(e.k_EPFSplitType_MicrotransactionItem = 0)] =
              "k_EPFSplitType_MicrotransactionItem"),
              (e[(e.k_EPFSplitType_WorkshopItem = 1)] =
                "k_EPFSplitType_WorkshopItem"),
              (e[(e.k_EPFSplitType_GreenlightItem = 2)] =
                "k_EPFSplitType_GreenlightItem"),
              (e[(e.k_EPFSplitType_SharedFile = 3)] =
                "k_EPFSplitType_SharedFile");
          })(E || (E = {})),
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
              (e[(e.k_EPFAuditAction_Deleted = 23)] =
                "k_EPFAuditAction_Deleted"),
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
          })(I || (I = {}));
        const S = 2147483647,
          A = 30;
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
        function F(e, t = 0) {
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
              return A;
            case "malay":
              return 31;
            default:
              return t;
          }
        }
        var P, v, C, y, T, R, w, L;
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
        })(P || (P = {})),
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
          })(v || (v = {})),
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
          })(C || (C = {})),
          (function (e) {
            (e[(e.k_EFloatingGamepadTextInputModeModeSingleLine = 0)] =
              "k_EFloatingGamepadTextInputModeModeSingleLine"),
              (e[(e.k_EFloatingGamepadTextInputModeModeMultipleLines = 1)] =
                "k_EFloatingGamepadTextInputModeModeMultipleLines"),
              (e[(e.k_EFloatingGamepadTextInputModeModeEmail = 2)] =
                "k_EFloatingGamepadTextInputModeModeEmail"),
              (e[(e.k_EFloatingGamepadTextInputModeModeNumeric = 3)] =
                "k_EFloatingGamepadTextInputModeModeNumeric");
          })(y || (y = {})),
          (function (e) {
            (e[(e.k_EAppUpdateContentType_Content = 0)] =
              "k_EAppUpdateContentType_Content"),
              (e[(e.k_EAppUpdateContentType_Workshop = 1)] =
                "k_EAppUpdateContentType_Workshop"),
              (e[(e.k_EAppUpdateContentType_Shader = 2)] =
                "k_EAppUpdateContentType_Shader"),
              (e[(e.k_EAppUpdateContentType_Max = 3)] =
                "k_EAppUpdateContentType_Max");
          })(T || (T = {})),
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
              (e[(e.k_EAppUpdateProgress_Max = 7)] =
                "k_EAppUpdateProgress_Max");
          })(R || (R = {})),
          (function (e) {
            (e[(e.k_EOverlayToStoreFlag_None = 0)] =
              "k_EOverlayToStoreFlag_None"),
              (e[(e.k_EOverlayToStoreFlag_AddToCart = 1)] =
                "k_EOverlayToStoreFlag_AddToCart"),
              (e[(e.k_EOverlayToStoreFlag_AddToCartAndShow = 2)] =
                "k_EOverlayToStoreFlag_AddToCartAndShow");
          })(w || (w = {})),
          (function (e) {
            (e[(e.k_EActivateGameOverlayToWebPageMode_Default = 0)] =
              "k_EActivateGameOverlayToWebPageMode_Default"),
              (e[(e.k_EActivateGameOverlayToWebPageMode_Modal = 1)] =
                "k_EActivateGameOverlayToWebPageMode_Modal");
          })(L || (L = {}));
        var M, U, G, j, O, N;
        !(function (e) {
          (e[(e.k_ERaiseGameWindowResult_NotRunning = 1)] =
            "k_ERaiseGameWindowResult_NotRunning"),
            (e[(e.k_ERaiseGameWindowResult_Success = 2)] =
              "k_ERaiseGameWindowResult_Success"),
            (e[(e.k_ERaiseGameWindowResult_Failure = 3)] =
              "k_ERaiseGameWindowResult_Failure");
        })(M || (M = {})),
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
          })(G || (G = {})),
          (function (e) {
            (e[(e.k_EGameIDTypeApp = 0)] = "k_EGameIDTypeApp"),
              (e[(e.k_EGameIDTypeGameMod = 1)] = "k_EGameIDTypeGameMod"),
              (e[(e.k_EGameIDTypeShortcut = 2)] = "k_EGameIDTypeShortcut");
          })(j || (j = {})),
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
          })(O || (O = {})),
          (function (e) {
            (e[(e.k_EWindowBringToFrontInvalid = 0)] =
              "k_EWindowBringToFrontInvalid"),
              (e[(e.k_EWindowBringToFrontAndForceOS = 1)] =
                "k_EWindowBringToFrontAndForceOS"),
              (e[(e.k_EWindowBringToFrontWithoutForcingOS = 2)] =
                "k_EWindowBringToFrontWithoutForcingOS");
          })(N || (N = {}));
        var B, D;
        !(function (e) {
          (e[(e.k_ETwoFactorTokenSteamguardScheme_None = 0)] =
            "k_ETwoFactorTokenSteamguardScheme_None"),
            (e[(e.k_ETwoFactorTokenSteamguardScheme_Email = 1)] =
              "k_ETwoFactorTokenSteamguardScheme_Email"),
            (e[(e.k_ETwoFactorTokenSteamguardScheme_TwoFactor = 2)] =
              "k_ETwoFactorTokenSteamguardScheme_TwoFactor");
        })(B || (B = {})),
          (function (e) {
            (e[(e.k_ESteamRealmUnknown = 0)] = "k_ESteamRealmUnknown"),
              (e[(e.k_ESteamRealmGlobal = 1)] = "k_ESteamRealmGlobal"),
              (e[(e.k_ESteamRealmChina = 2)] = "k_ESteamRealmChina");
          })(D || (D = {}));
        function x(e, t, ...n) {
          console.assert
            ? 0 == n.length
              ? console.assert(!!e, t)
              : console.assert(!!e, t, ...n)
            : e || console.warn(t, ...n);
        }
        var V = n(69085);
        function W(e, t, n, i) {
          var r,
            s = arguments.length,
            a =
              s < 3
                ? t
                : null === i
                  ? (i = Object.getOwnPropertyDescriptor(t, n))
                  : i;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            a = Reflect.decorate(e, t, n, i);
          else
            for (var o = e.length - 1; o >= 0; o--)
              (r = e[o]) &&
                (a = (s < 3 ? r(a) : s > 3 ? r(t, n, a) : r(t, n)) || a);
          return s > 3 && a && Object.defineProperty(t, n, a), a;
        }
        Object.create;
        Object.create;
        "function" == typeof SuppressedError && SuppressedError;
        function H(e, t) {
          return (function (e, t) {
            const n = e.findIndex(t);
            return n >= 0 && (e.splice(n, 1), !0);
          })(e, (e) => t == e);
        }
        function z(e, t, n) {
          return {
            get() {
              let e = n.value.bind(this);
              return (
                Object.prototype.hasOwnProperty.call(this, t) ||
                  Object.defineProperty(this, t, { value: e }),
                e
              );
            },
          };
        }
        class $ {
          m_vecCallbacks = [];
          Register(e) {
            this.m_vecCallbacks.push(e);
            return {
              Unregister: () => {
                H(this.m_vecCallbacks, e);
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
              let n = [];
              const i = () => {
                n.forEach((e) => e.Unregister()), t();
              };
              for (const t of e) n.push(t.Register(i));
            });
          }
        }
        class K {
          SyncStore(e) {
            return this.Subscribe(e).Unsubscribe;
          }
          GetValue() {
            return this.Value;
          }
        }
        W([z], K.prototype, "SyncStore", null),
          W([z], K.prototype, "GetValue", null);
        W(
          [z],
          class {
            m_schTimer;
            m_fnCallback;
            m_fnOnCancel;
            Schedule(e, t) {
              this.IsScheduled() && this.Cancel(),
                (this.m_fnCallback = t),
                (this.m_schTimer = window.setTimeout(
                  this.ScheduledInternal,
                  e,
                ));
            }
            AsyncSchedule(e, t) {
              return new Promise((n, i) => {
                this.Schedule(e, () => {
                  t(), n();
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
        W(
          [z],
          class {
            m_vecCallbacks = [];
            Push(e) {
              this.m_vecCallbacks.push(e);
            }
            PushArrayRemove(e, t) {
              this.m_vecCallbacks.push(() => H(e, t));
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
        const q = window.Config ?? a,
          Y =
            (window.UserConfig,
            window.Config
              ? () => Promise.resolve()
              : function () {
                  return f
                    ? Promise.resolve()
                    : new Promise((e) => {
                        g.add(e);
                      });
                });
        window.Config && Object.assign(a, window.Config),
          window.UserConfig && Object.assign(o, window.UserConfig);
        const Q = new Set([
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
        const J = new Map([
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
        const X = new Map();
        for (const [e, t] of J.entries()) X.set(t, e);
        function Z(e) {
          if ("english" !== e)
            return "sc_schinese" === e ? "schinese" : "english";
        }
        X.set("sc_schinese", X.get("schinese")),
          X.set("korean", X.get("koreana"));
        function ee(e, ...t) {
          return 0 == t.length
            ? e
            : (e = e.replace(/%(?:(\d+)\$)?s/g, function (e, n) {
                if (n <= t.length && n >= 1) {
                  const e = t[n - 1];
                  return String(null == e ? "" : e);
                }
                return e;
              }));
        }
        let te;
        te ??= new Set();
        let ne = null;
        var ie = n(40946);
        function re() {
          if (((e = q.LANGUAGE), !Q.has(e)))
            throw `unknown language ${q.LANGUAGE}`;
          return {
            languages: [
              {
                strLanguage: q.LANGUAGE,
                strISOCode: X.get(q.LANGUAGE),
                eSource: 5,
              },
            ],
          };
          var e;
        }
        const se = {};
        (se.arabic = () => n.e(8476).then(n.t.bind(n, 8476, 19))),
          (se.brazilian = () => n.e(9574).then(n.t.bind(n, 99574, 19))),
          (se.bulgarian = () => n.e(6170).then(n.t.bind(n, 43789, 19))),
          (se.czech = () => n.e(815).then(n.t.bind(n, 815, 19))),
          (se.danish = () => n.e(4289).then(n.t.bind(n, 4289, 19))),
          (se.dutch = () => n.e(4978).then(n.t.bind(n, 54978, 19))),
          (se.english = () => n.e(3800).then(n.t.bind(n, 33800, 19))),
          (se.finnish = () => n.e(3907).then(n.t.bind(n, 3907, 19))),
          (se.french = () => n.e(5040).then(n.t.bind(n, 45040, 19))),
          (se.german = () => n.e(4750).then(n.t.bind(n, 94750, 19))),
          (se.greek = () => n.e(9668).then(n.t.bind(n, 69668, 19))),
          (se.hungarian = () => n.e(5233).then(n.t.bind(n, 45233, 19))),
          (se.indonesian = () => n.e(200).then(n.t.bind(n, 90200, 19))),
          (se.italian = () => n.e(1864).then(n.t.bind(n, 31864, 19))),
          (se.japanese = () => n.e(7263).then(n.t.bind(n, 7263, 19))),
          (se.koreana = () => n.e(295).then(n.t.bind(n, 30295, 19))),
          (se.latam = () => n.e(559).then(n.t.bind(n, 50559, 19))),
          (se.malay = () => n.e(1136).then(n.t.bind(n, 61136, 19))),
          (se.norwegian = () => n.e(6512).then(n.t.bind(n, 86512, 19))),
          (se.polish = () => n.e(2889).then(n.t.bind(n, 52889, 19))),
          (se.portuguese = () => n.e(2269).then(n.t.bind(n, 72269, 19))),
          (se.romanian = () => n.e(4419).then(n.t.bind(n, 34419, 19))),
          (se.russian = () => n.e(5777).then(n.t.bind(n, 75777, 19))),
          (se.sc_schinese = () => n.e(3723).then(n.t.bind(n, 23723, 19))),
          (se.schinese = () => n.e(5436).then(n.t.bind(n, 85436, 19))),
          (se.spanish = () => n.e(6736).then(n.t.bind(n, 76736, 19))),
          (se.swedish = () => n.e(4625).then(n.t.bind(n, 94625, 19))),
          (se.tchinese = () => n.e(5191).then(n.t.bind(n, 15191, 19))),
          (se.thai = () => n.e(4230).then(n.t.bind(n, 4230, 19))),
          (se.turkish = () => n.e(4792).then(n.t.bind(n, 34792, 19))),
          (se.ukrainian = () => n.e(7246).then(n.t.bind(n, 27246, 19))),
          (se.vietnamese = () => n.e(9863).then(n.t.bind(n, 59863, 19)));
        const ae = (function (e) {
          const t = new Map(),
            n = (async function () {
              await Y();
              const n = re(),
                i = new Set([]);
              for (const e of n.languages) {
                i.add(e.strLanguage);
                const t = Z(e.strLanguage);
                t && i.add(t);
              }
              return Promise.all(
                Array.from(i).map((n) =>
                  e(n).then((e) => {
                    if (!e)
                      return void console.error(
                        `Project loc failed to load language ${n}, got ${e}`,
                      );
                    const i = new Map();
                    for (const [t, n] of Object.entries(e)) i.set("#" + t, n);
                    t.set(n, i);
                  }),
                ),
              );
            })();
          let r = !1,
            s = !1;
          var a;
          function o(e, i) {
            const [a, ...c] = i,
              l =
                t.get(a.strLanguage)?.get(e) ??
                t.get(Z(a.strLanguage) ?? "english")?.get(e);
            if (void 0 !== l) return l;
            if (0 === c.length) {
              if (s)
                return (
                  console.warn(
                    `Couldn't find localization key ${e} after erroring loading strings`,
                  ),
                  e
                );
              if (!r) throw n;
              return (
                (0, V.aj)().ReportError(
                  new Error(`Couldn't find localization key ${e}`),
                  { bIncludeMessageInIdentifier: !0 },
                ),
                console.warn(`Couldn't find localization key ${e}`),
                e
              );
            }
            return o(e, c);
          }
          function c(e, ...t) {
            return ee(o(e, re().languages), ...t);
          }
          return (
            n
              .then(() => (r = !0))
              .catch((e) => {
                console.error("LoadStrings error", e), (s = !0);
              }),
            (a = n),
            (te ??= new Set()),
            te.add(a),
            (ne = Promise.all(te)),
            {
              Localize: (e, ...t) => c(e, ...t),
              LocalizeReact(e, ...t) {
                const n = this.Localize(e);
                if (n === e) return n;
                const r = [],
                  s = /(.*?)%(\d+)\$s/g;
                let a,
                  o = 0;
                for (; (a = s.exec(n)); ) {
                  (o += a[0].length), r.push(a[1]);
                  const e = parseInt(a[2]);
                  e >= 1 && e <= t.length && r.push(t[e - 1]);
                }
                return (
                  r.push(n.slice(o)), i.createElement(i.Fragment, null, ...r)
                );
              },
              LocalizePlural: (e, t, ...n) =>
                1 === t || "1" === t
                  ? c(e, t, ...n)
                  : c(e + "_Plural", t, ...n),
              GetAppTypeLocKey(e, t) {
                switch (t) {
                  case ie.uE.XP:
                    return e + "_Guide";
                  case ie.uE.Hk:
                    return e + "_Hardware";
                  case ie.uE._i:
                    return e + "_DLC";
                  case ie.uE.Ov:
                    return e + "_Music";
                  case ie.uE.gQ:
                    return e + "_Series";
                  case ie.uE.ue:
                    return e + "_Demo";
                  case ie.uE.Sv:
                    return e + "_Software";
                  case ie.uE.Wz:
                    return e + "_Video";
                  default:
                    return e;
                }
              },
              GetAppTypePluralLocKey(e, t) {
                switch (t) {
                  case ie.uE.Sv:
                    return e + "_Software";
                  case ie.uE.Wz:
                    return e + "_Video";
                  default:
                    return e;
                }
              },
              LocalizeInSpecificLang: (e, t, ...n) => ee(o(t, [e]), ...n),
              Ready: () => n,
              IsReady: () => r,
              HasKey(e) {
                const n = re().languages,
                  i = [...n.map((e) => e.strLanguage), Z(n[0].strLanguage)];
                for (const n of i) {
                  if (!n) continue;
                  const i = t.get(n);
                  if (i && i.has(e)) return !0;
                }
                return !1;
              },
            }
          );
        })(async function (e) {
          if (se[e]) return se[e]();
        });
        var oe;
        !(function (e) {
          (e[(e.None = 0)] = "None"),
            (e[(e.Ago = 1)] = "Ago"),
            (e[(e.Remaining = 2)] = "Remaining");
        })(oe || (oe = {}));
        new Map();
        new Map();
        new Map(), new Map(), new Map(), new Map(), new Map(), new Map();
        class ce {
          m_mapTokens = new Map();
          m_mapFallbackTokens = new Map();
          m_cbkTokensChanged = new $();
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
              t === (29 === e ? D.k_ESteamRealmChina : D.k_ESteamRealmGlobal)
            );
          }
          static GetLanguageListForRealms(e) {
            const t = new Array();
            for (let n = 0; n < 32; n++)
              for (const i of e)
                if (this.IsELanguageValidInRealm(n, i)) {
                  t.push(n);
                  break;
                }
            return t;
          }
          InitFromObjects(e, t, n, i) {
            i && (this.m_bReportIndividualMissingTokens = !1),
              n || this.m_mapTokens.clear(),
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
              (t.push(F(a.LANGUAGE)),
              (a.SUPPORTED_LANGUAGES || []).forEach((e) => {
                e.value != a.LANGUAGE && t.push(F(e.value));
              }),
              e)
            ) {
              ce.GetLanguageListForRealms(e).forEach((e) => {
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
            let n = this.m_mapTokens.get(e.substring(1));
            return void 0 === n
              ? ae.HasKey(e)
                ? ae.Localize(e)
                : void (0 === this.m_mapTokens.size
                    ? x(
                        !1,
                        `Attempting to localize token '${e}' with no tokens in our map for language '${a.LANGUAGE}'. SharedLoc ready: ${ae.IsReady()}. site has inited: ${this.m_bReady}`,
                      )
                    : !t &&
                      this.m_bReportIndividualMissingTokens &&
                      (0, V.aj)().ReportError(
                        new Error(
                          `Unable to find localization token '${e}' for language '${a.LANGUAGE}', ${this.m_mapTokens.size} tokens in map. SharedLoc ready: ${ae.IsReady()}. site has inited: ${this.m_bReady}`,
                        ),
                        { bIncludeMessageInIdentifier: !0 },
                      ))
              : n;
          }
          LocalizeStringFromFallback(e) {
            if (!e || 0 == e.length || "#" != e.charAt(0)) return;
            let t = this.m_mapFallbackTokens.get(e.substring(1));
            return void 0 !== t ? t : void 0;
          }
          static GetTokenWithFallback(e) {
            if (!e) return "";
            const t = F(a.LANGUAGE),
              n = e.find((e) => e.language == t);
            if (n) return n.localized_string;
            const i = ce.GetELanguageFallback(t),
              r = e.find((e) => e.language == i);
            return r?.localized_string ?? "";
          }
          static BHasTokenLanguage(e, t) {
            return Boolean(t.find((t) => t.language == e));
          }
        }
        function le(e, ...t) {
          let n = _e.LocalizeString(e);
          return void 0 === n ? e : ue(n, ...t);
        }
        function de(e, ...t) {
          let n = _e.LocalizeString(e);
          if (void 0 === n) return e;
          let r,
            s = [],
            a = /(.*?)%(\d+)\$s/g,
            o = 0;
          for (; (r = a.exec(n)); ) {
            (o += r[0].length), s.push(r[1]);
            let e = parseInt(r[2]);
            e >= 1 && e <= t.length && s.push(t[e - 1]);
          }
          return s.push(n.substr(o)), i.createElement(i.Fragment, null, ...s);
        }
        function ue(e, ...t) {
          return 0 == t.length
            ? e
            : (e = e.replace(/%(?:(\d+)\$)?s/g, function (e, n) {
                if (n <= t.length && n >= 1) {
                  let e = t[n - 1];
                  return String(null == e ? "" : e);
                }
                return e;
              }));
        }
        const _e = new ce();
        window.LocalizationManager = _e;
        var he = n(62540),
          me = n(89193),
          pe = n(41230);
        class ge {
          m_strInviteCode;
          m_bReady = !1;
          m_bValid = !1;
          m_ulChatRoomGroupID;
          m_ulChatID;
          m_unAccountIDInviter;
          m_rtTimeExpires;
          m_bIsBanned;
          m_rtKickExpires;
          constructor(e) {
            (0, me.Gn)(this), (this.m_strInviteCode = e);
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
            return this.m_rtTimeExpires == S;
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
              ? `https://s.team/chat/${this.m_strInviteCode}`
              : null;
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
          InitDirectInvite(e, t, n = !1, i = void 0) {
            (this.m_ulChatRoomGroupID = e),
              (this.m_ulChatID = t),
              (this.m_bIsBanned = n),
              (this.m_rtKickExpires = i),
              (this.m_rtTimeExpires = S),
              (this.m_bValid = !0),
              (this.m_bReady = !0);
          }
        }
        W([me.sH], ge.prototype, "m_bReady", void 0),
          W([me.XI], ge.prototype, "InitInvalid", null),
          W([me.XI], ge.prototype, "InitDirectInvite", null);
        var fe = n(37976);
        class ke {
          m_ulSteamID;
          constructor(e = 0, t, n, i) {
            e instanceof ke
              ? (this.m_ulSteamID = e.m_ulSteamID)
              : "string" == typeof e
                ? (this.m_ulSteamID = fe.A.fromString(e, !0))
                : t && n && void 0 !== i
                  ? this.SetFromComponents(e ?? 0, i, n, t)
                  : (this.m_ulSteamID = e
                      ? fe.A.fromNumber(e, !0)
                      : fe.A.UZERO);
          }
          static InitFromAccountID(e) {
            return new ke(Number(e), a.EUNIVERSE, 1, 1);
          }
          static InitFromClanID(e) {
            return new ke(Number(e), a.EUNIVERSE, 7, 0);
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
            let t = new ke();
            try {
              let [n, i, r, s, a] =
                  e.match(/\[([I|g|A|G|M|P|C|U]):(\d+):(\d+):?(\d+)?\]/) || [],
                o = Number(r),
                c = Number(s),
                l = a ? Number(a) : 1;
              switch (i) {
                case "I":
                  t.SetFromComponents(c, l, 0, o);
                case "g":
                  t.SetFromComponents(c, 0, 7, o);
                case "A":
                  t.SetFromComponents(c, l, 4, o);
                case "G":
                  t.SetFromComponents(c, l, 3, o);
                case "M":
                  t.SetFromComponents(c, l, 2, o);
                case "P":
                  t.SetFromComponents(c, l, 5, o);
                case "C":
                  t.SetFromComponents(c, l, 6, o);
                case "U":
                  t.SetFromComponents(c, l, 1, o);
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
            this.m_ulSteamID = new fe.A(
              e,
              this.m_ulSteamID.getHighBitsUnsigned(),
              !0,
            );
          }
          SetInstance(e) {
            this.SetFromComponents(
              this.GetAccountID(),
              e,
              this.GetAccountType(),
              this.GetUniverse(),
            );
          }
          SetAccountType(e) {
            this.SetFromComponents(
              this.GetAccountID(),
              this.GetInstance(),
              e,
              this.GetUniverse(),
            );
          }
          SetUniverse(e) {
            this.SetFromComponents(
              this.GetAccountID(),
              this.GetInstance(),
              this.GetAccountType(),
              e,
            );
          }
          SetFromComponents(e, t, n, i) {
            let r = ((255 & i) << 24) + ((15 & n) << 20) + (1048575 & t),
              s = 4294967295 & e;
            this.m_ulSteamID = new fe.A(s, r, !0);
          }
        }
        var be = n(6660);
        class Ee extends ge {
          constructor(e) {
            super(e), (0, me.Gn)(this);
          }
          BIsExpired() {
            return Ie.sm_rtTimeCur >= this.m_rtTimeExpires;
          }
          InitFromPHPInviteLinkInfo(e) {
            this.m_ulChatID = e.chat_id;
            let t = new ke(e.steamid_sender);
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
        W([me.XI], Ee.prototype, "InitFromPHPInviteLinkInfo", null);
        class Ie {
          m_bConnectingToClient = !1;
          m_invite;
          m_htmlPreRendered;
          static sm_rtTimeCur;
          constructor(e) {
            (0, me.Gn)(this),
              (this.m_invite = new Ee(e.strInviteCode)),
              e.Invite
                ? this.m_invite.InitFromPHPInviteLinkInfo(e.Invite)
                : this.m_invite.InitInvalid(),
              (this.m_htmlPreRendered = e.render);
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
          GetPreRenderedHTML() {
            return this.m_htmlPreRendered;
          }
          LaunchWebChat() {
            !(function (e) {
              let t = window.open("", "SteamWebChat", "");
              if (!t) return;
              let n = !1,
                i = !1;
              try {
                n = "about:blank" == t.location.href;
              } catch (e) {
                i = !0;
              }
              if (n) {
                if (e) {
                  let n = function (i) {
                    let r = a.COMMUNITY_BASE_URL.replace(
                      /(https?:\/\/[^/]*).*$/,
                      "$1",
                    );
                    i.source == t &&
                      "FriendsUIReady" == i.data &&
                      i.origin == r &&
                      (t.postMessage(e, a.COMMUNITY_BASE_URL),
                      window.removeEventListener("message", n));
                  };
                  window.addEventListener("message", n);
                }
                t.location.href = a.COMMUNITY_BASE_URL + "chat/";
              } else e && t.postMessage(e, a.COMMUNITY_BASE_URL);
              t.focus();
            })({
              command: "ShowChatRoomGroupInvite",
              invite_code: this.m_invite.GetInviteCode(),
            });
          }
          ForceLaunchSteamClient() {
            window.location.href = `steam://friends/ShowChatRoomGroupInvite/${this.m_invite.GetInviteCode()}`;
          }
        }
        W([me.sH], Ie.prototype, "m_bConnectingToClient", void 0);
        let Se = class extends i.Component {
          render() {
            return (0, he.jsx)("div", {
              className: "InviteLandingRoot",
              children: this.props.controller.BIsInviteValid()
                ? (0, he.jsx)(Ae, { controller: this.props.controller })
                : (0, he.jsx)(Fe, { controller: this.props.controller }),
            });
          }
        };
        Se = W([pe.PA], Se);
        let Ae = class extends i.Component {
          constructor(e) {
            super(e), (0, me.Gn)(this);
          }
          m_bTriedToLaunchSteam = !1;
          LaunchWebChat() {
            this.props.controller.LaunchWebChat();
          }
          LaunchSteamClient() {
            this.props.controller.ForceLaunchSteamClient(),
              window.setTimeout(() => {
                this.m_bTriedToLaunchSteam = !0;
              }, 1e3);
          }
          IsMobileDevice() {
            switch (new be.UAParser(navigator.userAgent).getResult().os.name) {
              case "iOS":
              case "Android":
              case "BlackBerry":
                return !0;
            }
            return !1;
          }
          render() {
            let e = this.props.controller.GetInvite(),
              t = this.IsMobileDevice(),
              n = "inviteButton inviteButtonJoinChat";
            return (
              e.BIsVoiceChatInvite() && (n += " inviteButtonJoinVoice"),
              (0, he.jsxs)(Pe, {
                render: this.props.controller.GetPreRenderedHTML(),
                children: [
                  (0, he.jsxs)("div", {
                    className: "inviteLabel inviteLabelButtons",
                    children: [
                      !t &&
                        (0, he.jsx)("button", {
                          className: n,
                          type: "button",
                          onClick: this.LaunchSteamClient,
                          children: le("#InviteLanding_OpenInSteam"),
                        }),
                      (0, he.jsx)("button", {
                        className: n,
                        type: "button",
                        onClick: this.LaunchWebChat,
                        children: le("#InviteLanding_OpenInWebChat"),
                      }),
                    ],
                  }),
                  this.m_bTriedToLaunchSteam &&
                    (0, he.jsx)("div", {
                      className: "inviteLabel inviteLabelLaunchPrompt",
                      children: le("#InviteLanding_OpenInSteam_Help"),
                    }),
                ],
              })
            );
          }
        };
        W([me.sH], Ae.prototype, "m_bTriedToLaunchSteam", void 0),
          W([z], Ae.prototype, "LaunchWebChat", null),
          W([z], Ae.prototype, "LaunchSteamClient", null),
          (Ae = W([pe.PA], Ae));
        class Fe extends i.Component {
          render() {
            return (0, he.jsx)("div", {
              className: "ChatMessageInvite",
              children: (0, he.jsx)("div", {
                className: "postedExpiredInvite",
                children: le("#InviteLanding_ExpiredOrInvalid"),
              }),
            });
          }
        }
        function Pe(e) {
          return (0, he.jsxs)("div", {
            className: "ChatMessageInvite",
            children: [
              (0, he.jsx)("div", {
                className: "leftInviteContainer",
                dangerouslySetInnerHTML: { __html: e.render.strAvatarHTML },
              }),
              (0, he.jsxs)("div", {
                className: "rightInviteContainer",
                children: [
                  (0, he.jsx)("div", {
                    className: "inviteLabel",
                    children: de(
                      "#bbcode_invite_description",
                      (0, he.jsx)("span", {
                        dangerouslySetInnerHTML: {
                          __html: e.render.strInviterNameLinkHTML,
                        },
                      }),
                    ),
                  }),
                  (0, he.jsx)("div", {
                    className: "groupName",
                    children: e.render.strChatRoomGroupName,
                  }),
                  e.children,
                ],
              }),
            ],
          });
        }
        function ve(e) {
          let t;
          try {
            t = JSON.parse(e.getAttribute("data-inviteinfo"));
          } catch (e) {}
          Ie.sm_rtTimeCur = t.rtTimeCur;
          let n = new Ie(t);
          r.createRoot(e).render(i.createElement(Se, { controller: n }));
        }
        (window.AssertMsg = x),
          document.addEventListener("DOMContentLoaded", async function () {
            p(),
              await (async function (e) {
                const t = ce.GetLanguageFallback(e),
                  i = e === t,
                  [r, s] = await Promise.all([
                    n(9437)(`./friendsui_${e}.json`),
                    i ? {} : n(48516)(`./friendsui_${t}.json`),
                    ae.Ready(),
                  ]);
                _e.AddTokens(r, s);
              })(a.LANGUAGE),
              (function () {
                let e = document.querySelectorAll(".ChatReactRoot");
                for (let t = 0; t < e.length; t++) {
                  let n = e[t],
                    i = n.getAttribute("data-component");
                  "ChatInvite" === i
                    ? ve(n)
                    : x(!1, `unknown component: "${i}"`);
                }
              })();
          });
      },
      45607: (e, t, n) => {
        "use strict";
        n.d(t, { R: () => i });
        const i = 1;
      },
      69085: (e, t, n) => {
        "use strict";
        async function i(e, t = "SHA-256") {
          let n;
          var i;
          "string" == typeof e
            ? ((i = e), (n = new TextEncoder().encode(i).buffer))
            : (n = e);
          return (function (e) {
            const t = new Uint8Array(e);
            let n = "";
            for (let e = 0; e < t.length; e++)
              n += ("00" + t[e].toString(16)).slice(-2);
            return n;
          })(await window.crypto.subtle.digest(t, n));
        }
        n.d(t, { aj: () => F });
        var r = n(84867),
          s = n(69536),
          a = n(63696);
        const o =
          window.addEventListener ||
          (globalThis && globalThis.addEventListener) ||
          (() => {});
        let c,
          l = [],
          d = (e, t, n) =>
            l.push({ error: e, cCallsitesToIgnore: t, strComponentStack: n });
        const u = !0;
        class _ extends Error {
          constructor(...e) {
            super(...e), (this.name = "Assertion Failed");
          }
        }
        {
          const e = console.assert;
          console.assert = (t, n, ...i) => {
            if (!t) {
              const e = p();
              d(new _(f(n, ...i)), 2, e);
            }
            e.apply(console, [t, n, ...i]);
          };
          const t = console.error;
          (console.error = (e, ...n) => {
            const i = p();
            d(new Error(f(e, ...n)), 1, i), t.apply(console, [e, ...n]);
          }),
            (console.clogerror = (e, n, ...i) => {
              const r = p();
              d(new Error(f(n, ...i)), e + 1, r), t.apply(console, [n, ...i]);
            }),
            o("error", (e) => {
              d(e.error, 0);
            }),
            o("unhandledrejection", (e) => {
              d(e.reason, 0);
            }),
            (c = window.setTimeout(() => {
              (l = []), (d = () => {});
            }, 3e4));
        }
        const h = { cCallsitesToIgnore: 0, bIncludeMessageInIdentifier: !1 },
          m = [
            "(localhost|127.0.0.1):(?!(80|443))",
            "chrome-extension://",
            "HTMLDivElement.onreset \\(/market",
            "/.millennium/Dist",
            "Millennium internal",
            "millenium",
            "millennium",
            "Refused unauthorized RPC command",
          ];
        function p() {
          try {
            const e =
              a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
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
        class g {
          m_strProduct;
          m_strVersion;
          m_transport = null;
          m_rgErrorQueue = [];
          m_sendTimer = null;
          m_bReportingPaused = !1;
          m_pauseTimer = void 0;
          m_fnGetReportingInterval = v;
          m_fnGetReportTags = () => [];
          m_fnGetURL = () => location.href;
          m_bEnabled = !0;
          m_bInitialized = !1;
          constructor(e = !0) {
            e
              ? (l.forEach(
                  ({ error: e, cCallsitesToIgnore: t, strComponentStack: n }) =>
                    this.ReportError(e, {
                      cCallsitesToIgnore: t,
                      strComponentStack: n,
                    }),
                ),
                (d = (e, t, n) =>
                  this.ReportError(e, {
                    cCallsitesToIgnore: t,
                    strComponentStack: n,
                  })))
              : (d = () => {}),
              (l = []),
              clearTimeout(c),
              window.setTimeout(() => {
                this.m_bInitialized ||
                  ((this.m_bEnabled = !1), (this.m_rgErrorQueue = []));
              }, 3e4);
          }
          Init(e, t, n, i = {}) {
            (this.m_bInitialized = !0),
              (this.m_strProduct = e),
              (this.m_strVersion = t),
              (this.m_transport = n),
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
              const n = { ...h, ...t };
              if (!this.m_bEnabled) return null;
              0;
              const i = await (function (e, t) {
                try {
                  return e.stack && e.stack.match(k)
                    ? (async function (e, t) {
                        const {
                            cCallsitesToIgnore: n,
                            bIncludeMessageInIdentifier: i,
                          } = t,
                          { message: r, stack: s } = e,
                          a = s?.split("\n") ?? [];
                        let o = A(a.filter((e) => !!e.match(k))[n]);
                        i && (o = `${o} ${r}`);
                        const c = a
                          .map((e) => {
                            let t = e.match(/(.*)\((.*):(\d+):(\d+)\)/);
                            if (
                              ((t && 5 == t.length) ||
                                (t = e.match(/(.*at )(http.*):(\d+):(\d+)/)),
                              !t)
                            )
                              return e;
                            if (5 === t.length) {
                              const [e, n, i, r, s] = t,
                                a = parseInt(r),
                                o = parseInt(s);
                              if (!isNaN(a) && !isNaN(o)) return [n, i, a, o];
                            }
                            return e;
                          })
                          .filter((e) => !!e);
                        return {
                          identifier: o,
                          identifierHash: await P(o),
                          message: c,
                        };
                      })(e, t)
                    : e.stack && e.stack.match(b)
                      ? (async function (e, t) {
                          const {
                              cCallsitesToIgnore: n,
                              bIncludeMessageInIdentifier: i,
                            } = t,
                            r = e.stack?.split("\n") ?? [];
                          let s = A(r.filter((e) => !!e.match(b))[n]);
                          i && (s = `${s} ${e.message}`);
                          const a = r
                            .map((e) => {
                              const t = e.match(/(.*@)?(.*):(\d+):(\d+)/);
                              if (!t) return e;
                              if (5 === t.length) {
                                const [e, n, i, r, s] = t,
                                  a = parseInt(r),
                                  o = parseInt(s);
                                if (!isNaN(a) && !isNaN(o)) return [n, i, a, o];
                              }
                              return e;
                            })
                            .filter((e) => !!e);
                          return {
                            identifier: s,
                            identifierHash: await P(s),
                            message: [e.message, ...a],
                          };
                        })(e, t)
                      : e.stack && e.stack.match(E)
                        ? (async function (e, t) {
                            const {
                                bIncludeMessageInIdentifier: n,
                                cCallsitesToIgnore: i,
                              } = t,
                              r = e.stack?.split("\n") ?? [],
                              s = r[i],
                              a = s.split("/");
                            let o = a[a.length - 1];
                            s.indexOf("@") > -1 &&
                              (o = s.split("@")[0] + "@" + o);
                            n && (o = `${o} ${e.message}`);
                            const c = r
                              .map((e) => {
                                const t = e.match(/(.*@)?(.*):(\d+):(\d+)/);
                                if (!t) return e;
                                if (5 === t.length) {
                                  const [e, n, i, r, s] = t,
                                    a = parseInt(r),
                                    o = parseInt(s);
                                  if (!isNaN(a) && !isNaN(o))
                                    return [n, i, a, o];
                                }
                                return e;
                              })
                              .filter((e) => !!e);
                            return {
                              identifier: o,
                              identifierHash: await P(o),
                              message: [e.message, ...c],
                            };
                          })(e, t)
                        : (S ||
                            (console.warn(
                              "Error reporter does not know how to parse generated stack:",
                            ),
                            console.warn(e.stack),
                            (S = !0)),
                          null);
                } catch (e) {
                  return (
                    console.warn(`Failed to normalize error stack: ${e}`), null
                  );
                }
              })(e, n);
              return i
                ? (n.cCallsitesToIgnore &&
                    i.message.splice(1, n.cCallsitesToIgnore),
                  n.strComponentStack &&
                    (i.strComponentStack = n.strComponentStack),
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
              let n = JSON.stringify(t);
              for (let t of m) {
                const i = new RegExp(t);
                if (n.match(i))
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
            const t = r.w.Init(s.Gf),
              n = e.reduce(
                (e, t) => (
                  e[t.identifier]
                    ? e[t.identifier].count++
                    : (e[t.identifier] = { report: t, count: 1 }),
                  e
                ),
                {},
              ),
              i = Object.keys(n).map((e) => {
                const { report: t, count: i } = n[e],
                  r = new s.tF();
                let a;
                return (
                  r.set_count(i),
                  r.set_identifier(t.identifier + " " + t.identifierHash),
                  r.set_message(JSON.stringify(t.message)),
                  t.strComponentStack &&
                    ((a ??= {}), (a.componentStack = t.strComponentStack)),
                  a && r.set_context(JSON.stringify(a)),
                  t.strUrl && r.set_url(t.strUrl),
                  r
                );
              });
            t.Body().set_product(this.m_strProduct),
              t.Body().set_version(this.m_strVersion),
              t.Body().set_errors(i);
            for (const e of this.m_fnGetReportTags()) t.Body().add_tags(e);
            s._5.ReportClientError(this.m_transport, t);
          }
          get version() {
            return this.m_strVersion;
          }
          get product() {
            return this.m_strProduct;
          }
          get reporting_enabled() {
            return u;
          }
        }
        function f(e, ...t) {
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
        const k = /^\s*at .*(\S+:\d+|\(native\))/m,
          b = /(^|@)\S+:\d+/,
          E = /.*\/bundle-[a-zA-Z0-9]+:\d+:\d+/;
        let I,
          S = !1;
        function A(e) {
          return (function (e) {
            const t = "https://",
              n = e.indexOf(t);
            if (-1 === n) return e;
            const i = e.indexOf("/", n + t.length);
            return -1 === i ? e : e.slice(0, n) + e.slice(i);
          })(
            (function (e) {
              const t = e.lastIndexOf("?");
              if (-1 === t) return e;
              const n = e.indexOf(":", t);
              return -1 === n ? e : e.slice(0, t) + e.slice(n);
            })(e),
          );
        }
        const F = () => (I || (I = new g()), I);
        async function P(e) {
          try {
            return (await i(e)).slice(0, 16);
          } catch (e) {
            return "";
          }
        }
        function v() {
          return 1e4;
        }
      },
      84867: (e, t, n) => {
        "use strict";
        n.d(t, { I8: () => u, w: () => d });
        var i = n(69085),
          r = n(45607),
          s = n(58663),
          a = n(27439),
          o = n(7235),
          c = n(92596);
        class l {
          static InitHeaderFromPacket(e) {
            return new l(void 0, e);
          }
          m_eMsg;
          m_bValid;
          m_netPacket;
          m_cubHeader;
          m_header;
          m_body;
          constructor(e, t, n, i, r, a) {
            if (i)
              (this.m_eMsg = i.m_eMsg),
                (this.m_bValid = i.m_bValid),
                this.m_bValid &&
                  ((this.m_netPacket = i.m_netPacket),
                  (this.m_cubHeader = i.m_cubHeader),
                  (this.m_header = i.m_header),
                  this.InitForType(n));
            else {
              if (((this.m_header = new o.LH(null)), (this.m_bValid = !0), t))
                if (
                  ((this.m_netPacket = t),
                  this.m_netPacket.SeekGetHead(),
                  (this.m_eMsg = this.m_netPacket.GetUint32()),
                  2147483648 & this.m_eMsg)
                ) {
                  (this.m_eMsg = 2147483647 & this.m_eMsg),
                    (this.m_cubHeader = this.m_netPacket.GetUint32());
                  try {
                    o.LH.deserializeBinaryFromReader(
                      this.m_header,
                      new s.BinaryReader(
                        this.m_netPacket.GetPacket(),
                        this.m_netPacket.TellGet(),
                        this.m_cubHeader,
                      ),
                    ),
                      this.m_netPacket.SeekGetCurrent(this.m_cubHeader),
                      n && this.InitForType(n);
                  } catch (e) {
                    console.error("Exception deserializing protobuf", e),
                      (this.m_bValid = !1);
                  }
                } else this.m_bValid = !1;
              else
                e && (this.m_eMsg = e),
                  a && n
                    ? (this.m_body = n.fromObject(a))
                    : n && (this.m_body = new n());
              r && this.m_header.set_jobid_target(r.Hdr().jobid_target());
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
                new s.BinaryReader(
                  t.GetPacket(),
                  t.TellGet(),
                  t.GetCountBytesRemaining(),
                ),
              );
            } catch (e) {
              this.m_bValid = !1;
              const t = (0, i.aj)(),
                n = `Exception parsing protobuf message body of type ${this.m_eMsg}.  Definitions may be out of sync with server version.`;
              t &&
                t.ReportError(new Error(n), {
                  bIncludeMessageInIdentifier: !0,
                }),
                console.warn(n),
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
            return this.Hdr().eresult() == r.R;
          }
          GetErrorMessage() {
            return this.Hdr().error_message()
              ? this.Hdr().error_message()
              : `eresult ${this.Hdr().eresult()}`;
          }
          Serialize() {
            const e = this.m_header.serializeBinary(),
              t = this.m_body.serializeBinary(),
              n = 2147483648 | this.m_eMsg,
              i = new Uint8Array(8 + e.length + t.length),
              r = new c.pV(i);
            return (
              r.PutUint32(n),
              r.PutUint32(e.length),
              r.PutBytes(e),
              r.PutBytes(t),
              i
            );
          }
          SerializeBody() {
            const e = this.m_body.serializeBinary(),
              t = new Uint8Array(e.length);
            return new c.pV(t).PutBytes(e), t;
          }
          DEBUG_ToObject() {
            return {};
          }
          DEBUG_LogToConsole() {
            0;
          }
        }
        class d extends l {
          constructor(e, t = a.MSr, n, i, r) {
            super(t, n, e, i, void 0, r);
          }
          static InitFromPacket(e, t) {
            return new d(e, 0, t);
          }
          static InitFromMsg(e, t) {
            return new d(e, void 0, void 0, t);
          }
          static Init(e, t) {
            return new d(e, t);
          }
          static InitFromObject(e, t) {
            return new d(e, void 0, void 0, void 0, t);
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
        function u(e, t, n) {
          let i;
          return (
            (i = t instanceof d ? t : d.InitFromObject(e, t)),
            void 0 !== n?.strDebugSource &&
              i.Hdr().set_debug_source(n.strDebugSource),
            i
          );
        }
      },
      94538: (e, t, n) => {
        "use strict";
        n.d(t, {
          BT: () => c,
          Sg: () => u,
          Uq: () => o,
          gp: () => s,
          i0: () => d,
          qM: () => r,
          w0: () => a,
          zj: () => l,
        });
        var i = n(58663);
        const r = i.BinaryReader.prototype,
          s = i.BinaryWriter.prototype;
        function a(e) {
          const t = {},
            { fields: n } = e;
          for (const e in n) {
            const i = n[e];
            t[i.n] = i;
          }
          return t;
        }
        function o(e, t) {
          const { proto: n, fields: r } = e,
            s = new n();
          if (null == t) return s;
          for (const e in r) {
            const { n, c: a, r: o, d: c, q: l } = r[e];
            if (!Object.prototype.hasOwnProperty.call(t, e)) continue;
            const d = t[e];
            a
              ? o
                ? i.Message.setRepeatedWrapperField(
                    s,
                    n,
                    Array.isArray(d) ? d.map((e) => a.fromObject(e)) : [],
                  )
                : i.Message.setWrapperField(s, n, a.fromObject(d))
              : i.Message.setField(s, n, d);
          }
          return s;
        }
        function c(e, t, n) {
          const { proto: r, fields: s } = e,
            a = {};
          for (const e in s) {
            const { n: r, c: o, r: c, d: l, q: d } = s[e];
            if (o)
              if (c)
                a[e] = i.Message.toObjectList(
                  i.Message.getRepeatedWrapperField(n, o, r),
                  o.toObject,
                  t,
                );
              else {
                const s = i.Message.getWrapperField(n, o, r, d ? 1 : 0);
                s && (a[e] = o.toObject(t, s));
              }
            else {
              const t = i.Message.getFieldWithDefault(
                n,
                r,
                void 0 !== l ? l : null,
              );
              (null !== t || d) && (a[e] = t);
            }
          }
          return t && (a.$jspbMessageInstance = n), a;
        }
        function l(e, t, n) {
          for (; n.nextField() && !n.isEndGroup(); ) {
            const r = e[n.getFieldNumber()];
            if (r) {
              const { n: e, c: s, r: a, d: o, q: c, br: l } = r;
              if (s) {
                const r = new s();
                n.readMessage(r, s.deserializeBinaryFromReader),
                  a
                    ? i.Message.addToRepeatedWrapperField(t, e, r, s)
                    : i.Message.setWrapperField(t, e, r);
              } else if (l) {
                const r = l.call(n);
                a
                  ? i.Message.addToRepeatedField(t, e, r)
                  : i.Message.setField(t, e, r);
              } else
                console.assert(
                  !!l,
                  `Reader func not set for field number ${e} in class ${s}`,
                ),
                  n.skipField();
            } else n.skipField();
          }
          return t;
        }
        function d(e, t, n) {
          const { fields: r } = e;
          for (const e in r) {
            const { n: s, c: a, r: o, d: c, q: l, bw: d } = r[e];
            if (a)
              if (o) {
                const e = i.Message.getRepeatedWrapperField(t, a, s);
                ((e && e.length) || l) &&
                  n.writeRepeatedMessage(s, e, a.serializeBinaryToWriter);
              } else {
                const e = i.Message.getWrapperField(t, a, s, l ? 1 : 0);
                e && n.writeMessage(s, e, a.serializeBinaryToWriter);
              }
            else if (d) {
              const e = i.Message.getField(t, s);
              void 0 !== e && d.call(n, s, e);
            } else
              console.assert(
                !!d,
                `Writer func not set for field number ${s} in class ${a}`,
              );
          }
        }
        function u(e) {
          const t = e.proto;
          for (const n in e.fields) {
            const r = e.fields[n],
              { n: s, c: a, r: o, d: c, q: l } = r;
            Object.prototype.hasOwnProperty.call(r, "d")
              ? (t.prototype[n] = _(i.Message.getFieldWithDefault, s, c))
              : (t.prototype[n] = a
                  ? o
                    ? _(i.Message.getRepeatedWrapperField, a, s)
                    : h(a, s)
                  : _(i.Message.getField, s)),
              (t.prototype[`set_${n}`] = m(
                a
                  ? o
                    ? i.Message.setRepeatedWrapperField
                    : i.Message.setWrapperField
                  : i.Message.setField,
                s,
              )),
              o && (t.prototype[`add_${n}`] = p(s, a));
          }
        }
        function _(e, ...t) {
          return function () {
            return e(this, ...t);
          };
        }
        function h(e, t) {
          return function (n = !0) {
            return i.Message.getWrapperField(this, e, t, n ? 1 : 0);
          };
        }
        function m(e, t) {
          return function (n) {
            return e(this, t, n);
          };
        }
        function p(e, t) {
          return t
            ? function (n, r) {
                return i.Message.addToRepeatedWrapperField(this, e, n, t, r);
              }
            : function (t, n) {
                i.Message.addToRepeatedField(this, e, t, n);
              };
        }
      },
      92596: (e, t, n) => {
        "use strict";
        n.d(t, { pV: () => i });
        class i {
          m_nOffset;
          m_nLength;
          m_viewPacket;
          m_rgubPacket;
          m_iGet;
          m_iPut;
          constructor(e, t = 0, n) {
            (this.m_nOffset = t || 0),
              e instanceof Uint8Array || e instanceof DataView
                ? ((this.m_nLength = n || e.byteLength - this.m_nOffset),
                  (this.m_nOffset += e.byteOffset),
                  (this.m_viewPacket = new DataView(
                    e.buffer,
                    this.m_nOffset,
                    this.m_nLength,
                  )))
                : ((this.m_nLength = n || e.byteLength - this.m_nOffset),
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
      },
      30186: (e, t, n) => {
        "use strict";
        "VALVE_PUBLIC_PATH" in window
          ? (n.p = window.VALVE_PUBLIC_PATH)
          : console.error(
              "VALVE_PUBLIC_PATH not defined; check for a call to CHTMLHelpers::WebpackConfigScriptlet",
            ),
          123 !== Array.from(new Set([123]))[0] &&
            console.error("Should not include prototypejs.");
      },
    },
    a = {};
  function o(e) {
    var t = a[e];
    if (void 0 !== t) return t.exports;
    var n = (a[e] = { id: e, loaded: !1, exports: {} });
    return s[e].call(n.exports, n, n.exports, o), (n.loaded = !0), n.exports;
  }
  (o.m = s),
    (o.amdO = {}),
    (e = []),
    (o.O = (t, n, i, r) => {
      if (!n) {
        var s = 1 / 0;
        for (d = 0; d < e.length; d++) {
          for (var [n, i, r] = e[d], a = !0, c = 0; c < n.length; c++)
            (!1 & r || s >= r) && Object.keys(o.O).every((e) => o.O[e](n[c]))
              ? n.splice(c--, 1)
              : ((a = !1), r < s && (s = r));
          if (a) {
            e.splice(d--, 1);
            var l = i();
            void 0 !== l && (t = l);
          }
        }
        return t;
      }
      r = r || 0;
      for (var d = e.length; d > 0 && e[d - 1][2] > r; d--) e[d] = e[d - 1];
      e[d] = [n, i, r];
    }),
    (o.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return o.d(t, { a: t }), t;
    }),
    (n = Object.getPrototypeOf
      ? (e) => Object.getPrototypeOf(e)
      : (e) => e.__proto__),
    (o.t = function (e, i) {
      if ((1 & i && (e = this(e)), 8 & i)) return e;
      if ("object" == typeof e && e) {
        if (4 & i && e.__esModule) return e;
        if (16 & i && "function" == typeof e.then) return e;
      }
      var r = Object.create(null);
      o.r(r);
      var s = {};
      t = t || [null, n({}), n([]), n(n)];
      for (var a = 2 & i && e; "object" == typeof a && !~t.indexOf(a); a = n(a))
        Object.getOwnPropertyNames(a).forEach((t) => (s[t] = () => e[t]));
      return (s.default = () => e), o.d(r, s), r;
    }),
    (o.d = (e, t) => {
      for (var n in t)
        o.o(t, n) &&
          !o.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    (o.f = {}),
    (o.e = (e) =>
      Promise.all(Object.keys(o.f).reduce((t, n) => (o.f[n](e, t), t), []))),
    (o.u = (e) =>
      "javascript/webui/" +
      ({
        43: "friendsui_sc_schinese-json",
        762: "friendsui_indonesian-json",
        1499: "friendsui_latam-json",
        2532: "friendsui_malay-json",
        2945: "friendsui_russian-json",
        3e3: "friendsui_turkish-json",
        3016: "friendsui_english-json",
        3232: "friendsui_italian-json",
        3415: "friendsui_portuguese-json",
        3485: "friendsui_japanese-json",
        3789: "friendsui_vietnamese-json",
        4154: "friendsui_brazilian-json",
        4302: "friendsui_dutch-json",
        4434: "friendsui_ukrainian-json",
        4488: "friendsui_greek-json",
        4776: "friendsui_norwegian-json",
        4787: "friendsui_danish-json",
        5341: "friendsui_hungarian-json",
        5480: "friendsui_german-json",
        6127: "friendsui_polish-json",
        6385: "friendsui_bulgarian-json",
        6518: "friendsui_arabic-json",
        6609: "friendsui_swedish-json",
        6888: "friendsui_thai-json",
        6971: "friendsui_koreana-json",
        7487: "friendsui_czech-json",
        7861: "friendsui_romanian-json",
        8194: "friendsui_french-json",
        8759: "friendsui_finnish-json",
        8766: "friendsui_tchinese-json",
        9746: "friendsui_schinese-json",
        9808: "friendsui_spanish-json",
      }[e] || e) +
      ".js?contenthash=" +
      {
        43: "b98e0f420add57691fc2",
        200: "f70dc77df2b44c5b6c28",
        295: "30a1b0feb050dde520dd",
        559: "e8fd6d4fe87221a119fa",
        762: "6381bf741535ad65d4e3",
        815: "c7a18e80878daf8f54e1",
        1136: "5f832a08c3bef135c68e",
        1499: "016609b438b84fcc275a",
        1864: "f2b9178068767b40d428",
        2269: "913b2ce129ee42bef5df",
        2532: "a9d9f49d622113e7237a",
        2889: "7370f87b7e9e453eb0eb",
        2945: "b1bb49c86e94db92dee9",
        3e3: "1b03996604202ef27322",
        3016: "ca85786390010cceefc4",
        3232: "506a59c269184fbbf9b5",
        3415: "f27b27ba4a24ffe3357b",
        3485: "08349ebcf15f4d7c2342",
        3723: "a69634b2de1f3fa5dba5",
        3789: "7576118cdc2ea612c555",
        3800: "29f495d97b5169da720b",
        3907: "3dea78f6a4155105eeaa",
        4154: "ab85015c1182c53c2a07",
        4230: "163b24575a8590b5dd57",
        4289: "b1ffb8ea3b089c182e85",
        4302: "127bac547ebe35debb6e",
        4419: "a0af6463f1a69b1adf58",
        4434: "7042d1e1cb05e782371a",
        4488: "ecc72b7e73d0d3a37046",
        4625: "b3f0a685e298e07970f2",
        4750: "2f714d699e60e9e5441a",
        4776: "642916fbd7a977b50de9",
        4787: "ef50a874abefeb603b11",
        4792: "f9a55c905cc523f64b44",
        4978: "4253d6570728d8675048",
        5040: "f96790d344ca1985baf6",
        5191: "8aa4a92e8e0301626e83",
        5233: "536bb318dfdd1d48eca4",
        5341: "d01dc36adbf1ed0dc168",
        5436: "7a51987a0662bd324382",
        5480: "aa8842d2e7d72dad67c5",
        5777: "a0cbe768cbe83f6a2a8d",
        6127: "4882c58af191aaf74128",
        6170: "0a707b61824222356e7e",
        6385: "e5f8cfa9b62ae2ae5efe",
        6512: "91ee6858d882af1c5e62",
        6518: "1367c553cc7eccd07bc4",
        6609: "fc94f8d39971c6671379",
        6736: "17e2509232d2db22d939",
        6888: "c50f7606409776b647a0",
        6971: "e7f4af03b6ba3a7fa534",
        7246: "167c8393e8c49711acd7",
        7263: "99f6d1aa488039ff2230",
        7487: "8efea89904c72e8440e5",
        7861: "5edde2f8fc8a9ec95168",
        8194: "7b692387d3a77ce31c7b",
        8476: "1ddeaaa684b3b1ffb95c",
        8759: "73a7657685d5198e1a73",
        8766: "0447dd79b31a8fe64ce1",
        9574: "a1c254a386aa01497b75",
        9668: "67e32057588ddc9e6d12",
        9746: "3679c8e2ce76e34b2ccf",
        9808: "51bb932b4ac14b5211d4",
        9863: "e0e594dbfb4435361da5",
      }[e]),
    (o.miniCssF = (e) => {}),
    (o.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (i = {}),
    (r = "@steam/friendsui:"),
    (o.l = (e, t, n, s) => {
      if (i[e]) i[e].push(t);
      else {
        var a, c;
        if (void 0 !== n)
          for (
            var l = document.getElementsByTagName("script"), d = 0;
            d < l.length;
            d++
          ) {
            var u = l[d];
            if (
              u.getAttribute("src") == e ||
              u.getAttribute("data-webpack") == r + n
            ) {
              a = u;
              break;
            }
          }
        a ||
          ((c = !0),
          ((a = document.createElement("script")).charset = "utf-8"),
          (a.timeout = 120),
          o.nc && a.setAttribute("nonce", o.nc),
          a.setAttribute("data-webpack", r + n),
          (a.src = e)),
          (i[e] = [t]);
        var _ = (t, n) => {
            (a.onerror = a.onload = null), clearTimeout(h);
            var r = i[e];
            if (
              (delete i[e],
              a.parentNode && a.parentNode.removeChild(a),
              r && r.forEach((e) => e(n)),
              t)
            )
              return t(n);
          },
          h = setTimeout(
            _.bind(null, void 0, { type: "timeout", target: a }),
            12e4,
          );
        (a.onerror = _.bind(null, a.onerror)),
          (a.onload = _.bind(null, a.onload)),
          c && document.head.appendChild(a);
      }
    }),
    (o.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (o.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e)),
    (o.j = 7612),
    (() => {
      var e;
      o.g.importScripts && (e = o.g.location + "");
      var t = o.g.document;
      if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
        var n = t.getElementsByTagName("script");
        if (n.length)
          for (var i = n.length - 1; i > -1 && (!e || !/^http(s?):/.test(e)); )
            e = n[i--].src;
      }
      if (!e)
        throw new Error(
          "Automatic publicPath is not supported in this browser",
        );
      (e = e
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (o.p = e + "../../");
    })(),
    (() => {
      var e = { 7612: 0 };
      (o.f.j = (t, n) => {
        var i = o.o(e, t) ? e[t] : void 0;
        if (0 !== i)
          if (i) n.push(i[2]);
          else {
            var r = new Promise((n, r) => (i = e[t] = [n, r]));
            n.push((i[2] = r));
            var s = o.p + o.u(t),
              a = new Error();
            o.l(
              s,
              (n) => {
                if (o.o(e, t) && (0 !== (i = e[t]) && (e[t] = void 0), i)) {
                  var r = n && ("load" === n.type ? "missing" : n.type),
                    s = n && n.target && n.target.src;
                  (a.message =
                    "Loading chunk " + t + " failed.\n(" + r + ": " + s + ")"),
                    (a.name = "ChunkLoadError"),
                    (a.type = r),
                    (a.request = s),
                    i[1](a);
                }
              },
              "chunk-" + t,
              t,
            );
          }
      }),
        (o.O.j = (t) => 0 === e[t]);
      var t = (t, n) => {
          var i,
            r,
            [s, a, c] = n,
            l = 0;
          if (s.some((t) => 0 !== e[t])) {
            for (i in a) o.o(a, i) && (o.m[i] = a[i]);
            if (c) var d = c(o);
          }
          for (t && t(n); l < s.length; l++)
            (r = s[l]), o.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
          return o.O(d);
        },
        n = (self.webpackChunk_steam_friendsui =
          self.webpackChunk_steam_friendsui || []);
      n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
    })();
  var c = o.O(void 0, [3987, 9489, 1068], () => o(67497));
  c = o.O(c);
})();

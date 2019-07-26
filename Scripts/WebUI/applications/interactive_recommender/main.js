/*! This file includes third-party software, governed by the licenses described here: https://store.steampowered.com/public/javascript/applications/interactive_recommender/main.licenses.txt */

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
!(function(c) {
  function e(e) {
    for (
      var t, a, n = e[0], r = e[1], o = e[2], i = 0, s = [];
      i < n.length;
      i++
    )
      (a = n[i]), u[a] && s.push(u[a][0]), (u[a] = 0);
    for (t in r) Object.prototype.hasOwnProperty.call(r, t) && (c[t] = r[t]);
    for (_ && _(e); s.length; ) s.shift()();
    return p.push.apply(p, o || []), l();
  }
  function l() {
    for (var e, t = 0; t < p.length; t++) {
      for (var a = p[t], n = !0, r = 1; r < a.length; r++) {
        var o = a[r];
        0 !== u[o] && (n = !1);
      }
      n && (p.splice(t--, 1), (e = i((i.s = a[0]))));
    }
    return e;
  }
  var a = {},
    u = { 1: 0 },
    p = [];
  function i(e) {
    if (a[e]) return a[e].exports;
    var t = (a[e] = { i: e, l: !1, exports: {} });
    return c[e].call(t.exports, t, t.exports, i), (t.l = !0), t.exports;
  }
  (i.m = c),
    (i.c = a),
    (i.d = function(e, t, a) {
      i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: a });
    }),
    (i.r = function(e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (i.t = function(t, e) {
      if ((1 & e && (t = i(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var a = Object.create(null);
      if (
        (i.r(a),
        Object.defineProperty(a, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var n in t)
          i.d(
            a,
            n,
            function(e) {
              return t[e];
            }.bind(null, n)
          );
      return a;
    }),
    (i.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return i.d(t, "a", t), t;
    }),
    (i.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (i.p = "");
  var t = (window.webpackJsonp = window.webpackJsonp || []),
    n = t.push.bind(t);
  (t.push = e), (t = t.slice());
  for (var r = 0; r < t.length; r++) e(t[r]);
  var _ = n;
  p.push(["gfbn", 0]), l();
})({
  "2i24": function(e, t, a) {
    e.exports = {
      LoadingWrapper: "throbber_LoadingWrapper_msgsp",
      noString: "throbber_noString_39a5G",
      Throbber: "throbber_Throbber_28HA5",
      throbber_small: "throbber_throbber_small_R8kRv",
      throbber_medium: "throbber_throbber_medium_21Bdq",
      throbber_large: "throbber_throbber_large_14FA2",
      throbber_center_wrapper: "throbber_throbber_center_wrapper_28-k6",
      ThrobberText: "throbber_ThrobberText_2rdZW",
      blur: "throbber_blur_2Shbh",
      ThrobberRoundLoop: "throbber_ThrobberRoundLoop_3BTwy",
      roundOuterOutline: "throbber_roundOuterOutline_2kKMJ",
      roundOuter: "throbber_roundOuter_1ZHiy",
      roundFill: "throbber_roundFill_rXZXF",
      ThrobberFillLoop: "throbber_ThrobberFillLoop_3rz-K",
      topCircle: "throbber_topCircle_2L17u",
      circlePulse: "throbber_circlePulse_2MIt-",
      ThrobberTopCircleLoop: "throbber_ThrobberTopCircleLoop_1hZ4k",
      ThrobberBottomCircleLoop: "throbber_ThrobberBottomCircleLoop_1E-wE",
      bottomCircle: "throbber_bottomCircle_3s6LC",
      roundThrobber15: "throbber_roundThrobber15_AyryQ",
      roundThrobber14: "throbber_roundThrobber14_1TsML",
      roundThrobber13: "throbber_roundThrobber13_JWnec",
      roundThrobber12: "throbber_roundThrobber12_wRh21",
      roundThrobber11: "throbber_roundThrobber11_1ES7b",
      roundThrobber10: "throbber_roundThrobber10_vxvy5",
      roundThrobber09: "throbber_roundThrobber09_2evaC",
      roundThrobber08: "throbber_roundThrobber08_uKLR6",
      roundThrobber07: "throbber_roundThrobber07_13XYp",
      roundThrobber06: "throbber_roundThrobber06_2TT3G",
      roundThrobber05: "throbber_roundThrobber05_2feUK",
      roundThrobber04: "throbber_roundThrobber04_1FkuU",
      roundThrobber03: "throbber_roundThrobber03_mns2g",
      roundThrobber02: "throbber_roundThrobber02_3TmHL",
      roundThrobber01: "throbber_roundThrobber01_EpAIO",
      ThrobberRoundLoopThickness: "throbber_ThrobberRoundLoopThickness_2r0qo",
      throbber_xlarge: "throbber_throbber_xlarge_GYXOA"
    };
  },
  "6TF7": function(e, t, a) {
    e.exports = {
      nSmallEntryWidth: "600px",
      nOptionsWrapWidth: "777px",
      colorBlack: "app_colorBlack_1JVex",
      colorWhite: "app_colorWhite_ba6mN",
      colorDarkGrey: "app_colorDarkGrey_K5t9u",
      colorGrey: "app_colorGrey_1PZmt",
      colorLightGrey: "app_colorLightGrey_19yhK",
      colorOrange: "app_colorOrange_1tk7k",
      colorRed: "app_colorRed_37FCd",
      colorAqua: "app_colorAqua_1DOz3",
      colorBlue: "app_colorBlue_1se7o",
      colorBrightRed: "app_colorBrightRed_3O2fx",
      colorBrightBlue: "app_colorBrightBlue_1xOyr",
      colorBrightOrange: "app_colorBrightOrange_2R6Qb",
      colorBrightPurple: "app_colorBrightPurple_2SDQh",
      colorBrightYellow: "app_colorBrightYellow_13nGn",
      colorBrightGreen: "app_colorBrightGreen_ceFjl",
      colorBrightGrey: "app_colorBrightGrey_ZXwW0",
      backgroundColorBlack: "app_backgroundColorBlack_381-u",
      backgroundColorDarkGrey: "app_backgroundColorDarkGrey_1QuV8",
      backgroundColorLightGrey: "app_backgroundColorLightGrey_1wPTr",
      backgroundColorWhite: "app_backgroundColorWhite_3U5De",
      backgroundColorOrange: "app_backgroundColorOrange_3H9sg",
      backgroundColorRed: "app_backgroundColorRed_FS2au",
      backgroundColorAqua: "app_backgroundColorAqua_1KCds",
      backgroundColorBlue: "app_backgroundColorBlue_3YGac",
      backgroundColorGrey: "app_backgroundColorGrey_3uAoa",
      backgroundColorBrightRed: "app_backgroundColorBrightRed_1yF9P",
      backgroundColorBrightBlue: "app_backgroundColorBrightBlue_Nt9zr",
      backgroundColorBrightOrange: "app_backgroundColorBrightOrange_OQidQ",
      backgroundColorBrightPurple: "app_backgroundColorBrightPurple_1LdlS",
      backgroundColorBrightYellow: "app_backgroundColorBrightYellow_1E3sP",
      backgroundColorBrightGreen: "app_backgroundColorBrightGreen_2ZgTD",
      backgroundColorBrightGrey: "app_backgroundColorBrightGrey_3F-Sx",
      App: "app_App_1VNi1",
      Login: "app_Login_cZni8",
      Text: "app_Text_QPHkp",
      Container: "app_Container_XIPhA",
      TopSection: "app_TopSection_3ZdF_",
      Header: "app_Header_2Dmjt",
      Body: "app_Body_rkIdN",
      Spacer: "app_Spacer_Syr2l",
      BottomSection: "app_BottomSection_3EvEA",
      VerticalBar: "app_VerticalBar_3_V_e",
      PlaytimeList: "app_PlaytimeList_1W_id",
      Loading: "app_Loading_3EKSZ",
      IdentityBlock: "app_IdentityBlock_19Bi9",
      Avatar: "app_Avatar_2tHL1",
      PersonalInfo: "app_PersonalInfo_2UOnR",
      Persona: "app_Persona_QQZQk",
      GameCount: "app_GameCount_2F2Pu",
      TotalTime: "app_TotalTime_2f_II",
      PlayedGame: "app_PlayedGame_1RMe-",
      Ignored: "app_Ignored_S05G_",
      PlaytimeInfo: "app_PlaytimeInfo_26XnS",
      IgnoreToggle: "app_IgnoreToggle_32kxi",
      Logo: "app_Logo_3yA86",
      HoursPlayed: "app_HoursPlayed_YzQV_",
      LastPlayed: "app_LastPlayed_1kbFb",
      UpdateSaveBlock: "app_UpdateSaveBlock_31ynD",
      UpdateButton: "app_UpdateButton_1_Ap6",
      Enabled: "app_Enabled_2gzL9",
      RecommendationList: "app_RecommendationList_2UkLX",
      List: "app_List_115iv",
      Updating: "app_Updating_W60ex",
      RecommendationOptions: "app_RecommendationOptions_2jiHP",
      Row: "app_Row_O0NAA",
      SecondRow: "app_SecondRow_6FjGe",
      OptionCheckbox: "app_OptionCheckbox_3coaI",
      Checkbox: "app_Checkbox_3hRS3",
      OptionSlider: "app_OptionSlider_sLHtG",
      Title: "app_Title_1C2xv",
      Labels: "app_Labels_vq2C2",
      Min: "app_Min_2zfSC",
      Max: "app_Max_4ugol",
      OptionalLabel: "app_OptionalLabel_x7Ol7",
      OptionDropdown: "app_OptionDropdown_OpsgV",
      Label: "app_Label_2-25b",
      game_purchase_action: "app_game_purchase_action_2fgLt",
      RecommendationEntry: "app_RecommendationEntry_18wXZ",
      BottomEntrySection: "app_BottomEntrySection_1_mTs",
      WishlistSection: "app_WishlistSection_3gCwT",
      Hidden: "app_Hidden_2fA6b",
      TopEntrySection: "app_TopEntrySection_38Oo-",
      LeftSection: "app_LeftSection_85OOv",
      Video: "app_Video_bQLsR",
      Revealed: "app_Revealed_1k4IQ",
      UnMute: "app_UnMute_YNcsz",
      RightSection: "app_RightSection_wpedx",
      CenterSection: "app_CenterSection_2cG4b",
      CenterOption: "app_CenterOption_1Ob_g",
      Name: "app_Name_2TXc4",
      Released: "app_Released_2vUYQ",
      BarContainer: "app_BarContainer_3x-Ph",
      Bar: "app_Bar_1Jqtf",
      Score: "app_Score_gYJC1",
      Tags: "app_Tags_1I0B5",
      Tag: "app_Tag_2Hhn2",
      Hovered: "app_Hovered_2llCE",
      Wishlisted: "app_Wishlisted_3-h1I",
      PurchaseSection: "app_PurchaseSection_3gZMG",
      PurchaseBG: "app_PurchaseBG_1z4lO",
      WishlistFlag: "app_WishlistFlag_1fBvX",
      SelectionBox: "app_SelectionBox_1ydvC"
    };
  },
  gfbn: function(e, t, a) {
    "use strict";
    a.r(t);
    var _ = a("mrSG"),
      n = a("vDqi"),
      d = a.n(n),
      l = a("q1tI"),
      P = a.n(l),
      r = a("okNM"),
      o = a("6TF7"),
      M = a.n(o);
    function i(e, t, a) {
      return {
        get: function() {
          var e = a.value.bind(this);
          return (
            this.hasOwnProperty(t) ||
              Object.defineProperty(this, t, { value: e }),
            e
          );
        }
      };
    }
    var D = function() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      return e.reduce(function(e, t) {
        return t
          ? "string" == typeof t
            ? e
              ? e + " " + t
              : t
            : "object" == typeof t
            ? e
              ? e + " " + s(t)
              : s(t)
            : e
          : e;
      }, "");
    };
    function s(a) {
      return Object.keys(a).reduce(function(e, t) {
        return a[t] ? (e ? e + " " + t : t) : e;
      }, "");
    }
    var O = {
        EUNIVERSE: 0,
        WEB_UNIVERSE: "",
        LANGUAGE: "english",
        BASE_URL: "",
        COMMUNITY_BASE_URL: "",
        STORE_BASE_URL: "",
        RELATIVE_URL: "",
        IMG_URL: "",
        IMG_URL_BASE: "",
        CDN_URL: "",
        RENDER_TIMESTAMP: 0,
        EXPLORE_URL: "",
        ACCOUNT_ID: 0,
        STEAM_ID: "",
        SESSION_ID: "",
        LOGIN_REDIRECT: "",
        AVATAR_URL: "",
        PERSONA_NAME: "",
        LINK_PARAM: "",
        NUM_POPULARITY_STEPS: 0,
        NUM_RECENCY_STEPS: 0,
        MAX_PLAYED_GAMES: 0,
        RESET_OPTIONS: !1,
        INCLUDE_PLAYED: !1,
        ALGORITHM: 0,
        REINFERENCE: !1,
        MODEL_VERSION: 0,
        IMMEDIATE_IGNORE_UPDATE: !1
      },
      c = "application_config";
    function u() {
      var e = (function(e, t) {
        void 0 === t && (t = c);
        var a = document.getElementById(t);
        if (a)
          try {
            var n = JSON.parse(a.getAttribute("data-" + e) || "");
            return n;
          } catch (e) {
            console.error("Failed to parse config", e);
          }
        else console.error("Missing config element #" + t);
        return;
      })("config");
      e && Object.assign(O, e);
    }
    a("Gp1o");
    var p = {
      PerYear: 31536e3,
      PerMonth: 2628e3,
      PerWeek: 604800,
      PerDay: 86400,
      PerHour: 3600,
      PerMinute: 60
    };
    var h, m, E, g;
    function v(e, t) {
      switch ((void 0 === t && (t = 0), e)) {
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
        default:
          return t;
      }
    }
    function b(e) {
      if (!y() || !window.document.cookie) return null;
      var t = document.cookie.match("(^|; )" + e + "=([^;]*)");
      return t && t[2] ? decodeURIComponent(t[2]) : null;
    }
    function f(e, t, a, n) {
      if (y()) {
        n || (n = "/");
        var r = "";
        if (void 0 !== a && a) {
          var o = new Date();
          o.setTime(o.getTime() + 864e5 * a),
            (r = "; expires=" + o.toUTCString());
        }
        document.cookie =
          encodeURIComponent(e) +
          "=" +
          encodeURIComponent(t) +
          r +
          ";path=" +
          n;
      }
    }
    function y() {
      return !!window.document;
    }
    ((m = h || (h = {}))[(m.k_EOtherEvent = 1)] = "k_EOtherEvent"),
      (m[(m.k_EGameEvent = 2)] = "k_EGameEvent"),
      (m[(m.k_EPartyEvent = 3)] = "k_EPartyEvent"),
      (m[(m.k_EMeetingEvent = 4)] = "k_EMeetingEvent"),
      (m[(m.k_ESpecialCauseEvent = 5)] = "k_ESpecialCauseEvent"),
      (m[(m.k_EMusicAndArtsEvent = 6)] = "k_EMusicAndArtsEvent"),
      (m[(m.k_ESportsEvent = 7)] = "k_ESportsEvent"),
      (m[(m.k_ETripEvent = 8)] = "k_ETripEvent"),
      (m[(m.k_EChatEvent = 9)] = "k_EChatEvent"),
      (m[(m.k_EGameReleaseEvent = 10)] = "k_EGameReleaseEvent"),
      (m[(m.k_EBroadcastEvent = 11)] = "k_EBroadcastEvent"),
      (m[(m.k_ESmallUpdateEvent = 12)] = "k_ESmallUpdateEvent"),
      (m[(m.k_ERegularUpdateEvent = 13)] = "k_ERegularUpdateEvent"),
      (m[(m.k_EMajorUpdateEvent = 14)] = "k_EMajorUpdateEvent"),
      (m[(m.k_EFutureReleaseEvent = 16)] = "k_EFutureReleaseEvent"),
      (m[(m.k_EESportTournamentStreamEvent = 17)] =
        "k_EESportTournamentStreamEvent"),
      (m[(m.k_EDevStreamEvent = 18)] = "k_EDevStreamEvent"),
      (m[(m.k_EFamousStreamEvent = 19)] = "k_EFamousStreamEvent"),
      (m[(m.k_EGameSalesEvent = 20)] = "k_EGameSalesEvent"),
      (m[(m.k_EGameItemSalesEvent = 21)] = "k_EGameItemSalesEvent"),
      (m[(m.k_EInGameBonusXPEvent = 22)] = "k_EInGameBonusXPEvent"),
      (m[(m.k_EInGameLootEvent = 23)] = "k_EInGameLootEvent"),
      (m[(m.k_EInGamePerksEvent = 24)] = "k_EInGamePerksEvent"),
      (m[(m.k_EInGameChallengeEvent = 25)] = "k_EInGameChallengeEvent"),
      (m[(m.k_EInGameContestEvent = 26)] = "k_EInGameContestEvent"),
      (m[(m.k_EIRLEvent = 27)] = "k_EIRLEvent"),
      (m[(m.k_ENewsEvent = 28)] = "k_ENewsEvent"),
      (m[(m.k_EBetaReleaseEvent = 29)] = "k_EBetaReleaseEvent"),
      (m[(m.k_EFreeTrial = 31)] = "k_EFreeTrial"),
      (m[(m.k_ESeasonRelease = 32)] = "k_ESeasonRelease"),
      ((g = E || (E = {}))[(g.k_ELaunchSource_None = 0)] =
        "k_ELaunchSource_None"),
      (g[(g.k_ELaunchSource_2ftLibraryDetails = 100)] =
        "k_ELaunchSource_2ftLibraryDetails"),
      (g[(g.k_ELaunchSource_2ftLibraryListView = 101)] =
        "k_ELaunchSource_2ftLibraryListView"),
      (g[(g.k_ELaunchSource_2ftLibraryGrid = 103)] =
        "k_ELaunchSource_2ftLibraryGrid"),
      (g[(g.k_ELaunchSource_InstallSubComplete = 104)] =
        "k_ELaunchSource_InstallSubComplete"),
      (g[(g.k_ELaunchSource_DownloadsPage = 105)] =
        "k_ELaunchSource_DownloadsPage"),
      (g[(g.k_ELaunchSource_RemoteClientStartStreaming = 106)] =
        "k_ELaunchSource_RemoteClientStartStreaming"),
      (g[(g.k_ELaunchSource_2ftMiniModeList = 107)] =
        "k_ELaunchSource_2ftMiniModeList"),
      (g[(g.k_ELaunchSource_10ft = 200)] = "k_ELaunchSource_10ft"),
      (g[(g.k_ELaunchSource_DashAppLaunchCmdLine = 300)] =
        "k_ELaunchSource_DashAppLaunchCmdLine"),
      (g[(g.k_ELaunchSource_DashGameIdLaunchCmdLine = 301)] =
        "k_ELaunchSource_DashGameIdLaunchCmdLine"),
      (g[(g.k_ELaunchSource_RunByGameDir = 302)] =
        "k_ELaunchSource_RunByGameDir"),
      (g[(g.k_ELaunchSource_SubCmdRunDashGame = 303)] =
        "k_ELaunchSource_SubCmdRunDashGame"),
      (g[(g.k_ELaunchSource_SteamURL_Launch = 400)] =
        "k_ELaunchSource_SteamURL_Launch"),
      (g[(g.k_ELaunchSource_SteamURL_Run = 401)] =
        "k_ELaunchSource_SteamURL_Run"),
      (g[(g.k_ELaunchSource_SteamURL_JoinLobby = 402)] =
        "k_ELaunchSource_SteamURL_JoinLobby"),
      (g[(g.k_ELaunchSource_SteamURL_RunGame = 403)] =
        "k_ELaunchSource_SteamURL_RunGame"),
      (g[(g.k_ELaunchSource_SteamURL_RunGameIdOrJumplist = 404)] =
        "k_ELaunchSource_SteamURL_RunGameIdOrJumplist"),
      (g[(g.k_ELaunchSource_SteamURL_RunSafe = 405)] =
        "k_ELaunchSource_SteamURL_RunSafe"),
      (g[(g.k_ELaunchSource_TrayIcon = 500)] = "k_ELaunchSource_TrayIcon"),
      (g[(g.k_ELaunchSource_LibraryLeftColumnContextMenu = 600)] =
        "k_ELaunchSource_LibraryLeftColumnContextMenu"),
      (g[(g.k_ELaunchSource_LibraryLeftColumnDoubleClick = 601)] =
        "k_ELaunchSource_LibraryLeftColumnDoubleClick"),
      (g[(g.k_ELaunchSource_Dota2Launcher = 700)] =
        "k_ELaunchSource_Dota2Launcher"),
      (g[(g.k_ELaunchSource_IRunGameEngine = 800)] =
        "k_ELaunchSource_IRunGameEngine"),
      (g[(g.k_ELaunchSource_DRMFailureResponse = 801)] =
        "k_ELaunchSource_DRMFailureResponse"),
      (g[(g.k_ELaunchSource_DRMDataRequest = 802)] =
        "k_ELaunchSource_DRMDataRequest"),
      (g[(g.k_ELaunchSource_CloudFilePanel = 803)] =
        "k_ELaunchSource_CloudFilePanel"),
      (g[(g.k_ELaunchSource_DiscoveredAlreadyRunning = 804)] =
        "k_ELaunchSource_DiscoveredAlreadyRunning"),
      (g[(g.k_ELaunchSource_GameActionJoinParty = 900)] =
        "k_ELaunchSource_GameActionJoinParty");
    var S,
      T = {
        EUNIVERSE: 0,
        WEB_UNIVERSE: "",
        LANGUAGE: "english",
        SUPPORTED_LANGUAGES: [],
        COUNTRY: "",
        CDN_URL: "",
        MEDIA_CDN_COMMUNITY_URL: "",
        MEDIA_CDN_URL: "",
        COMMUNITY_CDN_URL: "",
        COMMUNITY_CDN_ASSET_URL: "",
        PUBLIC_SHARED_URL: "",
        COMMUNITY_BASE_URL: "",
        CHAT_BASE_URL: "",
        STORE_BASE_URL: "",
        STORE_ICON_BASE_URL: "",
        IMG_URL: "",
        STEAMTV_BASE_URL: "",
        HELP_BASE_URL: "",
        PARTNER_BASE_URL: "",
        IN_CLIENT: !(g[(g.k_ELaunchSource_AppPortraitContextMenu = 1e3)] =
          "k_ELaunchSource_AppPortraitContextMenu"),
        USE_POPUPS: !1,
        IN_MOBILE: !1,
        IN_TENFOOT: !1,
        WEBAPI_BASE_URL: "",
        TOKEN_URL: "",
        BUILD_TIMESTAMP: 0,
        PAGE_TIMESTAMP: 0,
        get SESSIONID() {
          return (function() {
            if (!y()) return S || (S = k()), S;
            var e = b("sessionid");
            e || (e = k());
            return e;
          })();
        },
        FRIENDSUI_BETA: !1,
        STEAM_TV: !1,
        DEV_MODE: !1,
        OFFLINE_MODE: !1
      };
    function k() {
      var e = (function() {
        for (var e, t, a = "", n = 0; n < 24; n++)
          a += ((e = 0),
          (t = 35),
          (e = Math.ceil(e)),
          (t = Math.floor(t)),
          Math.floor(Math.random() * (t - e + 1)) + e).toString(36);
        return a;
      })();
      return f("sessionid", e, 0), e;
    }
    var L = (function() {
      function e() {
        (this.m_mapTokens = new Map()), (this.m_mapFallbackTokens = new Map());
      }
      return (
        (e.prototype.InitFromObjects = function(a, n, r, o) {
          var i = this;
          this.m_mapTokens.clear(),
            Object.keys(r).forEach(function(e, t) {
              i.m_mapTokens.set(e, r[e]);
            }),
            Object.keys(a).forEach(function(e, t) {
              i.m_mapTokens.set(e, a[e]);
            }),
            n &&
              Object.keys(n).forEach(function(e, t) {
                i.m_mapTokens.has(e) || i.m_mapTokens.set(e, n[e]),
                  i.m_mapFallbackTokens.set(e, n[e]);
              }),
            o &&
              Object.keys(o).forEach(function(e, t) {
                i.m_mapTokens.has(e) || i.m_mapTokens.set(e, o[e]),
                  i.m_mapFallbackTokens.has(e) ||
                    i.m_mapFallbackTokens.set(e, o[e]);
              });
        }),
        (e.prototype.InitDirect = function(a, n) {
          var r = this;
          this.m_mapTokens.clear(),
            this.m_mapFallbackTokens.clear(),
            Object.keys(a).forEach(function(e, t) {
              r.m_mapTokens.set(e, a[e]);
            }),
            n &&
              Object.keys(n).forEach(function(e, t) {
                r.m_mapTokens.has(e) || r.m_mapTokens.set(e, n[e]),
                  r.m_mapFallbackTokens.set(e, n[e]);
              });
        }),
        (e.prototype.GetPreferredLocales = function() {
          return this.m_rgLocalesToUse
            ? this.m_rgLocalesToUse
            : navigator && navigator.languages
            ? navigator.languages
            : ["en-US"];
        }),
        (e.prototype.GetELanguageFallbackOrder = function() {
          var t = new Array();
          return (
            t.push(v(T.LANGUAGE)),
            (T.SUPPORTED_LANGUAGES || []).forEach(function(e) {
              e.value != T.LANGUAGE && t.push(v(e.value));
            }),
            t
          );
        }),
        (e.prototype.SetPreferredLocales = function(e) {
          this.m_rgLocalesToUse = e;
        }),
        (e.prototype.LocalizeString = function(e) {
          if (!e || 0 == e.length || "#" != e.charAt(0)) return "";
          var t = this.m_mapTokens.get(e.substring(1));
          return void 0 === t ? "" : t;
        }),
        (e.prototype.LocalizeStringFromFallback = function(e) {
          if (!e || 0 == e.length || "#" != e.charAt(0)) return "";
          var t = this.m_mapFallbackTokens.get(e.substring(1));
          return void 0 === t ? "" : t;
        }),
        e
      );
    })();
    function U(e) {
      for (var n = [], t = 1; t < arguments.length; t++)
        n[t - 1] = arguments[t];
      var a = C.LocalizeString(e);
      return a
        ? (0 < n.length &&
            (a = a.replace(/%(\d+)\$s/g, function(e, t) {
              if (t <= n.length && 1 <= t) {
                var a = n[t - 1];
                return String(null == a ? "" : a);
              }
              return e;
            })),
          a)
        : e;
    }
    function w(e) {
      var t = new Date(1e3 * e),
        a = t.setHours(0, 0, 0, 0),
        n = R.get(a);
      if (n) return n;
      return (
        (n = t.toLocaleDateString(C.GetPreferredLocales(), {
          year: "numeric",
          month: "short",
          day: "numeric"
        })),
        R.set(a, n),
        n
      );
    }
    var R = new Map();
    new Map();
    new Map(), new Map(), new Map(), new Map();
    var C = new L();
    window.LocalizationManager = C;
    a("2i24");
    function B(e) {
      return l.createElement(
        "svg",
        {
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Volume",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "255.999px",
          viewBox: "0 0 256 255.999"
        },
        l.createElement(
          "g",
          { className: "Speaker" },
          l.createElement("path", {
            d:
              "M93.785,52.265c-0.946,0-2.357,0.63-3.304,1.577L40.284,98.022c-0.947,0.789-2.831,1.578-4.093,1.578H9.367 C8.104,99.6,7,100.706,7,101.967v52.069c0,1.264,1.104,2.367,2.367,2.367H36.19c1.262,0,3.146,0.632,4.093,1.578l50.197,44.181 c0.947,0.789,2.516,1.578,3.304,1.578s1.578-1.104,1.578-2.367V54.631C95.363,53.369,94.731,52.265,93.785,52.265z"
          })
        ),
        !e.muted &&
          l.createElement(
            "g",
            { className: "SoundWaves" },
            l.createElement("path", {
              className: "SoundWavesHighest",
              d:
                "M193.826,30.402c24.959,24.958,40.349,59.403,40.349,97.604c0,38.199-15.388,72.645-40.349,97.603l9.916,9.916 c28.067-28.067,44.263-64.673,44.263-107.521c0-42.847-16.196-79.455-44.263-107.521"
            }),
            l.createElement("path", {
              className: "SoundWavesHigh",
              d:
                "M175.737,47.628l-8.924,8.924c18.271,18.27,29.536,43.484,29.536,71.448s-11.264,53.178-29.536,71.448l8.924,8.924 c20.546-20.546,33.234-49.008,33.234-80.374c0-31.366-12.688-59.829-33.234-80.374V47.628z"
            }),
            l.createElement("path", {
              className: "SoundWavesMed",
              d:
                "M148.913,74.454l-8.925,8.925c11.488,11.488,18.491,27.236,18.491,44.624c0,17.388-7.054,33.281-18.491,44.575l8.875,8.975 c13.811-13.635,22.239-32.753,22.239-53.55c0-20.797-8.432-39.793-22.189-53.55V74.454z"
            }),
            l.createElement("path", {
              className: "SoundWavesLow",
              d:
                "M121.989,101.229l-8.778,9.073c4.641,4.516,7.397,10.706,7.397,17.702c0,6.995-2.755,13.186-7.397,17.702l8.778,9.073 c7.035-6.844,11.243-16.413,11.243-26.775C133.232,117.643,129.024,108.075,121.989,101.229z"
            })
          ),
        l.createElement(
          "g",
          { className: "SoundX" },
          l.createElement("line", {
            fill: "none",
            strokeWidth: e.muted ? 10 : 0,
            stroke: "#fff",
            strokeMiterlimit: "10",
            x1: "137",
            y1: "170.667",
            x2: "223.167",
            y2: "84.5"
          }),
          l.createElement("line", {
            fill: "none",
            strokeWidth: e.muted ? 10 : 0,
            stroke: "#fff",
            strokeMiterlimit: "10",
            x1: "137",
            y1: "84.5",
            x2: "223.167",
            y2: "170.667"
          })
        )
      );
    }
    var I,
      N,
      A = new ((function() {
        function e() {
          this.m_mapAppToSNRs = new Map();
        }
        return (
          (e.prototype.AddImpression = function(e, t) {
            var a = !1;
            if (
              (this.m_mapAppToSNRs.has(e)
                ? -1 == this.m_mapAppToSNRs.get(e).indexOf(t) &&
                  (this.m_mapAppToSNRs.get(e).push(t), (a = !0))
                : (this.m_mapAppToSNRs.set(e, [t]), (a = !0)),
              a)
            ) {
              var n = b("app_impressions") || "";
              0 < n.length && (n += "|"),
                f("app_impressions", (n += e + "@" + t));
            }
          }),
          e
        );
      })())(),
      x = a("aqT/"),
      G = a.n(x),
      V = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          _.d(t, e),
          (t.prototype.onVisibilityChanged = function(e) {
            e && A.AddImpression(this.props.appID, this.props.snr);
          }),
          (t.prototype.render = function() {
            return P.a.createElement(
              G.a,
              { onChange: this.onVisibilityChanged },
              this.props.children
            );
          }),
          _.c([i], t.prototype, "onVisibilityChanged", null),
          t
        );
      })(P.a.Component),
      F = function(e) {
        e.accountID;
        var t = se.getInputApps(),
          a = Object.keys(t).length,
          n = 0;
        return (
          Object.keys(t).map(function(e) {
            n += t[e].p;
          }),
          P.a.createElement(
            "div",
            { className: M.a.IdentityBlock },
            P.a.createElement("img", {
              className: M.a.Avatar,
              src: O.AVATAR_URL
            }),
            P.a.createElement(
              "div",
              { className: M.a.PersonalInfo },
              P.a.createElement(
                "div",
                { className: M.a.Persona },
                O.PERSONA_NAME
              ),
              P.a.createElement(
                "div",
                { className: M.a.GameCount },
                U("#PlaytimeList_RecentGames", a)
              ),
              P.a.createElement(
                "div",
                { className: M.a.TotalTime },
                U("#PlaytimeList_HoursTotal", n)
              )
            )
          )
        );
      },
      W = function(e) {
        var t = e.appID,
          a = e.hours,
          n = e.lastPlayed,
          r = e.ignored,
          o = O.CDN_URL + "apps/" + t + "/header.jpg",
          i = Date.now() / 1e3 - n,
          s = "";
        return (
          (s =
            n <= 86400
              ? U("#PlaytimeList_LastPlayedMax")
              : U(
                  "#PlaytimeList_LastPlayed",
                  31449600 < i
                    ? w(n)
                    : (function(e, t) {
                        void 0 === t && (t = !1);
                        var a = t ? "#TimeInterval_" : "#TimeSince_";
                        return e >= 2 * p.PerYear
                          ? U(a + "XYears", Math.floor(e / p.PerYear))
                          : e >= p.PerYear
                          ? (e -= p.PerYear) >= 2 * p.PerMonth
                            ? U(a + "1YearXMonths", Math.floor(e / p.PerMonth))
                            : U(a + "1Year")
                          : e >= 2 * p.PerMonth
                          ? U(a + "XMonths", Math.floor(e / p.PerMonth))
                          : e >= 2 * p.PerWeek
                          ? U(a + "XWeeks", Math.floor(e / p.PerWeek))
                          : e >= p.PerWeek
                          ? U(a + "1Week", Math.floor(e / p.PerWeek))
                          : e >= 2 * p.PerDay
                          ? U(a + "XDays", Math.floor(e / p.PerDay))
                          : e >= p.PerDay
                          ? (e -= p.PerDay) >= 2 * p.PerHour
                            ? U(a + "1DayXHours", Math.floor(e / p.PerHour))
                            : U(a + "1Day")
                          : e >= 2 * p.PerHour
                          ? U(a + "XHours", Math.floor(e / p.PerHour))
                          : e >= p.PerHour
                          ? (e -= p.PerHour) >= 2 * p.PerMinute
                            ? U(
                                a + "1HourXMinutes",
                                Math.floor(e / p.PerMinute)
                              )
                            : U(a + "1Hour")
                          : e >= 2 * p.PerMinute
                          ? U(a + "XMinutes", Math.floor(e / p.PerMinute))
                          : e >= p.PerMinute
                          ? U(a + "1Minute")
                          : U(a + "LessThanAMinute");
                      })(i)
                )),
          P.a.createElement(
            "div",
            { className: D(M.a.PlayedGame, r && M.a.Ignored) },
            P.a.createElement("img", { className: M.a.Logo, src: o }),
            P.a.createElement(
              "div",
              { className: M.a.PlaytimeInfo },
              P.a.createElement(
                "div",
                { className: M.a.HoursPlayed },
                U("#PlaytimeList_Hours", a)
              ),
              P.a.createElement("div", { className: M.a.LastPlayed }, s),
              P.a.createElement(
                "div",
                {
                  className: M.a.IgnoreToggle,
                  onClick: function() {
                    return se.onToggleIgnore(t);
                  }
                },
                U(r ? "#PlaytimeList_UnIgnore" : "#PlaytimeList_Ignore")
              )
            )
          )
        );
      },
      H = (function(a) {
        function e(e) {
          var t = a.call(this, e) || this;
          return (t.state = {}), t;
        }
        return (
          _.d(e, a),
          (e.prototype.onUpdate = function() {
            se.m_bIgnoredEdited && se.onUpdateWithIgnored();
          }),
          (e.prototype.render = function() {
            return O.IMMEDIATE_IGNORE_UPDATE
              ? P.a.createElement("div", null)
              : P.a.createElement(
                  "div",
                  { className: M.a.UpdateSaveBlock },
                  P.a.createElement(
                    "div",
                    {
                      className: D(
                        M.a.UpdateButton,
                        se.m_bIgnoredEdited && M.a.Enabled
                      ),
                      onClick: this.onUpdate
                    },
                    U("#UpdateSaveBlock_Update")
                  )
                );
          }),
          _.c([i], e.prototype, "onUpdate", null),
          (e = _.c([r.a], e))
        );
      })(P.a.Component),
      Y = (function(a) {
        function e(e) {
          var t = a.call(this, e) || this;
          return (t.state = {}), t;
        }
        return (
          _.d(e, a),
          (e.prototype.render = function() {
            var e = se.getInputApps(),
              a = [];
            if (!e)
              return P.a.createElement(
                "div",
                { className: M.a.PlaytimeList },
                P.a.createElement(
                  "div",
                  { className: M.a.Header },
                  U("#PlaytimeList_Header")
                ),
                P.a.createElement("div", { className: M.a.Loading })
              );
            var n = e.slice().sort(function(e, t) {
              return t.l - e.l;
            });
            return (
              Object.keys(n).map(function(e) {
                var t = n[e];
                a.push(
                  P.a.createElement(W, {
                    key: "PlayedGame_" + t.a,
                    appID: t.a,
                    hours: t.p,
                    lastPlayed: t.l,
                    ignored: t.i
                  })
                );
              }),
              P.a.createElement(
                "div",
                { className: M.a.PlaytimeList },
                P.a.createElement(
                  "div",
                  { className: M.a.Header },
                  U("#PlaytimeList_Header")
                ),
                P.a.createElement(F, { accountID: this.props.accountID }),
                P.a.createElement(H, null),
                P.a.createElement("div", { className: M.a.List }, a)
              )
            );
          }),
          (e = _.c([r.a], e))
        );
      })(P.a.Component),
      j = function(e) {
        var t = e.titleLabel,
          a = e.minLabel,
          n = e.maxLabel,
          r = e.minValue,
          o = e.maxValue,
          i = e.value,
          s = e.onChange,
          c = e.sliderLabels,
          l = c ? Math.round((c.length - 1) * ((i - r) / (o - r))) : void 0,
          u = c ? c[l] : "";
        return P.a.createElement(
          "div",
          { className: M.a.OptionSlider },
          P.a.createElement("div", { className: M.a.Title }, t),
          P.a.createElement(
            "div",
            { className: M.a.Labels },
            P.a.createElement("div", { className: M.a.Min }, a),
            P.a.createElement("div", { className: M.a.Max }, n)
          ),
          P.a.createElement("input", {
            type: "range",
            min: r,
            max: o,
            step: (o - r) / 100,
            value: i,
            onChange: s
          }),
          P.a.createElement("div", { className: M.a.OptionalLabel }, u)
        );
      },
      Q = function(e) {
        var t = e.titleLabel,
          a = e.checked,
          n = e.onChange;
        return P.a.createElement(
          "label",
          { className: M.a.OptionCheckbox },
          P.a.createElement("input", {
            type: "checkbox",
            className: M.a.Checkbox,
            checked: a,
            onChange: n
          }),
          t
        );
      },
      X = function(e) {
        for (
          var t = e.title,
            a = e.options,
            n = e.value,
            r = e.onChange,
            o = [],
            i = 0,
            s = a;
          i < s.length;
          i++
        ) {
          var c = s[i];
          o.push(
            P.a.createElement(
              "option",
              { key: c.value, value: c.value },
              c.display
            )
          );
        }
        return P.a.createElement(
          "div",
          { className: M.a.OptionDropdown },
          P.a.createElement("div", { className: M.a.Label }, t),
          P.a.createElement(
            "select",
            { value: n, onChange: r, className: M.a.SelectionBox },
            o
          )
        );
      },
      q = Object(r.a)(function(e) {
        var t = se.getTags(),
          a = [];
        t &&
          (a.push({ value: 0, display: U("#NoFilter") }),
          a.push({ value: 19, display: t[19] }),
          a.push({ value: 21, display: t[21] }),
          a.push({ value: 4166, display: t[4166] }),
          a.push({ value: 597, display: t[597] }),
          a.push({ value: 1685, display: t[1685] }),
          a.push({ value: 493, display: t[493] }),
          a.push({ value: 3839, display: t[3839] }),
          a.push({ value: 113, display: t[113] }),
          a.push({ value: 492, display: t[492] }),
          a.push({ value: 128, display: t[128] }),
          a.push({ value: 3859, display: t[3859] }),
          a.push({ value: 1695, display: t[1695] }),
          a.push({ value: 122, display: t[122] }),
          a.push({ value: 1774, display: t[1774] }),
          a.push({ value: 599, display: t[599] }),
          a.push({ value: 4182, display: t[4182] }),
          a.push({ value: 9, display: t[9] }),
          a.push({ value: 1662, display: t[1662] }),
          a.push({ value: 21978, display: t[21978] }));
        var n = [
          U("#FilterAge_120"),
          U("#FilterAge_60"),
          U("#FilterAge_36"),
          U("#FilterAge_24"),
          U("#FilterAge_12"),
          U("#FilterAge_6")
        ];
        return P.a.createElement(
          "div",
          { className: M.a.RecommendationOptions },
          P.a.createElement(
            "div",
            { className: D(M.a.Row, M.a.FirstRow) },
            P.a.createElement(j, {
              minLabel: U("#Popularity_Popular"),
              titleLabel: U("#Popularity_Title"),
              maxLabel: U("#Popularity_Niche"),
              minValue: 0,
              maxValue: 1,
              value: se.m_fQueuedPopularityValue,
              onChange: se.onPopularityChanged
            }),
            P.a.createElement(j, {
              minLabel: U("#Recency_Older"),
              titleLabel: U("#Recency_Title"),
              maxLabel: U("#Recency_Newer"),
              minValue: 0,
              maxValue: 1,
              value: se.m_fQueuedRecencyValue,
              onChange: se.onRecencyChanged,
              sliderLabels: n
            })
          ),
          P.a.createElement(
            "div",
            { className: D(M.a.Row, M.a.SecondRow) },
            P.a.createElement(X, {
              title: U("#TagFilter_Title"),
              options: a,
              value: se.m_nTagFilterValue,
              onChange: se.onTagFilterChanged
            }),
            P.a.createElement(X, {
              title: U("#TagExclude_Title"),
              options: a,
              value: se.m_nTagExcludeValue,
              onChange: se.onTagExcludeChanged
            }),
            P.a.createElement(Q, {
              titleLabel: U("#ExcludeWishlisted"),
              checked: se.m_bExcludeWishlisted,
              onChange: se.onExcludeWishlistedToggled
            })
          )
        );
      }),
      z = (function(a) {
        function e(e) {
          var t = a.call(this, e) || this;
          return (
            (t.m_videoRef = P.a.createRef()),
            (t.state = { hovered: !1, wishlisted: se.getAppInfo()[e.appID].w }),
            t
          );
        }
        return (
          _.d(e, a),
          (e.prototype.componentDidMount = function() {
            this.m_videoRef.current.defaultMuted = !0;
          }),
          (e.prototype.componentDidUpdate = function() {
            if (
              this.state.hovered &&
              this.m_videoRef &&
              this.m_videoRef.current &&
              0 == this.m_videoRef.current.currentTime
            ) {
              var e = this.m_videoRef.current.play();
              e && e.then(function() {}, function() {});
            }
          }),
          (e.prototype.OnHover = function() {
            this.setState({ hovered: !0 });
          }),
          (e.prototype.OnUnHover = function() {
            this.setState({ hovered: !1 }),
              this.m_videoRef &&
                this.m_videoRef.current &&
                ((this.m_videoRef.current.currentTime = 0),
                this.m_videoRef.current.pause());
          }),
          (e.prototype.onMuteToggle = function(e) {
            se.shouldMute()
              ? (se.onUnMuteClicked(),
                this.m_videoRef &&
                  this.m_videoRef.current &&
                  (this.m_videoRef.current.muted = !1))
              : (se.onMuteClicked(),
                this.m_videoRef &&
                  this.m_videoRef.current &&
                  (this.m_videoRef.current.muted = !0)),
              e.preventDefault(),
              e.stopPropagation();
          }),
          (e.prototype.onAddToWishlist = function(e) {
            se.onAddToWishlist(this.props.appID, this.props.rank),
              this.setState({ wishlisted: !0 }),
              e.preventDefault(),
              e.stopPropagation();
          }),
          (e.prototype.onGoToWishlist = function(e) {
            se.onGoToWishlist(), e.preventDefault(), e.stopPropagation();
          }),
          (e.prototype.onAddToCart = function(e) {
            se.onAddToCart(this.props.appID, this.props.rank),
              e.preventDefault(),
              e.stopPropagation();
          }),
          (e.prototype.render = function() {
            var t = this,
              e = this.props,
              a = e.appID,
              n = e.score,
              r = e.rank,
              o = e.width,
              i =
                "https://steamcdn-a.akamaihd.net/steam/apps/" +
                a +
                "/header.jpg",
              s = se.getAppInfo()[a];
            if (!s) return P.a.createElement("div", null);
            var c = s.n,
              l = 0 < s.r ? U("#Recommendation_ReleasedOn", w(s.r)) : "",
              u = [];
            if (s.t)
              for (var p = 0, _ = 0, d = s.t; _ < d.length; _++) {
                var h = d[_];
                if (
                  (u.push(
                    P.a.createElement(
                      "div",
                      { key: a + "_" + h, className: M.a.Tag },
                      se.getTags()[h]
                    )
                  ),
                  5 == ++p)
                )
                  break;
              }
            var m = parseInt(M.a.nSmallEntryWidth),
              E = parseInt(M.a.nOptionsWrapWidth),
              g = 112,
              v = !0;
            o < m ? (v = !(g = 66)) : o < E && (v = !(g = 87));
            var b = v && this.state.hovered,
              f = Math.min(Number(n) / 10, 1e3),
              y = (Math.max(1, n), !1),
              S = !1,
              T = !0,
              k = "",
              L = "",
              R = "",
              C = "",
              I = "";
            if (b) {
              var N = se.getDetails(this.props.appID);
              N &&
                ((y = !0),
                (S = 0 < N.discount_pct),
                (T = "0" == N.discount_price),
                (I =
                  "probably" ==
                  document
                    .createElement("video")
                    .canPlayType('video/webm; codecs="vp8, vorbis"')
                    ? N.video_webm
                    : N.video_mp4),
                (k = "-" + N.discount_pct + "%"),
                (L = N.base_price),
                (R = T ? U("#FreeToPlay") : N.discount_price),
                (C = N.description));
            }
            var A = I && 0 < I.length;
            return P.a.createElement(
              V,
              { appID: a, snr: O.LINK_PARAM },
              P.a.createElement(
                "a",
                {
                  href: O.BASE_URL + "app/" + a + "?snr=" + O.LINK_PARAM,
                  onClick: function() {
                    return se.onAppClicked(a, r);
                  },
                  className: D(
                    M.a.RecommendationEntry,
                    "ds_flagged",
                    "ds_wishlist",
                    30 < r && M.a.Hidden,
                    b && M.a.Hovered
                  ),
                  style: { top: Math.min(31, r) * g },
                  onMouseEnter: this.OnHover,
                  onMouseLeave: this.OnUnHover
                },
                P.a.createElement(
                  "div",
                  { className: M.a.TopEntrySection },
                  P.a.createElement(
                    "div",
                    { className: M.a.LeftSection },
                    P.a.createElement("img", {
                      className: D(M.a.Logo, (!A || !b) && M.a.Revealed),
                      src: i
                    }),
                    P.a.createElement("video", {
                      ref: this.m_videoRef,
                      className: D(
                        "highlight_player_item",
                        "highlight_movie",
                        M.a.Video,
                        A && b && M.a.Revealed
                      ),
                      playsInline: !0,
                      autoPlay: !0,
                      muted: se.shouldMute(),
                      src: I
                    }),
                    P.a.createElement(
                      "div",
                      {
                        className: D(M.a.UnMute, A && M.a.Revealed),
                        onClick: function(e) {
                          return t.onMuteToggle(e);
                        }
                      },
                      P.a.createElement(B, { muted: se.shouldMute() })
                    ),
                    this.state.wishlisted &&
                      P.a.createElement(
                        "div",
                        {
                          className: D(
                            "ds_flag",
                            "ds_wishlist_flag",
                            M.a.WishlistFlag
                          )
                        },
                        U("#Recommendation_OnWishlist") + "  "
                      )
                  ),
                  P.a.createElement(
                    "div",
                    { className: M.a.RightSection },
                    P.a.createElement("div", { className: M.a.Name }, c),
                    P.a.createElement(
                      "div",
                      { className: M.a.CenterSection },
                      P.a.createElement(
                        "div",
                        {
                          className: D(
                            M.a.CenterOption,
                            M.a.CenterDefault,
                            b && M.a.Hidden
                          )
                        },
                        P.a.createElement(
                          "div",
                          { className: M.a.Released },
                          l
                        ),
                        P.a.createElement(
                          "div",
                          { className: M.a.BarContainer },
                          P.a.createElement("div", {
                            className: M.a.Bar,
                            style: { width: f + "%" }
                          })
                        ),
                        P.a.createElement("div", { className: M.a.Tags }, u)
                      ),
                      P.a.createElement(
                        "div",
                        {
                          className: D(
                            M.a.CenterOption,
                            M.a.CenterHovered,
                            !b && M.a.Hidden
                          )
                        },
                        C
                      )
                    ),
                    y &&
                      P.a.createElement(
                        "div",
                        { className: M.a.BottomEntrySection },
                        P.a.createElement(
                          "div",
                          {
                            className: D(
                              "game_purchase_action",
                              M.a.PurchaseSection
                            )
                          },
                          P.a.createElement(
                            "div",
                            {
                              className: D(
                                "game_purchase_action_bg",
                                M.a.PurchaseBG
                              )
                            },
                            S &&
                              P.a.createElement(
                                "div",
                                {
                                  className:
                                    "discount_block game_purchase_discount"
                                },
                                P.a.createElement(
                                  "div",
                                  { className: "discount_pct" },
                                  k
                                ),
                                P.a.createElement(
                                  "div",
                                  { className: "discount_prices" },
                                  P.a.createElement(
                                    "div",
                                    { className: "discount_original_price" },
                                    L
                                  ),
                                  P.a.createElement(
                                    "div",
                                    { className: "discount_final_price" },
                                    R
                                  )
                                )
                              ),
                            !S &&
                              P.a.createElement(
                                "div",
                                { className: "game_purchase_price price" },
                                R
                              ),
                            !T &&
                              P.a.createElement(
                                "div",
                                {
                                  className: "btn_addtocart",
                                  onClick: function(e) {
                                    return t.onAddToCart(e);
                                  }
                                },
                                P.a.createElement(
                                  "span",
                                  {
                                    className:
                                      "btnv6_green_white_innerfade btn_medium"
                                  },
                                  P.a.createElement(
                                    "span",
                                    null,
                                    U("#btn_add_to_cart")
                                  )
                                )
                              )
                          )
                        ),
                        !this.state.wishlisted &&
                          !T &&
                          P.a.createElement(
                            "div",
                            {
                              id: "add_to_wishlist_area",
                              className: M.a.WishlistSection,
                              onClick: function(e) {
                                return t.onAddToWishlist(e);
                              }
                            },
                            P.a.createElement(
                              "div",
                              { className: "btnv6_blue_hoverfade btn_medium" },
                              P.a.createElement(
                                "span",
                                null,
                                U("#wishlist_add_to_wishlist")
                              )
                            )
                          ),
                        this.state.wishlisted &&
                          !T &&
                          P.a.createElement(
                            "div",
                            {
                              className: D(
                                "btnv6_blue_hoverfade btn_medium",
                                "queue_btn_active",
                                M.a.Wishlisted,
                                M.a.WishlistSection
                              ),
                              "data-tooltip-text": U("#OnWishlistTooltip"),
                              onClick: function(e) {
                                return t.onGoToWishlist(e);
                              }
                            },
                            P.a.createElement(
                              "span",
                              null,
                              P.a.createElement("img", {
                                src: O.IMG_URL_BASE + "/v6/ico/ico_selected.png"
                              }),
                              "  " + U("#OnWishlist")
                            )
                          )
                      )
                  )
                )
              )
            );
          }),
          _.c([i], e.prototype, "OnHover", null),
          _.c([i], e.prototype, "OnUnHover", null),
          _.c([i], e.prototype, "onMuteToggle", null),
          _.c([i], e.prototype, "onAddToWishlist", null),
          _.c([i], e.prototype, "onGoToWishlist", null),
          _.c([i], e.prototype, "onAddToCart", null),
          (e = _.c([r.a], e))
        );
      })(P.a.Component),
      J = (function(a) {
        function e(e) {
          var t = a.call(this, e) || this;
          return (t.state = { sortedRecommendedApps: [] }), t;
        }
        return (
          _.d(e, a),
          (e.prototype.render = function() {
            var e = se.m_fRecencyValue * (O.NUM_RECENCY_STEPS - 1 - 0.001),
              t = Math.floor(e),
              a = t + 1,
              n = 1 - (e - t),
              r = 1 - n,
              o = se.m_fPopularityValue * (O.NUM_POPULARITY_STEPS - 1 - 0.001),
              i = Math.floor(o),
              s = i + 1,
              c = 1 - (o - i),
              l = 1 - c,
              u = [];
            u.push({ index: i * O.NUM_RECENCY_STEPS + t, weight: c * n }),
              u.push({ index: s * O.NUM_RECENCY_STEPS + t, weight: l * n }),
              u.push({ index: i * O.NUM_RECENCY_STEPS + a, weight: c * r }),
              u.push({ index: s * O.NUM_RECENCY_STEPS + a, weight: l * r });
            var p = new Map(),
              _ = 0,
              d = se.getRecommendations(),
              h = se.getAppInfo(),
              m = [];
            if (d) {
              for (var E = 0, g = u; E < g.length; E++) {
                var v = g[E],
                  b = d[v.index];
                if (((_ = Math.max(_, b.score_scale)), b))
                  for (var f = 0; f < b.app_ids.length; f++) {
                    var y = b.app_ids[f];
                    if (
                      !(
                        !h[y] ||
                        h[y].o ||
                        h[y].i ||
                        h[y].ti ||
                        (h[y].w && se.m_bExcludeWishlisted)
                      )
                    ) {
                      var S =
                        (p.get(y) || 0) +
                        b.scores[f] * v.weight * b.score_scale;
                      p.set(y, S);
                    }
                  }
              }
              p.forEach(function(e, t) {
                return p.set(t, e / _);
              });
              var T = [];
              p.forEach(function(e, t) {
                return T.push({ appid: t, score: e });
              }),
                0 != se.m_nTagFilterValue &&
                  (T = T.filter(function(e) {
                    return (
                      h[e.appid].t &&
                      -1 != h[e.appid].t.indexOf(se.m_nTagFilterValue)
                    );
                  })),
                0 != se.m_nTagExcludeValue &&
                  (T = T.filter(function(e) {
                    return (
                      h[e.appid].t &&
                      -1 == h[e.appid].t.indexOf(se.m_nTagExcludeValue)
                    );
                  }));
              for (
                var k = (T = T.filter(function(e) {
                    return 0 < e.score;
                  })).sort(function(e, t) {
                    return t.score - e.score;
                  }),
                  L = 0,
                  R = 0,
                  C = (k = k.slice(0, 30));
                R < C.length;
                R++
              ) {
                (C[R].rank = L), L++;
              }
              for (
                var I = 0,
                  N = k.sort(function(e, t) {
                    return t.appid - e.appid;
                  });
                I < N.length;
                I++
              ) {
                var A = N[I];
                m.push(
                  P.a.createElement(z, {
                    key: A.appid,
                    appID: A.appid,
                    score: A.score,
                    rank: A.rank,
                    width: this.props.width
                  })
                );
              }
            } else
              m.push(
                P.a.createElement("div", {
                  key: "recommendations_loading",
                  className: M.a.RecommendationsLoading
                })
              );
            return P.a.createElement(
              "div",
              { className: M.a.RecommendationList },
              P.a.createElement(
                "div",
                { className: M.a.Header },
                U("#Recommendations_Header")
              ),
              P.a.createElement(q, null),
              P.a.createElement(
                "div",
                {
                  className: D(M.a.List, se.areResultsExpired() && M.a.Updating)
                },
                m
              )
            );
          }),
          (e = _.c([r.a], e))
        );
      })(P.a.Component),
      Z = (function(a) {
        function e(e) {
          var t = a.call(this, e) || this;
          return (t.state = { width: window.innerWidth }), t;
        }
        return (
          _.d(e, a),
          (e.prototype.updateDimensions = function() {
            this.setState({ width: window.innerWidth });
          }),
          (e.prototype.componentDidMount = function() {
            window.addEventListener("resize", this.updateDimensions);
          }),
          (e.prototype.render = function() {
            return 0 == O.ACCOUNT_ID
              ? P.a.createElement(
                  "div",
                  { className: M.a.App },
                  P.a.createElement(
                    "div",
                    { className: M.a.Login },
                    P.a.createElement(
                      "div",
                      { className: M.a.Text },
                      U("#LoginText")
                    ),
                    P.a.createElement(
                      "a",
                      {
                        className: D(
                          "btn_green_white_innerfade",
                          " btn_medium"
                        ),
                        href: O.LOGIN_REDIRECT
                      },
                      P.a.createElement("span", null, U("#LoginButton"))
                    )
                  )
                )
              : P.a.createElement(
                  "div",
                  { className: M.a.App },
                  P.a.createElement(
                    "div",
                    { className: M.a.Container },
                    P.a.createElement(
                      "div",
                      { className: M.a.TopSection },
                      P.a.createElement(
                        "div",
                        { className: M.a.Header },
                        U("#HeaderTitle")
                      ),
                      P.a.createElement(
                        "div",
                        { className: M.a.Body },
                        U("#HeaderBody1")
                      ),
                      P.a.createElement("div", { className: M.a.Spacer }),
                      P.a.createElement(
                        "div",
                        { className: M.a.Body },
                        U("#HeaderBody2")
                      ),
                      P.a.createElement("div", { className: M.a.Spacer }),
                      P.a.createElement(
                        "div",
                        { className: M.a.Body },
                        (function(e) {
                          for (var t = [], a = 1; a < arguments.length; a++)
                            t[a - 1] = arguments[a];
                          var n = C.LocalizeString(e);
                          if (!n) return e;
                          for (
                            var r, o = [], i = /(.*?)%(\d+)\$s/g, s = 0;
                            (r = i.exec(n));

                          ) {
                            (s += r[0].length), o.push(r[1]);
                            var c = parseInt(r[2]);
                            1 <= c && c <= t.length && o.push(t[c - 1]);
                          }
                          return (
                            o.push(n.substr(s)),
                            l.createElement.apply(
                              l,
                              [l.Fragment, null].concat(o)
                            )
                          );
                        })(
                          "#HeaderBody3",
                          P.a.createElement(
                            "a",
                            {
                              href:
                                "https://steamcommunity.com/games/593110/announcements/detail/1612767708821405787"
                            },
                            U("#HeaderBody3a")
                          )
                        )
                      )
                    ),
                    P.a.createElement(
                      "div",
                      { className: M.a.BottomSection },
                      P.a.createElement(Y, { accountID: O.ACCOUNT_ID }),
                      P.a.createElement("div", { className: M.a.VerticalBar }),
                      P.a.createElement(J, { width: this.state.width })
                    )
                  )
                );
          }),
          _.c([i], e.prototype, "updateDimensions", null),
          (e = _.c([r.a], e))
        );
      })(P.a.Component),
      K = a("2vnA"),
      $ = a("i8i4");
    ((N = I || (I = {}))[(N.Unrequested = 0)] = "Unrequested"),
      (N[(N.Pending = 1)] = "Pending"),
      (N[(N.Valid = 2)] = "Valid"),
      (N[(N.Failed = 3)] = "Failed"),
      (N[(N.Rerequest = 4)] = "Rerequest");
    var ee,
      te,
      ae = (function() {
        function e() {
          (this.eState = I.Unrequested), (this.nExpirationTime = 0);
        }
        return (
          (e.prototype.getData = function(t, a, n) {
            var r = this,
              o = Date.now() / 1e3,
              e = this.eState == I.Pending || this.eState == I.Rerequest;
            return (
              o >= this.nExpirationTime &&
                !e &&
                ((this.eState = I.Pending),
                a().then(function(e) {
                  if (r.eState == I.Rerequest)
                    return r.expireData(), void r.getData(t, a, n);
                  r.eState = e
                    ? ((r.data = n ? n(e) : e),
                      (r.nExpirationTime = o + t),
                      I.Valid)
                    : I.Failed;
                })),
              this.data
            );
          }),
          (e.prototype.clearData = function() {
            var e = Date.now() / 1e3;
            (this.eState = I.Unrequested),
              (this.data = null),
              (this.nExpirationTime = e);
          }),
          (e.prototype.expireData = function() {
            var e = Date.now() / 1e3;
            this.nExpirationTime = e;
          }),
          (e.prototype.isExpired = function() {
            var e = Date.now() / 1e3;
            return this.nExpirationTime < e;
          }),
          (e.prototype.delayNewData = function(e) {
            var t = Date.now() / 1e3;
            this.nExpirationTime = t + e;
          }),
          (e.prototype.rerequestDataIfPending = function() {
            this.eState == I.Pending && (this.eState = I.Rerequest);
          }),
          _.c([K.v], e.prototype, "data", void 0),
          _.c([K.v], e.prototype, "nExpirationTime", void 0),
          e
        );
      })();
    ((te = ee || (ee = {}))[(te.ClickThrough = 1)] = "ClickThrough"),
      (te[(te.AddToWishlist = 2)] = "AddToWishlist"),
      (te[(te.AddToCart = 3)] = "AddToCart");
    var ne = (function() {
      function e() {
        var e = this;
        (this.m_mapAppDetailsCache = new Map()),
          (this.m_ResultDataCache = new ae()),
          (this.m_InputAppsCache = new ae()),
          (this.m_fPopularityValue = window.history.state
            ? window.history.state.popularity
            : 0.25),
          (this.m_fRecencyValue = window.history.state
            ? window.history.state.recency
            : 0),
          (this.m_nTagFilterValue = window.history.state
            ? window.history.state.tagfilter
            : 0),
          (this.m_nTagExcludeValue = window.history.state
            ? window.history.state.tagexclude
            : 0),
          (this.m_bExcludeWishlisted =
            !!window.history.state && window.history.state.excludewishlisted),
          (this.m_fQueuedPopularityValue = this.m_fPopularityValue),
          (this.m_fQueuedRecencyValue = this.m_fRecencyValue),
          (this.m_bStateUpdated = !1),
          (this.m_bShouldMute = !0),
          (this.m_bIgnoredEdited = !1),
          setInterval(function() {
            e.m_bStateUpdated &&
              (window.history.replaceState(
                {
                  popularity: e.m_fPopularityValue,
                  recency: e.m_fRecencyValue,
                  tagfilter: e.m_nTagFilterValue,
                  tagexclude: e.m_nTagExcludeValue,
                  excludewishlisted: e.m_bExcludeWishlisted
                },
                ""
              ),
              (e.m_bStateUpdated = !1));
          }, 1e3),
          setInterval(function() {
            (e.m_fPopularityValue == e.m_fQueuedPopularityValue &&
              e.m_fQueuedRecencyValue == e.m_fRecencyValue) ||
              ((e.m_fPopularityValue = e.m_fQueuedPopularityValue),
              (e.m_fRecencyValue = e.m_fQueuedRecencyValue),
              (e.m_bStateUpdated = !0));
          }, 400);
      }
      return (
        (e.prototype.Init = function() {
          $.render(
            l.createElement(Z, { app: this }),
            document.getElementById("recommender_root")
          ),
            O.RESET_OPTIONS &&
              ((this.m_fPopularityValue = 1 / (O.NUM_POPULARITY_STEPS - 1)),
              (this.m_fRecencyValue = 0),
              (this.m_nTagFilterValue = 0),
              (this.m_nTagExcludeValue = 0),
              (this.m_bExcludeWishlisted = !1),
              (this.m_bStateUpdated = !0));
        }),
        (e.prototype.getDetails = function(t) {
          var e = this;
          return (
            this.m_mapAppDetailsCache.has(t) ||
              this.m_mapAppDetailsCache.set(t, new ae()),
            this.m_mapAppDetailsCache.get(t).getData(
              60,
              function() {
                return _.b(e, void 0, void 0, function() {
                  return _.e(this, function(e) {
                    switch (e.label) {
                      case 0:
                        return [
                          4,
                          d.a.get(
                            O.BASE_URL +
                              "recommender/" +
                              O.STEAM_ID +
                              "/details?appid=" +
                              t +
                              "&sessionid=" +
                              O.SESSION_ID
                          )
                        ];
                      case 1:
                        return [2, e.sent()];
                    }
                  });
                });
              },
              function(e) {
                return e.data;
              }
            )
          );
        }),
        (e.prototype.getResults = function(e, t, a, n) {
          var r = this,
            o = e ? "1" : "0",
            i = t ? "" + t : "0",
            s = a ? "1" : "0",
            c = n ? "" + n : "0",
            l = "",
            u = this.getInputApps();
          if (u) {
            var p = [];
            Object.keys(u).map(function(e) {
              u[e].i && p.push(u[e].a);
            }),
              0 < p.length && (l = "&ignored=" + p.join());
          }
          return this.m_ResultDataCache.getData(
            9999999,
            function() {
              return _.b(r, void 0, void 0, function() {
                return _.e(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return [
                        4,
                        d.a.get(
                          O.BASE_URL +
                            "recommender/" +
                            O.STEAM_ID +
                            "/results?sessionid=" +
                            O.SESSION_ID +
                            "&steamid=" +
                            O.STEAM_ID +
                            "&include_played=" +
                            o +
                            "&algorithm=" +
                            i +
                            "&reinference=" +
                            s +
                            "&model_version=" +
                            c +
                            l
                        )
                      ];
                    case 1:
                      return [2, e.sent()];
                  }
                });
              });
            },
            function(e) {
              return e.data;
            }
          );
        }),
        (e.prototype.areResultsExpired = function() {
          return this.m_ResultDataCache.isExpired();
        }),
        (e.prototype.getRecommendations = function() {
          var e = se.getResults(
            O.INCLUDE_PLAYED,
            O.ALGORITHM,
            O.REINFERENCE,
            O.MODEL_VERSION
          );
          return e ? e.recommendations : void 0;
        }),
        (e.prototype.getInputApps = function() {
          var e = this;
          return this.m_InputAppsCache.getData(
            9999999,
            function() {
              return _.b(e, void 0, void 0, function() {
                return _.e(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return [
                        4,
                        d.a.get(
                          O.BASE_URL +
                            "recommender/" +
                            O.STEAM_ID +
                            "/inputs?sessionid=" +
                            O.SESSION_ID +
                            "&steamid=" +
                            O.STEAM_ID
                        )
                      ];
                    case 1:
                      return [2, e.sent()];
                  }
                });
              });
            },
            function(e) {
              return e.data;
            }
          );
        }),
        (e.prototype.getAppInfo = function() {
          var e = se.getResults(
            O.INCLUDE_PLAYED,
            O.ALGORITHM,
            O.REINFERENCE,
            O.MODEL_VERSION
          );
          return e ? e.app_info : void 0;
        }),
        (e.prototype.getTags = function() {
          var e = se.getResults(
            O.INCLUDE_PLAYED,
            O.ALGORITHM,
            O.REINFERENCE,
            O.MODEL_VERSION
          );
          return e ? e.tags : void 0;
        }),
        (e.prototype.onPopularityChanged = function(e) {
          this.m_fQueuedPopularityValue = Number(e.target.value);
        }),
        (e.prototype.onRecencyChanged = function(e) {
          this.m_fQueuedRecencyValue = Number(e.target.value);
        }),
        (e.prototype.onTagFilterChanged = function(e) {
          (this.m_nTagFilterValue = Number(e.target.value)),
            (this.m_bStateUpdated = !0);
        }),
        (e.prototype.onTagExcludeChanged = function(e) {
          (this.m_nTagExcludeValue = Number(e.target.value)),
            (this.m_bStateUpdated = !0);
        }),
        (e.prototype.onExcludeWishlistedToggled = function(e) {
          (this.m_bExcludeWishlisted = !this.m_bExcludeWishlisted),
            (this.m_bStateUpdated = !0);
        }),
        (e.prototype.onToggleIgnore = function(s) {
          return _.b(this, void 0, void 0, function() {
            var t, a, n, r, o, i;
            return _.e(this, function(e) {
              switch (e.label) {
                case 0:
                  for (
                    t = this.getInputApps(), a = !1, n = 0, r = t;
                    n < r.length;
                    n++
                  )
                    if ((o = r[n]).a == s) {
                      (o.i = !o.i), (a = !o.i);
                      break;
                    }
                  return (
                    O.IMMEDIATE_IGNORE_UPDATE &&
                      this.m_ResultDataCache.expireData(),
                    (this.m_bIgnoredEdited = !0),
                    (i = {
                      sessionid: O.SESSION_ID,
                      appid: s,
                      remove: a ? 1 : 0
                    }),
                    [
                      4,
                      d.a.post(
                        O.BASE_URL + "recommended/ignorerecommendation/",
                        i
                      )
                    ]
                  );
                case 1:
                  return e.sent(), [2];
              }
            });
          });
        }),
        (e.prototype.onUpdateWithIgnored = function() {
          this.m_ResultDataCache.expireData(), (this.m_bIgnoredEdited = !1);
        }),
        (e.prototype.onAppClicked = function(a, n) {
          return _.b(this, void 0, void 0, function() {
            var t;
            return _.e(this, function(e) {
              switch (e.label) {
                case 0:
                  return (
                    (t = {
                      account_id: O.ACCOUNT_ID,
                      session_id: O.SESSION_ID,
                      app_id: a,
                      app_rank: n,
                      action: ee.ClickThrough,
                      algorithm: 1,
                      setting_1: 100 * this.m_fPopularityValue,
                      setting_2: 100 * this.m_fRecencyValue,
                      setting_3: this.m_nTagFilterValue,
                      setting_4: this.m_nTagExcludeValue
                    }),
                    [
                      4,
                      d.a.post(
                        O.BASE_URL + "recommender/" + O.STEAM_ID + "/stats",
                        t
                      )
                    ]
                  );
                case 1:
                  return e.sent(), [2];
              }
            });
          });
        }),
        (e.prototype.onAddToWishlist = function(r, o) {
          return _.b(this, void 0, void 0, function() {
            var t, a, n;
            return _.e(this, function(e) {
              switch (e.label) {
                case 0:
                  return (
                    (se.getAppInfo()[r].w = !0),
                    (t = { sessionid: O.SESSION_ID, appid: r }),
                    [
                      4,
                      d.a.post(
                        O.BASE_URL + "recommender/" + O.STEAM_ID + "/wishlist",
                        t
                      )
                    ]
                  );
                case 1:
                  return (
                    (a = e.sent()),
                    (n = {
                      account_id: O.ACCOUNT_ID,
                      session_id: O.SESSION_ID,
                      app_id: r,
                      app_rank: o,
                      action: ee.AddToWishlist,
                      algorithm: 1,
                      setting_1: 100 * this.m_fPopularityValue,
                      setting_2: 100 * this.m_fRecencyValue,
                      setting_3: this.m_nTagFilterValue,
                      setting_4: this.m_nTagExcludeValue
                    }),
                    [
                      4,
                      d.a.post(
                        O.BASE_URL + "recommender/" + O.STEAM_ID + "/stats",
                        n
                      )
                    ]
                  );
                case 2:
                  return e.sent(), [2, a];
              }
            });
          });
        }),
        (e.prototype.onGoToWishlist = function() {
          window.location.href =
            O.COMMUNITY_BASE_URL + "profiles/" + O.STEAM_ID + "/wishlist";
        }),
        (e.prototype.onAddToCart = function(n, r) {
          return _.b(this, void 0, void 0, function() {
            var t, a;
            return _.e(this, function(e) {
              switch (e.label) {
                case 0:
                  return (
                    (t = { sessionid: O.SESSION_ID, appid: n }),
                    [
                      4,
                      d.a.post(
                        O.BASE_URL + "recommender/" + O.STEAM_ID + "/cart",
                        t
                      )
                    ]
                  );
                case 1:
                  return (
                    e.sent(),
                    (a = {
                      account_id: O.ACCOUNT_ID,
                      session_id: O.SESSION_ID,
                      app_id: n,
                      app_rank: r,
                      action: ee.AddToCart,
                      algorithm: 1,
                      setting_1: 100 * this.m_fPopularityValue,
                      setting_2: 100 * this.m_fRecencyValue,
                      setting_3: this.m_nTagFilterValue,
                      setting_4: this.m_nTagExcludeValue
                    }),
                    [
                      4,
                      d.a.post(
                        O.BASE_URL + "recommender/" + O.STEAM_ID + "/stats",
                        a
                      )
                    ]
                  );
                case 2:
                  return (
                    e.sent(),
                    (window.location.href = O.STORE_BASE_URL + "cart"),
                    [2]
                  );
              }
            });
          });
        }),
        (e.prototype.onMuteClicked = function() {
          this.m_bShouldMute = !0;
        }),
        (e.prototype.onUnMuteClicked = function() {
          this.m_bShouldMute = !1;
        }),
        (e.prototype.shouldMute = function() {
          return this.m_bShouldMute;
        }),
        _.c([K.v], e.prototype, "m_fPopularityValue", void 0),
        _.c([K.v], e.prototype, "m_fRecencyValue", void 0),
        _.c([K.v], e.prototype, "m_nTagFilterValue", void 0),
        _.c([K.v], e.prototype, "m_nTagExcludeValue", void 0),
        _.c([K.v], e.prototype, "m_fQueuedPopularityValue", void 0),
        _.c([K.v], e.prototype, "m_fQueuedRecencyValue", void 0),
        _.c([K.v], e.prototype, "m_bExcludeWishlisted", void 0),
        _.c([K.v], e.prototype, "m_bShouldMute", void 0),
        _.c([K.v], e.prototype, "m_bIgnoredEdited", void 0),
        _.c([i], e.prototype, "onPopularityChanged", null),
        _.c([i], e.prototype, "onRecencyChanged", null),
        _.c([i], e.prototype, "onTagFilterChanged", null),
        _.c([i], e.prototype, "onTagExcludeChanged", null),
        _.c([i], e.prototype, "onExcludeWishlistedToggled", null),
        _.c([i], e.prototype, "onToggleIgnore", null),
        _.c([i], e.prototype, "onUpdateWithIgnored", null),
        _.c([i], e.prototype, "onAppClicked", null),
        _.c([i], e.prototype, "onAddToWishlist", null),
        _.c([i], e.prototype, "onGoToWishlist", null),
        _.c([i], e.prototype, "onAddToCart", null),
        _.c([i], e.prototype, "onMuteClicked", null),
        _.c([i], e.prototype, "onUnMuteClicked", null),
        _.c([i], e.prototype, "shouldMute", null),
        e
      );
    })();
    a.d(t, "g_App", function() {
      return se;
    });
    var re,
      oe,
      ie,
      se = new ne();
    document.addEventListener("DOMContentLoaded", function() {
      u(), se.Init();
    }),
      (window.LocalizationReady = function(e, t, a) {
        if ("english" !== t) "main" == e ? (re = a) : "shared" == e && (oe = a);
        else if ("shared" == e) ie = a;
        else {
          var n = void 0,
            r = null,
            o = void 0,
            i = null;
          void 0 !== re ? ((n = re), (r = a)) : (n = a),
            void 0 !== oe ? ((o = oe), (i = ie)) : (o = ie),
            C.InitFromObjects(n, r, o, i),
            (ie = oe = re = void 0);
        }
      });
  }
});

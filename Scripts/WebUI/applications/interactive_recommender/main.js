/*! This file includes third-party software, governed by the licenses described here: https://store.steampowered.com/public/javascript/applications/interactive_recommender/main.licenses.txt */

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
!(function(c) {
  function e(e) {
    for (
      var t, a, r = e[0], n = e[1], o = e[2], i = 0, s = [];
      i < r.length;
      i++
    )
      (a = r[i]), u[a] && s.push(u[a][0]), (u[a] = 0);
    for (t in n) Object.prototype.hasOwnProperty.call(n, t) && (c[t] = n[t]);
    for (_ && _(e); s.length; ) s.shift()();
    return p.push.apply(p, o || []), l();
  }
  function l() {
    for (var e, t = 0; t < p.length; t++) {
      for (var a = p[t], r = !0, n = 1; n < a.length; n++) {
        var o = a[n];
        0 !== u[o] && (r = !1);
      }
      r && (p.splice(t--, 1), (e = i((i.s = a[0]))));
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
        for (var r in t)
          i.d(
            a,
            r,
            function(e) {
              return t[e];
            }.bind(null, r)
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
    r = t.push.bind(t);
  (t.push = e), (t = t.slice());
  for (var n = 0; n < t.length; n++) e(t[n]);
  var _ = r;
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
      Logo: "app_Logo_3yA86",
      PlaytimeInfo: "app_PlaytimeInfo_26XnS",
      HoursPlayed: "app_HoursPlayed_YzQV_",
      LastPlayed: "app_LastPlayed_1kbFb",
      RecommendationList: "app_RecommendationList_2UkLX",
      List: "app_List_115iv",
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
    var l = a("mrSG"),
      r = a("vDqi"),
      u = a.n(r),
      p = a("q1tI"),
      M = a.n(p),
      n = a("okNM"),
      o = a("6TF7"),
      I = a.n(o);
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
        SESSION_ID: 0,
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
        MODEL_VERSION: 0
      },
      c = "application_config";
    function _() {
      var e = (function(e, t) {
        void 0 === t && (t = c);
        var a = document.getElementById(t);
        if (a)
          try {
            var r = JSON.parse(a.getAttribute("data-" + e) || "");
            return r;
          } catch (e) {
            console.error("Failed to parse config", e);
          }
        else console.error("Missing config element #" + t);
        return;
      })("config");
      e && Object.assign(O, e);
    }
    a("Gp1o");
    var d = {
      PerYear: 31536e3,
      PerMonth: 2628e3,
      PerWeek: 604800,
      PerDay: 86400,
      PerHour: 3600,
      PerMinute: 60
    };
    var h, m, E, v;
    function g(e, t) {
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
      if (!S() || !window.document.cookie) return null;
      var t = document.cookie.match("(^|; )" + e + "=([^;]*)");
      return t && t[2] ? decodeURIComponent(t[2]) : null;
    }
    function f(e, t, a, r) {
      if (S()) {
        r || (r = "/");
        var n = "";
        if (void 0 !== a && a) {
          var o = new Date();
          o.setTime(o.getTime() + 864e5 * a),
            (n = "; expires=" + o.toUTCString());
        }
        document.cookie =
          encodeURIComponent(e) +
          "=" +
          encodeURIComponent(t) +
          n +
          ";path=" +
          r;
      }
    }
    function S() {
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
      ((v = E || (E = {}))[(v.k_ELaunchSource_None = 0)] =
        "k_ELaunchSource_None"),
      (v[(v.k_ELaunchSource_2ftLibraryDetails = 100)] =
        "k_ELaunchSource_2ftLibraryDetails"),
      (v[(v.k_ELaunchSource_2ftLibraryListView = 101)] =
        "k_ELaunchSource_2ftLibraryListView"),
      (v[(v.k_ELaunchSource_2ftLibraryGrid = 103)] =
        "k_ELaunchSource_2ftLibraryGrid"),
      (v[(v.k_ELaunchSource_InstallSubComplete = 104)] =
        "k_ELaunchSource_InstallSubComplete"),
      (v[(v.k_ELaunchSource_DownloadsPage = 105)] =
        "k_ELaunchSource_DownloadsPage"),
      (v[(v.k_ELaunchSource_RemoteClientStartStreaming = 106)] =
        "k_ELaunchSource_RemoteClientStartStreaming"),
      (v[(v.k_ELaunchSource_2ftMiniModeList = 107)] =
        "k_ELaunchSource_2ftMiniModeList"),
      (v[(v.k_ELaunchSource_10ft = 200)] = "k_ELaunchSource_10ft"),
      (v[(v.k_ELaunchSource_DashAppLaunchCmdLine = 300)] =
        "k_ELaunchSource_DashAppLaunchCmdLine"),
      (v[(v.k_ELaunchSource_DashGameIdLaunchCmdLine = 301)] =
        "k_ELaunchSource_DashGameIdLaunchCmdLine"),
      (v[(v.k_ELaunchSource_RunByGameDir = 302)] =
        "k_ELaunchSource_RunByGameDir"),
      (v[(v.k_ELaunchSource_SubCmdRunDashGame = 303)] =
        "k_ELaunchSource_SubCmdRunDashGame"),
      (v[(v.k_ELaunchSource_SteamURL_Launch = 400)] =
        "k_ELaunchSource_SteamURL_Launch"),
      (v[(v.k_ELaunchSource_SteamURL_Run = 401)] =
        "k_ELaunchSource_SteamURL_Run"),
      (v[(v.k_ELaunchSource_SteamURL_JoinLobby = 402)] =
        "k_ELaunchSource_SteamURL_JoinLobby"),
      (v[(v.k_ELaunchSource_SteamURL_RunGame = 403)] =
        "k_ELaunchSource_SteamURL_RunGame"),
      (v[(v.k_ELaunchSource_SteamURL_RunGameIdOrJumplist = 404)] =
        "k_ELaunchSource_SteamURL_RunGameIdOrJumplist"),
      (v[(v.k_ELaunchSource_SteamURL_RunSafe = 405)] =
        "k_ELaunchSource_SteamURL_RunSafe"),
      (v[(v.k_ELaunchSource_TrayIcon = 500)] = "k_ELaunchSource_TrayIcon"),
      (v[(v.k_ELaunchSource_LibraryLeftColumnContextMenu = 600)] =
        "k_ELaunchSource_LibraryLeftColumnContextMenu"),
      (v[(v.k_ELaunchSource_LibraryLeftColumnDoubleClick = 601)] =
        "k_ELaunchSource_LibraryLeftColumnDoubleClick"),
      (v[(v.k_ELaunchSource_Dota2Launcher = 700)] =
        "k_ELaunchSource_Dota2Launcher"),
      (v[(v.k_ELaunchSource_IRunGameEngine = 800)] =
        "k_ELaunchSource_IRunGameEngine"),
      (v[(v.k_ELaunchSource_DRMFailureResponse = 801)] =
        "k_ELaunchSource_DRMFailureResponse"),
      (v[(v.k_ELaunchSource_DRMDataRequest = 802)] =
        "k_ELaunchSource_DRMDataRequest"),
      (v[(v.k_ELaunchSource_CloudFilePanel = 803)] =
        "k_ELaunchSource_CloudFilePanel"),
      (v[(v.k_ELaunchSource_DiscoveredAlreadyRunning = 804)] =
        "k_ELaunchSource_DiscoveredAlreadyRunning"),
      (v[(v.k_ELaunchSource_GameActionJoinParty = 900)] =
        "k_ELaunchSource_GameActionJoinParty");
    var y,
      L = {
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
        IN_CLIENT: !(v[(v.k_ELaunchSource_AppPortraitContextMenu = 1e3)] =
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
            if (!S()) return y || (y = k()), y;
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
        for (var e, t, a = "", r = 0; r < 24; r++)
          a += ((e = 0),
          (t = 35),
          (e = Math.ceil(e)),
          (t = Math.floor(t)),
          Math.floor(Math.random() * (t - e + 1)) + e).toString(36);
        return a;
      })();
      return f("sessionid", e, 0), e;
    }
    var T = (function() {
      function e() {
        (this.m_mapTokens = new Map()), (this.m_mapFallbackTokens = new Map());
      }
      return (
        (e.prototype.InitFromObjects = function(a, r, n, o) {
          var i = this;
          this.m_mapTokens.clear(),
            Object.keys(n).forEach(function(e, t) {
              i.m_mapTokens.set(e, n[e]);
            }),
            Object.keys(a).forEach(function(e, t) {
              i.m_mapTokens.set(e, a[e]);
            }),
            r &&
              Object.keys(r).forEach(function(e, t) {
                i.m_mapTokens.has(e) || i.m_mapTokens.set(e, r[e]),
                  i.m_mapFallbackTokens.set(e, r[e]);
              }),
            o &&
              Object.keys(o).forEach(function(e, t) {
                i.m_mapTokens.has(e) || i.m_mapTokens.set(e, o[e]),
                  i.m_mapFallbackTokens.has(e) ||
                    i.m_mapFallbackTokens.set(e, o[e]);
              });
        }),
        (e.prototype.InitDirect = function(a, r) {
          var n = this;
          this.m_mapTokens.clear(),
            this.m_mapFallbackTokens.clear(),
            Object.keys(a).forEach(function(e, t) {
              n.m_mapTokens.set(e, a[e]);
            }),
            r &&
              Object.keys(r).forEach(function(e, t) {
                n.m_mapTokens.has(e) || n.m_mapTokens.set(e, r[e]),
                  n.m_mapFallbackTokens.set(e, r[e]);
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
            t.push(g(L.LANGUAGE)),
            (L.SUPPORTED_LANGUAGES || []).forEach(function(e) {
              e.value != L.LANGUAGE && t.push(g(e.value));
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
    function w(e) {
      for (var r = [], t = 1; t < arguments.length; t++)
        r[t - 1] = arguments[t];
      var a = C.LocalizeString(e);
      return a
        ? (0 < r.length &&
            (a = a.replace(/%(\d+)\$s/g, function(e, t) {
              if (t <= r.length && 1 <= t) {
                var a = r[t - 1];
                return String(null == a ? "" : a);
              }
              return e;
            })),
          a)
        : e;
    }
    function U(e) {
      var t = new Date(1e3 * e),
        a = t.setHours(0, 0, 0, 0),
        r = R.get(a);
      if (r) return r;
      return (
        (r = t.toLocaleDateString(C.GetPreferredLocales(), {
          year: "numeric",
          month: "short",
          day: "numeric"
        })),
        R.set(a, r),
        r
      );
    }
    var R = new Map();
    new Map();
    new Map(), new Map(), new Map(), new Map();
    var C = new T();
    window.LocalizationManager = C;
    a("2i24");
    function B(e) {
      return p.createElement(
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
        p.createElement(
          "g",
          { className: "Speaker" },
          p.createElement("path", {
            d:
              "M93.785,52.265c-0.946,0-2.357,0.63-3.304,1.577L40.284,98.022c-0.947,0.789-2.831,1.578-4.093,1.578H9.367 C8.104,99.6,7,100.706,7,101.967v52.069c0,1.264,1.104,2.367,2.367,2.367H36.19c1.262,0,3.146,0.632,4.093,1.578l50.197,44.181 c0.947,0.789,2.516,1.578,3.304,1.578s1.578-1.104,1.578-2.367V54.631C95.363,53.369,94.731,52.265,93.785,52.265z"
          })
        ),
        !e.muted &&
          p.createElement(
            "g",
            { className: "SoundWaves" },
            p.createElement("path", {
              className: "SoundWavesHighest",
              d:
                "M193.826,30.402c24.959,24.958,40.349,59.403,40.349,97.604c0,38.199-15.388,72.645-40.349,97.603l9.916,9.916 c28.067-28.067,44.263-64.673,44.263-107.521c0-42.847-16.196-79.455-44.263-107.521"
            }),
            p.createElement("path", {
              className: "SoundWavesHigh",
              d:
                "M175.737,47.628l-8.924,8.924c18.271,18.27,29.536,43.484,29.536,71.448s-11.264,53.178-29.536,71.448l8.924,8.924 c20.546-20.546,33.234-49.008,33.234-80.374c0-31.366-12.688-59.829-33.234-80.374V47.628z"
            }),
            p.createElement("path", {
              className: "SoundWavesMed",
              d:
                "M148.913,74.454l-8.925,8.925c11.488,11.488,18.491,27.236,18.491,44.624c0,17.388-7.054,33.281-18.491,44.575l8.875,8.975 c13.811-13.635,22.239-32.753,22.239-53.55c0-20.797-8.432-39.793-22.189-53.55V74.454z"
            }),
            p.createElement("path", {
              className: "SoundWavesLow",
              d:
                "M121.989,101.229l-8.778,9.073c4.641,4.516,7.397,10.706,7.397,17.702c0,6.995-2.755,13.186-7.397,17.702l8.778,9.073 c7.035-6.844,11.243-16.413,11.243-26.775C133.232,117.643,129.024,108.075,121.989,101.229z"
            })
          ),
        p.createElement(
          "g",
          { className: "SoundX" },
          p.createElement("line", {
            fill: "none",
            strokeWidth: e.muted ? 10 : 0,
            stroke: "#fff",
            strokeMiterlimit: "10",
            x1: "137",
            y1: "170.667",
            x2: "223.167",
            y2: "84.5"
          }),
          p.createElement("line", {
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
    var N,
      P,
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
              var r = b("app_impressions") || "";
              0 < r.length && (r += "|"),
                f("app_impressions", (r += e + "@" + t));
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
          l.d(t, e),
          (t.prototype.onVisibilityChanged = function(e) {
            e && A.AddImpression(this.props.appID, this.props.snr);
          }),
          (t.prototype.render = function() {
            return M.a.createElement(
              G.a,
              { onChange: this.onVisibilityChanged },
              this.props.children
            );
          }),
          l.c([i], t.prototype, "onVisibilityChanged", null),
          t
        );
      })(M.a.Component),
      F = function(e) {
        e.accountID;
        var t = ie.getInputApps(),
          a = Object.keys(t).length,
          r = 0;
        Object.keys(t).map(function(e) {
          r += t[e].p;
        });
        var n =
          a == O.MAX_PLAYED_GAMES
            ? "#PlaytimeList_TopGames"
            : "#PlaytimeList_Games";
        return M.a.createElement(
          "div",
          { className: I.a.IdentityBlock },
          M.a.createElement("img", {
            className: I.a.Avatar,
            src: O.AVATAR_URL
          }),
          M.a.createElement(
            "div",
            { className: I.a.PersonalInfo },
            M.a.createElement(
              "div",
              { className: I.a.Persona },
              O.PERSONA_NAME
            ),
            M.a.createElement("div", { className: I.a.GameCount }, w(n, a)),
            M.a.createElement(
              "div",
              { className: I.a.TotalTime },
              w("#PlaytimeList_HoursTotal", r)
            )
          )
        );
      },
      W = function(e) {
        var t = e.appID,
          a = e.hours,
          r = e.lastPlayed,
          n = O.CDN_URL + "apps/" + t + "/header.jpg",
          o = Date.now() / 1e3 - r,
          i = "";
        return (
          (i =
            r <= 86400
              ? w("#PlaytimeList_LastPlayedMax")
              : w(
                  "#PlaytimeList_LastPlayed",
                  31449600 < o
                    ? U(r)
                    : (function(e, t) {
                        void 0 === t && (t = !1);
                        var a = t ? "#TimeInterval_" : "#TimeSince_";
                        return e >= 2 * d.PerYear
                          ? w(a + "XYears", Math.floor(e / d.PerYear))
                          : e >= d.PerYear
                          ? (e -= d.PerYear) >= 2 * d.PerMonth
                            ? w(a + "1YearXMonths", Math.floor(e / d.PerMonth))
                            : w(a + "1Year")
                          : e >= 2 * d.PerMonth
                          ? w(a + "XMonths", Math.floor(e / d.PerMonth))
                          : e >= 2 * d.PerWeek
                          ? w(a + "XWeeks", Math.floor(e / d.PerWeek))
                          : e >= d.PerWeek
                          ? w(a + "1Week", Math.floor(e / d.PerWeek))
                          : e >= 2 * d.PerDay
                          ? w(a + "XDays", Math.floor(e / d.PerDay))
                          : e >= d.PerDay
                          ? (e -= d.PerDay) >= 2 * d.PerHour
                            ? w(a + "1DayXHours", Math.floor(e / d.PerHour))
                            : w(a + "1Day")
                          : e >= 2 * d.PerHour
                          ? w(a + "XHours", Math.floor(e / d.PerHour))
                          : e >= d.PerHour
                          ? (e -= d.PerHour) >= 2 * d.PerMinute
                            ? w(
                                a + "1HourXMinutes",
                                Math.floor(e / d.PerMinute)
                              )
                            : w(a + "1Hour")
                          : e >= 2 * d.PerMinute
                          ? w(a + "XMinutes", Math.floor(e / d.PerMinute))
                          : e >= d.PerMinute
                          ? w(a + "1Minute")
                          : w(a + "LessThanAMinute");
                      })(o)
                )),
          M.a.createElement(
            "div",
            { className: I.a.PlayedGame },
            M.a.createElement("img", { className: I.a.Logo, src: n }),
            M.a.createElement(
              "div",
              { className: I.a.PlaytimeInfo },
              M.a.createElement(
                "div",
                { className: I.a.HoursPlayed },
                w("#PlaytimeList_Hours", a)
              ),
              M.a.createElement("div", { className: I.a.LastPlayed }, i)
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
          l.d(e, a),
          (e.prototype.render = function() {
            var a = ie.getInputApps(),
              r = [];
            return a
              ? (Object.keys(a).map(function(e) {
                  var t = a[e];
                  r.push(
                    M.a.createElement(W, {
                      key: "PlayedGame_" + t.a,
                      appID: t.a,
                      hours: t.p,
                      lastPlayed: t.l
                    })
                  );
                }),
                M.a.createElement(
                  "div",
                  { className: I.a.PlaytimeList },
                  M.a.createElement(
                    "div",
                    { className: I.a.Header },
                    w("#PlaytimeList_Header")
                  ),
                  M.a.createElement(F, { accountID: this.props.accountID }),
                  M.a.createElement("div", { className: I.a.List }, r)
                ))
              : M.a.createElement(
                  "div",
                  { className: I.a.PlaytimeList },
                  M.a.createElement(
                    "div",
                    { className: I.a.Header },
                    w("#PlaytimeList_Header")
                  ),
                  M.a.createElement("div", { className: I.a.Loading })
                );
          }),
          (e = l.c([n.a], e))
        );
      })(M.a.Component),
      Y = function(e) {
        var t = e.titleLabel,
          a = e.minLabel,
          r = e.maxLabel,
          n = e.minValue,
          o = e.maxValue,
          i = e.value,
          s = e.onChange,
          c = e.sliderLabels,
          l = c ? Math.round((c.length - 1) * ((i - n) / (o - n))) : void 0,
          u = c ? c[l] : "";
        return M.a.createElement(
          "div",
          { className: I.a.OptionSlider },
          M.a.createElement("div", { className: I.a.Title }, t),
          M.a.createElement(
            "div",
            { className: I.a.Labels },
            M.a.createElement("div", { className: I.a.Min }, a),
            M.a.createElement("div", { className: I.a.Max }, r)
          ),
          M.a.createElement("input", {
            type: "range",
            min: n,
            max: o,
            step: (o - n) / 100,
            value: i,
            onChange: s
          }),
          M.a.createElement("div", { className: I.a.OptionalLabel }, u)
        );
      },
      j = function(e) {
        var t = e.titleLabel,
          a = e.checked,
          r = e.onChange;
        return M.a.createElement(
          "label",
          { className: I.a.OptionCheckbox },
          M.a.createElement("input", {
            type: "checkbox",
            className: I.a.Checkbox,
            checked: a,
            onChange: r
          }),
          t
        );
      },
      Q = function(e) {
        for (
          var t = e.title,
            a = e.options,
            r = e.value,
            n = e.onChange,
            o = [],
            i = 0,
            s = a;
          i < s.length;
          i++
        ) {
          var c = s[i];
          o.push(
            M.a.createElement(
              "option",
              { key: c.value, value: c.value },
              c.display
            )
          );
        }
        return M.a.createElement(
          "div",
          { className: I.a.OptionDropdown },
          M.a.createElement("div", { className: I.a.Label }, t),
          M.a.createElement(
            "select",
            { value: r, onChange: n, className: I.a.SelectionBox },
            o
          )
        );
      },
      X = Object(n.a)(function(e) {
        var t = ie.getTags(),
          a = [];
        t &&
          (a.push({ value: 0, display: w("#NoFilter") }),
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
        var r = [
          w("#FilterAge_120"),
          w("#FilterAge_60"),
          w("#FilterAge_36"),
          w("#FilterAge_24"),
          w("#FilterAge_12"),
          w("#FilterAge_6")
        ];
        return M.a.createElement(
          "div",
          { className: I.a.RecommendationOptions },
          M.a.createElement(
            "div",
            { className: D(I.a.Row, I.a.FirstRow) },
            M.a.createElement(Y, {
              minLabel: w("#Popularity_Popular"),
              titleLabel: w("#Popularity_Title"),
              maxLabel: w("#Popularity_Niche"),
              minValue: 0,
              maxValue: 1,
              value: ie.m_fQueuedPopularityValue,
              onChange: ie.onPopularityChanged
            }),
            M.a.createElement(Y, {
              minLabel: w("#Recency_Older"),
              titleLabel: w("#Recency_Title"),
              maxLabel: w("#Recency_Newer"),
              minValue: 0,
              maxValue: 1,
              value: ie.m_fQueuedRecencyValue,
              onChange: ie.onRecencyChanged,
              sliderLabels: r
            })
          ),
          M.a.createElement(
            "div",
            { className: D(I.a.Row, I.a.SecondRow) },
            M.a.createElement(Q, {
              title: w("#TagFilter_Title"),
              options: a,
              value: ie.m_nTagFilterValue,
              onChange: ie.onTagFilterChanged
            }),
            M.a.createElement(Q, {
              title: w("#TagExclude_Title"),
              options: a,
              value: ie.m_nTagExcludeValue,
              onChange: ie.onTagExcludeChanged
            }),
            M.a.createElement(j, {
              titleLabel: w("#ExcludeWishlisted"),
              checked: ie.m_bExcludeWishlisted,
              onChange: ie.onExcludeWishlistedToggled
            })
          )
        );
      }),
      q = (function(a) {
        function e(e) {
          var t = a.call(this, e) || this;
          return (
            (t.m_videoRef = M.a.createRef()),
            (t.state = { hovered: !1, wishlisted: ie.getAppInfo()[e.appID].w }),
            t
          );
        }
        return (
          l.d(e, a),
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
            ie.shouldMute()
              ? (ie.onUnMuteClicked(),
                this.m_videoRef &&
                  this.m_videoRef.current &&
                  (this.m_videoRef.current.muted = !1))
              : (ie.onMuteClicked(),
                this.m_videoRef &&
                  this.m_videoRef.current &&
                  (this.m_videoRef.current.muted = !0)),
              e.preventDefault(),
              e.stopPropagation();
          }),
          (e.prototype.onAddToWishlist = function(e) {
            ie.onAddToWishlist(this.props.appID, this.props.rank),
              this.setState({ wishlisted: !0 }),
              e.preventDefault(),
              e.stopPropagation();
          }),
          (e.prototype.onGoToWishlist = function(e) {
            ie.onGoToWishlist(), e.preventDefault(), e.stopPropagation();
          }),
          (e.prototype.onAddToCart = function(e) {
            ie.onAddToCart(this.props.appID, this.props.rank),
              e.preventDefault(),
              e.stopPropagation();
          }),
          (e.prototype.render = function() {
            var t = this,
              e = this.props,
              a = e.appID,
              r = e.score,
              n = e.rank,
              o = e.width,
              i =
                "https://steamcdn-a.akamaihd.net/steam/apps/" +
                a +
                "/header.jpg",
              s = ie.getAppInfo()[a];
            if (!s) return M.a.createElement("div", null);
            var c = s.n,
              l = 0 < s.r ? w("#Recommendation_ReleasedOn", U(s.r)) : "",
              u = [];
            if (s.t)
              for (var p = 0, _ = 0, d = s.t; _ < d.length; _++) {
                var h = d[_];
                if (
                  (u.push(
                    M.a.createElement(
                      "div",
                      { key: a + "_" + h, className: I.a.Tag },
                      ie.getTags()[h]
                    )
                  ),
                  5 == ++p)
                )
                  break;
              }
            var m = parseInt(I.a.nSmallEntryWidth),
              E = parseInt(I.a.nOptionsWrapWidth),
              v = 112,
              g = !0;
            o < m ? (g = !(v = 66)) : o < E && (g = !(v = 87));
            var b = g && this.state.hovered,
              f = Math.min(Number(r) / 10, 1e3),
              S = (Math.max(1, r), !1),
              y = !1,
              L = !0,
              k = "",
              T = "",
              R = "",
              C = "",
              N = "";
            if (b) {
              var P = ie.getDetails(this.props.appID);
              P &&
                ((S = !0),
                (y = 0 < P.discount_pct),
                (L = "0" == P.discount_price),
                (N =
                  "probably" ==
                  document
                    .createElement("video")
                    .canPlayType('video/webm; codecs="vp8, vorbis"')
                    ? P.video_webm
                    : P.video_mp4),
                (k = "-" + P.discount_pct + "%"),
                (T = P.base_price),
                (R = L ? w("#FreeToPlay") : P.discount_price),
                (C = P.description));
            }
            var A = N && 0 < N.length;
            return M.a.createElement(
              V,
              { appID: a, snr: O.LINK_PARAM },
              M.a.createElement(
                "a",
                {
                  href: O.BASE_URL + "app/" + a + "?snr=" + O.LINK_PARAM,
                  onClick: function() {
                    return ie.onAppClicked(a, n);
                  },
                  className: D(
                    I.a.RecommendationEntry,
                    "ds_flagged",
                    "ds_wishlist",
                    30 < n && I.a.Hidden,
                    b && I.a.Hovered
                  ),
                  style: { top: Math.min(31, n) * v },
                  onMouseEnter: this.OnHover,
                  onMouseLeave: this.OnUnHover
                },
                M.a.createElement(
                  "div",
                  { className: I.a.TopEntrySection },
                  M.a.createElement(
                    "div",
                    { className: I.a.LeftSection },
                    M.a.createElement("img", {
                      className: D(I.a.Logo, (!A || !b) && I.a.Revealed),
                      src: i
                    }),
                    M.a.createElement("video", {
                      ref: this.m_videoRef,
                      className: D(
                        "highlight_player_item",
                        "highlight_movie",
                        I.a.Video,
                        A && b && I.a.Revealed
                      ),
                      playsInline: !0,
                      autoPlay: !0,
                      muted: ie.shouldMute(),
                      src: N
                    }),
                    M.a.createElement(
                      "div",
                      {
                        className: D(I.a.UnMute, A && I.a.Revealed),
                        onClick: function(e) {
                          return t.onMuteToggle(e);
                        }
                      },
                      M.a.createElement(B, { muted: ie.shouldMute() })
                    ),
                    this.state.wishlisted &&
                      M.a.createElement(
                        "div",
                        {
                          className: D(
                            "ds_flag",
                            "ds_wishlist_flag",
                            I.a.WishlistFlag
                          )
                        },
                        w("#Recommendation_OnWishlist") + "  "
                      )
                  ),
                  M.a.createElement(
                    "div",
                    { className: I.a.RightSection },
                    M.a.createElement("div", { className: I.a.Name }, c),
                    M.a.createElement(
                      "div",
                      { className: I.a.CenterSection },
                      M.a.createElement(
                        "div",
                        {
                          className: D(
                            I.a.CenterOption,
                            I.a.CenterDefault,
                            b && I.a.Hidden
                          )
                        },
                        M.a.createElement(
                          "div",
                          { className: I.a.Released },
                          l
                        ),
                        M.a.createElement(
                          "div",
                          { className: I.a.BarContainer },
                          M.a.createElement("div", {
                            className: I.a.Bar,
                            style: { width: f + "%" }
                          })
                        ),
                        M.a.createElement("div", { className: I.a.Tags }, u)
                      ),
                      M.a.createElement(
                        "div",
                        {
                          className: D(
                            I.a.CenterOption,
                            I.a.CenterHovered,
                            !b && I.a.Hidden
                          )
                        },
                        C
                      )
                    ),
                    S &&
                      M.a.createElement(
                        "div",
                        { className: I.a.BottomEntrySection },
                        M.a.createElement(
                          "div",
                          {
                            className: D(
                              "game_purchase_action",
                              I.a.PurchaseSection
                            )
                          },
                          M.a.createElement(
                            "div",
                            {
                              className: D(
                                "game_purchase_action_bg",
                                I.a.PurchaseBG
                              )
                            },
                            y &&
                              M.a.createElement(
                                "div",
                                {
                                  className:
                                    "discount_block game_purchase_discount"
                                },
                                M.a.createElement(
                                  "div",
                                  { className: "discount_pct" },
                                  k
                                ),
                                M.a.createElement(
                                  "div",
                                  { className: "discount_prices" },
                                  M.a.createElement(
                                    "div",
                                    { className: "discount_original_price" },
                                    T
                                  ),
                                  M.a.createElement(
                                    "div",
                                    { className: "discount_final_price" },
                                    R
                                  )
                                )
                              ),
                            !y &&
                              M.a.createElement(
                                "div",
                                { className: "game_purchase_price price" },
                                R
                              ),
                            !L &&
                              M.a.createElement(
                                "div",
                                {
                                  className: "btn_addtocart",
                                  onClick: function(e) {
                                    return t.onAddToCart(e);
                                  }
                                },
                                M.a.createElement(
                                  "span",
                                  {
                                    className:
                                      "btnv6_green_white_innerfade btn_medium"
                                  },
                                  M.a.createElement(
                                    "span",
                                    null,
                                    w("#btn_add_to_cart")
                                  )
                                )
                              )
                          )
                        ),
                        !this.state.wishlisted &&
                          !L &&
                          M.a.createElement(
                            "div",
                            {
                              id: "add_to_wishlist_area",
                              className: I.a.WishlistSection,
                              onClick: function(e) {
                                return t.onAddToWishlist(e);
                              }
                            },
                            M.a.createElement(
                              "div",
                              { className: "btnv6_blue_hoverfade btn_medium" },
                              M.a.createElement(
                                "span",
                                null,
                                w("#wishlist_add_to_wishlist")
                              )
                            )
                          ),
                        this.state.wishlisted &&
                          !L &&
                          M.a.createElement(
                            "div",
                            {
                              className: D(
                                "btnv6_blue_hoverfade btn_medium",
                                "queue_btn_active",
                                I.a.Wishlisted,
                                I.a.WishlistSection
                              ),
                              "data-tooltip-text": w("#OnWishlistTooltip"),
                              onClick: function(e) {
                                return t.onGoToWishlist(e);
                              }
                            },
                            M.a.createElement(
                              "span",
                              null,
                              M.a.createElement("img", {
                                src: O.IMG_URL_BASE + "/v6/ico/ico_selected.png"
                              }),
                              "  " + w("#OnWishlist")
                            )
                          )
                      )
                  )
                )
              )
            );
          }),
          l.c([i], e.prototype, "OnHover", null),
          l.c([i], e.prototype, "OnUnHover", null),
          l.c([i], e.prototype, "onMuteToggle", null),
          l.c([i], e.prototype, "onAddToWishlist", null),
          l.c([i], e.prototype, "onGoToWishlist", null),
          l.c([i], e.prototype, "onAddToCart", null),
          (e = l.c([n.a], e))
        );
      })(M.a.Component),
      z = (function(a) {
        function e(e) {
          var t = a.call(this, e) || this;
          return (t.state = { sortedRecommendedApps: [] }), t;
        }
        return (
          l.d(e, a),
          (e.prototype.render = function() {
            var e = ie.m_fRecencyValue * (O.NUM_RECENCY_STEPS - 1 - 0.001),
              t = Math.floor(e),
              a = t + 1,
              r = 1 - (e - t),
              n = 1 - r,
              o = ie.m_fPopularityValue * (O.NUM_POPULARITY_STEPS - 1 - 0.001),
              i = Math.floor(o),
              s = i + 1,
              c = 1 - (o - i),
              l = 1 - c,
              u = [];
            u.push({ index: i * O.NUM_RECENCY_STEPS + t, weight: c * r }),
              u.push({ index: s * O.NUM_RECENCY_STEPS + t, weight: l * r }),
              u.push({ index: i * O.NUM_RECENCY_STEPS + a, weight: c * n }),
              u.push({ index: s * O.NUM_RECENCY_STEPS + a, weight: l * n });
            var p = new Map(),
              _ = 0,
              d = ie.getRecommendations(),
              h = ie.getAppInfo(),
              m = [];
            if (d) {
              for (var E = 0, v = u; E < v.length; E++) {
                var g = v[E],
                  b = d[g.index];
                if (((_ = Math.max(_, b.score_scale)), b))
                  for (var f = 0; f < b.app_ids.length; f++) {
                    var S = b.app_ids[f];
                    if (
                      !(
                        !h[S] ||
                        h[S].o ||
                        h[S].i ||
                        h[S].ti ||
                        (h[S].w && ie.m_bExcludeWishlisted)
                      )
                    ) {
                      var y =
                        (p.get(S) || 0) +
                        b.scores[f] * g.weight * b.score_scale;
                      p.set(S, y);
                    }
                  }
              }
              p.forEach(function(e, t) {
                return p.set(t, e / _);
              });
              var L = [];
              p.forEach(function(e, t) {
                return L.push({ appid: t, score: e });
              }),
                0 != ie.m_nTagFilterValue &&
                  (L = L.filter(function(e) {
                    return (
                      h[e.appid].t &&
                      -1 != h[e.appid].t.indexOf(ie.m_nTagFilterValue)
                    );
                  })),
                0 != ie.m_nTagExcludeValue &&
                  (L = L.filter(function(e) {
                    return (
                      h[e.appid].t &&
                      -1 == h[e.appid].t.indexOf(ie.m_nTagExcludeValue)
                    );
                  }));
              for (
                var k = (L = L.filter(function(e) {
                    return 0 < e.score;
                  })).sort(function(e, t) {
                    return t.score - e.score;
                  }),
                  T = 0,
                  R = 0,
                  C = (k = k.slice(0, 30));
                R < C.length;
                R++
              ) {
                (C[R].rank = T), T++;
              }
              for (
                var N = 0,
                  P = k.sort(function(e, t) {
                    return t.appid - e.appid;
                  });
                N < P.length;
                N++
              ) {
                var A = P[N];
                m.push(
                  M.a.createElement(q, {
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
                M.a.createElement("div", {
                  key: "recommendations_loading",
                  className: I.a.RecommendationsLoading
                })
              );
            return M.a.createElement(
              "div",
              { className: I.a.RecommendationList },
              M.a.createElement(
                "div",
                { className: I.a.Header },
                w("#Recommendations_Header")
              ),
              M.a.createElement(X, null),
              M.a.createElement("div", { className: I.a.List }, m)
            );
          }),
          (e = l.c([n.a], e))
        );
      })(M.a.Component),
      J = (function(a) {
        function e(e) {
          var t = a.call(this, e) || this;
          return (t.state = { width: window.innerWidth }), t;
        }
        return (
          l.d(e, a),
          (e.prototype.updateDimensions = function() {
            this.setState({ width: window.innerWidth });
          }),
          (e.prototype.componentDidMount = function() {
            window.addEventListener("resize", this.updateDimensions);
          }),
          (e.prototype.render = function() {
            return 0 == O.ACCOUNT_ID
              ? M.a.createElement(
                  "div",
                  { className: I.a.App },
                  M.a.createElement(
                    "div",
                    { className: I.a.Login },
                    M.a.createElement(
                      "div",
                      { className: I.a.Text },
                      w("#LoginText")
                    ),
                    M.a.createElement(
                      "a",
                      {
                        className: D(
                          "btn_green_white_innerfade",
                          " btn_medium"
                        ),
                        href: O.LOGIN_REDIRECT
                      },
                      M.a.createElement("span", null, w("#LoginButton"))
                    )
                  )
                )
              : M.a.createElement(
                  "div",
                  { className: I.a.App },
                  M.a.createElement(
                    "div",
                    { className: I.a.Container },
                    M.a.createElement(
                      "div",
                      { className: I.a.TopSection },
                      M.a.createElement(
                        "div",
                        { className: I.a.Header },
                        w("#HeaderTitle")
                      ),
                      M.a.createElement(
                        "div",
                        { className: I.a.Body },
                        w("#HeaderBody1")
                      ),
                      M.a.createElement("div", { className: I.a.Spacer }),
                      M.a.createElement(
                        "div",
                        { className: I.a.Body },
                        w("#HeaderBody2")
                      ),
                      M.a.createElement("div", { className: I.a.Spacer }),
                      M.a.createElement(
                        "div",
                        { className: I.a.Body },
                        (function(e) {
                          for (var t = [], a = 1; a < arguments.length; a++)
                            t[a - 1] = arguments[a];
                          var r = C.LocalizeString(e);
                          if (!r) return e;
                          for (
                            var n, o = [], i = /(.*?)%(\d+)\$s/g, s = 0;
                            (n = i.exec(r));

                          ) {
                            (s += n[0].length), o.push(n[1]);
                            var c = parseInt(n[2]);
                            1 <= c && c <= t.length && o.push(t[c - 1]);
                          }
                          return (
                            o.push(r.substr(s)),
                            p.createElement.apply(
                              p,
                              [p.Fragment, null].concat(o)
                            )
                          );
                        })(
                          "#HeaderBody3",
                          M.a.createElement(
                            "a",
                            {
                              href:
                                "https://steamcommunity.com/games/593110/announcements/detail/1612767708821405787"
                            },
                            w("#HeaderBody3a")
                          )
                        )
                      )
                    ),
                    M.a.createElement(
                      "div",
                      { className: I.a.BottomSection },
                      M.a.createElement(H, { accountID: O.ACCOUNT_ID }),
                      M.a.createElement("div", { className: I.a.VerticalBar }),
                      M.a.createElement(z, { width: this.state.width })
                    )
                  )
                );
          }),
          l.c([i], e.prototype, "updateDimensions", null),
          (e = l.c([n.a], e))
        );
      })(M.a.Component),
      Z = a("2vnA"),
      K = a("i8i4");
    ((P = N || (N = {}))[(P.Unrequested = 0)] = "Unrequested"),
      (P[(P.Pending = 1)] = "Pending"),
      (P[(P.Valid = 2)] = "Valid"),
      (P[(P.Failed = 3)] = "Failed"),
      (P[(P.Rerequest = 4)] = "Rerequest");
    var $,
      ee,
      te = (function() {
        function e() {
          (this.eState = N.Unrequested), (this.nExpirationTime = 0);
        }
        return (
          (e.prototype.getData = function(t, a, r) {
            var n = this,
              o = Date.now() / 1e3,
              e = this.eState == N.Pending || this.eState == N.Rerequest;
            return (
              o >= this.nExpirationTime &&
                !e &&
                ((this.eState = N.Pending),
                a().then(function(e) {
                  if (n.eState == N.Rerequest)
                    return n.expireData(), void n.getData(t, a, r);
                  n.eState = e
                    ? ((n.data = r ? r(e) : e),
                      (n.nExpirationTime = o + t),
                      N.Valid)
                    : N.Failed;
                })),
              this.data
            );
          }),
          (e.prototype.clearData = function() {
            var e = Date.now() / 1e3;
            (this.eState = N.Unrequested),
              (this.data = null),
              (this.nExpirationTime = e);
          }),
          (e.prototype.expireData = function() {
            var e = Date.now() / 1e3;
            this.nExpirationTime = e;
          }),
          (e.prototype.delayNewData = function(e) {
            var t = Date.now() / 1e3;
            this.nExpirationTime = t + e;
          }),
          (e.prototype.rerequestDataIfPending = function() {
            this.eState == N.Pending && (this.eState = N.Rerequest);
          }),
          l.c([Z.v], e.prototype, "data", void 0),
          e
        );
      })();
    ((ee = $ || ($ = {}))[(ee.ClickThrough = 1)] = "ClickThrough"),
      (ee[(ee.AddToWishlist = 2)] = "AddToWishlist"),
      (ee[(ee.AddToCart = 3)] = "AddToCart");
    var ae = (function() {
      function e() {
        var e = this;
        (this.m_mapAppDetailsCache = new Map()),
          (this.m_ResultDataCache = new te()),
          (this.m_InputAppsCache = new te()),
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
          K.render(
            p.createElement(J, { app: this }),
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
              this.m_mapAppDetailsCache.set(t, new te()),
            this.m_mapAppDetailsCache.get(t).getData(
              60,
              function() {
                return l.b(e, void 0, void 0, function() {
                  return l.e(this, function(e) {
                    switch (e.label) {
                      case 0:
                        return [
                          4,
                          u.a.get(
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
        (e.prototype.getResults = function(e, t, a, r) {
          var n = this,
            o = e ? "1" : "0",
            i = t ? "" + t : "0",
            s = a ? "1" : "0",
            c = r ? "" + r : "0";
          return this.m_ResultDataCache.getData(
            60,
            function() {
              return l.b(n, void 0, void 0, function() {
                return l.e(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return [
                        4,
                        u.a.get(
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
                            c
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
        (e.prototype.getRecommendations = function() {
          var e = ie.getResults(
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
            60,
            function() {
              return l.b(e, void 0, void 0, function() {
                return l.e(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return [
                        4,
                        u.a.get(
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
          var e = ie.getResults(
            O.INCLUDE_PLAYED,
            O.ALGORITHM,
            O.REINFERENCE,
            O.MODEL_VERSION
          );
          return e ? e.app_info : void 0;
        }),
        (e.prototype.getTags = function() {
          var e = ie.getResults(
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
        (e.prototype.onAppClicked = function(a, r) {
          return l.b(this, void 0, void 0, function() {
            var t;
            return l.e(this, function(e) {
              switch (e.label) {
                case 0:
                  return (
                    (t = {
                      account_id: O.ACCOUNT_ID,
                      session_id: O.SESSION_ID,
                      app_id: a,
                      app_rank: r,
                      action: $.ClickThrough,
                      algorithm: 1,
                      setting_1: 100 * this.m_fPopularityValue,
                      setting_2: 100 * this.m_fRecencyValue,
                      setting_3: this.m_nTagFilterValue,
                      setting_4: this.m_nTagExcludeValue
                    }),
                    [
                      4,
                      u.a.post(
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
        (e.prototype.onAddToWishlist = function(n, o) {
          return l.b(this, void 0, void 0, function() {
            var t, a, r;
            return l.e(this, function(e) {
              switch (e.label) {
                case 0:
                  return (
                    (ie.getAppInfo()[n].w = !0),
                    (t = { sessionid: O.SESSION_ID, appid: n }),
                    [
                      4,
                      u.a.post(
                        O.BASE_URL + "recommender/" + O.STEAM_ID + "/wishlist",
                        t
                      )
                    ]
                  );
                case 1:
                  return (
                    (a = e.sent()),
                    (r = {
                      account_id: O.ACCOUNT_ID,
                      session_id: O.SESSION_ID,
                      app_id: n,
                      app_rank: o,
                      action: $.AddToWishlist,
                      algorithm: 1,
                      setting_1: 100 * this.m_fPopularityValue,
                      setting_2: 100 * this.m_fRecencyValue,
                      setting_3: this.m_nTagFilterValue,
                      setting_4: this.m_nTagExcludeValue
                    }),
                    [
                      4,
                      u.a.post(
                        O.BASE_URL + "recommender/" + O.STEAM_ID + "/stats",
                        r
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
        (e.prototype.onAddToCart = function(r, n) {
          return l.b(this, void 0, void 0, function() {
            var t, a;
            return l.e(this, function(e) {
              switch (e.label) {
                case 0:
                  return (
                    (t = { sessionid: O.SESSION_ID, appid: r }),
                    [
                      4,
                      u.a.post(
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
                      app_id: r,
                      app_rank: n,
                      action: $.AddToCart,
                      algorithm: 1,
                      setting_1: 100 * this.m_fPopularityValue,
                      setting_2: 100 * this.m_fRecencyValue,
                      setting_3: this.m_nTagFilterValue,
                      setting_4: this.m_nTagExcludeValue
                    }),
                    [
                      4,
                      u.a.post(
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
        l.c([Z.v], e.prototype, "m_fPopularityValue", void 0),
        l.c([Z.v], e.prototype, "m_fRecencyValue", void 0),
        l.c([Z.v], e.prototype, "m_nTagFilterValue", void 0),
        l.c([Z.v], e.prototype, "m_nTagExcludeValue", void 0),
        l.c([Z.v], e.prototype, "m_fQueuedPopularityValue", void 0),
        l.c([Z.v], e.prototype, "m_fQueuedRecencyValue", void 0),
        l.c([Z.v], e.prototype, "m_bExcludeWishlisted", void 0),
        l.c([Z.v], e.prototype, "m_bShouldMute", void 0),
        l.c([i], e.prototype, "onPopularityChanged", null),
        l.c([i], e.prototype, "onRecencyChanged", null),
        l.c([i], e.prototype, "onTagFilterChanged", null),
        l.c([i], e.prototype, "onTagExcludeChanged", null),
        l.c([i], e.prototype, "onExcludeWishlistedToggled", null),
        l.c([i], e.prototype, "onAppClicked", null),
        l.c([i], e.prototype, "onAddToWishlist", null),
        l.c([i], e.prototype, "onGoToWishlist", null),
        l.c([i], e.prototype, "onAddToCart", null),
        l.c([i], e.prototype, "onMuteClicked", null),
        l.c([i], e.prototype, "onUnMuteClicked", null),
        l.c([i], e.prototype, "shouldMute", null),
        e
      );
    })();
    a.d(t, "g_App", function() {
      return ie;
    });
    var re,
      ne,
      oe,
      ie = new ae();
    document.addEventListener("DOMContentLoaded", function() {
      _(), ie.Init();
    }),
      (window.LocalizationReady = function(e, t, a) {
        if ("english" !== t) "main" == e ? (re = a) : "shared" == e && (ne = a);
        else if ("shared" == e) oe = a;
        else {
          var r = void 0,
            n = null,
            o = void 0,
            i = null;
          void 0 !== re ? ((r = re), (n = a)) : (r = a),
            void 0 !== ne ? ((o = ne), (i = oe)) : (o = oe),
            C.InitFromObjects(r, n, o, i),
            (oe = ne = re = void 0);
        }
      });
  }
});

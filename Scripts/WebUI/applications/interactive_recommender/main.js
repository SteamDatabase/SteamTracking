/*! This file includes third-party software, governed by the licenses described here: https://store.steampowered.com/public/javascript/applications/interactive_recommender/main.licenses.txt */

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
!(function(l) {
  function e(e) {
    for (
      var t, a, r = e[0], n = e[1], o = e[2], i = 0, c = [];
      i < r.length;
      i++
    )
      (a = r[i]), u[a] && c.push(u[a][0]), (u[a] = 0);
    for (t in n) Object.prototype.hasOwnProperty.call(n, t) && (l[t] = n[t]);
    for (p && p(e); c.length; ) c.shift()();
    return _.push.apply(_, o || []), s();
  }
  function s() {
    for (var e, t = 0; t < _.length; t++) {
      for (var a = _[t], r = !0, n = 1; n < a.length; n++) {
        var o = a[n];
        0 !== u[o] && (r = !1);
      }
      r && (_.splice(t--, 1), (e = i((i.s = a[0]))));
    }
    return e;
  }
  var a = {},
    u = { 1: 0 },
    _ = [];
  function i(e) {
    if (a[e]) return a[e].exports;
    var t = (a[e] = { i: e, l: !1, exports: {} });
    return l[e].call(t.exports, t, t.exports, i), (t.l = !0), t.exports;
  }
  (i.m = l),
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
  var p = r;
  _.push(["gfbn", 0]), s();
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
    var i = a("mrSG"),
      r = a("vDqi"),
      c = a.n(r),
      s = a("q1tI"),
      A = a.n(s),
      n = a("okNM"),
      o = a("6TF7"),
      w = a.n(o);
    function l(e, t, a) {
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
    var I = function() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      return e.reduce(function(e, t) {
        return t
          ? "string" == typeof t
            ? e
              ? e + " " + t
              : t
            : "object" == typeof t
            ? e
              ? e + " " + u(t)
              : u(t)
            : e
          : e;
      }, "");
    };
    function u(a) {
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
        RESET_OPTIONS: !1
      },
      _ = "application_config";
    function p() {
      var e = (function(e, t) {
        void 0 === t && (t = _);
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
    var P = new Object(),
      D = new Object(),
      d = new Object(),
      U = new Object();
    a("Gp1o");
    var h = {
      PerYear: 31536e3,
      PerMonth: 2628e3,
      PerWeek: 604800,
      PerDay: 86400,
      PerHour: 3600,
      PerMinute: 60
    };
    var m, E, v, b;
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
    function f(e) {
      if (!S() || !window.document.cookie) return null;
      var t = document.cookie.match("(^|; )" + e + "=([^;]*)");
      return t && t[2] ? decodeURIComponent(t[2]) : null;
    }
    function y(e, t, a, r) {
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
    ((E = m || (m = {}))[(E.k_EOtherEvent = 1)] = "k_EOtherEvent"),
      (E[(E.k_EGameEvent = 2)] = "k_EGameEvent"),
      (E[(E.k_EPartyEvent = 3)] = "k_EPartyEvent"),
      (E[(E.k_EMeetingEvent = 4)] = "k_EMeetingEvent"),
      (E[(E.k_ESpecialCauseEvent = 5)] = "k_ESpecialCauseEvent"),
      (E[(E.k_EMusicAndArtsEvent = 6)] = "k_EMusicAndArtsEvent"),
      (E[(E.k_ESportsEvent = 7)] = "k_ESportsEvent"),
      (E[(E.k_ETripEvent = 8)] = "k_ETripEvent"),
      (E[(E.k_EChatEvent = 9)] = "k_EChatEvent"),
      (E[(E.k_EGameReleaseEvent = 10)] = "k_EGameReleaseEvent"),
      (E[(E.k_EBroadcastEvent = 11)] = "k_EBroadcastEvent"),
      (E[(E.k_ESmallUpdateEvent = 12)] = "k_ESmallUpdateEvent"),
      (E[(E.k_ERegularUpdateEvent = 13)] = "k_ERegularUpdateEvent"),
      (E[(E.k_EMajorUpdateEvent = 14)] = "k_EMajorUpdateEvent"),
      (E[(E.k_EFutureReleaseEvent = 16)] = "k_EFutureReleaseEvent"),
      (E[(E.k_EESportTournamentStreamEvent = 17)] =
        "k_EESportTournamentStreamEvent"),
      (E[(E.k_EDevStreamEvent = 18)] = "k_EDevStreamEvent"),
      (E[(E.k_EFamousStreamEvent = 19)] = "k_EFamousStreamEvent"),
      (E[(E.k_EGameSalesEvent = 20)] = "k_EGameSalesEvent"),
      (E[(E.k_EGameItemSalesEvent = 21)] = "k_EGameItemSalesEvent"),
      (E[(E.k_EInGameBonusXPEvent = 22)] = "k_EInGameBonusXPEvent"),
      (E[(E.k_EInGameLootEvent = 23)] = "k_EInGameLootEvent"),
      (E[(E.k_EInGamePerksEvent = 24)] = "k_EInGamePerksEvent"),
      (E[(E.k_EInGameChallengeEvent = 25)] = "k_EInGameChallengeEvent"),
      (E[(E.k_EInGameContestEvent = 26)] = "k_EInGameContestEvent"),
      (E[(E.k_EIRLEvent = 27)] = "k_EIRLEvent"),
      (E[(E.k_ENewsEvent = 28)] = "k_ENewsEvent"),
      (E[(E.k_EBetaReleaseEvent = 29)] = "k_EBetaReleaseEvent"),
      (E[(E.k_EFreeTrial = 31)] = "k_EFreeTrial"),
      (E[(E.k_ESeasonRelease = 32)] = "k_ESeasonRelease"),
      ((b = v || (v = {}))[(b.k_ELaunchSource_None = 0)] =
        "k_ELaunchSource_None"),
      (b[(b.k_ELaunchSource_2ftLibraryDetails = 100)] =
        "k_ELaunchSource_2ftLibraryDetails"),
      (b[(b.k_ELaunchSource_2ftLibraryListView = 101)] =
        "k_ELaunchSource_2ftLibraryListView"),
      (b[(b.k_ELaunchSource_2ftLibraryGrid = 103)] =
        "k_ELaunchSource_2ftLibraryGrid"),
      (b[(b.k_ELaunchSource_InstallSubComplete = 104)] =
        "k_ELaunchSource_InstallSubComplete"),
      (b[(b.k_ELaunchSource_DownloadsPage = 105)] =
        "k_ELaunchSource_DownloadsPage"),
      (b[(b.k_ELaunchSource_RemoteClientStartStreaming = 106)] =
        "k_ELaunchSource_RemoteClientStartStreaming"),
      (b[(b.k_ELaunchSource_2ftMiniModeList = 107)] =
        "k_ELaunchSource_2ftMiniModeList"),
      (b[(b.k_ELaunchSource_10ft = 200)] = "k_ELaunchSource_10ft"),
      (b[(b.k_ELaunchSource_DashAppLaunchCmdLine = 300)] =
        "k_ELaunchSource_DashAppLaunchCmdLine"),
      (b[(b.k_ELaunchSource_DashGameIdLaunchCmdLine = 301)] =
        "k_ELaunchSource_DashGameIdLaunchCmdLine"),
      (b[(b.k_ELaunchSource_RunByGameDir = 302)] =
        "k_ELaunchSource_RunByGameDir"),
      (b[(b.k_ELaunchSource_SubCmdRunDashGame = 303)] =
        "k_ELaunchSource_SubCmdRunDashGame"),
      (b[(b.k_ELaunchSource_SteamURL_Launch = 400)] =
        "k_ELaunchSource_SteamURL_Launch"),
      (b[(b.k_ELaunchSource_SteamURL_Run = 401)] =
        "k_ELaunchSource_SteamURL_Run"),
      (b[(b.k_ELaunchSource_SteamURL_JoinLobby = 402)] =
        "k_ELaunchSource_SteamURL_JoinLobby"),
      (b[(b.k_ELaunchSource_SteamURL_RunGame = 403)] =
        "k_ELaunchSource_SteamURL_RunGame"),
      (b[(b.k_ELaunchSource_SteamURL_RunGameIdOrJumplist = 404)] =
        "k_ELaunchSource_SteamURL_RunGameIdOrJumplist"),
      (b[(b.k_ELaunchSource_SteamURL_RunSafe = 405)] =
        "k_ELaunchSource_SteamURL_RunSafe"),
      (b[(b.k_ELaunchSource_TrayIcon = 500)] = "k_ELaunchSource_TrayIcon"),
      (b[(b.k_ELaunchSource_LibraryLeftColumnContextMenu = 600)] =
        "k_ELaunchSource_LibraryLeftColumnContextMenu"),
      (b[(b.k_ELaunchSource_LibraryLeftColumnDoubleClick = 601)] =
        "k_ELaunchSource_LibraryLeftColumnDoubleClick"),
      (b[(b.k_ELaunchSource_Dota2Launcher = 700)] =
        "k_ELaunchSource_Dota2Launcher"),
      (b[(b.k_ELaunchSource_IRunGameEngine = 800)] =
        "k_ELaunchSource_IRunGameEngine"),
      (b[(b.k_ELaunchSource_DRMFailureResponse = 801)] =
        "k_ELaunchSource_DRMFailureResponse"),
      (b[(b.k_ELaunchSource_DRMDataRequest = 802)] =
        "k_ELaunchSource_DRMDataRequest"),
      (b[(b.k_ELaunchSource_CloudFilePanel = 803)] =
        "k_ELaunchSource_CloudFilePanel"),
      (b[(b.k_ELaunchSource_DiscoveredAlreadyRunning = 804)] =
        "k_ELaunchSource_DiscoveredAlreadyRunning"),
      (b[(b.k_ELaunchSource_GameActionJoinParty = 900)] =
        "k_ELaunchSource_GameActionJoinParty");
    var k,
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
        IN_CLIENT: !(b[(b.k_ELaunchSource_AppPortraitContextMenu = 1e3)] =
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
            if (!S()) return k || (k = L()), k;
            var e = f("sessionid");
            e || (e = L());
            return e;
          })();
        },
        FRIENDSUI_BETA: !1,
        STEAM_TV: !1,
        DEV_MODE: !1,
        OFFLINE_MODE: !1
      };
    function L() {
      var e = (function() {
        for (var e, t, a = "", r = 0; r < 24; r++)
          a += ((e = 0),
          (t = 35),
          (e = Math.ceil(e)),
          (t = Math.floor(t)),
          Math.floor(Math.random() * (t - e + 1)) + e).toString(36);
        return a;
      })();
      return y("sessionid", e, 0), e;
    }
    var R = (function() {
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
            t.push(g(T.LANGUAGE)),
            (T.SUPPORTED_LANGUAGES || []).forEach(function(e) {
              e.value != T.LANGUAGE && t.push(g(e.value));
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
    function B(e) {
      for (var r = [], t = 1; t < arguments.length; t++)
        r[t - 1] = arguments[t];
      var a = N.LocalizeString(e);
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
    function x(e) {
      var t = new Date(1e3 * e),
        a = t.setHours(0, 0, 0, 0),
        r = C.get(a);
      if (r) return r;
      return (
        (r = t.toLocaleDateString(N.GetPreferredLocales(), {
          year: "numeric",
          month: "short",
          day: "numeric"
        })),
        C.set(a, r),
        r
      );
    }
    var C = new Map();
    new Map();
    new Map(), new Map(), new Map(), new Map();
    var N = new R();
    window.LocalizationManager = N;
    a("2i24");
    function G(e) {
      return s.createElement(
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
        s.createElement(
          "g",
          { className: "Speaker" },
          s.createElement("path", {
            d:
              "M93.785,52.265c-0.946,0-2.357,0.63-3.304,1.577L40.284,98.022c-0.947,0.789-2.831,1.578-4.093,1.578H9.367 C8.104,99.6,7,100.706,7,101.967v52.069c0,1.264,1.104,2.367,2.367,2.367H36.19c1.262,0,3.146,0.632,4.093,1.578l50.197,44.181 c0.947,0.789,2.516,1.578,3.304,1.578s1.578-1.104,1.578-2.367V54.631C95.363,53.369,94.731,52.265,93.785,52.265z"
          })
        ),
        !e.muted &&
          s.createElement(
            "g",
            { className: "SoundWaves" },
            s.createElement("path", {
              className: "SoundWavesHighest",
              d:
                "M193.826,30.402c24.959,24.958,40.349,59.403,40.349,97.604c0,38.199-15.388,72.645-40.349,97.603l9.916,9.916 c28.067-28.067,44.263-64.673,44.263-107.521c0-42.847-16.196-79.455-44.263-107.521"
            }),
            s.createElement("path", {
              className: "SoundWavesHigh",
              d:
                "M175.737,47.628l-8.924,8.924c18.271,18.27,29.536,43.484,29.536,71.448s-11.264,53.178-29.536,71.448l8.924,8.924 c20.546-20.546,33.234-49.008,33.234-80.374c0-31.366-12.688-59.829-33.234-80.374V47.628z"
            }),
            s.createElement("path", {
              className: "SoundWavesMed",
              d:
                "M148.913,74.454l-8.925,8.925c11.488,11.488,18.491,27.236,18.491,44.624c0,17.388-7.054,33.281-18.491,44.575l8.875,8.975 c13.811-13.635,22.239-32.753,22.239-53.55c0-20.797-8.432-39.793-22.189-53.55V74.454z"
            }),
            s.createElement("path", {
              className: "SoundWavesLow",
              d:
                "M121.989,101.229l-8.778,9.073c4.641,4.516,7.397,10.706,7.397,17.702c0,6.995-2.755,13.186-7.397,17.702l8.778,9.073 c7.035-6.844,11.243-16.413,11.243-26.775C133.232,117.643,129.024,108.075,121.989,101.229z"
            })
          ),
        s.createElement(
          "g",
          { className: "SoundX" },
          s.createElement("line", {
            fill: "none",
            strokeWidth: e.muted ? 10 : 0,
            stroke: "#fff",
            strokeMiterlimit: "10",
            x1: "137",
            y1: "170.667",
            x2: "223.167",
            y2: "84.5"
          }),
          s.createElement("line", {
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
    var M,
      V,
      F = new ((function() {
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
              var r = f("app_impressions") || "";
              0 < r.length && (r += "|"),
                y("app_impressions", (r += e + "@" + t));
            }
          }),
          e
        );
      })())(),
      W = a("aqT/"),
      H = a.n(W),
      j = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          i.d(t, e),
          (t.prototype.onVisibilityChanged = function(e) {
            e && F.AddImpression(this.props.appID, this.props.snr);
          }),
          (t.prototype.render = function() {
            return A.a.createElement(
              H.a,
              { onChange: this.onVisibilityChanged },
              this.props.children
            );
          }),
          i.c([l], t.prototype, "onVisibilityChanged", null),
          t
        );
      })(A.a.Component),
      Y = function(e) {
        e.accountID;
        var t = Object.keys(d).length,
          a = 0;
        Object.keys(d).map(function(e) {
          a += d[e].p;
        });
        var r =
          t == O.MAX_PLAYED_GAMES
            ? "#PlaytimeList_TopGames"
            : "#PlaytimeList_Games";
        return A.a.createElement(
          "div",
          { className: w.a.IdentityBlock },
          A.a.createElement("img", {
            className: w.a.Avatar,
            src: O.AVATAR_URL
          }),
          A.a.createElement(
            "div",
            { className: w.a.PersonalInfo },
            A.a.createElement(
              "div",
              { className: w.a.Persona },
              O.PERSONA_NAME
            ),
            A.a.createElement("div", { className: w.a.GameCount }, B(r, t)),
            A.a.createElement(
              "div",
              { className: w.a.TotalTime },
              B("#PlaytimeList_HoursTotal", a)
            )
          )
        );
      },
      Q = function(e) {
        var t = e.appID,
          a = e.hours,
          r = e.lastPlayed,
          n = O.CDN_URL + "apps/" + t + "/header.jpg",
          o = Date.now() / 1e3 - r,
          i = "";
        return (
          (i =
            r <= 86400
              ? B("#PlaytimeList_LastPlayedMax")
              : B(
                  "#PlaytimeList_LastPlayed",
                  31449600 < o
                    ? x(r)
                    : (function(e, t) {
                        void 0 === t && (t = !1);
                        var a = t ? "#TimeInterval_" : "#TimeSince_";
                        return e >= 2 * h.PerYear
                          ? B(a + "XYears", Math.floor(e / h.PerYear))
                          : e >= h.PerYear
                          ? (e -= h.PerYear) >= 2 * h.PerMonth
                            ? B(a + "1YearXMonths", Math.floor(e / h.PerMonth))
                            : B(a + "1Year")
                          : e >= 2 * h.PerMonth
                          ? B(a + "XMonths", Math.floor(e / h.PerMonth))
                          : e >= 2 * h.PerWeek
                          ? B(a + "XWeeks", Math.floor(e / h.PerWeek))
                          : e >= h.PerWeek
                          ? B(a + "1Week", Math.floor(e / h.PerWeek))
                          : e >= 2 * h.PerDay
                          ? B(a + "XDays", Math.floor(e / h.PerDay))
                          : e >= h.PerDay
                          ? (e -= h.PerDay) >= 2 * h.PerHour
                            ? B(a + "1DayXHours", Math.floor(e / h.PerHour))
                            : B(a + "1Day")
                          : e >= 2 * h.PerHour
                          ? B(a + "XHours", Math.floor(e / h.PerHour))
                          : e >= h.PerHour
                          ? (e -= h.PerHour) >= 2 * h.PerMinute
                            ? B(
                                a + "1HourXMinutes",
                                Math.floor(e / h.PerMinute)
                              )
                            : B(a + "1Hour")
                          : e >= 2 * h.PerMinute
                          ? B(a + "XMinutes", Math.floor(e / h.PerMinute))
                          : e >= h.PerMinute
                          ? B(a + "1Minute")
                          : B(a + "LessThanAMinute");
                      })(o)
                )),
          A.a.createElement(
            "div",
            { className: w.a.PlayedGame },
            A.a.createElement("img", { className: w.a.Logo, src: n }),
            A.a.createElement(
              "div",
              { className: w.a.PlaytimeInfo },
              A.a.createElement(
                "div",
                { className: w.a.HoursPlayed },
                B("#PlaytimeList_Hours", a)
              ),
              A.a.createElement("div", { className: w.a.LastPlayed }, i)
            )
          )
        );
      },
      X = (function(a) {
        function e(e) {
          var t = a.call(this, e) || this;
          return (t.state = {}), t;
        }
        return (
          i.d(e, a),
          (e.prototype.render = function() {
            var a = [];
            return (
              Object.keys(d).map(function(e) {
                var t = d[e];
                a.push(
                  A.a.createElement(Q, {
                    key: "PlayedGame_" + t.a,
                    appID: t.a,
                    hours: t.p,
                    lastPlayed: t.l
                  })
                );
              }),
              A.a.createElement(
                "div",
                { className: w.a.PlaytimeList },
                A.a.createElement(
                  "div",
                  { className: w.a.Header },
                  B("#PlaytimeList_Header")
                ),
                A.a.createElement(Y, { accountID: this.props.accountID }),
                A.a.createElement("div", { className: w.a.List }, a)
              )
            );
          }),
          e
        );
      })(A.a.Component),
      q = function(e) {
        var t = e.titleLabel,
          a = e.minLabel,
          r = e.maxLabel,
          n = e.minValue,
          o = e.maxValue,
          i = e.value,
          c = e.onChange,
          l = e.sliderLabels,
          s = l ? Math.round((l.length - 1) * ((i - n) / (o - n))) : void 0,
          u = l ? l[s] : "";
        return A.a.createElement(
          "div",
          { className: w.a.OptionSlider },
          A.a.createElement("div", { className: w.a.Title }, t),
          A.a.createElement(
            "div",
            { className: w.a.Labels },
            A.a.createElement("div", { className: w.a.Min }, a),
            A.a.createElement("div", { className: w.a.Max }, r)
          ),
          A.a.createElement("input", {
            type: "range",
            min: n,
            max: o,
            step: (o - n) / 100,
            value: i,
            onChange: c
          }),
          A.a.createElement("div", { className: w.a.OptionalLabel }, u)
        );
      },
      z = function(e) {
        var t = e.titleLabel,
          a = e.checked,
          r = e.onChange;
        return A.a.createElement(
          "label",
          { className: w.a.OptionCheckbox },
          A.a.createElement("input", {
            type: "checkbox",
            className: w.a.Checkbox,
            checked: a,
            onChange: r
          }),
          t
        );
      },
      J = function(e) {
        for (
          var t = e.title,
            a = e.options,
            r = e.value,
            n = e.onChange,
            o = [],
            i = 0,
            c = a;
          i < c.length;
          i++
        ) {
          var l = c[i];
          o.push(
            A.a.createElement(
              "option",
              { key: l.value, value: l.value },
              l.display
            )
          );
        }
        return A.a.createElement(
          "div",
          { className: w.a.OptionDropdown },
          A.a.createElement("div", { className: w.a.Label }, t),
          A.a.createElement(
            "select",
            { value: r, onChange: n, className: w.a.SelectionBox },
            o
          )
        );
      },
      Z = Object(n.a)(function(e) {
        var t = [
            { value: 0, display: "No Filter " },
            { value: 19, display: U[19] },
            { value: 21, display: U[21] },
            { value: 4166, display: U[4166] },
            { value: 597, display: U[597] },
            { value: 1685, display: U[1685] },
            { value: 493, display: U[493] },
            { value: 3839, display: U[3839] },
            { value: 113, display: U[113] },
            { value: 492, display: U[492] },
            { value: 128, display: U[128] },
            { value: 3859, display: U[3859] },
            { value: 1695, display: U[1695] },
            { value: 122, display: U[122] },
            { value: 1774, display: U[1774] },
            { value: 599, display: U[599] },
            { value: 4182, display: U[4182] },
            { value: 9, display: U[9] },
            { value: 1662, display: U[1662] },
            { value: 21978, display: U[21978] }
          ],
          a = [
            B("#FilterAge_120"),
            B("#FilterAge_60"),
            B("#FilterAge_36"),
            B("#FilterAge_24"),
            B("#FilterAge_12"),
            B("#FilterAge_6")
          ];
        return A.a.createElement(
          "div",
          { className: w.a.RecommendationOptions },
          A.a.createElement(
            "div",
            { className: I(w.a.Row, w.a.FirstRow) },
            A.a.createElement(q, {
              minLabel: B("#Popularity_Popular"),
              titleLabel: B("#Popularity_Title"),
              maxLabel: B("#Popularity_Niche"),
              minValue: 0,
              maxValue: 1,
              value: ue.m_fQueuedPopularityValue,
              onChange: ue.onPopularityChanged
            }),
            A.a.createElement(q, {
              minLabel: B("#Recency_Older"),
              titleLabel: B("#Recency_Title"),
              maxLabel: B("#Recency_Newer"),
              minValue: 0,
              maxValue: 1,
              value: ue.m_fQueuedRecencyValue,
              onChange: ue.onRecencyChanged,
              sliderLabels: a
            })
          ),
          A.a.createElement(
            "div",
            { className: I(w.a.Row, w.a.SecondRow) },
            A.a.createElement(J, {
              title: B("#TagFilter_Title"),
              options: t,
              value: ue.m_nTagFilterValue,
              onChange: ue.onTagFilterChanged
            }),
            A.a.createElement(J, {
              title: B("#TagExclude_Title"),
              options: t,
              value: ue.m_nTagExcludeValue,
              onChange: ue.onTagExcludeChanged
            }),
            A.a.createElement(z, {
              titleLabel: B("#ExcludeWishlisted"),
              checked: ue.m_bExcludeWishlisted,
              onChange: ue.onExcludeWishlistedToggled
            })
          )
        );
      }),
      K = (function(a) {
        function e(e) {
          var t = a.call(this, e) || this;
          return (
            (t.m_videoRef = A.a.createRef()),
            (t.state = { hovered: !1, wishlisted: D[e.appID].w }),
            t
          );
        }
        return (
          i.d(e, a),
          (e.prototype.componentDidMount = function() {
            this.m_videoRef.current.defaultMuted = !0;
          }),
          (e.prototype.componentDidUpdate = function() {
            this.state.hovered &&
              this.m_videoRef &&
              this.m_videoRef.current &&
              0 == this.m_videoRef.current.currentTime &&
              this.m_videoRef.current.play().then(function() {}, function() {});
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
            ue.shouldMute()
              ? (ue.onUnMuteClicked(),
                this.m_videoRef &&
                  this.m_videoRef.current &&
                  (this.m_videoRef.current.muted = !1))
              : (ue.onMuteClicked(),
                this.m_videoRef &&
                  this.m_videoRef.current &&
                  (this.m_videoRef.current.muted = !0)),
              e.preventDefault(),
              e.stopPropagation();
          }),
          (e.prototype.onAddToWishlist = function(e) {
            ue.onAddToWishlist(this.props.appID, this.props.rank),
              this.setState({ wishlisted: !0 }),
              e.preventDefault(),
              e.stopPropagation();
          }),
          (e.prototype.onGoToWishlist = function(e) {
            ue.onGoToWishlist(), e.preventDefault(), e.stopPropagation();
          }),
          (e.prototype.onAddToCart = function(e) {
            ue.onAddToCart(this.props.appID, this.props.rank),
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
              c = D[a];
            if (!c) return A.a.createElement("div", null);
            var l = c.n,
              s = 0 < c.r ? B("#Recommendation_ReleasedOn", x(c.r)) : "",
              u = [];
            if (c.t)
              for (var _ = 0, p = 0, d = c.t; p < d.length; p++) {
                var h = d[p];
                if (
                  (u.push(
                    A.a.createElement(
                      "div",
                      { key: a + "_" + h, className: w.a.Tag },
                      U[h]
                    )
                  ),
                  5 == ++_)
                )
                  break;
              }
            var m = parseInt(w.a.nSmallEntryWidth),
              E = parseInt(w.a.nOptionsWrapWidth),
              v = 112,
              b = !0;
            o < m ? (b = !(v = 66)) : o < E && (b = !(v = 87));
            var g = b && this.state.hovered,
              f = Math.min(Number(r) / 10, 1e3),
              y = (Math.max(1, r), !1),
              S = !1,
              k = !0,
              T = "",
              L = "",
              R = "",
              C = "",
              N = "";
            if (g) {
              var P = ue.getDetails(this.props.appID);
              P &&
                ((y = !0),
                (S = 0 < P.discount_pct),
                (k = "0" == P.discount_price),
                (N =
                  "probably" ==
                  document
                    .createElement("video")
                    .canPlayType('video/webm; codecs="vp8, vorbis"')
                    ? P.video_webm
                    : P.video_mp4),
                (T = "-" + P.discount_pct + "%"),
                (L = P.base_price),
                (R = k ? B("#FreeToPlay") : P.discount_price),
                (C = P.description));
            }
            var M = N && 0 < N.length;
            return A.a.createElement(
              j,
              { appID: a, snr: O.LINK_PARAM },
              A.a.createElement(
                "a",
                {
                  href: O.BASE_URL + "app/" + a + "?snr=" + O.LINK_PARAM,
                  onClick: function() {
                    return ue.onAppClicked(a, n);
                  },
                  className: I(
                    w.a.RecommendationEntry,
                    "ds_flagged",
                    "ds_wishlist",
                    30 < n && w.a.Hidden,
                    g && w.a.Hovered
                  ),
                  style: { top: Math.min(31, n) * v },
                  onMouseEnter: this.OnHover,
                  onMouseLeave: this.OnUnHover
                },
                A.a.createElement(
                  "div",
                  { className: w.a.TopEntrySection },
                  A.a.createElement(
                    "div",
                    { className: w.a.LeftSection },
                    A.a.createElement("img", {
                      className: I(w.a.Logo, (!M || !g) && w.a.Revealed),
                      src: i
                    }),
                    A.a.createElement("video", {
                      ref: this.m_videoRef,
                      className: I(
                        "highlight_player_item",
                        "highlight_movie",
                        w.a.Video,
                        M && g && w.a.Revealed
                      ),
                      playsInline: !0,
                      autoPlay: !0,
                      muted: ue.shouldMute(),
                      src: N
                    }),
                    A.a.createElement(
                      "div",
                      {
                        className: I(w.a.UnMute, M && w.a.Revealed),
                        onClick: function(e) {
                          return t.onMuteToggle(e);
                        }
                      },
                      A.a.createElement(G, { muted: ue.shouldMute() })
                    ),
                    this.state.wishlisted &&
                      A.a.createElement(
                        "div",
                        {
                          className: I(
                            "ds_flag",
                            "ds_wishlist_flag",
                            w.a.WishlistFlag
                          )
                        },
                        B("#Recommendation_OnWishlist") + "  "
                      )
                  ),
                  A.a.createElement(
                    "div",
                    { className: w.a.RightSection },
                    A.a.createElement("div", { className: w.a.Name }, l),
                    A.a.createElement(
                      "div",
                      { className: w.a.CenterSection },
                      A.a.createElement(
                        "div",
                        {
                          className: I(
                            w.a.CenterOption,
                            w.a.CenterDefault,
                            g && w.a.Hidden
                          )
                        },
                        A.a.createElement(
                          "div",
                          { className: w.a.Released },
                          s
                        ),
                        A.a.createElement(
                          "div",
                          { className: w.a.BarContainer },
                          A.a.createElement("div", {
                            className: w.a.Bar,
                            style: { width: f + "%" }
                          })
                        ),
                        A.a.createElement("div", { className: w.a.Tags }, u)
                      ),
                      A.a.createElement(
                        "div",
                        {
                          className: I(
                            w.a.CenterOption,
                            w.a.CenterHovered,
                            !g && w.a.Hidden
                          )
                        },
                        C
                      )
                    ),
                    y &&
                      A.a.createElement(
                        "div",
                        { className: w.a.BottomEntrySection },
                        A.a.createElement(
                          "div",
                          {
                            className: I(
                              "game_purchase_action",
                              w.a.PurchaseSection
                            )
                          },
                          A.a.createElement(
                            "div",
                            {
                              className: I(
                                "game_purchase_action_bg",
                                w.a.PurchaseBG
                              )
                            },
                            S &&
                              A.a.createElement(
                                "div",
                                {
                                  className:
                                    "discount_block game_purchase_discount"
                                },
                                A.a.createElement(
                                  "div",
                                  { className: "discount_pct" },
                                  T
                                ),
                                A.a.createElement(
                                  "div",
                                  { className: "discount_prices" },
                                  A.a.createElement(
                                    "div",
                                    { className: "discount_original_price" },
                                    L
                                  ),
                                  A.a.createElement(
                                    "div",
                                    { className: "discount_final_price" },
                                    R
                                  )
                                )
                              ),
                            !S &&
                              A.a.createElement(
                                "div",
                                { className: "game_purchase_price price" },
                                R
                              ),
                            !k &&
                              A.a.createElement(
                                "div",
                                {
                                  className: "btn_addtocart",
                                  onClick: function(e) {
                                    return t.onAddToCart(e);
                                  }
                                },
                                A.a.createElement(
                                  "span",
                                  {
                                    className:
                                      "btnv6_green_white_innerfade btn_medium"
                                  },
                                  A.a.createElement(
                                    "span",
                                    null,
                                    B("#btn_add_to_cart")
                                  )
                                )
                              )
                          )
                        ),
                        !this.state.wishlisted &&
                          !k &&
                          A.a.createElement(
                            "div",
                            {
                              id: "add_to_wishlist_area",
                              className: w.a.WishlistSection,
                              onClick: function(e) {
                                return t.onAddToWishlist(e);
                              }
                            },
                            A.a.createElement(
                              "div",
                              { className: "btnv6_blue_hoverfade btn_medium" },
                              A.a.createElement(
                                "span",
                                null,
                                B("#wishlist_add_to_wishlist")
                              )
                            )
                          ),
                        this.state.wishlisted &&
                          !k &&
                          A.a.createElement(
                            "div",
                            {
                              className: I(
                                "btnv6_blue_hoverfade btn_medium",
                                "queue_btn_active",
                                w.a.Wishlisted,
                                w.a.WishlistSection
                              ),
                              "data-tooltip-text": B("#OnWishlistTooltip"),
                              onClick: function(e) {
                                return t.onGoToWishlist(e);
                              }
                            },
                            A.a.createElement(
                              "span",
                              null,
                              A.a.createElement("img", {
                                src: O.IMG_URL_BASE + "/v6/ico/ico_selected.png"
                              }),
                              "  " + B("#OnWishlist")
                            )
                          )
                      )
                  )
                )
              )
            );
          }),
          i.c([l], e.prototype, "OnHover", null),
          i.c([l], e.prototype, "OnUnHover", null),
          i.c([l], e.prototype, "onMuteToggle", null),
          i.c([l], e.prototype, "onAddToWishlist", null),
          i.c([l], e.prototype, "onGoToWishlist", null),
          i.c([l], e.prototype, "onAddToCart", null),
          (e = i.c([n.a], e))
        );
      })(A.a.Component),
      $ = (function(a) {
        function e(e) {
          var t = a.call(this, e) || this;
          return (t.state = { sortedRecommendedApps: [] }), t;
        }
        return (
          i.d(e, a),
          (e.prototype.render = function() {
            var e = ue.m_fRecencyValue * (O.NUM_RECENCY_STEPS - 1 - 0.001),
              t = Math.floor(e),
              a = t + 1,
              r = 1 - (e - t),
              n = 1 - r,
              o = ue.m_fPopularityValue * (O.NUM_POPULARITY_STEPS - 1 - 0.001),
              i = Math.floor(o),
              c = i + 1,
              l = 1 - (o - i),
              s = 1 - l,
              u = [];
            u.push({ index: i * O.NUM_RECENCY_STEPS + t, weight: l * r }),
              u.push({ index: c * O.NUM_RECENCY_STEPS + t, weight: s * r }),
              u.push({ index: i * O.NUM_RECENCY_STEPS + a, weight: l * n }),
              u.push({ index: c * O.NUM_RECENCY_STEPS + a, weight: s * n });
            for (var _ = new Map(), p = 0, d = 0, h = u; d < h.length; d++) {
              var m = h[d],
                E = P[m.index];
              if (((p = Math.max(p, E.score_scale)), E))
                for (var v = 0; v < E.app_ids.length; v++) {
                  var b = E.app_ids[v];
                  if (
                    !(
                      !D[b] ||
                      D[b].o ||
                      D[b].i ||
                      (D[b].w && ue.m_bExcludeWishlisted)
                    )
                  ) {
                    var g =
                      (_.get(b) || 0) + E.scores[v] * m.weight * E.score_scale;
                    _.set(b, g);
                  }
                }
            }
            _.forEach(function(e, t) {
              return _.set(t, e / p);
            });
            var f = [];
            _.forEach(function(e, t) {
              return f.push({ appid: t, score: e });
            }),
              0 != ue.m_nTagFilterValue &&
                (f = f.filter(function(e) {
                  return (
                    D[e.appid].t &&
                    -1 != D[e.appid].t.indexOf(ue.m_nTagFilterValue)
                  );
                })),
              0 != ue.m_nTagExcludeValue &&
                (f = f.filter(function(e) {
                  return (
                    D[e.appid].t &&
                    -1 == D[e.appid].t.indexOf(ue.m_nTagExcludeValue)
                  );
                }));
            for (
              var y = (f = f.filter(function(e) {
                  return 0 < e.score;
                })).sort(function(e, t) {
                  return t.score - e.score;
                }),
                S = 0,
                k = 0,
                T = (y = y.slice(0, 30));
              k < T.length;
              k++
            ) {
              (T[k].rank = S), S++;
            }
            for (
              var L = [],
                R = 0,
                C = y.sort(function(e, t) {
                  return t.appid - e.appid;
                });
              R < C.length;
              R++
            ) {
              var N = C[R];
              L.push(
                A.a.createElement(K, {
                  key: N.appid,
                  appID: N.appid,
                  score: N.score,
                  rank: N.rank,
                  width: this.props.width
                })
              );
            }
            return A.a.createElement(
              "div",
              { className: w.a.RecommendationList },
              A.a.createElement(
                "div",
                { className: w.a.Header },
                B("#Recommendations_Header")
              ),
              A.a.createElement(Z, null),
              A.a.createElement("div", { className: w.a.List }, L)
            );
          }),
          (e = i.c([n.a], e))
        );
      })(A.a.Component),
      ee = (function(a) {
        function e(e) {
          var t = a.call(this, e) || this;
          return (t.state = { width: window.innerWidth }), t;
        }
        return (
          i.d(e, a),
          (e.prototype.updateDimensions = function() {
            this.setState({ width: window.innerWidth });
          }),
          (e.prototype.componentDidMount = function() {
            window.addEventListener("resize", this.updateDimensions);
          }),
          (e.prototype.render = function() {
            return 0 == O.ACCOUNT_ID
              ? A.a.createElement(
                  "div",
                  { className: w.a.App },
                  A.a.createElement(
                    "div",
                    { className: w.a.Login },
                    A.a.createElement(
                      "div",
                      { className: w.a.Text },
                      B("#LoginText")
                    ),
                    A.a.createElement(
                      "a",
                      {
                        className: I(
                          "btn_green_white_innerfade",
                          " btn_medium"
                        ),
                        href: O.LOGIN_REDIRECT
                      },
                      A.a.createElement("span", null, B("#LoginButton"))
                    )
                  )
                )
              : A.a.createElement(
                  "div",
                  { className: w.a.App },
                  A.a.createElement(
                    "div",
                    { className: w.a.Container },
                    A.a.createElement(
                      "div",
                      { className: w.a.TopSection },
                      A.a.createElement(
                        "div",
                        { className: w.a.Header },
                        B("#HeaderTitle")
                      ),
                      A.a.createElement(
                        "div",
                        { className: w.a.Body },
                        B("#HeaderBody1")
                      ),
                      A.a.createElement("div", { className: w.a.Spacer }),
                      A.a.createElement(
                        "div",
                        { className: w.a.Body },
                        B("#HeaderBody2")
                      ),
                      A.a.createElement("div", { className: w.a.Spacer }),
                      A.a.createElement(
                        "div",
                        { className: w.a.Body },
                        (function(e) {
                          for (var t = [], a = 1; a < arguments.length; a++)
                            t[a - 1] = arguments[a];
                          var r = N.LocalizeString(e);
                          if (!r) return e;
                          for (
                            var n, o = [], i = /(.*?)%(\d+)\$s/g, c = 0;
                            (n = i.exec(r));

                          ) {
                            (c += n[0].length), o.push(n[1]);
                            var l = parseInt(n[2]);
                            1 <= l && l <= t.length && o.push(t[l - 1]);
                          }
                          return (
                            o.push(r.substr(c)),
                            s.createElement.apply(
                              s,
                              [s.Fragment, null].concat(o)
                            )
                          );
                        })(
                          "#HeaderBody3",
                          A.a.createElement(
                            "a",
                            {
                              href:
                                "https://steamcommunity.com/games/593110/announcements/detail/1612767708821405787"
                            },
                            B("#HeaderBody3a")
                          )
                        )
                      )
                    ),
                    A.a.createElement(
                      "div",
                      { className: w.a.BottomSection },
                      A.a.createElement(X, { accountID: O.ACCOUNT_ID }),
                      A.a.createElement("div", { className: w.a.VerticalBar }),
                      A.a.createElement($, { width: this.state.width })
                    )
                  )
                );
          }),
          i.c([l], e.prototype, "updateDimensions", null),
          e
        );
      })(A.a.Component),
      te = a("2vnA"),
      ae = a("i8i4");
    ((V = M || (M = {}))[(V.Unrequested = 0)] = "Unrequested"),
      (V[(V.Pending = 1)] = "Pending"),
      (V[(V.Valid = 2)] = "Valid"),
      (V[(V.Failed = 3)] = "Failed"),
      (V[(V.Rerequest = 4)] = "Rerequest");
    var re,
      ne,
      oe = (function() {
        function e() {
          (this.eState = M.Unrequested), (this.nExpirationTime = 0);
        }
        return (
          (e.prototype.getData = function(t, a, r) {
            var n = this,
              o = Date.now() / 1e3,
              e = this.eState == M.Pending || this.eState == M.Rerequest;
            return (
              o >= this.nExpirationTime &&
                !e &&
                ((this.eState = M.Pending),
                a().then(function(e) {
                  if (n.eState == M.Rerequest)
                    return n.expireData(), void n.getData(t, a, r);
                  n.eState = e
                    ? ((n.data = r ? r(e) : e),
                      (n.nExpirationTime = o + t),
                      M.Valid)
                    : M.Failed;
                })),
              this.data
            );
          }),
          (e.prototype.clearData = function() {
            var e = Date.now() / 1e3;
            (this.eState = M.Unrequested),
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
            this.eState == M.Pending && (this.eState = M.Rerequest);
          }),
          i.c([te.v], e.prototype, "data", void 0),
          e
        );
      })();
    ((ne = re || (re = {}))[(ne.ClickThrough = 1)] = "ClickThrough"),
      (ne[(ne.AddToWishlist = 2)] = "AddToWishlist"),
      (ne[(ne.AddToCart = 3)] = "AddToCart");
    var ie = (function() {
      function e() {
        var e = this;
        (this.m_mapAppDetailsCache = new Map()),
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
          ae.render(
            s.createElement(ee, { app: this }),
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
              this.m_mapAppDetailsCache.set(t, new oe()),
            this.m_mapAppDetailsCache.get(t).getData(
              60,
              function() {
                return i.b(e, void 0, void 0, function() {
                  return i.e(this, function(e) {
                    switch (e.label) {
                      case 0:
                        return [
                          4,
                          c.a.get(
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
          return i.b(this, void 0, void 0, function() {
            var t;
            return i.e(this, function(e) {
              switch (e.label) {
                case 0:
                  return (
                    (t = {
                      account_id: O.ACCOUNT_ID,
                      session_id: O.SESSION_ID,
                      app_id: a,
                      app_rank: r,
                      action: re.ClickThrough,
                      algorithm: 1,
                      setting_1: 100 * this.m_fPopularityValue,
                      setting_2: 100 * this.m_fRecencyValue,
                      setting_3: this.m_nTagFilterValue,
                      setting_4: this.m_nTagExcludeValue
                    }),
                    [
                      4,
                      c.a.post(
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
          return i.b(this, void 0, void 0, function() {
            var t, a, r;
            return i.e(this, function(e) {
              switch (e.label) {
                case 0:
                  return (
                    (D[n].w = !0),
                    (t = { sessionid: O.SESSION_ID, appid: n }),
                    [
                      4,
                      c.a.post(
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
                      action: re.AddToWishlist,
                      algorithm: 1,
                      setting_1: 100 * this.m_fPopularityValue,
                      setting_2: 100 * this.m_fRecencyValue,
                      setting_3: this.m_nTagFilterValue,
                      setting_4: this.m_nTagExcludeValue
                    }),
                    [
                      4,
                      c.a.post(
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
          return i.b(this, void 0, void 0, function() {
            var t, a;
            return i.e(this, function(e) {
              switch (e.label) {
                case 0:
                  return (
                    (t = { sessionid: O.SESSION_ID, appid: r }),
                    [
                      4,
                      c.a.post(
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
                      action: re.AddToCart,
                      algorithm: 1,
                      setting_1: 100 * this.m_fPopularityValue,
                      setting_2: 100 * this.m_fRecencyValue,
                      setting_3: this.m_nTagFilterValue,
                      setting_4: this.m_nTagExcludeValue
                    }),
                    [
                      4,
                      c.a.post(
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
        i.c([te.v], e.prototype, "m_fPopularityValue", void 0),
        i.c([te.v], e.prototype, "m_fRecencyValue", void 0),
        i.c([te.v], e.prototype, "m_nTagFilterValue", void 0),
        i.c([te.v], e.prototype, "m_nTagExcludeValue", void 0),
        i.c([te.v], e.prototype, "m_fQueuedPopularityValue", void 0),
        i.c([te.v], e.prototype, "m_fQueuedRecencyValue", void 0),
        i.c([te.v], e.prototype, "m_bExcludeWishlisted", void 0),
        i.c([te.v], e.prototype, "m_bShouldMute", void 0),
        i.c([l], e.prototype, "onPopularityChanged", null),
        i.c([l], e.prototype, "onRecencyChanged", null),
        i.c([l], e.prototype, "onTagFilterChanged", null),
        i.c([l], e.prototype, "onTagExcludeChanged", null),
        i.c([l], e.prototype, "onExcludeWishlistedToggled", null),
        i.c([l], e.prototype, "onAppClicked", null),
        i.c([l], e.prototype, "onAddToWishlist", null),
        i.c([l], e.prototype, "onGoToWishlist", null),
        i.c([l], e.prototype, "onAddToCart", null),
        i.c([l], e.prototype, "onMuteClicked", null),
        i.c([l], e.prototype, "onUnMuteClicked", null),
        i.c([l], e.prototype, "shouldMute", null),
        e
      );
    })();
    a.d(t, "g_App", function() {
      return ue;
    });
    var ce,
      le,
      se,
      ue = new ie();
    document.addEventListener("DOMContentLoaded", function() {
      p(),
        Object.assign(P, window.gRecommendations),
        Object.assign(D, window.gAppInfo),
        Object.assign(d, window.gInputApps),
        Object.assign(U, window.gTags),
        ue.Init();
    }),
      (window.LocalizationReady = function(e, t, a) {
        if ("english" !== t) "main" == e ? (ce = a) : "shared" == e && (le = a);
        else if ("shared" == e) se = a;
        else {
          var r = void 0,
            n = null,
            o = void 0,
            i = null;
          void 0 !== ce ? ((r = ce), (n = a)) : (r = a),
            void 0 !== le ? ((o = le), (i = se)) : (o = se),
            N.InitFromObjects(r, n, o, i),
            (se = le = ce = void 0);
        }
      });
  }
});

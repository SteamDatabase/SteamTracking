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
      (a = n[i]),
        Object.prototype.hasOwnProperty.call(u, a) && u[a] && s.push(u[a][0]),
        (u[a] = 0);
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
      LoadingWrapper: "throbber_LoadingWrapper_2wAKy",
      Static: "throbber_Static_1Qfwp",
      none: "throbber_none_1F0lz",
      bottomCircle: "throbber_bottomCircle_2qjZm",
      noString: "throbber_noString_1Sy0p",
      Throbber: "throbber_Throbber_lYUEj",
      throbber_small: "throbber_throbber_small_2zbyh",
      throbber_medium: "throbber_throbber_medium_2CphU",
      throbber_large: "throbber_throbber_large_1x18v",
      throbber_center_wrapper: "throbber_throbber_center_wrapper_3IYPz",
      ThrobberText: "throbber_ThrobberText_21nVi",
      blur: "throbber_blur_1ctjA",
      ThrobberRoundLoop: "throbber_ThrobberRoundLoop_1O-cW",
      roundOuterOutline: "throbber_roundOuterOutline_1Vv--",
      roundOuter: "throbber_roundOuter_2K0Lz",
      roundFill: "throbber_roundFill_3sQFk",
      ThrobberFillLoop: "throbber_ThrobberFillLoop_ofdi9",
      topCircle: "throbber_topCircle_1LZff",
      circlePulse: "throbber_circlePulse_1XN6Z",
      ThrobberTopCircleLoop: "throbber_ThrobberTopCircleLoop_1jALk",
      ThrobberBottomCircleLoop: "throbber_ThrobberBottomCircleLoop_1KvOg",
      roundThrobber15: "throbber_roundThrobber15_2LGHp",
      roundThrobber14: "throbber_roundThrobber14_2FGCn",
      roundThrobber13: "throbber_roundThrobber13_1X-5j",
      roundThrobber12: "throbber_roundThrobber12_1pj1Q",
      roundThrobber11: "throbber_roundThrobber11_xFmZa",
      roundThrobber10: "throbber_roundThrobber10_3MGYo",
      roundThrobber09: "throbber_roundThrobber09_ktVJ4",
      roundThrobber08: "throbber_roundThrobber08_3s_7m",
      roundThrobber07: "throbber_roundThrobber07_11MVp",
      roundThrobber06: "throbber_roundThrobber06_2cl-m",
      roundThrobber05: "throbber_roundThrobber05_3-JE0",
      roundThrobber04: "throbber_roundThrobber04_1xNIK",
      roundThrobber03: "throbber_roundThrobber03_1S17y",
      roundThrobber02: "throbber_roundThrobber02_1-oUJ",
      roundThrobber01: "throbber_roundThrobber01_2tXge",
      ThrobberRoundLoopThickness: "throbber_ThrobberRoundLoopThickness_1fs4R",
      throbber_xlarge: "throbber_throbber_xlarge_1gYeZ",
      throbber_xxlarge: "throbber_throbber_xxlarge_3j-p4"
    };
  },
  "6TF7": function(e, t, a) {
    e.exports = {
      nSmallEntryWidth: "600px",
      nOptionsWrapWidth: "777px",
      colorBlack: "app_colorBlack_1Twg4",
      colorWhite: "app_colorWhite_3oE_S",
      colorDarkGrey: "app_colorDarkGrey_3tphA",
      colorGrey: "app_colorGrey_3YqsH",
      colorLightGrey: "app_colorLightGrey_3pfPS",
      colorOrange: "app_colorOrange_1nodv",
      colorRed: "app_colorRed_29wGe",
      colorAqua: "app_colorAqua_2RcNN",
      colorBlue: "app_colorBlue_sqTzm",
      colorBrightRed: "app_colorBrightRed_1CXAL",
      colorBrightBlue: "app_colorBrightBlue_23fbL",
      colorBrightOrange: "app_colorBrightOrange_UdbrM",
      colorBrightPurple: "app_colorBrightPurple_WGNlF",
      colorBrightYellow: "app_colorBrightYellow_3K2vU",
      colorBrightGreen: "app_colorBrightGreen_3MZzT",
      colorBrightGrey: "app_colorBrightGrey_2T-cX",
      backgroundColorBlack: "app_backgroundColorBlack_3yP6s",
      backgroundColorDarkGrey: "app_backgroundColorDarkGrey_1OTAH",
      backgroundColorLightGrey: "app_backgroundColorLightGrey_1HbN4",
      backgroundColorWhite: "app_backgroundColorWhite_2uSHp",
      backgroundColorOrange: "app_backgroundColorOrange_1NKxH",
      backgroundColorRed: "app_backgroundColorRed_3nJpq",
      backgroundColorAqua: "app_backgroundColorAqua_2bjla",
      backgroundColorBlue: "app_backgroundColorBlue_1SlKy",
      backgroundColorGrey: "app_backgroundColorGrey_29zST",
      backgroundColorBrightRed: "app_backgroundColorBrightRed_2NRUx",
      backgroundColorBrightBlue: "app_backgroundColorBrightBlue_Y9AeT",
      backgroundColorBrightOrange: "app_backgroundColorBrightOrange_3-mT9",
      backgroundColorBrightPurple: "app_backgroundColorBrightPurple_3BbJw",
      backgroundColorBrightYellow: "app_backgroundColorBrightYellow_14P9t",
      backgroundColorBrightGreen: "app_backgroundColorBrightGreen_25ip8",
      backgroundColorBrightGrey: "app_backgroundColorBrightGrey_139am",
      App: "app_App_2uHYt",
      Login: "app_Login_MXvwu",
      Text: "app_Text_2FJKS",
      Container: "app_Container_3wbt9",
      TopSection: "app_TopSection_2GV0T",
      Header: "app_Header_2QbCs",
      Body: "app_Body_3BvIC",
      Spacer: "app_Spacer_dwZt2",
      BottomSection: "app_BottomSection_2FQVm",
      VerticalBar: "app_VerticalBar_1yt5e",
      PlaytimeList: "app_PlaytimeList_2o6_s",
      Loading: "app_Loading_1Vl4Z",
      IdentityBlock: "app_IdentityBlock_1lwF7",
      Avatar: "app_Avatar_2712Z",
      PersonalInfo: "app_PersonalInfo_1GKsY",
      Persona: "app_Persona_3uCFL",
      GameCount: "app_GameCount_2y5Fe",
      TotalTime: "app_TotalTime_2m3kE",
      PlayedGame: "app_PlayedGame_1IBXS",
      Ignored: "app_Ignored_3CDMe",
      PlaytimeInfo: "app_PlaytimeInfo_3xnmm",
      IgnoreToggle: "app_IgnoreToggle_32-2N",
      Logo: "app_Logo_yICkU",
      HoursPlayed: "app_HoursPlayed_3pRyO",
      Title: "app_Title_1egiL",
      LastPlayed: "app_LastPlayed_1xaO0",
      UpdateSaveBlock: "app_UpdateSaveBlock_3shyy",
      UpdateButton: "app_UpdateButton_1anQK",
      Enabled: "app_Enabled_24sJk",
      RecommendationList: "app_RecommendationList_3Hxm8",
      List: "app_List_2SIHd",
      Updating: "app_Updating_2ZpO2",
      RecommendationOptions: "app_RecommendationOptions_XB2CT",
      Row: "app_Row_2M7kD",
      SecondRow: "app_SecondRow_1s_bp",
      OptionCheckbox: "app_OptionCheckbox_3ONXD",
      Checkbox: "app_Checkbox_10M0W",
      WishlistCheckbox: "app_WishlistCheckbox_3Yttg",
      OptionSlider: "app_OptionSlider_2w3dR",
      Labels: "app_Labels_2gaDw",
      Min: "app_Min_2uKTb",
      Max: "app_Max_MzFCE",
      OptionalLabel: "app_OptionalLabel_WcOux",
      OptionDropdown: "app_OptionDropdown_3ZjDD",
      Label: "app_Label_2PLXD",
      OptionTagList: "app_OptionTagList_1vk97",
      SelectedTag: "app_SelectedTag_2X7U3",
      Close: "app_Close_24vX6",
      game_purchase_action: "app_game_purchase_action_13R4k",
      RecommendationEntry: "app_RecommendationEntry_2B7qq",
      BottomEntrySection: "app_BottomEntrySection_E5OsK",
      WishlistSection: "app_WishlistSection_2Q9UW",
      Hidden: "app_Hidden_1c-uY",
      TopEntrySection: "app_TopEntrySection_2n9PA",
      LeftSection: "app_LeftSection_11vww",
      Video: "app_Video_3XA5i",
      Revealed: "app_Revealed_291AN",
      UnMute: "app_UnMute_1m5xm",
      RightSection: "app_RightSection_1fjc9",
      CenterSection: "app_CenterSection_18LwU",
      CenterOption: "app_CenterOption_zD5a8",
      Name: "app_Name_1v_L9",
      Released: "app_Released_16PWF",
      BarContainer: "app_BarContainer_3JLfj",
      Bar: "app_Bar_2egwT",
      Score: "app_Score_2m_gH",
      Tags: "app_Tags_jv3eX",
      Tag: "app_Tag_3YuBE",
      Hovered: "app_Hovered_1qERs",
      Wishlisted: "app_Wishlisted_2dizG",
      PurchaseSection: "app_PurchaseSection_10cot",
      PurchaseBG: "app_PurchaseBG_36CAa",
      Price: "app_Price_3JBgo",
      WishlistFlag: "app_WishlistFlag_2yNvy",
      SelectionBox: "app_SelectionBox_Hwrdc",
      SuggestionInput: "app_SuggestionInput_2-k0l",
      SuggestionContainerOpen: "app_SuggestionContainerOpen_IuSJu",
      SuggestionsList: "app_SuggestionsList_kDB4t",
      OptionSuggestion: "app_OptionSuggestion_n-65v"
    };
  },
  Z7Ow: function(e, t, a) {},
  gfbn: function(e, t, a) {
    "use strict";
    a.r(t);
    var _ = a("mrSG"),
      n = a("vDqi"),
      d = a.n(n),
      A = {
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
        IMMEDIATE_IGNORE_UPDATE: !1,
        PERSISTENT_IGNORE: !1,
        DEFAULT_RECENCY_SLIDER: 0,
        DEFAULT_POPULARITY_SLIDER: 0
      },
      r = "application_config";
    function o() {
      var e = (function(e, t) {
        void 0 === t && (t = r);
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
      e && Object.assign(A, e);
    }
    var i = a("okNM"),
      l = a("q1tI"),
      P = a.n(l);
    function s(e) {
      if (!u() || !window.document.cookie) return null;
      var t = document.cookie.match("(^|; )" + e + "=([^;]*)");
      return t && t[2] ? decodeURIComponent(t[2]) : null;
    }
    function c(e, t, a, n) {
      if (u()) {
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
    function u() {
      return !!window.document;
    }
    var p = new ((function() {
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
              var n = s("app_impressions") || "";
              0 < n.length && (n += "|"),
                c("app_impressions", (n += e + "@" + t));
            }
          }),
          e
        );
      })())(),
      h = a("aqT/"),
      m = a.n(h);
    function E(e, t, a) {
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
    var M = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(_.d)(t, e),
          (t.prototype.onVisibilityChanged = function(e) {
            e && p.AddImpression(this.props.appID, this.props.snr);
          }),
          (t.prototype.render = function() {
            return P.a.createElement(
              m.a,
              { onChange: this.onVisibilityChanged },
              this.props.children
            );
          }),
          Object(_.c)([E], t.prototype, "onVisibilityChanged", null),
          t
        );
      })(P.a.Component),
      D = (a("2i24"),
      function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return e.reduce(function(e, t) {
          return t
            ? "string" == typeof t
              ? e
                ? e + " " + t
                : t
              : "object" == typeof t
              ? e
                ? e + " " + g(t)
                : g(t)
              : e
            : e;
        }, "");
      });
    function g(a) {
      return Object.keys(a).reduce(function(e, t) {
        return a[t] ? (e ? e + " " + t : t) : e;
      }, "");
    }
    a("Z7Ow");
    function U(e) {
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
    a("Gp1o");
    var b = {
      PerYear: 31536e3,
      PerMonth: 2628e3,
      PerWeek: 604800,
      PerDay: 86400,
      PerHour: 3600,
      PerMinute: 60
    };
    var v, f, S, y;
    function T(e, t) {
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
    ((f = v || (v = {}))[(f.k_EOtherEvent = 1)] = "k_EOtherEvent"),
      (f[(f.k_EGameEvent = 2)] = "k_EGameEvent"),
      (f[(f.k_EPartyEvent = 3)] = "k_EPartyEvent"),
      (f[(f.k_EMeetingEvent = 4)] = "k_EMeetingEvent"),
      (f[(f.k_ESpecialCauseEvent = 5)] = "k_ESpecialCauseEvent"),
      (f[(f.k_EMusicAndArtsEvent = 6)] = "k_EMusicAndArtsEvent"),
      (f[(f.k_ESportsEvent = 7)] = "k_ESportsEvent"),
      (f[(f.k_ETripEvent = 8)] = "k_ETripEvent"),
      (f[(f.k_EChatEvent = 9)] = "k_EChatEvent"),
      (f[(f.k_EGameReleaseEvent = 10)] = "k_EGameReleaseEvent"),
      (f[(f.k_EBroadcastEvent = 11)] = "k_EBroadcastEvent"),
      (f[(f.k_ESmallUpdateEvent = 12)] = "k_ESmallUpdateEvent"),
      (f[(f.k_ERegularUpdateEvent = 13)] = "k_ERegularUpdateEvent"),
      (f[(f.k_EMajorUpdateEvent = 14)] = "k_EMajorUpdateEvent"),
      (f[(f.k_EFutureReleaseEvent = 16)] = "k_EFutureReleaseEvent"),
      (f[(f.k_EESportTournamentStreamEvent = 17)] =
        "k_EESportTournamentStreamEvent"),
      (f[(f.k_EDevStreamEvent = 18)] = "k_EDevStreamEvent"),
      (f[(f.k_EFamousStreamEvent = 19)] = "k_EFamousStreamEvent"),
      (f[(f.k_EGameSalesEvent = 20)] = "k_EGameSalesEvent"),
      (f[(f.k_EGameItemSalesEvent = 21)] = "k_EGameItemSalesEvent"),
      (f[(f.k_EInGameBonusXPEvent = 22)] = "k_EInGameBonusXPEvent"),
      (f[(f.k_EInGameLootEvent = 23)] = "k_EInGameLootEvent"),
      (f[(f.k_EInGamePerksEvent = 24)] = "k_EInGamePerksEvent"),
      (f[(f.k_EInGameChallengeEvent = 25)] = "k_EInGameChallengeEvent"),
      (f[(f.k_EInGameContestEvent = 26)] = "k_EInGameContestEvent"),
      (f[(f.k_EIRLEvent = 27)] = "k_EIRLEvent"),
      (f[(f.k_ENewsEvent = 28)] = "k_ENewsEvent"),
      (f[(f.k_EBetaReleaseEvent = 29)] = "k_EBetaReleaseEvent"),
      (f[(f.k_EFreeTrial = 31)] = "k_EFreeTrial"),
      (f[(f.k_ESeasonRelease = 32)] = "k_ESeasonRelease"),
      (f[(f.k_ECrosspostEvent = 34)] = "k_ECrosspostEvent"),
      ((y = S || (S = {}))[(y.k_ELaunchSource_None = 0)] =
        "k_ELaunchSource_None"),
      (y[(y.k_ELaunchSource_2ftLibraryDetails = 100)] =
        "k_ELaunchSource_2ftLibraryDetails"),
      (y[(y.k_ELaunchSource_2ftLibraryListView = 101)] =
        "k_ELaunchSource_2ftLibraryListView"),
      (y[(y.k_ELaunchSource_2ftLibraryGrid = 103)] =
        "k_ELaunchSource_2ftLibraryGrid"),
      (y[(y.k_ELaunchSource_InstallSubComplete = 104)] =
        "k_ELaunchSource_InstallSubComplete"),
      (y[(y.k_ELaunchSource_DownloadsPage = 105)] =
        "k_ELaunchSource_DownloadsPage"),
      (y[(y.k_ELaunchSource_RemoteClientStartStreaming = 106)] =
        "k_ELaunchSource_RemoteClientStartStreaming"),
      (y[(y.k_ELaunchSource_2ftMiniModeList = 107)] =
        "k_ELaunchSource_2ftMiniModeList"),
      (y[(y.k_ELaunchSource_10ft = 200)] = "k_ELaunchSource_10ft"),
      (y[(y.k_ELaunchSource_DashAppLaunchCmdLine = 300)] =
        "k_ELaunchSource_DashAppLaunchCmdLine"),
      (y[(y.k_ELaunchSource_DashGameIdLaunchCmdLine = 301)] =
        "k_ELaunchSource_DashGameIdLaunchCmdLine"),
      (y[(y.k_ELaunchSource_RunByGameDir = 302)] =
        "k_ELaunchSource_RunByGameDir"),
      (y[(y.k_ELaunchSource_SubCmdRunDashGame = 303)] =
        "k_ELaunchSource_SubCmdRunDashGame"),
      (y[(y.k_ELaunchSource_SteamURL_Launch = 400)] =
        "k_ELaunchSource_SteamURL_Launch"),
      (y[(y.k_ELaunchSource_SteamURL_Run = 401)] =
        "k_ELaunchSource_SteamURL_Run"),
      (y[(y.k_ELaunchSource_SteamURL_JoinLobby = 402)] =
        "k_ELaunchSource_SteamURL_JoinLobby"),
      (y[(y.k_ELaunchSource_SteamURL_RunGame = 403)] =
        "k_ELaunchSource_SteamURL_RunGame"),
      (y[(y.k_ELaunchSource_SteamURL_RunGameIdOrJumplist = 404)] =
        "k_ELaunchSource_SteamURL_RunGameIdOrJumplist"),
      (y[(y.k_ELaunchSource_SteamURL_RunSafe = 405)] =
        "k_ELaunchSource_SteamURL_RunSafe"),
      (y[(y.k_ELaunchSource_TrayIcon = 500)] = "k_ELaunchSource_TrayIcon"),
      (y[(y.k_ELaunchSource_LibraryLeftColumnContextMenu = 600)] =
        "k_ELaunchSource_LibraryLeftColumnContextMenu"),
      (y[(y.k_ELaunchSource_LibraryLeftColumnDoubleClick = 601)] =
        "k_ELaunchSource_LibraryLeftColumnDoubleClick"),
      (y[(y.k_ELaunchSource_Dota2Launcher = 700)] =
        "k_ELaunchSource_Dota2Launcher"),
      (y[(y.k_ELaunchSource_IRunGameEngine = 800)] =
        "k_ELaunchSource_IRunGameEngine"),
      (y[(y.k_ELaunchSource_DRMFailureResponse = 801)] =
        "k_ELaunchSource_DRMFailureResponse"),
      (y[(y.k_ELaunchSource_DRMDataRequest = 802)] =
        "k_ELaunchSource_DRMDataRequest"),
      (y[(y.k_ELaunchSource_CloudFilePanel = 803)] =
        "k_ELaunchSource_CloudFilePanel"),
      (y[(y.k_ELaunchSource_DiscoveredAlreadyRunning = 804)] =
        "k_ELaunchSource_DiscoveredAlreadyRunning"),
      (y[(y.k_ELaunchSource_GameActionJoinParty = 900)] =
        "k_ELaunchSource_GameActionJoinParty");
    var L,
      R = {
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
        STORE_CDN_URL: "",
        PUBLIC_SHARED_URL: "",
        COMMUNITY_BASE_URL: "",
        CHAT_BASE_URL: "",
        STORE_BASE_URL: "",
        STORE_ICON_BASE_URL: "",
        IMG_URL: "",
        STEAMTV_BASE_URL: "",
        HELP_BASE_URL: "",
        PARTNER_BASE_URL: "",
        IN_CLIENT: !(y[(y.k_ELaunchSource_AppPortraitContextMenu = 1e3)] =
          "k_ELaunchSource_AppPortraitContextMenu"),
        USE_POPUPS: !1,
        IN_MOBILE: !1,
        IN_TENFOOT: !1,
        PLATFORM: "",
        LOCAL_HOSTNAME: "",
        WEBAPI_BASE_URL: "",
        TOKEN_URL: "",
        BUILD_TIMESTAMP: 0,
        PAGE_TIMESTAMP: 0,
        get SESSIONID() {
          return (function() {
            if (!u()) return L || (L = k()), L;
            var e = s("sessionid");
            e || (e = k());
            return e;
          })();
        },
        get BASE_URL() {
          var e = window.location.href;
          return e.startsWith(this.STORE_BASE_URL)
            ? this.STORE_BASE_URL
            : e.startsWith(this.COMMUNITY_BASE_URL)
            ? this.COMMUNITY_BASE_URL
            : e.startsWith(this.PARTNER_BASE_URL)
            ? this.PARTNER_BASE_URL
            : e.startsWith(this.HELP_BASE_URL)
            ? this.HELP_BASE_URL
            : "";
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
      return c("sessionid", e, 0), e;
    }
    var C = (function() {
      function e() {
        (this.m_mapTokens = new Map()), (this.m_mapFallbackTokens = new Map());
      }
      return (
        (e.prototype.InitFromObjects = function(a, n, r, o, e) {
          var i = this;
          e || this.m_mapTokens.clear(),
            r &&
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
            t.push(T(R.LANGUAGE)),
            (R.SUPPORTED_LANGUAGES || []).forEach(function(e) {
              e.value != R.LANGUAGE && t.push(T(e.value));
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
      for (var n = [], t = 1; t < arguments.length; t++)
        n[t - 1] = arguments[t];
      var a = N.LocalizeString(e);
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
    function B(e) {
      var t = new Date(1e3 * e),
        a = t.setHours(0, 0, 0, 0),
        n = O.get(a);
      if (n) return n;
      return (
        (n = t.toLocaleDateString(N.GetPreferredLocales(), {
          year: "numeric",
          month: "short",
          day: "numeric"
        })),
        O.set(a, n),
        n
      );
    }
    var O = new Map();
    new Map();
    new Map(), new Map(), new Map(), new Map();
    var N = new C();
    window.LocalizationManager = N;
    var I,
      x,
      j = a("6TF7"),
      G = a.n(j),
      F = a("1h/R"),
      V = a.n(F),
      W = function(e) {
        e.accountID;
        var t = le.getInputApps(),
          a = Object.keys(t).length,
          n = 0;
        return (
          Object.keys(t).map(function(e) {
            n += t[e].p;
          }),
          P.a.createElement(
            "div",
            { className: G.a.IdentityBlock },
            P.a.createElement("img", {
              className: G.a.Avatar,
              src: A.AVATAR_URL
            }),
            P.a.createElement(
              "div",
              { className: G.a.PersonalInfo },
              P.a.createElement(
                "div",
                { className: G.a.Persona },
                A.PERSONA_NAME
              ),
              P.a.createElement(
                "div",
                { className: G.a.GameCount },
                w("#PlaytimeList_RecentGames", a)
              ),
              P.a.createElement(
                "div",
                { className: G.a.TotalTime },
                w("#PlaytimeList_HoursTotal", n)
              )
            )
          )
        );
      },
      H = function(e) {
        var t = e.appID,
          a = e.name,
          n = e.hours,
          r = e.lastPlayed,
          o = e.ignored,
          i = A.CDN_URL + "apps/" + t + "/header.jpg",
          s = Date.now() / 1e3 - r,
          c = "";
        return (
          (c =
            r <= 86400
              ? w("#PlaytimeList_LastPlayedMax")
              : w(
                  "#PlaytimeList_LastPlayed",
                  31449600 < s
                    ? B(r)
                    : (function(e, t) {
                        void 0 === t && (t = !1);
                        var a = t ? "#TimeInterval_" : "#TimeSince_";
                        return e >= 2 * b.PerYear
                          ? w(a + "XYears", Math.floor(e / b.PerYear))
                          : e >= b.PerYear
                          ? (e -= b.PerYear) >= 2 * b.PerMonth
                            ? w(a + "1YearXMonths", Math.floor(e / b.PerMonth))
                            : w(a + "1Year")
                          : e >= 2 * b.PerMonth
                          ? w(a + "XMonths", Math.floor(e / b.PerMonth))
                          : e >= 2 * b.PerWeek
                          ? w(a + "XWeeks", Math.floor(e / b.PerWeek))
                          : e >= b.PerWeek
                          ? w(a + "1Week", Math.floor(e / b.PerWeek))
                          : e >= 2 * b.PerDay
                          ? w(a + "XDays", Math.floor(e / b.PerDay))
                          : e >= b.PerDay
                          ? (e -= b.PerDay) >= 2 * b.PerHour
                            ? w(a + "1DayXHours", Math.floor(e / b.PerHour))
                            : w(a + "1Day")
                          : e >= 2 * b.PerHour
                          ? w(a + "XHours", Math.floor(e / b.PerHour))
                          : e >= b.PerHour
                          ? (e -= b.PerHour) >= 2 * b.PerMinute
                            ? w(
                                a + "1HourXMinutes",
                                Math.floor(e / b.PerMinute)
                              )
                            : w(a + "1Hour")
                          : e >= 2 * b.PerMinute
                          ? w(a + "XMinutes", Math.floor(e / b.PerMinute))
                          : e >= b.PerMinute
                          ? w(a + "1Minute")
                          : w(a + "LessThanAMinute");
                      })(s)
                )),
          P.a.createElement(
            "div",
            { className: D(G.a.PlayedGame, o && G.a.Ignored) },
            P.a.createElement(
              "a",
              { href: A.BASE_URL + "app/" + t },
              P.a.createElement("img", { className: G.a.Logo, src: i })
            ),
            P.a.createElement(
              "div",
              { className: G.a.PlaytimeInfo },
              P.a.createElement(
                "div",
                { className: G.a.HoursPlayed },
                w("#PlaytimeList_Hours", n)
              ),
              P.a.createElement("div", { className: G.a.Title }, a),
              P.a.createElement("div", { className: G.a.LastPlayed }, c),
              P.a.createElement(
                "div",
                {
                  className: G.a.IgnoreToggle,
                  onClick: function() {
                    return le.onToggleIgnore(t);
                  }
                },
                w(o ? "#PlaytimeList_UnIgnore" : "#PlaytimeList_Ignore")
              )
            )
          )
        );
      },
      Y = (function(a) {
        function e(e) {
          var t = a.call(this, e) || this;
          return (t.state = {}), t;
        }
        return (
          Object(_.d)(e, a),
          (e.prototype.onUpdate = function() {
            le.m_bIgnoredEdited && le.onUpdateWithIgnored();
          }),
          (e.prototype.render = function() {
            return A.IMMEDIATE_IGNORE_UPDATE
              ? P.a.createElement("div", null)
              : P.a.createElement(
                  "div",
                  { className: G.a.UpdateSaveBlock },
                  P.a.createElement(
                    "div",
                    {
                      className: D(
                        G.a.UpdateButton,
                        le.m_bIgnoredEdited && G.a.Enabled
                      ),
                      onClick: this.onUpdate
                    },
                    w("#UpdateSaveBlock_Update")
                  )
                );
          }),
          Object(_.c)([E], e.prototype, "onUpdate", null),
          (e = Object(_.c)([i.a], e))
        );
      })(P.a.Component),
      q = (function(a) {
        function e(e) {
          var t = a.call(this, e) || this;
          return (t.state = {}), t;
        }
        return (
          Object(_.d)(e, a),
          (e.prototype.render = function() {
            var e = le.getInputApps(),
              a = [];
            if (!e)
              return P.a.createElement(
                "div",
                { className: G.a.PlaytimeList },
                P.a.createElement(
                  "div",
                  { className: G.a.Header },
                  w("#PlaytimeList_Header")
                ),
                P.a.createElement("div", { className: G.a.Loading })
              );
            le.getAppInfo();
            var n = e.slice().sort(function(e, t) {
              return t.l - e.l;
            });
            return (
              Object.keys(n).map(function(e) {
                var t = n[e];
                a.push(
                  P.a.createElement(H, {
                    key: "PlayedGame_" + t.a,
                    appID: t.a,
                    name: t.t,
                    hours: t.p,
                    lastPlayed: t.l,
                    ignored: t.i
                  })
                );
              }),
              P.a.createElement(
                "div",
                { className: G.a.PlaytimeList },
                P.a.createElement(
                  "div",
                  { className: G.a.Header },
                  w("#PlaytimeList_Header")
                ),
                P.a.createElement(W, { accountID: this.props.accountID }),
                P.a.createElement(Y, null),
                P.a.createElement("div", { className: G.a.List }, a)
              )
            );
          }),
          (e = Object(_.c)([i.a], e))
        );
      })(P.a.Component),
      X = function(e) {
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
          { className: G.a.OptionSlider },
          P.a.createElement("div", { className: G.a.Title }, t),
          P.a.createElement(
            "div",
            { className: G.a.Labels },
            P.a.createElement("div", { className: G.a.Min }, a),
            P.a.createElement("div", { className: G.a.Max }, n)
          ),
          P.a.createElement("input", {
            type: "range",
            min: r,
            max: o,
            step: (o - r) / 100,
            value: i,
            onChange: s
          }),
          P.a.createElement("div", { className: G.a.OptionalLabel }, u)
        );
      },
      z = function(e) {
        var t = e.className,
          a = e.titleLabel,
          n = e.checked,
          r = e.onChange;
        return P.a.createElement(
          "label",
          { className: D(G.a.OptionCheckbox, t && t) },
          P.a.createElement("input", {
            type: "checkbox",
            className: G.a.Checkbox,
            checked: n,
            onChange: r
          }),
          a
        );
      },
      K = (function(a) {
        function e(e) {
          var t = a.call(this, e) || this;
          return (
            (t.rgTags = []),
            (t.state = { value: "", suggestions: [], selected: [] }),
            t
          );
        }
        return (
          Object(_.d)(e, a),
          (e.prototype.componentDidMount = function() {
            var e = le.getTags();
            if (e)
              for (var t = 0, a = e; t < a.length; t++) {
                var n = a[t];
                this.rgTags.push({ id: parseInt(n.tagid), name: n.name });
              }
          }),
          (e.prototype.onFetchRequested = function(e) {
            var t = e.value.trim().toLowerCase(),
              a = t.length,
              n =
                0 === a
                  ? this.props.tagoptions.slice(0, 10)
                  : this.props.tagoptions.filter(function(e) {
                      return e.name.toLowerCase().slice(0, a) === t;
                    });
            this.setState({ suggestions: n });
          }),
          (e.prototype.onClearRequested = function() {
            this.setState({ suggestions: this.props.tagoptions });
          }),
          (e.prototype.onChange = function(e, t) {
            this.setState({ value: t.newValue });
          }),
          (e.prototype.onKeyDown = function(e) {
            if (13 == e.keyCode)
              for (var t = 0, a = this.props.tagoptions; t < a.length; t++) {
                var n = a[t];
                if (n.name.toLowerCase() == this.state.value.toLowerCase()) {
                  var r = {
                    suggestion: { id: n.id, name: n.name },
                    suggestionValue: n.name,
                    suggestionIndex: 0,
                    sectionIndex: 0,
                    method: "enter"
                  };
                  this.onSuggestionSelected(e, r);
                  break;
                }
              }
          }),
          (e.prototype.shouldRenderSuggestions = function(e) {
            return !0;
          }),
          (e.prototype.onSuggestionSelected = function(e, t) {
            for (
              var a = !1, n = 0, r = this.state.selected;
              n < r.length;
              n++
            ) {
              if (r[n].id == t.suggestion.id) {
                a = !0;
                break;
              }
            }
            var o = this.state.selected;
            a || (o.push(t.suggestion), this.props.onAddTag(t.suggestion.id)),
              this.setState({ value: "", selected: o });
          }),
          (e.prototype.onRemoveSelectedTag = function(e) {
            for (var t = this.state.selected, a = 0; a < t.length; a++)
              if (t[a].id == e) {
                this.props.onRemoveTag(t[a].id), t.splice(a, 1);
                break;
              }
            this.setState({ selected: t });
          }),
          (e.prototype.render = function() {
            for (
              var a = this,
                e = {
                  placeholder: w("#TagSelect"),
                  value: this.state.value,
                  onChange: this.onChange,
                  onKeyDown: this.onKeyDown
                },
                n = [],
                t = function(t) {
                  n.push(
                    P.a.createElement(
                      "div",
                      {
                        key: t.id,
                        className: G.a.SelectedTag,
                        onClick: function(e) {
                          return a.onRemoveSelectedTag(t.id);
                        }
                      },
                      P.a.createElement("div", null, t.name),
                      P.a.createElement("div", { className: G.a.Close }, "X")
                    )
                  );
                },
                r = 0,
                o = this.state.selected;
              r < o.length;
              r++
            ) {
              t(o[r]);
            }
            return P.a.createElement(
              "div",
              { className: G.a.OptionTagList },
              P.a.createElement(
                "div",
                { className: G.a.Label },
                this.props.title
              ),
              P.a.createElement(V.a, {
                suggestions: this.state.suggestions,
                onSuggestionsFetchRequested: this.onFetchRequested,
                onSuggestionsClearRequested: this.onClearRequested,
                onSuggestionSelected: this.onSuggestionSelected,
                shouldRenderSuggestions: this.shouldRenderSuggestions,
                getSuggestionValue: function(e) {
                  return e.name;
                },
                renderSuggestion: function(e) {
                  return P.a.createElement("div", null, e.name);
                },
                inputProps: e,
                theme: {
                  input: G.a.SuggestionInput,
                  suggestion: G.a.OptionSuggestion,
                  suggestionsList: G.a.SuggestionsList,
                  suggestionsContainerOpen: G.a.SuggestionContainerOpen
                }
              }),
              n
            );
          }),
          Object(_.c)([E], e.prototype, "onFetchRequested", null),
          Object(_.c)([E], e.prototype, "onClearRequested", null),
          Object(_.c)([E], e.prototype, "onChange", null),
          Object(_.c)([E], e.prototype, "onKeyDown", null),
          Object(_.c)([E], e.prototype, "shouldRenderSuggestions", null),
          Object(_.c)([E], e.prototype, "onSuggestionSelected", null),
          Object(_.c)([E], e.prototype, "onRemoveSelectedTag", null),
          e
        );
      })(P.a.Component),
      Q = Object(i.a)(function(e) {
        var t = le.getTags(),
          a = [],
          n = [];
        if (t)
          for (var r = 0, o = t; r < o.length; r++) {
            var i = o[r];
            a.push({ id: parseInt(i.tagid), name: i.name });
          }
        var s = [
          w("#FilterAge_120"),
          w("#FilterAge_60"),
          w("#FilterAge_36"),
          w("#FilterAge_24"),
          w("#FilterAge_12"),
          w("#FilterAge_6")
        ];
        return P.a.createElement(
          "div",
          { className: G.a.RecommendationOptions },
          P.a.createElement(
            "div",
            { className: D(G.a.Row, G.a.FirstRow) },
            P.a.createElement(X, {
              minLabel: w("#Popularity_Popular"),
              titleLabel: w("#Popularity_Title"),
              maxLabel: w("#Popularity_Niche"),
              minValue: 0,
              maxValue: 1,
              value: le.m_fQueuedPopularityValue,
              onChange: le.onPopularityChanged
            }),
            P.a.createElement(X, {
              minLabel: w("#Recency_Older"),
              titleLabel: w("#Recency_Title"),
              maxLabel: w("#Recency_Newer"),
              minValue: 0,
              maxValue: 1,
              value: le.m_fQueuedRecencyValue,
              onChange: le.onRecencyChanged,
              sliderLabels: s
            })
          ),
          P.a.createElement(
            "div",
            { className: D(G.a.Row, G.a.SecondRow) },
            P.a.createElement(K, {
              title: w("#TagFilterMultiple_Title"),
              tagoptions: a,
              selectedtags: n,
              onAddTag: le.onTagFilterAdd,
              onRemoveTag: le.onTagFilterRemove
            }),
            P.a.createElement(K, {
              title: w("#TagExcludeMultiple_Title"),
              tagoptions: a,
              selectedtags: n,
              onAddTag: le.onTagExcludeAdd,
              onRemoveTag: le.onTagExcludeRemove
            }),
            P.a.createElement(z, {
              className: G.a.WishlistCheckbox,
              titleLabel: w("#ExcludeWishlisted"),
              checked: le.m_bExcludeWishlisted,
              onChange: le.onExcludeWishlistedToggled
            })
          )
        );
      }),
      J = (function(a) {
        function e(e) {
          var t = a.call(this, e) || this;
          return (
            (t.m_videoRef = P.a.createRef()),
            (t.state = { hovered: !1, wishlisted: le.getAppInfo()[e.appID].w }),
            t
          );
        }
        return (
          Object(_.d)(e, a),
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
            le.shouldMute()
              ? (le.onUnMuteClicked(),
                this.m_videoRef &&
                  this.m_videoRef.current &&
                  (this.m_videoRef.current.muted = !1))
              : (le.onMuteClicked(),
                this.m_videoRef &&
                  this.m_videoRef.current &&
                  (this.m_videoRef.current.muted = !0)),
              e.preventDefault(),
              e.stopPropagation();
          }),
          (e.prototype.onAddToWishlist = function(e) {
            le.onAddToWishlist(this.props.appID, this.props.rank),
              this.setState({ wishlisted: !0 }),
              e.preventDefault(),
              e.stopPropagation();
          }),
          (e.prototype.onGoToWishlist = function(e) {
            le.onGoToWishlist(), e.preventDefault(), e.stopPropagation();
          }),
          (e.prototype.onAddToCart = function(e) {
            le.onAddToCart(this.props.appID, this.props.rank),
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
              s = le.getAppInfo()[a];
            if (!s) return P.a.createElement("div", null);
            var c = s.n,
              l = 0 < s.r ? w("#Recommendation_ReleasedOn", B(s.r)) : "",
              u = [];
            if (s.t)
              for (var p = 0, _ = 0, d = s.t; _ < d.length; _++) {
                var h = d[_];
                if (
                  (u.push(
                    P.a.createElement(
                      "div",
                      { key: a + "_" + h, className: G.a.Tag },
                      le.getTagName(h)
                    )
                  ),
                  5 == ++p)
                )
                  break;
              }
            var m = parseInt(G.a.nSmallEntryWidth),
              E = parseInt(G.a.nOptionsWrapWidth),
              g = 112,
              b = !0;
            o < m ? (b = !(g = 66)) : o < E && (b = !(g = 87));
            var v = b && this.state.hovered,
              f = Math.min(Number(n) / 10, 1e3),
              S = (Math.max(1, n), !1),
              y = !1,
              T = !0,
              L = "",
              R = "",
              k = "",
              C = "",
              O = "";
            if (v) {
              var N = le.getDetails(this.props.appID);
              N &&
                ((S = !0),
                (y = 0 < N.discount_pct),
                (T = "0" == N.discount_price),
                (O =
                  "probably" ==
                  document
                    .createElement("video")
                    .canPlayType('video/webm; codecs="vp8, vorbis"')
                    ? N.video_webm
                    : N.video_mp4),
                (L = "-" + N.discount_pct + "%"),
                (R = N.base_price),
                (k = T ? w("#FreeToPlay") : N.discount_price),
                (C = N.description));
            }
            var I = O && 0 < O.length;
            return P.a.createElement(
              M,
              { appID: a, snr: A.LINK_PARAM },
              P.a.createElement(
                "a",
                {
                  href: A.BASE_URL + "app/" + a + "?snr=" + A.LINK_PARAM,
                  onClick: function() {
                    return le.onAppClicked(a, r);
                  },
                  className: D(
                    G.a.RecommendationEntry,
                    "ds_flagged",
                    "ds_wishlist",
                    30 < r && G.a.Hidden,
                    v && G.a.Hovered
                  ),
                  style: { top: Math.min(31, r) * g },
                  onMouseEnter: this.OnHover,
                  onMouseLeave: this.OnUnHover
                },
                P.a.createElement(
                  "div",
                  { className: G.a.TopEntrySection },
                  P.a.createElement(
                    "div",
                    { className: G.a.LeftSection },
                    P.a.createElement("img", {
                      className: D(G.a.Logo, (!I || !v) && G.a.Revealed),
                      src: i
                    }),
                    P.a.createElement("video", {
                      ref: this.m_videoRef,
                      className: D(
                        "highlight_player_item",
                        "highlight_movie",
                        G.a.Video,
                        I && v && G.a.Revealed
                      ),
                      playsInline: !0,
                      autoPlay: !0,
                      muted: le.shouldMute(),
                      src: O
                    }),
                    P.a.createElement(
                      "div",
                      {
                        className: D(G.a.UnMute, I && G.a.Revealed),
                        onClick: function(e) {
                          return t.onMuteToggle(e);
                        }
                      },
                      P.a.createElement(U, { muted: le.shouldMute() })
                    ),
                    this.state.wishlisted &&
                      P.a.createElement(
                        "div",
                        {
                          className: D(
                            "ds_flag",
                            "ds_wishlist_flag",
                            G.a.WishlistFlag
                          )
                        },
                        w("#Recommendation_OnWishlist") + "  "
                      )
                  ),
                  P.a.createElement(
                    "div",
                    { className: G.a.RightSection },
                    P.a.createElement("div", { className: G.a.Name }, c),
                    P.a.createElement(
                      "div",
                      { className: G.a.CenterSection },
                      P.a.createElement(
                        "div",
                        {
                          className: D(
                            G.a.CenterOption,
                            G.a.CenterDefault,
                            v && G.a.Hidden
                          )
                        },
                        P.a.createElement(
                          "div",
                          { className: G.a.Released },
                          l
                        ),
                        P.a.createElement(
                          "div",
                          { className: G.a.BarContainer },
                          P.a.createElement("div", {
                            className: G.a.Bar,
                            style: { width: f + "%" }
                          })
                        ),
                        P.a.createElement("div", { className: G.a.Tags }, u)
                      ),
                      P.a.createElement(
                        "div",
                        {
                          className: D(
                            G.a.CenterOption,
                            G.a.CenterHovered,
                            !v && G.a.Hidden
                          )
                        },
                        C
                      )
                    ),
                    S &&
                      P.a.createElement(
                        "div",
                        { className: G.a.BottomEntrySection },
                        P.a.createElement(
                          "div",
                          {
                            className: D(
                              "game_purchase_action",
                              G.a.PurchaseSection
                            )
                          },
                          P.a.createElement(
                            "div",
                            {
                              className: D(
                                "game_purchase_action_bg",
                                G.a.PurchaseBG
                              )
                            },
                            y &&
                              P.a.createElement(
                                "div",
                                {
                                  className:
                                    "discount_block game_purchase_discount"
                                },
                                P.a.createElement(
                                  "div",
                                  { className: "discount_pct" },
                                  L
                                ),
                                P.a.createElement(
                                  "div",
                                  { className: "discount_prices" },
                                  P.a.createElement(
                                    "div",
                                    { className: "discount_original_price" },
                                    R
                                  ),
                                  P.a.createElement(
                                    "div",
                                    { className: "discount_final_price" },
                                    k
                                  )
                                )
                              ),
                            !y &&
                              P.a.createElement(
                                "div",
                                {
                                  className: D(
                                    "game_purchase_price",
                                    "price",
                                    G.a.Price
                                  )
                                },
                                k
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
                                    w("#btn_add_to_cart")
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
                              className: G.a.WishlistSection,
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
                                w("#wishlist_add_to_wishlist")
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
                                G.a.Wishlisted,
                                G.a.WishlistSection
                              ),
                              "data-tooltip-text": w("#OnWishlistTooltip"),
                              onClick: function(e) {
                                return t.onGoToWishlist(e);
                              }
                            },
                            P.a.createElement(
                              "span",
                              null,
                              P.a.createElement("img", {
                                src: A.IMG_URL_BASE + "/v6/ico/ico_selected.png"
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
          Object(_.c)([E], e.prototype, "OnHover", null),
          Object(_.c)([E], e.prototype, "OnUnHover", null),
          Object(_.c)([E], e.prototype, "onMuteToggle", null),
          Object(_.c)([E], e.prototype, "onAddToWishlist", null),
          Object(_.c)([E], e.prototype, "onGoToWishlist", null),
          Object(_.c)([E], e.prototype, "onAddToCart", null),
          (e = Object(_.c)([i.a], e))
        );
      })(P.a.Component),
      Z = (function(a) {
        function e(e) {
          var t = a.call(this, e) || this;
          return (t.state = { sortedRecommendedApps: [] }), t;
        }
        return (
          Object(_.d)(e, a),
          (e.prototype.render = function() {
            var e = le.m_fRecencyValue * (A.NUM_RECENCY_STEPS - 1 - 0.001),
              t = Math.floor(e),
              a = t + 1,
              n = 1 - (e - t),
              r = 1 - n,
              o = le.m_fPopularityValue * (A.NUM_POPULARITY_STEPS - 1 - 0.001),
              i = Math.floor(o),
              s = i + 1,
              c = 1 - (o - i),
              l = 1 - c,
              u = [];
            u.push({ index: i * A.NUM_RECENCY_STEPS + t, weight: c * n }),
              u.push({ index: s * A.NUM_RECENCY_STEPS + t, weight: l * n }),
              u.push({ index: i * A.NUM_RECENCY_STEPS + a, weight: c * r }),
              u.push({ index: s * A.NUM_RECENCY_STEPS + a, weight: l * r });
            var p = new Map(),
              _ = 0,
              d = le.getRecommendations(),
              h = le.getAppInfo(),
              m = [];
            if (d) {
              for (var E = 0, g = u; E < g.length; E++) {
                var b = g[E],
                  v = d[b.index];
                if (((_ = Math.max(_, v.score_scale)), v))
                  for (var f = 0; f < v.app_ids.length; f++) {
                    var S = v.app_ids[f];
                    if (
                      !(
                        !h[S] ||
                        h[S].o ||
                        h[S].i ||
                        h[S].ti ||
                        (h[S].w && le.m_bExcludeWishlisted)
                      )
                    ) {
                      var y =
                        (p.get(S) || 0) +
                        v.scores[f] * b.weight * v.score_scale;
                      p.set(S, y);
                    }
                  }
              }
              p.forEach(function(e, t) {
                return p.set(t, e / _);
              });
              var T = [];
              p.forEach(function(e, t) {
                return T.push({ appid: t, score: e });
              });
              for (
                var L = (T = (T = (T = T.filter(function(e) {
                    return h[e.appid].t && le.doTagsPassFilter(h[e.appid].t);
                  })).filter(function(e) {
                    return (
                      h[e.appid].t && !le.doTagsFailExclusion(h[e.appid].t)
                    );
                  })).filter(function(e) {
                    return 0 < e.score;
                  })).sort(function(e, t) {
                    return t.score - e.score;
                  }),
                  R = 0,
                  k = 0,
                  C = (L = L.slice(0, 30));
                k < C.length;
                k++
              ) {
                (C[k].rank = R), R++;
              }
              for (
                var O = 0,
                  N = L.sort(function(e, t) {
                    return t.appid - e.appid;
                  });
                O < N.length;
                O++
              ) {
                var I = N[O];
                m.push(
                  P.a.createElement(J, {
                    key: I.appid,
                    appID: I.appid,
                    score: I.score,
                    rank: I.rank,
                    width: this.props.width
                  })
                );
              }
            } else
              m.push(
                P.a.createElement("div", {
                  key: "recommendations_loading",
                  className: G.a.RecommendationsLoading
                })
              );
            return P.a.createElement(
              "div",
              { className: G.a.RecommendationList },
              P.a.createElement(
                "div",
                { className: G.a.Header },
                w("#Recommendations_Header")
              ),
              P.a.createElement(Q, null),
              P.a.createElement(
                "div",
                {
                  className: D(G.a.List, le.areResultsExpired() && G.a.Updating)
                },
                m
              )
            );
          }),
          (e = Object(_.c)([i.a], e))
        );
      })(P.a.Component),
      $ = (function(a) {
        function e(e) {
          var t = a.call(this, e) || this;
          return (t.state = { width: window.innerWidth }), t;
        }
        return (
          Object(_.d)(e, a),
          (e.prototype.updateDimensions = function() {
            this.setState({ width: window.innerWidth });
          }),
          (e.prototype.componentDidMount = function() {
            window.addEventListener("resize", this.updateDimensions);
          }),
          (e.prototype.render = function() {
            return 0 == A.ACCOUNT_ID
              ? P.a.createElement(
                  "div",
                  { className: G.a.App },
                  P.a.createElement(
                    "div",
                    { className: G.a.Login },
                    P.a.createElement(
                      "div",
                      { className: G.a.Text },
                      w("#LoginText")
                    ),
                    P.a.createElement(
                      "a",
                      {
                        className: D(
                          "btn_green_white_innerfade",
                          " btn_medium"
                        ),
                        href: A.LOGIN_REDIRECT
                      },
                      P.a.createElement("span", null, w("#LoginButton"))
                    )
                  )
                )
              : P.a.createElement(
                  "div",
                  {
                    className: G.a.App,
                    style: { height: 3840 + 26 * le.getTagHeight() }
                  },
                  P.a.createElement(
                    "div",
                    { className: G.a.Container },
                    P.a.createElement(
                      "div",
                      { className: G.a.TopSection },
                      P.a.createElement(
                        "div",
                        { className: G.a.Header },
                        w("#HeaderTitle")
                      ),
                      P.a.createElement(
                        "div",
                        { className: G.a.Body },
                        w("#HeaderBody1")
                      ),
                      P.a.createElement("div", { className: G.a.Spacer }),
                      P.a.createElement(
                        "div",
                        { className: G.a.Body },
                        w("#HeaderBody2")
                      ),
                      P.a.createElement("div", { className: G.a.Spacer }),
                      P.a.createElement(
                        "div",
                        { className: G.a.Body },
                        (function(e) {
                          for (var t = [], a = 1; a < arguments.length; a++)
                            t[a - 1] = arguments[a];
                          var n = N.LocalizeString(e);
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
                              Object(_.f)([l.Fragment, null], o)
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
                            w("#HeaderBody3a")
                          )
                        )
                      )
                    ),
                    P.a.createElement(
                      "div",
                      { className: G.a.BottomSection },
                      P.a.createElement(q, { accountID: A.ACCOUNT_ID }),
                      P.a.createElement("div", { className: G.a.VerticalBar }),
                      P.a.createElement(Z, { width: this.state.width })
                    )
                  )
                );
          }),
          Object(_.c)([E], e.prototype, "updateDimensions", null),
          (e = Object(_.c)([i.a], e))
        );
      })(P.a.Component),
      ee = a("2vnA"),
      te = a("i8i4");
    ((x = I || (I = {}))[(x.Unrequested = 0)] = "Unrequested"),
      (x[(x.Pending = 1)] = "Pending"),
      (x[(x.Valid = 2)] = "Valid"),
      (x[(x.Failed = 3)] = "Failed"),
      (x[(x.Rerequest = 4)] = "Rerequest");
    var ae,
      ne,
      re = (function() {
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
          Object(_.c)([ee.v], e.prototype, "data", void 0),
          Object(_.c)([ee.v], e.prototype, "nExpirationTime", void 0),
          e
        );
      })();
    ((ne = ae || (ae = {}))[(ne.ClickThrough = 1)] = "ClickThrough"),
      (ne[(ne.AddToWishlist = 2)] = "AddToWishlist"),
      (ne[(ne.AddToCart = 3)] = "AddToCart");
    var oe = (function() {
      function e() {
        var e = this;
        (this.m_rgFilterTags = []),
          (this.m_rgExcludeTags = []),
          (this.m_mapAppDetailsCache = new Map()),
          (this.m_ResultDataCache = new re()),
          (this.m_InputAppsCache = new re()),
          (this.m_TagsCache = new re()),
          (this.m_TagNameMap = new Map()),
          (this.m_fPopularityValue = window.history.state
            ? window.history.state.popularity
            : 0.25),
          (this.m_fRecencyValue = window.history.state
            ? window.history.state.recency
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
          te.render(
            l.createElement($, { app: this }),
            document.getElementById("recommender_root")
          ),
            A.RESET_OPTIONS &&
              ((this.m_fPopularityValue = A.DEFAULT_POPULARITY_SLIDER),
              (this.m_fRecencyValue = A.DEFAULT_RECENCY_SLIDER),
              (this.m_fQueuedPopularityValue = this.m_fPopularityValue),
              (this.m_fQueuedRecencyValue = this.m_fRecencyValue),
              (this.m_bExcludeWishlisted = !1),
              (this.m_bStateUpdated = !0));
        }),
        (e.prototype.getDetails = function(t) {
          var e = this;
          return (
            this.m_mapAppDetailsCache.has(t) ||
              this.m_mapAppDetailsCache.set(t, new re()),
            this.m_mapAppDetailsCache.get(t).getData(
              60,
              function() {
                return Object(_.b)(e, void 0, void 0, function() {
                  return Object(_.e)(this, function(e) {
                    switch (e.label) {
                      case 0:
                        return [
                          4,
                          d.a.get(
                            A.BASE_URL +
                              "recommender/" +
                              A.STEAM_ID +
                              "/details?appid=" +
                              t +
                              "&sessionid=" +
                              A.SESSION_ID
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
            return (
              Object.keys(u).map(function(e) {
                u[e].i && p.push(u[e].a);
              }),
              0 < p.length && (l = "&ignored=" + p.join()),
              this.m_ResultDataCache.getData(
                9999999,
                function() {
                  return Object(_.b)(r, void 0, void 0, function() {
                    return Object(_.e)(this, function(e) {
                      switch (e.label) {
                        case 0:
                          return [
                            4,
                            d.a.get(
                              A.BASE_URL +
                                "recommender/" +
                                A.STEAM_ID +
                                "/results?sessionid=" +
                                A.SESSION_ID +
                                "&steamid=" +
                                A.STEAM_ID +
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
              )
            );
          }
        }),
        (e.prototype.areResultsExpired = function() {
          return this.m_ResultDataCache.isExpired();
        }),
        (e.prototype.getRecommendations = function() {
          var e = le.getResults(
            A.INCLUDE_PLAYED,
            A.ALGORITHM,
            A.REINFERENCE,
            A.MODEL_VERSION
          );
          return e ? e.recommendations : void 0;
        }),
        (e.prototype.getInputApps = function() {
          var e = this;
          return this.m_InputAppsCache.getData(
            9999999,
            function() {
              return Object(_.b)(e, void 0, void 0, function() {
                return Object(_.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return [
                        4,
                        d.a.get(
                          A.BASE_URL +
                            "recommender/" +
                            A.STEAM_ID +
                            "/inputs?sessionid=" +
                            A.SESSION_ID +
                            "&steamid=" +
                            A.STEAM_ID
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
          var e = le.getResults(
            A.INCLUDE_PLAYED,
            A.ALGORITHM,
            A.REINFERENCE,
            A.MODEL_VERSION
          );
          return e ? e.app_info : void 0;
        }),
        (e.prototype.getTags = function() {
          var r = this;
          return this.m_TagsCache.getData(
            9999999,
            function() {
              return Object(_.b)(r, void 0, void 0, function() {
                return Object(_.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return [
                        4,
                        d.a.get(
                          A.BASE_URL +
                            "recommender/" +
                            A.STEAM_ID +
                            "/tags?sessionid=" +
                            A.SESSION_ID
                        )
                      ];
                    case 1:
                      return [2, e.sent()];
                  }
                });
              });
            },
            function(e) {
              r.m_TagNameMap.clear();
              for (var t = 0, a = e.data; t < a.length; t++) {
                var n = a[t];
                r.m_TagNameMap.set(n.tagid, n.name);
              }
              return e.data;
            }
          );
        }),
        (e.prototype.getTagName = function(e) {
          return this.getTags(), this.m_TagNameMap.get(e);
        }),
        (e.prototype.getTagHeight = function() {
          return Math.max(
            this.m_rgFilterTags.length,
            this.m_rgExcludeTags.length
          );
        }),
        (e.prototype.onPopularityChanged = function(e) {
          this.m_fQueuedPopularityValue = Number(e.target.value);
        }),
        (e.prototype.onRecencyChanged = function(e) {
          this.m_fQueuedRecencyValue = Number(e.target.value);
        }),
        (e.prototype.onTagFilterAdd = function(e) {
          this.m_rgFilterTags.push(e), (this.m_bStateUpdated = !0);
        }),
        (e.prototype.onTagFilterRemove = function(e) {
          for (var t = 0; t < this.m_rgFilterTags.length; t++)
            if (this.m_rgFilterTags[t] == e) {
              this.m_rgFilterTags.splice(t, 1);
              break;
            }
          this.m_bStateUpdated = !0;
        }),
        (e.prototype.onTagExcludeAdd = function(e) {
          this.m_rgExcludeTags.push(e), (this.m_bStateUpdated = !0);
        }),
        (e.prototype.onTagExcludeRemove = function(e) {
          for (var t = 0; t < this.m_rgExcludeTags.length; t++)
            if (this.m_rgExcludeTags[t] == e) {
              this.m_rgExcludeTags.splice(t, 1);
              break;
            }
          this.m_bStateUpdated = !0;
        }),
        (e.prototype.doTagsPassFilter = function(e) {
          for (var t = 0, a = this.m_rgFilterTags; t < a.length; t++) {
            var n = a[t];
            if (-1 == e.indexOf(n)) return !1;
          }
          return !0;
        }),
        (e.prototype.doTagsFailExclusion = function(e) {
          for (var t = 0, a = this.m_rgExcludeTags; t < a.length; t++) {
            var n = a[t];
            if (-1 != e.indexOf(n)) return !0;
          }
          return !1;
        }),
        (e.prototype.onExcludeWishlistedToggled = function(e) {
          (this.m_bExcludeWishlisted = !this.m_bExcludeWishlisted),
            (this.m_bStateUpdated = !0);
        }),
        (e.prototype.onToggleIgnore = function(s) {
          return Object(_.b)(this, void 0, void 0, function() {
            var t, a, n, r, o, i;
            return Object(_.e)(this, function(e) {
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
                    A.IMMEDIATE_IGNORE_UPDATE &&
                      this.m_ResultDataCache.expireData(),
                    (this.m_bIgnoredEdited = !0),
                    A.PERSISTENT_IGNORE
                      ? ((i = {
                          sessionid: A.SESSION_ID,
                          appid: s,
                          remove: a ? 1 : 0,
                          ignore_reason: 3
                        }),
                        [
                          4,
                          d.a.post(
                            A.BASE_URL + "recommended/ignorerecommendation/",
                            i
                          )
                        ])
                      : [3, 2]
                  );
                case 1:
                  e.sent(), (e.label = 2);
                case 2:
                  return [2];
              }
            });
          });
        }),
        (e.prototype.onUpdateWithIgnored = function() {
          this.m_ResultDataCache.expireData(), (this.m_bIgnoredEdited = !1);
        }),
        (e.prototype.onAppClicked = function(a, n) {
          return Object(_.b)(this, void 0, void 0, function() {
            var t;
            return Object(_.e)(this, function(e) {
              switch (e.label) {
                case 0:
                  return (
                    (t = {
                      account_id: A.ACCOUNT_ID,
                      session_id: A.SESSION_ID,
                      app_id: a,
                      app_rank: n,
                      action: ae.ClickThrough,
                      algorithm: 1,
                      setting_1: 100 * this.m_fPopularityValue,
                      setting_2: 100 * this.m_fRecencyValue
                    }),
                    [
                      4,
                      d.a.post(
                        A.BASE_URL + "recommender/" + A.STEAM_ID + "/stats",
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
          return Object(_.b)(this, void 0, void 0, function() {
            var t, a, n;
            return Object(_.e)(this, function(e) {
              switch (e.label) {
                case 0:
                  return (
                    (le.getAppInfo()[r].w = !0),
                    (t = { sessionid: A.SESSION_ID, appid: r }),
                    [
                      4,
                      d.a.post(
                        A.BASE_URL +
                          "recommender/" +
                          A.STEAM_ID +
                          "/wishlist?snr=" +
                          A.LINK_PARAM,
                        t
                      )
                    ]
                  );
                case 1:
                  return (
                    (a = e.sent()),
                    (n = {
                      account_id: A.ACCOUNT_ID,
                      session_id: A.SESSION_ID,
                      app_id: r,
                      app_rank: o,
                      action: ae.AddToWishlist,
                      algorithm: 1,
                      setting_1: 100 * this.m_fPopularityValue,
                      setting_2: 100 * this.m_fRecencyValue
                    }),
                    [
                      4,
                      d.a.post(
                        A.BASE_URL + "recommender/" + A.STEAM_ID + "/stats",
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
            A.COMMUNITY_BASE_URL + "profiles/" + A.STEAM_ID + "/wishlist";
        }),
        (e.prototype.onAddToCart = function(n, r) {
          return Object(_.b)(this, void 0, void 0, function() {
            var t, a;
            return Object(_.e)(this, function(e) {
              switch (e.label) {
                case 0:
                  return (
                    (t = { sessionid: A.SESSION_ID, appid: n }),
                    [
                      4,
                      d.a.post(
                        A.BASE_URL +
                          "recommender/" +
                          A.STEAM_ID +
                          "/cart?snr=" +
                          A.LINK_PARAM,
                        t
                      )
                    ]
                  );
                case 1:
                  return (
                    e.sent(),
                    (a = {
                      account_id: A.ACCOUNT_ID,
                      session_id: A.SESSION_ID,
                      app_id: n,
                      app_rank: r,
                      action: ae.AddToCart,
                      algorithm: 1,
                      setting_1: 100 * this.m_fPopularityValue,
                      setting_2: 100 * this.m_fRecencyValue
                    }),
                    [
                      4,
                      d.a.post(
                        A.BASE_URL + "recommender/" + A.STEAM_ID + "/stats",
                        a
                      )
                    ]
                  );
                case 2:
                  return (
                    e.sent(),
                    (window.location.href = A.STORE_BASE_URL + "cart"),
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
        Object(_.c)([ee.v], e.prototype, "m_fPopularityValue", void 0),
        Object(_.c)([ee.v], e.prototype, "m_fRecencyValue", void 0),
        Object(_.c)([ee.v], e.prototype, "m_rgFilterTags", void 0),
        Object(_.c)([ee.v], e.prototype, "m_rgExcludeTags", void 0),
        Object(_.c)([ee.v], e.prototype, "m_fQueuedPopularityValue", void 0),
        Object(_.c)([ee.v], e.prototype, "m_fQueuedRecencyValue", void 0),
        Object(_.c)([ee.v], e.prototype, "m_bExcludeWishlisted", void 0),
        Object(_.c)([ee.v], e.prototype, "m_bShouldMute", void 0),
        Object(_.c)([ee.v], e.prototype, "m_bIgnoredEdited", void 0),
        Object(_.c)([E], e.prototype, "getTagHeight", null),
        Object(_.c)([E], e.prototype, "onPopularityChanged", null),
        Object(_.c)([E], e.prototype, "onRecencyChanged", null),
        Object(_.c)([E], e.prototype, "onTagFilterAdd", null),
        Object(_.c)([E], e.prototype, "onTagFilterRemove", null),
        Object(_.c)([E], e.prototype, "onTagExcludeAdd", null),
        Object(_.c)([E], e.prototype, "onTagExcludeRemove", null),
        Object(_.c)([E], e.prototype, "doTagsPassFilter", null),
        Object(_.c)([E], e.prototype, "doTagsFailExclusion", null),
        Object(_.c)([E], e.prototype, "onExcludeWishlistedToggled", null),
        Object(_.c)([E], e.prototype, "onToggleIgnore", null),
        Object(_.c)([E], e.prototype, "onUpdateWithIgnored", null),
        Object(_.c)([E], e.prototype, "onAppClicked", null),
        Object(_.c)([E], e.prototype, "onAddToWishlist", null),
        Object(_.c)([E], e.prototype, "onGoToWishlist", null),
        Object(_.c)([E], e.prototype, "onAddToCart", null),
        Object(_.c)([E], e.prototype, "onMuteClicked", null),
        Object(_.c)([E], e.prototype, "onUnMuteClicked", null),
        Object(_.c)([E], e.prototype, "shouldMute", null),
        e
      );
    })();
    a.d(t, "g_App", function() {
      return le;
    });
    var ie,
      se,
      ce,
      le = new oe();
    document.addEventListener("DOMContentLoaded", function() {
      o(), le.Init();
    }),
      (window.LocalizationReady = function(e, t, a) {
        if ("english" !== t) "main" == e ? (ie = a) : "shared" == e && (se = a);
        else if ("shared" == e) ce = a;
        else {
          var n = void 0,
            r = null,
            o = void 0,
            i = null;
          void 0 !== ie ? ((n = ie), (r = a)) : (n = a),
            void 0 !== se ? ((o = se), (i = ce)) : (o = ce),
            N.InitFromObjects(n, r, o, i),
            (ce = se = ie = void 0);
        }
      });
  }
});

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
    for (d && d(e); s.length; ) s.shift()();
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
  var d = n;
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
      Title: "app_Title_1C2xv",
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
      WishlistCheckbox: "app_WishlistCheckbox_3awsX",
      OptionSlider: "app_OptionSlider_sLHtG",
      Labels: "app_Labels_vq2C2",
      Min: "app_Min_2zfSC",
      Max: "app_Max_4ugol",
      OptionalLabel: "app_OptionalLabel_x7Ol7",
      OptionDropdown: "app_OptionDropdown_OpsgV",
      Label: "app_Label_2-25b",
      OptionTagList: "app_OptionTagList_1ion4",
      SelectedTag: "app_SelectedTag_37dZL",
      Close: "app_Close_3dhm3",
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
      SelectionBox: "app_SelectionBox_1ydvC",
      SuggestionInput: "app_SuggestionInput_17Ifb",
      SuggestionContainerOpen: "app_SuggestionContainerOpen_3pqlK",
      SuggestionsList: "app_SuggestionsList_2CJTF",
      OptionSuggestion: "app_OptionSuggestion_3GG0D"
    };
  },
  gfbn: function(e, t, a) {
    "use strict";
    a.r(t);
    var d = a("mrSG"),
      n = a("vDqi"),
      _ = a.n(n),
      P = {
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
        PERSISTENT_IGNORE: !1
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
      e && Object.assign(P, e);
    }
    var i = a("okNM"),
      l = a("q1tI"),
      M = a.n(l);
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
    function g(e, t, a) {
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
    var D = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          d.d(t, e),
          (t.prototype.onVisibilityChanged = function(e) {
            e && p.AddImpression(this.props.appID, this.props.snr);
          }),
          (t.prototype.render = function() {
            return M.a.createElement(
              m.a,
              { onChange: this.onVisibilityChanged },
              this.props.children
            );
          }),
          d.c([g], t.prototype, "onVisibilityChanged", null),
          t
        );
      })(M.a.Component),
      O = (a("2i24"),
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
                ? e + " " + E(t)
                : E(t)
              : e
            : e;
        }, "");
      });
    function E(a) {
      return Object.keys(a).reduce(function(e, t) {
        return a[t] ? (e ? e + " " + t : t) : e;
      }, "");
    }
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
    var v = {
      PerYear: 31536e3,
      PerMonth: 2628e3,
      PerWeek: 604800,
      PerDay: 86400,
      PerHour: 3600,
      PerMinute: 60
    };
    var f, b, S, y;
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
    ((b = f || (f = {}))[(b.k_EOtherEvent = 1)] = "k_EOtherEvent"),
      (b[(b.k_EGameEvent = 2)] = "k_EGameEvent"),
      (b[(b.k_EPartyEvent = 3)] = "k_EPartyEvent"),
      (b[(b.k_EMeetingEvent = 4)] = "k_EMeetingEvent"),
      (b[(b.k_ESpecialCauseEvent = 5)] = "k_ESpecialCauseEvent"),
      (b[(b.k_EMusicAndArtsEvent = 6)] = "k_EMusicAndArtsEvent"),
      (b[(b.k_ESportsEvent = 7)] = "k_ESportsEvent"),
      (b[(b.k_ETripEvent = 8)] = "k_ETripEvent"),
      (b[(b.k_EChatEvent = 9)] = "k_EChatEvent"),
      (b[(b.k_EGameReleaseEvent = 10)] = "k_EGameReleaseEvent"),
      (b[(b.k_EBroadcastEvent = 11)] = "k_EBroadcastEvent"),
      (b[(b.k_ESmallUpdateEvent = 12)] = "k_ESmallUpdateEvent"),
      (b[(b.k_ERegularUpdateEvent = 13)] = "k_ERegularUpdateEvent"),
      (b[(b.k_EMajorUpdateEvent = 14)] = "k_EMajorUpdateEvent"),
      (b[(b.k_EFutureReleaseEvent = 16)] = "k_EFutureReleaseEvent"),
      (b[(b.k_EESportTournamentStreamEvent = 17)] =
        "k_EESportTournamentStreamEvent"),
      (b[(b.k_EDevStreamEvent = 18)] = "k_EDevStreamEvent"),
      (b[(b.k_EFamousStreamEvent = 19)] = "k_EFamousStreamEvent"),
      (b[(b.k_EGameSalesEvent = 20)] = "k_EGameSalesEvent"),
      (b[(b.k_EGameItemSalesEvent = 21)] = "k_EGameItemSalesEvent"),
      (b[(b.k_EInGameBonusXPEvent = 22)] = "k_EInGameBonusXPEvent"),
      (b[(b.k_EInGameLootEvent = 23)] = "k_EInGameLootEvent"),
      (b[(b.k_EInGamePerksEvent = 24)] = "k_EInGamePerksEvent"),
      (b[(b.k_EInGameChallengeEvent = 25)] = "k_EInGameChallengeEvent"),
      (b[(b.k_EInGameContestEvent = 26)] = "k_EInGameContestEvent"),
      (b[(b.k_EIRLEvent = 27)] = "k_EIRLEvent"),
      (b[(b.k_ENewsEvent = 28)] = "k_ENewsEvent"),
      (b[(b.k_EBetaReleaseEvent = 29)] = "k_EBetaReleaseEvent"),
      (b[(b.k_EFreeTrial = 31)] = "k_EFreeTrial"),
      (b[(b.k_ESeasonRelease = 32)] = "k_ESeasonRelease"),
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
      k = {
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
        IN_CLIENT: !(y[(y.k_ELaunchSource_AppPortraitContextMenu = 1e3)] =
          "k_ELaunchSource_AppPortraitContextMenu"),
        USE_POPUPS: !1,
        IN_MOBILE: !1,
        IN_TENFOOT: !1,
        LOCAL_HOSTNAME: "",
        WEBAPI_BASE_URL: "",
        TOKEN_URL: "",
        BUILD_TIMESTAMP: 0,
        PAGE_TIMESTAMP: 0,
        get SESSIONID() {
          return (function() {
            if (!u()) return L || (L = R()), L;
            var e = s("sessionid");
            e || (e = R());
            return e;
          })();
        },
        FRIENDSUI_BETA: !1,
        STEAM_TV: !1,
        DEV_MODE: !1,
        OFFLINE_MODE: !1
      };
    function R() {
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
            t.push(T(k.LANGUAGE)),
            (k.SUPPORTED_LANGUAGES || []).forEach(function(e) {
              e.value != k.LANGUAGE && t.push(T(e.value));
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
        n = I.get(a);
      if (n) return n;
      return (
        (n = t.toLocaleDateString(N.GetPreferredLocales(), {
          year: "numeric",
          month: "short",
          day: "numeric"
        })),
        I.set(a, n),
        n
      );
    }
    var I = new Map();
    new Map();
    new Map(), new Map(), new Map(), new Map();
    var N = new C();
    window.LocalizationManager = N;
    var A,
      x,
      G = a("6TF7"),
      F = a.n(G),
      V = a("1h/R"),
      W = a.n(V),
      H = function(e) {
        e.accountID;
        var t = le.getInputApps(),
          a = Object.keys(t).length,
          n = 0;
        return (
          Object.keys(t).map(function(e) {
            n += t[e].p;
          }),
          M.a.createElement(
            "div",
            { className: F.a.IdentityBlock },
            M.a.createElement("img", {
              className: F.a.Avatar,
              src: P.AVATAR_URL
            }),
            M.a.createElement(
              "div",
              { className: F.a.PersonalInfo },
              M.a.createElement(
                "div",
                { className: F.a.Persona },
                P.PERSONA_NAME
              ),
              M.a.createElement(
                "div",
                { className: F.a.GameCount },
                w("#PlaytimeList_RecentGames", a)
              ),
              M.a.createElement(
                "div",
                { className: F.a.TotalTime },
                w("#PlaytimeList_HoursTotal", n)
              )
            )
          )
        );
      },
      Y = function(e) {
        var t = e.appID,
          a = e.name,
          n = e.hours,
          r = e.lastPlayed,
          o = e.ignored,
          i = P.CDN_URL + "apps/" + t + "/header.jpg",
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
                        return e >= 2 * v.PerYear
                          ? w(a + "XYears", Math.floor(e / v.PerYear))
                          : e >= v.PerYear
                          ? (e -= v.PerYear) >= 2 * v.PerMonth
                            ? w(a + "1YearXMonths", Math.floor(e / v.PerMonth))
                            : w(a + "1Year")
                          : e >= 2 * v.PerMonth
                          ? w(a + "XMonths", Math.floor(e / v.PerMonth))
                          : e >= 2 * v.PerWeek
                          ? w(a + "XWeeks", Math.floor(e / v.PerWeek))
                          : e >= v.PerWeek
                          ? w(a + "1Week", Math.floor(e / v.PerWeek))
                          : e >= 2 * v.PerDay
                          ? w(a + "XDays", Math.floor(e / v.PerDay))
                          : e >= v.PerDay
                          ? (e -= v.PerDay) >= 2 * v.PerHour
                            ? w(a + "1DayXHours", Math.floor(e / v.PerHour))
                            : w(a + "1Day")
                          : e >= 2 * v.PerHour
                          ? w(a + "XHours", Math.floor(e / v.PerHour))
                          : e >= v.PerHour
                          ? (e -= v.PerHour) >= 2 * v.PerMinute
                            ? w(
                                a + "1HourXMinutes",
                                Math.floor(e / v.PerMinute)
                              )
                            : w(a + "1Hour")
                          : e >= 2 * v.PerMinute
                          ? w(a + "XMinutes", Math.floor(e / v.PerMinute))
                          : e >= v.PerMinute
                          ? w(a + "1Minute")
                          : w(a + "LessThanAMinute");
                      })(s)
                )),
          M.a.createElement(
            "div",
            { className: O(F.a.PlayedGame, o && F.a.Ignored) },
            M.a.createElement(
              "a",
              { href: P.BASE_URL + "app/" + t },
              M.a.createElement("img", { className: F.a.Logo, src: i })
            ),
            M.a.createElement(
              "div",
              { className: F.a.PlaytimeInfo },
              M.a.createElement(
                "div",
                { className: F.a.HoursPlayed },
                w("#PlaytimeList_Hours", n)
              ),
              M.a.createElement("div", { className: F.a.Title }, a),
              M.a.createElement("div", { className: F.a.LastPlayed }, c),
              M.a.createElement(
                "div",
                {
                  className: F.a.IgnoreToggle,
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
      j = (function(a) {
        function e(e) {
          var t = a.call(this, e) || this;
          return (t.state = {}), t;
        }
        return (
          d.d(e, a),
          (e.prototype.onUpdate = function() {
            le.m_bIgnoredEdited && le.onUpdateWithIgnored();
          }),
          (e.prototype.render = function() {
            return P.IMMEDIATE_IGNORE_UPDATE
              ? M.a.createElement("div", null)
              : M.a.createElement(
                  "div",
                  { className: F.a.UpdateSaveBlock },
                  M.a.createElement(
                    "div",
                    {
                      className: O(
                        F.a.UpdateButton,
                        le.m_bIgnoredEdited && F.a.Enabled
                      ),
                      onClick: this.onUpdate
                    },
                    w("#UpdateSaveBlock_Update")
                  )
                );
          }),
          d.c([g], e.prototype, "onUpdate", null),
          (e = d.c([i.a], e))
        );
      })(M.a.Component),
      q = (function(a) {
        function e(e) {
          var t = a.call(this, e) || this;
          return (t.state = {}), t;
        }
        return (
          d.d(e, a),
          (e.prototype.render = function() {
            var e = le.getInputApps(),
              a = [];
            if (!e)
              return M.a.createElement(
                "div",
                { className: F.a.PlaytimeList },
                M.a.createElement(
                  "div",
                  { className: F.a.Header },
                  w("#PlaytimeList_Header")
                ),
                M.a.createElement("div", { className: F.a.Loading })
              );
            le.getAppInfo();
            var n = e.slice().sort(function(e, t) {
              return t.l - e.l;
            });
            return (
              Object.keys(n).map(function(e) {
                var t = n[e];
                a.push(
                  M.a.createElement(Y, {
                    key: "PlayedGame_" + t.a,
                    appID: t.a,
                    name: t.t,
                    hours: t.p,
                    lastPlayed: t.l,
                    ignored: t.i
                  })
                );
              }),
              M.a.createElement(
                "div",
                { className: F.a.PlaytimeList },
                M.a.createElement(
                  "div",
                  { className: F.a.Header },
                  w("#PlaytimeList_Header")
                ),
                M.a.createElement(H, { accountID: this.props.accountID }),
                M.a.createElement(j, null),
                M.a.createElement("div", { className: F.a.List }, a)
              )
            );
          }),
          (e = d.c([i.a], e))
        );
      })(M.a.Component),
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
        return M.a.createElement(
          "div",
          { className: F.a.OptionSlider },
          M.a.createElement("div", { className: F.a.Title }, t),
          M.a.createElement(
            "div",
            { className: F.a.Labels },
            M.a.createElement("div", { className: F.a.Min }, a),
            M.a.createElement("div", { className: F.a.Max }, n)
          ),
          M.a.createElement("input", {
            type: "range",
            min: r,
            max: o,
            step: (o - r) / 100,
            value: i,
            onChange: s
          }),
          M.a.createElement("div", { className: F.a.OptionalLabel }, u)
        );
      },
      Q = function(e) {
        var t = e.className,
          a = e.titleLabel,
          n = e.checked,
          r = e.onChange;
        return M.a.createElement(
          "label",
          { className: O(F.a.OptionCheckbox, t && t) },
          M.a.createElement("input", {
            type: "checkbox",
            className: F.a.Checkbox,
            checked: n,
            onChange: r
          }),
          a
        );
      },
      z = (function(a) {
        function e(e) {
          var t = a.call(this, e) || this;
          return (
            (t.rgTags = []),
            (t.state = { value: "", suggestions: [], selected: [] }),
            t
          );
        }
        return (
          d.d(e, a),
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
                    M.a.createElement(
                      "div",
                      {
                        key: t.id,
                        className: F.a.SelectedTag,
                        onClick: function(e) {
                          return a.onRemoveSelectedTag(t.id);
                        }
                      },
                      M.a.createElement("div", null, t.name),
                      M.a.createElement("div", { className: F.a.Close }, "X")
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
            return M.a.createElement(
              "div",
              { className: F.a.OptionTagList },
              M.a.createElement(
                "div",
                { className: F.a.Label },
                this.props.title
              ),
              M.a.createElement(W.a, {
                suggestions: this.state.suggestions,
                onSuggestionsFetchRequested: this.onFetchRequested,
                onSuggestionsClearRequested: this.onClearRequested,
                onSuggestionSelected: this.onSuggestionSelected,
                shouldRenderSuggestions: this.shouldRenderSuggestions,
                getSuggestionValue: function(e) {
                  return e.name;
                },
                renderSuggestion: function(e) {
                  return M.a.createElement("div", null, e.name);
                },
                inputProps: e,
                theme: {
                  input: F.a.SuggestionInput,
                  suggestion: F.a.OptionSuggestion,
                  suggestionsList: F.a.SuggestionsList,
                  suggestionsContainerOpen: F.a.SuggestionContainerOpen
                }
              }),
              n
            );
          }),
          d.c([g], e.prototype, "onFetchRequested", null),
          d.c([g], e.prototype, "onClearRequested", null),
          d.c([g], e.prototype, "onChange", null),
          d.c([g], e.prototype, "onKeyDown", null),
          d.c([g], e.prototype, "shouldRenderSuggestions", null),
          d.c([g], e.prototype, "onSuggestionSelected", null),
          d.c([g], e.prototype, "onRemoveSelectedTag", null),
          e
        );
      })(M.a.Component),
      K = Object(i.a)(function(e) {
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
        return M.a.createElement(
          "div",
          { className: F.a.RecommendationOptions },
          M.a.createElement(
            "div",
            { className: O(F.a.Row, F.a.FirstRow) },
            M.a.createElement(X, {
              minLabel: w("#Popularity_Popular"),
              titleLabel: w("#Popularity_Title"),
              maxLabel: w("#Popularity_Niche"),
              minValue: 0,
              maxValue: 1,
              value: le.m_fQueuedPopularityValue,
              onChange: le.onPopularityChanged
            }),
            M.a.createElement(X, {
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
          M.a.createElement(
            "div",
            { className: O(F.a.Row, F.a.SecondRow) },
            M.a.createElement(z, {
              title: w("#TagFilterMultiple_Title"),
              tagoptions: a,
              selectedtags: n,
              onAddTag: le.onTagFilterAdd,
              onRemoveTag: le.onTagFilterRemove
            }),
            M.a.createElement(z, {
              title: w("#TagExcludeMultiple_Title"),
              tagoptions: a,
              selectedtags: n,
              onAddTag: le.onTagExcludeAdd,
              onRemoveTag: le.onTagExcludeRemove
            }),
            M.a.createElement(Q, {
              className: F.a.WishlistCheckbox,
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
            (t.m_videoRef = M.a.createRef()),
            (t.state = { hovered: !1, wishlisted: le.getAppInfo()[e.appID].w }),
            t
          );
        }
        return (
          d.d(e, a),
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
            if (!s) return M.a.createElement("div", null);
            var c = s.n,
              l = 0 < s.r ? w("#Recommendation_ReleasedOn", B(s.r)) : "",
              u = [];
            if (s.t)
              for (var p = 0, d = 0, _ = s.t; d < _.length; d++) {
                var h = _[d];
                if (
                  (u.push(
                    M.a.createElement(
                      "div",
                      { key: a + "_" + h, className: F.a.Tag },
                      le.getTagName(h)
                    )
                  ),
                  5 == ++p)
                )
                  break;
              }
            var m = parseInt(F.a.nSmallEntryWidth),
              g = parseInt(F.a.nOptionsWrapWidth),
              E = 112,
              v = !0;
            o < m ? (v = !(E = 66)) : o < g && (v = !(E = 87));
            var f = v && this.state.hovered,
              b = Math.min(Number(n) / 10, 1e3),
              S = (Math.max(1, n), !1),
              y = !1,
              T = !0,
              L = "",
              k = "",
              R = "",
              C = "",
              I = "";
            if (f) {
              var N = le.getDetails(this.props.appID);
              N &&
                ((S = !0),
                (y = 0 < N.discount_pct),
                (T = "0" == N.discount_price),
                (I =
                  "probably" ==
                  document
                    .createElement("video")
                    .canPlayType('video/webm; codecs="vp8, vorbis"')
                    ? N.video_webm
                    : N.video_mp4),
                (L = "-" + N.discount_pct + "%"),
                (k = N.base_price),
                (R = T ? w("#FreeToPlay") : N.discount_price),
                (C = N.description));
            }
            var A = I && 0 < I.length;
            return M.a.createElement(
              D,
              { appID: a, snr: P.LINK_PARAM },
              M.a.createElement(
                "a",
                {
                  href: P.BASE_URL + "app/" + a + "?snr=" + P.LINK_PARAM,
                  onClick: function() {
                    return le.onAppClicked(a, r);
                  },
                  className: O(
                    F.a.RecommendationEntry,
                    "ds_flagged",
                    "ds_wishlist",
                    30 < r && F.a.Hidden,
                    f && F.a.Hovered
                  ),
                  style: { top: Math.min(31, r) * E },
                  onMouseEnter: this.OnHover,
                  onMouseLeave: this.OnUnHover
                },
                M.a.createElement(
                  "div",
                  { className: F.a.TopEntrySection },
                  M.a.createElement(
                    "div",
                    { className: F.a.LeftSection },
                    M.a.createElement("img", {
                      className: O(F.a.Logo, (!A || !f) && F.a.Revealed),
                      src: i
                    }),
                    M.a.createElement("video", {
                      ref: this.m_videoRef,
                      className: O(
                        "highlight_player_item",
                        "highlight_movie",
                        F.a.Video,
                        A && f && F.a.Revealed
                      ),
                      playsInline: !0,
                      autoPlay: !0,
                      muted: le.shouldMute(),
                      src: I
                    }),
                    M.a.createElement(
                      "div",
                      {
                        className: O(F.a.UnMute, A && F.a.Revealed),
                        onClick: function(e) {
                          return t.onMuteToggle(e);
                        }
                      },
                      M.a.createElement(U, { muted: le.shouldMute() })
                    ),
                    this.state.wishlisted &&
                      M.a.createElement(
                        "div",
                        {
                          className: O(
                            "ds_flag",
                            "ds_wishlist_flag",
                            F.a.WishlistFlag
                          )
                        },
                        w("#Recommendation_OnWishlist") + "  "
                      )
                  ),
                  M.a.createElement(
                    "div",
                    { className: F.a.RightSection },
                    M.a.createElement("div", { className: F.a.Name }, c),
                    M.a.createElement(
                      "div",
                      { className: F.a.CenterSection },
                      M.a.createElement(
                        "div",
                        {
                          className: O(
                            F.a.CenterOption,
                            F.a.CenterDefault,
                            f && F.a.Hidden
                          )
                        },
                        M.a.createElement(
                          "div",
                          { className: F.a.Released },
                          l
                        ),
                        M.a.createElement(
                          "div",
                          { className: F.a.BarContainer },
                          M.a.createElement("div", {
                            className: F.a.Bar,
                            style: { width: b + "%" }
                          })
                        ),
                        M.a.createElement("div", { className: F.a.Tags }, u)
                      ),
                      M.a.createElement(
                        "div",
                        {
                          className: O(
                            F.a.CenterOption,
                            F.a.CenterHovered,
                            !f && F.a.Hidden
                          )
                        },
                        C
                      )
                    ),
                    S &&
                      M.a.createElement(
                        "div",
                        { className: F.a.BottomEntrySection },
                        M.a.createElement(
                          "div",
                          {
                            className: O(
                              "game_purchase_action",
                              F.a.PurchaseSection
                            )
                          },
                          M.a.createElement(
                            "div",
                            {
                              className: O(
                                "game_purchase_action_bg",
                                F.a.PurchaseBG
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
                                  L
                                ),
                                M.a.createElement(
                                  "div",
                                  { className: "discount_prices" },
                                  M.a.createElement(
                                    "div",
                                    { className: "discount_original_price" },
                                    k
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
                            !T &&
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
                          !T &&
                          M.a.createElement(
                            "div",
                            {
                              id: "add_to_wishlist_area",
                              className: F.a.WishlistSection,
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
                          !T &&
                          M.a.createElement(
                            "div",
                            {
                              className: O(
                                "btnv6_blue_hoverfade btn_medium",
                                "queue_btn_active",
                                F.a.Wishlisted,
                                F.a.WishlistSection
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
                                src: P.IMG_URL_BASE + "/v6/ico/ico_selected.png"
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
          d.c([g], e.prototype, "OnHover", null),
          d.c([g], e.prototype, "OnUnHover", null),
          d.c([g], e.prototype, "onMuteToggle", null),
          d.c([g], e.prototype, "onAddToWishlist", null),
          d.c([g], e.prototype, "onGoToWishlist", null),
          d.c([g], e.prototype, "onAddToCart", null),
          (e = d.c([i.a], e))
        );
      })(M.a.Component),
      Z = (function(a) {
        function e(e) {
          var t = a.call(this, e) || this;
          return (t.state = { sortedRecommendedApps: [] }), t;
        }
        return (
          d.d(e, a),
          (e.prototype.render = function() {
            var e = le.m_fRecencyValue * (P.NUM_RECENCY_STEPS - 1 - 0.001),
              t = Math.floor(e),
              a = t + 1,
              n = 1 - (e - t),
              r = 1 - n,
              o = le.m_fPopularityValue * (P.NUM_POPULARITY_STEPS - 1 - 0.001),
              i = Math.floor(o),
              s = i + 1,
              c = 1 - (o - i),
              l = 1 - c,
              u = [];
            u.push({ index: i * P.NUM_RECENCY_STEPS + t, weight: c * n }),
              u.push({ index: s * P.NUM_RECENCY_STEPS + t, weight: l * n }),
              u.push({ index: i * P.NUM_RECENCY_STEPS + a, weight: c * r }),
              u.push({ index: s * P.NUM_RECENCY_STEPS + a, weight: l * r });
            var p = new Map(),
              d = 0,
              _ = le.getRecommendations(),
              h = le.getAppInfo(),
              m = [];
            if (_) {
              for (var g = 0, E = u; g < E.length; g++) {
                var v = E[g],
                  f = _[v.index];
                if (((d = Math.max(d, f.score_scale)), f))
                  for (var b = 0; b < f.app_ids.length; b++) {
                    var S = f.app_ids[b];
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
                        f.scores[b] * v.weight * f.score_scale;
                      p.set(S, y);
                    }
                  }
              }
              p.forEach(function(e, t) {
                return p.set(t, e / d);
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
                  k = 0,
                  R = 0,
                  C = (L = L.slice(0, 30));
                R < C.length;
                R++
              ) {
                (C[R].rank = k), k++;
              }
              for (
                var I = 0,
                  N = L.sort(function(e, t) {
                    return t.appid - e.appid;
                  });
                I < N.length;
                I++
              ) {
                var A = N[I];
                m.push(
                  M.a.createElement(J, {
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
                  className: F.a.RecommendationsLoading
                })
              );
            return M.a.createElement(
              "div",
              { className: F.a.RecommendationList },
              M.a.createElement(
                "div",
                { className: F.a.Header },
                w("#Recommendations_Header")
              ),
              M.a.createElement(K, null),
              M.a.createElement(
                "div",
                {
                  className: O(F.a.List, le.areResultsExpired() && F.a.Updating)
                },
                m
              )
            );
          }),
          (e = d.c([i.a], e))
        );
      })(M.a.Component),
      $ = (function(a) {
        function e(e) {
          var t = a.call(this, e) || this;
          return (t.state = { width: window.innerWidth }), t;
        }
        return (
          d.d(e, a),
          (e.prototype.updateDimensions = function() {
            this.setState({ width: window.innerWidth });
          }),
          (e.prototype.componentDidMount = function() {
            window.addEventListener("resize", this.updateDimensions);
          }),
          (e.prototype.render = function() {
            return 0 == P.ACCOUNT_ID
              ? M.a.createElement(
                  "div",
                  { className: F.a.App },
                  M.a.createElement(
                    "div",
                    { className: F.a.Login },
                    M.a.createElement(
                      "div",
                      { className: F.a.Text },
                      w("#LoginText")
                    ),
                    M.a.createElement(
                      "a",
                      {
                        className: O(
                          "btn_green_white_innerfade",
                          " btn_medium"
                        ),
                        href: P.LOGIN_REDIRECT
                      },
                      M.a.createElement("span", null, w("#LoginButton"))
                    )
                  )
                )
              : M.a.createElement(
                  "div",
                  {
                    className: F.a.App,
                    style: { height: 3840 + 26 * le.getTagHeight() }
                  },
                  M.a.createElement(
                    "div",
                    { className: F.a.Container },
                    M.a.createElement(
                      "div",
                      { className: F.a.TopSection },
                      M.a.createElement(
                        "div",
                        { className: F.a.Header },
                        w("#HeaderTitle")
                      ),
                      M.a.createElement(
                        "div",
                        { className: F.a.Body },
                        w("#HeaderBody1")
                      ),
                      M.a.createElement("div", { className: F.a.Spacer }),
                      M.a.createElement(
                        "div",
                        { className: F.a.Body },
                        w("#HeaderBody2")
                      ),
                      M.a.createElement("div", { className: F.a.Spacer }),
                      M.a.createElement(
                        "div",
                        { className: F.a.Body },
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
                              [l.Fragment, null].concat(o)
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
                      { className: F.a.BottomSection },
                      M.a.createElement(q, { accountID: P.ACCOUNT_ID }),
                      M.a.createElement("div", { className: F.a.VerticalBar }),
                      M.a.createElement(Z, { width: this.state.width })
                    )
                  )
                );
          }),
          d.c([g], e.prototype, "updateDimensions", null),
          (e = d.c([i.a], e))
        );
      })(M.a.Component),
      ee = a("2vnA"),
      te = a("i8i4");
    ((x = A || (A = {}))[(x.Unrequested = 0)] = "Unrequested"),
      (x[(x.Pending = 1)] = "Pending"),
      (x[(x.Valid = 2)] = "Valid"),
      (x[(x.Failed = 3)] = "Failed"),
      (x[(x.Rerequest = 4)] = "Rerequest");
    var ae,
      ne,
      re = (function() {
        function e() {
          (this.eState = A.Unrequested), (this.nExpirationTime = 0);
        }
        return (
          (e.prototype.getData = function(t, a, n) {
            var r = this,
              o = Date.now() / 1e3,
              e = this.eState == A.Pending || this.eState == A.Rerequest;
            return (
              o >= this.nExpirationTime &&
                !e &&
                ((this.eState = A.Pending),
                a().then(function(e) {
                  if (r.eState == A.Rerequest)
                    return r.expireData(), void r.getData(t, a, n);
                  r.eState = e
                    ? ((r.data = n ? n(e) : e),
                      (r.nExpirationTime = o + t),
                      A.Valid)
                    : A.Failed;
                })),
              this.data
            );
          }),
          (e.prototype.clearData = function() {
            var e = Date.now() / 1e3;
            (this.eState = A.Unrequested),
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
            this.eState == A.Pending && (this.eState = A.Rerequest);
          }),
          d.c([ee.v], e.prototype, "data", void 0),
          d.c([ee.v], e.prototype, "nExpirationTime", void 0),
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
            P.RESET_OPTIONS &&
              ((this.m_fPopularityValue = 1 / (P.NUM_POPULARITY_STEPS - 1)),
              (this.m_fRecencyValue = 0),
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
                return d.b(e, void 0, void 0, function() {
                  return d.e(this, function(e) {
                    switch (e.label) {
                      case 0:
                        return [
                          4,
                          _.a.get(
                            P.BASE_URL +
                              "recommender/" +
                              P.STEAM_ID +
                              "/details?appid=" +
                              t +
                              "&sessionid=" +
                              P.SESSION_ID
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
                  return d.b(r, void 0, void 0, function() {
                    return d.e(this, function(e) {
                      switch (e.label) {
                        case 0:
                          return [
                            4,
                            _.a.get(
                              P.BASE_URL +
                                "recommender/" +
                                P.STEAM_ID +
                                "/results?sessionid=" +
                                P.SESSION_ID +
                                "&steamid=" +
                                P.STEAM_ID +
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
            P.INCLUDE_PLAYED,
            P.ALGORITHM,
            P.REINFERENCE,
            P.MODEL_VERSION
          );
          return e ? e.recommendations : void 0;
        }),
        (e.prototype.getInputApps = function() {
          var e = this;
          return this.m_InputAppsCache.getData(
            9999999,
            function() {
              return d.b(e, void 0, void 0, function() {
                return d.e(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return [
                        4,
                        _.a.get(
                          P.BASE_URL +
                            "recommender/" +
                            P.STEAM_ID +
                            "/inputs?sessionid=" +
                            P.SESSION_ID +
                            "&steamid=" +
                            P.STEAM_ID
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
            P.INCLUDE_PLAYED,
            P.ALGORITHM,
            P.REINFERENCE,
            P.MODEL_VERSION
          );
          return e ? e.app_info : void 0;
        }),
        (e.prototype.getTags = function() {
          var r = this;
          return this.m_TagsCache.getData(
            9999999,
            function() {
              return d.b(r, void 0, void 0, function() {
                return d.e(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return [
                        4,
                        _.a.get(
                          P.BASE_URL +
                            "recommender/" +
                            P.STEAM_ID +
                            "/tags?sessionid=" +
                            P.SESSION_ID
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
          return d.b(this, void 0, void 0, function() {
            var t, a, n, r, o, i;
            return d.e(this, function(e) {
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
                    P.IMMEDIATE_IGNORE_UPDATE &&
                      this.m_ResultDataCache.expireData(),
                    (this.m_bIgnoredEdited = !0),
                    P.PERSISTENT_IGNORE
                      ? ((i = {
                          sessionid: P.SESSION_ID,
                          appid: s,
                          remove: a ? 1 : 0,
                          ignore_reason: 3
                        }),
                        [
                          4,
                          _.a.post(
                            P.BASE_URL + "recommended/ignorerecommendation/",
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
          return d.b(this, void 0, void 0, function() {
            var t;
            return d.e(this, function(e) {
              switch (e.label) {
                case 0:
                  return (
                    (t = {
                      account_id: P.ACCOUNT_ID,
                      session_id: P.SESSION_ID,
                      app_id: a,
                      app_rank: n,
                      action: ae.ClickThrough,
                      algorithm: 1,
                      setting_1: 100 * this.m_fPopularityValue,
                      setting_2: 100 * this.m_fRecencyValue
                    }),
                    [
                      4,
                      _.a.post(
                        P.BASE_URL + "recommender/" + P.STEAM_ID + "/stats",
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
          return d.b(this, void 0, void 0, function() {
            var t, a, n;
            return d.e(this, function(e) {
              switch (e.label) {
                case 0:
                  return (
                    (le.getAppInfo()[r].w = !0),
                    (t = { sessionid: P.SESSION_ID, appid: r }),
                    [
                      4,
                      _.a.post(
                        P.BASE_URL + "recommender/" + P.STEAM_ID + "/wishlist",
                        t
                      )
                    ]
                  );
                case 1:
                  return (
                    (a = e.sent()),
                    (n = {
                      account_id: P.ACCOUNT_ID,
                      session_id: P.SESSION_ID,
                      app_id: r,
                      app_rank: o,
                      action: ae.AddToWishlist,
                      algorithm: 1,
                      setting_1: 100 * this.m_fPopularityValue,
                      setting_2: 100 * this.m_fRecencyValue
                    }),
                    [
                      4,
                      _.a.post(
                        P.BASE_URL + "recommender/" + P.STEAM_ID + "/stats",
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
            P.COMMUNITY_BASE_URL + "profiles/" + P.STEAM_ID + "/wishlist";
        }),
        (e.prototype.onAddToCart = function(n, r) {
          return d.b(this, void 0, void 0, function() {
            var t, a;
            return d.e(this, function(e) {
              switch (e.label) {
                case 0:
                  return (
                    (t = { sessionid: P.SESSION_ID, appid: n }),
                    [
                      4,
                      _.a.post(
                        P.BASE_URL + "recommender/" + P.STEAM_ID + "/cart",
                        t
                      )
                    ]
                  );
                case 1:
                  return (
                    e.sent(),
                    (a = {
                      account_id: P.ACCOUNT_ID,
                      session_id: P.SESSION_ID,
                      app_id: n,
                      app_rank: r,
                      action: ae.AddToCart,
                      algorithm: 1,
                      setting_1: 100 * this.m_fPopularityValue,
                      setting_2: 100 * this.m_fRecencyValue
                    }),
                    [
                      4,
                      _.a.post(
                        P.BASE_URL + "recommender/" + P.STEAM_ID + "/stats",
                        a
                      )
                    ]
                  );
                case 2:
                  return (
                    e.sent(),
                    (window.location.href = P.STORE_BASE_URL + "cart"),
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
        d.c([ee.v], e.prototype, "m_fPopularityValue", void 0),
        d.c([ee.v], e.prototype, "m_fRecencyValue", void 0),
        d.c([ee.v], e.prototype, "m_rgFilterTags", void 0),
        d.c([ee.v], e.prototype, "m_rgExcludeTags", void 0),
        d.c([ee.v], e.prototype, "m_fQueuedPopularityValue", void 0),
        d.c([ee.v], e.prototype, "m_fQueuedRecencyValue", void 0),
        d.c([ee.v], e.prototype, "m_bExcludeWishlisted", void 0),
        d.c([ee.v], e.prototype, "m_bShouldMute", void 0),
        d.c([ee.v], e.prototype, "m_bIgnoredEdited", void 0),
        d.c([g], e.prototype, "getTagHeight", null),
        d.c([g], e.prototype, "onPopularityChanged", null),
        d.c([g], e.prototype, "onRecencyChanged", null),
        d.c([g], e.prototype, "onTagFilterAdd", null),
        d.c([g], e.prototype, "onTagFilterRemove", null),
        d.c([g], e.prototype, "onTagExcludeAdd", null),
        d.c([g], e.prototype, "onTagExcludeRemove", null),
        d.c([g], e.prototype, "doTagsPassFilter", null),
        d.c([g], e.prototype, "doTagsFailExclusion", null),
        d.c([g], e.prototype, "onExcludeWishlistedToggled", null),
        d.c([g], e.prototype, "onToggleIgnore", null),
        d.c([g], e.prototype, "onUpdateWithIgnored", null),
        d.c([g], e.prototype, "onAppClicked", null),
        d.c([g], e.prototype, "onAddToWishlist", null),
        d.c([g], e.prototype, "onGoToWishlist", null),
        d.c([g], e.prototype, "onAddToCart", null),
        d.c([g], e.prototype, "onMuteClicked", null),
        d.c([g], e.prototype, "onUnMuteClicked", null),
        d.c([g], e.prototype, "shouldMute", null),
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

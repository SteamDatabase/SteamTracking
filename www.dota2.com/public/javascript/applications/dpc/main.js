/*! This file includes third-party software, governed by the licenses described here: https://www.dota2.com/public/javascript/applications/dpc/main.licenses.txt */

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
!(function (e) {
  function a(a) {
    for (
      var r, c, l = a[0], i = a[1], s = a[2], m = 0, _ = [];
      m < l.length;
      m++
    )
      (c = l[m]),
        Object.prototype.hasOwnProperty.call(o, c) && o[c] && _.push(o[c][0]),
        (o[c] = 0);
    for (r in i) Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r]);
    for (g && g(a); _.length; ) _.shift()();
    return n.push.apply(n, s || []), t();
  }
  function t() {
    for (var e, a = 0; a < n.length; a++) {
      for (var t = n[a], r = !0, l = 1; l < t.length; l++) {
        var i = t[l];
        0 !== o[i] && (r = !1);
      }
      r && (n.splice(a--, 1), (e = c((c.s = t[0]))));
    }
    return e;
  }
  var r = {},
    o = { 1: 0 },
    n = [];
  function c(a) {
    if (r[a]) return r[a].exports;
    var t = (r[a] = { i: a, l: !1, exports: {} });
    return e[a].call(t.exports, t, t.exports, c), (t.l = !0), t.exports;
  }
  (c.m = e),
    (c.c = r),
    (c.d = function (e, a, t) {
      c.o(e, a) || Object.defineProperty(e, a, { enumerable: !0, get: t });
    }),
    (c.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (c.t = function (e, a) {
      if ((1 & a && (e = c(e)), 8 & a)) return e;
      if (4 & a && "object" == typeof e && e && e.__esModule) return e;
      var t = Object.create(null);
      if (
        (c.r(t),
        Object.defineProperty(t, "default", { enumerable: !0, value: e }),
        2 & a && "string" != typeof e)
      )
        for (var r in e)
          c.d(
            t,
            r,
            function (a) {
              return e[a];
            }.bind(null, r)
          );
      return t;
    }),
    (c.n = function (e) {
      var a =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return c.d(a, "a", a), a;
    }),
    (c.o = function (e, a) {
      return Object.prototype.hasOwnProperty.call(e, a);
    }),
    (c.p = "");
  var l = (window.webpackJsonp = window.webpackJsonp || []),
    i = l.push.bind(l);
  (l.push = a), (l = l.slice());
  for (var s = 0; s < l.length; s++) a(l[s]);
  var g = i;
  n.push(["gfbn", 0]), t();
})({
  "++Fi": function (e, a, t) {
    e.exports = {
      colorBlack: "searchpage_colorBlack_2n-L5",
      colorWhite: "searchpage_colorWhite_RP_EI",
      colorDarkGrey: "searchpage_colorDarkGrey_A5RBM",
      colorGrey: "searchpage_colorGrey_QgxrF",
      colorLightGrey: "searchpage_colorLightGrey_2xi53",
      colorOrange: "searchpage_colorOrange_N6ifh",
      colorRed: "searchpage_colorRed_2kiUt",
      colorAqua: "searchpage_colorAqua_2gXZv",
      colorBlue: "searchpage_colorBlue_3AQbd",
      colorBrightRed: "searchpage_colorBrightRed_1im4_",
      colorBrightBlue: "searchpage_colorBrightBlue_3MeoL",
      colorBrightOrange: "searchpage_colorBrightOrange_lg328",
      colorBrightPurple: "searchpage_colorBrightPurple_3GhPX",
      colorBrightYellow: "searchpage_colorBrightYellow_FD79E",
      colorBrightGreen: "searchpage_colorBrightGreen_1rzlH",
      colorBrightGrey: "searchpage_colorBrightGrey_3fMf5",
      backgroundColorBlack: "searchpage_backgroundColorBlack_24uoF",
      backgroundColorDarkGrey: "searchpage_backgroundColorDarkGrey_2HqnN",
      backgroundColorLightGrey: "searchpage_backgroundColorLightGrey_2IHUR",
      backgroundColorWhite: "searchpage_backgroundColorWhite_1IMAf",
      backgroundColorOrange: "searchpage_backgroundColorOrange_13jhz",
      backgroundColorRed: "searchpage_backgroundColorRed_2nYvo",
      backgroundColorAqua: "searchpage_backgroundColorAqua_3URwq",
      backgroundColorBlue: "searchpage_backgroundColorBlue_1phI3",
      backgroundColorGrey: "searchpage_backgroundColorGrey_yFVMj",
      backgroundColorBrightRed: "searchpage_backgroundColorBrightRed_2z0Ji",
      backgroundColorBrightBlue: "searchpage_backgroundColorBrightBlue_GrHkd",
      backgroundColorBrightOrange:
        "searchpage_backgroundColorBrightOrange_2pml8",
      backgroundColorBrightPurple:
        "searchpage_backgroundColorBrightPurple_poBeI",
      backgroundColorBrightYellow:
        "searchpage_backgroundColorBrightYellow_1IuPu",
      backgroundColorBrightGreen: "searchpage_backgroundColorBrightGreen_1LMvw",
      backgroundColorBrightGrey: "searchpage_backgroundColorBrightGrey_3Hfvp",
      SearchPage: "searchpage_SearchPage_1XgAp",
      Contents: "searchpage_Contents_2fxPU",
      Divider: "searchpage_Divider_1wwlq",
      Category: "searchpage_Category_tIlOY",
      SearchElement: "searchpage_SearchElement_1u7Gv",
      Link: "searchpage_Link_-2yNb",
      Icon: "searchpage_Icon_3FjfW",
      Team: "searchpage_Team_2Rk2H",
      League: "searchpage_League_c7sZ_",
      Name: "searchpage_Name_MHFgT",
      Favorite: "searchpage_Favorite_3HjAc",
      HeaderChildren: "searchpage_HeaderChildren_3-yjN",
      SearchInput: "searchpage_SearchInput_MIpJR",
      SearchIcon: "searchpage_SearchIcon_1QdRt",
      Close: "searchpage_Close_1TuYM",
    };
  },
  "+66j": function (e, a, t) {
    e.exports = {
      colorBlack: "gcdown_colorBlack_3TjPA",
      colorWhite: "gcdown_colorWhite_3EbIE",
      colorDarkGrey: "gcdown_colorDarkGrey_uLxET",
      colorGrey: "gcdown_colorGrey_21r20",
      colorLightGrey: "gcdown_colorLightGrey_1bno5",
      colorOrange: "gcdown_colorOrange_2_bEd",
      colorRed: "gcdown_colorRed_2DOdK",
      colorAqua: "gcdown_colorAqua_3-xT6",
      colorBlue: "gcdown_colorBlue_1X5CU",
      colorBrightRed: "gcdown_colorBrightRed_2dcAf",
      colorBrightBlue: "gcdown_colorBrightBlue_3Crlr",
      colorBrightOrange: "gcdown_colorBrightOrange_1q03H",
      colorBrightPurple: "gcdown_colorBrightPurple_24VEX",
      colorBrightYellow: "gcdown_colorBrightYellow_1JAGo",
      colorBrightGreen: "gcdown_colorBrightGreen_3zJ0O",
      colorBrightGrey: "gcdown_colorBrightGrey_1zSH6",
      backgroundColorBlack: "gcdown_backgroundColorBlack_3gGAl",
      backgroundColorDarkGrey: "gcdown_backgroundColorDarkGrey_27BMj",
      backgroundColorLightGrey: "gcdown_backgroundColorLightGrey_R_jlt",
      backgroundColorWhite: "gcdown_backgroundColorWhite_38FV_",
      backgroundColorOrange: "gcdown_backgroundColorOrange_17L9r",
      backgroundColorRed: "gcdown_backgroundColorRed_n3BXx",
      backgroundColorAqua: "gcdown_backgroundColorAqua_1lp1r",
      backgroundColorBlue: "gcdown_backgroundColorBlue_1u9iO",
      backgroundColorGrey: "gcdown_backgroundColorGrey_2AcOF",
      backgroundColorBrightRed: "gcdown_backgroundColorBrightRed_3f6i2",
      backgroundColorBrightBlue: "gcdown_backgroundColorBrightBlue_2GIRd",
      backgroundColorBrightOrange: "gcdown_backgroundColorBrightOrange_2zE3i",
      backgroundColorBrightPurple: "gcdown_backgroundColorBrightPurple_bLv1z",
      backgroundColorBrightYellow: "gcdown_backgroundColorBrightYellow_qq5TN",
      backgroundColorBrightGreen: "gcdown_backgroundColorBrightGreen_1qWO8",
      backgroundColorBrightGrey: "gcdown_backgroundColorBrightGrey_15Kl7",
      GCDown: "gcdown_GCDown_SZwXH",
      Display: "gcdown_Display_1EQvX",
      ErrorArt: "gcdown_ErrorArt_2gR1L",
      ErrorHeading: "gcdown_ErrorHeading_YdggV",
      ErrorMessage: "gcdown_ErrorMessage_2CbI_",
      RetryButton: "gcdown_RetryButton_27N1H",
    };
  },
  "/XF4": function (e, a, t) {
    e.exports = {
      colorBlack: "favoritetoggle_colorBlack_lBgyv",
      colorWhite: "favoritetoggle_colorWhite_18wFf",
      colorDarkGrey: "favoritetoggle_colorDarkGrey_8refD",
      colorGrey: "favoritetoggle_colorGrey_2krr_",
      colorLightGrey: "favoritetoggle_colorLightGrey_3aquY",
      colorOrange: "favoritetoggle_colorOrange_2va68",
      colorRed: "favoritetoggle_colorRed_3jSLD",
      colorAqua: "favoritetoggle_colorAqua_Pv_Yn",
      colorBlue: "favoritetoggle_colorBlue_w3RwT",
      colorBrightRed: "favoritetoggle_colorBrightRed_2pKNg",
      colorBrightBlue: "favoritetoggle_colorBrightBlue_p9OI-",
      colorBrightOrange: "favoritetoggle_colorBrightOrange_1-5Ly",
      colorBrightPurple: "favoritetoggle_colorBrightPurple_wDyUE",
      colorBrightYellow: "favoritetoggle_colorBrightYellow_2z_X4",
      colorBrightGreen: "favoritetoggle_colorBrightGreen_MGemj",
      colorBrightGrey: "favoritetoggle_colorBrightGrey_2NFIu",
      backgroundColorBlack: "favoritetoggle_backgroundColorBlack_20g9K",
      backgroundColorDarkGrey: "favoritetoggle_backgroundColorDarkGrey_1QOMx",
      backgroundColorLightGrey: "favoritetoggle_backgroundColorLightGrey_2al5_",
      backgroundColorWhite: "favoritetoggle_backgroundColorWhite_1AWad",
      backgroundColorOrange: "favoritetoggle_backgroundColorOrange_2sb1W",
      backgroundColorRed: "favoritetoggle_backgroundColorRed_2xiWc",
      backgroundColorAqua: "favoritetoggle_backgroundColorAqua_3g9ar",
      backgroundColorBlue: "favoritetoggle_backgroundColorBlue_plSTT",
      backgroundColorGrey: "favoritetoggle_backgroundColorGrey_3PxDD",
      backgroundColorBrightRed: "favoritetoggle_backgroundColorBrightRed_24UFp",
      backgroundColorBrightBlue:
        "favoritetoggle_backgroundColorBrightBlue_3H0X_",
      backgroundColorBrightOrange:
        "favoritetoggle_backgroundColorBrightOrange_3HYD5",
      backgroundColorBrightPurple:
        "favoritetoggle_backgroundColorBrightPurple_C6vPd",
      backgroundColorBrightYellow:
        "favoritetoggle_backgroundColorBrightYellow_Ochd7",
      backgroundColorBrightGreen:
        "favoritetoggle_backgroundColorBrightGreen_1slVM",
      backgroundColorBrightGrey:
        "favoritetoggle_backgroundColorBrightGrey_1Bs_C",
      FavoriteToggle: "favoritetoggle_FavoriteToggle_2dA5L",
      Favorite: "favoritetoggle_Favorite_2YMA_",
    };
  },
  "1usE": function (e, a, t) {
    e.exports = {
      colorBlack: "tournamentlistpage_colorBlack_3OXb0",
      colorWhite: "tournamentlistpage_colorWhite_rCaB8",
      colorDarkGrey: "tournamentlistpage_colorDarkGrey_1Ju-w",
      colorGrey: "tournamentlistpage_colorGrey_1q5u6",
      colorLightGrey: "tournamentlistpage_colorLightGrey_391_T",
      colorOrange: "tournamentlistpage_colorOrange_2N4xA",
      colorRed: "tournamentlistpage_colorRed_7RWui",
      colorAqua: "tournamentlistpage_colorAqua_2Lkrq",
      colorBlue: "tournamentlistpage_colorBlue_1-51A",
      colorBrightRed: "tournamentlistpage_colorBrightRed_1XQwI",
      colorBrightBlue: "tournamentlistpage_colorBrightBlue_1VFPU",
      colorBrightOrange: "tournamentlistpage_colorBrightOrange_WZMxl",
      colorBrightPurple: "tournamentlistpage_colorBrightPurple_2AOqU",
      colorBrightYellow: "tournamentlistpage_colorBrightYellow_3FHL6",
      colorBrightGreen: "tournamentlistpage_colorBrightGreen_ySi4N",
      colorBrightGrey: "tournamentlistpage_colorBrightGrey_31MJJ",
      backgroundColorBlack: "tournamentlistpage_backgroundColorBlack_1LmeR",
      backgroundColorDarkGrey:
        "tournamentlistpage_backgroundColorDarkGrey_2wReT",
      backgroundColorLightGrey:
        "tournamentlistpage_backgroundColorLightGrey_39ein",
      backgroundColorWhite: "tournamentlistpage_backgroundColorWhite_3m1yZ",
      backgroundColorOrange: "tournamentlistpage_backgroundColorOrange_3oqCi",
      backgroundColorRed: "tournamentlistpage_backgroundColorRed_10bl5",
      backgroundColorAqua: "tournamentlistpage_backgroundColorAqua_2F_9U",
      backgroundColorBlue: "tournamentlistpage_backgroundColorBlue_2Yfyt",
      backgroundColorGrey: "tournamentlistpage_backgroundColorGrey_3u-I4",
      backgroundColorBrightRed:
        "tournamentlistpage_backgroundColorBrightRed_2_0Ox",
      backgroundColorBrightBlue:
        "tournamentlistpage_backgroundColorBrightBlue_1enGt",
      backgroundColorBrightOrange:
        "tournamentlistpage_backgroundColorBrightOrange_JjWgU",
      backgroundColorBrightPurple:
        "tournamentlistpage_backgroundColorBrightPurple_Q-VJp",
      backgroundColorBrightYellow:
        "tournamentlistpage_backgroundColorBrightYellow_PhQh6",
      backgroundColorBrightGreen:
        "tournamentlistpage_backgroundColorBrightGreen_2FYgQ",
      backgroundColorBrightGrey:
        "tournamentlistpage_backgroundColorBrightGrey_wVQZB",
      TournamentListPage: "tournamentlistpage_TournamentListPage_8YOR6",
      TournamentStandingsButton:
        "tournamentlistpage_TournamentStandingsButton_1iyxw",
      Contents: "tournamentlistpage_Contents_3hkB2",
    };
  },
  "3EZO": function (e, a, t) {
    e.exports = {
      colorBlack: "profilepage_colorBlack_TOle5",
      colorWhite: "profilepage_colorWhite_2cIN1",
      colorDarkGrey: "profilepage_colorDarkGrey_1nzuG",
      colorGrey: "profilepage_colorGrey_1K4Qs",
      colorLightGrey: "profilepage_colorLightGrey_fw6VL",
      colorOrange: "profilepage_colorOrange_2mO1v",
      colorRed: "profilepage_colorRed_l8TJo",
      colorAqua: "profilepage_colorAqua_2fBhI",
      colorBlue: "profilepage_colorBlue_1minK",
      colorBrightRed: "profilepage_colorBrightRed_fak5h",
      colorBrightBlue: "profilepage_colorBrightBlue_2R8ce",
      colorBrightOrange: "profilepage_colorBrightOrange_3f7OU",
      colorBrightPurple: "profilepage_colorBrightPurple_1TFCc",
      colorBrightYellow: "profilepage_colorBrightYellow_264MJ",
      colorBrightGreen: "profilepage_colorBrightGreen_2xMWf",
      colorBrightGrey: "profilepage_colorBrightGrey_l0SHn",
      backgroundColorBlack: "profilepage_backgroundColorBlack_1jZS_",
      backgroundColorDarkGrey: "profilepage_backgroundColorDarkGrey_2rKKy",
      backgroundColorLightGrey: "profilepage_backgroundColorLightGrey_2Cgv9",
      backgroundColorWhite: "profilepage_backgroundColorWhite_32z-b",
      backgroundColorOrange: "profilepage_backgroundColorOrange_3LpJM",
      backgroundColorRed: "profilepage_backgroundColorRed_Izyrx",
      backgroundColorAqua: "profilepage_backgroundColorAqua_1IiPT",
      backgroundColorBlue: "profilepage_backgroundColorBlue_d9yq1",
      backgroundColorGrey: "profilepage_backgroundColorGrey_2E1fc",
      backgroundColorBrightRed: "profilepage_backgroundColorBrightRed_27k24",
      backgroundColorBrightBlue: "profilepage_backgroundColorBrightBlue_gozdL",
      backgroundColorBrightOrange:
        "profilepage_backgroundColorBrightOrange_29pCr",
      backgroundColorBrightPurple:
        "profilepage_backgroundColorBrightPurple_3XkdW",
      backgroundColorBrightYellow:
        "profilepage_backgroundColorBrightYellow_19_aF",
      backgroundColorBrightGreen:
        "profilepage_backgroundColorBrightGreen_3m8Fb",
      backgroundColorBrightGrey: "profilepage_backgroundColorBrightGrey_1bk4X",
      ProfilePage: "profilepage_ProfilePage_2o17X",
      Scrollable: "profilepage_Scrollable_JOOou",
      TopSection: "profilepage_TopSection_1u3mL",
      Avatar: "profilepage_Avatar_3M3e2",
      NameInfo: "profilepage_NameInfo_2g_Fl",
      Name: "profilepage_Name_1xMj3",
      RealName: "profilepage_RealName_2D2BP",
      FavoritesSection: "profilepage_FavoritesSection_jZGgq",
      FavoritesHeader: "profilepage_FavoritesHeader_WlukD",
      LeftLabel: "profilepage_LeftLabel_3JTeo",
      FavoritesHeart: "profilepage_FavoritesHeart_2tE0C",
      FavoritesLabel: "profilepage_FavoritesLabel_1bh_b",
      ManageFavorites: "profilepage_ManageFavorites_3BY5O",
      PlayerFavorite: "profilepage_PlayerFavorite_3_Zp3",
      PlayerIcon: "profilepage_PlayerIcon_goOYH",
      TeamFavorite: "profilepage_TeamFavorite_1vZEA",
      TeamIcon: "profilepage_TeamIcon_2P3Gc",
      PredictionsSection: "profilepage_PredictionsSection_187Qv",
      PredictionsHeader: "profilepage_PredictionsHeader_1dUxn",
      PredictionsIcon: "profilepage_PredictionsIcon_14c3i",
      PredictionsLabel: "profilepage_PredictionsLabel_1UoQ6",
      NoPredictionData: "profilepage_NoPredictionData_2Ad8i",
      Entry: "profilepage_Entry_2uB49",
      Label: "profilepage_Label_sUL4R",
      Value: "profilepage_Value_19iQ3",
      FantasySection: "profilepage_FantasySection_28S44",
      FantasyHeader: "profilepage_FantasyHeader_DA9DA",
      FantasyIcon: "profilepage_FantasyIcon_3fTcW",
      FantasyLabel: "profilepage_FantasyLabel_Vi6Dg",
      NotificationsSection: "profilepage_NotificationsSection_2v73U",
      NotificationsHeader: "profilepage_NotificationsHeader_37nKE",
      NotificationsIcon: "profilepage_NotificationsIcon_2Z3ti",
      NotificationsLabel: "profilepage_NotificationsLabel_1Bobw",
      Switch: "profilepage_Switch_3RN3-",
      On: "profilepage_On_1_ZSm",
      Background: "profilepage_Background_3yDnu",
      Selector: "profilepage_Selector_2n844",
      LogoutText: "profilepage_LogoutText_2o_BU",
      Loading: "profilepage_Loading_1WiUS",
    };
  },
  "6TF7": function (e, a, t) {
    e.exports = {
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
      NavContents: "app_NavContents_1Z5K0",
    };
  },
  "6kf4": function (e, a, t) {
    e.exports = {
      colorBlack: "livematchpage_colorBlack_GuIVk",
      colorWhite: "livematchpage_colorWhite_KpWeK",
      colorDarkGrey: "livematchpage_colorDarkGrey_3Ir6S",
      colorGrey: "livematchpage_colorGrey_36cku",
      colorLightGrey: "livematchpage_colorLightGrey_RQ37z",
      colorOrange: "livematchpage_colorOrange_-VnS8",
      colorRed: "livematchpage_colorRed_1vKsl",
      colorAqua: "livematchpage_colorAqua_3-eyX",
      colorBlue: "livematchpage_colorBlue_3ptFN",
      colorBrightRed: "livematchpage_colorBrightRed_2OvXg",
      colorBrightBlue: "livematchpage_colorBrightBlue_2E9IL",
      colorBrightOrange: "livematchpage_colorBrightOrange_NBTTG",
      colorBrightPurple: "livematchpage_colorBrightPurple_irIgv",
      colorBrightYellow: "livematchpage_colorBrightYellow_3iuoE",
      colorBrightGreen: "livematchpage_colorBrightGreen_1WL_z",
      colorBrightGrey: "livematchpage_colorBrightGrey_OG1uL",
      backgroundColorBlack: "livematchpage_backgroundColorBlack_1oqWO",
      backgroundColorDarkGrey: "livematchpage_backgroundColorDarkGrey_2bwHK",
      backgroundColorLightGrey: "livematchpage_backgroundColorLightGrey_2c-3c",
      backgroundColorWhite: "livematchpage_backgroundColorWhite_31yCU",
      backgroundColorOrange: "livematchpage_backgroundColorOrange_20R8m",
      backgroundColorRed: "livematchpage_backgroundColorRed_IZbXz",
      backgroundColorAqua: "livematchpage_backgroundColorAqua_2hKW7",
      backgroundColorBlue: "livematchpage_backgroundColorBlue_2X8zV",
      backgroundColorGrey: "livematchpage_backgroundColorGrey_1SOEd",
      backgroundColorBrightRed: "livematchpage_backgroundColorBrightRed_2JdV_",
      backgroundColorBrightBlue:
        "livematchpage_backgroundColorBrightBlue_qhymb",
      backgroundColorBrightOrange:
        "livematchpage_backgroundColorBrightOrange_2uCRM",
      backgroundColorBrightPurple:
        "livematchpage_backgroundColorBrightPurple_Uhluv",
      backgroundColorBrightYellow:
        "livematchpage_backgroundColorBrightYellow_2mbrl",
      backgroundColorBrightGreen:
        "livematchpage_backgroundColorBrightGreen_3iw5w",
      backgroundColorBrightGrey:
        "livematchpage_backgroundColorBrightGrey_21D8P",
      LiveMatchPage: "livematchpage_LiveMatchPage_1WhsF",
      Header: "livematchpage_Header_3OjFv",
      Scrollable: "livematchpage_Scrollable_2k6_v",
      TopBar: "livematchpage_TopBar_10lrJ",
      BackArrow: "livematchpage_BackArrow_FTNp7",
      MatchInfo: "livematchpage_MatchInfo_1Ter7",
      Score: "livematchpage_Score_1ZQWx",
      GameTime: "livematchpage_GameTime_3cbT_",
      Team: "livematchpage_Team_3ChN8",
      Logo: "livematchpage_Logo_35V_u",
      Name: "livematchpage_Name_2gNmx",
      Loading: "livematchpage_Loading_1Gf6_",
      GameState: "livematchpage_GameState_TReWU",
      Map: "livematchpage_Map_1YqX1",
      BuildingIcon: "livematchpage_BuildingIcon_1AT4Y",
      Radiant: "livematchpage_Radiant_37ORm",
      Dire: "livematchpage_Dire_TZ04O",
      Destroyed: "livematchpage_Destroyed_2WJYU",
      Hero: "livematchpage_Hero_FoeqX",
      HeroIcon: "livematchpage_HeroIcon_30_o4",
      HeroStatsSection: "livematchpage_HeroStatsSection_3ffsN",
      TeamHeroStats: "livematchpage_TeamHeroStats_3oBtQ",
      SingleHeroStats: "livematchpage_SingleHeroStats_NReYI",
      HeroImage: "livematchpage_HeroImage_18E8u",
      NameAndName: "livematchpage_NameAndName_1p0Pq",
      PlayerName: "livematchpage_PlayerName__1kLk",
      HeroName: "livematchpage_HeroName_2NL3K",
      Stats: "livematchpage_Stats_jG-rO",
      KDA: "livematchpage_KDA_3G1LS",
      NetWorth: "livematchpage_NetWorth_2AMVA",
      Recessed: "livematchpage_Recessed_9-pda",
      Right: "livematchpage_Right_2lxOT",
      GraphSection: "livematchpage_GraphSection_AsG7c",
      Title: "livematchpage_Title_3Q4Ya",
      Bottom: "livematchpage_Bottom_1TTQz",
      GraphContainer: "livematchpage_GraphContainer_28cvb",
      Legend: "livematchpage_Legend_bDnbY",
      Arrow: "livematchpage_Arrow_3jFU2",
      DireGreater: "livematchpage_DireGreater_2Vv2f",
      EdgeMask: "livematchpage_EdgeMask_3Mm-4",
      TeamRosters: "livematchpage_TeamRosters_em-Xx",
      TeamRosterTeams: "livematchpage_TeamRosterTeams_31cJr",
      TeamRoster: "livematchpage_TeamRoster_3F09m",
      Player: "livematchpage_Player_2ODsl",
      Image: "livematchpage_Image_1wCzC",
      Hide: "livematchpage_Hide_14lIp",
      Names: "livematchpage_Names_3LEDp",
      ProName: "livematchpage_ProName_1H42j",
      RealName: "livematchpage_RealName_1gplZ",
      PicksAndBansSection: "livematchpage_PicksAndBansSection_2UDDI",
      PicksAndBans: "livematchpage_PicksAndBans_NRfJn",
      TeamPicksAndBans: "livematchpage_TeamPicksAndBans_2Ozcg",
      PickOrBan: "livematchpage_PickOrBan_2vwzU",
      Number: "livematchpage_Number_27avh",
      Pick: "livematchpage_Pick_jsK9_",
      Ban: "livematchpage_Ban_3PI-s",
      PickAndBansLabel: "livematchpage_PickAndBansLabel_2KDU-",
      PickOrBanLabel: "livematchpage_PickOrBanLabel_1zSnW",
      RadiantDireBar: "livematchpage_RadiantDireBar_1l_6R",
    };
  },
  "8kC8": function (e, a, t) {
    e.exports = {
      colorBlack: "fantasypage_colorBlack_t6Qmp",
      colorWhite: "fantasypage_colorWhite_1xyXE",
      colorDarkGrey: "fantasypage_colorDarkGrey_14BZW",
      colorGrey: "fantasypage_colorGrey_ruxvL",
      colorLightGrey: "fantasypage_colorLightGrey_2VAZz",
      colorOrange: "fantasypage_colorOrange_3IpFh",
      colorRed: "fantasypage_colorRed_1IHSw",
      colorAqua: "fantasypage_colorAqua_1tGOf",
      colorBlue: "fantasypage_colorBlue_UEyQm",
      colorBrightRed: "fantasypage_colorBrightRed_3pDI0",
      colorBrightBlue: "fantasypage_colorBrightBlue_3bCib",
      colorBrightOrange: "fantasypage_colorBrightOrange_2wj_6",
      colorBrightPurple: "fantasypage_colorBrightPurple_1RubF",
      colorBrightYellow: "fantasypage_colorBrightYellow_2lvnJ",
      colorBrightGreen: "fantasypage_colorBrightGreen_26L2F",
      colorBrightGrey: "fantasypage_colorBrightGrey_Q-2s_",
      backgroundColorBlack: "fantasypage_backgroundColorBlack_2AxWN",
      backgroundColorDarkGrey: "fantasypage_backgroundColorDarkGrey_J0NPp",
      backgroundColorLightGrey: "fantasypage_backgroundColorLightGrey_23dnE",
      backgroundColorWhite: "fantasypage_backgroundColorWhite_2hzzp",
      backgroundColorOrange: "fantasypage_backgroundColorOrange_3-3s9",
      backgroundColorRed: "fantasypage_backgroundColorRed_23P5L",
      backgroundColorAqua: "fantasypage_backgroundColorAqua_3n74D",
      backgroundColorBlue: "fantasypage_backgroundColorBlue_3u6Eh",
      backgroundColorGrey: "fantasypage_backgroundColorGrey_10UaB",
      backgroundColorBrightRed: "fantasypage_backgroundColorBrightRed_2jq92",
      backgroundColorBrightBlue: "fantasypage_backgroundColorBrightBlue_3RrpB",
      backgroundColorBrightOrange:
        "fantasypage_backgroundColorBrightOrange_3rDsE",
      backgroundColorBrightPurple:
        "fantasypage_backgroundColorBrightPurple_Z-yFt",
      backgroundColorBrightYellow:
        "fantasypage_backgroundColorBrightYellow_3HDRe",
      backgroundColorBrightGreen:
        "fantasypage_backgroundColorBrightGreen_3C_AV",
      backgroundColorBrightGrey: "fantasypage_backgroundColorBrightGrey_SVViO",
      FantasyPage: "fantasypage_FantasyPage_3zKgk",
      Contents: "fantasypage_Contents_QRAGK",
      League: "fantasypage_League_eHH1E",
      FantasyHelp: "fantasypage_FantasyHelp_39-fj",
      Selected: "fantasypage_Selected_26x-7",
      Name: "fantasypage_Name_arVxY",
      Phase: "fantasypage_Phase_3k-PM",
      Dates: "fantasypage_Dates_1mNor",
      Status: "fantasypage_Status_vI0Dd",
      StatusUnset: "fantasypage_StatusUnset_1dWdF",
      StatusPartial: "fantasypage_StatusPartial_1L2_i",
      StatusFull: "fantasypage_StatusFull_1n4jn",
      StatusConcluded: "fantasypage_StatusConcluded_2Q-aa",
      Roster: "fantasypage_Roster_2YPlj",
      RosterSlots: "fantasypage_RosterSlots_2Jdey",
      RosterSlot: "fantasypage_RosterSlot_2OTsk",
      PlayerSelect: "fantasypage_PlayerSelect_1H3yW",
      Locked: "fantasypage_Locked_nM0KT",
      NeedsSubmit: "fantasypage_NeedsSubmit_G-z93",
      Player: "fantasypage_Player_3J7qq",
      Team: "fantasypage_Team_3vJY3",
      Identity: "fantasypage_Identity_J8UYV",
      Empty: "fantasypage_Empty_2rC5R",
      Role: "fantasypage_Role_2PrmP",
      SelectArrow: "fantasypage_SelectArrow_3Wp9S",
      ClearX: "fantasypage_ClearX_vRrRE",
      Leaderboards: "fantasypage_Leaderboards_3pgtT",
      PlayerList: "fantasypage_PlayerList_3Zs2R",
      Avatar: "fantasypage_Avatar_3A7GQ",
      Score: "fantasypage_Score_3T9WA",
      Loading: "fantasypage_Loading_hXCgZ",
      LeagueHeader: "fantasypage_LeagueHeader_tkScK",
      TabSelector: "fantasypage_TabSelector_2fmRU",
      TextSelector: "fantasypage_TextSelector_1DcPA",
      Entry: "fantasypage_Entry_NJPfQ",
      UnderlineSelector: "fantasypage_UnderlineSelector_3qp8C",
      Underline: "fantasypage_Underline_yfZ4b",
      Scores: "fantasypage_Scores_yWDss",
      Leaderboard: "fantasypage_Leaderboard_1lvyc",
      RegionSelectHeader: "fantasypage_RegionSelectHeader_1owCH",
      RegionSelectList: "fantasypage_RegionSelectList_3IJVx",
      RegionSelect: "fantasypage_RegionSelect_fa8ks",
      SubContent: "fantasypage_SubContent_R1-YU",
      Concluded: "fantasypage_Concluded_gLR6i",
      NoRosterPlayers: "fantasypage_NoRosterPlayers_aKcg1",
      Header: "fantasypage_Header_elwWm",
      Sub: "fantasypage_Sub_1-jPF",
      RoleHeader: "fantasypage_RoleHeader_3eQNR",
      SubmitButton: "fantasypage_SubmitButton_2gOug",
      Enabled: "fantasypage_Enabled_2_uWd",
      CancelButton: "fantasypage_CancelButton_1NklA",
      SelectButton: "fantasypage_SelectButton_3gecv",
      ScoreSelector: "fantasypage_ScoreSelector_M2Rma",
      VerticalLine: "fantasypage_VerticalLine_2OCSu",
      Collapse: "fantasypage_Collapse_150UI",
      VerticalList: "fantasypage_VerticalList_1Gx2B",
      HorizonalLine: "fantasypage_HorizonalLine_3jN88",
      DayOption: "fantasypage_DayOption_3oW5h",
      TotalScore: "fantasypage_TotalScore_7zX60",
      Collapsed: "fantasypage_Collapsed_1njw8",
      Element: "fantasypage_Element_2Y496",
      FriendSection: "fantasypage_FriendSection_3oZ7N",
      Title: "fantasypage_Title_1O1Yd",
      FriendSwitch: "fantasypage_FriendSwitch_gtuN-",
      Friend: "fantasypage_Friend_13sBo",
      Background: "fantasypage_Background_1cmKZ",
      Selector: "fantasypage_Selector_30pz0",
      EmptyLeaderboard: "fantasypage_EmptyLeaderboard_1J9u3",
      Heading: "fantasypage_Heading_3oFsF",
      SubHeading: "fantasypage_SubHeading_fXMqP",
      Body: "fantasypage_Body_3htW-",
      Details: "fantasypage_Details_2xq8r",
    };
  },
  AGtM: function (e, a, t) {
    e.exports = {
      colorBlack: "upcomingseriespage_colorBlack_rDMdC",
      colorWhite: "upcomingseriespage_colorWhite_3fVGG",
      colorDarkGrey: "upcomingseriespage_colorDarkGrey_3Lzwk",
      colorGrey: "upcomingseriespage_colorGrey_1jbUy",
      colorLightGrey: "upcomingseriespage_colorLightGrey_74-R3",
      colorOrange: "upcomingseriespage_colorOrange_1D1-3",
      colorRed: "upcomingseriespage_colorRed_2d5dB",
      colorAqua: "upcomingseriespage_colorAqua_1gMCi",
      colorBlue: "upcomingseriespage_colorBlue_16irx",
      colorBrightRed: "upcomingseriespage_colorBrightRed_3q_4Q",
      colorBrightBlue: "upcomingseriespage_colorBrightBlue_NKJZ0",
      colorBrightOrange: "upcomingseriespage_colorBrightOrange_2qusH",
      colorBrightPurple: "upcomingseriespage_colorBrightPurple_12ily",
      colorBrightYellow: "upcomingseriespage_colorBrightYellow_30mLU",
      colorBrightGreen: "upcomingseriespage_colorBrightGreen_bBJKq",
      colorBrightGrey: "upcomingseriespage_colorBrightGrey_hk-kM",
      backgroundColorBlack: "upcomingseriespage_backgroundColorBlack_1EFXw",
      backgroundColorDarkGrey:
        "upcomingseriespage_backgroundColorDarkGrey_3CkjH",
      backgroundColorLightGrey:
        "upcomingseriespage_backgroundColorLightGrey_34ldc",
      backgroundColorWhite: "upcomingseriespage_backgroundColorWhite_1EEf2",
      backgroundColorOrange: "upcomingseriespage_backgroundColorOrange_2gsLv",
      backgroundColorRed: "upcomingseriespage_backgroundColorRed_G7WdC",
      backgroundColorAqua: "upcomingseriespage_backgroundColorAqua_xeyht",
      backgroundColorBlue: "upcomingseriespage_backgroundColorBlue_3mG-U",
      backgroundColorGrey: "upcomingseriespage_backgroundColorGrey_2mq48",
      backgroundColorBrightRed:
        "upcomingseriespage_backgroundColorBrightRed_d22sw",
      backgroundColorBrightBlue:
        "upcomingseriespage_backgroundColorBrightBlue_2IZO_",
      backgroundColorBrightOrange:
        "upcomingseriespage_backgroundColorBrightOrange_3A4mx",
      backgroundColorBrightPurple:
        "upcomingseriespage_backgroundColorBrightPurple_1fD1y",
      backgroundColorBrightYellow:
        "upcomingseriespage_backgroundColorBrightYellow_gN31c",
      backgroundColorBrightGreen:
        "upcomingseriespage_backgroundColorBrightGreen_LoftU",
      backgroundColorBrightGrey:
        "upcomingseriespage_backgroundColorBrightGrey_80Ma_",
      UpcomingSeriesPage: "upcomingseriespage_UpcomingSeriesPage_2E9wf",
      Loading: "upcomingseriespage_Loading_2TSoY",
      Header: "upcomingseriespage_Header_3QPlL",
      TopIcons: "upcomingseriespage_TopIcons_oF5Sa",
      BackArrow: "upcomingseriespage_BackArrow_1HnRp",
      Dots: "upcomingseriespage_Dots_2pZjO",
      SeriesInfo: "upcomingseriespage_SeriesInfo_KKqHE",
      Team: "upcomingseriespage_Team_3zeU5",
      Logo: "upcomingseriespage_Logo_1Nx_V",
      Name: "upcomingseriespage_Name_BQCGF",
      Score: "upcomingseriespage_Score_2D7hb",
      Scrollable: "upcomingseriespage_Scrollable_16GQu",
      TeamRosters: "upcomingseriespage_TeamRosters_2WY2E",
      Title: "upcomingseriespage_Title_3ZvKc",
      TeamRosterTeams: "upcomingseriespage_TeamRosterTeams_bs5c0",
      TeamRoster: "upcomingseriespage_TeamRoster_26C06",
      Player: "upcomingseriespage_Player_juwvB",
      Image: "upcomingseriespage_Image_2V0RI",
      Hide: "upcomingseriespage_Hide_3AJ2N",
      Left: "upcomingseriespage_Left_2BwXy",
      Right: "upcomingseriespage_Right_Mn0HD",
      ProName: "upcomingseriespage_ProName_1mcTr",
      RealName: "upcomingseriespage_RealName_2pt-H",
    };
  },
  B0PS: function (e, a, t) {
    e.exports = {
      SVGIcon_Button: "SVGIcon_Button",
      EmoticonBow: "shared_svg_library_EmoticonBow_3vBI6",
      EmoticonBow_st0: "shared_svg_library_EmoticonBow_st0_3EB-7",
      EmoticonBow_st1: "shared_svg_library_EmoticonBow_st1_2NIMu",
    };
  },
  BGkC: function (e, a, t) {
    e.exports = {
      colorBlack: "navbar_colorBlack_3fFP4",
      colorWhite: "navbar_colorWhite_2uhvf",
      colorDarkGrey: "navbar_colorDarkGrey_1Fy7a",
      colorGrey: "navbar_colorGrey_3lWL4",
      colorLightGrey: "navbar_colorLightGrey__AAgx",
      colorOrange: "navbar_colorOrange_2pTtE",
      colorRed: "navbar_colorRed_vp9ou",
      colorAqua: "navbar_colorAqua_OeRDJ",
      colorBlue: "navbar_colorBlue_1qqDg",
      colorBrightRed: "navbar_colorBrightRed_22JbJ",
      colorBrightBlue: "navbar_colorBrightBlue_3aJ_6",
      colorBrightOrange: "navbar_colorBrightOrange_bnuNW",
      colorBrightPurple: "navbar_colorBrightPurple_153Gu",
      colorBrightYellow: "navbar_colorBrightYellow_3Nifb",
      colorBrightGreen: "navbar_colorBrightGreen_3yX8-",
      colorBrightGrey: "navbar_colorBrightGrey_2OIDd",
      backgroundColorBlack: "navbar_backgroundColorBlack_skcd1",
      backgroundColorDarkGrey: "navbar_backgroundColorDarkGrey_3jiA9",
      backgroundColorLightGrey: "navbar_backgroundColorLightGrey_qgyyH",
      backgroundColorWhite: "navbar_backgroundColorWhite_2yLqy",
      backgroundColorOrange: "navbar_backgroundColorOrange_3Tv76",
      backgroundColorRed: "navbar_backgroundColorRed_1CZ_K",
      backgroundColorAqua: "navbar_backgroundColorAqua_2-gw_",
      backgroundColorBlue: "navbar_backgroundColorBlue_ccQXV",
      backgroundColorGrey: "navbar_backgroundColorGrey_1kaA7",
      backgroundColorBrightRed: "navbar_backgroundColorBrightRed_gzJHf",
      backgroundColorBrightBlue: "navbar_backgroundColorBrightBlue_18okF",
      backgroundColorBrightOrange: "navbar_backgroundColorBrightOrange_2gYrh",
      backgroundColorBrightPurple: "navbar_backgroundColorBrightPurple_2ItJF",
      backgroundColorBrightYellow: "navbar_backgroundColorBrightYellow_6egVY",
      backgroundColorBrightGreen: "navbar_backgroundColorBrightGreen_3QTj2",
      backgroundColorBrightGrey: "navbar_backgroundColorBrightGrey_w-O2R",
      NavBar: "navbar_NavBar_2bEnL",
      NavBarButton: "navbar_NavBarButton_YYx_2",
      Disabled: "navbar_Disabled_2oTex",
      Enabled: "navbar_Enabled_3yusW",
    };
  },
  CDQt: function (e, a, t) {
    e.exports = {
      colorBlack: "teamlogo_colorBlack_1gyoR",
      colorWhite: "teamlogo_colorWhite_1ud5y",
      colorDarkGrey: "teamlogo_colorDarkGrey_2vxVp",
      colorGrey: "teamlogo_colorGrey_31M7N",
      colorLightGrey: "teamlogo_colorLightGrey_2I07z",
      colorOrange: "teamlogo_colorOrange_2rejP",
      colorRed: "teamlogo_colorRed_2ECf8",
      colorAqua: "teamlogo_colorAqua_7f_Ug",
      colorBlue: "teamlogo_colorBlue_OReLJ",
      colorBrightRed: "teamlogo_colorBrightRed_39U_i",
      colorBrightBlue: "teamlogo_colorBrightBlue_1ga7F",
      colorBrightOrange: "teamlogo_colorBrightOrange_215bV",
      colorBrightPurple: "teamlogo_colorBrightPurple_2vJvv",
      colorBrightYellow: "teamlogo_colorBrightYellow_1TiHY",
      colorBrightGreen: "teamlogo_colorBrightGreen_1tE3J",
      colorBrightGrey: "teamlogo_colorBrightGrey_37ajH",
      backgroundColorBlack: "teamlogo_backgroundColorBlack_2QeB1",
      backgroundColorDarkGrey: "teamlogo_backgroundColorDarkGrey_1Ptnz",
      backgroundColorLightGrey: "teamlogo_backgroundColorLightGrey_1AqLX",
      backgroundColorWhite: "teamlogo_backgroundColorWhite_1UgYf",
      backgroundColorOrange: "teamlogo_backgroundColorOrange_Kq-I1",
      backgroundColorRed: "teamlogo_backgroundColorRed_3LnEn",
      backgroundColorAqua: "teamlogo_backgroundColorAqua_2W42V",
      backgroundColorBlue: "teamlogo_backgroundColorBlue_2iJbc",
      backgroundColorGrey: "teamlogo_backgroundColorGrey_2iKh1",
      backgroundColorBrightRed: "teamlogo_backgroundColorBrightRed_svWj6",
      backgroundColorBrightBlue: "teamlogo_backgroundColorBrightBlue_1teeH",
      backgroundColorBrightOrange: "teamlogo_backgroundColorBrightOrange_3Y_qp",
      backgroundColorBrightPurple: "teamlogo_backgroundColorBrightPurple_4M-7y",
      backgroundColorBrightYellow: "teamlogo_backgroundColorBrightYellow_3-7f5",
      backgroundColorBrightGreen: "teamlogo_backgroundColorBrightGreen_2K9Tv",
      backgroundColorBrightGrey: "teamlogo_backgroundColorBrightGrey_1-N_g",
      TeamLogoLarge: "teamlogo_TeamLogoLarge_3msay",
      TeamLogoMedium: "teamlogo_TeamLogoMedium_2uyQE",
      TeamLogoSmall: "teamlogo_TeamLogoSmall_3SBl1",
    };
  },
  CqJL: function (e, a, t) {
    "use strict";
    t.d(a, "b", function () {
      return T;
    }),
      t.d(a, "a", function () {
        return L;
      });
    var r = t("mrSG");
    t("q1tI");
    function o(e, a) {
      switch ((void 0 === a && (a = 0), e)) {
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
          return a;
      }
    }
    t("2vnA");
    var n;
    !(function (e) {
      (e[(e.Input = 0)] = "Input"),
        (e[(e.AllOutput = 1)] = "AllOutput"),
        (e[(e.Left = 2)] = "Left"),
        (e[(e.Right = 3)] = "Right"),
        (e[(e.Sub = 4)] = "Sub"),
        (e[(e.BackLeft = 5)] = "BackLeft"),
        (e[(e.BackRight = 6)] = "BackRight");
    })(n || (n = {}));
    var c;
    !(function (e) {
      (e[(e.Error = -2)] = "Error"),
        (e[(e.Invalid = -1)] = "Invalid"),
        (e[(e.UpToDate = 0)] = "UpToDate"),
        (e[(e.Checking = 1)] = "Checking"),
        (e[(e.Available = 2)] = "Available"),
        (e[(e.Downloading = 3)] = "Downloading"),
        (e[(e.Downloaded = 4)] = "Downloaded"),
        (e[(e.Applying = 5)] = "Applying"),
        (e[(e.Applied = 6)] = "Applied"),
        (e[(e.ClientRestartPending = 7)] = "ClientRestartPending"),
        (e[(e.SystemRestartPending = 8)] = "SystemRestartPending");
    })(c || (c = {}));
    var l;
    !(function (e) {
      (e[(e.EBrowserType_OffScreen = 0)] = "EBrowserType_OffScreen"),
        (e[(e.EBrowserType_OpenVROverlay = 1)] = "EBrowserType_OpenVROverlay"),
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
        (e[(e.EBrowserType_MAX = 12)] = "EBrowserType_MAX");
    })(l || (l = {}));
    var i, s;
    !(function (e) {
      (e[(e.k_EClientUINotificationGroupChatMessage = 1)] =
        "k_EClientUINotificationGroupChatMessage"),
        (e[(e.k_EClientUINotificationFriendChatMessage = 2)] =
          "k_EClientUINotificationFriendChatMessage"),
        (e[(e.k_EClientUINotificationFriendPersonaState = 3)] =
          "k_EClientUINotificationFriendPersonaState");
    })(i || (i = {})),
      (function (e) {
        (e[(e.k_EComputerActiveStateInvalid = 0)] =
          "k_EComputerActiveStateInvalid"),
          (e[(e.k_EComputerActiveStateActive = 1)] =
            "k_EComputerActiveStateActive"),
          (e[(e.k_EComputerActiveStateIdle = 2)] =
            "k_EComputerActiveStateIdle");
      })(s || (s = {}));
    var g;
    !(function (e) {
      (e[(e.k_EPending = 0)] = "k_EPending"),
        (e[(e.k_EAccepted = 1)] = "k_EAccepted"),
        (e[(e.k_ERejected = 2)] = "k_ERejected");
    })(g || (g = {}));
    var m, _;
    !(function (e) {
      (e[(e.k_EClientUsedInputTypeKeyboard = 0)] =
        "k_EClientUsedInputTypeKeyboard"),
        (e[(e.k_EClientUsedInputTypeMouse = 1)] =
          "k_EClientUsedInputTypeMouse"),
        (e[(e.k_EClientUsedInputTypeController = 2)] =
          "k_EClientUsedInputTypeController"),
        (e[(e.k_EClientUsedInputTypeMax = 3)] = "k_EClientUsedInputTypeMax");
    })(m || (m = {})),
      (function (e) {
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
      })(_ || (_ = {}));
    var d;
    !(function (e) {
      (e[(e.k_ESteamRealmUnknown = 0)] = "k_ESteamRealmUnknown"),
        (e[(e.k_ESteamRealmGlobal = 1)] = "k_ESteamRealmGlobal"),
        (e[(e.k_ESteamRealmChina = 2)] = "k_ESteamRealmChina");
    })(d || (d = {}));
    var p, u, h, b, y, k;
    !(function (e) {
      (e[(e.Unknown = 0)] = "Unknown"),
        (e[(e.Wired = 1)] = "Wired"),
        (e[(e.Wireless = 2)] = "Wireless"),
        (e[(e.Virtual = 3)] = "Virtual");
    })(p || (p = {})),
      (function (e) {
        (e[(e.NotPresent = 0)] = "NotPresent"),
          (e[(e.Failed = 1)] = "Failed"),
          (e[(e.Disconnected = 2)] = "Disconnected"),
          (e[(e.Disconnecting = 3)] = "Disconnecting"),
          (e[(e.Connecting = 4)] = "Connecting"),
          (e[(e.Connected = 5)] = "Connected"),
          (e[(e.Retrying = 6)] = "Retrying");
      })(u || (u = {})),
      (function (e) {
        (e[(e.None = 0)] = "None"),
          (e[(e.Weak = 1)] = "Weak"),
          (e[(e.Ok = 2)] = "Ok"),
          (e[(e.Good = 3)] = "Good"),
          (e[(e.Excellent = 4)] = "Excellent");
      })(h || (h = {})),
      (function (e) {
        (e[(e.None = 0)] = "None"),
          (e[(e.StaticWep = 1)] = "StaticWep"),
          (e[(e.DynamicWep = 2)] = "DynamicWep"),
          (e[(e.Wpa = 4)] = "Wpa"),
          (e[(e.WpaEnterprise = 8)] = "WpaEnterprise"),
          (e[(e.Wpa2 = 16)] = "Wpa2"),
          (e[(e.Wpa2Enterprise = 32)] = "Wpa2Enterprise"),
          (e[(e.Unsupported = 32768)] = "Unsupported");
      })(b || (b = {})),
      (function (e) {
        (e[(e.SystemKey0 = 0)] = "SystemKey0"),
          (e[(e.SystemKey1 = 1)] = "SystemKey1");
      })(y || (y = {})),
      (function (e) {
        (e[(e.Hidden = 0)] = "Hidden"),
          (e[(e.Notification = 1)] = "Notification"),
          (e[(e.Overlay = 2)] = "Overlay"),
          (e[(e.Opaque = 3)] = "Opaque"),
          (e[(e.OverlayKeyboard = 4)] = "OverlayKeyboard");
      })(k || (k = {}));
    var v = t("gM6l");
    function f(e) {
      if (!E() || !window.document.cookie) return null;
      var a = document.cookie.match("(^|; )" + e + "=([^;]*)");
      return a && a[2] ? decodeURIComponent(a[2]) : null;
    }
    function E() {
      return !!window.document;
    }
    var C,
      N = {
        EUNIVERSE: 0,
        WEB_UNIVERSE: "",
        LANGUAGE: "english",
        SUPPORTED_LANGUAGES: [],
        COUNTRY: "",
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
        STATS_BASE_URL: "",
        INTERNAL_STATS_BASE_URL: "",
        BASE_URL_STORE_CDN_ASSETS: "",
        IN_CLIENT: !1,
        USE_POPUPS: !1,
        IN_MOBILE: !1,
        IN_TENFOOT: !1,
        PLATFORM: "",
        SNR: "",
        LAUNCHER_TYPE: 0,
        EREALM: 0,
        LOCAL_HOSTNAME: "",
        WEBAPI_BASE_URL: "",
        TOKEN_URL: "",
        BUILD_TIMESTAMP: 0,
        PAGE_TIMESTAMP: 0,
        get SESSIONID() {
          return (function () {
            if (!E()) return C || (C = B()), C;
            var e = f("sessionid");
            e || (e = B());
            return e;
          })();
        },
        FRIENDSUI_BETA: !1,
        STEAM_TV: !1,
        DEV_MODE: !1,
        IN_LIBRARY: !1,
        IN_SP: !1,
      };
    function B() {
      var e = (function () {
        for (var e = "", a = 0; a < 24; a++)
          e += Object(v.a)(0, 35).toString(36);
        return e;
      })();
      return (
        (function (e, a, t, r) {
          if (E()) {
            r || (r = "/");
            var o = "";
            if (void 0 !== t && t) {
              var n = new Date();
              n.setTime(n.getTime() + 864e5 * t),
                (o = "; expires=" + n.toUTCString());
            }
            document.cookie =
              encodeURIComponent(e) +
              "=" +
              encodeURIComponent(a) +
              o +
              ";path=" +
              r;
          }
        })("sessionid", e, 0),
        e
      );
    }
    t("Gp1o");
    new Map();
    new Map(), new Map();
    new Map(), new Map(), new Map(), new Map(), new Map();
    var S = (function () {
      function e() {
        (this.m_mapTokens = new Map()), (this.m_mapFallbackTokens = new Map());
      }
      return (
        (e.InstallErrorReportingStore = function (e) {
          this.sm_ErrorReportingStore = e;
        }),
        (e.GetLanguageFallback = function (e) {
          return "sc_schinese" === e ? "schinese" : "english";
        }),
        (e.GetELanguageFallback = function (e) {
          return 29 === e ? 6 : 0;
        }),
        (e.IsELanguageValidInRealm = function (e, a) {
          return (
            a === (29 === e ? d.k_ESteamRealmChina : d.k_ESteamRealmGlobal)
          );
        }),
        (e.GetLanguageListForRealms = function (e) {
          for (var a = new Array(), t = 0; t < 30; t++)
            for (var r = 0, o = e; r < o.length; r++) {
              var n = o[r];
              if (this.IsELanguageValidInRealm(t, n)) {
                a.push(t);
                break;
              }
            }
          return a;
        }),
        (e.prototype.InitFromObjects = function (e, a, t, o, n) {
          n || this.m_mapTokens.clear();
          var c = Object(r.a)(Object(r.a)({}, t || {}), e),
            l = Object(r.a)(Object(r.a)({}, o || {}), a || {});
          this.AddTokens(c, l);
        }),
        (e.prototype.InitDirect = function (e, a) {
          this.m_mapTokens.clear(),
            this.m_mapFallbackTokens.clear(),
            this.AddTokens(e, a);
        }),
        (e.prototype.AddTokens = function (e, a) {
          var t = this;
          Object.keys(e).forEach(function (a) {
            t.m_mapTokens.set(a, e[a]);
          }),
            a &&
              Object.keys(a).forEach(function (e) {
                t.m_mapTokens.has(e) || t.m_mapTokens.set(e, a[e]),
                  t.m_mapFallbackTokens.set(e, a[e]);
              });
        }),
        (e.prototype.GetPreferredLocales = function () {
          return this.m_rgLocalesToUse
            ? this.m_rgLocalesToUse
            : navigator && navigator.languages
            ? navigator.languages
            : ["en-US"];
        }),
        (e.prototype.GetELanguageFallbackOrder = function (a) {
          void 0 === a && (a = null);
          var t = new Array();
          (t.push(o(N.LANGUAGE)),
          (N.SUPPORTED_LANGUAGES || []).forEach(function (e) {
            e.value != N.LANGUAGE && t.push(o(e.value));
          }),
          a) &&
            e.GetLanguageListForRealms(a).forEach(function (e) {
              -1 == t.indexOf(e) && t.push(e);
            });
          return t;
        }),
        (e.prototype.SetPreferredLocales = function (e) {
          this.m_rgLocalesToUse = e;
        }),
        (e.prototype.LocalizeString = function (a) {
          if (a && 0 != a.length && "#" == a.charAt(0)) {
            var t = this.m_mapTokens.get(a.substring(1));
            if (void 0 !== t) return t;
            e.sm_ErrorReportingStore &&
              e.sm_ErrorReportingStore.ReportError(
                new Error(
                  "Unable to find localization token '" +
                    a +
                    "' for language '" +
                    N.LANGUAGE +
                    "', " +
                    this.m_mapTokens.size +
                    " tokens in map"
                ),
                { bIncludeMessageInIdentifier: !0 }
              );
          }
        }),
        (e.prototype.LocalizeStringFromFallback = function (e) {
          if (e && 0 != e.length && "#" == e.charAt(0)) {
            var a = this.m_mapFallbackTokens.get(e.substring(1));
            if (void 0 !== a) return a;
          }
        }),
        e
      );
    })();
    function T(e) {
      for (var a = [], t = 1; t < arguments.length; t++)
        a[t - 1] = arguments[t];
      var r = L.LocalizeString(e);
      return void 0 === r
        ? e
        : (a.length > 0 &&
            (r = r.replace(/%(?:(\d+)\$)?s/g, function (e, t) {
              if (t <= a.length && t >= 1) {
                var r = a[t - 1];
                return String(null == r ? "" : r);
              }
              return e;
            })),
          r);
    }
    var L = new S();
    window.LocalizationManager = L;
  },
  Gb4a: function (e, a, t) {
    e.exports = {
      colorBlack: "card_colorBlack_1iVZK",
      colorWhite: "card_colorWhite_51Gy2",
      colorDarkGrey: "card_colorDarkGrey_YYpRP",
      colorGrey: "card_colorGrey_1UbnS",
      colorLightGrey: "card_colorLightGrey_2Ir_K",
      colorOrange: "card_colorOrange_24gEH",
      colorRed: "card_colorRed_3f0ea",
      colorAqua: "card_colorAqua_2Qt38",
      colorBlue: "card_colorBlue_1Eo8n",
      colorBrightRed: "card_colorBrightRed_T4E9g",
      colorBrightBlue: "card_colorBrightBlue_2aMx6",
      colorBrightOrange: "card_colorBrightOrange_3FMXe",
      colorBrightPurple: "card_colorBrightPurple_2wfL6",
      colorBrightYellow: "card_colorBrightYellow_1Z7xj",
      colorBrightGreen: "card_colorBrightGreen_2sHWj",
      colorBrightGrey: "card_colorBrightGrey_3VAlq",
      backgroundColorBlack: "card_backgroundColorBlack_1oKzb",
      backgroundColorDarkGrey: "card_backgroundColorDarkGrey_2hWha",
      backgroundColorLightGrey: "card_backgroundColorLightGrey_2UDLx",
      backgroundColorWhite: "card_backgroundColorWhite_3APd9",
      backgroundColorOrange: "card_backgroundColorOrange_E0cf6",
      backgroundColorRed: "card_backgroundColorRed_1dwx5",
      backgroundColorAqua: "card_backgroundColorAqua_pKeDt",
      backgroundColorBlue: "card_backgroundColorBlue_100WD",
      backgroundColorGrey: "card_backgroundColorGrey_3AVDv",
      backgroundColorBrightRed: "card_backgroundColorBrightRed_tcdo2",
      backgroundColorBrightBlue: "card_backgroundColorBrightBlue_HSGGd",
      backgroundColorBrightOrange: "card_backgroundColorBrightOrange_Nn2Hg",
      backgroundColorBrightPurple: "card_backgroundColorBrightPurple_yXHmt",
      backgroundColorBrightYellow: "card_backgroundColorBrightYellow_3_e91",
      backgroundColorBrightGreen: "card_backgroundColorBrightGreen_3QX81",
      backgroundColorBrightGrey: "card_backgroundColorBrightGrey_lU52H",
      card: "card_card_1tF7A",
      content: "card_content_1YZD8",
      image: "card_image_3WUY1",
      icon: "card_icon_1FP65",
      news: "card_news_2BD9x",
      withIcon: "card_withIcon_3d2FN",
      imageCard: "card_imageCard_MAp_Z",
      short: "card_short_3cF-m",
      tournament: "card_tournament_2Y2d2",
      type: "card_type_31iAa",
      title: "card_title_3eOSG",
      details: "card_details_28jwA",
      location: "card_location_2sNvn",
      prize: "card_prize_1i0Fz",
      Dates: "card_Dates_pR_8U",
      SeriesCard: "card_SeriesCard_38VF6",
      Columns: "card_Columns_1T5HX",
      Team: "card_Team_k8AMh",
      TeamName: "card_TeamName_1WfZh",
      Details: "card_Details_17bTB",
      GameOrFinal: "card_GameOrFinal_1-0SG",
      Score: "card_Score_4ibHM",
      ScoreValue: "card_ScoreValue_6pTQX",
      ScoreSeparator: "card_ScoreSeparator_k4aUQ",
      Time: "card_Time_6CmBR",
      Timestamp: "card_Timestamp_3-ijN",
      ThrobberSpacing: "card_ThrobberSpacing_y-Feh",
      UpcomingSeriesCard: "card_UpcomingSeriesCard_3Wdq2",
      LiveMatchCard: "card_LiveMatchCard_1exvk",
      LeagueLogo: "card_LeagueLogo_1u8j2",
      Center: "card_Center_3QSZ9",
      BestOf: "card_BestOf_3twbC",
      MatchCard: "card_MatchCard_GtB5l",
      Game: "card_Game_3ueR7",
      TournamentResultsCard: "card_TournamentResultsCard_wiBM7",
      Content: "card_Content_1Z3Wm",
      TopDown: "card_TopDown__yQwU",
      Generic: "card_Generic_1i9jD",
      TeamInfo: "card_TeamInfo_Q12nf",
      TeamLogo: "card_TeamLogo_AfvFl",
      Text: "card_Text_PfOMJ",
      Earnings: "card_Earnings_iZi5I",
      Points: "card_Points_2EHbX",
      Winnings: "card_Winnings_2DNXX",
      TeamRosterCard: "card_TeamRosterCard_3wphi",
    };
  },
  IV5K: function (e, a, t) {
    e.exports = {
      SliderContainer: "slider_SliderContainer_VXOHg",
      Slider: "slider_Slider_1WcRS",
      Pip: "slider_Pip_37IVB",
    };
  },
  KAY9: function (e, a, t) {
    "use strict";
    t.d(a, "d", function () {
      return ft;
    }),
      t.d(a, "c", function () {
        return Et;
      }),
      t.d(a, "b", function () {
        return kt;
      }),
      t.d(a, "a", function () {
        return Ct;
      });
    var r,
      o,
      n = t("mrSG"),
      c = t("vDqi"),
      l = t.n(c),
      i = t("gfbn"),
      s = t("tkkQ"),
      g = t("q1tI"),
      m = t.n(g),
      _ = t("oFFJ"),
      d = t("jKe7"),
      p = t("2INN"),
      u = t("mf+E"),
      h = t("BGkC"),
      b = t.n(h),
      y = t("CqJL"),
      k = t("wIs1"),
      v = t("uNOt");
    !(function (e) {
      (e[(e.LeagueSelect = 0)] = "LeagueSelect"),
        (e[(e.RegionSelect = 1)] = "RegionSelect"),
        (e[(e.Roster = 2)] = "Roster"),
        (e[(e.PlayerSelect = 3)] = "PlayerSelect"),
        (e[(e.Scores = 4)] = "Scores"),
        (e[(e.Leaderboard = 5)] = "Leaderboard");
    })(r || (r = {})),
      (function (e) {
        (e[(e.Teams = 0)] = "Teams"),
          (e[(e.Standings = 1)] = "Standings"),
          (e[(e.Matchups = 2)] = "Matchups");
      })(o || (o = {}));
    var f = function () {
        return "/feed";
      },
      E = function () {
        return "/tournaments";
      },
      C = function (e, a) {
        return "/standings" + (e ? "/" + e : "") + (a ? "/" + a : "");
      },
      N = function () {
        return "/predictions";
      },
      B = function () {
        return "/search";
      },
      S = function () {
        return "/profile";
      },
      T = function (e) {
        return "/team/" + e;
      },
      L = function (e) {
        return "/player/" + e;
      },
      P = function (e, a) {
        return "/series/" + e + "/" + a;
      },
      R = function (e, a) {
        return "/upcomingseries/" + e + "/" + a;
      },
      I = function (e) {
        return "/match/" + e;
      },
      O = function (e) {
        return "/livematch/" + e;
      },
      D = function (e, a, t) {
        var r = t || "results";
        switch (a) {
          case o.Teams:
            return "/tournament/" + e + "/teams";
          default:
          case o.Standings:
            return "/tournament/" + e + "/standings/" + r;
          case o.Matchups:
            return "/tournament/" + e + "/matchups";
        }
      },
      G = function (e, a, t, o) {
        switch (e) {
          case r.Roster:
            return "/fantasy/" + a + "/roster";
          case r.PlayerSelect:
            return "/fantasy/" + a + "/playerselect/" + t;
          case r.Scores:
            return "/fantasy/" + a + "/scores/" + o;
          case r.Leaderboard:
            return "/fantasy/" + a + "/leaderboard";
          case r.RegionSelect:
            return "/fantasy/" + a + "/regionselect";
          case r.LeagueSelect:
          default:
            return "/fantasy/";
        }
      },
      A = function () {
        for (var e = [], a = 0; a < arguments.length; a++) e[a] = arguments[a];
        return e.reduce(function (e, a) {
          return a
            ? "string" == typeof a
              ? e
                ? e + " " + a
                : a
              : "object" == typeof a
              ? e
                ? e + " " + w(a)
                : w(a)
              : e
            : e;
        }, "");
      };
    function w(e) {
      return Object.keys(e).reduce(function (a, t) {
        return e[t] ? (a ? a + " " + t : t) : a;
      }, "");
    }
    var M = [
        {
          strPath: f(),
          strToken: "#NavBar_Feed",
          strImage: "nav_feed",
          bEnabled: !0,
        },
        {
          strPath: E(),
          strToken: "#NavBar_Tournaments",
          strImage: "nav_tournaments_new",
          bEnabled: !0,
        },
        {
          strPath: C("league", "na"),
          strToken: "#NavBar_Standings",
          strImage: "nav_standings",
          bEnabled: !0,
        },
        {
          strPath: N(),
          strToken: "#NavBar_Predictions",
          strImage: "nav_predictions",
          bEnabled: !0,
        },
        {
          strPath: G(r.LeagueSelect),
          strToken: "#NavBar_Fantasy",
          strImage: "nav_fantasy",
          bEnabled: !1,
        },
      ],
      F = (function (e) {
        function a() {
          var a = (null !== e && e.apply(this, arguments)) || this;
          return (a.state = { strActivePath: void 0 }), a;
        }
        return (
          Object(n.d)(a, e),
          (a.getDerivedStateFromProps = function (e, a) {
            var t = e.location.pathname;
            return M.some(function (e) {
              var a = e.strPath;
              return t === a;
            })
              ? { strActivePath: t }
              : null;
          }),
          (a.prototype.render = function () {
            var e = this;
            return (
              console.log(s.a),
              m.a.createElement(
                "div",
                { className: b.a.NavBar },
                M.map(function (a) {
                  var t = a.strPath,
                    r = a.strToken,
                    o = a.strImage,
                    n = a.bEnabled;
                  return m.a.createElement(H, {
                    key: t,
                    to: t,
                    label: Object(y.b)(r),
                    image: s.a.IMG_URL + o,
                    active: t === e.state.strActivePath,
                    enabled: n,
                  });
                })
              )
            );
          }),
          a
        );
      })(m.a.Component),
      j = Object(k.a)(F),
      H = (function (e) {
        function a() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(n.d)(a, e),
          (a.prototype.render = function () {
            var e = this.props,
              a = e.to,
              t = e.label,
              r = e.image,
              o = e.active,
              n = e.enabled;
            return m.a.createElement(
              v.a,
              {
                to: n ? a : "#",
                className: A(b.a.NavBarButton, !n && b.a.Disabled),
                activeClassName: b.a.Enabled,
                isActive: function () {
                  return o;
                },
                onClick: function () {
                  return window.history.replaceState({}, "", "");
                },
              },
              m.a.createElement("img", {
                src: r + (o ? "_selected.png" : ".png"),
              }),
              t
            );
          }),
          a
        );
      })(m.a.Component),
      U = t("W8ih"),
      W = t.n(U),
      x = t("TyAF");
    t("Gp1o");
    function q(e, a, t) {
      return {
        get: function () {
          var e = t.value.bind(this);
          return (
            this.hasOwnProperty(a) ||
              Object.defineProperty(this, a, { value: e }),
            e
          );
        },
      };
    }
    var Y = t("8oBW"),
      V = function (e) {
        return m.a.createElement(
          X,
          { helpPage: e.helpPage },
          m.a.createElement(
            "div",
            { className: W.a.FullHeightWidth },
            m.a.createElement(
              "div",
              { className: W.a.HelpTop },
              m.a.createElement("img", {
                src: s.a.IMG_URL + "help_main_news_feed.png",
              })
            ),
            m.a.createElement(
              "div",
              { className: W.a.HelpBottom },
              m.a.createElement(
                "div",
                { className: W.a.BottomHeader },
                Object(y.b)("#HelpMain_NewsFeed")
              ),
              m.a.createElement(
                "div",
                { className: W.a.BottomText },
                Object(y.b)("#HelpMain_NewsFeedText")
              )
            )
          ),
          m.a.createElement(
            "div",
            { className: W.a.FullHeightWidth },
            m.a.createElement(
              "div",
              { className: W.a.HelpTop },
              m.a.createElement("img", {
                src: s.a.IMG_URL + "help_main_tournament.png",
              })
            ),
            m.a.createElement(
              "div",
              { className: W.a.HelpBottom },
              m.a.createElement(
                "div",
                { className: W.a.BottomHeader },
                Object(y.b)("#HelpMain_Tournaments")
              ),
              m.a.createElement(
                "div",
                { className: W.a.BottomText },
                Object(y.b)("#HelpMain_TournamentsText")
              )
            )
          ),
          m.a.createElement(
            "div",
            { className: W.a.FullHeightWidth },
            m.a.createElement(
              "div",
              { className: W.a.HelpTop },
              m.a.createElement("img", {
                src: s.a.IMG_URL + "help_main_matches.png",
              })
            ),
            m.a.createElement(
              "div",
              { className: W.a.HelpBottom },
              m.a.createElement(
                "div",
                { className: W.a.BottomHeader },
                Object(y.b)("#HelpMain_Matches")
              ),
              m.a.createElement(
                "div",
                { className: W.a.BottomText },
                Object(y.b)("#HelpMain_MatchesText")
              )
            )
          ),
          m.a.createElement(
            "div",
            { className: W.a.FullHeightWidth },
            m.a.createElement(
              "div",
              { className: W.a.HelpTop },
              m.a.createElement("img", {
                src: s.a.IMG_URL + "help_main_following.png",
              })
            ),
            m.a.createElement(
              "div",
              { className: W.a.HelpBottom },
              m.a.createElement(
                "div",
                { className: W.a.BottomHeader },
                Object(y.b)("#HelpMain_Favorites")
              ),
              m.a.createElement(
                "div",
                { className: W.a.BottomText },
                Object(y.b)("#HelpMain_FavoritesText")
              )
            )
          ),
          m.a.createElement(
            "div",
            { className: W.a.FullHeightWidth },
            m.a.createElement(
              "div",
              { className: W.a.HelpTop },
              m.a.createElement("img", {
                src: s.a.IMG_URL + "help_main_predictions.png",
              })
            ),
            m.a.createElement(
              "div",
              { className: W.a.HelpBottom },
              m.a.createElement(
                "div",
                { className: W.a.BottomHeader },
                Object(y.b)("#HelpMain_Predictions")
              ),
              m.a.createElement(
                "div",
                { className: W.a.BottomText },
                Object(y.b)("#HelpMain_PredictionsText")
              )
            )
          ),
          m.a.createElement(
            "div",
            { className: W.a.FullHeightWidth },
            m.a.createElement(
              "div",
              { className: W.a.HelpTop },
              m.a.createElement("img", {
                src: s.a.IMG_URL + "help_main_fantasy.png",
              })
            ),
            m.a.createElement(
              "div",
              { className: W.a.HelpBottom },
              m.a.createElement(
                "div",
                { className: W.a.BottomHeader },
                Object(y.b)("#HelpMain_Fantasy")
              ),
              m.a.createElement(
                "div",
                { className: W.a.BottomText },
                Object(y.b)("#HelpMain_FantasyText")
              )
            )
          )
        );
      },
      z = function (e) {
        return m.a.createElement(
          X,
          { helpPage: e.helpPage, className: W.a.FantasyHelp },
          m.a.createElement(
            "div",
            { className: W.a.FullHeightWidth },
            m.a.createElement(
              "div",
              { className: W.a.HelpTop },
              m.a.createElement("img", {
                src: s.a.IMG_URL + "help_fantasy_tournament.png",
              })
            ),
            m.a.createElement(
              "div",
              { className: W.a.HelpBottom },
              m.a.createElement(
                "div",
                { className: W.a.BottomHeader },
                Object(y.b)("#HelpFantasy_Page1_Header")
              ),
              m.a.createElement(
                "div",
                { className: W.a.BottomText },
                Object(y.b)("#HelpFantasy_Page1_Body")
              )
            )
          ),
          m.a.createElement(
            "div",
            { className: W.a.FullHeightWidth },
            m.a.createElement(
              "div",
              { className: W.a.HelpTop },
              m.a.createElement("img", {
                src: s.a.IMG_URL + "help_fantasy_roster.png",
              })
            ),
            m.a.createElement(
              "div",
              { className: W.a.HelpBottom },
              m.a.createElement(
                "div",
                { className: W.a.BottomHeader },
                Object(y.b)("#HelpFantasy_Page2_Header")
              ),
              m.a.createElement(
                "div",
                { className: W.a.BottomText },
                Object(y.b)("#HelpFantasy_Page2_Body")
              ),
              m.a.createElement("div", { className: W.a.Spacer }),
              m.a.createElement(
                "div",
                { className: W.a.BottomText },
                Object(y.b)("#HelpFantasy_Page2_Body2")
              )
            )
          ),
          m.a.createElement(
            "div",
            { className: W.a.FullHeightWidth },
            m.a.createElement(
              "div",
              { className: W.a.HelpTop },
              m.a.createElement("img", {
                src: s.a.IMG_URL + "help_fantasy_compare.png",
              })
            ),
            m.a.createElement(
              "div",
              { className: W.a.HelpBottom },
              m.a.createElement(
                "div",
                { className: W.a.BottomHeader },
                Object(y.b)("#HelpFantasy_Page3_Header")
              ),
              m.a.createElement(
                "div",
                { className: W.a.BottomText },
                Object(y.b)("#HelpFantasy_Page3_Body")
              )
            )
          ),
          m.a.createElement(
            "div",
            { className: W.a.FullHeightWidth },
            m.a.createElement(
              "div",
              { className: W.a.HelpTop },
              m.a.createElement("img", {
                src: s.a.IMG_URL + "help_fantasy_shards.png",
              })
            ),
            m.a.createElement(
              "div",
              { className: W.a.HelpBottom },
              m.a.createElement(
                "div",
                { className: W.a.BottomHeader },
                Object(y.b)("#HelpFantasy_Page4_Header")
              ),
              m.a.createElement(
                "div",
                { className: W.a.BottomText },
                Object(y.b)("#HelpFantasy_Page4_Body")
              ),
              m.a.createElement("div", { className: W.a.Spacer }),
              m.a.createElement(
                "div",
                { className: A(W.a.BottomText, W.a.SubHeader) },
                Object(y.b)("#HelpFantasy_Page4_Qualifiers")
              ),
              m.a.createElement(
                "div",
                { className: A(W.a.BottomText, W.a.Caps, W.a.Gold) },
                Object(y.b)("#HelpFantasy_Page4_Details1")
              ),
              m.a.createElement(
                "div",
                { className: A(W.a.BottomText, W.a.Caps, W.a.Silver) },
                Object(y.b)("#HelpFantasy_Page4_Details2")
              ),
              m.a.createElement(
                "div",
                { className: A(W.a.BottomText, W.a.Caps, W.a.Bronze) },
                Object(y.b)("#HelpFantasy_Page4_Details3")
              ),
              m.a.createElement("div", { className: W.a.Spacer }),
              m.a.createElement(
                "div",
                { className: A(W.a.BottomText, W.a.SubHeader) },
                Object(y.b)("#HelpFantasy_Page4_MainEvents")
              ),
              m.a.createElement(
                "div",
                { className: A(W.a.BottomText, W.a.Caps, W.a.Gold) },
                Object(y.b)("#HelpFantasy_Page4_Details1b")
              ),
              m.a.createElement(
                "div",
                { className: A(W.a.BottomText, W.a.Caps, W.a.Silver) },
                Object(y.b)("#HelpFantasy_Page4_Details2b")
              ),
              m.a.createElement(
                "div",
                { className: A(W.a.BottomText, W.a.Caps, W.a.Bronze) },
                Object(y.b)("#HelpFantasy_Page4_Details3b")
              )
            )
          ),
          m.a.createElement(
            "div",
            { className: W.a.FullHeightWidth },
            m.a.createElement(
              "div",
              { className: W.a.HelpTop },
              m.a.createElement("img", {
                src: s.a.IMG_URL + "help_fantasy_ranking.png",
              })
            ),
            m.a.createElement(
              "div",
              { className: W.a.HelpBottom },
              m.a.createElement(
                "div",
                { className: W.a.BottomHeader },
                Object(y.b)("#HelpFantasy_Page5_Header")
              ),
              m.a.createElement(
                "div",
                { className: W.a.BottomText },
                Object(y.b)("#HelpFantasy_Page5_Body")
              ),
              m.a.createElement(
                "div",
                { className: W.a.TwoColumn },
                m.a.createElement(
                  "div",
                  { className: W.a.Column },
                  m.a.createElement("div", { className: W.a.Spacer }),
                  m.a.createElement(
                    "div",
                    { className: A(W.a.BottomText, W.a.Small) },
                    Object(y.b)("#HelpFantasy_Page5_Details1")
                  ),
                  m.a.createElement("div", { className: W.a.Spacer }),
                  m.a.createElement(
                    "div",
                    { className: A(W.a.BottomText, W.a.Small) },
                    Object(y.b)("#HelpFantasy_Page5_Details2")
                  ),
                  m.a.createElement("div", { className: W.a.Spacer }),
                  m.a.createElement(
                    "div",
                    { className: A(W.a.BottomText, W.a.Small) },
                    Object(y.b)("#HelpFantasy_Page5_Details3")
                  ),
                  m.a.createElement("div", { className: W.a.Spacer }),
                  m.a.createElement(
                    "div",
                    { className: A(W.a.BottomText, W.a.Small) },
                    Object(y.b)("#HelpFantasy_Page5_Details4")
                  ),
                  m.a.createElement("div", { className: W.a.Spacer }),
                  m.a.createElement(
                    "div",
                    { className: A(W.a.BottomText, W.a.Small) },
                    Object(y.b)("#HelpFantasy_Page5_Details5")
                  ),
                  m.a.createElement("div", { className: W.a.Spacer }),
                  m.a.createElement(
                    "div",
                    { className: A(W.a.BottomText, W.a.Small) },
                    Object(y.b)("#HelpFantasy_Page5_Details6")
                  )
                ),
                m.a.createElement(
                  "div",
                  { className: W.a.Column },
                  m.a.createElement("div", { className: W.a.Spacer }),
                  m.a.createElement(
                    "div",
                    { className: A(W.a.BottomText, W.a.Small) },
                    Object(y.b)("#HelpFantasy_Page5_Details7")
                  ),
                  m.a.createElement("div", { className: W.a.Spacer }),
                  m.a.createElement(
                    "div",
                    { className: A(W.a.BottomText, W.a.Small) },
                    Object(y.b)("#HelpFantasy_Page5_Details8")
                  ),
                  m.a.createElement("div", { className: W.a.Spacer }),
                  m.a.createElement(
                    "div",
                    { className: A(W.a.BottomText, W.a.Small) },
                    Object(y.b)("#HelpFantasy_Page5_Details9")
                  ),
                  m.a.createElement("div", { className: W.a.Spacer }),
                  m.a.createElement(
                    "div",
                    { className: A(W.a.BottomText, W.a.Small) },
                    Object(y.b)("#HelpFantasy_Page5_Details10")
                  ),
                  m.a.createElement("div", { className: W.a.Spacer }),
                  m.a.createElement(
                    "div",
                    { className: A(W.a.BottomText, W.a.Small) },
                    Object(y.b)("#HelpFantasy_Page5_Details11")
                  ),
                  m.a.createElement("div", { className: W.a.Spacer }),
                  m.a.createElement(
                    "div",
                    { className: A(W.a.BottomText, W.a.Small) },
                    Object(y.b)("#HelpFantasy_Page5_Details12")
                  )
                )
              )
            )
          )
        );
      },
      K = function (e) {
        return m.a.createElement(
          X,
          { helpPage: e.helpPage, className: W.a.PredictionHelp },
          m.a.createElement(
            "div",
            { className: W.a.FullHeightWidth },
            m.a.createElement(
              "div",
              { className: W.a.HelpTop },
              m.a.createElement("img", {
                src: s.a.IMG_URL + "help_prediction_pick.png",
              })
            ),
            m.a.createElement(
              "div",
              { className: W.a.HelpBottom },
              m.a.createElement(
                "div",
                { className: W.a.BottomHeader },
                Object(y.b)("#PredictionsHelp_PickYourTeam")
              ),
              m.a.createElement(
                "div",
                { className: W.a.BottomText },
                Object(y.b)("#PredictionsHelp_PickYourTeamDetail")
              ),
              m.a.createElement("div", { className: W.a.Spacer }),
              m.a.createElement(
                "div",
                { className: W.a.BottomText },
                Object(y.b)("#PredictionsHelp_PickYourTeamSubDetail")
              )
            )
          ),
          m.a.createElement(
            "div",
            { className: W.a.FullHeightWidth },
            m.a.createElement(
              "div",
              { className: W.a.HelpTop },
              m.a.createElement("img", {
                src: s.a.IMG_URL + "help_prediction_wager.png",
              })
            ),
            m.a.createElement(
              "div",
              { className: W.a.HelpBottom },
              m.a.createElement(
                "div",
                { className: W.a.BottomHeader },
                Object(y.b)("#PredictionsHelp_WagerYourShards")
              ),
              m.a.createElement(
                "div",
                { className: W.a.BottomText },
                Object(y.b)("#PredictionsHelp_WagerYourShardsDetail")
              )
            )
          ),
          m.a.createElement(
            "div",
            { className: W.a.FullHeightWidth },
            m.a.createElement(
              "div",
              { className: W.a.HelpTop },
              m.a.createElement("img", {
                src: s.a.IMG_URL + "help_prediction_win.png",
              })
            ),
            m.a.createElement(
              "div",
              { className: W.a.HelpBottom },
              m.a.createElement(
                "div",
                { className: W.a.BottomHeader },
                Object(y.b)("#PredictionsHelp_WinOrLose")
              ),
              m.a.createElement(
                "div",
                { className: W.a.BottomText },
                Object(y.b)("#PredictionsHelp_WinOrLoseDetail")
              )
            )
          )
        );
      },
      X = (function (e) {
        function a(a) {
          var t = e.call(this, a) || this;
          return (
            (t.refHelpPages = m.a.createRef()),
            (t.state = { touching: !1, pageNum: 0 }),
            t
          );
        }
        return (
          Object(n.d)(a, e),
          (a.prototype.onTouchStart = function (e) {
            this.setState({ touching: !0 }), e.stopPropagation();
          }),
          (a.prototype.onTouchEnd = function (e) {
            if (Y.isIOS) {
              var a =
                  this.refHelpPages.current.scrollLeft +
                  10 * this.lastScrollDelta,
                t = Math.round(a / this.refHelpPages.current.clientWidth);
              this.setState({ touching: !1, pageNum: t }), e.stopPropagation();
            }
          }),
          (a.prototype.updateScrollPos = function () {
            if (
              ((this.lastScrollDelta =
                this.refHelpPages.current.scrollLeft - this.lastScrollPos),
              (this.lastScrollPos = this.refHelpPages.current.scrollLeft),
              !Y.isIOS)
            ) {
              var e = Math.round(
                this.refHelpPages.current.scrollLeft /
                  this.refHelpPages.current.clientWidth
              );
              this.setState({ pageNum: e });
            }
          }),
          (a.prototype.componentDidMount = function () {
            var e = this;
            this.refHelpPages.current.addEventListener("scroll", function () {
              e.updateScrollPos();
            }),
              Y.isIOS &&
                (this.intervalHandle = setInterval(function () {
                  if (i.g_App.shouldShowHelp(e.props.helpPage)) {
                    var a = Date.now(),
                      t = (a - e.lastScrollUpdate) / 1e3;
                    if (((e.lastScrollUpdate = a), !e.state.touching)) {
                      var r =
                          e.state.pageNum * e.refHelpPages.current.clientWidth,
                        o = e.refHelpPages.current.scrollLeft,
                        n = (r - o) * t * 10;
                      e.refHelpPages.current.scrollTo({ left: o + n });
                    }
                  }
                }, 5));
          }),
          (a.prototype.componentWillUnmount = function () {
            clearInterval(this.intervalHandle);
          }),
          (a.prototype.onDismiss = function () {
            i.g_App.setHelpShown(this.props.helpPage);
          }),
          (a.prototype.scrollHelp = function (e) {
            this.refHelpPages.current.scrollTo({
              left:
                (this.state.pageNum + e) *
                this.refHelpPages.current.clientWidth,
              behavior: "smooth",
            });
          }),
          (a.prototype.render = function () {
            for (
              var e = this,
                a = this.state.pageNum,
                t = m.a.Children.toArray(this.props.children),
                r = [],
                o = 0;
              o < t.length;
              o++
            )
              r.push(
                m.a.createElement(
                  "div",
                  {
                    key: "helppage_" + this.props.helpPage + "_" + o,
                    className: A(
                      W.a.HelpPage,
                      o < a && W.a.OffLeft,
                      o == a && W.a.OnScreen,
                      o > a && W.a.OffRight
                    ),
                  },
                  t[o]
                )
              );
            var n = [];
            for (o = 0; o < t.length; o++)
              n.push(
                m.a.createElement("div", {
                  key: "helppip_" + this.props.helpPage + "_" + o,
                  className: A(W.a.Pip, o == a && W.a.Selected),
                })
              );
            var c = m.a.createElement("div", null),
              l = m.a.createElement("div", null);
            return (
              Y.isMobile ||
                ((c = m.a.createElement("img", {
                  onClick: function () {
                    return e.scrollHelp(-1);
                  },
                  src: s.a.IMG_URL + "back_arrow.png",
                  className: W.a.PageLeft,
                })),
                (l = m.a.createElement(
                  "div",
                  {
                    onClick: function () {
                      return e.scrollHelp(1);
                    },
                  },
                  m.a.createElement("img", {
                    src: s.a.IMG_URL + "forward_arrow.png",
                    className: W.a.PageRight,
                  })
                ))),
              m.a.createElement(
                "div",
                {
                  className: A(
                    W.a.HelpContainer,
                    i.g_App.shouldShowHelp(this.props.helpPage) && W.a.Show
                  ),
                  onTouchStart: this.onTouchStart,
                  onTouchEnd: this.onTouchEnd,
                },
                m.a.createElement(
                  "div",
                  {
                    className: A(W.a.HelpPages, this.props.className),
                    ref: this.refHelpPages,
                  },
                  r
                ),
                c,
                l,
                m.a.createElement(
                  "div",
                  { className: W.a.PageSelector },
                  m.a.createElement(
                    "div",
                    { className: W.a.PageSelectorBottom },
                    m.a.createElement("div", { className: W.a.DismissSpacer }),
                    m.a.createElement("div", { className: W.a.Pips }, n),
                    m.a.createElement(
                      "div",
                      { className: W.a.Dismiss, onClick: this.onDismiss },
                      Object(y.b)(
                        a < t.length - 1 ? "#Help_Skip" : "#Help_Dismiss"
                      )
                    )
                  )
                )
              )
            );
          }),
          Object(n.c)([q], a.prototype, "onTouchStart", null),
          Object(n.c)([q], a.prototype, "onTouchEnd", null),
          Object(n.c)([q], a.prototype, "onDismiss", null),
          Object(n.c)([q], a.prototype, "scrollHelp", null),
          (a = Object(n.c)([x.a], a))
        );
      })(m.a.Component),
      J = (function (e) {
        function a() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(n.d)(a, e),
          (a.prototype.render = function () {
            var e =
                i.g_App.shouldShowHelp(kt.Main) ||
                i.g_App.shouldShowHelp(kt.Predictions) ||
                i.g_App.shouldShowHelp(kt.Fantasy),
              a = i.g_App.shouldShowHelp(kt.Main)
                ? m.a.createElement(V, { helpPage: kt.Main })
                : m.a.createElement("div", null),
              t = i.g_App.shouldShowHelp(kt.Predictions)
                ? m.a.createElement(K, { helpPage: kt.Predictions })
                : m.a.createElement("div", null),
              r = i.g_App.shouldShowHelp(kt.Fantasy)
                ? m.a.createElement(z, { helpPage: kt.Fantasy })
                : m.a.createElement("div", null),
              o = {};
            return (
              Y.isAndroid && (o = { backgroundColor: "#0C2F42" }),
              m.a.createElement(
                "div",
                {
                  className: A(W.a.HelpOverlay, e && W.a.ShowBackground),
                  style: o,
                },
                a,
                t,
                r
              )
            );
          }),
          (a = Object(n.c)([x.a], a))
        );
      })(m.a.Component),
      Z = t("+66j"),
      Q = t.n(Z),
      $ = (function (e) {
        function a() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(n.d)(a, e),
          (a.prototype.reload = function () {
            window.location.reload();
          }),
          (a.prototype.render = function () {
            return m.a.createElement(
              "div",
              { className: A(Q.a.GCDown, s.a.GC_DOWN && Q.a.Display) },
              m.a.createElement("img", {
                src: s.a.IMG_URL + "error_artwork.png",
                className: Q.a.ErrorArt,
              }),
              m.a.createElement(
                "div",
                { className: Q.a.ErrorHeading },
                Object(y.b)("#GCDown_Header")
              ),
              m.a.createElement(
                "div",
                { className: Q.a.ErrorMessage },
                Object(y.b)("#GCDown_Message")
              ),
              m.a.createElement(
                "div",
                { className: Q.a.RetryButton, onClick: this.reload },
                Object(y.b)("#GCDown_Retry")
              )
            );
          }),
          (a = Object(n.c)([x.a], a))
        );
      })(m.a.Component),
      ee = t("6TF7"),
      ae = t.n(ee),
      te = t("novD"),
      re = t.n(te),
      oe = t("gPb/"),
      ne = t.n(oe),
      ce = t("xNsg"),
      le = t.n(ce),
      ie = t("Gb4a"),
      se = t.n(ie),
      ge = t("2iEm"),
      me = t("x0JQ"),
      _e = t.n(me);
    t("gM6l"), t("B0PS");
    function de(e) {
      var a = "SVGIcon_Button SVGIcon_Throbber ";
      return (
        e.className && (a += e.className),
        g.createElement(
          "svg",
          {
            version: "1.1",
            id: "base",
            xmlns: "http://www.w3.org/2000/svg",
            className: a,
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256",
          },
          g.createElement(
            "g",
            { className: _e.a.partCircle },
            g.createElement("path", {
              className: _e.a.roundOuter,
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895",
            }),
            g.createElement("path", {
              className: _e.a.roundOuter,
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d: "M201.432,101.166",
            }),
            g.createElement("path", {
              className: _e.a.roundOuter,
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754",
            })
          ),
          g.createElement(
            "g",
            { className: _e.a.mainOutline },
            g.createElement("path", {
              className: _e.a.roundFill,
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
            }),
            g.createElement("path", {
              className: _e.a.roundOuterOutline,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
            }),
            g.createElement("path", {
              className: _e.a.roundThrobber01,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
            }),
            g.createElement("path", {
              className: _e.a.roundThrobber02,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
            }),
            g.createElement("path", {
              className: _e.a.roundThrobber03,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
            }),
            g.createElement("path", {
              className: _e.a.roundThrobber04,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
            }),
            g.createElement("path", {
              className: _e.a.roundThrobber05,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
            }),
            g.createElement("path", {
              className: _e.a.roundThrobber06,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
            }),
            g.createElement("path", {
              className: _e.a.roundThrobber07,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
            }),
            g.createElement("path", {
              className: _e.a.roundThrobber08,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
            }),
            g.createElement("path", {
              className: _e.a.roundThrobber09,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
            }),
            g.createElement("path", {
              className: _e.a.roundThrobber10,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
            }),
            g.createElement("path", {
              className: _e.a.roundThrobber11,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
            }),
            g.createElement("path", {
              className: _e.a.roundThrobber12,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
            }),
            g.createElement("path", {
              className: _e.a.roundThrobber13,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
            }),
            g.createElement("path", {
              className: _e.a.roundThrobber14,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
            }),
            g.createElement("path", {
              className: _e.a.roundThrobber15,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
            })
          ),
          g.createElement(
            "g",
            { className: _e.a.bottomCircle },
            g.createElement("path", {
              fill: "#ffffff",
              d:
                "M89.226,181.579L76.5,176.321c2.256,4.696,6.159,8.628,11.339,10.786 c11.197,4.668,24.11-0.647,28.779-11.854c2.259-5.425,2.274-11.405,0.033-16.841c-2.237-5.436-6.46-9.675-11.886-11.938 c-5.384-2.24-11.151-2.156-16.22-0.244l13.146,5.436c8.261,3.443,12.166,12.93,8.725,21.189 C106.976,181.115,97.486,185.022,89.226,181.579",
            })
          ),
          g.createElement(
            "g",
            { className: _e.a.topCircle },
            g.createElement("circle", {
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              cx: "161.731",
              cy: "101.274",
              r: "23.019",
            })
          )
        )
      );
    }
    var pe,
      ue = (function (e) {
        function a(a) {
          return e.call(this, a) || this;
        }
        return (
          Object(n.d)(a, e),
          (a.prototype.AddSizeClass = function (e) {
            "small" == this.props.size
              ? e.push(_e.a.throbber_small)
              : "medium" == this.props.size
              ? e.push(_e.a.throbber_medium)
              : "xlarge" == this.props.size
              ? e.push(_e.a.throbber_xlarge)
              : "xxlarge" == this.props.size
              ? e.push(_e.a.throbber_xxlarge)
              : e.push(_e.a.throbber_large);
          }),
          (a.prototype.render = function () {
            var e = [_e.a.LoadingWrapper, "SteamLogoThrobber"];
            this.AddSizeClass(e),
              void 0 === this.props.string && e.push(_e.a.noString),
              this.props.className && e.push(this.props.className),
              this.props.static && e.push(_e.a.Static);
            var a = m.a.createElement(
              "div",
              { className: e.join(" ") },
              m.a.createElement(
                "div",
                { className: _e.a.Throbber },
                m.a.createElement(de, { className: _e.a.base }),
                m.a.createElement(de, { className: _e.a.blur })
              )
            );
            return m.a.createElement(
              "div",
              {
                className:
                  "center" == this.props.position
                    ? _e.a.throbber_center_wrapper
                    : "",
              },
              a,
              Boolean(this.props.string) &&
                m.a.createElement(
                  "div",
                  { className: _e.a.ThrobberText },
                  this.props.string
                )
            );
          }),
          a
        );
      })(m.a.PureComponent),
      he = t("aqT/"),
      be = t.n(he),
      ye = t("CDQt"),
      ke = t.n(ye);
    !(function (e) {
      (e[(e.Large = 0)] = "Large"),
        (e[(e.Medium = 1)] = "Medium"),
        (e[(e.Small = 2)] = "Small");
    })(pe || (pe = {}));
    var ve = (function (e) {
        function a() {
          var a = (null !== e && e.apply(this, arguments)) || this;
          return (
            (a.state = { bError: !1, bFallbackError: !1, bGenericError: !1 }), a
          );
        }
        return (
          Object(n.d)(a, e),
          (a.prototype.componentDidUpdate = function (e) {
            (e.team_id == this.props.team_id &&
              e.team_logo_url_fallback == this.props.team_logo_url_fallback) ||
              this.setState({
                bError: !1,
                bFallbackError: !1,
                bGenericError: !1,
              });
          }),
          (a.prototype.getImageURL = function () {
            if (this.state.bError) {
              if (!this.state.bFallbackError)
                return (
                  this.props.team_logo_url_fallback ||
                    this.setState({ bFallbackError: !0 }),
                  this.props.team_logo_url_fallback
                );
              if (!this.state.bGenericError)
                return s.a.IMG_URL_BASE + "teams/team_unknown.png";
            } else
              switch (this.props.size) {
                case pe.Large:
                  return (
                    s.a.IMG_URL_BASE + "teams/" + this.props.team_id + ".png"
                  );
                case pe.Medium:
                  return (
                    s.a.IMG_URL_BASE +
                    "teams/square_medium/" +
                    this.props.team_id +
                    ".png"
                  );
                case pe.Small:
                  return (
                    s.a.IMG_URL_BASE +
                    "teams/square_small/" +
                    this.props.team_id +
                    ".png"
                  );
              }
            return null;
          }),
          (a.prototype.HandleError = function (e) {
            this.state.bError
              ? this.state.bFallbackError
                ? this.setState({ bGenericError: !0 })
                : this.setState({ bFallbackError: !0 })
              : this.setState({ bError: !0 });
          }),
          (a.prototype.render = function () {
            var e = "";
            switch (this.props.size) {
              case pe.Large:
                e = ke.a.TeamLogoLarge;
                break;
              case pe.Medium:
                e = ke.a.TeamLogoMedium;
                break;
              case pe.Small:
                e = ke.a.TeamLogoSmall;
            }
            return m.a.createElement("img", {
              className: A(e, this.props.className),
              src: this.getImageURL(),
              onError: this.HandleError,
            });
          }),
          Object(n.c)([q], a.prototype, "getImageURL", null),
          Object(n.c)([q], a.prototype, "HandleError", null),
          (a = Object(n.c)([x.a], a))
        );
      })(m.a.Component),
      fe = (function (e) {
        function a(a) {
          var t = e.call(this, a) || this;
          return (t.state = { bVisible: !1 }), t;
        }
        return (
          Object(n.d)(a, e),
          (a.prototype.onChange = function (e) {
            e && this.setState({ bVisible: e });
          }),
          (a.prototype.getContents = function () {
            if (!this.state.bVisible)
              return m.a.createElement("div", { key: this.props.nSeriesID });
            var e = i.g_App.getSeriesData(
              this.props.nLeagueID,
              this.props.nSeriesID
            );
            if (!e)
              return m.a.createElement(
                "div",
                {
                  className: A(se.a.ThrobberSpacing, ne.a.FadeInDelay),
                  key: this.props.nSeriesID,
                },
                m.a.createElement(ue, {
                  size: "medium",
                  string: Object(y.b)("#Loading"),
                  position: "center",
                })
              );
            if (!e.series_id)
              return m.a.createElement("div", { key: this.props.nSeriesID });
            for (
              var a, t, r = "", o = [], n = 0, c = 0, l = e.match_minimal;
              c < l.length;
              c++
            ) {
              var s = l[c],
                g = s.tourney.radiant_team_id,
                _ = s.tourney.dire_team_id;
              switch (((n = Math.max(n, s.start_time)), s.match_outcome)) {
                case 2:
                  o[g] = (o[g] || 0) + 1;
                  break;
                case 3:
                  o[_] = (o[_] || 0) + 1;
              }
            }
            var d = "";
            n > 0 &&
              (d = new Date(1e3 * n).toLocaleString([], {
                month: "numeric",
                day: "numeric",
                hour: "numeric",
                minute: "2-digit",
              }));
            var p = 0,
              u = 0;
            for (var h in o) (p = Math.max(p, o[h])), (u += o[h]);
            return (
              ((0 == e.series_type && 1 == p) ||
                (1 == e.series_type && 2 == p) ||
                (2 == e.series_type && 3 == p) ||
                (3 == e.series_type && 2 == u)) &&
                (r = Object(y.b)("#Final")),
              (a = "" + (o[e.team_1.team_id] || 0)),
              (t = "" + (o[e.team_2.team_id] || 0)),
              m.a.createElement(
                "div",
                { className: ne.a.FadeIn, key: this.props.nSeriesID },
                m.a.createElement(
                  "div",
                  { className: se.a.Columns },
                  m.a.createElement(
                    "div",
                    { className: se.a.Team },
                    m.a.createElement(ve, {
                      team_id: e.team_1.team_id,
                      size: pe.Medium,
                    }),
                    m.a.createElement(
                      "div",
                      { className: se.a.TeamName },
                      e.team_1.team_name
                    )
                  ),
                  m.a.createElement(
                    "div",
                    { className: se.a.Details },
                    m.a.createElement(
                      "div",
                      { className: se.a.GameOrFinal },
                      r
                    ),
                    m.a.createElement(
                      "div",
                      { className: se.a.Score },
                      m.a.createElement(
                        "div",
                        { className: se.a.ScoreValue },
                        a
                      ),
                      m.a.createElement(
                        "div",
                        { className: se.a.ScoreSeparator },
                        "-"
                      ),
                      m.a.createElement(
                        "div",
                        { className: se.a.ScoreValue },
                        t
                      )
                    ),
                    m.a.createElement("div", { className: se.a.Time }, "")
                  ),
                  m.a.createElement(
                    "div",
                    { className: se.a.Team },
                    m.a.createElement(ve, {
                      team_id: e.team_2.team_id,
                      size: pe.Medium,
                    }),
                    m.a.createElement(
                      "div",
                      { className: se.a.TeamName },
                      e.team_2.team_name
                    )
                  )
                ),
                m.a.createElement("div", { className: se.a.Timestamp }, d)
              )
            );
          }),
          (a.prototype.render = function () {
            return m.a.createElement(
              be.a,
              { onChange: this.onChange },
              m.a.createElement(
                ge.a,
                {
                  to: P(this.props.nLeagueID, this.props.nSeriesID),
                  className: se.a.SeriesCard,
                },
                this.getContents()
              )
            );
          }),
          Object(n.c)([q], a.prototype, "onChange", null),
          (a = Object(n.c)([x.a], a))
        );
      })(m.a.Component),
      Ee = (function (e) {
        function a(a) {
          var t = e.call(this, a) || this;
          return (t.state = { bVisible: !1 }), t;
        }
        return (
          Object(n.d)(a, e),
          (a.prototype.onChange = function (e) {
            e && this.setState({ bVisible: e });
          }),
          (a.prototype.getContents = function () {
            if (!this.state.bVisible)
              return m.a.createElement("div", { key: this.props.matchID });
            var e = i.g_App.getMatchMinimal(
              this.props.leagueID,
              this.props.matchID
            );
            if (!e)
              return m.a.createElement(
                "div",
                {
                  className: A(se.a.ThrobberSpacing, ne.a.FadeInDelay),
                  key: this.props.matchID,
                },
                m.a.createElement(ue, {
                  size: "medium",
                  string: Object(y.b)("Loading"),
                  position: "center",
                })
              );
            var a = Math.floor(e.duration / 3600),
              t = Math.floor((e.duration - 3600 * a) / 60),
              r = Math.floor(e.duration % 60),
              o =
                a > 0
                  ? a +
                    ":" +
                    (t < 10 ? "0" : "") +
                    t +
                    ":" +
                    (r < 10 ? "0" : "") +
                    r
                  : (t < 10 ? "0" : "") + t + ":" + (r < 10 ? "0" : "") + r;
            return m.a.createElement(
              "div",
              { className: ne.a.FadeIn, key: this.props.matchID },
              m.a.createElement(
                "div",
                { className: se.a.Columns },
                m.a.createElement(
                  "div",
                  { className: se.a.Team },
                  m.a.createElement(ve, {
                    team_id: e.tourney.radiant_team_id,
                    size: pe.Medium,
                  }),
                  m.a.createElement(
                    "div",
                    { className: se.a.TeamName },
                    e.tourney.radiant_team_name
                  )
                ),
                m.a.createElement(
                  "div",
                  { className: se.a.Details },
                  m.a.createElement(
                    "div",
                    { className: se.a.Game },
                    Object(y.b)("#Series_Game", e.tourney.series_game + 1)
                  ),
                  m.a.createElement(
                    "div",
                    { className: se.a.Score },
                    m.a.createElement(
                      "div",
                      { className: se.a.ScoreValue },
                      e.radiant_score
                    ),
                    m.a.createElement(
                      "div",
                      { className: se.a.ScoreSeparator },
                      "-"
                    ),
                    m.a.createElement(
                      "div",
                      { className: se.a.ScoreValue },
                      e.dire_score
                    )
                  ),
                  m.a.createElement("div", { className: se.a.Time }, o)
                ),
                m.a.createElement(
                  "div",
                  { className: se.a.Team },
                  m.a.createElement(ve, {
                    team_id: e.tourney.dire_team_id,
                    size: pe.Medium,
                  }),
                  m.a.createElement(
                    "div",
                    { className: se.a.TeamName },
                    e.tourney.dire_team_name
                  )
                )
              )
            );
          }),
          (a.prototype.render = function () {
            return m.a.createElement(
              be.a,
              { onChange: this.onChange },
              m.a.createElement(
                ge.a,
                { to: I(this.props.matchID), className: se.a.MatchCard },
                this.getContents()
              )
            );
          }),
          Object(n.c)([q], a.prototype, "onChange", null),
          (a = Object(n.c)([x.a], a))
        );
      })(m.a.Component),
      Ce = Object.assign(
        function (e) {
          var a = e.children,
            t = Object(n.f)(e, ["children"]);
          return m.a.createElement(
            "div",
            Object(n.a)({}, t, { className: A(se.a.card, t.className) }),
            a
          );
        },
        {
          Image: function (e) {
            return m.a.createElement(
              "img",
              Object(n.a)({}, e, { className: A(se.a.image, e.className) })
            );
          },
          Content: function (e) {
            return m.a.createElement(
              "div",
              Object(n.a)({}, e, { className: A(se.a.content, e.className) })
            );
          },
        }
      );
    function Ne(e) {
      var a = e % 100,
        t = "#LOC_Ordinal_Prefix_" + a,
        r = Object(y.b)(t);
      r === t && (r = Object(y.b)("#LOC_Ordinal_Prefix_Default")),
        "<none>" === r && (r = "");
      var o = "#LOC_Ordinal_Suffix_" + a,
        n = Object(y.b)(o);
      return (
        n === o && (n = Object(y.b)("#LOC_Ordinal_Suffix_Default")),
        "<none>" === n && (n = ""),
        r + e + n
      );
    }
    function Be(e) {
      return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    function Se(e) {
      var a;
      switch (e) {
        case 1:
          a = "#Team_RoleCore";
          break;
        case 2:
          a = "#Team_RoleSupport";
          break;
        case 3:
          a = "#Team_RoleOfflane";
          break;
        case 4:
          a = "#Team_RoleMid";
          break;
        default:
          return null;
      }
      return Object(y.b)(a);
    }
    var Te,
      Le = (function (e) {
        function a(a) {
          var t = e.call(this, a) || this;
          return (t.state = { bVisible: !1 }), t;
        }
        return (
          Object(n.d)(a, e),
          (a.prototype.onChange = function (e) {
            e && this.setState({ bVisible: e });
          }),
          (a.prototype.getcontents = function () {
            if (!this.state.bVisible) return m.a.createElement("div", null);
            var e = i.g_App.getTeamData(this.props.teamID),
              a = i.g_App.getLeagueInfo(this.props.leagueID);
            if (!e || !a)
              return m.a.createElement("div", {
                className: A(se.a.TopDown, se.a.Generic),
              });
            if (this.props.standing > 0) {
              var t = Ne(this.props.standing);
              return m.a.createElement(
                "div",
                { className: se.a.TopDown },
                m.a.createElement(
                  "div",
                  { className: se.a.TeamInfo },
                  m.a.createElement("img", {
                    key: "teamlogo_" + this.props.teamID,
                    src: e.url_logo,
                    className: se.a.TeamLogo,
                  }),
                  m.a.createElement(
                    "div",
                    { className: se.a.Text },
                    Object(y.b)(
                      1 == this.props.standing
                        ? "#Feed_TournamentResult_Win"
                        : "#Feed_TournamentResult_Elimination",
                      e.name,
                      a.name,
                      t
                    )
                  )
                ),
                m.a.createElement(
                  "div",
                  { className: se.a.Earnings },
                  m.a.createElement(
                    "div",
                    { className: se.a.Points },
                    Object(y.b)(
                      "#Feed_TournamentResult_Points",
                      this.props.points
                    )
                  ),
                  m.a.createElement(
                    "div",
                    { className: se.a.Winnings },
                    Object(y.b)(
                      "#Feed_TournamentResult_Winnings",
                      Be(this.props.winnings)
                    )
                  )
                )
              );
            }
            return m.a.createElement(
              "div",
              { className: A(se.a.TopDown, se.a.Generic) },
              m.a.createElement(
                "div",
                { className: se.a.TeamInfo },
                m.a.createElement("img", {
                  key: "teamlogo_" + this.props.teamID,
                  src: e.url_logo,
                  className: se.a.TeamLogo,
                }),
                m.a.createElement(
                  "div",
                  { className: se.a.Text },
                  Object(y.b)(
                    "#Feed_TournamentResult_EliminationGeneric",
                    e.name,
                    a.name
                  )
                )
              )
            );
          }),
          (a.prototype.render = function () {
            return m.a.createElement(
              be.a,
              { onChange: this.onChange },
              m.a.createElement(
                ge.a,
                {
                  to: D(this.props.leagueID, o.Standings, "results"),
                  className: se.a.TournamentResultsCard,
                },
                m.a.createElement(
                  Ce,
                  null,
                  m.a.createElement(Ce.Image, {
                    src:
                      s.a.CDN_URL +
                      "apps/dota2/images/leagues/" +
                      this.props.leagueID +
                      "/images/image_8.png",
                  }),
                  m.a.createElement(
                    "div",
                    { className: se.a.Content },
                    this.getcontents()
                  )
                )
              )
            );
          }),
          Object(n.c)([q], a.prototype, "onChange", null),
          (a = Object(n.c)([x.a], a))
        );
      })(m.a.Component),
      Pe = (function (e) {
        function a(a) {
          var t = e.call(this, a) || this;
          return (t.state = { bVisible: !1 }), t;
        }
        return (
          Object(n.d)(a, e),
          (a.prototype.onChange = function (e) {
            e && this.setState({ bVisible: e });
          }),
          (a.prototype.getContents = function () {
            if (!this.state.bVisible)
              return m.a.createElement("div", { key: this.props.nodeID });
            var e = i.g_App.getLeagueNodeData(
                this.props.leagueID,
                this.props.nodeID
              ),
              a = e ? i.g_App.getTeamData(e.team_id_1) : void 0,
              t = e ? i.g_App.getTeamData(e.team_id_2) : void 0;
            if (!e)
              return m.a.createElement(
                "div",
                {
                  className: A(se.a.ThrobberSpacing, ne.a.FadeInDelay),
                  key: this.props.nodeID,
                },
                m.a.createElement(ue, {
                  size: "medium",
                  string: Object(y.b)("Loading"),
                  position: "center",
                })
              );
            var r = i.g_App.getLeagueNodeGroupData(
                this.props.leagueID,
                e.node_group_id
              ),
              o = "";
            switch (e.node_type) {
              case 1:
                o = Object(y.b)("#BestOf_1");
                break;
              case 2:
                o = Object(y.b)("#BestOf_3");
                break;
              case 3:
                o = Object(y.b)("#BestOf_5");
                break;
              case 4:
                o = Object(y.b)("#BestOf_2");
            }
            var n = !1;
            if (r)
              switch (r.node_group_type) {
                case 4:
                case 5:
                case 6:
                case 8:
                  n = !0;
              }
            console.log(
              s.a.CDN_URL +
                "apps/dota2/images/leagues/" +
                this.props.leagueID +
                "/images/image_8.png"
            );
            var c = r && 7 == r.node_group_type,
              l = m.a.createElement("div", { className: se.a.Details });
            return (
              c
                ? (l = m.a.createElement(
                    "div",
                    { className: se.a.Details },
                    Object(y.b)("#MatchDetails_ShowMatch")
                  ))
                : 0 == e.losing_node_id &&
                  0 != e.winning_node_id &&
                  n &&
                  r.is_final_group &&
                  n
                ? (l = m.a.createElement(
                    "div",
                    { className: se.a.Details },
                    Object(y.b)("#MatchDetails_Elimination")
                  ))
                : 0 == e.losing_node_id &&
                  0 == e.winning_node_id &&
                  r &&
                  r.is_final_group &&
                  n &&
                  (l = m.a.createElement(
                    "div",
                    { className: se.a.Details },
                    Object(y.b)("#MatchDetails_Championship")
                  )),
              m.a.createElement(
                "div",
                {
                  className: ne.a.FadeIn,
                  key: this.props.leagueID + "_ " + this.props.nodeID,
                },
                l,
                m.a.createElement(
                  "div",
                  { className: se.a.Columns },
                  m.a.createElement(
                    "div",
                    { className: se.a.Team },
                    m.a.createElement(ve, {
                      team_id: a && a.team_id,
                      size: pe.Medium,
                    }),
                    m.a.createElement(
                      "div",
                      { className: se.a.TeamName },
                      a ? a.name : Object(y.b)("#Feed_TBD")
                    )
                  ),
                  m.a.createElement(
                    "div",
                    { className: se.a.Center },
                    m.a.createElement("div", null, Object(y.b)("#VS")),
                    m.a.createElement("div", { className: se.a.BestOf }, o)
                  ),
                  m.a.createElement(
                    "div",
                    { className: se.a.Team },
                    m.a.createElement(ve, {
                      team_id: t && t.team_id,
                      size: pe.Medium,
                    }),
                    m.a.createElement(
                      "div",
                      { className: se.a.TeamName },
                      t ? t.name : Object(y.b)("#Feed_TBD")
                    )
                  )
                )
              )
            );
          }),
          (a.prototype.render = function () {
            return m.a.createElement(
              be.a,
              { onChange: this.onChange },
              m.a.createElement(
                ge.a,
                {
                  to: R(this.props.leagueID, this.props.nodeID),
                  className: se.a.UpcomingSeriesCard,
                },
                m.a.createElement("img", {
                  className: se.a.LeagueLogo,
                  src:
                    s.a.CDN_URL +
                    "apps/dota2/images/leagues/" +
                    this.props.leagueID +
                    "/images/image_8.png",
                }),
                m.a.createElement(
                  "div",
                  { className: se.a.Content },
                  this.getContents()
                )
              )
            );
          }),
          Object(n.c)([q], a.prototype, "onChange", null),
          (a = Object(n.c)([x.a], a))
        );
      })(m.a.Component),
      Re = (function (e) {
        function a(a) {
          var t = e.call(this, a) || this;
          return (t.state = { bVisible: !1 }), t;
        }
        return (
          Object(n.d)(a, e),
          (a.prototype.onChange = function (e) {
            e && this.setState({ bVisible: e });
          }),
          (a.prototype.getContents = function () {
            if (!this.state.bVisible)
              return m.a.createElement("div", {
                key: this.props.serverSteamID,
              });
            var e = i.g_App.getLeagueNodeData(
                this.props.leagueID,
                this.props.nodeID
              ),
              a = i.g_App.getTeamData(this.props.radiantTeamID),
              t = i.g_App.getTeamData(this.props.direTeamID),
              r = e
                ? i.g_App.getLeagueNodeGroupData(
                    this.props.leagueID,
                    e.node_group_id
                  )
                : void 0,
              o = "";
            if (e)
              switch (e.node_type) {
                case 1:
                  o = Object(y.b)("#BestOf_1");
                  break;
                case 2:
                  o = Object(y.b)("#BestOf_3");
                  break;
                case 3:
                  o = Object(y.b)("#BestOf_5");
                  break;
                case 4:
                  o = Object(y.b)("#BestOf_2");
              }
            var n = !1;
            if (r)
              switch (r.node_group_type) {
                case 4:
                case 5:
                case 6:
                case 8:
                  n = !0;
              }
            var c = r && 7 == r.node_group_type,
              l = m.a.createElement("div", { className: se.a.Details });
            return (
              e &&
                (c
                  ? (l = m.a.createElement(
                      "div",
                      { className: se.a.Details },
                      Object(y.b)("#MatchDetails_ShowMatch")
                    ))
                  : 0 == e.losing_node_id && 0 != e.winning_node_id && n
                  ? (l = m.a.createElement(
                      "div",
                      { className: se.a.Details },
                      Object(y.b)("#MatchDetails_Elimination")
                    ))
                  : 0 == e.losing_node_id &&
                    0 == e.winning_node_id &&
                    r &&
                    r.is_final_group &&
                    n &&
                    (l = m.a.createElement(
                      "div",
                      { className: se.a.Details },
                      Object(y.b)("#MatchDetails_Championship")
                    ))),
              m.a.createElement(
                "div",
                { className: ne.a.FadeIn, key: this.props.serverSteamID },
                l,
                m.a.createElement(
                  "div",
                  { className: se.a.Columns },
                  m.a.createElement(
                    "div",
                    { className: se.a.Team },
                    m.a.createElement(ve, {
                      team_id: a && a.team_id,
                      size: pe.Medium,
                    }),
                    m.a.createElement(
                      "div",
                      { className: se.a.TeamName },
                      a ? a.name : Object(y.b)("#Feed_TBD")
                    )
                  ),
                  m.a.createElement(
                    "div",
                    { className: se.a.Center },
                    m.a.createElement("div", null, Object(y.b)("#VS")),
                    m.a.createElement("div", { className: se.a.BestOf }, o)
                  ),
                  m.a.createElement(
                    "div",
                    { className: se.a.Team },
                    m.a.createElement(ve, {
                      team_id: t && t.team_id,
                      size: pe.Medium,
                    }),
                    m.a.createElement(
                      "div",
                      { className: se.a.TeamName },
                      t ? t.name : Object(y.b)("#Feed_TBD")
                    )
                  )
                )
              )
            );
          }),
          (a.prototype.render = function () {
            return m.a.createElement(
              be.a,
              { onChange: this.onChange },
              m.a.createElement(
                ge.a,
                {
                  to: O(this.props.serverSteamID),
                  className: se.a.LiveMatchCard,
                },
                m.a.createElement("img", {
                  className: se.a.LeagueLogo,
                  src:
                    s.a.CDN_URL +
                    "apps/dota2/images/leagues/" +
                    this.props.leagueID +
                    "/images/image_8.png",
                }),
                m.a.createElement(
                  "div",
                  { className: se.a.Content },
                  this.getContents()
                )
              )
            );
          }),
          Object(n.c)([q], a.prototype, "onChange", null),
          (a = Object(n.c)([x.a], a))
        );
      })(m.a.Component);
    !(function (e) {
      (e[(e.Add = 0)] = "Add"),
        (e[(e.Remove = 1)] = "Remove"),
        (e[(e.Disband = 2)] = "Disband");
    })(Te || (Te = {}));
    var Ie,
      Oe = (function (e) {
        function a(a) {
          var t = e.call(this, a) || this;
          return (t.state = { bVisible: !1 }), t;
        }
        return (
          Object(n.d)(a, e),
          (a.prototype.onChange = function (e) {
            e && this.setState({ bVisible: e });
          }),
          (a.prototype.getContents = function () {
            if (!this.state.bVisible)
              return m.a.createElement("div", null, " ");
            var e = i.g_App.getTeamData(this.props.teamID),
              a =
                this.props.accountID &&
                i.g_App.getPlayerData(this.props.accountID),
              t = this.props.action == Te.Add || this.props.action == Te.Remove,
              r = [];
            if (!e || (t && !a))
              r.push(m.a.createElement("div", { key: "empty" }));
            else {
              var o = "";
              switch (this.props.action) {
                case Te.Add:
                  o = Object(y.b)("#TeamRoster_Add", a.name, e.name);
                  break;
                case Te.Remove:
                  o = Object(y.b)("#TeamRoster_Remove", a.name, e.name);
                  break;
                case Te.Disband:
                  o = Object(y.b)("#TeamRoster_Disband", e.name);
              }
              r.push(
                m.a.createElement(
                  "div",
                  {
                    key: "teamlogo_" + this.props.teamID,
                    className: se.a.TeamLogo,
                  },
                  m.a.createElement(ve, { team_id: e.team_id, size: pe.Small })
                )
              ),
                r.push(
                  m.a.createElement(
                    "div",
                    {
                      key: "teamcontent_" + this.props.accountID,
                      className: se.a.Text,
                    },
                    o
                  )
                );
            }
            return r;
          }),
          (a.prototype.render = function () {
            return m.a.createElement(
              be.a,
              { onChange: this.onChange },
              m.a.createElement(
                ge.a,
                { to: T(this.props.teamID), className: se.a.TeamRosterCard },
                m.a.createElement(
                  Ce,
                  null,
                  m.a.createElement(
                    "div",
                    { className: se.a.Content },
                    this.getContents()
                  )
                )
              )
            );
          }),
          Object(n.c)([q], a.prototype, "onChange", null),
          (a = Object(n.c)([x.a], a))
        );
      })(m.a.Component),
      De = (function (e) {
        function a() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(n.d)(a, e),
          (a.prototype.render = function () {
            var e,
              a = "",
              t = "",
              r = "",
              o = !1,
              n = !1;
            switch (this.props.type) {
              case 1:
                (a = le.a.backgroundColorOrange),
                  (t = Object(y.b)("#Feed_SeriesResult")),
                  (r = "feed_dota.png"),
                  (e = m.a.createElement(fe, {
                    key:
                      this.props.type +
                      "_" +
                      this.props.league_id +
                      "_" +
                      this.props.series_id,
                    nLeagueID: this.props.league_id,
                    nSeriesID: this.props.series_id,
                  }));
                break;
              case 2:
                (a = le.a.backgroundColorBrightBlue),
                  (t = Object(y.b)("#Feed_PopularMatch")),
                  (r = "feed_star.png"),
                  (e = m.a.createElement(Ee, {
                    key:
                      this.props.type +
                      "_" +
                      this.props.league_id +
                      "_" +
                      this.props.match_id,
                    leagueID: this.props.league_id,
                    matchID: this.props.match_id,
                  }));
                break;
              case 3:
                (a = le.a.backgroundColorOrange),
                  (t = Object(y.b)("#Feed_UpcomingMatch")),
                  (r = "feed_dota.png"),
                  (e = m.a.createElement(Pe, {
                    key:
                      this.props.type +
                      "_" +
                      this.props.league_id +
                      "_" +
                      this.props.node_id,
                    leagueID: this.props.league_id,
                    nodeID: this.props.node_id,
                  })),
                  (o = !0);
                break;
              case 4:
                (a = le.a.backgroundColorBrightPurple),
                  (t = Object(y.b)("#Feed_TournamentResult")),
                  (r = "feed_cup.png"),
                  (e = m.a.createElement(Le, {
                    key:
                      this.props.type +
                      "_" +
                      this.props.league_id +
                      "_" +
                      this.props.series_id,
                    leagueID: this.props.league_id,
                    teamID: this.props.team_id,
                    standing: this.props.data_1,
                    points: this.props.data_2,
                    winnings: this.props.data_3,
                  }));
                break;
              case 5:
                (a = le.a.backgroundColorBrightGreen),
                  (t = Object(y.b)("#Feed_TeamRosterChange")),
                  (r = "feed_news.png"),
                  (e = m.a.createElement(Oe, {
                    key:
                      this.props.type +
                      "_" +
                      this.props.team_id +
                      "_" +
                      this.props.account_id,
                    teamID: this.props.team_id,
                    action: Te.Add,
                    accountID: this.props.account_id,
                  }));
                break;
              case 6:
                (a = le.a.backgroundColorBrightGreen),
                  (t = Object(y.b)("#Feed_TeamRosterChange")),
                  (r = "feed_news.png"),
                  (e = m.a.createElement(Oe, {
                    key:
                      this.props.type +
                      "_" +
                      this.props.team_id +
                      "_" +
                      this.props.account_id,
                    teamID: this.props.team_id,
                    action: Te.Remove,
                    accountID: this.props.account_id,
                  }));
                break;
              case 7:
                (a = le.a.backgroundColorBrightGreen),
                  (t = Object(y.b)("#Feed_TeamDisband")),
                  (r = "feed_news.png"),
                  (e = m.a.createElement(Oe, {
                    key:
                      this.props.type +
                      "_" +
                      this.props.team_id +
                      "_" +
                      this.props.account_id,
                    teamID: this.props.team_id,
                    action: Te.Disband,
                  }));
                break;
              case 8:
                (a = le.a.backgroundColorBrightPurple),
                  (t = Object(y.b)("#Feed_LeagueUpcoming")),
                  (r = "feed_cup.png");
                break;
              case 9:
                (a = le.a.backgroundColorBrightPurple),
                  (t = Object(y.b)("#Feed_LeagueConcluded")),
                  (r = "feed_cup.png");
                break;
              case 10:
                (a = le.a.backgroundColorBrightOrange),
                  (t = Object(y.b)("#Feed_DPCStandings")),
                  (r = "feed_international.png");
                break;
              case 11:
                (a = le.a.backgroundColorBrightGreen),
                  (t = Object(y.b)("#Feed_AlertPredictions")),
                  (r = "feed_news.png");
                break;
              case 12:
                (a = le.a.backgroundColorBrightGreen),
                  (t = Object(y.b)("#Feed_AlertFantasy")),
                  (r = "feed_news.png");
                break;
              case 13:
                (a = le.a.backgroundColorOrange),
                  (t = Object(y.b)("#Feed_LiveMatch")),
                  (r = "feed_dota.png"),
                  (e = m.a.createElement(Re, {
                    key:
                      this.props.type +
                      "_" +
                      this.props.league_id +
                      "_" +
                      this.props.server_steam_id,
                    leagueID: this.props.league_id,
                    radiantTeamID: this.props.team_id,
                    direTeamID: this.props.data_1,
                    gameTime: this.props.data_2,
                    serverSteamID: this.props.server_steam_id,
                    nodeID: this.props.data_3,
                  })),
                  (n = !0);
                break;
              case 14:
                (a = le.a.backgroundColorOrange),
                  (t = Object(y.b)("#Feed_LiveSeries")),
                  (r = "feed_dota.png"),
                  (e = m.a.createElement(Pe, {
                    key:
                      this.props.type +
                      "_" +
                      this.props.league_id +
                      "_" +
                      this.props.node_id,
                    leagueID: this.props.league_id,
                    nodeID: this.props.node_id,
                  })),
                  (n = !0);
            }
            var c = "",
              l = Date.now() / 1e3;
            if (!n)
              if (o) {
                var i = this.props.data_1 - l,
                  g = (Math.floor(i / 60), Math.floor(i / 3600)),
                  _ = Math.floor(i / 86400),
                  d = Math.floor(i / 604800);
                c =
                  g < 1
                    ? Object(y.b)("#Feed_Timestamp_Future_Shortly")
                    : _ < 1
                    ? Object(y.b)(
                        1 == g
                          ? "#Feed_Timestamp_Future_Hour"
                          : "#Feed_Timestamp_Future_Hours",
                        g
                      )
                    : d < 1
                    ? Object(y.b)(
                        1 == _
                          ? "#Feed_Timestamp_Future_Day"
                          : "#Feed_Timestamp_Future_Days",
                        _
                      )
                    : Object(y.b)(
                        1 == d
                          ? "#Feed_Timestamp_Future_Week"
                          : "#Feed_Timestamp_Future_Weeks",
                        d
                      );
              } else {
                var p = l - this.props.timestamp,
                  u = Math.floor(p / 60),
                  h = Math.floor(p / 3600),
                  b = Math.floor(p / 86400),
                  k = Math.floor(p / 604800);
                c =
                  u < 1
                    ? Object(y.b)("#Feed_Timestamp_JustNow")
                    : h < 1
                    ? Object(y.b)(
                        1 == u
                          ? "#Feed_Timestamp_Minute"
                          : "#Feed_Timestamp_Minutes",
                        u
                      )
                    : b < 1
                    ? Object(y.b)(
                        1 == h
                          ? "#Feed_Timestamp_Hour"
                          : "#Feed_Timestamp_Hours",
                        h
                      )
                    : k < 1
                    ? Object(y.b)(
                        1 == b ? "#Feed_Timestamp_Day" : "#Feed_Timestamp_Days",
                        b
                      )
                    : Object(y.b)(
                        1 == k
                          ? "#Feed_Timestamp_Week"
                          : "#Feed_Timestamp_Weeks",
                        k
                      );
              }
            return m.a.createElement(
              "div",
              { className: le.a.FeedElement },
              m.a.createElement(
                "div",
                { className: le.a.HeadlineRow },
                m.a.createElement("img", {
                  className: le.a.Icon,
                  src: s.a.IMG_URL + "/" + r,
                }),
                m.a.createElement("div", { className: le.a.Headline }, t),
                m.a.createElement("div", { className: le.a.Timestamp }, c)
              ),
              m.a.createElement("div", { className: A(le.a.Underline, a) }),
              e
            );
          }),
          a
        );
      })(m.a.Component),
      Ge = t("v7Gi"),
      Ae = t.n(Ge),
      we = t("/XF4"),
      Me = t.n(we),
      Fe = (function (e) {
        function a(a) {
          return e.call(this, a) || this;
        }
        return (
          Object(n.d)(a, e),
          (a.prototype.toggle = function () {
            i.g_App.toggleFavorite(
              this.props.type,
              this.props.id,
              this.props.name,
              this.props.url
            );
          }),
          (a.prototype.render = function () {
            var e = i.g_App.isFavorite(this.props.type, this.props.id);
            return m.a.createElement(
              "div",
              { className: A(Me.a.FavoriteToggle, this.props.className) },
              m.a.createElement("img", {
                src:
                  s.a.IMG_URL +
                  (e ? "favorite_star.png" : "favorite_star_empty.png"),
                className: Me.a.Favorite,
                onClick: this.toggle,
              })
            );
          }),
          Object(n.c)([q], a.prototype, "toggle", null),
          (a = Object(n.c)([x.a], a))
        );
      })(m.a.Component),
      je = (function (e) {
        function a() {
          var a = (null !== e && e.apply(this, arguments)) || this;
          return (a.state = { bError: !1, bFallbackError: !1 }), a;
        }
        return (
          Object(n.d)(a, e),
          (a.prototype.componentDidUpdate = function (e) {
            e.src != this.props.src && this.setState({ bError: !1 }),
              e.fallbackSrc != this.props.fallbackSrc &&
                this.setState({ bFallbackError: !1 });
          }),
          (a.prototype.render = function () {
            var e = this.props,
              a = e.fallbackSrc,
              t = e.src,
              r = Object(n.f)(e, ["fallbackSrc", "src"]);
            return this.state.bFallbackError
              ? null
              : this.state.bError || !t
              ? m.a.createElement(
                  "img",
                  Object(n.a)({}, r, {
                    src: a,
                    onError: this.HandleFallbackError,
                  })
                )
              : m.a.createElement(
                  "img",
                  Object(n.a)({}, r, { src: t, onError: this.HandleError })
                );
          }),
          (a.prototype.HandleError = function (e) {
            this.setState({ bError: !0 }),
              this.props.onError && this.props.onError(e);
          }),
          (a.prototype.HandleFallbackError = function (e) {
            this.setState({ bFallbackError: !0 }),
              this.props.onError && this.props.onError(e);
          }),
          Object(n.c)([q], a.prototype, "HandleError", null),
          Object(n.c)([q], a.prototype, "HandleFallbackError", null),
          a
        );
      })(m.a.Component),
      He = (function (e) {
        function a(a) {
          return e.call(this, a) || this;
        }
        return (
          Object(n.d)(a, e),
          (a.prototype.render = function () {
            var e,
              a,
              t = this,
              o = this.props.location.pathname == f(),
              n = this.props.location.pathname == E(),
              c = this.props.location.pathname == N(),
              l = this.props.location.pathname == G(r.LeagueSelect),
              g = -1 != this.props.location.pathname.indexOf(C()),
              _ = o || n || c || l || g,
              d = m.a.createElement("img", {
                src: s.a.IMG_URL + "back_arrow.png",
                className: A(Ae.a.BackArrow, _ && Ae.a.Hidden),
                onClick: function () {
                  return window.history.back();
                },
              });
            this.props.text &&
              (e = m.a.createElement(
                "div",
                { className: Ae.a.HeaderText },
                this.props.text
              ));
            var p,
              u,
              h,
              b,
              y =
                this.props.titleButtonDestination &&
                this.props.titleButtonDestination.startsWith("http");
            if (
              (this.props.titleButtonImage
                ? (a = y
                    ? m.a.createElement(
                        "a",
                        { href: this.props.titleButtonDestination },
                        m.a.createElement("img", {
                          src: s.a.IMG_URL + this.props.titleButtonImage,
                          className: Ae.a.HeaderButton,
                        })
                      )
                    : m.a.createElement(
                        ge.a,
                        { to: this.props.titleButtonDestination },
                        m.a.createElement("img", {
                          src: s.a.IMG_URL + this.props.titleButtonImage,
                          className: Ae.a.HeaderButton,
                        })
                      ))
                : this.props.titleButtonText &&
                  (a = y
                    ? m.a.createElement(
                        "a",
                        { href: this.props.titleButtonDestination },
                        m.a.createElement(
                          "div",
                          {
                            className: A(
                              Ae.a.HeaderButtonText,
                              this.props.titleButtonTextClass
                            ),
                          },
                          this.props.titleButtonText
                        )
                      )
                    : m.a.createElement(
                        ge.a,
                        { to: this.props.titleButtonDestination },
                        m.a.createElement(
                          "div",
                          {
                            className: A(
                              Ae.a.HeaderButtonText,
                              this.props.titleButtonTextClass
                            ),
                          },
                          this.props.titleButtonText
                        )
                      )),
              this.props.profileAccountID)
            ) {
              var k = i.g_App.getSteamPlayerInfo(),
                v = k && k.response ? k.response.players[0] : null,
                B = v ? v.avatarfull : "";
              p = m.a.createElement(
                ge.a,
                { to: this.props.titleButtonDestination },
                m.a.createElement(je, {
                  className: Ae.a.Avatar,
                  src: B,
                  fallbackSrc: s.a.IMG_URL + "portrait_unknown.png",
                })
              );
            }
            return (
              this.props.shards &&
                (u = m.a.createElement(
                  "div",
                  { className: Ae.a.Shards },
                  m.a.createElement("img", {
                    src: s.a.IMG_URL + "currency_icon_small.png",
                    className: Ae.a.ShardsIcon,
                  }),
                  m.a.createElement(
                    "div",
                    { className: Ae.a.Count },
                    Be(this.props.shards)
                  )
                )),
              this.props.favoriteType &&
                (h = m.a.createElement(Fe, {
                  className: Ae.a.Favorite,
                  type: this.props.favoriteType,
                  id: this.props.favoriteId,
                  name: this.props.favoriteName,
                  url: this.props.favoriteURL,
                })),
              null != this.props.helpPageButton &&
                (b = m.a.createElement("img", {
                  src: s.a.IMG_URL + "help.png",
                  className: Ae.a.HelpPage,
                  onClick: function () {
                    return i.g_App.resetHelpShown(t.props.helpPageButton);
                  },
                })),
              m.a.createElement(
                "div",
                { className: Ae.a.TitleHeader },
                m.a.createElement(
                  "div",
                  { className: Ae.a.TitleElements },
                  d,
                  e,
                  a,
                  undefined,
                  p,
                  u,
                  h,
                  b
                ),
                m.a.createElement("div", {
                  className: A(
                    Ae.a.Underline,
                    this.props.underlineColorStyle
                      ? this.props.underlineColorStyle
                      : ""
                  ),
                }),
                m.a.createElement(
                  "div",
                  { className: this.props.childrenStyle },
                  this.props.children
                )
              )
            );
          }),
          (a = Object(n.c)([x.a], a))
        );
      })(m.a.Component),
      Ue = Object(k.a)(He),
      We = (function (e) {
        function a() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(n.d)(a, e),
          (a.prototype.componentDidMount = function () {
            i.g_App.triggerShowHelpPage(kt.Main);
          }),
          (a.prototype.render = function () {
            var e = i.g_App.getFeed();
            if (!e)
              return m.a.createElement(
                "div",
                { className: re.a.FeedPage },
                m.a.createElement(Ue, {
                  text: Object(y.b)("#Header_Feed"),
                  underlineColorStyle: re.a.backgroundColorBrightRed,
                  helpPageButton: kt.Main,
                }),
                m.a.createElement(
                  "div",
                  { className: A(re.a.Contents, re.a.Loading) },
                  m.a.createElement(
                    "div",
                    { className: ne.a.FadeInDelay },
                    m.a.createElement(ue, {
                      size: "medium",
                      string: Object(y.b)("#Loading"),
                      position: "center",
                    })
                  )
                )
              );
            for (var a = [], t = 0, r = e.elements; t < r.length; t++) {
              var o = r[t],
                n =
                  "ElementKey_" +
                  o.type +
                  "_" +
                  o.timestamp +
                  "_" +
                  o.series_id +
                  "_" +
                  o.match_id +
                  "_" +
                  o.node_id +
                  "_" +
                  o.team_id +
                  "_" +
                  o.server_steam_id;
              a.push(
                m.a.createElement(De, {
                  key: n,
                  type: o.type,
                  timestamp: o.timestamp,
                  series_id: o.series_id,
                  match_id: o.match_id,
                  team_id: o.team_id,
                  account_id: o.account_id,
                  league_id: o.league_id,
                  node_id: o.node_id,
                  server_steam_id: o.server_steam_id,
                  data_1: o.data_1,
                  data_2: o.data_2,
                  data_3: o.data_3,
                  data_4: o.data_4,
                })
              );
            }
            return m.a.createElement(
              "div",
              { className: re.a.FeedPage },
              m.a.createElement(Ue, {
                text: Object(y.b)("#Header_Feed"),
                underlineColorStyle: re.a.backgroundColorBrightRed,
                helpPageButton: kt.Main,
                profileAccountID: s.a.ACCOUNT_ID,
                titleButtonDestination: S(),
              }),
              m.a.createElement("div", { className: re.a.Contents }, a)
            );
          }),
          (a = Object(n.c)([x.a], a))
        );
      })(m.a.Component),
      xe = function (e) {
        var a = e.title,
          t = e.tier,
          r = e.leagueID,
          c = e.prizepool,
          l = e.startdate,
          i = e.enddate,
          g = Object(n.f)(e, [
            "title",
            "tier",
            "leagueID",
            "prizepool",
            "startdate",
            "enddate",
          ]),
          _ = "";
        switch (t) {
          case 3:
            _ = Object(y.b)("#LeagueTier_3");
            break;
          case 4:
            _ = Object(y.b)("#LeagueTier_4");
        }
        var d = new Date(1e3 * l),
          p = new Date(1e3 * i),
          u = Object(y.b)("#DayMonth_" + d.getMonth(), d.getDate()),
          h = Object(y.b)("#DayMonth_" + p.getMonth(), p.getDate()),
          b =
            0 == l || 0 == i ? Object(y.b)("#Fantasy_Upcoming") : u + " - " + h;
        return m.a.createElement(
          ge.a,
          { to: D(r, o.Standings) },
          m.a.createElement(
            Ce,
            Object(n.a)({}, g),
            m.a.createElement(Ce.Image, {
              src:
                s.a.CDN_URL +
                "apps/dota2/images/leagues/" +
                r +
                "/images/image_8.png",
            }),
            m.a.createElement(
              Ce.Content,
              { className: se.a.tournament },
              m.a.createElement("span", { className: se.a.type }, _),
              m.a.createElement("div", { className: se.a.title }, a),
              c > 0 &&
                m.a.createElement(
                  "div",
                  { className: se.a.details },
                  m.a.createElement(
                    "span",
                    { className: se.a.prize },
                    "$" + c.toLocaleString()
                  )
                ),
              m.a.createElement("div", { className: se.a.Dates }, b)
            )
          )
        );
      },
      qe = t("1usE"),
      Ye = t.n(qe),
      Ve = (function (e) {
        function a() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(n.d)(a, e),
          (a.prototype.render = function () {
            var e = i.g_App.getLeagueInfoList();
            return e
              ? m.a.createElement(
                  "div",
                  { className: Ye.a.TournamentListPage },
                  m.a.createElement(Ue, {
                    text: Object(y.b)("#Header_Tournaments"),
                    underlineColorStyle: Ye.a.backgroundColorBrightOrange,
                    titleButtonDestination: B(),
                    titleButtonImage: "search.png",
                  }),
                  m.a.createElement(
                    "div",
                    { className: Ye.a.Contents },
                    e
                      .slice()
                      .sort(function (e, a) {
                        return a.start_timestamp - e.start_timestamp;
                      })
                      .map(function (e, a) {
                        return m.a.createElement(xe, {
                          key: a,
                          title: Object(y.b)("#LeagueName_" + e.league_id),
                          tier: e.tier,
                          leagueID: e.league_id,
                          prizepool: e.total_prize_pool,
                          startdate: e.start_timestamp,
                          enddate: e.end_timestamp,
                        });
                      })
                  )
                )
              : m.a.createElement(
                  "div",
                  { className: Ye.a.TournamentListPage },
                  m.a.createElement(
                    "div",
                    { className: ne.a.FadeInDelay },
                    m.a.createElement(ue, {
                      size: "medium",
                      string: "Loading...",
                      position: "center",
                    })
                  )
                );
          }),
          (a = Object(n.c)([x.a], a))
        );
      })(m.a.Component),
      ze = t("w3zt"),
      Ke = t.n(ze),
      Xe = t("fdZV"),
      Je = t.n(Xe),
      Ze = t("IV5K"),
      Qe = t.n(Ze),
      $e = (function (e) {
        function a(a) {
          var t = e.call(this, a) || this;
          return (
            (t.nMin = 0),
            (t.nMax = 0),
            (t.nStartX = 0),
            (t.bIsTouching = !1),
            (t.refSlider = m.a.createRef()),
            (t.refPip = m.a.createRef()),
            (t.pipPosition = 0),
            (t.state = { currValue: t.props.startingValue, pipPosition: 0 }),
            (t.nMin = t.props.min),
            (t.nMax = t.props.max),
            t
          );
        }
        return (
          Object(n.d)(a, e),
          (a.prototype.onTouchStart = function (e) {
            0 != e.changedTouches.length &&
              ((this.nStartX = e.changedTouches[0].clientX),
              (this.bIsTouching = !0),
              this.onTouchMove(e));
          }),
          (a.prototype.onTouchEnd = function (e) {
            this.bIsTouching = !1;
          }),
          (a.prototype.onTouchMove = function (e) {
            if (0 != e.changedTouches.length) {
              var a = this.refSlider.current.getBoundingClientRect().left,
                t = this.refSlider.current.getBoundingClientRect().right;
              t -= a;
              var r =
                (e.changedTouches[0].clientX -
                  this.refSlider.current.getBoundingClientRect().left -
                  (a = 0)) /
                (t - a);
              r = Math.min(Math.max(0, r), 1);
              var o = parseInt(
                (
                  Math.floor(
                    this.nMin +
                      ((this.nMax - this.nMin) * r) / this.props.stepSize
                  ) * this.props.stepSize
                ).toFixed(0)
              );
              this.setState({ currValue: o, pipPosition: a + (t - a) * r }),
                this.props.onValueChanged && this.props.onValueChanged(o);
            }
          }),
          (a.prototype.OnChange = function (e) {
            var a = parseInt(e.target.value);
            this.props.onValueChanged && this.props.onValueChanged(a);
          }),
          (a.prototype.render = function () {
            return m.a.createElement(
              "div",
              {
                className: Qe.a.SliderContainer,
                onTouchStart: this.onTouchStart,
                onTouchMove: this.onTouchMove,
                onTouchEnd: this.onTouchEnd,
                ref: this.refSlider,
              },
              m.a.createElement(
                "div",
                { className: Qe.a.Slider },
                m.a.createElement("div", {
                  className: Qe.a.Pip,
                  ref: this.refPip,
                  style: { left: this.state.pipPosition },
                })
              )
            );
          }),
          Object(n.c)([q], a.prototype, "onTouchStart", null),
          Object(n.c)([q], a.prototype, "onTouchEnd", null),
          Object(n.c)([q], a.prototype, "onTouchMove", null),
          Object(n.c)([q], a.prototype, "OnChange", null),
          (a = Object(n.c)([x.a], a))
        );
      })(m.a.Component),
      ea = (function (e) {
        function a(a) {
          var t = e.call(this, a) || this;
          return (t.state = { selectedTeam: 0, wagerAmount: 0 }), t;
        }
        return (
          Object(n.d)(a, e),
          (a.prototype.selectTeam1 = function () {
            null == this.props.demoMode &&
              i.g_App.selectProPredictionToMake(
                this.props.leagueId,
                this.props.match.nodeId,
                this.props.match.teams[0].teamId,
                this.props.match.teams[0].payout,
                this.props.wagerTimestamp
              );
          }),
          (a.prototype.selectTeam2 = function () {
            null == this.props.demoMode &&
              i.g_App.selectProPredictionToMake(
                this.props.leagueId,
                this.props.match.nodeId,
                this.props.match.teams[1].teamId,
                this.props.match.teams[1].payout,
                this.props.wagerTimestamp
              );
          }),
          (a.prototype.handleOnChange = function (e) {
            null == this.props.demoMode &&
              i.g_App.setSelectedPredictionWagerAmount(e);
          }),
          (a.prototype.OnCancelWager = function () {
            null == this.props.demoMode && i.g_App.clearProPredictionToMake();
          }),
          (a.prototype.OnMakeWager = function () {
            null == this.props.demoMode && i.g_App.makeSelectedProPrediction();
          }),
          (a.prototype.clearError = function () {
            null == this.props.demoMode &&
              i.g_App.clearProPredictionError(
                this.props.leagueId,
                this.props.match.nodeId
              );
          }),
          (a.prototype.OddsString = function (e) {
            if ((e -= 1) < 1) {
              e = 1 / e;
              var a = Math.max(3 - Math.log10(e), 0);
              return "1 / " + e.toFixed(a).replace(/\.0+$/, "");
            }
            var t = Math.max(3 - Math.log10(e), 0);
            return e.toFixed(t).replace(/\.0+$/, "") + " / 1";
          }),
          (a.prototype.render = function () {
            var e = null,
              a = null,
              t = null,
              r = this.props.match;
            if (this.props.demoMode) {
              switch (
                ((e =
                  this.props.demoMode <= 2
                    ? {
                        leagueId: 0,
                        leagueNodeId: 1,
                        wagerAmount: 0,
                        teamPicked: 0,
                        payout: 1.333,
                        payoutAmount: 0,
                        state: ft.STATE_INCOMPLETE,
                      }
                    : 3 == this.props.demoMode
                    ? {
                        leagueId: 0,
                        leagueNodeId: 1,
                        wagerAmount: 75,
                        teamPicked: 2586976,
                        payout: 1.333,
                        payoutAmount: 100,
                        state: ft.STATE_WON,
                      }
                    : {
                        leagueId: 0,
                        leagueNodeId: 1,
                        wagerAmount: 75,
                        teamPicked: 2586976,
                        payout: 1.333,
                        payoutAmount: 0,
                        state: ft.STATE_LOST,
                      }),
                (r = {
                  nodeId: 1,
                  matchTime: 1547242886,
                  actualMatchTime: this.props.demoMode <= 2 ? 0 : 1,
                  teams: [
                    {
                      teamId: 2586976,
                      games_won: 0,
                      payout: 1.3333,
                      name: Object(y.b)("#TeamName_OG"),
                      url_logo: s.a.IMG_URL + "team_2586976.png",
                    },
                    {
                      teamId: 15,
                      games_won: 0,
                      payout: 4,
                      name: Object(y.b)("#TeamName_LGD"),
                      url_logo: s.a.IMG_URL + "team_15.png",
                    },
                  ],
                }),
                this.props.demoMode)
              ) {
                case 3:
                  (r.teams[0].games_won = 2), (r.teams[1].games_won = 1);
                  break;
                case 4:
                  (r.teams[0].games_won = 1), (r.teams[1].games_won = 2);
              }
              2 == this.props.demoMode &&
                (a = {
                  leagueId: 0,
                  leagueNodeId: 1,
                  wagerAmount: 75,
                  teamPicked: 2586976,
                  payout: 1.3333,
                  payoutAmount: 100,
                  state: ft.STATE_INCOMPLETE,
                });
            } else
              (e = i.g_App.getProPrediction(
                this.props.leagueId,
                this.props.match.nodeId
              )),
                (a = i.g_App.getSelectedProPrediction()),
                (t = i.g_App.getProPredictionError(
                  this.props.leagueId,
                  this.props.match.nodeId
                ));
            if (!e) return m.a.createElement("div", null);
            var o = null;
            switch (e.state) {
              case ft.STATE_WON:
                o = Je.a.WonPrediction;
                break;
              case ft.STATE_LOST:
                o = Je.a.LostPrediction;
                break;
              case ft.STATE_TIED:
                o = Je.a.TiedPrediction;
            }
            var n = [];
            n.push(m.a.createElement("div", { className: Je.a.TeamStatus })),
              n.push(m.a.createElement("div", { className: Je.a.TeamStatus }));
            for (var c = 0; c < 2; ++c)
              if (e.state == ft.STATE_INCOMPLETE)
                a &&
                a.leagueId == this.props.leagueId &&
                a.leagueNodeId == r.nodeId
                  ? a.teamPicked == r.teams[c].teamId &&
                    (n[c] = m.a.createElement(
                      "div",
                      { className: A(Je.a.TeamStatus, Je.a.TeamSelected) },
                      m.a.createElement(
                        "div",
                        null,
                        Object(y.b)("#Predictions_Selected")
                      )
                    ))
                  : r.teams[c].payout < 2 &&
                    (n[c] = m.a.createElement(
                      "div",
                      { className: A(Je.a.TeamStatus, Je.a.TeamFavored) },
                      m.a.createElement(
                        "div",
                        null,
                        Object(y.b)("#Predictions_Favored")
                      )
                    ));
              else if (r.teams[c].games_won > r.teams[1 - c].games_won) {
                var l = null;
                e.state == ft.STATE_WON && (l = Je.a.TeamWinner),
                  (n[c] = m.a.createElement(
                    "div",
                    { className: A(Je.a.TeamStatus, l) },
                    m.a.createElement(
                      "div",
                      null,
                      Object(y.b)("#Predictions_Winner")
                    )
                  ));
              }
            var g,
              _,
              d = new Date(1e3 * r.matchTime),
              p = null;
            if (
              0 == e.wagerAmount &&
              (0 != r.actualMatchTime ||
                0 != r.teams[0].games_won ||
                0 != r.teams[1].games_won)
            )
              return m.a.createElement("div", null);
            if (e.state != ft.STATE_INCOMPLETE)
              p = m.a.createElement(
                "div",
                { className: Je.a.PayoutContainer },
                m.a.createElement(
                  "div",
                  { className: Je.a.Results },
                  r.teams[0].games_won,
                  " : ",
                  r.teams[1].games_won
                ),
                m.a.createElement(
                  "div",
                  { className: Je.a.PayoutLabel },
                  Object(y.b)("#Predictions_Result")
                ),
                m.a.createElement("div", { className: Je.a.BottomPadding })
              );
            else if (0 == e.wagerAmount) {
              var u =
                a &&
                a.leagueId == this.props.leagueId &&
                a.leagueNodeId == r.nodeId;
              p = m.a.createElement(
                "div",
                {
                  className: A(
                    Je.a.PayoutContainer,
                    this.props.staleOdds && u && Je.a.StaleOdds
                  ),
                },
                m.a.createElement(
                  "div",
                  { className: Je.a.Payouts },
                  this.OddsString(r.teams[0].payout)
                ),
                m.a.createElement(
                  "div",
                  { className: Je.a.PayoutLabel },
                  Object(y.b)("#Predictions_Odds")
                ),
                m.a.createElement("div", { className: Je.a.BottomPadding })
              );
            } else
              p = m.a.createElement(
                "div",
                { className: Je.a.PayoutContainer },
                m.a.createElement(
                  "div",
                  { className: Je.a.Payouts },
                  this.OddsString(e.payout)
                ),
                m.a.createElement(
                  "div",
                  { className: Je.a.PayoutLabel },
                  Object(y.b)("#Predictions_Odds")
                ),
                m.a.createElement("div", { className: Je.a.BottomPadding })
              );
            (g =
              0 == r.actualMatchTime
                ? m.a.createElement(
                    "div",
                    { className: A(Je.a.StartTime, Je.a.StartTimePadding) },
                    d.toLocaleString([], {
                      month: "numeric",
                      day: "numeric",
                      hour: "numeric",
                      minute: "2-digit",
                    })
                  )
                : e.state == ft.STATE_INCOMPLETE
                ? m.a.createElement(
                    "div",
                    {
                      className: A(
                        Je.a.StartTime,
                        Je.a.StartTimePadding,
                        Je.a.InProgress
                      ),
                    },
                    Object(y.b)("#Predictions_InProgress")
                  )
                : m.a.createElement(
                    "div",
                    { className: A(Je.a.StartTime, Je.a.StartTimePadding) },
                    Object(y.b)("#Predictions_Final")
                  )),
              (_ = m.a.createElement(
                "div",
                { className: Je.a.Columns },
                m.a.createElement(
                  "div",
                  { className: Je.a.Team },
                  m.a.createElement(je, {
                    src: r.teams[0].url_logo,
                    fallbackSrc: s.a.IMG_URL + "team_unknown.png",
                  }),
                  m.a.createElement(
                    "div",
                    { className: Je.a.TeamNameContainer },
                    m.a.createElement(
                      "div",
                      { className: Je.a.TeamName },
                      r.teams[0].name
                    )
                  ),
                  n[0]
                ),
                p,
                m.a.createElement(
                  "div",
                  { className: Je.a.Team },
                  m.a.createElement(je, {
                    src: r.teams[1].url_logo,
                    fallbackSrc: s.a.IMG_URL + "team_unknown.png",
                  }),
                  m.a.createElement(
                    "div",
                    { className: Je.a.TeamNameContainer },
                    m.a.createElement(
                      "div",
                      { className: Je.a.TeamName },
                      r.teams[1].name
                    )
                  ),
                  n[1]
                )
              ));
            var h = null;
            null == this.props.demoMode && (h = Je.a.NotDemoMode);
            var b = null,
              k = this.props.demoMode
                ? 50
                : Math.min(
                    this.props.maxWager,
                    i.g_App.getProPredictionWagerTokens()
                  );
            if (null != t) {
              var v = "#Predictions_UnknownError";
              switch (t) {
                case Et.MAKE_PREDICTION_RESULT_DOESNT_OWN_EVENT:
                  v = "#Predictions_DoesntOwnEvent";
                  break;
                case Et.MAKE_PREDICTION_RESULT_BAD_TOURNAMENT:
                  v = "#Predictions_BadTournament";
                  break;
                case Et.MAKE_PREDICTION_RESULT_ALREADY_MADE_PREDICTION:
                  v = "#Predictions_AlreadyPredicted";
                  break;
                case Et.MAKE_PREDICTION_RESULT_UNKNOWN_SERIES:
                  v = "#Predictions_UnknownSeries";
                  break;
                case Et.MAKE_PREDICTION_RESULT_SERIES_STARTED:
                  v = "#Predictions_SeriesAlreadyStarted";
                  break;
                case Et.MAKE_PREDICTION_RESULT_INVALID_TEAM:
                  v = "#Predictions_UnknownTeam";
                  break;
                case Et.MAKE_PREDICTION_RESULT_STALE_ODDS:
                  v = "#Predictions_StaleOdds";
                  break;
                case Et.MAKE_PREDICTION_RESULT_NOT_ENOUGH_FUNDS:
                  v = "#Predictions_NotEnoughFunds";
                  break;
                case Et.MAKE_PREDICTION_RESULT_BAD_ACCOUNT_ID:
                  v = "#Predictions_UnknownAccount";
                  break;
                case Et.MAKE_PREDICTION_RESULT_RATE_LIMITED:
                  v = "#Predictions_RateLimited";
                  break;
                case Et.MAKE_PREDICTION_RESULT_UNKNOWN_WAGER_ODDS:
                  v = "#Predictions_StaleOdds";
              }
              b = m.a.createElement(
                "div",
                {
                  className: A(Je.a.PredictionBottomSection, Je.a.ErrorSection),
                },
                m.a.createElement(
                  "div",
                  { className: Je.a.ErrorBody },
                  Object(y.b)(v)
                ),
                m.a.createElement(
                  "div",
                  { className: Je.a.ErrorButton, onClick: this.clearError },
                  Object(y.b)("#Predictions_Dismiss")
                )
              );
            } else if (
              i.g_App.isProPredictionInProgress(
                this.props.leagueId,
                this.props.match.nodeId
              )
            )
              b = m.a.createElement(
                "div",
                { className: Je.a.PredictionBottomSection },
                m.a.createElement(
                  "div",
                  { className: Je.a.SubmittingContainer },
                  m.a.createElement(
                    "div",
                    { className: Je.a.SubmittingText },
                    Object(y.b)("#Predictions_SubmittingPrediction")
                  )
                )
              );
            else if (0 == e.wagerAmount)
              b =
                a &&
                a.leagueId == this.props.leagueId &&
                a.leagueNodeId == r.nodeId &&
                0 != a.teamPicked
                  ? m.a.createElement(
                      "div",
                      { className: Je.a.PredictionBottomSection },
                      m.a.createElement(
                        "div",
                        { className: Je.a.WagerSelectionContainer },
                        m.a.createElement(
                          "div",
                          { className: Je.a.WagerSelectionGroup },
                          m.a.createElement(
                            "div",
                            { className: Je.a.WagerLabel },
                            Object(y.b)("#Predictions_Wager")
                          ),
                          m.a.createElement("img", {
                            src: s.a.IMG_URL + "currency_icon_small.png",
                          }),
                          m.a.createElement(
                            "div",
                            { className: Je.a.WagerAmount },
                            a ? a.wagerAmount : ""
                          )
                        ),
                        m.a.createElement(
                          "div",
                          { className: Je.a.WagerSelectionGroup },
                          m.a.createElement(
                            "div",
                            { className: Je.a.WagerLabel },
                            Object(y.b)("#Predictions_Pays")
                          ),
                          m.a.createElement("img", {
                            src: s.a.IMG_URL + "currency_icon_small.png",
                          }),
                          m.a.createElement(
                            "div",
                            {
                              className: A(
                                Je.a.WagerAmount,
                                this.props.staleOdds && Je.a.StaleOdds
                              ),
                            },
                            a ? a.payoutAmount : ""
                          )
                        )
                      ),
                      m.a.createElement(
                        "div",
                        { className: Je.a.WagerSelectionContainer },
                        m.a.createElement(
                          "div",
                          {
                            className: A(
                              h,
                              Je.a.WagerShardsButton,
                              Je.a.Small,
                              Je.a.Close
                            ),
                            onClick: this.OnCancelWager,
                          },
                          m.a.createElement("img", {
                            src: s.a.IMG_URL + "x_close.png",
                          })
                        ),
                        m.a.createElement(
                          "div",
                          { className: Je.a.WagerSliderContainer },
                          m.a.createElement($e, {
                            startingValue: a ? a.wagerAmount : 0,
                            min: 0,
                            max: k,
                            stepSize: 5,
                            onValueChanged: this.handleOnChange,
                          })
                        ),
                        m.a.createElement(
                          "div",
                          {
                            className: A(
                              h,
                              Je.a.WagerShardsButton,
                              Je.a.Small,
                              Je.a.Check
                            ),
                            onClick: this.OnMakeWager,
                          },
                          m.a.createElement("img", {
                            src: s.a.IMG_URL + "check.png",
                          })
                        )
                      )
                    )
                  : m.a.createElement(
                      "div",
                      {
                        className: A(
                          Je.a.PredictionBottomSection,
                          Je.a.MakeWager
                        ),
                      },
                      m.a.createElement(
                        "div",
                        { className: Je.a.WagerContainer },
                        m.a.createElement(
                          "div",
                          {
                            className: A(h, Je.a.WagerShardsButton),
                            onClick: this.selectTeam1,
                          },
                          m.a.createElement("img", {
                            src: s.a.IMG_URL + "check_gray.png",
                          })
                        ),
                        m.a.createElement(
                          "div",
                          { className: Je.a.SelectTeamLabel },
                          Object(y.b)("#Predictions_SelectTeam")
                        ),
                        m.a.createElement(
                          "div",
                          {
                            className: A(h, Je.a.WagerShardsButton),
                            onClick: this.selectTeam2,
                          },
                          m.a.createElement("img", {
                            src: s.a.IMG_URL + "check_gray.png",
                          })
                        )
                      )
                    );
            else {
              var f = null,
                E = null,
                C = 0;
              switch (e.state) {
                case ft.STATE_INCOMPLETE:
                  (E = "#Predictions_Pays"), (C = e.payoutAmount);
                  break;
                case ft.STATE_WON:
                  (E = "#Predictions_Won"),
                    (f = { color: "#76ca65" }),
                    (C = e.payoutAmount);
                  break;
                case ft.STATE_LOST:
                  (E = "#Predictions_Lost"),
                    (f = { color: "#FF5050" }),
                    (C = e.wagerAmount);
                  break;
                case ft.STATE_TIED:
                  (E = "#Predictions_Tied"), (f = { color: "cyan" }), (C = 0);
              }
              var N = Object(y.b)("#Predictions_InvalidTeam");
              e.teamPicked == r.teams[0].teamId
                ? (N = r.teams[0].name)
                : e.teamPicked == r.teams[1].teamId && (N = r.teams[1].name),
                (b = m.a.createElement(
                  "div",
                  { className: Je.a.PredictionBottomSection },
                  m.a.createElement(
                    "div",
                    { className: Je.a.WagerSelectionContainer },
                    m.a.createElement(
                      "div",
                      {
                        className: A(
                          Je.a.WagerSelectionGroup,
                          Je.a.TeamSelected
                        ),
                      },
                      m.a.createElement(
                        "div",
                        { className: Je.a.WagerLabel },
                        Object(y.b)("#Predictions_Predicted"),
                        ":"
                      ),
                      m.a.createElement(
                        "div",
                        { className: Je.a.WagerSelectionTeamName },
                        N
                      )
                    )
                  ),
                  m.a.createElement(
                    "div",
                    { className: Je.a.WagerSelectionContainer },
                    m.a.createElement(
                      "div",
                      { className: Je.a.WagerSelectionGroup },
                      m.a.createElement(
                        "div",
                        { className: Je.a.WagerLabel },
                        Object(y.b)("#Predictions_Wager")
                      ),
                      m.a.createElement("img", {
                        src: s.a.IMG_URL + "currency_icon_small.png",
                      }),
                      m.a.createElement(
                        "div",
                        { className: Je.a.WagerAmount },
                        e.wagerAmount
                      )
                    ),
                    m.a.createElement(
                      "div",
                      { className: Je.a.WagerSelectionGroup, style: f },
                      m.a.createElement(
                        "div",
                        { className: Je.a.WagerLabel },
                        Object(y.b)(E)
                      ),
                      m.a.createElement("img", {
                        src: s.a.IMG_URL + "currency_icon_small.png",
                      }),
                      m.a.createElement(
                        "div",
                        { className: Je.a.WagerAmount },
                        C
                      )
                    )
                  )
                ));
            }
            return r.seriesID
              ? m.a.createElement(
                  ge.a,
                  {
                    to: P(r.leagueID, r.seriesID),
                    className: A(ne.a.FadeIn, Je.a.PredictionCard, o),
                  },
                  g,
                  _,
                  b
                )
              : m.a.createElement(
                  "div",
                  { className: A(ne.a.FadeIn, Je.a.PredictionCard, o) },
                  g,
                  _,
                  b
                );
          }),
          Object(n.c)([q], a.prototype, "selectTeam1", null),
          Object(n.c)([q], a.prototype, "selectTeam2", null),
          Object(n.c)([q], a.prototype, "handleOnChange", null),
          Object(n.c)([q], a.prototype, "OnCancelWager", null),
          Object(n.c)([q], a.prototype, "OnMakeWager", null),
          Object(n.c)([q], a.prototype, "clearError", null),
          (a = Object(n.c)([x.a], a))
        );
      })(m.a.Component),
      aa = (function (e) {
        function a(a) {
          var t = e.call(this, a) || this;
          return (t.state = { isStaleOdds: !1, upcomingMatchData: null }), t;
        }
        return (
          Object(n.d)(a, e),
          (a.prototype.componentDidMount = function () {
            var e = this,
              a = 1e3 * i.g_App.getRecentAndUpcomingMatchesRefreshInterval();
            (this.intervalHandle = setInterval(function () {
              e.setState({ isStaleOdds: !0 });
              var a = e;
              setTimeout(function () {
                a.setState({
                  upcomingMatchData: i.g_App.getRecentAndUpcomingMatches(),
                }),
                  a.setState({ isStaleOdds: !1 });
              }, 3e3);
            }, a)),
              i.g_App.triggerShowHelpPage(kt.Predictions);
          }),
          (a.prototype.componentWillUnmount = function () {
            clearInterval(this.intervalHandle);
          }),
          (a.prototype.render = function () {
            var e = i.g_App.getRecentAndUpcomingMatches();
            if (!e)
              return m.a.createElement(
                "div",
                { key: "Loading", className: Ke.a.Loading },
                m.a.createElement(ue, {
                  size: "medium",
                  string: Object(y.b)("#Loading"),
                  position: "center",
                })
              );
            var a = i.g_App.getProPredictionWagerTokens(),
              t = i.g_App.getProPredictionMaxWager();
            if (!e.tournaments || 0 == e.tournaments.length)
              return m.a.createElement(
                "div",
                { className: Ke.a.PredictionsPage },
                m.a.createElement(Ue, {
                  text: Object(y.b)("#Header_Predictions"),
                  underlineColorStyle: Ke.a.backgroundColorAqua,
                  shards: a,
                  helpPageButton: kt.Predictions,
                }),
                m.a.createElement(
                  "div",
                  { className: Ke.a.NoPredictionsContainer },
                  m.a.createElement(
                    "div",
                    { key: "NoPredictions", className: Ke.a.NoPredictions },
                    m.a.createElement(
                      "div",
                      { className: Ke.a.NoPredictionsAlertContainer },
                      m.a.createElement(
                        "div",
                        { className: Ke.a.NoPredictionsIcon },
                        Object(y.b)("#Predictions_NoPredictionsIcon")
                      )
                    ),
                    m.a.createElement(
                      "div",
                      { className: Ke.a.NoPredictionsTitle },
                      Object(y.b)("#Predictions_NoPredictions_Title")
                    ),
                    m.a.createElement(
                      "div",
                      { className: Ke.a.NoPredictionsDetail },
                      Object(y.b)("#Predictions_NoPredictions")
                    )
                  )
                )
              );
            for (var r = [], o = 0; o < e.tournaments.length; ++o) {
              var n = e.tournaments[o];
              if (n.matches && n.id && 0 != n.matches.length) {
                for (var c = !1, l = 0; l < n.matches.length; ++l) {
                  if ((d = n.matches[l]).nodeId) {
                    var g = i.g_App.getProPrediction(n.id, d.nodeId);
                    if (
                      g &&
                      (0 != g.wagerAmount ||
                        (0 == d.actualMatchTime &&
                          0 == d.teams[0].games_won &&
                          0 == d.teams[1].games_won))
                    ) {
                      c = !0;
                      break;
                    }
                  }
                }
                if (c) {
                  r.push(
                    m.a.createElement(
                      "div",
                      {
                        className: Ke.a.TournamentHeader,
                        key: "header" + n.id,
                      },
                      m.a.createElement("img", {
                        src: s.a.IMG_URL + "nav_tournaments_white.png",
                        className: Ke.a.ShardsIcon,
                      }),
                      m.a.createElement("div", null, n.name)
                    )
                  );
                  var _ = n.matches.slice().sort(function (e, a) {
                    return e.actualMatchTime != a.actualMatchTime
                      ? e.actualMatchTime - a.actualMatchTime
                      : (0 != e.matchTime ? e.matchTime : Number.MAX_VALUE) -
                          (0 != a.matchTime ? a.matchTime : Number.MAX_VALUE);
                  });
                  for (l = 0; l < _.length; ++l) {
                    var d;
                    if ((d = _[l]).nodeId) {
                      var p = n.id + "." + d.nodeId;
                      r.push(
                        m.a.createElement(ea, {
                          key: p,
                          leagueId: n.id,
                          maxWager: t,
                          match: d,
                          wagerTimestamp: e.wager_timestamp,
                          staleOdds: this.state.isStaleOdds,
                        })
                      );
                    }
                  }
                }
              }
            }
            return m.a.createElement(
              "div",
              { className: Ke.a.PredictionsPage },
              m.a.createElement(Ue, {
                text: Object(y.b)("#Header_Predictions"),
                underlineColorStyle: Ke.a.backgroundColorAqua,
                helpPageButton: kt.Predictions,
                shards: a,
              }),
              m.a.createElement(
                "div",
                { className: Ke.a.Contents },
                m.a.createElement("div", { className: Ke.a.PredictionList }, r)
              )
            );
          }),
          (a = Object(n.c)([x.a], a))
        );
      })(m.a.Component),
      ta = t("8kC8"),
      ra = t.n(ta),
      oa = t("2vnA"),
      na = t("1w3K"),
      ca = (function (e) {
        function a() {
          var a = (null !== e && e.apply(this, arguments)) || this;
          return (
            (a.state = {
              nLeagueID: 0,
              bSelectingDay: !1,
              bFriendLeaderboard: !1,
            }),
            a
          );
        }
        return (
          Object(n.d)(a, e),
          (a.prototype.GetLoadingThrobber = function () {
            return m.a.createElement(
              "div",
              { className: ra.a.Loading, key: "loading_throbber" },
              m.a.createElement(
                "div",
                { className: ne.a.FadeInDelay },
                m.a.createElement(ue, {
                  size: "medium",
                  string: Object(y.b)("#Loading"),
                  position: "center",
                })
              )
            );
          }),
          (a.prototype.GetLeagueList = function () {
            var e = [],
              a = i.g_App.getFantasyLeagueStatus();
            if (!a) return e.push(this.GetLoadingThrobber()), e;
            var t = this.props.section != r.LeagueSelect;
            for (var o in (e.push(
              m.a.createElement(
                "div",
                {
                  key: "leaguelist_header",
                  className: A(
                    ra.a.LeagueHeader,
                    ne.a.VerticalCollapseable,
                    t && ne.a.VerticalCollapse
                  ),
                },
                Object(y.b)("#Fantasy_SelectLeague")
              )
            ),
            a.league_infos)) {
              var n = a.league_infos[o],
                c = new Date(1e3 * n.start_timestamp),
                l = new Date(1e3 * n.end_timestamp),
                s = Object(y.b)("#DayMonth_" + c.getMonth(), c.getDate()),
                g = Object(y.b)("#DayMonth_" + l.getMonth(), l.getDate()),
                _ =
                  0 == n.start_timestamp || 0 == n.end_timestamp
                    ? Object(y.b)("#Fantasy_Upcoming")
                    : s + " - " + g,
                d = n.league_id == this.props.match.params.leagueID,
                p = t && !d,
                u = void 0;
              switch (n.status) {
                case 0:
                  u = ra.a.StatusUnset;
                  break;
                case 1:
                  u = ra.a.StatusPartial;
                  break;
                case 2:
                  u = ra.a.StatusFull;
                  break;
                case 3:
                  u = ra.a.StatusConcluded;
              }
              var h = void 0;
              0 == n.status || 1 == n.status
                ? (h = r.Roster)
                : (2 != n.status && 3 != n.status) || (h = r.Scores),
                d
                  ? e.push(
                      m.a.createElement(
                        "div",
                        {
                          key: "leaguelist_" + n.league_id,
                          className: A(
                            ra.a.League,
                            ne.a.VerticalCollapseable,
                            p && ne.a.VerticalCollapse,
                            ra.a.Selected
                          ),
                        },
                        m.a.createElement("div", { className: ra.a.Dates }, _),
                        m.a.createElement(
                          "div",
                          { className: ra.a.Name },
                          Object(y.b)("#LeagueName_" + n.league_id)
                        ),
                        m.a.createElement(
                          "div",
                          { className: A(ra.a.Status, u) },
                          Object(y.b)("#Fantasy_LeagueStatus_" + n.status)
                        )
                      )
                    )
                  : e.push(
                      m.a.createElement(
                        v.a,
                        {
                          to: G(h, n.league_id, 0, 0),
                          key: "leaguelist_" + n.league_id,
                          className: A(
                            ra.a.League,
                            ne.a.VerticalCollapseable,
                            p && ne.a.VerticalCollapse,
                            d && ra.a.Selected
                          ),
                        },
                        m.a.createElement("div", { className: ra.a.Dates }, _),
                        m.a.createElement(
                          "div",
                          { className: ra.a.Name },
                          Object(y.b)("#LeagueName_" + n.league_id)
                        ),
                        m.a.createElement(
                          "div",
                          { className: A(ra.a.Status, u) },
                          Object(y.b)("#Fantasy_LeagueStatus_" + n.status)
                        )
                      )
                    );
              var b = this.props.section == r.Roster,
                k = this.props.section == r.Scores,
                f = this.props.section == r.Leaderboard;
              e.push(
                m.a.createElement(
                  "div",
                  {
                    key: "tabselector_" + n.league_id,
                    className: A(
                      ra.a.TabSelector,
                      ne.a.VerticalCollapseable,
                      !d && ne.a.VerticalCollapse
                    ),
                  },
                  m.a.createElement(
                    "div",
                    { className: ra.a.TextSelector },
                    m.a.createElement(
                      v.a,
                      {
                        to: G(r.Roster, n.league_id, 0),
                        className: A(ra.a.Entry, b && ra.a.Selected),
                      },
                      Object(y.b)("#Fantasy_Roster")
                    ),
                    m.a.createElement(
                      v.a,
                      {
                        to: G(r.Scores, n.league_id, 0, 0),
                        className: A(ra.a.Entry, k && ra.a.Selected),
                      },
                      Object(y.b)("#Fantasy_Scores")
                    ),
                    m.a.createElement(
                      v.a,
                      {
                        to: G(r.Leaderboard, n.league_id, 0),
                        className: A(ra.a.Entry, f && ra.a.Selected),
                      },
                      Object(y.b)("#Fantasy_Ranking")
                    )
                  ),
                  m.a.createElement(
                    "div",
                    { className: ra.a.UnderlineSelector },
                    m.a.createElement("div", {
                      className: A(
                        ra.a.Underline,
                        b && ra.a.Roster,
                        k && ra.a.Scores,
                        f && ra.a.Leaderboard
                      ),
                    }),
                    m.a.createElement("div", {
                      className: ra.a.UnderlineSpacer,
                    })
                  )
                )
              );
            }
            return e;
          }),
          (a.prototype.SubmitRosterSlots = function () {
            return Object(n.b)(this, void 0, void 0, function () {
              return Object(n.e)(this, function (e) {
                switch (e.label) {
                  case 0:
                    return [
                      4,
                      i.g_App.submitFantasyLineup(
                        parseInt(this.props.match.params.leagueID)
                      ),
                    ];
                  case 1:
                    return e.sent(), [2];
                }
              });
            });
          }),
          (a.prototype.GetPlayerSelect = function () {
            var e = [],
              a = [],
              t = parseInt(this.props.match.params.leagueID),
              o = parseInt(this.props.match.params.slot);
            if (this.props.section == r.PlayerSelect) {
              var n = 0;
              switch (o) {
                case 0:
                case 1:
                case 2:
                case 3:
                  n = 1;
                  break;
                case 4:
                case 5:
                  n = 4;
                  break;
                case 6:
                case 7:
                case 8:
                case 9:
                  n = 2;
              }
              var c = i.g_App.getPlayersInRole(t, n),
                l = i.g_App.getFantasyLineup(t);
              if (void 0 === c || void 0 === l)
                return e.push(this.GetLoadingThrobber()), e;
              if (!c)
                return (
                  e.push(
                    m.a.createElement(
                      "div",
                      { key: "players_none", className: ra.a.NoRosterPlayers },
                      m.a.createElement(
                        "div",
                        { className: ra.a.Header },
                        Object(y.b)("#Fantasy_NoPlayers")
                      ),
                      m.a.createElement(
                        "div",
                        { className: ra.a.Sub },
                        Object(y.b)("#Fantasy_NoPlayersSub")
                      )
                    )
                  ),
                  e
                );
              var g = function (e) {
                  var n = c.player_infos[e],
                    g = !1;
                  for (var d in l.rgRosterSlots)
                    if (l.rgRosterSlots[d].nAccountID == n.account_id) {
                      g = !0;
                      break;
                    }
                  if (g) return "continue";
                  a.push(
                    m.a.createElement(
                      "div",
                      {
                        key: "player" + n.account_id,
                        className: ra.a.RosterSlot,
                      },
                      m.a.createElement(je, {
                        className: A(ra.a.Icon, ra.a.Player),
                        src: i.g_App.getPlayerImageURL(n.account_id),
                        fallbackSrc: s.a.IMG_URL + "portrait_unknown.png",
                      }),
                      m.a.createElement(je, {
                        className: A(ra.a.Icon, ra.a.Team),
                        src: n.team_url_logo,
                        fallbackSrc: s.a.IMG_URL + "team_unknown.png",
                      }),
                      m.a.createElement(
                        "div",
                        { className: ra.a.Identity },
                        m.a.createElement(
                          "div",
                          { className: ra.a.Name },
                          n.name
                        )
                      ),
                      m.a.createElement(
                        v.a,
                        {
                          to: G(r.Roster, _.props.match.params.leagueID, 0),
                          className: ra.a.SelectButton,
                          onClick: function () {
                            return i.g_App.setFantasyRosterSlot(
                              t,
                              n.account_id,
                              o,
                              n.name,
                              n.team_url_logo
                            );
                          },
                        },
                        Object(y.b)("#Fantasy_Select")
                      )
                    )
                  );
                },
                _ = this;
              for (var d in c.player_infos) g(d);
              e.push(
                m.a.createElement(
                  "div",
                  {
                    key: "player_select_elements",
                    className: A(
                      ra.a.PlayerSelect,
                      ne.a.VerticalCollapseable,
                      this.props.section != r.PlayerSelect &&
                        ne.a.VerticalCollapse
                    ),
                  },
                  a
                )
              );
            }
            return e;
          }),
          (a.prototype.GetRoster = function () {
            var e,
              a = [],
              t = [],
              o = parseInt(this.props.match.params.leagueID),
              n = this.props.section == r.Roster;
            if (n) {
              var c = i.g_App.getFantasyLeagueStatus();
              if (c)
                for (var l in c.league_infos) {
                  var g = c.league_infos[l];
                  if (g.league_id == o)
                    if (g.end_timestamp > 0)
                      if (Date.now() / 1e3 > g.end_timestamp + 86400)
                        return (
                          a.push(
                            m.a.createElement(
                              "div",
                              { key: "Concluded", className: ra.a.Concluded },
                              Object(y.b)("#Fantasy_Concluded")
                            )
                          ),
                          a
                        );
                }
            }
            if ((n && (e = i.g_App.getFantasyLineup(o)), !e))
              return n && a.push(this.GetLoadingThrobber()), a;
            for (
              var _ = function (a) {
                  var n = 0 == e.rgRosterSlots[a].nAccountID,
                    c = e.rgRosterSlots[a].bLocked,
                    l = e.rgRosterSlots[a].bNeedsSubmission,
                    g = n
                      ? Object(y.b)("#Fantasy_SelectPlayer")
                      : e.rgRosterSlots[a].strName;
                  switch (a) {
                    case 0:
                      t.push(
                        m.a.createElement(
                          "div",
                          { key: "role_" + a, className: ra.a.RoleHeader },
                          Object(y.b)("#Team_RoleCore")
                        )
                      );
                      break;
                    case 4:
                      t.push(
                        m.a.createElement(
                          "div",
                          { key: "role_" + a, className: ra.a.RoleHeader },
                          Object(y.b)("#Team_RoleMid")
                        )
                      );
                      break;
                    case 6:
                      t.push(
                        m.a.createElement(
                          "div",
                          { key: "role_" + a, className: ra.a.RoleHeader },
                          Object(y.b)("#Team_RoleSupport")
                        )
                      );
                  }
                  var _ =
                      "roster_slot_" + d.props.match.params.leagueID + "_" + a,
                    p = void 0;
                  p = c
                    ? m.a.createElement("img", {
                        src: s.a.IMG_URL + "locked.png",
                        className: ra.a.SelectArrow,
                      })
                    : l
                    ? m.a.createElement("img", {
                        src: s.a.IMG_URL + "x_red.png",
                        className: ra.a.ClearX,
                        onClick: function () {
                          return i.g_App.clearFantasyRosterSlot(o, a);
                        },
                      })
                    : m.a.createElement("img", {
                        src: s.a.IMG_URL + "right_arrow.png",
                        className: ra.a.SelectArrow,
                      });
                  var u =
                    c || l
                      ? G(r.Roster, d.props.match.params.leagueID)
                      : G(r.PlayerSelect, d.props.match.params.leagueID, a);
                  t.push(
                    m.a.createElement(
                      v.a,
                      {
                        to: u,
                        key: _,
                        className: A(
                          ra.a.RosterSlot,
                          l && ra.a.NeedsSubmit,
                          c && ra.a.Locked
                        ),
                      },
                      m.a.createElement(je, {
                        className: A(ra.a.Icon, ra.a.Player),
                        src: i.g_App.getPlayerImageURL(
                          e.rgRosterSlots[a].nAccountID
                        ),
                        fallbackSrc: s.a.IMG_URL + "portrait_unknown.png",
                      }),
                      m.a.createElement(je, {
                        className: A(ra.a.Icon, ra.a.Team),
                        src: e.rgRosterSlots[a].strTeamLogoURL,
                        fallbackSrc: s.a.IMG_URL + "team_unknown.png",
                      }),
                      m.a.createElement(
                        "div",
                        { className: ra.a.Identity },
                        m.a.createElement(
                          "div",
                          { className: A(ra.a.Name, n && ra.a.Empty) },
                          g
                        )
                      ),
                      p
                    )
                  );
                },
                d = this,
                p = 0;
              p < 10;
              p++
            )
              _(p);
            return (
              a.push(
                m.a.createElement(
                  "div",
                  {
                    key: "roster_elements",
                    className: A(
                      ra.a.Roster,
                      ne.a.VerticalCollapseable,
                      this.props.section != r.Roster && ne.a.VerticalCollapse
                    ),
                  },
                  m.a.createElement(
                    "div",
                    {
                      className: A(
                        ra.a.SubmitButton,
                        e.bRosterNeedsSubmission && ra.a.Enabled
                      ),
                      onClick: this.SubmitRosterSlots,
                    },
                    Object(y.b)("#Fantasy_SubmitRoster")
                  ),
                  m.a.createElement(
                    "div",
                    {
                      className: A(
                        ra.a.RosterSlots,
                        ne.a.VerticalCollapseable,
                        this.props.section != r.Roster && ne.a.VerticalCollapse
                      ),
                    },
                    t
                  )
                )
              ),
              a
            );
          }),
          (a.prototype.ToggleDaySelect = function (e) {
            this.setState({ bSelectingDay: !this.state.bSelectingDay });
          }),
          (a.prototype.GetScores = function () {
            var e = this,
              a = [],
              t = [],
              o = [],
              n = this.props.section == r.Scores,
              c = parseInt(this.props.match.params.leagueID),
              l = parseInt(this.props.match.params.timestamp);
            if (!n) return a;
            var g = this.state.bSelectingDay,
              _ = i.g_App.getFantasyDayScore(c, n ? l : 0, !n),
              d = i.g_App.getFantasyLeagueStatus();
            if (!d) return n && a.push(this.GetLoadingThrobber()), a;
            for (var p in d.league_infos) {
              var u = d.league_infos[p];
              if (u.league_id == c) {
                t.push(
                  m.a.createElement(
                    v.a,
                    {
                      to: G(r.Scores, this.props.match.params.leagueID, 0, 0),
                      key: "league_" + c + "_day_0",
                      className: A(
                        ra.a.DayOption,
                        !this.state.bSelectingDay && 0 != l && ra.a.Collapse
                      ),
                      onClick: function () {
                        return e.ToggleDaySelect(0);
                      },
                    },
                    Object(y.b)("#Fantasy_Total")
                  )
                );
                var h = function (a) {
                    var o = u.day_timestamps[a],
                      n = new Date(1e3 * o).toLocaleDateString(void 0, {
                        month: "short",
                        day: "numeric",
                      });
                    t.push(
                      m.a.createElement(
                        v.a,
                        {
                          to: G(r.Scores, b.props.match.params.leagueID, 0, o),
                          key: "league_" + c + "_day_" + o,
                          className: A(
                            ra.a.DayOption,
                            !b.state.bSelectingDay && l != o && ra.a.Collapse
                          ),
                          onClick: function () {
                            return e.ToggleDaySelect(o);
                          },
                        },
                        n
                      )
                    );
                  },
                  b = this;
                for (var k in u.day_timestamps) h(k);
                break;
              }
            }
            if (!_)
              return (
                a.push(
                  m.a.createElement(
                    "div",
                    {
                      key: "score_elements",
                      className: A(
                        ra.a.Scores,
                        ne.a.VerticalCollapseable,
                        !n && ne.a.VerticalCollapse
                      ),
                    },
                    m.a.createElement(
                      "div",
                      { className: ra.a.ScoreSelector },
                      m.a.createElement("div", {
                        className: A(ra.a.VerticalLine, !g && ra.a.Collapse),
                      }),
                      m.a.createElement(
                        "div",
                        { className: ra.a.VerticalList },
                        t,
                        m.a.createElement("div", {
                          className: A(ra.a.HorizonalLine, g && ra.a.Collapse),
                        })
                      ),
                      m.a.createElement("div", {
                        className: A(ra.a.VerticalLine, !g && ra.a.Collapse),
                      })
                    ),
                    m.a.createElement("div", {
                      className: A(ra.a.TotalScore, ra.a.Collapsed),
                    })
                  )
                ),
                n && a.push(this.GetLoadingThrobber()),
                a
              );
            for (var f in _.players) {
              var E = _.players[f],
                C = {
                  appear: ne.a.VerticalCollapse,
                  appearActive: n ? "" : ne.a.VerticalCollapse,
                };
              o.push(
                m.a.createElement(
                  na.TransitionGroup,
                  { key: "player_" + E.account_id + "_timestamp_" + l },
                  m.a.createElement(
                    na.CSSTransition,
                    {
                      appear: !0,
                      timeout: 0,
                      classNames: C,
                      className: A(ra.a.Element, ne.a.VerticalCollapseable),
                    },
                    m.a.createElement(
                      ge.a,
                      { to: L(E.account_id) },
                      m.a.createElement(je, {
                        className: A(ra.a.Icon, ra.a.Player),
                        src: i.g_App.getPlayerImageURL(E.account_id),
                        fallbackSrc: s.a.IMG_URL + "portrait_unknown.png",
                      }),
                      m.a.createElement(je, {
                        className: A(ra.a.Icon, ra.a.Team),
                        src: E.team_logo_url,
                        fallbackSrc: s.a.IMG_URL + "team_unknown.png",
                      }),
                      m.a.createElement(
                        "div",
                        { className: ra.a.Identity },
                        m.a.createElement(
                          "div",
                          { className: ra.a.Name },
                          E.name
                        ),
                        m.a.createElement(
                          "div",
                          { className: ra.a.Role },
                          Object(y.b)("#Fantasy_Role_" + E.role)
                        )
                      ),
                      m.a.createElement(
                        "div",
                        { className: ra.a.Score },
                        E.score.toFixed(2)
                      )
                    )
                  )
                )
              );
            }
            return (
              a.push(
                m.a.createElement(
                  "div",
                  {
                    key: "score_elements",
                    className: A(
                      ra.a.Scores,
                      ne.a.VerticalCollapseable,
                      this.props.section != r.Scores && ne.a.VerticalCollapse
                    ),
                  },
                  m.a.createElement(
                    "div",
                    { className: ra.a.ScoreSelector },
                    m.a.createElement("div", {
                      className: A(ra.a.VerticalLine, !g && ra.a.Collapse),
                    }),
                    m.a.createElement(
                      "div",
                      { className: ra.a.VerticalList },
                      t,
                      m.a.createElement("div", {
                        className: A(ra.a.HorizonalLine, g && ra.a.Collapse),
                      })
                    ),
                    m.a.createElement("div", {
                      className: A(ra.a.VerticalLine, !g && ra.a.Collapse),
                    })
                  ),
                  m.a.createElement(
                    "div",
                    { className: ra.a.TotalScore },
                    _.total_score.toFixed(2)
                  ),
                  o
                )
              ),
              a
            );
          }),
          (a.prototype.ToggleLeaderboard = function () {
            this.setState({
              bFriendLeaderboard: !this.state.bFriendLeaderboard,
            });
          }),
          (a.prototype.GetLeaderboards = function () {
            var e = [],
              a = [],
              t = this.props.section == r.Leaderboard,
              o = parseInt(this.props.match.params.leagueID);
            if (!t) return e;
            var n = this.state.bFriendLeaderboard
              ? i.g_App.getFantasyFriendLeaderboard(o, !t)
              : i.g_App.getFantasyGlobalLeaderboard(o, !t);
            if (n)
              if (0 == n.entries.length)
                a.push(
                  m.a.createElement(
                    "div",
                    {
                      key: "leaderboard_empty",
                      className: ra.a.EmptyLeaderboard,
                    },
                    m.a.createElement(
                      "div",
                      { className: ra.a.Heading },
                      Object(y.b)("#Fantasy_EmptyLeaderboard")
                    ),
                    m.a.createElement(
                      "div",
                      { className: ra.a.SubHeading },
                      Object(y.b)("#Fantasy_EmptyLeaderboard2")
                    )
                  )
                );
              else
                for (var c in n.entries) {
                  var l = n.entries[c];
                  a.push(
                    m.a.createElement(
                      "div",
                      {
                        key: "leaderboard_player_" + c,
                        className: ra.a.Player,
                      },
                      m.a.createElement(
                        "div",
                        { className: ra.a.Name },
                        l.name
                      ),
                      m.a.createElement(
                        "div",
                        { className: ra.a.Score },
                        l.score.toFixed(2)
                      )
                    )
                  );
                }
            else t && a.push(this.GetLoadingThrobber());
            return (
              e.push(
                m.a.createElement(
                  "div",
                  {
                    key: "ranking_elements",
                    className: A(
                      ra.a.Leaderboards,
                      ne.a.VerticalCollapseable,
                      !t && ne.a.VerticalCollapse
                    ),
                  },
                  m.a.createElement(
                    "div",
                    { className: ra.a.FriendSection },
                    m.a.createElement(
                      "div",
                      { className: ra.a.Title },
                      Object(y.b)("#Fantasy_SteamFriends")
                    ),
                    m.a.createElement(
                      "div",
                      {
                        className: A(
                          ra.a.FriendSwitch,
                          this.state.bFriendLeaderboard && ra.a.Friend
                        ),
                        onClick: this.ToggleLeaderboard,
                      },
                      m.a.createElement("div", { className: ra.a.Background }),
                      m.a.createElement("div", { className: ra.a.Selector })
                    )
                  ),
                  m.a.createElement("div", { className: ra.a.PlayerList }, a)
                )
              ),
              e
            );
          }),
          (a.prototype.render = function () {
            var e = this.GetLeagueList(),
              a = this.GetRoster(),
              t = this.GetPlayerSelect(),
              o = this.GetScores(),
              n = this.GetLeaderboards();
            if (this.props.section == r.PlayerSelect) {
              var c = parseInt(this.props.match.params.leagueID),
                l = parseInt(this.props.match.params.slot),
                s = i.g_App.getFantasyLineup(c);
              console.log(Object(oa.H)(s)),
                s &&
                  i.g_App.isFantasyRosterSlotLocked(c, l) &&
                  this.props.history.goBack();
            }
            return m.a.createElement(
              "div",
              { className: ra.a.Contents },
              e,
              m.a.createElement(
                "div",
                { className: ra.a.SubContent },
                a,
                t,
                o,
                n
              )
            );
          }),
          Object(n.c)([q], a.prototype, "SubmitRosterSlots", null),
          Object(n.c)([q], a.prototype, "ToggleDaySelect", null),
          Object(n.c)([q], a.prototype, "ToggleLeaderboard", null),
          (a = Object(n.c)([x.a], a))
        );
      })(m.a.Component),
      la = (function (e) {
        function a() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(n.d)(a, e),
          (a.prototype.componentDidMount = function () {
            i.g_App.triggerShowHelpPage(kt.Fantasy);
          }),
          (a.prototype.render = function () {
            return m.a.createElement(
              "div",
              { className: ra.a.FantasyPage },
              m.a.createElement(Ue, {
                text: Object(y.b)("#Header_Fantasy"),
                underlineColorStyle: ra.a.backgroundColorBlue,
                helpPageButton: kt.Fantasy,
              }),
              m.a.createElement(
                "div",
                { className: ra.a.Contents },
                m.a.createElement(
                  d.a,
                  null,
                  m.a.createElement(p.a, {
                    exact: !0,
                    path: G(r.LeagueSelect),
                    render: function (e) {
                      return m.a.createElement(
                        ca,
                        Object(n.a)({ section: r.LeagueSelect }, e)
                      );
                    },
                  }),
                  m.a.createElement(p.a, {
                    path: G(r.RegionSelect, ":leagueID", 0),
                    render: function (e) {
                      return m.a.createElement(
                        ca,
                        Object(n.a)({ section: r.RegionSelect }, e)
                      );
                    },
                  }),
                  m.a.createElement(p.a, {
                    path: G(r.Roster, ":leagueID", 0),
                    render: function (e) {
                      return m.a.createElement(
                        ca,
                        Object(n.a)({ section: r.Roster }, e)
                      );
                    },
                  }),
                  m.a.createElement(p.a, {
                    path: G(r.PlayerSelect, ":leagueID", ":slot"),
                    render: function (e) {
                      return m.a.createElement(
                        ca,
                        Object(n.a)({ section: r.PlayerSelect }, e)
                      );
                    },
                  }),
                  m.a.createElement(p.a, {
                    path: G(r.Scores, ":leagueID", 0, ":timestamp"),
                    render: function (e) {
                      return m.a.createElement(
                        ca,
                        Object(n.a)({ section: r.Scores }, e)
                      );
                    },
                  }),
                  m.a.createElement(p.a, {
                    path: G(r.Leaderboard, ":leagueID", 0),
                    render: function (e) {
                      return m.a.createElement(
                        ca,
                        Object(n.a)({ section: r.Leaderboard }, e)
                      );
                    },
                  })
                )
              )
            );
          }),
          (a = Object(n.c)([x.a], a))
        );
      })(m.a.Component),
      ia = t("gT6X"),
      sa = t.n(ia),
      ga = (function (e) {
        function a() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(n.d)(a, e),
          (a.prototype.render = function () {
            var e = parseInt(this.props.match.params.teamID),
              a = i.g_App.getTeamData(e);
            if (!a)
              return m.a.createElement(
                "div",
                { key: "Loading", className: sa.a.Loading },
                m.a.createElement(ue, {
                  size: "medium",
                  string: Object(y.b)("#Loading"),
                  position: "center",
                })
              );
            var t = i.g_App.getDPCStandings(),
              r = "0";
            if (t && t.results)
              for (var n = 0, c = t.results; n < c.length; n++) {
                var l = c[n];
                if (l.team_id == e) {
                  r = l.total_points;
                  break;
                }
              }
            if (!a.members)
              return m.a.createElement(
                "div",
                { key: "InvalidTeam", className: sa.a.InvalidTeam },
                Object(y.b)("#Team_InvalidTeam")
              );
            var g = null,
              _ = [];
            if (a.dpc_results && a.dpc_results.results) {
              g = 0;
              for (var d = 0, p = a.dpc_results.results; d < p.length; d++) {
                var u = p[d];
                if (0 != u.standing) {
                  g += u.earnings;
                  var h = u.league_id;
                  _.push(
                    m.a.createElement(
                      ge.a,
                      {
                        to: D(h, o.Standings),
                        key: h,
                        className: sa.a.AchievementContainer,
                      },
                      m.a.createElement(
                        "div",
                        { className: sa.a.AchievementImageContainer },
                        m.a.createElement(je, {
                          src:
                            s.a.CDN_URL +
                            "apps/dota2/images/leagues/" +
                            h +
                            "/images/image_9.png",
                          fallbackSrc:
                            s.a.IMG_URL + "nav_tournaments_standings.png",
                          className: sa.a.LeagueImage,
                        })
                      ),
                      m.a.createElement(
                        "span",
                        { className: sa.a.AchievementRank },
                        Ne(u.standing)
                      )
                    )
                  );
                }
              }
            }
            var b = [1, 4, 2, 0],
              k = [],
              v = [];
            if (a.members)
              for (var f in b) {
                var E = b[f];
                if (a.registered_member_account_ids)
                  for (
                    var C = 0, N = a.registered_member_account_ids;
                    C < N.length;
                    C++
                  ) {
                    var B = N[C];
                    if (B) {
                      var S = parseInt(B);
                      if (
                        (k.push(S),
                        (G = i.g_App.getPlayerData(S)) &&
                          G.fantasy_role == E &&
                          (G.fantasy_role || 0 != E))
                      ) {
                        Math.floor(Date.now() / 18e5);
                        v.push(
                          m.a.createElement(
                            ge.a,
                            {
                              to: L("") + S,
                              key: S,
                              className: sa.a.PlayerContainer,
                            },
                            m.a.createElement(
                              "div",
                              { className: sa.a.PlayerImageContainer },
                              m.a.createElement(je, {
                                src: i.g_App.getPlayerImageURL(G.account_id),
                                fallbackSrc:
                                  s.a.IMG_URL_BASE +
                                  "players/portrait_unknown.png",
                                className: sa.a.PlayerImage,
                              })
                            ),
                            m.a.createElement(
                              "span",
                              { className: sa.a.PlayerInfo },
                              m.a.createElement(
                                "span",
                                { className: sa.a.PlayerNickname },
                                G.name
                              ),
                              m.a.createElement(
                                "span",
                                { className: sa.a.TeamRole },
                                G.fantasy_role ? Se(G.fantasy_role) : ""
                              )
                            ),
                            m.a.createElement("span", {
                              className: sa.a.Spacer,
                            }),
                            G.country_code &&
                              m.a.createElement(
                                "span",
                                { className: sa.a.PlayerCountry },
                                Object(y.b)(
                                  "#Steam_Country_" +
                                    G.country_code.toUpperCase()
                                )
                              ),
                            G.country_code &&
                              m.a.createElement("img", {
                                src:
                                  s.a.IMG_URL_BASE +
                                  "country_flags/" +
                                  G.country_code +
                                  ".png",
                                className: sa.a.CountryFlag,
                              })
                          )
                        );
                      }
                    }
                  }
              }
            var T = [];
            if (a.audit_entries)
              for (var P = 0, R = a.audit_entries; P < R.length; P++) {
                var I = R[P];
                if (2 == I.audit_action) {
                  var O = parseInt(I.account_id);
                  if (-1 == k.indexOf(O)) {
                    var G;
                    if (!(G = i.g_App.getPlayerData(O))) continue;
                    T.push(
                      m.a.createElement(
                        ge.a,
                        {
                          to: L("") + O,
                          key: "removed" + O,
                          className: sa.a.PlayerContainer,
                        },
                        m.a.createElement(
                          "div",
                          { className: sa.a.PlayerImageContainer },
                          m.a.createElement(je, {
                            src: i.g_App.getPlayerImageURL(G.account_id),
                            fallbackSrc:
                              s.a.IMG_URL_BASE + "players/portrait_unknown.png",
                            className: sa.a.PlayerImage,
                          })
                        ),
                        m.a.createElement(
                          "span",
                          { className: sa.a.PlayerInfo },
                          m.a.createElement(
                            "span",
                            { className: sa.a.PlayerNickname },
                            G.name
                          ),
                          m.a.createElement(
                            "span",
                            { className: sa.a.TeamRole },
                            G.fantasy_role ? Se(G.fantasy_role) : ""
                          )
                        ),
                        m.a.createElement("span", { className: sa.a.Spacer }),
                        G.country_code &&
                          m.a.createElement(
                            "span",
                            { className: sa.a.PlayerCountry },
                            Object(y.b)(
                              "#Steam_Country_" + G.country_code.toUpperCase()
                            )
                          ),
                        G.country_code &&
                          m.a.createElement("img", {
                            src:
                              s.a.IMG_URL_BASE +
                              "country_flags/" +
                              G.country_code +
                              ".png",
                            className: sa.a.CountryFlag,
                          })
                      )
                    );
                  }
                }
              }
            return m.a.createElement(
              "div",
              { className: sa.a.TeamPage },
              m.a.createElement(Ue, {
                favoriteType: i.EFavoriteType.Team,
                favoriteId: e,
                favoriteName: a.name,
                favoriteURL: a.url_logo,
              }),
              m.a.createElement(
                "div",
                { className: sa.a.Contents },
                m.a.createElement(
                  "div",
                  { className: sa.a.TeamLogoContainer },
                  m.a.createElement(ve, {
                    className: sa.a.Logo,
                    team_id: e,
                    size: pe.Large,
                  })
                ),
                m.a.createElement("div", { className: sa.a.TeamName }, a.name),
                m.a.createElement(
                  "div",
                  { className: sa.a.SubsectionHeader },
                  Object(y.b)("#Team_TeamInformation")
                ),
                a.country_code &&
                  m.a.createElement(
                    "div",
                    { className: sa.a.InfoStat },
                    m.a.createElement(
                      "span",
                      null,
                      Object(y.b)("#Team_Location")
                    ),
                    m.a.createElement("span", { className: sa.a.Spacer }),
                    m.a.createElement(
                      "span",
                      null,
                      Object(y.b)(
                        "#Steam_Country_" + a.country_code.toUpperCase()
                      )
                    ),
                    m.a.createElement("img", {
                      src:
                        s.a.IMG_URL_BASE +
                        "country_flags/" +
                        a.country_code +
                        ".png",
                      className: sa.a.CountryFlag,
                    })
                  ),
                0 != a.region &&
                  m.a.createElement(
                    "div",
                    { className: sa.a.InfoStat },
                    m.a.createElement(
                      "span",
                      null,
                      Object(y.b)("#Team_Region")
                    ),
                    m.a.createElement("span", { className: sa.a.Spacer }),
                    m.a.createElement(
                      "span",
                      null,
                      Object(y.b)("#LeagueRegion_" + a.region)
                    )
                  ),
                a.url_sponsor_logo > 0 &&
                  m.a.createElement(
                    "div",
                    { className: sa.a.InfoStat },
                    m.a.createElement(
                      "span",
                      null,
                      Object(y.b)("#Team_Sponsor")
                    ),
                    m.a.createElement("span", { className: sa.a.Spacer }),
                    m.a.createElement("img", {
                      src: a.url_sponsor_logo,
                      className: sa.a.SponsorLogo,
                    })
                  ),
                g > 0 &&
                  m.a.createElement(
                    "div",
                    { className: sa.a.InfoStat },
                    m.a.createElement(
                      "span",
                      null,
                      Object(y.b)("#Team_Earnings")
                    ),
                    m.a.createElement("span", { className: sa.a.Spacer }),
                    m.a.createElement("span", null, "$", Be(g))
                  ),
                m.a.createElement(
                  "div",
                  { className: sa.a.InfoStat },
                  m.a.createElement("span", null, Object(y.b)("#Team_DPCRank")),
                  m.a.createElement("span", { className: sa.a.Spacer }),
                  a.dpc_rank &&
                    m.a.createElement(
                      "span",
                      { className: sa.a.Rank },
                      "#",
                      a.dpc_rank,
                      m.a.createElement(
                        "span",
                        { className: sa.a.RankDash },
                        " -"
                      )
                    ),
                  m.a.createElement(
                    "span",
                    { className: sa.a.DPCPoints },
                    Object(y.b)("#Team_DPCRankValue", r)
                  )
                ),
                a.dpc_results &&
                  m.a.createElement(
                    "div",
                    { className: sa.a.SubsectionHeader },
                    Object(y.b)("#Team_TeamAchievements")
                  ),
                m.a.createElement(
                  "div",
                  { className: sa.a.AchievementsList },
                  _
                ),
                m.a.createElement(
                  "div",
                  { className: sa.a.SubsectionHeader },
                  Object(y.b)("#Team_Roster")
                ),
                v,
                T.length > 0 &&
                  m.a.createElement(
                    "div",
                    { className: sa.a.SubsectionHeader },
                    Object(y.b)("#Team_PreviousMembers")
                  ),
                T
              )
            );
          }),
          (a = Object(n.c)([x.a], a))
        );
      })(m.a.Component),
      ma = t("cxnq"),
      _a = t.n(ma),
      da = (function (e) {
        function a() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(n.d)(a, e),
          (a.prototype.render = function () {
            var e = parseInt(this.props.match.params.playerID),
              a = i.g_App.getPlayerData(e);
            if (!a)
              return m.a.createElement(
                "div",
                { key: "Loading", className: _a.a.Loading },
                m.a.createElement(ue, {
                  size: "medium",
                  string: Object(y.b)("#Loading"),
                  position: "center",
                })
              );
            if (!a.name)
              return m.a.createElement(
                "div",
                { key: "InvalidPlayer", className: _a.a.InvalidPlayer },
                Object(y.b)("#Player_InvalidPlayer")
              );
            var t = null;
            a.team_id && (t = i.g_App.getTeamData(a.team_id));
            var r = [];
            if (a.results)
              for (var n = 0; n < a.results.length; ++n)
                r.push(
                  m.a.createElement(
                    ge.a,
                    {
                      to: D(a.results[n].league_id, o.Standings),
                      key: a.results[n].league_id,
                      className: _a.a.AchievementContainer,
                    },
                    m.a.createElement(
                      "div",
                      { className: _a.a.AchievementImageContainer },
                      m.a.createElement(je, {
                        src:
                          s.a.CDN_URL +
                          "apps/dota2/images/leagues/" +
                          a.results[n].league_id +
                          "/images/image_9.png",
                        fallbackSrc:
                          s.a.IMG_URL + "nav_tournaments_standings.png",
                        className: _a.a.LeagueImage,
                      })
                    ),
                    m.a.createElement(
                      "span",
                      { className: _a.a.AchievementRank },
                      Ne(a.results[n].placement)
                    )
                  )
                );
            var c = [];
            if (a.audit_entries)
              for (n = 0; n < a.audit_entries.length; ++n) {
                var l = a.audit_entries[n];
                if (l.team_id) {
                  var g = new Date(1e3 * l.start_timestamp),
                    _ = null;
                  l.end_timestamp && (_ = new Date(1e3 * l.end_timestamp)),
                    c.unshift(
                      m.a.createElement(
                        "div",
                        { key: l.team_id, className: _a.a.PrevTeamContainer },
                        m.a.createElement(
                          "div",
                          { className: _a.a.PrevTeamLogoContainer },
                          m.a.createElement(je, {
                            src: l.team_url_logo,
                            fallbackSrc: s.a.IMG_URL + "team_unknown.png",
                            className: _a.a.PrevTeamLogo,
                          })
                        ),
                        m.a.createElement(
                          "div",
                          { className: _a.a.TeamName },
                          l.team_name
                        ),
                        m.a.createElement("span", { className: _a.a.Spacer }),
                        m.a.createElement(
                          "span",
                          { className: _a.a.TeamDates },
                          g.toLocaleString([], {
                            month: "numeric",
                            day: "numeric",
                            year: "2-digit",
                          }),
                          " - "
                        ),
                        _ &&
                          m.a.createElement(
                            "span",
                            { className: _a.a.TeamDates },
                            _.toLocaleString([], {
                              month: "numeric",
                              day: "numeric",
                              year: "2-digit",
                            })
                          ),
                        !_ &&
                          m.a.createElement(
                            "span",
                            { className: _a.a.TeamDates },
                            Object(y.b)("#Player_PresentTime")
                          )
                      )
                    );
                }
              }
            return m.a.createElement(
              "div",
              { className: _a.a.PlayerPage },
              m.a.createElement(Ue, {
                favoriteType: i.EFavoriteType.Player,
                favoriteId: e,
                favoriteName: a.name,
              }),
              m.a.createElement(
                "div",
                { className: _a.a.Contents },
                m.a.createElement(
                  "div",
                  { className: _a.a.ImageContainer },
                  m.a.createElement(
                    "div",
                    { className: _a.a.PlayerImageContainer },
                    m.a.createElement(je, {
                      src: i.g_App.getPlayerImageURL(a.account_id),
                      fallbackSrc:
                        s.a.IMG_URL_BASE + "players/portrait_unknown.png",
                      className: _a.a.PlayerImage,
                    })
                  ),
                  t &&
                    m.a.createElement(
                      "div",
                      { className: _a.a.TeamLogoContainer },
                      m.a.createElement(je, {
                        src: t.url_logo,
                        fallbackSrc: s.a.IMG_URL + "team_unknown.png",
                      })
                    )
                ),
                m.a.createElement(
                  "div",
                  { className: _a.a.PlayerName },
                  a.name
                ),
                m.a.createElement(
                  "div",
                  { className: _a.a.SubsectionHeader },
                  Object(y.b)("#Player_PlayerInformation")
                ),
                a.real_name &&
                  m.a.createElement(
                    "div",
                    { className: _a.a.InfoStat },
                    m.a.createElement(
                      "span",
                      null,
                      Object(y.b)("#Player_Name")
                    ),
                    m.a.createElement("span", { className: _a.a.Spacer }),
                    m.a.createElement("span", null, a.real_name)
                  ),
                a.country_code &&
                  m.a.createElement(
                    "div",
                    { className: _a.a.InfoStat },
                    m.a.createElement(
                      "span",
                      null,
                      Object(y.b)("#Player_Location")
                    ),
                    m.a.createElement("span", { className: _a.a.Spacer }),
                    m.a.createElement(
                      "span",
                      null,
                      Object(y.b)(
                        "#Steam_Country_" + a.country_code.toUpperCase()
                      )
                    ),
                    m.a.createElement("img", {
                      src:
                        s.a.IMG_URL_BASE +
                        "country_flags/" +
                        a.country_code +
                        ".png",
                      className: _a.a.CountryFlag,
                    })
                  ),
                0 != a.birthdate &&
                  m.a.createElement(
                    "div",
                    { className: _a.a.InfoStat },
                    m.a.createElement("span", null, Object(y.b)("#Player_Age")),
                    m.a.createElement("span", { className: _a.a.Spacer }),
                    m.a.createElement(
                      "span",
                      null,
                      Math.floor((Date.now() / 1e3 - a.birthdate) / 31536e3)
                    )
                  ),
                m.a.createElement(
                  "div",
                  { className: _a.a.InfoStat },
                  m.a.createElement("span", null, Object(y.b)("#Player_Team")),
                  m.a.createElement("span", { className: _a.a.Spacer }),
                  m.a.createElement(
                    "span",
                    null,
                    a.team_name ? a.team_name : Object(y.b)("#Player_TeamNone")
                  )
                ),
                a.fantasy_role &&
                  m.a.createElement(
                    "div",
                    { className: _a.a.InfoStat },
                    m.a.createElement(
                      "span",
                      null,
                      Object(y.b)("#Player_Role")
                    ),
                    m.a.createElement("span", { className: _a.a.Spacer }),
                    m.a.createElement(
                      "span",
                      { className: _a.a.TeamRole },
                      Se(a.fantasy_role)
                    )
                  ),
                a.total_earnings &&
                  m.a.createElement(
                    "div",
                    { className: _a.a.InfoStat },
                    m.a.createElement(
                      "span",
                      null,
                      Object(y.b)("#Team_Earnings")
                    ),
                    m.a.createElement("span", { className: _a.a.Spacer }),
                    m.a.createElement("span", null, "~$", Be(a.total_earnings))
                  ),
                a.dpc_rank &&
                  m.a.createElement(
                    "div",
                    { className: _a.a.InfoStat },
                    m.a.createElement(
                      "span",
                      null,
                      Object(y.b)("#Player_DPCRank")
                    ),
                    m.a.createElement("span", { className: _a.a.Spacer }),
                    m.a.createElement("span", null, "#", a.dpc_rank)
                  ),
                a.results &&
                  m.a.createElement(
                    "div",
                    { className: _a.a.SubsectionHeader },
                    Object(y.b)("#Player_PlayerAchievements")
                  ),
                m.a.createElement(
                  "div",
                  { className: _a.a.AchievementsList },
                  r
                ),
                m.a.createElement(
                  "div",
                  { className: _a.a.SubsectionHeader },
                  Object(y.b)("#Player_Teams")
                ),
                c
              )
            );
          }),
          (a = Object(n.c)([x.a], a))
        );
      })(m.a.Component),
      pa = t("3EZO"),
      ua = t.n(pa),
      ha = (function (e) {
        function a() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(n.d)(a, e),
          (a.prototype.toggleNotificationDisabled = function (e) {
            var a = i.g_App.getProfileInfo().disabled_notifications.includes(e);
            i.g_App.setNotification(e, !a);
          }),
          (a.prototype.render = function () {
            var e = this,
              a = i.g_App.getSteamPlayerInfo(),
              t = a ? a.response.players[0] : null,
              r = i.g_App.getProfileInfo(),
              o = i.g_App.getFavorites();
            if (!r || !o)
              return m.a.createElement(
                "div",
                { className: A(ua.a.Loading, ne.a.FadeInDelay) },
                m.a.createElement(ue, {
                  size: "medium",
                  string: Object(y.b)("#Loading"),
                  position: "center",
                })
              );
            for (
              var n = t ? t.avatarfull : "",
                c =
                  r.player_info && r.player_info.name.length > 0
                    ? r.player_info.name
                    : t
                    ? t.personaname
                    : "",
                l = r.player_info ? r.player_info.real_name : "",
                g = [],
                _ = function (e) {
                  o.types[e].favorites.forEach(function (a, t) {
                    switch (e) {
                      case 1:
                        g.push(
                          m.a.createElement(
                            ge.a,
                            {
                              key: "fav_player_" + a.id,
                              to: L(a.id),
                              className: ua.a.PlayerFavorite,
                            },
                            m.a.createElement(je, {
                              className: ua.a.PlayerIcon,
                              src: i.g_App.getPlayerImageURL(a.id),
                              fallbackSrc: s.a.IMG_URL + "portrait_unknown.png",
                            }),
                            m.a.createElement(
                              "div",
                              { className: ua.a.Name },
                              a.name
                            )
                          )
                        );
                        break;
                      case 2:
                        g.push(
                          m.a.createElement(
                            ge.a,
                            {
                              key: "fav_player_" + a.id,
                              to: T(a.id),
                              className: ua.a.TeamFavorite,
                            },
                            m.a.createElement(je, {
                              className: ua.a.TeamIcon,
                              src: a.url,
                              fallbackSrc: s.a.IMG_URL + "team_unknown.png",
                            }),
                            m.a.createElement(
                              "div",
                              { className: ua.a.Name },
                              a.name
                            )
                          )
                        );
                    }
                  });
                },
                d = 1;
              d < o.types.length;
              d++
            )
              _(d);
            var p = [];
            r.prediction_info
              ? (p.push(
                  m.a.createElement(
                    "div",
                    { key: "pred_percent", className: ua.a.Entry },
                    m.a.createElement(
                      "div",
                      { className: ua.a.Label },
                      Object(y.b)("#Profile_PredictionPercent")
                    ),
                    m.a.createElement(
                      "div",
                      { className: ua.a.Value },
                      r.prediction_info.percent,
                      " %"
                    )
                  )
                ),
                p.push(
                  m.a.createElement(
                    "div",
                    { key: "pred_shards", className: ua.a.Entry },
                    m.a.createElement(
                      "div",
                      { className: ua.a.Label },
                      Object(y.b)("#Profile_PredictionShards")
                    ),
                    m.a.createElement(
                      "div",
                      { className: ua.a.Value },
                      r.prediction_info.shard_winnings
                    )
                  )
                ))
              : p.push(
                  m.a.createElement(
                    "div",
                    { key: "pred_none", className: ua.a.NoPredictionData },
                    Object(y.b)("#Profile_NoPredictionData")
                  )
                );
            var u = [];
            return (
              [
                { id: 1, locstring: "#Profile_NotificationMatchStart" },
                { id: 10, locstring: "#Profile_NotificationPlayerLeft" },
                { id: 11, locstring: "#Profile_NotificationPlayerJoined" },
                { id: 20, locstring: "#Profile_NotificationLeagueResult" },
                {
                  id: 30,
                  locstring: "#Profile_NotificationPredictionAvailable",
                },
                { id: 31, locstring: "#Profile_NotificationPredictionResult" },
                {
                  id: 40,
                  locstring: "#Profile_NotificationFantasyPlayerCleared",
                },
                {
                  id: 41,
                  locstring: "#Profile_NotificationFantasyDailySummary",
                },
                {
                  id: 42,
                  locstring: "#Profile_NotificationFantasyFinalResults",
                },
              ].forEach(function (a, t) {
                u.push(
                  m.a.createElement(
                    "div",
                    { key: "notification_" + a.id, className: ua.a.Entry },
                    m.a.createElement(
                      "div",
                      { className: ua.a.Label },
                      Object(y.b)(a.locstring)
                    ),
                    m.a.createElement(
                      "div",
                      {
                        className: A(
                          ua.a.Switch,
                          -1 == r.disabled_notifications.indexOf(a.id) &&
                            ua.a.On
                        ),
                        onClick: function () {
                          return e.toggleNotificationDisabled(a.id);
                        },
                      },
                      m.a.createElement("div", { className: ua.a.Background }),
                      m.a.createElement("div", { className: ua.a.Selector })
                    )
                  )
                );
              }),
              m.a.createElement(
                "div",
                { className: ua.a.ProfilePage },
                m.a.createElement(Ue, {
                  text: Object(y.b)("#Header_Profile"),
                  underlineColorStyle: ua.a.backgroundColorGrey,
                  titleButtonText: Object(y.b)("#Logout"),
                  titleButtonTextClass: ua.a.LogoutText,
                  titleButtonDestination:
                    s.a.BASE_URL + "applications/dpc_logout",
                }),
                m.a.createElement(
                  "div",
                  { className: ua.a.Scrollable },
                  m.a.createElement(
                    "div",
                    { className: ua.a.TopSection },
                    m.a.createElement(je, {
                      className: ua.a.Avatar,
                      src: n,
                      fallbackSrc: s.a.IMG_URL + "portrait_unknown.png",
                    }),
                    m.a.createElement(
                      "div",
                      { className: ua.a.NameInfo },
                      m.a.createElement("div", { className: ua.a.Name }, c),
                      m.a.createElement("div", { className: ua.a.RealName }, l)
                    )
                  ),
                  m.a.createElement(
                    "div",
                    { className: ua.a.FavoritesSection },
                    m.a.createElement(
                      "div",
                      { className: ua.a.FavoritesHeader },
                      m.a.createElement(
                        "div",
                        { className: ua.a.LeftLabel },
                        m.a.createElement("img", {
                          className: ua.a.FavoritesHeart,
                          src: s.a.IMG_URL + "favorite_star.png",
                        }),
                        m.a.createElement(
                          "div",
                          { className: ua.a.FavoritesLabel },
                          Object(y.b)("#Profile_YourFavorites")
                        )
                      ),
                      m.a.createElement(
                        ge.a,
                        { to: B(), className: ua.a.ManageFavorites },
                        Object(y.b)("#Profile_ManageFavorites")
                      )
                    ),
                    g
                  ),
                  m.a.createElement(
                    "div",
                    { className: ua.a.NotificationsSection },
                    m.a.createElement(
                      "div",
                      { className: ua.a.NotificationsHeader },
                      m.a.createElement(
                        "div",
                        { className: ua.a.NotificationsLabel },
                        Object(y.b)("#Profile_Notifications")
                      )
                    ),
                    u
                  )
                )
              )
            );
          }),
          (a = Object(n.c)([x.a], a))
        );
      })(m.a.Component),
      ba = t("Zeag"),
      ya = t.n(ba),
      ka = t("4Uh/"),
      va = (function (e) {
        function a(a) {
          var t = e.call(this, a) || this;
          return (t.state = { strTeamColor1: "", strTeamColor2: "" }), t;
        }
        return (
          Object(n.d)(a, e),
          (a.prototype.setTeamColor = function (e, a) {
            switch (e) {
              case 1:
                this.setState({ strTeamColor1: a });
                break;
              case 2:
                this.setState({ strTeamColor2: a });
            }
          }),
          (a.prototype.getContents = function () {
            var e = this,
              a = parseInt(this.props.match.params.leagueID),
              t = parseInt(this.props.match.params.seriesID),
              r = i.g_App.getSeriesData(a, t);
            if (!r)
              return m.a.createElement(
                "div",
                { className: A(ya.a.Loading, ne.a.FadeInDelay) },
                m.a.createElement(ue, {
                  size: "medium",
                  string: Object(y.b)("#Loading"),
                  position: "center",
                })
              );
            var o = m.a.createElement("div", null),
              n = r.team_1.wager_count + r.team_2.wager_count;
            if (n > 0) {
              var c = (100 * r.team_1.wager_count) / n,
                l = (100 * r.team_2.wager_count) / n,
                g = c.toFixed(0) + "%",
                _ = l.toFixed(0) + "%";
              o = m.a.createElement(
                "div",
                { className: ya.a.Predictions },
                m.a.createElement(
                  "div",
                  { className: ya.a.TopRow },
                  m.a.createElement(
                    "div",
                    { className: ya.a.TeamInfo },
                    m.a.createElement("img", {
                      src: r.team_1.team_logo_url,
                      className: ya.a.Logo,
                    }),
                    m.a.createElement(
                      "div",
                      { className: A(ya.a.Name, ya.a.Left) },
                      r.team_1.team_name
                    )
                  ),
                  m.a.createElement(
                    "div",
                    { className: ya.a.TeamInfo },
                    m.a.createElement(
                      "div",
                      { className: A(ya.a.Name, ya.a.Right) },
                      r.team_2.team_name
                    ),
                    m.a.createElement("img", {
                      src: r.team_2.team_logo_url,
                      className: ya.a.Logo,
                    })
                  )
                ),
                m.a.createElement(
                  "div",
                  { className: ya.a.Bars },
                  m.a.createElement("div", {
                    className: ya.a.Bar,
                    style: {
                      flexGrow: c,
                      backgroundColor: this.state.strTeamColor1,
                    },
                  }),
                  m.a.createElement("div", {
                    className: ya.a.Bar,
                    style: {
                      flexGrow: l,
                      backgroundColor: this.state.strTeamColor2,
                    },
                  })
                ),
                m.a.createElement(
                  "div",
                  { className: ya.a.Percentages },
                  m.a.createElement(
                    "div",
                    {
                      className: ya.a.Percentage,
                      style: { color: this.state.strTeamColor1 },
                    },
                    g
                  ),
                  m.a.createElement(
                    "div",
                    {
                      className: ya.a.Percentage,
                      style: { color: this.state.strTeamColor2 },
                    },
                    _
                  )
                )
              );
            }
            var d,
              p,
              u,
              h = [];
            for (var b in r.match_minimal) {
              var k = r.match_minimal[b].tourney.radiant_team_id,
                v = r.match_minimal[b].tourney.dire_team_id;
              switch (r.match_minimal[b].match_outcome) {
                case 2:
                  h[k] = (h[k] || 0) + 1;
                  break;
                case 3:
                  h[v] = (h[v] || 0) + 1;
              }
            }
            switch (r.series_type) {
              case 0:
                1 == h[r.team_1.team_id] && (d = r.team_1),
                  1 == h[r.team_2.team_id] && (d = r.team_2);
                break;
              case 1:
                2 == h[r.team_1.team_id] && (d = r.team_1),
                  2 == h[r.team_2.team_id] && (d = r.team_2);
                break;
              case 2:
                3 == h[r.team_1.team_id] && (d = r.team_1),
                  3 == h[r.team_2.team_id] && (d = r.team_2);
            }
            d &&
              ((p = Object(y.b)("#Series_Winner", d.team_name)),
              (u = Object(y.b)("#Series_Winner_Majority")));
            var f = [];
            for (var b in r.match_minimal) {
              var E = r.match_minimal[b];
              f.push(
                m.a.createElement(
                  Ee,
                  {
                    key: "match_" + E.match_id,
                    leagueID: E.tourney.league_id,
                    matchID: E.match_id,
                  },
                  " "
                )
              );
            }
            var C = String(h[r.team_1.team_id] || 0),
              N = String(h[r.team_2.team_id] || 0),
              B = 0,
              S = 0,
              P = 0,
              R = "",
              I = 0,
              O = 0,
              D = 0,
              G = "",
              w = [];
            for (var b in (w.push([]), w.push([]), r.match_minimal)) {
              E = r.match_minimal[b];
              for (var M in E.players) {
                var F = E.players[M],
                  j =
                    F.player_slot < 128
                      ? E.tourney.radiant_team_id
                      : E.tourney.dire_team_id,
                  H = r.team_1.team_id == j ? 0 : 1;
                -1 == w[H].indexOf(F.account_id) && w[H].push(F.account_id),
                  F.kills > S &&
                    ((S = F.kills),
                    (B = F.account_id),
                    (P = F.hero_id),
                    (R = F.pro_name)),
                  F.assists > O &&
                    ((O = F.assists),
                    (I = F.account_id),
                    (D = F.hero_id),
                    (G = F.pro_name));
              }
            }
            var U = [];
            U.push([]), U.push([]);
            for (var W = 0; W < 2; W++)
              for (var M in w[W]) {
                var x = i.g_App.getPlayerData(w[W][M]);
                x &&
                  U[W].push(
                    m.a.createElement(
                      ge.a,
                      {
                        to: L(x.account_id),
                        key: "player_account_" + x.account_id,
                        className: A(
                          ya.a.Player,
                          0 == W && ya.a.Left,
                          1 == W && ya.a.Right
                        ),
                      },
                      m.a.createElement(je, {
                        className: A(ya.a.Image, 1 == W && ya.a.Hide),
                        src: i.g_App.getPlayerImageURL(x.account_id),
                        fallbackSrc: s.a.IMG_URL + "portrait_unknown.png",
                      }),
                      m.a.createElement(
                        "div",
                        {
                          className: A(
                            ya.a.Name,
                            0 == W && ya.a.Left,
                            1 == W && ya.a.Right
                          ),
                        },
                        m.a.createElement(
                          "div",
                          { className: ya.a.ProName },
                          x.name
                        ),
                        m.a.createElement(
                          "div",
                          { className: ya.a.RealName },
                          x.real_name
                        )
                      ),
                      m.a.createElement(je, {
                        className: A(ya.a.Image, 0 == W && ya.a.Hide),
                        src: i.g_App.getPlayerImageURL(x.account_id),
                        fallbackSrc: s.a.IMG_URL + "portrait_unknown.png",
                      })
                    )
                  );
              }
            return m.a.createElement(
              "div",
              { className: ya.a.Body },
              m.a.createElement(ka.a, {
                src: r.team_1.team_logo_url,
                getColors: function (a) {
                  return e.setTeamColor(1, String(a[0]));
                },
              }),
              m.a.createElement(ka.a, {
                src: r.team_2.team_logo_url,
                getColors: function (a) {
                  return e.setTeamColor(2, String(a[0]));
                },
              }),
              m.a.createElement(
                "div",
                { className: ya.a.Header },
                m.a.createElement(
                  "div",
                  { className: ya.a.TopIcons },
                  m.a.createElement("img", {
                    src: s.a.IMG_URL + "back_arrow.png",
                    className: ya.a.BackArrow,
                    onClick: function () {
                      return window.history.back();
                    },
                  })
                ),
                m.a.createElement(
                  "div",
                  { className: ya.a.SeriesInfo },
                  m.a.createElement(
                    ge.a,
                    { to: T(r.team_1.team_id), className: ya.a.Team },
                    m.a.createElement("img", {
                      src: r.team_1.team_logo_url,
                      className: ya.a.Logo,
                    }),
                    m.a.createElement(
                      "div",
                      { className: ya.a.Name },
                      r.team_1.team_name
                    )
                  ),
                  m.a.createElement(
                    "div",
                    { className: ya.a.Score },
                    C,
                    " : ",
                    N
                  ),
                  m.a.createElement(
                    ge.a,
                    { to: T(r.team_2.team_id), className: ya.a.Team },
                    m.a.createElement("img", {
                      src: r.team_2.team_logo_url,
                      className: ya.a.Logo,
                    }),
                    m.a.createElement(
                      "div",
                      { className: ya.a.Name },
                      r.team_2.team_name
                    )
                  )
                )
              ),
              m.a.createElement(
                "div",
                { className: ya.a.Scrollable },
                o,
                m.a.createElement(
                  "div",
                  { className: ya.a.Winner },
                  m.a.createElement("div", { className: ya.a.WinString }, p),
                  m.a.createElement("div", { className: ya.a.Predict }, u)
                ),
                m.a.createElement(
                  "div",
                  { className: ya.a.TopStats },
                  m.a.createElement(
                    "div",
                    { className: A(ya.a.StatLine, ya.a.Kills) },
                    m.a.createElement(
                      "div",
                      { className: ya.a.Text },
                      Object(y.b)("#Series_MostKills")
                    ),
                    m.a.createElement(
                      ge.a,
                      { to: L(B), className: ya.a.PlayerLink },
                      m.a.createElement(
                        "div",
                        { className: ya.a.PlayerName },
                        R
                      ),
                      m.a.createElement(je, {
                        className: A(ya.a.Icon, ya.a.Player),
                        src: i.g_App.getPlayerImageURL(B),
                        fallbackSrc: s.a.IMG_URL + "portrait_unknown.png",
                      })
                    ),
                    m.a.createElement(je, {
                      className: A(ya.a.Icon, ya.a.Hero),
                      src: s.a.IMG_URL_BASE + "heroes/num_wide/" + P + ".png",
                      fallbackSrc: s.a.IMG_URL + "team_unknown.png",
                    }),
                    m.a.createElement("div", { className: ya.a.Value }, S)
                  ),
                  m.a.createElement(
                    "div",
                    { className: A(ya.a.StatLine, ya.a.Assists) },
                    m.a.createElement(
                      "div",
                      { className: ya.a.Text },
                      Object(y.b)("#Series_MostAssists")
                    ),
                    m.a.createElement(
                      ge.a,
                      { to: L(I), className: ya.a.PlayerLink },
                      m.a.createElement(
                        "div",
                        { className: ya.a.PlayerName },
                        G
                      ),
                      m.a.createElement(je, {
                        className: A(ya.a.Icon, ya.a.Player),
                        src: i.g_App.getPlayerImageURL(I),
                        fallbackSrc: s.a.IMG_URL + "portrait_unknown.png",
                      })
                    ),
                    m.a.createElement(je, {
                      className: A(ya.a.Icon, ya.a.Hero),
                      src: s.a.IMG_URL_BASE + "heroes/num_wide/" + D + ".png",
                      fallbackSrc: s.a.IMG_URL + "team_unknown.png",
                    }),
                    m.a.createElement("div", { className: ya.a.Value }, O)
                  )
                ),
                m.a.createElement(
                  "div",
                  { className: ya.a.MatchList },
                  m.a.createElement(
                    "div",
                    { className: ya.a.Title },
                    Object(y.b)("#Series_Matches")
                  ),
                  f
                ),
                m.a.createElement(
                  "div",
                  { className: ya.a.TeamRosters },
                  m.a.createElement(
                    "div",
                    { className: ya.a.Title },
                    Object(y.b)("#Series_TeamRosters")
                  ),
                  m.a.createElement(
                    "div",
                    { className: ya.a.TeamRosterTeams },
                    m.a.createElement(
                      "div",
                      { className: ya.a.TeamRoster },
                      U[0]
                    ),
                    m.a.createElement(
                      "div",
                      { className: ya.a.TeamRoster },
                      U[1]
                    )
                  )
                )
              )
            );
          }),
          (a.prototype.render = function () {
            var e = this.getContents();
            return m.a.createElement("div", { className: ya.a.SeriesPage }, e);
          }),
          (a = Object(n.c)([x.a], a))
        );
      })(m.a.Component),
      fa = t("AGtM"),
      Ea = t.n(fa),
      Ca = (function (e) {
        function a(a) {
          var t = e.call(this, a) || this;
          return (t.state = { strTeamColor1: "", strTeamColor2: "" }), t;
        }
        return (
          Object(n.d)(a, e),
          (a.prototype.setTeamColor = function (e, a) {
            switch (e) {
              case 1:
                this.setState({ strTeamColor1: a });
                break;
              case 2:
                this.setState({ strTeamColor2: a });
            }
          }),
          (a.prototype.render = function () {
            var e = this,
              a = parseInt(this.props.match.params.leagueID),
              t = parseInt(this.props.match.params.nodeID),
              r = i.g_App.getLeagueNodeData(a, t),
              o = i.g_App.getRecentAndUpcomingMatches(),
              n = r ? i.g_App.getTeamData(r.team_id_1) : void 0,
              c = r ? i.g_App.getTeamData(r.team_id_2) : void 0;
            if (!n || !c)
              return m.a.createElement(
                "div",
                { className: A(Ea.a.Loading, ne.a.FadeInDelay) },
                m.a.createElement(ue, {
                  size: "medium",
                  string: Object(y.b)("#Loading"),
                  position: "center",
                })
              );
            i.g_App.getProPredictionMaxWager();
            if (o)
              for (var l = 0, g = o.tournaments; l < g.length; l++)
                for (var _ = 0, d = g[l].matches; _ < d.length; _++) {
                  if (d[_].nodeId == t) break;
                }
            var p = [];
            if ((p.push([]), p.push([]), n))
              for (
                var u = 0, h = n.registered_member_account_ids;
                u < h.length;
                u++
              ) {
                var b = h[u],
                  k = i.g_App.getPlayerData(b);
                p[0].push(
                  m.a.createElement(
                    ge.a,
                    {
                      to: L(b),
                      key: "player_account_" + b,
                      className: A(Ea.a.Player, Ea.a.Left),
                    },
                    m.a.createElement(je, {
                      className: Ea.a.Image,
                      src: i.g_App.getPlayerImageURL(b),
                      fallbackSrc: s.a.IMG_URL + "portrait_unknown.png",
                    }),
                    m.a.createElement(
                      "div",
                      { className: A(Ea.a.Name, Ea.a.Left) },
                      m.a.createElement(
                        "div",
                        { className: Ea.a.ProName },
                        k ? k.name : ""
                      ),
                      m.a.createElement(
                        "div",
                        { className: Ea.a.RealName },
                        k ? k.real_name : ""
                      )
                    )
                  )
                );
              }
            if (c)
              for (
                var v = 0, f = c.registered_member_account_ids;
                v < f.length;
                v++
              ) {
                (b = f[v]), (k = i.g_App.getPlayerData(b));
                p[1].push(
                  m.a.createElement(
                    ge.a,
                    {
                      to: L(b),
                      key: "player_account_" + b,
                      className: A(Ea.a.Player, Ea.a.Right),
                    },
                    m.a.createElement(
                      "div",
                      { className: A(Ea.a.Name, Ea.a.Right) },
                      m.a.createElement(
                        "div",
                        { className: Ea.a.ProName },
                        k ? k.name : ""
                      ),
                      m.a.createElement(
                        "div",
                        { className: Ea.a.RealName },
                        k ? k.real_name : ""
                      )
                    ),
                    m.a.createElement(je, {
                      className: Ea.a.Image,
                      src: i.g_App.getPlayerImageURL(b),
                      fallbackSrc: s.a.IMG_URL + "portrait_unknown.png",
                    })
                  )
                );
              }
            return m.a.createElement(
              "div",
              { className: Ea.a.UpcomingSeriesPage },
              m.a.createElement(ka.a, {
                src: n.url_logo,
                getColors: function (a) {
                  return e.setTeamColor(1, String(a[0]));
                },
              }),
              m.a.createElement(ka.a, {
                src: c.url_logo,
                getColors: function (a) {
                  return e.setTeamColor(2, String(a[0]));
                },
              }),
              m.a.createElement(
                "div",
                { className: Ea.a.Header },
                m.a.createElement(
                  "div",
                  { className: Ea.a.TopIcons },
                  m.a.createElement("img", {
                    src: s.a.IMG_URL + "back_arrow.png",
                    className: Ea.a.BackArrow,
                    onClick: function () {
                      return window.history.back();
                    },
                  })
                ),
                m.a.createElement(
                  "div",
                  { className: Ea.a.SeriesInfo },
                  m.a.createElement(
                    ge.a,
                    { to: T(n.team_id), className: Ea.a.Team },
                    m.a.createElement(ve, {
                      className: Ea.a.Logo,
                      team_id: n.team_id,
                      size: pe.Medium,
                    }),
                    m.a.createElement("div", { className: Ea.a.Name }, n.name)
                  ),
                  m.a.createElement(
                    "div",
                    { className: Ea.a.Score },
                    Object(y.b)("#VS")
                  ),
                  m.a.createElement(
                    ge.a,
                    { to: T(c.team_id), className: Ea.a.Team },
                    m.a.createElement(ve, {
                      className: Ea.a.Logo,
                      team_id: c.team_id,
                      size: pe.Medium,
                    }),
                    m.a.createElement("div", { className: Ea.a.Name }, c.name)
                  )
                )
              ),
              m.a.createElement(
                "div",
                { className: Ea.a.Scrollable },
                m.a.createElement(
                  "div",
                  { className: Ea.a.TeamRosters },
                  m.a.createElement(
                    "div",
                    { className: Ea.a.Title },
                    Object(y.b)("#Series_TeamRosters")
                  ),
                  m.a.createElement(
                    "div",
                    { className: Ea.a.TeamRosterTeams },
                    m.a.createElement(
                      "div",
                      { className: Ea.a.TeamRoster },
                      p[0]
                    ),
                    m.a.createElement(
                      "div",
                      { className: Ea.a.TeamRoster },
                      p[1]
                    )
                  )
                ),
                undefined
              )
            );
          }),
          (a = Object(n.c)([x.a], a))
        );
      })(m.a.Component),
      Na = t("mg82"),
      Ba = t.n(Na),
      Sa = t("ps87"),
      Ta = t("S6KQ"),
      La = t("b+jq"),
      Pa = t("BChI"),
      Ra = (function (e) {
        function a() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(n.d)(a, e),
          (a.prototype.getContents = function () {
            var e,
              a = parseInt(this.props.match.params.matchID),
              t = i.g_App.getMatch(a);
            if (!t)
              return m.a.createElement(
                "div",
                { className: A(Ba.a.Loading, ne.a.FadeInDelay) },
                m.a.createElement(ue, {
                  size: "medium",
                  string: Object(y.b)("#Loading"),
                  position: "center",
                })
              );
            if (t.metadata) {
              var r = [],
                o = !1,
                n = 0;
              for (var c in t.metadata.teams[0].graph_net_worth) {
                var l = parseInt(t.metadata.teams[0].graph_net_worth[c]),
                  g = parseInt(t.metadata.teams[1].graph_net_worth[c]);
                !o && Math.abs(l - g) > 30 && ((o = !0), (n = parseInt(c))),
                  o && r.push({ value: l - g });
              }
              for (
                var _ = [],
                  d = n / t.metadata.teams[1].graph_net_worth.length,
                  p = 1 - d,
                  u = d * t.match.duration,
                  h = 1;
                h < 10;
                h++
              ) {
                var b = u + ((t.match.duration * p) / 10) * h,
                  k = (b / 60).toFixed(0),
                  v = (b % 60 < 10 ? "0" : "") + (b % 60).toFixed(0);
                _.push(
                  m.a.createElement("div", { key: "timestamp_" + h }, k, ":", v)
                );
              }
              var f = function () {
                  var e = Math.max.apply(
                      Math,
                      r.map(function (e) {
                        return e.value;
                      })
                    ),
                    a = Math.min.apply(
                      Math,
                      r.map(function (e) {
                        return e.value;
                      })
                    );
                  return e <= 0 ? 0 : a >= 0 ? 1 : e / (e - a);
                },
                E = Math.max.apply(
                  Math,
                  r.map(function (e) {
                    return e.value;
                  })
                ),
                C = Math.min.apply(
                  Math,
                  r.map(function (e) {
                    return e.value;
                  })
                ),
                N = Math.abs(E) < Math.abs(C),
                B = Math.max(Math.abs(E), Math.abs(C)),
                S = (
                  Math.max.apply(
                    Math,
                    r.map(function (e) {
                      return Math.abs(e.value);
                    })
                  ) / 100
                ).toFixed(0);
              e = m.a.createElement(
                "div",
                { className: Ba.a.GraphSection },
                m.a.createElement(
                  "div",
                  { className: Ba.a.Title },
                  Object(y.b)("#Match_NetWorth")
                ),
                m.a.createElement(
                  "div",
                  { className: Ba.a.GraphContainer },
                  m.a.createElement("div", { className: Ba.a.EdgeMask }),
                  m.a.createElement(
                    Sa.a,
                    { width: "100%", height: 200 },
                    m.a.createElement(
                      Ta.a,
                      { data: r },
                      m.a.createElement(La.a, {
                        type: "number",
                        domain: [-B, B],
                        hide: !0,
                      }),
                      m.a.createElement(
                        "defs",
                        null,
                        m.a.createElement(
                          "linearGradient",
                          {
                            id: "splitColor",
                            x1: "0",
                            y1: "0",
                            x2: "0",
                            y2: "1",
                          },
                          m.a.createElement("stop", {
                            offset: f(),
                            stopColor: "#14BB58",
                            stopOpacity: 1,
                          }),
                          m.a.createElement("stop", {
                            offset: f(),
                            stopColor: "#DF451A",
                            stopOpacity: 1,
                          })
                        )
                      ),
                      m.a.createElement(Pa.a, {
                        type: "monotone",
                        dataKey: "value",
                        stroke: "url(#splitColor)",
                        fill: "url(#splitColor)",
                      })
                    )
                  ),
                  m.a.createElement(
                    "div",
                    { className: A(Ba.a.Legend, N && Ba.a.DireGreater) },
                    S,
                    "K",
                    m.a.createElement("div", { className: Ba.a.Arrow }, "▶")
                  )
                ),
                m.a.createElement("div", { className: Ba.a.Bottom }, _)
              );
            }
            var P = [];
            P.push([]), P.push([]);
            for (var R = 0; R < 10; R++)
              if (!(R >= t.match.players.length)) {
                var I = t.match.players[R];
                P[(D = R < 5 ? 0 : 1)].push(
                  m.a.createElement(
                    "div",
                    {
                      key: "hero_" + D + "_" + R,
                      className: Ba.a.SingleHeroStats,
                    },
                    m.a.createElement(
                      "div",
                      { className: Ba.a.TopBar },
                      m.a.createElement("img", {
                        src:
                          s.a.IMG_URL_BASE +
                          "heroes/num_wide/" +
                          I.hero_id +
                          ".png",
                        className: Ba.a.HeroImage,
                      }),
                      m.a.createElement(
                        "div",
                        { className: Ba.a.NameAndName },
                        m.a.createElement(
                          "div",
                          { className: Ba.a.HeroName },
                          I.pro_name.length > 0 ? I.pro_name : I.player_name
                        ),
                        m.a.createElement(
                          "div",
                          { className: Ba.a.PlayerName },
                          Object(y.b)("#Hero_" + I.hero_id)
                        )
                      )
                    ),
                    m.a.createElement(
                      "div",
                      { className: Ba.a.Stats },
                      m.a.createElement(
                        "div",
                        { className: Ba.a.KDA },
                        I.kills,
                        " / ",
                        I.deaths,
                        " / ",
                        I.assists
                      ),
                      m.a.createElement(
                        "div",
                        { className: Ba.a.NetWorth },
                        (I.net_worth / 1e3).toFixed(1),
                        "K"
                      )
                    ),
                    m.a.createElement(
                      "div",
                      { className: Ba.a.Items },
                      m.a.createElement("img", {
                        className: Ba.a.Item,
                        src:
                          s.a.IMG_URL_BASE +
                          "items/num_small/" +
                          I.item_0 +
                          ".png",
                      }),
                      m.a.createElement("img", {
                        className: Ba.a.Item,
                        src:
                          s.a.IMG_URL_BASE +
                          "items/num_small/" +
                          I.item_1 +
                          ".png",
                      }),
                      m.a.createElement("img", {
                        className: Ba.a.Item,
                        src:
                          s.a.IMG_URL_BASE +
                          "items/num_small/" +
                          I.item_2 +
                          ".png",
                      }),
                      m.a.createElement("img", {
                        className: Ba.a.Item,
                        src:
                          s.a.IMG_URL_BASE +
                          "items/num_small/" +
                          I.item_3 +
                          ".png",
                      }),
                      m.a.createElement("img", {
                        className: Ba.a.Item,
                        src:
                          s.a.IMG_URL_BASE +
                          "items/num_small/" +
                          I.item_4 +
                          ".png",
                      }),
                      m.a.createElement("img", {
                        className: Ba.a.Item,
                        src:
                          s.a.IMG_URL_BASE +
                          "items/num_small/" +
                          I.item_5 +
                          ".png",
                      })
                    )
                  )
                );
              }
            var O = [];
            O.push([]), O.push([]);
            for (R = 0; R < 10; R++)
              if (!(R >= t.match.players.length)) {
                var D;
                I = t.match.players[R];
                O[(D = R < 5 ? 0 : 1)].push(
                  m.a.createElement(
                    ge.a,
                    {
                      to: L(I.account_id),
                      key: "player_account_" + I.account_id,
                      className: A(
                        Ba.a.Player,
                        0 == D && Ba.a.Left,
                        1 == D && Ba.a.Right
                      ),
                    },
                    m.a.createElement(je, {
                      className: A(Ba.a.Image, 1 == D && Ba.a.Hide),
                      src: i.g_App.getPlayerImageURL(I.account_id),
                      fallbackSrc: s.a.IMG_URL + "portrait_unknown.png",
                    }),
                    m.a.createElement(
                      "div",
                      {
                        className: A(
                          Ba.a.Name,
                          0 == D && Ba.a.Left,
                          1 == D && Ba.a.Right
                        ),
                      },
                      m.a.createElement(
                        "div",
                        { className: Ba.a.ProName },
                        I.pro_name.length > 0 ? I.pro_name : I.player_name
                      ),
                      m.a.createElement(
                        "div",
                        { className: Ba.a.RealName },
                        I.real_name
                      )
                    ),
                    m.a.createElement(je, {
                      className: A(Ba.a.Image, 0 == D && Ba.a.Hide),
                      src: i.g_App.getPlayerImageURL(I.account_id),
                      fallbackSrc: s.a.IMG_URL + "portrait_unknown.png",
                    })
                  )
                );
              }
            var G = [];
            G.push([]), G.push([]);
            for (var w, M = [], F = 0; F < t.match.picks_bans.length; F++) {
              var j = t.match.picks_bans[F];
              F % 2 == 1 &&
                (j.is_pick
                  ? M.push(
                      m.a.createElement(
                        "div",
                        {
                          key: "pickban_label_" + F,
                          className: A(Ba.a.PickOrBanLabel, Ba.a.Pick),
                        },
                        Object(y.b)("#Match_Pick")
                      )
                    )
                  : M.push(
                      m.a.createElement(
                        "div",
                        {
                          key: "pickban_label_" + F,
                          className: A(Ba.a.PickOrBanLabel, Ba.a.Ban),
                        },
                        Object(y.b)("#Match_Ban")
                      )
                    )),
                G[j.team].push(
                  m.a.createElement(
                    "div",
                    {
                      key: "pickban_" + j.team + "_" + F,
                      className: A(
                        Ba.a.PickOrBan,
                        j.is_pick && Ba.a.Pick,
                        !j.is_pick && Ba.a.Ban
                      ),
                    },
                    m.a.createElement("div", { className: Ba.a.Number }, F + 1),
                    m.a.createElement("img", {
                      className: Ba.a.HeroImage,
                      src:
                        s.a.IMG_URL_BASE +
                        "heroes/num_wide/" +
                        j.hero_id +
                        ".png",
                    }),
                    m.a.createElement(
                      "div",
                      { className: Ba.a.HeroName },
                      Object(y.b)("#Hero_" + j.hero_id)
                    )
                  )
                );
            }
            return (
              2 == t.match.match_outcome
                ? (w = Object(y.b)("#Match_Winner", t.match.radiant_team_name))
                : 3 == t.match.match_outcome &&
                  (w = Object(y.b)("#Match_Winner", t.match.dire_team_name)),
              m.a.createElement(
                "div",
                { className: Ba.a.Body },
                m.a.createElement(
                  "div",
                  { className: Ba.a.Header },
                  m.a.createElement("img", {
                    src: s.a.IMG_URL + "back_arrow.png",
                    className: Ba.a.BackArrow,
                    onClick: function () {
                      return window.history.back();
                    },
                  }),
                  m.a.createElement(
                    "div",
                    { className: Ba.a.MatchInfo },
                    m.a.createElement(
                      ge.a,
                      { to: T(t.match.radiant_team_id), className: Ba.a.Team },
                      m.a.createElement(ve, {
                        className: Ba.a.Logo,
                        team_id: t.match.radiant_team_id,
                        size: pe.Medium,
                      }),
                      m.a.createElement(
                        "div",
                        { className: Ba.a.Name },
                        t.match.radiant_team_name
                      )
                    ),
                    m.a.createElement(
                      "div",
                      { className: Ba.a.Score },
                      t.match.radiant_team_score,
                      " - ",
                      t.match.dire_team_score
                    ),
                    m.a.createElement(
                      ge.a,
                      { to: T(t.match.dire_team_id), className: Ba.a.Team },
                      m.a.createElement(ve, {
                        className: Ba.a.Logo,
                        team_id: t.match.dire_team_id,
                        size: pe.Medium,
                      }),
                      m.a.createElement(
                        "div",
                        { className: Ba.a.Name },
                        t.match.dire_team_name
                      )
                    )
                  )
                ),
                m.a.createElement(
                  "div",
                  { className: Ba.a.RadiantDireBar },
                  m.a.createElement("div", { className: Ba.a.Radiant }),
                  m.a.createElement("div", { className: Ba.a.Dire })
                ),
                m.a.createElement(
                  "div",
                  { className: Ba.a.Scrollable },
                  m.a.createElement("div", { className: Ba.a.Winner }, w),
                  e,
                  m.a.createElement(
                    "div",
                    { className: Ba.a.HeroStatsSection },
                    m.a.createElement(
                      "div",
                      { className: Ba.a.Title },
                      Object(y.b)("#Match_HeroStats")
                    ),
                    m.a.createElement(
                      "div",
                      { className: Ba.a.HeroStats },
                      m.a.createElement(
                        "div",
                        { className: A(Ba.a.TeamHeroStats, Ba.a.Radiant) },
                        P[0]
                      ),
                      m.a.createElement(
                        "div",
                        { className: A(Ba.a.TeamHeroStats, Ba.a.Dire) },
                        P[1]
                      )
                    )
                  ),
                  m.a.createElement(
                    "div",
                    { className: Ba.a.TeamRosters },
                    m.a.createElement(
                      "div",
                      { className: Ba.a.Title },
                      Object(y.b)("#Series_TeamRosters")
                    ),
                    m.a.createElement(
                      "div",
                      { className: Ba.a.TeamRosterTeams },
                      m.a.createElement(
                        "div",
                        { className: Ba.a.TeamRoster },
                        O[0]
                      ),
                      m.a.createElement(
                        "div",
                        { className: Ba.a.TeamRoster },
                        O[1]
                      )
                    )
                  ),
                  m.a.createElement(
                    "div",
                    { className: Ba.a.PicksAndBansSection },
                    m.a.createElement(
                      "div",
                      { className: Ba.a.Title },
                      Object(y.b)("#Match_PicksAndBans")
                    ),
                    m.a.createElement(
                      "div",
                      { className: Ba.a.PicksAndBans },
                      m.a.createElement(
                        "div",
                        { className: A(Ba.a.TeamPicksAndBans, Ba.a.Radiant) },
                        G[0]
                      ),
                      m.a.createElement(
                        "div",
                        { className: Ba.a.PickAndBansLabel },
                        M
                      ),
                      m.a.createElement(
                        "div",
                        { className: A(Ba.a.TeamPicksAndBans, Ba.a.Dire) },
                        G[1]
                      )
                    )
                  )
                )
              )
            );
          }),
          (a.prototype.render = function () {
            var e = this.getContents();
            return m.a.createElement("div", { className: Ba.a.MatchPage }, e);
          }),
          (a = Object(n.c)([x.a], a))
        );
      })(m.a.Component),
      Ia = t("6kf4"),
      Oa = t.n(Ia),
      Da = function (e) {
        var a = e.teamID,
          t = (e.teamLogoURL, e.teamName);
        return m.a.createElement(
          ge.a,
          { to: T(a), className: Oa.a.Team },
          m.a.createElement(ve, {
            className: Oa.a.Logo,
            team_id: a,
            size: pe.Medium,
          }),
          m.a.createElement("div", { className: Oa.a.Name }, t)
        );
      },
      Ga = function (e) {
        var a = "";
        switch (e.gameState) {
          case 1:
            a = Object(y.b)("#MatchStatus_WaitForPlayersToLoad");
            break;
          case 2:
            a = Object(y.b)("#MatchStatus_SelectingHeroes");
            break;
          case 3:
            a = Object(y.b)("#MatchStatus_StrategyTime");
        }
        return m.a.createElement("div", { className: Oa.a.GameState }, a);
      },
      Aa = function (e) {
        var a = e.teamRadiant,
          t = e.teamDire,
          r = e.gameState,
          o = e.gameTime,
          n = "";
        if (5 == r || 4 == r) {
          var c = Math.abs(o % 60);
          n = (o / 60).toFixed(0) + ":" + (c < 10 ? "0" : "") + c.toFixed(0);
        }
        return m.a.createElement(
          "div",
          { className: Oa.a.TopBar },
          m.a.createElement("img", {
            src: s.a.IMG_URL + "back_arrow.png",
            className: Oa.a.BackArrow,
            onClick: function () {
              return window.history.back();
            },
          }),
          m.a.createElement(
            "div",
            { className: Oa.a.MatchInfo },
            m.a.createElement(Da, {
              teamID: a.team_id,
              teamLogoURL: a.team_logo_url,
              teamName: a.team_name,
            }),
            m.a.createElement(
              "div",
              { className: Oa.a.Score },
              a.score,
              " - ",
              t.score,
              m.a.createElement("div", { className: Oa.a.GameTime }, n)
            ),
            m.a.createElement(Da, {
              teamID: t.team_id,
              teamLogoURL: t.team_logo_url,
              teamName: t.team_name,
            })
          )
        );
      },
      wa = function (e) {
        var a = e.heroID,
          t = e.isRadiant,
          r = e.positionPercentX + "%",
          o = e.positionPercentY + "%";
        return m.a.createElement(
          "div",
          {
            className: A(Oa.a.Hero, t && Oa.a.Radiant, !t && Oa.a.Dire),
            style: { left: r, bottom: o, zIndex: 1e3 },
          },
          m.a.createElement("img", {
            className: Oa.a.HeroIcon,
            src: s.a.IMG_URL_BASE + "heroes/num_icons/" + a + ".png",
          })
        );
      },
      Ma = function (e) {
        var a = e.gameState,
          t = e.playersRadiant,
          r = e.playersDire,
          o = e.buildings;
        switch (a) {
          case 1:
          case 2:
          case 3:
            return m.a.createElement("div", null);
        }
        for (var n = [], c = 0; c < 2; c++)
          for (var l = 0, i = 0 == c ? t : r; l < i.length; l++) {
            var g = i[l],
              _ = 100 * (g.x + 0.5),
              d = 100 * (g.y + 0.5);
            n.push(
              m.a.createElement(wa, {
                key: "playericon_" + c + "_" + g.heroid,
                heroID: g.heroid,
                isRadiant: 0 == c,
                positionPercentX: _,
                positionPercentY: d,
              })
            );
          }
        for (var p = [], u = 50, h = 0; h < o.length; h++) {
          var b = o[h],
            y = "";
          switch (b.type) {
            case 0:
              y =
                s.a.IMG_URL +
                "minimap_tower" +
                (2 == b.lane ? "45" : "90") +
                ".png";
              break;
            case 1:
              y =
                s.a.IMG_URL +
                "minimap_racks" +
                (2 == b.lane ? "45" : "90") +
                ".png";
              break;
            case 2:
              y = s.a.IMG_URL + "minimap_ancient.png";
          }
          var k = 100 * (1.1 * b.x + 0.5) - 3 + "%",
            v = 100 * (1.1 * b.y + 0.5) - 4 + "%";
          p.push(
            m.a.createElement("img", {
              key: "buildingicon_" + h,
              src: y,
              style: { left: k, bottom: v, zIndex: 100 * b.type + u },
              className: A(
                Oa.a.BuildingIcon,
                2 == b.team && Oa.a.Radiant,
                3 == b.team && Oa.a.Dire,
                b.destroyed && Oa.a.Destroyed
              ),
            })
          ),
            u--;
        }
        return m.a.createElement(
          "div",
          {
            className: Oa.a.Map,
            style: { backgroundImage: "url(" + s.a.IMG_URL + "minimap.png )" },
          },
          n,
          p
        );
      },
      Fa = function (e) {
        var a = e.gameState,
          t = e.gameTime,
          r = e.netWorthValues;
        switch (a) {
          case 1:
          case 2:
          case 3:
            return m.a.createElement("div", null);
        }
        var o = [],
          n = !1,
          c = 0;
        for (var l in r) {
          var i = parseInt(r[l]);
          !n && Math.abs(i) > 30 && ((n = !0), (c = parseInt(l))),
            n && o.push({ value: i });
        }
        for (
          var s = [], g = c / r.length, _ = 1 - g, d = g * t, p = 1;
          p < 10;
          p++
        ) {
          var u = d + ((t * _) / 10) * p,
            h = (u / 60).toFixed(0),
            b = (u % 60 < 10 ? "0" : "") + (u % 60).toFixed(0);
          s.push(
            m.a.createElement("div", { key: "timestamp_" + p }, h, ":", b)
          );
        }
        var k = function () {
            var e = Math.max.apply(
                Math,
                o.map(function (e) {
                  return e.value;
                })
              ),
              a = Math.min.apply(
                Math,
                o.map(function (e) {
                  return e.value;
                })
              );
            return e <= 0 ? 0 : a >= 0 ? 1 : e / (e - a);
          },
          v = Math.max.apply(
            Math,
            o.map(function (e) {
              return e.value;
            })
          ),
          f = Math.min.apply(
            Math,
            o.map(function (e) {
              return e.value;
            })
          ),
          E = Math.abs(v) < Math.abs(f),
          C = Math.max(Math.abs(v), Math.abs(f)),
          N = (
            Math.max.apply(
              Math,
              o.map(function (e) {
                return Math.abs(e.value);
              })
            ) / 1e3
          ).toFixed(0);
        return m.a.createElement(
          "div",
          { className: Oa.a.GraphSection },
          m.a.createElement(
            "div",
            { className: Oa.a.Title },
            Object(y.b)("#Match_NetWorth")
          ),
          m.a.createElement(
            "div",
            { className: Oa.a.GraphContainer },
            m.a.createElement("div", { className: Oa.a.EdgeMask }),
            m.a.createElement(
              Sa.a,
              { width: "100%", height: 200 },
              m.a.createElement(
                Ta.a,
                { data: o },
                m.a.createElement(La.a, {
                  type: "number",
                  domain: [-C, C],
                  hide: !0,
                }),
                m.a.createElement(
                  "defs",
                  null,
                  m.a.createElement(
                    "linearGradient",
                    { id: "splitColor", x1: "0", y1: "0", x2: "0", y2: "1" },
                    m.a.createElement("stop", {
                      offset: k(),
                      stopColor: "#14BB58",
                      stopOpacity: 1,
                    }),
                    m.a.createElement("stop", {
                      offset: k(),
                      stopColor: "#DF451A",
                      stopOpacity: 1,
                    })
                  )
                ),
                m.a.createElement(Pa.a, {
                  type: "monotone",
                  dataKey: "value",
                  stroke: "url(#splitColor)",
                  fill: "url(#splitColor)",
                })
              )
            ),
            m.a.createElement(
              "div",
              { className: A(Oa.a.Legend, E && Oa.a.DireGreater) },
              N,
              "K",
              m.a.createElement("div", { className: Oa.a.Arrow }, "▶")
            )
          ),
          m.a.createElement("div", { className: Oa.a.Bottom }, s)
        );
      },
      ja = function (e) {
        var a = e.playerName,
          t = e.heroID,
          r = e.kills,
          o = e.deaths,
          n = e.assists,
          c = e.netWorth,
          l = e.isLeft,
          i = e.isRecessed;
        return m.a.createElement(
          "div",
          {
            className: A(
              Oa.a.SingleHeroStats,
              !l && Oa.a.Right,
              i && Oa.a.Recessed
            ),
          },
          m.a.createElement(
            "div",
            { className: Oa.a.TopBar },
            m.a.createElement("img", {
              src: s.a.IMG_URL_BASE + "heroes/num_wide/" + t + ".png",
              className: Oa.a.HeroImage,
            }),
            m.a.createElement(
              "div",
              { className: Oa.a.NameAndName },
              m.a.createElement("div", { className: Oa.a.PlayerName }, a),
              m.a.createElement(
                "div",
                { className: Oa.a.HeroName },
                Object(y.b)("#Hero_" + t)
              )
            )
          ),
          m.a.createElement(
            "div",
            { className: Oa.a.Stats },
            m.a.createElement(
              "div",
              { className: Oa.a.KDA },
              r,
              " / ",
              o,
              " / ",
              n
            ),
            m.a.createElement(
              "div",
              { className: Oa.a.NetWorth },
              (c / 1e3).toFixed(1),
              "K"
            )
          )
        );
      },
      Ha = function (e) {
        var a = e.gameState,
          t = e.playersRadiant,
          r = e.playersDire;
        switch (a) {
          case 1:
          case 2:
          case 3:
            return m.a.createElement("div", null);
        }
        var o = [];
        o.push([]), o.push([]);
        for (var n = 0; n < 2; n++)
          for (var c = 0 == n ? t.players : r.players, l = 0; l < 5; l++)
            if (!(l >= c.length)) {
              var s = c[l],
                g = i.g_App.getPlayerData(s.accountid);
              o[n].push(
                m.a.createElement(ja, {
                  key: "heroblock_" + n + "_" + l,
                  playerName: g && g.name.length > 0 ? g.name : s.name,
                  heroID: s.heroid,
                  kills: s.kill_count,
                  deaths: s.death_count,
                  assists: s.assists_count,
                  netWorth: s.net_worth,
                  isLeft: 0 == n,
                  isRecessed: (n + l) % 2 == 0,
                })
              );
            }
        return m.a.createElement(
          "div",
          { className: Oa.a.HeroStatsSection },
          m.a.createElement("div", { className: Oa.a.TeamHeroStats }, o[0]),
          m.a.createElement("div", { className: Oa.a.TeamHeroStats }, o[1])
        );
      },
      Ua = function (e) {
        var a = e.playerName,
          t = e.realName,
          r = e.accountID,
          o = e.isLeft;
        return m.a.createElement(
          ge.a,
          { to: L(r), className: A(Oa.a.Player, !o && Oa.a.Right) },
          m.a.createElement(je, {
            className: Oa.a.Image,
            src: i.g_App.getPlayerImageURL(r),
            fallbackSrc: s.a.IMG_URL + "portrait_unknown.png",
          }),
          m.a.createElement(
            "div",
            { className: Oa.a.Names },
            m.a.createElement("div", { className: Oa.a.ProName }, a),
            m.a.createElement("div", { className: Oa.a.RealName }, t)
          )
        );
      },
      Wa = function (e) {
        var a = e.gameState,
          t = e.playersRadiant,
          r = e.playersDire;
        switch (a) {
          case 1:
          case 2:
          case 3:
            return m.a.createElement("div", null);
        }
        var o = [];
        o.push([]), o.push([]);
        for (var n = 0; n < 2; n++)
          for (var c = 0 == n ? t.players : r.players, l = 0; l < 5; l++)
            if (!(l >= c.length)) {
              var s = c[l],
                g = i.g_App.getPlayerData(s.accountid);
              o[n].push(
                m.a.createElement(Ua, {
                  key: "rosterplayer_" + s.accountid,
                  playerName: g && g.name.length > 0 ? g.name : s.name,
                  realName: g ? g.real_name : "",
                  accountID: s.accountid,
                  isLeft: 0 == n,
                })
              );
            }
        return m.a.createElement(
          "div",
          { className: Oa.a.TeamRosters },
          m.a.createElement(
            "div",
            { className: Oa.a.Title },
            Object(y.b)("#Series_TeamRosters")
          ),
          m.a.createElement(
            "div",
            { className: Oa.a.TeamRosterTeams },
            m.a.createElement("div", { className: Oa.a.TeamRoster }, o[0]),
            m.a.createElement("div", { className: Oa.a.TeamRoster }, o[1])
          )
        );
      },
      xa = function (e) {
        var a = e.gameState,
          t = e.picks,
          r = e.bans;
        if (1 == a) return m.a.createElement("div", null);
        if (!t || !r) return m.a.createElement("div", null);
        var o = [];
        o.push([]), o.push([]);
        for (
          var n = [],
            c = 1,
            l = 0,
            i = 0,
            g = 0,
            _ = 0,
            d = [!0, !0, !0, !1, !1, !0, !0, !1, !1, !0, !1];
          _ < d.length;
          _++
        ) {
          if (d[_]) {
            n.push(
              m.a.createElement(
                "div",
                {
                  key: "pickban_label_ban_" + g,
                  className: A(Oa.a.PickOrBanLabel, Oa.a.Ban),
                },
                Object(y.b)("#Match_Ban")
              )
            ),
              (g += 1);
            for (var p = 0; p < 2; p += 1) {
              if (l < r.length) {
                var u = r[l];
                o[2 == u.team ? 0 : 1].push(
                  m.a.createElement(
                    "div",
                    {
                      key: "pickban_" + u.team + "_" + c,
                      className: A(Oa.a.PickOrBan, Oa.a.Ban),
                    },
                    m.a.createElement("div", { className: Oa.a.Number }, c),
                    m.a.createElement("img", {
                      className: Oa.a.HeroImage,
                      src:
                        s.a.IMG_URL_BASE + "heroes/num_wide/" + u.hero + ".png",
                    }),
                    m.a.createElement(
                      "div",
                      { className: Oa.a.HeroName },
                      Object(y.b)("#Hero_" + u.hero)
                    )
                  )
                );
              }
              (l += 1), (c += 1);
            }
          } else {
            n.push(
              m.a.createElement(
                "div",
                {
                  key: "pickban_label_pick_" + g,
                  className: A(Oa.a.PickOrBanLabel, Oa.a.Pick),
                },
                Object(y.b)("#Match_Pick")
              )
            ),
              (g += 1);
            for (p = 0; p < 2; p += 1)
              if (i < t.length) {
                var h = t[i];
                o[2 == h.team ? 0 : 1].push(
                  m.a.createElement(
                    "div",
                    {
                      key: "pickban_" + h.team + "_" + c,
                      className: A(Oa.a.PickOrBan, Oa.a.Pick),
                    },
                    m.a.createElement("div", { className: Oa.a.Number }, c),
                    m.a.createElement("img", {
                      className: Oa.a.HeroImage,
                      src:
                        s.a.IMG_URL_BASE + "heroes/num_wide/" + h.hero + ".png",
                    }),
                    m.a.createElement(
                      "div",
                      { className: Oa.a.HeroName },
                      Object(y.b)("#Hero_" + h.hero)
                    )
                  )
                ),
                  (i += 1),
                  (c += 1);
              }
          }
        }
        return m.a.createElement(
          "div",
          { className: Oa.a.PicksAndBansSection },
          m.a.createElement(
            "div",
            { className: Oa.a.Title },
            Object(y.b)("#Match_PicksAndBans")
          ),
          m.a.createElement(
            "div",
            { className: Oa.a.PicksAndBans },
            m.a.createElement(
              "div",
              { className: A(Oa.a.TeamPicksAndBans, Oa.a.Radiant) },
              o[0]
            ),
            m.a.createElement("div", { className: Oa.a.PickAndBansLabel }, n),
            m.a.createElement(
              "div",
              { className: A(Oa.a.TeamPicksAndBans, Oa.a.Dire) },
              o[1]
            )
          )
        );
      },
      qa = (function (e) {
        function a() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(n.d)(a, e),
          (a.prototype.componentDidMount = function () {
            var e = this;
            i.g_App.getRealtimeMatchStats(
              this.props.match.params.serverSteamID
            ),
              (this.intervalHandle = setInterval(function () {
                i.g_App.getRealtimeMatchStats(
                  e.props.match.params.serverSteamID
                );
              }, 2e3));
          }),
          (a.prototype.componentWillUnmount = function () {
            clearInterval(this.intervalHandle);
          }),
          (a.prototype.render = function () {
            var e = i.g_App.getRealtimeMatchStats(
              this.props.match.params.serverSteamID
            );
            return e && 0 != e.match.game_state
              ? 6 == e.match.game_state
                ? m.a.createElement(u.a, { to: I(e.match.matchid) })
                : m.a.createElement(
                    "div",
                    { className: Oa.a.LiveMatchPage },
                    m.a.createElement(
                      "div",
                      { className: Oa.a.Header },
                      m.a.createElement(Aa, {
                        teamRadiant: e.teams[0],
                        teamDire: e.teams[1],
                        gameState: e.match.game_state,
                        gameTime: e.match.game_time,
                      })
                    ),
                    m.a.createElement(
                      "div",
                      { className: Oa.a.RadiantDireBar },
                      m.a.createElement("div", { className: Oa.a.Radiant }),
                      m.a.createElement("div", { className: Oa.a.Dire })
                    ),
                    m.a.createElement(
                      "div",
                      { className: Oa.a.Scrollable },
                      m.a.createElement(Ga, { gameState: e.match.game_state }),
                      m.a.createElement(Ma, {
                        gameState: e.match.game_state,
                        playersRadiant: e.teams[0].players,
                        playersDire: e.teams[1].players,
                        buildings: e.buildings,
                      }),
                      m.a.createElement(Fa, {
                        gameState: e.match.game_state,
                        gameTime: e.match.game_time,
                        netWorthValues: e.graph_data.graph_gold,
                      }),
                      m.a.createElement(Ha, {
                        gameState: e.match.game_state,
                        playersRadiant: e.teams[0],
                        playersDire: e.teams[1],
                      }),
                      m.a.createElement(Wa, {
                        gameState: e.match.game_state,
                        playersRadiant: e.teams[0],
                        playersDire: e.teams[1],
                      }),
                      m.a.createElement(xa, {
                        gameState: e.match.game_state,
                        picks: e.match.picks,
                        bans: e.match.bans,
                      })
                    )
                  )
              : m.a.createElement(
                  "div",
                  { className: Oa.a.Loading, key: "loading_throbber" },
                  m.a.createElement(
                    "div",
                    { className: ne.a.FadeInDelay },
                    m.a.createElement(ue, {
                      size: "medium",
                      string: Object(y.b)("#MatchStatus_NoData"),
                      position: "center",
                    })
                  )
                );
          }),
          (a = Object(n.c)([x.a], a))
        );
      })(m.a.Component),
      Ya = t("sIvF"),
      Va = t.n(Ya),
      za = (function (e) {
        function a(a) {
          var t = e.call(this, a) || this;
          (t.activeTouches = []),
            (t.refPanPinchZoom = m.a.createRef()),
            (t.onTouchStart = function (e) {
              for (var a = 0; a < e.changedTouches.length; a++) {
                var r = e.changedTouches[a],
                  o = t.convertTouchToRelative(r.clientX, r.clientY),
                  n = o.relativeX,
                  c = o.relativeY;
                t.activeTouches.push({
                  id: r.identifier,
                  x: r.clientX,
                  y: r.clientY,
                  relativeX: n,
                  relativeY: c,
                });
              }
            }),
            (t.onTouchEnd = function (e) {
              for (var a = 0; a < e.changedTouches.length; a++)
                for (
                  var r = e.changedTouches[a], o = 0;
                  o < t.activeTouches.length;
                  o++
                ) {
                  var n = t.activeTouches[o];
                  if (r.identifier == n.id) {
                    t.activeTouches.splice(o, 1);
                    break;
                  }
                }
            }),
            (t.onTouchMove = function (e) {
              for (var a = 0; a < e.changedTouches.length; a++)
                for (
                  var r = e.changedTouches[a], o = 0;
                  o < t.activeTouches.length;
                  o++
                ) {
                  var n = t.activeTouches[o];
                  if (r.identifier == n.id) {
                    var c = r.clientX - n.x,
                      l = r.clientY - n.y;
                    if (1 == t.activeTouches.length)
                      t.setState({
                        offsetX: t.state.offsetX + c,
                        offsetY: t.state.offsetY + l,
                      });
                    else if (2 == t.activeTouches.length)
                      for (var i = 0; i < t.activeTouches.length; i++) {
                        var s = t.activeTouches[i];
                        if (r.identifier != s.id) {
                          var g = Math.hypot(n.x - s.x, n.y - s.y),
                            m =
                              Math.hypot(r.clientX - s.x, r.clientY - s.y) / g,
                            _ = t.state.scale * m;
                          ((t.props.minScale && _ < t.props.minScale) ||
                            (t.props.maxScale && _ > t.props.maxScale)) &&
                            ((m = 1), (_ = t.state.scale));
                          var d = m - 1,
                            p = (t.state.offsetX - s.relativeX) * d,
                            u = (t.state.offsetY - s.relativeY) * d;
                          t.setState({
                            scale: t.state.scale * m,
                            offsetX: t.state.offsetX + p,
                            offsetY: t.state.offsetY + u,
                          });
                        }
                      }
                    (n.x = r.clientX), (n.y = r.clientY);
                  }
                }
            });
          var r = t.props.initialScale ? t.props.initialScale : 1,
            o = t.props.initialOffsetX ? t.props.initialOffsetX : 0,
            n = t.props.initialOffsetY ? t.props.initialOffsetY : 0;
          return (t.state = { scale: r, offsetX: o, offsetY: n }), t;
        }
        return (
          Object(n.d)(a, e),
          (a.prototype.convertTouchToRelative = function (e, a) {
            return {
              relativeX:
                e - this.refPanPinchZoom.current.getBoundingClientRect().left,
              relativeY:
                a - this.refPanPinchZoom.current.getBoundingClientRect().top,
            };
          }),
          (a.prototype.componentDidUpdate = function (e) {
            if (this.props.resetOnChanges) {
              var a = this.props;
              if (e.children !== a.children) {
                var t = this.props.initialScale ? this.props.initialScale : 1,
                  r = this.props.initialOffsetX ? this.props.initialOffsetX : 0,
                  o = this.props.initialOffsetY ? this.props.initialOffsetY : 0;
                this.setState({ scale: t, offsetX: r, offsetY: o });
              }
            }
          }),
          (a.prototype.render = function () {
            return m.a.createElement(
              "div",
              {
                style: { width: "100%", height: "100%", overflow: "hidden" },
                onTouchStart: this.onTouchStart,
                onTouchMove: this.onTouchMove,
                onTouchEnd: this.onTouchEnd,
                ref: this.refPanPinchZoom,
              },
              m.a.createElement(
                "div",
                {
                  style: {
                    transform:
                      "translate( " +
                      this.state.offsetX +
                      "px, " +
                      this.state.offsetY +
                      "px ) scale( " +
                      this.state.scale +
                      " )",
                    transformOrigin: "top left",
                  },
                },
                this.props.children
              )
            );
          }),
          a
        );
      })(m.a.Component),
      Ka = function (e) {
        var a = e.children,
          t = e.className,
          r = e.to;
        return e.condition
          ? m.a.createElement(ge.a, { to: r, className: t }, a)
          : m.a.createElement("div", { className: t }, a);
      },
      Xa = (function (e) {
        function a() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(n.d)(a, e),
          (a.prototype.render = function () {
            var e = parseInt(this.props.match.params.leagueID),
              a = i.g_App.getLeagueData(e);
            if (!a)
              return m.a.createElement(
                "div",
                { className: Va.a.Loading },
                m.a.createElement(ue, {
                  size: "medium",
                  string: Object(y.b)("#Loading"),
                  position: "center",
                })
              );
            var t = [];
            for (var r in a.node_groups) {
              var o = a.node_groups[r];
              if (0 != o.phase && 0 != o.team_standings.length) {
                for (
                  var n = [], c = [], l = 0, g = o.team_standings;
                  l < g.length;
                  l++
                ) {
                  var _ = g[l];
                  -1 == n.indexOf(_.team_id) && (c.push(_), n.push(_.team_id));
                }
                for (var d = 0, p = o.node_groups; d < p.length; d++)
                  for (var u = 0, h = p[d].team_standings; u < h.length; u++) {
                    _ = h[u];
                    -1 == n.indexOf(_.team_id) &&
                      (c.push(_), n.push(_.team_id));
                  }
                var b = "";
                switch (o.phase) {
                  case 1:
                    b = "Regional_";
                    break;
                  case 2:
                    b = "Group_";
                    break;
                  case 3:
                    b = "MainEvent_";
                }
                var k = "";
                if (1 == o.phase)
                  switch (o.region) {
                    case 1:
                      k = "NA_";
                      break;
                    case 2:
                      k = "SA_";
                      break;
                    case 3:
                      k = "WEU_";
                      break;
                    case 4:
                      k = "EEU_";
                      break;
                    case 5:
                      k = "CN_";
                      break;
                    case 6:
                      k = "SEA_";
                  }
                for (var v = [], f = 0, E = c; f < E.length; f++) {
                  _ = E[f];
                  v.push(
                    m.a.createElement(
                      ge.a,
                      {
                        to: T(_.team_id),
                        key:
                          "nodegroup_" + o.node_group_id + "_team_" + _.team_id,
                        className: Va.a.Team,
                      },
                      m.a.createElement(je, {
                        src: _.team_logo_url,
                        fallbackSrc: s.a.IMG_URL + "team_unknown.png",
                      }),
                      m.a.createElement(
                        "div",
                        { className: Va.a.TeamName },
                        _.team_name
                      )
                    )
                  );
                }
                c.length > 0 &&
                  (1 == o.phase
                    ? (t.push(
                        m.a.createElement(
                          "div",
                          {
                            key: "phase_header_" + o.node_group_id,
                            className: Va.a.PhaseHeader,
                          },
                          Object(y.b)("#LeaguePhase_" + b + k + "Teams")
                        )
                      ),
                      t.push(
                        m.a.createElement(
                          "ul",
                          {
                            key: "phase_list_" + o.node_group_id,
                            className: Va.a.PhaseBlock,
                          },
                          v
                        )
                      ))
                    : (t.unshift(
                        m.a.createElement(
                          "ul",
                          {
                            key: "phase_list_" + o.node_group_id,
                            className: Va.a.PhaseBlock,
                          },
                          v
                        )
                      ),
                      t.unshift(
                        m.a.createElement(
                          "div",
                          {
                            key: "phase_header_" + o.node_group_id,
                            className: Va.a.PhaseHeader,
                          },
                          Object(y.b)("#LeaguePhase_" + b + k + "Teams")
                        )
                      )));
              }
            }
            return m.a.createElement("div", { className: Va.a.Body }, t);
          }),
          (a = Object(n.c)([x.a], a))
        );
      })(m.a.Component),
      Ja = function (e) {
        var a = e.teamName1,
          t = e.teamLogo1,
          r = e.teamWins1,
          o = e.teamName2,
          n = e.teamLogo2,
          c = e.teamWins2,
          l = e.type,
          i = e.isInProgress,
          g = e.isCompleted,
          _ = e.positionX,
          d = e.positionY,
          p = e.leagueID,
          u = e.seriesID,
          h = !1;
        switch (l) {
          case 1:
            h = 1 == r;
            break;
          case 4:
          case 2:
            h = 2 == r;
            break;
          case 3:
            h = 3 == r;
        }
        return m.a.createElement(
          ge.a,
          {
            to: P(p, u),
            className: A(
              Va.a.BracketNode,
              i && Va.a.InProgress,
              g && Va.a.IsCompleted
            ),
            style: { left: _, top: d },
          },
          m.a.createElement(
            "div",
            { className: A(Va.a.TeamRow, g && h && Va.a.Winner) },
            m.a.createElement(je, {
              className: Va.a.TeamLogo,
              src: t,
              fallbackSrc: s.a.IMG_URL + "team_unknown.png",
            }),
            m.a.createElement("div", { className: Va.a.TeamName }, a),
            m.a.createElement("div", { className: Va.a.TeamWins }, r)
          ),
          m.a.createElement(
            "div",
            { className: A(Va.a.TeamRow, g && !h && Va.a.Winner) },
            m.a.createElement(je, {
              className: Va.a.TeamLogo,
              src: n,
              fallbackSrc: s.a.IMG_URL + "team_unknown.png",
            }),
            m.a.createElement("div", { className: Va.a.TeamName }, o),
            m.a.createElement("div", { className: Va.a.TeamWins }, c)
          )
        );
      },
      Za = (function (e) {
        function a() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(n.d)(a, e),
          (a.prototype.render = function () {
            for (
              var e = [], a = 0, t = this.props.nodeGroup.team_standings;
              a < t.length;
              a++
            ) {
              var r = t[a],
                o = r.wins + " - " + r.losses,
                n =
                  this.props.nodeGroup.is_completed &&
                  r.standing > this.props.nodeGroup.advancing_team_count,
                c =
                  this.props.nodeGroup.is_completed &&
                  r.standing <= this.props.nodeGroup.advancing_team_count;
              e.push(
                m.a.createElement(
                  "div",
                  {
                    key:
                      "group_" +
                      this.props.nodeGroup.node_group_id +
                      "_" +
                      r.team_id,
                    className: A(
                      Va.a.Team,
                      n && Va.a.Eliminated,
                      c && Va.a.Advancing
                    ),
                  },
                  m.a.createElement(
                    "div",
                    { className: Va.a.Standing },
                    r.standing
                  ),
                  m.a.createElement(je, {
                    src: r.team_logo_url,
                    fallbackSrc: s.a.IMG_URL + "team_unknown.png",
                  }),
                  m.a.createElement(
                    "div",
                    { className: Va.a.TeamName },
                    r.team_name
                  ),
                  m.a.createElement("div", { className: Va.a.Score }, o)
                )
              );
            }
            return m.a.createElement(
              "div",
              {
                className: A(
                  Va.a.TournamentRoundRobin,
                  this.props.nodeGroup.is_tiebreaker && Va.a.Tiebreak
                ),
              },
              m.a.createElement(
                "div",
                { className: Va.a.Title },
                this.props.nodeGroup.is_tiebreaker
                  ? Object(y.b)("#Tiebreak")
                  : this.props.nodeGroup.name
              ),
              m.a.createElement("div", { className: Va.a.TitleUnderline }),
              m.a.createElement("div", { className: Va.a.PhaseBlock }, e)
            );
          }),
          (a = Object(n.c)([x.a], a))
        );
      })(m.a.Component),
      Qa = (function (e) {
        function a() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(n.d)(a, e),
          (a.prototype.render = function () {
            for (var e = 1; e < this.props.nodeGroup.team_count; ) e *= 2;
            var a = "",
              t = 0,
              r = 0,
              o = [];
            switch (e) {
              case 4:
                for (var n in ((a =
                  "url( " + s.a.IMG_URL + "bracket_double_4.png"),
                (t = 916),
                (r = 472),
                this.props.nodeGroup.nodes)) {
                  var c = parseInt(n),
                    l = this.props.nodeGroup.nodes[n],
                    g = 0,
                    _ = 0;
                  switch (c) {
                    case 0:
                      (g = 0), (_ = 0);
                      break;
                    case 1:
                      (g = 0), (_ = 146);
                      break;
                    case 2:
                      (g = 316), (_ = 74);
                      break;
                    case 3:
                      (g = 632), (_ = 212);
                      break;
                    case 4:
                      (g = 0), (_ = 352);
                      break;
                    case 5:
                      (g = 316), (_ = 352);
                  }
                  var d = i.g_App.getTeamData(l.team_id_1),
                    p = i.g_App.getTeamData(l.team_id_2);
                  d &&
                    p &&
                    o.push(
                      m.a.createElement(Ja, {
                        key: "node_" + n,
                        teamName1: d.name,
                        teamLogo1: d.url_logo,
                        teamWins1: l.team_1_wins,
                        teamName2: p.name,
                        teamLogo2: p.url_logo,
                        teamWins2: l.team_2_wins,
                        isCompleted: l.is_completed,
                        isInProgress: l.has_started,
                        type: l.node_type,
                        positionX: g,
                        positionY: _,
                        leagueID: this.props.leagueID,
                        seriesID: l.series_id,
                      })
                    );
                }
            }
            return m.a.createElement(
              "div",
              { className: Va.a.TournamentBracketDouble },
              m.a.createElement(
                "div",
                { className: Va.a.Title, style: { width: t } },
                this.props.nodeGroup.name
              ),
              m.a.createElement("div", {
                className: Va.a.TitleUnderline,
                style: { width: t },
              }),
              m.a.createElement(
                "div",
                {
                  className: Va.a.Background,
                  style: { backgroundImage: a, minWidth: t, minHeight: r },
                },
                o
              )
            );
          }),
          (a = Object(n.c)([x.a], a))
        );
      })(m.a.Component),
      $a = (function (e) {
        function a() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(n.d)(a, e),
          (a.prototype.render = function () {
            for (var e = 1; e < this.props.nodeGroup.team_count; ) e *= 2;
            var a = "",
              t = 0,
              r = 0,
              o = [];
            switch (e) {
              case 8:
                for (var n in ((a =
                  "url( " + s.a.IMG_URL + "bracket_double_seeded_8.png"),
                (t = 1548),
                (r = 582),
                this.props.nodeGroup.nodes)) {
                  var c = parseInt(n),
                    l = this.props.nodeGroup.nodes[n],
                    g = 0,
                    _ = 0;
                  switch (c) {
                    case 0:
                      (g = 315), (_ = 0);
                      break;
                    case 1:
                      (g = 315), (_ = 146);
                      break;
                    case 2:
                      (g = 948), (_ = 74);
                      break;
                    case 3:
                      (g = 1263), (_ = 231);
                      break;
                    case 4:
                      (g = 0), (_ = 314);
                      break;
                    case 5:
                      (g = 0), (_ = 462);
                      break;
                    case 6:
                      (g = 315), (_ = 315);
                      break;
                    case 7:
                      (g = 315), (_ = 462);
                      break;
                    case 8:
                      (g = 632), (_ = 389);
                      break;
                    case 9:
                      (g = 948), (_ = 389);
                  }
                  var d = i.g_App.getTeamData(l.team_id_1),
                    p = i.g_App.getTeamData(l.team_id_2),
                    u =
                      0 == l.team_id_1
                        ? Object(y.b)("#Feed_TBD")
                        : d
                        ? d.name
                        : "",
                    h =
                      0 == l.team_id_2
                        ? Object(y.b)("#Feed_TBD")
                        : p
                        ? p.name
                        : "",
                    b = d ? d.url_logo : s.a.IMG_URL + "team_unkown.png",
                    k = p ? p.url_logo : s.a.IMG_URL + "team_unkown.png";
                  o.push(
                    m.a.createElement(Ja, {
                      key: "node_" + n,
                      teamName1: u,
                      teamLogo1: b,
                      teamWins1: l.team_1_wins,
                      teamName2: h,
                      teamLogo2: k,
                      teamWins2: l.team_2_wins,
                      isCompleted: l.is_completed,
                      isInProgress: l.has_started,
                      type: l.node_type,
                      positionX: g,
                      positionY: _,
                      leagueID: this.props.leagueID,
                      seriesID: l.series_id,
                    })
                  );
                }
                break;
              case 16:
                for (var n in ((a =
                  "url( " + s.a.IMG_URL + "bracket_double_seeded_16.png"),
                (t = 2180),
                (r = 1198),
                this.props.nodeGroup.nodes)) {
                  (c = parseInt(n)),
                    (l = this.props.nodeGroup.nodes[n]),
                    (g = 0),
                    (_ = 0);
                  switch (c) {
                    case 0:
                      (g = 315), (_ = 0);
                      break;
                    case 1:
                      (g = 315), (_ = 146);
                      break;
                    case 2:
                      (g = 315), (_ = 315);
                      break;
                    case 3:
                      (g = 315), (_ = 462);
                      break;
                    case 4:
                      (g = 948), (_ = 74);
                      break;
                    case 5:
                      (g = 948), (_ = 390);
                      break;
                    case 6:
                      (g = 1580), (_ = 231);
                      break;
                    case 7:
                      (g = 1898), (_ = 542);
                      break;
                    case 8:
                      (g = 0), (_ = 618);
                      break;
                    case 9:
                      (g = 0), (_ = 764);
                      break;
                    case 10:
                      (g = 0), (_ = 930);
                      break;
                    case 11:
                      (g = 0), (_ = 1078);
                      break;
                    case 12:
                      (g = 315), (_ = 618);
                      break;
                    case 13:
                      (g = 315), (_ = 764);
                      break;
                    case 14:
                      (g = 315), (_ = 930);
                      break;
                    case 15:
                      (g = 315), (_ = 1078);
                      break;
                    case 16:
                      (g = 634), (_ = 692);
                      break;
                    case 17:
                      (g = 634), (_ = 1004);
                      break;
                    case 18:
                      (g = 946), (_ = 692);
                      break;
                    case 19:
                      (g = 946), (_ = 1004);
                      break;
                    case 20:
                      (g = 1264), (_ = 852);
                      break;
                    case 21:
                      (g = 1582), (_ = 852);
                  }
                  (d = i.g_App.getTeamData(l.team_id_1)),
                    (p = i.g_App.getTeamData(l.team_id_2)),
                    (u =
                      0 == l.team_id_1
                        ? Object(y.b)("#Feed_TBD")
                        : d
                        ? d.name
                        : ""),
                    (h =
                      0 == l.team_id_2
                        ? Object(y.b)("#Feed_TBD")
                        : p
                        ? p.name
                        : ""),
                    (b = d ? d.url_logo : s.a.IMG_URL + "team_unkown.png"),
                    (k = p ? p.url_logo : s.a.IMG_URL + "team_unkown.png");
                  o.push(
                    m.a.createElement(Ja, {
                      key: "node_" + n,
                      teamName1: u,
                      teamLogo1: b,
                      teamWins1: l.team_1_wins,
                      teamName2: h,
                      teamLogo2: k,
                      teamWins2: l.team_2_wins,
                      isCompleted: l.is_completed,
                      isInProgress: l.has_started,
                      type: l.node_type,
                      positionX: g,
                      positionY: _,
                      leagueID: this.props.leagueID,
                      seriesID: l.series_id,
                    })
                  );
                }
            }
            return m.a.createElement(
              "div",
              { className: Va.a.TournamentBracketDoublSeeded },
              m.a.createElement(
                "div",
                { className: Va.a.Title, style: { width: t } },
                this.props.nodeGroup.name
              ),
              m.a.createElement("div", {
                className: Va.a.TitleUnderline,
                style: { width: t },
              }),
              m.a.createElement(
                "div",
                {
                  className: Va.a.Background,
                  style: { backgroundImage: a, minWidth: t, minHeight: r },
                },
                o
              )
            );
          }),
          (a = Object(n.c)([x.a], a))
        );
      })(m.a.Component),
      et = (function (e) {
        function a() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(n.d)(a, e),
          (a.prototype.render = function () {
            for (var e = 1; e < this.props.nodeGroup.team_count; ) e *= 2;
            var a = "",
              t = 0,
              r = 0,
              o = [];
            switch (e) {
              case 4:
                for (var n in ((a =
                  "url( " + s.a.IMG_URL + "bracket_single_4.png"),
                (t = 600),
                (r = 267),
                this.props.nodeGroup.nodes)) {
                  var c = parseInt(n),
                    l = this.props.nodeGroup.nodes[n],
                    g = 0,
                    _ = 0;
                  switch (c) {
                    case 0:
                      (g = 0), (_ = 0);
                      break;
                    case 1:
                      (g = 0), (_ = 146);
                      break;
                    case 2:
                      (g = 316), (_ = 74);
                  }
                  var d = i.g_App.getTeamData(l.team_id_1),
                    p = i.g_App.getTeamData(l.team_id_2),
                    u =
                      0 == l.team_id_1
                        ? Object(y.b)("#Feed_TBD")
                        : d
                        ? d.name
                        : "",
                    h =
                      0 == l.team_id_2
                        ? Object(y.b)("#Feed_TBD")
                        : p
                        ? p.name
                        : "",
                    b = d ? d.url_logo : s.a.IMG_URL + "team_unkown.png",
                    k = p ? p.url_logo : s.a.IMG_URL + "team_unkown.png";
                  o.push(
                    m.a.createElement(Ja, {
                      key: "node_" + n,
                      teamName1: u,
                      teamLogo1: b,
                      teamWins1: l.team_1_wins,
                      teamName2: h,
                      teamLogo2: k,
                      teamWins2: l.team_2_wins,
                      isCompleted: l.is_completed,
                      isInProgress: l.has_started,
                      type: l.node_type,
                      positionX: g,
                      positionY: _,
                      leagueID: this.props.leagueID,
                      seriesID: l.series_id,
                    })
                  );
                }
            }
            return m.a.createElement(
              "div",
              { className: Va.a.TournamentBracketSingle },
              m.a.createElement(
                "div",
                { className: Va.a.Title, style: { width: t } },
                this.props.nodeGroup.name
              ),
              m.a.createElement("div", {
                className: Va.a.TitleUnderline,
                style: { width: t },
              }),
              m.a.createElement(
                "div",
                {
                  className: Va.a.Background,
                  style: { backgroundImage: a, minWidth: t, minHeight: r },
                },
                o
              )
            );
          }),
          (a = Object(n.c)([x.a], a))
        );
      })(m.a.Component),
      at = (function (e) {
        function a() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(n.d)(a, e),
          (a.prototype.render = function () {
            var e = "url( " + s.a.IMG_URL + "bracket_gsl.png",
              a = [];
            for (var t in this.props.nodeGroup.nodes) {
              var r = parseInt(t),
                o = this.props.nodeGroup.nodes[t],
                n = 0,
                c = 0;
              switch (r) {
                case 0:
                  (n = 0), (c = 0);
                  break;
                case 1:
                  (n = 0), (c = 146);
                  break;
                case 2:
                  (n = 316), (c = 74);
                  break;
                case 3:
                  (n = 0), (c = 353);
                  break;
                case 4:
                  (n = 316), (c = 323);
              }
              var l = i.g_App.getTeamData(o.team_id_1),
                g = i.g_App.getTeamData(o.team_id_2),
                _ =
                  0 == o.team_id_1 ? Object(y.b)("#Feed_TBD") : l ? l.name : "",
                d =
                  0 == o.team_id_2 ? Object(y.b)("#Feed_TBD") : g ? g.name : "",
                p = l ? l.url_logo : s.a.IMG_URL + "team_unkown.png",
                u = g ? g.url_logo : s.a.IMG_URL + "team_unkown.png";
              a.push(
                m.a.createElement(Ja, {
                  key: "node_" + t,
                  teamName1: _,
                  teamLogo1: p,
                  teamWins1: o.team_1_wins,
                  teamName2: d,
                  teamLogo2: u,
                  teamWins2: o.team_2_wins,
                  isCompleted: o.is_completed,
                  isInProgress: o.has_started,
                  type: o.node_type,
                  positionX: n,
                  positionY: c,
                  leagueID: this.props.leagueID,
                  seriesID: o.series_id,
                })
              );
            }
            return m.a.createElement(
              "div",
              { className: Va.a.TournamentBracketGSL },
              m.a.createElement(
                "div",
                { className: Va.a.Title, style: { width: 600 } },
                this.props.nodeGroup.name
              ),
              m.a.createElement("div", {
                className: Va.a.TitleUnderline,
                style: { width: 600 },
              }),
              m.a.createElement(
                "div",
                {
                  className: Va.a.Background,
                  style: { backgroundImage: e, minWidth: 600, minHeight: 473 },
                },
                a
              )
            );
          }),
          (a = Object(n.c)([x.a], a))
        );
      })(m.a.Component),
      tt = function (e) {
        var a = e.standing,
          t = e.name,
          r = e.url,
          o = e.points,
          n = e.earnings,
          c = e.teamID,
          l = n.toFixed(0).replace(/\d(?=(\d{3})+$)/g, "$&,"),
          i = o.toFixed(0).replace(/\d(?=(\d{3})+$)/g, "$&,");
        return m.a.createElement(
          Ka,
          { to: T(c), className: Va.a.TournamentResult, condition: 0 != c },
          m.a.createElement(
            "div",
            {
              className: A(
                Va.a.Standing,
                1 == a && Va.a.First,
                2 == a && Va.a.Second,
                3 == a && Va.a.Third
              ),
            },
            a
          ),
          m.a.createElement(
            "div",
            { className: Va.a.TeamInfo },
            m.a.createElement(
              "div",
              { className: Va.a.Top },
              m.a.createElement(je, {
                className: Va.a.TeamLogo,
                src: r,
                fallbackSrc: s.a.IMG_URL + "team_unknown.png",
              }),
              m.a.createElement("div", { className: Va.a.TeamName }, t)
            ),
            m.a.createElement(
              "div",
              { className: Va.a.Bottom },
              m.a.createElement(
                "div",
                { className: Va.a.LabelAndValue },
                m.a.createElement(
                  "div",
                  { className: Va.a.Label },
                  Object(y.b)("#Earnings")
                ),
                m.a.createElement("div", { className: Va.a.Value }, "$", l)
              ),
              o > 0 &&
                m.a.createElement(
                  "div",
                  { className: Va.a.LabelAndValue },
                  m.a.createElement(
                    "div",
                    { className: Va.a.Label },
                    Object(y.b)("#Points")
                  ),
                  m.a.createElement("div", { className: Va.a.Value }, i)
                )
            )
          )
        );
      },
      rt = (function (e) {
        function a() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(n.d)(a, e),
          (a.prototype.getResults = function () {
            var e = parseInt(this.props.match.params.leagueID),
              a = i.g_App.getLeagueResults(e),
              t = i.g_App.getLeagueData(e);
            if (
              (console.log("leagueResults", Object(oa.H)(a)),
              console.log("leagueData", Object(oa.H)(t)),
              !a || !t)
            )
              return m.a.createElement(
                "div",
                { className: ne.a.FadeInDelay },
                m.a.createElement(
                  "div",
                  { key: "throbber", className: Va.a.Loading },
                  m.a.createElement(ue, {
                    size: "medium",
                    string: Object(y.b)("#Loading"),
                    position: "center",
                  })
                )
              );
            var r = [],
              o = 0;
            3 == t.info.tier
              ? (o = 8)
              : 4 == t.info.tier
              ? (o = 16)
              : 5 == t.info.tier
              ? (o = 18)
              : 8 == t.info.tier && (o = 8);
            for (var n = 0, c = 1; c < o + 1 && c < a.dollars.length; c++) {
              for (var l = !1, s = n; s < a.results.length; s++) {
                var g = a.results[s];
                if (g.standing <= c) {
                  var _ = 5 == t.info.tier ? 0 : g.points;
                  r.push(
                    m.a.createElement(tt, {
                      key: "team_" + g.teamid + "_" + c,
                      standing: g.standing,
                      name: g.team_name,
                      url: g.team_logo_url,
                      points: _,
                      earnings: g.earnings,
                      teamID: g.team_id,
                    })
                  ),
                    (n = s + 1),
                    (l = !0);
                  break;
                }
              }
              if (!l) {
                _ = 5 == t.info.tier ? 0 : a.points[c - 1];
                r.push(
                  m.a.createElement(tt, {
                    key: "team_0_" + c,
                    standing: c,
                    name: Object(y.b)("#Feed_TBD"),
                    url: "",
                    points: _,
                    earnings: a.dollars[c - 1],
                    teamID: 0,
                  })
                );
              }
            }
            return m.a.createElement("div", { className: Va.a.Results }, r);
          }),
          (a.prototype.renderNodeGroups = function (e, a, t) {
            for (var r = 0, o = a.node_groups; r < o.length; r++) {
              var n = o[r];
              switch (n.node_group_type) {
                case 2:
                  t.push(
                    m.a.createElement(Za, {
                      key: "bracket_" + n.node_group_id,
                      leagueID: e,
                      nodeGroup: n,
                    })
                  );
                  break;
                case 4:
                  t.push(
                    m.a.createElement(et, {
                      key: "bracket_" + n.node_group_id,
                      leagueID: e,
                      nodeGroup: n,
                    })
                  );
                  break;
                case 5:
                  t.push(
                    m.a.createElement($a, {
                      key: "bracket_" + n.node_group_id,
                      leagueID: e,
                      nodeGroup: n,
                    })
                  );
                  break;
                case 6:
                  t.push(
                    m.a.createElement(Qa, {
                      key: "bracket_" + n.node_group_id,
                      leagueID: e,
                      nodeGroup: n,
                    })
                  );
                  break;
                case 7:
                  break;
                case 8:
                  t.push(
                    m.a.createElement(at, {
                      key: "bracket_" + n.node_group_id,
                      leagueID: e,
                      nodeGroup: n,
                    })
                  );
              }
              this.renderNodeGroups(e, n, t);
            }
          }),
          (a.prototype.onSelectPhaseOption = function (e) {
            this.props.history.push(
              D(this.props.match.params.leagueID, o.Standings, e.target.value)
            );
          }),
          (a.prototype.render = function () {
            var e = parseInt(this.props.match.params.leagueID),
              a = i.g_App.getLeagueData(e);
            if (!a)
              return m.a.createElement(
                "div",
                { className: Va.a.Loading },
                m.a.createElement(ue, {
                  size: "medium",
                  string: Object(y.b)("#Loading"),
                  position: "center",
                })
              );
            var t,
              r = [];
            r.push(
              m.a.createElement(
                "option",
                { key: "Results", value: "results" },
                " ",
                Object(y.b)("#LeaguePhase_Results")
              )
            );
            for (var o = 0, n = a.node_groups; o < n.length; o++) {
              var c = (p = n[o]).phase + "_" + p.region,
                l = "";
              switch (p.phase) {
                case 1:
                  l = "Regional_";
                  break;
                case 2:
                  l = "Group_";
                  break;
                case 3:
                  l = "MainEvent_";
              }
              if (1 == p.phase)
                switch (p.region) {
                  case 1:
                    l += "NA_";
                    break;
                  case 2:
                    l += "SA_";
                    break;
                  case 3:
                    l += "WEU_";
                    break;
                  case 4:
                    l += "EEU_";
                    break;
                  case 5:
                    l += "CN_";
                    break;
                  case 6:
                    l += "SEA_";
                }
              r.push(
                m.a.createElement(
                  "option",
                  { key: c, value: c },
                  " ",
                  Object(y.b)("#LeaguePhase_" + l + "Teams")
                )
              );
            }
            if ("results" == this.props.match.params.phase)
              t = this.getResults();
            else {
              for (var g = [], _ = 0, d = a.node_groups; _ < d.length; _++) {
                var p;
                c = (p = d[_]).phase + "_" + p.region;
                this.props.match.params.phase == c &&
                  this.renderNodeGroups(e, p, g);
              }
              t = m.a.createElement(
                za,
                {
                  initialScale: 0.5,
                  minScale: 0.25,
                  maxScale: 2,
                  resetOnChanges: !0,
                },
                g
              );
            }
            return m.a.createElement(
              "div",
              { className: Va.a.Standings },
              m.a.createElement(
                "select",
                {
                  className: Va.a.PhaseDropdown,
                  value: this.props.match.params.phase,
                  onChange: this.onSelectPhaseOption,
                  style: {
                    backgroundImage: "url( " + s.a.IMG_URL + "down_arrow.png )",
                  },
                },
                r
              ),
              t
            );
          }),
          Object(n.c)([q], a.prototype, "onSelectPhaseOption", null),
          (a = Object(n.c)([x.a], a))
        );
      })(m.a.Component),
      ot = (function (e) {
        function a(a) {
          var t = e.call(this, a) || this;
          return (t.state = { liveMatches: null }), t;
        }
        return (
          Object(n.d)(a, e),
          (a.prototype.componentDidMount = function () {
            var e = this;
            i.g_App.getLiveMatches(parseInt(this.props.match.params.leagueID)),
              (this.intervalHandle = setInterval(function () {
                i.g_App.getLiveMatches(parseInt(e.props.match.params.leagueID));
              }, 3e4));
          }),
          (a.prototype.componentWillUnmount = function () {
            clearInterval(this.intervalHandle);
          }),
          (a.prototype.getUpcomingMatches = function (e, a, t) {
            for (var r = 0, o = a.node_groups; r < o.length; r++) {
              for (var n = o[r], c = 0, l = n.nodes; c < l.length; c++) {
                var i = l[c];
                i.has_started ||
                  i.is_completed ||
                  0 == i.scheduled_time ||
                  (0 != i.team_id_1 &&
                    0 != i.team_id_2 &&
                    t.push([i.node_id, i.scheduled_time]));
              }
              this.getUpcomingMatches(e, n, t);
            }
          }),
          (a.prototype.getActiveSeries = function (e, a, t) {
            for (var r = 0, o = a.node_groups; r < o.length; r++) {
              for (var n = o[r], c = 0, l = n.nodes; c < l.length; c++) {
                var i = l[c];
                i.has_started &&
                  !i.is_completed &&
                  0 != i.scheduled_time &&
                  t.push(i.node_id);
              }
              this.getActiveSeries(e, n, t);
            }
          }),
          (a.prototype.render = function () {
            var e = parseInt(this.props.match.params.leagueID),
              a = i.g_App.getLeagueData(e),
              t = i.g_App.getLiveMatches(e);
            if (!a)
              return m.a.createElement(
                "div",
                { className: Va.a.Loading },
                m.a.createElement(ue, {
                  size: "medium",
                  string: Object(y.b)("#Loading"),
                  position: "center",
                })
              );
            var r = [];
            if (t)
              for (var o = 0, n = t.games; o < n.length; o++) {
                var c = n[o];
                r.push(
                  m.a.createElement(De, {
                    key: "live_" + c.server_steam_id,
                    type: 13,
                    timestamp: 0,
                    league_id: c.league_id,
                    team_id: c.radiant_team_id,
                    data_1: c.dire_team_id,
                    data_2: c.time,
                    server_steam_id: c.server_steam_id,
                  })
                );
              }
            var l = [];
            this.getActiveSeries(e, a, l);
            for (var s = 0, g = l; s < g.length; s++) {
              var _ = g[s];
              r.push(
                m.a.createElement(De, {
                  key: "active_" + _,
                  type: 14,
                  timestamp: 0,
                  league_id: e,
                  node_id: _,
                })
              );
            }
            var d = [];
            this.getUpcomingMatches(e, a, d),
              d.sort(function (e, a) {
                return e[1] - a[1];
              });
            for (var p = 0, u = d; p < u.length; p++) {
              var h = u[p];
              r.push(
                m.a.createElement(De, {
                  key: "upcoming_" + h[0],
                  type: 3,
                  timestamp: h[1],
                  data_1: h[1],
                  league_id: e,
                  node_id: h[0],
                })
              );
            }
            for (var b in a.series_infos) {
              var k = a.series_infos[b];
              r.push(
                m.a.createElement(fe, {
                  key: k.series_id,
                  nLeagueID: a.info.league_id,
                  nSeriesID: k.series_id,
                })
              );
            }
            return m.a.createElement("div", { className: Va.a.Matches }, r);
          }),
          (a = Object(n.c)([x.a], a))
        );
      })(m.a.Component),
      nt = (function (e) {
        function a() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(n.d)(a, e),
          (a.prototype.render = function () {
            var e =
                s.a.CDN_URL +
                "apps/dota2/images/leagues/" +
                this.props.match.params.leagueID +
                "/images/image_8.png",
              a =
                this.props.location.pathname ==
                D(this.props.match.params.leagueID, o.Teams),
              t =
                this.props.location.pathname ==
                D(
                  this.props.match.params.leagueID,
                  o.Standings,
                  this.props.match.params.phase
                ),
              r =
                this.props.location.pathname ==
                D(this.props.match.params.leagueID, o.Matchups);
            return m.a.createElement(
              "div",
              { className: Va.a.TournamentPage },
              m.a.createElement(
                "div",
                { className: Va.a.LeagueLogoContainer },
                m.a.createElement("img", {
                  className: Va.a.LeagueLogo,
                  src: e,
                }),
                m.a.createElement(
                  "div",
                  { className: Va.a.TopIcons },
                  m.a.createElement("img", {
                    src: s.a.IMG_URL + "back_arrow.png",
                    className: Va.a.BackArrow,
                    onClick: function () {
                      return window.history.back();
                    },
                  })
                )
              ),
              m.a.createElement(
                "div",
                { className: Va.a.HeaderAndBody },
                m.a.createElement(
                  "div",
                  { className: Va.a.Header },
                  m.a.createElement(
                    v.a,
                    {
                      to: D(this.props.match.params.leagueID, o.Teams),
                      className: A(Va.a.MenuLink, a && Va.a.Enabled),
                    },
                    Object(y.b)("#Tournament_Teams")
                  ),
                  m.a.createElement(
                    v.a,
                    {
                      to: D(this.props.match.params.leagueID, o.Standings),
                      className: A(Va.a.MenuLink, t && Va.a.Enabled),
                    },
                    Object(y.b)("#Tournament_Standings")
                  ),
                  m.a.createElement(
                    v.a,
                    {
                      to: D(this.props.match.params.leagueID, o.Matchups),
                      className: A(Va.a.MenuLink, r && Va.a.Enabled),
                    },
                    Object(y.b)("#Tournament_Matches")
                  )
                ),
                m.a.createElement(
                  "div",
                  { className: Va.a.HeaderUnderline },
                  m.a.createElement("div", {
                    className: A(
                      Va.a.Underline,
                      a && Va.a.OnTeams,
                      t && Va.a.OnStandings,
                      r && Va.a.OnMatches
                    ),
                  })
                ),
                m.a.createElement(
                  d.a,
                  null,
                  m.a.createElement(p.a, {
                    path: D(":leagueID", o.Teams, ":phase"),
                    component: Xa,
                  }),
                  m.a.createElement(p.a, {
                    path: D(":leagueID", o.Standings, ":phase"),
                    component: rt,
                  }),
                  m.a.createElement(p.a, {
                    path: D(":leagueID", o.Matchups, ":phase"),
                    component: ot,
                  })
                )
              )
            );
          }),
          a
        );
      })(m.a.Component),
      ct = t("++Fi"),
      lt = t.n(ct),
      it = (function (e) {
        function a(a) {
          return e.call(this, a) || this;
        }
        return (
          Object(n.d)(a, e),
          (a.prototype.toggle = function () {
            i.g_App.toggleFavorite(
              this.props.type,
              this.props.id,
              this.props.name,
              this.props.url
            );
          }),
          (a.prototype.render = function () {
            var e, a;
            switch (this.props.type) {
              case i.EFavoriteType.Player:
                (e = m.a.createElement(je, {
                  className: A(lt.a.Icon, lt.a.Player),
                  src: i.g_App.getPlayerImageURL(this.props.id),
                  fallbackSrc: s.a.IMG_URL + "portrait_unknown.png",
                })),
                  (a = L(this.props.id));
                break;
              case i.EFavoriteType.Team:
                (e = m.a.createElement(je, {
                  className: A(lt.a.Icon, lt.a.Team),
                  src: this.props.url,
                  fallbackSrc: s.a.IMG_URL + "team_unknown.png",
                })),
                  (a = T(this.props.id));
                break;
              case i.EFavoriteType.League:
            }
            var t = i.g_App.isFavorite(this.props.type, this.props.id);
            return m.a.createElement(
              "div",
              { className: lt.a.SearchElement },
              m.a.createElement(
                ge.a,
                { to: a, className: lt.a.Link },
                e,
                m.a.createElement(
                  "div",
                  { className: lt.a.Name },
                  this.props.name
                )
              ),
              m.a.createElement("img", {
                src:
                  s.a.IMG_URL +
                  (t ? "favorite_star.png" : "favorite_star_empty.png"),
                className: lt.a.Favorite,
                onClick: this.toggle,
              })
            );
          }),
          Object(n.c)([q], a.prototype, "toggle", null),
          (a = Object(n.c)([x.a], a))
        );
      })(m.a.Component),
      st = (function (e) {
        function a(a) {
          var t = e.call(this, a) || this;
          return (
            (t.state = {
              sSearchString: "",
              bWasEmptySearch: !0,
              bSearchPending: !1,
            }),
            t
          );
        }
        return (
          Object(n.d)(a, e),
          (a.prototype.handleChange = function (e) {
            this.setState({ sSearchString: e.target.value });
          }),
          (a.prototype.handleSubmit = function (e) {
            i.g_App.requestSearchResults(this.state.sSearchString),
              e.preventDefault(),
              this.setState({
                bWasEmptySearch: 0 == this.state.sSearchString.length,
                bSearchPending: !0,
              });
          }),
          (a.prototype.handleClear = function () {
            this.setState({ sSearchString: "", bWasEmptySearch: !0 }),
              i.g_App.requestSearchResults("");
          }),
          (a.prototype.componentDidMount = function () {
            return Object(n.b)(this, void 0, void 0, function () {
              return Object(n.e)(this, function (e) {
                return (
                  i.g_App.requestSearchResults(this.state.sSearchString), [2]
                );
              });
            });
          }),
          (a.prototype.render = function () {
            var e = [],
              a = i.g_App.getSearchResults(this.state.sSearchString),
              t = i.g_App.getFavorites();
            if (a && 0 != a.length && t) {
              var r = void 0,
                o = [
                  { name: "players", type: 1 },
                  { name: "teams", type: 2 },
                ];
              if (this.state.bWasEmptySearch) {
                for (var n = 0, c = o; n < c.length; n++) {
                  var l = c[n];
                  if (t.types[l.type].favorites.length > 0) {
                    e.push(
                      m.a.createElement(
                        "div",
                        {
                          key: "YourHeader_" + l.type,
                          className: lt.a.Category,
                        },
                        Object(y.b)("#Search_CategoryYour_" + l.name)
                      )
                    );
                    for (
                      var g = 0, _ = t.types[l.type].favorites;
                      g < _.length;
                      g++
                    ) {
                      var d = _[g];
                      e.push(
                        m.a.createElement(it, {
                          key: l.type + "_" + d.id,
                          type: l.type,
                          id: d.id,
                          name: d.name,
                          url: d.url,
                        })
                      ),
                        (r = !0);
                    }
                  }
                }
                r &&
                  e.push(
                    m.a.createElement("div", {
                      key: "divider",
                      className: lt.a.Divider,
                    })
                  );
              }
              for (var p in o) {
                var u = a[(l = o[p]).name];
                if (u.length > 0)
                  for (var h in (e.push(
                    m.a.createElement(
                      "div",
                      { key: "Header_" + l.type, className: lt.a.Category },
                      Object(y.b)(
                        (this.state.bWasEmptySearch
                          ? "#Search_CategoryTop_"
                          : "#Search_Category_") + l.name
                      )
                    )
                  ),
                  u)) {
                    var b = u[h];
                    i.g_App.isFavorite(l.type, b.id) ||
                      e.push(
                        m.a.createElement(it, {
                          key: l.type + "_" + b.id,
                          type: l.type,
                          id: b.id,
                          name: b.name,
                          url: b.url,
                        })
                      );
                  }
              }
            } else
              e.push(
                m.a.createElement(
                  "div",
                  { key: "Throbber", className: ne.a.FadeInDelay },
                  m.a.createElement(ue, {
                    size: "medium",
                    string: "Loading...",
                    position: "center",
                  })
                )
              );
            return m.a.createElement(
              "div",
              { className: lt.a.SearchPage },
              m.a.createElement(
                Ue,
                {
                  text: Object(y.b)("#Header_TeamsAndPlayers"),
                  underlineColorStyle: lt.a.backgroundColorBrightOrange,
                  childrenStyle: lt.a.HeaderChildren,
                },
                m.a.createElement(
                  "form",
                  { onSubmit: this.handleSubmit, className: lt.a.SearchInput },
                  m.a.createElement("img", {
                    src: s.a.IMG_URL + "search.png",
                    className: lt.a.SearchIcon,
                  }),
                  m.a.createElement("input", {
                    type: "text",
                    placeholder: Object(y.b)("#Search_Placeholder"),
                    value: this.state.sSearchString,
                    onChange: this.handleChange,
                  }),
                  m.a.createElement("img", {
                    className: lt.a.Close,
                    src: s.a.IMG_URL + "x_close.png",
                    onClick: this.handleClear,
                  })
                )
              ),
              m.a.createElement("div", { className: lt.a.Contents }, e)
            );
          }),
          Object(n.c)([q], a.prototype, "handleChange", null),
          Object(n.c)([q], a.prototype, "handleSubmit", null),
          Object(n.c)([q], a.prototype, "handleClear", null),
          (a = Object(n.c)([x.a], a))
        );
      })(m.a.Component),
      gt = t("wB0h"),
      mt = t.n(gt),
      _t = (function (e) {
        function a() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(n.d)(a, e),
          (a.prototype.render = function () {
            var e = "international" == this.props.match.params.category,
              a = "league" == this.props.match.params.category;
            return m.a.createElement(
              "div",
              { className: mt.a.StandingsPage },
              m.a.createElement(Ue, {
                text: Object(y.b)("#Header_TournamentStandings"),
                underlineColorStyle: mt.a.backgroundColorOrange,
              }),
              m.a.createElement(
                "div",
                { className: mt.a.LeagueOrTIHeader },
                m.a.createElement(
                  ge.a,
                  {
                    to: C("league", "na"),
                    className: A(mt.a.CategoryOption, a && mt.a.OptionSelected),
                  },
                  Object(y.b)("#Standings_DPCLeague")
                ),
                m.a.createElement(
                  ge.a,
                  {
                    to: C("international", "global"),
                    className: A(mt.a.CategoryOption, e && mt.a.OptionSelected),
                  },
                  Object(y.b)("#Standings_International")
                )
              ),
              a &&
                m.a.createElement(dt, {
                  region: this.props.match.params.region,
                }),
              e && m.a.createElement(pt, null)
            );
          }),
          (a = Object(n.c)([x.a], a))
        );
      })(m.a.Component),
      dt = (function (e) {
        function a() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(n.d)(a, e),
          (a.prototype.render = function () {
            var e = i.g_App.getDPCStandings();
            if (!e) return m.a.createElement("div", null);
            for (
              var a = [],
                t = ["", "na", "sa", "eu", "cis", "cn", "sea"],
                r = [
                  "",
                  "#Standings_RegionFullNA",
                  "#Standings_RegionFullSA",
                  "#Standings_RegionFullWEU",
                  "#Standings_RegionFullEEU",
                  "#Standings_RegionFullCN",
                  "#Standings_RegionFullSEA",
                ],
                o = 0,
                n = e.standings || [];
              o < n.length;
              o++
            ) {
              var c = n[o];
              if (t[parseInt(c.region)] == this.props.region) {
                var l = Object(y.b)(r[parseInt(c.region)]),
                  s =
                    0 == c.division
                      ? Object(y.b)("#Standings_Division1")
                      : Object(y.b)("#Standings_Division2");
                a.push(
                  m.a.createElement(
                    "div",
                    {
                      className: mt.a.Division,
                      key: "" + c.region + c.division,
                    },
                    l,
                    " - ",
                    s
                  )
                );
                for (var g = 0, _ = c.entries; g < _.length; g++) {
                  var d = _[g];
                  a.push(
                    m.a.createElement(
                      "div",
                      { className: mt.a.Entry, key: "" + d.team_id },
                      m.a.createElement(ve, {
                        team_id: d.team_id,
                        size: pe.Medium,
                        team_logo_url_fallback: d.team_logo_url,
                        className: mt.a.Logo,
                      }),
                      m.a.createElement(
                        "div",
                        { className: mt.a.TeamName },
                        d.team_name
                      ),
                      m.a.createElement(
                        "div",
                        { className: mt.a.WinLoss },
                        d.wins,
                        " - ",
                        d.losses
                      )
                    )
                  );
                }
              }
            }
            return m.a.createElement(
              "div",
              { className: mt.a.LeagueStandingsPage },
              m.a.createElement(
                "div",
                { className: mt.a.RegionSelector },
                m.a.createElement(
                  ge.a,
                  {
                    to: C("league", "na"),
                    className: A(
                      mt.a.Region,
                      "na" == this.props.region && mt.a.SelectedRegion
                    ),
                  },
                  m.a.createElement(
                    "div",
                    { className: mt.a.RegionText },
                    Object(y.b)("#Standings_RegionNA")
                  )
                ),
                m.a.createElement(
                  ge.a,
                  {
                    to: C("league", "sa"),
                    className: A(
                      mt.a.Region,
                      "sa" == this.props.region && mt.a.SelectedRegion
                    ),
                  },
                  m.a.createElement(
                    "div",
                    { className: mt.a.RegionText },
                    Object(y.b)("#Standings_RegionSA")
                  )
                ),
                m.a.createElement(
                  ge.a,
                  {
                    to: C("league", "eu"),
                    className: A(
                      mt.a.Region,
                      "eu" == this.props.region && mt.a.SelectedRegion
                    ),
                  },
                  m.a.createElement(
                    "div",
                    { className: mt.a.RegionText },
                    Object(y.b)("#Standings_RegionWEU")
                  )
                ),
                m.a.createElement(
                  ge.a,
                  {
                    to: C("league", "cis"),
                    className: A(
                      mt.a.Region,
                      "cis" == this.props.region && mt.a.SelectedRegion
                    ),
                  },
                  m.a.createElement(
                    "div",
                    { className: mt.a.RegionText },
                    Object(y.b)("#Standings_RegionEEU")
                  )
                ),
                m.a.createElement(
                  ge.a,
                  {
                    to: C("league", "cn"),
                    className: A(
                      mt.a.Region,
                      "cn" == this.props.region && mt.a.SelectedRegion
                    ),
                  },
                  m.a.createElement(
                    "div",
                    { className: mt.a.RegionText },
                    Object(y.b)("#Standings_RegionCN")
                  )
                ),
                m.a.createElement(
                  ge.a,
                  {
                    to: C("league", "sea"),
                    className: A(
                      mt.a.Region,
                      "sea" == this.props.region && mt.a.SelectedRegion
                    ),
                  },
                  m.a.createElement(
                    "div",
                    { className: mt.a.RegionText },
                    Object(y.b)("#Standings_RegionSEA")
                  )
                )
              ),
              m.a.createElement(
                "div",
                { className: mt.a.ScrollableContents },
                a
              )
            );
          }),
          (a = Object(n.c)([x.a], a))
        );
      })(m.a.Component),
      pt = (function (e) {
        function a() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(n.d)(a, e),
          (a.prototype.render = function () {
            var e = i.g_App.getDPCStandings(),
              a = [],
              t = !1;
            if (e && e.results)
              if (e.results.length < 1)
                a.push(
                  m.a.createElement(
                    "div",
                    { key: "NoPointsYet", className: mt.a.NoPointsYet },
                    m.a.createElement(
                      "span",
                      { className: mt.a.NoPointsDesc },
                      Object(y.b)("#Standings_NoPointsYet")
                    )
                  )
                );
              else
                for (var r = 1, o = 0, n = e.results; o < n.length; o++) {
                  var c = n[o];
                  if (0 != c.total_points) {
                    var l = mt.a.DefaultStatus;
                    if (c.status)
                      switch (c.status) {
                        case 1:
                          (l = mt.a.ClinchedInvite), (t = !0);
                          break;
                        case 2:
                          (l = mt.a.Eliminated), (t = !0);
                      }
                    a.push(
                      m.a.createElement(
                        ge.a,
                        {
                          to: T(c.team_id),
                          key: c.team_id,
                          className: mt.a.Team,
                        },
                        m.a.createElement(
                          "span",
                          { className: A(mt.a.RankContainer, l) },
                          m.a.createElement("span", { className: mt.a.Rank }, r)
                        ),
                        m.a.createElement(
                          "span",
                          { className: mt.a.TeamLogoContainer },
                          m.a.createElement(ve, {
                            team_id: c.team_id,
                            size: pe.Medium,
                            team_logo_url_fallback: c.team_logo_url,
                            className: mt.a.TeamLogo,
                          })
                        ),
                        m.a.createElement(
                          "span",
                          { className: mt.a.TeamName },
                          c.team_name
                        ),
                        m.a.createElement("span", { className: mt.a.Spacer }),
                        m.a.createElement(
                          "span",
                          { className: mt.a.Points },
                          c.total_points
                        )
                      )
                    ),
                      (r += 1);
                  }
                }
            else
              a.push(
                m.a.createElement(
                  "div",
                  { key: "Loading", className: mt.a.Loading },
                  m.a.createElement(ue, {
                    size: "medium",
                    string: Object(y.b)("#Loading"),
                    position: "center",
                  })
                )
              );
            return m.a.createElement(
              "div",
              { className: mt.a.InternationalStandingsPage },
              m.a.createElement("div", { className: mt.a.Contents }, a),
              t &&
                m.a.createElement(
                  "div",
                  { className: mt.a.FooterContainer },
                  m.a.createElement(
                    "div",
                    { className: mt.a.Footer },
                    m.a.createElement("span", {
                      className: A(mt.a.RankContainer, mt.a.ClinchedInvite),
                    }),
                    m.a.createElement(
                      "span",
                      { className: mt.a.FooterText },
                      Object(y.b)("#Standings_Footer_Clinched")
                    ),
                    m.a.createElement("span", { className: mt.a.FooterSpacer }),
                    m.a.createElement("span", {
                      className: A(mt.a.RankContainer, mt.a.Eliminated),
                    }),
                    m.a.createElement(
                      "span",
                      { className: mt.a.FooterText },
                      Object(y.b)("#Standings_Footer_Eliminated")
                    )
                  )
                )
            );
          }),
          (a = Object(n.c)([x.a], a))
        );
      })(m.a.Component),
      ut = (function (e) {
        function a() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(n.d)(a, e),
          (a.prototype.render = function () {
            return (
              Y.isMobile ||
                s.a.VALVE_IP ||
                (window.location.href = s.a.BASE_URL),
              m.a.createElement(
                _.a,
                { basename: Object(s.b)() },
                m.a.createElement(
                  "div",
                  { className: ae.a.App },
                  m.a.createElement(
                    "div",
                    { className: ae.a.NavContents },
                    m.a.createElement(J, null),
                    m.a.createElement($, null),
                    m.a.createElement(
                      d.a,
                      null,
                      m.a.createElement(p.a, {
                        exact: !0,
                        path: "/",
                        render: function () {
                          return m.a.createElement(u.a, { to: "/feed" });
                        },
                      }),
                      m.a.createElement(p.a, { path: f(), component: We }),
                      m.a.createElement(p.a, {
                        path: C(":category", ":region"),
                        component: _t,
                      }),
                      m.a.createElement(p.a, { path: E(), component: Ve }),
                      m.a.createElement(p.a, { path: N(), component: aa }),
                      m.a.createElement(p.a, {
                        path: G(r.LeagueSelect),
                        component: la,
                      }),
                      m.a.createElement(p.a, {
                        path: T(":teamID"),
                        component: ga,
                      }),
                      m.a.createElement(p.a, {
                        path: L(":playerID"),
                        component: da,
                      }),
                      m.a.createElement(p.a, { path: S(), component: ha }),
                      m.a.createElement(p.a, {
                        path: P(":leagueID", ":seriesID"),
                        component: va,
                      }),
                      m.a.createElement(p.a, {
                        path: R(":leagueID", ":nodeID"),
                        component: Ca,
                      }),
                      m.a.createElement(p.a, {
                        path: I(":matchID"),
                        component: Ra,
                      }),
                      m.a.createElement(p.a, {
                        path: O(":serverSteamID"),
                        component: qa,
                      }),
                      m.a.createElement(p.a, {
                        path: D(":leagueID", o.Teams, ":phase"),
                        component: nt,
                      }),
                      m.a.createElement(p.a, {
                        path: D(":leagueID", o.Standings, ":phase"),
                        component: nt,
                      }),
                      m.a.createElement(p.a, {
                        path: D(":leagueID", o.Matchups, ":phase"),
                        component: nt,
                      }),
                      m.a.createElement(p.a, { path: B(), component: st })
                    )
                  ),
                  m.a.createElement(j, null)
                )
              )
            );
          }),
          a
        );
      })(m.a.Component),
      ht = t("2lpH"),
      bt = t.n(ht),
      yt = t("i8i4");
    !(function (e) {
      (e[(e.Unrequested = 0)] = "Unrequested"),
        (e[(e.Pending = 1)] = "Pending"),
        (e[(e.Valid = 2)] = "Valid"),
        (e[(e.Failed = 3)] = "Failed"),
        (e[(e.Rerequest = 4)] = "Rerequest");
    })(Ie || (Ie = {}));
    var kt,
      vt = (function () {
        function e() {
          (this.eState = Ie.Unrequested), (this.nExpirationTime = 0);
        }
        return (
          (e.prototype.getData = function (e, a, t) {
            var r = this,
              o = Date.now() / 1e3,
              n = this.eState == Ie.Pending || this.eState == Ie.Rerequest;
            return (
              o >= this.nExpirationTime &&
                !n &&
                ((this.eState = Ie.Pending),
                a().then(function (n) {
                  if (r.eState == Ie.Rerequest)
                    return (
                      (r.nExpirationTime = 0),
                      (r.eState = Ie.Unrequested),
                      void r.getData(e, a, t)
                    );
                  n.data
                    ? ((r.data = t ? t(n.data) : n.data),
                      (r.nExpirationTime = o + e),
                      (r.eState = Ie.Valid))
                    : ((s.a.GC_DOWN = !0), (r.eState = Ie.Failed));
                })),
              this.data
            );
          }),
          (e.prototype.clearData = function () {
            var e = Date.now() / 1e3;
            (this.eState = Ie.Unrequested),
              (this.data = null),
              (this.nExpirationTime = e);
          }),
          (e.prototype.expireData = function () {
            var e = Date.now() / 1e3;
            this.nExpirationTime = e;
          }),
          (e.prototype.delayNewData = function (e) {
            var a = Date.now() / 1e3;
            this.nExpirationTime = a + e;
          }),
          (e.prototype.rerequestDataIfPending = function () {
            this.eState == Ie.Pending && (this.eState = Ie.Rerequest);
          }),
          Object(n.c)([oa.B], e.prototype, "data", void 0),
          e
        );
      })(),
      ft = (function () {
        function e() {}
        return (
          (e.STATE_INCOMPLETE = 0),
          (e.STATE_LOST = 1),
          (e.STATE_WON = 2),
          (e.STATE_TIED = 3),
          e
        );
      })(),
      Et = (function () {
        function e() {}
        return (
          (e.MAKE_PREDICTION_RESULT_OK = 0),
          (e.MAKE_PREDICTION_RESULT_DOESNT_OWN_EVENT = 1),
          (e.MAKE_PREDICTION_RESULT_BAD_TOURNAMENT = 2),
          (e.MAKE_PREDICTION_RESULT_ALREADY_MADE_PREDICTION = 3),
          (e.MAKE_PREDICTION_RESULT_UNKNOWN_SERIES = 4),
          (e.MAKE_PREDICTION_RESULT_SDO_PROBLEM = 5),
          (e.MAKE_PREDICTION_RESULT_SERIES_STARTED = 6),
          (e.MAKE_PREDICTION_RESULT_INVALID_TEAM = 7),
          (e.MAKE_PREDICTION_RESULT_STALE_ODDS = 8),
          (e.MAKE_PREDICTION_RESULT_NOT_ENOUGH_FUNDS = 9),
          (e.MAKE_PREDICTION_RESULT_BAD_ACCOUNT_ID = 10),
          (e.MAKE_PREDICTION_RESULT_RATE_LIMITED = 11),
          (e.MAKE_PREDICTION_RESULT_BAD_EVENT_ID = 12),
          (e.MAKE_PREDICTION_RESULT_UNKNOWN_WAGER_ODDS = 13),
          (e.MAKE_PREDICTION_RESULT_BAD_PREDICTION_DATA = 14),
          (e.MAKE_PREDICTION_RESULT_NO_WAGER = 15),
          (e.MAKE_PREDICTION_RESULT_INVALID_LEAGUE_ID = 16),
          (e.MAKE_PREDICTION_RESULT_NETWORK_FAILURE = 999),
          e
        );
      })();
    !(function (e) {
      (e[(e.Main = 0)] = "Main"),
        (e[(e.Predictions = 1)] = "Predictions"),
        (e[(e.Fantasy = 2)] = "Fantasy");
    })(kt || (kt = {}));
    var Ct = (function () {
      function e() {
        (this.m_rgStandingsAsync = new vt()),
          (this.m_rgLeagueInfoListAsync = new vt()),
          (this.m_mapLeagueDataAsync = new Map()),
          (this.m_mapLeagueNodeDataAsync = new Map()),
          (this.m_mapLeagueNodeGroupDataAsync = new Map()),
          (this.m_mapSeriesDataAsync = new Map()),
          (this.m_mapMatchMinimalDataAsync = new Map()),
          (this.m_mapMatchDataAsync = new Map()),
          (this.m_mapTeamDataAsync = new Map()),
          (this.m_mapPlayerDataAsync = new Map()),
          (this.m_mapPlayersInRoleDataAsync = new Map()),
          (this.m_rgSearchResultsAsync = new vt()),
          (this.m_rgFavoritesAsync = new vt()),
          (this.m_rgFeedAsync = new vt()),
          (this.m_rgUpcomingMatchesAsync = new vt()),
          (this.m_rgProPredictionStatusAsync = new vt()),
          (this.m_rgFantasyLeagueStatusAsync = new vt()),
          (this.m_rgFantasyLineupsAsync = new Map()),
          (this.m_mapFantasyDayScoreAsync = new Map()),
          (this.m_mapFantasyLeaderboardGlobalAsync = new Map()),
          (this.m_mapFantasyLeaderboardFriendsAsync = new Map()),
          (this.m_mapRealtimeGameStateAsync = new Map()),
          (this.m_mapLeagueResultsAsync = new Map()),
          (this.m_mapProPredictionInProgress = new Map()),
          (this.m_mapProPredictionError = new Map()),
          (this.m_steamPlayerInfo = new vt()),
          (this.m_playerProfileInfo = new vt()),
          (this.m_liveMatches = new vt()),
          (this.m_mapHelpState = new Map()),
          (this.m_selectedPrediction = {
            leagueId: 0,
            leagueNodeId: 0,
            wagerAmount: 0,
            teamPicked: 0,
            payout: 2,
            payoutAmount: 0,
            state: ft.STATE_INCOMPLETE,
          }),
          (this.m_predictionTimestamp = 0),
          (this.m_rgLeagueInfoListAsync.data = {}),
          (this.m_rgLeagueInfoListAsync.data.rgLeagueList = null),
          (this.m_rgLeagueInfoListAsync.data.rgLeagueInfo = new Map()),
          this.m_mapHelpState.set(kt.Main, {
            bHasAlreadyShown: !0,
            sLocalStorage: "helpHasAlreadyShownMain",
          }),
          this.m_mapHelpState.set(kt.Predictions, {
            bHasAlreadyShown: !0,
            sLocalStorage: "helpHasAlreadyShownPredictions",
          }),
          this.m_mapHelpState.set(kt.Fantasy, {
            bHasAlreadyShown: !0,
            sLocalStorage: "helpHasAlreadyShownFantasy",
          });
      }
      return (
        (e.prototype.triggerShowHelpPage = function (e) {
          if (this.m_mapHelpState.has(e)) {
            var a = this.m_mapHelpState.get(e);
            a.bHasAlreadyShown =
              "true" == localStorage.getItem(a.sLocalStorage);
          }
        }),
        (e.prototype.shouldShowHelp = function (e) {
          var a = this.m_mapHelpState.get(e);
          return a && !a.bHasAlreadyShown;
        }),
        (e.prototype.setHelpShown = function (e) {
          var a = this.m_mapHelpState.get(e);
          (a.bHasAlreadyShown = !0),
            localStorage.setItem(a.sLocalStorage, "true");
        }),
        (e.prototype.resetHelpShown = function (e) {
          var a = this.m_mapHelpState.get(e);
          (a.bHasAlreadyShown = !1), localStorage.removeItem(a.sLocalStorage);
        }),
        (e.prototype.doUserGet = function (e, a) {
          return Object(n.b)(this, void 0, void 0, function () {
            return Object(n.e)(this, function (t) {
              switch (t.label) {
                case 0:
                  return (
                    (a.requesting_method = e),
                    (a.requesting_account_id = s.a.ACCOUNT_ID),
                    (a.requesting_session_id = s.a.SESSION_ID),
                    console.log("doUserGet: " + e, a),
                    [
                      4,
                      l.a.get(s.a.BASE_URL + "applications/dpc_get", {
                        params: a,
                      }),
                    ]
                  );
                case 1:
                  return [2, t.sent()];
              }
            });
          });
        }),
        (e.prototype.doAnonymousGet = function (e, a) {
          return Object(n.b)(this, void 0, void 0, function () {
            return Object(n.e)(this, function (t) {
              switch (t.label) {
                case 0:
                  return (
                    console.log("doAnonymousGet: " + e, a),
                    [
                      4,
                      l.a.get(
                        s.a.BASE_URL + "webapi/IDOTA2DPC/" + e + "/v001",
                        { params: a }
                      ),
                    ]
                  );
                case 1:
                  return [2, t.sent()];
              }
            });
          });
        }),
        (e.prototype.doPost = function (e, a) {
          return Object(n.b)(this, void 0, void 0, function () {
            return Object(n.e)(this, function (t) {
              switch (t.label) {
                case 0:
                  return (
                    (a.requesting_account_id = s.a.ACCOUNT_ID),
                    (a.requesting_session_id = s.a.SESSION_ID),
                    (a.requesting_method = e),
                    console.log("doPost: " + e, a),
                    [4, l.a.post(s.a.BASE_URL + "applications/dpc_post", a)]
                  );
                case 1:
                  return [2, t.sent()];
              }
            });
          });
        }),
        (e.prototype.getOrCreateFromMap = function (e, a) {
          return e.has(a) || e.set(a, new vt()), e.get(a);
        }),
        (e.prototype.getSteamPlayerInfo = function () {
          var e = this;
          return this.m_steamPlayerInfo.getData(30, function () {
            return e.doUserGet("GetSteamPlayerInfo", {});
          });
        }),
        (e.prototype.getProfileInfo = function () {
          var e = this;
          return this.m_playerProfileInfo.getData(30, function () {
            return e.doUserGet("GetProfileInfo", {});
          });
        }),
        (e.prototype.getPlayerImageURL = function (e) {
          var a = Math.floor(Date.now() / 18e5);
          return s.a.IMG_URL_BASE + "players/" + e + ".png?t=" + a;
        }),
        (e.prototype.getRealtimeMatchStats = function (e) {
          var a = this,
            t = e;
          return this.getOrCreateFromMap(
            this.m_mapRealtimeGameStateAsync,
            t
          ).getData(15, function () {
            return a.doAnonymousGet("GetRealtimeMatchStats", {
              server_steam_id: e,
            });
          });
        }),
        (e.prototype.getLiveMatches = function (e) {
          var a = this;
          return this.m_liveMatches.getData(10, function () {
            return a.doAnonymousGet("GetLiveGames", {
              league_id: e,
              string_server_steam_id: 1,
            });
          });
        }),
        (e.prototype.setNotification = function (e, a) {
          this.doPost("SetNotificationDisabled", { id: e, disabled: a }),
            a
              ? this.m_playerProfileInfo.data.disabled_notifications.push(e)
              : this.m_playerProfileInfo.data.disabled_notifications.splice(
                  this.m_playerProfileInfo.data.disabled_notifications.indexOf(
                    e
                  ),
                  1
                );
        }),
        (e.prototype.getLeagueInfoInternal = function () {
          var e = this;
          this.m_rgLeagueInfoListAsync.getData(
            300,
            function () {
              return e.doAnonymousGet("GetLeagueInfoList", {
                start_timestamp: 1608883200,
                dpc_only: !0,
              });
            },
            function (e) {
              var a = new Object();
              if (
                ((a.rgLeagueList = []),
                (a.rgLeagueInfo = new Map()),
                e && e.infos)
              )
                for (var t = 0, r = e.infos; t < r.length; t++) {
                  var o = r[t];
                  o.tier >= 3 &&
                    (a.rgLeagueList.push(o),
                    a.rgLeagueInfo.set(o.league_id, o));
                }
              return (
                a.rgLeagueList.sort(function (e, a) {
                  return a.most_recent_activity - e.most_recent_activity;
                }),
                a
              );
            }
          );
        }),
        (e.prototype.getLeagueInfo = function (e) {
          return (
            this.getLeagueInfoInternal(),
            this.m_rgLeagueInfoListAsync.data.rgLeagueInfo.get(e)
          );
        }),
        (e.prototype.getLeagueInfoList = function () {
          return (
            this.getLeagueInfoInternal(),
            this.m_rgLeagueInfoListAsync.data.rgLeagueList
          );
        }),
        (e.prototype.getLeagueResults = function (e) {
          var a = this,
            t = e;
          return this.getOrCreateFromMap(
            this.m_mapLeagueResultsAsync,
            t
          ).getData(30, function () {
            return a.doAnonymousGet("GetLeagueResults", { league_id: e });
          });
        }),
        (e.prototype.getLeagueData = function (e) {
          var a = this,
            t = e;
          return this.getOrCreateFromMap(this.m_mapLeagueDataAsync, t).getData(
            30,
            function () {
              return a.doAnonymousGet("GetLeagueData", { league_id: e });
            }
          );
        }),
        (e.prototype.getLeagueNodeData = function (e, a) {
          var t = this,
            r = (e << 16) | a;
          return this.getOrCreateFromMap(
            this.m_mapLeagueNodeDataAsync,
            r
          ).getData(30, function () {
            return t.doAnonymousGet("GetLeagueNodeData", {
              league_id: e,
              node_id: a,
            });
          });
        }),
        (e.prototype.getLeagueNodeGroupData = function (e, a) {
          var t = this,
            r = (e << 16) | a;
          return this.getOrCreateFromMap(
            this.m_mapLeagueNodeGroupDataAsync,
            r
          ).getData(30, function () {
            return t.doAnonymousGet("GetLeagueNodeGroupData", {
              league_id: e,
              node_group_id: a,
            });
          });
        }),
        (e.prototype.getSeriesData = function (e, a) {
          var t = this,
            r = a;
          return this.getOrCreateFromMap(this.m_mapSeriesDataAsync, r).getData(
            30,
            function () {
              return t.doAnonymousGet("GetLeagueSeries", {
                league_id: e,
                series_id: a,
              });
            }
          );
        }),
        (e.prototype.getMatchMinimal = function (e, a) {
          var t = this,
            r = a;
          return this.getOrCreateFromMap(
            this.m_mapMatchMinimalDataAsync,
            r
          ).getData(300, function () {
            return t.doAnonymousGet("GetLeagueMatchMinimal", {
              league_id: e,
              match_id: a,
            });
          });
        }),
        (e.prototype.getMatch = function (e) {
          var a = this,
            t = e;
          return this.getOrCreateFromMap(this.m_mapMatchDataAsync, t).getData(
            300,
            function () {
              return a.doAnonymousGet("GetDPCMatch", { match_id: e });
            }
          );
        }),
        (e.prototype.getDPCStandings = function () {
          var e = this;
          return this.m_rgStandingsAsync.getData(60, function () {
            return e.doAnonymousGet("GetDPCStandings", {});
          });
        }),
        (e.prototype.getTeamData = function (e) {
          var a = this,
            t = e;
          return this.getOrCreateFromMap(this.m_mapTeamDataAsync, t).getData(
            60,
            function () {
              return a.doAnonymousGet("GetSingleTeamInfo", {
                team_id: e,
                get_dpc_info: 1,
              });
            }
          );
        }),
        (e.prototype.getPlayerData = function (e) {
          var a = this,
            t = e;
          return this.getOrCreateFromMap(this.m_mapPlayerDataAsync, t).getData(
            300,
            function () {
              return a.doAnonymousGet("GetPlayerInfo", { account_id: e });
            }
          );
        }),
        (e.prototype.getPlayersInRole = function (e, a) {
          var t = this,
            r = (e << 16) | a;
          return this.getOrCreateFromMap(
            this.m_mapPlayersInRoleDataAsync,
            r
          ).getData(300, function () {
            return t.doAnonymousGet("GetLeaguePlayers", {
              league_id: e,
              role: a,
            });
          });
        }),
        (e.prototype.requestSearchResults = function (e) {
          var a = this;
          this.m_rgSearchResultsAsync.clearData(),
            this.m_rgSearchResultsAsync.getData(1, function () {
              return a.doAnonymousGet("GetDPCSearchResults", { search: e });
            });
        }),
        (e.prototype.getSearchResults = function (e) {
          return this.m_rgSearchResultsAsync.data;
        }),
        (e.prototype.getFavorites = function () {
          var e = this;
          return this.m_rgFavoritesAsync.getData(5, function () {
            return e.doUserGet("GetDPCFavorites", {});
          });
        }),
        (e.prototype.toggleFavorite = function (e, a, t, r) {
          var o = this;
          this.m_rgFavoritesAsync.delayNewData(2),
            i.g_App.doPost("ToggleDPCFavorite", {
              favorite_type: e,
              favorite_id: a,
            }),
            this.isFavorite(e, a)
              ? this.m_rgFavoritesAsync.data.types[e].favorites.forEach(
                  function (t, r) {
                    t.id == a &&
                      o.m_rgFavoritesAsync.data.types[e].favorites.splice(r, 1);
                  }
                )
              : this.m_rgFavoritesAsync.data.types[e].favorites.push({
                  id: a,
                  name: t,
                  url: r,
                });
        }),
        (e.prototype.isFavorite = function (e, a) {
          var t = this,
            r = this.m_rgFavoritesAsync.getData(30, function () {
              return t.doUserGet("GetDPCFavorites", {});
            });
          if (r)
            for (var o = 0, n = r.types[e].favorites; o < n.length; o++) {
              if (n[o].id == a) return !0;
            }
          return !1;
        }),
        (e.prototype.getFeed = function () {
          var e = this;
          return this.m_rgFeedAsync.getData(30, function () {
            return e.doUserGet("GetDPCFeedData", {});
          });
        }),
        (e.prototype.getRecentAndUpcomingMatches = function () {
          var e = this;
          return this.m_rgUpcomingMatchesAsync.getData(
            30,
            function () {
              return e.doAnonymousGet("GetRecentAndUpcomingMatches", {});
            },
            function (a) {
              if (
                0 != e.m_selectedPrediction.leagueId &&
                0 != e.m_selectedPrediction.leagueNodeId
              ) {
                var t = a;
                if (t)
                  for (var r = 0; r < t.tournaments.length; ++r) {
                    var o = t.tournaments[r];
                    if (o.id == e.m_selectedPrediction.leagueId) {
                      if (!o.matches) break;
                      for (var n = 0; n < o.matches.length; ++n) {
                        var c = o.matches[n];
                        if (c.nodeId == e.m_selectedPrediction.leagueNodeId) {
                          (e.m_selectedPrediction.payout =
                            e.m_selectedPrediction.teamPicked ==
                            c.teams[0].teamId
                              ? c.teams[0].payout
                              : c.teams[1].payout),
                            (e.m_selectedPrediction.payoutAmount = Math.floor(
                              e.m_selectedPrediction.payout *
                                e.m_selectedPrediction.wagerAmount
                            ));
                          break;
                        }
                      }
                      break;
                    }
                  }
              }
              return a;
            }
          );
        }),
        (e.prototype.getRecentAndUpcomingMatchesRefreshInterval = function () {
          return 20;
        }),
        (e.prototype.getProPredictionStatus = function () {
          var e = this;
          return this.m_rgProPredictionStatusAsync.getData(1, function () {
            return e.doUserGet("GetPredictionStatus", {
              event_id: s.a.EVENT_ID_PLUS_SUBSCRIPTION,
            });
          });
        }),
        (e.prototype.rerequestProPredictionStatus = function () {
          this.m_rgProPredictionStatusAsync.rerequestDataIfPending();
        }),
        (e.prototype.getProPredictionWagerTokens = function () {
          var e = this.getProPredictionStatus();
          return e && e.TokensLeft ? e.TokensLeft : 0;
        }),
        (e.prototype.getProPredictionMaxWager = function () {
          var e = this.getProPredictionStatus();
          return e && e.MaxWagerAmount ? e.MaxWagerAmount : 0;
        }),
        (e.prototype.getProPrediction = function (e, a) {
          var t = this.getProPredictionStatus();
          if (!t || !t.predictions) return null;
          for (
            var r = {
                leagueId: e,
                leagueNodeId: a,
                wagerAmount: 0,
                teamPicked: 0,
                payout: 1,
                payoutAmount: 0,
                state: ft.STATE_INCOMPLETE,
              },
              o = 0;
            o < t.predictions.length;
            ++o
          ) {
            var n = t.predictions[o];
            if (n.tournamentId == e && n.nodeId == a) {
              (r.wagerAmount = n.tokensUsed),
                (r.teamPicked = n.teamId),
                (r.payout = n.payoutOdds),
                (r.payoutAmount = n.payoutAmount),
                (r.state = n.state);
              break;
            }
          }
          return r;
        }),
        (e.prototype.setProPredictionError = function (e, a, t) {
          var r = (e << 16) | a;
          this.m_mapProPredictionError.set(r, t);
        }),
        (e.prototype.getProPredictionError = function (e, a) {
          var t = (e << 16) | a;
          return this.m_mapProPredictionError.has(t)
            ? this.m_mapProPredictionError.get(t)
            : null;
        }),
        (e.prototype.clearProPredictionError = function (e, a) {
          var t = (e << 16) | a;
          this.m_mapProPredictionError.has(t) &&
            this.m_mapProPredictionError.delete(t);
        }),
        (e.prototype.selectProPredictionToMake = function (e, a, t, r, o) {
          this.m_selectedPrediction.leagueId != e ||
          this.m_selectedPrediction.leagueNodeId != a ||
          this.m_selectedPrediction.teamPicked != t
            ? ((this.m_selectedPrediction = {
                leagueId: e,
                leagueNodeId: a,
                teamPicked: t,
                wagerAmount: 0,
                payout: r,
                payoutAmount: 0,
                state: ft.STATE_INCOMPLETE,
              }),
              (this.m_predictionTimestamp = o))
            : ((this.m_selectedPrediction = {
                leagueId: 0,
                leagueNodeId: 0,
                teamPicked: 0,
                wagerAmount: 0,
                payout: 2,
                payoutAmount: 0,
                state: ft.STATE_INCOMPLETE,
              }),
              (this.m_predictionTimestamp = 0));
        }),
        (e.prototype.clearProPredictionToMake = function () {
          this.selectProPredictionToMake(0, 0, 0, 0, 0);
        }),
        (e.prototype.setSelectedPredictionWagerAmount = function (e) {
          (this.m_selectedPrediction.wagerAmount = e),
            (this.m_selectedPrediction.payoutAmount = Math.floor(
              e * this.m_selectedPrediction.payout
            ));
        }),
        (e.prototype.getSelectedProPrediction = function () {
          return this.m_selectedPrediction;
        }),
        (e.prototype.isProPredictionInProgress = function (e, a) {
          var t = (e << 16) | a;
          return (
            !!this.m_mapProPredictionInProgress.has(t) &&
            this.m_mapProPredictionInProgress.get(t)
          );
        }),
        (e.prototype.makeSelectedProPrediction = function () {
          return Object(n.b)(this, void 0, void 0, function () {
            var e, a, t, r, o;
            return Object(n.e)(this, function (n) {
              switch (n.label) {
                case 0:
                  if (
                    0 == this.m_selectedPrediction.leagueId ||
                    0 == this.m_selectedPrediction.leagueNodeId ||
                    0 == this.m_selectedPrediction.teamPicked ||
                    0 == this.m_selectedPrediction.wagerAmount
                  )
                    return this.clearProPredictionToMake(), [2];
                  (e =
                    (this.m_selectedPrediction.leagueId << 16) |
                    this.m_selectedPrediction.leagueNodeId),
                    (n.label = 1);
                case 1:
                  return (
                    n.trys.push([1, 3, , 4]),
                    this.m_mapProPredictionInProgress.set(e, !0),
                    (a = this.m_selectedPrediction),
                    (t = this.m_predictionTimestamp),
                    [
                      4,
                      this.doPost("SetUpcomingMatchPredictions", {
                        event_id: s.a.EVENT_ID_PLUS_SUBSCRIPTION,
                        league_id: a.leagueId,
                        node_id: a.leagueNodeId,
                        team_id: a.teamPicked,
                        wager_amount: a.wagerAmount,
                        wager_timestamp: t,
                      }),
                    ]
                  );
                case 2:
                  return (
                    (r = n.sent()).data && 200 == r.data.resultCode
                      ? (this.m_rgProPredictionStatusAsync.data.predictions.push(
                          {
                            tournamentId: a.leagueId,
                            nodeId: a.leagueNodeId,
                            teamId: a.teamPicked,
                            tokensUsed: a.wagerAmount,
                            payoutOdds: a.payout,
                            payoutAmount: a.payoutAmount,
                            state: ft.STATE_INCOMPLETE,
                          }
                        ),
                        (this.m_rgProPredictionStatusAsync.data.TokensLeft =
                          this.m_rgProPredictionStatusAsync.data.TokensLeft -
                          a.wagerAmount),
                        this.rerequestProPredictionStatus())
                      : this.setProPredictionError(
                          a.leagueId,
                          a.leagueNodeId,
                          r.data
                            ? r.data.errorCode
                            : Et.MAKE_PREDICTION_RESULT_NETWORK_FAILURE
                        ),
                    this.m_mapProPredictionInProgress.set(e, !1),
                    this.clearProPredictionToMake(),
                    [3, 4]
                  );
                case 3:
                  return (
                    (o = n.sent()),
                    this.m_mapProPredictionInProgress.set(e, !1),
                    console.error(o),
                    [3, 4]
                  );
                case 4:
                  return [2];
              }
            });
          });
        }),
        (e.prototype.getFantasyLeagueStatus = function () {
          var e = this;
          return this.m_rgFantasyLeagueStatusAsync.getData(30, function () {
            return e.doUserGet("GetFantasyDPCLeagueStatus", {});
          });
        }),
        (e.prototype.getFantasyLineup = function (e) {
          var a = this,
            t = this.getOrCreateFromMap(this.m_rgFantasyLineupsAsync, e);
          return t.getData(
            30,
            function () {
              return a.doUserGet("GetFantasyDPCLineup", { league_id: e });
            },
            function (e) {
              var a = {
                rgRosterSlots: [
                  {
                    nAccountID: 0,
                    strName: "",
                    strTeamName: "",
                    strTeamLogoURL: "",
                    bLocked: !1,
                    bNeedsSubmission: !1,
                    bInitialized: !1,
                  },
                  {
                    nAccountID: 0,
                    strName: "",
                    strTeamName: "",
                    strTeamLogoURL: "",
                    bLocked: !1,
                    bNeedsSubmission: !1,
                    bInitialized: !1,
                  },
                  {
                    nAccountID: 0,
                    strName: "",
                    strTeamName: "",
                    strTeamLogoURL: "",
                    bLocked: !1,
                    bNeedsSubmission: !1,
                    bInitialized: !1,
                  },
                  {
                    nAccountID: 0,
                    strName: "",
                    strTeamName: "",
                    strTeamLogoURL: "",
                    bLocked: !1,
                    bNeedsSubmission: !1,
                    bInitialized: !1,
                  },
                  {
                    nAccountID: 0,
                    strName: "",
                    strTeamName: "",
                    strTeamLogoURL: "",
                    bLocked: !1,
                    bNeedsSubmission: !1,
                    bInitialized: !1,
                  },
                  {
                    nAccountID: 0,
                    strName: "",
                    strTeamName: "",
                    strTeamLogoURL: "",
                    bLocked: !1,
                    bNeedsSubmission: !1,
                    bInitialized: !1,
                  },
                  {
                    nAccountID: 0,
                    strName: "",
                    strTeamName: "",
                    strTeamLogoURL: "",
                    bLocked: !1,
                    bNeedsSubmission: !1,
                    bInitialized: !1,
                  },
                  {
                    nAccountID: 0,
                    strName: "",
                    strTeamName: "",
                    strTeamLogoURL: "",
                    bLocked: !1,
                    bNeedsSubmission: !1,
                    bInitialized: !1,
                  },
                  {
                    nAccountID: 0,
                    strName: "",
                    strTeamName: "",
                    strTeamLogoURL: "",
                    bLocked: !1,
                    bNeedsSubmission: !1,
                    bInitialized: !1,
                  },
                  {
                    nAccountID: 0,
                    strName: "",
                    strTeamName: "",
                    strTeamLogoURL: "",
                    bLocked: !1,
                    bNeedsSubmission: !1,
                    bInitialized: !1,
                  },
                ],
                bRosterNeedsSubmission: !1,
              };
              t.data ? (a = t.data) : (t.data = a);
              for (var r = 0; r < 10; r++)
                t.data.rgRosterSlots[r].bInitialized ||
                  (a.rgRosterSlots[r] = {
                    nAccountID: e.slots[r].account_id,
                    strName: e.slots[r].name,
                    strTeamName: e.slots[r].team_name,
                    strTeamLogoURL: e.slots[r].team_logo_url,
                    bLocked: e.slots[r] && 0 != e.slots[r].account_id,
                    bNeedsSubmission: !1,
                    bInitialized: !0,
                  });
              return (
                (a.bRosterNeedsSubmission = t.data.bRosterNeedsSubmission), a
              );
            }
          );
        }),
        (e.prototype.setFantasyRosterSlot = function (e, a, t, r, o) {
          var n = this.getOrCreateFromMap(this.m_rgFantasyLineupsAsync, e);
          (n.data.rgRosterSlots[t] = {
            nAccountID: a,
            strName: r,
            strTeamLogoURL: o,
            bLocked: !1,
            bNeedsSubmission: !0,
            bInitialized: !0,
          }),
            (n.data.bRosterNeedsSubmission = !0);
        }),
        (e.prototype.isFantasyRosterSlotLocked = function (e, a) {
          var t = this.getOrCreateFromMap(this.m_rgFantasyLineupsAsync, e);
          return console.log(a), t.data.rgRosterSlots[a].bLocked;
        }),
        (e.prototype.clearFantasyRosterSlot = function (e, a) {
          var t = this.getOrCreateFromMap(this.m_rgFantasyLineupsAsync, e);
          t.data.rgRosterSlots[a] = {
            nAccountID: 0,
            strName: "",
            strTeamLogoURL: "",
            bLocked: !1,
            bNeedsSubmission: !1,
            bInitialized: !0,
          };
          for (var r = !1, o = 0, n = t.data.rgRosterSlots; o < n.length; o++) {
            if (n[o].bNeedsSubmission) {
              r = !0;
              break;
            }
          }
          t.data.bRosterNeedsSubmission = r;
        }),
        (e.prototype.submitFantasyLineup = function (e) {
          return Object(n.b)(this, void 0, void 0, function () {
            var a, t, r, o;
            return Object(n.e)(this, function (n) {
              switch (n.label) {
                case 0:
                  for (
                    this.m_rgFantasyLeagueStatusAsync.expireData(),
                      (a = this.getOrCreateFromMap(
                        this.m_rgFantasyLineupsAsync,
                        e
                      )).expireData(),
                      t = 0,
                      r = a.data.rgRosterSlots;
                    t < r.length;
                    t++
                  )
                    (o = r[t]).bNeedsSubmission &&
                      ((o.bNeedsSubmission = !1), (o.bLocked = !0));
                  return (
                    (a.data.bRosterNeedsSubmission = !1),
                    [
                      4,
                      this.doPost("SetFantasyDPCLineup", {
                        league_id: e,
                        player_account_id_0: a.data.rgRosterSlots[0].nAccountID,
                        player_account_id_1: a.data.rgRosterSlots[1].nAccountID,
                        player_account_id_2: a.data.rgRosterSlots[2].nAccountID,
                        player_account_id_3: a.data.rgRosterSlots[3].nAccountID,
                        player_account_id_4: a.data.rgRosterSlots[4].nAccountID,
                        player_account_id_5: a.data.rgRosterSlots[5].nAccountID,
                        player_account_id_6: a.data.rgRosterSlots[6].nAccountID,
                        player_account_id_7: a.data.rgRosterSlots[7].nAccountID,
                        player_account_id_8: a.data.rgRosterSlots[8].nAccountID,
                        player_account_id_9: a.data.rgRosterSlots[9].nAccountID,
                      }),
                    ]
                  );
                case 1:
                  return [2, n.sent()];
              }
            });
          });
        }),
        (e.prototype.getFantasyDayScore = function (e, a, t) {
          var r = this,
            o = bt.a.fromInt(e).shiftLeft(48).or(bt.a.fromInt(a)).toString();
          return this.getOrCreateFromMap(
            this.m_mapFantasyDayScoreAsync,
            o
          ).getData(60, function () {
            return r.doUserGet("GetFantasyDPCDayScore", {
              league_id: e,
              timestamp: a,
            });
          });
        }),
        (e.prototype.getFantasyFriendLeaderboard = function (e, a) {
          var t = this;
          return this.getOrCreateFromMap(
            this.m_mapFantasyLeaderboardFriendsAsync,
            e
          ).getData(300, function () {
            return t.doUserGet("GetFantasyDPCFriendLeaderboard", {
              league_id: e,
            });
          });
        }),
        (e.prototype.getFantasyGlobalLeaderboard = function (e, a) {
          var t = this;
          return this.getOrCreateFromMap(
            this.m_mapFantasyLeaderboardGlobalAsync,
            e
          ).getData(300, function () {
            return t.doAnonymousGet("GetFantasyDPCGlobalLeaderboard", {
              league_id: e,
            });
          });
        }),
        (e.prototype.Init = function () {
          yt.render(
            g.createElement(ut, { app: this }),
            document.getElementById("dpc_root")
          );
        }),
        Object(n.c)(
          [oa.B],
          e.prototype,
          "m_mapProPredictionInProgress",
          void 0
        ),
        Object(n.c)([oa.B], e.prototype, "m_mapProPredictionError", void 0),
        Object(n.c)([oa.B], e.prototype, "m_mapHelpState", void 0),
        Object(n.c)([oa.B], e.prototype, "m_selectedPrediction", void 0),
        Object(n.c)([oa.B], e.prototype, "m_predictionTimestamp", void 0),
        e
      );
    })();
  },
  W8ih: function (e, a, t) {
    e.exports = {
      colorBlack: "helpoverlay_colorBlack_2La3h",
      colorWhite: "helpoverlay_colorWhite_3sD9g",
      colorDarkGrey: "helpoverlay_colorDarkGrey__6kcq",
      colorGrey: "helpoverlay_colorGrey_bRIhm",
      colorLightGrey: "helpoverlay_colorLightGrey_2WHtZ",
      colorOrange: "helpoverlay_colorOrange_FLjUJ",
      colorRed: "helpoverlay_colorRed_2BN3M",
      colorAqua: "helpoverlay_colorAqua_2uYTY",
      colorBlue: "helpoverlay_colorBlue_2fbI7",
      colorBrightRed: "helpoverlay_colorBrightRed_3gJma",
      colorBrightBlue: "helpoverlay_colorBrightBlue_3Um0v",
      colorBrightOrange: "helpoverlay_colorBrightOrange_1zj19",
      colorBrightPurple: "helpoverlay_colorBrightPurple_3IqU9",
      colorBrightYellow: "helpoverlay_colorBrightYellow_36nUN",
      colorBrightGreen: "helpoverlay_colorBrightGreen_zwRQT",
      colorBrightGrey: "helpoverlay_colorBrightGrey_3ZbkP",
      backgroundColorBlack: "helpoverlay_backgroundColorBlack_2DYwX",
      backgroundColorDarkGrey: "helpoverlay_backgroundColorDarkGrey_2E__3",
      backgroundColorLightGrey: "helpoverlay_backgroundColorLightGrey_OtxJQ",
      backgroundColorWhite: "helpoverlay_backgroundColorWhite_1lBip",
      backgroundColorOrange: "helpoverlay_backgroundColorOrange_JigMb",
      backgroundColorRed: "helpoverlay_backgroundColorRed_3sNLw",
      backgroundColorAqua: "helpoverlay_backgroundColorAqua_3JA58",
      backgroundColorBlue: "helpoverlay_backgroundColorBlue_1IYns",
      backgroundColorGrey: "helpoverlay_backgroundColorGrey_1GLs4",
      backgroundColorBrightRed: "helpoverlay_backgroundColorBrightRed_1TQyd",
      backgroundColorBrightBlue: "helpoverlay_backgroundColorBrightBlue_2c23U",
      backgroundColorBrightOrange:
        "helpoverlay_backgroundColorBrightOrange_249ci",
      backgroundColorBrightPurple:
        "helpoverlay_backgroundColorBrightPurple_GPzBX",
      backgroundColorBrightYellow:
        "helpoverlay_backgroundColorBrightYellow_ogNFc",
      backgroundColorBrightGreen:
        "helpoverlay_backgroundColorBrightGreen_3cDSl",
      backgroundColorBrightGrey: "helpoverlay_backgroundColorBrightGrey_e-eO4",
      HelpOverlay: "helpoverlay_HelpOverlay_1XKH7",
      ShowBackground: "helpoverlay_ShowBackground_3l8LA",
      HelpContainer: "helpoverlay_HelpContainer_2Aw2E",
      Show: "helpoverlay_Show_19X-o",
      HelpPages: "helpoverlay_HelpPages_1n1SM",
      HelpPage: "helpoverlay_HelpPage_3t_Fd",
      PageLeft: "helpoverlay_PageLeft_1xXcf",
      PageRight: "helpoverlay_PageRight_1yNC7",
      PageSelector: "helpoverlay_PageSelector_1Z6Rr",
      PageSelectorBottom: "helpoverlay_PageSelectorBottom_cn2im",
      Pips: "helpoverlay_Pips_lPFA4",
      Pip: "helpoverlay_Pip_3s9Jc",
      Selected: "helpoverlay_Selected_iN0sj",
      DismissSpacer: "helpoverlay_DismissSpacer_3keI_",
      Dismiss: "helpoverlay_Dismiss_H9o1h",
      FullHeightWidth: "helpoverlay_FullHeightWidth_25Y4T",
      HelpTop: "helpoverlay_HelpTop_1gcOc",
      HelpBottom: "helpoverlay_HelpBottom_XqjhY",
      BottomHeader: "helpoverlay_BottomHeader_Ut-D7",
      TwoColumn: "helpoverlay_TwoColumn_1Igd2",
      Column: "helpoverlay_Column_dlWg-",
      BottomText: "helpoverlay_BottomText_3aubZ",
      Caps: "helpoverlay_Caps_2-NVb",
      Small: "helpoverlay_Small_1DtMA",
      SubHeader: "helpoverlay_SubHeader_1n6lk",
      Gold: "helpoverlay_Gold_4jZSm",
      Silver: "helpoverlay_Silver_3L2tF",
      Bronze: "helpoverlay_Bronze_2Lzmd",
      Spacer: "helpoverlay_Spacer_OSAYp",
    };
  },
  Zeag: function (e, a, t) {
    e.exports = {
      colorBlack: "seriespage_colorBlack_313Ox",
      colorWhite: "seriespage_colorWhite_jwFEQ",
      colorDarkGrey: "seriespage_colorDarkGrey_16Bl5",
      colorGrey: "seriespage_colorGrey_1XBsu",
      colorLightGrey: "seriespage_colorLightGrey_3Xn-6",
      colorOrange: "seriespage_colorOrange_2UTcO",
      colorRed: "seriespage_colorRed_3sDul",
      colorAqua: "seriespage_colorAqua_2b2Z7",
      colorBlue: "seriespage_colorBlue_C4Tp8",
      colorBrightRed: "seriespage_colorBrightRed_31jUt",
      colorBrightBlue: "seriespage_colorBrightBlue_1YLDQ",
      colorBrightOrange: "seriespage_colorBrightOrange_1Boic",
      colorBrightPurple: "seriespage_colorBrightPurple_3LmNC",
      colorBrightYellow: "seriespage_colorBrightYellow_TnWOH",
      colorBrightGreen: "seriespage_colorBrightGreen_1gToo",
      colorBrightGrey: "seriespage_colorBrightGrey_3DFVN",
      backgroundColorBlack: "seriespage_backgroundColorBlack_3v4w1",
      backgroundColorDarkGrey: "seriespage_backgroundColorDarkGrey_VBJSc",
      backgroundColorLightGrey: "seriespage_backgroundColorLightGrey_26vCf",
      backgroundColorWhite: "seriespage_backgroundColorWhite_m_X7J",
      backgroundColorOrange: "seriespage_backgroundColorOrange_ySsy7",
      backgroundColorRed: "seriespage_backgroundColorRed_31R57",
      backgroundColorAqua: "seriespage_backgroundColorAqua_2NoYl",
      backgroundColorBlue: "seriespage_backgroundColorBlue_2j9qv",
      backgroundColorGrey: "seriespage_backgroundColorGrey_2tCuQ",
      backgroundColorBrightRed: "seriespage_backgroundColorBrightRed_2g8zd",
      backgroundColorBrightBlue: "seriespage_backgroundColorBrightBlue_3Au_U",
      backgroundColorBrightOrange:
        "seriespage_backgroundColorBrightOrange_22SK9",
      backgroundColorBrightPurple:
        "seriespage_backgroundColorBrightPurple_2Qk81",
      backgroundColorBrightYellow:
        "seriespage_backgroundColorBrightYellow_3e7Nu",
      backgroundColorBrightGreen: "seriespage_backgroundColorBrightGreen_2cG0Q",
      backgroundColorBrightGrey: "seriespage_backgroundColorBrightGrey_2gtt_",
      SeriesPage: "seriespage_SeriesPage_2t0IG",
      Loading: "seriespage_Loading_1mDda",
      Body: "seriespage_Body_14uV9",
      Header: "seriespage_Header_QhaGK",
      TopIcons: "seriespage_TopIcons_1Twx-",
      BackArrow: "seriespage_BackArrow_3NcRJ",
      Dots: "seriespage_Dots_2jQ2C",
      SeriesInfo: "seriespage_SeriesInfo_3Pop-",
      Team: "seriespage_Team_1rLXa",
      Logo: "seriespage_Logo_QQRPJ",
      Name: "seriespage_Name_37jqj",
      Score: "seriespage_Score_3Sy9r",
      Scrollable: "seriespage_Scrollable_ZuNkn",
      Predictions: "seriespage_Predictions_znxG4",
      TopRow: "seriespage_TopRow_1KVDb",
      TeamInfo: "seriespage_TeamInfo_1bOqm",
      Left: "seriespage_Left_3mP9a",
      Right: "seriespage_Right_vWA7d",
      Bars: "seriespage_Bars_1cq-t",
      Bar: "seriespage_Bar_2xXUR",
      Percentages: "seriespage_Percentages_RC_g9",
      Percentage: "seriespage_Percentage_3W3gR",
      Winner: "seriespage_Winner_3HAa8",
      WinString: "seriespage_WinString_CV2SF",
      Predict: "seriespage_Predict_1vM95",
      TopStats: "seriespage_TopStats_cUX1p",
      StatLine: "seriespage_StatLine_2xb5_",
      Text: "seriespage_Text_2Eal3",
      PlayerLink: "seriespage_PlayerLink_1L7Wy",
      PlayerName: "seriespage_PlayerName_2gG6o",
      Player: "seriespage_Player_3bOlY",
      Hero: "seriespage_Hero_B85I3",
      Value: "seriespage_Value_2IXVb",
      Kills: "seriespage_Kills_3KihN",
      MatchList: "seriespage_MatchList_2fifS",
      Title: "seriespage_Title_z3nis",
      TeamRosters: "seriespage_TeamRosters_1ocat",
      TeamRosterTeams: "seriespage_TeamRosterTeams_1_9Jv",
      TeamRoster: "seriespage_TeamRoster_2Gkgg",
      Image: "seriespage_Image_5CHPR",
      Hide: "seriespage_Hide_1wQ9k",
      ProName: "seriespage_ProName_24RB2",
      RealName: "seriespage_RealName_2ZB2Z",
    };
  },
  cxnq: function (e, a, t) {
    e.exports = {
      colorBlack: "playerpage_colorBlack_1mZK8",
      colorWhite: "playerpage_colorWhite_1Joih",
      colorDarkGrey: "playerpage_colorDarkGrey_3_he1",
      colorGrey: "playerpage_colorGrey_Ivl_f",
      colorLightGrey: "playerpage_colorLightGrey_b0Sr5",
      colorOrange: "playerpage_colorOrange_39067",
      colorRed: "playerpage_colorRed_3pKkG",
      colorAqua: "playerpage_colorAqua_pV-uM",
      colorBlue: "playerpage_colorBlue_7Lrkt",
      colorBrightRed: "playerpage_colorBrightRed_3q-bT",
      colorBrightBlue: "playerpage_colorBrightBlue_hUpi0",
      colorBrightOrange: "playerpage_colorBrightOrange_1oD6v",
      colorBrightPurple: "playerpage_colorBrightPurple_12W0f",
      colorBrightYellow: "playerpage_colorBrightYellow_2lylI",
      colorBrightGreen: "playerpage_colorBrightGreen_dCeEM",
      colorBrightGrey: "playerpage_colorBrightGrey_eLCff",
      backgroundColorBlack: "playerpage_backgroundColorBlack_o_qlI",
      backgroundColorDarkGrey: "playerpage_backgroundColorDarkGrey_2pNC0",
      backgroundColorLightGrey: "playerpage_backgroundColorLightGrey_2xCkN",
      backgroundColorWhite: "playerpage_backgroundColorWhite_A2a29",
      backgroundColorOrange: "playerpage_backgroundColorOrange_1U5yS",
      backgroundColorRed: "playerpage_backgroundColorRed_20pfz",
      backgroundColorAqua: "playerpage_backgroundColorAqua_1P1n5",
      backgroundColorBlue: "playerpage_backgroundColorBlue_4qlbH",
      backgroundColorGrey: "playerpage_backgroundColorGrey_DHiSD",
      backgroundColorBrightRed: "playerpage_backgroundColorBrightRed_2HLPA",
      backgroundColorBrightBlue: "playerpage_backgroundColorBrightBlue_37lI3",
      backgroundColorBrightOrange:
        "playerpage_backgroundColorBrightOrange_1z_9p",
      backgroundColorBrightPurple:
        "playerpage_backgroundColorBrightPurple_3irT6",
      backgroundColorBrightYellow:
        "playerpage_backgroundColorBrightYellow_3KS0u",
      backgroundColorBrightGreen: "playerpage_backgroundColorBrightGreen_uGuU5",
      backgroundColorBrightGrey: "playerpage_backgroundColorBrightGrey_1hzeP",
      PlayerPage: "playerpage_PlayerPage_3t5OX",
      Contents: "playerpage_Contents_2JZvK",
      ImageContainer: "playerpage_ImageContainer_eC7zH",
      PlayerImageContainer: "playerpage_PlayerImageContainer_1iG6y",
      TeamLogoContainer: "playerpage_TeamLogoContainer_hvwZz",
      PlayerName: "playerpage_PlayerName_3tuIt",
      SubsectionHeader: "playerpage_SubsectionHeader_3ahhE",
      InfoStat: "playerpage_InfoStat_3DQtr",
      Spacer: "playerpage_Spacer_3fvE7",
      CountryFlag: "playerpage_CountryFlag_15-_F",
      AchievementsList: "playerpage_AchievementsList_2fJms",
      AchievementContainer: "playerpage_AchievementContainer_3pmkD",
      LeagueImage: "playerpage_LeagueImage_3MjJn",
      PrevTeamContainer: "playerpage_PrevTeamContainer_2Ii3k",
      PrevTeamLogoContainer: "playerpage_PrevTeamLogoContainer_f0qZG",
      TeamDates: "playerpage_TeamDates_3mctF",
      Loading: "playerpage_Loading_1vbyx",
      InvalidPlayer: "playerpage_InvalidPlayer_2whY8",
    };
  },
  fdZV: function (e, a, t) {
    e.exports = {
      colorBlack: "predictioncard_colorBlack_M1W3N",
      colorWhite: "predictioncard_colorWhite_GUbge",
      colorDarkGrey: "predictioncard_colorDarkGrey_3H1ia",
      colorGrey: "predictioncard_colorGrey_hTasv",
      colorLightGrey: "predictioncard_colorLightGrey_32dZK",
      colorOrange: "predictioncard_colorOrange_2fBL4",
      colorRed: "predictioncard_colorRed_3YLa-",
      colorAqua: "predictioncard_colorAqua_guJmD",
      colorBlue: "predictioncard_colorBlue_1mxby",
      colorBrightRed: "predictioncard_colorBrightRed_1DxsA",
      colorBrightBlue: "predictioncard_colorBrightBlue_3qnN9",
      colorBrightOrange: "predictioncard_colorBrightOrange_3wTtK",
      colorBrightPurple: "predictioncard_colorBrightPurple_1tm_u",
      colorBrightYellow: "predictioncard_colorBrightYellow_3Rqel",
      colorBrightGreen: "predictioncard_colorBrightGreen_3VPwB",
      colorBrightGrey: "predictioncard_colorBrightGrey_1K61m",
      backgroundColorBlack: "predictioncard_backgroundColorBlack_21OIT",
      backgroundColorDarkGrey: "predictioncard_backgroundColorDarkGrey_3SD67",
      backgroundColorLightGrey: "predictioncard_backgroundColorLightGrey_1uzBi",
      backgroundColorWhite: "predictioncard_backgroundColorWhite_3TF5N",
      backgroundColorOrange: "predictioncard_backgroundColorOrange_1eiJ2",
      backgroundColorRed: "predictioncard_backgroundColorRed_TQIh8",
      backgroundColorAqua: "predictioncard_backgroundColorAqua_KA0ck",
      backgroundColorBlue: "predictioncard_backgroundColorBlue_15LKT",
      backgroundColorGrey: "predictioncard_backgroundColorGrey_2PgCN",
      backgroundColorBrightRed: "predictioncard_backgroundColorBrightRed_3Itqc",
      backgroundColorBrightBlue:
        "predictioncard_backgroundColorBrightBlue_1zwdC",
      backgroundColorBrightOrange:
        "predictioncard_backgroundColorBrightOrange_gJkxy",
      backgroundColorBrightPurple:
        "predictioncard_backgroundColorBrightPurple_p7XvR",
      backgroundColorBrightYellow:
        "predictioncard_backgroundColorBrightYellow_2QMhY",
      backgroundColorBrightGreen:
        "predictioncard_backgroundColorBrightGreen_3xesO",
      backgroundColorBrightGrey:
        "predictioncard_backgroundColorBrightGrey_1-O4l",
      card: "predictioncard_card_3V0Ve",
      content: "predictioncard_content_og1MN",
      image: "predictioncard_image_gxwbn",
      icon: "predictioncard_icon_3rc0h",
      news: "predictioncard_news_2-MvK",
      withIcon: "predictioncard_withIcon_JWcnI",
      imageCard: "predictioncard_imageCard_3VvOH",
      short: "predictioncard_short_pakbT",
      tournament: "predictioncard_tournament_fyq6Z",
      type: "predictioncard_type_3LS5C",
      title: "predictioncard_title_39z0I",
      details: "predictioncard_details_2mBmV",
      location: "predictioncard_location_ND_9M",
      prize: "predictioncard_prize_yyXUN",
      Dates: "predictioncard_Dates_3WuiN",
      SeriesCard: "predictioncard_SeriesCard_3qBsu",
      Columns: "predictioncard_Columns_3tulc",
      Team: "predictioncard_Team_30Jdi",
      TeamName: "predictioncard_TeamName_2NFHS",
      Details: "predictioncard_Details_1Bn3e",
      GameOrFinal: "predictioncard_GameOrFinal_1E6TW",
      Score: "predictioncard_Score_joV5H",
      ScoreValue: "predictioncard_ScoreValue_1_Ma-",
      ScoreSeparator: "predictioncard_ScoreSeparator_1PBUP",
      Time: "predictioncard_Time_NCROS",
      Timestamp: "predictioncard_Timestamp_1Pkaa",
      ThrobberSpacing: "predictioncard_ThrobberSpacing_3UvlR",
      UpcomingSeriesCard: "predictioncard_UpcomingSeriesCard_1xfnc",
      LiveMatchCard: "predictioncard_LiveMatchCard_1Qtp0",
      LeagueLogo: "predictioncard_LeagueLogo_2xEK8",
      Center: "predictioncard_Center_IaN33",
      BestOf: "predictioncard_BestOf_3L0ia",
      MatchCard: "predictioncard_MatchCard_aQ6QT",
      Game: "predictioncard_Game_1oiyu",
      TournamentResultsCard: "predictioncard_TournamentResultsCard_pHAM1",
      Content: "predictioncard_Content_iokxV",
      TopDown: "predictioncard_TopDown_1uCRS",
      Generic: "predictioncard_Generic_1AF47",
      TeamInfo: "predictioncard_TeamInfo_3rzKF",
      TeamLogo: "predictioncard_TeamLogo_2zxyc",
      Text: "predictioncard_Text_1GAAf",
      Earnings: "predictioncard_Earnings_2EO-F",
      Points: "predictioncard_Points_2_Zq0",
      Winnings: "predictioncard_Winnings_6hoXb",
      TeamRosterCard: "predictioncard_TeamRosterCard_1fgzJ",
      PredictionCard: "predictioncard_PredictionCard_fW3n3",
      StartTime: "predictioncard_StartTime_11cXO",
      InProgress: "predictioncard_InProgress_J9dR8",
      StartTimePadding: "predictioncard_StartTimePadding_3dBGD",
      TeamNameContainer: "predictioncard_TeamNameContainer_8eT03",
      TeamStatus: "predictioncard_TeamStatus_1T9Pe",
      TeamFavored: "predictioncard_TeamFavored_33y5i",
      TeamSelected: "predictioncard_TeamSelected_3y_uw",
      TeamWinner: "predictioncard_TeamWinner_qVZky",
      PayoutPreview: "predictioncard_PayoutPreview_2Fys9",
      PayoutContainer: "predictioncard_PayoutContainer_37Ev1",
      Results: "predictioncard_Results_tGmYG",
      Payouts: "predictioncard_Payouts_1kXpY",
      BottomPadding: "predictioncard_BottomPadding_JbRJY",
      StaleOdds: "predictioncard_StaleOdds_2HPmr",
      stalecolor: "predictioncard_stalecolor_37nDA",
      PayoutSpacer: "predictioncard_PayoutSpacer_2I38P",
      PayoutLabel: "predictioncard_PayoutLabel_2fEFY",
      PredictionBottomSection: "predictioncard_PredictionBottomSection_2JsDc",
      Spacer: "predictioncard_Spacer_Uq8W9",
      WagerContainer: "predictioncard_WagerContainer_29Jfj",
      SelectTeamLabel: "predictioncard_SelectTeamLabel_2ZySs",
      WagerShardsButton: "predictioncard_WagerShardsButton_2Amef",
      Small: "predictioncard_Small_F-bxE",
      Check: "predictioncard_Check_1x6Z8",
      Close: "predictioncard_Close_1anBP",
      NotDemoMode: "predictioncard_NotDemoMode_3lN9q",
      WagerSelectionContainer: "predictioncard_WagerSelectionContainer_3jFqu",
      WagerSelectionGroup: "predictioncard_WagerSelectionGroup_1Mauh",
      WagerLabel: "predictioncard_WagerLabel_1TLp8",
      WagerSliderContainer: "predictioncard_WagerSliderContainer_2V0rs",
      WagerAmount: "predictioncard_WagerAmount_3OMaV",
      stalepayoutcolor: "predictioncard_stalepayoutcolor_2DLhT",
      WonPrediction: "predictioncard_WonPrediction_2-Fga",
      LostPrediction: "predictioncard_LostPrediction_1TL9R",
      TiedPrediction: "predictioncard_TiedPrediction_3dFdk",
      SubmittingContainer: "predictioncard_SubmittingContainer_2KuO4",
      SubmittingText: "predictioncard_SubmittingText_3ls9U",
      ErrorSection: "predictioncard_ErrorSection_33ATp",
      ErrorBody: "predictioncard_ErrorBody_2Zax0",
      ErrorButton: "predictioncard_ErrorButton_2G3cv",
    };
  },
  gM6l: function (e, a, t) {
    "use strict";
    function r(e, a) {
      return (
        (e = Math.ceil(e)),
        (a = Math.floor(a)),
        Math.floor(Math.random() * (a - e + 1)) + e
      );
    }
    function o(e, a, t, r, o) {
      return r + ((o - r) * (e - a)) / (t - a);
    }
    t.d(a, "a", function () {
      return r;
    }),
      t.d(a, "b", function () {
        return o;
      });
  },
  "gPb/": function (e, a, t) {
    e.exports = {
      colorBlack: "global_colorBlack_3gO_L",
      colorWhite: "global_colorWhite_TVnk7",
      colorDarkGrey: "global_colorDarkGrey_2aJgR",
      colorGrey: "global_colorGrey_3hZTc",
      colorLightGrey: "global_colorLightGrey_3ninA",
      colorOrange: "global_colorOrange_qjLYw",
      colorRed: "global_colorRed_2E6Gs",
      colorAqua: "global_colorAqua_27rxd",
      colorBlue: "global_colorBlue_26I3p",
      colorBrightRed: "global_colorBrightRed_2C0Bq",
      colorBrightBlue: "global_colorBrightBlue_3jN23",
      colorBrightOrange: "global_colorBrightOrange_2TTYn",
      colorBrightPurple: "global_colorBrightPurple_i9qMg",
      colorBrightYellow: "global_colorBrightYellow_1hS8g",
      colorBrightGreen: "global_colorBrightGreen_2d-Uu",
      colorBrightGrey: "global_colorBrightGrey_3mlx7",
      backgroundColorBlack: "global_backgroundColorBlack_4pAR0",
      backgroundColorDarkGrey: "global_backgroundColorDarkGrey_228iH",
      backgroundColorLightGrey: "global_backgroundColorLightGrey_2oKB0",
      backgroundColorWhite: "global_backgroundColorWhite_T0_lZ",
      backgroundColorOrange: "global_backgroundColorOrange_37QwJ",
      backgroundColorRed: "global_backgroundColorRed_3ULld",
      backgroundColorAqua: "global_backgroundColorAqua_3Xdfo",
      backgroundColorBlue: "global_backgroundColorBlue_1rQuK",
      backgroundColorGrey: "global_backgroundColorGrey_3-TB9",
      backgroundColorBrightRed: "global_backgroundColorBrightRed_fc2Rq",
      backgroundColorBrightBlue: "global_backgroundColorBrightBlue_sQaAw",
      backgroundColorBrightOrange: "global_backgroundColorBrightOrange_39SeR",
      backgroundColorBrightPurple: "global_backgroundColorBrightPurple_11sCG",
      backgroundColorBrightYellow: "global_backgroundColorBrightYellow_3-nFA",
      backgroundColorBrightGreen: "global_backgroundColorBrightGreen_3y4Yn",
      backgroundColorBrightGrey: "global_backgroundColorBrightGrey_2SgDi",
      FadeIn: "global_FadeIn_3dNq3",
      fadein: "global_fadein_3571p",
      FadeInDelay: "global_FadeInDelay_3AgLt",
      fadeindelay: "global_fadeindelay_F6OnB",
      VerticalCollapseable: "global_VerticalCollapseable_23_Go",
      VerticalCollapse: "global_VerticalCollapse_tJoWs",
    };
  },
  gT6X: function (e, a, t) {
    e.exports = {
      colorBlack: "teampage_colorBlack_3wrBR",
      colorWhite: "teampage_colorWhite_BUKt9",
      colorDarkGrey: "teampage_colorDarkGrey_3DHDY",
      colorGrey: "teampage_colorGrey_2jECn",
      colorLightGrey: "teampage_colorLightGrey_2ZRec",
      colorOrange: "teampage_colorOrange_2sLbU",
      colorRed: "teampage_colorRed_MMC19",
      colorAqua: "teampage_colorAqua_4AOPV",
      colorBlue: "teampage_colorBlue_18Be5",
      colorBrightRed: "teampage_colorBrightRed_1IqwX",
      colorBrightBlue: "teampage_colorBrightBlue_2gtl6",
      colorBrightOrange: "teampage_colorBrightOrange_1Y6uo",
      colorBrightPurple: "teampage_colorBrightPurple_2yS__",
      colorBrightYellow: "teampage_colorBrightYellow_21xpK",
      colorBrightGreen: "teampage_colorBrightGreen_mYiXJ",
      colorBrightGrey: "teampage_colorBrightGrey_2RiNg",
      backgroundColorBlack: "teampage_backgroundColorBlack_1eHMh",
      backgroundColorDarkGrey: "teampage_backgroundColorDarkGrey_3jp4E",
      backgroundColorLightGrey: "teampage_backgroundColorLightGrey_1HoHA",
      backgroundColorWhite: "teampage_backgroundColorWhite_cF7ny",
      backgroundColorOrange: "teampage_backgroundColorOrange_1qkhF",
      backgroundColorRed: "teampage_backgroundColorRed_W3W_b",
      backgroundColorAqua: "teampage_backgroundColorAqua_3dyXP",
      backgroundColorBlue: "teampage_backgroundColorBlue_1rVxm",
      backgroundColorGrey: "teampage_backgroundColorGrey_2iywe",
      backgroundColorBrightRed: "teampage_backgroundColorBrightRed_3RULf",
      backgroundColorBrightBlue: "teampage_backgroundColorBrightBlue_1Fhw9",
      backgroundColorBrightOrange: "teampage_backgroundColorBrightOrange_BWmpm",
      backgroundColorBrightPurple: "teampage_backgroundColorBrightPurple_VhV1Z",
      backgroundColorBrightYellow: "teampage_backgroundColorBrightYellow_2p3Eg",
      backgroundColorBrightGreen: "teampage_backgroundColorBrightGreen_1JvfM",
      backgroundColorBrightGrey: "teampage_backgroundColorBrightGrey_37MUs",
      TeamPage: "teampage_TeamPage_2dZHb",
      Contents: "teampage_Contents_3tvdO",
      TeamLogoContainer: "teampage_TeamLogoContainer_2ftTd",
      TeamName: "teampage_TeamName_1woJ9",
      SubsectionHeader: "teampage_SubsectionHeader_3Q1Bz",
      InfoStat: "teampage_InfoStat_rNeJS",
      Rank: "teampage_Rank_VYOdq",
      Spacer: "teampage_Spacer_15dmO",
      CountryFlag: "teampage_CountryFlag_2TaEX",
      SponsorLogo: "teampage_SponsorLogo_NgACm",
      AchievementsList: "teampage_AchievementsList_3kpVj",
      AchievementContainer: "teampage_AchievementContainer_3FiBp",
      AchievementRank: "teampage_AchievementRank_vCQiz",
      LeagueImage: "teampage_LeagueImage_L3pkj",
      PlayerContainer: "teampage_PlayerContainer_3SGb5",
      PlayerImage: "teampage_PlayerImage_27BCh",
      PlayerImageContainer: "teampage_PlayerImageContainer_3DpKo",
      PlayerInfo: "teampage_PlayerInfo_1k3Z_",
      PlayerCountry: "teampage_PlayerCountry_23TKU",
      TeamRole: "teampage_TeamRole_wf19R",
      Loading: "teampage_Loading_E7u4k",
      InvalidTeam: "teampage_InvalidTeam_2jjkz",
    };
  },
  gfbn: function (e, a, t) {
    "use strict";
    t.r(a),
      function (e) {
        t.d(a, "EFavoriteType", function () {
          return r;
        }),
          t.d(a, "g_App", function () {
            return g;
          });
        var r,
          o = t("KAY9"),
          n = t("tkkQ"),
          c = (t("gij7"), t("CqJL"));
        !(function (e) {
          (e[(e.Any = 0)] = "Any"),
            (e[(e.Player = 1)] = "Player"),
            (e[(e.Team = 2)] = "Team"),
            (e[(e.League = 3)] = "League");
        })(r || (r = {})),
          (e.ClearBackgroundInterval = e.clearInterval),
          (e.ClearBackgroundTimeout = e.clearTimeout),
          (e.SetBackgroundInterval = e.setInterval),
          (e.SetBackgroundTimeout = e.setTimeout);
        var l,
          i,
          s,
          g = new o.a();
        document.addEventListener("DOMContentLoaded", function () {
          Object(n.c)(), g.Init();
        }),
          (window.LocalizationReady = function (e, a, t) {
            if ("english" !== a)
              "main" == e ? (l = t) : "shared" == e && (i = t);
            else if ("shared" == e) s = t;
            else {
              var r = void 0,
                o = null,
                n = void 0,
                g = null;
              void 0 !== l ? ((r = l), (o = t)) : (r = t),
                void 0 !== i ? ((n = i), (g = s)) : (n = s),
                c.a.InitFromObjects(r, o, n, g),
                (l = void 0),
                (i = void 0),
                (s = void 0);
            }
          });
      }.call(this, t("yLpj"));
  },
  gij7: function (e, a, t) {
    "use strict";
    t("vDqi");
  },
  mg82: function (e, a, t) {
    e.exports = {
      colorBlack: "matchpage_colorBlack_uYr54",
      colorWhite: "matchpage_colorWhite_3LE7k",
      colorDarkGrey: "matchpage_colorDarkGrey_1hgCz",
      colorGrey: "matchpage_colorGrey_3t3GP",
      colorLightGrey: "matchpage_colorLightGrey_1jecX",
      colorOrange: "matchpage_colorOrange_1q0DT",
      colorRed: "matchpage_colorRed_1VGx-",
      colorAqua: "matchpage_colorAqua_3rhn_",
      colorBlue: "matchpage_colorBlue_3ljoI",
      colorBrightRed: "matchpage_colorBrightRed_3_W-D",
      colorBrightBlue: "matchpage_colorBrightBlue_2V4Wj",
      colorBrightOrange: "matchpage_colorBrightOrange_3Khp8",
      colorBrightPurple: "matchpage_colorBrightPurple_210UK",
      colorBrightYellow: "matchpage_colorBrightYellow_3o4mT",
      colorBrightGreen: "matchpage_colorBrightGreen_3JVJD",
      colorBrightGrey: "matchpage_colorBrightGrey_126w5",
      backgroundColorBlack: "matchpage_backgroundColorBlack_3Or7k",
      backgroundColorDarkGrey: "matchpage_backgroundColorDarkGrey_Z4DrT",
      backgroundColorLightGrey: "matchpage_backgroundColorLightGrey_2tKky",
      backgroundColorWhite: "matchpage_backgroundColorWhite_18Lcf",
      backgroundColorOrange: "matchpage_backgroundColorOrange_1LCMQ",
      backgroundColorRed: "matchpage_backgroundColorRed_4QepL",
      backgroundColorAqua: "matchpage_backgroundColorAqua_12IYE",
      backgroundColorBlue: "matchpage_backgroundColorBlue_1sTje",
      backgroundColorGrey: "matchpage_backgroundColorGrey_6JW3_",
      backgroundColorBrightRed: "matchpage_backgroundColorBrightRed_91h8l",
      backgroundColorBrightBlue: "matchpage_backgroundColorBrightBlue_2p6aT",
      backgroundColorBrightOrange:
        "matchpage_backgroundColorBrightOrange_29QSq",
      backgroundColorBrightPurple:
        "matchpage_backgroundColorBrightPurple_tFYBI",
      backgroundColorBrightYellow:
        "matchpage_backgroundColorBrightYellow_1esiP",
      backgroundColorBrightGreen: "matchpage_backgroundColorBrightGreen_2a6hU",
      backgroundColorBrightGrey: "matchpage_backgroundColorBrightGrey_QGabd",
      MatchPage: "matchpage_MatchPage_1LIfg",
      Body: "matchpage_Body_68kN3",
      Header: "matchpage_Header_2pJ4_",
      BackArrow: "matchpage_BackArrow_lkTp1",
      MatchInfo: "matchpage_MatchInfo_1VlV9",
      Team: "matchpage_Team_17lXj",
      Logo: "matchpage_Logo_3lOJg",
      Name: "matchpage_Name_uHpke",
      Score: "matchpage_Score_a-fE-",
      GameTime: "matchpage_GameTime_1zKCK",
      RadiantDireBar: "matchpage_RadiantDireBar_2xdDc",
      Radiant: "matchpage_Radiant_3yWEc",
      Dire: "matchpage_Dire_3ZXx8",
      Drafting: "matchpage_Drafting_1rAsV",
      Map: "matchpage_Map_1gZsX",
      HeroIcon: "matchpage_HeroIcon_1SETR",
      BuildingIcon: "matchpage_BuildingIcon_1AsCw",
      Destroyed: "matchpage_Destroyed_2i6Kk",
      Winner: "matchpage_Winner_2wSzk",
      GraphSection: "matchpage_GraphSection_1vc5L",
      Title: "matchpage_Title_30RtJ",
      Bottom: "matchpage_Bottom_24oLL",
      GraphContainer: "matchpage_GraphContainer_ZmYYQ",
      Legend: "matchpage_Legend_1JfPw",
      Arrow: "matchpage_Arrow_Ln0OK",
      DireGreater: "matchpage_DireGreater_2tnph",
      EdgeMask: "matchpage_EdgeMask_3w90D",
      HeroStatsSection: "matchpage_HeroStatsSection_3ElBk",
      HeroStats: "matchpage_HeroStats_3ZNG7",
      TeamHeroStats: "matchpage_TeamHeroStats_oG3Rm",
      SingleHeroStats: "matchpage_SingleHeroStats_dCRzn",
      TopBar: "matchpage_TopBar_1Megk",
      Stats: "matchpage_Stats_KnZrq",
      KDA: "matchpage_KDA_ZoqcC",
      NetWorth: "matchpage_NetWorth_3BrE4",
      NameAndName: "matchpage_NameAndName_1Ptbk",
      HeroName: "matchpage_HeroName_3Qo5l",
      PlayerName: "matchpage_PlayerName_2CUy5",
      HeroImage: "matchpage_HeroImage_2UCL2",
      Items: "matchpage_Items_2GVyz",
      Item: "matchpage_Item_3kVv1",
      TeamRosters: "matchpage_TeamRosters_3bFtp",
      TeamRosterTeams: "matchpage_TeamRosterTeams_3pNP0",
      TeamRoster: "matchpage_TeamRoster_3jh-P",
      Player: "matchpage_Player_wjnZl",
      Image: "matchpage_Image_1lunt",
      Hide: "matchpage_Hide_1c5OO",
      Left: "matchpage_Left_1IlP0",
      Right: "matchpage_Right_lsHad",
      ProName: "matchpage_ProName_Y_Ih7",
      RealName: "matchpage_RealName_3WbHq",
      PicksAndBansSection: "matchpage_PicksAndBansSection_1ejxs",
      PicksAndBans: "matchpage_PicksAndBans_1Eqf2",
      TeamPicksAndBans: "matchpage_TeamPicksAndBans_1Y3f7",
      PickOrBan: "matchpage_PickOrBan_2zAsb",
      Number: "matchpage_Number_1eIKY",
      Pick: "matchpage_Pick_1YXYs",
      Ban: "matchpage_Ban_1ifBv",
      PickAndBansLabel: "matchpage_PickAndBansLabel_3BOp1",
      PickOrBanLabel: "matchpage_PickOrBanLabel_2vw7-",
      Scrollable: "matchpage_Scrollable_G44Rp",
      Loading: "matchpage_Loading_29FeG",
    };
  },
  novD: function (e, a, t) {
    e.exports = {
      colorBlack: "feedpage_colorBlack_1cRJe",
      colorWhite: "feedpage_colorWhite_23GcW",
      colorDarkGrey: "feedpage_colorDarkGrey_3clIB",
      colorGrey: "feedpage_colorGrey_2PoSH",
      colorLightGrey: "feedpage_colorLightGrey_3OgU3",
      colorOrange: "feedpage_colorOrange_RNwQz",
      colorRed: "feedpage_colorRed_3Z36a",
      colorAqua: "feedpage_colorAqua_BFAAD",
      colorBlue: "feedpage_colorBlue_qBcdz",
      colorBrightRed: "feedpage_colorBrightRed_2xDtd",
      colorBrightBlue: "feedpage_colorBrightBlue_2jvRI",
      colorBrightOrange: "feedpage_colorBrightOrange_2Tp1T",
      colorBrightPurple: "feedpage_colorBrightPurple_jp6Wi",
      colorBrightYellow: "feedpage_colorBrightYellow_1dXhY",
      colorBrightGreen: "feedpage_colorBrightGreen_3PMob",
      colorBrightGrey: "feedpage_colorBrightGrey_1livr",
      backgroundColorBlack: "feedpage_backgroundColorBlack_30W3n",
      backgroundColorDarkGrey: "feedpage_backgroundColorDarkGrey_2pqKy",
      backgroundColorLightGrey: "feedpage_backgroundColorLightGrey_1XhqN",
      backgroundColorWhite: "feedpage_backgroundColorWhite_1ura4",
      backgroundColorOrange: "feedpage_backgroundColorOrange_GKMW2",
      backgroundColorRed: "feedpage_backgroundColorRed_3Xu5q",
      backgroundColorAqua: "feedpage_backgroundColorAqua_2COm_",
      backgroundColorBlue: "feedpage_backgroundColorBlue_3v6-2",
      backgroundColorGrey: "feedpage_backgroundColorGrey_2XHPU",
      backgroundColorBrightRed: "feedpage_backgroundColorBrightRed_15Mi5",
      backgroundColorBrightBlue: "feedpage_backgroundColorBrightBlue_2ZPob",
      backgroundColorBrightOrange: "feedpage_backgroundColorBrightOrange_3kuGS",
      backgroundColorBrightPurple: "feedpage_backgroundColorBrightPurple_1Ud3d",
      backgroundColorBrightYellow: "feedpage_backgroundColorBrightYellow_S1u77",
      backgroundColorBrightGreen: "feedpage_backgroundColorBrightGreen_P7SAe",
      backgroundColorBrightGrey: "feedpage_backgroundColorBrightGrey_vvTE7",
      FeedPage: "feedpage_FeedPage_2pDTB",
      Contents: "feedpage_Contents_qtnPD",
      Loading: "feedpage_Loading_1H10v",
    };
  },
  sIvF: function (e, a, t) {
    e.exports = {
      colorBlack: "tournamentpage_colorBlack_3oFRX",
      colorWhite: "tournamentpage_colorWhite_bcwAX",
      colorDarkGrey: "tournamentpage_colorDarkGrey_271Qu",
      colorGrey: "tournamentpage_colorGrey_3jvX-",
      colorLightGrey: "tournamentpage_colorLightGrey_3zuqz",
      colorOrange: "tournamentpage_colorOrange_QLoBp",
      colorRed: "tournamentpage_colorRed_3G4c8",
      colorAqua: "tournamentpage_colorAqua_Xy06Y",
      colorBlue: "tournamentpage_colorBlue_12J3v",
      colorBrightRed: "tournamentpage_colorBrightRed_2FlSK",
      colorBrightBlue: "tournamentpage_colorBrightBlue_30TpA",
      colorBrightOrange: "tournamentpage_colorBrightOrange_30YEQ",
      colorBrightPurple: "tournamentpage_colorBrightPurple_1oJt7",
      colorBrightYellow: "tournamentpage_colorBrightYellow_1wuNI",
      colorBrightGreen: "tournamentpage_colorBrightGreen_qY7ar",
      colorBrightGrey: "tournamentpage_colorBrightGrey_Jd6ot",
      backgroundColorBlack: "tournamentpage_backgroundColorBlack_3Rg-b",
      backgroundColorDarkGrey: "tournamentpage_backgroundColorDarkGrey_3KoCv",
      backgroundColorLightGrey: "tournamentpage_backgroundColorLightGrey_3SnPM",
      backgroundColorWhite: "tournamentpage_backgroundColorWhite_3YVVY",
      backgroundColorOrange: "tournamentpage_backgroundColorOrange_Z1D4O",
      backgroundColorRed: "tournamentpage_backgroundColorRed__KIVN",
      backgroundColorAqua: "tournamentpage_backgroundColorAqua_3Af02",
      backgroundColorBlue: "tournamentpage_backgroundColorBlue_3PyZ4",
      backgroundColorGrey: "tournamentpage_backgroundColorGrey_1OAfd",
      backgroundColorBrightRed: "tournamentpage_backgroundColorBrightRed_MG5FF",
      backgroundColorBrightBlue:
        "tournamentpage_backgroundColorBrightBlue_1FCDZ",
      backgroundColorBrightOrange:
        "tournamentpage_backgroundColorBrightOrange_3DKtl",
      backgroundColorBrightPurple:
        "tournamentpage_backgroundColorBrightPurple_3b8gx",
      backgroundColorBrightYellow:
        "tournamentpage_backgroundColorBrightYellow_1HvLh",
      backgroundColorBrightGreen:
        "tournamentpage_backgroundColorBrightGreen_10mNM",
      backgroundColorBrightGrey:
        "tournamentpage_backgroundColorBrightGrey_4ppxW",
      TournamentPage: "tournamentpage_TournamentPage_1tKYp",
      LeagueLogoContainer: "tournamentpage_LeagueLogoContainer_1HIlW",
      TopIcons: "tournamentpage_TopIcons_2SrW1",
      BackArrow: "tournamentpage_BackArrow_7W-aF",
      Dots: "tournamentpage_Dots_CK7Fh",
      LeagueLogo: "tournamentpage_LeagueLogo_23zcE",
      HeaderAndBody: "tournamentpage_HeaderAndBody_1fDl1",
      Header: "tournamentpage_Header_ikuT_",
      MenuLink: "tournamentpage_MenuLink_1B4X1",
      Enabled: "tournamentpage_Enabled_1diQW",
      HeaderUnderline: "tournamentpage_HeaderUnderline_2C3fH",
      Underline: "tournamentpage_Underline_3sgqp",
      OnTeams: "tournamentpage_OnTeams_4uCqy",
      OnStandings: "tournamentpage_OnStandings_3mnbx",
      OnMatches: "tournamentpage_OnMatches_1dAOZ",
      Body: "tournamentpage_Body_39SKs",
      Loading: "tournamentpage_Loading_3IseU",
      PhaseHeader: "tournamentpage_PhaseHeader_i8EB1",
      PhaseBlock: "tournamentpage_PhaseBlock_9AJ07",
      Standing: "tournamentpage_Standing_2nBBY",
      Team: "tournamentpage_Team_2COgO",
      Advancing: "tournamentpage_Advancing__BT__",
      Eliminated: "tournamentpage_Eliminated_3pBAX",
      TeamName: "tournamentpage_TeamName_1T93v",
      Score: "tournamentpage_Score_2Lb58",
      Matches: "tournamentpage_Matches_1cIUh",
      Standings: "tournamentpage_Standings_3M5rq",
      PhaseDropdown: "tournamentpage_PhaseDropdown_2MpmJ",
      Scrollable: "tournamentpage_Scrollable_30Hj4",
      TournamentBracketSingle: "tournamentpage_TournamentBracketSingle_2o5F2",
      TournamentBracketDouble: "tournamentpage_TournamentBracketDouble_okuKN",
      TournamentBracketDoublSeeded:
        "tournamentpage_TournamentBracketDoublSeeded_1-WuQ",
      TournamentBracketGSL: "tournamentpage_TournamentBracketGSL_3z1_F",
      TournamentRoundRobin: "tournamentpage_TournamentRoundRobin_HR05r",
      Tiebreak: "tournamentpage_Tiebreak_th-35",
      Title: "tournamentpage_Title_1CeBd",
      TitleUnderline: "tournamentpage_TitleUnderline_1TrNi",
      Background: "tournamentpage_Background_2uNn5",
      BracketNode: "tournamentpage_BracketNode_3xYqp",
      IsProgress: "tournamentpage_IsProgress_1dztX",
      IsCompleted: "tournamentpage_IsCompleted_3Xni2",
      TeamRow: "tournamentpage_TeamRow_EmM1w",
      Winner: "tournamentpage_Winner_IQ0LD",
      TeamLogo: "tournamentpage_TeamLogo_2S8Uy",
      TeamWins: "tournamentpage_TeamWins_29ati",
      Results: "tournamentpage_Results_uNWys",
      TournamentResult: "tournamentpage_TournamentResult_2S5hI",
      First: "tournamentpage_First_3A8Lp",
      Second: "tournamentpage_Second_1dnR4",
      Third: "tournamentpage_Third_1akc5",
      TeamInfo: "tournamentpage_TeamInfo_3Gihf",
      Top: "tournamentpage_Top_2Fpql",
      Bottom: "tournamentpage_Bottom_3alRq",
      LabelAndValue: "tournamentpage_LabelAndValue_37-ec",
      Label: "tournamentpage_Label_23R_i",
      Value: "tournamentpage_Value_17C5m",
    };
  },
  tkkQ: function (e, a, t) {
    "use strict";
    t.d(a, "a", function () {
      return r;
    }),
      t.d(a, "c", function () {
        return n;
      }),
      t.d(a, "b", function () {
        return c;
      });
    var r = {
        EUNIVERSE: 0,
        WEB_UNIVERSE: "",
        LANGUAGE: "english",
        BASE_URL: "",
        IMG_URL: "",
        IMG_URL_BASE: "",
        CDN_URL: "",
        RENDER_TIMESTAMP: 0,
        DOTA_APP_ID: 0,
        ACCOUNT_ID: 0,
        SESSION_ID: 0,
        EVENT_ID_PLUS_SUBSCRIPTION: 0,
        IS_PLUS_SUBSCRIBER: !1,
        GC_DOWN: !1,
        VALVE_IP: !1,
      },
      o = "application_config";
    function n() {
      var e = (function (e, a) {
        void 0 === a && (a = o);
        var t = document.getElementById(a);
        if (t)
          try {
            return JSON.parse(t.getAttribute("data-" + e) || "");
          } catch (e) {
            console.error("Failed to parse config", e);
          }
        else console.error("Missing config element #" + a);
        return;
      })("config");
      e && Object.assign(r, e);
    }
    function c() {
      var e = document.createElement("a");
      e.href = r.BASE_URL;
      var a = e.pathname;
      return a.endsWith("/") || (a += "/"), (a += "applications/dpc");
    }
  },
  v7Gi: function (e, a, t) {
    e.exports = {
      colorBlack: "titleheader_colorBlack_jFXit",
      colorWhite: "titleheader_colorWhite_2RzDn",
      colorDarkGrey: "titleheader_colorDarkGrey_2xKoD",
      colorGrey: "titleheader_colorGrey_24JxC",
      colorLightGrey: "titleheader_colorLightGrey_2p1lu",
      colorOrange: "titleheader_colorOrange_aabbq",
      colorRed: "titleheader_colorRed_1epkD",
      colorAqua: "titleheader_colorAqua_XQ-i9",
      colorBlue: "titleheader_colorBlue_3N6cg",
      colorBrightRed: "titleheader_colorBrightRed_Q84QA",
      colorBrightBlue: "titleheader_colorBrightBlue_2Ethy",
      colorBrightOrange: "titleheader_colorBrightOrange_gYQeu",
      colorBrightPurple: "titleheader_colorBrightPurple_3pXPx",
      colorBrightYellow: "titleheader_colorBrightYellow_1zzX1",
      colorBrightGreen: "titleheader_colorBrightGreen_RTWq7",
      colorBrightGrey: "titleheader_colorBrightGrey_1Yznm",
      backgroundColorBlack: "titleheader_backgroundColorBlack_HeNb9",
      backgroundColorDarkGrey: "titleheader_backgroundColorDarkGrey_bIaT2",
      backgroundColorLightGrey: "titleheader_backgroundColorLightGrey_1pXCm",
      backgroundColorWhite: "titleheader_backgroundColorWhite_38Wuj",
      backgroundColorOrange: "titleheader_backgroundColorOrange_3bBJ5",
      backgroundColorRed: "titleheader_backgroundColorRed_ifS2Z",
      backgroundColorAqua: "titleheader_backgroundColorAqua_3tMqB",
      backgroundColorBlue: "titleheader_backgroundColorBlue_26WPC",
      backgroundColorGrey: "titleheader_backgroundColorGrey_2pZPW",
      backgroundColorBrightRed: "titleheader_backgroundColorBrightRed_HotIA",
      backgroundColorBrightBlue: "titleheader_backgroundColorBrightBlue_1uuxP",
      backgroundColorBrightOrange:
        "titleheader_backgroundColorBrightOrange_1odVZ",
      backgroundColorBrightPurple:
        "titleheader_backgroundColorBrightPurple_-Lc1J",
      backgroundColorBrightYellow:
        "titleheader_backgroundColorBrightYellow_totJF",
      backgroundColorBrightGreen:
        "titleheader_backgroundColorBrightGreen_3ngaC",
      backgroundColorBrightGrey: "titleheader_backgroundColorBrightGrey_1zIrZ",
      TitleHeader: "titleheader_TitleHeader_sX4gR",
      TitleElements: "titleheader_TitleElements_3Dg8L",
      BackArrow: "titleheader_BackArrow_m8Kx1",
      Hidden: "titleheader_Hidden_18u7A",
      HeaderText: "titleheader_HeaderText_njRFA",
      HeaderButton: "titleheader_HeaderButton_kLcfS",
      HeaderButtonText: "titleheader_HeaderButtonText_26qLm",
      Avatar: "titleheader_Avatar_2r0hS",
      Favorite: "titleheader_Favorite_cRRcO",
      Shards: "titleheader_Shards_3MlqC",
      Count: "titleheader_Count_15yaP",
      HelpPage: "titleheader_HelpPage_HrXSA",
      Underline: "titleheader_Underline_1VxYW",
    };
  },
  w3zt: function (e, a, t) {
    e.exports = {
      colorBlack: "predictionspage_colorBlack_2byEJ",
      colorWhite: "predictionspage_colorWhite_3DNbf",
      colorDarkGrey: "predictionspage_colorDarkGrey_2wYbX",
      colorGrey: "predictionspage_colorGrey_1V1wj",
      colorLightGrey: "predictionspage_colorLightGrey_1gqjr",
      colorOrange: "predictionspage_colorOrange_3IUiv",
      colorRed: "predictionspage_colorRed_1rDXc",
      colorAqua: "predictionspage_colorAqua_299eD",
      colorBlue: "predictionspage_colorBlue_1eIS1",
      colorBrightRed: "predictionspage_colorBrightRed_21rdG",
      colorBrightBlue: "predictionspage_colorBrightBlue_1R7Qz",
      colorBrightOrange: "predictionspage_colorBrightOrange_1xsdv",
      colorBrightPurple: "predictionspage_colorBrightPurple_3CyEu",
      colorBrightYellow: "predictionspage_colorBrightYellow_2D8mt",
      colorBrightGreen: "predictionspage_colorBrightGreen_1Jw5X",
      colorBrightGrey: "predictionspage_colorBrightGrey_kucBH",
      backgroundColorBlack: "predictionspage_backgroundColorBlack_2G4_w",
      backgroundColorDarkGrey: "predictionspage_backgroundColorDarkGrey_3zRSL",
      backgroundColorLightGrey:
        "predictionspage_backgroundColorLightGrey_3kLIS",
      backgroundColorWhite: "predictionspage_backgroundColorWhite_3hfEx",
      backgroundColorOrange: "predictionspage_backgroundColorOrange_2REk9",
      backgroundColorRed: "predictionspage_backgroundColorRed_IM3tr",
      backgroundColorAqua: "predictionspage_backgroundColorAqua_2U19b",
      backgroundColorBlue: "predictionspage_backgroundColorBlue_1D5sv",
      backgroundColorGrey: "predictionspage_backgroundColorGrey_3X8rV",
      backgroundColorBrightRed:
        "predictionspage_backgroundColorBrightRed_29XDE",
      backgroundColorBrightBlue:
        "predictionspage_backgroundColorBrightBlue_21Tdo",
      backgroundColorBrightOrange:
        "predictionspage_backgroundColorBrightOrange_3y-zm",
      backgroundColorBrightPurple:
        "predictionspage_backgroundColorBrightPurple_3zMlx",
      backgroundColorBrightYellow:
        "predictionspage_backgroundColorBrightYellow_3Fji1",
      backgroundColorBrightGreen:
        "predictionspage_backgroundColorBrightGreen_1OGrN",
      backgroundColorBrightGrey:
        "predictionspage_backgroundColorBrightGrey_2xLhh",
      PredictionsPage: "predictionspage_PredictionsPage_1kPgW",
      PredictionHeader: "predictionspage_PredictionHeader_exwqc",
      headerChildren: "predictionspage_headerChildren_1Dfng",
      TournamentHeader: "predictionspage_TournamentHeader_XFW3T",
      WagerTokensTitle: "predictionspage_WagerTokensTitle_2gcEl",
      ShardsIcon: "predictionspage_ShardsIcon_P4I2J",
      Spacer: "predictionspage_Spacer_1Jwwy",
      Contents: "predictionspage_Contents_16koM",
      PredictionList: "predictionspage_PredictionList_2EYGl",
      Loading: "predictionspage_Loading__b4Cq",
      NoPredictionsContainer: "predictionspage_NoPredictionsContainer_395EQ",
      NoPredictions: "predictionspage_NoPredictions_C31Md",
      NoPredictionsAlertContainer:
        "predictionspage_NoPredictionsAlertContainer_3-_yg",
      NoPredictionsIcon: "predictionspage_NoPredictionsIcon_2A2iY",
      NoPredictionsTitle: "predictionspage_NoPredictionsTitle_3G52x",
      NoPredictionsDetail: "predictionspage_NoPredictionsDetail_2lA02",
      PredictionsHelp: "predictionspage_PredictionsHelp_RC5Lt",
      PredictionsHelpPage: "predictionspage_PredictionsHelpPage_86_pk",
      PredictionsHelpPageContents:
        "predictionspage_PredictionsHelpPageContents_2vHiG",
      CardContainer: "predictionspage_CardContainer_2x9jC",
      SmallCards: "predictionspage_SmallCards_2z602",
      SmallCardContainer: "predictionspage_SmallCardContainer_3rzpL",
      Left: "predictionspage_Left_1LU3k",
      Right: "predictionspage_Right_27pEy",
      HelpTextContainer: "predictionspage_HelpTextContainer_2dUe5",
      HelpTitle: "predictionspage_HelpTitle_11xhb",
      HelpDetail: "predictionspage_HelpDetail_2faCr",
      HelpSubDetail: "predictionspage_HelpSubDetail_3tkiW",
    };
  },
  wB0h: function (e, a, t) {
    e.exports = {
      colorBlack: "standingspage_colorBlack_1Z2zR",
      colorWhite: "standingspage_colorWhite_3L7Bx",
      colorDarkGrey: "standingspage_colorDarkGrey_BIWRw",
      colorGrey: "standingspage_colorGrey_1z6on",
      colorLightGrey: "standingspage_colorLightGrey_2u48w",
      colorOrange: "standingspage_colorOrange_2tQAV",
      colorRed: "standingspage_colorRed_3hZB5",
      colorAqua: "standingspage_colorAqua_37zjZ",
      colorBlue: "standingspage_colorBlue_12orx",
      colorBrightRed: "standingspage_colorBrightRed_xOVE6",
      colorBrightBlue: "standingspage_colorBrightBlue_cnUaL",
      colorBrightOrange: "standingspage_colorBrightOrange_3sWw9",
      colorBrightPurple: "standingspage_colorBrightPurple_7kjz5",
      colorBrightYellow: "standingspage_colorBrightYellow_2u7wp",
      colorBrightGreen: "standingspage_colorBrightGreen_1IowE",
      colorBrightGrey: "standingspage_colorBrightGrey_16zwG",
      backgroundColorBlack: "standingspage_backgroundColorBlack_1zkvF",
      backgroundColorDarkGrey: "standingspage_backgroundColorDarkGrey_xhacy",
      backgroundColorLightGrey: "standingspage_backgroundColorLightGrey_2sV3r",
      backgroundColorWhite: "standingspage_backgroundColorWhite_aJw1v",
      backgroundColorOrange: "standingspage_backgroundColorOrange_1rl5g",
      backgroundColorRed: "standingspage_backgroundColorRed_1zOrh",
      backgroundColorAqua: "standingspage_backgroundColorAqua_T9gXx",
      backgroundColorBlue: "standingspage_backgroundColorBlue_2RMKQ",
      backgroundColorGrey: "standingspage_backgroundColorGrey_38DKP",
      backgroundColorBrightRed: "standingspage_backgroundColorBrightRed_2wiqi",
      backgroundColorBrightBlue:
        "standingspage_backgroundColorBrightBlue_2aF50",
      backgroundColorBrightOrange:
        "standingspage_backgroundColorBrightOrange_2v2_c",
      backgroundColorBrightPurple:
        "standingspage_backgroundColorBrightPurple_2Wckd",
      backgroundColorBrightYellow:
        "standingspage_backgroundColorBrightYellow_jyGUW",
      backgroundColorBrightGreen:
        "standingspage_backgroundColorBrightGreen_3nhPf",
      backgroundColorBrightGrey:
        "standingspage_backgroundColorBrightGrey_5ezxV",
      StandingsPage: "standingspage_StandingsPage_OgLhv",
      LeagueOrTIHeader: "standingspage_LeagueOrTIHeader_3pEYH",
      CategoryOption: "standingspage_CategoryOption_380kN",
      OptionSelected: "standingspage_OptionSelected_1MGld",
      LeagueStandingsPage: "standingspage_LeagueStandingsPage_3TpL0",
      RegionSelector: "standingspage_RegionSelector_3A_Cz",
      Region: "standingspage_Region_1W7Uw",
      RegionText: "standingspage_RegionText_Fxmdq",
      SelectedRegion: "standingspage_SelectedRegion_3NO0W",
      ScrollableContents: "standingspage_ScrollableContents_3WH77",
      Division: "standingspage_Division_Atn3u",
      Entry: "standingspage_Entry_38yFX",
      TeamName: "standingspage_TeamName_3nT-j",
      Logo: "standingspage_Logo_2nLxb",
      WinLoss: "standingspage_WinLoss_3-UZB",
      InternationalStandingsPage:
        "standingspage_InternationalStandingsPage_1bOUy",
      headerChildren: "standingspage_headerChildren_1Yjkv",
      Contents: "standingspage_Contents_2AIA1",
      Loading: "standingspage_Loading_3VvYm",
      NoPointsYet: "standingspage_NoPointsYet_3g336",
      NoPointsDesc: "standingspage_NoPointsDesc_OPzYz",
      Team: "standingspage_Team_21NNy",
      RankContainer: "standingspage_RankContainer_32oW0",
      ClinchedInvite: "standingspage_ClinchedInvite_1R9ul",
      Eliminated: "standingspage_Eliminated_2Zc8u",
      Rank: "standingspage_Rank_3w08R",
      DefaultStatus: "standingspage_DefaultStatus_1zps8",
      TeamLogoContainer: "standingspage_TeamLogoContainer_19IBb",
      TeamLogo: "standingspage_TeamLogo_1C1_d",
      Spacer: "standingspage_Spacer_2v-8e",
      Points: "standingspage_Points_2EkMC",
      InviteSeparator: "standingspage_InviteSeparator_1_6uW",
      FooterContainer: "standingspage_FooterContainer_3Gakv",
      Footer: "standingspage_Footer_2NBMr",
      FooterText: "standingspage_FooterText_36uYP",
      FooterSpacer: "standingspage_FooterSpacer_9Pw8F",
    };
  },
  x0JQ: function (e, a, t) {
    e.exports = {
      LoadingWrapper: "throbber_LoadingWrapper_chtlD",
      Static: "throbber_Static_1tnKC",
      none: "throbber_none_37O9t",
      bottomCircle: "throbber_bottomCircle_2U7m8",
      noString: "throbber_noString_1Ygce",
      Throbber: "throbber_Throbber_3upHh",
      SVGIcon_Throbber: "SVGIcon_Throbber",
      throbber_small: "throbber_throbber_small_U-aow",
      throbber_medium: "throbber_throbber_medium_1Fobg",
      throbber_large: "throbber_throbber_large_2IrNq",
      throbber_center_wrapper: "throbber_throbber_center_wrapper_1PqOU",
      ThrobberText: "throbber_ThrobberText_4i9ro",
      blur: "throbber_blur_ksnq2",
      ThrobberRoundLoop: "throbber_ThrobberRoundLoop_2KsRJ",
      roundOuterOutline: "throbber_roundOuterOutline_1nczY",
      roundOuter: "throbber_roundOuter_1X5lV",
      roundFill: "throbber_roundFill_1vctz",
      ThrobberFillLoop: "throbber_ThrobberFillLoop_3Ffp2",
      topCircle: "throbber_topCircle_1Axol",
      circlePulse: "throbber_circlePulse_2TF6g",
      ThrobberTopCircleLoop: "throbber_ThrobberTopCircleLoop_1hClF",
      ThrobberBottomCircleLoop: "throbber_ThrobberBottomCircleLoop_1wHEq",
      roundThrobber15: "throbber_roundThrobber15_1hbf_",
      roundThrobber14: "throbber_roundThrobber14_3743K",
      roundThrobber13: "throbber_roundThrobber13_1vG0c",
      roundThrobber12: "throbber_roundThrobber12_66Spb",
      roundThrobber11: "throbber_roundThrobber11_2XCXD",
      roundThrobber10: "throbber_roundThrobber10_1kLAG",
      roundThrobber09: "throbber_roundThrobber09_3lj-a",
      roundThrobber08: "throbber_roundThrobber08_2c9JB",
      roundThrobber07: "throbber_roundThrobber07_2Shtf",
      roundThrobber06: "throbber_roundThrobber06_2iRLM",
      roundThrobber05: "throbber_roundThrobber05_1sOtP",
      roundThrobber04: "throbber_roundThrobber04_3JAdj",
      roundThrobber03: "throbber_roundThrobber03_1FqGc",
      roundThrobber02: "throbber_roundThrobber02_3dMhW",
      roundThrobber01: "throbber_roundThrobber01_6Xq-0",
      ThrobberRoundLoopThickness: "throbber_ThrobberRoundLoopThickness_3Ve7-",
      throbber_xlarge: "throbber_throbber_xlarge_2XWPE",
      throbber_xxlarge: "throbber_throbber_xxlarge_QooXb",
    };
  },
  xNsg: function (e, a, t) {
    e.exports = {
      colorBlack: "feedelement_colorBlack_2c-Et",
      colorWhite: "feedelement_colorWhite_MrGZY",
      colorDarkGrey: "feedelement_colorDarkGrey_2DGDr",
      colorGrey: "feedelement_colorGrey_3fiVy",
      colorLightGrey: "feedelement_colorLightGrey_Qwg2n",
      colorOrange: "feedelement_colorOrange_29mwD",
      colorRed: "feedelement_colorRed_3PCH5",
      colorAqua: "feedelement_colorAqua_3nKUL",
      colorBlue: "feedelement_colorBlue_wc8lQ",
      colorBrightRed: "feedelement_colorBrightRed_2pBrR",
      colorBrightBlue: "feedelement_colorBrightBlue_10O-h",
      colorBrightOrange: "feedelement_colorBrightOrange_2IRtf",
      colorBrightPurple: "feedelement_colorBrightPurple_1t0OS",
      colorBrightYellow: "feedelement_colorBrightYellow_2JqFP",
      colorBrightGreen: "feedelement_colorBrightGreen_33wqD",
      colorBrightGrey: "feedelement_colorBrightGrey_3WVr3",
      backgroundColorBlack: "feedelement_backgroundColorBlack_2qWfT",
      backgroundColorDarkGrey: "feedelement_backgroundColorDarkGrey_2BE-s",
      backgroundColorLightGrey: "feedelement_backgroundColorLightGrey_3J4Zz",
      backgroundColorWhite: "feedelement_backgroundColorWhite_2bDAO",
      backgroundColorOrange: "feedelement_backgroundColorOrange_gsjIl",
      backgroundColorRed: "feedelement_backgroundColorRed_ttA8-",
      backgroundColorAqua: "feedelement_backgroundColorAqua_2XFc6",
      backgroundColorBlue: "feedelement_backgroundColorBlue_a4A8e",
      backgroundColorGrey: "feedelement_backgroundColorGrey_inyyg",
      backgroundColorBrightRed: "feedelement_backgroundColorBrightRed_25kgK",
      backgroundColorBrightBlue: "feedelement_backgroundColorBrightBlue_2lfgO",
      backgroundColorBrightOrange:
        "feedelement_backgroundColorBrightOrange_1MHfx",
      backgroundColorBrightPurple:
        "feedelement_backgroundColorBrightPurple_23M4K",
      backgroundColorBrightYellow:
        "feedelement_backgroundColorBrightYellow_3V_eb",
      backgroundColorBrightGreen:
        "feedelement_backgroundColorBrightGreen_1LyOv",
      backgroundColorBrightGrey: "feedelement_backgroundColorBrightGrey_2CJRr",
      FeedElement: "feedelement_FeedElement_3nW-W",
      HeadlineRow: "feedelement_HeadlineRow_10BAa",
      Icon: "feedelement_Icon_2DWZ1",
      Headline: "feedelement_Headline_1B4hC",
      Timestamp: "feedelement_Timestamp_3XNVu",
      Underline: "feedelement_Underline_7zj63",
    };
  },
});

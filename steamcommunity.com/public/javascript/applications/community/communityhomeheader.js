/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [312],
  {
    50732: (e) => {
      e.exports = {
        LoadingWrapper: "throbber_LoadingWrapper_3Z36h",
        Static: "throbber_Static_kwzRJ",
        none: "throbber_none_2iT5l",
        bottomCircle: "throbber_bottomCircle_3-sjx",
        noString: "throbber_noString_M4pF_",
        Throbber: "throbber_Throbber_7MdwT",
        throbber_small: "throbber_throbber_small_29-XT",
        throbber_medium: "throbber_throbber_medium_1yqSo",
        throbber_large: "throbber_throbber_large_1u2tL",
        throbber_center_wrapper: "throbber_throbber_center_wrapper_Yi4EM",
        ThrobberText: "throbber_ThrobberText_1Zlvf",
        blur: "throbber_blur_3ebLc",
        ThrobberRoundLoop: "throbber_ThrobberRoundLoop_3SEk8",
        roundOuterOutline: "throbber_roundOuterOutline_3M8Ar",
        roundOuter: "throbber_roundOuter_3H7At",
        roundFill: "throbber_roundFill_2FWWt",
        ThrobberFillLoop: "throbber_ThrobberFillLoop_1-rlb",
        topCircle: "throbber_topCircle_3znUF",
        circlePulse: "throbber_circlePulse_1oQUO",
        ThrobberTopCircleLoop: "throbber_ThrobberTopCircleLoop_3oqZE",
        ThrobberBottomCircleLoop: "throbber_ThrobberBottomCircleLoop_3veQr",
        roundThrobber15: "throbber_roundThrobber15_1gQte",
        roundThrobber14: "throbber_roundThrobber14_3DXeR",
        roundThrobber13: "throbber_roundThrobber13_5VEyI",
        roundThrobber12: "throbber_roundThrobber12_wOdFm",
        roundThrobber11: "throbber_roundThrobber11_3Jmyz",
        roundThrobber10: "throbber_roundThrobber10_3QwXn",
        roundThrobber09: "throbber_roundThrobber09_2Yhvq",
        roundThrobber08: "throbber_roundThrobber08_3HcIU",
        roundThrobber07: "throbber_roundThrobber07__2fn3",
        roundThrobber06: "throbber_roundThrobber06_2gCCI",
        roundThrobber05: "throbber_roundThrobber05_1SrtW",
        roundThrobber04: "throbber_roundThrobber04_2P5xs",
        roundThrobber03: "throbber_roundThrobber03_3zYDa",
        roundThrobber02: "throbber_roundThrobber02_2_KYJ",
        roundThrobber01: "throbber_roundThrobber01_3N41H",
        ThrobberRoundLoopThickness: "throbber_ThrobberRoundLoopThickness_1wAwc",
        throbber_xlarge: "throbber_throbber_xlarge_2jzZM",
        throbber_xxlarge: "throbber_throbber_xxlarge_1DFOT",
        ThrobberDelayAppear: "throbber_ThrobberDelayAppear_34XSs",
        Visible: "throbber_Visible_1ziaT",
      };
    },
    9033: (e) => {
      e.exports = {
        CommunityHomeHeader: "communityhomeheader_CommunityHomeHeader_1C-zu",
        CommunityHomeHeaderTitleSection:
          "communityhomeheader_CommunityHomeHeaderTitleSection_31q4b",
        CommunityHomeHeaderTitle:
          "communityhomeheader_CommunityHomeHeaderTitle_1V0f6",
        CommunityHomeHeaderSubtitle:
          "communityhomeheader_CommunityHomeHeaderSubtitle_3QCfE",
        AddFriendBtn: "communityhomeheader_AddFriendBtn_iT6jD",
        CommunityHomeHeaderContent:
          "communityhomeheader_CommunityHomeHeaderContent_2OgY2",
        AppHubsCtn: "communityhomeheader_AppHubsCtn_O58Nj",
        Search: "communityhomeheader_Search_r2myG",
        SearchBar: "communityhomeheader_SearchBar_BhYo9",
        InputContainer: "communityhomeheader_InputContainer_8AoAY",
        Input: "communityhomeheader_Input_1WV5g",
        SearchIcon: "communityhomeheader_SearchIcon_2WLXg",
        SearchResultsCtn: "communityhomeheader_SearchResultsCtn_23v0A",
        SearchResult: "communityhomeheader_SearchResult_2f5QM",
        AppHubShortcutsCtn: "communityhomeheader_AppHubShortcutsCtn_1BQW_",
        AppHubTitle: "communityhomeheader_AppHubTitle_1cmkh",
        AppHubShortcutLinks: "communityhomeheader_AppHubShortcutLinks_Xhben",
        ShortcutLink: "communityhomeheader_ShortcutLink_12bMm",
        ShortcutImage: "communityhomeheader_ShortcutImage_irepM",
        Divider: "communityhomeheader_Divider_3sA9t",
        TabContainer: "communityhomeheader_TabContainer_HY3Yt",
        Tab: "communityhomeheader_Tab_1oAgo",
        ActiveTab: "communityhomeheader_ActiveTab_3Jb_4",
        SortContainer: "communityhomeheader_SortContainer_16Dei",
        Sort: "communityhomeheader_Sort_1sg_E",
        ActiveSort: "communityhomeheader_ActiveSort_3whf2",
        SortIcon: "communityhomeheader_SortIcon_2g7dI",
      };
    },
    34425: (e, r, t) => {
      "use strict";
      t.d(r, { p: () => s });
      var o = t(70655),
        c = t(67294),
        n = t(7707),
        a = t(27745),
        i = t(64839),
        l = t(90666);
      function s(e) {
        const { children: r, navTreeRef: t } = e,
          s = (0, o._T)(e, ["children", "navTreeRef"]),
          m = c.useRef(),
          b = (0, i.BE)(m, t);
        if (l.De.IN_GAMEPADUI) {
          const e = window.__nav_tree_root;
          return c.createElement(
            n.Fe,
            Object.assign({}, s, {
              navTreeRef: b,
              secondary: !0,
              parentEmbeddedNavTree: e,
            }),
            c.createElement(a.O, null, r)
          );
        }
        return c.createElement(c.Fragment, null, r);
      }
    },
    31933: (e, r, t) => {
      "use strict";
      t.d(r, { Ar: () => l, Wo: () => s, i9: () => i, ks: () => n });
      var o = t(67294),
        c = t(78587);
      function n(e, r) {
        let t;
        "string" == typeof e
          ? (t = e)
          : "location" in e
          ? (t = e.location.search)
          : "search" in e && (t = e.search);
        const o = new URLSearchParams(t.substring(1));
        if (o.has(r)) {
          const e = o.getAll(r);
          return e[e.length - 1];
        }
      }
      const a = (e) => null != e;
      function i(e, r, t) {
        const o = new URLSearchParams(e.location.search.substring(1));
        o.delete(r), a(t) && o.append(r, t), e.push(`?${o.toString()}`);
      }
      function l(e, r) {
        const t = (0, c.k6)(),
          l = (0, c.TH)(),
          s = (0, o.useMemo)(() => {
            const t = n(l.search, e);
            return a(t)
              ? a(r)
                ? "boolean" == typeof r
                  ? r.constructor("false" !== t)
                  : r.constructor(t)
                : t
              : r;
          }, [l.search, e, r]),
          m = (0, o.useCallback)(
            (r) => {
              i(t, e, a(r) ? String(r) : null);
            },
            [t, e]
          );
        return [s, m];
      }
      function s(e, r) {
        const t = new URLSearchParams(e.location.search.substring(1));
        for (const e in r)
          if (r.hasOwnProperty(e)) {
            const o = r[e];
            t.delete(e), a(o) && t.append(e, o);
          }
        e.push(`?${t.toString()}`);
      }
    },
    13596: (e, r, t) => {
      "use strict";
      t.d(r, { V: () => i });
      var o = t(67294),
        c = t(7573),
        n = t(50732),
        a = t.n(n);
      const i = o.memo(function (e) {
        const {
          className: r,
          size: t,
          string: n,
          position: i,
          static: m,
          msDelayAppear: b,
        } = e;
        let u = [a().LoadingWrapper, "SteamLogoThrobber", l(t)];
        const [h, d] = o.useState(!b);
        return (
          (0, o.useEffect)(() => {
            if (h) return;
            const e = setTimeout(() => d(!0), b);
            return () => clearTimeout(e);
          }, [b, h]),
          void 0 === n && u.push(a().noString),
          r && u.push(r),
          m && u.push(a().Static),
          o.createElement(
            "div",
            {
              className: (0, c.Z)(
                "center" == i && a().throbber_center_wrapper,
                b && a().ThrobberDelayAppear,
                h && a().Visible
              ),
            },
            h &&
              o.createElement(
                "div",
                { className: u.join(" ") },
                o.createElement(
                  "div",
                  { className: a().Throbber },
                  o.createElement(s, { className: a().base }),
                  o.createElement(s, { className: a().blur })
                )
              ),
            Boolean(n) &&
              o.createElement("div", { className: a().ThrobberText }, n)
          )
        );
      });
      function l(e) {
        switch (e) {
          case "small":
            return a().throbber_small;
          case "medium":
            return a().throbber_medium;
          case "xlarge":
            return a().throbber_xlarge;
          case "xxlarge":
            return a().throbber_xxlarge;
          default:
            return a().throbber_large;
        }
      }
      function s(e) {
        let r = "SVGIcon_Button SVGIcon_Throbber ";
        return (
          e.className && (r += e.className),
          o.createElement(
            "svg",
            {
              version: "1.1",
              id: "base",
              xmlns: "http://www.w3.org/2000/svg",
              className: r,
              x: "0px",
              y: "0px",
              width: "256px",
              height: "256px",
              viewBox: "0 0 256 256",
            },
            o.createElement(
              "g",
              { className: a().partCircle },
              o.createElement("path", {
                className: a().roundOuter,
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895",
              }),
              o.createElement("path", {
                className: a().roundOuter,
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M201.432,101.166",
              }),
              o.createElement("path", {
                className: a().roundOuter,
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754",
              })
            ),
            o.createElement(
              "g",
              { className: a().mainOutline },
              o.createElement("path", {
                className: a().roundFill,
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              o.createElement("path", {
                className: a().roundOuterOutline,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              o.createElement("path", {
                className: a().roundThrobber01,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              o.createElement("path", {
                className: a().roundThrobber02,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              o.createElement("path", {
                className: a().roundThrobber03,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              o.createElement("path", {
                className: a().roundThrobber04,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              o.createElement("path", {
                className: a().roundThrobber05,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              o.createElement("path", {
                className: a().roundThrobber06,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              o.createElement("path", {
                className: a().roundThrobber07,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              o.createElement("path", {
                className: a().roundThrobber08,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              o.createElement("path", {
                className: a().roundThrobber09,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              o.createElement("path", {
                className: a().roundThrobber10,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              o.createElement("path", {
                className: a().roundThrobber11,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              o.createElement("path", {
                className: a().roundThrobber12,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              o.createElement("path", {
                className: a().roundThrobber13,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              o.createElement("path", {
                className: a().roundThrobber14,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              o.createElement("path", {
                className: a().roundThrobber15,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              })
            ),
            o.createElement(
              "g",
              { className: a().bottomCircle },
              o.createElement("path", {
                fill: "#ffffff",
                d: "M89.226,181.579L76.5,176.321c2.256,4.696,6.159,8.628,11.339,10.786 c11.197,4.668,24.11-0.647,28.779-11.854c2.259-5.425,2.274-11.405,0.033-16.841c-2.237-5.436-6.46-9.675-11.886-11.938 c-5.384-2.24-11.151-2.156-16.22-0.244l13.146,5.436c8.261,3.443,12.166,12.93,8.725,21.189 C106.976,181.115,97.486,185.022,89.226,181.579",
              })
            ),
            o.createElement(
              "g",
              { className: a().topCircle },
              o.createElement("circle", {
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
    },
    2840: (e, r, t) => {
      "use strict";
      t.r(r), t.d(r, { default: () => H });
      var o = t(70655),
        c = t(67294),
        n = t(41311),
        a = t(9033),
        i = t.n(a),
        l = t(7707),
        s = t(90666),
        m = t(95598),
        b = t(48341),
        u = t(13596),
        h = t(9669),
        d = t.n(h),
        _ = t(52114);
      var f = t(7573),
        p = t(159),
        T = t(31933),
        k = t(78587),
        S = t(35921),
        E = t(34425),
        y = t(71174);
      t(17010);
      function H() {
        const e = (0, y.L)(),
          r = (0, c.useRef)();
        return (
          (0, c.useEffect)(() => {
            r.current && r.current.TakeFocus();
          }, []),
          c.createElement(
            E.p,
            { navID: "CommunityHomeHeader", NavigationManager: e },
            c.createElement(
              S.s,
              { navRef: r, className: i().CommunityHomeHeader },
              c.createElement(
                "div",
                { className: i().CommunityHomeHeaderTitleSection },
                c.createElement(
                  "div",
                  null,
                  c.createElement(
                    "div",
                    { className: i().CommunityHomeHeaderTitle },
                    (0, n.Xx)("#Community_Home_Header_Title")
                  ),
                  c.createElement(
                    "div",
                    { className: i().CommunityHomeHeaderSubtitle },
                    (0, n.Xx)("#Community_Home_Header_Subtitle")
                  )
                ),
                c.createElement(
                  l.IS,
                  {
                    className: i().AddFriendBtn,
                    href: `${s.De.COMMUNITY_BASE_URL}search/users/`,
                  },
                  (0, n.Xx)("#Community_Home_Header_AddFriend_Button")
                )
              ),
              c.createElement(C, null),
              c.createElement(M, null)
            )
          )
        );
      }
      function C() {
        const [e, r] = (0, c.useState)(""),
          [t, a] = (0, c.useState)([]),
          [h, f] = (0, c.useState)(!1),
          p = (function () {
            const e = (0, c.useMemo)(
                () => (0, s.ip)("personalapps", "application_config") || [],
                []
              ),
              r = (0, c.useMemo)(
                () => (0, s.ip)("popularapps", "application_config") || [],
                []
              ),
              t = [...e, ...r];
            if (t.length)
              return {
                isLoading: 1 === (0, _.wZ)(t, { include_assets: !0 }),
                data: { personalAppIds: e, popularAppIds: r },
              };
            return {
              isLoading: !1,
              data: { personalAppIds: e, popularAppIds: r },
            };
          })();
        if (p.isLoading) return c.createElement(u.V, { position: "center" });
        return c.createElement(
          "div",
          { className: i().CommunityHomeHeaderContent },
          c.createElement(
            S.s,
            { className: i().AppHubsCtn },
            c.createElement(L, {
              appShortcuts: p.data.personalAppIds,
              sectionTitle: (0, n.Xx)("#Community_Home_Header_GameHubs_ForYou"),
              withDivider: p.data.popularAppIds.length > 0,
            }),
            c.createElement(L, {
              appShortcuts: p.data.popularAppIds,
              sectionTitle: (0, n.Xx)(
                "#Community_Home_Header_GameHubs_Popular"
              ),
            })
          ),
          c.createElement(
            S.s,
            {
              onFocus: () => f(!0),
              onBlur: (e) => {
                e.currentTarget.contains(e.relatedTarget) || f(!1);
              },
              className: i().Search,
            },
            c.createElement(
              S.s,
              { className: i().SearchBar },
              c.createElement(
                "div",
                { className: i().InputContainer },
                c.createElement(b.II, {
                  onChange: (e) =>
                    (0, o.mG)(this, void 0, void 0, function* () {
                      r(e.target.value);
                      const t = yield (function (e) {
                        return (0, o.mG)(this, void 0, void 0, function* () {
                          const r = `${s.De.COMMUNITY_BASE_URL}actions/SearchApps/${e}`;
                          return (yield d().get(r)).data;
                        });
                      })(e.target.value);
                      a(t);
                    }),
                  value: e,
                  className: i().Input,
                  placeholder: (0, n.Xx)(
                    "#Community_Home_Header_FindGame_Placeholder"
                  ),
                })
              ),
              c.createElement(
                "div",
                { className: i().SearchIcon },
                c.createElement(m.YtI, null)
              )
            ),
            h &&
              c.createElement(
                S.s,
                { className: i().SearchResultsCtn },
                t.map((e) =>
                  c.createElement(
                    l.IS,
                    {
                      href: `${s.De.COMMUNITY_BASE_URL}app/${e.appid}`,
                      key: e.appid,
                      className: i().SearchResult,
                    },
                    e.name
                  )
                )
              )
          )
        );
      }
      function L(e) {
        const { appShortcuts: r, sectionTitle: t, withDivider: o } = e;
        return r && r.length
          ? c.createElement(
              "div",
              { className: i().AppHubShortcutsCtn },
              c.createElement("div", { className: i().AppHubTitle }, t),
              c.createElement(
                "div",
                {
                  "flow-children": "row",
                  className: (0, f.Z)(
                    i().AppHubShortcutLinks,
                    o ? i().Divider : null
                  ),
                },
                r.map((e, r) => c.createElement(N, { key: r, appId: e }))
              )
            )
          : null;
      }
      function N(e) {
        const r = p.Z.Get().GetApp(e.appId);
        return r
          ? c.createElement(
              l.IS,
              {
                className: i().ShortcutLink,
                href: `${s.De.COMMUNITY_BASE_URL}app/${e.appId}`,
              },
              c.createElement("img", {
                className: i().ShortcutImage,
                src: r.GetAssets().GetLibraryCapsuleURL(),
              })
            )
          : null;
      }
      const g = "subsection",
        v = "browsefilter";
      function M() {
        const e = (0, k.k6)(),
          r = (0, T.ks)(e, g),
          t = (0, T.ks)(e, v);
        return c.createElement(
          "div",
          null,
          c.createElement(A, { activeTab: r, activeSort: t }),
          c.createElement(w, { activeTab: r, activeSort: t })
        );
      }
      function A(e) {
        const { activeTab: r, activeSort: t } = e,
          o = c.useRef();
        c.useEffect(() => {
          const e = document.getElementById(r);
          if (e && (null == o ? void 0 : o.current)) {
            const r = e.offsetLeft + e.clientWidth;
            r > window.innerWidth &&
              o.current.scrollBy(r - window.innerWidth, 0);
          }
        }, [null == o ? void 0 : o.current]);
        return c.createElement(
          S.s,
          { "flow-children": "row", className: i().TabContainer, ref: o },
          [
            { label: "#Community_Home_Header_Filter_All", id: "" },
            {
              label: "#Community_Home_Header_Filter_Screenshots",
              id: "screenshots",
            },
            { label: "#Community_Home_Header_Filter_Artwork", id: "images" },
            {
              label: "#Community_Home_Header_Filter_Broadcasts",
              id: "broadcasts",
            },
            { label: "#Community_Home_Header_Filter_Videos", id: "videos" },
            { label: "#Community_Home_Header_Filter_Workshop", id: "workshop" },
            { label: "#Community_Home_Header_Filter_News", id: "news" },
            { label: "#Community_Home_Header_Filter_Guides", id: "guides" },
            { label: "#Community_Home_Header_Filter_Reviews", id: "reviews" },
          ].map((e, o) => {
            const a = r ? r === e.id : 0 === o,
              m = e.id ? `subsection=${e.id}` : "",
              b = t ? `browsefilter=${t}` : "",
              u = `${s.De.COMMUNITY_BASE_URL}${b || m ? "?" : ""}${b}${
                m ? "&" : ""
              }${m}`;
            return c.createElement(
              l.IS,
              {
                id: e.id,
                href: u,
                key: e.id,
                className: (0, f.Z)(i().Tab, a ? i().ActiveTab : null),
              },
              (0, n.Xx)(e.label)
            );
          })
        );
      }
      function w(e) {
        const { activeTab: r, activeSort: t } = e;
        return c.createElement(
          S.s,
          { "flow-children": "row", className: i().SortContainer },
          c.createElement(
            "div",
            { className: i().SortIcon },
            c.createElement(m.iS8, null)
          ),
          [
            { label: "#Community_Home_Header_BrowseFilter_Popular", id: "" },
            {
              label: "#Community_Home_Header_BrowseFilter_Recent",
              id: "mostrecent",
            },
          ].map((e, o) => {
            const a = t ? t === e.id : 0 === o,
              m = r ? `subsection=${r}` : "",
              b = e.id ? `browsefilter=${e.id}` : "",
              u = `${s.De.COMMUNITY_BASE_URL}${b || m ? "?" : ""}${b}${
                m ? "&" : ""
              }${m}`;
            return c.createElement(
              l.IS,
              {
                href: u,
                key: e.id,
                className: (0, f.Z)(i().Sort, a ? i().ActiveSort : null),
              },
              (0, n.Xx)(e.label)
            );
          })
        );
      }
    },
  },
]);

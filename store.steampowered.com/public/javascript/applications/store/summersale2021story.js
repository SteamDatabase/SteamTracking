/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [1918],
  {
    65053: (e) => {
      e.exports = {
        PageOuterContainer: "summersale2021story_PageOuterContainer_A1mol",
        LocalizedHeaderImg: "summersale2021story_LocalizedHeaderImg_2ef14",
        LocalizedHeaderMobileImg:
          "summersale2021story_LocalizedHeaderMobileImg_3NX2a",
        PageInnerBG: "summersale2021story_PageInnerBG_dkYvU",
        PageInnerContent: "summersale2021story_PageInnerContent_20TiA",
        GenreListContainer: "summersale2021story_GenreListContainer_17we1",
        HeaderContainer: "summersale2021story_HeaderContainer_1gPQk",
        HeaderPrefix: "summersale2021story_HeaderPrefix_3hjBU",
        GenreTitle: "summersale2021story_GenreTitle_25hml",
        ListHeader: "summersale2021story_ListHeader_jZV6e",
        HeaderIntro: "summersale2021story_HeaderIntro_3STDK",
        HeaderDesc: "summersale2021story_HeaderDesc_3Eeti",
        Wallpapers: "summersale2021story_Wallpapers_3j1mt",
        Noto: "summersale2021story_Noto_1S5tj",
        GenreContainer: "summersale2021story_GenreContainer_2JuP7",
        GenreSubheader: "summersale2021story_GenreSubheader_1hagU",
        LeftColumn: "summersale2021story_LeftColumn_1BzJC",
        RightColumn: "summersale2021story_RightColumn_2l_lu",
        GenreStory: "summersale2021story_GenreStory_3cVcC",
        StickerPreview: "summersale2021story_StickerPreview_1AsdN",
        Unclaimed: "summersale2021story_Unclaimed_oT-hE",
        CompletedSummaryText: "summersale2021story_CompletedSummaryText_24Z9t",
        TheEnd: "summersale2021story_TheEnd_2b58z",
        BadgeContainer: "summersale2021story_BadgeContainer_2wlN6",
        BadgeName: "summersale2021story_BadgeName_3EwgF",
        SubHeader: "summersale2021story_SubHeader_-Ej5O",
        BadgeText: "summersale2021story_BadgeText_2Vbv_",
        BadgeDesc: "summersale2021story_BadgeDesc_37uOV",
        BadgeImg: "summersale2021story_BadgeImg_x74En",
        BadgeLink: "summersale2021story_BadgeLink_2qaiZ",
        FrameExample: "summersale2021story_FrameExample_1q5L2",
        Badge_51: "summersale2021story_Badge_51_1iE6U",
        Badge_52: "summersale2021story_Badge_52_2tJdQ",
        Badge_53: "summersale2021story_Badge_53_2kvVu",
        Badge_54: "summersale2021story_Badge_54_2VzkL",
        Badge_55: "summersale2021story_Badge_55_11CXt",
        Column: "summersale2021story_Column_1TnJ8",
      };
    },
    23217: (e, r, a) => {
      "use strict";
      a.d(r, { l: () => o });
      var s = a(52868),
        t = a.n(s),
        m = a(54856);
      function o(e) {
        if (t().isCancel(e))
          return { strErrorMsg: "Action Cancelled:" + e, errorCode: 52 };
        if (
          void 0 !== e.response &&
          e.response.data &&
          "object" == typeof e.response.data
        ) {
          if ("msg" in e.response.data)
            return {
              strErrorMsg: e.response.data.msg,
              errorCode: e.response.data.success,
            };
          if ("err_msg" in e.response.data)
            return {
              strErrorMsg: e.response.data.err_msg,
              errorCode: e.response.data.success,
            };
          if ("message" in e.response.data)
            return {
              strErrorMsg: e.response.data.message,
              errorCode: e.response.data.success,
            };
        } else if ("object" == typeof e.data) {
          if ("msg" in e.data)
            return { strErrorMsg: e.data.msg, errorCode: e.data.success };
          if ("err_msg" in e.data)
            return { strErrorMsg: e.data.err_msg, errorCode: e.data.success };
          if ("message" in e.response.data)
            return { strErrorMsg: e.data.message, errorCode: e.data.success };
        } else {
          if (void 0 !== e.success && void 0 !== e.msg)
            return { strErrorMsg: e.msg, errorCode: e.success };
          if (void 0 !== e.success && void 0 !== e.message)
            return { strErrorMsg: e.message, errorCode: e.success };
          if (void 0 !== e.success && void 0 !== e.err_msg)
            return { strErrorMsg: e.err_msg, errorCode: e.success };
          if ("string" == typeof e && e.length > 1024)
            console.groupCollapsed(
              "GetMsgAndErrorCodeFromResponse cannot parse: ",
            ),
              console.error(e),
              console.groupEnd();
          else {
            if ("object" == typeof e && e instanceof m.gA)
              return {
                strErrorMsg: "" + e.GetEResult(),
                errorCode: e.GetEResult(),
              };
            console.error("GetMsgAndErrorCodeFromResponse cannot parse: ", e);
          }
        }
        return "object" == typeof e && "status" in e
          ? {
              strErrorMsg: "Unknown Error: " + e + "\nStatus Code:" + e.status,
              errorCode: 2,
            }
          : { strErrorMsg: "Unknown Error: " + e, errorCode: 2 };
      }
    },
    39070: (e, r, a) => {
      "use strict";
      a.r(r), a.d(r, { default: () => d });
      var s = a(89526),
        t = a(90210),
        m = a(19304),
        o = a(14826),
        n = a(32765),
        l = a(65053);
      const d = () => {
          (0, t.jM)();
          const e = (0, t.Tv)(),
            r = (0, t.h1)(),
            a = (0, t.rO)(),
            d = (0, t.bM)(),
            i = [],
            u = [];
          r.forEach((r) => {
            const a = r.eGenre,
              t = n.De.STORE_BASE_URL + "sale/" + r.strSalePage;
            let m = (0, o.kQ)(
              "#Summer_21_Story_Enter",
              s.createElement("span", null, (0, o.Xx)(r.strGenreName)),
            );
            if (e.has(a)) {
              let o = "";
              1 == e.get(a).choice
                ? (o = r.strResultA + "_Summary")
                : 2 == e.get(a).choice && (o = r.strResultB + "_Summary"),
                i.push(
                  s.createElement(c, {
                    key: a,
                    strSubheader: m,
                    bClaimed: !0,
                    strBackgroundColor: r.strBackgroundColor,
                    eGenre: r.eGenre,
                    strTitle: r.strPageTitle,
                    strSaleURL: t,
                    strSummary: o,
                  }),
                );
            } else {
              let e = "";
              u.length || (e = "next"),
                u.push(
                  s.createElement(c, {
                    key: a,
                    strID: e,
                    strSubheader: m,
                    strBackgroundColor: "#7C5F5A",
                    bClaimed: !1,
                    eGenre: r.eGenre,
                    strTitle: r.strPageTitle,
                    strSaleURL: t,
                    strSummary: "#Summer_21_Story_Next_Intro",
                  }),
                );
            }
          });
          let g = i.concat(u);
          return s.createElement(
            "div",
            { className: (0, m.Z)(l.PageOuterContainer, n.De.LANGUAGE) },
            s.createElement(
              "div",
              { className: l.PageInnerContainer },
              s.createElement(
                "a",
                { href: n.De.STORE_BASE_URL },
                a &&
                  s.createElement("img", {
                    className: l.LocalizedHeaderImg,
                    src: a,
                  }),
                d &&
                  s.createElement("img", {
                    className: l.LocalizedHeaderMobileImg,
                    src: d,
                  }),
              ),
              s.createElement(
                "div",
                { className: l.PageInnerBG },
                s.createElement(
                  "div",
                  { className: l.PageInnerContent },
                  s.createElement(
                    "div",
                    { className: l.HeaderContainer },
                    s.createElement(
                      "div",
                      { className: l.HeaderPrefix },
                      (0, o.Xx)("#Summer_21_Overview_Title_Prefix"),
                    ),
                    (0, o.Xx)("#Summer_21_Overview_Title"),
                  ),
                  s.createElement(
                    "div",
                    { className: (0, m.Z)(l.HeaderDesc, l.Noto) },
                    (0, o.Xx)("#Summer_21_Overview_Description1"),
                  ),
                  s.createElement(
                    "div",
                    { className: (0, m.Z)(l.HeaderDesc, l.Noto) },
                    (0, o.Xx)("#Summer_21_Overview_Description3"),
                  ),
                  s.createElement(
                    "div",
                    { className: (0, m.Z)(l.HeaderDesc, l.Noto) },
                    (0, o.Xx)("#Summer_21_Overview_Description4"),
                  ),
                  s.createElement(
                    "a",
                    {
                      id: "wallpapers",
                      href:
                        n.De.MEDIA_CDN_URL +
                        "store/promo/summer2021/Steam_Summer_Sale_2021_Wallpapers.zip",
                      className: (0, m.Z)(l.HeaderDesc, l.Noto, l.Wallpapers),
                    },
                    "*",
                    (0, o.Xx)("#Summer21_Story_DownloadWallpaper"),
                  ),
                  s.createElement(
                    "div",
                    { className: (0, m.Z)(l.HeaderIntro, l.Noto) },
                    (0, o.Xx)("#Summer_21_Overview_Description2"),
                  ),
                  s.createElement(
                    "div",
                    { className: (0, m.Z)(l.HeaderIntro, l.Noto) },
                    (0, o.Xx)("#Summer_21_Story_Intro"),
                  ),
                  s.createElement(
                    "div",
                    { className: (0, m.Z)(l.ListHeader, l.Noto) },
                    (0, o.Xx)("#Summer_21_Story_Next"),
                  ),
                  s.createElement(
                    "div",
                    { className: (0, m.Z)(l.GenreListContainer) },
                    g,
                  ),
                ),
                s.createElement(_, null),
              ),
            ),
          );
        },
        _ = (e) => {
          const r = (0, t.Re)();
          let a;
          if (51 == r)
            a = {
              badge_name: "#Summer21_Badge_Outcome1_Title",
              badge_desc: "#Summer21_Badge_Outcome1_Description",
              badge_class: l.Badge_51,
            };
          else if (52 == r)
            a = {
              badge_name: "#Summer21_Badge_Outcome2_Title",
              badge_desc: "#Summer21_Badge_Outcome2_Description",
              badge_class: l.Badge_52,
            };
          else if (53 == r)
            a = {
              badge_name: "#Summer21_Badge_Outcome3_Title",
              badge_desc: "#Summer21_Badge_Outcome3_Description",
              badge_class: l.Badge_53,
            };
          else if (54 == r)
            a = {
              badge_name: "#Summer21_Badge_Outcome4_Title",
              badge_desc: "#Summer21_Badge_Outcome4_Description",
              badge_class: l.Badge_54,
            };
          else {
            if (55 != r) return null;
            a = {
              badge_name: "#Summer21_Badge_Outcome5_Title",
              badge_desc: "#Summer21_Badge_Outcome5_Description",
              badge_class: l.Badge_55,
            };
          }
          return s.createElement(
            s.Fragment,
            null,
            s.createElement(
              "div",
              {
                className: (0, m.Z)(
                  l.HeaderDesc,
                  l.Noto,
                  l.CompletedSummaryText,
                ),
              },
              (0, o.Xx)("#Summer21_Badge_Unlocked_Description"),
            ),
            s.createElement(
              "div",
              { id: "badge", className: (0, m.Z)(l.BadgeContainer, l.Noto) },
              s.createElement(
                "div",
                { className: l.Column },
                s.createElement(
                  "div",
                  { className: l.SubHeader },
                  (0, o.Xx)("#Summer21_Badge_Prelude"),
                ),
                s.createElement(
                  "div",
                  { className: l.BadgeName },
                  (0, o.Xx)(a.badge_name),
                ),
                s.createElement(
                  "div",
                  { className: l.BadgeDesc },
                  (0, o.Xx)(a.badge_desc),
                ),
              ),
              s.createElement(
                "div",
                { className: l.Column },
                s.createElement("a", {
                  className: (0, m.Z)(l.BadgeImg, a.badge_class),
                  href: n.De.COMMUNITY_BASE_URL + "my/badges/" + r,
                }),
                s.createElement(
                  "div",
                  { className: l.BadgeText },
                  (0, o.Xx)("#Summer21_Badge_Congrats1"),
                ),
                s.createElement(
                  "div",
                  { className: l.BadgeText },
                  (0, o.Xx)("#Summer21_Badge_Congrats2"),
                ),
                s.createElement(
                  "a",
                  {
                    className: l.BadgeLink,
                    href: n.De.COMMUNITY_BASE_URL + "my/edit/avatar/" + r,
                  },
                  (0, o.Xx)("#Summer21_Badge_View"),
                ),
                s.createElement("a", {
                  className: l.FrameExample,
                  href: n.De.COMMUNITY_BASE_URL + "my/edit/avatar/" + r,
                }),
              ),
            ),
            s.createElement(
              "div",
              { className: (0, m.Z)(l.TheEnd, l.Noto) },
              (0, o.Xx)("#Summer21_Story_End"),
            ),
          );
        },
        c = (e) => {
          const r = (0, t.BO)(e.eGenre);
          return s.createElement(
            "a",
            {
              id: e.strID,
              href: e.strSaleURL,
              style: { backgroundColor: `${e.strBackgroundColor}` },
              className: (0, m.Z)(l.GenreContainer, l.Claimed),
            },
            s.createElement(
              "div",
              { className: l.LeftColumn },
              s.createElement(
                "div",
                { className: (0, m.Z)(l.GenreSubheader, l.Noto) },
                e.strSubheader,
              ),
              s.createElement(
                "div",
                { className: l.GenreTitle },
                (0, o.Xx)(e.strTitle),
              ),
              s.createElement(
                "div",
                { className: (0, m.Z)(l.GenreStory, l.Noto) },
                (0, o.Xx)(e.strSummary),
              ),
            ),
            s.createElement(
              "div",
              { className: l.RightColumn },
              r &&
                s.createElement("div", {
                  className: l.StickerPreview,
                  style: { backgroundImage: `url(${r})` },
                }),
              !e.bClaimed &&
                s.createElement("div", {
                  className: (0, m.Z)(l.StickerPreview, l.Unclaimed),
                }),
            ),
          );
        };
    },
  },
]);

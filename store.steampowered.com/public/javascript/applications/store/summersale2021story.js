/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [1918],
  {
    38105: (e) => {
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
    23217: (e, r, s) => {
      "use strict";
      s.d(r, { l: () => o });
      var a = s(52868),
        t = s.n(a),
        m = s(54856);
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
          if ("success" in e.response.data)
            return {
              strErrorMsg: "error code: " + e.response.data.success,
              errorCode: e.response.data.success,
            };
        } else if ("object" == typeof e.data) {
          if ("msg" in e.data)
            return { strErrorMsg: e.data.msg, errorCode: e.data.success };
          if ("err_msg" in e.data)
            return { strErrorMsg: e.data.err_msg, errorCode: e.data.success };
          if ("message" in e.data)
            return { strErrorMsg: e.data.message, errorCode: e.data.success };
          if ("success" in e.data)
            return {
              strErrorMsg: "error code: " + e.data.success,
              errorCode: e.data.success,
            };
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
              console.warn(e),
              console.groupEnd();
          else {
            if ("object" == typeof e && e instanceof m.gA)
              return {
                strErrorMsg: "" + e.GetEResult(),
                errorCode: e.GetEResult(),
              };
            console.warn("GetMsgAndErrorCodeFromResponse cannot parse: ", e);
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
    39070: (e, r, s) => {
      "use strict";
      s.r(r), s.d(r, { default: () => d });
      var a = s(89526),
        t = s(90210),
        m = s(19304),
        o = s(14826),
        n = s(32765),
        l = s(38105);
      const d = () => {
          (0, t.jM)();
          const e = (0, t.Tv)(),
            r = (0, t.h1)(),
            s = (0, t.rO)(),
            d = (0, t.bM)(),
            i = [],
            u = [];
          r.forEach((r) => {
            const s = r.eGenre,
              t = n.De.STORE_BASE_URL + "sale/" + r.strSalePage;
            let m = (0, o.kQ)(
              "#Summer_21_Story_Enter",
              a.createElement("span", null, (0, o.Xx)(r.strGenreName)),
            );
            if (e.has(s)) {
              let o = "";
              1 == e.get(s).choice
                ? (o = r.strResultA + "_Summary")
                : 2 == e.get(s).choice && (o = r.strResultB + "_Summary"),
                i.push(
                  a.createElement(_, {
                    key: s,
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
                  a.createElement(_, {
                    key: s,
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
          return a.createElement(
            "div",
            { className: (0, m.Z)(l.PageOuterContainer, n.De.LANGUAGE) },
            a.createElement(
              "div",
              { className: l.PageInnerContainer },
              a.createElement(
                "a",
                { href: n.De.STORE_BASE_URL },
                s &&
                  a.createElement("img", {
                    className: l.LocalizedHeaderImg,
                    src: s,
                  }),
                d &&
                  a.createElement("img", {
                    className: l.LocalizedHeaderMobileImg,
                    src: d,
                  }),
              ),
              a.createElement(
                "div",
                { className: l.PageInnerBG },
                a.createElement(
                  "div",
                  { className: l.PageInnerContent },
                  a.createElement(
                    "div",
                    { className: l.HeaderContainer },
                    a.createElement(
                      "div",
                      { className: l.HeaderPrefix },
                      (0, o.Xx)("#Summer_21_Overview_Title_Prefix"),
                    ),
                    (0, o.Xx)("#Summer_21_Overview_Title"),
                  ),
                  a.createElement(
                    "div",
                    { className: (0, m.Z)(l.HeaderDesc, l.Noto) },
                    (0, o.Xx)("#Summer_21_Overview_Description1"),
                  ),
                  a.createElement(
                    "div",
                    { className: (0, m.Z)(l.HeaderDesc, l.Noto) },
                    (0, o.Xx)("#Summer_21_Overview_Description3"),
                  ),
                  a.createElement(
                    "div",
                    { className: (0, m.Z)(l.HeaderDesc, l.Noto) },
                    (0, o.Xx)("#Summer_21_Overview_Description4"),
                  ),
                  a.createElement(
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
                  a.createElement(
                    "div",
                    { className: (0, m.Z)(l.HeaderIntro, l.Noto) },
                    (0, o.Xx)("#Summer_21_Overview_Description2"),
                  ),
                  a.createElement(
                    "div",
                    { className: (0, m.Z)(l.HeaderIntro, l.Noto) },
                    (0, o.Xx)("#Summer_21_Story_Intro"),
                  ),
                  a.createElement(
                    "div",
                    { className: (0, m.Z)(l.ListHeader, l.Noto) },
                    (0, o.Xx)("#Summer_21_Story_Next"),
                  ),
                  a.createElement(
                    "div",
                    { className: (0, m.Z)(l.GenreListContainer) },
                    g,
                  ),
                ),
                a.createElement(c, null),
              ),
            ),
          );
        },
        c = (e) => {
          const r = (0, t.Re)();
          let s;
          if (51 == r)
            s = {
              badge_name: "#Summer21_Badge_Outcome1_Title",
              badge_desc: "#Summer21_Badge_Outcome1_Description",
              badge_class: l.Badge_51,
            };
          else if (52 == r)
            s = {
              badge_name: "#Summer21_Badge_Outcome2_Title",
              badge_desc: "#Summer21_Badge_Outcome2_Description",
              badge_class: l.Badge_52,
            };
          else if (53 == r)
            s = {
              badge_name: "#Summer21_Badge_Outcome3_Title",
              badge_desc: "#Summer21_Badge_Outcome3_Description",
              badge_class: l.Badge_53,
            };
          else if (54 == r)
            s = {
              badge_name: "#Summer21_Badge_Outcome4_Title",
              badge_desc: "#Summer21_Badge_Outcome4_Description",
              badge_class: l.Badge_54,
            };
          else {
            if (55 != r) return null;
            s = {
              badge_name: "#Summer21_Badge_Outcome5_Title",
              badge_desc: "#Summer21_Badge_Outcome5_Description",
              badge_class: l.Badge_55,
            };
          }
          return a.createElement(
            a.Fragment,
            null,
            a.createElement(
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
            a.createElement(
              "div",
              { id: "badge", className: (0, m.Z)(l.BadgeContainer, l.Noto) },
              a.createElement(
                "div",
                { className: l.Column },
                a.createElement(
                  "div",
                  { className: l.SubHeader },
                  (0, o.Xx)("#Summer21_Badge_Prelude"),
                ),
                a.createElement(
                  "div",
                  { className: l.BadgeName },
                  (0, o.Xx)(s.badge_name),
                ),
                a.createElement(
                  "div",
                  { className: l.BadgeDesc },
                  (0, o.Xx)(s.badge_desc),
                ),
              ),
              a.createElement(
                "div",
                { className: l.Column },
                a.createElement("a", {
                  className: (0, m.Z)(l.BadgeImg, s.badge_class),
                  href: n.De.COMMUNITY_BASE_URL + "my/badges/" + r,
                }),
                a.createElement(
                  "div",
                  { className: l.BadgeText },
                  (0, o.Xx)("#Summer21_Badge_Congrats1"),
                ),
                a.createElement(
                  "div",
                  { className: l.BadgeText },
                  (0, o.Xx)("#Summer21_Badge_Congrats2"),
                ),
                a.createElement(
                  "a",
                  {
                    className: l.BadgeLink,
                    href: n.De.COMMUNITY_BASE_URL + "my/edit/avatar/" + r,
                  },
                  (0, o.Xx)("#Summer21_Badge_View"),
                ),
                a.createElement("a", {
                  className: l.FrameExample,
                  href: n.De.COMMUNITY_BASE_URL + "my/edit/avatar/" + r,
                }),
              ),
            ),
            a.createElement(
              "div",
              { className: (0, m.Z)(l.TheEnd, l.Noto) },
              (0, o.Xx)("#Summer21_Story_End"),
            ),
          );
        },
        _ = (e) => {
          const r = (0, t.BO)(e.eGenre);
          return a.createElement(
            "a",
            {
              id: e.strID,
              href: e.strSaleURL,
              style: { backgroundColor: `${e.strBackgroundColor}` },
              className: (0, m.Z)(l.GenreContainer, l.Claimed),
            },
            a.createElement(
              "div",
              { className: l.LeftColumn },
              a.createElement(
                "div",
                { className: (0, m.Z)(l.GenreSubheader, l.Noto) },
                e.strSubheader,
              ),
              a.createElement(
                "div",
                { className: l.GenreTitle },
                (0, o.Xx)(e.strTitle),
              ),
              a.createElement(
                "div",
                { className: (0, m.Z)(l.GenreStory, l.Noto) },
                (0, o.Xx)(e.strSummary),
              ),
            ),
            a.createElement(
              "div",
              { className: l.RightColumn },
              r &&
                a.createElement("div", {
                  className: l.StickerPreview,
                  style: { backgroundImage: `url(${r})` },
                }),
              !e.bClaimed &&
                a.createElement("div", {
                  className: (0, m.Z)(l.StickerPreview, l.Unclaimed),
                }),
            ),
          );
        };
    },
  },
]);

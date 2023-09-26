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
    39070: (e, a, r) => {
      "use strict";
      r.r(a), r.d(a, { default: () => c });
      var t = r(89526),
        m = r(94738),
        s = r(72985),
        l = r(90210),
        _ = r(19304),
        n = r(14826),
        o = r(32765),
        d = r(38105);
      const c = () => {
          (0, l.jM)();
          const e = (0, l.Tv)(),
            a = (0, l.h1)(),
            r = (0, l.rO)(),
            m = (0, l.bM)(),
            c = [],
            g = [];
          a.forEach((a) => {
            const r = a.eGenre,
              m = o.De.STORE_BASE_URL + "sale/" + a.strSalePage;
            let l = (0, n.kQ)(
              "#Summer_21_Story_Enter",
              t.createElement("span", null, (0, n.Xx)(a.strGenreName)),
            );
            if (e.has(r)) {
              let _ = "";
              e.get(r).choice == s.q5.k_ESummerSale2021StoryChoice_A
                ? (_ = a.strResultA + "_Summary")
                : e.get(r).choice == s.q5.k_ESummerSale2021StoryChoice_B &&
                  (_ = a.strResultB + "_Summary"),
                c.push(
                  t.createElement(u, {
                    key: r,
                    strSubheader: l,
                    bClaimed: !0,
                    strBackgroundColor: a.strBackgroundColor,
                    eGenre: a.eGenre,
                    strTitle: a.strPageTitle,
                    strSaleURL: m,
                    strSummary: _,
                  }),
                );
            } else {
              let e = "";
              g.length || (e = "next"),
                g.push(
                  t.createElement(u, {
                    key: r,
                    strID: e,
                    strSubheader: l,
                    strBackgroundColor: "#7C5F5A",
                    bClaimed: !1,
                    eGenre: a.eGenre,
                    strTitle: a.strPageTitle,
                    strSaleURL: m,
                    strSummary: "#Summer_21_Story_Next_Intro",
                  }),
                );
            }
          });
          let S = c.concat(g);
          return t.createElement(
            "div",
            { className: (0, _.Z)(d.PageOuterContainer, o.De.LANGUAGE) },
            t.createElement(
              "div",
              { className: d.PageInnerContainer },
              t.createElement(
                "a",
                { href: o.De.STORE_BASE_URL },
                r &&
                  t.createElement("img", {
                    className: d.LocalizedHeaderImg,
                    src: r,
                  }),
                m &&
                  t.createElement("img", {
                    className: d.LocalizedHeaderMobileImg,
                    src: m,
                  }),
              ),
              t.createElement(
                "div",
                { className: d.PageInnerBG },
                t.createElement(
                  "div",
                  { className: d.PageInnerContent },
                  t.createElement(
                    "div",
                    { className: d.HeaderContainer },
                    t.createElement(
                      "div",
                      { className: d.HeaderPrefix },
                      (0, n.Xx)("#Summer_21_Overview_Title_Prefix"),
                    ),
                    (0, n.Xx)("#Summer_21_Overview_Title"),
                  ),
                  t.createElement(
                    "div",
                    { className: (0, _.Z)(d.HeaderDesc, d.Noto) },
                    (0, n.Xx)("#Summer_21_Overview_Description1"),
                  ),
                  t.createElement(
                    "div",
                    { className: (0, _.Z)(d.HeaderDesc, d.Noto) },
                    (0, n.Xx)("#Summer_21_Overview_Description3"),
                  ),
                  t.createElement(
                    "div",
                    { className: (0, _.Z)(d.HeaderDesc, d.Noto) },
                    (0, n.Xx)("#Summer_21_Overview_Description4"),
                  ),
                  t.createElement(
                    "a",
                    {
                      id: "wallpapers",
                      href:
                        o.De.MEDIA_CDN_URL +
                        "store/promo/summer2021/Steam_Summer_Sale_2021_Wallpapers.zip",
                      className: (0, _.Z)(d.HeaderDesc, d.Noto, d.Wallpapers),
                    },
                    "*",
                    (0, n.Xx)("#Summer21_Story_DownloadWallpaper"),
                  ),
                  t.createElement(
                    "div",
                    { className: (0, _.Z)(d.HeaderIntro, d.Noto) },
                    (0, n.Xx)("#Summer_21_Overview_Description2"),
                  ),
                  t.createElement(
                    "div",
                    { className: (0, _.Z)(d.HeaderIntro, d.Noto) },
                    (0, n.Xx)("#Summer_21_Story_Intro"),
                  ),
                  t.createElement(
                    "div",
                    { className: (0, _.Z)(d.ListHeader, d.Noto) },
                    (0, n.Xx)("#Summer_21_Story_Next"),
                  ),
                  t.createElement(
                    "div",
                    { className: (0, _.Z)(d.GenreListContainer) },
                    S,
                  ),
                ),
                t.createElement(i, null),
              ),
            ),
          );
        },
        i = (e) => {
          const a = (0, l.Re)();
          let r;
          if (a == m.Jj.k_EUserBadgeSummerSale2021_MaskedAvenger)
            r = {
              badge_name: "#Summer21_Badge_Outcome1_Title",
              badge_desc: "#Summer21_Badge_Outcome1_Description",
              badge_class: d.Badge_51,
            };
          else if (a == m.Jj.k_EUserBadgeSummerSale2021_TrailblazingExplorer)
            r = {
              badge_name: "#Summer21_Badge_Outcome2_Title",
              badge_desc: "#Summer21_Badge_Outcome2_Description",
              badge_class: d.Badge_52,
            };
          else if (a == m.Jj.k_EUserBadgeSummerSale2021_GorillaScientist)
            r = {
              badge_name: "#Summer21_Badge_Outcome3_Title",
              badge_desc: "#Summer21_Badge_Outcome3_Description",
              badge_class: d.Badge_53,
            };
          else if (a == m.Jj.k_EUserBadgeSummerSale2021_ParanormalProfessor)
            r = {
              badge_name: "#Summer21_Badge_Outcome4_Title",
              badge_desc: "#Summer21_Badge_Outcome4_Description",
              badge_class: d.Badge_54,
            };
          else {
            if (a != m.Jj.k_EUserBadgeSummerSale2021_GhostDetective)
              return null;
            r = {
              badge_name: "#Summer21_Badge_Outcome5_Title",
              badge_desc: "#Summer21_Badge_Outcome5_Description",
              badge_class: d.Badge_55,
            };
          }
          return t.createElement(
            t.Fragment,
            null,
            t.createElement(
              "div",
              {
                className: (0, _.Z)(
                  d.HeaderDesc,
                  d.Noto,
                  d.CompletedSummaryText,
                ),
              },
              (0, n.Xx)("#Summer21_Badge_Unlocked_Description"),
            ),
            t.createElement(
              "div",
              { id: "badge", className: (0, _.Z)(d.BadgeContainer, d.Noto) },
              t.createElement(
                "div",
                { className: d.Column },
                t.createElement(
                  "div",
                  { className: d.SubHeader },
                  (0, n.Xx)("#Summer21_Badge_Prelude"),
                ),
                t.createElement(
                  "div",
                  { className: d.BadgeName },
                  (0, n.Xx)(r.badge_name),
                ),
                t.createElement(
                  "div",
                  { className: d.BadgeDesc },
                  (0, n.Xx)(r.badge_desc),
                ),
              ),
              t.createElement(
                "div",
                { className: d.Column },
                t.createElement("a", {
                  className: (0, _.Z)(d.BadgeImg, r.badge_class),
                  href: o.De.COMMUNITY_BASE_URL + "my/badges/" + a,
                }),
                t.createElement(
                  "div",
                  { className: d.BadgeText },
                  (0, n.Xx)("#Summer21_Badge_Congrats1"),
                ),
                t.createElement(
                  "div",
                  { className: d.BadgeText },
                  (0, n.Xx)("#Summer21_Badge_Congrats2"),
                ),
                t.createElement(
                  "a",
                  {
                    className: d.BadgeLink,
                    href: o.De.COMMUNITY_BASE_URL + "my/edit/avatar/" + a,
                  },
                  (0, n.Xx)("#Summer21_Badge_View"),
                ),
                t.createElement("a", {
                  className: d.FrameExample,
                  href: o.De.COMMUNITY_BASE_URL + "my/edit/avatar/" + a,
                }),
              ),
            ),
            t.createElement(
              "div",
              { className: (0, _.Z)(d.TheEnd, d.Noto) },
              (0, n.Xx)("#Summer21_Story_End"),
            ),
          );
        },
        u = (e) => {
          const a = (0, l.BO)(e.eGenre);
          return t.createElement(
            "a",
            {
              id: e.strID,
              href: e.strSaleURL,
              style: { backgroundColor: `${e.strBackgroundColor}` },
              className: (0, _.Z)(d.GenreContainer, d.Claimed),
            },
            t.createElement(
              "div",
              { className: d.LeftColumn },
              t.createElement(
                "div",
                { className: (0, _.Z)(d.GenreSubheader, d.Noto) },
                e.strSubheader,
              ),
              t.createElement(
                "div",
                { className: d.GenreTitle },
                (0, n.Xx)(e.strTitle),
              ),
              t.createElement(
                "div",
                { className: (0, _.Z)(d.GenreStory, d.Noto) },
                (0, n.Xx)(e.strSummary),
              ),
            ),
            t.createElement(
              "div",
              { className: d.RightColumn },
              a &&
                t.createElement("div", {
                  className: d.StickerPreview,
                  style: { backgroundImage: `url(${a})` },
                }),
              !e.bClaimed &&
                t.createElement("div", {
                  className: (0, _.Z)(d.StickerPreview, d.Unclaimed),
                }),
            ),
          );
        };
    },
  },
]);

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [1918],
  {
    30325: (e) => {
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
    19091: (e, a, r) => {
      "use strict";
      r.r(a), r.d(a, { default: () => d });
      var t = r(89526),
        m = (r(37034), r(43735), r(51619)),
        s = r(13806),
        l = r(31587),
        _ = r(70983),
        n = r(30325);
      const d = () => {
          (0, m.jM)();
          const e = (0, m.Tv)(),
            a = (0, m.h1)(),
            r = (0, m.rO)(),
            d = (0, m.bM)(),
            i = [],
            u = [];
          a.forEach((a) => {
            const r = a.eGenre,
              m = _.De.STORE_BASE_URL + "sale/" + a.strSalePage;
            let s = (0, l.kQ)(
              "#Summer_21_Story_Enter",
              t.createElement("span", null, (0, l.Xx)(a.strGenreName))
            );
            if (e.has(r)) {
              let l = "";
              1 == e.get(r).choice
                ? (l = a.strResultA + "_Summary")
                : 2 == e.get(r).choice && (l = a.strResultB + "_Summary"),
                i.push(
                  t.createElement(c, {
                    key: r,
                    strSubheader: s,
                    bClaimed: !0,
                    strBackgroundColor: a.strBackgroundColor,
                    eGenre: a.eGenre,
                    strTitle: a.strPageTitle,
                    strSaleURL: m,
                    strSummary: l,
                  })
                );
            } else {
              let e = "";
              u.length || (e = "next"),
                u.push(
                  t.createElement(c, {
                    key: r,
                    strID: e,
                    strSubheader: s,
                    strBackgroundColor: "#7C5F5A",
                    bClaimed: !1,
                    eGenre: a.eGenre,
                    strTitle: a.strPageTitle,
                    strSaleURL: m,
                    strSummary: "#Summer_21_Story_Next_Intro",
                  })
                );
            }
          });
          let g = i.concat(u);
          return t.createElement(
            "div",
            { className: (0, s.Z)(n.PageOuterContainer, _.De.LANGUAGE) },
            t.createElement(
              "div",
              { className: n.PageInnerContainer },
              t.createElement(
                "a",
                { href: _.De.STORE_BASE_URL },
                r &&
                  t.createElement("img", {
                    className: n.LocalizedHeaderImg,
                    src: r,
                  }),
                d &&
                  t.createElement("img", {
                    className: n.LocalizedHeaderMobileImg,
                    src: d,
                  })
              ),
              t.createElement(
                "div",
                { className: n.PageInnerBG },
                t.createElement(
                  "div",
                  { className: n.PageInnerContent },
                  t.createElement(
                    "div",
                    { className: n.HeaderContainer },
                    t.createElement(
                      "div",
                      { className: n.HeaderPrefix },
                      (0, l.Xx)("#Summer_21_Overview_Title_Prefix")
                    ),
                    (0, l.Xx)("#Summer_21_Overview_Title")
                  ),
                  t.createElement(
                    "div",
                    { className: (0, s.Z)(n.HeaderDesc, n.Noto) },
                    (0, l.Xx)("#Summer_21_Overview_Description1")
                  ),
                  t.createElement(
                    "div",
                    { className: (0, s.Z)(n.HeaderDesc, n.Noto) },
                    (0, l.Xx)("#Summer_21_Overview_Description3")
                  ),
                  t.createElement(
                    "div",
                    { className: (0, s.Z)(n.HeaderDesc, n.Noto) },
                    (0, l.Xx)("#Summer_21_Overview_Description4")
                  ),
                  t.createElement(
                    "a",
                    {
                      id: "wallpapers",
                      href:
                        _.De.MEDIA_CDN_URL +
                        "store/promo/summer2021/Steam_Summer_Sale_2021_Wallpapers.zip",
                      className: (0, s.Z)(n.HeaderDesc, n.Noto, n.Wallpapers),
                    },
                    "*",
                    (0, l.Xx)("#Summer21_Story_DownloadWallpaper")
                  ),
                  t.createElement(
                    "div",
                    { className: (0, s.Z)(n.HeaderIntro, n.Noto) },
                    (0, l.Xx)("#Summer_21_Overview_Description2")
                  ),
                  t.createElement(
                    "div",
                    { className: (0, s.Z)(n.HeaderIntro, n.Noto) },
                    (0, l.Xx)("#Summer_21_Story_Intro")
                  ),
                  t.createElement(
                    "div",
                    { className: (0, s.Z)(n.ListHeader, n.Noto) },
                    (0, l.Xx)("#Summer_21_Story_Next")
                  ),
                  t.createElement(
                    "div",
                    { className: (0, s.Z)(n.GenreListContainer) },
                    g
                  )
                ),
                t.createElement(o, null)
              )
            )
          );
        },
        o = (e) => {
          const a = (0, m.Re)();
          let r;
          if (51 == a)
            r = {
              badge_name: "#Summer21_Badge_Outcome1_Title",
              badge_desc: "#Summer21_Badge_Outcome1_Description",
              badge_class: n.Badge_51,
            };
          else if (52 == a)
            r = {
              badge_name: "#Summer21_Badge_Outcome2_Title",
              badge_desc: "#Summer21_Badge_Outcome2_Description",
              badge_class: n.Badge_52,
            };
          else if (53 == a)
            r = {
              badge_name: "#Summer21_Badge_Outcome3_Title",
              badge_desc: "#Summer21_Badge_Outcome3_Description",
              badge_class: n.Badge_53,
            };
          else if (54 == a)
            r = {
              badge_name: "#Summer21_Badge_Outcome4_Title",
              badge_desc: "#Summer21_Badge_Outcome4_Description",
              badge_class: n.Badge_54,
            };
          else {
            if (55 != a) return null;
            r = {
              badge_name: "#Summer21_Badge_Outcome5_Title",
              badge_desc: "#Summer21_Badge_Outcome5_Description",
              badge_class: n.Badge_55,
            };
          }
          return t.createElement(
            t.Fragment,
            null,
            t.createElement(
              "div",
              {
                className: (0, s.Z)(
                  n.HeaderDesc,
                  n.Noto,
                  n.CompletedSummaryText
                ),
              },
              (0, l.Xx)("#Summer21_Badge_Unlocked_Description")
            ),
            t.createElement(
              "div",
              { id: "badge", className: (0, s.Z)(n.BadgeContainer, n.Noto) },
              t.createElement(
                "div",
                { className: n.Column },
                t.createElement(
                  "div",
                  { className: n.SubHeader },
                  (0, l.Xx)("#Summer21_Badge_Prelude")
                ),
                t.createElement(
                  "div",
                  { className: n.BadgeName },
                  (0, l.Xx)(r.badge_name)
                ),
                t.createElement(
                  "div",
                  { className: n.BadgeDesc },
                  (0, l.Xx)(r.badge_desc)
                )
              ),
              t.createElement(
                "div",
                { className: n.Column },
                t.createElement("a", {
                  className: (0, s.Z)(n.BadgeImg, r.badge_class),
                  href: _.De.COMMUNITY_BASE_URL + "my/badges/" + a,
                }),
                t.createElement(
                  "div",
                  { className: n.BadgeText },
                  (0, l.Xx)("#Summer21_Badge_Congrats1")
                ),
                t.createElement(
                  "div",
                  { className: n.BadgeText },
                  (0, l.Xx)("#Summer21_Badge_Congrats2")
                ),
                t.createElement(
                  "a",
                  {
                    className: n.BadgeLink,
                    href: _.De.COMMUNITY_BASE_URL + "my/edit/avatar/" + a,
                  },
                  (0, l.Xx)("#Summer21_Badge_View")
                ),
                t.createElement("a", {
                  className: n.FrameExample,
                  href: _.De.COMMUNITY_BASE_URL + "my/edit/avatar/" + a,
                })
              )
            ),
            t.createElement(
              "div",
              { className: (0, s.Z)(n.TheEnd, n.Noto) },
              (0, l.Xx)("#Summer21_Story_End")
            )
          );
        },
        c = (e) => {
          const a = (0, m.BO)(e.eGenre);
          return t.createElement(
            "a",
            {
              id: e.strID,
              href: e.strSaleURL,
              style: { backgroundColor: `${e.strBackgroundColor}` },
              className: (0, s.Z)(n.GenreContainer, n.Claimed),
            },
            t.createElement(
              "div",
              { className: n.LeftColumn },
              t.createElement(
                "div",
                { className: (0, s.Z)(n.GenreSubheader, n.Noto) },
                e.strSubheader
              ),
              t.createElement(
                "div",
                { className: n.GenreTitle },
                (0, l.Xx)(e.strTitle)
              ),
              t.createElement(
                "div",
                { className: (0, s.Z)(n.GenreStory, n.Noto) },
                (0, l.Xx)(e.strSummary)
              )
            ),
            t.createElement(
              "div",
              { className: n.RightColumn },
              a &&
                t.createElement("div", {
                  className: n.StickerPreview,
                  style: { backgroundImage: `url(${a})` },
                }),
              !e.bClaimed &&
                t.createElement("div", {
                  className: (0, s.Z)(n.StickerPreview, n.Unclaimed),
                })
            )
          );
        };
    },
  },
]);

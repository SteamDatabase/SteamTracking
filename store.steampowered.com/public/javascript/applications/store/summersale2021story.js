/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [1918],
  {
    56912: (e) => {
      e.exports = {
        PageOuterContainer: "A1molY3lA3epFeiK9C18X",
        LocalizedHeaderImg: "_2ef14902HuOYwW9X2ZmOBM",
        LocalizedHeaderMobileImg: "_3NX2aMrxYB2eC6k0FEticr",
        PageInnerBG: "dkYvUoJVKlaSYTRR6wZ0Y",
        PageInnerContent: "_20TiAcFAkd9np-ptymBKRe",
        GenreListContainer: "_17we18AIwvK4bFfGQbI41U",
        HeaderContainer: "_1gPQkVavA-LOCR3b-IKcB",
        HeaderPrefix: "_3hjBUHcKMn2idQO_5Ia3Ni",
        GenreTitle: "_25hmlvprjx7XlKaIdRsG5R",
        ListHeader: "jZV6eX02cAULi9JfIksaR",
        HeaderIntro: "_3STDK2l490h73KtHqWLkGJ",
        HeaderDesc: "_3EetibYgOfZgSMouAZUzKU",
        Wallpapers: "_3j1mtlKbdtWmEOO73SxFWN",
        Noto: "_1S5tjVuHYHJscKClAwWb3a",
        GenreContainer: "_2JuP7L8n3icg43_wS3FIDg",
        GenreSubheader: "_1hagULjKLFtESNF4z9sB9L",
        LeftColumn: "_1BzJCbD0qCE8mwDfA1lNfI",
        RightColumn: "_2l_lu9q_KJ01uSoJhMsuJw",
        GenreStory: "_3cVcC0BAT4OHbZZRjAzEc_",
        StickerPreview: "_1AsdNRYXgqD4kbyiL5LH_I",
        Unclaimed: "oT-hELNuFFfKlmFqvx9ue",
        CompletedSummaryText: "_24Z9tBamfDCSidYyUWNqm5",
        TheEnd: "_2b58zwoq3jyRstHU3eN1vE",
        BadgeContainer: "_2wlN6Tx0UyAVdkbjCArjGC",
        BadgeName: "_3EwgFn4j6yiTeoyPFFiSiX",
        SubHeader: "-Ej5OKTtQyBuAYsE_uEuK",
        BadgeText: "_2Vbv_zIpsBEFgfzIdLjSgB",
        BadgeDesc: "_37uOV7jr2jliYKlTRPhfzR",
        BadgeImg: "x74En7wZjtpuyro1DP82z",
        BadgeLink: "_2qaiZlONpv3PnKbKbYqHD6",
        FrameExample: "_1q5L20SehgaXZx9TmYSfHV",
        Badge_51: "_1iE6US6GTFPFroJXMBgnja",
        Badge_52: "_2tJdQHqm8mz8o-cKuEc9zk",
        Badge_53: "_2kvVuCP6Ia4K8Nfeo55a_Z",
        Badge_54: "_2VzkL8Wl9rKj2WlN-9xcix",
        Badge_55: "_11CXt5o0CnU3swZRXwFmgp",
        Column: "_1TnJ8vhRS0DBDf6on8h4zW",
      };
    },
    85121: (e, a, r) => {
      "use strict";
      r.r(a), r.d(a, { default: () => _ });
      var t = r(47427),
        m = r(85801),
        l = r(13129),
        s = r(31846),
        n = r(37563),
        c = r(56912);
      const _ = () => {
          (0, m.jM)();
          const e = (0, m.Tv)(),
            a = (0, m.h1)(),
            r = (0, m.rO)(),
            _ = (0, m.bM)(),
            o = [],
            g = [];
          a.forEach((a) => {
            const r = a.eGenre,
              m = n.De.STORE_BASE_URL + "sale/" + a.strSalePage;
            let l = (0, s.kQ)(
              "#Summer_21_Story_Enter",
              t.createElement("span", null, (0, s.Xx)(a.strGenreName)),
            );
            if (e.has(r)) {
              let s = "";
              1 == e.get(r).choice
                ? (s = a.strResultA + "_Summary")
                : 2 == e.get(r).choice && (s = a.strResultB + "_Summary"),
                o.push(
                  t.createElement(i, {
                    key: r,
                    strSubheader: l,
                    bClaimed: !0,
                    strBackgroundColor: a.strBackgroundColor,
                    eGenre: a.eGenre,
                    strTitle: a.strPageTitle,
                    strSaleURL: m,
                    strSummary: s,
                  }),
                );
            } else {
              let e = "";
              g.length || (e = "next"),
                g.push(
                  t.createElement(i, {
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
          let u = o.concat(g);
          return t.createElement(
            "div",
            { className: (0, l.Z)(c.PageOuterContainer, n.De.LANGUAGE) },
            t.createElement(
              "div",
              { className: c.PageInnerContainer },
              t.createElement(
                "a",
                { href: n.De.STORE_BASE_URL },
                r &&
                  t.createElement("img", {
                    className: c.LocalizedHeaderImg,
                    src: r,
                  }),
                _ &&
                  t.createElement("img", {
                    className: c.LocalizedHeaderMobileImg,
                    src: _,
                  }),
              ),
              t.createElement(
                "div",
                { className: c.PageInnerBG },
                t.createElement(
                  "div",
                  { className: c.PageInnerContent },
                  t.createElement(
                    "div",
                    { className: c.HeaderContainer },
                    t.createElement(
                      "div",
                      { className: c.HeaderPrefix },
                      (0, s.Xx)("#Summer_21_Overview_Title_Prefix"),
                    ),
                    (0, s.Xx)("#Summer_21_Overview_Title"),
                  ),
                  t.createElement(
                    "div",
                    { className: (0, l.Z)(c.HeaderDesc, c.Noto) },
                    (0, s.Xx)("#Summer_21_Overview_Description1"),
                  ),
                  t.createElement(
                    "div",
                    { className: (0, l.Z)(c.HeaderDesc, c.Noto) },
                    (0, s.Xx)("#Summer_21_Overview_Description3"),
                  ),
                  t.createElement(
                    "div",
                    { className: (0, l.Z)(c.HeaderDesc, c.Noto) },
                    (0, s.Xx)("#Summer_21_Overview_Description4"),
                  ),
                  t.createElement(
                    "a",
                    {
                      id: "wallpapers",
                      href:
                        n.De.MEDIA_CDN_URL +
                        "store/promo/summer2021/Steam_Summer_Sale_2021_Wallpapers.zip",
                      className: (0, l.Z)(c.HeaderDesc, c.Noto, c.Wallpapers),
                    },
                    "*",
                    (0, s.Xx)("#Summer21_Story_DownloadWallpaper"),
                  ),
                  t.createElement(
                    "div",
                    { className: (0, l.Z)(c.HeaderIntro, c.Noto) },
                    (0, s.Xx)("#Summer_21_Overview_Description2"),
                  ),
                  t.createElement(
                    "div",
                    { className: (0, l.Z)(c.HeaderIntro, c.Noto) },
                    (0, s.Xx)("#Summer_21_Story_Intro"),
                  ),
                  t.createElement(
                    "div",
                    { className: (0, l.Z)(c.ListHeader, c.Noto) },
                    (0, s.Xx)("#Summer_21_Story_Next"),
                  ),
                  t.createElement(
                    "div",
                    { className: (0, l.Z)(c.GenreListContainer) },
                    u,
                  ),
                ),
                t.createElement(d, null),
              ),
            ),
          );
        },
        d = (e) => {
          const a = (0, m.Re)();
          let r;
          if (51 == a)
            r = {
              badge_name: "#Summer21_Badge_Outcome1_Title",
              badge_desc: "#Summer21_Badge_Outcome1_Description",
              badge_class: c.Badge_51,
            };
          else if (52 == a)
            r = {
              badge_name: "#Summer21_Badge_Outcome2_Title",
              badge_desc: "#Summer21_Badge_Outcome2_Description",
              badge_class: c.Badge_52,
            };
          else if (53 == a)
            r = {
              badge_name: "#Summer21_Badge_Outcome3_Title",
              badge_desc: "#Summer21_Badge_Outcome3_Description",
              badge_class: c.Badge_53,
            };
          else if (54 == a)
            r = {
              badge_name: "#Summer21_Badge_Outcome4_Title",
              badge_desc: "#Summer21_Badge_Outcome4_Description",
              badge_class: c.Badge_54,
            };
          else {
            if (55 != a) return null;
            r = {
              badge_name: "#Summer21_Badge_Outcome5_Title",
              badge_desc: "#Summer21_Badge_Outcome5_Description",
              badge_class: c.Badge_55,
            };
          }
          return t.createElement(
            t.Fragment,
            null,
            t.createElement(
              "div",
              {
                className: (0, l.Z)(
                  c.HeaderDesc,
                  c.Noto,
                  c.CompletedSummaryText,
                ),
              },
              (0, s.Xx)("#Summer21_Badge_Unlocked_Description"),
            ),
            t.createElement(
              "div",
              { id: "badge", className: (0, l.Z)(c.BadgeContainer, c.Noto) },
              t.createElement(
                "div",
                { className: c.Column },
                t.createElement(
                  "div",
                  { className: c.SubHeader },
                  (0, s.Xx)("#Summer21_Badge_Prelude"),
                ),
                t.createElement(
                  "div",
                  { className: c.BadgeName },
                  (0, s.Xx)(r.badge_name),
                ),
                t.createElement(
                  "div",
                  { className: c.BadgeDesc },
                  (0, s.Xx)(r.badge_desc),
                ),
              ),
              t.createElement(
                "div",
                { className: c.Column },
                t.createElement("a", {
                  className: (0, l.Z)(c.BadgeImg, r.badge_class),
                  href: n.De.COMMUNITY_BASE_URL + "my/badges/" + a,
                }),
                t.createElement(
                  "div",
                  { className: c.BadgeText },
                  (0, s.Xx)("#Summer21_Badge_Congrats1"),
                ),
                t.createElement(
                  "div",
                  { className: c.BadgeText },
                  (0, s.Xx)("#Summer21_Badge_Congrats2"),
                ),
                t.createElement(
                  "a",
                  {
                    className: c.BadgeLink,
                    href: n.De.COMMUNITY_BASE_URL + "my/edit/avatar/" + a,
                  },
                  (0, s.Xx)("#Summer21_Badge_View"),
                ),
                t.createElement("a", {
                  className: c.FrameExample,
                  href: n.De.COMMUNITY_BASE_URL + "my/edit/avatar/" + a,
                }),
              ),
            ),
            t.createElement(
              "div",
              { className: (0, l.Z)(c.TheEnd, c.Noto) },
              (0, s.Xx)("#Summer21_Story_End"),
            ),
          );
        },
        i = (e) => {
          const a = (0, m.BO)(e.eGenre);
          return t.createElement(
            "a",
            {
              id: e.strID,
              href: e.strSaleURL,
              style: { backgroundColor: `${e.strBackgroundColor}` },
              className: (0, l.Z)(c.GenreContainer, c.Claimed),
            },
            t.createElement(
              "div",
              { className: c.LeftColumn },
              t.createElement(
                "div",
                { className: (0, l.Z)(c.GenreSubheader, c.Noto) },
                e.strSubheader,
              ),
              t.createElement(
                "div",
                { className: c.GenreTitle },
                (0, s.Xx)(e.strTitle),
              ),
              t.createElement(
                "div",
                { className: (0, l.Z)(c.GenreStory, c.Noto) },
                (0, s.Xx)(e.strSummary),
              ),
            ),
            t.createElement(
              "div",
              { className: c.RightColumn },
              a &&
                t.createElement("div", {
                  className: c.StickerPreview,
                  style: { backgroundImage: `url(${a})` },
                }),
              !e.bClaimed &&
                t.createElement("div", {
                  className: (0, l.Z)(c.StickerPreview, c.Unclaimed),
                }),
            ),
          );
        };
    },
  },
]);

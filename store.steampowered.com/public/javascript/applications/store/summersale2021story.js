/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [57819],
  {
    42919: (e) => {
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
    90444: (e, r, t) => {
      "use strict";
      t.d(r, {
        E4: () => O,
        PB: () => A,
        PU: () => B,
        VZ: () => N,
        _l: () => g,
        cZ: () => d,
        iG: () => P,
        ib: () => y,
        x4: () => p,
      });
      var m = t(34629),
        o = t(41735),
        _ = t.n(o),
        s = t(14947),
        a = t(90626),
        u = t(37085),
        S = t(42457),
        i = t(49813),
        n = t(68797),
        c = t(78327);
      class l {
        m_mapGenreToStickerResponse = new Map();
        m_eStoryBadgeGranted = S.GPz.d7;
        m_strLocalizedStoryHeader;
        m_strLocalizedStoryHeaderMobile;
        static s_Singleton;
        static Get() {
          return l.s_Singleton || (l.s_Singleton = new l()), l.s_Singleton;
        }
        constructor() {
          (0, s.Gn)(this);
          const e = (0, c.Tc)("summerstory", "application_config");
          if (e) {
            if (e.story_choices) {
              const r = e.story_choices;
              r.sort((e, r) => e.time_chosen - r.time_chosen),
                r.forEach((e) => {
                  this.m_mapGenreToStickerResponse.set(e.genre, e);
                });
            }
            e.badge_granted && (this.m_eStoryBadgeGranted = e.badge_granted),
              e.header && (this.m_strLocalizedStoryHeader = e.header),
              e.header_mobile &&
                (this.m_strLocalizedStoryHeaderMobile = e.header_mobile);
          }
        }
        GetStoryBadgeGranted() {
          return this.m_eStoryBadgeGranted;
        }
        GetLocalizedStoryHeader() {
          return this.m_strLocalizedStoryHeader;
        }
        GetLocalizedStoryHeaderMobile() {
          return this.m_strLocalizedStoryHeaderMobile;
        }
        GetAllGenreChoices() {
          return this.m_mapGenreToStickerResponse;
        }
        GetClaimForGenre(e) {
          return this.m_mapGenreToStickerResponse.get(e);
        }
        async LoadClaimForGenre(e, r) {
          if (this.m_mapGenreToStickerResponse.has(e)) return;
          if (!c.iA.logged_in) return;
          this.m_mapGenreToStickerResponse.set(e, {});
          let t = null;
          try {
            const m = await _().get(
              c.TS.STORE_BASE_URL + "promotion/ajaxhasclaimedgenresticker",
              { params: { genre: e }, cancelToken: r?.token },
            );
            if (200 == m?.status && m.data?.success == u.R && m.data?.results) {
              const r = m.data.results;
              return void this.m_mapGenreToStickerResponse.set(e, r);
            }
            t = { response: m };
          } catch (e) {
            t = e;
          }
          const m = (0, n.H)(t);
          console.error("Could not check claim on genre", e, m.strErrorMsg, m);
        }
        async MakeClaimForGenre(e, r, t) {
          if (!c.iA.logged_in) return u.Dy;
          const m = new FormData();
          m.append("genre", e.toString()),
            m.append("choice", r.toString()),
            m.append("sessionid", (0, c.KC)());
          let o = null;
          try {
            const s = await _().post(
              c.TS.STORE_BASE_URL + "promotion/ajaxclaimstickerforgenre",
              m,
              { withCredentials: !0, cancelToken: t?.token },
            );
            if (200 == s?.status && s.data?.success == u.R && s.data?.results) {
              const t = s.data.results,
                m = this.m_mapGenreToStickerResponse.get(e);
              return (
                (m.choice = r),
                (m.sticker_def = t.claimed_sticker_def),
                (m.has_completed_story = t.has_completed_story),
                s.data.success
              );
            }
            o = { response: s };
          } catch (e) {
            o = e;
          }
          const s = (0, n.H)(o);
          return (
            console.error("Could not make claim on genre", e, s.strErrorMsg, s),
            o?.data?.success || u.zi
          );
        }
      }
      function g() {
        return l.Get().GetStoryBadgeGranted();
      }
      function d() {
        return l.Get().GetLocalizedStoryHeader();
      }
      function y() {
        return l.Get().GetLocalizedStoryHeaderMobile();
      }
      function P() {
        return l.Get().GetAllGenreChoices();
      }
      function p(e) {
        const r = a.useRef(null);
        a.useEffect(() => {
          const e = _().CancelToken.source();
          return (r.current = e), () => e.cancel("useGenreClaim: unmounting");
        }, []),
          l.Get().LoadClaimForGenre(e, r.current);
        return [
          l.Get().GetClaimForGenre(e),
          async (t) => {
            await l.Get().MakeClaimForGenre(e, t, r.current);
          },
        ];
      }
      (0, m.Cg)([s.sH], l.prototype, "m_mapGenreToStickerResponse", void 0),
        (0, m.Cg)([s.sH], l.prototype, "m_eStoryBadgeGranted", void 0);
      const h = 1658760;
      function B(e) {
        const [r] = p(e);
        return r?.sticker_def
          ? `${c.TS.MEDIA_CDN_COMMUNITY_URL}images/items/${h}/${r.sticker_def.item_image_small}`
          : null;
      }
      function N(e) {
        return !e || e >= G.length ? null : G[e];
      }
      function O() {
        return G.slice(1);
      }
      const G = [
        null,
        {
          eGenre: i.oT.XR,
          strPageTitle: "#Summer21_Story_Action_Title",
          strPageNumber: "#Summer21_Story_Action_Pg",
          strPageText: "#Summer21_Story_Action_Intro",
          strOptionA: "#Summer21_Story_Action_Choice1",
          strPageNumberA: "#Summer21_Story_Action_Outcome1_Pg",
          strResultA: "#Summer21_Story_Action_Outcome1",
          strOptionB: "#Summer21_Story_Action_Choice2",
          strPageNumberB: "#Summer21_Story_Action_Outcome2_Pg",
          strResultB: "#Summer21_Story_Action_Outcome2",
          strSalePage: "summer2021_action",
          strBackgroundColor: "#c5483f",
          strGenreName: "#Summer21_Story_Action_Genre",
        },
        {
          eGenre: i.oT.x7,
          strPageTitle: "#Summer21_Story_Adventure_Title",
          strPageNumber: "#Summer21_Story_Adventure_Pg",
          strPageText: "#Summer21_Story_Adventure_Intro",
          strOptionA: "#Summer21_Story_Adventure_Choice1",
          strPageNumberA: "#Summer21_Story_Adventure_Outcome1_Pg",
          strResultA: "#Summer21_Story_Adventure_Outcome1",
          strOptionB: "#Summer21_Story_Adventure_Choice2",
          strPageNumberB: "#Summer21_Story_Adventure_Outcome2_Pg",
          strResultB: "#Summer21_Story_Adventure_Outcome2",
          strSalePage: "summer2021_adventure_casual",
          strBackgroundColor: "#657F5B",
          strGenreName: "#Summer21_Story_Adventure_Genre",
        },
        {
          eGenre: i.oT.r,
          strPageTitle: "#Summer21_Story_RPG_Title",
          strPageNumber: "#Summer21_Story_RPG_Pg",
          strPageText: "#Summer21_Story_RPG_Intro",
          strOptionA: "#Summer21_Story_RPG_Choice1",
          strPageNumberA: "#Summer21_Story_RPG_Outcome1_Pg",
          strResultA: "#Summer21_Story_RPG_Outcome1",
          strOptionB: "#Summer21_Story_RPG_Choice2",
          strPageNumberB: "#Summer21_Story_RPG_Outcome2_Pg",
          strResultB: "#Summer21_Story_RPG_Outcome2",
          strSalePage: "summer2021_rpg",
          strBackgroundColor: "#bf673b",
          strGenreName: "#Summer21_Story_RPG_Genre",
        },
        {
          eGenre: i.oT.mj,
          strPageTitle: "#Summer21_Story_Strategy_Title",
          strPageNumber: "#Summer21_Story_Strategy_Pg",
          strPageText: "#Summer21_Story_Strategy_Intro",
          strOptionA: "#Summer21_Story_Strategy_Choice1",
          strPageNumberA: "#Summer21_Story_Strategy_Outcome1_Pg",
          strResultA: "#Summer21_Story_Strategy_Outcome1",
          strOptionB: "#Summer21_Story_Strategy_Choice2",
          strPageNumberB: "#Summer21_Story_Strategy_Outcome2_Pg",
          strResultB: "#Summer21_Story_Strategy_Outcome2",
          strSalePage: "summer2021_strategy",
          strBackgroundColor: "#E3B343",
          strGenreName: "#Summer21_Story_Strategy_Genre",
        },
        {
          eGenre: i.oT.W,
          strPageTitle: "#Summer21_Story_Sim_Title",
          strPageNumber: "#Summer21_Story_Sim_Pg",
          strPageText: "#Summer21_Story_Sim_Intro",
          strOptionA: "#Summer21_Story_Sim_Choice1",
          strPageNumberA: "#Summer21_Story_Sim_Outcome1_Pg",
          strResultA: "#Summer21_Story_Sim_Outcome1",
          strOptionB: "#Summer21_Story_Sim_Choice2",
          strPageNumberB: "#Summer21_Story_Sim_Outcome2_Pg",
          strResultB: "#Summer21_Story_Sim_Outcome2",
          strSalePage: "summer2021_simulation",
          strBackgroundColor: "#437882",
          strGenreName: "#Summer21_Story_Sim_Genre",
        },
        {
          eGenre: i.oT.zE,
          strPageTitle: "#Summer21_Story_Sports_Title",
          strPageNumber: "#Summer21_Story_Sports_Pg",
          strPageText: "#Summer21_Story_Sports_Intro",
          strOptionA: "#Summer21_Story_Sports_Choice1",
          strPageNumberA: "#Summer21_Story_Sports_Outcome1_Pg",
          strResultA: "#Summer21_Story_Sports_Outcome1",
          strOptionB: "#Summer21_Story_Sports_Choice2",
          strPageNumberB: "#Summer21_Story_Sports_Outcome2_Pg",
          strResultB: "#Summer21_Story_Sports_Outcome2",
          strSalePage: "summer2021_sports_racing",
          strBackgroundColor: "#E3B343",
          strGenreName: "#Summer21_Story_Sports_Genre",
        },
        {
          eGenre: i.oT.xJ,
          strPageTitle: "#Summer21_Story_Horror_Title",
          strPageNumber: "#Summer21_Story_Horror_Pg",
          strPageText: "#Summer21_Story_Horror_Intro",
          strOptionA: "#Summer21_Story_Horror_Choice1",
          strPageNumberA: "#Summer21_Story_Horror_Outcome1_Pg",
          strResultA: "#Summer21_Story_Horror_Outcome1",
          strOptionB: "#Summer21_Story_Horror_Choice2",
          strPageNumberB: "#Summer21_Story_Horror_Outcome2_Pg",
          strResultB: "#Summer21_Story_Horror_Outcome2",
          strSalePage: "summer2021_horror",
          strBackgroundColor: "#657F5B",
          strGenreName: "#Summer21_Story_Horror_Genre",
        },
        {
          eGenre: i.oT.hK,
          strPageTitle: "#Summer21_Story_Survival_Title",
          strPageNumber: "#Summer21_Story_Survival_Pg",
          strPageText: "#Summer21_Story_Survival_Intro",
          strOptionA: "#Summer21_Story_Survival_Choice1",
          strPageNumberA: "#Summer21_Story_Survival_Outcome1_Pg",
          strResultA: "#Summer21_Story_Survival_Outcome1",
          strOptionB: "#Summer21_Story_Survival_Choice2",
          strPageNumberB: "#Summer21_Story_Survival_Outcome2_Pg",
          strResultB: "#Summer21_Story_Survival_Outcome2",
          strSalePage: "summer2021_survival",
          strBackgroundColor: "#bf673b",
          strGenreName: "#Summer21_Story_Survival_Genre",
        },
        {
          eGenre: i.oT.Bk,
          strPageTitle: "#Summer21_Story_Open_Title",
          strPageNumber: "#Summer21_Story_Open_Pg",
          strPageText: "#Summer21_Story_Open_Intro",
          strOptionA: "#Summer21_Story_Open_Choice1",
          strPageNumberA: "#Summer21_Story_Open_Outcome1_Pg",
          strResultA: "#Summer21_Story_Open_Outcome1",
          strOptionB: "#Summer21_Story_Open_Choice2",
          strPageNumberB: "#Summer21_Story_Open_Outcome2_Pg",
          strResultB: "#Summer21_Story_Open_Outcome2",
          strSalePage: "summer2021_open_world",
          strBackgroundColor: "#657F5B",
          strGenreName: "#Summer21_Story_Open_Genre",
        },
        {
          eGenre: i.oT.PQ,
          strPageTitle: "#Summer21_Story_SciFi_Title",
          strPageNumber: "#Summer21_Story_SciFi_Pg",
          strPageText: "#Summer21_Story_SciFi_Intro",
          strOptionA: "#Summer21_Story_SciFi_Choice1",
          strPageNumberA: "#Summer21_Story_SciFi_Outcome1_Pg",
          strResultA: "#Summer21_Story_SciFi_Outcome1",
          strOptionB: "#Summer21_Story_SciFi_Choice2",
          strPageNumberB: "#Summer21_Story_SciFi_Outcome2_Pg",
          strResultB: "#Summer21_Story_SciFi_Outcome2",
          strSalePage: "summer2021_scifi",
          strBackgroundColor: "#986280",
          strGenreName: "#Summer21_Story_SciFi_Genre",
        },
        {
          eGenre: i.oT.QB,
          strPageTitle: "#Summer21_Story_Mystery_Title",
          strPageNumber: "#Summer21_Story_Mystery_Pg",
          strPageText: "#Summer21_Story_Mystery_Intro",
          strOptionA: "#Summer21_Story_Mystery_Choice1",
          strPageNumberA: "#Summer21_Story_Mystery_Outcome1_Pg",
          strResultA: "#Summer21_Story_Mystery_Outcome1",
          strOptionB: "#Summer21_Story_Mystery_Choice2",
          strPageNumberB: "#Summer21_Story_Mystery_Outcome2_Pg",
          strResultB: "#Summer21_Story_Mystery_Outcome2",
          strSalePage: "summer2021_mystery",
          strBackgroundColor: "#B24939",
          strGenreName: "#Summer21_Story_Mystery_Genre",
        },
        {
          eGenre: i.oT.LK,
          strPageTitle: "#Summer21_Story_Space_Title",
          strPageNumber: "#Summer21_Story_Space_Pg",
          strPageText: "#Summer21_Story_Space_Intro",
          strOptionA: "#Summer21_Story_Space_Choice1",
          strPageNumberA: "#Summer21_Story_Space_Outcome1_Pg",
          strResultA: "#Summer21_Story_Space_Outcome1",
          strOptionB: "#Summer21_Story_Space_Choice2",
          strPageNumberB: "#Summer21_Story_Space_Outcome2_Pg",
          strResultB: "#Summer21_Story_Space_Outcome2",
          strSalePage: "summer2021_space",
          strBackgroundColor: "#437882",
          strGenreName: "#Summer21_Story_Space_Genre",
        },
        {
          eGenre: i.oT.Ou,
          strPageTitle: "#Summer21_Story_Roguelike_Title",
          strPageNumber: "#Summer21_Story_Roguelike_Pg",
          strPageText: "#Summer21_Story_Roguelike_Intro",
          strOptionA: "#Summer21_Story_Roguelike_Choice1",
          strPageNumberA: "#Summer21_Story_Roguelike_Outcome1_Pg",
          strResultA: "#Summer21_Story_Roguelike_Outcome1",
          strOptionB: "#Summer21_Story_Roguelike_Choice2",
          strPageNumberB: "#Summer21_Story_Roguelike_Outcome2_Pg",
          strResultB: "#Summer21_Story_Roguelike_Outcome2",
          strSalePage: "summer2021_roguelike",
          strBackgroundColor: "#B24939",
          strGenreName: "#Summer21_Story_Roguelike_Genre",
        },
        {
          eGenre: i.oT.Bc,
          strPageTitle: "#Summer21_Story_Anime_Title",
          strPageNumber: "#Summer21_Story_Anime_Pg",
          strPageText: "#Summer21_Story_Anime_Intro",
          strOptionA: "#Summer21_Story_Anime_Choice1",
          strPageNumberA: "#Summer21_Story_Anime_Outcome1_Pg",
          strResultA: "#Summer21_Story_Anime_Outcome1",
          strOptionB: "#Summer21_Story_Anime_Choice2",
          strPageNumberB: "#Summer21_Story_Anime_Outcome2_Pg",
          strResultB: "#Summer21_Story_Anime_Outcome2",
          strSalePage: "summer2021_anime",
          strBackgroundColor: "#986280",
          strGenreName: "#Summer21_Story_Anime_Genre",
        },
      ];
      function A() {
        a.useEffect(() => {
          const e = document.createElement("link");
          (e.rel = "stylesheet"),
            (e.href =
              "https://fonts.googleapis.com/css2?family=Noto+Serif&family=Noto+Serif+JP&family=Noto+Serif+KR&family=Noto+Serif+SC:wght@500&family=Noto+Serif+TC&family=Jomhuria&&family=Big+Shoulders+Display:wght@800&display=swap"),
            document.head.appendChild(e);
        }, []);
      }
    },
    90428: (e, r, t) => {
      "use strict";
      t.r(r), t.d(r, { default: () => n });
      var m = t(7850),
        o = t(42457),
        _ = t(49813),
        s = t(90444),
        a = t(52038),
        u = t(61859),
        S = t(78327),
        i = t(42919);
      const n = () => {
          (0, s.PB)();
          const e = (0, s.iG)(),
            r = (0, s.E4)(),
            t = (0, s.cZ)(),
            o = (0, s.ib)(),
            n = [],
            g = [];
          r.forEach((r) => {
            const t = r.eGenre,
              o = S.TS.STORE_BASE_URL + "sale/" + r.strSalePage;
            let s = (0, u.PP)(
              "#Summer_21_Story_Enter",
              (0, m.jsx)("span", { children: (0, u.we)(r.strGenreName) }),
            );
            if (e.has(t)) {
              let a = "";
              e.get(t).choice == _.f$.rg
                ? (a = r.strResultA + "_Summary")
                : e.get(t).choice == _.f$.kE && (a = r.strResultB + "_Summary"),
                n.push(
                  (0, m.jsx)(
                    l,
                    {
                      strSubheader: s,
                      bClaimed: !0,
                      strBackgroundColor: r.strBackgroundColor,
                      eGenre: r.eGenre,
                      strTitle: r.strPageTitle,
                      strSaleURL: o,
                      strSummary: a,
                    },
                    t,
                  ),
                );
            } else {
              let e = "";
              g.length || (e = "next"),
                g.push(
                  (0, m.jsx)(
                    l,
                    {
                      strID: e,
                      strSubheader: s,
                      strBackgroundColor: "#7C5F5A",
                      bClaimed: !1,
                      eGenre: r.eGenre,
                      strTitle: r.strPageTitle,
                      strSaleURL: o,
                      strSummary: "#Summer_21_Story_Next_Intro",
                    },
                    t,
                  ),
                );
            }
          });
          let d = n.concat(g);
          return (0, m.jsx)("div", {
            className: (0, a.A)(i.PageOuterContainer, S.TS.LANGUAGE),
            children: (0, m.jsxs)("div", {
              className: i.PageInnerContainer,
              children: [
                (0, m.jsxs)("a", {
                  href: S.TS.STORE_BASE_URL,
                  children: [
                    t &&
                      (0, m.jsx)("img", {
                        className: i.LocalizedHeaderImg,
                        src: t,
                      }),
                    o &&
                      (0, m.jsx)("img", {
                        className: i.LocalizedHeaderMobileImg,
                        src: o,
                      }),
                  ],
                }),
                (0, m.jsxs)("div", {
                  className: i.PageInnerBG,
                  children: [
                    (0, m.jsxs)("div", {
                      className: i.PageInnerContent,
                      children: [
                        (0, m.jsxs)("div", {
                          className: i.HeaderContainer,
                          children: [
                            (0, m.jsx)("div", {
                              className: i.HeaderPrefix,
                              children: (0, u.we)(
                                "#Summer_21_Overview_Title_Prefix",
                              ),
                            }),
                            (0, u.we)("#Summer_21_Overview_Title"),
                          ],
                        }),
                        (0, m.jsx)("div", {
                          className: (0, a.A)(i.HeaderDesc, i.Noto),
                          children: (0, u.we)(
                            "#Summer_21_Overview_Description1",
                          ),
                        }),
                        (0, m.jsx)("div", {
                          className: (0, a.A)(i.HeaderDesc, i.Noto),
                          children: (0, u.we)(
                            "#Summer_21_Overview_Description3",
                          ),
                        }),
                        (0, m.jsx)("div", {
                          className: (0, a.A)(i.HeaderDesc, i.Noto),
                          children: (0, u.we)(
                            "#Summer_21_Overview_Description4",
                          ),
                        }),
                        (0, m.jsxs)("a", {
                          id: "wallpapers",
                          href:
                            S.TS.MEDIA_CDN_URL +
                            "store/promo/summer2021/Steam_Summer_Sale_2021_Wallpapers.zip",
                          className: (0, a.A)(
                            i.HeaderDesc,
                            i.Noto,
                            i.Wallpapers,
                          ),
                          children: [
                            "*",
                            (0, u.we)("#Summer21_Story_DownloadWallpaper"),
                          ],
                        }),
                        (0, m.jsx)("div", {
                          className: (0, a.A)(i.HeaderIntro, i.Noto),
                          children: (0, u.we)(
                            "#Summer_21_Overview_Description2",
                          ),
                        }),
                        (0, m.jsx)("div", {
                          className: (0, a.A)(i.HeaderIntro, i.Noto),
                          children: (0, u.we)("#Summer_21_Story_Intro"),
                        }),
                        (0, m.jsx)("div", {
                          className: (0, a.A)(i.ListHeader, i.Noto),
                          children: (0, u.we)("#Summer_21_Story_Next"),
                        }),
                        (0, m.jsx)("div", {
                          className: (0, a.A)(i.GenreListContainer),
                          children: d,
                        }),
                      ],
                    }),
                    (0, m.jsx)(c, {}),
                  ],
                }),
              ],
            }),
          });
        },
        c = (e) => {
          const r = (0, s._l)();
          let t;
          if (r == o.GPz.zI)
            t = {
              badge_name: "#Summer21_Badge_Outcome1_Title",
              badge_desc: "#Summer21_Badge_Outcome1_Description",
              badge_class: i.Badge_51,
            };
          else if (r == o.GPz.sG)
            t = {
              badge_name: "#Summer21_Badge_Outcome2_Title",
              badge_desc: "#Summer21_Badge_Outcome2_Description",
              badge_class: i.Badge_52,
            };
          else if (r == o.GPz.Ms)
            t = {
              badge_name: "#Summer21_Badge_Outcome3_Title",
              badge_desc: "#Summer21_Badge_Outcome3_Description",
              badge_class: i.Badge_53,
            };
          else if (r == o.GPz.WK)
            t = {
              badge_name: "#Summer21_Badge_Outcome4_Title",
              badge_desc: "#Summer21_Badge_Outcome4_Description",
              badge_class: i.Badge_54,
            };
          else {
            if (r != o.GPz.ER) return null;
            t = {
              badge_name: "#Summer21_Badge_Outcome5_Title",
              badge_desc: "#Summer21_Badge_Outcome5_Description",
              badge_class: i.Badge_55,
            };
          }
          return (0, m.jsxs)(m.Fragment, {
            children: [
              (0, m.jsx)("div", {
                className: (0, a.A)(
                  i.HeaderDesc,
                  i.Noto,
                  i.CompletedSummaryText,
                ),
                children: (0, u.we)("#Summer21_Badge_Unlocked_Description"),
              }),
              (0, m.jsxs)("div", {
                id: "badge",
                className: (0, a.A)(i.BadgeContainer, i.Noto),
                children: [
                  (0, m.jsxs)("div", {
                    className: i.Column,
                    children: [
                      (0, m.jsx)("div", {
                        className: i.SubHeader,
                        children: (0, u.we)("#Summer21_Badge_Prelude"),
                      }),
                      (0, m.jsx)("div", {
                        className: i.BadgeName,
                        children: (0, u.we)(t.badge_name),
                      }),
                      (0, m.jsx)("div", {
                        className: i.BadgeDesc,
                        children: (0, u.we)(t.badge_desc),
                      }),
                    ],
                  }),
                  (0, m.jsxs)("div", {
                    className: i.Column,
                    children: [
                      (0, m.jsx)("a", {
                        className: (0, a.A)(i.BadgeImg, t.badge_class),
                        href: S.TS.COMMUNITY_BASE_URL + "my/badges/" + r,
                      }),
                      (0, m.jsx)("div", {
                        className: i.BadgeText,
                        children: (0, u.we)("#Summer21_Badge_Congrats1"),
                      }),
                      (0, m.jsx)("div", {
                        className: i.BadgeText,
                        children: (0, u.we)("#Summer21_Badge_Congrats2"),
                      }),
                      (0, m.jsx)("a", {
                        className: i.BadgeLink,
                        href: S.TS.COMMUNITY_BASE_URL + "my/edit/avatar/" + r,
                        children: (0, u.we)("#Summer21_Badge_View"),
                      }),
                      (0, m.jsx)("a", {
                        className: i.FrameExample,
                        href: S.TS.COMMUNITY_BASE_URL + "my/edit/avatar/" + r,
                      }),
                    ],
                  }),
                ],
              }),
              (0, m.jsx)("div", {
                className: (0, a.A)(i.TheEnd, i.Noto),
                children: (0, u.we)("#Summer21_Story_End"),
              }),
            ],
          });
        },
        l = (e) => {
          const r = (0, s.PU)(e.eGenre);
          return (0, m.jsxs)("a", {
            id: e.strID,
            href: e.strSaleURL,
            style: { backgroundColor: `${e.strBackgroundColor}` },
            className: (0, a.A)(i.GenreContainer, i.Claimed),
            children: [
              (0, m.jsxs)("div", {
                className: i.LeftColumn,
                children: [
                  (0, m.jsx)("div", {
                    className: (0, a.A)(i.GenreSubheader, i.Noto),
                    children: e.strSubheader,
                  }),
                  (0, m.jsx)("div", {
                    className: i.GenreTitle,
                    children: (0, u.we)(e.strTitle),
                  }),
                  (0, m.jsx)("div", {
                    className: (0, a.A)(i.GenreStory, i.Noto),
                    children: (0, u.we)(e.strSummary),
                  }),
                ],
              }),
              (0, m.jsxs)("div", {
                className: i.RightColumn,
                children: [
                  r &&
                    (0, m.jsx)("div", {
                      className: i.StickerPreview,
                      style: { backgroundImage: `url(${r})` },
                    }),
                  !e.bClaimed &&
                    (0, m.jsx)("div", {
                      className: (0, a.A)(i.StickerPreview, i.Unclaimed),
                    }),
                ],
              }),
            ],
          });
        };
    },
  },
]);

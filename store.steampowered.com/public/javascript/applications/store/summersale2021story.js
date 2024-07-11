/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [7819],
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
        E4: () => B,
        PB: () => O,
        PU: () => P,
        VZ: () => p,
        _l: () => i,
        cZ: () => c,
        iG: () => g,
        ib: () => l,
        x4: () => d,
      });
      var m = t(34629),
        _ = t(41735),
        o = t.n(_),
        a = t(14947),
        s = t(90626),
        u = t(68797),
        S = t(78327);
      class n {
        m_mapGenreToStickerResponse = new Map();
        m_eStoryBadgeGranted = 0;
        m_strLocalizedStoryHeader;
        m_strLocalizedStoryHeaderMobile;
        static s_Singleton;
        static Get() {
          return n.s_Singleton || (n.s_Singleton = new n()), n.s_Singleton;
        }
        constructor() {
          (0, a.Gn)(this),
            "dev" == S.TS.WEB_UNIVERSE && (window.g_SummerSale2021Store = this);
          const e = (0, S.Tc)("summerstory", "application_config");
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
          if (!S.iA.logged_in) return;
          this.m_mapGenreToStickerResponse.set(e, {});
          let t = null;
          try {
            const m = await o().get(
              S.TS.STORE_BASE_URL + "promotion/ajaxhasclaimedgenresticker",
              { params: { genre: e }, cancelToken: r?.token },
            );
            if (200 == m?.status && 1 == m.data?.success && m.data?.results) {
              const r = m.data.results;
              return void this.m_mapGenreToStickerResponse.set(e, r);
            }
            t = { response: m };
          } catch (e) {
            t = e;
          }
          const m = (0, u.H)(t);
          console.error("Could not check claim on genre", e, m.strErrorMsg, m);
        }
        async MakeClaimForGenre(e, r, t) {
          if (!S.iA.logged_in) return 21;
          const m = new FormData();
          m.append("genre", e.toString()),
            m.append("choice", r.toString()),
            m.append("sessionid", S.TS.SESSIONID);
          let _ = null;
          try {
            const a = await o().post(
              S.TS.STORE_BASE_URL + "promotion/ajaxclaimstickerforgenre",
              m,
              { withCredentials: !0, cancelToken: t?.token },
            );
            if (200 == a?.status && 1 == a.data?.success && a.data?.results) {
              const t = a.data.results,
                m = this.m_mapGenreToStickerResponse.get(e);
              return (
                (m.choice = r),
                (m.sticker_def = t.claimed_sticker_def),
                (m.has_completed_story = t.has_completed_story),
                a.data.success
              );
            }
            _ = { response: a };
          } catch (e) {
            _ = e;
          }
          const a = (0, u.H)(_);
          return (
            console.error("Could not make claim on genre", e, a.strErrorMsg, a),
            _?.data?.success || 2
          );
        }
      }
      function i() {
        return n.Get().GetStoryBadgeGranted();
      }
      function c() {
        return n.Get().GetLocalizedStoryHeader();
      }
      function l() {
        return n.Get().GetLocalizedStoryHeaderMobile();
      }
      function g() {
        return n.Get().GetAllGenreChoices();
      }
      function d(e) {
        const r = s.useRef(null);
        s.useEffect(() => {
          const e = o().CancelToken.source();
          return (r.current = e), () => e.cancel("useGenreClaim: unmounting");
        }, []),
          n.Get().LoadClaimForGenre(e, r.current);
        return [
          n.Get().GetClaimForGenre(e),
          async (t) => {
            await n.Get().MakeClaimForGenre(e, t, r.current);
          },
        ];
      }
      (0, m.Cg)([a.sH], n.prototype, "m_mapGenreToStickerResponse", void 0),
        (0, m.Cg)([a.sH], n.prototype, "m_eStoryBadgeGranted", void 0);
      const y = 1658760;
      function P(e) {
        const [r] = d(e);
        return r?.sticker_def
          ? `${S.TS.MEDIA_CDN_COMMUNITY_URL}images/items/${y}/${r.sticker_def.item_image_small}`
          : null;
      }
      function p(e) {
        return !e || e >= N.length ? null : N[e];
      }
      function B() {
        return N.slice(1);
      }
      const N = [
        null,
        {
          eGenre: 1,
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
          eGenre: 2,
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
          eGenre: 3,
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
          eGenre: 4,
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
          eGenre: 5,
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
          eGenre: 6,
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
          eGenre: 7,
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
          eGenre: 8,
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
          eGenre: 9,
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
          eGenre: 10,
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
          eGenre: 11,
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
          eGenre: 12,
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
          eGenre: 13,
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
          eGenre: 14,
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
      function O() {
        s.useEffect(() => {
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
      t.r(r), t.d(r, { default: () => S });
      var m = t(90626),
        _ = t(90444),
        o = t(52038),
        a = t(61859),
        s = t(78327),
        u = t(42919);
      const S = () => {
          (0, _.PB)();
          const e = (0, _.iG)(),
            r = (0, _.E4)(),
            t = (0, _.cZ)(),
            S = (0, _.ib)(),
            c = [],
            l = [];
          r.forEach((r) => {
            const t = r.eGenre,
              _ = s.TS.STORE_BASE_URL + "sale/" + r.strSalePage;
            let o = (0, a.PP)(
              "#Summer_21_Story_Enter",
              m.createElement("span", null, (0, a.we)(r.strGenreName)),
            );
            if (e.has(t)) {
              let a = "";
              1 == e.get(t).choice
                ? (a = r.strResultA + "_Summary")
                : 2 == e.get(t).choice && (a = r.strResultB + "_Summary"),
                c.push(
                  m.createElement(i, {
                    key: t,
                    strSubheader: o,
                    bClaimed: !0,
                    strBackgroundColor: r.strBackgroundColor,
                    eGenre: r.eGenre,
                    strTitle: r.strPageTitle,
                    strSaleURL: _,
                    strSummary: a,
                  }),
                );
            } else {
              let e = "";
              l.length || (e = "next"),
                l.push(
                  m.createElement(i, {
                    key: t,
                    strID: e,
                    strSubheader: o,
                    strBackgroundColor: "#7C5F5A",
                    bClaimed: !1,
                    eGenre: r.eGenre,
                    strTitle: r.strPageTitle,
                    strSaleURL: _,
                    strSummary: "#Summer_21_Story_Next_Intro",
                  }),
                );
            }
          });
          let g = c.concat(l);
          return m.createElement(
            "div",
            { className: (0, o.A)(u.PageOuterContainer, s.TS.LANGUAGE) },
            m.createElement(
              "div",
              { className: u.PageInnerContainer },
              m.createElement(
                "a",
                { href: s.TS.STORE_BASE_URL },
                t &&
                  m.createElement("img", {
                    className: u.LocalizedHeaderImg,
                    src: t,
                  }),
                S &&
                  m.createElement("img", {
                    className: u.LocalizedHeaderMobileImg,
                    src: S,
                  }),
              ),
              m.createElement(
                "div",
                { className: u.PageInnerBG },
                m.createElement(
                  "div",
                  { className: u.PageInnerContent },
                  m.createElement(
                    "div",
                    { className: u.HeaderContainer },
                    m.createElement(
                      "div",
                      { className: u.HeaderPrefix },
                      (0, a.we)("#Summer_21_Overview_Title_Prefix"),
                    ),
                    (0, a.we)("#Summer_21_Overview_Title"),
                  ),
                  m.createElement(
                    "div",
                    { className: (0, o.A)(u.HeaderDesc, u.Noto) },
                    (0, a.we)("#Summer_21_Overview_Description1"),
                  ),
                  m.createElement(
                    "div",
                    { className: (0, o.A)(u.HeaderDesc, u.Noto) },
                    (0, a.we)("#Summer_21_Overview_Description3"),
                  ),
                  m.createElement(
                    "div",
                    { className: (0, o.A)(u.HeaderDesc, u.Noto) },
                    (0, a.we)("#Summer_21_Overview_Description4"),
                  ),
                  m.createElement(
                    "a",
                    {
                      id: "wallpapers",
                      href:
                        s.TS.MEDIA_CDN_URL +
                        "store/promo/summer2021/Steam_Summer_Sale_2021_Wallpapers.zip",
                      className: (0, o.A)(u.HeaderDesc, u.Noto, u.Wallpapers),
                    },
                    "*",
                    (0, a.we)("#Summer21_Story_DownloadWallpaper"),
                  ),
                  m.createElement(
                    "div",
                    { className: (0, o.A)(u.HeaderIntro, u.Noto) },
                    (0, a.we)("#Summer_21_Overview_Description2"),
                  ),
                  m.createElement(
                    "div",
                    { className: (0, o.A)(u.HeaderIntro, u.Noto) },
                    (0, a.we)("#Summer_21_Story_Intro"),
                  ),
                  m.createElement(
                    "div",
                    { className: (0, o.A)(u.ListHeader, u.Noto) },
                    (0, a.we)("#Summer_21_Story_Next"),
                  ),
                  m.createElement(
                    "div",
                    { className: (0, o.A)(u.GenreListContainer) },
                    g,
                  ),
                ),
                m.createElement(n, null),
              ),
            ),
          );
        },
        n = (e) => {
          const r = (0, _._l)();
          let t;
          if (51 == r)
            t = {
              badge_name: "#Summer21_Badge_Outcome1_Title",
              badge_desc: "#Summer21_Badge_Outcome1_Description",
              badge_class: u.Badge_51,
            };
          else if (52 == r)
            t = {
              badge_name: "#Summer21_Badge_Outcome2_Title",
              badge_desc: "#Summer21_Badge_Outcome2_Description",
              badge_class: u.Badge_52,
            };
          else if (53 == r)
            t = {
              badge_name: "#Summer21_Badge_Outcome3_Title",
              badge_desc: "#Summer21_Badge_Outcome3_Description",
              badge_class: u.Badge_53,
            };
          else if (54 == r)
            t = {
              badge_name: "#Summer21_Badge_Outcome4_Title",
              badge_desc: "#Summer21_Badge_Outcome4_Description",
              badge_class: u.Badge_54,
            };
          else {
            if (55 != r) return null;
            t = {
              badge_name: "#Summer21_Badge_Outcome5_Title",
              badge_desc: "#Summer21_Badge_Outcome5_Description",
              badge_class: u.Badge_55,
            };
          }
          return m.createElement(
            m.Fragment,
            null,
            m.createElement(
              "div",
              {
                className: (0, o.A)(
                  u.HeaderDesc,
                  u.Noto,
                  u.CompletedSummaryText,
                ),
              },
              (0, a.we)("#Summer21_Badge_Unlocked_Description"),
            ),
            m.createElement(
              "div",
              { id: "badge", className: (0, o.A)(u.BadgeContainer, u.Noto) },
              m.createElement(
                "div",
                { className: u.Column },
                m.createElement(
                  "div",
                  { className: u.SubHeader },
                  (0, a.we)("#Summer21_Badge_Prelude"),
                ),
                m.createElement(
                  "div",
                  { className: u.BadgeName },
                  (0, a.we)(t.badge_name),
                ),
                m.createElement(
                  "div",
                  { className: u.BadgeDesc },
                  (0, a.we)(t.badge_desc),
                ),
              ),
              m.createElement(
                "div",
                { className: u.Column },
                m.createElement("a", {
                  className: (0, o.A)(u.BadgeImg, t.badge_class),
                  href: s.TS.COMMUNITY_BASE_URL + "my/badges/" + r,
                }),
                m.createElement(
                  "div",
                  { className: u.BadgeText },
                  (0, a.we)("#Summer21_Badge_Congrats1"),
                ),
                m.createElement(
                  "div",
                  { className: u.BadgeText },
                  (0, a.we)("#Summer21_Badge_Congrats2"),
                ),
                m.createElement(
                  "a",
                  {
                    className: u.BadgeLink,
                    href: s.TS.COMMUNITY_BASE_URL + "my/edit/avatar/" + r,
                  },
                  (0, a.we)("#Summer21_Badge_View"),
                ),
                m.createElement("a", {
                  className: u.FrameExample,
                  href: s.TS.COMMUNITY_BASE_URL + "my/edit/avatar/" + r,
                }),
              ),
            ),
            m.createElement(
              "div",
              { className: (0, o.A)(u.TheEnd, u.Noto) },
              (0, a.we)("#Summer21_Story_End"),
            ),
          );
        },
        i = (e) => {
          const r = (0, _.PU)(e.eGenre);
          return m.createElement(
            "a",
            {
              id: e.strID,
              href: e.strSaleURL,
              style: { backgroundColor: `${e.strBackgroundColor}` },
              className: (0, o.A)(u.GenreContainer, u.Claimed),
            },
            m.createElement(
              "div",
              { className: u.LeftColumn },
              m.createElement(
                "div",
                { className: (0, o.A)(u.GenreSubheader, u.Noto) },
                e.strSubheader,
              ),
              m.createElement(
                "div",
                { className: u.GenreTitle },
                (0, a.we)(e.strTitle),
              ),
              m.createElement(
                "div",
                { className: (0, o.A)(u.GenreStory, u.Noto) },
                (0, a.we)(e.strSummary),
              ),
            ),
            m.createElement(
              "div",
              { className: u.RightColumn },
              r &&
                m.createElement("div", {
                  className: u.StickerPreview,
                  style: { backgroundImage: `url(${r})` },
                }),
              !e.bClaimed &&
                m.createElement("div", {
                  className: (0, o.A)(u.StickerPreview, u.Unclaimed),
                }),
            ),
          );
        };
    },
  },
]);

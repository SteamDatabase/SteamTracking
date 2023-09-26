/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [477],
  {
    90210: (e, r, t) => {
      t.d(r, {
        BO: () => O,
        Re: () => g,
        Tv: () => d,
        Y2: () => A,
        bM: () => P,
        h1: () => h,
        jM: () => B,
        rO: () => y,
        rn: () => p,
      });
      var o = t(33940),
        _ = t(52868),
        m = t.n(_),
        u = t(50265),
        S = t(89526),
        s = t(42735),
        n = t(94738),
        i = t(72985),
        a = t(23217),
        c = t(32765);
      class l {
        static Get() {
          return l.s_Singleton || (l.s_Singleton = new l()), l.s_Singleton;
        }
        constructor() {
          (this.m_mapGenreToStickerResponse = new Map()),
            (this.m_eStoryBadgeGranted = n.Jj.k_EUserBadgeInvalid),
            "dev" == c.De.WEB_UNIVERSE && (window.g_SummerSale2021Store = this);
          const e = (0, c.kQ)("summerstory", "application_config");
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
        LoadClaimForGenre(e, r) {
          var t, _;
          return (0, o.mG)(this, void 0, void 0, function* () {
            if (this.m_mapGenreToStickerResponse.has(e)) return;
            if (!c.L7.logged_in) return;
            this.m_mapGenreToStickerResponse.set(e, {});
            let o = null;
            try {
              const u = yield m().get(
                c.De.STORE_BASE_URL + "promotion/ajaxhasclaimedgenresticker",
                {
                  params: { genre: e },
                  cancelToken: null == r ? void 0 : r.token,
                },
              );
              if (
                200 == (null == u ? void 0 : u.status) &&
                (null === (t = u.data) || void 0 === t ? void 0 : t.success) ==
                  s.s.k_EResultOK &&
                (null === (_ = u.data) || void 0 === _ ? void 0 : _.results)
              ) {
                const r = u.data.results;
                return void this.m_mapGenreToStickerResponse.set(e, r);
              }
              o = { response: u };
            } catch (e) {
              o = e;
            }
            const u = (0, a.l)(o);
            console.error(
              "Could not check claim on genre",
              e,
              u.strErrorMsg,
              u,
            );
          });
        }
        MakeClaimForGenre(e, r, t) {
          var _, u, S;
          return (0, o.mG)(this, void 0, void 0, function* () {
            if (!c.L7.logged_in) return s.s.k_EResultNotLoggedOn;
            const o = new FormData();
            o.append("genre", e.toString()),
              o.append("choice", r.toString()),
              o.append("sessionid", c.De.SESSIONID);
            let n = null;
            try {
              const S = yield m().post(
                c.De.STORE_BASE_URL + "promotion/ajaxclaimstickerforgenre",
                o,
                {
                  withCredentials: !0,
                  cancelToken: null == t ? void 0 : t.token,
                },
              );
              if (
                200 == (null == S ? void 0 : S.status) &&
                (null === (_ = S.data) || void 0 === _ ? void 0 : _.success) ==
                  s.s.k_EResultOK &&
                (null === (u = S.data) || void 0 === u ? void 0 : u.results)
              ) {
                const t = S.data.results,
                  o = this.m_mapGenreToStickerResponse.get(e);
                return (
                  (o.choice = r),
                  (o.sticker_def = t.claimed_sticker_def),
                  (o.has_completed_story = t.has_completed_story),
                  S.data.success
                );
              }
              n = { response: S };
            } catch (e) {
              n = e;
            }
            const i = (0, a.l)(n);
            return (
              console.error(
                "Could not make claim on genre",
                e,
                i.strErrorMsg,
                i,
              ),
              (null === (S = null == n ? void 0 : n.data) || void 0 === S
                ? void 0
                : S.success) || s.s.k_EResultFail
            );
          });
        }
      }
      function g() {
        return l.Get().GetStoryBadgeGranted();
      }
      function y() {
        return l.Get().GetLocalizedStoryHeader();
      }
      function P() {
        return l.Get().GetLocalizedStoryHeaderMobile();
      }
      function d() {
        return l.Get().GetAllGenreChoices();
      }
      function p(e) {
        const r = S.useRef(null);
        S.useEffect(() => {
          const e = m().CancelToken.source();
          return (r.current = e), () => e.cancel("useGenreClaim: unmounting");
        }, []),
          l.Get().LoadClaimForGenre(e, r.current);
        return [
          l.Get().GetClaimForGenre(e),
          (t) =>
            (0, o.mG)(this, void 0, void 0, function* () {
              yield l.Get().MakeClaimForGenre(e, t, r.current);
            }),
        ];
      }
      (0, o.gn)([u.LO], l.prototype, "m_mapGenreToStickerResponse", void 0),
        (0, o.gn)([u.LO], l.prototype, "m_eStoryBadgeGranted", void 0);
      const G = 1658760;
      function O(e) {
        const [r] = p(e);
        return (null == r ? void 0 : r.sticker_def)
          ? `${c.De.MEDIA_CDN_COMMUNITY_URL}images/items/${G}/${r.sticker_def.item_image_small}`
          : null;
      }
      function A(e) {
        return !e || e >= k.length ? null : k[e];
      }
      function h() {
        return k.slice(1);
      }
      const k = [
        null,
        {
          eGenre: i.qF.k_ESummerSale2021Genre_Action,
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
          eGenre: i.qF.k_ESummerSale2021Genre_AdventureAndCasual,
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
          eGenre: i.qF.k_ESummerSale2021Genre_RolePlaying,
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
          eGenre: i.qF.k_ESummerSale2021Genre_Strategy,
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
          eGenre: i.qF.k_ESummerSale2021Genre_Simulation,
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
          eGenre: i.qF.k_ESummerSale2021Genre_SportsAndRacing,
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
          eGenre: i.qF.k_ESummerSale2021Genre_Horror,
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
          eGenre: i.qF.k_ESummerSale2021Genre_Survival,
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
          eGenre: i.qF.k_ESummerSale2021Genre_OpenWorld,
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
          eGenre: i.qF.k_ESummerSale2021Genre_ScifiAndCyberpunk,
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
          eGenre: i.qF.k_ESummerSale2021Genre_MysteryAndDetective,
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
          eGenre: i.qF.k_ESummerSale2021Genre_Space,
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
          eGenre: i.qF.k_ESummerSale2021Genre_RogueLike,
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
          eGenre: i.qF.k_ESummerSale2021Genre_Anime,
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
      function B() {
        S.useEffect(() => {
          const e = document.createElement("link");
          (e.rel = "stylesheet"),
            (e.href =
              "https://fonts.googleapis.com/css2?family=Noto+Serif&family=Noto+Serif+JP&family=Noto+Serif+KR&family=Noto+Serif+SC:wght@500&family=Noto+Serif+TC&family=Jomhuria&&family=Big+Shoulders+Display:wght@800&display=swap"),
            document.head.appendChild(e);
        }, []);
      }
    },
  },
]);

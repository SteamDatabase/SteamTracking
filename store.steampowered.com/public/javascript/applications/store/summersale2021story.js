/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [1918],
  {
    27419: (e) => {
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
    9558: (e, r, t) => {
      "use strict";
      t.d(r, {
        BO: () => y,
        Re: () => i,
        Tv: () => g,
        Y2: () => P,
        bM: () => c,
        h1: () => p,
        jM: () => N,
        rO: () => l,
        rn: () => d,
      });
      var m = t(70655),
        o = t(9669),
        _ = t.n(o),
        s = t(22188),
        a = t(67294),
        u = (t(26149), t(18330), t(65497), t(82946), t(93976)),
        n = t(90666);
      class S {
        constructor() {
          (this.m_mapGenreToStickerResponse = new Map()),
            (this.m_eStoryBadgeGranted = 0),
            "dev" == n.De.WEB_UNIVERSE && (window.g_SummerSale2021Store = this);
          const e = (0, n.kQ)("summerstory", "application_config");
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
        static Get() {
          return S.s_Singleton || (S.s_Singleton = new S()), S.s_Singleton;
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
          var t, o;
          return (0, m.mG)(this, void 0, void 0, function* () {
            if (this.m_mapGenreToStickerResponse.has(e)) return;
            if (!n.L7.logged_in) return;
            this.m_mapGenreToStickerResponse.set(e, {});
            let m = null;
            try {
              const s = yield _().get(
                n.De.STORE_BASE_URL + "promotion/ajaxhasclaimedgenresticker",
                {
                  params: { genre: e },
                  cancelToken: null == r ? void 0 : r.token,
                }
              );
              if (
                200 == (null == s ? void 0 : s.status) &&
                1 ==
                  (null === (t = s.data) || void 0 === t
                    ? void 0
                    : t.success) &&
                (null === (o = s.data) || void 0 === o ? void 0 : o.results)
              ) {
                const r = s.data.results;
                return void this.m_mapGenreToStickerResponse.set(e, r);
              }
              m = { response: s };
            } catch (e) {
              m = e;
            }
            const s = (0, u.l)(m);
            console.error(
              "Could not check claim on genre",
              e,
              s.strErrorMsg,
              s
            );
          });
        }
        MakeClaimForGenre(e, r, t) {
          var o, s, a;
          return (0, m.mG)(this, void 0, void 0, function* () {
            if (!n.L7.logged_in) return 21;
            const m = new FormData();
            m.append("genre", e.toString()),
              m.append("choice", r.toString()),
              m.append("sessionid", n.De.SESSIONID);
            let S = null;
            try {
              const a = yield _().post(
                n.De.STORE_BASE_URL + "promotion/ajaxclaimstickerforgenre",
                m,
                {
                  withCredentials: !0,
                  cancelToken: null == t ? void 0 : t.token,
                }
              );
              if (
                200 == (null == a ? void 0 : a.status) &&
                1 ==
                  (null === (o = a.data) || void 0 === o
                    ? void 0
                    : o.success) &&
                (null === (s = a.data) || void 0 === s ? void 0 : s.results)
              ) {
                const t = a.data.results,
                  m = this.m_mapGenreToStickerResponse.get(e);
                return (
                  (m.choice = r),
                  (m.sticker_def = t.claimed_sticker_def),
                  (m.has_completed_story = t.has_completed_story),
                  a.data.success
                );
              }
              S = { response: a };
            } catch (e) {
              S = e;
            }
            const i = (0, u.l)(S);
            return (
              console.error(
                "Could not make claim on genre",
                e,
                i.strErrorMsg,
                i
              ),
              (null === (a = null == S ? void 0 : S.data) || void 0 === a
                ? void 0
                : a.success) || 2
            );
          });
        }
      }
      function i() {
        return S.Get().GetStoryBadgeGranted();
      }
      function l() {
        return S.Get().GetLocalizedStoryHeader();
      }
      function c() {
        return S.Get().GetLocalizedStoryHeaderMobile();
      }
      function g() {
        return S.Get().GetAllGenreChoices();
      }
      function d(e) {
        const r = a.useRef(null);
        a.useEffect(() => {
          const e = _().CancelToken.source();
          return (r.current = e), () => e.cancel("useGenreClaim: unmounting");
        }, []),
          S.Get().LoadClaimForGenre(e, r.current);
        return [
          S.Get().GetClaimForGenre(e),
          (t) =>
            (0, m.mG)(this, void 0, void 0, function* () {
              yield S.Get().MakeClaimForGenre(e, t, r.current);
            }),
        ];
      }
      (0, m.gn)([s.LO], S.prototype, "m_mapGenreToStickerResponse", void 0),
        (0, m.gn)([s.LO], S.prototype, "m_eStoryBadgeGranted", void 0);
      function y(e) {
        const [r] = d(e);
        return (null == r ? void 0 : r.sticker_def)
          ? `${n.De.MEDIA_CDN_COMMUNITY_URL}images/items/1658760/${r.sticker_def.item_image_small}`
          : null;
      }
      function P(e) {
        return !e || e >= B.length ? null : B[e];
      }
      function p() {
        return B.slice(1);
      }
      const B = [
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
      function N() {
        a.useEffect(() => {
          const e = document.createElement("link");
          (e.rel = "stylesheet"),
            (e.href =
              "https://fonts.googleapis.com/css2?family=Noto+Serif&family=Noto+Serif+JP&family=Noto+Serif+KR&family=Noto+Serif+SC:wght@500&family=Noto+Serif+TC&family=Jomhuria&&family=Big+Shoulders+Display:wght@800&display=swap"),
            document.head.appendChild(e);
        }, []);
      }
    },
    23879: (e, r, t) => {
      "use strict";
      t.r(r), t.d(r, { default: () => n });
      var m = t(67294),
        o = (t(18330), t(65497), t(9558)),
        _ = t(7573),
        s = t(41311),
        a = t(90666),
        u = t(27419);
      const n = () => {
          (0, o.jM)();
          const e = (0, o.Tv)(),
            r = (0, o.h1)(),
            t = (0, o.rO)(),
            n = (0, o.bM)(),
            l = [],
            c = [];
          r.forEach((r) => {
            const t = r.eGenre,
              o = a.De.STORE_BASE_URL + "sale/" + r.strSalePage;
            let _ = (0, s.kQ)(
              "#Summer_21_Story_Enter",
              m.createElement("span", null, (0, s.Xx)(r.strGenreName))
            );
            if (e.has(t)) {
              let s = "";
              1 == e.get(t).choice
                ? (s = r.strResultA + "_Summary")
                : 2 == e.get(t).choice && (s = r.strResultB + "_Summary"),
                l.push(
                  m.createElement(i, {
                    key: t,
                    strSubheader: _,
                    bClaimed: !0,
                    strBackgroundColor: r.strBackgroundColor,
                    eGenre: r.eGenre,
                    strTitle: r.strPageTitle,
                    strSaleURL: o,
                    strSummary: s,
                  })
                );
            } else {
              let e = "";
              c.length || (e = "next"),
                c.push(
                  m.createElement(i, {
                    key: t,
                    strID: e,
                    strSubheader: _,
                    strBackgroundColor: "#7C5F5A",
                    bClaimed: !1,
                    eGenre: r.eGenre,
                    strTitle: r.strPageTitle,
                    strSaleURL: o,
                    strSummary: "#Summer_21_Story_Next_Intro",
                  })
                );
            }
          });
          let g = l.concat(c);
          return m.createElement(
            "div",
            { className: (0, _.Z)(u.PageOuterContainer, a.De.LANGUAGE) },
            m.createElement(
              "div",
              { className: u.PageInnerContainer },
              m.createElement(
                "a",
                { href: a.De.STORE_BASE_URL },
                t &&
                  m.createElement("img", {
                    className: u.LocalizedHeaderImg,
                    src: t,
                  }),
                n &&
                  m.createElement("img", {
                    className: u.LocalizedHeaderMobileImg,
                    src: n,
                  })
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
                      (0, s.Xx)("#Summer_21_Overview_Title_Prefix")
                    ),
                    (0, s.Xx)("#Summer_21_Overview_Title")
                  ),
                  m.createElement(
                    "div",
                    { className: (0, _.Z)(u.HeaderDesc, u.Noto) },
                    (0, s.Xx)("#Summer_21_Overview_Description1")
                  ),
                  m.createElement(
                    "div",
                    { className: (0, _.Z)(u.HeaderDesc, u.Noto) },
                    (0, s.Xx)("#Summer_21_Overview_Description3")
                  ),
                  m.createElement(
                    "div",
                    { className: (0, _.Z)(u.HeaderDesc, u.Noto) },
                    (0, s.Xx)("#Summer_21_Overview_Description4")
                  ),
                  m.createElement(
                    "a",
                    {
                      id: "wallpapers",
                      href:
                        a.De.MEDIA_CDN_URL +
                        "store/promo/summer2021/Steam_Summer_Sale_2021_Wallpapers.zip",
                      className: (0, _.Z)(u.HeaderDesc, u.Noto, u.Wallpapers),
                    },
                    "*",
                    (0, s.Xx)("#Summer21_Story_DownloadWallpaper")
                  ),
                  m.createElement(
                    "div",
                    { className: (0, _.Z)(u.HeaderIntro, u.Noto) },
                    (0, s.Xx)("#Summer_21_Overview_Description2")
                  ),
                  m.createElement(
                    "div",
                    { className: (0, _.Z)(u.HeaderIntro, u.Noto) },
                    (0, s.Xx)("#Summer_21_Story_Intro")
                  ),
                  m.createElement(
                    "div",
                    { className: (0, _.Z)(u.ListHeader, u.Noto) },
                    (0, s.Xx)("#Summer_21_Story_Next")
                  ),
                  m.createElement(
                    "div",
                    { className: (0, _.Z)(u.GenreListContainer) },
                    g
                  )
                ),
                m.createElement(S, null)
              )
            )
          );
        },
        S = (e) => {
          const r = (0, o.Re)();
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
                className: (0, _.Z)(
                  u.HeaderDesc,
                  u.Noto,
                  u.CompletedSummaryText
                ),
              },
              (0, s.Xx)("#Summer21_Badge_Unlocked_Description")
            ),
            m.createElement(
              "div",
              { id: "badge", className: (0, _.Z)(u.BadgeContainer, u.Noto) },
              m.createElement(
                "div",
                { className: u.Column },
                m.createElement(
                  "div",
                  { className: u.SubHeader },
                  (0, s.Xx)("#Summer21_Badge_Prelude")
                ),
                m.createElement(
                  "div",
                  { className: u.BadgeName },
                  (0, s.Xx)(t.badge_name)
                ),
                m.createElement(
                  "div",
                  { className: u.BadgeDesc },
                  (0, s.Xx)(t.badge_desc)
                )
              ),
              m.createElement(
                "div",
                { className: u.Column },
                m.createElement("a", {
                  className: (0, _.Z)(u.BadgeImg, t.badge_class),
                  href: a.De.COMMUNITY_BASE_URL + "my/badges/" + r,
                }),
                m.createElement(
                  "div",
                  { className: u.BadgeText },
                  (0, s.Xx)("#Summer21_Badge_Congrats1")
                ),
                m.createElement(
                  "div",
                  { className: u.BadgeText },
                  (0, s.Xx)("#Summer21_Badge_Congrats2")
                ),
                m.createElement(
                  "a",
                  {
                    className: u.BadgeLink,
                    href: a.De.COMMUNITY_BASE_URL + "my/edit/avatar/" + r,
                  },
                  (0, s.Xx)("#Summer21_Badge_View")
                ),
                m.createElement("a", {
                  className: u.FrameExample,
                  href: a.De.COMMUNITY_BASE_URL + "my/edit/avatar/" + r,
                })
              )
            ),
            m.createElement(
              "div",
              { className: (0, _.Z)(u.TheEnd, u.Noto) },
              (0, s.Xx)("#Summer21_Story_End")
            )
          );
        },
        i = (e) => {
          const r = (0, o.BO)(e.eGenre);
          return m.createElement(
            "a",
            {
              id: e.strID,
              href: e.strSaleURL,
              style: { backgroundColor: `${e.strBackgroundColor}` },
              className: (0, _.Z)(u.GenreContainer, u.Claimed),
            },
            m.createElement(
              "div",
              { className: u.LeftColumn },
              m.createElement(
                "div",
                { className: (0, _.Z)(u.GenreSubheader, u.Noto) },
                e.strSubheader
              ),
              m.createElement(
                "div",
                { className: u.GenreTitle },
                (0, s.Xx)(e.strTitle)
              ),
              m.createElement(
                "div",
                { className: (0, _.Z)(u.GenreStory, u.Noto) },
                (0, s.Xx)(e.strSummary)
              )
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
                  className: (0, _.Z)(u.StickerPreview, u.Unclaimed),
                })
            )
          );
        };
    },
  },
]);

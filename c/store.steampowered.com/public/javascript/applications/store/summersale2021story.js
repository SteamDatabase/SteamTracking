(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [7819],
  {
    chunkid: (module) => {
      module.exports = {
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
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      class _ {
        m_mapGenreToStickerResponse = new Map();
        m_eStoryBadgeGranted = 0;
        m_strLocalizedStoryHeader;
        m_strLocalizedStoryHeaderMobile;
        static s_Singleton;
        static Get() {
          return _.s_Singleton || (_.s_Singleton = new _()), _.s_Singleton;
        }
        constructor() {
          (0, _._)(this),
            "dev" == _._.WEB_UNIVERSE && (window.g_SummerSale2021Store = this);
          const _ = (0, _._)("summerstory", "application_config");
          if (_) {
            if (_.story_choices) {
              const _ = _.story_choices;
              _.sort((_, _) => _.time_chosen - _.time_chosen),
                _.forEach((_) => {
                  this.m_mapGenreToStickerResponse.set(_.genre, _);
                });
            }
            _.badge_granted && (this.m_eStoryBadgeGranted = _.badge_granted),
              _.header && (this.m_strLocalizedStoryHeader = _.header),
              _.header_mobile &&
                (this.m_strLocalizedStoryHeaderMobile = _.header_mobile);
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
        GetClaimForGenre(_) {
          return this.m_mapGenreToStickerResponse.get(_);
        }
        async LoadClaimForGenre(_, _) {
          if (this.m_mapGenreToStickerResponse.has(_)) return;
          if (!_._.logged_in) return;
          this.m_mapGenreToStickerResponse.set(_, {});
          let _ = null;
          try {
            const _ = await _().get(
              _._.STORE_BASE_URL + "promotion/ajaxhasclaimedgenresticker",
              {
                params: {
                  genre: _,
                },
                cancelToken: _?.token,
              },
            );
            if (200 == _?.status && 1 == _.data?.success && _.data?.results) {
              const _ = _.data.results;
              return void this.m_mapGenreToStickerResponse.set(_, _);
            }
            _ = {
              response: _,
            };
          } catch (_) {
            _ = _;
          }
          const _ = (0, _._)(_);
          console.error("Could not check claim on genre", _, _.strErrorMsg, _);
        }
        async MakeClaimForGenre(_, _, _) {
          if (!_._.logged_in) return 21;
          const _ = new FormData();
          _.append("genre", _.toString()),
            _.append("choice", _.toString()),
            _.append("sessionid", _._.SESSIONID);
          let _ = null;
          try {
            const _ = await _().post(
              _._.STORE_BASE_URL + "promotion/ajaxclaimstickerforgenre",
              _,
              {
                withCredentials: !0,
                cancelToken: _?.token,
              },
            );
            if (200 == _?.status && 1 == _.data?.success && _.data?.results) {
              const _ = _.data.results,
                _ = this.m_mapGenreToStickerResponse.get(_);
              return (
                (_.choice = _),
                (_.sticker_def = _.claimed_sticker_def),
                (_.has_completed_story = _.has_completed_story),
                _.data.success
              );
            }
            _ = {
              response: _,
            };
          } catch (_) {
            _ = _;
          }
          const _ = (0, _._)(_);
          return (
            console.error("Could not make claim on genre", _, _.strErrorMsg, _),
            _?.data?.success || 2
          );
        }
      }
      function _() {
        return _.Get().GetStoryBadgeGranted();
      }
      function _() {
        return _.Get().GetLocalizedStoryHeader();
      }
      function _() {
        return _.Get().GetLocalizedStoryHeaderMobile();
      }
      function _() {
        return _.Get().GetAllGenreChoices();
      }
      function _(_) {
        const _ = _.useRef(null);
        _.useEffect(() => {
          const _ = _().CancelToken.source();
          return (_.current = _), () => _.cancel("useGenreClaim: unmounting");
        }, []),
          _.Get().LoadClaimForGenre(_, _.current);
        return [
          _.Get().GetClaimForGenre(_),
          async (_) => {
            await _.Get().MakeClaimForGenre(_, _, _.current);
          },
        ];
      }
      (0, _._)([_._], _.prototype, "m_mapGenreToStickerResponse", void 0),
        (0, _._)([_._], _.prototype, "m_eStoryBadgeGranted", void 0);
      const _ = 1658760;
      function _(_) {
        const [_] = _(_);
        return _?.sticker_def
          ? `${_._.MEDIA_CDN_COMMUNITY_URL}images/items/${_}/${_.sticker_def.item_image_small}`
          : null;
      }
      function _(_) {
        return !_ || _ >= _.length ? null : _[_];
      }
      function _() {
        return _.slice(1);
      }
      const _ = [
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
      function _() {
        _.useEffect(() => {
          const _ = document.createElement("link");
          (_.rel = "stylesheet"),
            (_.href =
              "https://fonts.googleapis.com/css2?family=Noto+Serif&family=Noto+Serif+JP&family=Noto+Serif+KR&family=Noto+Serif+SC:wght@500&family=Noto+Serif+TC&family=Jomhuria&&family=Big+Shoulders+Display:wght@800&display=swap"),
            document.head.appendChild(_);
        }, []);
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports),
        __webpack_require__._(module_exports, {
          default: () => _,
        });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      const _ = () => {
          (0, _._)();
          const _ = (0, _._)(),
            _ = (0, _._)(),
            _ = (0, _._)(),
            _ = (0, _._)(),
            _ = [],
            _ = [];
          _.forEach((_) => {
            const _ = _.eGenre,
              _ = _._.STORE_BASE_URL + "sale/" + _.strSalePage;
            let _ = (0, _._)(
              "#Summer_21_Story_Enter",
              _.createElement("span", null, (0, _._)(_.strGenreName)),
            );
            if (_.has(_)) {
              let _ = "";
              1 == _.get(_).choice
                ? (_ = _.strResultA + "_Summary")
                : 2 == _.get(_).choice && (_ = _.strResultB + "_Summary"),
                _.push(
                  _.createElement(_, {
                    key: _,
                    strSubheader: _,
                    bClaimed: !0,
                    strBackgroundColor: _.strBackgroundColor,
                    eGenre: _.eGenre,
                    strTitle: _.strPageTitle,
                    strSaleURL: _,
                    strSummary: _,
                  }),
                );
            } else {
              let _ = "";
              _.length || (_ = "next"),
                _.push(
                  _.createElement(_, {
                    key: _,
                    strID: _,
                    strSubheader: _,
                    strBackgroundColor: "#7C5F5A",
                    bClaimed: !1,
                    eGenre: _.eGenre,
                    strTitle: _.strPageTitle,
                    strSaleURL: _,
                    strSummary: "#Summer_21_Story_Next_Intro",
                  }),
                );
            }
          });
          let _ = _.concat(_);
          return _.createElement(
            "div",
            {
              className: (0, _._)(_.PageOuterContainer, _._.LANGUAGE),
            },
            _.createElement(
              "div",
              {
                className: _.PageInnerContainer,
              },
              _.createElement(
                "a",
                {
                  href: _._.STORE_BASE_URL,
                },
                _ &&
                  _.createElement("img", {
                    className: _.LocalizedHeaderImg,
                    src: _,
                  }),
                _ &&
                  _.createElement("img", {
                    className: _.LocalizedHeaderMobileImg,
                    src: _,
                  }),
              ),
              _.createElement(
                "div",
                {
                  className: _.PageInnerBG,
                },
                _.createElement(
                  "div",
                  {
                    className: _.PageInnerContent,
                  },
                  _.createElement(
                    "div",
                    {
                      className: _.HeaderContainer,
                    },
                    _.createElement(
                      "div",
                      {
                        className: _.HeaderPrefix,
                      },
                      (0, _._)("#Summer_21_Overview_Title_Prefix"),
                    ),
                    (0, _._)("#Summer_21_Overview_Title"),
                  ),
                  _.createElement(
                    "div",
                    {
                      className: (0, _._)(_.HeaderDesc, _.Noto),
                    },
                    (0, _._)("#Summer_21_Overview_Description1"),
                  ),
                  _.createElement(
                    "div",
                    {
                      className: (0, _._)(_.HeaderDesc, _.Noto),
                    },
                    (0, _._)("#Summer_21_Overview_Description3"),
                  ),
                  _.createElement(
                    "div",
                    {
                      className: (0, _._)(_.HeaderDesc, _.Noto),
                    },
                    (0, _._)("#Summer_21_Overview_Description4"),
                  ),
                  _.createElement(
                    "a",
                    {
                      _: "wallpapers",
                      href:
                        _._.MEDIA_CDN_URL +
                        "store/promo/summer2021/Steam_Summer_Sale_2021_Wallpapers.zip",
                      className: (0, _._)(_.HeaderDesc, _.Noto, _.Wallpapers),
                    },
                    "*",
                    (0, _._)("#Summer21_Story_DownloadWallpaper"),
                  ),
                  _.createElement(
                    "div",
                    {
                      className: (0, _._)(_.HeaderIntro, _.Noto),
                    },
                    (0, _._)("#Summer_21_Overview_Description2"),
                  ),
                  _.createElement(
                    "div",
                    {
                      className: (0, _._)(_.HeaderIntro, _.Noto),
                    },
                    (0, _._)("#Summer_21_Story_Intro"),
                  ),
                  _.createElement(
                    "div",
                    {
                      className: (0, _._)(_.ListHeader, _.Noto),
                    },
                    (0, _._)("#Summer_21_Story_Next"),
                  ),
                  _.createElement(
                    "div",
                    {
                      className: (0, _._)(_.GenreListContainer),
                    },
                    _,
                  ),
                ),
                _.createElement(_, null),
              ),
            ),
          );
        },
        _ = (_) => {
          const _ = (0, _._)();
          let _;
          if (51 == _)
            _ = {
              badge_name: "#Summer21_Badge_Outcome1_Title",
              badge_desc: "#Summer21_Badge_Outcome1_Description",
              badge_class: _.Badge_51,
            };
          else if (52 == _)
            _ = {
              badge_name: "#Summer21_Badge_Outcome2_Title",
              badge_desc: "#Summer21_Badge_Outcome2_Description",
              badge_class: _.Badge_52,
            };
          else if (53 == _)
            _ = {
              badge_name: "#Summer21_Badge_Outcome3_Title",
              badge_desc: "#Summer21_Badge_Outcome3_Description",
              badge_class: _.Badge_53,
            };
          else if (54 == _)
            _ = {
              badge_name: "#Summer21_Badge_Outcome4_Title",
              badge_desc: "#Summer21_Badge_Outcome4_Description",
              badge_class: _.Badge_54,
            };
          else {
            if (55 != _) return null;
            _ = {
              badge_name: "#Summer21_Badge_Outcome5_Title",
              badge_desc: "#Summer21_Badge_Outcome5_Description",
              badge_class: _.Badge_55,
            };
          }
          return _.createElement(
            _.Fragment,
            null,
            _.createElement(
              "div",
              {
                className: (0, _._)(
                  _.HeaderDesc,
                  _.Noto,
                  _.CompletedSummaryText,
                ),
              },
              (0, _._)("#Summer21_Badge_Unlocked_Description"),
            ),
            _.createElement(
              "div",
              {
                _: "badge",
                className: (0, _._)(_.BadgeContainer, _.Noto),
              },
              _.createElement(
                "div",
                {
                  className: _.Column,
                },
                _.createElement(
                  "div",
                  {
                    className: _.SubHeader,
                  },
                  (0, _._)("#Summer21_Badge_Prelude"),
                ),
                _.createElement(
                  "div",
                  {
                    className: _.BadgeName,
                  },
                  (0, _._)(_.badge_name),
                ),
                _.createElement(
                  "div",
                  {
                    className: _.BadgeDesc,
                  },
                  (0, _._)(_.badge_desc),
                ),
              ),
              _.createElement(
                "div",
                {
                  className: _.Column,
                },
                _.createElement("a", {
                  className: (0, _._)(_.BadgeImg, _.badge_class),
                  href: _._.COMMUNITY_BASE_URL + "my/badges/" + _,
                }),
                _.createElement(
                  "div",
                  {
                    className: _.BadgeText,
                  },
                  (0, _._)("#Summer21_Badge_Congrats1"),
                ),
                _.createElement(
                  "div",
                  {
                    className: _.BadgeText,
                  },
                  (0, _._)("#Summer21_Badge_Congrats2"),
                ),
                _.createElement(
                  "a",
                  {
                    className: _.BadgeLink,
                    href: _._.COMMUNITY_BASE_URL + "my/edit/avatar/" + _,
                  },
                  (0, _._)("#Summer21_Badge_View"),
                ),
                _.createElement("a", {
                  className: _.FrameExample,
                  href: _._.COMMUNITY_BASE_URL + "my/edit/avatar/" + _,
                }),
              ),
            ),
            _.createElement(
              "div",
              {
                className: (0, _._)(_.TheEnd, _.Noto),
              },
              (0, _._)("#Summer21_Story_End"),
            ),
          );
        },
        _ = (_) => {
          const _ = (0, _._)(_.eGenre);
          return _.createElement(
            "a",
            {
              _: _.strID,
              href: _.strSaleURL,
              style: {
                backgroundColor: `${_.strBackgroundColor}`,
              },
              className: (0, _._)(_.GenreContainer, _.Claimed),
            },
            _.createElement(
              "div",
              {
                className: _.LeftColumn,
              },
              _.createElement(
                "div",
                {
                  className: (0, _._)(_.GenreSubheader, _.Noto),
                },
                _.strSubheader,
              ),
              _.createElement(
                "div",
                {
                  className: _.GenreTitle,
                },
                (0, _._)(_.strTitle),
              ),
              _.createElement(
                "div",
                {
                  className: (0, _._)(_.GenreStory, _.Noto),
                },
                (0, _._)(_.strSummary),
              ),
            ),
            _.createElement(
              "div",
              {
                className: _.RightColumn,
              },
              _ &&
                _.createElement("div", {
                  className: _.StickerPreview,
                  style: {
                    backgroundImage: `url(${_})`,
                  },
                }),
              !_.bClaimed &&
                _.createElement("div", {
                  className: (0, _._)(_.StickerPreview, _.Unclaimed),
                }),
            ),
          );
        };
    },
  },
]);

(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [7278],
  {
    chunkid: (module) => {
      module.exports = {
        narrowWidth: "500px",
        CalendarBtn: "_6LCq5awwJWbT0WLusE-as",
      };
    },
    chunkid: (module) => {
      module.exports = {
        narrowWidth: "500px",
        ImagesCtn: "_3C3Hy1Ldb_j8FpXikuio9T",
        AllImagesCtn: "Y8NVLbtTPQh9gVfG4V_tl",
        FadeInTiles: "_3HscHWkOLtsK-kzGBMVI2Y",
        AllImages: "_1DF4gfqbWS61FaehmUYkuU",
        ImageTint: "_1uXifcwYEEZepZq9GX0pf0",
        Wide2: "_11TDFqeudgrq4D6KFL1Hs3",
      };
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
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_);
      function _(_) {
        const { rgAppIDs: _, children: __webpack_require__, nMonth: _ } = _,
          _ = (0, _.useMemo)(
            () => _.map((_) => _._.Get().GetApp(_)).filter(Boolean),
            [_],
          );
        return _.createElement(
          _.Fragment,
          null,
          _.createElement(
            "div",
            {
              className: (0, _._)(_().ImagesCtn),
            },
            _.createElement(
              "div",
              {
                className: _().AllImagesCtn,
              },
              _.createElement(
                "div",
                {
                  className: _().AllImages,
                },
                _.createElement(
                  "div",
                  {
                    className: (0, _._)({
                      [_().ImageTint]: !0,
                      [`Month${_}`]: !0,
                      [_().Wide2]: _.length <= 10,
                      [_().Wide3]: _.length <= 20,
                    }),
                  },
                  _.map((_) =>
                    _.createElement("img", {
                      key: "bg_" + _.GetAppID(),
                      src: _.GetAssets().GetHeaderURL(),
                    }),
                  ),
                ),
              ),
            ),
          ),
          __webpack_require__,
        );
      }
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      let _ = 1234;
      function _(_, _) {
        return {
          unique_id: _++,
          capsules: null,
          events: null,
          links: null,
          section_type: _,
          localized_label: [],
          default_label: _,
        };
      }
      const _ = "socialcontent_";
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      const _ = [
          null,
          "rgba(249, 202, 111, 1)",
          "rgba(156, 159, 164, 1)",
          "rgba(214, 153, 95, 1)",
        ],
        _ = [
          null,
          "rgba(55, 44, 24, 1)",
          "rgba(41, 41, 43, 1)",
          "rgba(52, 37, 24, 1)",
        ];
      function _(_, _, _, _, _) {
        const _ = (function (_, _) {
            const _ = new _._();
            return (
              (_.clanSteamID = _._.InitFromClanID(_)),
              (_.GID = "fakeevent_" + _++),
              (_.jsondata.bSaleEnabled = !0),
              (_.jsondata.sale_vanity_id_valve_approved_for_sale_subpath = !0),
              (_.jsondata.sale_vanity_id = _),
              _
            );
          })(_._, _),
          _ = [..._, ..._],
          _ = new Set(_);
        if (
          ((_.jsondata.sale_sections = [
            {
              ..._("trailercarousel", ""),
              capsules: __webpack_require__.map((_) => ({
                _: _,
                type: _.has(_) ? "dlc" : "game",
              })),
              use_random_order: !0,
              trailer_carousel_auto_advance_msec: 1e4,
              trailer_carousel_allow_apps_without_trailers: !0,
            },
          ]),
          _._.logged_in)
        ) {
          const _ = _._.Get(),
            _ = _.filter((_) => _.BIsGameWishlisted(_));
          _?.length > 0 &&
            _.jsondata.sale_sections.push({
              ..._("items", "#Sale_OnWishlist"),
              capsules: _.map((_) => ({
                _: _,
                type: _.has(_) ? "dlc" : "game",
              })),
              capsules_per_row_array: _.length < 3 ? [2] : [5],
              carousel_rows: 1,
              show_as_carousel: !0,
              capsule_style_per_row_array: _.length < 3 ? ["grid"] : ["tall"],
              random_from_entire_set: !0,
            });
          const _ = _.filter((_) => _.BIsGameRecommended(_));
          if (_?.length > 0) {
            const _ = _.length;
            _.jsondata.sale_sections.push({
              ..._("items", "#Sale_default_label_RecommendedForYou"),
              capsules: __webpack_require__.map((_) => ({
                _: _,
                type: _.has(_) ? "dlc" : "game",
              })),
              capsules_per_row_array: 2 == _ ? [2] : [3, 2],
              carousel_rows: 2,
              show_as_carousel: !0,
              capsule_style_per_row_array: 2 == _ ? ["grid"] : ["tall", "grid"],
            });
          }
          const _ = _.filter((_) => {
            if (!_.BIsGameOwned(_)) {
              const _ = _._.Get().GetApp(_);
              return _.BIsGameOwned(__webpack_require__.GetParentAppID());
            }
            return !1;
          });
          _.length > 0 &&
            _.jsondata.sale_sections.push({
              ..._("dlc_for_you", "#Sale_default_label_246"),
              capsules: _.map((_) => ({
                _: _,
                type: "dlc",
              })),
              dlc_for_you_data: {
                group_by_parent_app: !0,
                hide_dlc_stats: !0,
                parent_app_page_size: 5,
                hide_dlc_grouping: !0,
              },
              capsules_per_row_array: [3],
              show_as_carousel: !0,
            });
        }
        if (_?.length > 25)
          for (let _ in _) {
            const _ = _[_];
            _.jsondata.sale_sections.push({
              ..._("items", "#SteamCharts_Monthly_Rank_" + _),
              capsules: _.map((_) => ({
                _: _,
                type: "game",
              })),
              capsules_per_row_array: [2, 3],
              show_as_carousel: !1,
              use_random_order: !0,
              background_gradient_top: _[_],
              background_gradient_bottom: _[_],
            });
          }
        return (
          _.jsondata.sale_sections.push({
            ..._("items", "#Sale_default_label_148"),
            capsules: __webpack_require__.map((_) => ({
              _: _,
              type: _.has(_) ? "dlc" : "game",
            })),
            capsules_per_row_array: [1],
            show_as_carousel: !1,
            carousel_rows: 1,
            single_item_style: "library",
            use_random_order: !0,
            cap_section_content: !1,
            cap_section_row_count: 50,
            enable_faceted_browsing: !0,
            min_capsule_matches_for_facet_values: 5,
            max_facet_values_for_facet: 5,
            facet_sort_order: 1,
            cap_item_count: 0,
            facets: _,
          }),
          _.jsondata.sale_sections.push({
            ..._("social_share", "#EventDisplay_Share_WithFriendsHeader"),
            social_share: {
              platforms: [
                {
                  label: _._.Steam,
                  checked: !0,
                },
                {
                  label: _._.Facebook,
                  checked: !0,
                },
                {
                  label: _._.Twitter,
                  checked: !0,
                },
                {
                  label: _._.Reddit,
                  checked: !0,
                },
              ],
              doorsEnabled: !1,
              content_options: [
                {
                  unique_id: _ + Math.floor(1e6 * Math.random()),
                  door: void 0,
                  twitter_card: _._.SummaryLargeImage,
                  localized_option_fields: {
                    localized_header: [],
                    title: [],
                    description: [],
                    image: [],
                  },
                },
              ],
            },
          }),
          _
        );
      }
      const _ = (0, _._)(_._);
      function _(_) {
        const {
            rgFilteredDLCsAppIDs: _,
            rgFilteredCombinedAppsAndDLC: __webpack_require__,
            promotionName: _,
            rgFilteredAppIDByTier: _,
            facets: _,
          } = _,
          _ = (function (_, _, _, _, _) {
            const { data: _ } = (0, _._)({
              queryKey: [_],
              queryFn: () => _(_, _, _, _, _),
            });
            return _;
          })(_, _, __webpack_require__, _, _),
          [_] = (0, _.useState)(new _._(null, 0));
        return _
          ? _.createElement(
              "div",
              null,
              _.jsondata.sale_sections.map((_) =>
                _.createElement(
                  _._,
                  {
                    key: _ + "_" + _.unique_id,
                  },
                  _.createElement(_, {
                    section: _,
                    event: _,
                    language: (0, _._)(_._.LANGUAGE),
                    promotionName: _,
                    nSaleDayIndex: 0,
                    ePreviewMode: _._.EPreviewMode_Enabled,
                    activeTab: _,
                    appVisibilityTracker: null,
                  }),
                ),
              ),
            )
          : _.createElement(_._, {
              string: (0, _._)("#Loading"),
              position: "center",
            });
      }
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      const _ = new (class {
        m_rgCategoriesForTagID = null;
        m_rgTagNameForTagID = null;
        m_rgLocalizedCategoryNames = null;
        m_rgLocalizedTagNames = null;
        m_rgLanguages = null;
        constructor(_ = null) {
          _ && this.ParseResponse(_);
        }
        GetCategoriesForTagID() {
          return this.m_rgCategoriesForTagID;
        }
        GetTagNameForTagID() {
          return this.m_rgTagNameForTagID;
        }
        GetLocalizedCategoryNames() {
          return this.m_rgLocalizedCategoryNames;
        }
        GetLocalizedTagNames() {
          return this.m_rgLocalizedTagNames;
        }
        GetLanguages() {
          return this.m_rgLanguages;
        }
        AutoGenerateFacets() {
          const _ = this.ComputeLocalizedCategoryNames(),
            _ = this.ComputeLocalizedTagNames(),
            _ = this.ComputeCategoryToTagMap(),
            _ = this.ComputeFacetCategoryToTagMap(_);
          return this.ComputeFacets(_, _, _);
        }
        async AutoGenerateFacetsAsync() {
          return await this.EnsureLoaded(), this.AutoGenerateFacets();
        }
        ParseResponse(_) {
          (this.m_rgCategoriesForTagID = new Map()),
            (this.m_rgTagNameForTagID = new Map()),
            (this.m_rgLocalizedCategoryNames = new Map()),
            (this.m_rgLocalizedTagNames = new Map()),
            (this.m_rgLanguages = new Array());
          for (const _ of Object.keys(_.rgCategoriesByTag))
            this.m_rgCategoriesForTagID.set(
              Number(_),
              Array.from(_.rgCategoriesByTag[_]),
            );
          for (const _ of Object.keys(_.rgTagNames))
            this.m_rgTagNameForTagID.set(Number(_), _.rgTagNames[_]);
          for (const _ of Object.keys(_.rgLocalizedCategoryNames))
            this.m_rgLocalizedCategoryNames.set(
              _,
              Array.from(_.rgLocalizedCategoryNames[_]),
            );
          for (const _ of Object.keys(_.rgLocalizedTagNames))
            this.m_rgLocalizedTagNames.set(
              Number(_),
              Array.from(_.rgLocalizedTagNames[_]),
            );
          this.m_rgLanguages = Array.from(_.rgLanguages);
        }
        async EnsureLoaded() {
          if (this.m_rgCategoriesForTagID) return;
          const _ = await this.Load();
          this.ParseResponse(_);
        }
        async Load() {
          let _ = null;
          try {
            if (
              ((_ = (
                await _().get(
                  `${_._.COMMUNITY_BASE_URL}sale/ajaxgetcategoriesbytag`,
                )
              ).data),
              1 !== _?.success)
            )
              return (
                console.error(
                  "Unable to load tag category data: " + _?.success,
                ),
                null
              );
          } catch (_) {
            return (
              console.error(
                "Unable to load tag category data: " + (0, _._)(_).strErrorMsg,
              ),
              null
            );
          }
          return _;
        }
        ComputeCategoryToTagMap() {
          const _ = new Map();
          return (
            this.m_rgCategoriesForTagID.forEach((_, _) => {
              if (_)
                for (const _ of _)
                  _.has(_) || _.set(_, new Array()), _.get(_).push(_);
            }),
            _
          );
        }
        ComputeFacetCategoryToTagMap(_) {
          const _ = [
              "supergenre",
              "genre",
              "subgenre",
              "visuals",
              "theme_mood",
              "feature",
              "players",
            ],
            _ = new Set(),
            _ = new Map(),
            _ = (_, _) => {
              const _ = _.get(_);
              for (const _ of _)
                __webpack_require__.has(_) ||
                  (__webpack_require__.add(_), _.get(_).push(_));
            };
          for (const _ of _)
            _.set(_, new Array()),
              "theme_mood" === _ ? (_(_, "theme"), _(_, "mood")) : _(_, _);
          return _;
        }
        ComputeLocalizedCategoryNames() {
          const _ = new Map();
          _.set("supergenre", "#App_Taxonomy_Survey_QSuperGenreTitle"),
            _.set("genre", "#App_Taxonomy_Survey_QGenreTitle"),
            _.set("subgenre", "#App_Taxonomy_Survey_QSubGenreTitle"),
            _.set("visuals", "#App_Taxonomy_Survey_QVisualsTitle"),
            _.set("theme_mood", "#App_Taxonomy_Survey_QThemeMoodTitle"),
            _.set("feature", "#App_Taxonomy_Survey_QFeaturesTitle"),
            _.set("players", "#App_Taxonomy_Survey_QPlayersTitle");
          const _ = new Map();
          return (
            this.m_rgLocalizedCategoryNames.forEach((_, _) => {
              const _ = new Array(31);
              (_[0] = _.get(_)), _.set(_, _);
            }),
            _
          );
        }
        ComputeLocalizedTagNames() {
          const _ = new Map();
          return (
            this.m_rgLocalizedTagNames.forEach((_, _) => {
              const _ = _,
                _ = new Array(31);
              _.fill(""),
                this.m_rgLanguages.forEach((_, _) => {
                  const _ = (0, _._)(_, -1);
                  -1 === _
                    ? console.warn("Unrecognized language: " + _)
                    : 0 <= _ && _ < 31 && (_[_] = _[_]);
                }),
                _.set(_, _);
            }),
            _
          );
        }
        ComputeFacets(_, _, _) {
          const _ = new Array();
          return (
            _.forEach((_, _) => {
              const _ = {
                  name: _.get(_),
                  facetValues: new Array(),
                  logical_and: !0,
                },
                _ = Array();
              for (const _ of _) {
                if (!__webpack_require__.get(_)) {
                  _.push(_);
                  continue;
                }
                const _ = {
                  name: __webpack_require__.get(_),
                  subtitle: new Array(),
                  rgStoreTagFilter: {
                    type: _._.k_EStoreFilterClauseTypeAnd,
                    rgSubexpressions: [
                      {
                        type: _._.k_EStoreFilterClauseTypeOr,
                        rgSubexpressions: [
                          {
                            type: _._.k_EStoreFilterClauseTypeStoreTag,
                            value: _,
                          },
                        ],
                      },
                    ],
                  },
                  nAtomicStoreTagID: _,
                  filter: null,
                };
                _.facetValues.push(_);
              }
              _.length > 0 &&
                console.warn(
                  "No name information found for tag count " +
                    _.length +
                    ", skipping.",
                  _,
                ),
                _.push(_);
            }),
            _
          );
        }
      })();
      var _;
      function _(_, _) {
        return "[" + _ + "] " + _;
      }
      async function _(_) {
        const _ = await _.AutoGenerateFacetsAsync();
        return (
          (function (_) {
            const _ = _.GetTagNameForTagID();
            for (const _ of _)
              for (const _ of _.facetValues) {
                const _ = _.nAtomicStoreTagID;
                let _ = [_.get(_)];
                (_ = _.map((_) => _(_))),
                  (_.type = _._.k_ESaleTagFilter),
                  (_.filter = {
                    clauses: [
                      {
                        type: "Must have",
                        or_tags: _,
                      },
                    ],
                  });
              }
          })(_),
          _.bForceFeatureTagForFullController &&
            (function (_) {
              _.forEach((_) => {
                _.facetValues.forEach((_) => {
                  _.type === _._.k_ESaleTagFilter &&
                    _.filter.clauses.forEach((_) => {
                      _.or_tags.forEach((_, _) => {
                        const _ = (function (_) {
                            const _ = /^\[(.+)\]/.exec(_);
                            return _ ? _[1] : void 0;
                          })(_),
                          _ = (function (_) {
                            return _.replace(/^\[(.+)\]/, "").trim();
                          })(_).toLocaleLowerCase();
                        _ === _.Store &&
                          "controller" === _ &&
                          (_.or_tags[_] = _("Full Controller", _.Feature));
                      });
                    });
                });
              });
            })(_),
          (function (_) {
            for (const _ of _)
              if ("#App_Taxonomy_Survey_QVisualsTitle" === _.name[0]) {
                _.facetValues.push({
                  name: ["#Store_HDRSupported"],
                  type: _._.k_ESaleTagFilter,
                  filter: {
                    clauses: [
                      {
                        type: "Must have",
                        or_tags: [_("HDR", _.Feature)],
                      },
                    ],
                  },
                  rgStoreTagFilter: null,
                });
                break;
              }
          })(_),
          (function (_) {
            const _ = {
                name: ["#AppTypeLabelTitle"],
                facetValues: [],
                logical_and: !1,
              },
              _ = [
                "game",
                "software",
                "dlc",
                "demo",
                "music",
                "video",
                "hardware",
              ];
            for (const _ of _)
              _.facetValues.push({
                name: ["#AppTypeLabel_" + _],
                type: _._.k_ESaleTagFilter,
                filter: {
                  clauses: [
                    {
                      type: "Must have",
                      or_tags: [_(_, _.AppType)],
                    },
                  ],
                },
                rgStoreTagFilter: null,
              });
            _.push(_);
          })(_),
          (function (_) {
            const _ = {
                name: ["#ControllerSupportLabelTitle"],
                facetValues: [],
                logical_and: !1,
              },
              _ = [
                {
                  name: "#Store_ControllerSupport_FullController",
                  value: "Full Controller",
                },
                {
                  name: "#Store_ControllerSupport_Xbox",
                  value: "Xbox Controller",
                },
                {
                  name: "#Store_ControllerSupport_PS4",
                  value: "PS4 Controller",
                },
                {
                  name: "#Store_ControllerSupport_PS5",
                  value: "PS5 Controller",
                },
                {
                  name: "#Store_ControllerSupport_SIAPI",
                  value: "Steam Input API",
                },
                {
                  name: "#Store_ControllerSupport_GamepadRequired",
                  value: "Gamepad Preferred",
                },
              ];
            for (const _ of _)
              _.facetValues.push({
                name: [_.name],
                type: _._.k_ESaleTagFilter,
                filter: {
                  clauses: [
                    {
                      type: "Must have",
                      or_tags: [_(_.value, _.Feature)],
                    },
                  ],
                },
                rgStoreTagFilter: null,
              });
            _.push(_);
          })(_),
          (function (_) {
            const _ = {
              name: ["#Platform"],
              facetValues: [],
              logical_and: !1,
            };
            _.facetValues.push({
              name: ["#Platform_Windows"],
              type: _._.k_ESaleTagFilter,
              filter: {
                clauses: [
                  {
                    type: "Must have",
                    or_tags: ["[Feature] Windows"],
                  },
                ],
              },
              rgStoreTagFilter: null,
            }),
              _.facetValues.push({
                name: ["#Platform_Linux"],
                type: _._.k_ESaleTagFilter,
                filter: {
                  clauses: [
                    {
                      type: "Must have",
                      or_tags: ["[Feature] Linux"],
                    },
                  ],
                },
                rgStoreTagFilter: null,
              }),
              _.facetValues.push({
                name: ["#Platform_Mac"],
                type: _._.k_ESaleTagFilter,
                filter: {
                  clauses: [
                    {
                      type: "Must have",
                      or_tags: ["[Feature] Mac"],
                    },
                  ],
                },
                rgStoreTagFilter: null,
              }),
              _.push(_);
          })(_),
          (function (_) {
            const _ = {
              name: ["#LanguageTitle"],
              facetValues: [],
              logical_and: !1,
            };
            for (let _ = 0; _ < 31; ++_)
              _.facetValues.push({
                name: ["#language_selection_" + (0, _._)(_)],
                type: _._.k_ELanguage,
                language: _,
                filter: null,
                rgStoreTagFilter: null,
              });
            _.push(_);
          })(_),
          (function (_) {
            const _ = {
              name: ["#ContentDescriptor"],
              facetValues: [],
              logical_and: !1,
            };
            _.facetValues.push({
              name: ["#ContentDescriptor_GeneralMatureContent"],
              type: _._.k_EContentDescriptor,
              contentDescriptor: 5,
              filter: null,
              rgStoreTagFilter: null,
            }),
              _.facetValues.push({
                name: ["#ContentDescriptor_FrequentViolenceOrGore"],
                type: _._.k_EContentDescriptor,
                contentDescriptor: 2,
                filter: null,
                rgStoreTagFilter: null,
              }),
              _.facetValues.push({
                name: ["#ContentDescriptor_NudityOrSexualContent"],
                type: _._.k_EContentDescriptor,
                contentDescriptor: 1,
                filter: null,
                rgStoreTagFilter: null,
              }),
              _.facetValues.push({
                name: ["#ContentDescriptor_GratuitousNudityOrSexualContent"],
                type: _._.k_EContentDescriptor,
                contentDescriptor: 4,
                filter: null,
                rgStoreTagFilter: null,
              }),
              _.facetValues.push({
                name: ["#ContentDescriptor_AdultOnlySexualContent"],
                type: _._.k_EContentDescriptor,
                contentDescriptor: 3,
                filter: null,
                rgStoreTagFilter: null,
              }),
              _.push(_);
          })(_),
          _.push({
            name: ["#Sale_BrowserSortOption_Price"],
            facetValues: [
              {
                name: ["#Sale_BrowserSortOption_Price"],
                type: _._.k_EPrice,
                filter: null,
                rgStoreTagFilter: null,
              },
              {
                name: ["#Sale_BrowserSortOption_PopularPurchasedDiscounted"],
                type: _._.k_ESaleTagFilter,
                filter: {
                  clauses: [
                    {
                      type: "Must have",
                      or_tags: [_("Discounted", _.Feature)],
                    },
                  ],
                },
                rgStoreTagFilter: null,
              },
            ],
          }),
          (function (_) {
            const _ = {
              name: ["#Sale_Preferences"],
              facetValues: [],
            };
            _.facetValues.push({
              name: ["#UserPreference_HideOwnedItems"],
              type: _._.k_EUserPreference,
              userPreference: _._.k_EHideOwnedItems,
              filter: null,
              rgStoreTagFilter: null,
            }),
              _.facetValues.push({
                name: ["#UserPreference_HideWishlistedItems"],
                type: _._.k_EUserPreference,
                userPreference: _._.k_EHideWishlistedItems,
                filter: null,
                rgStoreTagFilter: null,
              }),
              _.facetValues.push({
                name: ["#UserPreference_HideIgnoredItems"],
                type: _._.k_EUserPreference,
                userPreference: _._.k_EHideIgnoredItems,
                bEnabledByDefault: !0,
                filter: null,
                rgStoreTagFilter: null,
              }),
              _.push(_);
          })(_),
          _
        );
      }
      function _(_) {
        return _(_, _.Store);
      }
      !(function (_) {
        (_.Store = "Store"),
          (_.Feature = "Feature"),
          (_.OptIn = "Opt"),
          (_.Auto = "Auto"),
          (_.Custom = "Custom"),
          (_.AppType = "AppType");
      })(_ || (_ = {}));
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_);
      function _(_) {
        const { toolTipContent: _ } = _,
          _ =
            ((_ = {
              ..._,
            }),
            (0, _.useCallback)(
              (_, _) => {
                const _ = _.createElement(_, {
                  ..._,
                });
                (0, _._)(_, _, _);
              },
              [_],
            ));
        var _;
        return _.createElement(
          _._,
          {
            toolTipContent: _,
          },
          _.createElement(
            "div",
            {
              className: _().CalendarBtn,
              onClick: (_) =>
                __webpack_require__(_, {
                  bDisableMouseOverlay: !0,
                  bAlwaysOnTop: !0,
                }),
            },
            _.createElement(_.VvS, null),
          ),
        );
      }
      function _(_) {
        const {
            value: _,
            fnOnUpdate: __webpack_require__,
            minDate: _,
            maxDate: _,
          } = _,
          _ = (0, _.useRef)(),
          _ = (0, _.useRef)(null);
        console.log(_().unix(_).format(), _);
        const _ = (0, _.useCallback)(
            (_) => {
              const _ = _().unix(_),
                _ = _().unix(_);
              return (
                _.isSameOrAfter(_, "month") && _.isSameOrBefore(_, "month")
              );
            },
            [_, _],
          ),
          _ = (0, _.useCallback)(
            (_) => {
              __webpack_require__(_.unix()), _.current.Hide();
            },
            [__webpack_require__],
          );
        return _.createElement(
          _._,
          {
            refInstance: _,
          },
          _.createElement(
            _._,
            {
              onSelected: () => {},
            },
            _.createElement(
              "div",
              {
                onClick: (_) => {
                  _.preventDefault(), _.stopPropagation();
                },
              },
              _.createElement(_(), {
                ref: _,
                value: _().unix(_),
                onChange: _,
                dateFormat: "YYYY-MM",
                timeFormat: !1,
                closeOnSelect: !0,
                isValidDate: _,
                input: !1,
              }),
            ),
          ),
        );
      }
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        const _ = new Date(_ > 1e12 ? _ : 1e3 * _),
          _ =
            (new Intl.DateTimeFormat("en-US", {
              timeZone: "America/Los_Angeles",
              year: "numeric",
              month: "numeric",
              day: "numeric",
              hour: "numeric",
              minute: "numeric",
            }).format(_),
            new Date(
              _.toLocaleString("en-US", {
                timeZone: "America/Los_Angeles",
              }),
            )),
          _ = __webpack_require__.getMonth(),
          _ = __webpack_require__.getFullYear(),
          _ = __webpack_require__.getDate(),
          _ = __webpack_require__.getHours();
        let _, _;
        for (_ = _ > 15 || (15 === _ && _ >= 10) ? _ - 1 : _ - 2; _ < 0; )
          (_ += 12), (_ = (_ ?? _) - 1);
        _ = _ ?? _;
        const _ = new Date(Date.UTC(_, _, 15, 17, 0));
        return Math.floor(_.getTime() / 1e3);
      }
      function _(_, _) {
        if (_ < 0 || _ > 11)
          throw new Error("Invalid month index. Must be between 0 and 11.");
        return `${["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"][_]}_${_}`;
      }
      function _(_) {
        const _ = _._.Get(),
          { salePagename: __webpack_require__ } = (0, _._)(),
          _ = (0, _._)(),
          { dtMidMonth: _, dtTestMonth: _ } = (function (_) {
            const [_, __webpack_require__] = _.split("_");
            let _ = parseInt(__webpack_require__, 10),
              _ = {
                january: 0,
                february: 1,
                march: 2,
                april: 3,
                may: 4,
                june: 5,
                july: 6,
                august: 7,
                september: 8,
                october: 9,
                november: 10,
                december: 11,
              }[_.toLowerCase()];
            if (void 0 === _)
              return {
                dtMidMonth: null,
                dtTestMonth: null,
              };
            let _ = _,
              _ = _;
            return (
              11 == _ ? ((_ = 0), (_ += 1)) : (_ += 1),
              {
                dtMidMonth: new Date(_, _, 15),
                dtTestMonth: new Date(_, _, 15),
              }
            );
          })(__webpack_require__);
        return !_ ||
          Math.floor(_.getTime() / 1e3) > _ ||
          _.getFullYear() < _ ||
          (_.getFullYear() == _ && _.getMonth() < _)
          ? _.createElement(
              "div",
              null,
              (0, _._)("#DateTimePicker_Fallback_Invalid_DateTime"),
            )
          : _.createElement(
              _._,
              {
                method: "topnewreleases",
              },
              _.createElement(
                _._,
                null,
                _.createElement(_, {
                  TopMonthlyReleasesStore: _,
                  nMonth: _.getMonth(),
                  nYear: _.getFullYear(),
                  promotionName: __webpack_require__,
                }),
              ),
            );
      }
      const _ = {
        ..._._,
        apply_user_filters: !0,
      };
      function _(_) {
        const {
            TopMonthlyReleasesStore: _,
            nYear: __webpack_require__,
            nMonth: _,
            promotionName: _,
          } = _,
          [_, _] = (0, _.useState)(null),
          [_, _] = (0, _.useState)(null),
          _ = (0, _._)(_, __webpack_require__, _),
          _ = (0, _.useMemo)(
            () =>
              _
                ? [
                    ...(_.top_dlc_releases?.map((_) => _.appid) || []),
                    ...(_.top_combined_app_and_dlc_releases?.map(
                      (_) => _.appid,
                    ) || []),
                  ]
                : (_(null), []),
            [_],
          ),
          _ = (0, _._)(_, _),
          _ = (0, _.useMemo)(
            () =>
              _ && 1 != _
                ? _.top_dlc_releases
                    ?.filter((_) => !_._.Get().BIsAppMissing(_.appid))
                    .map((_) => _.appid)
                : [],
            [_, _],
          ),
          { rgFilteredCombinedAppsAndDLC: _, rgFilteredAppIDByTier: _ } = (0,
          _.useMemo)(() => {
            if (!_ || 1 == _)
              return {
                rgFilteredCombinedAppsAndDLC: [],
                rgFilteredAppIDByTier: [],
              };
            const _ = [];
            return {
              rgFilteredCombinedAppsAndDLC: (
                _?.top_combined_app_and_dlc_releases || []
              )
                .filter((_) => !_._.Get().BIsAppMissing(_.appid))
                .map((_) => {
                  const _ = _.app_release_rank;
                  return _[_] || (_[_] = []), _[_].push(_.appid), _.appid;
                }),
              rgFilteredAppIDByTier: _,
            };
          }, [_, _]);
        return (
          (0, _.useEffect)(() => {
            _ ||
              _({
                bForceFeatureTagForFullController: !1,
              }).then(_);
          }, [_]),
          (0, _.useEffect)(() => {
            if (null == _ && 1 != _) {
              const _ = (function (_) {
                const _ = _._.Get(),
                  _ = _.filter((_) => {
                    if (!_.BIsGameOwned(_)) {
                      const _ = _._.Get().GetApp(_);
                      return (
                        _ &&
                        __webpack_require__.BIsVisible() &&
                        _.BIsGameOwned(__webpack_require__.GetParentAppID())
                      );
                    }
                    return !1;
                  })
                    .map((_) => _._.Get().GetApp(_).GetParentAppID())
                    .filter(Boolean);
                return Array.from(new Set(_));
              })(_);
              _?.length > 0
                ? _._.Get()
                    .HintLoadStoreApps(_, _._)
                    .then(() => _(_))
                : _([]);
            }
          }, [_, _, _, _]),
          _ && 1 != _ && _ && null != _ && _
            ? 0 == _.length
              ? _.createElement(
                  "div",
                  {
                    className: _().ChartPage,
                  },
                  _.createElement(_, {
                    nMonth: _,
                    nYear: __webpack_require__,
                  }),
                  _.createElement(
                    "div",
                    null,
                    (0, _._)(
                      _.bSQLError
                        ? "#Error_ErrorCommunicatingWithNetwork"
                        : "#SteamCharts_NewMonth_NoRelease",
                    ),
                  ),
                )
              : _.createElement(
                  "div",
                  {
                    className: _().ChartPage,
                  },
                  _.createElement(
                    _,
                    {
                      rgAppIDs: _,
                      nMonth: _,
                    },
                    _.createElement(_, {
                      nMonth: _,
                      nYear: __webpack_require__,
                    }),
                  ),
                  _.createElement(_, {
                    promotionName: _,
                    rgFilteredCombinedAppsAndDLC: _,
                    rgFilteredAppIDByTier: _,
                    rgFilteredDLCsAppIDs: _,
                    facets: _,
                  }),
                )
            : _.createElement(
                "div",
                {
                  className: _().ChartPage,
                },
                _.createElement(_, {
                  nMonth: _,
                  nYear: __webpack_require__,
                }),
                _.createElement(_._, {
                  string: (0, _._)("#Loading"),
                  position: "center",
                }),
              )
        );
      }
      function _(_, _) {
        return (
          (0, _._)(
            "#SteamCharts_Monthly_ForMonth",
            (0, _._)("#Sale_Reservation_MonthNoun_" + (_ + 1)),
          ) +
          ", " +
          _
        );
      }
      const _ = 2003,
        _ = 8,
        _ = 1063584e3;
      function _(_) {
        const { nMonth: _, nYear: __webpack_require__ } = _,
          _ = (0, _._)(),
          _ = (0, _._)() || (0, _._)(window),
          _ = (0, _._)(),
          _ = _ > 0 ? __webpack_require__ : __webpack_require__ - 1,
          _ = _ > 0 ? _ - 1 : 11,
          _ = _(_, _),
          _ = __webpack_require__ > _ || _ > _,
          _ = _ < 11 ? __webpack_require__ : __webpack_require__ + 1,
          _ = _ < 11 ? _ + 1 : 0,
          _ = _(_, _),
          _ = new Date(
            11 == _ ? __webpack_require__ + 1 : __webpack_require__,
            11 == _ ? 0 : _ + 1,
            15,
          ),
          _ = Math.floor(_.getTime() / 1e3) < _,
          _ = (0, _.useCallback)(
            (_) => {
              _.active_modal ||
                (_ && _
                  ? _.push(_.SteamChartsRoutes.TopNewReleasesNew(_))
                  : !_ &&
                    _ &&
                    _.push(_.SteamChartsRoutes.TopNewReleasesNew(_)));
            },
            [_.active_modal, _, _, _, _, _],
          );
        return (
          (0, _._)("ArrowLeft", () => _(!1), !0, !0),
          (0, _._)("Left", () => _(!1), !0, !0),
          (0, _._)("ArrowRight", () => _(!0), !0, !0),
          (0, _._)("Right", () => _(!0), !0, !0),
          _.createElement(
            _.Fragment,
            null,
            _.createElement(
              "div",
              {
                className: (0, _._)(_().HeaderCtn, _().WithSubtitle),
              },
              _.createElement(
                "h1",
                null,
                (0, _._)("#SteamCharts_Monthly_Title"),
              ),
            ),
            _.createElement(
              "div",
              {
                className: (0, _._)(_().PageSubtitle),
              },
              (0, _._)(
                "#SteamCharts_Monthly_SubTitle",
                (0, _._)(__webpack_require__),
              ),
            ),
            _.createElement(
              "div",
              {
                className: _().ChartRangeCtn,
              },
              _.createElement(
                _._,
                {
                  toolTipContent: _(_, _),
                },
                _.createElement(
                  "div",
                  {
                    className: (0, _._)({
                      [_().ChartNavCtn]: !0,
                      [_().Disabled]: !_,
                    }),
                  },
                  _.createElement(
                    _._,
                    {
                      _: _ ? _.SteamChartsRoutes.TopNewReleasesNew(_) : void 0,
                    },
                    _.createElement(
                      "div",
                      {
                        className: _().ChartNavPrev,
                      },
                      " ",
                    ),
                  ),
                ),
              ),
              _.createElement(
                _._,
                {
                  toolTipContent: _(_, _),
                },
                _.createElement(
                  "div",
                  {
                    className: (0, _._)({
                      [_().ChartNavCtn]: !0,
                      [_().Disabled]: !_,
                    }),
                  },
                  _.createElement(
                    _._,
                    {
                      _: _ ? _.SteamChartsRoutes.TopNewReleasesNew(_) : null,
                    },
                    _.createElement(
                      "div",
                      {
                        className: _().ChartNavNext,
                      },
                      " ",
                    ),
                  ),
                ),
              ),
              _.createElement(
                "div",
                {
                  className: _().ChartRangeText,
                },
                _(_, __webpack_require__),
              ),
              _.createElement(_, {
                toolTipContent: (0, _._)("#SteamCharts_Monthly_Calendar"),
                minDate: _,
                maxDate: _(_),
                value: Math.floor(
                  new Date(__webpack_require__, _, 15, 12, 0, 0).getTime() /
                    1e3,
                ),
                fnOnUpdate: (_) => {
                  const _ = new Date(1e3 * _),
                    _ = _(_.getFullYear(), _.getMonth());
                  _.push(_.SteamChartsRoutes.TopNewReleasesNew(_));
                },
              }),
            ),
          )
        );
      }
    },
  },
]);

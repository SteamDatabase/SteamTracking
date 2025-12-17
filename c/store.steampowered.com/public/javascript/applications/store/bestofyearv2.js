"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [1849],
  {
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports),
        __webpack_require__._(module_exports, {
          default: () => _,
          useFilteredYearlyTopReleases: () => _,
        });
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
        _ = __webpack_require__("chunkid");
      function _(_, _, _) {
        const { data: _ } = (0, _._)({
          queryKey: ["useYearEventModel", _],
          queryFn: () => {
            try {
              return (function (_, _, _) {
                const _ = (0, _._)(_._, `bestofyear${_}`),
                  _ = !0,
                  _ = {
                    ...(0, _._)("tabs", ""),
                    tabs: [],
                  };
                return (
                  __webpack_require__.forEach((_, _) => {
                    _.tabs.push({
                      unique_id: _ + 1,
                      default_label: _.strTabTitleToken,
                      localized_label: [],
                      capsules: [],
                    });
                  }),
                  (_.jsondata.sale_sections = [_]),
                  __webpack_require__.forEach((_, _) => {
                    const {
                        rgFilteredCombinedAppsAndDLC: _,
                        rgFilteredAppIDByTier: _,
                        rgFilteredDLCsAppIDs: _,
                      } = _,
                      _ = new Set(_),
                      _ = [..._, ..._];
                    _.jsondata.sale_sections.push({
                      ...(0, _._)("text_section", ""),
                      text_section_contents: [
                        (0, _._)(_.strTabSubTitleToken, _, _ + 1),
                      ],
                      show_on_tabs: [_ + 1],
                      show_deck_compability_details: Boolean(_.bShowDeckCompat),
                      prefer_assets_without_overrides: _,
                    });
                    for (let _ in _) {
                      const _ = _[_];
                      _.jsondata.sale_sections.push({
                        ...(0, _._)("items", "#SteamCharts_Yearly_Rank_" + _),
                        capsules: _.map((_) => ({
                          _: _,
                          type: _.has(_) ? "dlc" : "game",
                        })),
                        capsules_per_row_array:
                          "3" == _ || "0" == _ ? [4] : [3],
                        capsule_style_per_row_array:
                          "0" == _ ? ["tall"] : ["grid"],
                        show_as_carousel: !1,
                        use_random_order: !0,
                        border_width: 1,
                        default_subtitle:
                          "#SteamCharts_Yearly_Rank_" + _ + "_subtitle",
                        show_on_tabs: [_.tabs[_].unique_id],
                        sale_section_classname: (0, _._)(Number.parseInt(_)),
                        prefer_assets_without_overrides: _,
                      });
                    }
                    (0, _._)(_, _, _, _, _, _.tabs[_].unique_id),
                      (0, _._)(_, _, _, _, _, _.tabs[_].unique_id),
                      (0, _._)(_, _, _, _, _, _.tabs[_].unique_id);
                  }),
                  _.jsondata.sale_sections.push({
                    ...(0, _._)(
                      "social_share",
                      "#EventDisplay_Share_WithFriendsHeader",
                    ),
                    social_share: (0, _._)(),
                  }),
                  _
                );
              })(_, _, _);
            } catch (_) {
              return (
                console.error(`Yearly new release: ${_} failed: `, _), null
              );
            }
          },
        });
        return _;
      }
      function _(_) {
        const { rgTabsData: _, nYear: __webpack_require__, facets: _ } = _,
          _ = _(__webpack_require__, _, _),
          _ = (0, _._)(_._.LANGUAGE),
          _ = (0, _._)();
        return !_ || _
          ? null === _
            ? _.createElement(
                "div",
                {
                  className: _.ErrorStylesWithIcon,
                },
                (0, _._)("#Error_ErrorCommunicatingWithNetwork"),
              )
            : _.createElement(_._, {
                string: (0, _._)("#Loading"),
                position: "center",
              })
          : _.createElement(_._, {
              eventModel: _,
              language: _,
              bIsPreview: !1,
              bDynamicallyCreatedSale: !0,
            });
      }
      function _(_) {
        const { salePageName: _, TopYearlyReleasesStore: __webpack_require__ } =
            _,
          _ = (0, _._)(),
          _ = Number.parseInt(_);
        return (0, _._)(_, _, !0)
          ? _.createElement(_, {
              nYear: _,
              TopYearlyReleasesStore: __webpack_require__,
            })
          : _.createElement(
              "div",
              null,
              (0, _._)("#SteamCharts_Yearly_Unavailable"),
            );
      }
      const _ = {
        ..._._,
        apply_user_filters: !0,
        include_assets_without_overrides: !0,
      };
      function _(_, _, _, _) {
        const _ = _.filter((_) => _.type == _),
          _ = [],
          _ = [];
        return {
          strTabTitleToken: _,
          strTabSubTitleToken: _,
          rgFilteredCombinedAppsAndDLC: _.filter(
            (_) => !_._.Get().BIsAppMissing(_.appid),
          ).map((_) => {
            let _ = _.app_release_rank;
            return (
              4 == _ && (_ = 0),
              _[_] || (_[_] = []),
              _[_].push(_.appid),
              4 == _._.Get().GetApp(_.appid)?.GetAppType() && _.push(_.appid),
              _.appid
            );
          }),
          rgFilteredAppIDByTier: _,
          rgFilteredDLCsAppIDs: _,
        };
      }
      function _(_, _) {
        const _ = _ + 1,
          _ = new Date(Date.UTC(_, 0, 15, 1, 0, 0)),
          _ = new Intl.DateTimeFormat("en-US", {
            timeZone: "America/Los_Angeles",
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: !1,
          }).formatToParts(_),
          _ = (_) => Number(_.find((_) => _.type === _).value),
          _ = Date.UTC(
            _("year"),
            _("month") - 1,
            _("day"),
            _("hour"),
            _("minute"),
            _("second"),
          );
        return Math.floor(_ / 1e3);
      }
      function _(_, _, _) {
        const _ = (0, _._)(),
          _ = _ < _(_),
          _ = _ < _(_),
          _ = (0, _._)(_, _),
          _ = (0, _.useMemo)(
            () =>
              _
                ? Array.from(
                    new Set([
                      ...(_.top_dlc_releases?.map((_) => _.appid) || []),
                      ...(_.top_combined_app_and_dlc_releases?.map(
                        (_) => _.appid,
                      ) || []),
                      ...(_.top_app_list?.map((_) => _.appid) || []),
                    ]),
                  )
                : (_ && __webpack_require__(null), []),
            [_, _],
          ),
          _ = (0, _._)(_, _),
          _ = (0, _.useMemo)(() => {
            if (!_ || 1 == _) return [];
            const _ = [],
              _ = (_?.top_combined_app_and_dlc_releases || [])
                .filter((_) => !_._.Get().BIsAppMissing(_.appid))
                .map((_) => {
                  let _ = _.app_release_rank;
                  return (
                    4 == _ && (_ = 0),
                    _[_] || (_[_] = []),
                    _[_].push(_.appid),
                    _.appid
                  );
                });
            let _ = [
                {
                  strTabTitleToken: "#SteamCharts_Yearly_Tab_NewReleases",
                  strTabSubTitleToken: _
                    ? "#SteamCharts_Yearly_Tab_NewReleases_desc_pre"
                    : "#SteamCharts_Yearly_Tab_NewReleases_desc",
                  rgFilteredDLCsAppIDs:
                    _.top_dlc_releases
                      ?.filter((_) => !_._.Get().BIsAppMissing(_.appid))
                      .map((_) => _.appid) || [],
                  rgFilteredCombinedAppsAndDLC: _,
                  rgFilteredAppIDByTier: _,
                },
              ],
              _ = _(
                1,
                "#SteamCharts_Yearly_Tab_TopSellers",
                _
                  ? "#SteamCharts_Yearly_Tab_TopSellers_desc_pre"
                  : "#SteamCharts_Yearly_Tab_TopSellers_desc",
                _.top_app_list,
              );
            return (
              _.rgFilteredCombinedAppsAndDLC?.length > 0 &&
                __webpack_require__.push(_),
              (_ = _(
                2,
                "#SteamCharts_Yearly_Tab_MostPlayed",
                "#SteamCharts_Yearly_Tab_MostPlayed_desc",
                _.top_app_list,
              )),
              _.rgFilteredCombinedAppsAndDLC?.length > 0 &&
                __webpack_require__.push(_),
              (_ = _(
                3,
                "#SteamCharts_Yearly_Tab_SteamDeck",
                "#SteamCharts_Yearly_Tab_SteamDeck_desc",
                _.top_app_list,
              )),
              _.rgFilteredCombinedAppsAndDLC?.length > 0 &&
                ((_.bShowDeckCompat = !0), __webpack_require__.push(_)),
              (_ = _(
                4,
                "#SteamCharts_Yearly_Tab_Controller",
                "#SteamCharts_Yearly_Tab_Controller_desc",
                _.top_app_list,
              )),
              _.rgFilteredCombinedAppsAndDLC?.length > 0 &&
                __webpack_require__.push(_),
              (_ = _(
                5,
                "#SteamCharts_Yearly_Tab_VR",
                "#SteamCharts_Yearly_Tab_VR_desc",
                _.top_app_list,
              )),
              _.rgFilteredCombinedAppsAndDLC?.length > 0 &&
                __webpack_require__.push(_),
              _
            );
          }, [_, _, _, _]);
        return {
          rgAppIDs: _,
          rgYearlyReleases: _,
          rgTabsData: _,
          loadState: _,
        };
      }
      function _(_) {
        const { nYear: _, TopYearlyReleasesStore: __webpack_require__ } = _,
          [_, _] = (0, _.useState)(null),
          [_, _] = (0, _.useState)(null),
          {
            rgAppIDs: _,
            rgYearlyReleases: _,
            rgTabsData: _,
            loadState: _,
          } = _(__webpack_require__, _);
        return (
          (0, _.useEffect)(() => {
            _ ||
              (0, _._)({
                bForceFeatureTagForFullController: !1,
              }).then(_);
          }, [_]),
          (0, _._)(_, _, _?.[0]?.rgFilteredDLCsAppIDs, _),
          _ && 1 != _ && _ && null != _ && _
            ? 0 == _.length
              ? _.createElement(
                  "div",
                  {
                    className: _().ChartPage,
                  },
                  _.createElement(_, {
                    nYear: _,
                  }),
                  _.createElement(
                    "div",
                    {
                      className: _().NoticeBox,
                    },
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
                    _._,
                    {
                      rgAppIDs: _[0].rgFilteredCombinedAppsAndDLC,
                      bTallCapsule: !0,
                      bBlurCapsules: !1,
                    },
                    _.createElement(_, {
                      nYear: _,
                    }),
                  ),
                  _.createElement(_, {
                    facets: _,
                    nYear: _,
                    rgTabsData: _,
                  }),
                )
            : _.createElement(
                "div",
                {
                  className: _().ChartPage,
                },
                _.createElement(_, {
                  nYear: _,
                }),
                _.createElement(_._, {
                  string: (0, _._)("#Loading"),
                  position: "center",
                }),
              )
        );
      }
      function _(_) {
        const { nYear: _ } = _,
          _ = (0, _._)(),
          _ = (0, _._)(),
          [_] = (0, _._)("tab", 1),
          _ = _ + 1,
          _ = (0, _._)(_, _, !0),
          _ = _ - 1,
          _ = (0, _._)(_, _, !0),
          _ = (0, _._)() || (0, _._)(window),
          _ = (0, _.useCallback)(
            (_) => {
              _.active_modal ||
                (_ && _
                  ? __webpack_require__.push(
                      _.SteamChartsRoutes.BestOfYear("" + _),
                    )
                  : !_ &&
                    _ &&
                    __webpack_require__.push(
                      _.SteamChartsRoutes.BestOfYear("" + _),
                    ));
            },
            [_.active_modal, _, _, _, _, _],
          );
        (0, _._)("ArrowLeft", () => _(!1), !0, !0),
          (0, _._)("Left", () => _(!1), !0, !0),
          (0, _._)("ArrowRight", () => _(!0), !0, !0),
          (0, _._)("Right", () => _(!0), !0, !0);
        const _ = 1 != _ ? `?tab=${_}` : "";
        return _.createElement(
          _.Fragment,
          null,
          _.createElement(
            "div",
            {
              className: _().YearlyHeaderCtn,
            },
            _.createElement(
              "svg",
              {
                viewBox: "0 0 100 100",
                className: _().Triangle,
              },
              _.createElement("polygon", {
                points: "50,35 100,100 0,100",
              }),
            ),
            _.createElement(
              "div",
              {
                className: (0, _._)(_().HeaderCtn, _().WithSubtitle),
              },
              _.createElement(
                "h1",
                null,
                (0, _._)("#SteamCharts_Yearly_Title", _),
              ),
            ),
            _.createElement(
              "div",
              {
                className: (0, _._)(_().PageSubtitle),
              },
              (0, _._)("#SteamCharts_Yearly_SubTitle", 100),
              _.createElement("br", null),
            ),
          ),
          _.createElement(
            "div",
            {
              className: (0, _._)(_().ChartRangeCtn, _().AnnualChart),
            },
            _.createElement(
              _._,
              {
                toolTipContent: (0, _._)("#SteamCharts_Yearly_Title", _),
              },
              _.createElement(
                "div",
                {
                  className: (0, _._)({
                    [_().ChartNavCtn]: !0,
                    [_().Disabled]: !_,
                  }),
                },
                _
                  ? _.createElement(
                      _._,
                      {
                        _: _.SteamChartsRoutes.BestOfYear("" + _) + _,
                        className: _().ChartNavHitArea,
                      },
                      _.createElement(
                        "div",
                        {
                          className: _().ChartNavPrev,
                        },
                        " ",
                      ),
                    )
                  : _.createElement(
                      "div",
                      {
                        className: _().ChartNavHitArea,
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
                toolTipContent: (0, _._)("#SteamCharts_Yearly_Title", _),
              },
              _.createElement(
                "div",
                {
                  className: (0, _._)({
                    [_().ChartNavCtn]: !0,
                    [_().Disabled]: !_,
                  }),
                },
                _
                  ? _.createElement(
                      _._,
                      {
                        _: _.SteamChartsRoutes.BestOfYear("" + _) + _,
                        className: _().ChartNavHitArea,
                      },
                      _.createElement(
                        "div",
                        {
                          className: _().ChartNavNext,
                        },
                        " ",
                      ),
                    )
                  : _.createElement(
                      "div",
                      {
                        className: _().ChartNavHitArea,
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
          ),
        );
      }
    },
  },
]);

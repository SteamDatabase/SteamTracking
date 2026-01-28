(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [2469],
  {
    chunkid: (module) => {
      module.exports = {
        BackgroundImageCtn: "RdHTT3nwjIakv7OZTMNqN",
        BackgroundImageBlurCtn: "_3vGQugNJFaL7JS8KhZhU2H",
      };
    },
    chunkid: (module) => {
      module.exports = {
        AppHeader: "cCoovA8rihPiT1IZ33Cr_",
        TitleGroup: "_2y18Xvy_xifENXqdmY3D9y",
        SubTitle: "v_Vos0f8oAH9Im5Z1b9UU",
        Title: "_3BjnxsXuurq9OScWV1Esvf",
        SortOptions: "_2F9yRZTzjsLBM4QSoRoLsN",
      };
    },
    chunkid: (module) => {
      module.exports = {
        Ctn: "_2P-P0Ga6blE6d10oVWleHs",
        BackgroundImageCtn: "_3LnsTSsd5CMsXXdHZVeG9S",
        BackgroundImageBlurCtn: "_1j9oLZ84RZG44SAUdeGBbz",
        BundlesList: "qidGiQP0S4nK0GXkYOxbO",
        BundleRow: "_2-2kqczzmj6KtNObGLj6x3",
        BundlesInLibrary: "T_3MrEHN9bFK4I4FQqDC8",
        Title: "_3_R7HvUJcngi4n-gCRYFkN",
        Subtitle: "_3Bvm26qCLKO-h1yHVlFGsS",
      };
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_);
      function _(_) {
        const { _: _, type: __webpack_require__ } = _,
          _ = (0, _._)({
            _: _,
            type: __webpack_require__,
          }),
          { data: _ } = (0, _._)(_);
        return _.createElement(
          "div",
          {
            className: _().SaleItemBrowserRow,
          },
          _.createElement(_._, {
            ..._,
            bLoadShortDescription: !0,
            bShowReviewSummary: !0,
            bShowDemoButton: _.bShowDemoButton || 1 == _?.type,
            bPreferDemoStorePage: _.bPreferDemoStorePage,
          }),
        );
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
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        const { _: _ } = _,
          { data: __webpack_require__ } = (0, _._)(_),
          { data: _ } = (0, _._)(_);
        if (!_ || !__webpack_require__) return null;
        const _ =
          (0, _._)(_, "library_hero_2x") ??
          (0, _._)(_, "library_hero") ??
          (0, _._)(_, "raw_page_background");
        return _
          ? _.createElement(
              _.Fragment,
              null,
              _.createElement(
                "div",
                {
                  className: _().BackgroundImageCtn,
                },
                _.createElement("img", {
                  src: _,
                  alt: __webpack_require__.name,
                }),
              ),
              _.createElement(
                "div",
                {
                  className: _().BackgroundImageBlurCtn,
                },
                _.createElement("img", {
                  src: _,
                  alt: __webpack_require__.name,
                }),
              ),
            )
          : null;
      }
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_);
      function _(_) {
        const {
            appid: _,
            elPageSort: __webpack_require__,
            strPageSubTitle: _,
          } = _,
          _ = (0, _._)(_),
          { data: _ } = (0, _._)(_),
          { data: _ } = (0, _._)(_);
        return _
          ? _.createElement(
              "div",
              {
                className: _().AppHeader,
              },
              _.createElement(
                _._,
                {
                  _: _,
                  hoverClassName: _().PreviewItem,
                },
                _ &&
                  _.createElement("img", {
                    src: (0, _._)(_, "header"),
                    alt: _.name || "",
                  }),
              ),
              _.createElement(
                "div",
                {
                  className: _().TitleGroup,
                },
                _ &&
                  _.createElement(
                    "div",
                    {
                      className: _().SubTitle,
                    },
                    _,
                  ),
                _.createElement(
                  "div",
                  {
                    className: _().Title,
                  },
                  _.name || "",
                ),
                _.createElement(_._, {
                  _: _,
                }),
              ),
              Boolean(__webpack_require__) &&
                _.createElement(
                  "div",
                  {
                    className: _().SortOptions,
                  },
                  __webpack_require__,
                ),
            )
          : null;
      }
      var _,
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
        _ = __webpack_require__._(_);
      function _(_) {
        const {
            match: {
              params: { appid: _ },
            },
          } = _,
          _ = Number.parseInt(_),
          [_] = (0, _._)(_, _._);
        return (
          (0, _.useEffect)(() => {
            if (_) {
              const _ = _.GetStorePageURL().replace("/app/", "/bundlelist/");
              _ != window.location.href &&
                window.history.replaceState({}, "", _);
            }
          }, [_]),
          _.createElement(
            _._,
            {
              method: "bundlelist",
            },
            _.createElement(
              _._,
              null,
              _.createElement(_, {
                storeItem: _,
              }),
            ),
          )
        );
      }
      function _(_) {
        const { storeItem: _ } = _,
          _ = (0, _._)(_),
          [_, _] = (0, _.useState)(_.k_BundleSort_Price),
          _ = (function (_) {
            const _ = (0, _.useMemo)(
                () => (0, _._)("bundle_list", "application_config"),
                [],
              ),
              [_] = (0, _._)(),
              _ = (0, _._)(_, _._),
              _ = (0, _.useMemo)(() => {
                if (3 != _ && 2 != _) return null;
                {
                  let _ = _;
                  switch (
                    (2 == _ &&
                      (_ = _.filter((_) => {
                        const _ = _._.Get().GetBundle(_);
                        return _?.BIsVisible();
                      })),
                    _)
                  ) {
                    case _.k_BundleSort_Name:
                      return [..._].sort((_, _) => {
                        const _ = _._.Get().GetBundle(_),
                          _ = _._.Get().GetBundle(_);
                        return __webpack_require__
                          .GetName()
                          .localeCompare(_.GetName());
                      });
                    case _.k_BundleSort_Price:
                      return [..._].sort((_, _) => {
                        const _ = _._.Get().GetBundle(_),
                          _ = _._.Get().GetBundle(_);
                        return (
                          __webpack_require__.GetBestPurchasePriceInCents() -
                          _.GetBestPurchasePriceInCents()
                        );
                      });
                    default:
                      return _;
                  }
                }
              }, [_, _, _]);
            if (_ && !_) {
              const _ = new Array(),
                _ = new Array(),
                _ = new Array();
              return (
                _.forEach((_) => {
                  const _ = _._.Get().GetBundle(_);
                  _.GetIncludedAppIDs().some((_) => !_._.Get().BOwnsApp(_))
                    ? _.GetBestPurchaseOption().must_purchase_as_set
                      ? __webpack_require__.push(_)
                      : _.push(_)
                    : _.push(_);
                }),
                {
                  rgOwnedBundleIDList: _,
                  rgCompleteTheSetBundleIDList: _,
                  rgMustPurchaseTogetherBundleIDList: _,
                }
              );
            }
            return null;
          })(_);
        return _ && _
          ? _.createElement(
              "div",
              {
                className: _().Ctn,
              },
              _.createElement(_, {
                _: _,
              }),
              _.createElement(
                "div",
                {
                  className: (0, _._)("page_content"),
                },
                _.createElement(_, {
                  appid: _.GetAppID(),
                  elPageSort: _.createElement(_, {
                    eBundleSort: _,
                    fnSetSort: _,
                  }),
                  strPageSubTitle: (0, _._)("#BundleList_SubTitle"),
                }),
                _.rgCompleteTheSetBundleIDList?.length > 0 &&
                  _.createElement(
                    "div",
                    {
                      className: _().BundlesInLibrary,
                    },
                    _.createElement(
                      "div",
                      {
                        className: _().Title,
                      },
                      (0, _._)("#BundleList_CompleteTheSet"),
                    ),
                    _.createElement(
                      "div",
                      {
                        className: _().Subtitle,
                      },
                      (0, _._)("#BundleList_CompleteTheSetSubtitle"),
                    ),
                    _.createElement(_, {
                      appId: _.GetAppID(),
                      rgBundleIDs: _.rgCompleteTheSetBundleIDList,
                    }),
                  ),
                _.rgMustPurchaseTogetherBundleIDList?.length > 0 &&
                  _.createElement(
                    "div",
                    {
                      className: _().BundlesInLibrary,
                    },
                    _.createElement(
                      "div",
                      {
                        className: _().Title,
                      },
                      (0, _._)("#BundleList_MustPurchaseAsSet"),
                    ),
                    _.createElement(
                      "div",
                      {
                        className: _().Subtitle,
                      },
                      (0, _._)("#BundleList_MustPurchaseAsSetSubtitle"),
                    ),
                    _.createElement(_, {
                      appId: _.GetAppID(),
                      rgBundleIDs: _.rgMustPurchaseTogetherBundleIDList,
                    }),
                  ),
                _.rgOwnedBundleIDList?.length > 0 &&
                  _.createElement(
                    "div",
                    {
                      className: _().BundlesInLibrary,
                    },
                    _.createElement(
                      "div",
                      {
                        className: _().Title,
                      },
                      (0, _._)("#BundleList_AllInLibrary"),
                    ),
                    _.createElement(
                      "div",
                      {
                        className: _().Subtitle,
                      },
                      (0, _._)("#BundleList_AllInLibrarySubtitle"),
                    ),
                    _.createElement(_, {
                      appId: _.GetAppID(),
                      rgBundleIDs: _.rgOwnedBundleIDList,
                    }),
                  ),
              ),
            )
          : _.createElement(_._, {
              string: (0, _._)("#Loading"),
              position: "center",
            });
      }
      function _(_) {
        const { rgBundleIDs: _, appId: __webpack_require__ } = _;
        return _.createElement(
          "div",
          {
            className: _().BundlesList,
          },
          _.map((_) =>
            _.createElement(_, {
              key: "bundleDisplay_" + _,
              bundleId: _,
              appId: __webpack_require__,
            }),
          ),
        );
      }
      function _(_) {
        const { bundleId: _, appId: __webpack_require__ } = _;
        return _.createElement(
          "div",
          {
            className: _().BundleRow,
          },
          _.createElement(_._, {
            _: _,
            type: "bundle",
            bShowDeckCompatibilityDialog: !1,
            bPreferAssetWithoutOverride: !1,
          }),
        );
      }
      function _(_) {
        const { eBundleSort: _, fnSetSort: __webpack_require__ } = _,
          _ = (0, _.useMemo)(
            () => [
              {
                data: _.k_BundleSort_Name,
                label: (0, _._)("#BundleList_SortBy_Name"),
              },
              {
                data: _.k_BundleSort_Price,
                label: (0, _._)("#BundleList_SortBy_Price"),
              },
            ],
            [],
          );
        return _.createElement(_._, {
          selectedOption: _,
          renderButtonValue: (_) =>
            _.createElement(
              "div",
              null,
              (0, _._)("#BundleList_SortBy"),
              " ",
              _,
            ),
          rgOptions: _,
          strDefaultLabel: (0, _._)("#BundleList_SortBy"),
          onChange: ({ data: _ }) => __webpack_require__(_),
        });
      }
      !(function (_) {
        (_[(_.k_BundleSort_Name = 1)] = "k_BundleSort_Name"),
          (_[(_.k_BundleSort_Price = 2)] = "k_BundleSort_Price"),
          (_[(_.k_BundleSort_Popular = 3)] = "k_BundleSort_Popular");
      })(_ || (_ = {}));
    },
  },
]);

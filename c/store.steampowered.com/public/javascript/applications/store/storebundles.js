(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [2469],
  {
    chunkid: (module) => {
      module.exports = {
        Ctn: "_2P-P0Ga6blE6d10oVWleHs",
        BackgroundImageCtn: "_3LnsTSsd5CMsXXdHZVeG9S",
        BackgroundImageBlurCtn: "_1j9oLZ84RZG44SAUdeGBbz",
        AppHeader: "EBiK_PYat7W-Wk_zJcuFq",
        TitleGroup: "_39vGMX3e1UOPPRyvi30wk7",
        SubTitle: "_3o2oMRRFqgwPf42yjGG0qp",
        Title: "_3_R7HvUJcngi4n-gCRYFkN",
        SortOptions: "_1g7L59QP-3lRDGA0owdeWA",
        BundlesList: "qidGiQP0S4nK0GXkYOxbO",
        BundleRow: "_2-2kqczzmj6KtNObGLj6x3",
        BundlesInLibrary: "T_3MrEHN9bFK4I4FQqDC8",
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
          [_] = (0, _._)(_, (0, _._)(__webpack_require__), {});
        return _.createElement(
          "div",
          {
            className: _().SaleItemBrowserRow,
          },
          _.createElement(_._, {
            ..._,
            bLoadShortDescription: !0,
            bShowReviewSummary: !0,
            bShowDemoButton: _.bShowDemoButton || 1 == _?.GetAppType(),
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
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
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
          [__webpack_require__, _] = (0, _.useState)(_.k_BundleSort_Price),
          _ = (function (_) {
            const _ = (0, _.useMemo)(
                () => (0, _._)("bundle_list", "application_config"),
                [],
              ),
              [__webpack_require__] = (0, _._)(),
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
            if (_ && !__webpack_require__) {
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
          })(__webpack_require__);
        if (!_ || !_)
          return _.createElement(_._, {
            string: (0, _._)("#Loading"),
            position: "center",
          });
        const _ =
          _.GetAssets().GetLibraryHeroURL_2x() ??
          _.GetAssets().GetLibraryHeroURL() ??
          _.GetAssets().GetRawPageBackgroundURL();
        return _.createElement(
          "div",
          {
            className: _().Ctn,
          },
          _.createElement(
            "div",
            {
              className: _().BackgroundImageCtn,
            },
            _.createElement("img", {
              src: _,
            }),
          ),
          _.createElement(
            "div",
            {
              className: _().BackgroundImageBlurCtn,
            },
            _.createElement("img", {
              src: _,
            }),
          ),
          _.createElement(
            "div",
            {
              className: (0, _._)("page_content"),
            },
            _.createElement(_, {
              storeItem: _,
              eBundleSort: __webpack_require__,
              fnSetSort: _,
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
        );
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
        const {
            storeItem: _,
            eBundleSort: __webpack_require__,
            fnSetSort: _,
          } = _,
          _ = (0, _._)(_);
        return _.createElement(
          "div",
          {
            className: _().AppHeader,
          },
          _.createElement(
            _._,
            {
              type: "app",
              _: _.GetAppID(),
              hoverClassName: _().PreviewItem,
            },
            _.createElement("img", {
              src: _.GetAssets().GetHeaderURL(),
            }),
          ),
          _.createElement(
            "div",
            {
              className: _().TitleGroup,
            },
            _.createElement(
              "div",
              {
                className: _().SubTitle,
              },
              (0, _._)("#BundleList_SubTitle"),
            ),
            _.createElement(
              "div",
              {
                className: _().Title,
              },
              _.GetName(),
            ),
            _.createElement(_._, {
              _: _,
            }),
          ),
          _.createElement(
            "div",
            {
              className: _().SortOptions,
            },
            _.createElement(_._, {
              selectedOption: __webpack_require__,
              renderButtonValue: (_) =>
                _.createElement(
                  "div",
                  null,
                  (0, _._)("#BundleList_SortBy"),
                  " ",
                  _,
                ),
              rgOptions: [
                {
                  data: _.k_BundleSort_Name,
                  label: (0, _._)("#BundleList_SortBy_Name"),
                },
                {
                  data: _.k_BundleSort_Price,
                  label: (0, _._)("#BundleList_SortBy_Price"),
                },
              ],
              strDefaultLabel: (0, _._)("#BundleList_SortBy"),
              onChange: ({ data: _ }) => _(_),
            }),
          ),
        );
      }
      !(function (_) {
        (_[(_.k_BundleSort_Name = 1)] = "k_BundleSort_Name"),
          (_[(_.k_BundleSort_Price = 2)] = "k_BundleSort_Price"),
          (_[(_.k_BundleSort_Popular = 3)] = "k_BundleSort_Popular");
      })(_ || (_ = {}));
    },
  },
]);

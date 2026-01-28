"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [4922],
  {
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_, _) {
        return (0, _._)(
          _,
          (function (_) {
            if (!_) return;
            let _ = _?.jsondata?.read_more_link
              ? (0, _._)(_.jsondata.read_more_link).toLocaleLowerCase()
              : void 0;
            return _ ? [_] : void 0;
          })(_),
        );
      }
      function _(_, _) {
        return _
          ? (_ = _(_, _)
              ? (_._.IN_CLIENT ? "steam://openurl_external/" : "") + (0, _._)(_)
              : (0, _._)(_))
          : "";
      }
      function _(_, _, _) {
        let _ = _;
        return (
          _.toLowerCase().startsWith("http") || (_ = "http://" + _),
          _.createElement(
            _,
            {
              url: _,
              event: _,
            },
            _ || _,
          )
        );
      }
      const _ = (_) => {
        const {
          url: _,
          event: __webpack_require__,
          className: _,
          style: _,
        } = _;
        let _,
          _ = (0, _._)(_);
        (_ = _(_, __webpack_require__)),
          (0, _._)(_) && (_ = "noopener nofollow");
        const _ =
          "string" == typeof _.children &&
          _.children.length > 0 &&
          _ &&
          !_.startsWith("steam://")
            ? (0, _._)(_)
            : void 0;
        return _.createElement(
          _._,
          {
            toolTipContent: _,
            direction: "top",
          },
          _.createElement(
            _._,
            {
              className: _,
              href: _,
              rel: _,
              _: _._,
              style: _,
            },
            _.children,
          ),
        );
      };
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
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
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid");
      function _(_) {
        const { _: _ } = _;
        return _
          ? _.createElement(_, {
              _: _,
            })
          : null;
      }
      function _(_) {
        const { _: _ } = _,
          _ = (function (_) {
            const [_, _] = (0, _.useState)(void 0),
              { data: _ } = (0, _._)(_),
              { data: _ } = (0, _._)(_),
              _ = (0, _._)(),
              _ = (0, _._)();
            return (
              (0, _.useEffect)(() => {
                if (_)
                  if (_ && _.length > 0) __webpack_require__(_);
                  else if (_.related_items?.parent_appid) {
                    const _ = {
                      appid: _.related_items?.parent_appid,
                    };
                    (async () => {
                      const _ = await _.fetchQuery((0, _._)(_, _));
                      _ && _.length > 0 && __webpack_require__(_);
                    })();
                  }
              }, [_, _, _, _]),
              _
            );
          })(_);
        return _
          ? _.createElement(
              "div",
              {
                className: _().StoreSaleWidgetTags,
              },
              __webpack_require__.map((_) =>
                _.createElement(_._, {
                  key: "tag_" + _.tagid,
                  tagid: _.tagid,
                  className: _().AppTag,
                }),
              ),
            )
          : null;
      }
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      const _ = 6;
      function _(_) {
        const { _: _, bHideInLibraryApps: __webpack_require__ } = _,
          { data: _ } = (0, _._)(_),
          [_, _] = _.useState(null),
          _ = 2 == _?.item_type,
          { data: _ } = (0, _._)();
        if (
          (_.useEffect(() => {
            _ &&
              (1 == _.item_type || 2 == _.item_type
                ? _(
                    (_.included_appids || [])
                      .filter((_) => !_ || !__webpack_require__ || !_?.has(_))
                      .map((_) => ({
                        appid: _,
                      })),
                  )
                : console.error(
                    "ContentsPreviewList unexpected store item type: ",
                    _.item_type,
                  ));
          }, [_, __webpack_require__, _, _]),
          !_ || 0 == _.length)
        )
          return null;
        const _ = _.length;
        let _ = (0, _._)("#Sale_ContentPreview", _);
        if (_ && _) {
          const _ = _.included_appids?.length || 0;
          _ != _ && (_ = (0, _._)("#Sale_Bundle_CompletePartialSet", _ - _, _));
        }
        return _.createElement(
          "div",
          {
            className: _().BundleContentPreview,
          },
          _.createElement(
            "div",
            {
              className: _().ContentsCount,
            },
            _ &&
              _.createElement(
                "span",
                {
                  className: _().BundleTag,
                },
                (0, _._)("#AppType_bundle"),
              ),
            _,
          ),
          _.createElement(
            "div",
            {
              className: _().PreviewCtn,
            },
            _.slice(0, _).map((_) =>
              _.createElement(_, {
                key: `preview${(0, _._)(_)}`,
                _: _,
              }),
            ),
          ),
        );
      }
      function _(_) {
        const { _: _ } = _,
          { data: __webpack_require__ } = (0, _._)(_),
          { data: _ } = (0, _._)(_);
        if (!__webpack_require__ || !_) return null;
        const _ = (0, _._)(__webpack_require__, "small_capsule");
        return _.createElement(
          _._,
          {
            _: _,
            hoverClassName: _().PreviewItem,
          },
          _.createElement("img", {
            src: _,
            className: _().PreviewImg,
            loading: "lazy",
            alt: _.name || "",
          }),
        );
      }
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
        _ = __webpack_require__("chunkid");
      function _(_) {
        const {
            _: _,
            type: __webpack_require__,
            bShowDemoButton: _,
            bPreferDemoStorePage: _,
            bHidePrice: _,
            bUseSubscriptionLayout: _,
            bHidePlatforms: _,
            bHideContainedApps: _,
            bAllowTwoLinesForHeader: _,
            bShowReviewSummary: _,
            bShowDeckCompatibilityDialog: _,
            bAutoFocus: _,
            fnOnClickOverride: _,
            bIsMarketingMessage: _,
            bPreferAssetWithoutOverride: _,
          } = _,
          _ = (0, _._)(_, __webpack_require__),
          [_, _] = (0, _.useState)(!1),
          _ = (0, _._)(),
          _ = (0, _._)(),
          { data: _ } = (0, _._)(_),
          { data: _ } = (0, _._)(_),
          { data: _ } = (0, _._)(_),
          { data: _ } = (0, _._)(),
          _ = (0, _._)(_),
          _ = (0, _.useRef)(null),
          [_, _] = (0, _.useState)(!1),
          _ = (0, _._)();
        (0, _.useEffect)(() => {
          _.current && _(_.current.offsetWidth < 370);
        }, [_]);
        const _ = (0, _.useMemo)(
            () =>
              _ && _ && (0, _._)(_)
                ? {
                    appid: (0, _._)(_)[0],
                  }
                : _,
            [_, _, _],
          ),
          _ = (0, _._)((0, _._)(_, _));
        if (!_) return null;
        const _ = _.included_appids?.length || 0,
          _ = _.included_appids?.filter((_) => _?.has(_))?.length || 0,
          _ = 2 == _.item_type && Boolean(_?.must_purchase_as_set),
          _ = (0, _._)(_),
          _ = Boolean(!_ && _ > 1),
          _ = 1 == _.item_type && 1 == _,
          _ = 0 == _.item_type || _,
          _ = _ && _.appid,
          _ = (0, _._)(_, _, _),
          _ = (0, _._)(),
          _ = _.name || "",
          _ = (0, _._)(_, _),
          _ = _ || !_?.is_coming_soon || _;
        return _.createElement(
          _._,
          {
            className: (0, _._)({
              [_().StoreSaleWidgetOuterContainer]: !0,
              [_().AllowTwoLineHeader]: _,
              StoreSaleWidgetOuterContainer: !0,
            }),
            onMouseEnter: () => !_ && _(!0),
            onMouseLeave: () => !_ && _(!1),
            "flow-children": "grid",
            navEntryPreferPosition: _._.PREFERRED_CHILD,
            autoFocus: _,
            navKey: "preview_widget_" + (0, _._)(_),
          },
          _.createElement(
            _._,
            {
              appid: _ && "appid" in _ ? _.appid : void 0,
            },
            _.createElement(
              _._,
              {
                onClick: _ ? _ : void 0,
                className: (0, _._)({
                  [_().StoreSaleWidgetContainer]: !0,
                  [_().SaleItemDefaultCapsuleDisplay]: !0,
                  [_().MarketingMessage]: _,
                }),
                ...(0, _._)(_, _, _, Boolean(_), void 0, _),
                preferredFocus: _,
              },
              _.createElement(
                "div",
                {
                  className: (0, _._)(_().StoreSaleWidgetHalfLeft),
                },
                _.createElement(
                  _._,
                  {
                    _: _,
                    fnHoverState: _,
                  },
                  _.createElement(
                    "div",
                    {
                      className: _().StoreSaleWidgetImage,
                    },
                    _.createElement(_._, {
                      appids: _,
                    }),
                    _.createElement(_._, {
                      _: _,
                      imageType: "header",
                      bPreferAssetWithoutOverride: _,
                    }),
                    _.createElement(_._, {
                      _: _,
                    }),
                    Boolean(_ && _) &&
                      _.createElement(_._, {
                        _: _,
                        bIsHoverMode: !0,
                      }),
                  ),
                ),
              ),
              _.createElement(
                "div",
                {
                  className: (0, _._)(
                    _().StoreSaleWidgetRight,
                    _ ? _().Bundle : "",
                  ),
                },
                Boolean(_ && !_) &&
                  _.createElement(_._, {
                    _: _,
                    classOverride: (0, _._)(
                      _().WishlistButtonNotTop,
                      "WishlistButton",
                    ),
                    snr: _,
                  }),
                _.createElement(
                  "div",
                  {
                    className: _().TitleCtn,
                  },
                  _.createElement(
                    "a",
                    {
                      href: _ ? void 0 : _,
                      target: _._.IN_CLIENT ? void 0 : "_blank",
                      onClick: _,
                    },
                    _.createElement(
                      "div",
                      {
                        className: (0, _._)(
                          _().StoreSaleWidgetTitle,
                          "StoreSaleWidgetTitle",
                        ),
                      },
                      _,
                    ),
                  ),
                ),
                _.createElement(_, {
                  _: _,
                }),
                _.createElement(
                  "div",
                  {
                    className: _().WidgetReleaseDateAndPlatformCtn,
                    ref: _,
                  },
                  _ &&
                    _.createElement(_, {
                      _: _,
                    }),
                  !_ &&
                    _ &&
                    _.createElement(
                      _.Fragment,
                      null,
                      _.createElement(_._, {
                        _: _,
                        bMinimizePlatforms: _,
                      }),
                      Boolean(_ && 0 == _.item_type) &&
                        _.createElement(_._, {
                          className: _().DeckCompatIcon,
                          _: _,
                        }),
                    ),
                ),
                _ &&
                  _ &&
                  _.createElement(
                    "div",
                    {
                      className: _().ReviewScores,
                    },
                    _.createElement(_._, {
                      _: _,
                    }),
                  ),
                _ &&
                  _ &&
                  _.createElement(_, {
                    _: _,
                    bHideInLibraryApps: !_ && 2 == _.item_type && _ < _,
                  }),
                Boolean(_) &&
                  _.createElement(_, {
                    _: _,
                  }),
                Boolean(!_)
                  ? _.createElement(
                      _.Fragment,
                      null,
                      _ && _ && _
                        ? _.createElement(_._, {
                            appid: _,
                            bIsMuted: Boolean(_),
                          })
                        : _.createElement(_._, {
                            _: _,
                            bShowDemoButton: _,
                            bHidePrice: _,
                            bHideWishlistButton: _,
                            bShowDeckCompatibilityDialog: _,
                          }),
                    )
                  : _.createElement(
                      "div",
                      {
                        className: _().StoreActionWidgetContainer,
                      },
                      _.createElement(
                        "div",
                        {
                          className: _().StoreSalePriceActionWidgetContainer,
                        },
                        _.createElement(_._, {
                          _: _,
                        }),
                      ),
                    ),
                _.createElement(
                  "div",
                  {
                    className: _().StoreSaleWidgetBgTint,
                  },
                  _.createElement(_._, {
                    _: _,
                    bPreferAssetWithoutOverride: _,
                    imageType: "header",
                  }),
                ),
              ),
            ),
          ),
          Boolean(_.strReason && _.strReason.length > 0) &&
            _.createElement(
              "div",
              {
                className: _().RecommendationReason,
              },
              _.strReason,
            ),
        );
      }
      function _(_) {
        const { _: _ } = _,
          { data: __webpack_require__ } = (0, _._)(_);
        return __webpack_require__
          ? _.createElement(
              "div",
              {
                className: _().StoreSaleWidgetRelease,
              },
              (0, _._)(__webpack_require__),
            )
          : null;
      }
      function _(_) {
        const { _: _ } = _,
          { data: __webpack_require__ } = (0, _._)(_),
          { data: _ } = (0, _._)(_),
          { data: _ } = (0, _._)(_),
          { data: _ } = (0, _._)();
        if (!(__webpack_require__ && _ && _.short_description && _))
          return null;
        const _ = _?.discount_pct || 0,
          _ = __webpack_require__.included_appids?.length || 0,
          _ =
            __webpack_require__.included_appids?.filter((_) => _?.has(_))
              ?.length || 0;
        let _ = _.short_description;
        const _ = 1 == __webpack_require__.item_type && 1 == _,
          _ =
            2 == __webpack_require__.item_type &&
            Boolean(_?.must_purchase_as_set);
        return (
          (2 == __webpack_require__.item_type ||
            (1 == __webpack_require__.item_type && !_)) &&
            (_ =
              !_ && _ > 0 && _ < _
                ? (0, _._)("#Sale_Bundle_CompletePartialSet", _, _)
                : _ > 0
                  ? (0, _._)("#Sale_BundleSave_WithDiscount", _, _)
                  : (0, _._)("#Sale_BundleSave", _)),
          _.createElement(
            "div",
            {
              className: (0, _._)(
                _().StoreSaleWidgetShortDesc,
                "StoreSaleWidgetShortDesc",
              ),
            },
            Boolean(_.startsWith("#") && -1 == _.indexOf(" "))
              ? _.createElement(
                  "span",
                  {
                    className: _().LocalizationSpan,
                  },
                  (0, _._)(
                    _,
                    _.createElement("i", null),
                    _.createElement("i", null),
                    _.createElement("i", null),
                    _.createElement("i", null),
                  ),
                )
              : _,
          )
        );
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
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
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        const {
            _: _,
            bShowDemoButton: __webpack_require__,
            bShowPurchaseOptionsButton: _,
            fnOnPurchaseOptionsClick: _,
            bHidePrice: _,
            bShowDeckCompatibilityDialog: _,
            className: _,
            bShowCartButton: _,
          } = _,
          { data: _ } = (0, _._)(_),
          { data: _ } = (0, _._)(_),
          { data: _ } = (0, _._)(_),
          { bIsOwned: _ } = (0, _._)(_);
        if (!_) return null;
        const _ =
            (1 === _.type && !_?.is_coming_soon) ||
            (_.related_items?.demo_appid &&
              _.related_items?.demo_appid.length > 0),
          _ = (0, _._)(_.type),
          _ = __webpack_require__ && _ && _;
        let _ = null;
        if (!_ && _?.is_free_to_keep && _?.free_to_keep_ends) {
          const _ = _.free_to_keep_ends,
            _ = (0, _._)(
              "#Sale_default_label_Free_Promo_Description_Short",
              (0, _._)(_) +
                " @ " +
                (0, _._)(_, {
                  bForce24HourClock: !1,
                }),
            );
          _ = _.createElement(
            "div",
            {
              className: _().PurchaseOptionDetails,
            },
            _,
            _.createElement(_._, {
              tooltip: (0, _._)("#Sale_default_Tooltip_Free_Promo_Limitation"),
            }),
          );
        }
        return _.createElement(
          "div",
          {
            className: (0, _._)(_().StoreActionWidgetContainer, _),
          },
          _,
          _.createElement(
            "div",
            {
              className: _().StoreSalePriceActionWidgetContainer,
            },
            Boolean(_) &&
              _.createElement(_._, {
                _: _,
                className: _().Action,
              }),
            Boolean(!_) &&
              1 !== _.type &&
              _.createElement(
                _.Fragment,
                null,
                Boolean(_ && !_.is_free) &&
                  _.createElement(_, {
                    fnOnPurchaseOptionsClick: _,
                  }),
                Boolean(_ && !_.is_free) &&
                  _.createElement(_._, {
                    _: _,
                    className: "CartBtn",
                  }),
              ),
            Boolean(!_) &&
              _.createElement(_._, {
                _: _,
              }),
            Boolean(_) &&
              _.createElement(_._, {
                _: _,
              }),
          ),
        );
      }
      function _(_) {
        return _.createElement(
          "div",
          {
            className: _().Action,
            onClick: _.fnOnPurchaseOptionsClick,
          },
          _.createElement(
            "span",
            null,
            (0, _._)("#EventDisplay_CallToAction_ShowPurchaseOptions_Button"),
          ),
        );
      }
    },
  },
]);

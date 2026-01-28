(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [6416],
  {
    chunkid: (module) => {
      module.exports = {
        "duration-app-launch": "800ms",
        narrowWidth: "500px",
        OtherEventsCtn: "_9H6b5yfaxlmcnHvkqtwDK",
        OtherEvents_MainImageCtn: "_2qyLPxO8_nkczRvFiaju8N",
        OtherEvents: "_16DzRvjcqFcYr0NYcWmTrg",
        OtherEvents_EventCtn: "_1MwNf8slOG9lOvAeOshmuu",
        OtherEvents_MainImage: "_3_wKbXvT7_y5YkrtadL0I6",
        OtherEvents_BGImage: "_2pPj9UWoWM6h318uBN0-8X",
        OtherEvents_ContentCtn: "_22jEpNTfml-w_aRJV-fKDm",
        MaskImages: "_1kFdtNfhXozP4yI_qOv2H-",
        HoversEnabled: "_3o6M87A6T172WsUE6MNvdW",
        OtherEvents_TextCtn: "_3-EtNa1Nr_737K0kglkT9C",
        OtherEvents_TextTitle: "_2jc1DpJ_WzFtigRh5qDWce",
        UpcomingCtn: "_2CXrGPtlQh-j3aSa6XsQDI",
        OtherEvents_SubTitle: "_1Swox5XYdeesack-J7fNLH",
        PartnerEventRowCapsule_MainImage: "bC2Zkx7FlANno4SW8FwB-",
        EventSummaryContainer: "_2GYp44BuZLfKRQdeILTDC3",
        EventSummaryText: "ENbI1gFgvIca6HSKAbfiJ",
        EventSummaryType: "_11JXznGoylLSEmZXZbgcsq",
        HorizontalEvent: "_1ruRSreC31IK4kUGUcSRDK",
        HorizontalSummary: "_2bTWamVtbFnHovwqhlrxiV",
        HorizontalTitle: "B9-wlbaW3NhZ3FQPArnkW",
        HorizontalDescriptionCtn: "_3CQtWw7qMAWImOwd8J5xHi",
        HorizontalDescription: "_2hPZwxDYhaY3SllhjeFqb_",
        AppCapsuleImage: "_3OzV3h4jW1bkLmB6TqbYmo",
        CapsuleShadow: "_2rjkJQtvus70aLmbfGoneD",
        AppCapsuleCtn: "_16au-uWHggl6G731aw_eHt",
        AppCapsuleImageHover: "IeC3X0McKdGC79BsC3VvM",
        AppCapsulePrice: "_2-l2M5GPuxKFwV8h1tc_fH",
      };
    },
    chunkid: (module) => {
      module.exports = {
        "duration-app-launch": "800ms",
        narrowWidth: "500px",
        TwoWidthCtn: "_49thIpYeG08pUfNc1x_w9",
        TwoWidthCapsule: "_78Qv2C95AM2DNCuLD5o8U",
        TwoWidthSideInfo: "_2qz5D65VkY796Xw-al9f_a",
        Reason: "_2h0GKAYcXRP10ryZHFn79d",
        StoreSaleItemRelease: "wJ7ZiTc09km2kH4mSsZ9j",
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
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        const {
            _: _,
            bShowAsMuted: __webpack_require__,
            bHidePrice: _,
            bShowInLibraryInsteadOfPrice: _,
            bHidePlatforms: _,
            strClassName: _,
            creatorAccountID: _,
            bShowName: _,
            onlyOneDiscountPct: _,
            bShowAddToCart: _,
            bShowWishlistButton: _,
          } = _,
          _ = (0, _.useRef)(null),
          [_, _] = (0, _.useState)(!1),
          { data: _ } = (0, _._)(_);
        if (
          ((0, _.useEffect)(() => {
            _.current && _(_.current.offsetWidth < 370);
          }, [_]),
          !_ || !("appid" in _ || "bundleid" in _ || "packageid" in _))
        )
          return null;
        const _ = Boolean(_ && 0 == _?.item_type),
          _ = Boolean(!_ && !_ && !_ && _ && _);
        return _.createElement(
          _.Fragment,
          null,
          !_ &&
            _.createElement(
              "div",
              {
                ref: _,
                className: (0, _._)(
                  _().CapsuleBottomBar,
                  "CapsuleBottomBar",
                  __webpack_require__ && _().Muted,
                  _,
                ),
              },
              _ &&
                _.createElement(_, {
                  creatorAccountID: _,
                  ..._,
                }),
              _ &&
                _.createElement(_._, {
                  _: _,
                  className: (0, _._)(
                    _().MaxActionButtonWidth,
                    _().AddToCartButton,
                  ),
                }),
              _ &&
                "appid" in _ &&
                _.createElement(_._, {
                  appid: _.appid,
                  className: (0, _._)(
                    _().MaxActionButtonWidth,
                    _().AddToWishlistButton,
                  ),
                }),
              !_ &&
                _.createElement(_._, {
                  _: _,
                  bMinimizePlatforms: _,
                }),
              !_ &&
                _.createElement(
                  "span",
                  {
                    className: _().BottomBarPriceInfo,
                  },
                  _.createElement(_._, {
                    _: _,
                    bShowInLibrary: _,
                    onlyOneDiscountPct: _,
                  }),
                ),
            ),
          _ &&
            _.createElement(_, {
              _: _,
            }),
        );
      }
      function _(_) {
        const { _: _ } = _,
          { data: __webpack_require__ } = (0, _._)(_);
        return __webpack_require__?.name
          ? _.createElement(
              "div",
              {
                className: _().CapsuleName,
              },
              __webpack_require__.name,
            )
          : null;
      }
      function _(_) {
        const {
            creatorAccountID: _,
            bShowAsMuted: __webpack_require__,
            strClassName: _,
          } = _,
          _ = (0, _.useMemo)(
            () => ({
              creatorid: _,
            }),
            [_],
          ),
          { data: _ } = (0, _._)(_),
          { data: _ } = (0, _._)(_);
        if (!_) return null;
        const _ = (0, _._)(_?.clan_avatar, "Medium"),
          _ = _.name || "";
        return _.createElement(
          "div",
          {
            className: (0, _._)(
              _().BottomCreatorRow,
              __webpack_require__ && _().Muted,
              _,
            ),
          },
          _.createElement("img", {
            className: (0, _._)(_().CreatorLogo),
            src: _,
            alt: _,
          }),
          _.createElement(
            "span",
            {
              className: _().CreatorName,
            },
            _,
          ),
        );
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
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
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      const _ = "capsule_index_";
      function _(_) {
        const {
            capsule: _,
            bShowParentApp: __webpack_require__,
            elElementToAppendToHover: _,
            index: _,
            navKey: _,
            bHideStoreHover: _,
            onlyOneDiscountPct: _,
            bPreferDemoStorePage: _,
            bShowEarlyAccessBanner: _,
          } = _,
          [_, _] = _.useState(!1),
          [_] = (0, _._)(_._, (0, _._)(_.type), _._),
          [_] = (0, _._)(
            __webpack_require__ ? _?.GetParentAppID() : void 0,
            _._,
          );
        if (!_) return null;
        const _ = Boolean(_),
          _ = _.createElement(_, {
            ..._,
            strExtraParams: _.strExtraParams,
            info: _,
            bIsHovered: _,
            bHasParentAppToDisplay: _,
            onlyOneDiscountPct: _,
            bShowEarlyAccessBanner: _,
          });
        return _.createElement(
          _._,
          {
            className: (0, _._)({
              [_().OuterCapsuleContainer]: !0,
              [_ + _]: 0 == _,
            }),
            navEntryPreferPosition: _._.PREFERRED_CHILD,
            navKey: _,
          },
          _.createElement(
            _._,
            {
              appid: _.GetAppID(),
            },
            Boolean(_)
              ? _.createElement(
                  "div",
                  {
                    onMouseEnter: () => _(!0),
                    onMouseLeave: () => _(!1),
                  },
                  _,
                )
              : _.createElement(
                  _._,
                  {
                    className: _().CapsuleContainer,
                    item: _,
                    elElementToAppend: _.elElementToAppendToHover,
                    bShowDemoButton: _.bShowDemoButton,
                    bPreferDemoStorePage: _.bPreferDemoStorePage,
                    bShowDeckCompatibilityDialog:
                      _.bShowDeckCompatibilityDialog,
                    bHidePrice: _.bHidePrice,
                    bUseSubscriptionLayout: _.bUseSubscriptionLayout,
                    strExtraParams: _.strExtraParams,
                    nCreatorAccountID: _.creatorAccountID,
                    nWidthMultiplier: _.nWidthMultiplier,
                    bShowIgnoreButton: _.bShowIgnoreButton,
                    bShowDescription: _.bShowDescriptionInHover,
                  },
                  _,
                ),
            Boolean(_) && _.createElement(_.Fragment, null, _),
          ),
          _ &&
            _.createElement(_, {
              strExtraParams: _.strExtraParams,
              parentStoreItem: _,
              childAppType: _.GetAppType(),
              bPreferDemoStorePage: _,
            }),
        );
      }
      function _(_) {
        const {
            strExtraParams: _,
            parentStoreItem: __webpack_require__,
            childAppType: _,
            bPreferDemoStorePage: _,
          } = _,
          _ = (0, _._)(__webpack_require__),
          { data: _ } = (0, _._)(_),
          _ = (0, _._)(),
          _ = (0, _._)();
        return _
          ? _.createElement(
              _._,
              {
                className: _().CapsuleParentInfo,
                ...(0, _._)(_, _, _, _, _),
              },
              _.createElement(
                _._,
                {
                  appid: __webpack_require__.GetAppID(),
                },
                _.createElement(
                  "div",
                  {
                    className: _().ParentType,
                  },
                  (0, _._)(
                    11 == _
                      ? "#SalePage_ParentApp_SoundTrack"
                      : "#SalePage_ParentApp_DLC",
                  ),
                ),
                _.createElement(
                  _._,
                  {
                    _: _,
                    strExtraParams: _,
                  },
                  _.createElement("img", {
                    loading: "lazy",
                    className: _.AppCapsuleImage,
                    alt: __webpack_require__.GetName(),
                    src: __webpack_require__.GetAssets().GetSmallCapsuleURL(),
                    ...(0, _._)(),
                  }),
                ),
              ),
            )
          : null;
      }
      function _(_) {
        const {
            info: _,
            bHideStatusBanners: __webpack_require__,
            strExtraParams: _,
            index: _,
            imageType: _,
            bHasParentAppToDisplay: _,
            bIsHovered: _,
            strDoubleCapsuleMessage: _,
            bPreferDemoStorePage: _,
            bShowEarlyAccessBanner: _,
            bPreferAssetWithoutOverride: _,
          } = _,
          [_] = (0, _._)(_._, (0, _._)(_.type), _._),
          _ = (0, _._)(_),
          _ = (0, _._)(),
          _ = (0, _._)(),
          _ = (0, _._)(_);
        if (!_) return null;
        const _ = (0, _._)(
          (0, _._)(`${_.GetStorePageURL(_)}${_ ? `?${_}` : ""}`, _, _),
        );
        let _;
        "overrideNavigation" in _ &&
          (_ = (_) => (
            _.overrideNavigation(_), _.preventDefault(), _.stopPropagation(), !1
          ));
        const _ = Boolean(_);
        return _.createElement(
          _.Fragment,
          null,
          _.createElement(
            "div",
            {
              className: (0, _._)({
                [_().TwoWidthCtn]: _,
              }),
            },
            _.createElement(
              _._,
              {
                href: _ ? void 0 : _,
                style: {
                  display: "block",
                  cursor: "pointer",
                },
                className: (0, _._)({
                  [_().TwoWidthCapsule]: _,
                }),
                preferredFocus: _,
                onClick: _,
              },
              _.createElement(_._, {
                appids: _,
                hide_status_banners: __webpack_require__,
                show_early_access: _.bShowEarlyAccessBanner,
              }),
              "none" != _ &&
                _.createElement(_._, {
                  imageType: _,
                  _: _,
                  bPreferAssetWithoutOverride: _,
                }),
              _.createElement(_._, {
                _: _,
              }),
              Boolean(_) &&
                _.createElement(_._, {
                  _: _,
                  bIsHoverMode: !0,
                }),
            ),
            _ &&
              _.createElement(
                "div",
                {
                  className: (0, _._)(_().TwoWidthSideInfo, "TwoWidthSideInfo"),
                },
                _.createElement(
                  "div",
                  {
                    className: _().Reason,
                  },
                  _,
                ),
                _.createElement(
                  "div",
                  {
                    className: _().StoreSaleItemRelease,
                  },
                  _.createElement(
                    "span",
                    null,
                    _.GetFormattedSteamReleaseDate(),
                  ),
                ),
                _.createElement(_._, {
                  bHideTitle: !0,
                  rgTagIDs: _.GetTagIDs(),
                  instanceNum: _,
                }),
              ),
          ),
          _.createElement(_, {
            ..._,
          }),
        );
      }
      function _(_) {
        const {
            info: _,
            bHidePriceIfOwned: __webpack_require__,
            bHideStatusBanners: _,
            bUseSubscriptionLayout: _,
            elElementToAppendToHover: _,
            bHidePrice: _,
            bHidePlatforms: _,
            creatorAccountID: _,
            bIsHovered: _,
            onlyOneDiscountPct: _,
            strDoubleCapsuleMessage: _,
          } = _,
          _ = (0, _._)(_),
          { data: _ } = (0, _._)(_),
          { bIsOwned: _ } = (0, _._)(_),
          _ = _ && !_;
        if (_ && _ && 0 == _.item_type && _.appid)
          return _.createElement(_._, {
            appid: _.appid,
            bIsMuted: _,
          });
        if (_) return null;
        const _ = Boolean(_ && __webpack_require__),
          _ = Boolean(_);
        return _.createElement(_._, {
          _: _,
          bShowAsMuted: _,
          bHidePrice: _,
          bShowInLibraryInsteadOfPrice: _,
          bHidePlatforms: _,
          creatorAccountID: _,
          bShowName: _.bShowName,
          onlyOneDiscountPct: _,
          bShowWishlistButton: Boolean(_),
        });
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
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
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      const _ = {};
      (_.arabic = () =>
        __webpack_require__
          ._("chunkid")
          .then(__webpack_require__._.bind(__webpack_require__, 90902, 19))),
        (_.brazilian = () =>
          __webpack_require__
            ._("chunkid")
            .then(__webpack_require__._.bind(__webpack_require__, 65136, 19))),
        (_.bulgarian = () =>
          __webpack_require__
            ._("chunkid")
            .then(__webpack_require__._.bind(__webpack_require__, 13199, 19))),
        (_.czech = () =>
          __webpack_require__
            ._("chunkid")
            .then(__webpack_require__._.bind(__webpack_require__, 99925, 19))),
        (_.danish = () =>
          __webpack_require__
            ._("chunkid")
            .then(__webpack_require__._.bind(__webpack_require__, 68311, 19))),
        (_.dutch = () =>
          __webpack_require__
            ._("chunkid")
            .then(__webpack_require__._.bind(__webpack_require__, 496, 19))),
        (_.english = () =>
          __webpack_require__
            ._("chunkid")
            .then(__webpack_require__._.bind(__webpack_require__, 51990, 19))),
        (_.finnish = () =>
          __webpack_require__
            ._("chunkid")
            .then(__webpack_require__._.bind(__webpack_require__, 27637, 19))),
        (_.french = () =>
          __webpack_require__
            ._("chunkid")
            .then(__webpack_require__._.bind(__webpack_require__, 21158, 19))),
        (_.german = () =>
          __webpack_require__
            ._("chunkid")
            .then(__webpack_require__._.bind(__webpack_require__, 21144, 19))),
        (_.greek = () =>
          __webpack_require__
            ._("chunkid")
            .then(__webpack_require__._.bind(__webpack_require__, 19930, 19))),
        (_.hungarian = () =>
          __webpack_require__
            ._("chunkid")
            .then(__webpack_require__._.bind(__webpack_require__, 33307, 19))),
        (_.indonesian = () =>
          __webpack_require__
            ._("chunkid")
            .then(__webpack_require__._.bind(__webpack_require__, 92506, 19))),
        (_.italian = () =>
          __webpack_require__
            ._("chunkid")
            .then(__webpack_require__._.bind(__webpack_require__, 23382, 19))),
        (_.japanese = () =>
          __webpack_require__
            ._("chunkid")
            .then(__webpack_require__._.bind(__webpack_require__, 83577, 19))),
        (_.koreana = () =>
          __webpack_require__
            ._("chunkid")
            .then(__webpack_require__._.bind(__webpack_require__, 26305, 19))),
        (_.latam = () =>
          __webpack_require__
            ._("chunkid")
            .then(__webpack_require__._.bind(__webpack_require__, 1849, 19))),
        (_.norwegian = () =>
          __webpack_require__
            ._("chunkid")
            .then(__webpack_require__._.bind(__webpack_require__, 63202, 19))),
        (_.polish = () =>
          __webpack_require__
            ._("chunkid")
            .then(__webpack_require__._.bind(__webpack_require__, 41639, 19))),
        (_.portuguese = () =>
          __webpack_require__
            ._("chunkid")
            .then(__webpack_require__._.bind(__webpack_require__, 46059, 19))),
        (_.romanian = () =>
          __webpack_require__
            ._("chunkid")
            .then(__webpack_require__._.bind(__webpack_require__, 82177, 19))),
        (_.russian = () =>
          __webpack_require__
            ._("chunkid")
            .then(__webpack_require__._.bind(__webpack_require__, 84227, 19))),
        (_.schinese = () =>
          __webpack_require__
            ._("chunkid")
            .then(__webpack_require__._.bind(__webpack_require__, 3898, 19))),
        (_.spanish = () =>
          __webpack_require__
            ._("chunkid")
            .then(__webpack_require__._.bind(__webpack_require__, 45094, 19))),
        (_.swedish = () =>
          __webpack_require__
            ._("chunkid")
            .then(__webpack_require__._.bind(__webpack_require__, 50975, 19))),
        (_.tchinese = () =>
          __webpack_require__
            ._("chunkid")
            .then(__webpack_require__._.bind(__webpack_require__, 44777, 19))),
        (_.thai = () =>
          __webpack_require__
            ._("chunkid")
            .then(__webpack_require__._.bind(__webpack_require__, 22116, 19))),
        (_.turkish = () =>
          __webpack_require__
            ._("chunkid")
            .then(__webpack_require__._.bind(__webpack_require__, 48822, 19))),
        (_.ukrainian = () =>
          __webpack_require__
            ._("chunkid")
            .then(__webpack_require__._.bind(__webpack_require__, 38016, 19))),
        (_.vietnamese = () =>
          __webpack_require__
            ._("chunkid")
            .then(__webpack_require__._.bind(__webpack_require__, 72281, 19)));
      const _ = (0, _._)(async function (_) {
        if (_[_]) return _[_]();
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        const { closeModal: _ } = _;
        return _.createElement(_._, {
          strTitle: _.Localize("#LoginRedirect_Dialog_Title"),
          strDescription: _.Localize("#LoginRedirect_Dialog_Description"),
          closeModal: _,
          onOK: () => {
            window.location.href = `${_._.STORE_BASE_URL}login/?redir=${encodeURIComponent(window.location.href)}`;
          },
        });
      }
      function _(_) {
        const { appid: _, className: __webpack_require__, bTextMode: _ } = _,
          _ = (0, _._)(_),
          { data: _ } = (0, _._)(_),
          { data: _ } = (0, _._)(_);
        return _.createElement(_, {
          appid: _,
          bIsFree: Boolean(_?.is_free),
          bIsComingSoon: Boolean(_?.is_coming_soon),
          bTextMode: _,
          className: __webpack_require__,
        });
      }
      function _(_) {
        const [_, __webpack_require__] = _.useState(!1),
          _ = (0, _._)(),
          {
            appid: _,
            bIsFree: _,
            bIsComingSoon: _,
            className: _,
            bTextMode: _,
          } = _,
          _ = (0, _._)(_),
          { bIsOwned: _ } = (0, _._)(_),
          _ = (0, _._)(_),
          { mutateAsync: _ } = (0, _._)(_, !_, (0, _._)(_)),
          { elDialogElement: _, fnShowLogonDialog: _ } = (function () {
            const [_, _, __webpack_require__] = (0, _._)();
            return {
              elDialogElement: _.createElement(
                _._,
                {
                  active: _,
                },
                _.createElement(_, {
                  closeModal: __webpack_require__,
                }),
              ),
              fnShowLogonDialog: _,
            };
          })();
        if (_ || (!_ && _))
          return _
            ? _.createElement(_, {
                possibleDemoAppID: _,
              })
            : null;
        let _ = null;
        return (
          _ && !_
            ? (_ = _.createElement(_._, {
                size: 18,
              }))
            : _
              ? _ &&
                (_ = _ ? (0, _._)("#OnWishlist") : _.createElement(_.qnF, null))
              : (_ = _
                  ? (0, _._)("#wishlist_add_to_wishlist")
                  : _.createElement(_.T4m, null)),
          _.createElement(
            _.Fragment,
            null,
            _.createElement(
              _._,
              {
                toolTipContent: (0, _._)("#AddToWishlist_ttip"),
              },
              _.createElement(
                "div",
                {
                  className: (0, _._)(_().WishList, _),
                  onClick: async () => {
                    _._.logged_in
                      ? _ ||
                        (__webpack_require__(!0),
                        await _(),
                        __webpack_require__(!1))
                      : _();
                  },
                },
                _,
              ),
            ),
            _,
          )
        );
      }
      function _(_) {
        const { possibleDemoAppID: _, className: __webpack_require__ } = _,
          _ = (0, _._)(_),
          { data: _ } = (0, _._)(_);
        return _
          ? (1 != _.type && 12 != _.type) || !_.related_items?.parent_appid
            ? null
            : _.createElement(_, {
                parentAppID: _.related_items?.parent_appid,
                className: __webpack_require__,
              })
          : null;
      }
      function _(_) {
        const { parentAppID: _, className: __webpack_require__ } = _,
          _ = (0, _._)(_),
          { data: _ } = (0, _._)(_),
          { data: _ } = (0, _._)(_);
        return _ && _
          ? _.createElement(_, {
              appid: _,
              bIsComingSoon: Boolean(_.is_coming_soon),
              bIsFree: Boolean(_.is_free),
              className: __webpack_require__,
            })
          : null;
      }
    },
  },
]);

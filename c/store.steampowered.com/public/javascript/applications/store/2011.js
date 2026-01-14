(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [2011],
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
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_);
      function _(_, _) {
        return new (_())(
          async (_) => {
            const _ = [..._],
              _ = await _._.GetPlayerLinkDetails(_, {
                steamids: _,
              }),
              _ = new Map();
            return (
              _.Body()
                .accounts()
                .forEach((_) => {
                  const _ = _.toObject();
                  _.set(_.public_data.steamid, _);
                }),
              __webpack_require__.map((_) => _.get(_) ?? null)
            );
          },
          {
            maxBatchSize: 100,
            cache: !1,
            ..._,
          },
        );
      }
      function _(_) {
        const _ = (0, _._)(),
          _ = _.useContext(_);
        return (0, _._)(_(_, _, _));
      }
      function _(_) {
        const _ = (0, _._)(),
          _ = _.useContext(_);
        return (0, _._)({
          queries: _.map((_) => _(_, _, _)),
        });
      }
      const _ = _.createContext({
        loadPersonaState: async (_, _) => {
          if (null == _) return null;
          const _ = await (function (_) {
            return (_ ??= _(_));
          })(_).load(_._.InitFromAccountID(_).ConvertTo64BitString());
          return (function (_, _) {
            let _ = new _._(_);
            const _ = _?.public_data,
              _ = _?.private_data;
            (_.m_bInitialized = !!_),
              (_.m_ePersonaState = _?.persona_state ?? 0),
              (_.m_strAvatarHash = _?.sha_digest_avatar
                ? (0, _._)(_.sha_digest_avatar)
                : _._),
              (_.m_strPlayerName = _?.persona_name ?? _.ConvertTo64BitString()),
              (_.m_strAccountName = _?.account_name),
              _?.persona_state_flags &&
                (_.m_unPersonaStateFlags = _?.persona_state_flags);
            _?.game_id && (_.m_gameid = _?.game_id);
            _?.game_server_ip_address &&
              (_.m_unGameServerIP = _?.game_server_ip_address);
            _?.lobby_steam_id && (_.m_game_lobby_id = _?.lobby_steam_id);
            _?.game_extra_info && (_.m_strGameExtraInfo = _?.game_extra_info);
            _?.profile_url && (_.m_strProfileURL = _.profile_url);
            return _;
          })(_._.InitFromAccountID(_), _);
        },
      });
      function _() {
        return _.useContext(_);
      }
      function _(_, _, _) {
        const _ = "string" == typeof _ ? new _._(_).GetAccountID() : _;
        return {
          queryKey: ["PlayerSummary", _],
          queryFn: () => _.loadPersonaState(_, _),
          enabled: !!_,
        };
      }
      let _;
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
        _ = __webpack_require__("chunkid");
      function _(_) {
        const {
            creatorID: _,
            bShowTagline: __webpack_require__,
            bHideCreatorType: _,
            bSmallFormat: _,
            bHideFollowButton: _,
            bAddLinkToMemberList: _,
            bMinimalDisplay: _,
          } = _,
          { creatorHome: _ } = (0, _._)(_.clan_account_id),
          [_] = (0, _._)();
        if (_ || !_)
          return _.createElement(
            "div",
            {
              className: _.DevSummaryWidgetCtn,
            },
            _.createElement(_._, {
              string: (0, _._)("#Loading"),
              size: "medium",
              position: "center",
            }),
          );
        const _ = _.type,
          _ =
            "developer" == _.type
              ? (0, _._)("#CreatorHome_DevelopedBy")
              : "publisher" == _.type
                ? (0, _._)("#CreatorHome_PublishedBy")
                : (0, _._)("#CreatorHome_InFranchise"),
          _ = _.GetCreatorHomeURL(_),
          _ = _.GetNumFollowers();
        return _.createElement(
          _._,
          null,
          _.createElement(
            _._,
            {
              feature: "salecreatorhome",
            },
            _.createElement(
              _._,
              {
                className: (0, _._)(
                  _.DevSummaryCtn,
                  _ ? _.SmallFormat : _.LargeFormat,
                  _ ? _.MinimalDisplay : "",
                ),
                "flow-children": "row",
              },
              !_ &&
                _.createElement(
                  "span",
                  {
                    className: _.Title,
                  },
                  _,
                ),
              _.createElement(
                "div",
                {
                  className: _.DevSummaryWidgetCtn,
                },
                _.createElement("div", {
                  className: _.DevSummaryBackground,
                  style: {
                    backgroundImage: `url(${_.GetAvatarURLFullSize()} )`,
                  },
                }),
                _.createElement(
                  "div",
                  {
                    className: (0, _._)(_.DevSummaryContent),
                  },
                  _.createElement(
                    "div",
                    {
                      className: _.FlexRowContainer,
                    },
                    _.createElement(
                      _._,
                      {
                        href: (0, _._)(_),
                        className: _.AvatarLink,
                        bAllowFocuseableAnchor: !0,
                      },
                      _.createElement("img", {
                        className: (0, _._)(_.Avatar, "Avatar_Trgt"),
                        src: _.GetAvatarURLFullSize(),
                      }),
                    ),
                    _.createElement(
                      "div",
                      {
                        className: (0, _._)(
                          _.FlexColumnContainer,
                          _.CreatorDescCtn,
                        ),
                      },
                      _.createElement(
                        "div",
                        {
                          className: (0, _._)(
                            _.CreatorTitleCtn,
                            _.FlexColumnContainer,
                          ),
                        },
                        _.createElement(
                          _._,
                          {
                            href: (0, _._)(_),
                            className: _.CreatorNameName,
                          },
                          _.GetName(),
                        ),
                        Boolean(__webpack_require__) &&
                          _.createElement(
                            "div",
                            {
                              className: (0, _._)(
                                _.FlexColumnContainer,
                                _.CreatorTagline,
                              ),
                            },
                            _.GetTagLine(),
                          ),
                      ),
                      _.createElement(
                        "div",
                        {
                          className: (0, _._)({
                            [_.FlexColumnContainer]: _,
                            [_.FlexRowContainer]: !_,
                            [_.SocialFollowersCtn]: !0,
                          }),
                        },
                        _.createElement(
                          "div",
                          {
                            className: (0, _._)(_.FollowBtnCtn),
                          },
                          Boolean(!_) &&
                            _.createElement(_._, {
                              clanAccountID: _.clan_account_id,
                              creatorID: _,
                            }),
                          _.createElement(
                            "div",
                            {
                              className: (0, _._)({
                                [_.Followers]: !0,
                              }),
                            },
                            _.createElement(
                              "span",
                              null,
                              (0, _._)("#CreatorHome_JustFollowers"),
                            ),
                            _.createElement(
                              "span",
                              {
                                className: _.FollowerCount,
                              },
                              (0, _._)(_),
                            ),
                          ),
                        ),
                      ),
                    ),
                  ),
                  Boolean(_) &&
                    _.createElement(
                      "a",
                      {
                        href:
                          _._.COMMUNITY_BASE_URL +
                          "gid/" +
                          _.GetClanSteamID().ConvertTo64BitString() +
                          "/members/",
                        target: "_blank",
                        className: _.MembersListLink,
                      },
                      (0, _._)("#ClanMembershipList"),
                    ),
                ),
              ),
            ),
          ),
        );
      }
      function _(_) {
        const { appid: _, bSmallFormat: __webpack_require__ } = _,
          [_] = (0, _._)(_, {
            include_basic_info: !0,
          });
        if (!_) return null;
        if (!_)
          return _.createElement(
            "div",
            {
              className: _.DevSummaryWidgetCtn,
            },
            _.createElement(_._, null),
          );
        let _;
        const _ = _.GetAllDeveloperCreatorClans();
        if (_?.length > 0)
          _ = {
            appid: _,
            name: "",
            clan_account_id: _[0],
            type: "developer",
          };
        else {
          const _ = _.GetAllPublisherCreatorClans();
          if (_?.length > 0)
            _ = {
              appid: _,
              name: "",
              clan_account_id: _[0],
              type: "publisher",
            };
          else {
            const _ = _.GetAllFranchiseCreatorClans();
            _?.length > 0 &&
              (_ = {
                appid: _,
                name: "",
                clan_account_id: _[0],
                type: "franchise",
              });
          }
        }
        return _
          ? _.createElement(
              _._,
              null,
              _.createElement(_, {
                creatorID: _,
                bSmallFormat: __webpack_require__,
              }),
            )
          : null;
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
          _ = (0, _._)(),
          _ = (0, _._)();
        return _.createElement(
          _._,
          {
            className: _().CapsuleParentInfo,
            ...(0, _._)(__webpack_require__, _, _, _, _),
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
                type: "app",
                _: __webpack_require__.GetAppID(),
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
        );
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
          _ = (0, _.useMemo)(() => _?.GetIncludedAppIDsOrSelf(), [_]);
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
                  info: _,
                  bPreferAssetWithoutOverride: _,
                }),
              _.createElement(_._, {
                _: _,
              }),
              Boolean(_) &&
                _.createElement(_._, {
                  appInfo: _,
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
          [_] = (0, _._)(_._, (0, _._)(_.type), _._),
          _ =
            _ &&
            _?.GetIncludedAppIDsOrSelf().length > 0 &&
            _?.GetIncludedAppIDsOrSelf().every((_) => _._.Get().BOwnsApp(_)),
          _ = _ && !_;
        if (_ && 0 == _?.GetStoreItemType())
          return _.createElement(_._, {
            appid: _.GetAppID(),
            bIsMuted: _,
          });
        if (_) return null;
        const _ = _ && __webpack_require__,
          _ = _;
        return _.createElement(_._, {
          info: _,
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
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        const {
          href: _,
          children: __webpack_require__,
          bAllowFocuseableAnchor: _,
          ..._
        } = _;
        return (0, _._)()
          ? _.createElement(
              "div",
              {
                ..._,
              },
              __webpack_require__,
            )
          : _
            ? _.createElement(
                _._,
                {
                  href: _,
                  ..._,
                },
                __webpack_require__,
              )
            : _.createElement(
                "a",
                {
                  href: _,
                  ..._,
                },
                __webpack_require__,
              );
      }
    },
  },
]);

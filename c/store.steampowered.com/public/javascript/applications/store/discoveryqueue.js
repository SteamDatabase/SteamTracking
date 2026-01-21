(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [9672],
  {
    chunkid: (module) => {
      module.exports = {
        Link: "-HlDBB290kjpl61uUmRed",
        Banner: "_2bT8irkKNnA5sxFG3MUXzH",
        Big: "sGy-bB7uqEt4Hoe7U5iA1",
        Mobile: "mhii5hgMCQvO2tXOUdWPQ",
      };
    },
    chunkid: (module) => {
      module.exports = {
        ProgressBar: "_3szjUMH5QeRwtXAsLRcWt9",
        AnimateProgress: "_3DjdoQj5NoknowwV5t5JPN",
        loadingBarAnim: "_2SA1xV5w3BGirkDWosGYoX",
        Indeterminate: "_3G7KLhFOuTiHW-fGxtWtRs",
        Circular: "_3wMS41OoTPnZyEddTVwzy_",
        Full: "_3t_UEZDy1QxxcYfn3TTvD2",
      };
    },
    chunkid: (module) => {
      module.exports = {
        "duration-app-launch": "800ms",
        DiscoveryQueueWidgetCtn: "_1LXqxVtAL8Lmy7J7rLSVit",
        WidgetText: "co4IP1iV1813n9UgG3h5f",
        WidgetCapsule: "ZyOLslFdmnVjR1OGpRaue",
        CloseButton: "bfN8kdqVDI58Ly1qiSuT_",
        _: "_1FD7rgQVEqkzjDjzYa-1BC",
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
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      class _ {
        m_claimState = {
          bCanClaimNewItem: !1,
          bAlreadyClaimedCurrentItem: !1,
        };
        m_claimedFreeItemDef;
        m_rtNextClaimTime;
        m_claimTimer;
        m_SteamInterface = null;
        m_canClaimPromise = null;
        m_claimPromise = null;
        m_claimStateChangeCallback = new _._();
        m_testNextClaimFakeResponse = null;
        m_bInTestMode = !1;
        GetClaimItemState() {
          return this.m_claimState;
        }
        GetClaimStateChangeCallback() {
          return this.m_claimStateChangeCallback;
        }
        GetClaimedSaleRewardItemDef() {
          return this.m_claimedFreeItemDef;
        }
        GetNextClaimTime() {
          if (!this.m_rtNextClaimTime) return null;
          return new Date(1e3 * this.m_rtNextClaimTime);
        }
        TEST_OverrideClaimState(_) {
          (this.m_bInTestMode = !0),
            (this.m_canClaimPromise = null),
            (this.m_claimPromise = null),
            _.bCanClaimNewItem
              ? (this.m_testNextClaimFakeResponse = {
                  bAlreadyClaimedCurrentItem: !0,
                  bCanClaimNewItem: !1,
                  rtNextClaimTime: Math.floor(Date.now() / 1e3) + 3600,
                  appid: 2243810,
                  community_item_type: 2,
                  community_item_class: 11,
                })
              : (this.m_testNextClaimFakeResponse = null),
            (this.m_claimState = _),
            this.GetClaimStateChangeCallback().Dispatch(this.m_claimState);
        }
        async ActivateProfileModifier(_) {
          const _ = _._.Init(_._);
          _.Body().set_communityitemid(_.communityitemid),
            _.Body().set_appid(_.appid),
            _.Body().set_activate(!0);
          const _ = await _._.ActivateProfileModifierItem(
            this.m_SteamInterface.GetServiceTransport(),
            _,
          );
          return (
            1 != __webpack_require__.GetEResult() &&
              console.error(
                `Error when calling QuestService.ActivateProfileModifierItem: EResult=${__webpack_require__.GetEResult()}`,
              ),
            __webpack_require__.GetEResult()
          );
        }
        async LoadCanUserClaimItem() {
          return this.m_bInTestMode
            ? this.m_claimState
            : (this.m_canClaimPromise ||
                (this.m_canClaimPromise = this.InternalLoadCanUserClaimItem()),
              this.m_canClaimPromise);
        }
        async InternalLoadCanUserClaimItem() {
          (0, _._)(
            _._.logged_in,
            "User must be logged to use CSaleItemClaimableRewardsStore",
          );
          const _ = _._.Init(_._);
          _.Body().set_language(_._.LANGUAGE);
          let _ = null;
          try {
            const _ = await _._.CanClaimItem(
              this.m_SteamInterface.GetServiceTransport(),
              _,
            );
            if (1 == __webpack_require__.GetEResult())
              return (
                (this.m_claimedFreeItemDef = Boolean(
                  __webpack_require__.Body().reward_item()?.defid(),
                )
                  ? __webpack_require__.Body().reward_item()?.toObject()
                  : null),
                (this.m_claimState = {
                  bCanClaimNewItem: !!__webpack_require__.Body().can_claim(),
                  bAlreadyClaimedCurrentItem: Boolean(
                    this.m_claimedFreeItemDef,
                  ),
                  appid: this.m_claimedFreeItemDef?.appid,
                  community_item_type:
                    this.m_claimedFreeItemDef?.community_item_type,
                  community_item_class:
                    this.m_claimedFreeItemDef?.community_item_class,
                  rtNextClaimTime:
                    (__webpack_require__.Body().next_claim_time() ?? 0) > 0
                      ? __webpack_require__.Body().next_claim_time()
                      : void 0,
                }),
                (this.m_rtNextClaimTime = __webpack_require__
                  .Body()
                  .next_claim_time()),
                this.SetClaimTimer(),
                this.GetClaimStateChangeCallback().Dispatch(this.m_claimState),
                this.m_claimState
              );
            _ = (0, _._)(_);
          } catch (_) {
            _ = (0, _._)(_);
          }
          return (
            console.error(
              "CSaleItemClaimableRewardsStore.InternalLoadCanUserClaimItem failed: error: " +
                _?.strErrorMsg,
              _,
            ),
            {
              bCanClaimNewItem: !1,
              bAlreadyClaimedCurrentItem: !1,
            }
          );
        }
        async UserClaimItem() {
          return (
            this.m_testNextClaimFakeResponse &&
              (console.log(
                "CSaleItemClaimableRewardsStore - testing, pretending claim action succeeded",
                (0, _._)(this.m_testNextClaimFakeResponse),
              ),
              (this.m_claimState = this.m_testNextClaimFakeResponse),
              this.GetClaimStateChangeCallback().Dispatch(this.m_claimState),
              (this.m_rtNextClaimTime = this.m_claimState.rtNextClaimTime),
              this.SetClaimTimer(),
              (this.m_testNextClaimFakeResponse = null)),
            this.m_bInTestMode
              ? this.m_claimState
              : (this.m_claimPromise ||
                  (this.m_claimPromise = this.InternalUserClaimItem()),
                this.m_claimPromise)
          );
        }
        async InternalUserClaimItem() {
          (0, _._)(
            _._.logged_in,
            "User must be logged to use CSaleItemClaimableRewardsStore",
          ),
            (0, _._)(
              this.m_claimState.bCanClaimNewItem,
              "Only should be called when we previously verified you can claim something. ",
            );
          const _ = _._.Init(_._);
          _.Body().set_language(_._.LANGUAGE);
          let _ = null;
          try {
            const _ = await _._.ClaimItem(
              this.m_SteamInterface.GetServiceTransport(),
              _,
            );
            if (1 == __webpack_require__.GetEResult())
              return (
                (this.m_claimedFreeItemDef =
                  __webpack_require__.Body().reward_item()?.toObject() ?? {}),
                (this.m_claimState = {
                  bCanClaimNewItem: !1,
                  bAlreadyClaimedCurrentItem: Boolean(
                    this.m_claimedFreeItemDef,
                  ),
                  appid: this.m_claimedFreeItemDef.appid,
                  community_item_type:
                    this.m_claimedFreeItemDef.community_item_type,
                  community_item_class:
                    this.m_claimedFreeItemDef.community_item_class,
                  rtNextClaimTime:
                    (__webpack_require__.Body().next_claim_time() ?? 0) > 0
                      ? __webpack_require__.Body().next_claim_time()
                      : void 0,
                }),
                this.GetClaimStateChangeCallback().Dispatch(this.m_claimState),
                (this.m_rtNextClaimTime = __webpack_require__
                  .Body()
                  .next_claim_time()),
                this.SetClaimTimer(),
                this.m_claimState
              );
            if (29 == __webpack_require__.GetEResult())
              return (
                (this.m_canClaimPromise = this.InternalLoadCanUserClaimItem()),
                this.m_canClaimPromise
              );
            _ = (0, _._)(_);
          } catch (_) {
            _ = (0, _._)(_);
          }
          return (
            console.error(
              "CSaleItemClaimableRewardsStore.InternalUserClaimItem failed: error: " +
                _?.strErrorMsg,
              _,
            ),
            {
              bCanClaimNewItem: !1,
              bAlreadyClaimedCurrentItem: !1,
            }
          );
        }
        SetClaimTimer() {
          if (this.m_claimTimer) return;
          if (!this.m_rtNextClaimTime) return;
          const _ = Date.now();
          let _ = new Date(1e3 * this.m_rtNextClaimTime);
          const _ = Math.max(0, Math.min(1, _.getTime() - _));
          this.m_claimTimer = window.setTimeout(
            () => {
              (this.m_claimTimer = void 0),
                Date.now() > _.getTime()
                  ? ((this.m_canClaimPromise = null),
                    (this.m_claimPromise = null),
                    (this.m_claimedFreeItemDef = null),
                    (this.m_claimState = {
                      bCanClaimNewItem: !0,
                      bAlreadyClaimedCurrentItem: !1,
                      rtNextClaimTime: void 0,
                    }),
                    this.GetClaimStateChangeCallback().Dispatch(
                      this.m_claimState,
                    ))
                  : this.SetClaimTimer();
            },
            _ > 3e5 ? _ / 2 : _,
          );
        }
        static s_Singleton;
        static Get() {
          return (
            _.s_Singleton ||
              ((_.s_Singleton = new _()),
              _.s_Singleton.Init(),
              "dev" == _._.WEB_UNIVERSE &&
                (window.g_SaleItemClaimableRewardsStore = _.s_Singleton)),
            _.s_Singleton
          );
        }
        constructor() {}
        Init() {
          const _ = (0, _._)("loyalty_webapi_token", "application_config");
          (0, _._)(
            _,
            "CQuestCommunityInventoryStore: missing loyalty_webapi_token oauth permission",
          ),
            (this.m_SteamInterface = new _._(_._.WEBAPI_BASE_URL, _));
        }
      }
      function _() {
        const [_, _] = (0, _.useState)(_.Get().GetClaimItemState()),
          [__webpack_require__, _] = (0, _.useState)(!0);
        return (
          (0, _.useEffect)(() => {
            _.Get()
              .LoadCanUserClaimItem()
              .then(_)
              .finally(() => _(!1));
          }, []),
          (0, _._)(_.Get().GetClaimStateChangeCallback(), _),
          {
            ..._,
            bLoading: __webpack_require__,
          }
        );
      }
      function _() {
        return {
          fnClaimItem: _.Get().UserClaimItem,
        };
      }
      function _() {
        return {
          fnSetClaimState: _.Get().TEST_OverrideClaimState,
        };
      }
      async function _(_) {
        return _.Get().ActivateProfileModifier(_);
      }
      function _(_, _, _) {
        const _ = (0, _._)();
        return (0, _._)({
          queryKey: [`SaleRewardsGetDefinition_${_}_${_}_${_}`],
          queryFn: async () =>
            (async function (_, _, _, _) {
              const _ = _._.Init(_._);
              return (
                _.Body().set_sale_def_type(_),
                _.Body().set_language(_),
                _.Body().set_include_community_item_def(_),
                (await _._.GetCurrentDefinition(_, _)).Body().toObject()
              );
            })(_, _, _, _),
          staleTime: 1 / 0,
        });
      }
      function _(_, _, _, _) {
        const _ = (0, _._)();
        return (0, _._)({
          queryKey: [`GetClaimedSaleRewards_${_}_${_}_${_}_${_}`],
          queryFn: async () =>
            (async function (_, _, _, _) {
              const _ = _._.Init(_._);
              return (
                _.Body().set_sale_def_type(_),
                _.Body().set_language(_),
                _.Body().set_include_community_item_def(_),
                (await _._.GetClaimedSaleRewards(_, _)).Body().toObject()
              );
            })(_, _, _, _),
          staleTime: 1 / 0,
        });
      }
      (0, _._)([_._], _.prototype, "TEST_OverrideClaimState", null),
        (0, _._)([_._], _.prototype, "UserClaimItem", null);
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
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        const { gidEvent: _ } = _,
          _ = (0, _._)(_),
          [_, _] = (0, _.useMemo)(() => {
            if (
              _?.jsondata?.localized_sale_product_banner?.length > 0 &&
              _?.jsondata?.localized_sale_product_mobile_banner?.length > 0
            ) {
              const _ = (0, _._)(_._.LANGUAGE),
                _ = _._.GetWithFallback(
                  _.jsondata.localized_sale_product_banner,
                  _,
                ),
                _ = _._.GetWithFallback(
                  _.jsondata.localized_sale_product_mobile_banner,
                  _,
                );
              if (_?.length > 0 && _?.length > 0)
                return [
                  _._.GenerateURLFromHashAndExt(_.clanSteamID, _),
                  _._.GenerateURLFromHashAndExt(_.clanSteamID, _),
                ];
            }
            return [null, null];
          }, [_]);
        return _?.length > 0 && _?.length > 0
          ? _.createElement(
              "a",
              {
                href: (0, _._)(__webpack_require__.GetSaleURL()),
                className: _.Link,
              },
              _.createElement("img", {
                src: _,
                className: (0, _._)(_.Banner, _.Big),
              }),
              _.createElement("img", {
                src: _,
                className: (0, _._)(_.Banner, _.Mobile),
              }),
            )
          : null;
      }
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
        _ = __webpack_require__("chunkid");
      class _ extends _.Component {
        state = {
          bRenderChildren: !1,
          nPrevRenderWidth: 0,
          nPrevRenderHeight: 0,
        };
        m_refContainer = _.createRef();
        BLoadAndUnload() {
          return "LoadAndUnload" == (this.props.mode || "JustLoad");
        }
        OnVisibilityChange(_) {
          let _ = this.state.bRenderChildren;
          if (_ == _) return;
          if (_ && !this.BLoadAndUnload()) return;
          let _ = 0,
            _ = 0;
          if (this.m_refContainer.current) {
            const _ = this.m_refContainer.current.GetBoundingClientRect();
            _ && ((_ = _.width), (_ = _.height));
          }
          this.setState({
            bRenderChildren: _,
            nPrevRenderWidth: _,
            nPrevRenderHeight: _,
          }),
            _ && this.props.onRender && this.props.onRender();
        }
        render() {
          const {
              placeholderWidth: _,
              placeholderHeight: _,
              holdGampadFocus: __webpack_require__,
              onRender: _,
              style: _,
              mode: _,
              ..._
            } = this.props,
            _ = this.state.bRenderChildren;
          let _ = _;
          if (!_) {
            const _ = this.state.nPrevRenderWidth || _,
              _ = this.state.nPrevRenderHeight || _;
            (void 0 === _ && void 0 === _) ||
              (_ = {
                ..._,
                minHeight: _,
                minWidth: _,
              });
          }
          const _ = this.BLoadAndUnload() ? "repeated" : "once";
          let _ = _.createElement(
            _._,
            {
              ref: this.m_refContainer,
              style: _,
              ..._,
              onVisibilityChange: this.OnVisibilityChange,
              trigger: _,
            },
            _ && this.props.children,
          );
          return (
            _ &&
              (_ = _.createElement(
                _._,
                {
                  focusableIfEmpty: !0,
                },
                _,
              )),
            _
          );
        }
      }
      (0, _._)([_._], _.prototype, "OnVisibilityChange", null);
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
      const _ = ({
        nPercent: _,
        size: _ = 120,
        strokeWidth: __webpack_require__ = 20,
      }) => {
        const _ = (_ - __webpack_require__) / 2,
          _ = 2 * Math._ * _,
          _ = _ - (_ / 100) * _,
          _ = 100 == _;
        return _.createElement(
          "div",
          {
            className: (0, _._)({
              [_.Circular]: !0,
              [_.Full]: _,
            }),
          },
          _.createElement(
            "svg",
            {
              width: _,
              height: _,
              style: {
                transform: "rotate(-90deg)",
              },
            },
            _.createElement("circle", {
              _: _ / 2,
              _: _ / 2,
              _: _,
              stroke: "#0c131d",
              strokeWidth: __webpack_require__,
              fill: "none",
            }),
            _.createElement("circle", {
              _: _ / 2,
              _: _ / 2,
              _: _,
              stroke: "#1a9fff",
              strokeWidth: __webpack_require__,
              fill: "none",
              strokeDasharray: _,
              strokeDashoffset: _,
              style: {
                transition: "stroke-dashoffset 0.3s ease-in-out",
              },
            }),
          ),
        );
      };
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
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid");
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.recommendationid || _._(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  recommendationid: {
                    _: 1,
                    _: _._.readUint64String,
                    _: _._.writeUint64String,
                  },
                  review_text: {
                    _: 2,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  voted_up: {
                    _: 3,
                    _: _._.readBool,
                    _: _._.writeBool,
                  },
                  is_public: {
                    _: 4,
                    _: _._.readBool,
                    _: _._.writeBool,
                  },
                  language: {
                    _: 5,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  is_in_early_access: {
                    _: 6,
                    _: _._.readBool,
                    _: _._.writeBool,
                  },
                  received_compensation: {
                    _: 7,
                    _: _._.readBool,
                    _: _._.writeBool,
                  },
                  comments_disabled: {
                    _: 8,
                    _: _._.readBool,
                    _: _._.writeBool,
                  },
                  hide_in_steam_china: {
                    _: 9,
                    _: _._.readBool,
                    _: _._.writeBool,
                  },
                  saved_hardware_id: {
                    _: 10,
                    _: _._.readUint64String,
                    _: _._.writeUint64String,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
        }
        toObject(_ = !1) {
          return _.toObject(_, this);
        }
        static toObject(_, _) {
          return _._(_._(), _, _);
        }
        static fromObject(_) {
          return _._(_._(), _);
        }
        static deserializeBinary(_) {
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _._(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _._(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_Update_Request";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(), _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        toObject(_ = !1) {
          return _.toObject(_, this);
        }
        static toObject(_, _) {
          return _
            ? {
                $jspbMessageInstance: _,
              }
            : {};
        }
        static fromObject(_) {
          return new _();
        }
        static deserializeBinary(_) {
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _;
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {}
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_Update_Response";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.reaction_type || _._(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  reaction_type: {
                    _: 1,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  count: {
                    _: 2,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
        }
        toObject(_ = !1) {
          return _.toObject(_, this);
        }
        static toObject(_, _) {
          return _._(_._(), _, _);
        }
        static fromObject(_) {
          return _._(_._(), _);
        }
        static deserializeBinary(_) {
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _._(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _._(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_Recommendation_LoyaltyReaction";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype._ || _._(_._()),
            _.Message.initialize(this, _, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  _: {
                    _: 1,
                    _: _._.readEnum,
                    _: _._.writeEnum,
                  },
                  ranges: {
                    _: 2,
                    _: _,
                    _: !0,
                    _: !0,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
        }
        toObject(_ = !1) {
          return _.toObject(_, this);
        }
        static toObject(_, _) {
          return _._(_._(), _, _);
        }
        static fromObject(_) {
          return _._(_._(), _);
        }
        static deserializeBinary(_) {
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _._(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _._(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_Recommendation_Tag";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.start || _._(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  start: {
                    _: 1,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  end: {
                    _: 2,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
        }
        toObject(_ = !1) {
          return _.toObject(_, this);
        }
        static toObject(_, _) {
          return _._(_._(), _, _);
        }
        static fromObject(_) {
          return _._(_._(), _);
        }
        static deserializeBinary(_) {
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _._(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _._(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_Recommendation_Tag_Range";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.recommendationid || _._(_._()),
            _.Message.initialize(this, _, 0, -1, [27, 40, 54], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  recommendationid: {
                    _: 1,
                    _: _._.readUint64String,
                    _: _._.writeUint64String,
                  },
                  steamid: {
                    _: 2,
                    _: _._.readUint64String,
                    _: _._.writeUint64String,
                  },
                  appid: {
                    _: 3,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  review: {
                    _: 4,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  time_created: {
                    _: 5,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  time_updated: {
                    _: 6,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  votes_up: {
                    _: 7,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  votes_down: {
                    _: 8,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  vote_score: {
                    _: 9,
                    _: _._.readFloat,
                    _: _._.writeFloat,
                  },
                  language: {
                    _: 10,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  comment_count: {
                    _: 11,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  voted_up: {
                    _: 12,
                    _: _._.readBool,
                    _: _._.writeBool,
                  },
                  is_public: {
                    _: 13,
                    _: _._.readBool,
                    _: _._.writeBool,
                  },
                  moderator_hidden: {
                    _: 14,
                    _: _._.readBool,
                    _: _._.writeBool,
                  },
                  flagged_by_developer: {
                    _: 15,
                    _: _._.readEnum,
                    _: _._.writeEnum,
                  },
                  report_score: {
                    _: 16,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  steamid_moderator: {
                    _: 17,
                    _: _._.readUint64String,
                    _: _._.writeUint64String,
                  },
                  steamid_developer: {
                    _: 18,
                    _: _._.readUint64String,
                    _: _._.writeUint64String,
                  },
                  steamid_dev_responder: {
                    _: 19,
                    _: _._.readUint64String,
                    _: _._.writeUint64String,
                  },
                  developer_response: {
                    _: 20,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  time_developer_responded: {
                    _: 21,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  developer_flag_cleared: {
                    _: 22,
                    _: _._.readBool,
                    _: _._.writeBool,
                  },
                  written_during_early_access: {
                    _: 23,
                    _: _._.readBool,
                    _: _._.writeBool,
                  },
                  votes_funny: {
                    _: 24,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  received_compensation: {
                    _: 25,
                    _: _._.readBool,
                    _: _._.writeBool,
                  },
                  unverified_purchase: {
                    _: 26,
                    _: _._.readBool,
                    _: _._.writeBool,
                  },
                  review_qualities: {
                    _: 27,
                    _: !0,
                    _: !0,
                    _: _._.readEnum,
                    pbr: _._.readPackedEnum,
                    _: _._.writeRepeatedEnum,
                  },
                  weighted_vote_score: {
                    _: 28,
                    _: _._.readFloat,
                    _: _._.writeFloat,
                  },
                  moderation_note: {
                    _: 29,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  payment_method: {
                    _: 30,
                    _: _._.readInt32,
                    _: _._.writeInt32,
                  },
                  playtime_2weeks: {
                    _: 31,
                    _: _._.readInt32,
                    _: _._.writeInt32,
                  },
                  playtime_forever: {
                    _: 32,
                    _: _._.readInt32,
                    _: _._.writeInt32,
                  },
                  last_playtime: {
                    _: 33,
                    _: _._.readInt32,
                    _: _._.writeInt32,
                  },
                  comments_disabled: {
                    _: 34,
                    _: _._.readBool,
                    _: _._.writeBool,
                  },
                  playtime_at_review: {
                    _: 35,
                    _: _._.readInt32,
                    _: _._.writeInt32,
                  },
                  approved_for_china: {
                    _: 36,
                    _: _._.readBool,
                    _: _._.writeBool,
                  },
                  ban_check_result: {
                    _: 37,
                    _: _._.readEnum,
                    _: _._.writeEnum,
                  },
                  refunded: {
                    _: 38,
                    _: _._.readBool,
                    _: _._.writeBool,
                  },
                  account_score_spend: {
                    _: 39,
                    _: _._.readInt32,
                    _: _._.writeInt32,
                  },
                  reactions: {
                    _: 40,
                    _: _,
                    _: !0,
                    _: !0,
                  },
                  ipaddress: {
                    _: 41,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  hidden_in_steam_china: {
                    _: 42,
                    _: _._.readBool,
                    _: _._.writeBool,
                  },
                  steam_china_location: {
                    _: 43,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  category_ascii_pct: {
                    _: 44,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  category_meme_pct: {
                    _: 45,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  category_offtopic_pct: {
                    _: 46,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  category_uninformative_pct: {
                    _: 47,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  category_votefarming_pct: {
                    _: 48,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  deck_playtime_at_review: {
                    _: 49,
                    _: _._.readInt32,
                    _: _._.writeInt32,
                  },
                  is_bot_review_pct: {
                    _: 50,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  positivity_pct: {
                    _: 51,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  tags_with_ranges: {
                    _: 54,
                    _: _,
                    _: !0,
                    _: !0,
                  },
                  saved_hardware_id: {
                    _: 56,
                    _: _._.readUint64String,
                    _: _._.writeUint64String,
                  },
                  hardware_cluster_id: {
                    _: 57,
                    _: _._.readUint64String,
                    _: _._.writeUint64String,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
        }
        toObject(_ = !1) {
          return _.toObject(_, this);
        }
        static toObject(_, _) {
          return _._(_._(), _, _);
        }
        static fromObject(_) {
          return _._(_._(), _);
        }
        static deserializeBinary(_) {
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _._(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _._(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "RecommendationDetails";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.appid || _._(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  appid: {
                    _: 1,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
        }
        toObject(_ = !1) {
          return _.toObject(_, this);
        }
        static toObject(_, _) {
          return _._(_._(), _, _);
        }
        static fromObject(_) {
          return _._(_._(), _);
        }
        static deserializeBinary(_) {
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _._(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _._(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_GetFriendsRecommendedApp_Request";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.accountids_recommended || _._(_._()),
            _.Message.initialize(this, _, 0, -1, [1, 3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  accountids_recommended: {
                    _: 1,
                    _: !0,
                    _: !0,
                    _: _._.readUint32,
                    pbr: _._.readPackedUint32,
                    _: _._.writeRepeatedUint32,
                  },
                  accountids_not_recommended: {
                    _: 3,
                    _: !0,
                    _: !0,
                    _: _._.readUint32,
                    pbr: _._.readPackedUint32,
                    _: _._.writeRepeatedUint32,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
        }
        toObject(_ = !1) {
          return _.toObject(_, this);
        }
        static toObject(_, _) {
          return _._(_._(), _, _);
        }
        static fromObject(_) {
          return _._(_._(), _);
        }
        static deserializeBinary(_) {
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _._(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _._(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_GetFriendsRecommendedApp_Response";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.requests || _._(_._()),
            _.Message.initialize(this, _, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  requests: {
                    _: 1,
                    _: _,
                    _: !0,
                    _: !0,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
        }
        toObject(_ = !1) {
          return _.toObject(_, this);
        }
        static toObject(_, _) {
          return _._(_._(), _, _);
        }
        static fromObject(_) {
          return _._(_._(), _);
        }
        static deserializeBinary(_) {
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _._(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _._(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_GetIndividualRecommendations_Request";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.steamid || _._(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  steamid: {
                    _: 1,
                    _: _._.readUint64String,
                    _: _._.writeUint64String,
                  },
                  appid: {
                    _: 2,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
        }
        toObject(_ = !1) {
          return _.toObject(_, this);
        }
        static toObject(_, _) {
          return _._(_._(), _, _);
        }
        static fromObject(_) {
          return _._(_._(), _);
        }
        static deserializeBinary(_) {
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _._(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _._(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_GetIndividualRecommendations_Request_RecommendationRequest";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.recommendations || _._(_._()),
            _.Message.initialize(this, _, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  recommendations: {
                    _: 1,
                    _: _,
                    _: !0,
                    _: !0,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
        }
        toObject(_ = !1) {
          return _.toObject(_, this);
        }
        static toObject(_, _) {
          return _._(_._(), _, _);
        }
        static fromObject(_) {
          return _._(_._(), _);
        }
        static deserializeBinary(_) {
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _._(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _._(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_GetIndividualRecommendations_Response";
        }
      }
      !(function (_) {
        (_.Update = function (_, _) {
          return _.SendMsg("UserReviews.Update#1", (0, _._)(_, _), _, {
            ePrivilege: 3,
          });
        }),
          (_.GetFriendsRecommendedApp = function (_, _) {
            return _.SendMsg(
              "UserReviews.GetFriendsRecommendedApp#1",
              (0, _._)(_, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 1,
              },
            );
          }),
          (_.GetIndividualRecommendations = function (_, _) {
            return _.SendMsg(
              "UserReviews.GetIndividualRecommendations#1",
              (0, _._)(_, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                eWebAPIKeyRequirement: 2,
              },
            );
          });
      })(_ || (_ = {}));
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid");
      class _ {
        static async LoadFriendsRecommendedApp(_, _) {
          const _ = _._.Init(_);
          __webpack_require__.Body().set_appid(_);
          const _ = await _.GetFriendsRecommendedApp(_, _),
            _ = _.GetEResult();
          if (1 == _) return _.Body().toObject();
          throw `Error ${_} failed to call GetFriendsRecommendedApp ${_}`;
        }
        static async LoadStoreRelevanceData(_) {
          let _ = {
              appid: _,
            },
            _ = {
              arrSimilarPlayedApps: [],
              bRecommendedByIR: !1,
            };
          const _ = (
            await _().get(
              `${_._.STORE_BASE_URL}explore/ajaxgetstorerelevancedata`,
              {
                params: _,
                withCredentials: !0,
                timeout: 1e4,
              },
            )
          ).data;
          return (
            _ &&
              1 == _.success &&
              (_.results.similar_played_apps &&
                (_.arrSimilarPlayedApps = _.results.similar_played_apps.map(
                  (_) => ({
                    appid: _.appid,
                    playtimeForever: _.playtime_forever,
                  }),
                )),
              _.results.recommended_by_ir && (_.bRecommendedByIR = !0)),
            _
          );
        }
      }
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      const _ = new _._("AppRelevance").Debug;
      function _(_) {
        const {
            appID: _,
            bShowAvatars: __webpack_require__,
            storeItem: _,
            bHideDescription: _,
            bShowCuratorInfo: _,
            bShowCreatorInfo: _,
          } = _,
          _ = (0, _._)(_),
          _ = (function (_) {
            const _ = (0, _._)();
            return (0, _._)({
              queryKey: ["AppRelevanceStore", "FriendsRecommended", _],
              queryFn: () => _.LoadFriendsRecommendedApp(_, _),
              enabled: _._.logged_in,
            });
          })(_),
          _ = (function (_) {
            return (0, _._)({
              queryKey: ["AppRelevanceStore", "StoreRelevance", _],
              queryFn: () => _.LoadStoreRelevanceData(_),
              enabled: _._.logged_in,
            });
          })(_),
          _ = (function () {
            const { data: _ } = (0, _._)("App Relevance Store Top Sellers", {
              sort: 11,
              start: 0,
              count: 100,
            });
            return _;
          })(),
          _ = (0, _._)({
            queryKey: ["SimilarPlayedAppsLoad", _],
            queryFn: () =>
              _._.Get().QueueMultipleAppRequests(
                _.data.arrSimilarPlayedApps?.map((_) => _.appid),
                {
                  include_basic_info: !0,
                  include_assets: !0,
                },
              ),
            enabled: _.isSuccess,
          }),
          _ = (function (_, _) {
            const _ = (0, _.useMemo)(
              () => _._.Get().GetRecommendingCuratorsForApp(_) || [],
              [_],
            );
            return (0, _._)({
              queryKey: ["RecommendingCurators", _],
              queryFn: () =>
                Promise.all(
                  __webpack_require__?.map((_) =>
                    _._.LoadClanInfoForClanAccountID(_),
                  ),
                ),
              enabled: !!_ && _ && _.length > 0,
            });
          })(_, _),
          _ = (0, _.useMemo)(() => {
            let _ = [];
            return (
              _ &&
                ((_ = _.concat(
                  _.GetAllFranchiseCreatorClans().map((_) => ({
                    nAccountID: _,
                    type: "franchise",
                  })),
                )),
                (_ = _.concat(
                  _.GetAllDeveloperCreatorClans().map((_) => ({
                    nAccountID: _,
                    type: "developer",
                  })),
                )),
                (_ = _.concat(
                  _.GetAllPublisherCreatorClans().map((_) => ({
                    nAccountID: _,
                    type: "publisher",
                  })),
                )),
                (_ = _.filter((_) =>
                  _._.Get().BIsFollowingCurator(_.nAccountID),
                ))),
              _
            );
          }, [_]),
          _ = (0, _._)({
            queryKey: ["FollowedCreators", _],
            queryFn: () =>
              _._.LoadClanInfoForClanAccountID(_[0].nAccountID).then((_) => ({
                clanInfo: _,
                type: _[0].type,
              })),
            enabled: !!_ && _ && _.length > 0,
          }),
          _ = (0, _._)({
            queryKey: ["PlayerSummaries", _, __webpack_require__],
            queryFn: async () => {
              let _ = [],
                _ = [],
                _ = [];
              const _ = __webpack_require__ ? 10 : 1;
              for (
                let _ = 0;
                _ < _.data.accountids_recommended?.length && _ < _;
                _++
              ) {
                const _ = _._.InitFromAccountID(
                  _.data.accountids_recommended[_],
                );
                _.push(__webpack_require__.ConvertTo64BitString());
              }
              for (let _ = 0; _ < _.data.in_wishlist?.length && _ < _; _++) {
                const _ = new _._(_.data.in_wishlist[_].steamid);
                _.push(__webpack_require__.ConvertTo64BitString());
              }
              for (let _ = 0; _ < _.data.owns?.length && _ < _; _++) {
                const _ = new _._(_.data.owns[_].steamid);
                _.push(_.ConvertTo64BitString());
              }
              return {
                rgRecommendedFriends: _,
                rgWishlistFriends: _,
                rgOwnedFriends: _,
              };
            },
            enabled: _.isSuccess && _.isSuccess,
          });
        if (
          !_ ||
          _.isLoading ||
          _.isLoading ||
          _.isLoading ||
          _.isLoading ||
          _.isLoading ||
          _.isLoading ||
          _.isLoading
        )
          return _.createElement(_._, {
            size: "medium",
            position: "center",
          });
        let _ = [];
        _.isSuccess &&
          _.data.arrSimilarPlayedApps &&
          _.data.arrSimilarPlayedApps.forEach((_) => {
            const _ = _._.Get().GetApp(_.appid);
            _
              ? _.push(
                  _.createElement(_, {
                    key: _.appid,
                    lifetimePlaytime: _.playtimeForever,
                    storeItem: _,
                  }),
                )
              : console.error("Failed to load store data ", _);
          });
        const _ = _.GetItemIDs().findIndex((_) => _.appid === _),
          _ = _.data?.bRecommendedByIR,
          _ = _.length > 0,
          _ = _.data?.owns?.length,
          _ = _.data?.in_wishlist?.length,
          _ = _.data?.accountids_recommended?.length;
        let _ = 0;
        return (
          _ > 0 && _++,
          _ > 0 && _++,
          _ > 0 && _++,
          _ && _++,
          _ >= 0 && _++,
          _.length > 0 && _++,
          _ && _?.data?.length > 0 && _++,
          _ && Boolean(_.data) && _++,
          _(
            "FriendsOwned: ",
            _,
            " FriendsWishlisted: ",
            _,
            "cRecommended: ",
            _,
          ),
          _.createElement(
            _.Fragment,
            null,
            _ > 0 &&
              _.createElement(
                _.Fragment,
                null,
                _.createElement(
                  "div",
                  {
                    className: _().WhyRelevant,
                  },
                  (0, _._)("#DiscoveryQueue_WhyRelevant"),
                ),
                _.createElement(
                  "div",
                  {
                    role: "list",
                    className: _().RelevantCtn,
                  },
                  _ &&
                    _.createElement(
                      _,
                      {
                        header: (0, _._)("#DiscoveryQueue_SimilarGames"),
                      },
                      _.createElement(
                        "div",
                        {
                          className: _().ReleventSimilarAppsCtn,
                        },
                        _,
                      ),
                    ),
                  _ &&
                    _?.data?.length > 0 &&
                    _.createElement(
                      _,
                      {
                        header: (0, _._)("#ContentHub_Recommendation_Curators"),
                      },
                      _.createElement(
                        "div",
                        {
                          className: (0, _._)(
                            _().ReleventSimilarAppsCtn,
                            _().RecommendingCuratorsCtn,
                          ),
                        },
                        _.data.filter(Boolean).map((_) =>
                          _.createElement(_, {
                            key: "curator_" + _.clanAccountID,
                            curator: _,
                          }),
                        ),
                      ),
                    ),
                  _ &&
                    Boolean(_.data) &&
                    _.createElement(_, {
                      creatorInfo: _.data,
                    }),
                  _ >= 0 &&
                    _.createElement(_, {
                      header: (0, _._)(
                        "#DiscoveryQueue_TopSellers",
                        (0, _._)(_ + 1),
                        _.createElement("span", {
                          className: _().RelevantTextBold,
                        }),
                      ),
                    }),
                  _ &&
                    !_ &&
                    _.createElement(_, {
                      header: (0, _._)("#DiscoveryQueue_RecommendedByIR"),
                    }),
                  _.createElement(_, {
                    bShowAvatars: __webpack_require__,
                    count: _.data?.accountids_recommended?.length,
                    locToken: "#DiscoveryQueue_FriendsRecommended",
                    arrSteamIDs: _.data?.rgRecommendedFriends,
                  }),
                  _.createElement(_, {
                    bShowAvatars: __webpack_require__,
                    count: _.data?.owns?.length,
                    locToken: "#DiscoveryQueue_FriendsOwned",
                    arrSteamIDs: _.data?.rgOwnedFriends,
                  }),
                  _.createElement(_, {
                    bShowAvatars: __webpack_require__,
                    count: _.data?.in_wishlist?.length,
                    locToken: "#DiscoveryQueue_FriendsWishlisted",
                    arrSteamIDs: _.data?.rgWishlistFriends,
                  }),
                ),
              ),
            _ && 0 != _
              ? _.createElement("div", {
                  "aria-label": _.GetShortDescription(),
                })
              : _.createElement(
                  "div",
                  {
                    className: (0, _._)(_().AppDescription, _ && _().Divider),
                  },
                  _.GetShortDescription(),
                ),
          )
        );
      }
      function _(_) {
        const { creatorInfo: _ } = _;
        if (!_) return null;
        let _;
        switch (_.type) {
          case "publisher":
            _ = "#ContentHub_Recommendation_FollowedPublisher";
            break;
          case "developer":
            _ = "#ContentHub_Recommendation_FollowedDeveloper";
            break;
          case "franchise":
            _ = "#ContentHub_Recommendation_FollowedFranchise";
        }
        return _
          ? _.createElement(_, {
              header: (0, _._)(
                _,
                _.createElement(
                  "span",
                  {
                    className: _().RelevantTextBold,
                  },
                  _.clanInfo?.group_name,
                ),
              ),
            })
          : null;
      }
      function _(_) {
        const { curator: _ } = _,
          { creatorHome: __webpack_require__ } = (0, _._)(_?.clanAccountID);
        return _ && __webpack_require__
          ? _.createElement(
              _._,
              {
                href: __webpack_require__.GetCreatorHomeURL(null),
              },
              _.createElement("img", {
                src: _.avatar_medium_url,
              }),
            )
          : null;
      }
      function _(_) {
        const { lifetimePlaytime: _, storeItem: __webpack_require__ } = _;
        return _.createElement(
          "div",
          {
            className: _().SimilarAppCtn,
          },
          _.createElement(
            _._,
            {
              item: {
                type: "game",
                _: __webpack_require__.GetAppID(),
              },
              bHidePrice: !0,
              hoverProps: {
                direction: "overlay",
                nBodyAlignment: 1,
                style: {
                  minWidth: "320px",
                  zIndex: 5e3,
                },
              },
            },
            _.createElement("img", {
              className: _().SimilarAppImg,
              alt: __webpack_require__.GetName(),
              src: __webpack_require__.GetAssets().GetSmallCapsuleURL(),
            }),
          ),
        );
      }
      function _(_) {
        const {
          arrSteamIDs: _,
          count: __webpack_require__,
          locToken: _,
          bShowAvatars: _,
        } = _;
        return __webpack_require__
          ? 1 != __webpack_require__ || _
            ? _.createElement(
                _,
                {
                  header: (0, _._)(
                    _,
                    __webpack_require__,
                    _.createElement("span", {
                      className: _().RelevantTextBold,
                    }),
                  ),
                },
                _ &&
                  _.length > 0 &&
                  _.createElement(
                    "div",
                    {
                      className: _().FriendAvatarsCtn,
                    },
                    1 == __webpack_require__
                      ? _.createElement(_, {
                          steamid: _[0],
                        })
                      : _.createElement(_, {
                          arrSteamIDs: _,
                        }),
                  ),
              )
            : _.createElement(_, {
                header: (0, _._)(
                  _ + "_Single",
                  _.createElement(_, {
                    steamid: _[0],
                  }),
                ),
              })
          : null;
      }
      function _(_) {
        const { steamid: _ } = _,
          { data: __webpack_require__ } = (0, _._)(_);
        return __webpack_require__ && __webpack_require__.m_bInitialized
          ? _.createElement(
              "span",
              {
                "data-miniprofile":
                  "s" + __webpack_require__.m_steamid.ConvertTo64BitString(),
                className: _().RelevantTextBold,
              },
              __webpack_require__.m_strPlayerName,
            )
          : null;
      }
      function _(_) {
        const { arrSteamIDs: _ } = _,
          _ = (0, _._)(_);
        return _.createElement(
          _.Fragment,
          null,
          __webpack_require__.map(
            ({ data: _ }) =>
              _ &&
              _.createElement(_._, {
                key: _.m_steamid.ConvertTo64BitString(),
                "data-miniprofile": "s" + _.m_steamid.ConvertTo64BitString(),
                persona: _,
                size: "Small",
                statusPosition: "right",
              }),
          ),
        );
      }
      function _(_) {
        const { steamid: _ } = _,
          { data: __webpack_require__ } = (0, _._)(_);
        return __webpack_require__
          ? _.createElement(
              _._,
              {
                className: _().FriendBlockCtn,
                "data-miniprofile": "s" + _,
              },
              _.createElement(_._, {
                persona: __webpack_require__,
                size: "Small",
                statusPosition: "right",
              }),
              _.createElement(_._, {
                className: _().PersonaStatus,
                persona: __webpack_require__,
                eFriendRelationship: 3,
                bIsSelf: !1,
                strNickname: null,
                bParenthesizeNicknames: !1,
                bCompactView: !1,
                bNoMask: !0,
              }),
            )
          : null;
      }
      function _(_) {
        const { children: _, header: __webpack_require__ } = _;
        return _.createElement(
          "div",
          {
            className: _().RelevantItem,
          },
          _.createElement(
            "div",
            {
              className: _().RelevantCheck,
            },
            _.createElement(_.Jlk, null),
          ),
          _.createElement(
            "div",
            {
              className: _().RelevantColumn,
            },
            _.createElement(
              "div",
              {
                className: _().ReleventText,
              },
              __webpack_require__,
            ),
            _,
          ),
        );
      }
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      new _._("DiscoveryQueueApp").Debug;
      function _(_) {
        const {
            appID: _,
            nItemHeight: __webpack_require__,
            nItemWidth: _,
            selected: _,
            fnFocused: _,
            eStoreDiscoveryQueueType: _,
            storePageFilter: _,
            bPreferDemoStorePage: _,
            elVideo: _,
            elDetails: _,
            appAriaIDs: _,
          } = _,
          [_] = (0, _._)(_, _._),
          _ = (0, _._)(),
          _ = (0, _._)(),
          _ = _?.ownerWindow || window,
          _ = _(_, _, _, _),
          { bIsIgnored: _, fnUpdateIgnored: _ } = (0, _._)(_),
          { bIsWishlisted: _, fnUpdateWishlist: _ } = (0, _._)(_),
          _ = _.useRef(void 0);
        if (
          (_.useEffect(() => {
            _ &&
              _.current &&
              _.current.focus({
                preventScroll: !0,
              });
          }, [_]),
          !_)
        )
          return console.warn("Error: missing store item for appid ", _), null;
        const _ = {
          width: _ || void 0,
          height: __webpack_require__ || void 0,
        };
        return _.createElement(
          _._,
          {
            "aria-labelledby": (0, _._)(
              _.nameId,
              _.tagsId,
              _.reviewId,
              _.relevanceId,
              _.buttonsId,
            ),
            ref: _,
            style: _,
            className: (0, _._)(_().DiscoveryQueueApp, _ && _().Selected),
            onOptionsActionDescription: _
              ? (0, _._)("#DiscoveryQueue_RemoveFromWishlist")
              : (0, _._)("#DiscoveryQueue_AddToWishlist"),
            onOptionsButton: _,
            onOKActionDescription: (0, _._)("#DiscoveryQueue_ViewStorePage"),
            onOKButton: () => {
              _.location.href = _;
            },
            onSecondaryActionDescription: _
              ? (0, _._)("#DiscoveryQueue_Undo")
              : (0, _._)("#DiscoveryQueue_IgnoreLink"),
            onSecondaryButton: _,
            fnScrollIntoViewHandler: () => (_(), !0),
          },
          _.createElement(
            "div",
            {
              className: (0, _._)(_().IgnoredCtn, _ && _().Active),
            },
            _.createElement(
              "div",
              {
                className: (0, _._)(_().IgnoredInfo, _ && _().Active),
              },
              _.createElement(
                "div",
                {
                  className: _().IgnoredTitle,
                },
                (0, _._)("#DiscoveryQueue_Ignored"),
              ),
              _.createElement(
                "div",
                {
                  className: _().IgnoredDescription,
                },
                (0, _._)("#DiscoveryQueue_IgnoredConfirmation"),
              ),
              _.createElement(
                _._,
                {
                  className: (0, _._)(_().QueueButton, _().UndoIgnoreButton),
                  onClick: _,
                },
                _ &&
                  _.createElement(_._, {
                    button: _._._,
                    type: _._.Light,
                    size: _._.Medium,
                  }),
                (0, _._)("#DiscoveryQueue_Undo"),
              ),
            ),
          ),
          _,
          _,
        );
      }
      function _(_, _, _, _) {
        const _ = (0, _._)();
        return _.useMemo(() => {
          if (!_) return;
          const _ = (0, _._)(_),
            _ = _ >= 0 ? "?inqueue=" + _ + (_ ? "_" + _ : "") : "",
            _ = (0, _._)(_, _.GetStorePageURL(_) + _);
          return (0, _._)(_);
        }, [_, _, _, _, _]);
      }
      function _(_) {
        const {
            appID: _,
            bShowMinimizedDisplay: __webpack_require__,
            eStoreDiscoveryQueueType: _,
            storePageFilter: _,
            bPreferDemoStorePage: _,
            appAriaIDs: _,
          } = _,
          [_] = (0, _._)(_, _._),
          _ = (0, _._)(_),
          { bIsIgnored: _, fnUpdateIgnored: _ } = (0, _._)(_),
          { bIsWishlisted: _, fnUpdateWishlist: _ } = (0, _._)(_),
          _ = _(_, _, _, _),
          _ = (0, _._)(),
          _ = _;
        if (!_) return;
        const _ = _.GetAssets().GetLibraryCapsuleURL(),
          _ = _.GetAssets().GetHeaderURL();
        return _.createElement(
          _._,
          {
            className: _().AppDetailsCtn,
          },
          _.createElement(
            "div",
            {
              className: _().AppDetailsCtnTop,
            },
            _ &&
              _.createElement(
                "a",
                {
                  className: (0, _._)(_().CapsuleLink),
                  href: _,
                },
                _.createElement("img", {
                  className: _().AppLibraryHero,
                  src: _,
                }),
                _ &&
                  _.createElement("img", {
                    className: _().AppHeader,
                    src: _,
                  }),
              ),
            _.createElement(
              "div",
              {
                _: _.nameId,
                className: _().RightColumn,
              },
              _.createElement(
                "a",
                {
                  className: (0, _._)(_().AppName),
                  href: _,
                },
                _.GetName(),
              ),
              _.createElement(_._, {
                bSingleLineMode: !0,
                info: {
                  _: _,
                  type: (0, _._)(_.GetAppType()),
                },
              }),
            ),
            _.createElement(_, {
              rgTagIDs: _.GetTagIDs(),
              ariaLabelID: _.tagsId,
            }),
            _.createElement(
              "div",
              {
                className: _().AppReviews,
                _: _.reviewId,
              },
              _.createElement(_._, {
                bShowTooltip: !0,
                bTruncateTotalReviews: __webpack_require__,
                appInfo: {
                  _: _,
                  type: (0, _._)(_.GetAppType()),
                },
              }),
            ),
            _.createElement(
              "div",
              {
                _: _.relevanceId,
                className: _().AppRelevanceCtn,
              },
              _.createElement(_, {
                bHideDescription: _,
                bShowAvatars: !__webpack_require__,
                storeItem: _,
                appID: _,
              }),
            ),
          ),
          !_ &&
            _.createElement(
              "div",
              {
                className: _().AppActionButtonsCtn,
              },
              _.createElement(
                "div",
                {
                  _: _.buttonsId,
                  className: _().AppActionJustButtonsCtn,
                },
                _.createElement(
                  "div",
                  {
                    className: _().ButtonsRowWrap,
                  },
                  _.BHasDemo() &&
                    _.createElement(_._, {
                      _: _,
                      className: (0, _._)(
                        _().QueueButton,
                        _().Primary,
                        _().Launch,
                      ),
                    }),
                  _.createElement(
                    "a",
                    {
                      className: (0, _._)(_().QueueButton, _().Primary),
                      href: _,
                    },
                    _ &&
                      _.createElement(_._, {
                        button: _._._,
                        type: _._.Light,
                        size: _._.Medium,
                        additionalClassName: _().YGlyph,
                      }),
                    " ",
                    (0, _._)("#DiscoveryQueue_ViewStorePage"),
                  ),
                  _.createElement(
                    _._,
                    {
                      toolTipContent: _
                        ? (0, _._)("#RemoveFromWishlist_ttip")
                        : (0, _._)("#AddToWishlist_ttip"),
                    },
                    _.createElement(
                      _._,
                      {
                        "aria-label": _
                          ? (0, _._)("#Sale_RemoveFromWishlist")
                          : (0, _._)("#Sale_AddToWishlist"),
                        focusable: !0,
                        className: (0, _._)(_().QueueButton, _ && _().Active),
                        onClick: _,
                      },
                      _ &&
                        _.createElement(_._, {
                          button: _._._,
                          type: _._.Light,
                          size: _._.Medium,
                          additionalClassName: _().YGlyph,
                        }),
                      _
                        ? _.createElement(_.qnF, null)
                        : _.createElement(_.T4m, null),
                    ),
                  ),
                  _.createElement(
                    _._,
                    {
                      toolTipContent: (0, _._)(
                        "#SaleTrailerCarousel_IgnoreLink_ttip",
                      ),
                    },
                    _.createElement(
                      _._,
                      {
                        "aria-label": (0, _._)("#DiscoveryQueue_IgnoreLink"),
                        focusable: !0,
                        className: (0, _._)(_().QueueButton, _ && _().Active),
                        onClick: _,
                      },
                      _.createElement(_.NtH, null),
                    ),
                  ),
                ),
              ),
            ),
        );
      }
      function _(_) {
        const { rgTagIDs: _, ariaLabelID: __webpack_require__ } = _,
          _ = [...(0, _._)(_)].slice(0, 8);
        return _.createElement(
          "div",
          {
            _: __webpack_require__,
            role: "list",
            className: _().AppTagsCtn,
          },
          _.map((_) =>
            _.createElement(_._, {
              key: _,
              className: _().TagEntry,
              tagID: _,
            }),
          ),
        );
      }
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      const _ = new _._("DiscoveryQueueWizard").Debug,
        _ = 1,
        _ = 1400,
        _ = "discoveryqueue2022";
      async function _(_, _, _, _) {
        let _ = [],
          _ = !1;
        try {
          const { appids: _, exhausted: _ } =
            await _._.Get().GetDiscoveryQueueAppsOfType(_, _, _);
          (_ = [..._]),
            (_ = _),
            _ && -1 === _.findIndex((_) => _ === _) && _.unshift(_),
            await _._.Get().QueueMultipleAppRequests(_, {
              ..._._,
              ..._._,
            });
        } catch (_) {
          console.error("Failed getting discovery queue apps", _);
        }
        return {
          appids: _,
          exhausted: _,
        };
      }
      function _(_) {
        const [_, __webpack_require__] = _.useState(!1),
          _ = (0, _._)();
        return (
          (0, _.useEffect)(() => {
            _._.Init(_), __webpack_require__(!0);
          }, [_]),
          _
            ? _.createElement(_, {
                ..._,
              })
            : null
        );
      }
      function _(_) {
        const {
            eStoreDiscoveryQueueType: _,
            fnCloseModal: __webpack_require__,
            includeAppID: _,
            storePageFilter: _,
            bPreferDemoStorePage: _,
            bShowAOAutoPlayWarning: _,
          } = _,
          [_, _] = _.useState(0),
          [_, _] = _.useState(void 0),
          [_, _] = _.useState(0),
          _ = (0, _._)(),
          _ = _?.ownerWindow || window,
          _ = (0, _._)(_),
          [_, _] = _.useState(0),
          _ = (0, _._)();
        (0, _._)("ArrowLeft", () => _(!1), !0, !0),
          (0, _._)("Left", () => _(!1), !0, !0),
          (0, _._)("ArrowRight", () => _(!0), !0, !0),
          (0, _._)("Right", () => _(!0), !0, !0),
          (0, _._)("Escape", () => __webpack_require__?.(), !0, !0),
          (0, _._)("Esc", () => __webpack_require__?.(), !0, !0);
        const _ = _.useMemo(() => Boolean(_.innerWidth < _), [_]),
          { fnGetDiscoveryQueue: _, rgAppIDs: _ } = (function (_, _, _) {
            const [_, _] = _.useState([]),
              _ = (0, _._)("DiscoveryQueueWizard"),
              _ = async (_) => {
                let { appids: _ } = await _(_, !_, _ && _, _);
                if (_ && !_.length) {
                  let { appids: _ } = await _(_, !0, void 0, _);
                  _ = _;
                }
                if (!_?.token?.reason) {
                  const _ = [...(_ ?? []), ..._, _];
                  _(_);
                }
                _("Loaded new discovery queue apps: ", _);
              };
            return {
              fnGetDiscoveryQueue: _,
              rgAppIDs: _,
            };
          })(_, _, _);
        _.useEffect(() => {
          _(!0), _._.Get().HintLoad();
        }, []),
          _.useEffect(() => {
            const _ = _[_];
            _ != _ && (_ && _ != _ && _.AddImpression(_, _), _(_));
          }, [_, _, _, _, _]);
        const _ = (_) => {
          const _ = _._(_ + (_ ? 1 : -1), 0, _.length - 1);
          _ != _ &&
            (_(_), _("New selected index: ", _, " Prev selected index: ", _));
        };
        _.useEffect(() => {
          _?.length &&
            _[_] !== _ &&
            (_((_) => _ + 1),
            _._.Get()
              .SkipDiscoveryQueueItem(_[_], _, _)
              .then(() => _((_) => _ - 1)));
        }, [_, _, _, _]),
          _.useEffect(() => {
            _.length != _ &&
              (_(_.length), _.length > _ && _[_] == _ && _(_ + 1));
          }, [_, _, _]);
        const [_] = _.useState(new Map()),
          _ = (0, _._)(_, _),
          _ = !(0, _._)() && _ > 0,
          _ = !(0, _._)() && _ < _.length - 1,
          {
            refContainer: _,
            bIsDragging: _,
            nDragOffset: _,
            nDragSelectedOffsetIndex: _,
            handleTouchStart: _,
            handleTouchMove: _,
            handleTouchEnd: _,
          } = (function (_, _) {
            const _ = _.useRef(null),
              [_, _] = _.useState(0),
              [_, _] = _.useState(!1),
              [_, _] = _.useState(0),
              _ = _.useRef(0),
              _ = 50,
              _ = (_) => {
                _(!0), (_.current = _.touches[0].clientX), _(0), _(0);
              },
              _ = (_) => {
                if (!_) return;
                const _ = _.touches[0].clientX - _.current;
                _(_), _(_ > _ ? 1 : _ < -_ ? -1 : 0);
              },
              _ = () => {
                _ &&
                  (_(!1),
                  _ > _
                    ? _((_) => Math.max(_ - 1, 0))
                    : _ < -_ && _((_) => Math.min(_ + 1, _ - 1)),
                  _(0),
                  _(0));
              };
            return {
              refContainer: _,
              bIsDragging: _,
              nDragOffset: _,
              nDragSelectedOffsetIndex: _,
              handleTouchStart: _,
              handleTouchMove: _,
              handleTouchEnd: _,
            };
          })((_) => _(_), _.length),
          _ = (_) => _._(_ + _, _) && (_._(_, -1, 1) || _),
          _ = (0, _._)(_._.STORE_BASE_URL + "explore?dq=widget"),
          _ = _[_] !== _,
          { nQueueStart: _, nCount: _ } = (function (_, _) {
            let _ = 0;
            for (let _ = 0; _ < _; _++) _[_] == _ && (_ = _ + 1);
            let _ = 0;
            for (let _ = _; _ < _.length; _++) {
              if (_[_] == _) {
                _ = _;
                break;
              }
              _ == _.length - 1 && (_ = _.length);
            }
            const _ = _ - _;
            return {
              nQueueStart: _,
              nQueueEnd: _,
              nCount: _,
            };
          })(_, _);
        return _.createElement(
          _._,
          {
            feature: _,
          },
          _.createElement(
            _._,
            {
              role: "dialog",
              focusable: !1,
              "flow-children": "column",
              className: _().DiscoveryQueueCarouselCtn,
              navEntryPreferPosition: _._.LAST,
              onCancelButton: () => __webpack_require__?.(),
              onCancelActionDescription: (0, _._)("#Button_Close"),
            },
            _.createElement(
              "div",
              {
                className: _().DiscoveryQueueWrapper,
                onClick: (_) => {
                  _.target == _.currentTarget &&
                    (__webpack_require__?.(), _.stopPropagation());
                },
              },
              _.length > 0 &&
                _.createElement(
                  _._,
                  {
                    "flow-children": "row",
                    className: _().DiscoveryQueueName,
                  },
                  _,
                ),
              _.createElement(
                _._,
                {
                  "flow-children": "row",
                  className: _().TopBarCtn,
                },
                _.createElement(
                  _._,
                  {
                    className: _().LearnMore,
                  },
                  (0, _._)(
                    "#DiscoveryQueue_LearnMore_Default",
                    _.createElement(_._, {
                      className: _().LearnMoreLink,
                      href: (0, _._)(_),
                    }),
                  ),
                ),
                _.createElement(
                  _._,
                  {
                    className: _().ControlsCtn,
                  },
                  _.createElement(
                    _._,
                    {
                      focusable: !0,
                      className: _().QueueButton,
                      onClick: __webpack_require__,
                      "aria-label": (0, _._)("#Button_Close"),
                      onActivate: () =>
                        __webpack_require__ && __webpack_require__(),
                    },
                    _.createElement(_._, null),
                  ),
                ),
              ),
              _.createElement(
                _._,
                {
                  role: "button",
                  "aria-label": (0, _._)("#Carousel_Next"),
                  onClick: () => _(!1),
                  className: (0, _._)(
                    _().QueueNavArrow,
                    _().LeftArrow,
                    _ && _().Enable,
                  ),
                },
                _.createElement(_.l8x, {
                  angle: 180,
                }),
              ),
              _.createElement(
                _._,
                {
                  role: "button",
                  "aria-label": (0, _._)("#Carousel_Prev"),
                  onClick: () => _(!0),
                  className: (0, _._)(
                    _().QueueNavArrow,
                    _().RightArrow,
                    _ && _().Enable,
                  ),
                },
                _.createElement(_.l8x, {
                  angle: 0,
                }),
              ),
              _.createElement(
                _._,
                {
                  ref: _,
                  className: _().DiscoveryQueueItemsCtn,
                  focusable: !1,
                  onTouchStart: _,
                  onTouchMove: _,
                  onTouchEnd: _,
                },
                [-2, -1, 0, 1, 2].map((_) =>
                  _.createElement(
                    "div",
                    {
                      key: _ + _,
                      className: (0, _._)({
                        [_().DiscoveryQueueItemPositioner]: !0,
                        [_().Dragging]: _,
                        [_().InRange]: _(_),
                        [_().FarLeft]: -2 == _,
                        [_().Left]: -1 == _,
                        [_().Current]: 0 == _,
                        [_().Right]: 1 == _,
                        [_().FarRight]: 2 == _,
                        [_().Selected]: _ + _ == 0,
                      }),
                      style: {
                        "--dragOffsetX": `${_}px`,
                      },
                    },
                    _(_) &&
                      _.createElement(_, {
                        eStoreDiscoveryQueueType: _,
                        storePageFilter: _,
                        rgAppIDs: _,
                        index: _ + _,
                        bShowMinimizedDisplay: _,
                        selectedIndex: _,
                        bPreferDemoStorePage: Boolean(_),
                        mapViewedAppCount: _,
                        fnCloseModal: __webpack_require__,
                        fnLoadNextQueue: () => _(!1),
                        fnAdvance: _,
                        bSkipAppRequestPending: Boolean(0 != _),
                        showAOAutoPlayWarning: Boolean(_),
                      }),
                  ),
                ),
              ),
              _.createElement(_._, {
                className: (0, _._)(!_ && _().ProgressHidden),
                showPriorAsActive: !0,
                count: _,
                selectedIndex: _ - _,
              }),
            ),
          ),
        );
      }
      function _(_) {
        const {
            eStoreDiscoveryQueueType: _,
            storePageFilter: __webpack_require__,
            rgAppIDs: _,
            index: _,
            bShowMinimizedDisplay: _,
            selectedIndex: _,
            bPreferDemoStorePage: _,
            mapViewedAppCount: _,
            fnCloseModal: _,
            fnLoadNextQueue: _,
            fnAdvance: _,
            bSkipAppRequestPending: _,
            showAOAutoPlayWarning: _,
          } = _,
          [_, _] = _.useState(!1),
          _ = {
            nameId: _.useId(),
            tagsId: _.useId(),
            reviewId: _.useId(),
            relevanceId: _.useId(),
            buttonsId: _.useId(),
          },
          _ = () => {
            _ != _ && _(_ > _);
          },
          _ = _ === _,
          _ = _.useRef(_);
        if (
          (_.useEffect(() => {
            const _ = _.current;
            if (((_.current = _), _ && !_)) {
              _(!0);
              const _ = setTimeout(() => _(!1), 500);
              return () => {
                clearTimeout(_);
              };
            }
          }, [_]),
          _[_] == _)
        ) {
          let _ = 0;
          for (let _ = _ - 1; _ >= 0; _--) _[_] == _ && (_ += 1);
          let _ = 0;
          for (let _ = _ - 1; _ >= 0 && _[_] !== _; _--) _++;
          return (
            _.has(_) ||
              _.set(
                _,
                _._.Get().GetTotalSkippedAppsForDiscoveryQueue(
                  _,
                  __webpack_require__,
                ),
              ),
            _.createElement(_, {
              ..._,
              key: _,
              selected: _,
              lastCard: _ == _.length - 1,
              fnLoadNextQueue: _,
              fnCloseModal: _,
              summaryCardIndex: _,
              eStoreDiscoveryQueueType: _,
              viewedAppCount: (_.get(_) || 0) + _,
              fnFocused: _,
              fnAdvance: () => _(!0),
              bSkipAppRequestPending: _,
            })
          );
        }
        const _ = _ || _.current || _;
        return _.createElement(_, {
          appAriaIDs: _,
          eStoreDiscoveryQueueType: _,
          storePageFilter: __webpack_require__,
          selected: _,
          appID: _[_],
          bPreferDemoStorePage: _,
          fnFocused: _,
          elVideo: _.createElement(_._, {
            appID: _[_],
            focused: _,
            showAOAutoPlayWarning: _,
          }),
          elDetails: _.createElement(_, {
            appID: _[_],
            bShowMinimizedDisplay: _,
            eStoreDiscoveryQueueType: _,
            storePageFilter: __webpack_require__,
            bPreferDemoStorePage: _,
            appAriaIDs: _,
          }),
        });
      }
      function _(_) {
        const {
            eStoreDiscoveryQueueType: _,
            fnCloseModal: __webpack_require__,
            summaryCardIndex: _,
            lastCard: _,
            selected: _,
            fnLoadNextQueue: _,
            storePageFilter: _,
            fnDisplaySummaryReward: _,
            viewedAppCount: _,
            fnFocused: _,
            fnAdvance: _,
            bSkipAppRequestPending: _,
          } = _,
          [_, _] = _.useState(!1),
          _ = (0, _._)(),
          _ = (0, _._)(2, _._.LANGUAGE, !1),
          [_, _] = _.useState(0),
          [_, _] = _.useState(0),
          { data: _ } = (0, _._)();
        _.useEffect(() => {
          _ &&
            !_ &&
            _ &&
            _._.Get()
              .HintLoad()
              .then(() => {
                _._.Get()
                  .LoadSkippedApps(_, _)
                  .then((_) => {
                    _(_.reduce((_, _) => (_.has(_) ? _ + 1 : _), 0)),
                      _(
                        _.reduce(
                          (_, _) => (_._.Get().BIsGameIgnored(_) ? _ + 1 : _),
                          0,
                        ),
                      ),
                      _(!0);
                  });
              });
        }, [_, _, _, _, _]);
        const [_, _] = _.useState(!1),
          _ = (0, _._)(_, _),
          _ = (0, _._)("DiscoveryQueueSummary"),
          _ = async () => {
            _ ? _ || (_(!0), await _(), _?.token?.reason || _(!1)) : _();
          };
        return _.createElement(
          _,
          {
            selected: _,
            fnFocused: _,
            fnOnContinue: _,
            fnCloseModal: __webpack_require__,
            bLoaded: _,
          },
          _.createElement(
            "div",
            {
              className: _().SummaryContentCtn,
            },
            _.createElement(
              "div",
              {
                className: _().SummaryTitle,
              },
              (0, _._)("#DiscoveryQueue_SummaryTitle"),
            ),
            !_ &&
              _ &&
              _.data?.definition &&
              _.createElement(_, {
                bSkipAppRequestPending: _,
                summaryCardIdx: _,
              }),
            _.createElement(
              "div",
              {
                className: _().YourStats,
              },
              (0, _._)("#DiscoveryQueue_YourStats"),
            ),
            _.createElement(
              _._,
              {
                "flow-children": "row",
                className: _().SummaryGrid,
              },
              _.createElement(
                "div",
                {
                  className: _().GridItem,
                },
                _.createElement(
                  "div",
                  {
                    className: _().GridTitle,
                  },
                  (0, _._)("#DiscoveryQueue_ViewedCaps"),
                ),
                _.createElement(
                  "div",
                  {
                    className: _().GridNumber,
                  },
                  (0, _._)(_),
                ),
                _.createElement(
                  "div",
                  {
                    className: _().GridSubTitle,
                  },
                  (0, _._)("#DiscoveryQueue_Titles"),
                ),
              ),
              _.createElement(
                "div",
                {
                  className: _().GridItem,
                },
                _.createElement(
                  "div",
                  {
                    className: _().GridTitle,
                  },
                  (0, _._)("#DiscoveryQueue_WishlistedCaps"),
                ),
                _.createElement(
                  "div",
                  {
                    className: _().GridNumber,
                  },
                  (0, _._)(_),
                ),
                _.createElement(
                  _._,
                  {
                    className: (0, _._)(_().GridSubTitle, _().TextLink),
                    href: (0, _._)(_._.STORE_BASE_URL + "wishlist"),
                  },
                  (0, _._)("#DiscoveryQueue_ViewWishlist"),
                ),
              ),
              _.createElement(
                "div",
                {
                  className: _().GridItem,
                },
                _.createElement(
                  "div",
                  {
                    className: _().GridTitle,
                  },
                  (0, _._)("#DiscoveryQueue_IgnoredCaps"),
                ),
                _.createElement(
                  "div",
                  {
                    className: _().GridNumber,
                  },
                  (0, _._)(_),
                ),
                _.createElement(
                  _._,
                  {
                    className: (0, _._)(_().GridSubTitle, _().TextLink),
                    href: (0, _._)(
                      _._.STORE_BASE_URL + "account/notinterested",
                    ),
                  },
                  (0, _._)("#DiscoveryQueue_ViewIgnored"),
                ),
              ),
            ),
            !_ &&
              _.createElement(
                _._,
                {
                  className: _().SummaryActionButtonsCtn,
                },
                _.createElement(
                  _._,
                  {
                    className: (0, _._)(_().QueueButton, _().Wide),
                    onClick: __webpack_require__,
                  },
                  (0, _._)("#ActionButtonLabelDone"),
                ),
                !_ &&
                  _.createElement(
                    _._,
                    {
                      className: (0, _._)(
                        _ && _().Disabled,
                        _().QueueButton,
                        _().Primary,
                        _().Wide,
                      ),
                      onClick: _,
                    },
                    _ ? (0, _._)("#Loading") : (0, _._)("#Button_Continue"),
                  ),
              ),
          ),
          Boolean(!_) &&
            _.createElement(_.Fragment, null, Boolean(_) && _(_ + 1)),
        );
      }
      function _(_) {
        const {
            children: _,
            selected: __webpack_require__,
            fnOnContinue: _,
            fnCloseModal: _,
            fnFocused: _,
            bLoaded: _,
          } = _,
          _ = (0, _._)(_._.STORE_BASE_URL + "wishlist"),
          _ = (0, _._)(),
          _ = _?.ownerWindow || window,
          _ = _.useRef(void 0);
        return (
          _.useEffect(() => {
            __webpack_require__ &&
              _.current &&
              _.current.focus({
                preventScroll: !0,
              });
          }, [__webpack_require__]),
          _.createElement(
            _._,
            {
              ref: _,
              "aria-live": "polite",
              className: (0, _._)(
                _().SummaryCtn,
                _().DiscoveryQueueApp,
                __webpack_require__ && _().Selected,
              ),
              onOptionsActionDescription: (0, _._)(
                "#DiscoveryQueue_ViewWishlist",
              ),
              onOptionsButton: () => {
                _.location.href = (0, _._)(_);
              },
              onOKActionDescription: (0, _._)("#Button_Continue"),
              onOKButton: () => {
                _();
              },
              onCancelActionDescription: (0, _._)("#ActionButtonLabelDone"),
              onCancelButton: () => _ && _(),
              fnScrollIntoViewHandler: () => (_(), !0),
            },
            _
              ? _
              : _.createElement(_._, {
                  className: _().DiscoveryQueueThrobber,
                  msDelayAppear: 200,
                  size: "large",
                  position: "center",
                }),
          )
        );
      }
      function _() {
        return _.createElement(
          _._,
          {
            className: _().SaleRewardsCtn,
          },
          _.createElement(_._, {
            size: "large",
            position: "center",
          }),
        );
      }
      function _(_) {
        const {
          bSkipAppRequestPending: _,
          summaryCardIdx: __webpack_require__,
        } = _;
        return _
          ? _.createElement(_, null)
          : _.createElement(_, {
              summaryCardIdx: __webpack_require__,
            });
      }
      function _(_) {
        const { summaryCardIdx: _ } = _,
          _ = (0, _._)(2, _._.LANGUAGE, !1, _.toString()),
          [_] = (0, _._)(_?.data?.current_def?.appid, {}),
          _ = (0, _._)();
        if (!_?.data?.current_def || !_?.GetName().length)
          return _.createElement(_, null);
        const _ = _.data.num_items_earned,
          _ = _.data.current_def.num_items_per_def,
          _ = _ - _,
          _ = (_ / _) * 100;
        return _.createElement(
          _._,
          {
            className: _().SaleRewardsCtn,
          },
          _.createElement(_, {
            nPercent: _,
            size: 70,
            strokeWidth: 12,
          }),
          _.createElement(
            _._,
            {
              className: _().RewardStatusCtn,
            },
            _.createElement(
              "div",
              {
                className: _().SaleRewardAppTitle,
              },
              (0, _._)(
                "#DiscoveryQueue_SaleStatus_Title" + (_ ? "" : "_Complete"),
                (0, _._)(_),
                _.GetName(),
              ),
            ),
            _ > 0 &&
              _.createElement(
                "div",
                {
                  className: _().SaleRewardAppTitle,
                },
                (0, _._)(
                  "#DiscoveryQueue_SaleStatus_Desc",
                  (0, _._)(_),
                  _.GetName(),
                ),
              ),
            !_ &&
              _.createElement(
                "a",
                {
                  href: (0, _._)(_._.COMMUNITY_BASE_URL + "my/itemcollection"),
                },
                (0, _._)("#DiscoveryQueue_SaleStatus_Link"),
              ),
          ),
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
      function _(_) {
        const { appID: _ } = _,
          _ = (0, _._)(),
          [_] = (0, _._)("inqueue", "0"),
          [_, _] = (0, _.useState)(!1),
          [_] = (0, _._)(_, {
            include_assets: !0,
          }),
          _ = _.useRef(void 0);
        _.useEffect(() => _.current?.Activate(!0), []);
        const _ = (0, _._)(),
          { eStoreDiscoveryQueueType: _, storePageFilter: _ } =
            _.useMemo(() => {
              if (_?.length > 0) {
                const _ = _.split("_"),
                  _ = Number(_[0]);
                let _;
                return (
                  _.length > 1 && (_ = (0, _._)(_[1])),
                  {
                    eStoreDiscoveryQueueType: _,
                    storePageFilter: _,
                  }
                );
              }
              return {
                eStoreDiscoveryQueueType: 0,
                storePageFilter: void 0,
              };
            }, [_]),
          { showDiscoveryQueue: _ } = (0, _._)(_, {
            includeAppID: _,
            storePageFilter: _,
          }),
          _ = _.useCallback(() => {
            _(!0);
          }, []),
          _ = (0, _._)(_, _);
        return _ && _
          ? _
            ? null
            : _.createElement(
                _._,
                {
                  navTreeRef: _,
                  navID: "DiscoveryQueueAppWidget",
                },
                _.createElement(
                  _._,
                  {
                    focusable: !0,
                    className: _().DiscoveryQueueWidgetCtn,
                    onSecondaryButton: _,
                    onOKButton: _,
                    onOKActionDescription: (0, _._)(
                      "#DiscoveryQueue_ResumeWizard",
                    ),
                    onSecondaryActionDescription: (0, _._)("#Button_Close"),
                  },
                  _.createElement(
                    "div",
                    {
                      onClick: _,
                      className: _().WidgetText,
                    },
                    _.createElement(_.mcU, null),
                    (0, _._)("#DiscoveryQueue_ResumeWizard"),
                    _?.length > 0 && ": " + _,
                  ),
                  !_ &&
                    _.createElement(
                      "div",
                      {
                        className: _().CloseButton,
                        onClick: _,
                      },
                      _.createElement(_._, null),
                    ),
                ),
              )
          : null;
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
        _ = __webpack_require__("chunkid");
      function _() {
        return _.createElement(
          _._,
          {
            placeholderHeight: "200px",
            rootMargin: "0px 0px 100% 0px",
          },
          _.createElement(
            _._,
            {
              navID: "DiscoveryQueueWidget",
            },
            _.createElement(_._, {
              eStoreDiscoveryQueueType: 0,
            }),
          ),
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
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        const _ = (0, _._)(),
          { showDiscoveryQueue: __webpack_require__ } = (0, _._)(0),
          _ = _.useCallback(() => {
            _._.logged_in
              ? __webpack_require__()
              : (0, _._)(
                  _.createElement(_._, {
                    onOK: () => {
                      window.location.href = `${_._.STORE_BASE_URL}login?redir=${encodeURIComponent(document.location.href)}`;
                    },
                    strOKButtonText: (0, _._)(
                      "#DiscoveryQueue_Error_Login_Title",
                    ),
                    strDescription: (0, _._)("#DiscoveryQueue_Error_Login"),
                    strTitle: (0, _._)("#DiscoveryQueue_Error_Login_Title"),
                  }),
                  window,
                );
          }, [__webpack_require__]);
        return _
          ? _.createElement(
              _._,
              null,
              _.createElement(
                "a",
                {
                  onClick: _,
                  className: "experiment-button",
                },
                (0, _._)("#DiscoveryQueue_OpenWizard"),
              ),
            )
          : _.createElement(
              "div",
              {
                className: "experiment-button-placeholder",
              },
              " ",
            );
      }
    },
  },
]);

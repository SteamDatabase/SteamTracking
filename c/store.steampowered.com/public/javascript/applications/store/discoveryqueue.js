(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [9672],
  {
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
                  ? __webpack_require__.Body().reward_item().toObject()
                  : null),
                (this.m_claimState = {
                  bCanClaimNewItem: __webpack_require__.Body().can_claim(),
                  bAlreadyClaimedCurrentItem: Boolean(
                    this.m_claimedFreeItemDef,
                  ),
                  appid: this.m_claimedFreeItemDef?.appid,
                  community_item_type:
                    this.m_claimedFreeItemDef?.community_item_type,
                  community_item_class:
                    this.m_claimedFreeItemDef?.community_item_class,
                  rtNextClaimTime:
                    __webpack_require__.Body().next_claim_time() > 0
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
                (this.m_claimedFreeItemDef = __webpack_require__
                  .Body()
                  .reward_item()
                  .toObject()),
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
                    __webpack_require__.Body().next_claim_time() > 0
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
              onRender: __webpack_require__,
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
          return _.createElement(
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
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid");
      function _(_) {
        const { appID: _ } = _,
          _ = (0, _._)(),
          [_] = (0, _._)("inqueue", "0"),
          [_, _] = (0, _.useState)(!1),
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
          _ = _.useCallback(() => {
            _(!0);
          }, []),
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
                  _ &&
                    _.createElement(_._, {
                      includeAppID: _,
                      bWizardVisible: _,
                      fnCloseModal: () => _(!1),
                      eStoreDiscoveryQueueType: _,
                      storePageFilter: _,
                    }),
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
          [__webpack_require__, _] = (0, _.useState)(!1),
          _ = _.useCallback(() => {
            _._.logged_in
              ? _(!0)
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
          }, []);
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
              __webpack_require__ &&
                _.createElement(_._, {
                  bWizardVisible: __webpack_require__,
                  fnCloseModal: () => _(!1),
                  eStoreDiscoveryQueueType: 0,
                }),
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

(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [9517],
  {
    chunkid: (module) => {
      module.exports = {
        StoreSaleWidgetContainer_mini: "nacWp0zfiXg_UWQW639_1",
        Action: "_2Xpw9--lhL-kpt-lUannE1",
        WishList: "_3mTSEg2yzb9H5zdRPv3SAA",
        StoreSaleWidgetImage_mini: "yvW2hgWZFqKjkjDbHrtPf",
        StoreSaleImage_mini: "_1zSsmz7ESvggIV3mlgPyyv",
        StoreSaleWidgetShortDesc_mini: "_2ZkfUmESIrnc0pJNmdiFW4",
      };
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports),
        __webpack_require__._(module_exports, {
          BroadcastEmbeddablePopoutHeader: () => _,
          default: () => _,
        });
      var _ = __webpack_require__("chunkid"),
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
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      const _ = (0, _._)((_) => {
        const { appid: _ } = _,
          _ = (0, _._)(),
          _ = (0, _.useRef)({
            include_assets: !0,
            include_release: !0,
          }),
          _ = (0, _._)(_),
          { data: _ } = (0, _._)(_),
          { data: _ } = (0, _._)(_),
          { data: _ } = (0, _._)(_),
          [_, _] = (0, _._)(_, _.current);
        let _ = (0, _._)(
            _().StoreSaleWidgetContainer_mini,
            "StoreSaleWidgetContainer_mini",
          ),
          _ = _().StoreSaleWidgetImage_mini,
          _ = _().StoreSaleImage_mini;
        if (null == _)
          return _.createElement(
            "div",
            {
              className: _,
            },
            _.createElement(_._, {
              size: "medium",
            }),
          );
        if (null == _ || !_.name)
          return _.createElement("div", {
            className: _.StoreSaleWidgetEmptyContainer,
          });
        const _ = 8 != _.type,
          _ = (0, _._)((0, _._)(_), _);
        return _.createElement(
          "div",
          {
            className: _,
          },
          _.createElement(
            "a",
            {
              href: _,
              target: _._.IN_CLIENT ? void 0 : "_blank",
            },
            _.createElement(
              _._,
              {
                _: _,
              },
              _.createElement(
                "div",
                {
                  className: _,
                },
                _ &&
                  _.createElement("img", {
                    className: _,
                    src: (0, _._)(_, "small_capsule"),
                    alt: _.name,
                  }),
              ),
            ),
          ),
          _.createElement(
            "div",
            {
              className: _.StoreSaleBroadcastWidgetRight,
            },
            _.createElement(
              "a",
              {
                href: _,
                target: _._.IN_CLIENT ? void 0 : "_blank",
              },
              _.createElement(
                _._,
                {
                  _: _,
                },
                _.createElement(
                  "div",
                  {
                    className: (0, _._)(
                      _.StoreSaleWidgetTitle,
                      "StoreSaleWidgetTitle",
                    ),
                  },
                  _.name,
                ),
              ),
            ),
            _ &&
              _.createElement(
                "div",
                {
                  className: _.StoreSaleWidgetRelease,
                },
                (0, _._)(_),
              ),
            Boolean(_) &&
              _.createElement(_._, {
                _: _,
                bShowDemoButton: !0,
              }),
          ),
        );
      });
      var _ = __webpack_require__("chunkid");
      function _() {
        let _ = window.GetUsabilityTracker;
        if (_) return _();
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
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_);
      const _ = (0, _._)((_) => {
        const { event: _ } = _,
          _ = _.clanSteamID.GetAccountID(),
          _ = !_ || !_.jsondata || !_.jsondata.broadcast_item_drops_enabled,
          _ = (0, _.useRef)(null),
          [_, _] = (0, _.useState)(
            _ ? _._.GetCreatorHome(_.clanSteamID) : null,
          );
        if (
          ((0, _.useEffect)(() => {
            const _ = _().CancelToken.source();
            _.current = _.cancel;
            return (
              (async () => {
                const _ = _._.InitFromClanID(_),
                  _ = await _._.LoadCreatorHome(_, !1, _);
                _.token.reason || _(_);
              })(),
              () => {
                _.current && _.current("BroadcastDropsDisplay: unmounting");
              }
            );
          }, [_]),
          _ || !_ || !_.BIsLoaded())
        )
          return null;
        const _ =
          _._.COMMUNITY_BASE_URL +
          "gid/" +
          _.jsondata.broadcast_item_drops_details_clan_accountid +
          "/partnerevents/view/" +
          _.jsondata.broadcast_item_drops_details_event_gid;
        return _.createElement(
          "div",
          {
            className: _().item_drop_ctn,
          },
          _.createElement(
            "div",
            null,
            (0, _._)(
              _.GetName().length > 0
                ? _.jsondata.broadcast_item_drops_min_watch_time_minutes % 60 ==
                  0
                  ? "#SalePage_WatchForDrop_Hours_CreatorNamed"
                  : "#SalePage_WatchForDrop_Minutes_CreatorNamed"
                : _.jsondata.broadcast_item_drops_min_watch_time_minutes % 60 ==
                    0
                  ? "#SalePage_WatchForDrop_Hours_Developer"
                  : "#SalePage_WatchForDrop_Minutes_Developer",
              _.jsondata.broadcast_item_drops_min_watch_time_minutes % 60 == 0
                ? _.jsondata.broadcast_item_drops_min_watch_time_minutes / 60
                : _.jsondata.broadcast_item_drops_min_watch_time_minutes,
              _.GetName(),
            ),
            Boolean(_.jsondata.broadcast_item_drops_details_clan_accountid) &&
              _.createElement(
                "a",
                {
                  href: _,
                  target: _._.IN_CLIENT ? "" : "_blank",
                },
                (0, _._)("#SalePage_WatchForDrop_LearnMore"),
              ),
          ),
        );
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_);
      function _(_) {
        const { steamid: _, closeModal: __webpack_require__ } = _;
        return _.createElement(
          _._,
          {
            strDescription: "",
            strTitle: (0, _._)("#Button_Share"),
            onCancel: __webpack_require__,
            onOK: __webpack_require__,
            bAlertDialog: !0,
            modalClassName: "EventDisplay_Share_Dialog",
          },
          _.createElement(_, {
            steamid: _,
          }),
          _.createElement(_, {
            steamid: _,
          }),
        );
      }
      function _(_) {
        const { steamid: _ } = _,
          _ = (function (_) {
            const _ = _._.COMMUNITY_BASE_URL + "broadcast/share/" + _;
            return {
              strFacebookUrl: _ + "?site=facebook&t=" + Math.random(),
              strTwitterUrl: _ + "?site=twitter",
              strRedditUrl: _ + "?site=reddit",
            };
          })(_);
        return _.createElement(
          "div",
          {
            className: (0, _._)(_().FlexRowContainer, _().share_controls_ctn),
          },
          _.createElement(
            _._,
            {
              toolTipContent: (0, _._)("#EventDisplay_Share_OnFaceBook"),
            },
            _.createElement(
              _._,
              {
                href: _.strFacebookUrl,
                className: _().ShareBtn,
              },
              _.createElement("img", {
                className: (0, _._)(_().Button),
                src: _._,
              }),
            ),
          ),
          _.createElement(
            _._,
            {
              toolTipContent: (0, _._)("#EventDisplay_Share_OnTwitter"),
            },
            _.createElement(
              _._,
              {
                href: _.strTwitterUrl,
                className: _().ShareBtn,
              },
              _.createElement("img", {
                className: (0, _._)(_().Button),
                src: _._,
              }),
            ),
          ),
          _.createElement(
            _._,
            {
              toolTipContent: (0, _._)("#EventDisplay_Share_OnReddit"),
            },
            _.createElement(
              _._,
              {
                href: _.strRedditUrl,
                className: _().ShareBtn,
              },
              _.createElement("img", {
                className: (0, _._)(_().Button),
                src: _._,
              }),
            ),
          ),
        );
      }
      function _(_) {
        const { steamid: _ } = _,
          _ = _.createRef(),
          [_, _] = _.useState(""),
          _ = _.createRef(),
          _ = _.useCallback(
            (_) => {
              _.current &&
                _.current.ownerDocument.defaultView.navigator.clipboard
                  .writeText(_.current.value)
                  .then((_) => {
                    _((0, _._)("#EventDisplay_Share_CopiedToClipboard"));
                  })
                  .catch((_) => {
                    _((0, _._)("#EventDisplay_Share_FailedToCopyToClipboard")),
                      console.error("Failed to copy link to clipboard:", _);
                  });
            },
            [_],
          ),
          _ = _._.COMMUNITY_BASE_URL + "broadcast/watch/" + _;
        return _.createElement(
          "div",
          null,
          _.createElement(
            "div",
            {
              className: (0, _._)(_().FlexRowContainer, _().linkField),
              onClick: _,
            },
            _.createElement(
              "span",
              {
                className: _().LinkInputLabel,
              },
              (0, _._)("#EventDisplay_Share_Link"),
            ),
            _.createElement("textarea", {
              className: _().LinkInput,
              ref: _,
              value: _,
              readOnly: !0,
            }),
            Boolean(document.queryCommandSupported("copy")) &&
              _.createElement(
                _._,
                {
                  toolTipContent: (0, _._)("#ToolTip_CopyLinkToClipboard"),
                },
                _.createElement(
                  "div",
                  {
                    className: (0, _._)(_().Button, _().Icon, _().LinkButton),
                  },
                  _.createElement("img", {
                    className: _().ClipboardIcon,
                    src: _._,
                  }),
                ),
              ),
          ),
          _.createElement(
            "div",
            {
              ref: _,
              className: _().ClipboardText,
            },
            _,
          ),
        );
      }
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      const _ = {
        list: [
          {
            appid: 444090,
            url: "https://steam.tv/paladins",
          },
          {
            appid: 386360,
            url: "https://steam.tv/smite",
          },
          {
            appid: 813820,
            url: "https://steam.tv/realmroyale",
          },
          {
            appid: 583950,
            url: "https://steam.tv/artifact",
            broadcasterAccountID: 912972716,
          },
          {
            appid: 570,
            url: "https://steam.tv/dota",
            broadcasterAccountID: 238221269,
          },
          {
            appid: 1025790,
            url: "https://steam.tv/steamawards",
            broadcasterAccountID: 934427243,
          },
          {
            appid: 730,
            url: "https://steam.tv/csgo",
            broadcasterAccountID: 911609735,
          },
        ],
      };
      function _(_) {
        return (function () {
          const _ = (0, _._)();
          return !(0, _._)() && !_;
        })()
          ? _.createElement(_, {
              ..._,
            })
          : null;
      }
      let _ = class extends _.Component {
        constructor() {
          super(...arguments),
            (this.m_cancelSignal = _().CancelToken.source()),
            (this.m_bMarkedUsabilitySeen = !1),
            (this.state = {
              bShowPopoutHeader: !1,
              bExpanded: !1,
              bLoadingPreference: !0,
              style: {
                maxHeight: "0vh",
                overflow: "hidden",
                transition: "max-height 1s ease-in-out",
              },
              innerStyle: {
                maxHeight: "0vh",
                overflow: "hidden",
                transition: "max-height 1s ease-in-out",
              },
              bStartMuted: !0,
            });
        }
        async componentDidMount() {
          await _._.Get().LoadBIsEmbeddedBroadcastHidden(this.m_cancelSignal),
            this.m_cancelSignal.token.reason ||
              this.setState({
                bLoadingPreference: !1,
                bExpanded:
                  !_._.Get().BIsEmbeddedBroadcastHiddenByDefaultUserSettings(),
                innerStyle: {
                  ...this.state.innerStyle,
                  maxHeight:
                    _._.Get().BIsEmbeddedBroadcastHiddenByDefaultUserSettings()
                      ? "0vh"
                      : "100vh",
                },
              }),
            await (this.props.bIsPreview &&
            this.props.accountIDs &&
            !this.props.event.BUsesContentHubForItemSource()
              ? _._.Get().HintLoadEmbeddablePreviewStreams(this.props)
              : _._.Get().HintLoadEmbeddableStreams(this.props)),
            this.props.nAppIDVOD &&
              _._.Get().SetupEmbeddableVOD(
                this.props,
                !this.props.bSkipPreRoll,
              ),
            window.setTimeout(() => {
              this.m_cancelSignal.token.reason ||
                this.setState({
                  style: {
                    ...this.state.style,
                    maxHeight: "100vh",
                  },
                });
            }, 10);
        }
        componentWillUnmount() {
          this.m_cancelSignal.cancel("BroadcastEmbeddable component unmounted");
        }
        ToggleBroadcastExpandShrink() {
          let _ = _._.Get().GetPlayReadyStream(this.props);
          const _ = this.state.bExpanded,
            _ = _._.GetOrCreateBroadcastInfo(_.steamid).m_nAppID;
          (0, _._)(_, _ ? 2 : 3, _.snr),
            _ && _() && _().AddEvent(1005),
            window.setTimeout(
              () =>
                this.setState({
                  innerStyle: {
                    ...this.state.innerStyle,
                    maxHeight: _ ? "0vh" : "100vh",
                  },
                }),
              10,
            ),
            _ ||
              this.setState(
                {
                  bExpanded: !this.state.bExpanded,
                },
                () =>
                  _._.Get().SetEmbeddedStreamCollapsed(!this.state.bExpanded),
              );
        }
        OnShrinkTransitionEnd() {
          "0vh" === this.state.innerStyle.maxHeight &&
            this.setState(
              {
                bExpanded: !1,
              },
              () => _._.Get().SetEmbeddedStreamCollapsed(!0),
            );
        }
        async onStreamSelect(_) {
          this.setState({
            bStartMuted: !1,
          }),
            _._.Get().GetPlayReadyStream(this.props).accountid != _.accountid &&
              (await _._.Get().AttemptToPlayStream(this.props, _));
        }
        async PlayNextNonVOD() {
          this.setState({
            bStartMuted: !1,
          });
          const _ = _._.Get()
            .GetStreams(this.props)
            .filter(
              (_) =>
                !this.props.fnFilterStreams || this.props.fnFilterStreams(_),
            );
          await _._.Get().PlayFromAvailableStreams(this.props, _, !0);
        }
        ConstructSidePanels(_, _) {
          let _ = {
            leftPanel: null,
            rightPanel: null,
            bRightPanelArtworkOrEmpty: !0,
          };
          if (this.props.bWidePlayer) return _;
          const _ = _._.Get().GetConcurrentStreams(this.props) > 1;
          let _ = _._.GetOrCreateBroadcastInfo(_.steamid).m_nAppID,
            _ = _.createElement(_, {
              key: "right" + _,
              ImgUrl: _.right_panel,
            }),
            _ = _.createElement(_, {
              key: "left" + _,
              ImgUrl: _.left_panel,
            });
          if (_ < 11) {
            const _ = _._.GetAppIDListForBroadcasterSteamID(_.steamid);
            _ && 1 === _.length && (_ = _[0]);
          }
          return (
            !(
              (this.props.promotionName ||
                this.props.bIsPreview ||
                this.props.subid ||
                this.props.bundleid) &&
              _ >= 11
            ) ||
              (this.props.event &&
                this.props.event.jsondata.broadcast_force_banner) ||
              ((_ = _.createElement(_, {
                key: "mini" + _.accountid,
                appid: _,
              })),
              (_.bRightPanelArtworkOrEmpty = !1)),
            _ && !_
              ? ((_.leftPanel = _.createElement(_, {
                  broadcastEmbedContext: this.props,
                  key: "selector" + _,
                  curStream: _,
                  onStreamSelect: this.onStreamSelect,
                  fnFilterStreams: this.props.fnFilterStreams,
                  bShowCapsuleArt: this.props.bShowCapsuleArt,
                })),
                (_.rightPanel = _))
              : _
                ? ((_.leftPanel = _.createElement("div", null)),
                  (_.rightPanel = _.createElement(_, {
                    stream: _,
                    orientation: "rightside",
                  })),
                  (_.bRightPanelArtworkOrEmpty = !1))
                : ((_.leftPanel = _), (_.rightPanel = _)),
            _
          );
        }
        MarkBroadcastSeen() {
          this.m_bMarkedUsabilitySeen ||
            ((this.m_bMarkedUsabilitySeen = !0), _() && _().AddEvent(1004));
        }
        render() {
          if (this.state.bLoadingPreference) return null;
          let _ = _._.Get().GetPlayReadyStream(this.props);
          if (_) {
            this.MarkBroadcastSeen();
            let _ = "show" === _._.Get().GetChatVisibility();
            const {
              event: __webpack_require__,
              language: _,
              fnRenderBroadcastContext: _,
            } = this.props;
            __webpack_require__ &&
              (_ = {
                ..._,
                left_panel: __webpack_require__.GetImageURL(
                  "broadcast_left",
                  _ || (0, _._)(_._.LANGUAGE),
                ),
                right_panel: __webpack_require__.GetImageURL(
                  "broadcast_right",
                  _ || (0, _._)(_._.LANGUAGE),
                ),
                store_title: __webpack_require__.GetBroadcastTitle(
                  _ || (0, _._)(_._.LANGUAGE),
                ),
                broadcast_chat_visibility:
                  __webpack_require__.GetBroadcastChatVisibility(),
              });
            let _ = this.ConstructSidePanels(_, _),
              _ = _.store_title ? _.store_title : _.title,
              _ = _._.Get().GetConcurrentStreams(this.props) > 1;
            const _ = () => {
              var _, _;
              _.nAppIDVOD && this.PlayNextNonVOD(),
                null === (_ = (_ = this.props).fnOnVideoEnd) ||
                  void 0 === _ ||
                  __webpack_require__.call(_);
            };
            return _.createElement(
              _.Fragment,
              null,
              _.createElement(
                "div",
                {
                  className: "broadcast_embed_top_ctn_trgt",
                  style: this.state.style,
                },
                _.createElement(
                  "div",
                  {
                    className: (0, _._)({
                      [_().bordered_container]: !0,
                      [_().Event]: Boolean(__webpack_require__),
                      broadcast_brd_ctn_trgt: !0,
                    }),
                  },
                  _.createElement(
                    "div",
                    {
                      className: (0, _._)(
                        _().bordered_title,
                        "bordered_title_trgt",
                      ),
                    },
                    _.createElement(_._, null),
                    _.createElement(
                      "div",
                      {
                        className: _().streamTitle,
                      },
                      _,
                    ),
                    _.createElement(
                      "div",
                      {
                        className: _().bordered_corner_container,
                      },
                      Boolean(!this.state.bExpanded) &&
                        _.createElement(
                          _._,
                          {
                            toolTipContent: (0, _._)(
                              "#StoreBroadcast_Change_store_Broadcast_settings",
                            ),
                          },
                          _.createElement("div", {
                            className: _().broadcast_settings_icon,
                            onClick: () =>
                              window.open(
                                `${_._.STORE_BASE_URL}account/preferences/#store_broadcast_settings`,
                              ),
                          }),
                        ),
                      _.createElement(
                        _._,
                        {
                          toolTipContent: (0, _._)(
                            "#StoreBroadcast_Hide_Tooltip",
                          ),
                        },
                        _.createElement("div", {
                          className: this.state.bExpanded
                            ? _().bordered_corner_expanded
                            : _().bordered_corner_shrinked,
                          onClick: this.ToggleBroadcastExpandShrink,
                        }),
                      ),
                    ),
                    Boolean(_.gamedata_subtitle) &&
                      _.createElement(
                        "div",
                        {
                          className: _().bordered_subtitle,
                        },
                        _.gamedata_subtitle,
                      ),
                  ),
                  Boolean(this.state.bExpanded) &&
                    _.createElement(
                      "div",
                      {
                        className: (0, _._)({
                          [_().container]: !0,
                          embeddable_ctn_trgt: !0,
                          multistream: _,
                          broadcast_right_panel_simple:
                            _.bRightPanelArtworkOrEmpty,
                          broadcast_chat_expanded: _,
                        }),
                        style: {
                          ...this.state.innerStyle,
                        },
                        onTransitionEnd: this.OnShrinkTransitionEnd,
                      },
                      _.createElement(
                        "div",
                        {
                          className: _().LeftPanelCtn,
                        },
                        _.leftPanel,
                      ),
                      _.createElement(_, {
                        stream: _,
                        bStartMuted: this.state.bStartMuted,
                        fnRenderBroadcastContext: _,
                        fnOnVideoEnd: _,
                        bWidePlayer: this.props.bWidePlayer,
                      }),
                      _.createElement(
                        "div",
                        {
                          className: _().RightPanelCtn,
                        },
                        _.rightPanel,
                      ),
                      Boolean(this.state.bExpanded) &&
                        _.createElement(_, {
                          stream: _,
                          bMultistream: _,
                          chatAnnouncementGivewayGID: _.rightPanel
                            ? void 0
                            : this.props.chat_announcement_giveaway,
                        }),
                    ),
                ),
                Boolean(
                  __webpack_require__ &&
                    __webpack_require__.jsondata &&
                    __webpack_require__.jsondata.broadcast_item_drops_enabled,
                ) &&
                  _.createElement(_, {
                    event: __webpack_require__,
                  }),
                _.createElement("div", {
                  className: _().clear_div,
                }),
              ),
            );
          }
          return _.createElement("div", {
            className: "NoBroadcastAvailable",
          });
        }
      };
      (0, _._)([_._], _.prototype, "ToggleBroadcastExpandShrink", null),
        (0, _._)([_._], _.prototype, "OnShrinkTransitionEnd", null),
        (0, _._)([_._], _.prototype, "onStreamSelect", null),
        (0, _._)([_._], _.prototype, "PlayNextNonVOD", null),
        (_ = (0, _._)([_._], _));
      class _ extends _.Component {
        constructor(_) {
          super(_),
            (this.m_iVideoContainerRef = _.createRef()),
            (this.state = {
              bPopout: !1,
              bPreventPopup: window.screen.width <= 768,
            });
        }
        CloseBroadcastPopup() {
          const _ = _._.GetOrCreateBroadcastInfo(
            this.props.stream.steamid,
          ).m_nAppID;
          (0, _._)(_, 7, this.props.stream.snr),
            _() && _().AddEvent(1006),
            this.setState({
              bPopout: !1,
              bPreventPopup: !0,
            });
        }
        OnEnter() {
          !this.state.bPreventPopup &&
            this.state.bPopout &&
            this.setState({
              bPopout: !1,
            });
        }
        OnLeave() {
          this.state.bPreventPopup ||
            this.state.bPopout ||
            this.setState({
              bPopout: !0,
            });
        }
        render() {
          return _.createElement(
            "div",
            {
              className: _().wrapper,
            },
            _.createElement(
              _._,
              {
                onEnter: this.OnEnter,
                onLeave: this.OnLeave,
                onIntersectionChange: (_) => {
                  _.isIntersecting || this.OnLeave();
                },
                className: (0, _._)({
                  [_().video_placeholder]: !0,
                  video_placeholder_trgt: !0,
                  [_().WidePlayer]: this.props.bWidePlayer,
                }),
                ref: this.m_iVideoContainerRef,
              },
              _.createElement(
                "div",
                {
                  className: this.state.bPopout
                    ? _().broadcast_floating
                    : _().video_container,
                },
                this.state.bPopout &&
                  _.createElement(_, {
                    steamIDBroadcast: this.props.stream.steamid,
                    OnPreventPopup: this.CloseBroadcastPopup,
                  }),
                _.createElement(
                  "div",
                  {
                    className: _().BroadcastPlayerContainer,
                  },
                  _.createElement(_.default, {
                    steamIDBroadcast: this.props.stream.steamid,
                    watchLocation: 6,
                    bStartMuted: this.props.bStartMuted,
                    fnRenderBroadcastContext:
                      this.props.fnRenderBroadcastContext,
                    fnOnVideoEnd: this.props.fnOnVideoEnd,
                    nAppIDVOD: this.props.stream.nAppIDVOD,
                  }),
                ),
              ),
            ),
          );
        }
      }
      function _(_) {
        const { stream: _ } = _,
          [__webpack_require__] = (0, _._)(() => [_.steamid]),
          _ = _._.GetOrCreateBroadcastInfo(__webpack_require__).m_nAppID,
          _ = _.list.find(
            (_) =>
              _.appid == _ &&
              (!_.broadcasterAccountID ||
                _.broadcasterAccountID == _.accountid),
          );
        if (_) {
          let _ = _.url;
          return (
            (_._.IN_CLIENT ||
              navigator.userAgent.indexOf("Valve Steam Client") >= 0 ||
              navigator.userAgent.indexOf("Valve Steam GameOverlay") >= 0 ||
              navigator.userAgent.indexOf("Valve Steam Tenfoot") >= 0) &&
              (_ = "steam://openurl/" + _),
            _.createElement(
              "a",
              {
                href: _,
              },
              (0, _._)("#Broadcast_Embed_Watch_With_Frieds_SteamTV"),
            )
          );
        }
        {
          const _ =
            _._.COMMUNITY_BASE_URL + "broadcast/watch/" + __webpack_require__;
          return _.createElement(
            _._,
            {
              toolTipContent: (0, _._)("#BroadcastWatch_View_Broadcast_Page"),
            },
            _.createElement(
              "a",
              {
                href: _,
                className: _().external_link,
              },
              _.createElement(_.GrD, null),
            ),
          );
        }
      }
      (0, _._)([_._], _.prototype, "CloseBroadcastPopup", null),
        (0, _._)([_._], _.prototype, "OnEnter", null),
        (0, _._)([_._], _.prototype, "OnLeave", null);
      let _ = class extends _.Component {
        OnToggleChat(_) {
          _.preventDefault();
          const _ = _._.GetOrCreateBroadcastInfo(
            this.props.stream.steamid,
          ).m_nAppID;
          (0, _._)(
            _,
            "show" === _._.Get().GetChatVisibility() ? 5 : 4,
            this.props.stream.snr,
          ),
            _._.Get().ToggleChatVisibility();
        }
        onWatchBroadcastPage() {
          const _ = _._.GetOrCreateBroadcastInfo(
            this.props.stream.steamid,
          ).m_nAppID;
          (0, _._)(_, 9, this.props.stream.snr);
        }
        render() {
          const _ = "remove" != _._.Get().GetChatVisibility(),
            _ = "hide" === _._.Get().GetChatVisibility(),
            _ = !this.props.stream.nAppIDVOD,
            _ = _;
          Number.parseInt(
            "" +
              _._.GetOrCreateBroadcastInfo(this.props.stream.steamid)
                .m_nViewerCount,
          );
          return _.createElement(
            "div",
            {
              className: (0, _._)(_().viewer_bar, "viewer_bar"),
            },
            _.createElement(
              "div",
              {
                className: (0, _._)(_().viewer_count, "viewer_count"),
              },
              " ",
            ),
            _.createElement(
              "div",
              {
                className: (0, _._)(_().viewer_links, "viewer_links"),
              },
              Boolean(_ && !_ && this.props.bMultistream) &&
                _.createElement(
                  "div",
                  {
                    className: _().chat_link,
                  },
                  _.createElement(
                    "a",
                    {
                      href: "#",
                      className: _().ChatToggle,
                      onClick: this.OnToggleChat,
                    },
                    (0, _._)("#sale_three_section_show_streams"),
                  ),
                ),
              _ &&
                _.createElement(
                  "div",
                  {
                    className: _().chat_link,
                  },
                  _.createElement(_.ROZ, null),
                  _.createElement(
                    "a",
                    {
                      href: "#",
                      className: _().ChatToggle,
                      onClick: this.OnToggleChat,
                    },
                    (0, _._)(
                      _
                        ? "#sale_three_section_show_chat"
                        : "#sale_three_section_hide_chat",
                    ),
                  ),
                ),
              _ &&
                _.createElement(
                  "div",
                  {
                    className: _().chat_link,
                  },
                  _.createElement(_.SYj, null),
                  _.createElement(
                    "a",
                    {
                      href: "#",
                      className: _().ChatToggle,
                      onClick: (_) =>
                        (0, _._)(
                          _.createElement(_, {
                            steamid: this.props.stream.steamid,
                          }),
                          (0, _._)(_),
                        ),
                    },
                    (0, _._)("#Broadcast_ShareBroadcast"),
                  ),
                ),
              _.createElement(
                _._,
                {
                  toolTipContent: (0, _._)(
                    "#StoreBroadcast_Change_store_Broadcast_settings",
                  ),
                },
                _.createElement(
                  "a",
                  {
                    href:
                      _._.STORE_BASE_URL +
                      "account/preferences/#store_broadcast_settings",
                    target: _._.IN_CLIENT ? void 0 : "_blank",
                    className: _().settings_link,
                  },
                  _.createElement(_.wB_, null),
                ),
              ),
              _ &&
                _.createElement(_, {
                  ...this.props,
                }),
            ),
            Boolean(this.props.chatAnnouncementGivewayGID) &&
              _.createElement(_._, {
                gidGiveaway: this.props.chatAnnouncementGivewayGID,
                stream: this.props.stream,
              }),
          );
        }
      };
      (0, _._)([_._], _.prototype, "OnToggleChat", null),
        (0, _._)([_._], _.prototype, "onWatchBroadcastPage", null),
        (_ = (0, _._)([_._], _));
      class _ extends _.Component {
        render() {
          let _ = this.props.ImgUrl;
          return _.createElement(
            "div",
            {
              className: _().SidePanelBackground,
            },
            _ &&
              _.createElement("img", {
                className: _().side_panels,
                src: this.props.ImgUrl,
              }),
            !_ &&
              _.createElement("div", {
                className: _().side_panels,
              }),
          );
        }
      }
      const _ = (0, _._)((_) => {
        const { steamIDBroadcast: _ } = _;
        let _ = _._.GetOrCreateBroadcastInfo(_).m_nAppID;
        _ = _ != _._ ? _ : 0;
        const _ = (0, _._)(_),
          { data: _ } = (0, _._)(_);
        return _.createElement(
          "div",
          {
            className: [_().PopOutVideoTitleBar, _().NoSeslect].join(" "),
          },
          Boolean(_)
            ? _.createElement(
                _._,
                {
                  _: _,
                  className: _().PopOutVideoTitleText,
                },
                (0, _._)("#StoreBroadcast_Detault_popout_Title"),
              )
            : _.createElement(
                "div",
                {
                  className: _().PopOutVideoTitleText,
                },
                (0, _._)("#StoreBroadcast_Detault_popout_Title"),
              ),
          _.createElement(
            _._,
            {
              toolTipContent: (0, _._)("#StoreBroadcast_close_broadcast_popup"),
            },
            _.createElement(
              "button",
              {
                className: _().PopOutVideoCloseButton,
                onClick: _.OnPreventPopup,
              },
              _.createElement(_._, null),
            ),
          ),
        );
      });
      function _(_, _) {
        var _;
        const _ = _._.GetOrCreateBroadcastInfo(_.steamid).m_nAppID,
          _ = _._.Get().GetApp(_);
        return _ &&
          (null === (_ = null == _ ? void 0 : _.GetAssets()) || void 0 === _
            ? void 0
            : __webpack_require__.GetHeaderURL())
          ? parseInt(_().strStreamIconCapsuleArtHeight)
          : parseInt(_().strStreamIconScreenshotArtHeight);
      }
      function _(_) {
        const {
            curStream: _,
            onStreamSelect: __webpack_require__,
            fnFilterStreams: _,
            bShowCapsuleArt: _,
            broadcastEmbedContext: _,
          } = _,
          _ = (0, _.useRef)(void 0),
          _ = (0, _.useMemo)(() => {
            const _ = _._.Get()
              .GetStreams(_)
              .filter((_) => !_ || _(_));
            return (0, _._)(_), _;
          }, [_, _]);
        return (
          (0, _.useEffect)(() => {
            if (_ && _.current) {
              const _ = _.map(
                (_) => _._.GetOrCreateBroadcastInfo(_.steamid).m_nAppID,
              ).filter(Boolean);
              _._.Get()
                .QueueMultipleAppRequests(_, {
                  include_assets: !0,
                })
                .then(() => {
                  if (_.current) {
                    let _ = 0;
                    for (const _ of _) {
                      if (_.accountid == _.accountid) break;
                      _ += _(_, _);
                    }
                    _.current.scrollTop = _;
                  }
                });
            }
          }, [_, _, _.accountid, _]),
          _.createElement(
            "div",
            {
              ref: _,
              className: (0, _._)({
                [_().side_panels]: !0,
                side_panels: !0,
                [_().multistream]: !0,
                [_().scrollingstreams]: _.length > 3,
              }),
            },
            _.createElement(
              "div",
              {
                className: _().MultiStreamCtn,
              },
              _.map((_) => {
                var _;
                return _.createElement(_, {
                  key:
                    null !== (_ = _.accountid) && void 0 !== _ ? _ : _.steamid,
                  stream: _,
                  bSelected: _.accountid == _.accountid,
                  onStreamSelect: __webpack_require__,
                  bShowCapsuleArt: _,
                });
              }),
            ),
          )
        );
      }
      function _(_) {
        const {
          onStreamSelect: _,
          bSelected: __webpack_require__,
          stream: _,
          bShowCapsuleArt: _,
        } = _;
        let _ = (0, _._)(
          () => _._.GetOrCreateBroadcastInfo(_.steamid).m_nAppID,
        );
        _ = _ != _._ ? _ : 0;
        const _ = (0, _._)(_),
          { data: _ } = (0, _._)(_),
          { data: _ } = (0, _._)(_);
        if (!(0, _._)(_)) return null;
        const _ = _ && _ && (0, _._)(_, "header"),
          _ = Number.parseInt("" + _.viewer_count),
          _ = !Number.isNaN(_),
          _ = !!_.nAppIDVOD && (null == _ ? void 0 : _.name);
        return _.createElement(
          "div",
          {
            className: (0, _._)({
              [_().stream_icon_and_viewer_container]: !0,
              [_().stream_featured]:
                _.current_selection_priority == _._.k_eFeatured,
              [_().display_capsule_art]: Boolean(_),
            }),
          },
          _.createElement(
            _._,
            {
              _: _,
              hoverClassName: _().StreamCapsule,
            },
            _.createElement(
              _._,
              {
                className: (0, _._)(
                  _().stream_icon_container,
                  __webpack_require__ && _().stream_selected,
                ),
                onClick: () => _ && _(_),
                rootMargin: "100px 0px 100px 0px",
              },
              _.createElement(_, {
                strThumbnail: _.thumbnail_http_address,
                bSelected: __webpack_require__,
                strCapsuleArtURL: _,
              }),
            ),
          ),
          _.createElement(
            "div",
            {
              className: (0, _._)(_().viewer_count, !_ && _().vod_title),
            },
            _
              ? _.createElement(
                  _.Fragment,
                  null,
                  _.createElement(_.y_e, null),
                  _.createElement(
                    "div",
                    {
                      className: _().ViewerNum,
                    },
                    (0, _._)(_),
                  ),
                )
              : _,
          ),
        );
      }
      function _(_) {
        const {
            strCapsuleArtURL: _,
            strThumbnail: __webpack_require__,
            bSelected: _,
          } = _,
          _ = _ ? _().stream_icon_selected : _().stream_icon;
        if (_) {
          const _ = [_];
          return _.createElement(
            _.Fragment,
            null,
            _.createElement("img", {
              className: (0, _._)(_, _().stream_icon_hide_on_hover),
              src: _,
            }),
            _.createElement(_._, {
              className: (0, _._)(_, _().stream_icon_show_on_hover),
              srcs: _,
            }),
          );
        }
        return _.createElement("img", {
          className: _,
          src: __webpack_require__,
        });
      }
      function _(_) {
        const { stream: _, orientation: __webpack_require__ } = _,
          _ = "below" == __webpack_require__,
          [_, _] = (0, _._)(() => {
            var _;
            return [
              _._.GetBroadcast(_.steamid),
              null === (_ = _._.GetBroadcast(_.steamid)) || void 0 === _
                ? void 0
                : _.m_ulBroadcastID,
            ];
          }),
          _ = (0, _._)(() => _.steamid);
        return _
          ? _.createElement(
              "div",
              {
                className: (0, _._)({
                  [_().chat_below_container]: _,
                  [_().chat_rightside_container]: !_,
                  [_().store_chat_ctn]: !0,
                }),
              },
              _.createElement(
                "div",
                {
                  className: _().ChatContainer,
                },
                _.createElement(_._, {
                  emoticonStore: _._,
                  watchLocation: 6,
                  steamID: _,
                  broadcastID: _,
                }),
              ),
            )
          : null;
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      const _ =
        "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIxNDAwcHgiIGhlaWdodD0iMTQwOXB4IiB2aWV3Qm94PSIwIDE4MDEuNSAxNDAwIDE0MDkiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAxODAxLjUgMTQwMCAxNDA5IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHBhdGggaWQ9Imljb25tb25zdHItbGluay0xXzFfIiBmaWxsPSIjRkZGRkZGIiBkPSJNMzYyLjM1MywyMzEwLjU4OGMxNDguMjM1LTE0OC4yMzUsMzg3LjA2LTE0OC4yMzUsNTI3LjA2LDAKCWMxNi40NzEsMTYuNDcxLDMyLjk0MSw0MS4xNzcsNDkuNDExLDU3LjY0N0w4MDcuMDU5LDI1MDBjLTQxLjE3Ni04Mi4zNTMtMTMxLjc2NS0xMzEuNzY1LTIyMi4zNTMtMTE1LjI5NAoJYy00MS4xNzcsOC4yMzUtNzQuMTE4LDI0LjcwNi05OC44MjMsNDkuNDExbC0yNDcuMDU5LDI0Ny4wNmMtNzQuMTE4LDc0LjExNy03NC4xMTgsMTk3LjY0NiwwLDI4MAoJYzc0LjExOCw3NC4xMTcsMTk3LjY0Nyw3NC4xMTcsMjgwLDBsMCwwbDc0LjExOC03NC4xMThjNzQuMTE3LDI0LjcwNiwxNDguMjM1LDQxLjE3NywyMjIuMzUzLDMyLjk0MWwtMTcyLjk0LDE3Mi45NDEKCWMtMTQ4LjIzNSwxNDguMjM1LTM4Ny4wNiwxNDguMjM1LTUyNy4wNiwwcy0xNDguMjM1LTM4Ny4wNTksMC01MjcuMDU5QzEwNy4wNTksMjU1Ny42NDcsMzYyLjM1MywyMzEwLjU4OCwzNjIuMzUzLDIzMTAuNTg4egoJIE03NTcuNjQ2LDE5MDcuMDU5TDU5Mi45NDEsMjA4MGM3NC4xMTctOC4yMzUsMTQ4LjIzNSw4LjIzNSwyMTQuMTE3LDMyLjk0MWw3NC4xMTgtNzQuMTE4Yzc0LjExNy03NC4xMTcsMTk3LjY0Ni03NC4xMTcsMjgwLDAKCWM4Mi4zNTMsNzQuMTE4LDc0LjExNywxOTcuNjQ3LDAsMjgwbC0yNTUuMjk0LDI0Ny4wNmMtNzQuMTE4LDc0LjExNy0xOTcuNjQ3LDc0LjExNy0yODAsMAoJYy04LjIzNS0xNi40NzEtMjQuNzA2LTQxLjE3Ny0zMi45NDEtNjUuODgzbC0xMzEuNzY1LDEzMS43NjVjMTYuNDcxLDI0LjcwNiwzMi45NCw0MS4xNzcsNDkuNDExLDU3LjY0NwoJYzE0OC4yMzUsMTQ4LjIzNSwzODcuMDU5LDE0OC4yMzUsNTI3LjA2LDBsMCwwbDI0Ny4wNTktMjQ3LjA2YzE0OC4yMzUtMTQ4LjIzNSwxNDguMjM1LTM4Ny4wNTksMC01MjcuMDU5CglTOTA1Ljg4MywxNzY3LjA1OSw3NTcuNjQ2LDE5MDcuMDU5TDc1Ny42NDYsMTkwNy4wNTlMNzU3LjY0NiwxOTA3LjA1OXoiLz4KPC9zdmc+Cg==";
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      const _ =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAc9JREFUeNrsmz1Lw1AUhnP8qB+Qkk0pItbVxcX/IM6Cky7iFH+Jk79BwclBB3+AszgUwdVNBxFaCw1E7fW9cAep5pa0NiT3vgdeLjRJm/Ocm/NRiCilAp9tKvDcCIAACIAAsiyEzqAepCqqnvEhzHJSLGVQX7jvSKDPoYO8ADS9BUcAJNBiXgCudUjCJEgABPDLZip2v12obwIXur4DdBK+MeVrHaqJSB2KzKqT2izUgLZd2wH30CF8bFnTusgnlhdUsjmXAFxBe3Au9TEJ3hXpfNkA9M22T4v80TIBuIbzDz73ARe+9wG31pqo1DSWGNqBlgcO16oO4A3b/3XIOafQ8b9PSCWZBh8BYMMSfd3wvEPzrk6DH0OON8Z0vvLDkHAaJAACIICJJJeCy+Aa1Pnj8y+Uwa6lDOpA1S3fewSdjJJIi26EOnC0nTtKInpQalsALfn+CDQJgAA8BYDnP8IS+bwDmuNcXHQVWDURG7QUmf7ZEmV9nysZh7dcGIdbALBpAaD7h6dJDFRshQmAAAiAAAiAAAiAAAiAAAiAAAiAAAjgpyUO+ZmMAuDSIQCZvtj+E4zNuhtU98WJxDgfZ50gfHOUSZAACIAAPLZvAQYAZ32YkpymkAcAAAAASUVORK5CYII=";
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      const _ =
        __webpack_require__._ +
        "images/applications/community/reddit_large.png?v=valveisgoodatcaching";
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      const _ =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABApJREFUeNrsm2tIFUEUx2evRl5ISnugZuULIwoVtIykIIkgowdmERERUh9CqQ/Rh+gFCX4oKCIjyi8VQtETsoLoARViJEokRYlako9Iy4JKfLX9hz2CwXrv7t6ZvbvcPfDjwr3uzJ7/npk5c3ZUVFVlkWw+FuHmCeAJ4AngCeAJ4AkQwRbtgnucBzJALPgNPoJ28FdI6zwTdCDp4DToUvWtF1SDHIPtFUz0m5GLp9noeAw4BYZV43YFxOm05QNF4DmosirADNABMm1wPgE0qdasHWSAKJALKkAr/TYIUq0KcIAa4Y0lS3Q+HjSroVk/+Knz/eFAfQe7sfpxDckU4bYqx2opKsb6UcwIMElnLPLhsECw8xskOc9F9RPFoIaGyX/9B8oDknSWybmgHhQJXOaOSlg634AP4AH4Dm6Bh6DVzDKYE0ThSoqSUJ5+lmqPVUx0D4EioDeIygdBA8gL4UmtsiGROhcoygIJ8AUMBGk8G7wC1SDRws1lSXb+OCjngW5FgFHw0kAnCthF6ekZkGLiBhMlOT4ENoNjoW6GrpvoNAbsBW3gLtgKpgS5ZkCSAD3gpojdYA34ZmGHuQ5cpWtrSZilJNJ46w/3TksxUBbfDS4K6m+ElqdO0A3mg2WSlsFsUQLwMX4DbHLRNr/eqLCBhkAm2EgC7ABPXCRAr9E/DFQQ8YM7FK61FAUJYKELBGgTIUA3fSaDPS6rdBkWIFgm+M6lpb4mUUXRey50fhA0ihLgLBh2mQANlAkKEaCTNhNusvuiEyE/7QmyXCJAhqhJcHy+vtZMo2G0RrP3afTNEB8KBeCpwwUwnbIrJo/I8KxwJzgCUh3mfD/lLH9kRAC3eLCIabW1FWA/bTudYufNOm82AuJAF02KzIFPPw38MHuhz2Qnlxw69iutOG9lDuDDoAVMd5Dzb0EuZYBMZgRw4zV2XuoadYjz/BV5qVXnrQjA7THY7pAU+STTqtKWTQnhpCjPCy6D9DA5/wIUMq3MFhYBxtJkXncvY9pJDrusAywBX0NtSBF0VthHe4Xl9FnK5J0/6qPoaxF146Imo9dUQFkj2flCUc6LFIDvwK7RBDlbYtjzCGsW2Wiop8TyafxvA1ESx3wdKGHa+0oWTgGmgsVgNVjPtBcbMo1PUCdo8yVl2dUTYBY4BOYw7VxeLGWAKbTbUmya6d8z7aVrnVyJ9Q8ORINy0KPab31gn4DDF4YItgz66SmU2RDun0AVuAB+2ZVQGM0DeNivBFtAMZgpcBvLi5j8LfQjJur4q+REiM/2eSRIPiU+aQZzhc+UL/DS9TOmFVtHWBhNVCY4mWmnypJo2IwdjBikp8xTVl5XHGIOM8X7t7kIN08ATwBPAE8ATwBPgAi2fwIMABJGc33swO3GAAAAAElFTkSuQmCC";
    },
  },
]);

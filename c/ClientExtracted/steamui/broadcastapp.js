"use strict";
(() => {
  (self.webpackChunksteamui = self.webpackChunksteamui || []).push([
    [7653],
    {
      chunkid: (module, module_exports, __webpack_require__) => {
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
          _ = "10978408",
          _ = Object.defineProperty,
          _ = Object.getOwnPropertyDescriptor,
          _ = (_, _, _, _) => {
            for (
              var _ = _ > 1 ? void 0 : _ ? _(_, _) : _, _ = _.length - 1, _;
              _ >= 0;
              _--
            )
              (_ = _[_]) && (_ = (_ ? _(_, _, _) : _(_)) || _);
            return _ && _ && _(_, _, _), _;
          };
        const _ = ({ group: _, onClick: _ }) => {
          const _ = _.watching_broadcast_steamid;
          return (0, _.jsx)("button", {
            className:
              "ChatRoomListGroupItem NoChannels WatchPartyGroup DialogButton watchHowButton",
            onClick: _,
            children: (0, _.jsxs)("div", {
              className: "ChatRoomListGroupItem_header",
              children: [
                (0, _.jsx)(_._, {
                  group: _,
                  small: !0,
                }),
                (0, _.jsxs)("div", {
                  className: "groupNameStatusContainer",
                  children: [
                    (0, _.jsx)("div", {
                      className: "chatRoomName",
                      children: _.name,
                    }),
                    _ &&
                      (0, _.jsx)("div", {
                        className: "chatRoomDetails",
                        children: (0, _._)(
                          "#Broadcast_WatchParty_Viewers_NoneActive",
                        ),
                      }),
                  ],
                }),
              ],
            }),
          });
        };
        class _ extends _.Component {
          CreateWatchParty(_ = !1) {
            const {
              browserContext: _,
              ownerWindow: _,
              broadcastAccountId: _,
              initialFriend: _,
            } = this.props;
            this.Close();
            const _ = _ && _ ? [_.accountid] : [];
            _(_, _ || window, _, _);
          }
          WatchAlone() {
            this.Close();
          }
          UpgradeExisting(_) {
            const {
              broadcastAccountId: _,
              browserContext: _,
              broadcastChannelID: _,
              broadcastTabId: _,
            } = this.props;
            this.Close(),
              _
                ? _.SetChatRoomGroupWatchingBroadcast(void 0, _)
                : _.SetChatRoomGroupWatchingBroadcast(_);
            const _ = _._.UIStore.ShowAndOrActivateChatRoomGroup(_, _, !0);
            _ && _._.UIStore.CloseTabByID(_),
              this.props.bIsNewSteamTVDialog || _.ShowBroadcast();
          }
          Close() {
            const { closeModal: _ } = this.props;
            _ && _();
          }
          render() {
            const { closeModal: _, initialFriend: _ } = this.props,
              _ = _._.ChatStore.currentChatRoomGroups.filter((_) =>
                _.BCanIAssociateBroadcast(),
              ),
              _ = _;
            return (0, _.jsx)("div", {
              className: "chatModalCover",
              children: (0, _.jsx)(_._, {
                onEscKeypress: _,
                children: (0, _.jsxs)(_._, {
                  className: "watchPartyDialog",
                  children: [
                    (0, _.jsxs)(_._, {
                      children: [
                        (0, _.jsx)("div", {
                          className: "watchPartyPrompt",
                          children: (0, _._)("#Broadcast_WatchPrompt"),
                        }),
                        (0, _.jsxs)(_._, {
                          children: [
                            !this.props.bIsNewSteamTVDialog &&
                              (0, _.jsx)(_._, {
                                svgicon: _.Gv$,
                                className: "watchHowButton",
                                onClick: this.WatchAlone,
                                children: (0, _._)("#Broadcast_WatchAlone"),
                              }),
                            _ &&
                              (0, _.jsxs)(_._, {
                                className: "watchHowButton",
                                onClick: () => this.CreateWatchParty(!0),
                                children: [
                                  (0, _.jsx)(_._, {
                                    friend: _,
                                    context: null,
                                    bLarge: !1,
                                  }),
                                  (0, _._)(
                                    "#Broadcast_WatchWith",
                                    (0, _.jsxs)("span", {
                                      className: "highlight",
                                      children: [" ", _.display_name],
                                    }),
                                  ),
                                ],
                              }),
                            _.length !== 0 &&
                              (0, _.jsxs)(_.Fragment, {
                                children: [
                                  (0, _.jsx)(_._, {
                                    children: (0, _._)(
                                      "#Broadcast_WatchWithExistingWatchParty",
                                    ),
                                  }),
                                  _.map((_) =>
                                    (0, _.jsx)(
                                      _,
                                      {
                                        group: _,
                                        onClick: () => this.UpgradeExisting(_),
                                      },
                                      _.unique_id,
                                    ),
                                  ),
                                ],
                              }),
                            (0, _.jsx)(_._, {
                              className: "watchHowButton newWatchGroup",
                              svgicon: _.u9R,
                              onClick: () => this.CreateWatchParty(!1),
                              children: (0, _._)(
                                "#Broadcast_LinkBroadcastToGroup_New",
                              ),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, _.jsx)(_._, {}),
                  ],
                }),
              }),
            });
          }
        }
        _([_._], _.prototype, "WatchAlone", 1),
          _([_._], _.prototype, "Close", 1);
        function _(_, _, _, _) {
          (0, _._)(
            (0, _.jsx)(_._, {
              browserContext: _,
              bHideChatNameEntry: !1,
              vecInvitePlayers: _,
              chatViewToReplace: void 0,
              creationOptions: {
                unBroadcastAccountId: _,
              },
              strTitle: (0, _._)("#Broadcast_CreateWatchParty"),
            }),
            _,
            "CreateChatDialog",
            {
              strTitle: (0, _._)("#Broadcast_CreateWatchParty"),
              popupWidth: 450,
              popupHeight: 600,
            },
            (0, _._)(_),
          );
        }
        var _ = __webpack_require__("chunkid"),
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
          _ = "10978408",
          _ = Object.defineProperty,
          _ = Object.getOwnPropertyDescriptor,
          _ = (_, _, _, _) => {
            for (
              var _ = _ > 1 ? void 0 : _ ? _(_, _) : _, _ = _.length - 1, _;
              _ >= 0;
              _--
            )
              (_ = _[_]) && (_ = (_ ? _(_, _, _) : _(_)) || _);
            return _ && _ && _(_, _, _), _;
          };
        const _ = 2500;
        var _ = ((_) => (
          (_[(_.Checking = 0)] = "Checking"),
          (_[(_.CheckTimedOut = 1)] = "CheckTimedOut"),
          (_[(_.NotLoggedIn = 2)] = "NotLoggedIn"),
          _
        ))(_ || {});
        class _ {
          constructor() {
            (0, _._)(this);
          }
          m_fnLaunchChat;
          m_iTimeoutLogin = void 0;
          m_eLogonState = 0;
          m_steamID = void 0;
          m_reactRoot;
          Init(_) {
            (this.m_fnLaunchChat = _),
              (this.m_steamID = _._.steamid),
              window.addEventListener("message", this.HandlePostMessage),
              (this.m_reactRoot = _.createRoot(
                document.getElementById("friendslist-container"),
              )),
              this.m_reactRoot.render(
                _.createElement(_, {
                  app: this,
                }),
              ),
              (this.m_iTimeoutLogin = window.setTimeout(() => {
                this.m_eLogonState == 0 && (this.m_eLogonState = 1);
              }, _));
          }
          LaunchChat() {
            this.m_reactRoot.unmount(),
              window.removeEventListener("message", this.HandlePostMessage),
              window.clearTimeout(this.m_iTimeoutLogin),
              (0, _._)(_._.steamid),
              this.m_fnLaunchChat();
          }
          GetLoginURL() {
            return `${_._.STORE_BASE_URL}login/?steamtv`;
          }
          BIsPerformingLogonCheck() {
            return this.m_eLogonState == 0 || this.m_eLogonState == 1;
          }
          BReadyToRender() {
            return this.m_eLogonState != 0;
          }
          GetSteamIDWatched() {
            return this.m_steamID;
          }
          ExtractOrigin(_) {
            return _.replace(/^(https?:\/\/[^/]*).*$/, "$1");
          }
          HandlePostMessage(_) {
            if (
              _.origin != this.ExtractOrigin(_._.STORE_BASE_URL) &&
              _.origin != this.ExtractOrigin(_._.CHAT_BASE_URL)
            ) {
              console.warn(
                `Ignoring message from untrusted domain "${_.origin}"`,
              );
              return;
            }
            let _ = _.data;
            if (_) {
              if (_.msg == "OnLoginButtonClicked")
                console.log("Login button clicked"),
                  (window.location.href = _());
              else if (_.command == "LoginNeeded") this.m_eLogonState = 2;
              else if (_.command == "LogonComplete") {
                this.LaunchChat();
                return;
              }
            }
          }
        }
        _([_._], _.prototype, "m_eLogonState", 2),
          _([_._], _.prototype, "m_steamID", 2),
          _([_._], _.prototype, "LaunchChat", 1),
          _([_._.bound], _.prototype, "HandlePostMessage", 1);
        let _ = class extends _.Component {
          m_broadcastInfo = null;
          constructor(_) {
            super(_),
              (this.m_broadcastInfo = _.BroadcastWatchStore.StartInfo(
                this.props.app.GetSteamIDWatched(),
              )),
              (this.state = {
                bChatCollapsed: !1,
                bTheaterMode: !1,
              });
          }
          componentWillUnmount() {
            this.m_broadcastInfo &&
              (_.BroadcastWatchStore.StopInfo(this.m_broadcastInfo),
              (this.m_broadcastInfo = null));
          }
          ToggleChat() {
            this.setState({
              bChatCollapsed: !this.state.bChatCollapsed,
            });
          }
          ToggleTheaterMode() {
            this.setState({
              bTheaterMode: !this.state.bTheaterMode,
            });
          }
          render() {
            const _ = this.props.app;
            let _ = this.m_broadcastInfo,
              _ = _();
            const _ = () => (window.location.href = _());
            return (0, _.jsxs)(_, {
              children: [
                _.BReadyToRender() &&
                  (0, _.jsxs)("div", {
                    className:
                      "StandalonePlayer" +
                      (this.state.bTheaterMode ? " TheaterMode" : ""),
                    children: [
                      (0, _.jsx)(_._, {
                        className: "FullpageBroadcastBackdrop",
                        src: _.m_strThumbnailUrl,
                        draggable: !1,
                        duration: 2500,
                      }),
                      (0, _.jsxs)("div", {
                        className: "BroadcastTab",
                        children: [
                          (0, _.jsxs)("div", {
                            className: "StandalonePlayerHeader",
                            children: [
                              (0, _.jsx)("div", {
                                className: "STV_Logo",
                                children: (0, _.jsx)(_.P7C, {}),
                              }),
                              (0, _.jsxs)("div", {
                                className:
                                  "BroadcastTab_HeaderRow" +
                                  (this.state.bChatCollapsed
                                    ? " ChatCollapsed"
                                    : ""),
                                children: [
                                  (0, _.jsx)(_, {
                                    onClick: _,
                                  }),
                                  (0, _.jsx)(_, {
                                    onClick: this.ToggleChat,
                                    hideIcon: this.state.bChatCollapsed,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, _.jsx)(_, {
                            steamID: _.GetSteamIDWatched(),
                            watchLocation: _,
                            bHideChat: this.state.bChatCollapsed,
                            onTheaterMode: this.ToggleTheaterMode,
                          }),
                        ],
                      }),
                    ],
                  }),
                (0, _.jsx)(_, {
                  app: _,
                }),
              ],
            });
          }
        };
        _([_._], _.prototype, "ToggleChat", 1),
          _([_._], _.prototype, "ToggleTheaterMode", 1),
          (_ = _([_._], _));
        function _() {
          const _ = (0, _._)("loyalty_webapi_token", "application_config");
          return new _._(_._.WEBAPI_BASE_URL, _);
        }
        function _(_) {
          const { children: _ } = _,
            _ = _.useCallback(() => _._?.CMInterface, []),
            _ = (0, _._)(_.useCallback(() => new _._(), [])),
            _ = (0, _._)(_);
          return (0, _.jsx)(_._, {
            children: (0, _.jsx)(_._, {
              children: (0, _.jsx)(_._, {
                children: _._.logged_in
                  ? (0, _.jsx)(_._, {
                      useActiveCMInterface: _,
                      useStorage: _,
                      children: _,
                    })
                  : (0, _.jsx)(_._, {
                      useActiveSteamInterface: _,
                      useStorage: _,
                      children: _,
                    }),
              }),
            }),
          });
        }
        let _ = (0, _._)(({ app: _ }) =>
          _.BIsPerformingLogonCheck()
            ? (0, _.jsx)("div", {
                children: (0, _.jsx)("iframe", {
                  style: {
                    display: "none",
                  },
                  src: _.GetLoginURL(),
                }),
              })
            : null,
        );
        function _(_) {
          return (0, _.jsxs)("div", {
            className: "BroadcastButton WatchWithFriends",
            onClick: _.onClick,
            children: [
              (0, _.jsx)(_.y_e, {}),
              (0, _._)("#Broadcast_WatchWithFriends"),
            ],
          });
        }
        function _(_) {
          return (0, _.jsx)("div", {
            className: "ToggleBroadcastChat",
            title: (0, _._)("#Broadcast_ToggleChat"),
            onClick: _.onClick,
            children: (0, _.jsx)(_.K7s, {
              showChat: _.hideIcon,
            }),
          });
        }
        function _() {
          return _._.STEAM_TV ? _._._ : _._._;
        }
        let _ = class extends _.Component {
          m_broadcastInfo = null;
          constructor(_) {
            super(_);
            let _ = this.props.broadcastView
              .GetSteamID()
              .ConvertTo64BitString();
            (this.m_broadcastInfo = _.BroadcastWatchStore.StartInfo(_)),
              (this.state = {
                bChatCollapsed: !1,
              });
          }
          componentWillUnmount() {
            this.m_broadcastInfo &&
              (_.BroadcastWatchStore.StopInfo(this.m_broadcastInfo),
              (this.m_broadcastInfo = null));
          }
          OnWatchWithFriends() {
            this.props.broadcastView.ShowWatchPromptDialog();
          }
          ToggleChat() {
            this.setState({
              bChatCollapsed: !this.state.bChatCollapsed,
            });
          }
          ToggleTheaterMode() {
            _._.UIStore.SetTheaterMode(!_._.UIStore.GetTheaterMode());
          }
          render() {
            const { broadcastView: _, popup: _, style: _ } = this.props,
              _ = _.GetSteamID().ConvertTo64BitString();
            let _ = _();
            const _ = _.m_bShowWatchPromptDialog
              ? (0, _.jsx)(_, {
                  closeModal: () => _.HideWatchPromptDialog(),
                  broadcastAccountId: _.GetSteamID().GetAccountID(),
                  broadcastTabId: _.GetUniqueID(),
                  initialFriend: _.m_watchPromptInitialFriend,
                  browserContext: _._,
                  ownerWindow: _,
                })
              : null;
            return (0, _.jsxs)("div", {
              className: "BroadcastTab",
              style: _,
              children: [
                (0, _.jsx)(_._, {
                  className: "FullpageBroadcastBackdrop",
                  src: this.m_broadcastInfo.m_strThumbnailUrl,
                  draggable: !1,
                  duration: 2500,
                }),
                (0, _.jsxs)("div", {
                  className: "BroadcastTab_OverBackground",
                  children: [
                    (0, _.jsx)("div", {
                      className: "BroadcastTabHeaderContainer",
                      children: (0, _.jsxs)("div", {
                        className:
                          "BroadcastTab_HeaderRow" +
                          (this.state.bChatCollapsed ? " ChatCollapsed" : ""),
                        children: [
                          (0, _.jsx)(_, {
                            onClick: this.OnWatchWithFriends,
                          }),
                          (0, _.jsx)(_, {
                            onClick: this.ToggleChat,
                            hideIcon: this.state.bChatCollapsed,
                          }),
                        ],
                      }),
                    }),
                    (0, _.jsx)(_, {
                      steamID: _,
                      watchLocation: _,
                      bHideChat: this.state.bChatCollapsed,
                      onTheaterMode: this.ToggleTheaterMode,
                      children: _,
                    }),
                  ],
                }),
              ],
            });
          }
        };
        _([_._], _.prototype, "OnWatchWithFriends", 1),
          _([_._], _.prototype, "ToggleChat", 1),
          _([_._], _.prototype, "ToggleTheaterMode", 1),
          (_ = _([_._], _));
        let _ = class extends _.Component {
          m_strLocalSteamID = "";
          m_refBroadcastContainer = _.createRef();
          m_elMainContent;
          constructor(_) {
            super(_),
              (0, _._)(this),
              (this.state = {
                info: null,
              });
          }
          componentDidMount() {
            _._.stream["76561198208088121"] && _._.LANGUAGE === "chinese"
              ? this.OnLocalStreamChange("76561198208088121")
              : _._.stream["76561198207552741"] &&
                _._.LANGUAGE === "russian" &&
                this.OnLocalStreamChange("76561198207552741");
          }
          static getDerivedStateFromProps(_, _) {
            return !_.info || _.info.m_steamIDBroadcast !== _.steamID
              ? (_.info && _.BroadcastWatchStore.StopInfo(_.info),
                {
                  info: _.BroadcastWatchStore.StartInfo(_.steamID),
                })
              : null;
          }
          componentWillUnmount() {
            this.state.info && _.BroadcastWatchStore.StopInfo(this.state.info);
          }
          OnLocalStreamChange(_) {
            this.m_strLocalSteamID = _;
          }
          SetMainContentRef(_) {
            this.m_elMainContent = _;
          }
          CalculateBroadcastSectionStyles(_) {
            if (this.props.bHideChat)
              return {
                width: "100%",
                height: "100%",
              };
            let _, _;
            _._ &&
              ((_ = _._.UIDisplayPrefs.nWatchPartyBroadcastHeightPercentage),
              (_ = _._.UIDisplayPrefs.nWatchPartyBroadcastWidthPercentage));
            const _ = {};
            if (_) {
              const _ = _ || 66;
              if (((_.height = `${_}%`), this.m_elMainContent)) {
                const { clientWidth: _, clientHeight: _ } =
                    this.m_elMainContent,
                  _ = (9 / 16) * _ + 50,
                  _ = (0, _._)(_, 1, (_ / _) * 100);
                _.height = `${_}%`;
              }
            } else
              (_.width = _ ? `${_}%` : "66%"),
                (_.minWidth = _ ? `${_}%` : "66%"),
                (_.maxWidth = "calc( 100% - 316px )"),
                (_.overflowY = "auto");
            return _;
          }
          OnGrabberMouseDown(_) {
            let _ = _.currentTarget.ownerDocument.defaultView;
            _.addEventListener("mousemove", this.HandleMouseMove),
              _.addEventListener("mouseup", this.UnregisterDragEvents),
              this.setState({
                bDraggingChatGrabber: !0,
              });
          }
          HandleMouseMove(_) {
            _.preventDefault(), _.stopPropagation();
            let _ =
                this.m_refBroadcastContainer.current.getBoundingClientRect(),
              _ =
                this.m_refBroadcastContainer.current.parentElement.getBoundingClientRect();
            const _ = !1,
              _ = _ ? _.top : _.left,
              _ = _ ? _.clientY : _.clientX,
              _ = _ ? _.height : _.width,
              _ = (0, _._)(((_ - _) / _) * 100, 1, 100),
              _ = _
                ? "nWatchPartyBroadcastHeightPercentage"
                : "nWatchPartyBroadcastWidthPercentage";
            _._.SetUIDisplayPref(_, _);
          }
          UnregisterDragEvents(_) {
            _.view.removeEventListener("mousemove", this.HandleMouseMove),
              _.view.removeEventListener("mouseup", this.UnregisterDragEvents),
              this.setState({
                bDraggingChatGrabber: !1,
              });
          }
          render() {
            let { steamID: _, children: _ } = this.props,
              _ = this.m_strLocalSteamID || _,
              _ = this.state.info.m_bIsOnline,
              _ = null;
            const _ = this.CalculateBroadcastSectionStyles(!1);
            (_.flexGrow = this.props.bHideChat ? 1 : null),
              _._.bValid &&
                (_ = (0, _.jsx)(_, {
                  info: _._,
                }));
            const _ = (0, _.jsx)("div", {
                className: "LoginDiv",
                children: (0, _.jsx)("a", {
                  className: _().ChatLoginButton,
                  href: `${_._.STORE_BASE_URL}login?steamtv=1&allow_password=1`,
                  children: (0, _._)("#BroadcastChat_Login"),
                }),
              }),
              _ = _.BroadcastWatchStore.GetBroadcast(_)
                ? _.BroadcastWatchStore.GetBroadcast(_).m_ulBroadcastID
                : "0";
            return (0, _.jsxs)("div", {
              className: "BroadcastContainer",
              children: [
                (0, _.jsxs)("div", {
                  className: "BroadcastContainerSection",
                  ref: this.m_refBroadcastContainer,
                  style: _,
                  children: [
                    (0, _.jsxs)("div", {
                      className: "BroadcastContainerSectionVideoContainer",
                      children: [
                        _ &&
                          (0, _.jsx)(
                            _.default,
                            {
                              steamIDBroadcast: _,
                              watchLocation: this.props.watchLocation,
                              onTheaterMode: this.props.onTheaterMode,
                            },
                            _,
                          ),
                        !_ && _,
                        (0, _.jsx)("div", {
                          className: "videoContainerSizer",
                        }),
                      ],
                    }),
                    _,
                    (0, _.jsx)("div", {
                      className: "BroadcastDetailsSection",
                      children: (0, _.jsx)(_.BroadcastDetails, {
                        steamID: _,
                        onLocalStreamChange: this.OnLocalStreamChange,
                        bVerticalBroadcastChat: !0,
                      }),
                    }),
                  ],
                }),
                !this.props.bHideChat &&
                  (0, _.jsx)("div", {
                    className: "BroadcastChatDivider horizontal",
                    onMouseDown: this.OnGrabberMouseDown,
                  }),
                (0, _.jsxs)("div", {
                  className: "BroadcastChatDiv",
                  style: {
                    display: this.props.bHideChat ? "none" : "flex",
                    flexDirection: "column",
                    width: "100%",
                    minWidth: "300px",
                  },
                  children: [
                    (0, _.jsx)(_._, {
                      emoticonStore: _._ ? _._.ChatStore.EmoticonStore : null,
                      broadcastID: _,
                      steamID: _,
                      watchLocation: this.props.watchLocation,
                      hidden: this.props.bHideChat,
                    }),
                    _._ && _._.logged_in ? null : _,
                  ],
                }),
              ],
            });
          }
        };
        _([_._], _.prototype, "m_strLocalSteamID", 2),
          _([_._], _.prototype, "OnLocalStreamChange", 1),
          _([_._], _.prototype, "SetMainContentRef", 1),
          _([_._], _.prototype, "OnGrabberMouseDown", 1),
          _([_._], _.prototype, "HandleMouseMove", 1),
          _([_._], _.prototype, "UnregisterDragEvents", 1),
          (_ = _([_._], _));
        function _(_) {
          let _ = `url( "${_._.CHAT_BASE_URL + _.info.offlineImage}" )`;
          return (0, _.jsx)("div", {
            style: {
              backgroundImage: _,
            },
            className: "BroadcastOffline",
          });
        }
        function _() {
          return `${_._.STORE_BASE_URL}login?steamtv=1`;
        }
        var _ = __webpack_require__("chunkid"),
          _ = "10978408",
          _ = Object.defineProperty,
          _ = Object.getOwnPropertyDescriptor,
          _ = (_, _, _, _) => {
            for (
              var _ = _ > 1 ? void 0 : _ ? _(_, _) : _, _ = _.length - 1, _;
              _ >= 0;
              _--
            )
              (_ = _[_]) && (_ = (_ ? _(_, _, _) : _(_)) || _);
            return _ && _ && _(_, _, _), _;
          };
        let _ = class extends _.Component {
          render() {
            let _ = this.props.broadcastView;
            if (!_ || !(_ instanceof _._)) return null;
            let _ = {};
            return (
              this.props.isActive || (_.display = "none"),
              (0, _.jsx)(_, {
                style: _,
                broadcastView: _,
                popup: this.props.popup,
              })
            );
          }
        };
        _ = _([_._], _);
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        __webpack_require__._(module_exports),
          __webpack_require__._(module_exports, {
            default: () => _,
          });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = "10978408";
        const _ = _.forwardRef(function (
          {
            steamID: _,
            localSteamID: _,
            watchLocation: _,
            bWebRTC: _,
            style: _,
            onRequestClose: _,
            actions: _,
            onTheaterMode: _,
            onLocalStreamChange: _,
            bVerticalBroadcastChat: _,
          },
          _,
        ) {
          const _ = _ || _;
          return (0, _.jsxs)("div", {
            ref: _,
            style: {
              display: "flex",
              flexDirection: "column",
              ..._,
            },
            children: [
              (0, _.jsxs)("div", {
                className: "BroadcastSection",
                children: [
                  (0, _.jsx)(
                    _.default,
                    {
                      steamIDBroadcast: _,
                      watchLocation: _,
                      bWebRTC: _,
                      onRequestClose: _,
                      actions: _,
                      onTheaterMode: _,
                      onOpenLinkInNewWindow: _._,
                    },
                    _,
                  ),
                  (0, _.jsx)("div", {
                    className: "videoContainerSizer",
                  }),
                ],
              }),
              (0, _.jsx)("div", {
                className: "BroadcastDetailsSection",
                children: (0, _.jsx)(_.BroadcastDetails, {
                  steamID: _,
                  onLocalStreamChange: _,
                  bVerticalBroadcastChat: _,
                }),
              }),
            ],
          });
        });
      },
    },
  ]);
})();

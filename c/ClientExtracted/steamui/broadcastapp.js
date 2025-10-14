"use strict";
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
        _ = __webpack_require__("chunkid");
      const _ = ({ group: _, onClick: _ }) => {
        const _ = _.watching_broadcast_steamid;
        return _.createElement(
          "button",
          {
            className:
              "ChatRoomListGroupItem NoChannels WatchPartyGroup DialogButton watchHowButton",
            onClick: _,
          },
          _.createElement(
            "div",
            {
              className: "ChatRoomListGroupItem_header",
            },
            _.createElement(_._, {
              group: _,
              small: !0,
            }),
            _.createElement(
              "div",
              {
                className: "groupNameStatusContainer",
              },
              _.createElement(
                "div",
                {
                  className: "chatRoomName",
                },
                _.name,
              ),
              _ &&
                _.createElement(
                  "div",
                  {
                    className: "chatRoomDetails",
                  },
                  (0, _._)("#Broadcast_WatchParty_Viewers_NoneActive"),
                ),
            ),
          ),
        );
      };
      class _ extends _.Component {
        CreateWatchParty(_ = !1) {
          const {
            browserContext: _,
            ownerWindow: __webpack_require__,
            broadcastAccountId: _,
            initialFriend: _,
          } = this.props;
          this.Close();
          const _ = _ && _ ? [_.accountid] : [];
          !(function (_, _, _, _) {
            (0, _._)(
              _.createElement(_._, {
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
          })(_, __webpack_require__ || window, _, _);
        }
        WatchAlone() {
          this.Close();
        }
        UpgradeExisting(_) {
          const {
            broadcastAccountId: _,
            browserContext: __webpack_require__,
            broadcastChannelID: _,
            broadcastTabId: _,
          } = this.props;
          this.Close(),
            _
              ? _.SetChatRoomGroupWatchingBroadcast(void 0, _)
              : _.SetChatRoomGroupWatchingBroadcast(_);
          const _ = _._.UIStore.ShowAndOrActivateChatRoomGroup(
            __webpack_require__,
            _,
            !0,
          );
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
          return _.createElement(
            "div",
            {
              className: "chatModalCover",
            },
            _.createElement(
              _._,
              {
                onEscKeypress: _,
              },
              _.createElement(
                _._,
                {
                  className: "watchPartyDialog",
                },
                _.createElement(
                  _._,
                  null,
                  _.createElement(
                    "div",
                    {
                      className: "watchPartyPrompt",
                    },
                    (0, _._)("#Broadcast_WatchPrompt"),
                  ),
                  _.createElement(
                    _._,
                    null,
                    !this.props.bIsNewSteamTVDialog &&
                      _.createElement(
                        _._,
                        {
                          svgicon: _.Gv$,
                          className: "watchHowButton",
                          onClick: this.WatchAlone,
                        },
                        (0, _._)("#Broadcast_WatchAlone"),
                      ),
                    _ &&
                      _.createElement(
                        _._,
                        {
                          className: "watchHowButton",
                          onClick: () => this.CreateWatchParty(!0),
                        },
                        _.createElement(_._, {
                          friend: _,
                          context: null,
                          bLarge: !1,
                        }),
                        (0, _._)(
                          "#Broadcast_WatchWith",
                          _.createElement(
                            "span",
                            {
                              className: "highlight",
                            },
                            " ",
                            _.display_name,
                          ),
                        ),
                      ),
                    0 !== _.length &&
                      _.createElement(
                        _.Fragment,
                        null,
                        _.createElement(
                          _._,
                          null,
                          (0, _._)("#Broadcast_WatchWithExistingWatchParty"),
                        ),
                        __webpack_require__.map((_) =>
                          _.createElement(_, {
                            key: _.unique_id,
                            group: _,
                            onClick: () => this.UpgradeExisting(_),
                          }),
                        ),
                      ),
                    _.createElement(
                      _._,
                      {
                        className: "watchHowButton newWatchGroup",
                        svgicon: _.u9R,
                        onClick: () => this.CreateWatchParty(!1),
                      },
                      (0, _._)("#Broadcast_LinkBroadcastToGroup_New"),
                    ),
                  ),
                ),
                _.createElement(_._, null),
              ),
            ),
          );
        }
      }
      (0, _._)([_._], _.prototype, "WatchAlone", null),
        (0, _._)([_._], _.prototype, "Close", null);
      var _ = __webpack_require__("chunkid"),
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
        _ = __webpack_require__("chunkid");
      class _ {
        constructor() {
          (0, _._)(this);
        }
        m_fnLaunchChat;
        m_iTimeoutLogin = void 0;
        m_eLogonState = 0;
        m_bLogonDialogVisisible = !1;
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
              0 == this.m_eLogonState && (this.m_eLogonState = 1);
            }, 2500));
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
          return 0 == this.m_eLogonState || 1 == this.m_eLogonState;
        }
        BIsLogonDialogVisible() {
          return this.m_bLogonDialogVisisible;
        }
        ShowLogonDialog() {
          this.m_bLogonDialogVisisible = !0;
        }
        BReadyToRender() {
          return 0 != this.m_eLogonState;
        }
        DismissLogonDialog() {
          this.m_bLogonDialogVisisible = !1;
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
          )
            return void console.warn(
              `Ignoring message from untrusted domain "${_.origin}"`,
            );
          let _ = _.data;
          if (_)
            if ("OnLoginButtonClicked" == _.msg)
              console.log("Login button clicked"),
                (this.m_bLogonDialogVisisible = !0);
            else if ("LoginNeeded" == _.command) this.m_eLogonState = 2;
            else if ("LogonComplete" == _.command)
              return void this.LaunchChat();
        }
      }
      (0, _._)([_._], _.prototype, "m_eLogonState", void 0),
        (0, _._)([_._], _.prototype, "m_bLogonDialogVisisible", void 0),
        (0, _._)([_._], _.prototype, "m_steamID", void 0),
        (0, _._)([_._], _.prototype, "LaunchChat", null),
        (0, _._)([_._.bound], _.prototype, "HandlePostMessage", null);
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
        OnShowLogin() {
          this.props.app.ShowLogonDialog();
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
          return _.createElement(
            _,
            null,
            _.BReadyToRender() &&
              _.createElement(
                "div",
                {
                  className:
                    "StandalonePlayer" +
                    (this.state.bTheaterMode ? " TheaterMode" : ""),
                },
                _.createElement(_._, {
                  className: "FullpageBroadcastBackdrop",
                  src: _.m_strThumbnailUrl,
                  draggable: !1,
                  duration: 2500,
                }),
                _.createElement(
                  "div",
                  {
                    className: "BroadcastTab",
                  },
                  _.createElement(
                    "div",
                    {
                      className: "StandalonePlayerHeader",
                    },
                    _.createElement(
                      "div",
                      {
                        className: "STV_Logo",
                      },
                      _.createElement(_.P7C, null),
                    ),
                    _.createElement(
                      "div",
                      {
                        className:
                          "BroadcastTab_HeaderRow" +
                          (this.state.bChatCollapsed ? " ChatCollapsed" : ""),
                      },
                      _.createElement(_, {
                        onClick: this.OnShowLogin,
                      }),
                      _.createElement(_, {
                        onClick: this.ToggleChat,
                        hideIcon: this.state.bChatCollapsed,
                      }),
                    ),
                  ),
                  _.createElement(
                    _,
                    {
                      steamID: _.GetSteamIDWatched(),
                      watchLocation: _,
                      bHideChat: this.state.bChatCollapsed,
                      onTheaterMode: this.ToggleTheaterMode,
                    },
                    _.createElement(_, {
                      app: _,
                    }),
                  ),
                ),
              ),
            _.createElement(_, {
              app: _,
            }),
          );
        }
      };
      function _() {
        const _ = (0, _._)("loyalty_webapi_token", "application_config");
        return new _._(_._.WEBAPI_BASE_URL, _);
      }
      function _(_) {
        const { children: _ } = _,
          _ = _.useCallback(() => _._?.CMInterface, []),
          _ = (0, _._)(_.useCallback(() => new _._(), [])),
          _ = (0, _._)(_);
        return _.createElement(
          _._,
          null,
          _.createElement(
            _._,
            null,
            _._.logged_in
              ? _.createElement(
                  _._,
                  {
                    useActiveCMInterface: _,
                    useStorage: _,
                  },
                  _,
                )
              : _.createElement(
                  _._,
                  {
                    useActiveSteamInterface: _,
                    useStorage: _,
                  },
                  _,
                ),
          ),
        );
      }
      (0, _._)([_._], _.prototype, "OnShowLogin", null),
        (0, _._)([_._], _.prototype, "ToggleChat", null),
        (0, _._)([_._], _.prototype, "ToggleTheaterMode", null),
        (_ = (0, _._)([_._], _));
      let _ = (0, _._)(({ app: _ }) =>
        _.BIsPerformingLogonCheck()
          ? _.createElement(
              "div",
              null,
              _.createElement("iframe", {
                style: {
                  display: "none",
                },
                src: _.GetLoginURL(),
              }),
            )
          : null,
      );
      function _(_) {
        return _.createElement(
          "div",
          {
            className: "BroadcastButton WatchWithFriends",
            onClick: _.onClick,
          },
          _.createElement(_.y_e, null),
          (0, _._)("#Broadcast_WatchWithFriends"),
        );
      }
      function _(_) {
        return _.createElement(
          "div",
          {
            className: "ToggleBroadcastChat",
            title: (0, _._)("#Broadcast_ToggleChat"),
            onClick: _.onClick,
          },
          _.createElement(_.K7s, {
            showChat: _.hideIcon,
          }),
        );
      }
      function _() {
        return _._.STEAM_TV ? 1 : 3;
      }
      let _ = class extends _.Component {
        m_broadcastInfo = null;
        constructor(_) {
          super(_);
          let _ = this.props.broadcastView.GetSteamID().ConvertTo64BitString();
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
          const {
              broadcastView: _,
              popup: _,
              style: __webpack_require__,
            } = this.props,
            _ = _.GetSteamID().ConvertTo64BitString();
          let _ = _();
          const _ = _.m_bShowWatchPromptDialog
            ? _.createElement(_, {
                closeModal: () => _.HideWatchPromptDialog(),
                broadcastAccountId: _.GetSteamID().GetAccountID(),
                broadcastTabId: _.GetUniqueID(),
                initialFriend: _.m_watchPromptInitialFriend,
                browserContext: _._,
                ownerWindow: _,
              })
            : null;
          return _.createElement(
            "div",
            {
              className: "BroadcastTab",
              style: __webpack_require__,
            },
            _.createElement(_._, {
              className: "FullpageBroadcastBackdrop",
              src: this.m_broadcastInfo.m_strThumbnailUrl,
              draggable: !1,
              duration: 2500,
            }),
            _.createElement(
              "div",
              {
                className: "BroadcastTab_OverBackground",
              },
              _.createElement(
                "div",
                {
                  className: "BroadcastTabHeaderContainer",
                },
                _.createElement(
                  "div",
                  {
                    className:
                      "BroadcastTab_HeaderRow" +
                      (this.state.bChatCollapsed ? " ChatCollapsed" : ""),
                  },
                  _.createElement(_, {
                    onClick: this.OnWatchWithFriends,
                  }),
                  _.createElement(_, {
                    onClick: this.ToggleChat,
                    hideIcon: this.state.bChatCollapsed,
                  }),
                ),
              ),
              _.createElement(
                _,
                {
                  steamID: _,
                  watchLocation: _,
                  bHideChat: this.state.bChatCollapsed,
                  onTheaterMode: this.ToggleTheaterMode,
                },
                _,
              ),
            ),
          );
        }
      };
      (0, _._)([_._], _.prototype, "OnWatchWithFriends", null),
        (0, _._)([_._], _.prototype, "ToggleChat", null),
        (0, _._)([_._], _.prototype, "ToggleTheaterMode", null),
        (_ = (0, _._)([_._], _));
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
          _._.stream["76561198208088121"] && "chinese" === _._.LANGUAGE
            ? this.OnLocalStreamChange("76561198208088121")
            : _._.stream["76561198207552741"] &&
              "russian" === _._.LANGUAGE &&
              this.OnLocalStreamChange("76561198207552741");
        }
        static getDerivedStateFromProps(_, _) {
          if (!_.info || _.info.m_steamIDBroadcast !== _.steamID) {
            _.info && _.BroadcastWatchStore.StopInfo(_.info);
            return {
              info: _.BroadcastWatchStore.StartInfo(_.steamID),
            };
          }
          return null;
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
              const { clientWidth: _, clientHeight: _ } = this.m_elMainContent,
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
          let _ = this.m_refBroadcastContainer.current.getBoundingClientRect(),
            _ =
              this.m_refBroadcastContainer.current.parentElement.getBoundingClientRect();
          const _ = _.left,
            _ = _.clientX,
            _ = _.width,
            _ = (0, _._)(((_ - _) / _) * 100, 1, 100);
          _._.SetUIDisplayPref("nWatchPartyBroadcastWidthPercentage", _);
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
              (_ = _.createElement(_, {
                info: _._,
              }));
          const _ = new _(),
            _ = _.createElement(
              "div",
              {
                className: "LoginDiv",
              },
              _.createElement(
                "a",
                {
                  onClick: () => _.ShowLogonDialog(),
                  className: _().ChatLoginButton,
                  href: "#",
                },
                (0, _._)("#BroadcastChat_Login"),
              ),
              _.createElement(_, {
                app: _,
              }),
            ),
            _ = _.BroadcastWatchStore.GetBroadcast(_)
              ? _.BroadcastWatchStore.GetBroadcast(_).m_ulBroadcastID
              : "0";
          return _.createElement(
            "div",
            {
              className: "BroadcastContainer",
            },
            _.createElement(
              "div",
              {
                className: "BroadcastContainerSection",
                ref: this.m_refBroadcastContainer,
                style: _,
              },
              _.createElement(
                "div",
                {
                  className: "BroadcastContainerSectionVideoContainer",
                },
                _ &&
                  _.createElement(_.default, {
                    key: _,
                    steamIDBroadcast: _,
                    watchLocation: this.props.watchLocation,
                    onTheaterMode: this.props.onTheaterMode,
                  }),
                !_ && _,
                _.createElement("div", {
                  className: "videoContainerSizer",
                }),
              ),
              _,
              _.createElement(
                "div",
                {
                  className: "BroadcastDetailsSection",
                },
                _.createElement(_.BroadcastDetails, {
                  steamID: _,
                  onLocalStreamChange: this.OnLocalStreamChange,
                  bVerticalBroadcastChat: !0,
                }),
              ),
            ),
            !this.props.bHideChat &&
              _.createElement("div", {
                className: "BroadcastChatDivider horizontal",
                onMouseDown: this.OnGrabberMouseDown,
              }),
            _.createElement(
              "div",
              {
                className: "BroadcastChatDiv",
                style: {
                  display: this.props.bHideChat ? "none" : "flex",
                  flexDirection: "column",
                  width: "100%",
                  minWidth: "300px",
                },
              },
              _.createElement(_._, {
                emoticonStore: _._ ? _._.ChatStore.EmoticonStore : null,
                broadcastID: _,
                steamID: _,
                watchLocation: this.props.watchLocation,
                hidden: this.props.bHideChat,
              }),
              _._ && _._.logged_in ? null : _,
            ),
          );
        }
      };
      function _(_) {
        let _ = `url( "${_._.CHAT_BASE_URL + _.info.offlineImage}" )`;
        return _.createElement("div", {
          style: {
            backgroundImage: _,
          },
          className: "BroadcastOffline",
        });
      }
      (0, _._)([_._], _.prototype, "m_strLocalSteamID", void 0),
        (0, _._)([_._], _.prototype, "OnLocalStreamChange", null),
        (0, _._)([_._], _.prototype, "SetMainContentRef", null),
        (0, _._)([_._], _.prototype, "OnGrabberMouseDown", null),
        (0, _._)([_._], _.prototype, "HandleMouseMove", null),
        (0, _._)([_._], _.prototype, "UnregisterDragEvents", null),
        (_ = (0, _._)([_._], _));
      class _ extends _.Component {
        Dismiss() {
          this.props.app.DismissLogonDialog();
        }
        render() {
          return _.createElement(
            _._,
            {
              onEscKeypress: this.Dismiss,
            },
            _.createElement(
              _._,
              {
                className: "SteamTVLoginDialog",
              },
              _.createElement("iframe", {
                className: "steamTVLogin",
                src: this.props.app.GetLoginURL(),
              }),
            ),
          );
        }
      }
      (0, _._)([_._], _.prototype, "Dismiss", null);
      let _ = class extends _.Component {
        render() {
          if (!this.props.app.BIsLogonDialogVisible()) return null;
          let _ = _.createElement(_, {
            app: this.props.app,
          });
          return _.createElement(
            "div",
            {
              className: "FullModalOverlay",
            },
            _.createElement("div", {
              className: "ModalOverlayContent ModalOverlayBackground",
            }),
            _.createElement(
              "div",
              {
                className: "ModalOverlayContent active",
              },
              _,
            ),
          );
        }
      };
      _ = (0, _._)([_._], _);
      var _ = __webpack_require__("chunkid");
      let _ = class extends _.Component {
        render() {
          let _ = this.props.broadcastView;
          if (!(_ && _ instanceof _._)) return null;
          let _ = {};
          return (
            this.props.isActive || (_.display = "none"),
            _.createElement(_, {
              style: _,
              broadcastView: _,
              popup: this.props.popup,
            })
          );
        }
      };
      _ = (0, _._)([_._], _);
      const _ = _;
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports),
        __webpack_require__._(module_exports, {
          default: () => _,
        });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      const _ = _.forwardRef(function (
        {
          steamID: _,
          localSteamID: _,
          watchLocation: __webpack_require__,
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
        return _.createElement(
          "div",
          {
            ref: _,
            style: {
              display: "flex",
              flexDirection: "column",
              ..._,
            },
          },
          _.createElement(
            "div",
            {
              className: "BroadcastSection",
            },
            _.createElement(_.default, {
              key: _,
              steamIDBroadcast: _,
              watchLocation: __webpack_require__,
              bWebRTC: _,
              onRequestClose: _,
              actions: _,
              onTheaterMode: _,
              onOpenLinkInNewWindow: _._,
            }),
            _.createElement("div", {
              className: "videoContainerSizer",
            }),
          ),
          _.createElement(
            "div",
            {
              className: "BroadcastDetailsSection",
            },
            _.createElement(_.BroadcastDetails, {
              steamID: _,
              onLocalStreamChange: _,
              bVerticalBroadcastChat: _,
            }),
          ),
        );
      });
    },
  },
]);

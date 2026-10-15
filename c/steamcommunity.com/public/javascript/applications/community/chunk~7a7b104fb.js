(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [53256],
    {
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
          _ = __webpack_require__._(_);
        const _ = () =>
            (0, _.jsx)("div", {
              className: _().FriendsListInsetShadowCtn,
              children: (0, _.jsx)("div", {
                className: _().FriendListInsetShadowTop,
              }),
            }),
          _ = () =>
            (0, _.jsx)("div", {
              className: _().FriendsListInsetShadowCtn,
              children: (0, _.jsx)("div", {
                className: _().FriendListInsetShadowBottom,
              }),
            });
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
          _ = Object.defineProperty,
          _ = Object.getOwnPropertyDescriptor,
          _ = (_, _, _) =>
            _ in _
              ? _(_, _, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: _,
                })
              : (_[_] = _),
          _ = (_, _, _, _) => {
            for (
              var _ = _ > 1 ? void 0 : _ ? _(_, _) : _, _ = _.length - 1, _;
              _ >= 0;
              _--
            )
              (_ = _[_]) && (_ = (_ ? _(_, _, _) : _(_)) || _);
            return _ && _ && _(_, _, _), _;
          },
          _ = (_, _, _) => _(_, typeof _ != "symbol" ? _ + "" : _, _);
        const _ = new RegExp("\u02D0([^\u02D0]*)\u02D0", "g"),
          _ = null,
          _ = new RegExp(
            "^https?://(?:[^/?#]+?\\.)?(?:valvesoftware|steamcommunity|steampowered)\\.com(?:/?#|$)",
            "i",
          );
        function _(_, _, _) {
          return _
            ? "presenter"
            : _.GetBroadcastSteamID() === _
              ? "broadcaster"
              : _.BIsUserBroadcastModerator(_)
                ? "moderator"
                : "";
        }
        const _ = (_) => {
            const { userType: _, msg: _, presenterInfo: _ } = _;
            if (_ === "presenter")
              return (0, _.jsx)("span", {
                children: (0, _.jsx)(_._, {
                  name: _.name,
                  title: _.title,
                  photo: _.photo,
                  company: _.company,
                  bioString: _.bio,
                  children: (0, _.jsx)("a", {
                    className: (0, _._)(_().MessageName, _().MessagePresenter),
                    href: _._.COMMUNITY_BASE_URL + "profiles/" + _.steamid,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: _.persona_name,
                  }),
                }),
              });
            {
              let _ = null;
              return (
                _ === "broadcaster"
                  ? (_ = _().MessageBroadcaster)
                  : _ === "moderator" && (_ = _().MessageModerator),
                (0, _.jsx)("span", {
                  children: (0, _.jsx)("a", {
                    className: (0, _._)(_().MessageName, _),
                    href: _._.COMMUNITY_BASE_URL + "profiles/" + _.steamid,
                    "data-miniprofile": "s" + _.steamid,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: _.persona_name,
                  }),
                })
              );
            }
          },
          _ = (_) => {
            switch (_.userType) {
              case "presenter":
                return (0, _.jsx)(_._, {
                  toolTipContent: (0, _._)(
                    "#BroadcastChat_Role_Presenter_ttip",
                  ),
                  children: (0, _.jsx)("span", {
                    className: _().RoleFlairContainer,
                    children: (0, _.jsx)(_.NCC, {}),
                  }),
                });
              case "moderator":
                return (0, _.jsx)(_._, {
                  toolTipContent: (0, _._)(
                    "#BroadcastChat_Role_Moderatorr_ttip",
                  ),
                  children: (0, _.jsx)("span", {
                    className: _().RoleFlairContainer,
                    children: (0, _.jsx)(_.$4X, {}),
                  }),
                });
              case "broadcaster":
                return (0, _.jsx)(_._, {
                  toolTipContent: (0, _._)(
                    "#BroadcastChat_Role_Broadcaster_ttip",
                  ),
                  children: (0, _.jsx)("span", {
                    className: _().RoleFlairContainer,
                    children: (0, _.jsx)(_.Gkr, {}),
                  }),
                });
              default:
                return null;
            }
          };
        let _ = class extends _.Component {
          constructor(_) {
            super(_),
              _(this, "m_chat", null),
              _(this, "messagesContainer", _.createRef()),
              (0, _._)(this);
          }
          componentDidMount() {
            this.StartChat();
          }
          componentDidUpdate(_) {
            this.m_chat &&
              this.m_chat.m_bAutoScroll &&
              this.ScrollToNewestMessages(),
              (this.props.steamID !== _.steamID ||
                this.props.broadcastID !== _.broadcastID ||
                this.props.broadcastChannelID !== _.broadcastChannelID) &&
                this.StartChat();
          }
          componentWillUnmount() {
            this.m_chat && this.m_chat.Stop();
          }
          StartChat() {
            if (
              (this.m_chat && this.m_chat.Stop(),
              (this.m_chat = _._.Get().GetOrCreateChat(
                this.props.broadcastChannelID,
                this.props.steamID,
              )),
              this.props.broadcastChannelID)
            )
              this.m_chat.StartForChannel(this.props.broadcastChannelID);
            else if (
              this.props.steamID &&
              this.props.steamID &&
              (this.props.broadcastID || this.props.globalChat)
            ) {
              let _ = this.props.broadcastID || "0";
              this.m_chat.StartForSteamID(this.props.steamID, _),
                this.ScrollToNewestMessages();
            }
          }
          IsTrustedDomain(_) {
            return !!_.match(_);
          }
          AddLinksEmoticons(_, _) {
            let _ = _;
            _ && (_ = this.m_chat.GetUserEmoticons());
            let _ = _.split(_);
            const _ = [];
            for (let _ = 0; _ < _.length; _ += 1)
              _ % 2 === 1
                ? _.push(
                    (0, _.jsx)(
                      _._,
                      {
                        emoticon: _[_],
                        large: !0,
                      },
                      _,
                    ),
                  )
                : _.push(_[_]);
            return _;
          }
          HandleScroll(_) {
            const _ = this.props.bInvertLayout
              ? _.currentTarget.scrollTop < 6
              : _.currentTarget.scrollTop + _.currentTarget.clientHeight >=
                _.currentTarget.scrollHeight - 6;
            this.m_chat && (this.m_chat.m_bAutoScroll = _);
          }
          ScrollToNewestMessages() {
            this.messagesContainer &&
              this.messagesContainer.current &&
              (this.messagesContainer.current.scrollTop = this.props
                .bInvertLayout
                ? 0
                : this.messagesContainer.current.scrollHeight);
          }
          OnContextMenu(_, _) {
            if (_.type !== _._.Chat) return null;
            const _ = [],
              _ = this.m_chat.IsUserBroadcaster(this.m_chat.GetUserSteamID()),
              _ = this.m_chat.BIsUserBroadcastModerator(
                this.m_chat.GetUserSteamID(),
              );
            return (
              (_._ && _._.is_support) || _ || _
                ? _.push(
                    (0, _.jsx)(
                      _._,
                      {
                        onSelected: () =>
                          this.m_chat.RemoveUserMessagesServer(
                            _.steamid,
                            _.persona_name,
                          ),
                        children: (0, _._)("#BroadcastChat_RemoveMessages"),
                      },
                      "remove",
                    ),
                    (0, _.jsx)(
                      _._,
                      {
                        onSelected: () =>
                          this.m_chat.UpdateUserChatBan(
                            _.steamid,
                            _._._,
                            12,
                            !1,
                            _.persona_name,
                          ),
                        children: (0, _._)("#BroadcastChat_half_Mute"),
                      },
                      "updatebanh",
                    ),
                    (0, _.jsx)(
                      _._,
                      {
                        onSelected: () =>
                          this.m_chat.UpdateUserChatBan(
                            _.steamid,
                            _._._,
                            24,
                            !1,
                            _.persona_name,
                          ),
                        children: (0, _._)("#BroadcastChat_day_Mute"),
                      },
                      "updateband",
                    ),
                    (0, _.jsx)(
                      _._,
                      {
                        onSelected: () =>
                          this.m_chat.UpdateUserChatBan(
                            _.steamid,
                            _._._,
                            168,
                            !1,
                            _.persona_name,
                          ),
                        children: (0, _._)("#BroadcastChat_week_Mute"),
                      },
                      "updatebanw",
                    ),
                    (0, _.jsx)(
                      _._,
                      {
                        onSelected: () =>
                          this.m_chat.UpdateUserChatBan(
                            _.steamid,
                            _._._,
                            0,
                            !0,
                            _.persona_name,
                          ),
                        children: (0, _._)("#BroadcastChat_perm_Mute"),
                      },
                      "updatebanp",
                    ),
                    (0, _.jsx)(
                      _._,
                      {
                        onSelected: () =>
                          this.m_chat.UpdateUserChatBan(
                            _.steamid,
                            _._._,
                            0,
                            !1,
                            _.persona_name,
                            !0,
                          ),
                        children: (0, _._)("#BroadcastChat_Unmute"),
                      },
                      "removeban",
                    ),
                  )
                : this.m_chat.IsUserMutedLocally(_.steamid)
                  ? _.push(
                      (0, _.jsx)(
                        _._,
                        {
                          onSelected: () =>
                            this.m_chat.UnmuteUserForSession(
                              _.steamid,
                              _.persona_name,
                            ),
                          children: (0, _._)("#BroadcastChat_UnmuteLocal"),
                        },
                        "unmuteuser",
                      ),
                    )
                  : _.push(
                      (0, _.jsx)(
                        _._,
                        {
                          onSelected: () =>
                            this.m_chat.MuteUserForSession(
                              _.steamid,
                              _.persona_name,
                            ),
                          children: (0, _._)("#BroadcastChat_MuteLocal"),
                        },
                        "muteuser",
                      ),
                    ),
              ((_._ && _._.is_support) ||
                this.m_chat.IsUserBroadcaster(this.m_chat.GetUserSteamID())) &&
                _.steamid &&
                (this.m_chat.BIsUserBroadcastModerator(_.steamid)
                  ? _.push(
                      (0, _.jsx)(
                        _._,
                        {
                          onSelected: () =>
                            this.m_chat.UpdateBroadcastChatModerator(
                              _.steamid,
                              !1,
                              _.persona_name,
                            ),
                          children: (0, _._)("#BroadcastChat_Remove_Moderator"),
                        },
                        "removemod",
                      ),
                    )
                  : _.push(
                      (0, _.jsx)(
                        _._,
                        {
                          onSelected: () =>
                            this.m_chat.UpdateBroadcastChatModerator(
                              _.steamid,
                              !0,
                              _.persona_name,
                            ),
                          children: (0, _._)("#BroadcastChat_Add_Moderator"),
                        },
                        "addmod",
                      ),
                    )),
              _.length
                ? (0, _._)(
                    (0, _.jsxs)(_._, {
                      children: [
                        (0, _.jsxs)("div", {
                          className: _().SelectedUserNameCtn,
                          children: [
                            (0, _._)("#BroadcastChat_User"),
                            (0, _.jsx)("br", {}),
                            (0, _.jsx)("span", {
                              className: _().SelectedUserName,
                              children: _.persona_name,
                            }),
                          ],
                        }),
                        _,
                      ],
                    }),
                    _,
                  )
                : null
            );
          }
          GetTypeClassName(_) {
            return _.type === _._.Notification
              ? _().MessageNotification
              : _.type === _._.Error
                ? _().MessageError
                : _().MessageChat;
          }
          FormatMessage(_, _) {
            if (_.type === _._.Chat) {
              let _ = _ ? _.FilterText(_.steamid, _.msg) : _.msg;
              return this.AddLinksEmoticons(_, !1);
            } else return _.msg;
          }
          RenderUserChatLine(_, _, _) {
            let _ = _ ? _.get(_.steamid) : void 0;
            const _ = _.type === _._.Chat ? _(_.steamid, this.m_chat, _) : "";
            return (0, _.jsxs)(
              "div",
              {
                className: this.GetTypeClassName(_),
                onContextMenu: (_) => this.OnContextMenu(_, _),
                children: [
                  _.type === _._.Chat &&
                    (0, _.jsx)(_, {
                      userType: _,
                    }),
                  _.flair &&
                    (0, _.jsx)("span", {
                      className: _().FlairContainer,
                      children: this.AddLinksEmoticons(_.flair, !1),
                    }),
                  _.type === _._.Chat &&
                    (0, _.jsx)(_, {
                      userType: _,
                      msg: _,
                      presenterInfo: _,
                    }),
                  _.type === _._.Chat &&
                    this.m_chat.GetBroadcastSteamID() === _.steamid &&
                    (0, _.jsx)("span", {
                      className: `${_().MessageNotification} ${_().MessageContents}`,
                      children: ` (${(0, _._)("#BroadcastChat_Broadcaster")})`,
                    }),
                  _.type === _._.Chat &&
                    this.m_chat.m_mapChannelModeratorUsers.get(_.steamid) &&
                    (0, _.jsx)("span", {
                      className: `${_().MessageNotification} ${_().MessageContents}`,
                      children: ` (${(0, _._)("#BroadcastChat_Moderator")})`,
                    }),
                  (0, _.jsxs)("span", {
                    className: `${_().MessageContents} ${this.AddLinksEmoticons(_.msg, !1).filter((_) => _ && typeof _ == "string").length ? "" : _().EmoticonsOnly}`,
                    children: [
                      _.type === _._.Chat ? " : " : "",
                      this.FormatMessage(_, this.m_chat.TextFilterStore),
                    ],
                  }),
                ],
              },
              _.instance_id + "_" + _.client_ts + "_" + _,
            );
          }
          render() {
            const {
                hidden: _,
                bPartnerMemberOnlyChat: _,
                bInvertLayout: _,
                onSignIn: _,
              } = this.props,
              _ = this.m_chat ? this.m_chat.m_rgChatMessages : [],
              _ = _ ? _.reverse() : _,
              _ = this.m_chat
                ? _._.GetPresenterMapForBroadcasterSteamID(
                    this.m_chat.GetBroadcastSteamID(),
                  )
                : void 0,
              _ = this.m_chat ? this.m_chat.m_latestAnnouncement : null;
            return (0, _.jsxs)("div", {
              className: (0, _._)(_().ChatPanel, "ChatPanel"),
              style: _
                ? {
                    display: "none",
                  }
                : void 0,
              children: [
                (0, _.jsx)(_._, {
                  latestAnnouncement: _,
                }),
                _ &&
                  !!this.m_chat &&
                  (0, _.jsx)(_, {
                    oChat: this.m_chat,
                    emoticonStore: this.props.emoticonStore,
                    bPartnerMemberOnlyChat: _,
                    onSignIn: _,
                  }),
                (0, _.jsx)(_, {}),
                (0, _.jsx)("div", {
                  className: (0, _._)(
                    `${_().ChatMessages} ${_().minHeightZero}`,
                    "ChatMessages",
                  ),
                  onScroll: this.HandleScroll,
                  ref: this.messagesContainer,
                  children: _.map((_, _) => this.RenderUserChatLine(_, _, _)),
                }),
                (0, _.jsx)(_, {}),
                !_ &&
                  !!this.m_chat &&
                  (0, _.jsx)(_, {
                    oChat: this.m_chat,
                    emoticonStore: this.props.emoticonStore,
                    bPartnerMemberOnlyChat: _,
                    onSignIn: _,
                  }),
              ],
            });
          }
        };
        _([_._], _.prototype, "m_chat", 2),
          _([_._], _.prototype, "StartChat", 1),
          _([_._], _.prototype, "HandleScroll", 1),
          _([_._], _.prototype, "OnContextMenu", 1),
          _([_._], _.prototype, "RenderUserChatLine", 1),
          (_ = _([_._], _));
        function _(_) {
          var _, _, _;
          const {
            oChat: _,
            emoticonStore: _,
            bPartnerMemberOnlyChat: _,
            onSignIn: _,
          } = _;
          return _ &&
            (!((_ = _._) != null && _.logged_in) ||
              !((_ = _._) != null && _.is_partner_member))
            ? (0, _.jsx)(_, {})
            : (_ = _._) != null && _.logged_in
              ? (0, _.jsx)(_, {
                  oChat: _,
                  emoticonStore: _,
                })
              : _
                ? (0, _.jsx)(_, {
                    onSignIn: _,
                  })
                : null;
        }
        function _(_) {
          const { oChat: _, emoticonStore: _ } = _,
            [_, _] = _.useState(""),
            _ = _.useRef(void 0),
            _ = (0, _._)(() => _.m_bRateLimited),
            _ = _.useCallback(
              (_) => {
                !_.shiftKey &&
                  _.charCode === 13 &&
                  (_.m_bRateLimited || (_.SendMessage(_), _("")),
                  _.preventDefault());
              },
              [_, _],
            ),
            _ = _.useCallback(
              (_, _ = !1) => {
                _(_ + `\u02D0${_}\u02D0`),
                  _ != null && _.current && _.current.focus();
              },
              [_, _],
            ),
            _ = () => {
              _.SendMessage(_), _("");
            };
          let _ = _ || _.trim().length == 0,
            _ = (0, _._)(_().chatSubmitButton, _.length == 0 && _().disabled);
          return (0, _.jsx)("div", {
            className: (0, _._)(_().ChatEntryCtn, "ChatEntryCtn"),
            children: (0, _.jsxs)("div", {
              className: (0, _._)(_().ChatEntry, "ChatEntry"),
              children: [
                (0, _.jsxs)("form", {
                  className: `${_().chatEntryControls}`,
                  children: [
                    (0, _.jsx)("textarea", {
                      className: _().chatTextarea,
                      placeholder: (0, _._)("#BroadcastChat_EnterResponse"),
                      onKeyPress: _,
                      onChange: (_) => _(_.target.value),
                      value: _,
                      ref: _,
                    }),
                    _ &&
                      (0, _.jsx)(_, {
                        nSeconds: _.m_nRateLimitSeconds,
                        bRateLimited: _.m_bRateLimited,
                      }),
                    (0, _.jsx)("button", {
                      className: _,
                      title: (0, _._)("#ChatEntryButton_Submit"),
                      disabled: _,
                      onClick: _,
                      children: (0, _.jsx)(_.XTb, {}),
                    }),
                  ],
                }),
                (0, _.jsx)("div", {
                  style: {
                    height: "50px",
                  },
                  className: `${_().chatEntryActionsContainer}`,
                  children: (0, _.jsxs)("div", {
                    className: _().chatEntryActionsGroup,
                    children: [
                      (0, _.jsx)(_._, {
                        disabled: !1,
                        OnEmoticonSelected: _,
                        rtLastAckedNewEmoticons: Number.MAX_VALUE,
                        emoticonStore: _,
                      }),
                      (0, _.jsx)(_, {
                        ..._,
                        textInputRef: _,
                      }),
                    ],
                  }),
                }),
              ],
            }),
          });
        }
        function _(_) {
          var _;
          const { oChat: _, emoticonStore: _, textInputRef: _ } = _;
          return _.m_strFlairGroupID &&
            _.flair_list &&
            (_ = _.GetFlairListByGroupID(_.m_strFlairGroupID)) != null &&
            _.length
            ? (0, _.jsx)(_._, {
                disabled: !1,
                OnEmoticonSelected: (_) => {
                  _.UpdateChatMessageFlair(_),
                    _ != null && _.current && _.current.focus();
                },
                rtLastAckedNewEmoticons: Number.MAX_VALUE,
                emoticonStore: _,
                strFlairGroupID: _.m_strFlairGroupID,
                title: (0, _._)("#ChatEntryButton_Flair"),
                buttonIcon: (0, _.jsx)(_.P7r, {}),
              })
            : null;
        }
        class _ extends _.Component {
          render() {
            return (0, _.jsx)("div", {
              className: _().TimedProgressBarContainer,
              children: (0, _.jsxs)("div", {
                className: _().wrapper,
                children: [
                  (0, _.jsx)("div", {
                    className: `${_().spinner} ${_().pie}`,
                    style: {
                      animationDuration: `${this.props.nSeconds || 0}s`,
                    },
                  }),
                  (0, _.jsx)("div", {
                    className: `${_().filler} ${_().pie}`,
                    style: {
                      animationDuration: `${this.props.nSeconds || 0}s`,
                    },
                  }),
                  (0, _.jsx)("div", {
                    className: _().mask,
                    style: {
                      animationDuration: `${this.props.nSeconds || 0}s`,
                    },
                  }),
                ],
              }),
            });
          }
        }
        function _(_) {
          return (0, _.jsx)("div", {
            className: _().Description,
            children: (0, _.jsx)(_._, {
              onClick: _.onSignIn,
              className: (0, _._)(_().SignInButton),
              children: (0, _._)("#BroadcastChat_Login"),
            }),
          });
        }
        function _(_) {
          return (0, _.jsxs)("div", {
            className: _().Description,
            children: [
              (0, _.jsx)("div", {
                className: _().LogInPrompt,
                children: (0, _._)("#Broadcast_PartnerChat_Login"),
              }),
              !_._.logged_in &&
                !_._.IN_STEAMUI &&
                (0, _.jsx)(_._, {
                  onClick: _._,
                  className: (0, _._)(_().SignInButton),
                  children: (0, _._)("#Login_SignIn"),
                }),
            ],
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        function _(_) {
          const { latestAnnouncement: _ } = _;
          return (_ == null ? void 0 : _.type) == "giveaway_draw"
            ? (0, _.jsx)(_, {
                latestWinner: _,
              })
            : null;
        }
        function _(_) {
          var _, _;
          const {
              latestWinner: _,
              className: _,
              strActionButton: _,
              strActionClassname: _,
            } = _,
            _ =
              ((_ = _.winners_info) == null ? void 0 : _.length) > 0
                ? _.winners_info[0].accountid
                : 0,
            [_, _] = _.useState(_),
            _ =
              "https://store.steampowered.com/sale/thegameawardssteamdeckdrop2022",
            _ = (0, _._)(
              `${_._.GetBaseURL()}4/080b1f163b02a9810fa78f0b32b9396fab012aef.gif`,
            ),
            _ = (0, _._)(
              `${_._.GetBaseURL()}4/56521811317a8298a7aff4a914be964b67dd0325.png`,
            ),
            _ = (0, _._)(_.giveaway_gid);
          let _ =
            _.bLoadingGiveawayInfo || _.closed ? null : _.seconds_until_drawing;
          const _ = _ === _._.accountid;
          _.useEffect(() => {
            _ != _ && setTimeout(() => _(_), 1500);
          }, [_, _]);
          const _ =
            ((_ = _.winners_info) == null ? void 0 : _.length) > 0 &&
            _.winners_info[0].persona
              ? _.winners_info[0].persona
              : (0, _._)("#GA2022_UnknownPersonaName");
          return (0, _.jsx)(_._, {
            href: _,
            className: _,
            children: (0, _.jsxs)("div", {
              className: (0, _._)({
                [_().GiveawayWinnerBox]: !0,
                [_().GiveawayWinnerAnnounced]: _ === _,
              }),
              children: [
                (0, _.jsx)("div", {
                  className: _().GiveawayWinnerBoxLeft,
                  children: (0, _.jsx)("img", {
                    className: _().GiveawayWinnerArt,
                    src: _,
                  }),
                }),
                (0, _.jsxs)("div", {
                  className: _().GiveawayWinnerBoxRight,
                  children: [
                    _ !== _ &&
                      (0, _.jsx)("div", {
                        className: (0, _._)(_().GiveawayWinnerText),
                        children: (0, _._)(
                          "#GA2022_Congrats_Deck_Unknown",
                          (0, _.jsx)("br", {}),
                        ),
                      }),
                    _ === _ &&
                      (0, _.jsx)("div", {
                        className: (0, _._)(
                          _().GiveawayWinnerText,
                          _().GiveawayWinnerAnnounced,
                        ),
                        children: (0, _._)(
                          _
                            ? "#GA2022_Congrats_Deck_Me"
                            : "#GA2022_Congrats_Deck_OTher",
                          _,
                          (0, _.jsx)("br", {}),
                        ),
                      }),
                    _ > 0 &&
                      (0, _.jsx)("div", {
                        className: _().GiveawayWinnerCountdown,
                        children: (0, _._)("#GA2022_Congrats_NextDraw", _),
                      }),
                  ],
                }),
                (0, _.jsx)("img", {
                  className: _().GiveawayWinnerQuestion,
                  src: _,
                }),
                !!_ &&
                  (0, _.jsx)("div", {
                    className: _,
                    children: _ ? (0, _._)("#GA2022_YouWonNextSteps") : _,
                  }),
              ],
            }),
          });
        }
        function _(_, _) {
          const [_, _] = (0, _._)(() => {
              var _;
              return [
                _ == null ? void 0 : _.steamid,
                (_ = _._.GetBroadcast(_ == null ? void 0 : _.steamid)) == null
                  ? void 0
                  : _.m_ulBroadcastID,
              ];
            }),
            [_, _] = _.useState(null);
          _.useEffect(() => {
            let _ = null;
            return (
              (_ || _) &&
                ((_ = _._.Get().GetOrCreateChat(_, _)),
                _.StartForSteamID(_, _),
                _(_)),
              () => {
                _ && (_.Stop(), _(null));
              }
            );
          }, [_, _]);
          const _ = (0, _._)(
            () => (_ == null ? void 0 : _.m_latestAnnouncement) || null,
          );
          if ((_ == null ? void 0 : _.type) == "giveaway_draw") {
            const _ = _;
            if (_.giveaway_gid == _) return _;
          }
          return null;
        }
        function _(_) {
          const { gidGiveaway: _, stream: _ } = _,
            _ = _(_, _),
            _ = (0, _._)("GameAwardDrop2022");
          let _ = null,
            _ = _().GiveawayRegisterButton;
          return (
            _._.logged_in
              ? _ != null && _.registered
                ? ((_ = (0, _._)("#GA2022_AlreadyRegistered")),
                  (_ = _().GiveawayAlreadyRegistered))
                : (_ = (0, _._)("#GA2022_RegisterToWin"))
              : (_ = (0, _._)("#GA2022_RegisterLoginToWin")),
            _
              ? (0, _.jsx)(_, {
                  latestWinner: _,
                  className: _().InViewerBar,
                  strActionButton: _,
                  strActionClassname: _,
                })
              : null
          );
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports),
          __webpack_require__._(module_exports, {
            BroadcastDetails: () => _,
            LinkOverlay: () => _,
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
          _ = Object.defineProperty,
          _ = Object.getOwnPropertyDescriptor,
          _ = (_, _, _) =>
            _ in _
              ? _(_, _, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: _,
                })
              : (_[_] = _),
          _ = (_, _, _, _) => {
            for (
              var _ = _ > 1 ? void 0 : _ ? _(_, _) : _, _ = _.length - 1, _;
              _ >= 0;
              _--
            )
              (_ = _[_]) && (_ = (_ ? _(_, _, _) : _(_)) || _);
            return _ && _ && _(_, _, _), _;
          },
          _ = (_, _, _) => _(_, typeof _ != "symbol" ? _ + "" : _, _);
        class _ extends _.Component {
          constructor() {
            super(...arguments),
              _(this, "m_elCanvas", null),
              _(this, "m_Context", null),
              _(this, "m_schUpdate", new _._()),
              _(this, "m_bSetupComplete", !1);
          }
          componentDidMount() {
            this.props.updateRate == 0 && this.updateCanvas();
          }
          componentWillUnmount() {
            this.m_schUpdate.Cancel();
          }
          componentDidUpdate() {
            this.updateCanvas();
          }
          BindCanvasRef(_) {
            this.m_elCanvas = _;
          }
          updateCanvas() {
            var _;
            if (
              this.props.elementRef == null ||
              this.m_elCanvas == null ||
              this.m_bSetupComplete
            )
              return;
            let _ = this.props.scaleFactor || [1, 1],
              _ = this.props.elementRef,
              _ = this.props.updateRate;
            const _ = this.m_elCanvas.getContext("2d");
            if (!_) return;
            this.m_Context = _;
            let _ = Math.floor(
                this.m_elCanvas.clientWidth / this.props.reductionFactor,
              ),
              _ = Math.floor(
                this.m_elCanvas.clientHeight / this.props.reductionFactor,
              );
            (this.m_elCanvas.width = _),
              (this.m_elCanvas.height = _),
              ((_ = this.props.blurAmount) != null ? _ : 0) > 0 &&
                (_.filter = "blur(" + this.props.blurAmount + "px)");
            let _ = () => {
              _.drawImage(_, 0, 0, _ * _[0], _ * _[1]),
                _ > 0 && this.m_schUpdate.Schedule(_, _);
            };
            _(), (this.m_bSetupComplete = !0);
          }
          render() {
            return (0, _.jsx)("canvas", {
              _: this.props._,
              className: this.props.className,
              ref: this.BindCanvasRef,
              width: this.props.width,
              height: this.props.height,
            });
          }
        }
        _([_._], _.prototype, "BindCanvasRef", 1),
          _([_._], _.prototype, "updateCanvas", 1);
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_, _) {
          var _ = function (_) {
              return _ && (0, _.isValidElement)(_) ? _(_) : _;
            },
            _ = Object.create(null);
          return (
            _ &&
              _.Children.map(_, function (_) {
                return _;
              }).forEach(function (_) {
                _[_.key] = _(_);
              }),
            _
          );
        }
        function _(_, _) {
          (_ = _ || {}), (_ = _ || {});
          function _(_) {
            return _ in _ ? _[_] : _[_];
          }
          var _ = Object.create(null),
            _ = [];
          for (var _ in _)
            _ in _ ? _.length && ((_[_] = _), (_ = [])) : _.push(_);
          var _,
            _ = {};
          for (var _ in _) {
            if (_[_])
              for (_ = 0; _ < _[_].length; _++) {
                var _ = _[_][_];
                _[_[_][_]] = _(_);
              }
            _[_] = _(_);
          }
          for (_ = 0; _ < _.length; _++) _[_[_]] = _(_[_]);
          return _;
        }
        function _(_, _, _) {
          return _[_] != null ? _[_] : _.props[_];
        }
        function _(_, _) {
          return _(_.children, function (_) {
            return (0, _.cloneElement)(_, {
              onExited: _.bind(null, _),
              _: !0,
              appear: _(_, "appear", _),
              enter: _(_, "enter", _),
              exit: _(_, "exit", _),
            });
          });
        }
        function _(_, _, _) {
          var _ = _(_.children),
            _ = _(_, _);
          return (
            Object.keys(_).forEach(function (_) {
              var _ = _[_];
              if ((0, _.isValidElement)(_)) {
                var _ = _ in _,
                  _ = _ in _,
                  _ = _[_],
                  _ = (0, _.isValidElement)(_) && !_.props._;
                _ && (!_ || _)
                  ? (_[_] = (0, _.cloneElement)(_, {
                      onExited: _.bind(null, _),
                      _: !0,
                      exit: _(_, "exit", _),
                      enter: _(_, "enter", _),
                    }))
                  : !_ && _ && !_
                    ? (_[_] = (0, _.cloneElement)(_, {
                        _: !1,
                      }))
                    : _ &&
                      _ &&
                      (0, _.isValidElement)(_) &&
                      (_[_] = (0, _.cloneElement)(_, {
                        onExited: _.bind(null, _),
                        _: _.props._,
                        exit: _(_, "exit", _),
                        enter: _(_, "enter", _),
                      }));
              }
            }),
            _
          );
        }
        var _ =
            Object.values ||
            function (_) {
              return Object.keys(_).map(function (_) {
                return _[_];
              });
            },
          _ = {
            component: "div",
            childFactory: function (_) {
              return _;
            },
          },
          _ = (function (_) {
            (0, _._)(_, _);
            function _(_, _) {
              var _;
              _ = _.call(this, _, _) || this;
              var _ = _.handleExited.bind((0, _._)(_));
              return (
                (_.state = {
                  contextValue: {
                    isMounting: !0,
                  },
                  handleExited: _,
                  firstRender: !0,
                }),
                _
              );
            }
            var _ = _.prototype;
            return (
              (_.componentDidMount = function () {
                (this.mounted = !0),
                  this.setState({
                    contextValue: {
                      isMounting: !1,
                    },
                  });
              }),
              (_.componentWillUnmount = function () {
                this.mounted = !1;
              }),
              (_.getDerivedStateFromProps = function (_, _) {
                var _ = _.children,
                  _ = _.handleExited,
                  _ = _.firstRender;
                return {
                  children: _ ? _(_, _) : _(_, _, _),
                  firstRender: !1,
                };
              }),
              (_.handleExited = function (_, _) {
                var _ = _(this.props.children);
                _.key in _ ||
                  (_.props.onExited && _.props.onExited(_),
                  this.mounted &&
                    this.setState(function (_) {
                      var _ = (0, _._)({}, _.children);
                      return (
                        delete _[_.key],
                        {
                          children: _,
                        }
                      );
                    }));
              }),
              (_.render = function () {
                var _ = this.props,
                  _ = _.component,
                  _ = _.childFactory,
                  _ = (0, _._)(_, ["component", "childFactory"]),
                  _ = this.state.contextValue,
                  _ = _(this.state.children).map(_);
                return (
                  delete _.appear,
                  delete _.enter,
                  delete _.exit,
                  _ === null
                    ? _.createElement(
                        _._.Provider,
                        {
                          value: _,
                        },
                        _,
                      )
                    : _.createElement(
                        _._.Provider,
                        {
                          value: _,
                        },
                        _.createElement(_, _, _),
                      )
                );
              }),
              _
            );
          })(_.Component);
        (_.propTypes = {}), (_.defaultProps = _);
        const _ = _;
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = 500;
        class _ extends _.Component {
          render() {
            let {
              keyExtractor: _,
              style: _,
              duration: _ = _,
              className: _,
              children: _,
              childRef: _,
              ..._
            } = this.props;
            const _ = {
              ...(_ || {}),
              transitionDuration: `${_ / 1e3}s`,
            };
            return (0, _.jsx)(_, {
              ..._,
              className: (0, _._)("crossfade", _),
              children: (0, _.jsx)(
                _._,
                {
                  nodeRef: _,
                  classNames: "crossfade-anim",
                  timeout: _,
                  style: _,
                  children: _,
                },
                _(),
              ),
            });
          }
        }
        function _(_) {
          const { src: _, ..._ } = _,
            _ = {
              backgroundImage: `url(${_})`,
            },
            _ = _.useRef(null);
          return (0, _.jsx)(_, {
            style: _,
            keyExtractor: () => _,
            childRef: _,
            ..._,
            children: (0, _.jsx)("div", {
              ref: _,
              className: "crossfade-img",
            }),
          });
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
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
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
        function _() {
          return (0, _.jsx)("div", {
            className: "STV_ReplayBanner",
            children: (0, _._)("#DASHPlayerControls_IsReplay"),
          });
        }
        const _ = (0, _._)((_) => {
          let _ = _.video;
          if (_ && (_.IsBroadcastClip() || _.IsBroadcastVOD())) return null;
          let _ = _._.Loading,
            _ = "";
          if (_) {
            (_ = _.GetBroadcastState()), (_ = _.GetBroadcastStateDescription());
            let _ = _.IsBuffering();
            _ == _._.Unlocking && ((_ = _._.Loading), (_ = "")),
              _ == _._.Ready && _ && ((_ = _._.Loading), (_ = ""));
          }
          if ((_ && _ != _._.Error && _.GetUserInputNeeded()) || _ == _._.Ready)
            return null;
          let _ = _ == _._.Loading;
          return (0, _.jsxs)("div", {
            className: "BroadcastVideoWatchState",
            style: {
              filter: "hue-rotate(40deg)",
            },
            children: [
              _ && (0, _.jsx)(_._, {}),
              !_ &&
                (0, _.jsx)("div", {
                  className: "BroadcastVideoWatchState_Text",
                  children: _,
                }),
            ],
          });
        });
        class _ extends _.Component {
          OnClick() {
            _._.UserInputClickVideo(this.props.video);
          }
          render() {
            return (0, _.jsxs)("div", {
              className: "BroadcastVideoUserInputNeeded",
              onClick: this.OnClick,
              children: [
                (0, _.jsx)(_.jGG, {}),
                (0, _.jsx)("span", {
                  children: (0, _._)("#DASHPlayerControls_ClickToPlay"),
                }),
              ],
            });
          }
        }
        _([_._], _.prototype, "OnClick", 1);
        var _ = Object.defineProperty,
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
          constructor(_) {
            super(_);
          }
          HideStats() {
            this.props.closeStats && this.props.closeStats();
          }
          render() {
            let _ = this.props.stats;
            return (0, _.jsxs)("div", {
              className: "dash_video_stats",
              children: [
                (0, _.jsx)("button", {
                  className: "dash_stat_close_button",
                  onClick: this.HideStats,
                  children: (0, _.jsx)(_.sED, {}),
                }),
                (0, _.jsxs)("div", {
                  children: [
                    (0, _._)("#DASHPlayerStats_BufferingResolution"),
                    " ",
                    (0, _.jsx)("span", {
                      className: "videoStatsValue",
                      children: _.GetBufferingResolutionToDisplay(),
                    }),
                  ],
                }),
                (0, _.jsxs)("div", {
                  children: [
                    (0, _._)("#DASHPlayerStats_PlaybackResolution"),
                    " ",
                    (0, _.jsx)("span", {
                      className: "videoStatsValue",
                      children: _.GetPlaybackResolutionToDisplay(),
                    }),
                  ],
                }),
                (0, _.jsxs)("div", {
                  children: [
                    (0, _._)("#DASHPlayerStats_HtmlResolution"),
                    " ",
                    (0, _.jsx)("span", {
                      className: "videoStatsValue",
                      children: _.GetHTMLVideoResolutionToDisplay(),
                    }),
                  ],
                }),
                (0, _.jsxs)("div", {
                  children: [
                    (0, _._)("#DASHPlayerStats_ContentServer"),
                    " ",
                    (0, _.jsx)("span", {
                      className: "videoStatsValue",
                      children: _.GetContentServerToDisplay(),
                    }),
                  ],
                }),
                (0, _.jsxs)("div", {
                  children: [
                    (0, _._)("#DASHPlayerStats_StallEvents"),
                    " ",
                    (0, _.jsx)("span", {
                      className: "videoStatsValue",
                      children: _.GetStalledEventsToDisplay(),
                    }),
                  ],
                }),
                (0, _.jsxs)("div", {
                  children: [
                    (0, _._)("#DASHPlayerStats_FailedDownloads"),
                    " ",
                    (0, _.jsx)("span", {
                      className: "videoStatsValue",
                      children: _.GetFailedDownloadsToDisplay(),
                    }),
                  ],
                }),
                (0, _.jsxs)("div", {
                  children: [
                    (0, _._)("#DASHPlayerStats_TimeToFirstFrame"),
                    " ",
                    (0, _.jsx)("span", {
                      className: "videoStatsValue",
                      children: _.GetTimeToFirstFrameToDisplay(),
                    }),
                  ],
                }),
                (0, _.jsxs)("div", {
                  children: [
                    (0, _._)("#DASHPlayerStats_PlaybackRate"),
                    " ",
                    (0, _.jsx)("span", {
                      className: "videoStatsValue",
                      children: _.GetPlaybackRateForDisplay(),
                    }),
                  ],
                }),
                (0, _.jsx)(_, {
                  stats: _,
                }),
              ],
            });
          }
        };
        _([_._], _.prototype, "HideStats", 1), (_ = _([_._], _));
        let _ = class extends _.Component {
          constructor(_) {
            super(_);
          }
          createBufferedRange(_) {
            let _ = this.props.stats,
              _ = [],
              _ = _ ? "vidbuf" : "audbuf",
              _ = _
                ? _.GetNumBufferedVideoRanges()
                : _.GetNumBufferedAudioRanges();
            if (_ > 0)
              for (let _ = 0; _ < _; ++_) {
                let _ = (0, _._)(
                    _
                      ? "#DASHPlayerStats_VideoBufferRange"
                      : "#DASHPlayerStats_AudioBufferRange",
                    _,
                  ),
                  _ = _
                    ? _.GetBufferedVideoSegmentForDisplay(_)
                    : _.GetBufferedAudioSegmentForDisplay(_);
                _.push(
                  (0, _.jsxs)(
                    "div",
                    {
                      children: [
                        _,
                        " ",
                        (0, _.jsx)("span", {
                          className: "videoStatsValue",
                          children: _,
                        }),
                      ],
                    },
                    _ + _,
                  ),
                );
              }
            else {
              let _ = (0, _._)(
                _
                  ? "#DASHPlayerStats_VideoNoRangeInformation"
                  : "#DASHPlayerStats_AudioNoRangeInformation",
              );
              _.push(
                (0, _.jsx)(
                  "div",
                  {
                    children: _,
                  },
                  _ + "none",
                ),
              );
            }
            return _;
          }
          render() {
            let _ = this.props.stats;
            return (0, _.jsxs)("div", {
              className: "dash_video_quick_stats",
              children: [
                (0, _.jsxs)("div", {
                  children: [
                    (0, _._)("#DASHPlayerStats_BytesReceived"),
                    " ",
                    (0, _.jsx)("span", {
                      className: "videoStatsValue",
                      children: _.GetBytesReceivedToDisplay(),
                    }),
                  ],
                }),
                this.props.stats.BHasFrameInformation() &&
                  (0, _.jsxs)("div", {
                    children: [
                      (0, _._)("#DASHPlayerStats_DroppedFrames"),
                      " ",
                      (0, _.jsx)("span", {
                        className: "videoStatsValue",
                        children: _.GetDroppedFramesToDisplay(),
                      }),
                    ],
                  }),
                (0, _.jsxs)("div", {
                  children: [
                    (0, _._)("#DASHPlayerStats_VideoBuffered"),
                    " ",
                    (0, _.jsxs)("span", {
                      className: "videoStatsValue",
                      children: [_.GetVideoBufferedToDisplay(), " "],
                    }),
                  ],
                }),
                (0, _.jsxs)("div", {
                  children: [
                    (0, _._)("#DASHPlayerStats_AudioBuffered"),
                    " ",
                    (0, _.jsxs)("span", {
                      className: "videoStatsValue",
                      children: [_.GetAudioBufferedToDisplay(), " "],
                    }),
                  ],
                }),
                this.createBufferedRange(!0),
                this.createBufferedRange(!1),
                (0, _.jsxs)("div", {
                  children: [
                    (0, _._)("#DASHPlayerStats_BandwidthRequired"),
                    " ",
                    (0, _.jsx)("span", {
                      className: "videoStatsValue",
                      children: _.GetBandwidthRequiredToDisplay(),
                    }),
                  ],
                }),
                (0, _.jsxs)("div", {
                  children: [
                    (0, _._)("#DASHPlayerStats_BandwidthVideo"),
                    " ",
                    (0, _.jsx)("span", {
                      className: "videoStatsValue",
                      children: _.GetBandwithVideoToDisplay(),
                    }),
                  ],
                }),
                (0, _.jsxs)("div", {
                  children: [
                    (0, _._)("#DASHPlayerStats_BandwidthNums"),
                    " ",
                    (0, _.jsx)("span", {
                      className: "videoStatsValue",
                      children: _.GetBandwidthStatsToDisplay(),
                    }),
                  ],
                }),
                (0, _.jsxs)("div", {
                  children: [
                    (0, _._)("#DASHPlayerStats_DownloadNums"),
                    " ",
                    (0, _.jsx)("span", {
                      className: "videoStatsValue",
                      children: _.GetDownloadTimeStatsToDisplay(),
                    }),
                  ],
                }),
                (0, _.jsxs)("div", {
                  children: [
                    (0, _._)("#DASHPlayerStats_ActiveDownloads"),
                    " ",
                    (0, _.jsx)("span", {
                      className: "videoStatsValue",
                      children: _.GetActiveDownloadsToDisplay(),
                    }),
                  ],
                }),
                (0, _.jsxs)("div", {
                  children: [
                    (0, _._)("#DASHPlayerStats_VideoDownloadProgress"),
                    " ",
                    (0, _.jsx)("span", {
                      className: "videoStatsValue",
                      children: _.GetVideoDownloadProgressToDisplay(),
                    }),
                  ],
                }),
                (0, _.jsxs)("div", {
                  children: [
                    (0, _._)("#DASHPlayerStats_DroppingFrames"),
                    " ",
                    (0, _.jsx)("span", {
                      className: "videoStatsValue",
                      children: _.GetPersistentFrameDropsForDisplay(),
                    }),
                  ],
                }),
                (0, _.jsxs)("div", {
                  children: [
                    (0, _._)("#DASHPlayerStats_CurrentFPS"),
                    " ",
                    (0, _.jsx)("span", {
                      className: "videoStatsValue",
                      children: _.GetCurrentFPSForDisplay(),
                    }),
                  ],
                }),
              ],
            });
          }
        };
        _ = _([_._], _);
        var _ = __webpack_require__("chunkid"),
          _ = Object.defineProperty,
          _ = Object.getOwnPropertyDescriptor,
          _ = (_, _, _) =>
            _ in _
              ? _(_, _, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: _,
                })
              : (_[_] = _),
          _ = (_, _, _, _) => {
            for (
              var _ = _ > 1 ? void 0 : _ ? _(_, _) : _, _ = _.length - 1, _;
              _ >= 0;
              _--
            )
              (_ = _[_]) && (_ = (_ ? _(_, _, _) : _(_)) || _);
            return _ && _ && _(_, _, _), _;
          },
          _ = (_, _, _) => _(_, typeof _ != "symbol" ? _ + "" : _, _);
        class _ extends _.Component {
          constructor(_) {
            super(_),
              _(this, "m_elSettingsButton"),
              _(this, "m_SettingsButtonPos"),
              _(this, "m_elClickListener", null),
              _(this, "m_elSettingsPanel", null),
              _(this, "m_elSubtitlesButton", _.createRef()),
              _(this, "m_elSubtitlesPanel", _.createRef()),
              _(this, "m_SubtitlesButtonPos"),
              (this.state = {
                bSettingsOpen: !1,
                bSubtitlesOpen: !1,
              });
          }
          OnVideoControlClick(_) {
            var _;
            this.setState({
              bSettingsOpen: !this.state.bSettingsOpen,
            }),
              (this.m_SettingsButtonPos = [
                this.m_elSettingsButton.offsetLeft,
                this.m_elSettingsButton.offsetTop,
              ]),
              (this.m_elClickListener =
                _.currentTarget.ownerDocument.defaultView),
              (_ = this.m_elClickListener) == null ||
                _.addEventListener("mouseup", this.OnMouseUp, !0);
          }
          OnSubtitlesClick(_) {
            var _, _, _;
            this.setState({
              bSubtitlesOpen: !this.state.bSubtitlesOpen,
            }),
              (this.m_SubtitlesButtonPos = [
                (_ = this.m_elSubtitlesButton.current) == null
                  ? void 0
                  : _.offsetLeft,
                (_ = this.m_elSubtitlesButton.current) == null
                  ? void 0
                  : _.offsetTop,
              ]),
              (this.m_elClickListener =
                _.currentTarget.ownerDocument.defaultView),
              (_ = this.m_elClickListener) == null ||
                _.addEventListener("mouseup", this.OnMouseUp, !0);
          }
          OnMouseUp(_) {
            var _;
            (_ = this.m_elClickListener) == null ||
              _.removeEventListener("mouseup", this.OnMouseUp, !0),
              (0, _._)(this.m_elSettingsPanel, _.target) ||
                this.setState({
                  bSettingsOpen: !1,
                }),
              (0, _._)(this.m_elSubtitlesPanel.current, _.target) ||
                this.setState({
                  bSubtitlesOpen: !1,
                });
          }
          bindSettingsButton(_) {
            this.m_elSettingsButton = _;
          }
          BindSettingsPanel(_) {
            this.m_elSettingsPanel = _;
          }
          OnShowStats(_) {
            this.props.onShowStats(_),
              this.setState({
                bSettingsOpen: !this.state.bSettingsOpen,
              });
          }
          render() {
            let _ = !1,
              _ = !1;
            const { video: _, actions: _ } = this.props;
            let _,
              _ = [],
              _ = 0,
              _ = (0, _.jsx)(
                "div",
                {
                  className: "settingsMenuSeparator",
                },
                "separator",
              );
            const _ = 260,
              _ = 32;
            if (
              (this.state.bSettingsOpen &&
                ((_ = !0),
                (_ = this.props.video.GetVideoRepresentations()),
                (_ = _.map((_) =>
                  (0, _.jsx)(
                    _._,
                    {
                      onClick: () => {
                        this.props.video.SetVideoRepresentation(_),
                          this.setState({
                            bSettingsOpen: !this.state.bSettingsOpen,
                          });
                      },
                      bChecked: _.selected,
                      children: _.displayName,
                    },
                    _._,
                  ),
                )),
                _.push(_),
                _.push(
                  (0, _.jsxs)(
                    _._,
                    {
                      onClick: this.OnShowStats,
                      children: [
                        (0, _._)("#Broadcast_VideoContext_ToggleStats"),
                        "	",
                      ],
                    },
                    "statsToggle",
                  ),
                ),
                (_ = 0 - (_.length * 21 + _))),
              this.state.bSubtitlesOpen)
            ) {
              (_ = !0),
                (_ = []),
                _.push(
                  (0, _.jsx)(
                    _._,
                    {
                      onClick: () => {
                        this.props.video.SetSubtitles(null),
                          this.setState({
                            bSubtitlesOpen: !this.state.bSubtitlesOpen,
                          });
                      },
                      className: "NoSubtitles",
                      bChecked: !1,
                      children: (0, _._)("#Broadcast_None"),
                    },
                    "none",
                  ),
                );
              for (
                let _ = 0;
                _ < this.props.video.ListSubtitles().length;
                _++
              ) {
                const _ = this.props.video.ListSubtitles()[_];
                _.push(
                  (0, _.jsx)(
                    _._,
                    {
                      onClick: () => {
                        this.props.video.SetSubtitles(_.language),
                          this.setState({
                            bSubtitlesOpen: !this.state.bSubtitlesOpen,
                          });
                      },
                      bChecked: _.mode === "showing",
                      children: _.label,
                    },
                    _.language,
                  ),
                );
              }
              _ = 0 - (_ + _);
            }
            const _ =
              this.props.video.BHasPlayer() && this.props.video.BHasTimedText();
            return (0, _.jsxs)("div", {
              className: "STV_BroadcastSettings",
              children: [
                _ &&
                  (0, _.jsx)("div", {
                    className:
                      "videoControlButton" + (_ ? " ClosedCaptionsActive" : ""),
                    onClick: this.OnSubtitlesClick,
                    ref: this.m_elSubtitlesButton,
                    children: (0, _.jsx)(_.N8C, {}),
                  }),
                (0, _.jsx)("div", {
                  className:
                    "videoControlButton VideoSettings " +
                    (_ ? " VideoSettingsOpen" : ""),
                  onClick: this.OnVideoControlClick,
                  ref: this.bindSettingsButton,
                  children: (0, _.jsx)(_.wB_, {}),
                }),
                (0, _.jsx)(_, {
                  video: _,
                }),
                _ &&
                  _.map((_) =>
                    (0, _.jsx)(
                      "div",
                      {
                        className: "videoControlButton videoControlFitWidth",
                        children: _,
                      },
                      _.key,
                    ),
                  ),
                _ &&
                  (0, _.jsx)("div", {
                    ref: this.BindSettingsPanel,
                    className: "STV_BroadcastSettingsPanel",
                    style: {
                      left: this.m_SettingsButtonPos[0],
                      top: this.m_SettingsButtonPos[1],
                      marginTop: _,
                    },
                    children: (0, _.jsx)("div", {
                      className: "STV_BroadcastSettingsMenuItems",
                      children: _,
                    }),
                  }),
                _ &&
                  (0, _.jsx)("div", {
                    ref: this.m_elSubtitlesPanel,
                    className: "STV_BroadcastSettingsPanel SubtitlesMenu",
                    style: {
                      maxHeight: _ + "px",
                      left: this.m_SubtitlesButtonPos[0],
                      top: this.m_SubtitlesButtonPos[1],
                      marginTop: _,
                    },
                    children: (0, _.jsx)("div", {
                      className: "STV_BroadcastSettingsMenuItems",
                      children: _,
                    }),
                  }),
              ],
            });
          }
        }
        _([_._], _.prototype, "OnVideoControlClick", 1),
          _([_._], _.prototype, "OnSubtitlesClick", 1),
          _([_._], _.prototype, "OnMouseUp", 1),
          _([_._], _.prototype, "bindSettingsButton", 1),
          _([_._], _.prototype, "BindSettingsPanel", 1),
          _([_._], _.prototype, "OnShowStats", 1);
        const _ = !0;
        let _ = class extends _.Component {
          constructor(_) {
            super(_),
              _(this, "k_nHideSliderTimeout", 1.5 * 1e3),
              _(this, "m_bShowSlider", _),
              _(this, "m_schHideSlider", new _._()),
              _(this, "m_bChildDragging", !1),
              _(this, "m_bMouseOver", !1),
              (0, _._)(this);
          }
          componentWillUnmount() {
            this.m_schHideSlider.Cancel();
          }
          ToggleMute() {
            let _ = this.props.video,
              _ = _.IsMuted();
            _.SetMute(!_), _.GetVolume() < 0.01 && _.SetVolume(0.5);
          }
          OnMouseEnter(_) {
            (this.m_bShowSlider = !0),
              (this.m_bMouseOver = !0),
              this.m_schHideSlider.Cancel();
          }
          OnMouseLeave(_) {
            (this.m_bMouseOver = !1), this.ScheduleHide();
          }
          OnChildDrag(_) {
            (this.m_bChildDragging = _), this.ScheduleHide();
          }
          ScheduleHide() {
            this.m_bMouseOver ||
              this.m_bChildDragging ||
              this.m_schHideSlider.Schedule(
                this.k_nHideSliderTimeout,
                () => (this.m_bShowSlider = _),
              );
          }
          render() {
            let _ = this.props.video,
              _ = _.IsMuted(),
              _ = _.GetVolume() * 100,
              _ = "videoControlButton";
            _ > 65
              ? (_ += " HighestVolume")
              : _ > 45
                ? (_ += " HighVolume")
                : _ < 46 && _ > 24
                  ? (_ += " MedVolume")
                  : _ < 25 && (_ += " LowVolume");
            let _ = "BroadcastVolumeControl";
            return (
              this.m_bShowSlider && (_ += " ShowVolumeSlider"),
              _ && (_ += " muted"),
              (0, _.jsx)("div", {
                className: _,
                onMouseEnter: this.OnMouseEnter,
                onMouseLeave: this.OnMouseLeave,
                children: (0, _.jsxs)("div", {
                  className: "BroadcastVolumeControl_FixedLayout",
                  children: [
                    (0, _.jsx)("div", {
                      className: _,
                      onClick: this.ToggleMute,
                      children: (0, _.jsx)(_.fSs, {}),
                    }),
                    (0, _.jsx)(_, {
                      video: _,
                      onDrag: this.OnChildDrag,
                    }),
                  ],
                }),
              })
            );
          }
        };
        _([_._], _.prototype, "m_bShowSlider", 2),
          _([_._], _.prototype, "ToggleMute", 1),
          _([_._], _.prototype, "OnMouseEnter", 1),
          _([_._], _.prototype, "OnMouseLeave", 1),
          _([_._], _.prototype, "OnChildDrag", 1),
          (_ = _([_._], _));
        let _ = class extends _.Component {
          constructor(_) {
            super(_),
              _(this, "m_elSlider", null),
              _(this, "m_nVolumeStartOfDrag", 0),
              (0, _._)(this);
          }
          OnMouseDown(_) {
            var _, _;
            let _ = _.currentTarget;
            (this.m_elSlider = _),
              (this.m_nVolumeStartOfDrag = this.props.video.GetVolume()),
              this.SetVolumeWithCoord(_, _.clientX),
              (_ = _.ownerDocument.defaultView) == null ||
                _.addEventListener("mousemove", this.OnMouseMove),
              (_ = _.ownerDocument.defaultView) == null ||
                _.addEventListener("mouseup", this.OnMouseUp),
              this.props.onDrag(!0);
          }
          OnMouseMove(_) {
            this.m_elSlider &&
              this.SetVolumeWithCoord(this.m_elSlider, _.clientX);
          }
          OnMouseUp(_) {
            var _, _;
            if (!this.m_elSlider) return;
            this.SetVolumeWithCoord(this.m_elSlider, _.clientX);
            let _ = this.props.video;
            _.IsMuted() && _.SetVolume(this.m_nVolumeStartOfDrag),
              (_ = this.m_elSlider.ownerDocument.defaultView) == null ||
                _.removeEventListener("mousemove", this.OnMouseMove),
              (_ = this.m_elSlider.ownerDocument.defaultView) == null ||
                _.removeEventListener("mouseup", this.OnMouseUp),
              (this.m_nVolumeStartOfDrag = 0),
              (this.m_elSlider = null),
              this.props.onDrag(!1);
          }
          SetVolumeWithCoord(_, _) {
            let _ = _.getBoundingClientRect(),
              _ = _._(_, _.left, _.right, 0, 1),
              _ = _._(_, 0, 1),
              _ = this.props.video;
            _.SetMute(_ < 0.01), _.SetVolume(_);
          }
          render() {
            let _ = this.props.video,
              _ = _.GetVolume() * 100;
            _.IsMuted() && (_ = 0);
            let _ = {
                left: `${_}%`,
              },
              _ = {
                width: `${_}%`,
              };
            return (0, _.jsxs)("div", {
              className: "BroadcastVolumeSlider",
              onMouseDown: this.OnMouseDown,
              children: [
                (0, _.jsx)("div", {
                  className: "BroadcastVolumeSlider_Track",
                }),
                (0, _.jsx)("div", {
                  className: "BroadcastVolumeSlider_Fill",
                  style: _,
                }),
                (0, _.jsx)("div", {
                  className: "BroadcastVolumeSlider_Thumb",
                  style: _,
                }),
              ],
            });
          }
        };
        _([_._], _.prototype, "OnMouseDown", 1),
          _([_._], _.prototype, "OnMouseMove", 1),
          _([_._], _.prototype, "OnMouseUp", 1),
          _([_._], _.prototype, "SetVolumeWithCoord", 1),
          (_ = _([_._], _));
        var _ = __webpack_require__("chunkid"),
          _ = Object.defineProperty,
          _ = Object.getOwnPropertyDescriptor,
          _ = (_, _, _) =>
            _ in _
              ? _(_, _, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: _,
                })
              : (_[_] = _),
          _ = (_, _, _, _) => {
            for (
              var _ = _ > 1 ? void 0 : _ ? _(_, _) : _, _ = _.length - 1, _;
              _ >= 0;
              _--
            )
              (_ = _[_]) && (_ = (_ ? _(_, _, _) : _(_)) || _);
            return _ && _ && _(_, _, _), _;
          },
          _ = (_, _, _) => _(_, typeof _ != "symbol" ? _ + "" : _, _);
        const _ = 3200,
          _ = 15;
        let _ = class extends _.Component {
          constructor(_) {
            super(_),
              _(this, "m_schHideControls", new _._()),
              _(this, "m_schUnmountControls", new _._()),
              _(this, "m_elVideo", null),
              _(this, "m_elBroadcastPlayer", null),
              _(this, "m_bMouseDown", !1),
              _(this, "m_elMouseDown", null),
              _(this, "m_listeners", new _._()),
              (this.state = {
                bMountControls: !1,
                bControlsVisible: !1,
                bShowStats: !1,
                video: null,
                nResizedHeight: null,
                bFullscreen: !1,
              });
          }
          StopVideo() {
            var _, _;
            let _ = this.state.video;
            _ &&
              (_._.StopVideo(_),
              this.setState({
                video: null,
              }),
              (_ = (_ = this.props).fnSetBroadcastVideo) == null ||
                _.call(_, null));
          }
          IsMuted() {
            let _ = this.state.video;
            return !_ || _.IsMuted();
          }
          StopPlaybackTillUserInput() {
            let _ = this.state.video;
            _ && _.StopPlaybackTillUserInput();
          }
          componentDidUpdate(_, _) {
            !_.bMountControls && this.state.bMountControls
              ? setTimeout(() => {
                  this.setState((_) => ({
                    bControlsVisible: _.bMountControls,
                  }));
                }, 15)
              : _.bControlsVisible &&
                !this.state.bControlsVisible &&
                this.state.video &&
                !this.state.video.IsPaused() &&
                this.m_schUnmountControls.Schedule(2e3, this.UmountControls),
              this.props.steamIDBroadcast !== _.steamIDBroadcast &&
                this.BindVideoRef(this.m_elVideo);
            const _ = this.props.nAppIDVOD;
            _ &&
              (_.strInitialCapsuleImageUrl === void 0 || _.nAppIDVOD != _) &&
              _._.Get()
                .QueueAppRequest(_, {
                  include_assets: !0,
                  include_trailers: !0,
                })
                .then(() => {
                  var _;
                  const _ = _._.Get().GetApp(_),
                    _ =
                      ((_ = _ == null ? void 0 : _.GetAssets()) == null
                        ? void 0
                        : _.GetMainCapsuleURL()) || "";
                  this.setState({
                    strInitialCapsuleImageUrl: _,
                  });
                });
          }
          componentWillUnmount() {
            this.m_listeners.Unregister(),
              this.m_schHideControls.Cancel(),
              this.m_schUnmountControls.Cancel(),
              this.StopVideo();
          }
          BindBroadcastPlayerRef(_) {
            this.m_listeners.Unregister(),
              (this.m_elBroadcastPlayer = _),
              _ &&
                (this.m_listeners.AddEventListener(
                  _,
                  "fullscreenchange",
                  this.OnFullscreenChange,
                ),
                this.m_listeners.AddEventListener(
                  _,
                  "mozfullscreenchange",
                  this.OnFullscreenChange,
                ),
                this.m_listeners.AddEventListener(
                  _,
                  "webkitfullscreenchange",
                  this.OnFullscreenChange,
                ),
                this.m_listeners.AddEventListener(
                  _,
                  "msfullscreenchange",
                  this.OnFullscreenChange,
                ));
          }
          BindVideoRef(_) {
            var _, _;
            let _ = null;
            this.StopVideo(),
              this.props.steamIDBroadcast
                ? _ &&
                  (_ = _._.CreateBroadcastVideo(
                    _,
                    this.props.steamIDBroadcast,
                    this.props.watchLocation,
                    !!this.props.bWebRTC,
                  ))
                : this.props.broadcastClipID
                  ? _ &&
                    (_ = _._.CreateClipVideo(
                      _,
                      this.props.broadcastClipID,
                      this.props.watchLocation,
                    ))
                  : this.props.nAppIDVOD &&
                    _ &&
                    ((_ = _._.CreateVODVideo(
                      _,
                      this.props.nAppIDVOD,
                      this.props.watchLocation,
                    )),
                    this.props.fnOnVideoEnd &&
                      _.SetOnVideoCallback(this.props.fnOnVideoEnd)),
              _ &&
                (this.props.bStartMuted && _.SetMute(!0),
                this.props.bStartWithSubtitles && _.SetStartWithSubtitles(!0),
                this.props.bStartPaused
                  ? _.StopPlaybackTillUserInput()
                  : _.Play()),
              this.setState({
                video: _,
              }),
              (_ = (_ = this.props).fnSetBroadcastVideo) == null ||
                _.call(_, _),
              (this.m_elVideo = _);
          }
          OnMouseDown(_) {
            var _;
            (this.m_bMouseDown = !0),
              (this.m_elMouseDown = _.currentTarget),
              (_ = this.m_elMouseDown.ownerDocument.defaultView) == null ||
                _.addEventListener("mouseup", this.OnMouseUp);
          }
          OnMouseUp(_) {
            var _, _;
            (this.m_bMouseDown = !1),
              (_ =
                (_ = this.m_elMouseDown) == null
                  ? void 0
                  : _.ownerDocument.defaultView) == null ||
                _.removeEventListener("mouseup", this.OnMouseUp),
              this.m_schHideControls.Schedule(_, this.HideControls);
          }
          OnMouseMove(_) {
            this.m_schHideControls.Cancel(),
              this.m_schUnmountControls.Cancel(),
              this.state.bMountControls
                ? this.state.bControlsVisible ||
                  this.setState({
                    bControlsVisible: !0,
                  })
                : this.setState({
                    bMountControls: !0,
                  }),
              this.m_schHideControls.Schedule(_, this.HideControls);
          }
          OnMouseLeave(_) {
            this.HideControls();
          }
          HideControls() {
            this.state.bControlsVisible &&
              !this.m_bMouseDown &&
              this.setState({
                bControlsVisible: !1,
              });
          }
          UmountControls() {
            this.setState((_) =>
              !_.bControlsVisible && _.bMountControls
                ? {
                    bMountControls: !1,
                  }
                : null,
            );
          }
          ShowStatsView() {
            let _ = this.state.video;
            if (!_) return;
            this.state.bShowStats ||
              (this.setState({
                bShowStats: !0,
              }),
              _.SetStatsViewIsVisible(!0));
          }
          OnContextMenu(_) {
            this.state.bFullscreen ||
              ((0, _._)(
                (0, _.jsx)(_._, {
                  children: this.GetContextMenuItems(),
                }),
                _,
              ),
              _.preventDefault());
          }
          ToggleStatsView(_) {
            let _ = !this.state.bShowStats;
            this.setState({
              bShowStats: _,
            });
            let _ = this.state.video;
            _ && _.SetStatsViewIsVisible(_);
          }
          ShowStorePage(_) {
            let _ = this.state.video;
            if (!_ || !this.props.onOpenLinkInNewWindow) return;
            let _ = _.GetBroadcastInfo();
            if (!_) return;
            let _ = (0, _._)(`${_._.STORE_BASE_URL}app/${_.m_strAppId}`);
            this.props.onOpenLinkInNewWindow(_, _), _.stopPropagation();
          }
          GetContextMenuItems() {
            let _ = [],
              _ = this.state.video;
            if (!_) return _;
            let _ = _.GetBroadcastInfo();
            return (
              _.push(
                (0, _.jsx)(
                  _._,
                  {
                    bChecked: this.state.bShowStats,
                    onSelected: (_) => {
                      this.ToggleStatsView(_);
                    },
                    children: (0, _._)("#Broadcast_VideoContext_ToggleStats"),
                  },
                  "togglestats",
                ),
              ),
              _ &&
                _.m_strAppId != "0" &&
                Number.parseInt(_.m_strAppId) != _._ &&
                _.push(
                  (0, _.jsx)(
                    _._,
                    {
                      onSelected: (_) => {
                        this.ShowStorePage(_);
                      },
                      children: (0, _._)("#Broadcast_VideoContext_OpenStore"),
                    },
                    "visitstore",
                  ),
                ),
              _
            );
          }
          CloseStats() {
            let _ = this.state.video;
            _ &&
              this.state.bShowStats &&
              (this.setState({
                bShowStats: !1,
              }),
              _.SetStatsViewIsVisible(!1));
          }
          OnToggleFullscreen() {
            var _;
            this.m_elBroadcastPlayer &&
              ((0, _._)(this.m_elBroadcastPlayer)
                ? (0, _._)(this.m_elBroadcastPlayer)
                : (0, _._)(
                    this.m_elBroadcastPlayer,
                    (_ = this.m_elVideo) != null ? _ : void 0,
                  ));
          }
          OnFullscreenChange(_) {
            if (!this.m_elBroadcastPlayer) return;
            let _ = (0, _._)(this.m_elBroadcastPlayer);
            this.setState({
              bFullscreen: _,
            });
          }
          BHideVideoControls() {
            let _ = this.state.video;
            return !_ || _.GetUserInputNeeded()
              ? !0
              : _._.GetBroadcastState(_) == _._.Error;
          }
          render() {
            var _;
            const _ = this.state.video,
              _ = _ && _.IsPaused(),
              _ = _ && _.BHasDASHStats() && this.state.bShowStats,
              _ = !!(_ && _.IsReplay()),
              _ = this.state.bMountControls,
              _ = this.state.bControlsVisible || _,
              _ = !!(_ && _.GetUserInputNeeded()),
              _ = _ == null ? void 0 : _.GetDASHPlayerStats(),
              _ =
                (_ == null ? void 0 : _.IsBroadcastVOD()) &&
                _ &&
                this.state.strInitialCapsuleImageUrl;
            let _ = "videoContainer";
            _ || (_ += " HidePlayerControls"),
              _ && (_ += " VideoPaused"),
              this.state.bFullscreen && (_ += " fullscreenVideo"),
              this.props.classes && (_ += " " + this.props.classes);
            let _ = [];
            !this.state.bFullscreen &&
              this.props.actions &&
              (_ = _.concat(this.props.actions)),
              !this.state.bFullscreen &&
                this.props.onTheaterMode &&
                _.push(
                  (0, _.jsx)(
                    "div",
                    {
                      onClick: this.props.onTheaterMode,
                      title: (0, _._)("#Broadcast_View_Theater"),
                      className: "BroadcastTheaterToggle",
                    },
                    "ChatPosToggle ChatTheaterToggle",
                  ),
                ),
              _.push(
                (0, _.jsx)(
                  "div",
                  {
                    title: (0, _._)("#Broadcast_View_Fullscreen"),
                    onClick: this.OnToggleFullscreen,
                    className: "BroadcastFullscreenToggle",
                  },
                  "FullscreenToggle",
                ),
              );
            const _ = _ && !this.BHideVideoControls(),
              _ = _ && !this.state.bFullscreen,
              _ =
                this.props.fnRenderBroadcastContext &&
                this.props.fnRenderBroadcastContext();
            return (0, _.jsxs)("div", {
              ref: this.BindBroadcastPlayerRef,
              className: _,
              onMouseMove: this.OnMouseMove,
              onClick: this.OnMouseMove,
              onMouseLeave: this.OnMouseLeave,
              onContextMenu: this.OnContextMenu,
              onMouseDown: this.OnMouseDown,
              children: [
                _ &&
                  (0, _.jsx)("div", {
                    className: _().BroadcastContext,
                    children: _,
                  }),
                _ && (0, _.jsx)(_, {}),
                this.props.showVideoBackgroundBlur &&
                  this.m_elVideo &&
                  (0, _.jsx)(_, {
                    className: "videoBlur",
                    elementRef: this.m_elVideo,
                    updateRate: 33,
                    width: 320,
                    height: 180,
                    reductionFactor: 10,
                    blurAmount: 5,
                  }),
                (0, _.jsx)("video", {
                  className: "videoSrc",
                  ref: this.BindVideoRef,
                  muted: (_ = this.props.bMuted) != null ? _ : !0,
                  autoPlay: !0,
                  playsInline: !0,
                  controls: !1,
                  onVolumeChange: this.props.fnVolumeChanged,
                  onClick: this.props.fnVideoClick,
                }),
                this.props.linkRegions
                  ? (0, _.jsx)(_, {
                      linkRegions: this.props.linkRegions,
                      editMode: !!this.props.editMode,
                      onSaveLinkRegions: this.props.onSaveLinkRegions,
                    })
                  : null,
                this.props.linkElement,
                _ &&
                  (0, _.jsx)("img", {
                    loading: "lazy",
                    className: (0, _._)(
                      _().BroadcastPlaceholderImg,
                      "BroadcastPlaceholderImg",
                    ),
                    src: this.state.strInitialCapsuleImageUrl,
                  }),
                _ &&
                  _ &&
                  (0, _.jsx)(_, {
                    video: _,
                    actions: _,
                    onOpenLinkInNewWindow: this.props.onOpenLinkInNewWindow,
                    onShowStats: this.ToggleStatsView,
                    bIncludeClipEditor: !!this.props.bIncludeClipEditor,
                  }),
                _ &&
                  (0, _.jsx)(_, {
                    onClick: this.props.onRequestClose,
                  }),
                _ &&
                  _ &&
                  (0, _.jsx)(_, {
                    stats: _,
                    closeStats: this.CloseStats,
                  }),
                (0, _.jsx)(_, {
                  video: _,
                }),
                _ &&
                  _ &&
                  (0, _.jsx)(_, {
                    video: _,
                  }),
              ],
            });
          }
        };
        _([_._], _.prototype, "BindBroadcastPlayerRef", 1),
          _([_._], _.prototype, "BindVideoRef", 1),
          _([_._], _.prototype, "OnMouseDown", 1),
          _([_._], _.prototype, "OnMouseUp", 1),
          _([_._], _.prototype, "OnMouseMove", 1),
          _([_._], _.prototype, "OnMouseLeave", 1),
          _([_._], _.prototype, "HideControls", 1),
          _([_._], _.prototype, "UmountControls", 1),
          _([_._], _.prototype, "ShowStatsView", 1),
          _([_._], _.prototype, "OnContextMenu", 1),
          _([_._], _.prototype, "ToggleStatsView", 1),
          _([_._], _.prototype, "ShowStorePage", 1),
          _([_._], _.prototype, "CloseStats", 1),
          _([_._], _.prototype, "OnToggleFullscreen", 1),
          _([_._], _.prototype, "OnFullscreenChange", 1),
          (_ = _([_._], _));
        let _ = class extends _.Component {
          render() {
            const { video: _ } = this.props;
            if (!_) return null;
            let _ = _.has_segments;
            return (0, _.jsxs)("div", {
              className: "videoControls",
              children: [
                (0, _.jsx)(_, {
                  steamID: this.props.video.GetBroadcastSteamID(),
                  bHideThumbnail: !0,
                  bVerticalBroadcastChat: !0,
                  onOpenLinkInNewWindow: this.props.onOpenLinkInNewWindow,
                }),
                (0, _.jsxs)("div", {
                  className: "videoControlsBottom" + (_ ? "" : " noSegments"),
                  children: [
                    (0, _.jsx)(_, {
                      video: _,
                      bIncludeClipEditor: this.props.bIncludeClipEditor,
                    }),
                    (0, _.jsxs)("div", {
                      className: "STV_BroadcastController",
                      children: [
                        (0, _.jsx)("div", {
                          className: "videoControlsButtons LeftSpacer",
                        }),
                        (0, _.jsx)(_, {
                          video: _,
                        }),
                        (0, _.jsx)(_, {
                          video: _,
                        }),
                        (0, _.jsx)(_, {
                          video: _,
                          actions: this.props.actions,
                          onShowStats: this.props.onShowStats,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            });
          }
        };
        _ = _([_._], _);
        class _ extends _.PureComponent {
          render() {
            return this.props.onClick
              ? (0, _.jsx)("div", {
                  className: "STV_BroadcastClose",
                  onClick: this.props.onClick,
                  children: (0, _.jsx)(_.sED, {}),
                })
              : null;
          }
        }
        class _ extends _.Component {
          OnJumpBackward() {
            this.props.video.JumpTime(-_);
          }
          OnJumpForward() {
            this.props.video.JumpTime(_);
          }
          render() {
            let _ = this.props.video,
              _ = _.CanSeek();
            return (0, _.jsxs)("div", {
              className: "videoControlsButtons PlayControls",
              children: [
                (0, _.jsx)(_, {
                  video: _,
                }),
                _ &&
                  (0, _.jsxs)("div", {
                    className:
                      "videoControlButton videoControlJump controlFlip",
                    onClick: this.OnJumpBackward,
                    children: [
                      (0, _.jsx)(_.tID, {
                        bHidePostArrow: !0,
                        bHidePreArrow: !0,
                        bShowJumpAheadBox: !0,
                        bFlipHorizontal: !0,
                      }),
                      (0, _.jsx)("div", {
                        className: "jumpAheadValue",
                        children: _,
                      }),
                    ],
                  }),
                (0, _.jsx)(_, {
                  video: _,
                }),
                _ &&
                  (0, _.jsxs)("div", {
                    className: "videoControlButton videoControlJump",
                    onClick: this.OnJumpForward,
                    children: [
                      (0, _.jsx)(_.tID, {
                        bHidePostArrow: !0,
                        bHidePreArrow: !0,
                        bShowJumpAheadBox: !0,
                        bFlipHorizontal: !1,
                      }),
                      (0, _.jsx)("div", {
                        className: "jumpAheadValue",
                        children: _,
                      }),
                    ],
                  }),
                _ &&
                  (0, _.jsx)(_, {
                    video: _,
                  }),
              ],
            });
          }
        }
        _([_._], _.prototype, "OnJumpBackward", 1),
          _([_._], _.prototype, "OnJumpForward", 1);
        const _ = (0, _._)((_) => {
          if (_.video.IsBroadcastClip() || _.video.IsBroadcastVOD())
            return null;
          const _ = (_) => {
            _.video.JumpToLiveEdge();
          };
          let _ = _.video.IsOnLiveEdge();
          return (0, _.jsx)("div", {
            className: "videoControlsButtons GoLive",
            children: (0, _.jsxs)("div", {
              className:
                "videoControlButton videoControlGoLive" +
                (_ ? " isLiveEdge" : ""),
              onClick: _ ? void 0 : _,
              children: [
                (0, _.jsx)(_.tID, {
                  bHidePreArrow: !0,
                  bHidePostArrow: !0,
                  bFlipHorizontal: !1,
                }),
                (0, _.jsx)("div", {
                  className: "jumpGoLive",
                  children: (0, _._)(
                    _
                      ? "#DASHPlayerControls_IsLive"
                      : "#DASHPlayerControls_GoLive",
                  ),
                }),
              ],
            }),
          });
        });
        let _ = class extends _.Component {
          OnTogglePlayPause() {
            this.props.video.TogglePlayPause();
          }
          render() {
            let _ = this.props.video.IsPaused();
            return (0, _.jsx)("div", {
              className: "videoControlButton buttonPlayPause",
              onClick: this.OnTogglePlayPause,
              children: _ ? (0, _.jsx)(_.jGG, {}) : (0, _.jsx)(_.vRz, {}),
            });
          }
        };
        _([_._], _.prototype, "OnTogglePlayPause", 1), (_ = _([_._], _));
        let _ = class extends _.Component {
          constructor(_) {
            super(_), _(this, "video"), (0, _._)(this), (this.video = _.video);
          }
          componentDidUpdate() {
            this.video = this.props.video;
          }
          get has_previous_marker() {
            return this.GetPreviousMarkerTime() !== void 0;
          }
          GetPreviousMarkerTime() {
            const _ = this.video;
            if (!(_ != null && _.has_markers)) return;
            let _ = _.GetTimelineMarkers(),
              _ = _.GetPlaybackTime();
            for (let _ = _.length - 1; _ >= 0; _--)
              if (!(_[_].nTime >= _)) return _[_].nTime;
          }
          OnJumpToPreviousMarkerClicked(_) {
            let _ = this.GetPreviousMarkerTime();
            _ !== void 0 && this.props.video.Seek(_ - 0.2);
          }
          render() {
            let _ = this.props.video.BHasMarkersOrSegments();
            return (0, _.jsx)("div", {
              className:
                "videoControlButton jumpToMarker controlFlip" +
                (_ ? "" : " noMarkersOrSegments") +
                (this.has_previous_marker ? "" : " noMarkersInDirection"),
              onClick: this.OnJumpToPreviousMarkerClicked,
              children: (0, _.jsx)(_.tID, {
                bHidePostArrow: !0,
                bFlipHorizontal: !0,
              }),
            });
          }
        };
        _([_._], _.prototype, "video", 2),
          _([_._], _.prototype, "has_previous_marker", 1),
          _([_._], _.prototype, "OnJumpToPreviousMarkerClicked", 1),
          (_ = _([_._], _));
        let _ = class extends _.Component {
          constructor(_) {
            super(_), _(this, "video"), (0, _._)(this), (this.video = _.video);
          }
          componentDidUpdate() {
            this.video = this.props.video;
          }
          get has_next_marker() {
            return this.GetNextMarkerTime() !== void 0;
          }
          GetNextMarkerTime() {
            const _ = this.video;
            if (!(_ != null && _.has_markers)) return;
            let _ = _.GetTimelineMarkers(),
              _ = _.GetPlaybackTime();
            for (let _ = 0; _ < _.length; _++)
              if (!(_[_].nTime <= _)) return _[_].nTime;
          }
          OnJumpToNextMarkerClicked(_) {
            let _ = this.GetNextMarkerTime();
            _ !== void 0 && this.props.video.Seek(_);
          }
          render() {
            let _ = this.props.video.BHasMarkersOrSegments();
            return (0, _.jsx)("div", {
              className:
                "videoControlButton jumpToMarker" +
                (_ ? "" : " noMarkersOrSegments") +
                (this.has_next_marker ? "" : " noMarkersInDirection"),
              onClick: this.OnJumpToNextMarkerClicked,
              children: (0, _.jsx)(_.tID, {
                bHidePostArrow: !0,
                bFlipHorizontal: !1,
              }),
            });
          }
        };
        _([_._], _.prototype, "video", 2),
          _([_._], _.prototype, "has_next_marker", 1),
          _([_._], _.prototype, "OnJumpToNextMarkerClicked", 1),
          (_ = _([_._], _));
        const _ = (_) => {
          let _ = () => _.onMouseEnter(_.pos);
          return (0, _.jsx)("div", {
            className: "timelineMarker",
            title: _.label,
            style: {
              left: _.pos + "%",
            },
            onMouseEnter: _,
            onMouseLeave: _.onMouseLeave,
            onMouseDown: _.onMouseDown ? _.onMouseDown : void 0,
            children: (0, _.jsx)("div", {
              className: "timelineMarkerIcon",
              children: (0, _.jsx)(_.Dp6, {}),
            }),
          });
        };
        function _(_) {
          let _ = _.startPos,
            _ = _.endPos,
            _ = "",
            _ = 1;
          return (
            _ < 0 && ((_ = (_ - _) / 10), (_ = 0), (_ = " hideFront")),
            (0, _.jsxs)("div", {
              className: "STV_timelineSegment" + _,
              style: {
                left: _ + "%",
                width: _ - _ + "%",
                opacity: _,
              },
              onClick: _.onClick,
              children: [
                (0, _.jsx)("div", {
                  className: "STV_timelineSegmentFrontFill",
                  style: {
                    borderColor: "rgb(" + _.color + ")",
                  },
                }),
                (0, _.jsx)("div", {
                  className: "STV_timelineSegmentLabel",
                  style: {
                    color: "rgb(" + _.color + ")",
                  },
                  children: _.label,
                }),
                (0, _.jsx)("div", {
                  className: "STV_timelineSegmentBackFill",
                  style: {
                    borderColor: "rgb(" + _.color + ")",
                  },
                }),
              ],
            })
          );
        }
        let _ = class extends _.Component {
          constructor(_) {
            super(_),
              _(this, "m_elSlider", _.createRef()),
              _(this, "m_rectSlider"),
              (this.state = {
                nGrabberMouseDownTime: 0,
                bGrabberMouseDown: !1,
                nHoverValue: void 0,
                hoverX: 0,
                bStartMouseDown: !1,
                bEndMouseDown: !1,
                thumbnailURL: "",
              });
          }
          OnMouseDown(_, _) {
            var _, _;
            const _ = this.m_elSlider.current;
            if (_) {
              _.persist(), (this.m_rectSlider = _.getBoundingClientRect());
              let _ = {};
              _ === "start"
                ? ((_ = {
                    bStartMouseDown: !0,
                  }),
                  _.stopPropagation())
                : _ === "end"
                  ? ((_ = {
                      bEndMouseDown: !0,
                    }),
                    _.stopPropagation())
                  : (_ = {
                      bGrabberMouseDown: !0,
                    }),
                this.setState(_, () => this.AdjustSliderForClientX(_.clientX)),
                (_ = _.ownerDocument.defaultView) == null ||
                  _.addEventListener("mousemove", this.OnMouseMove),
                (_ = _.ownerDocument.defaultView) == null ||
                  _.addEventListener("mouseup", this.OnMouseUp);
            }
          }
          OnMouseMove(_) {
            this.AdjustSliderForClientX(_.clientX);
          }
          OnMouseUp(_) {
            var _, _;
            this.state.bStartMouseDown
              ? this.setState({
                  bStartMouseDown: !1,
                })
              : this.state.bEndMouseDown
                ? this.setState({
                    bEndMouseDown: !1,
                  })
                : (this.props.video.Seek(this.state.nGrabberMouseDownTime),
                  this.setState({
                    bGrabberMouseDown: !1,
                    nGrabberMouseDownTime: 0,
                  })),
              this.m_elSlider.current &&
                ((_ = this.m_elSlider.current.ownerDocument.defaultView) ==
                  null || _.removeEventListener("mousemove", this.OnMouseMove),
                (_ = this.m_elSlider.current.ownerDocument.defaultView) ==
                  null || _.removeEventListener("mouseup", this.OnMouseUp));
          }
          OnKeyDown(_) {
            _.keyCode == _._
              ? (this.props.video.JumpTime(-1 * _), _.preventDefault())
              : _.keyCode == _._ &&
                (this.props.video.JumpTime(1 * _), _.preventDefault());
          }
          AdjustSliderForClientX(_) {
            const _ = this.m_rectSlider;
            if (!_) return;
            let _ = this.props.video,
              _ = _.GetTimelineStartPos(),
              _ = _.GetTimelineStartPos() + _.GetTimelineDuration(),
              _ = _.GetTimeAtMousePosition(_, _, _, _);
            const _ = 5;
            if (this.state.bStartMouseDown) {
              const _ = _._(_, _, _.m_editorEndTime - _);
              _.m_editorStartTime = _;
            } else if (this.state.bEndMouseDown) {
              const _ = _._(_, _.m_editorStartTime + _, _);
              _.m_editorEndTime = _;
            } else
              _ != this.state.nGrabberMouseDownTime &&
                this.setState({
                  nGrabberMouseDownTime: _,
                });
          }
          OnMouseHoverMove(_) {
            this.AdjustHoverForClientX(_.clientX);
          }
          OnMouseHoverLeave(_) {
            this.setState({
              hoverX: 0,
            });
          }
          AdjustHoverForClientX(_) {
            var _;
            let _ = this.props.video,
              _ = _.GetTimelineStartPos(),
              _ = _.GetTimelineStartPos() + _.GetTimelineDuration();
            this.m_rectSlider =
              (_ = this.m_elSlider.current) == null
                ? void 0
                : _.getBoundingClientRect();
            let _ =
              this.m_rectSlider &&
              _.GetTimeAtMousePosition(_, this.m_rectSlider, _, _);
          }
          OnSegmentClick(_) {
            this.props.video.Seek(_);
          }
          OnMarkerMouseEnter(_) {
            this.setState({
              nHoverValue: _,
            });
          }
          OnMarkerMouseLeave() {
            this.setState({
              nHoverValue: void 0,
            });
          }
          render() {
            var _;
            let _ = this.props.video,
              _ = this.state.bGrabberMouseDown,
              _ = _.GetPercentOffsetFromTime(
                this.state.nGrabberMouseDownTime,
                _._.Timeline,
              ),
              _ = _.GetPercentOffsetFromTime(_.GetPlaybackTime(), _._.Timeline),
              _ = _.GetPercentOffsetFromTime(
                _.GetVideoAvailableStartTime(),
                _._.Timeline,
              );
            _ < 0.05 && (_ = 0);
            let _ = _._(_, 0, 100).toFixed(1) + "%",
              _ = _._(_, 0, 100).toFixed(1) + "%",
              _ = _._(_, 0, 100).toFixed(1) + "%",
              _ = {},
              _ = {},
              _ = {},
              _ = {};
            _
              ? ((_.left = _), (_.width = _), (_.width = _), (_.width = _))
              : ((_.left = _), (_.width = _), (_.width = _));
            let _ = (0, _._)(_.GetPlaybackTime()),
              _ = (0, _._)((_ = this.state.nHoverValue) != null ? _ : 0),
              _ = "STV_timelineContainer";
            this.state.bGrabberMouseDown && (_ += " grabberDown"),
              _.IsTimelineMapActive() && (_ += " minimapActive");
            let _ = "";
            (_ = _ ? _ : _),
              _ > 100
                ? (_ = " grabberOffScreenRight grabberOffscreen")
                : _ < 0 && (_ = " grabberOffScreenLeft grabberOffscreen");
            let _ = [];
            _.GetTimelineMarkers().forEach((_, _) => {
              let _ = _.GetPercentOffsetFromTime(_.nTime, _._.Timeline);
              _ < 0 ||
                _ > 100 ||
                _.push(
                  (0, _.jsx)(
                    _,
                    {
                      pos: _,
                      label: _.strTemplateName,
                      onMouseEnter: this.OnMarkerMouseEnter,
                      onMouseLeave: this.OnMarkerMouseLeave,
                    },
                    _,
                  ),
                );
            });
            let _ = [];
            _.GetTimelineSegments().forEach((_, _) => {
              let _ = _.GetPercentOffsetFromTime(_.nTimeStart, _._.Timeline);
              if (_ > 100) return;
              let _ = _.GetPercentOffsetFromTime(_.nTimeEnd, _._.Timeline);
              _ < 0 ||
                _.push(
                  (0, _.jsx)(
                    _,
                    {
                      startPos: _,
                      endPos: _,
                      label: _.strTemplateName,
                      color: _.color,
                      onClick: (_) => this.OnSegmentClick(_.nTimeStart),
                    },
                    _,
                  ),
                );
            });
            const _ = _.GetPercentOffsetFromTime(
                _.m_editorStartTime,
                _._.Timeline,
              ),
              _ = _.GetPercentOffsetFromTime(_.m_editorEndTime, _._.Timeline),
              _ = this.props.bIncludeClipEditor
                ? [
                    (0, _.jsx)(
                      _,
                      {
                        pos: _,
                        label: (0, _._)("#DASHPlayerControls_Start"),
                        onMouseEnter: this.OnMarkerMouseEnter,
                        onMouseLeave: this.OnMarkerMouseLeave,
                        onMouseDown: (_) => this.OnMouseDown(_, "start"),
                      },
                      "start",
                    ),
                    (0, _.jsx)(
                      _,
                      {
                        pos: _,
                        label: (0, _._)("#DASHPlayerControls_End"),
                        onMouseEnter: this.OnMarkerMouseEnter,
                        onMouseLeave: this.OnMarkerMouseLeave,
                        onMouseDown: (_) => this.OnMouseDown(_, "end"),
                      },
                      "end",
                    ),
                  ]
                : [];
            return (0, _.jsx)("div", {
              className: "videoTimelineMain",
              tabIndex: 0,
              onKeyDown: this.OnKeyDown,
              children: (0, _.jsxs)("div", {
                className: _,
                children: [
                  (0, _.jsx)("div", {
                    className: "DialogLabel",
                    children: _,
                  }),
                  (0, _.jsx)("div", {
                    className: "STV_timelineSegmentsContainer",
                    children: _,
                  }),
                  (0, _.jsx)("div", {
                    onMouseDown: this.OnMouseDown,
                    onMouseMove: this.OnMouseHoverMove,
                    onMouseLeave: this.OnMouseHoverLeave,
                    ref: this.m_elSlider,
                    children: (0, _.jsxs)("div", {
                      className: "VideoTimelineSlider",
                      children: [
                        (0, _.jsx)("div", {
                          className: "STV_timelineValue",
                          style: _,
                        }),
                        (0, _.jsx)("div", {
                          className: "STV_timelineGhostValue",
                          style: _,
                        }),
                        (0, _.jsx)("div", {
                          className: "STV_timelineNoVideo",
                          style: _,
                        }),
                        _,
                        _,
                        !!this.state.hoverX &&
                          (0, _.jsx)(
                            "div",
                            {
                              style: {
                                position: "absolute",
                                left: this.state.hoverX - 75,
                                bottom: "30px",
                              },
                              children: (0, _.jsxs)("div", {
                                style: {
                                  position: "relative",
                                  display: "flex",
                                  justifyContent: "center",
                                },
                                children: [
                                  this.state.thumbnailURL &&
                                    (0, _.jsx)("img", {
                                      style: {
                                        width: "150px",
                                      },
                                      src: this.state.thumbnailURL,
                                    }),
                                  (0, _.jsx)("span", {
                                    className: "STV_timelineGrabberValue",
                                    style: {
                                      position: "absolute",
                                      bottom: "4px",
                                    },
                                    children: _,
                                  }),
                                ],
                              }),
                            },
                            "grabbertime",
                          ),
                        (0, _.jsx)("div", {
                          className: "STV_timelineGrabber_Wrapper",
                          style: _,
                          children: (0, _.jsx)("div", {
                            className: "STV_timelineGrabber" + _,
                            children: (0, _.jsx)("div", {
                              className: "STV_timelineGrabberArrow",
                              children: (0, _.jsx)(_.apU, {}),
                            }),
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            });
          }
        };
        _([_._], _.prototype, "OnMouseDown", 1),
          _([_._], _.prototype, "OnMouseMove", 1),
          _([_._], _.prototype, "OnMouseUp", 1),
          _([_._], _.prototype, "OnKeyDown", 1),
          _([_._], _.prototype, "OnMouseHoverMove", 1),
          _([_._], _.prototype, "OnMouseHoverLeave", 1),
          _([_._], _.prototype, "AdjustHoverForClientX", 1),
          _([_._], _.prototype, "OnSegmentClick", 1),
          _([_._], _.prototype, "OnMarkerMouseEnter", 1),
          _([_._], _.prototype, "OnMarkerMouseLeave", 1),
          (_ = _([_._], _));
        let _ = class extends _.Component {
          constructor() {
            super(...arguments),
              _(this, "state", {
                info: null,
              });
          }
          static getDerivedStateFromProps(_, _) {
            return (!_.info || _.info.m_steamIDBroadcast !== _.steamID) &&
              (_.info && (_._.StopInfo(_.info), (_.info = null)), _.steamID)
              ? {
                  info: _._.StartInfo(_.steamID),
                }
              : null;
          }
          componentWillUnmount() {
            this.state.info && _._.StopInfo(this.state.info);
          }
          RenderStreamSwitcher() {
            const _ = this.props.steamID,
              _ = this.props.onLocalStreamChange;
            return _ && _._.stream[_]
              ? (0, _.jsx)(_, {
                  value: _,
                  options: _._.stream,
                  onChange: _,
                })
              : null;
          }
          render() {
            let { info: _ } = this.state;
            if (!_) return null;
            let _ = "";
            _.m_nViewerCount && (_ = (0, _._)(_.m_nViewerCount));
            let _ =
                _._.bValid && _._.stream && _._.stream[_.m_steamIDBroadcast],
              _ =
                !this.props.bHideThumbnail &&
                this.props.bVerticalBroadcastChat &&
                (parseInt(_.m_strAppId) > 0 || _);
            const _ =
              !this.props.bHideThumbnail &&
              this.props.bVerticalBroadcastChat &&
              _ &&
              _._.gidEvent;
            return (0, _.jsxs)("div", {
              className: "BroadcastDetails",
              children: [
                !this.props.bHideThumbnail &&
                  (0, _.jsx)(_, {
                    className: "broadcastDetailsThumbBlur",
                    src: _.m_strThumbnailUrl,
                    draggable: !1,
                    duration: 2500,
                  }),
                (0, _.jsxs)("div", {
                  className: "BroadcastDetailsHeader",
                  children: [
                    _ &&
                      _.m_strAppTitle &&
                      (0, _.jsxs)("div", {
                        className: "displayColumn",
                        children: [
                          (0, _.jsxs)("div", {
                            className: "Info",
                            children: [
                              (0, _.jsx)("span", {
                                className: "AppTitle",
                                children: _.m_strAppTitle,
                              }),
                              _.m_strTitle &&
                                (0, _.jsxs)("span", {
                                  className: "BroadcastTitle",
                                  children: ["\xA0- ", _.m_strTitle],
                                }),
                              this.props.onLocalStreamChange &&
                                this.RenderStreamSwitcher(),
                            ],
                          }),
                          _ &&
                            (0, _.jsxs)("div", {
                              className: "BroadcastDetailsHeader_ViewerCount",
                              children: [
                                (0, _.jsx)(_.y_e, {}),
                                (0, _._)("#Broadcast_ViewerCount", _),
                              ],
                            }),
                        ],
                      }),
                    _ &&
                      this.props.onOpenLinkInNewWindow &&
                      (0, _.jsx)("div", {
                        className: "Actions",
                        children: (0, _.jsx)("div", {
                          onClick: (_) => {
                            var _, _;
                            return (_ = (_ = this.props)
                              .onOpenLinkInNewWindow) == null
                              ? void 0
                              : _.call(_, _, _._.link);
                          },
                          className: "BroadcastLink",
                          children: _._.linkName,
                        }),
                      }),
                  ],
                }),
                _ &&
                  (0, _.jsx)(_._, {
                    gidEvent: _._.gidEvent,
                  }),
                _ &&
                  (0, _.jsx)(_._, {
                    _:
                      _._.bValid &&
                      _._.stream &&
                      _._.stream[_.m_steamIDBroadcast]
                        ? _._.appID
                        : parseInt(_.m_strAppId),
                    type: "game",
                    bPreferAssetWithoutOverride: !1,
                  }),
              ],
            });
          }
        };
        _ = _([_._], _);
        class _ extends _.Component {
          showContextMenu(_) {
            const { options: _, value: _, onChange: _ } = this.props,
              _ = Object.keys(_).map((_) =>
                (0, _.jsx)(
                  _._,
                  {
                    onSelected: () => _(_),
                    bChecked: _ === _,
                    children: (0, _._)(_[_]),
                  },
                  _,
                ),
              );
            (0, _._)(
              (0, _.jsx)(_._, {
                children: _,
              }),
              _,
            );
          }
          render() {
            const { value: _, options: _ } = this.props,
              _ = _[_];
            return (0, _.jsxs)("div", {
              className: "BroadcastLanguage",
              onClick: this.showContextMenu,
              children: [
                (0, _.jsxs)("span", {
                  children: ["\xA0- ", (0, _._)(_)],
                }),
                (0, _.jsx)("div", {
                  className: "ContextMenuButton",
                  children: (0, _.jsx)(_.GB9, {}),
                }),
              ],
            });
          }
        }
        _([_._], _.prototype, "showContextMenu", 1);
        let _ = class extends _.Component {
          constructor(_) {
            super(_),
              (this.state = {
                sizableRegion: [],
              });
          }
          async AddLinkRegion() {
            let _ = this.state.sizableRegion.length;
            this.state.sizableRegion.push({
              xPosPct: 2.5 + _,
              yPosPct: 2.5 + _,
              widthPct: 20,
              heightPct: 15,
            }),
              this.setState(
                {
                  sizableRegion: this.state.sizableRegion,
                },
                () => this.OnSaveRegions(),
              );
          }
          componentDidUpdate(_) {
            _.linkRegions.length == 0 &&
              this.props.linkRegions.forEach((_, _) => {
                this.LoadLinkRegion(_, _);
              });
          }
          async LoadLinkRegion(_, _) {
            let _ = this.state.sizableRegion.length;
            this.state.sizableRegion.push({
              xPosPct: _.left,
              yPosPct: _.top,
              widthPct: _.width,
              heightPct: _.height,
              link_url: _.url,
              link_description: _.link_description,
              link_index: _.link_index,
            }),
              await this.setState({
                sizableRegion: this.state.sizableRegion,
              });
          }
          OnSaveRegions() {
            var _, _;
            let _;
            _ = {
              links: [],
            };
            for (let _ = 0; _ < this.state.sizableRegion.length; _++) {
              let _;
              (_ = {
                left: Math.floor(this.state.sizableRegion[_].xPosPct * 100),
                top: Math.floor(this.state.sizableRegion[_].yPosPct * 100),
                width: Math.floor(this.state.sizableRegion[_].widthPct * 100),
                height: Math.floor(this.state.sizableRegion[_].heightPct * 100),
                url: this.state.sizableRegion[_].link_url,
                link_description: this.state.sizableRegion[_].link_description,
                link_index: _,
              }),
                _.links.push(_);
            }
            (_ = (_ = this.props).onSaveLinkRegions) == null || _.call(_, _);
          }
          async DeleteRegion(_) {
            this.state.sizableRegion.splice(_, 1),
              console.log("keys: ", this.state.sizableRegion.keys),
              this.setState(
                {
                  sizableRegion: this.state.sizableRegion,
                },
                () => this.OnSaveRegions(),
              );
          }
          async UpdatePanel(_, _) {
            const _ = [...this.state.sizableRegion];
            (_[_] = _),
              this.setState(
                {
                  sizableRegion: _,
                },
                () => this.OnSaveRegions(),
              );
          }
          render() {
            return (0, _.jsxs)("div", {
              className: "LinkOverlayContainer",
              children: [
                (0, _.jsxs)("div", {
                  className: "LinkOverlayValidRegion",
                  children: [
                    !this.props.editMode && this.props.linkRegions
                      ? this.props.linkRegions.map((_) => {
                          const _ = (0, _._)(_.url);
                          return (0, _.jsx)(
                            _._,
                            {
                              href: _.url,
                              bForceExternal: _,
                              bUseLinkFilter: _,
                              children: (0, _.jsx)("div", {
                                className: "LinkRegion",
                                style: {
                                  left: _.left + "%",
                                  top: _.top + "%",
                                  width: _.width + "%",
                                  height: _.height + "%",
                                },
                                children: (0, _.jsxs)("div", {
                                  className: "LinkRegionText",
                                  children: [_.link_description, " "],
                                }),
                              }),
                            },
                            _.link_index,
                          );
                        })
                      : null,
                    this.props.editMode &&
                      this.state.sizableRegion.map((_, _) =>
                        (0, _.jsx)(
                          _._,
                          {
                            index: _,
                            deleteFn: this.DeleteRegion,
                            updateFn: this.UpdatePanel,
                            xPosPct: _.xPosPct,
                            yPosPct: _.yPosPct,
                            widthPct: _.widthPct,
                            heightPct: _.heightPct,
                            link_url: _.link_url,
                            link_description: _.link_description,
                          },
                          _ * 100 + _.xPosPct,
                        ),
                      ),
                    this.props.editMode &&
                      (0, _.jsx)("div", {
                        className: "AddLinkRegion",
                        onClick: this.AddLinkRegion,
                        children: (0, _._)("#SteamTV_AddLinkRegion"),
                      }),
                  ],
                }),
                (0, _.jsx)("div", {
                  className: "LinkOverlayInvalidRegion",
                  children: (0, _.jsx)("div", {
                    children: (0, _._)("#SteamTV_LinkRegionReserved"),
                  }),
                }),
              ],
            });
          }
        };
        _([_._], _.prototype, "AddLinkRegion", 1),
          _([_._], _.prototype, "LoadLinkRegion", 1),
          _([_._], _.prototype, "OnSaveRegions", 1),
          _([_._], _.prototype, "DeleteRegion", 1),
          _([_._], _.prototype, "UpdatePanel", 1),
          (_ = _([_._], _));
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = Object.defineProperty,
          _ = (_, _, _) =>
            _ in _
              ? _(_, _, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: _,
                })
              : (_[_] = _),
          _ = (_, _, _) => _(_, typeof _ != "symbol" ? _ + "" : _, _);
        function _(_) {
          return "unknown EBroadcastImageType ( " + _ + " )";
        }
        function _(_) {
          return "unknown EGetGamesAlgorithm ( " + _ + " )";
        }
        function _(_) {
          return "unknown EGetChannelsAlgorithm ( " + _ + " )";
        }
        function _(_) {
          return "unknown ESteamTVContentTemplate ( " + _ + " )";
        }
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.unique_name || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    unique_name: {
                      _: 1,
                      _: _._.readString,
                      _: _._.writeString,
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_CreateBroadcastChannel_Request";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.broadcast_channel_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    broadcast_channel_id: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_CreateBroadcastChannel_Response";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.unique_name || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    unique_name: {
                      _: 1,
                      _: _._.readString,
                      _: _._.writeString,
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelID_Request";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.broadcast_channel_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    broadcast_channel_id: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    unique_name: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    steamid: {
                      _: 3,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelID_Response";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.broadcast_channel_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    broadcast_channel_id: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    name: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    language: {
                      _: 3,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    headline: {
                      _: 4,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    summary: {
                      _: 5,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    avatar_hash: {
                      _: 6,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    schedule: {
                      _: 7,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    rules: {
                      _: 8,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    panels: {
                      _: 9,
                      _: _._.readString,
                      _: _._.writeString,
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_SetBroadcastChannelProfile_Request";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_SetBroadcastChannelProfile_Response";
          }
        }
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.broadcast_channel_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    broadcast_channel_id: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelProfile_Request";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.unique_name || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    unique_name: {
                      _: 1,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    owner_steamid: {
                      _: 2,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    name: {
                      _: 3,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    language: {
                      _: 4,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    headline: {
                      _: 5,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    summary: {
                      _: 6,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    schedule: {
                      _: 7,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    rules: {
                      _: 8,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    panels: {
                      _: 9,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    is_partnered: {
                      _: 10,
                      _: _._.readBool,
                      _: _._.writeBool,
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelProfile_Response";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.broadcast_channel_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    broadcast_channel_id: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    image_type: {
                      _: 2,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    image_index: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    image_width: {
                      _: 4,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    image_height: {
                      _: 5,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    file_size: {
                      _: 6,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    file_extension: {
                      _: 7,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    file_hash: {
                      _: 8,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    undo: {
                      _: 9,
                      _: _._.readBool,
                      _: _._.writeBool,
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_SetBroadcastChannelImage_Request";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.replace_image_hash || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    replace_image_hash: {
                      _: 1,
                      _: _._.readString,
                      _: _._.writeString,
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_SetBroadcastChannelImage_Response";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.broadcast_channel_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [2], null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    broadcast_channel_id: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    image_types: {
                      _: 2,
                      _: !0,
                      _: !0,
                      _: _._.readEnum,
                      pbr: _._.readPackedEnum,
                      _: _._.writeRepeatedEnum,
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelImages_Request";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.images || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1], null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    images: {
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelImages_Response";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.image_type || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    image_type: {
                      _: 1,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    image_path: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    image_index: {
                      _: 3,
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelImages_Response_Images";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.broadcast_channel_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    broadcast_channel_id: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelLinks_Request";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.links || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1], null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    links: {
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelLinks_Response";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.link_index || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    link_index: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    url: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    link_description: {
                      _: 3,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    left: {
                      _: 4,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    top: {
                      _: 5,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    width: {
                      _: 6,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    height: {
                      _: 7,
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelLinks_Response_Links";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.broadcast_channel_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [2], null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    broadcast_channel_id: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    links: {
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_SetBroadcastChannelLinkRegions_Request";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.link_index || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    link_index: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    url: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    link_description: {
                      _: 3,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    left: {
                      _: 4,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    top: {
                      _: 5,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    width: {
                      _: 6,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    height: {
                      _: 7,
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_SetBroadcastChannelLinkRegions_Request_Links";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_SetBroadcastChannelLinkRegions_Response";
          }
        }
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.broadcast_channel_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    broadcast_channel_id: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelStatus_Request";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.is_live || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    is_live: {
                      _: 1,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    is_disabled: {
                      _: 2,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    appid: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    viewers: {
                      _: 4,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    views: {
                      _: 5,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    broadcaster_steamid: {
                      _: 6,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    thumbnail_url: {
                      _: 7,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    followers: {
                      _: 8,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    subscribers: {
                      _: 9,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    unique_name: {
                      _: 10,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    broadcast_session_id: {
                      _: 11,
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelStatus_Response";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.broadcast_channel_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    broadcast_channel_id: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    unique_name: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    name: {
                      _: 3,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    appid: {
                      _: 4,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    viewers: {
                      _: 5,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    views: {
                      _: 6,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    thumbnail_url: {
                      _: 7,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    followers: {
                      _: 8,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    headline: {
                      _: 9,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    avatar_url: {
                      _: 10,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    broadcaster_steamid: {
                      _: 11,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    subscribers: {
                      _: 12,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    background_url: {
                      _: 13,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    is_featured: {
                      _: 14,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    is_disabled: {
                      _: 15,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    is_live: {
                      _: 16,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    language: {
                      _: 17,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    reports: {
                      _: 18,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    is_partnered: {
                      _: 19,
                      _: _._.readBool,
                      _: _._.writeBool,
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "GetBroadcastChannelEntry";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetFollowedChannels_Request";
          }
        }
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.results || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1], null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    results: {
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetFollowedChannels_Response";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetSubscribedChannels_Request";
          }
        }
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.results || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1], null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    results: {
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetSubscribedChannels_Response";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.broadcast_channel_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    broadcast_channel_id: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    undo: {
                      _: 2,
                      _: _._.readBool,
                      _: _._.writeBool,
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_FollowBroadcastChannel_Request";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.is_followed || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    is_followed: {
                      _: 1,
                      _: _._.readBool,
                      _: _._.writeBool,
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_FollowBroadcastChannel_Response";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.broadcast_channel_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    broadcast_channel_id: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_SubscribeBroadcastChannel_Request";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.is_subscribed || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    is_subscribed: {
                      _: 1,
                      _: _._.readBool,
                      _: _._.writeBool,
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_SubscribeBroadcastChannel_Response";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.broadcast_channel_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    broadcast_channel_id: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    reason: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_ReportBroadcastChannel_Request";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_ReportBroadcastChannel_Response";
          }
        }
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.broadcast_channel_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    broadcast_channel_id: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelInteraction_Request";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.is_followed || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    is_followed: {
                      _: 1,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    is_subscribed: {
                      _: 2,
                      _: _._.readBool,
                      _: _._.writeBool,
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelInteraction_Response";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.appid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [5], null);
          }
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
                    name: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    image: {
                      _: 3,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    viewers: {
                      _: 4,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    channels: {
                      _: 5,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    release_date: {
                      _: 6,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    developer: {
                      _: 7,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    publisher: {
                      _: 8,
                      _: _._.readString,
                      _: _._.writeString,
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_Game";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.appid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
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
                    algorithm: {
                      _: 2,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    count: {
                      _: 3,
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetGames_Request";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.results || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1], null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    results: {
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetGames_Response";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.algorithm || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    algorithm: {
                      _: 1,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    count: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    appid: {
                      _: 3,
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetChannels_Request";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.results || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1], null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    results: {
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetChannels_Response";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.broadcast_channel_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    broadcast_channel_id: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelBroadcasters_Request";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.broadcasters || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1], null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    broadcasters: {
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelBroadcasters_Response";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.steamid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    steamid: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    name: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    rtmp_token: {
                      _: 3,
                      _: _._.readString,
                      _: _._.writeString,
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelBroadcasters_Response_Broadcaster";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.issuer_steamid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    issuer_steamid: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    chatter_steamid: {
                      _: 2,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    time_expires: {
                      _: 3,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    permanent: {
                      _: 4,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    name: {
                      _: 5,
                      _: _._.readString,
                      _: _._.writeString,
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_ChatBan";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.broadcast_channel_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    broadcast_channel_id: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    chatter_steamid: {
                      _: 2,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    duration: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    permanent: {
                      _: 4,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    undo: {
                      _: 5,
                      _: _._.readBool,
                      _: _._.writeBool,
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_AddChatBan_Request";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_AddChatBan_Response";
          }
        }
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.broadcast_channel_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    broadcast_channel_id: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetChatBans_Request";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.results || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1], null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    results: {
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetChatBans_Response";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.broadcast_channel_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    broadcast_channel_id: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    moderator_steamid: {
                      _: 2,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    undo: {
                      _: 3,
                      _: _._.readBool,
                      _: _._.writeBool,
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_AddChatModerator_Request";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_AddChatModerator_Response";
          }
        }
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.broadcast_channel_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    broadcast_channel_id: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetChatModerators_Request";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.steamid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    steamid: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    name: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_ChatModerator";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.results || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1], null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    results: {
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetChatModerators_Response";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.broadcast_channel_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    broadcast_channel_id: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    word: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    undo: {
                      _: 3,
                      _: _._.readBool,
                      _: _._.writeBool,
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_AddWordBan_Request";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_AddWordBan_Response";
          }
        }
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.broadcast_channel_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    broadcast_channel_id: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetWordBans_Request";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.results || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1], null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    results: {
                      _: 1,
                      _: !0,
                      _: !0,
                      _: _._.readString,
                      _: _._.writeRepeatedString,
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetWordBans_Response";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.broadcast_channel_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    broadcast_channel_id: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_JoinChat_Request";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.chat_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [3], null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    chat_id: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    view_url_template: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    flair_group_ids: {
                      _: 3,
                      _: !0,
                      _: !0,
                      _: _._.readUint64String,
                      pbr: _._.readPackedUint64String,
                      _: _._.writeRepeatedUint64String,
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_JoinChat_Response";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.term || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    term: {
                      _: 1,
                      _: _._.readString,
                      _: _._.writeString,
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_Search_Request";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.results || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1], null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    results: {
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_Search_Response";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetSteamTVUserSettings_Request";
          }
        }
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.stream_live_email || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    stream_live_email: {
                      _: 1,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    stream_live_notification: {
                      _: 2,
                      _: _._.readBool,
                      _: _._.writeBool,
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetSteamTVUserSettings_Response";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.stream_live_email || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    stream_live_email: {
                      _: 1,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    stream_live_notification: {
                      _: 2,
                      _: _._.readBool,
                      _: _._.writeBool,
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_SetSteamTVUserSettings_Request";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_SetSteamTVUserSettings_Response";
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetMyBroadcastChannels_Request";
          }
        }
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.results || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1], null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    results: {
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetMyBroadcastChannels_Response";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.broadcasts || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1], null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    broadcasts: {
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_HomePageTemplate_Takeover";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.broadcasts || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1], null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    broadcasts: {
                      _: 1,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    appid: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    title: {
                      _: 3,
                      _: _._.readString,
                      _: _._.writeString,
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_HomePageTemplate_SingleGame";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.appid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
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
                    game_name: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    broadcast: {
                      _: 3,
                      _: _,
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "GameListEntry";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.entries || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1], null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    entries: {
                      _: 1,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    title: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_HomePageTemplate_GameList";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.broadcasts || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1], null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    broadcasts: {
                      _: 1,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    title: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_HomePageTemplate_QuickExplore";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.broadcasts || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1], null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    broadcasts: {
                      _: 1,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    title: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_HomePageTemplate_ConveyorBelt";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.broadcast || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    broadcast: {
                      _: 1,
                      _: _,
                    },
                    title: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    chat_group_id: {
                      _: 3,
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_HomePageTemplate_WatchParty";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.broadcast || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    broadcast: {
                      _: 1,
                      _: _,
                    },
                    title: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_HomePageTemplate_Developer";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.title || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    title: {
                      _: 1,
                      _: _._.readString,
                      _: _._.writeString,
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_HomePageTemplate_Event";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.template_type || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    template_type: {
                      _: 1,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    takeover: {
                      _: 2,
                      _: _,
                    },
                    single_game: {
                      _: 3,
                      _: _,
                    },
                    game_list: {
                      _: 4,
                      _: _,
                    },
                    quick_explore: {
                      _: 5,
                      _: _,
                    },
                    conveyor_belt: {
                      _: 6,
                      _: _,
                    },
                    watch_party: {
                      _: 7,
                      _: _,
                    },
                    developer: {
                      _: 8,
                      _: _,
                    },
                    event: {
                      _: 9,
                      _: _,
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_HomePageContentRow";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetHomePageContents_Request";
          }
        }
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.rows || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1], null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    rows: {
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetHomePageContents_Response";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.broadcast_channel_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    broadcast_channel_id: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelClips_Request";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.broadcast_clip_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    broadcast_clip_id: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    channel_id: {
                      _: 2,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    app_id: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    broadcaster_steamid: {
                      _: 4,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    creator_steamid: {
                      _: 5,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    video_description: {
                      _: 6,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    live_time: {
                      _: 7,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    length_ms: {
                      _: 8,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    thumbnail_path: {
                      _: 9,
                      _: _._.readString,
                      _: _._.writeString,
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_BroadcastClipInfo";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.clips || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1], null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    clips: {
                      _: 1,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    thumbnail_host: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelClips_Response";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.cheer_type || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    cheer_type: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    cheer_amount: {
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_AppCheer_SingleCheerType";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.app_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [3], null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    app_id: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    cheer_target_id: {
                      _: 2,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    cheers: {
                      _: 3,
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_AppCheer_Request";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.aggregation_delay_ms || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    aggregation_delay_ms: {
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_AppCheer_Response";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        var _;
        ((_) => {
          function _(_, _, _) {
            return _.SendMsg(
              "SteamTV.CreateBroadcastChannel#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
                eWebAPIKeyRequirement: 2,
              },
            );
          }
          _.CreateBroadcastChannel = _;
          function _(_, _, _) {
            return _.SendMsg(
              "SteamTV.GetBroadcastChannelID#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 0,
              },
            );
          }
          _.GetBroadcastChannelID = _;
          function _(_, _, _) {
            return _.SendMsg(
              "SteamTV.SetBroadcastChannelProfile#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
                eWebAPIKeyRequirement: 2,
              },
            );
          }
          _.SetBroadcastChannelProfile = _;
          function _(_, _, _) {
            return _.SendMsg(
              "SteamTV.GetBroadcastChannelProfile#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 0,
              },
            );
          }
          _.GetBroadcastChannelProfile = _;
          function _(_, _, _) {
            return _.SendMsg(
              "SteamTV.SetBroadcastChannelImage#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
                eWebAPIKeyRequirement: 2,
              },
            );
          }
          _.SetBroadcastChannelImage = _;
          function _(_, _, _) {
            return _.SendMsg(
              "SteamTV.GetBroadcastChannelImages#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 0,
              },
            );
          }
          _.GetBroadcastChannelImages = _;
          function _(_, _, _) {
            return _.SendMsg(
              "SteamTV.SetBroadcastChannelLinkRegions#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
                eWebAPIKeyRequirement: 2,
              },
            );
          }
          _.SetBroadcastChannelLinkRegions = _;
          function _(_, _, _) {
            return _.SendMsg(
              "SteamTV.GetBroadcastChannelLinks#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 0,
              },
            );
          }
          _.GetBroadcastChannelLinks = _;
          function _(_, _, _) {
            return _.SendMsg(
              "SteamTV.GetBroadcastChannelBroadcasters#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                eWebAPIKeyRequirement: 2,
              },
            );
          }
          _.GetBroadcastChannelBroadcasters = _;
          function _(_, _, _) {
            return _.SendMsg(
              "SteamTV.GetFollowedChannels#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                eWebAPIKeyRequirement: 2,
              },
            );
          }
          _.GetFollowedChannels = _;
          function _(_, _, _) {
            return _.SendMsg(
              "SteamTV.GetSubscribedChannels#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                eWebAPIKeyRequirement: 2,
              },
            );
          }
          _.GetSubscribedChannels = _;
          function _(_, _, _) {
            return _.SendMsg(
              "SteamTV.GetBroadcastChannelStatus#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 0,
              },
            );
          }
          _.GetBroadcastChannelStatus = _;
          function _(_, _, _) {
            return _.SendMsg(
              "SteamTV.FollowBroadcastChannel#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
                eWebAPIKeyRequirement: 2,
              },
            );
          }
          _.FollowBroadcastChannel = _;
          function _(_, _, _) {
            return _.SendMsg(
              "SteamTV.SubscribeBroadcastChannel#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
                eWebAPIKeyRequirement: 2,
              },
            );
          }
          _.SubscribeBroadcastChannel = _;
          function _(_, _, _) {
            return _.SendMsg(
              "SteamTV.GetBroadcastChannelClips#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 0,
              },
            );
          }
          _.GetBroadcastChannelClips = _;
          function _(_, _, _) {
            return _.SendMsg(
              "SteamTV.ReportBroadcastChannel#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
                eWebAPIKeyRequirement: 2,
              },
            );
          }
          _.ReportBroadcastChannel = _;
          function _(_, _, _) {
            return _.SendMsg(
              "SteamTV.GetBroadcastChannelInteraction#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                eWebAPIKeyRequirement: 2,
              },
            );
          }
          _.GetBroadcastChannelInteraction = _;
          function _(_, _, _) {
            return _.SendMsg("SteamTV.GetGames#1", (0, _._)(_, _, _), _, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }
          _.GetGames = _;
          function _(_, _, _) {
            return _.SendMsg("SteamTV.GetChannels#1", (0, _._)(_, _, _), _, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }
          _.GetChannels = _;
          function _(_, _, _) {
            return _.SendMsg("SteamTV.AddChatBan#1", (0, _._)(_, _, _), _, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
              rgBrowserAPISites: ["store", "community"],
            });
          }
          _.AddChatBan = _;
          function _(_, _, _) {
            return _.SendMsg("SteamTV.GetChatBans#1", (0, _._)(_, _, _), _, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }
          _.GetChatBans = _;
          function _(_, _, _) {
            return _.SendMsg(
              "SteamTV.AddChatModerator#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
                eWebAPIKeyRequirement: 2,
                rgBrowserAPISites: ["store", "community"],
              },
            );
          }
          _.AddChatModerator = _;
          function _(_, _, _) {
            return _.SendMsg(
              "SteamTV.GetChatModerators#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 0,
                rgBrowserAPISites: ["store", "community"],
              },
            );
          }
          _.GetChatModerators = _;
          function _(_, _, _) {
            return _.SendMsg("SteamTV.AddWordBan#1", (0, _._)(_, _, _), _, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }
          _.AddWordBan = _;
          function _(_, _, _) {
            return _.SendMsg("SteamTV.GetWordBans#1", (0, _._)(_, _, _), _, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }
          _.GetWordBans = _;
          function _(_, _, _) {
            return _.SendMsg("SteamTV.JoinChat#1", (0, _._)(_, _, _), _, {
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
              rgBrowserAPISites: ["store", "community"],
            });
          }
          _.JoinChat = _;
          function _(_, _, _) {
            return _.SendMsg("SteamTV.Search#1", (0, _._)(_, _, _), _, {
              bConstMethod: !0,
              ePrivilege: 0,
            });
          }
          _.Search = _;
          function _(_, _, _) {
            return _.SendMsg(
              "SteamTV.GetSteamTVUserSettings#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                eWebAPIKeyRequirement: 2,
              },
            );
          }
          _.GetSteamTVUserSettings = _;
          function _(_, _, _) {
            return _.SendMsg(
              "SteamTV.SetSteamTVUserSettings#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
                eWebAPIKeyRequirement: 2,
              },
            );
          }
          _.SetSteamTVUserSettings = _;
          function _(_, _, _) {
            return _.SendMsg(
              "SteamTV.GetMyBroadcastChannels#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                eWebAPIKeyRequirement: 2,
              },
            );
          }
          _.GetMyBroadcastChannels = _;
          function _(_, _, _) {
            return _.SendMsg(
              "SteamTV.GetHomePageContents#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 2,
                eWebAPIKeyRequirement: 1,
              },
            );
          }
          _.GetHomePageContents = _;
          function _(_, _, _) {
            return _.SendMsg("SteamTV.AppCheer#1", (0, _._)(_, _, _), _, {
              ePrivilege: 0,
              eWebAPIKeyRequirement: 1,
            });
          }
          _.AppCheer = _;
        })(_ || (_ = {}));
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = Object.defineProperty,
          _ = Object.getOwnPropertyDescriptor,
          _ = (_, _, _) =>
            _ in _
              ? _(_, _, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: _,
                })
              : (_[_] = _),
          _ = (_, _, _, _) => {
            for (
              var _ = _ > 1 ? void 0 : _ ? _(_, _) : _, _ = _.length - 1, _;
              _ >= 0;
              _--
            )
              (_ = _[_]) && (_ = (_ ? _(_, _, _) : _(_)) || _);
            return _ && _ && _(_, _, _), _;
          },
          _ = (_, _, _) => _(_, typeof _ != "symbol" ? _ + "" : _, _);
        const _ = 4,
          _ = 500,
          _ = 10,
          _ = class _ {
            constructor() {
              _(this, "m_mapChats", new Map()),
                _(this, "m_cmInterface"),
                (0, _._)(this);
            }
            SetCMInterface(_) {
              this.m_cmInterface = _;
            }
            GetCMInterface() {
              return this.m_cmInterface;
            }
            GetChat(_, _) {
              return this.m_mapChats.get(_) || this.m_mapChats.get(_);
            }
            GetOrCreateChat(_, _) {
              let _ = this.GetChat(_, _);
              return _ || ((_ = new _()), this.m_mapChats.set(_ || _, _)), _;
            }
            static Get() {
              return _.s_Singleton || (_.s_Singleton = new _()), _.s_Singleton;
            }
          };
        _(_, "s_Singleton"), _([_._], _.prototype, "m_mapChats", 2);
        let _ = _;
        class _ {
          constructor() {
            _(this, "m_ulBroadcastChannelID", ""),
              _(this, "m_ulChatID", ""),
              _(this, "m_strFlairGroupID", ""),
              _(this, "m_bAutoScroll", !0),
              _(this, "m_ulBroadcastID", ""),
              _(this, "m_ulBroadcastSteamID", ""),
              _(this, "m_tsFirstRequest", null),
              _(this, "m_nFromFirstRequestMS", 0),
              _(this, "m_nNextChatTS", 0),
              _(this, "m_cConsecutiveErrors", 0),
              _(this, "m_nNudgeFactorMS", 0),
              _(this, "m_nLastSleepMS", 0),
              _(this, "m_bReconnecting", !1),
              _(this, "m_strChatURL"),
              _(this, "m_unInstanceID", Math.floor(Math.random() * 4294967296)),
              _(this, "m_strUserSteamID", ""),
              _(this, "m_regexUserEmoticons", null),
              _(this, "m_chatScheduledFunc", null),
              _(this, "m_steamInterface", null),
              _(this, "m_textFilterStore", null),
              _(this, "m_bHasAddedWelcomeChat", !1),
              _(this, "m_mapMutedUsers", {}),
              _(this, "m_mapChannelModeratorUsers", new Map()),
              _(this, "m_mapBroadcastModeratorUsers", new Map()),
              _(this, "m_nRateLimitSeconds", 0),
              _(this, "m_bRateLimited", !1),
              _(this, "m_rgChatMessages", []),
              _(this, "m_rgAnnouncements", []),
              _(this, "m_latestAnnouncement", null),
              (0, _._)(this),
              (this.m_steamInterface = this.CreateSteamInterface());
          }
          InitTextFilter() {
            this.m_textFilterStore = new _._({
              BIsFriend: (0, _._)(),
            });
            let _ = 0;
            _._.steamid !== "" && (_ = new _._(_._.steamid).GetAccountID()),
              this.m_textFilterStore.Init(_, null, new _._());
          }
          get TextFilterStore() {
            return this.m_textFilterStore;
          }
          GetBroadcastSteamID() {
            return this.m_ulBroadcastSteamID;
          }
          GetUserSteamID() {
            return this.m_strUserSteamID;
          }
          CreateSteamInterface() {
            var _;
            const _ = (_ = (0, _._)()) != null ? _ : _.Get().GetCMInterface();
            return (
              _ || (0, _._)(new _._(_._.WEBAPI_BASE_URL, _._.webapi_token))
            );
          }
          StartForSteamID(_, _) {
            (this.m_steamInterface = this.CreateSteamInterface()),
              (this.m_ulBroadcastSteamID = _),
              (this.m_ulBroadcastID = _),
              this.InitTextFilter(),
              this.RequestChatInfo();
          }
          StartForChannel(_) {
            (this.m_steamInterface = this.CreateSteamInterface()),
              (this.m_ulBroadcastChannelID = _),
              (this.m_strUserSteamID = _._.steamid),
              this.InitTextFilter(),
              this.JoinChannelChat();
          }
          Stop() {
            this.m_chatScheduledFunc && this.m_chatScheduledFunc.Cancel();
          }
          async SendMessage(_) {
            const _ = _.trim();
            if (_.length != 0)
              try {
                const _ = _._.Init(_._);
                _.SetBodyFields({
                  chat_id: this.m_ulChatID,
                  message: _,
                  instance_id: this.m_unInstanceID.toString(),
                });
                const _ = await _._.PostChatMessage(
                    this.m_steamInterface.GetServiceTransport(),
                    _,
                  ),
                  _ = {
                    result: _.GetEResult(),
                    cooldown_time_seconds: _.Body().cooldown_time_seconds(),
                    in_game: _.Body().in_game(),
                    persona_name: _.Body().persona_name(),
                  };
                if (_ && _.result && _.result != _._) {
                  let _ = "";
                  _.result == _._
                    ? (_ = (0, _._)("#BroadcastChat_YouMuted"))
                    : _.result == _._
                      ? (_ = (0, _._)(
                          "#BroadcastChat_Cooldown",
                          _.cooldown_time_seconds,
                        ))
                      : (_ = (0, _._)("#BroadcastChat_FailedToSendMsg", _)),
                    this.m_rgChatMessages.push({
                      type: _._.Error,
                      msg: _,
                      client_ts: Number(new Date()),
                      instance_id: this.m_unInstanceID,
                      in_game: _.in_game,
                      persona_name: _.persona_name,
                      steamid: "",
                    });
                  return;
                }
                this.m_nRateLimitSeconds ||
                  (this.m_nRateLimitSeconds = _.cooldown_time_seconds),
                  this.m_nRateLimitSeconds &&
                    ((this.m_bRateLimited = !0),
                    setTimeout(
                      () => (this.m_bRateLimited = !1),
                      this.m_nRateLimitSeconds * 1e3,
                    ));
              } catch {
                this.m_rgChatMessages.push({
                  type: _._.Error,
                  msg: (0, _._)("#BroadcastChat_FailedToSendMsg", _),
                  client_ts: Number(new Date()),
                  instance_id: this.m_unInstanceID,
                  in_game: !1,
                  persona_name: "",
                  steamid: "",
                });
              }
          }
          async RequestChatInfo(_) {
            (this.m_cConsecutiveErrors = 0), (this.m_bReconnecting = !1);
            try {
              const _ = {
                  steamid: this.m_ulBroadcastSteamID,
                  broadcastid: this.m_ulBroadcastID,
                  sessionid: (0, _._)(),
                  notoken: 1,
                },
                _ = await _().get(`${_._.CHAT_BASE_URL}broadcast/getchatinfo`, {
                  params: _,
                  withCredentials: !0,
                  cancelToken: _ == null ? void 0 : _.token,
                });
              (!_ || !_.token.reason) &&
                (0, _._)(() => {
                  const _ = _.data;
                  (this.m_strChatURL = _.view_url_template),
                    (this.m_ulChatID = _.chat_id),
                    (this.m_strFlairGroupID =
                      _.flair_group_ids && _.flair_group_ids[0]),
                    _.blocked && console.log("User is blocked from chat"),
                    _.steamid && (this.m_strUserSteamID = _.steamid),
                    _.emoticons && this.SetOwnedEmoticons(_.emoticons),
                    this.m_bHasAddedWelcomeChat ||
                      (this.m_rgChatMessages.push({
                        type: _._.Notification,
                        msg: (0, _._)("#BroadcastChat_DefaultMessage"),
                        client_ts: Number(new Date()),
                        instance_id: this.m_unInstanceID,
                        in_game: !1,
                        persona_name: "",
                        steamid: "",
                      }),
                      (this.m_bHasAddedWelcomeChat = !0)),
                    this.m_mapBroadcastModeratorUsers.clear(),
                    _.moderators_steamid &&
                      _.moderators_steamid.forEach((_) =>
                        this.m_mapBroadcastModeratorUsers.set(_, !0),
                      ),
                    (this.m_chatScheduledFunc = new _._()),
                    this.m_chatScheduledFunc.Schedule(0, this.RequestLoop);
                });
            } catch (_) {
              console.error(_), console.log("Failed to get chat info!");
            }
          }
          async JoinChannelChat() {
            try {
              const _ = _._.Init(_);
              _.SetBodyFields({
                broadcast_channel_id: this.m_ulBroadcastChannelID,
              });
              let _ = await _.JoinChat(
                this.m_steamInterface.GetServiceTransport(),
                _,
              );
              if (!_.Body().chat_id || !_.Body().view_url_template) {
                console.log("Failed to join channel chat");
                return;
              }
              (this.m_strChatURL = _.Body().view_url_template()),
                (this.m_ulChatID = _.Body().chat_id()),
                (this.m_strFlairGroupID =
                  _.Body().flair_group_ids() && _.Body().flair_group_ids()[0]),
                this.FetchChatModerators(),
                (this.m_rgChatMessages = []),
                this.m_rgChatMessages.push({
                  type: _._.Notification,
                  msg: (0, _._)("#BroadcastChat_DefaultMessage"),
                  client_ts: Number(new Date()),
                  instance_id: this.m_unInstanceID,
                  in_game: !1,
                  persona_name: "",
                  steamid: "",
                }),
                (this.m_bHasAddedWelcomeChat = !0),
                (this.m_chatScheduledFunc = new _._()),
                this.m_chatScheduledFunc.Schedule(0, this.RequestLoop);
            } catch (_) {
              console.error(_), console.log("Failed to join chat!");
            }
          }
          async FetchChatModerators() {
            const _ = _._.Init(_);
            _.SetBodyFields({
              broadcast_channel_id: this.m_ulBroadcastChannelID,
            });
            const _ = (
                await _.GetChatModerators(
                  this.m_steamInterface.GetServiceTransport(),
                  _,
                )
              )
                .Body()
                .results(),
              _ = new Map();
            _.forEach((_) => {
              _.set(_.steamid(), !0);
            }),
              (this.m_mapChannelModeratorUsers = _);
          }
          ReplaceChatAnnouncementIfAny(_) {
            var _;
            ((_ = _.announcements) == null ? void 0 : _.length) > 0
              ? ((this.m_rgAnnouncements = _.announcements.reverse()),
                (!this.m_latestAnnouncement ||
                  JSON.stringify(this.m_latestAnnouncement) !=
                    JSON.stringify(
                      this.m_rgAnnouncements[this.m_rgAnnouncements.length - 1],
                    )) &&
                  (this.m_latestAnnouncement =
                    this.m_rgAnnouncements[this.m_rgAnnouncements.length - 1]))
              : this.m_rgAnnouncements.length > 0 &&
                ((this.m_rgAnnouncements = []),
                (this.m_latestAnnouncement = null));
          }
          async RequestLoop() {
            const _ = {},
              _ = this.m_strChatURL.replace(
                "{0}",
                this.m_nNextChatTS.toString(),
              );
            _ == this.m_strChatURL &&
              this.m_nNextChatTS > 0 &&
              (_._ = this.m_nNextChatTS);
            try {
              const _ = (
                await _().get(_, {
                  params: _,
                })
              ).data;
              this.m_cConsecutiveErrors = 0;
              const _ = _.messages
                .map((_) => ({
                  ..._,
                  type: _._.Chat,
                  client_ts: Number(new Date()),
                }))
                .filter((_) => !this.IsUserMutedLocally(_.steamid));
              this.m_rgChatMessages.push(..._),
                this.ReplaceChatAnnouncementIfAny(_);
              const _ = this.m_bAutoScroll ? 150 : 300;
              if (
                (this.m_rgChatMessages.length > _ &&
                  this.m_rgChatMessages.splice(
                    0,
                    this.m_rgChatMessages.length - _,
                  ),
                _.muted)
              )
                for (const _ of _.muted) {
                  const _ =
                    _.muted == this.m_strUserSteamID
                      ? (0, _._)("#BroadcastChat_YouMuted", _.persona_name)
                      : (0, _._)("#BroadcastChat_UserMuted", _.persona_name);
                  this.m_rgChatMessages.push({
                    type: _._.Notification,
                    msg: _,
                    client_ts: Number(new Date()),
                    instance_id: this.m_unInstanceID,
                    in_game: !1,
                    persona_name: "",
                    steamid: "",
                  });
                }
              if (_.remove_msgs)
                for (const _ of _.remove_msgs)
                  this.RemoveUserMessagesLocal(_.steamid);
              let _ = 0;
              if (
                this.m_tsFirstRequest == null ||
                this.m_nNextChatTS == 0 ||
                _.initial_delay
              ) {
                if (_.initial_delay === "undefined") {
                  console.log(
                    "Need initial_delay to know when to request first chat message",
                  );
                  return;
                }
                (this.m_tsFirstRequest = performance.now() + _.initial_delay),
                  (this.m_nFromFirstRequestMS = 0),
                  (this.m_nNextChatTS = _.next_request),
                  (_ = _.initial_delay);
              } else {
                if (_.next_request < this.m_nNextChatTS) {
                  console.log("Next request in past");
                  return;
                }
                (this.m_nFromFirstRequestMS +=
                  _.next_request - this.m_nNextChatTS),
                  (this.m_nNextChatTS = _.next_request),
                  (_ =
                    this.m_tsFirstRequest +
                    this.m_nFromFirstRequestMS -
                    performance.now() +
                    this.m_nNudgeFactorMS);
              }
              this.m_bReconnecting && (this.m_bReconnecting = !1),
                (this.m_nLastSleepMS = _),
                _ < 0 && (_ = 0),
                this.m_chatScheduledFunc.Schedule(_, this.RequestLoop);
            } catch {
              if (
                (console.log(
                  "Failed to get chat messages. Previous sleep set to: " +
                    this.m_nLastSleepMS +
                    " firstReq: " +
                    this.m_tsFirstRequest +
                    " firstFromRequest: " +
                    this.m_nFromFirstRequestMS +
                    " nudge: " +
                    this.m_nNudgeFactorMS,
                ),
                this.m_cConsecutiveErrors++,
                (this.m_nNudgeFactorMS += _),
                this.m_cConsecutiveErrors >= _)
              ) {
                if (this.m_tsFirstRequest == null) {
                  this.m_rgChatMessages.push({
                    type: _._.Error,
                    msg: (0, _._)("#BroadcastChat_UnableToJoinChat"),
                    client_ts: Number(new Date()),
                    instance_id: this.m_unInstanceID,
                    in_game: !1,
                    persona_name: "",
                    steamid: "",
                  });
                  return;
                }
                (this.m_cConsecutiveErrors = 0),
                  (this.m_bReconnecting = !0),
                  this.SyncChat();
              }
              this.m_chatScheduledFunc.Schedule(_, this.RequestLoop);
            }
          }
          GetUserEmoticons() {
            return this.m_regexUserEmoticons;
          }
          SetOwnedEmoticons(_) {
            let _ = [];
            for (let _ = 0; _ < _.length; _++) {
              let _ = _[_];
              _.length >= 2 && _[0] == ":"
                ? _.push(_.substr(1, _.length - 2))
                : _.push(_);
            }
            let _ = ":(" + _.join("|") + "):";
            this.m_regexUserEmoticons = new RegExp(_, "g");
          }
          async UpdateBroadcastChatModerator(_, _, _) {
            {
              const _ = new FormData();
              _.append("broadcaststeamid", this.m_ulBroadcastSteamID),
                _.append("moderatorsteamid", _),
                _.append("bAdd", _ ? "1" : "0"),
                _.append("sessionid", (0, _._)());
              try {
                await _().post(
                  `${_._.CHAT_BASE_URL}broadcast/ajaxupdatechannelmod`,
                  _,
                ),
                  this.m_mapBroadcastModeratorUsers.set(_, _);
                const _ = (0, _._)(
                  _
                    ? "#BroadcastChat_AddedModerator"
                    : "#BroadcastChat_RemovedModerator",
                  _,
                );
                this.m_rgChatMessages.push({
                  type: _._.Notification,
                  msg: _,
                });
              } catch {
                const _ = (0, _._)(
                  _
                    ? "#BroadcastChat_AddModeratorFailed"
                    : "#BroadcastChat_RemoveModeratorFailed",
                  _,
                );
                this.m_rgChatMessages.push({
                  type: _._.Error,
                  msg: _,
                });
              }
            }
          }
          async UpdateUserChatBan(_, _, _, _, _, _) {
            const _ = this.m_ulBroadcastSteamID,
              _ = this.m_strUserSteamID;
            if (this.m_ulBroadcastChannelID) {
              const _ = _._.Init(_);
              _.SetBodyFields({
                broadcast_channel_id: this.m_ulBroadcastChannelID,
                chatter_steamid: _,
                duration: _ * 3600,
                permanent: _,
                undo: _,
              }),
                await _.AddChatBan(
                  this.m_steamInterface.GetServiceTransport(),
                  _,
                );
            } else {
              const _ = new FormData();
              _.append("broadcaststeamid", _),
                _.append("issuersteamid", _),
                _.append("chattersteamid", _),
                _.append("bantype", _),
                _.append("duration", _.toString()),
                _.append("perm", _ ? "1" : "0"),
                _.append("sessionid", (0, _._)());
              try {
                await _().post(
                  `${_._.CHAT_BASE_URL}broadcast/ajaxupdateusermute`,
                  _,
                ),
                  _ == _._._
                    ? delete this.m_mapMutedUsers[_]
                    : (this.m_mapMutedUsers[_] = _);
              } catch {
                console.log("Failed to update mute for " + _);
              }
            }
          }
          async MuteUserForSession(_, _) {
            if (_ == this.m_strUserSteamID || this.m_ulBroadcastSteamID == _)
              return;
            let _ = this.m_ulBroadcastSteamID == this.m_strUserSteamID;
            if (!this.m_mapMutedUsers[_]) {
              this.m_mapMutedUsers[_] = _;
              try {
                const _ = _._.Init(_._);
                _.SetBodyFields({
                  chat_id: this.m_ulChatID,
                  user_steamid: _,
                  muted: !0,
                }),
                  await _._.MuteBroadcastChatUser(
                    this.m_steamInterface.GetServiceTransport(),
                    _,
                  );
              } catch {
                _ &&
                  (this.m_rgChatMessages.push({
                    type: _._.Error,
                    msg: (0, _._)("#BroadcastChat_UserMuteFailed", _),
                    client_ts: Number(new Date()),
                    instance_id: this.m_unInstanceID,
                    in_game: !1,
                    persona_name: "",
                    steamid: "",
                  }),
                  delete this.m_mapMutedUsers[_]);
              }
            }
            _ ||
              this.m_rgChatMessages.push({
                type: _._.Notification,
                msg: (0, _._)("#BroadcastChat_UserMutedLocal", _),
                client_ts: Number(new Date()),
                instance_id: this.m_unInstanceID,
                in_game: !1,
                persona_name: "",
                steamid: "",
              });
          }
          async UnmuteUserForSession(_, _) {
            if (_ == this.m_strUserSteamID) return;
            if (
              (this.m_mapMutedUsers[_] && delete this.m_mapMutedUsers[_],
              this.m_ulBroadcastSteamID == this.m_strUserSteamID)
            )
              try {
                const _ = _._.Init(_._);
                _.SetBodyFields({
                  chat_id: this.m_ulChatID,
                  user_steamid: _,
                  muted: !1,
                }),
                  await _._.MuteBroadcastChatUser(
                    this.m_steamInterface.GetServiceTransport(),
                    _,
                  ),
                  this.m_rgChatMessages.push({
                    type: _._.Notification,
                    msg: (0, _._)("#BroadcastChat_UserUnmutedLocal", _),
                    client_ts: Number(new Date()),
                    instance_id: this.m_unInstanceID,
                    in_game: !1,
                    persona_name: "",
                    steamid: "",
                  });
              } catch {
                this.m_rgChatMessages.push({
                  type: _._.Error,
                  msg: (0, _._)("#BroadcastChat_UserUnmuteFailed", _),
                  client_ts: Number(new Date()),
                  instance_id: this.m_unInstanceID,
                  in_game: !1,
                  persona_name: "",
                  steamid: "",
                });
              }
            else
              this.m_rgChatMessages.push({
                type: _._.Notification,
                msg: (0, _._)("#BroadcastChat_UserUnmutedLocal", _),
                client_ts: Number(new Date()),
                instance_id: this.m_unInstanceID,
                in_game: !1,
                persona_name: "",
                steamid: "",
              });
          }
          RemoveUserMessagesLocal(_) {
            this.m_rgChatMessages = this.m_rgChatMessages.filter(
              (_) => _.steamid !== _,
            );
          }
          async RemoveUserMessagesServer(_, _) {
            if (_ != this.m_strUserSteamID)
              try {
                const _ = _._.Init(_._);
                _.SetBodyFields({
                  chat_id: this.m_ulChatID,
                  user_steamid: _,
                }),
                  await _._.RemoveUserChatText(
                    this.m_steamInterface.GetServiceTransport(),
                    _,
                  );
              } catch {
                this.m_rgChatMessages.push({
                  type: _._.Error,
                  msg: (0, _._)("#BroadcastChat_RemoveMessagesFailed", _),
                  client_ts: Number(new Date()),
                  instance_id: this.m_unInstanceID,
                  in_game: !1,
                  persona_name: "",
                  steamid: "",
                });
              }
          }
          async UpdateChatMessageFlair(_) {
            const _ = _._.Init(_._);
            _.SetBodyFields({
              chat_id: this.m_ulChatID,
              flair: `^${this.m_strFlairGroupID}^:${_}:`,
            }),
              await _._.UpdateChatMessageFlair(
                this.m_steamInterface.GetServiceTransport(),
                _,
              );
          }
          IsUserMutedLocally(_) {
            return !!this.m_mapMutedUsers[_];
          }
          BIsUserBroadcastModerator(_) {
            return this.m_mapBroadcastModeratorUsers.has(_);
          }
          IsUserBroadcaster(_) {
            return _ === this.m_ulBroadcastSteamID;
          }
          SyncChat() {
            (this.m_tsFirstRequest = null),
              (this.m_nFromFirstRequestMS = 0),
              (this.m_nNextChatTS = 0),
              (this.m_rgChatMessages = []);
          }
        }
        _([_._], _.prototype, "m_mapChannelModeratorUsers", 2),
          _([_._], _.prototype, "m_mapBroadcastModeratorUsers", 2),
          _([_._], _.prototype, "m_nRateLimitSeconds", 2),
          _([_._], _.prototype, "m_bRateLimited", 2),
          _([_._], _.prototype, "m_rgChatMessages", 2),
          _([_._], _.prototype, "m_latestAnnouncement", 2),
          _([_._], _.prototype, "FetchChatModerators", 1),
          _([_._], _.prototype, "RequestLoop", 1),
          _([_._], _.prototype, "MuteUserForSession", 1);
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
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
          _ = Object.defineProperty,
          _ = Object.getOwnPropertyDescriptor,
          _ = (_, _, _) =>
            _ in _
              ? _(_, _, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: _,
                })
              : (_[_] = _),
          _ = (_, _, _, _) => {
            for (
              var _ = _ > 1 ? void 0 : _ ? _(_, _) : _, _ = _.length - 1, _;
              _ >= 0;
              _--
            )
              (_ = _[_]) && (_ = (_ ? _(_, _, _) : _(_)) || _);
            return _ && _ && _(_, _, _), _;
          },
          _ = (_, _, _) => _(_, typeof _ != "symbol" ? _ + "" : _, _);
        const _ = class _ {
          constructor() {
            _(this, "giveaway_id"),
              _(this, "seconds_until_drawing"),
              _(this, "rtime_start"),
              _(this, "rtime_end"),
              _(this, "closed"),
              _(this, "winner_count"),
              (0, _._)(this);
          }
          BIsValid() {
            return this.giveaway_id !== void 0 && this.giveaway_id !== null;
          }
          BStarted() {
            return (
              this.BIsValid() &&
              (this.seconds_until_drawing >= 0 || this.winner_count > 0)
            );
          }
          clone() {
            const _ = new _();
            return (
              (_.giveaway_id = this.giveaway_id),
              (_.seconds_until_drawing = this.seconds_until_drawing),
              (_.rtime_start = this.rtime_start),
              (_.rtime_end = this.rtime_end),
              (_.closed = this.closed),
              (_.winner_count = this.winner_count),
              _
            );
          }
        };
        _([_._], _.prototype, "giveaway_id", 2),
          _([_._], _.prototype, "seconds_until_drawing", 2),
          _([_._], _.prototype, "rtime_start", 2),
          _([_._], _.prototype, "rtime_end", 2),
          _([_._], _.prototype, "closed", 2),
          _([_._], _.prototype, "winner_count", 2);
        let _ = _;
        const _ = class _ {
          constructor() {
            _(this, "m_mapGiveawayIDToNextDrawInfo", new Map()),
              _(this, "m_mapGiveawayIDAndInstanceToNextDrawInfo", new Map()),
              _(this, "m_bLoadedFromConfig", !1),
              _(this, "m_mapNextDrawChangeCallback", new Map()),
              (0, _._)(this);
          }
          GetKey(_, _) {
            return _ + "_" + _;
          }
          GetInfoByInstance(_, _) {
            return this.m_mapGiveawayIDAndInstanceToNextDrawInfo.get(
              this.GetKey(_, _),
            );
          }
          GetNextDrawChangeCallback(_) {
            return (
              this.m_mapNextDrawChangeCallback.has(_) ||
                this.m_mapNextDrawChangeCallback.set(_, new _._()),
              this.m_mapNextDrawChangeCallback.get(_)
            );
          }
          CopyToGiveaway(_, _) {
            _.closed != _.closed && (_.closed = _.closed),
              _.giveaway_id != _.giveaway_id && (_.giveaway_id = _.giveaway_id),
              _.rtime_start != _.rtime_start && (_.rtime_start = _.rtime_start),
              _.rtime_end != _.rtime_end && (_.rtime_end = _.rtime_end),
              _.winner_count != _.winner_count &&
                (_.winner_count = _.winner_count),
              _.seconds_until_drawing != _.seconds_until_drawing &&
                (_.seconds_until_drawing = _.seconds_until_drawing);
          }
          async ReloadGiveaway(_, _) {
            if (!_) return null;
            let _ = _._.STORE_BASE_URL + "prizes/nextdraw/" + _,
              _ = null,
              _ = {
                origin: self.origin,
              };
            return (
              (_ = await _().get(_, {
                params: _,
              })),
              (0, _._)(() => {
                if (
                  (this.m_mapGiveawayIDToNextDrawInfo.has(_) ||
                    this.m_mapGiveawayIDToNextDrawInfo.set(_, new _()),
                  this.CopyToGiveaway(
                    _.data,
                    this.m_mapGiveawayIDToNextDrawInfo.get(_),
                  ),
                  _ !== void 0)
                ) {
                  const _ = this.GetKey(_, _);
                  this.m_mapGiveawayIDAndInstanceToNextDrawInfo.has(_) ||
                    this.m_mapGiveawayIDAndInstanceToNextDrawInfo.set(
                      _,
                      new _(),
                    ),
                    this.CopyToGiveaway(
                      _.data,
                      this.m_mapGiveawayIDAndInstanceToNextDrawInfo.get(_),
                    );
                }
              }),
              this.GetNextDrawChangeCallback(_).Dispatch(
                this.m_mapGiveawayIDToNextDrawInfo.get(_),
              ),
              this.m_mapGiveawayIDToNextDrawInfo.get(_)
            );
          }
          static Get() {
            return (
              _.s_Singleton ||
                ((_.s_Singleton = new _()), _.s_Singleton.Init()),
              _.s_Singleton
            );
          }
          Init() {
            if (!this.m_bLoadedFromConfig) {
              let _ = (0, _._)("giveawaynextdraw", "application_config");
              if (_ && _.giveaway_id) {
                let _ = new _();
                this.CopyToGiveaway(_, _),
                  this.m_mapGiveawayIDToNextDrawInfo.set(_.giveaway_id, _);
              }
              this.m_bLoadedFromConfig = !0;
            }
          }
        };
        _(_, "s_Singleton"),
          _([_._], _.prototype, "m_mapGiveawayIDToNextDrawInfo", 2),
          _([_._], _.prototype, "CopyToGiveaway", 1);
        let _ = _;
        const _ = class _ {
          constructor() {
            _(this, "m_intervalID"),
              _(this, "m_intervalCountDownID"),
              _(this, "m_myInstanceNumber", 0),
              (this.m_myInstanceNumber = _.s_GlobalInstance),
              (_.s_GlobalInstance += 1);
          }
          ClearRefreshInterval() {
            this.m_intervalID &&
              (window.clearInterval(this.m_intervalID),
              (this.m_intervalID = void 0));
          }
          ClearCountDown() {
            this.m_intervalCountDownID &&
              (window.clearInterval(this.m_intervalCountDownID),
              (this.m_intervalCountDownID = void 0));
          }
          SetupRefreshDataInterval(_, _) {
            if ((this.ClearRefreshInterval(), !_.closed)) {
              let _ =
                _.seconds_until_drawing <= 0 && _.winner_count == 0 ? 6e4 : 5e3;
              this.m_intervalID = window.setInterval(_, _);
            }
          }
          SetupCountDown(_, _) {
            _ > 0 && (this.m_intervalCountDownID = window.setInterval(_, 1e3));
          }
        };
        _(_, "s_GlobalInstance", 0),
          _([_._], _.prototype, "ClearRefreshInterval", 1),
          _([_._], _.prototype, "ClearCountDown", 1),
          _([_._], _.prototype, "SetupRefreshDataInterval", 1),
          _([_._], _.prototype, "SetupCountDown", 1);
        let _ = _;
        function _(_, _) {
          const _ = _.Get().GetInfoByInstance(_, _.m_myInstanceNumber);
          (_.seconds_until_drawing -= 1),
            _.seconds_until_drawing == 0 && _.ClearCountDown();
        }
        function _(_, _) {
          const _ = _.Get().GetInfoByInstance(_, _.m_myInstanceNumber);
          _ &&
            _.BIsValid() &&
            _.seconds_until_drawing <= 0 &&
            !_.closed &&
            (_.ClearCountDown(),
            _.Get()
              .ReloadGiveaway(_, _.m_myInstanceNumber)
              .then((_) => {
                _.SetupCountDown(_.seconds_until_drawing, () => _(_, _));
              }));
        }
        function _(_) {
          const [_] = (0, _.useState)(new _()),
            _ = (0, _._)();
          (0, _.useEffect)(
            () => (
              _.Get()
                .ReloadGiveaway(_, _.m_myInstanceNumber)
                .then((_) => {
                  _.SetupRefreshDataInterval(_, () => _(_, _)),
                    _.SetupCountDown(_.seconds_until_drawing, () => _(_, _)),
                    _();
                }),
              () => {
                _.ClearRefreshInterval(), _.ClearCountDown();
              }
            ),
            [_, _, _],
          );
          const _ = _.Get().GetInfoByInstance(_, _.m_myInstanceNumber),
            [_, _, _] = (0, _._)(() => [
              _ == null ? void 0 : _.winner_count,
              _ == null ? void 0 : _.closed,
              _ == null ? void 0 : _.seconds_until_drawing,
            ]);
          return {
            bLoadingGiveawayInfo:
              !_ || _.giveaway_id == null || !_.BStarted() || _ === void 0,
            winner_count: _,
            closed: _,
            seconds_until_drawing: _,
          };
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          return (0, _.jsx)(_._, {
            onEscKeypress: _.closeModal,
            bDisableBackgroundDismiss: !0,
            children: (0, _.jsx)(_, {
              redirectURL: _.redirectURL,
              guestOption: _.guestOption,
            }),
          });
        }
        function _(_) {
          const { redirectURL: _ = window.location.href } = _;
          return jsx(SimpleModal, {
            active: !0,
            children: jsx(_, {
              redirectURL: _,
            }),
          });
        }
        function _() {
          (0, _._)(
            (0, _.jsx)(_, {
              ownerWin: window,
              redirectURL: window.location.href,
            }),
            window,
            {
              strTitle: (0, _._)("#Login_SignInTitle"),
            },
          );
        }
        function _(_, _) {
          ShowModalDialog(
            jsx(_, {
              ownerWin: window,
              redirectURL: _,
              guestOption: _,
            }),
            window,
            {
              strTitle: Localize("#Login_SignInTitle"),
            },
          );
        }
        function _(_) {
          const { redirectURL: _, guestOption: _ } = _,
            [_] = (0, _.useState)(
              new _._(
                new _._(_._.WEBAPI_BASE_URL),
              ).GetAnonymousServiceTransport(),
            ),
            [_, _] = (0, _.useState)(!1),
            _ = (_) => {
              _ == _._.k_PrimaryDomainFail ? _(!0) : window.location.assign(_);
            };
          return (0, _.jsx)("div", {
            children: _
              ? (0, _.jsx)(_._, {})
              : (0, _.jsx)(_._, {
                  autoFocus: !0,
                  transport: _,
                  platform: _._._,
                  onComplete: _,
                  redirectUrl: _,
                  theme: "modal",
                  children:
                    _ &&
                    (0, _.jsx)(_._, {
                      redirectURL: _,
                    }),
                }),
          });
        }
      },
      chunkid: (module) => {
        module.exports = {
          strStreamIconCapsuleArtHeight: "58px",
          strStreamIconScreenshotArtHeight: "58px",
          bordered_container: "_3zXpFCyX2IiaD-MNF5KJFf",
          WidePlayer: "_3zjvrmOCIh31clDHjpLE2a",
          store_chat_ctn: "_21N-VV6Gvjjc1FqzOMJQfi",
          item_drop_ctn: "ifxDfv8dAGa5u71nRT0CJ",
          BorderedContainerPromotion: "-b_1HPR-CqjjzrTnTG2fn",
          bordered_title: "WsfbqpkdutNGWu3V4uhn_",
          streamTitle: "XMkaslAYoJyTgLBY3WHVJ",
          bordered_subtitle: "_3tYeiJ6LHC_iVhqb9zqOMy",
          bordered_corner_container: "_3IBcNy1U-I38_F9BNw-VHE",
          bordered_corner_expanded: "ahz31bshwySKGB_tBKf14",
          bordered_corner_shrinked: "L8sFYvKOUztrhXdjxy7mp",
          broadcast_settings_icon: "_37ugZJhL-qCRkdeZBRju2h",
          side_panels: "T_zpRAGXggYgVaRyCSXDu",
          wrapper: "_1mH-vDK7JF0NBAdZfdzr1a",
          video_placeholder: "_1KU955BfHBkZdSvJncjc9V",
          embedded_player: "_12fBJU1kOnQCeKc9JFTGMX",
          NoChat: "_2QQm1StfkXOLXrBhLy_jYP",
          video_container: "_1gbNxru_N2ui-EXc2_zmRy",
          viewer_bar: "_2YgphHYykz192eH3FgalS4",
          viewer_links: "_2EQpO5nLkHNXFdPk0ZnoY2",
          chat_link: "_3a0zX_I8eGlU5CYF3lcQjs",
          settings_link: "_1ThkelBkPfoE80ibfGyyVB",
          external_link: "_1n1BMOyCVFA0y6ULd_laPH",
          viewer_count: "_1MrTWpNan4htXK4Kql6ms8",
          vod_title: "_2xKaMJn0nexa3MMJvN6yq-",
          stream_icon_and_viewer_container: "_2sbrGTttGmHbz8ZPsO1YuR",
          display_capsule_art: "SsORVFNW3KBOdsIxDVqcd",
          ViewerNum: "_1reMoMi3BZbMUs6jHW93f1",
          StreamCapsule: "biTh7mrlaSv_WSY2gFsCH",
          stream_icon_container: "_2zBOiujXasDdHPmFPW4O90",
          stream_icon_hide_on_hover: "qYFsGojW19eJQAuemyuHQ",
          stream_icon_show_on_hover: "_29z3Nu6SGTNFDwIw8Gdvuk",
          stream_icon: "_1LBYspkgF9X97b89kPRBFC",
          stream_icon_selected: "mSpzeNvpTqIiZHkJgHRw7",
          multistream: "_1DS-WZoUJyBitKOZoq7u3n",
          MultiStreamCtn: "_1K6j5rrGvLPb8aT2L7CBAA",
          scrollingstreams: "_3aYWlUqW6-SosI72nizpP4",
          clear_div: "_1oCVbTJqa4Av40NuPdztIv",
          NoSelect: "_3Zm9dcDmIQkcWVzEq0IB-E",
          broadcast_floating: "_2WNxa8Qii8HrG8e0th6oB8",
          PopOutVideoTitleBar: "_184SIP7TlwJaOjOVVxLBLS",
          PopOutVideoTitleText: "_28O6dX6-Xf37oViWRRhvjz",
          PopOutVideoCloseButton: "_3bIsS_eft2P6BaAUZdlqme",
          BroadcastPlayerContainer: "_3VvcXgvuoyH2OXPyzZXeVT",
          ChatContainer: "_3kqwu6KzpbMqW5fIlXMIKI",
          BroadcastAndChat: "_1aJ9yfIUd-oGDvpo5-BuBx",
          detail_chat_ctn: "IaFnsy98_mIwYox4zmFu2",
          ChatEntry: "Rs7EltAKuQWw9U0v2bKxp",
          Event: "_1A0NY-wvZmZAqMMiw9oTYR",
          container: "_2yiy6ghVhj3fkC4I01odHC",
          LeftPanelCtn: "_6O_psaoFJTLs30M_ePzZ7",
          RightPanelCtn: "yRHl2kJWdMGdwVN_70nrP",
          SidePanelBackground: "_2FYu31I46rjm0DVxq-ufK9",
          LeftPanel: "o6XqrPpvDrpRsE7SpW8qJ",
        };
      },
      chunkid: (module) => {
        module.exports = {
          BroadcastChat: "_3URK7gSLJV_b2M32URtdZ1",
          ChatEntry: "_3soy-wJhd4RZ8SNtC31AOz",
          ChatPanel: "_2ZCAIdTy8CoxNNL8KBGNM",
          ChatMessages: "_3M5L0Ioa2wfgEXvySi1hr6",
          EmoticonContainer: "_1wa4oT25nXzeGxGXYpgDwI",
          ChatSend: "_3JUnDuh4M77s4kfjpnkaYW",
          ChatBox: "_2qfgSP2OtiZ-r-oBJanIaJ",
          ChatControls: "_1TekO7c6uL1uezWI5iWEBG",
          MessageChat: "_22PB4rET-Rx8JtZs34nMkf",
          MessageName: "BJe6CMne992juEIk9iv-k",
          MessageContents: "PNYZaITw4xz8Xi60JGcBM",
          EmoticonsOnly: "gFjH8o1u6iAUuxxkUey3m",
          MessageNotification: "_3Xb4_FEsLWwa-ux6iYDjLZ",
          MessageError: "_8MzyWIQ6TwS_AnWj_m4rL",
          minHeightZero: "r7HLM4rGlw8BlvCfsQoMx",
          ChatLoginButton: "_2TAQo-af_j4l7zy9uy5p-l",
          RateLimitProgressBarContainer: "JPqUGxAKEhSxZR4Hr99D1",
          RateLimitProgressBar: "_1EcVKYO2FR6NiyJchLLbol",
          TimedProgressBarContainer: "_39xGjKkRIIE7HwloXCWT41",
          wrapper: "_2vz6RRjc3uhVClPT9KmsWO",
          pie: "_1k4dSfTb9MQQkhRmcTNjXs",
          spinner: "_3nRh57_ZMuIbHDg29qxFoy",
          rota: "_1xXh6121fD_MtzKqUoAKP8",
          filler: "_3EegkD4UmE1ZI1j7DOgAIe",
          fill: "_2tyuX1freBgl1ICX3yI2qG",
          mask: "_1V4KedCnQKPf-TNpoigdVe",
          SelectedUserNameCtn: "_3K4QXV1l7toIASzIn03a9w",
          SelectedUserName: "c907VNi3QBNJZYF7xxgUB",
          FlairContainer: "_166wpHbAcQPnZog52jPZLN",
          RoleFlairContainer: "_1QRJ2HWdG8P7m3J0-ATU4u",
          Description: "_105HH_vRwSwjIsvw_F-73M",
          LogInPrompt: "CsA8vCxom50xEpq0oyOHG",
          SignInButton: "_1dMwWQHXZbAAqaFBL4YyCP",
        };
      },
      chunkid: (module) => {
        module.exports = {
          GiveawayWinnerBox: "_3cv4lblvGYp_wrnLaNEVn0",
          GiveawayWinnerAnnounced: "oLk3wFE5C0ocSKj9h7UMR",
          WinnerFlash: "_29x--KnTUnv5WIHAtqtwID",
          GiveawayWinnerBoxRight: "_2ftrc0KIXzfdR16ghJYvPg",
          GiveawayWinnerText: "_1SY2g9O-qYNIpmXPLu4XKK",
          GiveawayWinnerCountdown: "_1eP67dgalghp9Y7VMqedDT",
          GiveawayWinnerBoxLeft: "N6Rk1L-HIjqiJV3iXqRGK",
          GiveawayWinnerArt: "_1sgypTHPFS1VzmPOCkP_pK",
          GiveawayWinnerQuestion: "_3mvdct5S8-AGn0JrsRW0Vo",
          InViewerBar: "_25VQ8K4B2BcYKAbkfDx6Z_",
          GiveawayRegisterButton: "eKSAvf7P4Na3LE-0FkJFY",
          GiveawayAlreadyRegistered: "_2AVNRKDYvludWnAzqwlRYA",
        };
      },
      chunkid: (module) => {
        module.exports = {
          BroadcastPlayerLite: "SAxf3Rqn792kM6c4U_vx5",
          BroadcastPlayerLiteVideo: "yCd0zjymzfw3HkVm-1YwX",
          BroadcastContext: "_3TnYLKMweBMIC69qFU6OJj",
          BroadcastPlaceholderImg: "_3hxn99MT14hFUCrUp6zbsf",
        };
      },
      chunkid: (module) => {
        module.exports = {
          narrowWidth: "500px",
          FriendsListInsetShadowCtn: "_1qeW35auMlJ5pJVNtBC-bF",
          FriendListInsetShadowTop: "_1osHa9KHOmdCDNrA232z4N",
          FriendListInsetShadowBottom: "_2OoTJwlWvzvAysWOOEQaXS",
        };
      },
    },
  ]);
})();

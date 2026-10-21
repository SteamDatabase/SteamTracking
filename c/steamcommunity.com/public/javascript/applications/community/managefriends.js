(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [9129],
    {
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports),
          __webpack_require__._(module_exports, {
            default: () => _,
          });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _() {
          return (0, _.jsx)(_._, {});
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
        });
        var _ = __webpack_require__("chunkid");
        const _ = "fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb";
        function _(_, _) {
          let _ = ".jpg";
          (!_ || _ === "0000000000000000000000000000000000000000") && (_ = _),
            _.length == 44 && ((_ = _.substr(-4)), (_ = _.substr(0, 40)));
          let _ = _._.AVATAR_BASE_URL;
          return (
            _ ||
              ((_ = _._.MEDIA_CDN_COMMUNITY_URL + "images/avatars/"),
              (_ += _.substr(0, 2) + "/")),
            (_ += _),
            _ && _ != "small" && (_ += "_" + _),
            (_ += _),
            _
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
          _ = __webpack_require__._(_),
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
        class _ {
          constructor() {
            (0, _._)(this);
          }
          m_mapProfiles = new Map();
          m_mapProfilesLoading = new Map();
          async LoadProfiles(_, _) {
            (0, _._)(
              _.length <= 500,
              "Check LoadProfiles, requesting too many steam IDs",
            );
            let _ = _.filter(
              (_) =>
                !this.m_mapProfiles.has(_) && !this.m_mapProfilesLoading.has(_),
            );
            if (_.length == 0) return this.m_mapProfilesLoading.get(_[0]);
            let _ = _._.COMMUNITY_BASE_URL + "actions/ajaxresolveusers",
              _ = _().get(_, {
                params: {
                  steamids: _.join(","),
                },
                withCredentials: !0,
                cancelToken: _?.token,
              });
            _.forEach((_) => this.m_mapProfilesLoading.set(_, _));
            let _ = await _;
            _.data &&
              _.status == 200 &&
              _.data.forEach((_) => {
                (_.avatar_hash = _.avatar_url),
                  (_.avatar_url_medium = (0, _._)(_.avatar_url, "medium")),
                  (_.avatar_url_full = (0, _._)(_.avatar_url, "full")),
                  (_.avatar_url = (0, _._)(_.avatar_url)),
                  this.m_mapProfiles.set(_.steamid, _),
                  this.m_mapProfilesLoading.delete(_.steamid);
              });
          }
          GetProfile(_) {
            return this.m_mapProfiles.get(_);
          }
          GetProfileByAccountID(_) {
            return this.m_mapProfiles.get(
              _._.InitFromAccountID(_).ConvertTo64BitString(),
            );
          }
          GetProfileBySteamID(_) {
            return this.m_mapProfiles.get(_.ConvertTo64BitString());
          }
          BHasProfile(_) {
            return this.m_mapProfiles.has(_);
          }
          BHasProfileByAccountID(_) {
            return this.m_mapProfiles.has(
              _._.InitFromAccountID(_).ConvertTo64BitString(),
            );
          }
          BHasProfileBySteamID(_) {
            return this.m_mapProfiles.has(_.ConvertTo64BitString());
          }
          BHasAllProfilesBySteamID(_) {
            return !_.some((_) => !this.BHasProfileBySteamID(_));
          }
          GetProfileURLBySteamID(_) {
            const _ = this.GetProfileBySteamID(_);
            return _ && _.profile_url
              ? _._.COMMUNITY_BASE_URL + "id/" + _.profile_url
              : _._.COMMUNITY_BASE_URL + "profiles/" + _.ConvertTo64BitString();
          }
          GetPersonaNameBySteamID(_) {
            const _ = this.GetProfileBySteamID(_);
            return _ && _.persona_name ? _.persona_name : "";
          }
        }
        _([_._], _.prototype, "m_mapProfiles", 2);
        const _ = new _();
        function _(_) {
          const _ = React.useMemo(
              () => (_ ? (typeof _ == "string" ? new CSteamID(_) : _) : null),
              [_],
            ),
            [_, _] = useState(!!_ && !_.BHasProfileBySteamID(_));
          useEffect(() => {
            const _ = axios.CancelToken.source();
            return (
              _ &&
                !_.BHasProfileBySteamID(_) &&
                _.LoadProfiles([_.ConvertTo64BitString()])
                  .catch((_) => {
                    const _ = GetMsgAndErrorCodeFromResponse(_);
                    console.error(
                      "useUserProfile failed to load profile for " +
                        _.ConvertTo64BitString() +
                        ": " +
                        _.strErrorMsg,
                      _,
                    );
                  })
                  .finally(() => {
                    _.token.reason || _(!1);
                  }),
              () => _.cancel("unmounting useUserProfile")
            );
          }, [_]);
          const _ = !!_ && _.GetProfileBySteamID(_);
          return [_, _];
        }
        function _(_) {
          const _ = React.useMemo(
            () => (_ ? CSteamID.InitFromAccountID(_) : null),
            [_],
          );
          return _(_);
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
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
        class _ extends _.Component {
          state = {
            invite_token: "",
            input_search: "",
            friend_code_copied: !1,
            invite_copied: !1,
          };
          async componentDidMount() {
            const _ = await _().get(
              _._.COMMUNITY_BASE_URL + "invites/ajaxgetall",
              {
                params: {
                  sessionid: (0, _._)(),
                },
              },
            );
            if (_ && _.data && _.data.tokens) {
              const _ = _.data.tokens.filter((_) => _.valid);
              _.length
                ? this.setState({
                    invite_token: _[0].invite_token,
                  })
                : this.OnCreateInviteLink();
            } else this.OnCreateInviteLink();
          }
          async OnCreateInviteLink() {
            const _ = new FormData();
            _.append("sessionid", (0, _._)()),
              _.append("steamid_user", _._.steamid),
              _.append("duration", (720 * 60 * 60).toString());
            const _ = await _().post(
              _._.COMMUNITY_BASE_URL + "invites/ajaxcreate",
              _,
            );
            _ &&
              _.data &&
              _.data.invite &&
              this.setState({
                invite_token: _.data.invite.invite_token,
              });
          }
          OnCopy(_, _) {
            _ === "friend_code" &&
              (this.setState({
                friend_code_copied: !0,
              }),
              setTimeout(
                () =>
                  this.setState({
                    friend_code_copied: !1,
                  }),
                1e3,
              )),
              _ === "invite" &&
                (this.setState({
                  invite_copied: !0,
                }),
                setTimeout(
                  () =>
                    this.setState({
                      invite_copied: !1,
                    }),
                  1e3,
                )),
              (0, _._)(_);
          }
          async OnAddFriend(_) {
            const _ = new FormData();
            _.append("sessionID", (0, _._)()),
              _.append("steamid", _),
              _.append("accept_invite", "0");
            try {
              const _ = await _().post(
                _._.COMMUNITY_BASE_URL + "actions/AddFriendAjax",
                _,
              );
              return _ && _.data && _.data.success == _._;
            } catch {
              return !1;
            }
          }
          OnSearchChange(_) {
            this.setState({
              input_search: _.target.value,
            });
          }
          OnSearchKeyDown(_) {
            _.keyCode === _._ && this.OnSearchSubmit();
          }
          OnSearchSubmit() {
            window.open(
              _._.COMMUNITY_BASE_URL +
                "search/users/#text=" +
                encodeURIComponent(this.state.input_search),
              "_self",
            );
          }
          render() {
            const _ = _._.short_url + "/" + this.state.invite_token;
            return (0, _.jsxs)("div", {
              children: [
                (0, _.jsx)("div", {
                  className: _().HeaderBlock,
                  children: (0, _._)("#ManageFriends_AddAFriend"),
                }),
                (0, _.jsxs)("div", {
                  className: _().Background,
                  children: [
                    (0, _.jsx)("h1", {
                      className: _().Heading,
                      children: (0, _._)("#ManageFriends_YourFriendCode"),
                    }),
                    (0, _.jsxs)("div", {
                      className: _().CopyContainer,
                      children: [
                        (0, _.jsx)("h1", {
                          className: _().Text,
                          children: _._.accountid,
                        }),
                        (0, _.jsx)(_._, {
                          autoFocus: !0,
                          className: _().Button,
                          onClick: () =>
                            this.OnCopy("friend_code", String(_._.accountid)),
                          children: this.state.friend_code_copied
                            ? (0, _._)("#ManageFriends_Copied")
                            : (0, _._)("#ManageFriends_Copy"),
                        }),
                      ],
                    }),
                    (0, _.jsx)("p", {
                      className: _().Body,
                      children: (0, _._)("#ManageFriends_EnterFriendCode"),
                    }),
                    (0, _.jsx)(_, {
                      onButtonClick: this.OnAddFriend,
                      buttonText: (0, _._)("#ManageFriends_SendInvite"),
                      bDisableForSelf: !0,
                      bDisableForFriends: !0,
                      bShowStatus: !0,
                    }),
                  ],
                }),
                (0, _.jsxs)("div", {
                  className: _().DimBackground,
                  children: [
                    (0, _.jsx)("h1", {
                      className: _().Heading,
                      children: (0, _._)("#ManageFriends_OrSendQuickInvite"),
                    }),
                    (0, _.jsx)("p", {
                      className: _().Body,
                      children: (0, _._)(
                        "#ManageFriends_QuickInviteDescription",
                      ),
                    }),
                    (0, _.jsx)("p", {
                      className: _().Body,
                      children: (0, _._)("#ManageFriends_QuickInviteNote"),
                    }),
                    (0, _.jsxs)("div", {
                      className: _().CopyContainer,
                      children: [
                        !!this.state.invite_token &&
                          (0, _.jsx)("div", {
                            className: _().Link,
                            children: _,
                          }),
                        (0, _.jsx)(_._, {
                          className: _().Button,
                          onClick: () => this.OnCopy("invite", _),
                          children: this.state.invite_copied
                            ? (0, _._)("#ManageFriends_Copied")
                            : (0, _._)("#ManageFriends_Copy"),
                        }),
                      ],
                    }),
                    (0, _.jsx)(_._, {
                      className: _().GenerateLinkButton,
                      onClick: this.OnCreateInviteLink,
                      children: (0, _._)("#ManageFriends_CreateInviteLink"),
                    }),
                  ],
                }),
                (0, _.jsxs)("div", {
                  className: _().Background,
                  children: [
                    (0, _.jsx)("h1", {
                      className: _().Heading,
                      children: (0, _._)("#ManageFriends_OrSearch"),
                    }),
                    (0, _.jsx)("br", {}),
                    (0, _.jsxs)("div", {
                      style: {
                        display: "flex",
                        alignItems: "center",
                        maxWidth: "598px",
                        position: "relative",
                      },
                      children: [
                        (0, _.jsx)("div", {
                          style: {
                            width: "100%",
                          },
                          children: (0, _.jsx)(_._, {
                            className: _().Input,
                            onKeyDown: this.OnSearchKeyDown,
                            value: this.state.input_search,
                            onChange: this.OnSearchChange,
                            placeholder: (0, _._)(
                              "#ManageFriends_EnterProfileName",
                            ),
                          }),
                        }),
                        (0, _.jsx)("div", {
                          _: "searchIcon",
                          style: {
                            position: "absolute",
                            right: "10px",
                            cursor: "pointer",
                          },
                          onClick: this.OnSearchSubmit,
                          children: (0, _.jsx)(_.eSy, {}),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            });
          }
        }
        _([_._], _.prototype, "OnCreateInviteLink", 1),
          _([_._], _.prototype, "OnCopy", 1),
          _([_._], _.prototype, "OnAddFriend", 1),
          _([_._], _.prototype, "OnSearchChange", 1),
          _([_._], _.prototype, "OnSearchKeyDown", 1),
          _([_._], _.prototype, "OnSearchSubmit", 1);
        class _ extends _.Component {
          state = {
            input_friend_code: "",
            disable_send_invite: !1,
            searchResult: null,
            invite_status: "pending",
          };
          m_currentRequest = 0;
          async OnFriendCodeChange(_) {
            const _ = _.target.value.split(",")[0];
            this.setState({
              input_friend_code: _,
              invite_status: "pending",
            }),
              window.clearTimeout(this.m_currentRequest),
              (this.m_currentRequest = window.setTimeout(
                () => this.LoadProfile(_),
                500,
              ));
          }
          async LoadProfile(_) {
            if (_) {
              const _ = _._.InitFromAccountID(Number(_));
              await _.LoadProfiles([_.ConvertTo64BitString()]);
              const _ = _.GetProfile(_.ConvertTo64BitString());
              _
                ? this.setState({
                    searchResult: _,
                    disable_send_invite:
                      _._.is_limited ||
                      (this.props.bDisableForFriends && _.is_friend) ||
                      (this.props.bDisableForSelf && _.steamid === _._.steamid),
                  })
                : this.setState({
                    searchResult: null,
                  });
            } else
              this.setState({
                searchResult: null,
              });
          }
          async OnActionClick(_) {
            const _ = new FormData();
            _.append("sessionID", (0, _._)()),
              _.append("steamid", _),
              _.append("accept_invite", "0"),
              this.setState({
                disable_send_invite: !0,
              }),
              (await this.props.onButtonClick(_))
                ? (this.setState({
                    input_friend_code: "",
                    invite_status: "success",
                  }),
                  setTimeout(
                    () =>
                      this.setState({
                        searchResult: null,
                      }),
                    3e3,
                  ))
                : this.setState({
                    invite_status: "failure",
                    disable_send_invite: !1,
                  });
          }
          render() {
            return (0, _.jsxs)("div", {
              className: _().FriendCodeSelector,
              children: [
                (0, _.jsx)(_._, {
                  className: _().Input,
                  value: this.state.input_friend_code,
                  onChange: this.OnFriendCodeChange,
                  placeholder: (0, _._)(
                    "#ManageFriends_EnterFriendCodePlaceholder",
                  ),
                }),
                (0, _.jsx)(_, {
                  searchResult: this.state.searchResult,
                  invite_status: this.state.invite_status,
                  bShowStatus: this.props.bShowStatus,
                  children: (0, _.jsx)(_._, {
                    className: _().SendInviteButton,
                    onClick: () =>
                      this.OnActionClick(this.state.searchResult.steamid),
                    disabled: this.state.disable_send_invite,
                    children: this.props.buttonText,
                  }),
                }),
              ],
            });
          }
        }
        _([_._], _.prototype, "OnFriendCodeChange", 1),
          _([_._], _.prototype, "LoadProfile", 1),
          _([_._], _.prototype, "OnActionClick", 1);
        const _ = (_) => {
          const {
              searchResult: _,
              invite_status: _,
              bShowStatus: _,
              children: _,
            } = _,
            _ = (0, _._)();
          return _
            ? (0, _.jsxs)("div", {
                className: _().ProfileCard,
                children: [
                  (0, _.jsxs)("div", {
                    className: _().UserContainer,
                    children: [
                      (0, _.jsx)("div", {
                        className: _().Image,
                        children: (0, _.jsx)("img", {
                          style: {
                            width: "100%",
                            height: "100%",
                          },
                          src: _.avatar_url_full,
                        }),
                      }),
                      (0, _.jsxs)("div", {
                        className: _().ProfileContent,
                        children: [
                          (0, _.jsx)("h1", {
                            className: _().Heading,
                            children: _.persona_name,
                          }),
                          (0, _.jsxs)("div", {
                            className: _().ProfileLink,
                            children: [
                              (0, _.jsx)(_._, {
                                target: _ ? void 0 : "_blank",
                                href:
                                  _._.COMMUNITY_BASE_URL +
                                  "profiles/" +
                                  _.steamid,
                                children: (0, _._)(
                                  "#ManageFriends_ProfileLink",
                                ),
                              }),
                              (0, _.jsx)("br", {}),
                              (0, _.jsxs)("span", {
                                className: _().Body,
                                children: [
                                  _.real_name,
                                  (0, _.jsx)("br", {}),
                                  `${_.city}${_.city ? "," : ""} ${_.state}${_.state ? "," : ""} ${_.country}`,
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      _,
                    ],
                  }),
                  (0, _.jsxs)("div", {
                    className: _().ProfileLink,
                    children: [
                      _.is_friend &&
                        (0, _.jsx)("div", {
                          children: (0, _._)("#ManageFriends_IsFriend"),
                        }),
                      _.friends_in_common != 0 &&
                        (0, _.jsx)("div", {
                          children: (0, _.jsx)(_._, {
                            target: _ ? void 0 : "_blank",
                            href:
                              _._.COMMUNITY_BASE_URL +
                              "profiles/" +
                              _.steamid +
                              "/friendscommon",
                            children:
                              _.friends_in_common === 1
                                ? (0, _._)(
                                    "#ManageFriends_FriendsInCommonSingular",
                                    _.friends_in_common,
                                  )
                                : (0, _._)(
                                    "#ManageFriends_FriendsInCommon",
                                    _.friends_in_common,
                                  ),
                          }),
                        }),
                      _ &&
                        _ === "failure" &&
                        (0, _.jsx)("div", {
                          className: _().Failure,
                          children: (0, _._)("#ManageFriends_InviteFailure"),
                        }),
                      _ &&
                        _ === "success" &&
                        (0, _.jsx)("div", {
                          className: _().Success,
                          children: (0, _._)(
                            "#ManageFriends_InviteSuccess",
                            _.persona_name,
                          ),
                        }),
                    ],
                  }),
                ],
              })
            : null;
        };
      },
      chunkid: (module) => {
        module.exports = {
          "duration-app-launch": "800ms",
          Heading: "_3kTQIYYiQiVR_DeJepkOwJ",
          Body: "_2s393FLIe2l5quVJHoS53K",
          HeaderBlock: "X9bYNT3rKpg6L1Cgq45pG",
          Background: "_1xwi06sEKXpwIpZcgHle_h",
          DimBackground: "_2N55HNCo3jLIzL6RNNlRUo",
          Input: "_1BUtyMrOPfXVpnfK-Z5OnA",
          CopyContainer: "_1HjkZ3ooQw-4TV518YPtvp",
          Text: "_1ehqRyqgPLFNoFwFifHPPR",
          Link: "_18Sc08YQfmAIVx8H1h8A1V",
          Button: "_2772E6skxrFIemLRdp0EKv",
          GenerateLinkButton: "T52tUwptWdakIKgaAVn3i",
          ProfileCard: "_28a_CNvDls7VgWoPW2-9Kz",
          UserContainer: "_29w-2Eb_kk-viSqGW8RTn2",
          Image: "_1n4lDOfOQzOhvshIPt1UWT",
          ProfileContent: "_1qz9xLw5YttjO8gVfuMwS",
          ProfileLink: "_1tEt0fYckNbFAqGLEfrsfj",
          Failure: "UoMCo-OvninFBFozRomeh",
          Success: "zNkywkFbUJio86FBwBWwx",
          FriendCodeSelector: "_3nmSpgo_T_V0-Er7h8J2Ar",
          SendInviteButton: "kcAlkPA1uhcWs_5eatvVd",
        };
      },
    },
  ]);
})();

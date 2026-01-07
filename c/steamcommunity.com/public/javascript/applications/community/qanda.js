"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [5836],
  {
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports),
        __webpack_require__._(module_exports, {
          QAndARoutes: () => _,
          default: () => _,
        });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      const _ = {
        Dashboard: (_) => `/questions/${_}/dashboard`,
        FullPageView: (_, _) => `/questions/${_}/view/${_}`,
      };
      const _ = function (_) {
        return _.createElement(
          _._,
          null,
          _.createElement(_._, {
            path: _.Dashboard(":vanity_str"),
            render: (_) =>
              _.createElement(_._, {
                config: {
                  "qanda-root": () => {
                    const { vanity_str: _ } = _.match.params;
                    return _.createElement(_._, {
                      vanity_str: _,
                    });
                  },
                },
              }),
          }),
          _.createElement(_._, {
            path: _.FullPageView(":vanity_str", ":session_gid"),
            render: (_) =>
              _.createElement(_._, {
                config: {
                  "qanda-root": () => {
                    const { vanity_str: _, session_gid: __webpack_require__ } =
                      _.match.params;
                    return _.createElement(_._, {
                      gidSession: __webpack_require__,
                    });
                  },
                },
              }),
          }),
          _.createElement(_._, {
            component: _._,
          }),
        );
      };
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
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
              __webpack_require__.map((_) => {
                var _;
                return null !== (_ = _.get(_)) && void 0 !== _ ? _ : null;
              })
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
        return (0, _._)("PlayerLinkDetails", () => _(_));
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = __webpack_require__("chunkid");
      function _(_) {
        return _.toLocaleString((0, _._)());
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _() {
        return (0, _._)().languages.map((_) => {
          return 2 == (_ = _.strISOCode).length && _._.COUNTRY
            ? `${_}-${_._.COUNTRY}`
            : _;
          var _;
        });
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      function _(_) {
        return "[object Object]" === Object.prototype.toString.call(_);
      }
      function _(..._) {
        return JSON.stringify(_, (_, _) => {
          if (
            (function (_) {
              if (!_(_)) return !1;
              const _ = _.constructor;
              if (void 0 === _) return !0;
              const _ = _.prototype;
              return (
                !!_(_) &&
                !!Object.prototype.hasOwnProperty.call(_, "isPrototypeOf")
              );
            })(_)
          ) {
            const _ = {};
            return (
              Object.keys(_)
                .sort()
                .forEach((_) => {
                  _[_] = _[_];
                }),
              _
            );
          }
          return _;
        });
      }
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = __webpack_require__("chunkid");
      const _ = (0, _.createContext)({
        instances: {},
        factories: {},
      });
      function _(_, _) {
        var _;
        const _ = (0, _.useContext)(_),
          _ = "string" == typeof _ ? _ : _(..._);
        let _ = _;
        for (; _; ) {
          if (_ in _.instances) return _.instances[_];
          if (_ in _.factories) break;
          _ = _.parent;
        }
        const _ = (
          null !== (_ = null == _ ? void 0 : _.factories[_]) && void 0 !== _
            ? _
            : _
        )();
        return ((null != _ ? _ : _).instances[_] = _), _;
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _._,
        _: () => _,
        _: () => _._,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        let _ = "offline";
        return (
          _ &&
            (_.is_ingame
              ? (_ = "ingame")
              : _.m_broadcastAccountId
                ? (_ = "watchingbroadcast")
                : _.is_online && (_ = "online"),
            _.is_awayOrSnooze && (_ += " awayOrSnooze")),
          _
        );
      }
      class _ {
        constructor(_) {
          (this.m_bInitialized = !1),
            (this.m_ePersonaState = 0),
            (this.m_unGamePlayedAppID = 0),
            (this.m_gameid = "0"),
            (this.m_unPersonaStateFlags = 0),
            (this.m_strPlayerName = ""),
            (this.m_strAvatarHash = _._),
            (this.m_strAccountName = ""),
            (this.m_rtLastSeenOnline = 0),
            (this.m_strGameExtraInfo = ""),
            (this.m_unGameServerIP = 0),
            (this.m_unGameServerPort = 0),
            (this.m_game_lobby_id = ""),
            (this.m_bPlayerNamePending = !1),
            (this.m_bAvatarPending = !1),
            (this.m_broadcastId = void 0),
            (this.m_broadcastAccountId = void 0),
            (this.m_broadcastAppId = void 0),
            (this.m_broadcastViewerCount = void 0),
            (this.m_strBroadcastTitle = void 0),
            (this.m_bCommunityBanned = void 0),
            (this.m_eGamingDeviceType = 0),
            (this.m_mapRichPresence = _._.map()),
            (this.m_bNameInitialized = !1),
            (this.m_bStatusInitialized = !1),
            (this.m_strProfileURL = void 0),
            (0, _._)(this),
            (this.m_steamid = _);
        }
        Reset() {
          (this.m_ePersonaState = 0),
            (this.m_unGamePlayedAppID = 0),
            (this.m_gameid = "0"),
            (this.m_strGameExtraInfo = ""),
            (this.m_unGameServerIP = 0),
            (this.m_unGameServerPort = 0),
            (this.m_game_lobby_id = ""),
            this.m_mapRichPresence.clear(),
            (this.m_broadcastId = void 0),
            (this.m_broadcastAccountId = void 0),
            (this.m_broadcastAppId = void 0),
            (this.m_broadcastViewerCount = void 0),
            (this.m_strBroadcastTitle = void 0),
            (this.m_eGamingDeviceType = 0);
        }
        GetAccountID() {
          return this.m_steamid.GetAccountID();
        }
        get is_online() {
          return 0 != this.m_ePersonaState && 7 != this.m_ePersonaState;
        }
        get is_ingame() {
          return (
            this.is_online &&
            (0 != this.m_unGamePlayedAppID || "0" != this.m_gameid)
          );
        }
        get is_watchingbroadcast() {
          return !!this.m_broadcastAccountId;
        }
        get is_in_nonsteam_game() {
          return 0 == this.m_unGamePlayedAppID && "0" != this.m_gameid;
        }
        get is_in_joinable_game() {
          return (
            this.has_joinable_game_flag ||
            this.is_in_valid_lobby ||
            this.has_server_ip
          );
        }
        get has_joinable_game_flag() {
          var _;
          return (
            0 !=
            (2 &
              (null !== (_ = this.m_unPersonaStateFlags) && void 0 !== _
                ? _
                : 0))
          );
        }
        get connect_string() {
          return this.m_mapRichPresence.get("connect");
        }
        get is_in_valid_lobby() {
          return null != this.m_game_lobby_id && "0" != this.m_game_lobby_id;
        }
        get has_server_ip() {
          return 0 != this.m_unGameServerIP;
        }
        get is_awayOrSnooze() {
          return 3 == this.m_ePersonaState || 4 == this.m_ePersonaState;
        }
        HasStateFlag(_) {
          var _;
          return (
            0 !=
            ((null !== (_ = this.m_unPersonaStateFlags) && void 0 !== _
              ? _
              : 0) &
              _)
          );
        }
        get last_seen_online() {
          return this.m_rtLastSeenOnline;
        }
        ClearStateOnDisconnect() {
          0 != this.m_ePersonaState && this.Reset();
        }
        get is_golden() {
          return this.HasStateFlag(4);
        }
        GetCurrentGameName() {
          return this.m_strGameExtraInfo
            ? this.m_strGameExtraInfo
            : this.m_unGamePlayedAppID
              ? _._.GetAppInfo(this.m_unGamePlayedAppID).name
              : "";
        }
        GetCurrentGameIconURL() {
          return this.m_unGamePlayedAppID
            ? _._.GetAppInfo(this.m_unGamePlayedAppID).icon_url
            : "";
        }
        BIsAppInfoReady() {
          return (
            !this.m_unGamePlayedAppID ||
            _._.GetAppInfo(this.m_unGamePlayedAppID).is_initialized
          );
        }
        HasCurrentGameRichPresence() {
          return this.m_mapRichPresence.has("steam_display");
        }
        HasRichPresenceForViewGameInfo() {
          return !!(
            this.m_mapRichPresence.has("status") ||
            this.m_mapRichPresence.has("connect") ||
            this.m_mapRichPresence.has("connect_private")
          );
        }
        GetCurrentGameRichPresence() {
          if (this.HasCurrentGameRichPresence()) {
            let _ = _._.GetRichPresenceLoc(this.m_unGamePlayedAppID);
            if (_) {
              let _ = this.m_mapRichPresence.get("steam_display");
              return _.Localize(_, this.m_mapRichPresence);
            }
          } else if (this.HasStateFlag(8))
            return (0, _._)("#PersonaStateRemotePlayTogether");
          return "";
        }
        GetCurrentGameStatus() {
          return (
            this.GetCurrentGameRichPresence() ||
            this.m_mapRichPresence.get("status") ||
            ""
          );
        }
        GetOfflineStatusUpdateRate() {
          if (0 == this.last_seen_online) return 3e4;
          const _ = 3600;
          let _ = 1e3;
          const _ = _._.CMInterface.GetServerRTime32() - this.last_seen_online;
          return (_ *= _ > 86400 ? _ : _ > 7200 ? 60 : 15), _;
        }
        GetOfflineStatusTime() {
          if (0 == this.last_seen_online)
            return (0, _._)("#PersonaStateOffline");
          let _ = this.GetOfflineStatusUpdateRate();
          (!_._.IN_MOBILE || _ <= 60) && (0, _._)(_);
          let _ = _._.CMInterface.GetServerRTime32() - this.last_seen_online;
          return _ < 60
            ? (0, _._)("#PersonaStateLastSeen_JustNow")
            : (0, _._)("#PersonaStateLastSeen", (0, _._)(_));
        }
        GetLocalizedOnlineStatus() {
          switch (this.m_ePersonaState) {
            case 0:
            case 7:
              return this.GetOfflineStatusTime();
            case 1:
              return (0, _._)("#PersonaStateOnline");
            case 2:
              return (0, _._)("#PersonaStateBusy");
            case 3:
              return (0, _._)("#PersonaStateAway");
            case 4:
              return (0, _._)("#PersonaStateSnooze");
            case 5:
              return (0, _._)("#PersonaStateLookingToTrade");
            case 6:
              return (0, _._)("#PersonaStateLookingToPlay");
            default:
              return "";
          }
        }
        get has_public_party_beacon() {
          return this.m_mapRichPresence.has("__beacon") && this.is_ingame;
        }
        get player_group() {
          return this.m_mapRichPresence.has("steam_player_group")
            ? this.m_mapRichPresence.get("steam_player_group")
            : "";
        }
        get player_group_size() {
          return this.m_mapRichPresence.has("steam_player_group_size")
            ? Number.parseInt(
                this.m_mapRichPresence.get("steam_player_group_size"),
              )
            : 0;
        }
        get online_state() {
          return this.is_online
            ? this.is_ingame
              ? "in-game"
              : this.m_broadcastAccountId
                ? "watchingbroadcast"
                : "online"
            : "offline";
        }
        BHasAvatarSet() {
          return this.m_strAvatarHash != _._;
        }
        get avatar_url() {
          return (0, _._)(this.m_strAvatarHash);
        }
        get avatar_url_medium() {
          return (0, _._)(this.m_strAvatarHash, "medium");
        }
        get avatar_url_full() {
          return (0, _._)(this.m_strAvatarHash, "full");
        }
        static SortStatusComparator(_, _, _) {
          if (_.has_public_party_beacon) {
            if (!_.has_public_party_beacon) return -1;
          } else {
            if (_.has_public_party_beacon) return 1;
            if (_.is_ingame) {
              if (!_.is_ingame) return -1;
              if (!_) return 0;
              if (_.is_awayOrSnooze) {
                if (!_.is_awayOrSnooze) return 1;
              } else if (_.is_awayOrSnooze) return -1;
            } else if (_.is_ingame) return 1;
          }
          if (_.is_online) {
            if (!_.is_online) return -1;
          } else if (_.is_online) return 1;
          if (_)
            if (_.is_awayOrSnooze) {
              if (!_.is_awayOrSnooze) return 1;
            } else if (_.is_awayOrSnooze) return -1;
          return 0;
        }
        GetCommunityProfileURL() {
          return this.m_strProfileURL
            ? `${_._.COMMUNITY_BASE_URL}id/${this.m_strProfileURL}/`
            : `${_._.COMMUNITY_BASE_URL}profiles/${this.m_steamid.ConvertTo64BitString()}/`;
        }
      }
      (0, _._)([_._], _.prototype, "m_bInitialized", void 0),
        (0, _._)([_._], _.prototype, "m_ePersonaState", void 0),
        (0, _._)([_._], _.prototype, "m_unGamePlayedAppID", void 0),
        (0, _._)([_._], _.prototype, "m_gameid", void 0),
        (0, _._)([_._], _.prototype, "m_unPersonaStateFlags", void 0),
        (0, _._)([_._], _.prototype, "m_strPlayerName", void 0),
        (0, _._)([_._], _.prototype, "m_strAvatarHash", void 0),
        (0, _._)([_._], _.prototype, "m_strAccountName", void 0),
        (0, _._)([_._], _.prototype, "m_rtLastSeenOnline", void 0),
        (0, _._)([_._], _.prototype, "m_strGameExtraInfo", void 0),
        (0, _._)([_._], _.prototype, "m_unGameServerIP", void 0),
        (0, _._)([_._], _.prototype, "m_unGameServerPort", void 0),
        (0, _._)([_._], _.prototype, "m_game_lobby_id", void 0),
        (0, _._)([_._], _.prototype, "m_bPlayerNamePending", void 0),
        (0, _._)([_._], _.prototype, "m_bAvatarPending", void 0),
        (0, _._)([_._], _.prototype, "m_broadcastId", void 0),
        (0, _._)([_._], _.prototype, "m_broadcastAccountId", void 0),
        (0, _._)([_._], _.prototype, "m_broadcastAppId", void 0),
        (0, _._)([_._], _.prototype, "m_broadcastViewerCount", void 0),
        (0, _._)([_._], _.prototype, "m_strBroadcastTitle", void 0),
        (0, _._)([_._], _.prototype, "m_bCommunityBanned", void 0),
        (0, _._)([_._], _.prototype, "m_eGamingDeviceType", void 0),
        (0, _._)([_._], _.prototype, "m_bNameInitialized", void 0);
    },
    chunkid: (module, module_exports, __webpack_require__) => {
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
        _ = __webpack_require__("chunkid");
      function _(_) {
        const _ = (0, _._)(),
          _ = _.useContext(_);
        return (0, _._)(_(_, _, _));
      }
      function _(_) {
        const _ = _.useRef(void 0),
          _ = _(_);
        return _.data
          ? _
          : (_.current ||
              (_.current = new _._(
                "string" == typeof _ ? new _._(_) : _._.InitFromAccountID(_),
              )),
            {
              ..._,
              data: _.current,
            });
      }
      const _ = _.createContext({
        loadPersonaState: async (_, _) => {
          if (null == _) return null;
          const _ = await (function (_) {
            return null != _ ? _ : (_ = (0, _._)(_));
          })(_).load(_._.InitFromAccountID(_).ConvertTo64BitString());
          return (function (_, _) {
            var _, _;
            let _ = new _._(_);
            const _ = null == _ ? void 0 : _.public_data,
              _ = null == _ ? void 0 : _.private_data;
            (_.m_bInitialized = !!_),
              (_.m_ePersonaState =
                null !== (_ = null == _ ? void 0 : _.persona_state) &&
                void 0 !== _
                  ? _
                  : 0),
              (_.m_strAvatarHash = (null == _ ? void 0 : _.sha_digest_avatar)
                ? (0, _._)(_.sha_digest_avatar)
                : _._),
              (_.m_strPlayerName =
                null !== (_ = null == _ ? void 0 : _.persona_name) &&
                void 0 !== _
                  ? _
                  : _.ConvertTo64BitString()),
              (_.m_strAccountName = null == _ ? void 0 : _.account_name),
              (null == _ ? void 0 : _.persona_state_flags) &&
                (_.m_unPersonaStateFlags =
                  null == _ ? void 0 : _.persona_state_flags);
            (null == _ ? void 0 : _.game_id) &&
              (_.m_gameid = null == _ ? void 0 : _.game_id);
            (null == _ ? void 0 : _.game_server_ip_address) &&
              (_.m_unGameServerIP =
                null == _ ? void 0 : _.game_server_ip_address);
            (null == _ ? void 0 : _.lobby_steam_id) &&
              (_.m_game_lobby_id = null == _ ? void 0 : _.lobby_steam_id);
            (null == _ ? void 0 : _.game_extra_info) &&
              (_.m_strGameExtraInfo = null == _ ? void 0 : _.game_extra_info);
            (null == _ ? void 0 : _.profile_url) &&
              (_.m_strProfileURL = _.profile_url);
            return _;
          })(_._.InitFromAccountID(_), _);
        },
      });
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
  },
]);

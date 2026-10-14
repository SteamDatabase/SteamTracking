"use strict";
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [4072],
    {
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
                _ = await _.xtC.GetPlayerLinkDetails(_, {
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
                _.map((_) => {
                  var _;
                  return (_ = _.get(_)) != null ? _ : null;
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
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
        });
        const _ = 1,
          _ = 2,
          _ = 4,
          _ = 8,
          _ = 256,
          _ = 512,
          _ = 1024,
          _ = 2048,
          _ = 4096,
          _ = 8192;
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        function _(_) {
          return Object.prototype.toString.call(_) === "[object Object]";
        }
        function _(_) {
          if (!_(_)) return !1;
          const _ = _.constructor;
          if (typeof _ == "undefined") return !0;
          const _ = _.prototype;
          return !(
            !_(_) || !Object.prototype.hasOwnProperty.call(_, "isPrototypeOf")
          );
        }
        function _(..._) {
          return JSON.stringify(_, (_, _) => {
            if (_(_)) {
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
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = (0, _.createContext)({
          instances: {},
          factories: {},
        });
        function _(_) {
          const { name: _, fnFactory: _, children: _ } = _,
            _ = React.useContext(_),
            [_] = useState({}),
            _ = useMemo(
              () => ({
                instances: _,
                factories: {
                  ..._.factories,
                  [_]: _,
                },
                parent: _,
              }),
              [_, _, _],
            );
          return jsx(_.Provider, {
            value: _,
            children: _,
          });
        }
        function _(_, _) {
          var _;
          const _ = (0, _.useContext)(_),
            _ = typeof _ == "string" ? _ : _(..._);
          let _ = _;
          for (; _; ) {
            if (_ in _.instances) return _.instances[_];
            if (_ in _.factories) break;
            _ = _.parent;
          }
          const _ = (
            (_ = _ == null ? void 0 : _.factories[_]) != null ? _ : _
          )();
          return ((_ != null ? _ : _).instances[_] = _), _;
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
            _(this, "m_steamid"),
              _(this, "m_bInitialized", !1),
              _(this, "m_ePersonaState", _.cU3),
              _(this, "m_unGamePlayedAppID", 0),
              _(this, "m_gameid", "0"),
              _(this, "m_unPersonaStateFlags", 0),
              _(this, "m_strPlayerName", ""),
              _(this, "m_strAvatarHash", _._),
              _(this, "m_strAccountName", ""),
              _(this, "m_rtLastSeenOnline", 0),
              _(this, "m_strGameExtraInfo", ""),
              _(this, "m_unGameServerIP", 0),
              _(this, "m_unGameServerPort", 0),
              _(this, "m_game_lobby_id", ""),
              _(this, "m_bPlayerNamePending", !1),
              _(this, "m_bAvatarPending", !1),
              _(this, "m_broadcastId"),
              _(this, "m_broadcastAccountId"),
              _(this, "m_broadcastAppId"),
              _(this, "m_broadcastViewerCount"),
              _(this, "m_strBroadcastTitle"),
              _(this, "m_bCommunityBanned"),
              _(this, "m_eGamingDeviceType", _.eSB),
              _(this, "m_mapRichPresence", _._.map()),
              _(this, "m_bNameInitialized", !1),
              _(this, "m_bStatusInitialized", !1),
              _(this, "m_strProfileURL"),
              (0, _._)(this),
              (this.m_steamid = _);
          }
          Reset() {
            (this.m_ePersonaState = _.cU3),
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
              (this.m_eGamingDeviceType = _.eSB);
          }
          GetAccountID() {
            return this.m_steamid.GetAccountID();
          }
          GetSteamIDAsString() {
            return this.m_steamid.ConvertTo64BitString();
          }
          get is_online() {
            return (
              this.m_ePersonaState != _.cU3 && this.m_ePersonaState != _._3b
            );
          }
          get is_ingame() {
            return (
              this.is_online &&
              (this.m_unGamePlayedAppID != 0 || this.m_gameid != "0")
            );
          }
          get is_watchingbroadcast() {
            return !!this.m_broadcastAccountId;
          }
          get is_in_nonsteam_game() {
            return this.m_unGamePlayedAppID == 0 && this.m_gameid != "0";
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
              (((_ = this.m_unPersonaStateFlags) != null ? _ : 0) & _._) != 0
            );
          }
          get connect_string() {
            return this.m_mapRichPresence.get("connect");
          }
          get is_in_valid_lobby() {
            return this.m_game_lobby_id != null && this.m_game_lobby_id != "0";
          }
          get has_server_ip() {
            return this.m_unGameServerIP != 0;
          }
          get is_awayOrSnooze() {
            return (
              this.m_ePersonaState == _.PrD || this.m_ePersonaState == _.vPz
            );
          }
          HasStateFlag(_) {
            var _;
            return (
              (((_ = this.m_unPersonaStateFlags) != null ? _ : 0) & _) != 0
            );
          }
          get last_seen_online() {
            return this.m_rtLastSeenOnline;
          }
          ClearStateOnDisconnect() {
            this.m_ePersonaState != _.cU3 && this.Reset();
          }
          get is_golden() {
            return this.HasStateFlag(_._);
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
            return this.m_unGamePlayedAppID
              ? _._.GetAppInfo(this.m_unGamePlayedAppID).is_initialized
              : !0;
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
            } else if (this.HasStateFlag(_._))
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
            if (this.last_seen_online == 0) return 3e4;
            const _ = 60,
              _ = _ * 60,
              _ = _ * 24;
            let _ = 1e3;
            const _ =
              _._.CMInterface.GetServerRTime32() - this.last_seen_online;
            return _ > _ ? (_ *= _) : _ > 2 * _ ? (_ *= _) : (_ *= _ / 4), _;
          }
          GetOfflineStatusTime() {
            if (this.last_seen_online == 0)
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
              case _.cU3:
              case _._3b:
                return this.GetOfflineStatusTime();
              case _.UXk:
                return (0, _._)("#PersonaStateOnline");
              case _.wcG:
                return (0, _._)("#PersonaStateBusy");
              case _.PrD:
                return (0, _._)("#PersonaStateAway");
              case _.vPz:
                return (0, _._)("#PersonaStateSnooze");
              case _.Hrn:
                return (0, _._)("#PersonaStateLookingToTrade");
              case _.HAb:
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
              if (_.is_ingame)
                if (_.is_ingame)
                  if (_) {
                    if (_.is_awayOrSnooze) {
                      if (!_.is_awayOrSnooze) return 1;
                    } else if (_.is_awayOrSnooze) return -1;
                  } else return 0;
                else return -1;
              else if (_.is_ingame) return 1;
            }
            if (_.is_online) {
              if (!_.is_online) return -1;
            } else if (_.is_online) return 1;
            if (_) {
              if (_.is_awayOrSnooze) {
                if (!_.is_awayOrSnooze) return 1;
              } else if (_.is_awayOrSnooze) return -1;
            }
            return 0;
          }
          GetCommunityProfileURL() {
            return this.m_strProfileURL
              ? `${_._.COMMUNITY_BASE_URL}id/${this.m_strProfileURL}/`
              : `${_._.COMMUNITY_BASE_URL}profiles/${this.m_steamid.ConvertTo64BitString()}/`;
          }
        }
        _([_._], _.prototype, "m_bInitialized", 2),
          _([_._], _.prototype, "m_ePersonaState", 2),
          _([_._], _.prototype, "m_unGamePlayedAppID", 2),
          _([_._], _.prototype, "m_gameid", 2),
          _([_._], _.prototype, "m_unPersonaStateFlags", 2),
          _([_._], _.prototype, "m_strPlayerName", 2),
          _([_._], _.prototype, "m_strAvatarHash", 2),
          _([_._], _.prototype, "m_strAccountName", 2),
          _([_._], _.prototype, "m_rtLastSeenOnline", 2),
          _([_._], _.prototype, "m_strGameExtraInfo", 2),
          _([_._], _.prototype, "m_unGameServerIP", 2),
          _([_._], _.prototype, "m_unGameServerPort", 2),
          _([_._], _.prototype, "m_game_lobby_id", 2),
          _([_._], _.prototype, "m_bPlayerNamePending", 2),
          _([_._], _.prototype, "m_bAvatarPending", 2),
          _([_._], _.prototype, "m_broadcastId", 2),
          _([_._], _.prototype, "m_broadcastAccountId", 2),
          _([_._], _.prototype, "m_broadcastAppId", 2),
          _([_._], _.prototype, "m_broadcastViewerCount", 2),
          _([_._], _.prototype, "m_strBroadcastTitle", 2),
          _([_._], _.prototype, "m_bCommunityBanned", 2),
          _([_._], _.prototype, "m_eGamingDeviceType", 2),
          _([_._], _.prototype, "m_bNameInitialized", 2);
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
                  typeof _ == "string" ? new _._(_) : _._.InitFromAccountID(_),
                )),
              {
                ..._,
                data: _.current,
              });
        }
        function _(_) {
          const _ = useActiveServiceTransport(),
            _ = React.useContext(_);
          return useQueries({
            queries: _.map((_) => _(_, _, _)),
          });
        }
        function _(_) {
          return ReactQueryClient.getQueryData(["PlayerSummary", _]);
        }
        function _(_) {
          const { loadPersonaState: _, children: _ } = _,
            _ = React.useMemo(
              () => ({
                loadPersonaState: _,
              }),
              [_],
            );
          return React.createElement(
            _.Provider,
            {
              value: _,
            },
            _,
          );
        }
        const _ = _.createContext({
          loadPersonaState: async (_, _) => {
            if (_ == null) return null;
            const _ = await _(_).load(
              _._.InitFromAccountID(_).ConvertTo64BitString(),
            );
            return _(_._.InitFromAccountID(_), _);
          },
        });
        function _() {
          return React.useContext(_);
        }
        function _(_, _, _) {
          const _ = typeof _ == "string" ? new _._(_).GetAccountID() : _;
          return {
            queryKey: ["PlayerSummary", _],
            queryFn: () => _.loadPersonaState(_, _),
            enabled: !!_,
          };
        }
        let _;
        function _(_) {
          return _ != null ? _ : (_ = (0, _._)(_));
        }
        function _(_, _) {
          var _, _;
          let _ = new _._(_);
          const _ = _ == null ? void 0 : _.public_data,
            _ = _ == null ? void 0 : _.private_data;
          return (
            (_.m_bInitialized = !!_),
            (_.m_ePersonaState =
              (_ = _ == null ? void 0 : _.persona_state) != null ? _ : _.cU3),
            (_.m_strAvatarHash =
              _ != null && _.sha_digest_avatar
                ? (0, _._)(_.sha_digest_avatar)
                : _._),
            (_.m_strPlayerName =
              (_ = _ == null ? void 0 : _.persona_name) != null
                ? _
                : _.ConvertTo64BitString()),
            (_.m_strAccountName = _ == null ? void 0 : _.account_name),
            _ != null &&
              _.persona_state_flags &&
              (_.m_unPersonaStateFlags =
                _ == null ? void 0 : _.persona_state_flags),
            _ != null &&
              _.game_id &&
              (_.m_gameid = _ == null ? void 0 : _.game_id),
            _ != null &&
              _.game_server_ip_address &&
              (_.m_unGameServerIP =
                _ == null ? void 0 : _.game_server_ip_address),
            _ != null &&
              _.lobby_steam_id &&
              (_.m_game_lobby_id = _ == null ? void 0 : _.lobby_steam_id),
            _ != null &&
              _.game_extra_info &&
              (_.m_strGameExtraInfo = _ == null ? void 0 : _.game_extra_info),
            _ != null && _.profile_url && (_.m_strProfileURL = _.profile_url),
            _
          );
        }
      },
    },
  ]);
})();

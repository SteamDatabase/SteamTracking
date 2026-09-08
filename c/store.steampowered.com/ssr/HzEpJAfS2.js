var _ = _(_()),
  _ = class {
    m_nLastUpdated = 0;
    m_mapLanguages = _.map();
    m_appid;
    m_fetching = null;
    constructor(_) {
      this.m_appid = _;
    }
    GetAppID() {
      return this.m_appid;
    }
    GetTokenList(_) {
      return this.m_mapLanguages.has(_) ? this.m_mapLanguages.get(_) : null;
    }
    Localize(_, _) {
      let _ = _.LANGUAGE;
      return _(
        _,
        this.GetTokenList(_),
        _ == `english` ? null : this.GetTokenList(`english`),
        this.m_appid,
        _,
      );
    }
    SubstituteParams(_, _) {
      let _ = _.LANGUAGE;
      return _(
        _,
        this.GetTokenList(_),
        _ == `english` ? null : this.GetTokenList(`english`),
        this.m_appid,
        _,
      );
    }
  };
function _(_, _, _, _, _) {
  if (!_.startsWith(`#`))
    return (
      console.log(`Token doesn't start with #:`, _, `appid`, _, `tokens`, _), ``
    );
  let _ = _;
  _ = _.toLowerCase();
  let _ = ``;
  if (
    (_ && _.has(_) && (_ = _.get(_)), !_ && _ && _.has(_) && (_ = _.get(_)), _)
  )
    _ = _(_, _, _, _, _);
  else if (
    ((_ || _) &&
      console.log(`No loc found for appid`, _, _, `Tokens:`, _, `Fallback:`, _),
    _ && _.EUNIVERSE != 1)
  )
    return _;
  return _;
}
function _(_, _, _, _, _) {
  let _ = _.match(/{[A-za-z0-9_%#:]+}/g);
  if (_)
    for (let _ of _) {
      let _ = _(_(_.slice(1, -1), _), _, _, _, _);
      if (!_) return ``;
      _ = _.replace(_, _);
    }
  return (_ = _(_, _)), _;
}
function _(_, _) {
  let _ = _.match(/%[A-Za-z0-9_:]+%/g);
  if (_)
    for (let _ of _) {
      let _ = _.slice(1, -1).toLowerCase(),
        _ = _.get(_);
      _ == null
        ? console.log(`No rich presence found for`, _)
        : (_ = _.replace(_, _));
    }
  return _;
}
var _ = 3600 * 24 * 7 * 2,
  _ = class {
    m_CMInterface;
    m_mapAppInfo = _.map();
    m_mapRichPresenceLoc = _.map();
    m_cAppInfoRequestsInFlight = 0;
    m_setPendingAppInfo = new Set();
    m_PendingAppInfoPromise;
    m_PendingAppInfoResolve;
    m_CacheStorage = null;
    m_fnCallbackOnAppInfoLoaded = new _();
    constructor() {
      _(this);
    }
    Init(_) {
      this.m_CMInterface = _;
    }
    BHavePendingAppInfoRequests() {
      return (
        this.m_setPendingAppInfo.size > 0 || this.m_cAppInfoRequestsInFlight > 0
      );
    }
    get CMInterface() {
      return this.m_CMInterface;
    }
    RegisterCallbackOnLoad(_) {
      if (!this.BHavePendingAppInfoRequests()) {
        _(!1, `Registering for callback on appinfo load, but nothing queued`),
          _();
        return;
      }
      this.m_fnCallbackOnAppInfoLoaded.Register(_);
    }
    IsLoadingAppID(_) {
      return this.m_setPendingAppInfo.has(_);
    }
    GetAppInfo(_) {
      if (
        (_(this.m_CMInterface, `CAppInfoStore.GetAppInfo called before Init`),
        !this.m_mapAppInfo.has(_))
      ) {
        let _ = new _(_);
        this.m_mapAppInfo.set(_, _), this.QueueAppInfoRequest(_);
      }
      return this.m_mapAppInfo.get(_);
    }
    QueueAppInfoRequest(_) {
      return _
        ? (this.m_setPendingAppInfo.size ||
            ((this.m_PendingAppInfoPromise = new Promise(
              (_) => (this.m_PendingAppInfoResolve = _),
            )),
            window.setTimeout(() => this.FlushPendingAppInfo(), 25)),
          this.m_setPendingAppInfo.add(_),
          this.m_PendingAppInfoPromise)
        : Promise.resolve();
    }
    async FlushPendingAppInfo() {
      let _ = this.m_PendingAppInfoResolve,
        _ = Array.from(this.m_setPendingAppInfo);
      (this.m_PendingAppInfoPromise = void 0),
        (this.m_PendingAppInfoResolve = void 0),
        this.m_setPendingAppInfo.clear(),
        await this.LoadAppInfoBatch(_),
        _?.();
    }
    async LoadAppInfoBatch(_) {
      this.m_cAppInfoRequestsInFlight++;
      let _ = await this.LoadAppInfoBatchFromLocalCache(_);
      if (_.length) {
        console.log(`Loading batch of App Info from Steam: `, _),
          await this.m_CMInterface?.WaitUntilLoggedOn();
        let _ = _.Init(_);
        for (_.Body().set_language(_(_.LANGUAGE)); _.length > 0; ) {
          let _ = Math.min(50, _.length),
            _ = _.slice(0, _);
          (_ = _.slice(_)), _.Body().set_appids(_);
          let _ = await _.GetApps(this.m_CMInterface.GetServiceTransport(), _);
          _.GetEResult() == 1
            ? this.OnGetAppsResponse(_)
            : console.error(
                `Error when calling CommunityService.GetApps: EResult=${_.GetEResult()}, AppIDs:`,
                _,
              );
        }
      }
      --this.m_cAppInfoRequestsInFlight == 0 &&
        this.m_setPendingAppInfo.size == 0 &&
        (this.m_fnCallbackOnAppInfoLoaded.Dispatch(),
        this.m_fnCallbackOnAppInfoLoaded.ClearAllCallbacks());
    }
    OnGetAppsResponse(_) {
      let _ = [];
      for (let _ of _.Body().apps()) {
        let _ = this.m_mapAppInfo.get(_.appid());
        _(_, `Got AppInfo response for unrequested AppID: ${_.appid()}`),
          _ &&
            ((_ = new _(_.appid())),
            _.DeserializeFromMessage(_),
            this.m_mapAppInfo.set(_.appid(), _),
            _.push(_));
      }
      this.SaveAppInfoBatchToLocalCache(_);
    }
    OnAppOverviewChange(_) {
      for (let _ of _) {
        let _ = new _(_.appid());
        _.DeserializeFromAppOverview(_),
          _.is_initialized && this.m_mapAppInfo.set(_.appid(), _);
      }
    }
    async EnsureAppInfoForAppIDs(_) {
      let _ = !1;
      return (
        _.forEach((_) => {
          let _ = this.m_mapAppInfo.get(_);
          if (_) {
            _.is_valid || (_ = !0);
            return;
          }
          (_ = new _(_)),
            this.m_mapAppInfo.set(_, _),
            this.QueueAppInfoRequest(_),
            (_ = !0);
        }),
        _ && this.m_PendingAppInfoPromise !== void 0
          ? this.m_PendingAppInfoPromise
          : Promise.resolve()
      );
    }
    SetCacheStorage(_) {
      this.m_CacheStorage = _;
    }
    GetCacheKeyForAppID(_) {
      return `APPINFO_` + _;
    }
    async LoadAppInfoBatchFromLocalCache(_) {
      if (!this.m_CacheStorage) return _;
      console.log(`Loading batch of App Info from Local Cache: `, _);
      let _ = new Date(new Date().getTime() - _ * 1e3),
        _ = async (_) => {
          let _ = await this.m_CacheStorage?.GetObject(
            this.GetCacheKeyForAppID(_),
          );
          if (!_) return _;
          let _ = this.m_mapAppInfo.get(_);
          return (
            _(
              _,
              `Didn't find AppInfo in our map when loading from cache but it should've been there?`,
            ),
            _
              ? ((_ = new _(_)),
                _.DeserializeFromCacheObject(_),
                _.is_initialized
                  ? (this.m_mapAppInfo.set(_, _),
                    _.time_updated_from_server < _ ? _ : null)
                  : (console.warn(
                      `Failed to deserialize cached App Info: `,
                      _,
                      _,
                    ),
                    _))
              : _
          );
        },
        _ = _.map((_) => _(_));
      return (await Promise.all(_)).filter((_) => _ !== null);
    }
    async SaveAppInfoBatchToLocalCache(_) {
      if (this.m_CacheStorage) {
        console.log(
          `Saving batch of App Info to Local Cache: `,
          _.map((_) => _.appid),
        );
        for (let _ of _) {
          let _ = _.SerializeToCacheObject();
          _ &&
            this.m_CacheStorage.StoreObject(
              this.GetCacheKeyForAppID(_.appid),
              _,
            );
        }
      }
    }
    Localize(_, _, _) {
      let _ = this.GetRichPresenceLoc(_);
      return _
        ? _.Localize(_, _)
        : _.EUNIVERSE == 1
          ? ``
          : (console.log(
              `Unable to find app localization information for app ${_} token ${_}, this may not have had a chance to load yet`,
            ),
            _);
    }
    GetRichPresenceLoc(_) {
      if (this.m_mapRichPresenceLoc.has(_.toString())) {
        let _ = this.m_mapRichPresenceLoc.get(_.toString());
        return (
          _.m_nLastUpdated + 1e3 * 60 * 120 < Date.now() &&
            this.QueueRichPresenceLocRequest(_),
          _
        );
      }
      let _ = new _(_);
      return (
        this.m_mapRichPresenceLoc.set(_.toString(), _),
        this.QueueRichPresenceLocRequest(_),
        _
      );
    }
    GetRichPresenceLocAsync(_) {
      let _ = this.GetRichPresenceLoc(_);
      return _.m_nLastUpdated ? Promise.resolve(_) : _.m_fetching;
    }
    OnRichPresenceLocUpdate(_, _) {
      _.m_nLastUpdated = Date.now();
      for (let _ of _) {
        let _ = _.language(),
          _ = _.m_mapLanguages.get(_);
        _
          ? _.clear()
          : (_.m_mapLanguages.set(_, new Map()), (_ = _.m_mapLanguages.get(_)));
        for (let _ of _.tokens()) _?.set(_.name().toLowerCase(), _.value());
      }
    }
    QueueRichPresenceLocRequest(_) {
      return (
        _.m_fetching ||
          ((_.m_fetching = this.m_CMInterface
            .WaitUntilLoggedOn()
            .then(() => {
              let _ = _.Init(_);
              return (
                _.Body().set_appid(_.GetAppID()),
                _.Body().set_language(_.LANGUAGE),
                _.GetAppRichPresenceLocalization(
                  this.m_CMInterface.GetServiceTransport(),
                  _,
                )
              );
            })
            .then(
              (_) => (
                (_.m_fetching = null),
                _.GetEResult() == 1
                  ? (this.OnRichPresenceLocUpdate(_, _.Body().token_lists()),
                    Promise.resolve(_))
                  : Promise.reject()
              ),
            )),
          _.m_fetching.catch(() => {
            _.m_fetching = null;
          })),
        _.m_fetching
      );
    }
  };
_([_], _.prototype, `OnGetAppsResponse`, null),
  _([_], _.prototype, `OnRichPresenceLocUpdate`, null);
var _ = new _(),
  _ = class {
    m_steamid;
    m_bInitialized = !1;
    m_ePersonaState = 0;
    m_unGamePlayedAppID = 0;
    m_gameid = `0`;
    m_unPersonaStateFlags = 0;
    m_strPlayerName = ``;
    m_strAvatarHash = _;
    m_strAccountName = ``;
    m_rtLastSeenOnline = 0;
    m_strGameExtraInfo = ``;
    m_unGameServerIP = 0;
    m_unGameServerPort = 0;
    m_game_lobby_id = ``;
    m_bPlayerNamePending = !1;
    m_bAvatarPending = !1;
    m_broadcastId = void 0;
    m_broadcastAccountId = void 0;
    m_broadcastAppId = void 0;
    m_broadcastViewerCount = void 0;
    m_strBroadcastTitle = void 0;
    m_bCommunityBanned = void 0;
    m_eGamingDeviceType = 0;
    m_mapRichPresence = _.map();
    m_bNameInitialized = !1;
    m_bStatusInitialized = !1;
    m_strProfileURL = void 0;
    constructor(_) {
      _(this), (this.m_steamid = _);
    }
    Reset() {
      (this.m_ePersonaState = 0),
        (this.m_unGamePlayedAppID = 0),
        (this.m_gameid = `0`),
        (this.m_strGameExtraInfo = ``),
        (this.m_unGameServerIP = 0),
        (this.m_unGameServerPort = 0),
        (this.m_game_lobby_id = ``),
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
    GetSteamIDAsString() {
      return this.m_steamid.ConvertTo64BitString();
    }
    get is_online() {
      return this.m_ePersonaState != 0 && this.m_ePersonaState != 7;
    }
    get is_ingame() {
      return (
        this.is_online &&
        (this.m_unGamePlayedAppID != 0 || this.m_gameid != `0`)
      );
    }
    get is_watchingbroadcast() {
      return !!this.m_broadcastAccountId;
    }
    get is_in_nonsteam_game() {
      return this.m_unGamePlayedAppID == 0 && this.m_gameid != `0`;
    }
    get is_in_joinable_game() {
      return (
        this.has_joinable_game_flag ||
        this.is_in_valid_lobby ||
        this.has_server_ip
      );
    }
    get has_joinable_game_flag() {
      return ((this.m_unPersonaStateFlags ?? 0) & 2) != 0;
    }
    get connect_string() {
      return this.m_mapRichPresence.get(`connect`);
    }
    get is_in_valid_lobby() {
      return this.m_game_lobby_id != null && this.m_game_lobby_id != `0`;
    }
    get has_server_ip() {
      return this.m_unGameServerIP != 0;
    }
    get is_awayOrSnooze() {
      return this.m_ePersonaState == 3 || this.m_ePersonaState == 4;
    }
    HasStateFlag(_) {
      return ((this.m_unPersonaStateFlags ?? 0) & _) != 0;
    }
    get last_seen_online() {
      return this.m_rtLastSeenOnline;
    }
    ClearStateOnDisconnect() {
      this.m_ePersonaState != 0 && this.Reset();
    }
    get is_golden() {
      return this.HasStateFlag(4);
    }
    GetCurrentGameName() {
      return this.m_strGameExtraInfo
        ? this.m_strGameExtraInfo
        : this.m_unGamePlayedAppID
          ? _.GetAppInfo(this.m_unGamePlayedAppID).name
          : ``;
    }
    GetCurrentGameIconURL() {
      return this.m_unGamePlayedAppID
        ? _.GetAppInfo(this.m_unGamePlayedAppID).icon_url
        : ``;
    }
    BIsAppInfoReady() {
      return (
        !this.m_unGamePlayedAppID ||
        _.GetAppInfo(this.m_unGamePlayedAppID).is_initialized
      );
    }
    HasCurrentGameRichPresence() {
      return this.m_mapRichPresence.has(`steam_display`);
    }
    HasRichPresenceForViewGameInfo() {
      return !!(
        this.m_mapRichPresence.has(`status`) ||
        this.m_mapRichPresence.has(`connect`) ||
        this.m_mapRichPresence.has(`connect_private`)
      );
    }
    GetCurrentGameRichPresence() {
      if (this.HasCurrentGameRichPresence()) {
        let _ = _.GetRichPresenceLoc(this.m_unGamePlayedAppID);
        if (_) {
          let _ = this.m_mapRichPresence.get(`steam_display`);
          return _.Localize(_, this.m_mapRichPresence);
        }
      } else if (this.HasStateFlag(8))
        return _(`#PersonaStateRemotePlayTogether`);
      return ``;
    }
    GetCurrentGameStatus() {
      return (
        this.GetCurrentGameRichPresence() ||
        this.m_mapRichPresence.get(`status`) ||
        ``
      );
    }
    GetOfflineStatusUpdateRate() {
      if (this.last_seen_online == 0) return 3e4;
      let _ = 3600,
        _ = 1e3,
        _ = _.CMInterface.GetServerRTime32() - this.last_seen_online;
      return _ > 86400 ? (_ *= _) : _ > 2 * _ ? (_ *= 60) : (_ *= 60 / 4), _;
    }
    GetOfflineStatusTime() {
      if (this.last_seen_online == 0) return _(`#PersonaStateOffline`);
      let _ = this.GetOfflineStatusUpdateRate();
      (!_.IN_MOBILE || _ <= 60) && _(_);
      let _ = _.CMInterface.GetServerRTime32() - this.last_seen_online;
      return _ < 60
        ? _(`#PersonaStateLastSeen_JustNow`)
        : _(`#PersonaStateLastSeen`, _(_));
    }
    GetLocalizedOnlineStatus() {
      switch (this.m_ePersonaState) {
        case 0:
        case 7:
          return this.GetOfflineStatusTime();
        case 1:
          return _(`#PersonaStateOnline`);
        case 2:
          return _(`#PersonaStateBusy`);
        case 3:
          return _(`#PersonaStateAway`);
        case 4:
          return _(`#PersonaStateSnooze`);
        case 5:
          return _(`#PersonaStateLookingToTrade`);
        case 6:
          return _(`#PersonaStateLookingToPlay`);
        default:
          return ``;
      }
    }
    get has_public_party_beacon() {
      return this.m_mapRichPresence.has(`__beacon`) && this.is_ingame;
    }
    get player_group() {
      return this.m_mapRichPresence.has(`steam_player_group`)
        ? this.m_mapRichPresence.get(`steam_player_group`)
        : ``;
    }
    get player_group_size() {
      return this.m_mapRichPresence.has(`steam_player_group_size`)
        ? Number.parseInt(this.m_mapRichPresence.get(`steam_player_group_size`))
        : 0;
    }
    get online_state() {
      return this.is_online
        ? this.is_ingame
          ? `in-game`
          : this.m_broadcastAccountId
            ? `watchingbroadcast`
            : `online`
        : `offline`;
    }
    BHasAvatarSet() {
      return this.m_strAvatarHash != _;
    }
    get avatar_url() {
      return _(this.m_strAvatarHash);
    }
    get avatar_url_medium() {
      return _(this.m_strAvatarHash, `medium`);
    }
    get avatar_url_full() {
      return _(this.m_strAvatarHash, `full`);
    }
    static SortStatusComparator(_, _, _) {
      if (_.has_public_party_beacon) {
        if (!_.has_public_party_beacon) return -1;
      } else if (_.has_public_party_beacon) return 1;
      else if (_.is_ingame) {
        if (!_.is_ingame) return -1;
        if (_) {
          if (_.is_awayOrSnooze) {
            if (!_.is_awayOrSnooze) return 1;
          } else if (_.is_awayOrSnooze) return -1;
        } else return 0;
      } else if (_.is_ingame) return 1;
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
        ? `${_.COMMUNITY_BASE_URL}id/${this.m_strProfileURL}/`
        : `${_.COMMUNITY_BASE_URL}profiles/${this.m_steamid.ConvertTo64BitString()}/`;
    }
  };
_([_], _.prototype, `m_bInitialized`, void 0),
  _([_], _.prototype, `m_ePersonaState`, void 0),
  _([_], _.prototype, `m_unGamePlayedAppID`, void 0),
  _([_], _.prototype, `m_gameid`, void 0),
  _([_], _.prototype, `m_unPersonaStateFlags`, void 0),
  _([_], _.prototype, `m_strPlayerName`, void 0),
  _([_], _.prototype, `m_strAvatarHash`, void 0),
  _([_], _.prototype, `m_strAccountName`, void 0),
  _([_], _.prototype, `m_rtLastSeenOnline`, void 0),
  _([_], _.prototype, `m_strGameExtraInfo`, void 0),
  _([_], _.prototype, `m_unGameServerIP`, void 0),
  _([_], _.prototype, `m_unGameServerPort`, void 0),
  _([_], _.prototype, `m_game_lobby_id`, void 0),
  _([_], _.prototype, `m_bPlayerNamePending`, void 0),
  _([_], _.prototype, `m_bAvatarPending`, void 0),
  _([_], _.prototype, `m_broadcastId`, void 0),
  _([_], _.prototype, `m_broadcastAccountId`, void 0),
  _([_], _.prototype, `m_broadcastAppId`, void 0),
  _([_], _.prototype, `m_broadcastViewerCount`, void 0),
  _([_], _.prototype, `m_strBroadcastTitle`, void 0),
  _([_], _.prototype, `m_bCommunityBanned`, void 0),
  _([_], _.prototype, `m_eGamingDeviceType`, void 0),
  _([_], _.prototype, `m_bNameInitialized`, void 0);
function _(_) {
  let _ = _();
  return _(_(_.useContext(_), _, _));
}
var _ = _.createContext({
  loadPersonaState: async (_, _) => {
    if (_ == null) return null;
    let _ = await _(_).load(_.InitFromAccountID(_).ConvertTo64BitString());
    return _(_.InitFromAccountID(_), _);
  },
});
function _(_, _, _) {
  let _ = typeof _ == `string` ? new _(_).GetAccountID() : _;
  return {
    queryKey: [`PlayerSummary`, _],
    queryFn: () => _.loadPersonaState(_, _),
    enabled: !!_,
  };
}
var _;
function _(_) {
  return (_ ??= _(_));
}
function _(_, _) {
  let _ = new _(_),
    _ = _?.public_data,
    _ = _?.private_data;
  return (
    (_.m_bInitialized = !!_),
    (_.m_ePersonaState = _?.persona_state ?? 0),
    (_.m_strAvatarHash = _?.sha_digest_avatar ? _(_.sha_digest_avatar) : _),
    (_.m_strPlayerName = _?.persona_name ?? _.ConvertTo64BitString()),
    (_.m_strAccountName = _?.account_name),
    _?.persona_state_flags &&
      (_.m_unPersonaStateFlags = _?.persona_state_flags),
    _?.game_id && (_.m_gameid = _?.game_id),
    _?.game_server_ip_address &&
      (_.m_unGameServerIP = _?.game_server_ip_address),
    _?.lobby_steam_id && (_.m_game_lobby_id = _?.lobby_steam_id),
    _?.game_extra_info && (_.m_strGameExtraInfo = _?.game_extra_info),
    _?.profile_url && (_.m_strProfileURL = _.profile_url),
    _
  );
}
export { _, _ };

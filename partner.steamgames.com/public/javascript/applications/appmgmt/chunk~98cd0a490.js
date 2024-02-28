/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [7241],
  {
    45944: (e, t, i) => {
      i.d(t, { Q8: () => P });
      var r = i(85556),
        a = i(54842),
        n = i(77936),
        s = i(79545),
        o = i(22520),
        c = i(37563);
      class l {
        constructor(e) {
          (this.m_nLastUpdated = 0),
            (this.m_mapLanguages = a.LO.map()),
            (this.m_fetching = null),
            (this.m_appid = e);
        }
        GetAppID() {
          return this.m_appid;
        }
        GetTokenList(e) {
          return this.m_mapLanguages.has(e) ? this.m_mapLanguages.get(e) : null;
        }
        Localize(e, t) {
          let i = c.De.LANGUAGE;
          return p(
            e,
            this.GetTokenList(i),
            "english" != i ? this.GetTokenList("english") : null,
            this.m_appid,
            t,
          );
        }
        SubstituteParams(e, t) {
          let i = c.De.LANGUAGE;
          return u(
            e,
            this.GetTokenList(i),
            "english" != i ? this.GetTokenList("english") : null,
            this.m_appid,
            t,
          );
        }
      }
      function p(e, t, i, r, a) {
        if (!e.startsWith("#"))
          return (
            console.log(
              "Token doesn't start with #:",
              e,
              "appid",
              r,
              "tokens",
              t,
            ),
            ""
          );
        let n = e;
        e = e.toLowerCase();
        let s = "";
        if (
          (t && t.has(e) && (s = t.get(e)),
          !s && i && i.has(e) && (s = i.get(e)),
          s)
        )
          s = u(s, t, i, r, a);
        else if (
          ((t || i) &&
            console.log(
              "No loc found for appid",
              r,
              n,
              "Tokens:",
              t,
              "Fallback:",
              i,
            ),
          t && 1 != c.De.EUNIVERSE)
        )
          return e;
        return s;
      }
      function u(e, t, i, r, a) {
        let n = e.match(/{[A-za-z0-9_%#:]+}/g);
        if (n)
          for (let s of n) {
            let n = p(d(s.slice(1, -1), a), t, i, r, a);
            if (!n) return "";
            e = e.replace(s, n);
          }
        return (e = d(e, a));
      }
      function d(e, t) {
        let i = e.match(/%[A-Za-z0-9_:]+%/g);
        if (i)
          for (let r of i) {
            let i = r.slice(1, -1).toLowerCase(),
              a = t.get(i);
            null == a
              ? console.log("No rich presence found for", i)
              : (e = e.replace(r, a));
          }
        return e;
      }
      var m = i(18015),
        h = i(62210),
        _ = i(45492);
      class g {
        constructor() {
          (this.m_mapAppInfo = a.LO.map()),
            (this.m_mapRichPresenceLoc = a.LO.map()),
            (this.m_cAppInfoRequestsInFlight = 0),
            (this.m_setPendingAppInfo = new Set()),
            (this.m_CacheStorage = null),
            (this.m_fnCallbackOnAppInfoLoaded = new _.pB()),
            (0, a.rC)(this);
        }
        Init(e) {
          this.m_CMInterface = e;
        }
        BHavePendingAppInfoRequests() {
          return (
            this.m_setPendingAppInfo.size > 0 ||
            this.m_cAppInfoRequestsInFlight > 0
          );
        }
        get CMInterface() {
          return this.m_CMInterface;
        }
        RegisterCallbackOnLoad(e) {
          if (!this.BHavePendingAppInfoRequests())
            return (
              (0, h.X)(
                !1,
                "Registering for callback on appinfo load, but nothing queued",
              ),
              void e()
            );
          this.m_fnCallbackOnAppInfoLoaded.Register(e);
        }
        IsLoadingAppID(e) {
          return this.m_setPendingAppInfo.has(e);
        }
        GetAppInfo(e) {
          if (
            ((0, h.X)(
              this.m_CMInterface,
              "CAppInfoStore.GetAppInfo called before Init",
            ),
            !this.m_mapAppInfo.has(e))
          ) {
            let t = new o.Am(e);
            this.m_mapAppInfo.set(e, t), this.QueueAppInfoRequest(e);
          }
          return this.m_mapAppInfo.get(e);
        }
        QueueAppInfoRequest(e) {
          return e
            ? (this.m_setPendingAppInfo.size ||
                ((this.m_PendingAppInfoPromise = new Promise(
                  (e) => (this.m_PendingAppInfoResolve = e),
                )),
                window.setTimeout(() => this.FlushPendingAppInfo(), 25)),
              this.m_setPendingAppInfo.add(e),
              this.m_PendingAppInfoPromise)
            : Promise.resolve();
        }
        FlushPendingAppInfo() {
          return (0, r.mG)(this, void 0, void 0, function* () {
            const e = this.m_PendingAppInfoResolve,
              t = Array.from(this.m_setPendingAppInfo);
            (this.m_PendingAppInfoPromise = void 0),
              (this.m_PendingAppInfoResolve = void 0),
              this.m_setPendingAppInfo.clear(),
              yield this.LoadAppInfoBatch(t),
              null == e || e();
          });
        }
        LoadAppInfoBatch(e) {
          var t;
          return (0, r.mG)(this, void 0, void 0, function* () {
            this.m_cAppInfoRequestsInFlight++;
            let i = yield this.LoadAppInfoBatchFromLocalCache(e);
            if (i.length) {
              console.log("Loading batch of App Info from Steam: ", i),
                yield null === (t = this.m_CMInterface) || void 0 === t
                  ? void 0
                  : t.WaitUntilLoggedOn();
              let e = s.gA.Init(m.Fi);
              e.Body().set_language((0, n.jM)(c.De.LANGUAGE));
              const r = 50;
              for (; i.length > 0; ) {
                const t = Math.min(r, i.length),
                  a = i.slice(0, t);
                (i = i.slice(t)), e.Body().set_appids(a);
                const n = yield m.AE.GetApps(
                  this.m_CMInterface.GetServiceTransport(),
                  e,
                );
                1 == n.GetEResult()
                  ? this.OnGetAppsResponse(n)
                  : console.error(
                      `Error when calling CommunityService.GetApps: EResult=${n.GetEResult()}, AppIDs:`,
                      a,
                    );
              }
            }
            0 == --this.m_cAppInfoRequestsInFlight &&
              0 == this.m_setPendingAppInfo.size &&
              (this.m_fnCallbackOnAppInfoLoaded.Dispatch(),
              this.m_fnCallbackOnAppInfoLoaded.ClearAllCallbacks());
          });
        }
        OnGetAppsResponse(e) {
          let t = [];
          for (let i of e.Body().apps()) {
            let e = this.m_mapAppInfo.get(i.appid());
            (0, h.X)(
              e,
              `Got AppInfo response for unrequested AppID: ${i.appid()}`,
            ),
              e &&
                ((e = new o.Am(i.appid())),
                e.DeserializeFromMessage(i),
                this.m_mapAppInfo.set(i.appid(), e),
                t.push(e));
          }
          this.SaveAppInfoBatchToLocalCache(t);
        }
        OnAppOverviewChange(e) {
          for (let t of e) {
            const e = new o.Am(t.appid());
            e.DeserializeFromAppOverview(t),
              e.is_initialized && this.m_mapAppInfo.set(t.appid(), e);
          }
        }
        EnsureAppInfoForAppIDs(e) {
          return (0, r.mG)(this, void 0, void 0, function* () {
            let t = !1;
            return (
              e.forEach((e) => {
                let i = this.m_mapAppInfo.get(e);
                i
                  ? i.is_valid || (t = !0)
                  : ((i = new o.Am(e)),
                    this.m_mapAppInfo.set(e, i),
                    this.QueueAppInfoRequest(e),
                    (t = !0));
              }),
              t && void 0 !== this.m_PendingAppInfoPromise
                ? this.m_PendingAppInfoPromise
                : Promise.resolve()
            );
          });
        }
        SetCacheStorage(e) {
          this.m_CacheStorage = e;
        }
        GetCacheKeyForAppID(e) {
          return "APPINFO_" + e;
        }
        LoadAppInfoBatchFromLocalCache(e) {
          return (0, r.mG)(this, void 0, void 0, function* () {
            if (!this.m_CacheStorage) return e;
            console.log("Loading batch of App Info from Local Cache: ", e);
            const t = new Date(new Date().getTime() - 12096e5),
              i = (e) =>
                (0, r.mG)(this, void 0, void 0, function* () {
                  var i;
                  const r = yield null === (i = this.m_CacheStorage) ||
                  void 0 === i
                    ? void 0
                    : i.GetObject(this.GetCacheKeyForAppID(e));
                  if (!r) return e;
                  let a = this.m_mapAppInfo.get(e);
                  return (
                    (0, h.X)(
                      a,
                      "Didn't find AppInfo in our map when loading from cache but it should've been there?",
                    ),
                    a
                      ? ((a = new o.Am(e)),
                        a.DeserializeFromCacheObject(r),
                        a.is_initialized
                          ? (this.m_mapAppInfo.set(e, a),
                            a.time_updated_from_server < t ? e : null)
                          : (console.warn(
                              "Failed to deserialize cached App Info: ",
                              e,
                              r,
                            ),
                            e))
                      : e
                  );
                });
            let a = e.map((e) => i(e));
            return (yield Promise.all(a)).filter((e) => null !== e);
          });
        }
        SaveAppInfoBatchToLocalCache(e) {
          return (0, r.mG)(this, void 0, void 0, function* () {
            if (this.m_CacheStorage) {
              console.log(
                "Saving batch of App Info to Local Cache: ",
                e.map((e) => e.appid),
              );
              for (const t of e) {
                const e = t.SerializeToCacheObject();
                e &&
                  this.m_CacheStorage.StoreObject(
                    this.GetCacheKeyForAppID(t.appid),
                    e,
                  );
              }
            }
          });
        }
        Localize(e, t, i) {
          const r = this.GetRichPresenceLoc(e);
          return r
            ? r.Localize(t, i)
            : 1 != c.De.EUNIVERSE
            ? (console.log(
                `Unable to find app localization information for app ${e} token ${t}, this may not have had a chance to load yet`,
              ),
              t)
            : "";
        }
        GetRichPresenceLoc(e) {
          if (this.m_mapRichPresenceLoc.has(e.toString())) {
            let t = this.m_mapRichPresenceLoc.get(e.toString());
            return (
              t.m_nLastUpdated + 6e4 * o.x3 < Date.now() &&
                this.QueueRichPresenceLocRequest(t),
              t
            );
          }
          let t = new l(e);
          return (
            this.m_mapRichPresenceLoc.set(e.toString(), t),
            this.QueueRichPresenceLocRequest(t),
            t
          );
        }
        GetRichPresenceLocAsync(e) {
          let t = this.GetRichPresenceLoc(e);
          return t.m_nLastUpdated ? Promise.resolve(t) : t.m_fetching;
        }
        OnRichPresenceLocUpdate(e, t) {
          e.m_nLastUpdated = Date.now();
          for (let i of t) {
            let t = i.language(),
              r = e.m_mapLanguages.get(t);
            r
              ? r.clear()
              : (e.m_mapLanguages.set(t, new Map()),
                (r = e.m_mapLanguages.get(t)));
            for (let e of i.tokens())
              null == r || r.set(e.name().toLowerCase(), e.value());
          }
        }
        QueueRichPresenceLocRequest(e) {
          return (
            e.m_fetching ||
              ((e.m_fetching = this.m_CMInterface
                .WaitUntilLoggedOn()
                .then(() => {
                  let t = s.gA.Init(m.tj);
                  return (
                    t.Body().set_appid(e.GetAppID()),
                    t.Body().set_language(c.De.LANGUAGE),
                    m.AE.GetAppRichPresenceLocalization(
                      this.m_CMInterface.GetServiceTransport(),
                      t,
                    )
                  );
                })
                .then(
                  (t) => (
                    (e.m_fetching = null),
                    1 != t.GetEResult()
                      ? Promise.reject()
                      : (this.OnRichPresenceLocUpdate(
                          e,
                          t.Body().token_lists(),
                        ),
                        Promise.resolve(e))
                  ),
                )),
              e.m_fetching.catch(() => {
                e.m_fetching = null;
              })),
            e.m_fetching
          );
        }
      }
      (0, r.gn)([a.aD], g.prototype, "OnGetAppsResponse", null),
        (0, r.gn)([a.aD], g.prototype, "OnRichPresenceLocUpdate", null);
      const P = new g();
    },
    23951: (e, t, i) => {
      i.d(t, { Qv: () => b, vP: () => I, IE: () => y });
      var r = i(85556),
        a = i(73799),
        n = i.n(a),
        s = i(47427),
        o = i(42718),
        c = i(79545),
        l = i(40057),
        p = i(90938),
        u = i(54842),
        d = i(24289),
        m = i(45944),
        h = i(31846),
        _ = i(37563),
        g = i(48760);
      class P {
        constructor(e) {
          (this.m_bInitialized = !1),
            (this.m_ePersonaState = 0),
            (this.m_unGamePlayedAppID = 0),
            (this.m_gameid = "0"),
            (this.m_unPersonaStateFlags = 0),
            (this.m_strPlayerName = ""),
            (this.m_strAvatarHash = g.W),
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
            (this.m_mapRichPresence = u.LO.map()),
            (this.m_bNameInitialized = !1),
            (this.m_bStatusInitialized = !1),
            (this.m_strProfileURL = void 0),
            (0, u.rC)(this),
            (this.m_steamid = e);
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
            (this.m_strBroadcastTitle = void 0);
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
          var e;
          return (
            0 !=
            (2 &
              (null !== (e = this.m_unPersonaStateFlags) && void 0 !== e
                ? e
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
        HasStateFlag(e) {
          var t;
          return (
            0 !=
            ((null !== (t = this.m_unPersonaStateFlags) && void 0 !== t
              ? t
              : 0) &
              e)
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
            ? m.Q8.GetAppInfo(this.m_unGamePlayedAppID).name
            : "";
        }
        GetCurrentGameIconURL() {
          return this.m_unGamePlayedAppID
            ? m.Q8.GetAppInfo(this.m_unGamePlayedAppID).icon_url
            : "";
        }
        GetCurrentGameLogoURL() {
          return this.m_unGamePlayedAppID
            ? m.Q8.GetAppInfo(this.m_unGamePlayedAppID).logo_url
            : "";
        }
        GetBroadcastGameLogoURL() {
          return this.m_broadcastAppId
            ? m.Q8.GetAppInfo(this.m_broadcastAppId).logo_url
            : "";
        }
        BIsAppInfoReady() {
          return (
            !this.m_unGamePlayedAppID ||
            m.Q8.GetAppInfo(this.m_unGamePlayedAppID).is_initialized
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
            let e = m.Q8.GetRichPresenceLoc(this.m_unGamePlayedAppID);
            if (e) {
              let t = this.m_mapRichPresence.get("steam_display");
              return e.Localize(t, this.m_mapRichPresence);
            }
          } else if (this.HasStateFlag(8))
            return (0, h.Xx)("#PersonaStateRemotePlayTogether");
          return "";
        }
        GetOfflineStatusUpdateRate() {
          if (0 == this.last_seen_online) return 3e4;
          const e = 3600;
          let t = 1e3;
          const i = m.Q8.CMInterface.GetServerRTime32() - this.last_seen_online;
          return (t *= i > 86400 ? e : i > 7200 ? 60 : 15), t;
        }
        GetOfflineStatusTime() {
          if (0 == this.last_seen_online)
            return (0, h.Xx)("#PersonaStateOffline");
          let e = this.GetOfflineStatusUpdateRate();
          (!_.De.IN_MOBILE || e <= 60) && (0, d.zO)(e);
          let t = m.Q8.CMInterface.GetServerRTime32() - this.last_seen_online;
          return t < 60
            ? (0, h.Xx)("#PersonaStateLastSeen_JustNow")
            : (0, h.Xx)("#PersonaStateLastSeen", (0, h.yW)(t));
        }
        GetLocalizedOnlineStatus() {
          switch (this.m_ePersonaState) {
            case 0:
            case 7:
              return this.GetOfflineStatusTime();
            case 1:
              return (0, h.Xx)("#PersonaStateOnline");
            case 2:
              return (0, h.Xx)("#PersonaStateBusy");
            case 3:
              return (0, h.Xx)("#PersonaStateAway");
            case 4:
              return (0, h.Xx)("#PersonaStateSnooze");
            case 5:
              return (0, h.Xx)("#PersonaStateLookingToTrade");
            case 6:
              return (0, h.Xx)("#PersonaStateLookingToPlay");
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
          return this.m_strAvatarHash != g.W;
        }
        get avatar_url() {
          return (0, g.U)(this.m_strAvatarHash);
        }
        get avatar_url_medium() {
          return (0, g.U)(this.m_strAvatarHash, "medium");
        }
        get avatar_url_full() {
          return (0, g.U)(this.m_strAvatarHash, "full");
        }
        static SortStatusComparator(e, t, i) {
          if (t.has_public_party_beacon) {
            if (!i.has_public_party_beacon) return -1;
          } else {
            if (i.has_public_party_beacon) return 1;
            if (t.is_ingame) {
              if (!i.is_ingame) return -1;
              if (!e) return 0;
              if (t.is_awayOrSnooze) {
                if (!i.is_awayOrSnooze) return 1;
              } else if (i.is_awayOrSnooze) return -1;
            } else if (i.is_ingame) return 1;
          }
          if (t.is_online) {
            if (!i.is_online) return -1;
          } else if (i.is_online) return 1;
          if (e)
            if (t.is_awayOrSnooze) {
              if (!i.is_awayOrSnooze) return 1;
            } else if (i.is_awayOrSnooze) return -1;
          return 0;
        }
        GetCommunityProfileURL() {
          return this.m_strProfileURL
            ? `${_.De.COMMUNITY_BASE_URL}id/${this.m_strProfileURL}/`
            : `${
                _.De.COMMUNITY_BASE_URL
              }profiles/${this.m_steamid.ConvertTo64BitString()}/`;
        }
      }
      (0, r.gn)([u.LO], P.prototype, "m_bInitialized", void 0),
        (0, r.gn)([u.LO], P.prototype, "m_ePersonaState", void 0),
        (0, r.gn)([u.LO], P.prototype, "m_unGamePlayedAppID", void 0),
        (0, r.gn)([u.LO], P.prototype, "m_gameid", void 0),
        (0, r.gn)([u.LO], P.prototype, "m_unPersonaStateFlags", void 0),
        (0, r.gn)([u.LO], P.prototype, "m_strPlayerName", void 0),
        (0, r.gn)([u.LO], P.prototype, "m_strAvatarHash", void 0),
        (0, r.gn)([u.LO], P.prototype, "m_strAccountName", void 0),
        (0, r.gn)([u.LO], P.prototype, "m_rtLastSeenOnline", void 0),
        (0, r.gn)([u.LO], P.prototype, "m_strGameExtraInfo", void 0),
        (0, r.gn)([u.LO], P.prototype, "m_unGameServerIP", void 0),
        (0, r.gn)([u.LO], P.prototype, "m_unGameServerPort", void 0),
        (0, r.gn)([u.LO], P.prototype, "m_game_lobby_id", void 0),
        (0, r.gn)([u.LO], P.prototype, "m_bPlayerNamePending", void 0),
        (0, r.gn)([u.LO], P.prototype, "m_bAvatarPending", void 0),
        (0, r.gn)([u.LO], P.prototype, "m_broadcastId", void 0),
        (0, r.gn)([u.LO], P.prototype, "m_broadcastAccountId", void 0),
        (0, r.gn)([u.LO], P.prototype, "m_broadcastAppId", void 0),
        (0, r.gn)([u.LO], P.prototype, "m_broadcastViewerCount", void 0),
        (0, r.gn)([u.LO], P.prototype, "m_strBroadcastTitle", void 0),
        (0, r.gn)([u.LO], P.prototype, "m_bCommunityBanned", void 0);
      var f = i(35427),
        v = i(82182),
        G = i(2041);
      function y(e) {
        const t = (0, l.bY)(),
          i = s.useContext(S);
        return (0, o.useQuery)(k(i, t, e));
      }
      function I(e) {
        const t = (0, l.bY)(),
          i = s.useContext(S);
        return (0, o.useQueries)(e.map((e) => k(i, t, e)));
      }
      function b(e) {
        return G.U.getQueryData(["PlayerSummary", e]);
      }
      const S = s.createContext({
        loadPersonaState: (e, t) =>
          (0, r.mG)(void 0, void 0, void 0, function* () {
            if (null == e) return null;
            const i = yield (function (e) {
              D ||
                (D = new (n())(
                  (t) =>
                    (0, r.mG)(this, void 0, void 0, function* () {
                      const i = c.gA.Init(v.oh);
                      i.Body().set_steamids(
                        t.map((e) =>
                          f.K.InitFromAccountID(e).ConvertTo64BitString(),
                        ),
                      );
                      const r = yield v.lk.GetPlayerLinkDetails(e, i);
                      if (!r.BSuccess())
                        throw `Failed to load player link details: ${r.GetErrorMessage()}`;
                      const a = new Map();
                      return (
                        r
                          .Body()
                          .accounts()
                          .forEach((e) => {
                            var t;
                            const i = e.toObject();
                            a.set(
                              new f.K(
                                null === (t = i.public_data) || void 0 === t
                                  ? void 0
                                  : t.steamid,
                              ).GetAccountID(),
                              i,
                            );
                          }),
                        t.map((e) => a.get(e))
                      );
                    }),
                  { maxBatchSize: 100 },
                ));
              return D;
            })(t).load(e);
            return i
              ? (function (e, t) {
                  var i, r, a, n, s, o, c;
                  let l = new P(e);
                  const u = null == t ? void 0 : t.public_data,
                    d = null == t ? void 0 : t.private_data;
                  (l.m_bInitialized = !0),
                    (l.m_ePersonaState =
                      null !== (i = null == d ? void 0 : d.persona_state) &&
                      void 0 !== i
                        ? i
                        : 0),
                    (l.m_strAvatarHash = (
                      null == u ? void 0 : u.sha_digest_avatar
                    )
                      ? (0, p.BH)(u.sha_digest_avatar)
                      : g.W),
                    (l.m_strPlayerName =
                      null !== (r = null == u ? void 0 : u.persona_name) &&
                      void 0 !== r
                        ? r
                        : e.ConvertTo64BitString()),
                    (l.m_strAccountName = null == d ? void 0 : d.account_name),
                    (null == d ? void 0 : d.persona_state_flags) &&
                      (l.m_unPersonaStateFlags =
                        null === (a = t.private_data) || void 0 === a
                          ? void 0
                          : a.persona_state_flags);
                  (null == d ? void 0 : d.game_id) &&
                    (l.m_gameid =
                      null === (n = t.private_data) || void 0 === n
                        ? void 0
                        : n.game_id);
                  (null == d ? void 0 : d.game_server_ip_address) &&
                    (l.m_unGameServerIP =
                      null === (s = t.private_data) || void 0 === s
                        ? void 0
                        : s.game_server_ip_address);
                  (null == d ? void 0 : d.lobby_steam_id) &&
                    (l.m_game_lobby_id =
                      null === (o = t.private_data) || void 0 === o
                        ? void 0
                        : o.lobby_steam_id);
                  (null == d ? void 0 : d.game_extra_info) &&
                    (l.m_strGameExtraInfo =
                      null === (c = t.private_data) || void 0 === c
                        ? void 0
                        : c.game_extra_info);
                  (null == u ? void 0 : u.profile_url) &&
                    (l.m_strProfileURL = u.profile_url);
                  return l;
                })(f.K.InitFromAccountID(e), i)
              : null;
          }),
      });
      function k(e, t, i) {
        const r = "string" == typeof i ? new f.K(i).GetAccountID() : i;
        return {
          queryKey: ["PlayerSummary", r],
          queryFn: () => e.loadPersonaState(r, t),
          enabled: !!r,
        };
      }
      let D;
    },
    9781: (e, t, i) => {
      i.d(t, { N: () => u, a: () => p });
      var r = i(85556),
        a = i(47427),
        n = i(77581),
        s = i(15690),
        o = i(29480),
        c = i(62210),
        l = i(37563);
      function p(e = !1) {
        return (0, r.mG)(this, void 0, void 0, function* () {
          if (e && s.Z.BIsInitialized()) return;
          const t = (0, l.kQ)(
            "partnerbrowse_webapi_token",
            "application_config",
          );
          (0, c.X)(Boolean(t), "require partnerbrowse_webapi_token");
          const i = new n.J(l.De.WEBAPI_BASE_URL, t);
          return (
            ("dev" != l.De.WEB_UNIVERSE && "beta" != l.De.WEB_UNIVERSE) ||
              console.log(
                "DEV_DEBUG: Initializing CStoreItemCache with access token",
                t,
              ),
            s.Z.Initialize(i, l.L7.is_partner_member)
          );
        });
      }
      function u() {
        const e = (0, o.T)("usePartnerStoreBrowseAPI"),
          [t, i] = (0, a.useState)(!1);
        return (
          (0, a.useEffect)(() => {
            p().then(() => {
              var t;
              (null === (t = null == e ? void 0 : e.token) || void 0 === t
                ? void 0
                : t.reason) || i(!0);
            });
          }, []),
          t
        );
      }
    },
    71472: (e, t, i) => {
      i.d(t, { Ar: () => c, Wo: () => l, i9: () => o, ks: () => n });
      var r = i(47427),
        a = i(8285);
      function n(e, t) {
        let i;
        "string" == typeof e
          ? (i = e)
          : "location" in e
          ? (i = e.location.search)
          : "search" in e && (i = e.search);
        const r = new URLSearchParams(i.substring(1));
        if (r.has(t)) {
          const e = r.getAll(t);
          return e[e.length - 1];
        }
      }
      const s = (e) => null != e;
      function o(e, t, i, r = !1) {
        const a = new URLSearchParams(e.location.search.substring(1));
        a.delete(t),
          s(i) && a.append(t, i),
          r
            ? e.replace(`?${a.toString()}`, Object.assign({}, e.location.state))
            : e.push(`?${a.toString()}`);
      }
      function c(e, t) {
        const i = (0, a.k6)(),
          c = (0, a.TH)(),
          l = (0, r.useMemo)(() => {
            const i = n(c.search, e);
            return s(i)
              ? s(t)
                ? "boolean" == typeof t
                  ? t.constructor("false" !== i)
                  : t.constructor(i)
                : i
              : t;
          }, [c.search, e, t]),
          p = (0, r.useCallback)(
            (t) => {
              o(i, e, s(t) ? String(t) : null);
            },
            [i, e],
          );
        return [l, p];
      }
      function l(e, t, i = !1) {
        const r = new URLSearchParams(e.location.search.substring(1));
        for (const e in t)
          if (t.hasOwnProperty(e)) {
            const i = t[e];
            r.delete(e), s(i) && r.append(e, i);
          }
        i
          ? e.replace(`?${r.toString()}`, Object.assign({}, e.location.state))
          : e.push(`?${r.toString()}`);
      }
    },
    98061: (e, t, i) => {
      i.d(t, {
        $D: () => _,
        AM: () => h,
        Gd: () => m,
        MQ: () => l,
        NR: () => u,
        ew: () => o,
        vB: () => d,
        z: () => p,
      });
      var r = i(47427),
        a = i(45492),
        n = i(20417),
        s = i(37563);
      const o = "pn";
      class c {
        static Get() {
          return (
            c.s_Singleton || ((c.s_Singleton = new c()), c.s_Singleton.Init()),
            c.s_Singleton
          );
        }
        constructor() {
          (this.m_rgVisiblePackageIDs = []),
            (this.m_visiblePackageIDsCallbackList = new a.pB()),
            "dev" == s.De.WEB_UNIVERSE && (window.g_PackageGridStore = this);
        }
        Init() {
          let e = (0, s.kQ)("package_data", "application_config");
          e
            ? ((this.m_rgPackageIDs = e.map((e) => e.packageid)),
              (this.m_rgPackageData = e),
              (this.m_mapPackageData = new Map(e.map((e) => [e.packageid, e]))))
            : ((this.m_rgPackageIDs = (0, s.kQ)(
                "package_ids",
                "application_config",
              )),
              (this.m_mapPackageData = new Map())),
            ("dev" != s.De.WEB_UNIVERSE && "beta" != s.De.WEB_UNIVERSE) ||
              console.log(
                "DEV_DEBUG: CPackageGridStore loading payload: ",
                this.m_rgPackageIDs,
              ),
            "dev" != s.De.WEB_UNIVERSE ||
              Array.isArray(this.m_rgPackageIDs) ||
              console.error("CPackageGridStore Invalid payload");
        }
        UpdatePackageNameSearchState(e) {
          const t = e.getHeaderFilterValue("packageName"),
            i = new URL(window.location.href);
          t != decodeURIComponent(i.searchParams.get(o)) &&
            (t
              ? i.searchParams.set(o, encodeURIComponent(t))
              : i.searchParams.delete(o),
            window.history.replaceState({}, "", i.toString()));
        }
        UpdateVisiblePackageList(e) {
          const t = e.getGroups("visible").filter((e) => e.isVisible());
          (this.m_rgVisiblePackageIDs = []),
            t.forEach((e) =>
              e
                .getRows()
                .forEach((e) =>
                  this.m_rgVisiblePackageIDs.push(e.getData().packageID),
                ),
            ),
            this.m_visiblePackageIDsCallbackList.Dispatch(
              this.m_rgVisiblePackageIDs,
            ),
            this.UpdatePackageNameSearchState(e);
        }
      }
      function l() {
        return c.Get().m_rgPackageIDs;
      }
      function p() {
        return c.Get().m_rgPackageIDs;
      }
      function u() {
        return c.Get().m_rgPackageData;
      }
      function d(e) {
        let t = c.Get().m_mapPackageData.get(e);
        return t ? t.package_name : e.toString();
      }
      function m() {
        return r.useCallback((e) => c.Get().UpdateVisiblePackageList(e), []);
      }
      function h() {
        const [e, t] = r.useState(c.Get().m_rgVisiblePackageIDs);
        return (0, n.Qg)(c.Get().m_visiblePackageIDsCallbackList, t), e;
      }
      function _() {
        return r.useMemo(
          () => (0, s.kQ)("publisherid", "application_config"),
          [],
        );
      }
    },
    66263: (e, t, i) => {
      i.d(t, {
        $w: () => U,
        AN: () => q,
        FR: () => I,
        HV: () => v,
        HX: () => W,
        OB: () => z,
        OG: () => Q,
        Ol: () => D,
        PP: () => S,
        R2: () => N,
        Rs: () => F,
        Tj: () => b,
        We: () => j,
        X1: () => E,
        _w: () => f,
        bS: () => V,
        dU: () => L,
        df: () => T,
        j_: () => H,
        ju: () => R,
        np: () => $,
        on: () => K,
        ps: () => w,
        qH: () => C,
        rX: () => O,
        sN: () => X,
        tu: () => A,
        uT: () => x,
        xm: () => Z,
        yh: () => M,
      });
      var r = i(85556),
        a = i(80751),
        n = i.n(a),
        s = i(47427),
        o = i(54842),
        c = i(16649),
        l = i(45492),
        p = i(20417),
        u = i(45284),
        d = i(37563),
        m = i(98061),
        h = i(30750),
        _ = i(62210);
      class g {
        static Get() {
          return (
            g.s_Singleton || ((g.s_Singleton = new g()), g.s_Singleton.Init()),
            g.s_Singleton
          );
        }
        constructor() {
          (this.m_mapPackagePrice = new Map()),
            (this.m_setRecurringSubscriptions = new Set()),
            (this.m_mapPriceProposals = new Map()),
            (this.m_mapLocalPackagePriceOverrides = new Map()),
            (this.m_mapPriceGridCellCallbackList = new Map()),
            (this.m_mapPackageOverridesCallbackList = new Map()),
            (this.m_allPriceOverridesCallbackList = new l.pB()),
            (this.m_mapOverridesPerPriceKey = new Map()),
            (this.m_mapCurrencyData = new Map()),
            (this.m_mapPriceKeyDescriptions = new Map()),
            (this.m_mapPriceGuidelines = new Map()),
            (this.m_rgPriceLevels = []),
            (this.m_strDisplayPriceKey = "USD"),
            (this.m_displayPriceKeyCallbackList = new l.pB()),
            (0, o.rC)(this),
            "dev" == d.De.WEB_UNIVERSE && (window.g_PackagePricingStore = this);
        }
        Init() {
          const e = new Set(),
            t = (0, d.kQ)("base_prices", "application_config");
          if (
            (("dev" != d.De.WEB_UNIVERSE && "beta" != d.De.WEB_UNIVERSE) ||
              console.log(
                "DEV_DEBUG: CPackagePricingStore loading base price payload: ",
                t,
              ),
            t)
          )
            if (this.BIsPricePayloadValid(t))
              for (let i in t) {
                const r = t[i],
                  a = parseInt(i),
                  n = new Map();
                this.m_mapPackagePrice.set(a, n);
                for (let t in r) e.add(t.toUpperCase()), n.set(t, r[t]);
              }
            else
              "dev" == d.De.WEB_UNIVERSE &&
                console.error("Invalid base price payload");
          const i = (0, d.kQ)("recurring_subs", "application_config");
          if (
            (("dev" != d.De.WEB_UNIVERSE && "beta" != d.De.WEB_UNIVERSE) ||
              console.log(
                "DEV_DEBUG: CPackagePricingStore loading recurring subscriptions payload: ",
                i,
              ),
            i)
          )
            if (Array.isArray(i))
              for (const e of i) this.m_setRecurringSubscriptions.add(e);
            else
              "dev" == d.De.WEB_UNIVERSE &&
                console.error("Invalid recurring subscriptions payload");
          const r = (0, d.kQ)("pending_proposals", "application_config");
          if (
            (("dev" != d.De.WEB_UNIVERSE && "beta" != d.De.WEB_UNIVERSE) ||
              console.log(
                "DEV_DEBUG: CPackagePricingStore loading pending price proposal payload: ",
                r,
              ),
            r)
          )
            if (this.BIsPendingPricePayloadValid(r))
              for (let e in r) {
                const t = r[e],
                  i = parseInt(e);
                this.m_mapPriceProposals.set(i, t);
              }
            else
              "dev" == d.De.WEB_UNIVERSE &&
                console.error("Invalid pending price proposal payload");
          const a = (0, d.kQ)("pricing_guidelines", "application_config");
          if (
            (("dev" != d.De.WEB_UNIVERSE && "beta" != d.De.WEB_UNIVERSE) ||
              console.log(
                "DEV_DEBUG: CPackagePricingStore loading pricing guidelines payload: ",
                a,
              ),
            a)
          )
            if (this.BIsGuidelinesPayloadValid(a)) {
              for (let t in a) {
                const i = a[t],
                  r = new Map(),
                  n = 100 * parseInt(t.substring(3));
                this.m_rgPriceLevels.push(n),
                  this.m_mapPriceGuidelines.set(n, r);
                for (let t in i)
                  e.add(t.toUpperCase()),
                    r.set(t.toUpperCase(), parseInt(i[t]));
              }
              this.m_rgPriceLevels.sort((e, t) => e - t);
            } else
              "dev" == d.De.WEB_UNIVERSE &&
                console.error("Invalid pricing guidelines payload");
          this.m_rgKnownPriceKeys = Array.from(e).sort((e, t) =>
            (0, u.eT)(y(e), y(t)),
          );
          const n = (0, d.kQ)("currency_data", "application_config");
          if (
            (("dev" != d.De.WEB_UNIVERSE && "beta" != d.De.WEB_UNIVERSE) ||
              console.log(
                "DEV_DEBUG: CPackagePricingStore loading currency payload: ",
                n,
              ),
            n)
          )
            if (this.BIsCurrencyPayloadValid(n))
              for (let e in n) {
                const t = n[e];
                this.m_mapCurrencyData.set(e, t);
              }
            else
              "dev" == d.De.WEB_UNIVERSE &&
                console.error("Invalid currency payload");
          const s = (0, d.kQ)("currency_descriptions", "application_config");
          if (
            (("dev" != d.De.WEB_UNIVERSE && "beta" != d.De.WEB_UNIVERSE) ||
              console.log(
                "DEV_DEBUG: CPackagePricingStore loading currency descriptions: ",
                s,
              ),
            s)
          )
            if (this.BIsCurrencyDescriptionPayloadValid(s))
              for (let e in s) {
                const t = s[e];
                this.m_mapPriceKeyDescriptions.set(e, t);
              }
            else
              "dev" == d.De.WEB_UNIVERSE &&
                console.error("Invalid currency description payload");
        }
        BIsPricePayloadValid(e) {
          const t = e;
          if (!t || "object" != typeof t) return !1;
          for (let e in t) {
            if (isNaN(parseInt(e))) return !1;
            const i = t[e];
            if (!i || "object" != typeof i) return !1;
            for (let e in i)
              if ("string" != typeof e || "number" != typeof i[e]) return !1;
          }
          return !0;
        }
        BIsPendingPricePayloadValid(e) {
          const t = e;
          if (!t || "object" != typeof t) return !1;
          for (let e in t) {
            if (isNaN(parseInt(e))) return !1;
            const i = t[e];
            if (
              !i ||
              "object" != typeof i ||
              i.packageID !== parseInt(e) ||
              "object" != typeof i.prices
            )
              return !1;
          }
          return !0;
        }
        BIsGuidelinesPayloadValid(e) {
          const t = e;
          if (!t || "object" != typeof t) return !1;
          for (let e in t) {
            const i = t[e];
            if (!i || "object" != typeof i) return !1;
            for (let e in i)
              if ("string" != typeof e || isNaN(parseInt(i[e]))) return !1;
          }
          return !0;
        }
        BIsCurrencyPayloadValid(e) {
          const t = e;
          if (!t || "object" != typeof t) return !1;
          for (let e in t) {
            const i = t[e];
            if (!i || "object" != typeof i || i.strCode != e) return !1;
          }
          return !0;
        }
        BIsCurrencyDescriptionPayloadValid(e) {
          const t = e;
          if (!t || "object" != typeof t) return !1;
          for (let e in t) {
            const i = t[e];
            if (
              !i ||
              "object" != typeof i ||
              void 0 === i.bRequired ||
              void 0 === i.strDescription
            )
              return !1;
          }
          return !0;
        }
        BPriceKeyRequired(e) {
          var t, i;
          return (
            null !==
              (i =
                null === (t = this.m_mapPriceKeyDescriptions.get(e)) ||
                void 0 === t
                  ? void 0
                  : t.bRequired) &&
            void 0 !== i &&
            i
          );
        }
        GetMinimumBasePrice(e) {
          var t;
          return (
            (null === (t = this.m_mapPriceKeyDescriptions.get(e)) ||
            void 0 === t
              ? void 0
              : t.nLowestBase) || 0
          );
        }
        GetMinimumDiscountPrice(e) {
          var t;
          return (
            (null === (t = this.m_mapPriceKeyDescriptions.get(e)) ||
            void 0 === t
              ? void 0
              : t.nLowestDiscount) || 0
          );
        }
        GetPublishedPrice(e, t) {
          var i;
          return null === (i = this.m_mapPackagePrice.get(e)) || void 0 === i
            ? void 0
            : i.get(t);
        }
        GetProposedPrice(e, t) {
          var i;
          return null === (i = this.m_mapPriceProposals.get(e)) || void 0 === i
            ? void 0
            : i.prices[t];
        }
        GetSavedPrice(e, t) {
          var i;
          return null !== (i = this.GetProposedPrice(e, t)) && void 0 !== i
            ? i
            : this.GetPublishedPrice(e, t);
        }
        GetPrice(e, t) {
          var i, r;
          return null !==
            (r =
              null === (i = this.m_mapLocalPackagePriceOverrides.get(e)) ||
              void 0 === i
                ? void 0
                : i.get(t)) && void 0 !== r
            ? r
            : this.GetSavedPrice(e, t);
        }
        GetPriceGridCellCallbackList(e, t) {
          if (!e || !t) return null;
          this.m_mapPriceGridCellCallbackList.has(e) ||
            this.m_mapPriceGridCellCallbackList.set(e, new Map());
          const i = this.m_mapPriceGridCellCallbackList.get(e);
          return i.has(t) || i.set(t, new l.pB()), i.get(t);
        }
        GetPackageOverridesCallbackList(e) {
          if (!e) return null;
          let t = this.m_mapPackageOverridesCallbackList.get(e);
          return (
            t ||
              ((t = new l.pB()),
              this.m_mapPackageOverridesCallbackList.set(e, t)),
            t
          );
        }
        OverridePrice(e, t, i) {
          i != this.GetPrice(e, t) &&
            (this.m_mapLocalPackagePriceOverrides.has(e) ||
              this.m_mapLocalPackagePriceOverrides.set(e, new Map()),
            i == this.GetSavedPrice(e, t)
              ? this.m_mapLocalPackagePriceOverrides.get(e).delete(t)
              : this.m_mapLocalPackagePriceOverrides.get(e).set(t, i),
            this.GetPriceGridCellCallbackList(e, t).Dispatch(i),
            this.GetPackageOverridesCallbackList(e).Dispatch(),
            this.DispatchPriceOverridesCallbacks());
        }
        OverridePricesForPackage(e, t, i, r) {
          (0, _.X)(
            t.length == i.length,
            `price list size doesn't match ${t.length} != ${i.length}`,
          );
          for (let r = 0; r < t.length; ++r) {
            const a = t[r],
              n = i[r];
            this.m_mapLocalPackagePriceOverrides.has(e) ||
              this.m_mapLocalPackagePriceOverrides.set(e, new Map()),
              n == this.GetSavedPrice(e, a)
                ? this.m_mapLocalPackagePriceOverrides.get(e).delete(a)
                : this.m_mapLocalPackagePriceOverrides.get(e).set(a, n),
              this.GetPriceGridCellCallbackList(e, a).Dispatch(n);
          }
          this.GetPackageOverridesCallbackList(e).Dispatch(),
            r && this.DispatchPriceOverridesCallbacks();
        }
        DispatchPriceOverridesCallbacks() {
          this.m_allPriceOverridesCallbackList.Dispatch(
            this.GetAllLocalPriceOverrides(),
          ),
            this.UpdateOverridesPerPriceKey();
        }
        BHasLocalPriceOverrides(e) {
          var t;
          return (
            (null === (t = this.m_mapLocalPackagePriceOverrides.get(e)) ||
            void 0 === t
              ? void 0
              : t.size) > 0
          );
        }
        GetAllLocalPriceOverrides() {
          const e = [];
          return (
            this.m_mapLocalPackagePriceOverrides.forEach((t, i) =>
              t.forEach((t, r) => {
                const a = this.GetSavedPrice(i, r);
                e.push({
                  packageID: i,
                  strPriceKey: r,
                  nPriceInCents: t,
                  nOldPriceInCents: a,
                });
              }),
            ),
            e.sort(P),
            e
          );
        }
        BHasLocalPriceOverride(e, t) {
          let i = this.m_mapLocalPackagePriceOverrides.get(e);
          return !!i && i.has(t);
        }
        UpdateOverridesPerPriceKey() {
          this.m_mapOverridesPerPriceKey.clear(),
            this.m_mapLocalPackagePriceOverrides.forEach((e, t) => {
              e.forEach((e, t) => {
                let i = this.m_mapOverridesPerPriceKey.get(t);
                i || (i = 0), i++, this.m_mapOverridesPerPriceKey.set(t, i);
              });
            });
        }
        DiscardAllLocalPriceOverrides() {
          const e = this.GetAllLocalPriceOverrides();
          this.m_mapLocalPackagePriceOverrides.clear();
          let t = new Set();
          for (const i of e) {
            const { packageID: e, strPriceKey: r } = i;
            this.GetPriceGridCellCallbackList(e, r).Dispatch(
              this.GetPrice(e, r),
            ),
              t.add(e);
          }
          for (const e of t) this.GetPackageOverridesCallbackList(e).Dispatch();
          this.DispatchPriceOverridesCallbacks();
        }
        DiscardAllLocalPriceOverridesForKey(e) {
          let t = !1,
            i = new Set();
          this.m_mapLocalPackagePriceOverrides.forEach((r, a) => {
            this.m_mapPriceKeyDescriptions.has(e) &&
              ((t = !0),
              this.m_mapLocalPackagePriceOverrides.get(a).delete(e),
              this.GetPriceGridCellCallbackList(a, e).Dispatch(
                this.GetPrice(a, e),
              ),
              i.add(a));
          });
          for (const e of i) this.GetPackageOverridesCallbackList(e).Dispatch();
          t && this.DispatchPriceOverridesCallbacks();
        }
        DiscardLocalPriceOverridesForPackage(e) {
          var t;
          null === (t = this.m_mapLocalPackagePriceOverrides.get(e)) ||
            void 0 === t ||
            t.forEach((t, i) => {
              this.GetPriceGridCellCallbackList(e, i).Dispatch(
                this.GetSavedPrice(e, i),
              );
            }),
            this.m_mapLocalPackagePriceOverrides.delete(e),
            this.GetPackageOverridesCallbackList(e).Dispatch(),
            this.DispatchPriceOverridesCallbacks();
        }
        BuildNewPricingProposal(e, t) {
          const i = {
            packageID: e,
            rtSubmitted: Math.floor(Date.now() / 1e3),
            submitterID: d.L7.accountid,
            prices: {},
            eState: 1,
            bPartnerWillPublish: t,
          };
          for (const t of this.m_rgKnownPriceKeys)
            i.prices[t] = this.GetPrice(e, t);
          return i;
        }
        SubmitProposalToServer(e, t, i) {
          var a, s, o;
          return (0, r.mG)(this, void 0, void 0, function* () {
            const r = this.BuildNewPricingProposal(e, t),
              l = JSON.stringify(r.prices),
              p = (0, d.kQ)("publisherid", "application_config"),
              u =
                d.De.PARTNER_BASE_URL +
                "pricing/ajaxsubmitproposal/" +
                p +
                "/" +
                e,
              m = new FormData();
            m.append("sessionid", d.De.SESSIONID),
              m.append("partner_will_publish", t ? "1" : "0"),
              m.append("prices", l);
            let h = null;
            try {
              const t = yield n().post(u, m, {
                withCredentials: !0,
                cancelToken: null == i ? void 0 : i.token,
              });
              if (
                200 == (null == t ? void 0 : t.status) &&
                1 ==
                  (null === (a = t.data) || void 0 === a
                    ? void 0
                    : a.success) &&
                0 != t.data.eState
              ) {
                if (3 == t.data.eState) {
                  this.m_mapPriceProposals.delete(e);
                  for (const t of this.m_rgKnownPriceKeys)
                    this.m_mapPackagePrice.get(e).set(t, r.prices[t]);
                } else
                  (r.eState = t.data.eState),
                    (r.proposalKey = t.data.proposalKey),
                    this.m_mapPriceProposals.set(e, r);
                return this.DiscardLocalPriceOverridesForPackage(e), t.data;
              }
            } catch (e) {
              h = e;
            }
            const _ = (0, c.l)(h);
            return (
              console.error(
                "CPackagePricingStore.SubmitProposalToServer: failed",
                _.strErrorMsg,
                _,
              ),
              null !==
                (o =
                  null === (s = null == h ? void 0 : h.response) || void 0 === s
                    ? void 0
                    : s.data) && void 0 !== o
                ? o
                : { success: 2 }
            );
          });
        }
        PublishApprovedProposal(e, t, i = 0) {
          var a, s, o;
          return (0, r.mG)(this, void 0, void 0, function* () {
            const r = this.m_mapPriceProposals.get(e);
            if (
              4 != (null == r ? void 0 : r.eState) ||
              !(null == r ? void 0 : r.proposalKey)
            )
              return { success: 8 };
            const l = (0, d.kQ)("publisherid", "application_config"),
              p =
                d.De.PARTNER_BASE_URL +
                "pricing/ajaxpublishproposal/" +
                l +
                "/" +
                e,
              u = new FormData();
            u.append("sessionid", d.De.SESSIONID),
              u.append("proposal_key", r.proposalKey);
            let m = null;
            try {
              const s = yield n().post(p, u, {
                withCredentials: !0,
                cancelToken: null == t ? void 0 : t.token,
                timeout: i,
              });
              if (
                200 == (null == s ? void 0 : s.status) &&
                1 ==
                  (null === (a = s.data) || void 0 === a ? void 0 : a.success)
              ) {
                this.m_mapPriceProposals.delete(e);
                for (const t of this.m_rgKnownPriceKeys)
                  this.m_mapPackagePrice.get(e).set(t, r.prices[t]),
                    this.GetPriceGridCellCallbackList(e, t).Dispatch(
                      this.GetSavedPrice(e, t),
                    );
                return (
                  this.GetPackageOverridesCallbackList(e).Dispatch(),
                  this.DispatchPriceOverridesCallbacks(),
                  s.data
                );
              }
            } catch (e) {
              m = e;
            }
            const h = (0, c.l)(m);
            return (
              console.error(
                "CPackagePricingStore.PublishApprovedProposal: failed",
                h.strErrorMsg,
                h,
              ),
              null !==
                (o =
                  null === (s = null == m ? void 0 : m.response) || void 0 === s
                    ? void 0
                    : s.data) && void 0 !== o
                ? o
                : { success: 2 }
            );
          });
        }
        CancelProposal(e, t) {
          var i, a, s;
          return (0, r.mG)(this, void 0, void 0, function* () {
            const r = this.m_mapPriceProposals.get(e);
            if (!(null == r ? void 0 : r.proposalKey)) return { success: 8 };
            const o = (0, d.kQ)("publisherid", "application_config"),
              l =
                d.De.PARTNER_BASE_URL +
                "pricing/ajaxcancelproposal/" +
                o +
                "/" +
                e,
              p = new FormData();
            p.append("sessionid", d.De.SESSIONID),
              p.append("proposal_key", r.proposalKey);
            let u = null;
            try {
              const r = yield n().post(l, p, {
                withCredentials: !0,
                cancelToken: null == t ? void 0 : t.token,
              });
              if (
                200 == (null == r ? void 0 : r.status) &&
                1 ==
                  (null === (i = r.data) || void 0 === i ? void 0 : i.success)
              ) {
                this.m_mapPriceProposals.delete(e);
                for (const t of this.m_rgKnownPriceKeys)
                  this.GetPriceGridCellCallbackList(e, t).Dispatch(
                    this.GetSavedPrice(e, t),
                  );
                return (
                  this.GetPackageOverridesCallbackList(e).Dispatch(),
                  this.DispatchPriceOverridesCallbacks(),
                  r.data
                );
              }
            } catch (e) {
              u = e;
            }
            const m = (0, c.l)(u);
            return (
              console.error(
                "CPackagePricingStore.CancelProposal: failed",
                m.strErrorMsg,
                m,
              ),
              null !==
                (s =
                  null === (a = null == u ? void 0 : u.response) || void 0 === a
                    ? void 0
                    : a.data) && void 0 !== s
                ? s
                : { success: 2 }
            );
          });
        }
        GetLocalOverrideCountForPriceKey(e) {
          var t;
          return null !== (t = this.m_mapOverridesPerPriceKey.get(e)) &&
            void 0 !== t
            ? t
            : 0;
        }
        BAnyPackagePriceBelowMin(e) {
          if (!e) return !1;
          for (let t of this.m_rgKnownPriceKeys) {
            let i = this.GetPrice(e, t);
            if (void 0 === i) continue;
            let { nMinPriceInCents: r, nMaxPriceInCents: a } = O(e, t);
            if (i < r) return !0;
          }
          return !1;
        }
      }
      function P(e, t) {
        if (e.strPriceKey == t.strPriceKey) {
          const i = (0, m.vB)(e.packageID),
            r = (0, m.vB)(t.packageID);
          return (0, u.eT)(i, r);
        }
        return (0, u.eT)(y(e.strPriceKey), y(t.strPriceKey));
      }
      function f(e) {
        const t = e.split("_")[0];
        return g.Get().m_mapCurrencyData.get(t);
      }
      function v(e, t) {
        var i;
        if (void 0 === t) return ["", "", ""];
        const r = null !== (i = f(t)) && void 0 !== i ? i : f("USD");
        let a = "";
        if ("number" == typeof e) {
          let t = e.toString();
          t.length < 3 && (t = (1 == t.length ? "0" : "") + "0" + t);
          const i = t.length - 2;
          for (let e = 0; e < i; e++) {
            const n = t.charAt(e);
            (a += n),
              e < i - 1 &&
                (i - e - 1) % 3 == 0 &&
                "-" != n &&
                (a += r.strThousandsSeparator);
          }
          r.bWholeUnitsOnly ||
            ((a += r.strDecimalSymbol), (a += t.substr(t.length - 2)));
        }
        return r.bSymbolIsPrefix
          ? [r.strSymbol + r.strSymbolAndNumberSeparator, a, ""]
          : ["", a, r.strSymbolAndNumberSeparator + r.strSymbol];
      }
      (0, r.gn)([o.LO], g.prototype, "m_mapOverridesPerPriceKey", void 0),
        (0, r.gn)([o.aD], g.prototype, "UpdateOverridesPerPriceKey", null);
      const G = new Map([
        ["USD", "@1"],
        ["CNY", "@2"],
        ["EUR", "@3"],
        ["GBP", "@4"],
        ["CAD", "@5"],
        ["AUD", "@6"],
        ["JPY", "@7"],
        ["KRW", "@8"],
        ["RUB", "@9"],
      ]);
      function y(e) {
        return G.has(e) ? G.get(e) : e.indexOf("_") > 0 ? "ZZZ" + e : e;
      }
      function I(e, t) {
        return g.Get().GetPrice(e, t);
      }
      function b(e) {
        const t = g.Get().m_strDisplayPriceKey;
        return v(g.Get().GetPrice(e, t), t).join("");
      }
      function S(e) {
        const [t, i] = s.useState(g.Get().m_strDisplayPriceKey);
        return (
          (0, p.Qg)(g.Get().m_displayPriceKeyCallbackList, i),
          (function (e, t) {
            const [i, r] = s.useState(g.Get().GetPrice(e, t));
            return (
              (0, p.Qg)(g.Get().GetPriceGridCellCallbackList(e, t), r),
              s.useEffect(() => r(g.Get().GetPrice(e, t)), [e, t]),
              v(i, t).join("")
            );
          })(e, t)
        );
      }
      function k(e, t) {
        const i = g.Get().GetPrice(e, "USD");
        let r = null;
        for (let e of g.Get().m_rgPriceLevels)
          if (e > i) {
            r = e;
            break;
          }
        if ("USD" == t || !r)
          return { nSuggestedPriceInCents: null, nGuidelinesLevel: null };
        let a = g.Get().m_mapPriceGuidelines.get(r).get(t);
        const n = g.Get().m_mapPriceGuidelines.get(r).get("USD");
        if (n != i) {
          const e = i / n;
          (r *= e), (a = Math.ceil(a * e));
        }
        return { nSuggestedPriceInCents: a, nGuidelinesLevel: r };
      }
      function D() {
        const e = (0, m.AM)();
        return s.useCallback(
          () =>
            (function (e) {
              let t = 0;
              for (const i of e) {
                const e = new Array(),
                  r = new Array(),
                  a = g.Get().GetPrice(i, "USD");
                if (a && !(a <= 0)) {
                  for (const t of g.Get().m_rgKnownPriceKeys) {
                    if ("USD" == t) continue;
                    const { nSuggestedPriceInCents: a, nGuidelinesLevel: n } =
                      k(i, t);
                    null !== n &&
                      g.Get().GetPrice(i, t) != a &&
                      (e.push(t), r.push(a));
                  }
                  e.length > 0 &&
                    (g.Get().OverridePricesForPackage(i, e, r), (t += 1));
                }
              }
              t > 0 && g.Get().DispatchPriceOverridesCallbacks();
            })(e),
          [e],
        );
      }
      function L(e, t) {
        const i = (0, p.NW)();
        (0, p.Qg)(g.Get().GetPriceGridCellCallbackList(e, t), i);
        const r = g.Get().GetPrice(e, t);
        (0, p.Qg)(g.Get().GetPriceGridCellCallbackList(e, "USD"), i);
        const { nSuggestedPriceInCents: a, nGuidelinesLevel: n } = k(e, t),
          o = s.useCallback((i) => g.Get().OverridePrice(e, t, i), [e, t]),
          c = g.Get().GetPublishedPrice(e, t),
          l = g.Get().GetProposedPrice(e, t),
          { nMinPriceInCents: u, nMaxPriceInCents: d } = O(e, t),
          m = g.Get().GetMinimumDiscountPrice(t),
          h = r ? Math.floor((100 * (r - m)) / r) : 90,
          _ = h < Math.min(90, Math.floor((100 * (n - 50)) / n)) ? h : null;
        return s.useMemo(
          () => ({
            nPriceInCents: r,
            nProposedPriceInCents: l,
            nPublishedPriceInCents: c,
            nMinPriceInCents: u,
            nMaxPriceInCents: d,
            nMaxDiscountPercentage: _,
            nSuggestedPriceInCents: a,
            fnSetPrice: o,
          }),
          [r, l, c, u, d, _, a, o],
        );
      }
      function C(e) {
        let [t, i] = s.useState(() => g.Get().BAnyPackagePriceBelowMin(e)),
          r = s.useCallback(() => {
            let t = g.Get().BAnyPackagePriceBelowMin(e);
            i(t);
          }, [e, i]);
        return (0, p.Qg)(g.Get().GetPackageOverridesCallbackList(e), r), t;
      }
      function A(e) {
        return g.Get().BAnyPackagePriceBelowMin(e);
      }
      function O(e, t) {
        let i = g.Get();
        return {
          nMinPriceInCents: i.GetMinimumBasePrice(t),
          nMaxPriceInCents: i.m_setRecurringSubscriptions.has(e)
            ? i.GetPublishedPrice(e, t)
            : null,
        };
      }
      function E() {
        return s.useCallback((e, t, i) => {
          const r = g.Get().GetPrice(e, t);
          return (
            g.Get().OverridePrice(e, t, i),
            r == i
              ? null
              : {
                  packageID: e,
                  strPriceKey: t,
                  nPriceInCents: i,
                  nOldPriceInCents: r,
                }
          );
        }, []);
      }
      function w(e) {
        return g.Get().m_mapPriceProposals.get(e);
      }
      function R(e) {
        return g.Get().m_mapPriceProposals.get(e);
      }
      function B(e) {
        let t = !1;
        for (const i of g.Get().m_rgKnownPriceKeys) {
          let r = g.Get().GetPublishedPrice(e, i);
          t = t || (0 != r && void 0 !== r);
        }
        return t;
      }
      function U(e) {
        const t = w(e),
          i = [];
        for (const r of g.Get().m_rgKnownPriceKeys) {
          const a = t.prices[r],
            n = g.Get().GetPublishedPrice(e, r);
          a != n &&
            i.push({
              packageID: e,
              strPriceKey: r,
              nPriceInCents: a,
              nOldPriceInCents: n,
            });
        }
        return i;
      }
      function K() {
        return g.Get().m_rgKnownPriceKeys;
      }
      function N(e) {
        let t = g.Get().m_mapPriceKeyDescriptions.get(e);
        return t ? t.strDescription : "";
      }
      function M(e) {
        return s.useCallback(() => {
          g.Get().DiscardAllLocalPriceOverridesForKey(e);
        }, [e]);
      }
      function V(e) {
        return s.useCallback(() => {
          g.Get().DiscardLocalPriceOverridesForPackage(e);
        }, [e]);
      }
      function F(e) {
        return s.useCallback(() => {
          g.Get().CancelProposal(e);
        }, [e]);
      }
      function z() {
        const [e, t] = s.useState(g.Get().m_strDisplayPriceKey),
          i = g.Get().m_rgKnownPriceKeys,
          r = s.useCallback((e) => {
            t(e),
              (g.Get().m_strDisplayPriceKey = e),
              g.Get().m_displayPriceKeyCallbackList.Dispatch(e);
          }, []);
        return { strPriceKey: e, rgSupportedPriceKeys: i, fnSetPriceKey: r };
      }
      function T(e) {
        const t = (0, p.NW)();
        return (
          (0, p.Qg)(g.Get().m_allPriceOverridesCallbackList, t),
          g.Get().BHasLocalPriceOverrides(e)
        );
      }
      function W(e) {
        return g.Get().BHasLocalPriceOverrides(e);
      }
      function Q() {
        const [e, t] = s.useState(() => g.Get().GetAllLocalPriceOverrides());
        return (0, p.Qg)(g.Get().m_allPriceOverridesCallbackList, t), e;
      }
      function x(e) {
        return (0, h.SZ)(() => g.Get().GetLocalOverrideCountForPriceKey(e));
      }
      function j() {
        return s.useCallback(() => {
          var e;
          return (
            (null === (e = g.Get().GetAllLocalPriceOverrides()) || void 0 === e
              ? void 0
              : e.length) > 0
          );
        }, []);
      }
      function H() {
        return s.useCallback(() => g.Get().DiscardAllLocalPriceOverrides(), []);
      }
      function q() {
        const e = [],
          t = s.useRef(new Map());
        g.Get().m_mapPriceGuidelines.forEach((i, r) => {
          const a = i.get("USD");
          e.push(a), t.current.set(a, r);
        }),
          e.sort((e, t) => e - t);
        const i = s.useCallback((e, i) => {
          const r = t.current.get(i);
          g.Get()
            .m_mapPriceGuidelines.get(r)
            .forEach((t, i) => g.Get().OverridePrice(e, i, t));
        }, []);
        return { rgUSDPricesInCents: e, fnApplyGuidelines: i };
      }
      function X() {
        return s.useCallback(
          (e, t, i) => g.Get().SubmitProposalToServer(e, t, i),
          [],
        );
      }
      function $() {
        return s.useCallback(
          (e, t) => g.Get().PublishApprovedProposal(e, t, 6e4),
          [],
        );
      }
      function Z(e) {
        let t = [];
        const i = g.Get().m_rgKnownPriceKeys;
        for (let r of e) {
          if (B(r)) continue;
          let e = !1;
          for (const t of i) {
            if (!g.Get().BPriceKeyRequired(t)) continue;
            if (!g.Get().GetPrice(r, t)) {
              e = !0;
              break;
            }
          }
          e && t.push(r);
        }
        return t;
      }
    },
    42006: (e, t, i) => {
      i.d(t, { $k: () => d, yh: () => n });
      var r = i(50423),
        a = i(31846);
      function n(e, t, i, r) {
        const n = (0, a.Xx)("#PackageGrid_MultipleBaseGamesFoundForPackage"),
          s = (0, a.Xx)("#PackageGrid_NoBaseGameFoundForPackage"),
          o = e == n,
          c = e == s,
          l = !o && !c,
          p = t == n,
          u = t == s,
          d = !p && !u;
        if (l && d) return e.localeCompare(t);
        if (l || d) return l ? -1 : 1;
        if (o == p && c == u) {
          const e = i.getData().packageName,
            t = r.getData().packageName;
          return e && t
            ? e.localeCompare(t)
            : e || t
            ? e
              ? -1
              : 1
            : i.getData().packageID - r.getData().packageID;
        }
        return o ? -1 : 1;
      }
      const s = (e) => e.nextElementSibling,
        o = (e) => e.previousElementSibling,
        c = (e, t) => {
          const i = e.getAttribute("tabulator-field"),
            r = e.parentElement;
          let a = r && t(r);
          for (; i && a; ) {
            for (const e of Array.from(a.children))
              if (i == e.getAttribute("tabulator-field")) return e;
            a = t(a);
          }
          return null;
        },
        l = new Map([
          [38, (e) => c(e, o)],
          [39, s],
          [40, (e) => c(e, s)],
          [37, o],
          [9, (e) => c(e, s)],
          [13, (e) => c(e, s)],
        ]);
      function p(e) {
        return (0, r.Jk)(e, (e) => e.classList.contains("tabulator-cell"));
      }
      function u(e) {
        const t = Array.prototype.slice.call(e.children).reverse();
        for (; t.length > 0; ) {
          const e = t.pop();
          if ("input" === e.tagName.toLowerCase()) return e;
          t.push(...Array.prototype.slice.call(e.children).reverse());
        }
        return null;
      }
      function d(e, t) {
        var i;
        const r = l.get(e.keyCode);
        if (!r) return;
        let a = r(p(e.currentTarget));
        for (; a; ) {
          if (
            "none" !=
              (null === (i = a.style) || void 0 === i ? void 0 : i.display) &&
            !a.classList.contains("tabulator-frozen")
          ) {
            const i = u(a);
            if (i) {
              return m(t, p(i)), i.focus(), void e.preventDefault();
            }
          }
          a = r(a);
        }
      }
      function m(e, t) {
        const i = e.columnManager.scrollLeft,
          r = t.offsetWidth,
          a = t.offsetLeft,
          n = a + r,
          s = e.columnManager.element.clientWidth,
          o = e.columnManager.headersElement.clientWidth,
          c = i + s;
        if (a >= c - o && n <= c) return;
        const l = (a + n) / 2 - (s - o / 2),
          p = (o - r) / 4,
          u = l + (l > i ? p : -1 * p);
        e.columnManager.scrollHorizontal(u), e.rowManager.scrollHorizontal(u);
      }
    },
    37047: (e, t, i) => {
      i.d(t, { $: () => r, _: () => a });
      const r = "America/Los_Angeles";
      function a(e) {
        const t = i(98973).unix(e).tz(r);
        return (
          t.seconds(0),
          t.minutes(0),
          t.hours(10),
          t.unix() < e && t.hours(34),
          t.unix()
        );
      }
    },
  },
]);

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [2188],
  {
    45944: (e, t, n) => {
      n.d(t, { Q8: () => f, md: () => g });
      var i = n(85556),
        a = n(54842),
        s = n(77936),
        o = n(79545),
        r = n(22520),
        p = n(37563);
      class m {
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
          let n = p.De.LANGUAGE;
          return h(
            e,
            this.GetTokenList(n),
            "english" != n ? this.GetTokenList("english") : null,
            this.m_appid,
            t,
          );
        }
        SubstituteParams(e, t) {
          let n = p.De.LANGUAGE;
          return c(
            e,
            this.GetTokenList(n),
            "english" != n ? this.GetTokenList("english") : null,
            this.m_appid,
            t,
          );
        }
      }
      function h(e, t, n, i, a) {
        if (!e.startsWith("#"))
          return (
            console.log(
              "Token doesn't start with #:",
              e,
              "appid",
              i,
              "tokens",
              t,
            ),
            ""
          );
        let s = e;
        e = e.toLowerCase();
        let o = "";
        if (
          (t && t.has(e) && (o = t.get(e)),
          !o && n && n.has(e) && (o = n.get(e)),
          o)
        )
          o = c(o, t, n, i, a);
        else if (
          ((t || n) &&
            console.log(
              "No loc found for appid",
              i,
              s,
              "Tokens:",
              t,
              "Fallback:",
              n,
            ),
          t && 1 != p.De.EUNIVERSE)
        )
          return e;
        return o;
      }
      function c(e, t, n, i, a) {
        let s = e.match(/{[A-za-z0-9_%#:]+}/g);
        if (s)
          for (let o of s) {
            let s = h(l(o.slice(1, -1), a), t, n, i, a);
            if (!s) return "";
            e = e.replace(o, s);
          }
        return (e = l(e, a));
      }
      function l(e, t) {
        let n = e.match(/%[A-Za-z0-9_:]+%/g);
        if (n)
          for (let i of n) {
            let n = i.slice(1, -1).toLowerCase(),
              a = t.get(n);
            null == a
              ? console.log("No rich presence found for", n)
              : (e = e.replace(i, a));
          }
        return e;
      }
      var _ = n(18015),
        u = n(62210),
        d = n(45492);
      class g {
        constructor() {
          (this.m_mapAppInfo = a.LO.map()),
            (this.m_mapRichPresenceLoc = a.LO.map()),
            (this.m_cAppInfoRequestsInFlight = 0),
            (this.m_setPendingAppInfo = new Set()),
            (this.m_CacheStorage = null),
            (this.m_fnCallbackOnAppInfoLoaded = new d.pB()),
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
              (0, u.X)(
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
            ((0, u.X)(
              this.m_CMInterface,
              "CAppInfoStore.GetAppInfo called before Init",
            ),
            !this.m_mapAppInfo.has(e))
          ) {
            let t = new r.Am(e);
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
          return (0, i.mG)(this, void 0, void 0, function* () {
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
          return (0, i.mG)(this, void 0, void 0, function* () {
            this.m_cAppInfoRequestsInFlight++;
            let n = yield this.LoadAppInfoBatchFromLocalCache(e);
            if (n.length) {
              console.log("Loading batch of App Info from Steam: ", n),
                yield null === (t = this.m_CMInterface) || void 0 === t
                  ? void 0
                  : t.WaitUntilLoggedOn();
              let e = o.gA.Init(_.Fi);
              e.Body().set_language((0, s.jM)(p.De.LANGUAGE));
              const i = 50;
              for (; n.length > 0; ) {
                const t = Math.min(i, n.length),
                  a = n.slice(0, t);
                (n = n.slice(t)), e.Body().set_appids(a);
                const s = yield _.AE.GetApps(
                  this.m_CMInterface.GetServiceTransport(),
                  e,
                );
                1 == s.GetEResult()
                  ? this.OnGetAppsResponse(s)
                  : console.error(
                      `Error when calling CommunityService.GetApps: EResult=${s.GetEResult()}, AppIDs:`,
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
          for (let n of e.Body().apps()) {
            let e = this.m_mapAppInfo.get(n.appid());
            (0, u.X)(
              e,
              `Got AppInfo response for unrequested AppID: ${n.appid()}`,
            ),
              e &&
                ((e = new r.Am(n.appid())),
                e.DeserializeFromMessage(n),
                this.m_mapAppInfo.set(n.appid(), e),
                t.push(e));
          }
          this.SaveAppInfoBatchToLocalCache(t);
        }
        OnAppOverviewChange(e) {
          for (let t of e) {
            const e = new r.Am(t.appid());
            e.DeserializeFromAppOverview(t),
              e.is_initialized && this.m_mapAppInfo.set(t.appid(), e);
          }
        }
        EnsureAppInfoForAppIDs(e) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            let t = !1;
            return (
              e.forEach((e) => {
                let n = this.m_mapAppInfo.get(e);
                n
                  ? n.is_valid || (t = !0)
                  : ((n = new r.Am(e)),
                    this.m_mapAppInfo.set(e, n),
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
          return (0, i.mG)(this, void 0, void 0, function* () {
            if (!this.m_CacheStorage) return e;
            console.log("Loading batch of App Info from Local Cache: ", e);
            const t = new Date(new Date().getTime() - 12096e5),
              n = (e) =>
                (0, i.mG)(this, void 0, void 0, function* () {
                  var n;
                  const i = yield null === (n = this.m_CacheStorage) ||
                  void 0 === n
                    ? void 0
                    : n.GetObject(this.GetCacheKeyForAppID(e));
                  if (!i) return e;
                  let a = this.m_mapAppInfo.get(e);
                  return (
                    (0, u.X)(
                      a,
                      "Didn't find AppInfo in our map when loading from cache but it should've been there?",
                    ),
                    a
                      ? ((a = new r.Am(e)),
                        a.DeserializeFromCacheObject(i),
                        a.is_initialized
                          ? (this.m_mapAppInfo.set(e, a),
                            a.time_updated_from_server < t ? e : null)
                          : (console.warn(
                              "Failed to deserialize cached App Info: ",
                              e,
                              i,
                            ),
                            e))
                      : e
                  );
                });
            let a = e.map((e) => n(e));
            return (yield Promise.all(a)).filter((e) => null !== e);
          });
        }
        SaveAppInfoBatchToLocalCache(e) {
          return (0, i.mG)(this, void 0, void 0, function* () {
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
        Localize(e, t, n) {
          const i = this.GetRichPresenceLoc(e);
          return i
            ? i.Localize(t, n)
            : 1 != p.De.EUNIVERSE
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
              t.m_nLastUpdated + 6e4 * r.x3 < Date.now() &&
                this.QueueRichPresenceLocRequest(t),
              t
            );
          }
          let t = new m(e);
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
          for (let n of t) {
            let t = n.language(),
              i = e.m_mapLanguages.get(t);
            i
              ? i.clear()
              : (e.m_mapLanguages.set(t, new Map()),
                (i = e.m_mapLanguages.get(t)));
            for (let e of n.tokens())
              null == i || i.set(e.name().toLowerCase(), e.value());
          }
        }
        QueueRichPresenceLocRequest(e) {
          return (
            e.m_fetching ||
              ((e.m_fetching = this.m_CMInterface
                .WaitUntilLoggedOn()
                .then(() => {
                  let t = o.gA.Init(_.tj);
                  return (
                    t.Body().set_appid(e.GetAppID()),
                    t.Body().set_language(p.De.LANGUAGE),
                    _.AE.GetAppRichPresenceLocalization(
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
      (0, i.gn)([a.aD], g.prototype, "OnGetAppsResponse", null),
        (0, i.gn)([a.aD], g.prototype, "OnRichPresenceLocUpdate", null);
      const f = new g();
    },
    42411: (e, t, n) => {
      n.d(t, { Pv: () => c, U0: () => m.U, WV: () => m.W, sB: () => h });
      var i = n(85556),
        a = n(54842),
        s = n(24289),
        o = n(45944),
        r = n(31846),
        p = n(37563),
        m = n(48760);
      function h(e) {
        let t = "offline";
        return (
          e &&
            (e.is_ingame
              ? (t = "ingame")
              : e.m_broadcastAccountId
              ? (t = "watchingbroadcast")
              : e.is_online && (t = "online"),
            e.is_awayOrSnooze && (t += " awayOrSnooze")),
          t
        );
      }
      class c {
        constructor(e) {
          (this.m_bInitialized = !1),
            (this.m_ePersonaState = 0),
            (this.m_unGamePlayedAppID = 0),
            (this.m_gameid = "0"),
            (this.m_unPersonaStateFlags = 0),
            (this.m_strPlayerName = ""),
            (this.m_strAvatarHash = m.W),
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
            (this.m_mapRichPresence = a.LO.map()),
            (this.m_bNameInitialized = !1),
            (this.m_bStatusInitialized = !1),
            (this.m_strProfileURL = void 0),
            (0, a.rC)(this),
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
            ? o.Q8.GetAppInfo(this.m_unGamePlayedAppID).name
            : "";
        }
        GetCurrentGameIconURL() {
          return this.m_unGamePlayedAppID
            ? o.Q8.GetAppInfo(this.m_unGamePlayedAppID).icon_url
            : "";
        }
        GetCurrentGameLogoURL() {
          return this.m_unGamePlayedAppID
            ? o.Q8.GetAppInfo(this.m_unGamePlayedAppID).logo_url
            : "";
        }
        GetBroadcastGameLogoURL() {
          return this.m_broadcastAppId
            ? o.Q8.GetAppInfo(this.m_broadcastAppId).logo_url
            : "";
        }
        BIsAppInfoReady() {
          return (
            !this.m_unGamePlayedAppID ||
            o.Q8.GetAppInfo(this.m_unGamePlayedAppID).is_initialized
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
            let e = o.Q8.GetRichPresenceLoc(this.m_unGamePlayedAppID);
            if (e) {
              let t = this.m_mapRichPresence.get("steam_display");
              return e.Localize(t, this.m_mapRichPresence);
            }
          } else if (this.HasStateFlag(8))
            return (0, r.Xx)("#PersonaStateRemotePlayTogether");
          return "";
        }
        GetOfflineStatusUpdateRate() {
          if (0 == this.last_seen_online) return 3e4;
          const e = 3600;
          let t = 1e3;
          const n = o.Q8.CMInterface.GetServerRTime32() - this.last_seen_online;
          return (t *= n > 86400 ? e : n > 7200 ? 60 : 15), t;
        }
        GetOfflineStatusTime() {
          if (0 == this.last_seen_online)
            return (0, r.Xx)("#PersonaStateOffline");
          let e = this.GetOfflineStatusUpdateRate();
          (!p.De.IN_MOBILE || e <= 60) && (0, s.zO)(e);
          let t = o.Q8.CMInterface.GetServerRTime32() - this.last_seen_online;
          return t < 60
            ? (0, r.Xx)("#PersonaStateLastSeen_JustNow")
            : (0, r.Xx)("#PersonaStateLastSeen", (0, r.yW)(t));
        }
        GetLocalizedOnlineStatus() {
          switch (this.m_ePersonaState) {
            case 0:
            case 7:
              return this.GetOfflineStatusTime();
            case 1:
              return (0, r.Xx)("#PersonaStateOnline");
            case 2:
              return (0, r.Xx)("#PersonaStateBusy");
            case 3:
              return (0, r.Xx)("#PersonaStateAway");
            case 4:
              return (0, r.Xx)("#PersonaStateSnooze");
            case 5:
              return (0, r.Xx)("#PersonaStateLookingToTrade");
            case 6:
              return (0, r.Xx)("#PersonaStateLookingToPlay");
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
          return this.m_strAvatarHash != m.W;
        }
        get avatar_url() {
          return (0, m.U)(this.m_strAvatarHash);
        }
        get avatar_url_medium() {
          return (0, m.U)(this.m_strAvatarHash, "medium");
        }
        get avatar_url_full() {
          return (0, m.U)(this.m_strAvatarHash, "full");
        }
        static SortStatusComparator(e, t, n) {
          if (t.has_public_party_beacon) {
            if (!n.has_public_party_beacon) return -1;
          } else {
            if (n.has_public_party_beacon) return 1;
            if (t.is_ingame) {
              if (!n.is_ingame) return -1;
              if (!e) return 0;
              if (t.is_awayOrSnooze) {
                if (!n.is_awayOrSnooze) return 1;
              } else if (n.is_awayOrSnooze) return -1;
            } else if (n.is_ingame) return 1;
          }
          if (t.is_online) {
            if (!n.is_online) return -1;
          } else if (n.is_online) return 1;
          if (e)
            if (t.is_awayOrSnooze) {
              if (!n.is_awayOrSnooze) return 1;
            } else if (n.is_awayOrSnooze) return -1;
          return 0;
        }
        GetCommunityProfileURL() {
          return this.m_strProfileURL
            ? `${p.De.COMMUNITY_BASE_URL}id/${this.m_strProfileURL}/`
            : `${
                p.De.COMMUNITY_BASE_URL
              }profiles/${this.m_steamid.ConvertTo64BitString()}/`;
        }
      }
      (0, i.gn)([a.LO], c.prototype, "m_bInitialized", void 0),
        (0, i.gn)([a.LO], c.prototype, "m_ePersonaState", void 0),
        (0, i.gn)([a.LO], c.prototype, "m_unGamePlayedAppID", void 0),
        (0, i.gn)([a.LO], c.prototype, "m_gameid", void 0),
        (0, i.gn)([a.LO], c.prototype, "m_unPersonaStateFlags", void 0),
        (0, i.gn)([a.LO], c.prototype, "m_strPlayerName", void 0),
        (0, i.gn)([a.LO], c.prototype, "m_strAvatarHash", void 0),
        (0, i.gn)([a.LO], c.prototype, "m_strAccountName", void 0),
        (0, i.gn)([a.LO], c.prototype, "m_rtLastSeenOnline", void 0),
        (0, i.gn)([a.LO], c.prototype, "m_strGameExtraInfo", void 0),
        (0, i.gn)([a.LO], c.prototype, "m_unGameServerIP", void 0),
        (0, i.gn)([a.LO], c.prototype, "m_unGameServerPort", void 0),
        (0, i.gn)([a.LO], c.prototype, "m_game_lobby_id", void 0),
        (0, i.gn)([a.LO], c.prototype, "m_bPlayerNamePending", void 0),
        (0, i.gn)([a.LO], c.prototype, "m_bAvatarPending", void 0),
        (0, i.gn)([a.LO], c.prototype, "m_broadcastId", void 0),
        (0, i.gn)([a.LO], c.prototype, "m_broadcastAccountId", void 0),
        (0, i.gn)([a.LO], c.prototype, "m_broadcastAppId", void 0),
        (0, i.gn)([a.LO], c.prototype, "m_broadcastViewerCount", void 0),
        (0, i.gn)([a.LO], c.prototype, "m_strBroadcastTitle", void 0),
        (0, i.gn)([a.LO], c.prototype, "m_bCommunityBanned", void 0);
    },
    29480: (e, t, n) => {
      n.d(t, { T: () => o });
      var i = n(80751),
        a = n.n(i),
        s = n(47427);
      function o(e) {
        const t = s.useRef(a().CancelToken.source());
        return (
          s.useEffect(() => {
            const n = t.current;
            return () => n.cancel(e ? `${e}: unmounting` : "unmounting");
          }, [e]),
          t.current
        );
      }
    },
  },
]);

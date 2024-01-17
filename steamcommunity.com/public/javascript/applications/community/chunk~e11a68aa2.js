/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [2188],
  {
    22520: (e, t, i) => {
      i.d(t, { Am: () => m, kI: () => r, x3: () => p });
      var n = i(37563),
        s = i(48760),
        a = i(62210);
      const r = 0,
        o = "061818254b2c99ac49e6626adb128ed1282a392f",
        p = 120;
      class m {
        constructor(e) {
          (this.m_bInitialized = !1), (this.m_unAppID = e);
        }
        get appid() {
          return this.m_unAppID;
        }
        get is_initialized() {
          return this.m_bInitialized;
        }
        get is_valid() {
          return this.m_bInitialized && !!this.m_strName;
        }
        get name() {
          return this.m_strName;
        }
        get header_image_url() {
          return n.De.MEDIA_CDN_URL + `steam/apps/${this.m_unAppID}/header.jpg`;
        }
        get icon_url_no_default() {
          return this.m_strIconURL && this.BuildAppURL(this.m_strIconURL, o);
        }
        get icon_url() {
          return this.BuildAppURL(this.m_strIconURL, o);
        }
        get logo_url() {
          return (
            n.De.MEDIA_CDN_URL +
            `steam/apps/${this.m_unAppID}/capsule_231x87.jpg`
          );
        }
        get time_updated_from_server() {
          return this.m_dtUpdatedFromServer;
        }
        get apptype() {
          return this.m_eAppType;
        }
        BIsApplicationOrTool() {
          return 4 == this.apptype || 2 == this.apptype;
        }
        BuildAppURL(e, t) {
          return e
            ? n.De.MEDIA_CDN_COMMUNITY_URL +
                "images/apps/" +
                this.appid +
                "/" +
                e +
                ".jpg"
            : (0, s.U)(t);
        }
        DeserializeFromMessage(e) {
          (this.m_bInitialized = !0),
            (this.m_strName = e.name()),
            (this.m_strIconURL = e.icon()),
            (this.m_dtUpdatedFromServer = new Date()),
            (this.m_eAppType = e.app_type());
        }
        DeserializeFromAppOverview(e) {
          e.icon_hash() && 1073741824 != e.app_type()
            ? ((this.m_bInitialized = !0),
              (this.m_strName = e.display_name()),
              (this.m_strIconURL = e.icon_hash()),
              (this.m_dtUpdatedFromServer = new Date()),
              (this.m_eAppType = e.app_type()))
            : (this.m_bInitialized = !1);
        }
        DeserializeFromCacheObject(e) {
          try {
            (this.m_strName = e.strName),
              (this.m_strIconURL = e.strIconURL),
              (this.m_dtUpdatedFromServer = new Date(e.strUpdatedFromServer)),
              (this.m_eAppType = e.eAppType),
              (this.m_bInitialized = !0);
          } catch (e) {}
        }
        SerializeToCacheObject() {
          return (
            (0, a.X)(
              this.m_bInitialized,
              "Attempting to serialize an uninitialized AppInfo object for caching!",
            ),
            this.m_bInitialized
              ? {
                  strName: this.m_strName,
                  strIconURL: this.m_strIconURL,
                  strUpdatedFromServer: this.m_dtUpdatedFromServer.toJSON(),
                  eAppType: this.m_eAppType,
                }
              : null
          );
        }
      }
    },
    45944: (e, t, i) => {
      i.d(t, { Q8: () => f, md: () => g });
      var n = i(85556),
        s = i(54842),
        a = i(77936),
        r = i(21928),
        o = i(22520),
        p = i(37563);
      class m {
        constructor(e) {
          (this.m_nLastUpdated = 0),
            (this.m_mapLanguages = s.LO.map()),
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
          let i = p.De.LANGUAGE;
          return h(
            e,
            this.GetTokenList(i),
            "english" != i ? this.GetTokenList("english") : null,
            this.m_appid,
            t,
          );
        }
        SubstituteParams(e, t) {
          let i = p.De.LANGUAGE;
          return _(
            e,
            this.GetTokenList(i),
            "english" != i ? this.GetTokenList("english") : null,
            this.m_appid,
            t,
          );
        }
      }
      function h(e, t, i, n, s) {
        if (!e.startsWith("#"))
          return console.log("Token doesn't start with #:", e), "";
        let a = e;
        e = e.toLowerCase();
        let r = "";
        if (
          (t && t.has(e) && (r = t.get(e)),
          !r && i && i.has(e) && (r = i.get(e)),
          r)
        )
          r = _(r, t, i, n, s);
        else if (
          ((t || i) &&
            console.log(
              "No loc found for appid",
              n,
              a,
              "Tokens:",
              t,
              "Fallback:",
              i,
            ),
          t && 1 != p.De.EUNIVERSE)
        )
          return e;
        return r;
      }
      function _(e, t, i, n, s) {
        let a = e.match(/{[A-za-z0-9_%#:]+}/g);
        if (a)
          for (let r of a) {
            let a = h(c(r.slice(1, -1), s), t, i, n, s);
            if (!a) return "";
            e = e.replace(r, a);
          }
        return (e = c(e, s));
      }
      function c(e, t) {
        let i = e.match(/%[A-Za-z0-9_:]+%/g);
        if (i)
          for (let n of i) {
            let i = n.slice(1, -1).toLowerCase(),
              s = t.get(i);
            null == s
              ? console.log("No rich presence found for", i)
              : (e = e.replace(n, s));
          }
        return e;
      }
      var l = i(18015),
        u = i(62210),
        d = i(45492);
      class g {
        constructor() {
          (this.m_mapAppInfo = s.LO.map()),
            (this.m_mapRichPresenceLoc = s.LO.map()),
            (this.m_cAppInfoRequestsInFlight = 0),
            (this.m_setPendingAppInfo = new Set()),
            (this.m_CacheStorage = null),
            (this.m_fnCallbackOnAppInfoLoaded = new d.pB()),
            (0, s.rC)(this);
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
          return (0, n.mG)(this, void 0, void 0, function* () {
            const e = this.m_PendingAppInfoResolve,
              t = Array.from(this.m_setPendingAppInfo);
            (this.m_PendingAppInfoPromise = void 0),
              (this.m_PendingAppInfoResolve = void 0),
              this.m_setPendingAppInfo.clear(),
              yield this.LoadAppInfoBatch(t),
              e();
          });
        }
        LoadAppInfoBatch(e) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            this.m_cAppInfoRequestsInFlight++;
            let t = yield this.LoadAppInfoBatchFromLocalCache(e);
            if (t.length) {
              console.log("Loading batch of App Info from Steam: ", t),
                yield this.m_CMInterface.WaitUntilLoggedOn();
              let e = r.gA.Init(l.Fi);
              e.Body().set_language((0, a.jM)(p.De.LANGUAGE));
              const i = 50;
              for (; t.length > 0; ) {
                const n = Math.min(i, t.length),
                  s = t.slice(0, n);
                (t = t.slice(n)), e.Body().set_appids(s);
                const a = yield l.AE.GetApps(
                  this.m_CMInterface.GetServiceTransport(),
                  e,
                );
                1 == a.GetEResult()
                  ? this.OnGetAppsResponse(a)
                  : console.error(
                      `Error when calling CommunityService.GetApps: EResult=${a.GetEResult()}, AppIDs:`,
                      s,
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
            (0, u.X)(
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
          return (0, n.mG)(this, void 0, void 0, function* () {
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
          return (0, n.mG)(this, void 0, void 0, function* () {
            if (!this.m_CacheStorage) return e;
            console.log("Loading batch of App Info from Local Cache: ", e);
            const t = new Date(new Date().getTime() - 12096e5),
              i = (e) =>
                (0, n.mG)(this, void 0, void 0, function* () {
                  const i = yield this.m_CacheStorage.GetObject(
                    this.GetCacheKeyForAppID(e),
                  );
                  if (!i) return e;
                  let n = this.m_mapAppInfo.get(e);
                  return (
                    (0, u.X)(
                      n,
                      "Didn't find AppInfo in our map when loading from cache but it should've been there?",
                    ),
                    n
                      ? ((n = new o.Am(e)),
                        n.DeserializeFromCacheObject(i),
                        n.is_initialized
                          ? (this.m_mapAppInfo.set(e, n),
                            n.time_updated_from_server < t ? e : null)
                          : (console.warn(
                              "Failed to deserialize cached App Info: ",
                              e,
                              i,
                            ),
                            e))
                      : e
                  );
                });
            let s = e.map((e) => i(e));
            return (yield Promise.all(s)).filter((e) => null !== e);
          });
        }
        SaveAppInfoBatchToLocalCache(e) {
          return (0, n.mG)(this, void 0, void 0, function* () {
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
          const n = this.GetRichPresenceLoc(e);
          return n
            ? n.Localize(t, i)
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
              t.m_nLastUpdated + 6e4 * o.x3 < Date.now() &&
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
          for (let i of t) {
            let t = i.language(),
              n = e.m_mapLanguages.get(t);
            n
              ? n.clear()
              : (e.m_mapLanguages.set(t, new Map()),
                (n = e.m_mapLanguages.get(t)));
            for (let e of i.tokens()) n.set(e.name().toLowerCase(), e.value());
          }
        }
        QueueRichPresenceLocRequest(e) {
          return (
            e.m_fetching ||
              ((e.m_fetching = this.m_CMInterface
                .WaitUntilLoggedOn()
                .then(() => {
                  let t = r.gA.Init(l.tj);
                  return (
                    t.Body().set_appid(e.GetAppID()),
                    t.Body().set_language(p.De.LANGUAGE),
                    l.AE.GetAppRichPresenceLocalization(
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
      (0, n.gn)([s.aD], g.prototype, "OnGetAppsResponse", null),
        (0, n.gn)([s.aD], g.prototype, "OnRichPresenceLocUpdate", null);
      const f = new g();
    },
    42411: (e, t, i) => {
      i.d(t, { Pv: () => _, U0: () => m.U, WV: () => m.W, sB: () => h });
      var n = i(85556),
        s = i(54842),
        a = i(24289),
        r = i(45944),
        o = i(31846),
        p = i(37563),
        m = i(48760);
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
      class _ {
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
            (this.m_mapRichPresence = s.LO.map()),
            (this.m_bNameInitialized = !1),
            (this.m_bStatusInitialized = !1),
            (this.m_strProfileURL = void 0),
            (0, s.rC)(this),
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
          return 0 != (2 & this.m_unPersonaStateFlags);
        }
        get connect_string() {
          return this.m_mapRichPresence.get("connect");
        }
        get is_in_valid_lobby() {
          return this.m_game_lobby_id && "0" != this.m_game_lobby_id;
        }
        get has_server_ip() {
          return 0 != this.m_unGameServerIP;
        }
        get is_awayOrSnooze() {
          return 3 == this.m_ePersonaState || 4 == this.m_ePersonaState;
        }
        HasStateFlag(e) {
          return 0 != (this.m_unPersonaStateFlags & e);
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
            ? r.Q8.GetAppInfo(this.m_unGamePlayedAppID).name
            : "";
        }
        GetCurrentGameIconURL() {
          return this.m_unGamePlayedAppID
            ? r.Q8.GetAppInfo(this.m_unGamePlayedAppID).icon_url
            : "";
        }
        GetCurrentGameLogoURL() {
          return this.m_unGamePlayedAppID
            ? r.Q8.GetAppInfo(this.m_unGamePlayedAppID).logo_url
            : "";
        }
        GetBroadcastGameLogoURL() {
          return this.m_broadcastAppId
            ? r.Q8.GetAppInfo(this.m_broadcastAppId).logo_url
            : "";
        }
        BIsAppInfoReady() {
          return (
            !this.m_unGamePlayedAppID ||
            r.Q8.GetAppInfo(this.m_unGamePlayedAppID).is_initialized
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
            let e = r.Q8.GetRichPresenceLoc(this.m_unGamePlayedAppID);
            if (e) {
              let t = this.m_mapRichPresence.get("steam_display");
              return e.Localize(t, this.m_mapRichPresence);
            }
          } else if (this.HasStateFlag(8))
            return (0, o.Xx)("#PersonaStateRemotePlayTogether");
          return "";
        }
        GetOfflineStatusUpdateRate() {
          if (0 == this.last_seen_online) return 3e4;
          const e = 3600;
          let t = 1e3;
          const i = r.Q8.CMInterface.GetServerRTime32() - this.last_seen_online;
          return (t *= i > 86400 ? e : i > 7200 ? 60 : 15), t;
        }
        GetOfflineStatusTime() {
          if (0 == this.last_seen_online)
            return (0, o.Xx)("#PersonaStateOffline");
          let e = this.GetOfflineStatusUpdateRate();
          (!p.De.IN_MOBILE || e <= 60) && (0, a.zO)(e);
          let t = r.Q8.CMInterface.GetServerRTime32() - this.last_seen_online;
          return t < 60
            ? (0, o.Xx)("#PersonaStateLastSeen_JustNow")
            : (0, o.Xx)("#PersonaStateLastSeen", (0, o.yW)(t));
        }
        GetLocalizedOnlineStatus() {
          switch (this.m_ePersonaState) {
            case 0:
            case 7:
              return this.GetOfflineStatusTime();
            case 1:
              return (0, o.Xx)("#PersonaStateOnline");
            case 2:
              return (0, o.Xx)("#PersonaStateBusy");
            case 3:
              return (0, o.Xx)("#PersonaStateAway");
            case 4:
              return (0, o.Xx)("#PersonaStateSnooze");
            case 5:
              return (0, o.Xx)("#PersonaStateLookingToTrade");
            case 6:
              return (0, o.Xx)("#PersonaStateLookingToPlay");
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
            ? `${p.De.COMMUNITY_BASE_URL}id/${this.m_strProfileURL}/`
            : `${
                p.De.COMMUNITY_BASE_URL
              }profiles/${this.m_steamid.ConvertTo64BitString()}/`;
        }
      }
      (0, n.gn)([s.LO], _.prototype, "m_bInitialized", void 0),
        (0, n.gn)([s.LO], _.prototype, "m_ePersonaState", void 0),
        (0, n.gn)([s.LO], _.prototype, "m_unGamePlayedAppID", void 0),
        (0, n.gn)([s.LO], _.prototype, "m_gameid", void 0),
        (0, n.gn)([s.LO], _.prototype, "m_unPersonaStateFlags", void 0),
        (0, n.gn)([s.LO], _.prototype, "m_strPlayerName", void 0),
        (0, n.gn)([s.LO], _.prototype, "m_strAvatarHash", void 0),
        (0, n.gn)([s.LO], _.prototype, "m_strAccountName", void 0),
        (0, n.gn)([s.LO], _.prototype, "m_rtLastSeenOnline", void 0),
        (0, n.gn)([s.LO], _.prototype, "m_strGameExtraInfo", void 0),
        (0, n.gn)([s.LO], _.prototype, "m_unGameServerIP", void 0),
        (0, n.gn)([s.LO], _.prototype, "m_unGameServerPort", void 0),
        (0, n.gn)([s.LO], _.prototype, "m_game_lobby_id", void 0),
        (0, n.gn)([s.LO], _.prototype, "m_bPlayerNamePending", void 0),
        (0, n.gn)([s.LO], _.prototype, "m_bAvatarPending", void 0),
        (0, n.gn)([s.LO], _.prototype, "m_broadcastId", void 0),
        (0, n.gn)([s.LO], _.prototype, "m_broadcastAccountId", void 0),
        (0, n.gn)([s.LO], _.prototype, "m_broadcastAppId", void 0),
        (0, n.gn)([s.LO], _.prototype, "m_broadcastViewerCount", void 0),
        (0, n.gn)([s.LO], _.prototype, "m_strBroadcastTitle", void 0),
        (0, n.gn)([s.LO], _.prototype, "m_bCommunityBanned", void 0);
    },
    48760: (e, t, i) => {
      i.d(t, { U: () => a, W: () => s });
      var n = i(37563);
      const s = "fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb";
      function a(e, t) {
        let i = ".jpg";
        (e && "0000000000000000000000000000000000000000" !== e) || (e = s),
          44 == e.length && ((i = e.substr(-4)), (e = e.substr(0, 40)));
        let a = n.De.AVATAR_BASE_URL;
        return (
          a ||
            ((a = n.De.MEDIA_CDN_COMMUNITY_URL + "images/avatars/"),
            (a += e.substr(0, 2) + "/")),
          (a += e),
          t && "small" != t && (a += "_" + t),
          (a += i),
          a
        );
      }
    },
    29480: (e, t, i) => {
      i.d(t, { T: () => r });
      var n = i(80751),
        s = i.n(n),
        a = i(47427);
      function r(e) {
        const t = a.useRef(s().CancelToken.source());
        return (
          a.useEffect(() => {
            const i = t.current;
            return () => i.cancel(e ? `${e}: unmounting` : "unmounting");
          }, [e]),
          t.current
        );
      }
    },
  },
]);

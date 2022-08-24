/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [6720],
  {
    59445: (e) => {
      e.exports = {
        SnoozeContainer: "friendsnooze_SnoozeContainer_3EzTy",
        SnoozeZ: "friendsnooze_SnoozeZ_1DArl",
        none: "friendsnooze_none_2k961",
        Medium: "friendsnooze_Medium_3Gk3l",
        Large: "friendsnooze_Large_dTohL",
        Dim: "friendsnooze_Dim_2TzRZ",
        Z1: "friendsnooze_Z1_1OyrT",
        Z2: "friendsnooze_Z2_1mx4k",
        Z3: "friendsnooze_Z3_1ltvK",
        hoverParent: "friendsnooze_hoverParent_3ID9R",
        animating: "friendsnooze_animating_3CzX5",
        Snoring: "friendsnooze_Snoring_YuCwj",
      };
    },
    24194: (e) => {
      e.exports = {
        "duration-app-launch": "800ms",
        statusAndName: "personanameandstatus_statusAndName_3n8q8",
        threeLines: "personanameandstatus_threeLines_3ms2P",
        blocked: "personanameandstatus_blocked_3_oRk",
        richPresenceLabel: "personanameandstatus_richPresenceLabel_1k82N",
        playerName: "personanameandstatus_playerName_r62qz",
        playerNickname: "personanameandstatus_playerNickname_3T-9P",
        playerNicknameBracket:
          "personanameandstatus_playerNicknameBracket_2aXev",
        richPresenceContainer:
          "personanameandstatus_richPresenceContainer_2nrSd",
        gameName: "personanameandstatus_gameName_2wpap",
        NoMask: "personanameandstatus_NoMask_2J0IS",
        twoLine: "personanameandstatus_twoLine_27M2G",
        DNDContainer: "personanameandstatus_DNDContainer_12iWK",
        partyBeaconJoin: "personanameandstatus_partyBeaconJoin_1K_OI",
        hidePersona: "personanameandstatus_hidePersona_3meBu",
        compactView: "personanameandstatus_compactView_34CCB",
        noContextMenu: "personanameandstatus_noContextMenu_2317W",
        gameIsPrivateIcon: "personanameandstatus_gameIsPrivateIcon_1FPaN",
        PendingPersona: "personanameandstatus_PendingPersona_ifetn",
      };
    },
    82202: (e) => {
      e.exports = {
        "duration-app-launch": "800ms",
        PersonaStatusIcon: "personastatusicons_PersonaStatusIcon_1YsWj",
        MobilePhoneIcon: "personastatusicons_MobilePhoneIcon_3pGV8",
      };
    },
    25130: (e) => {
      e.exports = {
        avatarHolder: "steamavatar_avatarHolder_1YGAH",
        avatarStatus: "steamavatar_avatarStatus_1yIzy",
        avatar: "steamavatar_avatar_1p_Qr",
        avatarFrame: "steamavatar_avatarFrame_3atbN",
        avatarFrameImg: "steamavatar_avatarFrameImg_338kJ",
      };
    },
    86605: (e, t, a) => {
      "use strict";
      a.d(t, { Q8: () => A });
      var n = a(70655),
        s = a(22188),
        r = a(26149),
        i = a(58114),
        o = a(40252),
        m = a(22154),
        l = (a(64010), a(68002)),
        c = a(77520),
        p = a(99533),
        h = a(90666);
      class _ {
        constructor() {
          (this.m_mapAppInfo = s.LO.map()),
            (this.m_mapRichPresenceLoc = s.LO.map()),
            (this.m_cAppInfoRequestsInFlight = 0),
            (this.m_setPendingAppInfo = new Set()),
            (this.m_CacheStorage = null),
            (this.m_fnCallbackOnAppInfoLoaded = new p.pB());
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
              (0, c.X)(
                !1,
                "Registering for callback on appinfo load, but nothing queued"
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
            ((0, c.X)(
              this.m_CMInterface,
              "CAppInfoStore.GetAppInfo called before Init"
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
                  (e) => (this.m_PendingAppInfoResolve = e)
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
              let e = i.gA.Init(l.Fi);
              e.Body().set_language((0, r.jM)(h.De.LANGUAGE));
              const a = 50;
              for (; t.length > 0; ) {
                const n = Math.min(a, t.length),
                  s = t.slice(0, n);
                (t = t.slice(n)), e.Body().set_appids(s);
                const r = yield l.AE.GetApps(
                  this.m_CMInterface.GetServiceTransport(),
                  e
                );
                1 == r.GetEResult()
                  ? this.OnGetAppsResponse(r)
                  : console.error(
                      `Error when calling CommunityService.GetApps: EResult=${r.GetEResult()}, AppIDs:`,
                      s
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
          for (let a of e.Body().apps()) {
            let e = this.m_mapAppInfo.get(a.appid());
            (0, c.X)(
              e,
              `Got AppInfo response for unrequested AppID: ${a.appid()}`
            ),
              e &&
                ((e = new o.Am(a.appid())),
                e.DeserializeFromMessage(a),
                this.m_mapAppInfo.set(a.appid(), e),
                t.push(e));
          }
          this.SaveAppInfoBatchToLocalCache(t);
        }
        OnAppOverviewChange(e) {
          for (let t of e) {
            const e = new o.Am(t.appid());
            e.DeserializeFromAppOverview(t),
              this.m_mapAppInfo.set(t.appid(), e);
          }
        }
        EnsureAppInfoForAppIDs(e) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            let t = !1;
            return (
              e.forEach((e) => {
                let a = this.m_mapAppInfo.get(e);
                a
                  ? a.is_valid || (t = !0)
                  : ((a = new o.Am(e)),
                    this.m_mapAppInfo.set(e, a),
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
              a = (e) =>
                (0, n.mG)(this, void 0, void 0, function* () {
                  const a = yield this.m_CacheStorage.GetObject(
                    this.GetCacheKeyForAppID(e)
                  );
                  if (!a) return e;
                  let n = this.m_mapAppInfo.get(e);
                  return (
                    (0, c.X)(
                      n,
                      "Didn't find AppInfo in our map when loading from cache but it should've been there?"
                    ),
                    n
                      ? ((n = new o.Am(e)),
                        n.DeserializeFromCacheObject(a),
                        n.is_initialized
                          ? (this.m_mapAppInfo.set(e, n),
                            n.time_updated_from_server < t ? e : null)
                          : (console.warn(
                              "Failed to deserialize cached App Info: ",
                              e,
                              a
                            ),
                            e))
                      : e
                  );
                });
            let s = e.map((e) => a(e));
            return (yield Promise.all(s)).filter((e) => null !== e);
          });
        }
        SaveAppInfoBatchToLocalCache(e) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            if (this.m_CacheStorage) {
              console.log(
                "Saving batch of App Info to Local Cache: ",
                e.map((e) => e.appid)
              );
              for (const t of e) {
                const e = t.SerializeToCacheObject();
                e &&
                  this.m_CacheStorage.StoreObject(
                    this.GetCacheKeyForAppID(t.appid),
                    e
                  );
              }
            }
          });
        }
        Localize(e, t, a) {
          const n = this.GetRichPresenceLoc(e);
          return n
            ? n.Localize(t, a)
            : 1 != h.De.EUNIVERSE
            ? (console.log(
                `Unable to find app localization information for app ${e} token ${t}, this may not have had a chance to load yet`
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
          let t = new m.v(e);
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
          for (let a of t) {
            let t = a.language(),
              n = e.m_mapLanguages.get(t);
            n
              ? n.clear()
              : (e.m_mapLanguages.set(t, new Map()),
                (n = e.m_mapLanguages.get(t)));
            for (let e of a.tokens()) n.set(e.name().toLowerCase(), e.value());
          }
        }
        QueueRichPresenceLocRequest(e) {
          return (
            e.m_fetching ||
              ((e.m_fetching = this.m_CMInterface
                .WaitUntilLoggedOn()
                .then(() => {
                  let t = i.gA.Init(l.tj);
                  return (
                    t.Body().set_appid(e.GetAppID()),
                    t.Body().set_language(h.De.LANGUAGE),
                    l.AE.GetAppRichPresenceLocalization(
                      this.m_CMInterface.GetServiceTransport(),
                      t
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
                          t.Body().token_lists()
                        ),
                        Promise.resolve(e))
                  )
                )),
              e.m_fetching.catch(() => {
                e.m_fetching = null;
              })),
            e.m_fetching
          );
        }
      }
      (0, n.gn)([s.aD], _.prototype, "OnGetAppsResponse", null),
        (0, n.gn)([s.aD], _.prototype, "OnRichPresenceLocUpdate", null);
      const A = new _();
    },
    93981: (e, t, a) => {
      "use strict";
      a.d(t, { Pv: () => p, sB: () => c });
      var n = a(70655),
        s = a(22188),
        r = a(27661),
        i = a(86605),
        o = a(41311),
        m = (a(92398), a(21205), a(90666)),
        l = (a(3389), a(43359));
      function c(e) {
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
      class p {
        constructor(e) {
          (this.m_bInitialized = !1),
            (this.m_ePersonaState = 0),
            (this.m_unGamePlayedAppID = 0),
            (this.m_gameid = "0"),
            (this.m_unPersonaStateFlags = 0),
            (this.m_strPlayerName = ""),
            (this.m_strAvatarHash = l.W),
            (this.m_strAccountName = ""),
            (this.m_rtLastSeenOnline = 0),
            (this.m_strGameExtraInfo = ""),
            (this.m_unGameServerIP = 0),
            (this.m_unGameServerPort = 0),
            (this.m_game_lobby_id = ""),
            (this.m_bPlayerNamePending = !1),
            (this.m_bAvatarPending = !1),
            (this.m_mapRichPresence = s.LO.map()),
            (this.m_bNameInitialized = !1),
            (this.m_bStatusInitialized = !1),
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
            ? i.Q8.GetAppInfo(this.m_unGamePlayedAppID).name
            : "";
        }
        GetCurrentGameIconURL() {
          return this.m_unGamePlayedAppID
            ? i.Q8.GetAppInfo(this.m_unGamePlayedAppID).icon_url
            : "";
        }
        GetCurrentGameLogoURL() {
          return this.m_unGamePlayedAppID
            ? i.Q8.GetAppInfo(this.m_unGamePlayedAppID).logo_url
            : "";
        }
        GetBroadcastGameLogoURL() {
          return this.m_broadcastAppId
            ? i.Q8.GetAppInfo(this.m_broadcastAppId).logo_url
            : "";
        }
        BIsAppInfoReady() {
          return (
            !this.m_unGamePlayedAppID ||
            i.Q8.GetAppInfo(this.m_unGamePlayedAppID).is_initialized
          );
        }
        HasCurrentGameRichPresence() {
          return this.m_mapRichPresence.has("steam_display");
        }
        GetCurrentGameRichPresence() {
          if (this.HasCurrentGameRichPresence()) {
            let e = i.Q8.GetRichPresenceLoc(this.m_unGamePlayedAppID);
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
          const a = i.Q8.CMInterface.GetServerRTime32() - this.last_seen_online;
          return (t *= a > 86400 ? e : a > 7200 ? 60 : 15), t;
        }
        GetOfflineStatusTime() {
          if (0 == this.last_seen_online)
            return (0, o.Xx)("#PersonaStateOffline");
          let e = this.GetOfflineStatusUpdateRate();
          (!m.De.IN_MOBILE || e <= 60) && (0, r.zO)(e);
          let t = i.Q8.CMInterface.GetServerRTime32() - this.last_seen_online;
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
                this.m_mapRichPresence.get("steam_player_group_size")
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
          return this.m_strAvatarHash != l.W;
        }
        get avatar_url() {
          return (0, l.U)(this.m_strAvatarHash);
        }
        get avatar_url_medium() {
          return (0, l.U)(this.m_strAvatarHash, "medium");
        }
        get avatar_url_full() {
          return (0, l.U)(this.m_strAvatarHash, "full");
        }
        static SortStatusComparator(e, t, a) {
          if (t.has_public_party_beacon) {
            if (!a.has_public_party_beacon) return -1;
          } else {
            if (a.has_public_party_beacon) return 1;
            if (t.is_ingame) {
              if (!a.is_ingame) return -1;
              if (!e) return 0;
              if (t.is_awayOrSnooze) {
                if (!a.is_awayOrSnooze) return 1;
              } else if (a.is_awayOrSnooze) return -1;
            } else if (a.is_ingame) return 1;
          }
          if (t.is_online) {
            if (!a.is_online) return -1;
          } else if (a.is_online) return 1;
          if (e)
            if (t.is_awayOrSnooze) {
              if (!a.is_awayOrSnooze) return 1;
            } else if (a.is_awayOrSnooze) return -1;
          return 0;
        }
      }
      (0, n.gn)([s.LO], p.prototype, "m_bInitialized", void 0),
        (0, n.gn)([s.LO], p.prototype, "m_ePersonaState", void 0),
        (0, n.gn)([s.LO], p.prototype, "m_unGamePlayedAppID", void 0),
        (0, n.gn)([s.LO], p.prototype, "m_gameid", void 0),
        (0, n.gn)([s.LO], p.prototype, "m_unPersonaStateFlags", void 0),
        (0, n.gn)([s.LO], p.prototype, "m_strPlayerName", void 0),
        (0, n.gn)([s.LO], p.prototype, "m_strAvatarHash", void 0),
        (0, n.gn)([s.LO], p.prototype, "m_strAccountName", void 0),
        (0, n.gn)([s.LO], p.prototype, "m_rtLastSeenOnline", void 0),
        (0, n.gn)([s.LO], p.prototype, "m_strGameExtraInfo", void 0),
        (0, n.gn)([s.LO], p.prototype, "m_unGameServerIP", void 0),
        (0, n.gn)([s.LO], p.prototype, "m_unGameServerPort", void 0),
        (0, n.gn)([s.LO], p.prototype, "m_game_lobby_id", void 0),
        (0, n.gn)([s.LO], p.prototype, "m_bPlayerNamePending", void 0),
        (0, n.gn)([s.LO], p.prototype, "m_bAvatarPending", void 0),
        (0, n.gn)([s.LO], p.prototype, "m_broadcastId", void 0),
        (0, n.gn)([s.LO], p.prototype, "m_broadcastAccountId", void 0),
        (0, n.gn)([s.LO], p.prototype, "m_broadcastAppId", void 0),
        (0, n.gn)([s.LO], p.prototype, "m_broadcastViewerCount", void 0),
        (0, n.gn)([s.LO], p.prototype, "m_strBroadcastTitle", void 0),
        (0, n.gn)([s.LO], p.prototype, "m_bCommunityBanned", void 0);
    },
    65409: (e, t, a) => {
      "use strict";
      a.d(t, { o: () => S });
      var n = a(70655),
        s = a(67294),
        r = a(29323),
        i = a(41311),
        o = a(26149),
        m = a(93981),
        l = a(7573),
        c = a(59445),
        p = a.n(c);
      let h = class extends s.Component {
        static get hoverClass() {
          return p().hoverParent;
        }
        render() {
          const e = this.props,
            { persona: t, animating: a, className: r, size: i, dim: o } = e,
            m = (0, n._T)(e, [
              "persona",
              "animating",
              "className",
              "size",
              "dim",
            ]);
          let c = "";
          return (
            "medium" == i ? (c = p().Medium) : "large" == i && (c = p().Large),
            s.createElement(
              "div",
              Object.assign(
                {
                  className: (0, l.Z)(
                    p().SnoozeContainer,
                    t.online_state,
                    r,
                    a && p().animating,
                    c,
                    o && p().Dim
                  ),
                },
                m
              ),
              s.createElement(
                "div",
                { "data-text": "Z", className: (0, l.Z)(p().SnoozeZ, p().Z1) },
                "Z"
              ),
              s.createElement(
                "div",
                { "data-text": "Z", className: (0, l.Z)(p().SnoozeZ, p().Z2) },
                "Z"
              ),
              s.createElement(
                "div",
                { "data-text": "Z", className: (0, l.Z)(p().SnoozeZ, p().Z3) },
                "Z"
              )
            )
          );
        }
      };
      h = (0, n.gn)([r.Pi], h);
      a(21205);
      var _ = a(95598),
        A = a(82202),
        u = a.n(A),
        d = a(5827);
      const g = (0, r.Pi)((e) => {
        const { persona: t, className: a } = e,
          r = (0, n._T)(e, ["persona", "className"]);
        if (!t) return null;
        if (!t.is_online) return null;
        const o = t.HasStateFlag(512),
          c = t.HasStateFlag(2048),
          p = !c && t.HasStateFlag(1024);
        return s.createElement(
          s.Fragment,
          null,
          o &&
            s.createElement(
              "div",
              Object.assign(
                {
                  className: (0, l.Z)(
                    a,
                    u().PersonaStatusIcon,
                    u().MobilePhoneIcon,
                    (0, m.sB)(t)
                  ),
                  title: (0, i.Xx)("#Platform_Hint_Mobile"),
                },
                r
              ),
              s.createElement(d.Mr, null)
            ),
          c &&
            s.createElement(
              "div",
              Object.assign(
                {
                  className: (0, l.Z)(
                    a,
                    u().PersonaStatusIcon,
                    u().VRIcon,
                    (0, m.sB)(t)
                  ),
                  title: (0, i.Xx)("#Platform_Hint_VR"),
                },
                r
              ),
              s.createElement(_.VR, null)
            ),
          p &&
            s.createElement(
              "div",
              Object.assign(
                {
                  className: (0, l.Z)(
                    a,
                    u().PersonaStatusIcon,
                    u().BigPictureIcon,
                    (0, m.sB)(t)
                  ),
                  title: (0, i.Xx)("#Platform_Hint_BigPicture"),
                },
                r
              ),
              s.createElement(_.Ucz, null)
            )
        );
      });
      var f = a(24194),
        I = a.n(f);
      function P(e) {
        return s.createElement(
          s.Fragment,
          null,
          s.createElement(
            "span",
            { className: I().partyBeaconJoin },
            (0, i.Xx)("#User_WantsToPlay")
          ),
          " – ",
          e.persona.GetCurrentGameName()
        );
      }
      let S = class extends s.Component {
        render() {
          const e = this.props,
            {
              className: t,
              onContextMenu: a,
              persona: r,
              eFriendRelationship: c,
              bIsSelf: p,
              bParenthesizeNicknames: A,
              strNickname: u,
              bCompactView: d,
              bHideGameName: f,
              bHideEnhancedRichPresenceLabel: S,
              bHideSnooze: v,
              bHideStatus: B,
              renderStatus: y,
              renderRichPresence: C,
              bHidePersona: b,
              bDNDSet: E,
              bHasPartyBeacon: L,
              bHasGamePrivacy: N,
              bNoMask: G,
            } = e,
            R = (0, n._T)(e, [
              "className",
              "onContextMenu",
              "persona",
              "eFriendRelationship",
              "bIsSelf",
              "bParenthesizeNicknames",
              "strNickname",
              "bCompactView",
              "bHideGameName",
              "bHideEnhancedRichPresenceLabel",
              "bHideSnooze",
              "bHideStatus",
              "renderStatus",
              "renderRichPresence",
              "bHidePersona",
              "bDNDSet",
              "bHasPartyBeacon",
              "bHasGamePrivacy",
              "bNoMask",
            ]);
          let D = null,
            Q = null,
            O = null,
            w = [
              t,
              I().personaNameAndStatusLabel,
              (0, m.sB)(r),
              d && I().compactView,
              G && I().NoMask,
            ];
          L || r.has_public_party_beacon
            ? (Q = s.createElement(P, { persona: r }))
            : (0, o.fk)(c)
            ? ((Q = (0, i.Xx)("#PersonaStateBlocked")), w.push(I().blocked))
            : r.is_ingame
            ? ((Q =
                !r.is_in_nonsteam_game || p || (0, o.my)(c)
                  ? r.GetCurrentGameName()
                  : (0, i.Xx)("#PersonaStateInNonSteamGame")),
              p || b
                ? p && r.is_awayOrSnooze && (O = (0, i.Xx)("#PersonaStateAway"))
                : (O = r.GetCurrentGameRichPresence()))
            : r.m_broadcastAccountId &&
              (Q = (0, i.Xx)("#PersonaStateWatchingBroadcast")),
            Q || (Q = r.GetLocalizedOnlineStatus()),
            y && (Q = y());
          let k = !b && !v;
          !1 === v && (k = !0),
            r.is_awayOrSnooze && k && (D = s.createElement(h, { persona: r }));
          let z = null;
          a
            ? (z = s.createElement(
                "div",
                { className: "ContextMenuButton", onClick: a },
                s.createElement(_.$gZ, null)
              ))
            : w.push(I().noContextMenu),
            b && w.push(I().hidePersona),
            C && (O = C()),
            (!f && O) || w.push(I().twoLine);
          const U = !r.is_ingame && !B,
            F = !S && O,
            T = Q && (!f || !F);
          let H = u && !A,
            M = H ? u : r.m_strPlayerName,
            Z = !b && (T || U) && F;
          return s.createElement(
            "div",
            Object.assign({}, R, {
              className: (0, l.Z)(...w),
              onContextMenu: a,
            }),
            s.createElement(
              "div",
              { className: (0, l.Z)(I().statusAndName, Z && I().threeLines) },
              s.createElement(
                "div",
                { className: I().playerName },
                M || " ",
                A &&
                  u &&
                  s.createElement(
                    "span",
                    { className: I().playerNickname },
                    "(",
                    u,
                    ")"
                  )
              ),
              E &&
                s.createElement(
                  "div",
                  {
                    className: I().DNDContainer,
                    title: (0, i.Xx)("#User_ToggleDoNotDisturb"),
                  },
                  s.createElement(_.YVR, null)
                ),
              H &&
                s.createElement(
                  "span",
                  {
                    className: I().playerNicknameBracket,
                    title: (0, i.Xx)("#isNickname"),
                  },
                  " *"
                ),
              s.createElement(g, { persona: r }),
              D,
              (r.m_bPlayerNamePending || r.m_bAvatarPending) &&
                s.createElement(
                  "div",
                  {
                    className: I().PendingPersona,
                    title: (0, i.Xx)("#SteamChina_PendingPersonaName"),
                  },
                  s.createElement(_.SUY, null)
                ),
              z
            ),
            !b &&
              s.createElement(
                "div",
                { className: I().richPresenceContainer },
                (T || U) &&
                  s.createElement(
                    "div",
                    {
                      className: (0, l.Z)(
                        I().gameName,
                        Z && I().threeLines,
                        I().richPresenceLabel,
                        "no-drag"
                      ),
                    },
                    N &&
                      s.createElement(
                        "div",
                        {
                          className: I().gameIsPrivateIcon,
                          title: (0, i.Xx)("#User_GameInfoHidden"),
                        },
                        s.createElement(_._GE, null)
                      ),
                    Q
                  ),
                F &&
                  s.createElement(
                    "div",
                    { className: (0, l.Z)(I().richPresenceLabel, "no-drag") },
                    O,
                    " "
                  )
              )
          );
        }
      };
      S = (0, n.gn)([r.Pi], S);
      (0, r.Pi)((e) => {
        const {
            persona: t,
            bParenthesizeNicknames: a,
            strNickname: r,
            className: i,
          } = e,
          o = (0, n._T)(e, [
            "persona",
            "bParenthesizeNicknames",
            "strNickname",
            "className",
          ]);
        let c = r && !a ? r : t.m_strPlayerName;
        return s.createElement(
          "span",
          Object.assign({}, o, { className: (0, l.Z)(i, (0, m.sB)(t)) }),
          s.createElement(
            "span",
            { className: I().playerName },
            c || " ",
            a &&
              r &&
              s.createElement(
                "span",
                { className: I().playerNickname },
                "(",
                r,
                ")"
              )
          )
        );
      });
    },
    44298: (e, t, a) => {
      "use strict";
      a.d(t, { _1: () => d, DY: () => u, vV: () => A });
      var n = a(70655),
        s = a(67294),
        r = a(29323),
        i = a(93981),
        o = a(7573),
        m = (a(18330), a(90666)),
        l = a(60501);
      const c =
        a.p +
        "images/applications/store/avatar_default_full.jpg?v=valveisgoodatcaching";
      var p = a(25130),
        h = a.n(p);
      class _ extends s.Component {
        render() {
          const e = this.props,
            {
              strAvatarURL: t,
              size: a,
              className: r,
              statusStyle: i,
              statusPosition: m,
              children: p,
            } = e,
            _ = (0, n._T)(e, [
              "strAvatarURL",
              "size",
              "className",
              "statusStyle",
              "statusPosition",
              "children",
            ]),
            A = [];
          return (
            t && A.push(t),
            A.push(
              (function (e) {
                switch (e) {
                  case "X-Small":
                  case "Small":
                    return "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gOTAK/9sAQwADAgIDAgIDAwMDBAMDBAUIBQUEBAUKBwcGCAwKDAwLCgsLDQ4SEA0OEQ4LCxAWEBETFBUVFQwPFxgWFBgSFBUU/9sAQwEDBAQFBAUJBQUJFA0LDRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU/8AAEQgAIAAgAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A/P4mW5nmllmeSR3LMzMSSc1a07R73V72KzsILi9u5TiOC2RpJHPoFGSarQ/ef6n+de4fAn9oaL4D+DfGX9i6Uf8AhO9XSKDT9eZY3WxiDZcBGByTkn0JCZBxQB41qeiX+iXslnqNtdWF3H9+3uo2jkX6q2CKpgy208MsUzxyI4ZWViCDmvsr9rrUdT1j9nb4T6h8RBbH4qXUs0zMsSxXJ04hivnKoAU5MPGBg7uM7q+NpvvJ9R/OgAh+8/1P867T4POI/iz4Mc6U+u7NZtG/suPbuu8TKfKG4hct93njnmuKIltp5opYXjkRyrKykEHNWbDVbvSr63vbKaezvLeRZYbi3ZkkidTlWVhyCCMgjpQB6l+1F411nx58dPFWpa5a3mnXaXP2ZNOvXVpLKNBhYflJUY5PB5JJ6k15LN95PqP51a1PWr7WtQnvtRuLm/vrhzJNc3TtJLIx6lmbJJ9zVQCW5nhiiheSR3CqqqSSc0Af/9k=";
                  case "Medium":
                  case "MediumLarge":
                    return "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gODAK/9sAQwAGBAUGBQQGBgUGBwcGCAoQCgoJCQoUDg8MEBcUGBgXFBYWGh0lHxobIxwWFiAsICMmJykqKRkfLTAtKDAlKCko/9sAQwEHBwcKCAoTCgoTKBoWGigoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgo/8AAEQgAQABAAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A8Inmk8+T94/3j/EfWmedJ/z0f/vo0T/6+T/eP86ZQA/zpP8Ano//AH0aPOk/56P/AN9GmVo6Loeq65M0Wj6ddXrr94QRF9v1I6fjQBR86T/no/8A30aPOk/56P8A99GtHW/Dus6GV/tjS7yyD8K00RVW+h6GsugB/nSf89H/AO+jT4JpPPj/AHj/AHh/EfWoafB/r4/94fzoAJ/9fJ/vH+dMp8/+vk/3j/OmUAXdE099W1mw06Jgsl3PHApPYswUH9a+qPF3iHSPhF4S0+003TxK0hMcEAbZvIA3SO2OvIz6k18nW88ttcRz28jxTRMHSRGKsrA5BBHQg1b1TWdT1fy/7V1G8vfLzs+0TNJtz1xknHQUAfUXw+8c6Z8UdN1HS9V0xIpUTM1s7eYkiE43KcAgg/lxg180+NtEHhzxZqmkqxdLWcojHqUPK598EV9CfBbwpF4G8J3fiLxA4trm5hEsnmceRCOQD/tHqR9B1r568a63/wAJH4r1TVghRLqYuinqE6KD74AoAxafB/r4/wDeH86ZT4P9fH/vD+dABP8A6+T/AHj/ADplPn/18n+8f50ygArt/gtpltq/xK0e2vYxJArPMUYZDFEZhn2yBXEV0/w203VNX8YWdloOoHTtQkWQx3IZl2gISeV55AI/GgD1H9pvxPdi/s/DcDGOz8pbqfHWRizBQfYbc/U+1eD12PxW0fWtE8Tpa+I9UOqXpt0cTl2bCEthctz1B/OuOoAKfB/r4/8AeH86ZT4P9fH/ALw/nQAT/wCvk/3j/OmVNPDJ58n7t/vH+E+tM8mT/nm//fJoAZV7Q9Xv9C1KLUNJuGtryMEJIoBIyCD1BHQmqnkyf883/wC+TR5Mn/PN/wDvk0AaHiHXtT8RX4vdau2u7oIIxIygHaCSBwB6msyn+TJ/zzf/AL5NHkyf883/AO+TQAynwf6+P/eH86PJk/55v/3yafBDJ58f7t/vD+E+tAH/2Q==";
                  case "Large":
                  case "X-Large":
                  case "FillArea":
                    return c;
                }
              })(a)
            ),
            s.createElement(
              "div",
              Object.assign(
                {
                  className: (0, o.Z)(
                    h().avatarHolder,
                    "avatarHolder",
                    "no-drag",
                    a || "Medium",
                    r
                  ),
                },
                _
              ),
              s.createElement("div", {
                className: (0, o.Z)(h().avatarStatus, "avatarStatus", m),
                style: i,
              }),
              s.createElement(l.j, {
                className: (0, o.Z)(h().avatar, "avatar"),
                rgSources: A,
                draggable: !1,
              }),
              p
            )
          );
        }
      }
      let A = class extends s.Component {
        render() {
          const e = this.props,
            { persona: t, size: a, animatedAvatar: r, className: l } = e,
            c = (0, n._T)(e, [
              "persona",
              "size",
              "animatedAvatar",
              "className",
            ]);
          let p = "";
          return (
            r && r.image_small && 0 != r.image_small.length
              ? (p = m.De.MEDIA_CDN_COMMUNITY_URL + "images/" + r.image_small)
              : t &&
                ((p = t.avatar_url_medium),
                "Small" == a || "X-Small" == a
                  ? (p = t.avatar_url)
                  : ("Large" != a && "X-Large" != a && "FillArea" != a) ||
                    (p = t.avatar_url_full)),
            s.createElement(
              _,
              Object.assign(
                {
                  strAvatarURL: p,
                  size: a,
                  className: (0, o.Z)((0, i.sB)(t), l),
                },
                c
              )
            )
          );
        }
      };
      A = (0, n.gn)([r.Pi], A);
      const u = (0, r.Pi)((e) => {
        const { profileItem: t, className: a, bDisableAnimation: r } = e,
          i = (0, n._T)(e, ["profileItem", "className", "bDisableAnimation"]);
        if (!t || !t.image_small || 0 == t.image_small.length) return null;
        let l = r ? t.image_large : t.image_small;
        return (
          l || (l = t.image_small),
          l.startsWith("https://") ||
            (l = m.De.MEDIA_CDN_COMMUNITY_URL + "images/" + l),
          s.createElement(
            "div",
            Object.assign(
              { className: (0, o.Z)(h().avatarFrame, a, "avatarFrame") },
              i
            ),
            s.createElement("img", { className: h().avatarFrameImg, src: l })
          )
        );
      });
      let d = class extends s.Component {
        constructor(e) {
          super(e),
            (this.state = { bAnimate: "None" != this.props.loopDuration }),
            (this.m_timer = 0);
        }
        componentDidMount() {
          this.SetupAnimationTimer();
        }
        SetupAnimationTimer() {
          let e = 0;
          switch (this.props.loopDuration) {
            case "Short":
              e = 2500;
              break;
            case "Medium":
              e = 5e3;
              break;
            case "Long":
              e = 1e4;
          }
          0 != e &&
            (this.m_timer = window.setTimeout(
              () => this.setState({ bAnimate: !1 }),
              e
            ));
        }
        StopAnimationTimer() {
          this.m_timer &&
            (window.clearTimeout(this.m_timer), (this.m_timer = 0));
        }
        componentWillUnmount() {
          this.StopAnimationTimer();
        }
        componentDidUpdate(e) {
          this.props.loopDuration != e.loopDuration &&
            ("None" == this.props.loopDuration
              ? (this.setState({ bAnimate: !1 }), this.StopAnimationTimer())
              : "Infinite" == this.props.loopDuration &&
                (this.setState({ bAnimate: !0 }), this.StopAnimationTimer()));
        }
        render() {
          let e = this.props,
            {
              loopDuration: t,
              animatedAvatar: a,
              avatarFrame: r,
              children: i,
              style: o,
            } = e,
            m = (0, n._T)(e, [
              "loopDuration",
              "animatedAvatar",
              "avatarFrame",
              "children",
              "style",
            ]);
          return (
            m.onClick &&
              (o = Object.assign(Object.assign({}, o), { cursor: "pointer" })),
            this.state.bAnimate || (a = null),
            s.createElement(
              A,
              Object.assign({ animatedAvatar: a }, m),
              i,
              s.createElement(u, {
                profileItem: r,
                bDisableAnimation: "None" === this.props.loopDuration,
              })
            )
          );
        }
      };
      d = (0, n.gn)([r.Pi], d);
    },
    5827: (e, t, a) => {
      "use strict";
      a.d(t, { Mr: () => r, tk: () => i });
      var n = a(67294),
        s = a(95598);
      a(57376), a(90666);
      function r() {
        return n.createElement(s.MrB, null);
      }
      function i() {
        return n.createElement(s.tkI, null);
      }
    },
    60501: (e, t, a) => {
      "use strict";
      a.d(t, { j: () => i });
      var n = a(70655),
        s = a(67294),
        r = a(22975);
      class i extends s.Component {
        constructor(e) {
          super(e),
            (this.m_refImage = s.createRef()),
            (this.state = { nImage: 0 });
        }
        componentDidUpdate(e) {
          JSON.stringify(this.props.rgSources) != JSON.stringify(e.rgSources) &&
            this.setState({ nImage: 0 });
        }
        get src() {
          let e = "";
          return (
            this.props.rgSources &&
              this.props.rgSources.length > this.state.nImage &&
              (e = this.props.rgSources[this.state.nImage]),
            e ||
              (console.warn(
                "MultiSourceImage created with no image src",
                this.props,
                this.state.nImage
              ),
              (e =
                "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=")),
            e
          );
        }
        get imgRef() {
          return this.m_refImage;
        }
        OnImageError(e) {
          this.props.onIncrementalError &&
            this.props.onIncrementalError(
              e,
              this.props.rgSources[this.state.nImage],
              this.state.nImage
            );
          let t = this.state.nImage + 1;
          t >= this.props.rgSources.length &&
            this.props.onError &&
            this.props.onError(e),
            t < this.props.rgSources.length && this.setState({ nImage: t });
        }
        render() {
          const e = this.props,
            { src: t, rgSources: a, onIncrementalError: r, onError: i } = e,
            o = (0, n._T)(e, [
              "src",
              "rgSources",
              "onIncrementalError",
              "onError",
            ]),
            m = this.src;
          return s.createElement(
            "img",
            Object.assign({ src: m, ref: this.m_refImage }, o, {
              onError: this.OnImageError,
            })
          );
        }
      }
      (0, n.gn)([r.ak], i.prototype, "OnImageError", null);
    },
  },
]);

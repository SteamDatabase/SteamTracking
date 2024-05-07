/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [5824],
  {
    42411: (e, t, a) => {
      a.d(t, { Pv: () => l, U0: () => m.U, WV: () => m.W, sB: () => u });
      var n = a(85556),
        r = a(54842),
        i = a(24289),
        s = a(45944),
        o = a(31846),
        _ = a(37563),
        m = a(48760);
      function u(e) {
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
      class l {
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
            (this.m_mapRichPresence = r.LO.map()),
            (this.m_bNameInitialized = !1),
            (this.m_bStatusInitialized = !1),
            (this.m_strProfileURL = void 0),
            (0, r.rC)(this),
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
              ? s.Q8.GetAppInfo(this.m_unGamePlayedAppID).name
              : "";
        }
        GetCurrentGameIconURL() {
          return this.m_unGamePlayedAppID
            ? s.Q8.GetAppInfo(this.m_unGamePlayedAppID).icon_url
            : "";
        }
        GetCurrentGameLogoURL() {
          return this.m_unGamePlayedAppID
            ? s.Q8.GetAppInfo(this.m_unGamePlayedAppID).logo_url
            : "";
        }
        GetBroadcastGameLogoURL() {
          return this.m_broadcastAppId
            ? s.Q8.GetAppInfo(this.m_broadcastAppId).logo_url
            : "";
        }
        BIsAppInfoReady() {
          return (
            !this.m_unGamePlayedAppID ||
            s.Q8.GetAppInfo(this.m_unGamePlayedAppID).is_initialized
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
            let e = s.Q8.GetRichPresenceLoc(this.m_unGamePlayedAppID);
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
          const a = s.Q8.CMInterface.GetServerRTime32() - this.last_seen_online;
          return (t *= a > 86400 ? e : a > 7200 ? 60 : 15), t;
        }
        GetOfflineStatusTime() {
          if (0 == this.last_seen_online)
            return (0, o.Xx)("#PersonaStateOffline");
          let e = this.GetOfflineStatusUpdateRate();
          (!_.De.IN_MOBILE || e <= 60) && (0, i.zO)(e);
          let t = s.Q8.CMInterface.GetServerRTime32() - this.last_seen_online;
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
        GetCommunityProfileURL() {
          return this.m_strProfileURL
            ? `${_.De.COMMUNITY_BASE_URL}id/${this.m_strProfileURL}/`
            : `${_.De.COMMUNITY_BASE_URL}profiles/${this.m_steamid.ConvertTo64BitString()}/`;
        }
      }
      (0, n.gn)([r.LO], l.prototype, "m_bInitialized", void 0),
        (0, n.gn)([r.LO], l.prototype, "m_ePersonaState", void 0),
        (0, n.gn)([r.LO], l.prototype, "m_unGamePlayedAppID", void 0),
        (0, n.gn)([r.LO], l.prototype, "m_gameid", void 0),
        (0, n.gn)([r.LO], l.prototype, "m_unPersonaStateFlags", void 0),
        (0, n.gn)([r.LO], l.prototype, "m_strPlayerName", void 0),
        (0, n.gn)([r.LO], l.prototype, "m_strAvatarHash", void 0),
        (0, n.gn)([r.LO], l.prototype, "m_strAccountName", void 0),
        (0, n.gn)([r.LO], l.prototype, "m_rtLastSeenOnline", void 0),
        (0, n.gn)([r.LO], l.prototype, "m_strGameExtraInfo", void 0),
        (0, n.gn)([r.LO], l.prototype, "m_unGameServerIP", void 0),
        (0, n.gn)([r.LO], l.prototype, "m_unGameServerPort", void 0),
        (0, n.gn)([r.LO], l.prototype, "m_game_lobby_id", void 0),
        (0, n.gn)([r.LO], l.prototype, "m_bPlayerNamePending", void 0),
        (0, n.gn)([r.LO], l.prototype, "m_bAvatarPending", void 0),
        (0, n.gn)([r.LO], l.prototype, "m_broadcastId", void 0),
        (0, n.gn)([r.LO], l.prototype, "m_broadcastAccountId", void 0),
        (0, n.gn)([r.LO], l.prototype, "m_broadcastAppId", void 0),
        (0, n.gn)([r.LO], l.prototype, "m_broadcastViewerCount", void 0),
        (0, n.gn)([r.LO], l.prototype, "m_strBroadcastTitle", void 0),
        (0, n.gn)([r.LO], l.prototype, "m_bCommunityBanned", void 0);
    },
    51915: (e, t, a) => {
      a.d(t, { IE: () => h, p2: () => p, vP: () => g });
      var n = a(85556),
        r = a(73799),
        i = a.n(r),
        s = a(47427),
        o = a(42718),
        _ = a(79545),
        m = a(40057),
        u = a(90938),
        l = a(42411),
        d = a(35427),
        c = a(82182);
      a(2041);
      function h(e) {
        const t = (0, m.bY)(),
          a = s.useContext(v);
        return (0, o.useQuery)(y(a, t, e));
      }
      function p(e) {
        const t = s.useRef(),
          a = h(e);
        return a.data
          ? a
          : (t.current ||
              (t.current = new l.Pv(
                "string" == typeof e ? new d.K(e) : d.K.InitFromAccountID(e),
              )),
            Object.assign(Object.assign({}, a), { data: t.current }));
      }
      function g(e) {
        const t = (0, m.bY)(),
          a = s.useContext(v);
        return (0, o.useQueries)(e.map((e) => y(a, t, e)));
      }
      const v = s.createContext({
        loadPersonaState: (e, t) =>
          (0, n.mG)(void 0, void 0, void 0, function* () {
            if (null == e) return null;
            const a = yield (function (e) {
              P ||
                (P = new (i())(
                  (t) =>
                    (0, n.mG)(this, void 0, void 0, function* () {
                      const a = _.gA.Init(c.oh);
                      a.Body().set_steamids(
                        t.map((e) =>
                          d.K.InitFromAccountID(e).ConvertTo64BitString(),
                        ),
                      );
                      const n = yield c.lk.GetPlayerLinkDetails(e, a);
                      if (!n.BSuccess())
                        throw `Failed to load player link details: ${n.GetErrorMessage()}`;
                      const r = new Map();
                      return (
                        n
                          .Body()
                          .accounts()
                          .forEach((e) => {
                            var t;
                            const a = e.toObject();
                            r.set(
                              new d.K(
                                null === (t = a.public_data) || void 0 === t
                                  ? void 0
                                  : t.steamid,
                              ).GetAccountID(),
                              a,
                            );
                          }),
                        t.map((e) => r.get(e))
                      );
                    }),
                  { maxBatchSize: 100 },
                ));
              return P;
            })(t).load(e);
            return (function (e, t) {
              var a, n;
              let r = new l.Pv(e);
              const i = null == t ? void 0 : t.public_data,
                s = null == t ? void 0 : t.private_data;
              (r.m_bInitialized = !!t),
                (r.m_ePersonaState =
                  null !== (a = null == s ? void 0 : s.persona_state) &&
                  void 0 !== a
                    ? a
                    : 0),
                (r.m_strAvatarHash = (null == i ? void 0 : i.sha_digest_avatar)
                  ? (0, u.BH)(i.sha_digest_avatar)
                  : l.WV),
                (r.m_strPlayerName =
                  null !== (n = null == i ? void 0 : i.persona_name) &&
                  void 0 !== n
                    ? n
                    : e.ConvertTo64BitString()),
                (r.m_strAccountName = null == s ? void 0 : s.account_name),
                (null == s ? void 0 : s.persona_state_flags) &&
                  (r.m_unPersonaStateFlags =
                    null == s ? void 0 : s.persona_state_flags);
              (null == s ? void 0 : s.game_id) &&
                (r.m_gameid = null == s ? void 0 : s.game_id);
              (null == s ? void 0 : s.game_server_ip_address) &&
                (r.m_unGameServerIP =
                  null == s ? void 0 : s.game_server_ip_address);
              (null == s ? void 0 : s.lobby_steam_id) &&
                (r.m_game_lobby_id = null == s ? void 0 : s.lobby_steam_id);
              (null == s ? void 0 : s.game_extra_info) &&
                (r.m_strGameExtraInfo = null == s ? void 0 : s.game_extra_info);
              (null == i ? void 0 : i.profile_url) &&
                (r.m_strProfileURL = i.profile_url);
              return r;
            })(d.K.InitFromAccountID(e), a);
          }),
      });
      function y(e, t, a) {
        const n = "string" == typeof a ? new d.K(a).GetAccountID() : a;
        return {
          queryKey: ["PlayerSummary", n],
          queryFn: () => e.loadPersonaState(n, t),
          enabled: !!n,
        };
      }
      let P;
    },
  },
]);

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [5824],
  {
    42411: (e, t, a) => {
      a.d(t, { Pv: () => c, U0: () => m.U, WV: () => m.W, sB: () => u });
      var r = a(85556),
        n = a(54842),
        s = a(24289),
        i = a(45944),
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
      class c {
        m_steamid;
        m_bInitialized = !1;
        m_ePersonaState = 0;
        m_unGamePlayedAppID = 0;
        m_gameid = "0";
        m_unPersonaStateFlags = 0;
        m_strPlayerName = "";
        m_strAvatarHash = m.W;
        m_strAccountName = "";
        m_rtLastSeenOnline = 0;
        m_strGameExtraInfo = "";
        m_unGameServerIP = 0;
        m_unGameServerPort = 0;
        m_game_lobby_id = "";
        m_bPlayerNamePending = !1;
        m_bAvatarPending = !1;
        m_broadcastId = void 0;
        m_broadcastAccountId = void 0;
        m_broadcastAppId = void 0;
        m_broadcastViewerCount = void 0;
        m_strBroadcastTitle = void 0;
        m_bCommunityBanned = void 0;
        m_mapRichPresence = n.LO.map();
        m_bNameInitialized = !1;
        m_bStatusInitialized = !1;
        m_strProfileURL = void 0;
        constructor(e) {
          (0, n.rC)(this), (this.m_steamid = e);
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
          return 0 != (2 & (this.m_unPersonaStateFlags ?? 0));
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
          return 0 != ((this.m_unPersonaStateFlags ?? 0) & e);
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
        HasRichPresenceForViewGameInfo() {
          return !!(
            this.m_mapRichPresence.has("status") ||
            this.m_mapRichPresence.has("connect") ||
            this.m_mapRichPresence.has("connect_private")
          );
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
          (!_.De.IN_MOBILE || e <= 60) && (0, s.zO)(e);
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
      (0, r.gn)([n.LO], c.prototype, "m_bInitialized", void 0),
        (0, r.gn)([n.LO], c.prototype, "m_ePersonaState", void 0),
        (0, r.gn)([n.LO], c.prototype, "m_unGamePlayedAppID", void 0),
        (0, r.gn)([n.LO], c.prototype, "m_gameid", void 0),
        (0, r.gn)([n.LO], c.prototype, "m_unPersonaStateFlags", void 0),
        (0, r.gn)([n.LO], c.prototype, "m_strPlayerName", void 0),
        (0, r.gn)([n.LO], c.prototype, "m_strAvatarHash", void 0),
        (0, r.gn)([n.LO], c.prototype, "m_strAccountName", void 0),
        (0, r.gn)([n.LO], c.prototype, "m_rtLastSeenOnline", void 0),
        (0, r.gn)([n.LO], c.prototype, "m_strGameExtraInfo", void 0),
        (0, r.gn)([n.LO], c.prototype, "m_unGameServerIP", void 0),
        (0, r.gn)([n.LO], c.prototype, "m_unGameServerPort", void 0),
        (0, r.gn)([n.LO], c.prototype, "m_game_lobby_id", void 0),
        (0, r.gn)([n.LO], c.prototype, "m_bPlayerNamePending", void 0),
        (0, r.gn)([n.LO], c.prototype, "m_bAvatarPending", void 0),
        (0, r.gn)([n.LO], c.prototype, "m_broadcastId", void 0),
        (0, r.gn)([n.LO], c.prototype, "m_broadcastAccountId", void 0),
        (0, r.gn)([n.LO], c.prototype, "m_broadcastAppId", void 0),
        (0, r.gn)([n.LO], c.prototype, "m_broadcastViewerCount", void 0),
        (0, r.gn)([n.LO], c.prototype, "m_strBroadcastTitle", void 0),
        (0, r.gn)([n.LO], c.prototype, "m_bCommunityBanned", void 0);
    },
    51915: (e, t, a) => {
      a.d(t, { IE: () => p, p2: () => d, vP: () => h });
      var r = a(73799),
        n = a.n(r),
        s = a(47427),
        i = a(42718),
        o = a(79545),
        _ = a(40057),
        m = a(90938),
        u = a(42411),
        c = a(35427),
        l = a(82182);
      a(2041);
      function p(e) {
        const t = (0, _.bY)(),
          a = s.useContext(g);
        return (0, i.useQuery)(y(a, t, e));
      }
      function d(e) {
        const t = s.useRef(),
          a = p(e);
        return a.data
          ? a
          : (t.current ||
              (t.current = new u.Pv(
                "string" == typeof e ? new c.K(e) : c.K.InitFromAccountID(e),
              )),
            { ...a, data: t.current });
      }
      function h(e) {
        const t = (0, _.bY)(),
          a = s.useContext(g);
        return (0, i.useQueries)(e.map((e) => y(a, t, e)));
      }
      const g = s.createContext({
        loadPersonaState: async (e, t) => {
          if (null == e) return null;
          const a = await (function (e) {
            P ||
              (P = new (n())(
                async (t) => {
                  const a = o.gA.Init(l.oh);
                  a.Body().set_steamids(
                    t.map((e) =>
                      c.K.InitFromAccountID(e).ConvertTo64BitString(),
                    ),
                  );
                  const r = await l.lk.GetPlayerLinkDetails(e, a);
                  if (!r.BSuccess())
                    throw `Failed to load player link details: ${r.GetErrorMessage()}`;
                  const n = new Map();
                  return (
                    r
                      .Body()
                      .accounts()
                      .forEach((e) => {
                        const t = e.toObject();
                        n.set(
                          new c.K(t.public_data?.steamid).GetAccountID(),
                          t,
                        );
                      }),
                    t.map((e) => n.get(e))
                  );
                },
                { maxBatchSize: 100 },
              ));
            return P;
          })(t).load(e);
          return (function (e, t) {
            let a = new u.Pv(e);
            const r = t?.public_data,
              n = t?.private_data;
            (a.m_bInitialized = !!t),
              (a.m_ePersonaState = n?.persona_state ?? 0),
              (a.m_strAvatarHash = r?.sha_digest_avatar
                ? (0, m.BH)(r.sha_digest_avatar)
                : u.WV),
              (a.m_strPlayerName = r?.persona_name ?? e.ConvertTo64BitString()),
              (a.m_strAccountName = n?.account_name),
              n?.persona_state_flags &&
                (a.m_unPersonaStateFlags = n?.persona_state_flags);
            n?.game_id && (a.m_gameid = n?.game_id);
            n?.game_server_ip_address &&
              (a.m_unGameServerIP = n?.game_server_ip_address);
            n?.lobby_steam_id && (a.m_game_lobby_id = n?.lobby_steam_id);
            n?.game_extra_info && (a.m_strGameExtraInfo = n?.game_extra_info);
            r?.profile_url && (a.m_strProfileURL = r.profile_url);
            return a;
          })(c.K.InitFromAccountID(e), a);
        },
      });
      function y(e, t, a) {
        const r = "string" == typeof a ? new c.K(a).GetAccountID() : a;
        return {
          queryKey: ["PlayerSummary", r],
          queryFn: () => e.loadPersonaState(r, t),
          enabled: !!r,
        };
      }
      let P;
    },
  },
]);

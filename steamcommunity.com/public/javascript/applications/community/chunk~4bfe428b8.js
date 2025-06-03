/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [2979],
  {
    10622: (e, t, a) => {
      a.d(t, { Z: () => l, dV: () => m.d, rO: () => u, tp: () => m.t });
      var r = a(34629),
        n = a(14947),
        s = a(31561),
        i = a(51006),
        o = a(61859),
        _ = a(78327),
        m = a(85044);
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
            (this.m_strAvatarHash = m.d),
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
            (this.m_bOnSteamDeck = !1),
            (this.m_mapRichPresence = n.sH.map()),
            (this.m_bNameInitialized = !1),
            (this.m_bStatusInitialized = !1),
            (this.m_strProfileURL = void 0),
            (0, n.Gn)(this),
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
            (this.m_strBroadcastTitle = void 0),
            (this.m_bOnSteamDeck = !1);
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
        IsOnSteamDeck() {
          return this.m_bOnSteamDeck;
        }
        GetCurrentGameName() {
          return this.m_strGameExtraInfo
            ? this.m_strGameExtraInfo
            : this.m_unGamePlayedAppID
              ? i.Vw.GetAppInfo(this.m_unGamePlayedAppID).name
              : "";
        }
        GetCurrentGameIconURL() {
          return this.m_unGamePlayedAppID
            ? i.Vw.GetAppInfo(this.m_unGamePlayedAppID).icon_url
            : "";
        }
        BIsAppInfoReady() {
          return (
            !this.m_unGamePlayedAppID ||
            i.Vw.GetAppInfo(this.m_unGamePlayedAppID).is_initialized
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
            let e = i.Vw.GetRichPresenceLoc(this.m_unGamePlayedAppID);
            if (e) {
              let t = this.m_mapRichPresence.get("steam_display");
              return e.Localize(t, this.m_mapRichPresence);
            }
          } else if (this.HasStateFlag(8))
            return (0, o.we)("#PersonaStateRemotePlayTogether");
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
          const e = 3600;
          let t = 1e3;
          const a = i.Vw.CMInterface.GetServerRTime32() - this.last_seen_online;
          return (t *= a > 86400 ? e : a > 7200 ? 60 : 15), t;
        }
        GetOfflineStatusTime() {
          if (0 == this.last_seen_online)
            return (0, o.we)("#PersonaStateOffline");
          let e = this.GetOfflineStatusUpdateRate();
          (!_.TS.IN_MOBILE || e <= 60) && (0, s.tB)(e);
          let t = i.Vw.CMInterface.GetServerRTime32() - this.last_seen_online;
          return t < 60
            ? (0, o.we)("#PersonaStateLastSeen_JustNow")
            : (0, o.we)("#PersonaStateLastSeen", (0, o.Hq)(t));
        }
        GetLocalizedOnlineStatus() {
          switch (this.m_ePersonaState) {
            case 0:
            case 7:
              return this.GetOfflineStatusTime();
            case 1:
              return (0, o.we)("#PersonaStateOnline");
            case 2:
              return (0, o.we)("#PersonaStateBusy");
            case 3:
              return (0, o.we)("#PersonaStateAway");
            case 4:
              return (0, o.we)("#PersonaStateSnooze");
            case 5:
              return (0, o.we)("#PersonaStateLookingToTrade");
            case 6:
              return (0, o.we)("#PersonaStateLookingToPlay");
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
          return this.m_strAvatarHash != m.d;
        }
        get avatar_url() {
          return (0, m.t)(this.m_strAvatarHash);
        }
        get avatar_url_medium() {
          return (0, m.t)(this.m_strAvatarHash, "medium");
        }
        get avatar_url_full() {
          return (0, m.t)(this.m_strAvatarHash, "full");
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
            ? `${_.TS.COMMUNITY_BASE_URL}id/${this.m_strProfileURL}/`
            : `${_.TS.COMMUNITY_BASE_URL}profiles/${this.m_steamid.ConvertTo64BitString()}/`;
        }
      }
      (0, r.Cg)([n.sH], l.prototype, "m_bInitialized", void 0),
        (0, r.Cg)([n.sH], l.prototype, "m_ePersonaState", void 0),
        (0, r.Cg)([n.sH], l.prototype, "m_unGamePlayedAppID", void 0),
        (0, r.Cg)([n.sH], l.prototype, "m_gameid", void 0),
        (0, r.Cg)([n.sH], l.prototype, "m_unPersonaStateFlags", void 0),
        (0, r.Cg)([n.sH], l.prototype, "m_strPlayerName", void 0),
        (0, r.Cg)([n.sH], l.prototype, "m_strAvatarHash", void 0),
        (0, r.Cg)([n.sH], l.prototype, "m_strAccountName", void 0),
        (0, r.Cg)([n.sH], l.prototype, "m_rtLastSeenOnline", void 0),
        (0, r.Cg)([n.sH], l.prototype, "m_strGameExtraInfo", void 0),
        (0, r.Cg)([n.sH], l.prototype, "m_unGameServerIP", void 0),
        (0, r.Cg)([n.sH], l.prototype, "m_unGameServerPort", void 0),
        (0, r.Cg)([n.sH], l.prototype, "m_game_lobby_id", void 0),
        (0, r.Cg)([n.sH], l.prototype, "m_bPlayerNamePending", void 0),
        (0, r.Cg)([n.sH], l.prototype, "m_bAvatarPending", void 0),
        (0, r.Cg)([n.sH], l.prototype, "m_broadcastId", void 0),
        (0, r.Cg)([n.sH], l.prototype, "m_broadcastAccountId", void 0),
        (0, r.Cg)([n.sH], l.prototype, "m_broadcastAppId", void 0),
        (0, r.Cg)([n.sH], l.prototype, "m_broadcastViewerCount", void 0),
        (0, r.Cg)([n.sH], l.prototype, "m_strBroadcastTitle", void 0),
        (0, r.Cg)([n.sH], l.prototype, "m_bCommunityBanned", void 0),
        (0, r.Cg)([n.sH], l.prototype, "m_bOnSteamDeck", void 0);
    },
    14336: (e, t, a) => {
      a.d(t, { DW: () => g, js: () => h, hW: () => p });
      var r = a(90626),
        n = a(88942),
        s = a(33861),
        i = a(23809),
        o = a(44654),
        _ = a(10622),
        m = a(17720),
        u = a(37735),
        l = a(58632),
        c = a.n(l);
      function d(e, t) {
        return new (c())(
          async (t) => {
            const a = [...t],
              r = await u.xt.GetPlayerLinkDetails(e, { steamids: a }),
              n = new Map();
            return (
              r
                .Body()
                .accounts()
                .forEach((e) => {
                  const t = e.toObject();
                  n.set(t.public_data.steamid, t);
                }),
              a.map((e) => {
                var t;
                return null !== (t = n.get(e)) && void 0 !== t ? t : null;
              })
            );
          },
          { maxBatchSize: 100, cache: !1, ...t },
        );
      }
      function h(e) {
        const t = (0, i.KV)(),
          a = r.useContext(v);
        return (0, n.I)(y(a, t, e));
      }
      function p(e) {
        const t = r.useRef(),
          a = h(e);
        return a.data
          ? a
          : (t.current ||
              (t.current = new _.Z(
                "string" == typeof e ? new m.b(e) : m.b.InitFromAccountID(e),
              )),
            { ...a, data: t.current });
      }
      function g(e) {
        const t = (0, i.KV)(),
          a = r.useContext(v);
        return (0, s.E)({ queries: e.map((e) => y(a, t, e)) });
      }
      const v = r.createContext({
        loadPersonaState: async (e, t) => {
          if (null == e) return null;
          const a = await (function (e) {
            return null != P ? P : (P = d(e));
          })(t).load(m.b.InitFromAccountID(e).ConvertTo64BitString());
          return (function (e, t) {
            var a, r;
            let n = new _.Z(e);
            const s = null == t ? void 0 : t.public_data,
              i = null == t ? void 0 : t.private_data;
            (n.m_bInitialized = !!t),
              (n.m_ePersonaState =
                null !== (a = null == i ? void 0 : i.persona_state) &&
                void 0 !== a
                  ? a
                  : 0),
              (n.m_strAvatarHash = (null == s ? void 0 : s.sha_digest_avatar)
                ? (0, o.Kx)(s.sha_digest_avatar)
                : _.dV),
              (n.m_strPlayerName =
                null !== (r = null == s ? void 0 : s.persona_name) &&
                void 0 !== r
                  ? r
                  : e.ConvertTo64BitString()),
              (n.m_strAccountName = null == i ? void 0 : i.account_name),
              (null == i ? void 0 : i.persona_state_flags) &&
                (n.m_unPersonaStateFlags =
                  null == i ? void 0 : i.persona_state_flags);
            (null == i ? void 0 : i.game_id) &&
              (n.m_gameid = null == i ? void 0 : i.game_id);
            (null == i ? void 0 : i.game_server_ip_address) &&
              (n.m_unGameServerIP =
                null == i ? void 0 : i.game_server_ip_address);
            (null == i ? void 0 : i.lobby_steam_id) &&
              (n.m_game_lobby_id = null == i ? void 0 : i.lobby_steam_id);
            (null == i ? void 0 : i.game_extra_info) &&
              (n.m_strGameExtraInfo = null == i ? void 0 : i.game_extra_info);
            (null == s ? void 0 : s.profile_url) &&
              (n.m_strProfileURL = s.profile_url);
            return n;
          })(m.b.InitFromAccountID(e), a);
        },
      });
      function y(e, t, a) {
        const r = "string" == typeof a ? new m.b(a).GetAccountID() : a;
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

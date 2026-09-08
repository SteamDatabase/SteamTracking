/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [41471],
  {
    11333: (e, t, a) => {
      a.d(t, { L: () => _, c: () => o });
      var r = a(42457),
        n = a(49845),
        s = a(58632),
        i = a.n(s);
      function o(e, t) {
        return new (i())(
          async (t) => {
            const a = [...t],
              n = await r.xtC.GetPlayerLinkDetails(e, { steamids: a }),
              s = new Map();
            return (
              n
                .Body()
                .accounts()
                .forEach((e) => {
                  const t = e.toObject();
                  s.set(t.public_data.steamid, t);
                }),
              a.map((e) => s.get(e) ?? null)
            );
          },
          { maxBatchSize: 100, cache: !1, ...t },
        );
      }
      function _(e) {
        return (0, n.V)("PlayerLinkDetails", () => o(e));
      }
    },
    38924: (e, t, a) => {
      a.d(t, {
        Fj: () => r,
        R$: () => i,
        Zx: () => n,
        hs: () => _,
        o5: () => s,
        sr: () => o,
      });
      const r = 2,
        n = 4,
        s = 8,
        i = 512,
        o = 1024,
        _ = 2048;
    },
    49845: (e, t, a) => {
      function r(e) {
        return "[object Object]" === Object.prototype.toString.call(e);
      }
      function n(...e) {
        return JSON.stringify(e, (e, t) => {
          if (
            (function (e) {
              if (!r(e)) return !1;
              const t = e.constructor;
              if (void 0 === t) return !0;
              const a = t.prototype;
              return (
                !!r(a) &&
                !!Object.prototype.hasOwnProperty.call(a, "isPrototypeOf")
              );
            })(t)
          ) {
            const e = {};
            return (
              Object.keys(t)
                .sort()
                .forEach((a) => {
                  e[a] = t[a];
                }),
              e
            );
          }
          return t;
        });
      }
      a.d(t, { V: () => o });
      var s = a(90626);
      a(7850);
      const i = (0, s.createContext)({ instances: {}, factories: {} });
      function o(e, t) {
        const a = (0, s.useContext)(i),
          r = "string" == typeof e ? e : n(...e);
        let o = a;
        for (; o; ) {
          if (r in o.instances) return o.instances[r];
          if (r in o.factories) break;
          o = o.parent;
        }
        const _ = (o?.factories[r] ?? t)();
        return ((o ?? a).instances[r] = _), _;
      }
    },
    10622: (e, t, a) => {
      a.d(t, { Z: () => p, dV: () => u.d, rO: () => l });
      var r = a(34629),
        n = a(14947),
        s = a(31561),
        i = a(51006),
        o = a(61859),
        _ = a(22837),
        m = a(38924),
        c = a(78327),
        u = a(85044);
      function l(e) {
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
        m_steamid;
        m_bInitialized = !1;
        m_ePersonaState = _.cU3;
        m_unGamePlayedAppID = 0;
        m_gameid = "0";
        m_unPersonaStateFlags = 0;
        m_strPlayerName = "";
        m_strAvatarHash = u.d;
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
        m_eGamingDeviceType = _.eSB;
        m_mapRichPresence = n.sH.map();
        m_bNameInitialized = !1;
        m_bStatusInitialized = !1;
        m_strProfileURL = void 0;
        constructor(e) {
          (0, n.Gn)(this), (this.m_steamid = e);
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
          return this.m_ePersonaState != _.cU3 && this.m_ePersonaState != _._3b;
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
          return 0 != ((this.m_unPersonaStateFlags ?? 0) & m.Fj);
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
          return this.m_ePersonaState == _.PrD || this.m_ePersonaState == _.vPz;
        }
        HasStateFlag(e) {
          return 0 != ((this.m_unPersonaStateFlags ?? 0) & e);
        }
        get last_seen_online() {
          return this.m_rtLastSeenOnline;
        }
        ClearStateOnDisconnect() {
          this.m_ePersonaState != _.cU3 && this.Reset();
        }
        get is_golden() {
          return this.HasStateFlag(m.Zx);
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
          } else if (this.HasStateFlag(m.o5))
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
          (!c.TS.IN_MOBILE || e <= 60) && (0, s.tB)(e);
          let t = i.Vw.CMInterface.GetServerRTime32() - this.last_seen_online;
          return t < 60
            ? (0, o.we)("#PersonaStateLastSeen_JustNow")
            : (0, o.we)("#PersonaStateLastSeen", (0, o.Hq)(t));
        }
        GetLocalizedOnlineStatus() {
          switch (this.m_ePersonaState) {
            case _.cU3:
            case _._3b:
              return this.GetOfflineStatusTime();
            case _.UXk:
              return (0, o.we)("#PersonaStateOnline");
            case _.wcG:
              return (0, o.we)("#PersonaStateBusy");
            case _.PrD:
              return (0, o.we)("#PersonaStateAway");
            case _.vPz:
              return (0, o.we)("#PersonaStateSnooze");
            case _.Hrn:
              return (0, o.we)("#PersonaStateLookingToTrade");
            case _.HAb:
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
          return this.m_strAvatarHash != u.d;
        }
        get avatar_url() {
          return (0, u.t)(this.m_strAvatarHash);
        }
        get avatar_url_medium() {
          return (0, u.t)(this.m_strAvatarHash, "medium");
        }
        get avatar_url_full() {
          return (0, u.t)(this.m_strAvatarHash, "full");
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
            ? `${c.TS.COMMUNITY_BASE_URL}id/${this.m_strProfileURL}/`
            : `${c.TS.COMMUNITY_BASE_URL}profiles/${this.m_steamid.ConvertTo64BitString()}/`;
        }
      }
      (0, r.Cg)([n.sH], p.prototype, "m_bInitialized", void 0),
        (0, r.Cg)([n.sH], p.prototype, "m_ePersonaState", void 0),
        (0, r.Cg)([n.sH], p.prototype, "m_unGamePlayedAppID", void 0),
        (0, r.Cg)([n.sH], p.prototype, "m_gameid", void 0),
        (0, r.Cg)([n.sH], p.prototype, "m_unPersonaStateFlags", void 0),
        (0, r.Cg)([n.sH], p.prototype, "m_strPlayerName", void 0),
        (0, r.Cg)([n.sH], p.prototype, "m_strAvatarHash", void 0),
        (0, r.Cg)([n.sH], p.prototype, "m_strAccountName", void 0),
        (0, r.Cg)([n.sH], p.prototype, "m_rtLastSeenOnline", void 0),
        (0, r.Cg)([n.sH], p.prototype, "m_strGameExtraInfo", void 0),
        (0, r.Cg)([n.sH], p.prototype, "m_unGameServerIP", void 0),
        (0, r.Cg)([n.sH], p.prototype, "m_unGameServerPort", void 0),
        (0, r.Cg)([n.sH], p.prototype, "m_game_lobby_id", void 0),
        (0, r.Cg)([n.sH], p.prototype, "m_bPlayerNamePending", void 0),
        (0, r.Cg)([n.sH], p.prototype, "m_bAvatarPending", void 0),
        (0, r.Cg)([n.sH], p.prototype, "m_broadcastId", void 0),
        (0, r.Cg)([n.sH], p.prototype, "m_broadcastAccountId", void 0),
        (0, r.Cg)([n.sH], p.prototype, "m_broadcastAppId", void 0),
        (0, r.Cg)([n.sH], p.prototype, "m_broadcastViewerCount", void 0),
        (0, r.Cg)([n.sH], p.prototype, "m_strBroadcastTitle", void 0),
        (0, r.Cg)([n.sH], p.prototype, "m_bCommunityBanned", void 0),
        (0, r.Cg)([n.sH], p.prototype, "m_eGamingDeviceType", void 0),
        (0, r.Cg)([n.sH], p.prototype, "m_bNameInitialized", void 0);
    },
    41471: (e, t, a) => {
      a.d(t, { DW: () => p, js: () => l, mK: () => g, tb: () => h });
      var r = a(90626),
        n = a(80902),
        s = a(54806),
        i = a(22837),
        o = a(23809),
        _ = a(44654),
        m = a(10622),
        c = a(17720),
        u = a(11333);
      function l(e) {
        const t = (0, o.KV)(),
          a = r.useContext(d);
        return (0, n.I)(g(a, t, e));
      }
      function p(e) {
        const t = (0, o.KV)(),
          a = r.useContext(d);
        return (0, s.E)({ queries: e.map((e) => g(a, t, e)) });
      }
      const d = r.createContext({
        loadPersonaState: async (e, t) => {
          if (null == e) return null;
          const a = await (function (e) {
            return (y ??= (0, u.c)(e));
          })(t).load(c.b.InitFromAccountID(e).ConvertTo64BitString());
          return (function (e, t) {
            let a = new m.Z(e);
            const r = t?.public_data,
              n = t?.private_data;
            (a.m_bInitialized = !!t),
              (a.m_ePersonaState = n?.persona_state ?? i.cU3),
              (a.m_strAvatarHash = r?.sha_digest_avatar
                ? (0, _.Kx)(r.sha_digest_avatar)
                : m.dV),
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
          })(c.b.InitFromAccountID(e), a);
        },
      });
      function h() {
        return r.useContext(d);
      }
      function g(e, t, a) {
        const r = "string" == typeof a ? new c.b(a).GetAccountID() : a;
        return {
          queryKey: ["PlayerSummary", r],
          queryFn: () => e.loadPersonaState(r, t),
          enabled: !!r,
        };
      }
      let y;
    },
  },
]);

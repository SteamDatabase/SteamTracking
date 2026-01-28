/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [8129],
  {
    88241: (e, t, a) => {
      a.d(t, { Z: () => c, dV: () => m.d, rO: () => u });
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
      class c {
        m_steamid;
        m_bInitialized = !1;
        m_ePersonaState = 0;
        m_unGamePlayedAppID = 0;
        m_gameid = "0";
        m_unPersonaStateFlags = 0;
        m_strPlayerName = "";
        m_strAvatarHash = m.d;
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
        m_eGamingDeviceType = 0;
        m_mapRichPresence = n.sH.map();
        m_bNameInitialized = !1;
        m_bStatusInitialized = !1;
        m_strProfileURL = void 0;
        constructor(e) {
          (0, n.Gn)(this), (this.m_steamid = e);
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
            (this.m_eGamingDeviceType = 0);
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
      (0, r.Cg)([n.sH], c.prototype, "m_bInitialized", void 0),
        (0, r.Cg)([n.sH], c.prototype, "m_ePersonaState", void 0),
        (0, r.Cg)([n.sH], c.prototype, "m_unGamePlayedAppID", void 0),
        (0, r.Cg)([n.sH], c.prototype, "m_gameid", void 0),
        (0, r.Cg)([n.sH], c.prototype, "m_unPersonaStateFlags", void 0),
        (0, r.Cg)([n.sH], c.prototype, "m_strPlayerName", void 0),
        (0, r.Cg)([n.sH], c.prototype, "m_strAvatarHash", void 0),
        (0, r.Cg)([n.sH], c.prototype, "m_strAccountName", void 0),
        (0, r.Cg)([n.sH], c.prototype, "m_rtLastSeenOnline", void 0),
        (0, r.Cg)([n.sH], c.prototype, "m_strGameExtraInfo", void 0),
        (0, r.Cg)([n.sH], c.prototype, "m_unGameServerIP", void 0),
        (0, r.Cg)([n.sH], c.prototype, "m_unGameServerPort", void 0),
        (0, r.Cg)([n.sH], c.prototype, "m_game_lobby_id", void 0),
        (0, r.Cg)([n.sH], c.prototype, "m_bPlayerNamePending", void 0),
        (0, r.Cg)([n.sH], c.prototype, "m_bAvatarPending", void 0),
        (0, r.Cg)([n.sH], c.prototype, "m_broadcastId", void 0),
        (0, r.Cg)([n.sH], c.prototype, "m_broadcastAccountId", void 0),
        (0, r.Cg)([n.sH], c.prototype, "m_broadcastAppId", void 0),
        (0, r.Cg)([n.sH], c.prototype, "m_broadcastViewerCount", void 0),
        (0, r.Cg)([n.sH], c.prototype, "m_strBroadcastTitle", void 0),
        (0, r.Cg)([n.sH], c.prototype, "m_bCommunityBanned", void 0),
        (0, r.Cg)([n.sH], c.prototype, "m_eGamingDeviceType", void 0),
        (0, r.Cg)([n.sH], c.prototype, "m_bNameInitialized", void 0);
    },
    14336: (e, t, a) => {
      a.d(t, { z0: () => S, DW: () => y, js: () => h, hW: () => g });
      var r = a(90626),
        n = a(20194),
        s = a(54806),
        i = a(23809),
        o = a(44654),
        _ = a(88241),
        m = a(17720),
        u = a(7860),
        c = a(37735),
        l = a(58632),
        p = a.n(l);
      function d(e, t) {
        return new (p())(
          async (t) => {
            const a = [...t],
              r = await c.xt.GetPlayerLinkDetails(e, { steamids: a }),
              n = new Map();
            return (
              r
                .Body()
                .accounts()
                .forEach((e) => {
                  const t = e.toObject();
                  n.set(t.public_data.steamid, t);
                }),
              a.map((e) => n.get(e) ?? null)
            );
          },
          { maxBatchSize: 100, cache: !1, ...t },
        );
      }
      function h(e) {
        const t = (0, i.KV)(),
          a = r.useContext(P);
        return (0, n.I)(f(a, t, e));
      }
      function g(e) {
        const t = r.useRef(void 0),
          a = h(e);
        return a.data
          ? a
          : (t.current ||
              (t.current = new _.Z(
                "string" == typeof e ? new m.b(e) : m.b.InitFromAccountID(e),
              )),
            { ...a, data: t.current });
      }
      function y(e) {
        const t = (0, i.KV)(),
          a = r.useContext(P);
        return (0, s.E)({ queries: e.map((e) => f(a, t, e)) });
      }
      function S(e) {
        return u.L.getQueryData(["PlayerSummary", e]);
      }
      const P = r.createContext({
        loadPersonaState: async (e, t) => {
          if (null == e) return null;
          const a = await (function (e) {
            return (v ??= d(e));
          })(t).load(m.b.InitFromAccountID(e).ConvertTo64BitString());
          return (function (e, t) {
            let a = new _.Z(e);
            const r = t?.public_data,
              n = t?.private_data;
            (a.m_bInitialized = !!t),
              (a.m_ePersonaState = n?.persona_state ?? 0),
              (a.m_strAvatarHash = r?.sha_digest_avatar
                ? (0, o.Kx)(r.sha_digest_avatar)
                : _.dV),
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
          })(m.b.InitFromAccountID(e), a);
        },
      });
      function f(e, t, a) {
        const r = "string" == typeof a ? new m.b(a).GetAccountID() : a;
        return {
          queryKey: ["PlayerSummary", r],
          queryFn: () => e.loadPersonaState(r, t),
          enabled: !!r,
        };
      }
      let v;
    },
    11577: (e, t, a) => {
      a.d(t, { m: () => m });
      var r = a(90626),
        n = a(96059),
        s = a(16021),
        i = a(81393),
        o = a(78327),
        _ = a(63664);
      function m(e) {
        const [t, a] = (0, r.useState)(!1),
          [m] = (0, r.useState)(() =>
            (function () {
              const e = (0, o.Tc)(
                "partnerbrowse_webapi_token",
                "application_config",
              );
              (0, i.wT)(Boolean(e), "require partnerbrowse_webapi_token");
              const t = new n.D(o.TS.WEBAPI_BASE_URL, e);
              ("dev" != o.TS.WEB_UNIVERSE && "beta" != o.TS.WEB_UNIVERSE) ||
                console.log(
                  "DEV_DEBUG: Initializing CStoreItemCache with access token",
                  e,
                );
              return t;
            })(),
          ),
          u = (0, r.useMemo)(
            () => ({
              country: o.TS.COUNTRY,
              language: o.TS.LANGUAGE,
              realm: o.TS.EREALM,
              bUsePartnerAPI: !0,
            }),
            [],
          );
        return (
          (0, r.useEffect)(
            () => (
              a(!0),
              (function (e) {
                return s.A.Initialize(
                  e.GetServiceTransport(),
                  o.iA.is_partner_member,
                );
              })(m)
            ),
            [m],
          ),
          t
            ? (0, r.createElement)(_.V3, {
                context: u,
                serviceTransportOverride: m.GetServiceTransport(),
                children: e.children,
              })
            : null
        );
      }
    },
  },
]);

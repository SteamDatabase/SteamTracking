/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [44072],
    {
      15860: (O, D, s) => {
        s.d(D, { L: () => h, c: () => o });
        var a = s(75916),
          E = s(76617),
          g = s(58632),
          c = s.n(g);
        function o(d, y) {
          return new (c())(
            async (u) => {
              const p = [...u],
                t = await a.xtC.GetPlayerLinkDetails(d, { steamids: p }),
                P = new Map();
              return (
                t
                  .Body()
                  .accounts()
                  .forEach((e) => {
                    const _ = e.toObject();
                    P.set(_.public_data.steamid, _);
                  }),
                p.map((e) => P.get(e) ?? null)
              );
            },
            { maxBatchSize: 100, cache: !1, ...y },
          );
        }
        function h(d) {
          return (0, E.V)("PlayerLinkDetails", () => o(d));
        }
      },
      88363: (O, D, s) => {
        s.d(D, {
          Fj: () => E,
          R$: () => h,
          Zx: () => g,
          hs: () => y,
          o5: () => c,
          sr: () => d,
        });
        const a = 1,
          E = 2,
          g = 4,
          c = 8,
          o = 256,
          h = 512,
          d = 1024,
          y = 2048,
          u = 4096,
          p = 8192;
      },
      76617: (O, D, s) => {
        s.d(D, { V: () => y });
        function a(u) {
          return Object.prototype.toString.call(u) === "[object Object]";
        }
        function E(u) {
          if (!a(u)) return !1;
          const p = u.constructor;
          if (typeof p > "u") return !0;
          const t = p.prototype;
          return !(
            !a(t) || !Object.prototype.hasOwnProperty.call(t, "isPrototypeOf")
          );
        }
        function g(...u) {
          return JSON.stringify(u, (p, t) => {
            if (E(t)) {
              const P = {};
              return (
                Object.keys(t)
                  .sort()
                  .forEach((e) => {
                    P[e] = t[e];
                  }),
                P
              );
            }
            return t;
          });
        }
        var c = s(90626),
          o = s(7850);
        const h = (0, c.createContext)({ instances: {}, factories: {} });
        function d(u) {
          const { name: p, fnFactory: t, children: P } = u,
            e = React.useContext(h),
            [_] = useState({}),
            r = useMemo(
              () => ({
                instances: _,
                factories: { ...e.factories, [p]: t },
                parent: e,
              }),
              [_, p, e],
            );
          return jsx(h.Provider, { value: r, children: P });
        }
        function y(u, p) {
          const t = (0, c.useContext)(h),
            P = typeof u == "string" ? u : g(...u);
          let e = t;
          for (; e; ) {
            if (P in e.instances) return e.instances[P];
            if (P in e.factories) break;
            e = e.parent;
          }
          const r = (e?.factories[P] ?? p)();
          return ((e ?? t).instances[P] = r), r;
        }
      },
      5858: (O, D, s) => {
        s.d(D, { Z: () => e, dV: () => y.d, rO: () => P, tp: () => y.t });
        var a = s(14947),
          E = s(31561),
          g = s(85528),
          c = s(18210),
          o = s(99412),
          h = s(88363),
          d = s(3166),
          y = s(35413),
          u = Object.defineProperty,
          p = Object.getOwnPropertyDescriptor,
          t = (_, r, m, l) => {
            for (
              var S = l > 1 ? void 0 : l ? p(r, m) : r, I = _.length - 1, i;
              I >= 0;
              I--
            )
              (i = _[I]) && (S = (l ? i(r, m, S) : i(S)) || S);
            return l && S && u(r, m, S), S;
          };
        function P(_) {
          let r = "offline";
          return (
            _ &&
              (_.is_ingame
                ? (r = "ingame")
                : _.m_broadcastAccountId
                  ? (r = "watchingbroadcast")
                  : _.is_online && (r = "online"),
              _.is_awayOrSnooze && (r += " awayOrSnooze")),
            r
          );
        }
        class e {
          m_steamid;
          m_bInitialized = !1;
          m_ePersonaState = o.cU3;
          m_unGamePlayedAppID = 0;
          m_gameid = "0";
          m_unPersonaStateFlags = 0;
          m_strPlayerName = "";
          m_strAvatarHash = y.d;
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
          m_eGamingDeviceType = o.eSB;
          m_mapRichPresence = a.sH.map();
          m_bNameInitialized = !1;
          m_bStatusInitialized = !1;
          m_strProfileURL = void 0;
          constructor(r) {
            (0, a.Gn)(this), (this.m_steamid = r);
          }
          Reset() {
            (this.m_ePersonaState = o.cU3),
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
              (this.m_eGamingDeviceType = o.eSB);
          }
          GetAccountID() {
            return this.m_steamid.GetAccountID();
          }
          GetSteamIDAsString() {
            return this.m_steamid.ConvertTo64BitString();
          }
          get is_online() {
            return (
              this.m_ePersonaState != o.cU3 && this.m_ePersonaState != o._3b
            );
          }
          get is_ingame() {
            return (
              this.is_online &&
              (this.m_unGamePlayedAppID != 0 || this.m_gameid != "0")
            );
          }
          get is_watchingbroadcast() {
            return !!this.m_broadcastAccountId;
          }
          get is_in_nonsteam_game() {
            return this.m_unGamePlayedAppID == 0 && this.m_gameid != "0";
          }
          get is_in_joinable_game() {
            return (
              this.has_joinable_game_flag ||
              this.is_in_valid_lobby ||
              this.has_server_ip
            );
          }
          get has_joinable_game_flag() {
            return ((this.m_unPersonaStateFlags ?? 0) & h.Fj) != 0;
          }
          get connect_string() {
            return this.m_mapRichPresence.get("connect");
          }
          get is_in_valid_lobby() {
            return this.m_game_lobby_id != null && this.m_game_lobby_id != "0";
          }
          get has_server_ip() {
            return this.m_unGameServerIP != 0;
          }
          get is_awayOrSnooze() {
            return (
              this.m_ePersonaState == o.PrD || this.m_ePersonaState == o.vPz
            );
          }
          HasStateFlag(r) {
            return ((this.m_unPersonaStateFlags ?? 0) & r) != 0;
          }
          get last_seen_online() {
            return this.m_rtLastSeenOnline;
          }
          ClearStateOnDisconnect() {
            this.m_ePersonaState != o.cU3 && this.Reset();
          }
          get is_golden() {
            return this.HasStateFlag(h.Zx);
          }
          GetCurrentGameName() {
            return this.m_strGameExtraInfo
              ? this.m_strGameExtraInfo
              : this.m_unGamePlayedAppID
                ? g.Vw.GetAppInfo(this.m_unGamePlayedAppID).name
                : "";
          }
          GetCurrentGameIconURL() {
            return this.m_unGamePlayedAppID
              ? g.Vw.GetAppInfo(this.m_unGamePlayedAppID).icon_url
              : "";
          }
          BIsAppInfoReady() {
            return this.m_unGamePlayedAppID
              ? g.Vw.GetAppInfo(this.m_unGamePlayedAppID).is_initialized
              : !0;
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
              let r = g.Vw.GetRichPresenceLoc(this.m_unGamePlayedAppID);
              if (r) {
                let m = this.m_mapRichPresence.get("steam_display");
                return r.Localize(m, this.m_mapRichPresence);
              }
            } else if (this.HasStateFlag(h.o5))
              return (0, c.we)("#PersonaStateRemotePlayTogether");
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
            if (this.last_seen_online == 0) return 3e4;
            const r = 60,
              m = r * 60,
              l = m * 24;
            let S = 1e3;
            const I =
              g.Vw.CMInterface.GetServerRTime32() - this.last_seen_online;
            return I > l ? (S *= m) : I > 2 * m ? (S *= r) : (S *= r / 4), S;
          }
          GetOfflineStatusTime() {
            if (this.last_seen_online == 0)
              return (0, c.we)("#PersonaStateOffline");
            let r = this.GetOfflineStatusUpdateRate();
            (!d.TS.IN_MOBILE || r <= 60) && (0, E.tB)(r);
            let m = g.Vw.CMInterface.GetServerRTime32() - this.last_seen_online;
            return m < 60
              ? (0, c.we)("#PersonaStateLastSeen_JustNow")
              : (0, c.we)("#PersonaStateLastSeen", (0, c.Hq)(m));
          }
          GetLocalizedOnlineStatus() {
            switch (this.m_ePersonaState) {
              case o.cU3:
              case o._3b:
                return this.GetOfflineStatusTime();
              case o.UXk:
                return (0, c.we)("#PersonaStateOnline");
              case o.wcG:
                return (0, c.we)("#PersonaStateBusy");
              case o.PrD:
                return (0, c.we)("#PersonaStateAway");
              case o.vPz:
                return (0, c.we)("#PersonaStateSnooze");
              case o.Hrn:
                return (0, c.we)("#PersonaStateLookingToTrade");
              case o.HAb:
                return (0, c.we)("#PersonaStateLookingToPlay");
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
            return this.m_strAvatarHash != y.d;
          }
          get avatar_url() {
            return (0, y.t)(this.m_strAvatarHash);
          }
          get avatar_url_medium() {
            return (0, y.t)(this.m_strAvatarHash, "medium");
          }
          get avatar_url_full() {
            return (0, y.t)(this.m_strAvatarHash, "full");
          }
          static SortStatusComparator(r, m, l) {
            if (m.has_public_party_beacon) {
              if (!l.has_public_party_beacon) return -1;
            } else {
              if (l.has_public_party_beacon) return 1;
              if (m.is_ingame)
                if (l.is_ingame)
                  if (r) {
                    if (m.is_awayOrSnooze) {
                      if (!l.is_awayOrSnooze) return 1;
                    } else if (l.is_awayOrSnooze) return -1;
                  } else return 0;
                else return -1;
              else if (l.is_ingame) return 1;
            }
            if (m.is_online) {
              if (!l.is_online) return -1;
            } else if (l.is_online) return 1;
            if (r) {
              if (m.is_awayOrSnooze) {
                if (!l.is_awayOrSnooze) return 1;
              } else if (l.is_awayOrSnooze) return -1;
            }
            return 0;
          }
          GetCommunityProfileURL() {
            return this.m_strProfileURL
              ? `${d.TS.COMMUNITY_BASE_URL}id/${this.m_strProfileURL}/`
              : `${d.TS.COMMUNITY_BASE_URL}profiles/${this.m_steamid.ConvertTo64BitString()}/`;
          }
        }
        t([a.sH], e.prototype, "m_bInitialized", 2),
          t([a.sH], e.prototype, "m_ePersonaState", 2),
          t([a.sH], e.prototype, "m_unGamePlayedAppID", 2),
          t([a.sH], e.prototype, "m_gameid", 2),
          t([a.sH], e.prototype, "m_unPersonaStateFlags", 2),
          t([a.sH], e.prototype, "m_strPlayerName", 2),
          t([a.sH], e.prototype, "m_strAvatarHash", 2),
          t([a.sH], e.prototype, "m_strAccountName", 2),
          t([a.sH], e.prototype, "m_rtLastSeenOnline", 2),
          t([a.sH], e.prototype, "m_strGameExtraInfo", 2),
          t([a.sH], e.prototype, "m_unGameServerIP", 2),
          t([a.sH], e.prototype, "m_unGameServerPort", 2),
          t([a.sH], e.prototype, "m_game_lobby_id", 2),
          t([a.sH], e.prototype, "m_bPlayerNamePending", 2),
          t([a.sH], e.prototype, "m_bAvatarPending", 2),
          t([a.sH], e.prototype, "m_broadcastId", 2),
          t([a.sH], e.prototype, "m_broadcastAccountId", 2),
          t([a.sH], e.prototype, "m_broadcastAppId", 2),
          t([a.sH], e.prototype, "m_broadcastViewerCount", 2),
          t([a.sH], e.prototype, "m_strBroadcastTitle", 2),
          t([a.sH], e.prototype, "m_bCommunityBanned", 2),
          t([a.sH], e.prototype, "m_eGamingDeviceType", 2),
          t([a.sH], e.prototype, "m_bNameInitialized", 2);
      },
      35098: (O, D, s) => {
        s.d(D, { hW: () => p, js: () => u });
        var a = s(90626),
          E = s(88942),
          g = s(99412),
          c = s(68312),
          o = s(15369),
          h = s(5858),
          d = s(76559),
          y = s(15860);
        function u(i) {
          const f = (0, c.KV)(),
            n = a.useContext(_);
          return (0, E.I)(m(n, f, i));
        }
        function p(i) {
          const f = a.useRef(void 0),
            n = u(i);
          return n.data
            ? n
            : (f.current ||
                (f.current = new h.Z(
                  typeof i == "string" ? new d.b(i) : d.b.InitFromAccountID(i),
                )),
              { ...n, data: f.current });
        }
        function t(i) {
          const f = useActiveServiceTransport(),
            n = React.useContext(_);
          return useQueries({ queries: i.map((v) => m(n, f, v)) });
        }
        function P(i) {
          return ReactQueryClient.getQueryData(["PlayerSummary", i]);
        }
        function e(i) {
          const { loadPersonaState: f, children: n } = i,
            v = React.useMemo(() => ({ loadPersonaState: f }), [f]);
          return React.createElement(_.Provider, { value: v }, n);
        }
        const _ = a.createContext({
          loadPersonaState: async (i, f) => {
            if (i == null) return null;
            const n = await S(f).load(
              d.b.InitFromAccountID(i).ConvertTo64BitString(),
            );
            return I(d.b.InitFromAccountID(i), n);
          },
        });
        function r() {
          return React.useContext(_);
        }
        function m(i, f, n) {
          const v = typeof n == "string" ? new d.b(n).GetAccountID() : n;
          return {
            queryKey: ["PlayerSummary", v],
            queryFn: () => i.loadPersonaState(v, f),
            enabled: !!v,
          };
        }
        let l;
        function S(i) {
          return (l ??= (0, y.c)(i));
        }
        function I(i, f) {
          let n = new h.Z(i);
          const v = f?.public_data,
            b = f?.private_data;
          return (
            (n.m_bInitialized = !!f),
            (n.m_ePersonaState = b?.persona_state ?? g.cU3),
            (n.m_strAvatarHash = v?.sha_digest_avatar
              ? (0, o.Kx)(v.sha_digest_avatar)
              : h.dV),
            (n.m_strPlayerName = v?.persona_name ?? i.ConvertTo64BitString()),
            (n.m_strAccountName = b?.account_name),
            b?.persona_state_flags &&
              (n.m_unPersonaStateFlags = b?.persona_state_flags),
            b?.game_id && (n.m_gameid = b?.game_id),
            b?.game_server_ip_address &&
              (n.m_unGameServerIP = b?.game_server_ip_address),
            b?.lobby_steam_id && (n.m_game_lobby_id = b?.lobby_steam_id),
            b?.game_extra_info && (n.m_strGameExtraInfo = b?.game_extra_info),
            v?.profile_url && (n.m_strProfileURL = v.profile_url),
            n
          );
        }
      },
    },
  ]);
})();

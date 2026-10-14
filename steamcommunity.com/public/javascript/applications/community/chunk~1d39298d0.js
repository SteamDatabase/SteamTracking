/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [4072],
    {
      15860: (C, I, n) => {
        n.d(I, { L: () => v, c: () => m });
        var r = n(75916),
          O = n(76617),
          b = n(58632),
          f = n.n(b);
        function m(y, S) {
          return new (f())(
            async (h) => {
              const g = [...h],
                P = await r.xtC.GetPlayerLinkDetails(y, { steamids: g }),
                s = new Map();
              return (
                P.Body()
                  .accounts()
                  .forEach((e) => {
                    const l = e.toObject();
                    s.set(l.public_data.steamid, l);
                  }),
                g.map((e) => {
                  var l;
                  return (l = s.get(e)) != null ? l : null;
                })
              );
            },
            { maxBatchSize: 100, cache: !1, ...S },
          );
        }
        function v(y) {
          return (0, O.V)("PlayerLinkDetails", () => m(y));
        }
      },
      88363: (C, I, n) => {
        n.d(I, {
          Fj: () => O,
          R$: () => v,
          Zx: () => b,
          hs: () => S,
          o5: () => f,
          sr: () => y,
        });
        const r = 1,
          O = 2,
          b = 4,
          f = 8,
          m = 256,
          v = 512,
          y = 1024,
          S = 2048,
          h = 4096,
          g = 8192;
      },
      76617: (C, I, n) => {
        n.d(I, { V: () => S });
        function r(h) {
          return Object.prototype.toString.call(h) === "[object Object]";
        }
        function O(h) {
          if (!r(h)) return !1;
          const g = h.constructor;
          if (typeof g == "undefined") return !0;
          const P = g.prototype;
          return !(
            !r(P) || !Object.prototype.hasOwnProperty.call(P, "isPrototypeOf")
          );
        }
        function b(...h) {
          return JSON.stringify(h, (g, P) => {
            if (O(P)) {
              const s = {};
              return (
                Object.keys(P)
                  .sort()
                  .forEach((e) => {
                    s[e] = P[e];
                  }),
                s
              );
            }
            return P;
          });
        }
        var f = n(90626),
          m = n(7850);
        const v = (0, f.createContext)({ instances: {}, factories: {} });
        function y(h) {
          const { name: g, fnFactory: P, children: s } = h,
            e = React.useContext(v),
            [l] = useState({}),
            i = useMemo(
              () => ({
                instances: l,
                factories: { ...e.factories, [g]: P },
                parent: e,
              }),
              [l, g, e],
            );
          return jsx(v.Provider, { value: i, children: s });
        }
        function S(h, g) {
          var P;
          const s = (0, f.useContext)(v),
            e = typeof h == "string" ? h : b(...h);
          let l = s;
          for (; l; ) {
            if (e in l.instances) return l.instances[e];
            if (e in l.factories) break;
            l = l.parent;
          }
          const d = (
            (P = l == null ? void 0 : l.factories[e]) != null ? P : g
          )();
          return ((l != null ? l : s).instances[e] = d), d;
        }
      },
      5858: (C, I, n) => {
        n.d(I, { Z: () => i, dV: () => S.d, rO: () => l, tp: () => S.t });
        var r = n(14947),
          O = n(31561),
          b = n(85528),
          f = n(18210),
          m = n(99412),
          v = n(88363),
          y = n(3166),
          S = n(35413),
          h = Object.defineProperty,
          g = Object.getOwnPropertyDescriptor,
          P = (d, t, o) =>
            t in d
              ? h(d, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: o,
                })
              : (d[t] = o),
          s = (d, t, o, p) => {
            for (
              var a = p > 1 ? void 0 : p ? g(t, o) : t, _ = d.length - 1, c;
              _ >= 0;
              _--
            )
              (c = d[_]) && (a = (p ? c(t, o, a) : c(a)) || a);
            return p && a && h(t, o, a), a;
          },
          e = (d, t, o) => P(d, typeof t != "symbol" ? t + "" : t, o);
        function l(d) {
          let t = "offline";
          return (
            d &&
              (d.is_ingame
                ? (t = "ingame")
                : d.m_broadcastAccountId
                  ? (t = "watchingbroadcast")
                  : d.is_online && (t = "online"),
              d.is_awayOrSnooze && (t += " awayOrSnooze")),
            t
          );
        }
        class i {
          constructor(t) {
            e(this, "m_steamid"),
              e(this, "m_bInitialized", !1),
              e(this, "m_ePersonaState", m.cU3),
              e(this, "m_unGamePlayedAppID", 0),
              e(this, "m_gameid", "0"),
              e(this, "m_unPersonaStateFlags", 0),
              e(this, "m_strPlayerName", ""),
              e(this, "m_strAvatarHash", S.d),
              e(this, "m_strAccountName", ""),
              e(this, "m_rtLastSeenOnline", 0),
              e(this, "m_strGameExtraInfo", ""),
              e(this, "m_unGameServerIP", 0),
              e(this, "m_unGameServerPort", 0),
              e(this, "m_game_lobby_id", ""),
              e(this, "m_bPlayerNamePending", !1),
              e(this, "m_bAvatarPending", !1),
              e(this, "m_broadcastId"),
              e(this, "m_broadcastAccountId"),
              e(this, "m_broadcastAppId"),
              e(this, "m_broadcastViewerCount"),
              e(this, "m_strBroadcastTitle"),
              e(this, "m_bCommunityBanned"),
              e(this, "m_eGamingDeviceType", m.eSB),
              e(this, "m_mapRichPresence", r.sH.map()),
              e(this, "m_bNameInitialized", !1),
              e(this, "m_bStatusInitialized", !1),
              e(this, "m_strProfileURL"),
              (0, r.Gn)(this),
              (this.m_steamid = t);
          }
          Reset() {
            (this.m_ePersonaState = m.cU3),
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
              (this.m_eGamingDeviceType = m.eSB);
          }
          GetAccountID() {
            return this.m_steamid.GetAccountID();
          }
          GetSteamIDAsString() {
            return this.m_steamid.ConvertTo64BitString();
          }
          get is_online() {
            return (
              this.m_ePersonaState != m.cU3 && this.m_ePersonaState != m._3b
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
            var t;
            return (
              (((t = this.m_unPersonaStateFlags) != null ? t : 0) & v.Fj) != 0
            );
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
              this.m_ePersonaState == m.PrD || this.m_ePersonaState == m.vPz
            );
          }
          HasStateFlag(t) {
            var o;
            return (
              (((o = this.m_unPersonaStateFlags) != null ? o : 0) & t) != 0
            );
          }
          get last_seen_online() {
            return this.m_rtLastSeenOnline;
          }
          ClearStateOnDisconnect() {
            this.m_ePersonaState != m.cU3 && this.Reset();
          }
          get is_golden() {
            return this.HasStateFlag(v.Zx);
          }
          GetCurrentGameName() {
            return this.m_strGameExtraInfo
              ? this.m_strGameExtraInfo
              : this.m_unGamePlayedAppID
                ? b.Vw.GetAppInfo(this.m_unGamePlayedAppID).name
                : "";
          }
          GetCurrentGameIconURL() {
            return this.m_unGamePlayedAppID
              ? b.Vw.GetAppInfo(this.m_unGamePlayedAppID).icon_url
              : "";
          }
          BIsAppInfoReady() {
            return this.m_unGamePlayedAppID
              ? b.Vw.GetAppInfo(this.m_unGamePlayedAppID).is_initialized
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
              let t = b.Vw.GetRichPresenceLoc(this.m_unGamePlayedAppID);
              if (t) {
                let o = this.m_mapRichPresence.get("steam_display");
                return t.Localize(o, this.m_mapRichPresence);
              }
            } else if (this.HasStateFlag(v.o5))
              return (0, f.we)("#PersonaStateRemotePlayTogether");
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
            const t = 60,
              o = t * 60,
              p = o * 24;
            let a = 1e3;
            const _ =
              b.Vw.CMInterface.GetServerRTime32() - this.last_seen_online;
            return _ > p ? (a *= o) : _ > 2 * o ? (a *= t) : (a *= t / 4), a;
          }
          GetOfflineStatusTime() {
            if (this.last_seen_online == 0)
              return (0, f.we)("#PersonaStateOffline");
            let t = this.GetOfflineStatusUpdateRate();
            (!y.TS.IN_MOBILE || t <= 60) && (0, O.tB)(t);
            let o = b.Vw.CMInterface.GetServerRTime32() - this.last_seen_online;
            return o < 60
              ? (0, f.we)("#PersonaStateLastSeen_JustNow")
              : (0, f.we)("#PersonaStateLastSeen", (0, f.Hq)(o));
          }
          GetLocalizedOnlineStatus() {
            switch (this.m_ePersonaState) {
              case m.cU3:
              case m._3b:
                return this.GetOfflineStatusTime();
              case m.UXk:
                return (0, f.we)("#PersonaStateOnline");
              case m.wcG:
                return (0, f.we)("#PersonaStateBusy");
              case m.PrD:
                return (0, f.we)("#PersonaStateAway");
              case m.vPz:
                return (0, f.we)("#PersonaStateSnooze");
              case m.Hrn:
                return (0, f.we)("#PersonaStateLookingToTrade");
              case m.HAb:
                return (0, f.we)("#PersonaStateLookingToPlay");
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
            return this.m_strAvatarHash != S.d;
          }
          get avatar_url() {
            return (0, S.t)(this.m_strAvatarHash);
          }
          get avatar_url_medium() {
            return (0, S.t)(this.m_strAvatarHash, "medium");
          }
          get avatar_url_full() {
            return (0, S.t)(this.m_strAvatarHash, "full");
          }
          static SortStatusComparator(t, o, p) {
            if (o.has_public_party_beacon) {
              if (!p.has_public_party_beacon) return -1;
            } else {
              if (p.has_public_party_beacon) return 1;
              if (o.is_ingame)
                if (p.is_ingame)
                  if (t) {
                    if (o.is_awayOrSnooze) {
                      if (!p.is_awayOrSnooze) return 1;
                    } else if (p.is_awayOrSnooze) return -1;
                  } else return 0;
                else return -1;
              else if (p.is_ingame) return 1;
            }
            if (o.is_online) {
              if (!p.is_online) return -1;
            } else if (p.is_online) return 1;
            if (t) {
              if (o.is_awayOrSnooze) {
                if (!p.is_awayOrSnooze) return 1;
              } else if (p.is_awayOrSnooze) return -1;
            }
            return 0;
          }
          GetCommunityProfileURL() {
            return this.m_strProfileURL
              ? `${y.TS.COMMUNITY_BASE_URL}id/${this.m_strProfileURL}/`
              : `${y.TS.COMMUNITY_BASE_URL}profiles/${this.m_steamid.ConvertTo64BitString()}/`;
          }
        }
        s([r.sH], i.prototype, "m_bInitialized", 2),
          s([r.sH], i.prototype, "m_ePersonaState", 2),
          s([r.sH], i.prototype, "m_unGamePlayedAppID", 2),
          s([r.sH], i.prototype, "m_gameid", 2),
          s([r.sH], i.prototype, "m_unPersonaStateFlags", 2),
          s([r.sH], i.prototype, "m_strPlayerName", 2),
          s([r.sH], i.prototype, "m_strAvatarHash", 2),
          s([r.sH], i.prototype, "m_strAccountName", 2),
          s([r.sH], i.prototype, "m_rtLastSeenOnline", 2),
          s([r.sH], i.prototype, "m_strGameExtraInfo", 2),
          s([r.sH], i.prototype, "m_unGameServerIP", 2),
          s([r.sH], i.prototype, "m_unGameServerPort", 2),
          s([r.sH], i.prototype, "m_game_lobby_id", 2),
          s([r.sH], i.prototype, "m_bPlayerNamePending", 2),
          s([r.sH], i.prototype, "m_bAvatarPending", 2),
          s([r.sH], i.prototype, "m_broadcastId", 2),
          s([r.sH], i.prototype, "m_broadcastAccountId", 2),
          s([r.sH], i.prototype, "m_broadcastAppId", 2),
          s([r.sH], i.prototype, "m_broadcastViewerCount", 2),
          s([r.sH], i.prototype, "m_strBroadcastTitle", 2),
          s([r.sH], i.prototype, "m_bCommunityBanned", 2),
          s([r.sH], i.prototype, "m_eGamingDeviceType", 2),
          s([r.sH], i.prototype, "m_bNameInitialized", 2);
      },
      35098: (C, I, n) => {
        n.d(I, { hW: () => g, js: () => h });
        var r = n(90626),
          O = n(88942),
          b = n(99412),
          f = n(68312),
          m = n(15369),
          v = n(5858),
          y = n(76559),
          S = n(15860);
        function h(a) {
          const _ = (0, f.KV)(),
            c = r.useContext(l);
          return (0, O.I)(d(c, _, a));
        }
        function g(a) {
          const _ = r.useRef(void 0),
            c = h(a);
          return c.data
            ? c
            : (_.current ||
                (_.current = new v.Z(
                  typeof a == "string" ? new y.b(a) : y.b.InitFromAccountID(a),
                )),
              { ...c, data: _.current });
        }
        function P(a) {
          const _ = useActiveServiceTransport(),
            c = React.useContext(l);
          return useQueries({ queries: a.map((E) => d(c, _, E)) });
        }
        function s(a) {
          return ReactQueryClient.getQueryData(["PlayerSummary", a]);
        }
        function e(a) {
          const { loadPersonaState: _, children: c } = a,
            E = React.useMemo(() => ({ loadPersonaState: _ }), [_]);
          return React.createElement(l.Provider, { value: E }, c);
        }
        const l = r.createContext({
          loadPersonaState: async (a, _) => {
            if (a == null) return null;
            const c = await o(_).load(
              y.b.InitFromAccountID(a).ConvertTo64BitString(),
            );
            return p(y.b.InitFromAccountID(a), c);
          },
        });
        function i() {
          return React.useContext(l);
        }
        function d(a, _, c) {
          const E = typeof c == "string" ? new y.b(c).GetAccountID() : c;
          return {
            queryKey: ["PlayerSummary", E],
            queryFn: () => a.loadPersonaState(E, _),
            enabled: !!E,
          };
        }
        let t;
        function o(a) {
          return t != null ? t : (t = (0, S.c)(a));
        }
        function p(a, _) {
          var c, E;
          let D = new v.Z(a);
          const R = _ == null ? void 0 : _.public_data,
            u = _ == null ? void 0 : _.private_data;
          return (
            (D.m_bInitialized = !!_),
            (D.m_ePersonaState =
              (c = u == null ? void 0 : u.persona_state) != null ? c : b.cU3),
            (D.m_strAvatarHash =
              R != null && R.sha_digest_avatar
                ? (0, m.Kx)(R.sha_digest_avatar)
                : v.dV),
            (D.m_strPlayerName =
              (E = R == null ? void 0 : R.persona_name) != null
                ? E
                : a.ConvertTo64BitString()),
            (D.m_strAccountName = u == null ? void 0 : u.account_name),
            u != null &&
              u.persona_state_flags &&
              (D.m_unPersonaStateFlags =
                u == null ? void 0 : u.persona_state_flags),
            u != null &&
              u.game_id &&
              (D.m_gameid = u == null ? void 0 : u.game_id),
            u != null &&
              u.game_server_ip_address &&
              (D.m_unGameServerIP =
                u == null ? void 0 : u.game_server_ip_address),
            u != null &&
              u.lobby_steam_id &&
              (D.m_game_lobby_id = u == null ? void 0 : u.lobby_steam_id),
            u != null &&
              u.game_extra_info &&
              (D.m_strGameExtraInfo = u == null ? void 0 : u.game_extra_info),
            R != null && R.profile_url && (D.m_strProfileURL = R.profile_url),
            D
          );
        }
      },
    },
  ]);
})();

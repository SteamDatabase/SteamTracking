/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [5836],
  {
    45048: (e, t, a) => {
      a.r(t), a.d(t, { QAndARoutes: () => _, default: () => m });
      var n = a(28579),
        r = a(90626),
        i = a(92757),
        s = a(6813),
        o = a(97058);
      const _ = {
        Dashboard: (e) => `/questions/${e}/dashboard`,
        FullPageView: (e, t) => `/questions/${e}/view/${t}`,
      };
      const m = function (e) {
        return r.createElement(
          i.dO,
          null,
          r.createElement(i.qh, {
            path: _.Dashboard(":vanity_str"),
            render: (e) =>
              r.createElement(s.X, {
                config: {
                  "qanda-root": () => {
                    const { vanity_str: t } = e.match.params;
                    return r.createElement(n.xh, { vanity_str: t });
                  },
                },
              }),
          }),
          r.createElement(i.qh, {
            path: _.FullPageView(":vanity_str", ":session_gid"),
            render: (e) =>
              r.createElement(s.X, {
                config: {
                  "qanda-root": () => {
                    const { vanity_str: t, session_gid: a } = e.match.params;
                    return r.createElement(n.AC, { gidSession: a });
                  },
                },
              }),
          }),
          r.createElement(i.qh, { component: o.a }),
        );
      };
    },
    11333: (e, t, a) => {
      a.d(t, { L: () => _, c: () => o });
      var n = a(37735),
        r = a(49845),
        i = a(58632),
        s = a.n(i);
      function o(e, t) {
        return new (s())(
          async (t) => {
            const a = [...t],
              r = await n.xt.GetPlayerLinkDetails(e, { steamids: a }),
              i = new Map();
            return (
              r
                .Body()
                .accounts()
                .forEach((e) => {
                  const t = e.toObject();
                  i.set(t.public_data.steamid, t);
                }),
              a.map((e) => {
                var t;
                return null !== (t = i.get(e)) && void 0 !== t ? t : null;
              })
            );
          },
          { maxBatchSize: 100, cache: !1, ...t },
        );
      }
      function _(e) {
        return (0, r.V)("PlayerLinkDetails", () => o(e));
      }
    },
    49845: (e, t, a) => {
      function n(e) {
        return "[object Object]" === Object.prototype.toString.call(e);
      }
      function r(...e) {
        return JSON.stringify(e, (e, t) => {
          if (
            (function (e) {
              if (!n(e)) return !1;
              const t = e.constructor;
              if (void 0 === t) return !0;
              const a = t.prototype;
              return (
                !!n(a) &&
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
      var i = a(90626);
      const s = (0, i.createContext)({ instances: {}, factories: {} });
      function o(e, t) {
        var a;
        const n = (0, i.useContext)(s),
          o = "string" == typeof e ? e : r(...e);
        let _ = n;
        for (; _; ) {
          if (o in _.instances) return _.instances[o];
          if (o in _.factories) break;
          _ = _.parent;
        }
        const m = (
          null !== (a = null == _ ? void 0 : _.factories[o]) && void 0 !== a
            ? a
            : t
        )();
        return ((null != _ ? _ : n).instances[o] = m), m;
      }
    },
    10622: (e, t, a) => {
      a.d(t, { Z: () => d, dV: () => u.d, rO: () => c, tp: () => u.t });
      var n = a(34629),
        r = a(14947),
        i = a(31561),
        s = a(51006),
        o = a(61859),
        _ = a(22837),
        m = a(95679),
        l = a(78327),
        u = a(85044);
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
      class d {
        constructor(e) {
          (this.m_bInitialized = !1),
            (this.m_ePersonaState = _.p2.k_EPersonaStateOffline),
            (this.m_unGamePlayedAppID = 0),
            (this.m_gameid = "0"),
            (this.m_unPersonaStateFlags = 0),
            (this.m_strPlayerName = ""),
            (this.m_strAvatarHash = u.d),
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
            (this.m_eGamingDeviceType = _.zm.k_EGamingDeviceType_Unknown),
            (this.m_mapRichPresence = r.sH.map()),
            (this.m_bNameInitialized = !1),
            (this.m_bStatusInitialized = !1),
            (this.m_strProfileURL = void 0),
            (0, r.Gn)(this),
            (this.m_steamid = e);
        }
        Reset() {
          (this.m_ePersonaState = _.p2.k_EPersonaStateOffline),
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
            (this.m_eGamingDeviceType = _.zm.k_EGamingDeviceType_Unknown);
        }
        GetAccountID() {
          return this.m_steamid.GetAccountID();
        }
        get is_online() {
          return (
            this.m_ePersonaState != _.p2.k_EPersonaStateOffline &&
            this.m_ePersonaState != _.p2.k_EPersonaStateInvisible
          );
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
            ((null !== (e = this.m_unPersonaStateFlags) && void 0 !== e
              ? e
              : 0) &
              m.nE.k_EPersonaStateFlag_InJoinableGame)
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
          return (
            this.m_ePersonaState == _.p2.k_EPersonaStateAway ||
            this.m_ePersonaState == _.p2.k_EPersonaStateSnooze
          );
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
          this.m_ePersonaState != _.p2.k_EPersonaStateOffline && this.Reset();
        }
        get is_golden() {
          return this.HasStateFlag(m.nE.k_EPersonaStateFlag_Golden);
        }
        GetCurrentGameName() {
          return this.m_strGameExtraInfo
            ? this.m_strGameExtraInfo
            : this.m_unGamePlayedAppID
              ? s.Vw.GetAppInfo(this.m_unGamePlayedAppID).name
              : "";
        }
        GetCurrentGameIconURL() {
          return this.m_unGamePlayedAppID
            ? s.Vw.GetAppInfo(this.m_unGamePlayedAppID).icon_url
            : "";
        }
        BIsAppInfoReady() {
          return (
            !this.m_unGamePlayedAppID ||
            s.Vw.GetAppInfo(this.m_unGamePlayedAppID).is_initialized
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
            let e = s.Vw.GetRichPresenceLoc(this.m_unGamePlayedAppID);
            if (e) {
              let t = this.m_mapRichPresence.get("steam_display");
              return e.Localize(t, this.m_mapRichPresence);
            }
          } else if (
            this.HasStateFlag(m.nE.k_EPersonaStateFlag_RemotePlayTogether)
          )
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
          const a = s.Vw.CMInterface.GetServerRTime32() - this.last_seen_online;
          return (t *= a > 86400 ? e : a > 7200 ? 60 : 15), t;
        }
        GetOfflineStatusTime() {
          if (0 == this.last_seen_online)
            return (0, o.we)("#PersonaStateOffline");
          let e = this.GetOfflineStatusUpdateRate();
          (!l.TS.IN_MOBILE || e <= 60) && (0, i.tB)(e);
          let t = s.Vw.CMInterface.GetServerRTime32() - this.last_seen_online;
          return t < 60
            ? (0, o.we)("#PersonaStateLastSeen_JustNow")
            : (0, o.we)("#PersonaStateLastSeen", (0, o.Hq)(t));
        }
        GetLocalizedOnlineStatus() {
          switch (this.m_ePersonaState) {
            case _.p2.k_EPersonaStateOffline:
            case _.p2.k_EPersonaStateInvisible:
              return this.GetOfflineStatusTime();
            case _.p2.k_EPersonaStateOnline:
              return (0, o.we)("#PersonaStateOnline");
            case _.p2.k_EPersonaStateBusy:
              return (0, o.we)("#PersonaStateBusy");
            case _.p2.k_EPersonaStateAway:
              return (0, o.we)("#PersonaStateAway");
            case _.p2.k_EPersonaStateSnooze:
              return (0, o.we)("#PersonaStateSnooze");
            case _.p2.k_EPersonaStateLookingToTrade:
              return (0, o.we)("#PersonaStateLookingToTrade");
            case _.p2.k_EPersonaStateLookingToPlay:
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
            ? `${l.TS.COMMUNITY_BASE_URL}id/${this.m_strProfileURL}/`
            : `${l.TS.COMMUNITY_BASE_URL}profiles/${this.m_steamid.ConvertTo64BitString()}/`;
        }
      }
      (0, n.Cg)([r.sH], d.prototype, "m_bInitialized", void 0),
        (0, n.Cg)([r.sH], d.prototype, "m_ePersonaState", void 0),
        (0, n.Cg)([r.sH], d.prototype, "m_unGamePlayedAppID", void 0),
        (0, n.Cg)([r.sH], d.prototype, "m_gameid", void 0),
        (0, n.Cg)([r.sH], d.prototype, "m_unPersonaStateFlags", void 0),
        (0, n.Cg)([r.sH], d.prototype, "m_strPlayerName", void 0),
        (0, n.Cg)([r.sH], d.prototype, "m_strAvatarHash", void 0),
        (0, n.Cg)([r.sH], d.prototype, "m_strAccountName", void 0),
        (0, n.Cg)([r.sH], d.prototype, "m_rtLastSeenOnline", void 0),
        (0, n.Cg)([r.sH], d.prototype, "m_strGameExtraInfo", void 0),
        (0, n.Cg)([r.sH], d.prototype, "m_unGameServerIP", void 0),
        (0, n.Cg)([r.sH], d.prototype, "m_unGameServerPort", void 0),
        (0, n.Cg)([r.sH], d.prototype, "m_game_lobby_id", void 0),
        (0, n.Cg)([r.sH], d.prototype, "m_bPlayerNamePending", void 0),
        (0, n.Cg)([r.sH], d.prototype, "m_bAvatarPending", void 0),
        (0, n.Cg)([r.sH], d.prototype, "m_broadcastId", void 0),
        (0, n.Cg)([r.sH], d.prototype, "m_broadcastAccountId", void 0),
        (0, n.Cg)([r.sH], d.prototype, "m_broadcastAppId", void 0),
        (0, n.Cg)([r.sH], d.prototype, "m_broadcastViewerCount", void 0),
        (0, n.Cg)([r.sH], d.prototype, "m_strBroadcastTitle", void 0),
        (0, n.Cg)([r.sH], d.prototype, "m_bCommunityBanned", void 0),
        (0, n.Cg)([r.sH], d.prototype, "m_eGamingDeviceType", void 0),
        (0, n.Cg)([r.sH], d.prototype, "m_bNameInitialized", void 0);
    },
    41471: (e, t, a) => {
      a.d(t, { hW: () => c, js: () => u });
      var n = a(90626),
        r = a(88942),
        i = a(22837),
        s = a(23809),
        o = a(44654),
        _ = a(10622),
        m = a(17720),
        l = a(11333);
      function u(e) {
        const t = (0, s.KV)(),
          a = n.useContext(d);
        return (0, r.I)(p(a, t, e));
      }
      function c(e) {
        const t = n.useRef(void 0),
          a = u(e);
        return a.data
          ? a
          : (t.current ||
              (t.current = new _.Z(
                "string" == typeof e ? new m.b(e) : m.b.InitFromAccountID(e),
              )),
            { ...a, data: t.current });
      }
      const d = n.createContext({
        loadPersonaState: async (e, t) => {
          if (null == e) return null;
          const a = await (function (e) {
            return null != h ? h : (h = (0, l.c)(e));
          })(t).load(m.b.InitFromAccountID(e).ConvertTo64BitString());
          return (function (e, t) {
            var a, n;
            let r = new _.Z(e);
            const s = null == t ? void 0 : t.public_data,
              m = null == t ? void 0 : t.private_data;
            (r.m_bInitialized = !!t),
              (r.m_ePersonaState =
                null !== (a = null == m ? void 0 : m.persona_state) &&
                void 0 !== a
                  ? a
                  : i.p2.k_EPersonaStateOffline),
              (r.m_strAvatarHash = (null == s ? void 0 : s.sha_digest_avatar)
                ? (0, o.Kx)(s.sha_digest_avatar)
                : _.dV),
              (r.m_strPlayerName =
                null !== (n = null == s ? void 0 : s.persona_name) &&
                void 0 !== n
                  ? n
                  : e.ConvertTo64BitString()),
              (r.m_strAccountName = null == m ? void 0 : m.account_name),
              (null == m ? void 0 : m.persona_state_flags) &&
                (r.m_unPersonaStateFlags =
                  null == m ? void 0 : m.persona_state_flags);
            (null == m ? void 0 : m.game_id) &&
              (r.m_gameid = null == m ? void 0 : m.game_id);
            (null == m ? void 0 : m.game_server_ip_address) &&
              (r.m_unGameServerIP =
                null == m ? void 0 : m.game_server_ip_address);
            (null == m ? void 0 : m.lobby_steam_id) &&
              (r.m_game_lobby_id = null == m ? void 0 : m.lobby_steam_id);
            (null == m ? void 0 : m.game_extra_info) &&
              (r.m_strGameExtraInfo = null == m ? void 0 : m.game_extra_info);
            (null == s ? void 0 : s.profile_url) &&
              (r.m_strProfileURL = s.profile_url);
            return r;
          })(m.b.InitFromAccountID(e), a);
        },
      });
      function p(e, t, a) {
        const n = "string" == typeof a ? new m.b(a).GetAccountID() : a;
        return {
          queryKey: ["PlayerSummary", n],
          queryFn: () => e.loadPersonaState(n, t),
          enabled: !!n,
        };
      }
      let h;
    },
  },
]);

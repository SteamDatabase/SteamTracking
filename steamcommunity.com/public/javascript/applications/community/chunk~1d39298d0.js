/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [4072],
  {
    11333: (e, t, a) => {
      a.d(t, { L: () => _, c: () => o });
      var r = a(78619),
        n = a(49845),
        i = a(58632),
        s = a.n(i);
      function o(e, t) {
        return new (s())(
          async (t) => {
            const a = [...t],
              n = await r.xtC.GetPlayerLinkDetails(e, { steamids: a }),
              i = new Map();
            return (
              n
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
        return (0, n.V)("PlayerLinkDetails", () => o(e));
      }
    },
    38924: (e, t, a) => {
      a.d(t, {
        Fj: () => r,
        R$: () => s,
        Zx: () => n,
        hs: () => _,
        o5: () => i,
        sr: () => o,
      });
      const r = 2,
        n = 4,
        i = 8,
        s = 512,
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
      var i = a(90626);
      a(7850);
      const s = (0, i.createContext)({ instances: {}, factories: {} });
      function o(e, t) {
        var a;
        const r = (0, i.useContext)(s),
          o = "string" == typeof e ? e : n(...e);
        let _ = r;
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
        return ((null != _ ? _ : r).instances[o] = m), m;
      }
    },
    10622: (e, t, a) => {
      a.d(t, { Z: () => d, dV: () => c.d, rO: () => l, tp: () => c.t });
      var r = a(34629),
        n = a(14947),
        i = a(31561),
        s = a(51006),
        o = a(61859),
        _ = a(22837),
        m = a(38924),
        u = a(78327),
        c = a(85044);
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
      class d {
        constructor(e) {
          (this.m_bInitialized = !1),
            (this.m_ePersonaState = _.cU3),
            (this.m_unGamePlayedAppID = 0),
            (this.m_gameid = "0"),
            (this.m_unPersonaStateFlags = 0),
            (this.m_strPlayerName = ""),
            (this.m_strAvatarHash = c.d),
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
            (this.m_eGamingDeviceType = _.eSB),
            (this.m_mapRichPresence = n.sH.map()),
            (this.m_bNameInitialized = !1),
            (this.m_bStatusInitialized = !1),
            (this.m_strProfileURL = void 0),
            (0, n.Gn)(this),
            (this.m_steamid = e);
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
          var e;
          return (
            0 !=
            ((null !== (e = this.m_unPersonaStateFlags) && void 0 !== e
              ? e
              : 0) &
              m.Fj)
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
          return this.m_ePersonaState == _.PrD || this.m_ePersonaState == _.vPz;
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
          this.m_ePersonaState != _.cU3 && this.Reset();
        }
        get is_golden() {
          return this.HasStateFlag(m.Zx);
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
          const a = s.Vw.CMInterface.GetServerRTime32() - this.last_seen_online;
          return (t *= a > 86400 ? e : a > 7200 ? 60 : 15), t;
        }
        GetOfflineStatusTime() {
          if (0 == this.last_seen_online)
            return (0, o.we)("#PersonaStateOffline");
          let e = this.GetOfflineStatusUpdateRate();
          (!u.TS.IN_MOBILE || e <= 60) && (0, i.tB)(e);
          let t = s.Vw.CMInterface.GetServerRTime32() - this.last_seen_online;
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
          return this.m_strAvatarHash != c.d;
        }
        get avatar_url() {
          return (0, c.t)(this.m_strAvatarHash);
        }
        get avatar_url_medium() {
          return (0, c.t)(this.m_strAvatarHash, "medium");
        }
        get avatar_url_full() {
          return (0, c.t)(this.m_strAvatarHash, "full");
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
            ? `${u.TS.COMMUNITY_BASE_URL}id/${this.m_strProfileURL}/`
            : `${u.TS.COMMUNITY_BASE_URL}profiles/${this.m_steamid.ConvertTo64BitString()}/`;
        }
      }
      (0, r.Cg)([n.sH], d.prototype, "m_bInitialized", void 0),
        (0, r.Cg)([n.sH], d.prototype, "m_ePersonaState", void 0),
        (0, r.Cg)([n.sH], d.prototype, "m_unGamePlayedAppID", void 0),
        (0, r.Cg)([n.sH], d.prototype, "m_gameid", void 0),
        (0, r.Cg)([n.sH], d.prototype, "m_unPersonaStateFlags", void 0),
        (0, r.Cg)([n.sH], d.prototype, "m_strPlayerName", void 0),
        (0, r.Cg)([n.sH], d.prototype, "m_strAvatarHash", void 0),
        (0, r.Cg)([n.sH], d.prototype, "m_strAccountName", void 0),
        (0, r.Cg)([n.sH], d.prototype, "m_rtLastSeenOnline", void 0),
        (0, r.Cg)([n.sH], d.prototype, "m_strGameExtraInfo", void 0),
        (0, r.Cg)([n.sH], d.prototype, "m_unGameServerIP", void 0),
        (0, r.Cg)([n.sH], d.prototype, "m_unGameServerPort", void 0),
        (0, r.Cg)([n.sH], d.prototype, "m_game_lobby_id", void 0),
        (0, r.Cg)([n.sH], d.prototype, "m_bPlayerNamePending", void 0),
        (0, r.Cg)([n.sH], d.prototype, "m_bAvatarPending", void 0),
        (0, r.Cg)([n.sH], d.prototype, "m_broadcastId", void 0),
        (0, r.Cg)([n.sH], d.prototype, "m_broadcastAccountId", void 0),
        (0, r.Cg)([n.sH], d.prototype, "m_broadcastAppId", void 0),
        (0, r.Cg)([n.sH], d.prototype, "m_broadcastViewerCount", void 0),
        (0, r.Cg)([n.sH], d.prototype, "m_strBroadcastTitle", void 0),
        (0, r.Cg)([n.sH], d.prototype, "m_bCommunityBanned", void 0),
        (0, r.Cg)([n.sH], d.prototype, "m_eGamingDeviceType", void 0),
        (0, r.Cg)([n.sH], d.prototype, "m_bNameInitialized", void 0);
    },
    41471: (e, t, a) => {
      a.d(t, { hW: () => l, js: () => c });
      var r = a(90626),
        n = a(88942),
        i = a(22837),
        s = a(23809),
        o = a(44654),
        _ = a(10622),
        m = a(17720),
        u = a(11333);
      function c(e) {
        const t = (0, s.KV)(),
          a = r.useContext(d);
        return (0, n.I)(h(a, t, e));
      }
      function l(e) {
        const t = r.useRef(void 0),
          a = c(e);
        return a.data
          ? a
          : (t.current ||
              (t.current = new _.Z(
                "string" == typeof e ? new m.b(e) : m.b.InitFromAccountID(e),
              )),
            { ...a, data: t.current });
      }
      const d = r.createContext({
        loadPersonaState: async (e, t) => {
          if (null == e) return null;
          const a = await (function (e) {
            return null != p ? p : (p = (0, u.c)(e));
          })(t).load(m.b.InitFromAccountID(e).ConvertTo64BitString());
          return (function (e, t) {
            var a, r;
            let n = new _.Z(e);
            const s = null == t ? void 0 : t.public_data,
              m = null == t ? void 0 : t.private_data;
            (n.m_bInitialized = !!t),
              (n.m_ePersonaState =
                null !== (a = null == m ? void 0 : m.persona_state) &&
                void 0 !== a
                  ? a
                  : i.cU3),
              (n.m_strAvatarHash = (null == s ? void 0 : s.sha_digest_avatar)
                ? (0, o.Kx)(s.sha_digest_avatar)
                : _.dV),
              (n.m_strPlayerName =
                null !== (r = null == s ? void 0 : s.persona_name) &&
                void 0 !== r
                  ? r
                  : e.ConvertTo64BitString()),
              (n.m_strAccountName = null == m ? void 0 : m.account_name),
              (null == m ? void 0 : m.persona_state_flags) &&
                (n.m_unPersonaStateFlags =
                  null == m ? void 0 : m.persona_state_flags);
            (null == m ? void 0 : m.game_id) &&
              (n.m_gameid = null == m ? void 0 : m.game_id);
            (null == m ? void 0 : m.game_server_ip_address) &&
              (n.m_unGameServerIP =
                null == m ? void 0 : m.game_server_ip_address);
            (null == m ? void 0 : m.lobby_steam_id) &&
              (n.m_game_lobby_id = null == m ? void 0 : m.lobby_steam_id);
            (null == m ? void 0 : m.game_extra_info) &&
              (n.m_strGameExtraInfo = null == m ? void 0 : m.game_extra_info);
            (null == s ? void 0 : s.profile_url) &&
              (n.m_strProfileURL = s.profile_url);
            return n;
          })(m.b.InitFromAccountID(e), a);
        },
      });
      function h(e, t, a) {
        const r = "string" == typeof a ? new m.b(a).GetAccountID() : a;
        return {
          queryKey: ["PlayerSummary", r],
          queryFn: () => e.loadPersonaState(r, t),
          enabled: !!r,
        };
      }
      let p;
    },
  },
]);

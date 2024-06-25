/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [5631],
  {
    42411: (e, t, r) => {
      r.d(t, { Pv: () => u, WV: () => l.W, sB: () => p });
      var a = r(85556),
        i = r(54842),
        s = r(24289),
        n = r(45944),
        c = r(31846),
        o = r(37563),
        l = r(48760);
      function p(e) {
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
      class u {
        m_steamid;
        m_bInitialized = !1;
        m_ePersonaState = 0;
        m_unGamePlayedAppID = 0;
        m_gameid = "0";
        m_unPersonaStateFlags = 0;
        m_strPlayerName = "";
        m_strAvatarHash = l.W;
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
        m_mapRichPresence = i.LO.map();
        m_bNameInitialized = !1;
        m_bStatusInitialized = !1;
        m_strProfileURL = void 0;
        constructor(e) {
          (0, i.rC)(this), (this.m_steamid = e);
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
              ? n.Q8.GetAppInfo(this.m_unGamePlayedAppID).name
              : "";
        }
        GetCurrentGameIconURL() {
          return this.m_unGamePlayedAppID
            ? n.Q8.GetAppInfo(this.m_unGamePlayedAppID).icon_url
            : "";
        }
        GetCurrentGameLogoURL() {
          return this.m_unGamePlayedAppID
            ? n.Q8.GetAppInfo(this.m_unGamePlayedAppID).logo_url
            : "";
        }
        GetBroadcastGameLogoURL() {
          return this.m_broadcastAppId
            ? n.Q8.GetAppInfo(this.m_broadcastAppId).logo_url
            : "";
        }
        BIsAppInfoReady() {
          return (
            !this.m_unGamePlayedAppID ||
            n.Q8.GetAppInfo(this.m_unGamePlayedAppID).is_initialized
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
            let e = n.Q8.GetRichPresenceLoc(this.m_unGamePlayedAppID);
            if (e) {
              let t = this.m_mapRichPresence.get("steam_display");
              return e.Localize(t, this.m_mapRichPresence);
            }
          } else if (this.HasStateFlag(8))
            return (0, c.Xx)("#PersonaStateRemotePlayTogether");
          return "";
        }
        GetOfflineStatusUpdateRate() {
          if (0 == this.last_seen_online) return 3e4;
          const e = 3600;
          let t = 1e3;
          const r = n.Q8.CMInterface.GetServerRTime32() - this.last_seen_online;
          return (t *= r > 86400 ? e : r > 7200 ? 60 : 15), t;
        }
        GetOfflineStatusTime() {
          if (0 == this.last_seen_online)
            return (0, c.Xx)("#PersonaStateOffline");
          let e = this.GetOfflineStatusUpdateRate();
          (!o.De.IN_MOBILE || e <= 60) && (0, s.zO)(e);
          let t = n.Q8.CMInterface.GetServerRTime32() - this.last_seen_online;
          return t < 60
            ? (0, c.Xx)("#PersonaStateLastSeen_JustNow")
            : (0, c.Xx)("#PersonaStateLastSeen", (0, c.yW)(t));
        }
        GetLocalizedOnlineStatus() {
          switch (this.m_ePersonaState) {
            case 0:
            case 7:
              return this.GetOfflineStatusTime();
            case 1:
              return (0, c.Xx)("#PersonaStateOnline");
            case 2:
              return (0, c.Xx)("#PersonaStateBusy");
            case 3:
              return (0, c.Xx)("#PersonaStateAway");
            case 4:
              return (0, c.Xx)("#PersonaStateSnooze");
            case 5:
              return (0, c.Xx)("#PersonaStateLookingToTrade");
            case 6:
              return (0, c.Xx)("#PersonaStateLookingToPlay");
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
        static SortStatusComparator(e, t, r) {
          if (t.has_public_party_beacon) {
            if (!r.has_public_party_beacon) return -1;
          } else {
            if (r.has_public_party_beacon) return 1;
            if (t.is_ingame) {
              if (!r.is_ingame) return -1;
              if (!e) return 0;
              if (t.is_awayOrSnooze) {
                if (!r.is_awayOrSnooze) return 1;
              } else if (r.is_awayOrSnooze) return -1;
            } else if (r.is_ingame) return 1;
          }
          if (t.is_online) {
            if (!r.is_online) return -1;
          } else if (r.is_online) return 1;
          if (e)
            if (t.is_awayOrSnooze) {
              if (!r.is_awayOrSnooze) return 1;
            } else if (r.is_awayOrSnooze) return -1;
          return 0;
        }
        GetCommunityProfileURL() {
          return this.m_strProfileURL
            ? `${o.De.COMMUNITY_BASE_URL}id/${this.m_strProfileURL}/`
            : `${o.De.COMMUNITY_BASE_URL}profiles/${this.m_steamid.ConvertTo64BitString()}/`;
        }
      }
      (0, a.gn)([i.LO], u.prototype, "m_bInitialized", void 0),
        (0, a.gn)([i.LO], u.prototype, "m_ePersonaState", void 0),
        (0, a.gn)([i.LO], u.prototype, "m_unGamePlayedAppID", void 0),
        (0, a.gn)([i.LO], u.prototype, "m_gameid", void 0),
        (0, a.gn)([i.LO], u.prototype, "m_unPersonaStateFlags", void 0),
        (0, a.gn)([i.LO], u.prototype, "m_strPlayerName", void 0),
        (0, a.gn)([i.LO], u.prototype, "m_strAvatarHash", void 0),
        (0, a.gn)([i.LO], u.prototype, "m_strAccountName", void 0),
        (0, a.gn)([i.LO], u.prototype, "m_rtLastSeenOnline", void 0),
        (0, a.gn)([i.LO], u.prototype, "m_strGameExtraInfo", void 0),
        (0, a.gn)([i.LO], u.prototype, "m_unGameServerIP", void 0),
        (0, a.gn)([i.LO], u.prototype, "m_unGameServerPort", void 0),
        (0, a.gn)([i.LO], u.prototype, "m_game_lobby_id", void 0),
        (0, a.gn)([i.LO], u.prototype, "m_bPlayerNamePending", void 0),
        (0, a.gn)([i.LO], u.prototype, "m_bAvatarPending", void 0),
        (0, a.gn)([i.LO], u.prototype, "m_broadcastId", void 0),
        (0, a.gn)([i.LO], u.prototype, "m_broadcastAccountId", void 0),
        (0, a.gn)([i.LO], u.prototype, "m_broadcastAppId", void 0),
        (0, a.gn)([i.LO], u.prototype, "m_broadcastViewerCount", void 0),
        (0, a.gn)([i.LO], u.prototype, "m_strBroadcastTitle", void 0),
        (0, a.gn)([i.LO], u.prototype, "m_bCommunityBanned", void 0);
    },
    51915: (e, t, r) => {
      r.d(t, { IE: () => _, Qv: () => g, vP: () => P });
      var a = r(73799),
        i = r.n(a),
        s = r(47427),
        n = r(42718),
        c = r(79545),
        o = r(40057),
        l = r(90938),
        p = r(42411),
        u = r(35427),
        m = r(82182),
        d = r(2041);
      function _(e) {
        const t = (0, o.bY)(),
          r = s.useContext(h);
        return (0, n.useQuery)(f(r, t, e));
      }
      function P(e) {
        const t = (0, o.bY)(),
          r = s.useContext(h);
        return (0, n.useQueries)(e.map((e) => f(r, t, e)));
      }
      function g(e) {
        return d.U.getQueryData(["PlayerSummary", e]);
      }
      const h = s.createContext({
        loadPersonaState: async (e, t) => {
          if (null == e) return null;
          const r = await (function (e) {
            y ||
              (y = new (i())(
                async (t) => {
                  const r = c.gA.Init(m.oh);
                  r.Body().set_steamids(
                    t.map((e) =>
                      u.K.InitFromAccountID(e).ConvertTo64BitString(),
                    ),
                  );
                  const a = await m.lk.GetPlayerLinkDetails(e, r);
                  if (!a.BSuccess())
                    throw `Failed to load player link details: ${a.GetErrorMessage()}`;
                  const i = new Map();
                  return (
                    a
                      .Body()
                      .accounts()
                      .forEach((e) => {
                        const t = e.toObject();
                        i.set(
                          new u.K(t.public_data?.steamid).GetAccountID(),
                          t,
                        );
                      }),
                    t.map((e) => i.get(e))
                  );
                },
                { maxBatchSize: 100 },
              ));
            return y;
          })(t).load(e);
          return (function (e, t) {
            let r = new p.Pv(e);
            const a = t?.public_data,
              i = t?.private_data;
            (r.m_bInitialized = !!t),
              (r.m_ePersonaState = i?.persona_state ?? 0),
              (r.m_strAvatarHash = a?.sha_digest_avatar
                ? (0, l.BH)(a.sha_digest_avatar)
                : p.WV),
              (r.m_strPlayerName = a?.persona_name ?? e.ConvertTo64BitString()),
              (r.m_strAccountName = i?.account_name),
              i?.persona_state_flags &&
                (r.m_unPersonaStateFlags = i?.persona_state_flags);
            i?.game_id && (r.m_gameid = i?.game_id);
            i?.game_server_ip_address &&
              (r.m_unGameServerIP = i?.game_server_ip_address);
            i?.lobby_steam_id && (r.m_game_lobby_id = i?.lobby_steam_id);
            i?.game_extra_info && (r.m_strGameExtraInfo = i?.game_extra_info);
            a?.profile_url && (r.m_strProfileURL = a.profile_url);
            return r;
          })(u.K.InitFromAccountID(e), r);
        },
      });
      function f(e, t, r) {
        const a = "string" == typeof r ? new u.K(r).GetAccountID() : r;
        return {
          queryKey: ["PlayerSummary", a],
          queryFn: () => e.loadPersonaState(a, t),
          enabled: !!a,
        };
      }
      let y;
    },
    9781: (e, t, r) => {
      r.d(t, { N: () => p, a: () => l });
      var a = r(47427),
        i = r(77581),
        s = r(15690),
        n = r(29480),
        c = r(62210),
        o = r(37563);
      async function l(e = !1) {
        if (e && s.Z.BIsInitialized()) return;
        const t = (0, o.kQ)("partnerbrowse_webapi_token", "application_config");
        (0, c.X)(Boolean(t), "require partnerbrowse_webapi_token");
        const r = new i.J(o.De.WEBAPI_BASE_URL, t);
        return (
          ("dev" != o.De.WEB_UNIVERSE && "beta" != o.De.WEB_UNIVERSE) ||
            console.log(
              "DEV_DEBUG: Initializing CStoreItemCache with access token",
              t,
            ),
          s.Z.Initialize(r, o.L7.is_partner_member)
        );
      }
      function p() {
        const e = (0, n.T)("usePartnerStoreBrowseAPI"),
          [t, r] = (0, a.useState)(!1);
        return (
          (0, a.useEffect)(() => {
            l().then(() => {
              e?.token?.reason || r(!0);
            });
          }, []),
          t
        );
      }
    },
    98061: (e, t, r) => {
      r.d(t, {
        $D: () => P,
        AM: () => _,
        Gd: () => d,
        MQ: () => l,
        NR: () => u,
        ew: () => c,
        vB: () => m,
        z: () => p,
      });
      var a = r(47427),
        i = r(45492),
        s = r(20417),
        n = r(37563);
      const c = "pn";
      class o {
        m_rgPackageIDs;
        m_rgPackageData;
        m_mapPackageData;
        m_rgVisiblePackageIDs = [];
        m_visiblePackageIDsCallbackList = new i.pB();
        static s_Singleton;
        static Get() {
          return (
            o.s_Singleton || ((o.s_Singleton = new o()), o.s_Singleton.Init()),
            o.s_Singleton
          );
        }
        constructor() {
          "dev" == n.De.WEB_UNIVERSE && (window.g_PackageGridStore = this);
        }
        Init() {
          let e = (0, n.kQ)("package_data", "application_config");
          e
            ? ((this.m_rgPackageIDs = e.map((e) => e.packageid)),
              (this.m_rgPackageData = e),
              (this.m_mapPackageData = new Map(e.map((e) => [e.packageid, e]))))
            : ((this.m_rgPackageIDs = (0, n.kQ)(
                "package_ids",
                "application_config",
              )),
              (this.m_mapPackageData = new Map())),
            ("dev" != n.De.WEB_UNIVERSE && "beta" != n.De.WEB_UNIVERSE) ||
              console.log(
                "DEV_DEBUG: CPackageGridStore loading payload: ",
                this.m_rgPackageIDs,
              ),
            "dev" != n.De.WEB_UNIVERSE ||
              Array.isArray(this.m_rgPackageIDs) ||
              console.error("CPackageGridStore Invalid payload");
        }
        UpdatePackageNameSearchState(e) {
          const t = e.getHeaderFilterValue("packageName"),
            r = new URL(window.location.href);
          t != decodeURIComponent(r.searchParams.get(c)) &&
            (t
              ? r.searchParams.set(c, encodeURIComponent(t))
              : r.searchParams.delete(c),
            window.history.replaceState({}, "", r.toString()));
        }
        UpdateVisiblePackageList(e) {
          const t = e.getGroups("visible").filter((e) => e.isVisible());
          (this.m_rgVisiblePackageIDs = []),
            t.forEach((e) =>
              e
                .getRows()
                .forEach((e) =>
                  this.m_rgVisiblePackageIDs.push(e.getData().packageID),
                ),
            ),
            this.m_visiblePackageIDsCallbackList.Dispatch(
              this.m_rgVisiblePackageIDs,
            ),
            this.UpdatePackageNameSearchState(e);
        }
      }
      function l() {
        return o.Get().m_rgPackageIDs;
      }
      function p() {
        return o.Get().m_rgPackageIDs;
      }
      function u() {
        return o.Get().m_rgPackageData;
      }
      function m(e) {
        let t = o.Get().m_mapPackageData.get(e);
        return t ? t.package_name : e.toString();
      }
      function d() {
        return a.useCallback((e) => o.Get().UpdateVisiblePackageList(e), []);
      }
      function _() {
        const [e, t] = a.useState(o.Get().m_rgVisiblePackageIDs);
        return (0, s.Qg)(o.Get().m_visiblePackageIDsCallbackList, t), e;
      }
      function P() {
        return a.useMemo(
          () => (0, n.kQ)("publisherid", "application_config"),
          [],
        );
      }
    },
    66263: (e, t, r) => {
      r.d(t, {
        $w: () => K,
        AN: () => $,
        FR: () => v,
        HV: () => y,
        HX: () => T,
        OB: () => Q,
        OG: () => F,
        Ol: () => I,
        PP: () => k,
        R2: () => M,
        Rs: () => x,
        Tj: () => S,
        We: () => j,
        X1: () => w,
        _w: () => f,
        bS: () => W,
        dU: () => C,
        df: () => z,
        h3: () => A,
        j_: () => X,
        ju: () => R,
        np: () => Y,
        on: () => N,
        ps: () => B,
        qH: () => L,
        rX: () => E,
        sN: () => q,
        tu: () => O,
        uT: () => H,
        xm: () => Z,
        yh: () => V,
      });
      var a = r(85556),
        i = r(80751),
        s = r.n(i),
        n = r(47427),
        c = r(54842),
        o = r(16649),
        l = r(45492),
        p = r(20417),
        u = r(45284),
        m = r(37563),
        d = r(98061),
        _ = r(30750),
        P = r(62210);
      class g {
        m_mapPackagePrice = new Map();
        m_setRecurringSubscriptions = new Set();
        m_mapPriceProposals = new Map();
        m_mapLocalPackagePriceOverrides = new Map();
        m_mapPriceGridCellCallbackList = new Map();
        m_mapPackageOverridesCallbackList = new Map();
        m_allPriceOverridesCallbackList = new l.pB();
        m_mapOverridesPerPriceKey = new Map();
        m_mapCurrencyData = new Map();
        m_mapPriceKeyDescriptions = new Map();
        m_rgKnownPriceKeys;
        m_mapPriceGuidelines = new Map();
        m_rgPriceLevels = [];
        m_strDisplayPriceKey = "USD";
        m_displayPriceKeyCallbackList = new l.pB();
        static s_Singleton;
        static Get() {
          return (
            g.s_Singleton || ((g.s_Singleton = new g()), g.s_Singleton.Init()),
            g.s_Singleton
          );
        }
        constructor() {
          (0, c.rC)(this),
            "dev" == m.De.WEB_UNIVERSE && (window.g_PackagePricingStore = this);
        }
        Init() {
          const e = new Set(),
            t = (0, m.kQ)("base_prices", "application_config");
          if (
            (("dev" != m.De.WEB_UNIVERSE && "beta" != m.De.WEB_UNIVERSE) ||
              console.log(
                "DEV_DEBUG: CPackagePricingStore loading base price payload: ",
                t,
              ),
            t)
          )
            if (this.BIsPricePayloadValid(t))
              for (let r in t) {
                const a = t[r],
                  i = parseInt(r),
                  s = new Map();
                this.m_mapPackagePrice.set(i, s);
                for (let t in a) e.add(t.toUpperCase()), s.set(t, a[t]);
              }
            else
              "dev" == m.De.WEB_UNIVERSE &&
                console.error("Invalid base price payload");
          const r = (0, m.kQ)("recurring_subs", "application_config");
          if (
            (("dev" != m.De.WEB_UNIVERSE && "beta" != m.De.WEB_UNIVERSE) ||
              console.log(
                "DEV_DEBUG: CPackagePricingStore loading recurring subscriptions payload: ",
                r,
              ),
            r)
          )
            if (Array.isArray(r))
              for (const e of r) this.m_setRecurringSubscriptions.add(e);
            else
              "dev" == m.De.WEB_UNIVERSE &&
                console.error("Invalid recurring subscriptions payload");
          const a = (0, m.kQ)("pending_proposals", "application_config");
          if (
            (("dev" != m.De.WEB_UNIVERSE && "beta" != m.De.WEB_UNIVERSE) ||
              console.log(
                "DEV_DEBUG: CPackagePricingStore loading pending price proposal payload: ",
                a,
              ),
            a)
          )
            if (this.BIsPendingPricePayloadValid(a))
              for (let e in a) {
                const t = a[e],
                  r = parseInt(e);
                this.m_mapPriceProposals.set(r, t);
              }
            else
              "dev" == m.De.WEB_UNIVERSE &&
                console.error("Invalid pending price proposal payload");
          const i = (0, m.kQ)("pricing_guidelines", "application_config");
          if (
            (("dev" != m.De.WEB_UNIVERSE && "beta" != m.De.WEB_UNIVERSE) ||
              console.log(
                "DEV_DEBUG: CPackagePricingStore loading pricing guidelines payload: ",
                i,
              ),
            i)
          )
            if (this.BIsGuidelinesPayloadValid(i)) {
              for (let t in i) {
                const r = i[t],
                  a = new Map(),
                  s = 100 * parseInt(t.substring(3));
                this.m_rgPriceLevels.push(s),
                  this.m_mapPriceGuidelines.set(s, a);
                for (let t in r)
                  e.add(t.toUpperCase()),
                    a.set(t.toUpperCase(), parseInt(r[t]));
              }
              this.m_rgPriceLevels.sort((e, t) => e - t);
            } else
              "dev" == m.De.WEB_UNIVERSE &&
                console.error("Invalid pricing guidelines payload");
          this.m_rgKnownPriceKeys = Array.from(e).sort((e, t) =>
            (0, u.eT)(b(e), b(t)),
          );
          const s = (0, m.kQ)("currency_data", "application_config");
          if (
            (("dev" != m.De.WEB_UNIVERSE && "beta" != m.De.WEB_UNIVERSE) ||
              console.log(
                "DEV_DEBUG: CPackagePricingStore loading currency payload: ",
                s,
              ),
            s)
          )
            if (this.BIsCurrencyPayloadValid(s))
              for (let e in s) {
                const t = s[e];
                this.m_mapCurrencyData.set(e, t);
              }
            else
              "dev" == m.De.WEB_UNIVERSE &&
                console.error("Invalid currency payload");
          const n = (0, m.kQ)("currency_descriptions", "application_config");
          if (
            (("dev" != m.De.WEB_UNIVERSE && "beta" != m.De.WEB_UNIVERSE) ||
              console.log(
                "DEV_DEBUG: CPackagePricingStore loading currency descriptions: ",
                n,
              ),
            n)
          )
            if (this.BIsCurrencyDescriptionPayloadValid(n))
              for (let e in n) {
                const t = n[e];
                this.m_mapPriceKeyDescriptions.set(e, t);
              }
            else
              "dev" == m.De.WEB_UNIVERSE &&
                console.error("Invalid currency description payload");
        }
        BIsPricePayloadValid(e) {
          const t = e;
          if (!t || "object" != typeof t) return !1;
          for (let e in t) {
            if (isNaN(parseInt(e))) return !1;
            const r = t[e];
            if (!r || "object" != typeof r) return !1;
            for (let e in r)
              if ("string" != typeof e || "number" != typeof r[e]) return !1;
          }
          return !0;
        }
        BIsPendingPricePayloadValid(e) {
          const t = e;
          if (!t || "object" != typeof t) return !1;
          for (let e in t) {
            if (isNaN(parseInt(e))) return !1;
            const r = t[e];
            if (
              !r ||
              "object" != typeof r ||
              r.packageID !== parseInt(e) ||
              "object" != typeof r.prices
            )
              return !1;
          }
          return !0;
        }
        BIsGuidelinesPayloadValid(e) {
          const t = e;
          if (!t || "object" != typeof t) return !1;
          for (let e in t) {
            const r = t[e];
            if (!r || "object" != typeof r) return !1;
            for (let e in r)
              if ("string" != typeof e || isNaN(parseInt(r[e]))) return !1;
          }
          return !0;
        }
        BIsCurrencyPayloadValid(e) {
          const t = e;
          if (!t || "object" != typeof t) return !1;
          for (let e in t) {
            const r = t[e];
            if (!r || "object" != typeof r || r.strCode != e) return !1;
          }
          return !0;
        }
        BIsCurrencyDescriptionPayloadValid(e) {
          const t = e;
          if (!t || "object" != typeof t) return !1;
          for (let e in t) {
            const r = t[e];
            if (
              !r ||
              "object" != typeof r ||
              void 0 === r.bRequired ||
              void 0 === r.strDescription
            )
              return !1;
          }
          return !0;
        }
        BPriceKeyRequired(e) {
          return this.m_mapPriceKeyDescriptions.get(e)?.bRequired ?? !1;
        }
        GetMinimumBasePrice(e) {
          return this.m_mapPriceKeyDescriptions.get(e)?.nLowestBase || 0;
        }
        GetMinimumDiscountPrice(e) {
          return this.m_mapPriceKeyDescriptions.get(e)?.nLowestDiscount || 0;
        }
        GetPublishedPrice(e, t) {
          return this.m_mapPackagePrice.get(e)?.get(t);
        }
        GetProposedPrice(e, t) {
          return this.m_mapPriceProposals.get(e)?.prices[t];
        }
        GetSavedPrice(e, t) {
          return this.GetProposedPrice(e, t) ?? this.GetPublishedPrice(e, t);
        }
        GetPrice(e, t) {
          return (
            this.m_mapLocalPackagePriceOverrides.get(e)?.get(t) ??
            this.GetSavedPrice(e, t)
          );
        }
        GetPriceGridCellCallbackList(e, t) {
          if (!e || !t) return null;
          this.m_mapPriceGridCellCallbackList.has(e) ||
            this.m_mapPriceGridCellCallbackList.set(e, new Map());
          const r = this.m_mapPriceGridCellCallbackList.get(e);
          return r.has(t) || r.set(t, new l.pB()), r.get(t);
        }
        GetPackageOverridesCallbackList(e) {
          if (!e) return null;
          let t = this.m_mapPackageOverridesCallbackList.get(e);
          return (
            t ||
              ((t = new l.pB()),
              this.m_mapPackageOverridesCallbackList.set(e, t)),
            t
          );
        }
        OverridePrice(e, t, r) {
          r != this.GetPrice(e, t) &&
            (this.m_mapLocalPackagePriceOverrides.has(e) ||
              this.m_mapLocalPackagePriceOverrides.set(e, new Map()),
            r == this.GetSavedPrice(e, t)
              ? this.m_mapLocalPackagePriceOverrides.get(e).delete(t)
              : this.m_mapLocalPackagePriceOverrides.get(e).set(t, r),
            this.GetPriceGridCellCallbackList(e, t).Dispatch(r),
            this.GetPackageOverridesCallbackList(e).Dispatch(),
            this.DispatchPriceOverridesCallbacks());
        }
        OverridePricesForPackage(e, t, r, a) {
          (0, P.X)(
            t.length == r.length,
            `price list size doesn't match ${t.length} != ${r.length}`,
          );
          for (let a = 0; a < t.length; ++a) {
            const i = t[a],
              s = r[a];
            this.m_mapLocalPackagePriceOverrides.has(e) ||
              this.m_mapLocalPackagePriceOverrides.set(e, new Map()),
              s == this.GetSavedPrice(e, i)
                ? this.m_mapLocalPackagePriceOverrides.get(e).delete(i)
                : this.m_mapLocalPackagePriceOverrides.get(e).set(i, s),
              this.GetPriceGridCellCallbackList(e, i).Dispatch(s);
          }
          this.GetPackageOverridesCallbackList(e).Dispatch(),
            a && this.DispatchPriceOverridesCallbacks();
        }
        DispatchPriceOverridesCallbacks() {
          this.m_allPriceOverridesCallbackList.Dispatch(
            this.GetAllLocalPriceOverrides(),
          ),
            this.UpdateOverridesPerPriceKey();
        }
        BHasLocalPriceOverrides(e) {
          return this.m_mapLocalPackagePriceOverrides.get(e)?.size > 0;
        }
        GetAllLocalPriceOverrides() {
          const e = [];
          return (
            this.m_mapLocalPackagePriceOverrides.forEach((t, r) =>
              t.forEach((t, a) => {
                const i = this.GetSavedPrice(r, a);
                e.push({
                  packageID: r,
                  strPriceKey: a,
                  nPriceInCents: t,
                  nOldPriceInCents: i,
                });
              }),
            ),
            e.sort(h),
            e
          );
        }
        BHasLocalPriceOverride(e, t) {
          let r = this.m_mapLocalPackagePriceOverrides.get(e);
          return !!r && r.has(t);
        }
        UpdateOverridesPerPriceKey() {
          this.m_mapOverridesPerPriceKey.clear(),
            this.m_mapLocalPackagePriceOverrides.forEach((e, t) => {
              e.forEach((e, t) => {
                let r = this.m_mapOverridesPerPriceKey.get(t);
                r || (r = 0), r++, this.m_mapOverridesPerPriceKey.set(t, r);
              });
            });
        }
        DiscardAllLocalPriceOverrides() {
          const e = this.GetAllLocalPriceOverrides();
          this.m_mapLocalPackagePriceOverrides.clear();
          let t = new Set();
          for (const r of e) {
            const { packageID: e, strPriceKey: a } = r;
            this.GetPriceGridCellCallbackList(e, a).Dispatch(
              this.GetPrice(e, a),
            ),
              t.add(e);
          }
          for (const e of t) this.GetPackageOverridesCallbackList(e).Dispatch();
          this.DispatchPriceOverridesCallbacks();
        }
        DiscardAllLocalPriceOverridesForKey(e) {
          let t = !1,
            r = new Set();
          this.m_mapLocalPackagePriceOverrides.forEach((a, i) => {
            this.m_mapPriceKeyDescriptions.has(e) &&
              ((t = !0),
              this.m_mapLocalPackagePriceOverrides.get(i).delete(e),
              this.GetPriceGridCellCallbackList(i, e).Dispatch(
                this.GetPrice(i, e),
              ),
              r.add(i));
          });
          for (const e of r) this.GetPackageOverridesCallbackList(e).Dispatch();
          t && this.DispatchPriceOverridesCallbacks();
        }
        DiscardLocalPriceOverridesForPackage(e) {
          this.m_mapLocalPackagePriceOverrides.get(e)?.forEach((t, r) => {
            this.GetPriceGridCellCallbackList(e, r).Dispatch(
              this.GetSavedPrice(e, r),
            );
          }),
            this.m_mapLocalPackagePriceOverrides.delete(e),
            this.GetPackageOverridesCallbackList(e).Dispatch(),
            this.DispatchPriceOverridesCallbacks();
        }
        BuildNewPricingProposal(e, t) {
          const r = {
            packageID: e,
            rtSubmitted: Math.floor(Date.now() / 1e3),
            submitterID: m.L7.accountid,
            prices: {},
            eState: 1,
            bPartnerWillPublish: t,
          };
          for (const t of this.m_rgKnownPriceKeys)
            r.prices[t] = this.GetPrice(e, t);
          return r;
        }
        async SubmitProposalToServer(e, t, r) {
          const a = this.BuildNewPricingProposal(e, t),
            i = JSON.stringify(a.prices),
            n = (0, m.kQ)("publisherid", "application_config"),
            c =
              m.De.PARTNER_BASE_URL +
              "pricing/ajaxsubmitproposal/" +
              n +
              "/" +
              e,
            l = new FormData();
          l.append("sessionid", m.De.SESSIONID),
            l.append("partner_will_publish", t ? "1" : "0"),
            l.append("prices", i);
          let p = null;
          try {
            const t = await s().post(c, l, {
              withCredentials: !0,
              cancelToken: r?.token,
            });
            if (
              200 == t?.status &&
              1 == t.data?.success &&
              0 != t.data.eState
            ) {
              if (3 == t.data.eState) {
                this.m_mapPriceProposals.delete(e);
                for (const t of this.m_rgKnownPriceKeys)
                  this.m_mapPackagePrice.get(e).set(t, a.prices[t]);
              } else
                (a.eState = t.data.eState),
                  (a.proposalKey = t.data.proposalKey),
                  this.m_mapPriceProposals.set(e, a);
              return this.DiscardLocalPriceOverridesForPackage(e), t.data;
            }
          } catch (e) {
            p = e;
          }
          const u = (0, o.l)(p);
          return (
            console.error(
              "CPackagePricingStore.SubmitProposalToServer: failed",
              u.strErrorMsg,
              u,
            ),
            p?.response?.data ?? { success: 2 }
          );
        }
        async PublishApprovedProposal(e, t, r = 0) {
          const a = this.m_mapPriceProposals.get(e);
          if (4 != a?.eState || !a?.proposalKey) return { success: 8 };
          const i = (0, m.kQ)("publisherid", "application_config"),
            n =
              m.De.PARTNER_BASE_URL +
              "pricing/ajaxpublishproposal/" +
              i +
              "/" +
              e,
            c = new FormData();
          c.append("sessionid", m.De.SESSIONID),
            c.append("proposal_key", a.proposalKey);
          let l = null;
          try {
            const i = await s().post(n, c, {
              withCredentials: !0,
              cancelToken: t?.token,
              timeout: r,
            });
            if (200 == i?.status && 1 == i.data?.success) {
              this.m_mapPriceProposals.delete(e);
              for (const t of this.m_rgKnownPriceKeys)
                this.m_mapPackagePrice.get(e).set(t, a.prices[t]),
                  this.GetPriceGridCellCallbackList(e, t).Dispatch(
                    this.GetSavedPrice(e, t),
                  );
              return (
                this.GetPackageOverridesCallbackList(e).Dispatch(),
                this.DispatchPriceOverridesCallbacks(),
                i.data
              );
            }
          } catch (e) {
            l = e;
          }
          const p = (0, o.l)(l);
          return (
            console.error(
              "CPackagePricingStore.PublishApprovedProposal: failed",
              p.strErrorMsg,
              p,
            ),
            l?.response?.data ?? { success: 2 }
          );
        }
        async CancelProposal(e, t) {
          const r = this.m_mapPriceProposals.get(e);
          if (!r?.proposalKey) return { success: 8 };
          const a = (0, m.kQ)("publisherid", "application_config"),
            i =
              m.De.PARTNER_BASE_URL +
              "pricing/ajaxcancelproposal/" +
              a +
              "/" +
              e,
            n = new FormData();
          n.append("sessionid", m.De.SESSIONID),
            n.append("proposal_key", r.proposalKey);
          let c = null;
          try {
            const r = await s().post(i, n, {
              withCredentials: !0,
              cancelToken: t?.token,
            });
            if (200 == r?.status && 1 == r.data?.success) {
              this.m_mapPriceProposals.delete(e);
              for (const t of this.m_rgKnownPriceKeys)
                this.GetPriceGridCellCallbackList(e, t).Dispatch(
                  this.GetSavedPrice(e, t),
                );
              return (
                this.GetPackageOverridesCallbackList(e).Dispatch(),
                this.DispatchPriceOverridesCallbacks(),
                r.data
              );
            }
          } catch (e) {
            c = e;
          }
          const l = (0, o.l)(c);
          return (
            console.error(
              "CPackagePricingStore.CancelProposal: failed",
              l.strErrorMsg,
              l,
            ),
            c?.response?.data ?? { success: 2 }
          );
        }
        GetLocalOverrideCountForPriceKey(e) {
          return this.m_mapOverridesPerPriceKey.get(e) ?? 0;
        }
        BAnyPackagePriceBelowMin(e) {
          if (!e) return !1;
          for (let t of this.m_rgKnownPriceKeys) {
            let r = this.GetPrice(e, t);
            if (void 0 === r) continue;
            let { nMinPriceInCents: a, nMaxPriceInCents: i } = E(e, t);
            if (r < a) return !0;
          }
          return !1;
        }
      }
      function h(e, t) {
        if (e.strPriceKey == t.strPriceKey) {
          const r = (0, d.vB)(e.packageID),
            a = (0, d.vB)(t.packageID);
          return (0, u.eT)(r, a);
        }
        return (0, u.eT)(b(e.strPriceKey), b(t.strPriceKey));
      }
      function f(e) {
        const t = e.split("_")[0];
        return g.Get().m_mapCurrencyData.get(t);
      }
      function y(e, t) {
        if (void 0 === t) return ["", "", ""];
        const r = f(t) ?? f("USD");
        let a = "";
        if ("number" == typeof e) {
          let t = e.toString();
          t.length < 3 && (t = (1 == t.length ? "0" : "") + "0" + t);
          const i = t.length - 2;
          for (let e = 0; e < i; e++) {
            const s = t.charAt(e);
            (a += s),
              e < i - 1 &&
                (i - e - 1) % 3 == 0 &&
                "-" != s &&
                (a += r.strThousandsSeparator);
          }
          r.bWholeUnitsOnly ||
            ((a += r.strDecimalSymbol), (a += t.substr(t.length - 2)));
        }
        return r.bSymbolIsPrefix
          ? [r.strSymbol + r.strSymbolAndNumberSeparator, a, ""]
          : ["", a, r.strSymbolAndNumberSeparator + r.strSymbol];
      }
      (0, a.gn)([c.LO], g.prototype, "m_mapOverridesPerPriceKey", void 0),
        (0, a.gn)([c.aD], g.prototype, "UpdateOverridesPerPriceKey", null);
      const G = new Map([
        ["USD", "@1"],
        ["CNY", "@2"],
        ["EUR", "@3"],
        ["GBP", "@4"],
        ["CAD", "@5"],
        ["AUD", "@6"],
        ["JPY", "@7"],
        ["KRW", "@8"],
        ["RUB", "@9"],
      ]);
      function b(e) {
        return G.has(e) ? G.get(e) : e.indexOf("_") > 0 ? "ZZZ" + e : e;
      }
      function v(e, t) {
        return g.Get().GetPrice(e, t);
      }
      function S(e) {
        const t = g.Get().m_strDisplayPriceKey;
        return y(g.Get().GetPrice(e, t), t).join("");
      }
      function k(e) {
        const [t, r] = n.useState(g.Get().m_strDisplayPriceKey);
        return (
          (0, p.Qg)(g.Get().m_displayPriceKeyCallbackList, r),
          (function (e, t) {
            const [r, a] = n.useState(g.Get().GetPrice(e, t));
            return (
              (0, p.Qg)(g.Get().GetPriceGridCellCallbackList(e, t), a),
              n.useEffect(() => a(g.Get().GetPrice(e, t)), [e, t]),
              y(r, t).join("")
            );
          })(e, t)
        );
      }
      function D(e, t) {
        const r = g.Get().GetPrice(e, "USD");
        let a = null;
        for (let e of g.Get().m_rgPriceLevels)
          if (e > r) {
            a = e;
            break;
          }
        if ("USD" == t || !a)
          return { nSuggestedPriceInCents: null, nGuidelinesLevel: null };
        let i = g.Get().m_mapPriceGuidelines.get(a).get(t);
        const s = g.Get().m_mapPriceGuidelines.get(a).get("USD");
        if (s != r) {
          const e = r / s;
          (a *= e), (i = Math.ceil(i * e));
        }
        return { nSuggestedPriceInCents: i, nGuidelinesLevel: a };
      }
      function I() {
        const e = (0, d.AM)();
        return n.useCallback(
          () =>
            (function (e) {
              let t = 0;
              for (const r of e) {
                const e = new Array(),
                  a = new Array(),
                  i = g.Get().GetPrice(r, "USD");
                if (i && !(i <= 0)) {
                  for (const t of g.Get().m_rgKnownPriceKeys) {
                    if ("USD" == t) continue;
                    const { nSuggestedPriceInCents: i, nGuidelinesLevel: s } =
                      D(r, t);
                    null !== s &&
                      g.Get().GetPrice(r, t) != i &&
                      (e.push(t), a.push(i));
                  }
                  e.length > 0 &&
                    (g.Get().OverridePricesForPackage(r, e, a), (t += 1));
                }
              }
              t > 0 && g.Get().DispatchPriceOverridesCallbacks();
            })(e),
          [e],
        );
      }
      function C(e, t) {
        const r = (0, p.NW)();
        (0, p.Qg)(g.Get().GetPriceGridCellCallbackList(e, t), r);
        const a = g.Get().GetPrice(e, t);
        (0, p.Qg)(g.Get().GetPriceGridCellCallbackList(e, "USD"), r);
        const { nSuggestedPriceInCents: i, nGuidelinesLevel: s } = D(e, t),
          c = n.useCallback((r) => g.Get().OverridePrice(e, t, r), [e, t]),
          o = g.Get().GetPublishedPrice(e, t),
          l = g.Get().GetProposedPrice(e, t),
          { nMinPriceInCents: u, nMaxPriceInCents: m } = E(e, t),
          d = g.Get().GetMinimumDiscountPrice(t),
          _ = a ? Math.floor((100 * (a - d)) / a) : 90,
          P = _ < Math.min(90, Math.floor((100 * (s - 50)) / s)) ? _ : null;
        return n.useMemo(
          () => ({
            nPriceInCents: a,
            nProposedPriceInCents: l,
            nPublishedPriceInCents: o,
            nMinPriceInCents: u,
            nMaxPriceInCents: m,
            nMaxDiscountPercentage: P,
            nSuggestedPriceInCents: i,
            fnSetPrice: c,
          }),
          [a, l, o, u, m, P, i, c],
        );
      }
      function L(e) {
        let [t, r] = n.useState(() => g.Get().BAnyPackagePriceBelowMin(e)),
          a = n.useCallback(() => {
            let t = g.Get().BAnyPackagePriceBelowMin(e);
            r(t);
          }, [e, r]);
        return (0, p.Qg)(g.Get().GetPackageOverridesCallbackList(e), a), t;
      }
      function O(e) {
        return g.Get().BAnyPackagePriceBelowMin(e);
      }
      function E(e, t) {
        let r = g.Get();
        return {
          nMinPriceInCents: r.GetMinimumBasePrice(t),
          nMaxPriceInCents: r.m_setRecurringSubscriptions.has(e)
            ? r.GetPublishedPrice(e, t)
            : null,
        };
      }
      function w() {
        return n.useCallback((e, t, r) => {
          const a = g.Get().GetPrice(e, t);
          return (
            g.Get().OverridePrice(e, t, r),
            a == r
              ? null
              : {
                  packageID: e,
                  strPriceKey: t,
                  nPriceInCents: r,
                  nOldPriceInCents: a,
                }
          );
        }, []);
      }
      function B(e) {
        return g.Get().m_mapPriceProposals.get(e);
      }
      function A() {
        return Array.from(g.Get().m_mapPriceProposals.values());
      }
      function R(e) {
        return g.Get().m_mapPriceProposals.get(e);
      }
      function U(e) {
        let t = !1;
        for (const r of g.Get().m_rgKnownPriceKeys) {
          let a = g.Get().GetPublishedPrice(e, r);
          t = t || (0 != a && void 0 !== a);
        }
        return t;
      }
      function K(e) {
        const t = B(e),
          r = [];
        for (const a of g.Get().m_rgKnownPriceKeys) {
          const i = t.prices[a],
            s = g.Get().GetPublishedPrice(e, a);
          i != s &&
            r.push({
              packageID: e,
              strPriceKey: a,
              nPriceInCents: i,
              nOldPriceInCents: s,
            });
        }
        return r;
      }
      function N() {
        return g.Get().m_rgKnownPriceKeys;
      }
      function M(e) {
        let t = g.Get().m_mapPriceKeyDescriptions.get(e);
        return t ? t.strDescription : "";
      }
      function V(e) {
        return n.useCallback(() => {
          g.Get().DiscardAllLocalPriceOverridesForKey(e);
        }, [e]);
      }
      function W(e) {
        return n.useCallback(() => {
          g.Get().DiscardLocalPriceOverridesForPackage(e);
        }, [e]);
      }
      function x(e) {
        return n.useCallback(() => {
          g.Get().CancelProposal(e);
        }, [e]);
      }
      function Q() {
        const [e, t] = n.useState(g.Get().m_strDisplayPriceKey),
          r = g.Get().m_rgKnownPriceKeys,
          a = n.useCallback((e) => {
            t(e),
              (g.Get().m_strDisplayPriceKey = e),
              g.Get().m_displayPriceKeyCallbackList.Dispatch(e);
          }, []);
        return { strPriceKey: e, rgSupportedPriceKeys: r, fnSetPriceKey: a };
      }
      function z(e) {
        const t = (0, p.NW)();
        return (
          (0, p.Qg)(g.Get().m_allPriceOverridesCallbackList, t),
          g.Get().BHasLocalPriceOverrides(e)
        );
      }
      function T(e) {
        return g.Get().BHasLocalPriceOverrides(e);
      }
      function F() {
        const [e, t] = n.useState(() => g.Get().GetAllLocalPriceOverrides());
        return (0, p.Qg)(g.Get().m_allPriceOverridesCallbackList, t), e;
      }
      function H(e) {
        return (0, _.SZ)(() => g.Get().GetLocalOverrideCountForPriceKey(e));
      }
      function j() {
        return n.useCallback(
          () => g.Get().GetAllLocalPriceOverrides()?.length > 0,
          [],
        );
      }
      function X() {
        return n.useCallback(() => g.Get().DiscardAllLocalPriceOverrides(), []);
      }
      function $() {
        const e = [],
          t = n.useRef(new Map());
        g.Get().m_mapPriceGuidelines.forEach((r, a) => {
          const i = r.get("USD");
          e.push(i), t.current.set(i, a);
        }),
          e.sort((e, t) => e - t);
        const r = n.useCallback((e, r) => {
          const a = t.current.get(r);
          g.Get()
            .m_mapPriceGuidelines.get(a)
            .forEach((t, r) => g.Get().OverridePrice(e, r, t));
        }, []);
        return { rgUSDPricesInCents: e, fnApplyGuidelines: r };
      }
      function q() {
        return n.useCallback(
          (e, t, r) => g.Get().SubmitProposalToServer(e, t, r),
          [],
        );
      }
      function Y() {
        return n.useCallback(
          (e, t) => g.Get().PublishApprovedProposal(e, t, 6e4),
          [],
        );
      }
      function Z(e) {
        let t = [];
        const r = g.Get().m_rgKnownPriceKeys;
        for (let a of e) {
          if (U(a)) continue;
          let e = !1;
          for (const t of r) {
            if (!g.Get().BPriceKeyRequired(t)) continue;
            if (!g.Get().GetPrice(a, t)) {
              e = !0;
              break;
            }
          }
          e && t.push(a);
        }
        return t;
      }
    },
    42006: (e, t, r) => {
      r.d(t, { $k: () => m, yh: () => s });
      var a = r(50423),
        i = r(31846);
      function s(e, t, r, a) {
        const s = (0, i.Xx)("#PackageGrid_MultipleBaseGamesFoundForPackage"),
          n = (0, i.Xx)("#PackageGrid_NoBaseGameFoundForPackage"),
          c = e == s,
          o = e == n,
          l = !c && !o,
          p = t == s,
          u = t == n,
          m = !p && !u;
        if (l && m) return e.localeCompare(t);
        if (l || m) return l ? -1 : 1;
        if (c == p && o == u) {
          const e = r.getData().packageName,
            t = a.getData().packageName;
          return e && t
            ? e.localeCompare(t)
            : e || t
              ? e
                ? -1
                : 1
              : r.getData().packageID - a.getData().packageID;
        }
        return c ? -1 : 1;
      }
      const n = (e) => e.nextElementSibling,
        c = (e) => e.previousElementSibling,
        o = (e, t) => {
          const r = e.getAttribute("tabulator-field"),
            a = e.parentElement;
          let i = a && t(a);
          for (; r && i; ) {
            for (const e of Array.from(i.children))
              if (r == e.getAttribute("tabulator-field")) return e;
            i = t(i);
          }
          return null;
        },
        l = new Map([
          [38, (e) => o(e, c)],
          [39, n],
          [40, (e) => o(e, n)],
          [37, c],
          [9, (e) => o(e, n)],
          [13, (e) => o(e, n)],
        ]);
      function p(e) {
        return (0, a.Jk)(e, (e) => e.classList.contains("tabulator-cell"));
      }
      function u(e) {
        const t = Array.prototype.slice.call(e.children).reverse();
        for (; t.length > 0; ) {
          const e = t.pop();
          if ("input" === e.tagName.toLowerCase()) return e;
          t.push(...Array.prototype.slice.call(e.children).reverse());
        }
        return null;
      }
      function m(e, t) {
        const r = l.get(e.keyCode);
        if (!r) return;
        let a = r(p(e.currentTarget));
        for (; a; ) {
          if (
            "none" != a.style?.display &&
            !a.classList.contains("tabulator-frozen")
          ) {
            const r = u(a);
            if (r) {
              return d(t, p(r)), r.focus(), void e.preventDefault();
            }
          }
          a = r(a);
        }
      }
      function d(e, t) {
        const r = e.columnManager.scrollLeft,
          a = t.offsetWidth,
          i = t.offsetLeft,
          s = i + a,
          n = e.columnManager.element.clientWidth,
          c = e.columnManager.headersElement.clientWidth,
          o = r + n;
        if (i >= o - c && s <= o) return;
        const l = (i + s) / 2 - (n - c / 2),
          p = (c - a) / 4,
          u = l + (l > r ? p : -1 * p);
        e.columnManager.scrollHorizontal(u), e.rowManager.scrollHorizontal(u);
      }
    },
    37047: (e, t, r) => {
      r.d(t, { $: () => a, _: () => i });
      const a = "America/Los_Angeles";
      function i(e) {
        const t = r(98973).unix(e).tz(a);
        return (
          t.seconds(0),
          t.minutes(0),
          t.hours(10),
          t.unix() < e && t.hours(34),
          t.unix()
        );
      }
    },
  },
]);

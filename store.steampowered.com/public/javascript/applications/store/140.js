/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [140],
  {
    82415: (t, e, a) => {
      a.d(e, { TB: () => d, ac: () => p });
      var n = a(34629),
        o = a(41735),
        r = a.n(o),
        i = a(14947),
        s = a(90626),
        l = a(17720),
        c = a(44332),
        u = a(78327),
        m = a(12493);
      class _ {
        constructor() {
          (0, i.Gn)(this);
        }
        m_mapAppIDToClanInfo = new Map();
        m_mapVanityToClanInfo = new Map();
        m_mapClanAccountIDToClanInfo = new Map();
        m_mapPromisesLoading = new Map();
        m_rgQueuedEventsClanIDs = new Array();
        m_bLoadedFromConfig = !1;
        Init() {
          this.LazyInit();
        }
        LazyInit() {
          this.m_bLoadedFromConfig ||
            ((0, i.h5)(() => {
              let t = (0, u.Fd)("groupvanityinfo", "application_config");
              this.ValidateClanConfig(t) &&
                t.forEach((t) => {
                  this.InternalSetupValue(t);
                });
            }),
            (this.m_bLoadedFromConfig = !0));
        }
        ValidateClanConfig(t) {
          const e = t;
          return (
            !!(
              e &&
              Array.isArray(e) &&
              e.length > 0 &&
              "object" == typeof e[0]
            ) &&
            "number" == typeof e[0].clanAccountID &&
            ("number" == typeof e[0].appid ||
              "string" == typeof e[0].vanity_url)
          );
        }
        BHasClanInfoLoaded(t) {
          return (
            (0, c.w)(t.BIsValid(), "Clan SteamID is not valid when ClanInfo"),
            (0, c.w)(
              t.BIsClanAccount(),
              "Clan SteamID is not a clan account id when requesting clan info ",
            ),
            this.m_mapClanAccountIDToClanInfo.has(t.GetAccountID())
          );
        }
        BHasClanInfoLoadedByAccountID(t) {
          return this.m_mapClanAccountIDToClanInfo.has(t);
        }
        RegisterClanData(t) {
          for (const e of t) this.InternalSetupValue(e);
        }
        InternalSetupValue(t) {
          const e = {
            clanAccountID: t.clanAccountID,
            clanSteamID: new l.b(t.clanSteamIDString),
            appid: t.appid,
            vanity_url: t.vanity_url,
            member_count: t.member_count,
            is_ogg: t.is_ogg,
            is_creator_home: t.is_creator_home,
            is_curator: t.is_curator,
            has_visible_store_page: t.has_visible_store_page,
            has_rss_feed: t.has_rss_feed,
            rss_language: t.rss_language ? t.rss_language : 0,
            avatar_full_url: t.avatar_full_url,
            avatar_medium_url: t.avatar_medium_url,
            group_name: t.group_name,
            creator_page_bg_url: t.creator_page_bg_url,
            partner_events_enabled: t.partner_events_enabled,
          };
          0 != t.appid && this.m_mapAppIDToClanInfo.set(t.appid, e),
            t.vanity_url &&
              t.vanity_url.length > 0 &&
              this.m_mapVanityToClanInfo.set(
                t.vanity_url.toLocaleLowerCase(),
                e,
              ),
            this.m_mapClanAccountIDToClanInfo.set(t.clanAccountID, e);
        }
        GetRequestParam() {
          return { origin: self.origin };
        }
        async LoadOGGClanInfoForAppID(t) {
          if (
            (this.LazyInit(),
            "string" == typeof t && (t = parseInt(t)),
            (0, c.w)(
              0 != t,
              "LoadOGGClanInfoForAppID called with appid of zero",
            ),
            0 == t)
          )
            return null;
          if (this.m_mapAppIDToClanInfo.has(t))
            return this.m_mapAppIDToClanInfo.get(t);
          let e = "appid_" + t;
          return (
            this.m_mapPromisesLoading.has(e) ||
              this.m_mapPromisesLoading.set(
                e,
                this.InternalLoadOGGClanInfoForAppID(t),
              ),
            this.m_mapPromisesLoading.get(e)
          );
        }
        async InternalLoadOGGClanInfoForAppID(t) {
          const e =
            u.TS.COMMUNITY_BASE_URL + "ogg/" + t + "/ajaxgetvanityandclanid/";
          let a = await r().get(e, { params: this.GetRequestParam() });
          return (
            this.InternalSetupValue(a.data), this.m_mapAppIDToClanInfo.get(t)
          );
        }
        async LoadOGGClanInfoForIdentifier(t) {
          if (
            (this.LazyInit(),
            this.m_mapVanityToClanInfo.has(t?.toLocaleLowerCase()))
          )
            return this.m_mapVanityToClanInfo.get(t?.toLocaleLowerCase());
          let e = "storevanity_" + t?.toLocaleLowerCase();
          return (
            this.m_mapPromisesLoading.has(e) ||
              this.m_mapPromisesLoading.set(
                e,
                this.InternalLoadOGGClanInfoForIdentifier(t),
              ),
            this.m_mapPromisesLoading.get(e)
          );
        }
        async InternalLoadOGGClanInfoForIdentifier(t) {
          const e =
            u.TS.COMMUNITY_BASE_URL + "games/" + t + "/ajaxgetvanityandclanid/";
          let a = await r().get(e, { params: this.GetRequestParam() });
          return (
            this.InternalSetupValue(a.data),
            this.m_mapVanityToClanInfo.get(t?.toLocaleLowerCase())
          );
        }
        async LoadOGGClanInfoForGroupVanity(t) {
          if (
            (this.LazyInit(),
            this.m_mapVanityToClanInfo.has(t?.toLocaleLowerCase()))
          )
            return this.m_mapVanityToClanInfo.get(t?.toLocaleLowerCase());
          let e = "community_name_" + t;
          return (
            this.m_mapPromisesLoading.has(e) ||
              this.m_mapPromisesLoading.set(
                e,
                this.InternalLoadOGGClanInfoForGroupVanity(
                  t?.toLocaleLowerCase(),
                ),
              ),
            this.m_mapPromisesLoading.get(e)
          );
        }
        async InternalLoadOGGClanInfoForGroupVanity(t) {
          const e =
            u.TS.COMMUNITY_BASE_URL +
            "groups/" +
            t +
            "/ajaxgetvanityandclanid/";
          let a = await r().get(e, { params: this.GetRequestParam() });
          return (
            this.InternalSetupValue(a.data),
            this.m_mapVanityToClanInfo.get(t?.toLocaleLowerCase())
          );
        }
        async LoadClanInfoForClanSteamID(t) {
          this.LazyInit();
          let e = t.GetAccountID();
          if (this.m_mapClanAccountIDToClanInfo.has(e))
            return this.m_mapClanAccountIDToClanInfo.get(e);
          let a = "clanaccountid_" + e;
          return (
            this.m_mapPromisesLoading.has(a) ||
              this.m_mapPromisesLoading.set(
                a,
                this.InternalLoadClanInfoForClanSteamID(t),
              ),
            this.m_mapPromisesLoading.get(a)
          );
        }
        async LoadClanInfoForClanAccountID(t) {
          const e = l.b.InitFromClanID(t);
          return this.LoadClanInfoForClanSteamID(e);
        }
        async InternalLoadClanInfoForClanSteamID(t) {
          let e = t.GetAccountID();
          const a =
            u.TS.COMMUNITY_BASE_URL +
            "gid/" +
            t.ConvertTo64BitString() +
            "/ajaxgetvanityandclanid/";
          let n = await r().get(a, { params: this.GetRequestParam() });
          return (
            this.InternalSetupValue(n.data),
            this.m_mapClanAccountIDToClanInfo.get(e)
          );
        }
        GetOGGClanInfo(t) {
          return "string" == typeof t
            ? this.m_mapVanityToClanInfo.get(t?.toLocaleLowerCase())
            : this.m_mapAppIDToClanInfo.get(t);
        }
        GetClanSteamIDForAppID(t) {
          if ((this.LazyInit(), this.m_mapAppIDToClanInfo.has(t)))
            return l.b.InitFromClanID(
              this.m_mapAppIDToClanInfo.get(t).clanAccountID,
            );
        }
        GetClanVanityForAppID(t) {
          if ((this.LazyInit(), this.m_mapAppIDToClanInfo.has(t)))
            return this.m_mapAppIDToClanInfo.get(t).vanity_url;
        }
        GetClanVanityForClanSteamID(t) {
          if (
            (this.LazyInit(),
            this.m_mapClanAccountIDToClanInfo.has(t.GetAccountID()))
          )
            return this.m_mapClanAccountIDToClanInfo.get(t.GetAccountID())
              .vanity_url;
        }
        HasLoadedClanAccountID(t) {
          return this.LazyInit(), this.m_mapClanAccountIDToClanInfo.has(t);
        }
        GetClanMemberCount(t) {
          return this.m_mapAppIDToClanInfo.has(t)
            ? this.m_mapAppIDToClanInfo.get(t).member_count
            : 0;
        }
        GetClanInfoByClanAccountID(t) {
          return (
            this.LazyInit(),
            (0, c.w)(
              !!t,
              "Unepxected clanid when requesting information. GetClanInfoByClanAccountID ",
            ),
            this.m_mapClanAccountIDToClanInfo.get(t)
          );
        }
        GetCreatorStoreURL(t) {
          let e = m.pF.GetCreatorHome(t);
          if (e) return e.GetCreatorHomeURL("developer");
          let a = this.GetClanInfoByClanAccountID(t.GetAccountID());
          return (
            u.TS.COMMUNITY_BASE_URL +
            (a.vanity_url
              ? "groups/" + a.vanity_url
              : "gid/" + t.ConvertTo64BitString())
          );
        }
      }
      (0, n.Cg)([i.sH], _.prototype, "m_mapAppIDToClanInfo", void 0),
        (0, n.Cg)([i.sH], _.prototype, "m_mapVanityToClanInfo", void 0),
        (0, n.Cg)([i.sH], _.prototype, "m_mapClanAccountIDToClanInfo", void 0),
        (0, n.Cg)([i.XI], _.prototype, "RegisterClanData", null),
        (0, n.Cg)([i.XI], _.prototype, "InternalSetupValue", null);
      const p = new _();
      function d(t) {
        const [e, a] = (0, s.useState)(
            t ? p.GetClanInfoByClanAccountID(t) : void 0,
          ),
          [n, o] = (0, s.useState)(!!t && !p.BHasClanInfoLoadedByAccountID(t));
        return (
          (0, s.useEffect)(() => {
            if (t)
              if (p.BHasClanInfoLoadedByAccountID(t))
                a(p.GetClanInfoByClanAccountID(t)), o(!1);
              else {
                o(!0);
                const e = l.b.InitFromClanID(
                  "string" == typeof t ? Number.parseInt(t) : t,
                );
                p.LoadClanInfoForClanSteamID(e).then((t) => {
                  a(t), o(!1);
                });
              }
            else a(void 0), o(!1);
          }, [t]),
          [n, e]
        );
      }
      window.g_ClanStore = p;
    },
    12493: (t, e, a) => {
      a.d(e, { pF: () => p, FV: () => d });
      var n = a(34629),
        o = a(4434),
        r = a(41735),
        i = a.n(r),
        s = a(14947),
        l = a(90626),
        c = a(78327);
      class u {
        m_clanSteamID;
        m_appidList = new Array();
        m_strName = "";
        m_strAvatarURLFullSize = "";
        m_strTagLineLoc = "";
        m_nFollowers = 0;
        m_strVanity = "";
        m_webLink = void 0;
        m_promise;
        m_bIsLoaded = !1;
        m_bIsHidden = !1;
        m_clanAccountFlags = 0;
        constructor(t) {
          (0, s.Gn)(this), (this.m_clanSteamID = t);
        }
        Initialize(t) {
          (this.m_strName = t.name || ""),
            (this.m_strAvatarURLFullSize =
              t.avatar_url_full_size ||
              "https://avatars.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_full.jpg"),
            (this.m_strTagLineLoc = t.tag_line_localized || ""),
            (this.m_nFollowers = t.followers || 0),
            (this.m_strVanity = t.vanity || void 0),
            (this.m_webLink = t.weblink),
            (this.m_bIsHidden = t.hidden || !1),
            (this.m_clanAccountFlags = t.clan_account_flags ?? 0),
            t.appids && t.appids.forEach((t) => this.m_appidList.push(t)),
            (this.m_bIsLoaded = !0);
        }
        GetCreatorHomeIdentifier() {
          return {
            name: this.m_strName,
            clan_account_id: this.m_clanSteamID.GetAccountID(),
            type: "developer",
            hidden: this.m_bIsHidden,
          };
        }
        BIsPartnerEventEditorEnabled() {
          return Boolean(8 & this.m_clanAccountFlags);
        }
        BHasClanAccountFlagSet(t) {
          return Boolean(this.m_clanAccountFlags & t);
        }
        BIsLoaded() {
          return this.m_bIsLoaded;
        }
        GetClanSteamID() {
          return this.m_clanSteamID;
        }
        GetClanAccountID() {
          return this.m_clanSteamID.GetAccountID();
        }
        GetAppIDList() {
          return this.m_appidList;
        }
        GetName() {
          return this.m_strName;
        }
        GetAvatarURLFullSize() {
          return this.m_strAvatarURLFullSize;
        }
        GetTagLine() {
          return this.m_strTagLineLoc;
        }
        GetNumFollowers() {
          return this.m_nFollowers;
        }
        BIsHidden() {
          return this.m_bIsHidden;
        }
        GetCreatorHomeURL(t) {
          if (this.m_strVanity) {
            switch (t) {
              case "publisher":
                return (
                  c.TS.STORE_BASE_URL + "publisher/" + this.m_strVanity + "/"
                );
              case "franchise":
                return (
                  c.TS.STORE_BASE_URL + "franchise/" + this.m_strVanity + "/"
                );
            }
            return c.TS.STORE_BASE_URL + "developer/" + this.m_strVanity + "/";
          }
          return (
            c.TS.STORE_BASE_URL +
            "curator/" +
            this.m_clanSteamID.GetAccountID() +
            "/"
          );
        }
        BHasWebLink() {
          return void 0 !== this.m_webLink;
        }
        GetWebLink() {
          return this.m_webLink;
        }
        GetVanityString() {
          return this.m_strVanity;
        }
        AdjustFollower(t) {
          this.m_nFollowers += t;
        }
        async EnablePartnerEventEditorFlag() {
          this.BIsPartnerEventEditorEnabled() ||
            (await this.UpdateGroupFlagsFeature([2, 8], !0));
        }
        async UpdateGroupFlagsFeature(t, e) {
          let a = c.TS.PARTNER_BASE_URL + "sales/ajaxupdateclanaccountflags",
            n = this.m_clanAccountFlags;
          if (
            (t.forEach((t) => {
              e ? (n |= t) : (n &= ~t);
            }),
            n == this.m_clanAccountFlags)
          )
            return;
          let o = new Array();
          1 & n && o.push(1),
            8 & n && o.push(8),
            2 & n && o.push(2),
            4 & n && o.push(4),
            16 & n && o.push(16),
            32 & n && o.push(32),
            64 & n && o.push(64);
          let r = new FormData();
          r.append("sessionid", c.TS.SESSIONID),
            r.append("clan_account_id", this.GetClanAccountID().toString()),
            r.append("accountflags", JSON.stringify(o));
          let s = await i().post(a, r);
          s &&
            200 == s.status &&
            1 == s.data.success &&
            (this.m_clanAccountFlags = n);
        }
      }
      (0, n.Cg)([s.sH], u.prototype, "m_appidList", void 0),
        (0, n.Cg)([s.sH], u.prototype, "m_nFollowers", void 0),
        (0, n.Cg)([s.sH], u.prototype, "m_clanAccountFlags", void 0);
      var m = a(17720);
      class _ {
        constructor() {
          (0, s.Gn)(this);
        }
        m_mapClanToCreatorHome = new Map();
        m_mapAppToCreatorIDList = new Map();
        m_bLoadedFromConfig = !1;
        LazyInit() {
          if (!this.m_bLoadedFromConfig) {
            let t = (0, c.Tc)("creatorhome", "application_config");
            this.ValidateStoreDefault(t) &&
              t.forEach((t) => {
                let e = Number(t.creator_clan_id),
                  a = m.b.InitFromClanID(e),
                  n = new u(a);
                n.Initialize(t),
                  (n.m_promise = _.GetAsPromise(n)),
                  this.m_mapClanToCreatorHome.set(e, n);
              });
            let e = (0, c.Tc)("creatorhomeforapp", "application_config");
            this.ValidateStoreDefaultAppList(e) &&
              e.forEach((t) => {
                void 0 !== t.appid &&
                  (this.m_mapAppToCreatorIDList.has(t.appid) ||
                    this.m_mapAppToCreatorIDList.set(t.appid, new Array()),
                  this.m_mapAppToCreatorIDList.get(t.appid).push(t));
              }),
              (this.m_bLoadedFromConfig = !0);
          }
        }
        static async GetAsPromise(t) {
          return t;
        }
        ValidateStoreDefault(t) {
          const e = t;
          return (
            !!(
              e &&
              Array.isArray(e) &&
              e.length > 0 &&
              "object" == typeof e[0]
            ) &&
            "string" == typeof e[0].name &&
            ("string" == typeof e[0].creator_clan_id ||
              "number" == typeof e[0].creator_clan_id)
          );
        }
        ValidateStoreDefaultAppList(t) {
          const e = t;
          return (
            !!(
              e &&
              Array.isArray(e) &&
              e.length > 0 &&
              "object" == typeof e[0]
            ) &&
            "number" == typeof e[0].clan_account_id &&
            e[0].clan_account_id > 0 &&
            "number" == typeof e[0].appid &&
            e[0].appid > 0
          );
        }
        BHasCreatorHomeLoaded(t) {
          return (
            this.m_mapClanToCreatorHome.has(t.GetAccountID()) &&
            this.m_mapClanToCreatorHome.get(t.GetAccountID()).BIsLoaded()
          );
        }
        GetCreatorHome(t) {
          return this.m_mapClanToCreatorHome.get(t.GetAccountID());
        }
        GetCreatorHomeByID(t) {
          return this.m_mapClanToCreatorHome.get(t.clan_account_id);
        }
        async LoadCreatorHome(t, e) {
          if (
            (this.LazyInit(),
            !this.m_mapClanToCreatorHome.has(t.GetAccountID()))
          ) {
            let a = new u(t);
            (a.m_promise = this.InternalCreatorHome(a, e)),
              await a.m_promise,
              this.m_mapClanToCreatorHome.set(t.GetAccountID(), a);
          }
          return this.m_mapClanToCreatorHome.get(t.GetAccountID()).m_promise;
        }
        async InternalCreatorHome(t, e) {
          let a = { get_appids: !0, l: c.TS.LANGUAGE, origin: self.origin },
            n =
              c.TS.STORE_BASE_URL +
              "curator/" +
              t.GetClanAccountID() +
              "/ajaxgetcreatorhomeinfo",
            o = await i().get(n, { params: a, cancelToken: e && e.token });
          return t.Initialize(o.data), t;
        }
        async LoadCreatorHomeListForAppIncludeHiddden(t, e) {
          if ((this.LazyInit(), !this.m_mapAppToCreatorIDList.has(t))) {
            let a = { appid: t },
              n = c.TS.STORE_BASE_URL + "events/ajaxgetcreatorhomeidforapp",
              o = await i().get(n, {
                params: a,
                cancelToken: e && e.token,
                withCredentials: !0,
              });
            this.m_mapAppToCreatorIDList.set(t, o.data.creator_list);
          }
          return this.m_mapAppToCreatorIDList.get(t);
        }
        async SearchCreatorHomeStore(t, e, a) {
          let n = `${c.TS.STORE_BASE_URL}curator/0/ajaxsearchcurators`,
            o = {
              term: t.replace(" ", "+"),
              require_creator: e,
              cc: c.TS.COUNTRY,
              l: c.TS.LANGUAGE,
              origin: self.origin,
            },
            r = new Array();
          const l = await i().get(n, { params: o, cancelToken: a.token });
          return (
            l.data.curators &&
              (0, s.h5)(() => {
                l.data.curators.forEach((t) => {
                  if (!this.m_mapClanToCreatorHome.has(t.creator_clan_id)) {
                    let e = m.b.InitFromClanID(t.creator_clan_id),
                      a = new u(e);
                    a.Initialize(t),
                      this.m_mapClanToCreatorHome.set(t.creator_clan_id, a);
                  }
                  r.push(this.m_mapClanToCreatorHome.get(t.creator_clan_id));
                });
              }),
            r
          );
        }
        GetCreatorHomeListForAppIncludeHidden(t) {
          return this.m_mapAppToCreatorIDList.has(t)
            ? this.m_mapAppToCreatorIDList.get(t)
            : [];
        }
      }
      (0, n.Cg)([s.sH], _.prototype, "m_mapClanToCreatorHome", void 0),
        (0, n.Cg)([s.sH], _.prototype, "m_mapAppToCreatorIDList", void 0),
        (0, n.Cg)([s.XI], _.prototype, "LazyInit", null);
      const p = new _();
      function d(t) {
        const e = m.b.InitFromClanID(t),
          [a, n] = l.useState(p.GetCreatorHome(e)),
          r = (0, o.m)("useCreatorHome");
        return (
          l.useEffect(() => {
            const e = m.b.InitFromClanID(t);
            p.BHasCreatorHomeLoaded(e)
              ? a || n(p.GetCreatorHome(e))
              : p.LoadCreatorHome(e).then(() => {
                  r?.token?.reason || n(p.GetCreatorHome(e));
                });
          }, [r?.token?.reason, t, a]),
          a
        );
      }
      window.g_CreatorHomeStore = p;
    },
    55263: (t, e, a) => {
      a.d(e, {
        G6: () => l,
        Gg: () => m,
        Ow: () => u,
        YM: () => I,
        mZ: () => _,
        t7: () => c,
        zX: () => d,
      });
      var n = a(41735),
        o = a.n(n),
        r = a(90626),
        i = a(56093),
        s = a(29482);
      function l(t, e, a, n) {
        const l = (0, r.useRef)(),
          c = (0, r.useRef)(void 0),
          u = (0, i.CH)();
        l.current = t;
        const [m, _] = (0, r.useState)(void 0),
          {
            include_assets: p,
            include_release: d,
            include_platforms: I,
            include_all_purchase_options: h,
            include_screenshots: C,
            include_trailers: f,
            include_ratings: g,
            include_tag_count: L,
            include_reviews: A,
            include_basic_info: y,
            include_supported_languages: D,
            include_full_description: G,
            include_included_items: S,
            include_assets_without_overrides: T,
            apply_user_filters: v,
            include_links: w,
          } = a;
        if (
          ((0, r.useEffect)(() => {
            const a = {
              include_assets: p,
              include_release: d,
              include_platforms: I,
              include_all_purchase_options: h,
              include_screenshots: C,
              include_trailers: f,
              include_ratings: g,
              include_tag_count: L,
              include_reviews: A,
              include_basic_info: y,
              include_supported_languages: D,
              include_full_description: G,
              include_included_items: S,
              include_assets_without_overrides: T,
              apply_user_filters: v,
              include_links: w,
            };
            let r = null;
            return (
              !t ||
                s.A.Get().BHasStoreItem(t, e, a) ||
                (void 0 !== m && n && n == c.current) ||
                (n !== c.current && (_(void 0), (c.current = n)),
                (r = o().CancelToken.source()),
                s.A.Get()
                  .QueueStoreItemRequest(t, e, a)
                  .then((e) => {
                    r?.token.reason || l.current !== t || _(1 == e), u();
                  })),
              () => r?.cancel("useStoreItemCache: unmounting")
            );
          }, [t, e, n, m, p, d, I, h, C, f, g, L, A, y, D, G, S, T, v, w, u]),
          !t)
        )
          return [null, 2];
        if (!1 === m) return [void 0, 2];
        if (s.A.Get().BIsStoreItemMissing(t, e)) return [void 0, 2];
        if (!s.A.Get().BHasStoreItem(t, e, a)) return [void 0, 1];
        const b = s.A.Get().GetStoreItemWithLegacyVisibilityCheck(t, e);
        return b ? [b, 3] : [null, 2];
      }
      function c(t, e, a) {
        return l(t, 0, e, a);
      }
      function u(t, e, a) {
        return l(t, 2, e, a);
      }
      function m(t, e, a) {
        return l(t, 1, e, a);
      }
      function _(t, e, a) {
        const [n, o] = l(t, e, a);
        let r;
        1 != n?.GetStoreItemType() ||
          n.GetAssets()?.GetHeaderURL() ||
          1 != n?.GetIncludedAppIDs().length ||
          (r = n.GetIncludedAppIDs()[0]);
        const [i, s] = c(r, a);
        return r && i?.BIsVisible() ? [i, s] : [n, o];
      }
      function p(t, e, a, n) {
        const l = (0, i.CH)(),
          {
            include_assets: c,
            include_release: u,
            include_platforms: m,
            include_all_purchase_options: _,
            include_screenshots: p,
            include_trailers: d,
            include_ratings: I,
            include_tag_count: h,
            include_reviews: C,
            include_basic_info: f,
            include_supported_languages: g,
            include_full_description: L,
            include_included_items: A,
            include_assets_without_overrides: y,
            apply_user_filters: D,
            include_links: G,
          } = a;
        if (
          ((0, r.useEffect)(() => {
            if (!t || 0 == t.length) return;
            const a = {
                include_assets: c,
                include_release: u,
                include_platforms: m,
                include_all_purchase_options: _,
                include_screenshots: p,
                include_trailers: d,
                include_ratings: I,
                include_tag_count: h,
                include_reviews: C,
                include_basic_info: f,
                include_supported_languages: g,
                include_full_description: L,
                include_included_items: A,
                include_assets_without_overrides: y,
                apply_user_filters: D,
                include_links: G,
              },
              n = t.filter(
                (t) =>
                  !(
                    s.A.Get().BHasStoreItem(t, e, a) ||
                    s.A.Get().BIsStoreItemMissing(t, e)
                  ),
              );
            if (0 == n.length) return;
            const r = o().CancelToken.source(),
              i = n.map((t) => s.A.Get().QueueStoreItemRequest(t, e, a));
            return (
              Promise.all(i).then(() => {
                r.token.reason || l();
              }),
              () => r.cancel("useStoreItemCacheMultiplePackages: unmounting")
            );
          }, [t, e, n, l, c, u, m, _, p, d, I, h, C, f, g, L, A, y, D, G]),
          !t)
        )
          return 2;
        if (
          !t.every(
            (t) =>
              s.A.Get().BHasStoreItem(t, e, a) ||
              s.A.Get().BIsStoreItemMissing(t, e),
          )
        )
          return 1;
        return t.every((t) =>
          s.A.Get().GetStoreItemWithLegacyVisibilityCheck(t, e),
        )
          ? 3
          : 2;
      }
      function d(t, e, a) {
        return p(t, 0, e, a);
      }
      function I() {
        r.useEffect(
          () => (
            s.A.Get().SetReturnUnavailableItems(!0),
            () => s.A.Get().SetReturnUnavailableItems(!1)
          ),
          [],
        );
      }
    },
    4434: (t, e, a) => {
      a.d(e, { m: () => i });
      var n = a(41735),
        o = a.n(n),
        r = a(90626);
      function i(t) {
        const e = r.useRef(o().CancelToken.source());
        return (
          r.useEffect(() => {
            const a = e.current;
            return () => a.cancel(t ? `${t}: unmounting` : "unmounting");
          }, [t]),
          e.current
        );
      }
    },
  },
]);

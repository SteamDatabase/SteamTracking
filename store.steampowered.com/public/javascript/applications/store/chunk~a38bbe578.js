/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [9057],
  {
    82079: (t, e, n) => {
      n.d(e, { KU: () => I, sV: () => p });
      var a = n(33940),
        o = n(52868),
        i = n.n(o),
        r = n(50265),
        s = n(89526),
        l = n(75457),
        c = n(47165),
        u = n(23801),
        m = n(32765),
        _ = n(74831);
      class d {
        constructor() {
          (this.m_mapAppIDToClanInfo = new Map()),
            (this.m_mapVanityToClanInfo = new Map()),
            (this.m_mapClanAccountIDToClanInfo = new Map()),
            (this.m_mapPromisesLoading = new Map()),
            (this.m_rgQueuedEventsClanIDs = new Array()),
            (this.m_bLoadedFromConfig = !1);
        }
        Init() {
          this.LazyInit();
        }
        LazyInit() {
          this.m_bLoadedFromConfig ||
            ((0, r.z)(() => {
              let t = (0, m.ip)("groupvanityinfo", "application_config");
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
            (0, u.X)(t.BIsValid(), "Clan SteamID is not valid when ClanInfo"),
            (0, u.X)(
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
            clanSteamID: new c.K(t.clanSteamIDString),
            appid: t.appid,
            vanity_url: t.vanity_url,
            member_count: t.member_count,
            is_ogg: t.is_ogg,
            is_creator_home: t.is_creator_home,
            is_curator: t.is_curator,
            has_visible_store_page: t.has_visible_store_page,
            has_rss_feed: t.has_rss_feed,
            rss_language: t.rss_language ? t.rss_language : l.Df.k_Lang_English,
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
        LoadOGGClanInfoForAppID(t) {
          return (0, a.mG)(this, void 0, void 0, function* () {
            if (
              (this.LazyInit(),
              "string" == typeof t && (t = parseInt(t)),
              (0, u.X)(
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
          });
        }
        InternalLoadOGGClanInfoForAppID(t) {
          return (0, a.mG)(this, void 0, void 0, function* () {
            const e =
              m.De.COMMUNITY_BASE_URL + "ogg/" + t + "/ajaxgetvanityandclanid/";
            let n = yield i().get(e, { params: this.GetRequestParam() });
            return (
              this.InternalSetupValue(n.data), this.m_mapAppIDToClanInfo.get(t)
            );
          });
        }
        LoadOGGClanInfoForIdentifier(t) {
          return (0, a.mG)(this, void 0, void 0, function* () {
            if (
              (this.LazyInit(),
              this.m_mapVanityToClanInfo.has(
                null == t ? void 0 : t.toLocaleLowerCase(),
              ))
            )
              return this.m_mapVanityToClanInfo.get(
                null == t ? void 0 : t.toLocaleLowerCase(),
              );
            let e =
              "storevanity_" + (null == t ? void 0 : t.toLocaleLowerCase());
            return (
              this.m_mapPromisesLoading.has(e) ||
                this.m_mapPromisesLoading.set(
                  e,
                  this.InternalLoadOGGClanInfoForIdentifier(t),
                ),
              this.m_mapPromisesLoading.get(e)
            );
          });
        }
        InternalLoadOGGClanInfoForIdentifier(t) {
          return (0, a.mG)(this, void 0, void 0, function* () {
            const e =
              m.De.COMMUNITY_BASE_URL +
              "games/" +
              t +
              "/ajaxgetvanityandclanid/";
            let n = yield i().get(e, { params: this.GetRequestParam() });
            return (
              this.InternalSetupValue(n.data),
              this.m_mapVanityToClanInfo.get(
                null == t ? void 0 : t.toLocaleLowerCase(),
              )
            );
          });
        }
        LoadOGGClanInfoForGroupVanity(t) {
          return (0, a.mG)(this, void 0, void 0, function* () {
            if (
              (this.LazyInit(),
              this.m_mapVanityToClanInfo.has(
                null == t ? void 0 : t.toLocaleLowerCase(),
              ))
            )
              return this.m_mapVanityToClanInfo.get(
                null == t ? void 0 : t.toLocaleLowerCase(),
              );
            let e = "community_name_" + t;
            return (
              this.m_mapPromisesLoading.has(e) ||
                this.m_mapPromisesLoading.set(
                  e,
                  this.InternalLoadOGGClanInfoForGroupVanity(
                    null == t ? void 0 : t.toLocaleLowerCase(),
                  ),
                ),
              this.m_mapPromisesLoading.get(e)
            );
          });
        }
        InternalLoadOGGClanInfoForGroupVanity(t) {
          return (0, a.mG)(this, void 0, void 0, function* () {
            const e =
              m.De.COMMUNITY_BASE_URL +
              "groups/" +
              t +
              "/ajaxgetvanityandclanid/";
            let n = yield i().get(e, { params: this.GetRequestParam() });
            return (
              this.InternalSetupValue(n.data),
              this.m_mapVanityToClanInfo.get(
                null == t ? void 0 : t.toLocaleLowerCase(),
              )
            );
          });
        }
        LoadClanInfoForClanSteamID(t) {
          return (0, a.mG)(this, void 0, void 0, function* () {
            this.LazyInit();
            let e = t.GetAccountID();
            if (this.m_mapClanAccountIDToClanInfo.has(e))
              return this.m_mapClanAccountIDToClanInfo.get(e);
            let n = "clanaccountid_" + e;
            return (
              this.m_mapPromisesLoading.has(n) ||
                this.m_mapPromisesLoading.set(
                  n,
                  this.InternalLoadClanInfoForClanSteamID(t),
                ),
              this.m_mapPromisesLoading.get(n)
            );
          });
        }
        LoadClanInfoForClanAccountID(t) {
          return (0, a.mG)(this, void 0, void 0, function* () {
            const e = c.K.InitFromClanID(t);
            return this.LoadClanInfoForClanSteamID(e);
          });
        }
        InternalLoadClanInfoForClanSteamID(t) {
          return (0, a.mG)(this, void 0, void 0, function* () {
            let e = t.GetAccountID();
            const n =
              m.De.COMMUNITY_BASE_URL +
              "gid/" +
              t.ConvertTo64BitString() +
              "/ajaxgetvanityandclanid/";
            let a = yield i().get(n, { params: this.GetRequestParam() });
            return (
              this.InternalSetupValue(a.data),
              this.m_mapClanAccountIDToClanInfo.get(e)
            );
          });
        }
        GetOGGClanInfo(t) {
          return "string" == typeof t
            ? this.m_mapVanityToClanInfo.get(
                null == t ? void 0 : t.toLocaleLowerCase(),
              )
            : this.m_mapAppIDToClanInfo.get(t);
        }
        GetClanSteamIDForAppID(t) {
          if ((this.LazyInit(), this.m_mapAppIDToClanInfo.has(t)))
            return c.K.InitFromClanID(
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
            (0, u.X)(
              !!t,
              "Unepxected clanid when requesting information. GetClanInfoByClanAccountID ",
            ),
            this.m_mapClanAccountIDToClanInfo.get(t)
          );
        }
        GetCreatorStoreURL(t) {
          let e = _.bq.GetCreatorHome(t);
          if (e) return e.GetCreatorHomeURL("developer");
          let n = this.GetClanInfoByClanAccountID(t.GetAccountID());
          return (
            m.De.COMMUNITY_BASE_URL +
            (n.vanity_url
              ? "groups/" + n.vanity_url
              : "gid/" + t.ConvertTo64BitString())
          );
        }
      }
      (0, a.gn)([r.LO], d.prototype, "m_mapAppIDToClanInfo", void 0),
        (0, a.gn)([r.LO], d.prototype, "m_mapVanityToClanInfo", void 0),
        (0, a.gn)([r.LO], d.prototype, "m_mapClanAccountIDToClanInfo", void 0),
        (0, a.gn)([r.aD], d.prototype, "RegisterClanData", null),
        (0, a.gn)([r.aD], d.prototype, "InternalSetupValue", null);
      const p = new d();
      function I(t) {
        const [e, n] = (0, s.useState)(
            t ? p.GetClanInfoByClanAccountID(t) : void 0,
          ),
          [a, o] = (0, s.useState)(!!t && !p.BHasClanInfoLoadedByAccountID(t));
        return (
          (0, s.useEffect)(() => {
            if (t)
              if (p.BHasClanInfoLoadedByAccountID(t))
                n(p.GetClanInfoByClanAccountID(t)), o(!1);
              else {
                o(!0);
                const e = c.K.InitFromClanID(
                  "string" == typeof t ? Number.parseInt(t) : t,
                );
                p.LoadClanInfoForClanSteamID(e).then((t) => {
                  n(t), o(!1);
                });
              }
            else n(void 0), o(!1);
          }, [t]),
          [a, e]
        );
      }
      window.g_ClanStore = p;
    },
    74831: (t, e, n) => {
      n.d(e, { bq: () => I, iG: () => h });
      var a = n(33940),
        o = n(58218),
        i = n(52868),
        r = n.n(i),
        s = n(50265),
        l = n(89526),
        c = n(42735),
        u = n(42525),
        m = n(32765);
      class _ {
        constructor(t) {
          (this.m_appidList = new Array()),
            (this.m_socialList = new Array()),
            (this.m_strName = ""),
            (this.m_strAvatarURLFullSize = ""),
            (this.m_strTagLineLoc = ""),
            (this.m_nFollowers = 0),
            (this.m_strVanity = ""),
            (this.m_webLink = void 0),
            (this.m_bIsLoaded = !1),
            (this.m_bIsHidden = !1),
            (this.m_clanAccountFlags = 0),
            (this.m_clanSteamID = t);
        }
        Initialize(t) {
          (this.m_strName = t.name || ""),
            (this.m_strAvatarURLFullSize =
              t.avatar_url_full_size ||
              "https://avatars.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_full.jpg"),
            t.social && t.social.forEach((t) => this.m_socialList.push(t)),
            (this.m_strTagLineLoc = t.tag_line_localized || ""),
            (this.m_nFollowers = t.followers || 0),
            (this.m_strVanity = t.vanity || void 0),
            (this.m_webLink = t.weblink),
            (this.m_bIsHidden = t.hidden || !1),
            (this.m_clanAccountFlags = t.clan_account_flags),
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
          return Boolean(
            this.m_clanAccountFlags &
              u.jI.k_EClanAccountFlag_AllowPartnerEventEditor,
          );
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
        GetSocialList() {
          return this.m_socialList;
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
                  m.De.STORE_BASE_URL + "publisher/" + this.m_strVanity + "/"
                );
              case "franchise":
                return (
                  m.De.STORE_BASE_URL + "franchise/" + this.m_strVanity + "/"
                );
            }
            return m.De.STORE_BASE_URL + "developer/" + this.m_strVanity + "/";
          }
          return (
            m.De.STORE_BASE_URL +
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
        EnablePartnerEventEditorFlag() {
          return (0, a.mG)(this, void 0, void 0, function* () {
            this.BIsPartnerEventEditorEnabled() ||
              (yield this.UpdateGroupFlagsFeature(
                [
                  u.jI.k_EClanAccountFlag_AllowClanImages,
                  u.jI.k_EClanAccountFlag_AllowPartnerEventEditor,
                ],
                !0,
              ));
          });
        }
        UpdateGroupFlagsFeature(t, e) {
          return (0, a.mG)(this, void 0, void 0, function* () {
            let n = m.De.PARTNER_BASE_URL + "sales/ajaxupdateclanaccountflags",
              a = this.m_clanAccountFlags;
            if (
              (t.forEach((t) => {
                e ? (a |= t) : (a &= ~t);
              }),
              a == this.m_clanAccountFlags)
            )
              return;
            let o = new Array();
            a & u.jI.k_EClanAccountFlag_TrustedPress &&
              o.push(u.jI.k_EClanAccountFlag_TrustedPress),
              a & u.jI.k_EClanAccountFlag_AllowPartnerEventEditor &&
                o.push(u.jI.k_EClanAccountFlag_AllowPartnerEventEditor),
              a & u.jI.k_EClanAccountFlag_AllowClanImages &&
                o.push(u.jI.k_EClanAccountFlag_AllowClanImages),
              a & u.jI.k_EClanAccountFlag_AllowRSSFeed &&
                o.push(u.jI.k_EClanAccountFlag_AllowRSSFeed),
              a & u.jI.k_EClanAccountFlag_AllowFAQEditing &&
                o.push(u.jI.k_EClanAccountFlag_AllowFAQEditing),
              a & u.jI.k_EClanAccountFlag_AllowSalePageEditing &&
                o.push(u.jI.k_EClanAccountFlag_AllowSalePageEditing);
            let i = new FormData();
            i.append("sessionid", m.De.SESSIONID),
              i.append("clan_account_id", this.GetClanAccountID().toString()),
              i.append("accountflags", JSON.stringify(o));
            let s = yield r().post(n, i);
            s &&
              200 == s.status &&
              s.data.success == c.s.k_EResultOK &&
              (this.m_clanAccountFlags = a);
          });
        }
      }
      (0, a.gn)([s.LO], _.prototype, "m_appidList", void 0),
        (0, a.gn)([s.LO], _.prototype, "m_nFollowers", void 0),
        (0, a.gn)([s.LO], _.prototype, "m_clanAccountFlags", void 0);
      var d = n(47165);
      class p {
        constructor() {
          (this.m_mapClanToCreatorHome = new Map()),
            (this.m_mapAppToCreatorIDList = new Map()),
            (this.m_bLoadedFromConfig = !1);
        }
        LazyInit() {
          if (!this.m_bLoadedFromConfig) {
            let t = (0, m.kQ)("creatorhome", "application_config");
            this.ValidateStoreDefault(t) &&
              t.forEach((t) => {
                let e = Number(t.creator_clan_id),
                  n = d.K.InitFromClanID(e),
                  a = new _(n);
                a.Initialize(t),
                  (a.m_promise = p.GetAsPromise(a)),
                  this.m_mapClanToCreatorHome.set(e, a);
              });
            let e = (0, m.kQ)("creatorhomeforapp", "application_config");
            this.ValidateStoreDefaultAppList(e) &&
              e.forEach((t) => {
                this.m_mapAppToCreatorIDList.has(t.appid) ||
                  this.m_mapAppToCreatorIDList.set(t.appid, new Array()),
                  this.m_mapAppToCreatorIDList.get(t.appid).push(t);
              }),
              (this.m_bLoadedFromConfig = !0);
          }
        }
        static GetAsPromise(t) {
          return (0, a.mG)(this, void 0, void 0, function* () {
            return t;
          });
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
        LoadCreatorHome(t, e) {
          return (0, a.mG)(this, void 0, void 0, function* () {
            if (
              (this.LazyInit(),
              !this.m_mapClanToCreatorHome.has(t.GetAccountID()))
            ) {
              let n = new _(t);
              (n.m_promise = this.InternalCreatorHome(n, e)),
                yield n.m_promise,
                this.m_mapClanToCreatorHome.set(t.GetAccountID(), n);
            }
            return this.m_mapClanToCreatorHome.get(t.GetAccountID()).m_promise;
          });
        }
        InternalCreatorHome(t, e) {
          return (0, a.mG)(this, void 0, void 0, function* () {
            let n = { get_appids: !0, l: m.De.LANGUAGE, origin: self.origin },
              a =
                m.De.STORE_BASE_URL +
                "curator/" +
                t.GetClanAccountID() +
                "/ajaxgetcreatorhomeinfo",
              o = yield r().get(a, { params: n, cancelToken: e && e.token });
            return t.Initialize(o.data), t;
          });
        }
        LoadCreatorHomeListForAppIncludeHiddden(t, e) {
          return (0, a.mG)(this, void 0, void 0, function* () {
            if ((this.LazyInit(), !this.m_mapAppToCreatorIDList.has(t))) {
              let n = { appid: t },
                a = m.De.STORE_BASE_URL + "events/ajaxgetcreatorhomeidforapp",
                o = yield r().get(a, {
                  params: n,
                  cancelToken: e && e.token,
                  withCredentials: !0,
                });
              this.m_mapAppToCreatorIDList.set(t, o.data.creator_list);
            }
            return this.m_mapAppToCreatorIDList.get(t);
          });
        }
        SearchCreatorHomeStore(t, e, n) {
          return (0, a.mG)(this, void 0, void 0, function* () {
            let a = `${m.De.STORE_BASE_URL}curator/0/ajaxsearchcurators`,
              o = {
                term: t.replace(" ", "+"),
                require_creator: e,
                cc: m.De.COUNTRY,
                l: m.De.LANGUAGE,
              },
              i = new Array();
            const l = yield r().get(a, { params: o, cancelToken: n.token });
            return (
              l.data.curators &&
                (0, s.z)(() => {
                  l.data.curators.forEach((t) => {
                    if (!this.m_mapClanToCreatorHome.has(t.creator_clan_id)) {
                      let e = d.K.InitFromClanID(t.creator_clan_id),
                        n = new _(e);
                      n.Initialize(t),
                        this.m_mapClanToCreatorHome.set(t.creator_clan_id, n);
                    }
                    i.push(this.m_mapClanToCreatorHome.get(t.creator_clan_id));
                  });
                }),
              i
            );
          });
        }
        GetCreatorHomeListForAppIncludeHidden(t) {
          return this.m_mapAppToCreatorIDList.has(t)
            ? this.m_mapAppToCreatorIDList.get(t)
            : [];
        }
      }
      (0, a.gn)([s.LO], p.prototype, "m_mapClanToCreatorHome", void 0),
        (0, a.gn)([s.LO], p.prototype, "m_mapAppToCreatorIDList", void 0),
        (0, a.gn)([s.aD], p.prototype, "LazyInit", null);
      const I = new p();
      function h(t) {
        var e;
        const n = d.K.InitFromClanID(t),
          [a, i] = l.useState(I.GetCreatorHome(n)),
          r = (0, o.T)("useCreatorHome");
        return (
          l.useEffect(() => {
            const e = d.K.InitFromClanID(t);
            I.BHasCreatorHomeLoaded(e)
              ? a || i(I.GetCreatorHome(e))
              : I.LoadCreatorHome(e).then(() => {
                  var t;
                  (null === (t = null == r ? void 0 : r.token) || void 0 === t
                    ? void 0
                    : t.reason) || i(I.GetCreatorHome(e));
                });
          }, [
            null === (e = null == r ? void 0 : r.token) || void 0 === e
              ? void 0
              : e.reason,
            t,
            a,
          ]),
          a
        );
      }
      window.g_CreatorHomeStore = I;
    },
    25871: (t, e, n) => {
      n.d(e, {
        Vm: () => p,
        Y0: () => a,
        ie: () => d,
        jk: () => m,
        oA: () => C,
        vs: () => _,
        wZ: () => h,
      });
      var a,
        o = n(52868),
        i = n.n(o),
        r = n(89526),
        s = (n(24174), n(42735)),
        l = n(68562),
        c = n(4306),
        u = n(92616);
      function m(t, e, n, o) {
        const l = (0, r.useRef)(),
          m = (0, r.useRef)(void 0),
          _ = (0, c.NW)();
        l.current = t;
        const [d, p] = (0, r.useState)(void 0),
          {
            include_assets: I,
            include_release: h,
            include_platforms: C,
            include_all_purchase_options: f,
            include_screenshots: g,
            include_trailers: A,
            include_ratings: L,
            include_tag_count: v,
            include_reviews: S,
            include_basic_info: D,
            include_supported_languages: y,
            include_full_description: G,
            include_included_items: E,
          } = n;
        if (
          ((0, r.useEffect)(() => {
            const n = {
              include_assets: I,
              include_release: h,
              include_platforms: C,
              include_all_purchase_options: f,
              include_screenshots: g,
              include_trailers: A,
              include_ratings: L,
              include_tag_count: v,
              include_reviews: S,
              include_basic_info: D,
              include_supported_languages: y,
              include_full_description: G,
              include_included_items: E,
            };
            let a = null;
            return (
              !t ||
                u.Z.Get().BHasStoreItem(t, e, n) ||
                (void 0 !== d && o && o == m.current) ||
                (o !== m.current && (p(void 0), (m.current = o)),
                (a = i().CancelToken.source()),
                u.Z.Get()
                  .QueueStoreItemRequest(t, e, n)
                  .then((e) => {
                    a.token.reason ||
                      l.current !== t ||
                      p(e == s.s.k_EResultOK),
                      _();
                  })),
              () => a && a.cancel("useStoreItemCache: unmounting")
            );
          }, [t, e, o, d, I, h, C, f, g, A, L, v, S, D, y, G, E, _]),
          !t)
        )
          return [null, a.k_EStoreItemCacheState_Unavailable];
        if (!1 === d) return [void 0, a.k_EStoreItemCacheState_Unavailable];
        if (u.Z.Get().BIsStoreItemMissing(t, e))
          return [void 0, a.k_EStoreItemCacheState_Unavailable];
        if (!u.Z.Get().BHasStoreItem(t, e, n))
          return [void 0, a.k_EStoreItemCacheState_Loading];
        const T = u.Z.Get().GetStoreItemWithLegacyVisibilityCheck(t, e);
        return T
          ? [T, a.k_EStoreItemCacheState_Found]
          : [null, a.k_EStoreItemCacheState_Unavailable];
      }
      function _(t, e, n) {
        return m(t, l.vn.k_EStoreItemType_App, e, n);
      }
      function d(t, e, n) {
        return m(t, l.vn.k_EStoreItemType_Package, e, n);
      }
      function p(t, e, n) {
        const [a, o] = m(t, e, n),
          [s, c] = (0, r.useState)(null),
          [u, d] = _(s, n);
        return (
          (0, r.useEffect)(() => {
            var t;
            const e = i().CancelToken.source();
            if (
              (null == a ? void 0 : a.GetStoreItemType()) ==
                l.vn.k_EStoreItemType_Package &&
              1 == (null == a ? void 0 : a.GetIncludedAppIDs().length)
            ) {
              const n = a.GetIncludedAppIDs()[0];
              s != n &&
                ((null === (t = null == e ? void 0 : e.token) || void 0 === t
                  ? void 0
                  : t.reason) ||
                  c(n));
            }
            return () =>
              e.cancel("useStoreItemCacheOrPackageSingleApp: unmounting");
          }, [s, a]),
          s ? [u, d] : [a, o]
        );
      }
      function I(t, e, n, o) {
        const s = (0, c.NW)(),
          {
            include_assets: l,
            include_release: m,
            include_platforms: _,
            include_all_purchase_options: d,
            include_screenshots: p,
            include_trailers: I,
            include_ratings: h,
            include_tag_count: C,
            include_reviews: f,
            include_basic_info: g,
            include_supported_languages: A,
            include_full_description: L,
            include_included_items: v,
          } = n;
        if (
          ((0, r.useEffect)(() => {
            if (!t || 0 == t.length) return;
            const n = {
                include_assets: l,
                include_release: m,
                include_platforms: _,
                include_all_purchase_options: d,
                include_screenshots: p,
                include_trailers: I,
                include_ratings: h,
                include_tag_count: C,
                include_reviews: f,
                include_basic_info: g,
                include_supported_languages: A,
                include_full_description: L,
                include_included_items: v,
              },
              a = t.filter(
                (t) =>
                  !(
                    u.Z.Get().BHasStoreItem(t, e, n) ||
                    u.Z.Get().BIsStoreItemMissing(t, e)
                  ),
              );
            if (0 == a.length) return;
            const o = i().CancelToken.source(),
              r = a.map((t) => u.Z.Get().QueueStoreItemRequest(t, e, n));
            return (
              Promise.all(r).then(() => {
                o.token.reason || s();
              }),
              () => o.cancel("useStoreItemCacheMultiplePackages: unmounting")
            );
          }, [t, e, o, s, l, m, _, d, p, I, h, C, f, g, A, L, v]),
          !t)
        )
          return a.k_EStoreItemCacheState_Unavailable;
        if (
          !t.every(
            (t) =>
              u.Z.Get().BHasStoreItem(t, e, n) ||
              u.Z.Get().BIsStoreItemMissing(t, e),
          )
        )
          return a.k_EStoreItemCacheState_Loading;
        return t.every((t) =>
          u.Z.Get().GetStoreItemWithLegacyVisibilityCheck(t, e),
        )
          ? a.k_EStoreItemCacheState_Found
          : a.k_EStoreItemCacheState_Unavailable;
      }
      function h(t, e, n) {
        return I(t, l.vn.k_EStoreItemType_App, e, n);
      }
      function C() {
        r.useEffect(
          () => (
            u.Z.Get().SetReturnUnavailableItems(!0),
            () => u.Z.Get().SetReturnUnavailableItems(!1)
          ),
          [],
        );
      }
      !(function (t) {
        (t[(t.k_EStoreItemCacheState_Loading = 1)] =
          "k_EStoreItemCacheState_Loading"),
          (t[(t.k_EStoreItemCacheState_Unavailable = 2)] =
            "k_EStoreItemCacheState_Unavailable"),
          (t[(t.k_EStoreItemCacheState_Found = 3)] =
            "k_EStoreItemCacheState_Found");
      })(a || (a = {}));
    },
    58218: (t, e, n) => {
      n.d(e, { T: () => r });
      var a = n(52868),
        o = n.n(a),
        i = n(89526);
      function r(t) {
        const e = i.useRef(o().CancelToken.source());
        return (
          i.useEffect(() => {
            const n = e.current;
            return () => n.cancel(t ? `${t}: unmounting` : "unmounting");
          }, [t]),
          e.current
        );
      }
    },
  },
]);

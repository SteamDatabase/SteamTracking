/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [1496],
  {
    4556: (t, a, n) => {
      n.d(a, { U: () => r, W: () => o });
      var e = n(32765);
      const o = "fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb";
      function r(t, a) {
        let n = ".jpg";
        (t && "0000000000000000000000000000000000000000" !== t) || (t = o),
          44 == t.length && ((n = t.substr(-4)), (t = t.substr(0, 40)));
        let r = e.De.AVATAR_BASE_URL;
        return (
          r ||
            ((r = e.De.MEDIA_CDN_COMMUNITY_URL + "images/avatars/"),
            (r += t.substr(0, 2) + "/")),
          (r += t),
          a && "small" != a && (r += "_" + a),
          (r += n),
          r
        );
      }
    },
    82079: (t, a, n) => {
      n.d(a, { KU: () => I, sV: () => d, yh: () => h });
      var e = n(33940),
        o = n(52868),
        r = n.n(o),
        i = n(50265),
        s = n(89526),
        l = n(75457),
        m = n(47165),
        c = n(23801),
        u = n(32765),
        p = n(74831);
      class _ {
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
            ((0, i.z)(() => {
              let t = (0, u.ip)("groupvanityinfo", "application_config");
              this.ValidateClanConfig(t) &&
                t.forEach((t) => {
                  this.InternalSetupValue(t);
                });
            }),
            (this.m_bLoadedFromConfig = !0));
        }
        ValidateClanConfig(t) {
          const a = t;
          return (
            !!(
              a &&
              Array.isArray(a) &&
              a.length > 0 &&
              "object" == typeof a[0]
            ) &&
            "number" == typeof a[0].clanAccountID &&
            ("number" == typeof a[0].appid ||
              "string" == typeof a[0].vanity_url)
          );
        }
        BHasClanInfoLoaded(t) {
          return (
            (0, c.X)(t.BIsValid(), "Clan SteamID is not valid when ClanInfo"),
            (0, c.X)(
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
          for (const a of t) this.InternalSetupValue(a);
        }
        InternalSetupValue(t) {
          const a = {
            clanAccountID: t.clanAccountID,
            clanSteamID: new m.K(t.clanSteamIDString),
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
          0 != t.appid && this.m_mapAppIDToClanInfo.set(t.appid, a),
            t.vanity_url &&
              t.vanity_url.length > 0 &&
              this.m_mapVanityToClanInfo.set(
                t.vanity_url.toLocaleLowerCase(),
                a,
              ),
            this.m_mapClanAccountIDToClanInfo.set(t.clanAccountID, a);
        }
        GetRequestParam() {
          return { origin: self.origin };
        }
        LoadOGGClanInfoForAppID(t) {
          return (0, e.mG)(this, void 0, void 0, function* () {
            if (
              (this.LazyInit(),
              "string" == typeof t && (t = parseInt(t)),
              (0, c.X)(
                0 != t,
                "LoadOGGClanInfoForAppID called with appid of zero",
              ),
              0 == t)
            )
              return null;
            if (this.m_mapAppIDToClanInfo.has(t))
              return this.m_mapAppIDToClanInfo.get(t);
            let a = "appid_" + t;
            return (
              this.m_mapPromisesLoading.has(a) ||
                this.m_mapPromisesLoading.set(
                  a,
                  this.InternalLoadOGGClanInfoForAppID(t),
                ),
              this.m_mapPromisesLoading.get(a)
            );
          });
        }
        InternalLoadOGGClanInfoForAppID(t) {
          return (0, e.mG)(this, void 0, void 0, function* () {
            const a =
              u.De.COMMUNITY_BASE_URL + "ogg/" + t + "/ajaxgetvanityandclanid/";
            let n = yield r().get(a, { params: this.GetRequestParam() });
            return (
              this.InternalSetupValue(n.data), this.m_mapAppIDToClanInfo.get(t)
            );
          });
        }
        LoadOGGClanInfoForIdentifier(t) {
          return (0, e.mG)(this, void 0, void 0, function* () {
            if (
              (this.LazyInit(),
              this.m_mapVanityToClanInfo.has(
                null == t ? void 0 : t.toLocaleLowerCase(),
              ))
            )
              return this.m_mapVanityToClanInfo.get(
                null == t ? void 0 : t.toLocaleLowerCase(),
              );
            let a =
              "storevanity_" + (null == t ? void 0 : t.toLocaleLowerCase());
            return (
              this.m_mapPromisesLoading.has(a) ||
                this.m_mapPromisesLoading.set(
                  a,
                  this.InternalLoadOGGClanInfoForIdentifier(t),
                ),
              this.m_mapPromisesLoading.get(a)
            );
          });
        }
        InternalLoadOGGClanInfoForIdentifier(t) {
          return (0, e.mG)(this, void 0, void 0, function* () {
            const a =
              u.De.COMMUNITY_BASE_URL +
              "games/" +
              t +
              "/ajaxgetvanityandclanid/";
            let n = yield r().get(a, { params: this.GetRequestParam() });
            return (
              this.InternalSetupValue(n.data),
              this.m_mapVanityToClanInfo.get(
                null == t ? void 0 : t.toLocaleLowerCase(),
              )
            );
          });
        }
        LoadOGGClanInfoForGroupVanity(t) {
          return (0, e.mG)(this, void 0, void 0, function* () {
            if (
              (this.LazyInit(),
              this.m_mapVanityToClanInfo.has(
                null == t ? void 0 : t.toLocaleLowerCase(),
              ))
            )
              return this.m_mapVanityToClanInfo.get(
                null == t ? void 0 : t.toLocaleLowerCase(),
              );
            let a = "community_name_" + t;
            return (
              this.m_mapPromisesLoading.has(a) ||
                this.m_mapPromisesLoading.set(
                  a,
                  this.InternalLoadOGGClanInfoForGroupVanity(
                    null == t ? void 0 : t.toLocaleLowerCase(),
                  ),
                ),
              this.m_mapPromisesLoading.get(a)
            );
          });
        }
        InternalLoadOGGClanInfoForGroupVanity(t) {
          return (0, e.mG)(this, void 0, void 0, function* () {
            const a =
              u.De.COMMUNITY_BASE_URL +
              "groups/" +
              t +
              "/ajaxgetvanityandclanid/";
            let n = yield r().get(a, { params: this.GetRequestParam() });
            return (
              this.InternalSetupValue(n.data),
              this.m_mapVanityToClanInfo.get(
                null == t ? void 0 : t.toLocaleLowerCase(),
              )
            );
          });
        }
        LoadClanInfoForClanSteamID(t) {
          return (0, e.mG)(this, void 0, void 0, function* () {
            this.LazyInit();
            let a = t.GetAccountID();
            if (this.m_mapClanAccountIDToClanInfo.has(a))
              return this.m_mapClanAccountIDToClanInfo.get(a);
            let n = "clanaccountid_" + a;
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
          return (0, e.mG)(this, void 0, void 0, function* () {
            const a = m.K.InitFromClanID(t);
            return this.LoadClanInfoForClanSteamID(a);
          });
        }
        InternalLoadClanInfoForClanSteamID(t) {
          return (0, e.mG)(this, void 0, void 0, function* () {
            let a = t.GetAccountID();
            const n =
              u.De.COMMUNITY_BASE_URL +
              "gid/" +
              t.ConvertTo64BitString() +
              "/ajaxgetvanityandclanid/";
            let e = yield r().get(n, { params: this.GetRequestParam() });
            return (
              this.InternalSetupValue(e.data),
              this.m_mapClanAccountIDToClanInfo.get(a)
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
            return m.K.InitFromClanID(
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
            (0, c.X)(
              !!t,
              "Unepxected clanid when requesting information. GetClanInfoByClanAccountID ",
            ),
            this.m_mapClanAccountIDToClanInfo.get(t)
          );
        }
        GetCreatorStoreURL(t) {
          let a = p.bq.GetCreatorHome(t);
          if (a) return a.GetCreatorHomeURL("developer");
          let n = this.GetClanInfoByClanAccountID(t.GetAccountID());
          return (
            u.De.COMMUNITY_BASE_URL +
            (n.vanity_url
              ? "groups/" + n.vanity_url
              : "gid/" + t.ConvertTo64BitString())
          );
        }
      }
      (0, e.gn)([i.LO], _.prototype, "m_mapAppIDToClanInfo", void 0),
        (0, e.gn)([i.LO], _.prototype, "m_mapVanityToClanInfo", void 0),
        (0, e.gn)([i.LO], _.prototype, "m_mapClanAccountIDToClanInfo", void 0),
        (0, e.gn)([i.aD], _.prototype, "RegisterClanData", null),
        (0, e.gn)([i.aD], _.prototype, "InternalSetupValue", null);
      const d = new _();
      function I(t) {
        const [a, n] = (0, s.useState)(
            t ? d.GetClanInfoByClanAccountID(t) : void 0,
          ),
          [e, o] = (0, s.useState)(!!t && !d.BHasClanInfoLoadedByAccountID(t));
        return (
          (0, s.useEffect)(() => {
            if (t)
              if (d.BHasClanInfoLoadedByAccountID(t))
                n(d.GetClanInfoByClanAccountID(t)), o(!1);
              else {
                o(!0);
                const a = m.K.InitFromClanID(
                  "string" == typeof t ? Number.parseInt(t) : t,
                );
                d.LoadClanInfoForClanSteamID(a).then((t) => {
                  n(t), o(!1);
                });
              }
            else n(void 0), o(!1);
          }, [t]),
          [e, a]
        );
      }
      function h(t) {
        const [a, n] = (0, s.useState)(d.GetOGGClanInfo(t));
        return (
          (0, s.useEffect)(() => {
            a || d.LoadOGGClanInfoForGroupVanity(t).then(n);
          }, [a, t]),
          a
        );
      }
      window.g_ClanStore = d;
    },
    74831: (t, a, n) => {
      n.d(a, { bq: () => I, iG: () => h });
      var e = n(33940),
        o = n(58218),
        r = n(52868),
        i = n.n(r),
        s = n(50265),
        l = n(89526),
        m = n(42735),
        c = n(42525),
        u = n(32765);
      class p {
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
              c.jI.k_EClanAccountFlag_AllowPartnerEventEditor,
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
                  u.De.STORE_BASE_URL + "publisher/" + this.m_strVanity + "/"
                );
              case "franchise":
                return (
                  u.De.STORE_BASE_URL + "franchise/" + this.m_strVanity + "/"
                );
            }
            return u.De.STORE_BASE_URL + "developer/" + this.m_strVanity + "/";
          }
          return (
            u.De.STORE_BASE_URL +
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
          return (0, e.mG)(this, void 0, void 0, function* () {
            this.BIsPartnerEventEditorEnabled() ||
              (yield this.UpdateGroupFlagsFeature(
                [
                  c.jI.k_EClanAccountFlag_AllowClanImages,
                  c.jI.k_EClanAccountFlag_AllowPartnerEventEditor,
                ],
                !0,
              ));
          });
        }
        UpdateGroupFlagsFeature(t, a) {
          return (0, e.mG)(this, void 0, void 0, function* () {
            let n = u.De.PARTNER_BASE_URL + "sales/ajaxupdateclanaccountflags",
              e = this.m_clanAccountFlags;
            if (
              (t.forEach((t) => {
                a ? (e |= t) : (e &= ~t);
              }),
              e == this.m_clanAccountFlags)
            )
              return;
            let o = new Array();
            e & c.jI.k_EClanAccountFlag_TrustedPress &&
              o.push(c.jI.k_EClanAccountFlag_TrustedPress),
              e & c.jI.k_EClanAccountFlag_AllowPartnerEventEditor &&
                o.push(c.jI.k_EClanAccountFlag_AllowPartnerEventEditor),
              e & c.jI.k_EClanAccountFlag_AllowClanImages &&
                o.push(c.jI.k_EClanAccountFlag_AllowClanImages),
              e & c.jI.k_EClanAccountFlag_AllowRSSFeed &&
                o.push(c.jI.k_EClanAccountFlag_AllowRSSFeed),
              e & c.jI.k_EClanAccountFlag_AllowFAQEditing &&
                o.push(c.jI.k_EClanAccountFlag_AllowFAQEditing),
              e & c.jI.k_EClanAccountFlag_AllowSalePageEditing &&
                o.push(c.jI.k_EClanAccountFlag_AllowSalePageEditing);
            let r = new FormData();
            r.append("sessionid", u.De.SESSIONID),
              r.append("clan_account_id", this.GetClanAccountID().toString()),
              r.append("accountflags", JSON.stringify(o));
            let s = yield i().post(n, r);
            s &&
              200 == s.status &&
              s.data.success == m.s.k_EResultOK &&
              (this.m_clanAccountFlags = e);
          });
        }
      }
      (0, e.gn)([s.LO], p.prototype, "m_appidList", void 0),
        (0, e.gn)([s.LO], p.prototype, "m_nFollowers", void 0),
        (0, e.gn)([s.LO], p.prototype, "m_clanAccountFlags", void 0);
      var _ = n(47165);
      class d {
        constructor() {
          (this.m_mapClanToCreatorHome = new Map()),
            (this.m_mapAppToCreatorIDList = new Map()),
            (this.m_bLoadedFromConfig = !1);
        }
        LazyInit() {
          if (!this.m_bLoadedFromConfig) {
            let t = (0, u.kQ)("creatorhome", "application_config");
            this.ValidateStoreDefault(t) &&
              t.forEach((t) => {
                let a = Number(t.creator_clan_id),
                  n = _.K.InitFromClanID(a),
                  e = new p(n);
                e.Initialize(t),
                  (e.m_promise = d.GetAsPromise(e)),
                  this.m_mapClanToCreatorHome.set(a, e);
              });
            let a = (0, u.kQ)("creatorhomeforapp", "application_config");
            this.ValidateStoreDefaultAppList(a) &&
              a.forEach((t) => {
                this.m_mapAppToCreatorIDList.has(t.appid) ||
                  this.m_mapAppToCreatorIDList.set(t.appid, new Array()),
                  this.m_mapAppToCreatorIDList.get(t.appid).push(t);
              }),
              (this.m_bLoadedFromConfig = !0);
          }
        }
        static GetAsPromise(t) {
          return (0, e.mG)(this, void 0, void 0, function* () {
            return t;
          });
        }
        ValidateStoreDefault(t) {
          const a = t;
          return (
            !!(
              a &&
              Array.isArray(a) &&
              a.length > 0 &&
              "object" == typeof a[0]
            ) &&
            "string" == typeof a[0].name &&
            ("string" == typeof a[0].creator_clan_id ||
              "number" == typeof a[0].creator_clan_id)
          );
        }
        ValidateStoreDefaultAppList(t) {
          const a = t;
          return (
            !!(
              a &&
              Array.isArray(a) &&
              a.length > 0 &&
              "object" == typeof a[0]
            ) &&
            "number" == typeof a[0].clan_account_id &&
            a[0].clan_account_id > 0 &&
            "number" == typeof a[0].appid &&
            a[0].appid > 0
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
        LoadCreatorHome(t, a) {
          return (0, e.mG)(this, void 0, void 0, function* () {
            if (
              (this.LazyInit(),
              !this.m_mapClanToCreatorHome.has(t.GetAccountID()))
            ) {
              let n = new p(t);
              (n.m_promise = this.InternalCreatorHome(n, a)),
                yield n.m_promise,
                this.m_mapClanToCreatorHome.set(t.GetAccountID(), n);
            }
            return this.m_mapClanToCreatorHome.get(t.GetAccountID()).m_promise;
          });
        }
        InternalCreatorHome(t, a) {
          return (0, e.mG)(this, void 0, void 0, function* () {
            let n = { get_appids: !0, l: u.De.LANGUAGE, origin: self.origin },
              e =
                u.De.STORE_BASE_URL +
                "curator/" +
                t.GetClanAccountID() +
                "/ajaxgetcreatorhomeinfo",
              o = yield i().get(e, { params: n, cancelToken: a && a.token });
            return t.Initialize(o.data), t;
          });
        }
        LoadCreatorHomeListForAppIncludeHiddden(t, a) {
          return (0, e.mG)(this, void 0, void 0, function* () {
            if ((this.LazyInit(), !this.m_mapAppToCreatorIDList.has(t))) {
              let n = { appid: t },
                e = u.De.STORE_BASE_URL + "events/ajaxgetcreatorhomeidforapp",
                o = yield i().get(e, {
                  params: n,
                  cancelToken: a && a.token,
                  withCredentials: !0,
                });
              this.m_mapAppToCreatorIDList.set(t, o.data.creator_list);
            }
            return this.m_mapAppToCreatorIDList.get(t);
          });
        }
        SearchCreatorHomeStore(t, a, n) {
          return (0, e.mG)(this, void 0, void 0, function* () {
            let e = `${u.De.STORE_BASE_URL}curator/0/ajaxsearchcurators`,
              o = {
                term: t.replace(" ", "+"),
                require_creator: a,
                cc: u.De.COUNTRY,
                l: u.De.LANGUAGE,
              },
              r = new Array();
            const l = yield i().get(e, { params: o, cancelToken: n.token });
            return (
              l.data.curators &&
                (0, s.z)(() => {
                  l.data.curators.forEach((t) => {
                    if (!this.m_mapClanToCreatorHome.has(t.creator_clan_id)) {
                      let a = _.K.InitFromClanID(t.creator_clan_id),
                        n = new p(a);
                      n.Initialize(t),
                        this.m_mapClanToCreatorHome.set(t.creator_clan_id, n);
                    }
                    r.push(this.m_mapClanToCreatorHome.get(t.creator_clan_id));
                  });
                }),
              r
            );
          });
        }
        GetCreatorHomeListForAppIncludeHidden(t) {
          return this.m_mapAppToCreatorIDList.has(t)
            ? this.m_mapAppToCreatorIDList.get(t)
            : [];
        }
      }
      (0, e.gn)([s.LO], d.prototype, "m_mapClanToCreatorHome", void 0),
        (0, e.gn)([s.LO], d.prototype, "m_mapAppToCreatorIDList", void 0),
        (0, e.gn)([s.aD], d.prototype, "LazyInit", null);
      const I = new d();
      function h(t) {
        var a;
        const n = _.K.InitFromClanID(t),
          [e, r] = l.useState(I.GetCreatorHome(n)),
          i = (0, o.T)("useCreatorHome");
        return (
          l.useEffect(() => {
            const a = _.K.InitFromClanID(t);
            I.BHasCreatorHomeLoaded(a)
              ? e || r(I.GetCreatorHome(a))
              : I.LoadCreatorHome(a).then(() => {
                  var t;
                  (null === (t = null == i ? void 0 : i.token) || void 0 === t
                    ? void 0
                    : t.reason) || r(I.GetCreatorHome(a));
                });
          }, [
            null === (a = null == i ? void 0 : i.token) || void 0 === a
              ? void 0
              : a.reason,
            t,
            e,
          ]),
          e
        );
      }
      window.g_CreatorHomeStore = I;
    },
    58218: (t, a, n) => {
      n.d(a, { T: () => i });
      var e = n(52868),
        o = n.n(e),
        r = n(89526);
      function i(t) {
        const a = r.useRef(o().CancelToken.source());
        return (
          r.useEffect(() => {
            const n = a.current;
            return () => n.cancel(t ? `${t}: unmounting` : "unmounting");
          }, [t]),
          a.current
        );
      }
    },
  },
]);

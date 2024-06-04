/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [5164],
  {
    93243: (t, e, n) => {
      n.d(e, { KU: () => p, sV: () => _ });
      var a = n(85556),
        o = n(80751),
        i = n.n(o),
        r = n(54842),
        s = n(47427),
        l = n(35427),
        u = n(62210),
        c = n(37563),
        m = n(58670);
      class d {
        constructor() {
          (this.m_mapAppIDToClanInfo = new Map()),
            (this.m_mapVanityToClanInfo = new Map()),
            (this.m_mapClanAccountIDToClanInfo = new Map()),
            (this.m_mapPromisesLoading = new Map()),
            (this.m_rgQueuedEventsClanIDs = new Array()),
            (this.m_bLoadedFromConfig = !1),
            (0, r.rC)(this);
        }
        Init() {
          this.LazyInit();
        }
        LazyInit() {
          this.m_bLoadedFromConfig ||
            ((0, r.z)(() => {
              let t = (0, c.ip)("groupvanityinfo", "application_config");
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
            clanSteamID: new l.K(t.clanSteamIDString),
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
              c.De.COMMUNITY_BASE_URL + "ogg/" + t + "/ajaxgetvanityandclanid/";
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
              c.De.COMMUNITY_BASE_URL +
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
              c.De.COMMUNITY_BASE_URL +
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
            const e = l.K.InitFromClanID(t);
            return this.LoadClanInfoForClanSteamID(e);
          });
        }
        InternalLoadClanInfoForClanSteamID(t) {
          return (0, a.mG)(this, void 0, void 0, function* () {
            let e = t.GetAccountID();
            const n =
              c.De.COMMUNITY_BASE_URL +
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
            return l.K.InitFromClanID(
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
          let e = m.bq.GetCreatorHome(t);
          if (e) return e.GetCreatorHomeURL("developer");
          let n = this.GetClanInfoByClanAccountID(t.GetAccountID());
          return (
            c.De.COMMUNITY_BASE_URL +
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
      const _ = new d();
      function p(t) {
        const [e, n] = (0, s.useState)(
            t ? _.GetClanInfoByClanAccountID(t) : void 0,
          ),
          [a, o] = (0, s.useState)(!!t && !_.BHasClanInfoLoadedByAccountID(t));
        return (
          (0, s.useEffect)(() => {
            if (t)
              if (_.BHasClanInfoLoadedByAccountID(t))
                n(_.GetClanInfoByClanAccountID(t)), o(!1);
              else {
                o(!0);
                const e = l.K.InitFromClanID(
                  "string" == typeof t ? Number.parseInt(t) : t,
                );
                _.LoadClanInfoForClanSteamID(e).then((t) => {
                  n(t), o(!1);
                });
              }
            else n(void 0), o(!1);
          }, [t]),
          [a, e]
        );
      }
      window.g_ClanStore = _;
    },
    58670: (t, e, n) => {
      n.d(e, { bq: () => _, iG: () => p });
      var a = n(85556),
        o = n(29480),
        i = n(80751),
        r = n.n(i),
        s = n(54842),
        l = n(47427),
        u = n(37563);
      class c {
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
            (0, s.rC)(this),
            (this.m_clanSteamID = t);
        }
        Initialize(t) {
          var e;
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
            (this.m_clanAccountFlags =
              null !== (e = t.clan_account_flags) && void 0 !== e ? e : 0),
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
          return (0, a.mG)(this, void 0, void 0, function* () {
            this.BIsPartnerEventEditorEnabled() ||
              (yield this.UpdateGroupFlagsFeature([2, 8], !0));
          });
        }
        UpdateGroupFlagsFeature(t, e) {
          return (0, a.mG)(this, void 0, void 0, function* () {
            let n = u.De.PARTNER_BASE_URL + "sales/ajaxupdateclanaccountflags",
              a = this.m_clanAccountFlags;
            if (
              (t.forEach((t) => {
                e ? (a |= t) : (a &= ~t);
              }),
              a == this.m_clanAccountFlags)
            )
              return;
            let o = new Array();
            1 & a && o.push(1),
              8 & a && o.push(8),
              2 & a && o.push(2),
              4 & a && o.push(4),
              16 & a && o.push(16),
              32 & a && o.push(32),
              64 & a && o.push(64);
            let i = new FormData();
            i.append("sessionid", u.De.SESSIONID),
              i.append("clan_account_id", this.GetClanAccountID().toString()),
              i.append("accountflags", JSON.stringify(o));
            let s = yield r().post(n, i);
            s &&
              200 == s.status &&
              1 == s.data.success &&
              (this.m_clanAccountFlags = a);
          });
        }
      }
      (0, a.gn)([s.LO], c.prototype, "m_appidList", void 0),
        (0, a.gn)([s.LO], c.prototype, "m_nFollowers", void 0),
        (0, a.gn)([s.LO], c.prototype, "m_clanAccountFlags", void 0);
      var m = n(35427);
      class d {
        constructor() {
          (this.m_mapClanToCreatorHome = new Map()),
            (this.m_mapAppToCreatorIDList = new Map()),
            (this.m_bLoadedFromConfig = !1),
            (0, s.rC)(this);
        }
        LazyInit() {
          if (!this.m_bLoadedFromConfig) {
            let t = (0, u.kQ)("creatorhome", "application_config");
            this.ValidateStoreDefault(t) &&
              t.forEach((t) => {
                let e = Number(t.creator_clan_id),
                  n = m.K.InitFromClanID(e),
                  a = new c(n);
                a.Initialize(t),
                  (a.m_promise = d.GetAsPromise(a)),
                  this.m_mapClanToCreatorHome.set(e, a);
              });
            let e = (0, u.kQ)("creatorhomeforapp", "application_config");
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
              let n = new c(t);
              (n.m_promise = this.InternalCreatorHome(n, e)),
                yield n.m_promise,
                this.m_mapClanToCreatorHome.set(t.GetAccountID(), n);
            }
            return this.m_mapClanToCreatorHome.get(t.GetAccountID()).m_promise;
          });
        }
        InternalCreatorHome(t, e) {
          return (0, a.mG)(this, void 0, void 0, function* () {
            let n = { get_appids: !0, l: u.De.LANGUAGE, origin: self.origin },
              a =
                u.De.STORE_BASE_URL +
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
                a = u.De.STORE_BASE_URL + "events/ajaxgetcreatorhomeidforapp",
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
            let a = `${u.De.STORE_BASE_URL}curator/0/ajaxsearchcurators`,
              o = {
                term: t.replace(" ", "+"),
                require_creator: e,
                cc: u.De.COUNTRY,
                l: u.De.LANGUAGE,
                origin: self.origin,
              },
              i = new Array();
            const l = yield r().get(a, { params: o, cancelToken: n.token });
            return (
              l.data.curators &&
                (0, s.z)(() => {
                  l.data.curators.forEach((t) => {
                    if (!this.m_mapClanToCreatorHome.has(t.creator_clan_id)) {
                      let e = m.K.InitFromClanID(t.creator_clan_id),
                        n = new c(e);
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
      (0, a.gn)([s.LO], d.prototype, "m_mapClanToCreatorHome", void 0),
        (0, a.gn)([s.LO], d.prototype, "m_mapAppToCreatorIDList", void 0),
        (0, a.gn)([s.aD], d.prototype, "LazyInit", null);
      const _ = new d();
      function p(t) {
        var e;
        const n = m.K.InitFromClanID(t),
          [a, i] = l.useState(_.GetCreatorHome(n)),
          r = (0, o.T)("useCreatorHome");
        return (
          l.useEffect(() => {
            const e = m.K.InitFromClanID(t);
            _.BHasCreatorHomeLoaded(e)
              ? a || i(_.GetCreatorHome(e))
              : _.LoadCreatorHome(e).then(() => {
                  var t;
                  (null === (t = null == r ? void 0 : r.token) || void 0 === t
                    ? void 0
                    : t.reason) || i(_.GetCreatorHome(e));
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
      window.g_CreatorHomeStore = _;
    },
    80886: (t, e, n) => {
      n.d(e, {
        Vm: () => d,
        dY: () => h,
        ie: () => m,
        jk: () => l,
        oA: () => I,
        vs: () => u,
        wZ: () => p,
        yo: () => c,
      });
      var a = n(80751),
        o = n.n(a),
        i = n(47427),
        r = n(20417),
        s = n(15690);
      function l(t, e, n, a) {
        const l = (0, i.useRef)(),
          u = (0, i.useRef)(void 0),
          c = (0, r.NW)();
        l.current = t;
        const [m, d] = (0, i.useState)(void 0),
          {
            include_assets: _,
            include_release: p,
            include_platforms: h,
            include_all_purchase_options: I,
            include_screenshots: f,
            include_trailers: C,
            include_ratings: g,
            include_tag_count: L,
            include_reviews: v,
            include_basic_info: D,
            include_supported_languages: A,
            include_full_description: y,
            include_included_items: G,
            include_assets_without_overrides: S,
            apply_user_filters: T,
          } = n;
        if (
          ((0, i.useEffect)(() => {
            const n = {
              include_assets: _,
              include_release: p,
              include_platforms: h,
              include_all_purchase_options: I,
              include_screenshots: f,
              include_trailers: C,
              include_ratings: g,
              include_tag_count: L,
              include_reviews: v,
              include_basic_info: D,
              include_supported_languages: A,
              include_full_description: y,
              include_included_items: G,
              include_assets_without_overrides: S,
              apply_user_filters: T,
            };
            let i = null;
            return (
              !t ||
                s.Z.Get().BHasStoreItem(t, e, n) ||
                (void 0 !== m && a && a == u.current) ||
                (a !== u.current && (d(void 0), (u.current = a)),
                (i = o().CancelToken.source()),
                s.Z.Get()
                  .QueueStoreItemRequest(t, e, n)
                  .then((e) => {
                    (null == i ? void 0 : i.token.reason) ||
                      l.current !== t ||
                      d(1 == e),
                      c();
                  })),
              () =>
                null == i ? void 0 : i.cancel("useStoreItemCache: unmounting")
            );
          }, [t, e, a, m, _, p, h, I, f, C, g, L, v, D, A, y, G, S, T, c]),
          !t)
        )
          return [null, 2];
        if (!1 === m) return [void 0, 2];
        if (s.Z.Get().BIsStoreItemMissing(t, e)) return [void 0, 2];
        if (!s.Z.Get().BHasStoreItem(t, e, n)) return [void 0, 1];
        const w = s.Z.Get().GetStoreItemWithLegacyVisibilityCheck(t, e);
        return w ? [w, 3] : [null, 2];
      }
      function u(t, e, n) {
        return l(t, 0, e, n);
      }
      function c(t, e, n) {
        return l(t, 2, e, n);
      }
      function m(t, e, n) {
        return l(t, 1, e, n);
      }
      function d(t, e, n) {
        const [a, o] = l(t, e, n),
          [r, s] = (0, i.useState)(null),
          [c, m] = u(r, n);
        return (
          (0, i.useEffect)(() => {
            var t;
            if (
              1 == (null == a ? void 0 : a.GetStoreItemType()) &&
              !(null === (t = a.GetAssets()) || void 0 === t
                ? void 0
                : t.GetHeaderURL()) &&
              1 == (null == a ? void 0 : a.GetIncludedAppIDs().length)
            ) {
              const t = a.GetIncludedAppIDs()[0];
              s(t);
            }
          }, [a]),
          r && (null == c ? void 0 : c.BIsVisible()) ? [c, m] : [a, o]
        );
      }
      function _(t, e, n, a) {
        const l = (0, r.NW)(),
          {
            include_assets: u,
            include_release: c,
            include_platforms: m,
            include_all_purchase_options: d,
            include_screenshots: _,
            include_trailers: p,
            include_ratings: h,
            include_tag_count: I,
            include_reviews: f,
            include_basic_info: C,
            include_supported_languages: g,
            include_full_description: L,
            include_included_items: v,
            include_assets_without_overrides: D,
            apply_user_filters: A,
          } = n;
        if (
          ((0, i.useEffect)(() => {
            if (!t || 0 == t.length) return;
            const n = {
                include_assets: u,
                include_release: c,
                include_platforms: m,
                include_all_purchase_options: d,
                include_screenshots: _,
                include_trailers: p,
                include_ratings: h,
                include_tag_count: I,
                include_reviews: f,
                include_basic_info: C,
                include_supported_languages: g,
                include_full_description: L,
                include_included_items: v,
                include_assets_without_overrides: D,
                apply_user_filters: A,
              },
              a = t.filter(
                (t) =>
                  !(
                    s.Z.Get().BHasStoreItem(t, e, n) ||
                    s.Z.Get().BIsStoreItemMissing(t, e)
                  ),
              );
            if (0 == a.length) return;
            const i = o().CancelToken.source(),
              r = a.map((t) => s.Z.Get().QueueStoreItemRequest(t, e, n));
            return (
              Promise.all(r).then(() => {
                i.token.reason || l();
              }),
              () => i.cancel("useStoreItemCacheMultiplePackages: unmounting")
            );
          }, [t, e, a, l, u, c, m, d, _, p, h, I, f, C, g, L, v, D, A]),
          !t)
        )
          return 2;
        if (
          !t.every(
            (t) =>
              s.Z.Get().BHasStoreItem(t, e, n) ||
              s.Z.Get().BIsStoreItemMissing(t, e),
          )
        )
          return 1;
        return t.every((t) =>
          s.Z.Get().GetStoreItemWithLegacyVisibilityCheck(t, e),
        )
          ? 3
          : 2;
      }
      function p(t, e, n) {
        return _(t, 0, e, n);
      }
      function h(t, e, n) {
        return _(t, 1, e, n);
      }
      function I() {
        i.useEffect(
          () => (
            s.Z.Get().SetReturnUnavailableItems(!0),
            () => s.Z.Get().SetReturnUnavailableItems(!1)
          ),
          [],
        );
      }
    },
  },
]);

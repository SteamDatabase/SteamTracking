/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [3243],
  {
    93243: (t, a, e) => {
      e.d(a, { KU: () => _, sV: () => d });
      var n = e(85556),
        o = e(80751),
        r = e.n(o),
        i = e(54842),
        s = e(47427),
        l = e(35427),
        m = e(62210),
        c = e(37563),
        p = e(58670);
      class u {
        constructor() {
          (this.m_mapAppIDToClanInfo = new Map()),
            (this.m_mapVanityToClanInfo = new Map()),
            (this.m_mapClanAccountIDToClanInfo = new Map()),
            (this.m_mapPromisesLoading = new Map()),
            (this.m_rgQueuedEventsClanIDs = new Array()),
            (this.m_bLoadedFromConfig = !1),
            (0, i.rC)(this);
        }
        Init() {
          this.LazyInit();
        }
        LazyInit() {
          this.m_bLoadedFromConfig ||
            ((0, i.z)(() => {
              let t = (0, c.ip)("groupvanityinfo", "application_config");
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
            (0, m.X)(t.BIsValid(), "Clan SteamID is not valid when ClanInfo"),
            (0, m.X)(
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
          return (0, n.mG)(this, void 0, void 0, function* () {
            if (
              (this.LazyInit(),
              "string" == typeof t && (t = parseInt(t)),
              (0, m.X)(
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
          return (0, n.mG)(this, void 0, void 0, function* () {
            const a =
              c.De.COMMUNITY_BASE_URL + "ogg/" + t + "/ajaxgetvanityandclanid/";
            let e = yield r().get(a, { params: this.GetRequestParam() });
            return (
              this.InternalSetupValue(e.data), this.m_mapAppIDToClanInfo.get(t)
            );
          });
        }
        LoadOGGClanInfoForIdentifier(t) {
          return (0, n.mG)(this, void 0, void 0, function* () {
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
          return (0, n.mG)(this, void 0, void 0, function* () {
            const a =
              c.De.COMMUNITY_BASE_URL +
              "games/" +
              t +
              "/ajaxgetvanityandclanid/";
            let e = yield r().get(a, { params: this.GetRequestParam() });
            return (
              this.InternalSetupValue(e.data),
              this.m_mapVanityToClanInfo.get(
                null == t ? void 0 : t.toLocaleLowerCase(),
              )
            );
          });
        }
        LoadOGGClanInfoForGroupVanity(t) {
          return (0, n.mG)(this, void 0, void 0, function* () {
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
          return (0, n.mG)(this, void 0, void 0, function* () {
            const a =
              c.De.COMMUNITY_BASE_URL +
              "groups/" +
              t +
              "/ajaxgetvanityandclanid/";
            let e = yield r().get(a, { params: this.GetRequestParam() });
            return (
              this.InternalSetupValue(e.data),
              this.m_mapVanityToClanInfo.get(
                null == t ? void 0 : t.toLocaleLowerCase(),
              )
            );
          });
        }
        LoadClanInfoForClanSteamID(t) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            this.LazyInit();
            let a = t.GetAccountID();
            if (this.m_mapClanAccountIDToClanInfo.has(a))
              return this.m_mapClanAccountIDToClanInfo.get(a);
            let e = "clanaccountid_" + a;
            return (
              this.m_mapPromisesLoading.has(e) ||
                this.m_mapPromisesLoading.set(
                  e,
                  this.InternalLoadClanInfoForClanSteamID(t),
                ),
              this.m_mapPromisesLoading.get(e)
            );
          });
        }
        LoadClanInfoForClanAccountID(t) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            const a = l.K.InitFromClanID(t);
            return this.LoadClanInfoForClanSteamID(a);
          });
        }
        InternalLoadClanInfoForClanSteamID(t) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            let a = t.GetAccountID();
            const e =
              c.De.COMMUNITY_BASE_URL +
              "gid/" +
              t.ConvertTo64BitString() +
              "/ajaxgetvanityandclanid/";
            let n = yield r().get(e, { params: this.GetRequestParam() });
            return (
              this.InternalSetupValue(n.data),
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
            (0, m.X)(
              !!t,
              "Unepxected clanid when requesting information. GetClanInfoByClanAccountID ",
            ),
            this.m_mapClanAccountIDToClanInfo.get(t)
          );
        }
        GetCreatorStoreURL(t) {
          let a = p.bq.GetCreatorHome(t);
          if (a) return a.GetCreatorHomeURL("developer");
          let e = this.GetClanInfoByClanAccountID(t.GetAccountID());
          return (
            c.De.COMMUNITY_BASE_URL +
            (e.vanity_url
              ? "groups/" + e.vanity_url
              : "gid/" + t.ConvertTo64BitString())
          );
        }
      }
      (0, n.gn)([i.LO], u.prototype, "m_mapAppIDToClanInfo", void 0),
        (0, n.gn)([i.LO], u.prototype, "m_mapVanityToClanInfo", void 0),
        (0, n.gn)([i.LO], u.prototype, "m_mapClanAccountIDToClanInfo", void 0),
        (0, n.gn)([i.aD], u.prototype, "RegisterClanData", null),
        (0, n.gn)([i.aD], u.prototype, "InternalSetupValue", null);
      const d = new u();
      function _(t) {
        const [a, e] = (0, s.useState)(
            t ? d.GetClanInfoByClanAccountID(t) : void 0,
          ),
          [n, o] = (0, s.useState)(!!t && !d.BHasClanInfoLoadedByAccountID(t));
        return (
          (0, s.useEffect)(() => {
            if (t)
              if (d.BHasClanInfoLoadedByAccountID(t))
                e(d.GetClanInfoByClanAccountID(t)), o(!1);
              else {
                o(!0);
                const a = l.K.InitFromClanID(
                  "string" == typeof t ? Number.parseInt(t) : t,
                );
                d.LoadClanInfoForClanSteamID(a).then((t) => {
                  e(t), o(!1);
                });
              }
            else e(void 0), o(!1);
          }, [t]),
          [n, a]
        );
      }
      window.g_ClanStore = d;
    },
    58670: (t, a, e) => {
      e.d(a, { bq: () => d, iG: () => _ });
      var n = e(85556),
        o = e(29480),
        r = e(80751),
        i = e.n(r),
        s = e(54842),
        l = e(47427),
        m = e(37563);
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
          var a;
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
              null !== (a = t.clan_account_flags) && void 0 !== a ? a : 0),
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
          return (0, n.mG)(this, void 0, void 0, function* () {
            this.BIsPartnerEventEditorEnabled() ||
              (yield this.UpdateGroupFlagsFeature([2, 8], !0));
          });
        }
        UpdateGroupFlagsFeature(t, a) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            let e = m.De.PARTNER_BASE_URL + "sales/ajaxupdateclanaccountflags",
              n = this.m_clanAccountFlags;
            if (
              (t.forEach((t) => {
                a ? (n |= t) : (n &= ~t);
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
            r.append("sessionid", m.De.SESSIONID),
              r.append("clan_account_id", this.GetClanAccountID().toString()),
              r.append("accountflags", JSON.stringify(o));
            let s = yield i().post(e, r);
            s &&
              200 == s.status &&
              1 == s.data.success &&
              (this.m_clanAccountFlags = n);
          });
        }
      }
      (0, n.gn)([s.LO], c.prototype, "m_appidList", void 0),
        (0, n.gn)([s.LO], c.prototype, "m_nFollowers", void 0),
        (0, n.gn)([s.LO], c.prototype, "m_clanAccountFlags", void 0);
      var p = e(35427);
      class u {
        constructor() {
          (this.m_mapClanToCreatorHome = new Map()),
            (this.m_mapAppToCreatorIDList = new Map()),
            (this.m_bLoadedFromConfig = !1),
            (0, s.rC)(this);
        }
        LazyInit() {
          if (!this.m_bLoadedFromConfig) {
            let t = (0, m.kQ)("creatorhome", "application_config");
            this.ValidateStoreDefault(t) &&
              t.forEach((t) => {
                let a = Number(t.creator_clan_id),
                  e = p.K.InitFromClanID(a),
                  n = new c(e);
                n.Initialize(t),
                  (n.m_promise = u.GetAsPromise(n)),
                  this.m_mapClanToCreatorHome.set(a, n);
              });
            let a = (0, m.kQ)("creatorhomeforapp", "application_config");
            this.ValidateStoreDefaultAppList(a) &&
              a.forEach((t) => {
                void 0 !== t.appid &&
                  (this.m_mapAppToCreatorIDList.has(t.appid) ||
                    this.m_mapAppToCreatorIDList.set(t.appid, new Array()),
                  this.m_mapAppToCreatorIDList.get(t.appid).push(t));
              }),
              (this.m_bLoadedFromConfig = !0);
          }
        }
        static GetAsPromise(t) {
          return (0, n.mG)(this, void 0, void 0, function* () {
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
          return (0, n.mG)(this, void 0, void 0, function* () {
            if (
              (this.LazyInit(),
              !this.m_mapClanToCreatorHome.has(t.GetAccountID()))
            ) {
              let e = new c(t);
              (e.m_promise = this.InternalCreatorHome(e, a)),
                yield e.m_promise,
                this.m_mapClanToCreatorHome.set(t.GetAccountID(), e);
            }
            return this.m_mapClanToCreatorHome.get(t.GetAccountID()).m_promise;
          });
        }
        InternalCreatorHome(t, a) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            let e = { get_appids: !0, l: m.De.LANGUAGE, origin: self.origin },
              n =
                m.De.STORE_BASE_URL +
                "curator/" +
                t.GetClanAccountID() +
                "/ajaxgetcreatorhomeinfo",
              o = yield i().get(n, { params: e, cancelToken: a && a.token });
            return t.Initialize(o.data), t;
          });
        }
        LoadCreatorHomeListForAppIncludeHiddden(t, a) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            if ((this.LazyInit(), !this.m_mapAppToCreatorIDList.has(t))) {
              let e = { appid: t },
                n = m.De.STORE_BASE_URL + "events/ajaxgetcreatorhomeidforapp",
                o = yield i().get(n, {
                  params: e,
                  cancelToken: a && a.token,
                  withCredentials: !0,
                });
              this.m_mapAppToCreatorIDList.set(t, o.data.creator_list);
            }
            return this.m_mapAppToCreatorIDList.get(t);
          });
        }
        SearchCreatorHomeStore(t, a, e) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            let n = `${m.De.STORE_BASE_URL}curator/0/ajaxsearchcurators`,
              o = {
                term: t.replace(" ", "+"),
                require_creator: a,
                cc: m.De.COUNTRY,
                l: m.De.LANGUAGE,
                origin: self.origin,
              },
              r = new Array();
            const l = yield i().get(n, { params: o, cancelToken: e.token });
            return (
              l.data.curators &&
                (0, s.z)(() => {
                  l.data.curators.forEach((t) => {
                    if (!this.m_mapClanToCreatorHome.has(t.creator_clan_id)) {
                      let a = p.K.InitFromClanID(t.creator_clan_id),
                        e = new c(a);
                      e.Initialize(t),
                        this.m_mapClanToCreatorHome.set(t.creator_clan_id, e);
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
      (0, n.gn)([s.LO], u.prototype, "m_mapClanToCreatorHome", void 0),
        (0, n.gn)([s.LO], u.prototype, "m_mapAppToCreatorIDList", void 0),
        (0, n.gn)([s.aD], u.prototype, "LazyInit", null);
      const d = new u();
      function _(t) {
        var a;
        const e = p.K.InitFromClanID(t),
          [n, r] = l.useState(d.GetCreatorHome(e)),
          i = (0, o.T)("useCreatorHome");
        return (
          l.useEffect(() => {
            const a = p.K.InitFromClanID(t);
            d.BHasCreatorHomeLoaded(a)
              ? n || r(d.GetCreatorHome(a))
              : d.LoadCreatorHome(a).then(() => {
                  var t;
                  (null === (t = null == i ? void 0 : i.token) || void 0 === t
                    ? void 0
                    : t.reason) || r(d.GetCreatorHome(a));
                });
          }, [
            null === (a = null == i ? void 0 : i.token) || void 0 === a
              ? void 0
              : a.reason,
            t,
            n,
          ]),
          n
        );
      }
      window.g_CreatorHomeStore = d;
    },
  },
]);

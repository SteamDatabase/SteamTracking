/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [4796],
  {
    4796: (t, a, e) => {
      e.d(a, { TB: () => d, ac: () => _ });
      var n = e(34629),
        r = e(41735),
        o = e.n(r),
        i = e(14947),
        s = e(90626),
        l = e(17720),
        m = e(44332),
        c = e(78327),
        p = e(67165);
      class u {
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
              let t = (0, c.Fd)("groupvanityinfo", "application_config");
              this.ValidateClanConfig(t) &&
                t.forEach((t) => {
                  this.InternalSetupValue(t);
                });
            }),
            (this.m_bLoadedFromConfig = !0));
        }
        AddGroupVanities(t) {
          (0, i.h5)(() => {
            this.ValidateClanConfig(t) &&
              t.forEach((t) => {
                this.InternalSetupValue(t);
              });
          });
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
            (0, m.w)(t.BIsValid(), "Clan SteamID is not valid when ClanInfo"),
            (0, m.w)(
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
        async LoadOGGClanInfoForAppID(t) {
          if (
            (this.LazyInit(),
            "string" == typeof t && (t = parseInt(t)),
            (0, m.w)(
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
        }
        async InternalLoadOGGClanInfoForAppID(t) {
          const a =
            c.TS.COMMUNITY_BASE_URL + "ogg/" + t + "/ajaxgetvanityandclanid/";
          let e = null;
          try {
            e = (await o().get(a, { params: this.GetRequestParam() })).data;
          } catch (t) {}
          return e
            ? (this.InternalSetupValue(e), this.m_mapAppIDToClanInfo.get(t))
            : null;
        }
        async LoadOGGClanInfoForIdentifier(t) {
          if (
            (this.LazyInit(),
            this.m_mapVanityToClanInfo.has(t?.toLocaleLowerCase()))
          )
            return this.m_mapVanityToClanInfo.get(t?.toLocaleLowerCase());
          let a = "storevanity_" + t?.toLocaleLowerCase();
          return (
            this.m_mapPromisesLoading.has(a) ||
              this.m_mapPromisesLoading.set(
                a,
                this.InternalLoadOGGClanInfoForIdentifier(t),
              ),
            this.m_mapPromisesLoading.get(a)
          );
        }
        async InternalLoadOGGClanInfoForIdentifier(t) {
          const a =
            c.TS.COMMUNITY_BASE_URL + "games/" + t + "/ajaxgetvanityandclanid/";
          let e = await o().get(a, { params: this.GetRequestParam() });
          return (
            this.InternalSetupValue(e.data),
            this.m_mapVanityToClanInfo.get(t?.toLocaleLowerCase())
          );
        }
        async LoadOGGClanInfoForGroupVanity(t) {
          if (
            (this.LazyInit(),
            this.m_mapVanityToClanInfo.has(t?.toLocaleLowerCase()))
          )
            return this.m_mapVanityToClanInfo.get(t?.toLocaleLowerCase());
          let a = "community_name_" + t;
          return (
            this.m_mapPromisesLoading.has(a) ||
              this.m_mapPromisesLoading.set(
                a,
                this.InternalLoadOGGClanInfoForGroupVanity(
                  t?.toLocaleLowerCase(),
                ),
              ),
            this.m_mapPromisesLoading.get(a)
          );
        }
        async InternalLoadOGGClanInfoForGroupVanity(t) {
          const a =
            c.TS.COMMUNITY_BASE_URL +
            "groups/" +
            t +
            "/ajaxgetvanityandclanid/";
          let e = await o().get(a, { params: this.GetRequestParam() });
          return (
            this.InternalSetupValue(e.data),
            this.m_mapVanityToClanInfo.get(t?.toLocaleLowerCase())
          );
        }
        async LoadClanInfoForClanSteamID(t) {
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
        }
        async LoadClanInfoForClanAccountID(t) {
          const a = l.b.InitFromClanID(t);
          return this.LoadClanInfoForClanSteamID(a);
        }
        async InternalLoadClanInfoForClanSteamID(t) {
          let a = t.GetAccountID();
          const e =
            c.TS.COMMUNITY_BASE_URL +
            "gid/" +
            t.ConvertTo64BitString() +
            "/ajaxgetvanityandclanid/";
          let n = await o().get(e, { params: this.GetRequestParam() });
          return (
            this.InternalSetupValue(n.data),
            this.m_mapClanAccountIDToClanInfo.get(a)
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
            (0, m.w)(
              !!t,
              "Unepxected clanid when requesting information. GetClanInfoByClanAccountID ",
            ),
            this.m_mapClanAccountIDToClanInfo.get(t)
          );
        }
        GetCreatorStoreURL(t) {
          let a = p.pF.GetCreatorHome(t);
          if (a) return a.GetCreatorHomeURL("developer");
          let e = this.GetClanInfoByClanAccountID(t.GetAccountID());
          return (
            c.TS.COMMUNITY_BASE_URL +
            (e.vanity_url
              ? "groups/" + e.vanity_url
              : "gid/" + t.ConvertTo64BitString())
          );
        }
      }
      (0, n.Cg)([i.sH], u.prototype, "m_mapAppIDToClanInfo", void 0),
        (0, n.Cg)([i.sH], u.prototype, "m_mapVanityToClanInfo", void 0),
        (0, n.Cg)([i.sH], u.prototype, "m_mapClanAccountIDToClanInfo", void 0),
        (0, n.Cg)([i.XI], u.prototype, "RegisterClanData", null),
        (0, n.Cg)([i.XI], u.prototype, "InternalSetupValue", null);
      const _ = new u();
      function d(t) {
        const [a, e] = (0, s.useState)(
            t ? _.GetClanInfoByClanAccountID(t) : void 0,
          ),
          [n, r] = (0, s.useState)(!!t && !_.BHasClanInfoLoadedByAccountID(t));
        return (
          (0, s.useEffect)(() => {
            if (t)
              if (_.BHasClanInfoLoadedByAccountID(t))
                e(_.GetClanInfoByClanAccountID(t)), r(!1);
              else {
                r(!0);
                const a = l.b.InitFromClanID(
                  "string" == typeof t ? Number.parseInt(t) : t,
                );
                _.LoadClanInfoForClanSteamID(a).then((t) => {
                  e(t ?? void 0), r(!1);
                });
              }
            else e(void 0), r(!1);
          }, [t]),
          [n, a]
        );
      }
      window.g_ClanStore = _;
    },
    67165: (t, a, e) => {
      e.d(a, { pF: () => L, FV: () => A });
      var n = e(34629),
        r = e(4434),
        o = e(41735),
        i = e.n(o),
        s = e(14947),
        l = e(90626),
        m = e(78327);
      class c {
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
                  m.TS.STORE_BASE_URL + "publisher/" + this.m_strVanity + "/"
                );
              case "franchise":
                return (
                  m.TS.STORE_BASE_URL + "franchise/" + this.m_strVanity + "/"
                );
            }
            return m.TS.STORE_BASE_URL + "developer/" + this.m_strVanity + "/";
          }
          return (
            m.TS.STORE_BASE_URL +
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
        async UpdateGroupFlagsFeature(t, a) {
          let e = m.TS.PARTNER_BASE_URL + "sales/ajaxupdateclanaccountflags",
            n = this.m_clanAccountFlags;
          if (
            (t.forEach((t) => {
              a ? (n |= t) : (n &= ~t);
            }),
            n == this.m_clanAccountFlags)
          )
            return;
          let r = new Array();
          1 & n && r.push(1),
            8 & n && r.push(8),
            2 & n && r.push(2),
            4 & n && r.push(4),
            16 & n && r.push(16),
            32 & n && r.push(32),
            64 & n && r.push(64);
          let o = new FormData();
          o.append("sessionid", m.TS.SESSIONID),
            o.append("clan_account_id", this.GetClanAccountID().toString()),
            o.append("accountflags", JSON.stringify(r));
          let s = await i().post(e, o);
          s &&
            200 == s.status &&
            1 == s.data.success &&
            (this.m_clanAccountFlags = n);
        }
      }
      (0, n.Cg)([s.sH], c.prototype, "m_appidList", void 0),
        (0, n.Cg)([s.sH], c.prototype, "m_nFollowers", void 0),
        (0, n.Cg)([s.sH], c.prototype, "m_clanAccountFlags", void 0);
      var p,
        u = e(17720),
        _ = e(56545),
        d = e(80613),
        I = e.n(d),
        h = e(89068);
      d.Message;
      class C extends d.Message {
        static ImplementsStaticInterface() {}
        constructor(t = null) {
          super(),
            C.prototype.clan_account_id || h.Sg(C.M()),
            d.Message.initialize(this, t, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            C.sm_m ||
              (C.sm_m = {
                proto: C,
                fields: {
                  clan_account_id: {
                    n: 1,
                    br: h.qM.readUint32,
                    bw: h.gp.writeUint32,
                  },
                  appid_list: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: h.qM.readUint32,
                    pbr: h.qM.readPackedUint32,
                    bw: h.gp.writeRepeatedUint32,
                  },
                },
              }),
            C.sm_m
          );
        }
        static MBF() {
          return C.sm_mbf || (C.sm_mbf = h.w0(C.M())), C.sm_mbf;
        }
        toObject(t = !1) {
          return C.toObject(t, this);
        }
        static toObject(t, a) {
          return h.BT(C.M(), t, a);
        }
        static fromObject(t) {
          return h.Uq(C.M(), t);
        }
        static deserializeBinary(t) {
          let a = new (I().BinaryReader)(t),
            e = new C();
          return C.deserializeBinaryFromReader(e, a);
        }
        static deserializeBinaryFromReader(t, a) {
          return h.zj(C.MBF(), t, a);
        }
        serializeBinary() {
          var t = new (I().BinaryWriter)();
          return C.serializeBinaryToWriter(this, t), t.getResultBuffer();
        }
        static serializeBinaryToWriter(t, a) {
          h.i0(C.M(), t, a);
        }
        serializeBase64String() {
          var t = new (I().BinaryWriter)();
          return C.serializeBinaryToWriter(this, t), t.getResultBase64String();
        }
        getClassName() {
          return "CDeveloperPageToApps";
        }
      }
      class g extends d.Message {
        static ImplementsStaticInterface() {}
        constructor(t = null) {
          super(),
            g.prototype.clan_account_ids || h.Sg(g.M()),
            d.Message.initialize(this, t, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  clan_account_ids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: h.qM.readUint32,
                    pbr: h.qM.readPackedUint32,
                    bw: h.gp.writeRepeatedUint32,
                  },
                  ignore_dlc: { n: 2, br: h.qM.readBool, bw: h.gp.writeBool },
                },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = h.w0(g.M())), g.sm_mbf;
        }
        toObject(t = !1) {
          return g.toObject(t, this);
        }
        static toObject(t, a) {
          return h.BT(g.M(), t, a);
        }
        static fromObject(t) {
          return h.Uq(g.M(), t);
        }
        static deserializeBinary(t) {
          let a = new (I().BinaryReader)(t),
            e = new g();
          return g.deserializeBinaryFromReader(e, a);
        }
        static deserializeBinaryFromReader(t, a) {
          return h.zj(g.MBF(), t, a);
        }
        serializeBinary() {
          var t = new (I().BinaryWriter)();
          return g.serializeBinaryToWriter(this, t), t.getResultBuffer();
        }
        static serializeBinaryToWriter(t, a) {
          h.i0(g.M(), t, a);
        }
        serializeBase64String() {
          var t = new (I().BinaryWriter)();
          return g.serializeBinaryToWriter(this, t), t.getResultBase64String();
        }
        getClassName() {
          return "CStoreCatalog_GetDevPageAllAppsLinked_Request";
        }
      }
      class f extends d.Message {
        static ImplementsStaticInterface() {}
        constructor(t = null) {
          super(),
            f.prototype.results || h.Sg(f.M()),
            d.Message.initialize(this, t, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: { results: { n: 1, c: C, r: !0, q: !0 } },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = h.w0(f.M())), f.sm_mbf;
        }
        toObject(t = !1) {
          return f.toObject(t, this);
        }
        static toObject(t, a) {
          return h.BT(f.M(), t, a);
        }
        static fromObject(t) {
          return h.Uq(f.M(), t);
        }
        static deserializeBinary(t) {
          let a = new (I().BinaryReader)(t),
            e = new f();
          return f.deserializeBinaryFromReader(e, a);
        }
        static deserializeBinaryFromReader(t, a) {
          return h.zj(f.MBF(), t, a);
        }
        serializeBinary() {
          var t = new (I().BinaryWriter)();
          return f.serializeBinaryToWriter(this, t), t.getResultBuffer();
        }
        static serializeBinaryToWriter(t, a) {
          h.i0(f.M(), t, a);
        }
        serializeBase64String() {
          var t = new (I().BinaryWriter)();
          return f.serializeBinaryToWriter(this, t), t.getResultBase64String();
        }
        getClassName() {
          return "CStoreCatalog_GetDevPageAllAppsLinked_Response";
        }
      }
      !(function (t) {
        t.GetDevPageAllAppsLinked = function (t, a) {
          return t.SendMsg(
            "StoreCatalog.GetDevPageAllAppsLinked#1",
            (0, _.I8)(g, a),
            f,
            { ePrivilege: 1 },
          );
        };
      })(p || (p = {}));
      class y {
        constructor() {
          (0, s.Gn)(this);
        }
        m_mapClanToCreatorHome = new Map();
        m_mapAppToCreatorIDList = new Map();
        m_bLoadedFromConfig = !1;
        LazyInit() {
          if (!this.m_bLoadedFromConfig) {
            let t = (0, m.Tc)("creatorhome", "application_config");
            this.ValidateStoreDefault(t) &&
              t.forEach((t) => {
                let a = Number(t.creator_clan_id),
                  e = u.b.InitFromClanID(a),
                  n = new c(e);
                n.Initialize(t),
                  (n.m_promise = y.GetAsPromise(n)),
                  this.m_mapClanToCreatorHome.set(a, n);
              });
            let a = (0, m.Tc)("creatorhomeforapp", "application_config");
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
        static async GetAsPromise(t) {
          return t;
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
        async LoadCreatorHome(t, a) {
          if (
            (this.LazyInit(),
            !this.m_mapClanToCreatorHome.has(t.GetAccountID()))
          ) {
            let e = new c(t);
            (e.m_promise = this.InternalCreatorHome(e, a)),
              await e.m_promise,
              this.m_mapClanToCreatorHome.set(t.GetAccountID(), e);
          }
          return this.m_mapClanToCreatorHome.get(t.GetAccountID()).m_promise;
        }
        async InternalCreatorHome(t, a) {
          let e = { get_appids: !0, l: m.TS.LANGUAGE, origin: self.origin },
            n =
              m.TS.STORE_BASE_URL +
              "curator/" +
              t.GetClanAccountID() +
              "/ajaxgetcreatorhomeinfo",
            r = await i().get(n, { params: e, cancelToken: a && a.token });
          return t.Initialize(r.data), t;
        }
        async LoadCreatorHomeListForAppIncludeHiddden(t, a) {
          if ((this.LazyInit(), !this.m_mapAppToCreatorIDList.has(t))) {
            let e = { appid: t },
              n = m.TS.STORE_BASE_URL + "events/ajaxgetcreatorhomeidforapp",
              r = await i().get(n, {
                params: e,
                cancelToken: a && a.token,
                withCredentials: !0,
              });
            this.m_mapAppToCreatorIDList.set(t, r.data.creator_list);
          }
          return this.m_mapAppToCreatorIDList.get(t);
        }
        async SearchCreatorHomeStore(t, a, e) {
          let n = `${m.TS.STORE_BASE_URL}curator/0/ajaxsearchcurators`,
            r = {
              term: t.replace(" ", "+"),
              require_creator: a,
              cc: m.TS.COUNTRY,
              l: m.TS.LANGUAGE,
              origin: self.origin,
            },
            o = new Array();
          const l = await i().get(n, { params: r, cancelToken: e.token });
          return (
            l.data.curators &&
              (0, s.h5)(() => {
                l.data.curators.forEach((t) => {
                  if (!this.m_mapClanToCreatorHome.has(t.creator_clan_id)) {
                    let a = u.b.InitFromClanID(t.creator_clan_id),
                      e = new c(a);
                    e.Initialize(t),
                      this.m_mapClanToCreatorHome.set(t.creator_clan_id, e);
                  }
                  o.push(this.m_mapClanToCreatorHome.get(t.creator_clan_id));
                });
              }),
            o
          );
        }
        GetCreatorHomeListForAppIncludeHidden(t) {
          return this.m_mapAppToCreatorIDList.has(t)
            ? this.m_mapAppToCreatorIDList.get(t)
            : [];
        }
      }
      (0, n.Cg)([s.sH], y.prototype, "m_mapClanToCreatorHome", void 0),
        (0, n.Cg)([s.sH], y.prototype, "m_mapAppToCreatorIDList", void 0),
        (0, n.Cg)([s.XI], y.prototype, "LazyInit", null);
      const L = new y();
      function A(t) {
        const a = u.b.InitFromClanID(t),
          [e, n] = l.useState(L.GetCreatorHome(a)),
          o = (0, r.m)("useCreatorHome");
        return (
          l.useEffect(() => {
            const a = u.b.InitFromClanID(t);
            L.BHasCreatorHomeLoaded(a)
              ? e
                ? e.GetClanAccountID() != t && n(L.GetCreatorHome(a))
                : n(L.GetCreatorHome(a))
              : L.LoadCreatorHome(a).then(() => {
                  o?.token?.reason || n(L.GetCreatorHome(a));
                });
          }, [o?.token?.reason, t, e]),
          e
        );
      }
      window.g_CreatorHomeStore = L;
    },
  },
]);

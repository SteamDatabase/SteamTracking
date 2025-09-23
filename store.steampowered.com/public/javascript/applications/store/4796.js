/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [4796],
  {
    4796: (e, t, a) => {
      a.d(t, { TB: () => _, ac: () => p });
      var n = a(34629),
        r = a(90626),
        i = a(41735),
        s = a.n(i),
        o = a(14947),
        l = a(17720),
        m = a(81393),
        c = a(78327),
        u = a(67165);
      a(26161), a(60746), a(55263), a(82097);
      class d {
        constructor() {
          (0, o.Gn)(this);
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
            ((0, o.h5)(() => {
              let e = (0, c.Fd)("groupvanityinfo", "application_config");
              this.ValidateClanConfig(e) &&
                e.forEach((e) => {
                  this.InternalSetupValue(e);
                });
            }),
            (this.m_bLoadedFromConfig = !0));
        }
        AddGroupVanities(e) {
          (0, o.h5)(() => {
            this.ValidateClanConfig(e) &&
              e.forEach((e) => {
                this.InternalSetupValue(e);
              });
          });
        }
        ValidateClanConfig(e) {
          const t = e;
          return (
            !!(
              t &&
              Array.isArray(t) &&
              t.length > 0 &&
              "object" == typeof t[0]
            ) &&
            "number" == typeof t[0].clanAccountID &&
            ("number" == typeof t[0].appid ||
              "string" == typeof t[0].vanity_url)
          );
        }
        BHasClanInfoLoaded(e) {
          return (
            (0, m.wT)(e.BIsValid(), "Clan SteamID is not valid when ClanInfo"),
            (0, m.wT)(
              e.BIsClanAccount(),
              "Clan SteamID is not a clan account id when requesting clan info ",
            ),
            this.m_mapClanAccountIDToClanInfo.has(e.GetAccountID())
          );
        }
        BHasClanInfoLoadedByAccountID(e) {
          return this.m_mapClanAccountIDToClanInfo.has(e);
        }
        RegisterClanData(e) {
          for (const t of e) this.InternalSetupValue(t);
        }
        InternalSetupValue(e) {
          const t = {
            clanAccountID: e.clanAccountID,
            clanSteamID: new l.b(e.clanSteamIDString),
            appid: e.appid,
            vanity_url: e.vanity_url,
            member_count: e.member_count,
            is_ogg: e.is_ogg,
            is_creator_home: e.is_creator_home,
            is_curator: e.is_curator,
            has_visible_store_page: e.has_visible_store_page,
            has_rss_feed: e.has_rss_feed,
            rss_language: e.rss_language ? e.rss_language : 0,
            avatar_full_url: e.avatar_full_url,
            avatar_medium_url: e.avatar_medium_url,
            group_name: e.group_name,
            creator_page_bg_url: e.creator_page_bg_url,
            partner_events_enabled: e.partner_events_enabled,
          };
          0 != e.appid && this.m_mapAppIDToClanInfo.set(e.appid, t),
            e.vanity_url &&
              e.vanity_url.length > 0 &&
              this.m_mapVanityToClanInfo.set(
                e.vanity_url.toLocaleLowerCase(),
                t,
              ),
            this.m_mapClanAccountIDToClanInfo.set(e.clanAccountID, t);
        }
        GetRequestParam() {
          return { origin: self.origin };
        }
        async LoadOGGClanInfoForAppID(e) {
          if (
            (this.LazyInit(),
            "string" == typeof e && (e = parseInt(e)),
            (0, m.wT)(
              0 != e,
              "LoadOGGClanInfoForAppID called with appid of zero",
            ),
            0 == e)
          )
            return null;
          if (this.m_mapAppIDToClanInfo.has(e))
            return this.m_mapAppIDToClanInfo.get(e);
          let t = "appid_" + e;
          return (
            this.m_mapPromisesLoading.has(t) ||
              this.m_mapPromisesLoading.set(
                t,
                this.InternalLoadOGGClanInfoForAppID(e),
              ),
            this.m_mapPromisesLoading.get(t)
          );
        }
        async InternalLoadOGGClanInfoForAppID(e) {
          const t =
            c.TS.COMMUNITY_BASE_URL + "ogg/" + e + "/ajaxgetvanityandclanid/";
          let a = null;
          try {
            a = (await s().get(t, { params: this.GetRequestParam() })).data;
          } catch (e) {}
          return a
            ? (this.InternalSetupValue(a), this.m_mapAppIDToClanInfo.get(e))
            : null;
        }
        async LoadOGGClanInfoForIdentifier(e) {
          if (
            (this.LazyInit(),
            this.m_mapVanityToClanInfo.has(e?.toLocaleLowerCase()))
          )
            return this.m_mapVanityToClanInfo.get(e?.toLocaleLowerCase());
          let t = "storevanity_" + e?.toLocaleLowerCase();
          return (
            this.m_mapPromisesLoading.has(t) ||
              this.m_mapPromisesLoading.set(
                t,
                this.InternalLoadOGGClanInfoForIdentifier(e),
              ),
            this.m_mapPromisesLoading.get(t)
          );
        }
        async InternalLoadOGGClanInfoForIdentifier(e) {
          const t =
            c.TS.COMMUNITY_BASE_URL + "games/" + e + "/ajaxgetvanityandclanid/";
          let a = await s().get(t, { params: this.GetRequestParam() });
          return (
            this.InternalSetupValue(a.data),
            this.m_mapVanityToClanInfo.get(e?.toLocaleLowerCase())
          );
        }
        async LoadOGGClanInfoForGroupVanity(e) {
          if (
            (this.LazyInit(),
            this.m_mapVanityToClanInfo.has(e?.toLocaleLowerCase()))
          )
            return this.m_mapVanityToClanInfo.get(e?.toLocaleLowerCase());
          let t = "community_name_" + e;
          return (
            this.m_mapPromisesLoading.has(t) ||
              this.m_mapPromisesLoading.set(
                t,
                this.InternalLoadOGGClanInfoForGroupVanity(
                  e?.toLocaleLowerCase(),
                ),
              ),
            this.m_mapPromisesLoading.get(t)
          );
        }
        async InternalLoadOGGClanInfoForGroupVanity(e) {
          const t =
            c.TS.COMMUNITY_BASE_URL +
            "groups/" +
            e +
            "/ajaxgetvanityandclanid/";
          let a = await s().get(t, { params: this.GetRequestParam() });
          return (
            this.InternalSetupValue(a.data),
            this.m_mapVanityToClanInfo.get(e?.toLocaleLowerCase())
          );
        }
        async LoadClanInfoForClanSteamID(e) {
          this.LazyInit();
          let t = e.GetAccountID();
          if (this.m_mapClanAccountIDToClanInfo.has(t))
            return this.m_mapClanAccountIDToClanInfo.get(t);
          let a = "clanaccountid_" + t;
          return (
            this.m_mapPromisesLoading.has(a) ||
              this.m_mapPromisesLoading.set(
                a,
                this.InternalLoadClanInfoForClanSteamID(e),
              ),
            this.m_mapPromisesLoading.get(a)
          );
        }
        async LoadClanInfoForClanAccountID(e) {
          const t = l.b.InitFromClanID(e);
          return this.LoadClanInfoForClanSteamID(t);
        }
        async InternalLoadClanInfoForClanSteamID(e) {
          let t = e.GetAccountID();
          const a =
            c.TS.COMMUNITY_BASE_URL +
            "gid/" +
            e.ConvertTo64BitString() +
            "/ajaxgetvanityandclanid/";
          let n = await s().get(a, { params: this.GetRequestParam() });
          return (
            this.InternalSetupValue(n.data),
            this.m_mapClanAccountIDToClanInfo.get(t)
          );
        }
        GetOGGClanInfo(e) {
          return "string" == typeof e
            ? this.m_mapVanityToClanInfo.get(e?.toLocaleLowerCase())
            : this.m_mapAppIDToClanInfo.get(e);
        }
        GetClanSteamIDForAppID(e) {
          if ((this.LazyInit(), this.m_mapAppIDToClanInfo.has(e)))
            return l.b.InitFromClanID(
              this.m_mapAppIDToClanInfo.get(e).clanAccountID,
            );
        }
        GetClanVanityForAppID(e) {
          if ((this.LazyInit(), this.m_mapAppIDToClanInfo.has(e)))
            return this.m_mapAppIDToClanInfo.get(e).vanity_url;
        }
        GetClanVanityForClanSteamID(e) {
          if (
            (this.LazyInit(),
            this.m_mapClanAccountIDToClanInfo.has(e.GetAccountID()))
          )
            return this.m_mapClanAccountIDToClanInfo.get(e.GetAccountID())
              .vanity_url;
        }
        HasLoadedClanAccountID(e) {
          return this.LazyInit(), this.m_mapClanAccountIDToClanInfo.has(e);
        }
        GetClanMemberCount(e) {
          return this.m_mapAppIDToClanInfo.has(e)
            ? this.m_mapAppIDToClanInfo.get(e).member_count
            : 0;
        }
        GetClanInfoByClanAccountID(e) {
          return (
            this.LazyInit(),
            (0, m.wT)(
              !!e,
              "Unepxected clanid when requesting information. GetClanInfoByClanAccountID ",
            ),
            this.m_mapClanAccountIDToClanInfo.get(e)
          );
        }
        GetCreatorStoreURL(e) {
          let t = u.pF.GetCreatorHome(e);
          if (t) return t.GetCreatorHomeURL("developer");
          let a = this.GetClanInfoByClanAccountID(e.GetAccountID());
          return (
            c.TS.COMMUNITY_BASE_URL +
            (a.vanity_url
              ? "groups/" + a.vanity_url
              : "gid/" + e.ConvertTo64BitString())
          );
        }
      }
      (0, n.Cg)([o.sH], d.prototype, "m_mapAppIDToClanInfo", void 0),
        (0, n.Cg)([o.sH], d.prototype, "m_mapVanityToClanInfo", void 0),
        (0, n.Cg)([o.sH], d.prototype, "m_mapClanAccountIDToClanInfo", void 0),
        (0, n.Cg)([o.XI], d.prototype, "RegisterClanData", null),
        (0, n.Cg)([o.XI], d.prototype, "InternalSetupValue", null);
      const p = new d();
      function _(e) {
        const [t, a] = (0, r.useState)(
            e ? p.GetClanInfoByClanAccountID(e) : void 0,
          ),
          [n, i] = (0, r.useState)(!!e && !p.BHasClanInfoLoadedByAccountID(e));
        return (
          (0, r.useEffect)(() => {
            if (e)
              if (p.BHasClanInfoLoadedByAccountID(e))
                a(p.GetClanInfoByClanAccountID(e)), i(!1);
              else {
                i(!0);
                const t = l.b.InitFromClanID(
                  "string" == typeof e ? Number.parseInt(e) : e,
                );
                p.LoadClanInfoForClanSteamID(t)
                  .then((e) => {
                    a(e ?? void 0), i(!1);
                  })
                  .catch((t) =>
                    console.error(`Failed to load clan info ${e}`, t),
                  );
              }
            else a(void 0), i(!1);
          }, [e]),
          [n, t]
        );
      }
      window.g_ClanStore = p;
    },
    67165: (e, t, a) => {
      a.d(t, { pF: () => G, FV: () => L });
      var n,
        r = a(34629),
        i = a(56545),
        s = a(80613),
        o = a.n(s),
        l = a(89068);
      class m extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            m.prototype.appid || l.Sg(m.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = {
                proto: m,
                fields: {
                  appid: { n: 1, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  clan_steamid: {
                    n: 2,
                    br: l.qM.readFixed64String,
                    bw: l.gp.writeFixed64String,
                  },
                  relation: { n: 3, br: l.qM.readEnum, bw: l.gp.writeEnum },
                  linkname: { n: 4, br: l.qM.readString, bw: l.gp.writeString },
                  json: { n: 5, br: l.qM.readString, bw: l.gp.writeString },
                },
              }),
            m.sm_m
          );
        }
        static MBF() {
          return m.sm_mbf || (m.sm_mbf = l.w0(m.M())), m.sm_mbf;
        }
        toObject(e = !1) {
          return m.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(m.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(m.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            a = new m();
          return m.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(m.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(m.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CDeveloperPageLink";
        }
      }
      class c extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            c.prototype.clan_account_id || l.Sg(c.M()),
            s.Message.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
                fields: {
                  clan_account_id: {
                    n: 1,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  appid_list: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: l.qM.readUint32,
                    pbr: l.qM.readPackedUint32,
                    bw: l.gp.writeRepeatedUint32,
                  },
                },
              }),
            c.sm_m
          );
        }
        static MBF() {
          return c.sm_mbf || (c.sm_mbf = l.w0(c.M())), c.sm_mbf;
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(c.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(c.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            a = new c();
          return c.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(c.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(c.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CDeveloperPageToApps";
        }
      }
      class u extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            u.prototype.appid || l.Sg(u.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: {
                  appid: { n: 1, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  link: { n: 2, c: m },
                  remove: {
                    n: 3,
                    d: !1,
                    br: l.qM.readBool,
                    bw: l.gp.writeBool,
                  },
                  update_json_only: {
                    n: 4,
                    d: !1,
                    br: l.qM.readBool,
                    bw: l.gp.writeBool,
                  },
                  skip_clan_permissions: {
                    n: 5,
                    d: !1,
                    br: l.qM.readBool,
                    bw: l.gp.writeBool,
                  },
                  partner_id: {
                    n: 6,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = l.w0(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(u.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(u.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            a = new u();
          return u.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(u.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(u.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCatalog_SetDevPageLink_Request";
        }
      }
      class d extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new d();
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            a = new d();
          return d.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCatalog_SetDevPageLink_Response";
        }
      }
      class p extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.appid || l.Sg(p.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  appid: { n: 1, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = l.w0(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(p.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(p.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            a = new p();
          return p.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(p.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(p.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCatalog_GetDevPageLinks_Request";
        }
      }
      class _ extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _.prototype.links || l.Sg(_.M()),
            s.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: { links: { n: 1, c: m, r: !0, q: !0 } },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = l.w0(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(_.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(_.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            a = new _();
          return _.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(_.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(_.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCatalog_GetDevPageLinks_Response";
        }
      }
      class g extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            g.prototype.clan_account_ids || l.Sg(g.M()),
            s.Message.initialize(this, e, 0, -1, [1], null);
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
                    br: l.qM.readUint32,
                    pbr: l.qM.readPackedUint32,
                    bw: l.gp.writeRepeatedUint32,
                  },
                  ignore_dlc: { n: 2, br: l.qM.readBool, bw: l.gp.writeBool },
                },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = l.w0(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(g.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(g.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            a = new g();
          return g.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(g.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(g.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCatalog_GetDevPageAllAppsLinked_Request";
        }
      }
      class h extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.results || l.Sg(h.M()),
            s.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: { results: { n: 1, c, r: !0, q: !0 } },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = l.w0(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(h.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(h.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            a = new h();
          return h.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCatalog_GetDevPageAllAppsLinked_Response";
        }
      }
      class I extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            I.prototype.partnerid || l.Sg(I.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
                fields: {
                  partnerid: {
                    n: 1,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                },
              }),
            I.sm_m
          );
        }
        static MBF() {
          return I.sm_mbf || (I.sm_mbf = l.w0(I.M())), I.sm_mbf;
        }
        toObject(e = !1) {
          return I.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(I.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(I.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            a = new I();
          return I.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(I.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(I.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCatalog_GetDevPagesForPartner_Request";
        }
      }
      class f extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.results || l.Sg(f.M()),
            s.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: { results: { n: 1, c: y, r: !0, q: !0 } },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = l.w0(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(f.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(f.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            a = new f();
          return f.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(f.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(f.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCatalog_GetDevPagesForPartner_Response";
        }
      }
      class y extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.clan_accountid || l.Sg(y.M()),
            s.Message.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  clan_accountid: {
                    n: 1,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  linknames: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: l.qM.readString,
                    bw: l.gp.writeRepeatedString,
                  },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = l.w0(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(y.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            a = new y();
          return y.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(y.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCatalog_GetDevPagesForPartner_Response_CDevPageInfo";
        }
      }
      !(function (e) {
        (e.SetDevPageLink = function (e, t) {
          return e.SendMsg(
            "StoreCatalog.SetDevPageLink#1",
            (0, i.I8)(u, t),
            d,
            { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
          );
        }),
          (e.GetDevPageLinks = function (e, t) {
            return e.SendMsg(
              "StoreCatalog.GetDevPageLinks#1",
              (0, i.I8)(p, t),
              _,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }),
          (e.GetDevPageAllAppsLinked = function (e, t) {
            return e.SendMsg(
              "StoreCatalog.GetDevPageAllAppsLinked#1",
              (0, i.I8)(g, t),
              h,
              { ePrivilege: 1 },
            );
          }),
          (e.GetDevPagesForPartner = function (e, t) {
            return e.SendMsg(
              "StoreCatalog.GetDevPagesForPartner#1",
              (0, i.I8)(I, t),
              f,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          });
      })(n || (n = {}));
      var C = a(41735),
        v = a.n(C),
        B = a(14947),
        S = a(90626),
        w = a(78327);
      class T {
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
        constructor(e) {
          (0, B.Gn)(this), (this.m_clanSteamID = e);
        }
        Initialize(e) {
          (this.m_strName = e.name || ""),
            (this.m_strAvatarURLFullSize =
              e.avatar_url_full_size ||
              "https://avatars.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_full.jpg"),
            (this.m_strTagLineLoc = e.tag_line_localized || ""),
            (this.m_nFollowers = e.followers || 0),
            (this.m_strVanity = e.vanity || void 0),
            (this.m_webLink = e.weblink),
            (this.m_bIsHidden = e.hidden || !1),
            (this.m_clanAccountFlags = e.clan_account_flags ?? 0),
            e.appids && e.appids.forEach((e) => this.m_appidList.push(e)),
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
        BHasClanAccountFlagSet(e) {
          return Boolean(this.m_clanAccountFlags & e);
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
        GetCreatorHomeURL(e) {
          if (this.m_strVanity) {
            switch (e) {
              case "publisher":
                return (
                  w.TS.STORE_BASE_URL + "publisher/" + this.m_strVanity + "/"
                );
              case "franchise":
                return (
                  w.TS.STORE_BASE_URL + "franchise/" + this.m_strVanity + "/"
                );
            }
            return w.TS.STORE_BASE_URL + "developer/" + this.m_strVanity + "/";
          }
          return (
            w.TS.STORE_BASE_URL +
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
        AdjustFollower(e) {
          this.m_nFollowers += e;
        }
        async EnablePartnerEventEditorFlag() {
          this.BIsPartnerEventEditorEnabled() ||
            (await this.UpdateGroupFlagsFeature([2, 8], !0));
        }
        async UpdateGroupFlagsFeature(e, t) {
          let a = w.TS.PARTNER_BASE_URL + "sales/ajaxupdateclanaccountflags",
            n = this.m_clanAccountFlags;
          if (
            (e.forEach((e) => {
              t ? (n |= e) : (n &= ~e);
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
          let i = new FormData();
          i.append("sessionid", w.TS.SESSIONID),
            i.append("clan_account_id", this.GetClanAccountID().toString()),
            i.append("accountflags", JSON.stringify(r));
          let s = await v().post(a, i);
          s &&
            200 == s.status &&
            1 == s.data.success &&
            (this.m_clanAccountFlags = n);
        }
      }
      (0, r.Cg)([B.sH], T.prototype, "m_appidList", void 0),
        (0, r.Cg)([B.sH], T.prototype, "m_nFollowers", void 0),
        (0, r.Cg)([B.sH], T.prototype, "m_clanAccountFlags", void 0);
      var A = a(17720),
        b = a(4434);
      class D {
        constructor() {
          (0, B.Gn)(this);
        }
        m_mapClanToCreatorHome = new Map();
        m_mapAppToCreatorIDList = new Map();
        m_bLoadedFromConfig = !1;
        LazyInit() {
          if (!this.m_bLoadedFromConfig) {
            let e = (0, w.Tc)("creatorhome", "application_config");
            this.ValidateStoreDefault(e) &&
              e.forEach((e) => {
                let t = Number(e.creator_clan_id),
                  a = A.b.InitFromClanID(t),
                  n = new T(a);
                n.Initialize(e),
                  (n.m_promise = D.GetAsPromise(n)),
                  this.m_mapClanToCreatorHome.set(t, n);
              });
            let t = (0, w.Tc)("creatorhomeforapp", "application_config");
            this.ValidateStoreDefaultAppList(t) &&
              t.forEach((e) => {
                void 0 !== e.appid &&
                  (this.m_mapAppToCreatorIDList.has(e.appid) ||
                    this.m_mapAppToCreatorIDList.set(e.appid, new Array()),
                  this.m_mapAppToCreatorIDList.get(e.appid).push(e));
              }),
              (this.m_bLoadedFromConfig = !0);
          }
        }
        static async GetAsPromise(e) {
          return e;
        }
        ValidateStoreDefault(e) {
          const t = e;
          return (
            !!(
              t &&
              Array.isArray(t) &&
              t.length > 0 &&
              "object" == typeof t[0]
            ) &&
            "string" == typeof t[0].name &&
            ("string" == typeof t[0].creator_clan_id ||
              "number" == typeof t[0].creator_clan_id)
          );
        }
        ValidateStoreDefaultAppList(e) {
          const t = e;
          return (
            !!(
              t &&
              Array.isArray(t) &&
              t.length > 0 &&
              "object" == typeof t[0]
            ) &&
            "number" == typeof t[0].clan_account_id &&
              t[0].clan_account_id > 0 &&
              "number" == typeof t[0].appid &&
            t[0].appid > 0
          );
        }
        BHasCreatorHomeLoaded(e) {
          return (
            this.m_mapClanToCreatorHome.has(e.GetAccountID()) &&
            this.m_mapClanToCreatorHome.get(e.GetAccountID()).BIsLoaded()
          );
        }
        GetCreatorHome(e) {
          return this.m_mapClanToCreatorHome.get(e.GetAccountID());
        }
        GetCreatorHomeByID(e) {
          return this.m_mapClanToCreatorHome.get(e.clan_account_id);
        }
        async LoadCreatorHome(e, t) {
          if (
            (this.LazyInit(),
            !this.m_mapClanToCreatorHome.has(e.GetAccountID()))
          ) {
            let a = new T(e);
            (a.m_promise = this.InternalCreatorHome(a, t)),
              await a.m_promise,
              this.m_mapClanToCreatorHome.set(e.GetAccountID(), a);
          }
          return this.m_mapClanToCreatorHome.get(e.GetAccountID()).m_promise;
        }
        async InternalCreatorHome(e, t) {
          let a = { get_appids: !0, l: w.TS.LANGUAGE, origin: self.origin },
            n =
              w.TS.STORE_BASE_URL +
              "curator/" +
              e.GetClanAccountID() +
              "/ajaxgetcreatorhomeinfo",
            r = await v().get(n, { params: a, cancelToken: t && t.token });
          return e.Initialize(r.data), e;
        }
        async LoadCreatorHomeListForAppIncludeHiddden(e, t) {
          if ((this.LazyInit(), !this.m_mapAppToCreatorIDList.has(e))) {
            let a = { appid: e },
              n = w.TS.STORE_BASE_URL + "events/ajaxgetcreatorhomeidforapp",
              r = await v().get(n, {
                params: a,
                cancelToken: t && t.token,
                withCredentials: !0,
              });
            this.m_mapAppToCreatorIDList.set(e, r.data.creator_list);
          }
          return this.m_mapAppToCreatorIDList.get(e);
        }
        async SearchCreatorHomeStore(e, t, a) {
          let n = `${w.TS.STORE_BASE_URL}curator/0/ajaxsearchcurators`,
            r = {
              term: e.replace(" ", "+"),
              require_creator: t,
              cc: w.TS.COUNTRY,
              l: w.TS.LANGUAGE,
              origin: self.origin,
            },
            i = new Array();
          const s = await v().get(n, { params: r, cancelToken: a.token });
          return (
            s.data.curators &&
              (0, B.h5)(() => {
                s.data.curators.forEach((e) => {
                  if (!this.m_mapClanToCreatorHome.has(e.creator_clan_id)) {
                    let t = A.b.InitFromClanID(e.creator_clan_id),
                      a = new T(t);
                    a.Initialize(e),
                      this.m_mapClanToCreatorHome.set(e.creator_clan_id, a);
                  }
                  i.push(this.m_mapClanToCreatorHome.get(e.creator_clan_id));
                });
              }),
            i
          );
        }
        GetCreatorHomeListForAppIncludeHidden(e) {
          return this.m_mapAppToCreatorIDList.has(e)
            ? this.m_mapAppToCreatorIDList.get(e)
            : [];
        }
      }
      (0, r.Cg)([B.sH], D.prototype, "m_mapClanToCreatorHome", void 0),
        (0, r.Cg)([B.sH], D.prototype, "m_mapAppToCreatorIDList", void 0),
        (0, r.Cg)([B.XI], D.prototype, "LazyInit", null);
      const G = new D();
      function L(e) {
        const t = A.b.InitFromClanID(e),
          [a, n] = S.useState(G.GetCreatorHome(t)),
          r = (0, b.m)("useCreatorHome");
        return (
          S.useEffect(() => {
            const t = A.b.InitFromClanID(e);
            G.BHasCreatorHomeLoaded(t)
              ? a
                ? a.GetClanAccountID() != e && n(G.GetCreatorHome(t))
                : n(G.GetCreatorHome(t))
              : G.LoadCreatorHome(t).then(() => {
                  r?.token?.reason || n(G.GetCreatorHome(t));
                });
          }, [r?.token?.reason, e, a]),
          a
        );
      }
      window.g_CreatorHomeStore = G;
    },
    60746: (e, t, a) => {
      a.d(t, { KN: () => C, Nh: () => _, Ec: () => B, kY: () => v });
      var n = a(34629),
        r = a(41735),
        i = a.n(r),
        s = a(14947),
        o = a(56545),
        l = a(37403),
        m = a(6144),
        c = a(6419),
        u = a(78327),
        d = a(68797);
      class p {
        m_CMInterface;
        m_setShownEvents = new Set();
        m_setReadEvents = new Set();
        m_rgPendingUpload = [];
        m_schUpload = new m.LU();
        m_bUploading = !1;
        constructor(e) {
          this.m_CMInterface = e;
        }
        MarkEventShown(e, t, a) {
          let n = this.MakeKey(e, a);
          if (this.m_setShownEvents.has(n)) return !1;
          this.m_setShownEvents.add(n);
          let r = new l.kZ();
          return (
            r.set_event_gid(e),
            r.set_clanid(t),
            r.set_display_location(a),
            r.set_mark_shown(!0),
            this.QueueForUpload(r),
            !0
          );
        }
        MarkEventRead(e, t, a) {
          let n = this.MakeKey(e, a);
          if (this.m_setReadEvents.has(n)) return !1;
          this.m_setReadEvents.add(n);
          let r = new l.kZ();
          return (
            r.set_event_gid(e),
            r.set_clanid(t),
            r.set_display_location(a),
            r.set_mark_read(!0),
            this.QueueForUpload(r),
            !0
          );
        }
        MakeKey(e, t) {
          return `${e}_${t}`;
        }
        QueueForUpload(e) {
          this.m_rgPendingUpload.push(e), this.ScheduleUpload();
        }
        ScheduleUpload() {
          this.m_bUploading ||
            (this.m_rgPendingUpload.length >= 30
              ? this.UploadPendingData()
              : this.m_schUpload.IsScheduled() ||
                this.m_schUpload.Schedule(6e4, this.UploadPendingData));
        }
        async Flush() {
          if (!this.m_bUploading) return this.UploadPendingData();
        }
        async UploadPendingData() {
          if (this.m_bUploading) return;
          this.m_schUpload.Cancel();
          let e = this.m_rgPendingUpload.splice(0, 30);
          if (0 == e.length) return;
          let t = !1;
          if (this.m_CMInterface) {
            let a = o.w.Init(l.wS);
            for (let t of e) a.Body().add_markings(t);
            this.m_bUploading = !0;
            let n = await l.BE.MarkPartnerEventsForUser(
              this.m_CMInterface.GetServiceTransport(),
              a,
            );
            (this.m_bUploading = !1), (t = 1 == n.GetEResult());
          } else {
            if (!u.iA.logged_in) return;
            let a = e.map((e) => e.toObject()),
              n = (0, u.xv)() + "actions/ajaxmarkpartnerevents";
            const r = new FormData();
            r.append("sessionid", u.TS.SESSIONID),
              r.append("request", JSON.stringify(a));
            try {
              t =
                1 ==
                (await i().post(n, r, { withCredentials: !0 })).data.success;
            } catch (e) {
              let t = (0, d.H)(e);
              console.error(
                "CPartnerEventUserTracking.UploadPendingData error " +
                  t.strErrorMsg,
                t,
              );
            }
          }
          t
            ? this.m_rgPendingUpload.length > 0 && this.ScheduleUpload()
            : (console.log(
                "Saving news event state failed. Will try again soon!",
              ),
              (this.m_rgPendingUpload = this.m_rgPendingUpload.concat(e)),
              this.m_schUpload.Schedule(6e4, this.UploadPendingData));
        }
      }
      (0, n.Cg)([c.o], p.prototype, "UploadPendingData", null);
      var _,
        g = a(17720),
        h = a(81393),
        I = a(90626),
        f = a(26161);
      class y {
        clanid = void 0;
        appid = 0;
        can_edit = !1;
        owns_app = !1;
        follows_app = !1;
        support_user = !1;
        valve_admin = !1;
        limited_user = !1;
        event_ignored = new Array();
        event_followed = new Array();
        event_followed_flags = new Array();
        constructor(e) {
          (0, s.Gn)(this), (this.clanid = e);
        }
      }
      (0, n.Cg)([s.sH], y.prototype, "clanid", void 0),
        (0, n.Cg)([s.sH], y.prototype, "appid", void 0),
        (0, n.Cg)([s.sH], y.prototype, "can_edit", void 0),
        (0, n.Cg)([s.sH], y.prototype, "owns_app", void 0),
        (0, n.Cg)([s.sH], y.prototype, "follows_app", void 0),
        (0, n.Cg)([s.sH], y.prototype, "support_user", void 0),
        (0, n.Cg)([s.sH], y.prototype, "valve_admin", void 0),
        (0, n.Cg)([s.sH], y.prototype, "limited_user", void 0),
        (0, n.Cg)([s.sH], y.prototype, "event_ignored", void 0),
        (0, n.Cg)([s.sH], y.prototype, "event_followed", void 0),
        (0, n.Cg)([s.sH], y.prototype, "event_followed_flags", void 0),
        (function (e) {
          (e[(e.k_ENotifyFlagNone = 0)] = "k_ENotifyFlagNone"),
            (e[(e.k_ENotifyFlagByEmail = 1)] = "k_ENotifyFlagByEmail"),
            (e[(e.k_ENotifyFlagByPush = 2)] = "k_ENotifyFlagByPush");
        })(_ || (_ = {}));
      class C {
        constructor() {
          (0, s.Gn)(this);
        }
        m_mapClanToUserPermissions = new Map();
        m_mapAnnounceGIDToVote = new Map();
        m_setReadEventGIDs = new Set();
        m_tracker = void 0;
        m_cm = void 0;
        static s_EventUserStore;
        m_bIsPresentationMode = (0, u.Bu)();
        static Get() {
          return (
            (0, h.wT)(
              !!C.s_EventUserStore,
              "Have not yet initialized global EventUserStore",
            ),
            C.s_EventUserStore
          );
        }
        static IsInitialized() {
          return !!C.s_EventUserStore;
        }
        static async InitGlobal(e) {
          if (!C.s_EventUserStore) {
            const t = new C();
            await t.Init(e),
              (C.s_EventUserStore = t),
              "dev" == u.TS.WEB_UNIVERSE && (window.g_EventUserStore = t);
          }
        }
        static BIsInited() {
          return Boolean(C.s_EventUserStore);
        }
        async Init(e) {
          (this.m_cm = e), (this.m_tracker = new p(e));
          const t = (0, u.Fd)("partnereventpermissions", "application_config");
          this.ValidateStoreDefault(t) &&
            ((0, s.h5)(() => {
              t.forEach((e) => {
                let t = new y(e.clanid),
                  a = { result: t, promise: C.RemapToPromise(t), bLoaded: !0 };
                this.CopyFromResponseToTrack(a, e),
                  this.m_mapClanToUserPermissions.set(e.clanid, a);
              });
            }),
            ("dev" != u.TS.WEB_UNIVERSE && "beta" != u.TS.WEB_UNIVERSE) ||
              console.log(
                "CEventUserStore has loaded",
                this.m_mapClanToUserPermissions.size,
                this.m_mapClanToUserPermissions,
              ));
          let a = (0, u.Fd)("uservotes", "application_config");
          a &&
            (0, s.h5)(() => {
              a.forEach((e) => {
                let t = !!e.voted_up || (!e.voted_down && void 0);
                this.m_mapAnnounceGIDToVote.set(e.clanAnnouncementGID, t);
              });
            });
        }
        GetTracker() {
          return this.m_tracker;
        }
        ValidateStoreDefault(e) {
          const t = e;
          return (
            !!(
              t &&
              Array.isArray(t) &&
              t.length > 0 &&
              "object" == typeof t[0]
            ) &&
            "number" == typeof t[0].clanid &&
            "number" == typeof t[0].appid
          );
        }
        RecordEventShown(e, t) {
          e &&
            !e.bOldAnnouncement &&
            e.GID &&
            this.m_tracker.MarkEventShown(
              e.GID,
              e.clanSteamID.GetAccountID(),
              t,
            );
        }
        RecordEventRead(e, t) {
          e &&
            !e.bOldAnnouncement &&
            e.GID &&
            (this.HasEventBeenRead(e.GID) ||
              (this.SetEventAsRead(e.GID),
              this.m_tracker.MarkEventRead(
                e.GID,
                e.clanSteamID.GetAccountID(),
                t,
              )));
        }
        SetEventAsRead(e) {
          this.m_setReadEventGIDs.add(e);
        }
        HasEventBeenRead(e) {
          return this.m_setReadEventGIDs.has(e);
        }
        static async RemapToPromise(e) {
          return e;
        }
        BIsUserLoggedIn() {
          return u.iA.logged_in;
        }
        BIsPartnerEventPermissionsLoaded(e) {
          return (
            this.m_mapClanToUserPermissions.has(e) &&
            this.m_mapClanToUserPermissions.get(e).bLoaded
          );
        }
        GetPartnerEventPermissions(e) {
          if (!e || !e.BIsValid()) return new y(0);
          const t = e.GetAccountID();
          this.m_mapClanToUserPermissions.has(t) ||
            this.LoadSingleAppEventPermissions(e);
          return this.m_mapClanToUserPermissions.get(t).result;
        }
        BFollowsEvent(e, t) {
          return (
            -1 != this.GetPartnerEventPermissions(e).event_followed.indexOf(t)
          );
        }
        BFollowsEventAndNotifiedBy(e, t, a) {
          let n = this.GetPartnerEventPermissions(e),
            r = n.event_followed.indexOf(t);
          return -1 !== r && (n.event_followed_flags[r] & a) == a;
        }
        BIgnoresEvent(e, t) {
          return (
            -1 != this.GetPartnerEventPermissions(e).event_ignored.indexOf(t)
          );
        }
        async LoadSingleAppEventPermissions(e) {
          let t = e.GetAccountID(),
            a = this.m_mapClanToUserPermissions.get(t);
          return (
            a ||
              ((a = {
                promise: this.InternalLoadSingleAppEventPermissions(e),
                result: new y(t),
                bLoaded: !1,
              }),
              this.m_mapClanToUserPermissions.set(t, a)),
            a.promise
          );
        }
        CopyFromResponseToTrack(e, t) {
          (e.result.appid = t.appid ?? 0),
            (e.result.can_edit = !!t.can_edit),
            (e.result.clanid = t.appid),
            (e.result.event_followed = t.event_followed ?? []),
            (e.result.event_ignored = t.event_ignored ?? []),
            (e.result.event_followed_flags = t.event_followed_flags ?? []),
            (e.result.follows_app = !!t.follows_app),
            (e.result.owns_app = !!t.owns_app),
            (e.result.limited_user = !!t.limited_user),
            (t.support_user || t.valve_admin) && this.m_bIsPresentationMode
              ? ((e.result.can_edit = !0),
                (e.result.support_user = !1),
                (e.result.valve_admin = !1))
              : ((e.result.support_user = !!t.support_user),
                (e.result.valve_admin = !!t.valve_admin)),
            (e.bLoaded = !0);
        }
        async InternalLoadSingleAppEventPermissions(e) {
          let t = null,
            a = e.GetAccountID(),
            n = !Boolean(u.iA.logged_in);
          if (!this.m_mapClanToUserPermissions.has(a)) {
            let t = new y(e.GetAccountID());
            this.m_mapClanToUserPermissions.set(a, {
              result: t,
              promise: C.RemapToPromise(t),
              bLoaded: !1,
            });
          }
          try {
            if (Boolean(u.iA.logged_in)) {
              let r =
                  u.TS.COMMUNITY_BASE_URL +
                  "gid/" +
                  e.ConvertTo64BitString() +
                  "/ajaxgetpartnereventpermissions/",
                s = {};
              if (
                ("partnerweb" == (0, u.yK)()
                  ? ((r =
                      u.TS.PARTNER_BASE_URL +
                      "partnerevents/ajaxgetpartnereventpermissions"),
                    (s = { clanaccountid: e.GetAccountID() }))
                  : "store" == (0, u.yK)() &&
                    ((r =
                      u.TS.STORE_BASE_URL +
                      "events/ajaxgetpartnereventpermissions"),
                    (s = { clanaccountid: e.GetAccountID() })),
                (t = await i().get(r, { params: s, withCredentials: !0 })),
                t && 1 == t.data.success)
              ) {
                let e = this.m_mapClanToUserPermissions.get(a);
                e && this.CopyFromResponseToTrack(e, t.data);
              } else
                console.error(
                  "Partner Events Failed Load:" + (0, d.H)(t?.data).strErrorMsg,
                ),
                  (n = !0);
            }
          } catch (e) {
            if (
              ((t = e.response),
              (n = !0),
              e &&
                void 0 !== e.response &&
                void 0 !== e.response.data &&
                void 0 !== e.response.data.success &&
                21 == e.response.data.success)
            );
            else {
              const t = (0, d.H)(e);
              console.error(
                "InternalLoadSingleAppEventPermissions account: " +
                  a +
                  ": " +
                  t.strErrorMsg,
                t,
              );
            }
          } finally {
            n &&
              (0, s.h5)(() => {
                let e = this.m_mapClanToUserPermissions.get(a);
                (e.result.appid = t?.data.appid ?? 0),
                  (e.result.can_edit = !1),
                  (e.result.clanid = t && t.data ? t.data.clanid : 0),
                  (e.result.event_followed = new Array()),
                  (e.result.event_ignored = new Array()),
                  (e.result.event_followed_flags = new Array()),
                  (e.result.follows_app = !1),
                  (e.result.owns_app = !1),
                  (e.result.support_user = !1),
                  (e.result.valve_admin = !1),
                  (e.result.limited_user = !1),
                  (e.bLoaded = !0);
              });
          }
          return this.m_mapClanToUserPermissions.get(a).result;
        }
        async SetFollowOrUnfollowEvent(e, t, a, n, r) {
          let o = this.GetPartnerEventPermissions(a),
            l = o.event_followed.indexOf(n),
            m = 0;
          -1 !== l &&
            ((m = o.event_followed_flags[l]), e ? (r = m & ~r) : (r |= m));
          let c = 0 == r,
            d =
              ("store" === (0, u.yK)()
                ? u.TS.STORE_BASE_URL + "events"
                : u.TS.COMMUNITY_BASE_URL +
                  "/gid/" +
                  a.ConvertTo64BitString()) +
              (c ? "/unfolloworunignoreevent" : "/followorignoreevent"),
            p = new URLSearchParams();
          p.append("sessionid", u.TS.SESSIONID),
            p.append("ignore", "" + t),
            p.append("gid", n),
            p.append("notification_flag", "" + r),
            p.append("clan_accountid", "" + a.GetAccountID());
          await i().post(d, p, { withCredentials: !0 });
          (0, s.h5)(() => {
            let e = this.m_mapClanToUserPermissions.get(a.GetAccountID()),
              i = null,
              s = null,
              o = null,
              l = null;
            c
              ? ((i = t ? e.result.event_ignored : e.result.event_followed),
                (o = t ? null : e.result.event_followed_flags))
              : t
                ? ((i = e.result.event_followed),
                  (o = e.result.event_followed_flags),
                  (s = e.result.event_ignored))
                : ((i = e.result.event_ignored),
                  (s = e.result.event_followed),
                  (l = e.result.event_followed_flags));
            let m = i.indexOf(n);
            if ((m > -1 && (i.splice(m, 1), o && o.splice(m, 1)), s)) {
              let e = s.indexOf(n);
              -1 == e ? (s.push(n), l && l.push(r)) : l && (l[e] = r);
            }
          });
        }
        async Vote(e, t, a) {
          if (!e || !e.AnnouncementGID) return !1;
          const n = this.m_mapAnnounceGIDToVote.get(e.AnnouncementGID);
          if (n === t) return !0;
          if (
            (this.m_mapAnnounceGIDToVote.set(e.AnnouncementGID, t),
            (0, s.h5)(() => {
              !0 === n && e.UpdateVoteCount("up", -1),
                !1 === n && e.UpdateVoteCount("down", -1),
                !0 === t && e.UpdateVoteCount("up", 1),
                !1 === t && e.UpdateVoteCount("down", 1);
            }),
            this.m_cm)
          ) {
            let a = o.w.Init(l.QU);
            return (
              a.Body().set_announcementid(e.AnnouncementGID),
              a.Body().set_vote_up(!!t),
              a.Body().set_clan_accountid(e.clanSteamID.GetAccountID()),
              1 ==
                (
                  await l.BE.RateClanAnnouncement(
                    this.m_cm.GetServiceTransport(),
                    a,
                  )
                ).GetEResult()
            );
          }
          {
            const n = (0, u.yK)(),
              r =
                "community" == n || "steamtv" == n
                  ? u.TS.COMMUNITY_BASE_URL +
                    "gid/" +
                    e.clanSteamID.ConvertTo64BitString() +
                    "/announcements/rate/" +
                    e.AnnouncementGID
                  : u.TS.STORE_BASE_URL +
                    "updated/ajaxrateupdate/" +
                    e.AnnouncementGID,
              s = new URLSearchParams();
            s.append("sessionid", u.TS.SESSIONID),
              s.append("voteup", t ? "1" : "0"),
              s.append("clanid", "" + e.clanSteamID.GetAccountID()),
              s.append("ajax", "1");
            const o = { withCredentials: !0, cancelToken: a.token };
            return 1 == (await i().post(r, s, o)).data.success;
          }
        }
        async LoadMyVote(e, t) {
          if (e?.AnnouncementGID) {
            if (this.m_mapAnnounceGIDToVote.has(e.AnnouncementGID))
              return !!this.m_mapAnnounceGIDToVote.get(e.AnnouncementGID);
            let a;
            if (this.m_cm) {
              let t = o.w.Init(l.$Y);
              t.Body().set_announcementid(e.AnnouncementGID);
              let n = await l.BE.GetClanAnnouncementVoteForUser(
                this.m_cm.GetServiceTransport(),
                t,
              );
              1 == n.GetEResult() &&
                (a =
                  !!n.Body().voted_up() || (!n.Body().voted_down() && void 0));
            } else {
              const n = "store" == (0, u.yK)(),
                r = n
                  ? u.TS.STORE_BASE_URL + "actions/ajaxgetmyannouncementvote"
                  : u.TS.COMMUNITY_BASE_URL +
                    "gid/" +
                    e.clanSteamID.ConvertTo64BitString() +
                    "/announcements/ajaxgetmyvote/" +
                    e.AnnouncementGID,
                s = { gid: n ? e.AnnouncementGID : void 0 },
                o = await i().get(r, {
                  withCredentials: !0,
                  cancelToken: t.token,
                  params: s,
                });
              a = !!o.data.voted_up || (!o.data.voted_down && void 0);
            }
            return this.m_mapAnnounceGIDToVote.set(e.AnnouncementGID, a), a;
          }
        }
        SetVote(e, t) {
          this.m_mapAnnounceGIDToVote.set(e, t);
        }
        BHasMyVote(e) {
          return (
            !!e.AnnouncementGID &&
            this.m_mapAnnounceGIDToVote.has(e.AnnouncementGID)
          );
        }
        GetPreviouslyLoadedVote(e) {
          return e.AnnouncementGID
            ? this.m_mapAnnounceGIDToVote.get(e.AnnouncementGID)
            : void 0;
        }
        BShowEmailEditorTab(e) {
          if (e.BHasEmailEnabled()) return !0;
          if (e.clanSteamID.GetAccountID() == (0, f.H)()) return !0;
          let t = this.GetPartnerEventPermissions(e.clanSteamID);
          return (u.UF.IS_OGG || u.UF.IS_VALVE_GROUP) && t.valve_admin;
        }
      }
      function v() {
        const [e, t] = (0, I.useState)(() => C.BIsInited());
        return (
          (0, I.useEffect)(() => {
            if (!e) {
              (async () => {
                await Promise.all([C.InitGlobal()]), t(!0);
              })();
            }
          }, [e]),
          e
        );
      }
      function B(e) {
        const [t, a] = (0, I.useState)(
            C.Get().BIsPartnerEventPermissionsLoaded(e),
          ),
          n = g.b.InitFromClanID(e),
          [r, i] = (0, I.useState)(C.Get().GetPartnerEventPermissions(n));
        return (
          (0, I.useEffect)(() => {
            if (!t) {
              const t = g.b.InitFromClanID(e);
              C.Get()
                .LoadSingleAppEventPermissions(t)
                .then((e) => {
                  i(e), a(!0);
                });
            }
          }, [t, e]),
          r
        );
      }
      (0, n.Cg)([s.sH], C.prototype, "m_mapClanToUserPermissions", void 0),
        (0, n.Cg)([s.sH], C.prototype, "m_mapAnnounceGIDToVote", void 0),
        (0, n.Cg)([s.sH], C.prototype, "m_setReadEventGIDs", void 0),
        (0, n.Cg)([s.XI], C.prototype, "CopyFromResponseToTrack", null);
    },
    26161: (e, t, a) => {
      a.d(t, { H: () => r });
      var n = a(30470);
      const r = () => (2 === n.TS.EUNIVERSE ? 2581 : 45267781);
    },
  },
]);

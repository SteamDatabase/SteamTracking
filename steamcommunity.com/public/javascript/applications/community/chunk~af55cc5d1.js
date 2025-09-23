/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [5955],
  {
    4796: (e, t, n) => {
      n.d(t, {
        DF: () => v,
        TB: () => f,
        Vy: () => C,
        W$: () => y,
        ac: () => I,
      });
      var a = n(34629),
        r = n(90626),
        i = n(41735),
        s = n.n(i),
        o = n(14947),
        l = n(17720),
        c = n(81393),
        m = n(78327),
        u = n(67165),
        d = n(26161),
        p = n(60746),
        _ = n(55263),
        g = n(13952);
      class h {
        constructor() {
          (this.m_mapAppIDToClanInfo = new Map()),
            (this.m_mapVanityToClanInfo = new Map()),
            (this.m_mapClanAccountIDToClanInfo = new Map()),
            (this.m_mapPromisesLoading = new Map()),
            (this.m_rgQueuedEventsClanIDs = new Array()),
            (this.m_bLoadedFromConfig = !1),
            (0, o.Gn)(this);
        }
        Init() {
          this.LazyInit();
        }
        LazyInit() {
          this.m_bLoadedFromConfig ||
            ((0, o.h5)(() => {
              let e = (0, m.Fd)("groupvanityinfo", "application_config");
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
            (0, c.wT)(e.BIsValid(), "Clan SteamID is not valid when ClanInfo"),
            (0, c.wT)(
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
            (0, c.wT)(
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
            m.TS.COMMUNITY_BASE_URL + "ogg/" + e + "/ajaxgetvanityandclanid/";
          let n = null;
          try {
            n = (await s().get(t, { params: this.GetRequestParam() })).data;
          } catch (e) {}
          return n
            ? (this.InternalSetupValue(n), this.m_mapAppIDToClanInfo.get(e))
            : null;
        }
        async LoadOGGClanInfoForIdentifier(e) {
          if (
            (this.LazyInit(),
            this.m_mapVanityToClanInfo.has(
              null == e ? void 0 : e.toLocaleLowerCase(),
            ))
          )
            return this.m_mapVanityToClanInfo.get(
              null == e ? void 0 : e.toLocaleLowerCase(),
            );
          let t = "storevanity_" + (null == e ? void 0 : e.toLocaleLowerCase());
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
            m.TS.COMMUNITY_BASE_URL + "games/" + e + "/ajaxgetvanityandclanid/";
          let n = await s().get(t, { params: this.GetRequestParam() });
          return (
            this.InternalSetupValue(n.data),
            this.m_mapVanityToClanInfo.get(
              null == e ? void 0 : e.toLocaleLowerCase(),
            )
          );
        }
        async LoadOGGClanInfoForGroupVanity(e) {
          if (
            (this.LazyInit(),
            this.m_mapVanityToClanInfo.has(
              null == e ? void 0 : e.toLocaleLowerCase(),
            ))
          )
            return this.m_mapVanityToClanInfo.get(
              null == e ? void 0 : e.toLocaleLowerCase(),
            );
          let t = "community_name_" + e;
          return (
            this.m_mapPromisesLoading.has(t) ||
              this.m_mapPromisesLoading.set(
                t,
                this.InternalLoadOGGClanInfoForGroupVanity(
                  null == e ? void 0 : e.toLocaleLowerCase(),
                ),
              ),
            this.m_mapPromisesLoading.get(t)
          );
        }
        async InternalLoadOGGClanInfoForGroupVanity(e) {
          const t =
            m.TS.COMMUNITY_BASE_URL +
            "groups/" +
            e +
            "/ajaxgetvanityandclanid/";
          let n = await s().get(t, { params: this.GetRequestParam() });
          return (
            this.InternalSetupValue(n.data),
            this.m_mapVanityToClanInfo.get(
              null == e ? void 0 : e.toLocaleLowerCase(),
            )
          );
        }
        async LoadClanInfoForClanSteamID(e) {
          this.LazyInit();
          let t = e.GetAccountID();
          if (this.m_mapClanAccountIDToClanInfo.has(t))
            return this.m_mapClanAccountIDToClanInfo.get(t);
          let n = "clanaccountid_" + t;
          return (
            this.m_mapPromisesLoading.has(n) ||
              this.m_mapPromisesLoading.set(
                n,
                this.InternalLoadClanInfoForClanSteamID(e),
              ),
            this.m_mapPromisesLoading.get(n)
          );
        }
        async LoadClanInfoForClanAccountID(e) {
          const t = l.b.InitFromClanID(e);
          return this.LoadClanInfoForClanSteamID(t);
        }
        async InternalLoadClanInfoForClanSteamID(e) {
          let t = e.GetAccountID();
          const n =
            m.TS.COMMUNITY_BASE_URL +
            "gid/" +
            e.ConvertTo64BitString() +
            "/ajaxgetvanityandclanid/";
          let a = await s().get(n, { params: this.GetRequestParam() });
          return (
            this.InternalSetupValue(a.data),
            this.m_mapClanAccountIDToClanInfo.get(t)
          );
        }
        GetOGGClanInfo(e) {
          return "string" == typeof e
            ? this.m_mapVanityToClanInfo.get(
                null == e ? void 0 : e.toLocaleLowerCase(),
              )
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
            (0, c.wT)(
              !!e,
              "Unepxected clanid when requesting information. GetClanInfoByClanAccountID ",
            ),
            this.m_mapClanAccountIDToClanInfo.get(e)
          );
        }
        GetCreatorStoreURL(e) {
          let t = u.pF.GetCreatorHome(e);
          if (t) return t.GetCreatorHomeURL("developer");
          let n = this.GetClanInfoByClanAccountID(e.GetAccountID());
          return (
            m.TS.COMMUNITY_BASE_URL +
            (n.vanity_url
              ? "groups/" + n.vanity_url
              : "gid/" + e.ConvertTo64BitString())
          );
        }
      }
      (0, a.Cg)([o.sH], h.prototype, "m_mapAppIDToClanInfo", void 0),
        (0, a.Cg)([o.sH], h.prototype, "m_mapVanityToClanInfo", void 0),
        (0, a.Cg)([o.sH], h.prototype, "m_mapClanAccountIDToClanInfo", void 0),
        (0, a.Cg)([o.XI], h.prototype, "RegisterClanData", null),
        (0, a.Cg)([o.XI], h.prototype, "InternalSetupValue", null);
      const I = new h();
      function f(e) {
        const [t, n] = (0, r.useState)(
            e ? I.GetClanInfoByClanAccountID(e) : void 0,
          ),
          [a, i] = (0, r.useState)(!!e && !I.BHasClanInfoLoadedByAccountID(e));
        return (
          (0, r.useEffect)(() => {
            if (e)
              if (I.BHasClanInfoLoadedByAccountID(e))
                n(I.GetClanInfoByClanAccountID(e)), i(!1);
              else {
                i(!0);
                const t = l.b.InitFromClanID(
                  "string" == typeof e ? Number.parseInt(e) : e,
                );
                I.LoadClanInfoForClanSteamID(t)
                  .then((e) => {
                    n(null != e ? e : void 0), i(!1);
                  })
                  .catch((t) =>
                    console.error(`Failed to load clan info ${e}`, t),
                  );
              }
            else n(void 0), i(!1);
          }, [e]),
          [a, t]
        );
      }
      function y(e) {
        const [t, n] = (0, r.useState)(I.GetOGGClanInfo(e));
        return (
          (0, r.useEffect)(() => {
            t || I.LoadOGGClanInfoForGroupVanity(e).then(n);
          }, [t, e]),
          t
        );
      }
      function C(e) {
        const [t, n] = f(e.clanSteamID.GetAccountID()),
          a = !t && (null == n ? void 0 : n.is_ogg),
          i = p.KN.Get().GetPartnerEventPermissions(e.clanSteamID).valve_admin;
        return r.useMemo(() => {
          if (a) return { bVisible: !1 };
          if (e.BHasSaleEnabled()) return { bVisible: !0 };
          if (
            e.jsondata.clone_from_event_gid &&
            e.jsondata.clone_from_sale_enabled
          )
            return { bVisible: !0 };
          if (e.clanSteamID.GetAccountID() == (0, d.H)())
            return { bVisible: !1 };
          const t = u.pF.GetCreatorHome(e.clanSteamID);
          return t && t.BHasClanAccountFlagSet(32)
            ? { bVisible: !0 }
            : i
              ? { bVisible: !0, bValveOnly: !0 }
              : { bVisible: !1 };
        }, [a, e, i]);
      }
      function v(e) {
        const t = e.BIsOGGEvent(),
          n = p.KN.Get().GetPartnerEventPermissions(e.clanSteamID).valve_admin,
          [a] = (0, _.t7)(e.appid, g.A.k_DataRequest_BasicInfo),
          i = a && !a.GetParentAppID();
        return r.useMemo(
          () =>
            t && i
              ? e.BHasSaleEnabled()
                ? { bVisible: !0 }
                : 1 == m.TS.EUNIVERSE
                  ? { bVisible: !1 }
                  : n && 14 == e.GetEventType()
                    ? { bVisible: !0, bValveOnly: !0 }
                    : { bVisible: !1 }
              : { bVisible: !1 },
          [t, i, n, e],
        );
      }
      window.g_ClanStore = I;
    },
    67165: (e, t, n) => {
      n.d(t, { pF: () => G, FV: () => L });
      var a,
        r = n(34629),
        i = n(56545),
        s = n(80613),
        o = n.n(s),
        l = n(89068);
      class c extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            c.prototype.appid || l.Sg(c.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
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
            n = new c();
          return c.deserializeBinaryFromReader(n, t);
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
          return "CDeveloperPageLink";
        }
      }
      class m extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            m.prototype.clan_account_id || l.Sg(m.M()),
            s.Message.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = {
                proto: m,
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
            n = new m();
          return m.deserializeBinaryFromReader(n, t);
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
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: {
                  appid: { n: 1, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  link: { n: 2, c },
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
            n = new u();
          return u.deserializeBinaryFromReader(n, t);
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
            n = new d();
          return d.deserializeBinaryFromReader(n, t);
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
            n = new p();
          return p.deserializeBinaryFromReader(n, t);
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
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: { links: { n: 1, c, r: !0, q: !0 } },
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
            n = new _();
          return _.deserializeBinaryFromReader(n, t);
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
            n = new g();
          return g.deserializeBinaryFromReader(n, t);
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
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: { results: { n: 1, c: m, r: !0, q: !0 } },
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
            n = new h();
          return h.deserializeBinaryFromReader(n, t);
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
            n = new I();
          return I.deserializeBinaryFromReader(n, t);
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
            n = new f();
          return f.deserializeBinaryFromReader(n, t);
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
            n = new y();
          return y.deserializeBinaryFromReader(n, t);
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
      })(a || (a = {}));
      var C = n(41735),
        v = n.n(C),
        B = n(14947),
        S = n(90626),
        w = n(78327);
      class b {
        constructor(e) {
          (this.m_appidList = new Array()),
            (this.m_strName = ""),
            (this.m_strAvatarURLFullSize = ""),
            (this.m_strTagLineLoc = ""),
            (this.m_nFollowers = 0),
            (this.m_strVanity = ""),
            (this.m_webLink = void 0),
            (this.m_bIsLoaded = !1),
            (this.m_bIsHidden = !1),
            (this.m_clanAccountFlags = 0),
            (0, B.Gn)(this),
            (this.m_clanSteamID = e);
        }
        Initialize(e) {
          var t;
          (this.m_strName = e.name || ""),
            (this.m_strAvatarURLFullSize =
              e.avatar_url_full_size ||
              "https://avatars.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_full.jpg"),
            (this.m_strTagLineLoc = e.tag_line_localized || ""),
            (this.m_nFollowers = e.followers || 0),
            (this.m_strVanity = e.vanity || void 0),
            (this.m_webLink = e.weblink),
            (this.m_bIsHidden = e.hidden || !1),
            (this.m_clanAccountFlags =
              null !== (t = e.clan_account_flags) && void 0 !== t ? t : 0),
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
          let n = w.TS.PARTNER_BASE_URL + "sales/ajaxupdateclanaccountflags",
            a = this.m_clanAccountFlags;
          if (
            (e.forEach((e) => {
              t ? (a |= e) : (a &= ~e);
            }),
            a == this.m_clanAccountFlags)
          )
            return;
          let r = new Array();
          1 & a && r.push(1),
            8 & a && r.push(8),
            2 & a && r.push(2),
            4 & a && r.push(4),
            16 & a && r.push(16),
            32 & a && r.push(32),
            64 & a && r.push(64);
          let i = new FormData();
          i.append("sessionid", w.TS.SESSIONID),
            i.append("clan_account_id", this.GetClanAccountID().toString()),
            i.append("accountflags", JSON.stringify(r));
          let s = await v().post(n, i);
          s &&
            200 == s.status &&
            1 == s.data.success &&
            (this.m_clanAccountFlags = a);
        }
      }
      (0, r.Cg)([B.sH], b.prototype, "m_appidList", void 0),
        (0, r.Cg)([B.sH], b.prototype, "m_nFollowers", void 0),
        (0, r.Cg)([B.sH], b.prototype, "m_clanAccountFlags", void 0);
      var T = n(17720),
        A = n(4434);
      class D {
        constructor() {
          (this.m_mapClanToCreatorHome = new Map()),
            (this.m_mapAppToCreatorIDList = new Map()),
            (this.m_bLoadedFromConfig = !1),
            (0, B.Gn)(this);
        }
        LazyInit() {
          if (!this.m_bLoadedFromConfig) {
            let e = (0, w.Tc)("creatorhome", "application_config");
            this.ValidateStoreDefault(e) &&
              e.forEach((e) => {
                let t = Number(e.creator_clan_id),
                  n = T.b.InitFromClanID(t),
                  a = new b(n);
                a.Initialize(e),
                  (a.m_promise = D.GetAsPromise(a)),
                  this.m_mapClanToCreatorHome.set(t, a);
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
            let n = new b(e);
            (n.m_promise = this.InternalCreatorHome(n, t)),
              await n.m_promise,
              this.m_mapClanToCreatorHome.set(e.GetAccountID(), n);
          }
          return this.m_mapClanToCreatorHome.get(e.GetAccountID()).m_promise;
        }
        async InternalCreatorHome(e, t) {
          let n = { get_appids: !0, l: w.TS.LANGUAGE, origin: self.origin },
            a =
              w.TS.STORE_BASE_URL +
              "curator/" +
              e.GetClanAccountID() +
              "/ajaxgetcreatorhomeinfo",
            r = await v().get(a, { params: n, cancelToken: t && t.token });
          return e.Initialize(r.data), e;
        }
        async LoadCreatorHomeListForAppIncludeHiddden(e, t) {
          if ((this.LazyInit(), !this.m_mapAppToCreatorIDList.has(e))) {
            let n = { appid: e },
              a = w.TS.STORE_BASE_URL + "events/ajaxgetcreatorhomeidforapp",
              r = await v().get(a, {
                params: n,
                cancelToken: t && t.token,
                withCredentials: !0,
              });
            this.m_mapAppToCreatorIDList.set(e, r.data.creator_list);
          }
          return this.m_mapAppToCreatorIDList.get(e);
        }
        async SearchCreatorHomeStore(e, t, n) {
          let a = `${w.TS.STORE_BASE_URL}curator/0/ajaxsearchcurators`,
            r = {
              term: e.replace(" ", "+"),
              require_creator: t,
              cc: w.TS.COUNTRY,
              l: w.TS.LANGUAGE,
              origin: self.origin,
            },
            i = new Array();
          const s = await v().get(a, { params: r, cancelToken: n.token });
          return (
            s.data.curators &&
              (0, B.h5)(() => {
                s.data.curators.forEach((e) => {
                  if (!this.m_mapClanToCreatorHome.has(e.creator_clan_id)) {
                    let t = T.b.InitFromClanID(e.creator_clan_id),
                      n = new b(t);
                    n.Initialize(e),
                      this.m_mapClanToCreatorHome.set(e.creator_clan_id, n);
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
        var t;
        const n = T.b.InitFromClanID(e),
          [a, r] = S.useState(G.GetCreatorHome(n)),
          i = (0, A.m)("useCreatorHome");
        return (
          S.useEffect(() => {
            const t = T.b.InitFromClanID(e);
            G.BHasCreatorHomeLoaded(t)
              ? a
                ? a.GetClanAccountID() != e && r(G.GetCreatorHome(t))
                : r(G.GetCreatorHome(t))
              : G.LoadCreatorHome(t).then(() => {
                  var e;
                  (null === (e = null == i ? void 0 : i.token) || void 0 === e
                    ? void 0
                    : e.reason) || r(G.GetCreatorHome(t));
                });
          }, [
            null === (t = null == i ? void 0 : i.token) || void 0 === t
              ? void 0
              : t.reason,
            e,
            a,
          ]),
          a
        );
      }
      window.g_CreatorHomeStore = G;
    },
    60746: (e, t, n) => {
      n.d(t, { KN: () => C, Nh: () => _, Ec: () => v });
      var a = n(34629),
        r = n(41735),
        i = n.n(r),
        s = n(14947),
        o = n(56545),
        l = n(37403),
        c = n(6144),
        m = n(6419),
        u = n(78327),
        d = n(68797);
      class p {
        constructor(e) {
          (this.m_setShownEvents = new Set()),
            (this.m_setReadEvents = new Set()),
            (this.m_rgPendingUpload = []),
            (this.m_schUpload = new c.LU()),
            (this.m_bUploading = !1),
            (this.m_CMInterface = e);
        }
        MarkEventShown(e, t, n) {
          let a = this.MakeKey(e, n);
          if (this.m_setShownEvents.has(a)) return !1;
          this.m_setShownEvents.add(a);
          let r = new l.kZ();
          return (
            r.set_event_gid(e),
            r.set_clanid(t),
            r.set_display_location(n),
            r.set_mark_shown(!0),
            this.QueueForUpload(r),
            !0
          );
        }
        MarkEventRead(e, t, n) {
          let a = this.MakeKey(e, n);
          if (this.m_setReadEvents.has(a)) return !1;
          this.m_setReadEvents.add(a);
          let r = new l.kZ();
          return (
            r.set_event_gid(e),
            r.set_clanid(t),
            r.set_display_location(n),
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
            let n = o.w.Init(l.wS);
            for (let t of e) n.Body().add_markings(t);
            this.m_bUploading = !0;
            let a = await l.BE.MarkPartnerEventsForUser(
              this.m_CMInterface.GetServiceTransport(),
              n,
            );
            (this.m_bUploading = !1), (t = 1 == a.GetEResult());
          } else {
            if (!u.iA.logged_in) return;
            let n = e.map((e) => e.toObject()),
              a = (0, u.xv)() + "actions/ajaxmarkpartnerevents";
            const r = new FormData();
            r.append("sessionid", u.TS.SESSIONID),
              r.append("request", JSON.stringify(n));
            try {
              t =
                1 ==
                (await i().post(a, r, { withCredentials: !0 })).data.success;
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
      (0, a.Cg)([m.o], p.prototype, "UploadPendingData", null);
      var _,
        g = n(17720),
        h = n(81393),
        I = n(90626),
        f = n(26161);
      class y {
        constructor(e) {
          (this.clanid = void 0),
            (this.appid = 0),
            (this.can_edit = !1),
            (this.owns_app = !1),
            (this.follows_app = !1),
            (this.support_user = !1),
            (this.valve_admin = !1),
            (this.limited_user = !1),
            (this.event_ignored = new Array()),
            (this.event_followed = new Array()),
            (this.event_followed_flags = new Array()),
            (0, s.Gn)(this),
            (this.clanid = e);
        }
      }
      (0, a.Cg)([s.sH], y.prototype, "clanid", void 0),
        (0, a.Cg)([s.sH], y.prototype, "appid", void 0),
        (0, a.Cg)([s.sH], y.prototype, "can_edit", void 0),
        (0, a.Cg)([s.sH], y.prototype, "owns_app", void 0),
        (0, a.Cg)([s.sH], y.prototype, "follows_app", void 0),
        (0, a.Cg)([s.sH], y.prototype, "support_user", void 0),
        (0, a.Cg)([s.sH], y.prototype, "valve_admin", void 0),
        (0, a.Cg)([s.sH], y.prototype, "limited_user", void 0),
        (0, a.Cg)([s.sH], y.prototype, "event_ignored", void 0),
        (0, a.Cg)([s.sH], y.prototype, "event_followed", void 0),
        (0, a.Cg)([s.sH], y.prototype, "event_followed_flags", void 0),
        (function (e) {
          (e[(e.k_ENotifyFlagNone = 0)] = "k_ENotifyFlagNone"),
            (e[(e.k_ENotifyFlagByEmail = 1)] = "k_ENotifyFlagByEmail"),
            (e[(e.k_ENotifyFlagByPush = 2)] = "k_ENotifyFlagByPush");
        })(_ || (_ = {}));
      class C {
        constructor() {
          (this.m_mapClanToUserPermissions = new Map()),
            (this.m_mapAnnounceGIDToVote = new Map()),
            (this.m_setReadEventGIDs = new Set()),
            (this.m_tracker = void 0),
            (this.m_cm = void 0),
            (this.m_bIsPresentationMode = (0, u.Bu)()),
            (0, s.Gn)(this);
        }
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
                  n = { result: t, promise: C.RemapToPromise(t), bLoaded: !0 };
                this.CopyFromResponseToTrack(n, e),
                  this.m_mapClanToUserPermissions.set(e.clanid, n);
              });
            }),
            ("dev" != u.TS.WEB_UNIVERSE && "beta" != u.TS.WEB_UNIVERSE) ||
              console.log(
                "CEventUserStore has loaded",
                this.m_mapClanToUserPermissions.size,
                this.m_mapClanToUserPermissions,
              ));
          let n = (0, u.Fd)("uservotes", "application_config");
          n &&
            (0, s.h5)(() => {
              n.forEach((e) => {
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
        BFollowsEventAndNotifiedBy(e, t, n) {
          let a = this.GetPartnerEventPermissions(e),
            r = a.event_followed.indexOf(t);
          return -1 !== r && (a.event_followed_flags[r] & n) == n;
        }
        BIgnoresEvent(e, t) {
          return (
            -1 != this.GetPartnerEventPermissions(e).event_ignored.indexOf(t)
          );
        }
        async LoadSingleAppEventPermissions(e) {
          let t = e.GetAccountID(),
            n = this.m_mapClanToUserPermissions.get(t);
          return (
            n ||
              ((n = {
                promise: this.InternalLoadSingleAppEventPermissions(e),
                result: new y(t),
                bLoaded: !1,
              }),
              this.m_mapClanToUserPermissions.set(t, n)),
            n.promise
          );
        }
        CopyFromResponseToTrack(e, t) {
          var n, a, r, i;
          (e.result.appid = null !== (n = t.appid) && void 0 !== n ? n : 0),
            (e.result.can_edit = !!t.can_edit),
            (e.result.clanid = t.appid),
            (e.result.event_followed =
              null !== (a = t.event_followed) && void 0 !== a ? a : []),
            (e.result.event_ignored =
              null !== (r = t.event_ignored) && void 0 !== r ? r : []),
            (e.result.event_followed_flags =
              null !== (i = t.event_followed_flags) && void 0 !== i ? i : []),
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
            n = e.GetAccountID(),
            a = !Boolean(u.iA.logged_in);
          if (!this.m_mapClanToUserPermissions.has(n)) {
            let t = new y(e.GetAccountID());
            this.m_mapClanToUserPermissions.set(n, {
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
                let e = this.m_mapClanToUserPermissions.get(n);
                e && this.CopyFromResponseToTrack(e, t.data);
              } else
                console.error(
                  "Partner Events Failed Load:" +
                    (0, d.H)(null == t ? void 0 : t.data).strErrorMsg,
                ),
                  (a = !0);
            }
          } catch (e) {
            if (
              ((t = e.response),
              (a = !0),
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
                  n +
                  ": " +
                  t.strErrorMsg,
                t,
              );
            }
          } finally {
            a &&
              (0, s.h5)(() => {
                var e;
                let a = this.m_mapClanToUserPermissions.get(n);
                (a.result.appid =
                  null !== (e = null == t ? void 0 : t.data.appid) &&
                  void 0 !== e
                    ? e
                    : 0),
                  (a.result.can_edit = !1),
                  (a.result.clanid = t && t.data ? t.data.clanid : 0),
                  (a.result.event_followed = new Array()),
                  (a.result.event_ignored = new Array()),
                  (a.result.event_followed_flags = new Array()),
                  (a.result.follows_app = !1),
                  (a.result.owns_app = !1),
                  (a.result.support_user = !1),
                  (a.result.valve_admin = !1),
                  (a.result.limited_user = !1),
                  (a.bLoaded = !0);
              });
          }
          return this.m_mapClanToUserPermissions.get(n).result;
        }
        async SetFollowOrUnfollowEvent(e, t, n, a, r) {
          let o = this.GetPartnerEventPermissions(n),
            l = o.event_followed.indexOf(a),
            c = 0;
          -1 !== l &&
            ((c = o.event_followed_flags[l]), e ? (r = c & ~r) : (r |= c));
          let m = 0 == r,
            d =
              ("store" === (0, u.yK)()
                ? u.TS.STORE_BASE_URL + "events"
                : u.TS.COMMUNITY_BASE_URL +
                  "/gid/" +
                  n.ConvertTo64BitString()) +
              (m ? "/unfolloworunignoreevent" : "/followorignoreevent"),
            p = new URLSearchParams();
          p.append("sessionid", u.TS.SESSIONID),
            p.append("ignore", "" + t),
            p.append("gid", a),
            p.append("notification_flag", "" + r),
            p.append("clan_accountid", "" + n.GetAccountID());
          await i().post(d, p, { withCredentials: !0 });
          (0, s.h5)(() => {
            let e = this.m_mapClanToUserPermissions.get(n.GetAccountID()),
              i = null,
              s = null,
              o = null,
              l = null;
            m
              ? ((i = t ? e.result.event_ignored : e.result.event_followed),
                (o = t ? null : e.result.event_followed_flags))
              : t
                ? ((i = e.result.event_followed),
                  (o = e.result.event_followed_flags),
                  (s = e.result.event_ignored))
                : ((i = e.result.event_ignored),
                  (s = e.result.event_followed),
                  (l = e.result.event_followed_flags));
            let c = i.indexOf(a);
            if ((c > -1 && (i.splice(c, 1), o && o.splice(c, 1)), s)) {
              let e = s.indexOf(a);
              -1 == e ? (s.push(a), l && l.push(r)) : l && (l[e] = r);
            }
          });
        }
        async Vote(e, t, n) {
          if (!e || !e.AnnouncementGID) return !1;
          const a = this.m_mapAnnounceGIDToVote.get(e.AnnouncementGID);
          if (a === t) return !0;
          if (
            (this.m_mapAnnounceGIDToVote.set(e.AnnouncementGID, t),
            (0, s.h5)(() => {
              !0 === a && e.UpdateVoteCount("up", -1),
                !1 === a && e.UpdateVoteCount("down", -1),
                !0 === t && e.UpdateVoteCount("up", 1),
                !1 === t && e.UpdateVoteCount("down", 1);
            }),
            this.m_cm)
          ) {
            let n = o.w.Init(l.QU);
            return (
              n.Body().set_announcementid(e.AnnouncementGID),
              n.Body().set_vote_up(!!t),
              n.Body().set_clan_accountid(e.clanSteamID.GetAccountID()),
              1 ==
                (
                  await l.BE.RateClanAnnouncement(
                    this.m_cm.GetServiceTransport(),
                    n,
                  )
                ).GetEResult()
            );
          }
          {
            const a = (0, u.yK)(),
              r =
                "community" == a || "steamtv" == a
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
            const o = { withCredentials: !0, cancelToken: n.token };
            return 1 == (await i().post(r, s, o)).data.success;
          }
        }
        async LoadMyVote(e, t) {
          if (null == e ? void 0 : e.AnnouncementGID) {
            if (this.m_mapAnnounceGIDToVote.has(e.AnnouncementGID))
              return !!this.m_mapAnnounceGIDToVote.get(e.AnnouncementGID);
            let n;
            if (this.m_cm) {
              let t = o.w.Init(l.$Y);
              t.Body().set_announcementid(e.AnnouncementGID);
              let a = await l.BE.GetClanAnnouncementVoteForUser(
                this.m_cm.GetServiceTransport(),
                t,
              );
              1 == a.GetEResult() &&
                (n =
                  !!a.Body().voted_up() || (!a.Body().voted_down() && void 0));
            } else {
              const a = "store" == (0, u.yK)(),
                r = a
                  ? u.TS.STORE_BASE_URL + "actions/ajaxgetmyannouncementvote"
                  : u.TS.COMMUNITY_BASE_URL +
                    "gid/" +
                    e.clanSteamID.ConvertTo64BitString() +
                    "/announcements/ajaxgetmyvote/" +
                    e.AnnouncementGID,
                s = { gid: a ? e.AnnouncementGID : void 0 },
                o = await i().get(r, {
                  withCredentials: !0,
                  cancelToken: t.token,
                  params: s,
                });
              n = !!o.data.voted_up || (!o.data.voted_down && void 0);
            }
            return this.m_mapAnnounceGIDToVote.set(e.AnnouncementGID, n), n;
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
      function v(e) {
        const [t, n] = (0, I.useState)(
            C.Get().BIsPartnerEventPermissionsLoaded(e),
          ),
          a = g.b.InitFromClanID(e),
          [r, i] = (0, I.useState)(C.Get().GetPartnerEventPermissions(a));
        return (
          (0, I.useEffect)(() => {
            if (!t) {
              const t = g.b.InitFromClanID(e);
              C.Get()
                .LoadSingleAppEventPermissions(t)
                .then((e) => {
                  i(e), n(!0);
                });
            }
          }, [t, e]),
          r
        );
      }
      (0, a.Cg)([s.sH], C.prototype, "m_mapClanToUserPermissions", void 0),
        (0, a.Cg)([s.sH], C.prototype, "m_mapAnnounceGIDToVote", void 0),
        (0, a.Cg)([s.sH], C.prototype, "m_setReadEventGIDs", void 0),
        (0, a.Cg)([s.XI], C.prototype, "CopyFromResponseToTrack", null);
    },
    26161: (e, t, n) => {
      n.d(t, { H: () => r });
      var a = n(30470);
      const r = () => (2 === a.TS.EUNIVERSE ? 2581 : 45267781);
    },
  },
]);

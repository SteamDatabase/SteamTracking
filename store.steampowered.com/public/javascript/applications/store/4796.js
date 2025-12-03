/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [4796],
  {
    55374: (e, t, r) => {
      r.d(t, { K_: () => s, dU: () => f, eb: () => i, eh: () => g });
      var n,
        a,
        i,
        s,
        o = r(80613),
        l = r.n(o),
        c = r(89068),
        m = r(56545),
        u = r(36003);
      !(function (e) {
        (e[(e.k_EStoreCuratorRecommendationState_Recommended = 0)] =
          "k_EStoreCuratorRecommendationState_Recommended"),
          (e[(e.k_EStoreCuratorRecommendationState_NotRecommended = 1)] =
            "k_EStoreCuratorRecommendationState_NotRecommended"),
          (e[(e.k_EStoreCuratorRecommendationState_Informative = 2)] =
            "k_EStoreCuratorRecommendationState_Informative"),
          (e[(e.k_EStoreCuratorRecommendationState_CreatedApp = 3)] =
            "k_EStoreCuratorRecommendationState_CreatedApp");
      })(n || (n = {})),
        (function (e) {
          (e[(e.k_EStoreCuratorListType_Unknown = 0)] =
            "k_EStoreCuratorListType_Unknown"),
            (e[(e.k_EStoreCuratorListType_Grid = 1)] =
              "k_EStoreCuratorListType_Grid"),
            (e[(e.k_EStoreCuratorListType_Ordered = 2)] =
              "k_EStoreCuratorListType_Ordered"),
            (e[(e.k_EStoreCuratorListType_AutoDLC = 3)] =
              "k_EStoreCuratorListType_AutoDLC"),
            (e[(e.k_EStoreCuratorListType_SaleList = 4)] =
              "k_EStoreCuratorListType_SaleList");
        })(a || (a = {})),
        (function (e) {
          (e[(e.k_EStoreCuratorListState_Hidden = 0)] =
            "k_EStoreCuratorListState_Hidden"),
            (e[(e.k_EStoreCuratorListState_Public = 1)] =
              "k_EStoreCuratorListState_Public"),
            (e[(e.k_EStoreCuratorListState_Featured = 2)] =
              "k_EStoreCuratorListState_Featured");
        })(i || (i = {}));
      class d extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            d.prototype.appid || c.Sg(d.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  appid: { n: 1, br: c.qM.readUint32, bw: c.gp.writeUint32 },
                  clanid: { n: 2, br: c.qM.readUint32, bw: c.gp.writeUint32 },
                  link_url: { n: 3, br: c.qM.readString, bw: c.gp.writeString },
                  link_text: {
                    n: 4,
                    br: c.qM.readString,
                    bw: c.gp.writeString,
                  },
                  blurb: { n: 5, br: c.qM.readString, bw: c.gp.writeString },
                  time_recommended: {
                    n: 6,
                    br: c.qM.readUint32,
                    bw: c.gp.writeUint32,
                  },
                  comment_count: {
                    n: 7,
                    br: c.qM.readInt32,
                    bw: c.gp.writeInt32,
                  },
                  upvote_count: {
                    n: 8,
                    br: c.qM.readInt32,
                    bw: c.gp.writeInt32,
                  },
                  accountid_creator: {
                    n: 9,
                    br: c.qM.readUint32,
                    bw: c.gp.writeUint32,
                  },
                  recommendation_state: {
                    n: 10,
                    br: c.qM.readEnum,
                    bw: c.gp.writeEnum,
                  },
                  received_compensation: {
                    n: 11,
                    br: c.qM.readBool,
                    bw: c.gp.writeBool,
                  },
                  received_for_free: {
                    n: 12,
                    br: c.qM.readBool,
                    bw: c.gp.writeBool,
                  },
                },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = c.w0(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, t) {
          return c.BT(d.M(), e, t);
        }
        static fromObject(e) {
          return c.Uq(d.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (l().BinaryReader)(e),
            r = new d();
          return d.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return c.zj(d.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          c.i0(d.M(), e, t);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCuration_RecommendedApp";
        }
      }
      class _ extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _.prototype.listid || c.Sg(_.M()),
            o.Message.initialize(this, e, 0, -1, [10, 12, 13, 14], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  listid: {
                    n: 1,
                    br: c.qM.readUint64String,
                    bw: c.gp.writeUint64String,
                  },
                  title: { n: 2, br: c.qM.readString, bw: c.gp.writeString },
                  blurb: { n: 3, br: c.qM.readString, bw: c.gp.writeString },
                  link: { n: 4, br: c.qM.readString, bw: c.gp.writeString },
                  list_state: { n: 5, br: c.qM.readEnum, bw: c.gp.writeEnum },
                  sort_order: {
                    n: 6,
                    br: c.qM.readUint32,
                    bw: c.gp.writeUint32,
                  },
                  time_created: {
                    n: 7,
                    br: c.qM.readUint32,
                    bw: c.gp.writeUint32,
                  },
                  time_updated: {
                    n: 8,
                    br: c.qM.readUint32,
                    bw: c.gp.writeUint32,
                  },
                  accountid: {
                    n: 9,
                    br: c.qM.readUint32,
                    bw: c.gp.writeUint32,
                  },
                  apps: { n: 10, c: p, r: !0, q: !0 },
                  list_type: { n: 11, br: c.qM.readEnum, bw: c.gp.writeEnum },
                  title_localization: { n: 12, c: u.O2, r: !0, q: !0 },
                  blurb_localization: { n: 13, c: u.O2, r: !0, q: !0 },
                  link_localization: { n: 14, c: u.O2, r: !0, q: !0 },
                  sale_clan_steamid: {
                    n: 15,
                    br: c.qM.readFixed64String,
                    bw: c.gp.writeFixed64String,
                  },
                  sale_clan_event_gid: {
                    n: 16,
                    br: c.qM.readFixed64String,
                    bw: c.gp.writeFixed64String,
                  },
                  list_jsondata: {
                    n: 17,
                    br: c.qM.readString,
                    bw: c.gp.writeString,
                  },
                  clan_account_id: {
                    n: 18,
                    br: c.qM.readUint32,
                    bw: c.gp.writeUint32,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = c.w0(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, t) {
          return c.BT(_.M(), e, t);
        }
        static fromObject(e) {
          return c.Uq(_.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (l().BinaryReader)(e),
            r = new _();
          return _.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return c.zj(_.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          c.i0(_.M(), e, t);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCuration_ListDetails";
        }
      }
      class p extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.recommended_app || c.Sg(p.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  recommended_app: { n: 1, c: d },
                  blurb: { n: 2, br: c.qM.readString, bw: c.gp.writeString },
                  sort_order: {
                    n: 3,
                    br: c.qM.readUint32,
                    bw: c.gp.writeUint32,
                  },
                },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = c.w0(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return c.BT(p.M(), e, t);
        }
        static fromObject(e) {
          return c.Uq(p.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (l().BinaryReader)(e),
            r = new p();
          return p.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return c.zj(p.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          c.i0(p.M(), e, t);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCuration_ListDetails_ListItem";
        }
      }
      class g extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            g.prototype.steamid || c.Sg(g.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  steamid: {
                    n: 1,
                    br: c.qM.readFixed64String,
                    bw: c.gp.writeFixed64String,
                  },
                  list_state: { n: 2, br: c.qM.readEnum, bw: c.gp.writeEnum },
                  start: { n: 3, br: c.qM.readUint32, bw: c.gp.writeUint32 },
                  count: { n: 4, br: c.qM.readUint32, bw: c.gp.writeUint32 },
                  return_total_only: {
                    n: 5,
                    br: c.qM.readBool,
                    bw: c.gp.writeBool,
                  },
                  return_metadata_only: {
                    n: 6,
                    br: c.qM.readBool,
                    bw: c.gp.writeBool,
                  },
                  max_apps: { n: 7, br: c.qM.readInt32, bw: c.gp.writeInt32 },
                  sale_clan_event_gid: {
                    n: 8,
                    br: c.qM.readFixed64String,
                    bw: c.gp.writeFixed64String,
                  },
                },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = c.w0(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, t) {
          return c.BT(g.M(), e, t);
        }
        static fromObject(e) {
          return c.Uq(g.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (l().BinaryReader)(e),
            r = new g();
          return g.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return c.zj(g.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          c.i0(g.M(), e, t);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCuration_GetLists_Request";
        }
      }
      class h extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.list_details || c.Sg(h.M()),
            o.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  list_details: { n: 1, c: _, r: !0, q: !0 },
                  total: { n: 2, br: c.qM.readUint32, bw: c.gp.writeUint32 },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = c.w0(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return c.BT(h.M(), e, t);
        }
        static fromObject(e) {
          return c.Uq(h.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (l().BinaryReader)(e),
            r = new h();
          return h.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return c.zj(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          c.i0(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCuration_GetLists_Response";
        }
      }
      class f extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.steamid || c.Sg(f.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: {
                  steamid: {
                    n: 1,
                    br: c.qM.readFixed64String,
                    bw: c.gp.writeFixed64String,
                  },
                  listid: {
                    n: 2,
                    br: c.qM.readUint64String,
                    bw: c.gp.writeUint64String,
                  },
                },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = c.w0(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return c.BT(f.M(), e, t);
        }
        static fromObject(e) {
          return c.Uq(f.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (l().BinaryReader)(e),
            r = new f();
          return f.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return c.zj(f.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          c.i0(f.M(), e, t);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCuration_GetListDetails_Request";
        }
      }
      class y extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.list_details || c.Sg(y.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = { proto: y, fields: { list_details: { n: 1, c: _ } } }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = c.w0(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return c.BT(y.M(), e, t);
        }
        static fromObject(e) {
          return c.Uq(y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (l().BinaryReader)(e),
            r = new y();
          return y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return c.zj(y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          c.i0(y.M(), e, t);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCuration_GetListDetails_Response";
        }
      }
      !(function (e) {
        (e.GetLists = function (e, t) {
          return e.SendMsg("StoreCuration.GetLists#1", (0, m.I8)(g, t), h, {
            bConstMethod: !0,
            ePrivilege: 2,
            eWebAPIKeyRequirement: 1,
          });
        }),
          (e.GetListDetails = function (e, t) {
            return e.SendMsg(
              "StoreCuration.GetListDetails#1",
              (0, m.I8)(f, t),
              y,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          });
      })(s || (s = {}));
    },
    4796: (e, t, r) => {
      r.d(t, { TB: () => h, ac: () => g });
      var n,
        a = r(34629),
        i = r(41735),
        s = r.n(i),
        o = r(14947),
        l = r(90626),
        c = r(22837),
        m = r(17720),
        u = r(81393),
        d = r(78327),
        _ = r(67165);
      r(26161), r(31540), r(60746);
      !(function (e) {
        (e[(e.Sale = 0)] = "Sale"),
          (e[(e.UpdateLandingPage = 1)] = "UpdateLandingPage"),
          (e[(e.CreatorHome = 2)] = "CreatorHome");
      })(n || (n = {}));
      class p {
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
              let e = (0, d.Fd)("groupvanityinfo", "application_config");
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
            (0, u.wT)(e.BIsValid(), "Clan SteamID is not valid when ClanInfo"),
            (0, u.wT)(
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
            clanSteamID: new m.b(e.clanSteamIDString),
            appid: e.appid,
            vanity_url: e.vanity_url,
            member_count: e.member_count,
            is_ogg: e.is_ogg,
            is_creator_home: e.is_creator_home,
            is_curator: e.is_curator,
            has_visible_store_page: e.has_visible_store_page,
            has_rss_feed: e.has_rss_feed,
            rss_language: e.rss_language ? e.rss_language : c.gS.k_Lang_English,
            avatar_full_url: e.avatar_full_url,
            avatar_medium_url: e.avatar_medium_url,
            group_name: e.group_name,
            creator_page_bg_url: e.creator_page_bg_url,
            curator_title: e.curator_title,
            curator_description: e.curator_description,
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
            (0, u.wT)(
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
            d.TS.COMMUNITY_BASE_URL + "ogg/" + e + "/ajaxgetvanityandclanid/";
          let r = null;
          try {
            r = (await s().get(t, { params: this.GetRequestParam() })).data;
          } catch (e) {}
          return r
            ? (this.InternalSetupValue(r), this.m_mapAppIDToClanInfo.get(e))
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
            d.TS.COMMUNITY_BASE_URL + "games/" + e + "/ajaxgetvanityandclanid/";
          let r = await s().get(t, { params: this.GetRequestParam() });
          return (
            this.InternalSetupValue(r.data),
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
            d.TS.COMMUNITY_BASE_URL +
            "groups/" +
            e +
            "/ajaxgetvanityandclanid/";
          let r = await s().get(t, { params: this.GetRequestParam() });
          return (
            this.InternalSetupValue(r.data),
            this.m_mapVanityToClanInfo.get(e?.toLocaleLowerCase())
          );
        }
        async LoadClanInfoForClanSteamID(e) {
          this.LazyInit();
          let t = e.GetAccountID();
          if (this.m_mapClanAccountIDToClanInfo.has(t))
            return this.m_mapClanAccountIDToClanInfo.get(t);
          let r = "clanaccountid_" + t;
          return (
            this.m_mapPromisesLoading.has(r) ||
              this.m_mapPromisesLoading.set(
                r,
                this.InternalLoadClanInfoForClanSteamID(e),
              ),
            this.m_mapPromisesLoading.get(r)
          );
        }
        async LoadClanInfoForClanAccountID(e) {
          const t = m.b.InitFromClanID(e);
          return this.LoadClanInfoForClanSteamID(t);
        }
        async InternalLoadClanInfoForClanSteamID(e) {
          let t = e.GetAccountID();
          const r =
            d.TS.COMMUNITY_BASE_URL +
            "gid/" +
            e.ConvertTo64BitString() +
            "/ajaxgetvanityandclanid/";
          let n = await s().get(r, { params: this.GetRequestParam() });
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
            return m.b.InitFromClanID(
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
            (0, u.wT)(
              !!e,
              "Unepxected clanid when requesting information. GetClanInfoByClanAccountID ",
            ),
            this.m_mapClanAccountIDToClanInfo.get(e)
          );
        }
        GetCreatorStoreURL(e) {
          let t = _.pF.GetCreatorHome(e);
          if (t) return t.GetCreatorHomeURL("developer");
          let r = this.GetClanInfoByClanAccountID(e.GetAccountID());
          return (
            d.TS.COMMUNITY_BASE_URL +
            (r.vanity_url
              ? "groups/" + r.vanity_url
              : "gid/" + e.ConvertTo64BitString())
          );
        }
      }
      (0, a.Cg)([o.sH], p.prototype, "m_mapAppIDToClanInfo", void 0),
        (0, a.Cg)([o.sH], p.prototype, "m_mapVanityToClanInfo", void 0),
        (0, a.Cg)([o.sH], p.prototype, "m_mapClanAccountIDToClanInfo", void 0),
        (0, a.Cg)([o.XI], p.prototype, "RegisterClanData", null),
        (0, a.Cg)([o.XI], p.prototype, "InternalSetupValue", null);
      const g = new p();
      function h(e) {
        const [t, r] = (0, l.useState)(
            e ? g.GetClanInfoByClanAccountID(e) : void 0,
          ),
          [n, a] = (0, l.useState)(!!e && !g.BHasClanInfoLoadedByAccountID(e));
        return (
          (0, l.useEffect)(() => {
            if (e)
              if (g.BHasClanInfoLoadedByAccountID(e))
                r(g.GetClanInfoByClanAccountID(e)), a(!1);
              else {
                a(!0);
                const t = m.b.InitFromClanID(
                  "string" == typeof e ? Number.parseInt(e) : e,
                );
                g.LoadClanInfoForClanSteamID(t)
                  .then((e) => {
                    r(e ?? void 0), a(!1);
                  })
                  .catch((t) =>
                    console.error(`Failed to load clan info ${e}`, t),
                  );
              }
            else r(void 0), a(!1);
          }, [e]),
          [n, t]
        );
      }
      window.g_ClanStore = g;
    },
    67165: (e, t, r) => {
      r.d(t, {
        mD: () => O,
        ie: () => W,
        A2: () => k,
        R7: () => U,
        pF: () => F,
        FV: () => P,
      });
      var n,
        a,
        i = r(34629),
        s = r(22837),
        o = r(56545),
        l = r(80613),
        c = r.n(l),
        m = r(89068);
      !(function (e) {
        (e[(e.k_EAppDevsRelationship_Unknown = 0)] =
          "k_EAppDevsRelationship_Unknown"),
          (e[(e.k_EAppDevsRelationship_Publisher = 1)] =
            "k_EAppDevsRelationship_Publisher"),
          (e[(e.k_EAppDevsRelationship_Developer = 2)] =
            "k_EAppDevsRelationship_Developer"),
          (e[(e.k_EAppDevsRelationship_Publisher_Developer = 3)] =
            "k_EAppDevsRelationship_Publisher_Developer"),
          (e[(e.k_EAppDevsRelationship_MacPortDeveloper = 4)] =
            "k_EAppDevsRelationship_MacPortDeveloper"),
          (e[(e.k_EAppDevsRelationship_LinuxPortDeveloper = 5)] =
            "k_EAppDevsRelationship_LinuxPortDeveloper"),
          (e[(e.k_EAppDevsRelationship_Franchise = 6)] =
            "k_EAppDevsRelationship_Franchise"),
          (e[(e.k_EAppDevsRelationship_MAX = 7)] =
            "k_EAppDevsRelationship_MAX");
      })(n || (n = {}));
      class u extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            u.prototype.appid || m.Sg(u.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: {
                  appid: { n: 1, br: m.qM.readUint32, bw: m.gp.writeUint32 },
                  clan_steamid: {
                    n: 2,
                    br: m.qM.readFixed64String,
                    bw: m.gp.writeFixed64String,
                  },
                  relation: { n: 3, br: m.qM.readEnum, bw: m.gp.writeEnum },
                  linkname: { n: 4, br: m.qM.readString, bw: m.gp.writeString },
                  json: { n: 5, br: m.qM.readString, bw: m.gp.writeString },
                },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = m.w0(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(u.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(u.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            r = new u();
          return u.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(u.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(u.M(), e, t);
        }
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CDeveloperPageLink";
        }
      }
      class d extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            d.prototype.clan_account_id || m.Sg(d.M()),
            l.Message.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  clan_account_id: {
                    n: 1,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                  appid_list: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: m.qM.readUint32,
                    pbr: m.qM.readPackedUint32,
                    bw: m.gp.writeRepeatedUint32,
                  },
                },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = m.w0(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(d.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(d.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            r = new d();
          return d.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(d.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(d.M(), e, t);
        }
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CDeveloperPageToApps";
        }
      }
      class _ extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _.prototype.appid || m.Sg(_.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  appid: { n: 1, br: m.qM.readUint32, bw: m.gp.writeUint32 },
                  link: { n: 2, c: u },
                  remove: {
                    n: 3,
                    d: !1,
                    br: m.qM.readBool,
                    bw: m.gp.writeBool,
                  },
                  update_json_only: {
                    n: 4,
                    d: !1,
                    br: m.qM.readBool,
                    bw: m.gp.writeBool,
                  },
                  skip_clan_permissions: {
                    n: 5,
                    d: !1,
                    br: m.qM.readBool,
                    bw: m.gp.writeBool,
                  },
                  partner_id: {
                    n: 6,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = m.w0(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(_.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(_.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            r = new _();
          return _.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(_.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(_.M(), e, t);
        }
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCatalog_SetDevPageLink_Request";
        }
      }
      class p extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new p();
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            r = new p();
          return p.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCatalog_SetDevPageLink_Response";
        }
      }
      class g extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            g.prototype.appid || m.Sg(g.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  appid: { n: 1, br: m.qM.readUint32, bw: m.gp.writeUint32 },
                },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = m.w0(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(g.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(g.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            r = new g();
          return g.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(g.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(g.M(), e, t);
        }
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCatalog_GetDevPageLinks_Request";
        }
      }
      class h extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.links || m.Sg(h.M()),
            l.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: { links: { n: 1, c: u, r: !0, q: !0 } },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = m.w0(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(h.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(h.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            r = new h();
          return h.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCatalog_GetDevPageLinks_Response";
        }
      }
      class f extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.clan_account_ids || m.Sg(f.M()),
            l.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: {
                  clan_account_ids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: m.qM.readUint32,
                    pbr: m.qM.readPackedUint32,
                    bw: m.gp.writeRepeatedUint32,
                  },
                  ignore_dlc: { n: 2, br: m.qM.readBool, bw: m.gp.writeBool },
                },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = m.w0(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(f.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(f.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            r = new f();
          return f.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(f.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(f.M(), e, t);
        }
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCatalog_GetDevPageAllAppsLinked_Request";
        }
      }
      class y extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.results || m.Sg(y.M()),
            l.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: { results: { n: 1, c: d, r: !0, q: !0 } },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = m.w0(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(y.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            r = new y();
          return y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(y.M(), e, t);
        }
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCatalog_GetDevPageAllAppsLinked_Response";
        }
      }
      class I extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            I.prototype.partnerid || m.Sg(I.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
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
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                },
              }),
            I.sm_m
          );
        }
        static MBF() {
          return I.sm_mbf || (I.sm_mbf = m.w0(I.M())), I.sm_mbf;
        }
        toObject(e = !1) {
          return I.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(I.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(I.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            r = new I();
          return I.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(I.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(I.M(), e, t);
        }
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCatalog_GetDevPagesForPartner_Request";
        }
      }
      class B extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            B.prototype.results || m.Sg(B.M()),
            l.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: { results: { n: 1, c: w, r: !0, q: !0 } },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = m.w0(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(B.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(B.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            r = new B();
          return B.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(B.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(B.M(), e, t);
        }
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCatalog_GetDevPagesForPartner_Response";
        }
      }
      class w extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.clan_accountid || m.Sg(w.M()),
            l.Message.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  clan_accountid: {
                    n: 1,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                  linknames: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: m.qM.readString,
                    bw: m.gp.writeRepeatedString,
                  },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = m.w0(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(w.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(w.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            r = new w();
          return w.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(w.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(w.M(), e, t);
        }
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCatalog_GetDevPagesForPartner_Response_CDevPageInfo";
        }
      }
      !(function (e) {
        (e.SetDevPageLink = function (e, t) {
          return e.SendMsg(
            "StoreCatalog.SetDevPageLink#1",
            (0, o.I8)(_, t),
            p,
            { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
          );
        }),
          (e.GetDevPageLinks = function (e, t) {
            return e.SendMsg(
              "StoreCatalog.GetDevPageLinks#1",
              (0, o.I8)(g, t),
              h,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }),
          (e.GetDevPageAllAppsLinked = function (e, t) {
            return e.SendMsg(
              "StoreCatalog.GetDevPageAllAppsLinked#1",
              (0, o.I8)(f, t),
              y,
              { ePrivilege: 1 },
            );
          }),
          (e.GetDevPagesForPartner = function (e, t) {
            return e.SendMsg(
              "StoreCatalog.GetDevPagesForPartner#1",
              (0, o.I8)(I, t),
              B,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          });
      })(a || (a = {}));
      var S = r(55374),
        C = r(20194),
        b = r(41735),
        v = r.n(b),
        M = r(14947),
        T = r(37085),
        A = r(31540),
        E = r(78327);
      class L {
        m_clanSteamID;
        m_appidList = new Array();
        m_strName = "";
        m_strAvatarURLFullSize = "";
        m_strTagLineLoc = "";
        m_nFollowers = 0;
        m_strVanity = "";
        m_webLink = void 0;
        m_linkedEvent = void 0;
        m_mapListInfo = new Map();
        m_promise;
        m_bIsLoaded = !1;
        m_bIsHidden = !1;
        m_clanAccountFlags = 0;
        constructor(e) {
          (0, M.Gn)(this), (this.m_clanSteamID = e);
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
            (this.m_linkedEvent = e.linked_event),
            (this.m_mapListInfo = new Map(Object.entries(e.list_info ?? {}))),
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
          return Boolean(
            this.m_clanAccountFlags &
              A.Wv.k_EClanAccountFlag_AllowPartnerEventEditor,
          );
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
                  E.TS.STORE_BASE_URL + "publisher/" + this.m_strVanity + "/"
                );
              case "franchise":
                return (
                  E.TS.STORE_BASE_URL + "franchise/" + this.m_strVanity + "/"
                );
            }
            return E.TS.STORE_BASE_URL + "developer/" + this.m_strVanity + "/";
          }
          return (
            E.TS.STORE_BASE_URL +
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
        GetLinkedEventGID() {
          return this.m_linkedEvent;
        }
        GetListInfo() {
          return this.m_mapListInfo;
        }
        AdjustFollower(e) {
          this.m_nFollowers += e;
        }
        async EnablePartnerEventEditorFlag() {
          this.BIsPartnerEventEditorEnabled() ||
            (await this.UpdateGroupFlagsFeature(
              [
                A.Wv.k_EClanAccountFlag_AllowClanImages,
                A.Wv.k_EClanAccountFlag_AllowPartnerEventEditor,
              ],
              !0,
            ));
        }
        async UpdateGroupFlagsFeature(e, t) {
          let r = E.TS.PARTNER_BASE_URL + "sales/ajaxupdateclanaccountflags",
            n = this.m_clanAccountFlags;
          if (
            (e.forEach((e) => {
              t ? (n |= e) : (n &= ~e);
            }),
            n == this.m_clanAccountFlags)
          )
            return;
          let a = new Array();
          n & A.Wv.k_EClanAccountFlag_TrustedPress &&
            a.push(A.Wv.k_EClanAccountFlag_TrustedPress),
            n & A.Wv.k_EClanAccountFlag_AllowPartnerEventEditor &&
              a.push(A.Wv.k_EClanAccountFlag_AllowPartnerEventEditor),
            n & A.Wv.k_EClanAccountFlag_AllowClanImages &&
              a.push(A.Wv.k_EClanAccountFlag_AllowClanImages),
            n & A.Wv.k_EClanAccountFlag_AllowRSSFeed &&
              a.push(A.Wv.k_EClanAccountFlag_AllowRSSFeed),
            n & A.Wv.k_EClanAccountFlag_AllowFAQEditing &&
              a.push(A.Wv.k_EClanAccountFlag_AllowFAQEditing),
            n & A.Wv.k_EClanAccountFlag_AllowSalePageEditing &&
              a.push(A.Wv.k_EClanAccountFlag_AllowSalePageEditing),
            n & A.Wv.k_EClanAccountFlag_AllowSalePagePublishWithoutReview &&
              a.push(A.Wv.k_EClanAccountFlag_AllowSalePagePublishWithoutReview);
          let i = new FormData();
          i.append("sessionid", E.TS.SESSIONID),
            i.append("clan_account_id", this.GetClanAccountID().toString()),
            i.append("accountflags", JSON.stringify(a));
          let s = await v().post(r, i);
          s &&
            200 == s.status &&
            s.data.success == T.d.k_EResultOK &&
            (this.m_clanAccountFlags = n);
        }
      }
      (0, i.Cg)([M.sH], L.prototype, "m_appidList", void 0),
        (0, i.Cg)([M.sH], L.prototype, "m_nFollowers", void 0),
        (0, i.Cg)([M.sH], L.prototype, "m_clanAccountFlags", void 0);
      var D = r(72034),
        R = r(17720);
      class z {
        constructor() {
          (0, M.Gn)(this);
        }
        m_mapClanToCreatorHome = new Map();
        m_mapAppToCreatorIDList = new Map();
        m_bLoadedFromConfig = !1;
        m_serviceTransport = void 0;
        LazyInit() {
          if (!this.m_bLoadedFromConfig) {
            const e = (0, E.Tc)("creatorhome", "application_config");
            this.ValidateStoreDefault(e) &&
              e.forEach((e) => {
                const t = Number(e.creator_clan_id),
                  r = R.b.InitFromClanID(t),
                  n = new L(r);
                n.Initialize(e),
                  (n.m_promise = z.GetAsPromise(n)),
                  this.m_mapClanToCreatorHome.set(t, n);
              });
            const t = (0, E.Tc)("creatorhomeforapp", "application_config");
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
        GetServiceTransport() {
          if (!this.m_serviceTransport) {
            const e = (0, E.Tc)("loyalty_webapi_token", "application_config"),
              t = new D.D(E.TS.WEBAPI_BASE_URL, e || void 0);
            this.m_serviceTransport = t.GetServiceTransport();
          }
          return this.m_serviceTransport;
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
        async LoadCreatorHome(e, t = !1, r) {
          if (
            (this.LazyInit(),
            t || !this.m_mapClanToCreatorHome.has(e.GetAccountID()))
          ) {
            let t = new L(e);
            (t.m_promise = this.InternalCreatorHome(t, r)),
              await t.m_promise,
              this.m_mapClanToCreatorHome.set(e.GetAccountID(), t);
          }
          return this.m_mapClanToCreatorHome.get(e.GetAccountID()).m_promise;
        }
        async InternalCreatorHome(e, t) {
          let r = { get_appids: !0, l: E.TS.LANGUAGE, origin: self.origin },
            n =
              E.TS.STORE_BASE_URL +
              "curator/" +
              e.GetClanAccountID() +
              "/ajaxgetcreatorhomeinfo",
            a = await v().get(n, { params: r, cancelToken: t && t.token });
          return e.Initialize(a.data), e;
        }
        async LoadCreatorHomeListForAppIncludeHiddden(e, t) {
          if ((this.LazyInit(), !this.m_mapAppToCreatorIDList.has(e))) {
            let r = { appid: e },
              n = E.TS.STORE_BASE_URL + "events/ajaxgetcreatorhomeidforapp",
              a = await v().get(n, {
                params: r,
                cancelToken: t && t.token,
                withCredentials: !0,
              });
            this.m_mapAppToCreatorIDList.set(e, a.data.creator_list);
          }
          return this.m_mapAppToCreatorIDList.get(e);
        }
        async SearchCreatorHomeStore(e, t, r) {
          let n = `${E.TS.STORE_BASE_URL}curator/0/ajaxsearchcurators`,
            a = {
              term: e.replace(" ", "+"),
              require_creator: t,
              cc: E.TS.COUNTRY,
              l: E.TS.LANGUAGE,
              origin: self.origin,
            },
            i = new Array();
          const s = await v().get(n, { params: a, cancelToken: r.token });
          return (
            s.data.curators &&
              (0, M.h5)(() => {
                s.data.curators.forEach((e) => {
                  if (!this.m_mapClanToCreatorHome.has(e.creator_clan_id)) {
                    let t = R.b.InitFromClanID(e.creator_clan_id),
                      r = new L(t);
                    r.Initialize(e),
                      this.m_mapClanToCreatorHome.set(e.creator_clan_id, r);
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
      (0, i.Cg)([M.sH], z.prototype, "m_mapClanToCreatorHome", void 0),
        (0, i.Cg)([M.sH], z.prototype, "m_mapAppToCreatorIDList", void 0),
        (0, i.Cg)([M.XI], z.prototype, "LazyInit", null);
      const F = new z();
      window.g_CreatorHomeStore = F;
      class G {
        constructor() {
          (0, M.Gn)(this);
        }
        m_mapListInfo = new Map();
        m_bLoadedFromConfig = !1;
        LazyInit() {
          if (!this.m_bLoadedFromConfig) {
            const e = (0, E.Tc)("creator_home_list_info", "application_config");
            if (this.ValidateCreatorHomeTitles(e))
              for (const [
                t,
                { title: r, description: n, listtileimage: a },
              ] of Object.entries(e ?? {}))
                r &&
                  this.m_mapListInfo.set(t, {
                    title: r ?? "",
                    description: n?.length ? n : void 0,
                    imageUrl: a?.length ? a : void 0,
                  });
            this.m_bLoadedFromConfig = !0;
          }
        }
        ValidateCreatorHomeTitles(e) {
          return null != e && "object" == typeof e && !Array.isArray(e);
        }
        GetListTitle(e) {
          return this.LazyInit(), e ? this.m_mapListInfo.get(e)?.title : void 0;
        }
        GetListSubtitle(e) {
          return (
            this.LazyInit(), e ? this.m_mapListInfo.get(e)?.description : void 0
          );
        }
        GetListtileImage(e) {
          return (
            this.LazyInit(), e ? this.m_mapListInfo.get(e)?.imageUrl : void 0
          );
        }
      }
      (0, i.Cg)([M.sH], G.prototype, "m_mapListInfo", void 0),
        (0, i.Cg)([M.XI], G.prototype, "LazyInit", null);
      const U = new G();
      function k(e) {
        const t = R.b.InitFromClanID(e);
        return {
          queryKey: ["CreatorHome", e],
          initialData: () => F.GetCreatorHome(t),
          queryFn: async () => {
            const t = R.b.InitFromClanID(e);
            return await F.LoadCreatorHome(t, !0);
          },
        };
      }
      function P(e) {
        const { data: t, isFetching: r, refetch: n } = (0, C.I)(k(e));
        return { creatorHome: t, isFetching: r, refetch: n };
      }
      function O(e, t) {
        return {
          queryKey: ["GetCreatorHomeGetAllListsQuery", e],
          queryFn: async () => {
            const r = F.GetServiceTransport(),
              n = o.w.Init(S.eh);
            n
              .Body()
              .set_steamid(
                new R.b(
                  e,
                  E.TS.EUNIVERSE,
                  s.Tm.k_EAccountTypeClan,
                  0,
                ).ConvertTo64BitString(),
              ),
              n.Body().set_count(100);
            const a = await S.K_.GetLists(r, n);
            return a.BSuccess()
              ? a
                  .Body()
                  .list_details()
                  .filter(
                    (e) =>
                      t ||
                      e.list_state() != S.eb.k_EStoreCuratorListState_Hidden,
                  )
              : null;
          },
          enabled: e > 0,
        };
      }
      function W(e, t) {
        return {
          queryKey: ["GetCreatorHomeGetListsDetailsQuery", e, t],
          queryFn: async () => {
            const r = F.GetServiceTransport(),
              n = o.w.Init(S.dU);
            n
              .Body()
              .set_steamid(
                new R.b(
                  e,
                  E.TS.EUNIVERSE,
                  s.Tm.k_EAccountTypeClan,
                  0,
                ).ConvertTo64BitString(),
              ),
              n.Body().set_listid(t);
            const a = await S.K_.GetListDetails(r, n);
            return a.BSuccess() ? (a.Body().list_details() ?? null) : null;
          },
          enabled: e > 0,
        };
      }
      window.g_CreatorHomeListInfoStore = U;
    },
    60746: (e, t, r) => {
      r.d(t, { KN: () => w, Nh: () => g, Ec: () => C, kY: () => S });
      var n = r(34629),
        a = r(41735),
        i = r.n(a),
        s = r(14947),
        o = r(37085),
        l = r(56545),
        c = r(37403),
        m = r(6144),
        u = r(6419),
        d = r(78327),
        _ = r(68797);
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
        MarkEventShown(e, t, r) {
          let n = this.MakeKey(e, r);
          if (this.m_setShownEvents.has(n)) return !1;
          this.m_setShownEvents.add(n);
          let a = new c.kZ();
          return (
            a.set_event_gid(e),
            a.set_clanid(t),
            a.set_display_location(r),
            a.set_mark_shown(!0),
            this.QueueForUpload(a),
            !0
          );
        }
        MarkEventRead(e, t, r) {
          let n = this.MakeKey(e, r);
          if (this.m_setReadEvents.has(n)) return !1;
          this.m_setReadEvents.add(n);
          let a = new c.kZ();
          return (
            a.set_event_gid(e),
            a.set_clanid(t),
            a.set_display_location(r),
            a.set_mark_read(!0),
            this.QueueForUpload(a),
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
            let r = l.w.Init(c.wS);
            for (let t of e) r.Body().add_markings(t);
            this.m_bUploading = !0;
            let n = await c.BE.MarkPartnerEventsForUser(
              this.m_CMInterface.GetServiceTransport(),
              r,
            );
            (this.m_bUploading = !1), (t = n.GetEResult() == o.d.k_EResultOK);
          } else {
            if (!d.iA.logged_in) return;
            let r = e.map((e) => e.toObject()),
              n = (0, d.xv)() + "actions/ajaxmarkpartnerevents";
            const a = new FormData();
            a.append("sessionid", d.TS.SESSIONID),
              a.append("request", JSON.stringify(r));
            try {
              t =
                (await i().post(n, a, { withCredentials: !0 })).data.success ==
                o.d.k_EResultOK;
            } catch (e) {
              let t = (0, _.H)(e);
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
      (0, n.Cg)([u.o], p.prototype, "UploadPendingData", null);
      var g,
        h = r(17720),
        f = r(81393),
        y = r(90626),
        I = r(26161);
      class B {
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
      (0, n.Cg)([s.sH], B.prototype, "clanid", void 0),
        (0, n.Cg)([s.sH], B.prototype, "appid", void 0),
        (0, n.Cg)([s.sH], B.prototype, "can_edit", void 0),
        (0, n.Cg)([s.sH], B.prototype, "owns_app", void 0),
        (0, n.Cg)([s.sH], B.prototype, "follows_app", void 0),
        (0, n.Cg)([s.sH], B.prototype, "support_user", void 0),
        (0, n.Cg)([s.sH], B.prototype, "valve_admin", void 0),
        (0, n.Cg)([s.sH], B.prototype, "limited_user", void 0),
        (0, n.Cg)([s.sH], B.prototype, "event_ignored", void 0),
        (0, n.Cg)([s.sH], B.prototype, "event_followed", void 0),
        (0, n.Cg)([s.sH], B.prototype, "event_followed_flags", void 0),
        (function (e) {
          (e[(e.k_ENotifyFlagNone = 0)] = "k_ENotifyFlagNone"),
            (e[(e.k_ENotifyFlagByEmail = 1)] = "k_ENotifyFlagByEmail"),
            (e[(e.k_ENotifyFlagByPush = 2)] = "k_ENotifyFlagByPush");
        })(g || (g = {}));
      class w {
        constructor() {
          (0, s.Gn)(this);
        }
        m_mapClanToUserPermissions = new Map();
        m_mapAnnounceGIDToVote = new Map();
        m_setReadEventGIDs = new Set();
        m_tracker = void 0;
        m_cm = void 0;
        static s_EventUserStore;
        m_bIsPresentationMode = (0, d.Bu)();
        static Get() {
          return (
            (0, f.wT)(
              !!w.s_EventUserStore,
              "Have not yet initialized global EventUserStore",
            ),
            w.s_EventUserStore
          );
        }
        static IsInitialized() {
          return !!w.s_EventUserStore;
        }
        static async InitGlobal(e) {
          if (!w.s_EventUserStore) {
            const t = new w();
            await t.Init(e),
              (w.s_EventUserStore = t),
              "dev" == d.TS.WEB_UNIVERSE && (window.g_EventUserStore = t);
          }
        }
        static BIsInited() {
          return Boolean(w.s_EventUserStore);
        }
        async Init(e) {
          (this.m_cm = e), (this.m_tracker = new p(e));
          const t = (0, d.Fd)("partnereventpermissions", "application_config");
          this.ValidateStoreDefault(t) &&
            ((0, s.h5)(() => {
              t.forEach((e) => {
                let t = new B(e.clanid),
                  r = { result: t, promise: w.RemapToPromise(t), bLoaded: !0 };
                this.CopyFromResponseToTrack(r, e),
                  this.m_mapClanToUserPermissions.set(e.clanid, r);
              });
            }),
            ("dev" != d.TS.WEB_UNIVERSE && "beta" != d.TS.WEB_UNIVERSE) ||
              console.log(
                "CEventUserStore has loaded",
                this.m_mapClanToUserPermissions.size,
                this.m_mapClanToUserPermissions,
              ));
          let r = (0, d.Fd)("uservotes", "application_config");
          r &&
            (0, s.h5)(() => {
              r.forEach((e) => {
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
          return d.iA.logged_in;
        }
        BIsPartnerEventPermissionsLoaded(e) {
          return (
            this.m_mapClanToUserPermissions.has(e) &&
            this.m_mapClanToUserPermissions.get(e).bLoaded
          );
        }
        GetPartnerEventPermissions(e) {
          if (!e || !e.BIsValid()) return new B(0);
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
        BFollowsEventAndNotifiedBy(e, t, r) {
          let n = this.GetPartnerEventPermissions(e),
            a = n.event_followed.indexOf(t);
          return -1 !== a && (n.event_followed_flags[a] & r) == r;
        }
        BIgnoresEvent(e, t) {
          return (
            -1 != this.GetPartnerEventPermissions(e).event_ignored.indexOf(t)
          );
        }
        async LoadSingleAppEventPermissions(e) {
          let t = e.GetAccountID(),
            r = this.m_mapClanToUserPermissions.get(t);
          return (
            r ||
              ((r = {
                promise: this.InternalLoadSingleAppEventPermissions(e),
                result: new B(t),
                bLoaded: !1,
              }),
              this.m_mapClanToUserPermissions.set(t, r)),
            r.promise
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
            r = e.GetAccountID(),
            n = !Boolean(d.iA.logged_in);
          if (!this.m_mapClanToUserPermissions.has(r)) {
            let t = new B(e.GetAccountID());
            this.m_mapClanToUserPermissions.set(r, {
              result: t,
              promise: w.RemapToPromise(t),
              bLoaded: !1,
            });
          }
          try {
            if (Boolean(d.iA.logged_in)) {
              let a =
                  d.TS.COMMUNITY_BASE_URL +
                  "gid/" +
                  e.ConvertTo64BitString() +
                  "/ajaxgetpartnereventpermissions/",
                s = {};
              if (
                ("partnerweb" == (0, d.yK)()
                  ? ((a =
                      d.TS.PARTNER_BASE_URL +
                      "partnerevents/ajaxgetpartnereventpermissions"),
                    (s = { clanaccountid: e.GetAccountID() }))
                  : "store" == (0, d.yK)() &&
                    ((a =
                      d.TS.STORE_BASE_URL +
                      "events/ajaxgetpartnereventpermissions"),
                    (s = { clanaccountid: e.GetAccountID() })),
                (t = await i().get(a, { params: s, withCredentials: !0 })),
                t && t.data.success == o.d.k_EResultOK)
              ) {
                let e = this.m_mapClanToUserPermissions.get(r);
                e && this.CopyFromResponseToTrack(e, t.data);
              } else
                console.error(
                  "Partner Events Failed Load:" + (0, _.H)(t?.data).strErrorMsg,
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
                e.response.data.success == o.d.k_EResultNotLoggedOn)
            );
            else {
              const t = (0, _.H)(e);
              console.error(
                "InternalLoadSingleAppEventPermissions account: " +
                  r +
                  ": " +
                  t.strErrorMsg,
                t,
              );
            }
          } finally {
            n &&
              (0, s.h5)(() => {
                let e = this.m_mapClanToUserPermissions.get(r);
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
          return this.m_mapClanToUserPermissions.get(r).result;
        }
        async SetFollowOrUnfollowEvent(e, t, r, n, a) {
          let o = this.GetPartnerEventPermissions(r),
            l = o.event_followed.indexOf(n),
            c = 0;
          -1 !== l &&
            ((c = o.event_followed_flags[l]), e ? (a = c & ~a) : (a |= c));
          let m = 0 == a,
            u =
              ("store" === (0, d.yK)()
                ? d.TS.STORE_BASE_URL + "events"
                : d.TS.COMMUNITY_BASE_URL +
                  "/gid/" +
                  r.ConvertTo64BitString()) +
              (m ? "/unfolloworunignoreevent" : "/followorignoreevent"),
            _ = new URLSearchParams();
          _.append("sessionid", d.TS.SESSIONID),
            _.append("ignore", "" + t),
            _.append("gid", n),
            _.append("notification_flag", "" + a),
            _.append("clan_accountid", "" + r.GetAccountID());
          await i().post(u, _, { withCredentials: !0 });
          (0, s.h5)(() => {
            let e = this.m_mapClanToUserPermissions.get(r.GetAccountID()),
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
            let c = i.indexOf(n);
            if ((c > -1 && (i.splice(c, 1), o && o.splice(c, 1)), s)) {
              let e = s.indexOf(n);
              -1 == e ? (s.push(n), l && l.push(a)) : l && (l[e] = a);
            }
          });
        }
        async Vote(e, t, r) {
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
            let r = l.w.Init(c.QU);
            return (
              r.Body().set_announcementid(e.AnnouncementGID),
              r.Body().set_vote_up(!!t),
              r.Body().set_clan_accountid(e.clanSteamID.GetAccountID()),
              (
                await c.BE.RateClanAnnouncement(
                  this.m_cm.GetServiceTransport(),
                  r,
                )
              ).GetEResult() == o.d.k_EResultOK
            );
          }
          {
            const n = (0, d.yK)(),
              a =
                "community" == n || "steamtv" == n
                  ? d.TS.COMMUNITY_BASE_URL +
                    "gid/" +
                    e.clanSteamID.ConvertTo64BitString() +
                    "/announcements/rate/" +
                    e.AnnouncementGID
                  : d.TS.STORE_BASE_URL +
                    "updated/ajaxrateupdate/" +
                    e.AnnouncementGID,
              s = new URLSearchParams();
            s.append("sessionid", d.TS.SESSIONID),
              s.append("voteup", t ? "1" : "0"),
              s.append("clanid", "" + e.clanSteamID.GetAccountID()),
              s.append("ajax", "1");
            const l = { withCredentials: !0, cancelToken: r.token };
            return (await i().post(a, s, l)).data.success == o.d.k_EResultOK;
          }
        }
        async LoadMyVote(e, t) {
          if (e?.AnnouncementGID) {
            if (this.m_mapAnnounceGIDToVote.has(e.AnnouncementGID))
              return !!this.m_mapAnnounceGIDToVote.get(e.AnnouncementGID);
            let r;
            if (this.m_cm) {
              let t = l.w.Init(c.$Y);
              t.Body().set_announcementid(e.AnnouncementGID);
              let n = await c.BE.GetClanAnnouncementVoteForUser(
                this.m_cm.GetServiceTransport(),
                t,
              );
              n.GetEResult() == o.d.k_EResultOK &&
                (r =
                  !!n.Body().voted_up() || (!n.Body().voted_down() && void 0));
            } else {
              const n = "store" == (0, d.yK)(),
                a = n
                  ? d.TS.STORE_BASE_URL + "actions/ajaxgetmyannouncementvote"
                  : d.TS.COMMUNITY_BASE_URL +
                    "gid/" +
                    e.clanSteamID.ConvertTo64BitString() +
                    "/announcements/ajaxgetmyvote/" +
                    e.AnnouncementGID,
                s = { gid: n ? e.AnnouncementGID : void 0 },
                o = await i().get(a, {
                  withCredentials: !0,
                  cancelToken: t.token,
                  params: s,
                });
              r = !!o.data.voted_up || (!o.data.voted_down && void 0);
            }
            return this.m_mapAnnounceGIDToVote.set(e.AnnouncementGID, r), r;
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
          if (e.clanSteamID.GetAccountID() == (0, I.H)()) return !0;
          let t = this.GetPartnerEventPermissions(e.clanSteamID);
          return (d.UF.IS_OGG || d.UF.IS_VALVE_GROUP) && t.valve_admin;
        }
      }
      function S() {
        const [e, t] = (0, y.useState)(() => w.BIsInited());
        return (
          (0, y.useEffect)(() => {
            if (!e) {
              (async () => {
                await Promise.all([w.InitGlobal()]), t(!0);
              })();
            }
          }, [e]),
          e
        );
      }
      function C(e) {
        const [t, r] = (0, y.useState)(
            w.Get().BIsPartnerEventPermissionsLoaded(e),
          ),
          n = h.b.InitFromClanID(e),
          [a, i] = (0, y.useState)(w.Get().GetPartnerEventPermissions(n));
        return (
          (0, y.useEffect)(() => {
            if (!t) {
              const t = h.b.InitFromClanID(e);
              w.Get()
                .LoadSingleAppEventPermissions(t)
                .then((e) => {
                  i(e), r(!0);
                });
            }
          }, [t, e]),
          a
        );
      }
      (0, n.Cg)([s.sH], w.prototype, "m_mapClanToUserPermissions", void 0),
        (0, n.Cg)([s.sH], w.prototype, "m_mapAnnounceGIDToVote", void 0),
        (0, n.Cg)([s.sH], w.prototype, "m_setReadEventGIDs", void 0),
        (0, n.Cg)([s.XI], w.prototype, "CopyFromResponseToTrack", null);
    },
    26161: (e, t, r) => {
      r.d(t, { H: () => i });
      var n = r(22837),
        a = r(30470);
      const i = () =>
        a.TS.EUNIVERSE === n.Bn.k_EUniverseBeta ? 2581 : 45267781;
    },
  },
]);

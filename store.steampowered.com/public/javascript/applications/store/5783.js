/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [5783],
  {
    10386: (e, t, r) => {
      r.d(t, { FY: () => O, RK: () => R });
      var i,
        s = r(15161),
        a = r(7338),
        n = r(20194),
        o = r(56545),
        c = r(80613),
        l = r.n(c),
        u = r(89068);
      class m extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            m.prototype.item_id || u.Sg(m.M()),
            c.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = {
                proto: m,
                fields: { item_id: { n: 1, c: s.O4 }, item: { n: 2, c: s.vB } },
              }),
            m.sm_m
          );
        }
        static MBF() {
          return m.sm_mbf || (m.sm_mbf = u.w0(m.M())), m.sm_mbf;
        }
        toObject(e = !1) {
          return m.toObject(e, this);
        }
        static toObject(e, t) {
          return u.BT(m.M(), e, t);
        }
        static fromObject(e) {
          return u.Uq(m.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (l().BinaryReader)(e),
            r = new m();
          return m.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return u.zj(m.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          u.i0(m.M(), e, t);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreCapsule";
        }
      }
      class d extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            d.prototype.context || u.Sg(d.M()),
            c.Message.initialize(this, e, 0, -1, [9], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  context: { n: 1, c: s.TS },
                  data_request: { n: 2, c: s.gn },
                  include_spotlights: { n: 5, c: g },
                  include_dailydeals: {
                    n: 6,
                    br: u.qM.readBool,
                    bw: u.gp.writeBool,
                  },
                  include_top_specials_count: {
                    n: 7,
                    br: u.qM.readInt32,
                    bw: u.gp.writeInt32,
                  },
                  include_purchase_recommendations: {
                    n: 8,
                    br: u.qM.readBool,
                    bw: u.gp.writeBool,
                  },
                  additional_purchase_item_ids: { n: 9, c: s.O4, r: !0, q: !0 },
                },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = u.w0(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, t) {
          return u.BT(d.M(), e, t);
        }
        static fromObject(e) {
          return u.Uq(d.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (l().BinaryReader)(e),
            r = new d();
          return d.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return u.zj(d.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          u.i0(d.M(), e, t);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreMarketing_GetItemsToFeature_Request";
        }
      }
      class g extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            g.prototype.location || u.Sg(g.M()),
            c.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  location: { n: 1, br: u.qM.readString, bw: u.gp.writeString },
                  category: { n: 2, br: u.qM.readString, bw: u.gp.writeString },
                  genre_id: { n: 3, br: u.qM.readInt32, bw: u.gp.writeInt32 },
                },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = u.w0(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, t) {
          return u.BT(g.M(), e, t);
        }
        static fromObject(e) {
          return u.Uq(g.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (l().BinaryReader)(e),
            r = new g();
          return g.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return u.zj(g.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          u.i0(g.M(), e, t);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreMarketing_GetItemsToFeature_Request_SpotlightFilter";
        }
      }
      class B extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            B.prototype.spotlights || u.Sg(B.M()),
            c.Message.initialize(this, e, 0, -1, [1, 2, 3, 4], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: {
                  spotlights: { n: 1, c: b, r: !0, q: !0 },
                  daily_deals: { n: 2, c: m, r: !0, q: !0 },
                  specials: { n: 3, c: m, r: !0, q: !0 },
                  purchase_recommendations: { n: 4, c: m, r: !0, q: !0 },
                },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = u.w0(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, t) {
          return u.BT(B.M(), e, t);
        }
        static fromObject(e) {
          return u.Uq(B.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (l().BinaryReader)(e),
            r = new B();
          return B.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return u.zj(B.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          u.i0(B.M(), e, t);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreMarketing_GetItemsToFeature_Response";
        }
      }
      class b extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.item_id || u.Sg(b.M()),
            c.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  item_id: { n: 1, c: s.O4 },
                  associated_item: { n: 2, c: s.vB },
                  spotlight_template: {
                    n: 3,
                    br: u.qM.readString,
                    bw: u.gp.writeString,
                  },
                  spotlight_title: {
                    n: 4,
                    br: u.qM.readString,
                    bw: u.gp.writeString,
                  },
                  spotlight_body: {
                    n: 5,
                    br: u.qM.readString,
                    bw: u.gp.writeString,
                  },
                  asset_url: {
                    n: 6,
                    br: u.qM.readString,
                    bw: u.gp.writeString,
                  },
                  spotlight_link_url: {
                    n: 7,
                    br: u.qM.readString,
                    bw: u.gp.writeString,
                  },
                },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = u.w0(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, t) {
          return u.BT(b.M(), e, t);
        }
        static fromObject(e) {
          return u.Uq(b.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (l().BinaryReader)(e),
            r = new b();
          return b.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return u.zj(b.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          u.i0(b.M(), e, t);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreMarketing_GetItemsToFeature_Response_Spotlight";
        }
      }
      class h extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.capsule_lists || u.Sg(h.M()),
            c.Message.initialize(this, e, 0, -1, [1, 3, 4, 6], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  capsule_lists: { n: 1, c: y, r: !0, q: !0 },
                  takeover: { n: 2, c: m },
                  assets: { n: 3, c: f, r: !0, q: !0 },
                  custom_assets: { n: 4, c: f, r: !0, q: !0 },
                  layout: { n: 5, br: u.qM.readString, bw: u.gp.writeString },
                  fields: { n: 6, c: _, r: !0, q: !0 },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = u.w0(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return u.BT(h.M(), e, t);
        }
        static fromObject(e) {
          return u.Uq(h.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (l().BinaryReader)(e),
            r = new h();
          return h.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return u.zj(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          u.i0(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStorePageCluster";
        }
      }
      class y extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.name || u.Sg(y.M()),
            c.Message.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  name: { n: 1, br: u.qM.readString, bw: u.gp.writeString },
                  capsules: { n: 2, c: m, r: !0, q: !0 },
                  max_visible: {
                    n: 3,
                    br: u.qM.readInt32,
                    bw: u.gp.writeInt32,
                  },
                  max_unreleased: {
                    n: 4,
                    br: u.qM.readInt32,
                    bw: u.gp.writeInt32,
                  },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = u.w0(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return u.BT(y.M(), e, t);
        }
        static fromObject(e) {
          return u.Uq(y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (l().BinaryReader)(e),
            r = new y();
          return y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return u.zj(y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          u.i0(y.M(), e, t);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStorePageCluster_CapsuleList";
        }
      }
      class f extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.asset_name || u.Sg(f.M()),
            c.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: {
                  asset_name: {
                    n: 1,
                    br: u.qM.readString,
                    bw: u.gp.writeString,
                  },
                  asset_path: {
                    n: 2,
                    br: u.qM.readString,
                    bw: u.gp.writeString,
                  },
                },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = u.w0(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return u.BT(f.M(), e, t);
        }
        static fromObject(e) {
          return u.Uq(f.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (l().BinaryReader)(e),
            r = new f();
          return f.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return u.zj(f.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          u.i0(f.M(), e, t);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStorePageCluster_Asset";
        }
      }
      class _ extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _.prototype.name || u.Sg(_.M()),
            c.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  name: { n: 1, br: u.qM.readString, bw: u.gp.writeString },
                  value: { n: 2, br: u.qM.readString, bw: u.gp.writeString },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = u.w0(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, t) {
          return u.BT(_.M(), e, t);
        }
        static fromObject(e) {
          return u.Uq(_.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (l().BinaryReader)(e),
            r = new _();
          return _.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return u.zj(_.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          u.i0(_.M(), e, t);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStorePageCluster_Field";
        }
      }
      class p extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.context || u.Sg(p.M()),
            c.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  context: { n: 1, c: s.TS },
                  data_request: { n: 2, c: s.gn },
                },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = u.w0(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return u.BT(p.M(), e, t);
        }
        static fromObject(e) {
          return u.Uq(p.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (l().BinaryReader)(e),
            r = new p();
          return p.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return u.zj(p.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          u.i0(p.M(), e, t);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreMarketing_GetFrontPageConfig_Request";
        }
      }
      class M extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.cluster || u.Sg(M.M()),
            c.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = { proto: M, fields: { cluster: { n: 1, c: h } } }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = u.w0(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, t) {
          return u.BT(M.M(), e, t);
        }
        static fromObject(e) {
          return u.Uq(M.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (l().BinaryReader)(e),
            r = new M();
          return M.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return u.zj(M.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          u.i0(M.M(), e, t);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreMarketing_GetFrontPageConfig_Response";
        }
      }
      !(function (e) {
        (e.GetItemsToFeature = function (e, t) {
          return e.SendMsg(
            "StoreMarketing.GetItemsToFeature#1",
            (0, o.I8)(d, t),
            B,
            { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
          );
        }),
          (e.GetFrontPageConfig = function (e, t) {
            return e.SendMsg(
              "StoreMarketing.GetFrontPageConfig#1",
              (0, o.I8)(p, t),
              M,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          });
      })(i || (i = {}));
      var w = r(58214),
        z = r(23809),
        S = r(8527);
      function R(e, t) {
        const r = (0, z.KV)(),
          { storeBrowseContext: i, cacheStoreItemData: s } = (0, a.yn)();
        return (0, n.I)(
          (function (e, t, r, i) {
            const { storeBrowseContext: s, cacheStoreItemData: a } = t;
            return {
              ...q(
                e,
                s,
                { rgAdditionalRecommendationIDs: r ?? [] },
                i && { data_request: i, cacheStoreItemData: a },
              ),
              enabled: S.iA.logged_in,
              select: (e) =>
                (e.purchase_recommendations || []).map((e) => e.item_id),
            };
          })(r, { storeBrowseContext: i, cacheStoreItemData: s }, t, e),
        );
      }
      function O(e, t, r = !0) {
        const i = (0, z.KV)(),
          { storeBrowseContext: s, cacheStoreItemData: o } = (0, a.yn)(),
          c = q(i, s, e, t && { data_request: t, cacheStoreItemData: o });
        return (0, n.I)({ ...c, enabled: r && (c.enabled ?? !0) });
      }
      function q(e, t, r, a) {
        const {
            bIncludeDailyDeals: n = !1,
            nIncludeTopNSpecials: c = 0,
            spotlightLocation: l = {},
            rgAdditionalRecommendationIDs: u,
          } = r,
          m = {
            bIncludeDailyDeals: n,
            nIncludeTopNSpecials: c,
            spotlightLocation: l,
            rgAdditionalRecommendationIDs: u,
          };
        return {
          queryKey: ["ItemsToFeature", m],
          queryFn: () =>
            (async function (e, t, r, a) {
              const n = o.w.Init(d);
              (0, w.rV)(t, n), a && (0, w.Bn)(n, a.data_request);
              r.bIncludeDailyDeals && n.Body().set_include_dailydeals(!0);
              r.nIncludeTopNSpecials &&
                n.Body().set_include_top_specials_count(r.nIncludeTopNSpecials);
              r.spotlightLocation &&
                n
                  .Body()
                  .set_include_spotlights(g.fromObject(r.spotlightLocation));
              void 0 !== r.rgAdditionalRecommendationIDs &&
                (n.Body().set_include_purchase_recommendations(!0),
                r.rgAdditionalRecommendationIDs.forEach((e) =>
                  n.Body().add_additional_purchase_item_ids(s.O4.fromObject(e)),
                ));
              const c = await i.GetItemsToFeature(e, n);
              if (!c.BSuccess()) throw c.GetErrorMessage();
              if (a) {
                const { cacheStoreItemData: e, data_request: t } = a,
                  r = (r) => r && e(r, t);
                c
                  .Body()
                  .spotlights()
                  .forEach((e) => r(e.associated_item(!1))),
                  c
                    .Body()
                    .daily_deals()
                    .forEach((e) => r(e.item(!1))),
                  c
                    .Body()
                    .specials()
                    .forEach((e) => r(e.item(!1))),
                  c
                    .Body()
                    .purchase_recommendations()
                    .forEach((e) => r(e.item(!1)));
              }
              return c.Body().toObject();
            })(e, t, m, a),
          staleTime: 36e5,
        };
      }
    },
    54806: (e, t, r) => {
      r.d(t, { E: () => h });
      var i = r(90626),
        s = r(86709),
        a = r(45747),
        n = r(74500),
        o = r(57168);
      function c(e, t) {
        return e.filter((e) => !t.includes(e));
      }
      var l = class extends n.Q {
          #e;
          #t;
          #r;
          #i;
          #s;
          #a;
          #n;
          #o;
          constructor(e, t, r) {
            super(),
              (this.#e = e),
              (this.#i = r),
              (this.#r = []),
              (this.#s = []),
              (this.#t = []),
              this.setQueries(t);
          }
          onSubscribe() {
            1 === this.listeners.size &&
              this.#s.forEach((e) => {
                e.subscribe((t) => {
                  this.#c(e, t);
                });
              });
          }
          onUnsubscribe() {
            this.listeners.size || this.destroy();
          }
          destroy() {
            (this.listeners = new Set()),
              this.#s.forEach((e) => {
                e.destroy();
              });
          }
          setQueries(e, t, r) {
            (this.#r = e),
              (this.#i = t),
              s.j.batch(() => {
                const e = this.#s,
                  t = this.#l(this.#r);
                t.forEach((e) =>
                  e.observer.setOptions(e.defaultedQueryOptions, r),
                );
                const i = t.map((e) => e.observer),
                  s = i.map((e) => e.getCurrentResult()),
                  a = i.some((t, r) => t !== e[r]);
                (e.length !== i.length || a) &&
                  ((this.#s = i),
                  (this.#t = s),
                  this.hasListeners() &&
                    (c(e, i).forEach((e) => {
                      e.destroy();
                    }),
                    c(i, e).forEach((e) => {
                      e.subscribe((t) => {
                        this.#c(e, t);
                      });
                    }),
                    this.#u()));
              });
          }
          getCurrentResult() {
            return this.#t;
          }
          getQueries() {
            return this.#s.map((e) => e.getCurrentQuery());
          }
          getObservers() {
            return this.#s;
          }
          getOptimisticResult(e, t) {
            const r = this.#l(e).map((e) =>
              e.observer.getOptimisticResult(e.defaultedQueryOptions),
            );
            return [r, (e) => this.#m(e ?? r, t), () => this.#d(r, e)];
          }
          #d(e, t) {
            const r = this.#l(t);
            return r.map((t, i) => {
              const s = e[i];
              return t.defaultedQueryOptions.notifyOnChangeProps
                ? s
                : t.observer.trackResult(s, (e) => {
                    r.forEach((t) => {
                      t.observer.trackProp(e);
                    });
                  });
            });
          }
          #m(e, t) {
            return t
              ? ((this.#a && this.#t === this.#o && t === this.#n) ||
                  ((this.#n = t),
                  (this.#o = this.#t),
                  (this.#a = (0, o.BH)(this.#a, t(e)))),
                this.#a)
              : e;
          }
          #l(e) {
            const t = new Map(this.#s.map((e) => [e.options.queryHash, e])),
              r = [];
            return (
              e.forEach((e) => {
                const i = this.#e.defaultQueryOptions(e),
                  s = t.get(i.queryHash);
                if (s) r.push({ defaultedQueryOptions: i, observer: s });
                else {
                  const e = this.#s.find(
                    (e) => e.options.queryHash === i.queryHash,
                  );
                  r.push({
                    defaultedQueryOptions: i,
                    observer: e ?? new a.$(this.#e, i),
                  });
                }
              }),
              r.sort(
                (t, r) =>
                  e.findIndex(
                    (e) => e.queryHash === t.defaultedQueryOptions.queryHash,
                  ) -
                  e.findIndex(
                    (e) => e.queryHash === r.defaultedQueryOptions.queryHash,
                  ),
              )
            );
          }
          #c(e, t) {
            const r = this.#s.indexOf(e);
            -1 !== r &&
              ((this.#t = (function (e, t, r) {
                const i = e.slice(0);
                return (i[t] = r), i;
              })(this.#t, r, t)),
              this.#u());
          }
          #u() {
            if (this.hasListeners()) {
              this.#a !==
                this.#m(this.#d(this.#t, this.#r), this.#i?.combine) &&
                s.j.batch(() => {
                  this.listeners.forEach((e) => {
                    e(this.#t);
                  });
                });
            }
          }
        },
        u = r(75233),
        m = r(22730),
        d = r(43424),
        g = r(19086),
        B = r(44407),
        b = r(19866);
      function h({ queries: e, ...t }, r) {
        const n = (0, u.jE)(r),
          o = (0, m.w)(),
          c = (0, d.h)(),
          h = i.useMemo(
            () =>
              e.map((e) => {
                const t = n.defaultQueryOptions(e);
                return (
                  (t._optimisticResults = o ? "isRestoring" : "optimistic"), t
                );
              }),
            [e, n, o],
          );
        h.forEach((e) => {
          (0, B.jv)(e), (0, g.LJ)(e, c);
        }),
          (0, g.wZ)(c);
        const [y] = i.useState(() => new l(n, h, t)),
          [f, _, p] = y.getOptimisticResult(h, t.combine);
        i.useSyncExternalStore(
          i.useCallback(
            (e) => (o ? b.l : y.subscribe(s.j.batchCalls(e))),
            [y, o],
          ),
          () => y.getCurrentResult(),
          () => y.getCurrentResult(),
        ),
          i.useEffect(() => {
            y.setQueries(h, t, { listeners: !1 });
          }, [h, t, y]);
        const M = f.some((e, t) => (0, B.EU)(h[t], e))
          ? f.flatMap((e, t) => {
              const r = h[t];
              if (r) {
                const t = new a.$(n, r);
                if ((0, B.EU)(r, e)) return (0, B.iL)(r, t, c);
                (0, B.nE)(e, o) && (0, B.iL)(r, t, c);
              }
              return [];
            })
          : [];
        if (M.length > 0) throw Promise.all(M);
        const w = f.find((e, t) => {
          const r = h[t];
          return (
            r &&
            (0, g.$1)({
              result: e,
              errorResetBoundary: c,
              throwOnError: r.throwOnError,
              query: n.getQueryCache().get(r.queryHash),
            })
          );
        });
        if (w?.error) throw w.error;
        return _(p());
      }
    },
  },
]);

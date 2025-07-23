/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [4164],
  {
    12447: (e, t, r) => {
      r.d(t, { u: () => l });
      var i = r(8871),
        s = r(90626),
        a = r(78327),
        n = r(85585),
        o = r(7445),
        c = r(87133);
      const l = s.forwardRef(function (e, t) {
        const { children: r, navTreeRef: l, ...m } = e,
          u = s.useRef(),
          d = (0, i.Ue)(u, l),
          B = (0, a.Qn)(),
          g = (0, c.AO)("__nav_tree_root");
        return s.createElement(
          n.B2,
          {
            ...m,
            navTreeRef: d,
            ref: t,
            parentEmbeddedNavTree: g,
            disabledRoot: !B,
          },
          s.createElement(o.q, { disableFocusRing: !B }, r),
        );
      });
    },
    10386: (e, t, r) => {
      r.d(t, { FY: () => I, RK: () => R });
      var i,
        s = r(15161),
        a = r(7338),
        n = r(20194),
        o = r(56545),
        c = r(80613),
        l = r.n(c),
        m = r(89068);
      class u extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            u.prototype.item_id || m.Sg(u.M()),
            c.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: { item_id: { n: 1, c: s.O4 }, item: { n: 2, c: s.vB } },
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
          let t = new (l().BinaryReader)(e),
            r = new u();
          return u.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(u.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(u.M(), e, t);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreCapsule";
        }
      }
      class d extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            d.prototype.context || m.Sg(d.M()),
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
                  include_spotlights: { n: 5, c: B },
                  include_dailydeals: {
                    n: 6,
                    br: m.qM.readBool,
                    bw: m.gp.writeBool,
                  },
                  include_top_specials_count: {
                    n: 7,
                    br: m.qM.readInt32,
                    bw: m.gp.writeInt32,
                  },
                  include_purchase_recommendations: {
                    n: 8,
                    br: m.qM.readBool,
                    bw: m.gp.writeBool,
                  },
                  additional_purchase_item_ids: { n: 9, c: s.O4, r: !0, q: !0 },
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
          let t = new (l().BinaryReader)(e),
            r = new d();
          return d.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(d.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(d.M(), e, t);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreMarketing_GetItemsToFeature_Request";
        }
      }
      class B extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            B.prototype.location || m.Sg(B.M()),
            c.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: {
                  location: { n: 1, br: m.qM.readString, bw: m.gp.writeString },
                  category: { n: 2, br: m.qM.readString, bw: m.gp.writeString },
                  genre_id: { n: 3, br: m.qM.readInt32, bw: m.gp.writeInt32 },
                },
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
          let t = new (l().BinaryReader)(e),
            r = new B();
          return B.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(B.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(B.M(), e, t);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreMarketing_GetItemsToFeature_Request_SpotlightFilter";
        }
      }
      class g extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            g.prototype.spotlights || m.Sg(g.M()),
            c.Message.initialize(this, e, 0, -1, [1, 2, 3, 4], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  spotlights: { n: 1, c: _, r: !0, q: !0 },
                  daily_deals: { n: 2, c: u, r: !0, q: !0 },
                  specials: { n: 3, c: u, r: !0, q: !0 },
                  purchase_recommendations: { n: 4, c: u, r: !0, q: !0 },
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
          let t = new (l().BinaryReader)(e),
            r = new g();
          return g.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(g.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(g.M(), e, t);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreMarketing_GetItemsToFeature_Response";
        }
      }
      class _ extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _.prototype.item_id || m.Sg(_.M()),
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
                  item_id: { n: 1, c: s.O4 },
                  associated_item: { n: 2, c: s.vB },
                  spotlight_template: {
                    n: 3,
                    br: m.qM.readString,
                    bw: m.gp.writeString,
                  },
                  spotlight_title: {
                    n: 4,
                    br: m.qM.readString,
                    bw: m.gp.writeString,
                  },
                  spotlight_body: {
                    n: 5,
                    br: m.qM.readString,
                    bw: m.gp.writeString,
                  },
                  asset_url: {
                    n: 6,
                    br: m.qM.readString,
                    bw: m.gp.writeString,
                  },
                  spotlight_link_url: {
                    n: 7,
                    br: m.qM.readString,
                    bw: m.gp.writeString,
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
          let t = new (l().BinaryReader)(e),
            r = new _();
          return _.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(_.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(_.M(), e, t);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreMarketing_GetItemsToFeature_Response_Spotlight";
        }
      }
      class y extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.capsule_lists || m.Sg(y.M()),
            c.Message.initialize(this, e, 0, -1, [1, 3, 4, 6], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  capsule_lists: { n: 1, c: b, r: !0, q: !0 },
                  takeover: { n: 2, c: u },
                  assets: { n: 3, c: M, r: !0, q: !0 },
                  custom_assets: { n: 4, c: M, r: !0, q: !0 },
                  layout: { n: 5, br: m.qM.readString, bw: m.gp.writeString },
                  fields: { n: 6, c: f, r: !0, q: !0 },
                },
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
          let t = new (l().BinaryReader)(e),
            r = new y();
          return y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(y.M(), e, t);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStorePageCluster";
        }
      }
      class b extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.name || m.Sg(b.M()),
            c.Message.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  name: { n: 1, br: m.qM.readString, bw: m.gp.writeString },
                  capsules: { n: 2, c: u, r: !0, q: !0 },
                  max_visible: {
                    n: 3,
                    br: m.qM.readInt32,
                    bw: m.gp.writeInt32,
                  },
                  max_unreleased: {
                    n: 4,
                    br: m.qM.readInt32,
                    bw: m.gp.writeInt32,
                  },
                },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = m.w0(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(b.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(b.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (l().BinaryReader)(e),
            r = new b();
          return b.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(b.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(b.M(), e, t);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStorePageCluster_CapsuleList";
        }
      }
      class M extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.asset_name || m.Sg(M.M()),
            c.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: {
                  asset_name: {
                    n: 1,
                    br: m.qM.readString,
                    bw: m.gp.writeString,
                  },
                  asset_path: {
                    n: 2,
                    br: m.qM.readString,
                    bw: m.gp.writeString,
                  },
                },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = m.w0(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(M.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(M.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (l().BinaryReader)(e),
            r = new M();
          return M.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(M.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(M.M(), e, t);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStorePageCluster_Asset";
        }
      }
      class f extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.name || m.Sg(f.M()),
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
                  name: { n: 1, br: m.qM.readString, bw: m.gp.writeString },
                  value: { n: 2, br: m.qM.readString, bw: m.gp.writeString },
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
          let t = new (l().BinaryReader)(e),
            r = new f();
          return f.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(f.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(f.M(), e, t);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStorePageCluster_Field";
        }
      }
      class p extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.context || m.Sg(p.M()),
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
          return p.sm_mbf || (p.sm_mbf = m.w0(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(p.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(p.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (l().BinaryReader)(e),
            r = new p();
          return p.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(p.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(p.M(), e, t);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreMarketing_GetFrontPageConfig_Request";
        }
      }
      class z extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            z.prototype.cluster || m.Sg(z.M()),
            c.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = { proto: z, fields: { cluster: { n: 1, c: y } } }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = m.w0(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(z.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (l().BinaryReader)(e),
            r = new z();
          return z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(z.M(), e, t);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
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
            g,
            { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
          );
        }),
          (e.GetFrontPageConfig = function (e, t) {
            return e.SendMsg(
              "StoreMarketing.GetFrontPageConfig#1",
              (0, o.I8)(p, t),
              z,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          });
      })(i || (i = {}));
      var w = r(58214),
        S = r(23809),
        h = r(8527);
      function R(e, t) {
        const r = (0, S.KV)(),
          { storeBrowseContext: i, cacheStoreItemData: s } = (0, a.yn)();
        return (0, n.I)(
          (function (e, t, r, i) {
            const { storeBrowseContext: s, cacheStoreItemData: a } = t;
            return {
              ...T(
                e,
                s,
                { rgAdditionalRecommendationIDs: r ?? [] },
                i && { data_request: i, cacheStoreItemData: a },
              ),
              enabled: h.iA.logged_in,
              select: (e) =>
                (e.purchase_recommendations || []).map((e) => e.item_id),
            };
          })(r, { storeBrowseContext: i, cacheStoreItemData: s }, t, e),
        );
      }
      function I(e, t, r = !0) {
        const i = (0, S.KV)(),
          { storeBrowseContext: s, cacheStoreItemData: o } = (0, a.yn)(),
          c = T(i, s, e, t && { data_request: t, cacheStoreItemData: o });
        return (0, n.I)({ ...c, enabled: r && (c.enabled ?? !0) });
      }
      function T(e, t, r, a) {
        const {
            bIncludeDailyDeals: n = !1,
            nIncludeTopNSpecials: c = 0,
            spotlightLocation: l = {},
            rgAdditionalRecommendationIDs: m,
          } = r,
          u = {
            bIncludeDailyDeals: n,
            nIncludeTopNSpecials: c,
            spotlightLocation: l,
            rgAdditionalRecommendationIDs: m,
          };
        return {
          queryKey: ["ItemsToFeature", u],
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
                  .set_include_spotlights(B.fromObject(r.spotlightLocation));
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
            })(e, t, u, a),
          staleTime: 36e5,
        };
      }
    },
  },
]);

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [6099],
  {
    37038: (e, r, t) => {
      t.d(r, { JA: () => B, qI: () => _ });
      var i = t(10059),
        a = t(39087),
        s = t(79545),
        n = t(80002);
      const l = i.Message;
      class o extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            o.prototype.tag_score_factor || a.aR(o.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            o.sm_m ||
              (o.sm_m = {
                proto: o,
                fields: {
                  tag_score_factor: {
                    n: 1,
                    d: 1,
                    br: a.FE.readDouble,
                    bw: a.Xc.writeDouble,
                  },
                  playtime_max_seconds: {
                    n: 10,
                    d: 36e4,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  playtime_max_games: {
                    n: 11,
                    d: 3,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  playtime_score_factor: {
                    n: 12,
                    d: 0.9,
                    br: a.FE.readDouble,
                    bw: a.Xc.writeDouble,
                  },
                  popularity_factor: {
                    n: 20,
                    d: 5,
                    br: a.FE.readEnum,
                    bw: a.Xc.writeEnum,
                  },
                  popularity_reciprocal: {
                    n: 21,
                    d: 1e4,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  popularity_base_score: {
                    n: 22,
                    d: "5000000",
                    br: a.FE.readInt64String,
                    bw: a.Xc.writeInt64String,
                  },
                },
              }),
            o.sm_m
          );
        }
        static MBF() {
          return o.sm_mbf || (o.sm_mbf = a.Bh(o.M())), o.sm_mbf;
        }
        toObject(e = !1) {
          return o.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(o.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(o.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new o();
          return o.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(o.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(o.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreAppSimilarityPriorityOptions";
        }
      }
      class c extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            c.prototype.steamid || a.aR(c.M()),
            l.initialize(this, e, 0, -1, [3], null);
        }
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
                fields: {
                  steamid: {
                    n: 1,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  country_code: {
                    n: 2,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  ids: { n: 3, c: n.oY, r: !0, q: !0 },
                  options: { n: 4, c: o },
                  debug: { n: 5, br: a.FE.readBool, bw: a.Xc.writeBool },
                  include_owned_games: {
                    n: 6,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                },
              }),
            c.sm_m
          );
        }
        static MBF() {
          return c.sm_mbf || (c.sm_mbf = a.Bh(c.M())), c.sm_mbf;
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(c.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(c.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new c();
          return c.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(c.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(c.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreAppSimilarity_PrioritizeAppsForUser_Request";
        }
      }
      class u extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            u.prototype.items || a.aR(u.M()),
            l.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: { items: { n: 1, c: m, r: !0, q: !0 } },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = a.Bh(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(u.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(u.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new u();
          return u.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(u.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(u.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreAppSimilarity_PrioritizeAppsForUser_Response";
        }
      }
      class m extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            m.prototype.id || a.aR(m.M()),
            l.initialize(this, e, 0, -1, [50], null);
        }
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = {
                proto: m,
                fields: {
                  id: { n: 1, c: n.oY },
                  already_owned: {
                    n: 2,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  weight: { n: 3, br: a.FE.readDouble, bw: a.Xc.writeDouble },
                  weight_before_dedupe: {
                    n: 4,
                    br: a.FE.readDouble,
                    bw: a.Xc.writeDouble,
                  },
                  debug_matches: { n: 50, c: d, r: !0, q: !0 },
                  debug_popularity: { n: 51, c: b },
                },
              }),
            m.sm_m
          );
        }
        static MBF() {
          return m.sm_mbf || (m.sm_mbf = a.Bh(m.M())), m.sm_mbf;
        }
        toObject(e = !1) {
          return m.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(m.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(m.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new m();
          return m.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(m.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(m.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreAppSimilarity_PrioritizeAppsForUser_Response_ResultItem";
        }
      }
      class d extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            d.prototype.source_app || a.aR(d.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  source_app: { n: 1, br: a.FE.readInt32, bw: a.Xc.writeInt32 },
                  weight: { n: 2, br: a.FE.readDouble, bw: a.Xc.writeDouble },
                  similarity: {
                    n: 3,
                    br: a.FE.readDouble,
                    bw: a.Xc.writeDouble,
                  },
                },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = a.Bh(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(d.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(d.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new d();
          return d.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(d.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(d.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreAppSimilarity_PrioritizeAppsForUser_Response_ResultItem_MatchDebugInfo";
        }
      }
      class b extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.rank || a.aR(b.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  rank: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  popularity_factor: {
                    n: 2,
                    br: a.FE.readDouble,
                    bw: a.Xc.writeDouble,
                  },
                  weight_before_popularity: {
                    n: 3,
                    br: a.FE.readDouble,
                    bw: a.Xc.writeDouble,
                  },
                },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = a.Bh(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(b.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(b.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new b();
          return b.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(b.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(b.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreAppSimilarity_PrioritizeAppsForUser_Response_ResultItem_PopularityDebugInfo";
        }
      }
      class B extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            B.prototype.steamid || a.aR(B.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: {
                  steamid: {
                    n: 1,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  sort: { n: 2, d: 1, br: a.FE.readEnum, bw: a.Xc.writeEnum },
                  clusters_to_return: {
                    n: 3,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  cluster_index: {
                    n: 4,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  context: { n: 10, c: n.WJ },
                  data_request: { n: 11, c: n.Qn },
                },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = a.Bh(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(B.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(B.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new B();
          return B.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(B.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(B.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreAppSimilarity_IdentifyClustersFromPlaytime_Request";
        }
      }
      class y extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.clusters || a.aR(y.M()),
            l.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: { clusters: { n: 1, c: p, r: !0, q: !0 } },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = a.Bh(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(y.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(y.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new y();
          return y.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(y.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(y.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreAppSimilarity_IdentifyClustersFromPlaytime_Response";
        }
      }
      class p extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.cluster_id || a.aR(p.M()),
            l.initialize(this, e, 0, -1, [5, 6, 7], null);
        }
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  cluster_id: { n: 1, br: a.FE.readInt32, bw: a.Xc.writeInt32 },
                  playtime_forever: {
                    n: 2,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  playtime_2weeks: {
                    n: 3,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  last_played: {
                    n: 4,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  played_appids: {
                    n: 5,
                    r: !0,
                    q: !0,
                    br: a.FE.readInt32,
                    pbr: a.FE.readPackedInt32,
                    bw: a.Xc.writeRepeatedInt32,
                  },
                  similar_items_appids: {
                    n: 6,
                    r: !0,
                    q: !0,
                    br: a.FE.readInt32,
                    pbr: a.FE.readPackedInt32,
                    bw: a.Xc.writeRepeatedInt32,
                  },
                  similar_items: { n: 7, c: n.VL, r: !0, q: !0 },
                  similar_item_popularity_score: {
                    n: 8,
                    br: a.FE.readDouble,
                    bw: a.Xc.writeDouble,
                  },
                },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = a.Bh(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(p.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(p.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new p();
          return p.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(p.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(p.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreAppSimilarity_IdentifyClustersFromPlaytime_Response_Cluster";
        }
      }
      var _;
      !(function (e) {
        (e.PrioritizeAppsForUser = function (e, r) {
          return e.SendMsg(
            "StoreAppSimilarity.PrioritizeAppsForUser#1",
            (0, s.MD)(c, r),
            u,
            { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 2 },
          );
        }),
          (e.IdentifyClustersFromPlaytime = function (e, r) {
            return e.SendMsg(
              "StoreAppSimilarity.IdentifyClustersFromPlaytime#1",
              (0, s.MD)(B, r),
              y,
              { ePrivilege: 2, eWebAPIKeyRequirement: 2 },
            );
          });
      })(_ || (_ = {}));
    },
  },
]);

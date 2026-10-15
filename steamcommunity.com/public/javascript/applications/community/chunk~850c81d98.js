/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [65282],
    {
      38636: (Ee, be, F) => {
        F.d(be, { qp: () => de, tB: () => ne, ur: () => ge, z9: () => ue });
        var s = F(80613),
          i = F.n(s),
          r = F(75245),
          v = F(35038),
          Be = Object.defineProperty,
          pe = (T, e, t) =>
            e in T
              ? Be(T, e, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: t,
                })
              : (T[e] = t),
          a = (T, e, t) => pe(T, typeof e != "symbol" ? e + "" : e, t);
        function je(T) {
          return "unknown EMarketBucketLevel ( " + T + " )";
        }
        function Fe(T) {
          return "unknown EAssetPropertyType ( " + T + " )";
        }
        function ve(T) {
          return "unknown ETradeOfferState ( " + T + " )";
        }
        function Ue(T) {
          return "unknown ETradeOfferConfirmationMethod ( " + T + " )";
        }
        const U = class l extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              l.prototype.type || r.Sg(l.M()),
              s.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              l.sm_m ||
                (l.sm_m = {
                  proto: l,
                  fields: {
                    type: { n: 1, br: r.qM.readString, bw: r.gp.writeString },
                    value: { n: 2, br: r.qM.readString, bw: r.gp.writeString },
                    color: { n: 3, br: r.qM.readString, bw: r.gp.writeString },
                    label: { n: 4, br: r.qM.readString, bw: r.gp.writeString },
                    name: { n: 5, br: r.qM.readString, bw: r.gp.writeString },
                  },
                }),
              l.sm_m
            );
          }
          static MBF() {
            return l.sm_mbf || (l.sm_mbf = r.w0(l.M())), l.sm_mbf;
          }
          toObject(e = !1) {
            return l.toObject(e, this);
          }
          static toObject(e, t) {
            return r.BT(l.M(), e, t);
          }
          static fromObject(e) {
            return r.Uq(l.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (i().BinaryReader)(e),
              n = new l();
            return l.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return r.zj(l.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            r.i0(l.M(), e, t);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              l.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CEconItem_DescriptionLine";
          }
        };
        a(U, "sm_m"), a(U, "sm_mbf");
        let ae = U;
        const A = class m extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              m.prototype.link || r.Sg(m.M()),
              s.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              m.sm_m ||
                (m.sm_m = {
                  proto: m,
                  fields: {
                    link: { n: 1, br: r.qM.readString, bw: r.gp.writeString },
                    name: { n: 2, br: r.qM.readString, bw: r.gp.writeString },
                  },
                }),
              m.sm_m
            );
          }
          static MBF() {
            return m.sm_mbf || (m.sm_mbf = r.w0(m.M())), m.sm_mbf;
          }
          toObject(e = !1) {
            return m.toObject(e, this);
          }
          static toObject(e, t) {
            return r.BT(m.M(), e, t);
          }
          static fromObject(e) {
            return r.Uq(m.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (i().BinaryReader)(e),
              n = new m();
            return m.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return r.zj(m.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            r.i0(m.M(), e, t);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              m.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CEconItem_Action";
          }
        };
        a(A, "sm_m"), a(A, "sm_mbf");
        let G = A;
        const P = class u extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              u.prototype.appid || r.Sg(u.M()),
              s.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              u.sm_m ||
                (u.sm_m = {
                  proto: u,
                  fields: {
                    appid: { n: 1, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    category: {
                      n: 2,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    internal_name: {
                      n: 3,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    localized_category_name: {
                      n: 4,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    localized_tag_name: {
                      n: 5,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    color: { n: 6, br: r.qM.readString, bw: r.gp.writeString },
                  },
                }),
              u.sm_m
            );
          }
          static MBF() {
            return u.sm_mbf || (u.sm_mbf = r.w0(u.M())), u.sm_mbf;
          }
          toObject(e = !1) {
            return u.toObject(e, this);
          }
          static toObject(e, t) {
            return r.BT(u.M(), e, t);
          }
          static fromObject(e) {
            return r.Uq(u.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (i().BinaryReader)(e),
              n = new u();
            return u.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return r.zj(u.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            r.i0(u.M(), e, t);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              u.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CEconItem_Tag";
          }
        };
        a(P, "sm_m"), a(P, "sm_mbf");
        let oe = P;
        const k = class g extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              g.prototype.contained_items || r.Sg(g.M()),
              s.Message.initialize(this, e, 0, -1, [1, 2], null);
          }
          static M() {
            return (
              g.sm_m ||
                (g.sm_m = {
                  proto: g,
                  fields: {
                    contained_items: { n: 1, c: ce, r: !0, q: !0 },
                    search_tags: { n: 2, c: oe, r: !0, q: !0 },
                  },
                }),
              g.sm_m
            );
          }
          static MBF() {
            return g.sm_mbf || (g.sm_mbf = r.w0(g.M())), g.sm_mbf;
          }
          toObject(e = !1) {
            return g.toObject(e, this);
          }
          static toObject(e, t) {
            return r.BT(g.M(), e, t);
          }
          static fromObject(e) {
            return r.Uq(g.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (i().BinaryReader)(e),
              n = new g();
            return g.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return r.zj(g.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            r.i0(g.M(), e, t);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              g.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CEconItem_ContainerProperties";
          }
        };
        a(k, "sm_m"), a(k, "sm_mbf");
        let fe = k;
        const _ = class d extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              d.prototype.classid || r.Sg(d.M()),
              s.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              d.sm_m ||
                (d.sm_m = {
                  proto: d,
                  fields: {
                    classid: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    instanceid: {
                      n: 2,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                  },
                }),
              d.sm_m
            );
          }
          static MBF() {
            return d.sm_mbf || (d.sm_mbf = r.w0(d.M())), d.sm_mbf;
          }
          toObject(e = !1) {
            return d.toObject(e, this);
          }
          static toObject(e, t) {
            return r.BT(d.M(), e, t);
          }
          static fromObject(e) {
            return r.Uq(d.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (i().BinaryReader)(e),
              n = new d();
            return d.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return r.zj(d.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            r.i0(d.M(), e, t);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              d.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CEconItem_ClassIdentifiers";
          }
        };
        a(_, "sm_m"), a(_, "sm_mbf");
        let ce = _;
        const D = class o extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              o.prototype.appid || r.Sg(o.M()),
              s.Message.initialize(
                this,
                e,
                0,
                -1,
                [8, 10, 11, 12, 13, 21, 26],
                null,
              );
          }
          static M() {
            return (
              o.sm_m ||
                (o.sm_m = {
                  proto: o,
                  fields: {
                    appid: { n: 1, br: r.qM.readInt32, bw: r.gp.writeInt32 },
                    classid: {
                      n: 2,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    instanceid: {
                      n: 3,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    currency: { n: 4, br: r.qM.readBool, bw: r.gp.writeBool },
                    background_color: {
                      n: 5,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    icon_url: {
                      n: 6,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    icon_url_large: {
                      n: 7,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    descriptions: { n: 8, c: ae, r: !0, q: !0 },
                    tradable: { n: 9, br: r.qM.readBool, bw: r.gp.writeBool },
                    actions: { n: 10, c: G, r: !0, q: !0 },
                    owner_descriptions: { n: 11, c: ae, r: !0, q: !0 },
                    owner_actions: { n: 12, c: G, r: !0, q: !0 },
                    fraudwarnings: {
                      n: 13,
                      r: !0,
                      q: !0,
                      br: r.qM.readString,
                      bw: r.gp.writeRepeatedString,
                    },
                    name: { n: 14, br: r.qM.readString, bw: r.gp.writeString },
                    name_color: {
                      n: 15,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    type: { n: 16, br: r.qM.readString, bw: r.gp.writeString },
                    market_name: {
                      n: 17,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    market_hash_name: {
                      n: 18,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    market_fee: {
                      n: 19,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    market_fee_app: {
                      n: 28,
                      br: r.qM.readInt32,
                      bw: r.gp.writeInt32,
                    },
                    contained_item: { n: 20, c: o },
                    market_actions: { n: 21, c: G, r: !0, q: !0 },
                    commodity: { n: 22, br: r.qM.readBool, bw: r.gp.writeBool },
                    market_tradable_restriction: {
                      n: 23,
                      br: r.qM.readInt32,
                      bw: r.gp.writeInt32,
                    },
                    market_marketable_restriction: {
                      n: 24,
                      br: r.qM.readInt32,
                      bw: r.gp.writeInt32,
                    },
                    marketable: {
                      n: 25,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    tags: { n: 26, c: oe, r: !0, q: !0 },
                    item_expiration: {
                      n: 27,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    market_buy_country_restriction: {
                      n: 30,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    market_sell_country_restriction: {
                      n: 31,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    sealed: { n: 32, br: r.qM.readBool, bw: r.gp.writeBool },
                    container_properties: { n: 33, c: fe },
                    market_bucket_group_name: {
                      n: 34,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    market_bucket_group_id: {
                      n: 35,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    sealed_type: {
                      n: 37,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    market_name_inside_group: {
                      n: 38,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    market_bucket_id: {
                      n: 39,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                  },
                }),
              o.sm_m
            );
          }
          static MBF() {
            return o.sm_mbf || (o.sm_mbf = r.w0(o.M())), o.sm_mbf;
          }
          toObject(e = !1) {
            return o.toObject(e, this);
          }
          static toObject(e, t) {
            return r.BT(o.M(), e, t);
          }
          static fromObject(e) {
            return r.Uq(o.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (i().BinaryReader)(e),
              n = new o();
            return o.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return r.zj(o.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            r.i0(o.M(), e, t);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              o.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CEconItem_Description";
          }
        };
        a(D, "sm_m"), a(D, "sm_mbf");
        let le = D;
        const x = class b extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              b.prototype.propertyid || r.Sg(b.M()),
              s.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              b.sm_m ||
                (b.sm_m = {
                  proto: b,
                  fields: {
                    propertyid: {
                      n: 1,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    int_value: {
                      n: 2,
                      br: r.qM.readInt64String,
                      bw: r.gp.writeInt64String,
                    },
                    float_value: {
                      n: 3,
                      br: r.qM.readFloat,
                      bw: r.gp.writeFloat,
                    },
                    string_value: {
                      n: 4,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                  },
                }),
              b.sm_m
            );
          }
          static MBF() {
            return b.sm_mbf || (b.sm_mbf = r.w0(b.M())), b.sm_mbf;
          }
          toObject(e = !1) {
            return b.toObject(e, this);
          }
          static toObject(e, t) {
            return r.BT(b.M(), e, t);
          }
          static fromObject(e) {
            return r.Uq(b.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (i().BinaryReader)(e),
              n = new b();
            return b.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return r.zj(b.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            r.i0(b.M(), e, t);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              b.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CEconItem_AssetProperty";
          }
        };
        a(x, "sm_m"), a(x, "sm_mbf");
        let N = x;
        const L = class c extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              c.prototype.classid || r.Sg(c.M()),
              s.Message.initialize(this, e, 0, -1, [3, 4, 5], null);
          }
          static M() {
            return (
              c.sm_m ||
                (c.sm_m = {
                  proto: c,
                  fields: {
                    classid: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    instanceid: {
                      n: 2,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    standalone_properties: { n: 3, c: N, r: !0, q: !0 },
                    parent_relationship_properties: {
                      n: 4,
                      c: N,
                      r: !0,
                      q: !0,
                    },
                    nested_accessories: { n: 5, c, r: !0, q: !0 },
                  },
                }),
              c.sm_m
            );
          }
          static MBF() {
            return c.sm_mbf || (c.sm_mbf = r.w0(c.M())), c.sm_mbf;
          }
          toObject(e = !1) {
            return c.toObject(e, this);
          }
          static toObject(e, t) {
            return r.BT(c.M(), e, t);
          }
          static fromObject(e) {
            return r.Uq(c.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (i().BinaryReader)(e),
              n = new c();
            return c.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return r.zj(c.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            r.i0(c.M(), e, t);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              c.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CEconItem_AssetAccessory";
          }
        };
        a(L, "sm_m"), a(L, "sm_mbf");
        let we = L;
        const K = class B extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              B.prototype.appid || r.Sg(B.M()),
              s.Message.initialize(this, e, 0, -1, [4, 5], null);
          }
          static M() {
            return (
              B.sm_m ||
                (B.sm_m = {
                  proto: B,
                  fields: {
                    appid: { n: 1, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    contextid: {
                      n: 2,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    assetid: {
                      n: 3,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    asset_properties: { n: 4, c: N, r: !0, q: !0 },
                    asset_accessories: { n: 5, c: we, r: !0, q: !0 },
                  },
                }),
              B.sm_m
            );
          }
          static MBF() {
            return B.sm_mbf || (B.sm_mbf = r.w0(B.M())), B.sm_mbf;
          }
          toObject(e = !1) {
            return B.toObject(e, this);
          }
          static toObject(e, t) {
            return r.BT(B.M(), e, t);
          }
          static fromObject(e) {
            return r.Uq(B.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (i().BinaryReader)(e),
              n = new B();
            return B.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return r.zj(B.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            r.i0(B.M(), e, t);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              B.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CEconItem_AssetProperties";
          }
        };
        a(K, "sm_m"), a(K, "sm_mbf");
        let Me = K;
        const H = class p extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              p.prototype.id || r.Sg(p.M()),
              s.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              p.sm_m ||
                (p.sm_m = {
                  proto: p,
                  fields: {
                    id: { n: 1, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    name: { n: 2, br: r.qM.readString, bw: r.gp.writeString },
                    type: { n: 3, br: r.qM.readEnum, bw: r.gp.writeEnum },
                    float_min: {
                      n: 4,
                      br: r.qM.readFloat,
                      bw: r.gp.writeFloat,
                    },
                    float_max: {
                      n: 5,
                      br: r.qM.readFloat,
                      bw: r.gp.writeFloat,
                    },
                    int_min: {
                      n: 6,
                      br: r.qM.readInt64String,
                      bw: r.gp.writeInt64String,
                    },
                    int_max: {
                      n: 7,
                      br: r.qM.readInt64String,
                      bw: r.gp.writeInt64String,
                    },
                    localized_label: {
                      n: 8,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    hide_from_description: {
                      n: 9,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                  },
                }),
              p.sm_m
            );
          }
          static MBF() {
            return p.sm_mbf || (p.sm_mbf = r.w0(p.M())), p.sm_mbf;
          }
          toObject(e = !1) {
            return p.toObject(e, this);
          }
          static toObject(e, t) {
            return r.BT(p.M(), e, t);
          }
          static fromObject(e) {
            return r.Uq(p.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (i().BinaryReader)(e),
              n = new p();
            return p.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return r.zj(p.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            r.i0(p.M(), e, t);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              p.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CEconItem_AssetPropertySchema";
          }
        };
        a(H, "sm_m"), a(H, "sm_mbf");
        let ye = H;
        const J = class f extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              f.prototype.appid || r.Sg(f.M()),
              s.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              f.sm_m ||
                (f.sm_m = {
                  proto: f,
                  fields: {
                    appid: { n: 1, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    language: {
                      n: 2,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                  },
                }),
              f.sm_m
            );
          }
          static MBF() {
            return f.sm_mbf || (f.sm_mbf = r.w0(f.M())), f.sm_mbf;
          }
          toObject(e = !1) {
            return f.toObject(e, this);
          }
          static toObject(e, t) {
            return r.BT(f.M(), e, t);
          }
          static fromObject(e) {
            return r.Uq(f.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (i().BinaryReader)(e),
              n = new f();
            return f.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return r.zj(f.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            r.i0(f.M(), e, t);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              f.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetAssetPropertySchema_Request";
          }
        };
        a(J, "sm_m"), a(J, "sm_mbf");
        let Se = J;
        const Q = class w extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              w.prototype.property_schemas || r.Sg(w.M()),
              s.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              w.sm_m ||
                (w.sm_m = {
                  proto: w,
                  fields: { property_schemas: { n: 1, c: ye, r: !0, q: !0 } },
                }),
              w.sm_m
            );
          }
          static MBF() {
            return w.sm_mbf || (w.sm_mbf = r.w0(w.M())), w.sm_mbf;
          }
          toObject(e = !1) {
            return w.toObject(e, this);
          }
          static toObject(e, t) {
            return r.BT(w.M(), e, t);
          }
          static fromObject(e) {
            return r.Uq(w.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (i().BinaryReader)(e),
              n = new w();
            return w.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return r.zj(w.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            r.i0(w.M(), e, t);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              w.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetAssetPropertySchema_Response";
          }
        };
        a(Q, "sm_m"), a(Q, "sm_mbf");
        let ze = Q;
        const V = class M extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              M.prototype.appid || r.Sg(M.M()),
              s.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              M.sm_m ||
                (M.sm_m = {
                  proto: M,
                  fields: {
                    appid: { n: 1, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    contextid: {
                      n: 2,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    assetid: {
                      n: 3,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    classid: {
                      n: 4,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    instanceid: {
                      n: 5,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    currencyid: {
                      n: 6,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    amount: {
                      n: 7,
                      br: r.qM.readInt64String,
                      bw: r.gp.writeInt64String,
                    },
                    missing: { n: 8, br: r.qM.readBool, bw: r.gp.writeBool },
                    est_usd: {
                      n: 9,
                      br: r.qM.readInt64String,
                      bw: r.gp.writeInt64String,
                    },
                  },
                }),
              M.sm_m
            );
          }
          static MBF() {
            return M.sm_mbf || (M.sm_mbf = r.w0(M.M())), M.sm_mbf;
          }
          toObject(e = !1) {
            return M.toObject(e, this);
          }
          static toObject(e, t) {
            return r.BT(M.M(), e, t);
          }
          static fromObject(e) {
            return r.Uq(M.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (i().BinaryReader)(e),
              n = new M();
            return M.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return r.zj(M.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            r.i0(M.M(), e, t);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              M.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_Asset";
          }
        };
        a(V, "sm_m"), a(V, "sm_mbf");
        let me = V;
        const X = class y extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              y.prototype.steamid || r.Sg(y.M()),
              s.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              y.sm_m ||
                (y.sm_m = {
                  proto: y,
                  fields: {
                    steamid: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    appid: { n: 2, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    contextid: {
                      n: 3,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    get_descriptions: {
                      n: 4,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    get_asset_properties: {
                      n: 11,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    for_trade_offer_verification: {
                      n: 10,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    language: {
                      n: 5,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    filters: { n: 6, c: ge },
                    start_assetid: {
                      n: 8,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    count: { n: 9, br: r.qM.readInt32, bw: r.gp.writeInt32 },
                  },
                }),
              y.sm_m
            );
          }
          static MBF() {
            return y.sm_mbf || (y.sm_mbf = r.w0(y.M())), y.sm_mbf;
          }
          toObject(e = !1) {
            return y.toObject(e, this);
          }
          static toObject(e, t) {
            return r.BT(y.M(), e, t);
          }
          static fromObject(e) {
            return r.Uq(y.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (i().BinaryReader)(e),
              n = new y();
            return y.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return r.zj(y.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            r.i0(y.M(), e, t);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              y.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetInventoryItemsWithDescriptions_Request";
          }
        };
        a(X, "sm_m"), a(X, "sm_mbf");
        let ue = X;
        const Y = class S extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              S.prototype.assetids || r.Sg(S.M()),
              s.Message.initialize(this, e, 0, -1, [1, 2], null);
          }
          static M() {
            return (
              S.sm_m ||
                (S.sm_m = {
                  proto: S,
                  fields: {
                    assetids: {
                      n: 1,
                      r: !0,
                      q: !0,
                      br: r.qM.readUint64String,
                      pbr: r.qM.readPackedUint64String,
                      bw: r.gp.writeRepeatedUint64String,
                    },
                    currencyids: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: r.qM.readUint32,
                      pbr: r.qM.readPackedUint32,
                      bw: r.gp.writeRepeatedUint32,
                    },
                    tradable_only: {
                      n: 3,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    marketable_only: {
                      n: 4,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                  },
                }),
              S.sm_m
            );
          }
          static MBF() {
            return S.sm_mbf || (S.sm_mbf = r.w0(S.M())), S.sm_mbf;
          }
          toObject(e = !1) {
            return S.toObject(e, this);
          }
          static toObject(e, t) {
            return r.BT(S.M(), e, t);
          }
          static fromObject(e) {
            return r.Uq(S.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (i().BinaryReader)(e),
              n = new S();
            return S.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return r.zj(S.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            r.i0(S.M(), e, t);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              S.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetInventoryItemsWithDescriptions_Request_FilterOptions";
          }
        };
        a(Y, "sm_m"), a(Y, "sm_mbf");
        let ge = Y;
        const Z = class z extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              z.prototype.assets || r.Sg(z.M()),
              s.Message.initialize(this, e, 0, -1, [1, 2, 3, 7], null);
          }
          static M() {
            return (
              z.sm_m ||
                (z.sm_m = {
                  proto: z,
                  fields: {
                    assets: { n: 1, c: me, r: !0, q: !0 },
                    descriptions: { n: 2, c: le, r: !0, q: !0 },
                    missing_assets: { n: 3, c: me, r: !0, q: !0 },
                    asset_properties: { n: 7, c: Me, r: !0, q: !0 },
                    more_items: { n: 4, br: r.qM.readBool, bw: r.gp.writeBool },
                    last_assetid: {
                      n: 5,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    total_inventory_count: {
                      n: 6,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                  },
                }),
              z.sm_m
            );
          }
          static MBF() {
            return z.sm_mbf || (z.sm_mbf = r.w0(z.M())), z.sm_mbf;
          }
          toObject(e = !1) {
            return z.toObject(e, this);
          }
          static toObject(e, t) {
            return r.BT(z.M(), e, t);
          }
          static fromObject(e) {
            return r.Uq(z.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (i().BinaryReader)(e),
              n = new z();
            return z.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return r.zj(z.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            r.i0(z.M(), e, t);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              z.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetInventoryItemsWithDescriptions_Response";
          }
        };
        a(Z, "sm_m"), a(Z, "sm_mbf");
        let Re = Z;
        const $ = class R extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              R.prototype.generate_new_token || r.Sg(R.M()),
              s.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              R.sm_m ||
                (R.sm_m = {
                  proto: R,
                  fields: {
                    generate_new_token: {
                      n: 1,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                  },
                }),
              R.sm_m
            );
          }
          static MBF() {
            return R.sm_mbf || (R.sm_mbf = r.w0(R.M())), R.sm_mbf;
          }
          toObject(e = !1) {
            return R.toObject(e, this);
          }
          static toObject(e, t) {
            return r.BT(R.M(), e, t);
          }
          static fromObject(e) {
            return r.Uq(R.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (i().BinaryReader)(e),
              n = new R();
            return R.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return r.zj(R.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            r.i0(R.M(), e, t);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              R.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetTradeOfferAccessToken_Request";
          }
        };
        a($, "sm_m"), a($, "sm_mbf");
        let Ie = $;
        const ee = class I extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              I.prototype.trade_offer_access_token || r.Sg(I.M()),
              s.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              I.sm_m ||
                (I.sm_m = {
                  proto: I,
                  fields: {
                    trade_offer_access_token: {
                      n: 1,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                  },
                }),
              I.sm_m
            );
          }
          static MBF() {
            return I.sm_mbf || (I.sm_mbf = r.w0(I.M())), I.sm_mbf;
          }
          toObject(e = !1) {
            return I.toObject(e, this);
          }
          static toObject(e, t) {
            return r.BT(I.M(), e, t);
          }
          static fromObject(e) {
            return r.Uq(I.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (i().BinaryReader)(e),
              n = new I();
            return I.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return r.zj(I.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            r.i0(I.M(), e, t);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              I.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetTradeOfferAccessToken_Response";
          }
        };
        a(ee, "sm_m"), a(ee, "sm_mbf");
        let qe = ee;
        const re = class q extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              q.prototype.return_url || r.Sg(q.M()),
              s.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              q.sm_m ||
                (q.sm_m = {
                  proto: q,
                  fields: {
                    return_url: {
                      n: 1,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                  },
                }),
              q.sm_m
            );
          }
          static MBF() {
            return q.sm_mbf || (q.sm_mbf = r.w0(q.M())), q.sm_mbf;
          }
          toObject(e = !1) {
            return q.toObject(e, this);
          }
          static toObject(e, t) {
            return r.BT(q.M(), e, t);
          }
          static fromObject(e) {
            return r.Uq(q.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (i().BinaryReader)(e),
              n = new q();
            return q.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return r.zj(q.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            r.i0(q.M(), e, t);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              q.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_ClientGetItemShopOverlayAuthURL_Request";
          }
        };
        a(re, "sm_m"), a(re, "sm_mbf");
        let he = re;
        const te = class h extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              h.prototype.url || r.Sg(h.M()),
              s.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              h.sm_m ||
                (h.sm_m = {
                  proto: h,
                  fields: {
                    url: { n: 1, br: r.qM.readString, bw: r.gp.writeString },
                  },
                }),
              h.sm_m
            );
          }
          static MBF() {
            return h.sm_mbf || (h.sm_mbf = r.w0(h.M())), h.sm_mbf;
          }
          toObject(e = !1) {
            return h.toObject(e, this);
          }
          static toObject(e, t) {
            return r.BT(h.M(), e, t);
          }
          static fromObject(e) {
            return r.Uq(h.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (i().BinaryReader)(e),
              n = new h();
            return h.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return r.zj(h.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            r.i0(h.M(), e, t);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              h.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_ClientGetItemShopOverlayAuthURL_Response";
          }
        };
        a(te, "sm_m"), a(te, "sm_mbf");
        let Ce = te;
        const ie = class C extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              C.prototype.language || r.Sg(C.M()),
              s.Message.initialize(this, e, 0, -1, [3], null);
          }
          static M() {
            return (
              C.sm_m ||
                (C.sm_m = {
                  proto: C,
                  fields: {
                    language: {
                      n: 1,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    appid: { n: 2, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    classes: { n: 3, c: ce, r: !0, q: !0 },
                    high_pri: { n: 4, br: r.qM.readBool, bw: r.gp.writeBool },
                  },
                }),
              C.sm_m
            );
          }
          static MBF() {
            return C.sm_mbf || (C.sm_mbf = r.w0(C.M())), C.sm_mbf;
          }
          toObject(e = !1) {
            return C.toObject(e, this);
          }
          static toObject(e, t) {
            return r.BT(C.M(), e, t);
          }
          static fromObject(e) {
            return r.Uq(C.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (i().BinaryReader)(e),
              n = new C();
            return C.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return r.zj(C.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            r.i0(C.M(), e, t);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              C.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetAssetClassInfo_Request";
          }
        };
        a(ie, "sm_m"), a(ie, "sm_mbf");
        let de = ie;
        const se = class W extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              W.prototype.descriptions || r.Sg(W.M()),
              s.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              W.sm_m ||
                (W.sm_m = {
                  proto: W,
                  fields: { descriptions: { n: 1, c: le, r: !0, q: !0 } },
                }),
              W.sm_m
            );
          }
          static MBF() {
            return W.sm_mbf || (W.sm_mbf = r.w0(W.M())), W.sm_mbf;
          }
          toObject(e = !1) {
            return W.toObject(e, this);
          }
          static toObject(e, t) {
            return r.BT(W.M(), e, t);
          }
          static fromObject(e) {
            return r.Uq(W.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (i().BinaryReader)(e),
              n = new W();
            return W.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return r.zj(W.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            r.i0(W.M(), e, t);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              W.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetAssetClassInfo_Response";
          }
        };
        a(se, "sm_m"), a(se, "sm_mbf");
        let We = se;
        var ne;
        ((T) => {
          function e(O, E, j) {
            return O.SendMsg(
              "Econ.GetInventoryItemsWithDescriptions#1",
              (0, v.I8)(ue, E, j),
              Re,
              {
                bConstMethod: !0,
                ePrivilege: 2,
                eWebAPIKeyRequirement: 2,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          T.GetInventoryItemsWithDescriptions = e;
          function t(O, E, j) {
            return O.SendMsg(
              "Econ.GetTradeOfferAccessToken#1",
              (0, v.I8)(Ie, E, j),
              qe,
              { ePrivilege: 1 },
            );
          }
          T.GetTradeOfferAccessToken = t;
          function n(O, E, j) {
            return O.SendMsg(
              "Econ.ClientGetItemShopOverlayAuthURL#1",
              (0, v.I8)(he, E, j),
              Ce,
              { ePrivilege: 1 },
            );
          }
          T.ClientGetItemShopOverlayAuthURL = n;
          function Te(O, E, j) {
            return O.SendMsg(
              "Econ.GetAssetClassInfo#1",
              (0, v.I8)(de, E, j),
              We,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 1 },
            );
          }
          T.GetAssetClassInfo = Te;
          function Oe(O, E, j) {
            return O.SendMsg(
              "Econ.GetAssetPropertySchema#1",
              (0, v.I8)(Se, E, j),
              ze,
              {
                bConstMethod: !0,
                ePrivilege: 0,
                eWebAPIKeyRequirement: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          T.GetAssetPropertySchema = Oe;
        })(ne || (ne = {}));
      },
    },
  ]);
})();

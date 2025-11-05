/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [5282],
  {
    63215: (e, r, t) => {
      t.d(r, { qp: () => R, tB: () => i, ur: () => y, z9: () => p });
      var i,
        n = t(80613),
        s = t.n(n),
        a = t(89068),
        o = t(56545);
      class l extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            l.prototype.type || a.Sg(l.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            l.sm_m ||
              (l.sm_m = {
                proto: l,
                fields: {
                  type: { n: 1, br: a.qM.readString, bw: a.gp.writeString },
                  value: { n: 2, br: a.qM.readString, bw: a.gp.writeString },
                  color: { n: 3, br: a.qM.readString, bw: a.gp.writeString },
                  label: { n: 4, br: a.qM.readString, bw: a.gp.writeString },
                  name: { n: 5, br: a.qM.readString, bw: a.gp.writeString },
                },
              }),
            l.sm_m
          );
        }
        static MBF() {
          return l.sm_mbf || (l.sm_mbf = a.w0(l.M())), l.sm_mbf;
        }
        toObject(e = !1) {
          return l.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(l.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(l.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new l();
          return l.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(l.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(l.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return l.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEconItem_DescriptionLine";
        }
      }
      class c extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            c.prototype.link || a.Sg(c.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
                fields: {
                  link: { n: 1, br: a.qM.readString, bw: a.gp.writeString },
                  name: { n: 2, br: a.qM.readString, bw: a.gp.writeString },
                },
              }),
            c.sm_m
          );
        }
        static MBF() {
          return c.sm_mbf || (c.sm_mbf = a.w0(c.M())), c.sm_mbf;
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(c.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(c.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new c();
          return c.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(c.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(c.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEconItem_Action";
        }
      }
      class m extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            m.prototype.appid || a.Sg(m.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = {
                proto: m,
                fields: {
                  appid: { n: 1, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                  category: { n: 2, br: a.qM.readString, bw: a.gp.writeString },
                  internal_name: {
                    n: 3,
                    br: a.qM.readString,
                    bw: a.gp.writeString,
                  },
                  localized_category_name: {
                    n: 4,
                    br: a.qM.readString,
                    bw: a.gp.writeString,
                  },
                  localized_tag_name: {
                    n: 5,
                    br: a.qM.readString,
                    bw: a.gp.writeString,
                  },
                  color: { n: 6, br: a.qM.readString, bw: a.gp.writeString },
                },
              }),
            m.sm_m
          );
        }
        static MBF() {
          return m.sm_mbf || (m.sm_mbf = a.w0(m.M())), m.sm_mbf;
        }
        toObject(e = !1) {
          return m.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(m.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(m.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new m();
          return m.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(m.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(m.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEconItem_Tag";
        }
      }
      class u extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            u.prototype.contained_items || a.Sg(u.M()),
            n.Message.initialize(this, e, 0, -1, [1, 2], null);
        }
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: {
                  contained_items: { n: 1, c: g, r: !0, q: !0 },
                  search_tags: { n: 2, c: m, r: !0, q: !0 },
                },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = a.w0(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(u.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(u.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new u();
          return u.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(u.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(u.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEconItem_ContainerProperties";
        }
      }
      class g extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            g.prototype.classid || a.Sg(g.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  classid: {
                    n: 1,
                    br: a.qM.readUint64String,
                    bw: a.gp.writeUint64String,
                  },
                  instanceid: {
                    n: 2,
                    br: a.qM.readUint64String,
                    bw: a.gp.writeUint64String,
                  },
                },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = a.w0(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(g.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(g.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new g();
          return g.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(g.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(g.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEconItem_ClassIdentifiers";
        }
      }
      class B extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            B.prototype.appid || a.Sg(B.M()),
            n.Message.initialize(
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
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: {
                  appid: { n: 1, br: a.qM.readInt32, bw: a.gp.writeInt32 },
                  classid: {
                    n: 2,
                    br: a.qM.readUint64String,
                    bw: a.gp.writeUint64String,
                  },
                  instanceid: {
                    n: 3,
                    br: a.qM.readUint64String,
                    bw: a.gp.writeUint64String,
                  },
                  currency: { n: 4, br: a.qM.readBool, bw: a.gp.writeBool },
                  background_color: {
                    n: 5,
                    br: a.qM.readString,
                    bw: a.gp.writeString,
                  },
                  icon_url: { n: 6, br: a.qM.readString, bw: a.gp.writeString },
                  icon_url_large: {
                    n: 7,
                    br: a.qM.readString,
                    bw: a.gp.writeString,
                  },
                  descriptions: { n: 8, c: l, r: !0, q: !0 },
                  tradable: { n: 9, br: a.qM.readBool, bw: a.gp.writeBool },
                  actions: { n: 10, c, r: !0, q: !0 },
                  owner_descriptions: { n: 11, c: l, r: !0, q: !0 },
                  owner_actions: { n: 12, c, r: !0, q: !0 },
                  fraudwarnings: {
                    n: 13,
                    r: !0,
                    q: !0,
                    br: a.qM.readString,
                    bw: a.gp.writeRepeatedString,
                  },
                  name: { n: 14, br: a.qM.readString, bw: a.gp.writeString },
                  name_color: {
                    n: 15,
                    br: a.qM.readString,
                    bw: a.gp.writeString,
                  },
                  type: { n: 16, br: a.qM.readString, bw: a.gp.writeString },
                  market_name: {
                    n: 17,
                    br: a.qM.readString,
                    bw: a.gp.writeString,
                  },
                  market_hash_name: {
                    n: 18,
                    br: a.qM.readString,
                    bw: a.gp.writeString,
                  },
                  market_fee: {
                    n: 19,
                    br: a.qM.readString,
                    bw: a.gp.writeString,
                  },
                  market_fee_app: {
                    n: 28,
                    br: a.qM.readInt32,
                    bw: a.gp.writeInt32,
                  },
                  contained_item: { n: 20, c: B },
                  market_actions: { n: 21, c, r: !0, q: !0 },
                  commodity: { n: 22, br: a.qM.readBool, bw: a.gp.writeBool },
                  market_tradable_restriction: {
                    n: 23,
                    br: a.qM.readInt32,
                    bw: a.gp.writeInt32,
                  },
                  market_marketable_restriction: {
                    n: 24,
                    br: a.qM.readInt32,
                    bw: a.gp.writeInt32,
                  },
                  marketable: { n: 25, br: a.qM.readBool, bw: a.gp.writeBool },
                  tags: { n: 26, c: m, r: !0, q: !0 },
                  item_expiration: {
                    n: 27,
                    br: a.qM.readString,
                    bw: a.gp.writeString,
                  },
                  market_buy_country_restriction: {
                    n: 30,
                    br: a.qM.readString,
                    bw: a.gp.writeString,
                  },
                  market_sell_country_restriction: {
                    n: 31,
                    br: a.qM.readString,
                    bw: a.gp.writeString,
                  },
                  sealed: { n: 32, br: a.qM.readBool, bw: a.gp.writeBool },
                  container_properties: { n: 33, c: u },
                },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = a.w0(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(B.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(B.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new B();
          return B.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(B.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(B.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEconItem_Description";
        }
      }
      class d extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            d.prototype.propertyid || a.Sg(d.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  propertyid: {
                    n: 1,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  int_value: {
                    n: 2,
                    br: a.qM.readInt64String,
                    bw: a.gp.writeInt64String,
                  },
                  float_value: {
                    n: 3,
                    br: a.qM.readFloat,
                    bw: a.gp.writeFloat,
                  },
                },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = a.w0(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(d.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(d.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new d();
          return d.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(d.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(d.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEconItem_AssetProperty";
        }
      }
      class b extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.classid || a.Sg(b.M()),
            n.Message.initialize(this, e, 0, -1, [3, 4, 5], null);
        }
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  classid: {
                    n: 1,
                    br: a.qM.readUint64String,
                    bw: a.gp.writeUint64String,
                  },
                  instanceid: {
                    n: 2,
                    br: a.qM.readUint64String,
                    bw: a.gp.writeUint64String,
                  },
                  standalone_properties: { n: 3, c: d, r: !0, q: !0 },
                  parent_relationship_properties: { n: 4, c: d, r: !0, q: !0 },
                  nested_accessories: { n: 5, c: b, r: !0, q: !0 },
                },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = a.w0(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(b.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(b.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new b();
          return b.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(b.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(b.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEconItem_AssetAccessory";
        }
      }
      class M extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.appid || a.Sg(M.M()),
            n.Message.initialize(this, e, 0, -1, [4, 5], null);
        }
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: {
                  appid: { n: 1, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                  contextid: {
                    n: 2,
                    br: a.qM.readUint64String,
                    bw: a.gp.writeUint64String,
                  },
                  assetid: {
                    n: 3,
                    br: a.qM.readUint64String,
                    bw: a.gp.writeUint64String,
                  },
                  asset_properties: { n: 4, c: d, r: !0, q: !0 },
                  asset_accessories: { n: 5, c: b, r: !0, q: !0 },
                },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = a.w0(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(M.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(M.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new M();
          return M.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(M.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(M.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEconItem_AssetProperties";
        }
      }
      class w extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.appid || a.Sg(w.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  appid: { n: 1, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                  contextid: {
                    n: 2,
                    br: a.qM.readUint64String,
                    bw: a.gp.writeUint64String,
                  },
                  assetid: {
                    n: 3,
                    br: a.qM.readUint64String,
                    bw: a.gp.writeUint64String,
                  },
                  classid: {
                    n: 4,
                    br: a.qM.readUint64String,
                    bw: a.gp.writeUint64String,
                  },
                  instanceid: {
                    n: 5,
                    br: a.qM.readUint64String,
                    bw: a.gp.writeUint64String,
                  },
                  currencyid: {
                    n: 6,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  amount: {
                    n: 7,
                    br: a.qM.readInt64String,
                    bw: a.gp.writeInt64String,
                  },
                  missing: { n: 8, br: a.qM.readBool, bw: a.gp.writeBool },
                  est_usd: {
                    n: 9,
                    br: a.qM.readInt64String,
                    bw: a.gp.writeInt64String,
                  },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = a.w0(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(w.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(w.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new w();
          return w.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(w.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(w.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEcon_Asset";
        }
      }
      class p extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.steamid || a.Sg(p.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  steamid: {
                    n: 1,
                    br: a.qM.readFixed64String,
                    bw: a.gp.writeFixed64String,
                  },
                  appid: { n: 2, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                  contextid: {
                    n: 3,
                    br: a.qM.readUint64String,
                    bw: a.gp.writeUint64String,
                  },
                  get_descriptions: {
                    n: 4,
                    br: a.qM.readBool,
                    bw: a.gp.writeBool,
                  },
                  get_asset_properties: {
                    n: 11,
                    br: a.qM.readBool,
                    bw: a.gp.writeBool,
                  },
                  for_trade_offer_verification: {
                    n: 10,
                    br: a.qM.readBool,
                    bw: a.gp.writeBool,
                  },
                  language: { n: 5, br: a.qM.readString, bw: a.gp.writeString },
                  filters: { n: 6, c: y },
                  start_assetid: {
                    n: 8,
                    br: a.qM.readUint64String,
                    bw: a.gp.writeUint64String,
                  },
                  count: { n: 9, br: a.qM.readInt32, bw: a.gp.writeInt32 },
                },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = a.w0(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(p.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(p.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new p();
          return p.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(p.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(p.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEcon_GetInventoryItemsWithDescriptions_Request";
        }
      }
      class y extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.assetids || a.Sg(y.M()),
            n.Message.initialize(this, e, 0, -1, [1, 2], null);
        }
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  assetids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: a.qM.readUint64String,
                    pbr: a.qM.readPackedUint64String,
                    bw: a.gp.writeRepeatedUint64String,
                  },
                  currencyids: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: a.qM.readUint32,
                    pbr: a.qM.readPackedUint32,
                    bw: a.gp.writeRepeatedUint32,
                  },
                  tradable_only: {
                    n: 3,
                    br: a.qM.readBool,
                    bw: a.gp.writeBool,
                  },
                  marketable_only: {
                    n: 4,
                    br: a.qM.readBool,
                    bw: a.gp.writeBool,
                  },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = a.w0(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(y.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(y.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new y();
          return y.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(y.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(y.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEcon_GetInventoryItemsWithDescriptions_Request_FilterOptions";
        }
      }
      class _ extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _.prototype.assets || a.Sg(_.M()),
            n.Message.initialize(this, e, 0, -1, [1, 2, 3, 7], null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  assets: { n: 1, c: w, r: !0, q: !0 },
                  descriptions: { n: 2, c: B, r: !0, q: !0 },
                  missing_assets: { n: 3, c: w, r: !0, q: !0 },
                  asset_properties: { n: 7, c: M, r: !0, q: !0 },
                  more_items: { n: 4, br: a.qM.readBool, bw: a.gp.writeBool },
                  last_assetid: {
                    n: 5,
                    br: a.qM.readUint64String,
                    bw: a.gp.writeUint64String,
                  },
                  total_inventory_count: {
                    n: 6,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = a.w0(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(_.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(_.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new _();
          return _.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(_.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(_.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEcon_GetInventoryItemsWithDescriptions_Response";
        }
      }
      class z extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            z.prototype.generate_new_token || a.Sg(z.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: {
                  generate_new_token: {
                    n: 1,
                    br: a.qM.readBool,
                    bw: a.gp.writeBool,
                  },
                },
              }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = a.w0(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(z.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(z.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new z();
          return z.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(z.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(z.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEcon_GetTradeOfferAccessToken_Request";
        }
      }
      class f extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.trade_offer_access_token || a.Sg(f.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: {
                  trade_offer_access_token: {
                    n: 1,
                    br: a.qM.readString,
                    bw: a.gp.writeString,
                  },
                },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = a.w0(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(f.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(f.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new f();
          return f.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(f.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(f.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEcon_GetTradeOfferAccessToken_Response";
        }
      }
      class S extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            S.prototype.return_url || a.Sg(S.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: {
                  return_url: {
                    n: 1,
                    br: a.qM.readString,
                    bw: a.gp.writeString,
                  },
                },
              }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = a.w0(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(S.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(S.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new S();
          return S.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(S.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(S.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEcon_ClientGetItemShopOverlayAuthURL_Request";
        }
      }
      class q extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            q.prototype.url || a.Sg(q.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            q.sm_m ||
              (q.sm_m = {
                proto: q,
                fields: {
                  url: { n: 1, br: a.qM.readString, bw: a.gp.writeString },
                },
              }),
            q.sm_m
          );
        }
        static MBF() {
          return q.sm_mbf || (q.sm_mbf = a.w0(q.M())), q.sm_mbf;
        }
        toObject(e = !1) {
          return q.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(q.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(q.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new q();
          return q.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(q.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(q.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEcon_ClientGetItemShopOverlayAuthURL_Response";
        }
      }
      class R extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            R.prototype.language || a.Sg(R.M()),
            n.Message.initialize(this, e, 0, -1, [3], null);
        }
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = {
                proto: R,
                fields: {
                  language: { n: 1, br: a.qM.readString, bw: a.gp.writeString },
                  appid: { n: 2, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                  classes: { n: 3, c: g, r: !0, q: !0 },
                  high_pri: { n: 4, br: a.qM.readBool, bw: a.gp.writeBool },
                },
              }),
            R.sm_m
          );
        }
        static MBF() {
          return R.sm_mbf || (R.sm_mbf = a.w0(R.M())), R.sm_mbf;
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(R.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(R.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new R();
          return R.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(R.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(R.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEcon_GetAssetClassInfo_Request";
        }
      }
      class W extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            W.prototype.descriptions || a.Sg(W.M()),
            n.Message.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            W.sm_m ||
              (W.sm_m = {
                proto: W,
                fields: { descriptions: { n: 1, c: B, r: !0, q: !0 } },
              }),
            W.sm_m
          );
        }
        static MBF() {
          return W.sm_mbf || (W.sm_mbf = a.w0(W.M())), W.sm_mbf;
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(W.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(W.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new W();
          return W.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(W.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(W.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEcon_GetAssetClassInfo_Response";
        }
      }
      !(function (e) {
        (e.GetInventoryItemsWithDescriptions = function (e, r) {
          return e.SendMsg(
            "Econ.GetInventoryItemsWithDescriptions#1",
            (0, o.I8)(p, r),
            _,
            { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 2 },
          );
        }),
          (e.GetTradeOfferAccessToken = function (e, r) {
            return e.SendMsg(
              "Econ.GetTradeOfferAccessToken#1",
              (0, o.I8)(z, r),
              f,
              { ePrivilege: 1 },
            );
          }),
          (e.ClientGetItemShopOverlayAuthURL = function (e, r) {
            return e.SendMsg(
              "Econ.ClientGetItemShopOverlayAuthURL#1",
              (0, o.I8)(S, r),
              q,
              { ePrivilege: 1 },
            );
          }),
          (e.GetAssetClassInfo = function (e, r) {
            return e.SendMsg("Econ.GetAssetClassInfo#1", (0, o.I8)(R, r), W, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 1,
            });
          });
      })(i || (i = {}));
    },
  },
]);

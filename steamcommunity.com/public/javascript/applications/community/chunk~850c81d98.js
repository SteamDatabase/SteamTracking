/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [5282],
  {
    63215: (e, r, t) => {
      t.d(r, { qp: () => j, tB: () => i, ur: () => S, z9: () => z });
      var i,
        n = t(80613),
        a = t.n(n),
        s = t(89068),
        o = t(56545);
      class l extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            l.prototype.type || s.Sg(l.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            l.sm_m ||
              (l.sm_m = {
                proto: l,
                fields: {
                  type: { n: 1, br: s.qM.readString, bw: s.gp.writeString },
                  value: { n: 2, br: s.qM.readString, bw: s.gp.writeString },
                  color: { n: 3, br: s.qM.readString, bw: s.gp.writeString },
                  label: { n: 4, br: s.qM.readString, bw: s.gp.writeString },
                  name: { n: 5, br: s.qM.readString, bw: s.gp.writeString },
                },
              }),
            l.sm_m
          );
        }
        static MBF() {
          return l.sm_mbf || (l.sm_mbf = s.w0(l.M())), l.sm_mbf;
        }
        toObject(e = !1) {
          return l.toObject(e, this);
        }
        static toObject(e, r) {
          return s.BT(l.M(), e, r);
        }
        static fromObject(e) {
          return s.Uq(l.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new l();
          return l.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.zj(l.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.i0(l.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
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
            c.prototype.link || s.Sg(c.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
                fields: {
                  link: { n: 1, br: s.qM.readString, bw: s.gp.writeString },
                  name: { n: 2, br: s.qM.readString, bw: s.gp.writeString },
                },
              }),
            c.sm_m
          );
        }
        static MBF() {
          return c.sm_mbf || (c.sm_mbf = s.w0(c.M())), c.sm_mbf;
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, r) {
          return s.BT(c.M(), e, r);
        }
        static fromObject(e) {
          return s.Uq(c.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new c();
          return c.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.zj(c.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.i0(c.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
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
            m.prototype.appid || s.Sg(m.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = {
                proto: m,
                fields: {
                  appid: { n: 1, br: s.qM.readUint32, bw: s.gp.writeUint32 },
                  category: { n: 2, br: s.qM.readString, bw: s.gp.writeString },
                  internal_name: {
                    n: 3,
                    br: s.qM.readString,
                    bw: s.gp.writeString,
                  },
                  localized_category_name: {
                    n: 4,
                    br: s.qM.readString,
                    bw: s.gp.writeString,
                  },
                  localized_tag_name: {
                    n: 5,
                    br: s.qM.readString,
                    bw: s.gp.writeString,
                  },
                  color: { n: 6, br: s.qM.readString, bw: s.gp.writeString },
                },
              }),
            m.sm_m
          );
        }
        static MBF() {
          return m.sm_mbf || (m.sm_mbf = s.w0(m.M())), m.sm_mbf;
        }
        toObject(e = !1) {
          return m.toObject(e, this);
        }
        static toObject(e, r) {
          return s.BT(m.M(), e, r);
        }
        static fromObject(e) {
          return s.Uq(m.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new m();
          return m.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.zj(m.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.i0(m.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
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
            u.prototype.contained_items || s.Sg(u.M()),
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
          return u.sm_mbf || (u.sm_mbf = s.w0(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, r) {
          return s.BT(u.M(), e, r);
        }
        static fromObject(e) {
          return s.Uq(u.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new u();
          return u.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.zj(u.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.i0(u.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
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
            g.prototype.classid || s.Sg(g.M()),
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
                    br: s.qM.readUint64String,
                    bw: s.gp.writeUint64String,
                  },
                  instanceid: {
                    n: 2,
                    br: s.qM.readUint64String,
                    bw: s.gp.writeUint64String,
                  },
                },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = s.w0(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, r) {
          return s.BT(g.M(), e, r);
        }
        static fromObject(e) {
          return s.Uq(g.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new g();
          return g.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.zj(g.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.i0(g.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
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
            B.prototype.appid || s.Sg(B.M()),
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
                  appid: { n: 1, br: s.qM.readInt32, bw: s.gp.writeInt32 },
                  classid: {
                    n: 2,
                    br: s.qM.readUint64String,
                    bw: s.gp.writeUint64String,
                  },
                  instanceid: {
                    n: 3,
                    br: s.qM.readUint64String,
                    bw: s.gp.writeUint64String,
                  },
                  currency: { n: 4, br: s.qM.readBool, bw: s.gp.writeBool },
                  background_color: {
                    n: 5,
                    br: s.qM.readString,
                    bw: s.gp.writeString,
                  },
                  icon_url: { n: 6, br: s.qM.readString, bw: s.gp.writeString },
                  icon_url_large: {
                    n: 7,
                    br: s.qM.readString,
                    bw: s.gp.writeString,
                  },
                  descriptions: { n: 8, c: l, r: !0, q: !0 },
                  tradable: { n: 9, br: s.qM.readBool, bw: s.gp.writeBool },
                  actions: { n: 10, c, r: !0, q: !0 },
                  owner_descriptions: { n: 11, c: l, r: !0, q: !0 },
                  owner_actions: { n: 12, c, r: !0, q: !0 },
                  fraudwarnings: {
                    n: 13,
                    r: !0,
                    q: !0,
                    br: s.qM.readString,
                    bw: s.gp.writeRepeatedString,
                  },
                  name: { n: 14, br: s.qM.readString, bw: s.gp.writeString },
                  name_color: {
                    n: 15,
                    br: s.qM.readString,
                    bw: s.gp.writeString,
                  },
                  type: { n: 16, br: s.qM.readString, bw: s.gp.writeString },
                  market_name: {
                    n: 17,
                    br: s.qM.readString,
                    bw: s.gp.writeString,
                  },
                  market_hash_name: {
                    n: 18,
                    br: s.qM.readString,
                    bw: s.gp.writeString,
                  },
                  market_fee: {
                    n: 19,
                    br: s.qM.readString,
                    bw: s.gp.writeString,
                  },
                  market_fee_app: {
                    n: 28,
                    br: s.qM.readInt32,
                    bw: s.gp.writeInt32,
                  },
                  contained_item: { n: 20, c: B },
                  market_actions: { n: 21, c, r: !0, q: !0 },
                  commodity: { n: 22, br: s.qM.readBool, bw: s.gp.writeBool },
                  market_tradable_restriction: {
                    n: 23,
                    br: s.qM.readInt32,
                    bw: s.gp.writeInt32,
                  },
                  market_marketable_restriction: {
                    n: 24,
                    br: s.qM.readInt32,
                    bw: s.gp.writeInt32,
                  },
                  marketable: { n: 25, br: s.qM.readBool, bw: s.gp.writeBool },
                  tags: { n: 26, c: m, r: !0, q: !0 },
                  item_expiration: {
                    n: 27,
                    br: s.qM.readString,
                    bw: s.gp.writeString,
                  },
                  market_buy_country_restriction: {
                    n: 30,
                    br: s.qM.readString,
                    bw: s.gp.writeString,
                  },
                  market_sell_country_restriction: {
                    n: 31,
                    br: s.qM.readString,
                    bw: s.gp.writeString,
                  },
                  sealed: { n: 32, br: s.qM.readBool, bw: s.gp.writeBool },
                  container_properties: { n: 33, c: u },
                  market_bucket_group_name: {
                    n: 34,
                    br: s.qM.readString,
                    bw: s.gp.writeString,
                  },
                  market_bucket_group_id: {
                    n: 35,
                    br: s.qM.readString,
                    bw: s.gp.writeString,
                  },
                  on_market: { n: 36, br: s.qM.readBool, bw: s.gp.writeBool },
                },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = s.w0(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, r) {
          return s.BT(B.M(), e, r);
        }
        static fromObject(e) {
          return s.Uq(B.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new B();
          return B.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.zj(B.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.i0(B.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
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
            d.prototype.propertyid || s.Sg(d.M()),
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
                    br: s.qM.readUint32,
                    bw: s.gp.writeUint32,
                  },
                  int_value: {
                    n: 2,
                    br: s.qM.readInt64String,
                    bw: s.gp.writeInt64String,
                  },
                  float_value: {
                    n: 3,
                    br: s.qM.readFloat,
                    bw: s.gp.writeFloat,
                  },
                  string_value: {
                    n: 4,
                    br: s.qM.readString,
                    bw: s.gp.writeString,
                  },
                },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = s.w0(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, r) {
          return s.BT(d.M(), e, r);
        }
        static fromObject(e) {
          return s.Uq(d.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new d();
          return d.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.zj(d.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.i0(d.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
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
            b.prototype.classid || s.Sg(b.M()),
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
                    br: s.qM.readUint64String,
                    bw: s.gp.writeUint64String,
                  },
                  instanceid: {
                    n: 2,
                    br: s.qM.readUint64String,
                    bw: s.gp.writeUint64String,
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
          return b.sm_mbf || (b.sm_mbf = s.w0(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, r) {
          return s.BT(b.M(), e, r);
        }
        static fromObject(e) {
          return s.Uq(b.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new b();
          return b.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.zj(b.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.i0(b.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
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
            M.prototype.appid || s.Sg(M.M()),
            n.Message.initialize(this, e, 0, -1, [4, 5], null);
        }
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: {
                  appid: { n: 1, br: s.qM.readUint32, bw: s.gp.writeUint32 },
                  contextid: {
                    n: 2,
                    br: s.qM.readUint64String,
                    bw: s.gp.writeUint64String,
                  },
                  assetid: {
                    n: 3,
                    br: s.qM.readUint64String,
                    bw: s.gp.writeUint64String,
                  },
                  asset_properties: { n: 4, c: d, r: !0, q: !0 },
                  asset_accessories: { n: 5, c: b, r: !0, q: !0 },
                },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = s.w0(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, r) {
          return s.BT(M.M(), e, r);
        }
        static fromObject(e) {
          return s.Uq(M.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new M();
          return M.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.zj(M.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.i0(M.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
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
            w.prototype.id || s.Sg(w.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  id: { n: 1, br: s.qM.readUint32, bw: s.gp.writeUint32 },
                  name: { n: 2, br: s.qM.readString, bw: s.gp.writeString },
                  type: { n: 3, br: s.qM.readEnum, bw: s.gp.writeEnum },
                  float_min: { n: 4, br: s.qM.readFloat, bw: s.gp.writeFloat },
                  float_max: { n: 5, br: s.qM.readFloat, bw: s.gp.writeFloat },
                  int_min: {
                    n: 6,
                    br: s.qM.readInt64String,
                    bw: s.gp.writeInt64String,
                  },
                  int_max: {
                    n: 7,
                    br: s.qM.readInt64String,
                    bw: s.gp.writeInt64String,
                  },
                  localized_label: {
                    n: 8,
                    br: s.qM.readString,
                    bw: s.gp.writeString,
                  },
                  hide_from_description: {
                    n: 9,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = s.w0(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, r) {
          return s.BT(w.M(), e, r);
        }
        static fromObject(e) {
          return s.Uq(w.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new w();
          return w.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.zj(w.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.i0(w.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEconItem_AssetPropertySchema";
        }
      }
      class p extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.appid || s.Sg(p.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  appid: { n: 1, br: s.qM.readUint32, bw: s.gp.writeUint32 },
                  language: { n: 2, br: s.qM.readString, bw: s.gp.writeString },
                },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = s.w0(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, r) {
          return s.BT(p.M(), e, r);
        }
        static fromObject(e) {
          return s.Uq(p.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new p();
          return p.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.zj(p.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.i0(p.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEcon_GetAssetPropertySchema_Request";
        }
      }
      class y extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.property_schemas || s.Sg(y.M()),
            n.Message.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: { property_schemas: { n: 1, c: w, r: !0, q: !0 } },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = s.w0(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, r) {
          return s.BT(y.M(), e, r);
        }
        static fromObject(e) {
          return s.Uq(y.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new y();
          return y.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.zj(y.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.i0(y.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEcon_GetAssetPropertySchema_Response";
        }
      }
      class _ extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _.prototype.appid || s.Sg(_.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  appid: { n: 1, br: s.qM.readUint32, bw: s.gp.writeUint32 },
                  contextid: {
                    n: 2,
                    br: s.qM.readUint64String,
                    bw: s.gp.writeUint64String,
                  },
                  assetid: {
                    n: 3,
                    br: s.qM.readUint64String,
                    bw: s.gp.writeUint64String,
                  },
                  classid: {
                    n: 4,
                    br: s.qM.readUint64String,
                    bw: s.gp.writeUint64String,
                  },
                  instanceid: {
                    n: 5,
                    br: s.qM.readUint64String,
                    bw: s.gp.writeUint64String,
                  },
                  currencyid: {
                    n: 6,
                    br: s.qM.readUint32,
                    bw: s.gp.writeUint32,
                  },
                  amount: {
                    n: 7,
                    br: s.qM.readInt64String,
                    bw: s.gp.writeInt64String,
                  },
                  missing: { n: 8, br: s.qM.readBool, bw: s.gp.writeBool },
                  est_usd: {
                    n: 9,
                    br: s.qM.readInt64String,
                    bw: s.gp.writeInt64String,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = s.w0(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, r) {
          return s.BT(_.M(), e, r);
        }
        static fromObject(e) {
          return s.Uq(_.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new _();
          return _.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.zj(_.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.i0(_.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEcon_Asset";
        }
      }
      class z extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            z.prototype.steamid || s.Sg(z.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: {
                  steamid: {
                    n: 1,
                    br: s.qM.readFixed64String,
                    bw: s.gp.writeFixed64String,
                  },
                  appid: { n: 2, br: s.qM.readUint32, bw: s.gp.writeUint32 },
                  contextid: {
                    n: 3,
                    br: s.qM.readUint64String,
                    bw: s.gp.writeUint64String,
                  },
                  get_descriptions: {
                    n: 4,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                  get_asset_properties: {
                    n: 11,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                  for_trade_offer_verification: {
                    n: 10,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                  language: { n: 5, br: s.qM.readString, bw: s.gp.writeString },
                  filters: { n: 6, c: S },
                  start_assetid: {
                    n: 8,
                    br: s.qM.readUint64String,
                    bw: s.gp.writeUint64String,
                  },
                  count: { n: 9, br: s.qM.readInt32, bw: s.gp.writeInt32 },
                },
              }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = s.w0(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, r) {
          return s.BT(z.M(), e, r);
        }
        static fromObject(e) {
          return s.Uq(z.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new z();
          return z.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.zj(z.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.i0(z.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEcon_GetInventoryItemsWithDescriptions_Request";
        }
      }
      class S extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            S.prototype.assetids || s.Sg(S.M()),
            n.Message.initialize(this, e, 0, -1, [1, 2], null);
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
                    br: s.qM.readUint64String,
                    pbr: s.qM.readPackedUint64String,
                    bw: s.gp.writeRepeatedUint64String,
                  },
                  currencyids: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: s.qM.readUint32,
                    pbr: s.qM.readPackedUint32,
                    bw: s.gp.writeRepeatedUint32,
                  },
                  tradable_only: {
                    n: 3,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                  marketable_only: {
                    n: 4,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                },
              }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = s.w0(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, r) {
          return s.BT(S.M(), e, r);
        }
        static fromObject(e) {
          return s.Uq(S.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new S();
          return S.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.zj(S.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.i0(S.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEcon_GetInventoryItemsWithDescriptions_Request_FilterOptions";
        }
      }
      class f extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.assets || s.Sg(f.M()),
            n.Message.initialize(this, e, 0, -1, [1, 2, 3, 7], null);
        }
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: {
                  assets: { n: 1, c: _, r: !0, q: !0 },
                  descriptions: { n: 2, c: B, r: !0, q: !0 },
                  missing_assets: { n: 3, c: _, r: !0, q: !0 },
                  asset_properties: { n: 7, c: M, r: !0, q: !0 },
                  more_items: { n: 4, br: s.qM.readBool, bw: s.gp.writeBool },
                  last_assetid: {
                    n: 5,
                    br: s.qM.readUint64String,
                    bw: s.gp.writeUint64String,
                  },
                  total_inventory_count: {
                    n: 6,
                    br: s.qM.readUint32,
                    bw: s.gp.writeUint32,
                  },
                },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = s.w0(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, r) {
          return s.BT(f.M(), e, r);
        }
        static fromObject(e) {
          return s.Uq(f.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new f();
          return f.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.zj(f.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.i0(f.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEcon_GetInventoryItemsWithDescriptions_Response";
        }
      }
      class q extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            q.prototype.generate_new_token || s.Sg(q.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            q.sm_m ||
              (q.sm_m = {
                proto: q,
                fields: {
                  generate_new_token: {
                    n: 1,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                },
              }),
            q.sm_m
          );
        }
        static MBF() {
          return q.sm_mbf || (q.sm_mbf = s.w0(q.M())), q.sm_mbf;
        }
        toObject(e = !1) {
          return q.toObject(e, this);
        }
        static toObject(e, r) {
          return s.BT(q.M(), e, r);
        }
        static fromObject(e) {
          return s.Uq(q.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new q();
          return q.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.zj(q.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.i0(q.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEcon_GetTradeOfferAccessToken_Request";
        }
      }
      class R extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            R.prototype.trade_offer_access_token || s.Sg(R.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = {
                proto: R,
                fields: {
                  trade_offer_access_token: {
                    n: 1,
                    br: s.qM.readString,
                    bw: s.gp.writeString,
                  },
                },
              }),
            R.sm_m
          );
        }
        static MBF() {
          return R.sm_mbf || (R.sm_mbf = s.w0(R.M())), R.sm_mbf;
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, r) {
          return s.BT(R.M(), e, r);
        }
        static fromObject(e) {
          return s.Uq(R.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new R();
          return R.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.zj(R.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.i0(R.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEcon_GetTradeOfferAccessToken_Response";
        }
      }
      class h extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.return_url || s.Sg(h.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  return_url: {
                    n: 1,
                    br: s.qM.readString,
                    bw: s.gp.writeString,
                  },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = s.w0(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, r) {
          return s.BT(h.M(), e, r);
        }
        static fromObject(e) {
          return s.Uq(h.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new h();
          return h.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.zj(h.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.i0(h.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEcon_ClientGetItemShopOverlayAuthURL_Request";
        }
      }
      class W extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            W.prototype.url || s.Sg(W.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            W.sm_m ||
              (W.sm_m = {
                proto: W,
                fields: {
                  url: { n: 1, br: s.qM.readString, bw: s.gp.writeString },
                },
              }),
            W.sm_m
          );
        }
        static MBF() {
          return W.sm_mbf || (W.sm_mbf = s.w0(W.M())), W.sm_mbf;
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, r) {
          return s.BT(W.M(), e, r);
        }
        static fromObject(e) {
          return s.Uq(W.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new W();
          return W.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.zj(W.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.i0(W.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEcon_ClientGetItemShopOverlayAuthURL_Response";
        }
      }
      class j extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            j.prototype.language || s.Sg(j.M()),
            n.Message.initialize(this, e, 0, -1, [3], null);
        }
        static M() {
          return (
            j.sm_m ||
              (j.sm_m = {
                proto: j,
                fields: {
                  language: { n: 1, br: s.qM.readString, bw: s.gp.writeString },
                  appid: { n: 2, br: s.qM.readUint32, bw: s.gp.writeUint32 },
                  classes: { n: 3, c: g, r: !0, q: !0 },
                  high_pri: { n: 4, br: s.qM.readBool, bw: s.gp.writeBool },
                },
              }),
            j.sm_m
          );
        }
        static MBF() {
          return j.sm_mbf || (j.sm_mbf = s.w0(j.M())), j.sm_mbf;
        }
        toObject(e = !1) {
          return j.toObject(e, this);
        }
        static toObject(e, r) {
          return s.BT(j.M(), e, r);
        }
        static fromObject(e) {
          return s.Uq(j.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new j();
          return j.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.zj(j.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.i0(j.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEcon_GetAssetClassInfo_Request";
        }
      }
      class I extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            I.prototype.descriptions || s.Sg(I.M()),
            n.Message.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
                fields: { descriptions: { n: 1, c: B, r: !0, q: !0 } },
              }),
            I.sm_m
          );
        }
        static MBF() {
          return I.sm_mbf || (I.sm_mbf = s.w0(I.M())), I.sm_mbf;
        }
        toObject(e = !1) {
          return I.toObject(e, this);
        }
        static toObject(e, r) {
          return s.BT(I.M(), e, r);
        }
        static fromObject(e) {
          return s.Uq(I.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new I();
          return I.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.zj(I.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.i0(I.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEcon_GetAssetClassInfo_Response";
        }
      }
      !(function (e) {
        (e.GetInventoryItemsWithDescriptions = function (e, r) {
          return e.SendMsg(
            "Econ.GetInventoryItemsWithDescriptions#1",
            (0, o.I8)(z, r),
            f,
            { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 2 },
          );
        }),
          (e.GetTradeOfferAccessToken = function (e, r) {
            return e.SendMsg(
              "Econ.GetTradeOfferAccessToken#1",
              (0, o.I8)(q, r),
              R,
              { ePrivilege: 1 },
            );
          }),
          (e.ClientGetItemShopOverlayAuthURL = function (e, r) {
            return e.SendMsg(
              "Econ.ClientGetItemShopOverlayAuthURL#1",
              (0, o.I8)(h, r),
              W,
              { ePrivilege: 1 },
            );
          }),
          (e.GetAssetClassInfo = function (e, r) {
            return e.SendMsg("Econ.GetAssetClassInfo#1", (0, o.I8)(j, r), I, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.GetAssetPropertySchema = function (e, r) {
            return e.SendMsg(
              "Econ.GetAssetPropertySchema#1",
              (0, o.I8)(p, r),
              y,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          });
      })(i || (i = {}));
    },
  },
]);

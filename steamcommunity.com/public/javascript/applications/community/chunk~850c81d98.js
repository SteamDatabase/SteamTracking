/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [65282],
    {
      38636: ($, X, J) => {
        J.d(X, { qp: () => f, tB: () => V, ur: () => z, z9: () => m });
        var e = J(80613),
          t = J.n(e),
          i = J(75245),
          Q = J(35038);
        function v(O) {
          return "unknown EMarketBucketLevel ( " + O + " )";
        }
        function p(O) {
          return "unknown EAssetPropertyType ( " + O + " )";
        }
        function L(O) {
          return "unknown ETradeOfferState ( " + O + " )";
        }
        function h(O) {
          return "unknown ETradeOfferConfirmationMethod ( " + O + " )";
        }
        class u extends e.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              u.prototype.type || i.Sg(u.M()),
              e.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              u.sm_m ||
                (u.sm_m = {
                  proto: u,
                  fields: {
                    type: { n: 1, br: i.qM.readString, bw: i.gp.writeString },
                    value: { n: 2, br: i.qM.readString, bw: i.gp.writeString },
                    color: { n: 3, br: i.qM.readString, bw: i.gp.writeString },
                    label: { n: 4, br: i.qM.readString, bw: i.gp.writeString },
                    name: { n: 5, br: i.qM.readString, bw: i.gp.writeString },
                  },
                }),
              u.sm_m
            );
          }
          static MBF() {
            return u.sm_mbf || (u.sm_mbf = i.w0(u.M())), u.sm_mbf;
          }
          toObject(r = !1) {
            return u.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(u.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(u.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              l = new u();
            return u.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(u.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return u.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(u.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              u.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEconItem_DescriptionLine";
          }
        }
        class g extends e.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              g.prototype.link || i.Sg(g.M()),
              e.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              g.sm_m ||
                (g.sm_m = {
                  proto: g,
                  fields: {
                    link: { n: 1, br: i.qM.readString, bw: i.gp.writeString },
                    name: { n: 2, br: i.qM.readString, bw: i.gp.writeString },
                  },
                }),
              g.sm_m
            );
          }
          static MBF() {
            return g.sm_mbf || (g.sm_mbf = i.w0(g.M())), g.sm_mbf;
          }
          toObject(r = !1) {
            return g.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(g.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(g.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              l = new g();
            return g.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(g.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return g.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(g.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              g.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEconItem_Action";
          }
        }
        class w extends e.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              w.prototype.appid || i.Sg(w.M()),
              e.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              w.sm_m ||
                (w.sm_m = {
                  proto: w,
                  fields: {
                    appid: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    category: {
                      n: 2,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    internal_name: {
                      n: 3,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    localized_category_name: {
                      n: 4,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    localized_tag_name: {
                      n: 5,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    color: { n: 6, br: i.qM.readString, bw: i.gp.writeString },
                  },
                }),
              w.sm_m
            );
          }
          static MBF() {
            return w.sm_mbf || (w.sm_mbf = i.w0(w.M())), w.sm_mbf;
          }
          toObject(r = !1) {
            return w.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(w.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(w.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              l = new w();
            return w.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(w.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return w.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(w.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              w.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEconItem_Tag";
          }
        }
        class s extends e.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              s.prototype.contained_items || i.Sg(s.M()),
              e.Message.initialize(this, r, 0, -1, [1, 2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              s.sm_m ||
                (s.sm_m = {
                  proto: s,
                  fields: {
                    contained_items: { n: 1, c: d, r: !0, q: !0 },
                    search_tags: { n: 2, c: w, r: !0, q: !0 },
                  },
                }),
              s.sm_m
            );
          }
          static MBF() {
            return s.sm_mbf || (s.sm_mbf = i.w0(s.M())), s.sm_mbf;
          }
          toObject(r = !1) {
            return s.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(s.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(s.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              l = new s();
            return s.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(s.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return s.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(s.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              s.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEconItem_ContainerProperties";
          }
        }
        class d extends e.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              d.prototype.classid || i.Sg(d.M()),
              e.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              d.sm_m ||
                (d.sm_m = {
                  proto: d,
                  fields: {
                    classid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    instanceid: {
                      n: 2,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                  },
                }),
              d.sm_m
            );
          }
          static MBF() {
            return d.sm_mbf || (d.sm_mbf = i.w0(d.M())), d.sm_mbf;
          }
          toObject(r = !1) {
            return d.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(d.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(d.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              l = new d();
            return d.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(d.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return d.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(d.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              d.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEconItem_ClassIdentifiers";
          }
        }
        class b extends e.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              b.prototype.appid || i.Sg(b.M()),
              e.Message.initialize(
                this,
                r,
                0,
                -1,
                [8, 10, 11, 12, 13, 21, 26],
                null,
              );
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              b.sm_m ||
                (b.sm_m = {
                  proto: b,
                  fields: {
                    appid: { n: 1, br: i.qM.readInt32, bw: i.gp.writeInt32 },
                    classid: {
                      n: 2,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    instanceid: {
                      n: 3,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    currency: { n: 4, br: i.qM.readBool, bw: i.gp.writeBool },
                    background_color: {
                      n: 5,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    icon_url: {
                      n: 6,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    icon_url_large: {
                      n: 7,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    descriptions: { n: 8, c: u, r: !0, q: !0 },
                    tradable: { n: 9, br: i.qM.readBool, bw: i.gp.writeBool },
                    actions: { n: 10, c: g, r: !0, q: !0 },
                    owner_descriptions: { n: 11, c: u, r: !0, q: !0 },
                    owner_actions: { n: 12, c: g, r: !0, q: !0 },
                    fraudwarnings: {
                      n: 13,
                      r: !0,
                      q: !0,
                      br: i.qM.readString,
                      bw: i.gp.writeRepeatedString,
                    },
                    name: { n: 14, br: i.qM.readString, bw: i.gp.writeString },
                    name_color: {
                      n: 15,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    type: { n: 16, br: i.qM.readString, bw: i.gp.writeString },
                    market_name: {
                      n: 17,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    market_hash_name: {
                      n: 18,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    market_fee: {
                      n: 19,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    market_fee_app: {
                      n: 28,
                      br: i.qM.readInt32,
                      bw: i.gp.writeInt32,
                    },
                    contained_item: { n: 20, c: b },
                    market_actions: { n: 21, c: g, r: !0, q: !0 },
                    commodity: { n: 22, br: i.qM.readBool, bw: i.gp.writeBool },
                    market_tradable_restriction: {
                      n: 23,
                      br: i.qM.readInt32,
                      bw: i.gp.writeInt32,
                    },
                    market_marketable_restriction: {
                      n: 24,
                      br: i.qM.readInt32,
                      bw: i.gp.writeInt32,
                    },
                    marketable: {
                      n: 25,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    tags: { n: 26, c: w, r: !0, q: !0 },
                    item_expiration: {
                      n: 27,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    market_buy_country_restriction: {
                      n: 30,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    market_sell_country_restriction: {
                      n: 31,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    sealed: { n: 32, br: i.qM.readBool, bw: i.gp.writeBool },
                    container_properties: { n: 33, c: s },
                    market_bucket_group_name: {
                      n: 34,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    market_bucket_group_id: {
                      n: 35,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    sealed_type: {
                      n: 37,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    market_name_inside_group: {
                      n: 38,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    market_bucket_id: {
                      n: 39,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              b.sm_m
            );
          }
          static MBF() {
            return b.sm_mbf || (b.sm_mbf = i.w0(b.M())), b.sm_mbf;
          }
          toObject(r = !1) {
            return b.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(b.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(b.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              l = new b();
            return b.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(b.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return b.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(b.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              b.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEconItem_Description";
          }
        }
        class B extends e.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              B.prototype.propertyid || i.Sg(B.M()),
              e.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              B.sm_m ||
                (B.sm_m = {
                  proto: B,
                  fields: {
                    propertyid: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    int_value: {
                      n: 2,
                      br: i.qM.readInt64String,
                      bw: i.gp.writeInt64String,
                    },
                    float_value: {
                      n: 3,
                      br: i.qM.readFloat,
                      bw: i.gp.writeFloat,
                    },
                    string_value: {
                      n: 4,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              B.sm_m
            );
          }
          static MBF() {
            return B.sm_mbf || (B.sm_mbf = i.w0(B.M())), B.sm_mbf;
          }
          toObject(r = !1) {
            return B.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(B.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(B.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              l = new B();
            return B.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(B.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return B.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(B.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              B.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEconItem_AssetProperty";
          }
        }
        class M extends e.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              M.prototype.classid || i.Sg(M.M()),
              e.Message.initialize(this, r, 0, -1, [3, 4, 5], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              M.sm_m ||
                (M.sm_m = {
                  proto: M,
                  fields: {
                    classid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    instanceid: {
                      n: 2,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    standalone_properties: { n: 3, c: B, r: !0, q: !0 },
                    parent_relationship_properties: {
                      n: 4,
                      c: B,
                      r: !0,
                      q: !0,
                    },
                    nested_accessories: { n: 5, c: M, r: !0, q: !0 },
                  },
                }),
              M.sm_m
            );
          }
          static MBF() {
            return M.sm_mbf || (M.sm_mbf = i.w0(M.M())), M.sm_mbf;
          }
          toObject(r = !1) {
            return M.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(M.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(M.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              l = new M();
            return M.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(M.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return M.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(M.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              M.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEconItem_AssetAccessory";
          }
        }
        class S extends e.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              S.prototype.appid || i.Sg(S.M()),
              e.Message.initialize(this, r, 0, -1, [4, 5], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              S.sm_m ||
                (S.sm_m = {
                  proto: S,
                  fields: {
                    appid: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    contextid: {
                      n: 2,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    assetid: {
                      n: 3,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    asset_properties: { n: 4, c: B, r: !0, q: !0 },
                    asset_accessories: { n: 5, c: M, r: !0, q: !0 },
                  },
                }),
              S.sm_m
            );
          }
          static MBF() {
            return S.sm_mbf || (S.sm_mbf = i.w0(S.M())), S.sm_mbf;
          }
          toObject(r = !1) {
            return S.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(S.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(S.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              l = new S();
            return S.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(S.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return S.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(S.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              S.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEconItem_AssetProperties";
          }
        }
        class j extends e.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              j.prototype.id || i.Sg(j.M()),
              e.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              j.sm_m ||
                (j.sm_m = {
                  proto: j,
                  fields: {
                    id: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    name: { n: 2, br: i.qM.readString, bw: i.gp.writeString },
                    type: { n: 3, br: i.qM.readEnum, bw: i.gp.writeEnum },
                    float_min: {
                      n: 4,
                      br: i.qM.readFloat,
                      bw: i.gp.writeFloat,
                    },
                    float_max: {
                      n: 5,
                      br: i.qM.readFloat,
                      bw: i.gp.writeFloat,
                    },
                    int_min: {
                      n: 6,
                      br: i.qM.readInt64String,
                      bw: i.gp.writeInt64String,
                    },
                    int_max: {
                      n: 7,
                      br: i.qM.readInt64String,
                      bw: i.gp.writeInt64String,
                    },
                    localized_label: {
                      n: 8,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    hide_from_description: {
                      n: 9,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                  },
                }),
              j.sm_m
            );
          }
          static MBF() {
            return j.sm_mbf || (j.sm_mbf = i.w0(j.M())), j.sm_mbf;
          }
          toObject(r = !1) {
            return j.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(j.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(j.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              l = new j();
            return j.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(j.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return j.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(j.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              j.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEconItem_AssetPropertySchema";
          }
        }
        class y extends e.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              y.prototype.appid || i.Sg(y.M()),
              e.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              y.sm_m ||
                (y.sm_m = {
                  proto: y,
                  fields: {
                    appid: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    language: {
                      n: 2,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              y.sm_m
            );
          }
          static MBF() {
            return y.sm_mbf || (y.sm_mbf = i.w0(y.M())), y.sm_mbf;
          }
          toObject(r = !1) {
            return y.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(y.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(y.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              l = new y();
            return y.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(y.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return y.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(y.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              y.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetAssetPropertySchema_Request";
          }
        }
        class F extends e.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              F.prototype.property_schemas || i.Sg(F.M()),
              e.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              F.sm_m ||
                (F.sm_m = {
                  proto: F,
                  fields: { property_schemas: { n: 1, c: j, r: !0, q: !0 } },
                }),
              F.sm_m
            );
          }
          static MBF() {
            return F.sm_mbf || (F.sm_mbf = i.w0(F.M())), F.sm_mbf;
          }
          toObject(r = !1) {
            return F.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(F.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(F.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              l = new F();
            return F.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(F.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return F.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(F.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              F.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetAssetPropertySchema_Response";
          }
        }
        class n extends e.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              n.prototype.appid || i.Sg(n.M()),
              e.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              n.sm_m ||
                (n.sm_m = {
                  proto: n,
                  fields: {
                    appid: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    contextid: {
                      n: 2,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    assetid: {
                      n: 3,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    classid: {
                      n: 4,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    instanceid: {
                      n: 5,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    currencyid: {
                      n: 6,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    amount: {
                      n: 7,
                      br: i.qM.readInt64String,
                      bw: i.gp.writeInt64String,
                    },
                    missing: { n: 8, br: i.qM.readBool, bw: i.gp.writeBool },
                    est_usd: {
                      n: 9,
                      br: i.qM.readInt64String,
                      bw: i.gp.writeInt64String,
                    },
                  },
                }),
              n.sm_m
            );
          }
          static MBF() {
            return n.sm_mbf || (n.sm_mbf = i.w0(n.M())), n.sm_mbf;
          }
          toObject(r = !1) {
            return n.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(n.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(n.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              l = new n();
            return n.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(n.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return n.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(n.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              n.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_Asset";
          }
        }
        class m extends e.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              m.prototype.steamid || i.Sg(m.M()),
              e.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              m.sm_m ||
                (m.sm_m = {
                  proto: m,
                  fields: {
                    steamid: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    appid: { n: 2, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    contextid: {
                      n: 3,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    get_descriptions: {
                      n: 4,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    get_asset_properties: {
                      n: 11,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    for_trade_offer_verification: {
                      n: 10,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    language: {
                      n: 5,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    filters: { n: 6, c: z },
                    start_assetid: {
                      n: 8,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    count: { n: 9, br: i.qM.readInt32, bw: i.gp.writeInt32 },
                  },
                }),
              m.sm_m
            );
          }
          static MBF() {
            return m.sm_mbf || (m.sm_mbf = i.w0(m.M())), m.sm_mbf;
          }
          toObject(r = !1) {
            return m.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(m.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(m.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              l = new m();
            return m.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(m.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return m.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(m.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              m.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetInventoryItemsWithDescriptions_Request";
          }
        }
        class z extends e.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              z.prototype.assetids || i.Sg(z.M()),
              e.Message.initialize(this, r, 0, -1, [1, 2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              z.sm_m ||
                (z.sm_m = {
                  proto: z,
                  fields: {
                    assetids: {
                      n: 1,
                      r: !0,
                      q: !0,
                      br: i.qM.readUint64String,
                      pbr: i.qM.readPackedUint64String,
                      bw: i.gp.writeRepeatedUint64String,
                    },
                    currencyids: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: i.qM.readUint32,
                      pbr: i.qM.readPackedUint32,
                      bw: i.gp.writeRepeatedUint32,
                    },
                    tradable_only: {
                      n: 3,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    marketable_only: {
                      n: 4,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                  },
                }),
              z.sm_m
            );
          }
          static MBF() {
            return z.sm_mbf || (z.sm_mbf = i.w0(z.M())), z.sm_mbf;
          }
          toObject(r = !1) {
            return z.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(z.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(z.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              l = new z();
            return z.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(z.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return z.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(z.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              z.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetInventoryItemsWithDescriptions_Request_FilterOptions";
          }
        }
        class W extends e.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              W.prototype.assets || i.Sg(W.M()),
              e.Message.initialize(this, r, 0, -1, [1, 2, 3, 7], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              W.sm_m ||
                (W.sm_m = {
                  proto: W,
                  fields: {
                    assets: { n: 1, c: n, r: !0, q: !0 },
                    descriptions: { n: 2, c: b, r: !0, q: !0 },
                    missing_assets: { n: 3, c: n, r: !0, q: !0 },
                    asset_properties: { n: 7, c: S, r: !0, q: !0 },
                    more_items: { n: 4, br: i.qM.readBool, bw: i.gp.writeBool },
                    last_assetid: {
                      n: 5,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    total_inventory_count: {
                      n: 6,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              W.sm_m
            );
          }
          static MBF() {
            return W.sm_mbf || (W.sm_mbf = i.w0(W.M())), W.sm_mbf;
          }
          toObject(r = !1) {
            return W.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(W.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(W.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              l = new W();
            return W.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(W.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return W.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(W.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              W.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetInventoryItemsWithDescriptions_Response";
          }
        }
        class U extends e.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              U.prototype.generate_new_token || i.Sg(U.M()),
              e.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              U.sm_m ||
                (U.sm_m = {
                  proto: U,
                  fields: {
                    generate_new_token: {
                      n: 1,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                  },
                }),
              U.sm_m
            );
          }
          static MBF() {
            return U.sm_mbf || (U.sm_mbf = i.w0(U.M())), U.sm_mbf;
          }
          toObject(r = !1) {
            return U.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(U.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(U.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              l = new U();
            return U.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(U.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return U.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(U.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              U.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetTradeOfferAccessToken_Request";
          }
        }
        class q extends e.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              q.prototype.trade_offer_access_token || i.Sg(q.M()),
              e.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              q.sm_m ||
                (q.sm_m = {
                  proto: q,
                  fields: {
                    trade_offer_access_token: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              q.sm_m
            );
          }
          static MBF() {
            return q.sm_mbf || (q.sm_mbf = i.w0(q.M())), q.sm_mbf;
          }
          toObject(r = !1) {
            return q.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(q.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(q.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              l = new q();
            return q.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(q.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return q.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(q.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              q.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetTradeOfferAccessToken_Response";
          }
        }
        class x extends e.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              x.prototype.return_url || i.Sg(x.M()),
              e.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              x.sm_m ||
                (x.sm_m = {
                  proto: x,
                  fields: {
                    return_url: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              x.sm_m
            );
          }
          static MBF() {
            return x.sm_mbf || (x.sm_mbf = i.w0(x.M())), x.sm_mbf;
          }
          toObject(r = !1) {
            return x.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(x.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(x.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              l = new x();
            return x.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(x.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return x.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(x.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              x.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_ClientGetItemShopOverlayAuthURL_Request";
          }
        }
        class N extends e.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              N.prototype.url || i.Sg(N.M()),
              e.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              N.sm_m ||
                (N.sm_m = {
                  proto: N,
                  fields: {
                    url: { n: 1, br: i.qM.readString, bw: i.gp.writeString },
                  },
                }),
              N.sm_m
            );
          }
          static MBF() {
            return N.sm_mbf || (N.sm_mbf = i.w0(N.M())), N.sm_mbf;
          }
          toObject(r = !1) {
            return N.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(N.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(N.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              l = new N();
            return N.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(N.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return N.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(N.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              N.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_ClientGetItemShopOverlayAuthURL_Response";
          }
        }
        class f extends e.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              f.prototype.language || i.Sg(f.M()),
              e.Message.initialize(this, r, 0, -1, [3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              f.sm_m ||
                (f.sm_m = {
                  proto: f,
                  fields: {
                    language: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    appid: { n: 2, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    classes: { n: 3, c: d, r: !0, q: !0 },
                    high_pri: { n: 4, br: i.qM.readBool, bw: i.gp.writeBool },
                  },
                }),
              f.sm_m
            );
          }
          static MBF() {
            return f.sm_mbf || (f.sm_mbf = i.w0(f.M())), f.sm_mbf;
          }
          toObject(r = !1) {
            return f.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(f.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(f.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              l = new f();
            return f.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(f.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return f.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(f.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              f.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetAssetClassInfo_Request";
          }
        }
        class T extends e.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              T.prototype.descriptions || i.Sg(T.M()),
              e.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              T.sm_m ||
                (T.sm_m = {
                  proto: T,
                  fields: { descriptions: { n: 1, c: b, r: !0, q: !0 } },
                }),
              T.sm_m
            );
          }
          static MBF() {
            return T.sm_mbf || (T.sm_mbf = i.w0(T.M())), T.sm_mbf;
          }
          toObject(r = !1) {
            return T.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(T.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(T.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              l = new T();
            return T.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(T.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return T.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(T.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              T.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetAssetClassInfo_Response";
          }
        }
        var V;
        ((O) => {
          function r(K, k, H) {
            return K.SendMsg(
              "Econ.GetInventoryItemsWithDescriptions#1",
              (0, Q.I8)(m, k, H),
              W,
              {
                bConstMethod: !0,
                ePrivilege: 2,
                eWebAPIKeyRequirement: 2,
                rgBrowserAPISites: ["partner", "help"],
              },
            );
          }
          O.GetInventoryItemsWithDescriptions = r;
          function a(K, k, H) {
            return K.SendMsg(
              "Econ.GetTradeOfferAccessToken#1",
              (0, Q.I8)(U, k, H),
              q,
              { ePrivilege: 1 },
            );
          }
          O.GetTradeOfferAccessToken = a;
          function l(K, k, H) {
            return K.SendMsg(
              "Econ.ClientGetItemShopOverlayAuthURL#1",
              (0, Q.I8)(x, k, H),
              N,
              { ePrivilege: 1 },
            );
          }
          O.ClientGetItemShopOverlayAuthURL = l;
          function Y(K, k, H) {
            return K.SendMsg(
              "Econ.GetAssetClassInfo#1",
              (0, Q.I8)(f, k, H),
              T,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 1 },
            );
          }
          O.GetAssetClassInfo = Y;
          function Z(K, k, H) {
            return K.SendMsg(
              "Econ.GetAssetPropertySchema#1",
              (0, Q.I8)(y, k, H),
              F,
              {
                bConstMethod: !0,
                ePrivilege: 0,
                eWebAPIKeyRequirement: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          O.GetAssetPropertySchema = Z;
        })(V || (V = {}));
      },
    },
  ]);
})();

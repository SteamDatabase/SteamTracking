/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [5282],
  {
    63215: (e, r, t) => {
      t.d(r, { qp: () => j, tB: () => s, ur: () => T, z9: () => q });
      var i,
        n,
        a,
        s,
        o = t(80613),
        l = t.n(o),
        c = t(89068),
        m = t(56545);
      !(function (e) {
        (e[(e.k_EAssetPropertyType_Unknown = 0)] =
          "k_EAssetPropertyType_Unknown"),
          (e[(e.k_EAssetPropertyType_Float = 1)] =
            "k_EAssetPropertyType_Float"),
          (e[(e.k_EAssetPropertyType_Int = 2)] = "k_EAssetPropertyType_Int"),
          (e[(e.k_EAssetPropertyType_String = 3)] =
            "k_EAssetPropertyType_String"),
          (e[(e.k_EAssetPropertyType_MAX = 4)] = "k_EAssetPropertyType_MAX");
      })(i || (i = {})),
        (function (e) {
          (e[(e.k_ETradeOfferStateInvalid = 1)] = "k_ETradeOfferStateInvalid"),
            (e[(e.k_ETradeOfferStateActive = 2)] = "k_ETradeOfferStateActive"),
            (e[(e.k_ETradeOfferStateAccepted = 3)] =
              "k_ETradeOfferStateAccepted"),
            (e[(e.k_ETradeOfferStateCountered = 4)] =
              "k_ETradeOfferStateCountered"),
            (e[(e.k_ETradeOfferStateExpired = 5)] =
              "k_ETradeOfferStateExpired"),
            (e[(e.k_ETradeOfferStateCanceled = 6)] =
              "k_ETradeOfferStateCanceled"),
            (e[(e.k_ETradeOfferStateDeclined = 7)] =
              "k_ETradeOfferStateDeclined"),
            (e[(e.k_ETradeOfferStateInvalidItems = 8)] =
              "k_ETradeOfferStateInvalidItems"),
            (e[(e.k_ETradeOfferStateCreatedNeedsConfirmation = 9)] =
              "k_ETradeOfferStateCreatedNeedsConfirmation"),
            (e[(e.k_ETradeOfferStateCanceledBySecondFactor = 10)] =
              "k_ETradeOfferStateCanceledBySecondFactor"),
            (e[(e.k_ETradeOfferStateInEscrow = 11)] =
              "k_ETradeOfferStateInEscrow"),
            (e[(e.k_ETradeOfferStateReverted = 12)] =
              "k_ETradeOfferStateReverted");
        })(n || (n = {})),
        (function (e) {
          (e[(e.k_ETradeOfferConfirmationMethod_Invalid = 0)] =
            "k_ETradeOfferConfirmationMethod_Invalid"),
            (e[(e.k_ETradeOfferConfirmationMethod_Email = 1)] =
              "k_ETradeOfferConfirmationMethod_Email"),
            (e[(e.k_ETradeOfferConfirmationMethod_MobileApp = 2)] =
              "k_ETradeOfferConfirmationMethod_MobileApp");
        })(a || (a = {}));
      class u extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            u.prototype.type || c.Sg(u.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: {
                  type: { n: 1, br: c.qM.readString, bw: c.gp.writeString },
                  value: { n: 2, br: c.qM.readString, bw: c.gp.writeString },
                  color: { n: 3, br: c.qM.readString, bw: c.gp.writeString },
                  label: { n: 4, br: c.qM.readString, bw: c.gp.writeString },
                  name: { n: 5, br: c.qM.readString, bw: c.gp.writeString },
                },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = c.w0(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, r) {
          return c.BT(u.M(), e, r);
        }
        static fromObject(e) {
          return c.Uq(u.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (l().BinaryReader)(e),
            t = new u();
          return u.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return c.zj(u.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          c.i0(u.M(), e, r);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEconItem_DescriptionLine";
        }
      }
      class d extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            d.prototype.link || c.Sg(d.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  link: { n: 1, br: c.qM.readString, bw: c.gp.writeString },
                  name: { n: 2, br: c.qM.readString, bw: c.gp.writeString },
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
        static toObject(e, r) {
          return c.BT(d.M(), e, r);
        }
        static fromObject(e) {
          return c.Uq(d.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (l().BinaryReader)(e),
            t = new d();
          return d.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return c.zj(d.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          c.i0(d.M(), e, r);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEconItem_Action";
        }
      }
      class g extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            g.prototype.appid || c.Sg(g.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  appid: { n: 1, br: c.qM.readUint32, bw: c.gp.writeUint32 },
                  category: { n: 2, br: c.qM.readString, bw: c.gp.writeString },
                  internal_name: {
                    n: 3,
                    br: c.qM.readString,
                    bw: c.gp.writeString,
                  },
                  localized_category_name: {
                    n: 4,
                    br: c.qM.readString,
                    bw: c.gp.writeString,
                  },
                  localized_tag_name: {
                    n: 5,
                    br: c.qM.readString,
                    bw: c.gp.writeString,
                  },
                  color: { n: 6, br: c.qM.readString, bw: c.gp.writeString },
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
        static toObject(e, r) {
          return c.BT(g.M(), e, r);
        }
        static fromObject(e) {
          return c.Uq(g.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (l().BinaryReader)(e),
            t = new g();
          return g.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return c.zj(g.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          c.i0(g.M(), e, r);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEconItem_Tag";
        }
      }
      class B extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            B.prototype.contained_items || c.Sg(B.M()),
            o.Message.initialize(this, e, 0, -1, [1, 2], null);
        }
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: {
                  contained_items: { n: 1, c: b, r: !0, q: !0 },
                  search_tags: { n: 2, c: g, r: !0, q: !0 },
                },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = c.w0(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, r) {
          return c.BT(B.M(), e, r);
        }
        static fromObject(e) {
          return c.Uq(B.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (l().BinaryReader)(e),
            t = new B();
          return B.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return c.zj(B.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          c.i0(B.M(), e, r);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEconItem_ContainerProperties";
        }
      }
      class b extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.classid || c.Sg(b.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  classid: {
                    n: 1,
                    br: c.qM.readUint64String,
                    bw: c.gp.writeUint64String,
                  },
                  instanceid: {
                    n: 2,
                    br: c.qM.readUint64String,
                    bw: c.gp.writeUint64String,
                  },
                },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = c.w0(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, r) {
          return c.BT(b.M(), e, r);
        }
        static fromObject(e) {
          return c.Uq(b.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (l().BinaryReader)(e),
            t = new b();
          return b.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return c.zj(b.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          c.i0(b.M(), e, r);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEconItem_ClassIdentifiers";
        }
      }
      class M extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.appid || c.Sg(M.M()),
            o.Message.initialize(
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
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: {
                  appid: { n: 1, br: c.qM.readInt32, bw: c.gp.writeInt32 },
                  classid: {
                    n: 2,
                    br: c.qM.readUint64String,
                    bw: c.gp.writeUint64String,
                  },
                  instanceid: {
                    n: 3,
                    br: c.qM.readUint64String,
                    bw: c.gp.writeUint64String,
                  },
                  currency: { n: 4, br: c.qM.readBool, bw: c.gp.writeBool },
                  background_color: {
                    n: 5,
                    br: c.qM.readString,
                    bw: c.gp.writeString,
                  },
                  icon_url: { n: 6, br: c.qM.readString, bw: c.gp.writeString },
                  icon_url_large: {
                    n: 7,
                    br: c.qM.readString,
                    bw: c.gp.writeString,
                  },
                  descriptions: { n: 8, c: u, r: !0, q: !0 },
                  tradable: { n: 9, br: c.qM.readBool, bw: c.gp.writeBool },
                  actions: { n: 10, c: d, r: !0, q: !0 },
                  owner_descriptions: { n: 11, c: u, r: !0, q: !0 },
                  owner_actions: { n: 12, c: d, r: !0, q: !0 },
                  fraudwarnings: {
                    n: 13,
                    r: !0,
                    q: !0,
                    br: c.qM.readString,
                    bw: c.gp.writeRepeatedString,
                  },
                  name: { n: 14, br: c.qM.readString, bw: c.gp.writeString },
                  name_color: {
                    n: 15,
                    br: c.qM.readString,
                    bw: c.gp.writeString,
                  },
                  type: { n: 16, br: c.qM.readString, bw: c.gp.writeString },
                  market_name: {
                    n: 17,
                    br: c.qM.readString,
                    bw: c.gp.writeString,
                  },
                  market_hash_name: {
                    n: 18,
                    br: c.qM.readString,
                    bw: c.gp.writeString,
                  },
                  market_fee: {
                    n: 19,
                    br: c.qM.readString,
                    bw: c.gp.writeString,
                  },
                  market_fee_app: {
                    n: 28,
                    br: c.qM.readInt32,
                    bw: c.gp.writeInt32,
                  },
                  contained_item: { n: 20, c: M },
                  market_actions: { n: 21, c: d, r: !0, q: !0 },
                  commodity: { n: 22, br: c.qM.readBool, bw: c.gp.writeBool },
                  market_tradable_restriction: {
                    n: 23,
                    br: c.qM.readInt32,
                    bw: c.gp.writeInt32,
                  },
                  market_marketable_restriction: {
                    n: 24,
                    br: c.qM.readInt32,
                    bw: c.gp.writeInt32,
                  },
                  marketable: { n: 25, br: c.qM.readBool, bw: c.gp.writeBool },
                  tags: { n: 26, c: g, r: !0, q: !0 },
                  item_expiration: {
                    n: 27,
                    br: c.qM.readString,
                    bw: c.gp.writeString,
                  },
                  market_buy_country_restriction: {
                    n: 30,
                    br: c.qM.readString,
                    bw: c.gp.writeString,
                  },
                  market_sell_country_restriction: {
                    n: 31,
                    br: c.qM.readString,
                    bw: c.gp.writeString,
                  },
                  sealed: { n: 32, br: c.qM.readBool, bw: c.gp.writeBool },
                  container_properties: { n: 33, c: B },
                },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = c.w0(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, r) {
          return c.BT(M.M(), e, r);
        }
        static fromObject(e) {
          return c.Uq(M.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (l().BinaryReader)(e),
            t = new M();
          return M.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return c.zj(M.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          c.i0(M.M(), e, r);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEconItem_Description";
        }
      }
      class p extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.propertyid || c.Sg(p.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  propertyid: {
                    n: 1,
                    br: c.qM.readUint32,
                    bw: c.gp.writeUint32,
                  },
                  int_value: {
                    n: 2,
                    br: c.qM.readInt64String,
                    bw: c.gp.writeInt64String,
                  },
                  float_value: {
                    n: 3,
                    br: c.qM.readFloat,
                    bw: c.gp.writeFloat,
                  },
                  string_value: {
                    n: 4,
                    br: c.qM.readString,
                    bw: c.gp.writeString,
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
        static toObject(e, r) {
          return c.BT(p.M(), e, r);
        }
        static fromObject(e) {
          return c.Uq(p.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (l().BinaryReader)(e),
            t = new p();
          return p.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return c.zj(p.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          c.i0(p.M(), e, r);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEconItem_AssetProperty";
        }
      }
      class y extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.classid || c.Sg(y.M()),
            o.Message.initialize(this, e, 0, -1, [3, 4, 5], null);
        }
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  classid: {
                    n: 1,
                    br: c.qM.readUint64String,
                    bw: c.gp.writeUint64String,
                  },
                  instanceid: {
                    n: 2,
                    br: c.qM.readUint64String,
                    bw: c.gp.writeUint64String,
                  },
                  standalone_properties: { n: 3, c: p, r: !0, q: !0 },
                  parent_relationship_properties: { n: 4, c: p, r: !0, q: !0 },
                  nested_accessories: { n: 5, c: y, r: !0, q: !0 },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = c.w0(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, r) {
          return c.BT(y.M(), e, r);
        }
        static fromObject(e) {
          return c.Uq(y.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (l().BinaryReader)(e),
            t = new y();
          return y.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return c.zj(y.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          c.i0(y.M(), e, r);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEconItem_AssetAccessory";
        }
      }
      class _ extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _.prototype.appid || c.Sg(_.M()),
            o.Message.initialize(this, e, 0, -1, [4, 5], null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  appid: { n: 1, br: c.qM.readUint32, bw: c.gp.writeUint32 },
                  contextid: {
                    n: 2,
                    br: c.qM.readUint64String,
                    bw: c.gp.writeUint64String,
                  },
                  assetid: {
                    n: 3,
                    br: c.qM.readUint64String,
                    bw: c.gp.writeUint64String,
                  },
                  asset_properties: { n: 4, c: p, r: !0, q: !0 },
                  asset_accessories: { n: 5, c: y, r: !0, q: !0 },
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
        static toObject(e, r) {
          return c.BT(_.M(), e, r);
        }
        static fromObject(e) {
          return c.Uq(_.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (l().BinaryReader)(e),
            t = new _();
          return _.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return c.zj(_.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          c.i0(_.M(), e, r);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEconItem_AssetProperties";
        }
      }
      class w extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.id || c.Sg(w.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  id: { n: 1, br: c.qM.readUint32, bw: c.gp.writeUint32 },
                  name: { n: 2, br: c.qM.readString, bw: c.gp.writeString },
                  type: { n: 3, br: c.qM.readEnum, bw: c.gp.writeEnum },
                  float_min: { n: 4, br: c.qM.readFloat, bw: c.gp.writeFloat },
                  float_max: { n: 5, br: c.qM.readFloat, bw: c.gp.writeFloat },
                  int_min: {
                    n: 6,
                    br: c.qM.readInt64String,
                    bw: c.gp.writeInt64String,
                  },
                  int_max: {
                    n: 7,
                    br: c.qM.readInt64String,
                    bw: c.gp.writeInt64String,
                  },
                  localized_label: {
                    n: 8,
                    br: c.qM.readString,
                    bw: c.gp.writeString,
                  },
                  hide_from_description: {
                    n: 9,
                    br: c.qM.readBool,
                    bw: c.gp.writeBool,
                  },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = c.w0(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, r) {
          return c.BT(w.M(), e, r);
        }
        static fromObject(e) {
          return c.Uq(w.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (l().BinaryReader)(e),
            t = new w();
          return w.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return c.zj(w.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          c.i0(w.M(), e, r);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEconItem_AssetPropertySchema";
        }
      }
      class f extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.appid || c.Sg(f.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: {
                  appid: { n: 1, br: c.qM.readUint32, bw: c.gp.writeUint32 },
                  language: { n: 2, br: c.qM.readString, bw: c.gp.writeString },
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
        static toObject(e, r) {
          return c.BT(f.M(), e, r);
        }
        static fromObject(e) {
          return c.Uq(f.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (l().BinaryReader)(e),
            t = new f();
          return f.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return c.zj(f.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          c.i0(f.M(), e, r);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEcon_GetAssetPropertySchema_Request";
        }
      }
      class S extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            S.prototype.property_schemas || c.Sg(S.M()),
            o.Message.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: { property_schemas: { n: 1, c: w, r: !0, q: !0 } },
              }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = c.w0(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, r) {
          return c.BT(S.M(), e, r);
        }
        static fromObject(e) {
          return c.Uq(S.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (l().BinaryReader)(e),
            t = new S();
          return S.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return c.zj(S.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          c.i0(S.M(), e, r);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEcon_GetAssetPropertySchema_Response";
        }
      }
      class z extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            z.prototype.appid || c.Sg(z.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: {
                  appid: { n: 1, br: c.qM.readUint32, bw: c.gp.writeUint32 },
                  contextid: {
                    n: 2,
                    br: c.qM.readUint64String,
                    bw: c.gp.writeUint64String,
                  },
                  assetid: {
                    n: 3,
                    br: c.qM.readUint64String,
                    bw: c.gp.writeUint64String,
                  },
                  classid: {
                    n: 4,
                    br: c.qM.readUint64String,
                    bw: c.gp.writeUint64String,
                  },
                  instanceid: {
                    n: 5,
                    br: c.qM.readUint64String,
                    bw: c.gp.writeUint64String,
                  },
                  currencyid: {
                    n: 6,
                    br: c.qM.readUint32,
                    bw: c.gp.writeUint32,
                  },
                  amount: {
                    n: 7,
                    br: c.qM.readInt64String,
                    bw: c.gp.writeInt64String,
                  },
                  missing: { n: 8, br: c.qM.readBool, bw: c.gp.writeBool },
                  est_usd: {
                    n: 9,
                    br: c.qM.readInt64String,
                    bw: c.gp.writeInt64String,
                  },
                },
              }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = c.w0(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, r) {
          return c.BT(z.M(), e, r);
        }
        static fromObject(e) {
          return c.Uq(z.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (l().BinaryReader)(e),
            t = new z();
          return z.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return c.zj(z.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          c.i0(z.M(), e, r);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEcon_Asset";
        }
      }
      class q extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            q.prototype.steamid || c.Sg(q.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            q.sm_m ||
              (q.sm_m = {
                proto: q,
                fields: {
                  steamid: {
                    n: 1,
                    br: c.qM.readFixed64String,
                    bw: c.gp.writeFixed64String,
                  },
                  appid: { n: 2, br: c.qM.readUint32, bw: c.gp.writeUint32 },
                  contextid: {
                    n: 3,
                    br: c.qM.readUint64String,
                    bw: c.gp.writeUint64String,
                  },
                  get_descriptions: {
                    n: 4,
                    br: c.qM.readBool,
                    bw: c.gp.writeBool,
                  },
                  get_asset_properties: {
                    n: 11,
                    br: c.qM.readBool,
                    bw: c.gp.writeBool,
                  },
                  for_trade_offer_verification: {
                    n: 10,
                    br: c.qM.readBool,
                    bw: c.gp.writeBool,
                  },
                  language: { n: 5, br: c.qM.readString, bw: c.gp.writeString },
                  filters: { n: 6, c: T },
                  start_assetid: {
                    n: 8,
                    br: c.qM.readUint64String,
                    bw: c.gp.writeUint64String,
                  },
                  count: { n: 9, br: c.qM.readInt32, bw: c.gp.writeInt32 },
                },
              }),
            q.sm_m
          );
        }
        static MBF() {
          return q.sm_mbf || (q.sm_mbf = c.w0(q.M())), q.sm_mbf;
        }
        toObject(e = !1) {
          return q.toObject(e, this);
        }
        static toObject(e, r) {
          return c.BT(q.M(), e, r);
        }
        static fromObject(e) {
          return c.Uq(q.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (l().BinaryReader)(e),
            t = new q();
          return q.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return c.zj(q.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          c.i0(q.M(), e, r);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEcon_GetInventoryItemsWithDescriptions_Request";
        }
      }
      class T extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            T.prototype.assetids || c.Sg(T.M()),
            o.Message.initialize(this, e, 0, -1, [1, 2], null);
        }
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: {
                  assetids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: c.qM.readUint64String,
                    pbr: c.qM.readPackedUint64String,
                    bw: c.gp.writeRepeatedUint64String,
                  },
                  currencyids: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: c.qM.readUint32,
                    pbr: c.qM.readPackedUint32,
                    bw: c.gp.writeRepeatedUint32,
                  },
                  tradable_only: {
                    n: 3,
                    br: c.qM.readBool,
                    bw: c.gp.writeBool,
                  },
                  marketable_only: {
                    n: 4,
                    br: c.qM.readBool,
                    bw: c.gp.writeBool,
                  },
                },
              }),
            T.sm_m
          );
        }
        static MBF() {
          return T.sm_mbf || (T.sm_mbf = c.w0(T.M())), T.sm_mbf;
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, r) {
          return c.BT(T.M(), e, r);
        }
        static fromObject(e) {
          return c.Uq(T.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (l().BinaryReader)(e),
            t = new T();
          return T.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return c.zj(T.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          c.i0(T.M(), e, r);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEcon_GetInventoryItemsWithDescriptions_Request_FilterOptions";
        }
      }
      class R extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            R.prototype.assets || c.Sg(R.M()),
            o.Message.initialize(this, e, 0, -1, [1, 2, 3, 7], null);
        }
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = {
                proto: R,
                fields: {
                  assets: { n: 1, c: z, r: !0, q: !0 },
                  descriptions: { n: 2, c: M, r: !0, q: !0 },
                  missing_assets: { n: 3, c: z, r: !0, q: !0 },
                  asset_properties: { n: 7, c: _, r: !0, q: !0 },
                  more_items: { n: 4, br: c.qM.readBool, bw: c.gp.writeBool },
                  last_assetid: {
                    n: 5,
                    br: c.qM.readUint64String,
                    bw: c.gp.writeUint64String,
                  },
                  total_inventory_count: {
                    n: 6,
                    br: c.qM.readUint32,
                    bw: c.gp.writeUint32,
                  },
                },
              }),
            R.sm_m
          );
        }
        static MBF() {
          return R.sm_mbf || (R.sm_mbf = c.w0(R.M())), R.sm_mbf;
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, r) {
          return c.BT(R.M(), e, r);
        }
        static fromObject(e) {
          return c.Uq(R.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (l().BinaryReader)(e),
            t = new R();
          return R.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return c.zj(R.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          c.i0(R.M(), e, r);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEcon_GetInventoryItemsWithDescriptions_Response";
        }
      }
      class h extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.generate_new_token || c.Sg(h.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  generate_new_token: {
                    n: 1,
                    br: c.qM.readBool,
                    bw: c.gp.writeBool,
                  },
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
        static toObject(e, r) {
          return c.BT(h.M(), e, r);
        }
        static fromObject(e) {
          return c.Uq(h.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (l().BinaryReader)(e),
            t = new h();
          return h.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return c.zj(h.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          c.i0(h.M(), e, r);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEcon_GetTradeOfferAccessToken_Request";
        }
      }
      class O extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            O.prototype.trade_offer_access_token || c.Sg(O.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            O.sm_m ||
              (O.sm_m = {
                proto: O,
                fields: {
                  trade_offer_access_token: {
                    n: 1,
                    br: c.qM.readString,
                    bw: c.gp.writeString,
                  },
                },
              }),
            O.sm_m
          );
        }
        static MBF() {
          return O.sm_mbf || (O.sm_mbf = c.w0(O.M())), O.sm_mbf;
        }
        toObject(e = !1) {
          return O.toObject(e, this);
        }
        static toObject(e, r) {
          return c.BT(O.M(), e, r);
        }
        static fromObject(e) {
          return c.Uq(O.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (l().BinaryReader)(e),
            t = new O();
          return O.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return c.zj(O.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          c.i0(O.M(), e, r);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEcon_GetTradeOfferAccessToken_Response";
        }
      }
      class W extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            W.prototype.return_url || c.Sg(W.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            W.sm_m ||
              (W.sm_m = {
                proto: W,
                fields: {
                  return_url: {
                    n: 1,
                    br: c.qM.readString,
                    bw: c.gp.writeString,
                  },
                },
              }),
            W.sm_m
          );
        }
        static MBF() {
          return W.sm_mbf || (W.sm_mbf = c.w0(W.M())), W.sm_mbf;
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, r) {
          return c.BT(W.M(), e, r);
        }
        static fromObject(e) {
          return c.Uq(W.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (l().BinaryReader)(e),
            t = new W();
          return W.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return c.zj(W.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          c.i0(W.M(), e, r);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEcon_ClientGetItemShopOverlayAuthURL_Request";
        }
      }
      class I extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            I.prototype.url || c.Sg(I.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
                fields: {
                  url: { n: 1, br: c.qM.readString, bw: c.gp.writeString },
                },
              }),
            I.sm_m
          );
        }
        static MBF() {
          return I.sm_mbf || (I.sm_mbf = c.w0(I.M())), I.sm_mbf;
        }
        toObject(e = !1) {
          return I.toObject(e, this);
        }
        static toObject(e, r) {
          return c.BT(I.M(), e, r);
        }
        static fromObject(e) {
          return c.Uq(I.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (l().BinaryReader)(e),
            t = new I();
          return I.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return c.zj(I.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          c.i0(I.M(), e, r);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEcon_ClientGetItemShopOverlayAuthURL_Response";
        }
      }
      class j extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            j.prototype.language || c.Sg(j.M()),
            o.Message.initialize(this, e, 0, -1, [3], null);
        }
        static M() {
          return (
            j.sm_m ||
              (j.sm_m = {
                proto: j,
                fields: {
                  language: { n: 1, br: c.qM.readString, bw: c.gp.writeString },
                  appid: { n: 2, br: c.qM.readUint32, bw: c.gp.writeUint32 },
                  classes: { n: 3, c: b, r: !0, q: !0 },
                  high_pri: { n: 4, br: c.qM.readBool, bw: c.gp.writeBool },
                },
              }),
            j.sm_m
          );
        }
        static MBF() {
          return j.sm_mbf || (j.sm_mbf = c.w0(j.M())), j.sm_mbf;
        }
        toObject(e = !1) {
          return j.toObject(e, this);
        }
        static toObject(e, r) {
          return c.BT(j.M(), e, r);
        }
        static fromObject(e) {
          return c.Uq(j.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (l().BinaryReader)(e),
            t = new j();
          return j.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return c.zj(j.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          c.i0(j.M(), e, r);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEcon_GetAssetClassInfo_Request";
        }
      }
      class F extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            F.prototype.descriptions || c.Sg(F.M()),
            o.Message.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
                fields: { descriptions: { n: 1, c: M, r: !0, q: !0 } },
              }),
            F.sm_m
          );
        }
        static MBF() {
          return F.sm_mbf || (F.sm_mbf = c.w0(F.M())), F.sm_mbf;
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, r) {
          return c.BT(F.M(), e, r);
        }
        static fromObject(e) {
          return c.Uq(F.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (l().BinaryReader)(e),
            t = new F();
          return F.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return c.zj(F.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (l().BinaryWriter)();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          c.i0(F.M(), e, r);
        }
        serializeBase64String() {
          var e = new (l().BinaryWriter)();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEcon_GetAssetClassInfo_Response";
        }
      }
      !(function (e) {
        (e.GetInventoryItemsWithDescriptions = function (e, r) {
          return e.SendMsg(
            "Econ.GetInventoryItemsWithDescriptions#1",
            (0, m.I8)(q, r),
            R,
            { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 2 },
          );
        }),
          (e.GetTradeOfferAccessToken = function (e, r) {
            return e.SendMsg(
              "Econ.GetTradeOfferAccessToken#1",
              (0, m.I8)(h, r),
              O,
              { ePrivilege: 1 },
            );
          }),
          (e.ClientGetItemShopOverlayAuthURL = function (e, r) {
            return e.SendMsg(
              "Econ.ClientGetItemShopOverlayAuthURL#1",
              (0, m.I8)(W, r),
              I,
              { ePrivilege: 1 },
            );
          }),
          (e.GetAssetClassInfo = function (e, r) {
            return e.SendMsg("Econ.GetAssetClassInfo#1", (0, m.I8)(j, r), F, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.GetAssetPropertySchema = function (e, r) {
            return e.SendMsg(
              "Econ.GetAssetPropertySchema#1",
              (0, m.I8)(f, r),
              S,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          });
      })(s || (s = {}));
    },
  },
]);

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [8310],
  {
    92406: (e, t, i) => {
      i.d(t, {
        OT: () => he,
        iO: () => Me,
        T4: () => we,
        n8: () => Se,
        hr: () => Be,
        IC: () => Z,
        V4: () => ae,
        sR: () => ie,
        jb: () => Ie,
        Rl: () => Fe,
        XT: () => Oe,
        cE: () => ue,
        tM: () => pe,
        K9: () => Y,
        bP: () => Re,
        aq: () => te,
        u5: () => ve,
        IL: () => ye,
      });
      var r,
        a,
        n,
        s,
        o = i(34629),
        l = i(97788),
        c = i(56545),
        m = i(37085),
        d = i(22837),
        _ = i(80613),
        u = i.n(_),
        p = i(89068);
      !(function (e) {
        (e[(e.k_EAssetPropertyType_Unknown = 0)] =
          "k_EAssetPropertyType_Unknown"),
          (e[(e.k_EAssetPropertyType_Float = 1)] =
            "k_EAssetPropertyType_Float"),
          (e[(e.k_EAssetPropertyType_Int = 2)] = "k_EAssetPropertyType_Int"),
          (e[(e.k_EAssetPropertyType_String = 3)] =
            "k_EAssetPropertyType_String"),
          (e[(e.k_EAssetPropertyType_MAX = 4)] = "k_EAssetPropertyType_MAX");
      })(r || (r = {})),
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
        })(a || (a = {})),
        (function (e) {
          (e[(e.k_ETradeOfferConfirmationMethod_Invalid = 0)] =
            "k_ETradeOfferConfirmationMethod_Invalid"),
            (e[(e.k_ETradeOfferConfirmationMethod_Email = 1)] =
              "k_ETradeOfferConfirmationMethod_Email"),
            (e[(e.k_ETradeOfferConfirmationMethod_MobileApp = 2)] =
              "k_ETradeOfferConfirmationMethod_MobileApp");
        })(n || (n = {}));
      class f extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.type || p.Sg(f.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: {
                  type: { n: 1, br: p.qM.readString, bw: p.gp.writeString },
                  value: { n: 2, br: p.qM.readString, bw: p.gp.writeString },
                  color: { n: 3, br: p.qM.readString, bw: p.gp.writeString },
                  label: { n: 4, br: p.qM.readString, bw: p.gp.writeString },
                  name: { n: 5, br: p.qM.readString, bw: p.gp.writeString },
                },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = p.w0(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(f.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(f.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            i = new f();
          return f.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(f.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(f.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEconItem_DescriptionLine";
        }
      }
      class g extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            g.prototype.link || p.Sg(g.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  link: { n: 1, br: p.qM.readString, bw: p.gp.writeString },
                  name: { n: 2, br: p.qM.readString, bw: p.gp.writeString },
                },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = p.w0(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(g.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(g.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            i = new g();
          return g.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(g.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(g.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEconItem_Action";
        }
      }
      class y extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.appid || p.Sg(y.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  appid: { n: 1, br: p.qM.readUint32, bw: p.gp.writeUint32 },
                  category: { n: 2, br: p.qM.readString, bw: p.gp.writeString },
                  internal_name: {
                    n: 3,
                    br: p.qM.readString,
                    bw: p.gp.writeString,
                  },
                  localized_category_name: {
                    n: 4,
                    br: p.qM.readString,
                    bw: p.gp.writeString,
                  },
                  localized_tag_name: {
                    n: 5,
                    br: p.qM.readString,
                    bw: p.gp.writeString,
                  },
                  color: { n: 6, br: p.qM.readString, bw: p.gp.writeString },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = p.w0(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(y.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            i = new y();
          return y.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(y.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEconItem_Tag";
        }
      }
      class b extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.contained_items || p.Sg(b.M()),
            _.Message.initialize(this, e, 0, -1, [1, 2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  contained_items: { n: 1, c: B, r: !0, q: !0 },
                  search_tags: { n: 2, c: y, r: !0, q: !0 },
                },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = p.w0(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(b.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(b.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            i = new b();
          return b.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(b.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(b.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEconItem_ContainerProperties";
        }
      }
      class B extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            B.prototype.classid || p.Sg(B.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: {
                  classid: {
                    n: 1,
                    br: p.qM.readUint64String,
                    bw: p.gp.writeUint64String,
                  },
                  instanceid: {
                    n: 2,
                    br: p.qM.readUint64String,
                    bw: p.gp.writeUint64String,
                  },
                },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = p.w0(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(B.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(B.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            i = new B();
          return B.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(B.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(B.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEconItem_ClassIdentifiers";
        }
      }
      class S extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            S.prototype.appid || p.Sg(S.M()),
            _.Message.initialize(
              this,
              e,
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
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: {
                  appid: { n: 1, br: p.qM.readInt32, bw: p.gp.writeInt32 },
                  classid: {
                    n: 2,
                    br: p.qM.readUint64String,
                    bw: p.gp.writeUint64String,
                  },
                  instanceid: {
                    n: 3,
                    br: p.qM.readUint64String,
                    bw: p.gp.writeUint64String,
                  },
                  currency: { n: 4, br: p.qM.readBool, bw: p.gp.writeBool },
                  background_color: {
                    n: 5,
                    br: p.qM.readString,
                    bw: p.gp.writeString,
                  },
                  icon_url: { n: 6, br: p.qM.readString, bw: p.gp.writeString },
                  icon_url_large: {
                    n: 7,
                    br: p.qM.readString,
                    bw: p.gp.writeString,
                  },
                  descriptions: { n: 8, c: f, r: !0, q: !0 },
                  tradable: { n: 9, br: p.qM.readBool, bw: p.gp.writeBool },
                  actions: { n: 10, c: g, r: !0, q: !0 },
                  owner_descriptions: { n: 11, c: f, r: !0, q: !0 },
                  owner_actions: { n: 12, c: g, r: !0, q: !0 },
                  fraudwarnings: {
                    n: 13,
                    r: !0,
                    q: !0,
                    br: p.qM.readString,
                    bw: p.gp.writeRepeatedString,
                  },
                  name: { n: 14, br: p.qM.readString, bw: p.gp.writeString },
                  name_color: {
                    n: 15,
                    br: p.qM.readString,
                    bw: p.gp.writeString,
                  },
                  type: { n: 16, br: p.qM.readString, bw: p.gp.writeString },
                  market_name: {
                    n: 17,
                    br: p.qM.readString,
                    bw: p.gp.writeString,
                  },
                  market_hash_name: {
                    n: 18,
                    br: p.qM.readString,
                    bw: p.gp.writeString,
                  },
                  market_fee: {
                    n: 19,
                    br: p.qM.readString,
                    bw: p.gp.writeString,
                  },
                  market_fee_app: {
                    n: 28,
                    br: p.qM.readInt32,
                    bw: p.gp.writeInt32,
                  },
                  contained_item: { n: 20, c: S },
                  market_actions: { n: 21, c: g, r: !0, q: !0 },
                  commodity: { n: 22, br: p.qM.readBool, bw: p.gp.writeBool },
                  market_tradable_restriction: {
                    n: 23,
                    br: p.qM.readInt32,
                    bw: p.gp.writeInt32,
                  },
                  market_marketable_restriction: {
                    n: 24,
                    br: p.qM.readInt32,
                    bw: p.gp.writeInt32,
                  },
                  marketable: { n: 25, br: p.qM.readBool, bw: p.gp.writeBool },
                  tags: { n: 26, c: y, r: !0, q: !0 },
                  item_expiration: {
                    n: 27,
                    br: p.qM.readString,
                    bw: p.gp.writeString,
                  },
                  market_buy_country_restriction: {
                    n: 30,
                    br: p.qM.readString,
                    bw: p.gp.writeString,
                  },
                  market_sell_country_restriction: {
                    n: 31,
                    br: p.qM.readString,
                    bw: p.gp.writeString,
                  },
                  sealed: { n: 32, br: p.qM.readBool, bw: p.gp.writeBool },
                  container_properties: { n: 33, c: b },
                },
              }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = p.w0(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(S.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(S.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            i = new S();
          return S.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(S.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(S.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEconItem_Description";
        }
      }
      class w extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.propertyid || p.Sg(w.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  propertyid: {
                    n: 1,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  int_value: {
                    n: 2,
                    br: p.qM.readInt64String,
                    bw: p.gp.writeInt64String,
                  },
                  float_value: {
                    n: 3,
                    br: p.qM.readFloat,
                    bw: p.gp.writeFloat,
                  },
                  string_value: {
                    n: 4,
                    br: p.qM.readString,
                    bw: p.gp.writeString,
                  },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = p.w0(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(w.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(w.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            i = new w();
          return w.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(w.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(w.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEconItem_AssetProperty";
        }
      }
      class M extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.classid || p.Sg(M.M()),
            _.Message.initialize(this, e, 0, -1, [3, 4, 5], null);
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
                    br: p.qM.readUint64String,
                    bw: p.gp.writeUint64String,
                  },
                  instanceid: {
                    n: 2,
                    br: p.qM.readUint64String,
                    bw: p.gp.writeUint64String,
                  },
                  standalone_properties: { n: 3, c: w, r: !0, q: !0 },
                  parent_relationship_properties: { n: 4, c: w, r: !0, q: !0 },
                  nested_accessories: { n: 5, c: M, r: !0, q: !0 },
                },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = p.w0(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(M.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(M.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            i = new M();
          return M.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(M.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(M.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEconItem_AssetAccessory";
        }
      }
      class h extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.appid || p.Sg(h.M()),
            _.Message.initialize(this, e, 0, -1, [4, 5], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  appid: { n: 1, br: p.qM.readUint32, bw: p.gp.writeUint32 },
                  contextid: {
                    n: 2,
                    br: p.qM.readUint64String,
                    bw: p.gp.writeUint64String,
                  },
                  assetid: {
                    n: 3,
                    br: p.qM.readUint64String,
                    bw: p.gp.writeUint64String,
                  },
                  asset_properties: { n: 4, c: w, r: !0, q: !0 },
                  asset_accessories: { n: 5, c: M, r: !0, q: !0 },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = p.w0(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(h.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(h.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            i = new h();
          return h.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEconItem_AssetProperties";
        }
      }
      class v extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            v.prototype.id || p.Sg(v.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
                fields: {
                  id: { n: 1, br: p.qM.readUint32, bw: p.gp.writeUint32 },
                  name: { n: 2, br: p.qM.readString, bw: p.gp.writeString },
                  type: { n: 3, br: p.qM.readEnum, bw: p.gp.writeEnum },
                  float_min: { n: 4, br: p.qM.readFloat, bw: p.gp.writeFloat },
                  float_max: { n: 5, br: p.qM.readFloat, bw: p.gp.writeFloat },
                  int_min: {
                    n: 6,
                    br: p.qM.readInt64String,
                    bw: p.gp.writeInt64String,
                  },
                  int_max: {
                    n: 7,
                    br: p.qM.readInt64String,
                    bw: p.gp.writeInt64String,
                  },
                  localized_label: {
                    n: 8,
                    br: p.qM.readString,
                    bw: p.gp.writeString,
                  },
                  hide_from_description: {
                    n: 9,
                    br: p.qM.readBool,
                    bw: p.gp.writeBool,
                  },
                },
              }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = p.w0(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(v.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(v.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            i = new v();
          return v.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(v.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(v.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEconItem_AssetPropertySchema";
        }
      }
      class T extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            T.prototype.appid || p.Sg(T.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: {
                  appid: { n: 1, br: p.qM.readUint32, bw: p.gp.writeUint32 },
                  language: { n: 2, br: p.qM.readString, bw: p.gp.writeString },
                },
              }),
            T.sm_m
          );
        }
        static MBF() {
          return T.sm_mbf || (T.sm_mbf = p.w0(T.M())), T.sm_mbf;
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(T.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(T.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            i = new T();
          return T.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(T.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(T.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEcon_GetAssetPropertySchema_Request";
        }
      }
      class R extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            R.prototype.property_schemas || p.Sg(R.M()),
            _.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = {
                proto: R,
                fields: { property_schemas: { n: 1, c: v, r: !0, q: !0 } },
              }),
            R.sm_m
          );
        }
        static MBF() {
          return R.sm_mbf || (R.sm_mbf = p.w0(R.M())), R.sm_mbf;
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(R.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(R.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            i = new R();
          return R.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(R.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(R.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEcon_GetAssetPropertySchema_Response";
        }
      }
      class N extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            N.prototype.appid || p.Sg(N.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            N.sm_m ||
              (N.sm_m = {
                proto: N,
                fields: {
                  appid: { n: 1, br: p.qM.readUint32, bw: p.gp.writeUint32 },
                  contextid: {
                    n: 2,
                    br: p.qM.readUint64String,
                    bw: p.gp.writeUint64String,
                  },
                  assetid: {
                    n: 3,
                    br: p.qM.readUint64String,
                    bw: p.gp.writeUint64String,
                  },
                  classid: {
                    n: 4,
                    br: p.qM.readUint64String,
                    bw: p.gp.writeUint64String,
                  },
                  instanceid: {
                    n: 5,
                    br: p.qM.readUint64String,
                    bw: p.gp.writeUint64String,
                  },
                  currencyid: {
                    n: 6,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  amount: {
                    n: 7,
                    br: p.qM.readInt64String,
                    bw: p.gp.writeInt64String,
                  },
                  missing: { n: 8, br: p.qM.readBool, bw: p.gp.writeBool },
                  est_usd: {
                    n: 9,
                    br: p.qM.readInt64String,
                    bw: p.gp.writeInt64String,
                  },
                },
              }),
            N.sm_m
          );
        }
        static MBF() {
          return N.sm_mbf || (N.sm_mbf = p.w0(N.M())), N.sm_mbf;
        }
        toObject(e = !1) {
          return N.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(N.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(N.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            i = new N();
          return N.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(N.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return N.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(N.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return N.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEcon_Asset";
        }
      }
      class z extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            z.prototype.steamid || p.Sg(z.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: {
                  steamid: {
                    n: 1,
                    br: p.qM.readFixed64String,
                    bw: p.gp.writeFixed64String,
                  },
                  appid: { n: 2, br: p.qM.readUint32, bw: p.gp.writeUint32 },
                  contextid: {
                    n: 3,
                    br: p.qM.readUint64String,
                    bw: p.gp.writeUint64String,
                  },
                  get_descriptions: {
                    n: 4,
                    br: p.qM.readBool,
                    bw: p.gp.writeBool,
                  },
                  get_asset_properties: {
                    n: 11,
                    br: p.qM.readBool,
                    bw: p.gp.writeBool,
                  },
                  for_trade_offer_verification: {
                    n: 10,
                    br: p.qM.readBool,
                    bw: p.gp.writeBool,
                  },
                  language: { n: 5, br: p.qM.readString, bw: p.gp.writeString },
                  filters: { n: 6, c: q },
                  start_assetid: {
                    n: 8,
                    br: p.qM.readUint64String,
                    bw: p.gp.writeUint64String,
                  },
                  count: { n: 9, br: p.qM.readInt32, bw: p.gp.writeInt32 },
                },
              }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = p.w0(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(z.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            i = new z();
          return z.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(z.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEcon_GetInventoryItemsWithDescriptions_Request";
        }
      }
      class q extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            q.prototype.assetids || p.Sg(q.M()),
            _.Message.initialize(this, e, 0, -1, [1, 2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            q.sm_m ||
              (q.sm_m = {
                proto: q,
                fields: {
                  assetids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: p.qM.readUint64String,
                    pbr: p.qM.readPackedUint64String,
                    bw: p.gp.writeRepeatedUint64String,
                  },
                  currencyids: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: p.qM.readUint32,
                    pbr: p.qM.readPackedUint32,
                    bw: p.gp.writeRepeatedUint32,
                  },
                  tradable_only: {
                    n: 3,
                    br: p.qM.readBool,
                    bw: p.gp.writeBool,
                  },
                  marketable_only: {
                    n: 4,
                    br: p.qM.readBool,
                    bw: p.gp.writeBool,
                  },
                },
              }),
            q.sm_m
          );
        }
        static MBF() {
          return q.sm_mbf || (q.sm_mbf = p.w0(q.M())), q.sm_mbf;
        }
        toObject(e = !1) {
          return q.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(q.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(q.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            i = new q();
          return q.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(q.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(q.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEcon_GetInventoryItemsWithDescriptions_Request_FilterOptions";
        }
      }
      class k extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            k.prototype.assets || p.Sg(k.M()),
            _.Message.initialize(this, e, 0, -1, [1, 2, 3, 7], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            k.sm_m ||
              (k.sm_m = {
                proto: k,
                fields: {
                  assets: { n: 1, c: N, r: !0, q: !0 },
                  descriptions: { n: 2, c: S, r: !0, q: !0 },
                  missing_assets: { n: 3, c: N, r: !0, q: !0 },
                  asset_properties: { n: 7, c: h, r: !0, q: !0 },
                  more_items: { n: 4, br: p.qM.readBool, bw: p.gp.writeBool },
                  last_assetid: {
                    n: 5,
                    br: p.qM.readUint64String,
                    bw: p.gp.writeUint64String,
                  },
                  total_inventory_count: {
                    n: 6,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                },
              }),
            k.sm_m
          );
        }
        static MBF() {
          return k.sm_mbf || (k.sm_mbf = p.w0(k.M())), k.sm_mbf;
        }
        toObject(e = !1) {
          return k.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(k.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(k.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            i = new k();
          return k.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(k.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(k.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return k.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEcon_GetInventoryItemsWithDescriptions_Response";
        }
      }
      class I extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            I.prototype.generate_new_token || p.Sg(I.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
                fields: {
                  generate_new_token: {
                    n: 1,
                    br: p.qM.readBool,
                    bw: p.gp.writeBool,
                  },
                },
              }),
            I.sm_m
          );
        }
        static MBF() {
          return I.sm_mbf || (I.sm_mbf = p.w0(I.M())), I.sm_mbf;
        }
        toObject(e = !1) {
          return I.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(I.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(I.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            i = new I();
          return I.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(I.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(I.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEcon_GetTradeOfferAccessToken_Request";
        }
      }
      class E extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            E.prototype.trade_offer_access_token || p.Sg(E.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            E.sm_m ||
              (E.sm_m = {
                proto: E,
                fields: {
                  trade_offer_access_token: {
                    n: 1,
                    br: p.qM.readString,
                    bw: p.gp.writeString,
                  },
                },
              }),
            E.sm_m
          );
        }
        static MBF() {
          return E.sm_mbf || (E.sm_mbf = p.w0(E.M())), E.sm_mbf;
        }
        toObject(e = !1) {
          return E.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(E.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(E.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            i = new E();
          return E.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(E.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(E.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEcon_GetTradeOfferAccessToken_Response";
        }
      }
      class F extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            F.prototype.return_url || p.Sg(F.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
                fields: {
                  return_url: {
                    n: 1,
                    br: p.qM.readString,
                    bw: p.gp.writeString,
                  },
                },
              }),
            F.sm_m
          );
        }
        static MBF() {
          return F.sm_mbf || (F.sm_mbf = p.w0(F.M())), F.sm_mbf;
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(F.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(F.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            i = new F();
          return F.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(F.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(F.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEcon_ClientGetItemShopOverlayAuthURL_Request";
        }
      }
      class O extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            O.prototype.url || p.Sg(O.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            O.sm_m ||
              (O.sm_m = {
                proto: O,
                fields: {
                  url: { n: 1, br: p.qM.readString, bw: p.gp.writeString },
                },
              }),
            O.sm_m
          );
        }
        static MBF() {
          return O.sm_mbf || (O.sm_mbf = p.w0(O.M())), O.sm_mbf;
        }
        toObject(e = !1) {
          return O.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(O.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(O.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            i = new O();
          return O.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(O.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(O.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEcon_ClientGetItemShopOverlayAuthURL_Response";
        }
      }
      class j extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            j.prototype.language || p.Sg(j.M()),
            _.Message.initialize(this, e, 0, -1, [3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            j.sm_m ||
              (j.sm_m = {
                proto: j,
                fields: {
                  language: { n: 1, br: p.qM.readString, bw: p.gp.writeString },
                  appid: { n: 2, br: p.qM.readUint32, bw: p.gp.writeUint32 },
                  classes: { n: 3, c: B, r: !0, q: !0 },
                  high_pri: { n: 4, br: p.qM.readBool, bw: p.gp.writeBool },
                },
              }),
            j.sm_m
          );
        }
        static MBF() {
          return j.sm_mbf || (j.sm_mbf = p.w0(j.M())), j.sm_mbf;
        }
        toObject(e = !1) {
          return j.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(j.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(j.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            i = new j();
          return j.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(j.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(j.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEcon_GetAssetClassInfo_Request";
        }
      }
      class A extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            A.prototype.descriptions || p.Sg(A.M()),
            _.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            A.sm_m ||
              (A.sm_m = {
                proto: A,
                fields: { descriptions: { n: 1, c: S, r: !0, q: !0 } },
              }),
            A.sm_m
          );
        }
        static MBF() {
          return A.sm_mbf || (A.sm_mbf = p.w0(A.M())), A.sm_mbf;
        }
        toObject(e = !1) {
          return A.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(A.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(A.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            i = new A();
          return A.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(A.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return A.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(A.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return A.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEcon_GetAssetClassInfo_Response";
        }
      }
      !(function (e) {
        (e.GetInventoryItemsWithDescriptions = function (e, t) {
          return e.SendMsg(
            "Econ.GetInventoryItemsWithDescriptions#1",
            (0, c.I8)(z, t),
            k,
            { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 2 },
          );
        }),
          (e.GetTradeOfferAccessToken = function (e, t) {
            return e.SendMsg(
              "Econ.GetTradeOfferAccessToken#1",
              (0, c.I8)(I, t),
              E,
              { ePrivilege: 1 },
            );
          }),
          (e.ClientGetItemShopOverlayAuthURL = function (e, t) {
            return e.SendMsg(
              "Econ.ClientGetItemShopOverlayAuthURL#1",
              (0, c.I8)(F, t),
              O,
              { ePrivilege: 1 },
            );
          }),
          (e.GetAssetClassInfo = function (e, t) {
            return e.SendMsg("Econ.GetAssetClassInfo#1", (0, c.I8)(j, t), A, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.GetAssetPropertySchema = function (e, t) {
            return e.SendMsg(
              "Econ.GetAssetPropertySchema#1",
              (0, c.I8)(T, t),
              R,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          });
      })(s || (s = {}));
      var C = i(20194),
        W = i(14947),
        U = i(17720),
        P = i(82097),
        V = i(9344),
        G = i(95679),
        D = i(14771),
        x = i(60778),
        L = i(30470),
        H = i(78327),
        $ = i(30925),
        X = i(64868),
        J = i(81393),
        K = i(15419);
      const Q = {
        [l.Vv.k_ESteamNotificationType_HelpRequest]: {
          displayNameLoc: "#SteamNotification_HelpRequest_Author",
          titleLoc: "#SteamNotification_HelpRequest_Title",
          bodyLoc: (e) => ({
            locString: "#SteamNotification_HelpRequest_Body",
            params: [e.ticket],
          }),
          link: (e) => L.TS.HELP_BASE_URL + "wizard/HelpRequest/" + e.ticket,
        },
        [l.Vv.k_ESteamNotificationType_MajorSale]: {
          displayNameLoc: "#SteamNotifications_MajorSale",
          titleLoc: (e) => ({ locString: e.title }),
          bodyLoc: (e) =>
            (0, H.Y2)() && e.link.includes("https://store.steampowered.com")
              ? "#SteamNotifications_MajorSale_SteamChina_Title"
              : e.body,
          image: (e) => e.image,
          link: (e) =>
            (0, H.Y2)() && e.link.includes("https://store.steampowered.com")
              ? e.link.replace(
                  "https://store.steampowered.com",
                  L.TS.STORE_BASE_URL,
                )
              : e.link,
        },
        [l.Vv.k_ESteamNotificationType_General]: {
          displayNameLoc: (e) => e.display_name,
          titleLoc: (e) => e.title,
          bodyLoc: (e) => e.body,
          image: (e) => e.image,
          link: (e) => e.link,
        },
        [l.Vv.k_ESteamNotificationType_ModeratorMsg]: {
          titleLoc: "#SteamNotification_ModeratorMessage_Title",
          link: (e) =>
            L.TS.COMMUNITY_BASE_URL + "my/moderatormessages/" + e.msgid,
        },
        [l.Vv.k_ESteamNotificationType_PlaytestInvite]: {
          displayNameLoc: (e) =>
            e.is_limited_launch
              ? "#Notification_LimitedLaunchInviteTitle"
              : "#Notification_PlaytestInviteTitle",
          titleLoc: (e) =>
            e.is_limited_launch
              ? "#Notification_LimitedLaunchInviteBody"
              : "#Notification_PlaytestInviteBody",
          image: (e) => e.appid,
          link: (e) =>
            L.TS.STORE_BASE_URL + "account/gatedaccess?appid=" + e.appid,
        },
      };
      function Y(e) {
        if (void 0 !== e) return Q[e];
      }
      function Z(e) {
        return !!Y(e);
      }
      const ee = {
        [l.Vv.k_ESteamNotificationType_FamilyInvite]: {
          steamidAttribute: "inviter",
          titleLoc: "#SteamNotifications_FamilyInviteTitle",
          bodyLoc: "#SteamNotifications_FamilyInviteBody",
          url: (e) =>
            `${L.TS.STORE_BASE_URL}account/familymanagement/join?invitation=${e.familyid}`,
        },
        [l.Vv.k_ESteamNotificationType_ParentalFeatureAccessRequest]: {
          steamidAttribute: "steamid",
          titleLoc: "#SteamNotifications_ParentalFeatureRequestTitle",
          bodyLoc: "#SteamNotifications_ParentalFeatureRequestBody",
          url: () =>
            `${L.TS.STORE_BASE_URL}account/familymanagement?tab=requests`,
        },
        [l.Vv.k_ESteamNotificationType_FamilyPurchaseRequest]: {
          steamidAttribute: "requestor_steamid",
          titleLoc: "#SteamNotifications_FamilyPurchaseRequestTitle",
          bodyLoc: "#SteamNotifications_FamilyPurchaseRequestBody",
          url: (e) => (0, $.w1)(e.familyid, e.request_id),
        },
        [l.Vv.k_ESteamNotificationType_FamilyPurchaseRequestResponse]: {
          steamidAttribute: "responder_steamid",
          titleLoc: (e) =>
            e.action == X.IG.k_EPurchaseRequestAction_Decline
              ? "#SteamNotifications_FamilyPurchaseRequestResponseDeclinedTitle"
              : "",
          bodyLoc: (e) =>
            e.action == X.IG.k_EPurchaseRequestAction_Decline
              ? "#SteamNotifications_FamilyPurchaseRequestDeclinedBody"
              : "",
          url: () =>
            `${L.TS.STORE_BASE_URL}account/familymanagement?tab=requests`,
        },
        [l.Vv.k_ESteamNotificationType_ParentalPlaytimeRequest]: {
          steamidAttribute: "steamid",
          titleLoc: "#SteamNotifications_ParentalPlaytimeRequestTitle",
          bodyLoc: "#SteamNotifications_ParentalPlaytimeRequestBody",
          url: () =>
            `${L.TS.STORE_BASE_URL}account/familymanagement?tab=requests`,
        },
        [l.Vv.k_ESteamNotificationType_ParentalFeatureAccessResponse]: {
          steamidAttribute: "steamid_approver",
          titleLoc: (e) =>
            e.approved
              ? "#SteamNotifications_ParentalFeatureAccessResponseTitleApproved"
              : "#SteamNotifications_ParentalFeatureAccessResponseTitleDeclined",
          bodyLoc: (e) =>
            e.approved
              ? "#SteamNotifications_ParentalFeatureAccessResponseBodyApproved"
              : "#SteamNotifications_ParentalFeatureAccessResponseBodyDeclined",
          url: () =>
            `${L.TS.STORE_BASE_URL}account/familymanagement?tab=requests`,
        },
        [l.Vv.k_ESteamNotificationType_ParentalPlaytimeResponse]: {
          steamidAttribute: "steamid_approver",
          titleLoc: (e) =>
            e.approved
              ? "#SteamNotifications_ParentalPlaytimeResponseTitleApproved"
              : "#SteamNotifications_ParentalPlaytimeResponseTitleDeclined",
          bodyLoc: (e) =>
            e.approved
              ? "#SteamNotifications_ParentalPlaytimeResponseBodyApproved"
              : "#SteamNotifications_ParentalPlaytimeResponseBodyDeclined",
          url: () =>
            `${L.TS.STORE_BASE_URL}account/familymanagement?tab=requests`,
        },
      };
      function te(e) {
        if (void 0 !== e) return ee[e];
      }
      function ie(e) {
        return !!te(e);
      }
      const re = [
        l.Vv.k_ESteamNotificationType_Comment,
        l.Vv.k_ESteamNotificationType_FriendInvite,
        l.Vv.k_ESteamNotificationType_Gift,
        l.Vv.k_ESteamNotificationType_Item,
        l.Vv.k_ESteamNotificationType_Wishlist,
        l.Vv.k_ESteamNotificationType_TradeOffer,
        l.Vv.k_ESteamNotificationType_AsyncGame,
        l.Vv.k_ESteamNotificationType_RequestedGameAdded,
        l.Vv.k_ESteamNotificationType_ClipDownloaded,
        l.Vv.k_ESteamNotificationType_SendToPhone,
        l.Vv.k_ESteamNotificationType_TradeReversal,
      ];
      function ae(e) {
        return null != re.findIndex((t) => t == e);
      }
      function ne(e) {
        return (
          !e.hidden &&
          (Z((t = e.notification_type)) || ie(t) || ae(t)) &&
          ve(e.body_data)
        );
        var t;
      }
      var se;
      !(function (e) {
        (e[(e.New = 0)] = "New"),
          (e[(e.Update = 1)] = "Update"),
          (e[(e.Remove = 2)] = "Remove");
      })(se || (se = {}));
      const oe = 172800,
        le = 600,
        ce = new x.wd("SteamNotificationStore"),
        me = ce.Debug,
        de = ce.Error,
        _e = ce.Warning;
      class ue {
        constructor() {
          (0, W.Gn)(this);
        }
        m_rgNotificationRollups = [];
        m_summary = {
          comments: 0,
          inventory_items: 0,
          invites: 0,
          gifts: 0,
          offline_messages: 0,
          trade_offers: 0,
          async_game_updates: 0,
          moderator_messages: 0,
          help_request_replies: 0,
          general: 0,
          wishlist: 0,
          pending_gifts: 0,
          pending_invites: 0,
          major_sale: 0,
          parental_feature_requests: 0,
          family_invites: 0,
          family_purchase_requests: 0,
          family_purchase_request_responses: 0,
          pending_family_invites: 0,
          parental_playtime_requests: 0,
          parental_feature_access_responses: 0,
          parental_playtime_responses: 0,
          requested_game_added: 0,
          playtest_invites: 0,
        };
        m_bLoaded = !1;
        m_nUnviewed = 0;
        m_rgNotifyServerRead = [];
        m_rgNotifyServerHidden = [];
        m_keyNotifyServerRead = "";
        m_keyNotifyServerHidden = "";
        m_steamid;
        m_transport;
        m_rgUnreadNotificationIDs = [];
        m_rgNewRollupIDs = new Map();
        m_rgTestNotifications = [];
        m_currentNotificationsData = null;
        m_strRemoteClientID = "";
        m_eTargetClientType = l.rB.k_ESteamNotificationTargetClientType_Invalid;
        m_fnOnNotificationCallback = null;
        BHasNotificationsData() {
          return null != this.m_currentNotificationsData;
        }
        setTransport(e) {
          this.m_transport = e;
        }
        RegisterOnNotificationCallback(e) {
          this.m_fnOnNotificationCallback = e;
        }
        SetClientFilters(
          e,
          t = l.rB.k_ESteamNotificationTargetClientType_Invalid,
        ) {
          (this.m_strRemoteClientID = e), (this.m_eTargetClientType = t);
        }
        NotifyServerNotificationsRead(e) {
          this.m_rgNotifyServerRead.push(...e), this.UpdateServer();
        }
        NotifyServerNotificationsHidden(e) {
          this.m_rgNotifyServerHidden.push(...e), this.UpdateServer();
        }
        BSendToCallbackAsNew(e) {
          return (
            !e.read &&
            !Oe(e) &&
            !this.m_rgUnreadNotificationIDs.includes(e.notification_id)
          );
        }
        Dev_AddTestNotification(e) {}
        Dev_UpdateTestNotificationReadState(e, t) {
          const i = this.m_rgTestNotifications.findIndex(
            (t) => t.notification_id == e,
          );
          return (
            -1 !== i &&
            this.m_rgTestNotifications[i].read != t &&
            ((this.m_rgTestNotifications[i].read = t), !0)
          );
        }
        UpdateServer() {
          if (this.m_rgNotifyServerRead.length > 0) {
            const e = c.w.Init(l.V4);
            e.Body().set_notification_ids(this.m_rgNotifyServerRead),
              l.Fn.MarkNotificationsRead(this.m_transport, e) &&
                (this.m_rgNotifyServerRead = []);
          }
          if (this.m_rgNotifyServerHidden.length > 0) {
            const e = c.w.Init(l.b$);
            e.Body().set_notification_ids(this.m_rgNotifyServerHidden),
              l.Fn.HideNotification(this.m_transport, e) &&
                (this.m_rgNotifyServerHidden = []);
          }
        }
        MarkItemRead(e, t = !1) {
          let i = this.m_rgNotificationRollups.findIndex(
            (t) => t.item.notification_id == e,
          );
          if (-1 === i)
            return void (t
              ? this.NotifyServerNotificationsRead([e])
              : de(
                  "Attempted to mark notification read that is not in the notification store",
                ));
          let r = this.m_rgNotificationRollups[i];
          if (r.item.read)
            de("Attempted to mark notification read that is already read");
          else if (((r.item.read = !0), r.rgunread?.length > 0)) {
            this.ReduceNewTotals(r.type, r.rgunread.length);
            let e = [];
            r.rgunread.forEach((t) => {
              e.push(t);
            }),
              r.rgread.push(...r.rgunread),
              (r.rgunread = []),
              this.NotifyServerNotificationsRead(e);
          }
        }
        MarkItemHidden(e) {
          let t = this.m_rgNotificationRollups.findIndex(
            (t) => t.item.notification_id == e,
          );
          if (-1 === t)
            return void de(
              "Attempted to mark notification hidden that is not in the notification store",
            );
          let i = this.m_rgNotificationRollups[t];
          (i.item.hidden = !0),
            i.rgunread?.length > 0 &&
              this.ReduceNewTotals(i.type, i.rgunread?.length),
            this.NotifyServerNotificationsHidden([...i.rgunread, ...i.rgread]);
        }
        ReduceNewTotals(e, t) {
          Ee(this.m_summary, e, -t);
        }
        MarkAllItemsViewed() {
          const e = c.w.Init(l.nH);
          e.Body().set_remote_client_id(this.m_strRemoteClientID),
            e.Body().set_target_client_type(this.m_eTargetClientType),
            l.Fn.MarkNotificationsViewed(this.m_transport, e),
            (this.m_nUnviewed = 0);
        }
        MarkAllItemsRead(e) {
          let t = [],
            i = [];
          const r = e ?? this.m_rgNotificationRollups;
          return (
            r.forEach((e, r) => {
              e.rgunread.length > 0 &&
                (e.rgunread.forEach((e) => {
                  t.push(e);
                }),
                i.push(r));
            }),
            t.length > 0 &&
              ((this.m_summary = Object.assign(
                {
                  comments: 0,
                  inventory_items: 0,
                  invites: 0,
                  gifts: 0,
                  offline_messages: 0,
                  trade_offers: 0,
                  async_game_updates: 0,
                  moderator_messages: 0,
                  help_request_replies: 0,
                  general: 0,
                  wishlist: 0,
                  pending_gifts: 0,
                  pending_invites: 0,
                  major_sale: 0,
                  parental_feature_requests: 0,
                  family_invites: 0,
                  family_purchase_requests: 0,
                  family_purchase_request_responses: 0,
                  pending_family_invites: 0,
                  parental_playtime_requests: 0,
                  parental_feature_access_responses: 0,
                  parental_playtime_responses: 0,
                  requested_game_added: 0,
                  playtest_invites: 0,
                },
                {
                  pending_gifts: this.m_summary.pending_gifts,
                  pending_invites: this.m_summary.pending_invites,
                  pending_family_invites: this.m_summary.pending_family_invites,
                },
              )),
              i.forEach((e) => {
                let t = r[e];
                (t.item.read = !0), (t.rgunread = []);
              }),
              this.NotifyServerNotificationsRead(t)),
            t.length + 0
          );
        }
        ApplyNotificationsUpdate(e) {
          if (
            (me("ApplyNotificationsUpdate", e),
            !e ||
              (!e.notifications?.length &&
                void 0 === e.pending_friend_count &&
                void 0 === e.pending_gift_count))
          )
            return void me(
              "Error: ApplyNotificationsUpdate was called with no data",
            );
          if (!this.m_currentNotificationsData)
            return void me(
              "Error: ApplyNotificationsUpdate was called before this.m_currentNotificationsData was set",
            );
          const t = this.m_currentNotificationsData;
          e.notifications?.forEach((e) => {
            const i = t.notifications.findIndex(
              (t) => t.notification_id == e.notification_id,
            );
            -1 != i
              ? Object.assign(t.notifications[i], e)
              : t.notifications.push(e);
          }),
            void 0 !== e.pending_friend_count &&
              (this.m_currentNotificationsData.pending_friend_count =
                e.pending_friend_count),
            void 0 !== e.pending_gift_count &&
              (this.m_currentNotificationsData.pending_gift_count =
                e.pending_gift_count),
            void 0 !== e.pending_family_invite_count &&
              (this.m_currentNotificationsData.pending_family_invite_count =
                e.pending_family_invite_count),
            this.ProcessNotifications();
        }
        ProcessNewNotificationPayload(e) {
          (this.m_currentNotificationsData = JSON.parse(JSON.stringify(e))),
            this.ProcessNotifications();
        }
        ProcessNotifications() {
          let e = [],
            t = {
              comments: 0,
              inventory_items: 0,
              invites: 0,
              gifts: 0,
              offline_messages: 0,
              trade_offers: 0,
              async_game_updates: 0,
              moderator_messages: 0,
              help_request_replies: 0,
              general: 0,
              wishlist: 0,
              pending_gifts: 0,
              pending_invites: 0,
              major_sale: 0,
              parental_feature_requests: 0,
              family_invites: 0,
              family_purchase_requests: 0,
              family_purchase_request_responses: 0,
              pending_family_invites: 0,
              parental_playtime_requests: 0,
              parental_feature_access_responses: 0,
              parental_playtime_responses: 0,
              requested_game_added: 0,
              playtest_invites: 0,
            },
            i = 0;
          if (
            (this.m_currentNotificationsData?.notifications?.forEach((r) => {
              if (!this.BExcludeClientTargetedNotification(r)) {
                if (this.m_rgNotifyServerHidden.length > 0) {
                  -1 !==
                    this.m_rgNotifyServerHidden.findIndex(
                      (e) => e == r.notification_id,
                    ) && (r.hidden = !0);
                }
                if (ne(r)) {
                  if (this.m_rgNotifyServerRead.length > 0) {
                    -1 !==
                      this.m_rgNotifyServerRead.findIndex(
                        (e) => e == r.notification_id,
                      ) && (r.read = !0);
                  }
                  r.read || Ee(t, r.notification_type, 1),
                    r.viewed || i++,
                    this.AddNotificationToRollups(e, r);
                }
              }
            }),
            e.sort((e, t) => e.timestamp - t.timestamp),
            this.m_fnOnNotificationCallback)
          ) {
            for (const t of e)
              if (t.bSendToCallbackAsNew)
                this.m_rgNewRollupIDs.set(
                  t.rollup_key,
                  JSON.parse(JSON.stringify(t)),
                ),
                  this.m_fnOnNotificationCallback(t, se.New);
              else if (this.m_rgNewRollupIDs.has(t.rollup_key)) {
                let e = this.m_rgNewRollupIDs.get(t.rollup_key);
                (e.item.read == t.item.read &&
                  e.item.viewed == t.item.viewed) ||
                  (this.m_rgNewRollupIDs.set(
                    t.rollup_key,
                    JSON.parse(JSON.stringify(t)),
                  ),
                  this.m_fnOnNotificationCallback(t, se.Update));
              }
            for (const [t, i] of this.m_rgNewRollupIDs)
              -1 == e.findIndex((e) => e.rollup_key == t) &&
                (this.m_fnOnNotificationCallback(i, se.Remove),
                this.m_rgNewRollupIDs.delete(t));
          }
          e.reverse(),
            (t.pending_gifts =
              this.m_currentNotificationsData?.pending_gift_count ?? 0),
            (t.pending_invites =
              this.m_currentNotificationsData?.pending_friend_count ?? 0),
            (t.pending_family_invites =
              this.m_currentNotificationsData?.pending_family_invite_count ??
              0),
            (this.m_rgNotificationRollups = e.slice()),
            (this.m_summary = t),
            (this.m_bLoaded = !0),
            (this.m_nUnviewed = i);
        }
        BExcludeClientTargetedNotification(e) {
          const t = ve(e.body_data);
          return (
            !!t &&
            (!(
              !t.remote_client_id ||
              this.m_strRemoteClientID == t.remote_client_id
            ) ||
              !(
                !t.target_client_types ||
                this.m_eTargetClientType & t.target_client_types
              ))
          );
        }
        BReplaceRollupItem(e, t) {
          return e.read != t.read
            ? t.read
            : (e.read && t.read) || t.viewed == e.viewed
              ? t.timestamp < e.timestamp
              : !(e.viewed || !t.viewed) ||
                (!(!e.viewed || !t.viewed) && t.viewed < e.viewed);
        }
        AddNotificationToRollups(e, t) {
          const i = this.BSendToCallbackAsNew(t);
          i && this.m_rgUnreadNotificationIDs.push(t.notification_id);
          let r = t.notification_type;
          switch (r) {
            case l.Vv.k_ESteamNotificationType_Comment:
              {
                const a = Te(t);
                if (!a) return;
                const n =
                  "comment_" +
                  a.owner_steam_id?.GetAccountID() +
                  "_" +
                  a.forum_id +
                  "_" +
                  a.topic_id;
                let s = e.findIndex((e) => e.rollup_key == n);
                if (-1 == s)
                  e.push({
                    type: r,
                    rollup_key: n,
                    item: t,
                    rollup_count: 1,
                    timestamp: t.timestamp,
                    rgunread: t.read ? [] : [t.notification_id],
                    rgread: t.read ? [t.notification_id] : [],
                    bSendToCallbackAsNew: i,
                    url: be(a),
                  });
                else {
                  let r = e[s];
                  this.BReplaceRollupItem(t, r.item) &&
                    ((r.url = be(a)),
                    (r.item = t),
                    (r.timestamp = t.timestamp),
                    (r.bSendToCallbackAsNew = i)),
                    (r.rollup_count = r.rollup_count + 1),
                    t.read
                      ? r.rgread.push(t.notification_id)
                      : r.rgunread.push(t.notification_id);
                }
                a.json_data?.app_id &&
                  P.A.Get().QueueAppRequest(a.json_data.app_id, {
                    include_assets: !0,
                  });
              }
              break;
            case l.Vv.k_ESteamNotificationType_Item:
              const a = Te(t);
              if (a) {
                const n = "item_" + a.appid;
                this.AddNotificationToRollupByAppID(e, t, n, r, i, a.appid);
              }
              break;
            case l.Vv.k_ESteamNotificationType_AsyncGame:
              const n = Te(t)?.appid.toString();
              if (n) {
                const a = "asyncgame_" + n;
                this.AddNotificationToRollupByAppID(e, t, a, r, i, n);
              }
              break;
            case l.Vv.k_ESteamNotificationType_Wishlist:
              const s = Te(t)?.appid;
              s && P.A.Get().QueueAppRequest(s, { include_assets: !0 });
            default:
              e.push({
                type: r,
                rollup_key: t.notification_id,
                item: t,
                timestamp: t.timestamp,
                rgunread: t.read ? [] : [t.notification_id],
                rgread: t.read ? [t.notification_id] : [],
                bSendToCallbackAsNew: i,
              });
          }
        }
        AddNotificationToRollupByAppID(e, t, i, r, a, n) {
          let s = e.findIndex((e) => e.rollup_key == i);
          if (-1 == s)
            e.push({
              type: r,
              rollup_key: i,
              item: t,
              rollup_count: 1,
              timestamp: t.timestamp,
              rgunread: t.read ? [] : [t.notification_id],
              rgread: t.read ? [t.notification_id] : [],
              bSendToCallbackAsNew: a,
            });
          else {
            let i = e[s];
            this.BReplaceRollupItem(t, i.item) &&
              ((i.item = t),
              (i.timestamp = t.timestamp),
              (i.bSendToCallbackAsNew = a)),
              (i.rollup_count = i.rollup_count + 1),
              t.read
                ? i.rgread.push(t.notification_id)
                : i.rgunread.push(t.notification_id);
          }
          P.A.Get().QueueAppRequest(parseInt(n), { include_assets: !0 });
        }
      }
      async function pe(e, t, i, r, a, n = !0, s = !1) {
        if (!t) throw new Error("Invalid steamid for GetSteamNotifications");
        const o = c.w.Init(l.GG);
        o.Body().set_language(i),
          o.Body().set_include_read(n),
          o.Body().set_include_pinned_counts(!0),
          o.Body().set_include_confirmation_count(s);
        const d = await l.Fn.GetSteamNotifications(e, o);
        if (d.GetEResult() !== m.d.k_EResultOK)
          throw (
            (_e(
              `Received error from GetSteamNotifications. Result ${d.GetEResult()}. Transport ${d.Hdr().transport_error()}`,
            ),
            new Error(`Error from GetSteamNotifications: ${d.GetEResult()}`))
          );
        const _ = d.Body().toObject();
        return (
          r &&
            (_.notifications = _.notifications?.filter(
              (e) => !Ie(e.notification_type, r, a),
            )),
          _
        );
      }
      (0, o.Cg)([W.sH], ue.prototype, "m_rgNotificationRollups", void 0),
        (0, o.Cg)([W.sH], ue.prototype, "m_summary", void 0),
        (0, o.Cg)([W.sH], ue.prototype, "m_bLoaded", void 0),
        (0, o.Cg)([W.sH], ue.prototype, "m_nUnviewed", void 0),
        (0, o.Cg)([W.XI], ue.prototype, "ProcessNotifications", null);
      const fe = "ItemMetadata";
      function ge(e) {
        return [
          `${fe}_${e?.steamid}_${e?.appid}_${e?.contextid}_${e?.assetid}`,
        ];
      }
      function ye(e, t, i) {
        let r = Ne(l.Vv.k_ESteamNotificationType_Item, e.body_data);
        r.steamid = t;
        let a = (0, C.I)({
          queryKey: ge(r),
          queryFn: async () =>
            (async function (e, t) {
              if (!(e && e.steamid && e.contextid && e.appid && e.assetid))
                return (
                  de("Item notification missing required attributes"), null
                );
              const i = c.w.Init(z);
              i.Body().set_steamid(e.steamid),
                i.Body().set_contextid(e.contextid),
                i.Body().set_appid(parseInt(e.appid)),
                i.Body().set_get_descriptions(!0),
                i.Body().set_language(L.TS.LANGUAGE);
              let r = new q();
              r.add_assetids(e.assetid), i.Body().set_filters(r);
              const a = await s.GetInventoryItemsWithDescriptions(t, i);
              if (a.GetEResult() !== m.d.k_EResultOK)
                return (
                  de(
                    "Request for steam item metadata did not succeed",
                    a.GetEResult(),
                  ),
                  null
                );
              let n = "";
              const o = await P.A.Get().QueueAppRequest(parseInt(e.appid), {});
              if (o == m.d.k_EResultOK) {
                const t = P.A.Get().GetApp(parseInt(e.appid));
                n = t?.GetName();
              } else de("Failed getting app info", o);
              return {
                app_name: n,
                item_data: a.Body().toObject().descriptions[0],
              };
            })(r, i),
          staleTime: 1 / 0,
        });
        return a.isSuccess ? a.data : null;
      }
      function be(e) {
        let t = `comment/${e.comment_type}/bounce/${e.owner_steam_id.ConvertTo64BitString()}/${e.forum_id}/?feature2=${e.topic_id}`;
        return e.last_post > 0 && (t += "&tscn=" + (e.last_post - 1)), t;
      }
      function Be(e) {
        return e.comment_type == G.R.k_ECommentThreadTypeProfile;
      }
      function Se(e) {
        return e?.bhas_friend;
      }
      function we(e) {
        return e.comment_type == G.R.k_ECommentThreadTypeProfile;
      }
      function Me(e) {
        return Be(e) || Se(e);
      }
      function he(e) {
        return we(e);
      }
      function ve(e) {
        if (!e) return null;
        try {
          return JSON.parse(e);
        } catch (t) {
          me("Steam notification in invalid format:", e);
        }
        return null;
      }
      function Te(e) {
        return Ne(e.notification_type, e.body_data);
      }
      function Re(e) {
        return Ne(e.type, e.item?.body_data);
      }
      function Ne(e, t) {
        let i = ve(t);
        if (!i) return null;
        switch (e) {
          case l.Vv.k_ESteamNotificationType_Gift:
            return i.gifter_account;
          case l.Vv.k_ESteamNotificationType_RequestedGameAdded:
            return {
              responder_steamid: i.responder_steamid,
              package_id: i.package_id,
              bundle_id: i.bundle_id,
            };
          case l.Vv.k_ESteamNotificationType_TradeOffer:
            return parseInt(i.sender);
          case l.Vv.k_ESteamNotificationType_Wishlist:
            return {
              appid: i.appid,
              count: i.count ?? 1,
              appids: i.appids ?? [],
            };
          case l.Vv.k_ESteamNotificationType_AsyncGame:
            return !i.appid ||
              !i.state ||
              (i.state != G.U2.k_EAsyncGameSessionUserStateReadyForAction &&
                i.state != G.U2.k_EAsyncGameSessionUserStateDone)
              ? (me("Async game notification invalid data", t), null)
              : { appid: parseInt(i.appid), state: parseInt(i.state) };
          case l.Vv.k_ESteamNotificationType_Comment:
            let r = {
              owner_steam_id: i.owner_steam_id
                ? new U.b(i.owner_steam_id)
                : null,
              bclan_account: ze(i.bclan_account),
              title: i.title,
              comment: i.text,
              time: i.last_post,
              comment_type: Number(i.type),
              topic_id: i.topic_id,
              forum_id: i.forum_id,
              account_steam_id: i.account_id
                ? U.b.InitFromAccountID(i.account_id)
                : null,
              bhas_friend: ze(i.bhas_friend),
              bis_forum: ze(i.bis_forum),
              last_post: i.last_post,
              bsubscribed: ze(i.subscribed),
              bis_owner: ze(i.bis_owner),
            };
            return (
              i.json_data &&
                (r.json_data = {
                  app_id: parseInt(i.json_data.app_id),
                  file_type: parseInt(i.json_data.file_type),
                  title: i.json_data.title,
                }),
              r
            );
          case l.Vv.k_ESteamNotificationType_FriendInvite:
            return {
              requestorID: parseInt(i.requestor_id),
              state: i.state
                ? parseInt(i.state)
                : d.SX.k_EFriendRelationshipNone,
            };
          case l.Vv.k_ESteamNotificationType_Item:
            return {
              appid: parseInt(i.app_id),
              assetid: i.asset_id ?? "",
              contextid: i.context_id ?? "",
            };
          case l.Vv.k_ESteamNotificationType_SendToPhone:
            return {
              url: i.url ?? "",
              strGameName: i.content_app_name ?? "",
              mediaType: i.media_type ?? "clip",
              secDuration: parseFloat(i.duration_seconds ?? 0),
              nSize: parseInt(i.file_size ?? 0),
              strMachineName: i.machine_name,
              rtExpiration: i.expiration,
              thumbnailURL: i.thumbnail_url,
            };
          default:
            return (
              me(
                "GetCustomNotificationDataByType called with unexpected type:" +
                  e,
                t,
              ),
              null
            );
        }
      }
      function ze(e) {
        if (void 0 === e) return !1;
        if ("number" == typeof e) return e > 0;
        if ("string" == typeof e)
          switch (e.toLowerCase()?.trim()) {
            case "true":
            case "1":
              return !0;
            default:
              return !1;
          }
        return me("notification contained unexpected boolean value"), !1;
      }
      const qe = {
        [l.Vv.k_ESteamNotificationType_Invalid]: {
          rollup_field: void 0,
          eFeature: void 0,
        },
        [l.Vv.k_ESteamNotificationType_Test]: {
          rollup_field: void 0,
          eFeature: void 0,
        },
        [l.Vv.k_ESteamNotificationType_Gift]: {
          rollup_field: "gifts",
          eFeature: V.uX,
        },
        [l.Vv.k_ESteamNotificationType_Comment]: {
          rollup_field: "comments",
          eFeature: V.H9.k_EFeatureCommunity,
        },
        [l.Vv.k_ESteamNotificationType_Item]: {
          rollup_field: "inventory_items",
          eFeature: V.H9.k_EFeatureProfile,
        },
        [l.Vv.k_ESteamNotificationType_FriendInvite]: {
          rollup_field: "invites",
          eFeature: V.H9.k_EFeatureFriends,
        },
        [l.Vv.k_ESteamNotificationType_MajorSale]: {
          rollup_field: "major_sale",
          eFeature: V.H9.k_EFeatureStore,
        },
        [l.Vv.k_ESteamNotificationType_PreloadAvailable]: {
          rollup_field: void 0,
          eFeature: void 0,
        },
        [l.Vv.k_ESteamNotificationType_Wishlist]: {
          rollup_field: "wishlist",
          eFeature: V.H9.k_EFeatureStore,
        },
        [l.Vv.k_ESteamNotificationType_TradeOffer]: {
          rollup_field: "trade_offers",
          eFeature: V.H9.k_EFeatureTrading,
        },
        [l.Vv.k_ESteamNotificationType_General]: {
          rollup_field: "general",
          eFeature: V.uX,
        },
        [l.Vv.k_ESteamNotificationType_HelpRequest]: {
          rollup_field: "help_request_replies",
          eFeature: V.uX,
        },
        [l.Vv.k_ESteamNotificationType_AsyncGame]: {
          rollup_field: "async_game_updates",
          eFeature: V.uX,
        },
        [l.Vv.k_ESteamNotificationType_ModeratorMsg]: {
          rollup_field: "moderator_messages",
          eFeature: V.H9.k_EFeatureCommunity,
        },
        [l.Vv.k_ESteamNotificationType_ParentalFeatureAccessRequest]: {
          rollup_field: "parental_feature_requests",
          eFeature: V.uX,
        },
        [l.Vv.k_ESteamNotificationType_FamilyInvite]: {
          rollup_field: "family_invites",
          eFeature: V.uX,
        },
        [l.Vv.k_ESteamNotificationType_FamilyPurchaseRequest]: {
          rollup_field: "family_purchase_requests",
          eFeature: V.uX,
        },
        [l.Vv.k_ESteamNotificationType_ParentalPlaytimeRequest]: {
          rollup_field: "parental_playtime_requests",
          eFeature: V.uX,
        },
        [l.Vv.k_ESteamNotificationType_FamilyPurchaseRequestResponse]: {
          rollup_field: "family_purchase_request_responses",
          eFeature: V.uX,
        },
        [l.Vv.k_ESteamNotificationType_ParentalFeatureAccessResponse]: {
          rollup_field: "parental_feature_access_responses",
          eFeature: V.uX,
        },
        [l.Vv.k_ESteamNotificationType_ParentalPlaytimeResponse]: {
          rollup_field: "parental_playtime_responses",
          eFeature: V.uX,
        },
        [l.Vv.k_ESteamNotificationType_RequestedGameAdded]: {
          rollup_field: "requested_game_added",
          eFeature: V.uX,
        },
        [l.Vv.k_ESteamNotificationType_SendToPhone]: {
          rollup_field: void 0,
          eFeature: V.uX,
        },
        [l.Vv.k_ESteamNotificationType_ClipDownloaded]: {
          rollup_field: void 0,
          eFeature: V.uX,
        },
        [l.Vv.k_ESteamNotificationType_PlaytestInvite]: {
          rollup_field: "playtest_invites",
          eFeature: V.H9.k_EFeatureStore,
        },
        [l.Vv.k_ESteamNotificationType_TradeReversal]: {
          rollup_field: void 0,
          eFeature: V.H9.k_EFeatureTrading,
        },
      };
      function ke(e) {
        const t = qe[e];
        return (0, J.wT)(!!t, `Missing notification type data for ${e}`), t;
      }
      function Ie(e, t, i) {
        if (!t) return !1;
        const r = ke(e);
        return (0, K.EC)(t, r?.eFeature ?? V.JC, i);
      }
      function Ee(e, t, i) {
        (0, W.h5)(() => {
          const r = ke(t);
          r?.rollup_field &&
            (e[r.rollup_field] = Math.max(0, e[r.rollup_field] + i));
        });
      }
      function Fe(e) {
        return !e.viewed || e.viewed + le > (0, D._2)();
      }
      function Oe(e) {
        return e.viewed && e.viewed + oe < (0, D._2)();
      }
    },
  },
]);

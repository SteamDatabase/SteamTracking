const CLSTAMP = 9436633;

import {
  a as L,
  b as a,
  c as n,
  d as p,
  e as d,
  f as l,
  g as C,
  h as g,
  i as u,
  u as _,
} from "./chunk-YHSVHEUD.js";
import { d as N } from "./chunk-ZNRRU3QM.js";
var i = N(L());
var s = i.Message,
  P = class e extends s {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid_requester || u(e.M()),
        s.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              steamid_requester: {
                n: 1,
                br: a.readFixed64String,
                bw: n.writeFixed64String,
              },
              purchase_request_id: {
                n: 2,
                br: a.readUint64String,
                bw: n.writeUint64String,
              },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = p(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return l(e.M(), t, r);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new i.BinaryReader(t),
        o = new e();
      return e.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return C(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new i.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      g(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new i.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CShoppingCart_CreateNew_Request";
    }
  },
  B = class e extends s {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.gidshoppingcart || u(e.M()),
        s.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              gidshoppingcart: {
                n: 1,
                br: a.readUint64String,
                bw: n.writeUint64String,
              },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = p(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return l(e.M(), t, r);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new i.BinaryReader(t),
        o = new e();
      return e.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return C(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new i.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      g(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new i.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CShoppingCart_CreateNew_Response";
    }
  },
  b = class e extends s {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.amount || u(e.M()),
        s.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              amount: { n: 1, br: a.readInt64String, bw: n.writeInt64String },
              currencycode: { n: 2, br: a.readUint32, bw: n.writeUint32 },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = p(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return l(e.M(), t, r);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new i.BinaryReader(t),
        o = new e();
      return e.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return C(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new i.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      g(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new i.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CShoppingCart_Amount";
    }
  },
  h = class e extends s {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.packageid || u(e.M()),
        s.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              packageid: { n: 1, br: a.readUint32, bw: n.writeUint32 },
              costwhenadded: { n: 2, c: b },
              is_gift: { n: 3, br: a.readBool, bw: n.writeBool },
              gidbundle: {
                n: 4,
                br: a.readUint64String,
                bw: n.writeUint64String,
              },
              quantity: { n: 5, br: a.readUint32, bw: n.writeUint32 },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = p(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return l(e.M(), t, r);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new i.BinaryReader(t),
        o = new e();
      return e.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return C(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new i.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      g(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new i.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CShoppingCart_PackageItem";
    }
  },
  y = class e extends s {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.walletcredit || u(e.M()),
        s.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = { proto: e, fields: { walletcredit: { n: 1, c: b } } }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = p(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return l(e.M(), t, r);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new i.BinaryReader(t),
        o = new e();
      return e.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return C(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new i.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      g(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new i.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CShoppingCart_WalletCreditItem";
    }
  },
  R = class e extends s {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.couponid || u(e.M()),
        s.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              couponid: { n: 1, br: a.readUint32, bw: n.writeUint32 },
              gidcoupontarget: {
                n: 2,
                br: a.readUint64String,
                bw: n.writeUint64String,
              },
              packageid: { n: 3, br: a.readUint32, bw: n.writeUint32 },
              gidcoupon: {
                n: 4,
                br: a.readUint64String,
                bw: n.writeUint64String,
              },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = p(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return l(e.M(), t, r);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new i.BinaryReader(t),
        o = new e();
      return e.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return C(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new i.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      g(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new i.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CShoppingCart_CouponItem";
    }
  },
  f = class e extends s {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.microtxnappid || u(e.M()),
        s.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              microtxnappid: { n: 1, br: a.readUint32, bw: n.writeUint32 },
              microtxnassetclassid: {
                n: 2,
                br: a.readUint64String,
                bw: n.writeUint64String,
              },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = p(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return l(e.M(), t, r);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new i.BinaryReader(t),
        o = new e();
      return e.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return C(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new i.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      g(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new i.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CShoppingCart_MicroTxnAsset";
    }
  },
  v = class e extends s {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.bundleid || u(e.M()),
        s.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              bundleid: { n: 1, br: a.readUint32, bw: n.writeUint32 },
              quantity: { n: 2, br: a.readUint32, bw: n.writeUint32 },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = p(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return l(e.M(), t, r);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new i.BinaryReader(t),
        o = new e();
      return e.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return C(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new i.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      g(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new i.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CShoppingCart_BundleItem";
    }
  },
  w = class e extends s {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.reward_id || u(e.M()),
        s.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: { reward_id: { n: 1, br: a.readInt32, bw: n.writeInt32 } },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = p(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return l(e.M(), t, r);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new i.BinaryReader(t),
        o = new e();
      return e.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return C(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new i.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      g(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new i.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CShoppingCart_LoyaltyRewardItem";
    }
  },
  H = class e extends s {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.gidparent || u(e.M()),
        s.initialize(this, t, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              gidparent: {
                n: 1,
                br: a.readUint64String,
                bw: n.writeUint64String,
              },
              children: { n: 2, c: e, r: !0, q: !0 },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = p(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return l(e.M(), t, r);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new i.BinaryReader(t),
        o = new e();
      return e.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return C(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new i.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      g(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new i.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CShoppingCart_RelationShip";
    }
  },
  M = class e extends s {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.couponid || u(e.M()),
        s.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              couponid: { n: 1, br: a.readUint32, bw: n.writeUint32 },
              gidcoupon: {
                n: 2,
                br: a.readUint64String,
                bw: n.writeUint64String,
              },
              gidlineitem: {
                n: 3,
                br: a.readUint64String,
                bw: n.writeUint64String,
              },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = p(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return l(e.M(), t, r);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new i.BinaryReader(t),
        o = new e();
      return e.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return C(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new i.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      g(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new i.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CShoppingCart_AvailableCoupon";
    }
  },
  j = class e extends s {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.gidlineitem || u(e.M()),
        s.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              gidlineitem: {
                n: 1,
                br: a.readUint64String,
                bw: n.writeUint64String,
              },
              package_item: { n: 2, c: h },
              wallet_credit_item: { n: 3, c: y },
              coupon_item: { n: 4, c: R },
              micro_item: { n: 5, c: f },
              bundle_item: { n: 7, c: v },
              loyalty_item: { n: 8, c: w },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = p(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return l(e.M(), t, r);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new i.BinaryReader(t),
        o = new e();
      return e.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return C(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new i.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      g(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new i.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CShoppingCart_Item";
    }
  },
  I = class e extends s {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.coupons || u(e.M()),
        s.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: { coupons: { n: 1, c: M, r: !0, q: !0 } },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = p(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return l(e.M(), t, r);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new i.BinaryReader(t),
        o = new e();
      return e.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return C(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new i.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      g(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new i.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CShoppingCart_Potentials";
    }
  },
  z = class e extends s {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.gidshoppingcart || u(e.M()),
        s.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              gidshoppingcart: {
                n: 1,
                br: a.readUint64String,
                bw: n.writeUint64String,
              },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = p(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return l(e.M(), t, r);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new i.BinaryReader(t),
        o = new e();
      return e.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return C(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new i.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      g(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new i.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CShoppingCart_GetContents_Request";
    }
  },
  S = class e extends s {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.lineitems || u(e.M()),
        s.initialize(this, t, 0, -1, [1, 2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              lineitems: { n: 1, c: j, r: !0, q: !0 },
              treeview: { n: 2, c: H, r: !0, q: !0 },
              potentials: { n: 3, c: I },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = p(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return l(e.M(), t, r);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new i.BinaryReader(t),
        o = new e();
      return e.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return C(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new i.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      g(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new i.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CShoppingCart_Contents";
    }
  },
  A = class e extends s {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.gidshoppingcart || u(e.M()),
        s.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              gidshoppingcart: {
                n: 1,
                br: a.readUint64String,
                bw: n.writeUint64String,
              },
              contents: { n: 2, c: S },
              time_created: { n: 3, br: a.readUint32, bw: n.writeUint32 },
              merged_into_account_cart: {
                n: 4,
                br: a.readBool,
                bw: n.writeBool,
              },
              steamid_requester: {
                n: 5,
                br: a.readFixed64String,
                bw: n.writeFixed64String,
              },
              purchase_request_id: {
                n: 6,
                br: a.readUint64String,
                bw: n.writeUint64String,
              },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = p(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return l(e.M(), t, r);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new i.BinaryReader(t),
        o = new e();
      return e.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return C(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new i.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      g(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new i.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CShoppingCart_GetContents_Response";
    }
  },
  W = class e extends s {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.gidshoppingcart || u(e.M()),
        s.initialize(this, t, 0, -1, [4], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              gidshoppingcart: {
                n: 1,
                br: a.readUint64String,
                bw: n.writeUint64String,
              },
              browserid: {
                n: 2,
                br: a.readUint64String,
                bw: n.writeUint64String,
              },
              cart_items: { n: 4, c: h, r: !0, q: !0 },
              store_country_code: { n: 5, br: a.readString, bw: n.writeString },
              beta_mode: { n: 6, d: !1, br: a.readBool, bw: n.writeBool },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = p(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return l(e.M(), t, r);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new i.BinaryReader(t),
        o = new e();
      return e.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return C(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new i.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      g(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new i.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CShoppingCart_AddPackages_Request";
    }
  },
  q = class e extends s {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.gidshoppingcart || u(e.M()),
        s.initialize(this, t, 0, -1, [3], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              gidshoppingcart: {
                n: 1,
                br: a.readUint64String,
                bw: n.writeUint64String,
              },
              contents: { n: 2, c: S },
              result_details: {
                n: 3,
                r: !0,
                q: !0,
                br: a.readUint32,
                pbr: a.readPackedUint32,
                bw: n.writeRepeatedUint32,
              },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = p(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return l(e.M(), t, r);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new i.BinaryReader(t),
        o = new e();
      return e.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return C(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new i.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      g(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new i.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CShoppingCart_AddPackages_Response";
    }
  },
  F = class e extends s {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.gidshoppingcart || u(e.M()),
        s.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              gidshoppingcart: {
                n: 1,
                br: a.readUint64String,
                bw: n.writeUint64String,
              },
              gidlineitem: {
                n: 2,
                br: a.readUint64String,
                bw: n.writeUint64String,
              },
              quantity: { n: 3, br: a.readUint32, bw: n.writeUint32 },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = p(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return l(e.M(), t, r);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new i.BinaryReader(t),
        o = new e();
      return e.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return C(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new i.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      g(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new i.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CShoppingCart_UpdatePackageQuantity_Request";
    }
  },
  x = class e extends s {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.gidshoppingcart || u(e.M()),
        s.initialize(this, t, 0, -1, [3], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              gidshoppingcart: {
                n: 1,
                br: a.readUint64String,
                bw: n.writeUint64String,
              },
              contents: { n: 2, c: S },
              result_details: {
                n: 3,
                r: !0,
                q: !0,
                br: a.readUint32,
                pbr: a.readPackedUint32,
                bw: n.writeRepeatedUint32,
              },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = p(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return l(e.M(), t, r);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new i.BinaryReader(t),
        o = new e();
      return e.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return C(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new i.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      g(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new i.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CShoppingCart_UpdatePackageQuantity_Response";
    }
  },
  U = class e extends s {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.gidshoppingcart || u(e.M()),
        s.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              gidshoppingcart: {
                n: 1,
                br: a.readUint64String,
                bw: n.writeUint64String,
              },
              bundleid: { n: 2, br: a.readUint32, bw: n.writeUint32 },
              browserid: {
                n: 3,
                br: a.readUint64String,
                bw: n.writeUint64String,
              },
              store_country: { n: 5, br: a.readString, bw: n.writeString },
              quantity: { n: 6, br: a.readUint32, bw: n.writeUint32 },
              beta_mode: { n: 7, d: !1, br: a.readBool, bw: n.writeBool },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = p(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return l(e.M(), t, r);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new i.BinaryReader(t),
        o = new e();
      return e.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return C(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new i.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      g(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new i.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CShoppingCart_AddBundle_Request";
    }
  },
  O = class e extends s {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.contents || u(e.M()),
        s.initialize(this, t, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              contents: { n: 1, c: S },
              result_details: {
                n: 2,
                r: !0,
                q: !0,
                br: a.readUint32,
                pbr: a.readPackedUint32,
                bw: n.writeRepeatedUint32,
              },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = p(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return l(e.M(), t, r);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new i.BinaryReader(t),
        o = new e();
      return e.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return C(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new i.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      g(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new i.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CShoppingCart_AddBundle_Response";
    }
  },
  T = class e extends s {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.gidshoppingcart || u(e.M()),
        s.initialize(this, t, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              gidshoppingcart: {
                n: 1,
                br: a.readUint64String,
                bw: n.writeUint64String,
              },
              gidlineitems: {
                n: 2,
                r: !0,
                q: !0,
                br: a.readUint64String,
                pbr: a.readPackedUint64String,
                bw: n.writeRepeatedUint64String,
              },
              browserid: {
                n: 3,
                br: a.readUint64String,
                bw: n.writeUint64String,
              },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = p(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return l(e.M(), t, r);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new i.BinaryReader(t),
        o = new e();
      return e.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return C(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new i.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      g(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new i.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CShoppingCart_RemoveLineItems_Request";
    }
  },
  k = class e extends s {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.contents || u(e.M()),
        s.initialize(this, t, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              contents: { n: 1, c: S },
              result_details: {
                n: 2,
                r: !0,
                q: !0,
                br: a.readUint32,
                pbr: a.readPackedUint32,
                bw: n.writeRepeatedUint32,
              },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = p(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return l(e.M(), t, r);
    }
    static fromObject(t) {
      return d(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new i.BinaryReader(t),
        o = new e();
      return e.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return C(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new i.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      g(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new i.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CShoppingCart_RemoveLineItems_Response";
    }
  },
  G;
((K) => {
  function e(m, c) {
    return m.SendMsg("ShoppingCart.CreateNewShoppingCart#1", _(P, c), B, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
    });
  }
  K.CreateNewShoppingCart = e;
  function t(m, c) {
    return m.SendMsg("ShoppingCart.GetShoppingCartContents#1", _(z, c), A, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
    });
  }
  K.GetShoppingCartContents = t;
  function r(m, c) {
    return m.SendMsg("ShoppingCart.AddPackages#1", _(W, c), q, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
    });
  }
  K.AddPackages = r;
  function o(m, c) {
    return m.SendMsg("ShoppingCart.UpdatePackageQuantity#1", _(F, c), x, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
    });
  }
  K.UpdatePackageQuantity = o;
  function Q(m, c) {
    return m.SendMsg("ShoppingCart.AddBundle#1", _(U, c), O, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
    });
  }
  K.AddBundle = Q;
  function D(m, c) {
    return m.SendMsg("ShoppingCart.RemoveLineItems#1", _(T, c), k, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
    });
  }
  K.RemoveLineItems = D;
})((G ||= {}));
export { z as a, T as b, G as c };

const CLSTAMP = 9643551;

import {
  a as N,
  b as a,
  c as n,
  d as s,
  e as p,
  f as d,
  g as l,
  h as C,
  i as g,
  u as c,
} from "./chunk-HGJJYMFS.js";
import { d as k } from "./chunk-6W5PXMM2.js";
var i = k(N());
var b = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid_requester || g(e.M()),
        i.Message.initialize(this, t, 0, -1, void 0, null);
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
      return e.sm_mbf || (e.sm_mbf = s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return d(e.M(), t, r);
    }
    static fromObject(t) {
      return p(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new i.default.BinaryReader(t),
        o = new e();
      return e.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return l(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      C(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CShoppingCart_CreateNew_Request";
    }
  },
  P = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.gidshoppingcart || g(e.M()),
        i.Message.initialize(this, t, 0, -1, void 0, null);
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
      return e.sm_mbf || (e.sm_mbf = s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return d(e.M(), t, r);
    }
    static fromObject(t) {
      return p(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new i.default.BinaryReader(t),
        o = new e();
      return e.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return l(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      C(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CShoppingCart_CreateNew_Response";
    }
  },
  S = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.amount || g(e.M()),
        i.Message.initialize(this, t, 0, -1, void 0, null);
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
      return e.sm_mbf || (e.sm_mbf = s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return d(e.M(), t, r);
    }
    static fromObject(t) {
      return p(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new i.default.BinaryReader(t),
        o = new e();
      return e.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return l(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      C(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CShoppingCart_Amount";
    }
  },
  h = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.packageid || g(e.M()),
        i.Message.initialize(this, t, 0, -1, void 0, null);
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
              costwhenadded: { n: 2, c: S },
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
      return e.sm_mbf || (e.sm_mbf = s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return d(e.M(), t, r);
    }
    static fromObject(t) {
      return p(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new i.default.BinaryReader(t),
        o = new e();
      return e.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return l(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      C(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CShoppingCart_PackageItem";
    }
  },
  B = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.walletcredit || g(e.M()),
        i.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = { proto: e, fields: { walletcredit: { n: 1, c: S } } }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return d(e.M(), t, r);
    }
    static fromObject(t) {
      return p(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new i.default.BinaryReader(t),
        o = new e();
      return e.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return l(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      C(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CShoppingCart_WalletCreditItem";
    }
  },
  y = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.couponid || g(e.M()),
        i.Message.initialize(this, t, 0, -1, void 0, null);
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
      return e.sm_mbf || (e.sm_mbf = s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return d(e.M(), t, r);
    }
    static fromObject(t) {
      return p(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new i.default.BinaryReader(t),
        o = new e();
      return e.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return l(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      C(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CShoppingCart_CouponItem";
    }
  },
  R = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.microtxnappid || g(e.M()),
        i.Message.initialize(this, t, 0, -1, void 0, null);
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
      return e.sm_mbf || (e.sm_mbf = s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return d(e.M(), t, r);
    }
    static fromObject(t) {
      return p(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new i.default.BinaryReader(t),
        o = new e();
      return e.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return l(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      C(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CShoppingCart_MicroTxnAsset";
    }
  },
  f = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.bundleid || g(e.M()),
        i.Message.initialize(this, t, 0, -1, void 0, null);
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
      return e.sm_mbf || (e.sm_mbf = s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return d(e.M(), t, r);
    }
    static fromObject(t) {
      return p(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new i.default.BinaryReader(t),
        o = new e();
      return e.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return l(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      C(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CShoppingCart_BundleItem";
    }
  },
  v = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.reward_id || g(e.M()),
        i.Message.initialize(this, t, 0, -1, void 0, null);
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
      return e.sm_mbf || (e.sm_mbf = s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return d(e.M(), t, r);
    }
    static fromObject(t) {
      return p(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new i.default.BinaryReader(t),
        o = new e();
      return e.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return l(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      C(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CShoppingCart_LoyaltyRewardItem";
    }
  },
  w = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.gidparent || g(e.M()),
        i.Message.initialize(this, t, 0, -1, [2], null);
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
      return e.sm_mbf || (e.sm_mbf = s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return d(e.M(), t, r);
    }
    static fromObject(t) {
      return p(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new i.default.BinaryReader(t),
        o = new e();
      return e.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return l(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      C(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CShoppingCart_RelationShip";
    }
  },
  H = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.couponid || g(e.M()),
        i.Message.initialize(this, t, 0, -1, void 0, null);
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
      return e.sm_mbf || (e.sm_mbf = s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return d(e.M(), t, r);
    }
    static fromObject(t) {
      return p(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new i.default.BinaryReader(t),
        o = new e();
      return e.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return l(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      C(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CShoppingCart_AvailableCoupon";
    }
  },
  M = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.gidlineitem || g(e.M()),
        i.Message.initialize(this, t, 0, -1, void 0, null);
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
              wallet_credit_item: { n: 3, c: B },
              coupon_item: { n: 4, c: y },
              micro_item: { n: 5, c: R },
              bundle_item: { n: 7, c: f },
              loyalty_item: { n: 8, c: v },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return d(e.M(), t, r);
    }
    static fromObject(t) {
      return p(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new i.default.BinaryReader(t),
        o = new e();
      return e.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return l(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      C(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CShoppingCart_Item";
    }
  },
  I = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.coupons || g(e.M()),
        i.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: { coupons: { n: 1, c: H, r: !0, q: !0 } },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return d(e.M(), t, r);
    }
    static fromObject(t) {
      return p(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new i.default.BinaryReader(t),
        o = new e();
      return e.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return l(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      C(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CShoppingCart_Potentials";
    }
  },
  z = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.gidshoppingcart || g(e.M()),
        i.Message.initialize(this, t, 0, -1, void 0, null);
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
      return e.sm_mbf || (e.sm_mbf = s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return d(e.M(), t, r);
    }
    static fromObject(t) {
      return p(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new i.default.BinaryReader(t),
        o = new e();
      return e.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return l(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      C(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CShoppingCart_GetContents_Request";
    }
  },
  _ = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.lineitems || g(e.M()),
        i.Message.initialize(this, t, 0, -1, [1, 2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              lineitems: { n: 1, c: M, r: !0, q: !0 },
              treeview: { n: 2, c: w, r: !0, q: !0 },
              potentials: { n: 3, c: I },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return d(e.M(), t, r);
    }
    static fromObject(t) {
      return p(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new i.default.BinaryReader(t),
        o = new e();
      return e.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return l(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      C(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CShoppingCart_Contents";
    }
  },
  j = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.gidshoppingcart || g(e.M()),
        i.Message.initialize(this, t, 0, -1, void 0, null);
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
              contents: { n: 2, c: _ },
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
      return e.sm_mbf || (e.sm_mbf = s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return d(e.M(), t, r);
    }
    static fromObject(t) {
      return p(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new i.default.BinaryReader(t),
        o = new e();
      return e.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return l(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      C(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CShoppingCart_GetContents_Response";
    }
  },
  A = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.gidshoppingcart || g(e.M()),
        i.Message.initialize(this, t, 0, -1, [4], null);
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
      return e.sm_mbf || (e.sm_mbf = s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return d(e.M(), t, r);
    }
    static fromObject(t) {
      return p(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new i.default.BinaryReader(t),
        o = new e();
      return e.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return l(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      C(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CShoppingCart_AddPackages_Request";
    }
  },
  W = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.gidshoppingcart || g(e.M()),
        i.Message.initialize(this, t, 0, -1, [3], null);
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
              contents: { n: 2, c: _ },
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
      return e.sm_mbf || (e.sm_mbf = s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return d(e.M(), t, r);
    }
    static fromObject(t) {
      return p(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new i.default.BinaryReader(t),
        o = new e();
      return e.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return l(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      C(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CShoppingCart_AddPackages_Response";
    }
  },
  q = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.gidshoppingcart || g(e.M()),
        i.Message.initialize(this, t, 0, -1, void 0, null);
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
      return e.sm_mbf || (e.sm_mbf = s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return d(e.M(), t, r);
    }
    static fromObject(t) {
      return p(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new i.default.BinaryReader(t),
        o = new e();
      return e.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return l(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      C(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CShoppingCart_UpdatePackageQuantity_Request";
    }
  },
  F = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.gidshoppingcart || g(e.M()),
        i.Message.initialize(this, t, 0, -1, [3], null);
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
              contents: { n: 2, c: _ },
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
      return e.sm_mbf || (e.sm_mbf = s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return d(e.M(), t, r);
    }
    static fromObject(t) {
      return p(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new i.default.BinaryReader(t),
        o = new e();
      return e.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return l(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      C(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CShoppingCart_UpdatePackageQuantity_Response";
    }
  },
  x = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.gidshoppingcart || g(e.M()),
        i.Message.initialize(this, t, 0, -1, void 0, null);
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
      return e.sm_mbf || (e.sm_mbf = s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return d(e.M(), t, r);
    }
    static fromObject(t) {
      return p(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new i.default.BinaryReader(t),
        o = new e();
      return e.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return l(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      C(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CShoppingCart_AddBundle_Request";
    }
  },
  U = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.contents || g(e.M()),
        i.Message.initialize(this, t, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              contents: { n: 1, c: _ },
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
      return e.sm_mbf || (e.sm_mbf = s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return d(e.M(), t, r);
    }
    static fromObject(t) {
      return p(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new i.default.BinaryReader(t),
        o = new e();
      return e.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return l(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      C(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CShoppingCart_AddBundle_Response";
    }
  },
  O = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.gidshoppingcart || g(e.M()),
        i.Message.initialize(this, t, 0, -1, [2], null);
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
      return e.sm_mbf || (e.sm_mbf = s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return d(e.M(), t, r);
    }
    static fromObject(t) {
      return p(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new i.default.BinaryReader(t),
        o = new e();
      return e.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return l(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      C(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CShoppingCart_RemoveLineItems_Request";
    }
  },
  T = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.contents || g(e.M()),
        i.Message.initialize(this, t, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              contents: { n: 1, c: _ },
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
      return e.sm_mbf || (e.sm_mbf = s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return d(e.M(), t, r);
    }
    static fromObject(t) {
      return p(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new i.default.BinaryReader(t),
        o = new e();
      return e.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return l(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      C(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CShoppingCart_RemoveLineItems_Response";
    }
  },
  L;
((D) => {
  function e(u, m) {
    return u.SendMsg("ShoppingCart.CreateNewShoppingCart#1", c(b, m), P, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
    });
  }
  D.CreateNewShoppingCart = e;
  function t(u, m) {
    return u.SendMsg("ShoppingCart.GetShoppingCartContents#1", c(z, m), j, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
    });
  }
  D.GetShoppingCartContents = t;
  function r(u, m) {
    return u.SendMsg("ShoppingCart.AddPackages#1", c(A, m), W, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
    });
  }
  D.AddPackages = r;
  function o(u, m) {
    return u.SendMsg("ShoppingCart.UpdatePackageQuantity#1", c(q, m), F, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
    });
  }
  D.UpdatePackageQuantity = o;
  function G(u, m) {
    return u.SendMsg("ShoppingCart.AddBundle#1", c(x, m), U, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
    });
  }
  D.AddBundle = G;
  function Q(u, m) {
    return u.SendMsg("ShoppingCart.RemoveLineItems#1", c(O, m), T, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
    });
  }
  D.RemoveLineItems = Q;
})((L ||= {}));
export { z as a, O as b, L as c };

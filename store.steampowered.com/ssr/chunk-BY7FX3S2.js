const CLSTAMP = 9749541;

import { a as xe, c as qe } from "./chunk-BKXHUX3G.js";
import { a as We } from "./chunk-GPJXKMFY.js";
import { c as je, d as Oe, e as Te, f as z } from "./chunk-G5FRIKZ6.js";
import {
  a as F,
  b as o,
  c as a,
  d as c,
  e as u,
  f as d,
  g as l,
  h as p,
  i as C,
  t as S,
  u as b,
  w as Ge,
} from "./chunk-2KDUMMFJ.js";
import { e as Se, q as N, u as ze } from "./chunk-EY4VF4IK.js";
import { j as ke, k as He, n as H, p as Fe } from "./chunk-342QBAC3.js";
import { a as Je } from "./chunk-RVWZRRQ2.js";
import { e as I } from "./chunk-RY4G6IZ4.js";
var n = I(F());
var m = I(F(), 1);
var A = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.accountid_giftee || C(e.M()),
        m.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              accountid_giftee: { n: 1, br: o.readInt32, bw: a.writeInt32 },
              gift_message: { n: 2, c: L },
              time_scheduled_send: { n: 3, br: o.readInt32, bw: a.writeInt32 },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = c(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return d(e.M(), t, r);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new m.default.BinaryReader(t),
        i = new e();
      return e.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return l(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new m.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      p(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new m.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CartGiftInfo";
    }
  },
  L = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.gifteename || C(e.M()),
        m.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              gifteename: { n: 1, br: o.readString, bw: a.writeString },
              message: { n: 2, br: o.readString, bw: a.writeString },
              sentiment: { n: 3, br: o.readString, bw: a.writeString },
              signature: { n: 4, br: o.readString, bw: a.writeString },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = c(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return d(e.M(), t, r);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new m.default.BinaryReader(t),
        i = new e();
      return e.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return l(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new m.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      p(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new m.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CartGiftMessage";
    }
  },
  g = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.amount_in_cents || C(e.M()),
        m.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              amount_in_cents: {
                n: 1,
                br: o.readInt64String,
                bw: a.writeInt64String,
              },
              currency_code: { n: 2, br: o.readInt32, bw: a.writeInt32 },
              formatted_amount: { n: 3, br: o.readString, bw: a.writeString },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = c(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return d(e.M(), t, r);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new m.default.BinaryReader(t),
        i = new e();
      return e.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return l(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new m.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      p(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new m.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CartAmount";
    }
  },
  M = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.couponid || C(e.M()),
        m.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              couponid: { n: 1, br: o.readUint32, bw: a.writeUint32 },
              gidcoupon: {
                n: 2,
                br: o.readUint64String,
                bw: a.writeUint64String,
              },
              title: { n: 5, br: o.readString, bw: a.writeString },
              coupon_description: { n: 6, br: o.readString, bw: a.writeString },
              large_icon_url: { n: 7, br: o.readString, bw: a.writeString },
              discount_pct: { n: 8, br: o.readInt32, bw: a.writeInt32 },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = c(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return d(e.M(), t, r);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new m.default.BinaryReader(t),
        i = new e();
      return e.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return l(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new m.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      p(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new m.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CartCoupon";
    }
  };
var B = I(F(), 1);
var U = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.clanid || C(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              clanid: { n: 1, br: o.readUint32, bw: a.writeUint32 },
              listid: { n: 2, br: o.readUint64String, bw: a.writeUint64String },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = c(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return d(e.M(), t, r);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new B.default.BinaryReader(t),
        i = new e();
      return e.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return l(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new B.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      p(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new B.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CUserInterface_CuratorData";
    }
  },
  k = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.domain || C(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              domain: { n: 1, br: o.readString, bw: a.writeString },
              controller: { n: 2, br: o.readString, bw: a.writeString },
              method: { n: 3, br: o.readString, bw: a.writeString },
              submethod: { n: 4, br: o.readString, bw: a.writeString },
              feature: { n: 5, br: o.readString, bw: a.writeString },
              depth: { n: 6, br: o.readUint32, bw: a.writeUint32 },
              countrycode: { n: 7, br: o.readString, bw: a.writeString },
              webkey: { n: 8, br: o.readUint64String, bw: a.writeUint64String },
              is_client: { n: 9, br: o.readBool, bw: a.writeBool },
              curator_data: { n: 10, c: U },
              is_likely_bot: { n: 11, br: o.readBool, bw: a.writeBool },
              is_utm: { n: 12, br: o.readBool, bw: a.writeBool },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = c(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return d(e.M(), t, r);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new B.default.BinaryReader(t),
        i = new e();
      return e.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return l(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new B.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      p(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new B.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CUserInterface_NavData";
    }
  };
var q = class e extends n.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.validation_failure || C(e.M()),
        n.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              validation_failure: {
                n: 1,
                d: 0,
                br: o.readEnum,
                bw: a.writeEnum,
              },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = c(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return d(e.M(), t, r);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new n.default.BinaryReader(t),
        i = new e();
      return e.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return l(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new n.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      p(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new n.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "AccountCartValidationDetails";
    }
  },
  j = class e extends n.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.is_gift || C(e.M()),
        n.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              is_gift: { n: 1, br: o.readBool, bw: a.writeBool },
              is_private: { n: 2, br: o.readBool, bw: a.writeBool },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = c(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return d(e.M(), t, r);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new n.default.BinaryReader(t),
        i = new e();
      return e.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return l(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new n.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      p(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new n.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "AccountCartLineItemFlags";
    }
  },
  E = class e extends n.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.line_item_id || C(e.M()),
        n.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              line_item_id: {
                n: 1,
                br: o.readUint64String,
                bw: a.writeUint64String,
              },
              type: { n: 2, br: o.readEnum, bw: a.writeEnum },
              packageid: { n: 3, br: o.readUint32, bw: a.writeUint32 },
              bundleid: { n: 4, br: o.readUint32, bw: a.writeUint32 },
              is_valid: { n: 8, br: o.readBool, bw: a.writeBool },
              validation_details: { n: 9, c: q },
              time_added: { n: 10, br: o.readUint32, bw: a.writeUint32 },
              price_when_added: { n: 11, c: g },
              gift_info: { n: 12, c: A },
              flags: { n: 13, c: j },
              gidcoupon_applied: {
                n: 14,
                br: o.readUint64String,
                bw: a.writeUint64String,
              },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = c(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return d(e.M(), t, r);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new n.default.BinaryReader(t),
        i = new e();
      return e.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return l(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new n.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      p(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new n.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "AccountCartLineItem";
    }
  },
  h = class e extends n.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.line_items || C(e.M()),
        n.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              line_items: { n: 1, c: E, r: !0, q: !0 },
              subtotal: { n: 2, c: g },
              is_valid: { n: 3, br: o.readBool, bw: a.writeBool },
              validation_details: { n: 4, c: q },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = c(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return d(e.M(), t, r);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new n.default.BinaryReader(t),
        i = new e();
      return e.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return l(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new n.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      p(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new n.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "AccountCartContents";
    }
  },
  O = class e extends n.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.user_country || C(e.M()),
        n.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              user_country: { n: 1, br: o.readString, bw: a.writeString },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = c(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return d(e.M(), t, r);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new n.default.BinaryReader(t),
        i = new e();
      return e.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return l(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new n.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      p(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new n.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CAccountCart_GetCart_Request";
    }
  },
  Q = class e extends n.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.cart || C(e.M()),
        n.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m || (e.sm_m = { proto: e, fields: { cart: { n: 1, c: h } } }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = c(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return d(e.M(), t, r);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new n.default.BinaryReader(t),
        i = new e();
      return e.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return l(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new n.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      p(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new n.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CAccountCart_GetCart_Response";
    }
  },
  T = class e extends n.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.user_country || C(e.M()),
        n.Message.initialize(this, t, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              user_country: { n: 1, br: o.readString, bw: a.writeString },
              items: { n: 2, c: K, r: !0, q: !0 },
              navdata: { n: 3, c: k },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = c(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return d(e.M(), t, r);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new n.default.BinaryReader(t),
        i = new e();
      return e.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return l(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new n.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      p(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new n.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CAccountCart_AddItemsToCart_Request";
    }
  },
  K = class e extends n.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.packageid || C(e.M()),
        n.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              packageid: { n: 1, br: o.readUint32, bw: a.writeUint32 },
              bundleid: { n: 2, br: o.readUint32, bw: a.writeUint32 },
              gift_info: { n: 10, c: A },
              flags: { n: 11, c: j },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = c(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return d(e.M(), t, r);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new n.default.BinaryReader(t),
        i = new e();
      return e.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return l(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new n.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      p(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new n.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CAccountCart_AddItemsToCart_Request_ItemToAdd";
    }
  },
  $ = class e extends n.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.line_item_ids || C(e.M()),
        n.Message.initialize(this, t, 0, -1, [1, 3], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              line_item_ids: {
                n: 1,
                r: !0,
                q: !0,
                br: o.readUint64String,
                pbr: o.readPackedUint64String,
                bw: a.writeRepeatedUint64String,
              },
              cart: { n: 2, c: h },
              replaced_packages: {
                n: 3,
                r: !0,
                q: !0,
                br: o.readUint32,
                pbr: o.readPackedUint32,
                bw: a.writeRepeatedUint32,
              },
              existing_billing_agreementid: {
                n: 4,
                br: o.readUint64String,
                bw: a.writeUint64String,
              },
              new_billing_agreement_recurring_packageid: {
                n: 5,
                br: o.readUint32,
                bw: a.writeUint32,
              },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = c(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return d(e.M(), t, r);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new n.default.BinaryReader(t),
        i = new e();
      return e.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return l(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new n.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      p(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new n.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CAccountCart_AddItemsToCart_Response";
    }
  },
  J = class e extends n.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.line_item_id || C(e.M()),
        n.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              line_item_id: {
                n: 1,
                br: o.readUint64String,
                bw: a.writeUint64String,
              },
              user_country: { n: 2, br: o.readString, bw: a.writeString },
              gift_info: { n: 10, c: A },
              flags: { n: 11, c: j },
              apply_gidcoupon: {
                n: 12,
                br: o.readUint64String,
                bw: a.writeUint64String,
              },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = c(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return d(e.M(), t, r);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new n.default.BinaryReader(t),
        i = new e();
      return e.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return l(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new n.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      p(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new n.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CAccountCart_ModifyLineItem_Request";
    }
  },
  X = class e extends n.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.cart || C(e.M()),
        n.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m || (e.sm_m = { proto: e, fields: { cart: { n: 1, c: h } } }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = c(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return d(e.M(), t, r);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new n.default.BinaryReader(t),
        i = new e();
      return e.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return l(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new n.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      p(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new n.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CAccountCart_ModifyLineItem_Response";
    }
  },
  Y = class e extends n.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.line_item_id || C(e.M()),
        n.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              line_item_id: {
                n: 1,
                br: o.readUint64String,
                bw: a.writeUint64String,
              },
              user_country: { n: 2, br: o.readString, bw: a.writeString },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = c(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return d(e.M(), t, r);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new n.default.BinaryReader(t),
        i = new e();
      return e.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return l(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new n.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      p(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new n.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CAccountCart_RemoveItemFromCart_Request";
    }
  },
  Z = class e extends n.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.cart || C(e.M()),
        n.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m || (e.sm_m = { proto: e, fields: { cart: { n: 1, c: h } } }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = c(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return d(e.M(), t, r);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new n.default.BinaryReader(t),
        i = new e();
      return e.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return l(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new n.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      p(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new n.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CAccountCart_RemoveItemFromCart_Response";
    }
  },
  ee = class e extends n.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.gidshoppingcart || C(e.M()),
        n.Message.initialize(this, t, 0, -1, void 0, null);
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
                br: o.readFixed64String,
                bw: a.writeFixed64String,
              },
              user_country: { n: 2, br: o.readString, bw: a.writeString },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = c(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return d(e.M(), t, r);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new n.default.BinaryReader(t),
        i = new e();
      return e.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return l(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new n.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      p(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new n.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CAccountCart_MergeShoppingCartContents_Request";
    }
  },
  te = class e extends n.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.cart || C(e.M()),
        n.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m || (e.sm_m = { proto: e, fields: { cart: { n: 1, c: h } } }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = c(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return d(e.M(), t, r);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new n.default.BinaryReader(t),
        i = new e();
      return e.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return l(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new n.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      p(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new n.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CAccountCart_MergeShoppingCartContents_Response";
    }
  },
  re = class e extends n.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(), n.Message.initialize(this, t, 0, -1, void 0, null);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return t ? { $jspbMessageInstance: r } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let r = new n.default.BinaryReader(t),
        i = new e();
      return e.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return t;
    }
    serializeBinary() {
      var t = new n.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {}
    serializeBase64String() {
      var t = new n.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CAccountCart_DeleteCart_Request";
    }
  },
  ie = class e extends n.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(), n.Message.initialize(this, t, 0, -1, void 0, null);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return t ? { $jspbMessageInstance: r } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let r = new n.default.BinaryReader(t),
        i = new e();
      return e.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return t;
    }
    serializeBinary() {
      var t = new n.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {}
    serializeBase64String() {
      var t = new n.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CAccountCart_DeleteCart_Response";
    }
  },
  oe = class e extends n.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.language || C(e.M()),
        n.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: { language: { n: 1, br: o.readUint32, bw: a.writeUint32 } },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = c(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return d(e.M(), t, r);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new n.default.BinaryReader(t),
        i = new e();
      return e.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return l(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new n.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      p(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new n.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CAccountCart_GetRelevantCoupons_Request";
    }
  },
  ae = class e extends n.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.line_items || C(e.M()),
        n.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: { line_items: { n: 1, c: ne, r: !0, q: !0 } },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = c(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return d(e.M(), t, r);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new n.default.BinaryReader(t),
        i = new e();
      return e.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return l(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new n.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      p(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new n.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CAccountCart_GetRelevantCoupons_Response";
    }
  },
  ne = class e extends n.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.line_item_id || C(e.M()),
        n.Message.initialize(this, t, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              line_item_id: {
                n: 1,
                br: o.readUint64String,
                bw: a.writeUint64String,
              },
              coupons: { n: 2, c: M, r: !0, q: !0 },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = c(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return d(e.M(), t, r);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new n.default.BinaryReader(t),
        i = new e();
      return e.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return l(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new n.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      p(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new n.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CAccountCart_GetRelevantCoupons_Response_LineItemCoupons";
    }
  },
  D;
((w) => {
  function e(P, R) {
    return P.SendMsg("AccountCart.GetCart#1", b(O, R), Q, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  w.GetCart = e;
  function t(P, R) {
    return P.SendMsg("AccountCart.AddItemsToCart#1", b(T, R), $, {
      ePrivilege: 1,
    });
  }
  w.AddItemsToCart = t;
  function r(P, R) {
    return P.SendMsg("AccountCart.ModifyLineItem#1", b(J, R), X, {
      ePrivilege: 1,
    });
  }
  w.ModifyLineItem = r;
  function i(P, R) {
    return P.SendMsg("AccountCart.RemoveItemFromCart#1", b(Y, R), Z, {
      ePrivilege: 1,
    });
  }
  w.RemoveItemFromCart = i;
  function f(P, R) {
    return P.SendMsg("AccountCart.MergeShoppingCartContents#1", b(ee, R), te, {
      ePrivilege: 1,
    });
  }
  w.MergeShoppingCartContents = f;
  function y(P, R) {
    return P.SendMsg("AccountCart.DeleteCart#1", b(re, R), ie, {
      ePrivilege: 1,
    });
  }
  w.DeleteCart = y;
  function v(P, R) {
    return P.SendMsg("AccountCart.GetRelevantCoupons#1", b(oe, R), ae, {
      ePrivilege: 1,
    });
  }
  w.GetRelevantCoupons = v;
})((D ||= {}));
var s = I(F());
var G = class e extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.context || C(e.M()),
        s.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              context: { n: 2, c: Te },
              data_request: { n: 3, c: Oe },
              gift_info: { n: 4, c: A },
              gidshoppingcart: {
                n: 1,
                br: o.readInt64String,
                bw: a.writeInt64String,
              },
              gidreplayoftransid: {
                n: 5,
                br: o.readFixed64String,
                bw: a.writeFixed64String,
              },
              for_init_purchase: { n: 6, br: o.readBool, bw: a.writeBool },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = c(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return d(e.M(), t, r);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new s.default.BinaryReader(t),
        i = new e();
      return e.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return l(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new s.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      p(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new s.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CCheckout_ValidateCart_Request";
    }
  },
  se = class e extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.cart_items || C(e.M()),
        s.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              cart_items: { n: 1, c: ce, r: !0, q: !0 },
              estimated_totals: { n: 5, c: pe },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = c(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return d(e.M(), t, r);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new s.default.BinaryReader(t),
        i = new e();
      return e.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return l(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new s.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      p(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new s.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CCheckout_ValidateCart_Response";
    }
  },
  ce = class e extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.line_item_id || C(e.M()),
        s.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              line_item_id: {
                n: 1,
                br: o.readUint64String,
                bw: a.writeUint64String,
              },
              item_id: { n: 2, c: z },
              store_item: { n: 3, c: je },
              gift_info: { n: 4, c: A },
              errors: { n: 5, c: ue },
              warnings: { n: 6, c: de },
              subtotal: { n: 7, c: g },
              price_when_added: { n: 8, c: g },
              original_price: { n: 9, c: g },
              coupon_applied: { n: 10, c: M },
              coupon_discount: { n: 11, c: g },
              can_purchase_as_gift: { n: 12, br: o.readBool, bw: a.writeBool },
              restrict_add_additional_to_cart: {
                n: 13,
                br: o.readBool,
                bw: a.writeBool,
              },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = c(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return d(e.M(), t, r);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new s.default.BinaryReader(t),
        i = new e();
      return e.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return l(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new s.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      p(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new s.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CCheckout_ValidateCart_Response_CartItem";
    }
  },
  ue = class e extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.owned_appids || C(e.M()),
        s.Message.initialize(this, t, 0, -1, [1, 2, 11], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              owned_appids: {
                n: 1,
                r: !0,
                q: !0,
                br: o.readInt32,
                pbr: o.readPackedInt32,
                bw: a.writeRepeatedInt32,
              },
              duplicate_appids_in_cart: {
                n: 2,
                r: !0,
                q: !0,
                br: o.readInt32,
                pbr: o.readPackedInt32,
                bw: a.writeRepeatedInt32,
              },
              unavailable_in_country: { n: 3, br: o.readBool, bw: a.writeBool },
              invalid_coupon: { n: 4, br: o.readBool, bw: a.writeBool },
              invalid_coupon_for_item: {
                n: 5,
                br: o.readBool,
                bw: a.writeBool,
              },
              coupon_exclusive_promo: { n: 6, br: o.readBool, bw: a.writeBool },
              cannot_purchase_as_gift: {
                n: 7,
                br: o.readBool,
                bw: a.writeBool,
              },
              invalid_item: { n: 8, br: o.readBool, bw: a.writeBool },
              too_many_in_cart: { n: 9, br: o.readBool, bw: a.writeBool },
              has_existing_billing_agreement: {
                n: 10,
                br: o.readBool,
                bw: a.writeBool,
              },
              missing_must_own_appids: {
                n: 11,
                r: !0,
                q: !0,
                br: o.readInt32,
                pbr: o.readPackedInt32,
                bw: a.writeRepeatedInt32,
              },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = c(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return d(e.M(), t, r);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new s.default.BinaryReader(t),
        i = new e();
      return e.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return l(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new s.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      p(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new s.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CCheckout_ValidateCart_Response_CartItem_Errors";
    }
  },
  de = class e extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.owned_appids || C(e.M()),
        s.Message.initialize(this, t, 0, -1, [1, 2, 3], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              owned_appids: {
                n: 1,
                r: !0,
                q: !0,
                br: o.readInt32,
                pbr: o.readPackedInt32,
                bw: a.writeRepeatedInt32,
              },
              owned_appids_extra_copy: {
                n: 2,
                r: !0,
                q: !0,
                br: o.readInt32,
                pbr: o.readPackedInt32,
                bw: a.writeRepeatedInt32,
              },
              appids_in_mastersub: { n: 3, c: le, r: !0, q: !0 },
              price_has_changed: { n: 4, br: o.readBool, bw: a.writeBool },
              non_refundable: { n: 5, br: o.readBool, bw: a.writeBool },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = c(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return d(e.M(), t, r);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new s.default.BinaryReader(t),
        i = new e();
      return e.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return l(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new s.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      p(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new s.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CCheckout_ValidateCart_Response_CartItem_Warnings";
    }
  },
  le = class e extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.cart_appid || C(e.M()),
        s.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              cart_appid: { n: 1, br: o.readUint32, bw: a.writeUint32 },
              mastersub_appid: { n: 2, br: o.readUint32, bw: a.writeUint32 },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = c(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return d(e.M(), t, r);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new s.default.BinaryReader(t),
        i = new e();
      return e.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return l(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new s.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      p(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new s.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CCheckout_ValidateCart_Response_CartItem_Warnings_AppInMasterSub";
    }
  },
  pe = class e extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.subtotal || C(e.M()),
        s.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              subtotal: { n: 1, c: g },
              wallet_balance: { n: 2, c: g },
              exceeding_wallet_balance: { n: 3, c: g },
              remaining_wallet_balance: { n: 4, c: g },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = c(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return d(e.M(), t, r);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new s.default.BinaryReader(t),
        i = new e();
      return e.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return l(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new s.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      p(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new s.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CCheckout_ValidateCart_Response_EstimatedTotals";
    }
  },
  Ce = class e extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.item_ids || C(e.M()),
        s.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: { item_ids: { n: 1, c: z, r: !0, q: !0 } },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = c(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return d(e.M(), t, r);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new s.default.BinaryReader(t),
        i = new e();
      return e.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return l(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new s.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      p(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new s.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CCheckout_GetFriendOwnershipForGifting_Request";
    }
  },
  _e = class e extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.ownership_info || C(e.M()),
        s.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: { ownership_info: { n: 1, c: fe, r: !0, q: !0 } },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = c(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return d(e.M(), t, r);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new s.default.BinaryReader(t),
        i = new e();
      return e.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return l(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new s.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      p(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new s.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CCheckout_GetFriendOwnershipForGifting_Response";
    }
  },
  me = class e extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.accountid || C(e.M()),
        s.Message.initialize(this, t, 0, -1, [4, 5], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              accountid: { n: 1, br: o.readUint32, bw: a.writeUint32 },
              already_owns: { n: 2, br: o.readBool, bw: a.writeBool },
              wishes_for: { n: 3, br: o.readBool, bw: a.writeBool },
              partial_owns_appids: {
                n: 4,
                r: !0,
                q: !0,
                br: o.readUint32,
                pbr: o.readPackedUint32,
                bw: a.writeRepeatedUint32,
              },
              partial_wishes_for: {
                n: 5,
                r: !0,
                q: !0,
                br: o.readUint32,
                pbr: o.readPackedUint32,
                bw: a.writeRepeatedUint32,
              },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = c(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return d(e.M(), t, r);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new s.default.BinaryReader(t),
        i = new e();
      return e.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return l(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new s.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      p(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new s.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CCheckout_GetFriendOwnershipForGifting_Response_FriendOwnership";
    }
  },
  fe = class e extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.item_id || C(e.M()),
        s.Message.initialize(this, t, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              item_id: { n: 1, c: z },
              friend_ownership: { n: 2, c: me, r: !0, q: !0 },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = c(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return d(e.M(), t, r);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new s.default.BinaryReader(t),
        i = new e();
      return e.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return l(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new s.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      p(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new s.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CCheckout_GetFriendOwnershipForGifting_Response_OwnershipInfo";
    }
  },
  ye = class e extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.item_id || C(e.M()),
        s.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m || (e.sm_m = { proto: e, fields: { item_id: { n: 1, c: z } } }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = c(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return d(e.M(), t, r);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new s.default.BinaryReader(t),
        i = new e();
      return e.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return l(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new s.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      p(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new s.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CCheckout_AddFreeLicense_Request";
    }
  },
  be = class e extends s.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.packageids_added || C(e.M()),
        s.Message.initialize(this, t, 0, -1, [1, 2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              packageids_added: {
                n: 1,
                r: !0,
                q: !0,
                br: o.readUint32,
                pbr: o.readPackedUint32,
                bw: a.writeRepeatedUint32,
              },
              appids_added: {
                n: 2,
                r: !0,
                q: !0,
                br: o.readUint32,
                pbr: o.readPackedUint32,
                bw: a.writeRepeatedUint32,
              },
              purchase_result_detail: {
                n: 3,
                br: o.readUint32,
                bw: a.writeUint32,
              },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = c(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return d(e.M(), t, r);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new s.default.BinaryReader(t),
        i = new e();
      return e.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return l(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new s.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      p(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new s.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CCheckout_AddFreeLicense_Response";
    }
  },
  ge;
((i) => {
  function e(f, y) {
    return f.SendMsg("Checkout.ValidateCart#1", b(G, y), se, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  i.ValidateCart = e;
  function t(f, y) {
    return f.SendMsg("Checkout.GetFriendOwnershipForGifting#1", b(Ce, y), _e, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  i.GetFriendOwnershipForGifting = t;
  function r(f, y) {
    return f.SendMsg("Checkout.AddFreeLicense#1", b(ye, y), be, {
      ePrivilege: 1,
    });
  }
  i.AddFreeLicense = r;
})((ge ||= {}));
function W(e) {
  return e.type === "account";
}
function Gt(e) {
  return e.type === "anonymous";
}
function Wt(e) {
  return e.type === "request";
}
function De(e) {
  return e.type === "replay";
}
function Pe(e) {
  return W(e) ? e.type : e.gid;
}
function V(e) {
  return ["shopping_cart", Pe(e), H.accountid];
}
function Vt(e, t) {
  return W(e)
    ? ["validate_checkout", Pe(e), H.accountid]
    : ["validate_checkout", Pe(e), t?.accountid_giftee];
}
function Ve(e, t) {
  e.invalidateQueries({ queryKey: ["validate_checkout"], exact: !1 });
}
function Nt(e, t) {
  e.invalidateQueries({ queryKey: V(t) }), Ve(e, t);
}
function Xe(e, t, r) {
  e.setQueryData(V(t), r), Ve(e, t);
}
var _ = I(F());
var Re = class e extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.version || C(e.M()),
        _.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              version: { n: 1, br: o.readEnum, bw: a.writeEnum },
              preference_state: { n: 2, br: o.readEnum, bw: a.writeEnum },
              content_customization: { n: 3, c: Be },
              valve_analytics: { n: 4, c: ve },
              third_party_analytics: { n: 5, c: Ae },
              third_party_content: { n: 6, c: Ie },
              utm_enabled: { n: 7, d: !0, br: o.readBool, bw: a.writeBool },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = c(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return d(e.M(), t, r);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new _.default.BinaryReader(t),
        i = new e();
      return e.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return l(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new _.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      p(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new _.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CAccountPrivacyCookiePreferences";
    }
  },
  Be = class e extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.recentapps || C(e.M()),
        _.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: { recentapps: { n: 1, br: o.readBool, bw: a.writeBool } },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = c(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return d(e.M(), t, r);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new _.default.BinaryReader(t),
        i = new e();
      return e.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return l(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new _.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      p(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new _.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CAccountPrivacyCookiePreferences_ContentCustomization";
    }
  },
  ve = class e extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.product_impressions_tracking || C(e.M()),
        _.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              product_impressions_tracking: {
                n: 1,
                br: o.readBool,
                bw: a.writeBool,
              },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = c(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return d(e.M(), t, r);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new _.default.BinaryReader(t),
        i = new e();
      return e.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return l(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new _.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      p(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new _.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CAccountPrivacyCookiePreferences_ValveAnalytics";
    }
  },
  Ae = class e extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.google_analytics || C(e.M()),
        _.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              google_analytics: { n: 1, br: o.readBool, bw: a.writeBool },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = c(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return d(e.M(), t, r);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new _.default.BinaryReader(t),
        i = new e();
      return e.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return l(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new _.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      p(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new _.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CAccountPrivacyCookiePreferences_ThirdPartyAnalytics";
    }
  },
  Ie = class e extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.youtube || C(e.M()),
        _.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              youtube: { n: 1, br: o.readBool, bw: a.writeBool },
              vimeo: { n: 2, br: o.readBool, bw: a.writeBool },
              sketchfab: { n: 3, br: o.readBool, bw: a.writeBool },
              twitter: { n: 4, br: o.readBool, bw: a.writeBool },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = c(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return d(e.M(), t, r);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new _.default.BinaryReader(t),
        i = new e();
      return e.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return l(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new _.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      p(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new _.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CAccountPrivacyCookiePreferences_ThirdPartyContent";
    }
  },
  he = class e extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(), _.Message.initialize(this, t, 0, -1, void 0, null);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return t ? { $jspbMessageInstance: r } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let r = new _.default.BinaryReader(t),
        i = new e();
      return e.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return t;
    }
    serializeBinary() {
      var t = new _.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {}
    serializeBase64String() {
      var t = new _.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CAccountPrivacy_GetCookiePreferences_Request";
    }
  },
  we = class e extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.preferences || C(e.M()),
        _.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = { proto: e, fields: { preferences: { n: 1, c: Re } } }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = c(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return d(e.M(), t, r);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new _.default.BinaryReader(t),
        i = new e();
      return e.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return l(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new _.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      p(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new _.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CAccountPrivacy_GetCookiePreferences_Response";
    }
  },
  Ye;
((t) => {
  function e(r, i) {
    return r.SendMsg("AccountPrivacy.GetCookiePreferences#1", b(he, i), we, {
      ePrivilege: 1,
    });
  }
  t.GetCookiePreferences = e;
})((Ye ||= {}));
function Ne(e) {
  if (e.preferenceControls.isTechnicallyNecessary) return !0;
  let t = Ue();
  if (!t) return !1;
  switch (t.preference_state) {
    case 1:
    case 0:
      return !0;
    case 2:
    case 4:
      return !1;
  }
  return (
    "IsAllowed" in e.preferenceControls && e.preferenceControls.IsAllowed(t)
  );
}
var Jt = {
  name: "cookieSettings",
  options: {
    secure: !0,
    httpOnly: !1,
    path: "/",
    sameSite: "none",
    maxAge: 1e3 * 3600 * 24 * 365,
  },
  preferenceControls: { isTechnicallyNecessary: !0 },
};
var Xt = {
    name: "steamDidLoginRefresh",
    options: {
      secure: !0,
      httpOnly: !0,
      path: "/",
      sameSite: "none",
      maxAge: 60 * 1e3,
    },
    preferenceControls: { isTechnicallyNecessary: !0 },
  },
  Yt = {
    name: "sessionid",
    options: { secure: !0, path: "/", sameSite: "none" },
    preferenceControls: { isTechnicallyNecessary: !0 },
  },
  Zt = {
    name: "strResponsiveViewPrefs",
    options: { maxAge: 365 * 24 * 60 * 60 * 1e3 },
    preferenceControls: { isTechnicallyNecessary: !0 },
  };
var Le = {
    name: "shoppingCartGID",
    options: { path: "/", secure: !0, maxAge: 1e3 * 3600 * 24 * 7 },
    preferenceControls: { isTechnicallyNecessary: !0 },
  },
  er = {
    name: "app_impressions",
    options: { path: "/", secure: !0 },
    preferenceControls: {
      isTechnicallyNecessary: !1,
      IsAllowed: (e) => !!e.valve_analytics?.product_impressions_tracking,
    },
  },
  tr = {
    name: "steamLoginSpoofSteamID",
    options: { path: "/", secure: !0 },
    preferenceControls: { isTechnicallyNecessary: !0 },
  };
function Ee(e) {
  if (!document.cookie) return;
  let t = document.cookie.match("(^|; )" + e.name + "=([^;]*)");
  if (t && t[2]) return decodeURIComponent(t[2]);
}
function Ze(e, t) {
  if (!document.cookie || !Ne(e)) return;
  let r = e.options?.path ?? "/",
    i = "";
  e.options?.expires
    ? (i += ";expires=" + e.options.expires.toUTCString())
    : e.options?.maxAge &&
      (i += ";max-age=" + Math.floor(e.options.maxAge / 1e3)),
    e.options?.secure && (i += ";secure"),
    (document.cookie =
      encodeURIComponent(e.name) +
      "=" +
      encodeURIComponent(t) +
      i +
      ";path=" +
      r);
}
function or(e) {
  return Ze({ ...e, options: { ...e.options, expires: new Date(0) } }, "");
}
function Ue() {
  return window.SSR?.renderContext?.cookiePrefs;
}
var Me = I(Je(), 1);
var rt = I(Fe(), 1);
function et() {
  return H.logged_in ? { type: "account" } : { type: "anonymous", gid: Ee(Le) };
}
var tt = Me.default.createContext({ cartID: void 0 });
function Qe() {
  return Me.default.useContext(tt).cartID || et();
}
function it(e, t, r) {
  return {
    queryKey: V(t),
    queryFn: () => nt(e, t),
    staleTime: 30 * 60 * 1e3,
    ...r,
  };
}
function ot(e) {
  let t = Ge(),
    r = Qe();
  return Se(it(t, r, e));
}
function Ir(e, t, r) {
  if (e !== void 0)
    return t
      ? e.line_items.some((i) => i.type == 1 && i.packageid === t)
      : r
        ? e.line_items.some((i) => i.type == 2 && i.bundleid === r)
        : void 0;
}
function hr(e) {
  return ot({ select: (t) => t.line_items?.length ?? 0, ...e });
}
async function wr(e, t, r, i) {
  let f = new FormData();
  t &&
    (t.length === 1
      ? f.set("subid", t[0].toString())
      : t.forEach((w) => f.set("subid[]", w.toString()))),
    r && f.set("bundleid", r.toString()),
    f.set("action", "add_to_cart");
  let y = await fetch(`${ke.STORE_BASE_URL}cart/addtocart`, {
    method: "post",
    body: f,
  });
  if (!y.ok) throw new Error("Failed to fetch /cart/addtocart");
  let v = await y.json();
  return [v?.success ? 1 : 2, v?.contents];
}
async function Mr(e, t, r, i, f, y) {
  return at(e, t, [{ packageid: r, bundleid: i, bIsGift: f }], y);
}
async function at(e, t, r, i) {
  let f = S.Init(T);
  if (!r || r.length === 0)
    return (
      console.error("No valid Package or Bundle provided to add to cart"),
      [8, null]
    );
  r.forEach((v) => {
    let w = f.Body().add_items();
    v.packageid
      ? w.set_packageid(v.packageid)
      : v.bundleid
        ? w.set_bundleid(v.bundleid)
        : console.error(
            "Neither a package nor bundle ID were provided with an item in AddItemsToAccountCart",
          ),
      v.bIsGift && w.flags(!0).set_is_gift(!0);
  }),
    i && f.Body().set_navdata(k.fromObject(ze(i))),
    f.Body().set_user_country(t);
  let y = await D.AddItemsToCart(e, f);
  return (
    y.BSuccess() ||
      console.warn(`Failed to add item to account cart: ${y.GetEResult()}`),
    [y.GetEResult(), y.Body().toObject()]
  );
}
async function nt(e, t) {
  if (W(t)) {
    let r = S.Init(O);
    r.Body().set_user_country(He.country_code);
    let i = await D.GetCart(e, r);
    if (!i.BSuccess())
      throw `Error loading AccountCart: ${i.GetErrorMessage()}`;
    return i.Body().toObject()?.cart;
  } else if (De(t)) {
    let r = S.Init(G);
    We(r), r.Body().set_gidreplayoftransid(t.gid);
    let i = await ge.ValidateCart(e, r);
    if (!i.BSuccess()) throw `Error loading ReplayCart: ${i.GetErrorMessage()}`;
    return ct(i.Body().toObject());
  } else {
    if (!t.gid) return Ke(void 0);
    let r = S.Init(xe);
    r.Body().set_gidshoppingcart(t.gid);
    let i = await qe.GetShoppingCartContents(e, r);
    if (!i.BSuccess())
      throw `Error loading Legacy Cart: ${i.GetErrorMessage()}`;
    return Ke(i.Body().toObject().contents);
  }
}
function Ke(e) {
  let t = { line_items: [] };
  return (
    e?.lineitems?.length &&
      (t.line_items = e.lineitems
        .map((r) => (r.package_item?.gidbundle ? null : st(r)))
        .filter(N)),
    t
  );
}
function st(e) {
  let t = { price_when_added: {}, flags: {} };
  return (
    (t.line_item_id = e.gidlineitem),
    e.bundle_item?.bundleid
      ? ((t.bundleid = e.bundle_item.bundleid), (t.type = 2))
      : e.package_item &&
        ((t.packageid = e.package_item.packageid),
        (t.price_when_added.amount_in_cents =
          e.package_item.costwhenadded?.amount ?? ""),
        (t.price_when_added.currency_code =
          e.package_item.costwhenadded?.currencycode ?? 0),
        (t.type = 1)),
    t
  );
}
function ct(e) {
  let t = { subtotal: e.estimated_totals.subtotal, line_items: [] };
  return (
    (t.line_items = e.cart_items
      ?.map((r) => {
        let i;
        if (r.item_id?.packageid) i = 1;
        else if (r.item_id?.bundleid) i = 2;
        else return;
        return {
          line_item_id: r.line_item_id,
          type: i,
          packageid: r.item_id.packageid,
          bundleid: r.item_id.bundleid,
          is_valid: !0,
          price_when_added: r.price_when_added,
          gift_info: r.gift_info,
          flags: { is_gift: !!r.gift_info?.accountid_giftee },
          gidcoupon_applied: r.coupon_applied?.gidcoupon,
        };
      })
      .filter(N)),
    t
  );
}
var $e = "unUserdataVersion";
function kr() {
  window.localStorage.setItem(
    $e,
    (Number.parseInt(window.localStorage.getItem($e) || "0") + 1).toString(),
  );
}
export {
  Ne as a,
  Yt as b,
  Zt as c,
  er as d,
  tr as e,
  Ee as f,
  Ze as g,
  or as h,
  Ue as i,
  A as j,
  k,
  Y as l,
  D as m,
  G as n,
  ye as o,
  ge as p,
  W as q,
  Gt as r,
  Wt as s,
  De as t,
  Vt as u,
  Nt as v,
  Xe as w,
  Qe as x,
  ot as y,
  Ir as z,
  hr as A,
  wr as B,
  Mr as C,
  Ke as D,
  kr as E,
};

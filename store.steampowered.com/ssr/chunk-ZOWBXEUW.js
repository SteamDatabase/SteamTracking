const CLSTAMP = 9520173;

import { a as Le, c as Ue } from "./chunk-Y5Y4X5FA.js";
import { a as Ne } from "./chunk-GAE6ECJY.js";
import {
  A as G,
  G as Ve,
  a as O,
  b as i,
  c as a,
  d as s,
  e as c,
  f as u,
  g as d,
  h as l,
  i as p,
  t as T,
  u as P,
  x as xe,
  y as qe,
  z as De,
} from "./chunk-BA5QK33X.js";
import { d as Ge, o as K, s as We } from "./chunk-GMS5S4PA.js";
import {
  g as ze,
  h as Oe,
  k as z,
  l as tt,
  m as Te,
} from "./chunk-YTPGFZBB.js";
import { d as M } from "./chunk-MXFEM5DW.js";
var n = M(O());
var g = M(O(), 1);
var k = g.Message;
var w = class e extends k {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.accountid_giftee || p(e.M()),
        k.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              accountid_giftee: { n: 1, br: i.readInt32, bw: a.writeInt32 },
              gift_message: { n: 2, c: $ },
              time_scheduled_send: { n: 3, br: i.readInt32, bw: a.writeInt32 },
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
      return u(e.M(), t, r);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new g.BinaryReader(t),
        o = new e();
      return e.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return d(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new g.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      l(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new g.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CartGiftInfo";
    }
  },
  $ = class e extends k {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.gifteename || p(e.M()),
        k.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              gifteename: { n: 1, br: i.readString, bw: a.writeString },
              message: { n: 2, br: i.readString, bw: a.writeString },
              sentiment: { n: 3, br: i.readString, bw: a.writeString },
              signature: { n: 4, br: i.readString, bw: a.writeString },
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
      return u(e.M(), t, r);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new g.BinaryReader(t),
        o = new e();
      return e.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return d(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new g.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      l(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new g.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CartGiftMessage";
    }
  },
  R = class e extends k {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.amount_in_cents || p(e.M()),
        k.initialize(this, t, 0, -1, void 0, null);
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
                br: i.readInt64String,
                bw: a.writeInt64String,
              },
              currency_code: { n: 2, br: i.readInt32, bw: a.writeInt32 },
              formatted_amount: { n: 3, br: i.readString, bw: a.writeString },
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
      return u(e.M(), t, r);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new g.BinaryReader(t),
        o = new e();
      return e.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return d(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new g.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      l(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new g.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CartAmount";
    }
  },
  j = class e extends k {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.couponid || p(e.M()),
        k.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              couponid: { n: 1, br: i.readUint32, bw: a.writeUint32 },
              gidcoupon: {
                n: 2,
                br: i.readUint64String,
                bw: a.writeUint64String,
              },
              title: { n: 5, br: i.readString, bw: a.writeString },
              coupon_description: { n: 6, br: i.readString, bw: a.writeString },
              large_icon_url: { n: 7, br: i.readString, bw: a.writeString },
              discount_pct: { n: 8, br: i.readInt32, bw: a.writeInt32 },
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
      return u(e.M(), t, r);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new g.BinaryReader(t),
        o = new e();
      return e.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return d(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new g.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      l(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new g.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CartCoupon";
    }
  };
var I = M(O(), 1);
var L = I.Message,
  J = class e extends L {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.clanid || p(e.M()),
        L.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              clanid: { n: 1, br: i.readUint32, bw: a.writeUint32 },
              listid: { n: 2, br: i.readUint64String, bw: a.writeUint64String },
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
      return u(e.M(), t, r);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new I.BinaryReader(t),
        o = new e();
      return e.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return d(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      l(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CUserInterface_CuratorData";
    }
  },
  S = class e extends L {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.domain || p(e.M()),
        L.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              domain: { n: 1, br: i.readString, bw: a.writeString },
              controller: { n: 2, br: i.readString, bw: a.writeString },
              method: { n: 3, br: i.readString, bw: a.writeString },
              submethod: { n: 4, br: i.readString, bw: a.writeString },
              feature: { n: 5, br: i.readString, bw: a.writeString },
              depth: { n: 6, br: i.readUint32, bw: a.writeUint32 },
              countrycode: { n: 7, br: i.readString, bw: a.writeString },
              webkey: { n: 8, br: i.readUint64String, bw: a.writeUint64String },
              is_client: { n: 9, br: i.readBool, bw: a.writeBool },
              curator_data: { n: 10, c: J },
              is_likely_bot: { n: 11, br: i.readBool, bw: a.writeBool },
              is_utm: { n: 12, br: i.readBool, bw: a.writeBool },
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
      return u(e.M(), t, r);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new I.BinaryReader(t),
        o = new e();
      return e.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return d(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      l(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CUserInterface_NavData";
    }
  };
var _ = n.Message;
var U = class e extends _ {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.validation_failure || p(e.M()),
        _.initialize(this, t, 0, -1, void 0, null);
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
                br: i.readEnum,
                bw: a.writeEnum,
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
      return u(e.M(), t, r);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new n.BinaryReader(t),
        o = new e();
      return e.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return d(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new n.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      l(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new n.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "AccountCartValidationDetails";
    }
  },
  W = class e extends _ {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.is_gift || p(e.M()),
        _.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              is_gift: { n: 1, br: i.readBool, bw: a.writeBool },
              is_private: { n: 2, br: i.readBool, bw: a.writeBool },
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
      return u(e.M(), t, r);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new n.BinaryReader(t),
        o = new e();
      return e.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return d(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new n.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      l(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new n.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "AccountCartLineItemFlags";
    }
  },
  X = class e extends _ {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.line_item_id || p(e.M()),
        _.initialize(this, t, 0, -1, void 0, null);
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
                br: i.readUint64String,
                bw: a.writeUint64String,
              },
              type: { n: 2, br: i.readEnum, bw: a.writeEnum },
              packageid: { n: 3, br: i.readUint32, bw: a.writeUint32 },
              bundleid: { n: 4, br: i.readUint32, bw: a.writeUint32 },
              is_valid: { n: 8, br: i.readBool, bw: a.writeBool },
              validation_details: { n: 9, c: U },
              time_added: { n: 10, br: i.readUint32, bw: a.writeUint32 },
              price_when_added: { n: 11, c: R },
              gift_info: { n: 12, c: w },
              flags: { n: 13, c: W },
              gidcoupon_applied: {
                n: 14,
                br: i.readUint64String,
                bw: a.writeUint64String,
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
      return u(e.M(), t, r);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new n.BinaryReader(t),
        o = new e();
      return e.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return d(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new n.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      l(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new n.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "AccountCartLineItem";
    }
  },
  H = class e extends _ {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.line_items || p(e.M()),
        _.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              line_items: { n: 1, c: X, r: !0, q: !0 },
              subtotal: { n: 2, c: R },
              is_valid: { n: 3, br: i.readBool, bw: a.writeBool },
              validation_details: { n: 4, c: U },
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
      return u(e.M(), t, r);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new n.BinaryReader(t),
        o = new e();
      return e.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return d(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new n.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      l(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new n.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "AccountCartContents";
    }
  },
  x = class e extends _ {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.user_country || p(e.M()),
        _.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              user_country: { n: 1, br: i.readString, bw: a.writeString },
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
      return u(e.M(), t, r);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new n.BinaryReader(t),
        o = new e();
      return e.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return d(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new n.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      l(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new n.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CAccountCart_GetCart_Request";
    }
  },
  Y = class e extends _ {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.cart || p(e.M()),
        _.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m || (e.sm_m = { proto: e, fields: { cart: { n: 1, c: H } } }),
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
      return u(e.M(), t, r);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new n.BinaryReader(t),
        o = new e();
      return e.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return d(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new n.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      l(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new n.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CAccountCart_GetCart_Response";
    }
  },
  q = class e extends _ {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.user_country || p(e.M()),
        _.initialize(this, t, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              user_country: { n: 1, br: i.readString, bw: a.writeString },
              items: { n: 2, c: Z, r: !0, q: !0 },
              navdata: { n: 3, c: S },
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
      return u(e.M(), t, r);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new n.BinaryReader(t),
        o = new e();
      return e.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return d(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new n.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      l(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new n.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CAccountCart_AddItemsToCart_Request";
    }
  },
  Z = class e extends _ {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.packageid || p(e.M()),
        _.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              packageid: { n: 1, br: i.readUint32, bw: a.writeUint32 },
              bundleid: { n: 2, br: i.readUint32, bw: a.writeUint32 },
              gift_info: { n: 10, c: w },
              flags: { n: 11, c: W },
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
      return u(e.M(), t, r);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new n.BinaryReader(t),
        o = new e();
      return e.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return d(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new n.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      l(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new n.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CAccountCart_AddItemsToCart_Request_ItemToAdd";
    }
  },
  ee = class e extends _ {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.line_item_ids || p(e.M()),
        _.initialize(this, t, 0, -1, [1, 3], null);
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
                br: i.readUint64String,
                pbr: i.readPackedUint64String,
                bw: a.writeRepeatedUint64String,
              },
              cart: { n: 2, c: H },
              replaced_packages: {
                n: 3,
                r: !0,
                q: !0,
                br: i.readUint32,
                pbr: i.readPackedUint32,
                bw: a.writeRepeatedUint32,
              },
              existing_billing_agreementid: {
                n: 4,
                br: i.readUint64String,
                bw: a.writeUint64String,
              },
              new_billing_agreement_recurring_packageid: {
                n: 5,
                br: i.readUint32,
                bw: a.writeUint32,
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
      return u(e.M(), t, r);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new n.BinaryReader(t),
        o = new e();
      return e.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return d(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new n.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      l(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new n.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CAccountCart_AddItemsToCart_Response";
    }
  },
  te = class e extends _ {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.line_item_id || p(e.M()),
        _.initialize(this, t, 0, -1, void 0, null);
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
                br: i.readUint64String,
                bw: a.writeUint64String,
              },
              user_country: { n: 2, br: i.readString, bw: a.writeString },
              gift_info: { n: 10, c: w },
              flags: { n: 11, c: W },
              apply_gidcoupon: {
                n: 12,
                br: i.readUint64String,
                bw: a.writeUint64String,
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
      return u(e.M(), t, r);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new n.BinaryReader(t),
        o = new e();
      return e.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return d(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new n.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      l(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new n.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CAccountCart_ModifyLineItem_Request";
    }
  },
  re = class e extends _ {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.cart || p(e.M()),
        _.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m || (e.sm_m = { proto: e, fields: { cart: { n: 1, c: H } } }),
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
      return u(e.M(), t, r);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new n.BinaryReader(t),
        o = new e();
      return e.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return d(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new n.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      l(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new n.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CAccountCart_ModifyLineItem_Response";
    }
  },
  oe = class e extends _ {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.line_item_id || p(e.M()),
        _.initialize(this, t, 0, -1, void 0, null);
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
                br: i.readUint64String,
                bw: a.writeUint64String,
              },
              user_country: { n: 2, br: i.readString, bw: a.writeString },
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
      return u(e.M(), t, r);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new n.BinaryReader(t),
        o = new e();
      return e.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return d(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new n.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      l(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new n.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CAccountCart_RemoveItemFromCart_Request";
    }
  },
  ie = class e extends _ {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.cart || p(e.M()),
        _.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m || (e.sm_m = { proto: e, fields: { cart: { n: 1, c: H } } }),
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
      return u(e.M(), t, r);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new n.BinaryReader(t),
        o = new e();
      return e.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return d(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new n.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      l(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new n.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CAccountCart_RemoveItemFromCart_Response";
    }
  },
  ae = class e extends _ {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.gidshoppingcart || p(e.M()),
        _.initialize(this, t, 0, -1, void 0, null);
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
                br: i.readFixed64String,
                bw: a.writeFixed64String,
              },
              user_country: { n: 2, br: i.readString, bw: a.writeString },
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
      return u(e.M(), t, r);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new n.BinaryReader(t),
        o = new e();
      return e.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return d(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new n.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      l(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new n.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CAccountCart_MergeShoppingCartContents_Request";
    }
  },
  ne = class e extends _ {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.cart || p(e.M()),
        _.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m || (e.sm_m = { proto: e, fields: { cart: { n: 1, c: H } } }),
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
      return u(e.M(), t, r);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new n.BinaryReader(t),
        o = new e();
      return e.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return d(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new n.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      l(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new n.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CAccountCart_MergeShoppingCartContents_Response";
    }
  },
  se = class e extends _ {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(), _.initialize(this, t, 0, -1, void 0, null);
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
      let r = new n.BinaryReader(t),
        o = new e();
      return e.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return t;
    }
    serializeBinary() {
      var t = new n.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {}
    serializeBase64String() {
      var t = new n.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CAccountCart_DeleteCart_Request";
    }
  },
  ce = class e extends _ {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(), _.initialize(this, t, 0, -1, void 0, null);
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
      let r = new n.BinaryReader(t),
        o = new e();
      return e.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return t;
    }
    serializeBinary() {
      var t = new n.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {}
    serializeBase64String() {
      var t = new n.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CAccountCart_DeleteCart_Response";
    }
  },
  ue = class e extends _ {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.language || p(e.M()),
        _.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: { language: { n: 1, br: i.readUint32, bw: a.writeUint32 } },
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
      return u(e.M(), t, r);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new n.BinaryReader(t),
        o = new e();
      return e.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return d(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new n.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      l(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new n.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CAccountCart_GetRelevantCoupons_Request";
    }
  },
  de = class e extends _ {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.line_items || p(e.M()),
        _.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: { line_items: { n: 1, c: le, r: !0, q: !0 } },
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
      return u(e.M(), t, r);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new n.BinaryReader(t),
        o = new e();
      return e.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return d(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new n.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      l(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new n.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CAccountCart_GetRelevantCoupons_Response";
    }
  },
  le = class e extends _ {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.line_item_id || p(e.M()),
        _.initialize(this, t, 0, -1, [2], null);
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
                br: i.readUint64String,
                bw: a.writeUint64String,
              },
              coupons: { n: 2, c: j, r: !0, q: !0 },
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
      return u(e.M(), t, r);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new n.BinaryReader(t),
        o = new e();
      return e.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return d(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new n.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      l(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new n.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CAccountCart_GetRelevantCoupons_Response_LineItemCoupons";
    }
  },
  E;
((F) => {
  function e(v, A) {
    return v.SendMsg("AccountCart.GetCart#1", P(x, A), Y, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  F.GetCart = e;
  function t(v, A) {
    return v.SendMsg("AccountCart.AddItemsToCart#1", P(q, A), ee, {
      ePrivilege: 1,
    });
  }
  F.AddItemsToCart = t;
  function r(v, A) {
    return v.SendMsg("AccountCart.ModifyLineItem#1", P(te, A), re, {
      ePrivilege: 1,
    });
  }
  F.ModifyLineItem = r;
  function o(v, A) {
    return v.SendMsg("AccountCart.RemoveItemFromCart#1", P(oe, A), ie, {
      ePrivilege: 1,
    });
  }
  F.RemoveItemFromCart = o;
  function b(v, A) {
    return v.SendMsg("AccountCart.MergeShoppingCartContents#1", P(ae, A), ne, {
      ePrivilege: 1,
    });
  }
  F.MergeShoppingCartContents = b;
  function y(v, A) {
    return v.SendMsg("AccountCart.DeleteCart#1", P(se, A), ce, {
      ePrivilege: 1,
    });
  }
  F.DeleteCart = y;
  function h(v, A) {
    return v.SendMsg("AccountCart.GetRelevantCoupons#1", P(ue, A), de, {
      ePrivilege: 1,
    });
  }
  F.GetRelevantCoupons = h;
})((E ||= {}));
var C = M(O());
var m = C.Message,
  D = class e extends m {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.context || p(e.M()),
        m.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              context: { n: 2, c: De },
              data_request: { n: 3, c: qe },
              gift_info: { n: 4, c: w },
              gidshoppingcart: {
                n: 1,
                br: i.readInt64String,
                bw: a.writeInt64String,
              },
              gidreplayoftransid: {
                n: 5,
                br: i.readFixed64String,
                bw: a.writeFixed64String,
              },
              for_init_purchase: { n: 6, br: i.readBool, bw: a.writeBool },
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
      return u(e.M(), t, r);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new C.BinaryReader(t),
        o = new e();
      return e.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return d(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new C.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      l(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new C.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CCheckout_ValidateCart_Request";
    }
  },
  pe = class e extends m {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.cart_items || p(e.M()),
        m.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              cart_items: { n: 1, c: Ce, r: !0, q: !0 },
              estimated_totals: { n: 5, c: be },
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
      return u(e.M(), t, r);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new C.BinaryReader(t),
        o = new e();
      return e.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return d(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new C.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      l(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new C.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CCheckout_ValidateCart_Response";
    }
  },
  Ce = class e extends m {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.line_item_id || p(e.M()),
        m.initialize(this, t, 0, -1, void 0, null);
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
                br: i.readUint64String,
                bw: a.writeUint64String,
              },
              item_id: { n: 2, c: G },
              store_item: { n: 3, c: xe },
              gift_info: { n: 4, c: w },
              errors: { n: 5, c: _e },
              warnings: { n: 6, c: me },
              subtotal: { n: 7, c: R },
              price_when_added: { n: 8, c: R },
              original_price: { n: 9, c: R },
              coupon_applied: { n: 10, c: j },
              coupon_discount: { n: 11, c: R },
              can_purchase_as_gift: { n: 12, br: i.readBool, bw: a.writeBool },
              restrict_add_additional_to_cart: {
                n: 13,
                br: i.readBool,
                bw: a.writeBool,
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
      return u(e.M(), t, r);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new C.BinaryReader(t),
        o = new e();
      return e.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return d(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new C.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      l(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new C.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CCheckout_ValidateCart_Response_CartItem";
    }
  },
  _e = class e extends m {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.owned_appids || p(e.M()),
        m.initialize(this, t, 0, -1, [1, 2, 11], null);
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
                br: i.readInt32,
                pbr: i.readPackedInt32,
                bw: a.writeRepeatedInt32,
              },
              duplicate_appids_in_cart: {
                n: 2,
                r: !0,
                q: !0,
                br: i.readInt32,
                pbr: i.readPackedInt32,
                bw: a.writeRepeatedInt32,
              },
              unavailable_in_country: { n: 3, br: i.readBool, bw: a.writeBool },
              invalid_coupon: { n: 4, br: i.readBool, bw: a.writeBool },
              invalid_coupon_for_item: {
                n: 5,
                br: i.readBool,
                bw: a.writeBool,
              },
              coupon_exclusive_promo: { n: 6, br: i.readBool, bw: a.writeBool },
              cannot_purchase_as_gift: {
                n: 7,
                br: i.readBool,
                bw: a.writeBool,
              },
              invalid_item: { n: 8, br: i.readBool, bw: a.writeBool },
              too_many_in_cart: { n: 9, br: i.readBool, bw: a.writeBool },
              has_existing_billing_agreement: {
                n: 10,
                br: i.readBool,
                bw: a.writeBool,
              },
              missing_must_own_appids: {
                n: 11,
                r: !0,
                q: !0,
                br: i.readInt32,
                pbr: i.readPackedInt32,
                bw: a.writeRepeatedInt32,
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
      return u(e.M(), t, r);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new C.BinaryReader(t),
        o = new e();
      return e.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return d(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new C.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      l(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new C.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CCheckout_ValidateCart_Response_CartItem_Errors";
    }
  },
  me = class e extends m {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.owned_appids || p(e.M()),
        m.initialize(this, t, 0, -1, [1, 2, 3], null);
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
                br: i.readInt32,
                pbr: i.readPackedInt32,
                bw: a.writeRepeatedInt32,
              },
              owned_appids_extra_copy: {
                n: 2,
                r: !0,
                q: !0,
                br: i.readInt32,
                pbr: i.readPackedInt32,
                bw: a.writeRepeatedInt32,
              },
              appids_in_mastersub: { n: 3, c: fe, r: !0, q: !0 },
              price_has_changed: { n: 4, br: i.readBool, bw: a.writeBool },
              non_refundable: { n: 5, br: i.readBool, bw: a.writeBool },
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
      return u(e.M(), t, r);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new C.BinaryReader(t),
        o = new e();
      return e.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return d(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new C.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      l(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new C.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CCheckout_ValidateCart_Response_CartItem_Warnings";
    }
  },
  fe = class e extends m {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.cart_appid || p(e.M()),
        m.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              cart_appid: { n: 1, br: i.readUint32, bw: a.writeUint32 },
              mastersub_appid: { n: 2, br: i.readUint32, bw: a.writeUint32 },
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
      return u(e.M(), t, r);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new C.BinaryReader(t),
        o = new e();
      return e.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return d(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new C.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      l(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new C.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CCheckout_ValidateCart_Response_CartItem_Warnings_AppInMasterSub";
    }
  },
  be = class e extends m {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.subtotal || p(e.M()),
        m.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              subtotal: { n: 1, c: R },
              wallet_balance: { n: 2, c: R },
              exceeding_wallet_balance: { n: 3, c: R },
              remaining_wallet_balance: { n: 4, c: R },
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
      return u(e.M(), t, r);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new C.BinaryReader(t),
        o = new e();
      return e.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return d(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new C.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      l(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new C.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CCheckout_ValidateCart_Response_EstimatedTotals";
    }
  },
  ye = class e extends m {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.item_ids || p(e.M()),
        m.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: { item_ids: { n: 1, c: G, r: !0, q: !0 } },
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
      return u(e.M(), t, r);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new C.BinaryReader(t),
        o = new e();
      return e.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return d(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new C.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      l(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new C.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CCheckout_GetFriendOwnershipForGifting_Request";
    }
  },
  ge = class e extends m {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.ownership_info || p(e.M()),
        m.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: { ownership_info: { n: 1, c: Re, r: !0, q: !0 } },
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
      return u(e.M(), t, r);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new C.BinaryReader(t),
        o = new e();
      return e.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return d(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new C.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      l(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new C.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CCheckout_GetFriendOwnershipForGifting_Response";
    }
  },
  Pe = class e extends m {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.accountid || p(e.M()),
        m.initialize(this, t, 0, -1, [4, 5], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              accountid: { n: 1, br: i.readUint32, bw: a.writeUint32 },
              already_owns: { n: 2, br: i.readBool, bw: a.writeBool },
              wishes_for: { n: 3, br: i.readBool, bw: a.writeBool },
              partial_owns_appids: {
                n: 4,
                r: !0,
                q: !0,
                br: i.readUint32,
                pbr: i.readPackedUint32,
                bw: a.writeRepeatedUint32,
              },
              partial_wishes_for: {
                n: 5,
                r: !0,
                q: !0,
                br: i.readUint32,
                pbr: i.readPackedUint32,
                bw: a.writeRepeatedUint32,
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
      return u(e.M(), t, r);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new C.BinaryReader(t),
        o = new e();
      return e.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return d(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new C.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      l(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new C.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CCheckout_GetFriendOwnershipForGifting_Response_FriendOwnership";
    }
  },
  Re = class e extends m {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.item_id || p(e.M()),
        m.initialize(this, t, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              item_id: { n: 1, c: G },
              friend_ownership: { n: 2, c: Pe, r: !0, q: !0 },
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
      return u(e.M(), t, r);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new C.BinaryReader(t),
        o = new e();
      return e.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return d(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new C.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      l(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new C.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CCheckout_GetFriendOwnershipForGifting_Response_OwnershipInfo";
    }
  },
  Be = class e extends m {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.item_id || p(e.M()),
        m.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m || (e.sm_m = { proto: e, fields: { item_id: { n: 1, c: G } } }),
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
      return u(e.M(), t, r);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new C.BinaryReader(t),
        o = new e();
      return e.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return d(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new C.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      l(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new C.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CCheckout_AddFreeLicense_Request";
    }
  },
  ve = class e extends m {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.packageids_added || p(e.M()),
        m.initialize(this, t, 0, -1, [1, 2], null);
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
                br: i.readUint32,
                pbr: i.readPackedUint32,
                bw: a.writeRepeatedUint32,
              },
              appids_added: {
                n: 2,
                r: !0,
                q: !0,
                br: i.readUint32,
                pbr: i.readPackedUint32,
                bw: a.writeRepeatedUint32,
              },
              purchase_result_detail: {
                n: 3,
                br: i.readUint32,
                bw: a.writeUint32,
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
      return u(e.M(), t, r);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new C.BinaryReader(t),
        o = new e();
      return e.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return d(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new C.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      l(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new C.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CCheckout_AddFreeLicense_Response";
    }
  },
  Ae;
((o) => {
  function e(b, y) {
    return b.SendMsg("Checkout.ValidateCart#1", P(D, y), pe, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  o.ValidateCart = e;
  function t(b, y) {
    return b.SendMsg("Checkout.GetFriendOwnershipForGifting#1", P(ye, y), ge, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  o.GetFriendOwnershipForGifting = t;
  function r(b, y) {
    return b.SendMsg("Checkout.AddFreeLicense#1", P(Be, y), ve, {
      ePrivilege: 1,
    });
  }
  o.AddFreeLicense = r;
})((Ae ||= {}));
function V(e) {
  return e.type === "account";
}
function Vt(e) {
  return e.type === "anonymous";
}
function Nt(e) {
  return e.type === "request";
}
function Ee(e) {
  return e.type === "replay";
}
function Ie(e) {
  return V(e) ? e.type : e.gid;
}
function Q(e) {
  return ["shopping_cart", Ie(e), z.accountid];
}
function Qt(e, t) {
  return V(e)
    ? ["validate_checkout", Ie(e), z.accountid]
    : ["validate_checkout", Ie(e), t?.accountid_giftee];
}
function Qe(e, t) {
  e.invalidateQueries({ queryKey: ["validate_checkout"], exact: !1 });
}
function Kt(e, t) {
  e.invalidateQueries({ queryKey: Q(t) }), Qe(e, t);
}
function rt(e, t, r) {
  e.setQueryData(Q(t), r), Qe(e, t);
}
var f = M(O());
var B = f.Message;
var he = class e extends B {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.version || p(e.M()),
        B.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              version: { n: 1, br: i.readEnum, bw: a.writeEnum },
              preference_state: { n: 2, br: i.readEnum, bw: a.writeEnum },
              content_customization: { n: 3, c: we },
              valve_analytics: { n: 4, c: Me },
              third_party_analytics: { n: 5, c: ke },
              third_party_content: { n: 6, c: He },
              utm_enabled: { n: 7, d: !0, br: i.readBool, bw: a.writeBool },
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
      return u(e.M(), t, r);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new f.BinaryReader(t),
        o = new e();
      return e.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return d(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      l(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CAccountPrivacyCookiePreferences";
    }
  },
  we = class e extends B {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.recentapps || p(e.M()),
        B.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: { recentapps: { n: 1, br: i.readBool, bw: a.writeBool } },
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
      return u(e.M(), t, r);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new f.BinaryReader(t),
        o = new e();
      return e.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return d(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      l(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CAccountPrivacyCookiePreferences_ContentCustomization";
    }
  },
  Me = class e extends B {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.product_impressions_tracking || p(e.M()),
        B.initialize(this, t, 0, -1, void 0, null);
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
                br: i.readBool,
                bw: a.writeBool,
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
      return u(e.M(), t, r);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new f.BinaryReader(t),
        o = new e();
      return e.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return d(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      l(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CAccountPrivacyCookiePreferences_ValveAnalytics";
    }
  },
  ke = class e extends B {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.google_analytics || p(e.M()),
        B.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              google_analytics: { n: 1, br: i.readBool, bw: a.writeBool },
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
      return u(e.M(), t, r);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new f.BinaryReader(t),
        o = new e();
      return e.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return d(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      l(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CAccountPrivacyCookiePreferences_ThirdPartyAnalytics";
    }
  },
  He = class e extends B {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.youtube || p(e.M()),
        B.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              youtube: { n: 1, br: i.readBool, bw: a.writeBool },
              vimeo: { n: 2, br: i.readBool, bw: a.writeBool },
              sketchfab: { n: 3, br: i.readBool, bw: a.writeBool },
              twitter: { n: 4, br: i.readBool, bw: a.writeBool },
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
      return u(e.M(), t, r);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new f.BinaryReader(t),
        o = new e();
      return e.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return d(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      l(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CAccountPrivacyCookiePreferences_ThirdPartyContent";
    }
  },
  Fe = class e extends B {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(), B.initialize(this, t, 0, -1, void 0, null);
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
      let r = new f.BinaryReader(t),
        o = new e();
      return e.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return t;
    }
    serializeBinary() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {}
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CAccountPrivacy_GetCookiePreferences_Request";
    }
  },
  je = class e extends B {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.preferences || p(e.M()),
        B.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = { proto: e, fields: { preferences: { n: 1, c: he } } }),
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
      return u(e.M(), t, r);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let r = new f.BinaryReader(t),
        o = new e();
      return e.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(t, r) {
      return d(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, r) {
      l(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CAccountPrivacy_GetCookiePreferences_Response";
    }
  },
  ot;
((t) => {
  function e(r, o) {
    return r.SendMsg("AccountPrivacy.GetCookiePreferences#1", P(Fe, o), je, {
      ePrivilege: 1,
    });
  }
  t.GetCookiePreferences = e;
})((ot ||= {}));
function Ke(e) {
  if (e.preferenceControls.isTechnicallyNecessary) return !0;
  let t = Je();
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
var tr = {
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
var rr = {
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
  or = {
    name: "sessionid",
    options: { secure: !0, path: "/", sameSite: "none" },
    preferenceControls: { isTechnicallyNecessary: !0 },
  },
  ir = {
    name: "strResponsiveViewPrefs",
    options: { maxAge: 365 * 24 * 60 * 60 * 1e3 },
    preferenceControls: { isTechnicallyNecessary: !0 },
  };
var $e = {
    name: "shoppingCartGID",
    options: { path: "/", secure: !0, maxAge: 1e3 * 3600 * 24 * 7 },
    preferenceControls: { isTechnicallyNecessary: !0 },
  },
  ar = {
    name: "app_impressions",
    options: { path: "/", secure: !0 },
    preferenceControls: {
      isTechnicallyNecessary: !1,
      IsAllowed: (e) => !!e.valve_analytics?.product_impressions_tracking,
    },
  },
  nr = {
    name: "steamLoginSpoofSteamID",
    options: { path: "/", secure: !0 },
    preferenceControls: { isTechnicallyNecessary: !0 },
  };
function Xe(e) {
  if (!document.cookie) return;
  let t = document.cookie.match("(^|; )" + e.name + "=([^;]*)");
  if (t && t[2]) return decodeURIComponent(t[2]);
}
function it(e, t) {
  if (!document.cookie || !Ke(e)) return;
  let r = e.options?.path ?? "/",
    o = "";
  e.options?.expires
    ? (o += ";expires=" + e.options.expires.toUTCString())
    : e.options?.maxAge &&
      (o += ";max-age=" + Math.floor(e.options.maxAge / 1e3)),
    e.options?.secure && (o += ";secure"),
    (document.cookie =
      encodeURIComponent(e.name) +
      "=" +
      encodeURIComponent(t) +
      o +
      ";path=" +
      r);
}
function ur(e) {
  return it({ ...e, options: { ...e.options, expires: new Date(0) } }, "");
}
function Je() {
  return window.SSR?.renderContext?.cookiePrefs;
}
var Se = M(tt(), 1);
var st = M(Te(), 1);
function at() {
  return z.logged_in ? { type: "account" } : { type: "anonymous", gid: Xe($e) };
}
var nt = Se.default.createContext({ cartID: void 0 });
function Ye() {
  return Se.default.useContext(nt).cartID || at();
}
function ct(e, t, r) {
  return {
    queryKey: Q(t),
    queryFn: () => lt(e, t),
    staleTime: 30 * 60 * 1e3,
    ...r,
  };
}
function ut(e) {
  let t = Ve(),
    r = Ye();
  return Ge(ct(t, r, e));
}
function Hr(e, t, r) {
  if (e !== void 0)
    return t
      ? e.line_items.some((o) => o.type == 1 && o.packageid === t)
      : r
        ? e.line_items.some((o) => o.type == 2 && o.bundleid === r)
        : void 0;
}
function Fr(e) {
  return ut({ select: (t) => t.line_items?.length ?? 0, ...e });
}
async function jr(e, t, r, o) {
  let b = new FormData();
  t &&
    (t.length === 1
      ? b.set("subid", t[0].toString())
      : t.forEach((F) => b.set("subid[]", F.toString()))),
    r && b.set("bundleid", r.toString()),
    b.set("action", "add_to_cart");
  let y = await fetch(`${ze.STORE_BASE_URL}cart/addtocart`, {
    method: "post",
    body: b,
  });
  if (!y.ok) throw new Error("Failed to fetch /cart/addtocart");
  let h = await y.json();
  return [h?.success ? 1 : 2, h?.contents];
}
async function Sr(e, t, r, o, b, y) {
  return dt(e, t, [{ packageid: r, bundleid: o, bIsGift: b }], y);
}
async function dt(e, t, r, o) {
  let b = T.Init(q);
  if (!r || r.length === 0)
    return (
      console.error("No valid Package or Bundle provided to add to cart"),
      [8, null]
    );
  r.forEach((h) => {
    let F = b.Body().add_items();
    h.packageid
      ? F.set_packageid(h.packageid)
      : h.bundleid
        ? F.set_bundleid(h.bundleid)
        : console.error(
            "Neither a package nor bundle ID were provided with an item in AddItemsToAccountCart",
          ),
      h.bIsGift && F.flags(!0).set_is_gift(!0);
  }),
    o && b.Body().set_navdata(S.fromObject(We(o))),
    b.Body().set_user_country(t);
  let y = await E.AddItemsToCart(e, b);
  return (
    y.BSuccess() ||
      console.warn(`Failed to add item to account cart: ${y.GetEResult()}`),
    [y.GetEResult(), y.Body().toObject()]
  );
}
async function lt(e, t) {
  if (V(t)) {
    let r = T.Init(x);
    r.Body().set_user_country(Oe.country_code);
    let o = await E.GetCart(e, r);
    if (!o.BSuccess())
      throw `Error loading AccountCart: ${o.GetErrorMessage()}`;
    return o.Body().toObject()?.cart;
  } else if (Ee(t)) {
    let r = T.Init(D);
    Ne(r), r.Body().set_gidreplayoftransid(t.gid);
    let o = await Ae.ValidateCart(e, r);
    if (!o.BSuccess()) throw `Error loading ReplayCart: ${o.GetErrorMessage()}`;
    return Ct(o.Body().toObject());
  } else {
    if (!t.gid) return Ze(void 0);
    let r = T.Init(Le);
    r.Body().set_gidshoppingcart(t.gid);
    let o = await Ue.GetShoppingCartContents(e, r);
    if (!o.BSuccess())
      throw `Error loading Legacy Cart: ${o.GetErrorMessage()}`;
    return Ze(o.Body().toObject().contents);
  }
}
function Ze(e) {
  let t = { line_items: [] };
  return (
    e?.lineitems?.length &&
      (t.line_items = e.lineitems
        .map((r) => (r.package_item?.gidbundle ? null : pt(r)))
        .filter(K)),
    t
  );
}
function pt(e) {
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
function Ct(e) {
  let t = { subtotal: e.estimated_totals.subtotal, line_items: [] };
  return (
    (t.line_items = e.cart_items
      ?.map((r) => {
        let o;
        if (r.item_id?.packageid) o = 1;
        else if (r.item_id?.bundleid) o = 2;
        else return;
        return {
          line_item_id: r.line_item_id,
          type: o,
          packageid: r.item_id.packageid,
          bundleid: r.item_id.bundleid,
          is_valid: !0,
          price_when_added: r.price_when_added,
          gift_info: r.gift_info,
          flags: { is_gift: !!r.gift_info?.accountid_giftee },
          gidcoupon_applied: r.coupon_applied?.gidcoupon,
        };
      })
      .filter(K)),
    t
  );
}
var et = "unUserdataVersion";
function zr() {
  window.localStorage.setItem(
    et,
    (Number.parseInt(window.localStorage.getItem(et) || "0") + 1).toString(),
  );
}
export {
  Ke as a,
  or as b,
  ir as c,
  ar as d,
  nr as e,
  Xe as f,
  it as g,
  ur as h,
  Je as i,
  w as j,
  S as k,
  oe as l,
  E as m,
  D as n,
  Be as o,
  Ae as p,
  V as q,
  Vt as r,
  Nt as s,
  Ee as t,
  Qt as u,
  Kt as v,
  rt as w,
  Ye as x,
  ut as y,
  Hr as z,
  Fr as A,
  jr as B,
  Sr as C,
  Ze as D,
  zr as E,
};

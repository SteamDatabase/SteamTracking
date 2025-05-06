const CLSTAMP = 9715040;

import { k as be } from "./chunk-DA7NH6G7.js";
import { b as Be, l as Pe } from "./chunk-JZDTS7DQ.js";
import { c as L, d as K, e as Q } from "./chunk-UKC4WXIL.js";
import {
  a as qe,
  b as l,
  c as a,
  d as _,
  e as c,
  f as h,
  g as W,
  h as f,
  i as R,
  t as q,
  u as I,
  w as $,
  y as Re,
  z as ye,
} from "./chunk-WVC2ST5D.js";
import { b as Ce } from "./chunk-RRBZXOVG.js";
import { a as Ae } from "./chunk-2PB4MCAK.js";
import { b as We, y as fe } from "./chunk-7MZ33FQ6.js";
import {
  b as ue,
  e as j,
  g as _e,
  o as ce,
  y as he,
} from "./chunk-GFWNL6PD.js";
import { o as O } from "./chunk-O5D3JVGU.js";
import { a as U } from "./chunk-JILMSGAG.js";
import { d as g } from "./chunk-5OJBP4TA.js";
var i = g(qe());
var A = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || R(e.M()),
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
              steamid: {
                n: 1,
                br: l.readFixed64String,
                bw: a.writeFixed64String,
              },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = _(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, s) {
      return h(e.M(), t, s);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let s = new i.default.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, s);
    }
    static deserializeBinaryFromReader(t, s) {
      return W(e.MBF(), t, s);
    }
    serializeBinary() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, s) {
      f(e.M(), t, s);
    }
    serializeBase64String() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CWishlist_GetWishlist_Request";
    }
  },
  V = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.items || R(e.M()),
        i.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: { items: { n: 1, c: Y, r: !0, q: !0 } },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = _(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, s) {
      return h(e.M(), t, s);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let s = new i.default.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, s);
    }
    static deserializeBinaryFromReader(t, s) {
      return W(e.MBF(), t, s);
    }
    serializeBinary() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, s) {
      f(e.M(), t, s);
    }
    serializeBase64String() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CWishlist_GetWishlist_Response";
    }
  },
  Y = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || R(e.M()),
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
              appid: { n: 1, br: l.readUint32, bw: a.writeUint32 },
              priority: { n: 2, br: l.readUint32, bw: a.writeUint32 },
              date_added: { n: 3, br: l.readUint32, bw: a.writeUint32 },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = _(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, s) {
      return h(e.M(), t, s);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let s = new i.default.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, s);
    }
    static deserializeBinaryFromReader(t, s) {
      return W(e.MBF(), t, s);
    }
    serializeBinary() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, s) {
      f(e.M(), t, s);
    }
    serializeBase64String() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CWishlist_GetWishlist_Response_WishlistItem";
    }
  },
  J = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || R(e.M()),
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
              appid: { n: 1, br: l.readUint32, bw: a.writeUint32 },
              navdata: { n: 2, c: be },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = _(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, s) {
      return h(e.M(), t, s);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let s = new i.default.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, s);
    }
    static deserializeBinaryFromReader(t, s) {
      return W(e.MBF(), t, s);
    }
    serializeBinary() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, s) {
      f(e.M(), t, s);
    }
    serializeBase64String() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CWishlist_AddToWishlist_Request";
    }
  },
  X = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.wishlist_count || R(e.M()),
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
              wishlist_count: { n: 1, br: l.readUint32, bw: a.writeUint32 },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = _(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, s) {
      return h(e.M(), t, s);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let s = new i.default.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, s);
    }
    static deserializeBinaryFromReader(t, s) {
      return W(e.MBF(), t, s);
    }
    serializeBinary() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, s) {
      f(e.M(), t, s);
    }
    serializeBase64String() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CWishlist_AddToWishlist_Response";
    }
  },
  x = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || R(e.M()),
        i.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: { appid: { n: 1, br: l.readUint32, bw: a.writeUint32 } },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = _(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, s) {
      return h(e.M(), t, s);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let s = new i.default.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, s);
    }
    static deserializeBinaryFromReader(t, s) {
      return W(e.MBF(), t, s);
    }
    serializeBinary() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, s) {
      f(e.M(), t, s);
    }
    serializeBase64String() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CWishlist_RemoveFromWishlist_Request";
    }
  },
  Z = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.wishlist_count || R(e.M()),
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
              wishlist_count: { n: 1, br: l.readUint32, bw: a.writeUint32 },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = _(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, s) {
      return h(e.M(), t, s);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let s = new i.default.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, s);
    }
    static deserializeBinaryFromReader(t, s) {
      return W(e.MBF(), t, s);
    }
    serializeBinary() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, s) {
      f(e.M(), t, s);
    }
    serializeBase64String() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CWishlist_RemoveFromWishlist_Response";
    }
  },
  ee = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || R(e.M()),
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
              steamid: {
                n: 1,
                br: l.readFixed64String,
                bw: a.writeFixed64String,
              },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = _(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, s) {
      return h(e.M(), t, s);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let s = new i.default.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, s);
    }
    static deserializeBinaryFromReader(t, s) {
      return W(e.MBF(), t, s);
    }
    serializeBinary() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, s) {
      f(e.M(), t, s);
    }
    serializeBase64String() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CWishlist_GetWishlistItemCount_Request";
    }
  },
  te = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.count || R(e.M()),
        i.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: { count: { n: 1, br: l.readUint32, bw: a.writeUint32 } },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = _(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, s) {
      return h(e.M(), t, s);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let s = new i.default.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, s);
    }
    static deserializeBinaryFromReader(t, s) {
      return W(e.MBF(), t, s);
    }
    serializeBinary() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, s) {
      f(e.M(), t, s);
    }
    serializeBase64String() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CWishlist_GetWishlistItemCount_Response";
    }
  },
  se = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.context || R(e.M()),
        i.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: { context: { n: 1, c: Q }, data_request: { n: 2, c: K } },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = _(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, s) {
      return h(e.M(), t, s);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let s = new i.default.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, s);
    }
    static deserializeBinaryFromReader(t, s) {
      return W(e.MBF(), t, s);
    }
    serializeBinary() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, s) {
      f(e.M(), t, s);
    }
    serializeBase64String() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CWishlist_GetWishlistItemsOnSale_Request";
    }
  },
  ie = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.items || R(e.M()),
        i.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: { items: { n: 1, c: re, r: !0, q: !0 } },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = _(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, s) {
      return h(e.M(), t, s);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let s = new i.default.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, s);
    }
    static deserializeBinaryFromReader(t, s) {
      return W(e.MBF(), t, s);
    }
    serializeBinary() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, s) {
      f(e.M(), t, s);
    }
    serializeBase64String() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CWishlist_GetWishlistItemsOnSale_Response";
    }
  },
  re = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || R(e.M()),
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
              appid: { n: 1, br: l.readUint32, bw: a.writeUint32 },
              store_item: { n: 2, c: L },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = _(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, s) {
      return h(e.M(), t, s);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let s = new i.default.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, s);
    }
    static deserializeBinaryFromReader(t, s) {
      return W(e.MBF(), t, s);
    }
    serializeBinary() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, s) {
      f(e.M(), t, s);
    }
    serializeBase64String() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CWishlist_GetWishlistItemsOnSale_Response_WishlistItem";
    }
  },
  oe = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.macos_only || R(e.M()),
        i.Message.initialize(this, t, 0, -1, [24], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              macos_only: { n: 1, br: l.readBool, bw: a.writeBool },
              steamos_linux_only: { n: 2, br: l.readBool, bw: a.writeBool },
              only_games: { n: 10, br: l.readBool, bw: a.writeBool },
              only_software: { n: 11, br: l.readBool, bw: a.writeBool },
              only_dlc: { n: 12, br: l.readBool, bw: a.writeBool },
              only_free: { n: 13, br: l.readBool, bw: a.writeBool },
              max_price_in_cents: {
                n: 20,
                br: l.readInt64String,
                bw: a.writeInt64String,
              },
              min_discount_percent: {
                n: 21,
                br: l.readInt32,
                bw: a.writeInt32,
              },
              exclude_types: { n: 22, c: ne },
              steam_deck_filters: { n: 23, c: le },
              tagids_must_match: {
                n: 24,
                r: !0,
                q: !0,
                br: l.readInt32,
                pbr: l.readPackedInt32,
                bw: a.writeRepeatedInt32,
              },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = _(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, s) {
      return h(e.M(), t, s);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let s = new i.default.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, s);
    }
    static deserializeBinaryFromReader(t, s) {
      return W(e.MBF(), t, s);
    }
    serializeBinary() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, s) {
      f(e.M(), t, s);
    }
    serializeBase64String() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CWishlistFilters";
    }
  },
  ne = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.exclude_early_access || R(e.M()),
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
              exclude_early_access: { n: 1, br: l.readBool, bw: a.writeBool },
              exclude_coming_soon: { n: 2, br: l.readBool, bw: a.writeBool },
              exclude_vr_only: { n: 3, br: l.readBool, bw: a.writeBool },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = _(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, s) {
      return h(e.M(), t, s);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let s = new i.default.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, s);
    }
    static deserializeBinaryFromReader(t, s) {
      return W(e.MBF(), t, s);
    }
    serializeBinary() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, s) {
      f(e.M(), t, s);
    }
    serializeBase64String() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CWishlistFilters_ExcludeTypeFilters";
    }
  },
  le = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.include_verified || R(e.M()),
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
              include_verified: { n: 1, br: l.readBool, bw: a.writeBool },
              include_playable: { n: 2, br: l.readBool, bw: a.writeBool },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = _(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, s) {
      return h(e.M(), t, s);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let s = new i.default.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, s);
    }
    static deserializeBinaryFromReader(t, s) {
      return W(e.MBF(), t, s);
    }
    serializeBinary() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, s) {
      f(e.M(), t, s);
    }
    serializeBase64String() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CWishlistFilters_SteamDeckFilters";
    }
  },
  ae = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || R(e.M()),
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
              steamid: {
                n: 1,
                br: l.readFixed64String,
                bw: a.writeFixed64String,
              },
              context: { n: 2, c: Q },
              data_request: { n: 3, c: K },
              sort_order: { n: 4, d: 0, br: l.readEnum, bw: a.writeEnum },
              filters: { n: 5, c: oe },
              start_index: { n: 6, d: 0, br: l.readInt32, bw: a.writeInt32 },
              page_size: { n: 7, d: 100, br: l.readInt32, bw: a.writeInt32 },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = _(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, s) {
      return h(e.M(), t, s);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let s = new i.default.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, s);
    }
    static deserializeBinaryFromReader(t, s) {
      return W(e.MBF(), t, s);
    }
    serializeBinary() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, s) {
      f(e.M(), t, s);
    }
    serializeBase64String() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CWishlist_GetWishlistSortedFiltered_Request";
    }
  },
  de = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.items || R(e.M()),
        i.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: { items: { n: 1, c: me, r: !0, q: !0 } },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = _(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, s) {
      return h(e.M(), t, s);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let s = new i.default.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, s);
    }
    static deserializeBinaryFromReader(t, s) {
      return W(e.MBF(), t, s);
    }
    serializeBinary() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, s) {
      f(e.M(), t, s);
    }
    serializeBase64String() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CWishlist_GetWishlistSortedFiltered_Response";
    }
  },
  me = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || R(e.M()),
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
              appid: { n: 1, br: l.readUint32, bw: a.writeUint32 },
              priority: { n: 2, br: l.readUint32, bw: a.writeUint32 },
              date_added: { n: 3, br: l.readUint32, bw: a.writeUint32 },
              store_item: { n: 4, c: L },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = _(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, s) {
      return h(e.M(), t, s);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let s = new i.default.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, s);
    }
    static deserializeBinaryFromReader(t, s) {
      return W(e.MBF(), t, s);
    }
    serializeBinary() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, s) {
      f(e.M(), t, s);
    }
    serializeBase64String() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CWishlist_GetWishlistSortedFiltered_Response_WishlistItem";
    }
  },
  D;
((o) => {
  function e(n, p) {
    return n.SendMsg("Wishlist.GetWishlist#1", I(A, p), V, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  o.GetWishlist = e;
  function t(n, p) {
    return n.SendMsg("Wishlist.AddToWishlist#1", I(J, p), X, { ePrivilege: 1 });
  }
  o.AddToWishlist = t;
  function s(n, p) {
    return n.SendMsg("Wishlist.RemoveFromWishlist#1", I(x, p), Z, {
      ePrivilege: 1,
    });
  }
  o.RemoveFromWishlist = s;
  function r(n, p) {
    return n.SendMsg("Wishlist.GetWishlistItemCount#1", I(ee, p), te, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  o.GetWishlistItemCount = r;
  function y(n, p) {
    return n.SendMsg("Wishlist.GetWishlistItemsOnSale#1", I(se, p), ie, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  o.GetWishlistItemsOnSale = y;
  function C(n, p) {
    return n.SendMsg("Wishlist.GetWishlistSortedFiltered#1", I(ae, p), de, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  o.GetWishlistSortedFiltered = C;
})((D ||= {}));
async function De(e, t) {
  let s = await D.GetWishlistItemCount(e, { steamid: t });
  if (!s.BSuccess())
    throw `Error loading wishlist item count: ${s.GetErrorMessage()}`;
  return s.Body().toObject().count;
}
function ve(e) {
  return ["wishlistitemcount", e];
}
function ke(e, t) {
  return {
    queryKey: ve(t),
    queryFn: () => De(e, t),
    staleTime: 10 * 60 * 1e3,
    enabled: !!t && t != "0",
  };
}
function _t(e) {
  let t = $();
  return j(ke(t, e));
}
async function Ee(e, t) {
  let s = q.Init(x);
  s.Body().set_appid(t);
  let r = await D.RemoveFromWishlist(e, s);
  if (!r.BSuccess()) throw r.GetErrorMessage();
  return r.Body().wishlist_count();
}
function ct(e, t) {
  let s = $(),
    r = ue();
  return _e({
    mutationFn: async () => await Ee(s, t),
    onSuccess(y) {
      Ne(r, e, y);
      let C = (o) => o && { ...o, items: o.items.filter((n) => n.appid != t) };
      r.setQueriesData({ queryKey: ["wishlist", e], exact: !1 }, C),
        r.setQueriesData(
          { queryKey: ["WishlistSortedFiltered", e], exact: !1 },
          C,
        );
    },
  });
}
function Ne(e, t, s) {
  e.setQueryData(ve(t), () => s);
}
function Wt() {
  return !1;
}
function Ue(e) {
  let t = ye(),
    s = Re();
  return j(Le(t.GetAnonymousServiceTransport(), s, e));
}
function Le(e, t, s) {
  return {
    queryKey: ["LocalizedTagNames", s],
    queryFn: async () => {
      let r = `LocalizedTagNames2_${s}`,
        y = await t.GetObject(r),
        C = q.Init(Be);
      C.Body().set_language(s),
        y?.version_hash && C.Body().set_have_version_hash(y.version_hash);
      let o = await Pe.GetTagList(e, C),
        n;
      if (o.GetEResult() == 1)
        (n = o.Body().toObject()), t && t.StoreObject(r, n);
      else if (o.GetEResult() == 29) n = y || void 0;
      else if (y)
        console.warn(
          "Couldn't load updated tag localization, will continue with what we have from storage.",
        ),
          (n = y);
      else throw o.GetErrorMessage();
      let p = {};
      return (n?.tags || []).forEach(({ tagid: u, name: b }) => (p[u] = b)), p;
    },
    staleTime: 60 * 60 * 1e3,
  };
}
function Bt(e, t) {
  let { data: s } = Ue(t);
  return s && s[e];
}
var k = g(U(), 1),
  Fe = g(O(), 1),
  ge = k.createContext({
    AddImpression: () => {
      console.log("Impression Tracking not enabled");
    },
    BIsValid: () => !1,
  });
function Se() {
  return k.useContext(ge);
}
function vt(e) {
  return (0, Fe.jsx)(ge.Provider, {
    value: e.ImpressionTracker,
    children: e.children,
  });
}
var He = g(Ae(), 1),
  m = g(U(), 1);
var Ie = "F0YMvqVKHkY-";
function Qe() {
  return !(
    typeof HTMLElement < "u" &&
    typeof HTMLElement.prototype == "object" &&
    "popover" in HTMLElement.prototype
  );
}
async function Me() {
  Qe() && (await import("./popover-fn-UQN3UFIL.js")).apply();
}
var G = g(O(), 1);
Me();
function $e(e) {
  let [t, s] = ce(e, "-");
  return t === "left" || t === "right" ? [void 0, t] : [t, s];
}
function Ve(e) {
  let {
      direction: t,
      ignoreHorizontal: s,
      ignoreVertical: r,
      dismissOnClick: y,
      interactionMode: C = 0,
    } = e,
    o = (0, m.useRef)(null),
    n = (0, m.useRef)(!1),
    p = (0, m.useRef)(!1),
    B = (0, m.useRef)(null),
    [u, b] = (0, m.useState)(!1),
    [S, M] = (0, m.useMemo)(() => $e(t), [t]),
    P = (0, m.useCallback)(() => {
      if (!B.current || !o.current) return;
      let d = B.current.getBoundingClientRect();
      o.current.style.setProperty("--parentWidth", `${d.width}px`),
        o.current.style.setProperty("--parentHeight", `${d.height}px`),
        s ||
          (M === "left"
            ? S
              ? ((o.current.style.left = "unset"),
                (o.current.style.right = `${document.documentElement.clientWidth - d.right}px`))
              : ((o.current.style.left = "unset"),
                (o.current.style.right = `${document.documentElement.clientWidth - d.left}px`))
            : M === "right"
              ? S
                ? ((o.current.style.left = `${d.left}px`),
                  (o.current.style.right = "unset"))
                : ((o.current.style.left = `${d.right}px`),
                  (o.current.style.right = "unset"))
              : M === void 0 &&
                ((o.current.style.left = `${d.left}px`),
                (o.current.style.right = "unset"))),
        r ||
          (S === "down"
            ? ((o.current.style.top = `${d.bottom}px`),
              (o.current.style.bottom = "unset"),
              o.current.style.setProperty(
                "--availableHeight",
                `${document.documentElement.clientHeight - d.bottom}px`,
              ))
            : S === "up"
              ? ((o.current.style.top = "unset"),
                (o.current.style.bottom = `${document.documentElement.clientHeight - d.top}px`),
                o.current.style.setProperty("--availableHeight", `${d.top}px`))
              : S === void 0 &&
                ((o.current.style.top = `${d.top}px`),
                (o.current.style.bottom = "unset"),
                o.current.style.setProperty(
                  "--availableHeight",
                  `${document.documentElement.clientHeight - d.top}px`,
                )));
    }, [M, s, r, S]),
    E = (0, m.useMemo)(() => {
      if (B.current) return fe(B.current);
    }, [B.current]);
  (0, m.useEffect)(() => {
    if (u)
      return (
        o.current?.showPopover(),
        E?.addEventListener("scroll", P),
        () => E?.removeEventListener("scroll", P)
      );
    window.sessionStorage.getItem("DEBUG_StickyContextMenus") != "true" &&
      o.current?.hidePopover();
  }, [u, P, E]);
  let v = (0, m.useCallback)(() => {
      P(), b(!0), (p.current = !0);
    }, [P]),
    F = (0, m.useCallback)(() => {
      (p.current = !1), n.current || b(!1);
    }, []),
    pe = (0, m.useCallback)(() => {
      (n.current = !0), b(!0);
    }, []),
    w = (0, m.useCallback)(() => {
      (n.current = !1), p.current || b(!1);
    }, []),
    H = (0, m.useCallback)(() => {
      w(), F();
    }, [w, F]),
    Ge = (0, m.useCallback)(
      (d) => {
        d.key === "Enter" && (d.preventDefault(), u ? F() : v());
      },
      [F, v, u],
    ),
    Te = (0, m.useCallback)(
      (d) => {
        !d.currentTarget.contains(d.relatedTarget) &&
          !o.current?.contains(d.relatedTarget) &&
          F();
      },
      [F],
    ),
    we = (0, m.useCallback)(
      (d) => {
        let Oe = d.relatedTarget && !d.currentTarget.contains(d.relatedTarget),
          je = !d.relatedTarget && !n.current;
        (Oe || je) && (w(), b(!1));
      },
      [w],
    ),
    xe = (0, m.useCallback)(() => {
      u && y ? H() : v();
    }, [H, y, u, v]),
    ze = (0, m.useCallback)(
      (d) => {
        d.key === "Enter" && u && y ? H() : v(),
          d.key === "Escape" && u && (H(), d.stopPropagation());
      },
      [H, y, u, v],
    ),
    z = C === 0,
    N;
  return (
    z && !u
      ? (N = (d) => {
          d.preventDefault(), v();
        })
      : z || (N = u ? F : v),
    {
      isShowingMenu: u,
      triggerProps: {
        "aria-expanded": u,
        role: "button",
        onMouseEnter: z ? v : void 0,
        onMouseLeave: z ? F : void 0,
        onClick: N,
        ref: B,
        onKeyDown: Ge,
        onBlur: Te,
      },
      menuProps: {
        popover: "manual",
        role: "region",
        ref: o,
        onMouseEnter: pe,
        onMouseLeave: w,
        onFocus: pe,
        onBlur: we,
        onClick: xe,
        onKeyDown: ze,
        className: Ie,
      },
      closeMenu: H,
    }
  );
}
function Ht(e) {
  let {
      direction: t,
      interactionMode: s = 0,
      ignoreHorizontal: r,
      ignoreVertical: y,
      dismissOnClick: C,
      menuTarget: o,
      className: n,
      children: p,
      ...B
    } = e,
    { triggerProps: u, menuProps: b } = Ve(e);
  return !p || m.Children.toArray(p).length === 0
    ? o
    : (0, G.jsxs)(G.Fragment, {
        children: [
          (0, m.cloneElement)(o, u),
          (0, G.jsx)("div", {
            ...b,
            className: (0, He.default)(b.className, n),
            ...B,
            children: p,
          }),
        ],
      });
}
var T = g(U());
function Ot(e) {
  let { appID: t, feature: s, depth: r, children: y } = e,
    C = he(s, r),
    o = Se(),
    [n, p] = T.default.useState(void 0),
    B = T.default.useCallback(
      (M) => {
        M.isIntersecting &&
          p((P) => (P?.appID == t && P.snr == C ? P : { appID: t, snr: C }));
      },
      [t, C],
    );
  (0, T.useEffect)(() => {
    n && o.AddImpression(n.appID, n.snr);
  }, [o, n]);
  let u = Ce(B),
    b = t && (!n || (n.appID != t && n.snr != C)),
    S = We(y.ref, b ? u : void 0);
  return T.default.cloneElement(y, { ref: S });
}
export {
  Ve as a,
  Ht as b,
  Ue as c,
  Le as d,
  Bt as e,
  oe as f,
  ae as g,
  D as h,
  _t as i,
  ct as j,
  vt as k,
  Ot as l,
  Wt as m,
};

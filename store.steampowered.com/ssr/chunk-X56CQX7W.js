const CLSTAMP = 9643551;

import { k as We } from "./chunk-X6XOJKRD.js";
import { b as fe, l as Re } from "./chunk-GA7CNUC4.js";
import {
  H as L,
  J as ce,
  K as he,
  a as Te,
  b as l,
  c as n,
  d as u,
  e as _,
  f as c,
  g as h,
  h as W,
  i as f,
  t as O,
  u as S,
  x as E,
  y as N,
  z as U,
} from "./chunk-HGJJYMFS.js";
import { a as we } from "./chunk-GXOBS3EO.js";
import { y as _e } from "./chunk-ZILBLQKU.js";
import { b as me, d as z, f as pe, n as ue } from "./chunk-RSFMXIKC.js";
import { o as x } from "./chunk-5DRJZ3VL.js";
import { a as de } from "./chunk-65YUODX3.js";
import { d as g } from "./chunk-6W5PXMM2.js";
var i = g(Te());
var j = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || f(e.M()),
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
                bw: n.writeFixed64String,
              },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = u(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, s) {
      return c(e.M(), t, s);
    }
    static fromObject(t) {
      return _(e.M(), t);
    }
    static deserializeBinary(t) {
      let s = new i.default.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, s);
    }
    static deserializeBinaryFromReader(t, s) {
      return h(e.MBF(), t, s);
    }
    serializeBinary() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, s) {
      W(e.M(), t, s);
    }
    serializeBase64String() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CWishlist_GetWishlist_Request";
    }
  },
  K = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.items || f(e.M()),
        i.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: { items: { n: 1, c: Q, r: !0, q: !0 } },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = u(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, s) {
      return c(e.M(), t, s);
    }
    static fromObject(t) {
      return _(e.M(), t);
    }
    static deserializeBinary(t) {
      let s = new i.default.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, s);
    }
    static deserializeBinaryFromReader(t, s) {
      return h(e.MBF(), t, s);
    }
    serializeBinary() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, s) {
      W(e.M(), t, s);
    }
    serializeBase64String() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CWishlist_GetWishlist_Response";
    }
  },
  Q = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || f(e.M()),
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
              appid: { n: 1, br: l.readUint32, bw: n.writeUint32 },
              priority: { n: 2, br: l.readUint32, bw: n.writeUint32 },
              date_added: { n: 3, br: l.readUint32, bw: n.writeUint32 },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = u(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, s) {
      return c(e.M(), t, s);
    }
    static fromObject(t) {
      return _(e.M(), t);
    }
    static deserializeBinary(t) {
      let s = new i.default.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, s);
    }
    static deserializeBinaryFromReader(t, s) {
      return h(e.MBF(), t, s);
    }
    serializeBinary() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, s) {
      W(e.M(), t, s);
    }
    serializeBase64String() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CWishlist_GetWishlist_Response_WishlistItem";
    }
  },
  $ = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || f(e.M()),
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
              appid: { n: 1, br: l.readUint32, bw: n.writeUint32 },
              navdata: { n: 2, c: We },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = u(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, s) {
      return c(e.M(), t, s);
    }
    static fromObject(t) {
      return _(e.M(), t);
    }
    static deserializeBinary(t) {
      let s = new i.default.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, s);
    }
    static deserializeBinaryFromReader(t, s) {
      return h(e.MBF(), t, s);
    }
    serializeBinary() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, s) {
      W(e.M(), t, s);
    }
    serializeBase64String() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CWishlist_AddToWishlist_Request";
    }
  },
  V = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.wishlist_count || f(e.M()),
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
              wishlist_count: { n: 1, br: l.readUint32, bw: n.writeUint32 },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = u(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, s) {
      return c(e.M(), t, s);
    }
    static fromObject(t) {
      return _(e.M(), t);
    }
    static deserializeBinary(t) {
      let s = new i.default.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, s);
    }
    static deserializeBinaryFromReader(t, s) {
      return h(e.MBF(), t, s);
    }
    serializeBinary() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, s) {
      W(e.M(), t, s);
    }
    serializeBase64String() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CWishlist_AddToWishlist_Response";
    }
  },
  T = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || f(e.M()),
        i.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: { appid: { n: 1, br: l.readUint32, bw: n.writeUint32 } },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = u(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, s) {
      return c(e.M(), t, s);
    }
    static fromObject(t) {
      return _(e.M(), t);
    }
    static deserializeBinary(t) {
      let s = new i.default.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, s);
    }
    static deserializeBinaryFromReader(t, s) {
      return h(e.MBF(), t, s);
    }
    serializeBinary() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, s) {
      W(e.M(), t, s);
    }
    serializeBase64String() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CWishlist_RemoveFromWishlist_Request";
    }
  },
  Y = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.wishlist_count || f(e.M()),
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
              wishlist_count: { n: 1, br: l.readUint32, bw: n.writeUint32 },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = u(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, s) {
      return c(e.M(), t, s);
    }
    static fromObject(t) {
      return _(e.M(), t);
    }
    static deserializeBinary(t) {
      let s = new i.default.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, s);
    }
    static deserializeBinaryFromReader(t, s) {
      return h(e.MBF(), t, s);
    }
    serializeBinary() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, s) {
      W(e.M(), t, s);
    }
    serializeBase64String() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CWishlist_RemoveFromWishlist_Response";
    }
  },
  J = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || f(e.M()),
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
                bw: n.writeFixed64String,
              },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = u(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, s) {
      return c(e.M(), t, s);
    }
    static fromObject(t) {
      return _(e.M(), t);
    }
    static deserializeBinary(t) {
      let s = new i.default.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, s);
    }
    static deserializeBinaryFromReader(t, s) {
      return h(e.MBF(), t, s);
    }
    serializeBinary() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, s) {
      W(e.M(), t, s);
    }
    serializeBase64String() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CWishlist_GetWishlistItemCount_Request";
    }
  },
  X = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.count || f(e.M()),
        i.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: { count: { n: 1, br: l.readUint32, bw: n.writeUint32 } },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = u(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, s) {
      return c(e.M(), t, s);
    }
    static fromObject(t) {
      return _(e.M(), t);
    }
    static deserializeBinary(t) {
      let s = new i.default.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, s);
    }
    static deserializeBinaryFromReader(t, s) {
      return h(e.MBF(), t, s);
    }
    serializeBinary() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, s) {
      W(e.M(), t, s);
    }
    serializeBase64String() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CWishlist_GetWishlistItemCount_Response";
    }
  },
  Z = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.context || f(e.M()),
        i.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: { context: { n: 1, c: U }, data_request: { n: 2, c: N } },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = u(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, s) {
      return c(e.M(), t, s);
    }
    static fromObject(t) {
      return _(e.M(), t);
    }
    static deserializeBinary(t) {
      let s = new i.default.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, s);
    }
    static deserializeBinaryFromReader(t, s) {
      return h(e.MBF(), t, s);
    }
    serializeBinary() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, s) {
      W(e.M(), t, s);
    }
    serializeBase64String() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CWishlist_GetWishlistItemsOnSale_Request";
    }
  },
  ee = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.items || f(e.M()),
        i.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: { items: { n: 1, c: te, r: !0, q: !0 } },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = u(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, s) {
      return c(e.M(), t, s);
    }
    static fromObject(t) {
      return _(e.M(), t);
    }
    static deserializeBinary(t) {
      let s = new i.default.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, s);
    }
    static deserializeBinaryFromReader(t, s) {
      return h(e.MBF(), t, s);
    }
    serializeBinary() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, s) {
      W(e.M(), t, s);
    }
    serializeBase64String() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CWishlist_GetWishlistItemsOnSale_Response";
    }
  },
  te = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || f(e.M()),
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
              appid: { n: 1, br: l.readUint32, bw: n.writeUint32 },
              store_item: { n: 2, c: E },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = u(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, s) {
      return c(e.M(), t, s);
    }
    static fromObject(t) {
      return _(e.M(), t);
    }
    static deserializeBinary(t) {
      let s = new i.default.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, s);
    }
    static deserializeBinaryFromReader(t, s) {
      return h(e.MBF(), t, s);
    }
    serializeBinary() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, s) {
      W(e.M(), t, s);
    }
    serializeBase64String() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CWishlist_GetWishlistItemsOnSale_Response_WishlistItem";
    }
  },
  se = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.macos_only || f(e.M()),
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
              macos_only: { n: 1, br: l.readBool, bw: n.writeBool },
              steamos_linux_only: { n: 2, br: l.readBool, bw: n.writeBool },
              only_games: { n: 10, br: l.readBool, bw: n.writeBool },
              only_software: { n: 11, br: l.readBool, bw: n.writeBool },
              only_dlc: { n: 12, br: l.readBool, bw: n.writeBool },
              only_free: { n: 13, br: l.readBool, bw: n.writeBool },
              max_price_in_cents: {
                n: 20,
                br: l.readInt64String,
                bw: n.writeInt64String,
              },
              min_discount_percent: {
                n: 21,
                br: l.readInt32,
                bw: n.writeInt32,
              },
              exclude_types: { n: 22, c: ie },
              steam_deck_filters: { n: 23, c: re },
              tagids_must_match: {
                n: 24,
                r: !0,
                q: !0,
                br: l.readInt32,
                pbr: l.readPackedInt32,
                bw: n.writeRepeatedInt32,
              },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = u(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, s) {
      return c(e.M(), t, s);
    }
    static fromObject(t) {
      return _(e.M(), t);
    }
    static deserializeBinary(t) {
      let s = new i.default.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, s);
    }
    static deserializeBinaryFromReader(t, s) {
      return h(e.MBF(), t, s);
    }
    serializeBinary() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, s) {
      W(e.M(), t, s);
    }
    serializeBase64String() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CWishlistFilters";
    }
  },
  ie = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.exclude_early_access || f(e.M()),
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
              exclude_early_access: { n: 1, br: l.readBool, bw: n.writeBool },
              exclude_coming_soon: { n: 2, br: l.readBool, bw: n.writeBool },
              exclude_vr_only: { n: 3, br: l.readBool, bw: n.writeBool },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = u(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, s) {
      return c(e.M(), t, s);
    }
    static fromObject(t) {
      return _(e.M(), t);
    }
    static deserializeBinary(t) {
      let s = new i.default.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, s);
    }
    static deserializeBinaryFromReader(t, s) {
      return h(e.MBF(), t, s);
    }
    serializeBinary() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, s) {
      W(e.M(), t, s);
    }
    serializeBase64String() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CWishlistFilters_ExcludeTypeFilters";
    }
  },
  re = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.include_verified || f(e.M()),
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
              include_verified: { n: 1, br: l.readBool, bw: n.writeBool },
              include_playable: { n: 2, br: l.readBool, bw: n.writeBool },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = u(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, s) {
      return c(e.M(), t, s);
    }
    static fromObject(t) {
      return _(e.M(), t);
    }
    static deserializeBinary(t) {
      let s = new i.default.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, s);
    }
    static deserializeBinaryFromReader(t, s) {
      return h(e.MBF(), t, s);
    }
    serializeBinary() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, s) {
      W(e.M(), t, s);
    }
    serializeBase64String() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CWishlistFilters_SteamDeckFilters";
    }
  },
  oe = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || f(e.M()),
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
                bw: n.writeFixed64String,
              },
              context: { n: 2, c: U },
              data_request: { n: 3, c: N },
              sort_order: { n: 4, d: 0, br: l.readEnum, bw: n.writeEnum },
              filters: { n: 5, c: se },
              start_index: { n: 6, d: 0, br: l.readInt32, bw: n.writeInt32 },
              page_size: { n: 7, d: 100, br: l.readInt32, bw: n.writeInt32 },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = u(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, s) {
      return c(e.M(), t, s);
    }
    static fromObject(t) {
      return _(e.M(), t);
    }
    static deserializeBinary(t) {
      let s = new i.default.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, s);
    }
    static deserializeBinaryFromReader(t, s) {
      return h(e.MBF(), t, s);
    }
    serializeBinary() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, s) {
      W(e.M(), t, s);
    }
    serializeBase64String() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CWishlist_GetWishlistSortedFiltered_Request";
    }
  },
  le = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.items || f(e.M()),
        i.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: { items: { n: 1, c: ne, r: !0, q: !0 } },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = u(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, s) {
      return c(e.M(), t, s);
    }
    static fromObject(t) {
      return _(e.M(), t);
    }
    static deserializeBinary(t) {
      let s = new i.default.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, s);
    }
    static deserializeBinaryFromReader(t, s) {
      return h(e.MBF(), t, s);
    }
    serializeBinary() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, s) {
      W(e.M(), t, s);
    }
    serializeBase64String() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CWishlist_GetWishlistSortedFiltered_Response";
    }
  },
  ne = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || f(e.M()),
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
              appid: { n: 1, br: l.readUint32, bw: n.writeUint32 },
              priority: { n: 2, br: l.readUint32, bw: n.writeUint32 },
              date_added: { n: 3, br: l.readUint32, bw: n.writeUint32 },
              store_item: { n: 4, c: E },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = u(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, s) {
      return c(e.M(), t, s);
    }
    static fromObject(t) {
      return _(e.M(), t);
    }
    static deserializeBinary(t) {
      let s = new i.default.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, s);
    }
    static deserializeBinaryFromReader(t, s) {
      return h(e.MBF(), t, s);
    }
    serializeBinary() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, s) {
      W(e.M(), t, s);
    }
    serializeBase64String() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CWishlist_GetWishlistSortedFiltered_Response_WishlistItem";
    }
  },
  q;
((o) => {
  function e(d, p) {
    return d.SendMsg("Wishlist.GetWishlist#1", S(j, p), K, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  o.GetWishlist = e;
  function t(d, p) {
    return d.SendMsg("Wishlist.AddToWishlist#1", S($, p), V, { ePrivilege: 1 });
  }
  o.AddToWishlist = t;
  function s(d, p) {
    return d.SendMsg("Wishlist.RemoveFromWishlist#1", S(T, p), Y, {
      ePrivilege: 1,
    });
  }
  o.RemoveFromWishlist = s;
  function r(d, p) {
    return d.SendMsg("Wishlist.GetWishlistItemCount#1", S(J, p), X, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  o.GetWishlistItemCount = r;
  function y(d, p) {
    return d.SendMsg("Wishlist.GetWishlistItemsOnSale#1", S(Z, p), ee, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  o.GetWishlistItemsOnSale = y;
  function C(d, p) {
    return d.SendMsg("Wishlist.GetWishlistSortedFiltered#1", S(oe, p), le, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  o.GetWishlistSortedFiltered = C;
})((q ||= {}));
async function xe(e, t) {
  let s = await q.GetWishlistItemCount(e, { steamid: t });
  if (!s.BSuccess())
    throw `Error loading wishlist item count: ${s.GetErrorMessage()}`;
  return s.Body().toObject().count;
}
function ye(e) {
  return ["wishlistitemcount", e];
}
function ze(e, t) {
  return {
    queryKey: ye(t),
    queryFn: () => xe(e, t),
    staleTime: 10 * 60 * 1e3,
    enabled: !!t && t != "0",
  };
}
function nt(e) {
  let t = L();
  return z(ze(t, e));
}
async function Oe(e, t) {
  let s = O.Init(T);
  s.Body().set_appid(t);
  let r = await q.RemoveFromWishlist(e, s);
  if (!r.BSuccess()) throw r.GetErrorMessage();
  return r.Body().wishlist_count();
}
function at(e, t) {
  let s = L(),
    r = me();
  return pe({
    mutationFn: async () => await Oe(s, t),
    onSuccess(y) {
      je(r, e, y);
      let C = (o) => o && { ...o, items: o.items.filter((d) => d.appid != t) };
      r.setQueriesData({ queryKey: ["wishlist", e], exact: !1 }, C),
        r.setQueriesData(
          { queryKey: ["WishlistSortedFiltered", e], exact: !1 },
          C,
        );
    },
  });
}
function je(e, t, s) {
  e.setQueryData(ye(t), () => s);
}
function mt() {
  return !1;
}
var A = g(de(), 1),
  be = g(x(), 1),
  Ce = A.createContext({
    AddImpression: () => {
      console.log("Impression Tracking not enabled");
    },
    BIsValid: () => !1,
  });
function ut() {
  return A.useContext(Ce);
}
function _t(e) {
  return (0, be.jsx)(Ce.Provider, {
    value: e.ImpressionTracker,
    children: e.children,
  });
}
function qe(e) {
  let t = he(),
    s = ce();
  return z(Ae(t.GetAnonymousServiceTransport(), s, e));
}
function Ae(e, t, s) {
  return {
    queryKey: ["LocalizedTagNames", s],
    queryFn: async () => {
      let r = `LocalizedTagNames2_${s}`,
        y = await t.GetObject(r),
        C = O.Init(fe);
      C.Body().set_language(s),
        y?.version_hash && C.Body().set_have_version_hash(y.version_hash);
      let o = await Re.GetTagList(e, C),
        d;
      if (o.GetEResult() == 1)
        (d = o.Body().toObject()), t && t.StoreObject(r, d);
      else if (o.GetEResult() == 29) d = y || void 0;
      else if (y)
        console.warn(
          "Couldn't load updated tag localization, will continue with what we have from storage.",
        ),
          (d = y);
      else throw o.GetErrorMessage();
      let p = {};
      return (d?.tags || []).forEach(({ tagid: R, name: b }) => (p[R] = b)), p;
    },
    staleTime: 60 * 60 * 1e3,
  };
}
function yt(e, t) {
  let { data: s } = qe(t);
  return s && s[e];
}
var ve = g(we(), 1),
  m = g(de(), 1);
var Be = "F0YMvqVKHkY-";
function ke() {
  return !(
    typeof HTMLElement < "u" &&
    typeof HTMLElement.prototype == "object" &&
    "popover" in HTMLElement.prototype
  );
}
async function Pe() {
  ke() && (await import("./popover-fn-FLCXQ46Q.js")).apply();
}
var I = g(x(), 1);
Pe();
function Ee(e) {
  let [t, s] = ue(e, "-");
  return t === "left" || t === "right" ? [void 0, t] : [t, s];
}
function Ne(e) {
  let {
      direction: t,
      ignoreHorizontal: s,
      ignoreVertical: r,
      dismissOnClick: y,
      interactionMode: C = 0,
    } = e,
    o = (0, m.useRef)(null),
    d = (0, m.useRef)(!1),
    p = (0, m.useRef)(!1),
    B = (0, m.useRef)(null),
    [R, b] = (0, m.useState)(!1),
    [F, w] = (0, m.useMemo)(() => Ee(t), [t]),
    M = (0, m.useCallback)(() => {
      if (!B.current || !o.current) return;
      let a = B.current.getBoundingClientRect();
      o.current.style.setProperty("--parentWidth", `${a.width}px`),
        o.current.style.setProperty("--parentHeight", `${a.height}px`),
        s ||
          (w === "left"
            ? F
              ? ((o.current.style.left = "unset"),
                (o.current.style.right = `${document.documentElement.clientWidth - a.right}px`))
              : ((o.current.style.left = "unset"),
                (o.current.style.right = `${document.documentElement.clientWidth - a.left}px`))
            : w === "right"
              ? F
                ? ((o.current.style.left = `${a.left}px`),
                  (o.current.style.right = "unset"))
                : ((o.current.style.left = `${a.right}px`),
                  (o.current.style.right = "unset"))
              : w === void 0 &&
                ((o.current.style.left = `${a.left}px`),
                (o.current.style.right = "unset"))),
        r ||
          (F === "down"
            ? ((o.current.style.top = `${a.bottom}px`),
              (o.current.style.bottom = "unset"),
              o.current.style.setProperty(
                "--availableHeight",
                `${document.documentElement.clientHeight - a.bottom}px`,
              ))
            : F === "up"
              ? ((o.current.style.top = "unset"),
                (o.current.style.bottom = `${document.documentElement.clientHeight - a.top}px`),
                o.current.style.setProperty("--availableHeight", `${a.top}px`))
              : F === void 0 &&
                ((o.current.style.top = `${a.top}px`),
                (o.current.style.bottom = "unset"),
                o.current.style.setProperty(
                  "--availableHeight",
                  `${document.documentElement.clientHeight - a.top}px`,
                )));
    }, [w, s, r, F]),
    D = (0, m.useMemo)(() => {
      if (B.current) return _e(B.current);
    }, [B.current]);
  (0, m.useEffect)(() => {
    if (R)
      return (
        o.current?.showPopover(),
        D?.addEventListener("scroll", M),
        () => D?.removeEventListener("scroll", M)
      );
    window.sessionStorage.getItem("DEBUG_StickyContextMenus") != "true" &&
      o.current?.hidePopover();
  }, [R, M, D]);
  let P = (0, m.useCallback)(() => {
      M(), b(!0), (p.current = !0);
    }, [M]),
    v = (0, m.useCallback)(() => {
      (p.current = !1), d.current || b(!1);
    }, []),
    ae = (0, m.useCallback)(() => {
      (d.current = !0), b(!0);
    }, []),
    H = (0, m.useCallback)(() => {
      (d.current = !1), p.current || b(!1);
    }, []),
    G = (0, m.useCallback)(() => {
      H(), v();
    }, [H, v]),
    ge = (0, m.useCallback)(
      (a) => {
        a.key === "Enter" && (a.preventDefault(), R ? v() : P());
      },
      [v, P, R],
    ),
    Se = (0, m.useCallback)(
      (a) => {
        !a.currentTarget.contains(a.relatedTarget) &&
          !o.current?.contains(a.relatedTarget) &&
          v();
      },
      [v],
    ),
    Fe = (0, m.useCallback)(
      (a) => {
        let He = a.relatedTarget && !a.currentTarget.contains(a.relatedTarget),
          Ge = !a.relatedTarget && !d.current;
        (He || Ge) && (H(), b(!1));
      },
      [H],
    ),
    Ie = (0, m.useCallback)(() => {
      R && y ? G() : P();
    }, [G, y, R, P]),
    Me = (0, m.useCallback)(
      (a) => {
        a.key === "Enter" && R && y ? G() : P();
      },
      [G, y, R, P],
    ),
    k = C === 0;
  return {
    isShowingMenu: R,
    triggerProps: {
      "aria-expanded": R,
      onMouseEnter: k ? P : void 0,
      onMouseLeave: k ? v : void 0,
      onClick: k ? void 0 : R ? v : P,
      ref: B,
      onKeyDown: ge,
      onBlur: Se,
    },
    menuProps: {
      popover: "manual",
      role: "region",
      ref: o,
      onMouseEnter: ae,
      onMouseLeave: H,
      onFocus: ae,
      onBlur: Fe,
      onClick: Ie,
      onKeyDown: Me,
      className: Be,
    },
    closeMenu: G,
  };
}
function gt(e) {
  let {
      direction: t,
      interactionMode: s = 0,
      ignoreHorizontal: r,
      ignoreVertical: y,
      dismissOnClick: C,
      menuTarget: o,
      className: d,
      children: p,
      ...B
    } = e,
    { triggerProps: R, menuProps: b } = Ne(e);
  return p
    ? (0, I.jsxs)(I.Fragment, {
        children: [
          (0, m.cloneElement)(o, R),
          (0, I.jsx)("div", {
            ...b,
            className: (0, ve.default)(b.className, d),
            ...B,
            children: p,
          }),
        ],
      })
    : o;
}
export {
  Ne as a,
  gt as b,
  ut as c,
  _t as d,
  qe as e,
  Ae as f,
  yt as g,
  se as h,
  oe as i,
  q as j,
  nt as k,
  at as l,
  mt as m,
};

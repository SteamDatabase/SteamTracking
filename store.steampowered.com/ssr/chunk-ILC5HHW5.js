const CLSTAMP = 9686915;

import { k as fe } from "./chunk-KB7FELS7.js";
import { b as Re, l as ye } from "./chunk-XRRIX7EV.js";
import { c as N, d as U, e as L } from "./chunk-LQVY2IH3.js";
import {
  a as we,
  b as l,
  c as n,
  d as u,
  e as _,
  f as c,
  g as h,
  h as W,
  i as f,
  t as j,
  u as S,
  w as K,
  y as he,
  z as We,
} from "./chunk-ZAEHAUWC.js";
import { a as xe } from "./chunk-YK2VXHHZ.js";
import { y as ce } from "./chunk-UD465EZP.js";
import { b as pe, e as O, g as ue, o as _e } from "./chunk-CG2AVMMX.js";
import { o as z } from "./chunk-NSLGW32G.js";
import { a as me } from "./chunk-ASFGMT32.js";
import { d as g } from "./chunk-BWYQWJMA.js";
var i = g(we());
var q = class e extends i.Message {
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
  Q = class e extends i.Message {
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
            fields: { items: { n: 1, c: $, r: !0, q: !0 } },
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
  V = class e extends i.Message {
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
              navdata: { n: 2, c: fe },
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
  J = class e extends i.Message {
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
  X = class e extends i.Message {
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
  Z = class e extends i.Message {
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
  ee = class e extends i.Message {
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
            fields: { context: { n: 1, c: L }, data_request: { n: 2, c: U } },
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
  te = class e extends i.Message {
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
            fields: { items: { n: 1, c: se, r: !0, q: !0 } },
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
  se = class e extends i.Message {
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
              store_item: { n: 2, c: N },
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
  ie = class e extends i.Message {
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
              exclude_types: { n: 22, c: re },
              steam_deck_filters: { n: 23, c: oe },
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
  re = class e extends i.Message {
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
  oe = class e extends i.Message {
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
  le = class e extends i.Message {
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
              context: { n: 2, c: L },
              data_request: { n: 3, c: U },
              sort_order: { n: 4, d: 0, br: l.readEnum, bw: n.writeEnum },
              filters: { n: 5, c: ie },
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
  ne = class e extends i.Message {
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
            fields: { items: { n: 1, c: ae, r: !0, q: !0 } },
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
  ae = class e extends i.Message {
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
              store_item: { n: 4, c: N },
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
  A;
((o) => {
  function e(m, p) {
    return m.SendMsg("Wishlist.GetWishlist#1", S(q, p), Q, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  o.GetWishlist = e;
  function t(m, p) {
    return m.SendMsg("Wishlist.AddToWishlist#1", S(V, p), Y, { ePrivilege: 1 });
  }
  o.AddToWishlist = t;
  function s(m, p) {
    return m.SendMsg("Wishlist.RemoveFromWishlist#1", S(T, p), J, {
      ePrivilege: 1,
    });
  }
  o.RemoveFromWishlist = s;
  function r(m, p) {
    return m.SendMsg("Wishlist.GetWishlistItemCount#1", S(X, p), Z, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  o.GetWishlistItemCount = r;
  function y(m, p) {
    return m.SendMsg("Wishlist.GetWishlistItemsOnSale#1", S(ee, p), te, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  o.GetWishlistItemsOnSale = y;
  function C(m, p) {
    return m.SendMsg("Wishlist.GetWishlistSortedFiltered#1", S(le, p), ne, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  o.GetWishlistSortedFiltered = C;
})((A ||= {}));
async function ze(e, t) {
  let s = await A.GetWishlistItemCount(e, { steamid: t });
  if (!s.BSuccess())
    throw `Error loading wishlist item count: ${s.GetErrorMessage()}`;
  return s.Body().toObject().count;
}
function Ce(e) {
  return ["wishlistitemcount", e];
}
function Oe(e, t) {
  return {
    queryKey: Ce(t),
    queryFn: () => ze(e, t),
    staleTime: 10 * 60 * 1e3,
    enabled: !!t && t != "0",
  };
}
function at(e) {
  let t = K();
  return O(Oe(t, e));
}
async function je(e, t) {
  let s = j.Init(T);
  s.Body().set_appid(t);
  let r = await A.RemoveFromWishlist(e, s);
  if (!r.BSuccess()) throw r.GetErrorMessage();
  return r.Body().wishlist_count();
}
function dt(e, t) {
  let s = K(),
    r = pe();
  return ue({
    mutationFn: async () => await je(s, t),
    onSuccess(y) {
      qe(r, e, y);
      let C = (o) => o && { ...o, items: o.items.filter((m) => m.appid != t) };
      r.setQueriesData({ queryKey: ["wishlist", e], exact: !1 }, C),
        r.setQueriesData(
          { queryKey: ["WishlistSortedFiltered", e], exact: !1 },
          C,
        );
    },
  });
}
function qe(e, t, s) {
  e.setQueryData(Ce(t), () => s);
}
function pt() {
  return !1;
}
var D = g(me(), 1),
  Be = g(z(), 1),
  be = D.createContext({
    AddImpression: () => {
      console.log("Impression Tracking not enabled");
    },
    BIsValid: () => !1,
  });
function _t() {
  return D.useContext(be);
}
function ct(e) {
  return (0, Be.jsx)(be.Provider, {
    value: e.ImpressionTracker,
    children: e.children,
  });
}
function Ae(e) {
  let t = We(),
    s = he();
  return O(De(t.GetAnonymousServiceTransport(), s, e));
}
function De(e, t, s) {
  return {
    queryKey: ["LocalizedTagNames", s],
    queryFn: async () => {
      let r = `LocalizedTagNames2_${s}`,
        y = await t.GetObject(r),
        C = j.Init(Re);
      C.Body().set_language(s),
        y?.version_hash && C.Body().set_have_version_hash(y.version_hash);
      let o = await ye.GetTagList(e, C),
        m;
      if (o.GetEResult() == 1)
        (m = o.Body().toObject()), t && t.StoreObject(r, m);
      else if (o.GetEResult() == 29) m = y || void 0;
      else if (y)
        console.warn(
          "Couldn't load updated tag localization, will continue with what we have from storage.",
        ),
          (m = y);
      else throw o.GetErrorMessage();
      let p = {};
      return (m?.tags || []).forEach(({ tagid: R, name: b }) => (p[R] = b)), p;
    },
    staleTime: 60 * 60 * 1e3,
  };
}
function Ct(e, t) {
  let { data: s } = Ae(t);
  return s && s[e];
}
var ge = g(xe(), 1),
  d = g(me(), 1);
var Pe = "F0YMvqVKHkY-";
function Ee() {
  return !(
    typeof HTMLElement < "u" &&
    typeof HTMLElement.prototype == "object" &&
    "popover" in HTMLElement.prototype
  );
}
async function ve() {
  Ee() && (await import("./popover-fn-M235FJET.js")).apply();
}
var M = g(z(), 1);
ve();
function Ne(e) {
  let [t, s] = _e(e, "-");
  return t === "left" || t === "right" ? [void 0, t] : [t, s];
}
function Ue(e) {
  let {
      direction: t,
      ignoreHorizontal: s,
      ignoreVertical: r,
      dismissOnClick: y,
      interactionMode: C = 0,
    } = e,
    o = (0, d.useRef)(null),
    m = (0, d.useRef)(!1),
    p = (0, d.useRef)(!1),
    B = (0, d.useRef)(null),
    [R, b] = (0, d.useState)(!1),
    [F, w] = (0, d.useMemo)(() => Ne(t), [t]),
    H = (0, d.useCallback)(() => {
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
    k = (0, d.useMemo)(() => {
      if (B.current) return ce(B.current);
    }, [B.current]);
  (0, d.useEffect)(() => {
    if (R)
      return (
        o.current?.showPopover(),
        k?.addEventListener("scroll", H),
        () => k?.removeEventListener("scroll", H)
      );
    window.sessionStorage.getItem("DEBUG_StickyContextMenus") != "true" &&
      o.current?.hidePopover();
  }, [R, H, k]);
  let P = (0, d.useCallback)(() => {
      H(), b(!0), (p.current = !0);
    }, [H]),
    v = (0, d.useCallback)(() => {
      (p.current = !1), m.current || b(!1);
    }, []),
    de = (0, d.useCallback)(() => {
      (m.current = !0), b(!0);
    }, []),
    G = (0, d.useCallback)(() => {
      (m.current = !1), p.current || b(!1);
    }, []),
    I = (0, d.useCallback)(() => {
      G(), v();
    }, [G, v]),
    Se = (0, d.useCallback)(
      (a) => {
        a.key === "Enter" && (a.preventDefault(), R ? v() : P());
      },
      [v, P, R],
    ),
    Fe = (0, d.useCallback)(
      (a) => {
        !a.currentTarget.contains(a.relatedTarget) &&
          !o.current?.contains(a.relatedTarget) &&
          v();
      },
      [v],
    ),
    Ie = (0, d.useCallback)(
      (a) => {
        let Ge = a.relatedTarget && !a.currentTarget.contains(a.relatedTarget),
          Te = !a.relatedTarget && !m.current;
        (Ge || Te) && (G(), b(!1));
      },
      [G],
    ),
    Me = (0, d.useCallback)(() => {
      R && y ? I() : P();
    }, [I, y, R, P]),
    He = (0, d.useCallback)(
      (a) => {
        a.key === "Enter" && R && y ? I() : P(),
          a.key === "Escape" && R && (I(), a.stopPropagation());
      },
      [I, y, R, P],
    ),
    x = C === 0,
    E;
  return (
    x && !R
      ? (E = (a) => {
          a.preventDefault(), P();
        })
      : x || (E = R ? v : P),
    {
      isShowingMenu: R,
      triggerProps: {
        "aria-expanded": R,
        role: "button",
        onMouseEnter: x ? P : void 0,
        onMouseLeave: x ? v : void 0,
        onClick: E,
        ref: B,
        onKeyDown: Se,
        onBlur: Fe,
      },
      menuProps: {
        popover: "manual",
        role: "region",
        ref: o,
        onMouseEnter: de,
        onMouseLeave: G,
        onFocus: de,
        onBlur: Ie,
        onClick: Me,
        onKeyDown: He,
        className: Pe,
      },
      closeMenu: I,
    }
  );
}
function St(e) {
  let {
      direction: t,
      interactionMode: s = 0,
      ignoreHorizontal: r,
      ignoreVertical: y,
      dismissOnClick: C,
      menuTarget: o,
      className: m,
      children: p,
      ...B
    } = e,
    { triggerProps: R, menuProps: b } = Ue(e);
  return !p || d.Children.toArray(p).length === 0
    ? o
    : (0, M.jsxs)(M.Fragment, {
        children: [
          (0, d.cloneElement)(o, R),
          (0, M.jsx)("div", {
            ...b,
            className: (0, ge.default)(b.className, m),
            ...B,
            children: p,
          }),
        ],
      });
}
export {
  Ue as a,
  St as b,
  _t as c,
  ct as d,
  Ae as e,
  De as f,
  Ct as g,
  ie as h,
  le as i,
  A as j,
  at as k,
  dt as l,
  pt as m,
};

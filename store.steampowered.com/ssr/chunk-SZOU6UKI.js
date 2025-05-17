const CLSTAMP = 9754532;

import { k as K } from "./chunk-RTI5QW3N.js";
import { c as B, d as b, e as P } from "./chunk-X7IQNE52.js";
import {
  a as $,
  b as o,
  c as l,
  d as a,
  e as n,
  f as d,
  g as m,
  h as p,
  i as _,
  t as Q,
  u as h,
  w as F,
} from "./chunk-D5QYMZPL.js";
import { b as N, e as k, g as E } from "./chunk-E7MLRWUE.js";
import { e as L } from "./chunk-XI7ETPFA.js";
var i = L($());
var C = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || _(e.M()),
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
                br: o.readFixed64String,
                bw: l.writeFixed64String,
              },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = a(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, s) {
      return d(e.M(), t, s);
    }
    static fromObject(t) {
      return n(e.M(), t);
    }
    static deserializeBinary(t) {
      let s = new i.default.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, s);
    }
    static deserializeBinaryFromReader(t, s) {
      return m(e.MBF(), t, s);
    }
    serializeBinary() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, s) {
      p(e.M(), t, s);
    }
    serializeBase64String() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CWishlist_GetWishlist_Request";
    }
  },
  v = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.items || _(e.M()),
        i.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: { items: { n: 1, c: S, r: !0, q: !0 } },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = a(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, s) {
      return d(e.M(), t, s);
    }
    static fromObject(t) {
      return n(e.M(), t);
    }
    static deserializeBinary(t) {
      let s = new i.default.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, s);
    }
    static deserializeBinaryFromReader(t, s) {
      return m(e.MBF(), t, s);
    }
    serializeBinary() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, s) {
      p(e.M(), t, s);
    }
    serializeBase64String() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CWishlist_GetWishlist_Response";
    }
  },
  S = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || _(e.M()),
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
              appid: { n: 1, br: o.readUint32, bw: l.writeUint32 },
              priority: { n: 2, br: o.readUint32, bw: l.writeUint32 },
              date_added: { n: 3, br: o.readUint32, bw: l.writeUint32 },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = a(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, s) {
      return d(e.M(), t, s);
    }
    static fromObject(t) {
      return n(e.M(), t);
    }
    static deserializeBinary(t) {
      let s = new i.default.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, s);
    }
    static deserializeBinaryFromReader(t, s) {
      return m(e.MBF(), t, s);
    }
    serializeBinary() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, s) {
      p(e.M(), t, s);
    }
    serializeBase64String() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CWishlist_GetWishlist_Response_WishlistItem";
    }
  },
  I = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || _(e.M()),
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
              appid: { n: 1, br: o.readUint32, bw: l.writeUint32 },
              navdata: { n: 2, c: K },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = a(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, s) {
      return d(e.M(), t, s);
    }
    static fromObject(t) {
      return n(e.M(), t);
    }
    static deserializeBinary(t) {
      let s = new i.default.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, s);
    }
    static deserializeBinaryFromReader(t, s) {
      return m(e.MBF(), t, s);
    }
    serializeBinary() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, s) {
      p(e.M(), t, s);
    }
    serializeBase64String() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CWishlist_AddToWishlist_Request";
    }
  },
  g = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.wishlist_count || _(e.M()),
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
              wishlist_count: { n: 1, br: o.readUint32, bw: l.writeUint32 },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = a(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, s) {
      return d(e.M(), t, s);
    }
    static fromObject(t) {
      return n(e.M(), t);
    }
    static deserializeBinary(t) {
      let s = new i.default.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, s);
    }
    static deserializeBinaryFromReader(t, s) {
      return m(e.MBF(), t, s);
    }
    serializeBinary() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, s) {
      p(e.M(), t, s);
    }
    serializeBase64String() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CWishlist_AddToWishlist_Response";
    }
  },
  c = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || _(e.M()),
        i.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: { appid: { n: 1, br: o.readUint32, bw: l.writeUint32 } },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = a(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, s) {
      return d(e.M(), t, s);
    }
    static fromObject(t) {
      return n(e.M(), t);
    }
    static deserializeBinary(t) {
      let s = new i.default.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, s);
    }
    static deserializeBinaryFromReader(t, s) {
      return m(e.MBF(), t, s);
    }
    serializeBinary() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, s) {
      p(e.M(), t, s);
    }
    serializeBase64String() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CWishlist_RemoveFromWishlist_Request";
    }
  },
  G = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.wishlist_count || _(e.M()),
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
              wishlist_count: { n: 1, br: o.readUint32, bw: l.writeUint32 },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = a(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, s) {
      return d(e.M(), t, s);
    }
    static fromObject(t) {
      return n(e.M(), t);
    }
    static deserializeBinary(t) {
      let s = new i.default.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, s);
    }
    static deserializeBinaryFromReader(t, s) {
      return m(e.MBF(), t, s);
    }
    serializeBinary() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, s) {
      p(e.M(), t, s);
    }
    serializeBase64String() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CWishlist_RemoveFromWishlist_Response";
    }
  },
  M = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || _(e.M()),
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
                br: o.readFixed64String,
                bw: l.writeFixed64String,
              },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = a(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, s) {
      return d(e.M(), t, s);
    }
    static fromObject(t) {
      return n(e.M(), t);
    }
    static deserializeBinary(t) {
      let s = new i.default.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, s);
    }
    static deserializeBinaryFromReader(t, s) {
      return m(e.MBF(), t, s);
    }
    serializeBinary() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, s) {
      p(e.M(), t, s);
    }
    serializeBase64String() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CWishlist_GetWishlistItemCount_Request";
    }
  },
  H = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.count || _(e.M()),
        i.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: { count: { n: 1, br: o.readUint32, bw: l.writeUint32 } },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = a(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, s) {
      return d(e.M(), t, s);
    }
    static fromObject(t) {
      return n(e.M(), t);
    }
    static deserializeBinary(t) {
      let s = new i.default.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, s);
    }
    static deserializeBinaryFromReader(t, s) {
      return m(e.MBF(), t, s);
    }
    serializeBinary() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, s) {
      p(e.M(), t, s);
    }
    serializeBase64String() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CWishlist_GetWishlistItemCount_Response";
    }
  },
  w = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.context || _(e.M()),
        i.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: { context: { n: 1, c: P }, data_request: { n: 2, c: b } },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = a(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, s) {
      return d(e.M(), t, s);
    }
    static fromObject(t) {
      return n(e.M(), t);
    }
    static deserializeBinary(t) {
      let s = new i.default.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, s);
    }
    static deserializeBinaryFromReader(t, s) {
      return m(e.MBF(), t, s);
    }
    serializeBinary() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, s) {
      p(e.M(), t, s);
    }
    serializeBase64String() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CWishlist_GetWishlistItemsOnSale_Request";
    }
  },
  z = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.items || _(e.M()),
        i.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: { items: { n: 1, c: x, r: !0, q: !0 } },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = a(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, s) {
      return d(e.M(), t, s);
    }
    static fromObject(t) {
      return n(e.M(), t);
    }
    static deserializeBinary(t) {
      let s = new i.default.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, s);
    }
    static deserializeBinaryFromReader(t, s) {
      return m(e.MBF(), t, s);
    }
    serializeBinary() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, s) {
      p(e.M(), t, s);
    }
    serializeBase64String() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CWishlist_GetWishlistItemsOnSale_Response";
    }
  },
  x = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || _(e.M()),
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
              appid: { n: 1, br: o.readUint32, bw: l.writeUint32 },
              store_item: { n: 2, c: B },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = a(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, s) {
      return d(e.M(), t, s);
    }
    static fromObject(t) {
      return n(e.M(), t);
    }
    static deserializeBinary(t) {
      let s = new i.default.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, s);
    }
    static deserializeBinaryFromReader(t, s) {
      return m(e.MBF(), t, s);
    }
    serializeBinary() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, s) {
      p(e.M(), t, s);
    }
    serializeBase64String() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CWishlist_GetWishlistItemsOnSale_Response_WishlistItem";
    }
  },
  j = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.macos_only || _(e.M()),
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
              macos_only: { n: 1, br: o.readBool, bw: l.writeBool },
              steamos_linux_only: { n: 2, br: o.readBool, bw: l.writeBool },
              only_games: { n: 10, br: o.readBool, bw: l.writeBool },
              only_software: { n: 11, br: o.readBool, bw: l.writeBool },
              only_dlc: { n: 12, br: o.readBool, bw: l.writeBool },
              only_free: { n: 13, br: o.readBool, bw: l.writeBool },
              max_price_in_cents: {
                n: 20,
                br: o.readInt64String,
                bw: l.writeInt64String,
              },
              min_discount_percent: {
                n: 21,
                br: o.readInt32,
                bw: l.writeInt32,
              },
              exclude_types: { n: 22, c: O },
              steam_deck_filters: { n: 23, c: T },
              tagids_must_match: {
                n: 24,
                r: !0,
                q: !0,
                br: o.readInt32,
                pbr: o.readPackedInt32,
                bw: l.writeRepeatedInt32,
              },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = a(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, s) {
      return d(e.M(), t, s);
    }
    static fromObject(t) {
      return n(e.M(), t);
    }
    static deserializeBinary(t) {
      let s = new i.default.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, s);
    }
    static deserializeBinaryFromReader(t, s) {
      return m(e.MBF(), t, s);
    }
    serializeBinary() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, s) {
      p(e.M(), t, s);
    }
    serializeBase64String() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CWishlistFilters";
    }
  },
  O = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.exclude_early_access || _(e.M()),
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
              exclude_early_access: { n: 1, br: o.readBool, bw: l.writeBool },
              exclude_coming_soon: { n: 2, br: o.readBool, bw: l.writeBool },
              exclude_vr_only: { n: 3, br: o.readBool, bw: l.writeBool },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = a(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, s) {
      return d(e.M(), t, s);
    }
    static fromObject(t) {
      return n(e.M(), t);
    }
    static deserializeBinary(t) {
      let s = new i.default.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, s);
    }
    static deserializeBinaryFromReader(t, s) {
      return m(e.MBF(), t, s);
    }
    serializeBinary() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, s) {
      p(e.M(), t, s);
    }
    serializeBase64String() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CWishlistFilters_ExcludeTypeFilters";
    }
  },
  T = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.include_verified || _(e.M()),
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
              include_verified: { n: 1, br: o.readBool, bw: l.writeBool },
              include_playable: { n: 2, br: o.readBool, bw: l.writeBool },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = a(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, s) {
      return d(e.M(), t, s);
    }
    static fromObject(t) {
      return n(e.M(), t);
    }
    static deserializeBinary(t) {
      let s = new i.default.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, s);
    }
    static deserializeBinaryFromReader(t, s) {
      return m(e.MBF(), t, s);
    }
    serializeBinary() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, s) {
      p(e.M(), t, s);
    }
    serializeBase64String() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CWishlistFilters_SteamDeckFilters";
    }
  },
  q = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || _(e.M()),
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
                br: o.readFixed64String,
                bw: l.writeFixed64String,
              },
              context: { n: 2, c: P },
              data_request: { n: 3, c: b },
              sort_order: { n: 4, d: 0, br: o.readEnum, bw: l.writeEnum },
              filters: { n: 5, c: j },
              start_index: { n: 6, d: 0, br: o.readInt32, bw: l.writeInt32 },
              page_size: { n: 7, d: 100, br: o.readInt32, bw: l.writeInt32 },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = a(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, s) {
      return d(e.M(), t, s);
    }
    static fromObject(t) {
      return n(e.M(), t);
    }
    static deserializeBinary(t) {
      let s = new i.default.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, s);
    }
    static deserializeBinaryFromReader(t, s) {
      return m(e.MBF(), t, s);
    }
    serializeBinary() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, s) {
      p(e.M(), t, s);
    }
    serializeBase64String() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CWishlist_GetWishlistSortedFiltered_Request";
    }
  },
  A = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.items || _(e.M()),
        i.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: { items: { n: 1, c: D, r: !0, q: !0 } },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = a(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, s) {
      return d(e.M(), t, s);
    }
    static fromObject(t) {
      return n(e.M(), t);
    }
    static deserializeBinary(t) {
      let s = new i.default.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, s);
    }
    static deserializeBinaryFromReader(t, s) {
      return m(e.MBF(), t, s);
    }
    serializeBinary() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, s) {
      p(e.M(), t, s);
    }
    serializeBase64String() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CWishlist_GetWishlistSortedFiltered_Response";
    }
  },
  D = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || _(e.M()),
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
              appid: { n: 1, br: o.readUint32, bw: l.writeUint32 },
              priority: { n: 2, br: o.readUint32, bw: l.writeUint32 },
              date_added: { n: 3, br: o.readUint32, bw: l.writeUint32 },
              store_item: { n: 4, c: B },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = a(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, s) {
      return d(e.M(), t, s);
    }
    static fromObject(t) {
      return n(e.M(), t);
    }
    static deserializeBinary(t) {
      let s = new i.default.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, s);
    }
    static deserializeBinaryFromReader(t, s) {
      return m(e.MBF(), t, s);
    }
    serializeBinary() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, s) {
      p(e.M(), t, s);
    }
    serializeBase64String() {
      var t = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return "CWishlist_GetWishlistSortedFiltered_Response_WishlistItem";
    }
  },
  f;
((R) => {
  function e(W, u) {
    return W.SendMsg("Wishlist.GetWishlist#1", h(C, u), v, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  R.GetWishlist = e;
  function t(W, u) {
    return W.SendMsg("Wishlist.AddToWishlist#1", h(I, u), g, { ePrivilege: 1 });
  }
  R.AddToWishlist = t;
  function s(W, u) {
    return W.SendMsg("Wishlist.RemoveFromWishlist#1", h(c, u), G, {
      ePrivilege: 1,
    });
  }
  R.RemoveFromWishlist = s;
  function r(W, u) {
    return W.SendMsg("Wishlist.GetWishlistItemCount#1", h(M, u), H, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  R.GetWishlistItemCount = r;
  function U(W, u) {
    return W.SendMsg("Wishlist.GetWishlistItemsOnSale#1", h(w, u), z, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  R.GetWishlistItemsOnSale = U;
  function y(W, u) {
    return W.SendMsg("Wishlist.GetWishlistSortedFiltered#1", h(q, u), A, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  R.GetWishlistSortedFiltered = y;
})((f ||= {}));
async function V(e, t) {
  let s = await f.GetWishlistItemCount(e, { steamid: t });
  if (!s.BSuccess())
    throw `Error loading wishlist item count: ${s.GetErrorMessage()}`;
  return s.Body().toObject().count;
}
function Y(e) {
  return ["wishlistitemcount", e];
}
function J(e, t) {
  return {
    queryKey: Y(t),
    queryFn: () => V(e, t),
    staleTime: 10 * 60 * 1e3,
    enabled: !!t && t != "0",
  };
}
function he(e) {
  let t = F();
  return k(J(t, e));
}
async function X(e, t) {
  let s = Q.Init(c);
  s.Body().set_appid(t);
  let r = await f.RemoveFromWishlist(e, s);
  if (!r.BSuccess()) throw r.GetErrorMessage();
  return r.Body().wishlist_count();
}
function ce(e, t) {
  let s = F(),
    r = N();
  return E({
    mutationFn: async () => await X(s, t),
    onSuccess(U) {
      Z(r, e, U);
      let y = (R) => R && { ...R, items: R.items.filter((W) => W.appid != t) };
      r.setQueriesData({ queryKey: ["wishlist", e], exact: !1 }, y),
        r.setQueriesData(
          { queryKey: ["WishlistSortedFiltered", e], exact: !1 },
          y,
        );
    },
  });
}
function Z(e, t, s) {
  e.setQueryData(Y(t), () => s);
}
export { j as a, q as b, f as c, he as d, ce as e };

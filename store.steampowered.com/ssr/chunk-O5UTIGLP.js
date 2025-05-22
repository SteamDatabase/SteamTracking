import { k as K } from "./chunk-YPWZPRZY.js";
import { f as F, g as v, h as S } from "./chunk-QIIJAQLT.js";
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
  t as P,
  u as h,
  w as y,
} from "./chunk-HIIUFL4S.js";
import { b as E, e as b, g as Q } from "./chunk-43YTXXO7.js";
import { e as L } from "./chunk-Y7UWL7HT.js";
var i = L($());
var c = class e extends i.Message {
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
  I = class e extends i.Message {
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
            fields: { items: { n: 1, c: g, r: !0, q: !0 } },
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
  g = class e extends i.Message {
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
  G = class e extends i.Message {
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
  M = class e extends i.Message {
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
  R = class e extends i.Message {
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
  H = class e extends i.Message {
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
  w = class e extends i.Message {
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
  z = class e extends i.Message {
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
  x = class e extends i.Message {
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
            fields: { context: { n: 1, c: S }, data_request: { n: 2, c: v } },
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
  j = class e extends i.Message {
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
            fields: { items: { n: 1, c: O, r: !0, q: !0 } },
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
  O = class e extends i.Message {
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
              store_item: { n: 2, c: F },
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
  T = class e extends i.Message {
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
              exclude_types: { n: 22, c: q },
              steam_deck_filters: { n: 23, c: A },
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
  q = class e extends i.Message {
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
  A = class e extends i.Message {
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
  D = class e extends i.Message {
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
              context: { n: 2, c: S },
              data_request: { n: 3, c: v },
              sort_order: { n: 4, d: 0, br: o.readEnum, bw: l.writeEnum },
              filters: { n: 5, c: T },
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
  U = class e extends i.Message {
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
            fields: { items: { n: 1, c: N, r: !0, q: !0 } },
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
  N = class e extends i.Message {
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
              store_item: { n: 4, c: F },
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
  C;
((f) => {
  function e(W, u) {
    return W.SendMsg("Wishlist.GetWishlist#1", h(c, u), I, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  f.GetWishlist = e;
  function t(W, u) {
    return W.SendMsg("Wishlist.AddToWishlist#1", h(G, u), M, { ePrivilege: 1 });
  }
  f.AddToWishlist = t;
  function s(W, u) {
    return W.SendMsg("Wishlist.RemoveFromWishlist#1", h(R, u), H, {
      ePrivilege: 1,
    });
  }
  f.RemoveFromWishlist = s;
  function r(W, u) {
    return W.SendMsg("Wishlist.GetWishlistItemCount#1", h(w, u), z, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  f.GetWishlistItemCount = r;
  function k(W, u) {
    return W.SendMsg("Wishlist.GetWishlistItemsOnSale#1", h(x, u), j, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  f.GetWishlistItemsOnSale = k;
  function B(W, u) {
    return W.SendMsg("Wishlist.GetWishlistSortedFiltered#1", h(D, u), U, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  f.GetWishlistSortedFiltered = B;
})((C ||= {}));
async function V(e, t) {
  let s = P.Init(c);
  s.Body().set_steamid(t);
  let r = await C.GetWishlist(e, s);
  if (!r.BSuccess()) throw `Error loading wishlist: ${r.GetErrorMessage()}`;
  return { steamid: t, items: r.Body().toObject().items || [] };
}
function J(e, t) {
  return {
    queryKey: ["wishlist", t],
    queryFn: () => V(e, t),
    staleTime: 10 * 60 * 1e3,
    enabled: !!t && t != "0",
  };
}
function Re(e) {
  let t = y();
  return b(J(t, e));
}
async function X(e, t) {
  let s = await C.GetWishlistItemCount(e, { steamid: t });
  if (!s.BSuccess())
    throw `Error loading wishlist item count: ${s.GetErrorMessage()}`;
  return s.Body().toObject().count;
}
function Y(e) {
  return ["wishlistitemcount", e];
}
function Z(e, t) {
  return {
    queryKey: Y(t),
    queryFn: () => X(e, t),
    staleTime: 10 * 60 * 1e3,
    enabled: !!t && t != "0",
  };
}
function Ce(e) {
  let t = y();
  return b(Z(t, e));
}
async function ee(e, t) {
  let s = P.Init(R);
  s.Body().set_appid(t);
  let r = await C.RemoveFromWishlist(e, s);
  if (!r.BSuccess()) throw r.GetErrorMessage();
  return r.Body().wishlist_count();
}
function fe(e, t) {
  let s = y(),
    r = E();
  return Q({
    mutationFn: async () => await ee(s, t),
    onSuccess(k) {
      te(r, e, k);
      let B = (f) => f && { ...f, items: f.items.filter((W) => W.appid != t) };
      r.setQueriesData({ queryKey: ["wishlist", e], exact: !1 }, B),
        r.setQueriesData(
          { queryKey: ["WishlistSortedFiltered", e], exact: !1 },
          B,
        );
    },
  });
}
function te(e, t, s) {
  e.setQueryData(Y(t), () => s);
}
export { T as a, D as b, C as c, Re as d, Ce as e, fe as f };

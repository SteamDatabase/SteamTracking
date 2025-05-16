const CLSTAMP = 9751509;

import {
  a as Be,
  b as o,
  c as s,
  d as n,
  e as l,
  f as d,
  g as p,
  h as _,
  i as u,
  u as S,
} from "./chunk-MBESTK3H.js";
import { e as fe } from "./chunk-QAUDHXYH.js";
var i = fe(Be());
var m = fe(Be(), 1);
var B = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.sale_filter || u(e.M()),
        m.Message.initialize(this, r, 0, -1, [3], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              sale_filter: { n: 1, c: F },
              content_hub_filter: { n: 2, c: M },
              store_filters: { n: 3, c: z, r: !0, q: !0 },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = n(e.M())), e.sm_mbf;
    }
    toObject(r = !1) {
      return e.toObject(r, this);
    }
    static toObject(r, t) {
      return d(e.M(), r, t);
    }
    static fromObject(r) {
      return l(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new m.default.BinaryReader(r),
        a = new e();
      return e.deserializeBinaryFromReader(a, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return p(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new m.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      _(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new m.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CStorePageFilter";
    }
  },
  F = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.sale_tagid || u(e.M()),
        m.Message.initialize(this, r, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              sale_tagid: { n: 1, br: o.readUint32, bw: s.writeUint32 },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = n(e.M())), e.sm_mbf;
    }
    toObject(r = !1) {
      return e.toObject(r, this);
    }
    static toObject(r, t) {
      return d(e.M(), r, t);
    }
    static fromObject(r) {
      return l(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new m.default.BinaryReader(r),
        a = new e();
      return e.deserializeBinaryFromReader(a, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return p(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new m.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      _(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new m.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CStorePageFilter_SalePageFilter";
    }
  },
  M = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.hub_type || u(e.M()),
        m.Message.initialize(this, r, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              hub_type: { n: 1, br: o.readString, bw: s.writeString },
              hub_category: { n: 2, br: o.readString, bw: s.writeString },
              hub_tagid: { n: 3, br: o.readUint32, bw: s.writeUint32 },
              discount_filter: { n: 4, br: o.readEnum, bw: s.writeEnum },
              optin: { n: 5, c: h },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = n(e.M())), e.sm_mbf;
    }
    toObject(r = !1) {
      return e.toObject(r, this);
    }
    static toObject(r, t) {
      return d(e.M(), r, t);
    }
    static fromObject(r) {
      return l(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new m.default.BinaryReader(r),
        a = new e();
      return e.deserializeBinaryFromReader(a, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return p(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new m.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      _(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new m.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CStorePageFilter_ContentHubFilter";
    }
  },
  h = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.name || u(e.M()),
        m.Message.initialize(this, r, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              name: { n: 1, br: o.readString, bw: s.writeString },
              optin_tagid: { n: 2, br: o.readUint32, bw: s.writeUint32 },
              prune_tagid: { n: 3, br: o.readUint32, bw: s.writeUint32 },
              optin_only: { n: 4, br: o.readBool, bw: s.writeBool },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = n(e.M())), e.sm_mbf;
    }
    toObject(r = !1) {
      return e.toObject(r, this);
    }
    static toObject(r, t) {
      return d(e.M(), r, t);
    }
    static fromObject(r) {
      return l(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new m.default.BinaryReader(r),
        a = new e();
      return e.deserializeBinaryFromReader(a, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return p(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new m.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      _(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new m.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CStorePageFilter_ContentHubFilter_OptInInfo";
    }
  },
  z = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.filter_json || u(e.M()),
        m.Message.initialize(this, r, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              filter_json: { n: 1, br: o.readString, bw: s.writeString },
              cache_key: { n: 2, br: o.readString, bw: s.writeString },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = n(e.M())), e.sm_mbf;
    }
    toObject(r = !1) {
      return e.toObject(r, this);
    }
    static toObject(r, t) {
      return d(e.M(), r, t);
    }
    static fromObject(r) {
      return l(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new m.default.BinaryReader(r),
        a = new e();
      return e.deserializeBinaryFromReader(a, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return p(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new m.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      _(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new m.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CStorePageFilter_StoreFilter";
    }
  };
function he(e) {
  return "unknown EStoreItemType ( " + e + " )";
}
var W = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.type || u(e.M()),
        i.Message.initialize(this, r, 0, -1, [3], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              type: { n: 1, br: o.readString, bw: s.writeString },
              rating: { n: 2, br: o.readString, bw: s.writeString },
              descriptors: {
                n: 3,
                r: !0,
                q: !0,
                br: o.readString,
                bw: s.writeRepeatedString,
              },
              interactive_elements: {
                n: 4,
                br: o.readString,
                bw: s.writeString,
              },
              required_age: { n: 10, br: o.readInt32, bw: s.writeInt32 },
              use_age_gate: { n: 11, br: o.readBool, bw: s.writeBool },
              image_url: { n: 20, br: o.readString, bw: s.writeString },
              image_target: { n: 21, br: o.readString, bw: s.writeString },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = n(e.M())), e.sm_mbf;
    }
    toObject(r = !1) {
      return e.toObject(r, this);
    }
    static toObject(r, t) {
      return d(e.M(), r, t);
    }
    static fromObject(r) {
      return l(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new i.default.BinaryReader(r),
        a = new e();
      return e.deserializeBinaryFromReader(a, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return p(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      _(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "StoreGameRating";
    }
  },
  y = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.item_type || u(e.M()),
        i.Message.initialize(
          this,
          r,
          0,
          -1,
          [11, 12, 20, 21, 25, 41, 42, 52, 71],
          null,
        );
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              item_type: { n: 1, br: o.readEnum, bw: s.writeEnum },
              id: { n: 2, br: o.readUint32, bw: s.writeUint32 },
              success: { n: 3, br: o.readUint32, bw: s.writeUint32 },
              visible: { n: 4, br: o.readBool, bw: s.writeBool },
              unvailable_for_country_restriction: {
                n: 5,
                br: o.readBool,
                bw: s.writeBool,
              },
              name: { n: 6, br: o.readString, bw: s.writeString },
              store_url_path: { n: 7, br: o.readString, bw: s.writeString },
              appid: { n: 9, br: o.readUint32, bw: s.writeUint32 },
              type: { n: 10, br: o.readEnum, bw: s.writeEnum },
              included_types: {
                n: 11,
                r: !0,
                q: !0,
                br: o.readEnum,
                pbr: o.readPackedEnum,
                bw: s.writeRepeatedEnum,
              },
              included_appids: {
                n: 12,
                r: !0,
                q: !0,
                br: o.readUint32,
                pbr: o.readPackedUint32,
                bw: s.writeRepeatedUint32,
              },
              is_free: { n: 13, br: o.readBool, bw: s.writeBool },
              is_early_access: { n: 14, br: o.readBool, bw: s.writeBool },
              related_items: { n: 15, c: j },
              included_items: { n: 16, c: G },
              content_descriptorids: {
                n: 20,
                r: !0,
                q: !0,
                br: o.readEnum,
                pbr: o.readPackedEnum,
                bw: s.writeRepeatedEnum,
              },
              tagids: {
                n: 21,
                r: !0,
                q: !0,
                br: o.readUint32,
                pbr: o.readPackedUint32,
                bw: s.writeRepeatedUint32,
              },
              categories: { n: 22, c: O },
              reviews: { n: 23, c: T },
              basic_info: { n: 24, c: x },
              tags: { n: 25, c: D, r: !0, q: !0 },
              assets: { n: 30, c: v },
              release: { n: 31, c: A },
              platforms: { n: 32, c: k },
              game_rating: { n: 33, c: W },
              is_coming_soon: { n: 34, br: o.readBool, bw: s.writeBool },
              best_purchase_option: { n: 40, c: f },
              purchase_options: { n: 41, c: f, r: !0, q: !0 },
              accessories: { n: 42, c: f, r: !0, q: !0 },
              self_purchase_option: { n: 43, c: f },
              screenshots: { n: 50, c: N },
              trailers: { n: 51, c: E },
              supported_languages: { n: 52, c: V, r: !0, q: !0 },
              store_url_path_override: {
                n: 53,
                br: o.readString,
                bw: s.writeString,
              },
              free_weekend: { n: 54, c: Q },
              unlisted: { n: 55, br: o.readBool, bw: s.writeBool },
              game_count: { n: 56, br: o.readUint32, bw: s.writeUint32 },
              internal_name: { n: 57, br: o.readString, bw: s.writeString },
              full_description: { n: 58, br: o.readString, bw: s.writeString },
              is_free_temporarily: { n: 59, br: o.readBool, bw: s.writeBool },
              assets_without_overrides: { n: 60, c: v },
              user_filter_failure: { n: 70, c: Pe },
              links: { n: 71, c: K, r: !0, q: !0 },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = n(e.M())), e.sm_mbf;
    }
    toObject(r = !1) {
      return e.toObject(r, this);
    }
    static toObject(r, t) {
      return d(e.M(), r, t);
    }
    static fromObject(r) {
      return l(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new i.default.BinaryReader(r),
        a = new e();
      return e.deserializeBinaryFromReader(a, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return p(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      _(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "StoreItem";
    }
  },
  j = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.parent_appid || u(e.M()),
        i.Message.initialize(this, r, 0, -1, [2, 3], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              parent_appid: { n: 1, br: o.readUint32, bw: s.writeUint32 },
              demo_appid: {
                n: 2,
                r: !0,
                q: !0,
                br: o.readUint32,
                pbr: o.readPackedUint32,
                bw: s.writeRepeatedUint32,
              },
              standalone_demo_appid: {
                n: 3,
                r: !0,
                q: !0,
                br: o.readUint32,
                pbr: o.readPackedUint32,
                bw: s.writeRepeatedUint32,
              },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = n(e.M())), e.sm_mbf;
    }
    toObject(r = !1) {
      return e.toObject(r, this);
    }
    static toObject(r, t) {
      return d(e.M(), r, t);
    }
    static fromObject(r) {
      return l(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new i.default.BinaryReader(r),
        a = new e();
      return e.deserializeBinaryFromReader(a, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return p(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      _(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "StoreItem_RelatedItems";
    }
  },
  G = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.included_apps || u(e.M()),
        i.Message.initialize(this, r, 0, -1, [1, 2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              included_apps: { n: 1, c: y, r: !0, q: !0 },
              included_packages: { n: 2, c: y, r: !0, q: !0 },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = n(e.M())), e.sm_mbf;
    }
    toObject(r = !1) {
      return e.toObject(r, this);
    }
    static toObject(r, t) {
      return d(e.M(), r, t);
    }
    static fromObject(r) {
      return l(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new i.default.BinaryReader(r),
        a = new e();
      return e.deserializeBinaryFromReader(a, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return p(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      _(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "StoreItem_IncludedItems";
    }
  },
  O = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.supported_player_categoryids || u(e.M()),
        i.Message.initialize(this, r, 0, -1, [2, 3, 4], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              supported_player_categoryids: {
                n: 2,
                r: !0,
                q: !0,
                br: o.readUint32,
                pbr: o.readPackedUint32,
                bw: s.writeRepeatedUint32,
              },
              feature_categoryids: {
                n: 3,
                r: !0,
                q: !0,
                br: o.readUint32,
                pbr: o.readPackedUint32,
                bw: s.writeRepeatedUint32,
              },
              controller_categoryids: {
                n: 4,
                r: !0,
                q: !0,
                br: o.readUint32,
                pbr: o.readPackedUint32,
                bw: s.writeRepeatedUint32,
              },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = n(e.M())), e.sm_mbf;
    }
    toObject(r = !1) {
      return e.toObject(r, this);
    }
    static toObject(r, t) {
      return d(e.M(), r, t);
    }
    static fromObject(r) {
      return l(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new i.default.BinaryReader(r),
        a = new e();
      return e.deserializeBinaryFromReader(a, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return p(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      _(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "StoreItem_Categories";
    }
  },
  T = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.summary_filtered || u(e.M()),
        i.Message.initialize(this, r, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              summary_filtered: { n: 1, c: C },
              summary_unfiltered: { n: 2, c: C },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = n(e.M())), e.sm_mbf;
    }
    toObject(r = !1) {
      return e.toObject(r, this);
    }
    static toObject(r, t) {
      return d(e.M(), r, t);
    }
    static fromObject(r) {
      return l(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new i.default.BinaryReader(r),
        a = new e();
      return e.deserializeBinaryFromReader(a, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return p(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      _(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "StoreItem_Reviews";
    }
  },
  C = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.review_count || u(e.M()),
        i.Message.initialize(this, r, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              review_count: { n: 1, br: o.readUint32, bw: s.writeUint32 },
              percent_positive: { n: 2, br: o.readInt32, bw: s.writeInt32 },
              review_score: { n: 3, br: o.readEnum, bw: s.writeEnum },
              review_score_label: { n: 4, br: o.readString, bw: s.writeString },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = n(e.M())), e.sm_mbf;
    }
    toObject(r = !1) {
      return e.toObject(r, this);
    }
    static toObject(r, t) {
      return d(e.M(), r, t);
    }
    static fromObject(r) {
      return l(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new i.default.BinaryReader(r),
        a = new e();
      return e.deserializeBinaryFromReader(a, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return p(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      _(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "StoreItem_Reviews_StoreReviewSummary";
    }
  },
  x = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.short_description || u(e.M()),
        i.Message.initialize(this, r, 0, -1, [2, 3, 4], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              short_description: { n: 1, br: o.readString, bw: s.writeString },
              publishers: { n: 2, c: g, r: !0, q: !0 },
              developers: { n: 3, c: g, r: !0, q: !0 },
              franchises: { n: 4, c: g, r: !0, q: !0 },
              capsule_headline: { n: 5, br: o.readString, bw: s.writeString },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = n(e.M())), e.sm_mbf;
    }
    toObject(r = !1) {
      return e.toObject(r, this);
    }
    static toObject(r, t) {
      return d(e.M(), r, t);
    }
    static fromObject(r) {
      return l(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new i.default.BinaryReader(r),
        a = new e();
      return e.deserializeBinaryFromReader(a, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return p(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      _(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "StoreItem_BasicInfo";
    }
  },
  g = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.name || u(e.M()),
        i.Message.initialize(this, r, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              name: { n: 1, br: o.readString, bw: s.writeString },
              creator_clan_account_id: {
                n: 2,
                br: o.readUint32,
                bw: s.writeUint32,
              },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = n(e.M())), e.sm_mbf;
    }
    toObject(r = !1) {
      return e.toObject(r, this);
    }
    static toObject(r, t) {
      return d(e.M(), r, t);
    }
    static fromObject(r) {
      return l(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new i.default.BinaryReader(r),
        a = new e();
      return e.deserializeBinaryFromReader(a, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return p(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      _(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "StoreItem_BasicInfo_CreatorHomeLink";
    }
  },
  D = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.tagid || u(e.M()),
        i.Message.initialize(this, r, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              tagid: { n: 1, br: o.readUint32, bw: s.writeUint32 },
              weight: { n: 2, br: o.readUint32, bw: s.writeUint32 },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = n(e.M())), e.sm_mbf;
    }
    toObject(r = !1) {
      return e.toObject(r, this);
    }
    static toObject(r, t) {
      return d(e.M(), r, t);
    }
    static fromObject(r) {
      return l(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new i.default.BinaryReader(r),
        a = new e();
      return e.deserializeBinaryFromReader(a, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return p(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      _(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "StoreItem_Tag";
    }
  },
  v = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.asset_url_format || u(e.M()),
        i.Message.initialize(this, r, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              asset_url_format: { n: 1, br: o.readString, bw: s.writeString },
              main_capsule: { n: 2, br: o.readString, bw: s.writeString },
              small_capsule: { n: 3, br: o.readString, bw: s.writeString },
              header: { n: 4, br: o.readString, bw: s.writeString },
              package_header: { n: 5, br: o.readString, bw: s.writeString },
              page_background: { n: 6, br: o.readString, bw: s.writeString },
              hero_capsule: { n: 7, br: o.readString, bw: s.writeString },
              hero_capsule_2x: { n: 8, br: o.readString, bw: s.writeString },
              library_capsule: { n: 9, br: o.readString, bw: s.writeString },
              library_capsule_2x: {
                n: 10,
                br: o.readString,
                bw: s.writeString,
              },
              library_hero: { n: 11, br: o.readString, bw: s.writeString },
              library_hero_2x: { n: 12, br: o.readString, bw: s.writeString },
              community_icon: { n: 13, br: o.readString, bw: s.writeString },
              clan_avatar: { n: 14, br: o.readString, bw: s.writeString },
              page_background_path: {
                n: 15,
                br: o.readString,
                bw: s.writeString,
              },
              raw_page_background: {
                n: 16,
                br: o.readString,
                bw: s.writeString,
              },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = n(e.M())), e.sm_mbf;
    }
    toObject(r = !1) {
      return e.toObject(r, this);
    }
    static toObject(r, t) {
      return d(e.M(), r, t);
    }
    static fromObject(r) {
      return l(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new i.default.BinaryReader(r),
        a = new e();
      return e.deserializeBinaryFromReader(a, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return p(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      _(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "StoreItem_Assets";
    }
  },
  A = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.steam_release_date || u(e.M()),
        i.Message.initialize(this, r, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              steam_release_date: { n: 1, br: o.readUint32, bw: s.writeUint32 },
              original_release_date: {
                n: 2,
                br: o.readUint32,
                bw: s.writeUint32,
              },
              original_steam_release_date: {
                n: 3,
                br: o.readUint32,
                bw: s.writeUint32,
              },
              is_coming_soon: { n: 4, br: o.readBool, bw: s.writeBool },
              is_preload: { n: 5, br: o.readBool, bw: s.writeBool },
              custom_release_date_message: {
                n: 6,
                br: o.readString,
                bw: s.writeString,
              },
              is_abridged_release_date: {
                n: 7,
                br: o.readBool,
                bw: s.writeBool,
              },
              coming_soon_display: {
                n: 8,
                br: o.readString,
                bw: s.writeString,
              },
              is_early_access: { n: 10, br: o.readBool, bw: s.writeBool },
              mac_release_date: { n: 20, br: o.readUint32, bw: s.writeUint32 },
              linux_release_date: {
                n: 21,
                br: o.readUint32,
                bw: s.writeUint32,
              },
              limited_launch_active: { n: 22, br: o.readBool, bw: s.writeBool },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = n(e.M())), e.sm_mbf;
    }
    toObject(r = !1) {
      return e.toObject(r, this);
    }
    static toObject(r, t) {
      return d(e.M(), r, t);
    }
    static fromObject(r) {
      return l(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new i.default.BinaryReader(r),
        a = new e();
      return e.deserializeBinaryFromReader(a, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return p(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      _(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "StoreItem_ReleaseInfo";
    }
  },
  k = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.windows || u(e.M()),
        i.Message.initialize(this, r, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              windows: { n: 1, br: o.readBool, bw: s.writeBool },
              mac: { n: 2, br: o.readBool, bw: s.writeBool },
              steamos_linux: { n: 3, br: o.readBool, bw: s.writeBool },
              vr_support: { n: 10, c: L },
              steam_deck_compat_category: {
                n: 11,
                br: o.readEnum,
                bw: s.writeEnum,
              },
              steam_os_compat_category: {
                n: 12,
                br: o.readEnum,
                bw: s.writeEnum,
              },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = n(e.M())), e.sm_mbf;
    }
    toObject(r = !1) {
      return e.toObject(r, this);
    }
    static toObject(r, t) {
      return d(e.M(), r, t);
    }
    static fromObject(r) {
      return l(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new i.default.BinaryReader(r),
        a = new e();
      return e.deserializeBinaryFromReader(a, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return p(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      _(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "StoreItem_Platforms";
    }
  },
  L = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.vrhmd || u(e.M()),
        i.Message.initialize(this, r, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              vrhmd: { n: 1, br: o.readBool, bw: s.writeBool },
              vrhmd_only: { n: 2, br: o.readBool, bw: s.writeBool },
              htc_vive: { n: 40, br: o.readBool, bw: s.writeBool },
              oculus_rift: { n: 41, br: o.readBool, bw: s.writeBool },
              windows_mr: { n: 42, br: o.readBool, bw: s.writeBool },
              valve_index: { n: 43, br: o.readBool, bw: s.writeBool },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = n(e.M())), e.sm_mbf;
    }
    toObject(r = !1) {
      return e.toObject(r, this);
    }
    static toObject(r, t) {
      return d(e.M(), r, t);
    }
    static fromObject(r) {
      return l(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new i.default.BinaryReader(r),
        a = new e();
      return e.deserializeBinaryFromReader(a, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return p(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      _(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "StoreItem_Platforms_VRSupport";
    }
  },
  f = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.packageid || u(e.M()),
        i.Message.initialize(this, r, 0, -1, [20], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              packageid: { n: 1, br: o.readInt32, bw: s.writeInt32 },
              bundleid: { n: 2, br: o.readInt32, bw: s.writeInt32 },
              purchase_option_name: {
                n: 3,
                br: o.readString,
                bw: s.writeString,
              },
              final_price_in_cents: {
                n: 5,
                br: o.readInt64String,
                bw: s.writeInt64String,
              },
              original_price_in_cents: {
                n: 6,
                br: o.readInt64String,
                bw: s.writeInt64String,
              },
              formatted_final_price: {
                n: 8,
                br: o.readString,
                bw: s.writeString,
              },
              formatted_original_price: {
                n: 9,
                br: o.readString,
                bw: s.writeString,
              },
              discount_pct: { n: 10, br: o.readInt32, bw: s.writeInt32 },
              bundle_discount_pct: { n: 12, br: o.readInt32, bw: s.writeInt32 },
              is_free_to_keep: { n: 13, br: o.readBool, bw: s.writeBool },
              price_before_bundle_discount: {
                n: 14,
                br: o.readInt64String,
                bw: s.writeInt64String,
              },
              formatted_price_before_bundle_discount: {
                n: 15,
                br: o.readString,
                bw: s.writeString,
              },
              active_discounts: { n: 20, c: q, r: !0, q: !0 },
              user_can_purchase_as_gift: {
                n: 31,
                br: o.readBool,
                bw: s.writeBool,
              },
              is_commercial_license: { n: 40, br: o.readBool, bw: s.writeBool },
              should_suppress_discount_pct: {
                n: 41,
                br: o.readBool,
                bw: s.writeBool,
              },
              hide_discount_pct_for_compliance: {
                n: 42,
                d: !1,
                br: o.readBool,
                bw: s.writeBool,
              },
              included_game_count: {
                n: 43,
                d: 1,
                br: o.readInt32,
                bw: s.writeInt32,
              },
              lowest_recent_price_in_cents: {
                n: 44,
                br: o.readInt64String,
                bw: s.writeInt64String,
              },
              requires_shipping: { n: 45, br: o.readBool, bw: s.writeBool },
              recurrence_info: { n: 46, c: U },
              free_to_keep_ends: { n: 47, br: o.readUint32, bw: s.writeUint32 },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = n(e.M())), e.sm_mbf;
    }
    toObject(r = !1) {
      return e.toObject(r, this);
    }
    static toObject(r, t) {
      return d(e.M(), r, t);
    }
    static fromObject(r) {
      return l(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new i.default.BinaryReader(r),
        a = new e();
      return e.deserializeBinaryFromReader(a, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return p(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      _(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "StoreItem_PurchaseOption";
    }
  },
  q = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.discount_amount || u(e.M()),
        i.Message.initialize(this, r, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              discount_amount: {
                n: 1,
                br: o.readInt64String,
                bw: s.writeInt64String,
              },
              discount_description: {
                n: 2,
                br: o.readString,
                bw: s.writeString,
              },
              discount_end_date: { n: 3, br: o.readUint32, bw: s.writeUint32 },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = n(e.M())), e.sm_mbf;
    }
    toObject(r = !1) {
      return e.toObject(r, this);
    }
    static toObject(r, t) {
      return d(e.M(), r, t);
    }
    static fromObject(r) {
      return l(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new i.default.BinaryReader(r),
        a = new e();
      return e.deserializeBinaryFromReader(a, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return p(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      _(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "StoreItem_PurchaseOption_Discount";
    }
  },
  U = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.packageid || u(e.M()),
        i.Message.initialize(this, r, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              packageid: { n: 1, br: o.readInt32, bw: s.writeInt32 },
              billing_agreement_type: {
                n: 2,
                br: o.readInt32,
                bw: s.writeInt32,
              },
              renewal_time_unit: { n: 3, br: o.readInt32, bw: s.writeInt32 },
              renewal_time_period: { n: 4, br: o.readInt32, bw: s.writeInt32 },
              renewal_price_in_cents: {
                n: 5,
                br: o.readInt64String,
                bw: s.writeInt64String,
              },
              formatted_renewal_price: {
                n: 6,
                br: o.readString,
                bw: s.writeString,
              },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = n(e.M())), e.sm_mbf;
    }
    toObject(r = !1) {
      return e.toObject(r, this);
    }
    static toObject(r, t) {
      return d(e.M(), r, t);
    }
    static fromObject(r) {
      return l(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new i.default.BinaryReader(r),
        a = new e();
      return e.deserializeBinaryFromReader(a, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return p(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      _(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "StoreItem_PurchaseOption_RecurrenceInfo";
    }
  },
  N = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.all_ages_screenshots || u(e.M()),
        i.Message.initialize(this, r, 0, -1, [2, 3], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              all_ages_screenshots: { n: 2, c: R, r: !0, q: !0 },
              mature_content_screenshots: { n: 3, c: R, r: !0, q: !0 },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = n(e.M())), e.sm_mbf;
    }
    toObject(r = !1) {
      return e.toObject(r, this);
    }
    static toObject(r, t) {
      return d(e.M(), r, t);
    }
    static fromObject(r) {
      return l(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new i.default.BinaryReader(r),
        a = new e();
      return e.deserializeBinaryFromReader(a, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return p(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      _(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "StoreItem_Screenshots";
    }
  },
  R = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.filename || u(e.M()),
        i.Message.initialize(this, r, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              filename: { n: 1, br: o.readString, bw: s.writeString },
              ordinal: { n: 2, br: o.readInt32, bw: s.writeInt32 },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = n(e.M())), e.sm_mbf;
    }
    toObject(r = !1) {
      return e.toObject(r, this);
    }
    static toObject(r, t) {
      return d(e.M(), r, t);
    }
    static fromObject(r) {
      return l(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new i.default.BinaryReader(r),
        a = new e();
      return e.deserializeBinaryFromReader(a, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return p(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      _(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "StoreItem_Screenshots_Screenshot";
    }
  },
  E = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.highlights || u(e.M()),
        i.Message.initialize(this, r, 0, -1, [1, 2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              highlights: { n: 1, c: H, r: !0, q: !0 },
              other_trailers: { n: 2, c: H, r: !0, q: !0 },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = n(e.M())), e.sm_mbf;
    }
    toObject(r = !1) {
      return e.toObject(r, this);
    }
    static toObject(r, t) {
      return d(e.M(), r, t);
    }
    static fromObject(r) {
      return l(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new i.default.BinaryReader(r),
        a = new e();
      return e.deserializeBinaryFromReader(a, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return p(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      _(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "StoreItem_Trailers";
    }
  },
  w = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.filename || u(e.M()),
        i.Message.initialize(this, r, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              filename: { n: 1, br: o.readString, bw: s.writeString },
              type: { n: 2, br: o.readString, bw: s.writeString },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = n(e.M())), e.sm_mbf;
    }
    toObject(r = !1) {
      return e.toObject(r, this);
    }
    static toObject(r, t) {
      return d(e.M(), r, t);
    }
    static fromObject(r) {
      return l(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new i.default.BinaryReader(r),
        a = new e();
      return e.deserializeBinaryFromReader(a, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return p(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      _(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "StoreItem_Trailers_VideoSource";
    }
  },
  H = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.trailer_name || u(e.M()),
        i.Message.initialize(this, r, 0, -1, [3, 4, 5], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              trailer_name: { n: 1, br: o.readString, bw: s.writeString },
              trailer_url_format: { n: 2, br: o.readString, bw: s.writeString },
              trailer_category: { n: 13, br: o.readEnum, bw: s.writeEnum },
              trailer_480p: { n: 3, c: w, r: !0, q: !0 },
              trailer_max: { n: 4, c: w, r: !0, q: !0 },
              microtrailer: { n: 5, c: w, r: !0, q: !0 },
              screenshot_medium: { n: 10, br: o.readString, bw: s.writeString },
              screenshot_full: { n: 11, br: o.readString, bw: s.writeString },
              trailer_base_id: { n: 12, br: o.readInt32, bw: s.writeInt32 },
              all_ages: { n: 14, br: o.readBool, bw: s.writeBool },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = n(e.M())), e.sm_mbf;
    }
    toObject(r = !1) {
      return e.toObject(r, this);
    }
    static toObject(r, t) {
      return d(e.M(), r, t);
    }
    static fromObject(r) {
      return l(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new i.default.BinaryReader(r),
        a = new e();
      return e.deserializeBinaryFromReader(a, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return p(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      _(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "StoreItem_Trailers_Trailer";
    }
  },
  V = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.elanguage || u(e.M()),
        i.Message.initialize(this, r, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              elanguage: { n: 1, d: -1, br: o.readInt32, bw: s.writeInt32 },
              eadditionallanguage: {
                n: 5,
                d: -1,
                br: o.readInt32,
                bw: s.writeInt32,
              },
              supported: { n: 2, br: o.readBool, bw: s.writeBool },
              full_audio: { n: 3, br: o.readBool, bw: s.writeBool },
              subtitles: { n: 4, br: o.readBool, bw: s.writeBool },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = n(e.M())), e.sm_mbf;
    }
    toObject(r = !1) {
      return e.toObject(r, this);
    }
    static toObject(r, t) {
      return d(e.M(), r, t);
    }
    static fromObject(r) {
      return l(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new i.default.BinaryReader(r),
        a = new e();
      return e.deserializeBinaryFromReader(a, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return p(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      _(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "StoreItem_SupportedLanguage";
    }
  },
  Q = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.start_time || u(e.M()),
        i.Message.initialize(this, r, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              start_time: { n: 1, br: o.readUint32, bw: s.writeUint32 },
              end_time: { n: 2, br: o.readUint32, bw: s.writeUint32 },
              text: { n: 3, br: o.readString, bw: s.writeString },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = n(e.M())), e.sm_mbf;
    }
    toObject(r = !1) {
      return e.toObject(r, this);
    }
    static toObject(r, t) {
      return d(e.M(), r, t);
    }
    static fromObject(r) {
      return l(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new i.default.BinaryReader(r),
        a = new e();
      return e.deserializeBinaryFromReader(a, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return p(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      _(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "StoreItem_FreeWeekend";
    }
  },
  K = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.link_type || u(e.M()),
        i.Message.initialize(this, r, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              link_type: { n: 1, br: o.readEnum, bw: s.writeEnum },
              url: { n: 2, br: o.readString, bw: s.writeString },
              text: { n: 3, br: o.readString, bw: s.writeString },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = n(e.M())), e.sm_mbf;
    }
    toObject(r = !1) {
      return e.toObject(r, this);
    }
    static toObject(r, t) {
      return d(e.M(), r, t);
    }
    static fromObject(r) {
      return l(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new i.default.BinaryReader(r),
        a = new e();
      return e.deserializeBinaryFromReader(a, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return p(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      _(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "StoreItem_Link";
    }
  },
  X = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.include_assets || u(e.M()),
        i.Message.initialize(this, r, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              include_assets: { n: 1, br: o.readBool, bw: s.writeBool },
              include_release: { n: 2, br: o.readBool, bw: s.writeBool },
              include_platforms: { n: 3, br: o.readBool, bw: s.writeBool },
              include_all_purchase_options: {
                n: 4,
                br: o.readBool,
                bw: s.writeBool,
              },
              include_screenshots: { n: 5, br: o.readBool, bw: s.writeBool },
              include_trailers: { n: 6, br: o.readBool, bw: s.writeBool },
              include_ratings: { n: 7, br: o.readBool, bw: s.writeBool },
              include_tag_count: { n: 8, br: o.readInt32, bw: s.writeInt32 },
              include_reviews: { n: 9, br: o.readBool, bw: s.writeBool },
              include_basic_info: { n: 10, br: o.readBool, bw: s.writeBool },
              include_supported_languages: {
                n: 11,
                br: o.readBool,
                bw: s.writeBool,
              },
              include_full_description: {
                n: 12,
                br: o.readBool,
                bw: s.writeBool,
              },
              include_included_items: {
                n: 13,
                br: o.readBool,
                bw: s.writeBool,
              },
              included_item_data_request: { n: 14, c: e },
              include_assets_without_overrides: {
                n: 15,
                br: o.readBool,
                bw: s.writeBool,
              },
              apply_user_filters: { n: 16, br: o.readBool, bw: s.writeBool },
              include_links: { n: 17, br: o.readBool, bw: s.writeBool },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = n(e.M())), e.sm_mbf;
    }
    toObject(r = !1) {
      return e.toObject(r, this);
    }
    static toObject(r, t) {
      return d(e.M(), r, t);
    }
    static fromObject(r) {
      return l(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new i.default.BinaryReader(r),
        a = new e();
      return e.deserializeBinaryFromReader(a, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return p(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      _(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "StoreBrowseItemDataRequest";
    }
  },
  P = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.language || u(e.M()),
        i.Message.initialize(this, r, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              language: { n: 1, br: o.readString, bw: s.writeString },
              elanguage: { n: 2, br: o.readInt32, bw: s.writeInt32 },
              country_code: { n: 3, br: o.readString, bw: s.writeString },
              steam_realm: { n: 4, br: o.readInt32, bw: s.writeInt32 },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = n(e.M())), e.sm_mbf;
    }
    toObject(r = !1) {
      return e.toObject(r, this);
    }
    static toObject(r, t) {
      return d(e.M(), r, t);
    }
    static fromObject(r) {
      return l(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new i.default.BinaryReader(r),
        a = new e();
      return e.deserializeBinaryFromReader(a, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return p(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      _(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "StoreBrowseContext";
    }
  },
  I = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.appid || u(e.M()),
        i.Message.initialize(this, r, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              appid: { n: 1, br: o.readUint32, bw: s.writeUint32 },
              packageid: { n: 2, br: o.readUint32, bw: s.writeUint32 },
              bundleid: { n: 3, br: o.readUint32, bw: s.writeUint32 },
              tagid: { n: 4, br: o.readUint32, bw: s.writeUint32 },
              creatorid: { n: 5, br: o.readUint32, bw: s.writeUint32 },
              hubcategoryid: { n: 6, br: o.readUint32, bw: s.writeUint32 },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = n(e.M())), e.sm_mbf;
    }
    toObject(r = !1) {
      return e.toObject(r, this);
    }
    static toObject(r, t) {
      return d(e.M(), r, t);
    }
    static fromObject(r) {
      return l(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new i.default.BinaryReader(r),
        a = new e();
      return e.deserializeBinaryFromReader(a, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return p(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      _(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "StoreItemID";
    }
  },
  Y = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.ids || u(e.M()),
        i.Message.initialize(this, r, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              ids: { n: 1, c: I, r: !0, q: !0 },
              context: { n: 2, c: P },
              data_request: { n: 3, c: X },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = n(e.M())), e.sm_mbf;
    }
    toObject(r = !1) {
      return e.toObject(r, this);
    }
    static toObject(r, t) {
      return d(e.M(), r, t);
    }
    static fromObject(r) {
      return l(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new i.default.BinaryReader(r),
        a = new e();
      return e.deserializeBinaryFromReader(a, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return p(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      _(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CStoreBrowse_GetItems_Request";
    }
  },
  J = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.store_items || u(e.M()),
        i.Message.initialize(this, r, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: { store_items: { n: 1, c: y, r: !0, q: !0 } },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = n(e.M())), e.sm_mbf;
    }
    toObject(r = !1) {
      return e.toObject(r, this);
    }
    static toObject(r, t) {
      return d(e.M(), r, t);
    }
    static fromObject(r) {
      return l(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new i.default.BinaryReader(r),
        a = new e();
      return e.deserializeBinaryFromReader(a, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return p(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      _(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CStoreBrowse_GetItems_Response";
    }
  },
  Z = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.language || u(e.M()),
        i.Message.initialize(this, r, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              language: { n: 1, br: o.readString, bw: s.writeString },
              elanguage: { n: 2, d: -1, br: o.readInt32, bw: s.writeInt32 },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = n(e.M())), e.sm_mbf;
    }
    toObject(r = !1) {
      return e.toObject(r, this);
    }
    static toObject(r, t) {
      return d(e.M(), r, t);
    }
    static fromObject(r) {
      return l(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new i.default.BinaryReader(r),
        a = new e();
      return e.deserializeBinaryFromReader(a, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return p(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      _(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CStoreBrowse_GetStoreCategories_Request";
    }
  },
  $ = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.categories || u(e.M()),
        i.Message.initialize(this, r, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: { categories: { n: 1, c: ee, r: !0, q: !0 } },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = n(e.M())), e.sm_mbf;
    }
    toObject(r = !1) {
      return e.toObject(r, this);
    }
    static toObject(r, t) {
      return d(e.M(), r, t);
    }
    static fromObject(r) {
      return l(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new i.default.BinaryReader(r),
        a = new e();
      return e.deserializeBinaryFromReader(a, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return p(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      _(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CStoreBrowse_GetStoreCategories_Response";
    }
  },
  ee = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.categoryid || u(e.M()),
        i.Message.initialize(this, r, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              categoryid: { n: 1, br: o.readUint32, bw: s.writeUint32 },
              type: { n: 2, br: o.readEnum, bw: s.writeEnum },
              internal_name: { n: 3, br: o.readString, bw: s.writeString },
              display_name: { n: 4, br: o.readString, bw: s.writeString },
              image_url: { n: 5, br: o.readString, bw: s.writeString },
              show_in_search: { n: 6, br: o.readBool, bw: s.writeBool },
              computed: { n: 7, br: o.readBool, bw: s.writeBool },
              edit_url: { n: 8, br: o.readString, bw: s.writeString },
              edit_sort_order: { n: 9, br: o.readUint32, bw: s.writeUint32 },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = n(e.M())), e.sm_mbf;
    }
    toObject(r = !1) {
      return e.toObject(r, this);
    }
    static toObject(r, t) {
      return d(e.M(), r, t);
    }
    static fromObject(r) {
      return l(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new i.default.BinaryReader(r),
        a = new e();
      return e.deserializeBinaryFromReader(a, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return p(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      _(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CStoreBrowse_GetStoreCategories_Response_Category";
    }
  },
  re = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.context || u(e.M()),
        i.Message.initialize(this, r, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m || (e.sm_m = { proto: e, fields: { context: { n: 1, c: P } } }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = n(e.M())), e.sm_mbf;
    }
    toObject(r = !1) {
      return e.toObject(r, this);
    }
    static toObject(r, t) {
      return d(e.M(), r, t);
    }
    static fromObject(r) {
      return l(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new i.default.BinaryReader(r),
        a = new e();
      return e.deserializeBinaryFromReader(a, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return p(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      _(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CStoreBrowse_GetContentHubConfig_Request";
    }
  },
  te = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.hubconfigs || u(e.M()),
        i.Message.initialize(this, r, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: { hubconfigs: { n: 1, c: oe, r: !0, q: !0 } },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = n(e.M())), e.sm_mbf;
    }
    toObject(r = !1) {
      return e.toObject(r, this);
    }
    static toObject(r, t) {
      return d(e.M(), r, t);
    }
    static fromObject(r) {
      return l(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new i.default.BinaryReader(r),
        a = new e();
      return e.deserializeBinaryFromReader(a, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return p(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      _(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CStoreBrowse_GetContentHubConfig_Response";
    }
  },
  oe = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.hubcategoryid || u(e.M()),
        i.Message.initialize(this, r, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              hubcategoryid: { n: 1, br: o.readUint32, bw: s.writeUint32 },
              type: { n: 2, br: o.readString, bw: s.writeString },
              handle: { n: 3, br: o.readString, bw: s.writeString },
              display_name: { n: 4, br: o.readString, bw: s.writeString },
              url_path: { n: 5, br: o.readString, bw: s.writeString },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = n(e.M())), e.sm_mbf;
    }
    toObject(r = !1) {
      return e.toObject(r, this);
    }
    static toObject(r, t) {
      return d(e.M(), r, t);
    }
    static fromObject(r) {
      return l(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new i.default.BinaryReader(r),
        a = new e();
      return e.deserializeBinaryFromReader(a, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return p(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      _(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CStoreBrowse_GetContentHubConfig_Response_ContentHubConfig";
    }
  },
  ie = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.country_code || u(e.M()),
        i.Message.initialize(this, r, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              country_code: { n: 1, br: o.readString, bw: s.writeString },
              currency_code: { n: 2, br: o.readString, bw: s.writeString },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = n(e.M())), e.sm_mbf;
    }
    toObject(r = !1) {
      return e.toObject(r, this);
    }
    static toObject(r, t) {
      return d(e.M(), r, t);
    }
    static fromObject(r) {
      return l(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new i.default.BinaryReader(r),
        a = new e();
      return e.deserializeBinaryFromReader(a, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return p(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      _(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CStoreBrowse_GetPriceStops_Request";
    }
  },
  se = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.price_stops || u(e.M()),
        i.Message.initialize(this, r, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              price_stops: { n: 1, c: ae, r: !0, q: !0 },
              currency_code: { n: 2, br: o.readString, bw: s.writeString },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = n(e.M())), e.sm_mbf;
    }
    toObject(r = !1) {
      return e.toObject(r, this);
    }
    static toObject(r, t) {
      return d(e.M(), r, t);
    }
    static fromObject(r) {
      return l(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new i.default.BinaryReader(r),
        a = new e();
      return e.deserializeBinaryFromReader(a, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return p(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      _(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CStoreBrowse_GetPriceStops_Response";
    }
  },
  ae = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.formatted_amount || u(e.M()),
        i.Message.initialize(this, r, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              formatted_amount: { n: 1, br: o.readString, bw: s.writeString },
              amount_in_cents: {
                n: 2,
                br: o.readInt64String,
                bw: s.writeInt64String,
              },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = n(e.M())), e.sm_mbf;
    }
    toObject(r = !1) {
      return e.toObject(r, this);
    }
    static toObject(r, t) {
      return d(e.M(), r, t);
    }
    static fromObject(r) {
      return l(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new i.default.BinaryReader(r),
        a = new e();
      return e.deserializeBinaryFromReader(a, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return p(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      _(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CStoreBrowse_GetPriceStops_Response_PriceStop";
    }
  },
  ne = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.context || u(e.M()),
        i.Message.initialize(this, r, 0, -1, [3], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              context: { n: 1, c: P },
              store_page_filter: { n: 2, c: B },
              appids: { n: 3, c: I, r: !0, q: !0 },
              steamid: {
                n: 4,
                br: o.readUint64String,
                bw: s.writeUint64String,
              },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = n(e.M())), e.sm_mbf;
    }
    toObject(r = !1) {
      return e.toObject(r, this);
    }
    static toObject(r, t) {
      return d(e.M(), r, t);
    }
    static fromObject(r) {
      return l(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new i.default.BinaryReader(r),
        a = new e();
      return e.deserializeBinaryFromReader(a, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return p(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      _(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CStoreBrowse_GetDLCForApps_Request";
    }
  },
  le = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.dlc_data || u(e.M()),
        i.Message.initialize(this, r, 0, -1, [1, 2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              dlc_data: { n: 1, c: de, r: !0, q: !0 },
              playtime: { n: 2, c: pe, r: !0, q: !0 },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = n(e.M())), e.sm_mbf;
    }
    toObject(r = !1) {
      return e.toObject(r, this);
    }
    static toObject(r, t) {
      return d(e.M(), r, t);
    }
    static fromObject(r) {
      return l(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new i.default.BinaryReader(r),
        a = new e();
      return e.deserializeBinaryFromReader(a, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return p(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      _(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CStoreBrowse_GetDLCForApps_Response";
    }
  },
  de = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.appid || u(e.M()),
        i.Message.initialize(this, r, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              appid: { n: 1, br: o.readUint32, bw: s.writeUint32 },
              parentappid: { n: 2, br: o.readUint32, bw: s.writeUint32 },
              release_date: { n: 3, br: o.readUint32, bw: s.writeUint32 },
              coming_soon: { n: 4, br: o.readBool, bw: s.writeBool },
              price: { n: 5, br: o.readInt64String, bw: s.writeInt64String },
              discount: { n: 6, br: o.readUint32, bw: s.writeUint32 },
              free: { n: 7, br: o.readBool, bw: s.writeBool },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = n(e.M())), e.sm_mbf;
    }
    toObject(r = !1) {
      return e.toObject(r, this);
    }
    static toObject(r, t) {
      return d(e.M(), r, t);
    }
    static fromObject(r) {
      return l(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new i.default.BinaryReader(r),
        a = new e();
      return e.deserializeBinaryFromReader(a, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return p(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      _(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CStoreBrowse_GetDLCForApps_Response_DLCData";
    }
  },
  pe = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.appid || u(e.M()),
        i.Message.initialize(this, r, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              appid: { n: 1, br: o.readUint32, bw: s.writeUint32 },
              playtime: { n: 2, br: o.readUint32, bw: s.writeUint32 },
              last_played: { n: 3, br: o.readUint32, bw: s.writeUint32 },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = n(e.M())), e.sm_mbf;
    }
    toObject(r = !1) {
      return e.toObject(r, this);
    }
    static toObject(r, t) {
      return d(e.M(), r, t);
    }
    static fromObject(r) {
      return l(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new i.default.BinaryReader(r),
        a = new e();
      return e.deserializeBinaryFromReader(a, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return p(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      _(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CStoreBrowse_GetDLCForApps_Response_PlaytimeForApp";
    }
  },
  _e = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.context || u(e.M()),
        i.Message.initialize(this, r, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              context: { n: 1, c: P },
              appids: {
                n: 2,
                r: !0,
                q: !0,
                br: o.readUint32,
                pbr: o.readPackedUint32,
                bw: s.writeRepeatedUint32,
              },
              flavor: { n: 3, br: o.readString, bw: s.writeString },
              count: { n: 4, br: o.readUint32, bw: s.writeUint32 },
              store_page_filter: { n: 5, c: B },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = n(e.M())), e.sm_mbf;
    }
    toObject(r = !1) {
      return e.toObject(r, this);
    }
    static toObject(r, t) {
      return d(e.M(), r, t);
    }
    static fromObject(r) {
      return l(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new i.default.BinaryReader(r),
        a = new e();
      return e.deserializeBinaryFromReader(a, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return p(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      _(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CStoreBrowse_GetDLCForAppsSolr_Request";
    }
  },
  ue = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.dlc_lists || u(e.M()),
        i.Message.initialize(this, r, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: { dlc_lists: { n: 1, c: me, r: !0, q: !0 } },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = n(e.M())), e.sm_mbf;
    }
    toObject(r = !1) {
      return e.toObject(r, this);
    }
    static toObject(r, t) {
      return d(e.M(), r, t);
    }
    static fromObject(r) {
      return l(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new i.default.BinaryReader(r),
        a = new e();
      return e.deserializeBinaryFromReader(a, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return p(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      _(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CStoreBrowse_GetDLCForAppsSolr_Response";
    }
  },
  me = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.parent_appid || u(e.M()),
        i.Message.initialize(this, r, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              parent_appid: { n: 1, br: o.readUint32, bw: s.writeUint32 },
              dlc_appids: {
                n: 2,
                r: !0,
                q: !0,
                br: o.readUint32,
                pbr: o.readPackedUint32,
                bw: s.writeRepeatedUint32,
              },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = n(e.M())), e.sm_mbf;
    }
    toObject(r = !1) {
      return e.toObject(r, this);
    }
    static toObject(r, t) {
      return d(e.M(), r, t);
    }
    static fromObject(r) {
      return l(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new i.default.BinaryReader(r),
        a = new e();
      return e.deserializeBinaryFromReader(a, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return p(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      _(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CStoreBrowse_GetDLCForAppsSolr_Response_DLCList";
    }
  },
  ce = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.packageid || u(e.M()),
        i.Message.initialize(this, r, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              packageid: {
                n: 1,
                r: !0,
                q: !0,
                br: o.readUint32,
                pbr: o.readPackedUint32,
                bw: s.writeRepeatedUint32,
              },
              context: { n: 2, c: P },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = n(e.M())), e.sm_mbf;
    }
    toObject(r = !1) {
      return e.toObject(r, this);
    }
    static toObject(r, t) {
      return d(e.M(), r, t);
    }
    static fromObject(r) {
      return l(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new i.default.BinaryReader(r),
        a = new e();
      return e.deserializeBinaryFromReader(a, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return p(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      _(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CStoreBrowse_GetHardwareItems_Request";
    }
  },
  be = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.packageid || u(e.M()),
        i.Message.initialize(this, r, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              packageid: { n: 1, br: o.readUint32, bw: s.writeUint32 },
              inventory_available: { n: 3, br: o.readBool, bw: s.writeBool },
              high_pending_orders: { n: 4, br: o.readBool, bw: s.writeBool },
              account_restricted_from_purchasing: {
                n: 5,
                br: o.readBool,
                bw: s.writeBool,
              },
              requires_reservation: { n: 6, br: o.readBool, bw: s.writeBool },
              rtime_estimated_notification: {
                n: 7,
                br: o.readUint32,
                bw: s.writeUint32,
              },
              notificaton_token: { n: 8, br: o.readString, bw: s.writeString },
              reservation_state: { n: 9, br: o.readInt32, bw: s.writeInt32 },
              expired: { n: 10, br: o.readBool, bw: s.writeBool },
              time_expires: { n: 11, br: o.readUint32, bw: s.writeUint32 },
              time_reserved: { n: 12, br: o.readUint32, bw: s.writeUint32 },
              allow_quantity_purchase: {
                n: 13,
                br: o.readBool,
                bw: s.writeBool,
              },
              max_quantity_per_purchase: {
                n: 14,
                br: o.readInt32,
                bw: s.writeInt32,
              },
              allow_purchase_in_country: {
                n: 15,
                br: o.readBool,
                bw: s.writeBool,
              },
              estimated_delivery_soonest_business_days: {
                n: 17,
                br: o.readUint32,
                bw: s.writeUint32,
              },
              estimated_delivery_latest_business_days: {
                n: 18,
                br: o.readUint32,
                bw: s.writeUint32,
              },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = n(e.M())), e.sm_mbf;
    }
    toObject(r = !1) {
      return e.toObject(r, this);
    }
    static toObject(r, t) {
      return d(e.M(), r, t);
    }
    static fromObject(r) {
      return l(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new i.default.BinaryReader(r),
        a = new e();
      return e.deserializeBinaryFromReader(a, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return p(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      _(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CHardwarePackageDetails";
    }
  },
  Se = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.details || u(e.M()),
        i.Message.initialize(this, r, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: { details: { n: 1, c: be, r: !0, q: !0 } },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = n(e.M())), e.sm_mbf;
    }
    toObject(r = !1) {
      return e.toObject(r, this);
    }
    static toObject(r, t) {
      return d(e.M(), r, t);
    }
    static fromObject(r) {
      return l(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new i.default.BinaryReader(r),
        a = new e();
      return e.deserializeBinaryFromReader(a, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return p(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      _(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CStoreBrowse_GetHardwareItems_Response";
    }
  },
  Pe = class e extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.filter_failure || u(e.M()),
        i.Message.initialize(this, r, 0, -1, [21, 30], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              filter_failure: { n: 1, d: 0, br: o.readEnum, bw: s.writeEnum },
              already_owned: { n: 5, br: o.readBool, bw: s.writeBool },
              on_wishlist: { n: 6, br: o.readBool, bw: s.writeBool },
              ignored: { n: 7, br: o.readBool, bw: s.writeBool },
              not_in_users_language: { n: 10, br: o.readBool, bw: s.writeBool },
              not_on_users_platform: { n: 11, br: o.readBool, bw: s.writeBool },
              demo_for_owned_game: { n: 12, br: o.readBool, bw: s.writeBool },
              dlc_for_unowned_game: { n: 13, br: o.readBool, bw: s.writeBool },
              nonpreferred_product_type: {
                n: 20,
                br: o.readBool,
                bw: s.writeBool,
              },
              excluded_tagids: {
                n: 21,
                r: !0,
                q: !0,
                br: o.readUint32,
                pbr: o.readPackedUint32,
                bw: s.writeRepeatedUint32,
              },
              excluded_content_descriptorids: {
                n: 30,
                r: !0,
                q: !0,
                br: o.readEnum,
                pbr: o.readPackedEnum,
                bw: s.writeRepeatedEnum,
              },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = n(e.M())), e.sm_mbf;
    }
    toObject(r = !1) {
      return e.toObject(r, this);
    }
    static toObject(r, t) {
      return d(e.M(), r, t);
    }
    static fromObject(r) {
      return l(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new i.default.BinaryReader(r),
        a = new e();
      return e.deserializeBinaryFromReader(a, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return p(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      _(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new i.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "StoreBrowseFilterFailure";
    }
  },
  we;
((Re) => {
  function e(c, b) {
    return c.SendMsg("StoreBrowse.GetItems#1", S(Y, b), J, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
    });
  }
  Re.GetItems = e;
  function r(c, b) {
    return c.SendMsg("StoreBrowse.GetStoreCategories#1", S(Z, b), $, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
    });
  }
  Re.GetStoreCategories = r;
  function t(c, b) {
    return c.SendMsg("StoreBrowse.GetContentHubConfig#1", S(re, b), te, {
      bConstMethod: !0,
      ePrivilege: 0,
      eWebAPIKeyRequirement: 1,
    });
  }
  Re.GetContentHubConfig = t;
  function a(c, b) {
    return c.SendMsg("StoreBrowse.GetPriceStops#1", S(ie, b), se, {
      bConstMethod: !0,
      ePrivilege: 0,
      eWebAPIKeyRequirement: 1,
    });
  }
  Re.GetPriceStops = a;
  function ye(c, b) {
    return c.SendMsg("StoreBrowse.GetDLCForApps#1", S(ne, b), le, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  Re.GetDLCForApps = ye;
  function Ce(c, b) {
    return c.SendMsg("StoreBrowse.GetDLCForAppsSolr#1", S(_e, b), ue, {
      bConstMethod: !0,
      ePrivilege: 0,
      eWebAPIKeyRequirement: 1,
    });
  }
  Re.GetDLCForAppsSolr = Ce;
  function ve(c, b) {
    return c.SendMsg("StoreBrowse.GetHardwareItems#1", S(ce, b), Se, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  Re.GetHardwareItems = ve;
})((we ||= {}));
export {
  B as a,
  he as b,
  y as c,
  X as d,
  P as e,
  I as f,
  Y as g,
  J as h,
  re as i,
  ie as j,
  we as k,
};

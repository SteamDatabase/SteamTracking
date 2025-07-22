import {
  a as b,
  f,
  g as v,
  h as R,
  i as y,
  j as L,
  k as K,
} from "./chunk-JW7T2CRK.js";
import {
  a as V,
  b as s,
  c as i,
  d as n,
  e as u,
  f as l,
  g as d,
  h as m,
  i as _,
  u as p,
} from "./chunk-YZ7EZJUY.js";
import { e as E } from "./chunk-5WT7BLXL.js";
var o = E(V());
var C = class e extends o.Message {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.released_only || _(e.M()),
        o.Message.initialize(this, r, 0, -1, [4, 10, 11, 15, 16, 45], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              released_only: { n: 1, br: s.readBool, bw: i.writeBool },
              coming_soon_only: { n: 2, br: s.readBool, bw: i.writeBool },
              type_filters: { n: 3, c: Q },
              exclude_from: {
                n: 4,
                r: !0,
                q: !0,
                br: s.readEnum,
                pbr: s.readPackedEnum,
                bw: i.writeRepeatedEnum,
              },
              predefined_filter: { n: 5, c: I },
              tagids_must_match: { n: 10, c: w, r: !0, q: !0 },
              tagids_exclude: {
                n: 11,
                r: !0,
                q: !0,
                br: s.readInt32,
                pbr: s.readPackedInt32,
                bw: i.writeRepeatedInt32,
              },
              price_filters: { n: 12, c: F },
              content_descriptors_must_match: {
                n: 15,
                r: !0,
                q: !0,
                br: s.readEnum,
                pbr: s.readPackedEnum,
                bw: i.writeRepeatedEnum,
              },
              content_descriptors_excluded: {
                n: 16,
                r: !0,
                q: !0,
                br: s.readEnum,
                pbr: s.readPackedEnum,
                bw: i.writeRepeatedEnum,
              },
              regional_top_n_sellers: {
                n: 40,
                br: s.readInt32,
                bw: i.writeInt32,
              },
              global_top_n_sellers: {
                n: 41,
                br: s.readInt32,
                bw: i.writeInt32,
              },
              regional_long_term_top_n_sellers: {
                n: 42,
                br: s.readInt32,
                bw: i.writeInt32,
              },
              global_long_term_top_n_sellers: {
                n: 43,
                br: s.readInt32,
                bw: i.writeInt32,
              },
              store_page_filter: { n: 44, c: b },
              parent_appids: {
                n: 45,
                r: !0,
                q: !0,
                br: s.readUint32,
                pbr: s.readPackedUint32,
                bw: i.writeRepeatedUint32,
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
      return l(e.M(), r, t);
    }
    static fromObject(r) {
      return u(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new o.default.BinaryReader(r),
        a = new e();
      return e.deserializeBinaryFromReader(a, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return d(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new o.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      m(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new o.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CStoreQueryFilters";
    }
  },
  Q = class e extends o.Message {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.include_apps || _(e.M()),
        o.Message.initialize(this, r, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              include_apps: { n: 1, br: s.readBool, bw: i.writeBool },
              include_packages: { n: 2, br: s.readBool, bw: i.writeBool },
              include_bundles: { n: 3, br: s.readBool, bw: i.writeBool },
              include_games: { n: 10, br: s.readBool, bw: i.writeBool },
              include_demos: { n: 11, br: s.readBool, bw: i.writeBool },
              include_mods: { n: 12, br: s.readBool, bw: i.writeBool },
              include_dlc: { n: 13, br: s.readBool, bw: i.writeBool },
              include_software: { n: 14, br: s.readBool, bw: i.writeBool },
              include_video: { n: 15, br: s.readBool, bw: i.writeBool },
              include_hardware: { n: 16, br: s.readBool, bw: i.writeBool },
              include_series: { n: 17, br: s.readBool, bw: i.writeBool },
              include_music: { n: 18, br: s.readBool, bw: i.writeBool },
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
      return l(e.M(), r, t);
    }
    static fromObject(r) {
      return u(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new o.default.BinaryReader(r),
        a = new e();
      return e.deserializeBinaryFromReader(a, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return d(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new o.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      m(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new o.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CStoreQueryFilters_TypeFilters";
    }
  },
  I = class e extends o.Message {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.filter_type || _(e.M()),
        o.Message.initialize(this, r, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              filter_type: { n: 1, br: s.readEnum, bw: i.writeEnum },
              language_preferences: {
                n: 2,
                r: !0,
                q: !0,
                br: s.readInt32,
                pbr: s.readPackedInt32,
                bw: i.writeRepeatedInt32,
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
      return l(e.M(), r, t);
    }
    static fromObject(r) {
      return u(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new o.default.BinaryReader(r),
        a = new e();
      return e.deserializeBinaryFromReader(a, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return d(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new o.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      m(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new o.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CStoreQueryFilters_PredefinedFilter";
    }
  },
  w = class e extends o.Message {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.tagids || _(e.M()),
        o.Message.initialize(this, r, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              tagids: {
                n: 1,
                r: !0,
                q: !0,
                br: s.readInt32,
                pbr: s.readPackedInt32,
                bw: i.writeRepeatedInt32,
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
      return l(e.M(), r, t);
    }
    static fromObject(r) {
      return u(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new o.default.BinaryReader(r),
        a = new e();
      return e.deserializeBinaryFromReader(a, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return d(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new o.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      m(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new o.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CStoreQueryFilters_TagFilter";
    }
  },
  F = class e extends o.Message {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.only_free_items || _(e.M()),
        o.Message.initialize(this, r, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              only_free_items: { n: 1, br: s.readBool, bw: i.writeBool },
              exclude_free_items: { n: 2, br: s.readBool, bw: i.writeBool },
              min_discount_percent: { n: 3, br: s.readInt32, bw: i.writeInt32 },
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
      return l(e.M(), r, t);
    }
    static fromObject(r) {
      return u(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new o.default.BinaryReader(r),
        a = new e();
      return e.deserializeBinaryFromReader(a, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return d(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new o.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      m(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new o.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CStoreQueryFilters_PriceFilters";
    }
  },
  H = class e extends o.Message {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.start || _(e.M()),
        o.Message.initialize(this, r, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              start: { n: 1, d: 0, br: s.readInt32, bw: i.writeInt32 },
              count: { n: 2, d: 10, br: s.readInt32, bw: i.writeInt32 },
              sort: { n: 10, d: 0, br: s.readEnum, bw: i.writeEnum },
              filters: { n: 20, c: C },
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
      return l(e.M(), r, t);
    }
    static fromObject(r) {
      return u(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new o.default.BinaryReader(r),
        a = new e();
      return e.deserializeBinaryFromReader(a, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return d(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new o.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      m(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new o.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CStoreQueryParams";
    }
  },
  M = class e extends o.Message {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.id || _(e.M()),
        o.Message.initialize(this, r, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              id: { n: 1, c: y },
              score: { n: 2, br: s.readDouble, bw: i.writeDouble },
              spellcheck_generated_result: {
                n: 3,
                br: s.readBool,
                bw: i.writeBool,
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
      return l(e.M(), r, t);
    }
    static fromObject(r) {
      return u(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new o.default.BinaryReader(r),
        a = new e();
      return e.deserializeBinaryFromReader(a, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return d(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new o.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      m(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new o.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CStoreQueryPerResultMetadata";
    }
  },
  g = class e extends o.Message {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.total_matching_records || _(e.M()),
        o.Message.initialize(this, r, 0, -1, [4, 5], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              total_matching_records: {
                n: 1,
                br: s.readInt32,
                bw: i.writeInt32,
              },
              start: { n: 2, br: s.readInt32, bw: i.writeInt32 },
              count: { n: 3, br: s.readInt32, bw: i.writeInt32 },
              per_result_metadata: { n: 4, c: M, r: !0, q: !0 },
              spellcheck_suggestions: {
                n: 5,
                r: !0,
                q: !0,
                br: s.readString,
                bw: i.writeRepeatedString,
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
      return l(e.M(), r, t);
    }
    static fromObject(r) {
      return u(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new o.default.BinaryReader(r),
        a = new e();
      return e.deserializeBinaryFromReader(a, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return d(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new o.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      m(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new o.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CStoreQueryResultMetadata";
    }
  },
  T = class e extends o.Message {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.query_name || _(e.M()),
        o.Message.initialize(this, r, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              query_name: { n: 1, br: s.readString, bw: i.writeString },
              query: { n: 2, c: H },
              context: { n: 3, c: R },
              data_request: { n: 4, c: v },
              override_country_code: {
                n: 5,
                br: s.readString,
                bw: i.writeString,
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
      return l(e.M(), r, t);
    }
    static fromObject(r) {
      return u(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new o.default.BinaryReader(r),
        a = new e();
      return e.deserializeBinaryFromReader(a, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return d(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new o.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      m(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new o.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CStoreQuery_Query_Request";
    }
  },
  z = class e extends o.Message {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.metadata || _(e.M()),
        o.Message.initialize(this, r, 0, -1, [2, 3], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              metadata: { n: 1, c: g },
              ids: { n: 2, c: y, r: !0, q: !0 },
              store_items: { n: 3, c: f, r: !0, q: !0 },
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
      return l(e.M(), r, t);
    }
    static fromObject(r) {
      return u(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new o.default.BinaryReader(r),
        a = new e();
      return e.deserializeBinaryFromReader(a, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return d(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new o.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      m(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new o.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CStoreQuery_Query_Response";
    }
  },
  G = class e extends o.Message {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.query_name || _(e.M()),
        o.Message.initialize(this, r, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              query_name: { n: 1, br: s.readString, bw: i.writeString },
              context: { n: 2, c: R },
              search_term: { n: 3, br: s.readString, bw: i.writeString },
              max_results: { n: 4, br: s.readUint32, bw: i.writeUint32 },
              filters: { n: 5, c: C },
              data_request: { n: 6, c: v },
              use_spellcheck: { n: 7, br: s.readBool, bw: i.writeBool },
              search_tags: { n: 8, br: s.readBool, bw: i.writeBool },
              search_creators: { n: 9, br: s.readBool, bw: i.writeBool },
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
      return l(e.M(), r, t);
    }
    static fromObject(r) {
      return u(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new o.default.BinaryReader(r),
        a = new e();
      return e.deserializeBinaryFromReader(a, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return d(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new o.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      m(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new o.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CStoreQuery_SearchSuggestions_Request";
    }
  },
  j = class e extends o.Message {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.metadata || _(e.M()),
        o.Message.initialize(this, r, 0, -1, [2, 3], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              metadata: { n: 1, c: g },
              ids: { n: 2, c: y, r: !0, q: !0 },
              store_items: { n: 3, c: f, r: !0, q: !0 },
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
      return l(e.M(), r, t);
    }
    static fromObject(r) {
      return u(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new o.default.BinaryReader(r),
        a = new e();
      return e.deserializeBinaryFromReader(a, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return d(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new o.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      m(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new o.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CStoreQuery_SearchSuggestions_Response";
    }
  },
  q = class e extends o.Message {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.filters || _(e.M()),
        o.Message.initialize(this, r, 0, -1, [6], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              filters: { n: 2, c: b },
              sections: { n: 6, c: x, r: !0, q: !0 },
              context: { n: 5, c: R },
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
      return l(e.M(), r, t);
    }
    static fromObject(r) {
      return u(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new o.default.BinaryReader(r),
        a = new e();
      return e.deserializeBinaryFromReader(a, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return d(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new o.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      m(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new o.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CStoreQuery_GetItemsByUserRecommendedTags_Request";
    }
  },
  x = class e extends o.Message {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.sort || _(e.M()),
        o.Message.initialize(this, r, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              sort: { n: 1, d: 0, br: s.readEnum, bw: i.writeEnum },
              min_items: { n: 2, br: s.readUint32, bw: i.writeUint32 },
              randomize: { n: 3, br: s.readBool, bw: i.writeBool },
              include_packages: {
                n: 4,
                d: !1,
                br: s.readBool,
                bw: i.writeBool,
              },
              include_bundles: { n: 5, d: !1, br: s.readBool, bw: i.writeBool },
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
      return l(e.M(), r, t);
    }
    static fromObject(r) {
      return u(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new o.default.BinaryReader(r),
        a = new e();
      return e.deserializeBinaryFromReader(a, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return d(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new o.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      m(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new o.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CStoreQuery_GetItemsByUserRecommendedTags_Request_Section";
    }
  },
  h = class e extends o.Message {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.sections || _(e.M()),
        o.Message.initialize(this, r, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: { sections: { n: 1, c: W, r: !0, q: !0 } },
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
      return l(e.M(), r, t);
    }
    static fromObject(r) {
      return u(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new o.default.BinaryReader(r),
        a = new e();
      return e.deserializeBinaryFromReader(a, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return d(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new o.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      m(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new o.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CStoreQuery_GetItemsByUserRecommendedTags_Response";
    }
  },
  W = class e extends o.Message {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.tagid || _(e.M()),
        o.Message.initialize(this, r, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              tagid: { n: 1, br: s.readUint32, bw: i.writeUint32 },
              store_item_ids: { n: 2, c: y, r: !0, q: !0 },
              tag_name: { n: 3, br: s.readString, bw: i.writeString },
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
      return l(e.M(), r, t);
    }
    static fromObject(r) {
      return u(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new o.default.BinaryReader(r),
        a = new e();
      return e.deserializeBinaryFromReader(a, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return d(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new o.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      m(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new o.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CStoreQuery_GetItemsByUserRecommendedTags_Response_Section";
    }
  },
  U = class e extends o.Message {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.sort || _(e.M()),
        o.Message.initialize(this, r, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              sort: { n: 1, d: 0, br: s.readEnum, bw: i.writeEnum },
              max_items: { n: 2, br: s.readUint32, bw: i.writeUint32 },
              randomize: { n: 3, br: s.readBool, bw: i.writeBool },
              include_packages: {
                n: 4,
                d: !1,
                br: s.readBool,
                bw: i.writeBool,
              },
              include_bundles: { n: 5, d: !1, br: s.readBool, bw: i.writeBool },
              filters: { n: 6, c: b },
              context: { n: 7, c: R },
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
      return l(e.M(), r, t);
    }
    static fromObject(r) {
      return u(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new o.default.BinaryReader(r),
        a = new e();
      return e.deserializeBinaryFromReader(a, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return d(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new o.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      m(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new o.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CStoreQuery_GetItemByUserCombinedTagsPriority_Request";
    }
  },
  O = class e extends o.Message {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.tagid || _(e.M()),
        o.Message.initialize(this, r, 0, -1, [1, 2, 3], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              tagid: {
                n: 1,
                r: !0,
                q: !0,
                br: s.readUint32,
                pbr: s.readPackedUint32,
                bw: i.writeRepeatedUint32,
              },
              store_item_ids: { n: 2, c: y, r: !0, q: !0 },
              tag_name: {
                n: 3,
                r: !0,
                q: !0,
                br: s.readString,
                bw: i.writeRepeatedString,
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
      return l(e.M(), r, t);
    }
    static fromObject(r) {
      return u(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new o.default.BinaryReader(r),
        a = new e();
      return e.deserializeBinaryFromReader(a, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return d(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new o.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      m(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new o.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CStoreQuery_GetItemByUserCombinedTagsPriority_Response";
    }
  },
  X;
((P) => {
  function e(S, B) {
    return S.SendMsg("StoreQuery.Query#1", p(T, B), z, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
    });
  }
  P.Query = e;
  function r(S, B) {
    return S.SendMsg("StoreQuery.SearchSuggestions#1", p(G, B), j, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  P.SearchSuggestions = r;
  function t(S, B) {
    return S.SendMsg("StoreQuery.GetItemsByUserRecommendedTags#1", p(q, B), h, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  P.GetItemsByUserRecommendedTags = t;
  function a(S, B) {
    return S.SendMsg(
      "StoreQuery.GetItemByUserCombinedTagsPriority#1",
      p(U, B),
      O,
      { bConstMethod: !0, ePrivilege: 1 },
    );
  }
  P.GetItemByUserCombinedTagsPriority = a;
})((X ||= {}));
var c = E(V());
var D = class e extends c.Message {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.request || _(e.M()),
        c.Message.initialize(this, r, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              request: { n: 1, c: L },
              include_unpublished: { n: 2, br: s.readBool, bw: i.writeBool },
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
      return l(e.M(), r, t);
    }
    static fromObject(r) {
      return u(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new c.default.BinaryReader(r),
        a = new e();
      return e.deserializeBinaryFromReader(a, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return d(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new c.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      m(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new c.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CPartnerStoreBrowse_GetItems_Request";
    }
  },
  k = class e extends c.Message {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.ids || _(e.M()),
        c.Message.initialize(this, r, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: { ids: { n: 1, c: y, r: !0, q: !0 } },
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
      return l(e.M(), r, t);
    }
    static fromObject(r) {
      return u(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new c.default.BinaryReader(r),
        a = new e();
      return e.deserializeBinaryFromReader(a, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return d(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new c.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      m(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new c.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CPartnerStoreBrowse_GetCountryRestrictions_Request";
    }
  },
  A = class e extends c.Message {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.results || _(e.M()),
        c.Message.initialize(this, r, 0, -1, [1, 2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              results: { n: 1, c: N, r: !0, q: !0 },
              no_info: { n: 2, c: y, r: !0, q: !0 },
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
      return l(e.M(), r, t);
    }
    static fromObject(r) {
      return u(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new c.default.BinaryReader(r),
        a = new e();
      return e.deserializeBinaryFromReader(a, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return d(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new c.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      m(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new c.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CPartnerStoreBrowse_GetCountryRestrictions_Response";
    }
  },
  N = class e extends c.Message {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.id || _(e.M()),
        c.Message.initialize(this, r, 0, -1, [3, 4], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              id: { n: 1, c: y },
              no_restrictions: { n: 2, br: s.readBool, bw: i.writeBool },
              allowed_countries: {
                n: 3,
                r: !0,
                q: !0,
                br: s.readString,
                bw: i.writeRepeatedString,
              },
              restricted_countries: {
                n: 4,
                r: !0,
                q: !0,
                br: s.readString,
                bw: i.writeRepeatedString,
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
      return l(e.M(), r, t);
    }
    static fromObject(r) {
      return u(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new c.default.BinaryReader(r),
        a = new e();
      return e.deserializeBinaryFromReader(a, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return d(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new c.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      m(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new c.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CPartnerStoreBrowse_GetCountryRestrictions_Response_CCountryRestrictions";
    }
  },
  Y;
((t) => {
  function e(a, P) {
    return a.SendMsg("PartnerStoreBrowse.GetItems#1", p(D, P), K, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  t.GetItems = e;
  function r(a, P) {
    return a.SendMsg(
      "PartnerStoreBrowse.GetCountryRestrictions#1",
      p(k, P),
      A,
      { bConstMethod: !0, ePrivilege: 1 },
    );
  }
  t.GetCountryRestrictions = r;
})((Y ||= {}));
export { D as a, Y as b, C as c, H as d, T as e, G as f, X as g };

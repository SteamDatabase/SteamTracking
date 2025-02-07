const CLSTAMP = 9520173;

import {
  A as B,
  B as re,
  C as te,
  a as ee,
  b as o,
  c as i,
  d,
  e as m,
  f as c,
  g as _,
  h as y,
  i as p,
  u as P,
  v as g,
  x as I,
  y as F,
  z as C,
} from "./chunk-BA5QK33X.js";
import { b as ne, d as $ } from "./chunk-MXFEM5DW.js";
var Re = ne((Oe, oe) => {
  "use strict";
  var me = (function () {
      function e(t, s) {
        if (typeof t != "function")
          throw new TypeError(
            "DataLoader must be constructed with a function which accepts " +
              ("Array<key> and returns Promise<Array<value>>, but got: " +
                t +
                "."),
          );
        (this._batchLoadFn = t),
          (this._maxBatchSize = pe(s)),
          (this._batchScheduleFn = Se(s)),
          (this._cacheKeyFn = be(s)),
          (this._cacheMap = Be(s)),
          (this._batch = null),
          (this.name = Pe(s));
      }
      var r = e.prototype;
      return (
        (r.load = function (s) {
          if (s == null)
            throw new TypeError(
              "The loader.load() function must be called with a value, " +
                ("but got: " + String(s) + "."),
            );
          var u = _e(this),
            l = this._cacheMap,
            b = this._cacheKeyFn(s);
          if (l) {
            var f = l.get(b);
            if (f) {
              var ie = u.cacheHits || (u.cacheHits = []);
              return new Promise(function (w) {
                ie.push(function () {
                  w(f);
                });
              });
            }
          }
          u.keys.push(s);
          var Z = new Promise(function (w, ae) {
            u.callbacks.push({ resolve: w, reject: ae });
          });
          return l && l.set(b, Z), Z;
        }),
        (r.loadMany = function (s) {
          if (!se(s))
            throw new TypeError(
              "The loader.loadMany() function must be called with Array<key> " +
                ("but got: " + s + "."),
            );
          for (var u = [], l = 0; l < s.length; l++)
            u.push(
              this.load(s[l]).catch(function (b) {
                return b;
              }),
            );
          return Promise.all(u);
        }),
        (r.clear = function (s) {
          var u = this._cacheMap;
          if (u) {
            var l = this._cacheKeyFn(s);
            u.delete(l);
          }
          return this;
        }),
        (r.clearAll = function () {
          var s = this._cacheMap;
          return s && s.clear(), this;
        }),
        (r.prime = function (s, u) {
          var l = this._cacheMap;
          if (l) {
            var b = this._cacheKeyFn(s);
            if (l.get(b) === void 0) {
              var f;
              u instanceof Error
                ? ((f = Promise.reject(u)), f.catch(function () {}))
                : (f = Promise.resolve(u)),
                l.set(b, f);
            }
          }
          return this;
        }),
        e
      );
    })(),
    ce =
      typeof process == "object" && typeof process.nextTick == "function"
        ? function (e) {
            J || (J = Promise.resolve()),
              J.then(function () {
                process.nextTick(e);
              });
          }
        : typeof setImmediate == "function"
          ? function (e) {
              setImmediate(e);
            }
          : function (e) {
              setTimeout(e);
            },
    J;
  function _e(e) {
    var r = e._batch;
    if (r !== null && !r.hasDispatched && r.keys.length < e._maxBatchSize)
      return r;
    var t = { hasDispatched: !1, keys: [], callbacks: [] };
    return (
      (e._batch = t),
      e._batchScheduleFn(function () {
        ye(e, t);
      }),
      t
    );
  }
  function ye(e, r) {
    if (((r.hasDispatched = !0), r.keys.length === 0)) {
      Y(r);
      return;
    }
    var t;
    try {
      t = e._batchLoadFn(r.keys);
    } catch (s) {
      return X(
        e,
        r,
        new TypeError(
          "DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function " +
            ("errored synchronously: " + String(s) + "."),
        ),
      );
    }
    if (!t || typeof t.then != "function")
      return X(
        e,
        r,
        new TypeError(
          "DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did " +
            ("not return a Promise: " + String(t) + "."),
        ),
      );
    t.then(function (s) {
      if (!se(s))
        throw new TypeError(
          "DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did " +
            ("not return a Promise of an Array: " + String(s) + "."),
        );
      if (s.length !== r.keys.length)
        throw new TypeError(
          "DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array of the same length as the Array of keys." +
            (`

Keys:
` +
              String(r.keys)) +
            (`

Values:
` +
              String(s)),
        );
      Y(r);
      for (var u = 0; u < r.callbacks.length; u++) {
        var l = s[u];
        l instanceof Error
          ? r.callbacks[u].reject(l)
          : r.callbacks[u].resolve(l);
      }
    }).catch(function (s) {
      X(e, r, s);
    });
  }
  function X(e, r, t) {
    Y(r);
    for (var s = 0; s < r.keys.length; s++)
      e.clear(r.keys[s]), r.callbacks[s].reject(t);
  }
  function Y(e) {
    if (e.cacheHits)
      for (var r = 0; r < e.cacheHits.length; r++) e.cacheHits[r]();
  }
  function pe(e) {
    var r = !e || e.batch !== !1;
    if (!r) return 1;
    var t = e && e.maxBatchSize;
    if (t === void 0) return 1 / 0;
    if (typeof t != "number" || t < 1)
      throw new TypeError("maxBatchSize must be a positive number: " + t);
    return t;
  }
  function Se(e) {
    var r = e && e.batchScheduleFn;
    if (r === void 0) return ce;
    if (typeof r != "function")
      throw new TypeError("batchScheduleFn must be a function: " + r);
    return r;
  }
  function be(e) {
    var r = e && e.cacheKeyFn;
    if (r === void 0)
      return function (t) {
        return t;
      };
    if (typeof r != "function")
      throw new TypeError("cacheKeyFn must be a function: " + r);
    return r;
  }
  function Be(e) {
    var r = !e || e.cache !== !1;
    if (!r) return null;
    var t = e && e.cacheMap;
    if (t === void 0) return new Map();
    if (t !== null) {
      var s = ["get", "set", "delete", "clear"],
        u = s.filter(function (l) {
          return t && typeof t[l] != "function";
        });
      if (u.length !== 0)
        throw new TypeError("Custom cacheMap missing methods: " + u.join(", "));
    }
    return t;
  }
  function Pe(e) {
    return e && e.name ? e.name : null;
  }
  function se(e) {
    return (
      typeof e == "object" &&
      e !== null &&
      typeof e.length == "number" &&
      (e.length === 0 ||
        (e.length > 0 && Object.prototype.hasOwnProperty.call(e, e.length - 1)))
    );
  }
  oe.exports = me;
});
var a = $(ee());
var n = a.Message;
var v = class e extends n {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.released_only || p(e.M()),
        n.initialize(this, r, 0, -1, [4, 10, 11, 15, 16, 45], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              released_only: { n: 1, br: o.readBool, bw: i.writeBool },
              coming_soon_only: { n: 2, br: o.readBool, bw: i.writeBool },
              type_filters: { n: 3, c: H },
              exclude_from: {
                n: 4,
                r: !0,
                q: !0,
                br: o.readEnum,
                pbr: o.readPackedEnum,
                bw: i.writeRepeatedEnum,
              },
              predefined_filter: { n: 5, c: M },
              tagids_must_match: { n: 10, c: h, r: !0, q: !0 },
              tagids_exclude: {
                n: 11,
                r: !0,
                q: !0,
                br: o.readInt32,
                pbr: o.readPackedInt32,
                bw: i.writeRepeatedInt32,
              },
              price_filters: { n: 12, c: T },
              content_descriptors_must_match: {
                n: 15,
                r: !0,
                q: !0,
                br: o.readEnum,
                pbr: o.readPackedEnum,
                bw: i.writeRepeatedEnum,
              },
              content_descriptors_excluded: {
                n: 16,
                r: !0,
                q: !0,
                br: o.readEnum,
                pbr: o.readPackedEnum,
                bw: i.writeRepeatedEnum,
              },
              regional_top_n_sellers: {
                n: 40,
                br: o.readInt32,
                bw: i.writeInt32,
              },
              global_top_n_sellers: {
                n: 41,
                br: o.readInt32,
                bw: i.writeInt32,
              },
              regional_long_term_top_n_sellers: {
                n: 42,
                br: o.readInt32,
                bw: i.writeInt32,
              },
              global_long_term_top_n_sellers: {
                n: 43,
                br: o.readInt32,
                bw: i.writeInt32,
              },
              store_page_filter: { n: 44, c: g },
              parent_appids: {
                n: 45,
                r: !0,
                q: !0,
                br: o.readUint32,
                pbr: o.readPackedUint32,
                bw: i.writeRepeatedUint32,
              },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = d(e.M())), e.sm_mbf;
    }
    toObject(r = !1) {
      return e.toObject(r, this);
    }
    static toObject(r, t) {
      return c(e.M(), r, t);
    }
    static fromObject(r) {
      return m(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new a.BinaryReader(r),
        s = new e();
      return e.deserializeBinaryFromReader(s, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return _(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new a.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      y(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new a.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CStoreQueryFilters";
    }
  },
  H = class e extends n {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.include_apps || p(e.M()),
        n.initialize(this, r, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              include_apps: { n: 1, br: o.readBool, bw: i.writeBool },
              include_packages: { n: 2, br: o.readBool, bw: i.writeBool },
              include_bundles: { n: 3, br: o.readBool, bw: i.writeBool },
              include_games: { n: 10, br: o.readBool, bw: i.writeBool },
              include_demos: { n: 11, br: o.readBool, bw: i.writeBool },
              include_mods: { n: 12, br: o.readBool, bw: i.writeBool },
              include_dlc: { n: 13, br: o.readBool, bw: i.writeBool },
              include_software: { n: 14, br: o.readBool, bw: i.writeBool },
              include_video: { n: 15, br: o.readBool, bw: i.writeBool },
              include_hardware: { n: 16, br: o.readBool, bw: i.writeBool },
              include_series: { n: 17, br: o.readBool, bw: i.writeBool },
              include_music: { n: 18, br: o.readBool, bw: i.writeBool },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = d(e.M())), e.sm_mbf;
    }
    toObject(r = !1) {
      return e.toObject(r, this);
    }
    static toObject(r, t) {
      return c(e.M(), r, t);
    }
    static fromObject(r) {
      return m(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new a.BinaryReader(r),
        s = new e();
      return e.deserializeBinaryFromReader(s, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return _(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new a.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      y(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new a.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CStoreQueryFilters_TypeFilters";
    }
  },
  M = class e extends n {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.filter_type || p(e.M()),
        n.initialize(this, r, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              filter_type: { n: 1, br: o.readEnum, bw: i.writeEnum },
              language_preferences: {
                n: 2,
                r: !0,
                q: !0,
                br: o.readInt32,
                pbr: o.readPackedInt32,
                bw: i.writeRepeatedInt32,
              },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = d(e.M())), e.sm_mbf;
    }
    toObject(r = !1) {
      return e.toObject(r, this);
    }
    static toObject(r, t) {
      return c(e.M(), r, t);
    }
    static fromObject(r) {
      return m(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new a.BinaryReader(r),
        s = new e();
      return e.deserializeBinaryFromReader(s, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return _(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new a.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      y(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new a.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CStoreQueryFilters_PredefinedFilter";
    }
  },
  h = class e extends n {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.tagids || p(e.M()),
        n.initialize(this, r, 0, -1, [1], null);
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
                br: o.readInt32,
                pbr: o.readPackedInt32,
                bw: i.writeRepeatedInt32,
              },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = d(e.M())), e.sm_mbf;
    }
    toObject(r = !1) {
      return e.toObject(r, this);
    }
    static toObject(r, t) {
      return c(e.M(), r, t);
    }
    static fromObject(r) {
      return m(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new a.BinaryReader(r),
        s = new e();
      return e.deserializeBinaryFromReader(s, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return _(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new a.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      y(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new a.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CStoreQueryFilters_TagFilter";
    }
  },
  T = class e extends n {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.only_free_items || p(e.M()),
        n.initialize(this, r, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              only_free_items: { n: 1, br: o.readBool, bw: i.writeBool },
              exclude_free_items: { n: 2, br: o.readBool, bw: i.writeBool },
              min_discount_percent: { n: 3, br: o.readInt32, bw: i.writeInt32 },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = d(e.M())), e.sm_mbf;
    }
    toObject(r = !1) {
      return e.toObject(r, this);
    }
    static toObject(r, t) {
      return c(e.M(), r, t);
    }
    static fromObject(r) {
      return m(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new a.BinaryReader(r),
        s = new e();
      return e.deserializeBinaryFromReader(s, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return _(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new a.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      y(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new a.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CStoreQueryFilters_PriceFilters";
    }
  },
  j = class e extends n {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.start || p(e.M()),
        n.initialize(this, r, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              start: { n: 1, d: 0, br: o.readInt32, bw: i.writeInt32 },
              count: { n: 2, d: 10, br: o.readInt32, bw: i.writeInt32 },
              sort: { n: 10, d: 0, br: o.readEnum, bw: i.writeEnum },
              filters: { n: 20, c: v },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = d(e.M())), e.sm_mbf;
    }
    toObject(r = !1) {
      return e.toObject(r, this);
    }
    static toObject(r, t) {
      return c(e.M(), r, t);
    }
    static fromObject(r) {
      return m(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new a.BinaryReader(r),
        s = new e();
      return e.deserializeBinaryFromReader(s, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return _(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new a.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      y(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new a.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CStoreQueryParams";
    }
  },
  z = class e extends n {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.id || p(e.M()),
        n.initialize(this, r, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              id: { n: 1, c: B },
              score: { n: 2, br: o.readDouble, bw: i.writeDouble },
              spellcheck_generated_result: {
                n: 3,
                br: o.readBool,
                bw: i.writeBool,
              },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = d(e.M())), e.sm_mbf;
    }
    toObject(r = !1) {
      return e.toObject(r, this);
    }
    static toObject(r, t) {
      return c(e.M(), r, t);
    }
    static fromObject(r) {
      return m(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new a.BinaryReader(r),
        s = new e();
      return e.deserializeBinaryFromReader(s, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return _(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new a.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      y(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new a.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CStoreQueryPerResultMetadata";
    }
  },
  Q = class e extends n {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.total_matching_records || p(e.M()),
        n.initialize(this, r, 0, -1, [4, 5], null);
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
                br: o.readInt32,
                bw: i.writeInt32,
              },
              start: { n: 2, br: o.readInt32, bw: i.writeInt32 },
              count: { n: 3, br: o.readInt32, bw: i.writeInt32 },
              per_result_metadata: { n: 4, c: z, r: !0, q: !0 },
              spellcheck_suggestions: {
                n: 5,
                r: !0,
                q: !0,
                br: o.readString,
                bw: i.writeRepeatedString,
              },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = d(e.M())), e.sm_mbf;
    }
    toObject(r = !1) {
      return e.toObject(r, this);
    }
    static toObject(r, t) {
      return c(e.M(), r, t);
    }
    static fromObject(r) {
      return m(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new a.BinaryReader(r),
        s = new e();
      return e.deserializeBinaryFromReader(s, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return _(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new a.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      y(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new a.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CStoreQueryResultMetadata";
    }
  },
  G = class e extends n {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.query_name || p(e.M()),
        n.initialize(this, r, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              query_name: { n: 1, br: o.readString, bw: i.writeString },
              query: { n: 2, c: j },
              context: { n: 3, c: C },
              data_request: { n: 4, c: F },
              override_country_code: {
                n: 5,
                br: o.readString,
                bw: i.writeString,
              },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = d(e.M())), e.sm_mbf;
    }
    toObject(r = !1) {
      return e.toObject(r, this);
    }
    static toObject(r, t) {
      return c(e.M(), r, t);
    }
    static fromObject(r) {
      return m(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new a.BinaryReader(r),
        s = new e();
      return e.deserializeBinaryFromReader(s, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return _(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new a.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      y(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new a.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CStoreQuery_Query_Request";
    }
  },
  q = class e extends n {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.metadata || p(e.M()),
        n.initialize(this, r, 0, -1, [2, 3], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              metadata: { n: 1, c: Q },
              ids: { n: 2, c: B, r: !0, q: !0 },
              store_items: { n: 3, c: I, r: !0, q: !0 },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = d(e.M())), e.sm_mbf;
    }
    toObject(r = !1) {
      return e.toObject(r, this);
    }
    static toObject(r, t) {
      return c(e.M(), r, t);
    }
    static fromObject(r) {
      return m(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new a.BinaryReader(r),
        s = new e();
      return e.deserializeBinaryFromReader(s, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return _(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new a.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      y(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new a.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CStoreQuery_Query_Response";
    }
  },
  x = class e extends n {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.query_name || p(e.M()),
        n.initialize(this, r, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              query_name: { n: 1, br: o.readString, bw: i.writeString },
              context: { n: 2, c: C },
              search_term: { n: 3, br: o.readString, bw: i.writeString },
              max_results: { n: 4, br: o.readUint32, bw: i.writeUint32 },
              filters: { n: 5, c: v },
              data_request: { n: 6, c: F },
              use_spellcheck: { n: 7, br: o.readBool, bw: i.writeBool },
              search_tags: { n: 8, br: o.readBool, bw: i.writeBool },
              search_creators: { n: 9, br: o.readBool, bw: i.writeBool },
              prefilter_creators: { n: 10, br: o.readBool, bw: i.writeBool },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = d(e.M())), e.sm_mbf;
    }
    toObject(r = !1) {
      return e.toObject(r, this);
    }
    static toObject(r, t) {
      return c(e.M(), r, t);
    }
    static fromObject(r) {
      return m(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new a.BinaryReader(r),
        s = new e();
      return e.deserializeBinaryFromReader(s, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return _(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new a.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      y(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new a.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CStoreQuery_SearchSuggestions_Request";
    }
  },
  W = class e extends n {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.metadata || p(e.M()),
        n.initialize(this, r, 0, -1, [2, 3], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              metadata: { n: 1, c: Q },
              ids: { n: 2, c: B, r: !0, q: !0 },
              store_items: { n: 3, c: I, r: !0, q: !0 },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = d(e.M())), e.sm_mbf;
    }
    toObject(r = !1) {
      return e.toObject(r, this);
    }
    static toObject(r, t) {
      return c(e.M(), r, t);
    }
    static fromObject(r) {
      return m(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new a.BinaryReader(r),
        s = new e();
      return e.deserializeBinaryFromReader(s, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return _(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new a.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      y(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new a.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CStoreQuery_SearchSuggestions_Response";
    }
  },
  U = class e extends n {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.filters || p(e.M()),
        n.initialize(this, r, 0, -1, [6], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              filters: { n: 2, c: g },
              sections: { n: 6, c: O, r: !0, q: !0 },
              context: { n: 5, c: C },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = d(e.M())), e.sm_mbf;
    }
    toObject(r = !1) {
      return e.toObject(r, this);
    }
    static toObject(r, t) {
      return c(e.M(), r, t);
    }
    static fromObject(r) {
      return m(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new a.BinaryReader(r),
        s = new e();
      return e.deserializeBinaryFromReader(s, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return _(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new a.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      y(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new a.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CStoreQuery_GetItemsByUserRecommendedTags_Request";
    }
  },
  O = class e extends n {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.sort || p(e.M()),
        n.initialize(this, r, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              sort: { n: 1, d: 0, br: o.readEnum, bw: i.writeEnum },
              min_items: { n: 2, br: o.readUint32, bw: i.writeUint32 },
              randomize: { n: 3, br: o.readBool, bw: i.writeBool },
              include_packages: {
                n: 4,
                d: !1,
                br: o.readBool,
                bw: i.writeBool,
              },
              include_bundles: { n: 5, d: !1, br: o.readBool, bw: i.writeBool },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = d(e.M())), e.sm_mbf;
    }
    toObject(r = !1) {
      return e.toObject(r, this);
    }
    static toObject(r, t) {
      return c(e.M(), r, t);
    }
    static fromObject(r) {
      return m(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new a.BinaryReader(r),
        s = new e();
      return e.deserializeBinaryFromReader(s, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return _(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new a.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      y(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new a.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CStoreQuery_GetItemsByUserRecommendedTags_Request_Section";
    }
  },
  D = class e extends n {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.sections || p(e.M()),
        n.initialize(this, r, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: { sections: { n: 1, c: k, r: !0, q: !0 } },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = d(e.M())), e.sm_mbf;
    }
    toObject(r = !1) {
      return e.toObject(r, this);
    }
    static toObject(r, t) {
      return c(e.M(), r, t);
    }
    static fromObject(r) {
      return m(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new a.BinaryReader(r),
        s = new e();
      return e.deserializeBinaryFromReader(s, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return _(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new a.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      y(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new a.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CStoreQuery_GetItemsByUserRecommendedTags_Response";
    }
  },
  k = class e extends n {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.tagid || p(e.M()),
        n.initialize(this, r, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              tagid: { n: 1, br: o.readUint32, bw: i.writeUint32 },
              store_item_ids: { n: 2, c: B, r: !0, q: !0 },
              tag_name: { n: 3, br: o.readString, bw: i.writeString },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = d(e.M())), e.sm_mbf;
    }
    toObject(r = !1) {
      return e.toObject(r, this);
    }
    static toObject(r, t) {
      return c(e.M(), r, t);
    }
    static fromObject(r) {
      return m(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new a.BinaryReader(r),
        s = new e();
      return e.deserializeBinaryFromReader(s, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return _(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new a.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      y(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new a.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CStoreQuery_GetItemsByUserRecommendedTags_Response_Section";
    }
  },
  A = class e extends n {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.sort || p(e.M()),
        n.initialize(this, r, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              sort: { n: 1, d: 0, br: o.readEnum, bw: i.writeEnum },
              max_items: { n: 2, br: o.readUint32, bw: i.writeUint32 },
              randomize: { n: 3, br: o.readBool, bw: i.writeBool },
              include_packages: {
                n: 4,
                d: !1,
                br: o.readBool,
                bw: i.writeBool,
              },
              include_bundles: { n: 5, d: !1, br: o.readBool, bw: i.writeBool },
              filters: { n: 6, c: g },
              context: { n: 7, c: C },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = d(e.M())), e.sm_mbf;
    }
    toObject(r = !1) {
      return e.toObject(r, this);
    }
    static toObject(r, t) {
      return c(e.M(), r, t);
    }
    static fromObject(r) {
      return m(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new a.BinaryReader(r),
        s = new e();
      return e.deserializeBinaryFromReader(s, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return _(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new a.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      y(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new a.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CStoreQuery_GetItemByUserCombinedTagsPriority_Request";
    }
  },
  E = class e extends n {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.tagid || p(e.M()),
        n.initialize(this, r, 0, -1, [1, 2, 3], null);
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
                br: o.readUint32,
                pbr: o.readPackedUint32,
                bw: i.writeRepeatedUint32,
              },
              store_item_ids: { n: 2, c: B, r: !0, q: !0 },
              tag_name: {
                n: 3,
                r: !0,
                q: !0,
                br: o.readString,
                bw: i.writeRepeatedString,
              },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = d(e.M())), e.sm_mbf;
    }
    toObject(r = !1) {
      return e.toObject(r, this);
    }
    static toObject(r, t) {
      return c(e.M(), r, t);
    }
    static fromObject(r) {
      return m(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new a.BinaryReader(r),
        s = new e();
      return e.deserializeBinaryFromReader(s, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return _(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new a.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      y(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new a.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CStoreQuery_GetItemByUserCombinedTagsPriority_Response";
    }
  },
  le;
((u) => {
  function e(l, b) {
    return l.SendMsg("StoreQuery.Query#1", P(G, b), q, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  u.Query = e;
  function r(l, b) {
    return l.SendMsg("StoreQuery.SearchSuggestions#1", P(x, b), W, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  u.SearchSuggestions = r;
  function t(l, b) {
    return l.SendMsg("StoreQuery.GetItemsByUserRecommendedTags#1", P(U, b), D, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  u.GetItemsByUserRecommendedTags = t;
  function s(l, b) {
    return l.SendMsg(
      "StoreQuery.GetItemByUserCombinedTagsPriority#1",
      P(A, b),
      E,
      { bConstMethod: !0, ePrivilege: 1 },
    );
  }
  u.GetItemByUserCombinedTagsPriority = s;
})((le ||= {}));
var S = $(ee());
var R = S.Message,
  N = class e extends R {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.request || p(e.M()),
        R.initialize(this, r, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              request: { n: 1, c: re },
              include_unpublished: { n: 2, br: o.readBool, bw: i.writeBool },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = d(e.M())), e.sm_mbf;
    }
    toObject(r = !1) {
      return e.toObject(r, this);
    }
    static toObject(r, t) {
      return c(e.M(), r, t);
    }
    static fromObject(r) {
      return m(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new S.BinaryReader(r),
        s = new e();
      return e.deserializeBinaryFromReader(s, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return _(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new S.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      y(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new S.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CPartnerStoreBrowse_GetItems_Request";
    }
  },
  L = class e extends R {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.ids || p(e.M()),
        R.initialize(this, r, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: { ids: { n: 1, c: B, r: !0, q: !0 } },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = d(e.M())), e.sm_mbf;
    }
    toObject(r = !1) {
      return e.toObject(r, this);
    }
    static toObject(r, t) {
      return c(e.M(), r, t);
    }
    static fromObject(r) {
      return m(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new S.BinaryReader(r),
        s = new e();
      return e.deserializeBinaryFromReader(s, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return _(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new S.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      y(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new S.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CPartnerStoreBrowse_GetCountryRestrictions_Request";
    }
  },
  K = class e extends R {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.results || p(e.M()),
        R.initialize(this, r, 0, -1, [1, 2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              results: { n: 1, c: V, r: !0, q: !0 },
              no_info: { n: 2, c: B, r: !0, q: !0 },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = d(e.M())), e.sm_mbf;
    }
    toObject(r = !1) {
      return e.toObject(r, this);
    }
    static toObject(r, t) {
      return c(e.M(), r, t);
    }
    static fromObject(r) {
      return m(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new S.BinaryReader(r),
        s = new e();
      return e.deserializeBinaryFromReader(s, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return _(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new S.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      y(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new S.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CPartnerStoreBrowse_GetCountryRestrictions_Response";
    }
  },
  V = class e extends R {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.id || p(e.M()),
        R.initialize(this, r, 0, -1, [3, 4], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              id: { n: 1, c: B },
              no_restrictions: { n: 2, br: o.readBool, bw: i.writeBool },
              allowed_countries: {
                n: 3,
                r: !0,
                q: !0,
                br: o.readString,
                bw: i.writeRepeatedString,
              },
              restricted_countries: {
                n: 4,
                r: !0,
                q: !0,
                br: o.readString,
                bw: i.writeRepeatedString,
              },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = d(e.M())), e.sm_mbf;
    }
    toObject(r = !1) {
      return e.toObject(r, this);
    }
    static toObject(r, t) {
      return c(e.M(), r, t);
    }
    static fromObject(r) {
      return m(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new S.BinaryReader(r),
        s = new e();
      return e.deserializeBinaryFromReader(s, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return _(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new S.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      y(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new S.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CPartnerStoreBrowse_GetCountryRestrictions_Response_CCountryRestrictions";
    }
  },
  de;
((t) => {
  function e(s, u) {
    return s.SendMsg("PartnerStoreBrowse.GetItems#1", P(N, u), te, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  t.GetItems = e;
  function r(s, u) {
    return s.SendMsg(
      "PartnerStoreBrowse.GetCountryRestrictions#1",
      P(L, u),
      K,
      { bConstMethod: !0, ePrivilege: 1 },
    );
  }
  t.GetCountryRestrictions = r;
})((de ||= {}));
export { N as a, de as b, j as c, G as d, le as e, Re as f };

const CLSTAMP = 9406869;

import {
  A as B,
  B as ee,
  C as re,
  a as $,
  b as s,
  c as i,
  d,
  e as m,
  f as c,
  g as _,
  h as y,
  i as p,
  u as R,
  v as g,
  x as I,
  y as H,
  z as f,
} from "./chunk-QMBSICWB.js";
import { b as ae, d as Z } from "./chunk-G7GZWTND.js";
var Re = ae((Ue, oe) => {
  "use strict";
  var de = (function () {
      function e(t, o) {
        if (typeof t != "function")
          throw new TypeError(
            "DataLoader must be constructed with a function which accepts " +
              ("Array<key> and returns Promise<Array<value>>, but got: " +
                t +
                "."),
          );
        (this._batchLoadFn = t),
          (this._maxBatchSize = ye(o)),
          (this._batchScheduleFn = pe(o)),
          (this._cacheKeyFn = Se(o)),
          (this._cacheMap = be(o)),
          (this._batch = null),
          (this.name = Be(o));
      }
      var r = e.prototype;
      return (
        (r.load = function (o) {
          if (o == null)
            throw new TypeError(
              "The loader.load() function must be called with a value, " +
                ("but got: " + String(o) + "."),
            );
          var u = ce(this),
            l = this._cacheMap,
            b = this._cacheKeyFn(o);
          if (l) {
            var C = l.get(b);
            if (C) {
              var se = u.cacheHits || (u.cacheHits = []);
              return new Promise(function (w) {
                se.push(function () {
                  w(C);
                });
              });
            }
          }
          u.keys.push(o);
          var Y = new Promise(function (w, ie) {
            u.callbacks.push({ resolve: w, reject: ie });
          });
          return l && l.set(b, Y), Y;
        }),
        (r.loadMany = function (o) {
          if (!te(o))
            throw new TypeError(
              "The loader.loadMany() function must be called with Array<key> " +
                ("but got: " + o + "."),
            );
          for (var u = [], l = 0; l < o.length; l++)
            u.push(
              this.load(o[l]).catch(function (b) {
                return b;
              }),
            );
          return Promise.all(u);
        }),
        (r.clear = function (o) {
          var u = this._cacheMap;
          if (u) {
            var l = this._cacheKeyFn(o);
            u.delete(l);
          }
          return this;
        }),
        (r.clearAll = function () {
          var o = this._cacheMap;
          return o && o.clear(), this;
        }),
        (r.prime = function (o, u) {
          var l = this._cacheMap;
          if (l) {
            var b = this._cacheKeyFn(o);
            if (l.get(b) === void 0) {
              var C;
              u instanceof Error
                ? ((C = Promise.reject(u)), C.catch(function () {}))
                : (C = Promise.resolve(u)),
                l.set(b, C);
            }
          }
          return this;
        }),
        e
      );
    })(),
    me =
      typeof process == "object" && typeof process.nextTick == "function"
        ? function (e) {
            V || (V = Promise.resolve()),
              V.then(function () {
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
    V;
  function ce(e) {
    var r = e._batch;
    if (r !== null && !r.hasDispatched && r.keys.length < e._maxBatchSize)
      return r;
    var t = { hasDispatched: !1, keys: [], callbacks: [] };
    return (
      (e._batch = t),
      e._batchScheduleFn(function () {
        _e(e, t);
      }),
      t
    );
  }
  function _e(e, r) {
    if (((r.hasDispatched = !0), r.keys.length === 0)) {
      X(r);
      return;
    }
    var t;
    try {
      t = e._batchLoadFn(r.keys);
    } catch (o) {
      return J(
        e,
        r,
        new TypeError(
          "DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function " +
            ("errored synchronously: " + String(o) + "."),
        ),
      );
    }
    if (!t || typeof t.then != "function")
      return J(
        e,
        r,
        new TypeError(
          "DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did " +
            ("not return a Promise: " + String(t) + "."),
        ),
      );
    t.then(function (o) {
      if (!te(o))
        throw new TypeError(
          "DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did " +
            ("not return a Promise of an Array: " + String(o) + "."),
        );
      if (o.length !== r.keys.length)
        throw new TypeError(
          "DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array of the same length as the Array of keys." +
            (`

Keys:
` +
              String(r.keys)) +
            (`

Values:
` +
              String(o)),
        );
      X(r);
      for (var u = 0; u < r.callbacks.length; u++) {
        var l = o[u];
        l instanceof Error
          ? r.callbacks[u].reject(l)
          : r.callbacks[u].resolve(l);
      }
    }).catch(function (o) {
      J(e, r, o);
    });
  }
  function J(e, r, t) {
    X(r);
    for (var o = 0; o < r.keys.length; o++)
      e.clear(r.keys[o]), r.callbacks[o].reject(t);
  }
  function X(e) {
    if (e.cacheHits)
      for (var r = 0; r < e.cacheHits.length; r++) e.cacheHits[r]();
  }
  function ye(e) {
    var r = !e || e.batch !== !1;
    if (!r) return 1;
    var t = e && e.maxBatchSize;
    if (t === void 0) return 1 / 0;
    if (typeof t != "number" || t < 1)
      throw new TypeError("maxBatchSize must be a positive number: " + t);
    return t;
  }
  function pe(e) {
    var r = e && e.batchScheduleFn;
    if (r === void 0) return me;
    if (typeof r != "function")
      throw new TypeError("batchScheduleFn must be a function: " + r);
    return r;
  }
  function Se(e) {
    var r = e && e.cacheKeyFn;
    if (r === void 0)
      return function (t) {
        return t;
      };
    if (typeof r != "function")
      throw new TypeError("cacheKeyFn must be a function: " + r);
    return r;
  }
  function be(e) {
    var r = !e || e.cache !== !1;
    if (!r) return null;
    var t = e && e.cacheMap;
    if (t === void 0) return new Map();
    if (t !== null) {
      var o = ["get", "set", "delete", "clear"],
        u = o.filter(function (l) {
          return t && typeof t[l] != "function";
        });
      if (u.length !== 0)
        throw new TypeError("Custom cacheMap missing methods: " + u.join(", "));
    }
    return t;
  }
  function Be(e) {
    return e && e.name ? e.name : null;
  }
  function te(e) {
    return (
      typeof e == "object" &&
      e !== null &&
      typeof e.length == "number" &&
      (e.length === 0 ||
        (e.length > 0 && Object.prototype.hasOwnProperty.call(e, e.length - 1)))
    );
  }
  oe.exports = de;
});
var a = Z($());
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
              released_only: { n: 1, br: s.readBool, bw: i.writeBool },
              coming_soon_only: { n: 2, br: s.readBool, bw: i.writeBool },
              type_filters: { n: 3, c: M },
              exclude_from: {
                n: 4,
                r: !0,
                q: !0,
                br: s.readEnum,
                pbr: s.readPackedEnum,
                bw: i.writeRepeatedEnum,
              },
              tagids_must_match: { n: 10, c: F, r: !0, q: !0 },
              tagids_exclude: {
                n: 11,
                r: !0,
                q: !0,
                br: s.readInt32,
                pbr: s.readPackedInt32,
                bw: i.writeRepeatedInt32,
              },
              price_filters: { n: 12, c: h },
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
              store_page_filter: { n: 44, c: g },
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
        o = new e();
      return e.deserializeBinaryFromReader(o, t);
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
  M = class e extends n {
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
        o = new e();
      return e.deserializeBinaryFromReader(o, t);
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
  F = class e extends n {
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
        o = new e();
      return e.deserializeBinaryFromReader(o, t);
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
  h = class e extends n {
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
              only_free_items: { n: 1, br: s.readBool, bw: i.writeBool },
              exclude_free_items: { n: 2, br: s.readBool, bw: i.writeBool },
              min_discount_percent: { n: 3, br: s.readInt32, bw: i.writeInt32 },
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
        o = new e();
      return e.deserializeBinaryFromReader(o, t);
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
  T = class e extends n {
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
              start: { n: 1, d: 0, br: s.readInt32, bw: i.writeInt32 },
              count: { n: 2, d: 10, br: s.readInt32, bw: i.writeInt32 },
              sort: { n: 10, d: 0, br: s.readEnum, bw: i.writeEnum },
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
        o = new e();
      return e.deserializeBinaryFromReader(o, t);
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
  j = class e extends n {
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
        o = new e();
      return e.deserializeBinaryFromReader(o, t);
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
                br: s.readInt32,
                bw: i.writeInt32,
              },
              start: { n: 2, br: s.readInt32, bw: i.writeInt32 },
              count: { n: 3, br: s.readInt32, bw: i.writeInt32 },
              per_result_metadata: { n: 4, c: j, r: !0, q: !0 },
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
        o = new e();
      return e.deserializeBinaryFromReader(o, t);
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
  z = class e extends n {
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
              query_name: { n: 1, br: s.readString, bw: i.writeString },
              query: { n: 2, c: T },
              context: { n: 3, c: f },
              data_request: { n: 4, c: H },
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
        o = new e();
      return e.deserializeBinaryFromReader(o, t);
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
  G = class e extends n {
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
        o = new e();
      return e.deserializeBinaryFromReader(o, t);
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
  q = class e extends n {
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
              query_name: { n: 1, br: s.readString, bw: i.writeString },
              context: { n: 2, c: f },
              search_term: { n: 3, br: s.readString, bw: i.writeString },
              max_results: { n: 4, br: s.readUint32, bw: i.writeUint32 },
              filters: { n: 5, c: v },
              data_request: { n: 6, c: H },
              use_spellcheck: { n: 7, br: s.readBool, bw: i.writeBool },
              search_tags: { n: 8, br: s.readBool, bw: i.writeBool },
              search_creators: { n: 9, br: s.readBool, bw: i.writeBool },
              prefilter_creators: { n: 10, br: s.readBool, bw: i.writeBool },
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
        o = new e();
      return e.deserializeBinaryFromReader(o, t);
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
  x = class e extends n {
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
        o = new e();
      return e.deserializeBinaryFromReader(o, t);
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
  W = class e extends n {
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
              sections: { n: 6, c: U, r: !0, q: !0 },
              context: { n: 5, c: f },
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
        o = new e();
      return e.deserializeBinaryFromReader(o, t);
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
  U = class e extends n {
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
        o = new e();
      return e.deserializeBinaryFromReader(o, t);
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
  O = class e extends n {
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
            fields: { sections: { n: 1, c: D, r: !0, q: !0 } },
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
        o = new e();
      return e.deserializeBinaryFromReader(o, t);
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
  D = class e extends n {
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
              tagid: { n: 1, br: s.readUint32, bw: i.writeUint32 },
              store_item_ids: { n: 2, c: B, r: !0, q: !0 },
              tag_name: { n: 3, br: s.readString, bw: i.writeString },
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
        o = new e();
      return e.deserializeBinaryFromReader(o, t);
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
  k = class e extends n {
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
              filters: { n: 6, c: g },
              context: { n: 7, c: f },
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
        o = new e();
      return e.deserializeBinaryFromReader(o, t);
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
  A = class e extends n {
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
                br: s.readUint32,
                pbr: s.readPackedUint32,
                bw: i.writeRepeatedUint32,
              },
              store_item_ids: { n: 2, c: B, r: !0, q: !0 },
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
        o = new e();
      return e.deserializeBinaryFromReader(o, t);
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
  ue;
((u) => {
  function e(l, b) {
    return l.SendMsg("StoreQuery.Query#1", R(z, b), G, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  u.Query = e;
  function r(l, b) {
    return l.SendMsg("StoreQuery.SearchSuggestions#1", R(q, b), x, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  u.SearchSuggestions = r;
  function t(l, b) {
    return l.SendMsg("StoreQuery.GetItemsByUserRecommendedTags#1", R(W, b), O, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  u.GetItemsByUserRecommendedTags = t;
  function o(l, b) {
    return l.SendMsg(
      "StoreQuery.GetItemByUserCombinedTagsPriority#1",
      R(k, b),
      A,
      { bConstMethod: !0, ePrivilege: 1 },
    );
  }
  u.GetItemByUserCombinedTagsPriority = o;
})((ue ||= {}));
var S = Z($());
var P = S.Message,
  E = class e extends P {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.request || p(e.M()),
        P.initialize(this, r, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              request: { n: 1, c: ee },
              include_unpublished: { n: 2, br: s.readBool, bw: i.writeBool },
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
        o = new e();
      return e.deserializeBinaryFromReader(o, t);
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
  N = class e extends P {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.ids || p(e.M()),
        P.initialize(this, r, 0, -1, [1], null);
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
        o = new e();
      return e.deserializeBinaryFromReader(o, t);
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
  L = class e extends P {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.results || p(e.M()),
        P.initialize(this, r, 0, -1, [1, 2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              results: { n: 1, c: K, r: !0, q: !0 },
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
        o = new e();
      return e.deserializeBinaryFromReader(o, t);
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
  K = class e extends P {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.id || p(e.M()),
        P.initialize(this, r, 0, -1, [3, 4], null);
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
        o = new e();
      return e.deserializeBinaryFromReader(o, t);
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
  le;
((t) => {
  function e(o, u) {
    return o.SendMsg("PartnerStoreBrowse.GetItems#1", R(E, u), re, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  t.GetItems = e;
  function r(o, u) {
    return o.SendMsg(
      "PartnerStoreBrowse.GetCountryRestrictions#1",
      R(N, u),
      L,
      { bConstMethod: !0, ePrivilege: 1 },
    );
  }
  t.GetCountryRestrictions = r;
})((le ||= {}));
export { E as a, le as b, T as c, z as d, ue as e, Re as f };

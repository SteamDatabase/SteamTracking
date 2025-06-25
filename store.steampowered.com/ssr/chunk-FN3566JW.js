import {
  a as f,
  f as Q,
  g as w,
  h as R,
  i as B,
  j as $,
  k as ee,
} from "./chunk-ZBSYNEYA.js";
import {
  a as Z,
  b as i,
  c as a,
  d as l,
  e as d,
  f as m,
  g as c,
  h as _,
  i as y,
  u as P,
} from "./chunk-ZQLK5PUU.js";
import { c as ie, e as Y } from "./chunk-Q5UTZZAQ.js";
var Pe = ie((We, te) => {
  "use strict";
  var le = (function () {
      function e(t, s) {
        if (typeof t != "function")
          throw new TypeError(
            "DataLoader must be constructed with a function which accepts " +
              ("Array<key> and returns Promise<Array<value>>, but got: " +
                t +
                "."),
          );
        (this._batchLoadFn = t),
          (this._maxBatchSize = _e(s)),
          (this._batchScheduleFn = ye(s)),
          (this._cacheKeyFn = pe(s)),
          (this._cacheMap = Se(s)),
          (this._batch = null),
          (this.name = Be(s));
      }
      var r = e.prototype;
      return (
        (r.load = function (s) {
          if (s == null)
            throw new TypeError(
              "The loader.load() function must be called with a value, " +
                ("but got: " + String(s) + "."),
            );
          var n = me(this),
            u = this._cacheMap,
            S = this._cacheKeyFn(s);
          if (u) {
            var b = u.get(S);
            if (b) {
              var oe = n.cacheHits || (n.cacheHits = []);
              return new Promise(function (v) {
                oe.push(function () {
                  v(b);
                });
              });
            }
          }
          n.keys.push(s);
          var X = new Promise(function (v, se) {
            n.callbacks.push({ resolve: v, reject: se });
          });
          return u && u.set(S, X), X;
        }),
        (r.loadMany = function (s) {
          if (!re(s))
            throw new TypeError(
              "The loader.loadMany() function must be called with Array<key> " +
                ("but got: " + s + "."),
            );
          for (var n = [], u = 0; u < s.length; u++)
            n.push(
              this.load(s[u]).catch(function (S) {
                return S;
              }),
            );
          return Promise.all(n);
        }),
        (r.clear = function (s) {
          var n = this._cacheMap;
          if (n) {
            var u = this._cacheKeyFn(s);
            n.delete(u);
          }
          return this;
        }),
        (r.clearAll = function () {
          var s = this._cacheMap;
          return s && s.clear(), this;
        }),
        (r.prime = function (s, n) {
          var u = this._cacheMap;
          if (u) {
            var S = this._cacheKeyFn(s);
            if (u.get(S) === void 0) {
              var b;
              n instanceof Error
                ? ((b = Promise.reject(n)), b.catch(function () {}))
                : (b = Promise.resolve(n)),
                u.set(S, b);
            }
          }
          return this;
        }),
        e
      );
    })(),
    de =
      typeof process == "object" && typeof process.nextTick == "function"
        ? function (e) {
            K || (K = Promise.resolve()),
              K.then(function () {
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
    K;
  function me(e) {
    var r = e._batch;
    if (r !== null && !r.hasDispatched && r.keys.length < e._maxBatchSize)
      return r;
    var t = { hasDispatched: !1, keys: [], callbacks: [] };
    return (
      (e._batch = t),
      e._batchScheduleFn(function () {
        ce(e, t);
      }),
      t
    );
  }
  function ce(e, r) {
    if (((r.hasDispatched = !0), r.keys.length === 0)) {
      J(r);
      return;
    }
    var t;
    try {
      t = e._batchLoadFn(r.keys);
    } catch (s) {
      return V(
        e,
        r,
        new TypeError(
          "DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function " +
            ("errored synchronously: " + String(s) + "."),
        ),
      );
    }
    if (!t || typeof t.then != "function")
      return V(
        e,
        r,
        new TypeError(
          "DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did " +
            ("not return a Promise: " + String(t) + "."),
        ),
      );
    t.then(function (s) {
      if (!re(s))
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
      J(r);
      for (var n = 0; n < r.callbacks.length; n++) {
        var u = s[n];
        u instanceof Error
          ? r.callbacks[n].reject(u)
          : r.callbacks[n].resolve(u);
      }
    }).catch(function (s) {
      V(e, r, s);
    });
  }
  function V(e, r, t) {
    J(r);
    for (var s = 0; s < r.keys.length; s++)
      e.clear(r.keys[s]), r.callbacks[s].reject(t);
  }
  function J(e) {
    if (e.cacheHits)
      for (var r = 0; r < e.cacheHits.length; r++) e.cacheHits[r]();
  }
  function _e(e) {
    var r = !e || e.batch !== !1;
    if (!r) return 1;
    var t = e && e.maxBatchSize;
    if (t === void 0) return 1 / 0;
    if (typeof t != "number" || t < 1)
      throw new TypeError("maxBatchSize must be a positive number: " + t);
    return t;
  }
  function ye(e) {
    var r = e && e.batchScheduleFn;
    if (r === void 0) return de;
    if (typeof r != "function")
      throw new TypeError("batchScheduleFn must be a function: " + r);
    return r;
  }
  function pe(e) {
    var r = e && e.cacheKeyFn;
    if (r === void 0)
      return function (t) {
        return t;
      };
    if (typeof r != "function")
      throw new TypeError("cacheKeyFn must be a function: " + r);
    return r;
  }
  function Se(e) {
    var r = !e || e.cache !== !1;
    if (!r) return null;
    var t = e && e.cacheMap;
    if (t === void 0) return new Map();
    if (t !== null) {
      var s = ["get", "set", "delete", "clear"],
        n = s.filter(function (u) {
          return t && typeof t[u] != "function";
        });
      if (n.length !== 0)
        throw new TypeError("Custom cacheMap missing methods: " + n.join(", "));
    }
    return t;
  }
  function Be(e) {
    return e && e.name ? e.name : null;
  }
  function re(e) {
    return (
      typeof e == "object" &&
      e !== null &&
      typeof e.length == "number" &&
      (e.length === 0 ||
        (e.length > 0 && Object.prototype.hasOwnProperty.call(e, e.length - 1)))
    );
  }
  te.exports = le;
});
var o = Y(Z());
var C = class e extends o.Message {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.released_only || y(e.M()),
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
              released_only: { n: 1, br: i.readBool, bw: a.writeBool },
              coming_soon_only: { n: 2, br: i.readBool, bw: a.writeBool },
              type_filters: { n: 3, c: I },
              exclude_from: {
                n: 4,
                r: !0,
                q: !0,
                br: i.readEnum,
                pbr: i.readPackedEnum,
                bw: a.writeRepeatedEnum,
              },
              predefined_filter: { n: 5, c: F },
              tagids_must_match: { n: 10, c: H, r: !0, q: !0 },
              tagids_exclude: {
                n: 11,
                r: !0,
                q: !0,
                br: i.readInt32,
                pbr: i.readPackedInt32,
                bw: a.writeRepeatedInt32,
              },
              price_filters: { n: 12, c: M },
              content_descriptors_must_match: {
                n: 15,
                r: !0,
                q: !0,
                br: i.readEnum,
                pbr: i.readPackedEnum,
                bw: a.writeRepeatedEnum,
              },
              content_descriptors_excluded: {
                n: 16,
                r: !0,
                q: !0,
                br: i.readEnum,
                pbr: i.readPackedEnum,
                bw: a.writeRepeatedEnum,
              },
              regional_top_n_sellers: {
                n: 40,
                br: i.readInt32,
                bw: a.writeInt32,
              },
              global_top_n_sellers: {
                n: 41,
                br: i.readInt32,
                bw: a.writeInt32,
              },
              regional_long_term_top_n_sellers: {
                n: 42,
                br: i.readInt32,
                bw: a.writeInt32,
              },
              global_long_term_top_n_sellers: {
                n: 43,
                br: i.readInt32,
                bw: a.writeInt32,
              },
              store_page_filter: { n: 44, c: f },
              parent_appids: {
                n: 45,
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
      return e.sm_mbf || (e.sm_mbf = l(e.M())), e.sm_mbf;
    }
    toObject(r = !1) {
      return e.toObject(r, this);
    }
    static toObject(r, t) {
      return m(e.M(), r, t);
    }
    static fromObject(r) {
      return d(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new o.default.BinaryReader(r),
        s = new e();
      return e.deserializeBinaryFromReader(s, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return c(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new o.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      _(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new o.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CStoreQueryFilters";
    }
  },
  I = class e extends o.Message {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.include_apps || y(e.M()),
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
              include_apps: { n: 1, br: i.readBool, bw: a.writeBool },
              include_packages: { n: 2, br: i.readBool, bw: a.writeBool },
              include_bundles: { n: 3, br: i.readBool, bw: a.writeBool },
              include_games: { n: 10, br: i.readBool, bw: a.writeBool },
              include_demos: { n: 11, br: i.readBool, bw: a.writeBool },
              include_mods: { n: 12, br: i.readBool, bw: a.writeBool },
              include_dlc: { n: 13, br: i.readBool, bw: a.writeBool },
              include_software: { n: 14, br: i.readBool, bw: a.writeBool },
              include_video: { n: 15, br: i.readBool, bw: a.writeBool },
              include_hardware: { n: 16, br: i.readBool, bw: a.writeBool },
              include_series: { n: 17, br: i.readBool, bw: a.writeBool },
              include_music: { n: 18, br: i.readBool, bw: a.writeBool },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = l(e.M())), e.sm_mbf;
    }
    toObject(r = !1) {
      return e.toObject(r, this);
    }
    static toObject(r, t) {
      return m(e.M(), r, t);
    }
    static fromObject(r) {
      return d(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new o.default.BinaryReader(r),
        s = new e();
      return e.deserializeBinaryFromReader(s, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return c(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new o.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      _(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new o.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CStoreQueryFilters_TypeFilters";
    }
  },
  F = class e extends o.Message {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.filter_type || y(e.M()),
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
              filter_type: { n: 1, br: i.readEnum, bw: a.writeEnum },
              language_preferences: {
                n: 2,
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
      return e.sm_mbf || (e.sm_mbf = l(e.M())), e.sm_mbf;
    }
    toObject(r = !1) {
      return e.toObject(r, this);
    }
    static toObject(r, t) {
      return m(e.M(), r, t);
    }
    static fromObject(r) {
      return d(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new o.default.BinaryReader(r),
        s = new e();
      return e.deserializeBinaryFromReader(s, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return c(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new o.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      _(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new o.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CStoreQueryFilters_PredefinedFilter";
    }
  },
  H = class e extends o.Message {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.tagids || y(e.M()),
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
      return e.sm_mbf || (e.sm_mbf = l(e.M())), e.sm_mbf;
    }
    toObject(r = !1) {
      return e.toObject(r, this);
    }
    static toObject(r, t) {
      return m(e.M(), r, t);
    }
    static fromObject(r) {
      return d(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new o.default.BinaryReader(r),
        s = new e();
      return e.deserializeBinaryFromReader(s, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return c(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new o.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      _(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new o.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CStoreQueryFilters_TagFilter";
    }
  },
  M = class e extends o.Message {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.only_free_items || y(e.M()),
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
              only_free_items: { n: 1, br: i.readBool, bw: a.writeBool },
              exclude_free_items: { n: 2, br: i.readBool, bw: a.writeBool },
              min_discount_percent: { n: 3, br: i.readInt32, bw: a.writeInt32 },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = l(e.M())), e.sm_mbf;
    }
    toObject(r = !1) {
      return e.toObject(r, this);
    }
    static toObject(r, t) {
      return m(e.M(), r, t);
    }
    static fromObject(r) {
      return d(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new o.default.BinaryReader(r),
        s = new e();
      return e.deserializeBinaryFromReader(s, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return c(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new o.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      _(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new o.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CStoreQueryFilters_PriceFilters";
    }
  },
  h = class e extends o.Message {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.start || y(e.M()),
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
              start: { n: 1, d: 0, br: i.readInt32, bw: a.writeInt32 },
              count: { n: 2, d: 10, br: i.readInt32, bw: a.writeInt32 },
              sort: { n: 10, d: 0, br: i.readEnum, bw: a.writeEnum },
              filters: { n: 20, c: C },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = l(e.M())), e.sm_mbf;
    }
    toObject(r = !1) {
      return e.toObject(r, this);
    }
    static toObject(r, t) {
      return m(e.M(), r, t);
    }
    static fromObject(r) {
      return d(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new o.default.BinaryReader(r),
        s = new e();
      return e.deserializeBinaryFromReader(s, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return c(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new o.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      _(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new o.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CStoreQueryParams";
    }
  },
  T = class e extends o.Message {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.id || y(e.M()),
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
              id: { n: 1, c: B },
              score: { n: 2, br: i.readDouble, bw: a.writeDouble },
              spellcheck_generated_result: {
                n: 3,
                br: i.readBool,
                bw: a.writeBool,
              },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = l(e.M())), e.sm_mbf;
    }
    toObject(r = !1) {
      return e.toObject(r, this);
    }
    static toObject(r, t) {
      return m(e.M(), r, t);
    }
    static fromObject(r) {
      return d(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new o.default.BinaryReader(r),
        s = new e();
      return e.deserializeBinaryFromReader(s, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return c(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new o.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      _(e.M(), r, t);
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
        e.prototype.total_matching_records || y(e.M()),
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
                br: i.readInt32,
                bw: a.writeInt32,
              },
              start: { n: 2, br: i.readInt32, bw: a.writeInt32 },
              count: { n: 3, br: i.readInt32, bw: a.writeInt32 },
              per_result_metadata: { n: 4, c: T, r: !0, q: !0 },
              spellcheck_suggestions: {
                n: 5,
                r: !0,
                q: !0,
                br: i.readString,
                bw: a.writeRepeatedString,
              },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = l(e.M())), e.sm_mbf;
    }
    toObject(r = !1) {
      return e.toObject(r, this);
    }
    static toObject(r, t) {
      return m(e.M(), r, t);
    }
    static fromObject(r) {
      return d(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new o.default.BinaryReader(r),
        s = new e();
      return e.deserializeBinaryFromReader(s, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return c(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new o.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      _(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new o.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CStoreQueryResultMetadata";
    }
  },
  z = class e extends o.Message {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.query_name || y(e.M()),
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
              query_name: { n: 1, br: i.readString, bw: a.writeString },
              query: { n: 2, c: h },
              context: { n: 3, c: R },
              data_request: { n: 4, c: w },
              override_country_code: {
                n: 5,
                br: i.readString,
                bw: a.writeString,
              },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = l(e.M())), e.sm_mbf;
    }
    toObject(r = !1) {
      return e.toObject(r, this);
    }
    static toObject(r, t) {
      return m(e.M(), r, t);
    }
    static fromObject(r) {
      return d(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new o.default.BinaryReader(r),
        s = new e();
      return e.deserializeBinaryFromReader(s, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return c(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new o.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      _(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new o.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CStoreQuery_Query_Request";
    }
  },
  G = class e extends o.Message {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.metadata || y(e.M()),
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
              ids: { n: 2, c: B, r: !0, q: !0 },
              store_items: { n: 3, c: Q, r: !0, q: !0 },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = l(e.M())), e.sm_mbf;
    }
    toObject(r = !1) {
      return e.toObject(r, this);
    }
    static toObject(r, t) {
      return m(e.M(), r, t);
    }
    static fromObject(r) {
      return d(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new o.default.BinaryReader(r),
        s = new e();
      return e.deserializeBinaryFromReader(s, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return c(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new o.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      _(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new o.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CStoreQuery_Query_Response";
    }
  },
  j = class e extends o.Message {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.query_name || y(e.M()),
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
              query_name: { n: 1, br: i.readString, bw: a.writeString },
              context: { n: 2, c: R },
              search_term: { n: 3, br: i.readString, bw: a.writeString },
              max_results: { n: 4, br: i.readUint32, bw: a.writeUint32 },
              filters: { n: 5, c: C },
              data_request: { n: 6, c: w },
              use_spellcheck: { n: 7, br: i.readBool, bw: a.writeBool },
              search_tags: { n: 8, br: i.readBool, bw: a.writeBool },
              search_creators: { n: 9, br: i.readBool, bw: a.writeBool },
              prefilter_creators: { n: 10, br: i.readBool, bw: a.writeBool },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = l(e.M())), e.sm_mbf;
    }
    toObject(r = !1) {
      return e.toObject(r, this);
    }
    static toObject(r, t) {
      return m(e.M(), r, t);
    }
    static fromObject(r) {
      return d(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new o.default.BinaryReader(r),
        s = new e();
      return e.deserializeBinaryFromReader(s, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return c(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new o.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      _(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new o.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CStoreQuery_SearchSuggestions_Request";
    }
  },
  q = class e extends o.Message {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.metadata || y(e.M()),
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
              ids: { n: 2, c: B, r: !0, q: !0 },
              store_items: { n: 3, c: Q, r: !0, q: !0 },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = l(e.M())), e.sm_mbf;
    }
    toObject(r = !1) {
      return e.toObject(r, this);
    }
    static toObject(r, t) {
      return m(e.M(), r, t);
    }
    static fromObject(r) {
      return d(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new o.default.BinaryReader(r),
        s = new e();
      return e.deserializeBinaryFromReader(s, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return c(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new o.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      _(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new o.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CStoreQuery_SearchSuggestions_Response";
    }
  },
  x = class e extends o.Message {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.filters || y(e.M()),
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
              filters: { n: 2, c: f },
              sections: { n: 6, c: W, r: !0, q: !0 },
              context: { n: 5, c: R },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = l(e.M())), e.sm_mbf;
    }
    toObject(r = !1) {
      return e.toObject(r, this);
    }
    static toObject(r, t) {
      return m(e.M(), r, t);
    }
    static fromObject(r) {
      return d(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new o.default.BinaryReader(r),
        s = new e();
      return e.deserializeBinaryFromReader(s, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return c(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new o.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      _(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new o.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CStoreQuery_GetItemsByUserRecommendedTags_Request";
    }
  },
  W = class e extends o.Message {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.sort || y(e.M()),
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
              sort: { n: 1, d: 0, br: i.readEnum, bw: a.writeEnum },
              min_items: { n: 2, br: i.readUint32, bw: a.writeUint32 },
              randomize: { n: 3, br: i.readBool, bw: a.writeBool },
              include_packages: {
                n: 4,
                d: !1,
                br: i.readBool,
                bw: a.writeBool,
              },
              include_bundles: { n: 5, d: !1, br: i.readBool, bw: a.writeBool },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = l(e.M())), e.sm_mbf;
    }
    toObject(r = !1) {
      return e.toObject(r, this);
    }
    static toObject(r, t) {
      return m(e.M(), r, t);
    }
    static fromObject(r) {
      return d(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new o.default.BinaryReader(r),
        s = new e();
      return e.deserializeBinaryFromReader(s, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return c(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new o.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      _(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new o.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CStoreQuery_GetItemsByUserRecommendedTags_Request_Section";
    }
  },
  U = class e extends o.Message {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.sections || y(e.M()),
        o.Message.initialize(this, r, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: { sections: { n: 1, c: O, r: !0, q: !0 } },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = l(e.M())), e.sm_mbf;
    }
    toObject(r = !1) {
      return e.toObject(r, this);
    }
    static toObject(r, t) {
      return m(e.M(), r, t);
    }
    static fromObject(r) {
      return d(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new o.default.BinaryReader(r),
        s = new e();
      return e.deserializeBinaryFromReader(s, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return c(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new o.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      _(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new o.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CStoreQuery_GetItemsByUserRecommendedTags_Response";
    }
  },
  O = class e extends o.Message {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.tagid || y(e.M()),
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
              tagid: { n: 1, br: i.readUint32, bw: a.writeUint32 },
              store_item_ids: { n: 2, c: B, r: !0, q: !0 },
              tag_name: { n: 3, br: i.readString, bw: a.writeString },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = l(e.M())), e.sm_mbf;
    }
    toObject(r = !1) {
      return e.toObject(r, this);
    }
    static toObject(r, t) {
      return m(e.M(), r, t);
    }
    static fromObject(r) {
      return d(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new o.default.BinaryReader(r),
        s = new e();
      return e.deserializeBinaryFromReader(s, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return c(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new o.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      _(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new o.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CStoreQuery_GetItemsByUserRecommendedTags_Response_Section";
    }
  },
  D = class e extends o.Message {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.sort || y(e.M()),
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
              sort: { n: 1, d: 0, br: i.readEnum, bw: a.writeEnum },
              max_items: { n: 2, br: i.readUint32, bw: a.writeUint32 },
              randomize: { n: 3, br: i.readBool, bw: a.writeBool },
              include_packages: {
                n: 4,
                d: !1,
                br: i.readBool,
                bw: a.writeBool,
              },
              include_bundles: { n: 5, d: !1, br: i.readBool, bw: a.writeBool },
              filters: { n: 6, c: f },
              context: { n: 7, c: R },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = l(e.M())), e.sm_mbf;
    }
    toObject(r = !1) {
      return e.toObject(r, this);
    }
    static toObject(r, t) {
      return m(e.M(), r, t);
    }
    static fromObject(r) {
      return d(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new o.default.BinaryReader(r),
        s = new e();
      return e.deserializeBinaryFromReader(s, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return c(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new o.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      _(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new o.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CStoreQuery_GetItemByUserCombinedTagsPriority_Request";
    }
  },
  k = class e extends o.Message {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.tagid || y(e.M()),
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
                br: i.readUint32,
                pbr: i.readPackedUint32,
                bw: a.writeRepeatedUint32,
              },
              store_item_ids: { n: 2, c: B, r: !0, q: !0 },
              tag_name: {
                n: 3,
                r: !0,
                q: !0,
                br: i.readString,
                bw: a.writeRepeatedString,
              },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = l(e.M())), e.sm_mbf;
    }
    toObject(r = !1) {
      return e.toObject(r, this);
    }
    static toObject(r, t) {
      return m(e.M(), r, t);
    }
    static fromObject(r) {
      return d(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new o.default.BinaryReader(r),
        s = new e();
      return e.deserializeBinaryFromReader(s, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return c(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new o.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      _(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new o.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CStoreQuery_GetItemByUserCombinedTagsPriority_Response";
    }
  },
  ne;
((n) => {
  function e(u, S) {
    return u.SendMsg("StoreQuery.Query#1", P(z, S), G, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
    });
  }
  n.Query = e;
  function r(u, S) {
    return u.SendMsg("StoreQuery.SearchSuggestions#1", P(j, S), q, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  n.SearchSuggestions = r;
  function t(u, S) {
    return u.SendMsg("StoreQuery.GetItemsByUserRecommendedTags#1", P(x, S), U, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  n.GetItemsByUserRecommendedTags = t;
  function s(u, S) {
    return u.SendMsg(
      "StoreQuery.GetItemByUserCombinedTagsPriority#1",
      P(D, S),
      k,
      { bConstMethod: !0, ePrivilege: 1 },
    );
  }
  n.GetItemByUserCombinedTagsPriority = s;
})((ne ||= {}));
var p = Y(Z());
var A = class e extends p.Message {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.request || y(e.M()),
        p.Message.initialize(this, r, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              request: { n: 1, c: $ },
              include_unpublished: { n: 2, br: i.readBool, bw: a.writeBool },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = l(e.M())), e.sm_mbf;
    }
    toObject(r = !1) {
      return e.toObject(r, this);
    }
    static toObject(r, t) {
      return m(e.M(), r, t);
    }
    static fromObject(r) {
      return d(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new p.default.BinaryReader(r),
        s = new e();
      return e.deserializeBinaryFromReader(s, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return c(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new p.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      _(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new p.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CPartnerStoreBrowse_GetItems_Request";
    }
  },
  E = class e extends p.Message {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.ids || y(e.M()),
        p.Message.initialize(this, r, 0, -1, [1], null);
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
      return e.sm_mbf || (e.sm_mbf = l(e.M())), e.sm_mbf;
    }
    toObject(r = !1) {
      return e.toObject(r, this);
    }
    static toObject(r, t) {
      return m(e.M(), r, t);
    }
    static fromObject(r) {
      return d(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new p.default.BinaryReader(r),
        s = new e();
      return e.deserializeBinaryFromReader(s, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return c(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new p.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      _(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new p.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CPartnerStoreBrowse_GetCountryRestrictions_Request";
    }
  },
  N = class e extends p.Message {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.results || y(e.M()),
        p.Message.initialize(this, r, 0, -1, [1, 2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        e.sm_m ||
          (e.sm_m = {
            proto: e,
            fields: {
              results: { n: 1, c: L, r: !0, q: !0 },
              no_info: { n: 2, c: B, r: !0, q: !0 },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = l(e.M())), e.sm_mbf;
    }
    toObject(r = !1) {
      return e.toObject(r, this);
    }
    static toObject(r, t) {
      return m(e.M(), r, t);
    }
    static fromObject(r) {
      return d(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new p.default.BinaryReader(r),
        s = new e();
      return e.deserializeBinaryFromReader(s, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return c(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new p.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      _(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new p.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CPartnerStoreBrowse_GetCountryRestrictions_Response";
    }
  },
  L = class e extends p.Message {
    static ImplementsStaticInterface() {}
    constructor(r = null) {
      super(),
        e.prototype.id || y(e.M()),
        p.Message.initialize(this, r, 0, -1, [3, 4], null);
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
              no_restrictions: { n: 2, br: i.readBool, bw: a.writeBool },
              allowed_countries: {
                n: 3,
                r: !0,
                q: !0,
                br: i.readString,
                bw: a.writeRepeatedString,
              },
              restricted_countries: {
                n: 4,
                r: !0,
                q: !0,
                br: i.readString,
                bw: a.writeRepeatedString,
              },
            },
          }),
        e.sm_m
      );
    }
    static MBF() {
      return e.sm_mbf || (e.sm_mbf = l(e.M())), e.sm_mbf;
    }
    toObject(r = !1) {
      return e.toObject(r, this);
    }
    static toObject(r, t) {
      return m(e.M(), r, t);
    }
    static fromObject(r) {
      return d(e.M(), r);
    }
    static deserializeBinary(r) {
      let t = new p.default.BinaryReader(r),
        s = new e();
      return e.deserializeBinaryFromReader(s, t);
    }
    static deserializeBinaryFromReader(r, t) {
      return c(e.MBF(), r, t);
    }
    serializeBinary() {
      var r = new p.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
    }
    static serializeBinaryToWriter(r, t) {
      _(e.M(), r, t);
    }
    serializeBase64String() {
      var r = new p.default.BinaryWriter();
      return e.serializeBinaryToWriter(this, r), r.getResultBase64String();
    }
    getClassName() {
      return "CPartnerStoreBrowse_GetCountryRestrictions_Response_CCountryRestrictions";
    }
  },
  ue;
((t) => {
  function e(s, n) {
    return s.SendMsg("PartnerStoreBrowse.GetItems#1", P(A, n), ee, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  t.GetItems = e;
  function r(s, n) {
    return s.SendMsg(
      "PartnerStoreBrowse.GetCountryRestrictions#1",
      P(E, n),
      N,
      { bConstMethod: !0, ePrivilege: 1 },
    );
  }
  t.GetCountryRestrictions = r;
})((ue ||= {}));
export { A as a, ue as b, C as c, h as d, z as e, j as f, ne as g, Pe as h };

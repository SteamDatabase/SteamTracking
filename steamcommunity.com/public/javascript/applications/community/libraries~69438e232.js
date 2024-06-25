/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [7978],
  {
    73799: (e) => {
      var t,
        r = (function () {
          function e(e, t) {
            if ("function" != typeof e)
              throw new TypeError(
                "DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but got: " +
                  e +
                  ".",
              );
            (this._batchLoadFn = e),
              (this._maxBatchSize = (function (e) {
                var t = !e || !1 !== e.batch;
                if (!t) return 1;
                var r = e && e.maxBatchSize;
                if (void 0 === r) return 1 / 0;
                if ("number" != typeof r || r < 1)
                  throw new TypeError(
                    "maxBatchSize must be a positive number: " + r,
                  );
                return r;
              })(t)),
              (this._batchScheduleFn = (function (e) {
                var t = e && e.batchScheduleFn;
                if (void 0 === t) return i;
                if ("function" != typeof t)
                  throw new TypeError(
                    "batchScheduleFn must be a function: " + t,
                  );
                return t;
              })(t)),
              (this._cacheKeyFn = (function (e) {
                var t = e && e.cacheKeyFn;
                if (void 0 === t)
                  return function (e) {
                    return e;
                  };
                if ("function" != typeof t)
                  throw new TypeError("cacheKeyFn must be a function: " + t);
                return t;
              })(t)),
              (this._cacheMap = (function (e) {
                var t = !e || !1 !== e.cache;
                if (!t) return null;
                var r = e && e.cacheMap;
                if (void 0 === r) return new Map();
                if (null !== r) {
                  var i = ["get", "set", "delete", "clear"].filter(
                    function (e) {
                      return r && "function" != typeof r[e];
                    },
                  );
                  if (0 !== i.length)
                    throw new TypeError(
                      "Custom cacheMap missing methods: " + i.join(", "),
                    );
                }
                return r;
              })(t)),
              (this._batch = null),
              (this.name = (function (e) {
                if (e && e.name) return e.name;
                return null;
              })(t));
          }
          var t = e.prototype;
          return (
            (t.load = function (e) {
              if (null == e)
                throw new TypeError(
                  "The loader.load() function must be called with a value, but got: " +
                    String(e) +
                    ".",
                );
              var t = (function (e) {
                  var t = e._batch;
                  if (
                    null !== t &&
                    !t.hasDispatched &&
                    t.keys.length < e._maxBatchSize
                  )
                    return t;
                  var r = { hasDispatched: !1, keys: [], callbacks: [] };
                  return (
                    (e._batch = r),
                    e._batchScheduleFn(function () {
                      !(function (e, t) {
                        if (((t.hasDispatched = !0), 0 === t.keys.length))
                          return void n(t);
                        var r;
                        try {
                          r = e._batchLoadFn(t.keys);
                        } catch (r) {
                          return a(
                            e,
                            t,
                            new TypeError(
                              "DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function errored synchronously: " +
                                String(r) +
                                ".",
                            ),
                          );
                        }
                        if (!r || "function" != typeof r.then)
                          return a(
                            e,
                            t,
                            new TypeError(
                              "DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise: " +
                                String(r) +
                                ".",
                            ),
                          );
                        r.then(function (e) {
                          if (!s(e))
                            throw new TypeError(
                              "DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array: " +
                                String(e) +
                                ".",
                            );
                          if (e.length !== t.keys.length)
                            throw new TypeError(
                              "DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array of the same length as the Array of keys.\n\nKeys:\n" +
                                String(t.keys) +
                                "\n\nValues:\n" +
                                String(e),
                            );
                          n(t);
                          for (var r = 0; r < t.callbacks.length; r++) {
                            var i = e[r];
                            i instanceof Error
                              ? t.callbacks[r].reject(i)
                              : t.callbacks[r].resolve(i);
                          }
                        }).catch(function (r) {
                          a(e, t, r);
                        });
                      })(e, r);
                    }),
                    r
                  );
                })(this),
                r = this._cacheMap,
                i = this._cacheKeyFn(e);
              if (r) {
                var c = r.get(i);
                if (c) {
                  var o = t.cacheHits || (t.cacheHits = []);
                  return new Promise(function (e) {
                    o.push(function () {
                      e(c);
                    });
                  });
                }
              }
              t.keys.push(e);
              var l = new Promise(function (e, r) {
                t.callbacks.push({ resolve: e, reject: r });
              });
              return r && r.set(i, l), l;
            }),
            (t.loadMany = function (e) {
              if (!s(e))
                throw new TypeError(
                  "The loader.loadMany() function must be called with Array<key> but got: " +
                    e +
                    ".",
                );
              for (var t = [], r = 0; r < e.length; r++)
                t.push(
                  this.load(e[r]).catch(function (e) {
                    return e;
                  }),
                );
              return Promise.all(t);
            }),
            (t.clear = function (e) {
              var t = this._cacheMap;
              if (t) {
                var r = this._cacheKeyFn(e);
                t.delete(r);
              }
              return this;
            }),
            (t.clearAll = function () {
              var e = this._cacheMap;
              return e && e.clear(), this;
            }),
            (t.prime = function (e, t) {
              var r = this._cacheMap;
              if (r) {
                var i,
                  a = this._cacheKeyFn(e);
                if (void 0 === r.get(a))
                  t instanceof Error
                    ? (i = Promise.reject(t)).catch(function () {})
                    : (i = Promise.resolve(t)),
                    r.set(a, i);
              }
              return this;
            }),
            e
          );
        })(),
        i =
          "object" == typeof process && "function" == typeof process.nextTick
            ? function (e) {
                t || (t = Promise.resolve()),
                  t.then(function () {
                    process.nextTick(e);
                  });
              }
            : "function" == typeof setImmediate
              ? function (e) {
                  setImmediate(e);
                }
              : function (e) {
                  setTimeout(e);
                };
      function a(e, t, r) {
        n(t);
        for (var i = 0; i < t.keys.length; i++)
          e.clear(t.keys[i]), t.callbacks[i].reject(r);
      }
      function n(e) {
        if (e.cacheHits)
          for (var t = 0; t < e.cacheHits.length; t++) e.cacheHits[t]();
      }
      function s(e) {
        return (
          "object" == typeof e &&
          null !== e &&
          "number" == typeof e.length &&
          (0 === e.length ||
            (e.length > 0 &&
              Object.prototype.hasOwnProperty.call(e, e.length - 1)))
        );
      }
      e.exports = r;
    },
    3172: (e, t, r) => {
      r.d(t, { Fi: () => z, qW: () => M });
      var i = r(10059),
        a = r(39087),
        n = r(79545);
      const s = i.Message;
      class c extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            c.prototype.bincremental || a.aR(c.M()),
            s.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
                fields: {
                  bincremental: { n: 1, br: a.FE.readBool, bw: a.Xc.writeBool },
                  friends: { n: 2, c: o, r: !0, q: !0 },
                  max_friend_count: {
                    n: 3,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  active_friend_count: {
                    n: 4,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  friends_limit_hit: {
                    n: 5,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                },
              }),
            c.sm_m
          );
        }
        static MBF() {
          return c.sm_mbf || (c.sm_mbf = a.Bh(c.M())), c.sm_mbf;
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(c.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(c.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new c();
          return c.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(c.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(c.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgClientFriendsList";
        }
      }
      class o extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            o.prototype.ulfriendid || a.aR(o.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            o.sm_m ||
              (o.sm_m = {
                proto: o,
                fields: {
                  ulfriendid: {
                    n: 1,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  efriendrelationship: {
                    n: 2,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            o.sm_m
          );
        }
        static MBF() {
          return o.sm_mbf || (o.sm_mbf = a.Bh(o.M())), o.sm_mbf;
        }
        toObject(e = !1) {
          return o.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(o.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(o.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new o();
          return o.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(o.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(o.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgClientFriendsList_Friend";
        }
      }
      const l = i.Message;
      class m extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            m.prototype.groupid || a.aR(m.M()),
            l.initialize(this, e, 0, -1, [3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = {
                proto: m,
                fields: {
                  groupid: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  name: { n: 2, br: a.FE.readString, bw: a.Xc.writeString },
                  accountid_members: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: a.FE.readUint32,
                    pbr: a.FE.readPackedUint32,
                    bw: a.Xc.writeRepeatedUint32,
                  },
                },
              }),
            m.sm_m
          );
        }
        static MBF() {
          return m.sm_mbf || (m.sm_mbf = a.Bh(m.M())), m.sm_mbf;
        }
        toObject(e = !1) {
          return m.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(m.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(m.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new m();
          return m.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(m.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(m.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsListCategory";
        }
      }
      class u extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), l.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new u();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new u();
          return u.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsList_GetCategories_Request";
        }
      }
      class d extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            d.prototype.categories || a.aR(d.M()),
            l.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: { categories: { n: 1, c: m, r: !0, q: !0 } },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = a.Bh(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(d.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(d.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new d();
          return d.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(d.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(d.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsList_GetCategories_Response";
        }
      }
      class B extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            B.prototype.accountid || a.aR(B.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: {
                  accountid: {
                    n: 1,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  clanid: { n: 2, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  chat_group_id: {
                    n: 3,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = a.Bh(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(B.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(B.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new B();
          return B.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(B.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(B.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsListFavoriteEntry";
        }
      }
      class b extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), l.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new b();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new b();
          return b.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsList_GetFavorites_Request";
        }
      }
      class y extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.favorites || a.aR(y.M()),
            l.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: { favorites: { n: 1, c: B, r: !0, q: !0 } },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = a.Bh(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(y.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new y();
          return y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(y.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsList_GetFavorites_Response";
        }
      }
      class _ extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _.prototype.favorites || a.aR(_.M()),
            l.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: { favorites: { n: 1, c: B, r: !0, q: !0 } },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = a.Bh(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(_.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(_.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new _();
          return _.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(_.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(_.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsList_SetFavorites_Request";
        }
      }
      class f extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), l.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new f();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new f();
          return f.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsList_SetFavorites_Response";
        }
      }
      class w extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.favorites || a.aR(w.M()),
            l.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: { favorites: { n: 1, c: B, r: !0, q: !0 } },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = a.Bh(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(w.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(w.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new w();
          return w.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(w.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(w.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsList_FavoritesChanged_Notification";
        }
      }
      class z extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), l.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new z();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new z();
          return z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsList_GetFriendsList_Request";
        }
      }
      class g extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            g.prototype.friendslist || a.aR(g.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = { proto: g, fields: { friendslist: { n: 1, c } } }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = a.Bh(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(g.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(g.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new g();
          return g.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(g.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(g.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsList_GetFriendsList_Response";
        }
      }
      var M, F;
      !(function (e) {
        (e.GetCategories = function (e, t) {
          return e.SendMsg("FriendsList.GetCategories#1", (0, n.MD)(u, t), d, {
            bConstMethod: !0,
            ePrivilege: 1,
          });
        }),
          (e.GetFriendsList = function (e, t) {
            return e.SendMsg(
              "FriendsList.GetFriendsList#1",
              (0, n.MD)(z, t),
              g,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetFavorites = function (e, t) {
            return e.SendMsg("FriendsList.GetFavorites#1", (0, n.MD)(b, t), y, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.SetFavorites = function (e, t) {
            return e.SendMsg("FriendsList.SetFavorites#1", (0, n.MD)(_, t), f, {
              ePrivilege: 1,
            });
          });
      })(M || (M = {})),
        (function (e) {
          e.FavoritesChangedHandler = {
            name: "FriendsListClient.FavoritesChanged#1",
            request: w,
          };
        })(F || (F = {}));
    },
    40354: (e, t, r) => {
      r.d(t, {
        Aw: () => z,
        Fz: () => F,
        R_: () => u,
        Zq: () => O,
        tQ: () => I,
      });
      var i = r(10059),
        a = r(39087),
        n = r(79545);
      const s = i.Message;
      class c extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            c.prototype.voteid || a.aR(c.M()),
            s.initialize(this, e, 0, -1, [5, 7], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
                fields: {
                  voteid: { n: 1, br: a.FE.readInt32, bw: a.Xc.writeInt32 },
                  active: { n: 2, br: a.FE.readBool, bw: a.Xc.writeBool },
                  start_time: {
                    n: 3,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  end_time: { n: 4, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  app_discounts: { n: 5, c: o, r: !0, q: !0 },
                  grouped_vote_options: {
                    n: 6,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  groups: { n: 7, c: l, r: !0, q: !0 },
                  internal_name: {
                    n: 8,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  localization: { n: 9, c: m },
                  reveal_time: {
                    n: 10,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  release_date_min: {
                    n: 11,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  winner_appid: {
                    n: 12,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  flag: { n: 13, br: a.FE.readEnum, bw: a.Xc.writeEnum },
                  release_date_max: {
                    n: 14,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  item_type: {
                    n: 15,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            c.sm_m
          );
        }
        static MBF() {
          return c.sm_mbf || (c.sm_mbf = a.Bh(c.M())), c.sm_mbf;
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(c.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(c.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new c();
          return c.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(c.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(c.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_VoteDefinition";
        }
      }
      class o extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            o.prototype.appid || a.aR(o.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            o.sm_m ||
              (o.sm_m = {
                proto: o,
                fields: {
                  appid: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  discount: { n: 2, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                },
              }),
            o.sm_m
          );
        }
        static MBF() {
          return o.sm_mbf || (o.sm_mbf = a.Bh(o.M())), o.sm_mbf;
        }
        toObject(e = !1) {
          return o.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(o.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(o.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new o();
          return o.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(o.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(o.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_VoteDefinition_AppDefinition";
        }
      }
      class l extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            l.prototype.groupid || a.aR(l.M()),
            s.initialize(this, e, 0, -1, [3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            l.sm_m ||
              (l.sm_m = {
                proto: l,
                fields: {
                  groupid: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  group_name: {
                    n: 2,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  app_discounts: { n: 3, c: o, r: !0, q: !0 },
                },
              }),
            l.sm_m
          );
        }
        static MBF() {
          return l.sm_mbf || (l.sm_mbf = a.Bh(l.M())), l.sm_mbf;
        }
        toObject(e = !1) {
          return l.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(l.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(l.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new l();
          return l.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(l.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(l.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_VoteDefinition_GroupDefinition";
        }
      }
      class m extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            m.prototype.title || a.aR(m.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = {
                proto: m,
                fields: {
                  title: { n: 1, br: a.FE.readString, bw: a.Xc.writeString },
                  title_linebreak: {
                    n: 2,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  title_award: {
                    n: 3,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  award_description: {
                    n: 4,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                },
              }),
            m.sm_m
          );
        }
        static MBF() {
          return m.sm_mbf || (m.sm_mbf = a.Bh(m.M())), m.sm_mbf;
        }
        toObject(e = !1) {
          return m.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(m.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(m.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new m();
          return m.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(m.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(m.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_VoteDefinition_Localization";
        }
      }
      class u extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            u.prototype.language || a.aR(u.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: {
                  language: { n: 1, br: a.FE.readString, bw: a.Xc.writeString },
                  sale_appid: {
                    n: 2,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = a.Bh(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(u.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(u.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new u();
          return u.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(u.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(u.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetVoteDefinitions_Request";
        }
      }
      class d extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            d.prototype.votes || a.aR(d.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: { votes: { n: 1, c, r: !0, q: !0 } },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = a.Bh(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(d.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(d.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new d();
          return d.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(d.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(d.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetVoteDefinitions_Response";
        }
      }
      class B extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            B.prototype.voteid || a.aR(B.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: {
                  voteid: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  appid: { n: 2, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  communityitemid: {
                    n: 3,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = a.Bh(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(B.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(B.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new B();
          return B.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(B.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(B.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "SteamAwardsUserVote";
        }
      }
      class b extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.sale_appid || a.aR(b.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  sale_appid: {
                    n: 1,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = a.Bh(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(b.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(b.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new b();
          return b.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(b.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(b.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetUserVotes_Request";
        }
      }
      class y extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.user_votes || a.aR(y.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: { user_votes: { n: 1, c: B, r: !0, q: !0 } },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = a.Bh(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(y.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new y();
          return y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(y.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetUserVotes_Response";
        }
      }
      class _ extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _.prototype.voteid || a.aR(_.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  voteid: { n: 1, br: a.FE.readInt32, bw: a.Xc.writeInt32 },
                  appid: { n: 2, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  sale_appid: {
                    n: 3,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = a.Bh(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(_.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(_.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new _();
          return _.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(_.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(_.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_SetVote_Request";
        }
      }
      class f extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.user_votes || a.aR(f.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: { user_votes: { n: 1, c: B, r: !0, q: !0 } },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = a.Bh(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(f.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(f.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new f();
          return f.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(f.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(f.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_SetVote_Response";
        }
      }
      class w extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.category_id || a.aR(w.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  category_id: {
                    n: 1,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  appid: { n: 2, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  last_updated: {
                    n: 3,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = a.Bh(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(w.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(w.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new w();
          return w.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(w.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(w.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamAwardsNomination";
        }
      }
      class z extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new z();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new z();
          return z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamAwards_GetUserNominations_Request";
        }
      }
      class g extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            g.prototype.nominations || a.aR(g.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: { nominations: { n: 1, c: w, r: !0, q: !0 } },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = a.Bh(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(g.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(g.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new g();
          return g.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(g.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(g.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamAwards_GetUserNominations_Response";
        }
      }
      class M extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.steamid || a.aR(M.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: {
                  steamid: {
                    n: 1,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  code: {
                    n: 2,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = a.Bh(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(M.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(M.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new M();
          return M.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(M.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(M.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamAwards_GetOtherUserNominations_Request";
        }
      }
      class F extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            F.prototype.category_id || a.aR(F.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
                fields: {
                  category_id: {
                    n: 1,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  nominated_id: {
                    n: 2,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  source: { n: 3, br: a.FE.readEnum, bw: a.Xc.writeEnum },
                },
              }),
            F.sm_m
          );
        }
        static MBF() {
          return F.sm_mbf || (F.sm_mbf = a.Bh(F.M())), F.sm_mbf;
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(F.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(F.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new F();
          return F.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(F.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(F.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamAwards_Nominate_Request";
        }
      }
      class p extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.nominations || a.aR(p.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: { nominations: { n: 1, c: w, r: !0, q: !0 } },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = a.Bh(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(p.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(p.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new p();
          return p.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(p.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(p.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamAwards_Nominate_Response";
        }
      }
      class h extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.category_id || a.aR(h.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  category_id: {
                    n: 1,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = a.Bh(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(h.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(h.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new h();
          return h.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamAwards_GetNominationRecommendations_Request";
        }
      }
      class R extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            R.prototype.played_app || a.aR(R.M()),
            s.initialize(this, e, 0, -1, [1, 2, 3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = {
                proto: R,
                fields: {
                  played_app: { n: 1, c: S, r: !0, q: !0 },
                  suggested_events: { n: 2, c: v, r: !0, q: !0 },
                  suggested_apps: { n: 3, c: W, r: !0, q: !0 },
                },
              }),
            R.sm_m
          );
        }
        static MBF() {
          return R.sm_mbf || (R.sm_mbf = a.Bh(R.M())), R.sm_mbf;
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(R.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(R.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new R();
          return R.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(R.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(R.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamAwards_GetNominationRecommendations_Response";
        }
      }
      class S extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            S.prototype.appid || a.aR(S.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: {
                  appid: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  playtime: { n: 2, br: a.FE.readInt32, bw: a.Xc.writeInt32 },
                },
              }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = a.Bh(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(S.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(S.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new S();
          return S.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(S.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(S.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamAwards_GetNominationRecommendations_Response_PlayedApps";
        }
      }
      class v extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            v.prototype.clanid || a.aR(v.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
                fields: {
                  clanid: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  event_gid: {
                    n: 2,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  appid: { n: 3, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                },
              }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = a.Bh(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(v.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(v.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new v();
          return v.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(v.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(v.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamAwards_GetNominationRecommendations_Response_SuggestedEvent";
        }
      }
      class W extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            W.prototype.appid || a.aR(W.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            W.sm_m ||
              (W.sm_m = {
                proto: W,
                fields: {
                  appid: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                },
              }),
            W.sm_m
          );
        }
        static MBF() {
          return W.sm_mbf || (W.sm_mbf = a.Bh(W.M())), W.sm_mbf;
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(W.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(W.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new W();
          return W.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(W.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(W.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamAwards_GetNominationRecommendations_Response_SuggestedApp";
        }
      }
      class T extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            T.prototype.generate_new || a.aR(T.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: {
                  generate_new: { n: 1, br: a.FE.readBool, bw: a.Xc.writeBool },
                },
              }),
            T.sm_m
          );
        }
        static MBF() {
          return T.sm_mbf || (T.sm_mbf = a.Bh(T.M())), T.sm_mbf;
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(T.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(T.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new T();
          return T.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(T.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(T.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamAwards_GetNominationShareLink_Request";
        }
      }
      class j extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            j.prototype.code || a.aR(j.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            j.sm_m ||
              (j.sm_m = {
                proto: j,
                fields: {
                  code: {
                    n: 1,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                },
              }),
            j.sm_m
          );
        }
        static MBF() {
          return j.sm_mbf || (j.sm_mbf = a.Bh(j.M())), j.sm_mbf;
        }
        toObject(e = !1) {
          return j.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(j.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(j.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new j();
          return j.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(j.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(j.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamAwards_GetNominationShareLink_Response";
        }
      }
      var O, I;
      !(function (e) {
        (e.GetVoteDefinitions = function (e, t) {
          return e.SendMsg(
            "StoreSales.GetVoteDefinitions#1",
            (0, n.MD)(u, t),
            d,
            { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
          );
        }),
          (e.SetVote = function (e, t) {
            return e.SendMsg("StoreSales.SetVote#1", (0, n.MD)(_, t), f, {
              ePrivilege: 1,
            });
          }),
          (e.GetUserVotes = function (e, t) {
            return e.SendMsg("StoreSales.GetUserVotes#1", (0, n.MD)(b, t), y, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          });
      })(O || (O = {})),
        (function (e) {
          (e.GetUserNominations = function (e, t) {
            return e.SendMsg(
              "SteamAwards.GetUserNominations#1",
              (0, n.MD)(z, t),
              g,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
            (e.GetOtherUserNominations = function (e, t) {
              return e.SendMsg(
                "SteamAwards.GetOtherUserNominations#1",
                (0, n.MD)(M, t),
                g,
                { bConstMethod: !0, ePrivilege: 2 },
              );
            }),
            (e.Nominate = function (e, t) {
              return e.SendMsg("SteamAwards.Nominate#1", (0, n.MD)(F, t), p, {
                bConstMethod: !0,
                ePrivilege: 1,
              });
            }),
            (e.GetNominationRecommendations = function (e, t) {
              return e.SendMsg(
                "SteamAwards.GetNominationRecommendations#1",
                (0, n.MD)(h, t),
                R,
                { bConstMethod: !0, ePrivilege: 1 },
              );
            }),
            (e.GetNominationShareLink = function (e, t) {
              return e.SendMsg(
                "SteamAwards.GetNominationShareLink#1",
                (0, n.MD)(T, t),
                j,
                { ePrivilege: 1 },
              );
            });
        })(I || (I = {}));
    },
    84670: (e, t, r) => {
      r.d(t, { Fi: () => j, it: () => X });
      var i = r(10059),
        a = r(39087),
        n = r(79545);
      const s = i.Message;
      class c extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            c.prototype.country_code || a.aR(c.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
                fields: {
                  country_code: {
                    n: 1,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                },
              }),
            c.sm_m
          );
        }
        static MBF() {
          return c.sm_mbf || (c.sm_mbf = a.Bh(c.M())), c.sm_mbf;
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(c.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(c.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new c();
          return c.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(c.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(c.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserAccount_GetAvailableValveDiscountPromotions_Request";
        }
      }
      class o extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            o.prototype.promotions || a.aR(o.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            o.sm_m ||
              (o.sm_m = {
                proto: o,
                fields: { promotions: { n: 1, c: l, r: !0, q: !0 } },
              }),
            o.sm_m
          );
        }
        static MBF() {
          return o.sm_mbf || (o.sm_mbf = a.Bh(o.M())), o.sm_mbf;
        }
        toObject(e = !1) {
          return o.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(o.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(o.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new o();
          return o.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(o.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(o.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserAccount_GetAvailableValveDiscountPromotions_Response";
        }
      }
      class l extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            l.prototype.promotionid || a.aR(l.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            l.sm_m ||
              (l.sm_m = {
                proto: l,
                fields: {
                  promotionid: {
                    n: 1,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  promotion_description: {
                    n: 2,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  minimum_cart_amount: {
                    n: 3,
                    br: a.FE.readInt64String,
                    bw: a.Xc.writeInt64String,
                  },
                  minimum_cart_amount_for_display: {
                    n: 4,
                    br: a.FE.readInt64String,
                    bw: a.Xc.writeInt64String,
                  },
                  discount_amount: {
                    n: 5,
                    br: a.FE.readInt64String,
                    bw: a.Xc.writeInt64String,
                  },
                  currency_code: {
                    n: 6,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  available_use_count: {
                    n: 7,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  promotional_discount_type: {
                    n: 8,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  loyalty_reward_id: {
                    n: 9,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  localized_name_token: {
                    n: 10,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  max_use_count: {
                    n: 11,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                },
              }),
            l.sm_m
          );
        }
        static MBF() {
          return l.sm_mbf || (l.sm_mbf = a.Bh(l.M())), l.sm_mbf;
        }
        toObject(e = !1) {
          return l.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(l.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(l.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new l();
          return l.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(l.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(l.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserAccount_GetAvailableValveDiscountPromotions_Response_ValveDiscountPromotionDetails";
        }
      }
      class m extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            m.prototype.has_wallet || a.aR(m.M()),
            s.initialize(this, e, 0, -1, [13], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = {
                proto: m,
                fields: {
                  has_wallet: { n: 1, br: a.FE.readBool, bw: a.Xc.writeBool },
                  user_country_code: {
                    n: 2,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  wallet_country_code: {
                    n: 3,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  wallet_state: {
                    n: 4,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  balance: {
                    n: 5,
                    br: a.FE.readInt64String,
                    bw: a.Xc.writeInt64String,
                  },
                  delayed_balance: {
                    n: 6,
                    br: a.FE.readInt64String,
                    bw: a.Xc.writeInt64String,
                  },
                  currency_code: {
                    n: 7,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  time_most_recent_txn: {
                    n: 8,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  most_recent_txnid: {
                    n: 9,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  balance_in_usd: {
                    n: 10,
                    br: a.FE.readInt64String,
                    bw: a.Xc.writeInt64String,
                  },
                  delayed_balance_in_usd: {
                    n: 11,
                    br: a.FE.readInt64String,
                    bw: a.Xc.writeInt64String,
                  },
                  has_wallet_in_other_regions: {
                    n: 12,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  other_regions: {
                    n: 13,
                    r: !0,
                    q: !0,
                    br: a.FE.readInt32,
                    pbr: a.FE.readPackedInt32,
                    bw: a.Xc.writeRepeatedInt32,
                  },
                  formatted_balance: {
                    n: 14,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  formatted_delayed_balance: {
                    n: 15,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  delayed_balance_available_min_time: {
                    n: 16,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  delayed_balance_available_max_time: {
                    n: 17,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  delayed_balance_newest_source: {
                    n: 18,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                },
              }),
            m.sm_m
          );
        }
        static MBF() {
          return m.sm_mbf || (m.sm_mbf = a.Bh(m.M())), m.sm_mbf;
        }
        toObject(e = !1) {
          return m.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(m.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(m.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new m();
          return m.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(m.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(m.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserAccount_GetWalletDetails_Response";
        }
      }
      class u extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            u.prototype.include_balance_in_usd || a.aR(u.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: {
                  include_balance_in_usd: {
                    n: 1,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  wallet_region: {
                    n: 2,
                    d: 1,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  include_formatted_balance: {
                    n: 3,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = a.Bh(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(u.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(u.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new u();
          return u.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(u.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(u.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserAccount_GetClientWalletDetails_Request";
        }
      }
      class d extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new d();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new d();
          return d.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserAccount_GetAccountLinkStatus_Request";
        }
      }
      class B extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            B.prototype.pwid || a.aR(B.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: {
                  pwid: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  identity_verification: {
                    n: 2,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  performed_age_verification: {
                    n: 3,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = a.Bh(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(B.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(B.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new B();
          return B.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(B.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(B.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserAccount_GetAccountLinkStatus_Response";
        }
      }
      class b extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.appid || a.aR(b.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  appid: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = a.Bh(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(b.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(b.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new b();
          return b.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(b.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(b.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserAccount_CancelLicenseForApp_Request";
        }
      }
      class y extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new y();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new y();
          return y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserAccount_CancelLicenseForApp_Response";
        }
      }
      class _ extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _.prototype.steamid || a.aR(_.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  steamid: {
                    n: 1,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = a.Bh(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(_.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(_.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new _();
          return _.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(_.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(_.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserAccount_GetUserCountry_Request";
        }
      }
      class f extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.country || a.aR(f.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: {
                  country: { n: 1, br: a.FE.readString, bw: a.Xc.writeString },
                },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = a.Bh(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(f.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(f.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new f();
          return f.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(f.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(f.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserAccount_GetUserCountry_Response";
        }
      }
      class w extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.invite_limit || a.aR(w.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  invite_limit: {
                    n: 1,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  invite_duration: {
                    n: 2,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  invite_note: {
                    n: 3,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = a.Bh(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(w.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(w.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new w();
          return w.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(w.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(w.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserAccount_CreateFriendInviteToken_Request";
        }
      }
      class z extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            z.prototype.invite_token || a.aR(z.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: {
                  invite_token: {
                    n: 1,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  invite_limit: {
                    n: 2,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  invite_duration: {
                    n: 3,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  time_created: {
                    n: 4,
                    br: a.FE.readFixed32,
                    bw: a.Xc.writeFixed32,
                  },
                  valid: { n: 5, br: a.FE.readBool, bw: a.Xc.writeBool },
                },
              }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = a.Bh(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(z.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new z();
          return z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(z.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserAccount_CreateFriendInviteToken_Response";
        }
      }
      class g extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new g();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new g();
          return g.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserAccount_GetFriendInviteTokens_Request";
        }
      }
      class M extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.tokens || a.aR(M.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: { tokens: { n: 1, c: z, r: !0, q: !0 } },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = a.Bh(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(M.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(M.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new M();
          return M.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(M.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(M.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserAccount_GetFriendInviteTokens_Response";
        }
      }
      class F extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            F.prototype.steamid || a.aR(F.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
                fields: {
                  steamid: {
                    n: 1,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  invite_token: {
                    n: 2,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                },
              }),
            F.sm_m
          );
        }
        static MBF() {
          return F.sm_mbf || (F.sm_mbf = a.Bh(F.M())), F.sm_mbf;
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(F.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(F.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new F();
          return F.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(F.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(F.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserAccount_ViewFriendInviteToken_Request";
        }
      }
      class p extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.valid || a.aR(p.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  valid: { n: 1, br: a.FE.readBool, bw: a.Xc.writeBool },
                  steamid: {
                    n: 2,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  invite_duration: {
                    n: 3,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = a.Bh(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(p.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(p.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new p();
          return p.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(p.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(p.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserAccount_ViewFriendInviteToken_Response";
        }
      }
      class h extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.steamid || a.aR(h.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  steamid: {
                    n: 1,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  invite_token: {
                    n: 2,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = a.Bh(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(h.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(h.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new h();
          return h.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserAccount_RedeemFriendInviteToken_Request";
        }
      }
      class R extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new R();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new R();
          return R.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserAccount_RedeemFriendInviteToken_Response";
        }
      }
      class S extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            S.prototype.invite_token || a.aR(S.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: {
                  invite_token: {
                    n: 1,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                },
              }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = a.Bh(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(S.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(S.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new S();
          return S.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(S.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(S.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserAccount_RevokeFriendInviteToken_Request";
        }
      }
      class v extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new v();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new v();
          return v.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserAccount_RevokeFriendInviteToken_Response";
        }
      }
      class W extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            W.prototype.compat_tool || a.aR(W.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            W.sm_m ||
              (W.sm_m = {
                proto: W,
                fields: {
                  compat_tool: {
                    n: 1,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            W.sm_m
          );
        }
        static MBF() {
          return W.sm_mbf || (W.sm_mbf = a.Bh(W.M())), W.sm_mbf;
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(W.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(W.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new W();
          return W.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(W.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(W.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserAccount_RegisterCompatTool_Request";
        }
      }
      class T extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new T();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new T();
          return T.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserAccount_RegisterCompatTool_Response";
        }
      }
      class j extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            j.prototype.account_type || a.aR(j.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            j.sm_m ||
              (j.sm_m = {
                proto: j,
                fields: {
                  account_type: { n: 1, br: a.FE.readEnum, bw: a.Xc.writeEnum },
                  account_id: {
                    n: 2,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  filter: { n: 3, br: a.FE.readEnum, bw: a.Xc.writeEnum },
                  return_access_token: {
                    n: 4,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                },
              }),
            j.sm_m
          );
        }
        static MBF() {
          return j.sm_mbf || (j.sm_mbf = a.Bh(j.M())), j.sm_mbf;
        }
        toObject(e = !1) {
          return j.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(j.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(j.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new j();
          return j.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(j.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(j.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAccountLinking_GetLinkedAccountInfo_Request";
        }
      }
      class O extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            O.prototype.external_accounts || a.aR(O.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            O.sm_m ||
              (O.sm_m = {
                proto: O,
                fields: { external_accounts: { n: 1, c: I, r: !0, q: !0 } },
              }),
            O.sm_m
          );
        }
        static MBF() {
          return O.sm_mbf || (O.sm_mbf = a.Bh(O.M())), O.sm_mbf;
        }
        toObject(e = !1) {
          return O.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(O.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(O.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new O();
          return O.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(O.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(O.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAccountLinking_GetLinkedAccountInfo_Response";
        }
      }
      class I extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            I.prototype.external_type || a.aR(I.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
                fields: {
                  external_type: {
                    n: 1,
                    br: a.FE.readEnum,
                    bw: a.Xc.writeEnum,
                  },
                  external_id: {
                    n: 2,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  external_user_name: {
                    n: 3,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  external_url: {
                    n: 4,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  access_token: {
                    n: 5,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  access_token_secret: {
                    n: 6,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  is_valid: { n: 7, br: a.FE.readBool, bw: a.Xc.writeBool },
                },
              }),
            I.sm_m
          );
        }
        static MBF() {
          return I.sm_mbf || (I.sm_mbf = a.Bh(I.M())), I.sm_mbf;
        }
        toObject(e = !1) {
          return I.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(I.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(I.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new I();
          return I.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(I.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(I.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAccountLinking_GetLinkedAccountInfo_Response_CExternalAccountTuple_Response";
        }
      }
      class C extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            C.prototype.steamid || a.aR(C.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            C.sm_m ||
              (C.sm_m = {
                proto: C,
                fields: {
                  steamid: {
                    n: 1,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  client_token: {
                    n: 2,
                    br: a.FE.readBytes,
                    bw: a.Xc.writeBytes,
                  },
                  expiry: { n: 3, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  deviceid: { n: 4, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                },
              }),
            C.sm_m
          );
        }
        static MBF() {
          return C.sm_mbf || (C.sm_mbf = a.Bh(C.M())), C.sm_mbf;
        }
        toObject(e = !1) {
          return C.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(C.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(C.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new C();
          return C.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(C.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(C.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEmbeddedClient_Token";
        }
      }
      class E extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            E.prototype.result || a.aR(E.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            E.sm_m ||
              (E.sm_m = {
                proto: E,
                fields: {
                  result: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  token: { n: 2, c: C },
                },
              }),
            E.sm_m
          );
        }
        static MBF() {
          return E.sm_mbf || (E.sm_mbf = a.Bh(E.M())), E.sm_mbf;
        }
        toObject(e = !1) {
          return E.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(E.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(E.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new E();
          return E.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(E.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(E.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEmbeddedClient_AuthorizeDevice_Response";
        }
      }
      class U extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            U.prototype.steamid || a.aR(U.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            U.sm_m ||
              (U.sm_m = {
                proto: U,
                fields: {
                  steamid: {
                    n: 1,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  appid: { n: 2, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  device_info: {
                    n: 3,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  deviceid: { n: 4, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                },
              }),
            U.sm_m
          );
        }
        static MBF() {
          return U.sm_mbf || (U.sm_mbf = a.Bh(U.M())), U.sm_mbf;
        }
        toObject(e = !1) {
          return U.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(U.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(U.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new U();
          return U.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(U.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(U.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEmbeddedClient_AuthorizeCurrentDevice_Request";
        }
      }
      var A, X, D;
      !(function (e) {
        (e.GetAvailableValveDiscountPromotions = function (e, t) {
          return e.SendMsg(
            "UserAccount.GetAvailableValveDiscountPromotions#1",
            (0, n.MD)(c, t),
            o,
            { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
          );
        }),
          (e.GetClientWalletDetails = function (e, t) {
            return e.SendMsg(
              "UserAccount.GetClientWalletDetails#1",
              (0, n.MD)(u, t),
              m,
              { ePrivilege: 1 },
            );
          }),
          (e.GetAccountLinkStatus = function (e, t) {
            return e.SendMsg(
              "UserAccount.GetAccountLinkStatus#1",
              (0, n.MD)(d, t),
              B,
              { ePrivilege: 1 },
            );
          }),
          (e.CancelLicenseForApp = function (e, t) {
            return e.SendMsg(
              "UserAccount.CancelLicenseForApp#1",
              (0, n.MD)(b, t),
              y,
              { ePrivilege: 1 },
            );
          }),
          (e.GetUserCountry = function (e, t) {
            return e.SendMsg(
              "UserAccount.GetUserCountry#1",
              (0, n.MD)(_, t),
              f,
              { ePrivilege: 1 },
            );
          }),
          (e.CreateFriendInviteToken = function (e, t) {
            return e.SendMsg(
              "UserAccount.CreateFriendInviteToken#1",
              (0, n.MD)(w, t),
              z,
              { ePrivilege: 3 },
            );
          }),
          (e.GetFriendInviteTokens = function (e, t) {
            return e.SendMsg(
              "UserAccount.GetFriendInviteTokens#1",
              (0, n.MD)(g, t),
              M,
              { ePrivilege: 1 },
            );
          }),
          (e.ViewFriendInviteToken = function (e, t) {
            return e.SendMsg(
              "UserAccount.ViewFriendInviteToken#1",
              (0, n.MD)(F, t),
              p,
              { ePrivilege: 1 },
            );
          }),
          (e.RedeemFriendInviteToken = function (e, t) {
            return e.SendMsg(
              "UserAccount.RedeemFriendInviteToken#1",
              (0, n.MD)(h, t),
              R,
              { ePrivilege: 1 },
            );
          }),
          (e.RevokeFriendInviteToken = function (e, t) {
            return e.SendMsg(
              "UserAccount.RevokeFriendInviteToken#1",
              (0, n.MD)(S, t),
              v,
              { ePrivilege: 1 },
            );
          }),
          (e.RegisterCompatTool = function (e, t) {
            return e.SendMsg(
              "UserAccount.RegisterCompatTool#1",
              (0, n.MD)(W, t),
              T,
              { ePrivilege: 1 },
            );
          });
      })(A || (A = {})),
        (function (e) {
          e.GetLinkedAccountInfo = function (e, t) {
            return e.SendMsg(
              "AccountLinking.GetLinkedAccountInfo#1",
              (0, n.MD)(j, t),
              O,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          };
        })(X || (X = {})),
        (function (e) {
          e.AuthorizeCurrentDevice = function (e, t) {
            return e.SendMsg(
              "EmbeddedClient.AuthorizeCurrentDevice#1",
              (0, n.MD)(U, t),
              E,
              { ePrivilege: 1 },
            );
          };
        })(D || (D = {}));
    },
  },
]);

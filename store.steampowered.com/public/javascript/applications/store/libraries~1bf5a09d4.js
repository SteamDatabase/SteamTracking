/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [6909],
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
                          return void a(t);
                        var r;
                        try {
                          r = e._batchLoadFn(t.keys);
                        } catch (r) {
                          return n(
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
                          return n(
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
                          a(t);
                          for (var r = 0; r < t.callbacks.length; r++) {
                            var i = e[r];
                            i instanceof Error
                              ? t.callbacks[r].reject(i)
                              : t.callbacks[r].resolve(i);
                          }
                        }).catch(function (r) {
                          n(e, t, r);
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
                  var l = t.cacheHits || (t.cacheHits = []);
                  return new Promise(function (e) {
                    l.push(function () {
                      e(c);
                    });
                  });
                }
              }
              t.keys.push(e);
              var o = new Promise(function (e, r) {
                t.callbacks.push({ resolve: e, reject: r });
              });
              return r && r.set(i, o), o;
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
                  n = this._cacheKeyFn(e);
                if (void 0 === r.get(n))
                  t instanceof Error
                    ? (i = Promise.reject(t)).catch(function () {})
                    : (i = Promise.resolve(t)),
                    r.set(n, i);
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
      function n(e, t, r) {
        a(t);
        for (var i = 0; i < t.keys.length; i++)
          e.clear(t.keys[i]), t.callbacks[i].reject(r);
      }
      function a(e) {
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
    67573: (e, t, r) => {
      var i = r(10059),
        n = r(39087),
        a = r(79545);
      const s = i.Message;
      class c extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            c.prototype.steamid || n.aR(c.M()),
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
                  steamid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  accept: { n: 2, br: n.FE.readBool, bw: n.Xc.writeBool },
                },
              }),
            c.sm_m
          );
        }
        static MBF() {
          return c.sm_mbf || (c.sm_mbf = n.Bh(c.M())), c.sm_mbf;
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(c.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(c.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new c();
          return c.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(c.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(c.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClan_RespondToClanInvite_Request";
        }
      }
      class l extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return l.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new l();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new l();
          return l.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClan_RespondToClanInvite_Response";
        }
      }
      class o extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            o.prototype.requests || n.aR(o.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            o.sm_m ||
              (o.sm_m = {
                proto: o,
                fields: {
                  requests: { n: 1, c: u, r: !0, q: !0 },
                  cursor: { n: 2, br: n.FE.readString, bw: n.Xc.writeString },
                  count: {
                    n: 3,
                    d: 100,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            o.sm_m
          );
        }
        static MBF() {
          return o.sm_mbf || (o.sm_mbf = n.Bh(o.M())), o.sm_mbf;
        }
        toObject(e = !1) {
          return o.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(o.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(o.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new o();
          return o.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(o.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(o.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClan_GetPartnerEventsByBuildIDRange_Request";
        }
      }
      class u extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            u.prototype.appid || n.aR(u.M()),
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
                  appid: { n: 1, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  start_build_id: {
                    n: 2,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  end_build_id: {
                    n: 3,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  branch: { n: 4, br: n.FE.readString, bw: n.Xc.writeString },
                },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = n.Bh(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(u.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(u.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new u();
          return u.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(u.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(u.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClan_GetPartnerEventsByBuildIDRange_Request_PatchNoteRange";
        }
      }
      class m extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            m.prototype.matches || n.aR(m.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = {
                proto: m,
                fields: {
                  matches: { n: 1, c: d, r: !0, q: !0 },
                  num_total_results: {
                    n: 2,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  next_cursor: {
                    n: 3,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                },
              }),
            m.sm_m
          );
        }
        static MBF() {
          return m.sm_mbf || (m.sm_mbf = n.Bh(m.M())), m.sm_mbf;
        }
        toObject(e = !1) {
          return m.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(m.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(m.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new m();
          return m.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(m.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(m.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClan_GetPartnerEventsByBuildIDRange_Response";
        }
      }
      class d extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            d.prototype.appid || n.aR(d.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  appid: { n: 1, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  build_id: { n: 2, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  branch: { n: 3, br: n.FE.readString, bw: n.Xc.writeString },
                  clan_event_gid: {
                    n: 4,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  clan_account_id: {
                    n: 5,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = n.Bh(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(d.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(d.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new d();
          return d.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(d.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(d.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClan_GetPartnerEventsByBuildIDRange_Response_PatchNotesDesc";
        }
      }
      var B;
      !(function (e) {
        (e.RespondToClanInvite = function (e, t) {
          return e.SendMsg("Clan.RespondToClanInvite#1", (0, a.MD)(c, t), l, {
            ePrivilege: 1,
          });
        }),
          (e.GetPartnerEventsByBuildIDRange = function (e, t) {
            return e.SendMsg(
              "Clan.GetPartnerEventsByBuildIDRange#1",
              (0, a.MD)(o, t),
              m,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          });
      })(B || (B = {}));
    },
    83120: (e, t, r) => {
      r.d(t, { II: () => o, Z$: () => R, b5: () => j });
      var i = r(10059),
        n = r(39087),
        a = r(79545);
      const s = i.Message;
      class c extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            c.prototype.client_instanceid || n.aR(c.M()),
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
                  client_instanceid: {
                    n: 1,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                },
              }),
            c.sm_m
          );
        }
        static MBF() {
          return c.sm_mbf || (c.sm_mbf = n.Bh(c.M())), c.sm_mbf;
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(c.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(c.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new c();
          return c.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(c.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(c.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_GetClientLogonInfo_Request";
        }
      }
      class l extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            l.prototype.protocol_version || n.aR(l.M()),
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
                  protocol_version: {
                    n: 1,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  os: { n: 2, br: n.FE.readString, bw: n.Xc.writeString },
                  machine_name: {
                    n: 3,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                },
              }),
            l.sm_m
          );
        }
        static MBF() {
          return l.sm_mbf || (l.sm_mbf = n.Bh(l.M())), l.sm_mbf;
        }
        toObject(e = !1) {
          return l.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(l.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(l.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new l();
          return l.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(l.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(l.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_GetClientLogonInfo_Response";
        }
      }
      class o extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return o.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new o();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new o();
          return o.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_GetAllClientLogonInfo_Request";
        }
      }
      class u extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            u.prototype.sessions || n.aR(u.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: {
                  sessions: { n: 1, c: m, r: !0, q: !0 },
                  refetch_interval_sec: {
                    n: 2,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = n.Bh(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(u.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(u.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new u();
          return u.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(u.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(u.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_GetAllClientLogonInfo_Response";
        }
      }
      class m extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            m.prototype.client_instanceid || n.aR(m.M()),
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
                  client_instanceid: {
                    n: 1,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  protocol_version: {
                    n: 2,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  os_name: { n: 3, br: n.FE.readString, bw: n.Xc.writeString },
                  machine_name: {
                    n: 4,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  os_type: { n: 5, br: n.FE.readInt32, bw: n.Xc.writeInt32 },
                  device_type: {
                    n: 6,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                  realm: { n: 7, br: n.FE.readInt32, bw: n.Xc.writeInt32 },
                },
              }),
            m.sm_m
          );
        }
        static MBF() {
          return m.sm_mbf || (m.sm_mbf = n.Bh(m.M())), m.sm_mbf;
        }
        toObject(e = !1) {
          return m.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(m.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(m.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new m();
          return m.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(m.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(m.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_GetAllClientLogonInfo_Response_Session";
        }
      }
      class d extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            d.prototype.client_instanceid || n.aR(d.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  client_instanceid: {
                    n: 1,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = n.Bh(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(d.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(d.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new d();
          return d.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(d.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(d.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_GetClientInfo_Request";
        }
      }
      class B extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            B.prototype.package_version || n.aR(B.M()),
            s.initialize(this, e, 0, -1, [7, 10], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: {
                  package_version: {
                    n: 1,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  os: { n: 2, br: n.FE.readString, bw: n.Xc.writeString },
                  machine_name: {
                    n: 3,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  ip_public: {
                    n: 4,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  ip_private: {
                    n: 5,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  bytes_available: {
                    n: 6,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  running_games: { n: 7, c: b, r: !0, q: !0 },
                  protocol_version: {
                    n: 8,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  clientcomm_version: {
                    n: 9,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  local_users: {
                    n: 10,
                    r: !0,
                    q: !0,
                    br: n.FE.readUint32,
                    pbr: n.FE.readPackedUint32,
                    bw: n.Xc.writeRepeatedUint32,
                  },
                },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = n.Bh(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(B.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(B.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new B();
          return B.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(B.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(B.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_ClientData";
        }
      }
      class b extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.appid || n.aR(b.M()),
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
                  appid: { n: 1, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  extra_info: {
                    n: 2,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  time_running_sec: {
                    n: 3,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = n.Bh(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(b.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(b.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new b();
          return b.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(b.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(b.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_ClientData_RunningGames";
        }
      }
      class y extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.client_info || n.aR(y.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = { proto: y, fields: { client_info: { n: 1, c: B } } }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = n.Bh(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(y.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new y();
          return y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(y.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_GetClientInfo_Response";
        }
      }
      class f extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.fields || n.aR(f.M()),
            s.initialize(this, e, 0, -1, [6], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: {
                  fields: { n: 1, br: n.FE.readString, bw: n.Xc.writeString },
                  filters: { n: 2, br: n.FE.readString, bw: n.Xc.writeString },
                  client_instanceid: {
                    n: 3,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  include_client_info: {
                    n: 4,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  language: { n: 5, br: n.FE.readString, bw: n.Xc.writeString },
                  filter_appids: {
                    n: 6,
                    r: !0,
                    q: !0,
                    br: n.FE.readUint32,
                    pbr: n.FE.readPackedUint32,
                    bw: n.Xc.writeRepeatedUint32,
                  },
                },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = n.Bh(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(f.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(f.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new f();
          return f.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(f.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(f.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_GetClientAppList_Request";
        }
      }
      class w extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.bytes_available || n.aR(w.M()),
            s.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  bytes_available: {
                    n: 1,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  apps: { n: 2, c: _, r: !0, q: !0 },
                  client_info: { n: 3, c: B },
                  refetch_interval_sec_full: {
                    n: 4,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  refetch_interval_sec_changing: {
                    n: 5,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  refetch_interval_sec_updating: {
                    n: 6,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = n.Bh(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(w.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(w.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new w();
          return w.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(w.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(w.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_GetClientAppList_Response";
        }
      }
      class _ extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _.prototype.appid || n.aR(_.M()),
            s.initialize(this, e, 0, -1, [17], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  appid: { n: 1, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  app: { n: 2, br: n.FE.readString, bw: n.Xc.writeString },
                  category: { n: 3, br: n.FE.readString, bw: n.Xc.writeString },
                  app_type: { n: 4, br: n.FE.readString, bw: n.Xc.writeString },
                  num_downloading: {
                    n: 8,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  num_paused: {
                    n: 10,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  bytes_download_rate: {
                    n: 11,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  bytes_downloaded: {
                    n: 12,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  bytes_to_download: {
                    n: 13,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  dlcs: { n: 17, c: p, r: !0, q: !0 },
                  favorite: { n: 18, br: n.FE.readBool, bw: n.Xc.writeBool },
                  auto_update: { n: 19, br: n.FE.readBool, bw: n.Xc.writeBool },
                  installed: { n: 20, br: n.FE.readBool, bw: n.Xc.writeBool },
                  download_paused: {
                    n: 21,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  changing: { n: 22, br: n.FE.readBool, bw: n.Xc.writeBool },
                  available_on_platform: {
                    n: 23,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  bytes_staged: {
                    n: 24,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  bytes_to_stage: {
                    n: 25,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  bytes_required: {
                    n: 26,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  source_buildid: {
                    n: 27,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  target_buildid: {
                    n: 28,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  estimated_seconds_remaining: {
                    n: 29,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  queue_position: {
                    n: 30,
                    d: -1,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                  uninstalling: {
                    n: 31,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  rt_time_scheduled: {
                    n: 32,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  running: { n: 33, br: n.FE.readBool, bw: n.Xc.writeBool },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = n.Bh(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(_.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(_.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new _();
          return _.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(_.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(_.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_GetClientAppList_Response_AppData";
        }
      }
      class p extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.appid || n.aR(p.M()),
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
                  appid: { n: 1, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  app: { n: 2, br: n.FE.readString, bw: n.Xc.writeString },
                  installed: {
                    n: 3,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = n.Bh(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(p.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(p.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new p();
          return p.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(p.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(p.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_GetClientAppList_Response_AppData_DLCData";
        }
      }
      class g extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            g.prototype.appid || n.aR(g.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  appid: {
                    n: 1,
                    q: !0,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  client_instanceid: {
                    n: 2,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = n.Bh(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(g.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(g.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new g();
          return g.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(g.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(g.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_InstallClientApp_Request";
        }
      }
      class h extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new h();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new h();
          return h.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_InstallClientApp_Response";
        }
      }
      class z extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            z.prototype.appid || n.aR(z.M()),
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
                  appid: {
                    n: 1,
                    q: !0,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  client_instanceid: {
                    n: 2,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                },
              }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = n.Bh(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(z.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new z();
          return z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(z.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_UninstallClientApp_Request";
        }
      }
      class F extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new F();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new F();
          return F.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_UninstallClientApp_Response";
        }
      }
      class M extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.appid || n.aR(M.M()),
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
                  appid: {
                    n: 1,
                    q: !0,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  action: {
                    n: 2,
                    q: !0,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  client_instanceid: {
                    n: 3,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = n.Bh(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(M.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(M.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new M();
          return M.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(M.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(M.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_SetClientAppUpdateState_Request";
        }
      }
      class R extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            R.prototype.client_instanceid || n.aR(R.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = {
                proto: R,
                fields: {
                  client_instanceid: {
                    n: 1,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  appid: {
                    n: 2,
                    q: !0,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  query_params: {
                    n: 3,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                },
              }),
            R.sm_m
          );
        }
        static MBF() {
          return R.sm_mbf || (R.sm_mbf = n.Bh(R.M())), R.sm_mbf;
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(R.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(R.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new R();
          return R.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(R.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(R.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_LaunchClientApp_Request";
        }
      }
      class S extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new S();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new S();
          return S.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_LaunchClientApp_Response";
        }
      }
      class C extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return C.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new C();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new C();
          return C.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_SetClientAppUpdateState_Response";
        }
      }
      class v extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            v.prototype.client_instanceid || n.aR(v.M()),
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
                  client_instanceid: {
                    n: 1,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  enable: { n: 2, br: n.FE.readBool, bw: n.Xc.writeBool },
                },
              }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = n.Bh(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(v.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(v.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new v();
          return v.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(v.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(v.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_EnableOrDisableDownloads_Request";
        }
      }
      class W extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new W();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new W();
          return W.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_EnableOrDisableDownloads_Response";
        }
      }
      var j;
      !(function (e) {
        (e.GetClientLogonInfo = function (e, t) {
          return e.SendMsg(
            "ClientComm.GetClientLogonInfo#1",
            (0, a.MD)(c, t),
            l,
            { bConstMethod: !0, ePrivilege: 1 },
          );
        }),
          (e.GetAllClientLogonInfo = function (e, t) {
            return e.SendMsg(
              "ClientComm.GetAllClientLogonInfo#1",
              (0, a.MD)(o, t),
              u,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetClientInfo = function (e, t) {
            return e.SendMsg("ClientComm.GetClientInfo#1", (0, a.MD)(d, t), y, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.GetClientAppList = function (e, t) {
            return e.SendMsg(
              "ClientComm.GetClientAppList#1",
              (0, a.MD)(f, t),
              w,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.InstallClientApp = function (e, t) {
            return e.SendMsg(
              "ClientComm.InstallClientApp#1",
              (0, a.MD)(g, t),
              h,
              { ePrivilege: 1 },
            );
          }),
          (e.UninstallClientApp = function (e, t) {
            return e.SendMsg(
              "ClientComm.UninstallClientApp#1",
              (0, a.MD)(z, t),
              F,
              { ePrivilege: 1 },
            );
          }),
          (e.LaunchClientApp = function (e, t) {
            return e.SendMsg(
              "ClientComm.LaunchClientApp#1",
              (0, a.MD)(R, t),
              S,
              { ePrivilege: 1 },
            );
          }),
          (e.SetClientAppUpdateState = function (e, t) {
            return e.SendMsg(
              "ClientComm.SetClientAppUpdateState#1",
              (0, a.MD)(M, t),
              C,
              { ePrivilege: 1 },
            );
          }),
          (e.EnableOrDisableDownloads = function (e, t) {
            return e.SendMsg(
              "ClientComm.EnableOrDisableDownloads#1",
              (0, a.MD)(v, t),
              W,
              { ePrivilege: 1 },
            );
          });
      })(j || (j = {}));
    },
  },
]);

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [6820],
  {
    73799: (e) => {
      var t,
        n = (function () {
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
                var n = e && e.maxBatchSize;
                if (void 0 === n) return 1 / 0;
                if ("number" != typeof n || n < 1)
                  throw new TypeError(
                    "maxBatchSize must be a positive number: " + n,
                  );
                return n;
              })(t)),
              (this._batchScheduleFn = (function (e) {
                var t = e && e.batchScheduleFn;
                if (void 0 === t) return r;
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
                var n = e && e.cacheMap;
                if (void 0 === n) return new Map();
                if (null !== n) {
                  var r = ["get", "set", "delete", "clear"].filter(
                    function (e) {
                      return n && "function" != typeof n[e];
                    },
                  );
                  if (0 !== r.length)
                    throw new TypeError(
                      "Custom cacheMap missing methods: " + r.join(", "),
                    );
                }
                return n;
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
                  var n = { hasDispatched: !1, keys: [], callbacks: [] };
                  return (
                    (e._batch = n),
                    e._batchScheduleFn(function () {
                      !(function (e, t) {
                        if (((t.hasDispatched = !0), 0 === t.keys.length))
                          return void o(t);
                        var n;
                        try {
                          n = e._batchLoadFn(t.keys);
                        } catch (n) {
                          return i(
                            e,
                            t,
                            new TypeError(
                              "DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function errored synchronously: " +
                                String(n) +
                                ".",
                            ),
                          );
                        }
                        if (!n || "function" != typeof n.then)
                          return i(
                            e,
                            t,
                            new TypeError(
                              "DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise: " +
                                String(n) +
                                ".",
                            ),
                          );
                        n.then(function (e) {
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
                          o(t);
                          for (var n = 0; n < t.callbacks.length; n++) {
                            var r = e[n];
                            r instanceof Error
                              ? t.callbacks[n].reject(r)
                              : t.callbacks[n].resolve(r);
                          }
                        }).catch(function (n) {
                          i(e, t, n);
                        });
                      })(e, n);
                    }),
                    n
                  );
                })(this),
                n = this._cacheMap,
                r = this._cacheKeyFn(e);
              if (n) {
                var l = n.get(r);
                if (l) {
                  var a = t.cacheHits || (t.cacheHits = []);
                  return new Promise(function (e) {
                    a.push(function () {
                      e(l);
                    });
                  });
                }
              }
              t.keys.push(e);
              var h = new Promise(function (e, n) {
                t.callbacks.push({ resolve: e, reject: n });
              });
              return n && n.set(r, h), h;
            }),
            (t.loadMany = function (e) {
              if (!s(e))
                throw new TypeError(
                  "The loader.loadMany() function must be called with Array<key> but got: " +
                    e +
                    ".",
                );
              for (var t = [], n = 0; n < e.length; n++)
                t.push(
                  this.load(e[n]).catch(function (e) {
                    return e;
                  }),
                );
              return Promise.all(t);
            }),
            (t.clear = function (e) {
              var t = this._cacheMap;
              if (t) {
                var n = this._cacheKeyFn(e);
                t.delete(n);
              }
              return this;
            }),
            (t.clearAll = function () {
              var e = this._cacheMap;
              return e && e.clear(), this;
            }),
            (t.prime = function (e, t) {
              var n = this._cacheMap;
              if (n) {
                var r,
                  i = this._cacheKeyFn(e);
                if (void 0 === n.get(i))
                  t instanceof Error
                    ? (r = Promise.reject(t)).catch(function () {})
                    : (r = Promise.resolve(t)),
                    n.set(i, r);
              }
              return this;
            }),
            e
          );
        })(),
        r =
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
      function i(e, t, n) {
        o(t);
        for (var r = 0; r < t.keys.length; r++)
          e.clear(t.keys[r]), t.callbacks[r].reject(n);
      }
      function o(e) {
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
      e.exports = n;
    },
    61578: (e, t, n) => {
      n.d(t, {
        $$: () => p,
        DI: () => a,
        Rr: () => y,
        SX: () => f,
        ge: () => c,
      });
      var r = n(10059),
        i = n(39087),
        o = n(79545);
      const s = r.Message;
      class l extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            l.prototype.id || i.aR(l.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            l.sm_m ||
              (l.sm_m = {
                proto: l,
                fields: {
                  id: { n: 1, br: i.FE.readString, bw: i.Xc.writeString },
                  appid: { n: 2, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                  shortcut_name: {
                    n: 3,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                  shortcutid: {
                    n: 4,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  ordinal: { n: 5, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                  time_created: {
                    n: 6,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  time_modified: {
                    n: 7,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  title: { n: 8, br: i.FE.readString, bw: i.Xc.writeString },
                  content: { n: 9, br: i.FE.readString, bw: i.Xc.writeString },
                },
              }),
            l.sm_m
          );
        }
        static MBF() {
          return l.sm_mbf || (l.sm_mbf = i.Bh(l.M())), l.sm_mbf;
        }
        toObject(e = !1) {
          return l.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(l.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(l.M(), e);
        }
        static deserializeBinary(e) {
          let t = new r.BinaryReader(e),
            n = new l();
          return l.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(l.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(l.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserGameNote";
        }
      }
      class a extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            a.prototype.appid || i.aR(a.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            a.sm_m ||
              (a.sm_m = {
                proto: a,
                fields: {
                  appid: { n: 1, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                  shortcut_name: {
                    n: 2,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                  shortcutid: {
                    n: 3,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  include_content: {
                    n: 4,
                    br: i.FE.readBool,
                    bw: i.Xc.writeBool,
                  },
                },
              }),
            a.sm_m
          );
        }
        static MBF() {
          return a.sm_mbf || (a.sm_mbf = i.Bh(a.M())), a.sm_mbf;
        }
        toObject(e = !1) {
          return a.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(a.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(a.M(), e);
        }
        static deserializeBinary(e) {
          let t = new r.BinaryReader(e),
            n = new a();
          return a.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(a.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(a.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserGameNotes_GetNotesForGame_Request";
        }
      }
      class h extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.notes || i.aR(h.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: { notes: { n: 1, c: l, r: !0, q: !0 } },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = i.Bh(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(h.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(h.M(), e);
        }
        static deserializeBinary(e) {
          let t = new r.BinaryReader(e),
            n = new h();
          return h.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserGameNotes_GetNotesForGame_Response";
        }
      }
      class c extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            c.prototype.appid || i.aR(c.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
                fields: {
                  appid: { n: 1, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                  shortcut_name: {
                    n: 2,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                  shortcutid: {
                    n: 3,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  note_id: { n: 4, br: i.FE.readString, bw: i.Xc.writeString },
                  create_new: { n: 5, br: i.FE.readBool, bw: i.Xc.writeBool },
                  title: { n: 6, br: i.FE.readString, bw: i.Xc.writeString },
                  content: { n: 7, br: i.FE.readString, bw: i.Xc.writeString },
                },
              }),
            c.sm_m
          );
        }
        static MBF() {
          return c.sm_mbf || (c.sm_mbf = i.Bh(c.M())), c.sm_mbf;
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(c.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(c.M(), e);
        }
        static deserializeBinary(e) {
          let t = new r.BinaryReader(e),
            n = new c();
          return c.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(c.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(c.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserGameNotes_SaveNote_Request";
        }
      }
      class d extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            d.prototype.note_id || i.aR(d.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  note_id: { n: 1, br: i.FE.readString, bw: i.Xc.writeString },
                },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = i.Bh(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(d.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(d.M(), e);
        }
        static deserializeBinary(e) {
          let t = new r.BinaryReader(e),
            n = new d();
          return d.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(d.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(d.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserGameNotes_SaveNote_Response";
        }
      }
      class p extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.appid || i.aR(p.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  appid: { n: 1, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                  shortcut_name: {
                    n: 2,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                  shortcutid: {
                    n: 3,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  note_id: { n: 4, br: i.FE.readString, bw: i.Xc.writeString },
                },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = i.Bh(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(p.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(p.M(), e);
        }
        static deserializeBinary(e) {
          let t = new r.BinaryReader(e),
            n = new p();
          return p.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(p.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(p.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserGameNotes_DeleteNote_Request";
        }
      }
      class u extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
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
          let t = new r.BinaryReader(e),
            n = new u();
          return u.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserGameNotes_DeleteNote_Response";
        }
      }
      class f extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
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
          let t = new r.BinaryReader(e),
            n = new f();
          return f.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserGameNotes_GetGamesWithNotes_Request";
        }
      }
      class m extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            m.prototype.games_with_notes || i.aR(m.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = {
                proto: m,
                fields: { games_with_notes: { n: 1, c: g, r: !0, q: !0 } },
              }),
            m.sm_m
          );
        }
        static MBF() {
          return m.sm_mbf || (m.sm_mbf = i.Bh(m.M())), m.sm_mbf;
        }
        toObject(e = !1) {
          return m.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(m.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(m.M(), e);
        }
        static deserializeBinary(e) {
          let t = new r.BinaryReader(e),
            n = new m();
          return m.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(m.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(m.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserGameNotes_GetGamesWithNotes_Response";
        }
      }
      class g extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            g.prototype.appid || i.aR(g.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  appid: { n: 1, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                  shortcutid: {
                    n: 2,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  shortcut_name: {
                    n: 3,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                  last_modified: {
                    n: 4,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  note_count: {
                    n: 5,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = i.Bh(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(g.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(g.M(), e);
        }
        static deserializeBinary(e) {
          let t = new r.BinaryReader(e),
            n = new g();
          return g.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(g.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(g.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserGameNotes_GetGamesWithNotes_Response_GameWithNotes";
        }
      }
      var y;
      !(function (e) {
        (e.GetNotesForGame = function (e, t) {
          return e.SendMsg(
            "UserGameNotes.GetNotesForGame#1",
            (0, o.MD)(a, t),
            h,
            { ePrivilege: 1 },
          );
        }),
          (e.SaveNote = function (e, t) {
            return e.SendMsg("UserGameNotes.SaveNote#1", (0, o.MD)(c, t), d, {
              ePrivilege: 1,
            });
          }),
          (e.DeleteNote = function (e, t) {
            return e.SendMsg("UserGameNotes.DeleteNote#1", (0, o.MD)(p, t), u, {
              ePrivilege: 1,
            });
          }),
          (e.GetGamesWithNotes = function (e, t) {
            return e.SendMsg(
              "UserGameNotes.GetGamesWithNotes#1",
              (0, o.MD)(f, t),
              m,
              { ePrivilege: 1 },
            );
          });
      })(y || (y = {}));
    },
    23612: (e, t, n) => {
      n.d(t, {
        QF: () => k,
        YR: () => N,
        uJ: () => b,
        uo: () => u,
        w9: () => S,
      });
      var r = n(42513),
        i = n(23126),
        o = n(4005);
      const s = (e, t) =>
        !e.selection.empty &&
        (t && t(e.tr.deleteSelection().scrollIntoView()), !0);
      function l(e, t) {
        let { $cursor: n } = e.selection;
        return !n || (t ? !t.endOfTextblock("backward", e) : n.parentOffset > 0)
          ? null
          : n;
      }
      function a(e, t, n = !1) {
        for (let r = e; r; r = "start" == t ? r.firstChild : r.lastChild) {
          if (r.isTextblock) return !0;
          if (n && 1 != r.childCount) return !1;
        }
        return !1;
      }
      function h(e) {
        if (!e.parent.type.spec.isolating)
          for (let t = e.depth - 1; t >= 0; t--) {
            if (e.index(t) > 0) return e.doc.resolve(e.before(t + 1));
            if (e.node(t).type.spec.isolating) break;
          }
        return null;
      }
      function c(e, t) {
        let { $cursor: n } = e.selection;
        return !n ||
          (t
            ? !t.endOfTextblock("forward", e)
            : n.parentOffset < n.parent.content.size)
          ? null
          : n;
      }
      function d(e) {
        if (!e.parent.type.spec.isolating)
          for (let t = e.depth - 1; t >= 0; t--) {
            let n = e.node(t);
            if (e.index(t) + 1 < n.childCount)
              return e.doc.resolve(e.after(t + 1));
            if (n.type.spec.isolating) break;
          }
        return null;
      }
      function p(e) {
        for (let t = 0; t < e.edgeCount; t++) {
          let { type: n } = e.edge(t);
          if (n.isTextblock && !n.hasRequiredAttrs()) return n;
        }
        return null;
      }
      const u = (e, t) => {
        let { $head: n, $anchor: r } = e.selection;
        if (!n.parent.type.spec.code || !n.sameParent(r)) return !1;
        let i = n.node(-1),
          s = n.indexAfter(-1),
          l = p(i.contentMatchAt(s));
        if (!l || !i.canReplaceWith(s, s, l)) return !1;
        if (t) {
          let r = n.after(),
            i = e.tr.replaceWith(r, r, l.createAndFill());
          i.setSelection(o.Y1.near(i.doc.resolve(r), 1)), t(i.scrollIntoView());
        }
        return !0;
      };
      const f = (e, t) => {
        let { $from: n, $to: i } = e.selection;
        if (e.selection instanceof o.qv && e.selection.node.isBlock)
          return !(
            !n.parentOffset ||
            !(0, r.Ax)(e.doc, n.pos) ||
            (t && t(e.tr.split(n.pos).scrollIntoView()), 0)
          );
        if (!n.parent.isBlock) return !1;
        if (t) {
          let s = i.parentOffset == i.parent.content.size,
            l = e.tr;
          (e.selection instanceof o.Bs || e.selection instanceof o.C1) &&
            l.deleteSelection();
          let a =
              0 == n.depth
                ? null
                : p(n.node(-1).contentMatchAt(n.indexAfter(-1))),
            h = m && m(i.parent, s),
            c = h ? [h] : s && a ? [{ type: a }] : void 0,
            d = (0, r.Ax)(l.doc, l.mapping.map(n.pos), 1, c);
          if (
            (c ||
              d ||
              !(0, r.Ax)(
                l.doc,
                l.mapping.map(n.pos),
                1,
                a ? [{ type: a }] : void 0,
              ) ||
              (a && (c = [{ type: a }]), (d = !0)),
            d &&
              (l.split(l.mapping.map(n.pos), 1, c),
              !s && !n.parentOffset && n.parent.type != a))
          ) {
            let e = l.mapping.map(n.before()),
              t = l.doc.resolve(e);
            a &&
              n.node(-1).canReplaceWith(t.index(), t.index() + 1, a) &&
              l.setNodeMarkup(l.mapping.map(n.before()), a);
          }
          t(l.scrollIntoView());
        }
        return !0;
      };
      var m;
      function g(e, t, n) {
        let s,
          l,
          h = t.nodeBefore,
          c = t.nodeAfter;
        if (h.type.spec.isolating || c.type.spec.isolating) return !1;
        if (
          (function (e, t, n) {
            let i = t.nodeBefore,
              o = t.nodeAfter,
              s = t.index();
            return !(
              !(i && o && i.type.compatibleContent(o.type)) ||
              (!i.content.size && t.parent.canReplace(s - 1, s)
                ? (n &&
                    n(e.tr.delete(t.pos - i.nodeSize, t.pos).scrollIntoView()),
                  0)
                : !t.parent.canReplace(s, s + 1) ||
                  (!o.isTextblock && !(0, r.Mn)(e.doc, t.pos)) ||
                  (n &&
                    n(
                      e.tr
                        .clearIncompatible(
                          t.pos,
                          i.type,
                          i.contentMatchAt(i.childCount),
                        )
                        .join(t.pos)
                        .scrollIntoView(),
                    ),
                  0))
            );
          })(e, t, n)
        )
          return !0;
        let d = t.parent.canReplace(t.index(), t.index() + 1);
        if (
          d &&
          (s = (l = h.contentMatchAt(h.childCount)).findWrapping(c.type)) &&
          l.matchType(s[0] || c.type).validEnd
        ) {
          if (n) {
            let o = t.pos + c.nodeSize,
              l = i.HY.empty;
            for (let e = s.length - 1; e >= 0; e--)
              l = i.HY.from(s[e].create(null, l));
            l = i.HY.from(h.copy(l));
            let a = e.tr.step(
                new r.FC(
                  t.pos - 1,
                  o,
                  t.pos,
                  o,
                  new i.p2(l, 1, 0),
                  s.length,
                  !0,
                ),
              ),
              d = o + 2 * s.length;
            (0, r.Mn)(a.doc, d) && a.join(d), n(a.scrollIntoView());
          }
          return !0;
        }
        let p = o.Y1.findFrom(t, 1),
          u = p && p.$from.blockRange(p.$to),
          f = u && (0, r.k9)(u);
        if (null != f && f >= t.depth)
          return n && n(e.tr.lift(u, f).scrollIntoView()), !0;
        if (d && a(c, "start", !0) && a(h, "end")) {
          let o = h,
            s = [];
          for (; s.push(o), !o.isTextblock; ) o = o.lastChild;
          let l = c,
            a = 1;
          for (; !l.isTextblock; l = l.firstChild) a++;
          if (o.canReplace(o.childCount, o.childCount, l.content)) {
            if (n) {
              let o = i.HY.empty;
              for (let e = s.length - 1; e >= 0; e--)
                o = i.HY.from(s[e].copy(o));
              n(
                e.tr
                  .step(
                    new r.FC(
                      t.pos - s.length,
                      t.pos + c.nodeSize,
                      t.pos + a,
                      t.pos + c.nodeSize - a,
                      new i.p2(o, s.length, 0),
                      0,
                      !0,
                    ),
                  )
                  .scrollIntoView(),
              );
            }
            return !0;
          }
        }
        return !1;
      }
      function y(e) {
        return function (t, n) {
          let r = t.selection,
            i = e < 0 ? r.$from : r.$to,
            s = i.depth;
          for (; i.node(s).isInline; ) {
            if (!s) return !1;
            s--;
          }
          return (
            !!i.node(s).isTextblock &&
            (n &&
              n(
                t.tr.setSelection(
                  o.Bs.create(t.doc, e < 0 ? i.start(s) : i.end(s)),
                ),
              ),
            !0)
          );
        };
      }
      const w = y(-1),
        v = y(1);
      function b(e, t = null) {
        return function (n, r) {
          let i = !1;
          for (let r = 0; r < n.selection.ranges.length && !i; r++) {
            let {
              $from: { pos: o },
              $to: { pos: s },
            } = n.selection.ranges[r];
            n.doc.nodesBetween(o, s, (r, o) => {
              if (i) return !1;
              if (r.isTextblock && !r.hasMarkup(e, t))
                if (r.type == e) i = !0;
                else {
                  let t = n.doc.resolve(o),
                    r = t.index();
                  i = t.parent.canReplaceWith(r, r + 1, e);
                }
            });
          }
          if (!i) return !1;
          if (r) {
            let i = n.tr;
            for (let r = 0; r < n.selection.ranges.length; r++) {
              let {
                $from: { pos: o },
                $to: { pos: s },
              } = n.selection.ranges[r];
              i.setBlockType(o, s, e, t);
            }
            r(i.scrollIntoView());
          }
          return !0;
        };
      }
      function S(e, t = null) {
        return function (n, r) {
          let { empty: i, $cursor: o, ranges: s } = n.selection;
          if (
            (i && !o) ||
            !(function (e, t, n) {
              for (let r = 0; r < t.length; r++) {
                let { $from: i, $to: o } = t[r],
                  s =
                    0 == i.depth && e.inlineContent && e.type.allowsMarkType(n);
                if (
                  (e.nodesBetween(i.pos, o.pos, (e) => {
                    if (s) return !1;
                    s = e.inlineContent && e.type.allowsMarkType(n);
                  }),
                  s)
                )
                  return !0;
              }
              return !1;
            })(n.doc, s, e)
          )
            return !1;
          if (r)
            if (o)
              e.isInSet(n.storedMarks || o.marks())
                ? r(n.tr.removeStoredMark(e))
                : r(n.tr.addStoredMark(e.create(t)));
            else {
              let i = !1,
                o = n.tr;
              for (let t = 0; !i && t < s.length; t++) {
                let { $from: r, $to: o } = s[t];
                i = n.doc.rangeHasMark(r.pos, o.pos, e);
              }
              for (let n = 0; n < s.length; n++) {
                let { $from: r, $to: l } = s[n];
                if (i) o.removeMark(r.pos, l.pos, e);
                else {
                  let n = r.pos,
                    i = l.pos,
                    s = r.nodeAfter,
                    a = l.nodeBefore,
                    h = s && s.isText ? /^\s*/.exec(s.text)[0].length : 0,
                    c = a && a.isText ? /\s*$/.exec(a.text)[0].length : 0;
                  n + h < i && ((n += h), (i -= c)),
                    o.addMark(n, i, e.create(t));
                }
              }
              r(o.scrollIntoView());
            }
          return !0;
        };
      }
      function k(...e) {
        return function (t, n, r) {
          for (let i = 0; i < e.length; i++) if (e[i](t, n, r)) return !0;
          return !1;
        };
      }
      let x = k(
          s,
          (e, t, n) => {
            let s = l(e, n);
            if (!s) return !1;
            let c = h(s);
            if (!c) {
              let n = s.blockRange(),
                i = n && (0, r.k9)(n);
              return (
                null != i && (t && t(e.tr.lift(n, i).scrollIntoView()), !0)
              );
            }
            let d = c.nodeBefore;
            if (!d.type.spec.isolating && g(e, c, t)) return !0;
            if (
              0 == s.parent.content.size &&
              (a(d, "end") || o.qv.isSelectable(d))
            ) {
              let n = (0, r.dR)(e.doc, s.before(), s.after(), i.p2.empty);
              if (n && n.slice.size < n.to - n.from) {
                if (t) {
                  let r = e.tr.step(n);
                  r.setSelection(
                    a(d, "end")
                      ? o.Y1.findFrom(
                          r.doc.resolve(r.mapping.map(c.pos, -1)),
                          -1,
                        )
                      : o.qv.create(r.doc, c.pos - d.nodeSize),
                  ),
                    t(r.scrollIntoView());
                }
                return !0;
              }
            }
            return (
              !(!d.isAtom || c.depth != s.depth - 1) &&
              (t && t(e.tr.delete(c.pos - d.nodeSize, c.pos).scrollIntoView()),
              !0)
            );
          },
          (e, t, n) => {
            let { $head: r, empty: i } = e.selection,
              s = r;
            if (!i) return !1;
            if (r.parent.isTextblock) {
              if (n ? !n.endOfTextblock("backward", e) : r.parentOffset > 0)
                return !1;
              s = h(r);
            }
            let l = s && s.nodeBefore;
            return (
              !(!l || !o.qv.isSelectable(l)) &&
              (t &&
                t(
                  e.tr
                    .setSelection(o.qv.create(e.doc, s.pos - l.nodeSize))
                    .scrollIntoView(),
                ),
              !0)
            );
          },
        ),
        M = k(
          s,
          (e, t, n) => {
            let s = c(e, n);
            if (!s) return !1;
            let l = d(s);
            if (!l) return !1;
            let h = l.nodeAfter;
            if (g(e, l, t)) return !0;
            if (
              0 == s.parent.content.size &&
              (a(h, "start") || o.qv.isSelectable(h))
            ) {
              let n = (0, r.dR)(e.doc, s.before(), s.after(), i.p2.empty);
              if (n && n.slice.size < n.to - n.from) {
                if (t) {
                  let r = e.tr.step(n);
                  r.setSelection(
                    a(h, "start")
                      ? o.Y1.findFrom(r.doc.resolve(r.mapping.map(l.pos)), 1)
                      : o.qv.create(r.doc, r.mapping.map(l.pos)),
                  ),
                    t(r.scrollIntoView());
                }
                return !0;
              }
            }
            return (
              !(!h.isAtom || l.depth != s.depth - 1) &&
              (t && t(e.tr.delete(l.pos, l.pos + h.nodeSize).scrollIntoView()),
              !0)
            );
          },
          (e, t, n) => {
            let { $head: r, empty: i } = e.selection,
              s = r;
            if (!i) return !1;
            if (r.parent.isTextblock) {
              if (
                n
                  ? !n.endOfTextblock("forward", e)
                  : r.parentOffset < r.parent.content.size
              )
                return !1;
              s = d(r);
            }
            let l = s && s.nodeAfter;
            return (
              !(!l || !o.qv.isSelectable(l)) &&
              (t &&
                t(
                  e.tr.setSelection(o.qv.create(e.doc, s.pos)).scrollIntoView(),
                ),
              !0)
            );
          },
        );
      const C = {
          Enter: k(
            (e, t) => {
              let { $head: n, $anchor: r } = e.selection;
              return (
                !(!n.parent.type.spec.code || !n.sameParent(r)) &&
                (t && t(e.tr.insertText("\n").scrollIntoView()), !0)
              );
            },
            (e, t) => {
              let n = e.selection,
                { $from: r, $to: i } = n;
              if (
                n instanceof o.C1 ||
                r.parent.inlineContent ||
                i.parent.inlineContent
              )
                return !1;
              let s = p(i.parent.contentMatchAt(i.indexAfter()));
              if (!s || !s.isTextblock) return !1;
              if (t) {
                let n = (
                    !r.parentOffset && i.index() < i.parent.childCount ? r : i
                  ).pos,
                  l = e.tr.insert(n, s.createAndFill());
                l.setSelection(o.Bs.create(l.doc, n + 1)),
                  t(l.scrollIntoView());
              }
              return !0;
            },
            (e, t) => {
              let { $cursor: n } = e.selection;
              if (!n || n.parent.content.size) return !1;
              if (n.depth > 1 && n.after() != n.end(-1)) {
                let i = n.before();
                if ((0, r.Ax)(e.doc, i))
                  return t && t(e.tr.split(i).scrollIntoView()), !0;
              }
              let i = n.blockRange(),
                o = i && (0, r.k9)(i);
              return (
                null != o && (t && t(e.tr.lift(i, o).scrollIntoView()), !0)
              );
            },
            f,
          ),
          "Mod-Enter": u,
          Backspace: x,
          "Mod-Backspace": x,
          "Shift-Backspace": x,
          Delete: M,
          "Mod-Delete": M,
          "Mod-a": (e, t) => (t && t(e.tr.setSelection(new o.C1(e.doc))), !0),
        },
        O = {
          "Ctrl-h": C.Backspace,
          "Alt-Backspace": C["Mod-Backspace"],
          "Ctrl-d": C.Delete,
          "Ctrl-Alt-Backspace": C["Mod-Delete"],
          "Alt-Delete": C["Mod-Delete"],
          "Alt-d": C["Mod-Delete"],
          "Ctrl-a": w,
          "Ctrl-e": v,
        };
      for (let e in C) O[e] = C[e];
      const N = (
        "undefined" != typeof navigator
          ? /Mac|iP(hone|[oa]d)/.test(navigator.platform)
          : !("undefined" == typeof os || !os.platform) &&
            "darwin" == os.platform()
      )
        ? O
        : C;
    },
    31458: (e, t, n) => {
      n.d(t, {
        m8: () => k,
        KX: () => M,
        AH: () => O,
        Yw: () => x,
        of: () => C,
      });
      var r = 200,
        i = function () {};
      (i.prototype.append = function (e) {
        return e.length
          ? ((e = i.from(e)),
            (!this.length && e) ||
              (e.length < r && this.leafAppend(e)) ||
              (this.length < r && e.leafPrepend(this)) ||
              this.appendInner(e))
          : this;
      }),
        (i.prototype.prepend = function (e) {
          return e.length ? i.from(e).append(this) : this;
        }),
        (i.prototype.appendInner = function (e) {
          return new s(this, e);
        }),
        (i.prototype.slice = function (e, t) {
          return (
            void 0 === e && (e = 0),
            void 0 === t && (t = this.length),
            e >= t
              ? i.empty
              : this.sliceInner(Math.max(0, e), Math.min(this.length, t))
          );
        }),
        (i.prototype.get = function (e) {
          if (!(e < 0 || e >= this.length)) return this.getInner(e);
        }),
        (i.prototype.forEach = function (e, t, n) {
          void 0 === t && (t = 0),
            void 0 === n && (n = this.length),
            t <= n
              ? this.forEachInner(e, t, n, 0)
              : this.forEachInvertedInner(e, t, n, 0);
        }),
        (i.prototype.map = function (e, t, n) {
          void 0 === t && (t = 0), void 0 === n && (n = this.length);
          var r = [];
          return (
            this.forEach(
              function (t, n) {
                return r.push(e(t, n));
              },
              t,
              n,
            ),
            r
          );
        }),
        (i.from = function (e) {
          return e instanceof i ? e : e && e.length ? new o(e) : i.empty;
        });
      var o = (function (e) {
        function t(t) {
          e.call(this), (this.values = t);
        }
        e && (t.__proto__ = e),
          (t.prototype = Object.create(e && e.prototype)),
          (t.prototype.constructor = t);
        var n = { length: { configurable: !0 }, depth: { configurable: !0 } };
        return (
          (t.prototype.flatten = function () {
            return this.values;
          }),
          (t.prototype.sliceInner = function (e, n) {
            return 0 == e && n == this.length
              ? this
              : new t(this.values.slice(e, n));
          }),
          (t.prototype.getInner = function (e) {
            return this.values[e];
          }),
          (t.prototype.forEachInner = function (e, t, n, r) {
            for (var i = t; i < n; i++)
              if (!1 === e(this.values[i], r + i)) return !1;
          }),
          (t.prototype.forEachInvertedInner = function (e, t, n, r) {
            for (var i = t - 1; i >= n; i--)
              if (!1 === e(this.values[i], r + i)) return !1;
          }),
          (t.prototype.leafAppend = function (e) {
            if (this.length + e.length <= r)
              return new t(this.values.concat(e.flatten()));
          }),
          (t.prototype.leafPrepend = function (e) {
            if (this.length + e.length <= r)
              return new t(e.flatten().concat(this.values));
          }),
          (n.length.get = function () {
            return this.values.length;
          }),
          (n.depth.get = function () {
            return 0;
          }),
          Object.defineProperties(t.prototype, n),
          t
        );
      })(i);
      i.empty = new o([]);
      var s = (function (e) {
        function t(t, n) {
          e.call(this),
            (this.left = t),
            (this.right = n),
            (this.length = t.length + n.length),
            (this.depth = Math.max(t.depth, n.depth) + 1);
        }
        return (
          e && (t.__proto__ = e),
          (t.prototype = Object.create(e && e.prototype)),
          (t.prototype.constructor = t),
          (t.prototype.flatten = function () {
            return this.left.flatten().concat(this.right.flatten());
          }),
          (t.prototype.getInner = function (e) {
            return e < this.left.length
              ? this.left.get(e)
              : this.right.get(e - this.left.length);
          }),
          (t.prototype.forEachInner = function (e, t, n, r) {
            var i = this.left.length;
            return (
              !(
                t < i && !1 === this.left.forEachInner(e, t, Math.min(n, i), r)
              ) &&
              !(
                n > i &&
                !1 ===
                  this.right.forEachInner(
                    e,
                    Math.max(t - i, 0),
                    Math.min(this.length, n) - i,
                    r + i,
                  )
              ) &&
              void 0
            );
          }),
          (t.prototype.forEachInvertedInner = function (e, t, n, r) {
            var i = this.left.length;
            return (
              !(
                t > i &&
                !1 ===
                  this.right.forEachInvertedInner(
                    e,
                    t - i,
                    Math.max(n, i) - i,
                    r + i,
                  )
              ) &&
              !(
                n < i &&
                !1 === this.left.forEachInvertedInner(e, Math.min(t, i), n, r)
              ) &&
              void 0
            );
          }),
          (t.prototype.sliceInner = function (e, t) {
            if (0 == e && t == this.length) return this;
            var n = this.left.length;
            return t <= n
              ? this.left.slice(e, t)
              : e >= n
                ? this.right.slice(e - n, t - n)
                : this.left.slice(e, n).append(this.right.slice(0, t - n));
          }),
          (t.prototype.leafAppend = function (e) {
            var n = this.right.leafAppend(e);
            if (n) return new t(this.left, n);
          }),
          (t.prototype.leafPrepend = function (e) {
            var n = this.left.leafPrepend(e);
            if (n) return new t(n, this.right);
          }),
          (t.prototype.appendInner = function (e) {
            return this.left.depth >= Math.max(this.right.depth, e.depth) + 1
              ? new t(this.left, new t(this.right, e))
              : new t(this, e);
          }),
          t
        );
      })(i);
      const l = i;
      var a = n(42513),
        h = n(4005);
      class c {
        constructor(e, t) {
          (this.items = e), (this.eventCount = t);
        }
        popEvent(e, t) {
          if (0 == this.eventCount) return null;
          let n,
            r,
            i = this.items.length;
          for (; ; i--) {
            if (this.items.get(i - 1).selection) {
              --i;
              break;
            }
          }
          t &&
            ((n = this.remapping(i, this.items.length)), (r = n.maps.length));
          let o,
            s,
            l = e.tr,
            a = [],
            h = [];
          return (
            this.items.forEach(
              (e, t) => {
                if (!e.step)
                  return (
                    n || ((n = this.remapping(i, t + 1)), (r = n.maps.length)),
                    r--,
                    void h.push(e)
                  );
                if (n) {
                  h.push(new d(e.map));
                  let t,
                    i = e.step.map(n.slice(r));
                  i &&
                    l.maybeStep(i).doc &&
                    ((t = l.mapping.maps[l.mapping.maps.length - 1]),
                    a.push(new d(t, void 0, void 0, a.length + h.length))),
                    r--,
                    t && n.appendMap(t, r);
                } else l.maybeStep(e.step);
                return e.selection
                  ? ((o = n ? e.selection.map(n.slice(r)) : e.selection),
                    (s = new c(
                      this.items.slice(0, i).append(h.reverse().concat(a)),
                      this.eventCount - 1,
                    )),
                    !1)
                  : void 0;
              },
              this.items.length,
              0,
            ),
            { remaining: s, transform: l, selection: o }
          );
        }
        addTransform(e, t, n, r) {
          let i = [],
            o = this.eventCount,
            s = this.items,
            l = !r && s.length ? s.get(s.length - 1) : null;
          for (let n = 0; n < e.steps.length; n++) {
            let a,
              h = e.steps[n].invert(e.docs[n]),
              c = new d(e.mapping.maps[n], h, t);
            (a = l && l.merge(c)) &&
              ((c = a), n ? i.pop() : (s = s.slice(0, s.length - 1))),
              i.push(c),
              t && (o++, (t = void 0)),
              r || (l = c);
          }
          let a = o - n.depth;
          return (
            a > u &&
              ((s = (function (e, t) {
                let n;
                return (
                  e.forEach((e, r) => {
                    if (e.selection && 0 == t--) return (n = r), !1;
                  }),
                  e.slice(n)
                );
              })(s, a)),
              (o -= a)),
            new c(s.append(i), o)
          );
        }
        remapping(e, t) {
          let n = new a.vs();
          return (
            this.items.forEach(
              (t, r) => {
                let i =
                  null != t.mirrorOffset && r - t.mirrorOffset >= e
                    ? n.maps.length - t.mirrorOffset
                    : void 0;
                n.appendMap(t.map, i);
              },
              e,
              t,
            ),
            n
          );
        }
        addMaps(e) {
          return 0 == this.eventCount
            ? this
            : new c(this.items.append(e.map((e) => new d(e))), this.eventCount);
        }
        rebased(e, t) {
          if (!this.eventCount) return this;
          let n = [],
            r = Math.max(0, this.items.length - t),
            i = e.mapping,
            o = e.steps.length,
            s = this.eventCount;
          this.items.forEach((e) => {
            e.selection && s--;
          }, r);
          let l = t;
          this.items.forEach((t) => {
            let r = i.getMirror(--l);
            if (null == r) return;
            o = Math.min(o, r);
            let a = i.maps[r];
            if (t.step) {
              let o = e.steps[r].invert(e.docs[r]),
                h = t.selection && t.selection.map(i.slice(l + 1, r));
              h && s++, n.push(new d(a, o, h));
            } else n.push(new d(a));
          }, r);
          let a = [];
          for (let e = t; e < o; e++) a.push(new d(i.maps[e]));
          let h = this.items.slice(0, r).append(a).append(n),
            p = new c(h, s);
          return (
            p.emptyItemCount() > 500 &&
              (p = p.compress(this.items.length - n.length)),
            p
          );
        }
        emptyItemCount() {
          let e = 0;
          return (
            this.items.forEach((t) => {
              t.step || e++;
            }),
            e
          );
        }
        compress(e = this.items.length) {
          let t = this.remapping(0, e),
            n = t.maps.length,
            r = [],
            i = 0;
          return (
            this.items.forEach(
              (o, s) => {
                if (s >= e) r.push(o), o.selection && i++;
                else if (o.step) {
                  let e = o.step.map(t.slice(n)),
                    s = e && e.getMap();
                  if ((n--, s && t.appendMap(s, n), e)) {
                    let l = o.selection && o.selection.map(t.slice(n));
                    l && i++;
                    let a,
                      h = new d(s.invert(), e, l),
                      c = r.length - 1;
                    (a = r.length && r[c].merge(h)) ? (r[c] = a) : r.push(h);
                  }
                } else o.map && n--;
              },
              this.items.length,
              0,
            ),
            new c(l.from(r.reverse()), i)
          );
        }
      }
      c.empty = new c(l.empty, 0);
      class d {
        constructor(e, t, n, r) {
          (this.map = e),
            (this.step = t),
            (this.selection = n),
            (this.mirrorOffset = r);
        }
        merge(e) {
          if (this.step && e.step && !e.selection) {
            let t = e.step.merge(this.step);
            if (t) return new d(t.getMap().invert(), t, this.selection);
          }
        }
      }
      class p {
        constructor(e, t, n, r, i) {
          (this.done = e),
            (this.undone = t),
            (this.prevRanges = n),
            (this.prevTime = r),
            (this.prevComposition = i);
        }
      }
      const u = 20;
      function f(e) {
        let t = [];
        return e.forEach((e, n, r, i) => t.push(r, i)), t;
      }
      function m(e, t) {
        if (!e) return null;
        let n = [];
        for (let r = 0; r < e.length; r += 2) {
          let i = t.map(e[r], 1),
            o = t.map(e[r + 1], -1);
          i <= o && n.push(i, o);
        }
        return n;
      }
      function g(e, t, n, r) {
        let i = v(t),
          o = b.get(t).spec.config,
          s = (r ? e.undone : e.done).popEvent(t, i);
        if (!s) return;
        let l = s.selection.resolve(s.transform.doc),
          a = (r ? e.done : e.undone).addTransform(
            s.transform,
            t.selection.getBookmark(),
            o,
            i,
          ),
          h = new p(r ? a : s.remaining, r ? s.remaining : a, null, 0, -1);
        n(
          s.transform
            .setSelection(l)
            .setMeta(b, { redo: r, historyState: h })
            .scrollIntoView(),
        );
      }
      let y = !1,
        w = null;
      function v(e) {
        let t = e.plugins;
        if (w != t) {
          (y = !1), (w = t);
          for (let e = 0; e < t.length; e++)
            if (t[e].spec.historyPreserveItems) {
              y = !0;
              break;
            }
        }
        return y;
      }
      const b = new h.H$("history"),
        S = new h.H$("closeHistory");
      function k(e = {}) {
        return (
          (e = {
            depth: e.depth || 100,
            newGroupDelay: e.newGroupDelay || 500,
          }),
          new h.Sy({
            key: b,
            state: {
              init: () => new p(c.empty, c.empty, null, 0, -1),
              apply: (t, n, r) =>
                (function (e, t, n, r) {
                  let i,
                    o = n.getMeta(b);
                  if (o) return o.historyState;
                  n.getMeta(S) && (e = new p(e.done, e.undone, null, 0, -1));
                  let s = n.getMeta("appendedTransaction");
                  if (0 == n.steps.length) return e;
                  if (s && s.getMeta(b))
                    return s.getMeta(b).redo
                      ? new p(
                          e.done.addTransform(n, void 0, r, v(t)),
                          e.undone,
                          f(n.mapping.maps[n.steps.length - 1]),
                          e.prevTime,
                          e.prevComposition,
                        )
                      : new p(
                          e.done,
                          e.undone.addTransform(n, void 0, r, v(t)),
                          null,
                          e.prevTime,
                          e.prevComposition,
                        );
                  if (
                    !1 === n.getMeta("addToHistory") ||
                    (s && !1 === s.getMeta("addToHistory"))
                  )
                    return (i = n.getMeta("rebased"))
                      ? new p(
                          e.done.rebased(n, i),
                          e.undone.rebased(n, i),
                          m(e.prevRanges, n.mapping),
                          e.prevTime,
                          e.prevComposition,
                        )
                      : new p(
                          e.done.addMaps(n.mapping.maps),
                          e.undone.addMaps(n.mapping.maps),
                          m(e.prevRanges, n.mapping),
                          e.prevTime,
                          e.prevComposition,
                        );
                  {
                    let i = n.getMeta("composition"),
                      o =
                        0 == e.prevTime ||
                        (!s &&
                          e.prevComposition != i &&
                          (e.prevTime < (n.time || 0) - r.newGroupDelay ||
                            !(function (e, t) {
                              if (!t) return !1;
                              if (!e.docChanged) return !0;
                              let n = !1;
                              return (
                                e.mapping.maps[0].forEach((e, r) => {
                                  for (let i = 0; i < t.length; i += 2)
                                    e <= t[i + 1] && r >= t[i] && (n = !0);
                                }),
                                n
                              );
                            })(n, e.prevRanges))),
                      l = s
                        ? m(e.prevRanges, n.mapping)
                        : f(n.mapping.maps[n.steps.length - 1]);
                    return new p(
                      e.done.addTransform(
                        n,
                        o ? t.selection.getBookmark() : void 0,
                        r,
                        v(t),
                      ),
                      c.empty,
                      l,
                      n.time,
                      null == i ? e.prevComposition : i,
                    );
                  }
                })(n, r, t, e),
            },
            config: e,
            props: {
              handleDOMEvents: {
                beforeinput(e, t) {
                  let n = t.inputType,
                    r = "historyUndo" == n ? x : "historyRedo" == n ? M : null;
                  return !!r && (t.preventDefault(), r(e.state, e.dispatch));
                },
              },
            },
          })
        );
      }
      const x = (e, t) => {
          let n = b.getState(e);
          return !(!n || 0 == n.done.eventCount) && (t && g(n, e, t, !1), !0);
        },
        M = (e, t) => {
          let n = b.getState(e);
          return !(!n || 0 == n.undone.eventCount) && (t && g(n, e, t, !0), !0);
        };
      function C(e) {
        let t = b.getState(e);
        return t ? t.done.eventCount : 0;
      }
      function O(e) {
        let t = b.getState(e);
        return t ? t.undone.eventCount : 0;
      }
    },
    26682: (e, t, n) => {
      n.d(t, {
        Hw: () => l,
        S0: () => c,
        VK: () => o,
        dU: () => h,
        zK: () => d,
      });
      var r = n(4005),
        i = n(42513);
      class o {
        constructor(e, t, n = {}) {
          var r;
          (this.match = e),
            (this.match = e),
            (this.handler =
              "string" == typeof t
                ? ((r = t),
                  function (e, t, n, i) {
                    let o = r;
                    if (t[1]) {
                      let e = t[0].lastIndexOf(t[1]);
                      o += t[0].slice(e + t[1].length);
                      let r = (n += e) - i;
                      r > 0 && ((o = t[0].slice(e - r, e) + o), (n = i));
                    }
                    return e.tr.insertText(o, n, i);
                  })
                : t),
            (this.undoable = !1 !== n.undoable);
        }
      }
      const s = 500;
      function l({ rules: e }) {
        let t = new r.Sy({
          state: {
            init: () => null,
            apply(e, t) {
              let n = e.getMeta(this);
              return n || (e.selectionSet || e.docChanged ? null : t);
            },
          },
          props: {
            handleTextInput: (n, r, i, o) => a(n, r, i, o, e, t),
            handleDOMEvents: {
              compositionend: (n) => {
                setTimeout(() => {
                  let { $cursor: r } = n.state.selection;
                  r && a(n, r.pos, r.pos, "", e, t);
                });
              },
            },
          },
          isInputRules: !0,
        });
        return t;
      }
      function a(e, t, n, r, i, o) {
        if (e.composing) return !1;
        let l = e.state,
          a = l.doc.resolve(t);
        if (a.parent.type.spec.code) return !1;
        let h =
          a.parent.textBetween(
            Math.max(0, a.parentOffset - s),
            a.parentOffset,
            null,
            "￼",
          ) + r;
        for (let s = 0; s < i.length; s++) {
          let a = i[s],
            c = a.match.exec(h),
            d = c && a.handler(l, c, t - (c[0].length - r.length), n);
          if (d)
            return (
              a.undoable &&
                d.setMeta(o, { transform: d, from: t, to: n, text: r }),
              e.dispatch(d),
              !0
            );
        }
        return !1;
      }
      const h = (e, t) => {
        let n = e.plugins;
        for (let r = 0; r < n.length; r++) {
          let i,
            o = n[r];
          if (o.spec.isInputRules && (i = o.getState(e))) {
            if (t) {
              let n = e.tr,
                r = i.transform;
              for (let e = r.steps.length - 1; e >= 0; e--)
                n.step(r.steps[e].invert(r.docs[e]));
              if (i.text) {
                let t = n.doc.resolve(i.from).marks();
                n.replaceWith(i.from, i.to, e.schema.text(i.text, t));
              } else n.delete(i.from, i.to);
              t(n);
            }
            return !0;
          }
        }
        return !1;
      };
      new o(/--$/, "—"),
        new o(/\.\.\.$/, "…"),
        new o(/(?:^|[\s\{\[\(\<'"\u2018\u201C])(")$/, "“"),
        new o(/"$/, "”"),
        new o(/(?:^|[\s\{\[\(\<'"\u2018\u201C])(')$/, "‘"),
        new o(/'$/, "’");
      function c(e, t, n = null, r) {
        return new o(e, (e, o, s, l) => {
          let a = n instanceof Function ? n(o) : n,
            h = e.tr.delete(s, l),
            c = h.doc.resolve(s).blockRange(),
            d = c && (0, i.nd)(c, t, a);
          if (!d) return null;
          h.wrap(c, d);
          let p = h.doc.resolve(s - 1).nodeBefore;
          return (
            p &&
              p.type == t &&
              (0, i.Mn)(h.doc, s - 1) &&
              (!r || r(o, p)) &&
              h.join(s - 1),
            h
          );
        });
      }
      function d(e, t, n = null) {
        return new o(e, (e, r, i, o) => {
          let s = e.doc.resolve(i),
            l = n instanceof Function ? n(r) : n;
          return s.node(-1).canReplaceWith(s.index(-1), s.indexAfter(-1), t)
            ? e.tr.delete(i, o).setBlockType(i, i, t, l)
            : null;
        });
      }
    },
    62209: (e, t, n) => {
      n.d(t, { h: () => u });
      for (
        var r = {
            8: "Backspace",
            9: "Tab",
            10: "Enter",
            12: "NumLock",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            44: "PrintScreen",
            45: "Insert",
            46: "Delete",
            59: ";",
            61: "=",
            91: "Meta",
            92: "Meta",
            106: "*",
            107: "+",
            108: ",",
            109: "-",
            110: ".",
            111: "/",
            144: "NumLock",
            145: "ScrollLock",
            160: "Shift",
            161: "Shift",
            162: "Control",
            163: "Control",
            164: "Alt",
            165: "Alt",
            173: "-",
            186: ";",
            187: "=",
            188: ",",
            189: "-",
            190: ".",
            191: "/",
            192: "`",
            219: "[",
            220: "\\",
            221: "]",
            222: "'",
          },
          i = {
            48: ")",
            49: "!",
            50: "@",
            51: "#",
            52: "$",
            53: "%",
            54: "^",
            55: "&",
            56: "*",
            57: "(",
            59: ":",
            61: "+",
            173: "_",
            186: ":",
            187: "+",
            188: "<",
            189: "_",
            190: ">",
            191: "?",
            192: "~",
            219: "{",
            220: "|",
            221: "}",
            222: '"',
          },
          o = "undefined" != typeof navigator && /Mac/.test(navigator.platform),
          s =
            "undefined" != typeof navigator &&
            /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(
              navigator.userAgent,
            ),
          l = 0;
        l < 10;
        l++
      )
        r[48 + l] = r[96 + l] = String(l);
      for (l = 1; l <= 24; l++) r[l + 111] = "F" + l;
      for (l = 65; l <= 90; l++)
        (r[l] = String.fromCharCode(l + 32)), (i[l] = String.fromCharCode(l));
      for (var a in r) i.hasOwnProperty(a) || (i[a] = r[a]);
      var h = n(4005);
      const c =
        "undefined" != typeof navigator &&
        /Mac|iP(hone|[oa]d)/.test(navigator.platform);
      function d(e) {
        let t,
          n,
          r,
          i,
          o = e.split(/-(?!$)/),
          s = o[o.length - 1];
        "Space" == s && (s = " ");
        for (let e = 0; e < o.length - 1; e++) {
          let s = o[e];
          if (/^(cmd|meta|m)$/i.test(s)) i = !0;
          else if (/^a(lt)?$/i.test(s)) t = !0;
          else if (/^(c|ctrl|control)$/i.test(s)) n = !0;
          else if (/^s(hift)?$/i.test(s)) r = !0;
          else {
            if (!/^mod$/i.test(s))
              throw new Error("Unrecognized modifier name: " + s);
            c ? (i = !0) : (n = !0);
          }
        }
        return (
          t && (s = "Alt-" + s),
          n && (s = "Ctrl-" + s),
          i && (s = "Meta-" + s),
          r && (s = "Shift-" + s),
          s
        );
      }
      function p(e, t, n = !0) {
        return (
          t.altKey && (e = "Alt-" + e),
          t.ctrlKey && (e = "Ctrl-" + e),
          t.metaKey && (e = "Meta-" + e),
          n && t.shiftKey && (e = "Shift-" + e),
          e
        );
      }
      function u(e) {
        return new h.Sy({ props: { handleKeyDown: f(e) } });
      }
      function f(e) {
        let t = (function (e) {
          let t = Object.create(null);
          for (let n in e) t[d(n)] = e[n];
          return t;
        })(e);
        return function (e, n) {
          let l,
            a = (function (e) {
              var t =
                (!(
                  (o && e.metaKey && e.shiftKey && !e.ctrlKey && !e.altKey) ||
                  (s && e.shiftKey && e.key && 1 == e.key.length) ||
                  "Unidentified" == e.key
                ) &&
                  e.key) ||
                (e.shiftKey ? i : r)[e.keyCode] ||
                e.key ||
                "Unidentified";
              return (
                "Esc" == t && (t = "Escape"),
                "Del" == t && (t = "Delete"),
                "Left" == t && (t = "ArrowLeft"),
                "Up" == t && (t = "ArrowUp"),
                "Right" == t && (t = "ArrowRight"),
                "Down" == t && (t = "ArrowDown"),
                t
              );
            })(n),
            h = t[p(a, n)];
          if (h && h(e.state, e.dispatch, e)) return !0;
          if (1 == a.length && " " != a) {
            if (n.shiftKey) {
              let r = t[p(a, n, !1)];
              if (r && r(e.state, e.dispatch, e)) return !0;
            }
            if (
              (n.shiftKey || n.altKey || n.metaKey || a.charCodeAt(0) > 127) &&
              (l = r[n.keyCode]) &&
              l != a
            ) {
              let r = t[p(l, n)];
              if (r && r(e.state, e.dispatch, e)) return !0;
            }
          }
          return !1;
        };
      }
    },
    23126: (e, t, n) => {
      function r(e) {
        this.content = e;
      }
      n.d(t, {
        aw: () => X,
        PW: () => le,
        HY: () => l,
        vc: () => d,
        ZU: () => K,
        NB: () => B,
        Ts: () => D,
        e4: () => p,
        V_: () => U,
        p2: () => u,
      }),
        (r.prototype = {
          constructor: r,
          find: function (e) {
            for (var t = 0; t < this.content.length; t += 2)
              if (this.content[t] === e) return t;
            return -1;
          },
          get: function (e) {
            var t = this.find(e);
            return -1 == t ? void 0 : this.content[t + 1];
          },
          update: function (e, t, n) {
            var i = n && n != e ? this.remove(n) : this,
              o = i.find(e),
              s = i.content.slice();
            return (
              -1 == o ? s.push(n || e, t) : ((s[o + 1] = t), n && (s[o] = n)),
              new r(s)
            );
          },
          remove: function (e) {
            var t = this.find(e);
            if (-1 == t) return this;
            var n = this.content.slice();
            return n.splice(t, 2), new r(n);
          },
          addToStart: function (e, t) {
            return new r([e, t].concat(this.remove(e).content));
          },
          addToEnd: function (e, t) {
            var n = this.remove(e).content.slice();
            return n.push(e, t), new r(n);
          },
          addBefore: function (e, t, n) {
            var i = this.remove(t),
              o = i.content.slice(),
              s = i.find(e);
            return o.splice(-1 == s ? o.length : s, 0, t, n), new r(o);
          },
          forEach: function (e) {
            for (var t = 0; t < this.content.length; t += 2)
              e(this.content[t], this.content[t + 1]);
          },
          prepend: function (e) {
            return (e = r.from(e)).size
              ? new r(e.content.concat(this.subtract(e).content))
              : this;
          },
          append: function (e) {
            return (e = r.from(e)).size
              ? new r(this.subtract(e).content.concat(e.content))
              : this;
          },
          subtract: function (e) {
            var t = this;
            e = r.from(e);
            for (var n = 0; n < e.content.length; n += 2)
              t = t.remove(e.content[n]);
            return t;
          },
          toObject: function () {
            var e = {};
            return (
              this.forEach(function (t, n) {
                e[t] = n;
              }),
              e
            );
          },
          get size() {
            return this.content.length >> 1;
          },
        }),
        (r.from = function (e) {
          if (e instanceof r) return e;
          var t = [];
          if (e) for (var n in e) t.push(n, e[n]);
          return new r(t);
        });
      const i = r;
      function o(e, t, n) {
        for (let r = 0; ; r++) {
          if (r == e.childCount || r == t.childCount)
            return e.childCount == t.childCount ? null : n;
          let i = e.child(r),
            s = t.child(r);
          if (i != s) {
            if (!i.sameMarkup(s)) return n;
            if (i.isText && i.text != s.text) {
              for (let e = 0; i.text[e] == s.text[e]; e++) n++;
              return n;
            }
            if (i.content.size || s.content.size) {
              let e = o(i.content, s.content, n + 1);
              if (null != e) return e;
            }
            n += i.nodeSize;
          } else n += i.nodeSize;
        }
      }
      function s(e, t, n, r) {
        for (let i = e.childCount, o = t.childCount; ; ) {
          if (0 == i || 0 == o) return i == o ? null : { a: n, b: r };
          let l = e.child(--i),
            a = t.child(--o),
            h = l.nodeSize;
          if (l != a) {
            if (!l.sameMarkup(a)) return { a: n, b: r };
            if (l.isText && l.text != a.text) {
              let e = 0,
                t = Math.min(l.text.length, a.text.length);
              for (
                ;
                e < t &&
                l.text[l.text.length - e - 1] == a.text[a.text.length - e - 1];

              )
                e++, n--, r--;
              return { a: n, b: r };
            }
            if (l.content.size || a.content.size) {
              let e = s(l.content, a.content, n - 1, r - 1);
              if (e) return e;
            }
            (n -= h), (r -= h);
          } else (n -= h), (r -= h);
        }
      }
      class l {
        constructor(e, t) {
          if (((this.content = e), (this.size = t || 0), null == t))
            for (let t = 0; t < e.length; t++) this.size += e[t].nodeSize;
        }
        nodesBetween(e, t, n, r = 0, i) {
          for (let o = 0, s = 0; s < t; o++) {
            let l = this.content[o],
              a = s + l.nodeSize;
            if (a > e && !1 !== n(l, r + s, i || null, o) && l.content.size) {
              let i = s + 1;
              l.nodesBetween(
                Math.max(0, e - i),
                Math.min(l.content.size, t - i),
                n,
                r + i,
              );
            }
            s = a;
          }
        }
        descendants(e) {
          this.nodesBetween(0, this.size, e);
        }
        textBetween(e, t, n, r) {
          let i = "",
            o = !0;
          return (
            this.nodesBetween(
              e,
              t,
              (s, l) => {
                let a = s.isText
                  ? s.text.slice(Math.max(e, l) - l, t - l)
                  : s.isLeaf
                    ? r
                      ? "function" == typeof r
                        ? r(s)
                        : r
                      : s.type.spec.leafText
                        ? s.type.spec.leafText(s)
                        : ""
                    : "";
                s.isBlock &&
                  ((s.isLeaf && a) || s.isTextblock) &&
                  n &&
                  (o ? (o = !1) : (i += n)),
                  (i += a);
              },
              0,
            ),
            i
          );
        }
        append(e) {
          if (!e.size) return this;
          if (!this.size) return e;
          let t = this.lastChild,
            n = e.firstChild,
            r = this.content.slice(),
            i = 0;
          for (
            t.isText &&
            t.sameMarkup(n) &&
            ((r[r.length - 1] = t.withText(t.text + n.text)), (i = 1));
            i < e.content.length;
            i++
          )
            r.push(e.content[i]);
          return new l(r, this.size + e.size);
        }
        cut(e, t = this.size) {
          if (0 == e && t == this.size) return this;
          let n = [],
            r = 0;
          if (t > e)
            for (let i = 0, o = 0; o < t; i++) {
              let s = this.content[i],
                l = o + s.nodeSize;
              l > e &&
                ((o < e || l > t) &&
                  (s = s.isText
                    ? s.cut(Math.max(0, e - o), Math.min(s.text.length, t - o))
                    : s.cut(
                        Math.max(0, e - o - 1),
                        Math.min(s.content.size, t - o - 1),
                      )),
                n.push(s),
                (r += s.nodeSize)),
                (o = l);
            }
          return new l(n, r);
        }
        cutByIndex(e, t) {
          return e == t
            ? l.empty
            : 0 == e && t == this.content.length
              ? this
              : new l(this.content.slice(e, t));
        }
        replaceChild(e, t) {
          let n = this.content[e];
          if (n == t) return this;
          let r = this.content.slice(),
            i = this.size + t.nodeSize - n.nodeSize;
          return (r[e] = t), new l(r, i);
        }
        addToStart(e) {
          return new l([e].concat(this.content), this.size + e.nodeSize);
        }
        addToEnd(e) {
          return new l(this.content.concat(e), this.size + e.nodeSize);
        }
        eq(e) {
          if (this.content.length != e.content.length) return !1;
          for (let t = 0; t < this.content.length; t++)
            if (!this.content[t].eq(e.content[t])) return !1;
          return !0;
        }
        get firstChild() {
          return this.content.length ? this.content[0] : null;
        }
        get lastChild() {
          return this.content.length
            ? this.content[this.content.length - 1]
            : null;
        }
        get childCount() {
          return this.content.length;
        }
        child(e) {
          let t = this.content[e];
          if (!t)
            throw new RangeError("Index " + e + " out of range for " + this);
          return t;
        }
        maybeChild(e) {
          return this.content[e] || null;
        }
        forEach(e) {
          for (let t = 0, n = 0; t < this.content.length; t++) {
            let r = this.content[t];
            e(r, n, t), (n += r.nodeSize);
          }
        }
        findDiffStart(e, t = 0) {
          return o(this, e, t);
        }
        findDiffEnd(e, t = this.size, n = e.size) {
          return s(this, e, t, n);
        }
        findIndex(e, t = -1) {
          if (0 == e) return h(0, e);
          if (e == this.size) return h(this.content.length, e);
          if (e > this.size || e < 0)
            throw new RangeError(`Position ${e} outside of fragment (${this})`);
          for (let n = 0, r = 0; ; n++) {
            let i = r + this.child(n).nodeSize;
            if (i >= e) return i == e || t > 0 ? h(n + 1, i) : h(n, r);
            r = i;
          }
        }
        toString() {
          return "<" + this.toStringInner() + ">";
        }
        toStringInner() {
          return this.content.join(", ");
        }
        toJSON() {
          return this.content.length
            ? this.content.map((e) => e.toJSON())
            : null;
        }
        static fromJSON(e, t) {
          if (!t) return l.empty;
          if (!Array.isArray(t))
            throw new RangeError("Invalid input for Fragment.fromJSON");
          return new l(t.map(e.nodeFromJSON));
        }
        static fromArray(e) {
          if (!e.length) return l.empty;
          let t,
            n = 0;
          for (let r = 0; r < e.length; r++) {
            let i = e[r];
            (n += i.nodeSize),
              r && i.isText && e[r - 1].sameMarkup(i)
                ? (t || (t = e.slice(0, r)),
                  (t[t.length - 1] = i.withText(t[t.length - 1].text + i.text)))
                : t && t.push(i);
          }
          return new l(t || e, n);
        }
        static from(e) {
          if (!e) return l.empty;
          if (e instanceof l) return e;
          if (Array.isArray(e)) return this.fromArray(e);
          if (e.attrs) return new l([e], e.nodeSize);
          throw new RangeError(
            "Can not convert " +
              e +
              " to a Fragment" +
              (e.nodesBetween
                ? " (looks like multiple versions of prosemirror-model were loaded)"
                : ""),
          );
        }
      }
      l.empty = new l([], 0);
      const a = { index: 0, offset: 0 };
      function h(e, t) {
        return (a.index = e), (a.offset = t), a;
      }
      function c(e, t) {
        if (e === t) return !0;
        if (!e || "object" != typeof e || !t || "object" != typeof t) return !1;
        let n = Array.isArray(e);
        if (Array.isArray(t) != n) return !1;
        if (n) {
          if (e.length != t.length) return !1;
          for (let n = 0; n < e.length; n++) if (!c(e[n], t[n])) return !1;
        } else {
          for (let n in e) if (!(n in t) || !c(e[n], t[n])) return !1;
          for (let n in t) if (!(n in e)) return !1;
        }
        return !0;
      }
      class d {
        constructor(e, t) {
          (this.type = e), (this.attrs = t);
        }
        addToSet(e) {
          let t,
            n = !1;
          for (let r = 0; r < e.length; r++) {
            let i = e[r];
            if (this.eq(i)) return e;
            if (this.type.excludes(i.type)) t || (t = e.slice(0, r));
            else {
              if (i.type.excludes(this.type)) return e;
              !n &&
                i.type.rank > this.type.rank &&
                (t || (t = e.slice(0, r)), t.push(this), (n = !0)),
                t && t.push(i);
            }
          }
          return t || (t = e.slice()), n || t.push(this), t;
        }
        removeFromSet(e) {
          for (let t = 0; t < e.length; t++)
            if (this.eq(e[t])) return e.slice(0, t).concat(e.slice(t + 1));
          return e;
        }
        isInSet(e) {
          for (let t = 0; t < e.length; t++) if (this.eq(e[t])) return !0;
          return !1;
        }
        eq(e) {
          return this == e || (this.type == e.type && c(this.attrs, e.attrs));
        }
        toJSON() {
          let e = { type: this.type.name };
          for (let t in this.attrs) {
            e.attrs = this.attrs;
            break;
          }
          return e;
        }
        static fromJSON(e, t) {
          if (!t) throw new RangeError("Invalid input for Mark.fromJSON");
          let n = e.marks[t.type];
          if (!n)
            throw new RangeError(
              `There is no mark type ${t.type} in this schema`,
            );
          return n.create(t.attrs);
        }
        static sameSet(e, t) {
          if (e == t) return !0;
          if (e.length != t.length) return !1;
          for (let n = 0; n < e.length; n++) if (!e[n].eq(t[n])) return !1;
          return !0;
        }
        static setFrom(e) {
          if (!e || (Array.isArray(e) && 0 == e.length)) return d.none;
          if (e instanceof d) return [e];
          let t = e.slice();
          return t.sort((e, t) => e.type.rank - t.type.rank), t;
        }
      }
      d.none = [];
      class p extends Error {}
      class u {
        constructor(e, t, n) {
          (this.content = e), (this.openStart = t), (this.openEnd = n);
        }
        get size() {
          return this.content.size - this.openStart - this.openEnd;
        }
        insertAt(e, t) {
          let n = m(this.content, e + this.openStart, t);
          return n && new u(n, this.openStart, this.openEnd);
        }
        removeBetween(e, t) {
          return new u(
            f(this.content, e + this.openStart, t + this.openStart),
            this.openStart,
            this.openEnd,
          );
        }
        eq(e) {
          return (
            this.content.eq(e.content) &&
            this.openStart == e.openStart &&
            this.openEnd == e.openEnd
          );
        }
        toString() {
          return this.content + "(" + this.openStart + "," + this.openEnd + ")";
        }
        toJSON() {
          if (!this.content.size) return null;
          let e = { content: this.content.toJSON() };
          return (
            this.openStart > 0 && (e.openStart = this.openStart),
            this.openEnd > 0 && (e.openEnd = this.openEnd),
            e
          );
        }
        static fromJSON(e, t) {
          if (!t) return u.empty;
          let n = t.openStart || 0,
            r = t.openEnd || 0;
          if ("number" != typeof n || "number" != typeof r)
            throw new RangeError("Invalid input for Slice.fromJSON");
          return new u(l.fromJSON(e, t.content), n, r);
        }
        static maxOpen(e, t = !0) {
          let n = 0,
            r = 0;
          for (
            let r = e.firstChild;
            r && !r.isLeaf && (t || !r.type.spec.isolating);
            r = r.firstChild
          )
            n++;
          for (
            let n = e.lastChild;
            n && !n.isLeaf && (t || !n.type.spec.isolating);
            n = n.lastChild
          )
            r++;
          return new u(e, n, r);
        }
      }
      function f(e, t, n) {
        let { index: r, offset: i } = e.findIndex(t),
          o = e.maybeChild(r),
          { index: s, offset: l } = e.findIndex(n);
        if (i == t || o.isText) {
          if (l != n && !e.child(s).isText)
            throw new RangeError("Removing non-flat range");
          return e.cut(0, t).append(e.cut(n));
        }
        if (r != s) throw new RangeError("Removing non-flat range");
        return e.replaceChild(r, o.copy(f(o.content, t - i - 1, n - i - 1)));
      }
      function m(e, t, n, r) {
        let { index: i, offset: o } = e.findIndex(t),
          s = e.maybeChild(i);
        if (o == t || s.isText)
          return r && !r.canReplace(i, i, n)
            ? null
            : e.cut(0, t).append(n).append(e.cut(t));
        let l = m(s.content, t - o - 1, n);
        return l && e.replaceChild(i, s.copy(l));
      }
      function g(e, t, n) {
        if (n.openStart > e.depth)
          throw new p("Inserted content deeper than insertion position");
        if (e.depth - n.openStart != t.depth - n.openEnd)
          throw new p("Inconsistent open depths");
        return y(e, t, n, 0);
      }
      function y(e, t, n, r) {
        let i = e.index(r),
          o = e.node(r);
        if (i == t.index(r) && r < e.depth - n.openStart) {
          let s = y(e, t, n, r + 1);
          return o.copy(o.content.replaceChild(i, s));
        }
        if (n.content.size) {
          if (n.openStart || n.openEnd || e.depth != r || t.depth != r) {
            let { start: i, end: s } = (function (e, t) {
              let n = t.depth - e.openStart,
                r = t.node(n).copy(e.content);
              for (let e = n - 1; e >= 0; e--) r = t.node(e).copy(l.from(r));
              return {
                start: r.resolveNoCache(e.openStart + n),
                end: r.resolveNoCache(r.content.size - e.openEnd - n),
              };
            })(n, e);
            return k(o, x(e, i, s, t, r));
          }
          {
            let r = e.parent,
              i = r.content;
            return k(
              r,
              i
                .cut(0, e.parentOffset)
                .append(n.content)
                .append(i.cut(t.parentOffset)),
            );
          }
        }
        return k(o, M(e, t, r));
      }
      function w(e, t) {
        if (!t.type.compatibleContent(e.type))
          throw new p("Cannot join " + t.type.name + " onto " + e.type.name);
      }
      function v(e, t, n) {
        let r = e.node(n);
        return w(r, t.node(n)), r;
      }
      function b(e, t) {
        let n = t.length - 1;
        n >= 0 && e.isText && e.sameMarkup(t[n])
          ? (t[n] = e.withText(t[n].text + e.text))
          : t.push(e);
      }
      function S(e, t, n, r) {
        let i = (t || e).node(n),
          o = 0,
          s = t ? t.index(n) : i.childCount;
        e &&
          ((o = e.index(n)),
          e.depth > n ? o++ : e.textOffset && (b(e.nodeAfter, r), o++));
        for (let e = o; e < s; e++) b(i.child(e), r);
        t && t.depth == n && t.textOffset && b(t.nodeBefore, r);
      }
      function k(e, t) {
        return e.type.checkContent(t), e.copy(t);
      }
      function x(e, t, n, r, i) {
        let o = e.depth > i && v(e, t, i + 1),
          s = r.depth > i && v(n, r, i + 1),
          a = [];
        return (
          S(null, e, i, a),
          o && s && t.index(i) == n.index(i)
            ? (w(o, s), b(k(o, x(e, t, n, r, i + 1)), a))
            : (o && b(k(o, M(e, t, i + 1)), a),
              S(t, n, i, a),
              s && b(k(s, M(n, r, i + 1)), a)),
          S(r, null, i, a),
          new l(a)
        );
      }
      function M(e, t, n) {
        let r = [];
        if ((S(null, e, n, r), e.depth > n)) {
          b(k(v(e, t, n + 1), M(e, t, n + 1)), r);
        }
        return S(t, null, n, r), new l(r);
      }
      u.empty = new u(l.empty, 0, 0);
      class C {
        constructor(e, t, n) {
          (this.pos = e),
            (this.path = t),
            (this.parentOffset = n),
            (this.depth = t.length / 3 - 1);
        }
        resolveDepth(e) {
          return null == e ? this.depth : e < 0 ? this.depth + e : e;
        }
        get parent() {
          return this.node(this.depth);
        }
        get doc() {
          return this.node(0);
        }
        node(e) {
          return this.path[3 * this.resolveDepth(e)];
        }
        index(e) {
          return this.path[3 * this.resolveDepth(e) + 1];
        }
        indexAfter(e) {
          return (
            (e = this.resolveDepth(e)),
            this.index(e) + (e != this.depth || this.textOffset ? 1 : 0)
          );
        }
        start(e) {
          return 0 == (e = this.resolveDepth(e)) ? 0 : this.path[3 * e - 1] + 1;
        }
        end(e) {
          return (
            (e = this.resolveDepth(e)),
            this.start(e) + this.node(e).content.size
          );
        }
        before(e) {
          if (!(e = this.resolveDepth(e)))
            throw new RangeError(
              "There is no position before the top-level node",
            );
          return e == this.depth + 1 ? this.pos : this.path[3 * e - 1];
        }
        after(e) {
          if (!(e = this.resolveDepth(e)))
            throw new RangeError(
              "There is no position after the top-level node",
            );
          return e == this.depth + 1
            ? this.pos
            : this.path[3 * e - 1] + this.path[3 * e].nodeSize;
        }
        get textOffset() {
          return this.pos - this.path[this.path.length - 1];
        }
        get nodeAfter() {
          let e = this.parent,
            t = this.index(this.depth);
          if (t == e.childCount) return null;
          let n = this.pos - this.path[this.path.length - 1],
            r = e.child(t);
          return n ? e.child(t).cut(n) : r;
        }
        get nodeBefore() {
          let e = this.index(this.depth),
            t = this.pos - this.path[this.path.length - 1];
          return t
            ? this.parent.child(e).cut(0, t)
            : 0 == e
              ? null
              : this.parent.child(e - 1);
        }
        posAtIndex(e, t) {
          t = this.resolveDepth(t);
          let n = this.path[3 * t],
            r = 0 == t ? 0 : this.path[3 * t - 1] + 1;
          for (let t = 0; t < e; t++) r += n.child(t).nodeSize;
          return r;
        }
        marks() {
          let e = this.parent,
            t = this.index();
          if (0 == e.content.size) return d.none;
          if (this.textOffset) return e.child(t).marks;
          let n = e.maybeChild(t - 1),
            r = e.maybeChild(t);
          if (!n) {
            let e = n;
            (n = r), (r = e);
          }
          let i = n.marks;
          for (var o = 0; o < i.length; o++)
            !1 !== i[o].type.spec.inclusive ||
              (r && i[o].isInSet(r.marks)) ||
              (i = i[o--].removeFromSet(i));
          return i;
        }
        marksAcross(e) {
          let t = this.parent.maybeChild(this.index());
          if (!t || !t.isInline) return null;
          let n = t.marks,
            r = e.parent.maybeChild(e.index());
          for (var i = 0; i < n.length; i++)
            !1 !== n[i].type.spec.inclusive ||
              (r && n[i].isInSet(r.marks)) ||
              (n = n[i--].removeFromSet(n));
          return n;
        }
        sharedDepth(e) {
          for (let t = this.depth; t > 0; t--)
            if (this.start(t) <= e && this.end(t) >= e) return t;
          return 0;
        }
        blockRange(e = this, t) {
          if (e.pos < this.pos) return e.blockRange(this);
          for (
            let n =
              this.depth -
              (this.parent.inlineContent || this.pos == e.pos ? 1 : 0);
            n >= 0;
            n--
          )
            if (e.pos <= this.end(n) && (!t || t(this.node(n))))
              return new D(this, e, n);
          return null;
        }
        sameParent(e) {
          return this.pos - this.parentOffset == e.pos - e.parentOffset;
        }
        max(e) {
          return e.pos > this.pos ? e : this;
        }
        min(e) {
          return e.pos < this.pos ? e : this;
        }
        toString() {
          let e = "";
          for (let t = 1; t <= this.depth; t++)
            e +=
              (e ? "/" : "") + this.node(t).type.name + "_" + this.index(t - 1);
          return e + ":" + this.parentOffset;
        }
        static resolve(e, t) {
          if (!(t >= 0 && t <= e.content.size))
            throw new RangeError("Position " + t + " out of range");
          let n = [],
            r = 0,
            i = t;
          for (let t = e; ; ) {
            let { index: e, offset: o } = t.content.findIndex(i),
              s = i - o;
            if ((n.push(t, e, r + o), !s)) break;
            if (((t = t.child(e)), t.isText)) break;
            (i = s - 1), (r += o + 1);
          }
          return new C(t, n, i);
        }
        static resolveCached(e, t) {
          for (let n = 0; n < O.length; n++) {
            let r = O[n];
            if (r.pos == t && r.doc == e) return r;
          }
          let n = (O[N] = C.resolve(e, t));
          return (N = (N + 1) % T), n;
        }
      }
      let O = [],
        N = 0,
        T = 12;
      class D {
        constructor(e, t, n) {
          (this.$from = e), (this.$to = t), (this.depth = n);
        }
        get start() {
          return this.$from.before(this.depth + 1);
        }
        get end() {
          return this.$to.after(this.depth + 1);
        }
        get parent() {
          return this.$from.node(this.depth);
        }
        get startIndex() {
          return this.$from.index(this.depth);
        }
        get endIndex() {
          return this.$to.indexAfter(this.depth);
        }
      }
      const E = Object.create(null);
      class B {
        constructor(e, t, n, r = d.none) {
          (this.type = e),
            (this.attrs = t),
            (this.marks = r),
            (this.content = n || l.empty);
        }
        get nodeSize() {
          return this.isLeaf ? 1 : 2 + this.content.size;
        }
        get childCount() {
          return this.content.childCount;
        }
        child(e) {
          return this.content.child(e);
        }
        maybeChild(e) {
          return this.content.maybeChild(e);
        }
        forEach(e) {
          this.content.forEach(e);
        }
        nodesBetween(e, t, n, r = 0) {
          this.content.nodesBetween(e, t, n, r, this);
        }
        descendants(e) {
          this.nodesBetween(0, this.content.size, e);
        }
        get textContent() {
          return this.isLeaf && this.type.spec.leafText
            ? this.type.spec.leafText(this)
            : this.textBetween(0, this.content.size, "");
        }
        textBetween(e, t, n, r) {
          return this.content.textBetween(e, t, n, r);
        }
        get firstChild() {
          return this.content.firstChild;
        }
        get lastChild() {
          return this.content.lastChild;
        }
        eq(e) {
          return (
            this == e || (this.sameMarkup(e) && this.content.eq(e.content))
          );
        }
        sameMarkup(e) {
          return this.hasMarkup(e.type, e.attrs, e.marks);
        }
        hasMarkup(e, t, n) {
          return (
            this.type == e &&
            c(this.attrs, t || e.defaultAttrs || E) &&
            d.sameSet(this.marks, n || d.none)
          );
        }
        copy(e = null) {
          return e == this.content
            ? this
            : new B(this.type, this.attrs, e, this.marks);
        }
        mark(e) {
          return e == this.marks
            ? this
            : new B(this.type, this.attrs, this.content, e);
        }
        cut(e, t = this.content.size) {
          return 0 == e && t == this.content.size
            ? this
            : this.copy(this.content.cut(e, t));
        }
        slice(e, t = this.content.size, n = !1) {
          if (e == t) return u.empty;
          let r = this.resolve(e),
            i = this.resolve(t),
            o = n ? 0 : r.sharedDepth(t),
            s = r.start(o),
            l = r.node(o).content.cut(r.pos - s, i.pos - s);
          return new u(l, r.depth - o, i.depth - o);
        }
        replace(e, t, n) {
          return g(this.resolve(e), this.resolve(t), n);
        }
        nodeAt(e) {
          for (let t = this; ; ) {
            let { index: n, offset: r } = t.content.findIndex(e);
            if (((t = t.maybeChild(n)), !t)) return null;
            if (r == e || t.isText) return t;
            e -= r + 1;
          }
        }
        childAfter(e) {
          let { index: t, offset: n } = this.content.findIndex(e);
          return { node: this.content.maybeChild(t), index: t, offset: n };
        }
        childBefore(e) {
          if (0 == e) return { node: null, index: 0, offset: 0 };
          let { index: t, offset: n } = this.content.findIndex(e);
          if (n < e)
            return { node: this.content.child(t), index: t, offset: n };
          let r = this.content.child(t - 1);
          return { node: r, index: t - 1, offset: n - r.nodeSize };
        }
        resolve(e) {
          return C.resolveCached(this, e);
        }
        resolveNoCache(e) {
          return C.resolve(this, e);
        }
        rangeHasMark(e, t, n) {
          let r = !1;
          return (
            t > e &&
              this.nodesBetween(
                e,
                t,
                (e) => (n.isInSet(e.marks) && (r = !0), !r),
              ),
            r
          );
        }
        get isBlock() {
          return this.type.isBlock;
        }
        get isTextblock() {
          return this.type.isTextblock;
        }
        get inlineContent() {
          return this.type.inlineContent;
        }
        get isInline() {
          return this.type.isInline;
        }
        get isText() {
          return this.type.isText;
        }
        get isLeaf() {
          return this.type.isLeaf;
        }
        get isAtom() {
          return this.type.isAtom;
        }
        toString() {
          if (this.type.spec.toDebugString)
            return this.type.spec.toDebugString(this);
          let e = this.type.name;
          return (
            this.content.size &&
              (e += "(" + this.content.toStringInner() + ")"),
            R(this.marks, e)
          );
        }
        contentMatchAt(e) {
          let t = this.type.contentMatch.matchFragment(this.content, 0, e);
          if (!t)
            throw new Error(
              "Called contentMatchAt on a node with invalid content",
            );
          return t;
        }
        canReplace(e, t, n = l.empty, r = 0, i = n.childCount) {
          let o = this.contentMatchAt(e).matchFragment(n, r, i),
            s = o && o.matchFragment(this.content, t);
          if (!s || !s.validEnd) return !1;
          for (let e = r; e < i; e++)
            if (!this.type.allowsMarks(n.child(e).marks)) return !1;
          return !0;
        }
        canReplaceWith(e, t, n, r) {
          if (r && !this.type.allowsMarks(r)) return !1;
          let i = this.contentMatchAt(e).matchType(n),
            o = i && i.matchFragment(this.content, t);
          return !!o && o.validEnd;
        }
        canAppend(e) {
          return e.content.size
            ? this.canReplace(this.childCount, this.childCount, e.content)
            : this.type.compatibleContent(e.type);
        }
        check() {
          this.type.checkContent(this.content);
          let e = d.none;
          for (let t = 0; t < this.marks.length; t++)
            e = this.marks[t].addToSet(e);
          if (!d.sameSet(e, this.marks))
            throw new RangeError(
              `Invalid collection of marks for node ${this.type.name}: ${this.marks.map((e) => e.type.name)}`,
            );
          this.content.forEach((e) => e.check());
        }
        toJSON() {
          let e = { type: this.type.name };
          for (let t in this.attrs) {
            e.attrs = this.attrs;
            break;
          }
          return (
            this.content.size && (e.content = this.content.toJSON()),
            this.marks.length && (e.marks = this.marks.map((e) => e.toJSON())),
            e
          );
        }
        static fromJSON(e, t) {
          if (!t) throw new RangeError("Invalid input for Node.fromJSON");
          let n = null;
          if (t.marks) {
            if (!Array.isArray(t.marks))
              throw new RangeError("Invalid mark data for Node.fromJSON");
            n = t.marks.map(e.markFromJSON);
          }
          if ("text" == t.type) {
            if ("string" != typeof t.text)
              throw new RangeError("Invalid text node in JSON");
            return e.text(t.text, n);
          }
          let r = l.fromJSON(e, t.content);
          return e.nodeType(t.type).create(t.attrs, r, n);
        }
      }
      B.prototype.text = void 0;
      class A extends B {
        constructor(e, t, n, r) {
          if ((super(e, t, null, r), !n))
            throw new RangeError("Empty text nodes are not allowed");
          this.text = n;
        }
        toString() {
          return this.type.spec.toDebugString
            ? this.type.spec.toDebugString(this)
            : R(this.marks, JSON.stringify(this.text));
        }
        get textContent() {
          return this.text;
        }
        textBetween(e, t) {
          return this.text.slice(e, t);
        }
        get nodeSize() {
          return this.text.length;
        }
        mark(e) {
          return e == this.marks
            ? this
            : new A(this.type, this.attrs, this.text, e);
        }
        withText(e) {
          return e == this.text
            ? this
            : new A(this.type, this.attrs, e, this.marks);
        }
        cut(e = 0, t = this.text.length) {
          return 0 == e && t == this.text.length
            ? this
            : this.withText(this.text.slice(e, t));
        }
        eq(e) {
          return this.sameMarkup(e) && this.text == e.text;
        }
        toJSON() {
          let e = super.toJSON();
          return (e.text = this.text), e;
        }
      }
      function R(e, t) {
        for (let n = e.length - 1; n >= 0; n--)
          t = e[n].type.name + "(" + t + ")";
        return t;
      }
      class z {
        constructor(e) {
          (this.validEnd = e), (this.next = []), (this.wrapCache = []);
        }
        static parse(e, t) {
          let n = new I(e, t);
          if (null == n.next) return z.empty;
          let r = F(n);
          n.next && n.err("Unexpected trailing text");
          let i = (function (e) {
            let t = Object.create(null);
            return n(q(e, 0));
            function n(r) {
              let i = [];
              r.forEach((t) => {
                e[t].forEach(({ term: t, to: n }) => {
                  if (!t) return;
                  let r;
                  for (let e = 0; e < i.length; e++)
                    i[e][0] == t && (r = i[e][1]);
                  q(e, n).forEach((e) => {
                    r || i.push([t, (r = [])]), -1 == r.indexOf(e) && r.push(e);
                  });
                });
              });
              let o = (t[r.join(",")] = new z(r.indexOf(e.length - 1) > -1));
              for (let e = 0; e < i.length; e++) {
                let r = i[e][1].sort(W);
                o.next.push({ type: i[e][0], next: t[r.join(",")] || n(r) });
              }
              return o;
            }
          })(
            (function (e) {
              let t = [[]];
              return i(o(e, 0), n()), t;
              function n() {
                return t.push([]) - 1;
              }
              function r(e, n, r) {
                let i = { term: r, to: n };
                return t[e].push(i), i;
              }
              function i(e, t) {
                e.forEach((e) => (e.to = t));
              }
              function o(e, t) {
                if ("choice" == e.type)
                  return e.exprs.reduce((e, n) => e.concat(o(n, t)), []);
                if ("seq" != e.type) {
                  if ("star" == e.type) {
                    let s = n();
                    return r(t, s), i(o(e.expr, s), s), [r(s)];
                  }
                  if ("plus" == e.type) {
                    let s = n();
                    return i(o(e.expr, t), s), i(o(e.expr, s), s), [r(s)];
                  }
                  if ("opt" == e.type) return [r(t)].concat(o(e.expr, t));
                  if ("range" == e.type) {
                    let s = t;
                    for (let t = 0; t < e.min; t++) {
                      let t = n();
                      i(o(e.expr, s), t), (s = t);
                    }
                    if (-1 == e.max) i(o(e.expr, s), s);
                    else
                      for (let t = e.min; t < e.max; t++) {
                        let t = n();
                        r(s, t), i(o(e.expr, s), t), (s = t);
                      }
                    return [r(s)];
                  }
                  if ("name" == e.type) return [r(t, void 0, e.value)];
                  throw new Error("Unknown expr type");
                }
                for (let r = 0; ; r++) {
                  let s = o(e.exprs[r], t);
                  if (r == e.exprs.length - 1) return s;
                  i(s, (t = n()));
                }
              }
            })(r),
          );
          return (
            (function (e, t) {
              for (let n = 0, r = [e]; n < r.length; n++) {
                let e = r[n],
                  i = !e.validEnd,
                  o = [];
                for (let t = 0; t < e.next.length; t++) {
                  let { type: n, next: s } = e.next[t];
                  o.push(n.name),
                    !i || n.isText || n.hasRequiredAttrs() || (i = !1),
                    -1 == r.indexOf(s) && r.push(s);
                }
                i &&
                  t.err(
                    "Only non-generatable nodes (" +
                      o.join(", ") +
                      ") in a required position (see https://prosemirror.net/docs/guide/#generatable)",
                  );
              }
            })(i, n),
            i
          );
        }
        matchType(e) {
          for (let t = 0; t < this.next.length; t++)
            if (this.next[t].type == e) return this.next[t].next;
          return null;
        }
        matchFragment(e, t = 0, n = e.childCount) {
          let r = this;
          for (let i = t; r && i < n; i++) r = r.matchType(e.child(i).type);
          return r;
        }
        get inlineContent() {
          return 0 != this.next.length && this.next[0].type.isInline;
        }
        get defaultType() {
          for (let e = 0; e < this.next.length; e++) {
            let { type: t } = this.next[e];
            if (!t.isText && !t.hasRequiredAttrs()) return t;
          }
          return null;
        }
        compatible(e) {
          for (let t = 0; t < this.next.length; t++)
            for (let n = 0; n < e.next.length; n++)
              if (this.next[t].type == e.next[n].type) return !0;
          return !1;
        }
        fillBefore(e, t = !1, n = 0) {
          let r = [this];
          return (function i(o, s) {
            let a = o.matchFragment(e, n);
            if (a && (!t || a.validEnd))
              return l.from(s.map((e) => e.createAndFill()));
            for (let e = 0; e < o.next.length; e++) {
              let { type: t, next: n } = o.next[e];
              if (!t.isText && !t.hasRequiredAttrs() && -1 == r.indexOf(n)) {
                r.push(n);
                let e = i(n, s.concat(t));
                if (e) return e;
              }
            }
            return null;
          })(this, []);
        }
        findWrapping(e) {
          for (let t = 0; t < this.wrapCache.length; t += 2)
            if (this.wrapCache[t] == e) return this.wrapCache[t + 1];
          let t = this.computeWrapping(e);
          return this.wrapCache.push(e, t), t;
        }
        computeWrapping(e) {
          let t = Object.create(null),
            n = [{ match: this, type: null, via: null }];
          for (; n.length; ) {
            let r = n.shift(),
              i = r.match;
            if (i.matchType(e)) {
              let e = [];
              for (let t = r; t.type; t = t.via) e.push(t.type);
              return e.reverse();
            }
            for (let e = 0; e < i.next.length; e++) {
              let { type: o, next: s } = i.next[e];
              o.isLeaf ||
                o.hasRequiredAttrs() ||
                o.name in t ||
                (r.type && !s.validEnd) ||
                (n.push({ match: o.contentMatch, type: o, via: r }),
                (t[o.name] = !0));
            }
          }
          return null;
        }
        get edgeCount() {
          return this.next.length;
        }
        edge(e) {
          if (e >= this.next.length)
            throw new RangeError(
              `There's no ${e}th edge in this content match`,
            );
          return this.next[e];
        }
        toString() {
          let e = [];
          return (
            (function t(n) {
              e.push(n);
              for (let r = 0; r < n.next.length; r++)
                -1 == e.indexOf(n.next[r].next) && t(n.next[r].next);
            })(this),
            e
              .map((t, n) => {
                let r = n + (t.validEnd ? "*" : " ") + " ";
                for (let n = 0; n < t.next.length; n++)
                  r +=
                    (n ? ", " : "") +
                    t.next[n].type.name +
                    "->" +
                    e.indexOf(t.next[n].next);
                return r;
              })
              .join("\n")
          );
        }
      }
      z.empty = new z(!0);
      class I {
        constructor(e, t) {
          (this.string = e),
            (this.nodeTypes = t),
            (this.inline = null),
            (this.pos = 0),
            (this.tokens = e.split(/\s*(?=\b|\W|$)/)),
            "" == this.tokens[this.tokens.length - 1] && this.tokens.pop(),
            "" == this.tokens[0] && this.tokens.shift();
        }
        get next() {
          return this.tokens[this.pos];
        }
        eat(e) {
          return this.next == e && (this.pos++ || !0);
        }
        err(e) {
          throw new SyntaxError(
            e + " (in content expression '" + this.string + "')",
          );
        }
      }
      function F(e) {
        let t = [];
        do {
          t.push(P(e));
        } while (e.eat("|"));
        return 1 == t.length ? t[0] : { type: "choice", exprs: t };
      }
      function P(e) {
        let t = [];
        do {
          t.push($(e));
        } while (e.next && ")" != e.next && "|" != e.next);
        return 1 == t.length ? t[0] : { type: "seq", exprs: t };
      }
      function $(e) {
        let t = (function (e) {
          if (e.eat("(")) {
            let t = F(e);
            return e.eat(")") || e.err("Missing closing paren"), t;
          }
          if (!/\W/.test(e.next)) {
            let t = (function (e, t) {
              let n = e.nodeTypes,
                r = n[t];
              if (r) return [r];
              let i = [];
              for (let e in n) {
                let r = n[e];
                r.groups.indexOf(t) > -1 && i.push(r);
              }
              0 == i.length && e.err("No node type or group '" + t + "' found");
              return i;
            })(e, e.next).map(
              (t) => (
                null == e.inline
                  ? (e.inline = t.isInline)
                  : e.inline != t.isInline &&
                    e.err("Mixing inline and block content"),
                { type: "name", value: t }
              ),
            );
            return e.pos++, 1 == t.length ? t[0] : { type: "choice", exprs: t };
          }
          e.err("Unexpected token '" + e.next + "'");
        })(e);
        for (;;)
          if (e.eat("+")) t = { type: "plus", expr: t };
          else if (e.eat("*")) t = { type: "star", expr: t };
          else if (e.eat("?")) t = { type: "opt", expr: t };
          else {
            if (!e.eat("{")) break;
            t = _(e, t);
          }
        return t;
      }
      function V(e) {
        /\D/.test(e.next) && e.err("Expected number, got '" + e.next + "'");
        let t = Number(e.next);
        return e.pos++, t;
      }
      function _(e, t) {
        let n = V(e),
          r = n;
        return (
          e.eat(",") && (r = "}" != e.next ? V(e) : -1),
          e.eat("}") || e.err("Unclosed braced range"),
          { type: "range", min: n, max: r, expr: t }
        );
      }
      function W(e, t) {
        return t - e;
      }
      function q(e, t) {
        let n = [];
        return (
          (function t(r) {
            let i = e[r];
            if (1 == i.length && !i[0].term) return t(i[0].to);
            n.push(r);
            for (let e = 0; e < i.length; e++) {
              let { term: r, to: o } = i[e];
              r || -1 != n.indexOf(o) || t(o);
            }
          })(t),
          n.sort(W)
        );
      }
      function j(e) {
        let t = Object.create(null);
        for (let n in e) {
          let r = e[n];
          if (!r.hasDefault) return null;
          t[n] = r.default;
        }
        return t;
      }
      function L(e, t) {
        let n = Object.create(null);
        for (let r in e) {
          let i = t && t[r];
          if (void 0 === i) {
            let t = e[r];
            if (!t.hasDefault)
              throw new RangeError("No value supplied for attribute " + r);
            i = t.default;
          }
          n[r] = i;
        }
        return n;
      }
      function H(e) {
        let t = Object.create(null);
        if (e) for (let n in e) t[n] = new Y(e[n]);
        return t;
      }
      class J {
        constructor(e, t, n) {
          (this.name = e),
            (this.schema = t),
            (this.spec = n),
            (this.markSet = null),
            (this.groups = n.group ? n.group.split(" ") : []),
            (this.attrs = H(n.attrs)),
            (this.defaultAttrs = j(this.attrs)),
            (this.contentMatch = null),
            (this.inlineContent = null),
            (this.isBlock = !(n.inline || "text" == e)),
            (this.isText = "text" == e);
        }
        get isInline() {
          return !this.isBlock;
        }
        get isTextblock() {
          return this.isBlock && this.inlineContent;
        }
        get isLeaf() {
          return this.contentMatch == z.empty;
        }
        get isAtom() {
          return this.isLeaf || !!this.spec.atom;
        }
        get whitespace() {
          return this.spec.whitespace || (this.spec.code ? "pre" : "normal");
        }
        hasRequiredAttrs() {
          for (let e in this.attrs) if (this.attrs[e].isRequired) return !0;
          return !1;
        }
        compatibleContent(e) {
          return this == e || this.contentMatch.compatible(e.contentMatch);
        }
        computeAttrs(e) {
          return !e && this.defaultAttrs ? this.defaultAttrs : L(this.attrs, e);
        }
        create(e = null, t, n) {
          if (this.isText)
            throw new Error("NodeType.create can't construct text nodes");
          return new B(this, this.computeAttrs(e), l.from(t), d.setFrom(n));
        }
        createChecked(e = null, t, n) {
          return (
            (t = l.from(t)),
            this.checkContent(t),
            new B(this, this.computeAttrs(e), t, d.setFrom(n))
          );
        }
        createAndFill(e = null, t, n) {
          if (((e = this.computeAttrs(e)), (t = l.from(t)).size)) {
            let e = this.contentMatch.fillBefore(t);
            if (!e) return null;
            t = e.append(t);
          }
          let r = this.contentMatch.matchFragment(t),
            i = r && r.fillBefore(l.empty, !0);
          return i ? new B(this, e, t.append(i), d.setFrom(n)) : null;
        }
        validContent(e) {
          let t = this.contentMatch.matchFragment(e);
          if (!t || !t.validEnd) return !1;
          for (let t = 0; t < e.childCount; t++)
            if (!this.allowsMarks(e.child(t).marks)) return !1;
          return !0;
        }
        checkContent(e) {
          if (!this.validContent(e))
            throw new RangeError(
              `Invalid content for node ${this.name}: ${e.toString().slice(0, 50)}`,
            );
        }
        allowsMarkType(e) {
          return null == this.markSet || this.markSet.indexOf(e) > -1;
        }
        allowsMarks(e) {
          if (null == this.markSet) return !0;
          for (let t = 0; t < e.length; t++)
            if (!this.allowsMarkType(e[t].type)) return !1;
          return !0;
        }
        allowedMarks(e) {
          if (null == this.markSet) return e;
          let t;
          for (let n = 0; n < e.length; n++)
            this.allowsMarkType(e[n].type)
              ? t && t.push(e[n])
              : t || (t = e.slice(0, n));
          return t ? (t.length ? t : d.none) : e;
        }
        static compile(e, t) {
          let n = Object.create(null);
          e.forEach((e, r) => (n[e] = new J(e, t, r)));
          let r = t.spec.topNode || "doc";
          if (!n[r])
            throw new RangeError(
              "Schema is missing its top node type ('" + r + "')",
            );
          if (!n.text) throw new RangeError("Every schema needs a 'text' type");
          for (let e in n.text.attrs)
            throw new RangeError(
              "The text node type should not have attributes",
            );
          return n;
        }
      }
      class Y {
        constructor(e) {
          (this.hasDefault = Object.prototype.hasOwnProperty.call(
            e,
            "default",
          )),
            (this.default = e.default);
        }
        get isRequired() {
          return !this.hasDefault;
        }
      }
      class K {
        constructor(e, t, n, r) {
          (this.name = e),
            (this.rank = t),
            (this.schema = n),
            (this.spec = r),
            (this.attrs = H(r.attrs)),
            (this.excluded = null);
          let i = j(this.attrs);
          this.instance = i ? new d(this, i) : null;
        }
        create(e = null) {
          return !e && this.instance
            ? this.instance
            : new d(this, L(this.attrs, e));
        }
        static compile(e, t) {
          let n = Object.create(null),
            r = 0;
          return e.forEach((e, i) => (n[e] = new K(e, r++, t, i))), n;
        }
        removeFromSet(e) {
          for (var t = 0; t < e.length; t++)
            e[t].type == this &&
              ((e = e.slice(0, t).concat(e.slice(t + 1))), t--);
          return e;
        }
        isInSet(e) {
          for (let t = 0; t < e.length; t++) if (e[t].type == this) return e[t];
        }
        excludes(e) {
          return this.excluded.indexOf(e) > -1;
        }
      }
      class U {
        constructor(e) {
          this.cached = Object.create(null);
          let t = (this.spec = {});
          for (let n in e) t[n] = e[n];
          (t.nodes = i.from(e.nodes)),
            (t.marks = i.from(e.marks || {})),
            (this.nodes = J.compile(this.spec.nodes, this)),
            (this.marks = K.compile(this.spec.marks, this));
          let n = Object.create(null);
          for (let e in this.nodes) {
            if (e in this.marks)
              throw new RangeError(e + " can not be both a node and a mark");
            let t = this.nodes[e],
              r = t.spec.content || "",
              i = t.spec.marks;
            (t.contentMatch = n[r] || (n[r] = z.parse(r, this.nodes))),
              (t.inlineContent = t.contentMatch.inlineContent),
              (t.markSet =
                "_" == i
                  ? null
                  : i
                    ? G(this, i.split(" "))
                    : "" != i && t.inlineContent
                      ? null
                      : []);
          }
          for (let e in this.marks) {
            let t = this.marks[e],
              n = t.spec.excludes;
            t.excluded = null == n ? [t] : "" == n ? [] : G(this, n.split(" "));
          }
          (this.nodeFromJSON = this.nodeFromJSON.bind(this)),
            (this.markFromJSON = this.markFromJSON.bind(this)),
            (this.topNodeType = this.nodes[this.spec.topNode || "doc"]),
            (this.cached.wrappings = Object.create(null));
        }
        node(e, t = null, n, r) {
          if ("string" == typeof e) e = this.nodeType(e);
          else {
            if (!(e instanceof J))
              throw new RangeError("Invalid node type: " + e);
            if (e.schema != this)
              throw new RangeError(
                "Node type from different schema used (" + e.name + ")",
              );
          }
          return e.createChecked(t, n, r);
        }
        text(e, t) {
          let n = this.nodes.text;
          return new A(n, n.defaultAttrs, e, d.setFrom(t));
        }
        mark(e, t) {
          return "string" == typeof e && (e = this.marks[e]), e.create(t);
        }
        nodeFromJSON(e) {
          return B.fromJSON(this, e);
        }
        markFromJSON(e) {
          return d.fromJSON(this, e);
        }
        nodeType(e) {
          let t = this.nodes[e];
          if (!t) throw new RangeError("Unknown node type: " + e);
          return t;
        }
      }
      function G(e, t) {
        let n = [];
        for (let r = 0; r < t.length; r++) {
          let i = t[r],
            o = e.marks[i],
            s = o;
          if (o) n.push(o);
          else
            for (let t in e.marks) {
              let r = e.marks[t];
              ("_" == i ||
                (r.spec.group && r.spec.group.split(" ").indexOf(i) > -1)) &&
                n.push((s = r));
            }
          if (!s) throw new SyntaxError("Unknown mark type: '" + t[r] + "'");
        }
        return n;
      }
      class X {
        constructor(e, t) {
          (this.schema = e),
            (this.rules = t),
            (this.tags = []),
            (this.styles = []),
            t.forEach((e) => {
              e.tag ? this.tags.push(e) : e.style && this.styles.push(e);
            }),
            (this.normalizeLists = !this.tags.some((t) => {
              if (!/^(ul|ol)\b/.test(t.tag) || !t.node) return !1;
              let n = e.nodes[t.node];
              return n.contentMatch.matchType(n);
            }));
        }
        parse(e, t = {}) {
          let n = new re(this, t, !1);
          return n.addAll(e, t.from, t.to), n.finish();
        }
        parseSlice(e, t = {}) {
          let n = new re(this, t, !0);
          return n.addAll(e, t.from, t.to), u.maxOpen(n.finish());
        }
        matchTag(e, t, n) {
          for (
            let r = n ? this.tags.indexOf(n) + 1 : 0;
            r < this.tags.length;
            r++
          ) {
            let n = this.tags[r];
            if (
              ie(e, n.tag) &&
              (void 0 === n.namespace || e.namespaceURI == n.namespace) &&
              (!n.context || t.matchesContext(n.context))
            ) {
              if (n.getAttrs) {
                let t = n.getAttrs(e);
                if (!1 === t) continue;
                n.attrs = t || void 0;
              }
              return n;
            }
          }
        }
        matchStyle(e, t, n, r) {
          for (
            let i = r ? this.styles.indexOf(r) + 1 : 0;
            i < this.styles.length;
            i++
          ) {
            let r = this.styles[i],
              o = r.style;
            if (
              !(
                0 != o.indexOf(e) ||
                (r.context && !n.matchesContext(r.context)) ||
                (o.length > e.length &&
                  (61 != o.charCodeAt(e.length) || o.slice(e.length + 1) != t))
              )
            ) {
              if (r.getAttrs) {
                let e = r.getAttrs(t);
                if (!1 === e) continue;
                r.attrs = e || void 0;
              }
              return r;
            }
          }
        }
        static schemaRules(e) {
          let t = [];
          function n(e) {
            let n = null == e.priority ? 50 : e.priority,
              r = 0;
            for (; r < t.length; r++) {
              let e = t[r];
              if ((null == e.priority ? 50 : e.priority) < n) break;
            }
            t.splice(r, 0, e);
          }
          for (let t in e.marks) {
            let r = e.marks[t].spec.parseDOM;
            r &&
              r.forEach((e) => {
                n((e = oe(e))),
                  e.mark || e.ignore || e.clearMark || (e.mark = t);
              });
          }
          for (let t in e.nodes) {
            let r = e.nodes[t].spec.parseDOM;
            r &&
              r.forEach((e) => {
                n((e = oe(e))), e.node || e.ignore || e.mark || (e.node = t);
              });
          }
          return t;
        }
        static fromSchema(e) {
          return (
            e.cached.domParser ||
            (e.cached.domParser = new X(e, X.schemaRules(e)))
          );
        }
      }
      const Z = {
          address: !0,
          article: !0,
          aside: !0,
          blockquote: !0,
          canvas: !0,
          dd: !0,
          div: !0,
          dl: !0,
          fieldset: !0,
          figcaption: !0,
          figure: !0,
          footer: !0,
          form: !0,
          h1: !0,
          h2: !0,
          h3: !0,
          h4: !0,
          h5: !0,
          h6: !0,
          header: !0,
          hgroup: !0,
          hr: !0,
          li: !0,
          noscript: !0,
          ol: !0,
          output: !0,
          p: !0,
          pre: !0,
          section: !0,
          table: !0,
          tfoot: !0,
          ul: !0,
        },
        Q = {
          head: !0,
          noscript: !0,
          object: !0,
          script: !0,
          style: !0,
          title: !0,
        },
        ee = { ol: !0, ul: !0 };
      function te(e, t, n) {
        return null != t
          ? (t ? 1 : 0) | ("full" === t ? 2 : 0)
          : e && "pre" == e.whitespace
            ? 3
            : -5 & n;
      }
      class ne {
        constructor(e, t, n, r, i, o, s) {
          (this.type = e),
            (this.attrs = t),
            (this.marks = n),
            (this.pendingMarks = r),
            (this.solid = i),
            (this.options = s),
            (this.content = []),
            (this.activeMarks = d.none),
            (this.stashMarks = []),
            (this.match = o || (4 & s ? null : e.contentMatch));
        }
        findWrapping(e) {
          if (!this.match) {
            if (!this.type) return [];
            let t = this.type.contentMatch.fillBefore(l.from(e));
            if (!t) {
              let t,
                n = this.type.contentMatch;
              return (t = n.findWrapping(e.type))
                ? ((this.match = n), t)
                : null;
            }
            this.match = this.type.contentMatch.matchFragment(t);
          }
          return this.match.findWrapping(e.type);
        }
        finish(e) {
          if (!(1 & this.options)) {
            let e,
              t = this.content[this.content.length - 1];
            if (t && t.isText && (e = /[ \t\r\n\u000c]+$/.exec(t.text))) {
              let n = t;
              t.text.length == e[0].length
                ? this.content.pop()
                : (this.content[this.content.length - 1] = n.withText(
                    n.text.slice(0, n.text.length - e[0].length),
                  ));
            }
          }
          let t = l.from(this.content);
          return (
            !e &&
              this.match &&
              (t = t.append(this.match.fillBefore(l.empty, !0))),
            this.type ? this.type.create(this.attrs, t, this.marks) : t
          );
        }
        popFromStashMark(e) {
          for (let t = this.stashMarks.length - 1; t >= 0; t--)
            if (e.eq(this.stashMarks[t]))
              return this.stashMarks.splice(t, 1)[0];
        }
        applyPending(e) {
          for (let t = 0, n = this.pendingMarks; t < n.length; t++) {
            let r = n[t];
            (this.type ? this.type.allowsMarkType(r.type) : se(r.type, e)) &&
              !r.isInSet(this.activeMarks) &&
              ((this.activeMarks = r.addToSet(this.activeMarks)),
              (this.pendingMarks = r.removeFromSet(this.pendingMarks)));
          }
        }
        inlineContext(e) {
          return this.type
            ? this.type.inlineContent
            : this.content.length
              ? this.content[0].isInline
              : e.parentNode &&
                !Z.hasOwnProperty(e.parentNode.nodeName.toLowerCase());
        }
      }
      class re {
        constructor(e, t, n) {
          (this.parser = e),
            (this.options = t),
            (this.isOpen = n),
            (this.open = 0);
          let r,
            i = t.topNode,
            o = te(null, t.preserveWhitespace, 0) | (n ? 4 : 0);
          (r = i
            ? new ne(
                i.type,
                i.attrs,
                d.none,
                d.none,
                !0,
                t.topMatch || i.type.contentMatch,
                o,
              )
            : new ne(
                n ? null : e.schema.topNodeType,
                null,
                d.none,
                d.none,
                !0,
                null,
                o,
              )),
            (this.nodes = [r]),
            (this.find = t.findPositions),
            (this.needsBlock = !1);
        }
        get top() {
          return this.nodes[this.open];
        }
        addDOM(e) {
          3 == e.nodeType
            ? this.addTextNode(e)
            : 1 == e.nodeType && this.addElement(e);
        }
        withStyleRules(e, t) {
          let n = e.getAttribute("style");
          if (!n) return t();
          let r = this.readStyles(
            (function (e) {
              let t,
                n = /\s*([\w-]+)\s*:\s*([^;]+)/g,
                r = [];
              for (; (t = n.exec(e)); ) r.push(t[1], t[2].trim());
              return r;
            })(n),
          );
          if (!r) return;
          let [i, o] = r,
            s = this.top;
          for (let e = 0; e < o.length; e++) this.removePendingMark(o[e], s);
          for (let e = 0; e < i.length; e++) this.addPendingMark(i[e]);
          t();
          for (let e = 0; e < i.length; e++) this.removePendingMark(i[e], s);
          for (let e = 0; e < o.length; e++) this.addPendingMark(o[e]);
        }
        addTextNode(e) {
          let t = e.nodeValue,
            n = this.top;
          if (
            2 & n.options ||
            n.inlineContext(e) ||
            /[^ \t\r\n\u000c]/.test(t)
          ) {
            if (1 & n.options)
              t =
                2 & n.options
                  ? t.replace(/\r\n?/g, "\n")
                  : t.replace(/\r?\n|\r/g, " ");
            else if (
              ((t = t.replace(/[ \t\r\n\u000c]+/g, " ")),
              /^[ \t\r\n\u000c]/.test(t) && this.open == this.nodes.length - 1)
            ) {
              let r = n.content[n.content.length - 1],
                i = e.previousSibling;
              (!r ||
                (i && "BR" == i.nodeName) ||
                (r.isText && /[ \t\r\n\u000c]$/.test(r.text))) &&
                (t = t.slice(1));
            }
            t && this.insertNode(this.parser.schema.text(t)),
              this.findInText(e);
          } else this.findInside(e);
        }
        addElement(e, t) {
          let n,
            r = e.nodeName.toLowerCase();
          ee.hasOwnProperty(r) &&
            this.parser.normalizeLists &&
            (function (e) {
              for (let t = e.firstChild, n = null; t; t = t.nextSibling) {
                let e = 1 == t.nodeType ? t.nodeName.toLowerCase() : null;
                e && ee.hasOwnProperty(e) && n
                  ? (n.appendChild(t), (t = n))
                  : "li" == e
                    ? (n = t)
                    : e && (n = null);
              }
            })(e);
          let i =
            (this.options.ruleFromNode && this.options.ruleFromNode(e)) ||
            (n = this.parser.matchTag(e, this, t));
          if (i ? i.ignore : Q.hasOwnProperty(r))
            this.findInside(e), this.ignoreFallback(e);
          else if (!i || i.skip || i.closeParent) {
            i && i.closeParent
              ? (this.open = Math.max(0, this.open - 1))
              : i && i.skip.nodeType && (e = i.skip);
            let t,
              n = this.top,
              o = this.needsBlock;
            if (Z.hasOwnProperty(r))
              n.content.length &&
                n.content[0].isInline &&
                this.open &&
                (this.open--, (n = this.top)),
                (t = !0),
                n.type || (this.needsBlock = !0);
            else if (!e.firstChild) return void this.leafFallback(e);
            i && i.skip
              ? this.addAll(e)
              : this.withStyleRules(e, () => this.addAll(e)),
              t && this.sync(n),
              (this.needsBlock = o);
          } else
            this.withStyleRules(e, () => {
              this.addElementByRule(e, i, !1 === i.consuming ? n : void 0);
            });
        }
        leafFallback(e) {
          "BR" == e.nodeName &&
            this.top.type &&
            this.top.type.inlineContent &&
            this.addTextNode(e.ownerDocument.createTextNode("\n"));
        }
        ignoreFallback(e) {
          "BR" != e.nodeName ||
            (this.top.type && this.top.type.inlineContent) ||
            this.findPlace(this.parser.schema.text("-"));
        }
        readStyles(e) {
          let t = d.none,
            n = d.none;
          for (let r = 0; r < e.length; r += 2)
            for (let i; ; ) {
              let o = this.parser.matchStyle(e[r], e[r + 1], this, i);
              if (!o) break;
              if (o.ignore) return null;
              if (
                (o.clearMark
                  ? this.top.pendingMarks
                      .concat(this.top.activeMarks)
                      .forEach((e) => {
                        o.clearMark(e) && (n = e.addToSet(n));
                      })
                  : (t = this.parser.schema.marks[o.mark]
                      .create(o.attrs)
                      .addToSet(t)),
                !1 !== o.consuming)
              )
                break;
              i = o;
            }
          return [t, n];
        }
        addElementByRule(e, t, n) {
          let r, i, o;
          if (t.node)
            (i = this.parser.schema.nodes[t.node]),
              i.isLeaf
                ? this.insertNode(i.create(t.attrs)) || this.leafFallback(e)
                : (r = this.enter(i, t.attrs || null, t.preserveWhitespace));
          else {
            (o = this.parser.schema.marks[t.mark].create(t.attrs)),
              this.addPendingMark(o);
          }
          let s = this.top;
          if (i && i.isLeaf) this.findInside(e);
          else if (n) this.addElement(e, n);
          else if (t.getContent)
            this.findInside(e),
              t
                .getContent(e, this.parser.schema)
                .forEach((e) => this.insertNode(e));
          else {
            let n = e;
            "string" == typeof t.contentElement
              ? (n = e.querySelector(t.contentElement))
              : "function" == typeof t.contentElement
                ? (n = t.contentElement(e))
                : t.contentElement && (n = t.contentElement),
              this.findAround(e, n, !0),
              this.addAll(n);
          }
          r && this.sync(s) && this.open--, o && this.removePendingMark(o, s);
        }
        addAll(e, t, n) {
          let r = t || 0;
          for (
            let i = t ? e.childNodes[t] : e.firstChild,
              o = null == n ? null : e.childNodes[n];
            i != o;
            i = i.nextSibling, ++r
          )
            this.findAtPoint(e, r), this.addDOM(i);
          this.findAtPoint(e, r);
        }
        findPlace(e) {
          let t, n;
          for (let r = this.open; r >= 0; r--) {
            let i = this.nodes[r],
              o = i.findWrapping(e);
            if (
              o &&
              (!t || t.length > o.length) &&
              ((t = o), (n = i), !o.length)
            )
              break;
            if (i.solid) break;
          }
          if (!t) return !1;
          this.sync(n);
          for (let e = 0; e < t.length; e++) this.enterInner(t[e], null, !1);
          return !0;
        }
        insertNode(e) {
          if (e.isInline && this.needsBlock && !this.top.type) {
            let e = this.textblockFromContext();
            e && this.enterInner(e);
          }
          if (this.findPlace(e)) {
            this.closeExtra();
            let t = this.top;
            t.applyPending(e.type),
              t.match && (t.match = t.match.matchType(e.type));
            let n = t.activeMarks;
            for (let r = 0; r < e.marks.length; r++)
              (t.type && !t.type.allowsMarkType(e.marks[r].type)) ||
                (n = e.marks[r].addToSet(n));
            return t.content.push(e.mark(n)), !0;
          }
          return !1;
        }
        enter(e, t, n) {
          let r = this.findPlace(e.create(t));
          return r && this.enterInner(e, t, !0, n), r;
        }
        enterInner(e, t = null, n = !1, r) {
          this.closeExtra();
          let i = this.top;
          i.applyPending(e), (i.match = i.match && i.match.matchType(e));
          let o = te(e, r, i.options);
          4 & i.options && 0 == i.content.length && (o |= 4),
            this.nodes.push(
              new ne(e, t, i.activeMarks, i.pendingMarks, n, null, o),
            ),
            this.open++;
        }
        closeExtra(e = !1) {
          let t = this.nodes.length - 1;
          if (t > this.open) {
            for (; t > this.open; t--)
              this.nodes[t - 1].content.push(this.nodes[t].finish(e));
            this.nodes.length = this.open + 1;
          }
        }
        finish() {
          return (
            (this.open = 0),
            this.closeExtra(this.isOpen),
            this.nodes[0].finish(this.isOpen || this.options.topOpen)
          );
        }
        sync(e) {
          for (let t = this.open; t >= 0; t--)
            if (this.nodes[t] == e) return (this.open = t), !0;
          return !1;
        }
        get currentPos() {
          this.closeExtra();
          let e = 0;
          for (let t = this.open; t >= 0; t--) {
            let n = this.nodes[t].content;
            for (let t = n.length - 1; t >= 0; t--) e += n[t].nodeSize;
            t && e++;
          }
          return e;
        }
        findAtPoint(e, t) {
          if (this.find)
            for (let n = 0; n < this.find.length; n++)
              this.find[n].node == e &&
                this.find[n].offset == t &&
                (this.find[n].pos = this.currentPos);
        }
        findInside(e) {
          if (this.find)
            for (let t = 0; t < this.find.length; t++)
              null == this.find[t].pos &&
                1 == e.nodeType &&
                e.contains(this.find[t].node) &&
                (this.find[t].pos = this.currentPos);
        }
        findAround(e, t, n) {
          if (e != t && this.find)
            for (let r = 0; r < this.find.length; r++)
              if (
                null == this.find[r].pos &&
                1 == e.nodeType &&
                e.contains(this.find[r].node)
              ) {
                t.compareDocumentPosition(this.find[r].node) & (n ? 2 : 4) &&
                  (this.find[r].pos = this.currentPos);
              }
        }
        findInText(e) {
          if (this.find)
            for (let t = 0; t < this.find.length; t++)
              this.find[t].node == e &&
                (this.find[t].pos =
                  this.currentPos - (e.nodeValue.length - this.find[t].offset));
        }
        matchesContext(e) {
          if (e.indexOf("|") > -1)
            return e.split(/\s*\|\s*/).some(this.matchesContext, this);
          let t = e.split("/"),
            n = this.options.context,
            r = !(this.isOpen || (n && n.parent.type != this.nodes[0].type)),
            i = -(n ? n.depth + 1 : 0) + (r ? 0 : 1),
            o = (e, s) => {
              for (; e >= 0; e--) {
                let l = t[e];
                if ("" == l) {
                  if (e == t.length - 1 || 0 == e) continue;
                  for (; s >= i; s--) if (o(e - 1, s)) return !0;
                  return !1;
                }
                {
                  let e =
                    s > 0 || (0 == s && r)
                      ? this.nodes[s].type
                      : n && s >= i
                        ? n.node(s - i).type
                        : null;
                  if (!e || (e.name != l && -1 == e.groups.indexOf(l)))
                    return !1;
                  s--;
                }
              }
              return !0;
            };
          return o(t.length - 1, this.open);
        }
        textblockFromContext() {
          let e = this.options.context;
          if (e)
            for (let t = e.depth; t >= 0; t--) {
              let n = e.node(t).contentMatchAt(e.indexAfter(t)).defaultType;
              if (n && n.isTextblock && n.defaultAttrs) return n;
            }
          for (let e in this.parser.schema.nodes) {
            let t = this.parser.schema.nodes[e];
            if (t.isTextblock && t.defaultAttrs) return t;
          }
        }
        addPendingMark(e) {
          let t = (function (e, t) {
            for (let n = 0; n < t.length; n++) if (e.eq(t[n])) return t[n];
          })(e, this.top.pendingMarks);
          t && this.top.stashMarks.push(t),
            (this.top.pendingMarks = e.addToSet(this.top.pendingMarks));
        }
        removePendingMark(e, t) {
          for (let n = this.open; n >= 0; n--) {
            let r = this.nodes[n];
            if (r.pendingMarks.lastIndexOf(e) > -1)
              r.pendingMarks = e.removeFromSet(r.pendingMarks);
            else {
              r.activeMarks = e.removeFromSet(r.activeMarks);
              let t = r.popFromStashMark(e);
              t &&
                r.type &&
                r.type.allowsMarkType(t.type) &&
                (r.activeMarks = t.addToSet(r.activeMarks));
            }
            if (r == t) break;
          }
        }
      }
      function ie(e, t) {
        return (
          e.matches ||
          e.msMatchesSelector ||
          e.webkitMatchesSelector ||
          e.mozMatchesSelector
        ).call(e, t);
      }
      function oe(e) {
        let t = {};
        for (let n in e) t[n] = e[n];
        return t;
      }
      function se(e, t) {
        let n = t.schema.nodes;
        for (let r in n) {
          let i = n[r];
          if (!i.allowsMarkType(e)) continue;
          let o = [],
            s = (e) => {
              o.push(e);
              for (let n = 0; n < e.edgeCount; n++) {
                let { type: r, next: i } = e.edge(n);
                if (r == t) return !0;
                if (o.indexOf(i) < 0 && s(i)) return !0;
              }
            };
          if (s(i.contentMatch)) return !0;
        }
      }
      class le {
        constructor(e, t) {
          (this.nodes = e), (this.marks = t);
        }
        serializeFragment(e, t = {}, n) {
          n || (n = he(t).createDocumentFragment());
          let r = n,
            i = [];
          return (
            e.forEach((e) => {
              if (i.length || e.marks.length) {
                let n = 0,
                  o = 0;
                for (; n < i.length && o < e.marks.length; ) {
                  let t = e.marks[o];
                  if (this.marks[t.type.name]) {
                    if (!t.eq(i[n][0]) || !1 === t.type.spec.spanning) break;
                    n++, o++;
                  } else o++;
                }
                for (; n < i.length; ) r = i.pop()[1];
                for (; o < e.marks.length; ) {
                  let n = e.marks[o++],
                    s = this.serializeMark(n, e.isInline, t);
                  s &&
                    (i.push([n, r]),
                    r.appendChild(s.dom),
                    (r = s.contentDOM || s.dom));
                }
              }
              r.appendChild(this.serializeNodeInner(e, t));
            }),
            n
          );
        }
        serializeNodeInner(e, t) {
          let { dom: n, contentDOM: r } = le.renderSpec(
            he(t),
            this.nodes[e.type.name](e),
          );
          if (r) {
            if (e.isLeaf)
              throw new RangeError(
                "Content hole not allowed in a leaf node spec",
              );
            this.serializeFragment(e.content, t, r);
          }
          return n;
        }
        serializeNode(e, t = {}) {
          let n = this.serializeNodeInner(e, t);
          for (let r = e.marks.length - 1; r >= 0; r--) {
            let i = this.serializeMark(e.marks[r], e.isInline, t);
            i && ((i.contentDOM || i.dom).appendChild(n), (n = i.dom));
          }
          return n;
        }
        serializeMark(e, t, n = {}) {
          let r = this.marks[e.type.name];
          return r && le.renderSpec(he(n), r(e, t));
        }
        static renderSpec(e, t, n = null) {
          if ("string" == typeof t) return { dom: e.createTextNode(t) };
          if (null != t.nodeType) return { dom: t };
          if (t.dom && null != t.dom.nodeType) return t;
          let r,
            i = t[0],
            o = i.indexOf(" ");
          o > 0 && ((n = i.slice(0, o)), (i = i.slice(o + 1)));
          let s = n ? e.createElementNS(n, i) : e.createElement(i),
            l = t[1],
            a = 1;
          if (
            l &&
            "object" == typeof l &&
            null == l.nodeType &&
            !Array.isArray(l)
          ) {
            a = 2;
            for (let e in l)
              if (null != l[e]) {
                let t = e.indexOf(" ");
                t > 0
                  ? s.setAttributeNS(e.slice(0, t), e.slice(t + 1), l[e])
                  : s.setAttribute(e, l[e]);
              }
          }
          for (let i = a; i < t.length; i++) {
            let o = t[i];
            if (0 === o) {
              if (i < t.length - 1 || i > a)
                throw new RangeError(
                  "Content hole must be the only child of its parent node",
                );
              return { dom: s, contentDOM: s };
            }
            {
              let { dom: t, contentDOM: i } = le.renderSpec(e, o, n);
              if ((s.appendChild(t), i)) {
                if (r) throw new RangeError("Multiple content holes");
                r = i;
              }
            }
          }
          return { dom: s, contentDOM: r };
        }
        static fromSchema(e) {
          return (
            e.cached.domSerializer ||
            (e.cached.domSerializer = new le(
              this.nodesFromSchema(e),
              this.marksFromSchema(e),
            ))
          );
        }
        static nodesFromSchema(e) {
          let t = ae(e.nodes);
          return t.text || (t.text = (e) => e.text), t;
        }
        static marksFromSchema(e) {
          return ae(e.marks);
        }
      }
      function ae(e) {
        let t = {};
        for (let n in e) {
          let r = e[n].spec.toDOM;
          r && (t[n] = r);
        }
        return t;
      }
      function he(e) {
        return e.document || window.document;
      }
    },
    2761: (e, t, n) => {
      n.d(t, {
        IB: () => f,
        KI: () => p,
        bw: () => m,
        dq: () => h,
        iI: () => c,
        qb: () => d,
        s6: () => u,
      });
      var r = n(42513),
        i = n(23126),
        o = n(4005);
      const s = ["ol", 0],
        l = ["ul", 0],
        a = ["li", 0],
        h = {
          attrs: { order: { default: 1 } },
          parseDOM: [
            {
              tag: "ol",
              getAttrs: (e) => ({
                order: e.hasAttribute("start") ? +e.getAttribute("start") : 1,
              }),
            },
          ],
          toDOM: (e) =>
            1 == e.attrs.order ? s : ["ol", { start: e.attrs.order }, 0],
        },
        c = { parseDOM: [{ tag: "ul" }], toDOM: () => l },
        d = { parseDOM: [{ tag: "li" }], toDOM: () => a, defining: !0 };
      function p(e, t = null) {
        return function (n, o) {
          let { $from: s, $to: l } = n.selection,
            a = s.blockRange(l),
            h = !1,
            c = a;
          if (!a) return !1;
          if (
            a.depth >= 2 &&
            s.node(a.depth - 1).type.compatibleContent(e) &&
            0 == a.startIndex
          ) {
            if (0 == s.index(a.depth - 1)) return !1;
            let e = n.doc.resolve(a.start - 2);
            (c = new i.Ts(e, e, a.depth)),
              a.endIndex < a.parent.childCount &&
                (a = new i.Ts(s, n.doc.resolve(l.end(a.depth)), a.depth)),
              (h = !0);
          }
          let d = (0, r.nd)(c, e, t, a);
          return (
            !!d &&
            (o &&
              o(
                (function (e, t, n, o, s) {
                  let l = i.HY.empty;
                  for (let e = n.length - 1; e >= 0; e--)
                    l = i.HY.from(n[e].type.create(n[e].attrs, l));
                  e.step(
                    new r.FC(
                      t.start - (o ? 2 : 0),
                      t.end,
                      t.start,
                      t.end,
                      new i.p2(l, 0, 0),
                      n.length,
                      !0,
                    ),
                  );
                  let a = 0;
                  for (let e = 0; e < n.length; e++)
                    n[e].type == s && (a = e + 1);
                  let h = n.length - a,
                    c = t.start + n.length - (o ? 2 : 0),
                    d = t.parent;
                  for (
                    let n = t.startIndex, i = t.endIndex, o = !0;
                    n < i;
                    n++, o = !1
                  )
                    !o &&
                      (0, r.Ax)(e.doc, c, h) &&
                      (e.split(c, h), (c += 2 * h)),
                      (c += d.child(n).nodeSize);
                  return e;
                })(n.tr, a, d, h, e).scrollIntoView(),
              ),
            !0)
          );
        };
      }
      function u(e, t) {
        return function (n, s) {
          let { $from: l, $to: a, node: h } = n.selection;
          if ((h && h.isBlock) || l.depth < 2 || !l.sameParent(a)) return !1;
          let c = l.node(-1);
          if (c.type != e) return !1;
          if (
            0 == l.parent.content.size &&
            l.node(-1).childCount == l.indexAfter(-1)
          ) {
            if (
              3 == l.depth ||
              l.node(-3).type != e ||
              l.index(-2) != l.node(-2).childCount - 1
            )
              return !1;
            if (s) {
              let t = i.HY.empty,
                r = l.index(-1) ? 1 : l.index(-2) ? 2 : 3;
              for (let e = l.depth - r; e >= l.depth - 3; e--)
                t = i.HY.from(l.node(e).copy(t));
              let a =
                l.indexAfter(-1) < l.node(-2).childCount
                  ? 1
                  : l.indexAfter(-2) < l.node(-3).childCount
                    ? 2
                    : 3;
              t = t.append(i.HY.from(e.createAndFill()));
              let h = l.before(l.depth - (r - 1)),
                c = n.tr.replace(h, l.after(-a), new i.p2(t, 4 - r, 0)),
                d = -1;
              c.doc.nodesBetween(h, c.doc.content.size, (e, t) => {
                if (d > -1) return !1;
                e.isTextblock && 0 == e.content.size && (d = t + 1);
              }),
                d > -1 && c.setSelection(o.Y1.near(c.doc.resolve(d))),
                s(c.scrollIntoView());
            }
            return !0;
          }
          let d = a.pos == l.end() ? c.contentMatchAt(0).defaultType : null,
            p = n.tr.delete(l.pos, a.pos),
            u = d ? [t ? { type: e, attrs: t } : null, { type: d }] : void 0;
          return (
            !!(0, r.Ax)(p.doc, l.pos, 2, u) &&
            (s && s(p.split(l.pos, 2, u).scrollIntoView()), !0)
          );
        };
      }
      function f(e) {
        return function (t, n) {
          let { $from: o, $to: s } = t.selection,
            l = o.blockRange(
              s,
              (t) => t.childCount > 0 && t.firstChild.type == e,
            );
          return (
            !!l &&
            (!n ||
              (o.node(l.depth - 1).type == e
                ? (function (e, t, n, o) {
                    let s = e.tr,
                      l = o.end,
                      a = o.$to.end(o.depth);
                    l < a &&
                      (s.step(
                        new r.FC(
                          l - 1,
                          a,
                          l,
                          a,
                          new i.p2(
                            i.HY.from(n.create(null, o.parent.copy())),
                            1,
                            0,
                          ),
                          1,
                          !0,
                        ),
                      ),
                      (o = new i.Ts(
                        s.doc.resolve(o.$from.pos),
                        s.doc.resolve(a),
                        o.depth,
                      )));
                    const h = (0, r.k9)(o);
                    if (null == h) return !1;
                    s.lift(o, h);
                    let c = s.mapping.map(l, -1) - 1;
                    (0, r.Mn)(s.doc, c) && s.join(c);
                    return t(s.scrollIntoView()), !0;
                  })(t, n, e, l)
                : (function (e, t, n) {
                    let o = e.tr,
                      s = n.parent;
                    for (
                      let e = n.end, t = n.endIndex - 1, r = n.startIndex;
                      t > r;
                      t--
                    )
                      (e -= s.child(t).nodeSize), o.delete(e - 1, e + 1);
                    let l = o.doc.resolve(n.start),
                      a = l.nodeAfter;
                    if (o.mapping.map(n.end) != n.start + l.nodeAfter.nodeSize)
                      return !1;
                    let h = 0 == n.startIndex,
                      c = n.endIndex == s.childCount,
                      d = l.node(-1),
                      p = l.index(-1);
                    if (
                      !d.canReplace(
                        p + (h ? 0 : 1),
                        p + 1,
                        a.content.append(c ? i.HY.empty : i.HY.from(s)),
                      )
                    )
                      return !1;
                    let u = l.pos,
                      f = u + a.nodeSize;
                    return (
                      o.step(
                        new r.FC(
                          u - (h ? 1 : 0),
                          f + (c ? 1 : 0),
                          u + 1,
                          f - 1,
                          new i.p2(
                            (h
                              ? i.HY.empty
                              : i.HY.from(s.copy(i.HY.empty))
                            ).append(
                              c ? i.HY.empty : i.HY.from(s.copy(i.HY.empty)),
                            ),
                            h ? 0 : 1,
                            c ? 0 : 1,
                          ),
                          h ? 0 : 1,
                        ),
                      ),
                      t(o.scrollIntoView()),
                      !0
                    );
                  })(t, n, l)))
          );
        };
      }
      function m(e) {
        return function (t, n) {
          let { $from: o, $to: s } = t.selection,
            l = o.blockRange(
              s,
              (t) => t.childCount > 0 && t.firstChild.type == e,
            );
          if (!l) return !1;
          let a = l.startIndex;
          if (0 == a) return !1;
          let h = l.parent,
            c = h.child(a - 1);
          if (c.type != e) return !1;
          if (n) {
            let o = c.lastChild && c.lastChild.type == h.type,
              s = i.HY.from(o ? e.create() : null),
              a = new i.p2(
                i.HY.from(e.create(null, i.HY.from(h.type.create(null, s)))),
                o ? 3 : 1,
                0,
              ),
              d = l.start,
              p = l.end;
            n(
              t.tr
                .step(new r.FC(d - (o ? 3 : 1), p, d, p, a, 1, !0))
                .scrollIntoView(),
            );
          }
          return !0;
        };
      }
    },
    4005: (e, t, n) => {
      n.d(t, {
        Bs: () => c,
        C1: () => f,
        H$: () => T,
        Sy: () => C,
        Y1: () => s,
        qv: () => p,
        yy: () => x,
      });
      var r = n(23126),
        i = n(42513);
      const o = Object.create(null);
      class s {
        constructor(e, t, n) {
          (this.$anchor = e),
            (this.$head = t),
            (this.ranges = n || [new l(e.min(t), e.max(t))]);
        }
        get anchor() {
          return this.$anchor.pos;
        }
        get head() {
          return this.$head.pos;
        }
        get from() {
          return this.$from.pos;
        }
        get to() {
          return this.$to.pos;
        }
        get $from() {
          return this.ranges[0].$from;
        }
        get $to() {
          return this.ranges[0].$to;
        }
        get empty() {
          let e = this.ranges;
          for (let t = 0; t < e.length; t++)
            if (e[t].$from.pos != e[t].$to.pos) return !1;
          return !0;
        }
        content() {
          return this.$from.doc.slice(this.from, this.to, !0);
        }
        replace(e, t = r.p2.empty) {
          let n = t.content.lastChild,
            i = null;
          for (let e = 0; e < t.openEnd; e++) (i = n), (n = n.lastChild);
          let o = e.steps.length,
            s = this.ranges;
          for (let l = 0; l < s.length; l++) {
            let { $from: a, $to: h } = s[l],
              c = e.mapping.slice(o);
            e.replaceRange(c.map(a.pos), c.map(h.pos), l ? r.p2.empty : t),
              0 == l && y(e, o, (n ? n.isInline : i && i.isTextblock) ? -1 : 1);
          }
        }
        replaceWith(e, t) {
          let n = e.steps.length,
            r = this.ranges;
          for (let i = 0; i < r.length; i++) {
            let { $from: o, $to: s } = r[i],
              l = e.mapping.slice(n),
              a = l.map(o.pos),
              h = l.map(s.pos);
            i
              ? e.deleteRange(a, h)
              : (e.replaceRangeWith(a, h, t), y(e, n, t.isInline ? -1 : 1));
          }
        }
        static findFrom(e, t, n = !1) {
          let r = e.parent.inlineContent
            ? new c(e)
            : g(e.node(0), e.parent, e.pos, e.index(), t, n);
          if (r) return r;
          for (let r = e.depth - 1; r >= 0; r--) {
            let i =
              t < 0
                ? g(e.node(0), e.node(r), e.before(r + 1), e.index(r), t, n)
                : g(e.node(0), e.node(r), e.after(r + 1), e.index(r) + 1, t, n);
            if (i) return i;
          }
          return null;
        }
        static near(e, t = 1) {
          return (
            this.findFrom(e, t) || this.findFrom(e, -t) || new f(e.node(0))
          );
        }
        static atStart(e) {
          return g(e, e, 0, 0, 1) || new f(e);
        }
        static atEnd(e) {
          return g(e, e, e.content.size, e.childCount, -1) || new f(e);
        }
        static fromJSON(e, t) {
          if (!t || !t.type)
            throw new RangeError("Invalid input for Selection.fromJSON");
          let n = o[t.type];
          if (!n) throw new RangeError(`No selection type ${t.type} defined`);
          return n.fromJSON(e, t);
        }
        static jsonID(e, t) {
          if (e in o)
            throw new RangeError("Duplicate use of selection JSON ID " + e);
          return (o[e] = t), (t.prototype.jsonID = e), t;
        }
        getBookmark() {
          return c.between(this.$anchor, this.$head).getBookmark();
        }
      }
      s.prototype.visible = !0;
      class l {
        constructor(e, t) {
          (this.$from = e), (this.$to = t);
        }
      }
      let a = !1;
      function h(e) {
        a ||
          e.parent.inlineContent ||
          ((a = !0),
          console.warn(
            "TextSelection endpoint not pointing into a node with inline content (" +
              e.parent.type.name +
              ")",
          ));
      }
      class c extends s {
        constructor(e, t = e) {
          h(e), h(t), super(e, t);
        }
        get $cursor() {
          return this.$anchor.pos == this.$head.pos ? this.$head : null;
        }
        map(e, t) {
          let n = e.resolve(t.map(this.head));
          if (!n.parent.inlineContent) return s.near(n);
          let r = e.resolve(t.map(this.anchor));
          return new c(r.parent.inlineContent ? r : n, n);
        }
        replace(e, t = r.p2.empty) {
          if ((super.replace(e, t), t == r.p2.empty)) {
            let t = this.$from.marksAcross(this.$to);
            t && e.ensureMarks(t);
          }
        }
        eq(e) {
          return (
            e instanceof c && e.anchor == this.anchor && e.head == this.head
          );
        }
        getBookmark() {
          return new d(this.anchor, this.head);
        }
        toJSON() {
          return { type: "text", anchor: this.anchor, head: this.head };
        }
        static fromJSON(e, t) {
          if ("number" != typeof t.anchor || "number" != typeof t.head)
            throw new RangeError("Invalid input for TextSelection.fromJSON");
          return new c(e.resolve(t.anchor), e.resolve(t.head));
        }
        static create(e, t, n = t) {
          let r = e.resolve(t);
          return new this(r, n == t ? r : e.resolve(n));
        }
        static between(e, t, n) {
          let r = e.pos - t.pos;
          if (((n && !r) || (n = r >= 0 ? 1 : -1), !t.parent.inlineContent)) {
            let e = s.findFrom(t, n, !0) || s.findFrom(t, -n, !0);
            if (!e) return s.near(t, n);
            t = e.$head;
          }
          return (
            e.parent.inlineContent ||
              ((0 == r ||
                (e = (s.findFrom(e, -n, !0) || s.findFrom(e, n, !0)).$anchor)
                  .pos <
                  t.pos !=
                  r < 0) &&
                (e = t)),
            new c(e, t)
          );
        }
      }
      s.jsonID("text", c);
      class d {
        constructor(e, t) {
          (this.anchor = e), (this.head = t);
        }
        map(e) {
          return new d(e.map(this.anchor), e.map(this.head));
        }
        resolve(e) {
          return c.between(e.resolve(this.anchor), e.resolve(this.head));
        }
      }
      class p extends s {
        constructor(e) {
          let t = e.nodeAfter,
            n = e.node(0).resolve(e.pos + t.nodeSize);
          super(e, n), (this.node = t);
        }
        map(e, t) {
          let { deleted: n, pos: r } = t.mapResult(this.anchor),
            i = e.resolve(r);
          return n ? s.near(i) : new p(i);
        }
        content() {
          return new r.p2(r.HY.from(this.node), 0, 0);
        }
        eq(e) {
          return e instanceof p && e.anchor == this.anchor;
        }
        toJSON() {
          return { type: "node", anchor: this.anchor };
        }
        getBookmark() {
          return new u(this.anchor);
        }
        static fromJSON(e, t) {
          if ("number" != typeof t.anchor)
            throw new RangeError("Invalid input for NodeSelection.fromJSON");
          return new p(e.resolve(t.anchor));
        }
        static create(e, t) {
          return new p(e.resolve(t));
        }
        static isSelectable(e) {
          return !e.isText && !1 !== e.type.spec.selectable;
        }
      }
      (p.prototype.visible = !1), s.jsonID("node", p);
      class u {
        constructor(e) {
          this.anchor = e;
        }
        map(e) {
          let { deleted: t, pos: n } = e.mapResult(this.anchor);
          return t ? new d(n, n) : new u(n);
        }
        resolve(e) {
          let t = e.resolve(this.anchor),
            n = t.nodeAfter;
          return n && p.isSelectable(n) ? new p(t) : s.near(t);
        }
      }
      class f extends s {
        constructor(e) {
          super(e.resolve(0), e.resolve(e.content.size));
        }
        replace(e, t = r.p2.empty) {
          if (t == r.p2.empty) {
            e.delete(0, e.doc.content.size);
            let t = s.atStart(e.doc);
            t.eq(e.selection) || e.setSelection(t);
          } else super.replace(e, t);
        }
        toJSON() {
          return { type: "all" };
        }
        static fromJSON(e) {
          return new f(e);
        }
        map(e) {
          return new f(e);
        }
        eq(e) {
          return e instanceof f;
        }
        getBookmark() {
          return m;
        }
      }
      s.jsonID("all", f);
      const m = {
        map() {
          return this;
        },
        resolve: (e) => new f(e),
      };
      function g(e, t, n, r, i, o = !1) {
        if (t.inlineContent) return c.create(e, n);
        for (
          let s = r - (i > 0 ? 0 : 1);
          i > 0 ? s < t.childCount : s >= 0;
          s += i
        ) {
          let r = t.child(s);
          if (r.isAtom) {
            if (!o && p.isSelectable(r))
              return p.create(e, n - (i < 0 ? r.nodeSize : 0));
          } else {
            let t = g(e, r, n + i, i < 0 ? r.childCount : 0, i, o);
            if (t) return t;
          }
          n += r.nodeSize * i;
        }
        return null;
      }
      function y(e, t, n) {
        let r = e.steps.length - 1;
        if (r < t) return;
        let o,
          l = e.steps[r];
        (l instanceof i.Pu || l instanceof i.FC) &&
          (e.mapping.maps[r].forEach((e, t, n, r) => {
            null == o && (o = r);
          }),
          e.setSelection(s.near(e.doc.resolve(o), n)));
      }
      class w extends i.wx {
        constructor(e) {
          super(e.doc),
            (this.curSelectionFor = 0),
            (this.updated = 0),
            (this.meta = Object.create(null)),
            (this.time = Date.now()),
            (this.curSelection = e.selection),
            (this.storedMarks = e.storedMarks);
        }
        get selection() {
          return (
            this.curSelectionFor < this.steps.length &&
              ((this.curSelection = this.curSelection.map(
                this.doc,
                this.mapping.slice(this.curSelectionFor),
              )),
              (this.curSelectionFor = this.steps.length)),
            this.curSelection
          );
        }
        setSelection(e) {
          if (e.$from.doc != this.doc)
            throw new RangeError(
              "Selection passed to setSelection must point at the current document",
            );
          return (
            (this.curSelection = e),
            (this.curSelectionFor = this.steps.length),
            (this.updated = -3 & (1 | this.updated)),
            (this.storedMarks = null),
            this
          );
        }
        get selectionSet() {
          return (1 & this.updated) > 0;
        }
        setStoredMarks(e) {
          return (this.storedMarks = e), (this.updated |= 2), this;
        }
        ensureMarks(e) {
          return (
            r.vc.sameSet(this.storedMarks || this.selection.$from.marks(), e) ||
              this.setStoredMarks(e),
            this
          );
        }
        addStoredMark(e) {
          return this.ensureMarks(
            e.addToSet(this.storedMarks || this.selection.$head.marks()),
          );
        }
        removeStoredMark(e) {
          return this.ensureMarks(
            e.removeFromSet(this.storedMarks || this.selection.$head.marks()),
          );
        }
        get storedMarksSet() {
          return (2 & this.updated) > 0;
        }
        addStep(e, t) {
          super.addStep(e, t),
            (this.updated = -3 & this.updated),
            (this.storedMarks = null);
        }
        setTime(e) {
          return (this.time = e), this;
        }
        replaceSelection(e) {
          return this.selection.replace(this, e), this;
        }
        replaceSelectionWith(e, t = !0) {
          let n = this.selection;
          return (
            t &&
              (e = e.mark(
                this.storedMarks ||
                  (n.empty
                    ? n.$from.marks()
                    : n.$from.marksAcross(n.$to) || r.vc.none),
              )),
            n.replaceWith(this, e),
            this
          );
        }
        deleteSelection() {
          return this.selection.replace(this), this;
        }
        insertText(e, t, n) {
          let r = this.doc.type.schema;
          if (null == t)
            return e
              ? this.replaceSelectionWith(r.text(e), !0)
              : this.deleteSelection();
          {
            if ((null == n && (n = t), (n = null == n ? t : n), !e))
              return this.deleteRange(t, n);
            let i = this.storedMarks;
            if (!i) {
              let e = this.doc.resolve(t);
              i = n == t ? e.marks() : e.marksAcross(this.doc.resolve(n));
            }
            return (
              this.replaceRangeWith(t, n, r.text(e, i)),
              this.selection.empty ||
                this.setSelection(s.near(this.selection.$to)),
              this
            );
          }
        }
        setMeta(e, t) {
          return (this.meta["string" == typeof e ? e : e.key] = t), this;
        }
        getMeta(e) {
          return this.meta["string" == typeof e ? e : e.key];
        }
        get isGeneric() {
          for (let e in this.meta) return !1;
          return !0;
        }
        scrollIntoView() {
          return (this.updated |= 4), this;
        }
        get scrolledIntoView() {
          return (4 & this.updated) > 0;
        }
      }
      function v(e, t) {
        return t && e ? e.bind(t) : e;
      }
      class b {
        constructor(e, t, n) {
          (this.name = e),
            (this.init = v(t.init, n)),
            (this.apply = v(t.apply, n));
        }
      }
      const S = [
        new b("doc", {
          init: (e) => e.doc || e.schema.topNodeType.createAndFill(),
          apply: (e) => e.doc,
        }),
        new b("selection", {
          init: (e, t) => e.selection || s.atStart(t.doc),
          apply: (e) => e.selection,
        }),
        new b("storedMarks", {
          init: (e) => e.storedMarks || null,
          apply: (e, t, n, r) => (r.selection.$cursor ? e.storedMarks : null),
        }),
        new b("scrollToSelection", {
          init: () => 0,
          apply: (e, t) => (e.scrolledIntoView ? t + 1 : t),
        }),
      ];
      class k {
        constructor(e, t) {
          (this.schema = e),
            (this.plugins = []),
            (this.pluginsByKey = Object.create(null)),
            (this.fields = S.slice()),
            t &&
              t.forEach((e) => {
                if (this.pluginsByKey[e.key])
                  throw new RangeError(
                    "Adding different instances of a keyed plugin (" +
                      e.key +
                      ")",
                  );
                this.plugins.push(e),
                  (this.pluginsByKey[e.key] = e),
                  e.spec.state &&
                    this.fields.push(new b(e.key, e.spec.state, e));
              });
        }
      }
      class x {
        constructor(e) {
          this.config = e;
        }
        get schema() {
          return this.config.schema;
        }
        get plugins() {
          return this.config.plugins;
        }
        apply(e) {
          return this.applyTransaction(e).state;
        }
        filterTransaction(e, t = -1) {
          for (let n = 0; n < this.config.plugins.length; n++)
            if (n != t) {
              let t = this.config.plugins[n];
              if (
                t.spec.filterTransaction &&
                !t.spec.filterTransaction.call(t, e, this)
              )
                return !1;
            }
          return !0;
        }
        applyTransaction(e) {
          if (!this.filterTransaction(e))
            return { state: this, transactions: [] };
          let t = [e],
            n = this.applyInner(e),
            r = null;
          for (;;) {
            let i = !1;
            for (let o = 0; o < this.config.plugins.length; o++) {
              let s = this.config.plugins[o];
              if (s.spec.appendTransaction) {
                let l = r ? r[o].n : 0,
                  a = r ? r[o].state : this,
                  h =
                    l < t.length &&
                    s.spec.appendTransaction.call(s, l ? t.slice(l) : t, a, n);
                if (h && n.filterTransaction(h, o)) {
                  if ((h.setMeta("appendedTransaction", e), !r)) {
                    r = [];
                    for (let e = 0; e < this.config.plugins.length; e++)
                      r.push(
                        e < o
                          ? { state: n, n: t.length }
                          : { state: this, n: 0 },
                      );
                  }
                  t.push(h), (n = n.applyInner(h)), (i = !0);
                }
                r && (r[o] = { state: n, n: t.length });
              }
            }
            if (!i) return { state: n, transactions: t };
          }
        }
        applyInner(e) {
          if (!e.before.eq(this.doc))
            throw new RangeError("Applying a mismatched transaction");
          let t = new x(this.config),
            n = this.config.fields;
          for (let r = 0; r < n.length; r++) {
            let i = n[r];
            t[i.name] = i.apply(e, this[i.name], this, t);
          }
          return t;
        }
        get tr() {
          return new w(this);
        }
        static create(e) {
          let t = new k(e.doc ? e.doc.type.schema : e.schema, e.plugins),
            n = new x(t);
          for (let r = 0; r < t.fields.length; r++)
            n[t.fields[r].name] = t.fields[r].init(e, n);
          return n;
        }
        reconfigure(e) {
          let t = new k(this.schema, e.plugins),
            n = t.fields,
            r = new x(t);
          for (let t = 0; t < n.length; t++) {
            let i = n[t].name;
            r[i] = this.hasOwnProperty(i) ? this[i] : n[t].init(e, r);
          }
          return r;
        }
        toJSON(e) {
          let t = {
            doc: this.doc.toJSON(),
            selection: this.selection.toJSON(),
          };
          if (
            (this.storedMarks &&
              (t.storedMarks = this.storedMarks.map((e) => e.toJSON())),
            e && "object" == typeof e)
          )
            for (let n in e) {
              if ("doc" == n || "selection" == n)
                throw new RangeError(
                  "The JSON fields `doc` and `selection` are reserved",
                );
              let r = e[n],
                i = r.spec.state;
              i && i.toJSON && (t[n] = i.toJSON.call(r, this[r.key]));
            }
          return t;
        }
        static fromJSON(e, t, n) {
          if (!t)
            throw new RangeError("Invalid input for EditorState.fromJSON");
          if (!e.schema)
            throw new RangeError("Required config field 'schema' missing");
          let i = new k(e.schema, e.plugins),
            o = new x(i);
          return (
            i.fields.forEach((i) => {
              if ("doc" == i.name) o.doc = r.NB.fromJSON(e.schema, t.doc);
              else if ("selection" == i.name)
                o.selection = s.fromJSON(o.doc, t.selection);
              else if ("storedMarks" == i.name)
                t.storedMarks &&
                  (o.storedMarks = t.storedMarks.map(e.schema.markFromJSON));
              else {
                if (n)
                  for (let r in n) {
                    let s = n[r],
                      l = s.spec.state;
                    if (
                      s.key == i.name &&
                      l &&
                      l.fromJSON &&
                      Object.prototype.hasOwnProperty.call(t, r)
                    )
                      return void (o[i.name] = l.fromJSON.call(s, e, t[r], o));
                  }
                o[i.name] = i.init(e, o);
              }
            }),
            o
          );
        }
      }
      function M(e, t, n) {
        for (let r in e) {
          let i = e[r];
          i instanceof Function
            ? (i = i.bind(t))
            : "handleDOMEvents" == r && (i = M(i, t, {})),
            (n[r] = i);
        }
        return n;
      }
      class C {
        constructor(e) {
          (this.spec = e),
            (this.props = {}),
            e.props && M(e.props, this, this.props),
            (this.key = e.key ? e.key.key : N("plugin"));
        }
        getState(e) {
          return e[this.key];
        }
      }
      const O = Object.create(null);
      function N(e) {
        return e in O ? e + "$" + ++O[e] : ((O[e] = 0), e + "$");
      }
      class T {
        constructor(e = "key") {
          this.key = N(e);
        }
        get(e) {
          return e.config.pluginsByKey[this.key];
        }
        getState(e) {
          return e[this.key];
        }
      }
    },
    42513: (e, t, n) => {
      n.d(t, {
        Ax: () => M,
        FC: () => w,
        Mn: () => C,
        Pu: () => y,
        dR: () => T,
        k9: () => S,
        nd: () => k,
        nj: () => N,
        vs: () => a,
        wx: () => W,
      });
      var r = n(23126);
      const i = Math.pow(2, 16);
      function o(e) {
        return 65535 & e;
      }
      class s {
        constructor(e, t, n) {
          (this.pos = e), (this.delInfo = t), (this.recover = n);
        }
        get deleted() {
          return (8 & this.delInfo) > 0;
        }
        get deletedBefore() {
          return (5 & this.delInfo) > 0;
        }
        get deletedAfter() {
          return (6 & this.delInfo) > 0;
        }
        get deletedAcross() {
          return (4 & this.delInfo) > 0;
        }
      }
      class l {
        constructor(e, t = !1) {
          if (((this.ranges = e), (this.inverted = t), !e.length && l.empty))
            return l.empty;
        }
        recover(e) {
          let t = 0,
            n = o(e);
          if (!this.inverted)
            for (let e = 0; e < n; e++)
              t += this.ranges[3 * e + 2] - this.ranges[3 * e + 1];
          return (
            this.ranges[3 * n] +
            t +
            (function (e) {
              return (e - (65535 & e)) / i;
            })(e)
          );
        }
        mapResult(e, t = 1) {
          return this._map(e, t, !1);
        }
        map(e, t = 1) {
          return this._map(e, t, !0);
        }
        _map(e, t, n) {
          let r = 0,
            o = this.inverted ? 2 : 1,
            l = this.inverted ? 1 : 2;
          for (let a = 0; a < this.ranges.length; a += 3) {
            let h = this.ranges[a] - (this.inverted ? r : 0);
            if (h > e) break;
            let c = this.ranges[a + o],
              d = this.ranges[a + l],
              p = h + c;
            if (e <= p) {
              let o =
                h + r + ((c ? (e == h ? -1 : e == p ? 1 : t) : t) < 0 ? 0 : d);
              if (n) return o;
              let l = e == (t < 0 ? h : p) ? null : a / 3 + (e - h) * i,
                u = e == h ? 2 : e == p ? 1 : 4;
              return (t < 0 ? e != h : e != p) && (u |= 8), new s(o, u, l);
            }
            r += d - c;
          }
          return n ? e + r : new s(e + r, 0, null);
        }
        touches(e, t) {
          let n = 0,
            r = o(t),
            i = this.inverted ? 2 : 1,
            s = this.inverted ? 1 : 2;
          for (let t = 0; t < this.ranges.length; t += 3) {
            let o = this.ranges[t] - (this.inverted ? n : 0);
            if (o > e) break;
            let l = this.ranges[t + i];
            if (e <= o + l && t == 3 * r) return !0;
            n += this.ranges[t + s] - l;
          }
          return !1;
        }
        forEach(e) {
          let t = this.inverted ? 2 : 1,
            n = this.inverted ? 1 : 2;
          for (let r = 0, i = 0; r < this.ranges.length; r += 3) {
            let o = this.ranges[r],
              s = o - (this.inverted ? i : 0),
              l = o + (this.inverted ? 0 : i),
              a = this.ranges[r + t],
              h = this.ranges[r + n];
            e(s, s + a, l, l + h), (i += h - a);
          }
        }
        invert() {
          return new l(this.ranges, !this.inverted);
        }
        toString() {
          return (this.inverted ? "-" : "") + JSON.stringify(this.ranges);
        }
        static offset(e) {
          return 0 == e ? l.empty : new l(e < 0 ? [0, -e, 0] : [0, 0, e]);
        }
      }
      l.empty = new l([]);
      class a {
        constructor(e = [], t, n = 0, r = e.length) {
          (this.maps = e), (this.mirror = t), (this.from = n), (this.to = r);
        }
        slice(e = 0, t = this.maps.length) {
          return new a(this.maps, this.mirror, e, t);
        }
        copy() {
          return new a(
            this.maps.slice(),
            this.mirror && this.mirror.slice(),
            this.from,
            this.to,
          );
        }
        appendMap(e, t) {
          (this.to = this.maps.push(e)),
            null != t && this.setMirror(this.maps.length - 1, t);
        }
        appendMapping(e) {
          for (let t = 0, n = this.maps.length; t < e.maps.length; t++) {
            let r = e.getMirror(t);
            this.appendMap(e.maps[t], null != r && r < t ? n + r : void 0);
          }
        }
        getMirror(e) {
          if (this.mirror)
            for (let t = 0; t < this.mirror.length; t++)
              if (this.mirror[t] == e) return this.mirror[t + (t % 2 ? -1 : 1)];
        }
        setMirror(e, t) {
          this.mirror || (this.mirror = []), this.mirror.push(e, t);
        }
        appendMappingInverted(e) {
          for (
            let t = e.maps.length - 1, n = this.maps.length + e.maps.length;
            t >= 0;
            t--
          ) {
            let r = e.getMirror(t);
            this.appendMap(
              e.maps[t].invert(),
              null != r && r > t ? n - r - 1 : void 0,
            );
          }
        }
        invert() {
          let e = new a();
          return e.appendMappingInverted(this), e;
        }
        map(e, t = 1) {
          if (this.mirror) return this._map(e, t, !0);
          for (let n = this.from; n < this.to; n++) e = this.maps[n].map(e, t);
          return e;
        }
        mapResult(e, t = 1) {
          return this._map(e, t, !1);
        }
        _map(e, t, n) {
          let r = 0;
          for (let n = this.from; n < this.to; n++) {
            let i = this.maps[n].mapResult(e, t);
            if (null != i.recover) {
              let t = this.getMirror(n);
              if (null != t && t > n && t < this.to) {
                (n = t), (e = this.maps[t].recover(i.recover));
                continue;
              }
            }
            (r |= i.delInfo), (e = i.pos);
          }
          return n ? e : new s(e, r, null);
        }
      }
      const h = Object.create(null);
      class c {
        getMap() {
          return l.empty;
        }
        merge(e) {
          return null;
        }
        static fromJSON(e, t) {
          if (!t || !t.stepType)
            throw new RangeError("Invalid input for Step.fromJSON");
          let n = h[t.stepType];
          if (!n) throw new RangeError(`No step type ${t.stepType} defined`);
          return n.fromJSON(e, t);
        }
        static jsonID(e, t) {
          if (e in h)
            throw new RangeError("Duplicate use of step JSON ID " + e);
          return (h[e] = t), (t.prototype.jsonID = e), t;
        }
      }
      class d {
        constructor(e, t) {
          (this.doc = e), (this.failed = t);
        }
        static ok(e) {
          return new d(e, null);
        }
        static fail(e) {
          return new d(null, e);
        }
        static fromReplace(e, t, n, i) {
          try {
            return d.ok(e.replace(t, n, i));
          } catch (e) {
            if (e instanceof r.e4) return d.fail(e.message);
            throw e;
          }
        }
      }
      function p(e, t, n) {
        let i = [];
        for (let r = 0; r < e.childCount; r++) {
          let o = e.child(r);
          o.content.size && (o = o.copy(p(o.content, t, o))),
            o.isInline && (o = t(o, n, r)),
            i.push(o);
        }
        return r.HY.fromArray(i);
      }
      class u extends c {
        constructor(e, t, n) {
          super(), (this.from = e), (this.to = t), (this.mark = n);
        }
        apply(e) {
          let t = e.slice(this.from, this.to),
            n = e.resolve(this.from),
            i = n.node(n.sharedDepth(this.to)),
            o = new r.p2(
              p(
                t.content,
                (e, t) =>
                  e.isAtom && t.type.allowsMarkType(this.mark.type)
                    ? e.mark(this.mark.addToSet(e.marks))
                    : e,
                i,
              ),
              t.openStart,
              t.openEnd,
            );
          return d.fromReplace(e, this.from, this.to, o);
        }
        invert() {
          return new f(this.from, this.to, this.mark);
        }
        map(e) {
          let t = e.mapResult(this.from, 1),
            n = e.mapResult(this.to, -1);
          return (t.deleted && n.deleted) || t.pos >= n.pos
            ? null
            : new u(t.pos, n.pos, this.mark);
        }
        merge(e) {
          return e instanceof u &&
            e.mark.eq(this.mark) &&
            this.from <= e.to &&
            this.to >= e.from
            ? new u(
                Math.min(this.from, e.from),
                Math.max(this.to, e.to),
                this.mark,
              )
            : null;
        }
        toJSON() {
          return {
            stepType: "addMark",
            mark: this.mark.toJSON(),
            from: this.from,
            to: this.to,
          };
        }
        static fromJSON(e, t) {
          if ("number" != typeof t.from || "number" != typeof t.to)
            throw new RangeError("Invalid input for AddMarkStep.fromJSON");
          return new u(t.from, t.to, e.markFromJSON(t.mark));
        }
      }
      c.jsonID("addMark", u);
      class f extends c {
        constructor(e, t, n) {
          super(), (this.from = e), (this.to = t), (this.mark = n);
        }
        apply(e) {
          let t = e.slice(this.from, this.to),
            n = new r.p2(
              p(t.content, (e) => e.mark(this.mark.removeFromSet(e.marks)), e),
              t.openStart,
              t.openEnd,
            );
          return d.fromReplace(e, this.from, this.to, n);
        }
        invert() {
          return new u(this.from, this.to, this.mark);
        }
        map(e) {
          let t = e.mapResult(this.from, 1),
            n = e.mapResult(this.to, -1);
          return (t.deleted && n.deleted) || t.pos >= n.pos
            ? null
            : new f(t.pos, n.pos, this.mark);
        }
        merge(e) {
          return e instanceof f &&
            e.mark.eq(this.mark) &&
            this.from <= e.to &&
            this.to >= e.from
            ? new f(
                Math.min(this.from, e.from),
                Math.max(this.to, e.to),
                this.mark,
              )
            : null;
        }
        toJSON() {
          return {
            stepType: "removeMark",
            mark: this.mark.toJSON(),
            from: this.from,
            to: this.to,
          };
        }
        static fromJSON(e, t) {
          if ("number" != typeof t.from || "number" != typeof t.to)
            throw new RangeError("Invalid input for RemoveMarkStep.fromJSON");
          return new f(t.from, t.to, e.markFromJSON(t.mark));
        }
      }
      c.jsonID("removeMark", f);
      class m extends c {
        constructor(e, t) {
          super(), (this.pos = e), (this.mark = t);
        }
        apply(e) {
          let t = e.nodeAt(this.pos);
          if (!t) return d.fail("No node at mark step's position");
          let n = t.type.create(t.attrs, null, this.mark.addToSet(t.marks));
          return d.fromReplace(
            e,
            this.pos,
            this.pos + 1,
            new r.p2(r.HY.from(n), 0, t.isLeaf ? 0 : 1),
          );
        }
        invert(e) {
          let t = e.nodeAt(this.pos);
          if (t) {
            let e = this.mark.addToSet(t.marks);
            if (e.length == t.marks.length) {
              for (let n = 0; n < t.marks.length; n++)
                if (!t.marks[n].isInSet(e)) return new m(this.pos, t.marks[n]);
              return new m(this.pos, this.mark);
            }
          }
          return new g(this.pos, this.mark);
        }
        map(e) {
          let t = e.mapResult(this.pos, 1);
          return t.deletedAfter ? null : new m(t.pos, this.mark);
        }
        toJSON() {
          return {
            stepType: "addNodeMark",
            pos: this.pos,
            mark: this.mark.toJSON(),
          };
        }
        static fromJSON(e, t) {
          if ("number" != typeof t.pos)
            throw new RangeError("Invalid input for AddNodeMarkStep.fromJSON");
          return new m(t.pos, e.markFromJSON(t.mark));
        }
      }
      c.jsonID("addNodeMark", m);
      class g extends c {
        constructor(e, t) {
          super(), (this.pos = e), (this.mark = t);
        }
        apply(e) {
          let t = e.nodeAt(this.pos);
          if (!t) return d.fail("No node at mark step's position");
          let n = t.type.create(
            t.attrs,
            null,
            this.mark.removeFromSet(t.marks),
          );
          return d.fromReplace(
            e,
            this.pos,
            this.pos + 1,
            new r.p2(r.HY.from(n), 0, t.isLeaf ? 0 : 1),
          );
        }
        invert(e) {
          let t = e.nodeAt(this.pos);
          return t && this.mark.isInSet(t.marks)
            ? new m(this.pos, this.mark)
            : this;
        }
        map(e) {
          let t = e.mapResult(this.pos, 1);
          return t.deletedAfter ? null : new g(t.pos, this.mark);
        }
        toJSON() {
          return {
            stepType: "removeNodeMark",
            pos: this.pos,
            mark: this.mark.toJSON(),
          };
        }
        static fromJSON(e, t) {
          if ("number" != typeof t.pos)
            throw new RangeError(
              "Invalid input for RemoveNodeMarkStep.fromJSON",
            );
          return new g(t.pos, e.markFromJSON(t.mark));
        }
      }
      c.jsonID("removeNodeMark", g);
      class y extends c {
        constructor(e, t, n, r = !1) {
          super(),
            (this.from = e),
            (this.to = t),
            (this.slice = n),
            (this.structure = r);
        }
        apply(e) {
          return this.structure && v(e, this.from, this.to)
            ? d.fail("Structure replace would overwrite content")
            : d.fromReplace(e, this.from, this.to, this.slice);
        }
        getMap() {
          return new l([this.from, this.to - this.from, this.slice.size]);
        }
        invert(e) {
          return new y(
            this.from,
            this.from + this.slice.size,
            e.slice(this.from, this.to),
          );
        }
        map(e) {
          let t = e.mapResult(this.from, 1),
            n = e.mapResult(this.to, -1);
          return t.deletedAcross && n.deletedAcross
            ? null
            : new y(t.pos, Math.max(t.pos, n.pos), this.slice);
        }
        merge(e) {
          if (!(e instanceof y) || e.structure || this.structure) return null;
          if (
            this.from + this.slice.size != e.from ||
            this.slice.openEnd ||
            e.slice.openStart
          ) {
            if (e.to != this.from || this.slice.openStart || e.slice.openEnd)
              return null;
            {
              let t =
                this.slice.size + e.slice.size == 0
                  ? r.p2.empty
                  : new r.p2(
                      e.slice.content.append(this.slice.content),
                      e.slice.openStart,
                      this.slice.openEnd,
                    );
              return new y(e.from, this.to, t, this.structure);
            }
          }
          {
            let t =
              this.slice.size + e.slice.size == 0
                ? r.p2.empty
                : new r.p2(
                    this.slice.content.append(e.slice.content),
                    this.slice.openStart,
                    e.slice.openEnd,
                  );
            return new y(
              this.from,
              this.to + (e.to - e.from),
              t,
              this.structure,
            );
          }
        }
        toJSON() {
          let e = { stepType: "replace", from: this.from, to: this.to };
          return (
            this.slice.size && (e.slice = this.slice.toJSON()),
            this.structure && (e.structure = !0),
            e
          );
        }
        static fromJSON(e, t) {
          if ("number" != typeof t.from || "number" != typeof t.to)
            throw new RangeError("Invalid input for ReplaceStep.fromJSON");
          return new y(t.from, t.to, r.p2.fromJSON(e, t.slice), !!t.structure);
        }
      }
      c.jsonID("replace", y);
      class w extends c {
        constructor(e, t, n, r, i, o, s = !1) {
          super(),
            (this.from = e),
            (this.to = t),
            (this.gapFrom = n),
            (this.gapTo = r),
            (this.slice = i),
            (this.insert = o),
            (this.structure = s);
        }
        apply(e) {
          if (
            this.structure &&
            (v(e, this.from, this.gapFrom) || v(e, this.gapTo, this.to))
          )
            return d.fail("Structure gap-replace would overwrite content");
          let t = e.slice(this.gapFrom, this.gapTo);
          if (t.openStart || t.openEnd)
            return d.fail("Gap is not a flat range");
          let n = this.slice.insertAt(this.insert, t.content);
          return n
            ? d.fromReplace(e, this.from, this.to, n)
            : d.fail("Content does not fit in gap");
        }
        getMap() {
          return new l([
            this.from,
            this.gapFrom - this.from,
            this.insert,
            this.gapTo,
            this.to - this.gapTo,
            this.slice.size - this.insert,
          ]);
        }
        invert(e) {
          let t = this.gapTo - this.gapFrom;
          return new w(
            this.from,
            this.from + this.slice.size + t,
            this.from + this.insert,
            this.from + this.insert + t,
            e
              .slice(this.from, this.to)
              .removeBetween(this.gapFrom - this.from, this.gapTo - this.from),
            this.gapFrom - this.from,
            this.structure,
          );
        }
        map(e) {
          let t = e.mapResult(this.from, 1),
            n = e.mapResult(this.to, -1),
            r = e.map(this.gapFrom, -1),
            i = e.map(this.gapTo, 1);
          return (t.deletedAcross && n.deletedAcross) || r < t.pos || i > n.pos
            ? null
            : new w(
                t.pos,
                n.pos,
                r,
                i,
                this.slice,
                this.insert,
                this.structure,
              );
        }
        toJSON() {
          let e = {
            stepType: "replaceAround",
            from: this.from,
            to: this.to,
            gapFrom: this.gapFrom,
            gapTo: this.gapTo,
            insert: this.insert,
          };
          return (
            this.slice.size && (e.slice = this.slice.toJSON()),
            this.structure && (e.structure = !0),
            e
          );
        }
        static fromJSON(e, t) {
          if (
            "number" != typeof t.from ||
            "number" != typeof t.to ||
            "number" != typeof t.gapFrom ||
            "number" != typeof t.gapTo ||
            "number" != typeof t.insert
          )
            throw new RangeError(
              "Invalid input for ReplaceAroundStep.fromJSON",
            );
          return new w(
            t.from,
            t.to,
            t.gapFrom,
            t.gapTo,
            r.p2.fromJSON(e, t.slice),
            t.insert,
            !!t.structure,
          );
        }
      }
      function v(e, t, n) {
        let r = e.resolve(t),
          i = n - t,
          o = r.depth;
        for (; i > 0 && o > 0 && r.indexAfter(o) == r.node(o).childCount; )
          o--, i--;
        if (i > 0) {
          let e = r.node(o).maybeChild(r.indexAfter(o));
          for (; i > 0; ) {
            if (!e || e.isLeaf) return !0;
            (e = e.firstChild), i--;
          }
        }
        return !1;
      }
      function b(e, t, n) {
        return (
          (0 == t || e.canReplace(t, e.childCount)) &&
          (n == e.childCount || e.canReplace(0, n))
        );
      }
      function S(e) {
        let t = e.parent.content.cutByIndex(e.startIndex, e.endIndex);
        for (let n = e.depth; ; --n) {
          let r = e.$from.node(n),
            i = e.$from.index(n),
            o = e.$to.indexAfter(n);
          if (n < e.depth && r.canReplace(i, o, t)) return n;
          if (0 == n || r.type.spec.isolating || !b(r, i, o)) break;
        }
        return null;
      }
      function k(e, t, n = null, r = e) {
        let i = (function (e, t) {
            let { parent: n, startIndex: r, endIndex: i } = e,
              o = n.contentMatchAt(r).findWrapping(t);
            if (!o) return null;
            let s = o.length ? o[0] : t;
            return n.canReplaceWith(r, i, s) ? o : null;
          })(e, t),
          o =
            i &&
            (function (e, t) {
              let { parent: n, startIndex: r, endIndex: i } = e,
                o = n.child(r),
                s = t.contentMatch.findWrapping(o.type);
              if (!s) return null;
              let l = (s.length ? s[s.length - 1] : t).contentMatch;
              for (let e = r; l && e < i; e++) l = l.matchType(n.child(e).type);
              return l && l.validEnd ? s : null;
            })(r, t);
        return o
          ? i.map(x).concat({ type: t, attrs: n }).concat(o.map(x))
          : null;
      }
      function x(e) {
        return { type: e, attrs: null };
      }
      function M(e, t, n = 1, r) {
        let i = e.resolve(t),
          o = i.depth - n,
          s = (r && r[r.length - 1]) || i.parent;
        if (
          o < 0 ||
          i.parent.type.spec.isolating ||
          !i.parent.canReplace(i.index(), i.parent.childCount) ||
          !s.type.validContent(
            i.parent.content.cutByIndex(i.index(), i.parent.childCount),
          )
        )
          return !1;
        for (let e = i.depth - 1, t = n - 2; e > o; e--, t--) {
          let n = i.node(e),
            o = i.index(e);
          if (n.type.spec.isolating) return !1;
          let s = n.content.cutByIndex(o, n.childCount),
            l = r && r[t + 1];
          l && (s = s.replaceChild(0, l.type.create(l.attrs)));
          let a = (r && r[t]) || n;
          if (!n.canReplace(o + 1, n.childCount) || !a.type.validContent(s))
            return !1;
        }
        let l = i.indexAfter(o),
          a = r && r[0];
        return i.node(o).canReplaceWith(l, l, a ? a.type : i.node(o + 1).type);
      }
      function C(e, t) {
        let n = e.resolve(t),
          r = n.index();
        return O(n.nodeBefore, n.nodeAfter) && n.parent.canReplace(r, r + 1);
      }
      function O(e, t) {
        return !(!e || !t || e.isLeaf || !e.canAppend(t));
      }
      function N(e, t, n) {
        let r = e.resolve(t);
        if (!n.content.size) return t;
        let i = n.content;
        for (let e = 0; e < n.openStart; e++) i = i.firstChild.content;
        for (let e = 1; e <= (0 == n.openStart && n.size ? 2 : 1); e++)
          for (let t = r.depth; t >= 0; t--) {
            let n =
                t == r.depth
                  ? 0
                  : r.pos <= (r.start(t + 1) + r.end(t + 1)) / 2
                    ? -1
                    : 1,
              o = r.index(t) + (n > 0 ? 1 : 0),
              s = r.node(t),
              l = !1;
            if (1 == e) l = s.canReplace(o, o, i);
            else {
              let e = s.contentMatchAt(o).findWrapping(i.firstChild.type);
              l = e && s.canReplaceWith(o, o, e[0]);
            }
            if (l)
              return 0 == n ? r.pos : n < 0 ? r.before(t + 1) : r.after(t + 1);
          }
        return null;
      }
      function T(e, t, n = t, i = r.p2.empty) {
        if (t == n && !i.size) return null;
        let o = e.resolve(t),
          s = e.resolve(n);
        return D(o, s, i) ? new y(t, n, i) : new E(o, s, i).fit();
      }
      function D(e, t, n) {
        return (
          !n.openStart &&
          !n.openEnd &&
          e.start() == t.start() &&
          e.parent.canReplace(e.index(), t.index(), n.content)
        );
      }
      c.jsonID("replaceAround", w);
      class E {
        constructor(e, t, n) {
          (this.$from = e),
            (this.$to = t),
            (this.unplaced = n),
            (this.frontier = []),
            (this.placed = r.HY.empty);
          for (let t = 0; t <= e.depth; t++) {
            let n = e.node(t);
            this.frontier.push({
              type: n.type,
              match: n.contentMatchAt(e.indexAfter(t)),
            });
          }
          for (let t = e.depth; t > 0; t--)
            this.placed = r.HY.from(e.node(t).copy(this.placed));
        }
        get depth() {
          return this.frontier.length - 1;
        }
        fit() {
          for (; this.unplaced.size; ) {
            let e = this.findFittable();
            e ? this.placeNodes(e) : this.openMore() || this.dropNode();
          }
          let e = this.mustMoveInline(),
            t = this.placed.size - this.depth - this.$from.depth,
            n = this.$from,
            i = this.close(e < 0 ? this.$to : n.doc.resolve(e));
          if (!i) return null;
          let o = this.placed,
            s = n.depth,
            l = i.depth;
          for (; s && l && 1 == o.childCount; )
            (o = o.firstChild.content), s--, l--;
          let a = new r.p2(o, s, l);
          return e > -1
            ? new w(n.pos, e, this.$to.pos, this.$to.end(), a, t)
            : a.size || n.pos != this.$to.pos
              ? new y(n.pos, i.pos, a)
              : null;
        }
        findFittable() {
          let e = this.unplaced.openStart;
          for (
            let t = this.unplaced.content, n = 0, r = this.unplaced.openEnd;
            n < e;
            n++
          ) {
            let i = t.firstChild;
            if (
              (t.childCount > 1 && (r = 0), i.type.spec.isolating && r <= n)
            ) {
              e = n;
              break;
            }
            t = i.content;
          }
          for (let t = 1; t <= 2; t++)
            for (let n = 1 == t ? e : this.unplaced.openStart; n >= 0; n--) {
              let e,
                i = null;
              n
                ? ((i = R(this.unplaced.content, n - 1).firstChild),
                  (e = i.content))
                : (e = this.unplaced.content);
              let o = e.firstChild;
              for (let e = this.depth; e >= 0; e--) {
                let s,
                  { type: l, match: a } = this.frontier[e],
                  h = null;
                if (
                  1 == t &&
                  (o
                    ? a.matchType(o.type) ||
                      (h = a.fillBefore(r.HY.from(o), !1))
                    : i && l.compatibleContent(i.type))
                )
                  return {
                    sliceDepth: n,
                    frontierDepth: e,
                    parent: i,
                    inject: h,
                  };
                if (2 == t && o && (s = a.findWrapping(o.type)))
                  return {
                    sliceDepth: n,
                    frontierDepth: e,
                    parent: i,
                    wrap: s,
                  };
                if (i && a.matchType(i.type)) break;
              }
            }
        }
        openMore() {
          let { content: e, openStart: t, openEnd: n } = this.unplaced,
            i = R(e, t);
          return (
            !(!i.childCount || i.firstChild.isLeaf) &&
            ((this.unplaced = new r.p2(
              e,
              t + 1,
              Math.max(n, i.size + t >= e.size - n ? t + 1 : 0),
            )),
            !0)
          );
        }
        dropNode() {
          let { content: e, openStart: t, openEnd: n } = this.unplaced,
            i = R(e, t);
          if (i.childCount <= 1 && t > 0) {
            let o = e.size - t <= t + i.size;
            this.unplaced = new r.p2(B(e, t - 1, 1), t - 1, o ? t - 1 : n);
          } else this.unplaced = new r.p2(B(e, t, 1), t, n);
        }
        placeNodes({
          sliceDepth: e,
          frontierDepth: t,
          parent: n,
          inject: i,
          wrap: o,
        }) {
          for (; this.depth > t; ) this.closeFrontierNode();
          if (o) for (let e = 0; e < o.length; e++) this.openFrontierNode(o[e]);
          let s = this.unplaced,
            l = n ? n.content : s.content,
            a = s.openStart - e,
            h = 0,
            c = [],
            { match: d, type: p } = this.frontier[t];
          if (i) {
            for (let e = 0; e < i.childCount; e++) c.push(i.child(e));
            d = d.matchFragment(i);
          }
          let u = l.size + e - (s.content.size - s.openEnd);
          for (; h < l.childCount; ) {
            let e = l.child(h),
              t = d.matchType(e.type);
            if (!t) break;
            h++,
              (h > 1 || 0 == a || e.content.size) &&
                ((d = t),
                c.push(
                  z(
                    e.mark(p.allowedMarks(e.marks)),
                    1 == h ? a : 0,
                    h == l.childCount ? u : -1,
                  ),
                ));
          }
          let f = h == l.childCount;
          f || (u = -1),
            (this.placed = A(this.placed, t, r.HY.from(c))),
            (this.frontier[t].match = d),
            f &&
              u < 0 &&
              n &&
              n.type == this.frontier[this.depth].type &&
              this.frontier.length > 1 &&
              this.closeFrontierNode();
          for (let e = 0, t = l; e < u; e++) {
            let e = t.lastChild;
            this.frontier.push({
              type: e.type,
              match: e.contentMatchAt(e.childCount),
            }),
              (t = e.content);
          }
          this.unplaced = f
            ? 0 == e
              ? r.p2.empty
              : new r.p2(
                  B(s.content, e - 1, 1),
                  e - 1,
                  u < 0 ? s.openEnd : e - 1,
                )
            : new r.p2(B(s.content, e, h), s.openStart, s.openEnd);
        }
        mustMoveInline() {
          if (!this.$to.parent.isTextblock) return -1;
          let e,
            t = this.frontier[this.depth];
          if (
            !t.type.isTextblock ||
            !I(this.$to, this.$to.depth, t.type, t.match, !1) ||
            (this.$to.depth == this.depth &&
              (e = this.findCloseLevel(this.$to)) &&
              e.depth == this.depth)
          )
            return -1;
          let { depth: n } = this.$to,
            r = this.$to.after(n);
          for (; n > 1 && r == this.$to.end(--n); ) ++r;
          return r;
        }
        findCloseLevel(e) {
          e: for (let t = Math.min(this.depth, e.depth); t >= 0; t--) {
            let { match: n, type: r } = this.frontier[t],
              i = t < e.depth && e.end(t + 1) == e.pos + (e.depth - (t + 1)),
              o = I(e, t, r, n, i);
            if (o) {
              for (let n = t - 1; n >= 0; n--) {
                let { match: t, type: r } = this.frontier[n],
                  i = I(e, n, r, t, !0);
                if (!i || i.childCount) continue e;
              }
              return {
                depth: t,
                fit: o,
                move: i ? e.doc.resolve(e.after(t + 1)) : e,
              };
            }
          }
        }
        close(e) {
          let t = this.findCloseLevel(e);
          if (!t) return null;
          for (; this.depth > t.depth; ) this.closeFrontierNode();
          t.fit.childCount && (this.placed = A(this.placed, t.depth, t.fit)),
            (e = t.move);
          for (let n = t.depth + 1; n <= e.depth; n++) {
            let t = e.node(n),
              r = t.type.contentMatch.fillBefore(t.content, !0, e.index(n));
            this.openFrontierNode(t.type, t.attrs, r);
          }
          return e;
        }
        openFrontierNode(e, t = null, n) {
          let i = this.frontier[this.depth];
          (i.match = i.match.matchType(e)),
            (this.placed = A(
              this.placed,
              this.depth,
              r.HY.from(e.create(t, n)),
            )),
            this.frontier.push({ type: e, match: e.contentMatch });
        }
        closeFrontierNode() {
          let e = this.frontier.pop().match.fillBefore(r.HY.empty, !0);
          e.childCount &&
            (this.placed = A(this.placed, this.frontier.length, e));
        }
      }
      function B(e, t, n) {
        return 0 == t
          ? e.cutByIndex(n, e.childCount)
          : e.replaceChild(
              0,
              e.firstChild.copy(B(e.firstChild.content, t - 1, n)),
            );
      }
      function A(e, t, n) {
        return 0 == t
          ? e.append(n)
          : e.replaceChild(
              e.childCount - 1,
              e.lastChild.copy(A(e.lastChild.content, t - 1, n)),
            );
      }
      function R(e, t) {
        for (let n = 0; n < t; n++) e = e.firstChild.content;
        return e;
      }
      function z(e, t, n) {
        if (t <= 0) return e;
        let i = e.content;
        return (
          t > 1 &&
            (i = i.replaceChild(
              0,
              z(i.firstChild, t - 1, 1 == i.childCount ? n - 1 : 0),
            )),
          t > 0 &&
            ((i = e.type.contentMatch.fillBefore(i).append(i)),
            n <= 0 &&
              (i = i.append(
                e.type.contentMatch.matchFragment(i).fillBefore(r.HY.empty, !0),
              ))),
          e.copy(i)
        );
      }
      function I(e, t, n, r, i) {
        let o = e.node(t),
          s = i ? e.indexAfter(t) : e.index(t);
        if (s == o.childCount && !n.compatibleContent(o.type)) return null;
        let l = r.fillBefore(o.content, !0, s);
        return l &&
          !(function (e, t, n) {
            for (let r = n; r < t.childCount; r++)
              if (!e.allowsMarks(t.child(r).marks)) return !0;
            return !1;
          })(n, o.content, s)
          ? l
          : null;
      }
      function F(e, t, n, i, o) {
        if (t < n) {
          let r = e.firstChild;
          e = e.replaceChild(0, r.copy(F(r.content, t + 1, n, i, r)));
        }
        if (t > i) {
          let t = o.contentMatchAt(0),
            n = t.fillBefore(e).append(e);
          e = n.append(t.matchFragment(n).fillBefore(r.HY.empty, !0));
        }
        return e;
      }
      function P(e, t) {
        let n = [];
        for (let r = Math.min(e.depth, t.depth); r >= 0; r--) {
          let i = e.start(r);
          if (
            i < e.pos - (e.depth - r) ||
            t.end(r) > t.pos + (t.depth - r) ||
            e.node(r).type.spec.isolating ||
            t.node(r).type.spec.isolating
          )
            break;
          (i == t.start(r) ||
            (r == e.depth &&
              r == t.depth &&
              e.parent.inlineContent &&
              t.parent.inlineContent &&
              r &&
              t.start(r - 1) == i - 1)) &&
            n.push(r);
        }
        return n;
      }
      class $ extends c {
        constructor(e, t, n) {
          super(), (this.pos = e), (this.attr = t), (this.value = n);
        }
        apply(e) {
          let t = e.nodeAt(this.pos);
          if (!t) return d.fail("No node at attribute step's position");
          let n = Object.create(null);
          for (let e in t.attrs) n[e] = t.attrs[e];
          n[this.attr] = this.value;
          let i = t.type.create(n, null, t.marks);
          return d.fromReplace(
            e,
            this.pos,
            this.pos + 1,
            new r.p2(r.HY.from(i), 0, t.isLeaf ? 0 : 1),
          );
        }
        getMap() {
          return l.empty;
        }
        invert(e) {
          return new $(
            this.pos,
            this.attr,
            e.nodeAt(this.pos).attrs[this.attr],
          );
        }
        map(e) {
          let t = e.mapResult(this.pos, 1);
          return t.deletedAfter ? null : new $(t.pos, this.attr, this.value);
        }
        toJSON() {
          return {
            stepType: "attr",
            pos: this.pos,
            attr: this.attr,
            value: this.value,
          };
        }
        static fromJSON(e, t) {
          if ("number" != typeof t.pos || "string" != typeof t.attr)
            throw new RangeError("Invalid input for AttrStep.fromJSON");
          return new $(t.pos, t.attr, t.value);
        }
      }
      c.jsonID("attr", $);
      class V extends c {
        constructor(e, t) {
          super(), (this.attr = e), (this.value = t);
        }
        apply(e) {
          let t = Object.create(null);
          for (let n in e.attrs) t[n] = e.attrs[n];
          t[this.attr] = this.value;
          let n = e.type.create(t, e.content, e.marks);
          return d.ok(n);
        }
        getMap() {
          return l.empty;
        }
        invert(e) {
          return new V(this.attr, e.attrs[this.attr]);
        }
        map(e) {
          return this;
        }
        toJSON() {
          return { stepType: "docAttr", attr: this.attr, value: this.value };
        }
        static fromJSON(e, t) {
          if ("string" != typeof t.attr)
            throw new RangeError("Invalid input for DocAttrStep.fromJSON");
          return new V(t.attr, t.value);
        }
      }
      c.jsonID("docAttr", V);
      let _ = class extends Error {};
      (_ = function e(t) {
        let n = Error.call(this, t);
        return (n.__proto__ = e.prototype), n;
      }),
        ((_.prototype = Object.create(Error.prototype)).constructor = _),
        (_.prototype.name = "TransformError");
      class W {
        constructor(e) {
          (this.doc = e),
            (this.steps = []),
            (this.docs = []),
            (this.mapping = new a());
        }
        get before() {
          return this.docs.length ? this.docs[0] : this.doc;
        }
        step(e) {
          let t = this.maybeStep(e);
          if (t.failed) throw new _(t.failed);
          return this;
        }
        maybeStep(e) {
          let t = e.apply(this.doc);
          return t.failed || this.addStep(e, t.doc), t;
        }
        get docChanged() {
          return this.steps.length > 0;
        }
        addStep(e, t) {
          this.docs.push(this.doc),
            this.steps.push(e),
            this.mapping.appendMap(e.getMap()),
            (this.doc = t);
        }
        replace(e, t = e, n = r.p2.empty) {
          let i = T(this.doc, e, t, n);
          return i && this.step(i), this;
        }
        replaceWith(e, t, n) {
          return this.replace(e, t, new r.p2(r.HY.from(n), 0, 0));
        }
        delete(e, t) {
          return this.replace(e, t, r.p2.empty);
        }
        insert(e, t) {
          return this.replaceWith(e, e, t);
        }
        replaceRange(e, t, n) {
          return (
            (function (e, t, n, i) {
              if (!i.size) return e.deleteRange(t, n);
              let o = e.doc.resolve(t),
                s = e.doc.resolve(n);
              if (D(o, s, i)) return e.step(new y(t, n, i));
              let l = P(o, e.doc.resolve(n));
              0 == l[l.length - 1] && l.pop();
              let a = -(o.depth + 1);
              l.unshift(a);
              for (let e = o.depth, t = o.pos - 1; e > 0; e--, t--) {
                let n = o.node(e).type.spec;
                if (n.defining || n.definingAsContext || n.isolating) break;
                l.indexOf(e) > -1
                  ? (a = e)
                  : o.before(e) == t && l.splice(1, 0, -e);
              }
              let h = l.indexOf(a),
                c = [],
                d = i.openStart;
              for (let e = i.content, t = 0; ; t++) {
                let n = e.firstChild;
                if ((c.push(n), t == i.openStart)) break;
                e = n.content;
              }
              for (let e = d - 1; e >= 0; e--) {
                let t = c[e],
                  n = (p = t.type).spec.defining || p.spec.definingForContent;
                if (n && !t.sameMarkup(o.node(Math.abs(a) - 1))) d = e;
                else if (n || !t.type.isTextblock) break;
              }
              var p;
              for (let t = i.openStart; t >= 0; t--) {
                let a = (t + d + 1) % (i.openStart + 1),
                  p = c[a];
                if (p)
                  for (let t = 0; t < l.length; t++) {
                    let c = l[(t + h) % l.length],
                      d = !0;
                    c < 0 && ((d = !1), (c = -c));
                    let u = o.node(c - 1),
                      f = o.index(c - 1);
                    if (u.canReplaceWith(f, f, p.type, p.marks))
                      return e.replace(
                        o.before(c),
                        d ? s.after(c) : n,
                        new r.p2(F(i.content, 0, i.openStart, a), a, i.openEnd),
                      );
                  }
              }
              let u = e.steps.length;
              for (
                let r = l.length - 1;
                r >= 0 && (e.replace(t, n, i), !(e.steps.length > u));
                r--
              ) {
                let e = l[r];
                e < 0 || ((t = o.before(e)), (n = s.after(e)));
              }
            })(this, e, t, n),
            this
          );
        }
        replaceRangeWith(e, t, n) {
          return (
            (function (e, t, n, i) {
              if (
                !i.isInline &&
                t == n &&
                e.doc.resolve(t).parent.content.size
              ) {
                let r = (function (e, t, n) {
                  let r = e.resolve(t);
                  if (r.parent.canReplaceWith(r.index(), r.index(), n))
                    return t;
                  if (0 == r.parentOffset)
                    for (let e = r.depth - 1; e >= 0; e--) {
                      let t = r.index(e);
                      if (r.node(e).canReplaceWith(t, t, n))
                        return r.before(e + 1);
                      if (t > 0) return null;
                    }
                  if (r.parentOffset == r.parent.content.size)
                    for (let e = r.depth - 1; e >= 0; e--) {
                      let t = r.indexAfter(e);
                      if (r.node(e).canReplaceWith(t, t, n))
                        return r.after(e + 1);
                      if (t < r.node(e).childCount) return null;
                    }
                  return null;
                })(e.doc, t, i.type);
                null != r && (t = n = r);
              }
              e.replaceRange(t, n, new r.p2(r.HY.from(i), 0, 0));
            })(this, e, t, n),
            this
          );
        }
        deleteRange(e, t) {
          return (
            (function (e, t, n) {
              let r = e.doc.resolve(t),
                i = e.doc.resolve(n),
                o = P(r, i);
              for (let t = 0; t < o.length; t++) {
                let n = o[t],
                  s = t == o.length - 1;
                if ((s && 0 == n) || r.node(n).type.contentMatch.validEnd)
                  return e.delete(r.start(n), i.end(n));
                if (
                  n > 0 &&
                  (s ||
                    r
                      .node(n - 1)
                      .canReplace(r.index(n - 1), i.indexAfter(n - 1)))
                )
                  return e.delete(r.before(n), i.after(n));
              }
              for (let o = 1; o <= r.depth && o <= i.depth; o++)
                if (
                  t - r.start(o) == r.depth - o &&
                  n > r.end(o) &&
                  i.end(o) - n != i.depth - o
                )
                  return e.delete(r.before(o), n);
              e.delete(t, n);
            })(this, e, t),
            this
          );
        }
        lift(e, t) {
          return (
            (function (e, t, n) {
              let { $from: i, $to: o, depth: s } = t,
                l = i.before(s + 1),
                a = o.after(s + 1),
                h = l,
                c = a,
                d = r.HY.empty,
                p = 0;
              for (let e = s, t = !1; e > n; e--)
                t || i.index(e) > 0
                  ? ((t = !0), (d = r.HY.from(i.node(e).copy(d))), p++)
                  : h--;
              let u = r.HY.empty,
                f = 0;
              for (let e = s, t = !1; e > n; e--)
                t || o.after(e + 1) < o.end(e)
                  ? ((t = !0), (u = r.HY.from(o.node(e).copy(u))), f++)
                  : c++;
              e.step(
                new w(h, c, l, a, new r.p2(d.append(u), p, f), d.size - p, !0),
              );
            })(this, e, t),
            this
          );
        }
        join(e, t = 1) {
          return (
            (function (e, t, n) {
              let i = new y(t - n, t + n, r.p2.empty, !0);
              e.step(i);
            })(this, e, t),
            this
          );
        }
        wrap(e, t) {
          return (
            (function (e, t, n) {
              let i = r.HY.empty;
              for (let e = n.length - 1; e >= 0; e--) {
                if (i.size) {
                  let t = n[e].type.contentMatch.matchFragment(i);
                  if (!t || !t.validEnd)
                    throw new RangeError(
                      "Wrapper type given to Transform.wrap does not form valid content of its parent wrapper",
                    );
                }
                i = r.HY.from(n[e].type.create(n[e].attrs, i));
              }
              let o = t.start,
                s = t.end;
              e.step(new w(o, s, o, s, new r.p2(i, 0, 0), n.length, !0));
            })(this, e, t),
            this
          );
        }
        setBlockType(e, t = e, n, i = null) {
          return (
            (function (e, t, n, i, o) {
              if (!i.isTextblock)
                throw new RangeError(
                  "Type given to setBlockType should be a textblock",
                );
              let s = e.steps.length;
              e.doc.nodesBetween(t, n, (t, n) => {
                if (
                  t.isTextblock &&
                  !t.hasMarkup(i, o) &&
                  (function (e, t, n) {
                    let r = e.resolve(t),
                      i = r.index();
                    return r.parent.canReplaceWith(i, i + 1, n);
                  })(e.doc, e.mapping.slice(s).map(n), i)
                ) {
                  e.clearIncompatible(e.mapping.slice(s).map(n, 1), i);
                  let l = e.mapping.slice(s),
                    a = l.map(n, 1),
                    h = l.map(n + t.nodeSize, 1);
                  return (
                    e.step(
                      new w(
                        a,
                        h,
                        a + 1,
                        h - 1,
                        new r.p2(r.HY.from(i.create(o, null, t.marks)), 0, 0),
                        1,
                        !0,
                      ),
                    ),
                    !1
                  );
                }
              });
            })(this, e, t, n, i),
            this
          );
        }
        setNodeMarkup(e, t, n = null, i) {
          return (
            (function (e, t, n, i, o) {
              let s = e.doc.nodeAt(t);
              if (!s) throw new RangeError("No node at given position");
              n || (n = s.type);
              let l = n.create(i, null, o || s.marks);
              if (s.isLeaf) return e.replaceWith(t, t + s.nodeSize, l);
              if (!n.validContent(s.content))
                throw new RangeError("Invalid content for node type " + n.name);
              e.step(
                new w(
                  t,
                  t + s.nodeSize,
                  t + 1,
                  t + s.nodeSize - 1,
                  new r.p2(r.HY.from(l), 0, 0),
                  1,
                  !0,
                ),
              );
            })(this, e, t, n, i),
            this
          );
        }
        setNodeAttribute(e, t, n) {
          return this.step(new $(e, t, n)), this;
        }
        setDocAttribute(e, t) {
          return this.step(new V(e, t)), this;
        }
        addNodeMark(e, t) {
          return this.step(new m(e, t)), this;
        }
        removeNodeMark(e, t) {
          if (!(t instanceof r.vc)) {
            let n = this.doc.nodeAt(e);
            if (!n) throw new RangeError("No node at position " + e);
            if (!(t = t.isInSet(n.marks))) return this;
          }
          return this.step(new g(e, t)), this;
        }
        split(e, t = 1, n) {
          return (
            (function (e, t, n = 1, i) {
              let o = e.doc.resolve(t),
                s = r.HY.empty,
                l = r.HY.empty;
              for (
                let e = o.depth, t = o.depth - n, a = n - 1;
                e > t;
                e--, a--
              ) {
                s = r.HY.from(o.node(e).copy(s));
                let t = i && i[a];
                l = r.HY.from(
                  t ? t.type.create(t.attrs, l) : o.node(e).copy(l),
                );
              }
              e.step(new y(t, t, new r.p2(s.append(l), n, n), !0));
            })(this, e, t, n),
            this
          );
        }
        addMark(e, t, n) {
          return (
            (function (e, t, n, r) {
              let i,
                o,
                s = [],
                l = [];
              e.doc.nodesBetween(t, n, (e, a, h) => {
                if (!e.isInline) return;
                let c = e.marks;
                if (!r.isInSet(c) && h.type.allowsMarkType(r.type)) {
                  let h = Math.max(a, t),
                    d = Math.min(a + e.nodeSize, n),
                    p = r.addToSet(c);
                  for (let e = 0; e < c.length; e++)
                    c[e].isInSet(p) ||
                      (i && i.to == h && i.mark.eq(c[e])
                        ? (i.to = d)
                        : s.push((i = new f(h, d, c[e]))));
                  o && o.to == h ? (o.to = d) : l.push((o = new u(h, d, r)));
                }
              }),
                s.forEach((t) => e.step(t)),
                l.forEach((t) => e.step(t));
            })(this, e, t, n),
            this
          );
        }
        removeMark(e, t, n) {
          return (
            (function (e, t, n, i) {
              let o = [],
                s = 0;
              e.doc.nodesBetween(t, n, (e, l) => {
                if (!e.isInline) return;
                s++;
                let a = null;
                if (i instanceof r.ZU) {
                  let t,
                    n = e.marks;
                  for (; (t = i.isInSet(n)); )
                    (a || (a = [])).push(t), (n = t.removeFromSet(n));
                } else i ? i.isInSet(e.marks) && (a = [i]) : (a = e.marks);
                if (a && a.length) {
                  let r = Math.min(l + e.nodeSize, n);
                  for (let e = 0; e < a.length; e++) {
                    let n,
                      i = a[e];
                    for (let e = 0; e < o.length; e++) {
                      let t = o[e];
                      t.step == s - 1 && i.eq(o[e].style) && (n = t);
                    }
                    n
                      ? ((n.to = r), (n.step = s))
                      : o.push({
                          style: i,
                          from: Math.max(l, t),
                          to: r,
                          step: s,
                        });
                  }
                }
              }),
                o.forEach((t) => e.step(new f(t.from, t.to, t.style)));
            })(this, e, t, n),
            this
          );
        }
        clearIncompatible(e, t, n) {
          return (
            (function (e, t, n, i = n.contentMatch) {
              let o = e.doc.nodeAt(t),
                s = [],
                l = t + 1;
              for (let t = 0; t < o.childCount; t++) {
                let a = o.child(t),
                  h = l + a.nodeSize,
                  c = i.matchType(a.type);
                if (c) {
                  i = c;
                  for (let t = 0; t < a.marks.length; t++)
                    n.allowsMarkType(a.marks[t].type) ||
                      e.step(new f(l, h, a.marks[t]));
                  if (a.isText && !n.spec.code) {
                    let e,
                      t,
                      i = /\r?\n|\r/g;
                    for (; (e = i.exec(a.text)); )
                      t ||
                        (t = new r.p2(
                          r.HY.from(
                            n.schema.text(" ", n.allowedMarks(a.marks)),
                          ),
                          0,
                          0,
                        )),
                        s.push(
                          new y(l + e.index, l + e.index + e[0].length, t),
                        );
                  }
                } else s.push(new y(l, h, r.p2.empty));
                l = h;
              }
              if (!i.validEnd) {
                let t = i.fillBefore(r.HY.empty, !0);
                e.replace(l, l, new r.p2(t, 0, 0));
              }
              for (let t = s.length - 1; t >= 0; t--) e.step(s[t]);
            })(this, e, t, n),
            this
          );
        }
      }
    },
    31934: (e, t, n) => {
      n.d(t, { tk: () => pn });
      var r = n(4005),
        i = n(23126),
        o = n(42513);
      const s = function (e) {
          for (var t = 0; ; t++) if (!(e = e.previousSibling)) return t;
        },
        l = function (e) {
          let t = e.assignedSlot || e.parentNode;
          return t && 11 == t.nodeType ? t.host : t;
        };
      let a = null;
      const h = function (e, t, n) {
          let r = a || (a = document.createRange());
          return (
            r.setEnd(e, null == n ? e.nodeValue.length : n),
            r.setStart(e, t || 0),
            r
          );
        },
        c = function (e, t, n, r) {
          return n && (p(e, t, n, r, -1) || p(e, t, n, r, 1));
        },
        d = /^(img|br|input|textarea|hr)$/i;
      function p(e, t, n, r, i) {
        for (;;) {
          if (e == n && t == r) return !0;
          if (t == (i < 0 ? 0 : u(e))) {
            let n = e.parentNode;
            if (
              !n ||
              1 != n.nodeType ||
              f(e) ||
              d.test(e.nodeName) ||
              "false" == e.contentEditable
            )
              return !1;
            (t = s(e) + (i < 0 ? 0 : 1)), (e = n);
          } else {
            if (1 != e.nodeType) return !1;
            if (
              "false" ==
              (e = e.childNodes[t + (i < 0 ? -1 : 0)]).contentEditable
            )
              return !1;
            t = i < 0 ? u(e) : 0;
          }
        }
      }
      function u(e) {
        return 3 == e.nodeType ? e.nodeValue.length : e.childNodes.length;
      }
      function f(e) {
        let t;
        for (let n = e; n && !(t = n.pmViewDesc); n = n.parentNode);
        return (
          t && t.node && t.node.isBlock && (t.dom == e || t.contentDOM == e)
        );
      }
      const m = function (e) {
        return (
          e.focusNode &&
          c(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset)
        );
      };
      function g(e, t) {
        let n = document.createEvent("Event");
        return (
          n.initEvent("keydown", !0, !0),
          (n.keyCode = e),
          (n.key = n.code = t),
          n
        );
      }
      const y = "undefined" != typeof navigator ? navigator : null,
        w = "undefined" != typeof document ? document : null,
        v = (y && y.userAgent) || "",
        b = /Edge\/(\d+)/.exec(v),
        S = /MSIE \d/.exec(v),
        k = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(v),
        x = !!(S || k || b),
        M = S ? document.documentMode : k ? +k[1] : b ? +b[1] : 0,
        C = !x && /gecko\/(\d+)/i.test(v);
      C && (/Firefox\/(\d+)/.exec(v) || [0, 0])[1];
      const O = !x && /Chrome\/(\d+)/.exec(v),
        N = !!O,
        T = O ? +O[1] : 0,
        D = !x && !!y && /Apple Computer/.test(y.vendor),
        E = D && (/Mobile\/\w+/.test(v) || (!!y && y.maxTouchPoints > 2)),
        B = E || (!!y && /Mac/.test(y.platform)),
        A = !!y && /Win/.test(y.platform),
        R = /Android \d/.test(v),
        z = !!w && "webkitFontSmoothing" in w.documentElement.style,
        I = z
          ? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1]
          : 0;
      function F(e) {
        return {
          left: 0,
          right: e.documentElement.clientWidth,
          top: 0,
          bottom: e.documentElement.clientHeight,
        };
      }
      function P(e, t) {
        return "number" == typeof e ? e : e[t];
      }
      function $(e) {
        let t = e.getBoundingClientRect(),
          n = t.width / e.offsetWidth || 1,
          r = t.height / e.offsetHeight || 1;
        return {
          left: t.left,
          right: t.left + e.clientWidth * n,
          top: t.top,
          bottom: t.top + e.clientHeight * r,
        };
      }
      function V(e, t, n) {
        let r = e.someProp("scrollThreshold") || 0,
          i = e.someProp("scrollMargin") || 5,
          o = e.dom.ownerDocument;
        for (let s = n || e.dom; s; s = l(s)) {
          if (1 != s.nodeType) continue;
          let e = s,
            n = e == o.body,
            l = n ? F(o) : $(e),
            a = 0,
            h = 0;
          if (
            (t.top < l.top + P(r, "top")
              ? (h = -(l.top - t.top + P(i, "top")))
              : t.bottom > l.bottom - P(r, "bottom") &&
                (h =
                  t.bottom - t.top > l.bottom - l.top
                    ? t.top + P(i, "top") - l.top
                    : t.bottom - l.bottom + P(i, "bottom")),
            t.left < l.left + P(r, "left")
              ? (a = -(l.left - t.left + P(i, "left")))
              : t.right > l.right - P(r, "right") &&
                (a = t.right - l.right + P(i, "right")),
            a || h)
          )
            if (n) o.defaultView.scrollBy(a, h);
            else {
              let n = e.scrollLeft,
                r = e.scrollTop;
              h && (e.scrollTop += h), a && (e.scrollLeft += a);
              let i = e.scrollLeft - n,
                o = e.scrollTop - r;
              t = {
                left: t.left - i,
                top: t.top - o,
                right: t.right - i,
                bottom: t.bottom - o,
              };
            }
          if (n || /^(fixed|sticky)$/.test(getComputedStyle(s).position)) break;
        }
      }
      function _(e) {
        let t = [],
          n = e.ownerDocument;
        for (
          let r = e;
          r &&
          (t.push({ dom: r, top: r.scrollTop, left: r.scrollLeft }), e != n);
          r = l(r)
        );
        return t;
      }
      function W(e, t) {
        for (let n = 0; n < e.length; n++) {
          let { dom: r, top: i, left: o } = e[n];
          r.scrollTop != i + t && (r.scrollTop = i + t),
            r.scrollLeft != o && (r.scrollLeft = o);
        }
      }
      let q = null;
      function j(e, t) {
        let n,
          r,
          i,
          o,
          s = 2e8,
          l = 0,
          a = t.top,
          c = t.top;
        for (let d = e.firstChild, p = 0; d; d = d.nextSibling, p++) {
          let e;
          if (1 == d.nodeType) e = d.getClientRects();
          else {
            if (3 != d.nodeType) continue;
            e = h(d).getClientRects();
          }
          for (let h = 0; h < e.length; h++) {
            let u = e[h];
            if (u.top <= a && u.bottom >= c) {
              (a = Math.max(u.bottom, a)), (c = Math.min(u.top, c));
              let e =
                u.left > t.left
                  ? u.left - t.left
                  : u.right < t.left
                    ? t.left - u.right
                    : 0;
              if (e < s) {
                (n = d),
                  (s = e),
                  (r =
                    e && 3 == n.nodeType
                      ? {
                          left: u.right < t.left ? u.right : u.left,
                          top: t.top,
                        }
                      : t),
                  1 == d.nodeType &&
                    e &&
                    (l = p + (t.left >= (u.left + u.right) / 2 ? 1 : 0));
                continue;
              }
            } else
              u.top > t.top &&
                !i &&
                u.left <= t.left &&
                u.right >= t.left &&
                ((i = d),
                (o = {
                  left: Math.max(u.left, Math.min(u.right, t.left)),
                  top: u.top,
                }));
            !n &&
              ((t.left >= u.right && t.top >= u.top) ||
                (t.left >= u.left && t.top >= u.bottom)) &&
              (l = p + 1);
          }
        }
        return (
          !n && i && ((n = i), (r = o), (s = 0)),
          n && 3 == n.nodeType
            ? (function (e, t) {
                let n = e.nodeValue.length,
                  r = document.createRange();
                for (let i = 0; i < n; i++) {
                  r.setEnd(e, i + 1), r.setStart(e, i);
                  let n = K(r, 1);
                  if (n.top != n.bottom && L(t, n))
                    return {
                      node: e,
                      offset: i + (t.left >= (n.left + n.right) / 2 ? 1 : 0),
                    };
                }
                return { node: e, offset: 0 };
              })(n, r)
            : !n || (s && 1 == n.nodeType)
              ? { node: e, offset: l }
              : j(n, r)
        );
      }
      function L(e, t) {
        return (
          e.left >= t.left - 1 &&
          e.left <= t.right + 1 &&
          e.top >= t.top - 1 &&
          e.top <= t.bottom + 1
        );
      }
      function H(e, t, n) {
        let r = e.childNodes.length;
        if (r && n.top < n.bottom)
          for (
            let i = Math.max(
                0,
                Math.min(
                  r - 1,
                  Math.floor((r * (t.top - n.top)) / (n.bottom - n.top)) - 2,
                ),
              ),
              o = i;
            ;

          ) {
            let n = e.childNodes[o];
            if (1 == n.nodeType) {
              let e = n.getClientRects();
              for (let r = 0; r < e.length; r++) {
                let i = e[r];
                if (L(t, i)) return H(n, t, i);
              }
            }
            if ((o = (o + 1) % r) == i) break;
          }
        return e;
      }
      function J(e, t) {
        let n,
          r = e.dom.ownerDocument,
          i = 0,
          o = (function (e, t, n) {
            if (e.caretPositionFromPoint)
              try {
                let r = e.caretPositionFromPoint(t, n);
                if (r) return { node: r.offsetNode, offset: r.offset };
              } catch (e) {}
            if (e.caretRangeFromPoint) {
              let r = e.caretRangeFromPoint(t, n);
              if (r) return { node: r.startContainer, offset: r.startOffset };
            }
          })(r, t.left, t.top);
        o && ({ node: n, offset: i } = o);
        let s,
          a = (e.root.elementFromPoint ? e.root : r).elementFromPoint(
            t.left,
            t.top,
          );
        if (!a || !e.dom.contains(1 != a.nodeType ? a.parentNode : a)) {
          let n = e.dom.getBoundingClientRect();
          if (!L(t, n)) return null;
          if (((a = H(e.dom, t, n)), !a)) return null;
        }
        if (D) for (let e = a; n && e; e = l(e)) e.draggable && (n = void 0);
        if (
          ((a = (function (e, t) {
            let n = e.parentNode;
            return n &&
              /^li$/i.test(n.nodeName) &&
              t.left < e.getBoundingClientRect().left
              ? n
              : e;
          })(a, t)),
          n)
        ) {
          if (
            C &&
            1 == n.nodeType &&
            ((i = Math.min(i, n.childNodes.length)), i < n.childNodes.length)
          ) {
            let e,
              r = n.childNodes[i];
            "IMG" == r.nodeName &&
              (e = r.getBoundingClientRect()).right <= t.left &&
              e.bottom > t.top &&
              i++;
          }
          let r;
          z &&
            i &&
            1 == n.nodeType &&
            1 == (r = n.childNodes[i - 1]).nodeType &&
            "false" == r.contentEditable &&
            r.getBoundingClientRect().top >= t.top &&
            i--,
            n == e.dom &&
            i == n.childNodes.length - 1 &&
            1 == n.lastChild.nodeType &&
            t.top > n.lastChild.getBoundingClientRect().bottom
              ? (s = e.state.doc.content.size)
              : (0 != i &&
                  1 == n.nodeType &&
                  "BR" == n.childNodes[i - 1].nodeName) ||
                (s = (function (e, t, n, r) {
                  let i = -1;
                  for (let n = t, o = !1; n != e.dom; ) {
                    let t = e.docView.nearestDesc(n, !0);
                    if (!t) return null;
                    if (
                      1 == t.dom.nodeType &&
                      ((t.node.isBlock && t.parent && !o) || !t.contentDOM)
                    ) {
                      let e = t.dom.getBoundingClientRect();
                      if (
                        (t.node.isBlock &&
                          t.parent &&
                          !o &&
                          ((o = !0),
                          e.left > r.left || e.top > r.top
                            ? (i = t.posBefore)
                            : (e.right < r.left || e.bottom < r.top) &&
                              (i = t.posAfter)),
                        !t.contentDOM && i < 0 && !t.node.isText)
                      )
                        return (
                          t.node.isBlock
                            ? r.top < (e.top + e.bottom) / 2
                            : r.left < (e.left + e.right) / 2
                        )
                          ? t.posBefore
                          : t.posAfter;
                    }
                    n = t.dom.parentNode;
                  }
                  return i > -1 ? i : e.docView.posFromDOM(t, n, -1);
                })(e, n, i, t));
        }
        null == s &&
          (s = (function (e, t, n) {
            let { node: r, offset: i } = j(t, n),
              o = -1;
            if (1 == r.nodeType && !r.firstChild) {
              let e = r.getBoundingClientRect();
              o = e.left != e.right && n.left > (e.left + e.right) / 2 ? 1 : -1;
            }
            return e.docView.posFromDOM(r, i, o);
          })(e, a, t));
        let h = e.docView.nearestDesc(a, !0);
        return { pos: s, inside: h ? h.posAtStart - h.border : -1 };
      }
      function Y(e) {
        return e.top < e.bottom || e.left < e.right;
      }
      function K(e, t) {
        let n = e.getClientRects();
        if (n.length) {
          let e = n[t < 0 ? 0 : n.length - 1];
          if (Y(e)) return e;
        }
        return Array.prototype.find.call(n, Y) || e.getBoundingClientRect();
      }
      const U = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
      function G(e, t, n) {
        let {
            node: r,
            offset: i,
            atom: o,
          } = e.docView.domFromPos(t, n < 0 ? -1 : 1),
          s = z || C;
        if (3 == r.nodeType) {
          if (
            !s ||
            (!U.test(r.nodeValue) && (n < 0 ? i : i != r.nodeValue.length))
          ) {
            let e = i,
              t = i,
              o = n < 0 ? 1 : -1;
            return (
              n < 0 && !i
                ? (t++, (o = -1))
                : n >= 0 && i == r.nodeValue.length
                  ? (e--, (o = 1))
                  : n < 0
                    ? e--
                    : t++,
              X(K(h(r, e, t), o), o < 0)
            );
          }
          {
            let e = K(h(r, i, i), n);
            if (
              C &&
              i &&
              /\s/.test(r.nodeValue[i - 1]) &&
              i < r.nodeValue.length
            ) {
              let t = K(h(r, i - 1, i - 1), -1);
              if (t.top == e.top) {
                let n = K(h(r, i, i + 1), -1);
                if (n.top != e.top) return X(n, n.left < t.left);
              }
            }
            return e;
          }
        }
        if (!e.state.doc.resolve(t - (o || 0)).parent.inlineContent) {
          if (null == o && i && (n < 0 || i == u(r))) {
            let e = r.childNodes[i - 1];
            if (1 == e.nodeType) return Z(e.getBoundingClientRect(), !1);
          }
          if (null == o && i < u(r)) {
            let e = r.childNodes[i];
            if (1 == e.nodeType) return Z(e.getBoundingClientRect(), !0);
          }
          return Z(r.getBoundingClientRect(), n >= 0);
        }
        if (null == o && i && (n < 0 || i == u(r))) {
          let e = r.childNodes[i - 1],
            t =
              3 == e.nodeType
                ? h(e, u(e) - (s ? 0 : 1))
                : 1 != e.nodeType || ("BR" == e.nodeName && e.nextSibling)
                  ? null
                  : e;
          if (t) return X(K(t, 1), !1);
        }
        if (null == o && i < u(r)) {
          let e = r.childNodes[i];
          for (; e.pmViewDesc && e.pmViewDesc.ignoreForCoords; )
            e = e.nextSibling;
          let t = e
            ? 3 == e.nodeType
              ? h(e, 0, s ? 0 : 1)
              : 1 == e.nodeType
                ? e
                : null
            : null;
          if (t) return X(K(t, -1), !0);
        }
        return X(K(3 == r.nodeType ? h(r) : r, -n), n >= 0);
      }
      function X(e, t) {
        if (0 == e.width) return e;
        let n = t ? e.left : e.right;
        return { top: e.top, bottom: e.bottom, left: n, right: n };
      }
      function Z(e, t) {
        if (0 == e.height) return e;
        let n = t ? e.top : e.bottom;
        return { top: n, bottom: n, left: e.left, right: e.right };
      }
      function Q(e, t, n) {
        let r = e.state,
          i = e.root.activeElement;
        r != t && e.updateState(t), i != e.dom && e.focus();
        try {
          return n();
        } finally {
          r != t && e.updateState(r), i != e.dom && i && i.focus();
        }
      }
      const ee = /[\u0590-\u08ac]/;
      let te = null,
        ne = null,
        re = !1;
      function ie(e, t, n) {
        return te == t && ne == n
          ? re
          : ((te = t),
            (ne = n),
            (re =
              "up" == n || "down" == n
                ? (function (e, t, n) {
                    let r = t.selection,
                      i = "up" == n ? r.$from : r.$to;
                    return Q(e, t, () => {
                      let { node: t } = e.docView.domFromPos(
                        i.pos,
                        "up" == n ? -1 : 1,
                      );
                      for (;;) {
                        let n = e.docView.nearestDesc(t, !0);
                        if (!n) break;
                        if (n.node.isBlock) {
                          t = n.contentDOM || n.dom;
                          break;
                        }
                        t = n.dom.parentNode;
                      }
                      let r = G(e, i.pos, 1);
                      for (let e = t.firstChild; e; e = e.nextSibling) {
                        let t;
                        if (1 == e.nodeType) t = e.getClientRects();
                        else {
                          if (3 != e.nodeType) continue;
                          t = h(e, 0, e.nodeValue.length).getClientRects();
                        }
                        for (let e = 0; e < t.length; e++) {
                          let i = t[e];
                          if (
                            i.bottom > i.top + 1 &&
                            ("up" == n
                              ? r.top - i.top > 2 * (i.bottom - r.top)
                              : i.bottom - r.bottom > 2 * (r.bottom - i.top))
                          )
                            return !1;
                        }
                      }
                      return !0;
                    });
                  })(e, t, n)
                : (function (e, t, n) {
                    let { $head: r } = t.selection;
                    if (!r.parent.isTextblock) return !1;
                    let i = r.parentOffset,
                      o = !i,
                      s = i == r.parent.content.size,
                      l = e.domSelection();
                    return ee.test(r.parent.textContent) && l.modify
                      ? Q(e, t, () => {
                          let {
                              focusNode: t,
                              focusOffset: i,
                              anchorNode: o,
                              anchorOffset: s,
                            } = e.domSelectionRange(),
                            a = l.caretBidiLevel;
                          l.modify("move", n, "character");
                          let h = r.depth
                              ? e.docView.domAfterPos(r.before())
                              : e.dom,
                            { focusNode: c, focusOffset: d } =
                              e.domSelectionRange(),
                            p =
                              (c &&
                                !h.contains(
                                  1 == c.nodeType ? c : c.parentNode,
                                )) ||
                              (t == c && i == d);
                          try {
                            l.collapse(o, s),
                              t &&
                                (t != o || i != s) &&
                                l.extend &&
                                l.extend(t, i);
                          } catch (e) {}
                          return null != a && (l.caretBidiLevel = a), p;
                        })
                      : "left" == n || "backward" == n
                        ? o
                        : s;
                  })(e, t, n)));
      }
      class oe {
        constructor(e, t, n, r) {
          (this.parent = e),
            (this.children = t),
            (this.dom = n),
            (this.contentDOM = r),
            (this.dirty = 0),
            (n.pmViewDesc = this);
        }
        matchesWidget(e) {
          return !1;
        }
        matchesMark(e) {
          return !1;
        }
        matchesNode(e, t, n) {
          return !1;
        }
        matchesHack(e) {
          return !1;
        }
        parseRule() {
          return null;
        }
        stopEvent(e) {
          return !1;
        }
        get size() {
          let e = 0;
          for (let t = 0; t < this.children.length; t++)
            e += this.children[t].size;
          return e;
        }
        get border() {
          return 0;
        }
        destroy() {
          (this.parent = void 0),
            this.dom.pmViewDesc == this && (this.dom.pmViewDesc = void 0);
          for (let e = 0; e < this.children.length; e++)
            this.children[e].destroy();
        }
        posBeforeChild(e) {
          for (let t = 0, n = this.posAtStart; ; t++) {
            let r = this.children[t];
            if (r == e) return n;
            n += r.size;
          }
        }
        get posBefore() {
          return this.parent.posBeforeChild(this);
        }
        get posAtStart() {
          return this.parent
            ? this.parent.posBeforeChild(this) + this.border
            : 0;
        }
        get posAfter() {
          return this.posBefore + this.size;
        }
        get posAtEnd() {
          return this.posAtStart + this.size - 2 * this.border;
        }
        localPosFromDOM(e, t, n) {
          if (
            this.contentDOM &&
            this.contentDOM.contains(1 == e.nodeType ? e : e.parentNode)
          ) {
            if (n < 0) {
              let n, r;
              if (e == this.contentDOM) n = e.childNodes[t - 1];
              else {
                for (; e.parentNode != this.contentDOM; ) e = e.parentNode;
                n = e.previousSibling;
              }
              for (; n && (!(r = n.pmViewDesc) || r.parent != this); )
                n = n.previousSibling;
              return n ? this.posBeforeChild(r) + r.size : this.posAtStart;
            }
            {
              let n, r;
              if (e == this.contentDOM) n = e.childNodes[t];
              else {
                for (; e.parentNode != this.contentDOM; ) e = e.parentNode;
                n = e.nextSibling;
              }
              for (; n && (!(r = n.pmViewDesc) || r.parent != this); )
                n = n.nextSibling;
              return n ? this.posBeforeChild(r) : this.posAtEnd;
            }
          }
          let r;
          if (e == this.dom && this.contentDOM) r = t > s(this.contentDOM);
          else if (
            this.contentDOM &&
            this.contentDOM != this.dom &&
            this.dom.contains(this.contentDOM)
          )
            r = 2 & e.compareDocumentPosition(this.contentDOM);
          else if (this.dom.firstChild) {
            if (0 == t)
              for (let t = e; ; t = t.parentNode) {
                if (t == this.dom) {
                  r = !1;
                  break;
                }
                if (t.previousSibling) break;
              }
            if (null == r && t == e.childNodes.length)
              for (let t = e; ; t = t.parentNode) {
                if (t == this.dom) {
                  r = !0;
                  break;
                }
                if (t.nextSibling) break;
              }
          }
          return (null == r ? n > 0 : r) ? this.posAtEnd : this.posAtStart;
        }
        nearestDesc(e, t = !1) {
          for (let n = !0, r = e; r; r = r.parentNode) {
            let i,
              o = this.getDesc(r);
            if (o && (!t || o.node)) {
              if (
                !n ||
                !(i = o.nodeDOM) ||
                (1 == i.nodeType
                  ? i.contains(1 == e.nodeType ? e : e.parentNode)
                  : i == e)
              )
                return o;
              n = !1;
            }
          }
        }
        getDesc(e) {
          let t = e.pmViewDesc;
          for (let e = t; e; e = e.parent) if (e == this) return t;
        }
        posFromDOM(e, t, n) {
          for (let r = e; r; r = r.parentNode) {
            let i = this.getDesc(r);
            if (i) return i.localPosFromDOM(e, t, n);
          }
          return -1;
        }
        descAt(e) {
          for (let t = 0, n = 0; t < this.children.length; t++) {
            let r = this.children[t],
              i = n + r.size;
            if (n == e && i != n) {
              for (; !r.border && r.children.length; ) r = r.children[0];
              return r;
            }
            if (e < i) return r.descAt(e - n - r.border);
            n = i;
          }
        }
        domFromPos(e, t) {
          if (!this.contentDOM)
            return { node: this.dom, offset: 0, atom: e + 1 };
          let n = 0,
            r = 0;
          for (let t = 0; n < this.children.length; n++) {
            let i = this.children[n],
              o = t + i.size;
            if (o > e || i instanceof pe) {
              r = e - t;
              break;
            }
            t = o;
          }
          if (r)
            return this.children[n].domFromPos(r - this.children[n].border, t);
          for (
            let e;
            n &&
            !(e = this.children[n - 1]).size &&
            e instanceof se &&
            e.side >= 0;
            n--
          );
          if (t <= 0) {
            let e,
              r = !0;
            for (
              ;
              (e = n ? this.children[n - 1] : null),
                e && e.dom.parentNode != this.contentDOM;
              n--, r = !1
            );
            return e && t && r && !e.border && !e.domAtom
              ? e.domFromPos(e.size, t)
              : { node: this.contentDOM, offset: e ? s(e.dom) + 1 : 0 };
          }
          {
            let e,
              r = !0;
            for (
              ;
              (e = n < this.children.length ? this.children[n] : null),
                e && e.dom.parentNode != this.contentDOM;
              n++, r = !1
            );
            return e && r && !e.border && !e.domAtom
              ? e.domFromPos(0, t)
              : {
                  node: this.contentDOM,
                  offset: e ? s(e.dom) : this.contentDOM.childNodes.length,
                };
          }
        }
        parseRange(e, t, n = 0) {
          if (0 == this.children.length)
            return {
              node: this.contentDOM,
              from: e,
              to: t,
              fromOffset: 0,
              toOffset: this.contentDOM.childNodes.length,
            };
          let r = -1,
            i = -1;
          for (let o = n, l = 0; ; l++) {
            let n = this.children[l],
              a = o + n.size;
            if (-1 == r && e <= a) {
              let i = o + n.border;
              if (
                e >= i &&
                t <= a - n.border &&
                n.node &&
                n.contentDOM &&
                this.contentDOM.contains(n.contentDOM)
              )
                return n.parseRange(e, t, i);
              e = o;
              for (let t = l; t > 0; t--) {
                let n = this.children[t - 1];
                if (
                  n.size &&
                  n.dom.parentNode == this.contentDOM &&
                  !n.emptyChildAt(1)
                ) {
                  r = s(n.dom) + 1;
                  break;
                }
                e -= n.size;
              }
              -1 == r && (r = 0);
            }
            if (r > -1 && (a > t || l == this.children.length - 1)) {
              t = a;
              for (let e = l + 1; e < this.children.length; e++) {
                let n = this.children[e];
                if (
                  n.size &&
                  n.dom.parentNode == this.contentDOM &&
                  !n.emptyChildAt(-1)
                ) {
                  i = s(n.dom);
                  break;
                }
                t += n.size;
              }
              -1 == i && (i = this.contentDOM.childNodes.length);
              break;
            }
            o = a;
          }
          return {
            node: this.contentDOM,
            from: e,
            to: t,
            fromOffset: r,
            toOffset: i,
          };
        }
        emptyChildAt(e) {
          if (this.border || !this.contentDOM || !this.children.length)
            return !1;
          let t = this.children[e < 0 ? 0 : this.children.length - 1];
          return 0 == t.size || t.emptyChildAt(e);
        }
        domAfterPos(e) {
          let { node: t, offset: n } = this.domFromPos(e, 0);
          if (1 != t.nodeType || n == t.childNodes.length)
            throw new RangeError("No node after pos " + e);
          return t.childNodes[n];
        }
        setSelection(e, t, n, r = !1) {
          let i = Math.min(e, t),
            o = Math.max(e, t);
          for (let s = 0, l = 0; s < this.children.length; s++) {
            let a = this.children[s],
              h = l + a.size;
            if (i > l && o < h)
              return a.setSelection(e - l - a.border, t - l - a.border, n, r);
            l = h;
          }
          let l = this.domFromPos(e, e ? -1 : 1),
            a = t == e ? l : this.domFromPos(t, t ? -1 : 1),
            h = n.getSelection(),
            d = !1;
          if ((C || D) && e == t) {
            let { node: e, offset: t } = l;
            if (3 == e.nodeType) {
              if (
                ((d = !(!t || "\n" != e.nodeValue[t - 1])),
                d && t == e.nodeValue.length)
              )
                for (let t, n = e; n; n = n.parentNode) {
                  if ((t = n.nextSibling)) {
                    "BR" == t.nodeName &&
                      (l = a = { node: t.parentNode, offset: s(t) + 1 });
                    break;
                  }
                  let e = n.pmViewDesc;
                  if (e && e.node && e.node.isBlock) break;
                }
            } else {
              let n = e.childNodes[t - 1];
              d = n && ("BR" == n.nodeName || "false" == n.contentEditable);
            }
          }
          if (
            C &&
            h.focusNode &&
            h.focusNode != a.node &&
            1 == h.focusNode.nodeType
          ) {
            let e = h.focusNode.childNodes[h.focusOffset];
            e && "false" == e.contentEditable && (r = !0);
          }
          if (
            !(r || (d && D)) &&
            c(l.node, l.offset, h.anchorNode, h.anchorOffset) &&
            c(a.node, a.offset, h.focusNode, h.focusOffset)
          )
            return;
          let p = !1;
          if ((h.extend || e == t) && !d) {
            h.collapse(l.node, l.offset);
            try {
              e != t && h.extend(a.node, a.offset), (p = !0);
            } catch (e) {}
          }
          if (!p) {
            if (e > t) {
              let e = l;
              (l = a), (a = e);
            }
            let n = document.createRange();
            n.setEnd(a.node, a.offset),
              n.setStart(l.node, l.offset),
              h.removeAllRanges(),
              h.addRange(n);
          }
        }
        ignoreMutation(e) {
          return !this.contentDOM && "selection" != e.type;
        }
        get contentLost() {
          return (
            this.contentDOM &&
            this.contentDOM != this.dom &&
            !this.dom.contains(this.contentDOM)
          );
        }
        markDirty(e, t) {
          for (let n = 0, r = 0; r < this.children.length; r++) {
            let i = this.children[r],
              o = n + i.size;
            if (n == o ? e <= o && t >= n : e < o && t > n) {
              let r = n + i.border,
                s = o - i.border;
              if (e >= r && t <= s)
                return (
                  (this.dirty = e == n || t == o ? 2 : 1),
                  void (e != r ||
                  t != s ||
                  (!i.contentLost && i.dom.parentNode == this.contentDOM)
                    ? i.markDirty(e - r, t - r)
                    : (i.dirty = 3))
                );
              i.dirty =
                i.dom != i.contentDOM ||
                i.dom.parentNode != this.contentDOM ||
                i.children.length
                  ? 3
                  : 2;
            }
            n = o;
          }
          this.dirty = 2;
        }
        markParentsDirty() {
          let e = 1;
          for (let t = this.parent; t; t = t.parent, e++) {
            let n = 1 == e ? 2 : 1;
            t.dirty < n && (t.dirty = n);
          }
        }
        get domAtom() {
          return !1;
        }
        get ignoreForCoords() {
          return !1;
        }
      }
      class se extends oe {
        constructor(e, t, n, r) {
          let i,
            o = t.type.toDOM;
          if (
            ("function" == typeof o &&
              (o = o(n, () =>
                i ? (i.parent ? i.parent.posBeforeChild(i) : void 0) : r,
              )),
            !t.type.spec.raw)
          ) {
            if (1 != o.nodeType) {
              let e = document.createElement("span");
              e.appendChild(o), (o = e);
            }
            (o.contentEditable = "false"),
              o.classList.add("ProseMirror-widget");
          }
          super(e, [], o, null),
            (this.widget = t),
            (this.widget = t),
            (i = this);
        }
        matchesWidget(e) {
          return 0 == this.dirty && e.type.eq(this.widget.type);
        }
        parseRule() {
          return { ignore: !0 };
        }
        stopEvent(e) {
          let t = this.widget.spec.stopEvent;
          return !!t && t(e);
        }
        ignoreMutation(e) {
          return "selection" != e.type || this.widget.spec.ignoreSelection;
        }
        destroy() {
          this.widget.type.destroy(this.dom), super.destroy();
        }
        get domAtom() {
          return !0;
        }
        get side() {
          return this.widget.type.side;
        }
      }
      class le extends oe {
        constructor(e, t, n, r) {
          super(e, [], t, null), (this.textDOM = n), (this.text = r);
        }
        get size() {
          return this.text.length;
        }
        localPosFromDOM(e, t) {
          return e != this.textDOM
            ? this.posAtStart + (t ? this.size : 0)
            : this.posAtStart + t;
        }
        domFromPos(e) {
          return { node: this.textDOM, offset: e };
        }
        ignoreMutation(e) {
          return "characterData" === e.type && e.target.nodeValue == e.oldValue;
        }
      }
      class ae extends oe {
        constructor(e, t, n, r) {
          super(e, [], n, r), (this.mark = t);
        }
        static create(e, t, n, r) {
          let o = r.nodeViews[t.type.name],
            s = o && o(t, r, n);
          return (
            (s && s.dom) ||
              (s = i.PW.renderSpec(document, t.type.spec.toDOM(t, n))),
            new ae(e, t, s.dom, s.contentDOM || s.dom)
          );
        }
        parseRule() {
          return 3 & this.dirty || this.mark.type.spec.reparseInView
            ? null
            : {
                mark: this.mark.type.name,
                attrs: this.mark.attrs,
                contentElement: this.contentDOM,
              };
        }
        matchesMark(e) {
          return 3 != this.dirty && this.mark.eq(e);
        }
        markDirty(e, t) {
          if ((super.markDirty(e, t), 0 != this.dirty)) {
            let e = this.parent;
            for (; !e.node; ) e = e.parent;
            e.dirty < this.dirty && (e.dirty = this.dirty), (this.dirty = 0);
          }
        }
        slice(e, t, n) {
          let r = ae.create(this.parent, this.mark, !0, n),
            i = this.children,
            o = this.size;
          t < o && (i = Ce(i, t, o, n)), e > 0 && (i = Ce(i, 0, e, n));
          for (let e = 0; e < i.length; e++) i[e].parent = r;
          return (r.children = i), r;
        }
      }
      class he extends oe {
        constructor(e, t, n, r, i, o, s, l, a) {
          super(e, [], i, o),
            (this.node = t),
            (this.outerDeco = n),
            (this.innerDeco = r),
            (this.nodeDOM = s);
        }
        static create(e, t, n, r, o, s) {
          let l,
            a = o.nodeViews[t.type.name],
            h =
              a &&
              a(
                t,
                o,
                () =>
                  l ? (l.parent ? l.parent.posBeforeChild(l) : void 0) : s,
                n,
                r,
              ),
            c = h && h.dom,
            d = h && h.contentDOM;
          if (t.isText)
            if (c) {
              if (3 != c.nodeType)
                throw new RangeError(
                  "Text must be rendered as a DOM text node",
                );
            } else c = document.createTextNode(t.text);
          else
            c ||
              ({ dom: c, contentDOM: d } = i.PW.renderSpec(
                document,
                t.type.spec.toDOM(t),
              ));
          d ||
            t.isText ||
            "BR" == c.nodeName ||
            (c.hasAttribute("contenteditable") || (c.contentEditable = "false"),
            t.type.spec.draggable && (c.draggable = !0));
          let p = c;
          return (
            (c = be(c, n, t)),
            h
              ? (l = new ue(e, t, n, r, c, d || null, p, h, o, s + 1))
              : t.isText
                ? new de(e, t, n, r, c, p, o)
                : new he(e, t, n, r, c, d || null, p, o, s + 1)
          );
        }
        parseRule() {
          if (this.node.type.spec.reparseInView) return null;
          let e = { node: this.node.type.name, attrs: this.node.attrs };
          if (
            ("pre" == this.node.type.whitespace &&
              (e.preserveWhitespace = "full"),
            this.contentDOM)
          )
            if (this.contentLost) {
              for (let t = this.children.length - 1; t >= 0; t--) {
                let n = this.children[t];
                if (this.dom.contains(n.dom.parentNode)) {
                  e.contentElement = n.dom.parentNode;
                  break;
                }
              }
              e.contentElement || (e.getContent = () => i.HY.empty);
            } else e.contentElement = this.contentDOM;
          else e.getContent = () => this.node.content;
          return e;
        }
        matchesNode(e, t, n) {
          return (
            0 == this.dirty &&
            e.eq(this.node) &&
            Se(t, this.outerDeco) &&
            n.eq(this.innerDeco)
          );
        }
        get size() {
          return this.node.nodeSize;
        }
        get border() {
          return this.node.isLeaf ? 0 : 1;
        }
        updateChildren(e, t) {
          let n = this.node.inlineContent,
            r = t,
            o = e.composing ? this.localCompositionInfo(e, t) : null,
            s = o && o.pos > -1 ? o : null,
            l = o && o.pos < 0,
            a = new xe(this, s && s.node, e);
          !(function (e, t, n, r) {
            let i = t.locals(e),
              o = 0;
            if (0 == i.length) {
              for (let n = 0; n < e.childCount; n++) {
                let s = e.child(n);
                r(s, i, t.forChild(o, s), n), (o += s.nodeSize);
              }
              return;
            }
            let s = 0,
              l = [],
              a = null;
            for (let h = 0; ; ) {
              let c, d, p, u;
              for (; s < i.length && i[s].to == o; ) {
                let e = i[s++];
                e.widget && (c ? (d || (d = [c])).push(e) : (c = e));
              }
              if (c)
                if (d) {
                  d.sort(Me);
                  for (let e = 0; e < d.length; e++) n(d[e], h, !!a);
                } else n(c, h, !!a);
              if (a) (u = -1), (p = a), (a = null);
              else {
                if (!(h < e.childCount)) break;
                (u = h), (p = e.child(h++));
              }
              for (let e = 0; e < l.length; e++)
                l[e].to <= o && l.splice(e--, 1);
              for (; s < i.length && i[s].from <= o && i[s].to > o; )
                l.push(i[s++]);
              let f = o + p.nodeSize;
              if (p.isText) {
                let e = f;
                s < i.length && i[s].from < e && (e = i[s].from);
                for (let t = 0; t < l.length; t++) l[t].to < e && (e = l[t].to);
                e < f &&
                  ((a = p.cut(e - o)),
                  (p = p.cut(0, e - o)),
                  (f = e),
                  (u = -1));
              } else for (; s < i.length && i[s].to < f; ) s++;
              r(
                p,
                p.isInline && !p.isLeaf
                  ? l.filter((e) => !e.inline)
                  : l.slice(),
                t.forChild(o, p),
                u,
              ),
                (o = f);
            }
          })(
            this.node,
            this.innerDeco,
            (t, o, s) => {
              t.spec.marks
                ? a.syncToMarks(t.spec.marks, n, e)
                : t.type.side >= 0 &&
                  !s &&
                  a.syncToMarks(
                    o == this.node.childCount
                      ? i.vc.none
                      : this.node.child(o).marks,
                    n,
                    e,
                  ),
                a.placeWidget(t, e, r);
            },
            (t, i, s, h) => {
              let c;
              a.syncToMarks(t.marks, n, e),
                a.findNodeMatch(t, i, s, h) ||
                  (l &&
                    e.state.selection.from > r &&
                    e.state.selection.to < r + t.nodeSize &&
                    (c = a.findIndexWithChild(o.node)) > -1 &&
                    a.updateNodeAt(t, i, s, c, e)) ||
                  a.updateNextNode(t, i, s, e, h, r) ||
                  a.addNode(t, i, s, e, r),
                (r += t.nodeSize);
            },
          ),
            a.syncToMarks([], n, e),
            this.node.isTextblock && a.addTextblockHacks(),
            a.destroyRest(),
            (a.changed || 2 == this.dirty) &&
              (s && this.protectLocalComposition(e, s),
              fe(this.contentDOM, this.children, e),
              E &&
                (function (e) {
                  if ("UL" == e.nodeName || "OL" == e.nodeName) {
                    let t = e.style.cssText;
                    (e.style.cssText = t + "; list-style: square !important"),
                      window.getComputedStyle(e).listStyle,
                      (e.style.cssText = t);
                  }
                })(this.dom));
        }
        localCompositionInfo(e, t) {
          let { from: n, to: i } = e.state.selection;
          if (
            !(e.state.selection instanceof r.Bs) ||
            n < t ||
            i > t + this.node.content.size
          )
            return null;
          let o = e.domSelectionRange(),
            s = (function (e, t) {
              for (;;) {
                if (3 == e.nodeType) return e;
                if (1 == e.nodeType && t > 0) {
                  if (e.childNodes.length > t && 3 == e.childNodes[t].nodeType)
                    return e.childNodes[t];
                  t = u((e = e.childNodes[t - 1]));
                } else {
                  if (!(1 == e.nodeType && t < e.childNodes.length))
                    return null;
                  (e = e.childNodes[t]), (t = 0);
                }
              }
            })(o.focusNode, o.focusOffset);
          if (!s || !this.dom.contains(s.parentNode)) return null;
          if (this.node.inlineContent) {
            let e = s.nodeValue,
              r = (function (e, t, n, r) {
                for (let i = 0, o = 0; i < e.childCount && o <= r; ) {
                  let s = e.child(i++),
                    l = o;
                  if (((o += s.nodeSize), !s.isText)) continue;
                  let a = s.text;
                  for (; i < e.childCount; ) {
                    let t = e.child(i++);
                    if (((o += t.nodeSize), !t.isText)) break;
                    a += t.text;
                  }
                  if (o >= n) {
                    if (o >= r && a.slice(r - t.length - l, r - l) == t)
                      return r - t.length;
                    let e = l < r ? a.lastIndexOf(t, r - l - 1) : -1;
                    if (e >= 0 && e + t.length + l >= n) return l + e;
                    if (
                      n == r &&
                      a.length >= r + t.length - l &&
                      a.slice(r - l, r - l + t.length) == t
                    )
                      return r;
                  }
                }
                return -1;
              })(this.node.content, e, n - t, i - t);
            return r < 0 ? null : { node: s, pos: r, text: e };
          }
          return { node: s, pos: -1, text: "" };
        }
        protectLocalComposition(e, { node: t, pos: n, text: r }) {
          if (this.getDesc(t)) return;
          let i = t;
          for (; i.parentNode != this.contentDOM; i = i.parentNode) {
            for (; i.previousSibling; )
              i.parentNode.removeChild(i.previousSibling);
            for (; i.nextSibling; ) i.parentNode.removeChild(i.nextSibling);
            i.pmViewDesc && (i.pmViewDesc = void 0);
          }
          let o = new le(this, i, t, r);
          e.input.compositionNodes.push(o),
            (this.children = Ce(this.children, n, n + r.length, e, o));
        }
        update(e, t, n, r) {
          return (
            !(3 == this.dirty || !e.sameMarkup(this.node)) &&
            (this.updateInner(e, t, n, r), !0)
          );
        }
        updateInner(e, t, n, r) {
          this.updateOuterDeco(t),
            (this.node = e),
            (this.innerDeco = n),
            this.contentDOM && this.updateChildren(r, this.posAtStart),
            (this.dirty = 0);
        }
        updateOuterDeco(e) {
          if (Se(e, this.outerDeco)) return;
          let t = 1 != this.nodeDOM.nodeType,
            n = this.dom;
          (this.dom = we(
            this.dom,
            this.nodeDOM,
            ye(this.outerDeco, this.node, t),
            ye(e, this.node, t),
          )),
            this.dom != n &&
              ((n.pmViewDesc = void 0), (this.dom.pmViewDesc = this)),
            (this.outerDeco = e);
        }
        selectNode() {
          1 == this.nodeDOM.nodeType &&
            this.nodeDOM.classList.add("ProseMirror-selectednode"),
            (!this.contentDOM && this.node.type.spec.draggable) ||
              (this.dom.draggable = !0);
        }
        deselectNode() {
          1 == this.nodeDOM.nodeType &&
            this.nodeDOM.classList.remove("ProseMirror-selectednode"),
            (!this.contentDOM && this.node.type.spec.draggable) ||
              this.dom.removeAttribute("draggable");
        }
        get domAtom() {
          return this.node.isAtom;
        }
      }
      function ce(e, t, n, r, i) {
        be(r, t, e);
        let o = new he(void 0, e, t, n, r, r, r, i, 0);
        return o.contentDOM && o.updateChildren(i, 0), o;
      }
      class de extends he {
        constructor(e, t, n, r, i, o, s) {
          super(e, t, n, r, i, null, o, s, 0);
        }
        parseRule() {
          let e = this.nodeDOM.parentNode;
          for (; e && e != this.dom && !e.pmIsDeco; ) e = e.parentNode;
          return { skip: e || !0 };
        }
        update(e, t, n, r) {
          return (
            !(
              3 == this.dirty ||
              (0 != this.dirty && !this.inParent()) ||
              !e.sameMarkup(this.node)
            ) &&
            (this.updateOuterDeco(t),
            (0 == this.dirty && e.text == this.node.text) ||
              e.text == this.nodeDOM.nodeValue ||
              ((this.nodeDOM.nodeValue = e.text),
              r.trackWrites == this.nodeDOM && (r.trackWrites = null)),
            (this.node = e),
            (this.dirty = 0),
            !0)
          );
        }
        inParent() {
          let e = this.parent.contentDOM;
          for (let t = this.nodeDOM; t; t = t.parentNode) if (t == e) return !0;
          return !1;
        }
        domFromPos(e) {
          return { node: this.nodeDOM, offset: e };
        }
        localPosFromDOM(e, t, n) {
          return e == this.nodeDOM
            ? this.posAtStart + Math.min(t, this.node.text.length)
            : super.localPosFromDOM(e, t, n);
        }
        ignoreMutation(e) {
          return "characterData" != e.type && "selection" != e.type;
        }
        slice(e, t, n) {
          let r = this.node.cut(e, t),
            i = document.createTextNode(r.text);
          return new de(
            this.parent,
            r,
            this.outerDeco,
            this.innerDeco,
            i,
            i,
            n,
          );
        }
        markDirty(e, t) {
          super.markDirty(e, t),
            this.dom == this.nodeDOM ||
              (0 != e && t != this.nodeDOM.nodeValue.length) ||
              (this.dirty = 3);
        }
        get domAtom() {
          return !1;
        }
      }
      class pe extends oe {
        parseRule() {
          return { ignore: !0 };
        }
        matchesHack(e) {
          return 0 == this.dirty && this.dom.nodeName == e;
        }
        get domAtom() {
          return !0;
        }
        get ignoreForCoords() {
          return "IMG" == this.dom.nodeName;
        }
      }
      class ue extends he {
        constructor(e, t, n, r, i, o, s, l, a, h) {
          super(e, t, n, r, i, o, s, a, h), (this.spec = l);
        }
        update(e, t, n, r) {
          if (3 == this.dirty) return !1;
          if (this.spec.update) {
            let i = this.spec.update(e, t, n);
            return i && this.updateInner(e, t, n, r), i;
          }
          return !(!this.contentDOM && !e.isLeaf) && super.update(e, t, n, r);
        }
        selectNode() {
          this.spec.selectNode ? this.spec.selectNode() : super.selectNode();
        }
        deselectNode() {
          this.spec.deselectNode
            ? this.spec.deselectNode()
            : super.deselectNode();
        }
        setSelection(e, t, n, r) {
          this.spec.setSelection
            ? this.spec.setSelection(e, t, n)
            : super.setSelection(e, t, n, r);
        }
        destroy() {
          this.spec.destroy && this.spec.destroy(), super.destroy();
        }
        stopEvent(e) {
          return !!this.spec.stopEvent && this.spec.stopEvent(e);
        }
        ignoreMutation(e) {
          return this.spec.ignoreMutation
            ? this.spec.ignoreMutation(e)
            : super.ignoreMutation(e);
        }
      }
      function fe(e, t, n) {
        let r = e.firstChild,
          i = !1;
        for (let o = 0; o < t.length; o++) {
          let s = t[o],
            l = s.dom;
          if (l.parentNode == e) {
            for (; l != r; ) (r = ke(r)), (i = !0);
            r = r.nextSibling;
          } else (i = !0), e.insertBefore(l, r);
          if (s instanceof ae) {
            let t = r ? r.previousSibling : e.lastChild;
            fe(s.contentDOM, s.children, n),
              (r = t ? t.nextSibling : e.firstChild);
          }
        }
        for (; r; ) (r = ke(r)), (i = !0);
        i && n.trackWrites == e && (n.trackWrites = null);
      }
      const me = function (e) {
        e && (this.nodeName = e);
      };
      me.prototype = Object.create(null);
      const ge = [new me()];
      function ye(e, t, n) {
        if (0 == e.length) return ge;
        let r = n ? ge[0] : new me(),
          i = [r];
        for (let o = 0; o < e.length; o++) {
          let s = e[o].type.attrs;
          if (s) {
            s.nodeName && i.push((r = new me(s.nodeName)));
            for (let e in s) {
              let o = s[e];
              null != o &&
                (n &&
                  1 == i.length &&
                  i.push((r = new me(t.isInline ? "span" : "div"))),
                "class" == e
                  ? (r.class = (r.class ? r.class + " " : "") + o)
                  : "style" == e
                    ? (r.style = (r.style ? r.style + ";" : "") + o)
                    : "nodeName" != e && (r[e] = o));
            }
          }
        }
        return i;
      }
      function we(e, t, n, r) {
        if (n == ge && r == ge) return t;
        let i = t;
        for (let t = 0; t < r.length; t++) {
          let o = r[t],
            s = n[t];
          if (t) {
            let t;
            (s &&
              s.nodeName == o.nodeName &&
              i != e &&
              (t = i.parentNode) &&
              t.nodeName.toLowerCase() == o.nodeName) ||
              ((t = document.createElement(o.nodeName)),
              (t.pmIsDeco = !0),
              t.appendChild(i),
              (s = ge[0])),
              (i = t);
          }
          ve(i, s || ge[0], o);
        }
        return i;
      }
      function ve(e, t, n) {
        for (let r in t)
          "class" == r ||
            "style" == r ||
            "nodeName" == r ||
            r in n ||
            e.removeAttribute(r);
        for (let r in n)
          "class" != r &&
            "style" != r &&
            "nodeName" != r &&
            n[r] != t[r] &&
            e.setAttribute(r, n[r]);
        if (t.class != n.class) {
          let r = t.class ? t.class.split(" ").filter(Boolean) : [],
            i = n.class ? n.class.split(" ").filter(Boolean) : [];
          for (let t = 0; t < r.length; t++)
            -1 == i.indexOf(r[t]) && e.classList.remove(r[t]);
          for (let t = 0; t < i.length; t++)
            -1 == r.indexOf(i[t]) && e.classList.add(i[t]);
          0 == e.classList.length && e.removeAttribute("class");
        }
        if (t.style != n.style) {
          if (t.style) {
            let n,
              r =
                /\s*([\w\-\xa1-\uffff]+)\s*:(?:"(?:\\.|[^"])*"|'(?:\\.|[^'])*'|\(.*?\)|[^;])*/g;
            for (; (n = r.exec(t.style)); ) e.style.removeProperty(n[1]);
          }
          n.style && (e.style.cssText += n.style);
        }
      }
      function be(e, t, n) {
        return we(e, e, ge, ye(t, n, 1 != e.nodeType));
      }
      function Se(e, t) {
        if (e.length != t.length) return !1;
        for (let n = 0; n < e.length; n++)
          if (!e[n].type.eq(t[n].type)) return !1;
        return !0;
      }
      function ke(e) {
        let t = e.nextSibling;
        return e.parentNode.removeChild(e), t;
      }
      class xe {
        constructor(e, t, n) {
          (this.lock = t),
            (this.view = n),
            (this.index = 0),
            (this.stack = []),
            (this.changed = !1),
            (this.top = e),
            (this.preMatch = (function (e, t) {
              let n = t,
                r = n.children.length,
                i = e.childCount,
                o = new Map(),
                s = [];
              e: for (; i > 0; ) {
                let l;
                for (;;)
                  if (r) {
                    let e = n.children[r - 1];
                    if (!(e instanceof ae)) {
                      (l = e), r--;
                      break;
                    }
                    (n = e), (r = e.children.length);
                  } else {
                    if (n == t) break e;
                    (r = n.parent.children.indexOf(n)), (n = n.parent);
                  }
                let a = l.node;
                if (a) {
                  if (a != e.child(i - 1)) break;
                  --i, o.set(l, i), s.push(l);
                }
              }
              return { index: i, matched: o, matches: s.reverse() };
            })(e.node.content, e));
        }
        destroyBetween(e, t) {
          if (e != t) {
            for (let n = e; n < t; n++) this.top.children[n].destroy();
            this.top.children.splice(e, t - e), (this.changed = !0);
          }
        }
        destroyRest() {
          this.destroyBetween(this.index, this.top.children.length);
        }
        syncToMarks(e, t, n) {
          let r = 0,
            i = this.stack.length >> 1,
            o = Math.min(i, e.length);
          for (
            ;
            r < o &&
            (r == i - 1 ? this.top : this.stack[(r + 1) << 1]).matchesMark(
              e[r],
            ) &&
            !1 !== e[r].type.spec.spanning;

          )
            r++;
          for (; r < i; )
            this.destroyRest(),
              (this.top.dirty = 0),
              (this.index = this.stack.pop()),
              (this.top = this.stack.pop()),
              i--;
          for (; i < e.length; ) {
            this.stack.push(this.top, this.index + 1);
            let r = -1;
            for (
              let t = this.index;
              t < Math.min(this.index + 3, this.top.children.length);
              t++
            ) {
              let n = this.top.children[t];
              if (n.matchesMark(e[i]) && !this.isLocked(n.dom)) {
                r = t;
                break;
              }
            }
            if (r > -1)
              r > this.index &&
                ((this.changed = !0), this.destroyBetween(this.index, r)),
                (this.top = this.top.children[this.index]);
            else {
              let r = ae.create(this.top, e[i], t, n);
              this.top.children.splice(this.index, 0, r),
                (this.top = r),
                (this.changed = !0);
            }
            (this.index = 0), i++;
          }
        }
        findNodeMatch(e, t, n, r) {
          let i,
            o = -1;
          if (
            r >= this.preMatch.index &&
            (i = this.preMatch.matches[r - this.preMatch.index]).parent ==
              this.top &&
            i.matchesNode(e, t, n)
          )
            o = this.top.children.indexOf(i, this.index);
          else
            for (
              let r = this.index, i = Math.min(this.top.children.length, r + 5);
              r < i;
              r++
            ) {
              let i = this.top.children[r];
              if (i.matchesNode(e, t, n) && !this.preMatch.matched.has(i)) {
                o = r;
                break;
              }
            }
          return (
            !(o < 0) && (this.destroyBetween(this.index, o), this.index++, !0)
          );
        }
        updateNodeAt(e, t, n, r, i) {
          let o = this.top.children[r];
          return (
            3 == o.dirty && o.dom == o.contentDOM && (o.dirty = 2),
            !!o.update(e, t, n, i) &&
              (this.destroyBetween(this.index, r), this.index++, !0)
          );
        }
        findIndexWithChild(e) {
          for (;;) {
            let t = e.parentNode;
            if (!t) return -1;
            if (t == this.top.contentDOM) {
              let t = e.pmViewDesc;
              if (t)
                for (let e = this.index; e < this.top.children.length; e++)
                  if (this.top.children[e] == t) return e;
              return -1;
            }
            e = t;
          }
        }
        updateNextNode(e, t, n, r, i, o) {
          for (let s = this.index; s < this.top.children.length; s++) {
            let l = this.top.children[s];
            if (l instanceof he) {
              let a = this.preMatch.matched.get(l);
              if (null != a && a != i) return !1;
              let h,
                c = l.dom,
                d =
                  this.isLocked(c) &&
                  !(
                    e.isText &&
                    l.node &&
                    l.node.isText &&
                    l.nodeDOM.nodeValue == e.text &&
                    3 != l.dirty &&
                    Se(t, l.outerDeco)
                  );
              if (!d && l.update(e, t, n, r))
                return (
                  this.destroyBetween(this.index, s),
                  l.dom != c && (this.changed = !0),
                  this.index++,
                  !0
                );
              if (!d && (h = this.recreateWrapper(l, e, t, n, r, o)))
                return (
                  (this.top.children[this.index] = h),
                  h.contentDOM &&
                    ((h.dirty = 2), h.updateChildren(r, o + 1), (h.dirty = 0)),
                  (this.changed = !0),
                  this.index++,
                  !0
                );
              break;
            }
          }
          return !1;
        }
        recreateWrapper(e, t, n, r, i, o) {
          if (
            e.dirty ||
            t.isAtom ||
            !e.children.length ||
            !e.node.content.eq(t.content)
          )
            return null;
          let s = he.create(this.top, t, n, r, i, o);
          if (s.contentDOM) {
            (s.children = e.children), (e.children = []);
            for (let e of s.children) e.parent = s;
          }
          return e.destroy(), s;
        }
        addNode(e, t, n, r, i) {
          let o = he.create(this.top, e, t, n, r, i);
          o.contentDOM && o.updateChildren(r, i + 1),
            this.top.children.splice(this.index++, 0, o),
            (this.changed = !0);
        }
        placeWidget(e, t, n) {
          let r =
            this.index < this.top.children.length
              ? this.top.children[this.index]
              : null;
          if (
            !r ||
            !r.matchesWidget(e) ||
            (e != r.widget && r.widget.type.toDOM.parentNode)
          ) {
            let r = new se(this.top, e, t, n);
            this.top.children.splice(this.index++, 0, r), (this.changed = !0);
          } else this.index++;
        }
        addTextblockHacks() {
          let e = this.top.children[this.index - 1],
            t = this.top;
          for (; e instanceof ae; )
            (t = e), (e = t.children[t.children.length - 1]);
          (!e ||
            !(e instanceof de) ||
            /\n$/.test(e.node.text) ||
            (this.view.requiresGeckoHackNode && /\s$/.test(e.node.text))) &&
            ((D || N) &&
              e &&
              "false" == e.dom.contentEditable &&
              this.addHackNode("IMG", t),
            this.addHackNode("BR", this.top));
        }
        addHackNode(e, t) {
          if (
            t == this.top &&
            this.index < t.children.length &&
            t.children[this.index].matchesHack(e)
          )
            this.index++;
          else {
            let n = document.createElement(e);
            "IMG" == e &&
              ((n.className = "ProseMirror-separator"), (n.alt = "")),
              "BR" == e && (n.className = "ProseMirror-trailingBreak");
            let r = new pe(this.top, [], n, null);
            t != this.top
              ? t.children.push(r)
              : t.children.splice(this.index++, 0, r),
              (this.changed = !0);
          }
        }
        isLocked(e) {
          return (
            this.lock &&
            (e == this.lock ||
              (1 == e.nodeType && e.contains(this.lock.parentNode)))
          );
        }
      }
      function Me(e, t) {
        return e.type.side - t.type.side;
      }
      function Ce(e, t, n, r, i) {
        let o = [];
        for (let s = 0, l = 0; s < e.length; s++) {
          let a = e[s],
            h = l,
            c = (l += a.size);
          h >= n || c <= t
            ? o.push(a)
            : (h < t && o.push(a.slice(0, t - h, r)),
              i && (o.push(i), (i = void 0)),
              c > n && o.push(a.slice(n - h, a.size, r)));
        }
        return o;
      }
      function Oe(e, t = null) {
        let n = e.domSelectionRange(),
          i = e.state.doc;
        if (!n.focusNode) return null;
        let o = e.docView.nearestDesc(n.focusNode),
          l = o && 0 == o.size,
          a = e.docView.posFromDOM(n.focusNode, n.focusOffset, 1);
        if (a < 0) return null;
        let h,
          c,
          d = i.resolve(a);
        if (m(n)) {
          for (h = d; o && !o.node; ) o = o.parent;
          let e = o.node;
          if (
            o &&
            e.isAtom &&
            r.qv.isSelectable(e) &&
            o.parent &&
            (!e.isInline ||
              !(function (e, t, n) {
                for (let r = 0 == t, i = t == u(e); r || i; ) {
                  if (e == n) return !0;
                  let t = s(e);
                  if (!(e = e.parentNode)) return !1;
                  (r = r && 0 == t), (i = i && t == u(e));
                }
              })(n.focusNode, n.focusOffset, o.dom))
          ) {
            let e = o.posBefore;
            c = new r.qv(a == e ? d : i.resolve(e));
          }
        } else {
          let t = e.docView.posFromDOM(n.anchorNode, n.anchorOffset, 1);
          if (t < 0) return null;
          h = i.resolve(t);
        }
        if (!c) {
          c = Ie(
            e,
            h,
            d,
            "pointer" == t || (e.state.selection.head < d.pos && !l) ? 1 : -1,
          );
        }
        return c;
      }
      function Ne(e) {
        return e.editable
          ? e.hasFocus()
          : Pe(e) &&
              document.activeElement &&
              document.activeElement.contains(e.dom);
      }
      function Te(e, t = !1) {
        let n = e.state.selection;
        if ((Re(e, n), Ne(e))) {
          if (!t && e.input.mouseDown && e.input.mouseDown.allowDefault && N) {
            let t = e.domSelectionRange(),
              n = e.domObserver.currentSelection;
            if (
              t.anchorNode &&
              n.anchorNode &&
              c(t.anchorNode, t.anchorOffset, n.anchorNode, n.anchorOffset)
            )
              return (
                (e.input.mouseDown.delayedSelectionSync = !0),
                void e.domObserver.setCurSelection()
              );
          }
          if ((e.domObserver.disconnectSelection(), e.cursorWrapper))
            !(function (e) {
              let t = e.domSelection(),
                n = document.createRange(),
                r = e.cursorWrapper.dom,
                i = "IMG" == r.nodeName;
              i ? n.setEnd(r.parentNode, s(r) + 1) : n.setEnd(r, 0);
              n.collapse(!1),
                t.removeAllRanges(),
                t.addRange(n),
                !i &&
                  !e.state.selection.visible &&
                  x &&
                  M <= 11 &&
                  ((r.disabled = !0), (r.disabled = !1));
            })(e);
          else {
            let i,
              o,
              { anchor: s, head: l } = n;
            !De ||
              n instanceof r.Bs ||
              (n.$from.parent.inlineContent || (i = Ee(e, n.from)),
              n.empty || n.$from.parent.inlineContent || (o = Ee(e, n.to))),
              e.docView.setSelection(s, l, e.root, t),
              De && (i && Ae(i), o && Ae(o)),
              n.visible
                ? e.dom.classList.remove("ProseMirror-hideselection")
                : (e.dom.classList.add("ProseMirror-hideselection"),
                  "onselectionchange" in document &&
                    (function (e) {
                      let t = e.dom.ownerDocument;
                      t.removeEventListener(
                        "selectionchange",
                        e.input.hideSelectionGuard,
                      );
                      let n = e.domSelectionRange(),
                        r = n.anchorNode,
                        i = n.anchorOffset;
                      t.addEventListener(
                        "selectionchange",
                        (e.input.hideSelectionGuard = () => {
                          (n.anchorNode == r && n.anchorOffset == i) ||
                            (t.removeEventListener(
                              "selectionchange",
                              e.input.hideSelectionGuard,
                            ),
                            setTimeout(() => {
                              (Ne(e) && !e.state.selection.visible) ||
                                e.dom.classList.remove(
                                  "ProseMirror-hideselection",
                                );
                            }, 20));
                        }),
                      );
                    })(e));
          }
          e.domObserver.setCurSelection(), e.domObserver.connectSelection();
        }
      }
      const De = D || (N && T < 63);
      function Ee(e, t) {
        let { node: n, offset: r } = e.docView.domFromPos(t, 0),
          i = r < n.childNodes.length ? n.childNodes[r] : null,
          o = r ? n.childNodes[r - 1] : null;
        if (D && i && "false" == i.contentEditable) return Be(i);
        if (
          !(
            (i && "false" != i.contentEditable) ||
            (o && "false" != o.contentEditable)
          )
        ) {
          if (i) return Be(i);
          if (o) return Be(o);
        }
      }
      function Be(e) {
        return (
          (e.contentEditable = "true"),
          D && e.draggable && ((e.draggable = !1), (e.wasDraggable = !0)),
          e
        );
      }
      function Ae(e) {
        (e.contentEditable = "false"),
          e.wasDraggable && ((e.draggable = !0), (e.wasDraggable = null));
      }
      function Re(e, t) {
        if (t instanceof r.qv) {
          let n = e.docView.descAt(t.from);
          n != e.lastSelectedViewDesc &&
            (ze(e), n && n.selectNode(), (e.lastSelectedViewDesc = n));
        } else ze(e);
      }
      function ze(e) {
        e.lastSelectedViewDesc &&
          (e.lastSelectedViewDesc.parent &&
            e.lastSelectedViewDesc.deselectNode(),
          (e.lastSelectedViewDesc = void 0));
      }
      function Ie(e, t, n, i) {
        return (
          e.someProp("createSelectionBetween", (r) => r(e, t, n)) ||
          r.Bs.between(t, n, i)
        );
      }
      function Fe(e) {
        return !(e.editable && !e.hasFocus()) && Pe(e);
      }
      function Pe(e) {
        let t = e.domSelectionRange();
        if (!t.anchorNode) return !1;
        try {
          return (
            e.dom.contains(
              3 == t.anchorNode.nodeType
                ? t.anchorNode.parentNode
                : t.anchorNode,
            ) &&
            (e.editable ||
              e.dom.contains(
                3 == t.focusNode.nodeType
                  ? t.focusNode.parentNode
                  : t.focusNode,
              ))
          );
        } catch (e) {
          return !1;
        }
      }
      function $e(e, t) {
        let { $anchor: n, $head: i } = e.selection,
          o = t > 0 ? n.max(i) : n.min(i),
          s = o.parent.inlineContent
            ? o.depth
              ? e.doc.resolve(t > 0 ? o.after() : o.before())
              : null
            : o;
        return s && r.Y1.findFrom(s, t);
      }
      function Ve(e, t) {
        return e.dispatch(e.state.tr.setSelection(t).scrollIntoView()), !0;
      }
      function _e(e, t, n) {
        let i = e.state.selection;
        if (!(i instanceof r.Bs)) {
          if (i instanceof r.qv && i.node.isInline)
            return Ve(e, new r.Bs(t > 0 ? i.$to : i.$from));
          {
            let n = $e(e.state, t);
            return !!n && Ve(e, n);
          }
        }
        if (n.indexOf("s") > -1) {
          let { $head: n } = i,
            o = n.textOffset ? null : t < 0 ? n.nodeBefore : n.nodeAfter;
          if (!o || o.isText || !o.isLeaf) return !1;
          let s = e.state.doc.resolve(n.pos + o.nodeSize * (t < 0 ? -1 : 1));
          return Ve(e, new r.Bs(i.$anchor, s));
        }
        if (!i.empty) return !1;
        if (e.endOfTextblock(t > 0 ? "forward" : "backward")) {
          let n = $e(e.state, t);
          return !!(n && n instanceof r.qv) && Ve(e, n);
        }
        if (!(B && n.indexOf("m") > -1)) {
          let n,
            o = i.$head,
            s = o.textOffset ? null : t < 0 ? o.nodeBefore : o.nodeAfter;
          if (!s || s.isText) return !1;
          let l = t < 0 ? o.pos - s.nodeSize : o.pos;
          return (
            !!(s.isAtom || ((n = e.docView.descAt(l)) && !n.contentDOM)) &&
            (r.qv.isSelectable(s)
              ? Ve(
                  e,
                  new r.qv(t < 0 ? e.state.doc.resolve(o.pos - s.nodeSize) : o),
                )
              : !!z &&
                Ve(
                  e,
                  new r.Bs(e.state.doc.resolve(t < 0 ? l : l + s.nodeSize)),
                ))
          );
        }
      }
      function We(e) {
        return 3 == e.nodeType ? e.nodeValue.length : e.childNodes.length;
      }
      function qe(e, t) {
        let n = e.pmViewDesc;
        return (
          n && 0 == n.size && (t < 0 || e.nextSibling || "BR" != e.nodeName)
        );
      }
      function je(e, t) {
        return t < 0
          ? (function (e) {
              let t = e.domSelectionRange(),
                n = t.focusNode,
                r = t.focusOffset;
              if (!n) return;
              let i,
                o,
                l = !1;
              C &&
                1 == n.nodeType &&
                r < We(n) &&
                qe(n.childNodes[r], -1) &&
                (l = !0);
              for (;;)
                if (r > 0) {
                  if (1 != n.nodeType) break;
                  {
                    let e = n.childNodes[r - 1];
                    if (qe(e, -1)) (i = n), (o = --r);
                    else {
                      if (3 != e.nodeType) break;
                      (n = e), (r = n.nodeValue.length);
                    }
                  }
                } else {
                  if (Le(n)) break;
                  {
                    let t = n.previousSibling;
                    for (; t && qe(t, -1); )
                      (i = n.parentNode), (o = s(t)), (t = t.previousSibling);
                    if (t) (n = t), (r = We(n));
                    else {
                      if (((n = n.parentNode), n == e.dom)) break;
                      r = 0;
                    }
                  }
                }
              l ? He(e, n, r) : i && He(e, i, o);
            })(e)
          : (function (e) {
              let t = e.domSelectionRange(),
                n = t.focusNode,
                r = t.focusOffset;
              if (!n) return;
              let i,
                o,
                l = We(n);
              for (;;)
                if (r < l) {
                  if (1 != n.nodeType) break;
                  if (!qe(n.childNodes[r], 1)) break;
                  (i = n), (o = ++r);
                } else {
                  if (Le(n)) break;
                  {
                    let t = n.nextSibling;
                    for (; t && qe(t, 1); )
                      (i = t.parentNode), (o = s(t) + 1), (t = t.nextSibling);
                    if (t) (n = t), (r = 0), (l = We(n));
                    else {
                      if (((n = n.parentNode), n == e.dom)) break;
                      r = l = 0;
                    }
                  }
                }
              i && He(e, i, o);
            })(e);
      }
      function Le(e) {
        let t = e.pmViewDesc;
        return t && t.node && t.node.isBlock;
      }
      function He(e, t, n) {
        if (3 != t.nodeType) {
          let e, r;
          (r = (function (e, t) {
            for (; e && t == e.childNodes.length && !f(e); )
              (t = s(e) + 1), (e = e.parentNode);
            for (; e && t < e.childNodes.length; ) {
              let n = e.childNodes[t];
              if (3 == n.nodeType) return n;
              if (1 == n.nodeType && "false" == n.contentEditable) break;
              (e = n), (t = 0);
            }
          })(t, n))
            ? ((t = r), (n = 0))
            : (e = (function (e, t) {
                for (; e && !t && !f(e); ) (t = s(e)), (e = e.parentNode);
                for (; e && t; ) {
                  let n = e.childNodes[t - 1];
                  if (3 == n.nodeType) return n;
                  if (1 == n.nodeType && "false" == n.contentEditable) break;
                  t = (e = n).childNodes.length;
                }
              })(t, n)) && ((t = e), (n = e.nodeValue.length));
        }
        let r = e.domSelection();
        if (m(r)) {
          let e = document.createRange();
          e.setEnd(t, n), e.setStart(t, n), r.removeAllRanges(), r.addRange(e);
        } else r.extend && r.extend(t, n);
        e.domObserver.setCurSelection();
        let { state: i } = e;
        setTimeout(() => {
          e.state == i && Te(e);
        }, 50);
      }
      function Je(e, t) {
        let n = e.state.doc.resolve(t);
        if (!N && !A && n.parent.inlineContent) {
          let r = e.coordsAtPos(t);
          if (t > n.start()) {
            let n = e.coordsAtPos(t - 1),
              i = (n.top + n.bottom) / 2;
            if (i > r.top && i < r.bottom && Math.abs(n.left - r.left) > 1)
              return n.left < r.left ? "ltr" : "rtl";
          }
          if (t < n.end()) {
            let n = e.coordsAtPos(t + 1),
              i = (n.top + n.bottom) / 2;
            if (i > r.top && i < r.bottom && Math.abs(n.left - r.left) > 1)
              return n.left > r.left ? "ltr" : "rtl";
          }
        }
        return "rtl" == getComputedStyle(e.dom).direction ? "rtl" : "ltr";
      }
      function Ye(e, t, n) {
        let i = e.state.selection;
        if ((i instanceof r.Bs && !i.empty) || n.indexOf("s") > -1) return !1;
        if (B && n.indexOf("m") > -1) return !1;
        let { $from: o, $to: s } = i;
        if (
          !o.parent.inlineContent ||
          e.endOfTextblock(t < 0 ? "up" : "down")
        ) {
          let n = $e(e.state, t);
          if (n && n instanceof r.qv) return Ve(e, n);
        }
        if (!o.parent.inlineContent) {
          let n = t < 0 ? o : s,
            l = i instanceof r.C1 ? r.Y1.near(n, t) : r.Y1.findFrom(n, t);
          return !!l && Ve(e, l);
        }
        return !1;
      }
      function Ke(e, t) {
        if (!(e.state.selection instanceof r.Bs)) return !0;
        let { $head: n, $anchor: i, empty: o } = e.state.selection;
        if (!n.sameParent(i)) return !0;
        if (!o) return !1;
        if (e.endOfTextblock(t > 0 ? "forward" : "backward")) return !0;
        let s = !n.textOffset && (t < 0 ? n.nodeBefore : n.nodeAfter);
        if (s && !s.isText) {
          let r = e.state.tr;
          return (
            t < 0
              ? r.delete(n.pos - s.nodeSize, n.pos)
              : r.delete(n.pos, n.pos + s.nodeSize),
            e.dispatch(r),
            !0
          );
        }
        return !1;
      }
      function Ue(e, t, n) {
        e.domObserver.stop(), (t.contentEditable = n), e.domObserver.start();
      }
      function Ge(e, t) {
        let n = t.keyCode,
          r = (function (e) {
            let t = "";
            return (
              e.ctrlKey && (t += "c"),
              e.metaKey && (t += "m"),
              e.altKey && (t += "a"),
              e.shiftKey && (t += "s"),
              t
            );
          })(t);
        if (8 == n || (B && 72 == n && "c" == r)) return Ke(e, -1) || je(e, -1);
        if ((46 == n && !t.shiftKey) || (B && 68 == n && "c" == r))
          return Ke(e, 1) || je(e, 1);
        if (13 == n || 27 == n) return !0;
        if (37 == n || (B && 66 == n && "c" == r)) {
          let t =
            37 == n ? ("ltr" == Je(e, e.state.selection.from) ? -1 : 1) : -1;
          return _e(e, t, r) || je(e, t);
        }
        if (39 == n || (B && 70 == n && "c" == r)) {
          let t =
            39 == n ? ("ltr" == Je(e, e.state.selection.from) ? 1 : -1) : 1;
          return _e(e, t, r) || je(e, t);
        }
        return 38 == n || (B && 80 == n && "c" == r)
          ? Ye(e, -1, r) || je(e, -1)
          : 40 == n || (B && 78 == n && "c" == r)
            ? (function (e) {
                if (!D || e.state.selection.$head.parentOffset > 0) return !1;
                let { focusNode: t, focusOffset: n } = e.domSelectionRange();
                if (
                  t &&
                  1 == t.nodeType &&
                  0 == n &&
                  t.firstChild &&
                  "false" == t.firstChild.contentEditable
                ) {
                  let n = t.firstChild;
                  Ue(e, n, "true"), setTimeout(() => Ue(e, n, "false"), 20);
                }
                return !1;
              })(e) ||
              Ye(e, 1, r) ||
              je(e, 1)
            : r == (B ? "m" : "c") &&
              (66 == n || 73 == n || 89 == n || 90 == n);
      }
      function Xe(e, t) {
        e.someProp("transformCopied", (n) => {
          t = n(t, e);
        });
        let n = [],
          { content: r, openStart: o, openEnd: s } = t;
        for (
          ;
          o > 1 && s > 1 && 1 == r.childCount && 1 == r.firstChild.childCount;

        ) {
          o--, s--;
          let e = r.firstChild;
          n.push(e.type.name, e.attrs != e.type.defaultAttrs ? e.attrs : null),
            (r = e.content);
        }
        let l =
            e.someProp("clipboardSerializer") ||
            i.PW.fromSchema(e.state.schema),
          a = lt(),
          h = a.createElement("div");
        h.appendChild(l.serializeFragment(r, { document: a }));
        let c,
          d = h.firstChild,
          p = 0;
        for (; d && 1 == d.nodeType && (c = ot[d.nodeName.toLowerCase()]); ) {
          for (let e = c.length - 1; e >= 0; e--) {
            let t = a.createElement(c[e]);
            for (; h.firstChild; ) t.appendChild(h.firstChild);
            h.appendChild(t), p++;
          }
          d = h.firstChild;
        }
        return (
          d &&
            1 == d.nodeType &&
            d.setAttribute(
              "data-pm-slice",
              `${o} ${s}${p ? ` -${p}` : ""} ${JSON.stringify(n)}`,
            ),
          {
            dom: h,
            text:
              e.someProp("clipboardTextSerializer", (n) => n(t, e)) ||
              t.content.textBetween(0, t.content.size, "\n\n"),
          }
        );
      }
      function Ze(e, t, n, r, o) {
        let s,
          l,
          a = o.parent.type.spec.code;
        if (!n && !t) return null;
        let h = t && (r || a || !n);
        if (h) {
          if (
            (e.someProp("transformPastedText", (n) => {
              t = n(t, a || r, e);
            }),
            a)
          )
            return t
              ? new i.p2(
                  i.HY.from(e.state.schema.text(t.replace(/\r\n?/g, "\n"))),
                  0,
                  0,
                )
              : i.p2.empty;
          let n = e.someProp("clipboardTextParser", (n) => n(t, o, r, e));
          if (n) l = n;
          else {
            let n = o.marks(),
              { schema: r } = e.state,
              l = i.PW.fromSchema(r);
            (s = document.createElement("div")),
              t.split(/(?:\r\n?|\n)+/).forEach((e) => {
                let t = s.appendChild(document.createElement("p"));
                e && t.appendChild(l.serializeNode(r.text(e, n)));
              });
          }
        } else
          e.someProp("transformPastedHTML", (t) => {
            n = t(n, e);
          }),
            (s = (function (e) {
              let t = /^(\s*<meta [^>]*>)*/.exec(e);
              t && (e = e.slice(t[0].length));
              let n,
                r = lt().createElement("div"),
                i = /<([a-z][^>\s]+)/i.exec(e);
              (n = i && ot[i[1].toLowerCase()]) &&
                (e =
                  n.map((e) => "<" + e + ">").join("") +
                  e +
                  n
                    .map((e) => "</" + e + ">")
                    .reverse()
                    .join(""));
              if (((r.innerHTML = e), n))
                for (let e = 0; e < n.length; e++)
                  r = r.querySelector(n[e]) || r;
              return r;
            })(n)),
            z &&
              (function (e) {
                let t = e.querySelectorAll(
                  N
                    ? "span:not([class]):not([style])"
                    : "span.Apple-converted-space",
                );
                for (let n = 0; n < t.length; n++) {
                  let r = t[n];
                  1 == r.childNodes.length &&
                    " " == r.textContent &&
                    r.parentNode &&
                    r.parentNode.replaceChild(
                      e.ownerDocument.createTextNode(" "),
                      r,
                    );
                }
              })(s);
        let c = s && s.querySelector("[data-pm-slice]"),
          d =
            c &&
            /^(\d+) (\d+)(?: -(\d+))? (.*)/.exec(
              c.getAttribute("data-pm-slice") || "",
            );
        if (d && d[3])
          for (let e = +d[3]; e > 0; e--) {
            let e = s.firstChild;
            for (; e && 1 != e.nodeType; ) e = e.nextSibling;
            if (!e) break;
            s = e;
          }
        if (!l) {
          let t =
            e.someProp("clipboardParser") ||
            e.someProp("domParser") ||
            i.aw.fromSchema(e.state.schema);
          l = t.parseSlice(s, {
            preserveWhitespace: !(!h && !d),
            context: o,
            ruleFromNode: (e) =>
              "BR" != e.nodeName ||
              e.nextSibling ||
              !e.parentNode ||
              Qe.test(e.parentNode.nodeName)
                ? null
                : { ignore: !0 },
          });
        }
        if (d)
          l = (function (e, t) {
            if (!e.size) return e;
            let n,
              r = e.content.firstChild.type.schema;
            try {
              n = JSON.parse(t);
            } catch (t) {
              return e;
            }
            let { content: o, openStart: s, openEnd: l } = e;
            for (let e = n.length - 2; e >= 0; e -= 2) {
              let t = r.nodes[n[e]];
              if (!t || t.hasRequiredAttrs()) break;
              (o = i.HY.from(t.create(n[e + 1], o))), s++, l++;
            }
            return new i.p2(o, s, l);
          })(it(l, +d[1], +d[2]), d[4]);
        else if (
          ((l = i.p2.maxOpen(
            (function (e, t) {
              if (e.childCount < 2) return e;
              for (let n = t.depth; n >= 0; n--) {
                let r,
                  o = t.node(n).contentMatchAt(t.index(n)),
                  s = [];
                if (
                  (e.forEach((e) => {
                    if (!s) return;
                    let t,
                      n = o.findWrapping(e.type);
                    if (!n) return (s = null);
                    if (
                      (t =
                        s.length && r.length && tt(n, r, e, s[s.length - 1], 0))
                    )
                      s[s.length - 1] = t;
                    else {
                      s.length &&
                        (s[s.length - 1] = nt(s[s.length - 1], r.length));
                      let t = et(e, n);
                      s.push(t), (o = o.matchType(t.type)), (r = n);
                    }
                  }),
                  s)
                )
                  return i.HY.from(s);
              }
              return e;
            })(l.content, o),
            !0,
          )),
          l.openStart || l.openEnd)
        ) {
          let e = 0,
            t = 0;
          for (
            let t = l.content.firstChild;
            e < l.openStart && !t.type.spec.isolating;
            e++, t = t.firstChild
          );
          for (
            let e = l.content.lastChild;
            t < l.openEnd && !e.type.spec.isolating;
            t++, e = e.lastChild
          );
          l = it(l, e, t);
        }
        return (
          e.someProp("transformPasted", (t) => {
            l = t(l, e);
          }),
          l
        );
      }
      const Qe =
        /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var)$/i;
      function et(e, t, n = 0) {
        for (let r = t.length - 1; r >= n; r--)
          e = t[r].create(null, i.HY.from(e));
        return e;
      }
      function tt(e, t, n, r, o) {
        if (o < e.length && o < t.length && e[o] == t[o]) {
          let s = tt(e, t, n, r.lastChild, o + 1);
          if (s) return r.copy(r.content.replaceChild(r.childCount - 1, s));
          if (
            r
              .contentMatchAt(r.childCount)
              .matchType(o == e.length - 1 ? n.type : e[o + 1])
          )
            return r.copy(r.content.append(i.HY.from(et(n, e, o + 1))));
        }
      }
      function nt(e, t) {
        if (0 == t) return e;
        let n = e.content.replaceChild(
            e.childCount - 1,
            nt(e.lastChild, t - 1),
          ),
          r = e.contentMatchAt(e.childCount).fillBefore(i.HY.empty, !0);
        return e.copy(n.append(r));
      }
      function rt(e, t, n, r, o, s) {
        let l = t < 0 ? e.firstChild : e.lastChild,
          a = l.content;
        return (
          e.childCount > 1 && (s = 0),
          o < r - 1 && (a = rt(a, t, n, r, o + 1, s)),
          o >= n &&
            (a =
              t < 0
                ? l
                    .contentMatchAt(0)
                    .fillBefore(a, s <= o)
                    .append(a)
                : a.append(
                    l.contentMatchAt(l.childCount).fillBefore(i.HY.empty, !0),
                  )),
          e.replaceChild(t < 0 ? 0 : e.childCount - 1, l.copy(a))
        );
      }
      function it(e, t, n) {
        return (
          t < e.openStart &&
            (e = new i.p2(
              rt(e.content, -1, t, e.openStart, 0, e.openEnd),
              t,
              e.openEnd,
            )),
          n < e.openEnd &&
            (e = new i.p2(
              rt(e.content, 1, n, e.openEnd, 0, 0),
              e.openStart,
              n,
            )),
          e
        );
      }
      const ot = {
        thead: ["table"],
        tbody: ["table"],
        tfoot: ["table"],
        caption: ["table"],
        colgroup: ["table"],
        col: ["table", "colgroup"],
        tr: ["table", "tbody"],
        td: ["table", "tbody", "tr"],
        th: ["table", "tbody", "tr"],
      };
      let st = null;
      function lt() {
        return st || (st = document.implementation.createHTMLDocument("title"));
      }
      const at = {},
        ht = {},
        ct = { touchstart: !0, touchmove: !0 };
      class dt {
        constructor() {
          (this.shiftKey = !1),
            (this.mouseDown = null),
            (this.lastKeyCode = null),
            (this.lastKeyCodeTime = 0),
            (this.lastClick = { time: 0, x: 0, y: 0, type: "" }),
            (this.lastSelectionOrigin = null),
            (this.lastSelectionTime = 0),
            (this.lastIOSEnter = 0),
            (this.lastIOSEnterFallbackTimeout = -1),
            (this.lastFocus = 0),
            (this.lastTouch = 0),
            (this.lastAndroidDelete = 0),
            (this.composing = !1),
            (this.composingTimeout = -1),
            (this.compositionNodes = []),
            (this.compositionEndedAt = -2e8),
            (this.compositionID = 1),
            (this.compositionPendingChanges = 0),
            (this.domChangeCount = 0),
            (this.eventHandlers = Object.create(null)),
            (this.hideSelectionGuard = null);
        }
      }
      function pt(e, t) {
        (e.input.lastSelectionOrigin = t),
          (e.input.lastSelectionTime = Date.now());
      }
      function ut(e) {
        e.someProp("handleDOMEvents", (t) => {
          for (let n in t)
            e.input.eventHandlers[n] ||
              e.dom.addEventListener(
                n,
                (e.input.eventHandlers[n] = (t) => ft(e, t)),
              );
        });
      }
      function ft(e, t) {
        return e.someProp("handleDOMEvents", (n) => {
          let r = n[t.type];
          return !!r && (r(e, t) || t.defaultPrevented);
        });
      }
      function mt(e, t) {
        if (!t.bubbles) return !0;
        if (t.defaultPrevented) return !1;
        for (let n = t.target; n != e.dom; n = n.parentNode)
          if (
            !n ||
            11 == n.nodeType ||
            (n.pmViewDesc && n.pmViewDesc.stopEvent(t))
          )
            return !1;
        return !0;
      }
      function gt(e) {
        return { left: e.clientX, top: e.clientY };
      }
      function yt(e, t, n, r, i) {
        if (-1 == r) return !1;
        let o = e.state.doc.resolve(r);
        for (let r = o.depth + 1; r > 0; r--)
          if (
            e.someProp(t, (t) =>
              r > o.depth
                ? t(e, n, o.nodeAfter, o.before(r), i, !0)
                : t(e, n, o.node(r), o.before(r), i, !1),
            )
          )
            return !0;
        return !1;
      }
      function wt(e, t, n) {
        e.focused || e.focus();
        let r = e.state.tr.setSelection(t);
        "pointer" == n && r.setMeta("pointer", !0), e.dispatch(r);
      }
      function vt(e, t, n, i, o) {
        return (
          yt(e, "handleClickOn", t, n, i) ||
          e.someProp("handleClick", (n) => n(e, t, i)) ||
          (o
            ? (function (e, t) {
                if (-1 == t) return !1;
                let n,
                  i,
                  o = e.state.selection;
                o instanceof r.qv && (n = o.node);
                let s = e.state.doc.resolve(t);
                for (let e = s.depth + 1; e > 0; e--) {
                  let t = e > s.depth ? s.nodeAfter : s.node(e);
                  if (r.qv.isSelectable(t)) {
                    i =
                      n &&
                      o.$from.depth > 0 &&
                      e >= o.$from.depth &&
                      s.before(o.$from.depth + 1) == o.$from.pos
                        ? s.before(o.$from.depth)
                        : s.before(e);
                    break;
                  }
                }
                return (
                  null != i &&
                  (wt(e, r.qv.create(e.state.doc, i), "pointer"), !0)
                );
              })(e, n)
            : (function (e, t) {
                if (-1 == t) return !1;
                let n = e.state.doc.resolve(t),
                  i = n.nodeAfter;
                return (
                  !!(i && i.isAtom && r.qv.isSelectable(i)) &&
                  (wt(e, new r.qv(n), "pointer"), !0)
                );
              })(e, n))
        );
      }
      function bt(e, t, n, r) {
        return (
          yt(e, "handleDoubleClickOn", t, n, r) ||
          e.someProp("handleDoubleClick", (n) => n(e, t, r))
        );
      }
      function St(e, t, n, i) {
        return (
          yt(e, "handleTripleClickOn", t, n, i) ||
          e.someProp("handleTripleClick", (n) => n(e, t, i)) ||
          (function (e, t, n) {
            if (0 != n.button) return !1;
            let i = e.state.doc;
            if (-1 == t)
              return (
                !!i.inlineContent &&
                (wt(e, r.Bs.create(i, 0, i.content.size), "pointer"), !0)
              );
            let o = i.resolve(t);
            for (let t = o.depth + 1; t > 0; t--) {
              let n = t > o.depth ? o.nodeAfter : o.node(t),
                s = o.before(t);
              if (n.inlineContent)
                wt(e, r.Bs.create(i, s + 1, s + 1 + n.content.size), "pointer");
              else {
                if (!r.qv.isSelectable(n)) continue;
                wt(e, r.qv.create(i, s), "pointer");
              }
              return !0;
            }
          })(e, n, i)
        );
      }
      function kt(e) {
        return Dt(e);
      }
      (ht.keydown = (e, t) => {
        let n = t;
        if (
          ((e.input.shiftKey = 16 == n.keyCode || n.shiftKey),
          !Ct(e, n) &&
            ((e.input.lastKeyCode = n.keyCode),
            (e.input.lastKeyCodeTime = Date.now()),
            !R || !N || 13 != n.keyCode))
        )
          if (
            (229 != n.keyCode && e.domObserver.forceFlush(),
            !E || 13 != n.keyCode || n.ctrlKey || n.altKey || n.metaKey)
          )
            e.someProp("handleKeyDown", (t) => t(e, n)) || Ge(e, n)
              ? n.preventDefault()
              : pt(e, "key");
          else {
            let t = Date.now();
            (e.input.lastIOSEnter = t),
              (e.input.lastIOSEnterFallbackTimeout = setTimeout(() => {
                e.input.lastIOSEnter == t &&
                  (e.someProp("handleKeyDown", (t) => t(e, g(13, "Enter"))),
                  (e.input.lastIOSEnter = 0));
              }, 200));
          }
      }),
        (ht.keyup = (e, t) => {
          16 == t.keyCode && (e.input.shiftKey = !1);
        }),
        (ht.keypress = (e, t) => {
          let n = t;
          if (
            Ct(e, n) ||
            !n.charCode ||
            (n.ctrlKey && !n.altKey) ||
            (B && n.metaKey)
          )
            return;
          if (e.someProp("handleKeyPress", (t) => t(e, n)))
            return void n.preventDefault();
          let i = e.state.selection;
          if (!(i instanceof r.Bs && i.$from.sameParent(i.$to))) {
            let t = String.fromCharCode(n.charCode);
            /[\r\n]/.test(t) ||
              e.someProp("handleTextInput", (n) =>
                n(e, i.$from.pos, i.$to.pos, t),
              ) ||
              e.dispatch(e.state.tr.insertText(t).scrollIntoView()),
              n.preventDefault();
          }
        });
      const xt = B ? "metaKey" : "ctrlKey";
      at.mousedown = (e, t) => {
        let n = t;
        e.input.shiftKey = n.shiftKey;
        let r = kt(e),
          i = Date.now(),
          o = "singleClick";
        i - e.input.lastClick.time < 500 &&
          (function (e, t) {
            let n = t.x - e.clientX,
              r = t.y - e.clientY;
            return n * n + r * r < 100;
          })(n, e.input.lastClick) &&
          !n[xt] &&
          ("singleClick" == e.input.lastClick.type
            ? (o = "doubleClick")
            : "doubleClick" == e.input.lastClick.type && (o = "tripleClick")),
          (e.input.lastClick = {
            time: i,
            x: n.clientX,
            y: n.clientY,
            type: o,
          });
        let s = e.posAtCoords(gt(n));
        s &&
          ("singleClick" == o
            ? (e.input.mouseDown && e.input.mouseDown.done(),
              (e.input.mouseDown = new Mt(e, s, n, !!r)))
            : ("doubleClick" == o ? bt : St)(e, s.pos, s.inside, n)
              ? n.preventDefault()
              : pt(e, "pointer"));
      };
      class Mt {
        constructor(e, t, n, i) {
          let o, s;
          if (
            ((this.view = e),
            (this.pos = t),
            (this.event = n),
            (this.flushed = i),
            (this.delayedSelectionSync = !1),
            (this.mightDrag = null),
            (this.startDoc = e.state.doc),
            (this.selectNode = !!n[xt]),
            (this.allowDefault = n.shiftKey),
            t.inside > -1)
          )
            (o = e.state.doc.nodeAt(t.inside)), (s = t.inside);
          else {
            let n = e.state.doc.resolve(t.pos);
            (o = n.parent), (s = n.depth ? n.before() : 0);
          }
          const l = i ? null : n.target,
            a = l ? e.docView.nearestDesc(l, !0) : null;
          this.target = a ? a.dom : null;
          let { selection: h } = e.state;
          ((0 == n.button &&
            o.type.spec.draggable &&
            !1 !== o.type.spec.selectable) ||
            (h instanceof r.qv && h.from <= s && h.to > s)) &&
            (this.mightDrag = {
              node: o,
              pos: s,
              addAttr: !(!this.target || this.target.draggable),
              setUneditable: !(
                !this.target ||
                !C ||
                this.target.hasAttribute("contentEditable")
              ),
            }),
            this.target &&
              this.mightDrag &&
              (this.mightDrag.addAttr || this.mightDrag.setUneditable) &&
              (this.view.domObserver.stop(),
              this.mightDrag.addAttr && (this.target.draggable = !0),
              this.mightDrag.setUneditable &&
                setTimeout(() => {
                  this.view.input.mouseDown == this &&
                    this.target.setAttribute("contentEditable", "false");
                }, 20),
              this.view.domObserver.start()),
            e.root.addEventListener("mouseup", (this.up = this.up.bind(this))),
            e.root.addEventListener(
              "mousemove",
              (this.move = this.move.bind(this)),
            ),
            pt(e, "pointer");
        }
        done() {
          this.view.root.removeEventListener("mouseup", this.up),
            this.view.root.removeEventListener("mousemove", this.move),
            this.mightDrag &&
              this.target &&
              (this.view.domObserver.stop(),
              this.mightDrag.addAttr &&
                this.target.removeAttribute("draggable"),
              this.mightDrag.setUneditable &&
                this.target.removeAttribute("contentEditable"),
              this.view.domObserver.start()),
            this.delayedSelectionSync && setTimeout(() => Te(this.view)),
            (this.view.input.mouseDown = null);
        }
        up(e) {
          if ((this.done(), !this.view.dom.contains(e.target))) return;
          let t = this.pos;
          this.view.state.doc != this.startDoc &&
            (t = this.view.posAtCoords(gt(e))),
            this.updateAllowDefault(e),
            this.allowDefault || !t
              ? pt(this.view, "pointer")
              : vt(this.view, t.pos, t.inside, e, this.selectNode)
                ? e.preventDefault()
                : 0 == e.button &&
                    (this.flushed ||
                      (D && this.mightDrag && !this.mightDrag.node.isAtom) ||
                      (N &&
                        !this.view.state.selection.visible &&
                        Math.min(
                          Math.abs(t.pos - this.view.state.selection.from),
                          Math.abs(t.pos - this.view.state.selection.to),
                        ) <= 2))
                  ? (wt(
                      this.view,
                      r.Y1.near(this.view.state.doc.resolve(t.pos)),
                      "pointer",
                    ),
                    e.preventDefault())
                  : pt(this.view, "pointer");
        }
        move(e) {
          this.updateAllowDefault(e),
            pt(this.view, "pointer"),
            0 == e.buttons && this.done();
        }
        updateAllowDefault(e) {
          !this.allowDefault &&
            (Math.abs(this.event.x - e.clientX) > 4 ||
              Math.abs(this.event.y - e.clientY) > 4) &&
            (this.allowDefault = !0);
        }
      }
      function Ct(e, t) {
        return (
          !!e.composing ||
          (!!(D && Math.abs(t.timeStamp - e.input.compositionEndedAt) < 500) &&
            ((e.input.compositionEndedAt = -2e8), !0))
        );
      }
      (at.touchstart = (e) => {
        (e.input.lastTouch = Date.now()), kt(e), pt(e, "pointer");
      }),
        (at.touchmove = (e) => {
          (e.input.lastTouch = Date.now()), pt(e, "pointer");
        }),
        (at.contextmenu = (e) => kt(e));
      const Ot = R ? 5e3 : -1;
      function Nt(e, t) {
        clearTimeout(e.input.composingTimeout),
          t > -1 && (e.input.composingTimeout = setTimeout(() => Dt(e), t));
      }
      function Tt(e) {
        for (
          e.composing &&
          ((e.input.composing = !1),
          (e.input.compositionEndedAt = (function () {
            let e = document.createEvent("Event");
            return e.initEvent("event", !0, !0), e.timeStamp;
          })()));
          e.input.compositionNodes.length > 0;

        )
          e.input.compositionNodes.pop().markParentsDirty();
      }
      function Dt(e, t = !1) {
        if (!(R && e.domObserver.flushingSoon >= 0)) {
          if (
            (e.domObserver.forceFlush(),
            Tt(e),
            t || (e.docView && e.docView.dirty))
          ) {
            let t = Oe(e);
            return (
              t && !t.eq(e.state.selection)
                ? e.dispatch(e.state.tr.setSelection(t))
                : e.updateState(e.state),
              !0
            );
          }
          return !1;
        }
      }
      (ht.compositionstart = ht.compositionupdate =
        (e) => {
          if (!e.composing) {
            e.domObserver.flush();
            let { state: t } = e,
              n = t.selection.$from;
            if (
              t.selection.empty &&
              (t.storedMarks ||
                (!n.textOffset &&
                  n.parentOffset &&
                  n.nodeBefore.marks.some((e) => !1 === e.type.spec.inclusive)))
            )
              (e.markCursor = e.state.storedMarks || n.marks()),
                Dt(e, !0),
                (e.markCursor = null);
            else if (
              (Dt(e),
              C &&
                t.selection.empty &&
                n.parentOffset &&
                !n.textOffset &&
                n.nodeBefore.marks.length)
            ) {
              let t = e.domSelectionRange();
              for (
                let n = t.focusNode, r = t.focusOffset;
                n && 1 == n.nodeType && 0 != r;

              ) {
                let t = r < 0 ? n.lastChild : n.childNodes[r - 1];
                if (!t) break;
                if (3 == t.nodeType) {
                  e.domSelection().collapse(t, t.nodeValue.length);
                  break;
                }
                (n = t), (r = -1);
              }
            }
            e.input.composing = !0;
          }
          Nt(e, Ot);
        }),
        (ht.compositionend = (e, t) => {
          e.composing &&
            ((e.input.composing = !1),
            (e.input.compositionEndedAt = t.timeStamp),
            (e.input.compositionPendingChanges = e.domObserver.pendingRecords()
              .length
              ? e.input.compositionID
              : 0),
            e.input.compositionPendingChanges &&
              Promise.resolve().then(() => e.domObserver.flush()),
            e.input.compositionID++,
            Nt(e, 20));
        });
      const Et = (x && M < 15) || (E && I < 604);
      function Bt(e, t, n, r, o) {
        let s = Ze(e, t, n, r, e.state.selection.$from);
        if (e.someProp("handlePaste", (t) => t(e, o, s || i.p2.empty)))
          return !0;
        if (!s) return !1;
        let l = (function (e) {
            return 0 == e.openStart &&
              0 == e.openEnd &&
              1 == e.content.childCount
              ? e.content.firstChild
              : null;
          })(s),
          a = l
            ? e.state.tr.replaceSelectionWith(l, r)
            : e.state.tr.replaceSelection(s);
        return (
          e.dispatch(
            a.scrollIntoView().setMeta("paste", !0).setMeta("uiEvent", "paste"),
          ),
          !0
        );
      }
      function At(e) {
        let t = e.getData("text/plain") || e.getData("Text");
        if (t) return t;
        let n = e.getData("text/uri-list");
        return n ? n.replace(/\r?\n/g, " ") : "";
      }
      (at.copy = ht.cut =
        (e, t) => {
          let n = t,
            r = e.state.selection,
            i = "cut" == n.type;
          if (r.empty) return;
          let o = Et ? null : n.clipboardData,
            s = r.content(),
            { dom: l, text: a } = Xe(e, s);
          o
            ? (n.preventDefault(),
              o.clearData(),
              o.setData("text/html", l.innerHTML),
              o.setData("text/plain", a))
            : (function (e, t) {
                if (!e.dom.parentNode) return;
                let n = e.dom.parentNode.appendChild(
                  document.createElement("div"),
                );
                n.appendChild(t),
                  (n.style.cssText =
                    "position: fixed; left: -10000px; top: 10px");
                let r = getSelection(),
                  i = document.createRange();
                i.selectNodeContents(t),
                  e.dom.blur(),
                  r.removeAllRanges(),
                  r.addRange(i),
                  setTimeout(() => {
                    n.parentNode && n.parentNode.removeChild(n), e.focus();
                  }, 50);
              })(e, l),
            i &&
              e.dispatch(
                e.state.tr
                  .deleteSelection()
                  .scrollIntoView()
                  .setMeta("uiEvent", "cut"),
              );
        }),
        (ht.paste = (e, t) => {
          let n = t;
          if (e.composing && !R) return;
          let r = Et ? null : n.clipboardData,
            i = e.input.shiftKey && 45 != e.input.lastKeyCode;
          r && Bt(e, At(r), r.getData("text/html"), i, n)
            ? n.preventDefault()
            : (function (e, t) {
                if (!e.dom.parentNode) return;
                let n =
                    e.input.shiftKey ||
                    e.state.selection.$from.parent.type.spec.code,
                  r = e.dom.parentNode.appendChild(
                    document.createElement(n ? "textarea" : "div"),
                  );
                n || (r.contentEditable = "true"),
                  (r.style.cssText =
                    "position: fixed; left: -10000px; top: 10px"),
                  r.focus();
                let i = e.input.shiftKey && 45 != e.input.lastKeyCode;
                setTimeout(() => {
                  e.focus(),
                    r.parentNode && r.parentNode.removeChild(r),
                    n
                      ? Bt(e, r.value, null, i, t)
                      : Bt(e, r.textContent, r.innerHTML, i, t);
                }, 50);
              })(e, n);
        });
      class Rt {
        constructor(e, t, n) {
          (this.slice = e), (this.move = t), (this.node = n);
        }
      }
      const zt = B ? "altKey" : "ctrlKey";
      (at.dragstart = (e, t) => {
        let n = t,
          i = e.input.mouseDown;
        if ((i && i.done(), !n.dataTransfer)) return;
        let o,
          s = e.state.selection,
          l = s.empty ? null : e.posAtCoords(gt(n));
        if (
          l &&
          l.pos >= s.from &&
          l.pos <= (s instanceof r.qv ? s.to - 1 : s.to)
        );
        else if (i && i.mightDrag)
          o = r.qv.create(e.state.doc, i.mightDrag.pos);
        else if (n.target && 1 == n.target.nodeType) {
          let t = e.docView.nearestDesc(n.target, !0);
          t &&
            t.node.type.spec.draggable &&
            t != e.docView &&
            (o = r.qv.create(e.state.doc, t.posBefore));
        }
        let a = (o || e.state.selection).content(),
          { dom: h, text: c } = Xe(e, a);
        n.dataTransfer.clearData(),
          n.dataTransfer.setData(Et ? "Text" : "text/html", h.innerHTML),
          (n.dataTransfer.effectAllowed = "copyMove"),
          Et || n.dataTransfer.setData("text/plain", c),
          (e.dragging = new Rt(a, !n[zt], o));
      }),
        (at.dragend = (e) => {
          let t = e.dragging;
          window.setTimeout(() => {
            e.dragging == t && (e.dragging = null);
          }, 50);
        }),
        (ht.dragover = ht.dragenter = (e, t) => t.preventDefault()),
        (ht.drop = (e, t) => {
          let n = t,
            s = e.dragging;
          if (((e.dragging = null), !n.dataTransfer)) return;
          let l = e.posAtCoords(gt(n));
          if (!l) return;
          let a = e.state.doc.resolve(l.pos),
            h = s && s.slice;
          h
            ? e.someProp("transformPasted", (t) => {
                h = t(h, e);
              })
            : (h = Ze(
                e,
                At(n.dataTransfer),
                Et ? null : n.dataTransfer.getData("text/html"),
                !1,
                a,
              ));
          let c = !(!s || n[zt]);
          if (e.someProp("handleDrop", (t) => t(e, n, h || i.p2.empty, c)))
            return void n.preventDefault();
          if (!h) return;
          n.preventDefault();
          let d = h ? (0, o.nj)(e.state.doc, a.pos, h) : a.pos;
          null == d && (d = a.pos);
          let p = e.state.tr;
          if (c) {
            let { node: e } = s;
            e ? e.replace(p) : p.deleteSelection();
          }
          let u = p.mapping.map(d),
            f = 0 == h.openStart && 0 == h.openEnd && 1 == h.content.childCount,
            m = p.doc;
          if (
            (f
              ? p.replaceRangeWith(u, u, h.content.firstChild)
              : p.replaceRange(u, u, h),
            p.doc.eq(m))
          )
            return;
          let g = p.doc.resolve(u);
          if (
            f &&
            r.qv.isSelectable(h.content.firstChild) &&
            g.nodeAfter &&
            g.nodeAfter.sameMarkup(h.content.firstChild)
          )
            p.setSelection(new r.qv(g));
          else {
            let t = p.mapping.map(d);
            p.mapping.maps[p.mapping.maps.length - 1].forEach(
              (e, n, r, i) => (t = i),
            ),
              p.setSelection(Ie(e, g, p.doc.resolve(t)));
          }
          e.focus(), e.dispatch(p.setMeta("uiEvent", "drop"));
        }),
        (at.focus = (e) => {
          (e.input.lastFocus = Date.now()),
            e.focused ||
              (e.domObserver.stop(),
              e.dom.classList.add("ProseMirror-focused"),
              e.domObserver.start(),
              (e.focused = !0),
              setTimeout(() => {
                e.docView &&
                  e.hasFocus() &&
                  !e.domObserver.currentSelection.eq(e.domSelectionRange()) &&
                  Te(e);
              }, 20));
        }),
        (at.blur = (e, t) => {
          let n = t;
          e.focused &&
            (e.domObserver.stop(),
            e.dom.classList.remove("ProseMirror-focused"),
            e.domObserver.start(),
            n.relatedTarget &&
              e.dom.contains(n.relatedTarget) &&
              e.domObserver.currentSelection.clear(),
            (e.focused = !1));
        }),
        (at.beforeinput = (e, t) => {
          if (N && R && "deleteContentBackward" == t.inputType) {
            e.domObserver.flushSoon();
            let { domChangeCount: t } = e.input;
            setTimeout(() => {
              if (e.input.domChangeCount != t) return;
              if (
                (e.dom.blur(),
                e.focus(),
                e.someProp("handleKeyDown", (t) => t(e, g(8, "Backspace"))))
              )
                return;
              let { $cursor: n } = e.state.selection;
              n &&
                n.pos > 0 &&
                e.dispatch(
                  e.state.tr.delete(n.pos - 1, n.pos).scrollIntoView(),
                );
            }, 50);
          }
        });
      for (let e in ht) at[e] = ht[e];
      function It(e, t) {
        if (e == t) return !0;
        for (let n in e) if (e[n] !== t[n]) return !1;
        for (let n in t) if (!(n in e)) return !1;
        return !0;
      }
      class Ft {
        constructor(e, t) {
          (this.toDOM = e),
            (this.spec = t || Wt),
            (this.side = this.spec.side || 0);
        }
        map(e, t, n, r) {
          let { pos: i, deleted: o } = e.mapResult(
            t.from + r,
            this.side < 0 ? -1 : 1,
          );
          return o ? null : new Vt(i - n, i - n, this);
        }
        valid() {
          return !0;
        }
        eq(e) {
          return (
            this == e ||
            (e instanceof Ft &&
              ((this.spec.key && this.spec.key == e.spec.key) ||
                (this.toDOM == e.toDOM && It(this.spec, e.spec))))
          );
        }
        destroy(e) {
          this.spec.destroy && this.spec.destroy(e);
        }
      }
      class Pt {
        constructor(e, t) {
          (this.attrs = e), (this.spec = t || Wt);
        }
        map(e, t, n, r) {
          let i = e.map(t.from + r, this.spec.inclusiveStart ? -1 : 1) - n,
            o = e.map(t.to + r, this.spec.inclusiveEnd ? 1 : -1) - n;
          return i >= o ? null : new Vt(i, o, this);
        }
        valid(e, t) {
          return t.from < t.to;
        }
        eq(e) {
          return (
            this == e ||
            (e instanceof Pt &&
              It(this.attrs, e.attrs) &&
              It(this.spec, e.spec))
          );
        }
        static is(e) {
          return e.type instanceof Pt;
        }
        destroy() {}
      }
      class $t {
        constructor(e, t) {
          (this.attrs = e), (this.spec = t || Wt);
        }
        map(e, t, n, r) {
          let i = e.mapResult(t.from + r, 1);
          if (i.deleted) return null;
          let o = e.mapResult(t.to + r, -1);
          return o.deleted || o.pos <= i.pos
            ? null
            : new Vt(i.pos - n, o.pos - n, this);
        }
        valid(e, t) {
          let n,
            { index: r, offset: i } = e.content.findIndex(t.from);
          return (
            i == t.from && !(n = e.child(r)).isText && i + n.nodeSize == t.to
          );
        }
        eq(e) {
          return (
            this == e ||
            (e instanceof $t &&
              It(this.attrs, e.attrs) &&
              It(this.spec, e.spec))
          );
        }
        destroy() {}
      }
      class Vt {
        constructor(e, t, n) {
          (this.from = e), (this.to = t), (this.type = n);
        }
        copy(e, t) {
          return new Vt(e, t, this.type);
        }
        eq(e, t = 0) {
          return (
            this.type.eq(e.type) &&
            this.from + t == e.from &&
            this.to + t == e.to
          );
        }
        map(e, t, n) {
          return this.type.map(e, this, t, n);
        }
        static widget(e, t, n) {
          return new Vt(e, e, new Ft(t, n));
        }
        static inline(e, t, n, r) {
          return new Vt(e, t, new Pt(n, r));
        }
        static node(e, t, n, r) {
          return new Vt(e, t, new $t(n, r));
        }
        get spec() {
          return this.type.spec;
        }
        get inline() {
          return this.type instanceof Pt;
        }
        get widget() {
          return this.type instanceof Ft;
        }
      }
      const _t = [],
        Wt = {};
      class qt {
        constructor(e, t) {
          (this.local = e.length ? e : _t), (this.children = t.length ? t : _t);
        }
        static create(e, t) {
          return t.length ? Kt(t, e, 0, Wt) : jt;
        }
        find(e, t, n) {
          let r = [];
          return (
            this.findInner(null == e ? 0 : e, null == t ? 1e9 : t, r, 0, n), r
          );
        }
        findInner(e, t, n, r, i) {
          for (let o = 0; o < this.local.length; o++) {
            let s = this.local[o];
            s.from <= t &&
              s.to >= e &&
              (!i || i(s.spec)) &&
              n.push(s.copy(s.from + r, s.to + r));
          }
          for (let o = 0; o < this.children.length; o += 3)
            if (this.children[o] < t && this.children[o + 1] > e) {
              let s = this.children[o] + 1;
              this.children[o + 2].findInner(e - s, t - s, n, r + s, i);
            }
        }
        map(e, t, n) {
          return this == jt || 0 == e.maps.length
            ? this
            : this.mapInner(e, t, 0, 0, n || Wt);
        }
        mapInner(e, t, n, r, i) {
          let o;
          for (let s = 0; s < this.local.length; s++) {
            let l = this.local[s].map(e, n, r);
            l && l.type.valid(t, l)
              ? (o || (o = [])).push(l)
              : i.onRemove && i.onRemove(this.local[s].spec);
          }
          return this.children.length
            ? (function (e, t, n, r, i, o, s) {
                let l = e.slice();
                for (let e = 0, t = o; e < n.maps.length; e++) {
                  let r = 0;
                  n.maps[e].forEach((e, n, i, o) => {
                    let s = o - i - (n - e);
                    for (let i = 0; i < l.length; i += 3) {
                      let o = l[i + 1];
                      if (o < 0 || e > o + t - r) continue;
                      let a = l[i] + t - r;
                      n >= a
                        ? (l[i + 1] = e <= a ? -2 : -1)
                        : e >= t && s && ((l[i] += s), (l[i + 1] += s));
                    }
                    r += s;
                  }),
                    (t = n.maps[e].map(t, -1));
                }
                let a = !1;
                for (let t = 0; t < l.length; t += 3)
                  if (l[t + 1] < 0) {
                    if (-2 == l[t + 1]) {
                      (a = !0), (l[t + 1] = -1);
                      continue;
                    }
                    let h = n.map(e[t] + o),
                      c = h - i;
                    if (c < 0 || c >= r.content.size) {
                      a = !0;
                      continue;
                    }
                    let d = n.map(e[t + 1] + o, -1) - i,
                      { index: p, offset: u } = r.content.findIndex(c),
                      f = r.maybeChild(p);
                    if (f && u == c && u + f.nodeSize == d) {
                      let r = l[t + 2].mapInner(n, f, h + 1, e[t] + o + 1, s);
                      r != jt
                        ? ((l[t] = c), (l[t + 1] = d), (l[t + 2] = r))
                        : ((l[t + 1] = -2), (a = !0));
                    } else a = !0;
                  }
                if (a) {
                  let a = (function (e, t, n, r, i, o, s) {
                      function l(e, t) {
                        for (let o = 0; o < e.local.length; o++) {
                          let l = e.local[o].map(r, i, t);
                          l
                            ? n.push(l)
                            : s.onRemove && s.onRemove(e.local[o].spec);
                        }
                        for (let n = 0; n < e.children.length; n += 3)
                          l(e.children[n + 2], e.children[n] + t + 1);
                      }
                      for (let n = 0; n < e.length; n += 3)
                        -1 == e[n + 1] && l(e[n + 2], t[n] + o + 1);
                      return n;
                    })(l, e, t, n, i, o, s),
                    h = Kt(a, r, 0, s);
                  t = h.local;
                  for (let e = 0; e < l.length; e += 3)
                    l[e + 1] < 0 && (l.splice(e, 3), (e -= 3));
                  for (let e = 0, t = 0; e < h.children.length; e += 3) {
                    let n = h.children[e];
                    for (; t < l.length && l[t] < n; ) t += 3;
                    l.splice(
                      t,
                      0,
                      h.children[e],
                      h.children[e + 1],
                      h.children[e + 2],
                    );
                  }
                }
                return new qt(t.sort(Ut), l);
              })(this.children, o || [], e, t, n, r, i)
            : o
              ? new qt(o.sort(Ut), _t)
              : jt;
        }
        add(e, t) {
          return t.length
            ? this == jt
              ? qt.create(e, t)
              : this.addInner(e, t, 0)
            : this;
        }
        addInner(e, t, n) {
          let r,
            i = 0;
          e.forEach((e, o) => {
            let s,
              l = o + n;
            if ((s = Jt(t, e, l))) {
              for (r || (r = this.children.slice()); i < r.length && r[i] < o; )
                i += 3;
              r[i] == o
                ? (r[i + 2] = r[i + 2].addInner(e, s, l + 1))
                : r.splice(i, 0, o, o + e.nodeSize, Kt(s, e, l + 1, Wt)),
                (i += 3);
            }
          });
          let o = Ht(i ? Yt(t) : t, -n);
          for (let t = 0; t < o.length; t++)
            o[t].type.valid(e, o[t]) || o.splice(t--, 1);
          return new qt(
            o.length ? this.local.concat(o).sort(Ut) : this.local,
            r || this.children,
          );
        }
        remove(e) {
          return 0 == e.length || this == jt ? this : this.removeInner(e, 0);
        }
        removeInner(e, t) {
          let n = this.children,
            r = this.local;
          for (let r = 0; r < n.length; r += 3) {
            let i,
              o = n[r] + t,
              s = n[r + 1] + t;
            for (let t, n = 0; n < e.length; n++)
              (t = e[n]) &&
                t.from > o &&
                t.to < s &&
                ((e[n] = null), (i || (i = [])).push(t));
            if (!i) continue;
            n == this.children && (n = this.children.slice());
            let l = n[r + 2].removeInner(i, o + 1);
            l != jt ? (n[r + 2] = l) : (n.splice(r, 3), (r -= 3));
          }
          if (r.length)
            for (let n, i = 0; i < e.length; i++)
              if ((n = e[i]))
                for (let e = 0; e < r.length; e++)
                  r[e].eq(n, t) &&
                    (r == this.local && (r = this.local.slice()),
                    r.splice(e--, 1));
          return n == this.children && r == this.local
            ? this
            : r.length || n.length
              ? new qt(r, n)
              : jt;
        }
        forChild(e, t) {
          if (this == jt) return this;
          if (t.isLeaf) return qt.empty;
          let n, r;
          for (let t = 0; t < this.children.length; t += 3)
            if (this.children[t] >= e) {
              this.children[t] == e && (n = this.children[t + 2]);
              break;
            }
          let i = e + 1,
            o = i + t.content.size;
          for (let e = 0; e < this.local.length; e++) {
            let t = this.local[e];
            if (t.from < o && t.to > i && t.type instanceof Pt) {
              let e = Math.max(i, t.from) - i,
                n = Math.min(o, t.to) - i;
              e < n && (r || (r = [])).push(t.copy(e, n));
            }
          }
          if (r) {
            let e = new qt(r.sort(Ut), _t);
            return n ? new Lt([e, n]) : e;
          }
          return n || jt;
        }
        eq(e) {
          if (this == e) return !0;
          if (
            !(e instanceof qt) ||
            this.local.length != e.local.length ||
            this.children.length != e.children.length
          )
            return !1;
          for (let t = 0; t < this.local.length; t++)
            if (!this.local[t].eq(e.local[t])) return !1;
          for (let t = 0; t < this.children.length; t += 3)
            if (
              this.children[t] != e.children[t] ||
              this.children[t + 1] != e.children[t + 1] ||
              !this.children[t + 2].eq(e.children[t + 2])
            )
              return !1;
          return !0;
        }
        locals(e) {
          return Gt(this.localsInner(e));
        }
        localsInner(e) {
          if (this == jt) return _t;
          if (e.inlineContent || !this.local.some(Pt.is)) return this.local;
          let t = [];
          for (let e = 0; e < this.local.length; e++)
            this.local[e].type instanceof Pt || t.push(this.local[e]);
          return t;
        }
      }
      (qt.empty = new qt([], [])), (qt.removeOverlap = Gt);
      const jt = qt.empty;
      class Lt {
        constructor(e) {
          this.members = e;
        }
        map(e, t) {
          const n = this.members.map((n) => n.map(e, t, Wt));
          return Lt.from(n);
        }
        forChild(e, t) {
          if (t.isLeaf) return qt.empty;
          let n = [];
          for (let r = 0; r < this.members.length; r++) {
            let i = this.members[r].forChild(e, t);
            i != jt &&
              (i instanceof Lt ? (n = n.concat(i.members)) : n.push(i));
          }
          return Lt.from(n);
        }
        eq(e) {
          if (!(e instanceof Lt) || e.members.length != this.members.length)
            return !1;
          for (let t = 0; t < this.members.length; t++)
            if (!this.members[t].eq(e.members[t])) return !1;
          return !0;
        }
        locals(e) {
          let t,
            n = !0;
          for (let r = 0; r < this.members.length; r++) {
            let i = this.members[r].localsInner(e);
            if (i.length)
              if (t) {
                n && ((t = t.slice()), (n = !1));
                for (let e = 0; e < i.length; e++) t.push(i[e]);
              } else t = i;
          }
          return t ? Gt(n ? t : t.sort(Ut)) : _t;
        }
        static from(e) {
          switch (e.length) {
            case 0:
              return jt;
            case 1:
              return e[0];
            default:
              return new Lt(
                e.every((e) => e instanceof qt)
                  ? e
                  : e.reduce(
                      (e, t) => e.concat(t instanceof qt ? t : t.members),
                      [],
                    ),
              );
          }
        }
      }
      function Ht(e, t) {
        if (!t || !e.length) return e;
        let n = [];
        for (let r = 0; r < e.length; r++) {
          let i = e[r];
          n.push(new Vt(i.from + t, i.to + t, i.type));
        }
        return n;
      }
      function Jt(e, t, n) {
        if (t.isLeaf) return null;
        let r = n + t.nodeSize,
          i = null;
        for (let t, o = 0; o < e.length; o++)
          (t = e[o]) &&
            t.from > n &&
            t.to < r &&
            ((i || (i = [])).push(t), (e[o] = null));
        return i;
      }
      function Yt(e) {
        let t = [];
        for (let n = 0; n < e.length; n++) null != e[n] && t.push(e[n]);
        return t;
      }
      function Kt(e, t, n, r) {
        let i = [],
          o = !1;
        t.forEach((t, s) => {
          let l = Jt(e, t, s + n);
          if (l) {
            o = !0;
            let e = Kt(l, t, n + s + 1, r);
            e != jt && i.push(s, s + t.nodeSize, e);
          }
        });
        let s = Ht(o ? Yt(e) : e, -n).sort(Ut);
        for (let e = 0; e < s.length; e++)
          s[e].type.valid(t, s[e]) ||
            (r.onRemove && r.onRemove(s[e].spec), s.splice(e--, 1));
        return s.length || i.length ? new qt(s, i) : jt;
      }
      function Ut(e, t) {
        return e.from - t.from || e.to - t.to;
      }
      function Gt(e) {
        let t = e;
        for (let n = 0; n < t.length - 1; n++) {
          let r = t[n];
          if (r.from != r.to)
            for (let i = n + 1; i < t.length; i++) {
              let o = t[i];
              if (o.from != r.from) {
                o.from < r.to &&
                  (t == e && (t = e.slice()),
                  (t[n] = r.copy(r.from, o.from)),
                  Xt(t, i, r.copy(o.from, r.to)));
                break;
              }
              o.to != r.to &&
                (t == e && (t = e.slice()),
                (t[i] = o.copy(o.from, r.to)),
                Xt(t, i + 1, o.copy(r.to, o.to)));
            }
        }
        return t;
      }
      function Xt(e, t, n) {
        for (; t < e.length && Ut(n, e[t]) > 0; ) t++;
        e.splice(t, 0, n);
      }
      function Zt(e) {
        let t = [];
        return (
          e.someProp("decorations", (n) => {
            let r = n(e.state);
            r && r != jt && t.push(r);
          }),
          e.cursorWrapper &&
            t.push(qt.create(e.state.doc, [e.cursorWrapper.deco])),
          Lt.from(t)
        );
      }
      const Qt = {
          childList: !0,
          characterData: !0,
          characterDataOldValue: !0,
          attributes: !0,
          attributeOldValue: !0,
          subtree: !0,
        },
        en = x && M <= 11;
      class tn {
        constructor() {
          (this.anchorNode = null),
            (this.anchorOffset = 0),
            (this.focusNode = null),
            (this.focusOffset = 0);
        }
        set(e) {
          (this.anchorNode = e.anchorNode),
            (this.anchorOffset = e.anchorOffset),
            (this.focusNode = e.focusNode),
            (this.focusOffset = e.focusOffset);
        }
        clear() {
          this.anchorNode = this.focusNode = null;
        }
        eq(e) {
          return (
            e.anchorNode == this.anchorNode &&
            e.anchorOffset == this.anchorOffset &&
            e.focusNode == this.focusNode &&
            e.focusOffset == this.focusOffset
          );
        }
      }
      class nn {
        constructor(e, t) {
          (this.view = e),
            (this.handleDOMChange = t),
            (this.queue = []),
            (this.flushingSoon = -1),
            (this.observer = null),
            (this.currentSelection = new tn()),
            (this.onCharData = null),
            (this.suppressingSelectionUpdates = !1),
            (this.observer =
              window.MutationObserver &&
              new window.MutationObserver((e) => {
                for (let t = 0; t < e.length; t++) this.queue.push(e[t]);
                x &&
                M <= 11 &&
                e.some(
                  (e) =>
                    ("childList" == e.type && e.removedNodes.length) ||
                    ("characterData" == e.type &&
                      e.oldValue.length > e.target.nodeValue.length),
                )
                  ? this.flushSoon()
                  : this.flush();
              })),
            en &&
              (this.onCharData = (e) => {
                this.queue.push({
                  target: e.target,
                  type: "characterData",
                  oldValue: e.prevValue,
                }),
                  this.flushSoon();
              }),
            (this.onSelectionChange = this.onSelectionChange.bind(this));
        }
        flushSoon() {
          this.flushingSoon < 0 &&
            (this.flushingSoon = window.setTimeout(() => {
              (this.flushingSoon = -1), this.flush();
            }, 20));
        }
        forceFlush() {
          this.flushingSoon > -1 &&
            (window.clearTimeout(this.flushingSoon),
            (this.flushingSoon = -1),
            this.flush());
        }
        start() {
          this.observer &&
            (this.observer.takeRecords(),
            this.observer.observe(this.view.dom, Qt)),
            this.onCharData &&
              this.view.dom.addEventListener(
                "DOMCharacterDataModified",
                this.onCharData,
              ),
            this.connectSelection();
        }
        stop() {
          if (this.observer) {
            let e = this.observer.takeRecords();
            if (e.length) {
              for (let t = 0; t < e.length; t++) this.queue.push(e[t]);
              window.setTimeout(() => this.flush(), 20);
            }
            this.observer.disconnect();
          }
          this.onCharData &&
            this.view.dom.removeEventListener(
              "DOMCharacterDataModified",
              this.onCharData,
            ),
            this.disconnectSelection();
        }
        connectSelection() {
          this.view.dom.ownerDocument.addEventListener(
            "selectionchange",
            this.onSelectionChange,
          );
        }
        disconnectSelection() {
          this.view.dom.ownerDocument.removeEventListener(
            "selectionchange",
            this.onSelectionChange,
          );
        }
        suppressSelectionUpdates() {
          (this.suppressingSelectionUpdates = !0),
            setTimeout(() => (this.suppressingSelectionUpdates = !1), 50);
        }
        onSelectionChange() {
          if (Fe(this.view)) {
            if (this.suppressingSelectionUpdates) return Te(this.view);
            if (x && M <= 11 && !this.view.state.selection.empty) {
              let e = this.view.domSelectionRange();
              if (
                e.focusNode &&
                c(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset)
              )
                return this.flushSoon();
            }
            this.flush();
          }
        }
        setCurSelection() {
          this.currentSelection.set(this.view.domSelectionRange());
        }
        ignoreSelectionChange(e) {
          if (!e.focusNode) return !0;
          let t,
            n = new Set();
          for (let t = e.focusNode; t; t = l(t)) n.add(t);
          for (let r = e.anchorNode; r; r = l(r))
            if (n.has(r)) {
              t = r;
              break;
            }
          let r = t && this.view.docView.nearestDesc(t);
          return r &&
            r.ignoreMutation({
              type: "selection",
              target: 3 == t.nodeType ? t.parentNode : t,
            })
            ? (this.setCurSelection(), !0)
            : void 0;
        }
        pendingRecords() {
          if (this.observer)
            for (let e of this.observer.takeRecords()) this.queue.push(e);
          return this.queue;
        }
        flush() {
          let { view: e } = this;
          if (!e.docView || this.flushingSoon > -1) return;
          let t = this.pendingRecords();
          t.length && (this.queue = []);
          let n = e.domSelectionRange(),
            i =
              !this.suppressingSelectionUpdates &&
              !this.currentSelection.eq(n) &&
              Fe(e) &&
              !this.ignoreSelectionChange(n),
            o = -1,
            s = -1,
            l = !1,
            a = [];
          if (e.editable)
            for (let e = 0; e < t.length; e++) {
              let n = this.registerMutation(t[e], a);
              n &&
                ((o = o < 0 ? n.from : Math.min(n.from, o)),
                (s = s < 0 ? n.to : Math.max(n.to, s)),
                n.typeOver && (l = !0));
            }
          if (C && a.length > 1) {
            let e = a.filter((e) => "BR" == e.nodeName);
            if (2 == e.length) {
              let t = e[0],
                n = e[1];
              t.parentNode && t.parentNode.parentNode == n.parentNode
                ? n.remove()
                : t.remove();
            }
          }
          let h = null;
          o < 0 &&
          i &&
          e.input.lastFocus > Date.now() - 200 &&
          Math.max(e.input.lastTouch, e.input.lastClick.time) <
            Date.now() - 300 &&
          m(n) &&
          (h = Oe(e)) &&
          h.eq(r.Y1.near(e.state.doc.resolve(0), 1))
            ? ((e.input.lastFocus = 0),
              Te(e),
              this.currentSelection.set(n),
              e.scrollToSelection())
            : (o > -1 || i) &&
              (o > -1 &&
                (e.docView.markDirty(o, s),
                (function (e) {
                  if (rn.has(e)) return;
                  if (
                    (rn.set(e, null),
                    -1 !==
                      ["normal", "nowrap", "pre-line"].indexOf(
                        getComputedStyle(e.dom).whiteSpace,
                      ))
                  ) {
                    if (((e.requiresGeckoHackNode = C), on)) return;
                    console.warn(
                      "ProseMirror expects the CSS white-space property to be set, preferably to 'pre-wrap'. It is recommended to load style/prosemirror.css from the prosemirror-view package.",
                    ),
                      (on = !0);
                  }
                })(e)),
              this.handleDOMChange(o, s, l, a),
              e.docView && e.docView.dirty
                ? e.updateState(e.state)
                : this.currentSelection.eq(n) || Te(e),
              this.currentSelection.set(n));
        }
        registerMutation(e, t) {
          if (t.indexOf(e.target) > -1) return null;
          let n = this.view.docView.nearestDesc(e.target);
          if (
            "attributes" == e.type &&
            (n == this.view.docView ||
              "contenteditable" == e.attributeName ||
              ("style" == e.attributeName &&
                !e.oldValue &&
                !e.target.getAttribute("style")))
          )
            return null;
          if (!n || n.ignoreMutation(e)) return null;
          if ("childList" == e.type) {
            for (let n = 0; n < e.addedNodes.length; n++)
              t.push(e.addedNodes[n]);
            if (
              n.contentDOM &&
              n.contentDOM != n.dom &&
              !n.contentDOM.contains(e.target)
            )
              return { from: n.posBefore, to: n.posAfter };
            let r = e.previousSibling,
              i = e.nextSibling;
            if (x && M <= 11 && e.addedNodes.length)
              for (let t = 0; t < e.addedNodes.length; t++) {
                let { previousSibling: n, nextSibling: o } = e.addedNodes[t];
                (!n || Array.prototype.indexOf.call(e.addedNodes, n) < 0) &&
                  (r = n),
                  (!o || Array.prototype.indexOf.call(e.addedNodes, o) < 0) &&
                    (i = o);
              }
            let o = r && r.parentNode == e.target ? s(r) + 1 : 0,
              l = n.localPosFromDOM(e.target, o, -1),
              a =
                i && i.parentNode == e.target
                  ? s(i)
                  : e.target.childNodes.length;
            return { from: l, to: n.localPosFromDOM(e.target, a, 1) };
          }
          return "attributes" == e.type
            ? { from: n.posAtStart - n.border, to: n.posAtEnd + n.border }
            : {
                from: n.posAtStart,
                to: n.posAtEnd,
                typeOver: e.target.nodeValue == e.oldValue,
              };
        }
      }
      let rn = new WeakMap(),
        on = !1;
      function sn(e) {
        let t = e.pmViewDesc;
        if (t) return t.parseRule();
        if ("BR" == e.nodeName && e.parentNode) {
          if (D && /^(ul|ol)$/i.test(e.parentNode.nodeName)) {
            let e = document.createElement("div");
            return e.appendChild(document.createElement("li")), { skip: e };
          }
          if (
            e.parentNode.lastChild == e ||
            (D && /^(tr|table)$/i.test(e.parentNode.nodeName))
          )
            return { ignore: !0 };
        } else if ("IMG" == e.nodeName && e.getAttribute("mark-placeholder"))
          return { ignore: !0 };
        return null;
      }
      const ln =
        /^(a|abbr|acronym|b|bd[io]|big|br|button|cite|code|data(list)?|del|dfn|em|i|ins|kbd|label|map|mark|meter|output|q|ruby|s|samp|small|span|strong|su[bp]|time|u|tt|var)$/i;
      function an(e, t, n, o, s) {
        let l =
          e.input.compositionPendingChanges ||
          (e.composing ? e.input.compositionID : 0);
        if (((e.input.compositionPendingChanges = 0), t < 0)) {
          let t =
              e.input.lastSelectionTime > Date.now() - 50
                ? e.input.lastSelectionOrigin
                : null,
            n = Oe(e, t);
          if (n && !e.state.selection.eq(n)) {
            if (
              N &&
              R &&
              13 === e.input.lastKeyCode &&
              Date.now() - 100 < e.input.lastKeyCodeTime &&
              e.someProp("handleKeyDown", (t) => t(e, g(13, "Enter")))
            )
              return;
            let r = e.state.tr.setSelection(n);
            "pointer" == t
              ? r.setMeta("pointer", !0)
              : "key" == t && r.scrollIntoView(),
              l && r.setMeta("composition", l),
              e.dispatch(r);
          }
          return;
        }
        let a = e.state.doc.resolve(t),
          h = a.sharedDepth(n);
        (t = a.before(h + 1)), (n = e.state.doc.resolve(n).after(h + 1));
        let c,
          d,
          p = e.state.selection,
          u = (function (e, t, n) {
            let r,
              {
                node: o,
                fromOffset: s,
                toOffset: l,
                from: a,
                to: h,
              } = e.docView.parseRange(t, n),
              c = e.domSelectionRange(),
              d = c.anchorNode;
            if (
              (d &&
                e.dom.contains(1 == d.nodeType ? d : d.parentNode) &&
                ((r = [{ node: d, offset: c.anchorOffset }]),
                m(c) || r.push({ node: c.focusNode, offset: c.focusOffset })),
              N && 8 === e.input.lastKeyCode)
            )
              for (let e = l; e > s; e--) {
                let t = o.childNodes[e - 1],
                  n = t.pmViewDesc;
                if ("BR" == t.nodeName && !n) {
                  l = e;
                  break;
                }
                if (!n || n.size) break;
              }
            let p = e.state.doc,
              u = e.someProp("domParser") || i.aw.fromSchema(e.state.schema),
              f = p.resolve(a),
              g = null,
              y = u.parse(o, {
                topNode: f.parent,
                topMatch: f.parent.contentMatchAt(f.index()),
                topOpen: !0,
                from: s,
                to: l,
                preserveWhitespace: "pre" != f.parent.type.whitespace || "full",
                findPositions: r,
                ruleFromNode: sn,
                context: f,
              });
            if (r && null != r[0].pos) {
              let e = r[0].pos,
                t = r[1] && r[1].pos;
              null == t && (t = e), (g = { anchor: e + a, head: t + a });
            }
            return { doc: y, sel: g, from: a, to: h };
          })(e, t, n),
          f = e.state.doc,
          y = f.slice(u.from, u.to);
        8 === e.input.lastKeyCode && Date.now() - 100 < e.input.lastKeyCodeTime
          ? ((c = e.state.selection.to), (d = "end"))
          : ((c = e.state.selection.from), (d = "start")),
          (e.input.lastKeyCode = null);
        let w = (function (e, t, n, r, i) {
          let o = e.findDiffStart(t, n);
          if (null == o) return null;
          let { a: s, b: l } = e.findDiffEnd(t, n + e.size, n + t.size);
          if ("end" == i) {
            r -= s + Math.max(0, o - Math.min(s, l)) - o;
          }
          if (s < o && e.size < t.size) {
            let e = r <= o && r >= s ? o - r : 0;
            (o -= e),
              o &&
                o < t.size &&
                dn(t.textBetween(o - 1, o + 1)) &&
                (o += e ? 1 : -1),
              (l = o + (l - s)),
              (s = o);
          } else if (l < o) {
            let t = r <= o && r >= l ? o - r : 0;
            (o -= t),
              o &&
                o < e.size &&
                dn(e.textBetween(o - 1, o + 1)) &&
                (o += t ? 1 : -1),
              (s = o + (s - l)),
              (l = o);
          }
          return { start: o, endA: s, endB: l };
        })(y.content, u.doc.content, u.from, c, d);
        if (
          ((E && e.input.lastIOSEnter > Date.now() - 225) || R) &&
          s.some((e) => 1 == e.nodeType && !ln.test(e.nodeName)) &&
          (!w || w.endA >= w.endB) &&
          e.someProp("handleKeyDown", (t) => t(e, g(13, "Enter")))
        )
          return void (e.input.lastIOSEnter = 0);
        if (!w) {
          if (
            !(
              o &&
              p instanceof r.Bs &&
              !p.empty &&
              p.$head.sameParent(p.$anchor)
            ) ||
            e.composing ||
            (u.sel && u.sel.anchor != u.sel.head)
          ) {
            if (u.sel) {
              let t = hn(e, e.state.doc, u.sel);
              if (t && !t.eq(e.state.selection)) {
                let n = e.state.tr.setSelection(t);
                l && n.setMeta("composition", l), e.dispatch(n);
              }
            }
            return;
          }
          w = { start: p.from, endA: p.to, endB: p.to };
        }
        if (
          N &&
          e.cursorWrapper &&
          u.sel &&
          u.sel.anchor == e.cursorWrapper.deco.from &&
          u.sel.head == u.sel.anchor
        ) {
          let e = w.endB - w.start;
          u.sel = { anchor: u.sel.anchor + e, head: u.sel.anchor + e };
        }
        e.input.domChangeCount++,
          e.state.selection.from < e.state.selection.to &&
            w.start == w.endB &&
            e.state.selection instanceof r.Bs &&
            (w.start > e.state.selection.from &&
            w.start <= e.state.selection.from + 2 &&
            e.state.selection.from >= u.from
              ? (w.start = e.state.selection.from)
              : w.endA < e.state.selection.to &&
                w.endA >= e.state.selection.to - 2 &&
                e.state.selection.to <= u.to &&
                ((w.endB += e.state.selection.to - w.endA),
                (w.endA = e.state.selection.to))),
          x &&
            M <= 11 &&
            w.endB == w.start + 1 &&
            w.endA == w.start &&
            w.start > u.from &&
            "  " ==
              u.doc.textBetween(w.start - u.from - 1, w.start - u.from + 1) &&
            (w.start--, w.endA--, w.endB--);
        let v,
          b = u.doc.resolveNoCache(w.start - u.from),
          S = u.doc.resolveNoCache(w.endB - u.from),
          k = f.resolve(w.start),
          C = b.sameParent(S) && b.parent.inlineContent && k.end() >= w.endA;
        if (
          ((E &&
            e.input.lastIOSEnter > Date.now() - 225 &&
            (!C || s.some((e) => "DIV" == e.nodeName || "P" == e.nodeName))) ||
            (!C &&
              b.pos < u.doc.content.size &&
              !b.sameParent(S) &&
              (v = r.Y1.findFrom(u.doc.resolve(b.pos + 1), 1, !0)) &&
              v.head == S.pos)) &&
          e.someProp("handleKeyDown", (t) => t(e, g(13, "Enter")))
        )
          return void (e.input.lastIOSEnter = 0);
        if (
          e.state.selection.anchor > w.start &&
          (function (e, t, n, r, i) {
            if (
              !r.parent.isTextblock ||
              n - t <= i.pos - r.pos ||
              cn(r, !0, !1) < i.pos
            )
              return !1;
            let o = e.resolve(t);
            if (o.parentOffset < o.parent.content.size || !o.parent.isTextblock)
              return !1;
            let s = e.resolve(cn(o, !0, !0));
            return (
              !(!s.parent.isTextblock || s.pos > n || cn(s, !0, !1) < n) &&
              r.parent.content.cut(r.parentOffset).eq(s.parent.content)
            );
          })(f, w.start, w.endA, b, S) &&
          e.someProp("handleKeyDown", (t) => t(e, g(8, "Backspace")))
        )
          return void (R && N && e.domObserver.suppressSelectionUpdates());
        N && R && w.endB == w.start && (e.input.lastAndroidDelete = Date.now()),
          R &&
            !C &&
            b.start() != S.start() &&
            0 == S.parentOffset &&
            b.depth == S.depth &&
            u.sel &&
            u.sel.anchor == u.sel.head &&
            u.sel.head == w.endA &&
            ((w.endB -= 2),
            (S = u.doc.resolveNoCache(w.endB - u.from)),
            setTimeout(() => {
              e.someProp("handleKeyDown", function (t) {
                return t(e, g(13, "Enter"));
              });
            }, 20));
        let O,
          T,
          D,
          B = w.start,
          A = w.endA;
        if (C)
          if (b.pos == S.pos)
            x &&
              M <= 11 &&
              0 == b.parentOffset &&
              (e.domObserver.suppressSelectionUpdates(),
              setTimeout(() => Te(e), 20)),
              (O = e.state.tr.delete(B, A)),
              (T = f.resolve(w.start).marksAcross(f.resolve(w.endA)));
          else if (
            w.endA == w.endB &&
            (D = (function (e, t) {
              let n,
                r,
                o,
                s = e.firstChild.marks,
                l = t.firstChild.marks,
                a = s,
                h = l;
              for (let e = 0; e < l.length; e++) a = l[e].removeFromSet(a);
              for (let e = 0; e < s.length; e++) h = s[e].removeFromSet(h);
              if (1 == a.length && 0 == h.length)
                (r = a[0]),
                  (n = "add"),
                  (o = (e) => e.mark(r.addToSet(e.marks)));
              else {
                if (0 != a.length || 1 != h.length) return null;
                (r = h[0]),
                  (n = "remove"),
                  (o = (e) => e.mark(r.removeFromSet(e.marks)));
              }
              let c = [];
              for (let e = 0; e < t.childCount; e++) c.push(o(t.child(e)));
              if (i.HY.from(c).eq(e)) return { mark: r, type: n };
            })(
              b.parent.content.cut(b.parentOffset, S.parentOffset),
              k.parent.content.cut(k.parentOffset, w.endA - k.start()),
            ))
          )
            (O = e.state.tr),
              "add" == D.type
                ? O.addMark(B, A, D.mark)
                : O.removeMark(B, A, D.mark);
          else if (
            b.parent.child(b.index()).isText &&
            b.index() == S.index() - (S.textOffset ? 0 : 1)
          ) {
            let t = b.parent.textBetween(b.parentOffset, S.parentOffset);
            if (e.someProp("handleTextInput", (n) => n(e, B, A, t))) return;
            O = e.state.tr.insertText(t, B, A);
          }
        if (
          (O ||
            (O = e.state.tr.replace(
              B,
              A,
              u.doc.slice(w.start - u.from, w.endB - u.from),
            )),
          u.sel)
        ) {
          let t = hn(e, O.doc, u.sel);
          t &&
            !(
              (N &&
                R &&
                e.composing &&
                t.empty &&
                (w.start != w.endB ||
                  e.input.lastAndroidDelete < Date.now() - 100) &&
                (t.head == B || t.head == O.mapping.map(A) - 1)) ||
              (x && t.empty && t.head == B)
            ) &&
            O.setSelection(t);
        }
        T && O.ensureMarks(T),
          l && O.setMeta("composition", l),
          e.dispatch(O.scrollIntoView());
      }
      function hn(e, t, n) {
        return Math.max(n.anchor, n.head) > t.content.size
          ? null
          : Ie(e, t.resolve(n.anchor), t.resolve(n.head));
      }
      function cn(e, t, n) {
        let r = e.depth,
          i = t ? e.end() : e.pos;
        for (; r > 0 && (t || e.indexAfter(r) == e.node(r).childCount); )
          r--, i++, (t = !1);
        if (n) {
          let t = e.node(r).maybeChild(e.indexAfter(r));
          for (; t && !t.isLeaf; ) (t = t.firstChild), i++;
        }
        return i;
      }
      function dn(e) {
        if (2 != e.length) return !1;
        let t = e.charCodeAt(0),
          n = e.charCodeAt(1);
        return t >= 56320 && t <= 57343 && n >= 55296 && n <= 56319;
      }
      class pn {
        constructor(e, t) {
          (this._root = null),
            (this.focused = !1),
            (this.trackWrites = null),
            (this.mounted = !1),
            (this.markCursor = null),
            (this.cursorWrapper = null),
            (this.lastSelectedViewDesc = void 0),
            (this.input = new dt()),
            (this.prevDirectPlugins = []),
            (this.pluginViews = []),
            (this.requiresGeckoHackNode = !1),
            (this.dragging = null),
            (this._props = t),
            (this.state = t.state),
            (this.directPlugins = t.plugins || []),
            this.directPlugins.forEach(yn),
            (this.dispatch = this.dispatch.bind(this)),
            (this.dom = (e && e.mount) || document.createElement("div")),
            e &&
              (e.appendChild
                ? e.appendChild(this.dom)
                : "function" == typeof e
                  ? e(this.dom)
                  : e.mount && (this.mounted = !0)),
            (this.editable = mn(this)),
            fn(this),
            (this.nodeViews = gn(this)),
            (this.docView = ce(
              this.state.doc,
              un(this),
              Zt(this),
              this.dom,
              this,
            )),
            (this.domObserver = new nn(this, (e, t, n, r) =>
              an(this, e, t, n, r),
            )),
            this.domObserver.start(),
            (function (e) {
              for (let t in at) {
                let n = at[t];
                e.dom.addEventListener(
                  t,
                  (e.input.eventHandlers[t] = (t) => {
                    !mt(e, t) ||
                      ft(e, t) ||
                      (!e.editable && t.type in ht) ||
                      n(e, t);
                  }),
                  ct[t] ? { passive: !0 } : void 0,
                );
              }
              D && e.dom.addEventListener("input", () => null), ut(e);
            })(this),
            this.updatePluginViews();
        }
        get composing() {
          return this.input.composing;
        }
        get props() {
          if (this._props.state != this.state) {
            let e = this._props;
            this._props = {};
            for (let t in e) this._props[t] = e[t];
            this._props.state = this.state;
          }
          return this._props;
        }
        update(e) {
          e.handleDOMEvents != this._props.handleDOMEvents && ut(this);
          let t = this._props;
          (this._props = e),
            e.plugins &&
              (e.plugins.forEach(yn), (this.directPlugins = e.plugins)),
            this.updateStateInner(e.state, t);
        }
        setProps(e) {
          let t = {};
          for (let e in this._props) t[e] = this._props[e];
          t.state = this.state;
          for (let n in e) t[n] = e[n];
          this.update(t);
        }
        updateState(e) {
          this.updateStateInner(e, this._props);
        }
        updateStateInner(e, t) {
          var n;
          let r = this.state,
            i = !1,
            o = !1;
          e.storedMarks && this.composing && (Tt(this), (o = !0)),
            (this.state = e);
          let s = r.plugins != e.plugins || this._props.plugins != t.plugins;
          if (
            s ||
            this._props.plugins != t.plugins ||
            this._props.nodeViews != t.nodeViews
          ) {
            let e = gn(this);
            (function (e, t) {
              let n = 0,
                r = 0;
              for (let r in e) {
                if (e[r] != t[r]) return !0;
                n++;
              }
              for (let e in t) r++;
              return n != r;
            })(e, this.nodeViews) && ((this.nodeViews = e), (i = !0));
          }
          (s || t.handleDOMEvents != this._props.handleDOMEvents) && ut(this),
            (this.editable = mn(this)),
            fn(this);
          let l = Zt(this),
            a = un(this),
            h =
              r.plugins == e.plugins || r.doc.eq(e.doc)
                ? e.scrollToSelection > r.scrollToSelection
                  ? "to selection"
                  : "preserve"
                : "reset",
            d = i || !this.docView.matchesNode(e.doc, a, l);
          (!d && e.selection.eq(r.selection)) || (o = !0);
          let p =
            "preserve" == h &&
            o &&
            null == this.dom.style.overflowAnchor &&
            (function (e) {
              let t,
                n,
                r = e.dom.getBoundingClientRect(),
                i = Math.max(0, r.top);
              for (
                let o = (r.left + r.right) / 2, s = i + 1;
                s < Math.min(innerHeight, r.bottom);
                s += 5
              ) {
                let r = e.root.elementFromPoint(o, s);
                if (!r || r == e.dom || !e.dom.contains(r)) continue;
                let l = r.getBoundingClientRect();
                if (l.top >= i - 20) {
                  (t = r), (n = l.top);
                  break;
                }
              }
              return { refDOM: t, refTop: n, stack: _(e.dom) };
            })(this);
          if (o) {
            this.domObserver.stop();
            let t =
              d &&
              (x || N) &&
              !this.composing &&
              !r.selection.empty &&
              !e.selection.empty &&
              (function (e, t) {
                let n = Math.min(
                  e.$anchor.sharedDepth(e.head),
                  t.$anchor.sharedDepth(t.head),
                );
                return e.$anchor.start(n) != t.$anchor.start(n);
              })(r.selection, e.selection);
            if (d) {
              let n = N
                ? (this.trackWrites = this.domSelectionRange().focusNode)
                : null;
              (!i && this.docView.update(e.doc, a, l, this)) ||
                (this.docView.updateOuterDeco([]),
                this.docView.destroy(),
                (this.docView = ce(e.doc, a, l, this.dom, this))),
                n && !this.trackWrites && (t = !0);
            }
            t ||
            !(
              this.input.mouseDown &&
              this.domObserver.currentSelection.eq(this.domSelectionRange()) &&
              (function (e) {
                let t = e.docView.domFromPos(e.state.selection.anchor, 0),
                  n = e.domSelectionRange();
                return c(t.node, t.offset, n.anchorNode, n.anchorOffset);
              })(this)
            )
              ? Te(this, t)
              : (Re(this, e.selection), this.domObserver.setCurSelection()),
              this.domObserver.start();
          }
          this.updatePluginViews(r),
            (null === (n = this.dragging) || void 0 === n ? void 0 : n.node) &&
              !r.doc.eq(e.doc) &&
              this.updateDraggedNode(this.dragging, r),
            "reset" == h
              ? (this.dom.scrollTop = 0)
              : "to selection" == h
                ? this.scrollToSelection()
                : p &&
                  (function ({ refDOM: e, refTop: t, stack: n }) {
                    let r = e ? e.getBoundingClientRect().top : 0;
                    W(n, 0 == r ? 0 : r - t);
                  })(p);
        }
        scrollToSelection() {
          let e = this.domSelectionRange().focusNode;
          if (this.someProp("handleScrollToSelection", (e) => e(this)));
          else if (this.state.selection instanceof r.qv) {
            let t = this.docView.domAfterPos(this.state.selection.from);
            1 == t.nodeType && V(this, t.getBoundingClientRect(), e);
          } else V(this, this.coordsAtPos(this.state.selection.head, 1), e);
        }
        destroyPluginViews() {
          let e;
          for (; (e = this.pluginViews.pop()); ) e.destroy && e.destroy();
        }
        updatePluginViews(e) {
          if (
            e &&
            e.plugins == this.state.plugins &&
            this.directPlugins == this.prevDirectPlugins
          )
            for (let t = 0; t < this.pluginViews.length; t++) {
              let n = this.pluginViews[t];
              n.update && n.update(this, e);
            }
          else {
            (this.prevDirectPlugins = this.directPlugins),
              this.destroyPluginViews();
            for (let e = 0; e < this.directPlugins.length; e++) {
              let t = this.directPlugins[e];
              t.spec.view && this.pluginViews.push(t.spec.view(this));
            }
            for (let e = 0; e < this.state.plugins.length; e++) {
              let t = this.state.plugins[e];
              t.spec.view && this.pluginViews.push(t.spec.view(this));
            }
          }
        }
        updateDraggedNode(e, t) {
          let n = e.node,
            i = -1;
          if (this.state.doc.nodeAt(n.from) == n.node) i = n.from;
          else {
            let e = n.from + (this.state.doc.content.size - t.doc.content.size);
            (e > 0 && this.state.doc.nodeAt(e)) == n.node && (i = e);
          }
          this.dragging = new Rt(
            e.slice,
            e.move,
            i < 0 ? void 0 : r.qv.create(this.state.doc, i),
          );
        }
        someProp(e, t) {
          let n,
            r = this._props && this._props[e];
          if (null != r && (n = t ? t(r) : r)) return n;
          for (let r = 0; r < this.directPlugins.length; r++) {
            let i = this.directPlugins[r].props[e];
            if (null != i && (n = t ? t(i) : i)) return n;
          }
          let i = this.state.plugins;
          if (i)
            for (let r = 0; r < i.length; r++) {
              let o = i[r].props[e];
              if (null != o && (n = t ? t(o) : o)) return n;
            }
        }
        hasFocus() {
          if (x) {
            let e = this.root.activeElement;
            if (e == this.dom) return !0;
            if (!e || !this.dom.contains(e)) return !1;
            for (; e && this.dom != e && this.dom.contains(e); ) {
              if ("false" == e.contentEditable) return !1;
              e = e.parentElement;
            }
            return !0;
          }
          return this.root.activeElement == this.dom;
        }
        focus() {
          this.domObserver.stop(),
            this.editable &&
              (function (e) {
                if (e.setActive) return e.setActive();
                if (q) return e.focus(q);
                let t = _(e);
                e.focus(
                  null == q
                    ? {
                        get preventScroll() {
                          return (q = { preventScroll: !0 }), !0;
                        },
                      }
                    : void 0,
                ),
                  q || ((q = !1), W(t, 0));
              })(this.dom),
            Te(this),
            this.domObserver.start();
        }
        get root() {
          let e = this._root;
          if (null == e)
            for (let e = this.dom.parentNode; e; e = e.parentNode)
              if (9 == e.nodeType || (11 == e.nodeType && e.host))
                return (
                  e.getSelection ||
                    (Object.getPrototypeOf(e).getSelection = () =>
                      e.ownerDocument.getSelection()),
                  (this._root = e)
                );
          return e || document;
        }
        updateRoot() {
          this._root = null;
        }
        posAtCoords(e) {
          return J(this, e);
        }
        coordsAtPos(e, t = 1) {
          return G(this, e, t);
        }
        domAtPos(e, t = 0) {
          return this.docView.domFromPos(e, t);
        }
        nodeDOM(e) {
          let t = this.docView.descAt(e);
          return t ? t.nodeDOM : null;
        }
        posAtDOM(e, t, n = -1) {
          let r = this.docView.posFromDOM(e, t, n);
          if (null == r)
            throw new RangeError("DOM position not inside the editor");
          return r;
        }
        endOfTextblock(e, t) {
          return ie(this, t || this.state, e);
        }
        pasteHTML(e, t) {
          return Bt(this, "", e, !1, t || new ClipboardEvent("paste"));
        }
        pasteText(e, t) {
          return Bt(this, e, null, !0, t || new ClipboardEvent("paste"));
        }
        destroy() {
          this.docView &&
            (!(function (e) {
              e.domObserver.stop();
              for (let t in e.input.eventHandlers)
                e.dom.removeEventListener(t, e.input.eventHandlers[t]);
              clearTimeout(e.input.composingTimeout),
                clearTimeout(e.input.lastIOSEnterFallbackTimeout);
            })(this),
            this.destroyPluginViews(),
            this.mounted
              ? (this.docView.update(this.state.doc, [], Zt(this), this),
                (this.dom.textContent = ""))
              : this.dom.parentNode &&
                this.dom.parentNode.removeChild(this.dom),
            this.docView.destroy(),
            (this.docView = null));
        }
        get isDestroyed() {
          return null == this.docView;
        }
        dispatchEvent(e) {
          return (function (e, t) {
            ft(e, t) ||
              !at[t.type] ||
              (!e.editable && t.type in ht) ||
              at[t.type](e, t);
          })(this, e);
        }
        dispatch(e) {
          let t = this._props.dispatchTransaction;
          t ? t.call(this, e) : this.updateState(this.state.apply(e));
        }
        domSelectionRange() {
          return D &&
            11 === this.root.nodeType &&
            (function (e) {
              let t = e.activeElement;
              for (; t && t.shadowRoot; ) t = t.shadowRoot.activeElement;
              return t;
            })(this.dom.ownerDocument) == this.dom
            ? (function (e) {
                let t;
                function n(e) {
                  e.preventDefault(),
                    e.stopImmediatePropagation(),
                    (t = e.getTargetRanges()[0]);
                }
                e.dom.addEventListener("beforeinput", n, !0),
                  document.execCommand("indent"),
                  e.dom.removeEventListener("beforeinput", n, !0);
                let r = t.startContainer,
                  i = t.startOffset,
                  o = t.endContainer,
                  s = t.endOffset,
                  l = e.domAtPos(e.state.selection.anchor);
                return (
                  c(l.node, l.offset, o, s) && ([r, i, o, s] = [o, s, r, i]),
                  {
                    anchorNode: r,
                    anchorOffset: i,
                    focusNode: o,
                    focusOffset: s,
                  }
                );
              })(this)
            : this.domSelection();
        }
        domSelection() {
          return this.root.getSelection();
        }
      }
      function un(e) {
        let t = Object.create(null);
        return (
          (t.class = "ProseMirror"),
          (t.contenteditable = String(e.editable)),
          e.someProp("attributes", (n) => {
            if (("function" == typeof n && (n = n(e.state)), n))
              for (let e in n)
                "class" == e
                  ? (t.class += " " + n[e])
                  : "style" == e
                    ? (t.style = (t.style ? t.style + ";" : "") + n[e])
                    : t[e] ||
                      "contenteditable" == e ||
                      "nodeName" == e ||
                      (t[e] = String(n[e]));
          }),
          t.translate || (t.translate = "no"),
          [Vt.node(0, e.state.doc.content.size, t)]
        );
      }
      function fn(e) {
        if (e.markCursor) {
          let t = document.createElement("img");
          (t.className = "ProseMirror-separator"),
            t.setAttribute("mark-placeholder", "true"),
            t.setAttribute("alt", ""),
            (e.cursorWrapper = {
              dom: t,
              deco: Vt.widget(e.state.selection.head, t, {
                raw: !0,
                marks: e.markCursor,
              }),
            });
        } else e.cursorWrapper = null;
      }
      function mn(e) {
        return !e.someProp("editable", (t) => !1 === t(e.state));
      }
      function gn(e) {
        let t = Object.create(null);
        function n(e) {
          for (let n in e)
            Object.prototype.hasOwnProperty.call(t, n) || (t[n] = e[n]);
        }
        return e.someProp("nodeViews", n), e.someProp("markViews", n), t;
      }
      function yn(e) {
        if (
          e.spec.state ||
          e.spec.filterTransaction ||
          e.spec.appendTransaction
        )
          throw new RangeError(
            "Plugins passed directly to the view must not have a state component",
          );
      }
    },
  },
]);

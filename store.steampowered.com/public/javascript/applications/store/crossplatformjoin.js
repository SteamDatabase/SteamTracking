/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [5068],
  {
    9054: (e) => {
      e.exports = {
        JoinApp: "_27LPt-4kZ0Y0j9DNG19rsN",
        SessionInfoCtr: "z4yEIu1D7pKZ9BNib5lIq",
        SectionCtr: "_3pJz3d4_3A43Jh7D44SUlm",
        JoinSessionButton: "oFMSJB00CTFnfT-758yts",
        SessionList: "_25Du_Z4_ooVhqUEkiYSqxt",
        Session: "zNbRzxK68u4bzfA0OyV0I",
        MachineName: "EOLg7Cdie5CHJUEGL6-CB",
        OsName: "S5bNzjo6KMcWWn6Ms9QuY",
        AvailableSessionsText: "_1NtbtSr3XzLpXPC3ugtzr9",
        Header: "_239fSrbkMDKdFJQsaOV8MW",
        Explanation: "_1isyHy9nKabM8wUFKUu-lm",
      };
    },
    58632: (e) => {
      "use strict";
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
                var l = r.get(i);
                if (l) {
                  var o = t.cacheHits || (t.cacheHits = []);
                  return new Promise(function (e) {
                    o.push(function () {
                      e(l);
                    });
                  });
                }
              }
              t.keys.push(e);
              var c = new Promise(function (e, r) {
                t.callbacks.push({ resolve: e, reject: r });
              });
              return r && r.set(i, c), c;
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
    82477: (e, t, r) => {
      "use strict";
      r.d(t, { Cg: () => d, pZ: () => b, vg: () => B });
      var i = r(90626),
        n = r(738),
        a = r(61859),
        s = r(78327),
        l = r(97436),
        o = r(72034),
        c = r(28240),
        u = r(44325);
      function m(e) {
        return i.createElement(
          n.x_,
          { onEscKeypress: e.closeModal, bDisableBackgroundDismiss: !0 },
          i.createElement(p, {
            redirectURL: e.redirectURL,
            guestOption: e.guestOption,
          }),
        );
      }
      function d(e) {
        const { redirectURL: t = window.location.href } = e;
        return i.createElement(
          u.EN,
          { active: !0 },
          i.createElement(m, { redirectURL: t }),
        );
      }
      function B() {
        (0, n.pg)(
          i.createElement(m, {
            ownerWin: window,
            redirectURL: window.location.href,
          }),
          window,
          { strTitle: (0, a.we)("#Login_SignInTitle") },
        );
      }
      function b(e, t) {
        (0, n.pg)(
          i.createElement(m, {
            ownerWin: window,
            redirectURL: e,
            guestOption: t,
          }),
          window,
          { strTitle: (0, a.we)("#Login_SignInTitle") },
        );
      }
      function p(e) {
        const { redirectURL: t, guestOption: r } = e,
          [n] = (0, i.useState)(
            new o.D(s.TS.WEBAPI_BASE_URL).GetAnonymousServiceTransport(),
          ),
          [a, u] = (0, i.useState)(!1);
        return i.createElement(
          "div",
          null,
          a
            ? i.createElement(l.Fn, null)
            : i.createElement(
                l.YN,
                {
                  autoFocus: !0,
                  transport: n,
                  platform: 2,
                  onComplete: (e) => {
                    e == c.wI.k_PrimaryDomainFail
                      ? u(!0)
                      : window.location.assign(t);
                  },
                  redirectUrl: t,
                  theme: "modal",
                },
                r && i.createElement(l.Mk, { redirectURL: t }),
              ),
        );
      }
    },
    49893: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { default: () => ye });
      var i = r(90626),
        n = r(9054),
        a = r.n(n),
        s = r(92757),
        l = r(23809),
        o = r(41762),
        c = r(58632),
        u = r.n(c),
        m = r(20194),
        d = r(56545),
        B = r(37403),
        b = r(30470),
        p = r(22837);
      let g;
      const y = 864e5;
      function f(e) {
        return `appinfo_${e}_${b.TS.LANGUAGE}`;
      }
      function w(e) {
        return Boolean(e && Date.now() - e.timeCached < y);
      }
      function _(e) {
        const t = (0, l.KV)(),
          r = (0, l.rX)();
        return (0, m.I)({
          queryKey: ["appinfo", e],
          queryFn: async () =>
            (function (e, t) {
              return (
                g ||
                  (g = new (u())(
                    async (r) => {
                      const i = new Map();
                      (await Promise.all(r.map((e) => t.GetObject(f(e)))))
                        .filter(w)
                        .forEach(({ value: e }) => i.set(e.appid, e));
                      const n = r.slice().filter((e) => !i.has(e));
                      if (n.length) {
                        const r = d.w.Init(B._z);
                        r.Body().set_language((0, p.sf)(b.TS.LANGUAGE)),
                          r.Body().set_appids(n);
                        const a = await B.BE.GetApps(e, r);
                        if (1 != a.GetEResult()) throw a.GetErrorMessage();
                        a.Body()
                          .toObject()
                          .apps.forEach((e) => {
                            t.StoreObject(f(e.appid), {
                              timeCached: Date.now(),
                              value: e,
                            }),
                              i.set(e.appid, e);
                          });
                      }
                      return r.map((e) => i.get(e));
                    },
                    { cache: !1 },
                  )),
                g
              );
            })(t, r).load(e),
          staleTime: y,
          enabled: !!e,
        }).data;
      }
      var M = r(92298),
        z = r(80613),
        h = r(89068);
      const S = z.Message;
      class R extends S {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            R.prototype.steamid || h.Sg(R.M()),
            S.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = {
                proto: R,
                fields: {
                  steamid: {
                    n: 1,
                    br: h.qM.readFixed64String,
                    bw: h.gp.writeFixed64String,
                  },
                  accept: { n: 2, br: h.qM.readBool, bw: h.gp.writeBool },
                },
              }),
            R.sm_m
          );
        }
        static MBF() {
          return R.sm_mbf || (R.sm_mbf = h.w0(R.M())), R.sm_mbf;
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(R.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(R.M(), e);
        }
        static deserializeBinary(e) {
          let t = new z.BinaryReader(e),
            r = new R();
          return R.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(R.MBF(), e, t);
        }
        serializeBinary() {
          var e = new z.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(R.M(), e, t);
        }
        serializeBase64String() {
          var e = new z.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClan_RespondToClanInvite_Request";
        }
      }
      class v extends S {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), S.initialize(this, e, 0, -1, void 0, null);
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
          let t = new z.BinaryReader(e),
            r = new v();
          return v.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new z.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new z.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClan_RespondToClanInvite_Response";
        }
      }
      class C extends S {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            C.prototype.steamid || h.Sg(C.M()),
            S.initialize(this, e, 0, -1, void 0, null);
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
                    br: h.qM.readFixed64String,
                    bw: h.gp.writeFixed64String,
                  },
                  rtime_oldest_date: {
                    n: 2,
                    br: h.qM.readUint32,
                    bw: h.gp.writeUint32,
                  },
                },
              }),
            C.sm_m
          );
        }
        static MBF() {
          return C.sm_mbf || (C.sm_mbf = h.w0(C.M())), C.sm_mbf;
        }
        toObject(e = !1) {
          return C.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(C.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(C.M(), e);
        }
        static deserializeBinary(e) {
          let t = new z.BinaryReader(e),
            r = new C();
          return C.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(C.MBF(), e, t);
        }
        serializeBinary() {
          var e = new z.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(C.M(), e, t);
        }
        serializeBase64String() {
          var e = new z.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClan_GetDraftAndRecentPartnerEventSnippet_Request";
        }
      }
      class j extends S {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            j.prototype.snippets || h.Sg(j.M()),
            S.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            j.sm_m ||
              (j.sm_m = {
                proto: j,
                fields: { snippets: { n: 1, c: W, r: !0, q: !0 } },
              }),
            j.sm_m
          );
        }
        static MBF() {
          return j.sm_mbf || (j.sm_mbf = h.w0(j.M())), j.sm_mbf;
        }
        toObject(e = !1) {
          return j.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(j.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(j.M(), e);
        }
        static deserializeBinary(e) {
          let t = new z.BinaryReader(e),
            r = new j();
          return j.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(j.MBF(), e, t);
        }
        serializeBinary() {
          var e = new z.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(j.M(), e, t);
        }
        serializeBase64String() {
          var e = new z.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClan_GetDraftAndRecentPartnerEventSnippet_Response";
        }
      }
      class W extends S {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            W.prototype.gid || h.Sg(W.M()),
            S.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            W.sm_m ||
              (W.sm_m = {
                proto: W,
                fields: {
                  gid: {
                    n: 1,
                    br: h.qM.readFixed64String,
                    bw: h.gp.writeFixed64String,
                  },
                  announcement_gid: {
                    n: 2,
                    br: h.qM.readFixed64String,
                    bw: h.gp.writeFixed64String,
                  },
                  hidden: { n: 3, br: h.qM.readBool, bw: h.gp.writeBool },
                  published: { n: 4, br: h.qM.readBool, bw: h.gp.writeBool },
                  rtime32_start_time: {
                    n: 5,
                    br: h.qM.readUint32,
                    bw: h.gp.writeUint32,
                  },
                  event_name: {
                    n: 6,
                    br: h.qM.readString,
                    bw: h.gp.writeString,
                  },
                  event_type: { n: 7, br: h.qM.readEnum, bw: h.gp.writeEnum },
                },
              }),
            W.sm_m
          );
        }
        static MBF() {
          return W.sm_mbf || (W.sm_mbf = h.w0(W.M())), W.sm_mbf;
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(W.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(W.M(), e);
        }
        static deserializeBinary(e) {
          let t = new z.BinaryReader(e),
            r = new W();
          return W.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(W.MBF(), e, t);
        }
        serializeBinary() {
          var e = new z.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(W.M(), e, t);
        }
        serializeBase64String() {
          var e = new z.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClan_GetDraftAndRecentPartnerEventSnippet_Response_CEventSnippetData";
        }
      }
      class q extends S {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            q.prototype.requests || h.Sg(q.M()),
            S.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            q.sm_m ||
              (q.sm_m = {
                proto: q,
                fields: {
                  requests: { n: 1, c: U, r: !0, q: !0 },
                  cursor: { n: 2, br: h.qM.readString, bw: h.gp.writeString },
                  count: {
                    n: 3,
                    d: 100,
                    br: h.qM.readUint32,
                    bw: h.gp.writeUint32,
                  },
                },
              }),
            q.sm_m
          );
        }
        static MBF() {
          return q.sm_mbf || (q.sm_mbf = h.w0(q.M())), q.sm_mbf;
        }
        toObject(e = !1) {
          return q.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(q.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(q.M(), e);
        }
        static deserializeBinary(e) {
          let t = new z.BinaryReader(e),
            r = new q();
          return q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(q.MBF(), e, t);
        }
        serializeBinary() {
          var e = new z.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(q.M(), e, t);
        }
        serializeBase64String() {
          var e = new z.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClan_GetPartnerEventsByBuildIDRange_Request";
        }
      }
      class U extends S {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            U.prototype.appid || h.Sg(U.M()),
            S.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            U.sm_m ||
              (U.sm_m = {
                proto: U,
                fields: {
                  appid: { n: 1, br: h.qM.readUint32, bw: h.gp.writeUint32 },
                  start_build_id: {
                    n: 2,
                    br: h.qM.readUint32,
                    bw: h.gp.writeUint32,
                  },
                  end_build_id: {
                    n: 3,
                    br: h.qM.readUint32,
                    bw: h.gp.writeUint32,
                  },
                  branch: { n: 4, br: h.qM.readString, bw: h.gp.writeString },
                },
              }),
            U.sm_m
          );
        }
        static MBF() {
          return U.sm_mbf || (U.sm_mbf = h.w0(U.M())), U.sm_mbf;
        }
        toObject(e = !1) {
          return U.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(U.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(U.M(), e);
        }
        static deserializeBinary(e) {
          let t = new z.BinaryReader(e),
            r = new U();
          return U.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(U.MBF(), e, t);
        }
        serializeBinary() {
          var e = new z.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(U.M(), e, t);
        }
        serializeBase64String() {
          var e = new z.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClan_GetPartnerEventsByBuildIDRange_Request_PatchNoteRange";
        }
      }
      class T extends S {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            T.prototype.matches || h.Sg(T.M()),
            S.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: {
                  matches: { n: 1, c: I, r: !0, q: !0 },
                  num_total_results: {
                    n: 2,
                    br: h.qM.readUint32,
                    bw: h.gp.writeUint32,
                  },
                  next_cursor: {
                    n: 3,
                    br: h.qM.readString,
                    bw: h.gp.writeString,
                  },
                },
              }),
            T.sm_m
          );
        }
        static MBF() {
          return T.sm_mbf || (T.sm_mbf = h.w0(T.M())), T.sm_mbf;
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(T.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(T.M(), e);
        }
        static deserializeBinary(e) {
          let t = new z.BinaryReader(e),
            r = new T();
          return T.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(T.MBF(), e, t);
        }
        serializeBinary() {
          var e = new z.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(T.M(), e, t);
        }
        serializeBase64String() {
          var e = new z.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClan_GetPartnerEventsByBuildIDRange_Response";
        }
      }
      class I extends S {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            I.prototype.appid || h.Sg(I.M()),
            S.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
                fields: {
                  appid: { n: 1, br: h.qM.readUint32, bw: h.gp.writeUint32 },
                  build_id: { n: 2, br: h.qM.readUint32, bw: h.gp.writeUint32 },
                  branch: { n: 3, br: h.qM.readString, bw: h.gp.writeString },
                  clan_event_gid: {
                    n: 4,
                    br: h.qM.readFixed64String,
                    bw: h.gp.writeFixed64String,
                  },
                  clan_account_id: {
                    n: 5,
                    br: h.qM.readUint32,
                    bw: h.gp.writeUint32,
                  },
                },
              }),
            I.sm_m
          );
        }
        static MBF() {
          return I.sm_mbf || (I.sm_mbf = h.w0(I.M())), I.sm_mbf;
        }
        toObject(e = !1) {
          return I.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(I.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(I.M(), e);
        }
        static deserializeBinary(e) {
          let t = new z.BinaryReader(e),
            r = new I();
          return I.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(I.MBF(), e, t);
        }
        serializeBinary() {
          var e = new z.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(I.M(), e, t);
        }
        serializeBase64String() {
          var e = new z.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClan_GetPartnerEventsByBuildIDRange_Response_PatchNotesDesc";
        }
      }
      var O;
      !(function (e) {
        (e.RespondToClanInvite = function (e, t) {
          return e.SendMsg("Clan.RespondToClanInvite#1", (0, d.I8)(R, t), v, {
            ePrivilege: 1,
          });
        }),
          (e.GetDraftAndRecentPartnerEventSnippet = function (e, t) {
            return e.SendMsg(
              "Clan.GetDraftAndRecentPartnerEventSnippet#1",
              (0, d.I8)(C, t),
              j,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetPartnerEventsByBuildIDRange = function (e, t) {
            return e.SendMsg(
              "Clan.GetPartnerEventsByBuildIDRange#1",
              (0, d.I8)(q, t),
              T,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          });
      })(O || (O = {}));
      const F = z.Message;
      class E extends F {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            E.prototype.client_instanceid || h.Sg(E.M()),
            F.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            E.sm_m ||
              (E.sm_m = {
                proto: E,
                fields: {
                  client_instanceid: {
                    n: 1,
                    br: h.qM.readUint64String,
                    bw: h.gp.writeUint64String,
                  },
                },
              }),
            E.sm_m
          );
        }
        static MBF() {
          return E.sm_mbf || (E.sm_mbf = h.w0(E.M())), E.sm_mbf;
        }
        toObject(e = !1) {
          return E.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(E.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(E.M(), e);
        }
        static deserializeBinary(e) {
          let t = new z.BinaryReader(e),
            r = new E();
          return E.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(E.MBF(), e, t);
        }
        serializeBinary() {
          var e = new z.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(E.M(), e, t);
        }
        serializeBase64String() {
          var e = new z.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_GetClientLogonInfo_Request";
        }
      }
      class A extends F {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            A.prototype.protocol_version || h.Sg(A.M()),
            F.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            A.sm_m ||
              (A.sm_m = {
                proto: A,
                fields: {
                  protocol_version: {
                    n: 1,
                    br: h.qM.readUint32,
                    bw: h.gp.writeUint32,
                  },
                  os: { n: 2, br: h.qM.readString, bw: h.gp.writeString },
                  machine_name: {
                    n: 3,
                    br: h.qM.readString,
                    bw: h.gp.writeString,
                  },
                },
              }),
            A.sm_m
          );
        }
        static MBF() {
          return A.sm_mbf || (A.sm_mbf = h.w0(A.M())), A.sm_mbf;
        }
        toObject(e = !1) {
          return A.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(A.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(A.M(), e);
        }
        static deserializeBinary(e) {
          let t = new z.BinaryReader(e),
            r = new A();
          return A.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(A.MBF(), e, t);
        }
        serializeBinary() {
          var e = new z.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(A.M(), e, t);
        }
        serializeBase64String() {
          var e = new z.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_GetClientLogonInfo_Response";
        }
      }
      class N extends F {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), F.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return N.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new N();
        }
        static deserializeBinary(e) {
          let t = new z.BinaryReader(e),
            r = new N();
          return N.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new z.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new z.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_GetAllClientLogonInfo_Request";
        }
      }
      class L extends F {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            L.prototype.sessions || h.Sg(L.M()),
            F.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            L.sm_m ||
              (L.sm_m = {
                proto: L,
                fields: {
                  sessions: { n: 1, c: x, r: !0, q: !0 },
                  refetch_interval_sec: {
                    n: 2,
                    br: h.qM.readUint32,
                    bw: h.gp.writeUint32,
                  },
                },
              }),
            L.sm_m
          );
        }
        static MBF() {
          return L.sm_mbf || (L.sm_mbf = h.w0(L.M())), L.sm_mbf;
        }
        toObject(e = !1) {
          return L.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(L.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(L.M(), e);
        }
        static deserializeBinary(e) {
          let t = new z.BinaryReader(e),
            r = new L();
          return L.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(L.MBF(), e, t);
        }
        serializeBinary() {
          var e = new z.BinaryWriter();
          return L.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(L.M(), e, t);
        }
        serializeBase64String() {
          var e = new z.BinaryWriter();
          return L.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_GetAllClientLogonInfo_Response";
        }
      }
      class x extends F {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            x.prototype.client_instanceid || h.Sg(x.M()),
            F.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            x.sm_m ||
              (x.sm_m = {
                proto: x,
                fields: {
                  client_instanceid: {
                    n: 1,
                    br: h.qM.readUint64String,
                    bw: h.gp.writeUint64String,
                  },
                  protocol_version: {
                    n: 2,
                    br: h.qM.readUint32,
                    bw: h.gp.writeUint32,
                  },
                  os_name: { n: 3, br: h.qM.readString, bw: h.gp.writeString },
                  machine_name: {
                    n: 4,
                    br: h.qM.readString,
                    bw: h.gp.writeString,
                  },
                  os_type: { n: 5, br: h.qM.readInt32, bw: h.gp.writeInt32 },
                  device_type: {
                    n: 6,
                    br: h.qM.readInt32,
                    bw: h.gp.writeInt32,
                  },
                  realm: { n: 7, br: h.qM.readInt32, bw: h.gp.writeInt32 },
                },
              }),
            x.sm_m
          );
        }
        static MBF() {
          return x.sm_mbf || (x.sm_mbf = h.w0(x.M())), x.sm_mbf;
        }
        toObject(e = !1) {
          return x.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(x.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(x.M(), e);
        }
        static deserializeBinary(e) {
          let t = new z.BinaryReader(e),
            r = new x();
          return x.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(x.MBF(), e, t);
        }
        serializeBinary() {
          var e = new z.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(x.M(), e, t);
        }
        serializeBase64String() {
          var e = new z.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_GetAllClientLogonInfo_Response_Session";
        }
      }
      class G extends F {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            G.prototype.client_instanceid || h.Sg(G.M()),
            F.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            G.sm_m ||
              (G.sm_m = {
                proto: G,
                fields: {
                  client_instanceid: {
                    n: 1,
                    br: h.qM.readUint64String,
                    bw: h.gp.writeUint64String,
                  },
                },
              }),
            G.sm_m
          );
        }
        static MBF() {
          return G.sm_mbf || (G.sm_mbf = h.w0(G.M())), G.sm_mbf;
        }
        toObject(e = !1) {
          return G.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(G.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(G.M(), e);
        }
        static deserializeBinary(e) {
          let t = new z.BinaryReader(e),
            r = new G();
          return G.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(G.MBF(), e, t);
        }
        serializeBinary() {
          var e = new z.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(G.M(), e, t);
        }
        serializeBase64String() {
          var e = new z.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_GetClientInfo_Request";
        }
      }
      class D extends F {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            D.prototype.package_version || h.Sg(D.M()),
            F.initialize(this, e, 0, -1, [7, 10], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            D.sm_m ||
              (D.sm_m = {
                proto: D,
                fields: {
                  package_version: {
                    n: 1,
                    br: h.qM.readUint32,
                    bw: h.gp.writeUint32,
                  },
                  os: { n: 2, br: h.qM.readString, bw: h.gp.writeString },
                  machine_name: {
                    n: 3,
                    br: h.qM.readString,
                    bw: h.gp.writeString,
                  },
                  ip_public: {
                    n: 4,
                    br: h.qM.readString,
                    bw: h.gp.writeString,
                  },
                  ip_private: {
                    n: 5,
                    br: h.qM.readString,
                    bw: h.gp.writeString,
                  },
                  bytes_available: {
                    n: 6,
                    br: h.qM.readUint64String,
                    bw: h.gp.writeUint64String,
                  },
                  running_games: { n: 7, c: P, r: !0, q: !0 },
                  protocol_version: {
                    n: 8,
                    br: h.qM.readUint32,
                    bw: h.gp.writeUint32,
                  },
                  clientcomm_version: {
                    n: 9,
                    br: h.qM.readUint32,
                    bw: h.gp.writeUint32,
                  },
                  local_users: {
                    n: 10,
                    r: !0,
                    q: !0,
                    br: h.qM.readUint32,
                    pbr: h.qM.readPackedUint32,
                    bw: h.gp.writeRepeatedUint32,
                  },
                },
              }),
            D.sm_m
          );
        }
        static MBF() {
          return D.sm_mbf || (D.sm_mbf = h.w0(D.M())), D.sm_mbf;
        }
        toObject(e = !1) {
          return D.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(D.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(D.M(), e);
        }
        static deserializeBinary(e) {
          let t = new z.BinaryReader(e),
            r = new D();
          return D.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(D.MBF(), e, t);
        }
        serializeBinary() {
          var e = new z.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(D.M(), e, t);
        }
        serializeBase64String() {
          var e = new z.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_ClientData";
        }
      }
      class P extends F {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            P.prototype.appid || h.Sg(P.M()),
            F.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            P.sm_m ||
              (P.sm_m = {
                proto: P,
                fields: {
                  appid: { n: 1, br: h.qM.readUint32, bw: h.gp.writeUint32 },
                  extra_info: {
                    n: 2,
                    br: h.qM.readString,
                    bw: h.gp.writeString,
                  },
                  time_running_sec: {
                    n: 3,
                    br: h.qM.readUint32,
                    bw: h.gp.writeUint32,
                  },
                },
              }),
            P.sm_m
          );
        }
        static MBF() {
          return P.sm_mbf || (P.sm_mbf = h.w0(P.M())), P.sm_mbf;
        }
        toObject(e = !1) {
          return P.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(P.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(P.M(), e);
        }
        static deserializeBinary(e) {
          let t = new z.BinaryReader(e),
            r = new P();
          return P.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(P.MBF(), e, t);
        }
        serializeBinary() {
          var e = new z.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(P.M(), e, t);
        }
        serializeBase64String() {
          var e = new z.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_ClientData_RunningGames";
        }
      }
      class k extends F {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            k.prototype.client_info || h.Sg(k.M()),
            F.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            k.sm_m ||
              (k.sm_m = { proto: k, fields: { client_info: { n: 1, c: D } } }),
            k.sm_m
          );
        }
        static MBF() {
          return k.sm_mbf || (k.sm_mbf = h.w0(k.M())), k.sm_mbf;
        }
        toObject(e = !1) {
          return k.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(k.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(k.M(), e);
        }
        static deserializeBinary(e) {
          let t = new z.BinaryReader(e),
            r = new k();
          return k.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(k.MBF(), e, t);
        }
        serializeBinary() {
          var e = new z.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(k.M(), e, t);
        }
        serializeBase64String() {
          var e = new z.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_GetClientInfo_Response";
        }
      }
      class K extends F {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            K.prototype.fields || h.Sg(K.M()),
            F.initialize(this, e, 0, -1, [6], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            K.sm_m ||
              (K.sm_m = {
                proto: K,
                fields: {
                  fields: { n: 1, br: h.qM.readString, bw: h.gp.writeString },
                  filters: { n: 2, br: h.qM.readString, bw: h.gp.writeString },
                  client_instanceid: {
                    n: 3,
                    br: h.qM.readUint64String,
                    bw: h.gp.writeUint64String,
                  },
                  include_client_info: {
                    n: 4,
                    br: h.qM.readBool,
                    bw: h.gp.writeBool,
                  },
                  language: { n: 5, br: h.qM.readString, bw: h.gp.writeString },
                  filter_appids: {
                    n: 6,
                    r: !0,
                    q: !0,
                    br: h.qM.readUint32,
                    pbr: h.qM.readPackedUint32,
                    bw: h.gp.writeRepeatedUint32,
                  },
                },
              }),
            K.sm_m
          );
        }
        static MBF() {
          return K.sm_mbf || (K.sm_mbf = h.w0(K.M())), K.sm_mbf;
        }
        toObject(e = !1) {
          return K.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(K.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(K.M(), e);
        }
        static deserializeBinary(e) {
          let t = new z.BinaryReader(e),
            r = new K();
          return K.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(K.MBF(), e, t);
        }
        serializeBinary() {
          var e = new z.BinaryWriter();
          return K.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(K.M(), e, t);
        }
        serializeBase64String() {
          var e = new z.BinaryWriter();
          return K.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_GetClientAppList_Request";
        }
      }
      class $ extends F {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            $.prototype.bytes_available || h.Sg($.M()),
            F.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            $.sm_m ||
              ($.sm_m = {
                proto: $,
                fields: {
                  bytes_available: {
                    n: 1,
                    br: h.qM.readUint64String,
                    bw: h.gp.writeUint64String,
                  },
                  apps: { n: 2, c: J, r: !0, q: !0 },
                  client_info: { n: 3, c: D },
                  refetch_interval_sec_full: {
                    n: 4,
                    br: h.qM.readUint32,
                    bw: h.gp.writeUint32,
                  },
                  refetch_interval_sec_changing: {
                    n: 5,
                    br: h.qM.readUint32,
                    bw: h.gp.writeUint32,
                  },
                  refetch_interval_sec_updating: {
                    n: 6,
                    br: h.qM.readUint32,
                    bw: h.gp.writeUint32,
                  },
                },
              }),
            $.sm_m
          );
        }
        static MBF() {
          return $.sm_mbf || ($.sm_mbf = h.w0($.M())), $.sm_mbf;
        }
        toObject(e = !1) {
          return $.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT($.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq($.M(), e);
        }
        static deserializeBinary(e) {
          let t = new z.BinaryReader(e),
            r = new $();
          return $.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj($.MBF(), e, t);
        }
        serializeBinary() {
          var e = new z.BinaryWriter();
          return $.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0($.M(), e, t);
        }
        serializeBase64String() {
          var e = new z.BinaryWriter();
          return $.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_GetClientAppList_Response";
        }
      }
      class J extends F {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            J.prototype.appid || h.Sg(J.M()),
            F.initialize(this, e, 0, -1, [17], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            J.sm_m ||
              (J.sm_m = {
                proto: J,
                fields: {
                  appid: { n: 1, br: h.qM.readUint32, bw: h.gp.writeUint32 },
                  app: { n: 2, br: h.qM.readString, bw: h.gp.writeString },
                  category: { n: 3, br: h.qM.readString, bw: h.gp.writeString },
                  app_type: { n: 4, br: h.qM.readString, bw: h.gp.writeString },
                  num_downloading: {
                    n: 8,
                    br: h.qM.readUint32,
                    bw: h.gp.writeUint32,
                  },
                  num_paused: {
                    n: 10,
                    br: h.qM.readUint32,
                    bw: h.gp.writeUint32,
                  },
                  bytes_download_rate: {
                    n: 11,
                    br: h.qM.readUint32,
                    bw: h.gp.writeUint32,
                  },
                  bytes_downloaded: {
                    n: 12,
                    br: h.qM.readUint64String,
                    bw: h.gp.writeUint64String,
                  },
                  bytes_to_download: {
                    n: 13,
                    br: h.qM.readUint64String,
                    bw: h.gp.writeUint64String,
                  },
                  dlcs: { n: 17, c: H, r: !0, q: !0 },
                  favorite: { n: 18, br: h.qM.readBool, bw: h.gp.writeBool },
                  auto_update: { n: 19, br: h.qM.readBool, bw: h.gp.writeBool },
                  installed: { n: 20, br: h.qM.readBool, bw: h.gp.writeBool },
                  download_paused: {
                    n: 21,
                    br: h.qM.readBool,
                    bw: h.gp.writeBool,
                  },
                  changing: { n: 22, br: h.qM.readBool, bw: h.gp.writeBool },
                  available_on_platform: {
                    n: 23,
                    br: h.qM.readBool,
                    bw: h.gp.writeBool,
                  },
                  bytes_staged: {
                    n: 24,
                    br: h.qM.readUint64String,
                    bw: h.gp.writeUint64String,
                  },
                  bytes_to_stage: {
                    n: 25,
                    br: h.qM.readUint64String,
                    bw: h.gp.writeUint64String,
                  },
                  bytes_required: {
                    n: 26,
                    br: h.qM.readUint64String,
                    bw: h.gp.writeUint64String,
                  },
                  source_buildid: {
                    n: 27,
                    br: h.qM.readUint32,
                    bw: h.gp.writeUint32,
                  },
                  target_buildid: {
                    n: 28,
                    br: h.qM.readUint32,
                    bw: h.gp.writeUint32,
                  },
                  estimated_seconds_remaining: {
                    n: 29,
                    br: h.qM.readUint32,
                    bw: h.gp.writeUint32,
                  },
                  queue_position: {
                    n: 30,
                    d: -1,
                    br: h.qM.readInt32,
                    bw: h.gp.writeInt32,
                  },
                  uninstalling: {
                    n: 31,
                    br: h.qM.readBool,
                    bw: h.gp.writeBool,
                  },
                  rt_time_scheduled: {
                    n: 32,
                    br: h.qM.readUint32,
                    bw: h.gp.writeUint32,
                  },
                  running: { n: 33, br: h.qM.readBool, bw: h.gp.writeBool },
                },
              }),
            J.sm_m
          );
        }
        static MBF() {
          return J.sm_mbf || (J.sm_mbf = h.w0(J.M())), J.sm_mbf;
        }
        toObject(e = !1) {
          return J.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(J.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(J.M(), e);
        }
        static deserializeBinary(e) {
          let t = new z.BinaryReader(e),
            r = new J();
          return J.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(J.MBF(), e, t);
        }
        serializeBinary() {
          var e = new z.BinaryWriter();
          return J.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(J.M(), e, t);
        }
        serializeBase64String() {
          var e = new z.BinaryWriter();
          return J.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_GetClientAppList_Response_AppData";
        }
      }
      class H extends F {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            H.prototype.appid || h.Sg(H.M()),
            F.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            H.sm_m ||
              (H.sm_m = {
                proto: H,
                fields: {
                  appid: { n: 1, br: h.qM.readUint32, bw: h.gp.writeUint32 },
                  app: { n: 2, br: h.qM.readString, bw: h.gp.writeString },
                  installed: {
                    n: 3,
                    br: h.qM.readUint32,
                    bw: h.gp.writeUint32,
                  },
                },
              }),
            H.sm_m
          );
        }
        static MBF() {
          return H.sm_mbf || (H.sm_mbf = h.w0(H.M())), H.sm_mbf;
        }
        toObject(e = !1) {
          return H.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(H.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(H.M(), e);
        }
        static deserializeBinary(e) {
          let t = new z.BinaryReader(e),
            r = new H();
          return H.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(H.MBF(), e, t);
        }
        serializeBinary() {
          var e = new z.BinaryWriter();
          return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(H.M(), e, t);
        }
        serializeBase64String() {
          var e = new z.BinaryWriter();
          return H.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_GetClientAppList_Response_AppData_DLCData";
        }
      }
      class V extends F {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            V.prototype.appid || h.Sg(V.M()),
            F.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            V.sm_m ||
              (V.sm_m = {
                proto: V,
                fields: {
                  appid: {
                    n: 1,
                    q: !0,
                    br: h.qM.readUint32,
                    bw: h.gp.writeUint32,
                  },
                  client_instanceid: {
                    n: 2,
                    br: h.qM.readUint64String,
                    bw: h.gp.writeUint64String,
                  },
                },
              }),
            V.sm_m
          );
        }
        static MBF() {
          return V.sm_mbf || (V.sm_mbf = h.w0(V.M())), V.sm_mbf;
        }
        toObject(e = !1) {
          return V.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(V.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(V.M(), e);
        }
        static deserializeBinary(e) {
          let t = new z.BinaryReader(e),
            r = new V();
          return V.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(V.MBF(), e, t);
        }
        serializeBinary() {
          var e = new z.BinaryWriter();
          return V.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(V.M(), e, t);
        }
        serializeBase64String() {
          var e = new z.BinaryWriter();
          return V.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_InstallClientApp_Request";
        }
      }
      class Y extends F {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), F.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Y.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Y();
        }
        static deserializeBinary(e) {
          let t = new z.BinaryReader(e),
            r = new Y();
          return Y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new z.BinaryWriter();
          return Y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new z.BinaryWriter();
          return Y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_InstallClientApp_Response";
        }
      }
      class Z extends F {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Z.prototype.appid || h.Sg(Z.M()),
            F.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Z.sm_m ||
              (Z.sm_m = {
                proto: Z,
                fields: {
                  appid: {
                    n: 1,
                    q: !0,
                    br: h.qM.readUint32,
                    bw: h.gp.writeUint32,
                  },
                  client_instanceid: {
                    n: 2,
                    br: h.qM.readUint64String,
                    bw: h.gp.writeUint64String,
                  },
                },
              }),
            Z.sm_m
          );
        }
        static MBF() {
          return Z.sm_mbf || (Z.sm_mbf = h.w0(Z.M())), Z.sm_mbf;
        }
        toObject(e = !1) {
          return Z.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(Z.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(Z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new z.BinaryReader(e),
            r = new Z();
          return Z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(Z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new z.BinaryWriter();
          return Z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(Z.M(), e, t);
        }
        serializeBase64String() {
          var e = new z.BinaryWriter();
          return Z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_UninstallClientApp_Request";
        }
      }
      class X extends F {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), F.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return X.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new X();
        }
        static deserializeBinary(e) {
          let t = new z.BinaryReader(e),
            r = new X();
          return X.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new z.BinaryWriter();
          return X.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new z.BinaryWriter();
          return X.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_UninstallClientApp_Response";
        }
      }
      class Q extends F {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Q.prototype.appid || h.Sg(Q.M()),
            F.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Q.sm_m ||
              (Q.sm_m = {
                proto: Q,
                fields: {
                  appid: {
                    n: 1,
                    q: !0,
                    br: h.qM.readUint32,
                    bw: h.gp.writeUint32,
                  },
                  action: {
                    n: 2,
                    q: !0,
                    br: h.qM.readUint32,
                    bw: h.gp.writeUint32,
                  },
                  client_instanceid: {
                    n: 3,
                    br: h.qM.readUint64String,
                    bw: h.gp.writeUint64String,
                  },
                },
              }),
            Q.sm_m
          );
        }
        static MBF() {
          return Q.sm_mbf || (Q.sm_mbf = h.w0(Q.M())), Q.sm_mbf;
        }
        toObject(e = !1) {
          return Q.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(Q.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(Q.M(), e);
        }
        static deserializeBinary(e) {
          let t = new z.BinaryReader(e),
            r = new Q();
          return Q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(Q.MBF(), e, t);
        }
        serializeBinary() {
          var e = new z.BinaryWriter();
          return Q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(Q.M(), e, t);
        }
        serializeBase64String() {
          var e = new z.BinaryWriter();
          return Q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_SetClientAppUpdateState_Request";
        }
      }
      class ee extends F {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ee.prototype.client_instanceid || h.Sg(ee.M()),
            F.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ee.sm_m ||
              (ee.sm_m = {
                proto: ee,
                fields: {
                  client_instanceid: {
                    n: 1,
                    br: h.qM.readUint64String,
                    bw: h.gp.writeUint64String,
                  },
                  appid: {
                    n: 2,
                    q: !0,
                    br: h.qM.readUint32,
                    bw: h.gp.writeUint32,
                  },
                  query_params: {
                    n: 3,
                    br: h.qM.readString,
                    bw: h.gp.writeString,
                  },
                },
              }),
            ee.sm_m
          );
        }
        static MBF() {
          return ee.sm_mbf || (ee.sm_mbf = h.w0(ee.M())), ee.sm_mbf;
        }
        toObject(e = !1) {
          return ee.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(ee.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(ee.M(), e);
        }
        static deserializeBinary(e) {
          let t = new z.BinaryReader(e),
            r = new ee();
          return ee.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(ee.MBF(), e, t);
        }
        serializeBinary() {
          var e = new z.BinaryWriter();
          return ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(ee.M(), e, t);
        }
        serializeBase64String() {
          var e = new z.BinaryWriter();
          return ee.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_LaunchClientApp_Request";
        }
      }
      class te extends F {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), F.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return te.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new te();
        }
        static deserializeBinary(e) {
          let t = new z.BinaryReader(e),
            r = new te();
          return te.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new z.BinaryWriter();
          return te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new z.BinaryWriter();
          return te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_LaunchClientApp_Response";
        }
      }
      class re extends F {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), F.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return re.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new re();
        }
        static deserializeBinary(e) {
          let t = new z.BinaryReader(e),
            r = new re();
          return re.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new z.BinaryWriter();
          return re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new z.BinaryWriter();
          return re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_SetClientAppUpdateState_Response";
        }
      }
      class ie extends F {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ie.prototype.client_instanceid || h.Sg(ie.M()),
            F.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ie.sm_m ||
              (ie.sm_m = {
                proto: ie,
                fields: {
                  client_instanceid: {
                    n: 1,
                    br: h.qM.readUint64String,
                    bw: h.gp.writeUint64String,
                  },
                  enable: { n: 2, br: h.qM.readBool, bw: h.gp.writeBool },
                },
              }),
            ie.sm_m
          );
        }
        static MBF() {
          return ie.sm_mbf || (ie.sm_mbf = h.w0(ie.M())), ie.sm_mbf;
        }
        toObject(e = !1) {
          return ie.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(ie.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(ie.M(), e);
        }
        static deserializeBinary(e) {
          let t = new z.BinaryReader(e),
            r = new ie();
          return ie.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(ie.MBF(), e, t);
        }
        serializeBinary() {
          var e = new z.BinaryWriter();
          return ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(ie.M(), e, t);
        }
        serializeBase64String() {
          var e = new z.BinaryWriter();
          return ie.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_EnableOrDisableDownloads_Request";
        }
      }
      class ne extends F {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), F.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return ne.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new ne();
        }
        static deserializeBinary(e) {
          let t = new z.BinaryReader(e),
            r = new ne();
          return ne.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new z.BinaryWriter();
          return ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new z.BinaryWriter();
          return ne.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_EnableOrDisableDownloads_Response";
        }
      }
      var ae;
      !(function (e) {
        (e.GetClientLogonInfo = function (e, t) {
          return e.SendMsg(
            "ClientComm.GetClientLogonInfo#1",
            (0, d.I8)(E, t),
            A,
            { bConstMethod: !0, ePrivilege: 1 },
          );
        }),
          (e.GetAllClientLogonInfo = function (e, t) {
            return e.SendMsg(
              "ClientComm.GetAllClientLogonInfo#1",
              (0, d.I8)(N, t),
              L,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetClientInfo = function (e, t) {
            return e.SendMsg("ClientComm.GetClientInfo#1", (0, d.I8)(G, t), k, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.GetClientAppList = function (e, t) {
            return e.SendMsg(
              "ClientComm.GetClientAppList#1",
              (0, d.I8)(K, t),
              $,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.InstallClientApp = function (e, t) {
            return e.SendMsg(
              "ClientComm.InstallClientApp#1",
              (0, d.I8)(V, t),
              Y,
              { ePrivilege: 1 },
            );
          }),
          (e.UninstallClientApp = function (e, t) {
            return e.SendMsg(
              "ClientComm.UninstallClientApp#1",
              (0, d.I8)(Z, t),
              X,
              { ePrivilege: 1 },
            );
          }),
          (e.LaunchClientApp = function (e, t) {
            return e.SendMsg(
              "ClientComm.LaunchClientApp#1",
              (0, d.I8)(ee, t),
              te,
              { ePrivilege: 1 },
            );
          }),
          (e.SetClientAppUpdateState = function (e, t) {
            return e.SendMsg(
              "ClientComm.SetClientAppUpdateState#1",
              (0, d.I8)(Q, t),
              re,
              { ePrivilege: 1 },
            );
          }),
          (e.EnableOrDisableDownloads = function (e, t) {
            return e.SendMsg(
              "ClientComm.EnableOrDisableDownloads#1",
              (0, d.I8)(ie, t),
              ne,
              { ePrivilege: 1 },
            );
          });
      })(ae || (ae = {}));
      const se = "RemoteDownload_OnlineClient";
      Error;
      function le() {
        const e = (0, l.KV)(),
          t = (0, M.L)();
        return (0, m.I)({
          queryKey: [se, t],
          queryFn: async () => {
            const t = d.w.Init(N),
              r = await ae.GetAllClientLogonInfo(e, t);
            if (1 !== r.GetEResult())
              throw (
                (console.error(
                  "Received error from GetAllClientLogonInfo",
                  r.GetEResult(),
                  r.Hdr().transport_error(),
                ),
                new Error(
                  `Error from GetAllClientLogonInfo: ${r.GetEResult()}`,
                ))
              );
            const i = [];
            for (const e of r.Body().sessions())
              e.device_type() !== p.zm.k_EGamingDeviceType_Unknown &&
                i.push(e.toObject());
            return {
              sessions: i,
              refetchInterval: r.Body().refetch_interval_sec() || 300,
            };
          },
          staleTime: 3e5,
          refetchInterval: (e) => 1e3 * (e.state.data?.refetchInterval || 300),
        });
      }
      var oe = r(61859),
        ce = r(82477),
        ue = r(7068),
        me = r(22797),
        de = r(78327);
      function Be(e) {
        return `?joinsessionid=${e}`;
      }
      function be(e) {
        return i.createElement(
          ue.$n,
          {
            className: a().JoinSessionButton,
            onClick: () =>
              (window.location.href =
                `steam://launch/${e.steamAppId}` + Be(e.sessionID)),
          },
          e.children,
        );
      }
      function pe(e) {
        const t = le(),
          r = (0, l.KV)();
        return t.isSuccess
          ? t.data?.sessions?.length > 0
            ? i.createElement(
                i.Fragment,
                null,
                i.createElement(
                  ue.JU,
                  { className: a().AvailableSessionsText },
                  "Available Steam Sessions:",
                ),
                i.createElement(
                  "div",
                  { className: a().SessionList },
                  t.data?.sessions.map((t) =>
                    i.createElement(
                      "div",
                      { className: a().Session, key: t.client_instanceid },
                      i.createElement(
                        "div",
                        { className: a().MachineName },
                        t.machine_name,
                      ),
                      i.createElement(
                        "div",
                        { className: a().OsName },
                        t.os_name,
                      ),
                      i.createElement(
                        ue.$n,
                        {
                          className: a().JoinSessionButton,
                          onClick: () =>
                            (async function (e, t, r, i) {
                              const n = d.w.Init(ee);
                              n.Body().set_appid(r),
                                n.Body().set_client_instanceid(t),
                                n.Body().set_query_params(i);
                              const a = await ae.LaunchClientApp(e, n);
                              if (1 !== a.GetEResult())
                                throw (
                                  (console.error(
                                    "Received error from LaunchClientApp",
                                    a.GetEResult(),
                                    a.Hdr().transport_error(),
                                  ),
                                  new Error(
                                    `Error from LaunchClientApp: ${a.GetEResult()}`,
                                  ))
                                );
                            })(
                              r,
                              t.client_instanceid,
                              e.steamAppId,
                              Be(e.sessionID),
                            ),
                        },
                        "Launch Game",
                      ),
                    ),
                  ),
                ),
              )
            : i.createElement(
                "div",
                { className: a().Error },
                "No logged in sessions",
              )
          : t.isFetching || t.isRefetching
            ? i.createElement(me.t, null)
            : i.createElement(
                "div",
                { className: a().Error },
                "Error ",
                t.error.message,
              );
      }
      function ge(e) {
        const t = _(e.steamAppId);
        return t
          ? i.createElement(
              i.Fragment,
              null,
              i.createElement(
                "div",
                { className: a().Header },
                "Join Game Session",
              ),
              i.createElement(
                "div",
                { className: a().Explanation },
                "You've been invited to join a game! Click below to launch ",
                t.friendly_name || t.name,
                " on Steam and start playing.",
              ),
              i.createElement(
                "div",
                { className: a().SessionInfoCtr },
                i.createElement("iframe", { src: e.sessionLiveDataUrl }),
              ),
              de.TS.IN_CLIENT
                ? i.createElement(
                    "div",
                    { className: a().SectionCtr },
                    i.createElement(be, { ...e }, "Launch Game"),
                  )
                : i.createElement(
                    i.Fragment,
                    null,
                    i.createElement(
                      "div",
                      { className: a().SectionCtr },
                      de.iA.logged_in
                        ? i.createElement(pe, { ...e })
                        : i.createElement(
                            i.Fragment,
                            null,
                            i.createElement(
                              ue.JU,
                              null,
                              "Login to join on another device",
                            ),
                            i.createElement(
                              ue.$n,
                              { onClick: ce.vg },
                              (0, oe.we)("#Login_SignIn"),
                            ),
                          ),
                    ),
                    !de.TS.IN_MOBILE &&
                      !de.TS.IN_MOBILE_WEBVIEW &&
                      i.createElement(
                        "div",
                        { className: a().SectionCtr },
                        i.createElement(ue.JU, null, "Or launch on this PC"),
                        i.createElement(be, { ...e }, "Launch Game Here"),
                      ),
                  ),
            )
          : i.createElement(me.t, null);
      }
      function ye() {
        const e = (0, de.Tc)("multiplayersession_join", "application_config"),
          t = new URLSearchParams((0, s.zy)().search).get("jws"),
          { header: r, body: n } = (0, o.I3)(t) || { header: {}, body: {} };
        let { steamAppId: l } = n;
        const c = n[e.jws_sessionid_key],
          u = n[e.jws_livedata_url_key];
        return (
          "string" == typeof l && (l = parseInt(l)),
          i.createElement(
            "div",
            { className: a().JoinApp },
            l && u && u
              ? i.createElement(ge, {
                  steamAppId: l,
                  sessionLiveDataUrl: u,
                  sessionID: c,
                })
              : i.createElement("div", null, "Invalid session link"),
            " ",
          )
        );
      }
    },
  },
]);

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [6804],
  {
    58632: (t) => {
      var e,
        r = (function () {
          function t(t, e) {
            if ("function" != typeof t)
              throw new TypeError(
                "DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but got: " +
                  t +
                  ".",
              );
            (this._batchLoadFn = t),
              (this._maxBatchSize = (function (t) {
                var e = !t || !1 !== t.batch;
                if (!e) return 1;
                var r = t && t.maxBatchSize;
                if (void 0 === r) return 1 / 0;
                if ("number" != typeof r || r < 1)
                  throw new TypeError(
                    "maxBatchSize must be a positive number: " + r,
                  );
                return r;
              })(e)),
              (this._batchScheduleFn = (function (t) {
                var e = t && t.batchScheduleFn;
                if (void 0 === e) return n;
                if ("function" != typeof e)
                  throw new TypeError(
                    "batchScheduleFn must be a function: " + e,
                  );
                return e;
              })(e)),
              (this._cacheKeyFn = (function (t) {
                var e = t && t.cacheKeyFn;
                if (void 0 === e)
                  return function (t) {
                    return t;
                  };
                if ("function" != typeof e)
                  throw new TypeError("cacheKeyFn must be a function: " + e);
                return e;
              })(e)),
              (this._cacheMap = (function (t) {
                var e = !t || !1 !== t.cache;
                if (!e) return null;
                var r = t && t.cacheMap;
                if (void 0 === r) return new Map();
                if (null !== r) {
                  var n = ["get", "set", "delete", "clear"].filter(
                    function (t) {
                      return r && "function" != typeof r[t];
                    },
                  );
                  if (0 !== n.length)
                    throw new TypeError(
                      "Custom cacheMap missing methods: " + n.join(", "),
                    );
                }
                return r;
              })(e)),
              (this._batch = null),
              (this.name = (function (t) {
                if (t && t.name) return t.name;
                return null;
              })(e));
          }
          var e = t.prototype;
          return (
            (e.load = function (t) {
              if (null == t)
                throw new TypeError(
                  "The loader.load() function must be called with a value, but got: " +
                    String(t) +
                    ".",
                );
              var e = (function (t) {
                  var e = t._batch;
                  if (
                    null !== e &&
                    !e.hasDispatched &&
                    e.keys.length < t._maxBatchSize
                  )
                    return e;
                  var r = { hasDispatched: !1, keys: [], callbacks: [] };
                  return (
                    (t._batch = r),
                    t._batchScheduleFn(function () {
                      !(function (t, e) {
                        if (((e.hasDispatched = !0), 0 === e.keys.length))
                          return void s(e);
                        var r;
                        try {
                          r = t._batchLoadFn(e.keys);
                        } catch (r) {
                          return i(
                            t,
                            e,
                            new TypeError(
                              "DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function errored synchronously: " +
                                String(r) +
                                ".",
                            ),
                          );
                        }
                        if (!r || "function" != typeof r.then)
                          return i(
                            t,
                            e,
                            new TypeError(
                              "DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise: " +
                                String(r) +
                                ".",
                            ),
                          );
                        r.then(function (t) {
                          if (!a(t))
                            throw new TypeError(
                              "DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array: " +
                                String(t) +
                                ".",
                            );
                          if (t.length !== e.keys.length)
                            throw new TypeError(
                              "DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array of the same length as the Array of keys.\n\nKeys:\n" +
                                String(e.keys) +
                                "\n\nValues:\n" +
                                String(t),
                            );
                          s(e);
                          for (var r = 0; r < e.callbacks.length; r++) {
                            var n = t[r];
                            n instanceof Error
                              ? e.callbacks[r].reject(n)
                              : e.callbacks[r].resolve(n);
                          }
                        }).catch(function (r) {
                          i(t, e, r);
                        });
                      })(t, r);
                    }),
                    r
                  );
                })(this),
                r = this._cacheMap,
                n = this._cacheKeyFn(t);
              if (r) {
                var o = r.get(n);
                if (o) {
                  var c = e.cacheHits || (e.cacheHits = []);
                  return new Promise(function (t) {
                    c.push(function () {
                      t(o);
                    });
                  });
                }
              }
              e.keys.push(t);
              var u = new Promise(function (t, r) {
                e.callbacks.push({ resolve: t, reject: r });
              });
              return r && r.set(n, u), u;
            }),
            (e.loadMany = function (t) {
              if (!a(t))
                throw new TypeError(
                  "The loader.loadMany() function must be called with Array<key> but got: " +
                    t +
                    ".",
                );
              for (var e = [], r = 0; r < t.length; r++)
                e.push(
                  this.load(t[r]).catch(function (t) {
                    return t;
                  }),
                );
              return Promise.all(e);
            }),
            (e.clear = function (t) {
              var e = this._cacheMap;
              if (e) {
                var r = this._cacheKeyFn(t);
                e.delete(r);
              }
              return this;
            }),
            (e.clearAll = function () {
              var t = this._cacheMap;
              return t && t.clear(), this;
            }),
            (e.prime = function (t, e) {
              var r = this._cacheMap;
              if (r) {
                var n,
                  i = this._cacheKeyFn(t);
                if (void 0 === r.get(i))
                  e instanceof Error
                    ? (n = Promise.reject(e)).catch(function () {})
                    : (n = Promise.resolve(e)),
                    r.set(i, n);
              }
              return this;
            }),
            t
          );
        })(),
        n =
          "object" == typeof process && "function" == typeof process.nextTick
            ? function (t) {
                e || (e = Promise.resolve()),
                  e.then(function () {
                    process.nextTick(t);
                  });
              }
            : "function" == typeof setImmediate
              ? function (t) {
                  setImmediate(t);
                }
              : function (t) {
                  setTimeout(t);
                };
      function i(t, e, r) {
        s(e);
        for (var n = 0; n < e.keys.length; n++)
          t.clear(e.keys[n]), e.callbacks[n].reject(r);
      }
      function s(t) {
        if (t.cacheHits)
          for (var e = 0; e < t.cacheHits.length; e++) t.cacheHits[e]();
      }
      function a(t) {
        return (
          "object" == typeof t &&
          null !== t &&
          "number" == typeof t.length &&
          (0 === t.length ||
            (t.length > 0 &&
              Object.prototype.hasOwnProperty.call(t, t.length - 1)))
        );
      }
      t.exports = r;
    },
    33861: (t, e, r) => {
      r.d(e, { E: () => Q });
      var n,
        i,
        s,
        a,
        o,
        c,
        u,
        h,
        l,
        f,
        p,
        y,
        d,
        m,
        b,
        v = r(90626),
        w = r(86843),
        S = r(6561),
        g = r(48767),
        k = r(57152),
        O = r(57956);
      function E(t, e) {
        return t.filter((t) => !e.includes(t));
      }
      var V = class extends k.Q {
        constructor(t, e, r) {
          super(),
            (0, w.VK)(this, h),
            (0, w.VK)(this, f),
            (0, w.VK)(this, y),
            (0, w.VK)(this, m),
            (0, w.VK)(this, n, void 0),
            (0, w.VK)(this, i, void 0),
            (0, w.VK)(this, s, void 0),
            (0, w.VK)(this, a, void 0),
            (0, w.VK)(this, o, void 0),
            (0, w.VK)(this, c, void 0),
            (0, w.VK)(this, u, void 0),
            (0, w.OV)(this, n, t),
            (0, w.OV)(this, s, []),
            (0, w.OV)(this, a, []),
            (0, w.OV)(this, i, []),
            this.setQueries(e);
        }
        onSubscribe() {
          1 === this.listeners.size &&
            (0, w.S7)(this, a).forEach((t) => {
              t.subscribe((e) => {
                (0, w.jq)(this, y, d).call(this, t, e);
              });
            });
        }
        onUnsubscribe() {
          this.listeners.size || this.destroy();
        }
        destroy() {
          (this.listeners = new Set()),
            (0, w.S7)(this, a).forEach((t) => {
              t.destroy();
            });
        }
        setQueries(t, e, r) {
          (0, w.OV)(this, s, t),
            S.j.batch(() => {
              const t = (0, w.S7)(this, a),
                e = (0, w.jq)(this, f, p).call(this, (0, w.S7)(this, s));
              e.forEach((t) =>
                t.observer.setOptions(t.defaultedQueryOptions, r),
              );
              const n = e.map((t) => t.observer),
                o = n.map((t) => t.getCurrentResult()),
                c = n.some((e, r) => e !== t[r]);
              (t.length !== n.length || c) &&
                ((0, w.OV)(this, a, n),
                (0, w.OV)(this, i, o),
                this.hasListeners() &&
                  (E(t, n).forEach((t) => {
                    t.destroy();
                  }),
                  E(n, t).forEach((t) => {
                    t.subscribe((e) => {
                      (0, w.jq)(this, y, d).call(this, t, e);
                    });
                  }),
                  (0, w.jq)(this, m, b).call(this)));
            });
        }
        getCurrentResult() {
          return (0, w.S7)(this, i);
        }
        getQueries() {
          return (0, w.S7)(this, a).map((t) => t.getCurrentQuery());
        }
        getObservers() {
          return (0, w.S7)(this, a);
        }
        getOptimisticResult(t, e) {
          const r = (0, w.jq)(this, f, p).call(this, t),
            n = r.map((t) =>
              t.observer.getOptimisticResult(t.defaultedQueryOptions),
            );
          return [
            n,
            (t) => (0, w.jq)(this, h, l).call(this, t ?? n, e),
            () =>
              r.map((t, e) => {
                const i = n[e];
                return t.defaultedQueryOptions.notifyOnChangeProps
                  ? i
                  : t.observer.trackResult(i, (t) => {
                      r.forEach((e) => {
                        e.observer.trackProp(t);
                      });
                    });
              }),
          ];
        }
      };
      (n = new WeakMap()),
        (i = new WeakMap()),
        (s = new WeakMap()),
        (a = new WeakMap()),
        (o = new WeakMap()),
        (c = new WeakMap()),
        (u = new WeakMap()),
        (h = new WeakSet()),
        (l = function (t, e) {
          return e
            ? (((0, w.S7)(this, o) &&
                (0, w.S7)(this, i) === (0, w.S7)(this, u) &&
                e === (0, w.S7)(this, c)) ||
                ((0, w.OV)(this, c, e),
                (0, w.OV)(this, u, (0, w.S7)(this, i)),
                (0, w.OV)(this, o, (0, O.BH)((0, w.S7)(this, o), e(t)))),
              (0, w.S7)(this, o))
            : t;
        }),
        (f = new WeakSet()),
        (p = function (t) {
          const e = (0, w.S7)(this, a),
            r = new Map(e.map((t) => [t.options.queryHash, t])),
            i = t.map((t) => (0, w.S7)(this, n).defaultQueryOptions(t)),
            s = i.flatMap((t) => {
              const e = r.get(t.queryHash);
              return null != e
                ? [{ defaultedQueryOptions: t, observer: e }]
                : [];
            }),
            o = new Set(s.map((t) => t.defaultedQueryOptions.queryHash)),
            c = i.filter((t) => !o.has(t.queryHash)),
            u = (t) => {
              const e = (0, w.S7)(this, n).defaultQueryOptions(t);
              return (
                (0, w.S7)(this, a).find(
                  (t) => t.options.queryHash === e.queryHash,
                ) ?? new g.$((0, w.S7)(this, n), e)
              );
            },
            h = c.map((t) => ({ defaultedQueryOptions: t, observer: u(t) }));
          return s
            .concat(h)
            .sort(
              (t, e) =>
                i.indexOf(t.defaultedQueryOptions) -
                i.indexOf(e.defaultedQueryOptions),
            );
        }),
        (y = new WeakSet()),
        (d = function (t, e) {
          const r = (0, w.S7)(this, a).indexOf(t);
          -1 !== r &&
            ((0, w.OV)(
              this,
              i,
              (function (t, e, r) {
                const n = t.slice(0);
                return (n[e] = r), n;
              })((0, w.S7)(this, i), r, e),
            ),
            (0, w.jq)(this, m, b).call(this));
        }),
        (m = new WeakSet()),
        (b = function () {
          S.j.batch(() => {
            this.listeners.forEach((t) => {
              t((0, w.S7)(this, i));
            });
          });
        });
      var M = r(29385),
        j = r(85010),
        _ = r(8184),
        K = r(33478),
        P = r(99583);
      function Q({ queries: t, ...e }, r) {
        const n = (0, M.jE)(r),
          i = (0, j.w)(),
          s = (0, _.h)(),
          a = v.useMemo(
            () =>
              t.map((t) => {
                const e = n.defaultQueryOptions(t);
                return (
                  (e._optimisticResults = i ? "isRestoring" : "optimistic"), e
                );
              }),
            [t, n, i],
          );
        a.forEach((t) => {
          (0, P.tu)(t), (0, K.LJ)(t, s);
        }),
          (0, K.wZ)(s);
        const [o] = v.useState(() => new V(n, a, e)),
          [c, u, h] = o.getOptimisticResult(a, e.combine);
        v.useSyncExternalStore(
          v.useCallback(
            (t) => (i ? () => {} : o.subscribe(S.j.batchCalls(t))),
            [o, i],
          ),
          () => o.getCurrentResult(),
          () => o.getCurrentResult(),
        ),
          v.useEffect(() => {
            o.setQueries(a, e, { listeners: !1 });
          }, [a, e, o]);
        const l = c.some((t, e) => (0, P.EU)(a[e], t))
          ? c.flatMap((t, e) => {
              const r = a[e];
              if (r) {
                const e = new g.$(n, r);
                if ((0, P.EU)(r, t)) return (0, P.iL)(r, e, s);
                (0, P.nE)(t, i) && (0, P.iL)(r, e, s);
              }
              return [];
            })
          : [];
        if (l.length > 0) throw Promise.all(l);
        const f = c.find((t, e) => {
          const r = a[e];
          return (
            r &&
            (0, K.$1)({
              result: t,
              errorResetBoundary: s,
              throwOnError: r.throwOnError,
              query: n.getQueryCache().get(r.queryHash),
            })
          );
        });
        if (null == f ? void 0 : f.error) throw f.error;
        return u(h());
      }
    },
  },
]);

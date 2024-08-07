/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [7817],
  {
    58632: (e) => {
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
                if (void 0 === t) return n;
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
                  var n = ["get", "set", "delete", "clear"].filter(
                    function (e) {
                      return r && "function" != typeof r[e];
                    },
                  );
                  if (0 !== n.length)
                    throw new TypeError(
                      "Custom cacheMap missing methods: " + n.join(", "),
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
                          return void i(t);
                        var r;
                        try {
                          r = e._batchLoadFn(t.keys);
                        } catch (r) {
                          return s(
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
                          return s(
                            e,
                            t,
                            new TypeError(
                              "DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise: " +
                                String(r) +
                                ".",
                            ),
                          );
                        r.then(function (e) {
                          if (!o(e))
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
                          i(t);
                          for (var r = 0; r < t.callbacks.length; r++) {
                            var n = e[r];
                            n instanceof Error
                              ? t.callbacks[r].reject(n)
                              : t.callbacks[r].resolve(n);
                          }
                        }).catch(function (r) {
                          s(e, t, r);
                        });
                      })(e, r);
                    }),
                    r
                  );
                })(this),
                r = this._cacheMap,
                n = this._cacheKeyFn(e);
              if (r) {
                var a = r.get(n);
                if (a) {
                  var c = t.cacheHits || (t.cacheHits = []);
                  return new Promise(function (e) {
                    c.push(function () {
                      e(a);
                    });
                  });
                }
              }
              t.keys.push(e);
              var u = new Promise(function (e, r) {
                t.callbacks.push({ resolve: e, reject: r });
              });
              return r && r.set(n, u), u;
            }),
            (t.loadMany = function (e) {
              if (!o(e))
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
                var n,
                  s = this._cacheKeyFn(e);
                if (void 0 === r.get(s))
                  t instanceof Error
                    ? (n = Promise.reject(t)).catch(function () {})
                    : (n = Promise.resolve(t)),
                    r.set(s, n);
              }
              return this;
            }),
            e
          );
        })(),
        n =
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
      function s(e, t, r) {
        i(t);
        for (var n = 0; n < t.keys.length; n++)
          e.clear(t.keys[n]), t.callbacks[n].reject(r);
      }
      function i(e) {
        if (e.cacheHits)
          for (var t = 0; t < e.cacheHits.length; t++) e.cacheHits[t]();
      }
      function o(e) {
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
    54806: (e, t, r) => {
      r.d(t, { E: () => p });
      var n = r(90626),
        s = r(86709),
        i = r(45747),
        o = r(74500),
        a = r(57168);
      function c(e, t) {
        return e.filter((e) => !t.includes(e));
      }
      var u = class extends o.Q {
          #e;
          #t;
          #r;
          #n;
          #s;
          #i;
          #o;
          constructor(e, t, r) {
            super(),
              (this.#e = e),
              (this.#r = []),
              (this.#n = []),
              (this.#t = []),
              this.setQueries(t);
          }
          onSubscribe() {
            1 === this.listeners.size &&
              this.#n.forEach((e) => {
                e.subscribe((t) => {
                  this.#a(e, t);
                });
              });
          }
          onUnsubscribe() {
            this.listeners.size || this.destroy();
          }
          destroy() {
            (this.listeners = new Set()),
              this.#n.forEach((e) => {
                e.destroy();
              });
          }
          setQueries(e, t, r) {
            (this.#r = e),
              s.j.batch(() => {
                const e = this.#n,
                  t = this.#c(this.#r);
                t.forEach((e) =>
                  e.observer.setOptions(e.defaultedQueryOptions, r),
                );
                const n = t.map((e) => e.observer),
                  s = n.map((e) => e.getCurrentResult()),
                  i = n.some((t, r) => t !== e[r]);
                (e.length !== n.length || i) &&
                  ((this.#n = n),
                  (this.#t = s),
                  this.hasListeners() &&
                    (c(e, n).forEach((e) => {
                      e.destroy();
                    }),
                    c(n, e).forEach((e) => {
                      e.subscribe((t) => {
                        this.#a(e, t);
                      });
                    }),
                    this.#u()));
              });
          }
          getCurrentResult() {
            return this.#t;
          }
          getQueries() {
            return this.#n.map((e) => e.getCurrentQuery());
          }
          getObservers() {
            return this.#n;
          }
          getOptimisticResult(e, t) {
            const r = this.#c(e),
              n = r.map((e) =>
                e.observer.getOptimisticResult(e.defaultedQueryOptions),
              );
            return [
              n,
              (e) => this.#h(e ?? n, t),
              () =>
                r.map((e, t) => {
                  const s = n[t];
                  return e.defaultedQueryOptions.notifyOnChangeProps
                    ? s
                    : e.observer.trackResult(s, (e) => {
                        r.forEach((t) => {
                          t.observer.trackProp(e);
                        });
                      });
                }),
            ];
          }
          #h(e, t) {
            return t
              ? ((this.#s && this.#t === this.#o && t === this.#i) ||
                  ((this.#i = t),
                  (this.#o = this.#t),
                  (this.#s = (0, a.BH)(this.#s, t(e)))),
                this.#s)
              : e;
          }
          #c(e) {
            const t = this.#n,
              r = new Map(t.map((e) => [e.options.queryHash, e])),
              n = e.map((e) => this.#e.defaultQueryOptions(e)),
              s = n.flatMap((e) => {
                const t = r.get(e.queryHash);
                return null != t
                  ? [{ defaultedQueryOptions: e, observer: t }]
                  : [];
              }),
              o = new Set(s.map((e) => e.defaultedQueryOptions.queryHash)),
              a = n.filter((e) => !o.has(e.queryHash)),
              c = (e) => {
                const t = this.#e.defaultQueryOptions(e);
                return (
                  this.#n.find((e) => e.options.queryHash === t.queryHash) ??
                  new i.$(this.#e, t)
                );
              },
              u = a.map((e) => ({ defaultedQueryOptions: e, observer: c(e) }));
            return s
              .concat(u)
              .sort(
                (e, t) =>
                  n.indexOf(e.defaultedQueryOptions) -
                  n.indexOf(t.defaultedQueryOptions),
              );
          }
          #a(e, t) {
            const r = this.#n.indexOf(e);
            -1 !== r &&
              ((this.#t = (function (e, t, r) {
                const n = e.slice(0);
                return (n[t] = r), n;
              })(this.#t, r, t)),
              this.#u());
          }
          #u() {
            s.j.batch(() => {
              this.listeners.forEach((e) => {
                e(this.#t);
              });
            });
          }
        },
        h = r(75233),
        l = r(22730),
        f = r(43424),
        y = r(19086),
        d = r(44407);
      function p({ queries: e, ...t }, r) {
        const o = (0, h.jE)(r),
          a = (0, l.w)(),
          c = (0, f.h)(),
          p = n.useMemo(
            () =>
              e.map((e) => {
                const t = o.defaultQueryOptions(e);
                return (
                  (t._optimisticResults = a ? "isRestoring" : "optimistic"), t
                );
              }),
            [e, o, a],
          );
        p.forEach((e) => {
          (0, d.tu)(e), (0, y.LJ)(e, c);
        }),
          (0, y.wZ)(c);
        const [b] = n.useState(() => new u(o, p, t)),
          [m, v, w] = b.getOptimisticResult(p, t.combine);
        n.useSyncExternalStore(
          n.useCallback(
            (e) => (a ? () => {} : b.subscribe(s.j.batchCalls(e))),
            [b, a],
          ),
          () => b.getCurrentResult(),
          () => b.getCurrentResult(),
        ),
          n.useEffect(() => {
            b.setQueries(p, t, { listeners: !1 });
          }, [p, t, b]);
        const g = m.some((e, t) => (0, d.EU)(p[t], e))
          ? m.flatMap((e, t) => {
              const r = p[t];
              if (r) {
                const t = new i.$(o, r);
                if ((0, d.EU)(r, e)) return (0, d.iL)(r, t, c);
                (0, d.nE)(e, a) && (0, d.iL)(r, t, c);
              }
              return [];
            })
          : [];
        if (g.length > 0) throw Promise.all(g);
        const k = m.find((e, t) => {
          const r = p[t];
          return (
            r &&
            (0, y.$1)({
              result: e,
              errorResetBoundary: c,
              throwOnError: r.throwOnError,
              query: o.getQueryCache().get(r.queryHash),
            })
          );
        });
        if (k?.error) throw k.error;
        return v(w());
      }
    },
  },
]);

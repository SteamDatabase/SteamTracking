/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [7781],
  {
    45747: (t, e, r) => {
      r.d(e, { $: () => h });
      var s = r(57168),
        i = r(86709),
        n = r(54010),
        u = r(74500),
        a = r(12045),
        h = class extends u.Q {
          constructor(t, e) {
            super(),
              (this.options = e),
              (this.#t = t),
              (this.#e = null),
              this.bindMethods(),
              this.setOptions(e);
          }
          #t;
          #r = void 0;
          #s = void 0;
          #i = void 0;
          #n;
          #u;
          #e;
          #a;
          #h;
          #c;
          #o;
          #l;
          #d;
          #p = new Set();
          bindMethods() {
            this.refetch = this.refetch.bind(this);
          }
          onSubscribe() {
            1 === this.listeners.size &&
              (this.#r.addObserver(this),
              c(this.#r, this.options) ? this.#f() : this.updateResult(),
              this.#y());
          }
          onUnsubscribe() {
            this.hasListeners() || this.destroy();
          }
          shouldFetchOnReconnect() {
            return o(this.#r, this.options, this.options.refetchOnReconnect);
          }
          shouldFetchOnWindowFocus() {
            return o(this.#r, this.options, this.options.refetchOnWindowFocus);
          }
          destroy() {
            (this.listeners = new Set()),
              this.#R(),
              this.#v(),
              this.#r.removeObserver(this);
          }
          setOptions(t, e) {
            const r = this.options,
              i = this.#r;
            if (
              ((this.options = this.#t.defaultQueryOptions(t)),
              void 0 !== this.options.enabled &&
                "boolean" != typeof this.options.enabled &&
                "function" != typeof this.options.enabled &&
                "boolean" != typeof (0, s.Eh)(this.options.enabled, this.#r))
            )
              throw new Error(
                "Expected enabled to be a boolean or a callback that returns a boolean",
              );
            this.#Q(),
              this.#r.setOptions(this.options),
              r._defaulted &&
                !(0, s.f8)(this.options, r) &&
                this.#t
                  .getQueryCache()
                  .notify({
                    type: "observerOptionsUpdated",
                    query: this.#r,
                    observer: this,
                  });
            const n = this.hasListeners();
            n && l(this.#r, i, this.options, r) && this.#f(),
              this.updateResult(e),
              !n ||
                (this.#r === i &&
                  (0, s.Eh)(this.options.enabled, this.#r) ===
                    (0, s.Eh)(r.enabled, this.#r) &&
                  (0, s.d2)(this.options.staleTime, this.#r) ===
                    (0, s.d2)(r.staleTime, this.#r)) ||
                this.#b();
            const u = this.#m();
            !n ||
              (this.#r === i &&
                (0, s.Eh)(this.options.enabled, this.#r) ===
                  (0, s.Eh)(r.enabled, this.#r) &&
                u === this.#d) ||
              this.#I(u);
          }
          getOptimisticResult(t) {
            const e = this.#t.getQueryCache().build(this.#t, t),
              r = this.createResult(e, t);
            return (
              (function (t, e) {
                if (!(0, s.f8)(t.getCurrentResult(), e)) return !0;
                return !1;
              })(this, r) &&
                ((this.#i = r),
                (this.#u = this.options),
                (this.#n = this.#r.state)),
              r
            );
          }
          getCurrentResult() {
            return this.#i;
          }
          trackResult(t, e) {
            const r = {};
            return (
              Object.keys(t).forEach((s) => {
                Object.defineProperty(r, s, {
                  configurable: !1,
                  enumerable: !0,
                  get: () => (this.trackProp(s), e?.(s), t[s]),
                });
              }),
              r
            );
          }
          trackProp(t) {
            this.#p.add(t);
          }
          getCurrentQuery() {
            return this.#r;
          }
          refetch({ ...t } = {}) {
            return this.fetch({ ...t });
          }
          fetchOptimistic(t) {
            const e = this.#t.defaultQueryOptions(t),
              r = this.#t.getQueryCache().build(this.#t, e);
            return (
              (r.isFetchingOptimistic = !0),
              r.fetch().then(() => this.createResult(r, e))
            );
          }
          fetch(t) {
            return this.#f({ ...t, cancelRefetch: t.cancelRefetch ?? !0 }).then(
              () => (this.updateResult(), this.#i),
            );
          }
          #f(t) {
            this.#Q();
            let e = this.#r.fetch(this.options, t);
            return t?.throwOnError || (e = e.catch(s.lQ)), e;
          }
          #b() {
            this.#R();
            const t = (0, s.d2)(this.options.staleTime, this.#r);
            if (s.S$ || this.#i.isStale || !(0, s.gn)(t)) return;
            const e = (0, s.j3)(this.#i.dataUpdatedAt, t) + 1;
            this.#o = setTimeout(() => {
              this.#i.isStale || this.updateResult();
            }, e);
          }
          #m() {
            return (
              ("function" == typeof this.options.refetchInterval
                ? this.options.refetchInterval(this.#r)
                : this.options.refetchInterval) ?? !1
            );
          }
          #I(t) {
            this.#v(),
              (this.#d = t),
              !s.S$ &&
                !1 !== (0, s.Eh)(this.options.enabled, this.#r) &&
                (0, s.gn)(this.#d) &&
                0 !== this.#d &&
                (this.#l = setInterval(() => {
                  (this.options.refetchIntervalInBackground ||
                    n.m.isFocused()) &&
                    this.#f();
                }, this.#d));
          }
          #y() {
            this.#b(), this.#I(this.#m());
          }
          #R() {
            this.#o && (clearTimeout(this.#o), (this.#o = void 0));
          }
          #v() {
            this.#l && (clearInterval(this.#l), (this.#l = void 0));
          }
          createResult(t, e) {
            const r = this.#r,
              i = this.options,
              n = this.#i,
              u = this.#n,
              h = this.#u,
              o = t !== r ? t.state : this.#s,
              { state: p } = t;
            let f,
              y = { ...p },
              R = !1;
            if (e._optimisticResults) {
              const s = this.hasListeners(),
                n = !s && c(t, e),
                u = s && l(t, r, e, i);
              (n || u) && (y = { ...y, ...(0, a.k)(p.data, t.options) }),
                "isRestoring" === e._optimisticResults &&
                  (y.fetchStatus = "idle");
            }
            let { error: v, errorUpdatedAt: Q, status: b } = y;
            if (e.select && void 0 !== y.data)
              if (n && y.data === u?.data && e.select === this.#a) f = this.#h;
              else
                try {
                  (this.#a = e.select),
                    (f = e.select(y.data)),
                    (f = (0, s.pl)(n?.data, f, e)),
                    (this.#h = f),
                    (this.#e = null);
                } catch (t) {
                  this.#e = t;
                }
            else f = y.data;
            if (
              void 0 !== e.placeholderData &&
              void 0 === f &&
              "pending" === b
            ) {
              let t;
              if (
                n?.isPlaceholderData &&
                e.placeholderData === h?.placeholderData
              )
                t = n.data;
              else if (
                ((t =
                  "function" == typeof e.placeholderData
                    ? e.placeholderData(this.#c?.state.data, this.#c)
                    : e.placeholderData),
                e.select && void 0 !== t)
              )
                try {
                  (t = e.select(t)), (this.#e = null);
                } catch (t) {
                  this.#e = t;
                }
              void 0 !== t &&
                ((b = "success"), (f = (0, s.pl)(n?.data, t, e)), (R = !0));
            }
            this.#e &&
              ((v = this.#e), (f = this.#h), (Q = Date.now()), (b = "error"));
            const m = "fetching" === y.fetchStatus,
              I = "pending" === b,
              g = "error" === b,
              O = I && m,
              E = void 0 !== f;
            return {
              status: b,
              fetchStatus: y.fetchStatus,
              isPending: I,
              isSuccess: "success" === b,
              isError: g,
              isInitialLoading: O,
              isLoading: O,
              data: f,
              dataUpdatedAt: y.dataUpdatedAt,
              error: v,
              errorUpdatedAt: Q,
              failureCount: y.fetchFailureCount,
              failureReason: y.fetchFailureReason,
              errorUpdateCount: y.errorUpdateCount,
              isFetched: y.dataUpdateCount > 0 || y.errorUpdateCount > 0,
              isFetchedAfterMount:
                y.dataUpdateCount > o.dataUpdateCount ||
                y.errorUpdateCount > o.errorUpdateCount,
              isFetching: m,
              isRefetching: m && !I,
              isLoadingError: g && !E,
              isPaused: "paused" === y.fetchStatus,
              isPlaceholderData: R,
              isRefetchError: g && E,
              isStale: d(t, e),
              refetch: this.refetch,
            };
          }
          updateResult(t) {
            const e = this.#i,
              r = this.createResult(this.#r, this.options);
            if (
              ((this.#n = this.#r.state),
              (this.#u = this.options),
              void 0 !== this.#n.data && (this.#c = this.#r),
              (0, s.f8)(r, e))
            )
              return;
            this.#i = r;
            const i = {};
            !1 !== t?.listeners &&
              (() => {
                if (!e) return !0;
                const { notifyOnChangeProps: t } = this.options,
                  r = "function" == typeof t ? t() : t;
                if ("all" === r || (!r && !this.#p.size)) return !0;
                const s = new Set(r ?? this.#p);
                return (
                  this.options.throwOnError && s.add("error"),
                  Object.keys(this.#i).some((t) => {
                    const r = t;
                    return this.#i[r] !== e[r] && s.has(r);
                  })
                );
              })() &&
              (i.listeners = !0),
              this.#g({ ...i, ...t });
          }
          #Q() {
            const t = this.#t.getQueryCache().build(this.#t, this.options);
            if (t === this.#r) return;
            const e = this.#r;
            (this.#r = t),
              (this.#s = t.state),
              this.hasListeners() &&
                (e?.removeObserver(this), t.addObserver(this));
          }
          onQueryUpdate() {
            this.updateResult(), this.hasListeners() && this.#y();
          }
          #g(t) {
            i.j.batch(() => {
              t.listeners &&
                this.listeners.forEach((t) => {
                  t(this.#i);
                }),
                this.#t
                  .getQueryCache()
                  .notify({ query: this.#r, type: "observerResultsUpdated" });
            });
          }
        };
      function c(t, e) {
        return (
          (function (t, e) {
            return (
              !1 !== (0, s.Eh)(e.enabled, t) &&
              void 0 === t.state.data &&
              !("error" === t.state.status && !1 === e.retryOnMount)
            );
          })(t, e) ||
          (void 0 !== t.state.data && o(t, e, e.refetchOnMount))
        );
      }
      function o(t, e, r) {
        if (!1 !== (0, s.Eh)(e.enabled, t)) {
          const s = "function" == typeof r ? r(t) : r;
          return "always" === s || (!1 !== s && d(t, e));
        }
        return !1;
      }
      function l(t, e, r, i) {
        return (
          (t !== e || !1 === (0, s.Eh)(i.enabled, t)) &&
          (!r.suspense || "error" !== t.state.status) &&
          d(t, r)
        );
      }
      function d(t, e) {
        return (
          !1 !== (0, s.Eh)(e.enabled, t) &&
          t.isStaleByTime((0, s.d2)(e.staleTime, t))
        );
      }
    },
    43424: (t, e, r) => {
      r.d(e, { h: () => u });
      var s = r(90626);
      r(7850);
      function i() {
        let t = !1;
        return {
          clearReset: () => {
            t = !1;
          },
          reset: () => {
            t = !0;
          },
          isReset: () => t,
        };
      }
      var n = s.createContext(i()),
        u = () => s.useContext(n);
    },
    19086: (t, e, r) => {
      r.d(e, { $1: () => a, LJ: () => n, wZ: () => u });
      var s = r(90626),
        i = r(19866),
        n = (t, e) => {
          (t.suspense || t.throwOnError) &&
            (e.isReset() || (t.retryOnMount = !1));
        },
        u = (t) => {
          s.useEffect(() => {
            t.clearReset();
          }, [t]);
        },
        a = ({ result: t, errorResetBoundary: e, throwOnError: r, query: s }) =>
          t.isError &&
          !e.isReset() &&
          !t.isFetching &&
          s &&
          (0, i.G)(r, [t.error, s]);
    },
    22730: (t, e, r) => {
      r.d(e, { w: () => n });
      var s = r(90626),
        i = s.createContext(!1),
        n = () => s.useContext(i);
      i.Provider;
    },
    44407: (t, e, r) => {
      r.d(e, { EU: () => n, iL: () => u, nE: () => i, tu: () => s });
      var s = (t) => {
          t.suspense && "number" != typeof t.staleTime && (t.staleTime = 1e3);
        },
        i = (t, e) => t.isLoading && t.isFetching && !e,
        n = (t, e) => t?.suspense && e.isPending,
        u = (t, e, r) =>
          e.fetchOptimistic(t).catch(() => {
            r.clearReset();
          });
    },
    20194: (t, e, r) => {
      r.d(e, { I: () => l });
      var s = r(45747),
        i = r(90626),
        n = r(86709),
        u = r(43424),
        a = r(75233),
        h = r(22730),
        c = r(19086),
        o = r(44407);
      function l(t, e) {
        return (function (t, e, r) {
          const s = (0, a.jE)(r),
            l = (0, h.w)(),
            d = (0, u.h)(),
            p = s.defaultQueryOptions(t);
          s.getDefaultOptions().queries?._experimental_beforeQuery?.(p),
            (p._optimisticResults = l ? "isRestoring" : "optimistic"),
            (0, o.tu)(p),
            (0, c.LJ)(p, d),
            (0, c.wZ)(d);
          const [f] = i.useState(() => new e(s, p)),
            y = f.getOptimisticResult(p);
          if (
            (i.useSyncExternalStore(
              i.useCallback(
                (t) => {
                  const e = l ? () => {} : f.subscribe(n.j.batchCalls(t));
                  return f.updateResult(), e;
                },
                [f, l],
              ),
              () => f.getCurrentResult(),
              () => f.getCurrentResult(),
            ),
            i.useEffect(() => {
              f.setOptions(p, { listeners: !1 });
            }, [p, f]),
            (0, o.EU)(p, y))
          )
            throw (0, o.iL)(p, f, d);
          if (
            (0, c.$1)({
              result: y,
              errorResetBoundary: d,
              throwOnError: p.throwOnError,
              query: s.getQueryCache().get(p.queryHash),
            })
          )
            throw y.error;
          return (
            s.getDefaultOptions().queries?._experimental_afterQuery?.(p, y),
            p.notifyOnChangeProps ? y : f.trackResult(y)
          );
        })(t, s.$, e);
      }
    },
  },
]);

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [5836],
  {
    45048: (t, e, s) => {
      s.r(e), s.d(e, { QAndARoutes: () => o, default: () => u });
      var i = s(28579),
        r = s(90626),
        n = s(92757),
        h = s(6813),
        a = s(97058);
      const o = {
        Dashboard: (t) => `/questions/${t}/dashboard`,
        FullPageView: (t, e) => `/questions/${t}/view/${e}`,
      };
      const u = function (t) {
        return r.createElement(
          n.dO,
          null,
          r.createElement(n.qh, {
            path: o.Dashboard(":vanity_str"),
            render: (t) =>
              r.createElement(h.X, {
                config: {
                  "qanda-root": () => {
                    const { vanity_str: e } = t.match.params;
                    return r.createElement(i.xh, { vanity_str: e });
                  },
                },
              }),
          }),
          r.createElement(n.qh, {
            path: o.FullPageView(":vanity_str", ":session_gid"),
            render: (t) =>
              r.createElement(h.X, {
                config: {
                  "qanda-root": () => {
                    const { vanity_str: e, session_gid: s } = t.match.params;
                    return r.createElement(i.AC, { gidSession: s });
                  },
                },
              }),
          }),
          r.createElement(n.qh, { component: a.a }),
        );
      };
    },
    33861: (t, e, s) => {
      s.d(e, { E: () => _ });
      var i,
        r,
        n,
        h,
        a,
        o,
        u,
        c,
        l,
        d,
        f,
        p,
        S,
        m,
        y,
        O,
        v,
        b,
        q = s(90626),
        w = s(86843),
        V = s(6561),
        E = s(48767),
        g = s(57152),
        k = s(57956);
      function Q(t, e) {
        return t.filter((t) => !e.includes(t));
      }
      var j = class extends g.Q {
        constructor(t, e, s) {
          super(),
            (0, w.VK)(this, l),
            (0, w.VK)(this, f),
            (0, w.VK)(this, S),
            (0, w.VK)(this, y),
            (0, w.VK)(this, v),
            (0, w.VK)(this, i, void 0),
            (0, w.VK)(this, r, void 0),
            (0, w.VK)(this, n, void 0),
            (0, w.VK)(this, h, void 0),
            (0, w.VK)(this, a, void 0),
            (0, w.VK)(this, o, void 0),
            (0, w.VK)(this, u, void 0),
            (0, w.VK)(this, c, void 0),
            (0, w.OV)(this, i, t),
            (0, w.OV)(this, h, s),
            (0, w.OV)(this, n, []),
            (0, w.OV)(this, a, []),
            (0, w.OV)(this, r, []),
            this.setQueries(e);
        }
        onSubscribe() {
          1 === this.listeners.size &&
            (0, w.S7)(this, a).forEach((t) => {
              t.subscribe((e) => {
                (0, w.jq)(this, y, O).call(this, t, e);
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
        setQueries(t, e, s) {
          (0, w.OV)(this, n, t),
            (0, w.OV)(this, h, e),
            V.j.batch(() => {
              const t = (0, w.S7)(this, a),
                e = (0, w.jq)(this, S, m).call(this, (0, w.S7)(this, n));
              e.forEach((t) =>
                t.observer.setOptions(t.defaultedQueryOptions, s),
              );
              const i = e.map((t) => t.observer),
                h = i.map((t) => t.getCurrentResult()),
                o = i.some((e, s) => e !== t[s]);
              (t.length !== i.length || o) &&
                ((0, w.OV)(this, a, i),
                (0, w.OV)(this, r, h),
                this.hasListeners() &&
                  (Q(t, i).forEach((t) => {
                    t.destroy();
                  }),
                  Q(i, t).forEach((t) => {
                    t.subscribe((e) => {
                      (0, w.jq)(this, y, O).call(this, t, e);
                    });
                  }),
                  (0, w.jq)(this, v, b).call(this)));
            });
        }
        getCurrentResult() {
          return (0, w.S7)(this, r);
        }
        getQueries() {
          return (0, w.S7)(this, a).map((t) => t.getCurrentQuery());
        }
        getObservers() {
          return (0, w.S7)(this, a);
        }
        getOptimisticResult(t, e) {
          const s = (0, w.jq)(this, S, m)
            .call(this, t)
            .map((t) =>
              t.observer.getOptimisticResult(t.defaultedQueryOptions),
            );
          return [
            s,
            (t) => (0, w.jq)(this, f, p).call(this, t ?? s, e),
            () => (0, w.jq)(this, l, d).call(this, s, t),
          ];
        }
      };
      (i = new WeakMap()),
        (r = new WeakMap()),
        (n = new WeakMap()),
        (h = new WeakMap()),
        (a = new WeakMap()),
        (o = new WeakMap()),
        (u = new WeakMap()),
        (c = new WeakMap()),
        (l = new WeakSet()),
        (d = function (t, e) {
          const s = (0, w.jq)(this, S, m).call(this, e);
          return s.map((e, i) => {
            const r = t[i];
            return e.defaultedQueryOptions.notifyOnChangeProps
              ? r
              : e.observer.trackResult(r, (t) => {
                  s.forEach((e) => {
                    e.observer.trackProp(t);
                  });
                });
          });
        }),
        (f = new WeakSet()),
        (p = function (t, e) {
          return e
            ? (((0, w.S7)(this, o) &&
                (0, w.S7)(this, r) === (0, w.S7)(this, c) &&
                e === (0, w.S7)(this, u)) ||
                ((0, w.OV)(this, u, e),
                (0, w.OV)(this, c, (0, w.S7)(this, r)),
                (0, w.OV)(this, o, (0, k.BH)((0, w.S7)(this, o), e(t)))),
              (0, w.S7)(this, o))
            : t;
        }),
        (S = new WeakSet()),
        (m = function (t) {
          const e = new Map(
              (0, w.S7)(this, a).map((t) => [t.options.queryHash, t]),
            ),
            s = [];
          return (
            t.forEach((t) => {
              const r = (0, w.S7)(this, i).defaultQueryOptions(t),
                n = e.get(r.queryHash);
              if (n) s.push({ defaultedQueryOptions: r, observer: n });
              else {
                const t = (0, w.S7)(this, a).find(
                  (t) => t.options.queryHash === r.queryHash,
                );
                s.push({
                  defaultedQueryOptions: r,
                  observer: t ?? new E.$((0, w.S7)(this, i), r),
                });
              }
            }),
            s.sort(
              (e, s) =>
                t.findIndex(
                  (t) => t.queryHash === e.defaultedQueryOptions.queryHash,
                ) -
                t.findIndex(
                  (t) => t.queryHash === s.defaultedQueryOptions.queryHash,
                ),
            )
          );
        }),
        (y = new WeakSet()),
        (O = function (t, e) {
          const s = (0, w.S7)(this, a).indexOf(t);
          -1 !== s &&
            ((0, w.OV)(
              this,
              r,
              (function (t, e, s) {
                const i = t.slice(0);
                return (i[e] = s), i;
              })((0, w.S7)(this, r), s, e),
            ),
            (0, w.jq)(this, v, b).call(this));
        }),
        (v = new WeakSet()),
        (b = function () {
          var t;
          if (this.hasListeners()) {
            (0, w.S7)(this, o) !==
              (0, w.jq)(this, f, p).call(
                this,
                (0, w.jq)(this, l, d).call(
                  this,
                  (0, w.S7)(this, r),
                  (0, w.S7)(this, n),
                ),
                null == (t = (0, w.S7)(this, h)) ? void 0 : t.combine,
              ) &&
              V.j.batch(() => {
                this.listeners.forEach((t) => {
                  t((0, w.S7)(this, r));
                });
              });
          }
        });
      var K = s(29385),
        W = s(85010),
        C = s(8184),
        R = s(33478),
        M = s(99583),
        H = s(61314);
      function _({ queries: t, ...e }, s) {
        const i = (0, K.jE)(s),
          r = (0, W.w)(),
          n = (0, C.h)(),
          h = q.useMemo(
            () =>
              t.map((t) => {
                const e = i.defaultQueryOptions(t);
                return (
                  (e._optimisticResults = r ? "isRestoring" : "optimistic"), e
                );
              }),
            [t, i, r],
          );
        h.forEach((t) => {
          (0, M.jv)(t), (0, R.LJ)(t, n);
        }),
          (0, R.wZ)(n);
        const [a] = q.useState(() => new j(i, h, e)),
          [o, u, c] = a.getOptimisticResult(h, e.combine);
        q.useSyncExternalStore(
          q.useCallback(
            (t) => (r ? H.l : a.subscribe(V.j.batchCalls(t))),
            [a, r],
          ),
          () => a.getCurrentResult(),
          () => a.getCurrentResult(),
        ),
          q.useEffect(() => {
            a.setQueries(h, e, { listeners: !1 });
          }, [h, e, a]);
        const l = o.some((t, e) => (0, M.EU)(h[e], t))
          ? o.flatMap((t, e) => {
              const s = h[e];
              if (s) {
                const e = new E.$(i, s);
                if ((0, M.EU)(s, t)) return (0, M.iL)(s, e, n);
                (0, M.nE)(t, r) && (0, M.iL)(s, e, n);
              }
              return [];
            })
          : [];
        if (l.length > 0) throw Promise.all(l);
        const d = o.find((t, e) => {
          const s = h[e];
          return (
            s &&
            (0, R.$1)({
              result: t,
              errorResetBoundary: n,
              throwOnError: s.throwOnError,
              query: i.getQueryCache().get(s.queryHash),
            })
          );
        });
        if (null == d ? void 0 : d.error) throw d.error;
        return u(c());
      }
    },
  },
]);

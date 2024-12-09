/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [5836],
  {
    45048: (e, t, s) => {
      s.r(t), s.d(t, { QAndARoutes: () => h, default: () => u });
      var i = s(28579),
        r = s(90626),
        n = s(92757),
        o = s(6813),
        a = s(97058);
      const h = {
        Dashboard: (e) => `/questions/${e}/dashboard`,
        FullPageView: (e, t) => `/questions/${e}/view/${t}`,
      };
      const u = function (e) {
        return r.createElement(
          n.dO,
          null,
          r.createElement(n.qh, {
            path: h.Dashboard(":vanity_str"),
            render: (e) =>
              r.createElement(o.X, {
                config: {
                  "qanda-root": () => {
                    const { vanity_str: t } = e.match.params;
                    return r.createElement(i.xh, { vanity_str: t });
                  },
                },
              }),
          }),
          r.createElement(n.qh, {
            path: h.FullPageView(":vanity_str", ":session_gid"),
            render: (e) =>
              r.createElement(o.X, {
                config: {
                  "qanda-root": () => {
                    const { vanity_str: t, session_gid: s } = e.match.params;
                    return r.createElement(i.AC, { gidSession: s });
                  },
                },
              }),
          }),
          r.createElement(n.qh, { component: a.a }),
        );
      };
    },
    82477: (e, t, s) => {
      s.d(t, { vg: () => l });
      var i = s(90626),
        r = s(738),
        n = s(61859),
        o = s(78327),
        a = s(97436),
        h = s(96059),
        u = s(28240);
      s(9154);
      function c(e) {
        return i.createElement(
          r.x_,
          { onEscKeypress: e.closeModal, bDisableBackgroundDismiss: !0 },
          i.createElement(d, {
            redirectURL: e.redirectURL,
            guestOption: e.guestOption,
          }),
        );
      }
      function l() {
        (0, r.pg)(
          i.createElement(c, {
            ownerWin: window,
            redirectURL: window.location.href,
          }),
          window,
          { strTitle: (0, n.we)("#Login_SignInTitle") },
        );
      }
      function d(e) {
        const { redirectURL: t, guestOption: s } = e,
          [r] = (0, i.useState)(
            new h.D(o.TS.WEBAPI_BASE_URL).GetAnonymousServiceTransport(),
          ),
          [n, c] = (0, i.useState)(!1);
        return i.createElement(
          "div",
          null,
          n
            ? i.createElement(a.Fn, null)
            : i.createElement(
                a.YN,
                {
                  autoFocus: !0,
                  transport: r,
                  platform: 2,
                  onComplete: (e) => {
                    e == u.wI.k_PrimaryDomainFail
                      ? c(!0)
                      : window.location.assign(t);
                  },
                  redirectUrl: t,
                  theme: "modal",
                },
                s && i.createElement(a.Mk, { redirectURL: t }),
              ),
        );
      }
    },
    33861: (e, t, s) => {
      s.d(t, { E: () => L });
      var i,
        r,
        n,
        o,
        a,
        h,
        u,
        c,
        l,
        d,
        p,
        f,
        m,
        S,
        w,
        y,
        E,
        O,
        g = s(90626),
        v = s(86843),
        b = s(6561),
        q = s(48767),
        V = s(57152),
        k = s(57956);
      function R(e, t) {
        return e.filter((e) => !t.includes(e));
      }
      var Q = class extends V.Q {
        constructor(e, t, s) {
          super(),
            (0, v.VK)(this, l),
            (0, v.VK)(this, p),
            (0, v.VK)(this, m),
            (0, v.VK)(this, w),
            (0, v.VK)(this, E),
            (0, v.VK)(this, i, void 0),
            (0, v.VK)(this, r, void 0),
            (0, v.VK)(this, n, void 0),
            (0, v.VK)(this, o, void 0),
            (0, v.VK)(this, a, void 0),
            (0, v.VK)(this, h, void 0),
            (0, v.VK)(this, u, void 0),
            (0, v.VK)(this, c, void 0),
            (0, v.OV)(this, i, e),
            (0, v.OV)(this, o, s),
            (0, v.OV)(this, n, []),
            (0, v.OV)(this, a, []),
            (0, v.OV)(this, r, []),
            this.setQueries(t);
        }
        onSubscribe() {
          1 === this.listeners.size &&
            (0, v.S7)(this, a).forEach((e) => {
              e.subscribe((t) => {
                (0, v.jq)(this, w, y).call(this, e, t);
              });
            });
        }
        onUnsubscribe() {
          this.listeners.size || this.destroy();
        }
        destroy() {
          (this.listeners = new Set()),
            (0, v.S7)(this, a).forEach((e) => {
              e.destroy();
            });
        }
        setQueries(e, t, s) {
          (0, v.OV)(this, n, e),
            (0, v.OV)(this, o, t),
            b.j.batch(() => {
              const e = (0, v.S7)(this, a),
                t = (0, v.jq)(this, m, S).call(this, (0, v.S7)(this, n));
              t.forEach((e) =>
                e.observer.setOptions(e.defaultedQueryOptions, s),
              );
              const i = t.map((e) => e.observer),
                o = i.map((e) => e.getCurrentResult()),
                h = i.some((t, s) => t !== e[s]);
              (e.length !== i.length || h) &&
                ((0, v.OV)(this, a, i),
                (0, v.OV)(this, r, o),
                this.hasListeners() &&
                  (R(e, i).forEach((e) => {
                    e.destroy();
                  }),
                  R(i, e).forEach((e) => {
                    e.subscribe((t) => {
                      (0, v.jq)(this, w, y).call(this, e, t);
                    });
                  }),
                  (0, v.jq)(this, E, O).call(this)));
            });
        }
        getCurrentResult() {
          return (0, v.S7)(this, r);
        }
        getQueries() {
          return (0, v.S7)(this, a).map((e) => e.getCurrentQuery());
        }
        getObservers() {
          return (0, v.S7)(this, a);
        }
        getOptimisticResult(e, t) {
          const s = (0, v.jq)(this, m, S)
            .call(this, e)
            .map((e) =>
              e.observer.getOptimisticResult(e.defaultedQueryOptions),
            );
          return [
            s,
            (e) => (0, v.jq)(this, p, f).call(this, e ?? s, t),
            () => (0, v.jq)(this, l, d).call(this, s, e),
          ];
        }
      };
      (i = new WeakMap()),
        (r = new WeakMap()),
        (n = new WeakMap()),
        (o = new WeakMap()),
        (a = new WeakMap()),
        (h = new WeakMap()),
        (u = new WeakMap()),
        (c = new WeakMap()),
        (l = new WeakSet()),
        (d = function (e, t) {
          const s = (0, v.jq)(this, m, S).call(this, t);
          return s.map((t, i) => {
            const r = e[i];
            return t.defaultedQueryOptions.notifyOnChangeProps
              ? r
              : t.observer.trackResult(r, (e) => {
                  s.forEach((t) => {
                    t.observer.trackProp(e);
                  });
                });
          });
        }),
        (p = new WeakSet()),
        (f = function (e, t) {
          return t
            ? (((0, v.S7)(this, h) &&
                (0, v.S7)(this, r) === (0, v.S7)(this, c) &&
                t === (0, v.S7)(this, u)) ||
                ((0, v.OV)(this, u, t),
                (0, v.OV)(this, c, (0, v.S7)(this, r)),
                (0, v.OV)(this, h, (0, k.BH)((0, v.S7)(this, h), t(e)))),
              (0, v.S7)(this, h))
            : e;
        }),
        (m = new WeakSet()),
        (S = function (e) {
          const t = new Map(
              (0, v.S7)(this, a).map((e) => [e.options.queryHash, e]),
            ),
            s = [];
          return (
            e.forEach((e) => {
              const r = (0, v.S7)(this, i).defaultQueryOptions(e),
                n = t.get(r.queryHash);
              if (n) s.push({ defaultedQueryOptions: r, observer: n });
              else {
                const e = (0, v.S7)(this, a).find(
                  (e) => e.options.queryHash === r.queryHash,
                );
                s.push({
                  defaultedQueryOptions: r,
                  observer: e ?? new q.$((0, v.S7)(this, i), r),
                });
              }
            }),
            s.sort(
              (t, s) =>
                e.findIndex(
                  (e) => e.queryHash === t.defaultedQueryOptions.queryHash,
                ) -
                e.findIndex(
                  (e) => e.queryHash === s.defaultedQueryOptions.queryHash,
                ),
            )
          );
        }),
        (w = new WeakSet()),
        (y = function (e, t) {
          const s = (0, v.S7)(this, a).indexOf(e);
          -1 !== s &&
            ((0, v.OV)(
              this,
              r,
              (function (e, t, s) {
                const i = e.slice(0);
                return (i[t] = s), i;
              })((0, v.S7)(this, r), s, t),
            ),
            (0, v.jq)(this, E, O).call(this));
        }),
        (E = new WeakSet()),
        (O = function () {
          var e;
          if (this.hasListeners()) {
            (0, v.S7)(this, h) !==
              (0, v.jq)(this, p, f).call(
                this,
                (0, v.jq)(this, l, d).call(
                  this,
                  (0, v.S7)(this, r),
                  (0, v.S7)(this, n),
                ),
                null == (e = (0, v.S7)(this, o)) ? void 0 : e.combine,
              ) &&
              b.j.batch(() => {
                this.listeners.forEach((e) => {
                  e((0, v.S7)(this, r));
                });
              });
          }
        });
      var j = s(29385),
        W = s(85010),
        K = s(8184),
        C = s(33478),
        M = s(99583),
        _ = s(61314);
      function L({ queries: e, ...t }, s) {
        const i = (0, j.jE)(s),
          r = (0, W.w)(),
          n = (0, K.h)(),
          o = g.useMemo(
            () =>
              e.map((e) => {
                const t = i.defaultQueryOptions(e);
                return (
                  (t._optimisticResults = r ? "isRestoring" : "optimistic"), t
                );
              }),
            [e, i, r],
          );
        o.forEach((e) => {
          (0, M.jv)(e), (0, C.LJ)(e, n);
        }),
          (0, C.wZ)(n);
        const [a] = g.useState(() => new Q(i, o, t)),
          [h, u, c] = a.getOptimisticResult(o, t.combine);
        g.useSyncExternalStore(
          g.useCallback(
            (e) => (r ? _.l : a.subscribe(b.j.batchCalls(e))),
            [a, r],
          ),
          () => a.getCurrentResult(),
          () => a.getCurrentResult(),
        ),
          g.useEffect(() => {
            a.setQueries(o, t, { listeners: !1 });
          }, [o, t, a]);
        const l = h.some((e, t) => (0, M.EU)(o[t], e))
          ? h.flatMap((e, t) => {
              const s = o[t];
              if (s) {
                const t = new q.$(i, s);
                if ((0, M.EU)(s, e)) return (0, M.iL)(s, t, n);
                (0, M.nE)(e, r) && (0, M.iL)(s, t, n);
              }
              return [];
            })
          : [];
        if (l.length > 0) throw Promise.all(l);
        const d = h.find((e, t) => {
          const s = o[t];
          return (
            s &&
            (0, C.$1)({
              result: e,
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

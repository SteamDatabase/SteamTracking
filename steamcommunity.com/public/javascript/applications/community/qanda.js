/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [5836],
  {
    45048: (e, t, s) => {
      s.r(t), s.d(t, { QAndARoutes: () => u, default: () => c });
      var r = s(28579),
        i = s(90626),
        n = s(92757),
        o = s(6813),
        a = s(97058);
      const u = {
        Dashboard: (e) => `/questions/${e}/dashboard`,
        FullPageView: (e, t) => `/questions/${e}/view/${t}`,
      };
      const c = function (e) {
        return i.createElement(
          n.dO,
          null,
          i.createElement(n.qh, {
            path: u.Dashboard(":vanity_str"),
            render: (e) =>
              i.createElement(o.X, {
                config: {
                  "qanda-root": () => {
                    const { vanity_str: t } = e.match.params;
                    return i.createElement(r.xh, { vanity_str: t });
                  },
                },
              }),
          }),
          i.createElement(n.qh, {
            path: u.FullPageView(":vanity_str", ":session_gid"),
            render: (e) =>
              i.createElement(o.X, {
                config: {
                  "qanda-root": () => {
                    const { vanity_str: t, session_gid: s } = e.match.params;
                    return i.createElement(r.AC, { gidSession: s });
                  },
                },
              }),
          }),
          i.createElement(n.qh, { component: a.a }),
        );
      };
    },
    82477: (e, t, s) => {
      s.d(t, { vg: () => l });
      var r = s(90626),
        i = s(738),
        n = s(61859),
        o = s(78327),
        a = s(97436),
        u = s(96059),
        c = s(28240);
      s(9154);
      function h(e) {
        return r.createElement(
          i.x_,
          { onEscKeypress: e.closeModal, bDisableBackgroundDismiss: !0 },
          r.createElement(d, {
            redirectURL: e.redirectURL,
            guestOption: e.guestOption,
          }),
        );
      }
      function l() {
        (0, i.pg)(
          r.createElement(h, {
            ownerWin: window,
            redirectURL: window.location.href,
          }),
          window,
          { strTitle: (0, n.we)("#Login_SignInTitle") },
        );
      }
      function d(e) {
        const { redirectURL: t, guestOption: s } = e,
          [i] = (0, r.useState)(
            new u.D(o.TS.WEBAPI_BASE_URL).GetAnonymousServiceTransport(),
          ),
          [n, h] = (0, r.useState)(!1);
        return r.createElement(
          "div",
          null,
          n
            ? r.createElement(a.Fn, null)
            : r.createElement(
                a.YN,
                {
                  autoFocus: !0,
                  transport: i,
                  platform: 2,
                  onComplete: (e) => {
                    e == c.wI.k_PrimaryDomainFail
                      ? h(!0)
                      : window.location.assign(t);
                  },
                  redirectUrl: t,
                  theme: "modal",
                },
                s && r.createElement(a.Mk, { redirectURL: t }),
              ),
        );
      }
    },
    33861: (e, t, s) => {
      s.d(t, { E: () => W });
      var r,
        i,
        n,
        o,
        a,
        u,
        c,
        h,
        l,
        d,
        p,
        f,
        m,
        w,
        S,
        y = s(90626),
        O = s(86843),
        E = s(6561),
        g = s(48767),
        b = s(57152),
        v = s(57956);
      function V(e, t) {
        return e.filter((e) => !t.includes(e));
      }
      var q = class extends b.Q {
        constructor(e, t, s) {
          super(),
            (0, O.VK)(this, h),
            (0, O.VK)(this, d),
            (0, O.VK)(this, f),
            (0, O.VK)(this, w),
            (0, O.VK)(this, r, void 0),
            (0, O.VK)(this, i, void 0),
            (0, O.VK)(this, n, void 0),
            (0, O.VK)(this, o, void 0),
            (0, O.VK)(this, a, void 0),
            (0, O.VK)(this, u, void 0),
            (0, O.VK)(this, c, void 0),
            (0, O.OV)(this, r, e),
            (0, O.OV)(this, n, []),
            (0, O.OV)(this, o, []),
            (0, O.OV)(this, i, []),
            this.setQueries(t);
        }
        onSubscribe() {
          1 === this.listeners.size &&
            (0, O.S7)(this, o).forEach((e) => {
              e.subscribe((t) => {
                (0, O.jq)(this, f, m).call(this, e, t);
              });
            });
        }
        onUnsubscribe() {
          this.listeners.size || this.destroy();
        }
        destroy() {
          (this.listeners = new Set()),
            (0, O.S7)(this, o).forEach((e) => {
              e.destroy();
            });
        }
        setQueries(e, t, s) {
          (0, O.OV)(this, n, e),
            E.j.batch(() => {
              const e = (0, O.S7)(this, o),
                t = (0, O.jq)(this, d, p).call(this, (0, O.S7)(this, n));
              t.forEach((e) =>
                e.observer.setOptions(e.defaultedQueryOptions, s),
              );
              const r = t.map((e) => e.observer),
                a = r.map((e) => e.getCurrentResult()),
                u = r.some((t, s) => t !== e[s]);
              (e.length !== r.length || u) &&
                ((0, O.OV)(this, o, r),
                (0, O.OV)(this, i, a),
                this.hasListeners() &&
                  (V(e, r).forEach((e) => {
                    e.destroy();
                  }),
                  V(r, e).forEach((e) => {
                    e.subscribe((t) => {
                      (0, O.jq)(this, f, m).call(this, e, t);
                    });
                  }),
                  (0, O.jq)(this, w, S).call(this)));
            });
        }
        getCurrentResult() {
          return (0, O.S7)(this, i);
        }
        getQueries() {
          return (0, O.S7)(this, o).map((e) => e.getCurrentQuery());
        }
        getObservers() {
          return (0, O.S7)(this, o);
        }
        getOptimisticResult(e, t) {
          const s = (0, O.jq)(this, d, p).call(this, e),
            r = s.map((e) =>
              e.observer.getOptimisticResult(e.defaultedQueryOptions),
            );
          return [
            r,
            (e) => (0, O.jq)(this, h, l).call(this, e ?? r, t),
            () =>
              s.map((e, t) => {
                const i = r[t];
                return e.defaultedQueryOptions.notifyOnChangeProps
                  ? i
                  : e.observer.trackResult(i, (e) => {
                      s.forEach((t) => {
                        t.observer.trackProp(e);
                      });
                    });
              }),
          ];
        }
      };
      (r = new WeakMap()),
        (i = new WeakMap()),
        (n = new WeakMap()),
        (o = new WeakMap()),
        (a = new WeakMap()),
        (u = new WeakMap()),
        (c = new WeakMap()),
        (h = new WeakSet()),
        (l = function (e, t) {
          return t
            ? (((0, O.S7)(this, a) &&
                (0, O.S7)(this, i) === (0, O.S7)(this, c) &&
                t === (0, O.S7)(this, u)) ||
                ((0, O.OV)(this, u, t),
                (0, O.OV)(this, c, (0, O.S7)(this, i)),
                (0, O.OV)(this, a, (0, v.BH)((0, O.S7)(this, a), t(e)))),
              (0, O.S7)(this, a))
            : e;
        }),
        (d = new WeakSet()),
        (p = function (e) {
          const t = (0, O.S7)(this, o),
            s = new Map(t.map((e) => [e.options.queryHash, e])),
            i = e.map((e) => (0, O.S7)(this, r).defaultQueryOptions(e)),
            n = i.flatMap((e) => {
              const t = s.get(e.queryHash);
              return null != t
                ? [{ defaultedQueryOptions: e, observer: t }]
                : [];
            }),
            a = new Set(n.map((e) => e.defaultedQueryOptions.queryHash)),
            u = i.filter((e) => !a.has(e.queryHash)),
            c = (e) => {
              const t = (0, O.S7)(this, r).defaultQueryOptions(e);
              return (
                (0, O.S7)(this, o).find(
                  (e) => e.options.queryHash === t.queryHash,
                ) ?? new g.$((0, O.S7)(this, r), t)
              );
            },
            h = u.map((e) => ({ defaultedQueryOptions: e, observer: c(e) }));
          return n
            .concat(h)
            .sort(
              (e, t) =>
                i.indexOf(e.defaultedQueryOptions) -
                i.indexOf(t.defaultedQueryOptions),
            );
        }),
        (f = new WeakSet()),
        (m = function (e, t) {
          const s = (0, O.S7)(this, o).indexOf(e);
          -1 !== s &&
            ((0, O.OV)(
              this,
              i,
              (function (e, t, s) {
                const r = e.slice(0);
                return (r[t] = s), r;
              })((0, O.S7)(this, i), s, t),
            ),
            (0, O.jq)(this, w, S).call(this));
        }),
        (w = new WeakSet()),
        (S = function () {
          E.j.batch(() => {
            this.listeners.forEach((e) => {
              e((0, O.S7)(this, i));
            });
          });
        });
      var k = s(29385),
        Q = s(85010),
        R = s(8184),
        C = s(33478),
        M = s(99583);
      function W({ queries: e, ...t }, s) {
        const r = (0, k.jE)(s),
          i = (0, Q.w)(),
          n = (0, R.h)(),
          o = y.useMemo(
            () =>
              e.map((e) => {
                const t = r.defaultQueryOptions(e);
                return (
                  (t._optimisticResults = i ? "isRestoring" : "optimistic"), t
                );
              }),
            [e, r, i],
          );
        o.forEach((e) => {
          (0, M.tu)(e), (0, C.LJ)(e, n);
        }),
          (0, C.wZ)(n);
        const [a] = y.useState(() => new q(r, o, t)),
          [u, c, h] = a.getOptimisticResult(o, t.combine);
        y.useSyncExternalStore(
          y.useCallback(
            (e) => (i ? () => {} : a.subscribe(E.j.batchCalls(e))),
            [a, i],
          ),
          () => a.getCurrentResult(),
          () => a.getCurrentResult(),
        ),
          y.useEffect(() => {
            a.setQueries(o, t, { listeners: !1 });
          }, [o, t, a]);
        const l = u.some((e, t) => (0, M.EU)(o[t], e))
          ? u.flatMap((e, t) => {
              const s = o[t];
              if (s) {
                const t = new g.$(r, s);
                if ((0, M.EU)(s, e)) return (0, M.iL)(s, t, n);
                (0, M.nE)(e, i) && (0, M.iL)(s, t, n);
              }
              return [];
            })
          : [];
        if (l.length > 0) throw Promise.all(l);
        const d = u.find((e, t) => {
          const s = o[t];
          return (
            s &&
            (0, C.$1)({
              result: e,
              errorResetBoundary: n,
              throwOnError: s.throwOnError,
              query: r.getQueryCache().get(s.queryHash),
            })
          );
        });
        if (null == d ? void 0 : d.error) throw d.error;
        return c(h());
      }
    },
  },
]);

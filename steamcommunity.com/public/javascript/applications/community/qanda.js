/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [5836],
  {
    45048: (e, t, s) => {
      s.r(t), s.d(t, { QAndARoutes: () => a, default: () => c });
      var r = s(28579),
        i = s(90626),
        n = s(92757),
        o = s(6813),
        u = s(97058);
      const a = {
        Dashboard: (e) => `/questions/${e}/dashboard`,
        FullPageView: (e, t) => `/questions/${e}/view/${t}`,
      };
      const c = function (e) {
        return i.createElement(
          n.dO,
          null,
          i.createElement(n.qh, {
            path: a.Dashboard(":vanity_str"),
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
            path: a.FullPageView(":vanity_str", ":session_gid"),
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
          i.createElement(n.qh, { component: u.a }),
        );
      };
    },
    82477: (e, t, s) => {
      s.d(t, { vg: () => h });
      var r = s(90626),
        i = s(738),
        n = s(61859),
        o = s(78327),
        u = s(97436),
        a = s(96059),
        c = s(28240);
      s(9154);
      function l(e) {
        return r.createElement(
          i.x_,
          { onEscKeypress: e.closeModal, bDisableBackgroundDismiss: !0 },
          r.createElement(d, {
            redirectURL: e.redirectURL,
            guestOption: e.guestOption,
          }),
        );
      }
      function h() {
        (0, i.pg)(
          r.createElement(l, {
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
            new a.D(o.TS.WEBAPI_BASE_URL).GetAnonymousServiceTransport(),
          ),
          [n, l] = (0, r.useState)(!1);
        return r.createElement(
          "div",
          null,
          n
            ? r.createElement(u.Fn, null)
            : r.createElement(
                u.YN,
                {
                  autoFocus: !0,
                  transport: i,
                  platform: 2,
                  onComplete: (e) => {
                    e == c.wI.k_PrimaryDomainFail
                      ? l(!0)
                      : window.location.assign(t);
                  },
                  redirectUrl: t,
                  theme: "modal",
                },
                s && r.createElement(u.Mk, { redirectURL: t }),
              ),
        );
      }
    },
    23888: (e, t, s) => {
      s.d(t, { E: () => p });
      var r = s(90626),
        i = s(14097),
        n = s(45839),
        o = s(52368),
        u = s(70996);
      function a(e, t) {
        return e.filter((e) => !t.includes(e));
      }
      var c = class extends o.Q {
          #e;
          #t;
          #s;
          #r;
          #i;
          #n;
          #o;
          #u;
          constructor(e, t, s) {
            super(),
              (this.#e = e),
              (this.#r = s),
              (this.#s = []),
              (this.#i = []),
              (this.#t = []),
              this.setQueries(t);
          }
          onSubscribe() {
            1 === this.listeners.size &&
              this.#i.forEach((e) => {
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
              this.#i.forEach((e) => {
                e.destroy();
              });
          }
          setQueries(e, t, s) {
            (this.#s = e),
              (this.#r = t),
              i.j.batch(() => {
                const e = this.#i,
                  t = this.#c(this.#s);
                t.forEach((e) =>
                  e.observer.setOptions(e.defaultedQueryOptions, s),
                );
                const r = t.map((e) => e.observer),
                  i = r.map((e) => e.getCurrentResult()),
                  n = r.some((t, s) => t !== e[s]);
                (e.length !== r.length || n) &&
                  ((this.#i = r),
                  (this.#t = i),
                  this.hasListeners() &&
                    (a(e, r).forEach((e) => {
                      e.destroy();
                    }),
                    a(r, e).forEach((e) => {
                      e.subscribe((t) => {
                        this.#a(e, t);
                      });
                    }),
                    this.#l()));
              });
          }
          getCurrentResult() {
            return this.#t;
          }
          getQueries() {
            return this.#i.map((e) => e.getCurrentQuery());
          }
          getObservers() {
            return this.#i;
          }
          getOptimisticResult(e, t) {
            const s = this.#c(e).map((e) =>
              e.observer.getOptimisticResult(e.defaultedQueryOptions),
            );
            return [s, (e) => this.#h(e ?? s, t), () => this.#d(s, e)];
          }
          #d(e, t) {
            const s = this.#c(t);
            return s.map((t, r) => {
              const i = e[r];
              return t.defaultedQueryOptions.notifyOnChangeProps
                ? i
                : t.observer.trackResult(i, (e) => {
                    s.forEach((t) => {
                      t.observer.trackProp(e);
                    });
                  });
            });
          }
          #h(e, t) {
            return t
              ? ((this.#n && this.#t === this.#u && t === this.#o) ||
                  ((this.#o = t),
                  (this.#u = this.#t),
                  (this.#n = (0, u.BH)(this.#n, t(e)))),
                this.#n)
              : e;
          }
          #c(e) {
            const t = new Map(this.#i.map((e) => [e.options.queryHash, e])),
              s = [];
            return (
              e.forEach((e) => {
                const r = this.#e.defaultQueryOptions(e),
                  i = t.get(r.queryHash);
                if (i) s.push({ defaultedQueryOptions: r, observer: i });
                else {
                  const e = this.#i.find(
                    (e) => e.options.queryHash === r.queryHash,
                  );
                  s.push({
                    defaultedQueryOptions: r,
                    observer: e ?? new n.$(this.#e, r),
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
          }
          #a(e, t) {
            const s = this.#i.indexOf(e);
            -1 !== s &&
              ((this.#t = (function (e, t, s) {
                const r = e.slice(0);
                return (r[t] = s), r;
              })(this.#t, s, t)),
              this.#l());
          }
          #l() {
            if (this.hasListeners()) {
              this.#n !==
                this.#h(this.#d(this.#t, this.#s), this.#r?.combine) &&
                i.j.batch(() => {
                  this.listeners.forEach((e) => {
                    e(this.#t);
                  });
                });
            }
          }
        },
        l = s(29385),
        h = s(85010),
        d = s(8184),
        m = s(33478),
        b = s(99583),
        f = s(61314);
      function p({ queries: e, ...t }, s) {
        const o = (0, l.jE)(s),
          u = (0, h.w)(),
          a = (0, d.h)(),
          p = r.useMemo(
            () =>
              e.map((e) => {
                const t = o.defaultQueryOptions(e);
                return (
                  (t._optimisticResults = u ? "isRestoring" : "optimistic"), t
                );
              }),
            [e, o, u],
          );
        p.forEach((e) => {
          (0, b.jv)(e), (0, m.LJ)(e, a);
        }),
          (0, m.wZ)(a);
        const [y] = r.useState(() => new c(o, p, t)),
          [g, v, E] = y.getOptimisticResult(p, t.combine);
        r.useSyncExternalStore(
          r.useCallback(
            (e) => (u ? f.l : y.subscribe(i.j.batchCalls(e))),
            [y, u],
          ),
          () => y.getCurrentResult(),
          () => y.getCurrentResult(),
        ),
          r.useEffect(() => {
            y.setQueries(p, t, { listeners: !1 });
          }, [p, t, y]);
        const R = g.some((e, t) => (0, b.EU)(p[t], e))
          ? g.flatMap((e, t) => {
              const s = p[t];
              if (s) {
                const t = new n.$(o, s);
                if ((0, b.EU)(s, e)) return (0, b.iL)(s, t, a);
                (0, b.nE)(e, u) && (0, b.iL)(s, t, a);
              }
              return [];
            })
          : [];
        if (R.length > 0) throw Promise.all(R);
        const w = g.find((e, t) => {
          const s = p[t];
          return (
            s &&
            (0, m.$1)({
              result: e,
              errorResetBoundary: a,
              throwOnError: s.throwOnError,
              query: o.getQueryCache().get(s.queryHash),
            })
          );
        });
        if (null == w ? void 0 : w.error) throw w.error;
        return v(E());
      }
    },
  },
]);

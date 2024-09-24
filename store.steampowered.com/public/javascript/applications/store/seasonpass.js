/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [5139],
  {
    66618: (e) => {
      e.exports = {
        SeasonPass: "_2Bwk-8eR05R2CUhVO2vLSO",
        UpdateButton: "_1zVTTPQ0jiUiJrDrM5WDJs",
        Strike: "beE-h2-Nw_6g1LqM9LyaK",
      };
    },
    85227: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, { default: () => m });
      var r = s(90626),
        n = s(66618),
        i = s.n(n),
        o = s(61859),
        a = s(63369),
        u = s(55263),
        l = s(66418),
        c = s(8107),
        h = s(38390),
        d = s(91254);
      function m(e) {
        const { season_pass: t } = e;
        return t && t.milestones && 0 != t.milestones.length
          ? r.createElement(
              "div",
              null,
              r.createElement("h2", null, (0, o.we)("#SeasonPass_Header")),
              t.milestones
                .sort((e, t) => e.dates[0].rtime - t.dates[0].rtime)
                .map((e) =>
                  r.createElement(p, {
                    milestone: e,
                    key: "ms_" + e.milestone_id,
                  }),
                ),
            )
          : null;
      }
      function p(e) {
        const { milestone: t } = e;
        return r.createElement(
          "div",
          null,
          r.createElement(f, { milestone: t }),
          o.A0.GetTokenWithFallback(t.title),
          Boolean(t.shipped) && r.createElement(y, { milestone: t }),
        );
      }
      function f(e) {
        const { milestone: t } = e;
        return t.shipped
          ? r.createElement(
              r.Fragment,
              null,
              (0, o.we)("#SeasonPass_Available"),
            )
          : r.createElement(
              r.Fragment,
              null,
              t.dates.reverse().map((e, s) => {
                const n = (0, a.M)(e.coming_soon_display_type, e.rtime);
                return r.createElement(
                  "div",
                  {
                    key: "dd" + e.rtime + e.coming_soon_display_type,
                    className: s + 1 < t.dates.length ? i().Strike : void 0,
                  },
                  n,
                );
              }),
            );
      }
      const b = {};
      function y(e) {
        const { milestone: t } = e,
          [s] = (0, u.t7)(t.appid, b),
          [n, i] = (0, r.useState)(!1),
          a = (0, h.RR)(t.event_gid);
        return r.createElement(
          r.Fragment,
          null,
          r.createElement(
            "a",
            {
              href:
                s?.GetStorePageURL() || `${l.T.STORE_BASE_URL}app/${t.appid}`,
            },
            (0, o.we)("#SeasonPass_ShowStore"),
          ),
          Boolean(t.event_gid && a) &&
            r.createElement(
              r.Fragment,
              null,
              r.createElement(
                "a",
                { href: "#", onClick: () => i(!0) },
                (0, o.we)("#SeasonPass_ReadEvent"),
              ),
              Boolean(n) &&
                r.createElement(c.N, {
                  appid: t.appid,
                  eventModel: a,
                  announcementGID: a.AnnouncementGID,
                  closeModal: () => i(!1),
                  partnerEventStore: d.O3,
                }),
            ),
        );
      }
    },
    54806: (e, t, s) => {
      "use strict";
      s.d(t, { E: () => f });
      var r = s(90626),
        n = s(86709),
        i = s(45747),
        o = s(74500),
        a = s(57168);
      function u(e, t) {
        return e.filter((e) => !t.includes(e));
      }
      var l = class extends o.Q {
          #e;
          #t;
          #s;
          #r;
          #n;
          #i;
          #o;
          constructor(e, t, s) {
            super(),
              (this.#e = e),
              (this.#s = []),
              (this.#r = []),
              (this.#t = []),
              this.setQueries(t);
          }
          onSubscribe() {
            1 === this.listeners.size &&
              this.#r.forEach((e) => {
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
              this.#r.forEach((e) => {
                e.destroy();
              });
          }
          setQueries(e, t, s) {
            (this.#s = e),
              n.j.batch(() => {
                const e = this.#r,
                  t = this.#u(this.#s);
                t.forEach((e) =>
                  e.observer.setOptions(e.defaultedQueryOptions, s),
                );
                const r = t.map((e) => e.observer),
                  n = r.map((e) => e.getCurrentResult()),
                  i = r.some((t, s) => t !== e[s]);
                (e.length !== r.length || i) &&
                  ((this.#r = r),
                  (this.#t = n),
                  this.hasListeners() &&
                    (u(e, r).forEach((e) => {
                      e.destroy();
                    }),
                    u(r, e).forEach((e) => {
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
            return this.#r.map((e) => e.getCurrentQuery());
          }
          getObservers() {
            return this.#r;
          }
          getOptimisticResult(e, t) {
            const s = this.#u(e),
              r = s.map((e) =>
                e.observer.getOptimisticResult(e.defaultedQueryOptions),
              );
            return [
              r,
              (e) => this.#c(e ?? r, t),
              () =>
                s.map((e, t) => {
                  const n = r[t];
                  return e.defaultedQueryOptions.notifyOnChangeProps
                    ? n
                    : e.observer.trackResult(n, (e) => {
                        s.forEach((t) => {
                          t.observer.trackProp(e);
                        });
                      });
                }),
            ];
          }
          #c(e, t) {
            return t
              ? ((this.#n && this.#t === this.#o && t === this.#i) ||
                  ((this.#i = t),
                  (this.#o = this.#t),
                  (this.#n = (0, a.BH)(this.#n, t(e)))),
                this.#n)
              : e;
          }
          #u(e) {
            const t = this.#r,
              s = new Map(t.map((e) => [e.options.queryHash, e])),
              r = e.map((e) => this.#e.defaultQueryOptions(e)),
              n = r.flatMap((e) => {
                const t = s.get(e.queryHash);
                return null != t
                  ? [{ defaultedQueryOptions: e, observer: t }]
                  : [];
              }),
              o = new Set(n.map((e) => e.defaultedQueryOptions.queryHash)),
              a = r.filter((e) => !o.has(e.queryHash)),
              u = (e) => {
                const t = this.#e.defaultQueryOptions(e);
                return (
                  this.#r.find((e) => e.options.queryHash === t.queryHash) ??
                  new i.$(this.#e, t)
                );
              },
              l = a.map((e) => ({ defaultedQueryOptions: e, observer: u(e) }));
            return n
              .concat(l)
              .sort(
                (e, t) =>
                  r.indexOf(e.defaultedQueryOptions) -
                  r.indexOf(t.defaultedQueryOptions),
              );
          }
          #a(e, t) {
            const s = this.#r.indexOf(e);
            -1 !== s &&
              ((this.#t = (function (e, t, s) {
                const r = e.slice(0);
                return (r[t] = s), r;
              })(this.#t, s, t)),
              this.#l());
          }
          #l() {
            n.j.batch(() => {
              this.listeners.forEach((e) => {
                e(this.#t);
              });
            });
          }
        },
        c = s(75233),
        h = s(22730),
        d = s(43424),
        m = s(19086),
        p = s(44407);
      function f({ queries: e, ...t }, s) {
        const o = (0, c.jE)(s),
          a = (0, h.w)(),
          u = (0, d.h)(),
          f = r.useMemo(
            () =>
              e.map((e) => {
                const t = o.defaultQueryOptions(e);
                return (
                  (t._optimisticResults = a ? "isRestoring" : "optimistic"), t
                );
              }),
            [e, o, a],
          );
        f.forEach((e) => {
          (0, p.tu)(e), (0, m.LJ)(e, u);
        }),
          (0, m.wZ)(u);
        const [b] = r.useState(() => new l(o, f, t)),
          [y, v, E] = b.getOptimisticResult(f, t.combine);
        r.useSyncExternalStore(
          r.useCallback(
            (e) => (a ? () => {} : b.subscribe(n.j.batchCalls(e))),
            [b, a],
          ),
          () => b.getCurrentResult(),
          () => b.getCurrentResult(),
        ),
          r.useEffect(() => {
            b.setQueries(f, t, { listeners: !1 });
          }, [f, t, b]);
        const g = y.some((e, t) => (0, p.EU)(f[t], e))
          ? y.flatMap((e, t) => {
              const s = f[t];
              if (s) {
                const t = new i.$(o, s);
                if ((0, p.EU)(s, e)) return (0, p.iL)(s, t, u);
                (0, p.nE)(e, a) && (0, p.iL)(s, t, u);
              }
              return [];
            })
          : [];
        if (g.length > 0) throw Promise.all(g);
        const O = y.find((e, t) => {
          const s = f[t];
          return (
            s &&
            (0, m.$1)({
              result: e,
              errorResetBoundary: u,
              throwOnError: s.throwOnError,
              query: o.getQueryCache().get(s.queryHash),
            })
          );
        });
        if (O?.error) throw O.error;
        return v(E());
      }
    },
  },
]);

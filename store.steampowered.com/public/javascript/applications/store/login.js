/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [96966],
    {
      179: (h, E, r) => {
        "use strict";
        r.d(E, {
          Bm: () => a,
          QD: () => u,
          f3: () => P,
          iV: () => D,
          ip: () => f,
          le: () => g,
        });
        var i = r(90626),
          _ = r(92757);
        function P(n, s) {
          let e;
          if (typeof n == "string") e = n;
          else if ("location" in n) e = n.location.search;
          else if ("search" in n) e = n.search;
          else return;
          const o = new URLSearchParams(e.substring(1));
          if (o.has(s)) {
            const t = o.getAll(s);
            return t[t.length - 1];
          }
        }
        function a(n, s, e, o = !1) {
          const t = new URLSearchParams(n.location.search.substring(1));
          if (e != null && e != null) {
            if (t.get(s) == e) return;
            t.set(s, e);
          } else {
            if (!t.has(s)) return;
            t.delete(s);
          }
          o
            ? n.replace(`?${t.toString()}`, { ...n.location.state })
            : n.push(`?${t.toString()}`);
        }
        function g(n, s, e) {
          a(n, s, e, !0);
        }
        function u(n, s) {
          const e = (0, _.W6)(),
            o = (0, _.zy)(),
            t = (0, i.useMemo)(() => {
              const l = P(o.search, n);
              return l != null && l != null
                ? s != null && s != null
                  ? typeof s == "boolean"
                    ? s.constructor(l !== "false")
                    : s.constructor(l)
                  : l
                : s;
            }, [o.search, n, s]),
            c = (0, i.useCallback)(
              (l, U = !1) => {
                a(e, n, l != null && l != null ? String(l) : null, U);
              },
              [e, n],
            );
          return [t, c];
        }
        function f(n, s, e = !1) {
          const o = new URLSearchParams(n.location.search.substring(1));
          for (const t in s)
            if (s.hasOwnProperty(t)) {
              const c = s[t];
              o.delete(t), c != null && c != null && o.append(t, c);
            }
          e
            ? n.replace(`?${o.toString()}`, { ...n.location.state })
            : n.push(`?${o.toString()}`);
        }
        function D(n, s) {
          f(n, s, !0);
        }
      },
      99170: (h, E, r) => {
        "use strict";
        r.r(E), r.d(E, { default: () => s });
        var i = r(7850),
          _ = r(67692),
          P = r.n(_),
          a = r(90626),
          g = r(87242),
          u = r(74974),
          f = r(6740),
          D = r(3166),
          n = r(68312);
        function s(e) {
          const { redirectUrl: o = D.TS.STORE_BASE_URL } = e,
            t = (0, n.rW)(),
            [c, l] = (0, a.useState)(!1),
            U = e.guest,
            M = (d) => {
              d == g.wI.k_PrimaryDomainFail ? l(!0) : window.location.assign(o);
            };
          return (0, i.jsx)("div", {
            className: _.LoginContainer,
            children: c
              ? (0, i.jsx)(u.Fn, {})
              : (0, i.jsx)(u.YN, {
                  autoFocus: !0,
                  transport: t,
                  platform: f.SS.tS,
                  onComplete: M,
                  redirectUrl: o,
                  children:
                    U && (0, i.jsx)(u.Mk, { redirectURL: e.redirectUrl }),
                }),
          });
        }
      },
      67692: (h) => {
        h.exports = { LoginContainer: "_2kLRmRsLwjGDlm-ZfUpChG" };
      },
    },
  ]);
})();

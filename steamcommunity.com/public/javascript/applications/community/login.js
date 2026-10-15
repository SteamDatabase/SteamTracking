/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [96966],
    {
      75793: (D, u, o) => {
        "use strict";
        o.r(u), o.d(u, { default: () => t });
        var l = o(7850),
          c = o(90626),
          E = o(87242),
          a = o(42780),
          M = o(94276),
          g = o(62179),
          f = o(77008),
          P = o(3166),
          n = o(9211),
          s = o.n(n);
        function t(r) {
          const { redirectUrl: e = P.TS.COMMUNITY_BASE_URL } = r,
            [i] = (0, c.useState)(
              new g.x(
                new f.D(P.TS.WEBAPI_BASE_URL),
              ).GetAnonymousServiceTransport(),
            ),
            [_, h] = (0, c.useState)(!1),
            U = (v) => {
              v == E.wI.k_PrimaryDomainFail ? h(!0) : window.location.assign(e);
            };
          return (0, l.jsx)("div", {
            className: n.LoginContainer,
            children: _
              ? (0, l.jsx)(a.Fn, {})
              : (0, l.jsx)(a.YN, {
                  autoFocus: !0,
                  transport: i,
                  platform: M.SS.tS,
                  onComplete: U,
                  redirectUrl: e,
                }),
          });
        }
      },
      179: (D, u, o) => {
        "use strict";
        o.d(u, {
          Bm: () => a,
          QD: () => g,
          f3: () => E,
          iV: () => P,
          ip: () => f,
          le: () => M,
        });
        var l = o(90626),
          c = o(92757);
        function E(n, s) {
          let t;
          if (typeof n == "string") t = n;
          else if ("location" in n) t = n.location.search;
          else if ("search" in n) t = n.search;
          else return;
          const r = new URLSearchParams(t.substring(1));
          if (r.has(s)) {
            const e = r.getAll(s);
            return e[e.length - 1];
          }
        }
        function a(n, s, t, r = !1) {
          const e = new URLSearchParams(n.location.search.substring(1));
          if (t != null && t != null) {
            if (e.get(s) == t) return;
            e.set(s, t);
          } else {
            if (!e.has(s)) return;
            e.delete(s);
          }
          r
            ? n.replace(`?${e.toString()}`, { ...n.location.state })
            : n.push(`?${e.toString()}`);
        }
        function M(n, s, t) {
          a(n, s, t, !0);
        }
        function g(n, s) {
          const t = (0, c.W6)(),
            r = (0, c.zy)(),
            e = (0, l.useMemo)(() => {
              const _ = E(r.search, n);
              return _ != null && _ != null
                ? s != null && s != null
                  ? typeof s == "boolean"
                    ? s.constructor(_ !== "false")
                    : s.constructor(_)
                  : _
                : s;
            }, [r.search, n, s]),
            i = (0, l.useCallback)(
              (_, h = !1) => {
                a(t, n, _ != null && _ != null ? String(_) : null, h);
              },
              [t, n],
            );
          return [e, i];
        }
        function f(n, s, t = !1) {
          const r = new URLSearchParams(n.location.search.substring(1));
          for (const e in s)
            if (s.hasOwnProperty(e)) {
              const i = s[e];
              r.delete(e), i != null && i != null && r.append(e, i);
            }
          t
            ? n.replace(`?${r.toString()}`, { ...n.location.state })
            : n.push(`?${r.toString()}`);
        }
        function P(n, s) {
          f(n, s, !0);
        }
      },
      9211: (D) => {
        D.exports = { LoginContainer: "_2vAS_iK_bJ7iv_7pRL7Zdk" };
      },
    },
  ]);
})();

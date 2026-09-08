/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [7108],
  {
    72854: (e) => {
      e.exports = { Table: "_2H4PpVokNS3DA0bvEZgYk3" };
    },
    3191: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, { default: () => h });
      var r = s(7850),
        n = s(90626),
        o = s(84811),
        l = s(72854),
        a = s.n(l),
        c = s(12493),
        i = s(7860),
        d = s(22797);
      function h(e) {
        const { creatorHomes: t } = e,
          [s, l] = n.useState(!0),
          [h, m] = n.useState(void 0),
          [p, x] = n.useState(0);
        return (
          n.useEffect(() => {
            if (!t) return;
            (async () => {
              const e = [];
              for (let s = 0; s < t.length; s += 10) {
                const r = t
                    .slice(s, s + 10)
                    .map((e) => i.L.fetchQuery((0, c.A2)(Number(e.accountid)))),
                  n = await Promise.all(r);
                e.push(...n);
                const o = [...e].sort(
                  (e, t) => t.GetNumFollowers() - e.GetNumFollowers(),
                );
                m(o), x(s);
              }
              l(!1);
            })();
          }, [t]),
          h && t
            ? (0, r.jsxs)(o.tH, {
                children: [
                  s &&
                    (0, r.jsxs)("span", {
                      children: [
                        (0, r.jsx)("span", { children: "Loading: " }),
                        (0, r.jsxs)("span", {
                          children: [p + 1, " / ", t.length],
                        }),
                        (0, r.jsx)(d.t, { size: "small" }),
                      ],
                    }),
                  (0, r.jsxs)("table", {
                    className: a().Table,
                    children: [
                      (0, r.jsx)("thead", {
                        children: (0, r.jsxs)("tr", {
                          children: [
                            (0, r.jsx)("th", { children: "Name" }),
                            (0, r.jsx)("th", { children: "Followers" }),
                          ],
                        }),
                      }),
                      (0, r.jsx)("tbody", {
                        children: h.map((e) =>
                          (0, r.jsx)(
                            u,
                            { creatorHome: e },
                            e.GetClanAccountID(),
                          ),
                        ),
                      }),
                    ],
                  }),
                ],
              })
            : (0, r.jsx)(d.t, {})
        );
      }
      function u(e) {
        const { creatorHome: t } = e;
        return (0, r.jsxs)("tr", {
          children: [
            (0, r.jsx)("td", {
              children: (0, r.jsx)("a", {
                href: t.GetCreatorHomeURL("developer"),
                target: "_blank",
                rel: "noopener noreferrer",
                children: t.GetName(),
              }),
            }),
            (0, r.jsx)("td", { children: t.GetNumFollowers() }),
          ],
        });
      }
    },
    63340: (e, t, s) => {
      "use strict";
      function r(e, t) {
        "undefined" != typeof window && (window[e] = t);
      }
      s.d(t, { V: () => r });
    },
  },
]);

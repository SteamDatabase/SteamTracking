/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [30140],
    {
      23980: (y, I, e) => {
        "use strict";
        e.d(I, { A: () => M });
        var s = e(7850),
          _ = e(90626),
          r = e(561),
          c = e(87100),
          f = e.n(c),
          j = e(56718),
          D = e(36707);
        function M(a) {
          const [i, C] = (0, _.useState)(!1),
            m = (0, _.useRef)(null),
            O = (P) => (
              C(!0),
              P.stopPropagation(),
              navigator.clipboard.writeText(a.text),
              setTimeout(() => C(!1), 1e3),
              !1
            );
          return (0, s.jsx)("span", {
            children: (0, s.jsxs)("button", {
              onClick: O,
              className: (0, D.A)(
                c.CopyButton,
                a.size === "large" ? c.BigButton : c.NormalButton,
              ),
              ref: m,
              title: a.text,
              children: [
                i &&
                  m.current &&
                  (0, s.jsx)(r.g, {
                    target: m.current,
                    direction: "bottom",
                    children: (0, s.jsx)("div", {
                      className: c.CopiedNotice,
                      children: "Copied.",
                    }),
                  }),
                (0, s.jsx)(j.cKB, {}),
              ],
            }),
          });
        }
      },
      92083: (y, I, e) => {
        "use strict";
        e.r(I),
          e.d(I, {
            default: () => m,
            useAcquitForumComment: () => P,
            useSanctionForumComment: () => v,
          });
        var s = e(7850),
          _ = e(64981),
          r = e(46085),
          c = e(86392),
          f = e(68312),
          j = e(29385),
          D = e(61739),
          M = e(35038),
          a = e(90109),
          i = e(23980),
          C = e(23582);
        function m(t) {
          const d = (
              (0, r.w3)({ subject_type: _.lN, topic: t.topicId }).data
                ?.subjects ?? []
            ).find((E) => E.coordinates?.comment === t.subjectId),
            u = v(
              t.clanSteamId,
              t.forumId,
              t.topicId,
              t.subjectId,
              d?.reported_content_id,
            ),
            l = P(
              t.clanSteamId,
              t.forumId,
              t.topicId,
              t.subjectId,
              d?.reported_content_id,
            );
          return (0, s.jsx)(C.l, {
            sanctionMutation: u,
            acquitMutation: l,
            subject: d,
            eSubjectType: _.lN,
            gidComment: t.subjectId,
            authorSteamID: t.authorSteamId,
            clanSteamID: t.clanSteamId,
            children: (0, s.jsx)(O, { ...t }),
          });
        }
        function O(t) {
          return (0, s.jsx)("table", {
            children: (0, s.jsxs)("tbody", {
              children: [
                (0, s.jsxs)("tr", {
                  children: [
                    (0, s.jsx)("td", { children: "Clan SteamID:" }),
                    (0, s.jsxs)("td", {
                      children: [
                        t.clanSteamId,
                        " ",
                        (0, s.jsx)(i.A, { text: t.clanSteamId, size: "small" }),
                      ],
                    }),
                  ],
                }),
                (0, s.jsxs)("tr", {
                  children: [
                    (0, s.jsx)("td", { children: "Forum GID:" }),
                    (0, s.jsxs)("td", {
                      children: [
                        t.forumId,
                        " ",
                        (0, s.jsx)(i.A, { text: t.forumId, size: "small" }),
                      ],
                    }),
                  ],
                }),
                (0, s.jsxs)("tr", {
                  children: [
                    (0, s.jsx)("td", { children: "Topic GID:" }),
                    (0, s.jsxs)("td", {
                      children: [
                        t.topicId,
                        " ",
                        (0, s.jsx)(i.A, { text: t.topicId, size: "small" }),
                      ],
                    }),
                  ],
                }),
                t.subjectId !== c.Ie &&
                  (0, s.jsxs)("tr", {
                    children: [
                      (0, s.jsx)("td", { children: "Comment GID:" }),
                      (0, s.jsxs)("td", {
                        children: [
                          t.subjectId,
                          " ",
                          (0, s.jsx)(i.A, { text: t.subjectId, size: "small" }),
                        ],
                      }),
                    ],
                  }),
              ],
            }),
          });
        }
        function P(t, B, d, u, l) {
          const E = (0, f.KV)(),
            h = (0, j.jE)();
          return (0, D.n)({
            mutationFn: async () => {
              const o = M.w.Init(a.Km);
              o.Body().set_steamid(t),
                o.Body().set_gidforum(B),
                o.Body().set_gidtopic(d),
                o.Body().set_gidpost(u);
              const n = await a.el.ResolveReportedPost(E, o);
              if (!n.BSuccess())
                throw new Error(
                  "Failed to acquit forum comment: " + n.GetEMsg(),
                );
            },
            onSuccess: async (o) => {
              await (0, r.Ky)(h, l);
            },
          });
        }
        function v(t, B, d, u, l) {
          const E = (0, f.KV)(),
            h = (0, j.jE)();
          return (0, D.n)({
            mutationFn: async (o) => {
              const n = M.w.Init(a.FD);
              n.Body().set_steamid(t),
                n.Body().set_gidforum(B),
                n.Body().set_gidtopic(d),
                n.Body().set_gidpost(u),
                n.Body().set_reason(o.reason),
                n.Body().set_note(o.message);
              for (const g of o.sanctions) {
                const R = new a.RQ();
                R.set_sanction(g.sanction),
                  g.days !== void 0 && R.set_days(g.days),
                  n.Body().add_sanctions(R);
              }
              const x = await a.el.SanctionReportedPost(E, n);
              if (!x.BSuccess())
                throw new Error(
                  "Failed to sanction forum comment: (" +
                    x.GetEResult() +
                    ") " +
                    x.GetErrorMessage(),
                );
            },
            onSuccess: async (o) => {
              await (0, r.Ky)(h, l);
            },
          });
        }
      },
      87100: (y) => {
        y.exports = {
          CopyButton: "_2IGMSIG6hbIQPg-K1KoY-W",
          CopiedNotice: "_1G568MNm7rDJNLFkzReXEc",
          BigButton: "_3QFnwUCRHpPU2YWoxMv2b8",
          NormalButton: "TLP9bd53vhNfYhUroF4Np",
        };
      },
    },
  ]);
})();

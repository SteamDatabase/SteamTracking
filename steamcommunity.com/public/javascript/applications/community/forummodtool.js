/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [30140],
    {
      23980: (f, j, o) => {
        "use strict";
        o.d(j, { A: () => C });
        var s = o(7850),
          u = o(90626),
          m = o(561),
          c = o(87100),
          O = o.n(c),
          D = o(56718),
          M = o(36707);
        function C(a) {
          const [i, P] = (0, u.useState)(!1),
            l = (0, u.useRef)(null),
            h = (B) => (
              P(!0),
              B.stopPropagation(),
              navigator.clipboard.writeText(a.text),
              setTimeout(() => P(!1), 1e3),
              !1
            );
          return (0, s.jsx)("span", {
            children: (0, s.jsxs)("button", {
              onClick: h,
              className: (0, M.A)(
                c.CopyButton,
                a.size === "large" ? c.BigButton : c.NormalButton,
              ),
              ref: l,
              title: a.text,
              children: [
                i &&
                  l.current &&
                  (0, s.jsx)(m.g, {
                    target: l.current,
                    direction: "bottom",
                    children: (0, s.jsx)("div", {
                      className: c.CopiedNotice,
                      children: "Copied.",
                    }),
                  }),
                (0, s.jsx)(D.cKB, {}),
              ],
            }),
          });
        }
      },
      92083: (f, j, o) => {
        "use strict";
        o.r(j),
          o.d(j, {
            default: () => l,
            useAcquitForumComment: () => B,
            useSanctionForumComment: () => R,
          });
        var s = o(7850),
          u = o(64981),
          m = o(46085),
          c = o(86392),
          O = o(68312),
          D = o(29385),
          M = o(61739),
          C = o(35038),
          a = o(90109),
          i = o(23980),
          P = o(23582);
        function l(t) {
          var _, r;
          const d = (
              (r =
                (_ = (0, m.w3)({
                  subject_type: u.lN,
                  topic: t.topicId,
                }).data) == null
                  ? void 0
                  : _.subjects) != null
                ? r
                : []
            ).find((n) => {
              var e;
              return (
                ((e = n.coordinates) == null ? void 0 : e.comment) ===
                t.subjectId
              );
            }),
            E = R(
              t.clanSteamId,
              t.forumId,
              t.topicId,
              t.subjectId,
              d == null ? void 0 : d.reported_content_id,
            ),
            I = B(
              t.clanSteamId,
              t.forumId,
              t.topicId,
              t.subjectId,
              d == null ? void 0 : d.reported_content_id,
            );
          return (0, s.jsx)(P.l, {
            sanctionMutation: E,
            acquitMutation: I,
            subject: d,
            eSubjectType: u.lN,
            gidComment: t.subjectId,
            authorSteamID: t.authorSteamId,
            clanSteamID: t.clanSteamId,
            children: (0, s.jsx)(h, { ...t }),
          });
        }
        function h(t) {
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
        function B(t, _, r, y, d) {
          const E = (0, O.KV)(),
            I = (0, D.jE)();
          return (0, M.n)({
            mutationFn: async () => {
              const n = C.w.Init(a.Km);
              n.Body().set_steamid(t),
                n.Body().set_gidforum(_),
                n.Body().set_gidtopic(r),
                n.Body().set_gidpost(y);
              const e = await a.el.ResolveReportedPost(E, n);
              if (!e.BSuccess())
                throw new Error(
                  "Failed to acquit forum comment: " + e.GetEMsg(),
                );
            },
            onSuccess: async (n) => {
              await (0, m.Ky)(I, d);
            },
          });
        }
        function R(t, _, r, y, d) {
          const E = (0, O.KV)(),
            I = (0, D.jE)();
          return (0, M.n)({
            mutationFn: async (n) => {
              const e = C.w.Init(a.FD);
              e.Body().set_steamid(t),
                e.Body().set_gidforum(_),
                e.Body().set_gidtopic(r),
                e.Body().set_gidpost(y),
                e.Body().set_reason(n.reason),
                e.Body().set_note(n.message);
              for (const x of n.sanctions) {
                const g = new a.RQ();
                g.set_sanction(x.sanction),
                  x.days !== void 0 && g.set_days(x.days),
                  e.Body().add_sanctions(g);
              }
              const v = await a.el.SanctionReportedPost(E, e);
              if (!v.BSuccess())
                throw new Error(
                  "Failed to sanction forum comment: (" +
                    v.GetEResult() +
                    ") " +
                    v.GetErrorMessage(),
                );
            },
            onSuccess: async (n) => {
              await (0, m.Ky)(I, d);
            },
          });
        }
      },
      87100: (f) => {
        f.exports = {
          CopyButton: "_2IGMSIG6hbIQPg-K1KoY-W",
          CopiedNotice: "_1G568MNm7rDJNLFkzReXEc",
          BigButton: "_3QFnwUCRHpPU2YWoxMv2b8",
          NormalButton: "TLP9bd53vhNfYhUroF4Np",
        };
      },
    },
  ]);
})();

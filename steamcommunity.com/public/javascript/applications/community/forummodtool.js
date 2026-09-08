/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [140],
  {
    87100: (t) => {
      t.exports = {
        CopyButton: "_2IGMSIG6hbIQPg-K1KoY-W",
        CopiedNotice: "_1G568MNm7rDJNLFkzReXEc",
        BigButton: "_3QFnwUCRHpPU2YWoxMv2b8",
        NormalButton: "TLP9bd53vhNfYhUroF4Np",
      };
    },
    58317: (t, e, s) => {
      "use strict";
      s.d(e, { A: () => a });
      var o = s(7850),
        n = s(90626),
        c = s(6336),
        i = s(87100),
        d = s(4869),
        r = s(52038);
      function a(t) {
        const [e, s] = (0, n.useState)(!1),
          a = (0, n.useRef)(null);
        return (0, o.jsx)("span", {
          children: (0, o.jsxs)("button", {
            onClick: (e) => (
              s(!0),
              e.stopPropagation(),
              navigator.clipboard.writeText(t.text),
              setTimeout(() => s(!1), 1e3),
              !1
            ),
            className: (0, r.A)(
              i.CopyButton,
              "large" === t.size ? i.BigButton : i.NormalButton,
            ),
            ref: a,
            title: t.text,
            children: [
              e &&
                a.current &&
                (0, o.jsx)(c.g, {
                  target: a.current,
                  direction: "bottom",
                  children: (0, o.jsx)("div", {
                    className: i.CopiedNotice,
                    children: "Copied.",
                  }),
                }),
              (0, o.jsx)(d.cKB, {}),
            ],
          }),
        });
      }
    },
    98786: (t, e, s) => {
      "use strict";
      s.r(e),
        s.d(e, {
          default: () => j,
          useAcquitForumComment: () => I,
          useSanctionForumComment: () => p,
        });
      var o = s(7850),
        n = s(34410),
        c = s(90182),
        i = s(23809),
        d = s(29385),
        r = s(61739),
        a = s(56545),
        u = s(60690),
        l = s(58317),
        m = s(25215);
      function j(t) {
        var e, s;
        const i = (0, c.kZ)(n.lN, t.topicId),
          d = p(t.clanSteamId, t.forumId, t.topicId, t.subjectId),
          r = I(t.clanSteamId, t.forumId, t.topicId, t.subjectId),
          a = {
            subject_type: n.lN,
            subject_group_id: t.topicId,
            subject_id: t.subjectId,
          },
          u = (
            null !==
              (s =
                null === (e = i.data) || void 0 === e ? void 0 : e.subjects) &&
            void 0 !== s
              ? s
              : []
          ).find((e) => e.subject_id === t.subjectId);
        return (0, o.jsx)(m.l, {
          sanctionMutation: d,
          acquitMutation: r,
          subjectKey: a,
          subject: u,
          authorSteamID: t.authorSteamId,
          clanSteamID: t.clanSteamId,
          children: (0, o.jsx)(x, { ...t }),
        });
      }
      function x(t) {
        return (0, o.jsx)("table", {
          children: (0, o.jsxs)("tbody", {
            children: [
              (0, o.jsxs)("tr", {
                children: [
                  (0, o.jsx)("td", { children: "Clan SteamID:" }),
                  (0, o.jsxs)("td", {
                    children: [
                      t.clanSteamId,
                      " ",
                      (0, o.jsx)(l.A, { text: t.clanSteamId, size: "small" }),
                    ],
                  }),
                ],
              }),
              (0, o.jsxs)("tr", {
                children: [
                  (0, o.jsx)("td", { children: "Forum GID:" }),
                  (0, o.jsxs)("td", {
                    children: [
                      t.forumId,
                      " ",
                      (0, o.jsx)(l.A, { text: t.forumId, size: "small" }),
                    ],
                  }),
                ],
              }),
              (0, o.jsxs)("tr", {
                children: [
                  (0, o.jsx)("td", { children: "Topic GID:" }),
                  (0, o.jsxs)("td", {
                    children: [
                      t.topicId,
                      " ",
                      (0, o.jsx)(l.A, { text: t.topicId, size: "small" }),
                    ],
                  }),
                ],
              }),
              "0" !== t.subjectId &&
                (0, o.jsxs)("tr", {
                  children: [
                    (0, o.jsx)("td", { children: "Comment GID:" }),
                    (0, o.jsxs)("td", {
                      children: [
                        t.subjectId,
                        " ",
                        (0, o.jsx)(l.A, { text: t.subjectId, size: "small" }),
                      ],
                    }),
                  ],
                }),
            ],
          }),
        });
      }
      function I(t, e, s, o) {
        const l = (0, i.KV)(),
          m = (0, d.jE)();
        return (0, r.n)({
          mutationFn: async () => {
            const n = a.w.Init(u.Km);
            n.Body().set_steamid(t),
              n.Body().set_gidforum(e),
              n.Body().set_gidtopic(s),
              n.Body().set_gidpost(o);
            const c = await u.el.ResolveReportedPost(l, n);
            if (!c.BSuccess())
              throw new Error("Failed to acquit forum comment: " + c.GetEMsg());
          },
          onSuccess: async (t) => {
            await (0, c.iW)(m, n.lN, s, o);
          },
        });
      }
      function p(t, e, s, o) {
        const l = (0, i.KV)(),
          m = (0, d.jE)();
        return (0, r.n)({
          mutationFn: async (n) => {
            const c = a.w.Init(u.FD);
            c.Body().set_steamid(t),
              c.Body().set_gidforum(e),
              c.Body().set_gidtopic(s),
              c.Body().set_gidpost(o),
              c.Body().set_reason(n.reason),
              c.Body().set_note(n.message);
            for (const t of n.sanctions) {
              const e = new u.RQ();
              e.set_sanction(t.sanction),
                void 0 !== t.days && e.set_days(t.days),
                c.Body().add_sanctions(e);
            }
            const i = await u.el.SanctionReportedPost(l, c);
            if (!i.BSuccess())
              throw new Error(
                "Failed to sanction forum comment: (" +
                  i.GetEResult() +
                  ") " +
                  i.GetErrorMessage(),
              );
          },
          onSuccess: async (t) => {
            await (0, c.iW)(m, n.lN, s, o);
          },
        });
      }
    },
  },
]);

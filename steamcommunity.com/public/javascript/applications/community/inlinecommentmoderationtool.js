/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [2345],
  {
    44303: (t, e, n) => {
      n.r(e), n.d(e, { default: () => d });
      var i = n(7850),
        s = n(90182),
        u = n(34410),
        c = n(25215);
      function d(t) {
        var e, n;
        const {
            steamid: d,
            commentThreadID: m,
            gidComment: o,
            authorSteamID: r,
          } = t,
          h = (0, s.kZ)(u.NC, m),
          j = (0, s.EC)(d, m, o),
          l = (0, s.c3)(d, m, o),
          b = { subject_type: u.NC, subject_group_id: m, subject_id: o },
          C = (
            null !==
              (n =
                null === (e = h.data) || void 0 === e ? void 0 : e.subjects) &&
            void 0 !== n
              ? n
              : []
          ).find((t) => t.subject_id === o);
        return (0, i.jsx)(c.l, {
          sanctionMutation: j,
          acquitMutation: l,
          subjectKey: b,
          subject: C,
          authorSteamID: r,
          children: (0, i.jsx)(a, { ...t }),
        });
      }
      function a(t) {
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsxs)("div", { children: ["SteamID: ", t.steamid] }),
            (0, i.jsxs)("div", {
              children: ["CommentThreadID: ", t.commentThreadID],
            }),
            (0, i.jsxs)("div", { children: ["CommentGID: ", t.gidComment] }),
          ],
        });
      }
    },
  },
]);

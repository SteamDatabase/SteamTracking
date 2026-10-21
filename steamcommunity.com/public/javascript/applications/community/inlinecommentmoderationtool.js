/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [32345],
    {
      75758: (j, a, n) => {
        n.r(a), n.d(a, { default: () => u });
        var t = n(7850),
          s = n(46085),
          d = n(64981),
          i = n(23582);
        function u(e) {
          const {
              steamid: c,
              commentThreadID: o,
              gidComment: m,
              authorSteamID: C,
            } = e,
            D = (0, s.w3)({ subject_type: d.NC, comment_thread_id: o }),
            _ = (0, s.EC)(c, o, m),
            l = (0, s.c3)(c, o, m),
            h = (D.data?.subjects ?? []).find(
              (E) => E.coordinates?.comment === m,
            );
          return (0, t.jsx)(i.l, {
            sanctionMutation: _,
            acquitMutation: l,
            subject: h,
            eSubjectType: d.NC,
            gidComment: m,
            authorSteamID: C,
            children: (0, t.jsx)(r, { ...e }),
          });
        }
        function r(e) {
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsxs)("div", { children: ["SteamID: ", e.steamid] }),
              (0, t.jsxs)("div", {
                children: ["CommentThreadID: ", e.commentThreadID],
              }),
              (0, t.jsxs)("div", { children: ["CommentGID: ", e.gidComment] }),
            ],
          });
        }
      },
    },
  ]);
})();

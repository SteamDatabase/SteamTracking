/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [32345],
    {
      75758: (M, a, n) => {
        n.r(a), n.d(a, { default: () => _ });
        var t = n(7850),
          o = n(46085),
          d = n(64981),
          r = n(23582);
        function _(e) {
          var i, c;
          const {
              steamid: u,
              commentThreadID: s,
              gidComment: m,
              authorSteamID: D,
            } = e,
            h = (0, o.w3)({ subject_type: d.NC, comment_thread_id: s }),
            E = (0, o.EC)(u, s, m),
            j = (0, o.c3)(u, s, m),
            v = (
              (c = (i = h.data) == null ? void 0 : i.subjects) != null ? c : []
            ).find((I) => {
              var l;
              return ((l = I.coordinates) == null ? void 0 : l.comment) === m;
            });
          return (0, t.jsx)(r.l, {
            sanctionMutation: E,
            acquitMutation: j,
            subject: v,
            eSubjectType: d.NC,
            gidComment: m,
            authorSteamID: D,
            children: (0, t.jsx)(C, { ...e }),
          });
        }
        function C(e) {
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

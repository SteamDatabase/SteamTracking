/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [66408, 30892],
    {
      10723: (c, m, e) => {
        e.r(m), e.d(m, { default: () => d });
        var u = e(7850),
          a = e(46085),
          s = e(64981),
          n = e(17871);
        function d(t) {
          const o = (0, a.w3)({
              subject_type: s.NC,
              comment_thread_id: t.commentThreadID,
            }),
            _ = (0, n.useCommentThread)(
              t.steamid,
              t.eCommentThreadType,
              t.gidfeature,
              t.gidfeature2,
            );
          return (0, u.jsx)(n.ReportedSubjectList, {
            subjectType: s.NC,
            subjectGroupQuery: o,
            commentThreadQuery: _,
            inlineClassNames: t.inlineClassNames,
          });
        }
      },
    },
  ]);
})();

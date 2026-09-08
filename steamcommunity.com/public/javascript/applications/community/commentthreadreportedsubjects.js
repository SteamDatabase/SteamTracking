/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [6408, 892],
  {
    48866: (e, t, s) => {
      s.r(t), s.d(t, { default: () => r });
      var u = s(7850),
        n = s(90182),
        a = s(34410),
        m = s(10378);
      function r(e) {
        const t = (0, n.kZ)(a.NC, e.commentThreadID),
          s = (0, m.useCommentThread)(
            e.steamid,
            e.eCommentThreadType,
            e.gidfeature,
            e.gidfeature2,
          );
        return (0, u.jsx)(m.ReportedSubjectList, {
          subjectType: a.NC,
          subjectGroupQuery: t,
          commentThreadQuery: s,
          inlineClassNames: e.inlineClassNames,
        });
      }
    },
  },
]);

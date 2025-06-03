/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [5836],
  {
    45048: (e, t, n) => {
      n.r(t), n.d(t, { QAndARoutes: () => i, default: () => l });
      var a = n(28579),
        r = n(90626),
        s = n(92757),
        o = n(6813),
        c = n(97058);
      const i = {
        Dashboard: (e) => `/questions/${e}/dashboard`,
        FullPageView: (e, t) => `/questions/${e}/view/${t}`,
      };
      const l = function (e) {
        return r.createElement(
          s.dO,
          null,
          r.createElement(s.qh, {
            path: i.Dashboard(":vanity_str"),
            render: (e) =>
              r.createElement(o.X, {
                config: {
                  "qanda-root": () => {
                    const { vanity_str: t } = e.match.params;
                    return r.createElement(a.xh, { vanity_str: t });
                  },
                },
              }),
          }),
          r.createElement(s.qh, {
            path: i.FullPageView(":vanity_str", ":session_gid"),
            render: (e) =>
              r.createElement(o.X, {
                config: {
                  "qanda-root": () => {
                    const { vanity_str: t, session_gid: n } = e.match.params;
                    return r.createElement(a.AC, { gidSession: n });
                  },
                },
              }),
          }),
          r.createElement(s.qh, { component: c.a }),
        );
      };
    },
  },
]);

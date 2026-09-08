/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [5136],
  {
    16340: (e, t, a) => {
      a.r(t), a.d(t, { RecapHubRoutes: () => d, default: () => i });
      var r = a(7850),
        s = a(97058),
        n = a(17083),
        p = a(92757),
        x = a(43527),
        c = a(55272);
      const d = {
        NextFestRecapListPartner: (e) => `/nextfest/${e}`,
        NextFestRecapList: () => "/nextfest",
        NextFestRecap: (e, t) => `/nextfest/${e}/${t}`,
      };
      function i(e) {
        return (0, r.jsx)(n.Kd, {
          basename: (0, x.C)() + "recap/",
          children: (0, r.jsxs)(p.dO, {
            children: [
              (0, r.jsx)(p.qh, {
                path: d.NextFestRecap(":postfix", ":partnerid(\\d+)"),
                render: (e) =>
                  (0, r.jsx)(c.ap, {
                    pagePostFix: e.match.params.postfix,
                    nPartnerID: Number.parseInt(e.match.params.partnerid),
                  }),
              }),
              (0, r.jsx)(p.qh, {
                path: d.NextFestRecapListPartner(":partnerid(\\d+)"),
                render: (e) =>
                  (0, r.jsx)(c.yb, {
                    nPartnerID: Number.parseInt(e.match.params.partnerid),
                  }),
              }),
              (0, r.jsx)(p.qh, {
                path: d.NextFestRecapList(),
                render: (e) => (0, r.jsx)(c.yb, { nPartnerID: void 0 }),
              }),
              (0, r.jsx)(p.qh, { component: s.a }),
            ],
          }),
        });
      }
    },
  },
]);

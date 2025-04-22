/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [5136],
  {
    16340: (e, t, a) => {
      a.r(t), a.d(t, { RecapHubRoutes: () => d, default: () => i });
      var r = a(90626),
        n = a(97058),
        p = a(17083),
        s = a(92757),
        c = a(43527),
        m = a(55272);
      const d = {
        NextFestRecapListPartner: (e) => `/nextfest/${e}`,
        NextFestRecapList: () => "/nextfest",
        NextFestRecap: (e, t) => `/nextfest/${e}/${t}`,
      };
      function i(e) {
        return r.createElement(
          p.Kd,
          { basename: (0, c.C)() + "recap/" },
          r.createElement(
            s.dO,
            null,
            r.createElement(s.qh, {
              path: d.NextFestRecap(":postfix", ":partnerid(\\d+)"),
              render: (e) =>
                r.createElement(m.ap, {
                  pagePostFix: e.match.params.postfix,
                  nPartnerID: Number.parseInt(e.match.params.partnerid),
                }),
            }),
            r.createElement(s.qh, {
              path: d.NextFestRecapListPartner(":partnerid(\\d+)"),
              render: (e) =>
                r.createElement(m.yb, {
                  nPartnerID: Number.parseInt(e.match.params.partnerid),
                }),
            }),
            r.createElement(s.qh, {
              path: d.NextFestRecapList(),
              render: (e) => r.createElement(m.yb, { nPartnerID: void 0 }),
            }),
            r.createElement(s.qh, { component: n.a }),
          ),
        );
      }
    },
  },
]);

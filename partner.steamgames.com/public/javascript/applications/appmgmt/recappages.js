/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [5136],
  {
    16340: (e, t, a) => {
      a.r(t), a.d(t, { RecapHubRoutes: () => u, default: () => d });
      var r = a(90626),
        n = a(97058),
        p = a(17083),
        s = a(92757),
        m = a(43527),
        c = a(55272);
      const u = { NextFestRecap: (e, t) => `/nextfest/${e}/${t}` };
      function d(e) {
        return r.createElement(
          p.Kd,
          { basename: (0, m.C)() + "recap/" },
          r.createElement(
            s.dO,
            null,
            r.createElement(s.qh, {
              path: u.NextFestRecap(":postfix", ":partnerid(\\d+)"),
              render: (e) =>
                r.createElement(c.g, {
                  pagePostFix: e.match.params.postfix,
                  nPartnerID: Number.parseInt(e.match.params.partnerid),
                }),
            }),
            r.createElement(s.qh, { component: n.a }),
          ),
        );
      }
    },
  },
]);

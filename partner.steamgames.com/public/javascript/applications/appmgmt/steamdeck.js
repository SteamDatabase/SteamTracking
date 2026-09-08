/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [4226],
  {
    34044: (l, n, e) => {
      e.r(n), e.d(n, { default: () => u });
      var t = e(7850),
        s = e(39891);
      function u(l) {
        const { dataprops: n, results: e } = l;
        let u = null;
        if (e && e.length > 0) {
          const l = n.appid ?? null;
          if (l) {
            let n = e.findIndex((n) => n.appid == l);
            u = -1 != n ? e[n] : null;
          }
          const t = n.search_id ?? null;
          if (!u && t) {
            let l = e.findIndex((l) => l.search_id == t);
            u = -1 != l ? e[l] : null;
          }
        }
        return u ? (0, t.jsx)(s.default, { results: u }) : null;
      }
    },
  },
]);

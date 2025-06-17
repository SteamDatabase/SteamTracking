/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [4226],
  {
    34044: (e, l, n) => {
      n.r(l), n.d(l, { default: () => s });
      var t = n(90626),
        a = n(78116);
      function s(e) {
        const { dataprops: l, results: n } = e;
        let s = null;
        if (n && n.length > 0) {
          const e = l.appid ?? null;
          if (e) {
            let l = n.findIndex((l) => l.appid == e);
            s = -1 != l ? n[l] : null;
          }
          const t = l.search_id ?? null;
          if (!s && t) {
            let e = n.findIndex((e) => e.search_id == t);
            s = -1 != e ? n[e] : null;
          }
        }
        return s
          ? t.createElement(a.default, { results: s, bIncludeSteamOS: !0 })
          : null;
      }
    },
  },
]);

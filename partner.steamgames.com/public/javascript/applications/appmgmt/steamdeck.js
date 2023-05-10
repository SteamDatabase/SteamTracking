/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [6699],
  {
    96405: (l, e, n) => {
      n.r(e), n.d(e, { default: () => a });
      var t = n(89526),
        u = (n(55069), n(14965));
      function a(l) {
        var e, n;
        const { dataprops: a, results: s } = l;
        let d = null;
        if (s && s.length > 0) {
          const l = null !== (e = a.appid) && void 0 !== e ? e : null;
          if (l) {
            let e = s.findIndex((e) => e.appid == l);
            d = -1 != e ? s[e] : null;
          }
          const t = null !== (n = a.search_id) && void 0 !== n ? n : null;
          if (!d && t) {
            let l = s.findIndex((l) => l.search_id == t);
            d = -1 != l ? s[l] : null;
          }
        }
        return d ? t.createElement(u.default, { results: d }) : null;
      }
    },
  },
]);

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [58987, 55894],
  {
    35649: (e, s, u) => {
      u.r(s), u.d(s, { default: () => a });
      var r = u(7850),
        o = u(13164);
      function a(e) {
        const { familyGroupID: s } = e;
        return (0, r.jsx)(o.PurchaseRequestSimpleInfoPage, {
          familyGroupID: s,
          headerLocToken: "#PurchaseRequested_Header",
          infoLocToken: "#PurchaseRequested_Info",
        });
      }
    },
  },
]);

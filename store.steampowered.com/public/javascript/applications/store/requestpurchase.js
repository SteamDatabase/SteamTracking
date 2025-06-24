/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [8987, 5894],
  {
    35649: (e, r, u) => {
      u.r(r), u.d(r, { default: () => o });
      var s = u(90626),
        a = u(13164);
      function o(e) {
        const { familyGroupID: r } = e;
        return s.createElement(a.PurchaseRequestSimpleInfoPage, {
          familyGroupID: r,
          headerLocToken: "#PurchaseRequested_Header",
          infoLocToken: "#PurchaseRequested_Info",
        });
      }
    },
  },
]);

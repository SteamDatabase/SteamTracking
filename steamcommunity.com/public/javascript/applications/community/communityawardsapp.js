/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [27561],
    {
      50878: (_, t, n) => {
        n.r(t), n.d(t, { default: () => o });
        var u = n(7850),
          d = n(76006);
        function o(s) {
          return (0, u.jsx)("div", { children: (0, u.jsx)(d.Ay, {}) });
        }
      },
      84346: (_, t, n) => {
        n.d(t, { J: () => o });
        var u = n(72609),
          d = n(37901);
        function o() {
          return (0, d.A)().languages.map((e) => s(e.strISOCode));
        }
        function s(e) {
          return e.length == 2 && u.TS.COUNTRY ? `${e}-${u.TS.COUNTRY}` : e;
        }
      },
    },
  ]);
})();

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [5435],
  {
    55435: (e, t, a) => {
      a.r(t), a.d(t, { default: () => r });
      var n = a(91547),
        u = a(90626),
        l = a(19560),
        i = a(90534);
      function r(e) {
        const { appid: t, initialValue: a } = e,
          [r, o] = (0, u.useState)(a),
          s = (0, u.useRef)(null);
        return u.createElement(
          l.MarketBaseUIRoot,
          null,
          u.createElement(
            i.a,
            { width: "259px", ref: s },
            u.createElement(n.xs, {
              value: r,
              onTextChange: o,
              appid: t,
              radius: "none",
              variant: "default",
              name: "q",
              autoComplete: "off",
            }),
          ),
        );
      }
    },
  },
]);

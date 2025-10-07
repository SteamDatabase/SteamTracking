/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [5435],
  {
    55435: (e, t, a) => {
      a.r(t), a.d(t, { default: () => i });
      var n = a(83281),
        u = a(93889),
        l = a(90626),
        o = a(19560),
        r = a(90534);
      function i(e) {
        const { app: t, initialValue: a, debugMode: i } = e,
          [s, p] = (0, l.useState)(a),
          c = (0, l.useRef)(null),
          [d, m] = (0, l.useState)(!0);
        return l.createElement(
          n.u.Provider,
          { value: i },
          l.createElement(
            o.MarketBaseUIRoot,
            null,
            l.createElement(
              r.a,
              {
                width: "259px",
                ref: c,
                position: "relative",
                style: { zIndex: 402 },
              },
              l.createElement(u.xs, {
                value: s,
                onTextChange: p,
                app: d ? t : void 0,
                onClearApp: () => m(!1),
                radius: "none",
                variant: "default",
                name: "q",
                autoComplete: "off",
              }),
            ),
          ),
        );
      }
    },
  },
]);

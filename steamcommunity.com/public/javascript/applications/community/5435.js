/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [5435],
  {
    55435: (e, t, a) => {
      a.r(t), a.d(t, { default: () => i });
      var n = a(83281),
        u = a(13826),
        l = a(90626),
        r = a(19560),
        o = a(90534);
      function i(e) {
        const { app: t, initialValue: a, debugMode: i } = e,
          [s, c] = (0, l.useState)(a),
          m = (0, l.useRef)(null);
        return l.createElement(
          n.u.Provider,
          { value: i },
          l.createElement(
            r.MarketBaseUIRoot,
            null,
            l.createElement(
              o.a,
              {
                width: "259px",
                ref: m,
                position: "relative",
                style: { zIndex: 402 },
              },
              l.createElement(u.xs, {
                value: s,
                onTextChange: c,
                app: t,
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

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [5435],
  {
    55435: (e, t, a) => {
      a.r(t), a.d(t, { default: () => o });
      var n = a(83281),
        u = a(55147),
        l = a(90626),
        i = a(19560),
        r = a(90534);
      function o(e) {
        const { appid: t, initialValue: a, debugMode: o } = e,
          [s, c] = (0, l.useState)(a),
          d = (0, l.useRef)(null);
        return l.createElement(
          n.u.Provider,
          { value: o },
          l.createElement(
            i.MarketBaseUIRoot,
            null,
            l.createElement(
              r.a,
              {
                width: "259px",
                ref: d,
                position: "relative",
                style: { zIndex: 402 },
              },
              l.createElement(u.xs, {
                value: s,
                onTextChange: c,
                appid: t,
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

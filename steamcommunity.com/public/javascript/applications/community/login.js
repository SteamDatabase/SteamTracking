/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [6966],
  {
    9211: (e) => {
      e.exports = { LoginContainer: "_2vAS_iK_bJ7iv_7pRL7Zdk" };
    },
    42144: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => l });
      var r = n(90626),
        a = n(97436),
        o = n(96059),
        i = n(78327),
        s = n(28240),
        c = n(9211);
      function l(e) {
        const { redirectUrl: t = i.TS.COMMUNITY_BASE_URL } = e,
          [n] = (0, r.useState)(
            new o.D(i.TS.WEBAPI_BASE_URL).GetAnonymousServiceTransport(),
          ),
          [l, u] = (0, r.useState)(!1);
        return r.createElement(
          "div",
          { className: c.LoginContainer },
          l
            ? r.createElement(a.Fn, null)
            : r.createElement(a.YN, {
                autoFocus: !0,
                transport: n,
                platform: 2,
                onComplete: (e) => {
                  e == s.wI.k_PrimaryDomainFail
                    ? u(!0)
                    : window.location.assign(t);
                },
                redirectUrl: t,
              }),
        );
      }
    },
  },
]);

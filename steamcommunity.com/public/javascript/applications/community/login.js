/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [4535],
  {
    79707: (e) => {
      e.exports = { LoginContainer: "_2vAS_iK_bJ7iv_7pRL7Zdk" };
    },
    32431: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => l });
      var r = n(47427),
        a = n(99327),
        o = n(77581),
        i = n(37563),
        s = n(35791),
        c = n(79707);
      function l(e) {
        const { redirectUrl: t = i.De.COMMUNITY_BASE_URL } = e,
          [n] = (0, r.useState)(
            new o.J(i.De.WEBAPI_BASE_URL).GetAnonymousServiceTransport(),
          ),
          [l, u] = (0, r.useState)(!1);
        return r.createElement(
          "div",
          { className: c.LoginContainer },
          l
            ? r.createElement(a.pT, null)
            : r.createElement(a.wK, {
                autoFocus: !0,
                transport: n,
                platform: 2,
                onComplete: (e) => {
                  e == s.TG.k_PrimaryDomainFail
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

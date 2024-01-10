/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [4535],
  {
    79707: (e) => {
      e.exports = { LoginContainer: "login_LoginContainer_2vAS_" };
    },
    32431: (e, n, t) => {
      "use strict";
      t.r(n), t.d(n, { default: () => l });
      var r = t(47427),
        o = t(99327),
        a = t(77581),
        i = t(37563),
        s = t(35791),
        c = t(79707);
      function l(e) {
        const { redirectUrl: n = i.De.COMMUNITY_BASE_URL } = e,
          [t] = (0, r.useState)(
            new a.J(i.De.WEBAPI_BASE_URL).GetAnonymousServiceTransport(),
          ),
          [l, u] = (0, r.useState)(!1);
        return r.createElement(
          "div",
          { className: c.LoginContainer },
          l
            ? r.createElement(o.pT, null)
            : r.createElement(o.wK, {
                autoFocus: !0,
                transport: t,
                platform: 2,
                onComplete: (e) => {
                  e == s.TG.k_PrimaryDomainFail
                    ? u(!0)
                    : window.location.assign(n);
                },
                redirectUrl: n,
              }),
        );
      }
    },
  },
]);

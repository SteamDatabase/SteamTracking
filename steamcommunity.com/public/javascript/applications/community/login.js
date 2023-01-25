/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [4535],
  {
    59469: (e) => {
      e.exports = { LoginContainer: "login_LoginContainer_2vAS_" };
    },
    93071: (e, n, t) => {
      "use strict";
      t.r(n), t.d(n, { default: () => l });
      var r = t(67294),
        o = t(69959),
        a = (t(88514), t(73812)),
        i = t(90666),
        s = t(92742),
        c = t(59469);
      function l(e) {
        const { redirectUrl: n = i.De.COMMUNITY_BASE_URL } = e,
          [t] = (0, r.useState)(
            new a.J(i.De.WEBAPI_BASE_URL).GetAnonymousServiceTransport()
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
              })
        );
      }
    },
  },
]);

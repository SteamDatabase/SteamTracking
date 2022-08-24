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
      t.r(n), t.d(n, { default: () => c });
      var r = t(67294),
        a = t(28274),
        o = (t(88514), t(65902)),
        i = t(90666),
        s = t(92742),
        l = t(59469);
      function c(e) {
        const { redirectUrl: n = i.De.COMMUNITY_BASE_URL, disableQR: t } = e,
          [c] = (0, r.useState)(
            new o.J(i.De.WEBAPI_BASE_URL).GetAnonymousServiceTransport()
          ),
          [u, m] = (0, r.useState)(!1);
        return r.createElement(
          "div",
          { className: l.LoginContainer },
          u
            ? r.createElement(a.pT, null)
            : r.createElement(a.wK, {
                autoFocus: !0,
                transport: c,
                platform: 2,
                onComplete: (e) => {
                  e == s.TG.k_PrimaryDomainFail
                    ? m(!0)
                    : window.location.assign(n);
                },
                redirectUrl: n,
                disableQR: t,
              })
        );
      }
    },
  },
]);

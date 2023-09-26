/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [4535],
  {
    2326: (e) => {
      e.exports = { LoginContainer: "login_LoginContainer_2vAS_" };
    },
    58301: (e, n, t) => {
      "use strict";
      t.r(n), t.d(n, { default: () => u });
      var r = t(89526),
        o = t(88390),
        a = t(7786),
        i = t(19094),
        s = t(32765),
        l = t(79925),
        c = t(2326);
      function u(e) {
        const { redirectUrl: n = s.De.COMMUNITY_BASE_URL } = e,
          [t] = (0, r.useState)(
            new i.J(s.De.WEBAPI_BASE_URL).GetAnonymousServiceTransport(),
          ),
          [u, m] = (0, r.useState)(!1);
        return r.createElement(
          "div",
          { className: c.LoginContainer },
          u
            ? r.createElement(o.pT, null)
            : r.createElement(o.wK, {
                autoFocus: !0,
                transport: t,
                platform: a.hn.k_EAuthTokenPlatformType_WebBrowser,
                onComplete: (e) => {
                  e == l.TG.k_PrimaryDomainFail
                    ? m(!0)
                    : window.location.assign(n);
                },
                redirectUrl: n,
              }),
        );
      }
    },
  },
]);

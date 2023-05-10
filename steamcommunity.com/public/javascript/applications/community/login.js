/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [4535],
  {
    25391: (e) => {
      e.exports = { LoginContainer: "login_LoginContainer_2vAS_" };
    },
    58301: (e, n, t) => {
      "use strict";
      t.r(n), t.d(n, { default: () => l });
      var r = t(89526),
        o = t(81566),
        a = (t(62055), t(36597)),
        i = t(32765),
        s = t(79925),
        c = t(25391);
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

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [4535],
  {
    82152: (e) => {
      e.exports = { LoginContainer: "login_LoginContainer_2kLRm" };
    },
    86401: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => u });
      var r = n(89526),
        o = n(88390),
        a = n(7786),
        s = n(19094),
        i = n(32765),
        l = n(79925),
        c = n(82152);
      function u(e) {
        const { redirectUrl: t = i.De.STORE_BASE_URL } = e,
          [n] = (0, r.useState)(
            new s.J(i.De.WEBAPI_BASE_URL).GetAnonymousServiceTransport(),
          ),
          [u, m] = (0, r.useState)(!1);
        return r.createElement(
          "div",
          { className: c.LoginContainer },
          u
            ? r.createElement(o.pT, null)
            : r.createElement(o.wK, {
                autoFocus: !0,
                transport: n,
                platform: a.hn.k_EAuthTokenPlatformType_WebBrowser,
                onComplete: (e) => {
                  e == l.TG.k_PrimaryDomainFail
                    ? m(!0)
                    : window.location.assign(t);
                },
                redirectUrl: t,
              }),
        );
      }
    },
  },
]);

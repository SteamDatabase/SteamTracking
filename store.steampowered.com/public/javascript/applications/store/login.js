/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [4535],
  {
    11003: (e) => {
      e.exports = { LoginContainer: "login_LoginContainer_2kLRm" };
    },
    22143: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => c });
      var r = n(67294),
        a = n(28274),
        o = (n(88514), n(65902)),
        i = n(90666),
        s = n(92742),
        l = n(11003);
      function c(e) {
        const { redirectUrl: t = i.De.STORE_BASE_URL, disableQR: n } = e,
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
                    : window.location.assign(t);
                },
                redirectUrl: t,
                disableQR: n,
              })
        );
      }
    },
  },
]);

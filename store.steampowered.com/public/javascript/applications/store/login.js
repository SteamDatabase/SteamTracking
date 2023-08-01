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
      n.r(t), n.d(t, { default: () => c });
      var r = n(89526),
        o = n(59100),
        a = n(19094),
        i = n(32765),
        s = n(79925),
        l = n(82152);
      function c(e) {
        const { redirectUrl: t = i.De.STORE_BASE_URL } = e,
          [n] = (0, r.useState)(
            new a.J(i.De.WEBAPI_BASE_URL).GetAnonymousServiceTransport(),
          ),
          [c, u] = (0, r.useState)(!1);
        return r.createElement(
          "div",
          { className: l.LoginContainer },
          c
            ? r.createElement(o.pT, null)
            : r.createElement(o.wK, {
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

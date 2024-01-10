/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [4535],
  {
    24125: (e) => {
      e.exports = { LoginContainer: "login_LoginContainer_2kLRm" };
    },
    9084: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => c });
      var r = n(47427),
        o = n(99327),
        a = n(77581),
        i = n(37563),
        s = n(35791),
        l = n(24125);
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

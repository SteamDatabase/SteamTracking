/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [4535],
  {
    24125: (e) => {
      e.exports = { LoginContainer: "_2kLRmRsLwjGDlm-ZfUpChG" };
    },
    9084: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { default: () => c });
      var n = r(47427),
        a = r(99327),
        o = r(77581),
        s = r(37563),
        i = r(35791),
        l = r(24125);
      function c(e) {
        const { redirectUrl: t = s.De.STORE_BASE_URL } = e,
          [r] = (0, n.useState)(
            new o.J(s.De.WEBAPI_BASE_URL).GetAnonymousServiceTransport(),
          ),
          [c, u] = (0, n.useState)(!1);
        return n.createElement(
          "div",
          { className: l.LoginContainer },
          c
            ? n.createElement(a.pT, null)
            : n.createElement(a.wK, {
                autoFocus: !0,
                transport: r,
                platform: 2,
                onComplete: (e) => {
                  e == i.TG.k_PrimaryDomainFail
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

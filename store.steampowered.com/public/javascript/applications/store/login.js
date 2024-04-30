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
      var n = r(24125),
        a = r(47427),
        o = r(99327),
        s = r(22791),
        i = r(37563),
        l = r(35791);
      function c(e) {
        const { redirectUrl: t = i.De.STORE_BASE_URL } = e,
          [r] = (0, a.useState)(
            new s.J(i.De.WEBAPI_BASE_URL).GetAnonymousServiceTransport(),
          ),
          [c, u] = (0, a.useState)(!1),
          m = e.guest;
        return a.createElement(
          "div",
          { className: n.LoginContainer },
          c
            ? a.createElement(o.pT, null)
            : a.createElement(
                o.wK,
                {
                  autoFocus: !0,
                  transport: r,
                  platform: 2,
                  onComplete: (e) => {
                    e == l.TG.k_PrimaryDomainFail
                      ? u(!0)
                      : window.location.assign(t);
                  },
                  redirectUrl: t,
                },
                m && a.createElement(o.bU, { redirectURL: e.redirectUrl }),
              ),
        );
      }
    },
  },
]);

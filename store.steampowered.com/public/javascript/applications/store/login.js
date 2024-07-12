/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [6966],
  {
    67692: (e) => {
      e.exports = { LoginContainer: "_2kLRmRsLwjGDlm-ZfUpChG" };
    },
    8685: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { default: () => c });
      var n = r(67692),
        a = r(90626),
        o = r(97436),
        s = r(72034),
        i = r(78327),
        l = r(28240);
      function c(e) {
        const { redirectUrl: t = i.TS.STORE_BASE_URL } = e,
          [r] = (0, a.useState)(
            new s.D(i.TS.WEBAPI_BASE_URL).GetAnonymousServiceTransport(),
          ),
          [c, u] = (0, a.useState)(!1),
          m = e.guest;
        return a.createElement(
          "div",
          { className: n.LoginContainer },
          c
            ? a.createElement(o.Fn, null)
            : a.createElement(
                o.YN,
                {
                  autoFocus: !0,
                  transport: r,
                  platform: 2,
                  onComplete: (e) => {
                    e == l.wI.k_PrimaryDomainFail
                      ? u(!0)
                      : window.location.assign(t);
                  },
                  redirectUrl: t,
                },
                m && a.createElement(o.Mk, { redirectURL: e.redirectUrl }),
              ),
        );
      }
    },
  },
]);

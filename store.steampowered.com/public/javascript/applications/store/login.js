/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [6966],
  {
    67692: (e) => {
      e.exports = { LoginContainer: "_2kLRmRsLwjGDlm-ZfUpChG" };
    },
    8685: (e, r, t) => {
      "use strict";
      t.r(r), t.d(r, { default: () => u });
      var n = t(67692),
        a = t(90626),
        o = t(92120),
        l = t(21565),
        s = t(78327),
        i = t(28240),
        c = t(23809);
      function u(e) {
        const { redirectUrl: r = s.TS.STORE_BASE_URL } = e,
          t = (0, c.rW)(),
          [u, m] = (0, a.useState)(!1),
          k = e.guest;
        return a.createElement(
          "div",
          { className: n.LoginContainer },
          u
            ? a.createElement(o.Fn, null)
            : a.createElement(
                o.YN,
                {
                  autoFocus: !0,
                  transport: t,
                  platform: l.SS.k_EAuthTokenPlatformType_WebBrowser,
                  onComplete: (e) => {
                    e == i.wI.k_PrimaryDomainFail
                      ? m(!0)
                      : window.location.assign(r);
                  },
                  redirectUrl: r,
                },
                k && a.createElement(o.Mk, { redirectURL: e.redirectUrl }),
              ),
        );
      }
    },
  },
]);

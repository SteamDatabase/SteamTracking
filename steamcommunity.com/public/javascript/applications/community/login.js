/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [6966],
  {
    9211: (e) => {
      e.exports = { LoginContainer: "_2vAS_iK_bJ7iv_7pRL7Zdk" };
    },
    42144: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => u });
      var r = n(90626),
        o = n(97436),
        a = n(21565),
        i = n(96059),
        s = n(78327),
        c = n(28240),
        l = n(9211);
      function u(e) {
        const { redirectUrl: t = s.TS.COMMUNITY_BASE_URL } = e,
          [n] = (0, r.useState)(
            new i.D(s.TS.WEBAPI_BASE_URL).GetAnonymousServiceTransport(),
          ),
          [u, m] = (0, r.useState)(!1);
        return r.createElement(
          "div",
          { className: l.LoginContainer },
          u
            ? r.createElement(o.Fn, null)
            : r.createElement(o.YN, {
                autoFocus: !0,
                transport: n,
                platform: a.SS.k_EAuthTokenPlatformType_WebBrowser,
                onComplete: (e) => {
                  e == c.wI.k_PrimaryDomainFail
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

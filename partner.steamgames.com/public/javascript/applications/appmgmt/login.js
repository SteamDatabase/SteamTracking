/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [6966],
  {
    90023: (e, t, r) => {
      r.r(t), r.d(t, { default: () => u });
      var o = r(90626),
        n = r(738),
        a = r(9154),
        i = r(97436),
        l = r(21565),
        s = r(96059),
        c = r(78327),
        p = r(28240);
      function u() {
        return (
          (0, o.useEffect)(
            () => (
              (window.g_ShowLoginDialog = (e) =>
                (0, n.pg)(o.createElement(m, { redirectUrl: e }), window, {
                  popupWidth: 700,
                  popupHeight: 440,
                })),
              () => {
                delete window.g_ShowLoginDialog;
              }
            ),
            [],
          ),
          null
        );
      }
      function m(e) {
        const { redirectUrl: t = c.TS.PARTNER_BASE_URL, closeModal: r } = e,
          n = (0, o.useRef)(
            new s.D(c.TS.WEBAPI_BASE_URL).GetServiceTransport(),
          ).current,
          [u, m] = (0, o.useState)(!1);
        return o.createElement(
          a.x_,
          { onEscKeypress: r, hideTopBar: !0, bDisableBackgroundDismiss: !0 },
          u
            ? o.createElement(i.Fn, null)
            : o.createElement(i.YN, {
                platform: l.SS.k_EAuthTokenPlatformType_WebBrowser,
                transport: n,
                onComplete: (e) => {
                  e == p.wI.k_PrimaryDomainFail
                    ? m(!0)
                    : window.location.assign(t);
                },
                autoFocus: !0,
                theme: "modal",
                redirectUrl: t,
              }),
        );
      }
    },
  },
]);

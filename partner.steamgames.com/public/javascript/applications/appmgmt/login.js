/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [4535],
  {
    3962: (e, t, r) => {
      r.r(t), r.d(t, { default: () => p });
      var n = r(89526),
        o = r(24868),
        a = r(7021),
        i = r(22891),
        l = (r(59669), r(70657)),
        s = r(70983),
        c = r(29900);
      function p() {
        return (
          (0, n.useEffect)(
            () => (
              (window.g_ShowLoginDialog = (e) =>
                (0, o.AM)(n.createElement(u, { redirectUrl: e }), window, {
                  popupWidth: 700,
                  popupHeight: 440,
                })),
              () => {
                delete window.g_ShowLoginDialog;
              }
            ),
            []
          ),
          null
        );
      }
      function u(e) {
        const { redirectUrl: t = s.De.PARTNER_BASE_URL, closeModal: r } = e,
          o = (0, n.useRef)(
            new l.J(s.De.WEBAPI_BASE_URL).GetServiceTransport()
          ).current,
          [p, u] = (0, n.useState)(!1);
        return n.createElement(
          a.e1,
          { onEscKeypress: r, hideTopBar: !0, bDisableBackgroundDismiss: !0 },
          p
            ? n.createElement(i.pT, null)
            : n.createElement(i.wK, {
                platform: 2,
                transport: o,
                onComplete: (e) => {
                  e == c.TG.k_PrimaryDomainFail
                    ? u(!0)
                    : window.location.assign(t);
                },
                autoFocus: !0,
                theme: "modal",
                redirectUrl: t,
              })
        );
      }
    },
  },
]);

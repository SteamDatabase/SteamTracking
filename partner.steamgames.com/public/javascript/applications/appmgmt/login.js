/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [4535],
  {
    49686: (e, t, r) => {
      r.r(t), r.d(t, { default: () => p });
      var n = r(67294),
        o = r(59650),
        a = r(56525),
        i = r(51167),
        l = (r(88514), r(65902)),
        s = r(90666),
        c = r(92742);
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
        const {
            redirectUrl: t = s.De.PARTNER_BASE_URL,
            disableQR: r,
            closeModal: o,
          } = e,
          p = (0, n.useRef)(
            new l.J(s.De.WEBAPI_BASE_URL).GetServiceTransport()
          ).current,
          [u, d] = (0, n.useState)(!1);
        return n.createElement(
          a.e1,
          { onEscKeypress: o, hideTopBar: !0, bDisableBackgroundDismiss: !0 },
          u
            ? n.createElement(i.pT, null)
            : n.createElement(i.wK, {
                platform: 2,
                transport: p,
                onComplete: (e) => {
                  e == c.TG.k_PrimaryDomainFail
                    ? d(!0)
                    : window.location.assign(t);
                },
                autoFocus: !0,
                theme: "modal",
                redirectUrl: t,
                disableQR: r,
              })
        );
      }
    },
  },
]);

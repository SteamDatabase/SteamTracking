/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [6966],
  {
    90023: (e, t, r) => {
      r.r(t), r.d(t, { default: () => p });
      var n = r(90626),
        o = r(738),
        a = r(9154),
        i = r(97436),
        l = r(96059),
        s = r(78327),
        c = r(28240);
      function p() {
        return (
          (0, n.useEffect)(
            () => (
              (window.g_ShowLoginDialog = (e) =>
                (0, o.pg)(n.createElement(u, { redirectUrl: e }), window, {
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
      function u(e) {
        const { redirectUrl: t = s.TS.PARTNER_BASE_URL, closeModal: r } = e,
          o = (0, n.useRef)(
            new l.D(s.TS.WEBAPI_BASE_URL).GetServiceTransport(),
          ).current,
          [p, u] = (0, n.useState)(!1);
        return n.createElement(
          a.x_,
          { onEscKeypress: r, hideTopBar: !0, bDisableBackgroundDismiss: !0 },
          p
            ? n.createElement(i.Fn, null)
            : n.createElement(i.YN, {
                platform: 2,
                transport: o,
                onComplete: (e) => {
                  e == c.wI.k_PrimaryDomainFail
                    ? u(!0)
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

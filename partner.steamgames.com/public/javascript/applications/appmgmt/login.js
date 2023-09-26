/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [4535],
  {
    19058: (e, t, r) => {
      r.r(t), r.d(t, { default: () => u });
      var o = r(89526),
        n = r(57742),
        a = r(67736),
        i = r(88390),
        l = r(7786),
        s = r(19094),
        c = r(32765),
        p = r(79925);
      function u() {
        return (
          (0, o.useEffect)(
            () => (
              (window.g_ShowLoginDialog = (e) =>
                (0, n.AM)(o.createElement(m, { redirectUrl: e }), window, {
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
        const { redirectUrl: t = c.De.PARTNER_BASE_URL, closeModal: r } = e,
          n = (0, o.useRef)(
            new s.J(c.De.WEBAPI_BASE_URL).GetServiceTransport(),
          ).current,
          [u, m] = (0, o.useState)(!1);
        return o.createElement(
          a.e1,
          { onEscKeypress: r, hideTopBar: !0, bDisableBackgroundDismiss: !0 },
          u
            ? o.createElement(i.pT, null)
            : o.createElement(i.wK, {
                platform: l.hn.k_EAuthTokenPlatformType_WebBrowser,
                transport: n,
                onComplete: (e) => {
                  e == p.TG.k_PrimaryDomainFail
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

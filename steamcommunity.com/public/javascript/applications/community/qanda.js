/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [5836],
  {
    45048: (e, t, n) => {
      n.r(t), n.d(t, { QAndARoutes: () => c, default: () => l });
      var r = n(28579),
        a = n(90626),
        o = n(92757),
        i = n(6813),
        s = n(97058);
      const c = {
        Dashboard: (e) => `/questions/${e}/dashboard`,
        FullPageView: (e, t) => `/questions/${e}/view/${t}`,
      };
      const l = function (e) {
        return a.createElement(
          o.dO,
          null,
          a.createElement(o.qh, {
            path: c.Dashboard(":vanity_str"),
            render: (e) =>
              a.createElement(i.X, {
                config: {
                  "qanda-root": () => {
                    const { vanity_str: t } = e.match.params;
                    return a.createElement(r.xh, { vanity_str: t });
                  },
                },
              }),
          }),
          a.createElement(o.qh, {
            path: c.FullPageView(":vanity_str", ":session_gid"),
            render: (e) =>
              a.createElement(i.X, {
                config: {
                  "qanda-root": () => {
                    const { vanity_str: t, session_gid: n } = e.match.params;
                    return a.createElement(r.AC, { gidSession: n });
                  },
                },
              }),
          }),
          a.createElement(o.qh, { component: s.a }),
        );
      };
    },
    82477: (e, t, n) => {
      n.d(t, { vg: () => m });
      var r = n(90626),
        a = n(738),
        o = n(61859),
        i = n(78327),
        s = n(97436),
        c = n(96059),
        l = n(28240);
      n(21273);
      function u(e) {
        return r.createElement(
          a.x_,
          { onEscKeypress: e.closeModal, bDisableBackgroundDismiss: !0 },
          r.createElement(d, {
            redirectURL: e.redirectURL,
            guestOption: e.guestOption,
          }),
        );
      }
      function m() {
        (0, a.pg)(
          r.createElement(u, {
            ownerWin: window,
            redirectURL: window.location.href,
          }),
          window,
          { strTitle: (0, o.we)("#Login_SignInTitle") },
        );
      }
      function d(e) {
        const { redirectURL: t, guestOption: n } = e,
          [a] = (0, r.useState)(
            new c.D(i.TS.WEBAPI_BASE_URL).GetAnonymousServiceTransport(),
          ),
          [o, u] = (0, r.useState)(!1);
        return r.createElement(
          "div",
          null,
          o
            ? r.createElement(s.Fn, null)
            : r.createElement(
                s.YN,
                {
                  autoFocus: !0,
                  transport: a,
                  platform: 2,
                  onComplete: (e) => {
                    e == l.wI.k_PrimaryDomainFail
                      ? u(!0)
                      : window.location.assign(t);
                  },
                  redirectUrl: t,
                  theme: "modal",
                },
                n && r.createElement(s.Mk, { redirectURL: t }),
              ),
        );
      }
    },
  },
]);

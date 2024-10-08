/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [5836],
  {
    64734: (e) => {
      e.exports = {
        SectionTitleHeader: "_2g5oNomwd2lv8wL2qlsLVA",
        required_title: "_3yDPZjnsoLc2FkrAH2UOEd",
      };
    },
    45048: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { QAndARoutes: () => c, default: () => s });
      var i = n(28579),
        r = n(90626),
        o = n(92757),
        a = n(6813),
        l = n(97058);
      const c = {
        Dashboard: (e) => `/questions/${e}/dashboard`,
        FullPageView: (e, t) => `/questions/${e}/view/${t}`,
      };
      const s = function (e) {
        return r.createElement(
          o.dO,
          null,
          r.createElement(o.qh, {
            path: c.Dashboard(":vanity_str"),
            render: (e) =>
              r.createElement(a.X, {
                config: {
                  "qanda-root": () => {
                    const { vanity_str: t } = e.match.params;
                    return r.createElement(i.xh, { vanity_str: t });
                  },
                },
              }),
          }),
          r.createElement(o.qh, {
            path: c.FullPageView(":vanity_str", ":session_gid"),
            render: (e) =>
              r.createElement(a.X, {
                config: {
                  "qanda-root": () => {
                    const { vanity_str: t, session_gid: n } = e.match.params;
                    return r.createElement(i.AC, { gidSession: n });
                  },
                },
              }),
          }),
          r.createElement(o.qh, { component: l.a }),
        );
      };
    },
    82477: (e, t, n) => {
      "use strict";
      n.d(t, { vg: () => d });
      var i = n(90626),
        r = n(738),
        o = n(61859),
        a = n(78327),
        l = n(97436),
        c = n(96059),
        s = n(28240);
      n(21273);
      function m(e) {
        return i.createElement(
          r.x_,
          { onEscKeypress: e.closeModal, bDisableBackgroundDismiss: !0 },
          i.createElement(u, {
            redirectURL: e.redirectURL,
            guestOption: e.guestOption,
          }),
        );
      }
      function d() {
        (0, r.pg)(
          i.createElement(m, {
            ownerWin: window,
            redirectURL: window.location.href,
          }),
          window,
          { strTitle: (0, o.we)("#Login_SignInTitle") },
        );
      }
      function u(e) {
        const { redirectURL: t, guestOption: n } = e,
          [r] = (0, i.useState)(
            new c.D(a.TS.WEBAPI_BASE_URL).GetAnonymousServiceTransport(),
          ),
          [o, m] = (0, i.useState)(!1);
        return i.createElement(
          "div",
          null,
          o
            ? i.createElement(l.Fn, null)
            : i.createElement(
                l.YN,
                {
                  autoFocus: !0,
                  transport: r,
                  platform: 2,
                  onComplete: (e) => {
                    e == s.wI.k_PrimaryDomainFail
                      ? m(!0)
                      : window.location.assign(t);
                  },
                  redirectUrl: t,
                  theme: "modal",
                },
                n && i.createElement(l.Mk, { redirectURL: t }),
              ),
        );
      }
    },
    48479: (e, t, n) => {
      "use strict";
      n.d(t, { AQ: () => E, pn: () => p, qx: () => g });
      var i = n(33737),
        r = n(61859),
        o = n(12155),
        a = n(90626),
        l = n(52038),
        c = n(95695),
        s = n(84811),
        m = n(64734),
        d = n(65946),
        u = n(26408);
      function E(e) {
        const {
            title: t,
            tooltip: n,
            getMinimized: i,
            toggleMinimized: r,
            className: o,
            children: E,
          } = e,
          g = (0, d.q3)(() => i());
        return a.createElement(
          a.Fragment,
          null,
          a.createElement(
            "div",
            {
              className: (0, l.A)(
                o,
                m.SectionTitleHeader,
                m.required_title,
                "SectionTitleHeader",
              ),
            },
            a.createElement(
              "div",
              {
                className: (0, l.A)(
                  c.CollapsableSectionTitle,
                  "EventEditorTextTitle",
                ),
              },
              t,
              Boolean(n) && a.createElement(u.o, { tooltip: n }),
            ),
            a.createElement(p, { bIsMinimized: g, fnToggleMinimize: r }),
          ),
          !g && a.createElement(s.tH, null, E),
        );
      }
      function g(e) {
        const [t, n] = a.useState(Boolean(e.bStartMinimized));
        return a.createElement(
          E,
          { ...e, getMinimized: () => t, toggleMinimized: () => n(!t) },
          e.children,
        );
      }
      function p(e) {
        const { bIsMinimized: t, fnToggleMinimize: n } = e,
          l = t ? "#Section_Maximize_Tooltip" : "#Section_Minimize_Tooltip";
        return a.createElement(
          i.$n,
          { "data-tooltip-text": (0, r.we)(l), onClick: n },
          e.bIsMinimized
            ? a.createElement(o.hz4, null)
            : a.createElement(o.Xjb, null),
        );
      }
    },
  },
]);

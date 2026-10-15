/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [85836],
    {
      21521: (M, a, t) => {
        "use strict";
        t.r(a), t.d(a, { QAndARoutes: () => d, default: () => O });
        var n = t(7850),
          o = t(67628),
          e = t(92757),
          l = t(20076),
          _ = t(90783);
        const d = {
          Dashboard: (c) => `/questions/${c}/dashboard`,
          FullPageView: (c, r) => `/questions/${c}/view/${r}`,
        };
        function E(c) {
          return (0, n.jsxs)(e.dO, {
            children: [
              (0, n.jsx)(e.qh, {
                path: d.Dashboard(":vanity_str"),
                render: (r) =>
                  (0, n.jsx)(l.X, {
                    config: {
                      "qanda-root": () => {
                        const { vanity_str: m } = r.match.params;
                        return (0, n.jsx)(o.xh, { vanity_str: m });
                      },
                    },
                  }),
              }),
              (0, n.jsx)(e.qh, {
                path: d.FullPageView(":vanity_str", ":session_gid"),
                render: (r) =>
                  (0, n.jsx)(l.X, {
                    config: {
                      "qanda-root": () => {
                        const { vanity_str: m, session_gid: P } =
                          r.match.params;
                        return (0, n.jsx)(o.AC, { gidSession: P });
                      },
                    },
                  }),
              }),
              (0, n.jsx)(e.qh, { component: _.a }),
            ],
          });
        }
        const O = E;
      },
      24642: (M, a, t) => {
        "use strict";
        t.d(a, { D: () => o });
        var n = t(84346);
        function o(e) {
          return e.toLocaleString((0, n.J)());
        }
      },
      84346: (M, a, t) => {
        "use strict";
        t.d(a, { J: () => e });
        var n = t(72609),
          o = t(37901);
        function e() {
          return (0, o.A)().languages.map((_) => l(_.strISOCode));
        }
        function l(_) {
          return _.length == 2 && n.TS.COUNTRY ? `${_}-${n.TS.COUNTRY}` : _;
        }
      },
      86390: (M, a, t) => {
        "use strict";
        t.d(a, { vg: () => v });
        var n = t(7850),
          o = t(90626),
          e = t(88003),
          l = t(18210),
          _ = t(3166),
          d = t(87242),
          E = t(42780),
          O = t(94276),
          c = t(62179),
          r = t(77008),
          m = t(2801);
        function P(s) {
          return (0, n.jsx)(e.x_, {
            onEscKeypress: s.closeModal,
            bDisableBackgroundDismiss: !0,
            children: (0, n.jsx)(T, {
              redirectURL: s.redirectURL,
              guestOption: s.guestOption,
            }),
          });
        }
        function j(s) {
          const { redirectURL: i = window.location.href } = s;
          return jsx(SimpleModal, {
            active: !0,
            children: jsx(P, { redirectURL: i }),
          });
        }
        function v() {
          (0, e.pg)(
            (0, n.jsx)(P, {
              ownerWin: window,
              redirectURL: window.location.href,
            }),
            window,
            { strTitle: (0, l.we)("#Login_SignInTitle") },
          );
        }
        function C(s, i) {
          ShowModalDialog(
            jsx(P, { ownerWin: window, redirectURL: s, guestOption: i }),
            window,
            { strTitle: Localize("#Login_SignInTitle") },
          );
        }
        function T(s) {
          const { redirectURL: i, guestOption: u } = s,
            [D] = (0, o.useState)(
              new c.x(
                new r.D(_.TS.WEBAPI_BASE_URL),
              ).GetAnonymousServiceTransport(),
            ),
            [h, g] = (0, o.useState)(!1),
            L = (A) => {
              A == d.wI.k_PrimaryDomainFail ? g(!0) : window.location.assign(i);
            };
          return (0, n.jsx)("div", {
            children: h
              ? (0, n.jsx)(E.Fn, {})
              : (0, n.jsx)(E.YN, {
                  autoFocus: !0,
                  transport: D,
                  platform: O.SS.tS,
                  onComplete: L,
                  redirectUrl: i,
                  theme: "modal",
                  children: u && (0, n.jsx)(E.Mk, { redirectURL: i }),
                }),
          });
        }
      },
      12932: (M, a, t) => {
        "use strict";
        t.d(a, { AQ: () => v, pn: () => T, qx: () => C });
        var n = t(7850),
          o = t(19316),
          e = t(18210),
          l = t(36118),
          _ = t(90626),
          d = t(36707),
          E = t(95695),
          O = t.n(E),
          c = t(25792),
          r = t(64734),
          m = t.n(r),
          P = t(65946),
          j = t(11243);
        function v(s) {
          const {
              title: i,
              tooltip: u,
              getMinimized: D,
              toggleMinimized: h,
              className: g,
              children: L,
              elAdditionalButtons: A,
            } = s,
            R = (0, P.q3)(() => D());
          return (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsxs)("div", {
                className: (0, d.A)(
                  g,
                  r.SectionTitleHeader,
                  r.required_title,
                  "SectionTitleHeader",
                ),
                children: [
                  (0, n.jsxs)("div", {
                    className: (0, d.A)(
                      E.CollapsableSectionTitle,
                      "EventEditorTextTitle",
                    ),
                    children: [i, !!u && (0, n.jsx)(j.o, { tooltip: u })],
                  }),
                  (0, n.jsxs)("div", {
                    className: r.SectionTitleButtons,
                    children: [
                      A,
                      (0, n.jsx)(T, { bIsMinimized: R, fnToggleMinimize: h }),
                    ],
                  }),
                ],
              }),
              !R && (0, n.jsx)(c.tH, { children: L }),
            ],
          });
        }
        function C(s) {
          const [i, u] = _.useState(!!s.bStartMinimized);
          return (0, n.jsx)(v, {
            ...s,
            getMinimized: () => i,
            toggleMinimized: () => u(!i),
            children: s.children,
          });
        }
        function T(s) {
          const { bIsMinimized: i, fnToggleMinimize: u } = s,
            D = i ? "#Section_Maximize_Tooltip" : "#Section_Minimize_Tooltip";
          return (0, n.jsx)(o.$n, {
            "data-tooltip-text": (0, e.we)(D),
            onClick: u,
            children: s.bIsMinimized
              ? (0, n.jsx)(l.hz4, {})
              : (0, n.jsx)(l.Xjb, {}),
          });
        }
      },
      47689: (M, a, t) => {
        "use strict";
        t.d(a, { m: () => l });
        var n = t(41735),
          o = t.n(n),
          e = t(90626);
        function l(_) {
          const d = e.useRef(o().CancelToken.source());
          return (
            e.useEffect(() => {
              const E = d.current;
              return () => E.cancel(_ ? `${_}: unmounting` : "unmounting");
            }, [_]),
            d.current
          );
        }
      },
      64734: (M) => {
        M.exports = {
          SectionTitleHeader: "_2g5oNomwd2lv8wL2qlsLVA",
          SectionTitleButtons: "RGHKm1_KeaBjdzuvisfYN",
          required_title: "_3yDPZjnsoLc2FkrAH2UOEd",
        };
      },
    },
  ]);
})();

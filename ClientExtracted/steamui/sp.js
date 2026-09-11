"use strict";
(() => {
  (self.webpackChunksteamui = self.webpackChunksteamui || []).push([
    [3714],
    {
      89107: (Q, u, s) => {
        s.r(u), s.d(u, { default: () => U });
        var d = s(92819),
          t = s(62540),
          f = s(38189),
          g = s(5757),
          w = s(57531),
          e = s(63696),
          h = s(69633),
          j = s(83906),
          x = s(91432),
          c = s(19797),
          F = s(36924),
          l = s(68639),
          G = "10986482";
        const T = e.memo(function (r) {
          return (0, t.jsxs)(l.wC, {
            children: [
              (0, t.jsx)(F.L, {}),
              (0, t.jsx)(x.BV, {}),
              (0, t.jsx)(c.Gm, {}),
              (0, t.jsx)(c.Gk, {}),
            ],
          });
        });
        var I = s(71251),
          C = s(88794),
          P = s(47875),
          a = s(7528),
          S = s(16724),
          L = s(1574),
          K = "10986482";
        const m = new L.wd("ReactQuery").Debug;
        function p() {
          const [o] = e.useState(() => ({
            focusedPopup: void 0,
            timeoutFocusTransfer: void 0,
          }));
          e.useEffect(
            () => (
              m(`focusManager isVisible: ${a.m.isFocused()}`),
              a.m.subscribe((n) => m(`focusManager isVisible: ${n}`))
            ),
            [],
          );
          const r = e.useCallback(
            (n) => {
              const E = n.window.document,
                V = () => {
                  o.timeoutFocusTransfer &&
                    (window.clearTimeout(o.timeoutFocusTransfer),
                    (o.timeoutFocusTransfer = void 0));
                },
                i = () => {
                  V(), (o.focusedPopup = n), a.m.setFocused(!0);
                },
                v = () => {
                  o.focusedPopup == n &&
                    ((o.focusedPopup = void 0),
                    (o.timeoutFocusTransfer = window.setTimeout(() => {
                      console.assert(!o.focusedPopup),
                        o.focusedPopup || a.m.setFocused(!1);
                    }, 50)));
                };
              return (
                n.window.addEventListener("focus", i),
                n.window.addEventListener("blur", v),
                E.hasFocus() && i(),
                () => {
                  n.window.removeEventListener("focus", i),
                    n.window.removeEventListener("blur", v),
                    a.m.setFocused(!1);
                }
              );
            },
            [o],
          );
          (0, S.VR)(r);
        }
        var O = "10986482";
        function y(o) {
          const r = (0, d.gK)();
          return (
            p(),
            (0, t.jsx)(t.Fragment, {
              children: (0, t.jsxs)(j.EO, {
                bOnlyPopups: !0,
                children: [
                  (0, t.jsx)(T, {}),
                  r &&
                    (0, t.jsx)(f.VQ, {
                      controller: g.oy.NavigationManager,
                      children: (0, t.jsx)(h.p, {
                        children: (0, t.jsxs)(P.QA, {
                          eAdultOnlyMediaBehavior: "allowed",
                          children: [
                            (0, t.jsx)(w.us, { cm: o.cm }),
                            (0, t.jsx)(M, {}),
                          ],
                        }),
                      }),
                    }),
                ],
              }),
            })
          );
        }
        const M = e.memo(function () {
          return (0, C.u$)()
            ? (0, t.jsx)(l.tH, { children: (0, t.jsx)(I._V, {}) })
            : null;
        });
        var A = s(89193),
          $ = "10986482";
        (0, A.jK)({ enforceActions: "never" });
        function B() {
          let o = window;
          (o.ClearBackgroundInterval = window.clearInterval),
            (o.ClearBackgroundTimeout = window.clearTimeout),
            (o.SetBackgroundInterval = window.setInterval),
            (o.SetBackgroundTimeout = window.setTimeout);
        }
        async function R() {
          B(), await (0, d.KC)().Init(window.cm);
        }
        R();
        const U = y;
      },
    },
  ]);
})();
//# sourceMappingURL=file:///home/buildbot/buildslave/npm-coordinator-rel-steamui/build/client/steamui/sourcemaps/sp.js.map

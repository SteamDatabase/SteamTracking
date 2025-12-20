"use strict";
(self.webpackChunksteamui = self.webpackChunksteamui || []).push([
  [3714],
  {
    61855: (e, t, n) => {
      n.r(t), n.d(t, { default: () => h });
      var o = n(89748),
        u = n(35560),
        r = n(46422),
        c = n(10501),
        s = n(63696),
        a = n(98606),
        l = n(91435),
        i = n(50341),
        m = n(45967),
        d = n(35194),
        w = n(90095);
      const f = s.memo(function () {
        const e = (0, d.Eb)(),
          t = (0, w.q3)(() => m.qL.IsSteamVRRunning);
        return (
          s.useEffect(() => {
            t &&
              SteamClient?.OpenVR?.PathProperties?.SetBoolPathProperty(
                "/steam/oobe",
                e,
              );
          }, [e, t]),
          null
        );
      });
      var E = n(83857),
        p = n(42318);
      const v = s.memo(function (e) {
        return s.createElement(
          p.wC,
          null,
          s.createElement(E.L, null),
          s.createElement(i.BV, null),
          s.createElement(f, null),
        );
      });
      var b = n(29971),
        g = n(87913),
        F = n(59578),
        P = n(7528),
        T = n(11131);
      const k = new (n(83599).wd)("ReactQuery").Debug;
      function C() {
        const [e] = s.useState(() => ({
          focusedPopup: void 0,
          timeoutFocusTransfer: void 0,
        }));
        s.useEffect(
          () => (
            k(`focusManager isVisible: ${P.m.isFocused()}`),
            P.m.subscribe((e) => k(`focusManager isVisible: ${e}`))
          ),
          [],
        );
        const t = s.useCallback(
          (t) => {
            const n = t.window.document,
              o = () => {
                e.timeoutFocusTransfer &&
                  (window.clearTimeout(e.timeoutFocusTransfer),
                  (e.timeoutFocusTransfer = void 0)),
                  (e.focusedPopup = t),
                  P.m.setFocused(!0);
              },
              u = () => {
                e.focusedPopup == t &&
                  ((e.focusedPopup = void 0),
                  (e.timeoutFocusTransfer = window.setTimeout(() => {
                    console.assert(!e.focusedPopup),
                      e.focusedPopup || P.m.setFocused(!1);
                  }, 50)));
              };
            return (
              t.window.addEventListener("focus", o),
              t.window.addEventListener("blur", u),
              n.hasFocus() && o(),
              () => {
                t.window.removeEventListener("focus", o),
                  t.window.removeEventListener("blur", u),
                  P.m.setFocused(!1);
              }
            );
          },
          [e],
        );
        (0, T.VR)(t);
      }
      const V = s.memo(function () {
        return (0, g.u$)()
          ? s.createElement(p.tH, null, s.createElement(b._V, null))
          : null;
      });
      (0, n(89193).jK)({ enforceActions: "never" }),
        (async function () {
          !(function () {
            let e = window;
            (e.ClearBackgroundInterval = window.clearInterval),
              (e.ClearBackgroundTimeout = window.clearTimeout),
              (e.SetBackgroundInterval = window.setInterval),
              (e.SetBackgroundTimeout = window.setTimeout);
          })();
          let e = (0, o.KC)();
          await e.Init(window.cm);
        })();
      const h = function (e) {
        const t = (0, o.gK)();
        return (
          C(),
          s.createElement(
            s.Fragment,
            null,
            s.createElement(
              l.EO,
              { bOnlyPopups: !0 },
              s.createElement(v, null),
              t &&
                s.createElement(
                  u.VQ,
                  { controller: r.oy.NavigationManager },
                  s.createElement(
                    a.p,
                    null,
                    s.createElement(
                      F.QA,
                      { eAdultOnlyMediaBehavior: "allowed" },
                      s.createElement(c.u, { cm: e.cm }),
                      s.createElement(V, null),
                    ),
                  ),
                ),
            ),
          )
        );
      };
    },
  },
]); //# sourceMappingURL=file:///home/buildbot/buildslave/npm-coordinator-rel-steamui/build/client/steamui/sourcemaps/sp.js.map

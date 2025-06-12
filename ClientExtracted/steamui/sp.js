"use strict";
(self.webpackChunksteamui = self.webpackChunksteamui || []).push([
  [3714],
  {
    58616: (e, t, n) => {
      n.r(t), n.d(t, { default: () => k });
      var o = n(89748),
        u = n(35560),
        c = n(46422),
        r = n(10501),
        s = n(63696),
        a = n(98606),
        l = n(91435),
        i = n(50341),
        d = n(83857),
        m = n(42318);
      const w = s.memo(function (e) {
        return s.createElement(
          m.wC,
          null,
          s.createElement(d.L, null),
          s.createElement(i.BV, null),
        );
      });
      var f = n(29971),
        v = n(87913),
        E = n(59578),
        p = n(7528),
        b = n(11131);
      const g = new (n(83599).wd)("ReactQuery").Debug;
      function F() {
        const [e] = s.useState(() => ({
          focusedPopup: void 0,
          timeoutFocusTransfer: void 0,
        }));
        s.useEffect(
          () => (
            g(`focusManager isVisible: ${p.m.isFocused()}`),
            p.m.subscribe((e) => g(`focusManager isVisible: ${e}`))
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
                  p.m.setFocused(!0);
              },
              u = () => {
                e.focusedPopup == t &&
                  ((e.focusedPopup = void 0),
                  (e.timeoutFocusTransfer = window.setTimeout(() => {
                    console.assert(!e.focusedPopup),
                      e.focusedPopup || p.m.setFocused(!1);
                  }, 50)));
              };
            return (
              t.window.addEventListener("focus", o),
              t.window.addEventListener("blur", u),
              n.hasFocus() && o(),
              () => {
                t.window.removeEventListener("focus", o),
                  t.window.removeEventListener("blur", u),
                  p.m.setFocused(!1);
              }
            );
          },
          [e],
        );
        (0, b.VR)(t);
      }
      const T = s.memo(function () {
        return (0, v.u$)()
          ? s.createElement(m.tH, null, s.createElement(f._V, null))
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
      const k = function (e) {
        const t = (0, o.gK)();
        return (
          F(),
          s.createElement(
            s.Fragment,
            null,
            s.createElement(
              l.EO,
              { bOnlyPopups: !0 },
              s.createElement(w, null),
              t &&
                s.createElement(
                  u.VQ,
                  { controller: c.oy.NavigationManager },
                  s.createElement(
                    a.p,
                    null,
                    s.createElement(
                      E.QA,
                      { eAdultOnlyMediaBehavior: "allowed" },
                      s.createElement(r.u, { cm: e.cm }),
                      s.createElement(T, null),
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

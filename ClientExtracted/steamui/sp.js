"use strict";
(self.webpackChunksteamui = self.webpackChunksteamui || []).push([
  [3714],
  {
    81143: (e, n, t) => {
      t.r(n), t.d(n, { default: () => k });
      var l = t(89748),
        r = t(35560),
        a = t(46422),
        c = t(10501),
        u = t(63696),
        o = t(98606),
        m = t(91435),
        i = t(50341),
        s = t(83857),
        w = t(42318);
      const E = u.memo(function (e) {
        return u.createElement(
          w.wC,
          null,
          u.createElement(s.L, null),
          u.createElement(i.BV, null),
        );
      });
      var d = t(29971),
        f = t(87913);
      const g = u.memo(function () {
        return (0, f.u$)()
          ? u.createElement(w.tH, null, u.createElement(d._V, null))
          : null;
      });
      (0, t(89193).jK)({ enforceActions: "never" }),
        (async function () {
          !(function () {
            let e = window;
            (e.ClearBackgroundInterval = window.clearInterval),
              (e.ClearBackgroundTimeout = window.clearTimeout),
              (e.SetBackgroundInterval = window.setInterval),
              (e.SetBackgroundTimeout = window.setTimeout);
          })();
          let e = (0, l.KC)();
          await e.Init(window.cm);
        })();
      const k = function (e) {
        const n = (0, l.gK)();
        return u.createElement(
          u.Fragment,
          null,
          u.createElement(
            m.EO,
            { bOnlyPopups: !0 },
            u.createElement(E, null),
            n &&
              u.createElement(
                r.VQ,
                { controller: a.oy.NavigationManager },
                u.createElement(
                  o.p,
                  null,
                  u.createElement(c.u, { cm: e.cm }),
                  u.createElement(g, null),
                ),
              ),
          ),
        );
      };
    },
  },
]); //# sourceMappingURL=file:///home/buildbot/buildslave/npm-coordinator-rel-steamui/build/client/steamui/sourcemaps/sp.js.map

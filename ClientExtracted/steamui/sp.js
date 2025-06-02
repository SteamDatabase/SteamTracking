"use strict";
(self.webpackChunksteamui = self.webpackChunksteamui || []).push([
  [3714],
  {
    81143: (e, n, t) => {
      t.r(n), t.d(n, { default: () => k });
      var l = t(89748),
        a = t(35560),
        r = t(46422),
        c = t(10501),
        u = t(63696),
        o = t(98606),
        m = t(91435),
        i = t(50341),
        w = t(83857),
        s = t(42318);
      const d = u.memo(function (e) {
        return u.createElement(
          s.wC,
          null,
          u.createElement(w.L, null),
          u.createElement(i.BV, null),
        );
      });
      var E = t(29971),
        f = t(87913),
        v = t(59578);
      const g = u.memo(function () {
        return (0, f.u$)()
          ? u.createElement(s.tH, null, u.createElement(E._V, null))
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
            u.createElement(d, null),
            n &&
              u.createElement(
                a.VQ,
                { controller: r.oy.NavigationManager },
                u.createElement(
                  o.p,
                  null,
                  u.createElement(
                    v.QA,
                    { eAdultOnlyMediaBehavior: "allowed" },
                    u.createElement(c.u, { cm: e.cm }),
                    u.createElement(g, null),
                  ),
                ),
              ),
          ),
        );
      };
    },
  },
]); //# sourceMappingURL=file:///home/buildbot/buildslave/npm-coordinator-rel-steamui/build/client/steamui/sourcemaps/sp.js.map

"use strict";
(self.webpackChunksteamui = self.webpackChunksteamui || []).push([
  [3714],
  {
    26965: (e, t, n) => {
      n.r(t), n.d(t, { default: () => C });
      var a = n(89748),
        l = n(35560),
        c = n(8326),
        r = n(46422),
        o = n(10501),
        u = n(63696),
        m = n(4855),
        i = n(46382),
        s = n(5859),
        w = n(43691);
      function E(e) {
        const { msDelayBatch: t, children: n } = e,
          a = (0, i.rW)(),
          l = u.useMemo(
            () => ({
              country: w.TS.COUNTRY,
              language: w.TS.LANGUAGE,
              realm: w.TS.EREALM,
            }),
            [],
          );
        return (
          u.useEffect(() => s.A.Initialize(a), [a]),
          u.createElement(
            m.V3,
            {
              context: l,
              msDelayBatch: t,
              legacyCacheStoreItemData: s.A.Get().ReadItem,
            },
            n,
          )
        );
      }
      var d = n(91435),
        f = n(50341),
        g = n(83857),
        k = n(42318);
      const v = u.memo(function (e) {
        return u.createElement(
          k.wC,
          null,
          u.createElement(g.L, null),
          u.createElement(f.BV, null),
        );
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
          let e = (0, a.KC)();
          await e.Init(window.cm);
        })();
      const C = function (e) {
        const t = (0, a.gK)();
        return (
          (0, c.E4)(1920, 1080),
          u.createElement(
            u.Fragment,
            null,
            u.createElement(
              d.EO,
              { bOnlyPopups: !0 },
              u.createElement(v, null),
              t &&
                u.createElement(
                  l.VQ,
                  { controller: r.oy.NavigationManager },
                  u.createElement(E, null, u.createElement(o.u, { cm: e.cm })),
                ),
            ),
          )
        );
      };
    },
  },
]); //# sourceMappingURL=file:///home/buildbot/buildslave/npm-coordinator-rel-steamui/build/client/steamui/sourcemaps/sp.js.map

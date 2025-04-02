"use strict";
(self.webpackChunksteamui = self.webpackChunksteamui || []).push([
  [3714],
  {
    26965: (e, t, n) => {
      n.r(t), n.d(t, { default: () => v });
      var a = n(89748),
        l = n(35560),
        c = n(46422),
        r = n(10501),
        o = n(63696),
        u = n(4855),
        m = n(46382),
        i = n(5859),
        s = n(43691);
      function w(e) {
        const { msDelayBatch: t, children: n } = e,
          a = (0, m.rW)(),
          l = o.useMemo(
            () => ({
              country: s.TS.COUNTRY,
              language: s.TS.LANGUAGE,
              realm: s.TS.EREALM,
            }),
            [],
          );
        return (
          o.useEffect(() => i.A.Initialize(a), [a]),
          o.createElement(
            u.V3,
            {
              context: l,
              msDelayBatch: t,
              legacyCacheStoreItemData: i.A.Get().ReadItem,
            },
            n,
          )
        );
      }
      var E = n(91435),
        d = n(50341),
        f = n(83857),
        g = n(42318);
      const k = o.memo(function (e) {
        return o.createElement(
          g.wC,
          null,
          o.createElement(f.L, null),
          o.createElement(d.BV, null),
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
      const v = function (e) {
        const t = (0, a.gK)();
        return o.createElement(
          o.Fragment,
          null,
          o.createElement(
            E.EO,
            { bOnlyPopups: !0 },
            o.createElement(k, null),
            t &&
              o.createElement(
                l.VQ,
                { controller: c.oy.NavigationManager },
                o.createElement(w, null, o.createElement(r.u, { cm: e.cm })),
              ),
          ),
        );
      };
    },
  },
]); //# sourceMappingURL=file:///home/buildbot/buildslave/npm-coordinator-hotfix-steamui/build/client/steamui/sourcemaps/sp.js.map

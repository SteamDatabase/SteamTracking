"use strict";
(self.webpackChunksteamui = self.webpackChunksteamui || []).push([
  [3714],
  {
    3524: (e, n, t) => {
      t.r(n), t.d(n, { default: () => w });
      var l = t(89748),
        a = t(8326),
        c = t(49566),
        r = t(63696),
        u = t(91435),
        o = t(50341),
        i = t(83857),
        m = t(42318);
      const s = r.memo(function (e) {
        return r.createElement(
          m.wC,
          null,
          r.createElement(i.L, null),
          r.createElement(o.BV, null),
        );
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
      const w = function (e) {
        const n = (0, l.gK)();
        return (
          (0, a.E4)(1920, 1080),
          r.createElement(
            r.Fragment,
            null,
            r.createElement(
              u.EO,
              { bOnlyPopups: !0 },
              r.createElement(s, null),
              n && r.createElement(c.us, { cm: e.cm }),
            ),
          )
        );
      };
    },
  },
]); //# sourceMappingURL=file:///home/buildbot/buildslave/npm-coordinator-rel-steamui/build/client/steamui/sourcemaps/sp.js.map

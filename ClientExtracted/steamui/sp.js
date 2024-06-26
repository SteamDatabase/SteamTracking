"use strict";
(self.webpackChunksteamui = self.webpackChunksteamui || []).push([
  [5742],
  {
    99020: (e, n, t) => {
      t.r(n), t.d(n, { default: () => w });
      var l = t(9528),
        a = t(90829),
        c = t(74501),
        r = t(27378),
        u = t(31518),
        o = t(25451),
        i = t(31874),
        m = t(90660);
      const s = r.memo(function (e) {
        return r.createElement(
          m.DT,
          null,
          r.createElement(i.X, null),
          r.createElement(o.W8, null),
        );
      });
      (0, t(79588).jQ)({ enforceActions: "never" }),
        (async function () {
          !(function () {
            let e = window;
            (e.ClearBackgroundInterval = window.clearInterval),
              (e.ClearBackgroundTimeout = window.clearTimeout),
              (e.SetBackgroundInterval = window.setInterval),
              (e.SetBackgroundTimeout = window.setTimeout);
          })();
          let e = (0, l.xz)();
          await e.Init(window.cm);
        })();
      const w = function (e) {
        const n = (0, l.gl)();
        return (
          (0, a.pJ)(1920, 1080),
          r.createElement(
            r.Fragment,
            null,
            r.createElement(
              u.Y0,
              { bOnlyPopups: !0 },
              r.createElement(s, null),
              n && r.createElement(c.g1, { cm: e.cm }),
            ),
          )
        );
      };
    },
  },
]);
//# sourceMappingURL=sourcemaps/sp.js.map

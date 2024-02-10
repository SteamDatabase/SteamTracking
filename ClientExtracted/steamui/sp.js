"use strict";
(self.webpackChunksteamui = self.webpackChunksteamui || []).push([
  [5742],
  {
    99020: (e, n, t) => {
      t.r(n), t.d(n, { default: () => s });
      var l = t(85556),
        c = t(36512),
        o = t(90829),
        r = t(14413),
        u = t(27378),
        a = t(31518),
        i = t(31874),
        m = t(90660);
      const d = u.memo(function (e) {
        return u.createElement(m.DT, null, u.createElement(i.X, null));
      });
      (0, t(79588).jQ)({ enforceActions: "never" }),
        (function () {
          (0, l.mG)(this, void 0, void 0, function* () {
            !(function () {
              let e = window;
              (e.ClearBackgroundInterval = window.clearInterval),
                (e.ClearBackgroundTimeout = window.clearTimeout),
                (e.SetBackgroundInterval = window.setInterval),
                (e.SetBackgroundTimeout = window.setTimeout);
            })();
            let e = (0, c.xz)();
            yield e.Init(window.cm);
          });
        })();
      const s = function (e) {
        const n = (0, c.gl)();
        return (
          (0, o.pJ)(1920, 1080),
          u.createElement(
            u.Fragment,
            null,
            u.createElement(
              a.Y0,
              { bOnlyPopups: !0 },
              u.createElement(d, null),
              n && u.createElement(r.g1, { cm: e.cm }),
            ),
          )
        );
      };
    },
  },
]);
//# sourceMappingURL=sourcemaps/sp.js.map

"use strict";
(self.webpackChunksteamui = self.webpackChunksteamui || []).push([
  [5742],
  {
    22350: (e, t, n) => {
      n.r(t), n.d(t, { default: () => r });
      var o = n(70655),
        a = n(6766),
        i = n(67294),
        l = n(16519),
        u = n(94760),
        c = n(71388);
      !(function () {
        (0, o.mG)(this, void 0, void 0, function* () {
          !(function () {
            let e = window;
            (e.ClearBackgroundInterval = window.clearInterval),
              (e.ClearBackgroundTimeout = window.clearTimeout),
              (e.SetBackgroundInterval = window.setInterval),
              (e.SetBackgroundTimeout = window.setTimeout);
          })();
          let e = (0, a.xz)();
          yield e.Init(window.cm);
        });
      })();
      const r = function (e) {
        const t = (0, a.gl)();
        return (
          (0, l.pJ)(1920, 1080),
          i.createElement(
            i.Fragment,
            null,
            i.createElement(
              c.ModalRoot,
              { bOnlyPopups: !0 },
              t && i.createElement(u.g1, { cm: e.cm }),
            ),
          )
        );
      };
    },
  },
]);
//# sourceMappingURL=sourcemaps\sp.js.map

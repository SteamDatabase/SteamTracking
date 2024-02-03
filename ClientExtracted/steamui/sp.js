"use strict";
(self.webpackChunksteamui = self.webpackChunksteamui || []).push([
  [5742],
  {
    67131: (e, n, t) => {
      t.r(n), t.d(n, { default: () => v });
      var r = t(85556),
        a = t(36512),
        i = t(90829),
        o = t(14413),
        l = t(27378),
        c = t(31518),
        u = t(76512),
        s = t(56552),
        m = t(34656);
      var d = t(60335);
      const f = l.memo(function () {
        const e = (0, s.useQueryClient)();
        return (
          (function (e, n) {
            const t = (0, m.rK)();
            (0, l.useEffect)(() => {
              if (t)
                return t.messageHandlers.RegisterServiceNotificationHandler(
                  e,
                  n,
                ).unregister;
            }, [t, e, n]);
          })(
            u.oD.NotifyPrivateAppListChangedHandler,
            l.useCallback(
              (n) => ((0, d.z3)(e, n.Body().private_apps().appids()), 1),
              [e],
            ),
          ),
          null
        );
      });
      var w = t(90660);
      const p = l.memo(function (e) {
        return l.createElement(w.DT, null, l.createElement(f, null));
      });
      (0, t(79588).jQ)({ enforceActions: "never" }),
        (function () {
          (0, r.mG)(this, void 0, void 0, function* () {
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
      const v = function (e) {
        const n = (0, a.gl)();
        return (
          (0, i.pJ)(1920, 1080),
          l.createElement(
            l.Fragment,
            null,
            l.createElement(
              c.Y0,
              { bOnlyPopups: !0 },
              l.createElement(p, null),
              n && l.createElement(o.g1, { cm: e.cm }),
            ),
          )
        );
      };
    },
  },
]);
//# sourceMappingURL=sourcemaps/sp.js.map

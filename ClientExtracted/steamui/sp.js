"use strict";
(self.webpackChunksteamui = self.webpackChunksteamui || []).push([
  [5742],
  {
    67131: (e, n, t) => {
      t.r(n), t.d(n, { default: () => p });
      var r = t(85556),
        o = t(36512),
        a = t(90829),
        i = t(72927),
        u = t(27378),
        c = t(31518),
        l = t(76512),
        s = t(56552),
        d = t(34656);
      var m = t(60335);
      const f = u.memo(function () {
        const e = (0, s.useQueryClient)();
        return (
          (function (e, n) {
            const t = (0, d.useActiveCMInterface)();
            (0, u.useEffect)(() => {
              if (t)
                return t.messageHandlers.RegisterServiceNotificationHandler(
                  e,
                  n,
                ).unregister;
            }, [t, e, n]);
          })(
            l.oD.NotifyPrivateAppListChangedHandler,
            u.useCallback(
              (n) => ((0, m.z3)(e, n.Body().private_apps().appids()), 1),
              [e],
            ),
          ),
          null
        );
      });
      var v = t(90660);
      const w = u.memo(function (e) {
        return u.createElement(
          v.MultiErrorBoundary,
          null,
          u.createElement(f, null),
        );
      });
      (0, t(79588).configure)({ enforceActions: "never" }),
        (function () {
          (0, r.mG)(this, void 0, void 0, function* () {
            !(function () {
              let e = window;
              (e.ClearBackgroundInterval = window.clearInterval),
                (e.ClearBackgroundTimeout = window.clearTimeout),
                (e.SetBackgroundInterval = window.setInterval),
                (e.SetBackgroundTimeout = window.setTimeout);
            })();
            let e = (0, o.xz)();
            yield e.Init(window.cm);
          });
        })();
      const p = function (e) {
        const n = (0, o.gl)();
        return (
          (0, a.pJ)(1920, 1080),
          u.createElement(
            u.Fragment,
            null,
            u.createElement(
              c.ModalRoot,
              { bOnlyPopups: !0 },
              u.createElement(w, null),
              n && u.createElement(i.g1, { cm: e.cm }),
            ),
          )
        );
      };
    },
  },
]);
//# sourceMappingURL=sourcemaps/sp.js.map

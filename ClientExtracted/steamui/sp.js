"use strict";
(self.webpackChunksteamui = self.webpackChunksteamui || []).push([
  [5742],
  {
    52781: (e, n, t) => {
      t.r(n), t.d(n, { default: () => p });
      var r = t(97582),
        o = t(84839),
        a = t(16519),
        i = t(74290),
        u = t(67294),
        c = t(71388),
        l = t(74784),
        s = t(88767),
        d = t(78884);
      var m = t(8838);
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
      var v = t(66694);
      const w = u.memo(function (e) {
        return u.createElement(
          v.MultiErrorBoundary,
          null,
          u.createElement(f, null),
        );
      });
      (0, t(68949).configure)({ enforceActions: "never" }),
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
//# sourceMappingURL=sourcemaps\sp.js.map

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [556],
  {
    57237: (e) => {
      e.exports = {
        "duration-app-launch": "800ms",
        DiscoveryQueueWidgetCtn:
          "discoveryqueueappwidget_DiscoveryQueueWidgetCtn_1LXqx",
        WidgetText: "discoveryqueueappwidget_WidgetText_co4IP",
        WidgetCapsule: "discoveryqueueappwidget_WidgetCapsule_ZyOLs",
        CloseButton: "discoveryqueueappwidget_CloseButton_bfN8k",
        Y: "discoveryqueueappwidget_Y_1FD7r",
      };
    },
    34425: (e, t, r) => {
      "use strict";
      r.d(t, { p: () => a });
      var n = r(70655),
        o = r(67294),
        i = r(7707),
        u = r(27745),
        s = r(64839),
        l = r(90666);
      function a(e) {
        const { children: t, navTreeRef: r } = e,
          a = (0, n._T)(e, ["children", "navTreeRef"]),
          c = o.useRef(),
          d = (0, s.BE)(c, r);
        if ((0, l.id)()) {
          const e = window.__nav_tree_root;
          return o.createElement(
            i.Fe,
            Object.assign({}, a, {
              navTreeRef: d,
              secondary: !0,
              parentEmbeddedNavTree: e,
            }),
            o.createElement(u.O, null, t)
          );
        }
        return o.createElement(o.Fragment, null, t);
      }
    },
    2523: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { default: () => y });
      var n = r(67294),
        o = (r(54698), r(34425)),
        i = r(35921),
        u = (r(12505), r(10767), r(71174)),
        s = r(6843),
        l = r(52114),
        a = r(31933),
        c = r(95598),
        d = r(99946),
        p = r(27717),
        v = r(41311),
        g = r(57237),
        m = r.n(g),
        _ = r(90666);
      function y(e) {
        const { appID: t } = e,
          r = (0, p.g)(),
          [g] = (0, a.Ar)("inqueue", "0"),
          [y, f] = (0, n.useState)(!1),
          [D, E] = (0, n.useState)(!1),
          [C] = (0, l.vs)(t, { include_assets: !0 }),
          T = (0, u.L)(),
          b = n.useRef();
        n.useEffect(() => {
          var e;
          return null === (e = b.current) || void 0 === e
            ? void 0
            : e.Activate(!0);
        }, []);
        const x = (0, _.id)(),
          { eStoreDiscoveryQueueType: Q, storePageFilter: S } =
            n.useMemo(() => {
              if ((null == g ? void 0 : g.length) > 0) {
                const e = g.split("_"),
                  t = Number(e[0]);
                let r;
                return (
                  e.length > 1 && (r = (0, s.M_)(e[1])),
                  { eStoreDiscoveryQueueType: t, storePageFilter: r }
                );
              }
              return { eStoreDiscoveryQueueType: 0, storePageFilter: void 0 };
            }, [g]),
          W = n.useCallback(() => {
            E(!0);
          }, []),
          w = n.useCallback(() => {
            f(!0);
          }, []),
          h = (0, s.ZP)(Q, S);
        return r && C
          ? D
            ? null
            : n.createElement(
                o.p,
                {
                  NavigationManager: T,
                  navTreeRef: b,
                  navID: "DiscoveryQueueAppWidget",
                },
                n.createElement(
                  i.s,
                  {
                    focusable: !0,
                    className: m().DiscoveryQueueWidgetCtn,
                    onSecondaryButton: W,
                    onOKButton: w,
                    onOKActionDescription: (0, v.Xx)(
                      "#DiscoveryQueue_ResumeWizard"
                    ),
                    onSecondaryActionDescription: (0, v.Xx)("#Button_Close"),
                  },
                  n.createElement("img", {
                    className: m().WidgetCapsule,
                    src:
                      null == C ? void 0 : C.GetAssets().GetSmallCapsuleURL(),
                  }),
                  n.createElement(
                    "div",
                    { onClick: w, className: m().WidgetText },
                    (0, v.Xx)("#DiscoveryQueue_ResumeWizard"),
                    (null == h ? void 0 : h.length) > 0 && ": " + h
                  ),
                  !x &&
                    n.createElement(
                      "div",
                      { className: m().CloseButton, onClick: W },
                      n.createElement(c.X, null)
                    ),
                  y &&
                    n.createElement(d.MS, {
                      includeAppID: t,
                      bWizardVisible: y,
                      fnCloseModal: () => f(!1),
                      eStoreDiscoveryQueueType: Q,
                      storePageFilter: S,
                    })
                )
              )
          : null;
      }
    },
    95664: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { default: () => d });
      var n = r(67294),
        o = (r(10767), r(41311)),
        i = r(99946),
        u = r(27717),
        s = r(35921),
        l = r(90666),
        a = r(84351),
        c = r(59650);
      function d(e) {
        const t = (0, u.g)(),
          [r, d] = (0, n.useState)(!1),
          p = n.useCallback(() => {
            l.L7.logged_in
              ? d(!0)
              : (0, c.AM)(
                  n.createElement(a.JX, {
                    onOK: () => {
                      window.location.href = `${
                        l.De.STORE_BASE_URL
                      }login?redir=${encodeURIComponent(
                        document.location.href
                      )}`;
                    },
                    strOKButtonText: (0, o.Xx)(
                      "#DiscoveryQueue_Error_Login_Title"
                    ),
                    strDescription: (0, o.Xx)("#DiscoveryQueue_Error_Login"),
                    strTitle: (0, o.Xx)("#DiscoveryQueue_Error_Login_Title"),
                  }),
                  window
                );
          }, []);
        return t
          ? n.createElement(
              s.s,
              null,
              n.createElement(
                "a",
                { onClick: p, className: "experiment-button" },
                (0, o.Xx)("#DiscoveryQueue_OpenWizard")
              ),
              r &&
                n.createElement(i.MS, {
                  bWizardVisible: r,
                  fnCloseModal: () => d(!1),
                  eStoreDiscoveryQueueType: 0,
                })
            )
          : n.createElement(
              "div",
              { className: "experiment-button-placeholder" },
              " "
            );
      }
    },
  },
]);

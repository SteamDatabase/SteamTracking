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
      r.d(t, { p: () => c });
      var n = r(70655),
        o = r(67294),
        i = r(7707),
        u = r(27745),
        s = r(64839),
        a = r(90666),
        l = r(9198);
      function c(e) {
        const { children: t, navTreeRef: r } = e,
          c = (0, n._T)(e, ["children", "navTreeRef"]),
          d = o.useRef(),
          v = (0, s.BE)(d, r),
          p = (0, a.id)(),
          _ = window.__virtual_keyboard_client;
        if (
          ((0, o.useEffect)(() => {
            l.Wz.SetHookFactory(() => _);
          }, [_]),
          p)
        ) {
          const e = window.__nav_tree_root;
          return o.createElement(
            i.Fe,
            Object.assign({}, c, {
              navTreeRef: v,
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
        o = (r(92398), r(34425)),
        i = r(35921),
        u = (r(12505), r(10767), r(71174)),
        s = r(6843),
        a = r(52114),
        l = r(31933),
        c = r(95598),
        d = r(99946),
        v = r(27717),
        p = r(41311),
        _ = r(57237),
        g = r.n(_),
        m = r(90666);
      function y(e) {
        const { appID: t } = e,
          r = (0, v.g)(),
          [_] = (0, l.Ar)("inqueue", "0"),
          [y, f] = (0, n.useState)(!1),
          [E, D] = (0, n.useState)(!1),
          [C] = (0, a.vs)(t, { include_assets: !0 }),
          T = (0, u.L)(),
          b = n.useRef();
        n.useEffect(() => {
          var e;
          return null === (e = b.current) || void 0 === e
            ? void 0
            : e.Activate(!0);
        }, []);
        const S = (0, m.id)(),
          { eStoreDiscoveryQueueType: W, storePageFilter: w } =
            n.useMemo(() => {
              if ((null == _ ? void 0 : _.length) > 0) {
                const e = _.split("_"),
                  t = Number(e[0]);
                let r;
                return (
                  e.length > 1 && (r = (0, s.M_)(e[1])),
                  { eStoreDiscoveryQueueType: t, storePageFilter: r }
                );
              }
              return { eStoreDiscoveryQueueType: 0, storePageFilter: void 0 };
            }, [_]),
          x = n.useCallback(() => {
            D(!0);
          }, []),
          Q = n.useCallback(() => {
            f(!0);
          }, []),
          k = (0, s.ZP)(W, w);
        return r && C
          ? E
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
                    className: g().DiscoveryQueueWidgetCtn,
                    onSecondaryButton: x,
                    onOKButton: Q,
                    onOKActionDescription: (0, p.Xx)(
                      "#DiscoveryQueue_ResumeWizard"
                    ),
                    onSecondaryActionDescription: (0, p.Xx)("#Button_Close"),
                  },
                  n.createElement("img", {
                    className: g().WidgetCapsule,
                    src:
                      null == C ? void 0 : C.GetAssets().GetSmallCapsuleURL(),
                  }),
                  n.createElement(
                    "div",
                    { onClick: Q, className: g().WidgetText },
                    (0, p.Xx)("#DiscoveryQueue_ResumeWizard"),
                    (null == k ? void 0 : k.length) > 0 && ": " + k
                  ),
                  !S &&
                    n.createElement(
                      "div",
                      { className: g().CloseButton, onClick: x },
                      n.createElement(c.X, null)
                    ),
                  y &&
                    n.createElement(d.MS, {
                      includeAppID: t,
                      bWizardVisible: y,
                      fnCloseModal: () => f(!1),
                      eStoreDiscoveryQueueType: W,
                      storePageFilter: w,
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
        a = r(90666),
        l = r(84351),
        c = r(59650);
      function d(e) {
        const t = (0, u.g)(),
          [r, d] = (0, n.useState)(!1),
          v = n.useCallback(() => {
            a.L7.logged_in
              ? d(!0)
              : (0, c.AM)(
                  n.createElement(l.JX, {
                    onOK: () => {
                      window.location.href = `${
                        a.De.STORE_BASE_URL
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
                { onClick: v, className: "experiment-button" },
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

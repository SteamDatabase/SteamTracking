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
    34425: (e, t, n) => {
      "use strict";
      n.d(t, { p: () => c });
      var r = n(70655),
        i = n(67294),
        o = n(7707),
        s = n(27745),
        u = n(64839),
        a = n(90666);
      function c(e) {
        const { children: t, navTreeRef: n } = e,
          c = (0, r._T)(e, ["children", "navTreeRef"]),
          l = i.useRef(),
          d = (0, u.BE)(l, n);
        if (a.De.IN_GAMEPADUI) {
          const e = window.__nav_tree_root;
          return i.createElement(
            o.Fe,
            Object.assign({}, c, {
              navTreeRef: d,
              secondary: !0,
              parentEmbeddedNavTree: e,
            }),
            i.createElement(s.O, null, t)
          );
        }
        return i.createElement(i.Fragment, null, t);
      }
    },
    2523: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => g });
      var r = n(67294),
        i = (n(10767), n(90666)),
        o = (n(54698), n(31933)),
        s = n(35921),
        u = n(57237),
        a = n.n(u),
        c = n(41311),
        l = n(76513),
        d = n(27717),
        p = n(95598),
        v = n(52114),
        _ = n(34425),
        m = n(71174);
      n(12505);
      function g(e) {
        const { appID: t } = e,
          n = (0, d.g)(),
          [u] = (0, o.Ar)("inqueue", 0),
          [g, E] = (0, r.useState)(!1),
          [D, y] = (0, r.useState)(!1),
          [f] = (0, v.vs)(t, { include_assets: !0 }),
          C = (0, m.L)(),
          T = r.useRef();
        r.useEffect(() => {
          var e;
          return null === (e = T.current) || void 0 === e
            ? void 0
            : e.Activate(!0);
        }, []);
        const b = r.useCallback(() => {
            y(!0);
          }, []),
          x = r.useCallback(() => {
            E(!0);
          }, []);
        return n && f
          ? D
            ? null
            : r.createElement(
                _.p,
                {
                  NavigationManager: C,
                  navTreeRef: T,
                  navID: "DiscoveryQueueAppWidget",
                },
                r.createElement(
                  s.s,
                  {
                    focusable: !0,
                    className: a().DiscoveryQueueWidgetCtn,
                    onSecondaryButton: b,
                    onOKButton: x,
                    onOKActionDescription: (0, c.Xx)(
                      "#DiscoveryQueue_ResumeWizard"
                    ),
                    onSecondaryActionDescription: (0, c.Xx)("#Button_Close"),
                  },
                  r.createElement("img", {
                    className: a().WidgetCapsule,
                    src:
                      null == f ? void 0 : f.GetAssets().GetSmallCapsuleURL(),
                  }),
                  r.createElement(
                    "div",
                    { onClick: x, className: a().WidgetText },
                    (0, c.Xx)("#DiscoveryQueue_ResumeWizard")
                  ),
                  !i.De.IN_GAMEPADUI &&
                    r.createElement(
                      "div",
                      { className: a().CloseButton, onClick: b },
                      r.createElement(p.X, null)
                    ),
                  g &&
                    r.createElement(l.MS, {
                      includeAppID: t,
                      bWizardVisible: g,
                      fnCloseModal: () => E(!1),
                      eStoreDiscoveryQueueType: u,
                    })
                )
              )
          : null;
      }
    },
    95664: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => d });
      var r = n(67294),
        i = (n(10767), n(41311)),
        o = n(76513),
        s = n(27717),
        u = n(35921),
        a = n(90666),
        c = n(84351),
        l = n(59650);
      function d(e) {
        const t = (0, s.g)(),
          [n, d] = (0, r.useState)(!1),
          p = r.useCallback(() => {
            a.L7.logged_in
              ? d(!0)
              : (0, l.AM)(
                  r.createElement(c.JX, {
                    onOK: () => {
                      window.location.href = `${
                        a.De.STORE_BASE_URL
                      }login?redir=${encodeURIComponent(
                        document.location.href
                      )}`;
                    },
                    strOKButtonText: (0, i.Xx)(
                      "#DiscoveryQueue_Error_Login_Title"
                    ),
                    strDescription: (0, i.Xx)("#DiscoveryQueue_Error_Login"),
                    strTitle: (0, i.Xx)("#DiscoveryQueue_Error_Login_Title"),
                  }),
                  window
                );
          }, []);
        return t
          ? r.createElement(
              u.s,
              null,
              r.createElement(
                "a",
                { onClick: p, className: "experiment-button" },
                (0, i.Xx)("#DiscoveryQueue_OpenWizard")
              ),
              n &&
                r.createElement(o.MS, {
                  bWizardVisible: n,
                  fnCloseModal: () => d(!1),
                  eStoreDiscoveryQueueType: 0,
                })
            )
          : r.createElement(
              "div",
              { className: "experiment-button-placeholder" },
              " "
            );
      }
    },
  },
]);

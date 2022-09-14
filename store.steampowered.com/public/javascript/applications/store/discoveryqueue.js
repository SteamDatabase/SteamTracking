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
        s = n(67294),
        o = n(7707),
        u = n(27745),
        i = n(22975),
        a = n(90666);
      function c(e) {
        const { children: t, navTreeRef: n } = e,
          c = (0, r._T)(e, ["children", "navTreeRef"]),
          l = s.useRef(),
          d = (0, i.BE)(l, n);
        if (a.De.IN_GAMEPADUI) {
          const e = window.__nav_tree_root;
          return s.createElement(
            o.Fe,
            Object.assign({}, c, {
              navTreeRef: d,
              secondary: !0,
              parentEmbeddedNavTree: e,
            }),
            s.createElement(u.O, null, t)
          );
        }
        return s.createElement(s.Fragment, null, t);
      }
    },
    2523: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => g });
      var r = n(67294),
        s = (n(10767), n(90666)),
        o = (n(54698), n(31933)),
        u = n(35921),
        i = n(57237),
        a = n.n(i),
        c = n(41311),
        l = n(74686),
        d = n(27717),
        p = n(95598),
        v = n(52114),
        _ = n(34425),
        m = n(71174);
      n(12505);
      function g(e) {
        const { appID: t } = e,
          n = (0, d.g)(),
          [i] = (0, o.Ar)("inqueue", 0),
          [g, C] = (0, r.useState)(!1),
          [D, y] = (0, r.useState)(!1),
          [E] = (0, v.vs)(t, { include_assets: !0 }),
          f = (0, m.L)(),
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
            C(!0);
          }, []);
        return n && E
          ? D
            ? null
            : r.createElement(
                _.p,
                {
                  NavigationManager: f,
                  navTreeRef: T,
                  navID: "DiscoveryQueueAppWidget",
                },
                r.createElement(
                  u.s,
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
                      null == E ? void 0 : E.GetAssets().GetSmallCapsuleURL(),
                  }),
                  r.createElement(
                    "div",
                    { onClick: x, className: a().WidgetText },
                    (0, c.Xx)("#DiscoveryQueue_ResumeWizard")
                  ),
                  !s.De.IN_GAMEPADUI &&
                    r.createElement(
                      "div",
                      { className: a().CloseButton, onClick: b },
                      r.createElement(p.X, null)
                    ),
                  g &&
                    r.createElement(l.MS, {
                      includeAppID: t,
                      bWizardVisible: g,
                      strUserCountry: s.De.COUNTRY,
                      fnCloseModal: () => C(!1),
                      eStoreDiscoveryQueueType: i,
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
        s = (n(10767), n(41311)),
        o = n(74686),
        u = n(27717),
        i = n(35921),
        a = n(90666),
        c = n(84351),
        l = n(59650);
      function d(e) {
        const t = (0, u.g)(),
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
                    strOKButtonText: (0, s.Xx)(
                      "#DiscoveryQueue_Error_Login_Title"
                    ),
                    strDescription: (0, s.Xx)("#DiscoveryQueue_Error_Login"),
                    strTitle: (0, s.Xx)("#DiscoveryQueue_Error_Login_Title"),
                  }),
                  window
                );
          }, []);
        return t
          ? r.createElement(
              i.s,
              null,
              r.createElement(
                "a",
                { onClick: p, className: "experiment-button" },
                (0, s.Xx)("#DiscoveryQueue_OpenWizard")
              ),
              n &&
                r.createElement(o.MS, {
                  bWizardVisible: n,
                  strUserCountry: a.De.COUNTRY,
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

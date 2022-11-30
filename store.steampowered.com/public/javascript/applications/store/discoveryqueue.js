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
        u = n(27745),
        s = n(64839),
        a = n(90666),
        l = n(9198);
      function c(e) {
        const { children: t, navTreeRef: n } = e,
          c = (0, r._T)(e, ["children", "navTreeRef"]),
          d = i.useRef(),
          v = (0, s.BE)(d, n),
          _ = (0, a.id)(),
          p = window.__virtual_keyboard_client;
        if (
          ((0, i.useEffect)(() => {
            l.Wz.SetHookFactory(() => p);
          }, [p]),
          _)
        ) {
          const e = window.__nav_tree_root;
          return i.createElement(
            o.Fe,
            Object.assign({}, c, {
              navTreeRef: v,
              secondary: !0,
              parentEmbeddedNavTree: e,
            }),
            i.createElement(u.O, null, t)
          );
        }
        return i.createElement(i.Fragment, null, t);
      }
    },
    27991: (e, t, n) => {
      "use strict";
      n.d(t, { NX: () => d, nf: () => v, ue: () => _ });
      var r = n(70655),
        i = n(37694),
        o = n(67294),
        u = n(65902),
        s = n(159),
        a = n(74163),
        l = n(77520),
        c = n(90666);
      function d() {
        const e = (0, a.T)("usePartnerStoreBrowseAPI"),
          [t, n] = (0, o.useState)(!1);
        return (
          (0, o.useEffect)(() => {
            (function (e = !1) {
              return (0, r.mG)(this, void 0, void 0, function* () {
                if (e && s.Z.BIsInitialized()) return;
                const t = (0, c.kQ)(
                  "partnerbrowse_webapi_token",
                  "application_config"
                );
                (0, l.X)(Boolean(t), "require partnerbrowse_webapi_token");
                const n = new u.J(c.De.WEBAPI_BASE_URL, t);
                return (
                  ("dev" != c.De.WEB_UNIVERSE && "beta" != c.De.WEB_UNIVERSE) ||
                    console.log(
                      "DEV_DEBUG: Initializing CStoreItemCache with access token",
                      t
                    ),
                  v(t),
                  s.Z.Initialize(n, c.L7.is_partner_member)
                );
              });
            })().then(() => {
              var t;
              (null === (t = null == e ? void 0 : e.token) || void 0 === t
                ? void 0
                : t.reason) || n(!0);
            });
          }, []),
          t
        );
      }
      function v(e) {
        i.OT.BIsInitialized() ||
          i.OT.Initialize(new u.J(c.De.WEBAPI_BASE_URL, e));
      }
      function _(e) {
        return i.OT.BIsInitialized() || v(e || null), !0;
      }
    },
    2523: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => E });
      var r = n(67294),
        i = (n(92398), n(34425)),
        o = n(35921),
        u = (n(12505), n(10767), n(71174)),
        s = n(6843),
        a = n(52114),
        l = n(31933),
        c = n(95598),
        d = n(99946),
        v = n(27717),
        _ = n(41311),
        p = n(57237),
        g = n.n(p),
        m = n(90666);
      function E(e) {
        const { appID: t } = e,
          n = (0, v.g)(),
          [p] = (0, l.Ar)("inqueue", "0"),
          [E, f] = (0, r.useState)(!1),
          [y, D] = (0, r.useState)(!1),
          [C] = (0, a.vs)(t, { include_assets: !0 }),
          b = (0, u.L)(),
          w = r.useRef();
        r.useEffect(() => {
          var e;
          return null === (e = w.current) || void 0 === e
            ? void 0
            : e.Activate(!0);
        }, []);
        const S = (0, m.id)(),
          { eStoreDiscoveryQueueType: T, storePageFilter: B } =
            r.useMemo(() => {
              if ((null == p ? void 0 : p.length) > 0) {
                const e = p.split("_"),
                  t = Number(e[0]);
                let n;
                return (
                  e.length > 1 && (n = (0, s.M_)(e[1])),
                  { eStoreDiscoveryQueueType: t, storePageFilter: n }
                );
              }
              return { eStoreDiscoveryQueueType: 0, storePageFilter: void 0 };
            }, [p]),
          I = r.useCallback(() => {
            D(!0);
          }, []),
          W = r.useCallback(() => {
            f(!0);
          }, []),
          k = (0, s.ZP)(T, B);
        return n && C
          ? y
            ? null
            : r.createElement(
                i.p,
                {
                  NavigationManager: b,
                  navTreeRef: w,
                  navID: "DiscoveryQueueAppWidget",
                },
                r.createElement(
                  o.s,
                  {
                    focusable: !0,
                    className: g().DiscoveryQueueWidgetCtn,
                    onSecondaryButton: I,
                    onOKButton: W,
                    onOKActionDescription: (0, _.Xx)(
                      "#DiscoveryQueue_ResumeWizard"
                    ),
                    onSecondaryActionDescription: (0, _.Xx)("#Button_Close"),
                  },
                  r.createElement("img", {
                    className: g().WidgetCapsule,
                    src:
                      null == C ? void 0 : C.GetAssets().GetSmallCapsuleURL(),
                  }),
                  r.createElement(
                    "div",
                    { onClick: W, className: g().WidgetText },
                    (0, _.Xx)("#DiscoveryQueue_ResumeWizard"),
                    (null == k ? void 0 : k.length) > 0 && ": " + k
                  ),
                  !S &&
                    r.createElement(
                      "div",
                      { className: g().CloseButton, onClick: I },
                      r.createElement(c.X, null)
                    ),
                  E &&
                    r.createElement(d.MS, {
                      includeAppID: t,
                      bWizardVisible: E,
                      fnCloseModal: () => f(!1),
                      eStoreDiscoveryQueueType: T,
                      storePageFilter: B,
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
        o = n(99946),
        u = n(27717),
        s = n(35921),
        a = n(90666),
        l = n(37699),
        c = n(41414);
      function d(e) {
        const t = (0, u.g)(),
          [n, d] = (0, r.useState)(!1),
          v = r.useCallback(() => {
            a.L7.logged_in
              ? d(!0)
              : (0, c.AM)(
                  r.createElement(l.JX, {
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
              s.s,
              null,
              r.createElement(
                "a",
                { onClick: v, className: "experiment-button" },
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

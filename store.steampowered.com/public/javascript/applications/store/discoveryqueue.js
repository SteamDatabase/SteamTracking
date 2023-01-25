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
      n.d(t, { p: () => l });
      var r = n(70655),
        o = n(67294),
        i = n(7707),
        s = n(27745),
        a = n(64839),
        u = n(90666),
        c = n(9198);
      function l(e) {
        const { children: t, navTreeRef: n } = e,
          l = (0, r._T)(e, ["children", "navTreeRef"]),
          d = o.useRef(),
          p = (0, a.BE)(d, n),
          v = (0, u.id)(),
          _ = window.__virtual_keyboard_client;
        if (
          ((0, o.useEffect)(() => {
            c.Wz.SetHookFactory(() => _);
          }, [_]),
          v)
        ) {
          const e = window.__nav_tree_root;
          return o.createElement(
            i.Fe,
            Object.assign({}, l, {
              navTreeRef: p,
              secondary: !0,
              parentEmbeddedNavTree: e,
            }),
            o.createElement(s.O, null, t)
          );
        }
        return o.createElement(o.Fragment, null, t);
      }
    },
    27991: (e, t, n) => {
      "use strict";
      n.d(t, { NX: () => d, nf: () => p, ue: () => v });
      var r = n(70655),
        o = n(37694),
        i = n(67294),
        s = n(73812),
        a = n(159),
        u = n(74163),
        c = n(77520),
        l = n(90666);
      function d() {
        const e = (0, u.T)("usePartnerStoreBrowseAPI"),
          [t, n] = (0, i.useState)(!1);
        return (
          (0, i.useEffect)(() => {
            (function (e = !1) {
              return (0, r.mG)(this, void 0, void 0, function* () {
                if (e && a.Z.BIsInitialized()) return;
                const t = (0, l.kQ)(
                  "partnerbrowse_webapi_token",
                  "application_config"
                );
                (0, c.X)(Boolean(t), "require partnerbrowse_webapi_token");
                const n = new s.J(l.De.WEBAPI_BASE_URL, t);
                return (
                  ("dev" != l.De.WEB_UNIVERSE && "beta" != l.De.WEB_UNIVERSE) ||
                    console.log(
                      "DEV_DEBUG: Initializing CStoreItemCache with access token",
                      t
                    ),
                  p(t),
                  a.Z.Initialize(n, l.L7.is_partner_member)
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
      function p(e) {
        o.OT.BIsInitialized() ||
          o.OT.Initialize(new s.J(l.De.WEBAPI_BASE_URL, e));
      }
      function v(e) {
        return o.OT.BIsInitialized() || p(e || null), !0;
      }
    },
    31933: (e, t, n) => {
      "use strict";
      n.d(t, { Ar: () => u, Wo: () => c, i9: () => a, ks: () => i });
      var r = n(67294),
        o = n(78587);
      function i(e, t) {
        let n;
        "string" == typeof e
          ? (n = e)
          : "location" in e
          ? (n = e.location.search)
          : "search" in e && (n = e.search);
        const r = new URLSearchParams(n.substring(1));
        if (r.has(t)) {
          const e = r.getAll(t);
          return e[e.length - 1];
        }
      }
      const s = (e) => null != e;
      function a(e, t, n) {
        const r = new URLSearchParams(e.location.search.substring(1));
        r.delete(t), s(n) && r.append(t, n), e.push(`?${r.toString()}`);
      }
      function u(e, t) {
        const n = (0, o.k6)(),
          u = (0, o.TH)(),
          c = (0, r.useMemo)(() => {
            const n = i(u.search, e);
            return s(n)
              ? s(t)
                ? "boolean" == typeof t
                  ? t.constructor("false" !== n)
                  : t.constructor(n)
                : n
              : t;
          }, [u.search, e, t]),
          l = (0, r.useCallback)(
            (t) => {
              a(n, e, s(t) ? String(t) : null);
            },
            [n, e]
          );
        return [c, l];
      }
      function c(e, t) {
        const n = new URLSearchParams(e.location.search.substring(1));
        for (const e in t)
          if (t.hasOwnProperty(e)) {
            const r = t[e];
            n.delete(e), s(r) && n.append(e, r);
          }
        e.push(`?${n.toString()}`);
      }
    },
    22745: (e, t, n) => {
      "use strict";
      n.d(t, { P: () => o });
      var r = n(67294);
      function o(e, t) {
        r.useEffect(() => {
          const n = (n) => {
            n.key === e && t(n);
          };
          return (
            document.addEventListener("keydown", n),
            () => document.removeEventListener("keydown", n)
          );
        }, [e, t]);
      }
    },
    2523: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => m });
      var r = n(67294),
        o = (n(92398), n(34425)),
        i = n(35921),
        s = (n(12505), n(10767), n(71174)),
        a = n(6843),
        u = n(52114),
        c = n(31933),
        l = n(95598),
        d = n(99946),
        p = n(27717),
        v = n(41311),
        _ = n(57237),
        f = n.n(_),
        g = n(90666);
      function m(e) {
        const { appID: t } = e,
          n = (0, p.g)(),
          [_] = (0, c.Ar)("inqueue", "0"),
          [m, E] = (0, r.useState)(!1),
          [y, h] = (0, r.useState)(!1),
          [w] = (0, u.vs)(t, { include_assets: !0 }),
          D = (0, s.L)(),
          S = r.useRef();
        r.useEffect(() => {
          var e;
          return null === (e = S.current) || void 0 === e
            ? void 0
            : e.Activate(!0);
        }, []);
        const b = (0, g.id)(),
          { eStoreDiscoveryQueueType: C, storePageFilter: k } =
            r.useMemo(() => {
              if ((null == _ ? void 0 : _.length) > 0) {
                const e = _.split("_"),
                  t = Number(e[0]);
                let n;
                return (
                  e.length > 1 && (n = (0, a.M_)(e[1])),
                  { eStoreDiscoveryQueueType: t, storePageFilter: n }
                );
              }
              return { eStoreDiscoveryQueueType: 0, storePageFilter: void 0 };
            }, [_]),
          T = r.useCallback(() => {
            h(!0);
          }, []),
          B = r.useCallback(() => {
            E(!0);
          }, []),
          W = (0, a.ZP)(C, k);
        return n && w
          ? y
            ? null
            : r.createElement(
                o.p,
                {
                  NavigationManager: D,
                  navTreeRef: S,
                  navID: "DiscoveryQueueAppWidget",
                },
                r.createElement(
                  i.s,
                  {
                    focusable: !0,
                    className: f().DiscoveryQueueWidgetCtn,
                    onSecondaryButton: T,
                    onOKButton: B,
                    onOKActionDescription: (0, v.Xx)(
                      "#DiscoveryQueue_ResumeWizard"
                    ),
                    onSecondaryActionDescription: (0, v.Xx)("#Button_Close"),
                  },
                  r.createElement("img", {
                    className: f().WidgetCapsule,
                    src:
                      null == w ? void 0 : w.GetAssets().GetSmallCapsuleURL(),
                  }),
                  r.createElement(
                    "div",
                    { onClick: B, className: f().WidgetText },
                    (0, v.Xx)("#DiscoveryQueue_ResumeWizard"),
                    (null == W ? void 0 : W.length) > 0 && ": " + W
                  ),
                  !b &&
                    r.createElement(
                      "div",
                      { className: f().CloseButton, onClick: T },
                      r.createElement(l.X, null)
                    ),
                  m &&
                    r.createElement(d.MS, {
                      includeAppID: t,
                      bWizardVisible: m,
                      fnCloseModal: () => E(!1),
                      eStoreDiscoveryQueueType: C,
                      storePageFilter: k,
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
        o = (n(10767), n(41311)),
        i = n(99946),
        s = n(27717),
        a = n(35921),
        u = n(90666),
        c = n(37699),
        l = n(41414);
      function d(e) {
        const t = (0, s.g)(),
          [n, d] = (0, r.useState)(!1),
          p = r.useCallback(() => {
            u.L7.logged_in
              ? d(!0)
              : (0, l.AM)(
                  r.createElement(c.JX, {
                    onOK: () => {
                      window.location.href = `${
                        u.De.STORE_BASE_URL
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
          ? r.createElement(
              a.s,
              null,
              r.createElement(
                "a",
                { onClick: p, className: "experiment-button" },
                (0, o.Xx)("#DiscoveryQueue_OpenWizard")
              ),
              n &&
                r.createElement(i.MS, {
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

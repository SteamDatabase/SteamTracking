/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [556],
  {
    78236: (e) => {
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
    29979: (e, t, n) => {
      "use strict";
      n.d(t, { p: () => l });
      var i = n(33940),
        r = n(89526),
        o = n(49194),
        c = n(49920),
        s = n(31621),
        a = n(70983),
        u = n(38811);
      function l(e) {
        const { children: t, navTreeRef: n } = e,
          l = (0, i._T)(e, ["children", "navTreeRef"]),
          d = r.useRef(),
          v = (0, s.BE)(d, n),
          E = (0, a.id)(),
          p = window.__virtual_keyboard_client;
        if (
          ((0, r.useEffect)(() => {
            u.Wz.SetHookFactory(() => p);
          }, [p]),
          E)
        ) {
          const e = window.__nav_tree_root;
          return r.createElement(
            o.Fe,
            Object.assign({}, l, {
              navTreeRef: v,
              secondary: !0,
              parentEmbeddedNavTree: e,
            }),
            r.createElement(c.O, null, t)
          );
        }
        return r.createElement(r.Fragment, null, t);
      }
    },
    94082: (e, t, n) => {
      "use strict";
      n.d(t, { NX: () => d, nf: () => v, ue: () => E });
      var i = n(33940),
        r = n(87656),
        o = n(89526),
        c = n(70657),
        s = n(63154),
        a = n(66715),
        u = n(32338),
        l = n(70983);
      function d() {
        const e = (0, a.T)("usePartnerStoreBrowseAPI"),
          [t, n] = (0, o.useState)(!1);
        return (
          (0, o.useEffect)(() => {
            (function (e = !1) {
              return (0, i.mG)(this, void 0, void 0, function* () {
                if (e && s.Z.BIsInitialized()) return;
                const t = (0, l.kQ)(
                  "partnerbrowse_webapi_token",
                  "application_config"
                );
                (0, u.X)(Boolean(t), "require partnerbrowse_webapi_token");
                const n = new c.J(l.De.WEBAPI_BASE_URL, t);
                return (
                  ("dev" != l.De.WEB_UNIVERSE && "beta" != l.De.WEB_UNIVERSE) ||
                    console.log(
                      "DEV_DEBUG: Initializing CStoreItemCache with access token",
                      t
                    ),
                  v(t),
                  s.Z.Initialize(n, l.L7.is_partner_member)
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
        r.OT.BIsInitialized() ||
          r.OT.Initialize(new c.J(l.De.WEBAPI_BASE_URL, e));
      }
      function E(e) {
        return r.OT.BIsInitialized() || v(e || null), !0;
      }
    },
    31319: (e, t, n) => {
      "use strict";
      n.d(t, { Ar: () => a, Wo: () => u, i9: () => s, ks: () => o });
      var i = n(89526),
        r = n(59934);
      function o(e, t) {
        let n;
        "string" == typeof e
          ? (n = e)
          : "location" in e
          ? (n = e.location.search)
          : "search" in e && (n = e.search);
        const i = new URLSearchParams(n.substring(1));
        if (i.has(t)) {
          const e = i.getAll(t);
          return e[e.length - 1];
        }
      }
      const c = (e) => null != e;
      function s(e, t, n) {
        const i = new URLSearchParams(e.location.search.substring(1));
        i.delete(t), c(n) && i.append(t, n), e.push(`?${i.toString()}`);
      }
      function a(e, t) {
        const n = (0, r.k6)(),
          a = (0, r.TH)(),
          u = (0, i.useMemo)(() => {
            const n = o(a.search, e);
            return c(n)
              ? c(t)
                ? "boolean" == typeof t
                  ? t.constructor("false" !== n)
                  : t.constructor(n)
                : n
              : t;
          }, [a.search, e, t]),
          l = (0, i.useCallback)(
            (t) => {
              s(n, e, c(t) ? String(t) : null);
            },
            [n, e]
          );
        return [u, l];
      }
      function u(e, t) {
        const n = new URLSearchParams(e.location.search.substring(1));
        for (const e in t)
          if (t.hasOwnProperty(e)) {
            const i = t[e];
            n.delete(e), c(i) && n.append(e, i);
          }
        e.push(`?${n.toString()}`);
      }
    },
    81671: (e, t, n) => {
      "use strict";
      n.d(t, { P: () => r });
      var i = n(89526);
      function r(e, t) {
        i.useEffect(() => {
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
    99503: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => m });
      var i = n(89526),
        r = (n(38800), n(29979)),
        o = n(23907),
        c = (n(84042), n(54997), n(31641)),
        s = n(28697),
        a = n(23708),
        u = n(31319),
        l = n(86701),
        d = n(12687),
        v = n(36670),
        E = n(31587),
        p = n(78236),
        g = n.n(p),
        A = n(70983);
      function m(e) {
        const { appID: t } = e,
          n = (0, v.g)(),
          [p] = (0, u.Ar)("inqueue", "0"),
          [m, D] = (0, i.useState)(!1),
          [y, b] = (0, i.useState)(!1),
          [w] = (0, a.vs)(t, { include_assets: !0 }),
          R = (0, c.L)(),
          h = i.useRef();
        i.useEffect(() => {
          var e;
          return null === (e = h.current) || void 0 === e
            ? void 0
            : e.Activate(!0);
        }, []);
        const S = (0, A.id)(),
          { eStoreDiscoveryQueueType: f, storePageFilter: I } =
            i.useMemo(() => {
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
          N = i.useCallback(() => {
            b(!0);
          }, []),
          _ = i.useCallback(() => {
            D(!0);
          }, []),
          k = (0, s.ZP)(f, I);
        return n && w
          ? y
            ? null
            : i.createElement(
                r.p,
                {
                  NavigationManager: R,
                  navTreeRef: h,
                  navID: "DiscoveryQueueAppWidget",
                },
                i.createElement(
                  o.s,
                  {
                    focusable: !0,
                    className: g().DiscoveryQueueWidgetCtn,
                    onSecondaryButton: N,
                    onOKButton: _,
                    onOKActionDescription: (0, E.Xx)(
                      "#DiscoveryQueue_ResumeWizard"
                    ),
                    onSecondaryActionDescription: (0, E.Xx)("#Button_Close"),
                  },
                  i.createElement("img", {
                    className: g().WidgetCapsule,
                    src:
                      null == w ? void 0 : w.GetAssets().GetSmallCapsuleURL(),
                  }),
                  i.createElement(
                    "div",
                    { onClick: _, className: g().WidgetText },
                    (0, E.Xx)("#DiscoveryQueue_ResumeWizard"),
                    (null == k ? void 0 : k.length) > 0 && ": " + k
                  ),
                  !S &&
                    i.createElement(
                      "div",
                      { className: g().CloseButton, onClick: N },
                      i.createElement(l.X, null)
                    ),
                  m &&
                    i.createElement(d.MS, {
                      includeAppID: t,
                      bWizardVisible: m,
                      fnCloseModal: () => D(!1),
                      eStoreDiscoveryQueueType: f,
                      storePageFilter: I,
                    })
                )
              )
          : null;
      }
    },
    60948: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => d });
      var i = n(89526),
        r = (n(54997), n(31587)),
        o = n(12687),
        c = n(36670),
        s = n(23907),
        a = n(70983),
        u = n(46723),
        l = n(24868);
      function d(e) {
        const t = (0, c.g)(),
          [n, d] = (0, i.useState)(!1),
          v = i.useCallback(() => {
            a.L7.logged_in
              ? d(!0)
              : (0, l.AM)(
                  i.createElement(u.JX, {
                    onOK: () => {
                      window.location.href = `${
                        a.De.STORE_BASE_URL
                      }login?redir=${encodeURIComponent(
                        document.location.href
                      )}`;
                    },
                    strOKButtonText: (0, r.Xx)(
                      "#DiscoveryQueue_Error_Login_Title"
                    ),
                    strDescription: (0, r.Xx)("#DiscoveryQueue_Error_Login"),
                    strTitle: (0, r.Xx)("#DiscoveryQueue_Error_Login_Title"),
                  }),
                  window
                );
          }, []);
        return t
          ? i.createElement(
              s.s,
              null,
              i.createElement(
                "a",
                { onClick: v, className: "experiment-button" },
                (0, r.Xx)("#DiscoveryQueue_OpenWizard")
              ),
              n &&
                i.createElement(o.MS, {
                  bWizardVisible: n,
                  fnCloseModal: () => d(!1),
                  eStoreDiscoveryQueueType: 0,
                })
            )
          : i.createElement(
              "div",
              { className: "experiment-button-placeholder" },
              " "
            );
      }
    },
    36465: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => i });
      const i =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QUQ5NEMwOTYzRDc4MTFFQUExREZEODRBMDBCNjdENTEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QUQ5NEMwOTczRDc4MTFFQUExREZEODRBMDBCNjdENTEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBRDk0QzA5NDNENzgxMUVBQTFERkQ4NEEwMEI2N0Q1MSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBRDk0QzA5NTNENzgxMUVBQTFERkQ4NEEwMEI2N0Q1MSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Po/TXacAAABMSURBVHjaYvz//z8DNQHjyDMQDICGJgDx3f/kA5DeBJhh8f+pB+JBXr4DNFeZSp69CzLwP7UjZdTAkWAgVdMh1XMK1fPyCCwPAQIMAKf/Y+3dveJlAAAAAElFTkSuQmCC";
    },
  },
]);

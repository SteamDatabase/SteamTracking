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
        u = n(70983),
        a = n(38811);
      function l(e) {
        const { children: t, navTreeRef: n } = e,
          l = (0, i._T)(e, ["children", "navTreeRef"]),
          d = r.useRef(),
          g = (0, s.BE)(d, n),
          v = (0, u.id)(),
          p = window.__virtual_keyboard_client;
        if (
          ((0, r.useEffect)(() => {
            a.Wz.SetHookFactory(() => p);
          }, [p]),
          v)
        ) {
          const e = window.__nav_tree_root;
          return r.createElement(
            o.Fe,
            Object.assign({}, l, {
              navTreeRef: g,
              secondary: !0,
              parentEmbeddedNavTree: e,
            }),
            r.createElement(c.O, null, t)
          );
        }
        return r.createElement(r.Fragment, null, t);
      }
    },
    31319: (e, t, n) => {
      "use strict";
      n.d(t, { Ar: () => u, Wo: () => a, i9: () => s, ks: () => o });
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
      function u(e, t) {
        const n = (0, r.k6)(),
          u = (0, r.TH)(),
          a = (0, i.useMemo)(() => {
            const n = o(u.search, e);
            return c(n)
              ? c(t)
                ? "boolean" == typeof t
                  ? t.constructor("false" !== n)
                  : t.constructor(n)
                : n
              : t;
          }, [u.search, e, t]),
          l = (0, i.useCallback)(
            (t) => {
              s(n, e, c(t) ? String(t) : null);
            },
            [n, e]
          );
        return [a, l];
      }
      function a(e, t) {
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
        r = (n(49969), n(29979)),
        o = n(23907),
        c = (n(84042), n(54997), n(31641)),
        s = n(28697),
        u = n(23708),
        a = n(31319),
        l = n(86701),
        d = n(12687),
        g = n(36670),
        v = n(31587),
        p = n(78236),
        A = n.n(p),
        E = n(70983);
      function m(e) {
        const { appID: t } = e,
          n = (0, g.g)(),
          [p] = (0, a.Ar)("inqueue", "0"),
          [m, y] = (0, i.useState)(!1),
          [D, b] = (0, i.useState)(!1),
          [R] = (0, u.vs)(t, { include_assets: !0 }),
          h = (0, c.L)(),
          N = i.useRef();
        i.useEffect(() => {
          var e;
          return null === (e = N.current) || void 0 === e
            ? void 0
            : e.Activate(!0);
        }, []);
        const w = (0, E.id)(),
          { eStoreDiscoveryQueueType: S, storePageFilter: M } =
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
          Z = i.useCallback(() => {
            b(!0);
          }, []),
          f = i.useCallback(() => {
            y(!0);
          }, []),
          C = (0, s.ZP)(S, M);
        return n && R
          ? D
            ? null
            : i.createElement(
                r.p,
                {
                  NavigationManager: h,
                  navTreeRef: N,
                  navID: "DiscoveryQueueAppWidget",
                },
                i.createElement(
                  o.s,
                  {
                    focusable: !0,
                    className: A().DiscoveryQueueWidgetCtn,
                    onSecondaryButton: Z,
                    onOKButton: f,
                    onOKActionDescription: (0, v.Xx)(
                      "#DiscoveryQueue_ResumeWizard"
                    ),
                    onSecondaryActionDescription: (0, v.Xx)("#Button_Close"),
                  },
                  i.createElement("img", {
                    className: A().WidgetCapsule,
                    src:
                      null == R ? void 0 : R.GetAssets().GetSmallCapsuleURL(),
                  }),
                  i.createElement(
                    "div",
                    { onClick: f, className: A().WidgetText },
                    (0, v.Xx)("#DiscoveryQueue_ResumeWizard"),
                    (null == C ? void 0 : C.length) > 0 && ": " + C
                  ),
                  !w &&
                    i.createElement(
                      "div",
                      { className: A().CloseButton, onClick: Z },
                      i.createElement(l.X, null)
                    ),
                  m &&
                    i.createElement(d.MS, {
                      includeAppID: t,
                      bWizardVisible: m,
                      fnCloseModal: () => y(!1),
                      eStoreDiscoveryQueueType: S,
                      storePageFilter: M,
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
        u = n(70983),
        a = n(46085),
        l = n(24868);
      function d(e) {
        const t = (0, c.g)(),
          [n, d] = (0, i.useState)(!1),
          g = i.useCallback(() => {
            u.L7.logged_in
              ? d(!0)
              : (0, l.AM)(
                  i.createElement(a.JX, {
                    onOK: () => {
                      window.location.href = `${
                        u.De.STORE_BASE_URL
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
                { onClick: g, className: "experiment-button" },
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

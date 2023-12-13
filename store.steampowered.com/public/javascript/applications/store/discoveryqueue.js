/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [556],
  {
    47573: (e) => {
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
    66294: (e, t, n) => {
      "use strict";
      n.d(t, { p: () => u });
      var r = n(33940),
        i = n(89526),
        c = n(44026),
        o = n(17589),
        l = n(4306),
        s = n(32765),
        a = n(94952);
      function u(e) {
        const { children: t, navTreeRef: n } = e,
          u = (0, r._T)(e, ["children", "navTreeRef"]),
          d = i.useRef(),
          g = (0, l.BE)(d, n),
          p = (0, s.id)(),
          A = window.__virtual_keyboard_client;
        if (p) {
          const e = window.__nav_tree_root;
          return i.createElement(
            c.Fe,
            Object.assign({}, u, {
              navTreeRef: g,
              secondary: !0,
              parentEmbeddedNavTree: e,
            }),
            i.createElement(
              a.o5,
              { factory: A },
              i.createElement(o.O, null, t),
            ),
          );
        }
        return i.createElement(i.Fragment, null, t);
      }
    },
    5029: (e, t, n) => {
      "use strict";
      n.d(t, {
        Ar: () => a,
        Wo: () => u,
        i9: () => l,
        ks: () => c,
        nQ: () => s,
        ni: () => d,
      });
      var r = n(89526),
        i = n(59934);
      function c(e, t) {
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
      const o = (e) => null != e;
      function l(e, t, n, r = !1) {
        const i = new URLSearchParams(e.location.search.substring(1));
        i.delete(t),
          o(n) && i.append(t, n),
          r
            ? e.replace(`?${i.toString()}`, Object.assign({}, e.location.state))
            : e.push(`?${i.toString()}`);
      }
      function s(e, t, n) {
        l(e, t, n, !0);
      }
      function a(e, t) {
        const n = (0, i.k6)(),
          s = (0, i.TH)(),
          a = (0, r.useMemo)(() => {
            const n = c(s.search, e);
            return o(n)
              ? o(t)
                ? "boolean" == typeof t
                  ? t.constructor("false" !== n)
                  : t.constructor(n)
                : n
              : t;
          }, [s.search, e, t]),
          u = (0, r.useCallback)(
            (t) => {
              l(n, e, o(t) ? String(t) : null);
            },
            [n, e],
          );
        return [a, u];
      }
      function u(e, t, n = !1) {
        const r = new URLSearchParams(e.location.search.substring(1));
        for (const e in t)
          if (t.hasOwnProperty(e)) {
            const n = t[e];
            r.delete(e), o(n) && r.append(e, n);
          }
        n
          ? e.replace(`?${r.toString()}`, Object.assign({}, e.location.state))
          : e.push(`?${r.toString()}`);
      }
      function d(e, t) {
        u(e, t, !0);
      }
    },
    93908: (e, t, n) => {
      "use strict";
      n.d(t, { Jr: () => l, Mr: () => s, tk: () => a });
      var r = n(89526),
        i = n(701),
        c = n(16826),
        o = n(32765);
      function l() {
        return (0, o.id)()
          ? r.createElement(c.MCw, null)
          : r.createElement(i.JrY, null);
      }
      function s() {
        return r.createElement(i.MrB, null);
      }
      function a() {
        return (0, o.id)()
          ? r.createElement(c.tkI, null)
          : r.createElement(i.j5H, null);
      }
    },
    89350: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => m });
      var r = n(89526),
        i = n(66294),
        c = n(51438),
        o = n(83145),
        l = n(82588),
        s = n(25871),
        a = n(5029),
        u = n(701),
        d = n(49330),
        g = n(35388),
        p = n(14826),
        A = n(47573),
        v = n.n(A),
        E = n(32765);
      function m(e) {
        const { appID: t } = e,
          n = (0, g.g)(),
          [A] = (0, a.Ar)("inqueue", "0"),
          [m, D] = (0, r.useState)(!1),
          [y, b] = (0, r.useState)(!1),
          [R] = (0, s.vs)(t, { include_assets: !0 }),
          h = (0, o.L)(),
          N = r.useRef();
        r.useEffect(() => {
          var e;
          return null === (e = N.current) || void 0 === e
            ? void 0
            : e.Activate(!0);
        }, []);
        const M = (0, E.id)(),
          { eStoreDiscoveryQueueType: S, storePageFilter: w } =
            r.useMemo(() => {
              if ((null == A ? void 0 : A.length) > 0) {
                const e = A.split("_"),
                  t = Number(e[0]);
                let n;
                return (
                  e.length > 1 && (n = (0, l.M_)(e[1])),
                  { eStoreDiscoveryQueueType: t, storePageFilter: n }
                );
              }
              return { eStoreDiscoveryQueueType: 0, storePageFilter: void 0 };
            }, [A]),
          f = r.useCallback(() => {
            b(!0);
          }, []),
          C = r.useCallback(() => {
            D(!0);
          }, []),
          Q = (0, l.ZP)(S, w);
        return n && R
          ? y
            ? null
            : r.createElement(
                i.p,
                {
                  NavigationManager: h,
                  navTreeRef: N,
                  navID: "DiscoveryQueueAppWidget",
                },
                r.createElement(
                  c.s,
                  {
                    focusable: !0,
                    className: v().DiscoveryQueueWidgetCtn,
                    onSecondaryButton: f,
                    onOKButton: C,
                    onOKActionDescription: (0, p.Xx)(
                      "#DiscoveryQueue_ResumeWizard",
                    ),
                    onSecondaryActionDescription: (0, p.Xx)("#Button_Close"),
                  },
                  r.createElement("img", {
                    className: v().WidgetCapsule,
                    src:
                      null == R ? void 0 : R.GetAssets().GetSmallCapsuleURL(),
                  }),
                  r.createElement(
                    "div",
                    { onClick: C, className: v().WidgetText },
                    (0, p.Xx)("#DiscoveryQueue_ResumeWizard"),
                    (null == Q ? void 0 : Q.length) > 0 && ": " + Q,
                  ),
                  !M &&
                    r.createElement(
                      "div",
                      { className: v().CloseButton, onClick: f },
                      r.createElement(u.X, null),
                    ),
                  m &&
                    r.createElement(d.MS, {
                      includeAppID: t,
                      bWizardVisible: m,
                      fnCloseModal: () => D(!1),
                      eStoreDiscoveryQueueType: S,
                      storePageFilter: w,
                    }),
                ),
              )
          : null;
      }
    },
    77091: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => d });
      var r = n(89526),
        i = n(14826),
        c = n(49330),
        o = n(35388),
        l = n(51438),
        s = n(32765),
        a = n(99307),
        u = n(57742);
      function d(e) {
        const t = (0, o.g)(),
          [n, d] = (0, r.useState)(!1),
          g = r.useCallback(() => {
            s.L7.logged_in
              ? d(!0)
              : (0, u.AM)(
                  r.createElement(a.JX, {
                    onOK: () => {
                      window.location.href = `${
                        s.De.STORE_BASE_URL
                      }login?redir=${encodeURIComponent(
                        document.location.href,
                      )}`;
                    },
                    strOKButtonText: (0, i.Xx)(
                      "#DiscoveryQueue_Error_Login_Title",
                    ),
                    strDescription: (0, i.Xx)("#DiscoveryQueue_Error_Login"),
                    strTitle: (0, i.Xx)("#DiscoveryQueue_Error_Login_Title"),
                  }),
                  window,
                );
          }, []);
        return t
          ? r.createElement(
              l.s,
              null,
              r.createElement(
                "a",
                { onClick: g, className: "experiment-button" },
                (0, i.Xx)("#DiscoveryQueue_OpenWizard"),
              ),
              n &&
                r.createElement(c.MS, {
                  bWizardVisible: n,
                  fnCloseModal: () => d(!1),
                  eStoreDiscoveryQueueType: 0,
                }),
            )
          : r.createElement(
              "div",
              { className: "experiment-button-placeholder" },
              " ",
            );
      }
    },
    26121: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => r });
      const r =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QUQ5NEMwOTYzRDc4MTFFQUExREZEODRBMDBCNjdENTEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QUQ5NEMwOTczRDc4MTFFQUExREZEODRBMDBCNjdENTEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBRDk0QzA5NDNENzgxMUVBQTFERkQ4NEEwMEI2N0Q1MSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBRDk0QzA5NTNENzgxMUVBQTFERkQ4NEEwMEI2N0Q1MSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Po/TXacAAABMSURBVHjaYvz//z8DNQHjyDMQDICGJgDx3f/kA5DeBJhh8f+pB+JBXr4DNFeZSp69CzLwP7UjZdTAkWAgVdMh1XMK1fPyCCwPAQIMAKf/Y+3dveJlAAAAAElFTkSuQmCC";
    },
  },
]);

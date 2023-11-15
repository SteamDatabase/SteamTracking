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
    66294: (e, t, i) => {
      "use strict";
      i.d(t, { p: () => a });
      var n = i(33940),
        r = i(89526),
        o = i(44026),
        c = i(17589),
        l = i(4306),
        u = i(32765),
        s = i(94952);
      function a(e) {
        const { children: t, navTreeRef: i } = e,
          a = (0, n._T)(e, ["children", "navTreeRef"]),
          d = r.useRef(),
          A = (0, l.BE)(d, i),
          v = (0, u.id)(),
          g = window.__virtual_keyboard_client;
        if (
          ((0, r.useEffect)(() => {
            s.Wz.SetHookFactory(() => g);
          }, [g]),
          v)
        ) {
          const e = window.__nav_tree_root;
          return r.createElement(
            o.Fe,
            Object.assign({}, a, {
              navTreeRef: A,
              secondary: !0,
              parentEmbeddedNavTree: e,
            }),
            r.createElement(c.O, null, t),
          );
        }
        return r.createElement(r.Fragment, null, t);
      }
    },
    89350: (e, t, i) => {
      "use strict";
      i.r(t), i.d(t, { default: () => D });
      var n = i(89526),
        r = i(66294),
        o = i(51438),
        c = i(83145),
        l = i(82588),
        u = i(25871),
        s = i(5029),
        a = i(701),
        d = i(49330),
        A = i(35388),
        v = i(14826),
        g = i(47573),
        E = i.n(g),
        p = i(32765);
      function D(e) {
        const { appID: t } = e,
          i = (0, A.g)(),
          [g] = (0, s.Ar)("inqueue", "0"),
          [D, m] = (0, n.useState)(!1),
          [y, N] = (0, n.useState)(!1),
          [R] = (0, u.vs)(t, { include_assets: !0 }),
          b = (0, c.L)(),
          M = n.useRef();
        n.useEffect(() => {
          var e;
          return null === (e = M.current) || void 0 === e
            ? void 0
            : e.Activate(!0);
        }, []);
        const Z = (0, p.id)(),
          { eStoreDiscoveryQueueType: Q, storePageFilter: w } =
            n.useMemo(() => {
              if ((null == g ? void 0 : g.length) > 0) {
                const e = g.split("_"),
                  t = Number(e[0]);
                let i;
                return (
                  e.length > 1 && (i = (0, l.M_)(e[1])),
                  { eStoreDiscoveryQueueType: t, storePageFilter: i }
                );
              }
              return { eStoreDiscoveryQueueType: 0, storePageFilter: void 0 };
            }, [g]),
          C = n.useCallback(() => {
            N(!0);
          }, []),
          S = n.useCallback(() => {
            m(!0);
          }, []),
          T = (0, l.ZP)(Q, w);
        return i && R
          ? y
            ? null
            : n.createElement(
                r.p,
                {
                  NavigationManager: b,
                  navTreeRef: M,
                  navID: "DiscoveryQueueAppWidget",
                },
                n.createElement(
                  o.s,
                  {
                    focusable: !0,
                    className: E().DiscoveryQueueWidgetCtn,
                    onSecondaryButton: C,
                    onOKButton: S,
                    onOKActionDescription: (0, v.Xx)(
                      "#DiscoveryQueue_ResumeWizard",
                    ),
                    onSecondaryActionDescription: (0, v.Xx)("#Button_Close"),
                  },
                  n.createElement("img", {
                    className: E().WidgetCapsule,
                    src:
                      null == R ? void 0 : R.GetAssets().GetSmallCapsuleURL(),
                  }),
                  n.createElement(
                    "div",
                    { onClick: S, className: E().WidgetText },
                    (0, v.Xx)("#DiscoveryQueue_ResumeWizard"),
                    (null == T ? void 0 : T.length) > 0 && ": " + T,
                  ),
                  !Z &&
                    n.createElement(
                      "div",
                      { className: E().CloseButton, onClick: C },
                      n.createElement(a.X, null),
                    ),
                  D &&
                    n.createElement(d.MS, {
                      includeAppID: t,
                      bWizardVisible: D,
                      fnCloseModal: () => m(!1),
                      eStoreDiscoveryQueueType: Q,
                      storePageFilter: w,
                    }),
                ),
              )
          : null;
      }
    },
    77091: (e, t, i) => {
      "use strict";
      i.r(t), i.d(t, { default: () => d });
      var n = i(89526),
        r = i(14826),
        o = i(49330),
        c = i(35388),
        l = i(51438),
        u = i(32765),
        s = i(99307),
        a = i(57742);
      function d(e) {
        const t = (0, c.g)(),
          [i, d] = (0, n.useState)(!1),
          A = n.useCallback(() => {
            u.L7.logged_in
              ? d(!0)
              : (0, a.AM)(
                  n.createElement(s.JX, {
                    onOK: () => {
                      window.location.href = `${
                        u.De.STORE_BASE_URL
                      }login?redir=${encodeURIComponent(
                        document.location.href,
                      )}`;
                    },
                    strOKButtonText: (0, r.Xx)(
                      "#DiscoveryQueue_Error_Login_Title",
                    ),
                    strDescription: (0, r.Xx)("#DiscoveryQueue_Error_Login"),
                    strTitle: (0, r.Xx)("#DiscoveryQueue_Error_Login_Title"),
                  }),
                  window,
                );
          }, []);
        return t
          ? n.createElement(
              l.s,
              null,
              n.createElement(
                "a",
                { onClick: A, className: "experiment-button" },
                (0, r.Xx)("#DiscoveryQueue_OpenWizard"),
              ),
              i &&
                n.createElement(o.MS, {
                  bWizardVisible: i,
                  fnCloseModal: () => d(!1),
                  eStoreDiscoveryQueueType: 0,
                }),
            )
          : n.createElement(
              "div",
              { className: "experiment-button-placeholder" },
              " ",
            );
      }
    },
    26121: (e, t, i) => {
      "use strict";
      i.d(t, { Z: () => n });
      const n =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QUQ5NEMwOTYzRDc4MTFFQUExREZEODRBMDBCNjdENTEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QUQ5NEMwOTczRDc4MTFFQUExREZEODRBMDBCNjdENTEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBRDk0QzA5NDNENzgxMUVBQTFERkQ4NEEwMEI2N0Q1MSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBRDk0QzA5NTNENzgxMUVBQTFERkQ4NEEwMEI2N0Q1MSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Po/TXacAAABMSURBVHjaYvz//z8DNQHjyDMQDICGJgDx3f/kA5DeBJhh8f+pB+JBXr4DNFeZSp69CzLwP7UjZdTAkWAgVdMh1XMK1fPyCCwPAQIMAKf/Y+3dveJlAAAAAElFTkSuQmCC";
    },
  },
]);
